const express = require('express')
const router = express.Router()
const validUrl = require('valid-url')
const shortid = require('shortid')
const config = require('config')

const Url = require('../models/url')

//@routes   POST /api/url/shorten
//@desc     Create short URL
router.post('/shorten', async (req, res)=> {
    const {longUrl, alias} = req.body
    const baseUrl = config.get('baseUrl')


    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json('Invalid baseURl')
    }
    //Create UrlCode
    const urlCode = shortid.generate()

    //Check longUrl
    if(validUrl.isUri(longUrl)) {
        try {
            let url = await Url.findOne({longUrl})
            if(url){
                return res.json(url)
            } else {
                if(alias){
                    let searchAlias = await Url.findOne({alias})    
                    if(searchAlias){
                        return res.status(401).json({
                            done: false,
                            reason: 'alias has already been given'
                        })
                    }else {
                        const shortUrl = baseUrl+ '/' + alias
                        url = new Url({
                            longUrl,
                            shortUrl,
                            alias,
                            date: new Date()
                        })
                    }
                } else {
                    const shortUrl = baseUrl + '/' + urlCode
                    url = new Url({
                        longUrl,
                        shortUrl,
                        urlCode,
                        date: new Date()
                    })
                }
            
                await url.save()
                res.json(url)
            }
        } catch (error) {
            console.error(err)
            res.status(500).json('Server Error')
        }
    } else {
        res.status(401).json('Invalid Long Url')
    }

})

module.exports = router
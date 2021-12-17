const express = require('express')
const router = express.Router()

const Url = require('../models/url')

// @route GET '/:code'
// @desc  Rediraction to long/original URL

router.get('/:code', async (req, res) => {
    
        try {
            if((req.params.code).length < 4){
                res.status(404).json('invalid URL')
            }

            const url = await Url.findOne({$or: [{urlCode: req.params.code} ,{alias: req.params.code}]})
            if(url){
                return res.redirect(url.longUrl)
            } else {
                res.status(404).json('No URL Found')
            }
        } catch (err) {
            console.error(err)
            res.status(500).json("Server Error")
        }
})

module.exports = router
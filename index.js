const express = require ('express')
const connectDB = require('./config/db')

const app = express()

//Connect to DB
connectDB();

app.use(express.json({extends: false}))

//Define Routes
app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))

//@route    GET '/'
//@dec      When anyone visit the baseurl, he will be forwarded to the Github Repo
app.get('/', (req, res) => {
    res.redirect('https://github.com/ooralas/mini_projects-urlShortner_express_mongodb')
})


const Port = process.env.PORT || 5000;

app.listen(Port, () => {
    console.log(`Server is running on PORT:${Port}`) 
})

//404 
app.use((req, res) => {
    res.status(404)
})
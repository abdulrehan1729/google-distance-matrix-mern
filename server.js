const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const distance = require('google-distance-matrix');

const port = process.env.PORT || 8000


app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())


app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})
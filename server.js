const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routers/routes')

const port = process.env.PORT || 8000


app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.use('/', routes)

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})
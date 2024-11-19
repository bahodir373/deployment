const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000

app.get('/' , (req , res)=>{

   res.send('<h1>Hello World<h1>')

})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))

const express = require('express')
require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 5000

const app = express()

app.use(cors())//any one can use
app.use(express.json())
app.get('/',(req,res)=>{
    res.status(400).send('hello world')
})
app.listen(port,()=>{
    console.log(`server connected successfully at ${port}`)
})
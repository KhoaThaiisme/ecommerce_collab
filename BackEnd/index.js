import { config } from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'

const app = express();

//middleware
app.use(bodyParser.json())
app.use(morgan('tiny')) // display log status

import 'dotenv/config'

const api = process.env.API_URL

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: Number
})

const Product = mongoose.model('Product', productSchema)

app.get(`${api}/products`, (req, res) => {
    const product = {
        id: 1,
        name: 'hair dresser', 
        image: 'some_url'
    }
    res.send(product)
})
app.post(`${api}/products`, (req, res) => {
    const newProduct = req.body;
    console.log(newProduct)
    res.send(newProduct)
})

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'eshop-database'
})
.then(()=> {
    console.log('Database Connection is ready ...')
})
.catch((err) => {
    console.log(err)
})

app.listen(3000, ()=>{
    console.log(api)
    console.log('Server is running now on http://localhost:3000')
})
import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import morgan from 'morgan';
import 'dotenv/config'
import mongoose from 'mongoose';
import { CreateNewProduct, getProduct } from './models/Product.js';
import { CreateNewUser } from './models/user.js';
const api = process.env.API_URL;
const app = express();
app.use(bodyParser.json());
app.use(morgan('tiny')); // log requests
app.post(`${api}/createproduct`, CreateNewProduct);
app.get(`${api}/products`, getProduct);

app.post(`/signup`, CreateNewUser)

mongoose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'eshop-database'
})
    .then(() => {
        console.log('Database connection is ready');
    })
    .catch((err) => {
        console.log(err);
    }
);
app.listen(3000, () => {
    console.log(api);
    console.log('Server started on port 4000!');
    }
);
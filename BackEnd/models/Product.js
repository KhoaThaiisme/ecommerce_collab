import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const ProductSchema = new Schema ({
    name: String,
    image: String,
    countInStock: Number
})

const productModel = mongoose.model('Product', ProductSchema)

export default productModel;
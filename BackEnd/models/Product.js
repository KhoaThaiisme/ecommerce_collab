import mongoose from 'mongoose';
export const Schema = mongoose.Schema;
export const ProductSchema = new Schema({
    name: String,
    image: String,
    countInStock: {
        type: Number,
        required: true
    }
});
export const ProductModel = mongoose.model('Product', ProductSchema);
export function CreateNewProduct(req, res) {
    const newProduct = new ProductModel({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
    })
    newProduct.save()
        .then((createdProduct) => {
            res.status(201).json(createdProduct);
        }
        )
        .catch((err) => {
            res.status(500).json({
                error: err,
                success: false
            })
        }
        )
}

export async function getProduct(req, res) {
    const Product = await ProductModel.find()
    res.send(Product)
}
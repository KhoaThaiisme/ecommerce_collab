import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const CategorySchema = new Schema ({
    name: String, 
    color: String,
    icon: String, 
    image: String
})
export const CategoryModel = mongoose.model('Category', CategoryModel)

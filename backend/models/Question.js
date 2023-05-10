import mongoose from 'mongoose'

const QuestionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please provide a text'],
    },
    value: {
        type: Number,
        required: [true, 'Please provide a value'],
    },
    answered: {
        type: Boolean,
        default: false,
    },
});

/////////////////////////// EXPORT

export default mongoose.models.Question || mongoose.model('Question', QuestionSchema);

// const Product = mongoose.models && "Product" in mongoose.models ? mongoose.models. Product : mongoose.model("Product", PostSchema);
// export default Product;

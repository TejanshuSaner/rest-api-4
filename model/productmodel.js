const mongoose = require('mongoose')
const productschema = mongoose.Schema(
    {


        name: {
            type: String,
            required: [true, "Please enter name"]
        },
        quantity: {
            type: String,
            required: [true, "please enter product quantity"]
        },
        price: {
            type: String,
            required: [true, "please enter quantity"]
        }
    },
    {
        timestamps: true,
    }
)
const product = mongoose.model('product', productschema);

module.exports = product;
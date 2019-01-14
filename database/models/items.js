const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    note: {
        type: String
    },
    // case: {
    //     type: mongoose.Schema.ObjectId, ref: 'Case',
    //     required: true
    // },
})

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type : String,
    },
    description: String,
    image: { 
        filename: String, 
        url: String 
    },
    // image: {
    //     type : String,
    //     default : 
    //         "https://unsplash.com/photos/brown-house-near-body-of-water-zAjdgNXsMeg",
    //     set: (v) => v === "" ? "https://unsplash.com/photos/brown-house-near-body-of-water-zAjdgNXsMeg" : v,
    // },
    price : Number,
    location : String,
    country: String
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
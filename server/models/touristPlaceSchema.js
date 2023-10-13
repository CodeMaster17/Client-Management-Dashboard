const mongoose = require("mongoose");
const validator = require("validator");

const touristPlaceSchema = new mongoose.Schema({
    placeName: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        required: true,
        trim: true
    },
    review: {
        type: String,
        required: true,
        trim: true
    },
    originalPrice: {
        type: Number,
        required: true,
        trim: true
    },
    discountPrice: {
        type: Number,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    activities: {
        type: String,
        required: true,
        trim: true
    },
    datecreated: Date,
    dateUpdated: Date

})

// model
const touristPlace = new mongoose.model("touristPlace", touristPlaceSchema);
module.exports = touristPlace;
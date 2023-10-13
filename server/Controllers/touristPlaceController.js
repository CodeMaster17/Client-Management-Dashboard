const touristPlaceSchema = require('../models/touristPlaceSchema');
const moment = require("moment");
const csv = require("fast-csv");
const fs = require("fs");
const BASE_URL = process.env.BASE_URL

// register tourist place
exports.touristPlacePost = async (req, res) => {
    console.log(req.body)


    const { placeName, rating, originalPrice, discountPrice, description, city, country, activities, review } = req.body;

    if (!placeName || !rating || !review || !originalPrice || !discountPrice || !description || !city || !country || !activities) {
        return res.status(401).json("All Inputs is required")
    }

    try {
        const pretouristplace = await touristPlaceSchema.findOne({ placeName: placeName });

        if (pretouristplace) {
            return res.status(401).json("This tourist place already exist in our database")
        } else {

            const datecreated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

            const touristPlaceData = new touristPlaceSchema({
                placeName, rating, originalPrice, review, discountPrice, description, city, country, activities, datecreated
            });
            await touristPlaceData.save();
            return res.status(200).json(touristPlaceData);
        }
    } catch (error) {
        return res.status(401).json(error);
        console.log("catch block error")
    }
}

//  getting tourist place
exports.touristPlaceGetAll = async (req, res) => {
    try {
        const touristPlaceData = await touristPlaceSchema.find()
        return res.status(200).json(touristPlaceData)
    } catch (error) {
        res.status(401).json(error);
    }
}

// single place get
exports.singleplaceget = async (req, res) => {
    const { id } = req.params
    try {
        const singleplace = await touristPlaceSchema.findOne({ _id: id })
        res.status(200).json(singleplace)
    } catch (error) {
        res.status(401).json(error);
    }
}

// single place edit
exports.singleplaceedit = async (req, res) => {
    const { id } = req.params
    const { name, rating, originalPrice, discountPrice, description, city, country, activities } = req.body;

    const dateUpdated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

    try {
        const updatePlace = await touristPlaceSchema.findByIdAndUpdate({ _id: id }, {
            name, rating, originalPrice, discountPrice, description, city, country, activities, dateUpdated
        }, {
            new: true
        });

        await updatePlace.save();
        res.status(200).json(updatePlace);
    } catch (error) {
        res.status(401).json(error);
    }
}

// single place delete
exports.singleplacedelete = async (req, res) => {
    const { id } = req.params
    try {
        const deletePlace = await touristPlaceSchema.findByIdAndDelete({ _id: id })
        res.status(200).json(deletePlace)
    } catch (error) {
        res.status(401).json(error);
    }
}
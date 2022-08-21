const express = require("express");
const Location = require("../models/Location");

const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find({}).sort({ name: "asc" });
    if (locations) {
      res.status(200).send(locations);
      console.log(locations.length, "Locations from DB");
    } else {
      res
        .status(404)
        .send({ code: 404, message: `There is an error with your locations` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};


module.exports = {
  getAllLocations,
};

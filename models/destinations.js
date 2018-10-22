const mongoose = require('mongoose');
const Ship = require('./ships');

const destinationsSchema = new mongoose.Schema({
  name: String, 
  avgDistanceInKm: Number,
  travelTimeInHrs: Number, 
  priceInUSD: Number, 
  ships: [Ship.schema], 
  lengthOfDayInHrs: Number, 
  radiusInKm: Number,
  gravity: String, 
  escapeVelocity: String,
  massInKg: Number,
  density: String,
  image: String
});

module.exports = mongoose.model('Destination', destinationsSchema);
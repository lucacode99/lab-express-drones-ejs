// Iteration #1 :drone.model.js

const {model, Schema} = require('mongoose')

const droneSchema = new Schema ({
name: String,
propellers: Number,
maxSpeed: Number
});

const DroneModel = model('drone', droneSchema) 

module.exports = DroneModel





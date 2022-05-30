// Iteration #1

const mongoose = require('mongoose')
require('../db')
const DroneModel = require('../models/Drone.model')

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
  ]

  DroneModel.insertMany(drones)
  .then ((allDronesDB) => {
console.log("all drones seeded successfully", allDronesDB)
return mongoose.connection.close()
  }).then(()=>{
      console.log("database closed again - standing by for further instructions")
  }).catch((err) => {
console.log("there was a problem with seeding")
  })

const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');
//console.log(Drone)

router.get('/drones',(req, res) => {
  // Iteration #2: List the drones - your code here:
 // console.log("test of path");
 Drone.find()
 .then((droneInformation) => {
console.log("this is loading")
res.render('drones/list', {drones: droneInformation})

 })
 .catch((err) =>{
   console.log("loading the drone information failed", (err))
 })
});

 // Iteration #3: Add a new drone
router.get('/drones/create', (req, res) => {
 
  
res.render('drones/create-form.ejs')

});

// Iteration #3: Add a new drone
router.post('/drones/create', async (req, res) => {
  try {
  const newDrone = await Drone.create(req.body)
  console.log("new drone created")
  res.redirect('/drones')  
} catch (err) {
  console.log("Adding a new drone failed, you hero", (err))
}
});






// Iteration #4: Update the drone
router.get('/drones/:id/edit', async (req, res) => {
  try {
  const singleDrone = await Drone.findById(req.params.id)
    console.log (singleDrone)
    res.render('drones/update-form.ejs', {singleDrone})
  } catch (err) {
    console.log("passing the single drone to the view has failed, oh boy!", (err))
  }
});







// Iteration #4: Update the drone
router.post('/drones/:id/edit', (req, res, next) => {
 
  
});










router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Destinations = require("../models/destinations")

const popDestinations = require("../models/populateDestinations")

// Destinations.collection.insertMany(popDestinations, (err, allGood)=>{
//     if (err) console.log(err)
//     else console.log("all gooooud")
// })

router.get('/', async(req, res)=>{
    try {
        const allDestinations = await Destinations.find();
        req.session.lastPage = "Destinations"
        res.render("destinations/index.ejs", {
            allDestinations,
            username: req.session.username,
            name: req.session.name,
            logged: req.session.logged,
            id: req.session.id
        })
    } catch (err) {
        console.log(err, "this is the err");
    }  
})

router.get('/:id', async (req, res) => {
    try {
        const destinations = await Destinations.findById(req.params.id);
        res.render('destinations/show.ejs', {
            destinations,
            username: req.session.username,
            name: req.session.name,
            logged: req.session.logged,
            id: req.session.id
        })
    } catch (err) {
        console.log(err, "this is the err");
    }
})














module.exports = router;
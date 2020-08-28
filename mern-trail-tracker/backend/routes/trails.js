const express = require ('express');
const router = express.Router();
let Trail = require ('../models/trail.model');

router.route('/').get((req, res) =>{
    Trail.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>{
    const username = req.body.username;
    const description = req.body.description;
    const distance = Number(req.body.distance);
    const date = Date.parse(req.body.date);

    const newTrail = new Trail({
        username,
        description,
        distance,
        date,
    });

    newTrail.save()
    .then(() => res.json('Trail added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) =>{
    Trail.findById(req.params.id)
    .then(trail => res.json(trail))
    .catch(err => res.status(400).json('Error' + err));
}); 

router.route('/:id').delete((req, res) => {
    Trail.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/update/:id').post((req, res) => {
    Trail.findById(req.params.id)
    .then(trail => {
        trail.username = req.body.username;
        trail.description =req.body.description;
        trail.distance = Number(req.body.distance);
        trail.date=Date.parse(req.body.date);

        trail.save()
        .then(()=> res.json('Exericse updated!'))
        .catch(err=>res.status(400).json('Error:' + err));
    })
    .catch(err => res.status(400).json('Error' + err));
});


module.exports = router;
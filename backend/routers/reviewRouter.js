const { Router } = require('express');
// const { deleteMany } = require('../models/reviewModel');
const Model = require('../models/reviewModel')
const router = Router();

router.post('/add', (req, res) => {
    console.log(req.body)
    new Model(req.body).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    });
})


router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err);
    });
})


router.delete('/delete/:reviewid', (req, res) => {
    Model.findByIdAndDelete(req.params.reviewid)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});















module.exports = router
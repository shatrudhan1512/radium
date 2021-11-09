const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/movies', function (req, res) {
    const array = ["Movies Name 0", "Movies Name 1", "Movies Name 2", "Movies Name 3"]
    res.send(array)
});

router.get('/movies/:id', function (req, res) {
    const array = ["Movies Name 0", "Movies Name 1", "Movies Name 2", "Movies Name 3", "Movies Name 4"]
    let value = req.params.id;
    if (value >= array.length) {
        res.send("This Movie is Not Present in the list")
    } else {
        res.send(array[value])
    }
});


const array = [{
    id: 1,
    'name': 'The Shining'
}, {
    id: 2,
    'name': 'Incendies'
}, {
    id: 3,
    'name': 'Rang de Basanti'
}, {
    id: 4,
    'name': 'Finding Demo'
}]


router.get('/films', function (req, res) {

    res.send(array)
})


router.get('/films/:filmId', function (req, res) {

    const value = req.params.filmId;
    if (value > array.length) {
        res.send('No movie exists with this id')
    } else {
        res.send(array[value - 1])
    }
})

module.exports = router;
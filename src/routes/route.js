const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

// router.get('/movies', function (req, res) {
//     const array = ["Movies Name 0", "Movies Name 1", "Movies Name 2", "Movies Name 3"]
//     res.send(array)
// });

// router.get('/movies/:id', function (req, res) {
//     const array = ["Movies Name 0", "Movies Name 1", "Movies Name 2", "Movies Name 3", "Movies Name 4"]
//     let value = req.params.id;
//     if (value >= array.length) {
//         res.send("This Movie is Not Present in the list")
//     } else {
//         res.send(array[value])
//     }
// });


// const array = [{
//     id: 1,
//     'name': 'The Shining'
// }, {
//     id: 2,
//     'name': 'Incendies'
// }, {
//     id: 3,
//     'name': 'Rang de Basanti'
// }, {
//     id: 4,
//     'name': 'Finding Demo'
// }]


// router.get('/films', function (req, res) {

//     res.send(array)
// })


// router.get('/films/:filmId', function (req, res) {

//     const value = req.params.filmId;
//     if (value > array.length) {
//         res.send('No movie exists with this id')
//     } else {
//         res.send(array[value - 1])
//     }
// })





// const arr = [
//     {"id":1, "name":"The Shining", "rating": 8, "director":"Stanley Kubrik", "genre":"horror"},
//     {"id":2, "name":"Avatar", "rating": 9, "director":"Director Nmae 2", "genre":"advanture"},
//     {"id":3, "name":"Joker", "rating": 10, "director":"Director Name 3", "genre":"comedy"}
// ]

// router.get('/specific-movies', function(req, res) {
//     const reqRating = req.query.rating;
//     const reqGenre = req.query.genre;
//     let reqMovie;

//     for(let i = 0; i<arr.length; i++) {
//         if(arr[i].rating == reqRating && arr[i].genre == reqGenre) {
//             reqMovie = arr[i]
//             break;
//         }
//     }
//     if(reqMovie) {
//         res.send(reqMovie.name)
//     } else {
//         res.send("Your Matches Not found")
//     }
// })

// router.post('/specific-movies', function(req, res) {
//     const reqAddMovies = req.body;

//     if(reqAddMovies.rating>10 && !reqAddMovies.director) {
//         res.send('invalid rating and no director value present')
//     } else if(reqAddMovies.rating>10) {
//         res.send('maximum value a rating can have is 10')
//     } else if(!reqAddMovies.director) {
//         res.send('Director value must be present')
//     }
//     arr.push(reqAddMovies)
//     res.send(arr)
// })

// router.get('/best-movie', function(req, res) {
//     let hRating = 0;
//     let hIndex;
//     for(let i= 0; i<arr.length; i++) {
//         if(arr[i].rating>hRating) {
//             hRating = arr[i].rating
//             hIndex = i
//         }
//     }
//     res.send(arr[hIndex].name)
// })








// router.get('/missingNumber', function(req, res) {
//     const array = [1,2,3,5,6,7]
//     let arrSum = 0;
//     for(let i = 0; i<array.length; i++){
//         arrSum = arrSum +array[i]
//     }
//     let n = array.pop();
//     let numSum = n*(n+1)/2;
//     let missingNumber = numSum - arrSum;

//     res.send ( {data : missingNumber})
// })


// router.get('/missingNum', function(req, res) {
// const arr2 = [33,34,35,37,38]
// const len = arr2.length
// let arrsum = 0;
// for(let i=0; i<len; i++) {
//     arrsum = arrsum + arr2[i]
    
// }
// let first = arr2[0];
// let last = arr2.pop();
// let numsum = (len+1)*(first+last)/2;
// let missingNum = numsum-arrsum
// res.send( {data : missingNum})
// })





let arr = [{
    "name": "manish",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": ["swimming"],
    "bookings": [{
        "bookingNumber": 1,
        "sportId": "",
        "centerId" : "",
        "type": "private",
        "slot": "16286598000000",
        "bookedOn": "31/08/2021",
        "bookedFor": "01/09/2021"

    }]
}]

router.post('/players', function(req,res) {
    const reqDetails = req.body
    
    let nameRepeated = false;
    for(let i = 0; i<arr.length; i++) {
        if(reqDetails.name == arr[i].name) {
            nameRepeated = true;
        }
    }
    if(nameRepeated) {
        res.send( {msg : "Player Already Exist"})
    } else {
        arr.push(reqDetails)
    }
    res.send( {playerDetail : arr})
})

router.post('/players/:playerName/bookings/:bookingId', function(req, res) {
    let reqName = req.params.playerName;
    let reqbookingId = req.params.bookingId;
    let reqBody = req.body;
    let repeatedName = false;
    let matchingPlayerIndex;
    for (let i = 0; i<arr.length; i++) {
        if(reqName == arr[i].name) {
            repeatedName = true;
            matchingPlayerIndex = i;
        }
    }
    if(repeatedName) {
        let bookingArr = arr[matchingPlayerIndex].bookings
        let repeatId = false;
        for(let i = 0; i<bookingArr.length; i++) {
            if(bookingArr[i].bookingNumber == reqbookingId) {
                repeatId = true;
            }
        }
        if(repeatId) {
            res.send( {msg : "booking was Already Proceed"})
        } else {
            bookingArr.push(reqBody)
        }
    } else {
        res.send({msg: "Player not beeing found"})
    }
    res.send( {msg : arr})
})

module.exports = router;
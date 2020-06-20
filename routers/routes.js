const router = require('express').Router()
const distance = require('google-distance-matrix');

router.get('/', (req, res) => {

    var origins = ['bangalore'];
    var destinations = ['indore'];

    distance.key(process.env.GOOGLE_API_KEY)

    distance.matrix(origins, destinations, function (err, distances) {
        if (!err)
            console.log(distances);
        res.send(distances)
    })
})

module.exports = router;
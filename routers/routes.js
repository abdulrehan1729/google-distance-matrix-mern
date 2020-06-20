const router = require('express').Router()
router.get('/', (req, res)=>{
 
    var origins = ['bangalore'];
    var destinations = ['indore'];
    distance.key('AIzaSyCaYT5yFVEDcb7aAOMme5PN0SLZz8Ulf_g')
     
    distance.matrix(origins, destinations, function (err, distances) {
        if (!err)
            console.log(distances);
            res.send(distances)
    })
    })
    
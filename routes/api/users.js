var router = require('express').Router();
var auth = require('../auth');

router.get('/user', auth.optional, function(req, res, next){
    res.send("Hello world");
});

module.exports = router;
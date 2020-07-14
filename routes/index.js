var router = require('express').Router();

router.use('/api', require('./api'));
router.get('/hello', function(req, res) {
    res.send("Hello world");
})

module.exports = router;
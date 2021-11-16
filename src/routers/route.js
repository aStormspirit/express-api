const router = require('express').Router()

router.get('/api', (req, res) => {
    if (req.query.auth != '369963') {
        res.send("you dosen't authorize")
    }
})

module.exports = router
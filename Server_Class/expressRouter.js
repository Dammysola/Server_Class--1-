const express = require('express')
const router = express.Router()

router.get('/name', (req, res)=>{
    // res.send("This is a wrong directory, better turn back now!!!")
     res.redirect('https://twitter.com/')
})
module. exports = router

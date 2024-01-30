const express = require('express')
const router = express.Router()
const pool = require('../db')

router.get('/', function (req, res) {
    console.log(story.parts[0])
    res.render('index.njk')

  })
  router.get('/', function (req, res) {
  })
  
  router.get('/dbtest/:id', async (req, res) => {
    const id = req.params.id

  })
  
  module.exports = router






  
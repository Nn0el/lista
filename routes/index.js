require('dotenv').config()
const express = require('express')
const router = express.Router()
const pool = require('../db')
const nunjucks = require('nunjucks')


router.get('/', function (req, res) {
    res.render('index.njk')


  })
  
  router.get('/dbtest', async function(req, res){  
    
   const [pasta] = await pool.promise().query('SELECT * FROM noel_pasta')

return res.json({pasta})
  })
  
  module.exports = router






  
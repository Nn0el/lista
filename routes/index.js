require('dotenv').config()
const express = require('express')
const router = express.Router()
const pool = require('../db')
const nunjucks = require('nunjucks')


router.get('/', function (req, res) {
  res.render('index.njk')


})


router.get('/pastas', async (req, res) => {

  await pool.promise().query()

  // SELECT * FROM noel_pasta JOIN noel_sauce on noel_pasta.sauce_id = noel_sauce.id
  res.render("pastas.njk", { pastas })

})


router.get("/pastas/:id", (req, res) => {
  //SELECT * FROM noel_pasta JOIN noel_sauce on noel_pasta.sauce_id = noel_sauce.id where noel_pasta.id = 2
  const id = req.params.id
  console.log(id)
  // SELECT * pastas WHERE id = req.params.id
})


router.get('/dbtest', async function (req, res) {

  const [pasta] = await pool.promise().query('SELECT * FROM noel_pasta')

  return res.json({ pasta })
})

router.get('/newpasta', function (req, res) {
  res.render('newpasta.njk', { title: 'Ny pasta' })
})

router.get('/newpasta', async function (req, res) {
  console.log(pasta)
  res.json(req.body)
})

router.post('/newpasta', async function (req, res) {
  const namn = req.body.namn
  const form = req.body.form
  const [result] = await pool.promise().query('INSERT INTO noel_pasta (namn, form) VALUES (?,?)',
    [namn, form]
  )

  res.json('/pastas')

})

module.exports = router







require('dotenv').config()
const express = require('express')
const router = express.Router()
const pool = require('../db')
const nunjucks = require('nunjucks')


router.get('/', (req, res) => {

  const [pastas] = pool.promise().query('SELECT * FROM noel_pasta')
  console.log(pastas)
  res.render(pastas.njk, {
    pastas
  })




})

router.get('/:id', async function (req, res) {
  res.send("pastas")
})


router.get('/pastas', async (req, res) => {

  await pool.promise().query()

  // SELECT * FROM noel_pasta JOIN noel_sauce on noel_pasta.sauce_id = noel_sauce.id
  res.render("pastas.njk", { pastas })

})

router.get("/pastas/new", async function (req, res) {
  try {
    const [sauces] = await pool.promise().query('SELECT * FROM noel_sauce')
    return res.render('newpasta.njk', {
      title: 'ny pasta',
      sauces: sauces

    })

  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
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




router.post('/pastas/new', async function (req, res) {
  console.log(req.body)
  const namn = req.body.namn
  const form = req.body.form
  console.log(namn, form)
  const [result] = await pool.promise().query('INSERT INTO noel_pasta (namn, form) VALUES (?,?)',
    [namn, form]
  )


  if (result.affectedRows === 1) {
    res.redirect('/pastas/new')
  }
})



module.exports = router







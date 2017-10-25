'use strict'

const express     = require('express')
,     compression = require('compression')
,     path        = require('path')
,     publicDir   = path.join(__dirname, 'public')
,     app = express()

app.use(compression())

process.env.PORT = process.env.PORT || 5000

app.get('/', (req, res) => res.sendFile('index.html', { root: publicDir }))
app.get('/efg.js', (req, res) => res.sendFile('efg.js', { root: publicDir }))
app.get('/data/:letter', (req, res) => res.json({ letter: req.params.letter }))
app.get('/sitemap.xml', (req, res) => res.sendFile('sitemap.xml', { root: publicDir }))
app.get('/robots.txt', (req, res) => res.sendFile('robots.txt', { root: publicDir }))
app.get('/status', (req, res) => res.send('ok'))
app.get('*', (req, res) => res.status(404).send('404'))

app.listen(process.env.PORT, () => {
  console.log('App listening on port ' + process.env.PORT)
})

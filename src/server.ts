import express from 'express'

const app = express()

app.get('/healthcheck', (req, res) => {
  return res.send({
    message: 'ok',
  })
})

app.listen(3333, () => console.log('Server is running'))

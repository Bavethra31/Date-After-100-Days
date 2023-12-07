const express = require('express')
const date = require('date-fns/addDays')
const app = express()
app.get('/', (request, response) => {
  let result = addDays(new Date(), 100)
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`,
  )
})
module.exports = app;

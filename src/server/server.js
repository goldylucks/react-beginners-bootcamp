// @flow

import express from 'express'

import { WEB_PORT } from '../shared/config'
import { ENV } from '../shared/utils'

const app = express()

app.use('/', (req, res) => {
  res.send(`[${ENV}] React Bootcamp in da house!`)
})

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`[${ENV}] Server listening on ${WEB_PORT}`)
})

export default app // for testing

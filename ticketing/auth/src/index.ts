import express from 'express'
import {json } from 'body-parser'

import { currentUserRouter } from './routes/current-users'
import { signinRouter } from './routes/signin'
import { signoutRouter } from './routes/signout'
import { signupRouter } from './routes/signup'

const app = express()
app.use(json())
app.use(currentUserRouter)

app.get ('/api/users/currentuser', (req, res) => {
  res.send('Hi there 3!!!')
})

app.listen(3000, () => {
  console.log('listening on port 3000!!!')
} )
import express from 'express'
const router = express.Router()

router.get('/api/users/currentuser', (req, res ) => {
  res.send('hi there from current user route 222')
})

export {router as currentUserRouter}
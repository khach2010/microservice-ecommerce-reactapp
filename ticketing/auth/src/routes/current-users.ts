import express from 'express'
// import jwt from 'jsonwebtoken'
import { currentUser } from '../middlewares/current-user'
import { requireAuth } from '../middlewares/reuqire-auth'


const router = express.Router()

router.get('/api/users/currentuser', currentUser,(req, res ) => {
  return res.send({currentUser: req.currentUser || null})
  //if(!req.session || !req.session.jwt)
  // if(!req.session?.jwt) {
  //   return res.send({currentUser: null})
  // }
  // try {
  //   const payload = jwt.verify(
  //     req.session.jwt, 
  //     process.env.JWT_KEY!
  //   )
  //   res.send({currentUser: payload})
  // } catch (err) {
  //   res.send({currentUser: null})
  // }
})

export {router as currentUserRouter}
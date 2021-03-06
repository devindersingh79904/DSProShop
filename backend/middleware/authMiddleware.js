import jwt from 'jsonwebtoken'
import User from '../models/UserModel.js'
import asyncHandler from 'express-async-handler'
const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decode = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decode.id).select('-password')
      console.log(req.user)
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not Authorized,no token')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not Authorized,no token')
  }
  next()
})

export { protect }

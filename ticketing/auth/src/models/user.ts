import mongoose from "mongoose";

//create aan interface that describe the properties 
// that are required te create a new user
interface UserAtrrs {
  email: string,
  password: string
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    required: true
  }
})

const User = mongoose.model('User', userSchema)

const buildUser = (attrs: UserAtrrs) => {
  return new User(attrs) 
}

export {User, buildUser}
import mongoose from "mongoose";

//create aan interface that describe the properties 
// that are required te create a new user
interface UserAtrrs {
  email: string,
  password: string
}
// an interface that describe the properties that a User Model has
interface UserModel extends mongoose.Model<any> {
  build(attrs: UserAtrrs): any;
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

userSchema.statics.build = (attrs: UserAtrrs) => {
  return new User(attrs)
}

const User = mongoose.model<any, UserModel>('User', userSchema)


export { User }
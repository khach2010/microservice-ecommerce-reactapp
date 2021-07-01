import mongoose from "mongoose";

//create aan interface that describe the properties 
// that are required te create a new user
interface UserAtrrs {
  email: string,
  password: string
}
// an interface that describe the properties that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAtrrs): UserDoc;
}

// an interface that describe the properties that a User Document has
interface UserDoc extends mongoose.Document {
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

userSchema.statics.build = (attrs: UserAtrrs) => {
  return new User(attrs)
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema)


export { User }
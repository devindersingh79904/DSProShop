import mongoose from 'mongoose'
import bcrypyjs from 'bcryptjs'
const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamp: true,
  }
)

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypyjs.compare(enteredPassword, this.password)
}

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypyjs.genSalt(10)
  this.password = await bcrypyjs.hash(this.password, salt)
})

const User = mongoose.model('User', UserSchema)

export default User

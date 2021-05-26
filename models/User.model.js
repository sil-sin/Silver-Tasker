const { Schema, model } = require('mongoose')

let userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },

    department: {
      type: String,
      enum: ['FrontOffice', 'Administration', 'Sales', 'FoodsBeverage', 'Housekeeping', 'Engineering', 'HumanRessources']
    },

    userType: {
      type: String,
      enum: ['Manager', 'Staff']
    }
  },
  {
    timestamps: true
  }
)

let User = model('User', userSchema)
module.exports = User
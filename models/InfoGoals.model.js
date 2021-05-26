const { Schema, model } = require('mongoose')

let InfoGoalsSchema = new Schema(
  {
    info: String,
    goals: String
  }
)
let InfoGoals = model('InfoGoals', InfoGoalsSchema)
module.exports = InfoGoals
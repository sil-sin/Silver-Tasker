const { Schema, model } = require('mongoose')

let QuoteSchema = new Schema(
  {
    text: String,
    author: String
  }
)
let Quote = model('Quote', QuoteSchema)
module.exports = Quote
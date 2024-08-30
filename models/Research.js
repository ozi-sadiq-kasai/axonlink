const mongoose = require('mongoose')

const ResearchSchema = new mongoose.Schema({
 category:{
  type:String,
  required:true,
  trim:true,
  maxLength:50
 },
 status:{
  type:String,
  default:'active',
  enum:['active','completed']
 },
 totals:{
  type:Number,
  required:true
 },
 date:{
  type:Date,
  required:true
 }
},{timestamps:true}
)

module.exports = mongoose.model('Research',ResearchSchema)
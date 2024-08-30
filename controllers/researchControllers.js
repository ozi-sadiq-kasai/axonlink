const Research = require('../models/Research')
const mongoose = require('mongoose')

const createResearch = async (req,res)=>{
 try {
  const { category, status, totals, date } = req.body;

  const research = new Research({
   category,
   status,
   totals,
   date
  });

  await research.save()

  // Send success response
  res.status(201).json({ message: 'Research added successfully', research })
 } catch (error) {
  // Handle any errors that occur
  res.status(500).json({ message: 'Server error', error: error.message }); 
 }
}

const getResearch = async (req,res)=>{
 const researchList = await Research.find()

 if(!researchList || researchList.length === 0){
  return res.status(404).json({message:'No research documents found'})
 }
 res.status(200).json({researchList})
}

const deleteResearch = async (req,res)=>{

 const {id} = req.params
  // Check if the provided id is a valid ObjectId
if (!mongoose.Types.ObjectId.isValid(id)) {
   return res.status(400).json({ message: 'Invalid ID format' });
  }

 const research = await Research.findByIdAndDelete(id)  

 if(!research){
  return res.status(404).json({message:'Research not found'})
 }

  //Send success response
 res.status(200).json({ message: 'Research deleted successfully' });

}

module.exports = {
 createResearch,
 getResearch,
 deleteResearch
}
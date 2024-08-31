import { useContext, createContext, useState } from "react";
import axios from 'axios'


const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {
 const [allpostedresearch,setAllPostedResearch] = useState([])
 const [getAllResearch,setGetAllResearch] = useState([])

 //Get Research
 const getResearch = async() => {
  try {
   const response = await axios.get('/axonlink/get-research')
   setGetAllResearch(response.data.researchList);
    console.log(response.data.researchList);
  } catch (error) {
    console.error('Error fetching research:', error);
  }

 }

 //Post Research
 const postResearch = async(formData)=>{
  try {
  const response = await axios.post('/axonlink/create-research',formData)
  setAllPostedResearch([...allpostedresearch,response.formData])
  } catch (error) {
    console.error("Error posting research data:", error);
  }
 }

//Delete Research

const deleteResearch = async(id)=>{
 try {
  const response = await axios.delete(`/axonlink/delete-research/${id}`)
   if(response.status === 200){
   //update the state to reflect the deletion in the frontend
   const deleteResearch = getAllResearch.filter(item => item._id !== id )
   setGetAllResearch(deleteResearch)
 } else {
   console.error('Failed to delete research')
  }
 } catch (error) {
  console.error('Error deleting research:', error)
 }
 }

 return(
  <GlobalContext.Provider value={{
   postResearch,
   getResearch,
   getAllResearch,
   deleteResearch,
   setGetAllResearch
   }}>
   {children}
  </GlobalContext.Provider>
 )
}

export const useGlobalContext = () => useContext(GlobalContext);
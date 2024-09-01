import { useEffect } from "react";
import { useNavigate} from 'react-router-dom'
import { FaRegEdit,FaRegTrashAlt } from "react-icons/fa";
import { useGlobalContext } from "../../context/GlobalContext";
import { dateFormat } from "../../utils/dateFormat";
import { Card,Section } from "./styleResearchCard";

const ResearchCard = () => {
 const {getAllResearch,getResearch,deleteResearch} = useGlobalContext()

  useEffect(() => {
     console.log('Fetching research data...');
  getResearch()
 }, [])

const navigate = useNavigate()
const handleNavigate = (id)=>{
 navigate(`/axonlink/update-research/${id}`)
}

 //mapping research
 const researchList = getAllResearch.map((item)=><Card>
  <span onClick={()=>handleNavigate(item._id)}style={{cursor:'pointer'}}><FaRegEdit/></span>
  <span
  onClick={()=>deleteResearch(item._id)}
  style={{cursor:'pointer'}}
  >
   <FaRegTrashAlt />
   </span>
  <h3 style={{color:'#343a40',fontWeight:'600'}}><span style={{color:'#AAB2B3',fontWeight:'300'}}>Category:</span> {item.category}</h3>
  <p><span style={{color:'#AAB2B3',fontWeight:'300'}}>Totals:</span> {item.totals}</p>
  <p><span style={{color:'#AAB2B3',fontWeight:'300'}}>Status:</span> {item.status}</p>
  <p><span style={{color:'#AAB2B3',fontWeight:'300'}}>Date:</span>{dateFormat(item.date)}</p>
 </Card>

 )

  return (
   <div>
     <h2 style={{textAlign:'center',color:'#AAB2B3'}}>Researches</h2>
    <Section>
     {researchList}
     </Section>
   </div>
  )
}
export default ResearchCard
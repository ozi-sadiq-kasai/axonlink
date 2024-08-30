import { useEffect } from "react";
import { FaRegEdit,FaRegTrashAlt } from "react-icons/fa";
import { useGlobalContext } from "../../context/GlobalContext";
import { dateFormat } from "../../utils/dateFormat";

const ResearchCard = () => {
 const {getAllResearch,getResearch,deleteResearch} = useGlobalContext()

  useEffect(() => {
  getResearch()
 }, [])


 //mapping research
 const researchList = getAllResearch.map((item)=><div>
  <span><FaRegEdit/></span>
  <span
  onClick={()=>deleteResearch(item._id)}
  >
   <FaRegTrashAlt />
   </span>
  <h3>{item.category}</h3>
  <p>{item.totals}</p>
  <p>{item.status}</p>
  <p>{dateFormat(item.date)}</p>
 </div>

 )

  return (
    <div>{researchList}</div>
  )
}
export default ResearchCard
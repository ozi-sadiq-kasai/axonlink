import { useParams,Link} from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContext'
import { useState,useEffect} from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'



const Update = () => {
 const {getAllResearch,getResearch,setGetAllResearch} = useGlobalContext()
 const {id} = useParams()

 const [formData,setFormData] = useState({
 category: '',
 totals: '',
 status: '',
 date: '' 
 })

 const researchItem = getAllResearch.find((item)=>item._id === id)

 useEffect(()=>{
   if (researchItem) {
      setFormData({
        category: researchItem.category,
        totals: researchItem.totals,
        status: researchItem.status,
        date: new Date(researchItem.date).toISOString().split('T')[0] 
      });
    } else if (!getAllResearch.length) {
      getResearch();
    }
 },[getAllResearch,getResearch,researchItem])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


 const handleFocus = (e) => {
  const { name } = e.target;
   setFormData(prev => ({ ...prev, [name]: '' }));
  };

 const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) return console.error('ID is not available');

    const data = {
      category: formData.category,
      totals: parseFloat(formData.totals),
      status: formData.status,
      date: new Date(formData.date).toISOString()
    };

 try {
  const response = await axios.patch(`/axonlink/update-research/${id}`,data)
  if(response.status === 200){
        setGetAllResearch(prev =>
          prev.map(item => item._id === id ? { ...item, ...data } : item)
        );

           toast.success('Research updated successfully!')
      } 
      else {
  console.error('Failed to update research:', response.statusText);
}

}
catch (error) {
  console.error('Error updating research:', error);
  toast.error('Failed to update research.');
 }   
}
  if (!researchItem) {
    return (
      <div>
        <p>Loading research item...</p>
        <Link to='/dashboard'>Back to Dashboard</Link>
      </div>
    );
  }


  return (
    <div style={{height:'100vh'}}>
     <Link to='/dashboard'>Back to Dashboard</Link>
     <div style={{display:'flex',height:'70%',flexDirection:'column',textAlign:'center',justifyContent:'center'}}>
       <h2 style={{color:'#AAB2B3'}}>Update Research</h2>
       <form onSubmit={handleSubmit}>
        <div>
         <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          onFocus={handleFocus}
          />
        </div>
        <div>
         <input
          type="number"
          name="totals"
          value={formData.totals}
          onChange={handleChange}
          onFocus={handleFocus}
          />
        </div>
        <div>
         <input
          type="text"
          name="status"
          value={formData.status}
          onChange={handleChange}
          onFocus={handleFocus}
          />
        </div>
        <div>
         <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          // onFocus={handleFocus}
          />
        </div>
         <button type='submit' style={{backgroundColor:'#94B1B3',color:'white',width:'100px',border:'none',padding:'2px 5px'}}>Submit</button>
       </form>
          </div>
    </div>
   )

  }
export default Update
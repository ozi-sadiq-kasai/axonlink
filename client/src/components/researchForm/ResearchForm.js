import { useState } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';

const ResearchForm = () => {
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');
  const [totals, setTotals] = useState(0);
  const [date, setDate] = useState('');

  const { postResearch } = useGlobalContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'category') {
      setCategory(value);
    } else if (name === 'status') {
      setStatus(value);
    } else if (name === 'totals') {
      setTotals(value);
    } else if (name === 'date') {
      setDate(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      category,
      totals: parseFloat(totals),
      status,
      date,
    };

    try {
      await postResearch(formData);
      setCategory('')
      setTotals(0)
      setStatus('')
      setDate('')
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
<div style={{margin:'0 auto',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
 <h2 style={{color:'#AAB2B3'}}>Research Form</h2>
    <form
     onSubmit={handleSubmit}
     style={{border:'1px solid #AAB2B3',
      borderRadius:'7px',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      gap:'7px',
      alignItems:'center',
      color:'#AAB2B3',
      width:'450px',
      height:'300px'
   }}
     >
      <div>
        <label htmlFor="category">Category: </label>
        <input
          type="text"
          name="category"
          value={category}
          onChange={handleChange}
           style={{ outline: 'none',padding:'3px 5px',width:'170px' }}
        />
      </div>
      <div>
        <label htmlFor="totals">Totals: </label>
        <input
          type="number"
          name="totals"
          value={totals}
          onChange={handleChange}
          style={{ outline: 'none',padding:'3px 5px',width:'170px' }}
        />
      </div>
      <div>
        <label htmlFor="status">Status: </label>
        <input
          type="text"
          name="status"
          value={status}
          placeholder='active or completed'
          onChange={handleChange}
           style={{ outline: 'none',padding:'3px 5px',width:'170px' }}
        />
      </div>
      <div>
        <label htmlFor="date">Date: </label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={handleChange}
           style={{ outline: 'none' }}
        />
      </div>
      <button 
      type="submit"
      style={{width: '130px',cursor:'pointer',backgroundColor:'#94B1B3',border:'none',padding:'3px 0',borderRadius:'2px',color:'white'}}
      >
       Submit
       </button>
    </form>
</div>
  );
};

export default ResearchForm;

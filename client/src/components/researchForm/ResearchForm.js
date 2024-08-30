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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="category">Category: </label>
        <input
          type="text"
          name="category"
          value={category}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="totals">Totals: </label>
        <input
          type="number"
          name="totals"
          value={totals}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="status">Status: </label>
        <input
          type="text"
          name="status"
          value={status}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="date">Date: </label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ResearchForm;

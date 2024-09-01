import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import {useGlobalContext} from '../../context/GlobalContext'
import { dateFormat } from '../../utils/dateFormat'

ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);


const Chart = () => {
 const {getAllResearch} = useGlobalContext()

 const data = {
  labels: getAllResearch.map(item =>{
    const {category} = item
    return category
   }),
  datasets: [
    {
    label: 'Researches', // General label for the dataset
    data: getAllResearch.map(item => item.totals),
    backgroundColor: '#94B1B3',
    borderColor: '#94B1B3',
    fill: false,
    tension: 0.2,
    pointBackgroundColor: getAllResearch.map(item => item.category), // Dynamically setting the point colors
   },  
 ],  
 }

 const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const status = getAllResearch[context.dataIndex].status;
                        const date = dateFormat(getAllResearch[context.dataIndex].date);
                        return `${status}: ${date}`;
                    },
                },
            },
        },
    };

  return (
    <div style={{padding:'5px'}}>
     <h2 style={{textAlign:'center',paddingBottom:'5px',color:'#AAB2B3'}}>Charts</h2>
        <Line data={data} options={options} />
    </div>
  )
}
export default Chart
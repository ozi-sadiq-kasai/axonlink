import React, { useState } from "react";
import DashNav from "../../components/dashNav/DashNav";
import SideBar from "../../components/sideBar/SideBar";
import { IoIosClose } from "react-icons/io";
import { DashLayout,Sidebutton } from './styleDashBoard';
import ResearchForm from '../../components/researchForm/ResearchForm'
import ResearchCard from "../../components/researchList/ResearchCard";
import Chart from "../../components/chart/Chart";


const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };



  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <DashNav />
      <main style={{ display: 'flex', flex: 1 }}>
        <SideBar isOpen={isSidebarOpen} />
        <DashLayout isSidebarOpen={isSidebarOpen}>
 <Sidebutton
  onClick={toggleSidebar}>
  <IoIosClose />
 </Sidebutton>

          <div className="top-sections">
            <section>
             <Chart />
            </section>
            <section>
            <ResearchForm /> 
            </section>
          </div>
          <section>
           <ResearchCard />
          </section>
        </DashLayout>
      </main>
    </div>
  );
};

export default Dashboard;



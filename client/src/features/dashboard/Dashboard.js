import React, { useState } from "react";
import DashNav from "../../components/dashNav/DashNav";
import SideBar from "../../components/sideBar/SideBar";
import { DashLayout } from './styleDashBoard';
import ResearchForm from '../../components/researchForm/ResearchForm'
import ResearchCard from "../../components/researchList/ResearchCard";


const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };



  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <DashNav />
      <main style={{ display: 'flex', flex: 1 }}>
        <SideBar isOpen={isSidebarOpen} />
        <DashLayout isSidebarOpen={isSidebarOpen}>
          <button onClick={toggleSidebar} style={{ marginBottom: '10px',width:'5%' }}>
            X
          </button>
          <div className="top-sections">
            <section>1</section>
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



import React, { useState } from "react";
import DashNav from "../../components/dashNav/DashNav";
import SideBar from "../../components/sideBar/SideBar";
import { DashLayout } from './styleDashBoard';

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
             <form action="">
              <div>
              <label htmlFor="category">Category: </label>
              <input type="text"
               name='category'
               />
               </div>
              <div>
              <label htmlFor="totals">Totals: </label>
              <input type="number"
               name='totals'
               />
               </div>
              <div>
              <label htmlFor="status">Status: </label>
              <input type="text"
               name='status'
               />
               </div>
              <div>
              <label htmlFor="status">Date: </label>
              <input type="date"
               name='date'
               />
               </div>
               

              <button>Submit</button>
             </form>
            </section>
          </div>
          <section>3</section>
        </DashLayout>
      </main>
    </div>
  );
};

export default Dashboard;



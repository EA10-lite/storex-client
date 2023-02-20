import React from 'react';
import '../css/layout.css';
import { Outlet } from 'react-router-dom';
import {  MCSidebar, Navbar } from '../components';
import { SidebarContextProvider } from '../context/SidebarContext';

function MCLayout() {
  return (
    <SidebarContextProvider>
      <div className="app__layout"> 
        <div className="app__layout-container">
          <div className="app__layout-row">
            <div className="app__layout-row__col-left" id="sidebar">
              <div className="app__layout-sidebar">
                <MCSidebar />
              </div>
            </div>
            <div className="app__layout-row__col-right">
              <div className="app__layout-navbar">
                <Navbar />
              </div>
              <div className="app__layout-content">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarContextProvider>
  )
}

export default MCLayout;
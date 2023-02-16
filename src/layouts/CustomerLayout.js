import React from 'react';
import { Outlet } from 'react-router-dom';

function CustomerLayout() {
  return (
    <div>
        <h1> Customer </h1>
        <Outlet />
    </div>
  )
}

export default CustomerLayout;
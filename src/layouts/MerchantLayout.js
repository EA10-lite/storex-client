import React from 'react';
import { Outlet } from 'react-router-dom';

function MerchantLayout() {
  return (
    <div>
        <h1> MERCHANT </h1>
        <Outlet />
    </div>
  )
}

export default MerchantLayout;
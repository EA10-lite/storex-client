import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// layouts
import CustomerLayout from './layouts/CustomerLayout';
import MCLayout from "./layouts/MCLayout";


// merchant routes
import MCAddProduct from './routes/merchant/MCAddProduct';
import MCCustomer from './routes/merchant/MCCustomer';
import MCCustomers from './routes/merchant/MCCustomers';
import MCDashboard from "./routes/merchant/MCDashboard";
import MCOrder from './routes/merchant/MCOrder';
import MCOrders from './routes/merchant/MCOrders';
import MCProduct from './routes/merchant/MCProduct';
import MCProducts from "./routes/merchant/MCProducts";
import MCStatistics from './routes/merchant/MCStatistics';
import MCTransaction from "./routes/merchant/MCTransaction";
import MCTransactions from "./routes/merchant/MCTransactions";

const is_customer = false;

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Customers */}

                { is_customer && <Route path="/" element={<CustomerLayout />}>

                </Route> } 

                {/* Merchant */}
                { !is_customer && <Route path="" element={<MCLayout />}>
                    <Route path="/" element={<MCDashboard />} />
                    <Route path="/merchant/customers" element={<MCCustomers />} />
                    <Route path="/merchant/customer/:id" element={<MCCustomer />} />
                    <Route path="/merchant/orders" element={<MCOrders />} />
                    <Route path="/merchant/order/:id" element={<MCOrder />} />
                    <Route path="/merchant/products" element={<MCProducts />} />
                    <Route path="/merchant/product/:id" element={<MCProduct />} />
                    <Route path="/merchant/products/add" element={<MCAddProduct />} />
                    <Route path="/merchant/statistics" element={<MCStatistics />} />
                    <Route path="/merchant/transactions" element={<MCTransaction />} />
                    <Route path="/merchant/transaction/:id" element={<MCTransactions />} />
                </Route> }
            </Routes>
        </BrowserRouter>
    )
}

export default App;
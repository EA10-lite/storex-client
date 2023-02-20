import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarContext } from '../context/SidebarContext';
import '../css/sidebar.css';

// icons
import { BsSun } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineBarChart } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';
import { 
    MdAddBusiness, MdDashboard, MdLogout, MdOutlineShoppingCart
} from 'react-icons/md';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { SiWebmoney } from 'react-icons/si';



const NavItem = ({ handle_click, Icon, title, url }) => {
    const { pathname } = useLocation();
    return (
        <li className={`app__sidebar-navlinks ${pathname === url ? "app__sidebar-active_link" : undefined}`}>
            { url && (
                <Link to={url} className="app__sidebar-links">
                    <span className="app__sidebar-icon"> <Icon /> </span>
                    <span className="app__sidebar-link_text"> { title } </span>
                </Link>
            )}
            { handle_click && (
                <div className="app__sidebar-links" onClick={handle_click}>
                    <span className="app__sidebar-icon"> <Icon /> </span>
                    <span className="app__sidebar-link_text"> { title } </span>
                </div>
            )}
        </li>
    )
}

const NavDropdown = ({ Icon, items, title }) => {
    const { pathname } = useLocation();
    const [ is_active, set_is_active ] = useState(false);
    const toggle_active_state = () => set_is_active(!is_active);

    return (
        <li className="app__sidebar-navlinks">
            <div className="app__sidebar-dropdown">
                <div className="app__sidebar-dropdown_header">
                    <div className="app__sidebar-dropdown_header-left">
                        <span className="app__sidebar-icon"> <Icon /> </span>
                        <span className="app__sidebar-link_text"> { title } </span>
                    </div>
                    <span className="app__sidebar-dropdown_header-right">
                        { !is_active && <RiArrowDropDownLine 
                            className="app__sidebar-icon" 
                            onClick={toggle_active_state} 
                        /> }
                        { is_active && <RiArrowDropUpLine 
                            className="app__sidebar-icon" 
                            onClick={toggle_active_state} 
                        /> }
                    </span>
                </div>
                { is_active && <div className="app__sidebar-dropdown_items">
                    { items.map(item=> (
                        <div className={`app__sidebar-dropdown_item ${pathname === item.url ? "app__sidebar-active_link" : undefined}`} key={item.url}>
                            <Link to={ item.url }>
                                <span className="app__sidebar-links"> { item.title } </span>
                            </Link>
                        </div>
                    ))}
                </div> }
            </div>
        </li>
    )
}


function MCSidebar() {
  const { close_sidebar } = useContext(SidebarContext);
  return (
    <aside className="app__sidebar">
        <div className="app__sidebar-header">
            <Link to="/">
                <span> MERCHANT_Z </span>
            </Link>

            <div className="app__sidebar-close">
                <GrFormClose className="app__sidebar-icon" onClick={close_sidebar} />
            </div>
        </div>

        <ul className="app__sidebar-nav">
            <NavItem Icon={MdDashboard} title="Dashboard" url="/" />
            <NavItem Icon={FiUsers} title="Customers" url="/merchant/customers" />
            <NavDropdown 
               Icon={MdAddBusiness} 
               title="Products" 
               items={[
                   { title: "Overview", url: "/merchant/products" },
                   { title: "Add Products", url: "/merchant/products/add" },
                   { title: "Categories", url: "/products/categories" },
               ]} 
            />

            <div className="app__sidebar-border" />

            <NavItem Icon={MdOutlineShoppingCart} title="Orders" url="/merchant/orders" />
            <NavItem Icon={AiOutlineBarChart} title="Statistics" url="/merchant/statistics" />
            <NavItem Icon={SiWebmoney} title="Transactions" url="/merchant/transactions" />

            <div className="app__sidebar-border" />

            <NavItem Icon={BsSun} title="Theme" handle_click={()=> console.log("HELLO WORLD")} />
            <NavItem Icon={MdLogout} title="Logout" handle_click={()=> console.log("HELLO WORLD")} />
        </ul>
    </aside>
  )
}

export default MCSidebar;
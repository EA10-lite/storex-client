import React, { useState } from 'react';
import '../../css/table.css';
import '../../css/grid.css';

// components
import { 
  ExportButton, FilterButton, 
  PageSubtitle, PageTitle, 
  Pagination, SearchInput 
} from '../../components';

// icons
import { TfiLayoutGrid2, TfiList } from 'react-icons/tfi';

// mock data
import customers from '../../data/customers';

function MCCustomers() {
  const [ is_list, set_is_list ] = useState(true);
  return (
    <div>
      <div className="app__page-header">
        <PageTitle title="Customers" />
        <ExportButton />
      </div>
      <PageSubtitle text="In this section, you have access to all customers on your portal, for quick access of your customers, be sure to fill in the priority information requested with the personnel completely. in the search box." />
      <div className="app__table-section">
        <div className="app__table-header">
          <SearchInput
            placeholder="Search for customers by name, ID or email"
          />
          <div className="app__table-view">
            <FilterButton 
              handle_click={()=> set_is_list(true)}
              is_list={is_list}
              Icon={TfiList}
            />
            <FilterButton 
              handle_click={()=> set_is_list(false)}
              is_list={!is_list}
              Icon={TfiLayoutGrid2}
            />
          </div>
        </div>

        { is_list && <table className="app__table">
          <thead className="app__table-head">
            <tr>
              <th> Customer ID </th>
              <th> Customer </th>
              <th> Email Address </th>
              <th> Phone No. </th>
              <th className="app__table-head_center"> Gender </th>
              <th className="app__table-head_center"> State </th>
              {/* <td> Store Address </td> */}
            </tr>
          </thead>
          <tbody className="app__table-body">
            { customers.map((customer, index) => (
              <tr key={index}>
                <td> { customer.id } </td>
                <td>
                  <div>
                    <img 
                      alt="" 
                      className="app__avatar"
                      src={customer.image} 
                    />
                    <span> { customer.name } </span>
                  </div>
                </td>
                <td> { customer.email } </td>
                <td> { customer.phoneNumber } </td>
                <td className="app__table-body_center"> { customer.gender } </td>
                <td className="app__table-body_center"> { customer.state} </td>
                {/* <td> { customer.homeAddress } </td> */}
              </tr>
            )) }
          </tbody>
        </table> }

        {!is_list && <div className="app__grid">
          { customers.map((customer, index) => (
            <div className="app__customer-grid" key={index}>
              <div className="app__customer-overlay" style={{ background: customer.customColor }} />
              <div className='app__customer-profile'>
                <img src={customer.image} alt="" />
                <h4> { customer.name.split(" ")[0] } {customer.name.split(" ")[1][1].toUpperCase()}. </h4>
                <p> { customer.email } </p>
                <a href={`$/merchant/customer{customer.id}`}> View Profile </a>
              </div>
            </div> 
          ))}
        </div> }
        
        <Pagination 
          pages={customers.length}
          current_page={1}
        />
      </div>

    </div>
  )
}

export default MCCustomers;
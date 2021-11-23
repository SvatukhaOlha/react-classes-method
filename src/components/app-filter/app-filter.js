import React from 'react'
import './app-filter.sass'

function AppFilter() {
    return (
      <div className='btn-group'>
        <button className='btn btn-light' type='button'>
          All Employees
        </button>
        <button className='btn btn-outline-light' type='button'>
          Promouted
        </button>
        <button className='btn btn-outline-light' type='button'>
          Salary more $1000
        </button>
      </div>
    );
}

export default AppFilter;

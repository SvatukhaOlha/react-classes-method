import React from 'react'
import './app-info.sass'

function AppInfo({ increased, employees }) {
  return (
    <div className='app-info'>
      <h1>Employees Dashboard</h1>
      <h2>Total employees: {employees}</h2>
      <h2>Bonuses to pay: {increased}</h2>
    </div>
  );
}

export default AppInfo;

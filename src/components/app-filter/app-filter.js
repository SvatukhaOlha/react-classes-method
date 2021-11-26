import React from 'react'
import './app-filter.sass'

function AppFilter(props) {
  const buttonsData = [
    { name: 'all', label: 'All Employees', colored: true },
    { name: 'rise', label: 'Promouted', colored: false },
    { name: 'moreThan1000', label: 'Salary more $1000', colored: false },
  ];
  const buttons = buttonsData.map(({ name, label, colored }) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    const style = colored ? { color: '#fca311' } : null
    return (
      <button
        onClick={() => props.onFilterSelect(name)}
        key={name}
        className={`btn ${clazz}`}
        type='button'
        style={style}
      >
        {label}
      </button>
    );
  });
    return (
      <div className='btn-group'>
        {buttons}
      </div>
    );
}

export default AppFilter;

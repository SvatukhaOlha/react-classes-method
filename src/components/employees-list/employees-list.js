import React from 'react'
import EmployeesListItem from '../employees-list-item/employees-list-item'
import './vars-employees-list.sass'

function EmployeesList({ data, onDelete, onTougleRise, onTougleIncrease }) {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        onDelete={() => onDelete(id)}
        onTougleIncrease={() => onTougleIncrease(id)}
        onTougleRise={() => onTougleRise(id)}
        key={id}
        {...itemProps}
      />
    );
  });
  return <ul className='app-list list-group'>{elements}</ul>;
}

export default EmployeesList;

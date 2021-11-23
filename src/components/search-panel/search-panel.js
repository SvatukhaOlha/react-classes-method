import React from 'react'
import './search-panel.sass'

function SearchPanel() {
    return (
        <input
          type='text'
          className='form-control search-input'
          placeholder='Find employee'
        />
    );
}

export default SearchPanel;

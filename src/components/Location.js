import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const { dispatch } = useContext(AppContext);
  const [budget, setBudget] = useState(0);

  const handleInputChange = (event) => {
    const inputValue = parseInt(event.target.value);
      setBudget(inputValue);
    
  };

  return (
    <div className='alert alert-secondary'>
      Budget: £
      <input
        required='required'
        type='number'
        id='remaining'
        value={budget}
        style={{ width: '150px' }}
        onChange={handleInputChange}
        step={10}
      />
    </div>
  );
};

export default Location;

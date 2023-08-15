import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const { dispatch } = useContext(AppContext);
  const [budget, setBudget] = useState(0);

  const handleInputChange = (event) => {
    const inputValue = parseInt(event.target.value);
    if (!isNaN(inputValue) && inputValue % 10 === 0) {
      setBudget(inputValue);
    }
  };

  return (
    <div className='alert alert-secondary'>
      Budget: £
      <input
        required='required'
        type='number'
        id='remaining'
        value={budget}
        style={{ width: '50px' }}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Location;

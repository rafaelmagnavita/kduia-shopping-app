import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const { dispatch, Location } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState(Location);

  const changeLocation = (val) => {
    dispatch({
      type: 'CHG_LOCATION',
      payload: val,
    });
    setSelectedCurrency(val);
  };

  return (
      
      <select
        name='Location'
        id='Location'
        onChange={(event) => changeLocation(event.target.value)}
        value={"Currency (" + selectedCurrency + ")"}
        style={{
          backgroundColor: 'green',
          color: 'white'
        }}
      >
        <option hidden="hidden" value='$'>Currency: ({selectedCurrency})</option>
        <option value='$'>Dollar($)</option>
        <option value='£'>Pound(£)</option>
        <option value='€'>Euro(€)</option>
        <option value='₹'>Rupee(₹)</option>
        
      </select>
      
      
  );
};

export default Location;

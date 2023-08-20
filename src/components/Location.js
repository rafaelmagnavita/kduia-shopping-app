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

  const choseValName = (val) => {
    if(val === '$')
    {
        const valName = val + ' Dollar';
        return valName;
    }
    if(val === '€')
    {
        const valName = val + ' Euro';
        return valName;
    }
    if(val === '₹')
    {
        const valName = val + ' Rupee';
        return valName;
    }
    if(val === '£')
    {
        const valName = val + ' Pound';
        return valName;
    }
  };

  return (
    <div className='alert alert-secondary'>
      <select
        class="form-select form-select-sm"
        name='Location'
        id='Location'
        onChange={(event) => changeLocation(event.target.value)}
        value={"Currency (" + choseValName(selectedCurrency) + ")"}
        style={{
          backgroundColor: 'lightgreen',
          color: 'white'
        }}
      >
        <option hidden="hidden" value='$'>Currency: ({choseValName(selectedCurrency)})</option>
        <option         style={{
          color: 'black'
        }} value ='$'>Dollar($)</option>
        <option style={{
          color: 'black'
        }} value='£'>Pound(£)</option>
        <option style={{
          color: 'black'
        }} value='€'>Euro(€)</option>
        <option style={{
          color: 'black'
        }} value='₹'>Rupee(₹)</option>
        
      </select>
    </div>

      
  );
};

export default Location;

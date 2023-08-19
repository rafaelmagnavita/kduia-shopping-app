import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetVal = () => {
  const { dispatch, expenses, Location } = useContext(AppContext);
  const [budget, setBudget] = useState(0);

  const handleInputChange = (event) => {
    const inputValue = parseInt(event.target.value);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 0);
    if(inputValue <= 20000 && inputValue >= totalExpenses){
        setBudget(inputValue);
        changeBudget(inputValue);
    }
    else{
        if(inputValue >= 20000){
            alert("Budget value cannot exceed 20000");
        }
        else{
            alert("Budget value cannot be lower than spending");
        }
    }
  };

  const changeBudget = (val)=>{
    dispatch({
        type: 'CHG_BUDGET',
        payload: val,
    })
    };

  return (
    <div className='alert alert-secondary'>
      Budget: {Location}
      <input
        required='required'
        type='number'
        id='remaining'
        value={budget}
        style={{ width: '150px' }}
        onChange={handleInputChange}
        step={10}
        min={0}
      />
    </div>
  );
};

export default BudgetVal;

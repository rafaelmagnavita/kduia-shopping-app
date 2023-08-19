import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, Location, Budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 0);
    const totalBudget = Budget;
    return (
        <div className='alert alert-success'>
            <span>Remaining: {Location}{Budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };
    const handleInc10Item = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'INCREASE_TEN',
            payload: item,
        });
    };
    const handleDex10Item = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DECREASE_TEN',
            payload: item,
        });
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>{Location}{parseInt(props.quantity)*parseInt(props.unitprice)}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleInc10Item}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleDex10Item}></FaMinusCircle></td>
        </tr>
    );
};

export default ExpenseItem;
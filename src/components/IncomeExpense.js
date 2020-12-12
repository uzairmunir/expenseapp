import { fireEvent } from '@testing-library/react';
import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalContext'

const IncomeExpense = () => {
    let {transactions}=useContext(GlobalContext);
    const amount=transactions.map(transaction => transaction.amount)
    let income=amount.filter(amount=>amount>0).reduce((totalVal,currenVal)=>(totalVal+=currenVal),0);
    let expense=amount.filter(amount=>amount<0).reduce((totalVal,currenVal)=>(totalVal+=currenVal),0)*-1;
    return (
        <div className="income-expense">
            <h3 className="income">Income<br/>${income}</h3>
            <h3 className="expense">Expense<br/>-${expense}</h3>
        </div>
    )
}

export default IncomeExpense

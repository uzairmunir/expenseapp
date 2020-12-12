import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalContext'

const Balance = () => {
    const {transactions}=useContext(GlobalContext);
    const amount=transactions.map(transaction => transaction.amount)
    const total=amount.reduce((acc,item)=>(acc+=item),0).toFixed(2);
    const balance=total>=0 ? total: '0';
     

    return (
        <div>
            <h2>Your Balance <br/> ${balance}</h2>
        </div>
    )
}

export default Balance

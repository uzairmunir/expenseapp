import React, { useContext } from 'react'
import '../App.css'
import {GlobalContext} from '../context/GlobalContext'
import Transaction from './Transaction'
const TransactionList = () => {
    let {transactions}=useContext(GlobalContext);
    return (
        <div>
            <h3>History</h3><hr/>
            <ul className="list">
               {
                   transactions.map((transaction,index)=>{
                  return(
                    <Transaction transaction={transaction} key={index} />
                  )
                    })
               }    
            </ul>
        </div>
    )
}

export default TransactionList

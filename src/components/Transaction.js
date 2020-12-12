import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalContext'
import '../App.css'

const Transaction = ({transaction}) => {
    const {deleteTransaction}=useContext(GlobalContext);
    const sign=transaction.amount>0?'+':'-'
    return (
        <div>
            <li>{transaction.desc} <span>{sign}${Math.abs(transaction.amount)}</span>
                    <span><button className="del-btn" 
                    onClick={()=>deleteTransaction(transaction.id)}
                    >
                        Delete
                        </button></span>
                    </li>
        </div>
    )
}

export default Transaction

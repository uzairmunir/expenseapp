import React, { useContext, useState } from 'react'
import '../App.css'
import { GlobalContext } from '../context/GlobalContext'

const AddTransaction = () => {
    let { addTransaction } = useContext(GlobalContext);
    let [text, setText] = useState("");
    let [amount, setAmount] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        let newTransaction = (
            {
                id: Math.floor(Math.random() * 10000),
                desc: text,
                amount: +amount
            }
        )
        setAmount("");
        setText("");
        addTransaction(newTransaction);
    }
    return (
        <div>
            <h3>Add Transaction</h3><hr />
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label>Enter Text</label><br />
                    <input type="text" required
                        value={text} placeholder="Enter Text"
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label>Enter Amount<br />
                    (negative - expense, positive - income)
                    </label><br />
                    <input type="number" required
                        value={amount} placeholder="Enter Amount"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction

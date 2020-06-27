import React, {useContext, useState } from 'react'
import {TransContext} from '../transContext'

export const AddTransaction = () => {

    let {trans, addTrans} = useContext(TransContext)
    let [newDesc, setDesc] = useState('');
    let [newAmount, setAmount] = useState();
    console.log(newDesc, newAmount)

    function handleAddition(e){
        e.preventDefault();
        addTrans({amount: parseInt(newAmount), desc: newDesc, key: Date.now()});
        setDesc(newDesc="");
        setAmount(newAmount="");
    }

    return (
        <div className="addTransaction">
            <h3>Add new Tansaction</h3>
            <hr/>
            <form onSubmit={handleAddition}>
                <div className="description">
                    <label htmlFor="description">Description</label><br/>
                    <input type="text" id="description" value={newDesc} onChange={(e)=>setDesc(e.target.value)} placeholder="Enter description..." />
                </div>
                <div className="amount">
                    <label htmlFor="amount">Amount <br/>(negative - expense, positive - expense)</label>
                    <input type="number" id="amount" value={newAmount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <input type="submit" className="btn" value="Add Transaction" />
            </form>
        </div>
    )
}

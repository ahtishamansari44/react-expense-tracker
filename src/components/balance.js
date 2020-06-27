import React, {useContext} from 'react'
import {TransContext} from '../transContext'


export const Balance = () => {
    let { trans } = useContext(TransContext)
    let amount = trans.map(tran => tran.amount);
    let total = amount.reduce((acc, item)=>(acc+=item),0);

    return (
        <div className="balance">
            <h4>Your Balance</h4>
            <h1>Rs {total}</h1>
        </div>
    )
}

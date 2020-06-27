import React, {useContext} from 'react'
import {TransContext} from '../transContext'

export const TranactionList = () => {
    let {trans, deleteTrans} = useContext(TransContext);

    return (
        <div className="tranactionList">
            <h3>History</h3>
            <hr />
            <ul>
                {trans.map(transObj => {
                    return(
                    <li key={transObj.key} >{transObj.desc} <span>Rs {transObj.amount}</span> <button onClick={()=>deleteTrans(transObj.key)}>X</button></li>
                    )    
                })}
            </ul>
        </div>
    )
}

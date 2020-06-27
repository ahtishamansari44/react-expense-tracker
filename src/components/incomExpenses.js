import React, {useContext} from 'react'
import {TransContext} from '../transContext'


export const IncomExpenses = () => {

    let { trans } = useContext(TransContext)
    let amount = trans.map(tran => tran.amount);
    let income = amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0);
    let expense = amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0)*-1;

    return (
        <div className='incom-expenses'>
            <div>
                <h4>Income</h4>
                <p className="money-plus">Rs +{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money-min">Rs -{expense}</p>
            </div>
        </div>
    )
}

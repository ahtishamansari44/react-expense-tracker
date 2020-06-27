import React, {createContext, useReducer} from 'react'
import TransReducer from './transReducer'

const initTrans = [
                    {amount: 100, desc: 'camera' , key: 0},
                    {amount: -100, desc: 'bill', key: 1},
                    {amount: 200, desc: 'book', key:2}
                  ];

export const TransContext = createContext(initTrans);

export const TransProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransReducer, initTrans);
    function addTrans(transObj){
        dispatch({type: 'ADD', payload: transObj})
    }
    function deleteTrans(key){
        dispatch({type: 'DELETE', payload: key});
    }

    return (
        <TransContext.Provider value={{trans: state, deleteTrans, addTrans}} >
            {children}
        </TransContext.Provider>
    )
}

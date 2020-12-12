import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'

let initailtransactions={
    transactions:[
      /*  {id:1,desc:"Cash",amount:500},
        {id:2,desc:"Cash",amount:500},
        {id:3,desc:"Cash",amount:500}, */
    ]
}

export const GlobalContext=createContext(initailtransactions);

const GlobalProvider=({children})=>{
    let [state,dispatch]=useReducer(AppReducer,initailtransactions);

    
    const deleteTransaction=(id)=>{
        dispatch({
            type:"DELTE_TRANSACTION",
            payload:id
        })

    }
    const addTransaction=(transaction)=>{
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        })
    }

    return(
        <GlobalContext.Provider value={{transactions:state.transactions,deleteTransaction,addTransaction}}>
        {children}
    </GlobalContext.Provider>
    )
}

export default GlobalProvider;
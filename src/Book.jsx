import { useState } from "react";
import {store,resetAction} from './App';

export const Book = ()=>
{
    let [state,setState] = useState('');

    return <div>Book
        <input onChange={(e)=>{
            console.log(e.target.value);
            setState(e.target.value);
            if(e.target.value==="RESET")
                store.dispatch(resetAction());
        }} />
        {state}
        </div>
}
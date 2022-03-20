import { useState } from "react";

export const Book = ()=>
{
    let [state,setState] = useState('');

    return <div>Book
        <input onChange={(e)=>{
            console.log(e.target.value);
            setState(e.target.value);
        }} />        
        {state}
        </div>
}
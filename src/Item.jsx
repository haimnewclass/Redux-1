
import {store,incrementAction,decrementAction} from './App';

export const Item = ()=>
{
    return <div>Item Increment
        <button onClick={()=>{
            store.dispatch(incrementAction());
        }}>
        +
        </button>
        <button onClick={()=>{
            store.dispatch(decrementAction());
        }}>
        -
        </button>
        Item</div>
}
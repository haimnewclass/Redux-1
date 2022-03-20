import logo from './logo.svg';
import './App.css';
import { Item } from './Item.jsx';
import { Book } from './Book.jsx';
import { createStore } from 'redux';
import { useState } from 'react';

  
//Actions
export const incrementAction=()=>{
  return {type:'INCREMENT'};
}

export const decrementAction=()=>{
  return {type:'DECREMENT'};
}

export const resetAction=()=>{
  return {type:'RESET'};
}

//Reducer
const counterReducer = (state=3,action)=>{
  switch(action.type)
  {
    case 'INCREMENT':
      return state+2;
      break;
      case 'DECREMENT':
        return state-2;
        break;
     case 'RESET':
          return 0;
          break;
          
    default: return state;
  }
}

export const store = createStore(counterReducer);

function App() {

  let [funcState,setFuncState] = useState(0);
  
  store.subscribe(()=>{
    setFuncState(store.getState());
  })

//setFuncState(store.getState());
  console.log(store.getState());
  return (
    <div className="App">
      <button onClick={()=>{
        //console.log(store.getState());
        store.dispatch(incrementAction());
      }}>+</button>  
      {funcState}
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Book/>

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Item } from './Item.jsx';
import { Book } from './Book.jsx';
import { createStore } from 'redux';

  
//Actions
const incrementAction=()=>{
  return {type:'INCREMENT'};
}

const decrementAction=()=>{
  return {type:'DECREMENT'};
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
    
    default: return state;
  }
}

const store = createStore(counterReducer);

store.subscribe(()=>{console.log(store.getState()); console.log('subscribe out function');});

function App() {

  store.subscribe(()=>{console.log(store.getState()); console.log('subscribe from function');});

  return (
    <div className="App">
      <button onClick={()=>{
        //console.log(store.getState());
        store.dispatch(incrementAction());
      }}>+</button>

      {store.getState()}
      <Item/>
      <Item/>
      <Book/>

    </div>
  );
}

export default App;

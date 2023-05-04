import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [items,setItems] = useState([])

  function handleSubmit(e){
    //prevent default submission
    e.preventDefault();
    //read the form data
    const form = e.target
    const formdata = new FormData(form)
    const formJson = Object.fromEntries(formdata.entries())
    console.log(formJson)

    //add item to items
    setItems([...items, formJson])
    console.log(items)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          budget-app
        </p>
        <form onSubmit={handleSubmit}>
          <input placeholder='item' name='item'/>
          <input placeholder='cost' name='cost'/>
          <button type='submit'>submit</button>
          <button type='reset'>reset</button>
        </form>
        <hr/>
        <Overview  items={items}/>
      </header>
    </div>
  );
}

function Overview({items}) {
  return (
    <>
      <h1>list</h1>
      {items.map(item=> <li key={item.item}>{item.item},{item.cost}</li>)}
    </>
  )
}

export default App;

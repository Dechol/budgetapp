import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { format } from 'date-fns';



function App() {
  const [items,setItems] = useState([])

  function handleSubmit(e){
    //prevent default submission
    e.preventDefault();
    //read the form data
    const formdata = new FormData(e.target)
    const formJson = Object.fromEntries(formdata.entries())

    //time stamp
    let timeStamp = Date.now()
    let timeDate = format(timeStamp, '  @h:mm aaa')
    formJson['timestamp'] = timeStamp
    formJson['timedate'] = timeDate
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
        <TotalSpend items={items} />
        <Overview  items={items}/>
      </header>
    </div>
  );
}

function Overview({items}){
  return(
    <>
      {items.map(item=> <li key={item.timestamp}>{`${item.item} ${item.cost} ${item.timedate}`}</li>)}

    </>
  )
}

function TotalSpend({items}){
  let totalspend = 0
  
  for (let i = 0; i < items.length; i++) {
    totalspend += Number(items[i].cost)
  }

  return <p>{`total spent ${totalspend} Bhat`}</p>
}

export default App;

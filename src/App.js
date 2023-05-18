import './styles/App.css';
import { useState } from 'react';
import { format } from 'date-fns';
import ItemRow from './components/ItemRow';
import TotalSpend from './components/TotalSpend';
import MainInput from './components/MainInput';
import myList from './fakelist';
import EditTableRow from './components/EditTableRow';

function App() {
  const [items,setItems] = useState(myList)
  const [updateState,setUpdateState] = useState(-1)
  function handleSubmit(e){
    e.preventDefault();
    const formdata = new FormData(e.target)
    const formJson = Object.fromEntries(formdata.entries())
    let timestamp = Date.now()
    let time = format(timestamp, 'HH:mm')
    let date = format(timestamp, 'd MMM yy')
    formJson['timestamp'] = timestamp
    formJson['time'] = time
    formJson['date'] = date
    console.log(formJson)
    setItems([...items, formJson])
  }
  return (
    <div className="App">
        <MainInput handleSubmit={handleSubmit}/>
        <TotalSpend items={items} />
        <table>
          {items.map(item => 
            updateState === item.timestamp? 
            <EditTableRow 
              item={item} 
              items={items} 
              setItems={setItems} 
              handleSave={handleSave}/> : 
            <ItemRow 
              item={item}
              handleEdit={handleEdit} 
              handleDelete={handleDelete}/>
          )}
        </table>
    </div>
  )
  function handleEdit(id){
    console.log('edit ' +id)
    setUpdateState(id)
  }
  function handleDelete(id){
    console.log('delete ' +id)
  }
  function handleSave(){
    setUpdateState(-1)
  }
}

export default App;

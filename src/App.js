import './styles/App.css';
import { useState } from 'react';
import { format } from 'date-fns';
import TotalSpend from './components/TotalSpend';
import MainInput from './components/MainInput';
import myList from './fakelist';
import Table from './components/SetDates';

function App() {
  const [items,setItems] = useState(myList)
  const [updateState,setUpdateState] = useState(-1)
  const [itemEdit,setItemEdit] = useState({})

  
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
    formJson['highlight'] = false
    console.log(formJson)
    setItems([...items, formJson])
  }
  function handleEdit(id){
    console.log('edit ' +id)
    setUpdateState(id)
  }
  function handleDelete(id){
    console.log('handleDelete +  ' +id)
    const updatedItems = items.filter(i => id !== i.timestamp)
    setItems(updatedItems)
  }

  function handleHighlight(id){
    console.log('handleHighlight +' +id)
  }

  return (
    <div className="App">
        <MainInput handleSubmit={handleSubmit}/>
        <TotalSpend items={items} />
        {/* <table>
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
              handleDelete={handleDelete}
              handleHighlight={handleHighlight}/>
          )}
        </table> */}
        <Table 
          items={items} 
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          updateState={updateState}
          handleHighlight={handleHighlight}
          setItems={setItems}
          itemEdit={itemEdit}
          setItemEdit={setItemEdit}
          setUpdateState={setUpdateState}
        />
    </div>
  )
}


export default App;

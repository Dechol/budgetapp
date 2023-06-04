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
  function handleSave(){
    setUpdateState(-1)
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
        <SetDates 
          items={items} 
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          updateState={updateState}
          handleSave={handleSave}
          handleHighlight={handleHighlight}
          setItems={setItems}
        />
    </div>
  )
}

function SetDates({items,handleEdit,handleDelete,updateState,
                  setItems,handleSave,handleHighlight}){
  let dates = items.map(item => item.date)
  let setDates = new Set(dates)
  let datesArray = Array.from(setDates).sort().reverse()
  let daysObjectArray = datesArray.map(d => {
    let day = {
      date: d,
      spend: Number(0),
      displayItems: true,
      items: []
    }
    for (let i = 0; i < items.length; i++) {
      if(day.date === items[i].date){
        day.spend += Number(items[i].cost) 
        day.items.push(items[i])
      }}
    return (
      <>
        <tr className='highlight' key={day.date}>
          <td></td>
          <td>{day.date}</td>
          <td></td>
          <td></td>
          <td>{day.spend}</td>
          <td></td>
        </tr>
        {day.displayItems && day.items.map(item => 
            updateState === item.timestamp? 
            <EditTableRow 
              item={item} 
              items={items} 
              setItems={setItems} 
              handleSave={handleSave}
              /> : 
            <ItemRow 
              item={item}
              handleEdit={handleEdit} 
              handleDelete={handleDelete}
              handleHighlight={handleHighlight}/>
          )
        }
      </>
    )}
  )

  return(
    <table>
      <tr>
        <th>time</th>
        <th>date</th>
        <th>item</th>
        <th>cost</th>
        <th>total</th>
        <th>btns</th>
      </tr>
      {daysObjectArray}
    </table>
  )
}

export default App;

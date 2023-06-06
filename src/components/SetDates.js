// import { format } from 'date-fns';
import ItemTable from './ItemTable';

export default function Table({items,handleEdit,handleDelete,updateState,
    setItems,handleSave,handleHighlight,setUpdateState}){

    // function DISPLAYITEMS(x){ 
    //     let timestamp = Date.now()
    //     let date = format(timestamp, 'd MMM yy')
    //     if(date === x){
    //         return true
    //     } else {
    //         return false
    //     }
    // }
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
    //return date objects
return (
<>
<tr className='dayrow' key={day.date}>
    <td>{day.date}</td>
    <td>{day.spend}</td>
</tr>
{
    day.displayItems && <ItemTable 
                            dayItems={day.items} 
                            handleDelete={handleDelete} 
                            handleEdit={handleEdit}
                            handleHighlight={handleHighlight}
                            setUpdateState={setUpdateState}
                            handleSave={handleSave}
                            updateState={updateState}
                            items={items}
                            setItems={setItems}
                        />

//return items
// day.displayItems && day.items.map(item => 
// updateState === item.timestamp? 
// <EditTableRow 
// item={item} 
// items={items} 
// setItems={setItems} 
// handleSave={handleSave}
// setUpdateState={setUpdateState}
// /> : 
// <ItemRow 
// item={item}
// handleEdit={handleEdit} 
// handleDelete={handleDelete}
// handleHighlight={handleHighlight}/>
// )
}
</>
)}
)
//return table
return(
<table>
    <tr>
    <th>date</th>
    <th>total</th>
    </tr>
{daysObjectArray}
</table>
)
}
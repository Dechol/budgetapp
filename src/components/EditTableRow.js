

export default function EditTableRow({item, items, setItems, handleSave}){
    function handleItem(e){
        const name = e.target.value
        const updatedData = items.map((i)=> i.timestamp === item.timestamp ?
        {...i,item:name}:i)
        setItems(updatedData)
      }
      function handleDate(e){
        const date = e.target.value
        const updatedData = items.map((i)=> i.timestamp === item.timestamp ?
        {...i,date:date}:i)
        setItems(updatedData)
      }
      function handleTime(e){
        const time = e.target.value
        const updatedData = items.map((i)=> i.timestamp === item.timestamp ?
        {...i,time:time}:i)
        setItems(updatedData)
      }
      function handleCost(e){
        const cost = e.target.value
        const updatedData = items.map((i)=> i.timestamp === item.timestamp ?
        {...i,cost:cost}:i)
        setItems(updatedData)
      }
    
      return(
        <tr key={item.timestamp}>
          <td><input value={item.date} onChange={handleDate} name='date' /></td>
          <td><input value={item.time} onChange={handleTime} name='time'/></td>
          <td><input value={item.item} onChange={handleItem} name='item'/></td>
          <td><input value={item.cost} onChange={handleCost} name='cost'/></td>
          <td>
            <button type='button' onClick={handleSave}>save</button>
          </td>
        </tr>
      )
}
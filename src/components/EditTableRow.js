import { useState } from "react"


export default function EditTableRow({item, items, setItems,setUpdateState}){
  const [itemEdit,setItemEdit] = useState(item)

  function handleChange(e){
        setItemEdit({...itemEdit,[e.target.name]:e.target.value})  
    }
  function handleSave(){
    let updatedData = items.filter(i => i.timestamp !== item.timestamp)

      setItems([...updatedData,itemEdit])
      setUpdateState(-1)
    }
  return(
        <tr key={itemEdit.timestamp}>
          <td><input value={itemEdit.date} onChange={handleChange} name='date' /></td>
          <td></td>
          <td><input value={itemEdit.item} onChange={handleChange} name='item'/></td>
          <td><input value={itemEdit.cost} onChange={handleChange} name='cost'/></td>
          <td><input value={itemEdit.time} onChange={handleChange} name='time'/></td>
          <td>
            <button type='button' onClick={handleSave}><i class="bi bi-plus-circle"></i></button>
          </td>
        </tr>
      )
}
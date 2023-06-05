

export default function ItemRow({item,handleEdit,handleDelete,handleHighlight}){
    return(
        <tr 
          key={item.timestamp} 
          // onClick={()=>handleHighlight(item.timestamp)}
        >
          <td></td>
          <td></td>
          <td>{item.item}</td>
          <td>{item.cost}</td>
          <td>{item.time}</td>
          <td>
            <button onClick={()=>handleEdit(item.timestamp)}><i class="bi bi-pencil"></i></button>
            <button onClick={() =>handleDelete(item.timestamp)}><i class="bi bi-x-circle"></i></button>
          </td>
      </tr>
    )
}
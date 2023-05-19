

export default function ItemRow({item,handleEdit,handleDelete}){
    return(
        <tr key={item.timestamp}>
        <td>{item.date}</td>
        <td>{item.time}</td>
        <td>{item.item}</td>
        <td>{item.cost}</td>
        <td>
          <button onClick={()=>handleEdit(item.timestamp)}><i class="bi bi-pencil"></i></button>
          <button onClick={() =>handleDelete(item.timestamp)}><i class="bi bi-x-circle"></i></button>
        </td>
      </tr>
    )
}
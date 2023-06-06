import EditTableRow from "./EditTableRow";
import ItemRow from "./ItemRow";

export default function ItemTable ({dayItems,handleDelete,handleEdit,handleHighlight,
    items,setItems,updateState,setUpdateState}) {
    return <div>
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>cost</th>
                    <th>Time</th>
                    <th>Btns</th>
                </tr>
            </thead>
            <tbody>
                {dayItems.map(i => 
                    i.timestamp === updateState? 
                <EditTableRow 
                    item={i}
                    items={items}
                    setItems={setItems}
                    setUpdateState={setUpdateState}
                    />:
                <ItemRow 
                                        item={i} 
                                        handleDelete={handleDelete} 
                                        handleEdit={handleEdit}
                                        handleHighlight={handleHighlight}
                                        />
                
                // {
                    // return(

                        //stnd layout
                    // <tr>
                    //     <td>{i.item}</td>
                    //     <td>{i.cost}</td>
                    //     <td>{i.time}</td>
                    //     <td>btns</td>
                    // </tr>
                    // )
                // }
                )}
            </tbody>
        </table>
    </div>
}
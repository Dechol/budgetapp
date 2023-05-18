

export default function TotalSpend({items}){
    let totalspend = 0
  
    for (let i = 0; i < items.length; i++) {
      totalspend += Number(items[i].cost)
    }
    return <p>{`total ${totalspend}`}</p>
  }



export default function MainInput({handleSubmit}){

    return(
      <form onSubmit={handleSubmit}>
        <input className='maininput' placeholder='item' name='item'/>
        <input className='maininput' placeholder='cost' name='cost'/>
        <button type='submit' className='submitBtn'></button>
      </form> 
    )
}
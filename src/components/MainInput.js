


export default function MainInput({handleSubmit}){

    return(
      <form onSubmit={handleSubmit}>
        <input className='maininput' placeholder='item' name='item' required/>
        <input className='maininput' placeholder='cost' name='cost' required/>
        <button type='submit' className='submitBtn'></button>
      </form> 
    )
}
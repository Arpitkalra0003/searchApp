import React, {useState,useEffect} from 'react';


function Country(props) {
  
const[text,setText] = useState('')

const onText = (e)=>{

    setText(e.target.value)
}

  return (
    <div className="main">

        
   <input type="text" placeholder="Search and select country" value={text} onChange={onText} />
   {props.privilege === 'admin' ? <button onClick={()=>props.addCountry(text)}>Add Country</button> : null} 
   <ul>
   {
   props.countryList.filter(cl => cl.toLowerCase().includes(text.toLowerCase())).map((list,index)=>

<li key={index}>{list}</li>

   )
}
<button onClick={()=>props.loadMore(props.noOfItems+5)}>5 more...</button> 
   </ul>

      
       
    </div>
  );
}

export default Country;

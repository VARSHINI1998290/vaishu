import  React, {useState} from 'react';
const Increment=({props})=> {
    const [number,setNumber]=useState(props);
    const incNum=() =>{
      if(number<10){
        setNumber(number+1)
      
    }}
    const decNum=() =>{
      if(number>0){
      setNumber(number-1)
    }else{
      setNumber(0);
    }
  }
  
    return(
<div>

    <button onClick={incNum}> +</button>
    <h1>{number}</h1>
    <button onClick={decNum}> - </button>
</div>
    ) 
}
export default Increment;

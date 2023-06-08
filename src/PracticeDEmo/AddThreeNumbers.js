import { useEffect, useState } from "react"

let items=[];
    let arr=[];
    let sum=0;
    let val=0;

const AddInputValue= () => {
    const[numlist,setNumList]=useState([]);
  
     const onClickHandler = () =>{
        console.log("Inside AddInputValue onclick handler");
       
        // sum=sum+val;
        // console.log("sum= ",sum);
        console.log("Array of number= ",items);
    }
    
    const tempfun = (data) => {
        val=data;
        items=[...items,val];
       // setNewItemText(data);
    }
    return <>
    <Result  />
    No1 :: <ValueInput onNumberPass={tempfun}  />
    No2 :: <ValueInput onNumberPass={tempfun} />
    No3 :: <ValueInput onNumberPass={tempfun} />

    <button onClick={onClickHandler}>Total</button>
    </>

}

const Result =() => {
const [result,setResult] =useState(0);

   return <>
    <h2>{result}</h2>
        </>
}

const ValueInput = (props) => {

    const[number,setNumber]=useState();
props.onNumberPass(number);


return <>
<div>
    <input type="text" name="number" value={number} on onChange={(e) => setNumber(e.target.value)} />
    </div>
    </>
}

export default AddInputValue;
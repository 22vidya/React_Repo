import { useEffect } from "react";
import { useState } from "react"

const AddToList = () =>{
const [newitem,setNewItem]=useState('')
const [todolist,setTodoList]=useState(['Meeting','call to Sir'])

useEffect(() => {
    console.log("useEffect called")
    console.log(todolist);

 },[todolist] )

const handleClick =() => {
   // setTodoList(todolist)
    setTodoList([...todolist,newitem])
}

       

        const temptodolist =todolist.map((item,i)=><li key={i}>{item}</li>)
        const tbltodolist=todolist.map((item,i)=><tr key={i}><td>{item}</td></tr>)
        const opttodolist=todolist.map((item,i)=><option key={i} >{item}</option>)
    
return <>
        New Item::<input type="text" value={newitem} onChange={ (e)=>setNewItem(e.target.value)}/>
        <button onClick={handleClick}>Add Item</button>


        <ol>{temptodolist}</ol>
        <h3>To do list in table format</h3>
        
        <table className="table table-bordered ">
        <tbody>
        <tr><th>To Do list</th></tr>
            {tbltodolist}</tbody>
        </table>
        
        <h3> TO do list in select option format</h3>
        <select>
            <option>select Task to be done</option>
        {opttodolist}

        </select>
</>

}

export default AddToList
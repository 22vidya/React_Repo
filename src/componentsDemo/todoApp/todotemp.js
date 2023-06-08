import {useState} from "react"
export default function ToDo(){
    const userName = "Adam";
    const todoList = [{action : 'Collect Tickets',done : true},
    {action : 'Buy Flowers',done : true},
    {action : 'Cook food',done : true},
    {action : 'Study react',done : false}
]

//to maintain the state of todo items in the array
const [todoItems,setTodoItems] = useState(todoList);

//toggle the done status in the todo item
const toggleTodoStatus = (item) =>setTodoItems(
    todoItems.map(ele => ele.action === item.action? {...ele,done: !ele.done} :ele)
)

//method that returns the tr element
const todoTableRows = () => todoItems.map(ele=>
<TodoRow key={ele.action} item = {ele} callback={toggleTodoStatus}/>)

    return<>

    <TodoBanner name ={userName} task={todoItems}/>
    <div className="container-fluid">
        <table className="table table-striped table-bordered">
            <thead><tr><th>Description</th><th>Done</th></tr></thead>
            <tbody>{todoTableRows()}</tbody>
            
        </table>

    </div>
 
    </>
}
//-------------------Return tr element---------------------

function TodoRow(props){
    const {action,done} = props.item;

    return <tr>
        <td>{props.item.action}</td>
        <td>
            <input type='checkbox' checked={props.item.done} 
            onChange={()=>props.callback(props.item)}/>
        </td>


        {/* <td>{props.item.done ? 'Yes' : 'No'}</td> */}

    </tr>
}

//----------------Display the Banner
function TodoBanner(props){
    console.log("To do banner called")
    return<>

    <h4 className="bg-primary text-center text-white m-2 p-2">
    {/* {props.name}'s Todo List, {props.task.length}  items to do */}
    {props.name}'s Todo List, {props.task.filter(i => !i.done).length}  items to do
  

    </h4>

    </>
}
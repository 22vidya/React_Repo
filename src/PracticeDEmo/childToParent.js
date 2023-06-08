import { useState } from "react"

const Parent1= () => {
const [uicolor,setUicolor] =useState(null);

const getColor = (color) => {
    setUicolor(color);
}
return <>
    <div>
        <div className="App-container" style={{background:`${uicolor}`}}></div>
        <Child abc={getColor} />
    </div>

    </>
}

const Child =(props) => {
    const [activecolor,setActiveColor]=useState("")

    const handleChange =(e)=> {
        const {value} =e.target;
        setActiveColor(value);    
       props.abc(value);
      console.log(props);
    }

    return <>
    <div>
        <input type="text" value={activecolor} onChange= {handleChange}/>
        {/* <input type="text" value={activecolor} onChange= {(e)=>}/> */}
    </div>
    </>
}
export {Parent1,Child}
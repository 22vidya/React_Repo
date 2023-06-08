const Parent=()=>{

    function callback(childdata){
    return (<p>Data FRom CHild::{childdata}</p>)    
    }

    return<>
    <h2>I am Parent</h2>
    <Child handleCallback={callback}/>
    </>

}

const Child=(props)=>{
var message ="Hello I am child... and coming from child";
    return <>
    <h4>I am CHild</h4>
    <h4>{props.handleCallback(message) } </h4>
    </>
}

export default Parent
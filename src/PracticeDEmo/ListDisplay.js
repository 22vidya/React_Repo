
 function ProductsList() {
    
    //Simple array
    const numbers=[10,20,30];
//Single object
    const student={
        rollno:'20',
        name:'Sarvesh',
        class:'Nursary'
    }

    //array of objects
    const products = [
        {name:'Cabbage',id:1,isFruit:false},
        {name:'Spinach',id:2,isFruit:false},
        {name:'Apple',id:3,isFruit:true},
        {name:'MAngo',id:4,isFruit:true}
    
    ]

    

   



const listitems=products.map((item)=><li key={item.id} style={{color:item.isFruit?'Green':'Red'}}>{item.name}</li>)

const numberslist=numbers.map((i)=><li key={i}>{i}</li>)

return <>
<ol>{numberslist}</ol>
<div className="Container">
    <div className="row">
    Name:: {student.name} 
    Roll No:{student.roll}
    Class:: {student.class}

    </div>
     </div>


<ul>{listitems}</ul>



</>

}

export default ProductsList;

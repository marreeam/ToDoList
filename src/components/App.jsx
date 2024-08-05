import React,{useState} from "react";
function App(){
  const [item,setItem]=useState([]);
  const [items,setItems]=useState([]);
  const [style,setStyle]=useState({})

  
  function handleChange(event){
   setItem(event.target.value)

  }
  function handleClick(){
    setItems((prevValue)=>{
      return[...prevValue,item]

    });
    setItem("")

  }
  function handleCheckboxChange(event){
    const {value,checked}=event.target;
    setStyle(prevStyle=>({
      ...prevStyle,
       [value]: checked ? 'line-through' : 'none'
    }))

  }
  function handleDeleteButtonClick(id){
    setItems((prevItems) => prevItems.filter((item, index) => index !== id));
    

  }
  return(
    <div className="container">

      <div className="heading" >
        <h1>To Do List</h1>
        </div>

      <div className="form" >
        <input onChange={handleChange}  type="text" value={item}/>
        <button className="button" onClick={handleClick} >Add</button></div>

        
      <section>
        <ul className="todo-list">
      {items.map((todoItem, index) => (
        <div className="todo-item" key={index}>
        
          <input onChange={handleCheckboxChange} type="checkbox"  value={todoItem} />
          <li id={index} key={index} style={{ textDecoration: style[todoItem] }}>{todoItem}</li>
          <button onClick={() => handleDeleteButtonClick(index)}>Delete</button>
        </div>
      ))}
    </ul>
    </section> 
      
 </div>

  );
}
export default App;
//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
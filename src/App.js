import ToDoList from "./components/TodoList";


function App() {
  return (
    <ToDoList
    render={(items,index,handleRemoveItem)=>{
     
      return(
        <ul>{items !== "" && items.map((item, index) =>
                    <li key={item + Math.random()}  >{item}  <button name={index++} onClick={handleRemoveItem}>Remove</button></li>
                )
                } </ul>
      )
    }}
    >

    </ToDoList>
  )
}

export default App;

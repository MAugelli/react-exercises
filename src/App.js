
import ToDoList from "./components/TodoList";


function App() {
  return (
    <ToDoList
      render={(items, index, handleRemoveItem, handleAddItem, handleClearList) => {

        return (<div>
          <form onSubmit={handleAddItem}>
            <input type="text" name="ToDo" />
            <button type="submit">Add</button>
            <button type="reset" onClick={handleClearList}>Clear list</button>
          </form>
          <ul>{items !== "" && items.map((item, index) =>
            <li key={item + Math.random()}  >{item}  <button name={index++} onClick={handleRemoveItem}>Remove</button></li>
          )} </ul>
        </div>
        )
      }}/>
  )

 

export default App;


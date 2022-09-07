import ToDoList from "./components/TodoList";


function App() {
  return (
    <ToDoList
    render={item => {
      const propsItem = ["raba 1", "roba2", "roba3"]
      
      return (
        <ul>{propsItem.map((item ) =>
                    <li key={item + Math.random()}  >{item}  </li>
                )
                } </ul>
      )
    }
    }
    > 
      
    </ToDoList>
  );
}

export default App;

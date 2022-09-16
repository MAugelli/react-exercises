import React from "react";

class ToDoList extends React.Component {

    state = {
        items: ["Go to gym", "Repair the car", "Watch react lesson"],
        index:0
    }

    handleAddItem = (event) => {
        event.preventDefault()
        {event.target.elements.ToDo.value !== "" && this.setState((prevState) => ({
            // items: prevState.items.concat(event.target.elements.ToDo.value)
            items: [...prevState.items, event.target.elements.ToDo.value] 
        }), 
            () => {
                event.target.elements.ToDo.value = "" 
            } 
        )}
    }

    handleClearList = (event) => {
        event.preventDefault()
        this.setState(() => ({
            items: ""
        }))
    }

    handleRemoveItem = (event) => {
        const newItems = this.state.items
        newItems.splice(event.target.name, 1)
        this.setState(() => ({
            items: newItems
        }))
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddItem}>
                    <input type="text" name="ToDo" />
                    <button type="submit">Add</button>
                    <button type="reset" onClick={this.handleClearList}>Clear list</button>
                </form>
                <ul>{this.state.items !== "" && this.state.items.map((item, index = this.state.index ) =>
                    <li key={item + Math.random()}  >{item}  <button name={index++} onClick={this.handleRemoveItem}>Remove</button></li>
                )
                } </ul>
            </div>);
    }
}

export default ToDoList;
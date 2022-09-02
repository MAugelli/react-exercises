import React from "react";

class ToDoList extends React.Component {
    state = {
        items: ["Go to gym", "Repair the car", "Watch react lesson"],
    }

    handleAddItem = (event) =>{
        event.preventDefault()
        this.setState( (prevState) => ({
            // items: prevState.items.concat(event.target.elements.ToDo.value)
            items: [...prevState.items, event.target.elements.ToDo.value]
        }))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddItem}>
                    <input type="text" name="ToDo" />
                    <button type="submit">Add</button>
                </form>
                    <ul>{this.state.items.map(item =>
                        <li key={item + Math.random()}>{item}</li>
                    )}</ul>
            </div>);
    }
}

export default ToDoList;

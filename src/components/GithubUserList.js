import { useState } from "react"
import GithubUser from "./GithubUser"

function GithubUserList (){
    const [users, setUsers] = useState(["MAugelli"])
    const [newUser, setNewUser] = useState("")

    function handleAddItem(event){
        event.preventDefault()
        setNewUser(
            event.target.elements.AddUser.value
        )
        setUsers(users.concat(newUser))
    }

        return (
            <div>
                <form onSubmit={handleAddItem}>
                    <input type="text" name="AddUser" />
                    <button type="submit">Add</button>
                </form>
                <ul>{users.map(item =>
                    <li key={item + Math.random()}><GithubUser username={item}/></li>
                )}</ul>
            </div>);
    }


export default GithubUserList;
import { useState } from "react"
import GithubUser from "./GithubUser"

function GithubUserList (){
    const [users, setUsers] = useState([])

    function handleAddItem(event){
        event.preventDefault()
        setUsers([...users,  event.target.elements.AddUser.value])
    }

        return (
            <div>
                <form onSubmit={handleAddItem}>
                    <input type="text" name="AddUser" />
                    <button type="submit">Add</button>
                </form>
                {users.map(item =>{
                return (
                    <div  key={Math.random()}>

                        <GithubUser username={item}/>
                    </div>
                )}
                )}
            </div>);
    }


export default GithubUserList;
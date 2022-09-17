import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

function GithubUserList (){
    const [users, setUsers] = useState([])

    function handleAddItem(event){
        event.preventDefault()
        setUsers([...users,  event.target.elements.AddUser.value])
    }

        return (
            <div>
                <Link to="/"> Welcome</Link> | <Link to="/counter"> Counter </Link> | <Link to="/users"> GitHub user </Link> 
                <form onSubmit={handleAddItem}>
                    <input type="text" name="AddUser" />
                    <button type="submit">Add</button>
                </form>

                {users.map(item =>{
                return (
                    <div  key={Math.random()}>

                        <Link to={`/users/${item}`}> {item}</Link>

                    </div>
                )}
                )}

                <Outlet />
            </div>);
    }


export default GithubUserList;
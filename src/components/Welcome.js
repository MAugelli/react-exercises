import { Link, useParams } from "react-router-dom";

function Welcome(){
    const {user = "World"} = useParams()
    return (
    <div>
        <h1>Hello, {user}!</h1> 
        <Link to="/counter"> Counter </Link> | <Link to="/users/:username"> GitHub user </Link> 
    </div>
    );   
}


export default Welcome; 
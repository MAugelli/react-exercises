import { Link } from "react-router-dom";

function Welcome(props){
    return (
    <div>
        <h1>Hello, {props.name}!</h1> 
        <Link to="/counter"> Counter </Link> | <Link to="/users/:username"> GitHub user </Link> 
    </div>
    );   
}


export default Welcome; 
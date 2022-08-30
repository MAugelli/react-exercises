import Age from "./Age";

function Welcome(props){
    return (<div>
        <p>Hello, {props.name}!</p>  
        <Age age={props.age}/>  
    </div>
    );   
}

Welcome.defaultProps = {
    name: "Bob"
};

export default Welcome;
 

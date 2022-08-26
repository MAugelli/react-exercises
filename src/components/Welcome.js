import Age from "./Age";

function Welcome(props){
    return (<div>
        {props.name==="John" && <p>Hello,{props.name}!</p>}  
        {props.age>18 && props.age<65 && <Age age={props.age}/> }  
    </div>
    );   
}

Welcome.defaultProps = {
    name: "Bob"
};

export default Welcome;


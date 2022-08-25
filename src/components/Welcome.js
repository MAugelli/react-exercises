function Welcome(props){
    return (<div>
        <h1>Hello, {props.name}!</h1> 
        <p>Your age is {props.age}</p>
    </div>
    );   
}

Welcome.defaultProps = {
    name: "Bob"
};

export default Welcome;
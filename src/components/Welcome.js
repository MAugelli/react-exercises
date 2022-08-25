function Welcome(props){
    return (<div>
        <p>Hello, {props.name}!</p> 
        <p>Your age is {props.age}</p>
    </div>
    );   
}

Welcome.defaultProps = {
    name: "Bob"
};

export default Welcome;
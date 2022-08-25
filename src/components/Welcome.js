function Welcome(props){
    return (
        <h1>Hello, {props.name}!</h1> 
    );   
}

Welcome.defaultProps = {
    name: "Bob"
};

export default Welcome;
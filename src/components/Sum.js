

function Sum(props) {
    
    let result = props.numbers.reduce((num, i) => i + num, 0)
    
    return ( <h1>Il somma dei numeri è {result}</h1> );
}

export default Sum;


function Sum(props) {
    
    let result = props.numbers.reduce((num, i) => i + num, 0)
    
    return ( <h1>Il somma dei numeri è {result}</h1> );
}
 
Sum.defaultProps = {numbers: [40,50,10]}

export default Sum; 
function Container(props) {
    return ( 
        <div className="bg-red-500 border-red-700 border-solid border-2">
            {props.title}
            <div>
            {props.children}
            </div>
        </div> 
     );
}

export default Container;
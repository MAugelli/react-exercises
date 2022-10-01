function Container(props) {
    return ( 
        <div className="bg-red-500 border-red-700 border-solid border-2">
            {props.children}
        </div>
     );
}

export default Container;
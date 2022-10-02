import useForm from "./useForm";

function Form() {
    const {user, inputChange} = useForm()
    
    return ( 
        <div>
            <input type="text" name="username" value={user.username} onChange={inputChange}/>
            <input type="password" name="password" value={user.password} onChange={inputChange}/>
            <div>
                <h2>{user.username}</h2>
                <h2>{user.password}</h2>
            </div>
        </div>
     );
}

export default Form;
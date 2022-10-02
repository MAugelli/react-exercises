import { useState } from "react"

function useForm() {
    const [user, setUser]= useState({
        username: "",
        password: ""
    })

    function handleImputChange(event) {
        const { name, value} = event.target

        setUser((user) =>{
            return{
                ...user,
                [name]: value
            }
        })

    }

    return{
        user:user,
        inputChange: handleImputChange
    }

}

export default useForm;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GithubUser({username}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchGithubUser(username){
        setError(null)
        setLoading(true)

        try {
            const responce = await fetch(`https://api.github.com/users/${username}`) 
            const json = await responce.json()
    
            setUser(json)

        } catch (error) {
            setError(error)
            setUser(null)
        } finally { 
            setLoading(false)
        }
    }

    useEffect (() => {
        fetchGithubUser(username)
    }, [username])
    
    return ( 
    <div>
        {loading && <h1>Caricamento...</h1>}
        {user && <h1>{user.name}</h1>}
        {error && <h1>C'è stato un errore</h1>}
        <Link to="/"> Welcome</Link> | <Link to="/counter"> Counter </Link> | <Link to="/users/:username"> GitHub user </Link> 

    </div> );
}

export default GithubUser;
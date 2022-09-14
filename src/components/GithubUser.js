import { useEffect, useState } from "react";

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

    </div> );
}

export default GithubUser;
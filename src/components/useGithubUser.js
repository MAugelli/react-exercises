import { useEffect, useState } from "react"

function useGithubUser(username) {
    const [user, setUser] = useState(null)
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null)

    async function fetchGithubUser(username){
        // setError(null)
        // setLoading(true)

        // try {
            const responce = await fetch(`https://api.github.com/users/${username}`) 
            const json = await responce.json()
    
            setUser(json)

        // } catch (error) {
        //     setError(error)
        //     setUser(null)
        // } finally {
        //     setLoading(false)
        // }
    }

    useEffect (() => {
        fetchGithubUser(username)
    }, [username])

    // return{user, error, loading}
    return{user}
    
}

export default useGithubUser;
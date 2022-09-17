import useGithubUser from "./useGithubUser";

function GithubUser({username}) {
    
    const {user, error, loading, refresh} = useGithubUser(username)

    return ( 
    <div>
        {loading && <h1>Caricamento...</h1>}
        {user && <h1>{user.name}</h1>}
        {error && <h1>C'è stato un errore</h1>}
        <button onClick={refresh}>Refresh</button>
    </div> );
}

export default GithubUser;
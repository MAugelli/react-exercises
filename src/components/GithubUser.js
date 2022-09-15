import useGithubUser from "./useGithubUser";

function GithubUser({username}) {

    const {data, error, loading} = useGithubUser(username)

    return ( 
    <div>
        {loading && <h1>Caricamento...</h1>}
        {data && <h1>Funziono</h1>}
        {error && <h1>C'è stato un errore</h1>}
    </div> );
}

export default GithubUser;
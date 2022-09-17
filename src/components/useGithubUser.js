import useSWR from "swr";

const fetcher = (url) => fetch(url).then(responce=>responce.json())

function useGithubUser(username) {
    const { data, err, mutate } =useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher)
    
    function handleRefresh(){
        mutate()
    }

    return{
        user: data,
        error: err,
        loading: !data && !err,
        refresh: handleRefresh
    }
    
}

export default useGithubUser;
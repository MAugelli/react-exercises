import useSWR from "swr";

const fetcher = (url) => fetch(url).then(responce=>responce.json())

function useGithubUser(username) {
    const { data, err } =useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher)
    
    return{
        user: data,
        error: err,
        loading: !data && !err,
    }
    
}

export default useGithubUser;
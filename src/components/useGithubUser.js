import useSWR from "swr";

const fetcher = (url) => fetch(url).then(responce=>responce.json())

function useGithubUser(username) {
    const { data, error } =useSWR(`https://api.github.com/users/${username}`, fetcher)

    return{
        user: data,
        error,
        loading: !data && !error
    }
    
}

export default useGithubUser;
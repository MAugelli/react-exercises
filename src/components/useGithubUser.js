import useSWR from "swr";

const fetcher = (url) => fetch(url).then(responce=>responce.json())

function useGithubUser(username) {
    const { data, err } =useSWR(() => `https://api.github.com/users/` + {username} , fetcher)

    return{
        user: data,
        error: err,
        loading: !data && !err,
    }
    
}

export default useGithubUser;
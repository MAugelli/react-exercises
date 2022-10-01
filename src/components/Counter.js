import {useEffect, useState} from "react";

function Counter () {
    const [count, setCount] = useState(0)

        

        useEffect(()=>{
            const _interval = setInterval(() => {
                setCount((c) => c + 1)
            }, 2000)

            return() => {
                clearInterval(_interval)
            }
        },[])


        return (
            <span>
                {count}
            </span>
        );
    }

 
export default Counter;
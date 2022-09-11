import {useEffect, useState} from "react";

function Counter () {
    const [count, setCount] = useState(0)

        

        useEffect(()=>{
            setInterval(() => {
                increment ()
            }, 2000)

            // return() => {
            //     clearInterval(_interval)
            // }
        },[count, increment])

        function increment () {
            setCount(count + 1)
        }

        return (
            <span>
                {count}
            </span>
        );
    }

 
export default Counter;
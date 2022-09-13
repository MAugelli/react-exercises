import { useEffect, useMemo, useState } from "react";
import data from "./data"

function FilteredList() {
    const [users, setUsers] = useState([])

    const list = data.filter(user => {return user.age > 18 })

    // useMemo(() => setUsers((users) => list))
    useEffect(()=>{
        setUsers((users) => list)

    }, [])
    
    console.log(users);
    return (
        <div>
            {users.map(user => {
                    return (
                        <div key={Math.random()}>
                            <h3>Id:{user.id}</h3>
                             <h3>Name:{user.name}</h3>
                             <h3>Age:{user.age}</h3>
                        </div>
                    )
                }
                )
            }
        </div >
    );
}

export default FilteredList;
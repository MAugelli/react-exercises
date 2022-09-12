import { useEffect, useRef} from "react";

function CarDetails ({initialDataImput}) {
    const initialModelData = useRef()
    const initialYearData = useRef()
    const initialColorData = useRef()
    
    useEffect(()=>{
        initialModelData.current.value = initialDataImput.model
        initialYearData.current.value = initialDataImput.year
        initialColorData.current.value = initialDataImput.color

    }, [initialDataImput])

    
    return ( 
        <div>
            <form>
                <input ref={initialModelData} type="text" name="model" />
                <input ref={initialYearData} type="number" name="year" />
                <input ref={initialColorData} type="text" name="color" />
            </form>
        </div>
     );
}

export default CarDetails ;
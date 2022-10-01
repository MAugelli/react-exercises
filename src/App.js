
import ClickCounter from "./components/ClickCounter";


    function onCounterChange(i) {
        console.log(i);
    }

const App = () => {
    return ( 
      <ClickCounter change={onCounterChange}/>
    );
}


 
export default App;


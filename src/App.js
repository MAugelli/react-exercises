import { Routes,Route } from "react-router-dom";
import ClickCounter from "./components/ClickCounter";
import Welcome from "./components/Welcome";


const App = () => {
    return ( 
      <Routes>
        <Route path="/" element={<Welcome name="Jimmy"/>} />
        <Route path="/counter" element={<ClickCounter/>} />
      </Routes>
      
    );
}
 
export default App;

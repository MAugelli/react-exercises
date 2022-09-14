import { Routes,Route } from "react-router-dom";
import ClickCounter from "./components/ClickCounter";
import GithubUser from "./components/GithubUser";
import Welcome from "./components/Welcome";


const App = () => {
    return ( 
      <Routes>
        <Route path="/" element={<Welcome name="Jimmy"/>} />
        <Route path="/counter" element={<ClickCounter/>} />
        <Route path="/users/:username" element={<GithubUser/>} />
      </Routes>
      
    );
}
 
export default App;
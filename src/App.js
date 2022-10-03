import { Routes,Route } from "react-router-dom";
import ClickCounter from "./components/ClickCounter";
import GithubUser from "./components/GithubUser";
import Welcome from "./components/Welcome";


const App = () => {
    return ( 
      <Routes>
        <Link to="/"> Welcome</Link> | <Link to="/counter"> Counter </Link> | <Link to="/users/:username"> GitHub user </Link> 
        <Route path="/" element={<Welcome />} />
        <Route path="/counter" element={<ClickCounter/>} />
        <Route path="/users/:username" element={<GithubUser/>} />
      </Routes>
      
    );
}
 
export default App;
import { Routes,Route, Link } from "react-router-dom";
import ClickCounter from "./components/ClickCounter";
import GithubUser from "./components/GithubUser";
import Welcome from "./components/Welcome";


const App = () => {
    return ( 
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/counter" element={<ClickCounter/>} />
        <Route path="/users/:username" element={<GithubUser/>} />
        <Route path="*" element={<div>
          <h3>Not Found!</h3>
          <Link to="/">Go back</Link>
        </div>} />
      </Routes>
      
    );
}
 
export default App;

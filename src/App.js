
import { useState } from "react";
import DisplayLanguage from "./components/DisplayLanguage";
import { LanguageContext } from "./components/LanguageContext";



function App() {
  const [language, setLanguage] = useState("en")

  function handleLanguageChange(event){
    setLanguage(event.target.value)
  }
    return ( 
         <div>
            <select value={language} onChange={handleLanguageChange}>
              <option value="en">English</option>
              <option value="it">Italiano</option>
            </select>
         <LanguageContext.Provider value={language}>
          <DisplayLanguage />
         </LanguageContext.Provider>
         </div>
      )
  }

  
 
export default App;

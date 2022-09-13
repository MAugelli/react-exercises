import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";


const String = {
    en: "Hello! The chosen language is English!",
    it: "Ciao! La lingua scelta è l'italiano!"
}

function DisplayLanguage() {
    const language = useContext(LanguageContext)

    return (
        <div>
            <h1>{String[language]}</h1>
        </div>
    )

}

export default DisplayLanguage;
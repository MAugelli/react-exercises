import { LanguageContext } from "./LanguageContext";

const String ={
    en:"Hello! The chosen language is English!",
    it:"Ciao! La lingua scelta è l'italiano!"
}

function DisplayLanguage() {
    return ( 
        <div>
            <LanguageContext.Consumer>
            {language => {
                return (
                    <div>
                        {String[language]}
                    </div>
                )
            }}
            </LanguageContext.Consumer>
        </div>
     );
}

export default DisplayLanguage;
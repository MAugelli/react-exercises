import Welcome from "./components/Welcome";

const App = () => {
  return ( <div>
    {/* visibili entrambi i componenti Welcome e Age */}
     <Welcome name={<strong>Mark</strong>} age={25} />
     {/* visibile solo i componente Welcome */}
     <Welcome name={<strong>Bob</strong>} />
  </div> );
}
 
export default App;
 
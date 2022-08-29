import Welcome from "./components/Welcome";

const App = () => {
  return ( <div>
    {/* visibili entrambi i componenti Welcome e Age */}
     <Welcome name={<strong>Mark</strong>} age={25} />
     {/* visibile solo il componente Welcome */}
     <Welcome name={<strong>Bob</strong>} age={15}/>
      {/* visibile solo il componente Welcome */}
      <Welcome name={<strong>John</strong>} age={70}/>
  </div> );
}
 
export default App;
 
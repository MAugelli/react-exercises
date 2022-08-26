import Welcome from "./components/Welcome";

const App = () => {
  return (<div>
    {/* visibile solo il componente Age */}
    <Welcome name={"Mark"} age={25} />
    {/* visibile solo il componente Welcome */}
    <Welcome name={"John"} age={70} />
    {/* visibili tutti i componenti */}
    <Welcome name={"John"} age={50} />
  </div>);
}

export default App;

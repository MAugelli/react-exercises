import Welcome from "./components/Welcome";

const App = () => {
  return (<div>
    {/* componente Age renderizza "You are very young!" */}
    <Welcome name={"Mark"} age={16} />
    {/* omponente Age renderizza "Your age is 70" */}
    <Welcome name={"John"} age={70} />
  </div>);
}

export default App;

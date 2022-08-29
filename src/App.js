import CounterDisplay from "./components/CounterDisplay";


const App = () => {
  return (<div>
    <CounterDisplay initialValue={10} incrementBy={5} timeOut={2000}/>
  </div>);
}

export default App;

import Counter from "./components/CounterDisplay";


const App = () => {
  return (<div>
    <Counter initialValue={1} incrementBy={5} timeOut={2000}  />
  </div>);
}

export default App;
 
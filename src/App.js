import Counter from "./components/Counter";


const App = () => {
  return (<div>
    <Counter initialValue={10} incrementBy={5} timeOut={2000}/>
  </div>);
}

export default App;

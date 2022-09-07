import Counter from "./components/Counter";


const App = () => {
  return (
    <div>
    <Counter initialValue={0} incrementBy={1} timeOut={2000}/>
  </div>);
}

export default App;
 
import "./App.css";
import Concert from "./components/Concert/Concert";
import Header from "./components/Header/Header";
import "./components/Header/Header.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Concert></Concert>
    </div>
  );
}

export default App;

import "./App.css";
import CatList from "./components/CatList";
import Cat from "./components/Cat";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Otters Flasky</h1>
      </header>
      <main>
        <CatList />
        <Cat />
        <Cat />
        <Cat />
      </main>
    </div>
  );
}

export default App;

import "./App.css";
import CatList from "./components/CatList";
import { useState } from "react";
function App() {
  const catData1 = [
    {
      id: 1,
      name: "Jeff THEE Cat",
      saying: "rainbows 5evah",
      age: 5,
      color: "tabby",
    },
    { id: 2, name: "Lily", saying: "cry", age: 5, color: "tabby" },
    { id: 3, name: "Richard", saying: "food", age: 5, color: "tabby" },
    { id: 4, name: "Prince", saying: "meow", age: 5, color: "tuxedo" },
  ];

  // ids must be unique within the same array, not necessarily across arrays
  const catData2 = [
    { id: 3, name: "Lily", saying: "cry", age: 5, color: "tabby" },
    { id: 4, name: "Richard", saying: "food", age: 5, color: "tabby" },
  ];

  const [cats, setCats] = useState(catData1);
  const [placeholder, setPlaceholder] = useState("Hello");
  const handleAppClick = () => {
    setPlaceholder(placeholder + "!");
  };

  const setCatAge = (id) => {
    console.log("inside setCatAge", id);

    // create a copy of cats
    const olderCats = [...cats];
    // increase the age of cat with id
    for (let cat of olderCats) {
      if (cat.id === id) {
        cat.age += 1;
      }
    }
    // call setCats to update array
    setCats(olderCats);
  };

  const deleteCat = (id) => {
    console.log("delete", id);
    const newCats = cats.filter((cat) => cat.id !== id);
    setCats(newCats);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Otters Flasky</h1>
      </header>
      <button onClick={handleAppClick}>{placeholder}</button>
      <main>
        <CatList
          catData={cats}
          setCatAgeCallback={setCatAge}
          deleteCatCallback={deleteCat}
        />
        {/* <CatList catData={catData2} /> */}
      </main>
    </div>
  );
}

export default App;

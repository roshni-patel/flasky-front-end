import "./App.css";
import axios from "axios";
import CatList from "./components/CatList";
import CatForm from "./components/CatForm";
import { useState, useEffect } from "react";
function App() {
  // const catData1 = [
  //   {
  //     id: 1,
  //     name: "Jeff THEE Cat",
  //     saying: "rainbows 5evah",
  //     age: 5,
  //     color: "tabby",
  //   },
  //   { id: 2, name: "Lily", saying: "cry", age: 5, color: "tabby" },
  //   { id: 3, name: "Richard", saying: "food", age: 5, color: "tabby" },
  //   { id: 4, name: "Prince", saying: "meow", age: 5, color: "tuxedo" },
  // ];

  // ids must be unique within the same array, not necessarily across arrays
  const catData2 = [
    { id: 3, name: "Lily", saying: "cry", age: 5, color: "tabby" },
    { id: 4, name: "Richard", saying: "food", age: 5, color: "tabby" },
  ];

  const [cats, setCats] = useState([]);

  useEffect(() => {
    getCatsFromApi();
  }, []);

  const getCatsFromApi = () => {
    axios
      .get(`http://127.0.0.1:5000/cats`)
      .then((response) => {
        setCats(response.data);
      })
      .catch((error) => {
        console.log("OH NOES OH NOES!");
      });
  };

  const [placeholder, setPlaceholder] = useState("Hello");
  const handleAppClick = () => {
    setPlaceholder(placeholder + "!");
  };

  const setCatAge = (id) => {
    console.log("inside setCatAge", id);

    // create a copy of cats
    const olderCats = [...cats];
    let targetCat;

    for (let cat of olderCats) {
      if (cat.id === id) {
        targetCat = cat;
      }
    }

    axios
      .put(`http://127.0.0.1:5000/cats/${targetCat.id}`, {
        name: targetCat.name,
        age: targetCat.age + 1,
        color: targetCat.color,
        saying: targetCat.saying,
      })
      .then((response) => {
        targetCat.age += 1;
        setCats(olderCats);
      })
      .catch((error) => {
        console.log("Couldn't set cat age older");
      });

    // increase the age of cat with id
    // for (let cat of olderCats) {
    //   if (cat.id === id) {
    //     cat.age += 1;
    //   }
    // }
    // call setCats to update array
    // setCats(olderCats);
  };

  const deleteCat = (id) => {
    console.log("delete", id);
    axios
      .delete(`http://127.0.0.1:5000/cats/${id}`)
      .then((response) => {
        const newCats = cats.filter((cat) => cat.id !== id);
        setCats(newCats);
      })
      .catch((error) => {
        console.log("Unable to delete!");
      });
    // const newCats = cats.filter((cat) => cat.id !== id);
    // setCats(newCats);
  };

  // post cat, get confirmation that worked
  // new api call does a get and pulls in the cats, second API call
  // triggers re-render
  const makeNewCat = (data) => {
    axios
      .post(`http://127.0.0.1:5000/cats`, data)
      .then((response) => {
        getCatsFromApi();
      })
      .catch((error) => {
        console.log("Could not make new cat");
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Otters Flasky</h1>
      </header>
      <button onClick={handleAppClick}>{placeholder}</button>
      <main>
        <CatForm handleSubmission={makeNewCat} />
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

import "./Cat.css";
import PropTypes from "prop-types";
import { useState } from "react";

const Cat = (props) => {
  // const [catAge, setCatAge] = useState(props.age);
  const [catSaying, setCatSaying] = useState(props.saying);

  const catAge = props.age;
  const catName = props.name;
  const catColor = props.color;

  // const makeCatOlder = () => {
  //   // setCatAge(catAge + 1);
  //   props.setCatAgeCallback(props.id);
  // };

  // const deleteCat = () => {
  //   props.deleteCatCallback(props.id)
  // }

  const changeCatSaying = (event) => {
    let newSaying = event.target.value;
    if (newSaying === "") {
      newSaying = "Hello!";
    } else {
      setCatSaying(newSaying);
    }
  };
  return (
    <div className="cat rainbow">
      <h3>{catName}</h3>
      <p>{catSaying}</p>
      <p>
        Change Saying: <input type="text" onChange={changeCatSaying} />
      </p>
      <p>
        {" "}
        {catAge}{" "}
        <button onClick={() => props.setCatAgeCallback(props.id)}>🐾</button>
        <button onClick={() => props.deleteCatCallback(props.id)}>
          Delete
        </button>
      </p>
      <p>{catColor}</p>
    </div>
  );
};

// Why are we not passing ID?
// ID is used at the catList level
Cat.propTypes = {
  name: PropTypes.string.isRequired,
  saying: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  setCatAgeCallback: PropTypes.func.isRequired,
  deleteCatCallback: PropTypes.func.isRequired,
};
export default Cat;

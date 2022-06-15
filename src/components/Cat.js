import "./Cat.css";
import PropTypes from "prop-types";

const Cat = (props) => {
  const catName = props.name;
  const catSaying = props.saying;
  const catAge = props.age;
  const catColor = props.color;

  return (
    <div className="cat rainbow">
      <h3>{catName}</h3>
      <p>{catSaying}</p>
      <p>{catAge}</p>
      <p>{catColor}</p>
    </div>
  );
};

// Why are we not passing ID?
// ID is used at the catList level
Cat.propTypes = {
  name: PropTypes.string.isRequired,
  saying: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
export default Cat;

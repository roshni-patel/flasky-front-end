import "./CatList.css";
import Cat from "./Cat";
import PropTypes from "prop-types";

const CatList = ({ catData, setCatAgeCallback, deleteCatCallback }) => {
  // const catData = props.catData;

  // One way of doing it
  // const catComponents = [];

  // for (const cat of catData) {
  //   catComponents.push(
  //     <Cat
  //       key={cat.id}
  //       name={cat.name}
  //       saying={cat.saying}
  //       age={cat.age}
  //       color={cat.color}
  //     />
  //   );
  // }

  // Another way of doing it, as in Learn lesson
  const catComponents = catData.map((cat) => (
    <Cat
      id={cat.id}
      key={cat.id}
      name={cat.name}
      saying={cat.saying}
      age={cat.age}
      color={cat.color}
      setCatAgeCallback={setCatAgeCallback}
      deleteCatCallback={deleteCatCallback}
    />
  ));

  return (
    <div>
      <h2 className="catList">Super Amazing List of Cutie Cats</h2>
      {catComponents}
    </div>
  );
};

CatList.propTypes = {
  catData: PropTypes.array.isRequired,
  setCatAgeCallback: PropTypes.func.isRequired,
  deleteCatCallback: PropTypes.func.isRequired,
};
export default CatList;

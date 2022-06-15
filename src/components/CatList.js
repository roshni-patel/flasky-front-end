import "./CatList.css";
import Cat from "./Cat";
import PropTypes from "prop-types";

const CatList = ({ catData }) => {
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
      key={cat.id}
      name={cat.name}
      saying={cat.saying}
      age={cat.age}
      color={cat.color}
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
};
export default CatList;

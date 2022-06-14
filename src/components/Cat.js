import "./Cat.css";

const Cat = () => {
  const catName = "Jeff THEE Cat";
  const catSaying = "Rainbows 5evah";

  return (
    <div className="cat rainbow">
      <h3>{catName}</h3>
      <p>{catSaying}</p>
    </div>
  );
};

export default Cat;

import CategoryItem from "../categoryItem/CategoryItem";
import "./Directory.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem {...category} />
      ))}
    </div>
  );
};

export default Directory;

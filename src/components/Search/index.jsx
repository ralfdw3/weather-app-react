import "./Search.css";
import InputWithImage from "../InputWithImage";

const Search = ({ children, onClick, onChange, flexDirection, width }) => {
  return (
    <div className="search-container">
      <span>{children}</span>
      <InputWithImage
        onChange={onChange}
        onClick={onClick}
        width={width}
        flexDirection={flexDirection}
      />
    </div>
  );
};
export default Search;

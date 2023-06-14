import InputWithImage from "../InputWithImage/index";
import { ChangeEventHandler } from "react";
import { FlexDirection } from "../../common/enums/FlexDirection";
import "./Search.css";

interface SearchProps {
  children?: string;
  onClick: () => void;
  onChange: ChangeEventHandler<HTMLInputElement>;
  flexDirection: FlexDirection;
  width: string;
}

const Search = ({
  children,
  onClick,
  onChange,
  flexDirection,
  width,
}: SearchProps) => {
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

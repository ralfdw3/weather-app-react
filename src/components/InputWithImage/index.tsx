import { ChangeEventHandler } from "react";
import { FlexDirection } from "../../common/enums/FlexDirection";
import "./InputWithImage.css";

interface InputWithImageProps {
  onClick: () => void;
  onChange: ChangeEventHandler<HTMLInputElement>;
  flexDirection: FlexDirection;
  width: string;
}

const InputWithImage = ({
  onClick,
  onChange,
  flexDirection,
  width,
}: InputWithImageProps) => {
  return (
    <div
      className="input-with-image-container"
      style={{
        flexDirection: flexDirection,
        width: width,
      }}
    >
      <img
        src="src/images/today-forecast/magnifying-glass.png"
        alt="lupa"
        className="magnifying-glass"
        onClick={onClick}
      />
      <input type="text" onChange={onChange} />
    </div>
  );
};

export default InputWithImage;

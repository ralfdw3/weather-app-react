import { ChangeEvent } from "react";
import "./InputWithTitleAbove.css";

interface InputWithTitleAboveProps {
  title: string;
  width: string;
  onChange: (value: string) => void;
  value: string;
  type?: string;
  fontSize?: string;
  fontWeight?: string;
}

const InputWithTitleAbove = ({
  title,
  width,
  onChange,
  value,
  type = "text",
  fontSize = "16px",
  fontWeight = "normal",
}: InputWithTitleAboveProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="input-title-container">
      <span style={{ fontSize: fontSize, fontWeight: fontWeight }}>
        {title}
      </span>
      <input
        className="input-title-above"
        style={{ width: width }}
        type={type}
        onChange={handleInputChange}
        value={value}
      />
    </div>
  );
};

export default InputWithTitleAbove;

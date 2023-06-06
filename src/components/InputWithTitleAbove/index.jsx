import "./InputWithTitleAbove.css";
import React from "react";

const InputWithTitleAbove = ({
  title,
  width,
  onChange,
  value,
  type = "text",
  fontSize = "16px",
  fontWeight = "normal",
}) => {
  const handleInputChange = (event) => {
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

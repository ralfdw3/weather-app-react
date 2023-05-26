import "./InputWithTitleAbove.css";
import React from "react";

const InputWithTitleAbove = ({ title, width, onChange, value }) => {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="input-title-container">
      <span>{title}</span>
      <div>
        <input
          className="input-title-above"
          style={{ width: width }}
          type="text"
          onChange={handleInputChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default InputWithTitleAbove;

import "./TitleAndOptions.css";
import React, { useState } from "react";

const TitleAndOptions = ({ title, option1, option2, onChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onChange(option);
  };

  const option1Class =
    selectedOption === option1
      ? "title-and-options-option title-and-options-option-selected"
      : "title-and-options-option";
  const option2Class =
    selectedOption === option2
      ? "title-and-options-option title-and-options-option-selected"
      : "title-and-options-option";

  return (
    <div className="title-and-options-container">
      <span className="title-and-options-title">{title}</span>
      <div className="title-and-options-options">
        <div
          className={option1Class}
          onClick={() => handleOptionClick(option1)}
        >
          {option1}
        </div>
        <div
          className={option2Class}
          onClick={() => handleOptionClick(option2)}
        >
          {option2}
        </div>
      </div>
    </div>
  );
};

export default TitleAndOptions;

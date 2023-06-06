import "./TitleAndOptions.css";
import React, { useState, useEffect } from "react";

const TitleAndOptions = ({ title, option1, option2, onChange, value }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onChange(option);
  };

  useEffect(() => {
    setSelectedOption(handleValue(value));
  }, [value]);

  const handleValue = (value) => {
    switch (value) {
      case "DAY":
        return option1;
      case "NIGHT":
        return option2;
      case "CLEAR":
        return option1;
      case "STORM":
        return option2;
      default:
        return "";
    }
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

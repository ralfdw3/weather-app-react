import './TitleAndOptions.css'
import React, { useState } from 'react';

const TitleAndOptions = ({ title, option1, option2 }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
      setSelectedOption(option);
    };
  
    const option1Class = selectedOption === option1 ? 'title-and-options-option title-and-options-option-selected' : 'title-and-options-option';
    const option2Class = selectedOption === option2 ? 'title-and-options-option title-and-options-option-selected' : 'title-and-options-option';
  
    return (
      <div className='title-and-options-container'>
        <span className='title-and-options-title'>{title}</span>
        <div className='title-and-options-options'>
          <span className={option1Class} onClick={() => handleOptionClick(option1)}>
            {option1}
          </span>
          <span className={option2Class} onClick={() => handleOptionClick(option2)}>
            {option2}
          </span>
        </div>
      </div>
    );
  };
  
  export default TitleAndOptions;
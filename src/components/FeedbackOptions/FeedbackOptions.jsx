import React from 'react';
import PropTypes from 'prop-types'; 

import st from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onBtnClick }) => (
    <div>
      {options.map(option => (
        <button className={st.Button} type="button" key={option} onClick={() => onBtnClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
  
  FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onBtnClick: PropTypes.func.isRequired,
  };



export default FeedbackOptions;


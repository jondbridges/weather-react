import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Spinner.css';

const Spinner = ({displayText}) => {
  return (
    <div>
      <FontAwesome
        name='circle-o-notch'
        size='3x'
        spin
        className="Spinner-icon"
      />
      <span className="Spinner-text">{displayText}</span>
    </div>
  );
};

Spinner.propTypes = {
  displayText: React.PropTypes.string
};

export default Spinner;

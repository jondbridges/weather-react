import React from 'react';
import FontAwesome from 'react-fontawesome';

const styles = {
  spinner: {
    padding: '0 10px'
  },
  spinnerText: {
    fontSize: '45px',
    fontWeight: 100
  }
};

const Spinner = ({displayText}) => {
  return (
    <div>
      <FontAwesome
        name='circle-o-notch'
        size='3x'
        spin
        style={styles.spinner}
      />
      <span style={styles.spinnerText}>{displayText}</span>
    </div>
  );
};

Spinner.propTypes = {
  displayText: React.PropTypes.string
};

export default Spinner;

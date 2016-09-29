import React from 'react';
import './Search.css';

const Search = ({onUpdateSearch, onSubmitSearch}) => {
  return (
    <div>
      <div className="form-group">
        <input
          className="form-control" type="text" placeholder="St Louis, MO"
          onChange={onUpdateSearch} />
      </div>
      <button
        className="btn btn-success Search-btn-pad-left" type="submit"
        onClick={onSubmitSearch}>
        Get Weather
      </button>
    </div>
  );
};

Search.propTypes = {
  onUpdateSearch: React.PropTypes.func.isRequired,
  onSubmitSearch: React.PropTypes.func.isRequired
};

export default Search;

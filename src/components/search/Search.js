import React from 'react';

const Search = () => {
  return (
    <form className="navbar-form navbar-right">
      <div className="form-group">
        <input className="form-control" type="text" placeholder="St Louis, MO" />
      </div>
      <button className="btn btn-success btn-pad-left" type="submit">Get Weather</button>
    </form>
  );
};

export default Search;

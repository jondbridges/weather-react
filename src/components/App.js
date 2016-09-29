import React from 'react';
import Header from './header/Header';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired
};

export default App;

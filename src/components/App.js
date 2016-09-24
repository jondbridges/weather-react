import React from 'react';
import Header from './header/Header';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="container home-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;

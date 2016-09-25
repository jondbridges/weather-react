import React from 'react';
import Search from './Search';

class SearchContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      cityState: ''
    };
  }

  handleUpdateSearch = (event) => {
    this.setState({
      cityState: event.target.value
    });
  };

  handleSubmitSearch = () => {
    this.context.router.push('/forecast/' + this.state.cityState);
  };

  render() {
    return (
      <Search
        onUpdateSearch={this.handleUpdateSearch}
        onSubmitSearch={this.handleSubmitSearch}
      />
    );
  }
}

SearchContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default SearchContainer;

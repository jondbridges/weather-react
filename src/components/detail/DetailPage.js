import React from 'react';
import Detail from './Detail';

class DetailPage extends React.Component {
  render() {
    return (
      <div>
        <Detail
          forecastDay={this.props.location.state.forecastDay}
          cityState={this.props.routeParams.cityState} />
      </div>
    );
  }
}

export default DetailPage;

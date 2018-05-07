import React, {Component} from 'react';
import ListFilter from './ListFilter';

class List extends Component {
  state = {
    data: this.props.data
  };

  handleFilterData = data => {
    this.setState({data})
  }

  render() {
    return (
      <ul>
        {this.props.filter && (
          <ListFilter
            filterKey={this.props.filterKey}
            data={this.props.data}
            onFilterData={this.handleFilterData}
          />
        )}
        {this.state.data.map(item => {
          return this.props.listItem(item);
        })}
      </ul>
    )
  }
}

export default List;

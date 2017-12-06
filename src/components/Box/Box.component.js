
import React, {Component} from 'react';
import Row from '../Row/Row.component';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

class Box extends Component {
    cellClickHandler = (title) => () => {
      console.log('Cell click: ', title);
    }

    render () {
      const {data} = this.props;

      return (
        <div>
          <Row data={data[0]} cellClickHandler={this.cellClickHandler} />
          <Row data={data[1]} cellClickHandler={this.cellClickHandler} />
          <Row data={data[2]} cellClickHandler={this.cellClickHandler} />
        </div>
      );
    }
}

Box.propTypes = {
  cellClickHandler: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};
Box.defaultProps = {
  cellClickHandler: noop
};

export default Box;

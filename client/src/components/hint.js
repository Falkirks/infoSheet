import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, Alert } from 'reactstrap';

class Hint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({ shown: true });
  }
  render() {
    if (this.state.shown) {
      return (
        <Alert color="warning">
          {this.props.content}
        </Alert>
      );
    } else {
      return (
        <Button className="hint-button" color="warning" onClick={this.toggle}>Show hint</Button>
      );
    }
  }
}

Hint.propTypes = {
  content: PropTypes.string.isRequired,
};


export default Hint;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  state = {
    counter: 0,
  }

  render() {
    const { label, onClick } = this.props;
    const { counter } = this.state;

    return (
      <button
        onClick={() => {
          this.setState({ counter: counter + 1 }, () => {
            onClick(this.state.counter);
          });
        }}
      >
        {label} {counter}
      </button>
    )
  }
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string,
};

export default Button;

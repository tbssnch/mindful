import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

class Button extends Component {
  render () {
    const { text, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.buttonStyle}
        onPress={() => onPress()}>
      <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};


export default Button;

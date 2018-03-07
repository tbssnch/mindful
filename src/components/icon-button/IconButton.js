import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';

class IconButton extends Component {
  render () {
    const { text, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.iconButtonStyle}
        onPress={() => onPress()}>
      <Image source={text} style={{width: 50, height: 50}} />
      </TouchableOpacity>
    );
  }
}

IconButton.propTypes = {
  text: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired
};


export default IconButton;

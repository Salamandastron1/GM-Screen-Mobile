import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  buttonStyle: {
    flex: 1,
    height: 20,
    backgroundColor: '#54b8c0',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#54b8c0',
    alignItems: 'center',
  },
};

const Button = ({ onPress, children }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
    <Text>{children}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;

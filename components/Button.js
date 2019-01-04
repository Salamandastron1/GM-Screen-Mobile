import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ onPress, children }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
    <Text style={styles.textStyle}>{children}</Text>
  </TouchableOpacity>
);

const styles = {
  buttonStyle: {
    flex: 1,
    backgroundColor: '#54b8c0',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#54b8c0',
    alignItems: 'stretch',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#f4d8b7',
    fontSize: 30,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;

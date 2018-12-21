import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

const Input = ({ text, onChange, name }) => (
  <TextInput
    value={text}
    onChangeText={onChange}
    style={styles.inputBox}
    name={name}
  />
);

const styles = {
  inputBox: {
    height: 40,
    borderColor: '#fff',
  },
};

Input.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;

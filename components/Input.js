import React from 'react';
import { TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

const Input = ({ value, onChange, name, placeholder }) => (
  <View style={styles.containerBox}>
    <TextInput
      value={value}
      onChange={onChange}
      style={styles.inputBox}
      name={name}
      placeholder={placeholder}
    />
  </View>
);

const styles = {
  inputBox: {
    height: 40,
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
  },
  containerBox: {
    flex: 1,
    backgroundColor: '#54b8c0',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#54b8c0',
    alignItems: 'stretch',
    marginLeft: 10,
    marginRight: 10,
  },
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;

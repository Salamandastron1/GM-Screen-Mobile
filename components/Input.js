import React from 'react';
import { TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

const Input = ({ text, onChange, name, length }) => (
  <View style={styles.containerBox}>
    <TextInput
      value={text}
      onChangeText={onChange}
      style={styles.inputBox}
      name={name}
      editable= {true}
      maxLength={length}
    />
  </View>
);

const styles = {
  inputBox: {
    height: 40,
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
  }
};

Input.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;

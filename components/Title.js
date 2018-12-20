import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Title = ({ children }) => (
  <View>
    <Text style={styles.textStyle}>
      {children}
    </Text>
  </View>
);

const styles = {
  textStyle: {

  },
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;

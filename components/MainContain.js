import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const MainContain = ({ children }) => (
  <View style={styles.containerStyle}>
    {children}
  </View>
);

const styles = {
  containerStyle: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#f4d8b7',
    justifyContent: 'space-around',
  },
};

MainContain.defaultProps = {
  children: {} || [],
};

MainContain.propTypes = {
  children: PropTypes.object || PropTypes.array,
};

export default MainContain;

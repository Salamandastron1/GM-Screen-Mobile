import React from 'react';
import { View } from 'react-native';
import Button from './Button';

const LandingPage = () => (
  <View style={styles.containerStyle}>
    <Button onPress={() => console.log('Ben!')}>
      Start
    </Button>
  </View>
);

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#f4d8b7',
  },
};

export default LandingPage;

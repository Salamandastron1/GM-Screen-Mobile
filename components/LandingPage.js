import React from 'react';
import { View, Image } from 'react-native';
import Button from './Button';
import Title from './Title';
import CardSection from './CardSection';

const dice = require('./../assets/dice-twenty-faces-twenty.png');

const LandingPage = () => (
  <View style={styles.containerStyle}>
    <Title>
      GM Screen
    </Title>
    <CardSection>
      <Image
        source={dice}
        style={styles.imageStyle}
      />
    </CardSection>
    <CardSection>
      <Button onPress={() => console.log('Ben!')}>
        Start
      </Button>
    </CardSection>
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
  imageStyle: {
    height: 400,
    width: null,
    flex: 1,
  },
};

export default LandingPage;

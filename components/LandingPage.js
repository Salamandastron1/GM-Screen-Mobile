import React from 'react';
import { Image } from 'react-native';
import Button from './Button';
import Title from './Title';
import CardSection from './CardSection';
import MainContain from './MainContain';

const dice = require('./../assets/dice-twenty-faces-twenty.png');

const LandingPage = (props) => (
  <MainContain>
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
      <Button onPress={() => props.navigation.navigate('CodeForm')}>
        Start
      </Button>
    </CardSection>
  </MainContain>
);

const styles = {
  imageStyle: {
    height: 400,
    width: null,
    flex: 1,
  },
};

export default LandingPage;

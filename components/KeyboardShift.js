import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Animated, Dimensions, Keyboard, TextInput, UIManager } from 'react-native';

const { State: TextInputState } = TextInput;

export default class KeyboardShift extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shift: new Animated.Value(0),
    };
    this.handleKeyboardDidShow = this.handleKeyboardDidShow.bind(this);
    this.handleKeyboardDidHide = this.handleKeyboardDidHide.bind(this);
  }

  componentDidMount() {
    this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
    this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowSub.remove();
    this.keyboardDidHideSub.remove();
  }

  handleKeyboardDidShow(e) {
    const { height: windowHeight } = Dimensions.get('window');
    const keyboardHeight = e.endCoordinates.height;
    const currentlyFocusedField = TextInputState.currentlyFocusedField();

    UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
      const fieldHeight = height;
      const fieldTop = pageY;
      const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
      const { shift } = this.state;

      if (gap >= 0) {
        return;
      }
      Animated.timing(
        shift,
        {
          toValue: gap,
          duration: 1000,
          useNativeDriver: true,
        },
      ).start();
    });
  }

  handleKeyboardDidHide() {
    const { shift } = this.state;
    Animated.timing(
      shift,
      {
        toValue: 0,
        duration: 1000,
        useNative: true,
      },
    ).start();
  }

  render() {
    const { children: renderProp } = this.props;
    const { shift } = this.state;

    return (
      <Animated.View style={[styles.container, { transform: [{ translateY: shift }] }]}>
        {renderProp}
      </Animated.View>
    );
  }
}

const styles = {
  container: {
    height: 40,
    alignItems: 'stretch',
    width: '100%',
  },
};

KeyboardShift.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

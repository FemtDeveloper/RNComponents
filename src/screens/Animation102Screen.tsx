import React, {useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

export const Animation102Screen = () => {
  const opacity = useRef(new Animated.Value(0.4)).current;
  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.purpleBox, opacity}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    height: 150,
    width: 150,
    backgroundColor: 'orange',
  },
});

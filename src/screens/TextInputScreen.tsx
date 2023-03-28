import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

const TextInputScreen = () => {
  return (
    <View style={styles.global}>
      <HeaderTitle title="TextInputs" />
      <TextInput
        style={stylesScreen.textInput}
        placeholder="Este es un input"
        keyboardType="number-pad"
      />
    </View>
  );
};

export default TextInputScreen;

const stylesScreen = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 7,
    borderColor: '#00000066',
  },
});

import React, {useState} from 'react';
import {View, Switch, StyleSheet, Platform} from 'react-native';

export const SwitchesScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: 'red', true: '#5856D6'}}
        thumbColor={Platform.OS === 'android' ? '#D9D9DB' : ''}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

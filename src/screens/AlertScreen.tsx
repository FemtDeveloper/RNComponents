import React from 'react';
import {Alert, Button, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Alerta',
      'Esta es una alerta',
      [
        {
          text: 'Ajá',
          style: 'cancel',
          onPress: () => console.log('Cancel pressed'),
        },
        {
          text: 'Nombe',
          onPress: () => console.log('Okkkkkkk'),
        },
      ],
      {cancelable: true, onDismiss: () => console.log('onDismiss')},
    );
  };
  return (
    <View style={styles.global}>
      <HeaderTitle title="Alerts" />
      <Button title="Show Alert" onPress={showAlert} />
    </View>
  );
};

export default AlertScreen;

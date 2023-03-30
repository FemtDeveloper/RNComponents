import React from 'react';
import {View, Button, Modal, Text} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useState} from 'react';

const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.global}>
      <HeaderTitle title="ModalScreen" />
      <Button title="Abrir modal" onPress={() => setIsVisible(true)} />
      <Modal visible={isVisible} animationType="fade" transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: '#00004444',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Hola</Text>
          <Button title="Cerrar modal" onPress={() => setIsVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;

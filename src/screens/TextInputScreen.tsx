import React, {useState, useContext} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useForm} from '../hooks/useForm';
import {Text} from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const TextInputScreen = () => {
  const [form] = useState({
    name: '',
    email: '',
    phone: '',
    isActive: false,
  });

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  // const onChange = (field: string, value: string) => {
  //   setForm({...form, [field]: value});
  // };

  const {onChange, stateForm} = useForm(form);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.global}>
            <HeaderTitle title="TextInputs" />
            <TextInput
              style={{
                ...stylesScreen.textInput,
                borderColor: colors.text,
                color: colors.text,
              }}
              placeholder="Ingrese su nombre"
              placeholderTextColor={colors.text}
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
            />
            <TextInput
              style={{
                ...stylesScreen.textInput,
                borderColor: colors.text,
                color: colors.text,
              }}
              placeholder="Ingrse su email"
              placeholderTextColor={colors.text}
              keyboardType="email-address"
              autoCorrect={false}
              onChangeText={value => onChange(value, 'email')}
            />
            <View style={stylesScreen.switchRow}>
              <Text>IsActive</Text>
              <CustomSwitch
                isOn={stateForm.isActive}
                onChange={value => onChange(value, 'isActive')}
              />
            </View>
            <HeaderTitle title={JSON.stringify(stateForm, null, 3)} />
            <HeaderTitle title={JSON.stringify(stateForm, null, 3)} />
            <TextInput
              style={{
                ...stylesScreen.textInput,
                borderColor: colors.text,
                color: colors.text,
              }}
              placeholder="Ingrese su teléfono"
              placeholderTextColor={colors.text}
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="number-pad"
            />

            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TextInputScreen;

const stylesScreen = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 20,
  },
  switchText: {fontSize: 25},
  textInput: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 7,
    borderColor: '#00000066',
  },
});

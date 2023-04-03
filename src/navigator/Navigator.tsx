import React, {useContext} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {
  HomeScreen,
  Animation101Screen,
  Animation102Screen,
  SwitchesScreen,
} from '../screens';
import AlertScreen from '../screens/AlertScreen';
import TextInputScreen from '../screens/TextInputScreen';
import PullToRefreshScreen from '../screens/PullToRefreshScreen';
import CustomSectionListScreen from '../screens/CustomSectionListScreen';
import ModalScreen from '../screens/ModalScreen';
import InfiniteScrollScreen from '../screens/InfiniteScrollScreen';
import SlideScreen from '../screens/SlideScreen';
import ChangeThemeScreen from '../screens/ChangeThemeScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export const Navigator = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <View style={{backgroundColor: theme.colors.background, flex: 1}}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            // cardStyle: {backgroundColor: 'white'},
          }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="Animation101Screen"
            component={Animation101Screen}
          />
          <Stack.Screen
            name="Animation102Screen"
            component={Animation102Screen}
          />
          <Stack.Screen name="SwitchesScreen" component={SwitchesScreen} />
          <Stack.Screen name="AlertScreen" component={AlertScreen} />
          <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
          <Stack.Screen name="SlideScreen" component={SlideScreen} />
          <Stack.Screen
            name="PullToRefreshScreen"
            component={PullToRefreshScreen}
          />
          <Stack.Screen
            name="CustomSectionListScreen"
            component={CustomSectionListScreen}
          />
          <Stack.Screen name="ModalScreen" component={ModalScreen} />
          <Stack.Screen
            name="InfiniteScrollScreen"
            component={InfiniteScrollScreen}
          />
          <Stack.Screen
            name="ChangeThemeScreen"
            component={ChangeThemeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

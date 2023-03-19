import React from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MenuItem} from '../interfaces/appInterfaces';
import {FlatListMenuItem} from '../components/FlatListMenuItem';

const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
];

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const renderListHeader = () => {
    return (
      <View style={{marginTop: top + 20, marginBottom: 10}}>
        <Text style={styles.title}>Opciones de menú</Text>
      </View>
    );
  };

  const itemSeparator = () => {
    return <View style={{borderWidth: 1, opacity: 0.5, marginVertical: 8}} />;
  };

  return (
    <View style={{flex: 1, ...styles.global}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};

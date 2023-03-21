import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {styles} from '../theme/appTheme';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {menuItems} from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle';

export const HomeScreen = () => {
  const itemSeparator = () => {
    return <View style={{borderWidth: 1, opacity: 0.5, marginVertical: 8}} />;
  };

  return (
    <View style={{flex: 1, ...styles.global}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de menú" />}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};

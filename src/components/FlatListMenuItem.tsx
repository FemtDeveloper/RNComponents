import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {MenuItem} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigate(menuItem.component as never)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} size={23} color={'blue'} />
        <Text style={styles.itemText}>
          {menuItem.name} - {menuItem.icon}
        </Text>
        <View style={styles.begin} />
        <Icon name={'caret-forward-outline'} size={23} color={'blue'} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-between'},
  begin: {flex: 1},
  itemText: {fontSize: 16, fontWeight: '600'},
});

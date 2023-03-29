import React from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import {styles} from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import {useState} from 'react';

const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefreshing = () => {
    console.log('Refreshing');
    setRefreshing(true);
    setTimeout(() => {
      console.log('terminado');
      setRefreshing(false);
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefreshing} />
      }>
      <View style={styles.global}>
        <HeaderTitle title="PullToRefreshScreen" />
      </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;

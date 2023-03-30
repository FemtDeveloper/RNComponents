import React from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import {styles} from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const {top} = useSafeAreaInsets();

  const onRefreshing = () => {
    console.log('Refreshing');
    setRefreshing(true);
    setTimeout(() => {
      console.log('terminado');
      setData('Hola mundo');
      setRefreshing(false);
    }, 1500);
  };

  return (
    <ScrollView
      style={{marginTop: refreshing ? top : 0}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefreshing}
          colors={['white', 'purple', 'orange', 'yellow']}
          progressViewOffset={10}
          progressBackgroundColor={'green'}
          tintColor={'blue'}
          title="Refreshing"
          titleColor={'beige'}
        />
      }>
      <View style={styles.global}>
        <HeaderTitle title="PullToRefreshScreen" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;

import React, {useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import FadeInImage from '../components/FadeInImage';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]);

  const loadMore = () => {
    const newArr: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArr[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArr]);
    }, 1200);
  };

  const renderItem = (item: number) => {
    return (
      <FadeInImage
        style={{height: 400, width: '100%', borderRadius: 4}}
        uri={`https://picsum.photos/id/${item}/1024/978`}
      />
    );
    //   <Image
    //     source={{
    //       uri: `https://picsum.photos/id/${item}/200/300`,
    //     }}
    //     style={{width: '100%', height: 400}}
    //   />
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={numbers}
        keyExtractor={(item, index) => item.toString() + index}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={() => <HeaderTitle title="InfiniteScrollScreen" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={30} color={'#123dfe'} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemText: {height: 200, backgroundColor: 'green'},
});

export default InfiniteScrollScreen;

/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {
  View,
  ImageSourcePropType,
  SafeAreaView,
  Dimensions,
  Image,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAnimation} from '../hooks/useAnimation';
// import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const {width: screenWidth} = Dimensions.get('window');

interface Props extends StackScreenProps<any, any> {}

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

const SlideScreen = ({navigation}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {opacity, fadeIn} = useAnimation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  // const {navigate} = useNavigation();

  const renderItem = (item: Slide) => {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 5,
          justifyContent: 'center',
          padding: 40,
        }}>
        <Image
          source={item.img}
          style={{resizeMode: 'center', height: 400, width: 350}}
        />
        <Text style={{...styles.itemTitle, color: colors.primary}}>
          {item.title}
        </Text>
        <Text style={{...styles.itemDesc, color: colors.primary}}>
          {item.desc}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 50}}>
      <Carousel
        vertical={false}
        data={items}
        renderItem={({item}: any) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
          if (index === items.length - 1) {
            fadeIn();
          }
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        <Pagination
          dotsLength={items.length}
          dotStyle={{height: 10, width: 10, backgroundColor: colors.primary}}
          activeDotIndex={activeIndex}
        />
        <Animated.View style={{opacity}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              backgroundColor: colors.primary,
              width: 140,
              height: 50,
              borderRadius: 10,
            }}
            activeOpacity={0.8}
            disabled={activeIndex !== items.length - 1}
            onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={{fontSize: 20, color: colors.text}}>Entrar</Text>
            <Icon name="chevron-forward-outline" size={20} color={'white'} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SlideScreen;

const styles = StyleSheet.create({
  itemTitle: {fontSize: 30, fontWeight: 'bold', color: '#5856d6'},
  itemDesc: {fontSize: 16},
});

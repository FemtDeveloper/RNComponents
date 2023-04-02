import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

interface Props {
  uri: string;
  style: StyleProp<ImageStyle>;
}

const FadeInImage = ({uri, style}: Props) => {
  const {fadeIn, opacity} = useAnimation();

  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    fadeIn();
    setIsLoading(false);
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          size={30}
          color={'red'}
          style={{position: 'absolute'}}
        />
      )}
      <Animated.Image
        source={{uri}}
        style={{...(style as Object), opacity}}
        onLoadEnd={finishLoading}
      />
    </View>
  );
};

export default FadeInImage;

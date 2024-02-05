import {View, Text, Animated, Dimensions, PanResponder} from 'react-native';
import React, {useRef} from 'react';
import styles from './styles';
import BottomSheetCard from '../BottomSheetCard/BottomSheetCard';
import CoffeButton from '../CoffeButton/CoffeButton';
import CoffeSize from '../CoffeSize/CoffeSize';
import {ICoffeInfo} from '../../models/coffeModels';

interface ICoffeDetails {
  data: ICoffeInfo;
}

const BottomSheetDetails = ({data}: ICoffeDetails) => {
  const springAnimation = (direction: 'up' | 'down') => {
    lastGestureDy.current =
      direction === 'down' ? maxDownwardTranslateY : maxUpwardTranslateY;
    Animated.spring(animatedValue, {
      toValue: lastGestureDy.current,
      useNativeDriver: true,
    }).start();
  };

  const animatedValue = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);
  const maxUpwardTranslateY =
    Dimensions.get('window').height * 0.1 - Dimensions.get('window').height * 0.4;
  const maxDownwardTranslateY = 0;
  const dragthreshold = 50;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animatedValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (e, gesture) => {
        animatedValue.setValue(gesture.dy);
      },
      onPanResponderRelease: (e, gesture) => {
        animatedValue.flattenOffset();

        if (gesture.dy > 0) {
          if (gesture.dy <= dragthreshold) {
            springAnimation('up');
          } else {
            springAnimation('down');
          }
        } else {
          if (gesture.dy >= -dragthreshold) {
            springAnimation('down');
          } else {
            springAnimation('up');
          }
        }
      },
    }),
  ).current;

  const bottomSheetAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [maxUpwardTranslateY, maxDownwardTranslateY],
          outputRange: [maxUpwardTranslateY, maxDownwardTranslateY],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  return (
    <Animated.View
      style={[styles.container, bottomSheetAnimation]}
      {...panResponder.panHandlers}>
      <View style={styles.dragHandle} />
      <BottomSheetCard width="100%" />
      <CoffeSize returnCoffeType={val => null} />
      <Text style={styles.titleAbout}>About</Text>
      <Text style={styles.description}>{data.description}</Text>
      <View style={styles.buttonContainer}>
        <CoffeButton title="Add to cart" width="100%" price={data?.price} />
      </View>
    </Animated.View>
  );
};

export default BottomSheetDetails;

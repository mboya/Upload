import React, {useEffect, useRef} from 'react';
import {View, Animated, Text, TouchableOpacity} from 'react-native';

import styles from '../assets/styles/styles.tsx';

// @ts-ignore
const Success = ({navigation}) => {
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 2,
      tension: 100,
      useNativeDriver: true,
    }).start();
  }, [scaleValue]);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[styles.congratsText, {transform: [{scale: scaleValue}]}]}>
        Congratulations!
      </Animated.Text>
      <TouchableOpacity
        style={styles.loginLink}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Success;

import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from '../assets/styles/styles';

// @ts-ignore
const StageThree = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KAMOA</Text>
      <Text style={styles.subtitle}>Accept permissions</Text>
      <Image
        source={require('../assets/accept.png')} // replace with the correct path of your image
        style={styles.imageStageThree}
      />
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Personal info</Text>
          <Text style={styles.infoText}>
            We collect personal info to prevent fraud and also protect you from
            it. ie Phone number, email, name
          </Text>
        </View>
        <View style={styles.hr} />
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Approximate location</Text>
          <Text style={styles.infoText}>
            We look at the approximate location to help us show you relevant
            information.
          </Text>
        </View>
        <View style={styles.hr} />
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>App info and performance</Text>
          <Text style={styles.infoText}>
            Our app runs on many devices and this helps us optimize for every
            type of device.
          </Text>
        </View>
        <Text style={styles.linkText}>Get more info from Google Play</Text>
      </View>
      <View style={styles.progressContainerText}>
        <Text style={styles.stepText}>Step 3/3</Text>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={styles.progressThree} />
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('NextScreen')}>
        <Text style={styles.buttonText}>ACCEPT & CONTINUE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.denyLink}
        onPress={() => navigation.navigate('PreviousScreen')}>
        <Text style={styles.denyText}>Deny Access</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StageThree;

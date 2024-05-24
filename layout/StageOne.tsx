// src/MpesastatementUpload.js
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../assets/styles/styles';

// @ts-ignore
const StageOne = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KAMOA</Text>
      <Text style={styles.subtitle}>Upload a 6 month M-Pesa Statement</Text>
      <Image
        source={require('../assets/stage_one.png')} // replace with the correct path of your image
        style={styles.image_stage_one}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>
          Unlock the power of Kamoa with your M-Pesa
        </Text>
        <Text style={styles.infoText}>
          Get access to the marketplace and help lenders see the real you by
          uploading a six month M-Pesa statement
        </Text>
        <View style={styles.hr}/>
        <Text style={styles.infoTitle}>
          Get insights on your spending habits
        </Text>
        <Text style={styles.infoText}>
          Kamoa helps you understand your spending and track your finances every
          time you upload a statement
        </Text>
        <View style={styles.hr}/>
        <Text style={styles.infoTitle}>Secure a higher loan limit</Text>
        <Text style={styles.infoText}>
          Users that share more information get access to higher loan limits
          with flexible payments and low interest rates
        </Text>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={styles.progress}/>
        </View>
        <Text style={styles.stepText}>Step 1/3</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('StageTwo')}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginLink}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};
export default StageOne;

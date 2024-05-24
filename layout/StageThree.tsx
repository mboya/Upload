import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

// @ts-ignore
const StageThree = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KAMOA</Text>
      <Text style={styles.subtitle}>Accept permissions</Text>
      <Image
        source={require('../assets/accept.png')} // replace with the correct path of your image
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Personal info</Text>
          <Text style={styles.infoText}>
            We collect personal info to prevent fraud and also protect you from
            it. ie Phone number, email, name
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Approximate location</Text>
          <Text style={styles.infoText}>
            We look at the approximate location to help us show you relevant
            information.
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>App info and performance</Text>
          <Text style={styles.infoText}>
            Our app runs on many devices and this helps us optimize for every
            type of device.
          </Text>
        </View>
        <Text style={styles.linkText}>Get more info from Google Play</Text>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>
        <Text style={styles.stepText}>Step 3/3</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF9EE',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D4A817',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 232.5,
    height: 178.65,
    marginVertical: 20,
  },
  infoContainer: {
    width: '100%',
    marginVertical: 20,
  },
  infoItem: {
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#000',
  },
  linkText: {
    fontSize: 14,
    color: '#0000EE',
    textDecorationLine: 'underline',
    marginVertical: 10,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  progressBar: {
    flex: 1,
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginRight: 10,
  },
  progress: {
    width: '100%',
    height: '100%',
    backgroundColor: '#90EE90',
    borderRadius: 5,
  },
  stepText: {
    fontSize: 14,
    color: '#000',
  },
  button: {
    backgroundColor: '#D4A817',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  denyLink: {
    marginVertical: 20,
  },
  denyText: {
    color: '#000',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default StageThree;

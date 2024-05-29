import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert, ScrollView} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import styles from '../assets/styles/styles';

// @ts-ignore
const StageTwo = ({navigation}) => {
  const [code, setCode] = useState('');

  const handleDocumentPick = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      // @ts-ignore
      Alert.alert('File Selected', res);
      // Handle the file, e.g., upload it to your server
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        // Handle other errors
        Alert.alert('Error', 'Failed to select document');
      }
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>KAMOA</Text>
        <Text style={styles.subtitle}>How to upload your M-Pesa Statement</Text>
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructionsText}>• Dial *334#</Text>
          <Text style={styles.instructionsText}>• Select 7 - My Account</Text>
          <Text style={styles.instructionsText}>• Select 3 - M-PESA Statement</Text>
          <Text style={styles.instructionsText}>• Select 1 - M-PESA Statement</Text>
          <Text style={styles.instructionsText}>• Select 1 - Request Statement</Text>
          <Text style={styles.instructionsText}>• Select 1 - Full Statement</Text>
          <Text style={styles.instructionsText}>• Select 4 - 6 Months Statement</Text>
          <Text style={styles.instructionsText}>
            • Select 1 - Enter e-mail address
          </Text>
          <Text style={styles.instructionsText}>
            • Enter your M-PESA Pin to receive your statement
          </Text>
          <View style={styles.uploadContainer}>
            <Text style={styles.uploadText}>Upload M-pesa Statement</Text>
            <Text style={styles.uploadSubText}>select the M-pesa statement from your phone</Text>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={handleDocumentPick}>
              <Text style={styles.uploadButtonText}>Select</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.inputText}>Enter the code you received</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the code you received"
            value={code}
            onChangeText={setCode}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.progressContainerText}>
          <Text style={styles.stepText}>Step 2/3</Text>
        </View>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={styles.progressTwo}/>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('StageThree')}>
          <Text style={styles.buttonText}>UPLOAD M-PESA STATEMENT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginLink}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default StageTwo;

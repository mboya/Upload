import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
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
      </View>
      <View style={styles.uploadContainer}>
        <Text style={styles.uploadText}>Upload M-pesa Statement</Text>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={handleDocumentPick}>
          <Text style={styles.uploadButtonText}>Select</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter the code you received"
        value={code}
        onChangeText={setCode}
        keyboardType="numeric"
      />
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={styles.progress}/>
        </View>
        <Text style={styles.stepText}>Step 2/3</Text>
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
  );
};

// const styles = StyleSheet.create({
//   image: {
//     width: 150,
//     height: 50,
//     marginVertical: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#D4A817',
//     marginVertical: 20,
//   },
//   subtitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#000',
//     marginBottom: 20,
//     textAlign: 'center',
//   },



//   progressContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   progressBar: {
//     flex: 1,
//     height: 10,
//     backgroundColor: '#E0E0E0',
//     borderRadius: 5,
//     marginRight: 10,
//   },
//   progress: {
//     width: '66%',
//     height: '100%',
//     backgroundColor: '#D4A817',
//     borderRadius: 5,
//   },
//   stepText: {
//     fontSize: 14,
//     color: '#000',
//   },
//   button: {
//     backgroundColor: '#D4A817',
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 5,
//     marginVertical: 20,
//   },
//   buttonText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   loginLink: {
//     marginVertical: 20,
//   },
//   loginText: {
//     color: '#000',
//     fontSize: 14,
//     textDecorationLine: 'underline',
//   },
// });

export default StageTwo;


// width: 119px;
// height: 40px;
// gap: 0px;
// opacity: 0px;

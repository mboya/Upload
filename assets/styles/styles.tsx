import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  hr: {
    height: 1,
    width: '100%',
    backgroundColor: '#d3d3d3',
  },
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
    fontSize: 32,
    fontFamily: 'BarlowCondensed-Medium',
    fontWeight: '600',
    color: '#000',
    marginBottom: 5,
    textAlign: 'center',
    lineHeight: 40,
  },
  image: {
    width: 150,
    height: 50,
    marginVertical: 20,
  },
  image_stage_one: {
    width: 203.27,
    height: 135.97,
    marginVertical: 20,
  },
  infoContainer: {
    width: '100%',
    marginVertical: 20,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#000',
    marginVertical: 5,
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
    width: '33%',
    height: '100%',
    backgroundColor: '#D4A817',
    borderRadius: 5,
  },
  stepText: {
    fontSize: 14,
    color: '#000',
  },
  button: {
    backgroundColor: '#ECB64D',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 20,
    width: '100%',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Barlow Condensed',
    alignSelf: 'center',
    lineHeight: 24,
  },
  loginLink: {
    marginVertical: 20,
  },
  loginText: {
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Barlow Condensed',
    textDecorationLine: 'underline',
  },
  instructionsContainer: {
    borderWidth: 1,
    borderColor: '#D4A817',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: '100%',
  },
  instructionsText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  uploadContainer: {
    width: '100%',
    padding: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  uploadButton: {
    backgroundColor: '#D4A817',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
    color: '#000',
  },
});

export default styles;

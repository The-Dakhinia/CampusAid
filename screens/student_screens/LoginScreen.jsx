import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const LoginScreenStudent = ({ navigation }) => {
  const [sic, setSic] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  /* const handleProceed = () => {
     // Perform any validation or API calls here if needed
     navigation.navigate('HomeScreen'); // Navigate to HomeScreen
   };*/
  const handleProceed = () => {
    // Perform any validation or API calls here if needed
    navigation.navigate('StudentOtpScreen'); // Navigate to OtpScreen
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}></View>
      <View style={styles.content}>
        <Text style={styles.label}>Enter Your SIC</Text>
        <TextInput
          style={styles.input}
          value={sic}
          onChangeText={setSic}
        />
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
        <TouchableOpacity style={styles.button} onPress={handleProceed}>
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomBar}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#DDA0DD'
  },
  topBar: {
    width: '100%',
    height: 80,
    backgroundColor: '#ADD8E6',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  bottomBar: {
    width: '100%',
    height: 50,
    backgroundColor: '#ADD8E6',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: 'skyblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginScreenStudent;

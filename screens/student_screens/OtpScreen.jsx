import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const StudentOtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(30);
  let timerInterval;

  useEffect(() => {
    // Start the 30-second timer
    timerInterval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(timerInterval);
          // Navigate back to login or show an expired message
          navigation.navigate('LoginScreenStudent');
        }
        return prevTimer - 1;
      });
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically move to the next input if a digit is entered
    if (value.length === 1 && index < 3) {
      const nextInput = `otpInput${index + 1}`;
      this[nextInput].focus();
    }
  };

  const handleProceed = () => {
    clearInterval(timerInterval); // Stop the timer when proceeding
    const enteredOtp = otp.join('');
    // Validate OTP here
    navigation.navigate('HomeScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.otpText}>Enter OTP:</Text>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpBox}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(value) => handleOtpChange(value, index)}
              ref={(input) => { this[`otpInput${index}`] = input; }}
            />
          ))}
        </View>
        <Text style={styles.timerText}>Expires in: {timer}s</Text>
        <TouchableOpacity style={styles.button} onPress={handleProceed}>
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDA0DD',
  },
  content: {
    alignItems: 'center',
  },
  otpText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  otpBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    fontSize: 24,
    marginHorizontal: 10,
  },
  timerText: {
    fontSize: 18,
    marginTop: 10,
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

export default StudentOtpScreen;

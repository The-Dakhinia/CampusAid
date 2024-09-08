import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const options = [
  'CR',
  'Mentor',
  'Administrative',
  'Dean',
  'Campus Coordinator'
];

const SubmissionScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 2000); // Redirect to HomeScreen after 2 seconds
  };

  if (submitted) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.thankYouMessage}>
          <Text style={styles.thankYouText}>Thank you! We will reach out soon.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.optionsList}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.optionItem, selectedOption === option && styles.selectedOption]}
              onPress={() => setSelectedOption(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
          disabled={!selectedOption}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
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
    backgroundColor: '#ADD8E6',
  },
  content: {
    width: '80%',
    alignItems: 'center',
  },
  optionsList: {
    width: '100%',
    marginBottom: 20,
  },
  optionItem: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#800080',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  submitButton: {
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#800080',
    padding: 15,
    borderRadius: 10,
  },
  submitButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  thankYouMessage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  thankYouText: {
    fontSize: 18,
    color: '#800080',
    textAlign: 'center',
  },
});

export default SubmissionScreen;

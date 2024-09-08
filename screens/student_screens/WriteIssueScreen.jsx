import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const WriteIssueScreen = ({ navigation }) => {
  const [issueText, setIssueText] = useState('');

  const handleCancel = () => {
    setIssueText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>We are with you, don't hesitate to write!</Text>
        <View style={styles.issueInputContainer}>
          <TextInput
            style={styles.issueInput}
            placeholder="Write your Issue"
            value={issueText}
            onChangeText={setIssueText}
          />
          <View style={styles.issueActions}>
            <TouchableOpacity style={styles.actionButton} onPress={handleCancel}>
              <Text style={styles.actionText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate('SubmissionScreen')}
        >
          <Text style={styles.submitButtonText}>Submit To</Text>
          <Icon name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('HomeScreen')}>
          <Icon name="home" size={30} color="#000" />
          <Text style={styles.footerButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('RaiseIssueScreen')}>
          <Icon name="add-circle-outline" size={30} color="#000" />
          <Text style={styles.footerButtonText}>Raise Issue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => { /* Navigate to History Screen */ }}>
          <Icon name="history" size={30} color="#000" />
          <Text style={styles.footerButtonText}>History</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#ADD8E6',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    color: '#800080',
    marginBottom: 20,
    textAlign: 'center',
  },
  issueInputContainer: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
  },
  issueInput: {
    height: 100,
    textAlignVertical: 'top',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    color: '#000',
  },
  issueActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionButton: {
   
    padding: 10,
    borderRadius: 10,
  },
  actionText: {
    fontSize: 16,
    color: 'black',
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#800080',
    padding: 15,
    borderRadius: 10,
  },
  submitButtonText: {
    fontSize: 16,
    color: '#fff',
    marginRight: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#DDA0DD',
    paddingVertical: 10,
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    fontSize: 16,
    color: '#000',
  },
});

export default WriteIssueScreen;

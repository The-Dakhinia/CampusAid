import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const issues = [
  'Academics',
  'Campus Related',
  'Food Related',
  'Hostel Related',
  'Sports Related',
  'Fest Related',
  'Club Related',
  'Classroom Related',
  'Destructive Action'
];

const RaiseIssueScreen = ({ navigation }) => {
  const [selectedIssue, setSelectedIssue] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Type of Issues</Text>
        <View style={styles.issuesList}>
          {issues.map((issue, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.issueItem,
                selectedIssue === index && styles.selectedIssueItem
              ]}
              onPress={() => setSelectedIssue(index)}
            >
              <Text
                style={[
                  styles.issueText,
                  selectedIssue === index && styles.selectedIssueText
                ]}
              >
                {issue}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => {
            if (selectedIssue !== null) {
              navigation.navigate('WriteIssueScreen', { issue: issues[selectedIssue] });
            }
          }}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('HomeScreen')}>
          <Icon name="home" size={30} color="#000" />
          <Text style={styles.footerButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('RaiseIssueScreen')}>
          <Icon name="add-circle-outline" size={30} color="#000" />
          <Text style={styles.footerButtonText}>Raise Issue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('HistoryScreen')}>
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
    paddingHorizontal: 25,
    paddingVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#800080',
    marginBottom: 20,
    textAlign: 'center',
  },
  issuesList: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
  },
  issueItem: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    marginVertical: 4,
  },
  selectedIssueItem: {
    backgroundColor: '#800080',
  },
  issueText: {
    fontSize: 12,
  },
  selectedIssueText: {
    color: '#fff',
  },
  nextButton: {
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#800080',
    padding: 15,
    borderRadius: 10,
  },
  nextButtonText: {
    fontSize: 16,
    color: '#fff',
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

export default RaiseIssueScreen;

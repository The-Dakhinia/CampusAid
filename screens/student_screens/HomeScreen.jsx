import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
  const [issues, setIssues] = useState(['Issue 1', 'Issue 2']);
  const scrollViewRef = useRef(null);

  const addNewIssue = () => {
    setIssues(prevIssues => {
      const updatedIssues = [...prevIssues, `Issue ${prevIssues.length + 1}`];
      return updatedIssues;
    });

    // Give time for the new issue to be rendered before scrolling
    setTimeout(() => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollToEnd({ animated: true });
      }
    }, 100);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Icon name="person" size={30} color="#000" style={styles.profileIcon} />
          <Text style={styles.greeting}>Hello Sai!</Text>
        </View>
        <TouchableOpacity style={styles.notificationIcon}>
          <Text style={styles.notificationText}>🔔</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.issuesTitle}>ISSUES</Text>
        <View style={styles.issuesList}>
          <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollContent}>
            {issues.map((issue, index) => (
              <TouchableOpacity key={index} style={styles.issueItem}>
                <Text style={styles.issueText}>{issue}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.addIssueButton} onPress={addNewIssue}>
              <Text style={styles.addIssueText}>+</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
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
    backgroundColor: '#ADD8E6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    marginRight: 10,
  },
  greeting: {
    fontSize: 22,
    color: '#000',
  },
  notificationIcon: {
    fontSize: 24,
  },
  notificationText: {
    fontSize: 24,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 10, // Added padding to prevent overlap with footer
  },
  issuesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#800080',
    marginBottom: 20,
  },
  issuesList: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
  },
  scrollContent: {
    paddingBottom: 10, // Ensure there's space at the bottom
  },
  issueItem: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  issueText: {
    fontSize: 16,
  },
  addIssueButton: {
    alignItems: 'center',
    marginVertical: 10,
  },
  addIssueText: {
    fontSize: 30,
    color: '#800080',
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

export default HomeScreen;

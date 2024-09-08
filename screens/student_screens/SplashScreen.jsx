import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const SplashScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>WELCOME TO</Text>
        <Text style={styles.subtitle}>CampusAid</Text>
        <Text style={styles.description}>From issues to answers, CampusAid is here for you</Text>
        <Image
          source={{ uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0AvPQwtTVW_X2HOKlkWwKCE5UoZCe-1me1IWAE5GKegKydOFw' }}
          style={styles.image}
        />
      </View>
      <TouchableOpacity style={styles.arrowContainer} onPress={() => navigation.navigate('LoginScreenStudent')}>
        <Text style={styles.arrow}>➔</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4a90e2',
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#800080',
    textAlign: 'center',
    marginBottom: 40,
  },
  image: {
    width: 250,
    height: 250,
  },
  arrowContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  arrow: {
    fontSize: 24,
    color: '#000',
  },
});

export default SplashScreen;

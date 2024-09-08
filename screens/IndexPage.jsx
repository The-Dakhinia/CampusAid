import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';  // Added FontAwesome import

const IndexPage = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
            </View>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('LoginScreen');
                    }}
                >
                    <Text style={styles.buttonIcon}>👤</Text>
                    <Text style={styles.buttonText}>Admin Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('SplashScreen');
                    }}
                >
                    <Text style={styles.buttonIcon}>👤</Text>
                    <Text style={styles.buttonText}>Student Login</Text>
                </TouchableOpacity>
            </View>

            {/* Footer - updated to match IssuePending page */}
            <View style={styles.footer}>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 100,
        backgroundColor: 'green',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        paddingHorizontal: 20,
        elevation: 10,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    profileIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    profileIconText: {
        fontSize: 24,
        color: 'green',
    },
    greetingText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    designationText: {
        fontSize: 14,
        color: '#fff',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        width: '80%',
        height: 60,
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        paddingHorizontal: 40,
    },
    buttonIcon: {
        fontSize: 24,
        color: '#fff',
        marginRight: 10,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'green',
        height: 60,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    footerButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 14,
        color: '#fff',
        marginTop: 5,
    },
});

export default IndexPage;

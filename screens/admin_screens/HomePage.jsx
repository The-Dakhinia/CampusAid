import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';  // Added FontAwesome import

const HomePage = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.profileSection}>
                    {/* Placeholder for profile icon */}
                    <View style={styles.profileIcon}>
                        <Text style={styles.profileIconText}>👤</Text>
                    </View>
                    <View>
                        <Text style={styles.greetingText}>HI ! SWASTIK</Text>
                        <Text style={styles.designationText}>Designation</Text>
                    </View>
                </View>
            </View>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        console.log("Issue Resolved button pressed");
                        navigation.navigate('IssueResolved');
                    }}
                >
                    <Text style={styles.buttonIcon}>✔️</Text>
                    <Text style={styles.buttonText}>Issue Resolved</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        console.log("Issue Resolved button pressed");
                        navigation.navigate('IssuePending');
                    }}
                >
                    <Text style={styles.buttonIcon}>➕</Text>
                    <Text style={styles.buttonText}>Issue Pending</Text>
                </TouchableOpacity>
            </View>

            {/* Footer - updated to match IssuePending page */}
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.footerButton}
                    onPress={() => {
                        console.log("Home button pressed");
                        navigation.navigate('HomePage');
                    }}
                >
                    <FontAwesome name="home" size={24} color="white" />
                    <Text style={styles.footerText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.footerButton}
                    onPress={() => {
                        console.log("History button pressed");
                        navigation.navigate('HistoryPage');
                    }}
                >
                    <FontAwesome name="history" size={24} color="white" />
                    <Text style={styles.footerText}>History</Text>
                </TouchableOpacity>
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

export default HomePage;

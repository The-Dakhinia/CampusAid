import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OtpScreen = () => {
    const navigation = useNavigation();

    const handleVerifyPress = () => {
        // Navigate to the HomePage when the Verify button is pressed
        navigation.navigate('HomePage');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header} />

            <View style={styles.otpContainer}>
                <Text style={styles.label}>OTP</Text>
                <TextInput
                    style={styles.input}
                    placeholder="XXXXXX"
                    keyboardType="numeric"
                />

                <TouchableOpacity style={styles.button} onPress={handleVerifyPress}>
                    <Text style={styles.buttonText}>Verify</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    header: {
        height: 100,
        backgroundColor: 'green',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        elevation: 10,
    },
    otpContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#d3d3d3',
        marginHorizontal: 20,
        borderRadius: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 20,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    button: {
        width: 150,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footer: {
        height: 50,
        backgroundColor: 'green',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
});

export default OtpScreen;

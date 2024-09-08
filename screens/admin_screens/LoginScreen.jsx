import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header} />

            <View style={styles.form}>
                <Text style={styles.label}>SIC</Text>
                <TextInput style={styles.input} placeholder="Enter SIC" />

                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="XXXXXXXXXX"
                    keyboardType="phone-pad"
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('OtpScreen')}
                >
                    <Text style={styles.buttonText}>Proceed</Text>
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

    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
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

export default LoginScreen;

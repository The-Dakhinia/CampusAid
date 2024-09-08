import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const issues = [
    { id: '1', title: 'Issue 1' },
    { id: '2', title: 'Issue 2' },
    { id: '3', title: 'Issue 3' },
    { id: '4', title: 'Issue 4' },
    { id: '5', title: 'Issue 5' },
    { id: '6', title: 'Issue 6' },
];

const IssueForfeit = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item}>
            <FontAwesome name="frown-o" size={24} color="white" />
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <FontAwesome name="exclamation-circle" size={24} color="white" style={styles.profileIcon} />
                    <Text style={styles.headerTitle}>Issue Forfeit</Text>
                </View>
            </View>
            <FlatList
                data={issues}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('HomePage')} style={styles.footerButton}>
                    <FontAwesome name="home" size={24} color="white" />
                    <Text style={styles.footerText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('HistoryPage')} style={styles.footerButton}>
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
        backgroundColor: 'white',
    },
    header: {
        height: 100,
        backgroundColor: 'red',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 20,
        elevation: 10,
        justifyContent: 'center', // Center the content horizontally within the header
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Center the icon and text together
    },
    profileIcon: {
        marginRight: 10,
    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    list: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF3B30',
        padding: 15,
        marginVertical: 5,
        borderRadius: 5,
    },
    title: {
        color: 'white',
        fontSize: 16,
        marginLeft: 10,
    },
    footer: {
        height: 60,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
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

export default IssueForfeit;

import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const historyData = [
    { id: '1', title: 'Issue 1 - Resolved' },
    { id: '2', title: 'Issue 2 - Forfeited' },
    { id: '3', title: 'Issue 3 - Downgraded' },
    { id: '4', title: 'Issue 4 - Upgraded' },
    { id: '5', title: 'Issue 5 - Resolved' },
    { id: '6', title: 'Issue 6 - Forfeited' },
];

const History = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <FontAwesome name="check-circle" size={24} color="white" />
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome name="arrow-left" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Issue History</Text>
            </View>
            <FlatList
                data={historyData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                    <FontAwesome name="home" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('IssueForfeit')}>
                    <FontAwesome name="history" size={24} color="white" />
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
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    headerTitle: {
        flex: 1,
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    list: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
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
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        backgroundColor: '#4CAF50',
    },
});

export default History;

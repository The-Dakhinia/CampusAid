import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // You can use any icon library

const IssueResolved = () => {
    const issues = [
        { id: '1', name: 'Issue 1' },
        { id: '2', name: 'Issue 2' },
        { id: '3', name: 'Issue 3' },
        { id: '4', name: 'Issue 4' },
        { id: '5', name: 'Issue 5' },
        { id: '6', name: 'Issue 6' },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.issueContainer}>
            <View style={styles.iconContainer}>
                <FontAwesome name="smile-o" size={24} color="white" />
            </View>
            <Text style={styles.issueText}>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Issue Resolved</Text>
            </View>

            <FlatList
                data={issues}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
            />

            <View style={styles.footer} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        height: 100,
        backgroundColor: 'green',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        elevation: 10,
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    listContainer: {
        padding: 20,
    },
    issueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#7d3cff', // Purple dotted border color
        borderStyle: 'dashed',
        borderRadius: 10,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    issueText: {
        fontSize: 18,
    },
    footer: {
        height: 50,
        backgroundColor: 'green',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 'auto',
    },
});

export default IssueResolved;

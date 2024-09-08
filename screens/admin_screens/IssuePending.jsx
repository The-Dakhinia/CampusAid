import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const IssuePending = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedIssue, setSelectedIssue] = useState(null);
    const navigation = useNavigation();

    const issues = [
        { id: '1', name: 'Issue 1' },
        { id: '2', name: 'Issue 2' },
        { id: '3', name: 'Issue 3' },
        { id: '4', name: 'Issue 4' },
        { id: '5', name: 'Issue 5' },
        { id: '6', name: 'Issue 6' },
    ];

    const handleIssuePress = (issue) => {
        setSelectedIssue(issue);
        setModalVisible(true);
    };

    const handleActionPress = (action) => {
        if (action === 'Forfeit') {
            setModalVisible(false);
            navigation.navigate('IssueForfeit', { issue: selectedIssue });
        } else {
            Alert.alert(`${action} clicked`, `You clicked ${action} for ${selectedIssue.name}`);
            setModalVisible(false);
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.issueContainer} onPress={() => handleIssuePress(item)}>
            <View style={styles.iconContainer}>
                <FontAwesome name="circle" size={24} color="green" />
            </View>
            <Text style={styles.issueText}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Issue Pending</Text>
            </View>

            {/* List of Pending Issues */}
            <FlatList
                data={issues}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
            />

            {/* Footer */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton}
                    onPress={() => {
                        console.log("Home button pressed");
                        navigation.navigate('HomePage');
                    }}
                >
                    <FontAwesome name="home" size={24} color="white" />
                    <Text style={styles.footerText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton}
                    onPress={() => {
                        console.log("Home button pressed");
                        navigation.navigate('HistoryPage');
                    }}
                >
                    <FontAwesome name="history" size={24} color="white" />
                    <Text style={styles.footerText}>History</Text>
                </TouchableOpacity>
            </View>

            {/* Modal for Issue Actions */}
            {selectedIssue && (
                <Modal
                    transparent={true}
                    visible={modalVisible}
                    animationType="slide"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Actions for {selectedIssue.name}</Text>
                            <TouchableOpacity style={styles.modalButton} onPress={() => handleActionPress('Forfeit')}>
                                <Text style={styles.modalButtonText}>Forfeit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton} onPress={() => handleActionPress('Upgrade')}>
                                <Text style={styles.modalButtonText}>Upgrade</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton} onPress={() => handleActionPress('Downgrade')}>
                                <Text style={styles.modalButtonText}>Downgrade</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalCloseButton} onPress={() => setModalVisible(false)}>
                                <Text style={styles.modalCloseButtonText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
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
        alignItems: 'center',
        paddingHorizontal: 20,
        elevation: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
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
        borderColor: 'green',
        borderRadius: 10,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    issueText: {
        fontSize: 18,
        color: 'black',
    },
    footer: {
        height: 60,
        backgroundColor: 'green',
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modalButton: {
        width: '100%',
        padding: 15,
        backgroundColor: 'green',
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 5,
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
    },
    modalCloseButton: {
        marginTop: 15,
        padding: 10,
        alignItems: 'center',
    },
    modalCloseButtonText: {
        color: 'red',
        fontSize: 16,
    },
});

export default IssuePending;

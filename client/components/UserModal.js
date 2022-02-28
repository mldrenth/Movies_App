import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import UserForm from '../components/UserForm';


const UserModal = ({user, setUpdatedUser, handleLogout}) => {

    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => {
        setModalVisible(false)
    }

    return (
        <View style={styles.container}>
          
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
                >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={{ color:"#f5c517", paddingBottom:10, fontWeight:"bold", fontSize:16 }}>Edit User details</Text>
                
                    <UserForm user={user} setUpdatedUser={setUpdatedUser} closeModal={closeModal}/>
                
                  </View>
                </View>
            </Modal>

            <FontAwesome name="edit" size={30} color="#f5c517" onPress={() => setModalVisible(true)} />

            <FontAwesome name="power-off" size={30} color="#f5c517" onPress={() => handleLogout()}/>


        </View>
    );
  };

  
  const styles = StyleSheet.create({
    container: {
      marginLeft: 30
    },
    centeredView: {
      backgroundColor: 'rgba(21, 29, 48, 0.8)',
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "#060d17",
      borderRadius: 7,
      borderWidth: 1,
      borderColor: "#f5c517",
      padding: 35,
      alignItems: "center",
      elevation: 5
    }
  });

export default UserModal;
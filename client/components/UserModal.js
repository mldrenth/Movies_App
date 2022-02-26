import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import UserForm from '../components/UserForm';


const UserModal = ({user, setUpdatedUser}) => {

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
                    <Text style={{ color:"#f5c517", paddingBottom:10, fontWeight:"bold", fontSize:15 }}>Edit User details</Text>
                
                    <UserForm user={user} setUpdatedUser={setUpdatedUser} closeModal={closeModal}/>
                
                  </View>
                </View>
            </Modal>

            <FontAwesome name="edit" size={30} color="#f5c517" onPress={() => setModalVisible(true)} />

        </View>
    );
  };

  
  const styles = StyleSheet.create({
    container: {
      marginLeft: 30
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "#151d30",
      borderRadius: 7,
      padding: 35,
      alignItems: "center",
      elevation: 5
    }
  });

export default UserModal;
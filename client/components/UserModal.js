import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import UserForm from '../components/UserForm';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import styles from "./UserModalStyle";


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
                    <Text style={{ color:"#f5c517", paddingBottom:10, fontWeight:"bold", fontSize:20 }}>Edit User details</Text>
                
                    <UserForm user={user} setUpdatedUser={setUpdatedUser} closeModal={closeModal}/>
                
                  </View>
                </View>
            </Modal>

            
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <MaterialCommunityIcons name="account-edit-outline" size={32} color="#f5c517" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handleLogout()}>
              <View style={{alignItems:"center"}}>
                <AntDesign name="logout" size={30} color="#f5c517" />
                <Text style={{color:"#f5c517", paddingTop:5}} >LOGOUT</Text>
              </View>
            </TouchableOpacity>
            

        </View>
    );
  };

  

export default UserModal;
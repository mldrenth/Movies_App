import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import UserForm from '../components/UserForm';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


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
    },
    button: {
      marginTop: 200,
      marginRight: 30,
      flexDirection: 'row',
      justifyContent: 'center',
    }
  });

export default UserModal;
import {React, useState, useEffect} from 'react';
import { getUserData, updateUser } from '../services/UserServices';
import {View, Text, FlatList, StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 


const UserDetail = ({user}) => {


    const handleUpdateUser = () => {
        const user = {id : 1, email: "email@gmail.com", password: "888"}
        updateUser(user).then(() => {return 1})
    }

    return (

        <View style={styles.container}>
            <Text style={{ color:"#f5c517", paddingBottom:10, fontWeight:"bold", fontSize:15 }}>User information</Text>
            <Text style={styles.text}>Username: {user.username}</Text>
            <Text style={styles.text}>First Name: {user.firstName}</Text>
            <Text style={styles.text}>Last Name: {user.lastName}</Text>
            <Text style={styles.text}>Phone No: {user.phoneNumber}</Text>
            <Text style={styles.text}>Email: {user.email}</Text>
            <Text style={styles.text}>Password: {user.password}</Text>

            <View style={{paddingTop:10 }}>
                <FontAwesome onPress={() => handleUpdateUser()} name="edit" size={24} color="#f5c517"/>
            </View>
        </View>

    )
    
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center',
        fontWeight:"bold"
    },
    text: {
        color:"white",
        fontSize: 15
    }
  });

export default UserDetail;
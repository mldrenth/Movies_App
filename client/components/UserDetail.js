import {React, useState, useEffect} from 'react';
import { getUserData, updateUser } from '../services/UserServices';
import {View, Text, FlatList, StyleSheet} from 'react-native'


const UserDetail = ({user}) => {

    const hidePassword = () => {
        let hiddenString = ""
        for (let char in user.password) {
            hiddenString += "●"
        }
        return hiddenString
    }

    return (
        <View style={styles.container}>
            <Text style={{ color:"#f5c517", paddingBottom:10, fontWeight:"bold", fontSize:16 }}>User information</Text>
            <Text style={styles.text}>Username: {user.username}</Text>
            <Text style={styles.text}>First Name: {user.firstName}</Text>
            <Text style={styles.text}>Last Name: {user.lastName}</Text>
            <Text style={styles.text}>Phone No: {user.phoneNumber}</Text>
            <Text style={styles.text}>Email: {user.email}</Text>
            <Text style={{color:"#b5b7b9", fontSize:10}}><Text style={styles.text}>Password:</Text> {hidePassword()}</Text>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingLeft: 30,
        paddingBottom: 10,
        justifyContent: 'center',
        fontWeight:"bold"
    },
    text: {
        color: "#b5b7b9",
        fontSize: 16,
        lineHeight: 28
    }
  });

export default UserDetail;
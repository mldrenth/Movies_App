import {React, useState, useEffect} from 'react';
import { getUserData, updateUser } from '../services/UserServices';
import {View, Text, FlatList} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import { Button } from 'react-native-web';



const UserScreen = () => {

    const [user, setUser] = useState("");

    useEffect(() => {
        getUserData()
        .then((userData) => {
            setUser(userData)
        })
    }, [])

    // const updateUser = () => {
    //     const user = {id : 1, email: "email@gmail.com", password: "999"}
    //     updateUser(user).then(() => {return 1})
    // }


    return (
        <View style={{padding:10}}>
            <Text style={{ color:"#f5c517", paddingBottom:10, fontWeight:"bold" }}>User information</Text>

            <Text style={{ color:"white" }}>{user.username}</Text>
            <Text style={{ color:"white" }}>{user.email}</Text>

            {/* <FontAwesome onPress={() => updateUser()} name="edit" size={24} color="#f5c517"/> */}

        </View>
    )
    
}

export default UserScreen;
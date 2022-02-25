import {React, useState, useEffect} from 'react';
import { getUserData, updateUser } from '../services/UserServices';
import {View, Text, FlatList, StyleSheet} from 'react-native'
import UserDetail from '../components/UserDetail';
import UserForm from '../components/UserForm';
import UserModal from '../components/UserModal';
import { FontAwesome } from '@expo/vector-icons'; 


const UserScreen = () => {

    const [user, setUser] = useState("");
    const [editUser, setEditUser] = useState(false);

    useEffect(() => {
        getUserData()
        .then((userData) => {
            setUser(userData)
        })
    }, [])

    const setUpdatedUser = (user) => {
        setUser(user)
    }

    return (
        <View>
            <UserDetail user={user}/>
            <UserModal user={user} setUpdatedUser={setUpdatedUser}/>
        </View>
    )   
}

export default UserScreen;
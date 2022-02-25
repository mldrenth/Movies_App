import {React, useState, useEffect} from 'react';
import { getUserData, updateUser } from '../services/UserServices';
import {View, Text, FlatList, StyleSheet} from 'react-native'
import UserDetail from '../components/UserDetail';
import UserForm from '../components/UserForm';


const UserScreen = () => {

    const [user, setUser] = useState("");

    useEffect(() => {
        getUserData()
        .then((userData) => {
            setUser(userData)
        })
    }, [])

    return (

        <View>
            {/* <UserForm/> */}
            <UserDetail user={user}/>
        </View>
       
    )
    
}

export default UserScreen;
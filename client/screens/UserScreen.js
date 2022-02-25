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


    const handleUpdateUser = () => {
        const user = {id : 1, email: "email@gmail.com", password: "8688"}
        updateUser(user).then(() => {return 1})
    }

    const handleEditUser = () => {
        setEditUser(!editUser)
    }

    return (

        <View>
            { editUser ? <UserForm user={user}/> :null }

            <UserDetail user={user}/>

            <View style={{paddingLeft:20 }}>
                <FontAwesome onPress={() => handleUpdateUser()} name="edit" size={24} color="#f5c517"/>
                

                <FontAwesome onPress={() => handleEditUser()} name="edit" size={24} color="#f5c517"/>
            </View>

            <UserModal user={user}/>

        </View>
       
    )
    
}

export default UserScreen;
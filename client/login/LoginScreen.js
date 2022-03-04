import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { loginUser } from '../services/UserServices';
import styles from './LoginScreenStyle';


const LoginScreen = ({ handleLogin }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [incorrectPassword, setIncorrectPassword] = useState(null);


    const onSubmit = () => loginUser(email, password).then(data => {
        if (data) {
            handleLogin()
        } else {
            setIncorrectPassword(true)
        }
    })

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/mt_logo.png")} />
            <Text style={{ color: "#f5c517", fontWeight: "bold", fontSize: 20, marginBottom: 30 }}>Movie Time</Text>
            <StatusBar style="auto" />

            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    placeholderTextColor="grey"
                    onChangeText={(email) => setEmail(email.toLowerCase())}
                />
            </View>

            <View>
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    placeholderTextColor="grey"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            {incorrectPassword ? <Text style={{ color: "#b5b7b9", marginBottom: 15 }}>Incorrect Email or Password</Text> : null}

            <TouchableOpacity style={styles.loginBtn} onPress={onSubmit}>
                <AntDesign name="login" size={30} color="#f5c517" />
                <Text style={{ color: "#f5c517", paddingTop: 5 }} >LOGIN</Text>
            </TouchableOpacity>

        </View>
    );
}



export default LoginScreen;
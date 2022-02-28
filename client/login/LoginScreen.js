import React, { useState }from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { loginUser } from '../services/UserServices';

 
const LoginScreen = ({handleLogin}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [incorrectPassword, setIncorrectPassword] = useState(null);


    const onSubmit = () => loginUser(email, password).then(data => {
        if(data){
            handleLogin()
            // console.log("I am data", data); /// send a user back to app.js
        } else {
            setIncorrectPassword(true)
        }
        // Received data / user pass -setUser- to UserScreen.js
    })

    return (
        <View style={styles.container}>
            <Image style={styles.image} source = {require("../assets/mt_logo.png")}/>
            <Text style={{color:"#f5c517", fontWeight:"bold", fontSize:20, marginBottom: 30}}>Movie Time</Text>
            <StatusBar style="auto" />
        
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    placeholderTextColor="grey"
                    onChangeText={(email) => setEmail(email)}
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
            {incorrectPassword ? <Text style={{color:"#b5b7b9", marginBottom:15}}>Incorrect Email or Password</Text> : null}

            <TouchableOpacity style={styles.loginBtn} onPress={onSubmit}>
                <AntDesign name="login" size={30} color="#f5c517" />
                <Text style={{color:"#f5c517", paddingTop:5}} >LOGIN</Text>
            </TouchableOpacity>

        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        height: 67,
        width: 90,
        marginBottom: 5
    },
    textInput: {
        backgroundColor: "#151d30",
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "#f5c517",
        width: 230,
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        textAlign: "center",
        height: 40,
        fontSize: 16,
        color: "white"
    },
    loginBtn: {
        margin: 10,
        alignItems:"center",
    }
});

export default LoginScreen;
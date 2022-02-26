import React, { useState }from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
 
const LoginScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
    
        <View style={styles.container}>
            <Image style={styles.image} source = {require("../assets/mt_logo.png")}/>
            <Text style={{color:"#f5c517", fontWeight:"bold", fontSize:20, marginBottom: 30}}>Movie Time</Text>

            <Text style={{color:"white", fontWeight:"bold", marginBottom: 10}}>Sign in</Text>
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
      height: 60,
      width: 80,
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
  }
});

export default LoginScreen;
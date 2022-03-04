import {React} from 'react';
import {View, Text} from 'react-native'
import styles from './UserDetailStyle';


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
            <Text style={{ color:"#f5c517", paddingBottom:10, fontWeight:"bold", fontSize:20 }}>User information</Text>
            <Text style={styles.text}>Username: {user.username}</Text>
            <Text style={styles.text}>First Name: {user.firstName}</Text>
            <Text style={styles.text}>Last Name: {user.lastName}</Text>
            <Text style={styles.text}>Phone No: {user.phoneNumber}</Text>
            <Text style={styles.text}>Email: {user.email}</Text>
            <Text style={{color:"#b5b7b9", fontSize:10}}><Text style={styles.text}>Password:</Text> {hidePassword()}</Text>
        </View>
    ) 
}



export default UserDetail;
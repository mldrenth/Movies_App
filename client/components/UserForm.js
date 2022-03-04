import * as React from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { updateUser } from '../services/UserServices';
import { AntDesign } from '@expo/vector-icons'; 


const UserForm = ({user, setUpdatedUser, closeModal}) => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            email: user.email,
            password: user.password
        }
    });
    const onSubmit = data => updateUser(data).then(data => {setUpdatedUser(data); closeModal()});

    return (
        <View>
            <Controller
                control={control}
                rules={{
                required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Username"
                    placeholderTextColor="grey"
                />
                )}
                name="username"
            />
            {errors.userName && <Text style={{ color:"#f5c517" }}>This is required.</Text>}

            <Controller
                control={control}
                rules={{
                required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="First Name"
                    placeholderTextColor="grey"
                />
                )}
                name="firstName"
            />
            {errors.firstName && <Text style={{ color:"#f5c517" }}>This is required.</Text>}

            <Controller
                control={control}
                rules={{
                maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Last Name"
                    placeholderTextColor="grey"
                />
                )}
                name="lastName"
            />
            {errors.lastName && <Text style={{ color:"#f5c517" }}>This is required.</Text>}

            <Controller
                control={control}
                rules={{
                maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Phone Number"
                    placeholderTextColor="grey"
                />
                )}
                name="phoneNumber"
            />
            {errors.phoneNumber && <Text style={{ color:"#f5c517" }}>This is required.</Text>}

            <Controller
                control={control}
                rules={{
                maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Email Address"
                    placeholderTextColor="grey"
                />
                )}
                name="email"
            />
            {errors.email && <Text style={{ color:"#f5c517" }}>This is required.</Text>}

            <Controller
                control={control}
                rules={{
                maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor="grey"
                />
                )}
                name="password"
            />
            {errors.password && <Text style={{ color:"#f5c517" }}>This is required.</Text>}

            <View style={styles.button_container}>
                <AntDesign style={{paddingRight:10}} name="checkcircleo" size={30} color="#f5c517" onPress={handleSubmit(onSubmit)}/>
                <AntDesign style={{paddingLeft:10}} name="closecircleo" size={30} color="#5799ef" onPress={() => closeModal()}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   paddingTop: Constants.statusBarHeight,
    //   padding: 8,
    //   backgroundColor: '#0e101c',
    // },
    input: {
        backgroundColor: '#151d30',
        color: 'white',
        height: 32,
        width: 210,
        padding: 10,
        marginVertical: 3,
        borderRadius: 7,
        borderWidth: 0.3,
        borderColor: "#f5c517"
    },
    button_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10    }
  });

export default UserForm;
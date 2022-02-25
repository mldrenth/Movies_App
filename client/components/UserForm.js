import * as React from 'react';
import {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import { updateUser } from '../services/UserServices';
import { Feather } from '@expo/vector-icons'; 


const UserForm = ({user, setUpdatedUser, closeModalOnSubmit}) => {

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
    const onSubmit = data => updateUser(data).then(data => {setUpdatedUser(data); closeModalOnSubmit()});

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
                />
                )}
                name="username"
            />
            {errors.userName && <Text>This is required.</Text>}

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
                />
                )}
                name="firstName"
            />
            {errors.firstName && <Text>This is required.</Text>}

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
                />
                )}
                name="lastName"
            />
            {errors.lastName && <Text>This is required.</Text>}

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
                />
                )}
                name="phoneNumber"
            />
            {errors.phoneNumber && <Text>This is required.</Text>}

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
                />
                )}
                name="email"
            />
            {errors.email && <Text>This is required.</Text>}

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
                />
                )}
                name="password"
            />
            {errors.password && <Text>This is required.</Text>}

            <Button title="Submit" onPress={handleSubmit(onSubmit)}/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
      color: 'white',
      margin: 20,
      marginLeft: 0,
    },
    button: {
      marginTop: 40,
      color: 'white',
      height: 40,
      backgroundColor: '#ec5990',
      borderRadius: 4,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      padding: 8,
      backgroundColor: '#0e101c',
    },
    input: {
      backgroundColor: '#10161d',
      color: 'white',
      height: 32,
      padding: 10,
      marginVertical: 3,
      borderRadius: 7,
    },
  });

export default UserForm;
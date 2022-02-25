import React, {useState, useEffect} from 'react';
import {View, Text, Form, TextInput} from 'react-native'
import { useForm } from 'react-hook-form';


const UserForm = ({user}) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [stateUser, setStateUser] = useState(
        {
            username: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            password: ""
        }
    )

    const handleChange = function(event){
        let propertyName = event.target.username;
        let copiedUser = {...stateUser}
        copiedUser[propertyName] = event.target.value;
        setStateUser(copiedUser)
        // console.log(event)
    }




    // const handleSubmit = function(event){
    //     event.preventDefault();
    //     if(stateUser.id){  
    //         onUpdate(stateUser)
    //       } else {
    //         onCreate(stateUser);
    //       }
    // }

    useEffect(()=>{
        if(user){
          let copiedUser = {...user}
          setStateUser(copiedUser)
      }
        }, [user])

        console.log("console.log UserForm");



    return(
        // <Form onPress={() => handleSubmit()}>
        <form>
            <Text style={{color:"white"}}>I am here, UserForm</Text>
            </form>
        // </Form>
    )
}

export default UserForm;




        // <Form onPress={() => handleSubmit()}>
            {/* <TextInput type="text" placeholder="Username" name="username" onChangeText={handleChange} ></TextInput> */}


        {/* <Text>User Form</Text> */}

        {/* </Form> */}
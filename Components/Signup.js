import React, { useState } from 'react'
import {StyleSheet, Button, Text, TextInput, TouchableOpacity ,View } from 'react-native';


const Signup = ({navigation}) => {
    const [signup,setSignUpData] = useState({
        username:"",
        email:"",
        password:""
    })
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sign Up</Text>
            <View style={styles.inputs}>
                <TextInput 
                    style={styles.textInput}
                    placeholder='username'
                    onChangeText={(text)=>{
                        setSignUpData({
                            ...signup,
                            username:text
                        })
                    }}
                />
                 <TextInput 
                    style={styles.textInput}
                    placeholder='Email'
                    // keyboardType='email'
                    onChangeText={(text)=>{
                        setSignUpData({
                            ...signup,
                            email:text
                        })
                    }}
                />
                <TextInput 
                    style={styles.textInput}
                    placeholder='password'
                    secureTextEntry={true}
                    onChangeText={(text)=>{
                        setSignUpData({
                            ...signup,
                            password:text
                        })
                    }}
                />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login",signup)}>
                    <Text style={{color:"black",fontWeigt:"bold",fontSize:18}}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.textCustom}>
                    <Text style={styles.note}> Already have an account! </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={[styles.note,{color:"red"}]}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    
      
      )
    }
    
    
    const styles = StyleSheet.create({
    
        container: {
          flex: 1,
          alignItems: "center",
          paddingHorizontal: 10,
          marginTop:50,
        },
        header:{
            fontWeight: "bold",
            fontSize: 30,
        },  
        inputs:{
            marginTop:40,
            width:"100%"
        },
        textInput:{
            backgroundColor:"white",
            width:"100%",
            marginTop:20,
            borderColor: "black",
            borderWidth:1,
            padding:10,
            fontSize:18,
            borderRadius:10
        },
        button: {
          marginTop:20,
          alignItems: "center",
          backgroundColor: "#DDDDDD",
          padding: 10,
          
        },
        textCustom:{
            display:"flex",
            flexDirection: "row",
            marginTop:10,
            
        },
        note:{
            fontSize:15,
            marginRight:5,
        }

      
      });

export default Signup
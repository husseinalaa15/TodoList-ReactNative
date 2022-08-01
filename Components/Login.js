import React, { useEffect, useState } from 'react'
import {StyleSheet, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Login = ({route,navigation}) => {
    const [login,setLogin] = useState({
        username : '',
        password: ''
    })

    const checkData = ()=>{
        // login.username !== '' && login.password !== ''? console.log(route) : null 
        if(login.username == '' && login.password == ''){
            return null
        }else{

            if(login.username == route.params.username && login.password == route.params.password){
                navigation.navigate("Welcome",login)
            }else{
                console.log(route.params.username)
                console.log(route.params.password)
    
                console.log("data err")
                return null
            }
        }
    }
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Login</Text>
        <View style={styles.inputs}>
            <TextInput 
                style={styles.textInput}
                placeholder='username'
                onChangeText={(text)=>{
                    setLogin({
                        ...login,
                        username:text
                    })
                    
                }}
            />
            <TextInput 
                style={styles.textInput}
                placeholder='password'
                secureTextEntry={true}
                onChangeText={(text)=>{
                    setLogin({
                        ...login,
                        password:text
                    })
                    
                }}
            />
            <TouchableOpacity style={styles.button} onPress={() => checkData()}>
                <Text style={{color:"black",fontWeigt:"bold",fontSize:18}}>Log In</Text>
            </TouchableOpacity>
            <View style={styles.textCustom}>
                    <Text style={styles.note}> New Member! </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Registeration")}>
                        <Text style={[styles.note,{color:"red"}]}>Sign Up</Text>
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

export default Login
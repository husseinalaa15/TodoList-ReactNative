import React, { useState } from 'react'
import {StyleSheet,Image, Button, Text, TextInput, TouchableOpacity, View, ScrollView, FlatList, Alert, TouchableWithoutFeedback,Modal, Pressable, ImageBackground } from 'react-native';

const Welcome = ({route}) => {

  const [todoText, setTodoText] = useState();
  const [todos,setTodos] = useState([])

  const [modal,setModal]= useState(false)

  const bgimg= {uri:"https://i.pinimg.com/736x/9f/8a/0f/9f8a0f17274127293d1b4b81b1a2f8e5.jpg"}


  const addToList = ()=>{
    if(todoText.length < 3 ){
      Alert.alert("Todo ","Please Add New Todo To the List ! ")
    }else{

      setTodos([...todos,{id:Math.random(),title:todoText , date:new Date().toISOString().slice(0, 10) }])
      setTodoText(' ')
    }
  }

  const deleteItem =(id)=>{
    let newTodoList = todos.filter((todo)=> todo.id !== id)
    setTodos(newTodoList)
    setModal(true)
  }
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.ImageBackground} source={bgimg}  resizeMode="cover">
          
          <View style={styles.todoContainer}>
            <Text style={styles.todotitle}>
              Todos.
            </Text>
          </View>

        <View style={styles.welcommsg}>
          {/* <Image style={styles.image} source={require('../assets/images/user.png')} /> */}
          <Text style={styles.welcome}>Welcome {route.params.username}  </Text>
          {/* {route.params.username} */}
        

        </View>
        <View style={styles.addTodoContainer}>
            <TextInput style={styles.input}
            placeholder='Add Todo'
            onChangeText={(text)=>setTodoText(text)}
            value={todoText}
            />
            <TouchableOpacity  onPress={addToList}>
              <Text style={styles.button}>Add</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
        


        

 

          <FlatList data={todos} style={{marginTop:20,paddingBottom:20,flex:3}} renderItem={({item})=>{
            return (
              <TouchableWithoutFeedback  onPress={(id)=>deleteItem(item.id)}>
                <View  style={styles.todo}>
                  <Text style={styles.item}> {item.title} </Text>
                  <Text style={styles.date}> {item.date} </Text>
                </View>

              </TouchableWithoutFeedback>
            
            )
          }} 
          keyExtractor={item=>item.id}
          />
          

        <Modal
          visible={modal}
          animationType="slide"
          transparent={true}
  
          >
          <View style={styles.modal}>
            <View style={styles.modalCard}> 
              <Text style={styles.modalText}>
                Deleted Succesfully!
              </Text>
              <Pressable onPress={()=>{setModal(false)}}>
                <Text style={styles.modalCloseBtn}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

     
    </View>
  )
}

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      // alignItems: "center",
      paddingHorizontal: 10,
      // marginTop:50,

    },
    ImageBackground:{
      paddingTop:25,
      paddingBottom:25,
    },
    welcome:{
        fontSize:15,
        textAlign: "center",
        letterSpacing:3,

    },
    welcommsg:{
      display: "flex",
      flexDirection: "row",
      justifyContent:"center",
      alignItems:"center",
    },
    image:{
      width:25,
      height:25,
      
    },
    todoContainer:{
      // marginTop:40
      display: "flex",
      flexDirection: "row",
      justifyContent:"center",
      alignItems:"center",
    },
    todotitle:{
      fontSize:30,
      color:"#3D3C42",
      fontWeight:"bold",
      letterSpacing:3
    },
    todo:{
      backgroundColor:"#395B64",
      marginTop:20,
      width:"100%",
      padding:20,
      display: "flex",
      flexDirection: "row",
      justifyContent:"space-between",
      alignItems:"center",
      marginBottom:5
    },
    item:{
      fontSize:20,
      color:"white"

    },
    date:{
      color:"lightgray"
    },
    addTodoContainer:{
      display:  "flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center"
    },
    input:{
      backgroundColor:"white",
      width:"50%",
      marginTop:20,
      borderColor: "black",
      borderWidth:1,
      padding:10,
      fontSize:18,
      borderRadius:10
    },
    button:{
      backgroundColor:"green",
      color:"white",
      // width:"50%",
      marginTop:20,
      marginLeft:10,
      padding:10,
      fontSize:18,
      borderRadius:10


    },
    modal:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalCard:{
      backgroundColor:"#eeee",
      padding:50,
      borderRadius:10,
      borderColor: "#395B64",
      borderWidth:1,
    },
    modalText:{
      // fontSize:20,
      fontWeight:"bold",
      fontSize:20,
      marginBottom:20
    },
    modalCloseBtn:{
      backgroundColor:"green",
      textAlign: "center",
      padding:10,
      borderRadius:10,
      color: "white",
      fontSize:15,
      
    }


    

  
  });

export default Welcome
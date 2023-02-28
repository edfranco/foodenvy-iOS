import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export function LogInScreen(props) {
  return (
    <View style={[styles.container, {backgroundColor: "#ff0000"}]}>
      <View style={styles.logoContainer}>
        <Text style={{ color: "#fff", fontSize: 64 }}>FoodEnvy</Text>
      </View>
      <View style={styles.authContainer}>
        <Pressable
          onPress={() => props.setUser({ name: "Lalo" })}
          style={[styles.authButtons, { marginVertical: 3 }]}
        >
          <Text style={[styles.authButtonsText]}>Log In</Text>
        </Pressable>
        <Pressable style={[styles.authButtons]}>
          <Text style={styles.authButtonsText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
}

export function FeedScreen(props) {
  return (
    <View style={styles.container}>
      <Pressable onPress={()=>props.setUser(null)}>
        <Text>Log Out</Text>
      </Pressable>
      <View>
        <View style={{
          flexDirection:'row', 
          alignItems:'center', 
          justifyContent:'flex-start',
          marginVertical:10,
          width:360
          }}>
          <Image 
            style={{width:50, height:50, borderRadius:'100%'}}
            source={{uri:'https://media.licdn.com/dms/image/D5635AQGgmHWVvo8-7w/profile-framedphoto-shrink_200_200/0/1675977885141?e=1678082400&v=beta&t=RYn6ws7KDnVc9NxGCpot50gHf-YcDiHvfs8mTx1EYgU'}} />
          <View style={{marginHorizontal:10}}>
            <Text style={{fontSize:16, fontWeight:'bold'}}>egglito</Text>
          </View>
        </View>
        <Image 
          style={{width:375, height:400}}
          source={{uri:'https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZGllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'}}/>
        <Text style={{margin:20, fontSize:16}}><span style={{fontWeight:'bold'}}>egglito</span> Look at this bomb spaghetti</Text>
      </View>
    </View>
  );
}

export default function App() {
  const [user, setUser] = useState({});
  return (
    <NavigationContainer>
      {user 
      ? <FeedScreen setUser={setUser} /> 
      : <LogInScreen setUser={setUser} 
      />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logoContainer: {
    flex: 5,
    justifyContent: "center",
  },
  authContainer: {
    flex: 1,
    width: "100%",
  },
  authButtons: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b30000",
    height: 50,
  },
  authButtonsText: {
    fontSize: 24,
    color: "#fff",
  },
});

import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={{color:'#fff', fontSize:36}}>FoodEnvy</Text>
      </View>
      <View style={styles.authContainer}>
        <Pressable style={[styles.authButtons, {marginVertical:3}]}>
          <Text style={[styles.authButtonsText]}>Log In</Text>
        </Pressable>
        <Pressable style={[styles.authButtons]}>
          <Text style={styles.authButtonsText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flex:5,
    justifyContent:'center'
  },
  authContainer: {
    flex: 1,
    width:'100%'
  },
  authButtons: {
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#b30000',
    height:50
  },
  authButtonsText: {
    fontSize:24,
    color:'#fff'
  }
});

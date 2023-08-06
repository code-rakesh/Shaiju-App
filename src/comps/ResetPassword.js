import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput
} from "react-native";
import { HStack } from "@react-native-material/core";
export default function ResetPassword({ setScreen }) {

 
  return (
    <View style={styles.container}>
      <Text style={styles.Label}>Please sign in with</Text>
      <TextInput style={styles.Input} placeholder="OTP" />
      <TextInput style={styles.Input} placeholder="PIN" />
      <TextInput style={styles.Input} placeholder="Confirm PIN" />
      <Pressable onPress={() => setScreen("SIGN_UP")} style={styles.mainButton}>
        <Text style={styles.mainButton.text}>RESET</Text>
      </Pressable>
      <HStack m={4} spacing={6} style={{width:'100%'}}>
      <Pressable onPress={() => setScreen("SIGN_IN")} style={{ width: '40%', height: 40, marginLeft:"10%",marginTop:10 }}>
        <Text style={{color:'black', textDecorationLine: 'underline'}}>Cancel</Text>
      </Pressable>
      
       
      </HStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  Input: {
    borderBottomWidth: 1,
    width: "80%",
    paddingLeft: 10,
    marginTop: 10
  },
  Label: {
    fontSize: 15,
    color: "#6666bf",
    textAlign: "left",
    width: "80%",
    paddingLeft: 10,
    fontWeight: "600"
  },
  mainButton: {
    width: "80%",
    height: 35,
    backgroundColor: "#6868bf",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    text: {
      color: "white"
    }
  },
  subButton: {
    marginLeft: "10%"
  },
  bottomNav: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%"
  }
});

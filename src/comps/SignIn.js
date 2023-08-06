import { StyleSheet, Text, View, Pressable, TextInput,async } from "react-native";
import { HStack } from "@react-native-material/core";
import { useState } from "react";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function SignIn({ setScreen }) {
  const [referenceId, setReferenceId] = useState("");
  const [Pin, setPin] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  async function login() {
    
    
    const payLoad = JSON.stringify({
      userName: userName,
      tokenNo: referenceId,
      email: email,
      password: Pin
    });
    const response = await axios.post('https://powerfab.qcon.com.qa:9300/api/login',payLoad);
    const token = response?.token
    if (!token) {
      return;
    }
    try {
      await AsyncStorage.setItem('token', token);
    } catch (e) {
      console.warn(e.message)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.Label}>Please sign in with</Text>

      <TextInput
        style={styles.Input}
        onChangeText={(value) => setUserName(value)}
        placeholder="Username"
      />
      <TextInput
        style={styles.Input}
        onChangeText={(value) => setReferenceId(value)}
        placeholder="Employee Ref ID"
      />
      <TextInput
        style={styles.Input}
        onChangeText={(value) => setEmail(value)}
        placeholder="Email"
      />

      <TextInput
        style={styles.Input}
        onChangeText={(value) => setPin(value)}
        placeholder="PIN"
      />
      <Pressable onPress={() => login()} style={styles.mainButton}>
        <Text style={styles.mainButton.text}>SIGN IN</Text>
      </Pressable>
      <HStack m={4} spacing={6} style={{ width: "100%" }}>
        <Pressable
          onPress={() => setScreen("SIGN_UP")}
          style={{ width: "40%", height: 40, marginLeft: "10%", marginTop: 10 }}
        >
          <Text style={{ color: "black", textDecorationLine: "underline" }}>
            Sign Up
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setScreen("RESET_PIN")}
          style={{ width: "40%", height: 40, marginTop: 10, marginLeft: "10%" }}
        >
          <Text
            style={{
              color: "black",
              textAlign: "left",
              textDecorationLine: "underline"
            }}
          >
            Forgot PIN
          </Text>
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

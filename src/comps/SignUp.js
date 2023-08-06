import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { HStack } from "@react-native-material/core";

import { useState } from "react";
export default function SignUp({ setScreen }) {
  const [referenceId, setReferenceId] = useState("");
  const [Pin, setPin] = useState("");
  const [CPin, setCPin] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  async function signUp() {}
  return (
    <View style={styles.container}>
      <Text style={styles.Label}>Please sign up with</Text>
      <TextInput style={styles.Input} placeholder="Employee Ref ID" />
      <TextInput style={styles.Input} placeholder="Email ID" />
      <TextInput style={styles.Input} placeholder="Local phone" />
      <TextInput style={styles.Input} placeholder="PIN" />
      <TextInput style={styles.Input} placeholder="Confirm PIN" />
      <Pressable onPress={() => setScreen("SIGN_UP")} style={styles.mainButton}>
        <Text style={styles.mainButton.text}>SIGN UP</Text>
      </Pressable>
      <HStack m={4} spacing={6} style={{ width: "100%" }}>
        <Pressable
          onPress={() => setScreen("SIGN_IN")}
          style={{ width: "90%", height: 40, marginLeft: "10%", marginTop: 10 }}
        >
          <Text style={{ color: "black" }}>
            {" "}
            <Text style={{ textDecorationLine: "underline" }}>Sign In</Text> (If
            you are already registered)
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
    paddingLeft: 4,
    marginTop: 10
  },
  Label: {
    fontSize: 15,
    color: "#6666bf",
    textAlign: "left",
    width: "80%",
    paddingLeft: 4,
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

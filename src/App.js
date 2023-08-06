import { StyleSheet, View } from "react-native";
import { useState } from "react";
import SignIn from "./comps/SignIn";
import SignUp from "./comps/SignUp";
import ResetPassword from "./comps/ResetPassword";
export default function App() {
  const [screen, setScreen] = useState("SIGN_IN");

  switch (screen) {
    case "SIGN_IN":
      return (
        <View style={styles.container}>
          <SignIn setScreen={setScreen} />
        </View>
      );

    case "SIGN_UP":
      return (
        <View style={styles.container}>
          <SignUp setScreen={setScreen} />
        </View>
      );
      case "RESET_PIN":
        return (
          <View style={styles.container}>
            <ResetPassword setScreen={setScreen} />
          </View>
        );
    default:
      break;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

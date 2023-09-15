import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Progressbar from "./Progressbar";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.ticketcontainer}>
        <View style={styles.flexcontainer}>
          <Text style={styles.header}>Total Ticket</Text>
          <Text style={styles.header}>120</Text>
        </View>
        <View style={styles.horizontalline}></View>
        <Progressbar title={"Re-routed"} value={20} colour={"pink"}/>
        <Progressbar title={"Pending"} value={20} colour={"purple"}/>
        <Progressbar title={"Onsite"} value={30} colour={"blue"}/>
        <Progressbar title={"Acknowledge"} value={30} colour={"skyblue"}/>
        <Progressbar title={"Open"} value={20} colour={"green"}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  ticketcontainer: {
    elevation: 5,
    backgroundColor: "white",
    width: "90%",
    padding: 30,
  },
  flexcontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  header: {
    fontSize: 20,
  },
  horizontalline: {
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
    marginBottom: 25,
  },
});

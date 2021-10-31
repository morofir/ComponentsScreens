import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      {/* <Button title="Components" />
      <Button title="List" />  premetive!!*/}
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text style={styles.btnStyle}>Go to List demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Components")}>
        <Text style={styles.btnStyle}>Go to Components demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Images")}>
        <Text style={styles.btnStyle}>Go to Image demo</Text>
      </TouchableOpacity>
    </View>
  );
};
//on touchable we can put any kind on jsx insige (view,image etc...)
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  btnStyle: {
    fontSize: 20,
    padding: 10,
    color: "dodgerblue",
  },
});

export default HomeScreen;

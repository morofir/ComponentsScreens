import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetails from "../components/ImageDetails"; //use this child into the parent

const ImageScreen = () => {
  //pass a props by our own
  return (
    <View>
      <Text>Image Screen</Text>
      <ImageDetails title="Forrest" />
      <ImageDetails title="Beach" />
      <ImageDetails title="Mountain" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;

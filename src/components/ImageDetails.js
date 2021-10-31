import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetails = (props) => {
  return (
    <View>
      <Text>Show Image Details of {props.title}</Text>
    </View>
  ); //created a props, who passed a title
};

const styles = StyleSheet.create({});

export default ImageDetails;

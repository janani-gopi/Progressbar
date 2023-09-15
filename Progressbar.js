import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import ProgressBar from "react-native-animated-progress";

const Progressbar = ({ title, value, colour }) => { 
  //calculation of width
  const width = (value * 100) / 120;

  return (
    <View>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.value, { color: colour }]}>
          {value < 10 ? `0${value}` : value}
        </Text>
      </View>
      <View style={{ paddingVertical: 10 }}>
        <ProgressBar
          progress={width}
          height={10}
          backgroundColor={colour}
          trackColor="#e5e5e5"
        />
      </View>
    </View>
  );
};

export default Progressbar;

const styles = StyleSheet.create({
  titlecontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 13,
  },
  value: {
    fontSize: 13,
  },
  line: {
    height: 13,
    backgroundColor: "#e5e5e5",
    borderRadius: 10,
    marginVertical: 8,
  },
  valueline: {
    height: 13,
    borderRadius: 10,
    marginVertical: 8,
    position: "absolute",
    top: 0,
  },
});

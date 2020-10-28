import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E4E4E4",
    marginBottom: 11
  },
  label: {
    color: "#4A4A4A",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 7
  },
  error: {
    color: "red",
    fontWeight: "600",
    marginBottom: 7
  },
  textfield: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4A4A4A",
    marginBottom: 4
  },
  multilineBox: {
    alignSelf: "center",
    maxHeight: 300,
    borderColor: "#1ca0ff",
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginVertical: 10,
    width: "90%",
    textAlignVertical: "top"
  }
});

export const TextField = ({ label, ...props }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.textfield}
      placeholderTextColor="#828282"
      {...props}
    />
  </View>
);

export const MultLineTextField = ({ label, error, ...props }) => (
  <View style={styles.row}>
    {label && <Text style={styles.label}>{label}</Text>}
    <TextInput
      placeholderTextColor="#828282"
      {...props}
      editable={true}
      multiline={true}
      maxLength={5000}
      numberOfLines={10}
      clearButtonMode="always"
      style={styles.multilineBox}
      autoGrow={true}
    />
    {error && <Text style={styles.error}>{error}</Text>}
  </View>
);

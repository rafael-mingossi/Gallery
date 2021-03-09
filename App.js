import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

const App = () => {
  return (
    <WebView
      source={{ uri: "http://192.168.176.115/Gallery" }}
      style={{ marginTop: 220 }}
    />
  );
};

export default App;

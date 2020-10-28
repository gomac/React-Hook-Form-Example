import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Requirements from "./Requirements";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newRequirement: "",
      newInstructions: ""
    };
  }

  setNewRequirement = (val) => {
    this.setState({ newRequirement: val });
  };

  setNewInstructions = (val) => {
    this.setState({ newInstructions: val });
  };

  render() {
    return (
      <View style={styles.app}>
        <Requirements
          newRequirement={this.state.newRequirement}
          setNewRequirement={this.setNewRequirement}
          newInstructions={this.state.newInstructions}
          setNewInstructions={this.setNewInstructions}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

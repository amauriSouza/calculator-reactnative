import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert
} from "react-native";

class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      result: ""
    };
  }

  handleNumber1 = text => this.setState({ number1: text });
  handleNumber2 = text => this.setState({ number2: text });

  add = (number1, number2) => {
    if (
      (number1 == 0 && number2 == 0) ||
      (number1 == 0 && number2 > 0) ||
      (number1 > 0 && number2 == 0)
    ) {
      Alert.alert("Error", "Digite todos os numeros", [{ text: "OK" }], {
        cancelable: false
      });
    } else {
      this.setState({ result: parseFloat(number1) + parseFloat(number2) });
    }
  };

  multi = (number1, number2) => {
    if (
      (number1 == 0 && number2 == 0) ||
      (number1 == 0 && number2 > 0) ||
      (number1 > 0 && number2 == 0)
    ) {
      Alert.alert("Error", "Digite todos os numeros", [{ text: "OK" }], {
        cancelable: false
      });
    } else {
      this.setState({ result: parseFloat(number1) * parseFloat(number2) });
    }
  };

  div = (number1, number2) => {
    if (
      (number1 == 0 && number2 == 0) ||
      (number1 == 0 && number2 > 0) ||
      (number1 > 0 && number2 == 0)
    ) {
      Alert.alert("Error", "Digite todos os numeros", [{ text: "OK" }], {
        cancelable: false
      });
    } else this.setState({ result: parseFloat(number1) / parseFloat(number2) });
  };

  sub = (number1, number2) => {
    if (
      (number1 == 0 && number2 == 0) ||
      (number1 == 0 && number2 > 0) ||
      (number1 > 0 && number2 == 0)
    ) {
      Alert.alert("Error", "Digite todos os numeros", [{ text: "OK" }], {
        cancelable: false
      });
    } else {
      this.setState({ result: parseFloat(number1) - parseFloat(number2) });
    }
  };

  clear = () => {
    this.setState({ result: "", number1: 0, number2: 0 });
    this.number1.clear();
    this.number2.clear();
    this.number1.focus();
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.flexContentBetween,
            styles.box,
            styles.marginBottomBox
          ]}
        >
          <Text style={[styles.textInfo, styles.bold]}>Resultado</Text>
          <Text style={styles.textInfo}>{isNaN(this.state.result) ? '' : this.state.result}</Text>
        </View>

        <View style={styles.box}>
          <View style={styles.flexContentBetween}>
            <TextInput
              style={styles.inputText}
              underlineColorAndroid="gray"
              placeholder="Number 1"
              autoCapitalize="none"
              ref={el => {
                this.number1 = el;
              }}
              onChangeText={this.handleNumber1}
            />

            <TextInput
              style={styles.inputText}
              underlineColorAndroid="gray"
              placeholder="Number 2"
              autoCapitalize="none"
              onChangeText={this.handleNumber2}
              ref={el => {
                this.number2 = el;
              }}
            />
          </View>

          <View style={[styles.flexContentBetween, styles.marginTopBox]}>
            <TouchableOpacity
              style={[styles.buttonDefault, styles.operation]}
              onPress={() => this.add(this.state.number1, this.state.number2)}
            >
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
                +
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonDefault, styles.operation]}
              onPress={() => this.sub(this.state.number1, this.state.number2)}
            >
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
                -
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonDefault, styles.operation]}
              onPress={() => this.multi(this.state.number1, this.state.number2)}
            >
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
                *
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonDefault, styles.operation]}
              onPress={() => this.div(this.state.number1, this.state.number2)}
            >
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
                /
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonDefault, styles.delete]}
              onPress={() => this.clear()}
            >
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
                x
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default Inputs;

const styles = StyleSheet.create({
  container: {
    padding: 15
  },

  flexContentBetween: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  box: {
    elevation: 2,
    borderRadius: 5,
    backgroundColor: "#fff",
    padding: 10
  },

  textInfo: {
    fontSize: 18,
    color: "gray"
  },

  bold: {
    fontWeight: "bold"
  },

  inputText: {
    flex: 1
  },

  marginBottomBox: {
    marginBottom: 10
  },

  marginTopBox: {
    marginTop: 20
  },

  operation: {
    backgroundColor: "#4181ee"
  },

  delete: {
    backgroundColor: "red"
  },

  buttonDefault: {
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10
  }
});

# React Native Gesture Bottom Sheet

Need a lightweight and easy-to-use bottom sheet component? Here it is!

A cross-platform Bottom Sheet component which supports gestures.

![](bottom-sheet.gif)

- Checkout the [example/](https://github.com/kcotias/react-native-gesture-bottom-sheet/tree/master/examples) folder for use example.

## Features

- Smooth animations and gestures
- Highly customizable
- Very lightweight

## Installation

Open a Terminal in the project root and run:

```sh
yarn add react-native-gesture-bottom-sheet
```

## Quick Start

```js
import React, { useRef } from "react";
import { SafeAreaView, TouchableOpacity, Text, StyleSheet } from "react-native";
import BottomSheet from "react-native-gesture-bottom-sheet";

const Example = () => {
  // Needed in order to use .show()
  const bottomSheet = useRef();

  return (
    <SafeAreaView style={styles.container}>
      <BottomSheet 
      hasDraggableIcon
      ref={bottomSheet}
      height={600}
      onRequestClose={() => {
          bottomSheet.current.close();
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => bottomSheet.current.show()}
      >
        <Text style={styles.text}>Open modal</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 150,
    backgroundColor: "#140078",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#8559da",
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    elevation: 6,
  },
  text: {
    color: "white",
    fontWeight: "600",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Example;
```

### Props
| name                      | required | default | Type    | description |
| ------------------------- | -------- | ----------| --------| ------------|
| height                    | Yes      |           | integer | Determines the panel size.|
| radius                    | No       | 10        | integer | Determines the radius of the top borders.|
| onRequestClose          | No       |      | function | Function to callback while requesting bottom-sheet to close|
| hasDraggableIcon          | No       | false     | boolean | Controls visibility of the draggable icon on top of the modal.|
| draggable                 | No       | true      | boolean | Specify whether the panel is draggable or not.|
| dragIconColor             | No       | `#A3A3A3` | string  | Drag icon background color.|
| dragIconStyle             | No       |           | style   | Drag icon style.|
| backgroundColor           | No       |`#25252599`| string  | Change the color of the overlay.|    
| sheetBackgroundColor      | No       |`#F3F3F3`  | string  | Change the background of the panel.|    
| closeFunction             | No       |           | function  | Function to be called when close animation finishes.|    
| easing                    | No       |           | [Easing](https://reactnative.dev/docs/easing)  | Modal animation open/close easing.|    
| onRequestClose            | No       |           | function  | Modal [onRequestClose](https://reactnative.dev/docs/modal#onrequestclose) property.|    

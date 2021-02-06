import React, { useRef } from 'react';
import { SafeAreaView, TouchableOpacity, Text, View } from 'react-native';
import BottomSheet from './BottomSheet';
import styles from './styles';

const Example = () => {
  const bottomSheet = useRef();
  return (
    <SafeAreaView style={styles.container}>
      <BottomSheet
        draggable={true}
        hasDraggableIcon
        ref={bottomSheet}
        height={350}>
        <View>
          <Text>Test</Text>
        </View>
      </BottomSheet>
      <TouchableOpacity
        style={styles.button}
        onPress={() => bottomSheet.current.show()}>
        <Text style={styles.text}>Open modal</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Example;

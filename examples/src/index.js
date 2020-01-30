import React, {useRef} from 'react';
import {SafeAreaView, TouchableOpacity, Text} from 'react-native';
import BottomSheet from 'react-native-bottom-sheet';
import styles from './styles';

const Example = () => {
  const bottomSheet = useRef();
  return (
    <SafeAreaView style={styles.container}>
      <BottomSheet hasDraggableIcon ref={bottomSheet} height={600} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => bottomSheet.current.show()}>
        <Text style={styles.text}>Open modal</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Example;

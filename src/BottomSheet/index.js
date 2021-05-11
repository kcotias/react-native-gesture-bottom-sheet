import React, { Component } from 'react';
import { View, Modal, TouchableOpacity, Animated, PanResponder } from 'react-native';
import styles from './styles';

class BottomSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      animatedHeight: new Animated.Value(0),
      pan: new Animated.ValueXY(),
    };

    this.createPanResponder(props);
  }

  setModalVisible(visible) {
    const { closeFunction, height } = this.props;
    const { animatedHeight, pan } = this.state;
    if (visible) {
      this.setState({ modalVisible: visible });
      Animated.timing(animatedHeight, {
        toValue: height,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedHeight, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }).start(() => {
        pan.setValue({ x: 0, y: 0 });
        this.setState({
          modalVisible: visible,
          animatedHeight: new Animated.Value(0),
        });
        if (typeof closeFunction === 'function') closeFunction();
      });
    }
  }

  createPanResponder(props) {
    const { height } = props;
    const { pan } = this.state;
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy > 0) {
          Animated.event([null, { dy: pan.y }])(e, gestureState);
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        const gestureLimitArea = height / 3;
        const gestureDistance = gestureState.dy;
        if (gestureDistance > gestureLimitArea) {
          this.setModalVisible(false);
        } else {
          Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
        }
      },
    });
  }

  show() {
    this.setModalVisible(true);
  }

  close() {
    this.setModalVisible(false);
  }

  render() {
    const { children, hasDraggableIcon, backgroundColor, dragIconColor, draggable = true, onRequestClose } = this.props;
    const { animatedHeight, pan, modalVisible } = this.state;
    const panStyle = {
      transform: pan.getTranslateTransform(),
    };

    return (
      <Modal transparent visible={modalVisible} onRequestClose={onRequestClose}>
        <View style={[styles.wrapper, { backgroundColor: backgroundColor || '#25252599' }]}>
          <TouchableOpacity style={styles.background} activeOpacity={1} onPress={() => this.close()} />
          <Animated.View
            {...(draggable && this.panResponder.panHandlers)}
            style={[panStyle, styles.container, { height: animatedHeight }]}
          >
            {hasDraggableIcon && (
              <View style={styles.draggableContainer}>
                <View
                  style={[
                    styles.draggableIcon,
                    {
                      backgroundColor: dragIconColor || '#A3A3A3',
                    },
                  ]}
                />
              </View>
            )}
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  }
}

export default BottomSheet;

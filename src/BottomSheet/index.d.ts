import { Component } from 'react';
import { Animated, Easing, StyleProp, ViewStyle } from 'react-native';
export interface BottomSheetProps {
  height: number;
  closeFunction?: () => void;
  easing?: Easing;
  hasDraggableIcon?: boolean;
  backgroundColor?: string;
  sheetBackgroundColor?: string;
  dragIconColor?: string;
  dragIconStyle?: StyleProp<ViewStyle>;
  draggable?: boolean;
  onRequestClose?: () => void;
  onClose?: () => void;
  radius?: number;
}
export interface BottomSheetState {
  modalVisible: boolean;
  animatedHeight: Animated.Value;
  pan: Animated.ValueXY;
}
declare class BottomSheet extends Component<
  BottomSheetProps,
  BottomSheetState
> {
  private panResponder;
  constructor(props: BottomSheetProps);
  setModalVisible(visible: boolean): void;
  createPanResponder(props: { height: number }): void;
  show(): void;
  close(): void;
  render(): JSX.Element;
}
export default BottomSheet;

import React from "react";
import { FlatList } from "react-native-gesture-handler";
import Animated, {
  SharedValue,
  WithSpringConfig,
} from "react-native-reanimated";
import { CellData, DraggableFlatListProps } from "../types";
declare type RefContextValue<T> = {
  propsRef: SharedValue<DraggableFlatListProps<T>>;
  animationConfigRef: SharedValue<WithSpringConfig>;
  cellDataRef: SharedValue<Map<string, CellData>>;
  keyToIndexRef: SharedValue<Map<string, number>>;
  containerRef: React.RefObject<Animated.View>;
  flatlistRef: React.RefObject<FlatList<T>> | React.ForwardedRef<FlatList<T>>;
  scrollViewRef: React.RefObject<Animated.ScrollView>;
};
export default function RefProvider<T>({
  children,
  flatListRef,
}: {
  children: React.ReactNode;
  flatListRef?: React.ForwardedRef<FlatList<T>> | null;
}): JSX.Element;
export declare function useRefs<T>(): RefContextValue<T>;
export {};

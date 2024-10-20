import React, { useRef } from "react";
import { useDraggableFlatListContext } from "../context/draggableFlatListContext";
import { useRefs } from "../context/refContext";
import { useStableCallback } from "../hooks/useStableCallback";
import { typedMemo } from "../utils";
import { useSharedValue } from "react-native-reanimated";

function RowItem(props) {
  const propsRef = useSharedValue(props);
  propsRef.value = props;
  const { activeKey } = useDraggableFlatListContext();
  const activeKeyRef = useRef(activeKey);
  activeKeyRef.current = activeKey;
  const { keyToIndexRef } = useRefs();
  const drag = useStableCallback(() => {
    const { drag, itemKey, debug } = propsRef.value;

    if (activeKeyRef.current) {
      // already dragging an item, noop
      if (debug)
        console.log(
          "## attempt to drag item while another item is already active, noop"
        );
    }

    drag(itemKey);
  });
  const { renderItem, item, itemKey, extraData } = props;
  const getIndex = useStableCallback(() => {
    return keyToIndexRef.value.get(itemKey);
  });
  return /*#__PURE__*/ React.createElement(MemoizedInner, {
    isActive: activeKey === itemKey,
    drag: drag,
    renderItem: renderItem,
    item: item,
    getIndex: getIndex,
    extraData: extraData,
  });
}

export default typedMemo(RowItem);

function Inner(_ref) {
  let { renderItem, extraData, ...rest } = _ref;
  return renderItem({ ...rest });
}

const MemoizedInner = typedMemo(Inner);
//# sourceMappingURL=RowItem.js.map

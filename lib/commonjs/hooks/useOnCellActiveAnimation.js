Object.defineProperty(exports, "__esModule", { value: true });
exports.useOnCellActiveAnimation = useOnCellActiveAnimation;
var _reactNativeReanimated = require("react-native-reanimated");
var _constants = require("../constants");
var _animatedValueContext = require("../context/animatedValueContext");
var _cellContext = require("../context/cellContext");
function useOnCellActiveAnimation() {
  var _ref =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : { animationConfig: {} },
    animationConfig = _ref.animationConfig;
  var animationConfigRef = (0, _reactNativeReanimated.useSharedValue)(
    animationConfig
  );
  animationConfigRef.value = animationConfig;
  var isActive = (0, _cellContext.useIsActive)();
  var _useAnimatedValues = (0, _animatedValueContext.useAnimatedValues)(),
    isTouchActiveNative = _useAnimatedValues.isTouchActiveNative;
  var onActiveAnim = (0, _reactNativeReanimated.useDerivedValue)(
    (function () {
      var _f = function _f() {
        var toVal = isActive && isTouchActiveNative.value ? 1 : 0;
        return (0, _reactNativeReanimated.withSpring)(
          toVal,
          Object.assign(
            {},
            _constants.DEFAULT_ANIMATION_CONFIG,
            animationConfigRef.value
          )
        );
      };
      _f._closure = {
        isActive: isActive,
        isTouchActiveNative: isTouchActiveNative,
        withSpring: _reactNativeReanimated.withSpring,
        DEFAULT_ANIMATION_CONFIG: _constants.DEFAULT_ANIMATION_CONFIG,
        animationConfigRef: animationConfigRef,
      };
      _f.asString =
        "function _f(){const{isActive,isTouchActiveNative,withSpring,DEFAULT_ANIMATION_CONFIG,animationConfigRef}=jsThis._closure;{const toVal=isActive&&isTouchActiveNative.value?1:0;return withSpring(toVal,{...DEFAULT_ANIMATION_CONFIG,...animationConfigRef.value});}}";
      _f.__workletHash = 10696961228118;
      _f.__location =
        "/Users/azzuhry/project/react-native-draggable-flatlist/src/hooks/useOnCellActiveAnimation.ts (26:39)";
      return _f;
    })(),
    [isActive]
  );
  return { isActive: isActive, onActiveAnim: onActiveAnim };
}
//# sourceMappingURL=useOnCellActiveAnimation.js.map

import getBoundingClientRect from "./getBoundingClientRect.js";
import getNodeScroll from "./getNodeScroll.js";
import getNodeName from "./getNodeName.js";
import getBorders from "./getBorders.js";
import { isHTMLElement } from "./instanceOf.js"; // offsets without `border`

function getInnerOffsets(offsetParent) {
  var rect = getBoundingClientRect(offsetParent);
  var borders = getBorders(offsetParent);
  return {
    x: rect.x + borders.left,
    y: rect.y + borders.top
  };
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


export default function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var rect = getBoundingClientRect(elementOrVirtualElement);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (!isFixed) {
    if (getNodeName(offsetParent) !== 'body') {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getInnerOffsets(offsetParent);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
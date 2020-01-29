import getBorders from "./getBorders.js";
import getNodeName from "./getNodeName.js";
import getWindow from "./getWindow.js"; // Borders + scrollbars

export default function getDecorations(element) {
  var borders = getBorders(element);
  var win = getWindow(element);
  var right = element.offsetWidth - element.clientWidth - borders.right;
  var bottom = element.offsetHeight - element.clientHeight - borders.bottom;

  if (getNodeName(element) === 'html') {
    right = win.innerWidth - element.clientWidth;
    bottom = win.innerHeight - element.clientHeight;
  }

  return {
    top: borders.top,
    right: right,
    bottom: bottom,
    left: borders.left
  };
}
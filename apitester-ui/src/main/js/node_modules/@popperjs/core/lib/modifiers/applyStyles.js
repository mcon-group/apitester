import getNodeName from "../dom-utils/getNodeName.js";
import { isHTMLElement } from "../dom-utils/instanceOf.js"; // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    position: 'absolute',
    left: '0',
    top: '0',
    margin: '0'
  };
  Object.assign(state.elements.popper.style, initialStyles);
  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? Object.assign({}, state.styles[name]) : initialStyles);
      var attributes = state.attributes[name] || {}; // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        var _Object$assign;

        return Object.assign({}, style, (_Object$assign = {}, _Object$assign[String(property)] = '', _Object$assign));
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        return element.removeAttribute(attribute);
      });
    });
  };
}

export default {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
};
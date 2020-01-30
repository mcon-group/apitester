export default function getDocumentElement(element) {
  // $FlowFixMe: assume body is always available
  return element.ownerDocument.documentElement;
}
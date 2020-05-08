import React from "react";
const dom = (eq) => ({
  type: "math",
  subtype: "antiRestriction",
  children: [{ text: "\u2a64" }],
});

const Element = (attributes, children) => {
  return <span {...attributes}>{children}</span>;
};

const icon = (attributes, children) => {
  return <span {...attributes}>   &#10852;{children}</span>;
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };

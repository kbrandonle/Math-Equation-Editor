import React from "react";
const dom = (eq) => ({
  type: "math",
  subtype: "summationSymbol",
  children: [{ text: "\u25cb" }],
});

const Element = (attributes, children) => {
  return <span {...attributes}>{children}</span>;
};


const icon = (attributes, children) => {
  return <span {...attributes}>   &#9675;{children}</span>;
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };

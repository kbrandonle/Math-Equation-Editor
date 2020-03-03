import React from "react";
const dom = eq => ({
  type: "math",
  subtype: "numerator",
  children: [{ text: " " }]
});

const Element = (attributes, children) => {
  return (
    <span className="numerator" {...attributes}>
      {children}
    </span>
  );
};

export default { slateDOM: dom, MathElement: Element };

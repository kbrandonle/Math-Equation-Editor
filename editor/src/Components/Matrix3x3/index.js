import React from "react";
import katex from 'katex'
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import ReactDOM from 'react-dom';
import matrixElement from "../AntonioElement";
import antonioElement from "../AntonioElement";
import barberElement from "../AntonioElement";
import Table from 'react-bootstrap/Table'
import createTable from '../AntonioTable'
import "./index.css";

const dom = () => [
  {
  type: "math",
  subtype: "matrix3x3",
  children: [matrixElement.slateDOM(), ],
},
  {
    children: [
      {        
        text: "",
      },
      {        
        text: "",
      },
    ],
  }
];



const Element = (attributes, children) => {   
  var Latex = require('react-latex');
  
  return (
    <span {...attributes}>
      <span className = "inline" style={{ userSelect: "element" }} contentEditable={false}>  
       <Latex displayMode={false}>{`$$ \\Biggr[ $$`}</Latex>
      </span>
      
      <table id = "myTable" className = "inline2" colspan="4" rowspan="4" rules="">
      <tr>        
      <td>{children}</td>
      <td>{children}</td>
      <td>{children}</td>
      </tr>
      <tr>        
      <td>{children}</td>
      <td>{children}</td>
      <td>{children}</td>
      </tr>
      <tr>        
      <td>{children}</td>
      <td>{children}</td>
      <td>{children}</td>
      </tr>
      </table>
     

      <span className= "inline3" style={{ userSelect: "element" }} contentEditable={false}>  
        <Latex displayMode={false}>{`$$ \\Biggr] $$`}</Latex>
      </span>
    </span>

    
  );
};

const icon = (attributes, children) => {
  var Latex = require('react-latex');
  return (
    <span {...attributes}>
      <span>  <Latex displayMode={true}>{`$$
    \\left[
    \\begin{array}{cc|c}
        \u2b1a & \u2b1a & \u2b1a \\\\
        \u2b1a & \u2b1a & \u2b1a \\\\
        \u2b1a & \u2b1a & \u2b1a \\\\
    \\end{array}
    \\right]
  $$`}</Latex></span>
      {children}
    </span>
  );};
  

export default { slateDOM: dom, MathElement: Element, Icon: icon };
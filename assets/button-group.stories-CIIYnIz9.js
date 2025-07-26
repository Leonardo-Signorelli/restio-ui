import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-Bxccsplp.js";import{B as o}from"./button-group-DoOVdlCQ.js";import"./button-Dn1ODst6.js";import"./icon-6NFk8oT5.js";const g={title:"Components/ButtonGroup",component:o,tags:["autodocs"],args:{options:[{value:"apple"},{value:"banana"},{value:"cherry"}],variant:"base",size:"medium",alignContent:"center"}},t={render:n=>{const[s,r]=c.useState("banana");return l.jsx(o,{...n,value:s,onChange:e=>{console.log("Selected:",e),r(e)}})}},a={render:n=>{const[s,r]=c.useState("banana");return l.jsx(o,{...n,value:s,disabled:!0,onChange:e=>{console.log("Selected:",e),r(e)}})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState("banana");
    return <ButtonGroup {...args} value={selected} onChange={val => {
      console.log("Selected:", val);
      setSelected(val);
    }} />;
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState("banana");
    return <ButtonGroup {...args} value={selected} disabled onChange={val => {
      console.log("Selected:", val);
      setSelected(val);
    }} />;
  }
}`,...a.parameters?.docs?.source}}};const S=["Default","Disabled"];export{t as Default,a as Disabled,S as __namedExportsOrder,g as default};

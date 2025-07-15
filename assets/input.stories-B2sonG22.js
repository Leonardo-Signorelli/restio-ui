import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-nkf9SpWr.js";import{I as l}from"./input-BzBG1riW.js";import"./icon-CjURIumF.js";const g={title:"Components/Input",component:l,argTypes:{}},a={render:e=>{const[t,r]=o.useState(e.value??"");return s.jsx(l,{...e,value:t,onChange:r})},args:{value:"Default input",leadingIcon:"check",trailingIcon:"close"}},n={render:e=>{const[t,r]=o.useState(e.value??"");return s.jsx(l,{...e,value:t,onChange:r})},args:{value:"Default input",leadingIcon:"check",trailingIcon:"close",helperText:"Helper text down here",label:"Label",placeholder:"Write something..."}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? "");
    return <Input {...args} value={value} onChange={setValue} />;
  },
  args: {
    value: "Default input",
    leadingIcon: "check",
    trailingIcon: "close"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? "");
    return <Input {...args} value={value} onChange={setValue} />;
  },
  args: {
    value: "Default input",
    leadingIcon: "check",
    trailingIcon: "close",
    helperText: "Helper text down here",
    label: "Label",
    placeholder: "Write something..."
  }
}`,...n.parameters?.docs?.source}}};const m=["Default","FullInput"];export{a as Default,n as FullInput,m as __namedExportsOrder,g as default};

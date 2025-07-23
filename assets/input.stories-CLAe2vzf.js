import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-DXGdv9s6.js";import{I as s}from"./input-0b3KJ0dD.js";import"./icon-D_wT1Xp1.js";const g={title:"Components/Input",component:s,argTypes:{}},r={render:e=>{const[a,n]=u.useState(e.value??"");return o.jsx(s,{...e,value:a,onChange:n})},args:{value:"Default input",leadingIcon:"check",trailingIcon:"close"}},t={render:e=>{const[a,n]=u.useState(e.value??"");return o.jsx(s,{...e,value:a,onChange:n})},args:{value:"Default input",leadingIcon:"check",trailingIcon:"close",helperText:"Helper text down here",label:"Label",placeholder:"Write something..."}},l={render:e=>{const[a,n]=u.useState(e.value??"");return o.jsx(s,{...e,value:a,onChange:n})},args:{value:"Default input",leadingIcon:"check",trailingIcon:"close",helperText:"Helper text down here",label:"Label",placeholder:"Write something...",disabled:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? "");
    return <Input {...args} value={value} onChange={setValue} />;
  },
  args: {
    value: "Default input",
    leadingIcon: "check",
    trailingIcon: "close"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    placeholder: "Write something...",
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};const h=["Default","FullInput","Disabled"];export{r as Default,l as Disabled,t as FullInput,h as __namedExportsOrder,g as default};

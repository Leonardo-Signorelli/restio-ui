import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-BIhWZDqy.js";import{I as l}from"./input-D04FMkL5.js";import"./icon-j2u9j-Zf.js";const x={title:"Components/Input",component:l,argTypes:{}},a={render:e=>{const[t,r]=m.useState(e.value??"");return g.jsx(l,{...e,value:t,onChange:r})},args:{value:"Default input",leadingIcon:"check",trailingIcon:"close"}},n={render:e=>{const[t,r]=m.useState(e.value??"");return g.jsx(l,{...e,value:t,onChange:r})},args:{value:"Default input",leadingIcon:"check",trailingIcon:"close",helperText:"Helper text down here",label:"Label",placeholder:"Write something..."}};var s,o,u;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? "");
    return <Input {...args} value={value} onChange={setValue} />;
  },
  args: {
    value: "Default input",
    leadingIcon: "check",
    trailingIcon: "close"
  }
}`,...(u=(o=a.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};var c,p,i;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(i=(p=n.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const f=["Default","FullInput"];export{a as Default,n as FullInput,f as __namedExportsOrder,x as default};

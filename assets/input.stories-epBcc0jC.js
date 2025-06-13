import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-Dz1KzJkU.js";import{I as s}from"./input-BHPFFH3c.js";import"./icon-CmlxIW2t.js";const x={title:"Components/Input",component:s,argTypes:{}},a={render:e=>{const[r,t]=m.useState(e.value??"");return g.jsx(s,{...e,value:r,onChange:t})},args:{value:"Default input",leadingIcon:"search",trailingIcon:"close"}},n={render:e=>{const[r,t]=m.useState(e.value??"");return g.jsx(s,{...e,value:r,onChange:t})},args:{value:"Default input",leadingIcon:"search",trailingIcon:"close",helperText:"Helper text down here",label:"Label",placeholder:"Write something..."}};var l,o,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? "");
    return <Input {...args} value={value} onChange={setValue} />;
  },
  args: {
    value: "Default input",
    leadingIcon: "search",
    trailingIcon: "close"
  }
}`,...(u=(o=a.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};var c,p,i;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? "");
    return <Input {...args} value={value} onChange={setValue} />;
  },
  args: {
    value: "Default input",
    leadingIcon: "search",
    trailingIcon: "close",
    helperText: "Helper text down here",
    label: "Label",
    placeholder: "Write something..."
  }
}`,...(i=(p=n.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const f=["Default","FullInput"];export{a as Default,n as FullInput,f as __namedExportsOrder,x as default};

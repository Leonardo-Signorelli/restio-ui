import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{B as a}from"./button-DIOJAXd_.js";import"./iframe-Dz1KzJkU.js";import"./icon-CmlxIW2t.js";const g={title:"Components/Button/Multi",component:a,argTypes:{variant:{control:{type:"select"},options:["primary","secondary","ghost"]},children:{control:"text"}}},n={render:e=>t.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[t.jsx(a,{...e,variant:"base",children:"Base Button"}),t.jsx(a,{...e,variant:"primary",children:"Primary Button"}),t.jsx(a,{...e,variant:"danger",children:"Ghost Button"})]}),args:{value:"Button"}},r={args:{children:"Ghost Button",variant:"danger",value:"Button"}};var o,s,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "1rem"
  }}>
      <Button {...args} variant="base">
        Base Button
      </Button>
      <Button {...args} variant="primary">
        Primary Button
      </Button>
      <Button {...args} variant="danger">
        Ghost Button
      </Button>
    </div>,
  args: {
    value: "Button"
  }
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var u,c,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Ghost Button",
    variant: "danger",
    value: "Button"
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const v=["Variant","Ghost"];export{r as Ghost,n as Variant,v as __namedExportsOrder,g as default};

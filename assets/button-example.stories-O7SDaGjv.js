import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{B as e}from"./button-B9Rk_RGK.js";import"./icon-DIYehHzQ.js";import"./iframe-IyVqLIBO.js";const h={title:"Components/Button",component:e,argTypes:{variant:{control:{type:"select"},options:["primary","secondary","ghost"]},children:{control:"text"}}},a={render:t=>n.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[n.jsx(e,{...t,variant:"base",children:"Base Button"}),n.jsx(e,{...t,variant:"invisible",children:"Invisible Button"}),n.jsx(e,{...t,variant:"primary",children:"Primary Button"}),n.jsx(e,{...t,variant:"danger",children:"Danger Button"}),n.jsx(e,{...t,variant:"link",children:"Link Button"})]}),args:{value:"Button"}},r={render:t=>n.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[n.jsx(e,{...t,size:"small",children:"Small Button"}),n.jsx(e,{...t,size:"medium",children:"Medium Button"}),n.jsx(e,{...t,size:"large",children:"Large Button"})]}),args:{value:"Button"}},i={render:t=>n.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[n.jsx(e,{...t,leadingVisual:"check",children:"Leading Visual"}),n.jsx(e,{...t,trailingVisual:"check",children:"Trailing Visual"})]}),args:{value:"Button"}};var s,o,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "1rem"
  }}>
      <Button {...args} variant="base">
        Base Button
      </Button>
      <Button {...args} variant="invisible">
        Invisible Button
      </Button>
      <Button {...args} variant="primary">
        Primary Button
      </Button>
      <Button {...args} variant="danger">
        Danger Button
      </Button>
      <Button {...args} variant="link">
        Link Button
      </Button>
    </div>,
  args: {
    value: "Button"
  }
}`,...(l=(o=a.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var u,d,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "1rem"
  }}>
      <Button {...args} size="small">
        Small Button
      </Button>
      <Button {...args} size="medium">
        Medium Button
      </Button>
      <Button {...args} size="large">
        Large Button
      </Button>
    </div>,
  args: {
    value: "Button"
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var B,m,g;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "1rem"
  }}>
      <Button {...args} leadingVisual="check">
        Leading Visual
      </Button>
      <Button {...args} trailingVisual="check">
        Trailing Visual
      </Button>
    </div>,
  args: {
    value: "Button"
  }
}`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const j=["Variant","Sizing","VisualIcon"];export{r as Sizing,a as Variant,i as VisualIcon,j as __namedExportsOrder,h as default};

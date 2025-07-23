import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{B as e}from"./button-ZNQOOe5H.js";import"./icon-D_wT1Xp1.js";import"./iframe-DXGdv9s6.js";const d={title:"Components/Button",component:e,argTypes:{variant:{control:{type:"select"},options:["primary","secondary","ghost"]},children:{control:"text"}}},a={render:t=>n.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[n.jsx(e,{...t,variant:"base",children:"Base Button"}),n.jsx(e,{...t,variant:"invisible",children:"Invisible Button"}),n.jsx(e,{...t,variant:"primary",children:"Primary Button"}),n.jsx(e,{...t,variant:"danger",children:"Danger Button"}),n.jsx(e,{...t,variant:"link",children:"Link Button"})]}),args:{value:"Button"}},r={render:t=>n.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[n.jsx(e,{...t,size:"small",children:"Small Button"}),n.jsx(e,{...t,size:"medium",children:"Medium Button"}),n.jsx(e,{...t,size:"large",children:"Large Button"})]}),args:{value:"Button"}},i={render:t=>n.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[n.jsx(e,{...t,leadingVisual:"check",children:"Leading Visual"}),n.jsx(e,{...t,trailingVisual:"check",children:"Trailing Visual"})]}),args:{value:"Button"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const c=["Variant","Sizing","VisualIcon"];export{r as Sizing,a as Variant,i as VisualIcon,c as __namedExportsOrder,d as default};

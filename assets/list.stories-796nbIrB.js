import{L as a}from"./list-ATbdMa6t.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-DXGdv9s6.js";import"./input-0b3KJ0dD.js";import"./icon-D_wT1Xp1.js";const m={title:"Components/List",component:a,tags:["autodocs"],argTypes:{}},t=[{value:"List component"},{value:"Value for test"},{value:"Option number 3"}],e={args:{options:t}},o={args:{options:t,onCreate:r=>{alert(`Hai creato: ${r}`)}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    options: mockedOptions
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    options: mockedOptions,
    onCreate: (value: string) => {
      alert(\`Hai creato: \${value}\`);
    }
  }
}`,...o.parameters?.docs?.source}}};const u=["Default","WithCreate"];export{e as Default,o as WithCreate,u as __namedExportsOrder,m as default};

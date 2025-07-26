import{L as a}from"./list-CD2JO__8.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-Bxccsplp.js";import"./input-BZ3Aepug.js";import"./icon-6NFk8oT5.js";import"./helper-text-BJVs1rhY.js";const u={title:"Components/List",component:a,tags:["autodocs"],argTypes:{}},t=[{value:"List component"},{value:"Value for test"},{value:"Option number 3"}],e={args:{options:t}},o={args:{options:t,onCreate:r=>{alert(`Hai creato: ${r}`)}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const l=["Default","WithCreate"];export{e as Default,o as WithCreate,l as __namedExportsOrder,u as default};

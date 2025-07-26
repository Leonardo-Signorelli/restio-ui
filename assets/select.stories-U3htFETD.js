import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{S as r}from"./select-AURqRJrR.js";import"./iframe-Bxccsplp.js";import"./list-CD2JO__8.js";import"./input-BZ3Aepug.js";import"./icon-6NFk8oT5.js";import"./helper-text-BJVs1rhY.js";import"./button-Dn1ODst6.js";const{useArgs:d}=__STORYBOOK_MODULE_PREVIEW_API__,b={title:"Components/Select Multi-Single",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},l=({...a})=>{const[p,s]=d(),i=u=>{s({value:u})};return c.jsx(r,{...a,value:p.value,onChange:i})},e={args:{value:"option1",options:[{value:"option1"},{value:"option2"},{value:"option3"}]},render:l},o={args:{value:"option1",helperText:"The list of options helps you choose one",label:"Option Selector",options:[{value:"option1"},{value:"option2"},{value:"option3"}]},render:l},n={args:{value:"option1",helperText:"The list of options helps you choose one",label:"Option Selector",disabled:!0,options:[{value:"option1"},{value:"option2"}]},render:l},t={args:{value:["option1","option3"],multiple:!0,helperText:"Select multiple options",label:"Multi Option Selector",options:[{value:"option1"},{value:"option2"},{value:"option3"},{value:"option4"}]},render:l};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    value: "option1",
    options: [{
      value: "option1"
    }, {
      value: "option2"
    }, {
      value: "option3"
    }]
  },
  render: ControlledSelect
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: "option1",
    helperText: "The list of options helps you choose one",
    label: "Option Selector",
    options: [{
      value: "option1"
    }, {
      value: "option2"
    }, {
      value: "option3"
    }]
  },
  render: ControlledSelect
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: "option1",
    helperText: "The list of options helps you choose one",
    label: "Option Selector",
    disabled: true,
    options: [{
      value: "option1"
    }, {
      value: "option2"
    }]
  },
  render: ControlledSelect
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: ["option1", "option3"],
    multiple: true,
    helperText: "Select multiple options",
    label: "Multi Option Selector",
    options: [{
      value: "option1"
    }, {
      value: "option2"
    }, {
      value: "option3"
    }, {
      value: "option4"
    }]
  },
  render: ControlledSelect
}`,...t.parameters?.docs?.source}}};const f=["Default","FullSelect","Disabled","MultipleSelect"];export{e as Default,n as Disabled,o as FullSelect,t as MultipleSelect,f as __namedExportsOrder,b as default};

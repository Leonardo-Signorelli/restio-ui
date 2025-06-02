import{j as h}from"./jsx-runtime-D_zvdyIk.js";const e=({variant:n="primary",children:y,...g})=>h.jsx("button",{className:`button button--${n}`,...g,children:y});try{e.displayName="Button",e.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"ghost"'}]}}}}}catch{}const B={title:"Components/Button",component:e,argTypes:{variant:{control:{type:"select"},options:["primary","secondary","ghost"]},children:{control:"text"}}},r={args:{variant:"primary",children:"Primary Button"}},a={args:{variant:"secondary",children:"Secondary Button"}},t={args:{variant:"ghost",children:"Ghost Button"}};var o,s,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Primary Button"
  }
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var i,d,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary Button"
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    children: "Ghost Button"
  }
}`,...(l=(u=t.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const _=["Primary","Secondary","Ghost"];export{t as Ghost,r as Primary,a as Secondary,_ as __namedExportsOrder,B as default};

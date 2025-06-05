import{j as e}from"./jsx-runtime-D_zvdyIk.js";const o={title:"Design System/Spacing"},r=["--space-0","--space-1","--space-2","--space-3","--space-4","--space-5","--space-6","--space-8","--space-10"],i=({name:s})=>e.jsxs("div",{className:"token-swatch",children:[e.jsx("div",{className:"spacing-box",style:{height:`var(${s})`,width:`var(${s})`}}),e.jsx("div",{className:"spacing-label",children:s}),e.jsx("div",{className:"spacing-value",children:getComputedStyle(document.documentElement).getPropertyValue(s)})]}),a=()=>e.jsxs("div",{className:"theme-wrapper",children:[e.jsx("h3",{children:"Spacing Tokens"}),e.jsx("div",{className:"swatch-grid",children:r.map(s=>e.jsx(i,{name:s},s))})]});var c,n,t;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <div className={"theme-wrapper"}>
      <h3>Spacing Tokens</h3>
      <div className="swatch-grid">
        {spacingTokens.map(token => <SpacingSwatch key={token} name={token} />)}
      </div>
    </div>;
}`,...(t=(n=a.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const d=["Spacing"];export{a as Spacing,d as __namedExportsOrder,o as default};

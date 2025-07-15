import{j as s}from"./jsx-runtime-D_zvdyIk.js";const t={title:"Design System/Radius"},e=["--rst-radius-sm","--rst-radius-md","--rst-radius-lg","--rst-radius-full"],d=({name:a})=>s.jsxs("div",{className:"token-swatch",children:[s.jsx("div",{className:"radius-box",style:{width:"64px",height:"64px",backgroundColor:"var(--primary-500)",borderRadius:`var(${a})`}}),s.jsx("div",{className:"radius-label",children:a})]}),r=()=>s.jsxs("div",{className:"theme-wrapper",children:[s.jsx("h3",{children:"Radius Tokens"}),s.jsx("div",{className:"swatch-grid",children:e.map(a=>s.jsx(d,{name:a},a))})]});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <div className={"theme-wrapper"}>
      <h3>Radius Tokens</h3>
      <div className="swatch-grid">
        {radiusTokens.map(token => <RadiusSwatch key={token} name={token} />)}
      </div>
    </div>;
}`,...r.parameters?.docs?.source}}};const n=["Radius"];export{r as Radius,n as __namedExportsOrder,t as default};

import{j as s}from"./jsx-runtime-D_zvdyIk.js";const c={title:"Design System/Radius"},t=["--rst-radius-sm","--rst-radius-md","--rst-radius-lg","--rst-radius-full"],n=({name:a})=>s.jsxs("div",{className:"token-swatch",children:[s.jsx("div",{className:"radius-box",style:{width:"64px",height:"64px",backgroundColor:"var(--primary-500)",borderRadius:`var(${a})`}}),s.jsx("div",{className:"radius-label",children:a})]}),r=()=>s.jsxs("div",{className:"theme-wrapper",children:[s.jsx("h3",{children:"Radius Tokens"}),s.jsx("div",{className:"swatch-grid",children:t.map(a=>s.jsx(n,{name:a},a))})]});var e,d,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  return <div className={"theme-wrapper"}>
      <h3>Radius Tokens</h3>
      <div className="swatch-grid">
        {radiusTokens.map(token => <RadiusSwatch key={token} name={token} />)}
      </div>
    </div>;
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const u=["Radius"];export{r as Radius,u as __namedExportsOrder,c as default};

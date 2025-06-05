import{j as s}from"./jsx-runtime-D_zvdyIk.js";const c={title:"Design System/Radius"},t=["--radius-sm","--radius-md","--radius-lg","--radius-full"],n=({name:a})=>s.jsxs("div",{className:"token-swatch",children:[s.jsx("div",{className:"radius-box",style:{width:"64px",height:"64px",backgroundColor:"var(--primary-500)",borderRadius:`var(${a})`}}),s.jsx("div",{className:"radius-label",children:a})]}),e=()=>s.jsxs("div",{className:"theme-wrapper",children:[s.jsx("h3",{children:"Radius Tokens"}),s.jsx("div",{className:"swatch-grid",children:t.map(a=>s.jsx(n,{name:a},a))})]});var r,d,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  return <div className={"theme-wrapper"}>
      <h3>Radius Tokens</h3>
      <div className="swatch-grid">
        {radiusTokens.map(token => <RadiusSwatch key={token} name={token} />)}
      </div>
    </div>;
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const u=["Radius"];export{e as Radius,u as __namedExportsOrder,c as default};

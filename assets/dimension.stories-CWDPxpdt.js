import{j as s}from"./jsx-runtime-D_zvdyIk.js";const i={title:"Design System/dimension"},r=["--rst-space-0","--rst-space-1","--rst-space-2","--rst-space-3","--rst-space-4","--rst-space-5","--rst-space-6","--rst-space-8","--rst-space-10"],e=()=>s.jsxs("div",{className:"theme-wrapper",children:[s.jsx("h3",{children:"dimension Tokens"}),s.jsx("div",{className:"swatch-grid",children:r.map(n=>s.jsx("dimensionSwatch",{name:n},n))})]});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  return <div className={"theme-wrapper"}>
      <h3>dimension Tokens</h3>
      <div className="swatch-grid">
        {dimensionTokens.map(token => <dimensionSwatch key={token} name={token} />)}
      </div>
    </div>;
}`,...e.parameters?.docs?.source}}};const t=["dimension"];export{t as __namedExportsOrder,i as default,e as dimension};

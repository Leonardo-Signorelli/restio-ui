import{j as e}from"./jsx-runtime-D_zvdyIk.js";const m={title:"Design System/dimension"},r=["--space-0","--space-1","--space-2","--space-3","--space-4","--space-5","--space-6","--space-8","--space-10"],s=()=>e.jsxs("div",{className:"theme-wrapper",children:[e.jsx("h3",{children:"dimension Tokens"}),e.jsx("div",{className:"swatch-grid",children:r.map(n=>e.jsx("dimensionSwatch",{name:n},n))})]});var a,i,o;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <div className={"theme-wrapper"}>
      <h3>dimension Tokens</h3>
      <div className="swatch-grid">
        {dimensionTokens.map(token => <dimensionSwatch key={token} name={token} />)}
      </div>
    </div>;
}`,...(o=(i=s.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const t=["dimension"];export{t as __namedExportsOrder,m as default,s as dimension};

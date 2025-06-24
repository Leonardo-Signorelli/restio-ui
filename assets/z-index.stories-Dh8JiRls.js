import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-DFerBulm.js";const p={title:"Design System/Z-Index"},i=["--rst-z-base","--rst-z-dropdown","--rst-z-sticky","--rst-z-overlay","--rst-z-tooltip","--rst-z-modal"],l=({name:s})=>{const n=getComputedStyle(document.documentElement).getPropertyValue(s).trim();return e.jsxs("div",{className:"token-swatch",children:[e.jsx("div",{className:"zindex-box"}),e.jsx("div",{className:"zindex-label",children:s}),e.jsx("div",{className:"zindex-value",children:n})]})},r=()=>{const[s,n]=c.useState(!1);return e.jsxs("div",{className:s?"dark theme-wrapper":"theme-wrapper",children:[e.jsx("div",{className:"toggle-container",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:s,onChange:()=>n(a=>!a)}),"Dark Mode"]})}),e.jsx("h3",{children:"Z-Index Tokens"}),e.jsx("div",{className:"swatch-grid",children:i.map(a=>e.jsx(l,{name:a},a))})]})};var t,d,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const [darkMode, setDarkMode] = useState(false);
  return <div className={darkMode ? "dark theme-wrapper" : "theme-wrapper"}>
      <div className="toggle-container">
        <label>
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(prev => !prev)} />
          Dark Mode
        </label>
      </div>

      <h3>Z-Index Tokens</h3>
      <div className="swatch-grid">
        {zIndexTokens.map(token => <ZIndexSwatch key={token} name={token} />)}
      </div>
    </div>;
}`,...(o=(d=r.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};const h=["ZIndex"];export{r as ZIndex,h as __namedExportsOrder,p as default};

import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-DFerBulm.js";const m={title:"Design System/Elevation"},l=["--rst-elevation-1","--rst-elevation-2","--rst-elevation-3","--rst-elevation-4"],c=({name:a})=>e.jsxs("div",{className:"token-swatch",children:[e.jsx("div",{className:"elevation-box",style:{width:"96px",height:"64px",backgroundColor:"var(--white)",boxShadow:`var(${a})`,borderRadius:"var(--rst-radius-md)"}}),e.jsx("div",{className:"elevation-label",children:a})]}),t=()=>{const[a,i]=d.useState(!1);return e.jsxs("div",{className:a?"dark theme-wrapper":"theme-wrapper",children:[e.jsx("div",{className:"toggle-container",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:a,onChange:()=>i(s=>!s)}),"Dark Mode"]})}),e.jsx("h3",{children:"Elevation Tokens (Shadows)"}),e.jsx("div",{className:"swatch-grid",children:l.map(s=>e.jsx(c,{name:s},s))})]})};var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [darkMode, setDarkMode] = useState(false);
  return <div className={darkMode ? "dark theme-wrapper" : "theme-wrapper"}>
      <div className="toggle-container">
        <label>
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(prev => !prev)} />
          Dark Mode
        </label>
      </div>

      <h3>Elevation Tokens (Shadows)</h3>
      <div className="swatch-grid">
        {elevationTokens.map(token => <ElevationSwatch key={token} name={token} />)}
      </div>
    </div>;
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const p=["Elevation"];export{t as Elevation,p as __namedExportsOrder,m as default};

import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-BSBCLB1l.js";const c={title:"Design System/Elevation"},n=["--rst-elevation-1","--rst-elevation-2","--rst-elevation-3","--rst-elevation-4"],i=({name:a})=>e.jsxs("div",{className:"token-swatch",children:[e.jsx("div",{className:"elevation-box",style:{width:"96px",height:"64px",backgroundColor:"var(--white)",boxShadow:`var(${a})`,borderRadius:"var(--rst-radius-md)"}}),e.jsx("div",{className:"elevation-label",children:a})]}),t=()=>{const[a,r]=o.useState(!1);return e.jsxs("div",{className:a?"dark theme-wrapper":"theme-wrapper",children:[e.jsx("div",{className:"toggle-container",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:a,onChange:()=>r(s=>!s)}),"Dark Mode"]})}),e.jsx("h3",{children:"Elevation Tokens (Shadows)"}),e.jsx("div",{className:"swatch-grid",children:n.map(s=>e.jsx(i,{name:s},s))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};const v=["Elevation"];export{t as Elevation,v as __namedExportsOrder,c as default};

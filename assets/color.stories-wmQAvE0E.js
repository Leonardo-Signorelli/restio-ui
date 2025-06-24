import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-DFerBulm.js";const u={title:"Design System/Colors"},m={Backgrounds:["--rst-bgColor-default","--rst-bgColor-0","--rst-bgColor-primary"],Interactive:["--rst-interactive-default","--rst-interactive-hover","--rst-interactive-active","--rst-interactive-disabled"],Borders:["--rst-border-default","--rst-border-muted","--rst-border-subtle","--rst-border-primary"],Solid:["--rst-solid-neutral","--rst-solid-primary","--rst-solid-positive","--rst-solid-warning","--rst-solid-danger"],Text:["--rst-text-on-bg","--rst-text-muted","--rst-text-on-primary","--rst-text-disabled"],Shadows:["--rst-overlay-low","--rst-overlay-mid","--rst-overlay-high","--shadow-soft","--shadow-medium","--shadow-hard"]},p=({name:r})=>e.jsxs("div",{className:"token-swatch",children:[e.jsx("div",{className:"color-box",style:{backgroundColor:`var(${r})`}}),e.jsx("div",{className:"color-label",children:r})]}),t=()=>{const[r,i]=c.useState(!1);return e.jsxs("div",{className:r?"dark theme-wrapper":"theme-wrapper",children:[e.jsx("div",{className:"toggle-container",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:r,onChange:()=>i(s=>!s)}),"Dark Mode"]})}),Object.entries(m).map(([s,l])=>e.jsxs("div",{children:[e.jsx("h3",{children:s}),e.jsx("div",{className:"swatch-grid",children:l.map(o=>e.jsx(p,{name:o},o))})]},s))]})};var a,d,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const [darkMode, setDarkMode] = useState(false);
  return <div className={darkMode ? "dark theme-wrapper" : "theme-wrapper"}>
      <div className="toggle-container">
        <label>
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(prev => !prev)} />
          Dark Mode
        </label>
      </div>

      {Object.entries(colorGroups).map(([groupName, tokens]) => <div key={groupName}>
          <h3>{groupName}</h3>
          <div className="swatch-grid">
            {tokens.map(token => <ColorSwatch key={token} name={token} />)}
          </div>
        </div>)}
    </div>;
}`,...(n=(d=t.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const k=["Colors"];export{t as Colors,k as __namedExportsOrder,u as default};

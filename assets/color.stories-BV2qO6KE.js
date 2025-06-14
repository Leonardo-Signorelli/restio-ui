import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-IyVqLIBO.js";const u={title:"Design System/Colors"},m={Backgrounds:["--bgColor-default","--bgColor-0","--bgColor-primary"],Interactive:["--interactive-default","--interactive-hover","--interactive-active","--interactive-disabled"],Borders:["--border-default","--border-muted","--border-subtle","--border-primary"],Solid:["--solid-neutral","--solid-primary","--solid-positive","--solid-warning","--solid-danger"],Text:["--text-on-bg","--text-muted","--text-on-primary","--text-disabled"],Shadows:["--overlay-low","--overlay-mid","--overlay-high","--shadow-soft","--shadow-medium","--shadow-hard"]},p=({name:r})=>e.jsxs("div",{className:"token-swatch",children:[e.jsx("div",{className:"color-box",style:{backgroundColor:`var(${r})`}}),e.jsx("div",{className:"color-label",children:r})]}),a=()=>{const[r,i]=c.useState(!1);return e.jsxs("div",{className:r?"dark theme-wrapper":"theme-wrapper",children:[e.jsx("div",{className:"toggle-container",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:r,onChange:()=>i(o=>!o)}),"Dark Mode"]})}),Object.entries(m).map(([o,l])=>e.jsxs("div",{children:[e.jsx("h3",{children:o}),e.jsx("div",{className:"swatch-grid",children:l.map(s=>e.jsx(p,{name:s},s))})]},o))]})};var t,d,n;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(n=(d=a.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const k=["Colors"];export{a as Colors,k as __namedExportsOrder,u as default};

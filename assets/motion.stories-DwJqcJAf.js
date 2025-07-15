import{j as s}from"./jsx-runtime-D_zvdyIk.js";const c={title:"Design System/Motion"},i=["--rst-ease-in-out","--rst-ease-out","--rst-ease-in","--rst-duration-fast","--rst-duration-base","--rst-duration-slow"],e=t=>t.startsWith("--rst-ease"),a=t=>t.startsWith("--rst-duration"),r=({name:t})=>{const n=getComputedStyle(document.documentElement).getPropertyValue(t).trim();return s.jsxs("div",{className:"token-swatch motion-swatch",children:[s.jsx("div",{className:"motion-label",children:t}),s.jsx("div",{className:"motion-value",children:n}),e(t)&&s.jsx("div",{className:"motion-box",style:{animationTimingFunction:`var(${t})`,animationDuration:"1s"}}),a(t)&&s.jsx("div",{className:"motion-box",style:{animationTimingFunction:"ease-in-out",animationDuration:`var(${t})`}})]})},o=()=>s.jsxs("div",{className:"theme-wrapper",children:[s.jsx("h3",{children:"Motion Tokens (Easing & Duration)"}),s.jsx("div",{className:"swatch-grid motion-grid",children:i.map(t=>s.jsx(r,{name:t},t))})]});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <div className="theme-wrapper">
      <h3>Motion Tokens (Easing & Duration)</h3>
      <div className="swatch-grid motion-grid">
        {motionTokens.map(token => <MotionSwatch key={token} name={token} />)}
      </div>
    </div>;
}`,...o.parameters?.docs?.source}}};const d=["Motion"];export{o as Motion,d as __namedExportsOrder,c as default};

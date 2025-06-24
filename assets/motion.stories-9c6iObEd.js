import{j as s}from"./jsx-runtime-D_zvdyIk.js";const u={title:"Design System/Motion"},r=["--rst-ease-in-out","--rst-ease-out","--rst-ease-in","--rst-duration-fast","--rst-duration-base","--rst-duration-slow"],m=t=>t.startsWith("--rst-ease"),c=t=>t.startsWith("--rst-duration"),d=({name:t})=>{const a=getComputedStyle(document.documentElement).getPropertyValue(t).trim();return s.jsxs("div",{className:"token-swatch motion-swatch",children:[s.jsx("div",{className:"motion-label",children:t}),s.jsx("div",{className:"motion-value",children:a}),m(t)&&s.jsx("div",{className:"motion-box",style:{animationTimingFunction:`var(${t})`,animationDuration:"1s"}}),c(t)&&s.jsx("div",{className:"motion-box",style:{animationTimingFunction:"ease-in-out",animationDuration:`var(${t})`}})]})},o=()=>s.jsxs("div",{className:"theme-wrapper",children:[s.jsx("h3",{children:"Motion Tokens (Easing & Duration)"}),s.jsx("div",{className:"swatch-grid motion-grid",children:r.map(t=>s.jsx(d,{name:t},t))})]});var n,i,e;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <div className="theme-wrapper">
      <h3>Motion Tokens (Easing & Duration)</h3>
      <div className="swatch-grid motion-grid">
        {motionTokens.map(token => <MotionSwatch key={token} name={token} />)}
      </div>
    </div>;
}`,...(e=(i=o.parameters)==null?void 0:i.docs)==null?void 0:e.source}}};const h=["Motion"];export{o as Motion,h as __namedExportsOrder,u as default};

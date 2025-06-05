import{j as o}from"./jsx-runtime-D_zvdyIk.js";const u={title:"Design System/Motion"},r=["--ease-in-out","--ease-out","--ease-in","--duration-fast","--duration-base","--duration-slow"],m=t=>t.startsWith("--ease"),c=t=>t.startsWith("--duration"),d=({name:t})=>{const a=getComputedStyle(document.documentElement).getPropertyValue(t).trim();return o.jsxs("div",{className:"token-swatch motion-swatch",children:[o.jsx("div",{className:"motion-label",children:t}),o.jsx("div",{className:"motion-value",children:a}),m(t)&&o.jsx("div",{className:"motion-box",style:{animationTimingFunction:`var(${t})`,animationDuration:"1s"}}),c(t)&&o.jsx("div",{className:"motion-box",style:{animationTimingFunction:"ease-in-out",animationDuration:`var(${t})`}})]})},s=()=>o.jsxs("div",{className:"theme-wrapper",children:[o.jsx("h3",{children:"Motion Tokens (Easing & Duration)"}),o.jsx("div",{className:"swatch-grid motion-grid",children:r.map(t=>o.jsx(d,{name:t},t))})]});var n,i,e;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <div className="theme-wrapper">
      <h3>Motion Tokens (Easing & Duration)</h3>
      <div className="swatch-grid motion-grid">
        {motionTokens.map(token => <MotionSwatch key={token} name={token} />)}
      </div>
    </div>;
}`,...(e=(i=s.parameters)==null?void 0:i.docs)==null?void 0:e.source}}};const h=["Motion"];export{s as Motion,h as __namedExportsOrder,u as default};

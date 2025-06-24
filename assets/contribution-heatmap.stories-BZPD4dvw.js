import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{e as S}from"./iframe-DFerBulm.js";const u={"rst-grid":"_rst-grid_8mmbv_1","rst-column":"_rst-column_8mmbv_7","rst-cell":"_rst-cell_8mmbv_13"};function $(r,a,e,t){if(r<=0)return"oklch(95% 0 0)";const o=Math.min(r/a,1),m=75-Math.ceil(o*e)*(50/e);return t.replace(/oklch\([^%]+%/,`oklch(${m}%`)}const p=({data:r,bands:a,color:e})=>{const t=S.useMemo(()=>Math.max(...r.flat().map(n=>n.count)),[r]),o={grid:u["rst-grid"],column:u["rst-column"],cell:u["rst-cell"]};return i.jsx("div",{className:`${o.grid}`,style:{gridTemplateColumns:`repeat(${r.length}, auto)`},children:r.map((n,m)=>i.jsx("div",{className:o.column,children:n.map((d,D)=>{const v=$(d.count,t,a,e);return i.jsx("div",{className:o.cell,title:`${d.day}: ${d.count}`,style:{backgroundColor:v}},D)})},m))})};try{p.displayName="ContributionHeatmap",p.__docgenInfo={description:"",displayName:"ContributionHeatmap",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ContributionMatrix"}},bands:{defaultValue:null,description:"",name:"bands",required:!0,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}}}}}catch{}const g=Array.from({length:12},(r,a)=>Array.from({length:7},(e,t)=>({day:`2025-06-${String(a*7+t+1).padStart(2,"0")}`,count:Math.floor(Math.random()*10)}))),N={title:"Components/Contribution Heatmap",component:p,argTypes:{bands:{control:{type:"number",min:1,max:10}},color:{control:"text"},data:{control:!1}}},s={args:{data:g,bands:4,color:"oklch(62% 0.18 132)"}},c={args:{data:g,bands:6,color:"oklch(62% 0.18 132)"}},l={args:{data:g,bands:4,color:"oklch(60% 0.2 260)"}};var b,h,_;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    data: exampleData,
    bands: 4,
    color: "oklch(62% 0.18 132)"
  }
}`,...(_=(h=s.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var f,x,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    data: exampleData,
    bands: 6,
    color: "oklch(62% 0.18 132)"
  }
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var C,k,M;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    data: exampleData,
    bands: 4,
    color: "oklch(60% 0.2 260)" // viola
  }
}`,...(M=(k=l.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};const q=["Default","MoreBands","DifferentColor"];export{s as Default,l as DifferentColor,c as MoreBands,q as __namedExportsOrder,N as default};

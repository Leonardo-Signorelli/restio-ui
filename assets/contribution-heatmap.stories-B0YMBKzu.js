import{j as h}from"./jsx-runtime-D_zvdyIk.js";import{e as D}from"./iframe-BIhWZDqy.js";const f={"rst-grid":"_rst-grid_8mmbv_1","rst-column":"_rst-column_8mmbv_7","rst-cell":"_rst-cell_8mmbv_13"};function Y(t,a,e,n){if(t<=0)return"oklch(95% 0 0)";const s=Math.min(t/a,1),c=75-Math.ceil(s*e)*(50/e);return n.replace(/oklch\([^%]+%/,`oklch(${c}%`)}function F(t="year",a){const e=a?new Date(a):new Date,n=t==="month"?O(e):t==="quarter"?A(e):B(e),s=t==="month"?30:t==="quarter"?90:365,o=[];for(let r=0;r<s;r++){const l=E(n,r);o.push({day:P(l),count:Math.floor(Math.random()*10)})}const c=[];for(let r=0;r<o.length;r+=7)c.push(o.slice(r,r+7));return c}function O(t){return new Date(t.getFullYear(),t.getMonth(),1)}function A(t){const a=Math.floor(t.getMonth()/3);return new Date(t.getFullYear(),a*3,1)}function B(t){return new Date(t.getFullYear(),0,1)}function E(t,a){const e=new Date(t);return e.setDate(e.getDate()+a),e}function P(t){const a=t.getFullYear(),e=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${a}-${e}-${n}`}const y=({data:t,bands:a,color:e,period:n,startDate:s})=>{const o=D.useMemo(()=>t??F(n,s),[t,n,s]),c=D.useMemo(()=>Math.max(...o.flat().map(l=>l.count)),[o]),r={grid:f["rst-grid"],column:f["rst-column"],cell:f["rst-cell"]};return h.jsx("div",{className:`${r.grid}`,style:{gridTemplateColumns:`repeat(${t.length}, auto)`},children:o.map((l,j)=>h.jsx("div",{className:r.column,children:l.map((g,N)=>{const V=Y(g.count,c,a,e);return h.jsx("div",{className:r.cell,title:`${g.day}: ${g.count}`,style:{backgroundColor:V}},N)})},j))})};try{y.displayName="ContributionHeatmap",y.__docgenInfo={description:"",displayName:"ContributionHeatmap",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ContributionData"}},bands:{defaultValue:null,description:"",name:"bands",required:!0,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},period:{defaultValue:null,description:"",name:"period",required:!1,type:{name:"enum",value:[{value:'"month"'},{value:'"quarter"'},{value:'"year"'}]}},startDate:{defaultValue:null,description:"",name:"startDate",required:!1,type:{name:"string"}}}}}catch{}const p=Array.from({length:12},(t,a)=>Array.from({length:7},(e,n)=>({day:`2025-06-${String(a*7+n+1).padStart(2,"0")}`,count:Math.floor(Math.random()*10)}))),Q={title:"Components/Contribution Heatmap",component:y,argTypes:{bands:{control:{type:"number",min:1,max:10}},color:{control:"text"},data:{control:!1},period:{control:"select",options:["month","quarter","year"]}}},u={args:{data:p,bands:4,color:"oklch(62% 0.18 132)"}},m={args:{data:p,bands:6,color:"oklch(62% 0.18 132)"}},d={args:{data:p,bands:4,color:"oklch(60% 0.2 260)"}},i={args:{data:p,bands:6,color:"oklch(62% 0.18 132)",period:"year",startDate:"today"}};var b,_,x;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    data: exampleData,
    bands: 4,
    color: "oklch(62% 0.18 132)"
  }
}`,...(x=(_=u.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var M,C,k;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    data: exampleData,
    bands: 6,
    color: "oklch(62% 0.18 132)"
  }
}`,...(k=(C=m.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var v,q,S;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    data: exampleData,
    bands: 4,
    color: "oklch(60% 0.2 260)" // viola
  }
}`,...(S=(q=d.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var $,w,H;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    data: exampleData,
    bands: 6,
    color: "oklch(62% 0.18 132)",
    period: "year",
    startDate: "today"
  }
}`,...(H=(w=i.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};const R=["Default","MoreBands","DifferentColor","Periods"];export{u as Default,d as DifferentColor,m as MoreBands,i as Periods,R as __namedExportsOrder,Q as default};

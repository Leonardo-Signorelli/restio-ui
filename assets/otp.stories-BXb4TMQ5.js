import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-OWh0RBB_.js";function l(t,r){const a=t[r];a&&a.focus()}function g(t,r){const a=t.replace(/\D/g,"");return Array.from({length:r},(u,p)=>a[p]||"")}try{l.displayName="focusInput",l.__docgenInfo={description:"Focuses the input at the specified index in the ref array.",displayName:"focusInput",props:{}}}catch{}try{g.displayName="processPastedValue",g.__docgenInfo={description:`Processes a pasted string and returns an array of characters to fill the OTP input.
Only numeric digits are retained.`,displayName:"processPastedValue",props:{}}}catch{}const y=({length:t=6,onChange:r,autoFocus:a=!0})=>{const[u,p]=m.useState(Array(t).fill("")),i=m.useRef([]),N=(n,e)=>{const s=n.replace(/\D/g,"").charAt(0);if(!s)return;const c=[...u];c[e]=s,p(c),r==null||r(c.join(""));const F=Math.min(e+1,t-1);e!==t-1&&l(i.current,F)},T=(n,e)=>{const s=n.key;if(s==="Backspace")if(n.preventDefault(),u[e]){const c=[...u];c[e]="",p(c),r==null||r(c.join(""))}else e>0&&l(i.current,e-1);s==="ArrowLeft"&&e>0&&(n.preventDefault(),l(i.current,e-1)),s==="ArrowRight"&&e<t-1&&(n.preventDefault(),l(i.current,e+1))},w=n=>{const e=i.current[n];e&&setTimeout(()=>{e.select()},0)},b=n=>{n.preventDefault();const e=n.clipboardData.getData("Text"),s=g(e,t);p(s),r==null||r(s.join(""));const c=Math.min(e.length,t-1);l(i.current,c)};return m.useEffect(()=>{a&&l(i.current,0)},[a]),o.jsx("div",{className:"otp-container",role:"group","aria-label":"Enter OTP code",children:Array.from({length:t}).map((n,e)=>o.jsx("input",{ref:s=>{i.current[e]=s},type:"text",inputMode:"numeric",autoComplete:"one-time-code","aria-label":`Digit ${e+1}`,className:"otp-input",maxLength:1,value:u[e],onChange:s=>N(s.target.value,e),onKeyDown:s=>T(s,e),onPaste:b,onFocus:()=>w(e)},e))})};try{y.displayName="OtpInput",y.__docgenInfo={description:`OTP Input component for entering one-time passwords or PIN codes.
Accessible and keyboard-friendly.`,displayName:"OtpInput",props:{length:{defaultValue:{value:"6"},description:"Number of input fields for the OTP",name:"length",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"Callback fired on OTP value change",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},autoFocus:{defaultValue:{value:"true"},description:"Automatically focus the first input",name:"autoFocus",required:!1,type:{name:"boolean"}}}}}catch{}const k={title:"Components/OtpInput",component:y,tags:["autodocs"],args:{length:6,autoFocus:!0}},d={render:t=>{const[r,a]=m.useState("");return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[o.jsx(y,{...t,onChange:a}),o.jsxs("p",{"aria-live":"polite",children:["Current OTP value: ",o.jsx("strong",{children:r})]})]})}},f={args:{length:4,autoFocus:!1},render:t=>{const[r,a]=m.useState("");return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[o.jsx(y,{...t,onChange:a}),o.jsxs("p",{"aria-live":"polite",children:["PIN: ",o.jsx("strong",{children:r})]})]})}};var v,_,h,I,x;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      alignItems: "center"
    }}>
        <OtpInput {...args} onChange={setValue} />
        <p aria-live="polite">
          Current OTP value: <strong>{value}</strong>
        </p>
      </div>;
  }
}`,...(h=(_=d.parameters)==null?void 0:_.docs)==null?void 0:h.source},description:{story:"Default story: OTP input with 6 fields, with a simple display of the current value.",...(x=(I=d.parameters)==null?void 0:I.docs)==null?void 0:x.description}}};var D,P,O,V,j;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    length: 4,
    autoFocus: false
  },
  render: args => {
    const [value, setValue] = useState("");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      alignItems: "center"
    }}>
        <OtpInput {...args} onChange={setValue} />
        <p aria-live="polite">
          PIN: <strong>{value}</strong>
        </p>
      </div>;
  }
}`,...(O=(P=f.parameters)==null?void 0:P.docs)==null?void 0:O.source},description:{story:"4-digit OTP story for short PINs.",...(j=(V=f.parameters)==null?void 0:V.docs)==null?void 0:j.description}}};const E=["Default","FourDigits"];export{d as Default,f as FourDigits,E as __namedExportsOrder,k as default};

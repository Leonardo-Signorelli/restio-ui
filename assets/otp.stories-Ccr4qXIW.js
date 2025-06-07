import{j as T}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./iframe-D-QGi9Gz.js";const g=({length:r=6,onChange:i,onComplete:c,ariaLabel:$="One-time password input",className:K=""})=>{const[o,y]=f.useState(""),d=f.useRef([]),n=f.useCallback(a=>{var e,t;a>=0&&a<r&&((e=d.current[a])==null||e.focus(),(t=d.current[a])==null||t.select())},[r]),M=(a,e)=>{const t=a.currentTarget.value;if(!/^\d*$/.test(t))return;let s=o;e>=s.length&&(s=s.padEnd(e,"")),s=s.substring(0,e)+t+s.substring(e+1),s=s.substring(0,r),y(s),i==null||i(s),t&&e<r-1&&n(e+1),s.length===r&&(c==null||c(s))},z=(a,e)=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(a.key)&&(a.preventDefault(),a.key==="ArrowLeft"&&e>0?n(e-1):a.key==="ArrowRight"&&e<r-1&&n(e+1)),a.key==="Backspace"){if(!o[e]&&e>0)n(e-1);else if(o[e]){const t=o.substring(0,e)+o.substring(e+1);y(t),i==null||i(t)}}else a.key==="Delete"&&e<r-1&&n(e+1)},B=a=>{a.preventDefault();const e=a.clipboardData.getData("text/plain").replace(/\D/g,"");if(!e)return;const t=e.substring(0,r);y(t),i==null||i(t),t.length===r&&(c==null||c(t));const s=Math.min(e.length,r)-1;n(s)},C=a=>{var e;(e=d.current[a])==null||e.select()};return f.useEffect(()=>{o.length<r&&n(Math.min(o.length,r-1))},[n,r,o]),T.jsx("div",{className:`otp-container ${K}`,"aria-label":$,role:"group",children:Array.from({length:r}).map((a,e)=>T.jsx("input",{ref:t=>{d.current[e]=t},type:"text",inputMode:"numeric",pattern:"[0-9]*",maxLength:1,value:o[e]||"",onInput:t=>M(t,e),onKeyDown:t=>z(t,e),onPaste:B,onFocus:()=>C(e),className:"otp-input","aria-label":`Digit ${e+1} of ${r}`,autoComplete:"one-time-code"},e))})};try{g.displayName="OTPComponent",g.__docgenInfo={description:"",displayName:"OTPComponent",props:{length:{defaultValue:{value:"6"},description:"Length of the OTP code (number of input fields)",name:"length",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:`Callback triggered when OTP value changes
@param value - The current OTP value`,name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onComplete:{defaultValue:null,description:`Callback triggered when OTP is completely filled
@param value - The complete OTP value`,name:"onComplete",required:!1,type:{name:"((value: string) => void)"}},ariaLabel:{defaultValue:{value:"One-time password input"},description:"ARIA label for the OTP container",name:"ariaLabel",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Class name for the container",name:"className",required:!1,type:{name:"string"}}}}}catch{}const H={title:"Components/OTP",component:g,tags:["autodocs"],argTypes:{length:{control:{type:"number",min:4,max:8,step:1},description:"Number of OTP digits"},onChange:{action:"changed",description:"Callback when OTP value changes"},onComplete:{action:"completed",description:"Callback when OTP is fully entered"},ariaLabel:{control:"text",description:"ARIA label for accessibility"},className:{control:"text",description:"Additional CSS class"}},parameters:{layout:"centered",docs:{description:{component:`
A customizable One-Time Password (OTP) input component with:
- Numeric-only input
- Paste support
- Keyboard navigation
- WCAG/WAI-ARIA compliance
- Value modification and overwrite
- Configurable length
        `}}}},b={render:r=>T.jsx(g,{...r})},l={...b,args:{length:6}},p={...b,args:{length:4},name:"4-Digit OTP"},u={...b,args:{length:8},name:"8-Digit OTP"},m={...b,args:{ariaLabel:"Please enter your verification code"},name:"With Custom ARIA Label"};var O,P,h,w,A;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Template,
  args: {
    length: 6
  }
}`,...(h=(P=l.parameters)==null?void 0:P.docs)==null?void 0:h.source},description:{story:"Default OTP with 6 digits",...(A=(w=l.parameters)==null?void 0:w.docs)==null?void 0:A.description}}};var v,D,L,I,k;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Template,
  args: {
    length: 4
  },
  name: "4-Digit OTP"
}`,...(L=(D=p.parameters)==null?void 0:D.docs)==null?void 0:L.source},description:{story:"OTP with 4 digits",...(k=(I=p.parameters)==null?void 0:I.docs)==null?void 0:k.description}}};var R,_,N,E,S;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Template,
  args: {
    length: 8
  },
  name: "8-Digit OTP"
}`,...(N=(_=u.parameters)==null?void 0:_.docs)==null?void 0:N.source},description:{story:"OTP with 8 digits",...(S=(E=u.parameters)==null?void 0:E.docs)==null?void 0:S.description}}};var V,W,j,q,F;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Template,
  args: {
    ariaLabel: "Please enter your verification code"
  },
  name: "With Custom ARIA Label"
}`,...(j=(W=m.parameters)==null?void 0:W.docs)==null?void 0:j.source},description:{story:"OTP with custom ARIA label",...(F=(q=m.parameters)==null?void 0:q.docs)==null?void 0:F.description}}};const J=["Default","FourDigits","EightDigits","WithCustomAriaLabel"];export{l as Default,u as EightDigits,p as FourDigits,m as WithCustomAriaLabel,J as __namedExportsOrder,H as default};

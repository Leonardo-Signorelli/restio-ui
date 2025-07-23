import{j as b}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-DXGdv9s6.js";const d=({length:a=6,onChange:f,onComplete:y,ariaLabel:T="One-time password input",className:O=""})=>{const[o,h]=m.useState(""),u=m.useRef([]),n=m.useCallback(t=>{t>=0&&t<a&&(u.current[t]?.focus(),u.current[t]?.select())},[a]),P=(t,e)=>{const r=t.currentTarget.value;if(!/^\d*$/.test(r))return;let s=o;e>=s.length&&(s=s.padEnd(e,"")),s=s.substring(0,e)+r+s.substring(e+1),s=s.substring(0,a),h(s),f?.(s),r&&e<a-1&&n(e+1),s.length===a&&y?.(s)},w=(t,e)=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(t.key)&&(t.preventDefault(),t.key==="ArrowLeft"&&e>0?n(e-1):t.key==="ArrowRight"&&e<a-1&&n(e+1)),t.key==="Backspace"){if(!o[e]&&e>0)n(e-1);else if(o[e]){const r=o.substring(0,e)+o.substring(e+1);h(r),f?.(r)}}else t.key==="Delete"&&e<a-1&&n(e+1)},A=t=>{t.preventDefault();const e=t.clipboardData.getData("text/plain").replace(/\D/g,"");if(!e)return;const r=e.substring(0,a);h(r),f?.(r),r.length===a&&y?.(r);const s=Math.min(e.length,a)-1;n(s)},v=t=>{u.current[t]?.select()};return m.useEffect(()=>{o.length<a&&n(Math.min(o.length,a-1))},[n,a,o]),b.jsx("div",{className:`otp-container ${O}`,"aria-label":T,role:"group",children:Array.from({length:a}).map((t,e)=>b.jsx("input",{ref:r=>{u.current[e]=r},type:"text",inputMode:"numeric",pattern:"[0-9]*",maxLength:1,value:o[e]||"",onInput:r=>P(r,e),onKeyDown:r=>w(r,e),onPaste:A,onFocus:()=>v(e),className:"otp-input","aria-label":`Digit ${e+1} of ${a}`,autoComplete:"one-time-code"},e))})};try{d.displayName="OTPComponent",d.__docgenInfo={description:"",displayName:"OTPComponent",props:{length:{defaultValue:{value:"6"},description:"Length of the OTP code (number of input fields)",name:"length",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:`Callback triggered when OTP value changes
@param value - The current OTP value`,name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onComplete:{defaultValue:null,description:`Callback triggered when OTP is completely filled
@param value - The complete OTP value`,name:"onComplete",required:!1,type:{name:"((value: string) => void)"}},ariaLabel:{defaultValue:{value:"One-time password input"},description:"ARIA label for the OTP container",name:"ariaLabel",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Class name for the container",name:"className",required:!1,type:{name:"string"}}}}}catch{}const L={title:"Components/OTP",component:d,tags:["autodocs"],argTypes:{length:{control:{type:"number",min:4,max:8,step:1},description:"Number of OTP digits"},onChange:{action:"changed",description:"Callback when OTP value changes"},onComplete:{action:"completed",description:"Callback when OTP is fully entered"},ariaLabel:{control:"text",description:"ARIA label for accessibility"},className:{control:"text",description:"Additional CSS class"}},parameters:{layout:"centered",docs:{description:{component:`
A customizable One-Time Password (OTP) input component with:
- Numeric-only input
- Paste support
- Keyboard navigation
- WCAG/WAI-ARIA compliance
- Value modification and overwrite
- Configurable length
        `}}}},g={render:a=>b.jsx(d,{...a})},i={...g,args:{length:6}},c={...g,args:{length:4},name:"4-Digit OTP"},l={...g,args:{length:8},name:"8-Digit OTP"},p={...g,args:{ariaLabel:"Please enter your verification code"},name:"With Custom ARIA Label"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    length: 6
  }
}`,...i.parameters?.docs?.source},description:{story:"Default OTP with 6 digits",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    length: 4
  },
  name: "4-Digit OTP"
}`,...c.parameters?.docs?.source},description:{story:"OTP with 4 digits",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    length: 8
  },
  name: "8-Digit OTP"
}`,...l.parameters?.docs?.source},description:{story:"OTP with 8 digits",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    ariaLabel: "Please enter your verification code"
  },
  name: "With Custom ARIA Label"
}`,...p.parameters?.docs?.source},description:{story:"OTP with custom ARIA label",...p.parameters?.docs?.description}}};const I=["Default","FourDigits","EightDigits","WithCustomAriaLabel"];export{i as Default,l as EightDigits,c as FourDigits,p as WithCustomAriaLabel,I as __namedExportsOrder,L as default};

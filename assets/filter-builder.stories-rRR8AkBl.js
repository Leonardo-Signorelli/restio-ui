import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./iframe-Bxccsplp.js";import{B as m}from"./button-Dn1ODst6.js";import{I as w}from"./input-BZ3Aepug.js";import{S as j}from"./select-AURqRJrR.js";import{B}from"./button-group-DoOVdlCQ.js";import"./icon-6NFk8oT5.js";import"./helper-text-BJVs1rhY.js";import"./list-CD2JO__8.js";const f={"rst-filter-wrapper":"_rst-filter-wrapper_199wb_1","rst-filter-group":"_rst-filter-group_199wb_10","rst-filter-row":"_rst-filter-row_199wb_18","rst-filter-list":"_rst-filter-list_199wb_24","rst-filter-toolbar":"_rst-filter-toolbar_199wb_31","rst-filter-actionButtons":"_rst-filter-actionButtons_199wb_41"},E=({filter:e,onChange:n,onDelete:d,fieldOptions:u})=>{const a={string:[{value:"starts with"},{value:"contains"},{value:"equals"}],number:[{value:"equals"},{value:"greater"},{value:"greater and equals"},{value:"less than"},{value:"less and equals than"}],date:[{value:"Prima di"},{value:"Dopo il"},{value:"Il giorno"}]},o=p=>{const i=u.find(l=>l.value===p);if(!i)return;const t=a[i.type]?.[0]||{value:""};n({...e,field:i,columnsType:i.type,operator:t,value:""})},c=p=>{const i=a[e.columnsType]?.find(t=>t.value===p);i&&n({...e,operator:i})},v=p=>{n({...e,value:p})},h=()=>{switch(e.columnsType){case"string":return r.jsx(w,{value:e.value,size:"medium",onChange:v})}},T={row:`${f["rst-filter-row"]}`};return r.jsxs("div",{className:T.row,children:[r.jsx(j,{value:e.field.value,options:u.map(p=>({value:p.value})),onChange:o}),r.jsx(j,{value:e.operator.value,options:a[e.columnsType],onChange:c}),h(),r.jsx(m,{onClick:d,variant:"invisible",leadingVisual:"delete"})]})},O=({group:e,onChange:n,onDelete:d,onClose:u,level:a=0,fieldOptions:o})=>{const c=(t,l)=>{const s=[...e.filters];s[t]=l,n({...e,filters:s})},v=t=>{const l=[...e.filters];l.splice(t,1),n({...e,filters:l})},h=()=>{const t=o[0],l={value:""},s={field:t,columnsType:t?.type||"string",operator:l,value:""};n({...e,filters:[...e.filters,s]})},T=()=>{const t={id:"",value:""},s={logic:"and",filters:[{field:o[0]||"",columnsType:o[0]?.type||"string",operator:t,value:""}]};n({...e,filters:[...e.filters,s]})},p=t=>{n({...e,logic:t})},i={filterGroup:`${f["rst-filter-group"]}`,filterToolbar:`${f["rst-filter-toolbar"]}`,filterList:`${f["rst-filter-list"]}`,actionButtons:`${f["rst-filter-actionButtons"]}`};return r.jsxs("div",{className:i.filterGroup,style:a!=0?{marginLeft:20}:void 0,"data-component":a===0?"filter":void 0,children:[r.jsxs("div",{className:i.filterToolbar,children:[r.jsx(B,{options:[{value:"and"},{value:"or"}],value:e.logic,onChange:p}),r.jsxs("div",{className:i.actionButtons,children:[r.jsx(m,{onClick:h,value:"add filter",leadingVisual:"plus",variant:"base"}),r.jsx(m,{onClick:T,value:"add sub group",leadingVisual:"plus",variant:"base"}),d&&r.jsx(m,{value:"Delete",onClick:d,variant:"invisible",leadingVisual:"delete"}),u&&r.jsx(m,{value:"Close",onClick:u,leadingVisual:"close",variant:"base"})]})]}),r.jsx("div",{className:i.filterList,children:e.filters.map((t,l)=>({filter:t,index:l})).map(({filter:t,index:l})=>"logic"in t?r.jsx(O,{group:t,onChange:s=>c(l,s),onDelete:()=>v(l),level:a+1,fieldOptions:o},l):r.jsx(E,{filter:t,onChange:s=>c(l,s),onDelete:()=>v(l),fieldOptions:o},l))})]})},_=({filters:e,onChange:n,fieldOptions:d,ref:u,onClose:a})=>{const o={filterWrapper:`${f["rst-filter-wrapper"]}`};return r.jsx("div",{className:o.filterWrapper,ref:u,children:r.jsx(O,{group:e,onChange:n,fieldOptions:d,onClose:a})})};try{_.displayName="FilterBuilder",_.__docgenInfo={description:"",displayName:"FilterBuilder",props:{filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"FilterGroup"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(filters: FilterGroup) => void"}},fieldOptions:{defaultValue:null,description:"",name:"fieldOptions",required:!0,type:{name:"FieldOption[]"}},ref:{defaultValue:null,description:"",name:"ref",required:!0,type:{name:"Ref<HTMLDivElement>"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const D=({initialFilters:e,fieldOptions:n,onChange:d})=>{const[u,a]=x.useState(e),o=c=>{a(c),d?.(c)};return r.jsx(_,{filters:u,onChange:o,fieldOptions:n,ref:null})},F=[{value:"Collaboratore",type:"string"},{value:"Data",type:"date"},{value:"Età",type:"number"}],k={title:"FunctionalComponent/FilterBuilder",component:D,parameters:{layout:"padded",docs:{description:{component:`
Il FilterBuilder è un componente per costruire filtri complessi con supporto per:
- Filtri singoli con campo, operatore e valore
- Gruppi di filtri con logica AND/OR
- Annidamento di gruppi
- Diversi tipi di dati (string, number, date)

Il componente è completamente controllato e richiede:
- \`filters\`: Lo stato corrente dei filtri
- \`onChange\`: Callback per gestire i cambiamenti
- \`fieldOptions\`: Array delle colonne disponibili per i filtri
        `}}},tags:["autodocs"],argTypes:{fieldOptions:{description:"Array delle opzioni di campo disponibili per i filtri",control:{type:"object"}},onChange:{action:"filters-changed",description:"Callback chiamata quando i filtri cambiano"},initialFilters:{description:"Stato iniziale dei filtri",control:{type:"object"}}}},g={args:{fieldOptions:F,initialFilters:{logic:"and",filters:[{field:{value:"Collaboratore",type:"string"},columnsType:"string",operator:{value:""},value:"Mario"}]}},parameters:{docs:{description:{story:"Esempio con un singolo filtro preimpostato per il campo Collaboratore."}}}},y={args:{fieldOptions:F,initialFilters:{logic:"or",filters:[{field:{value:"Collaboratore",type:"string"},columnsType:"string",operator:{value:""},value:"Mario Rossi"},{field:{value:"Collaboratore",type:"string"},columnsType:"string",operator:{value:"Uguale a"},value:"Luigi Verdi"}]}}},b={args:{fieldOptions:F,initialFilters:{logic:"and",filters:[{field:{value:"Data",type:"date"},columnsType:"date",operator:{value:"Dopo"},value:"2024-01-01"},{logic:"or",filters:[{field:{value:"Collaboratore",type:"string"},columnsType:"string",operator:{value:"Contiene"},value:"Mario"},{logic:"and",filters:[{field:{value:"Età",type:"number"},columnsType:"number",operator:{value:"Maggiore di"},value:30},{field:{value:"Collaboratore",type:"string"},columnsType:"string",operator:{value:"Contiene"},value:"Luigi"}]}]}]}}},C={args:{fieldOptions:F,initialFilters:{logic:"and",filters:[{field:{value:"Collaboratore",type:"string"},columnsType:"string",operator:{value:"Inizia con"},value:"Mario"},{field:{value:"Età",type:"number"},columnsType:"number",operator:{value:"Uguale a"},value:35},{field:{value:"Data",type:"date"},columnsType:"date",operator:{value:"Il giorno"},value:"2024-12-25"}]}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    fieldOptions: defaultFieldOptions,
    initialFilters: {
      logic: "and",
      filters: [{
        field: {
          value: "Collaboratore",
          type: "string"
        },
        columnsType: "string",
        operator: {
          value: ""
        },
        value: "Mario"
      }]
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Esempio con un singolo filtro preimpostato per il campo Collaboratore."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    fieldOptions: defaultFieldOptions,
    initialFilters: {
      logic: "or",
      filters: [{
        field: {
          value: "Collaboratore",
          type: "string"
        },
        columnsType: "string",
        operator: {
          value: ""
        },
        value: "Mario Rossi"
      }, {
        field: {
          value: "Collaboratore",
          type: "string"
        },
        columnsType: "string",
        operator: {
          value: "Uguale a"
        },
        value: "Luigi Verdi"
      }]
    }
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    fieldOptions: defaultFieldOptions,
    initialFilters: {
      logic: "and",
      filters: [{
        field: {
          value: "Data",
          type: "date"
        },
        columnsType: "date",
        operator: {
          value: "Dopo"
        },
        value: "2024-01-01"
      }, {
        logic: "or",
        filters: [{
          field: {
            value: "Collaboratore",
            type: "string"
          },
          columnsType: "string",
          operator: {
            value: "Contiene"
          },
          value: "Mario"
        }, {
          logic: "and",
          filters: [{
            field: {
              value: "Età",
              type: "number"
            },
            columnsType: "number",
            operator: {
              value: "Maggiore di"
            },
            value: 30
          }, {
            field: {
              value: "Collaboratore",
              type: "string"
            },
            columnsType: "string",
            operator: {
              value: "Contiene"
            },
            value: "Luigi"
          }]
        }]
      }]
    }
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    fieldOptions: defaultFieldOptions,
    initialFilters: {
      logic: "and",
      filters: [{
        field: {
          value: "Collaboratore",
          type: "string"
        },
        columnsType: "string",
        operator: {
          value: "Inizia con"
        },
        value: "Mario"
      }, {
        field: {
          value: "Età",
          type: "number"
        },
        columnsType: "number",
        operator: {
          value: "Uguale a"
        },
        value: 35
      }, {
        field: {
          value: "Data",
          type: "date"
        },
        columnsType: "date",
        operator: {
          value: "Il giorno"
        },
        value: "2024-12-25"
      }]
    }
  }
}`,...C.parameters?.docs?.source}}};const A=["WithSingleFilter","WithOrLogic","WithNestedGroups","AllFieldTypes"];export{C as AllFieldTypes,b as WithNestedGroups,y as WithOrLogic,g as WithSingleFilter,A as __namedExportsOrder,k as default};

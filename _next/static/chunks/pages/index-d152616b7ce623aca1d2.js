_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return m})),n.d(t,"default",(function(){return x}));var r=n("nKUr"),a=n("rePB"),l=n("q1tI"),c=n("e+cM"),s=n("KQm4");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){switch(e.type.toLowerCase()){case"github":return Object(r.jsx)(c.d.GitHub,{});case"twitter":return Object(r.jsx)(c.d.Twitter,{});case"mail":return Object(r.jsx)(c.d.Mail,{});default:return Object(r.jsx)(c.d.GlobeOutline,{})}},u=function(e){var t=e.mentor;return Object(r.jsxs)("div",{className:"bg-custom-800 shadow-md rounded-lg flex flex-col flex-nowrap justify-start p-6 "+(!1===t.available?"opacity-70":""),children:[Object(r.jsxs)("h2",{className:"text-lg text-white font-mono font-normal tracking-tight mb-1",children:[t.name,!1===t.available&&Object(r.jsx)("small",{className:"block text-xs text-white leading-none font-mono tracking-tight mb-1",children:"Ej tillg\xe4nglig"})]}),Object(r.jsx)("p",{className:"leading-relaxed text-base font-light",children:t.description}),Object(r.jsx)("ul",{className:"flex flex-grow flex-wrap content-end mt-2 flex-2 "+(!1===t.available?"opacity-70":""),children:t.skills.sort((function(e,t){return e.localeCompare(t)})).map((function(e,t){return Object(r.jsx)("li",{className:"px-2 py-1 mr-2 mt-2 text-xs text-white leading-none bg-indigo-900 rounded-full font-mono tracking-tight",children:e},t)}))}),Object(r.jsxs)("div",{className:"flex flex-row flex-nowrap items-center order-first",children:[t.avatar&&Object(r.jsx)("img",{className:"rounded-full mr-3 -mt-1 mb-3 "+(!1===t.available?"opacity-60":""),width:"80",height:"80",src:t.avatar}),t.contact&&Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"text-xs mb-0",children:"Kontakta mig"}),Object(r.jsx)("ul",{className:"mt-2 flex flex-grow flex-wrap content-end mb-3 ",title:"kontakta "+t.name+" p\xe5",children:Object.keys(t.contact||{}).map((function(e){return Object(r.jsx)("li",{className:"mr-2",children:Object(r.jsx)("a",{href:t.contact[e],className:"underline","aria-label":e||"webbplats",children:Object(r.jsx)(d,{type:e})})},e)}))})]})]})]})},m=!0;function x(e){var t=e.mentors,n=Object(l.useState)({skill:"",search:"",available:!0}),a=n[0],i=n[1],d=t;a.skill&&(d=d.filter((function(e){return!!e.skills.find((function(e){return-1!==e.toLowerCase().indexOf(a.skill)}))}))),a.search&&(d=d.filter((function(e){return-1!==e.name.toLowerCase().indexOf(a.search)||-1!==e.description.toLowerCase().indexOf(a.search)||!!e.skills.find((function(e){return-1!==e.toLowerCase().indexOf(a.search)}))}))),d=d.filter((function(e){return a.available?!1!==e.available:e}));var m=Array.from(new Set(function(e){for(var t=Object(s.a)(e),n=[];t.length;){var r=t.pop();Array.isArray(r)?t.push.apply(t,Object(s.a)(r)):n.push(r)}return n.reverse()}(t.map((function(e){return e.skills}))))).map((function(e){return{value:e.toLowerCase(),label:e}}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(c.c,{title:"Kodcoach",url:"https://kodcoach.se/"}),Object(r.jsxs)("div",{className:"max-w-screen-sm mx-auto my-8 md:my-12",children:[Object(r.jsx)("h1",{className:"text-4xl sm:text-5xl md:text-6xl text-center font-bold font-mono  tracking-tight",children:Object(r.jsx)("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-indigo-500 to-purple-500",children:"Utvecklare till utvecklare."})}),Object(r.jsx)("p",{className:"text-center text-lg sm:text-xl font-sans font-light",children:"Erfarna utvecklare som g\xe4rna delar med sig av sina erfarenheter, sin kunskap & ger r\xe5dgivning till andra utvecklare som vill v\xe4xa."})]}),Object(r.jsxs)("div",{className:"w-full max-w-screen-sm mx-auto mb-8 md:mb-12 font-mono",children:[Object(r.jsxs)("div",{className:"flex flex-wrap justify-between space-y-4 sm:space-x-4 sm:space-y-0",children:[Object(r.jsx)("div",{className:"w-full lg:w-1/2 flex-none sm:flex-1",children:Object(r.jsx)(c.g,{label:"V\xe4lj teknik",options:m,placeholder:"V\xe4lj teknik",value:a.skill,onChange:function(e){return i(o(o({},a),{},{skill:e}))}},"skills")}),Object(r.jsx)("div",{className:"w-full lg:w-1/2 flex-none sm:flex-1",children:Object(r.jsx)("input",{id:"search",className:"w-full rounded-md py-1.5 px-4 border-1 border-color-gray-500 text-white bg-input placeholder-white font-mono",type:"search","aria-label":"S\xf6k",placeholder:"S\xf6k",defaultValue:a.search,onChange:function(e){return i(o(o({},a),{},{search:e.target.value}))}})})]}),Object(r.jsx)("div",{className:"space-y-4 sm:space-x-4 sm:space-y-0 text-center",children:Object(r.jsxs)("label",{className:"inline-flex items-center mt-3",children:[Object(r.jsx)("span",{className:"leading-relaxed text-sm font-light font-mono",children:"Visa endast tillg\xe4ngliga coacher"}),Object(r.jsx)("input",{className:"ml-2 h-5 w-5 text-purple-600",defaultChecked:a.available,type:"checkbox",onChange:function(e){return i(o(o({},a),{},{available:e.target.checked?e.target.checked:""}))}})]})})]}),Object(r.jsx)("div",{className:"grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4",children:d.map((function(e){return Object(r.jsx)(u,{mentor:e},e.slug)}))})]})}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,3,1,4]]]);
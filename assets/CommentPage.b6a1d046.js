import{Q as f}from"./QImg.33557102.js";import{S as v,a9 as m,B as _,v as a,ae as k,ad as b,q as e,k as l,m as o,t as c,C as p,ab as C,b0 as g,bg as h,Q as r,ac as y}from"./index.f9e4126b.js";import{Q}from"./QForm.c8ed59c7.js";const x={id:"comment"},B={class:"q-pa-md row items-start q-gutter-md"},S=a("div",{class:"title col-12"},"\u8CBC\u5FC3\u5C0F\u8A9E",-1),$={class:"comment-avatar"},q=a("div",{class:"line"},null,-1),A={class:"message"},F={class:"text-h6 text-bold"},I={class:"text-subtitle2"},E={__name:"CommentPage",setup(N){const s=v([]),n=async i=>{const d=s.findIndex(t=>t._id===i);try{await m.patch("/users/encourageAppointment/"+s[d]._id,{thumb:s[d].thumb,love:s[d].love}),console.log("success")}catch{console.log("error")}};return(async()=>{const{data:i}=await m.get("/users/appointmentReplyP");s.push(...i.result)})(),(i,d)=>(e(),_("div",x,[a("div",B,[S,(e(!0),_(k,null,b(s,t=>(e(),l(y,{class:"my-card text-black col-11 col-md-5",key:t._id},{default:o(()=>[c(C,{class:"comment-main"},{default:o(()=>[a("div",$,[c(f,{src:t.p_pic},null,8,["src"])]),q,a("div",A,[a("div",F,p(t.p_name),1),a("div",I,p(t.p_reply),1)])]),_:2},1024),c(g,{dark:""}),c(h,null,{default:o(()=>[c(Q,{onSubmit:n},{default:o(()=>[c(h,{class:"comment-btn"},{default:o(()=>[t.thumb?(e(),l(r,{key:0,icon:"fa-regular fa-thumbs-up",onClick:u=>(t.thumb=!1,n(t._id))},null,8,["onClick"])):(e(),l(r,{key:1,icon:"fa-solid fa-thumbs-up",onClick:u=>(t.thumb=!0,n(t._id))},null,8,["onClick"])),t.love?(e(),l(r,{key:2,icon:"fa-regular fa-heart",onClick:u=>(t.love=!1,n(t._id))},null,8,["onClick"])):(e(),l(r,{key:3,icon:"fa-solid fa-heart",onClick:u=>(t.love=!0,n(t._id))},null,8,["onClick"]))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))])]))}};export{E as default};

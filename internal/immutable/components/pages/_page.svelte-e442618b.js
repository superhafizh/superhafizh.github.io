import{S as pt,i as vt,s as _t,e as ft,a as d,k as s,T as Et,h as a,c as h,l,m as c,n as t,N as e,b as te,C as _e,L as bt,o as yt,D as wt,U as qe,q as E,x as It,r as b,y as xt,p as kt,z as Ct,f as Pt,t as St,A as Mt}from"../../chunks/index-1d239b5f.js";function mt(p){let r,n;return{c(){r=s("script"),this.h()},l(u){r=l(u,"SCRIPT",{src:!0});var o=c(r);o.forEach(a),this.h()},h(){qe(r.src,n=p[2])||t(r,"src",n),r.async=!0,r.defer=!0},m(u,o){te(u,r,o)},p:_e,d(u){u&&a(r)}}}function Dt(p){let r,n,u,o=p[0]&&!(window!=null&&window.hcaptcha)&&mt(p);return{c(){o&&o.c(),r=ft(),n=d(),u=s("div"),this.h()},l(i){const m=Et("svelte-1lq4rqf",document.head);o&&o.l(m),r=ft(),m.forEach(a),n=h(i),u=l(i,"DIV",{id:!0}),c(u).forEach(a),this.h()},h(){t(u,"id","h-captcha-"+p[1])},m(i,m){o&&o.m(document.head,null),e(document.head,r),te(i,n,m),te(i,u,m)},p(i,[m]){i[0]&&!(window!=null&&window.hcaptcha)?o?o.p(i,m):(o=mt(i),o.c(),o.m(r.parentNode,r)):o&&(o.d(1),o=null)},i:_e,o:_e,d(i){o&&o.d(i),a(r),i&&a(n),i&&a(u)}}}var gt=(p=>(p.DARK="dark",p.LIGHT="light",p))(gt||{});function Lt(p,r,n){const u=bt();let{sitekey:o}=r,{apihost:i="https://js.hcaptcha.com/1/api.js"}=r,{hl:m=""}=r,{reCaptchaCompat:R=!1}=r,{theme:T=gt.LIGHT}=r,{size:x="normal"}=r;const ae=()=>{S&&I&&_&&hcaptcha.reset(_)},se=f=>{if(S&&I&&_)return hcaptcha.execute(_,f)},P=Math.floor(Math.random()*100);let S=!1,I=!1,_;const y=new URLSearchParams({recaptchacompat:R?"on":"off",onload:"hcaptchaOnLoad",render:"explicit"}),L=`${i}?${y.toString()}`;return yt(()=>{o||n(3,o=window.sitekey),window.hcaptchaOnLoad=()=>{u("load"),n(11,I=!0)},window.onSuccess=f=>{u("success",{token:f})},window.onError=()=>{u("error")},window.onClose=()=>{u("close")},u("mount"),n(0,S=!0)}),wt(()=>{window.hcaptchaOnLoad=null,window.onSuccess=null,I&&(hcaptcha=null)}),p.$$set=f=>{"sitekey"in f&&n(3,o=f.sitekey),"apihost"in f&&n(4,i=f.apihost),"hl"in f&&n(5,m=f.hl),"reCaptchaCompat"in f&&n(6,R=f.reCaptchaCompat),"theme"in f&&n(7,T=f.theme),"size"in f&&n(8,x=f.size)},p.$$.update=()=>{p.$$.dirty&2473&&S&&I&&(_=hcaptcha.render(`h-captcha-${P}`,{sitekey:o,hl:m,theme:T,callback:"onSuccess","error-callback":"onError","close-callback":"onClose",size:x}))},[S,P,L,o,i,m,R,T,x,ae,se,I]}class Ht extends pt{constructor(r){super(),vt(this,r,Lt,Dt,_t,{sitekey:3,apihost:4,hl:5,reCaptchaCompat:6,theme:7,size:8,reset:9,execute:10})}get reset(){return this.$$.ctx[9]}get execute(){return this.$$.ctx[10]}}function Vt(p){let r,n,u,o,i,m,R,T,x,ae,se,P,S,I,_,y,L,f,ge,z,Ee,be,H,V,le,K,Ge,ye,k,U,we,Ie,re,xe,ke,ue,Ce,A,ce,q,Be,Pe,C,G,Se,Me,oe,De,Le,ie,He,Ve,M,B,Ae,Ne,v,j,J,Re,Te,Q,je,F,W,Fe,Oe,ne,ze,X,D,Ke,O,Ue,de;return D=new Ht({props:{class:"my-4",sitekey:At}}),D.$on("success",Rt),D.$on("error",Nt),{c(){r=s("section"),n=s("div"),u=d(),o=s("div"),i=s("div"),m=s("h1"),R=E("Hi,"),T=d(),x=s("h1"),ae=E("My name is Hafizh"),se=d(),P=s("p"),S=E("I am a fullstack developer."),I=d(),_=s("div"),y=s("section"),L=s("h2"),f=E("Portfolio"),ge=d(),z=s("p"),Ee=E("My most recent projects."),be=d(),H=s("div"),V=s("div"),le=s("figure"),K=s("img"),ye=d(),k=s("div"),U=s("h2"),we=E("Pasarin"),Ie=d(),re=s("p"),xe=E("Pasarin was a marketplace targeting Facebook users. I was working with the Front End team using VueJs."),ke=d(),ue=s("p"),Ce=d(),A=s("div"),ce=s("figure"),q=s("img"),Pe=d(),C=s("div"),G=s("h2"),Se=E("Kimulti"),Me=d(),oe=s("p"),De=E("Kimulti is an ERP for a logistics company. I built from ground up using Laravel and Livewire."),Le=d(),ie=s("p"),He=E("Currently it covers CRM, Shipment, and Accounting functionality with Assets Management and others still underway."),Ve=d(),M=s("section"),B=s("h2"),Ae=E("Contact Me"),Ne=d(),v=s("form"),j=s("label"),J=s("span"),Re=E("Email"),Te=d(),Q=s("input"),je=d(),F=s("label"),W=s("span"),Fe=E("Message"),Oe=d(),ne=s("input"),ze=d(),X=s("div"),It(D.$$.fragment),Ke=d(),O=s("button"),Ue=E("Send"),this.h()},l(g){r=l(g,"SECTION",{class:!0,style:!0});var N=c(r);n=l(N,"DIV",{class:!0}),c(n).forEach(a),u=h(N),o=l(N,"DIV",{class:!0});var Je=c(o);i=l(Je,"DIV",{class:!0});var Y=c(i);m=l(Y,"H1",{class:!0});var Qe=c(m);R=b(Qe,"Hi,"),Qe.forEach(a),T=h(Y),x=l(Y,"H1",{class:!0});var We=c(x);ae=b(We,"My name is Hafizh"),We.forEach(a),se=h(Y),P=l(Y,"P",{class:!0});var Xe=c(P);S=b(Xe,"I am a fullstack developer."),Xe.forEach(a),Y.forEach(a),Je.forEach(a),N.forEach(a),I=h(g),_=l(g,"DIV",{class:!0});var he=c(_);y=l(he,"SECTION",{id:!0,class:!0});var Z=c(y);L=l(Z,"H2",{class:!0});var Ye=c(L);f=b(Ye,"Portfolio"),Ye.forEach(a),ge=h(Z),z=l(Z,"P",{class:!0});var Ze=c(z);Ee=b(Ze,"My most recent projects."),Ze.forEach(a),be=h(Z),H=l(Z,"DIV",{class:!0});var fe=c(H);V=l(fe,"DIV",{class:!0});var me=c(V);le=l(me,"FIGURE",{});var $e=c(le);K=l($e,"IMG",{src:!0,alt:!0}),$e.forEach(a),ye=h(me),k=l(me,"DIV",{class:!0});var $=c(k);U=l($,"H2",{class:!0});var et=c(U);we=b(et,"Pasarin"),et.forEach(a),Ie=h($),re=l($,"P",{});var tt=c(re);xe=b(tt,"Pasarin was a marketplace targeting Facebook users. I was working with the Front End team using VueJs."),tt.forEach(a),ke=h($),ue=l($,"P",{}),c(ue).forEach(a),$.forEach(a),me.forEach(a),Ce=h(fe),A=l(fe,"DIV",{class:!0});var pe=c(A);ce=l(pe,"FIGURE",{});var at=c(ce);q=l(at,"IMG",{src:!0,alt:!0}),at.forEach(a),Pe=h(pe),C=l(pe,"DIV",{class:!0});var ee=c(C);G=l(ee,"H2",{class:!0});var st=c(G);Se=b(st,"Kimulti"),st.forEach(a),Me=h(ee),oe=l(ee,"P",{});var lt=c(oe);De=b(lt,"Kimulti is an ERP for a logistics company. I built from ground up using Laravel and Livewire."),lt.forEach(a),Le=h(ee),ie=l(ee,"P",{});var rt=c(ie);He=b(rt,"Currently it covers CRM, Shipment, and Accounting functionality with Assets Management and others still underway."),rt.forEach(a),ee.forEach(a),pe.forEach(a),fe.forEach(a),Z.forEach(a),Ve=h(he),M=l(he,"SECTION",{id:!0,class:!0});var ve=c(M);B=l(ve,"H2",{class:!0});var ct=c(B);Ae=b(ct,"Contact Me"),ct.forEach(a),Ne=h(ve),v=l(ve,"FORM",{class:!0});var w=c(v);j=l(w,"LABEL",{class:!0,for:!0});var ot=c(j);J=l(ot,"SPAN",{class:!0});var it=c(J);Re=b(it,"Email"),it.forEach(a),ot.forEach(a),Te=h(w),Q=l(w,"INPUT",{type:!0,name:!0,class:!0}),je=h(w),F=l(w,"LABEL",{class:!0,for:!0});var nt=c(F);W=l(nt,"SPAN",{class:!0});var ut=c(W);Fe=b(ut,"Message"),ut.forEach(a),nt.forEach(a),Oe=h(w),ne=l(w,"INPUT",{name:!0,class:!0}),ze=h(w),X=l(w,"DIV",{class:!0});var dt=c(X);xt(D.$$.fragment,dt),dt.forEach(a),Ke=h(w),O=l(w,"BUTTON",{type:!0,class:!0});var ht=c(O);Ue=b(ht,"Send"),ht.forEach(a),w.forEach(a),ve.forEach(a),he.forEach(a),this.h()},h(){t(n,"class","hero-overlay bg-opacity-60"),t(m,"class","text-6xl font-bold"),t(x,"class","text-5xl font-bold"),t(P,"class","mt-4"),t(i,"class","max-w-lg"),t(o,"class","hero-content"),t(r,"class","hero hero-height bg-base-200 mb-4 svelte-1fc7l4f"),kt(r,"background-image","url(/images/codes.jpg)"),t(L,"class","text-3xl font-bold"),t(z,"class","pb-6"),qe(K.src,Ge="/images/pasarin.jpg")||t(K,"src",Ge),t(K,"alt","Pasarin"),t(U,"class","card-title"),t(k,"class","card-body"),t(V,"class","card card-compact w-96 bg-base-100 shadow-xl"),qe(q.src,Be="/images/kimulti.jpg")||t(q,"src",Be),t(q,"alt","Kimulti"),t(G,"class","card-title"),t(C,"class","card-body"),t(A,"class","card card-compact w-96 bg-base-100 shadow-xl"),t(H,"class","grid grid-cols-2 justify-items-center"),t(y,"id","portfolio-section"),t(y,"class","py-8"),t(B,"class","text-3xl font-bold pb-6"),t(J,"class","label-text"),t(j,"class","label"),t(j,"for","email"),t(Q,"type","email"),t(Q,"name","email"),t(Q,"class","input input-bordered"),t(W,"class","label-text"),t(F,"class","label"),t(F,"for","message"),t(ne,"name","message"),t(ne,"class","input input-bordered"),t(X,"class","py-4 px-4"),t(O,"type","submit"),t(O,"class","btn"),t(v,"class","form-control"),t(M,"id","contact-section"),t(M,"class","py-8"),t(_,"class","max-w-4xl mx-auto")},m(g,N){te(g,r,N),e(r,n),e(r,u),e(r,o),e(o,i),e(i,m),e(m,R),e(i,T),e(i,x),e(x,ae),e(i,se),e(i,P),e(P,S),te(g,I,N),te(g,_,N),e(_,y),e(y,L),e(L,f),e(y,ge),e(y,z),e(z,Ee),e(y,be),e(y,H),e(H,V),e(V,le),e(le,K),e(V,ye),e(V,k),e(k,U),e(U,we),e(k,Ie),e(k,re),e(re,xe),e(k,ke),e(k,ue),e(H,Ce),e(H,A),e(A,ce),e(ce,q),e(A,Pe),e(A,C),e(C,G),e(G,Se),e(C,Me),e(C,oe),e(oe,De),e(C,Le),e(C,ie),e(ie,He),e(_,Ve),e(_,M),e(M,B),e(B,Ae),e(M,Ne),e(M,v),e(v,j),e(j,J),e(J,Re),e(v,Te),e(v,Q),e(v,je),e(v,F),e(F,W),e(W,Fe),e(v,Oe),e(v,ne),e(v,ze),e(v,X),Ct(D,X,null),e(v,Ke),e(v,O),e(O,Ue),de=!0},p:_e,i(g){de||(Pt(D.$$.fragment,g),de=!0)},o(g){St(D.$$.fragment,g),de=!1},d(g){g&&a(r),g&&a(I),g&&a(_),Mt(D)}}}let At="dbcdd783-4dd3-4e6d-81f5-43c985cc17c2";function Nt(){}function Rt(){}class jt extends pt{constructor(r){super(),vt(this,r,null,Vt,_t,{})}}export{jt as default};

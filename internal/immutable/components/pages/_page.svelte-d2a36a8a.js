import{S as pt,i as vt,s as _t,e as ft,a as u,k as l,T as Et,h as a,c as h,l as r,m as c,n as t,N as e,b as ae,C as _e,L as bt,o as yt,D as wt,U as Ge,q as E,x as It,r as b,y as xt,p as kt,z as Ct,f as Pt,t as St,A as Mt}from"../../chunks/index-1d239b5f.js";function mt(m){let s,n;return{c(){s=l("script"),this.h()},l(d){s=r(d,"SCRIPT",{src:!0});var o=c(s);o.forEach(a),this.h()},h(){Ge(s.src,n=m[2])||t(s,"src",n),s.async=!0,s.defer=!0},m(d,o){ae(d,s,o)},p:_e,d(d){d&&a(s)}}}function Dt(m){let s,n,d,o=m[0]&&!(window!=null&&window.hcaptcha)&&mt(m);return{c(){o&&o.c(),s=ft(),n=u(),d=l("div"),this.h()},l(i){const p=Et("svelte-1lq4rqf",document.head);o&&o.l(p),s=ft(),p.forEach(a),n=h(i),d=r(i,"DIV",{id:!0}),c(d).forEach(a),this.h()},h(){t(d,"id","h-captcha-"+m[1])},m(i,p){o&&o.m(document.head,null),e(document.head,s),ae(i,n,p),ae(i,d,p)},p(i,[p]){i[0]&&!(window!=null&&window.hcaptcha)?o?o.p(i,p):(o=mt(i),o.c(),o.m(s.parentNode,s)):o&&(o.d(1),o=null)},i:_e,o:_e,d(i){o&&o.d(i),a(s),i&&a(n),i&&a(d)}}}var gt=(m=>(m.DARK="dark",m.LIGHT="light",m))(gt||{});function Lt(m,s,n){const d=bt();let{sitekey:o}=s,{apihost:i="https://js.hcaptcha.com/1/api.js"}=s,{hl:p=""}=s,{reCaptchaCompat:T=!1}=s,{theme:N=gt.LIGHT}=s,{size:x="normal"}=s;const se=()=>{S&&I&&_&&hcaptcha.reset(_)},le=f=>{if(S&&I&&_)return hcaptcha.execute(_,f)},P=Math.floor(Math.random()*100);let S=!1,I=!1,_;const y=new URLSearchParams({recaptchacompat:T?"on":"off",onload:"hcaptchaOnLoad",render:"explicit"}),L=`${i}?${y.toString()}`;return yt(()=>{o||n(3,o=window.sitekey),window.hcaptchaOnLoad=()=>{d("load"),n(11,I=!0)},window.onSuccess=f=>{d("success",{token:f})},window.onError=()=>{d("error")},window.onClose=()=>{d("close")},d("mount"),n(0,S=!0)}),wt(()=>{window.hcaptchaOnLoad=null,window.onSuccess=null,I&&(hcaptcha=null)}),m.$$set=f=>{"sitekey"in f&&n(3,o=f.sitekey),"apihost"in f&&n(4,i=f.apihost),"hl"in f&&n(5,p=f.hl),"reCaptchaCompat"in f&&n(6,T=f.reCaptchaCompat),"theme"in f&&n(7,N=f.theme),"size"in f&&n(8,x=f.size)},m.$$.update=()=>{m.$$.dirty&2473&&S&&I&&(_=hcaptcha.render(`h-captcha-${P}`,{sitekey:o,hl:p,theme:N,callback:"onSuccess","error-callback":"onError","close-callback":"onClose",size:x}))},[S,P,L,o,i,p,T,N,x,se,le,I]}class Ht extends pt{constructor(s){super(),vt(this,s,Lt,Dt,_t,{sitekey:3,apihost:4,hl:5,reCaptchaCompat:6,theme:7,size:8,reset:9,execute:10})}get reset(){return this.$$.ctx[9]}get execute(){return this.$$.ctx[10]}}function Vt(m){let s,n,d,o,i,p,T,N,x,se,le,P,S,I,_,y,L,f,ge,K,Ee,be,H,V,re,q,Ue,ye,k,G,we,Ie,ce,xe,ke,de,Ce,A,oe,U,Be,Pe,C,B,Se,Me,ie,De,Le,ne,He,Ve,M,J,Ae,Re,v,j,X,Te,Ne,Q,je,F,W,Fe,Oe,O,ze,Y,D,Ke,z,qe,ue;return D=new Ht({props:{class:"my-4",sitekey:At}}),D.$on("success",m[1]),D.$on("error",m[0]),{c(){s=l("section"),n=l("div"),d=u(),o=l("div"),i=l("div"),p=l("h1"),T=E("Hi,"),N=u(),x=l("h1"),se=E("My name is Hafizh"),le=u(),P=l("p"),S=E("I am a fullstack developer."),I=u(),_=l("div"),y=l("section"),L=l("h2"),f=E("Portfolio"),ge=u(),K=l("p"),Ee=E("My most recent projects."),be=u(),H=l("div"),V=l("div"),re=l("figure"),q=l("img"),ye=u(),k=l("div"),G=l("h2"),we=E("Pasarin"),Ie=u(),ce=l("p"),xe=E("Pasarin was a marketplace targeting Facebook users. I was working with the Front End team using VueJs."),ke=u(),de=l("p"),Ce=u(),A=l("div"),oe=l("figure"),U=l("img"),Pe=u(),C=l("div"),B=l("h2"),Se=E("Kimulti"),Me=u(),ie=l("p"),De=E("Kimulti is an ERP for a logistics company. I built from ground up using Laravel and Livewire."),Le=u(),ne=l("p"),He=E("Currently it covers CRM, Shipment, and Accounting functionality with Assets Management and others still underway."),Ve=u(),M=l("section"),J=l("h2"),Ae=E("Contact Me"),Re=u(),v=l("form"),j=l("label"),X=l("span"),Te=E("Email"),Ne=u(),Q=l("input"),je=u(),F=l("label"),W=l("span"),Fe=E("Message"),Oe=u(),O=l("textarea"),ze=u(),Y=l("div"),It(D.$$.fragment),Ke=u(),z=l("button"),qe=E("Send"),this.h()},l(g){s=r(g,"SECTION",{class:!0,style:!0});var R=c(s);n=r(R,"DIV",{class:!0}),c(n).forEach(a),d=h(R),o=r(R,"DIV",{class:!0});var Je=c(o);i=r(Je,"DIV",{class:!0});var Z=c(i);p=r(Z,"H1",{class:!0});var Xe=c(p);T=b(Xe,"Hi,"),Xe.forEach(a),N=h(Z),x=r(Z,"H1",{class:!0});var Qe=c(x);se=b(Qe,"My name is Hafizh"),Qe.forEach(a),le=h(Z),P=r(Z,"P",{class:!0});var We=c(P);S=b(We,"I am a fullstack developer."),We.forEach(a),Z.forEach(a),Je.forEach(a),R.forEach(a),I=h(g),_=r(g,"DIV",{class:!0});var he=c(_);y=r(he,"SECTION",{id:!0,class:!0});var $=c(y);L=r($,"H2",{class:!0});var Ye=c(L);f=b(Ye,"Portfolio"),Ye.forEach(a),ge=h($),K=r($,"P",{class:!0});var Ze=c(K);Ee=b(Ze,"My most recent projects."),Ze.forEach(a),be=h($),H=r($,"DIV",{class:!0});var fe=c(H);V=r(fe,"DIV",{class:!0});var me=c(V);re=r(me,"FIGURE",{});var $e=c(re);q=r($e,"IMG",{src:!0,alt:!0}),$e.forEach(a),ye=h(me),k=r(me,"DIV",{class:!0});var ee=c(k);G=r(ee,"H2",{class:!0});var et=c(G);we=b(et,"Pasarin"),et.forEach(a),Ie=h(ee),ce=r(ee,"P",{});var tt=c(ce);xe=b(tt,"Pasarin was a marketplace targeting Facebook users. I was working with the Front End team using VueJs."),tt.forEach(a),ke=h(ee),de=r(ee,"P",{}),c(de).forEach(a),ee.forEach(a),me.forEach(a),Ce=h(fe),A=r(fe,"DIV",{class:!0});var pe=c(A);oe=r(pe,"FIGURE",{});var at=c(oe);U=r(at,"IMG",{src:!0,alt:!0}),at.forEach(a),Pe=h(pe),C=r(pe,"DIV",{class:!0});var te=c(C);B=r(te,"H2",{class:!0});var st=c(B);Se=b(st,"Kimulti"),st.forEach(a),Me=h(te),ie=r(te,"P",{});var lt=c(ie);De=b(lt,"Kimulti is an ERP for a logistics company. I built from ground up using Laravel and Livewire."),lt.forEach(a),Le=h(te),ne=r(te,"P",{});var rt=c(ne);He=b(rt,"Currently it covers CRM, Shipment, and Accounting functionality with Assets Management and others still underway."),rt.forEach(a),te.forEach(a),pe.forEach(a),fe.forEach(a),$.forEach(a),Ve=h(he),M=r(he,"SECTION",{id:!0,class:!0});var ve=c(M);J=r(ve,"H2",{class:!0});var ct=c(J);Ae=b(ct,"Contact Me"),ct.forEach(a),Re=h(ve),v=r(ve,"FORM",{class:!0});var w=c(v);j=r(w,"LABEL",{class:!0,for:!0});var ot=c(j);X=r(ot,"SPAN",{class:!0});var it=c(X);Te=b(it,"Email"),it.forEach(a),ot.forEach(a),Ne=h(w),Q=r(w,"INPUT",{type:!0,name:!0,class:!0}),je=h(w),F=r(w,"LABEL",{class:!0,for:!0});var nt=c(F);W=r(nt,"SPAN",{class:!0});var dt=c(W);Fe=b(dt,"Message"),dt.forEach(a),nt.forEach(a),Oe=h(w),O=r(w,"TEXTAREA",{name:!0,class:!0,rows:!0}),c(O).forEach(a),ze=h(w),Y=r(w,"DIV",{class:!0});var ut=c(Y);xt(D.$$.fragment,ut),ut.forEach(a),Ke=h(w),z=r(w,"BUTTON",{type:!0,class:!0});var ht=c(z);qe=b(ht,"Send"),ht.forEach(a),w.forEach(a),ve.forEach(a),he.forEach(a),this.h()},h(){t(n,"class","hero-overlay bg-opacity-60"),t(p,"class","text-6xl font-bold"),t(x,"class","text-5xl font-bold"),t(P,"class","mt-4"),t(i,"class","max-w-lg"),t(o,"class","hero-content"),t(s,"class","hero hero-height bg-base-200 mb-4 svelte-1fc7l4f"),kt(s,"background-image","url(/images/codes.jpg)"),t(L,"class","text-3xl font-bold"),t(K,"class","pb-6"),Ge(q.src,Ue="/images/pasarin.jpg")||t(q,"src",Ue),t(q,"alt","Pasarin"),t(G,"class","card-title"),t(k,"class","card-body"),t(V,"class","card card-compact bg-base-100 shadow-xl"),Ge(U.src,Be="/images/kimulti.jpg")||t(U,"src",Be),t(U,"alt","Kimulti"),t(B,"class","card-title"),t(C,"class","card-body"),t(A,"class","card card-compact bg-base-100 shadow-xl"),t(H,"class","grid grid-cols-1 md:grid-cols-2 justify-items-center"),t(y,"id","portfolio-section"),t(y,"class","py-8"),t(J,"class","text-3xl font-bold pb-6"),t(X,"class","label-text"),t(j,"class","label"),t(j,"for","email"),t(Q,"type","email"),t(Q,"name","email"),t(Q,"class","input input-bordered"),t(W,"class","label-text"),t(F,"class","label"),t(F,"for","message"),t(O,"name","message"),t(O,"class","input input-bordered"),t(O,"rows","3"),t(Y,"class","py-4 px-4"),t(z,"type","submit"),t(z,"class","btn"),t(v,"class","form-control"),t(M,"id","contact-section"),t(M,"class","py-8"),t(_,"class","max-w-4xl mx-auto")},m(g,R){ae(g,s,R),e(s,n),e(s,d),e(s,o),e(o,i),e(i,p),e(p,T),e(i,N),e(i,x),e(x,se),e(i,le),e(i,P),e(P,S),ae(g,I,R),ae(g,_,R),e(_,y),e(y,L),e(L,f),e(y,ge),e(y,K),e(K,Ee),e(y,be),e(y,H),e(H,V),e(V,re),e(re,q),e(V,ye),e(V,k),e(k,G),e(G,we),e(k,Ie),e(k,ce),e(ce,xe),e(k,ke),e(k,de),e(H,Ce),e(H,A),e(A,oe),e(oe,U),e(A,Pe),e(A,C),e(C,B),e(B,Se),e(C,Me),e(C,ie),e(ie,De),e(C,Le),e(C,ne),e(ne,He),e(_,Ve),e(_,M),e(M,J),e(J,Ae),e(M,Re),e(M,v),e(v,j),e(j,X),e(X,Te),e(v,Ne),e(v,Q),e(v,je),e(v,F),e(F,W),e(W,Fe),e(v,Oe),e(v,O),e(v,ze),e(v,Y),Ct(D,Y,null),e(v,Ke),e(v,z),e(z,qe),ue=!0},p:_e,i(g){ue||(Pt(D.$$.fragment,g),ue=!0)},o(g){St(D.$$.fragment,g),ue=!1},d(g){g&&a(s),g&&a(I),g&&a(_),Mt(D)}}}let At="dbcdd783-4dd3-4e6d-81f5-43c985cc17c2";function Rt(m){function s(){console.log("failed captcha")}function n(){console.log("success captcha")}return[s,n]}class Nt extends pt{constructor(s){super(),vt(this,s,Rt,Vt,_t,{})}}export{Nt as default};

import{s as st,f as rt,n as Z,r as ot,e as at,h as lt,b as it}from"../chunks/scheduler.54e97ece.js";import{S as ct,i as ut,g as h,s as A,m as T,h as d,j as q,y as D,c as I,n as V,f as _,k as m,a as N,x as c,z as $,A as tt,B as ft,o as U}from"../chunks/index.7158fff4.js";import{w as pt}from"../chunks/index.46c69e94.js";function ht(n){return console.assert(n>=0&&n<=1,"%o",{seed:n}),n<.05?"/":n<.2?"*":n<.5?"-":"+"}function dt(n,t,s){switch(s){case"+":return n+t;case"-":return n-t;case"*":return n*t;case"/":return n/t}}const et=()=>{const n=Math.random(),t=ht(n),s=n<.7,e=(i,C)=>Math.floor(i+Math.random()*(C-i));let r,o;switch(t){case"+":r=s?e(100,899):e(100,500),o=s?e(10,100):e(100,499);break;case"-":r=e(s?100:200,999),o=s?e(10,100):e(100,r);break;case"*":case"/":s||t==="/"?(r=[2,5,10,20,50].at(e(0,4))||2,o=e(1,999/r)):(r=e(10,Math.sqrt(999)),o=e(10,Math.sqrt(999)));break}t==="/"&&([r,o]=[r*o,r]);let p=dt(r,o,t);return(t==="+"||t==="*")&&Math.random()<.5&&([r,o]=[o,r]),{x:r,y:o,op:t,soln:p}},nt="s",_t=()=>{const n=window.localStorage.getItem(nt);return n==null||isNaN(parseInt(n))?0:parseInt(n)},K=pt(_t());K.subscribe(n=>{window.localStorage.setItem(nt,n.toString())});const mt=""+new URL("../assets/correct.084b7846.wav",import.meta.url).href;function bt(n){let t,s=":";return{c(){t=h("span"),t.textContent=s,this.h()},l(e){t=d(e,"SPAN",{class:!0,"data-svelte-h":!0}),D(t)!=="svelte-1dwuvjq"&&(t.textContent=s),this.h()},h(){m(t,"class","font-roboto text-6xl")},m(e,r){N(e,t,r)},d(e){e&&_(t)}}}function xt(n){let t,s="·";return{c(){t=h("span"),t.textContent=s,this.h()},l(e){t=d(e,"SPAN",{class:!0,"data-svelte-h":!0}),D(t)!=="svelte-3mimpg"&&(t.textContent=s),this.h()},h(){m(t,"class","font-roboto text-6xl")},m(e,r){N(e,t,r)},d(e){e&&_(t)}}}function vt(n){let t,s="−";return{c(){t=h("span"),t.textContent=s,this.h()},l(e){t=d(e,"SPAN",{class:!0,"data-svelte-h":!0}),D(t)!=="svelte-w4pqhz"&&(t.textContent=s),this.h()},h(){m(t,"class","font-roboto text-6xl")},m(e,r){N(e,t,r)},d(e){e&&_(t)}}}function Ct(n){let t,s="+";return{c(){t=h("span"),t.textContent=s,this.h()},l(e){t=d(e,"SPAN",{class:!0,"data-svelte-h":!0}),D(t)!=="svelte-164omsl"&&(t.textContent=s),this.h()},h(){m(t,"class","font-roboto text-6xl")},m(e,r){N(e,t,r)},d(e){e&&_(t)}}}function St(n){let t,s,e="Funktioniert nicht auf Smart Phones / Tablets!",r,o,p,i=n[1].x+"",C,R,E,S,P=n[1].y+"",l,b,g,H="=",j,v,z,k,y,F,O,B,w,X,G,Y;function J(a,u){if(a[1].op==="+")return Ct;if(a[1].op==="-")return vt;if(a[1].op==="*")return xt;if(a[1].op==="/")return bt}let M=J(n),f=M&&M(n);return{c(){t=h("div"),s=h("div"),s.textContent=e,r=A(),o=h("div"),p=h("span"),C=T(i),R=A(),f&&f.c(),E=A(),S=h("span"),l=T(P),b=A(),g=h("span"),g.textContent=H,j=A(),v=h("input"),z=A(),k=h("p"),y=T(n[2]),F=T(" Punkt(e). Dein Rekord: "),O=T(n[4]),B=A(),w=h("audio"),this.h()},l(a){t=d(a,"DIV",{class:!0});var u=q(t);s=d(u,"DIV",{class:!0,"data-svelte-h":!0}),D(s)!=="svelte-r7v9fo"&&(s.textContent=e),r=I(u),o=d(u,"DIV",{class:!0});var x=q(o);p=d(x,"SPAN",{class:!0});var Q=q(p);C=V(Q,i),Q.forEach(_),R=I(x),f&&f.l(x),E=I(x),S=d(x,"SPAN",{class:!0});var W=q(S);l=V(W,P),W.forEach(_),b=I(x),g=d(x,"SPAN",{class:!0,"data-svelte-h":!0}),D(g)!=="svelte-qvo4m7"&&(g.textContent=H),j=I(x),v=d(x,"INPUT",{class:!0}),x.forEach(_),z=I(u),k=d(u,"P",{class:!0});var L=q(k);y=V(L,n[2]),F=V(L," Punkt(e). Dein Rekord: "),O=V(L,n[4]),L.forEach(_),u.forEach(_),B=I(a),w=d(a,"AUDIO",{src:!0}),q(w).forEach(_),this.h()},h(){m(s,"class","text-red-500"),m(p,"class","font-roboto text-6xl"),m(S,"class","font-roboto text-6xl"),m(g,"class","font-roboto text-6xl"),m(v,"class","w-48 border-0 border-b-4 text-center border-banana p-2 mx-2 font-roboto text-6xl focus:outline-none"),m(o,"class","border-2 border-cobalt rounded-lg p-8 flex items-center gap-4"),m(k,"class","text-xl font-roboto font-bold"),m(t,"class","flex flex-col gap-12 items-center"),rt(w.src,X=mt)||m(w,"src",X)},m(a,u){N(a,t,u),c(t,s),c(t,r),c(t,o),c(o,p),c(p,C),c(o,R),f&&f.m(o,null),c(o,E),c(o,S),c(S,l),c(o,b),c(o,g),c(o,j),c(o,v),$(v,n[3]),c(t,z),c(t,k),c(k,y),c(k,F),c(k,O),N(a,B,u),N(a,w,u),n[7](w),G||(Y=[tt(v,"input",n[6]),tt(v,"keydown",ft(n[5]))],G=!0)},p(a,[u]){u&2&&i!==(i=a[1].x+"")&&U(C,i),M!==(M=J(a))&&(f&&f.d(1),f=M&&M(a),f&&(f.c(),f.m(o,E))),u&2&&P!==(P=a[1].y+"")&&U(l,P),u&8&&v.value!==a[3]&&$(v,a[3]),u&4&&U(y,a[2]),u&16&&U(O,a[4])},i:Z,o:Z,d(a){a&&(_(t),_(B),_(w)),f&&f.d(),n[7](null),G=!1,ot(Y)}}}const gt=3;function kt(n,t,s){let e;at(n,K,l=>s(4,e=l));let r,o=et(),p=0,i="";const C=(l,b)=>["0","1","2","3","4","5","6","7","8","9","Backspace"].includes(b)?b==="Backspace"?l.slice(0,-1):l.length===gt||b==="0"&&l===""?l:l+b:l,R=l=>{const b=C(i,l.key);if(b===i||(s(3,i=b),i===""))return;parseInt(i)===o.soln&&(E(),s(3,i=""),s(1,o=et()),s(2,p+=1),p>e&&lt(K,e=p,e))},E=()=>{r.paused?r.play():s(0,r.currentTime=0,r)};function S(){i=this.value,s(3,i)}function P(l){it[l?"unshift":"push"](()=>{r=l,s(0,r)})}return[r,o,p,i,e,R,S,P]}class It extends ct{constructor(t){super(),ut(this,t,kt,St,st,{})}}export{It as component};

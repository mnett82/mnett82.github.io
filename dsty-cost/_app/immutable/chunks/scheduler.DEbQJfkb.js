var q=Object.defineProperty;var G=(t,e,n)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>G(t,typeof e!="symbol"?e+"":e,n);function L(){}const dt=t=>t;function I(t,e){for(const n in e)t[n]=e[n];return t}function z(t){return t()}function mt(){return Object.create(null)}function F(t){t.forEach(z)}function U(t){return typeof t=="function"}function pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function yt(t){return Object.keys(t).length===0}function M(t,...e){if(t==null){for(const i of e)i(void 0);return L}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function bt(t){let e;return M(t,n=>e=n)(),e}function gt(t,e,n){t.$$.on_destroy.push(M(e,n))}function xt(t,e,n,i){if(t){const s=H(t,e,n,i);return t[0](s)}}function H(t,e,n,i){return t[1]&&i?I(n.ctx.slice(),t[1](i(e))):n.ctx}function wt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],c=Math.max(e.dirty.length,s.length);for(let o=0;o<c;o+=1)r[o]=e.dirty[o]|s[o];return r}return e.dirty|s}return e.dirty}function vt(t,e,n,i,s,r){if(s){const c=H(e,n,i,r);t.p(c,s)}}function Et(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Tt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Nt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function kt(t,e,n){return t.set(n),e}function At(t){return t&&U(t.destroy)?t.destroy:L}const W=["",!0,1,"true","contenteditable"];let y=!1;function Ct(){y=!0}function jt(){y=!1}function J(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&l.push(u)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:J(1,s,R=>e[n[R]].claim_order,a))-1;i[l]=n[u]+1;const A=u+1;n[A]=l,s=Math.max(A,s)}const r=[],c=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(r.push(e[l-1]);o>=l;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);r.reverse(),c.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<c.length;l++){for(;a<r.length&&c[l].claim_order>=r[a].claim_order;)a++;const u=a<r.length?r[a]:null;t.insertBefore(c[l],u)}}function Q(t,e){t.appendChild(e)}function V(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Lt(t){const e=T("style");return e.textContent="/* empty */",X(V(t),e),e.sheet}function X(t,e){return Q(t.head||t,e),e.sheet}function Y(t,e){if(y){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Z(t,e,n){t.insertBefore(e,n||null)}function $(t,e,n){y&&!n?Y(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function Mt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function T(t){return document.createElement(t)}function O(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function Ht(){return N(" ")}function Ot(){return N("")}function Pt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function k(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const tt=["width","height"];function et(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&tt.indexOf(i)===-1?t[i]=e[i]:k(t,i,e[i])}function St(t,e){for(const n in e)k(t,n,e[n])}function nt(t,e){Object.keys(e).forEach(n=>{it(t,n,e[n])})}function it(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:k(t,e,n)}function Dt(t){return/-/.test(t)?nt:et}function Bt(t){return t.dataset.svelteH}function Rt(t){return Array.from(t.childNodes)}function P(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function S(t,e,n,i,s=!1){P(t);const r=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const l=n(o);return l===void 0?t.splice(c,1):t[c]=l,s||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const l=n(o);return l===void 0?t.splice(c,1):t[c]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function D(t,e,n,i){return S(t,s=>s.nodeName===e,s=>{const r=[];for(let c=0;c<s.attributes.length;c++){const o=s.attributes[c];n[o.name]||r.push(o.name)}r.forEach(c=>s.removeAttribute(c))},()=>i(e))}function qt(t,e,n){return D(t,e,n,T)}function Gt(t,e,n){return D(t,e,n,O)}function st(t,e){return S(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>N(e),!0)}function It(t){return st(t," ")}function C(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function zt(t,e){const n=C(t,"HTML_TAG_START",0),i=C(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new b(e);P(t);const s=t.splice(n,i-n+1);w(s[0]),w(s[s.length-1]);const r=s.slice(1,s.length-1);if(r.length===0)return new b(e);for(const c of r)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new b(e,r)}function ct(t,e){e=""+e,t.data!==e&&(t.data=e)}function lt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ft(t,e,n){~W.indexOf(n)?lt(t,e):ct(t,e)}function Ut(t,e){t.value=e??""}function Wt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function rt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}class ot{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=O(n.nodeName):this.e=T(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Z(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(w)}}class b extends ot{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)$(this.t,this.n[i],n)}}function Jt(t,e){return new t(e)}let p;function g(t){p=t}function d(){if(!p)throw new Error("Function called outside component initialization");return p}function Kt(t){d().$$.on_mount.push(t)}function Qt(t){d().$$.after_update.push(t)}function Vt(t){d().$$.on_destroy.push(t)}function Xt(){const t=d();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const r=rt(e,n,{cancelable:i});return s.slice().forEach(c=>{c.call(t,r)}),!r.defaultPrevented}return!0}}function Yt(t,e){return d().$$.context.set(t,e),e}function Zt(t){return d().$$.context.get(t)}function $t(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const m=[],j=[];let h=[];const v=[],B=Promise.resolve();let E=!1;function at(){E||(E=!0,B.then(ft))}function te(){return at(),B}function ut(t){h.push(t)}function ee(t){v.push(t)}const x=new Set;let _=0;function ft(){if(_!==0)return;const t=p;do{try{for(;_<m.length;){const e=m[_];_++,g(e),_t(e.$$)}}catch(e){throw m.length=0,_=0,e}for(g(null),m.length=0,_=0;j.length;)j.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];x.has(n)||(x.add(n),n())}h.length=0}while(m.length);for(;v.length;)v.pop()();E=!1,x.clear(),g(t)}function _t(t){if(t.fragment!==null){t.update(),F(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ut)}}function ne(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}export{$t as $,j as A,Jt as B,te as C,V as D,Lt as E,ut as F,rt as G,dt as H,mt as I,ft as J,yt as K,ne as L,p as M,g as N,z as O,m as P,at as Q,Ct as R,jt as S,I as T,et as U,Nt as V,Tt as W,Dt as X,Vt as Y,bt as Z,Xt as _,pt as a,Pt as a0,At as a1,Yt as a2,Zt as a3,Ft as a4,O as a5,Gt as a6,St as a7,Mt as a8,Bt as a9,b as aa,zt as ab,Ut as ac,ee as ad,kt as ae,Ht as b,qt as c,Rt as d,T as e,st as f,w as g,It as h,U as i,$ as j,Y as k,ct as l,gt as m,L as n,xt as o,Et as p,wt as q,F as r,M as s,N as t,vt as u,Ot as v,Qt as w,Kt as x,k as y,Wt as z};

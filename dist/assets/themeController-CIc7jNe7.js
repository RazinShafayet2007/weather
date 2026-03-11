import{c as Cl,N as dn,S as Jo,C as je,F as jo,M as mi,V as Ye,R as Pl,a as Rt,w as Oi,W as Ca,b as Zn,d as dt,L as li,H as ji,U as Nn,D as rn,B as Yt,e as gi,f as er,p as wl,E as Dl,g as bt,P as Yn,A as yl,h as lr,i as an,j as zi,k as ea,l as vi,m as Si,n as es,o as Ll,q as Vn,r as Wi,s as Ul,t as Il,u as oi,O as Nl,v as Ol,x as Fl,y as Bl,z as Gl,G as Hl,I as Vl,J as kl,K as zl,Q as Wl,T as Xl,X as Yl,Y as ql,Z as Kl,_ as $l,$ as Zl,a0 as Ql,a1 as Jl,a2 as cr,a3 as kn,a4 as yi,a5 as jl,a6 as di,a7 as ec,a8 as tc,a9 as nc,aa as ic,ab as ts,ac as rc,ad as ac,ae as oc,af as sc,ag as He,ah as lc,ai as cc,aj as fc,ak as On,al as ns,am as Fi,an as ln,ao as is,ap as Dn,aq as en,ar as Xi,as as rs,at as as,au as os,av as uc,aw as dc,ax as pc,ay as ss,az as Pn,aA as hc,aB as _c,aC as mc,aD as ls,aE as gc,aF as cs,aG as fs,aH as fr,aI as ur,aJ as dr,aK as pr,aL as Qe,aM as Pa,aN as wa,aO as Da,aP as ya,aQ as La,aR as Ua,aS as Ia,aT as Na,aU as Oa,aV as Fa,aW as Ba,aX as Ga,aY as Ha,aZ as Va,a_ as ka,a$ as za,b0 as Wa,b1 as Xa,b2 as Ya,b3 as qa,b4 as Ka,b5 as hr,b6 as $a,b7 as Za,b8 as vc,b9 as Qa,ba as Ja,bb as ja,bc as Dr,bd as yr,be as Lr,bf as Ur,bg as Ir,bh as Nr,bi as Or,bj as Sc,bk as eo,bl as Ec,bm as Bi,bn as Tc,bo as to,bp as no,bq as io,br as Fr,bs as Br,bt as Mc,bu as us,bv as xc,bw as tr,bx as Ac,by as Rc,bz as ds,bA as ps,bB as ro,bC as hs,bD as _s,bE as ao,bF as ms,bG as Ei,bH as Qn,bI as bc,bJ as Cc,bK as Pc,bL as wc,bM as Dc,bN as oo,bO as At,bP as yc,bQ as Lc,bR as Uc,bS as Ic,bT as Nc,bU as Oc,bV as Fc,bW as Bc,bX as Gc,bY as Hc,bZ as Vc,b_ as kc,b$ as zc,c0 as Wc,c1 as Xc,c2 as Yc,c3 as qc,c4 as Kc,c5 as $c,c6 as Zc}from"./three.core-B2OrDQd0.js";function tn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function gs(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}var Bt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Jn={duration:.5,overwrite:!1,delay:0},ta,vt,et,Wt=1e8,qe=1/Wt,Gr=Math.PI*2,Qc=Gr/4,Jc=0,vs=Math.sqrt,jc=Math.cos,ef=Math.sin,gt=function(e){return typeof e=="string"},lt=function(e){return typeof e=="function"},on=function(e){return typeof e=="number"},na=function(e){return typeof e>"u"},Jt=function(e){return typeof e=="object"},Ct=function(e){return e!==!1},ia=function(){return typeof window<"u"},Li=function(e){return lt(e)||gt(e)},Ss=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Et=Array.isArray,tf=/random\([^)]+\)/g,nf=/,\s*/g,so=/(?:-?\.?\d|\.)+/gi,Es=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,zn=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,_r=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ts=/[+-]=-?[.\d]+/,rf=/[^,'"\[\]\s]+/gi,af=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,rt,Kt,Hr,ra,Gt={},Yi={},Ms,xs=function(e){return(Yi=jn(e,Gt))&&yt},aa=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ti=function(e,t){return!t&&console.warn(e)},As=function(e,t){return e&&(Gt[e]=t)&&Yi&&(Yi[e]=t)||Gt},Mi=function(){return 0},of={suppressEvents:!0,isStart:!0,kill:!1},Gi={suppressEvents:!0,kill:!1},sf={suppressEvents:!0},oa={},pn=[],Vr={},Rs,It={},mr={},lo=30,Hi=[],sa="",la=function(e){var t=e[0],i,r;if(Jt(t)||lt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Hi.length;r--&&!Hi[r].targetTest(t););i=Hi[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new $s(e[r],i)))||e.splice(r,1);return e},yn=function(e){return e._gsap||la(Xt(e))[0]._gsap},bs=function(e,t,i){return(i=e[t])&&lt(i)?e[t]():na(i)&&e.getAttribute&&e.getAttribute(t)||i},Pt=function(e,t){return(e=e.split(",")).forEach(t)||e},ut=function(e){return Math.round(e*1e5)/1e5||0},it=function(e){return Math.round(e*1e7)/1e7||0},qn=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},lf=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},qi=function(){var e=pn.length,t=pn.slice(0),i,r;for(Vr={},pn.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},ca=function(e){return!!(e._initted||e._startAt||e.add)},Cs=function(e,t,i,r){pn.length&&!vt&&qi(),e.render(t,i,!!(vt&&t<0&&ca(e))),pn.length&&!vt&&qi()},Ps=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(rf).length<2?t:gt(e)?e.trim():e},ws=function(e){return e},Ht=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},cf=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},jn=function(e,t){for(var i in t)e[i]=t[i];return e},co=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Jt(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Ki=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},pi=function(e){var t=e.parent||rt,i=e.keyframes?cf(Et(e.keyframes)):Ht;if(Ct(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},ff=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Ds=function(e,t,i,r,a){var o=e[r],s;if(a)for(s=t[a];o&&o[a]>s;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},nr=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var a=t._prev,o=t._next;a?a._next=o:e[i]===t&&(e[i]=o),o?o._prev=a:e[r]===t&&(e[r]=a),t._next=t._prev=t.parent=null},_n=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ln=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},uf=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},kr=function(e,t,i,r){return e._startAt&&(vt?e._startAt.revert(Gi):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},df=function n(e){return!e||e._ts&&n(e.parent)},fo=function(e){return e._repeat?ei(e._tTime,e=e.duration()+e._rDelay)*e:0},ei=function(e,t){var i=Math.floor(e=it(e/t));return e&&i===e?i-1:i},$i=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ir=function(e){return e._end=it(e._start+(e._tDur/Math.abs(e._ts||e._rts||qe)||0))},rr=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=it(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ir(e),i._dirty||Ln(i,e)),e},ys=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=$i(e.rawTime(),t),(!t._dur||Pi(0,t.totalDuration(),i)-t._tTime>qe)&&t.render(i,!0)),Ln(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-qe}},Zt=function(e,t,i,r){return t.parent&&_n(t),t._start=it((on(i)?i:i||e!==rt?zt(e,i,t):e._time)+t._delay),t._end=it(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ds(e,t,"_first","_last",e._sort?"_start":0),zr(t)||(e._recent=t),r||ys(e,t),e._ts<0&&rr(e,e._tTime),e},Ls=function(e,t){return(Gt.ScrollTrigger||aa("scrollTrigger",t))&&Gt.ScrollTrigger.create(t,e)},Us=function(e,t,i,r,a){if(ua(e,t,a),!e._initted)return 1;if(!i&&e._pt&&!vt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Rs!==Nt.frame)return pn.push(e),e._lazy=[a,r],1},pf=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},zr=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},hf=function(e,t,i,r){var a=e.ratio,o=t<0||!t&&(!e._start&&pf(e)&&!(!e._initted&&zr(e))||(e._ts<0||e._dp._ts<0)&&!zr(e))?0:1,s=e._rDelay,c=0,l,u,p;if(s&&e._repeat&&(c=Pi(0,e._tDur,t),u=ei(c,s),e._yoyo&&u&1&&(o=1-o),u!==ei(e._tTime,s)&&(a=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==a||vt||r||e._zTime===qe||!t&&e._zTime){if(!e._initted&&Us(e,t,r,i,c))return;for(p=e._zTime,e._zTime=t||(i?qe:0),i||(i=t&&!p),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,l=e._pt;l;)l.r(o,l.d),l=l._next;t<0&&kr(e,t,i,!0),e._onUpdate&&!i&&Ot(e,"onUpdate"),c&&e._repeat&&!i&&e.parent&&Ot(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&_n(e,1),!i&&!vt&&(Ot(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},_f=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ti=function(e,t,i,r){var a=e._repeat,o=it(t)||0,s=e._tTime/e._tDur;return s&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=a?a<0?1e10:it(o*(a+1)+e._rDelay*a):o,s>0&&!r&&rr(e,e._tTime=e._tDur*s),e.parent&&ir(e),i||Ln(e.parent,e),e},uo=function(e){return e instanceof Mt?Ln(e):ti(e,e._dur)},mf={_start:0,endTime:Mi,totalDuration:Mi},zt=function n(e,t,i){var r=e.labels,a=e._recent||mf,o=e.duration()>=Wt?a.endTime(!1):e._dur,s,c,l;return gt(t)&&(isNaN(t)||t in r)?(c=t.charAt(0),l=t.substr(-1)==="%",s=t.indexOf("="),c==="<"||c===">"?(s>=0&&(t=t.replace(/=/,"")),(c==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(s<0?a:i).totalDuration()/100:1)):s<0?(t in r||(r[t]=o),r[t]):(c=parseFloat(t.charAt(s-1)+t.substr(s+1)),l&&i&&(c=c/100*(Et(i)?i[0]:i).totalDuration()),s>1?n(e,t.substr(0,s-1),i)+c:o+c)):t==null?o:+t},hi=function(e,t,i){var r=on(t[1]),a=(r?2:1)+(e<2?0:1),o=t[a],s,c;if(r&&(o.duration=t[1]),o.parent=i,e){for(s=o,c=i;c&&!("immediateRender"in s);)s=c.vars.defaults||{},c=Ct(c.vars.inherit)&&c.parent;o.immediateRender=Ct(s.immediateRender),e<2?o.runBackwards=1:o.startAt=t[a-1]}return new pt(t[0],o,t[a+1])},vn=function(e,t){return e||e===0?t(e):t},Pi=function(e,t,i){return i<e?e:i>t?t:i},St=function(e,t){return!gt(e)||!(t=af.exec(e))?"":t[1]},gf=function(e,t,i){return vn(i,function(r){return Pi(e,t,r)})},Wr=[].slice,Is=function(e,t){return e&&Jt(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Jt(e[0]))&&!e.nodeType&&e!==Kt},vf=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var a;return gt(r)&&!t||Is(r,1)?(a=i).push.apply(a,Xt(r)):i.push(r)})||i},Xt=function(e,t,i){return et&&!t&&et.selector?et.selector(e):gt(e)&&!i&&(Hr||!ni())?Wr.call((t||ra).querySelectorAll(e),0):Et(e)?vf(e,i):Is(e)?Wr.call(e,0):e?[e]:[]},Xr=function(e){return e=Xt(e)[0]||Ti("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Xt(t,i.querySelectorAll?i:i===e?Ti("Invalid scope")||ra.createElement("div"):e)}},Ns=function(e){return e.sort(function(){return .5-Math.random()})},Os=function(e){if(lt(e))return e;var t=Jt(e)?e:{each:e},i=Un(t.ease),r=t.from||0,a=parseFloat(t.base)||0,o={},s=r>0&&r<1,c=isNaN(r)||s,l=t.axis,u=r,p=r;return gt(r)?u=p={center:.5,edges:.5,end:1}[r]||0:!s&&c&&(u=r[0],p=r[1]),function(g,S,A){var _=(A||t).length,d=o[_],f,R,x,T,b,C,D,L,m;if(!d){if(m=t.grid==="auto"?0:(t.grid||[1,Wt])[1],!m){for(D=-Wt;D<(D=A[m++].getBoundingClientRect().left)&&m<_;);m<_&&m--}for(d=o[_]=[],f=c?Math.min(m,_)*u-.5:r%m,R=m===Wt?0:c?_*p/m-.5:r/m|0,D=0,L=Wt,C=0;C<_;C++)x=C%m-f,T=R-(C/m|0),d[C]=b=l?Math.abs(l==="y"?T:x):vs(x*x+T*T),b>D&&(D=b),b<L&&(L=b);r==="random"&&Ns(d),d.max=D-L,d.min=L,d.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(m>_?_-1:l?l==="y"?_/m:m:Math.max(m,_/m))||0)*(r==="edges"?-1:1),d.b=_<0?a-_:a,d.u=St(t.amount||t.each)||0,i=i&&_<0?Ys(i):i}return _=(d[g]-d.min)/d.max||0,it(d.b+(i?i(_):_)*d.v)+d.u}},Yr=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=it(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(on(i)?0:St(i))}},Fs=function(e,t){var i=Et(e),r,a;return!i&&Jt(e)&&(r=i=e.radius||Wt,e.values?(e=Xt(e.values),(a=!on(e[0]))&&(r*=r)):e=Yr(e.increment)),vn(t,i?lt(e)?function(o){return a=e(o),Math.abs(a-o)<=r?a:o}:function(o){for(var s=parseFloat(a?o.x:o),c=parseFloat(a?o.y:0),l=Wt,u=0,p=e.length,g,S;p--;)a?(g=e[p].x-s,S=e[p].y-c,g=g*g+S*S):g=Math.abs(e[p]-s),g<l&&(l=g,u=p);return u=!r||l<=r?e[u]:o,a||u===o||on(o)?u:u+St(o)}:Yr(e))},Bs=function(e,t,i,r){return vn(Et(e)?!t:i===!0?!!(i=0):!r,function(){return Et(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},Sf=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(a,o){return o(a)},r)}},Ef=function(e,t){return function(i){return e(parseFloat(i))+(t||St(i))}},Tf=function(e,t,i){return Hs(e,t,0,1,i)},Gs=function(e,t,i){return vn(i,function(r){return e[~~t(r)]})},Mf=function n(e,t,i){var r=t-e;return Et(e)?Gs(e,n(0,e.length),t):vn(i,function(a){return(r+(a-e)%r)%r+e})},xf=function n(e,t,i){var r=t-e,a=r*2;return Et(e)?Gs(e,n(0,e.length-1),t):vn(i,function(o){return o=(a+(o-e)%a)%a||0,e+(o>r?a-o:o)})},xi=function(e){return e.replace(tf,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(nf);return Bs(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Hs=function(e,t,i,r,a){var o=t-e,s=r-i;return vn(a,function(c){return i+((c-e)/o*s||0)})},Af=function n(e,t,i,r){var a=isNaN(e+t)?0:function(S){return(1-S)*e+S*t};if(!a){var o=gt(e),s={},c,l,u,p,g;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Et(e)&&!Et(t)){for(u=[],p=e.length,g=p-2,l=1;l<p;l++)u.push(n(e[l-1],e[l]));p--,a=function(A){A*=p;var _=Math.min(g,~~A);return u[_](A-_)},i=t}else r||(e=jn(Et(e)?[]:{},e));if(!u){for(c in t)fa.call(s,e,c,"get",t[c]);a=function(A){return ha(A,s)||(o?e.p:e)}}}return vn(i,a)},po=function(e,t,i){var r=e.labels,a=Wt,o,s,c;for(o in r)s=r[o]-t,s<0==!!i&&s&&a>(s=Math.abs(s))&&(c=o,a=s);return c},Ot=function(e,t,i){var r=e.vars,a=r[t],o=et,s=e._ctx,c,l,u;if(a)return c=r[t+"Params"],l=r.callbackScope||e,i&&pn.length&&qi(),s&&(et=s),u=c?a.apply(l,c):a.call(l),et=o,u},ci=function(e){return _n(e),e.scrollTrigger&&e.scrollTrigger.kill(!!vt),e.progress()<1&&Ot(e,"onInterrupt"),e},Wn,Vs=[],ks=function(e){if(e)if(e=!e.name&&e.default||e,ia()||e.headless){var t=e.name,i=lt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,a={init:Mi,render:ha,add:fa,kill:Hf,modifier:Gf,rawVars:0},o={targetTest:0,get:0,getSetter:pa,aliases:{},register:0};if(ni(),e!==r){if(It[t])return;Ht(r,Ht(Ki(e,a),o)),jn(r.prototype,jn(a,Ki(e,o))),It[r.prop=t]=r,e.targetTest&&(Hi.push(r),oa[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}As(t,r),e.register&&e.register(yt,r,wt)}else Vs.push(e)},Xe=255,fi={aqua:[0,Xe,Xe],lime:[0,Xe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Xe],navy:[0,0,128],white:[Xe,Xe,Xe],olive:[128,128,0],yellow:[Xe,Xe,0],orange:[Xe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Xe,0,0],pink:[Xe,192,203],cyan:[0,Xe,Xe],transparent:[Xe,Xe,Xe,0]},gr=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Xe+.5|0},zs=function(e,t,i){var r=e?on(e)?[e>>16,e>>8&Xe,e&Xe]:0:fi.black,a,o,s,c,l,u,p,g,S,A;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),fi[e])r=fi[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),o=e.charAt(2),s=e.charAt(3),e="#"+a+a+o+o+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Xe,r&Xe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Xe,e&Xe]}else if(e.substr(0,3)==="hsl"){if(r=A=e.match(so),!t)c=+r[0]%360/360,l=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(l+1):u+l-u*l,a=u*2-o,r.length>3&&(r[3]*=1),r[0]=gr(c+1/3,a,o),r[1]=gr(c,a,o),r[2]=gr(c-1/3,a,o);else if(~e.indexOf("="))return r=e.match(Es),i&&r.length<4&&(r[3]=1),r}else r=e.match(so)||fi.transparent;r=r.map(Number)}return t&&!A&&(a=r[0]/Xe,o=r[1]/Xe,s=r[2]/Xe,p=Math.max(a,o,s),g=Math.min(a,o,s),u=(p+g)/2,p===g?c=l=0:(S=p-g,l=u>.5?S/(2-p-g):S/(p+g),c=p===a?(o-s)/S+(o<s?6:0):p===o?(s-a)/S+2:(a-o)/S+4,c*=60),r[0]=~~(c+.5),r[1]=~~(l*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},Ws=function(e){var t=[],i=[],r=-1;return e.split(hn).forEach(function(a){var o=a.match(zn)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},ho=function(e,t,i){var r="",a=(e+r).match(hn),o=t?"hsla(":"rgba(",s=0,c,l,u,p;if(!a)return e;if(a=a.map(function(g){return(g=zs(g,t,1))&&o+(t?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),i&&(u=Ws(e),c=i.c,c.join(r)!==u.c.join(r)))for(l=e.replace(hn,"1").split(zn),p=l.length-1;s<p;s++)r+=l[s]+(~c.indexOf(s)?a.shift()||o+"0,0,0,0)":(u.length?u:a.length?a:i).shift());if(!l)for(l=e.split(hn),p=l.length-1;s<p;s++)r+=l[s]+a[s];return r+l[p]},hn=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in fi)n+="|"+e+"\\b";return new RegExp(n+")","gi")})(),Rf=/hsl[a]?\(/,Xs=function(e){var t=e.join(" "),i;if(hn.lastIndex=0,hn.test(t))return i=Rf.test(t),e[1]=ho(e[1],i),e[0]=ho(e[0],i,Ws(e[1])),!0},Ai,Nt=(function(){var n=Date.now,e=500,t=33,i=n(),r=i,a=1e3/240,o=a,s=[],c,l,u,p,g,S,A=function _(d){var f=n()-r,R=d===!0,x,T,b,C;if((f>e||f<0)&&(i+=f-t),r+=f,b=r-i,x=b-o,(x>0||R)&&(C=++p.frame,g=b-p.time*1e3,p.time=b=b/1e3,o+=x+(x>=a?4:a-x),T=1),R||(c=l(_)),T)for(S=0;S<s.length;S++)s[S](b,g,C,d)};return p={time:0,frame:0,tick:function(){A(!0)},deltaRatio:function(d){return g/(1e3/(d||60))},wake:function(){Ms&&(!Hr&&ia()&&(Kt=Hr=window,ra=Kt.document||{},Gt.gsap=yt,(Kt.gsapVersions||(Kt.gsapVersions=[])).push(yt.version),xs(Yi||Kt.GreenSockGlobals||!Kt.gsap&&Kt||{}),Vs.forEach(ks)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&p.sleep(),l=u||function(d){return setTimeout(d,o-p.time*1e3+1|0)},Ai=1,A(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Ai=0,l=Mi},lagSmoothing:function(d,f){e=d||1/0,t=Math.min(f||33,e)},fps:function(d){a=1e3/(d||240),o=p.time*1e3+a},add:function(d,f,R){var x=f?function(T,b,C,D){d(T,b,C,D),p.remove(x)}:d;return p.remove(d),s[R?"unshift":"push"](x),ni(),x},remove:function(d,f){~(f=s.indexOf(d))&&s.splice(f,1)&&S>=f&&S--},_listeners:s},p})(),ni=function(){return!Ai&&Nt.wake()},Fe={},bf=/^[\d.\-M][\d.\-,\s]/,Cf=/["']/g,Pf=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],a=1,o=i.length,s,c,l;a<o;a++)c=i[a],s=a!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,s),t[r]=isNaN(l)?l.replace(Cf,"").trim():+l,r=c.substr(s+1).trim();return t},wf=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},Df=function(e){var t=(e+"").split("("),i=Fe[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Pf(t[1])]:wf(e).split(",").map(Ps)):Fe._CE&&bf.test(e)?Fe._CE("",e):i},Ys=function(e){return function(t){return 1-e(1-t)}},qs=function n(e,t){for(var i=e._first,r;i;)i instanceof Mt?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Un=function(e,t){return e&&(lt(e)?e:Fe[e]||Df(e))||t},Fn=function(e,t,i,r){i===void 0&&(i=function(c){return 1-t(1-c)}),r===void 0&&(r=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var a={easeIn:t,easeOut:i,easeInOut:r},o;return Pt(e,function(s){Fe[s]=Gt[s]=a,Fe[o=s.toLowerCase()]=i;for(var c in a)Fe[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Fe[s+"."+c]=a[c]}),a},Ks=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},vr=function n(e,t,i){var r=t>=1?t:1,a=(i||(e?.3:.45))/(t<1?t:1),o=a/Gr*(Math.asin(1/r)||0),s=function(u){return u===1?1:r*Math.pow(2,-10*u)*ef((u-o)*a)+1},c=e==="out"?s:e==="in"?function(l){return 1-s(1-l)}:Ks(s);return a=Gr/a,c.config=function(l,u){return n(e,l,u)},c},Sr=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(a){return 1-i(1-a)}:Ks(i);return r.config=function(a){return n(e,a)},r};Pt("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Fn(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Fe.Linear.easeNone=Fe.none=Fe.Linear.easeIn;Fn("Elastic",vr("in"),vr("out"),vr());(function(n,e){var t=1/e,i=2*t,r=2.5*t,a=function(s){return s<t?n*s*s:s<i?n*Math.pow(s-1.5/e,2)+.75:s<r?n*(s-=2.25/e)*s+.9375:n*Math.pow(s-2.625/e,2)+.984375};Fn("Bounce",function(o){return 1-a(1-o)},a)})(7.5625,2.75);Fn("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Fn("Circ",function(n){return-(vs(1-n*n)-1)});Fn("Sine",function(n){return n===1?1:-jc(n*Qc)+1});Fn("Back",Sr("in"),Sr("out"),Sr());Fe.SteppedEase=Fe.steps=Gt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),a=t?1:0,o=1-qe;return function(s){return((r*Pi(0,o,s)|0)+a)*i}}};Jn.ease=Fe["quad.out"];Pt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return sa+=n+","+n+"Params,"});var $s=function(e,t){this.id=Jc++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:bs,this.set=t?t.getSetter:pa},Ri=(function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ti(this,+t.duration,1,1),this.data=t.data,et&&(this._ctx=et,et.data.push(this)),Ai||Nt.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ti(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(ni(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(rr(this,i),!a._dp||a.parent||ys(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Zt(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===qe||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Cs(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+fo(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+fo(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*a,r):this._repeat?ei(this._tTime,a)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-qe?0:this._rts;if(this._rts===i)return this;var a=this.parent&&this._ts?$i(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-qe?0:this._rts,this.totalTime(Pi(-Math.abs(this._delay),this.totalDuration(),a),r!==!1),ir(this),uf(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ni(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==qe&&(this._tTime-=qe)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=it(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Zt(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Ct(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?$i(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=sf);var r=vt;return vt=i,ca(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),vt=r,this},e.globalTime=function(i){for(var r=this,a=arguments.length?i:r.rawTime();r;)a=r._start+a/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):a},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,uo(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,uo(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(zt(this,i),Ct(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Ct(r)),this._dur||(this._zTime=-qe),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-qe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-qe,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,a;return!!(!i||this._ts&&this._initted&&i.isActive()&&(a=i.rawTime(!0))>=r&&a<this.endTime(!0)-qe)},e.eventCallback=function(i,r,a){var o=this.vars;return arguments.length>1?(r?(o[i]=r,a&&(o[i+"Params"]=a),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,a=r._prom;return new Promise(function(o){var s=lt(i)?i:ws,c=function(){var u=r.then;r.then=null,a&&a(),lt(s)&&(s=s(r))&&(s.then||s===r)&&(r.then=u),o(s),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?c():r._prom=c})},e.kill=function(){ci(this)},n})();Ht(Ri.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-qe,_prom:0,_ps:!1,_rts:1});var Mt=(function(n){gs(e,n);function e(i,r){var a;return i===void 0&&(i={}),a=n.call(this,i)||this,a.labels={},a.smoothChildTiming=!!i.smoothChildTiming,a.autoRemoveChildren=!!i.autoRemoveChildren,a._sort=Ct(i.sortChildren),rt&&Zt(i.parent||rt,tn(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),i.scrollTrigger&&Ls(tn(a),i.scrollTrigger),a}var t=e.prototype;return t.to=function(r,a,o){return hi(0,arguments,this),this},t.from=function(r,a,o){return hi(1,arguments,this),this},t.fromTo=function(r,a,o,s){return hi(2,arguments,this),this},t.set=function(r,a,o){return a.duration=0,a.parent=this,pi(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new pt(r,a,zt(this,o),1),this},t.call=function(r,a,o){return Zt(this,pt.delayedCall(0,r,a),o)},t.staggerTo=function(r,a,o,s,c,l,u){return o.duration=a,o.stagger=o.stagger||s,o.onComplete=l,o.onCompleteParams=u,o.parent=this,new pt(r,o,zt(this,c)),this},t.staggerFrom=function(r,a,o,s,c,l,u){return o.runBackwards=1,pi(o).immediateRender=Ct(o.immediateRender),this.staggerTo(r,a,o,s,c,l,u)},t.staggerFromTo=function(r,a,o,s,c,l,u,p){return s.startAt=o,pi(s).immediateRender=Ct(s.immediateRender),this.staggerTo(r,a,s,c,l,u,p)},t.render=function(r,a,o){var s=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=r<=0?0:it(r),p=this._zTime<0!=r<0&&(this._initted||!l),g,S,A,_,d,f,R,x,T,b,C,D;if(this!==rt&&u>c&&r>=0&&(u=c),u!==this._tTime||o||p){if(s!==this._time&&l&&(u+=this._time-s,r+=this._time-s),g=u,T=this._start,x=this._ts,f=!x,p&&(l||(s=this._zTime),(r||!a)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,d=l+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(d*100+r,a,o);if(g=it(u%d),u===c?(_=this._repeat,g=l):(b=it(u/d),_=~~b,_&&_===b&&(g=l,_--),g>l&&(g=l)),b=ei(this._tTime,d),!s&&this._tTime&&b!==_&&this._tTime-b*d-this._dur<=0&&(b=_),C&&_&1&&(g=l-g,D=1),_!==b&&!this._lock){var L=C&&b&1,m=L===(C&&_&1);if(_<b&&(L=!L),s=L?0:u%l?l:u,this._lock=1,this.render(s||(D?0:it(_*d)),a,!l)._lock=0,this._tTime=u,!a&&this.parent&&Ot(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1,b=_),s&&s!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,m&&(this._lock=2,s=L?l:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;qs(this,D)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(R=_f(this,it(s),it(g)),R&&(u-=g-(g=R._start))),this._tTime=u,this._time=g,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,s=0),!s&&u&&l&&!a&&!b&&(Ot(this,"onStart"),this._tTime!==u))return this;if(g>=s&&r>=0)for(S=this._first;S;){if(A=S._next,(S._act||g>=S._start)&&S._ts&&R!==S){if(S.parent!==this)return this.render(r,a,o);if(S.render(S._ts>0?(g-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(g-S._start)*S._ts,a,o),g!==this._time||!this._ts&&!f){R=0,A&&(u+=this._zTime=-qe);break}}S=A}else{S=this._last;for(var E=r<0?r:g;S;){if(A=S._prev,(S._act||E<=S._end)&&S._ts&&R!==S){if(S.parent!==this)return this.render(r,a,o);if(S.render(S._ts>0?(E-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(E-S._start)*S._ts,a,o||vt&&ca(S)),g!==this._time||!this._ts&&!f){R=0,A&&(u+=this._zTime=E?-qe:qe);break}}S=A}}if(R&&!a&&(this.pause(),R.render(g>=s?0:-qe)._zTime=g>=s?1:-1,this._ts))return this._start=T,ir(this),this.render(r,a,o);this._onUpdate&&!a&&Ot(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&s)&&(T===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&_n(this,1),!a&&!(r<0&&!s)&&(u||s||!c)&&(Ot(this,u===c&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,a){var o=this;if(on(a)||(a=zt(this,a,r)),!(r instanceof Ri)){if(Et(r))return r.forEach(function(s){return o.add(s,a)}),this;if(gt(r))return this.addLabel(r,a);if(lt(r))r=pt.delayedCall(0,r);else return this}return this!==r?Zt(this,r,a):this},t.getChildren=function(r,a,o,s){r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=!0),s===void 0&&(s=-Wt);for(var c=[],l=this._first;l;)l._start>=s&&(l instanceof pt?a&&c.push(l):(o&&c.push(l),r&&c.push.apply(c,l.getChildren(!0,a,o)))),l=l._next;return c},t.getById=function(r){for(var a=this.getChildren(1,1,1),o=a.length;o--;)if(a[o].vars.id===r)return a[o]},t.remove=function(r){return gt(r)?this.removeLabel(r):lt(r)?this.killTweensOf(r):(r.parent===this&&nr(this,r),r===this._recent&&(this._recent=this._last),Ln(this))},t.totalTime=function(r,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=it(Nt.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,a),this._forcing=0,this):this._tTime},t.addLabel=function(r,a){return this.labels[r]=zt(this,a),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,a,o){var s=pt.delayedCall(0,a||Mi,o);return s.data="isPause",this._hasPause=1,Zt(this,s,zt(this,r))},t.removePause=function(r){var a=this._first;for(r=zt(this,r);a;)a._start===r&&a.data==="isPause"&&_n(a),a=a._next},t.killTweensOf=function(r,a,o){for(var s=this.getTweensOf(r,o),c=s.length;c--;)cn!==s[c]&&s[c].kill(r,a);return this},t.getTweensOf=function(r,a){for(var o=[],s=Xt(r),c=this._first,l=on(a),u;c;)c instanceof pt?lf(c._targets,s)&&(l?(!cn||c._initted&&c._ts)&&c.globalTime(0)<=a&&c.globalTime(c.totalDuration())>a:!a||c.isActive())&&o.push(c):(u=c.getTweensOf(s,a)).length&&o.push.apply(o,u),c=c._next;return o},t.tweenTo=function(r,a){a=a||{};var o=this,s=zt(o,r),c=a,l=c.startAt,u=c.onStart,p=c.onStartParams,g=c.immediateRender,S,A=pt.to(o,Ht({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:a.duration||Math.abs((s-(l&&"time"in l?l.time:o._time))/o.timeScale())||qe,onStart:function(){if(o.pause(),!S){var d=a.duration||Math.abs((s-(l&&"time"in l?l.time:o._time))/o.timeScale());A._dur!==d&&ti(A,d,0,1).render(A._time,!0,!0),S=1}u&&u.apply(A,p||[])}},a));return g?A.render(0):A},t.tweenFromTo=function(r,a,o){return this.tweenTo(a,Ht({startAt:{time:zt(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),po(this,zt(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),po(this,zt(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+qe)},t.shiftChildren=function(r,a,o){o===void 0&&(o=0);var s=this._first,c=this.labels,l;for(r=it(r);s;)s._start>=o&&(s._start+=r,s._end+=r),s=s._next;if(a)for(l in c)c[l]>=o&&(c[l]+=r);return Ln(this)},t.invalidate=function(r){var a=this._first;for(this._lock=0;a;)a.invalidate(r),a=a._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var a=this._first,o;a;)o=a._next,this.remove(a),a=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ln(this)},t.totalDuration=function(r){var a=0,o=this,s=o._last,c=Wt,l,u,p;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(p=o.parent;s;)l=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>c&&o._sort&&s._ts&&!o._lock?(o._lock=1,Zt(o,s,u-s._delay,1)._lock=0):c=u,u<0&&s._ts&&(a-=u,(!p&&!o._dp||p&&p.smoothChildTiming)&&(o._start+=it(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),s._end>a&&s._ts&&(a=s._end),s=l;ti(o,o===rt&&o._time>a?o._time:a,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(rt._ts&&(Cs(rt,$i(r,rt)),Rs=Nt.frame),Nt.frame>=lo){lo+=Bt.autoSleep||120;var a=rt._first;if((!a||!a._ts)&&Bt.autoSleep&&Nt._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||Nt.sleep()}}},e})(Ri);Ht(Mt.prototype,{_lock:0,_hasPause:0,_forcing:0});var yf=function(e,t,i,r,a,o,s){var c=new wt(this._pt,e,t,0,1,tl,null,a),l=0,u=0,p,g,S,A,_,d,f,R;for(c.b=i,c.e=r,i+="",r+="",(f=~r.indexOf("random("))&&(r=xi(r)),o&&(R=[i,r],o(R,e,t),i=R[0],r=R[1]),g=i.match(_r)||[];p=_r.exec(r);)A=p[0],_=r.substring(l,p.index),S?S=(S+1)%5:_.substr(-5)==="rgba("&&(S=1),A!==g[u++]&&(d=parseFloat(g[u-1])||0,c._pt={_next:c._pt,p:_||u===1?_:",",s:d,c:A.charAt(1)==="="?qn(d,A)-d:parseFloat(A)-d,m:S&&S<4?Math.round:0},l=_r.lastIndex);return c.c=l<r.length?r.substring(l,r.length):"",c.fp=s,(Ts.test(r)||f)&&(c.e=0),this._pt=c,c},fa=function(e,t,i,r,a,o,s,c,l,u){lt(r)&&(r=r(a||0,e,o));var p=e[t],g=i!=="get"?i:lt(p)?l?e[t.indexOf("set")||!lt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():p,S=lt(p)?l?Of:js:da,A;if(gt(r)&&(~r.indexOf("random(")&&(r=xi(r)),r.charAt(1)==="="&&(A=qn(g,r)+(St(g)||0),(A||A===0)&&(r=A))),!u||g!==r||qr)return!isNaN(g*r)&&r!==""?(A=new wt(this._pt,e,t,+g||0,r-(g||0),typeof p=="boolean"?Bf:el,0,S),l&&(A.fp=l),s&&A.modifier(s,this,e),this._pt=A):(!p&&!(t in e)&&aa(t,r),yf.call(this,e,t,g,r,S,c||Bt.stringFilter,l))},Lf=function(e,t,i,r,a){if(lt(e)&&(e=_i(e,a,t,i,r)),!Jt(e)||e.style&&e.nodeType||Et(e)||Ss(e))return gt(e)?_i(e,a,t,i,r):e;var o={},s;for(s in e)o[s]=_i(e[s],a,t,i,r);return o},Zs=function(e,t,i,r,a,o){var s,c,l,u;if(It[e]&&(s=new It[e]).init(a,s.rawVars?t[e]:Lf(t[e],r,a,o,i),i,r,o)!==!1&&(i._pt=c=new wt(i._pt,a,e,0,1,s.render,s,0,s.priority),i!==Wn))for(l=i._ptLookup[i._targets.indexOf(a)],u=s._props.length;u--;)l[s._props[u]]=c;return s},cn,qr,ua=function n(e,t,i){var r=e.vars,a=r.ease,o=r.startAt,s=r.immediateRender,c=r.lazy,l=r.onUpdate,u=r.runBackwards,p=r.yoyoEase,g=r.keyframes,S=r.autoRevert,A=e._dur,_=e._startAt,d=e._targets,f=e.parent,R=f&&f.data==="nested"?f.vars.targets:d,x=e._overwrite==="auto"&&!ta,T=e.timeline,b,C,D,L,m,E,P,k,G,V,q,H,$;if(T&&(!g||!a)&&(a="none"),e._ease=Un(a,Jn.ease),e._yEase=p?Ys(Un(p===!0?a:p,Jn.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!T&&!!r.runBackwards,!T||g&&!r.stagger){if(k=d[0]?yn(d[0]).harness:0,H=k&&r[k.prop],b=Ki(r,oa),_&&(_._zTime<0&&_.progress(1),t<0&&u&&s&&!S?_.render(-1,!0):_.revert(u&&A?Gi:of),_._lazy=0),o){if(_n(e._startAt=pt.set(d,Ht({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!_&&Ct(c),startAt:null,delay:0,onUpdate:l&&function(){return Ot(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vt||!s&&!S)&&e._startAt.revert(Gi),s&&A&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&A&&!_){if(t&&(s=!1),D=Ht({overwrite:!1,data:"isFromStart",lazy:s&&!_&&Ct(c),immediateRender:s,stagger:0,parent:f},b),H&&(D[k.prop]=H),_n(e._startAt=pt.set(d,D)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vt?e._startAt.revert(Gi):e._startAt.render(-1,!0)),e._zTime=t,!s)n(e._startAt,qe,qe);else if(!t)return}for(e._pt=e._ptCache=0,c=A&&Ct(c)||c&&!A,C=0;C<d.length;C++){if(m=d[C],P=m._gsap||la(d)[C]._gsap,e._ptLookup[C]=V={},Vr[P.id]&&pn.length&&qi(),q=R===d?C:R.indexOf(m),k&&(G=new k).init(m,H||b,e,q,R)!==!1&&(e._pt=L=new wt(e._pt,m,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(B){V[B]=L}),G.priority&&(E=1)),!k||H)for(D in b)It[D]&&(G=Zs(D,b,e,q,m,R))?G.priority&&(E=1):V[D]=L=fa.call(e,m,D,"get",b[D],q,R,0,r.stringFilter);e._op&&e._op[C]&&e.kill(m,e._op[C]),x&&e._pt&&(cn=e,rt.killTweensOf(m,V,e.globalTime(t)),$=!e.parent,cn=0),e._pt&&c&&(Vr[P.id]=1)}E&&nl(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!$,g&&t<=0&&T.render(Wt,!0,!0)},Uf=function(e,t,i,r,a,o,s,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,p,g,S;if(!l)for(l=e._ptCache[t]=[],g=e._ptLookup,S=e._targets.length;S--;){if(u=g[S][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return qr=1,e.vars[t]="+=0",ua(e,s),qr=0,c?Ti(t+" not eligible for reset"):1;l.push(u)}for(S=l.length;S--;)p=l[S],u=p._pt||p,u.s=(r||r===0)&&!a?r:u.s+(r||0)+o*u.c,u.c=i-u.s,p.e&&(p.e=ut(i)+St(p.e)),p.b&&(p.b=u.s+St(p.b))},If=function(e,t){var i=e[0]?yn(e[0]).harness:0,r=i&&i.aliases,a,o,s,c;if(!r)return t;a=jn({},t);for(o in r)if(o in a)for(c=r[o].split(","),s=c.length;s--;)a[c[s]]=a[o];return a},Nf=function(e,t,i,r){var a=t.ease||r||"power1.inOut",o,s;if(Et(t))s=i[e]||(i[e]=[]),t.forEach(function(c,l){return s.push({t:l/(t.length-1)*100,v:c,e:a})});else for(o in t)s=i[o]||(i[o]=[]),o==="ease"||s.push({t:parseFloat(e),v:t[o],e:a})},_i=function(e,t,i,r,a){return lt(e)?e.call(t,i,r,a):gt(e)&&~e.indexOf("random(")?xi(e):e},Qs=sa+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Js={};Pt(Qs+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Js[n]=1});var pt=(function(n){gs(e,n);function e(i,r,a,o){var s;typeof r=="number"&&(a.duration=r,r=a,a=null),s=n.call(this,o?r:pi(r))||this;var c=s.vars,l=c.duration,u=c.delay,p=c.immediateRender,g=c.stagger,S=c.overwrite,A=c.keyframes,_=c.defaults,d=c.scrollTrigger,f=c.yoyoEase,R=r.parent||rt,x=(Et(i)||Ss(i)?on(i[0]):"length"in r)?[i]:Xt(i),T,b,C,D,L,m,E,P;if(s._targets=x.length?la(x):Ti("GSAP target "+i+" not found. https://gsap.com",!Bt.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=S,A||g||Li(l)||Li(u)){if(r=s.vars,T=s.timeline=new Mt({data:"nested",defaults:_||{},targets:R&&R.data==="nested"?R.vars.targets:x}),T.kill(),T.parent=T._dp=tn(s),T._start=0,g||Li(l)||Li(u)){if(D=x.length,E=g&&Os(g),Jt(g))for(L in g)~Qs.indexOf(L)&&(P||(P={}),P[L]=g[L]);for(b=0;b<D;b++)C=Ki(r,Js),C.stagger=0,f&&(C.yoyoEase=f),P&&jn(C,P),m=x[b],C.duration=+_i(l,tn(s),b,m,x),C.delay=(+_i(u,tn(s),b,m,x)||0)-s._delay,!g&&D===1&&C.delay&&(s._delay=u=C.delay,s._start+=u,C.delay=0),T.to(m,C,E?E(b,m,x):0),T._ease=Fe.none;T.duration()?l=u=0:s.timeline=0}else if(A){pi(Ht(T.vars.defaults,{ease:"none"})),T._ease=Un(A.ease||r.ease||"none");var k=0,G,V,q;if(Et(A))A.forEach(function(H){return T.to(x,H,">")}),T.duration();else{C={};for(L in A)L==="ease"||L==="easeEach"||Nf(L,A[L],C,A.easeEach);for(L in C)for(G=C[L].sort(function(H,$){return H.t-$.t}),k=0,b=0;b<G.length;b++)V=G[b],q={ease:V.e,duration:(V.t-(b?G[b-1].t:0))/100*l},q[L]=V.v,T.to(x,q,k),k+=q.duration;T.duration()<l&&T.to({},{duration:l-T.duration()})}}l||s.duration(l=T.duration())}else s.timeline=0;return S===!0&&!ta&&(cn=tn(s),rt.killTweensOf(x),cn=0),Zt(R,tn(s),a),r.reversed&&s.reverse(),r.paused&&s.paused(!0),(p||!l&&!A&&s._start===it(R._time)&&Ct(p)&&df(tn(s))&&R.data!=="nested")&&(s._tTime=-qe,s.render(Math.max(0,-u)||0)),d&&Ls(tn(s),d),s}var t=e.prototype;return t.render=function(r,a,o){var s=this._time,c=this._tDur,l=this._dur,u=r<0,p=r>c-qe&&!u?c:r<qe?0:r,g,S,A,_,d,f,R,x,T;if(!l)hf(this,r,a,o);else if(p!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(g=p,x=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,a,o);if(g=it(p%_),p===c?(A=this._repeat,g=l):(d=it(p/_),A=~~d,A&&A===d?(g=l,A--):g>l&&(g=l)),f=this._yoyo&&A&1,f&&(T=this._yEase,g=l-g),d=ei(this._tTime,_),g===s&&!o&&this._initted&&A===d)return this._tTime=p,this;A!==d&&(x&&this._yEase&&qs(x,f),this.vars.repeatRefresh&&!f&&!this._lock&&g!==_&&this._initted&&(this._lock=o=1,this.render(it(_*A),!0).invalidate()._lock=0))}if(!this._initted){if(Us(this,u?r:g,o,a,p))return this._tTime=0,this;if(s!==this._time&&!(o&&this.vars.repeatRefresh&&A!==d))return this;if(l!==this._dur)return this.render(r,a,o)}if(this._tTime=p,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=R=(T||this._ease)(g/l),this._from&&(this.ratio=R=1-R),!s&&p&&!a&&!d&&(Ot(this,"onStart"),this._tTime!==p))return this;for(S=this._pt;S;)S.r(R,S.d),S=S._next;x&&x.render(r<0?r:x._dur*x._ease(g/this._dur),a,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!a&&(u&&kr(this,r,a,o),Ot(this,"onUpdate")),this._repeat&&A!==d&&this.vars.onRepeat&&!a&&this.parent&&Ot(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(u&&!this._onUpdate&&kr(this,r,!0,!0),(r||!l)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&_n(this,1),!a&&!(u&&!s)&&(p||s||f)&&(Ot(this,p===c?"onComplete":"onReverseComplete",!0),this._prom&&!(p<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,a,o,s,c){Ai||Nt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ua(this,l),u=this._ease(l/this._dur),Uf(this,r,a,o,s,u,l,c)?this.resetTo(r,a,o,s,1):(rr(this,0),this.parent||Ds(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,a){if(a===void 0&&(a="all"),!r&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?ci(this):this.scrollTrigger&&this.scrollTrigger.kill(!!vt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,a,cn&&cn.vars.overwrite!==!0)._first||ci(this),this.parent&&o!==this.timeline.totalDuration()&&ti(this,this._dur*this.timeline._tDur/o,0,1),this}var s=this._targets,c=r?Xt(r):s,l=this._ptLookup,u=this._pt,p,g,S,A,_,d,f;if((!a||a==="all")&&ff(s,c))return a==="all"&&(this._pt=0),ci(this);for(p=this._op=this._op||[],a!=="all"&&(gt(a)&&(_={},Pt(a,function(R){return _[R]=1}),a=_),a=If(s,a)),f=s.length;f--;)if(~c.indexOf(s[f])){g=l[f],a==="all"?(p[f]=a,A=g,S={}):(S=p[f]=p[f]||{},A=a);for(_ in A)d=g&&g[_],d&&((!("kill"in d.d)||d.d.kill(_)===!0)&&nr(this,d,"_pt"),delete g[_]),S!=="all"&&(S[_]=1)}return this._initted&&!this._pt&&u&&ci(this),this},e.to=function(r,a){return new e(r,a,arguments[2])},e.from=function(r,a){return hi(1,arguments)},e.delayedCall=function(r,a,o,s){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:a,onReverseComplete:a,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:s})},e.fromTo=function(r,a,o){return hi(2,arguments)},e.set=function(r,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(r,a)},e.killTweensOf=function(r,a,o){return rt.killTweensOf(r,a,o)},e})(Ri);Ht(pt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Pt("staggerTo,staggerFrom,staggerFromTo",function(n){pt[n]=function(){var e=new Mt,t=Wr.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var da=function(e,t,i){return e[t]=i},js=function(e,t,i){return e[t](i)},Of=function(e,t,i,r){return e[t](r.fp,i)},Ff=function(e,t,i){return e.setAttribute(t,i)},pa=function(e,t){return lt(e[t])?js:na(e[t])&&e.setAttribute?Ff:da},el=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Bf=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},tl=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},ha=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Gf=function(e,t,i,r){for(var a=this._pt,o;a;)o=a._next,a.p===r&&a.modifier(e,t,i),a=o},Hf=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?nr(this,t,"_pt"):t.dep||(i=1),t=r;return!i},Vf=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},nl=function(e){for(var t=e._pt,i,r,a,o;t;){for(i=t._next,r=a;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:a=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=a},wt=(function(){function n(t,i,r,a,o,s,c,l,u){this.t=i,this.s=a,this.c=o,this.p=r,this.r=s||el,this.d=c||this,this.set=l||da,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,a){this.mSet=this.mSet||this.set,this.set=Vf,this.m=i,this.mt=a,this.tween=r},n})();Pt(sa+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return oa[n]=1});Gt.TweenMax=Gt.TweenLite=pt;Gt.TimelineLite=Gt.TimelineMax=Mt;rt=new Mt({sortChildren:!1,defaults:Jn,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Bt.stringFilter=Xs;var In=[],Vi={},kf=[],_o=0,zf=0,Er=function(e){return(Vi[e]||kf).map(function(t){return t()})},Kr=function(){var e=Date.now(),t=[];e-_o>2&&(Er("matchMediaInit"),In.forEach(function(i){var r=i.queries,a=i.conditions,o,s,c,l;for(s in r)o=Kt.matchMedia(r[s]).matches,o&&(c=1),o!==a[s]&&(a[s]=o,l=1);l&&(i.revert(),c&&t.push(i))}),Er("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),_o=e,Er("matchMedia"))},il=(function(){function n(t,i){this.selector=i&&Xr(i),this.data=[],this._r=[],this.isReverted=!1,this.id=zf++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,a){lt(i)&&(a=r,r=i,i=lt);var o=this,s=function(){var l=et,u=o.selector,p;return l&&l!==o&&l.data.push(o),a&&(o.selector=Xr(a)),et=o,p=r.apply(o,arguments),lt(p)&&o._r.push(p),et=l,o.selector=u,o.isReverted=!1,p};return o.last=s,i===lt?s(o,function(c){return o.add(null,c)}):i?o[i]=s:s},e.ignore=function(i){var r=et;et=null,i(this),et=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof pt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var a=this;if(i?(function(){for(var s=a.getTweens(),c=a.data.length,l;c--;)l=a.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return s.splice(s.indexOf(u),1)}));for(s.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,p){return p.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),c=a.data.length;c--;)l=a.data[c],l instanceof Mt?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof pt)&&l.revert&&l.revert(i);a._r.forEach(function(u){return u(i,a)}),a.isReverted=!0})():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),r)for(var o=In.length;o--;)In[o].id===this.id&&In.splice(o,1)},e.revert=function(i){this.kill(i||{})},n})(),Wf=(function(){function n(t){this.contexts=[],this.scope=t,et&&et.data.push(this)}var e=n.prototype;return e.add=function(i,r,a){Jt(i)||(i={matches:i});var o=new il(0,a||this.scope),s=o.conditions={},c,l,u;et&&!o.selector&&(o.selector=et.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(l in i)l==="all"?u=1:(c=Kt.matchMedia(i[l]),c&&(In.indexOf(o)<0&&In.push(o),(s[l]=c.matches)&&(u=1),c.addListener?c.addListener(Kr):c.addEventListener("change",Kr)));return u&&r(o,function(p){return o.add(null,p)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),Zi={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return ks(r)})},timeline:function(e){return new Mt(e)},getTweensOf:function(e,t){return rt.getTweensOf(e,t)},getProperty:function(e,t,i,r){gt(e)&&(e=Xt(e)[0]);var a=yn(e||{}).get,o=i?ws:Ps;return i==="native"&&(i=""),e&&(t?o((It[t]&&It[t].get||a)(e,t,i,r)):function(s,c,l){return o((It[s]&&It[s].get||a)(e,s,c,l))})},quickSetter:function(e,t,i){if(e=Xt(e),e.length>1){var r=e.map(function(u){return yt.quickSetter(u,t,i)}),a=r.length;return function(u){for(var p=a;p--;)r[p](u)}}e=e[0]||{};var o=It[t],s=yn(e),c=s.harness&&(s.harness.aliases||{})[t]||t,l=o?function(u){var p=new o;Wn._pt=0,p.init(e,i?u+i:u,Wn,0,[e]),p.render(1,p),Wn._pt&&ha(1,Wn)}:s.set(e,c);return o?l:function(u){return l(e,c,i?u+i:u,s,1)}},quickTo:function(e,t,i){var r,a=yt.to(e,Ht((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(c,l,u){return a.resetTo(t,c,l,u)};return o.tween=a,o},isTweening:function(e){return rt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Un(e.ease,Jn.ease)),co(Jn,e||{})},config:function(e){return co(Bt,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,a=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(s){return s&&!It[s]&&!Gt[s]&&Ti(t+" effect requires "+s+" plugin.")}),mr[t]=function(s,c,l){return i(Xt(s),Ht(c||{},a),l)},o&&(Mt.prototype[t]=function(s,c,l){return this.add(mr[t](s,Jt(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){Fe[e]=Un(t)},parseEase:function(e,t){return arguments.length?Un(e,t):Fe},getById:function(e){return rt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Mt(e),r,a;for(i.smoothChildTiming=Ct(e.smoothChildTiming),rt.remove(i),i._dp=0,i._time=i._tTime=rt._time,r=rt._first;r;)a=r._next,(t||!(!r._dur&&r instanceof pt&&r.vars.onComplete===r._targets[0]))&&Zt(i,r,r._start-r._delay),r=a;return Zt(rt,i,0),i},context:function(e,t){return e?new il(e,t):et},matchMedia:function(e){return new Wf(e)},matchMediaRefresh:function(){return In.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Kr()},addEventListener:function(e,t){var i=Vi[e]||(Vi[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Vi[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:Mf,wrapYoyo:xf,distribute:Os,random:Bs,snap:Fs,normalize:Tf,getUnit:St,clamp:gf,splitColor:zs,toArray:Xt,selector:Xr,mapRange:Hs,pipe:Sf,unitize:Ef,interpolate:Af,shuffle:Ns},install:xs,effects:mr,ticker:Nt,updateRoot:Mt.updateRoot,plugins:It,globalTimeline:rt,core:{PropTween:wt,globals:As,Tween:pt,Timeline:Mt,Animation:Ri,getCache:yn,_removeLinkedListItem:nr,reverting:function(){return vt},context:function(e){return e&&et&&(et.data.push(e),e._ctx=et),et},suppressOverwrites:function(e){return ta=e}}};Pt("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Zi[n]=pt[n]});Nt.add(Mt.updateRoot);Wn=Zi.to({},{duration:0});var Xf=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Yf=function(e,t){var i=e._targets,r,a,o;for(r in t)for(a=i.length;a--;)o=e._ptLookup[a][r],o&&(o=o.d)&&(o._pt&&(o=Xf(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[a],r))},Tr=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,a,o){o._onInit=function(s){var c,l;if(gt(a)&&(c={},Pt(a,function(u){return c[u]=1}),a=c),t){c={};for(l in a)c[l]=t(a[l]);a=c}Yf(s,a)}}}},yt=Zi.registerPlugin({name:"attr",init:function(e,t,i,r,a){var o,s,c;this.tween=i;for(o in t)c=e.getAttribute(o)||"",s=this.add(e,"setAttribute",(c||0)+"",t[o],r,a,0,0,o),s.op=o,s.b=c,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)vt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Tr("roundProps",Yr),Tr("modifiers"),Tr("snap",Fs))||Zi;pt.version=Mt.version=yt.version="3.14.2";Ms=1;ia()&&ni();Fe.Power0;Fe.Power1;Fe.Power2;Fe.Power3;Fe.Power4;Fe.Linear;Fe.Quad;Fe.Cubic;Fe.Quart;Fe.Quint;Fe.Strong;Fe.Elastic;Fe.Back;Fe.SteppedEase;Fe.Bounce;Fe.Sine;Fe.Expo;Fe.Circ;var mo,fn,Kn,_a,wn,go,ma,qf=function(){return typeof window<"u"},sn={},Rn=180/Math.PI,$n=Math.PI/180,Gn=Math.atan2,vo=1e8,ga=/([A-Z])/g,Kf=/(left|right|width|margin|padding|x)/i,$f=/[\s,\(]\S/,Qt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$r=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Zf=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Qf=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Jf=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},jf=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},rl=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},al=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},eu=function(e,t,i){return e.style[t]=i},tu=function(e,t,i){return e.style.setProperty(t,i)},nu=function(e,t,i){return e._gsap[t]=i},iu=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},ru=function(e,t,i,r,a){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(a,o)},au=function(e,t,i,r,a){var o=e._gsap;o[t]=i,o.renderTransform(a,o)},at="transform",Dt=at+"Origin",ou=function n(e,t){var i=this,r=this.target,a=r.style,o=r._gsap;if(e in sn&&a){if(this.tfm=this.tfm||{},e!=="transform")e=Qt[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return i.tfm[s]=nn(r,s)}):this.tfm[e]=o.x?o[e]:nn(r,e),e===Dt&&(this.tfm.zOrigin=o.zOrigin);else return Qt.transform.split(",").forEach(function(s){return n.call(i,s,t)});if(this.props.indexOf(at)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Dt,t,"")),e=at}(a||t)&&this.props.push(e,t,a[e])},ol=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},su=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,a,o;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?i[e[a]]=e[a+2]:i.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(ga,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=ma(),(!a||!a.isStart)&&!i[at]&&(ol(i),r.zOrigin&&i[Dt]&&(i[Dt]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},sl=function(e,t){var i={target:e,props:[],revert:su,save:ou};return e._gsap||yt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},ll,Zr=function(e,t){var i=fn.createElementNS?fn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):fn.createElement(e);return i&&i.style?i:fn.createElement(e)},Ft=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(ga,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,ii(t)||t,1)||""},So="O,Moz,ms,Ms,Webkit".split(","),ii=function(e,t,i){var r=t||wn,a=r.style,o=5;if(e in a&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(So[o]+e in a););return o<0?null:(o===3?"ms":o>=0?So[o]:"")+e},Qr=function(){qf()&&window.document&&(mo=window,fn=mo.document,Kn=fn.documentElement,wn=Zr("div")||{style:{}},Zr("div"),at=ii(at),Dt=at+"Origin",wn.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ll=!!ii("perspective"),ma=yt.core.reverting,_a=1)},Eo=function(e){var t=e.ownerSVGElement,i=Zr("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),a;r.style.display="block",i.appendChild(r),Kn.appendChild(i);try{a=r.getBBox()}catch{}return i.removeChild(r),Kn.removeChild(i),a},To=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},cl=function(e){var t,i;try{t=e.getBBox()}catch{t=Eo(e),i=1}return t&&(t.width||t.height)||i||(t=Eo(e)),t&&!t.width&&!t.x&&!t.y?{x:+To(e,["x","cx","x1"])||0,y:+To(e,["y","cy","y1"])||0,width:0,height:0}:t},fl=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&cl(e))},mn=function(e,t){if(t){var i=e.style,r;t in sn&&t!==Dt&&(t=at),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(ga,"-$1").toLowerCase())):i.removeAttribute(t)}},un=function(e,t,i,r,a,o){var s=new wt(e._pt,t,i,0,1,o?al:rl);return e._pt=s,s.b=r,s.e=a,e._props.push(i),s},Mo={deg:1,rad:1,turn:1},lu={grid:1,flex:1},gn=function n(e,t,i,r){var a=parseFloat(i)||0,o=(i+"").trim().substr((a+"").length)||"px",s=wn.style,c=Kf.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),p=100,g=r==="px",S=r==="%",A,_,d,f;if(r===o||!a||Mo[r]||Mo[o])return a;if(o!=="px"&&!g&&(a=n(e,t,i,"px")),f=e.getCTM&&fl(e),(S||o==="%")&&(sn[t]||~t.indexOf("adius")))return A=f?e.getBBox()[c?"width":"height"]:e[u],ut(S?a/A*p:a/100*A);if(s[c?"width":"height"]=p+(g?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!l?e:e.parentNode,f&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===fn||!_.appendChild)&&(_=fn.body),d=_._gsap,d&&S&&d.width&&c&&d.time===Nt.time&&!d.uncache)return ut(a/d.width*p);if(S&&(t==="height"||t==="width")){var R=e.style[t];e.style[t]=p+r,A=e[u],R?e.style[t]=R:mn(e,t)}else(S||o==="%")&&!lu[Ft(_,"display")]&&(s.position=Ft(e,"position")),_===e&&(s.position="static"),_.appendChild(wn),A=wn[u],_.removeChild(wn),s.position="absolute";return c&&S&&(d=yn(_),d.time=Nt.time,d.width=_[u]),ut(g?A*a/p:A&&a?p/A*a:0)},nn=function(e,t,i,r){var a;return _a||Qr(),t in Qt&&t!=="transform"&&(t=Qt[t],~t.indexOf(",")&&(t=t.split(",")[0])),sn[t]&&t!=="transform"?(a=Ci(e,r),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:Ji(Ft(e,Dt))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||r||~(a+"").indexOf("calc("))&&(a=Qi[t]&&Qi[t](e,t,i)||Ft(e,t)||bs(e,t)||(t==="opacity"?1:0))),i&&!~(a+"").trim().indexOf(" ")?gn(e,t,a,i)+i:a},cu=function(e,t,i,r){if(!i||i==="none"){var a=ii(t,e,1),o=a&&Ft(e,a,1);o&&o!==i?(t=a,i=o):t==="borderColor"&&(i=Ft(e,"borderTopColor"))}var s=new wt(this._pt,e.style,t,0,1,tl),c=0,l=0,u,p,g,S,A,_,d,f,R,x,T,b;if(s.b=i,s.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Ft(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Ft(e,t)||r,_?e.style[t]=_:mn(e,t)),u=[i,r],Xs(u),i=u[0],r=u[1],g=i.match(zn)||[],b=r.match(zn)||[],b.length){for(;p=zn.exec(r);)d=p[0],R=r.substring(c,p.index),A?A=(A+1)%5:(R.substr(-5)==="rgba("||R.substr(-5)==="hsla(")&&(A=1),d!==(_=g[l++]||"")&&(S=parseFloat(_)||0,T=_.substr((S+"").length),d.charAt(1)==="="&&(d=qn(S,d)+T),f=parseFloat(d),x=d.substr((f+"").length),c=zn.lastIndex-x.length,x||(x=x||Bt.units[t]||T,c===r.length&&(r+=x,s.e+=x)),T!==x&&(S=gn(e,t,_,x)||0),s._pt={_next:s._pt,p:R||l===1?R:",",s:S,c:f-S,m:A&&A<4||t==="zIndex"?Math.round:0});s.c=c<r.length?r.substring(c,r.length):""}else s.r=t==="display"&&r==="none"?al:rl;return Ts.test(r)&&(s.e=0),this._pt=s,s},xo={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},fu=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=xo[i]||i,t[1]=xo[r]||r,t.join(" ")},uu=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,a=t.u,o=i._gsap,s,c,l;if(a==="all"||a===!0)r.cssText="",c=1;else for(a=a.split(","),l=a.length;--l>-1;)s=a[l],sn[s]&&(c=1,s=s==="transformOrigin"?Dt:at),mn(i,s);c&&(mn(i,at),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ci(i,1),o.uncache=1,ol(r)))}},Qi={clearProps:function(e,t,i,r,a){if(a.data!=="isFromStart"){var o=e._pt=new wt(e._pt,t,i,0,0,uu);return o.u=r,o.pr=-10,o.tween=a,e._props.push(i),1}}},bi=[1,0,0,1,0,0],ul={},dl=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ao=function(e){var t=Ft(e,at);return dl(t)?bi:t.substr(7).match(Es).map(ut)},va=function(e,t){var i=e._gsap||yn(e),r=e.style,a=Ao(e),o,s,c,l;return i.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,a=[c.a,c.b,c.c,c.d,c.e,c.f],a.join(",")==="1,0,0,1,0,0"?bi:a):(a===bi&&!e.offsetParent&&e!==Kn&&!i.svg&&(c=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,s=e.nextElementSibling,Kn.appendChild(e)),a=Ao(e),c?r.display=c:mn(e,"display"),l&&(s?o.insertBefore(e,s):o?o.appendChild(e):Kn.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Jr=function(e,t,i,r,a,o){var s=e._gsap,c=a||va(e,!0),l=s.xOrigin||0,u=s.yOrigin||0,p=s.xOffset||0,g=s.yOffset||0,S=c[0],A=c[1],_=c[2],d=c[3],f=c[4],R=c[5],x=t.split(" "),T=parseFloat(x[0])||0,b=parseFloat(x[1])||0,C,D,L,m;i?c!==bi&&(D=S*d-A*_)&&(L=T*(d/D)+b*(-_/D)+(_*R-d*f)/D,m=T*(-A/D)+b*(S/D)-(S*R-A*f)/D,T=L,b=m):(C=cl(e),T=C.x+(~x[0].indexOf("%")?T/100*C.width:T),b=C.y+(~(x[1]||x[0]).indexOf("%")?b/100*C.height:b)),r||r!==!1&&s.smooth?(f=T-l,R=b-u,s.xOffset=p+(f*S+R*_)-f,s.yOffset=g+(f*A+R*d)-R):s.xOffset=s.yOffset=0,s.xOrigin=T,s.yOrigin=b,s.smooth=!!r,s.origin=t,s.originIsAbsolute=!!i,e.style[Dt]="0px 0px",o&&(un(o,s,"xOrigin",l,T),un(o,s,"yOrigin",u,b),un(o,s,"xOffset",p,s.xOffset),un(o,s,"yOffset",g,s.yOffset)),e.setAttribute("data-svg-origin",T+" "+b)},Ci=function(e,t){var i=e._gsap||new $s(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,a=i.scaleX<0,o="px",s="deg",c=getComputedStyle(e),l=Ft(e,Dt)||"0",u,p,g,S,A,_,d,f,R,x,T,b,C,D,L,m,E,P,k,G,V,q,H,$,B,de,ge,Pe,Le,ot,Oe,z;return u=p=g=_=d=f=R=x=T=0,S=A=1,i.svg=!!(e.getCTM&&fl(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(r[at]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[at]!=="none"?c[at]:"")),r.scale=r.rotate=r.translate="none"),D=va(e,i.svg),i.svg&&(i.uncache?(B=e.getBBox(),l=i.xOrigin-B.x+"px "+(i.yOrigin-B.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),Jr(e,$||l,!!$||i.originIsAbsolute,i.smooth!==!1,D)),b=i.xOrigin||0,C=i.yOrigin||0,D!==bi&&(P=D[0],k=D[1],G=D[2],V=D[3],u=q=D[4],p=H=D[5],D.length===6?(S=Math.sqrt(P*P+k*k),A=Math.sqrt(V*V+G*G),_=P||k?Gn(k,P)*Rn:0,R=G||V?Gn(G,V)*Rn+_:0,R&&(A*=Math.abs(Math.cos(R*$n))),i.svg&&(u-=b-(b*P+C*G),p-=C-(b*k+C*V))):(z=D[6],ot=D[7],ge=D[8],Pe=D[9],Le=D[10],Oe=D[11],u=D[12],p=D[13],g=D[14],L=Gn(z,Le),d=L*Rn,L&&(m=Math.cos(-L),E=Math.sin(-L),$=q*m+ge*E,B=H*m+Pe*E,de=z*m+Le*E,ge=q*-E+ge*m,Pe=H*-E+Pe*m,Le=z*-E+Le*m,Oe=ot*-E+Oe*m,q=$,H=B,z=de),L=Gn(-G,Le),f=L*Rn,L&&(m=Math.cos(-L),E=Math.sin(-L),$=P*m-ge*E,B=k*m-Pe*E,de=G*m-Le*E,Oe=V*E+Oe*m,P=$,k=B,G=de),L=Gn(k,P),_=L*Rn,L&&(m=Math.cos(L),E=Math.sin(L),$=P*m+k*E,B=q*m+H*E,k=k*m-P*E,H=H*m-q*E,P=$,q=B),d&&Math.abs(d)+Math.abs(_)>359.9&&(d=_=0,f=180-f),S=ut(Math.sqrt(P*P+k*k+G*G)),A=ut(Math.sqrt(H*H+z*z)),L=Gn(q,H),R=Math.abs(L)>2e-4?L*Rn:0,T=Oe?1/(Oe<0?-Oe:Oe):0),i.svg&&($=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!dl(Ft(e,at)),$&&e.setAttribute("transform",$))),Math.abs(R)>90&&Math.abs(R)<270&&(a?(S*=-1,R+=_<=0?180:-180,_+=_<=0?180:-180):(A*=-1,R+=R<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=p-((i.yPercent=p&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-p)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=g+o,i.scaleX=ut(S),i.scaleY=ut(A),i.rotation=ut(_)+s,i.rotationX=ut(d)+s,i.rotationY=ut(f)+s,i.skewX=R+s,i.skewY=x+s,i.transformPerspective=T+o,(i.zOrigin=parseFloat(l.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Dt]=Ji(l)),i.xOffset=i.yOffset=0,i.force3D=Bt.force3D,i.renderTransform=i.svg?pu:ll?pl:du,i.uncache=0,i},Ji=function(e){return(e=e.split(" "))[0]+" "+e[1]},Mr=function(e,t,i){var r=St(t);return ut(parseFloat(t)+parseFloat(gn(e,"x",i+"px",r)))+r},du=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,pl(e,t)},Tn="0deg",si="0px",Mn=") ",pl=function(e,t){var i=t||this,r=i.xPercent,a=i.yPercent,o=i.x,s=i.y,c=i.z,l=i.rotation,u=i.rotationY,p=i.rotationX,g=i.skewX,S=i.skewY,A=i.scaleX,_=i.scaleY,d=i.transformPerspective,f=i.force3D,R=i.target,x=i.zOrigin,T="",b=f==="auto"&&e&&e!==1||f===!0;if(x&&(p!==Tn||u!==Tn)){var C=parseFloat(u)*$n,D=Math.sin(C),L=Math.cos(C),m;C=parseFloat(p)*$n,m=Math.cos(C),o=Mr(R,o,D*m*-x),s=Mr(R,s,-Math.sin(C)*-x),c=Mr(R,c,L*m*-x+x)}d!==si&&(T+="perspective("+d+Mn),(r||a)&&(T+="translate("+r+"%, "+a+"%) "),(b||o!==si||s!==si||c!==si)&&(T+=c!==si||b?"translate3d("+o+", "+s+", "+c+") ":"translate("+o+", "+s+Mn),l!==Tn&&(T+="rotate("+l+Mn),u!==Tn&&(T+="rotateY("+u+Mn),p!==Tn&&(T+="rotateX("+p+Mn),(g!==Tn||S!==Tn)&&(T+="skew("+g+", "+S+Mn),(A!==1||_!==1)&&(T+="scale("+A+", "+_+Mn),R.style[at]=T||"translate(0, 0)"},pu=function(e,t){var i=t||this,r=i.xPercent,a=i.yPercent,o=i.x,s=i.y,c=i.rotation,l=i.skewX,u=i.skewY,p=i.scaleX,g=i.scaleY,S=i.target,A=i.xOrigin,_=i.yOrigin,d=i.xOffset,f=i.yOffset,R=i.forceCSS,x=parseFloat(o),T=parseFloat(s),b,C,D,L,m;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=$n,l*=$n,b=Math.cos(c)*p,C=Math.sin(c)*p,D=Math.sin(c-l)*-g,L=Math.cos(c-l)*g,l&&(u*=$n,m=Math.tan(l-u),m=Math.sqrt(1+m*m),D*=m,L*=m,u&&(m=Math.tan(u),m=Math.sqrt(1+m*m),b*=m,C*=m)),b=ut(b),C=ut(C),D=ut(D),L=ut(L)):(b=p,L=g,C=D=0),(x&&!~(o+"").indexOf("px")||T&&!~(s+"").indexOf("px"))&&(x=gn(S,"x",o,"px"),T=gn(S,"y",s,"px")),(A||_||d||f)&&(x=ut(x+A-(A*b+_*D)+d),T=ut(T+_-(A*C+_*L)+f)),(r||a)&&(m=S.getBBox(),x=ut(x+r/100*m.width),T=ut(T+a/100*m.height)),m="matrix("+b+","+C+","+D+","+L+","+x+","+T+")",S.setAttribute("transform",m),R&&(S.style[at]=m)},hu=function(e,t,i,r,a){var o=360,s=gt(a),c=parseFloat(a)*(s&&~a.indexOf("rad")?Rn:1),l=c-r,u=r+l+"deg",p,g;return s&&(p=a.split("_")[1],p==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),p==="cw"&&l<0?l=(l+o*vo)%o-~~(l/o)*o:p==="ccw"&&l>0&&(l=(l-o*vo)%o-~~(l/o)*o)),e._pt=g=new wt(e._pt,t,i,r,l,Zf),g.e=u,g.u="deg",e._props.push(i),g},Ro=function(e,t){for(var i in t)e[i]=t[i];return e},_u=function(e,t,i){var r=Ro({},i._gsap),a="perspective,force3D,transformOrigin,svgOrigin",o=i.style,s,c,l,u,p,g,S,A;r.svg?(l=i.getAttribute("transform"),i.setAttribute("transform",""),o[at]=t,s=Ci(i,1),mn(i,at),i.setAttribute("transform",l)):(l=getComputedStyle(i)[at],o[at]=t,s=Ci(i,1),o[at]=l);for(c in sn)l=r[c],u=s[c],l!==u&&a.indexOf(c)<0&&(S=St(l),A=St(u),p=S!==A?gn(i,c,l,A):parseFloat(l),g=parseFloat(u),e._pt=new wt(e._pt,s,c,p,g-p,$r),e._pt.u=A||0,e._props.push(c));Ro(s,r)};Pt("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",a="Left",o=(e<3?[t,i,r,a]:[t+a,t+i,r+i,r+a]).map(function(s){return e<2?n+s:"border"+s+n});Qi[e>1?"border"+n:n]=function(s,c,l,u,p){var g,S;if(arguments.length<4)return g=o.map(function(A){return nn(s,A,l)}),S=g.join(" "),S.split(g[0]).length===5?g[0]:S;g=(u+"").split(" "),S={},o.forEach(function(A,_){return S[A]=g[_]=g[_]||g[(_-1)/2|0]}),s.init(c,S,p)}});var hl={name:"css",register:Qr,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,a){var o=this._props,s=e.style,c=i.vars.startAt,l,u,p,g,S,A,_,d,f,R,x,T,b,C,D,L,m;_a||Qr(),this.styles=this.styles||sl(e),L=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(It[_]&&Zs(_,t,i,r,e,a)))){if(S=typeof u,A=Qi[_],S==="function"&&(u=u.call(i,r,e,a),S=typeof u),S==="string"&&~u.indexOf("random(")&&(u=xi(u)),A)A(this,e,_,u,i)&&(D=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",hn.lastIndex=0,hn.test(l)||(d=St(l),f=St(u),f?d!==f&&(l=gn(e,_,l,f)+f):d&&(u+=d)),this.add(s,"setProperty",l,u,r,a,0,0,_),o.push(_),L.push(_,0,s[_]);else if(S!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(i,r,e,a):c[_],gt(l)&&~l.indexOf("random(")&&(l=xi(l)),St(l+"")||l==="auto"||(l+=Bt.units[_]||St(nn(e,_))||""),(l+"").charAt(1)==="="&&(l=nn(e,_))):l=nn(e,_),g=parseFloat(l),R=S==="string"&&u.charAt(1)==="="&&u.substr(0,2),R&&(u=u.substr(2)),p=parseFloat(u),_ in Qt&&(_==="autoAlpha"&&(g===1&&nn(e,"visibility")==="hidden"&&p&&(g=0),L.push("visibility",0,s.visibility),un(this,s,"visibility",g?"inherit":"hidden",p?"inherit":"hidden",!p)),_!=="scale"&&_!=="transform"&&(_=Qt[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in sn,x){if(this.styles.save(_),m=u,S==="string"&&u.substring(0,6)==="var(--"){if(u=Ft(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=u,u=Ft(e,"perspective"),E?e.style.perspective=E:mn(e,"perspective")}p=parseFloat(u)}if(T||(b=e._gsap,b.renderTransform&&!t.parseTransform||Ci(e,t.parseTransform),C=t.smoothOrigin!==!1&&b.smooth,T=this._pt=new wt(this._pt,s,at,0,1,b.renderTransform,b,0,-1),T.dep=1),_==="scale")this._pt=new wt(this._pt,b,"scaleY",b.scaleY,(R?qn(b.scaleY,R+p):p)-b.scaleY||0,$r),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(Dt,0,s[Dt]),u=fu(u),b.svg?Jr(e,u,0,C,0,this):(f=parseFloat(u.split(" ")[2])||0,f!==b.zOrigin&&un(this,b,"zOrigin",b.zOrigin,f),un(this,s,_,Ji(l),Ji(u)));continue}else if(_==="svgOrigin"){Jr(e,u,1,C,0,this);continue}else if(_ in ul){hu(this,b,_,g,R?qn(g,R+u):u);continue}else if(_==="smoothOrigin"){un(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){_u(this,u,e);continue}}else _ in s||(_=ii(_)||_);if(x||(p||p===0)&&(g||g===0)&&!$f.test(u)&&_ in s)d=(l+"").substr((g+"").length),p||(p=0),f=St(u)||(_ in Bt.units?Bt.units[_]:d),d!==f&&(g=gn(e,_,l,f)),this._pt=new wt(this._pt,x?b:s,_,g,(R?qn(g,R+p):p)-g,!x&&(f==="px"||_==="zIndex")&&t.autoRound!==!1?jf:$r),this._pt.u=f||0,x&&m!==u?(this._pt.b=l,this._pt.e=m,this._pt.r=Jf):d!==f&&f!=="%"&&(this._pt.b=l,this._pt.r=Qf);else if(_ in s)cu.call(this,e,_,l,R?R+u:u);else if(_ in e)this.add(e,_,l||e[_],R?R+u:u,r,a);else if(_!=="parseTransform"){aa(_,u);continue}x||(_ in s?L.push(_,0,s[_]):typeof e[_]=="function"?L.push(_,2,e[_]()):L.push(_,1,l||e[_])),o.push(_)}}D&&nl(this)},render:function(e,t){if(t.tween._time||!ma())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:nn,aliases:Qt,getSetter:function(e,t,i){var r=Qt[t];return r&&r.indexOf(",")<0&&(t=r),t in sn&&t!==Dt&&(e._gsap.x||nn(e,"x"))?i&&go===i?t==="scale"?iu:nu:(go=i||{})&&(t==="scale"?ru:au):e.style&&!na(e.style[t])?eu:~t.indexOf("-")?tu:pa(e,t)},core:{_removeProperty:mn,_getMatrix:va}};yt.utils.checkPrefix=ii;yt.core.getStyleSaver=sl;(function(n,e,t,i){var r=Pt(n+","+e+","+t,function(a){sn[a]=1});Pt(e,function(a){Bt.units[a]="deg",ul[a]=1}),Qt[r[13]]=n+","+e,Pt(i,function(a){var o=a.split(":");Qt[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Pt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Bt.units[n]="px"});yt.registerPlugin(hl);var Sa=yt.registerPlugin(hl)||yt;Sa.core.Tween;function _l(){let n=null,e=!1,t=null,i=null;function r(a,o){t(a,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function mu(n){const e=new WeakMap;function t(s,c){const l=s.array,u=s.usage,p=l.byteLength,g=n.createBuffer();n.bindBuffer(c,g),n.bufferData(c,l,u),s.onUploadCallback();let S;if(l instanceof Float32Array)S=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)S=n.HALF_FLOAT;else if(l instanceof Uint16Array)s.isFloat16BufferAttribute?S=n.HALF_FLOAT:S=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)S=n.SHORT;else if(l instanceof Uint32Array)S=n.UNSIGNED_INT;else if(l instanceof Int32Array)S=n.INT;else if(l instanceof Int8Array)S=n.BYTE;else if(l instanceof Uint8Array)S=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)S=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:g,type:S,bytesPerElement:l.BYTES_PER_ELEMENT,version:s.version,size:p}}function i(s,c,l){const u=c.array,p=c.updateRanges;if(n.bindBuffer(l,s),p.length===0)n.bufferSubData(l,0,u);else{p.sort((S,A)=>S.start-A.start);let g=0;for(let S=1;S<p.length;S++){const A=p[g],_=p[S];_.start<=A.start+A.count+1?A.count=Math.max(A.count,_.start+_.count-A.start):(++g,p[g]=_)}p.length=g+1;for(let S=0,A=p.length;S<A;S++){const _=p[S];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const c=e.get(s);c&&(n.deleteBuffer(c.buffer),e.delete(s))}function o(s,c){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const u=e.get(s);(!u||u.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const l=e.get(s);if(l===void 0)e.set(s,t(s,c));else if(l.version<s.version){if(l.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,s,c),l.version=s.version}}return{get:r,remove:a,update:o}}var gu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Su=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ru=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Du=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Hu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ku=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ku=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$u=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ju=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ed=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ad=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ld=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ud=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_d=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,md=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ed=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Md=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ad=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ld=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ud=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Id=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$d=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,np=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ip=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ap=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,up=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ap=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Up=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Np=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Op=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$p=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:gu,alphahash_pars_fragment:vu,alphamap_fragment:Su,alphamap_pars_fragment:Eu,alphatest_fragment:Tu,alphatest_pars_fragment:Mu,aomap_fragment:xu,aomap_pars_fragment:Au,batching_pars_vertex:Ru,batching_vertex:bu,begin_vertex:Cu,beginnormal_vertex:Pu,bsdfs:wu,iridescence_fragment:Du,bumpmap_pars_fragment:yu,clipping_planes_fragment:Lu,clipping_planes_pars_fragment:Uu,clipping_planes_pars_vertex:Iu,clipping_planes_vertex:Nu,color_fragment:Ou,color_pars_fragment:Fu,color_pars_vertex:Bu,color_vertex:Gu,common:Hu,cube_uv_reflection_fragment:Vu,defaultnormal_vertex:ku,displacementmap_pars_vertex:zu,displacementmap_vertex:Wu,emissivemap_fragment:Xu,emissivemap_pars_fragment:Yu,colorspace_fragment:qu,colorspace_pars_fragment:Ku,envmap_fragment:$u,envmap_common_pars_fragment:Zu,envmap_pars_fragment:Qu,envmap_pars_vertex:Ju,envmap_physical_pars_fragment:cd,envmap_vertex:ju,fog_vertex:ed,fog_pars_vertex:td,fog_fragment:nd,fog_pars_fragment:id,gradientmap_pars_fragment:rd,lightmap_pars_fragment:ad,lights_lambert_fragment:od,lights_lambert_pars_fragment:sd,lights_pars_begin:ld,lights_toon_fragment:fd,lights_toon_pars_fragment:ud,lights_phong_fragment:dd,lights_phong_pars_fragment:pd,lights_physical_fragment:hd,lights_physical_pars_fragment:_d,lights_fragment_begin:md,lights_fragment_maps:gd,lights_fragment_end:vd,logdepthbuf_fragment:Sd,logdepthbuf_pars_fragment:Ed,logdepthbuf_pars_vertex:Td,logdepthbuf_vertex:Md,map_fragment:xd,map_pars_fragment:Ad,map_particle_fragment:Rd,map_particle_pars_fragment:bd,metalnessmap_fragment:Cd,metalnessmap_pars_fragment:Pd,morphinstance_vertex:wd,morphcolor_vertex:Dd,morphnormal_vertex:yd,morphtarget_pars_vertex:Ld,morphtarget_vertex:Ud,normal_fragment_begin:Id,normal_fragment_maps:Nd,normal_pars_fragment:Od,normal_pars_vertex:Fd,normal_vertex:Bd,normalmap_pars_fragment:Gd,clearcoat_normal_fragment_begin:Hd,clearcoat_normal_fragment_maps:Vd,clearcoat_pars_fragment:kd,iridescence_pars_fragment:zd,opaque_fragment:Wd,packing:Xd,premultiplied_alpha_fragment:Yd,project_vertex:qd,dithering_fragment:Kd,dithering_pars_fragment:$d,roughnessmap_fragment:Zd,roughnessmap_pars_fragment:Qd,shadowmap_pars_fragment:Jd,shadowmap_pars_vertex:jd,shadowmap_vertex:ep,shadowmask_pars_fragment:tp,skinbase_vertex:np,skinning_pars_vertex:ip,skinning_vertex:rp,skinnormal_vertex:ap,specularmap_fragment:op,specularmap_pars_fragment:sp,tonemapping_fragment:lp,tonemapping_pars_fragment:cp,transmission_fragment:fp,transmission_pars_fragment:up,uv_pars_fragment:dp,uv_pars_vertex:pp,uv_vertex:hp,worldpos_vertex:_p,background_vert:mp,background_frag:gp,backgroundCube_vert:vp,backgroundCube_frag:Sp,cube_vert:Ep,cube_frag:Tp,depth_vert:Mp,depth_frag:xp,distanceRGBA_vert:Ap,distanceRGBA_frag:Rp,equirect_vert:bp,equirect_frag:Cp,linedashed_vert:Pp,linedashed_frag:wp,meshbasic_vert:Dp,meshbasic_frag:yp,meshlambert_vert:Lp,meshlambert_frag:Up,meshmatcap_vert:Ip,meshmatcap_frag:Np,meshnormal_vert:Op,meshnormal_frag:Fp,meshphong_vert:Bp,meshphong_frag:Gp,meshphysical_vert:Hp,meshphysical_frag:Vp,meshtoon_vert:kp,meshtoon_frag:zp,points_vert:Wp,points_frag:Xp,shadow_vert:Yp,shadow_frag:qp,sprite_vert:Kp,sprite_frag:$p},ie={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},$t={basic:{uniforms:At([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:At([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new je(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:At([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:At([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:At([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new je(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:At([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:At([ie.points,ie.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:At([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:At([ie.common,ie.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:At([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:At([ie.sprite,ie.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:At([ie.common,ie.displacementmap,{referencePosition:{value:new Ye},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:At([ie.lights,ie.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};$t.physical={uniforms:At([$t.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Ui={r:0,b:0,g:0},xn=new hs,Zp=new mi;function Qp(n,e,t,i,r,a,o){const s=new je(0);let c=a===!0?0:1,l,u,p=null,g=0,S=null;function A(x){let T=x.isScene===!0?x.background:null;return T&&T.isTexture&&(T=(x.backgroundBlurriness>0?t:e).get(T)),T}function _(x){let T=!1;const b=A(x);b===null?f(s,c):b&&b.isColor&&(f(b,1),T=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function d(x,T){const b=A(T);b&&(b.isCubeTexture||b.mapping===tr)?(u===void 0&&(u=new ln(new ps(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:ro($t.backgroundCube.uniforms),vertexShader:$t.backgroundCube.vertexShader,fragmentShader:$t.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),xn.copy(T.backgroundRotation),xn.x*=-1,xn.y*=-1,xn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(xn.y*=-1,xn.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Zp.makeRotationFromEuler(xn)),u.material.toneMapped=dt.getTransfer(b.colorSpace)!==Qe,(p!==b||g!==b.version||S!==n.toneMapping)&&(u.material.needsUpdate=!0,p=b,g=b.version,S=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ln(new os(2,2),new On({name:"BackgroundMaterial",uniforms:ro($t.background.uniforms),vertexShader:$t.background.vertexShader,fragmentShader:$t.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=dt.getTransfer(b.colorSpace)!==Qe,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(p!==b||g!==b.version||S!==n.toneMapping)&&(l.material.needsUpdate=!0,p=b,g=b.version,S=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function f(x,T){x.getRGB(Ui,ds(n)),i.buffers.color.setClear(Ui.r,Ui.g,Ui.b,T,o)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(x,T=1){s.set(x),c=T,f(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,f(s,c)},render:_,addToRenderList:d,dispose:R}}function Jp(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=g(null);let a=r,o=!1;function s(E,P,k,G,V){let q=!1;const H=p(G,k,P);a!==H&&(a=H,l(a.object)),q=S(E,G,k,V),q&&A(E,G,k,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,T(E,P,k,G),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return n.createVertexArray()}function l(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function p(E,P,k){const G=k.wireframe===!0;let V=i[E.id];V===void 0&&(V={},i[E.id]=V);let q=V[P.id];q===void 0&&(q={},V[P.id]=q);let H=q[G];return H===void 0&&(H=g(c()),q[G]=H),H}function g(E){const P=[],k=[],G=[];for(let V=0;V<t;V++)P[V]=0,k[V]=0,G[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:G,object:E,attributes:{},index:null}}function S(E,P,k,G){const V=a.attributes,q=P.attributes;let H=0;const $=k.getAttributes();for(const B in $)if($[B].location>=0){const ge=V[B];let Pe=q[B];if(Pe===void 0&&(B==="instanceMatrix"&&E.instanceMatrix&&(Pe=E.instanceMatrix),B==="instanceColor"&&E.instanceColor&&(Pe=E.instanceColor)),ge===void 0||ge.attribute!==Pe||Pe&&ge.data!==Pe.data)return!0;H++}return a.attributesNum!==H||a.index!==G}function A(E,P,k,G){const V={},q=P.attributes;let H=0;const $=k.getAttributes();for(const B in $)if($[B].location>=0){let ge=q[B];ge===void 0&&(B==="instanceMatrix"&&E.instanceMatrix&&(ge=E.instanceMatrix),B==="instanceColor"&&E.instanceColor&&(ge=E.instanceColor));const Pe={};Pe.attribute=ge,ge&&ge.data&&(Pe.data=ge.data),V[B]=Pe,H++}a.attributes=V,a.attributesNum=H,a.index=G}function _(){const E=a.newAttributes;for(let P=0,k=E.length;P<k;P++)E[P]=0}function d(E){f(E,0)}function f(E,P){const k=a.newAttributes,G=a.enabledAttributes,V=a.attributeDivisors;k[E]=1,G[E]===0&&(n.enableVertexAttribArray(E),G[E]=1),V[E]!==P&&(n.vertexAttribDivisor(E,P),V[E]=P)}function R(){const E=a.newAttributes,P=a.enabledAttributes;for(let k=0,G=P.length;k<G;k++)P[k]!==E[k]&&(n.disableVertexAttribArray(k),P[k]=0)}function x(E,P,k,G,V,q,H){H===!0?n.vertexAttribIPointer(E,P,k,V,q):n.vertexAttribPointer(E,P,k,G,V,q)}function T(E,P,k,G){_();const V=G.attributes,q=k.getAttributes(),H=P.defaultAttributeValues;for(const $ in q){const B=q[$];if(B.location>=0){let de=V[$];if(de===void 0&&($==="instanceMatrix"&&E.instanceMatrix&&(de=E.instanceMatrix),$==="instanceColor"&&E.instanceColor&&(de=E.instanceColor)),de!==void 0){const ge=de.normalized,Pe=de.itemSize,Le=e.get(de);if(Le===void 0)continue;const ot=Le.buffer,Oe=Le.type,z=Le.bytesPerElement,re=Oe===n.INT||Oe===n.UNSIGNED_INT||de.gpuType===ss;if(de.isInterleavedBufferAttribute){const te=de.data,xe=te.stride,Ae=de.offset;if(te.isInstancedInterleavedBuffer){for(let we=0;we<B.locationSize;we++)f(B.location+we,te.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let we=0;we<B.locationSize;we++)d(B.location+we);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let we=0;we<B.locationSize;we++)x(B.location+we,Pe/B.locationSize,Oe,ge,xe*z,(Ae+Pe/B.locationSize*we)*z,re)}else{if(de.isInstancedBufferAttribute){for(let te=0;te<B.locationSize;te++)f(B.location+te,de.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let te=0;te<B.locationSize;te++)d(B.location+te);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let te=0;te<B.locationSize;te++)x(B.location+te,Pe/B.locationSize,Oe,ge,Pe*z,Pe/B.locationSize*te*z,re)}}else if(H!==void 0){const ge=H[$];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(B.location,ge);break;case 3:n.vertexAttrib3fv(B.location,ge);break;case 4:n.vertexAttrib4fv(B.location,ge);break;default:n.vertexAttrib1fv(B.location,ge)}}}}R()}function b(){L();for(const E in i){const P=i[E];for(const k in P){const G=P[k];for(const V in G)u(G[V].object),delete G[V];delete P[k]}delete i[E]}}function C(E){if(i[E.id]===void 0)return;const P=i[E.id];for(const k in P){const G=P[k];for(const V in G)u(G[V].object),delete G[V];delete P[k]}delete i[E.id]}function D(E){for(const P in i){const k=i[P];if(k[E.id]===void 0)continue;const G=k[E.id];for(const V in G)u(G[V].object),delete G[V];delete k[E.id]}}function L(){m(),o=!0,a!==r&&(a=r,l(a.object))}function m(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:L,resetDefaultState:m,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:d,disableUnusedAttributes:R}}function jp(n,e,t){let i;function r(l){i=l}function a(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,p){p!==0&&(n.drawArraysInstanced(i,l,u,p),t.update(u,i,p))}function s(l,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,p);let S=0;for(let A=0;A<p;A++)S+=u[A];t.update(S,i,1)}function c(l,u,p,g){if(p===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let A=0;A<l.length;A++)o(l[A],u[A],g[A]);else{S.multiDrawArraysInstancedWEBGL(i,l,0,u,0,g,0,p);let A=0;for(let _=0;_<p;_++)A+=u[_]*g[_];t.update(A,i,1)}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function eh(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==an&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(D){const L=D===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Nn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Pn&&!L)}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const p=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),A=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=A>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:A,maxTextureSize:_,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:R,maxVaryings:x,maxFragmentUniforms:T,vertexTextures:b,maxSamples:C}}function th(n){const e=this;let t=null,i=0,r=!1,a=!1;const o=new sc,s=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){const S=p.length!==0||g||i!==0||r;return r=g,i=p.length,S},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,g){t=u(p,g,0)},this.setState=function(p,g,S){const A=p.clippingPlanes,_=p.clipIntersection,d=p.clipShadows,f=n.get(p);if(!r||A===null||A.length===0||a&&!d)a?u(null):l();else{const R=a?0:i,x=R*4;let T=f.clippingState||null;c.value=T,T=u(A,g,x,S);for(let b=0;b!==x;++b)T[b]=t[b];f.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(p,g,S,A){const _=p!==null?p.length:0;let d=null;if(_!==0){if(d=c.value,A!==!0||d===null){const f=S+_*4,R=g.matrixWorldInverse;s.getNormalMatrix(R),(d===null||d.length<f)&&(d=new Float32Array(f));for(let x=0,T=S;x!==_;++x,T+=4)o.copy(p[x]).applyMatrix4(R,s),o.normal.toArray(d,T),d[T+3]=o.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,d}}function nh(n){let e=new WeakMap;function t(o,s){return s===Fr?o.mapping=Ei:s===Br&&(o.mapping=Qn),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===Fr||s===Br)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Mc(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const Xn=4,bo=[.125,.215,.35,.446,.526,.582],Cn=20,xr=new bc,Co=new je;let Ar=null,Rr=0,br=0,Cr=!1;const bn=(1+Math.sqrt(5))/2,Hn=1/bn,Po=[new Ye(-bn,Hn,0),new Ye(bn,Hn,0),new Ye(-Hn,0,bn),new Ye(Hn,0,bn),new Ye(0,bn,-Hn),new Ye(0,bn,Hn),new Ye(-1,1,-1),new Ye(1,1,-1),new Ye(-1,1,1),new Ye(1,1,1)],ih=new Ye;class wo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,a={}){const{size:o=256,position:s=ih}=a;Ar=this._renderer.getRenderTarget(),Rr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Cr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,s),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ar,Rr,br),this._renderer.xr.enabled=Cr,e.scissorTest=!1,Ii(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===Qn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ar=this._renderer.getRenderTarget(),Rr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Cr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:ji,format:an,colorSpace:er,depthBuffer:!1},r=Do(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Do(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rh(a)),this._blurMaterial=ah(a,e,t)}return r}_compileMaterial(e){const t=new ln(this._lodPlanes[0],e);this._renderer.compile(t,xr)}_sceneToCubeUV(e,t,i,r,a){const c=new Yn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,S=p.toneMapping;p.getClearColor(Co),p.toneMapping=dn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null));const _=new Cc({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),d=new ln(new ps,_);let f=!1;const R=e.background;R?R.isColor&&(_.color.copy(R),e.background=null,f=!0):(_.color.copy(Co),f=!0);for(let x=0;x<6;x++){const T=x%3;T===0?(c.up.set(0,l[x],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+u[x],a.y,a.z)):T===1?(c.up.set(0,0,l[x]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+u[x],a.z)):(c.up.set(0,l[x],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+u[x]));const b=this._cubeSize;Ii(r,T*b,x>2?b:0,b,b),p.setRenderTarget(r),f&&p.render(d,c),p.render(e,c)}d.geometry.dispose(),d.material.dispose(),p.toneMapping=S,p.autoClear=g,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ei||e.mapping===Qn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yo());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new ln(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const c=this._cubeSize;Ii(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,xr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=Po[(r-a-1)%Po.length];this._blur(e,a-1,a,o,s)}t.autoClear=i}_blur(e,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,o,s){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new ln(this._lodPlanes[r],l),g=l.uniforms,S=this._sizeLods[i]-1,A=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*Cn-1),_=a/A,d=isFinite(a)?1+Math.floor(u*_):Cn;d>Cn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Cn}`);const f=[];let R=0;for(let D=0;D<Cn;++D){const L=D/_,m=Math.exp(-L*L/2);f.push(m),D===0?R+=m:D<d&&(R+=2*m)}for(let D=0;D<f.length;D++)f[D]=f[D]/R;g.envMap.value=e.texture,g.samples.value=d,g.weights.value=f,g.latitudinal.value=o==="latitudinal",s&&(g.poleAxis.value=s);const{_lodMax:x}=this;g.dTheta.value=A,g.mipInt.value=x-i;const T=this._sizeLods[r],b=3*T*(r>x-Xn?r-x+Xn:0),C=4*(this._cubeSize-T);Ii(t,b,C,3*T,2*T),c.setRenderTarget(t),c.render(p,xr)}}function rh(n){const e=[],t=[],i=[];let r=n;const a=n-Xn+1+bo.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let c=1/s;o>n-Xn?c=bo[o-n+Xn-1]:o===0&&(c=0),i.push(c);const l=1/(s-2),u=-l,p=1+l,g=[u,u,p,u,p,p,u,u,p,p,u,p],S=6,A=6,_=3,d=2,f=1,R=new Float32Array(_*A*S),x=new Float32Array(d*A*S),T=new Float32Array(f*A*S);for(let C=0;C<S;C++){const D=C%3*2/3-1,L=C>2?0:-1,m=[D,L,0,D+2/3,L,0,D+2/3,L+1,0,D,L,0,D+2/3,L+1,0,D,L+1,0];R.set(m,_*A*C),x.set(g,d*A*C);const E=[C,C,C,C,C,C];T.set(E,f*A*C)}const b=new ns;b.setAttribute("position",new Fi(R,_)),b.setAttribute("uv",new Fi(x,d)),b.setAttribute("faceIndex",new Fi(T,f)),e.push(b),r>Xn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Do(n,e,t){const i=new Zn(n,e,t);return i.texture.mapping=tr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ii(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ah(n,e,t){const i=new Float32Array(Cn),r=new Ye(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Cn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function yo(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Lo(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Ea(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oh(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const c=s.mapping,l=c===Fr||c===Br,u=c===Ei||c===Qn;if(l||u){let p=e.get(s);const g=p!==void 0?p.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==g)return t===null&&(t=new wo(n)),p=l?t.fromEquirectangular(s,p):t.fromCubemap(s,p),p.texture.pmremVersion=s.pmremVersion,e.set(s,p),p.texture;if(p!==void 0)return p.texture;{const S=s.image;return l&&S&&S.height>0||u&&S&&r(S)?(t===null&&(t=new wo(n)),p=l?t.fromEquirectangular(s):t.fromCubemap(s),p.texture.pmremVersion=s.pmremVersion,e.set(s,p),s.addEventListener("dispose",a),p.texture):null}}}return s}function r(s){let c=0;const l=6;for(let u=0;u<l;u++)s[u]!==void 0&&c++;return c===l}function a(s){const c=s.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function sh(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Oi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function lh(n,e,t,i){const r={},a=new WeakMap;function o(p){const g=p.target;g.index!==null&&e.remove(g.index);for(const A in g.attributes)e.remove(g.attributes[A]);g.removeEventListener("dispose",o),delete r[g.id];const S=a.get(g);S&&(e.remove(S),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function s(p,g){return r[g.id]===!0||(g.addEventListener("dispose",o),r[g.id]=!0,t.memory.geometries++),g}function c(p){const g=p.attributes;for(const S in g)e.update(g[S],n.ARRAY_BUFFER)}function l(p){const g=[],S=p.index,A=p.attributes.position;let _=0;if(S!==null){const R=S.array;_=S.version;for(let x=0,T=R.length;x<T;x+=3){const b=R[x+0],C=R[x+1],D=R[x+2];g.push(b,C,C,D,D,b)}}else if(A!==void 0){const R=A.array;_=A.version;for(let x=0,T=R.length/3-1;x<T;x+=3){const b=x+0,C=x+1,D=x+2;g.push(b,C,C,D,D,b)}}else return;const d=new(Dc(g)?Pc:wc)(g,1);d.version=_;const f=a.get(p);f&&e.remove(f),a.set(p,d)}function u(p){const g=a.get(p);if(g){const S=p.index;S!==null&&g.version<S.version&&l(p)}else l(p);return a.get(p)}return{get:s,update:c,getWireframeAttribute:u}}function ch(n,e,t){let i;function r(g){i=g}let a,o;function s(g){a=g.type,o=g.bytesPerElement}function c(g,S){n.drawElements(i,S,a,g*o),t.update(S,i,1)}function l(g,S,A){A!==0&&(n.drawElementsInstanced(i,S,a,g*o,A),t.update(S,i,A))}function u(g,S,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,S,0,a,g,0,A);let d=0;for(let f=0;f<A;f++)d+=S[f];t.update(d,i,1)}function p(g,S,A,_){if(A===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<g.length;f++)l(g[f]/o,S[f],_[f]);else{d.multiDrawElementsInstancedWEBGL(i,S,0,a,g,0,_,0,A);let f=0;for(let R=0;R<A;R++)f+=S[R]*_[R];t.update(f,i,1)}}this.setMode=r,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function fh(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=s*(a/3);break;case n.LINES:t.lines+=s*(a/2);break;case n.LINE_STRIP:t.lines+=s*(a-1);break;case n.LINE_LOOP:t.lines+=s*a;break;case n.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function uh(n,e,t){const i=new WeakMap,r=new Rt;function a(o,s,c){const l=o.morphTargetInfluences,u=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,p=u!==void 0?u.length:0;let g=i.get(s);if(g===void 0||g.count!==p){let m=function(){D.dispose(),i.delete(s),s.removeEventListener("dispose",m)};g!==void 0&&g.texture.dispose();const S=s.morphAttributes.position!==void 0,A=s.morphAttributes.normal!==void 0,_=s.morphAttributes.color!==void 0,d=s.morphAttributes.position||[],f=s.morphAttributes.normal||[],R=s.morphAttributes.color||[];let x=0;S===!0&&(x=1),A===!0&&(x=2),_===!0&&(x=3);let T=s.attributes.position.count*x,b=1;T>e.maxTextureSize&&(b=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*b*4*p),D=new us(C,T,b,p);D.type=Pn,D.needsUpdate=!0;const L=x*4;for(let E=0;E<p;E++){const P=d[E],k=f[E],G=R[E],V=T*b*4*E;for(let q=0;q<P.count;q++){const H=q*L;S===!0&&(r.fromBufferAttribute(P,q),C[V+H+0]=r.x,C[V+H+1]=r.y,C[V+H+2]=r.z,C[V+H+3]=0),A===!0&&(r.fromBufferAttribute(k,q),C[V+H+4]=r.x,C[V+H+5]=r.y,C[V+H+6]=r.z,C[V+H+7]=0),_===!0&&(r.fromBufferAttribute(G,q),C[V+H+8]=r.x,C[V+H+9]=r.y,C[V+H+10]=r.z,C[V+H+11]=G.itemSize===4?r.w:1)}}g={count:p,texture:D,size:new bt(T,b)},i.set(s,g),s.addEventListener("dispose",m)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let S=0;for(let _=0;_<l.length;_++)S+=l[_];const A=s.morphTargetsRelative?1:1-S;c.getUniforms().setValue(n,"morphTargetBaseInfluence",A),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:a}}function dh(n,e,t,i){let r=new WeakMap;function a(c){const l=i.render.frame,u=c.geometry,p=e.get(c,u);if(r.get(p)!==l&&(e.update(p),r.set(p,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const g=c.skeleton;r.get(g)!==l&&(g.update(),r.set(g,l))}return p}function o(){r=new WeakMap}function s(c){const l=c.target;l.removeEventListener("dispose",s),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:o}}const ml=new _s,Uo=new es(1,1),gl=new us,vl=new Vc,Sl=new Hc,Io=[],No=[],Oo=new Float32Array(16),Fo=new Float32Array(9),Bo=new Float32Array(4);function ri(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=Io[r];if(a===void 0&&(a=new Float32Array(r),Io[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,n[o].toArray(a,s)}return a}function ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ar(n,e){let t=No[e];t===void 0&&(t=new Int32Array(e),No[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ph(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2fv(this.addr,e),_t(t,e)}}function _h(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;n.uniform3fv(this.addr,e),_t(t,e)}}function mh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4fv(this.addr,e),_t(t,e)}}function gh(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(ht(t,i))return;Bo.set(i),n.uniformMatrix2fv(this.addr,!1,Bo),_t(t,i)}}function vh(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(ht(t,i))return;Fo.set(i),n.uniformMatrix3fv(this.addr,!1,Fo),_t(t,i)}}function Sh(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(ht(t,i))return;Oo.set(i),n.uniformMatrix4fv(this.addr,!1,Oo),_t(t,i)}}function Eh(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Th(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2iv(this.addr,e),_t(t,e)}}function Mh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3iv(this.addr,e),_t(t,e)}}function xh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4iv(this.addr,e),_t(t,e)}}function Ah(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Rh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2uiv(this.addr,e),_t(t,e)}}function bh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3uiv(this.addr,e),_t(t,e)}}function Ch(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4uiv(this.addr,e),_t(t,e)}}function Ph(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(Uo.compareFunction=ts,a=Uo):a=ml,t.setTexture2D(e||a,r)}function wh(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||vl,r)}function Dh(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Sl,r)}function yh(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||gl,r)}function Lh(n){switch(n){case 5126:return ph;case 35664:return hh;case 35665:return _h;case 35666:return mh;case 35674:return gh;case 35675:return vh;case 35676:return Sh;case 5124:case 35670:return Eh;case 35667:case 35671:return Th;case 35668:case 35672:return Mh;case 35669:case 35673:return xh;case 5125:return Ah;case 36294:return Rh;case 36295:return bh;case 36296:return Ch;case 35678:case 36198:case 36298:case 36306:case 35682:return Ph;case 35679:case 36299:case 36307:return wh;case 35680:case 36300:case 36308:case 36293:return Dh;case 36289:case 36303:case 36311:case 36292:return yh}}function Uh(n,e){n.uniform1fv(this.addr,e)}function Ih(n,e){const t=ri(e,this.size,2);n.uniform2fv(this.addr,t)}function Nh(n,e){const t=ri(e,this.size,3);n.uniform3fv(this.addr,t)}function Oh(n,e){const t=ri(e,this.size,4);n.uniform4fv(this.addr,t)}function Fh(n,e){const t=ri(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Bh(n,e){const t=ri(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Gh(n,e){const t=ri(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Hh(n,e){n.uniform1iv(this.addr,e)}function Vh(n,e){n.uniform2iv(this.addr,e)}function kh(n,e){n.uniform3iv(this.addr,e)}function zh(n,e){n.uniform4iv(this.addr,e)}function Wh(n,e){n.uniform1uiv(this.addr,e)}function Xh(n,e){n.uniform2uiv(this.addr,e)}function Yh(n,e){n.uniform3uiv(this.addr,e)}function qh(n,e){n.uniform4uiv(this.addr,e)}function Kh(n,e,t){const i=this.cache,r=e.length,a=ar(t,r);ht(i,a)||(n.uniform1iv(this.addr,a),_t(i,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ml,a[o])}function $h(n,e,t){const i=this.cache,r=e.length,a=ar(t,r);ht(i,a)||(n.uniform1iv(this.addr,a),_t(i,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||vl,a[o])}function Zh(n,e,t){const i=this.cache,r=e.length,a=ar(t,r);ht(i,a)||(n.uniform1iv(this.addr,a),_t(i,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Sl,a[o])}function Qh(n,e,t){const i=this.cache,r=e.length,a=ar(t,r);ht(i,a)||(n.uniform1iv(this.addr,a),_t(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||gl,a[o])}function Jh(n){switch(n){case 5126:return Uh;case 35664:return Ih;case 35665:return Nh;case 35666:return Oh;case 35674:return Fh;case 35675:return Bh;case 35676:return Gh;case 5124:case 35670:return Hh;case 35667:case 35671:return Vh;case 35668:case 35672:return kh;case 35669:case 35673:return zh;case 5125:return Wh;case 36294:return Xh;case 36295:return Yh;case 36296:return qh;case 35678:case 36198:case 36298:case 36306:case 35682:return Kh;case 35679:case 36299:case 36307:return $h;case 35680:case 36300:case 36308:case 36293:return Zh;case 36289:case 36303:case 36311:case 36292:return Qh}}class jh{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Lh(t.type)}}class e_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jh(t.type)}}class t_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],i)}}}const Pr=/(\w+)(\])?(\[|\.)?/g;function Go(n,e){n.seq.push(e),n.map[e.id]=e}function n_(n,e,t){const i=n.name,r=i.length;for(Pr.lastIndex=0;;){const a=Pr.exec(i),o=Pr.lastIndex;let s=a[1];const c=a[2]==="]",l=a[3];if(c&&(s=s|0),l===void 0||l==="["&&o+2===r){Go(t,l===void 0?new jh(s,n,e):new e_(s,n,e));break}else{let p=t.map[s];p===void 0&&(p=new t_(s),Go(t,p)),t=p}}}class ki{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);n_(a,o,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],c=i[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ho(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const i_=37297;let r_=0;function a_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}const Vo=new He;function o_(n){dt._getMatrix(Vo,dt.workingColorSpace,n);const e=`mat3( ${Vo.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case ms:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ko(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+a_(n.getShaderSource(e),s)}else return a}function s_(n,e){const t=o_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function l_(n,e){let t;switch(e){case Gc:t="Linear";break;case Bc:t="Reinhard";break;case Fc:t="Cineon";break;case Oc:t="ACESFilmic";break;case Nc:t="AgX";break;case Ic:t="Neutral";break;case Uc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ni=new Ye;function c_(){dt.getLuminanceCoefficients(Ni);const n=Ni.x.toFixed(4),e=Ni.y.toFixed(4),t=Ni.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ui).join(`
`)}function u_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function d_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),o=a.name;let s=1;a.type===n.FLOAT_MAT2&&(s=2),a.type===n.FLOAT_MAT3&&(s=3),a.type===n.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:n.getAttribLocation(e,o),locationSize:s}}return t}function ui(n){return n!==""}function zo(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wo(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const p_=/^[ \t]*#include +<([\w\d./]+)>/gm;function jr(n){return n.replace(p_,__)}const h_=new Map;function __(n,e){let t=Ue[e];if(t===void 0){const i=h_.get(e);if(i!==void 0)t=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jr(t)}const m_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xo(n){return n.replace(m_,g_)}function g_(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Yo(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function v_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===is?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Lc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===en&&(e="SHADOWMAP_TYPE_VSM"),e}function S_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ei:case Qn:e="ENVMAP_TYPE_CUBE";break;case tr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function E_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Qn&&(e="ENVMAP_MODE_REFRACTION"),e}function T_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xc:e="ENVMAP_BLENDING_MULTIPLY";break;case Wc:e="ENVMAP_BLENDING_MIX";break;case zc:e="ENVMAP_BLENDING_ADD";break}return e}function M_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function x_(n,e,t,i){const r=n.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const c=v_(t),l=S_(t),u=E_(t),p=T_(t),g=M_(t),S=f_(t),A=u_(a),_=r.createProgram();let d,f,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(ui).join(`
`),d.length>0&&(d+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(ui).join(`
`),f.length>0&&(f+=`
`)):(d=[Yo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ui).join(`
`),f=[Yo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dn?"#define TONE_MAPPING":"",t.toneMapping!==dn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==dn?l_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,s_("linearToOutputTexel",t.outputColorSpace),c_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ui).join(`
`)),o=jr(o),o=zo(o,t),o=Wo(o,t),s=jr(s),s=zo(s,t),s=Wo(s,t),o=Xo(o),s=Xo(s),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,d=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,f=["#define varying in",t.glslVersion===oo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=R+d+o,T=R+f+s,b=Ho(r,r.VERTEX_SHADER,x),C=Ho(r,r.FRAGMENT_SHADER,T);r.attachShader(_,b),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(P){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(_)||"",G=r.getShaderInfoLog(b)||"",V=r.getShaderInfoLog(C)||"",q=k.trim(),H=G.trim(),$=V.trim();let B=!0,de=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,b,C);else{const ge=ko(r,b,"vertex"),Pe=ko(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+q+`
`+ge+`
`+Pe)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(H===""||$==="")&&(de=!1);de&&(P.diagnostics={runnable:B,programLog:q,vertexShader:{log:H,prefix:d},fragmentShader:{log:$,prefix:f}})}r.deleteShader(b),r.deleteShader(C),L=new ki(r,_),m=d_(r,_)}let L;this.getUniforms=function(){return L===void 0&&D(this),L};let m;this.getAttributes=function(){return m===void 0&&D(this),m};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(_,i_)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=r_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=C,this}let A_=0;class R_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new b_(e),t.set(e,i)),i}}class b_{constructor(e){this.id=A_++,this.code=e,this.usedTimes=0}}function C_(n,e,t,i,r,a,o){const s=new yc,c=new R_,l=new Set,u=[],p=r.logarithmicDepthBuffer,g=r.vertexTextures;let S=r.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(m){return l.add(m),m===0?"uv":`uv${m}`}function d(m,E,P,k,G){const V=k.fog,q=G.geometry,H=m.isMeshStandardMaterial?k.environment:null,$=(m.isMeshStandardMaterial?t:e).get(m.envMap||H),B=$&&$.mapping===tr?$.image.height:null,de=A[m.type];m.precision!==null&&(S=r.getMaxPrecision(m.precision),S!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",S,"instead."));const ge=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Pe=ge!==void 0?ge.length:0;let Le=0;q.morphAttributes.position!==void 0&&(Le=1),q.morphAttributes.normal!==void 0&&(Le=2),q.morphAttributes.color!==void 0&&(Le=3);let ot,Oe,z,re;if(de){const ke=$t[de];ot=ke.vertexShader,Oe=ke.fragmentShader}else ot=m.vertexShader,Oe=m.fragmentShader,c.update(m),z=c.getVertexShaderID(m),re=c.getFragmentShaderID(m);const te=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),Ae=G.isInstancedMesh===!0,we=G.isBatchedMesh===!0,ct=!!m.map,Be=!!m.matcap,w=!!$,Ke=!!m.aoMap,Te=!!m.lightMap,Ve=!!m.bumpMap,Se=!!m.normalMap,Je=!!m.displacementMap,fe=!!m.emissiveMap,Ie=!!m.metalnessMap,mt=!!m.roughnessMap,ft=m.anisotropy>0,M=m.clearcoat>0,h=m.dispersion>0,N=m.iridescence>0,X=m.sheen>0,K=m.transmission>0,W=ft&&!!m.anisotropyMap,ve=M&&!!m.clearcoatMap,ee=M&&!!m.clearcoatNormalMap,he=M&&!!m.clearcoatRoughnessMap,_e=N&&!!m.iridescenceMap,J=N&&!!m.iridescenceThicknessMap,se=X&&!!m.sheenColorMap,be=X&&!!m.sheenRoughnessMap,me=!!m.specularMap,ae=!!m.specularColorMap,ye=!!m.specularIntensityMap,y=K&&!!m.transmissionMap,j=K&&!!m.thicknessMap,ne=!!m.gradientMap,ce=!!m.alphaMap,Z=m.alphaTest>0,Y=!!m.alphaHash,pe=!!m.extensions;let De=dn;m.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(De=n.toneMapping);const $e={shaderID:de,shaderType:m.type,shaderName:m.name,vertexShader:ot,fragmentShader:Oe,defines:m.defines,customVertexShaderID:z,customFragmentShaderID:re,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:S,batching:we,batchingColor:we&&G._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&G.instanceColor!==null,instancingMorph:Ae&&G.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:er,alphaToCoverage:!!m.alphaToCoverage,map:ct,matcap:Be,envMap:w,envMapMode:w&&$.mapping,envMapCubeUVHeight:B,aoMap:Ke,lightMap:Te,bumpMap:Ve,normalMap:Se,displacementMap:g&&Je,emissiveMap:fe,normalMapObjectSpace:Se&&m.normalMapType===Rc,normalMapTangentSpace:Se&&m.normalMapType===Ac,metalnessMap:Ie,roughnessMap:mt,anisotropy:ft,anisotropyMap:W,clearcoat:M,clearcoatMap:ve,clearcoatNormalMap:ee,clearcoatRoughnessMap:he,dispersion:h,iridescence:N,iridescenceMap:_e,iridescenceThicknessMap:J,sheen:X,sheenColorMap:se,sheenRoughnessMap:be,specularMap:me,specularColorMap:ae,specularIntensityMap:ye,transmission:K,transmissionMap:y,thicknessMap:j,gradientMap:ne,opaque:m.transparent===!1&&m.blending===Bi&&m.alphaToCoverage===!1,alphaMap:ce,alphaTest:Z,alphaHash:Y,combine:m.combine,mapUv:ct&&_(m.map.channel),aoMapUv:Ke&&_(m.aoMap.channel),lightMapUv:Te&&_(m.lightMap.channel),bumpMapUv:Ve&&_(m.bumpMap.channel),normalMapUv:Se&&_(m.normalMap.channel),displacementMapUv:Je&&_(m.displacementMap.channel),emissiveMapUv:fe&&_(m.emissiveMap.channel),metalnessMapUv:Ie&&_(m.metalnessMap.channel),roughnessMapUv:mt&&_(m.roughnessMap.channel),anisotropyMapUv:W&&_(m.anisotropyMap.channel),clearcoatMapUv:ve&&_(m.clearcoatMap.channel),clearcoatNormalMapUv:ee&&_(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&_(m.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&_(m.iridescenceMap.channel),iridescenceThicknessMapUv:J&&_(m.iridescenceThicknessMap.channel),sheenColorMapUv:se&&_(m.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(m.sheenRoughnessMap.channel),specularMapUv:me&&_(m.specularMap.channel),specularColorMapUv:ae&&_(m.specularColorMap.channel),specularIntensityMapUv:ye&&_(m.specularIntensityMap.channel),transmissionMapUv:y&&_(m.transmissionMap.channel),thicknessMapUv:j&&_(m.thicknessMap.channel),alphaMapUv:ce&&_(m.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Se||ft),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!q.attributes.uv&&(ct||ce),fog:!!V,useFog:m.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:m.flatShading===!0&&m.wireframe===!1,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:xe,skinning:G.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Le,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:m.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:De,decodeVideoTexture:ct&&m.map.isVideoTexture===!0&&dt.getTransfer(m.map.colorSpace)===Qe,decodeVideoTextureEmissive:fe&&m.emissiveMap.isVideoTexture===!0&&dt.getTransfer(m.emissiveMap.colorSpace)===Qe,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===rn,flipSided:m.side===Yt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:pe&&m.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&m.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return $e.vertexUv1s=l.has(1),$e.vertexUv2s=l.has(2),$e.vertexUv3s=l.has(3),l.clear(),$e}function f(m){const E=[];if(m.shaderID?E.push(m.shaderID):(E.push(m.customVertexShaderID),E.push(m.customFragmentShaderID)),m.defines!==void 0)for(const P in m.defines)E.push(P),E.push(m.defines[P]);return m.isRawShaderMaterial===!1&&(R(E,m),x(E,m),E.push(n.outputColorSpace)),E.push(m.customProgramCacheKey),E.join()}function R(m,E){m.push(E.precision),m.push(E.outputColorSpace),m.push(E.envMapMode),m.push(E.envMapCubeUVHeight),m.push(E.mapUv),m.push(E.alphaMapUv),m.push(E.lightMapUv),m.push(E.aoMapUv),m.push(E.bumpMapUv),m.push(E.normalMapUv),m.push(E.displacementMapUv),m.push(E.emissiveMapUv),m.push(E.metalnessMapUv),m.push(E.roughnessMapUv),m.push(E.anisotropyMapUv),m.push(E.clearcoatMapUv),m.push(E.clearcoatNormalMapUv),m.push(E.clearcoatRoughnessMapUv),m.push(E.iridescenceMapUv),m.push(E.iridescenceThicknessMapUv),m.push(E.sheenColorMapUv),m.push(E.sheenRoughnessMapUv),m.push(E.specularMapUv),m.push(E.specularColorMapUv),m.push(E.specularIntensityMapUv),m.push(E.transmissionMapUv),m.push(E.thicknessMapUv),m.push(E.combine),m.push(E.fogExp2),m.push(E.sizeAttenuation),m.push(E.morphTargetsCount),m.push(E.morphAttributeCount),m.push(E.numDirLights),m.push(E.numPointLights),m.push(E.numSpotLights),m.push(E.numSpotLightMaps),m.push(E.numHemiLights),m.push(E.numRectAreaLights),m.push(E.numDirLightShadows),m.push(E.numPointLightShadows),m.push(E.numSpotLightShadows),m.push(E.numSpotLightShadowsWithMaps),m.push(E.numLightProbes),m.push(E.shadowMapType),m.push(E.toneMapping),m.push(E.numClippingPlanes),m.push(E.numClipIntersection),m.push(E.depthPacking)}function x(m,E){s.disableAll(),E.supportsVertexTextures&&s.enable(0),E.instancing&&s.enable(1),E.instancingColor&&s.enable(2),E.instancingMorph&&s.enable(3),E.matcap&&s.enable(4),E.envMap&&s.enable(5),E.normalMapObjectSpace&&s.enable(6),E.normalMapTangentSpace&&s.enable(7),E.clearcoat&&s.enable(8),E.iridescence&&s.enable(9),E.alphaTest&&s.enable(10),E.vertexColors&&s.enable(11),E.vertexAlphas&&s.enable(12),E.vertexUv1s&&s.enable(13),E.vertexUv2s&&s.enable(14),E.vertexUv3s&&s.enable(15),E.vertexTangents&&s.enable(16),E.anisotropy&&s.enable(17),E.alphaHash&&s.enable(18),E.batching&&s.enable(19),E.dispersion&&s.enable(20),E.batchingColor&&s.enable(21),E.gradientMap&&s.enable(22),m.push(s.mask),s.disableAll(),E.fog&&s.enable(0),E.useFog&&s.enable(1),E.flatShading&&s.enable(2),E.logarithmicDepthBuffer&&s.enable(3),E.reversedDepthBuffer&&s.enable(4),E.skinning&&s.enable(5),E.morphTargets&&s.enable(6),E.morphNormals&&s.enable(7),E.morphColors&&s.enable(8),E.premultipliedAlpha&&s.enable(9),E.shadowMapEnabled&&s.enable(10),E.doubleSided&&s.enable(11),E.flipSided&&s.enable(12),E.useDepthPacking&&s.enable(13),E.dithering&&s.enable(14),E.transmission&&s.enable(15),E.sheen&&s.enable(16),E.opaque&&s.enable(17),E.pointsUvs&&s.enable(18),E.decodeVideoTexture&&s.enable(19),E.decodeVideoTextureEmissive&&s.enable(20),E.alphaToCoverage&&s.enable(21),m.push(s.mask)}function T(m){const E=A[m.type];let P;if(E){const k=$t[E];P=xc.clone(k.uniforms)}else P=m.uniforms;return P}function b(m,E){let P;for(let k=0,G=u.length;k<G;k++){const V=u[k];if(V.cacheKey===E){P=V,++P.usedTimes;break}}return P===void 0&&(P=new x_(n,E,m,a),u.push(P)),P}function C(m){if(--m.usedTimes===0){const E=u.indexOf(m);u[E]=u[u.length-1],u.pop(),m.destroy()}}function D(m){c.remove(m)}function L(){c.dispose()}return{getParameters:d,getProgramCacheKey:f,getUniforms:T,acquireProgram:b,releaseProgram:C,releaseShaderCache:D,programs:u,dispose:L}}function P_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let s=n.get(o);return s===void 0&&(s={},n.set(o,s)),s}function i(o){n.delete(o)}function r(o,s,c){n.get(o)[s]=c}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:a}}function w_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function qo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ko(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function o(p,g,S,A,_,d){let f=n[e];return f===void 0?(f={id:p.id,object:p,geometry:g,material:S,groupOrder:A,renderOrder:p.renderOrder,z:_,group:d},n[e]=f):(f.id=p.id,f.object=p,f.geometry=g,f.material=S,f.groupOrder=A,f.renderOrder=p.renderOrder,f.z=_,f.group=d),e++,f}function s(p,g,S,A,_,d){const f=o(p,g,S,A,_,d);S.transmission>0?i.push(f):S.transparent===!0?r.push(f):t.push(f)}function c(p,g,S,A,_,d){const f=o(p,g,S,A,_,d);S.transmission>0?i.unshift(f):S.transparent===!0?r.unshift(f):t.unshift(f)}function l(p,g){t.length>1&&t.sort(p||w_),i.length>1&&i.sort(g||qo),r.length>1&&r.sort(g||qo)}function u(){for(let p=e,g=n.length;p<g;p++){const S=n[p];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:s,unshift:c,finish:u,sort:l}}function D_(){let n=new WeakMap;function e(i,r){const a=n.get(i);let o;return a===void 0?(o=new Ko,n.set(i,[o])):r>=a.length?(o=new Ko,a.push(o)):o=a[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function y_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Ye,color:new je};break;case"SpotLight":t={position:new Ye,direction:new Ye,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Ye,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Ye,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new Ye,halfWidth:new Ye,halfHeight:new Ye};break}return n[e.id]=t,t}}}function L_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let U_=0;function I_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function N_(n){const e=new y_,t=L_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new Ye);const r=new Ye,a=new mi,o=new mi;function s(l){let u=0,p=0,g=0;for(let m=0;m<9;m++)i.probe[m].set(0,0,0);let S=0,A=0,_=0,d=0,f=0,R=0,x=0,T=0,b=0,C=0,D=0;l.sort(I_);for(let m=0,E=l.length;m<E;m++){const P=l[m],k=P.color,G=P.intensity,V=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=k.r*G,p+=k.g*G,g+=k.b*G;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],G);D++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,B=t.get(P);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,i.directionalShadow[S]=B,i.directionalShadowMap[S]=q,i.directionalShadowMatrix[S]=P.shadow.matrix,R++}i.directional[S]=H,S++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(k).multiplyScalar(G),H.distance=V,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[_]=H;const $=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,$.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[_]=$.matrix,P.castShadow){const B=t.get(P);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,i.spotShadow[_]=B,i.spotShadowMap[_]=q,T++}_++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(k).multiplyScalar(G),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[d]=H,d++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const $=P.shadow,B=t.get(P);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,B.shadowCameraNear=$.camera.near,B.shadowCameraFar=$.camera.far,i.pointShadow[A]=B,i.pointShadowMap[A]=q,i.pointShadowMatrix[A]=P.shadow.matrix,x++}i.point[A]=H,A++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(G),H.groundColor.copy(P.groundColor).multiplyScalar(G),i.hemi[f]=H,f++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=g;const L=i.hash;(L.directionalLength!==S||L.pointLength!==A||L.spotLength!==_||L.rectAreaLength!==d||L.hemiLength!==f||L.numDirectionalShadows!==R||L.numPointShadows!==x||L.numSpotShadows!==T||L.numSpotMaps!==b||L.numLightProbes!==D)&&(i.directional.length=S,i.spot.length=_,i.rectArea.length=d,i.point.length=A,i.hemi.length=f,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=T+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=D,L.directionalLength=S,L.pointLength=A,L.spotLength=_,L.rectAreaLength=d,L.hemiLength=f,L.numDirectionalShadows=R,L.numPointShadows=x,L.numSpotShadows=T,L.numSpotMaps=b,L.numLightProbes=D,i.version=U_++)}function c(l,u){let p=0,g=0,S=0,A=0,_=0;const d=u.matrixWorldInverse;for(let f=0,R=l.length;f<R;f++){const x=l[f];if(x.isDirectionalLight){const T=i.directional[p];T.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),p++}else if(x.isSpotLight){const T=i.spot[S];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),S++}else if(x.isRectAreaLight){const T=i.rectArea[A];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(d),o.identity(),a.copy(x.matrixWorld),a.premultiply(d),o.extractRotation(a),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),A++}else if(x.isPointLight){const T=i.point[g];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(d),g++}else if(x.isHemisphereLight){const T=i.hemi[_];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(d),_++}}}return{setup:s,setupView:c,state:i}}function $o(n){const e=new N_(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function s(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function O_(n){let e=new WeakMap;function t(r,a=0){const o=e.get(r);let s;return o===void 0?(s=new $o(n),e.set(r,[s])):a>=o.length?(s=new $o(n),o.push(s)):s=o[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}const F_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function G_(n,e,t){let i=new jo;const r=new bt,a=new bt,o=new Rt,s=new lc({depthPacking:cc}),c=new fc,l={},u=t.maxTextureSize,p={[gi]:Yt,[Yt]:gi,[rn]:rn},g=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:F_,fragmentShader:B_}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const A=new ns;A.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ln(A,g),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=is;let f=this.type;this.render=function(C,D,L){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||C.length===0)return;const m=n.getRenderTarget(),E=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Dn),k.buffers.depth.getReversed()?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const G=f!==en&&this.type===en,V=f===en&&this.type!==en;for(let q=0,H=C.length;q<H;q++){const $=C[q],B=$.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const de=B.getFrameExtents();if(r.multiply(de),a.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/de.x),r.x=a.x*de.x,B.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/de.y),r.y=a.y*de.y,B.mapSize.y=a.y)),B.map===null||G===!0||V===!0){const Pe=this.type!==en?{minFilter:di,magFilter:di}:{};B.map!==null&&B.map.dispose(),B.map=new Zn(r.x,r.y,Pe),B.map.texture.name=$.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const ge=B.getViewportCount();for(let Pe=0;Pe<ge;Pe++){const Le=B.getViewport(Pe);o.set(a.x*Le.x,a.y*Le.y,a.x*Le.z,a.y*Le.w),k.viewport(o),B.updateMatrices($,Pe),i=B.getFrustum(),T(D,L,B.camera,$,this.type)}B.isPointLightShadow!==!0&&this.type===en&&R(B,L),B.needsUpdate=!1}f=this.type,d.needsUpdate=!1,n.setRenderTarget(m,E,P)};function R(C,D){const L=e.update(_);g.defines.VSM_SAMPLES!==C.blurSamples&&(g.defines.VSM_SAMPLES=C.blurSamples,S.defines.VSM_SAMPLES=C.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Zn(r.x,r.y)),g.uniforms.shadow_pass.value=C.map.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(D,null,L,g,_,null),S.uniforms.shadow_pass.value=C.mapPass.texture,S.uniforms.resolution.value=C.mapSize,S.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(D,null,L,S,_,null)}function x(C,D,L,m){let E=null;const P=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)E=P;else if(E=L.isPointLight===!0?c:s,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const k=E.uuid,G=D.uuid;let V=l[k];V===void 0&&(V={},l[k]=V);let q=V[G];q===void 0&&(q=E.clone(),V[G]=q,D.addEventListener("dispose",b)),E=q}if(E.visible=D.visible,E.wireframe=D.wireframe,m===en?E.side=D.shadowSide!==null?D.shadowSide:D.side:E.side=D.shadowSide!==null?D.shadowSide:p[D.side],E.alphaMap=D.alphaMap,E.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,E.map=D.map,E.clipShadows=D.clipShadows,E.clippingPlanes=D.clippingPlanes,E.clipIntersection=D.clipIntersection,E.displacementMap=D.displacementMap,E.displacementScale=D.displacementScale,E.displacementBias=D.displacementBias,E.wireframeLinewidth=D.wireframeLinewidth,E.linewidth=D.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const k=n.properties.get(E);k.light=L}return E}function T(C,D,L,m,E){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===en)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const G=e.update(C),V=C.material;if(Array.isArray(V)){const q=G.groups;for(let H=0,$=q.length;H<$;H++){const B=q[H],de=V[B.materialIndex];if(de&&de.visible){const ge=x(C,de,m,E);C.onBeforeShadow(n,C,D,L,G,ge,B),n.renderBufferDirect(L,null,G,ge,C,B),C.onAfterShadow(n,C,D,L,G,ge,B)}}}else if(V.visible){const q=x(C,V,m,E);C.onBeforeShadow(n,C,D,L,G,q,null),n.renderBufferDirect(L,null,G,q,C,null),C.onAfterShadow(n,C,D,L,G,q,null)}}const k=C.children;for(let G=0,V=k.length;G<V;G++)T(k[G],D,L,m,E)}function b(C){C.target.removeEventListener("dispose",b);for(const L in l){const m=l[L],E=C.target.uuid;E in m&&(m[E].dispose(),delete m[E])}}}const H_={[Or]:Nr,[Ir]:yr,[Ur]:Dr,[Wi]:Lr,[Nr]:Or,[yr]:Ir,[Dr]:Ur,[Lr]:Wi};function V_(n,e){function t(){let y=!1;const j=new Rt;let ne=null;const ce=new Rt(0,0,0,0);return{setMask:function(Z){ne!==Z&&!y&&(n.colorMask(Z,Z,Z,Z),ne=Z)},setLocked:function(Z){y=Z},setClear:function(Z,Y,pe,De,$e){$e===!0&&(Z*=De,Y*=De,pe*=De),j.set(Z,Y,pe,De),ce.equals(j)===!1&&(n.clearColor(Z,Y,pe,De),ce.copy(j))},reset:function(){y=!1,ne=null,ce.set(-1,0,0,0)}}}function i(){let y=!1,j=!1,ne=null,ce=null,Z=null;return{setReversed:function(Y){if(j!==Y){const pe=e.get("EXT_clip_control");Y?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),j=Y;const De=Z;Z=null,this.setClear(De)}},getReversed:function(){return j},setTest:function(Y){Y?te(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(Y){ne!==Y&&!y&&(n.depthMask(Y),ne=Y)},setFunc:function(Y){if(j&&(Y=H_[Y]),ce!==Y){switch(Y){case Or:n.depthFunc(n.NEVER);break;case Nr:n.depthFunc(n.ALWAYS);break;case Ir:n.depthFunc(n.LESS);break;case Wi:n.depthFunc(n.LEQUAL);break;case Ur:n.depthFunc(n.EQUAL);break;case Lr:n.depthFunc(n.GEQUAL);break;case yr:n.depthFunc(n.GREATER);break;case Dr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=Y}},setLocked:function(Y){y=Y},setClear:function(Y){Z!==Y&&(j&&(Y=1-Y),n.clearDepth(Y),Z=Y)},reset:function(){y=!1,ne=null,ce=null,Z=null,j=!1}}}function r(){let y=!1,j=null,ne=null,ce=null,Z=null,Y=null,pe=null,De=null,$e=null;return{setTest:function(ke){y||(ke?te(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(ke){j!==ke&&!y&&(n.stencilMask(ke),j=ke)},setFunc:function(ke,jt,qt){(ne!==ke||ce!==jt||Z!==qt)&&(n.stencilFunc(ke,jt,qt),ne=ke,ce=jt,Z=qt)},setOp:function(ke,jt,qt){(Y!==ke||pe!==jt||De!==qt)&&(n.stencilOp(ke,jt,qt),Y=ke,pe=jt,De=qt)},setLocked:function(ke){y=ke},setClear:function(ke){$e!==ke&&(n.clearStencil(ke),$e=ke)},reset:function(){y=!1,j=null,ne=null,ce=null,Z=null,Y=null,pe=null,De=null,$e=null}}}const a=new t,o=new i,s=new r,c=new WeakMap,l=new WeakMap;let u={},p={},g=new WeakMap,S=[],A=null,_=!1,d=null,f=null,R=null,x=null,T=null,b=null,C=null,D=new je(0,0,0),L=0,m=!1,E=null,P=null,k=null,G=null,V=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(B)[1]),H=$>=1):B.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),H=$>=2);let de=null,ge={};const Pe=n.getParameter(n.SCISSOR_BOX),Le=n.getParameter(n.VIEWPORT),ot=new Rt().fromArray(Pe),Oe=new Rt().fromArray(Le);function z(y,j,ne,ce){const Z=new Uint8Array(4),Y=n.createTexture();n.bindTexture(y,Y),n.texParameteri(y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pe=0;pe<ne;pe++)y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY?n.texImage3D(j,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,Z):n.texImage2D(j+pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Z);return Y}const re={};re[n.TEXTURE_2D]=z(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),te(n.DEPTH_TEST),o.setFunc(Wi),Ve(!1),Se(eo),te(n.CULL_FACE),Ke(Dn);function te(y){u[y]!==!0&&(n.enable(y),u[y]=!0)}function xe(y){u[y]!==!1&&(n.disable(y),u[y]=!1)}function Ae(y,j){return p[y]!==j?(n.bindFramebuffer(y,j),p[y]=j,y===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=j),y===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=j),!0):!1}function we(y,j){let ne=S,ce=!1;if(y){ne=g.get(j),ne===void 0&&(ne=[],g.set(j,ne));const Z=y.textures;if(ne.length!==Z.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let Y=0,pe=Z.length;Y<pe;Y++)ne[Y]=n.COLOR_ATTACHMENT0+Y;ne.length=Z.length,ce=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,ce=!0);ce&&n.drawBuffers(ne)}function ct(y){return A!==y?(n.useProgram(y),A=y,!0):!1}const Be={[oi]:n.FUNC_ADD,[Il]:n.FUNC_SUBTRACT,[Ul]:n.FUNC_REVERSE_SUBTRACT};Be[Yc]=n.MIN,Be[qc]=n.MAX;const w={[$l]:n.ZERO,[Kl]:n.ONE,[ql]:n.SRC_COLOR,[Yl]:n.SRC_ALPHA,[Xl]:n.SRC_ALPHA_SATURATE,[Wl]:n.DST_COLOR,[zl]:n.DST_ALPHA,[kl]:n.ONE_MINUS_SRC_COLOR,[Vl]:n.ONE_MINUS_SRC_ALPHA,[Hl]:n.ONE_MINUS_DST_COLOR,[Gl]:n.ONE_MINUS_DST_ALPHA,[Bl]:n.CONSTANT_COLOR,[Fl]:n.ONE_MINUS_CONSTANT_COLOR,[Ol]:n.CONSTANT_ALPHA,[Nl]:n.ONE_MINUS_CONSTANT_ALPHA};function Ke(y,j,ne,ce,Z,Y,pe,De,$e,ke){if(y===Dn){_===!0&&(xe(n.BLEND),_=!1);return}if(_===!1&&(te(n.BLEND),_=!0),y!==Tc){if(y!==d||ke!==m){if((f!==oi||T!==oi)&&(n.blendEquation(n.FUNC_ADD),f=oi,T=oi),ke)switch(y){case Bi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case io:n.blendFunc(n.ONE,n.ONE);break;case no:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case to:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case Bi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case io:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case no:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case to:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}R=null,x=null,b=null,C=null,D.set(0,0,0),L=0,d=y,m=ke}return}Z=Z||j,Y=Y||ne,pe=pe||ce,(j!==f||Z!==T)&&(n.blendEquationSeparate(Be[j],Be[Z]),f=j,T=Z),(ne!==R||ce!==x||Y!==b||pe!==C)&&(n.blendFuncSeparate(w[ne],w[ce],w[Y],w[pe]),R=ne,x=ce,b=Y,C=pe),(De.equals(D)===!1||$e!==L)&&(n.blendColor(De.r,De.g,De.b,$e),D.copy(De),L=$e),d=y,m=!1}function Te(y,j){y.side===rn?xe(n.CULL_FACE):te(n.CULL_FACE);let ne=y.side===Yt;j&&(ne=!ne),Ve(ne),y.blending===Bi&&y.transparent===!1?Ke(Dn):Ke(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),o.setFunc(y.depthFunc),o.setTest(y.depthTest),o.setMask(y.depthWrite),a.setMask(y.colorWrite);const ce=y.stencilWrite;s.setTest(ce),ce&&(s.setMask(y.stencilWriteMask),s.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),s.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),fe(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(y){E!==y&&(y?n.frontFace(n.CW):n.frontFace(n.CCW),E=y)}function Se(y){y!==Sc?(te(n.CULL_FACE),y!==P&&(y===eo?n.cullFace(n.BACK):y===Ec?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),P=y}function Je(y){y!==k&&(H&&n.lineWidth(y),k=y)}function fe(y,j,ne){y?(te(n.POLYGON_OFFSET_FILL),(G!==j||V!==ne)&&(n.polygonOffset(j,ne),G=j,V=ne)):xe(n.POLYGON_OFFSET_FILL)}function Ie(y){y?te(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function mt(y){y===void 0&&(y=n.TEXTURE0+q-1),de!==y&&(n.activeTexture(y),de=y)}function ft(y,j,ne){ne===void 0&&(de===null?ne=n.TEXTURE0+q-1:ne=de);let ce=ge[ne];ce===void 0&&(ce={type:void 0,texture:void 0},ge[ne]=ce),(ce.type!==y||ce.texture!==j)&&(de!==ne&&(n.activeTexture(ne),de=ne),n.bindTexture(y,j||re[y]),ce.type=y,ce.texture=j)}function M(){const y=ge[de];y!==void 0&&y.type!==void 0&&(n.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function h(){try{n.compressedTexImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function X(){try{n.texSubImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function K(){try{n.texSubImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ve(){try{n.compressedTexSubImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ee(){try{n.texStorage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function he(){try{n.texStorage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function _e(){try{n.texImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function J(){try{n.texImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function se(y){ot.equals(y)===!1&&(n.scissor(y.x,y.y,y.z,y.w),ot.copy(y))}function be(y){Oe.equals(y)===!1&&(n.viewport(y.x,y.y,y.z,y.w),Oe.copy(y))}function me(y,j){let ne=l.get(j);ne===void 0&&(ne=new WeakMap,l.set(j,ne));let ce=ne.get(y);ce===void 0&&(ce=n.getUniformBlockIndex(j,y.name),ne.set(y,ce))}function ae(y,j){const ce=l.get(j).get(y);c.get(j)!==ce&&(n.uniformBlockBinding(j,ce,y.__bindingPointIndex),c.set(j,ce))}function ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},de=null,ge={},p={},g=new WeakMap,S=[],A=null,_=!1,d=null,f=null,R=null,x=null,T=null,b=null,C=null,D=new je(0,0,0),L=0,m=!1,E=null,P=null,k=null,G=null,V=null,ot.set(0,0,n.canvas.width,n.canvas.height),Oe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:te,disable:xe,bindFramebuffer:Ae,drawBuffers:we,useProgram:ct,setBlending:Ke,setMaterial:Te,setFlipSided:Ve,setCullFace:Se,setLineWidth:Je,setPolygonOffset:fe,setScissorTest:Ie,activeTexture:mt,bindTexture:ft,unbindTexture:M,compressedTexImage2D:h,compressedTexImage3D:N,texImage2D:_e,texImage3D:J,updateUBOMapping:me,uniformBlockBinding:ae,texStorage2D:ee,texStorage3D:he,texSubImage2D:X,texSubImage3D:K,compressedTexSubImage2D:W,compressedTexSubImage3D:ve,scissor:se,viewport:be,reset:ye}}function k_(n,e,t,i,r,a,o){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new bt,u=new WeakMap;let p;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(M,h){return S?new OffscreenCanvas(M,h):kc("canvas")}function _(M,h,N){let X=1;const K=ft(M);if((K.width>N||K.height>N)&&(X=N/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const W=Math.floor(X*K.width),ve=Math.floor(X*K.height);p===void 0&&(p=A(W,ve));const ee=h?A(W,ve):p;return ee.width=W,ee.height=ve,ee.getContext("2d").drawImage(M,0,0,W,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+ve+")."),ee}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),M;return M}function d(M){return M.generateMipmaps}function f(M){n.generateMipmap(M)}function R(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(M,h,N,X,K=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let W=h;if(h===n.RED&&(N===n.FLOAT&&(W=n.R32F),N===n.HALF_FLOAT&&(W=n.R16F),N===n.UNSIGNED_BYTE&&(W=n.R8)),h===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(W=n.R8UI),N===n.UNSIGNED_SHORT&&(W=n.R16UI),N===n.UNSIGNED_INT&&(W=n.R32UI),N===n.BYTE&&(W=n.R8I),N===n.SHORT&&(W=n.R16I),N===n.INT&&(W=n.R32I)),h===n.RG&&(N===n.FLOAT&&(W=n.RG32F),N===n.HALF_FLOAT&&(W=n.RG16F),N===n.UNSIGNED_BYTE&&(W=n.RG8)),h===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(W=n.RG8UI),N===n.UNSIGNED_SHORT&&(W=n.RG16UI),N===n.UNSIGNED_INT&&(W=n.RG32UI),N===n.BYTE&&(W=n.RG8I),N===n.SHORT&&(W=n.RG16I),N===n.INT&&(W=n.RG32I)),h===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(W=n.RGB8UI),N===n.UNSIGNED_SHORT&&(W=n.RGB16UI),N===n.UNSIGNED_INT&&(W=n.RGB32UI),N===n.BYTE&&(W=n.RGB8I),N===n.SHORT&&(W=n.RGB16I),N===n.INT&&(W=n.RGB32I)),h===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),N===n.UNSIGNED_INT&&(W=n.RGBA32UI),N===n.BYTE&&(W=n.RGBA8I),N===n.SHORT&&(W=n.RGBA16I),N===n.INT&&(W=n.RGBA32I)),h===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),h===n.RGBA){const ve=K?ms:dt.getTransfer(X);N===n.FLOAT&&(W=n.RGBA32F),N===n.HALF_FLOAT&&(W=n.RGBA16F),N===n.UNSIGNED_BYTE&&(W=ve===Qe?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function T(M,h){let N;return M?h===null||h===Si||h===vi?N=n.DEPTH24_STENCIL8:h===Pn?N=n.DEPTH32F_STENCIL8:h===Xi&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):h===null||h===Si||h===vi?N=n.DEPTH_COMPONENT24:h===Pn?N=n.DEPTH_COMPONENT32F:h===Xi&&(N=n.DEPTH_COMPONENT16),N}function b(M,h){return d(M)===!0||M.isFramebufferTexture&&M.minFilter!==di&&M.minFilter!==kn?Math.log2(Math.max(h.width,h.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?h.mipmaps.length:1}function C(M){const h=M.target;h.removeEventListener("dispose",C),L(h),h.isVideoTexture&&u.delete(h)}function D(M){const h=M.target;h.removeEventListener("dispose",D),E(h)}function L(M){const h=i.get(M);if(h.__webglInit===void 0)return;const N=M.source,X=g.get(N);if(X){const K=X[h.__cacheKey];K.usedTimes--,K.usedTimes===0&&m(M),Object.keys(X).length===0&&g.delete(N)}i.remove(M)}function m(M){const h=i.get(M);n.deleteTexture(h.__webglTexture);const N=M.source,X=g.get(N);delete X[h.__cacheKey],o.memory.textures--}function E(M){const h=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(h.__webglFramebuffer[X]))for(let K=0;K<h.__webglFramebuffer[X].length;K++)n.deleteFramebuffer(h.__webglFramebuffer[X][K]);else n.deleteFramebuffer(h.__webglFramebuffer[X]);h.__webglDepthbuffer&&n.deleteRenderbuffer(h.__webglDepthbuffer[X])}else{if(Array.isArray(h.__webglFramebuffer))for(let X=0;X<h.__webglFramebuffer.length;X++)n.deleteFramebuffer(h.__webglFramebuffer[X]);else n.deleteFramebuffer(h.__webglFramebuffer);if(h.__webglDepthbuffer&&n.deleteRenderbuffer(h.__webglDepthbuffer),h.__webglMultisampledFramebuffer&&n.deleteFramebuffer(h.__webglMultisampledFramebuffer),h.__webglColorRenderbuffer)for(let X=0;X<h.__webglColorRenderbuffer.length;X++)h.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(h.__webglColorRenderbuffer[X]);h.__webglDepthRenderbuffer&&n.deleteRenderbuffer(h.__webglDepthRenderbuffer)}const N=M.textures;for(let X=0,K=N.length;X<K;X++){const W=i.get(N[X]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(N[X])}i.remove(M)}let P=0;function k(){P=0}function G(){const M=P;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),P+=1,M}function V(M){const h=[];return h.push(M.wrapS),h.push(M.wrapT),h.push(M.wrapR||0),h.push(M.magFilter),h.push(M.minFilter),h.push(M.anisotropy),h.push(M.internalFormat),h.push(M.format),h.push(M.type),h.push(M.generateMipmaps),h.push(M.premultiplyAlpha),h.push(M.flipY),h.push(M.unpackAlignment),h.push(M.colorSpace),h.join()}function q(M,h){const N=i.get(M);if(M.isVideoTexture&&Ie(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&N.__version!==M.version){const X=M.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(N,M,h);return}}else M.isExternalTexture&&(N.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+h)}function H(M,h){const N=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){re(N,M,h);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+h)}function $(M,h){const N=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){re(N,M,h);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+h)}function B(M,h){const N=i.get(M);if(M.version>0&&N.__version!==M.version){te(N,M,h);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+h)}const de={[Jl]:n.REPEAT,[Ql]:n.CLAMP_TO_EDGE,[Zl]:n.MIRRORED_REPEAT},ge={[di]:n.NEAREST,[jl]:n.NEAREST_MIPMAP_NEAREST,[yi]:n.NEAREST_MIPMAP_LINEAR,[kn]:n.LINEAR,[cr]:n.LINEAR_MIPMAP_NEAREST,[li]:n.LINEAR_MIPMAP_LINEAR},Pe={[oc]:n.NEVER,[ac]:n.ALWAYS,[rc]:n.LESS,[ts]:n.LEQUAL,[ic]:n.EQUAL,[nc]:n.GEQUAL,[tc]:n.GREATER,[ec]:n.NOTEQUAL};function Le(M,h){if(h.type===Pn&&e.has("OES_texture_float_linear")===!1&&(h.magFilter===kn||h.magFilter===cr||h.magFilter===yi||h.magFilter===li||h.minFilter===kn||h.minFilter===cr||h.minFilter===yi||h.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,de[h.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,de[h.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,de[h.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,ge[h.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,ge[h.minFilter]),h.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Pe[h.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(h.magFilter===di||h.minFilter!==yi&&h.minFilter!==li||h.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(h.anisotropy>1||i.get(h).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(h.anisotropy,r.getMaxAnisotropy())),i.get(h).__currentAnisotropy=h.anisotropy}}}function ot(M,h){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,h.addEventListener("dispose",C));const X=h.source;let K=g.get(X);K===void 0&&(K={},g.set(X,K));const W=V(h);if(W!==M.__cacheKey){K[W]===void 0&&(K[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),K[W].usedTimes++;const ve=K[M.__cacheKey];ve!==void 0&&(K[M.__cacheKey].usedTimes--,ve.usedTimes===0&&m(h)),M.__cacheKey=W,M.__webglTexture=K[W].texture}return N}function Oe(M,h,N){return Math.floor(Math.floor(M/N)/h)}function z(M,h,N,X){const W=M.updateRanges;if(W.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,h.width,h.height,N,X,h.data);else{W.sort((J,se)=>J.start-se.start);let ve=0;for(let J=1;J<W.length;J++){const se=W[ve],be=W[J],me=se.start+se.count,ae=Oe(be.start,h.width,4),ye=Oe(se.start,h.width,4);be.start<=me+1&&ae===ye&&Oe(be.start+be.count-1,h.width,4)===ae?se.count=Math.max(se.count,be.start+be.count-se.start):(++ve,W[ve]=be)}W.length=ve+1;const ee=n.getParameter(n.UNPACK_ROW_LENGTH),he=n.getParameter(n.UNPACK_SKIP_PIXELS),_e=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,h.width);for(let J=0,se=W.length;J<se;J++){const be=W[J],me=Math.floor(be.start/4),ae=Math.ceil(be.count/4),ye=me%h.width,y=Math.floor(me/h.width),j=ae,ne=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,y),t.texSubImage2D(n.TEXTURE_2D,0,ye,y,j,ne,N,X,h.data)}M.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ee),n.pixelStorei(n.UNPACK_SKIP_PIXELS,he),n.pixelStorei(n.UNPACK_SKIP_ROWS,_e)}}function re(M,h,N){let X=n.TEXTURE_2D;(h.isDataArrayTexture||h.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),h.isData3DTexture&&(X=n.TEXTURE_3D);const K=ot(M,h),W=h.source;t.bindTexture(X,M.__webglTexture,n.TEXTURE0+N);const ve=i.get(W);if(W.version!==ve.__version||K===!0){t.activeTexture(n.TEXTURE0+N);const ee=dt.getPrimaries(dt.workingColorSpace),he=h.colorSpace===Vn?null:dt.getPrimaries(h.colorSpace),_e=h.colorSpace===Vn||ee===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,h.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,h.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let J=_(h.image,!1,r.maxTextureSize);J=mt(h,J);const se=a.convert(h.format,h.colorSpace),be=a.convert(h.type);let me=x(h.internalFormat,se,be,h.colorSpace,h.isVideoTexture);Le(X,h);let ae;const ye=h.mipmaps,y=h.isVideoTexture!==!0,j=ve.__version===void 0||K===!0,ne=W.dataReady,ce=b(h,J);if(h.isDepthTexture)me=T(h.format===zi,h.type),j&&(y?t.texStorage2D(n.TEXTURE_2D,1,me,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,me,J.width,J.height,0,se,be,null));else if(h.isDataTexture)if(ye.length>0){y&&j&&t.texStorage2D(n.TEXTURE_2D,ce,me,ye[0].width,ye[0].height);for(let Z=0,Y=ye.length;Z<Y;Z++)ae=ye[Z],y?ne&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ae.width,ae.height,se,be,ae.data):t.texImage2D(n.TEXTURE_2D,Z,me,ae.width,ae.height,0,se,be,ae.data);h.generateMipmaps=!1}else y?(j&&t.texStorage2D(n.TEXTURE_2D,ce,me,J.width,J.height),ne&&z(h,J,se,be)):t.texImage2D(n.TEXTURE_2D,0,me,J.width,J.height,0,se,be,J.data);else if(h.isCompressedTexture)if(h.isCompressedArrayTexture){y&&j&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,me,ye[0].width,ye[0].height,J.depth);for(let Z=0,Y=ye.length;Z<Y;Z++)if(ae=ye[Z],h.format!==an)if(se!==null)if(y){if(ne)if(h.layerUpdates.size>0){const pe=ao(ae.width,ae.height,h.format,h.type);for(const De of h.layerUpdates){const $e=ae.data.subarray(De*pe/ae.data.BYTES_PER_ELEMENT,(De+1)*pe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,De,ae.width,ae.height,1,se,$e)}h.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,J.depth,se,ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,me,ae.width,ae.height,J.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else y?ne&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,J.depth,se,be,ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,me,ae.width,ae.height,J.depth,0,se,be,ae.data)}else{y&&j&&t.texStorage2D(n.TEXTURE_2D,ce,me,ye[0].width,ye[0].height);for(let Z=0,Y=ye.length;Z<Y;Z++)ae=ye[Z],h.format!==an?se!==null?y?ne&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,ae.width,ae.height,se,ae.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,me,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):y?ne&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ae.width,ae.height,se,be,ae.data):t.texImage2D(n.TEXTURE_2D,Z,me,ae.width,ae.height,0,se,be,ae.data)}else if(h.isDataArrayTexture)if(y){if(j&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,me,J.width,J.height,J.depth),ne)if(h.layerUpdates.size>0){const Z=ao(J.width,J.height,h.format,h.type);for(const Y of h.layerUpdates){const pe=J.data.subarray(Y*Z/J.data.BYTES_PER_ELEMENT,(Y+1)*Z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Y,J.width,J.height,1,se,be,pe)}h.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,se,be,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,me,J.width,J.height,J.depth,0,se,be,J.data);else if(h.isData3DTexture)y?(j&&t.texStorage3D(n.TEXTURE_3D,ce,me,J.width,J.height,J.depth),ne&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,se,be,J.data)):t.texImage3D(n.TEXTURE_3D,0,me,J.width,J.height,J.depth,0,se,be,J.data);else if(h.isFramebufferTexture){if(j)if(y)t.texStorage2D(n.TEXTURE_2D,ce,me,J.width,J.height);else{let Z=J.width,Y=J.height;for(let pe=0;pe<ce;pe++)t.texImage2D(n.TEXTURE_2D,pe,me,Z,Y,0,se,be,null),Z>>=1,Y>>=1}}else if(ye.length>0){if(y&&j){const Z=ft(ye[0]);t.texStorage2D(n.TEXTURE_2D,ce,me,Z.width,Z.height)}for(let Z=0,Y=ye.length;Z<Y;Z++)ae=ye[Z],y?ne&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,se,be,ae):t.texImage2D(n.TEXTURE_2D,Z,me,se,be,ae);h.generateMipmaps=!1}else if(y){if(j){const Z=ft(J);t.texStorage2D(n.TEXTURE_2D,ce,me,Z.width,Z.height)}ne&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se,be,J)}else t.texImage2D(n.TEXTURE_2D,0,me,se,be,J);d(h)&&f(X),ve.__version=W.version,h.onUpdate&&h.onUpdate(h)}M.__version=h.version}function te(M,h,N){if(h.image.length!==6)return;const X=ot(M,h),K=h.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+N);const W=i.get(K);if(K.version!==W.__version||X===!0){t.activeTexture(n.TEXTURE0+N);const ve=dt.getPrimaries(dt.workingColorSpace),ee=h.colorSpace===Vn?null:dt.getPrimaries(h.colorSpace),he=h.colorSpace===Vn||ve===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,h.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,h.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const _e=h.isCompressedTexture||h.image[0].isCompressedTexture,J=h.image[0]&&h.image[0].isDataTexture,se=[];for(let Y=0;Y<6;Y++)!_e&&!J?se[Y]=_(h.image[Y],!0,r.maxCubemapSize):se[Y]=J?h.image[Y].image:h.image[Y],se[Y]=mt(h,se[Y]);const be=se[0],me=a.convert(h.format,h.colorSpace),ae=a.convert(h.type),ye=x(h.internalFormat,me,ae,h.colorSpace),y=h.isVideoTexture!==!0,j=W.__version===void 0||X===!0,ne=K.dataReady;let ce=b(h,be);Le(n.TEXTURE_CUBE_MAP,h);let Z;if(_e){y&&j&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,ye,be.width,be.height);for(let Y=0;Y<6;Y++){Z=se[Y].mipmaps;for(let pe=0;pe<Z.length;pe++){const De=Z[pe];h.format!==an?me!==null?y?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,0,0,De.width,De.height,me,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,ye,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):y?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,0,0,De.width,De.height,me,ae,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,ye,De.width,De.height,0,me,ae,De.data)}}}else{if(Z=h.mipmaps,y&&j){Z.length>0&&ce++;const Y=ft(se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,ye,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(J){y?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,se[Y].width,se[Y].height,me,ae,se[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ye,se[Y].width,se[Y].height,0,me,ae,se[Y].data);for(let pe=0;pe<Z.length;pe++){const $e=Z[pe].image[Y].image;y?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,0,0,$e.width,$e.height,me,ae,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,ye,$e.width,$e.height,0,me,ae,$e.data)}}else{y?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,me,ae,se[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ye,me,ae,se[Y]);for(let pe=0;pe<Z.length;pe++){const De=Z[pe];y?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,0,0,me,ae,De.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,ye,me,ae,De.image[Y])}}}d(h)&&f(n.TEXTURE_CUBE_MAP),W.__version=K.version,h.onUpdate&&h.onUpdate(h)}M.__version=h.version}function xe(M,h,N,X,K,W){const ve=a.convert(N.format,N.colorSpace),ee=a.convert(N.type),he=x(N.internalFormat,ve,ee,N.colorSpace),_e=i.get(h),J=i.get(N);if(J.__renderTarget=h,!_e.__hasExternalTextures){const se=Math.max(1,h.width>>W),be=Math.max(1,h.height>>W);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,W,he,se,be,h.depth,0,ve,ee,null):t.texImage2D(K,W,he,se,be,0,ve,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),fe(h)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,K,J.__webglTexture,0,Je(h)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,K,J.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(M,h,N){if(n.bindRenderbuffer(n.RENDERBUFFER,M),h.depthBuffer){const X=h.depthTexture,K=X&&X.isDepthTexture?X.type:null,W=T(h.stencilBuffer,K),ve=h.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=Je(h);fe(h)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,W,h.width,h.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,W,h.width,h.height):n.renderbufferStorage(n.RENDERBUFFER,W,h.width,h.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,M)}else{const X=h.textures;for(let K=0;K<X.length;K++){const W=X[K],ve=a.convert(W.format,W.colorSpace),ee=a.convert(W.type),he=x(W.internalFormat,ve,ee,W.colorSpace),_e=Je(h);N&&fe(h)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,he,h.width,h.height):fe(h)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,he,h.width,h.height):n.renderbufferStorage(n.RENDERBUFFER,he,h.width,h.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(M,h){if(h&&h.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(h.depthTexture&&h.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(h.depthTexture);X.__renderTarget=h,(!X.__webglTexture||h.depthTexture.image.width!==h.width||h.depthTexture.image.height!==h.height)&&(h.depthTexture.image.width=h.width,h.depthTexture.image.height=h.height,h.depthTexture.needsUpdate=!0),q(h.depthTexture,0);const K=X.__webglTexture,W=Je(h);if(h.depthTexture.format===ea)fe(h)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(h.depthTexture.format===zi)fe(h)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function ct(M){const h=i.get(M),N=M.isWebGLCubeRenderTarget===!0;if(h.__boundDepthTexture!==M.depthTexture){const X=M.depthTexture;if(h.__depthDisposeCallback&&h.__depthDisposeCallback(),X){const K=()=>{delete h.__boundDepthTexture,delete h.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),h.__depthDisposeCallback=K}h.__boundDepthTexture=X}if(M.depthTexture&&!h.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const X=M.texture.mipmaps;X&&X.length>0?we(h.__webglFramebuffer[0],M):we(h.__webglFramebuffer,M)}else if(N){h.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,h.__webglFramebuffer[X]),h.__webglDepthbuffer[X]===void 0)h.__webglDepthbuffer[X]=n.createRenderbuffer(),Ae(h.__webglDepthbuffer[X],M,!1);else{const K=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=h.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,W)}}else{const X=M.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,h.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,h.__webglFramebuffer),h.__webglDepthbuffer===void 0)h.__webglDepthbuffer=n.createRenderbuffer(),Ae(h.__webglDepthbuffer,M,!1);else{const K=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=h.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(M,h,N){const X=i.get(M);h!==void 0&&xe(X.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&ct(M)}function w(M){const h=M.texture,N=i.get(M),X=i.get(h);M.addEventListener("dispose",D);const K=M.textures,W=M.isWebGLCubeRenderTarget===!0,ve=K.length>1;if(ve||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=h.version,o.memory.textures++),W){N.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(h.mipmaps&&h.mipmaps.length>0){N.__webglFramebuffer[ee]=[];for(let he=0;he<h.mipmaps.length;he++)N.__webglFramebuffer[ee][he]=n.createFramebuffer()}else N.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(h.mipmaps&&h.mipmaps.length>0){N.__webglFramebuffer=[];for(let ee=0;ee<h.mipmaps.length;ee++)N.__webglFramebuffer[ee]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(ve)for(let ee=0,he=K.length;ee<he;ee++){const _e=i.get(K[ee]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&fe(M)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ee=0;ee<K.length;ee++){const he=K[ee];N.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ee]);const _e=a.convert(he.format,he.colorSpace),J=a.convert(he.type),se=x(he.internalFormat,_e,J,he.colorSpace,M.isXRRenderTarget===!0),be=Je(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,se,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,N.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Ae(N.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Le(n.TEXTURE_CUBE_MAP,h);for(let ee=0;ee<6;ee++)if(h.mipmaps&&h.mipmaps.length>0)for(let he=0;he<h.mipmaps.length;he++)xe(N.__webglFramebuffer[ee][he],M,h,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he);else xe(N.__webglFramebuffer[ee],M,h,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);d(h)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ee=0,he=K.length;ee<he;ee++){const _e=K[ee],J=i.get(_e);let se=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(se=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,J.__webglTexture),Le(se,_e),xe(N.__webglFramebuffer,M,_e,n.COLOR_ATTACHMENT0+ee,se,0),d(_e)&&f(se)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ee=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,X.__webglTexture),Le(ee,h),h.mipmaps&&h.mipmaps.length>0)for(let he=0;he<h.mipmaps.length;he++)xe(N.__webglFramebuffer[he],M,h,n.COLOR_ATTACHMENT0,ee,he);else xe(N.__webglFramebuffer,M,h,n.COLOR_ATTACHMENT0,ee,0);d(h)&&f(ee),t.unbindTexture()}M.depthBuffer&&ct(M)}function Ke(M){const h=M.textures;for(let N=0,X=h.length;N<X;N++){const K=h[N];if(d(K)){const W=R(M),ve=i.get(K).__webglTexture;t.bindTexture(W,ve),f(W),t.unbindTexture()}}}const Te=[],Ve=[];function Se(M){if(M.samples>0){if(fe(M)===!1){const h=M.textures,N=M.width,X=M.height;let K=n.COLOR_BUFFER_BIT;const W=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(M),ee=h.length>1;if(ee)for(let _e=0;_e<h.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const he=M.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let _e=0;_e<h.length;_e++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[_e]);const J=i.get(h[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,N,X,0,0,N,X,K,n.NEAREST),c===!0&&(Te.length=0,Ve.length=0,Te.push(n.COLOR_ATTACHMENT0+_e),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Te.push(W),Ve.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ve)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let _e=0;_e<h.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,ve.__webglColorRenderbuffer[_e]);const J=i.get(h[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const h=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[h])}}}function Je(M){return Math.min(r.maxSamples,M.samples)}function fe(M){const h=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&h.__useRenderToTexture!==!1}function Ie(M){const h=o.render.frame;u.get(M)!==h&&(u.set(M,h),M.update())}function mt(M,h){const N=M.colorSpace,X=M.format,K=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==er&&N!==Vn&&(dt.getTransfer(N)===Qe?(X!==an||K!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),h}function ft(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=k,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=B,this.rebindTextures=Be,this.setupRenderTarget=w,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=fe}function z_(n,e){function t(i,r=Vn){let a;const o=dt.getTransfer(r);if(i===Nn)return n.UNSIGNED_BYTE;if(i===rs)return n.UNSIGNED_SHORT_4_4_4_4;if(i===as)return n.UNSIGNED_SHORT_5_5_5_1;if(i===uc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===dc)return n.BYTE;if(i===pc)return n.SHORT;if(i===Xi)return n.UNSIGNED_SHORT;if(i===ss)return n.INT;if(i===Si)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===ji)return n.HALF_FLOAT;if(i===hc)return n.ALPHA;if(i===_c)return n.RGB;if(i===an)return n.RGBA;if(i===ea)return n.DEPTH_COMPONENT;if(i===zi)return n.DEPTH_STENCIL;if(i===mc)return n.RED;if(i===ls)return n.RED_INTEGER;if(i===gc)return n.RG;if(i===cs)return n.RG_INTEGER;if(i===fs)return n.RGBA_INTEGER;if(i===fr||i===ur||i===dr||i===pr)if(o===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===fr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ur)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===dr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===fr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ur)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===dr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pa||i===wa||i===Da||i===ya)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Pa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Da)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ya)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===La||i===Ua||i===Ia)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===La||i===Ua)return o===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ia)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Na||i===Oa||i===Fa||i===Ba||i===Ga||i===Ha||i===Va||i===ka||i===za||i===Wa||i===Xa||i===Ya||i===qa||i===Ka)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Na)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oa)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fa)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ba)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ga)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ha)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Va)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ka)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===za)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wa)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xa)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ya)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qa)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ka)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hr||i===$a||i===Za)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===hr)return o===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$a)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Za)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vc||i===Qa||i===Ja||i===ja)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===hr)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Qa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ja)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ja)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class El extends _s{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const W_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Y_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new El(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new On({vertexShader:W_,fragmentShader:X_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ln(new os(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class q_ extends Dl{constructor(e,t){super();const i=this;let r=null,a=1,o=null,s="local-floor",c=1,l=null,u=null,p=null,g=null,S=null,A=null;const _=new Y_,d={},f=t.getContextAttributes();let R=null,x=null;const T=[],b=[],C=new bt;let D=null;const L=new Yn;L.viewport=new Rt;const m=new Yn;m.viewport=new Rt;const E=[L,m],P=new yl;let k=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let re=T[z];return re===void 0&&(re=new lr,T[z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(z){let re=T[z];return re===void 0&&(re=new lr,T[z]=re),re.getGripSpace()},this.getHand=function(z){let re=T[z];return re===void 0&&(re=new lr,T[z]=re),re.getHandSpace()};function V(z){const re=b.indexOf(z.inputSource);if(re===-1)return;const te=T[re];te!==void 0&&(te.update(z.inputSource,z.frame,l||o),te.dispatchEvent({type:z.type,data:z.inputSource}))}function q(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",H);for(let z=0;z<T.length;z++){const re=b[z];re!==null&&(b[z]=null,T[z].disconnect(re))}k=null,G=null,_.reset();for(const z in d)delete d[z];e.setRenderTarget(R),S=null,g=null,p=null,r=null,x=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return p},this.getFrame=function(){return A},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",q),r.addEventListener("inputsourceschange",H),f.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&(p=new XRWebGLBinding(r,t)),p!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,xe=null,Ae=null;f.depth&&(Ae=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=f.stencil?zi:ea,xe=f.stencil?vi:Si);const we={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:a};g=p.createProjectionLayer(we),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),x=new Zn(g.textureWidth,g.textureHeight,{format:an,type:Nn,depthTexture:new es(g.textureWidth,g.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const te={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};S=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),x=new Zn(S.framebufferWidth,S.framebufferHeight,{format:an,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(s),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(z){for(let re=0;re<z.removed.length;re++){const te=z.removed[re],xe=b.indexOf(te);xe>=0&&(b[xe]=null,T[xe].disconnect(te))}for(let re=0;re<z.added.length;re++){const te=z.added[re];let xe=b.indexOf(te);if(xe===-1){for(let we=0;we<T.length;we++)if(we>=b.length){b.push(te),xe=we;break}else if(b[we]===null){b[we]=te,xe=we;break}if(xe===-1)break}const Ae=T[xe];Ae&&Ae.connect(te)}}const $=new Ye,B=new Ye;function de(z,re,te){$.setFromMatrixPosition(re.matrixWorld),B.setFromMatrixPosition(te.matrixWorld);const xe=$.distanceTo(B),Ae=re.projectionMatrix.elements,we=te.projectionMatrix.elements,ct=Ae[14]/(Ae[10]-1),Be=Ae[14]/(Ae[10]+1),w=(Ae[9]+1)/Ae[5],Ke=(Ae[9]-1)/Ae[5],Te=(Ae[8]-1)/Ae[0],Ve=(we[8]+1)/we[0],Se=ct*Te,Je=ct*Ve,fe=xe/(-Te+Ve),Ie=fe*-Te;if(re.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ie),z.translateZ(fe),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),Ae[10]===-1)z.projectionMatrix.copy(re.projectionMatrix),z.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const mt=ct+fe,ft=Be+fe,M=Se-Ie,h=Je+(xe-Ie),N=w*Be/ft*mt,X=Ke*Be/ft*mt;z.projectionMatrix.makePerspective(M,h,N,X,mt,ft),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function ge(z,re){re===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(re.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;let re=z.near,te=z.far;_.texture!==null&&(_.depthNear>0&&(re=_.depthNear),_.depthFar>0&&(te=_.depthFar)),P.near=m.near=L.near=re,P.far=m.far=L.far=te,(k!==P.near||G!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),k=P.near,G=P.far),P.layers.mask=z.layers.mask|6,L.layers.mask=P.layers.mask&3,m.layers.mask=P.layers.mask&5;const xe=z.parent,Ae=P.cameras;ge(P,xe);for(let we=0;we<Ae.length;we++)ge(Ae[we],xe);Ae.length===2?de(P,L,m):P.projectionMatrix.copy(L.projectionMatrix),Pe(z,P,xe)};function Pe(z,re,te){te===null?z.matrix.copy(re.matrixWorld):(z.matrix.copy(te.matrixWorld),z.matrix.invert(),z.matrix.multiply(re.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(re.projectionMatrix),z.projectionMatrixInverse.copy(re.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ll*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(g===null&&S===null))return c},this.setFoveation=function(z){c=z,g!==null&&(g.fixedFoveation=z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(P)},this.getCameraTexture=function(z){return d[z]};let Le=null;function ot(z,re){if(u=re.getViewerPose(l||o),A=re,u!==null){const te=u.views;S!==null&&(e.setRenderTargetFramebuffer(x,S.framebuffer),e.setRenderTarget(x));let xe=!1;te.length!==P.cameras.length&&(P.cameras.length=0,xe=!0);for(let Be=0;Be<te.length;Be++){const w=te[Be];let Ke=null;if(S!==null)Ke=S.getViewport(w);else{const Ve=p.getViewSubImage(g,w);Ke=Ve.viewport,Be===0&&(e.setRenderTargetTextures(x,Ve.colorTexture,Ve.depthStencilTexture),e.setRenderTarget(x))}let Te=E[Be];Te===void 0&&(Te=new Yn,Te.layers.enable(Be),Te.viewport=new Rt,E[Be]=Te),Te.matrix.fromArray(w.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(w.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Be===0&&(P.matrix.copy(Te.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),xe===!0&&P.cameras.push(Te)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&p){const Be=p.getDepthInformation(te[0]);Be&&Be.isValid&&Be.texture&&_.init(Be,r.renderState)}if(Ae&&Ae.includes("camera-access")&&(e.state.unbindTexture(),p))for(let Be=0;Be<te.length;Be++){const w=te[Be].camera;if(w){let Ke=d[w];Ke||(Ke=new El,d[w]=Ke);const Te=p.getCameraImage(w);Ke.sourceTexture=Te}}}for(let te=0;te<T.length;te++){const xe=b[te],Ae=T[te];xe!==null&&Ae!==void 0&&Ae.update(xe,re,l||o)}Le&&Le(z,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),A=null}const Oe=new _l;Oe.setAnimationLoop(ot),this.setAnimationLoop=function(z){Le=z},this.dispose=function(){}}}const An=new hs,K_=new mi;function $_(n,e){function t(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function i(d,f){f.color.getRGB(d.fogColor.value,ds(n)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function r(d,f,R,x,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(d,f):f.isMeshToonMaterial?(a(d,f),p(d,f)):f.isMeshPhongMaterial?(a(d,f),u(d,f)):f.isMeshStandardMaterial?(a(d,f),g(d,f),f.isMeshPhysicalMaterial&&S(d,f,T)):f.isMeshMatcapMaterial?(a(d,f),A(d,f)):f.isMeshDepthMaterial?a(d,f):f.isMeshDistanceMaterial?(a(d,f),_(d,f)):f.isMeshNormalMaterial?a(d,f):f.isLineBasicMaterial?(o(d,f),f.isLineDashedMaterial&&s(d,f)):f.isPointsMaterial?c(d,f,R,x):f.isSpriteMaterial?l(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,t(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,t(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===Yt&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,t(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===Yt&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,t(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,t(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const R=e.get(f),x=R.envMap,T=R.envMapRotation;x&&(d.envMap.value=x,An.copy(T),An.x*=-1,An.y*=-1,An.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(An.y*=-1,An.z*=-1),d.envMapRotation.value.setFromMatrix4(K_.makeRotationFromEuler(An)),d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap&&(d.lightMap.value=f.lightMap,d.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,d.lightMapTransform)),f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,d.aoMapTransform))}function o(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,t(f.map,d.mapTransform))}function s(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function c(d,f,R,x){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*R,d.scale.value=x*.5,f.map&&(d.map.value=f.map,t(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function l(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,t(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function u(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function p(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function g(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,d.roughnessMapTransform)),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function S(d,f,R){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Yt&&d.clearcoatNormalScale.value.negate())),f.dispersion>0&&(d.dispersion.value=f.dispersion),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=R.texture,d.transmissionSamplerSize.value.set(R.width,R.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,d.specularIntensityMapTransform))}function A(d,f){f.matcap&&(d.matcap.value=f.matcap)}function _(d,f){const R=e.get(f).light;d.referencePosition.value.setFromMatrixPosition(R.matrixWorld),d.nearDistance.value=R.shadow.camera.near,d.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Z_(n,e,t,i){let r={},a={},o=[];const s=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,x){const T=x.program;i.uniformBlockBinding(R,T)}function l(R,x){let T=r[R.id];T===void 0&&(A(R),T=u(R),r[R.id]=T,R.addEventListener("dispose",d));const b=x.program;i.updateUBOMapping(R,b);const C=e.render.frame;a[R.id]!==C&&(g(R),a[R.id]=C)}function u(R){const x=p();R.__bindingPointIndex=x;const T=n.createBuffer(),b=R.__size,C=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,b,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,T),T}function p(){for(let R=0;R<s;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const x=r[R.id],T=R.uniforms,b=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,D=T.length;C<D;C++){const L=Array.isArray(T[C])?T[C]:[T[C]];for(let m=0,E=L.length;m<E;m++){const P=L[m];if(S(P,C,m,b)===!0){const k=P.__offset,G=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let q=0;q<G.length;q++){const H=G[q],$=_(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,k+V,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,V),V+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function S(R,x,T,b){const C=R.value,D=x+"_"+T;if(b[D]===void 0)return typeof C=="number"||typeof C=="boolean"?b[D]=C:b[D]=C.clone(),!0;{const L=b[D];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return b[D]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function A(R){const x=R.uniforms;let T=0;const b=16;for(let D=0,L=x.length;D<L;D++){const m=Array.isArray(x[D])?x[D]:[x[D]];for(let E=0,P=m.length;E<P;E++){const k=m[E],G=Array.isArray(k.value)?k.value:[k.value];for(let V=0,q=G.length;V<q;V++){const H=G[V],$=_(H),B=T%b,de=B%$.boundary,ge=B+de;T+=de,ge!==0&&b-ge<$.storage&&(T+=b-ge),k.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=T,T+=$.storage}}}const C=T%b;return C>0&&(T+=b-C),R.__size=T,R.__cache={},this}function _(R){const x={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(x.boundary=4,x.storage=4):R.isVector2?(x.boundary=8,x.storage=8):R.isVector3||R.isColor?(x.boundary=16,x.storage=12):R.isVector4?(x.boundary=16,x.storage=16):R.isMatrix3?(x.boundary=48,x.storage=48):R.isMatrix4?(x.boundary=64,x.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),x}function d(R){const x=R.target;x.removeEventListener("dispose",d);const T=o.indexOf(x.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete a[x.id]}function f(){for(const R in r)n.deleteBuffer(r[R]);o=[],r={},a={}}return{bind:c,update:l,dispose:f}}class Q_{constructor(e={}){const{canvas:t=Cl(),context:i=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=o;const A=new Uint32Array(4),_=new Int32Array(4);let d=null,f=null;const R=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let b=!1;this._outputColorSpace=Jo;let C=0,D=0,L=null,m=-1,E=null;const P=new Rt,k=new Rt;let G=null;const V=new je(0);let q=0,H=t.width,$=t.height,B=1,de=null,ge=null;const Pe=new Rt(0,0,H,$),Le=new Rt(0,0,H,$);let ot=!1;const Oe=new jo;let z=!1,re=!1;const te=new mi,xe=new Ye,Ae=new Rt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Be(){return L===null?B:1}let w=i;function Ke(v,U){return t.getContext(v,U)}try{const v={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pl}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",Z,!1),w===null){const U="webgl2";if(w=Ke(U,v),w===null)throw Ke(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Te,Ve,Se,Je,fe,Ie,mt,ft,M,h,N,X,K,W,ve,ee,he,_e,J,se,be,me,ae,ye;function y(){Te=new sh(w),Te.init(),me=new z_(w,Te),Ve=new eh(w,Te,e,me),Se=new V_(w,Te),Ve.reversedDepthBuffer&&g&&Se.buffers.depth.setReversed(!0),Je=new fh(w),fe=new P_,Ie=new k_(w,Te,Se,fe,Ve,me,Je),mt=new nh(T),ft=new oh(T),M=new mu(w),ae=new Jp(w,M),h=new lh(w,M,Je,ae),N=new dh(w,h,M,Je),J=new uh(w,Ve,Ie),ee=new th(fe),X=new C_(T,mt,ft,Te,Ve,ae,ee),K=new $_(T,fe),W=new D_,ve=new O_(Te),_e=new Qp(T,mt,ft,Se,N,S,c),he=new G_(T,N,Ve),ye=new Z_(w,Je,Ve,Se),se=new jp(w,Te,Je),be=new ch(w,Te,Je),Je.programs=X.programs,T.capabilities=Ve,T.extensions=Te,T.properties=fe,T.renderLists=W,T.shadowMap=he,T.state=Se,T.info=Je}y();const j=new q_(T,w);this.xr=j,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const v=Te.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Te.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(v){v!==void 0&&(B=v,this.setSize(H,$,!1))},this.getSize=function(v){return v.set(H,$)},this.setSize=function(v,U,O=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=v,$=U,t.width=Math.floor(v*B),t.height=Math.floor(U*B),O===!0&&(t.style.width=v+"px",t.style.height=U+"px"),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(H*B,$*B).floor()},this.setDrawingBufferSize=function(v,U,O){H=v,$=U,B=O,t.width=Math.floor(v*O),t.height=Math.floor(U*O),this.setViewport(0,0,v,U)},this.getCurrentViewport=function(v){return v.copy(P)},this.getViewport=function(v){return v.copy(Pe)},this.setViewport=function(v,U,O,F){v.isVector4?Pe.set(v.x,v.y,v.z,v.w):Pe.set(v,U,O,F),Se.viewport(P.copy(Pe).multiplyScalar(B).round())},this.getScissor=function(v){return v.copy(Le)},this.setScissor=function(v,U,O,F){v.isVector4?Le.set(v.x,v.y,v.z,v.w):Le.set(v,U,O,F),Se.scissor(k.copy(Le).multiplyScalar(B).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(v){Se.setScissorTest(ot=v)},this.setOpaqueSort=function(v){de=v},this.setTransparentSort=function(v){ge=v},this.getClearColor=function(v){return v.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,O=!0){let F=0;if(v){let I=!1;if(L!==null){const Q=L.texture.format;I=Q===fs||Q===cs||Q===ls}if(I){const Q=L.texture.type,oe=Q===Nn||Q===Si||Q===Xi||Q===vi||Q===rs||Q===as,ue=_e.getClearColor(),le=_e.getClearAlpha(),Re=ue.r,Ce=ue.g,Ee=ue.b;oe?(A[0]=Re,A[1]=Ce,A[2]=Ee,A[3]=le,w.clearBufferuiv(w.COLOR,0,A)):(_[0]=Re,_[1]=Ce,_[2]=Ee,_[3]=le,w.clearBufferiv(w.COLOR,0,_))}else F|=w.COLOR_BUFFER_BIT}U&&(F|=w.DEPTH_BUFFER_BIT),O&&(F|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),_e.dispose(),W.dispose(),ve.dispose(),fe.dispose(),mt.dispose(),ft.dispose(),N.dispose(),ae.dispose(),ye.dispose(),X.dispose(),j.dispose(),j.removeEventListener("sessionstart",qt),j.removeEventListener("sessionend",Ta),Sn.stop()};function ne(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const v=Je.autoReset,U=he.enabled,O=he.autoUpdate,F=he.needsUpdate,I=he.type;y(),Je.autoReset=v,he.enabled=U,he.autoUpdate=O,he.needsUpdate=F,he.type=I}function Z(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Y(v){const U=v.target;U.removeEventListener("dispose",Y),pe(U)}function pe(v){De(v),fe.remove(v)}function De(v){const U=fe.get(v).programs;U!==void 0&&(U.forEach(function(O){X.releaseProgram(O)}),v.isShaderMaterial&&X.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,O,F,I,Q){U===null&&(U=we);const oe=I.isMesh&&I.matrixWorld.determinant()<0,ue=Tl(v,U,O,F,I);Se.setMaterial(F,oe);let le=O.index,Re=1;if(F.wireframe===!0){if(le=h.getWireframeAttribute(O),le===void 0)return;Re=2}const Ce=O.drawRange,Ee=O.attributes.position;let Ne=Ce.start*Re,ze=(Ce.start+Ce.count)*Re;Q!==null&&(Ne=Math.max(Ne,Q.start*Re),ze=Math.min(ze,(Q.start+Q.count)*Re)),le!==null?(Ne=Math.max(Ne,0),ze=Math.min(ze,le.count)):Ee!=null&&(Ne=Math.max(Ne,0),ze=Math.min(ze,Ee.count));const st=ze-Ne;if(st<0||st===1/0)return;ae.setup(I,F,ue,O,le);let Ze,We=se;if(le!==null&&(Ze=M.get(le),We=be,We.setIndex(Ze)),I.isMesh)F.wireframe===!0?(Se.setLineWidth(F.wireframeLinewidth*Be()),We.setMode(w.LINES)):We.setMode(w.TRIANGLES);else if(I.isLine){let Me=F.linewidth;Me===void 0&&(Me=1),Se.setLineWidth(Me*Be()),I.isLineSegments?We.setMode(w.LINES):I.isLineLoop?We.setMode(w.LINE_LOOP):We.setMode(w.LINE_STRIP)}else I.isPoints?We.setMode(w.POINTS):I.isSprite&&We.setMode(w.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Oi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),We.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))We.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Me=I._multiDrawStarts,tt=I._multiDrawCounts,Ge=I._multiDrawCount,Lt=le?M.get(le).bytesPerElement:1,Bn=fe.get(F).currentProgram.getUniforms();for(let Ut=0;Ut<Ge;Ut++)Bn.setValue(w,"_gl_DrawID",Ut),We.render(Me[Ut]/Lt,tt[Ut])}else if(I.isInstancedMesh)We.renderInstances(Ne,st,I.count);else if(O.isInstancedBufferGeometry){const Me=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,tt=Math.min(O.instanceCount,Me);We.renderInstances(Ne,st,tt)}else We.render(Ne,st)};function $e(v,U,O){v.transparent===!0&&v.side===rn&&v.forceSinglePass===!1?(v.side=Yt,v.needsUpdate=!0,Di(v,U,O),v.side=gi,v.needsUpdate=!0,Di(v,U,O),v.side=rn):Di(v,U,O)}this.compile=function(v,U,O=null){O===null&&(O=v),f=ve.get(O),f.init(U),x.push(f),O.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),v!==O&&v.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights();const F=new Set;return v.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const Q=I.material;if(Q)if(Array.isArray(Q))for(let oe=0;oe<Q.length;oe++){const ue=Q[oe];$e(ue,O,I),F.add(ue)}else $e(Q,O,I),F.add(Q)}),f=x.pop(),F},this.compileAsync=function(v,U,O=null){const F=this.compile(v,U,O);return new Promise(I=>{function Q(){if(F.forEach(function(oe){fe.get(oe).currentProgram.isReady()&&F.delete(oe)}),F.size===0){I(v);return}setTimeout(Q,10)}Te.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let ke=null;function jt(v){ke&&ke(v)}function qt(){Sn.stop()}function Ta(){Sn.start()}const Sn=new _l;Sn.setAnimationLoop(jt),typeof self<"u"&&Sn.setContext(self),this.setAnimationLoop=function(v){ke=v,j.setAnimationLoop(v),v===null?Sn.stop():Sn.start()},j.addEventListener("sessionstart",qt),j.addEventListener("sessionend",Ta),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(U),U=j.getCamera()),v.isScene===!0&&v.onBeforeRender(T,v,U,L),f=ve.get(v,x.length),f.init(U),x.push(f),te.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Oe.setFromProjectionMatrix(te,Ca,U.reversedDepth),re=this.localClippingEnabled,z=ee.init(this.clippingPlanes,re),d=W.get(v,R.length),d.init(),R.push(d),j.enabled===!0&&j.isPresenting===!0){const Q=T.xr.getDepthSensingMesh();Q!==null&&or(Q,U,-1/0,T.sortObjects)}or(v,U,0,T.sortObjects),d.finish(),T.sortObjects===!0&&d.sort(de,ge),ct=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,ct&&_e.addToRenderList(d,v),this.info.render.frame++,z===!0&&ee.beginShadows();const O=f.state.shadowsArray;he.render(O,v,U),z===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=d.opaque,I=d.transmissive;if(f.setupLights(),U.isArrayCamera){const Q=U.cameras;if(I.length>0)for(let oe=0,ue=Q.length;oe<ue;oe++){const le=Q[oe];xa(F,I,v,le)}ct&&_e.render(v);for(let oe=0,ue=Q.length;oe<ue;oe++){const le=Q[oe];Ma(d,v,le,le.viewport)}}else I.length>0&&xa(F,I,v,U),ct&&_e.render(v),Ma(d,v,U);L!==null&&D===0&&(Ie.updateMultisampleRenderTarget(L),Ie.updateRenderTargetMipmap(L)),v.isScene===!0&&v.onAfterRender(T,v,U),ae.resetDefaultState(),m=-1,E=null,x.pop(),x.length>0?(f=x[x.length-1],z===!0&&ee.setGlobalState(T.clippingPlanes,f.state.camera)):f=null,R.pop(),R.length>0?d=R[R.length-1]:d=null};function or(v,U,O,F){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)O=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Oe.intersectsSprite(v)){F&&Ae.setFromMatrixPosition(v.matrixWorld).applyMatrix4(te);const oe=N.update(v),ue=v.material;ue.visible&&d.push(v,oe,ue,O,Ae.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Oe.intersectsObject(v))){const oe=N.update(v),ue=v.material;if(F&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ae.copy(v.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Ae.copy(oe.boundingSphere.center)),Ae.applyMatrix4(v.matrixWorld).applyMatrix4(te)),Array.isArray(ue)){const le=oe.groups;for(let Re=0,Ce=le.length;Re<Ce;Re++){const Ee=le[Re],Ne=ue[Ee.materialIndex];Ne&&Ne.visible&&d.push(v,oe,Ne,O,Ae.z,Ee)}}else ue.visible&&d.push(v,oe,ue,O,Ae.z,null)}}const Q=v.children;for(let oe=0,ue=Q.length;oe<ue;oe++)or(Q[oe],U,O,F)}function Ma(v,U,O,F){const I=v.opaque,Q=v.transmissive,oe=v.transparent;f.setupLightsView(O),z===!0&&ee.setGlobalState(T.clippingPlanes,O),F&&Se.viewport(P.copy(F)),I.length>0&&wi(I,U,O),Q.length>0&&wi(Q,U,O),oe.length>0&&wi(oe,U,O),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function xa(v,U,O,F){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[F.id]===void 0&&(f.state.transmissionRenderTarget[F.id]=new Zn(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?ji:Nn,minFilter:li,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const Q=f.state.transmissionRenderTarget[F.id],oe=F.viewport||P;Q.setSize(oe.z*T.transmissionResolutionScale,oe.w*T.transmissionResolutionScale);const ue=T.getRenderTarget(),le=T.getActiveCubeFace(),Re=T.getActiveMipmapLevel();T.setRenderTarget(Q),T.getClearColor(V),q=T.getClearAlpha(),q<1&&T.setClearColor(16777215,.5),T.clear(),ct&&_e.render(O);const Ce=T.toneMapping;T.toneMapping=dn;const Ee=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),f.setupLightsView(F),z===!0&&ee.setGlobalState(T.clippingPlanes,F),wi(v,O,F),Ie.updateMultisampleRenderTarget(Q),Ie.updateRenderTargetMipmap(Q),Te.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let ze=0,st=U.length;ze<st;ze++){const Ze=U[ze],We=Ze.object,Me=Ze.geometry,tt=Ze.material,Ge=Ze.group;if(tt.side===rn&&We.layers.test(F.layers)){const Lt=tt.side;tt.side=Yt,tt.needsUpdate=!0,Aa(We,O,F,Me,tt,Ge),tt.side=Lt,tt.needsUpdate=!0,Ne=!0}}Ne===!0&&(Ie.updateMultisampleRenderTarget(Q),Ie.updateRenderTargetMipmap(Q))}T.setRenderTarget(ue,le,Re),T.setClearColor(V,q),Ee!==void 0&&(F.viewport=Ee),T.toneMapping=Ce}function wi(v,U,O){const F=U.isScene===!0?U.overrideMaterial:null;for(let I=0,Q=v.length;I<Q;I++){const oe=v[I],ue=oe.object,le=oe.geometry,Re=oe.group;let Ce=oe.material;Ce.allowOverride===!0&&F!==null&&(Ce=F),ue.layers.test(O.layers)&&Aa(ue,U,O,le,Ce,Re)}}function Aa(v,U,O,F,I,Q){v.onBeforeRender(T,U,O,F,I,Q),v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),I.onBeforeRender(T,U,O,F,v,Q),I.transparent===!0&&I.side===rn&&I.forceSinglePass===!1?(I.side=Yt,I.needsUpdate=!0,T.renderBufferDirect(O,U,F,I,v,Q),I.side=gi,I.needsUpdate=!0,T.renderBufferDirect(O,U,F,I,v,Q),I.side=rn):T.renderBufferDirect(O,U,F,I,v,Q),v.onAfterRender(T,U,O,F,I,Q)}function Di(v,U,O){U.isScene!==!0&&(U=we);const F=fe.get(v),I=f.state.lights,Q=f.state.shadowsArray,oe=I.state.version,ue=X.getParameters(v,I.state,Q,U,O),le=X.getProgramCacheKey(ue);let Re=F.programs;F.environment=v.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(v.isMeshStandardMaterial?ft:mt).get(v.envMap||F.environment),F.envMapRotation=F.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Re===void 0&&(v.addEventListener("dispose",Y),Re=new Map,F.programs=Re);let Ce=Re.get(le);if(Ce!==void 0){if(F.currentProgram===Ce&&F.lightsStateVersion===oe)return ba(v,ue),Ce}else ue.uniforms=X.getUniforms(v),v.onBeforeCompile(ue,T),Ce=X.acquireProgram(ue,le),Re.set(le,Ce),F.uniforms=ue.uniforms;const Ee=F.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ee.clippingPlanes=ee.uniform),ba(v,ue),F.needsLights=xl(v),F.lightsStateVersion=oe,F.needsLights&&(Ee.ambientLightColor.value=I.state.ambient,Ee.lightProbe.value=I.state.probe,Ee.directionalLights.value=I.state.directional,Ee.directionalLightShadows.value=I.state.directionalShadow,Ee.spotLights.value=I.state.spot,Ee.spotLightShadows.value=I.state.spotShadow,Ee.rectAreaLights.value=I.state.rectArea,Ee.ltc_1.value=I.state.rectAreaLTC1,Ee.ltc_2.value=I.state.rectAreaLTC2,Ee.pointLights.value=I.state.point,Ee.pointLightShadows.value=I.state.pointShadow,Ee.hemisphereLights.value=I.state.hemi,Ee.directionalShadowMap.value=I.state.directionalShadowMap,Ee.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Ee.spotShadowMap.value=I.state.spotShadowMap,Ee.spotLightMatrix.value=I.state.spotLightMatrix,Ee.spotLightMap.value=I.state.spotLightMap,Ee.pointShadowMap.value=I.state.pointShadowMap,Ee.pointShadowMatrix.value=I.state.pointShadowMatrix),F.currentProgram=Ce,F.uniformsList=null,Ce}function Ra(v){if(v.uniformsList===null){const U=v.currentProgram.getUniforms();v.uniformsList=ki.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function ba(v,U){const O=fe.get(v);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function Tl(v,U,O,F,I){U.isScene!==!0&&(U=we),Ie.resetTextureUnits();const Q=U.fog,oe=F.isMeshStandardMaterial?U.environment:null,ue=L===null?T.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:er,le=(F.isMeshStandardMaterial?ft:mt).get(F.envMap||oe),Re=F.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ce=!!O.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Ee=!!O.morphAttributes.position,Ne=!!O.morphAttributes.normal,ze=!!O.morphAttributes.color;let st=dn;F.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(st=T.toneMapping);const Ze=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,We=Ze!==void 0?Ze.length:0,Me=fe.get(F),tt=f.state.lights;if(z===!0&&(re===!0||v!==E)){const Tt=v===E&&F.id===m;ee.setState(F,v,Tt)}let Ge=!1;F.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==tt.state.version||Me.outputColorSpace!==ue||I.isBatchedMesh&&Me.batching===!1||!I.isBatchedMesh&&Me.batching===!0||I.isBatchedMesh&&Me.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Me.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Me.instancing===!1||!I.isInstancedMesh&&Me.instancing===!0||I.isSkinnedMesh&&Me.skinning===!1||!I.isSkinnedMesh&&Me.skinning===!0||I.isInstancedMesh&&Me.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Me.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Me.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Me.instancingMorph===!1&&I.morphTexture!==null||Me.envMap!==le||F.fog===!0&&Me.fog!==Q||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ee.numPlanes||Me.numIntersection!==ee.numIntersection)||Me.vertexAlphas!==Re||Me.vertexTangents!==Ce||Me.morphTargets!==Ee||Me.morphNormals!==Ne||Me.morphColors!==ze||Me.toneMapping!==st||Me.morphTargetsCount!==We)&&(Ge=!0):(Ge=!0,Me.__version=F.version);let Lt=Me.currentProgram;Ge===!0&&(Lt=Di(F,U,I));let Bn=!1,Ut=!1,ai=!1;const nt=Lt.getUniforms(),Vt=Me.uniforms;if(Se.useProgram(Lt.program)&&(Bn=!0,Ut=!0,ai=!0),F.id!==m&&(m=F.id,Ut=!0),Bn||E!==v){Se.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),nt.setValue(w,"projectionMatrix",v.projectionMatrix),nt.setValue(w,"viewMatrix",v.matrixWorldInverse);const xt=nt.map.cameraPosition;xt!==void 0&&xt.setValue(w,xe.setFromMatrixPosition(v.matrixWorld)),Ve.logarithmicDepthBuffer&&nt.setValue(w,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&nt.setValue(w,"isOrthographic",v.isOrthographicCamera===!0),E!==v&&(E=v,Ut=!0,ai=!0)}if(I.isSkinnedMesh){nt.setOptional(w,I,"bindMatrix"),nt.setOptional(w,I,"bindMatrixInverse");const Tt=I.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),nt.setValue(w,"boneTexture",Tt.boneTexture,Ie))}I.isBatchedMesh&&(nt.setOptional(w,I,"batchingTexture"),nt.setValue(w,"batchingTexture",I._matricesTexture,Ie),nt.setOptional(w,I,"batchingIdTexture"),nt.setValue(w,"batchingIdTexture",I._indirectTexture,Ie),nt.setOptional(w,I,"batchingColorTexture"),I._colorsTexture!==null&&nt.setValue(w,"batchingColorTexture",I._colorsTexture,Ie));const kt=O.morphAttributes;if((kt.position!==void 0||kt.normal!==void 0||kt.color!==void 0)&&J.update(I,O,Lt),(Ut||Me.receiveShadow!==I.receiveShadow)&&(Me.receiveShadow=I.receiveShadow,nt.setValue(w,"receiveShadow",I.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Vt.envMap.value=le,Vt.flipEnvMap.value=le.isCubeTexture&&le.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&U.environment!==null&&(Vt.envMapIntensity.value=U.environmentIntensity),Ut&&(nt.setValue(w,"toneMappingExposure",T.toneMappingExposure),Me.needsLights&&Ml(Vt,ai),Q&&F.fog===!0&&K.refreshFogUniforms(Vt,Q),K.refreshMaterialUniforms(Vt,F,B,$,f.state.transmissionRenderTarget[v.id]),ki.upload(w,Ra(Me),Vt,Ie)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ki.upload(w,Ra(Me),Vt,Ie),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&nt.setValue(w,"center",I.center),nt.setValue(w,"modelViewMatrix",I.modelViewMatrix),nt.setValue(w,"normalMatrix",I.normalMatrix),nt.setValue(w,"modelMatrix",I.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Tt=F.uniformsGroups;for(let xt=0,sr=Tt.length;xt<sr;xt++){const En=Tt[xt];ye.update(En,Lt),ye.bind(En,Lt)}}return Lt}function Ml(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function xl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(v,U,O){const F=fe.get(v);F.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),fe.get(v.texture).__webglTexture=U,fe.get(v.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:O,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){const O=fe.get(v);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0};const Al=w.createFramebuffer();this.setRenderTarget=function(v,U=0,O=0){L=v,C=U,D=O;let F=!0,I=null,Q=!1,oe=!1;if(v){const le=fe.get(v);if(le.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(w.FRAMEBUFFER,null),F=!1;else if(le.__webglFramebuffer===void 0)Ie.setupRenderTarget(v);else if(le.__hasExternalTextures)Ie.rebindTextures(v,fe.get(v.texture).__webglTexture,fe.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ee=v.depthTexture;if(le.__boundDepthTexture!==Ee){if(Ee!==null&&fe.has(Ee)&&(v.width!==Ee.image.width||v.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(v)}}const Re=v.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(oe=!0);const Ce=fe.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ce[U])?I=Ce[U][O]:I=Ce[U],Q=!0):v.samples>0&&Ie.useMultisampledRTT(v)===!1?I=fe.get(v).__webglMultisampledFramebuffer:Array.isArray(Ce)?I=Ce[O]:I=Ce,P.copy(v.viewport),k.copy(v.scissor),G=v.scissorTest}else P.copy(Pe).multiplyScalar(B).floor(),k.copy(Le).multiplyScalar(B).floor(),G=ot;if(O!==0&&(I=Al),Se.bindFramebuffer(w.FRAMEBUFFER,I)&&F&&Se.drawBuffers(v,I),Se.viewport(P),Se.scissor(k),Se.setScissorTest(G),Q){const le=fe.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,le.__webglTexture,O)}else if(oe){const le=U;for(let Re=0;Re<v.textures.length;Re++){const Ce=fe.get(v.textures[Re]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Re,Ce.__webglTexture,O,le)}}else if(v!==null&&O!==0){const le=fe.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,le.__webglTexture,O)}m=-1},this.readRenderTargetPixels=function(v,U,O,F,I,Q,oe,ue=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let le=fe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&oe!==void 0&&(le=le[oe]),le){Se.bindFramebuffer(w.FRAMEBUFFER,le);try{const Re=v.textures[ue],Ce=Re.format,Ee=Re.type;if(!Ve.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-F&&O>=0&&O<=v.height-I&&(v.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+ue),w.readPixels(U,O,F,I,me.convert(Ce),me.convert(Ee),Q))}finally{const Re=L!==null?fe.get(L).__webglFramebuffer:null;Se.bindFramebuffer(w.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(v,U,O,F,I,Q,oe,ue=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let le=fe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&oe!==void 0&&(le=le[oe]),le)if(U>=0&&U<=v.width-F&&O>=0&&O<=v.height-I){Se.bindFramebuffer(w.FRAMEBUFFER,le);const Re=v.textures[ue],Ce=Re.format,Ee=Re.type;if(!Ve.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ne=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ne),w.bufferData(w.PIXEL_PACK_BUFFER,Q.byteLength,w.STREAM_READ),v.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+ue),w.readPixels(U,O,F,I,me.convert(Ce),me.convert(Ee),0);const ze=L!==null?fe.get(L).__webglFramebuffer:null;Se.bindFramebuffer(w.FRAMEBUFFER,ze);const st=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await wl(w,st,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ne),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Q),w.deleteBuffer(Ne),w.deleteSync(st),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,O=0){const F=Math.pow(2,-O),I=Math.floor(v.image.width*F),Q=Math.floor(v.image.height*F),oe=U!==null?U.x:0,ue=U!==null?U.y:0;Ie.setTexture2D(v,0),w.copyTexSubImage2D(w.TEXTURE_2D,O,0,0,oe,ue,I,Q),Se.unbindTexture()};const Rl=w.createFramebuffer(),bl=w.createFramebuffer();this.copyTextureToTexture=function(v,U,O=null,F=null,I=0,Q=null){Q===null&&(I!==0?(Oi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=I,I=0):Q=0);let oe,ue,le,Re,Ce,Ee,Ne,ze,st;const Ze=v.isCompressedTexture?v.mipmaps[Q]:v.image;if(O!==null)oe=O.max.x-O.min.x,ue=O.max.y-O.min.y,le=O.isBox3?O.max.z-O.min.z:1,Re=O.min.x,Ce=O.min.y,Ee=O.isBox3?O.min.z:0;else{const kt=Math.pow(2,-I);oe=Math.floor(Ze.width*kt),ue=Math.floor(Ze.height*kt),v.isDataArrayTexture?le=Ze.depth:v.isData3DTexture?le=Math.floor(Ze.depth*kt):le=1,Re=0,Ce=0,Ee=0}F!==null?(Ne=F.x,ze=F.y,st=F.z):(Ne=0,ze=0,st=0);const We=me.convert(U.format),Me=me.convert(U.type);let tt;U.isData3DTexture?(Ie.setTexture3D(U,0),tt=w.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ie.setTexture2DArray(U,0),tt=w.TEXTURE_2D_ARRAY):(Ie.setTexture2D(U,0),tt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const Ge=w.getParameter(w.UNPACK_ROW_LENGTH),Lt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Bn=w.getParameter(w.UNPACK_SKIP_PIXELS),Ut=w.getParameter(w.UNPACK_SKIP_ROWS),ai=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ze.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ze.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Re),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ce),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ee);const nt=v.isDataArrayTexture||v.isData3DTexture,Vt=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){const kt=fe.get(v),Tt=fe.get(U),xt=fe.get(kt.__renderTarget),sr=fe.get(Tt.__renderTarget);Se.bindFramebuffer(w.READ_FRAMEBUFFER,xt.__webglFramebuffer),Se.bindFramebuffer(w.DRAW_FRAMEBUFFER,sr.__webglFramebuffer);for(let En=0;En<le;En++)nt&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,fe.get(v).__webglTexture,I,Ee+En),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,fe.get(U).__webglTexture,Q,st+En)),w.blitFramebuffer(Re,Ce,oe,ue,Ne,ze,oe,ue,w.DEPTH_BUFFER_BIT,w.NEAREST);Se.bindFramebuffer(w.READ_FRAMEBUFFER,null),Se.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(I!==0||v.isRenderTargetTexture||fe.has(v)){const kt=fe.get(v),Tt=fe.get(U);Se.bindFramebuffer(w.READ_FRAMEBUFFER,Rl),Se.bindFramebuffer(w.DRAW_FRAMEBUFFER,bl);for(let xt=0;xt<le;xt++)nt?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,kt.__webglTexture,I,Ee+xt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,kt.__webglTexture,I),Vt?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Tt.__webglTexture,Q,st+xt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Tt.__webglTexture,Q),I!==0?w.blitFramebuffer(Re,Ce,oe,ue,Ne,ze,oe,ue,w.COLOR_BUFFER_BIT,w.NEAREST):Vt?w.copyTexSubImage3D(tt,Q,Ne,ze,st+xt,Re,Ce,oe,ue):w.copyTexSubImage2D(tt,Q,Ne,ze,Re,Ce,oe,ue);Se.bindFramebuffer(w.READ_FRAMEBUFFER,null),Se.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Vt?v.isDataTexture||v.isData3DTexture?w.texSubImage3D(tt,Q,Ne,ze,st,oe,ue,le,We,Me,Ze.data):U.isCompressedArrayTexture?w.compressedTexSubImage3D(tt,Q,Ne,ze,st,oe,ue,le,We,Ze.data):w.texSubImage3D(tt,Q,Ne,ze,st,oe,ue,le,We,Me,Ze):v.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,Q,Ne,ze,oe,ue,We,Me,Ze.data):v.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,Q,Ne,ze,Ze.width,Ze.height,We,Ze.data):w.texSubImage2D(w.TEXTURE_2D,Q,Ne,ze,oe,ue,We,Me,Ze);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ge),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Lt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Bn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ut),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ai),Q===0&&U.generateMipmaps&&w.generateMipmap(tt),Se.unbindTexture()},this.copyTextureToTexture3D=function(v,U,O=null,F=null,I=0){return Oi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,U,O,F,I)},this.initRenderTarget=function(v){fe.get(v).__webglFramebuffer===void 0&&Ie.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ie.setTextureCube(v,0):v.isData3DTexture?Ie.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ie.setTexture2DArray(v,0):Ie.setTexture2D(v,0),Se.unbindTexture()},this.resetState=function(){C=0,D=0,L=null,Se.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}const J_=640,j_=1024;function Zo(){const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,e=navigator.maxTouchPoints||0,t=window.innerWidth<=J_||e>1,i=!t&&window.innerWidth<=j_,r=em();return{particleScale:n?.45:t?.55:i?.8:1,pixelRatio:Math.min(window.devicePixelRatio||1,t?1.5:2),reducedMotion:n,prefersFallback:!r}}function em(){try{const n=document.createElement("canvas");return!!(n.getContext("webgl")||n.getContext("experimental-webgl"))}catch{return!1}}class tm{renderer;scene;camera;root;host;constructor(e,t){this.host=e,this.scene=new Kc,this.scene.fog=new $c("#101521",.035),this.camera=new Yn(48,window.innerWidth/window.innerHeight,.1,60),this.camera.position.set(0,0,13),this.root=new Zc,this.scene.add(this.root),this.renderer=new Q_({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(t.pixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=Jo,this.renderer.setClearColor("#000000",0),this.host.appendChild(this.renderer.domElement)}getContext(e){return{camera:this.camera,performance:e,viewport:{width:window.innerWidth,height:window.innerHeight,dpr:this.renderer.getPixelRatio()}}}resize(e){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(e.pixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight)}render(){this.renderer.render(this.scene,this.camera)}dispose(){this.renderer.dispose(),this.host.removeChild(this.renderer.domElement)}}class nm{tween;progress=1;start(e,t,i=1.15){this.tween?.kill(),this.progress=0,this.tween=Sa.to(this,{progress:1,duration:i,ease:"power2.inOut",onUpdate:()=>e(this.progress),onComplete:()=>{e(1),t()}})}getProgress(){return this.progress}dispose(){this.tween?.kill()}}const Qo="weather-season";class rm{host;sceneFactories;themes;transitionManager=new nm;onThemeChange;renderer;performance=Zo();activeContext;activeScene=null;previousScene=null;currentSeason;themeMix=1;rafId=0;elapsed=0;lastTime=0;boundResize=()=>this.handleResize();constructor(e){this.host=e.host,this.sceneFactories=e.sceneFactories,this.themes=e.themes,this.onThemeChange=e.onThemeChange,this.currentSeason=this.getInitialSeason(e.defaultSeason),this.renderer=this.performance.prefersFallback?null:new tm(this.host,this.performance),this.activeContext=this.createContext()}init(){this.renderer&&(this.mountScene(this.currentSeason),this.rafId=window.requestAnimationFrame(this.tick)),this.applyUiTheme(this.themes[this.currentSeason],!0),window.addEventListener("resize",this.boundResize)}getSeason(){return this.currentSeason}getFallbackMode(){return this.performance.prefersFallback}setSeason(e){if(e===this.currentSeason)return;if(this.currentSeason=e,window.localStorage.setItem(Qo,e),!this.renderer){this.applyUiTheme(this.themes[e]);return}const t=this.sceneFactories[e]();t.init(this.activeContext),t.enter(this.activeContext),wr(t,0),this.renderer.root.add(t.root),this.previousScene&&(this.renderer.root.remove(this.previousScene.root),this.previousScene.dispose()),this.previousScene=this.activeScene,this.activeScene=t,this.applyUiTheme(this.themes[e]),this.transitionManager.start(i=>{this.themeMix=i,this.applySceneMix()},()=>{!this.renderer||!this.previousScene||(this.previousScene.exit(),this.renderer.root.remove(this.previousScene.root),this.previousScene.dispose(),this.previousScene=null)},this.performance.reducedMotion?.3:1.15)}dispose(){window.cancelAnimationFrame(this.rafId),window.removeEventListener("resize",this.boundResize),this.transitionManager.dispose(),this.activeScene?.dispose(),this.previousScene?.dispose(),this.renderer?.dispose()}mountScene(e){this.activeScene=this.sceneFactories[e](),this.activeScene.init(this.activeContext),this.activeScene.enter(this.activeContext),this.renderer?.root.add(this.activeScene.root),this.applySceneMix()}applySceneMix(){wr(this.activeScene,this.themeMix),wr(this.previousScene,1-this.themeMix)}applyUiTheme(e,t=!1){const i=document.documentElement,r=t||this.performance.reducedMotion?0:1.05,a=Object.fromEntries(Object.entries(e.palette).map(([o,s])=>[`--${o}`,s]));if(r===0)for(const[o,s]of Object.entries(a))i.style.setProperty(o,s);else Sa.to(i,{...a,duration:r,ease:"power2.inOut",overwrite:"auto"});this.onThemeChange?.(e)}handleResize(){this.performance=Zo(),this.renderer?.resize(this.performance),this.activeContext=this.createContext(),this.activeScene?.resize(this.activeContext),this.previousScene?.resize(this.activeContext)}createContext(){if(this.renderer)return this.renderer.getContext(this.performance);const e=new Yn(48,window.innerWidth/window.innerHeight,.1,60);return e.position.set(0,0,13),{camera:e,performance:this.performance,viewport:{width:window.innerWidth,height:window.innerHeight,dpr:window.devicePixelRatio||1}}}getInitialSeason(e){const t=window.localStorage.getItem(Qo);return t&&t in this.sceneFactories?t:e}tick=e=>{const t=Math.min((e-this.lastTime)/1e3,.033);this.lastTime=e,this.elapsed+=t,this.activeScene?.update(t,this.elapsed,this.themeMix),this.previousScene?.update(t,this.elapsed,1-this.themeMix),this.renderer?.render(),this.rafId=window.requestAnimationFrame(this.tick)}}function wr(n,e){n&&n.root.traverse(t=>{const i=t;if(!i.material)return;if(Array.isArray(i.material)){i.material.forEach(a=>{a.transparent=!0;const o=typeof a.userData.baseOpacity=="number"?a.userData.baseOpacity:a.opacity;a.userData.baseOpacity=o,a.opacity=o*e});return}i.material.transparent=!0;const r=typeof i.material.userData.baseOpacity=="number"?i.material.userData.baseOpacity:i.material.opacity;i.material.userData.baseOpacity=r,i.material.opacity=r*e})}export{rm as ThemeController};

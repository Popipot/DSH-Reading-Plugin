window.__ModuleLoader__.load({ id: "dsh-reader", factory: (require) => {
var module = { exports: {} }; var exports = module.exports;
var cu=Object.create;var ha=Object.defineProperty;var du=Object.getOwnPropertyDescriptor;var hu=Object.getOwnPropertyNames;var uu=Object.getPrototypeOf,pu=Object.prototype.hasOwnProperty;var cr=(t,e,r)=>()=>{if(r)throw r[0];try{return t&&(e=t(t=0)),e}catch(n){throw r=[n],n}};var wi=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}},sl=(t,e)=>{for(var r in e)ha(t,r,{get:e[r],enumerable:!0})},ll=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of hu(e))!pu.call(t,o)&&o!==r&&ha(t,o,{get:()=>e[o],enumerable:!(n=du(e,o))||n.enumerable});return t};var Mt=(t,e,r)=>(r=t!=null?cu(uu(t)):{},ll(e||!t||!t.__esModule?ha(r,"default",{value:t,enumerable:!0}):r,t)),fu=t=>ll(ha({},"__esModule",{value:!0}),t);function yf(t,e){return Ed(t,{i:2},e&&e.out,e&&e.dictionary)}function Ad(t,e){return Ed(t.subarray(vf(t,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}function kf(t,e){if(e){for(var r="",n=0;n<t.length;n+=16384)r+=String.fromCharCode.apply(null,t.subarray(n,n+16384));return r}else{if(fs)return fs.decode(t);var o=_f(t),a=o.s,r=o.r;return r.length&&qt(8),a}}function Nd(t,e){for(var r={},n=t.length-22;yr(t,n)!=101010256;--n)(!n||t.length-n>65558)&&qt(13);var o=Zr(t,n+8);if(!o)return{};var a=yr(t,n+16),i=yr(t,n-20)==117853008;if(i){var s=yr(t,n-12);i=yr(t,s)==101075792,i&&(o=yr(t,s+32),a=yr(t,s+48))}for(var l=e&&e.filter,d=0;d<o;++d){var f=Sf(t,a,i),g=f[0],p=f[1],u=f[2],T=f[3],_=f[4],w=f[5],A=Tf(t,w);a=_,(!l||l({name:T,size:p,originalSize:u,compression:g}))&&(g?g==8?r[T]=yf(t.subarray(A,A+p),{out:new dr(u)}):qt(14,"unknown compression type "+g):r[T]=gs(t,A,A+p))}return r}var dr,mo,df,vd,yd,hf,wd,_d,kd,uf,Td,pf,nx,ps,pn,Qe,Ho,Uo,Qe,Qe,Qe,Qe,Sd,Qe,ff,gf,ds,Fr,hs,mf,gs,bf,qt,Ed,xf,Zr,yr,us,vf,fs,wf,_f,Tf,Sf,Ef,ms=cr(()=>{dr=Uint8Array,mo=Uint16Array,df=Int32Array,vd=new dr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),yd=new dr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),hf=new dr([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),wd=function(t,e){for(var r=new mo(31),n=0;n<31;++n)r[n]=e+=1<<t[n-1];for(var o=new df(r[30]),n=1;n<30;++n)for(var a=r[n];a<r[n+1];++a)o[a]=a-r[n]<<5|n;return{b:r,r:o}},_d=wd(vd,2),kd=_d.b,uf=_d.r;kd[28]=258,uf[258]=28;Td=wd(yd,0),pf=Td.b,nx=Td.r,ps=new mo(32768);for(Qe=0;Qe<32768;++Qe)pn=(Qe&43690)>>1|(Qe&21845)<<1,pn=(pn&52428)>>2|(pn&13107)<<2,pn=(pn&61680)>>4|(pn&3855)<<4,ps[Qe]=((pn&65280)>>8|(pn&255)<<8)>>1;Ho=(function(t,e,r){for(var n=t.length,o=0,a=new mo(e);o<n;++o)t[o]&&++a[t[o]-1];var i=new mo(e);for(o=1;o<e;++o)i[o]=i[o-1]+a[o-1]<<1;var s;if(r){s=new mo(1<<e);var l=15-e;for(o=0;o<n;++o)if(t[o])for(var d=o<<4|t[o],f=e-t[o],g=i[t[o]-1]++<<f,p=g|(1<<f)-1;g<=p;++g)s[ps[g]>>l]=d}else for(s=new mo(n),o=0;o<n;++o)t[o]&&(s[o]=ps[i[t[o]-1]++]>>15-t[o]);return s}),Uo=new dr(288);for(Qe=0;Qe<144;++Qe)Uo[Qe]=8;for(Qe=144;Qe<256;++Qe)Uo[Qe]=9;for(Qe=256;Qe<280;++Qe)Uo[Qe]=7;for(Qe=280;Qe<288;++Qe)Uo[Qe]=8;Sd=new dr(32);for(Qe=0;Qe<32;++Qe)Sd[Qe]=5;ff=Ho(Uo,9,1),gf=Ho(Sd,5,1),ds=function(t){for(var e=t[0],r=1;r<t.length;++r)t[r]>e&&(e=t[r]);return e},Fr=function(t,e,r){var n=e/8|0;return(t[n]|t[n+1]<<8)>>(e&7)&r},hs=function(t,e){var r=e/8|0;return(t[r]|t[r+1]<<8|t[r+2]<<16)>>(e&7)},mf=function(t){return(t+7)/8|0},gs=function(t,e,r){return(e==null||e<0)&&(e=0),(r==null||r>t.length)&&(r=t.length),new dr(t.subarray(e,r))},bf=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],qt=function(t,e,r){var n=new Error(e||bf[t]);if(n.code=t,Error.captureStackTrace&&Error.captureStackTrace(n,qt),!r)throw n;return n},Ed=function(t,e,r,n){var o=t.length,a=n?n.length:0;if(!o||e.f&&!e.l)return r||new dr(0);var i=!r,s=i||e.i!=2,l=e.i;i&&(r=new dr(o*3));var d=function(xt){var h=r.length;if(xt>h){var c=new dr(Math.max(h*2,xt));c.set(r),r=c}},f=e.f||0,g=e.p||0,p=e.b||0,u=e.l,T=e.d,_=e.m,w=e.n,A=o*8;do{if(!u){f=Fr(t,g,1);var N=Fr(t,g+1,3);if(g+=3,N)if(N==1)u=ff,T=gf,_=9,w=5;else if(N==2){var E=Fr(t,g,31)+257,L=Fr(t,g+10,15)+4,P=E+Fr(t,g+5,31)+1;g+=14;for(var x=new dr(P),M=new dr(19),F=0;F<L;++F)M[hf[F]]=Fr(t,g+F*3,7);g+=L*3;for(var te=ds(M),U=(1<<te)-1,re=Ho(M,te,1),F=0;F<P;){var ie=re[Fr(t,g,U)];g+=ie&15;var v=ie>>4;if(v<16)x[F++]=v;else{var z=0,ne=0;for(v==16?(ne=3+Fr(t,g,3),g+=2,z=x[F-1]):v==17?(ne=3+Fr(t,g,7),g+=3):v==18&&(ne=11+Fr(t,g,127),g+=7);ne--;)x[F++]=z}}var $=x.subarray(0,E),G=x.subarray(E);_=ds($),w=ds(G),u=Ho($,_,1),T=Ho(G,w,1)}else qt(1);else{var v=mf(g)+4,I=t[v-4]|t[v-3]<<8,C=v+I;if(C>o){l&&qt(0);break}s&&d(p+I),r.set(t.subarray(v,C),p),e.b=p+=I,e.p=g=C*8,e.f=f;continue}if(g>A){l&&qt(0);break}}s&&d(p+131072);for(var se=(1<<_)-1,D=(1<<w)-1,pe=g;;pe=g){var z=u[hs(t,g)&se],be=z>>4;if(g+=z&15,g>A){l&&qt(0);break}if(z||qt(2),be<256)r[p++]=be;else if(be==256){pe=g,u=null;break}else{var _e=be-254;if(be>264){var F=be-257,V=vd[F];_e=Fr(t,g,(1<<V)-1)+kd[F],g+=V}var Oe=T[hs(t,g)&D],Ie=Oe>>4;Oe||qt(3),g+=Oe&15;var G=pf[Ie];if(Ie>3){var V=yd[Ie];G+=hs(t,g)&(1<<V)-1,g+=V}if(g>A){l&&qt(0);break}s&&d(p+131072);var Se=p+_e;if(p<G){var De=a-G,He=Math.min(G,Se);for(De+p<0&&qt(3);p<He;++p)r[p]=n[De+p]}for(;p<Se;++p)r[p]=r[p-G]}}e.l=u,e.p=pe,e.b=p,e.f=f,u&&(f=1,e.m=_,e.d=T,e.n=w)}while(!f);return p!=r.length&&i?gs(r,0,p):r.subarray(0,p)},xf=new dr(0),Zr=function(t,e){return t[e]|t[e+1]<<8},yr=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},us=function(t,e){return yr(t,e)+yr(t,e+4)*4294967296},vf=function(t,e){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&qt(6,"invalid zlib data"),(t[1]>>5&1)==+!e&&qt(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};fs=typeof TextDecoder<"u"&&new TextDecoder,wf=0;try{fs.decode(xf,{stream:!0}),wf=1}catch{}_f=function(t){for(var e="",r=0;;){var n=t[r++],o=(n>127)+(n>223)+(n>239);if(r+o>t.length)return{s:e,r:gs(t,r-1)};o?o==3?(n=((n&15)<<18|(t[r++]&63)<<12|(t[r++]&63)<<6|t[r++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):o&1?e+=String.fromCharCode((n&31)<<6|t[r++]&63):e+=String.fromCharCode((n&15)<<12|(t[r++]&63)<<6|t[r++]&63):e+=String.fromCharCode(n)}};Tf=function(t,e){return e+30+Zr(t,e+26)+Zr(t,e+28)},Sf=function(t,e,r){var n=Zr(t,e+28),o=Zr(t,e+30),a=kf(t.subarray(e+46,e+46+n),!(Zr(t,e+8)&2048)),i=e+46+n,s=Ef(t,i,o,r,yr(t,e+20),yr(t,e+24),yr(t,e+42)),l=s[0],d=s[1],f=s[2];return[Zr(t,e+10),l,d,a,i+o+Zr(t,e+32),f]},Ef=function(t,e,r,n,o,a,i){var s=o==4294967295,l=a==4294967295,d=i==4294967295,f=e+r,g=s+l+d;if(n&&g){for(;e+4<f;e+=4+Zr(t,e+2))if(Zr(t,e)==1)return[s?us(t,e+4+8*l):o,l?us(t,e+4):a,d?us(t,e+4+8*(l+s)):i,1];n<2&&qt(13)}return[o,a,i,0]}});function Kt(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return Ts(t,e,n)}}function Of(t){return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return Ss(t,r)}}function Le(t,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Qa;Cd&&Cd(t,null);let n=e.length;for(;n--;){let o=e[n];if(typeof o=="string"){let a=r(o);a!==o&&(Af(e)||(e[n]=a),o=a)}t[o]=!0}return t}function Lf(t){for(let e=0;e<t.length;e++)zr(t,e)||(t[e]=null);return t}function Qr(t){let e=ks(null);for(let[r,n]of Fd(t))zr(t,r)&&(Array.isArray(n)?e[r]=Lf(n):n&&typeof n=="object"&&n.constructor===Object?e[r]=Qr(n):e[r]=n);return e}function qo(t,e){for(;t!==null;){let n=Cf(t,e);if(n){if(n.get)return Kt(n.get);if(typeof n.value=="function")return Kt(n.value)}t=Nf(t)}function r(){return null}return r}function $d(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:qf(),e=fe=>$d(fe);if(e.version="3.3.1",e.removed=[],!t||!t.document||t.document.nodeType!==Xo.document||!t.Element)return e.isSupported=!1,e;let{document:r}=t,n=r,o=n.currentScript,{DocumentFragment:a,HTMLTemplateElement:i,Node:s,Element:l,NodeFilter:d,NamedNodeMap:f=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:g,DOMParser:p,trustedTypes:u}=t,T=l.prototype,_=qo(T,"cloneNode"),w=qo(T,"remove"),A=qo(T,"nextSibling"),N=qo(T,"childNodes"),v=qo(T,"parentNode");if(typeof i=="function"){let fe=r.createElement("template");fe.content&&fe.content.ownerDocument&&(r=fe.content.ownerDocument)}let I,C="",{implementation:E,createNodeIterator:L,createDocumentFragment:P,getElementsByTagName:x}=r,{importNode:M}=n,F=Dd();e.isSupported=typeof Fd=="function"&&typeof v=="function"&&E&&E.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:te,ERB_EXPR:U,TMPLIT_EXPR:re,DATA_ATTR:ie,ARIA_ATTR:z,IS_SCRIPT_OR_DATA:ne,ATTR_WHITESPACE:$,CUSTOM_ELEMENT:G}=Ld,{IS_ALLOWED_URI:se}=Ld,D=null,pe=Le({},[...Rd,...vs,...ys,...ws,...Md]),be=null,_e=Le({},[...Pd,..._s,...Od,...Za]),V=Object.seal(ks(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Oe=null,Ie=null,Se=Object.seal(ks(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),De=!0,He=!0,xt=!1,h=!0,c=!1,S=!0,b=!1,Y=!1,he=!1,de=!1,ve=!1,ke=!1,Fe=!0,oe=!1,ze="user-content-",qe=!0,Je=!1,Ue={},Be=null,xe=Le({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),lt=null,nt=Le({},["audio","video","img","source","image","track"]),We=null,pt=Le({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ur="http://www.w3.org/1998/Math/MathML",yt="http://www.w3.org/2000/svg",Et="http://www.w3.org/1999/xhtml",ft=Et,Ar=!1,Ot=null,Nr=Le({},[ur,yt,Et],bs),kt=Le({},["mi","mo","mn","ms","mtext"]),ee=Le({},["annotation-xml"]),ae=Le({},["title","style","font","a","script"]),we=null,le=["application/xhtml+xml","text/html"],gt="text/html",Ve=null,Jt=null,Tn=r.createElement("form"),fn=function(k){return k instanceof RegExp||k instanceof Function},pr=function(){let k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Jt&&Jt===k)){if((!k||typeof k!="object")&&(k={}),k=Qr(k),we=le.indexOf(k.PARSER_MEDIA_TYPE)===-1?gt:k.PARSER_MEDIA_TYPE,Ve=we==="application/xhtml+xml"?bs:Qa,D=zr(k,"ALLOWED_TAGS")?Le({},k.ALLOWED_TAGS,Ve):pe,be=zr(k,"ALLOWED_ATTR")?Le({},k.ALLOWED_ATTR,Ve):_e,Ot=zr(k,"ALLOWED_NAMESPACES")?Le({},k.ALLOWED_NAMESPACES,bs):Nr,We=zr(k,"ADD_URI_SAFE_ATTR")?Le(Qr(pt),k.ADD_URI_SAFE_ATTR,Ve):pt,lt=zr(k,"ADD_DATA_URI_TAGS")?Le(Qr(nt),k.ADD_DATA_URI_TAGS,Ve):nt,Be=zr(k,"FORBID_CONTENTS")?Le({},k.FORBID_CONTENTS,Ve):xe,Oe=zr(k,"FORBID_TAGS")?Le({},k.FORBID_TAGS,Ve):Qr({}),Ie=zr(k,"FORBID_ATTR")?Le({},k.FORBID_ATTR,Ve):Qr({}),Ue=zr(k,"USE_PROFILES")?k.USE_PROFILES:!1,De=k.ALLOW_ARIA_ATTR!==!1,He=k.ALLOW_DATA_ATTR!==!1,xt=k.ALLOW_UNKNOWN_PROTOCOLS||!1,h=k.ALLOW_SELF_CLOSE_IN_ATTR!==!1,c=k.SAFE_FOR_TEMPLATES||!1,S=k.SAFE_FOR_XML!==!1,b=k.WHOLE_DOCUMENT||!1,de=k.RETURN_DOM||!1,ve=k.RETURN_DOM_FRAGMENT||!1,ke=k.RETURN_TRUSTED_TYPE||!1,he=k.FORCE_BODY||!1,Fe=k.SANITIZE_DOM!==!1,oe=k.SANITIZE_NAMED_PROPS||!1,qe=k.KEEP_CONTENT!==!1,Je=k.IN_PLACE||!1,se=k.ALLOWED_URI_REGEXP||zd,ft=k.NAMESPACE||Et,kt=k.MATHML_TEXT_INTEGRATION_POINTS||kt,ee=k.HTML_INTEGRATION_POINTS||ee,V=k.CUSTOM_ELEMENT_HANDLING||{},k.CUSTOM_ELEMENT_HANDLING&&fn(k.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(V.tagNameCheck=k.CUSTOM_ELEMENT_HANDLING.tagNameCheck),k.CUSTOM_ELEMENT_HANDLING&&fn(k.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(V.attributeNameCheck=k.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),k.CUSTOM_ELEMENT_HANDLING&&typeof k.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(V.allowCustomizedBuiltInElements=k.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),c&&(He=!1),ve&&(de=!0),Ue&&(D=Le({},Md),be=[],Ue.html===!0&&(Le(D,Rd),Le(be,Pd)),Ue.svg===!0&&(Le(D,vs),Le(be,_s),Le(be,Za)),Ue.svgFilters===!0&&(Le(D,ys),Le(be,_s),Le(be,Za)),Ue.mathMl===!0&&(Le(D,ws),Le(be,Od),Le(be,Za))),k.ADD_TAGS&&(typeof k.ADD_TAGS=="function"?Se.tagCheck=k.ADD_TAGS:(D===pe&&(D=Qr(D)),Le(D,k.ADD_TAGS,Ve))),k.ADD_ATTR&&(typeof k.ADD_ATTR=="function"?Se.attributeCheck=k.ADD_ATTR:(be===_e&&(be=Qr(be)),Le(be,k.ADD_ATTR,Ve))),k.ADD_URI_SAFE_ATTR&&Le(We,k.ADD_URI_SAFE_ATTR,Ve),k.FORBID_CONTENTS&&(Be===xe&&(Be=Qr(Be)),Le(Be,k.FORBID_CONTENTS,Ve)),k.ADD_FORBID_CONTENTS&&(Be===xe&&(Be=Qr(Be)),Le(Be,k.ADD_FORBID_CONTENTS,Ve)),qe&&(D["#text"]=!0),b&&Le(D,["html","head","body"]),D.table&&(Le(D,["tbody"]),delete Oe.tbody),k.TRUSTED_TYPES_POLICY){if(typeof k.TRUSTED_TYPES_POLICY.createHTML!="function")throw Go('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof k.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Go('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');I=k.TRUSTED_TYPES_POLICY,C=I.createHTML("")}else I===void 0&&(I=Xf(u,o)),I!==null&&typeof C=="string"&&(C=I.createHTML(""));Vt&&Vt(k),Jt=k}},Bt=Le({},[...vs,...ys,...Df]),Zn=Le({},[...ws,...Ff]),Sn=function(k){let q=v(k);(!q||!q.tagName)&&(q={namespaceURI:ft,tagName:"template"});let ue=Qa(k.tagName),et=Qa(q.tagName);return Ot[k.namespaceURI]?k.namespaceURI===yt?q.namespaceURI===Et?ue==="svg":q.namespaceURI===ur?ue==="svg"&&(et==="annotation-xml"||kt[et]):!!Bt[ue]:k.namespaceURI===ur?q.namespaceURI===Et?ue==="math":q.namespaceURI===yt?ue==="math"&&ee[et]:!!Zn[ue]:k.namespaceURI===Et?q.namespaceURI===yt&&!ee[et]||q.namespaceURI===ur&&!kt[et]?!1:!Zn[ue]&&(ae[ue]||!Bt[ue]):!!(we==="application/xhtml+xml"&&Ot[k.namespaceURI]):!1},Lt=function(k){Wo(e.removed,{element:k});try{v(k).removeChild(k)}catch{w(k)}},ct=function(k,q){try{Wo(e.removed,{attribute:q.getAttributeNode(k),from:q})}catch{Wo(e.removed,{attribute:null,from:q})}if(q.removeAttribute(k),k==="is")if(de||ve)try{Lt(q)}catch{}else try{q.setAttribute(k,"")}catch{}},Qn=function(k){let q=null,ue=null;if(he)k="<remove></remove>"+k;else{let je=xs(k,/^[\r\n\t ]+/);ue=je&&je[0]}we==="application/xhtml+xml"&&ft===Et&&(k='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+k+"</body></html>");let et=I?I.createHTML(k):k;if(ft===Et)try{q=new p().parseFromString(et,we)}catch{}if(!q||!q.documentElement){q=E.createDocument(ft,"template",null);try{q.documentElement.innerHTML=Ar?C:et}catch{}}let dt=q.body||q.documentElement;return k&&ue&&dt.insertBefore(r.createTextNode(ue),dt.childNodes[0]||null),ft===Et?x.call(q,b?"html":"body")[0]:b?q.documentElement:dt},ar=function(k){return L.call(k.ownerDocument||k,k,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},Rt=function(k){return k instanceof g&&(typeof k.nodeName!="string"||typeof k.textContent!="string"||typeof k.removeChild!="function"||!(k.attributes instanceof f)||typeof k.removeAttribute!="function"||typeof k.setAttribute!="function"||typeof k.namespaceURI!="string"||typeof k.insertBefore!="function"||typeof k.hasChildNodes!="function")},$r=function(k){return typeof s=="function"&&k instanceof s};function ir(fe,k,q){Ya(fe,ue=>{ue.call(e,k,q,Jt)})}let En=function(k){let q=null;if(ir(F.beforeSanitizeElements,k,null),Rt(k))return Lt(k),!0;let ue=Ve(k.nodeName);if(ir(F.uponSanitizeElement,k,{tagName:ue,allowedTags:D}),S&&k.hasChildNodes()&&!$r(k.firstElementChild)&&Xt(/<[/\w!]/g,k.innerHTML)&&Xt(/<[/\w!]/g,k.textContent)||k.nodeType===Xo.progressingInstruction||S&&k.nodeType===Xo.comment&&Xt(/<[/\w]/g,k.data))return Lt(k),!0;if(!(Se.tagCheck instanceof Function&&Se.tagCheck(ue))&&(!D[ue]||Oe[ue])){if(!Oe[ue]&&sn(ue)&&(V.tagNameCheck instanceof RegExp&&Xt(V.tagNameCheck,ue)||V.tagNameCheck instanceof Function&&V.tagNameCheck(ue)))return!1;if(qe&&!Be[ue]){let et=v(k)||k.parentNode,dt=N(k)||k.childNodes;if(dt&&et){let je=dt.length;for(let wt=je-1;wt>=0;--wt){let Ut=_(dt[wt],!0);Ut.__removalCount=(k.__removalCount||0)+1,et.insertBefore(Ut,A(k))}}}return Lt(k),!0}return k instanceof l&&!Sn(k)||(ue==="noscript"||ue==="noembed"||ue==="noframes")&&Xt(/<\/no(script|embed|frames)/i,k.innerHTML)?(Lt(k),!0):(c&&k.nodeType===Xo.text&&(q=k.textContent,Ya([te,U,re],et=>{q=jo(q,et," ")}),k.textContent!==q&&(Wo(e.removed,{element:k.cloneNode()}),k.textContent=q)),ir(F.afterSanitizeElements,k,null),!1)},an=function(k,q,ue){if(Fe&&(q==="id"||q==="name")&&(ue in r||ue in Tn))return!1;if(!(He&&!Ie[q]&&Xt(ie,q))){if(!(De&&Xt(z,q))){if(!(Se.attributeCheck instanceof Function&&Se.attributeCheck(q,k))){if(!be[q]||Ie[q]){if(!(sn(k)&&(V.tagNameCheck instanceof RegExp&&Xt(V.tagNameCheck,k)||V.tagNameCheck instanceof Function&&V.tagNameCheck(k))&&(V.attributeNameCheck instanceof RegExp&&Xt(V.attributeNameCheck,q)||V.attributeNameCheck instanceof Function&&V.attributeNameCheck(q,k))||q==="is"&&V.allowCustomizedBuiltInElements&&(V.tagNameCheck instanceof RegExp&&Xt(V.tagNameCheck,ue)||V.tagNameCheck instanceof Function&&V.tagNameCheck(ue))))return!1}else if(!We[q]){if(!Xt(se,jo(ue,$,""))){if(!((q==="src"||q==="xlink:href"||q==="href")&&k!=="script"&&Mf(ue,"data:")===0&&lt[k])){if(!(xt&&!Xt(ne,jo(ue,$,"")))){if(ue)return!1}}}}}}}return!0},sn=function(k){return k!=="annotation-xml"&&xs(k,G)},fr=function(k){ir(F.beforeSanitizeAttributes,k,null);let{attributes:q}=k;if(!q||Rt(k))return;let ue={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:be,forceKeepAttr:void 0},et=q.length;for(;et--;){let dt=q[et],{name:je,namespaceURI:wt,value:Ut}=dt,gr=Ve(je),Cr=Ut,Tt=je==="value"?Cr:Pf(Cr);if(ue.attrName=gr,ue.attrValue=Tt,ue.keepAttr=!0,ue.forceKeepAttr=void 0,ir(F.uponSanitizeAttribute,k,ue),Tt=ue.attrValue,oe&&(gr==="id"||gr==="name")&&(ct(je,k),Tt=ze+Tt),S&&Xt(/((--!?|])>)|<\/(style|title|textarea)/i,Tt)){ct(je,k);continue}if(gr==="attributename"&&xs(Tt,"href")){ct(je,k);continue}if(ue.forceKeepAttr)continue;if(!ue.keepAttr){ct(je,k);continue}if(!h&&Xt(/\/>/i,Tt)){ct(je,k);continue}c&&Ya([te,U,re],Hr=>{Tt=jo(Tt,Hr," ")});let gn=Ve(k.nodeName);if(!an(gn,gr,Tt)){ct(je,k);continue}if(I&&typeof u=="object"&&typeof u.getAttributeType=="function"&&!wt)switch(u.getAttributeType(gn,gr)){case"TrustedHTML":{Tt=I.createHTML(Tt);break}case"TrustedScriptURL":{Tt=I.createScriptURL(Tt);break}}if(Tt!==Cr)try{wt?k.setAttributeNS(wt,je,Tt):k.setAttribute(je,Tt),Rt(k)?Lt(k):Id(e.removed)}catch{ct(je,k)}}ir(F.afterSanitizeAttributes,k,null)},sr=function fe(k){let q=null,ue=ar(k);for(ir(F.beforeSanitizeShadowDOM,k,null);q=ue.nextNode();)ir(F.uponSanitizeShadowNode,q,null),En(q),fr(q),q.content instanceof a&&fe(q.content);ir(F.afterSanitizeShadowDOM,k,null)};return e.sanitize=function(fe){let k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},q=null,ue=null,et=null,dt=null;if(Ar=!fe,Ar&&(fe="<!-->"),typeof fe!="string"&&!$r(fe))if(typeof fe.toString=="function"){if(fe=fe.toString(),typeof fe!="string")throw Go("dirty is not a string, aborting")}else throw Go("toString is not a function");if(!e.isSupported)return fe;if(Y||pr(k),e.removed=[],typeof fe=="string"&&(Je=!1),Je){if(fe.nodeName){let Ut=Ve(fe.nodeName);if(!D[Ut]||Oe[Ut])throw Go("root node is forbidden and cannot be sanitized in-place")}}else if(fe instanceof s)q=Qn("<!---->"),ue=q.ownerDocument.importNode(fe,!0),ue.nodeType===Xo.element&&ue.nodeName==="BODY"||ue.nodeName==="HTML"?q=ue:q.appendChild(ue);else{if(!de&&!c&&!b&&fe.indexOf("<")===-1)return I&&ke?I.createHTML(fe):fe;if(q=Qn(fe),!q)return de?null:ke?C:""}q&&he&&Lt(q.firstChild);let je=ar(Je?fe:q);for(;et=je.nextNode();)En(et),fr(et),et.content instanceof a&&sr(et.content);if(Je)return fe;if(de){if(ve)for(dt=P.call(q.ownerDocument);q.firstChild;)dt.appendChild(q.firstChild);else dt=q;return(be.shadowroot||be.shadowrootmode)&&(dt=M.call(n,dt,!0)),dt}let wt=b?q.outerHTML:q.innerHTML;return b&&D["!doctype"]&&q.ownerDocument&&q.ownerDocument.doctype&&q.ownerDocument.doctype.name&&Xt(Bd,q.ownerDocument.doctype.name)&&(wt="<!DOCTYPE "+q.ownerDocument.doctype.name+`>
`+wt),c&&Ya([te,U,re],Ut=>{wt=jo(wt,Ut," ")}),I&&ke?I.createHTML(wt):wt},e.setConfig=function(){let fe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};pr(fe),Y=!0},e.clearConfig=function(){Jt=null,Y=!1},e.isValidAttribute=function(fe,k,q){Jt||pr({});let ue=Ve(fe),et=Ve(k);return an(ue,et,q)},e.addHook=function(fe,k){typeof k=="function"&&Wo(F[fe],k)},e.removeHook=function(fe,k){if(k!==void 0){let q=If(F[fe],k);return q===-1?void 0:Rf(F[fe],q,1)[0]}return Id(F[fe])},e.removeHooks=function(fe){F[fe]=[]},e.removeAllHooks=function(){F=Dd()},e}var Fd,Cd,Af,Nf,Cf,Vt,wr,ks,Ts,Ss,Ya,If,Id,Wo,Rf,Qa,bs,xs,jo,Mf,Pf,zr,Xt,Go,Rd,vs,ys,Df,ws,Ff,Md,Pd,_s,Od,Za,zf,Bf,$f,Hf,Uf,zd,Wf,jf,Bd,Gf,Ld,Xo,qf,Xf,Dd,Vo,Hd=cr(()=>{({entries:Fd,setPrototypeOf:Cd,isFrozen:Af,getPrototypeOf:Nf,getOwnPropertyDescriptor:Cf}=Object),{freeze:Vt,seal:wr,create:ks}=Object,{apply:Ts,construct:Ss}=typeof Reflect<"u"&&Reflect;Vt||(Vt=function(e){return e});wr||(wr=function(e){return e});Ts||(Ts=function(e,r){for(var n=arguments.length,o=new Array(n>2?n-2:0),a=2;a<n;a++)o[a-2]=arguments[a];return e.apply(r,o)});Ss||(Ss=function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return new e(...n)});Ya=Kt(Array.prototype.forEach),If=Kt(Array.prototype.lastIndexOf),Id=Kt(Array.prototype.pop),Wo=Kt(Array.prototype.push),Rf=Kt(Array.prototype.splice),Qa=Kt(String.prototype.toLowerCase),bs=Kt(String.prototype.toString),xs=Kt(String.prototype.match),jo=Kt(String.prototype.replace),Mf=Kt(String.prototype.indexOf),Pf=Kt(String.prototype.trim),zr=Kt(Object.prototype.hasOwnProperty),Xt=Kt(RegExp.prototype.test),Go=Of(TypeError);Rd=Vt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),vs=Vt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ys=Vt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Df=Vt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ws=Vt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Ff=Vt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Md=Vt(["#text"]),Pd=Vt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),_s=Vt(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Od=Vt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Za=Vt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),zf=wr(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Bf=wr(/<%[\w\W]*|[\w\W]*%>/gm),$f=wr(/\$\{[\w\W]*/gm),Hf=wr(/^data-[\-\w.\u00B7-\uFFFF]+$/),Uf=wr(/^aria-[\-\w]+$/),zd=wr(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Wf=wr(/^(?:\w+script|data):/i),jf=wr(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Bd=wr(/^html$/i),Gf=wr(/^[a-z][.\w]*(-[.\w]+)+$/i),Ld=Object.freeze({__proto__:null,ARIA_ATTR:Uf,ATTR_WHITESPACE:jf,CUSTOM_ELEMENT:Gf,DATA_ATTR:Hf,DOCTYPE_NAME:Bd,ERB_EXPR:Bf,IS_ALLOWED_URI:zd,IS_SCRIPT_OR_DATA:Wf,MUSTACHE_EXPR:zf,TMPLIT_EXPR:$f}),Xo={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},qf=function(){return typeof window>"u"?null:window},Xf=function(e,r){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null,o="data-tt-policy-suffix";r&&r.hasAttribute(o)&&(n=r.getAttribute(o));let a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML(i){return i},createScriptURL(i){return i}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},Dd=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};Vo=$d()});function jd(){if(Hn)return Hn;if(typeof Vo?.sanitize=="function"&&Vo.isSupported)Hn=Vo;else{let t=typeof window<"u"?window:globalThis.window;if(!t)throw new Error("\u65E0\u6CD5\u6E05\u7406 HTML\uFF1A\u5F53\u524D\u73AF\u5883\u7F3A\u5C11\u6D4F\u89C8\u5668 window\u3002");Hn=Vo(t)}if(!Hn||typeof Hn.sanitize!="function")throw new Error("\u65E0\u6CD5\u6E05\u7406 HTML\uFF1A\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 DOMPurify\u3002");return Hn}function Ja(t){if(!t)return"";try{return jd().sanitize(String(t),Wd)}catch{return""}}function Es(t){if(!t)return"";try{return jd().sanitize(String(t),Kf)}catch{return""}}function Un(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function it(t){return String(t??"").replace(/\u00a0/g," ").replace(/[\t\f\v\u2000-\u200b\u2028\u2029]+/g," ").replace(/[ ]*\n[ ]*/g," ").replace(/ {2,}/g," ").trim()}function Ko(t="div"){return document.createElement(t)}function Jr(t){try{return new DOMParser().parseFromString(String(t??""),"text/html")}catch{return null}}function bo(t){try{let e=new DOMParser().parseFromString(String(t??""),"application/xml");return!e||!e.documentElement||e.documentElement.localName?.toLowerCase()==="parsererror"||Yt(e,"parsererror")?null:e}catch{return null}}function hr(t){return String(t?.localName||t?.nodeName||"").toLowerCase()}function It(t,e){let r=[];if(!t)return r;let n=String(e).toLowerCase(),o=a=>{for(let i=a.firstChild;i;i=i.nextSibling)i.nodeType===1&&(hr(i)===n&&r.push(i),o(i))};return o(t),r}function Yt(t,e){if(!t)return null;let r=String(e).toLowerCase(),n=null,o=a=>{for(let i=a.firstChild;i&&!n;i=i.nextSibling)if(i.nodeType===1){if(hr(i)===r){n=i;return}o(i)}};return o(t),n}function rt(t,e){if(!t||!e)return null;let r=t.getAttribute?.(e);if(r!=null)return r;let n=String(e).toLowerCase(),o=t.attributes;if(!o)return null;for(let a=0;a<o.length;a+=1){let i=o[a];if(!i)continue;if(String(i.name||"").toLowerCase()===n||!n.includes(":")&&String(i.localName||"").toLowerCase()===n)return i.value}return null}var Ud,Vf,Wd,Kf,Hn,Wn=cr(()=>{Hd();Ud=Object.freeze(["b","strong","i","em","u","s","sub","sup","code","span","a","br","ruby","rt","rp","small","mark"]),Vf=Object.freeze(["table","caption","thead","tbody","tfoot","tr","th","td","colgroup","col"]),Wd=Object.freeze({ALLOWED_TAGS:[...Ud],ALLOWED_ATTR:["href"],ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!1,KEEP_CONTENT:!0,FORBID_TAGS:["script","style","iframe","frame","frameset","object","embed","applet","form","input","button","select","textarea","meta","link","base","svg","math","template","noscript"],FORBID_ATTR:["style","src","srcset","formaction","xlink:href","onerror","onload","onclick"]}),Kf=Object.freeze({...Wd,ALLOWED_TAGS:[...Ud,...Vf]}),Hn=null});function Gn(t){return t.nextId()}function Jf(t){if(!t||t.nodeType!==1)return!1;if(t.hasAttribute?.("hidden")||rt(t,"aria-hidden")==="true")return!0;let e=rt(t,"style")||"";return/display\s*:\s*none|visibility\s*:\s*hidden/i.test(e)}function eg(t,e){typeof t?.warn=="function"&&t.warn(e)}function Ns(t){for(let e of Array.from(t?.children||[])){let r=hr(e);if(Gd.has(r)&&r!=="span"&&r!=="a"||Ns(e))return!0}return!1}function qd(t){let e=Array.from(t.querySelectorAll(Qf));for(let r=e.length-1;r>=0;r-=1){let n=e[r];if(!n.parentNode)continue;let o=t.ownerDocument.createDocumentFragment();for(;n.firstChild;)o.appendChild(n.firstChild);o.appendChild(t.ownerDocument.createElement("br")),n.parentNode.replaceChild(o,n)}return t}function Xd(t){for(let e of It(t,"img"))e.remove();for(let e of It(t,"image"))e.remove()}function jn(t){let e=[],r=n=>{for(let o of Array.from(n?.children||[])){let a=hr(o);a==="img"||a==="image"?e.push(o):a==="svg"?e.push(...It(o,"image")):a!=="script"&&a!=="style"&&r(o)}};return r(t),e}function Cs(t,e){if(!t||typeof e?.resolveLink!="function")return;let r=Array.from(t.getElementsByTagName?.("a")||[]);for(let n of r){let o=n.getAttribute("href");if(n.removeAttribute("href"),n.removeAttribute("data-chapter"),n.removeAttribute("data-anchor"),!o)continue;let a=null;try{a=e.resolveLink(o)}catch{a=null}if(a){if(a.external){a.href&&n.setAttribute("href",a.href);continue}Number.isInteger(a.chapter)&&a.chapter>=0&&(n.setAttribute("data-chapter",String(a.chapter)),a.anchor&&n.setAttribute("data-anchor",String(a.anchor).slice(0,300)))}}}function Vd(t,e){let r=Ja(t.innerHTML);if(!r)return null;let n=Ko("div");n.innerHTML=r,Cs(n,e);let o=n.innerHTML.replace(/^(?:\s*<br\s*\/?>\s*)+/i,"").replace(/(?:\s*<br\s*\/?>\s*)+$/i,"");if(!o)return null;let a=it(n.textContent);return a?{html:o,text:a}:null}function ri(t,e,r,n={}){let o=Ja(r);if(!o)return null;let a=Ko("div");a.innerHTML=o,Cs(a,t);let i=a.innerHTML,s=it(a.textContent);return s?{id:Gn(t),kind:e,html:i,text:s,...n}:null}function Is(t,e){let r=String(e??"").replace(/\r\n?/g,`
`).replace(/\u00a0/g," ").replace(/^\n+|\n+$/g,"");return r.trim()?{id:Gn(t),kind:"code",html:Un(r),text:r}:null}function Rs(t,e,r={}){let n=Es(e);if(!n)return null;let o=Ko("div");if(o.innerHTML=n,!o.querySelector("table"))return null;Cs(o,t);let i=o.innerHTML,s=it(o.textContent);return s?{id:Gn(t),kind:"table",html:i,text:s,...r}:null}function Ms(t,{src:e,alt:r="",caption:n=""}={}){if(!e)return null;let o={id:Gn(t),kind:"image",src:e},a=it(r),i=it(n);return a&&(o.alt=a),i&&(o.caption=i),o}function Ps(t){return{id:Gn(t),kind:"rule"}}function qn(t,e){let r=[];return t&&ei(t,e,r),r}function ei(t,e,r){let n=[],o=()=>{if(n.length===0)return;let a=Ko("div");for(let s of n)a.appendChild(s.cloneNode(!0));let i=it(a.textContent)!==""||jn(a).length>0;n=[],i&&yn("paragraph",a,e,r)};for(let a of Array.from(t.childNodes||[])){if(a.nodeType===3){String(a.textContent||"").trim()&&n.push(a);continue}if(a.nodeType!==1||Jf(a))continue;let i=hr(a);Yf.has(i)||(Gd.has(i)?(o(),tg(a,i,e,r)):n.push(a))}o()}function tg(t,e,r,n){if(As.has(e)){yn("heading",t,r,n,{level:Number(e.slice(1)),stripImages:!0,flatten:!1});return}switch(e){case"p":yn("paragraph",t,r,n);return;case"li":case"dt":yn("list-item",t,r,n,{flatten:!0});return;case"dd":yn("paragraph",t,r,n,{flatten:!0});return;case"blockquote":yn("quote",t,r,n,{flatten:!0});return;case"pre":ng(t,r,n);return;case"table":og(t,r,n);return;case"hr":n.push(Ps(r));return;case"figure":{rg(t,r,n);return}case"img":case"image":ti(t,r,n,"");return;case"picture":case"svg":{for(let o of jn(t))ti(o,r,n,"");return}case"ul":case"ol":{for(let o of Array.from(t.children||[]))hr(o)==="li"?yn("list-item",o,r,n,{flatten:!0}):ei(o,r,n);return}case"dl":{ei(t,r,n);return}case"figcaption":return;default:Zf.has(e)||Ns(t)?ei(t,r,n):yn("paragraph",t,r,n)}}function yn(t,e,r,n,o={}){let a=e.cloneNode(!0),i=jn(a);if(i.length>0)for(let l of i)l.remove();o.stripImages&&Xd(a),o.flatten!==!1&&qd(a);let s=Vd(a,r);if(s){let l={id:Gn(r),kind:t,html:s.html,text:s.text};o.level&&(l.level=o.level),n.push(l)}if(!o.stripImages&&i.length>0){let l=jn(e);for(let d of l)ti(d,r,n,"")}}function ti(t,e,r,n){let o=rt(t,"src")||rt(t,"xlink:href")||rt(t,"href");if(!o)return;let a=null;try{a=typeof e?.resolveImage=="function"?e.resolveImage(o):null}catch{a=null}if(!a||!a.src)return;let i=rt(t,"alt")||rt(t,"title")||a.alt||"",s=Ms(e,{src:a.src,alt:i,caption:n||a.caption||""});s&&r.push(s)}function rg(t,e,r){let n=It(t,"figcaption")[0]||null,o=n?it(n.textContent):"",a=jn(t);a.length>0&&a.forEach((l,d)=>{ti(l,e,r,d===0?o:"")});let i=t.cloneNode(!0);Xd(i);for(let l of It(i,"figcaption"))l.remove();Ns(i)&&qd(i);let s=Vd(i,e);s&&s.text!==o&&r.push({id:Gn(e),kind:"paragraph",html:s.html,text:s.text})}function ng(t,e,r){let n=It(t,"code")[0]||t,o=String(n.textContent||"").replace(/\r\n?/g,`
`);if(!o.trim())return;let a=Ja(n.innerHTML),i=Is(e,o);i&&(a&&(i.html=a),r.push(i))}function og(t,e,r){let n=t.cloneNode(!0),o=Es(n.outerHTML);if(!o){eg(e,"\u5DF2\u8DF3\u8FC7\u4E00\u4E2A\u65E0\u6CD5\u89E3\u6790\u7684\u8868\u683C\u3002");return}let a=Rs(e,o);a&&r.push(a)}var As,Yf,Zf,Gd,Qf,Yo=cr(()=>{Wn();As=new Set(["h1","h2","h3","h4","h5","h6"]),Yf=new Set(["script","style","noscript","template","head","title","meta","link","base","iframe","frame","frameset","object","embed","applet","form","input","select","textarea","button","audio","video","source","track","canvas","map","area","math","nav"]),Zf=new Set(["div","section","article","main","header","footer","aside","center","details","summary","fieldset","body","html","hgroup","dl"]),Gd=new Set([...As,"p","div","section","article","main","header","footer","aside","center","details","summary","fieldset","body","html","hgroup","dl","dt","dd","blockquote","pre","table","ul","ol","li","figure","figcaption","hr","address","picture","svg","img","image"]),Qf=[...As,"p","div","section","article","header","footer","aside","center","details","summary","fieldset","blockquote","ul","ol","li","dl","dt","dd","table","thead","tbody","tfoot","tr","td","th","caption","pre","figure","figcaption","address","hgroup"].join(",")});function ni(t){if(typeof t!="string"||!t)return"";let e=t.split(/[\\/]/).pop()||"",r=/\.([A-Za-z0-9]+)$/.exec(e);return r?r[1].toLowerCase():""}function _r(t){let e=String(t||"").replace(/\\/g,"/"),r=e.lastIndexOf("/");return r>=0?e.slice(r+1):e}function xo(t){let e=String(t||"").replace(/\\/g,"/"),r=e.lastIndexOf("/");return r>0?e.slice(0,r):""}function Os(t){let e=[];for(let r of String(t||"").replace(/\\/g,"/").split("/"))if(!(!r||r===".")){if(r===".."){e.pop();continue}e.push(r)}return e.join("/")}function Zo(t){let e=String(t||""),r=e.indexOf("#"),n=r>=0?e.slice(0,r):e,o=r>=0?e.slice(r+1):"";try{o=decodeURIComponent(o)}catch{}let a=n.indexOf("?");return{path:a>=0?n.slice(0,a):n,fragment:o}}function wn(t,e){if(!e)return null;let r=String(e).trim();if(!r||r.startsWith("#")||/^[a-z][a-z0-9+.-]*:/i.test(r)||r.startsWith("//"))return null;let{path:n}=Zo(r);if(!n)return null;let o=n;try{o=decodeURIComponent(n)}catch{}o=o.replace(/\\/g,"/");let a=o.startsWith("/")?o.slice(1):t?`${t}/${o}`:o;return Os(a)||null}function Yd(t){let e=new Map,r=[];for(let[n,o]of Object.entries(t||{})){if(!o||/\/$/.test(n))continue;let a=Os(n);if(!a)continue;let i=a.toLowerCase();e.has(i)||(e.set(i,{name:a,bytes:o}),r.push(a))}return{names:r,get(n){let o=Os(n||"");return o&&e.get(o.toLowerCase())||null},has(n){return!!this.get(n)}}}function Qo(t){return ag[ni(t)]||"application/octet-stream"}async function en(t){if(!t||typeof t.arrayBuffer!="function")throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u6570\u636E\uFF1A\u8BF7\u9009\u62E9\u4E00\u4E2A\u6709\u6548\u7684\u6587\u6863\u6587\u4EF6\u3002");let e;try{e=await t.arrayBuffer()}catch{throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u6570\u636E\uFF0C\u6587\u4EF6\u53EF\u80FD\u5DF2\u88AB\u79FB\u52A8\u6216\u635F\u574F\u3002")}let r=new Uint8Array(e);if(r.length===0)throw new Error("\u6587\u4EF6\u5185\u5BB9\u4E3A\u7A7A\u3002");return r}function tn(t=40){let e=[],r=new Set,n=!1;return{warnings:e,warn:a=>{let i=String(a||"").trim();!i||r.has(i)||(r.add(i),e.length<t?e.push(i):n||(n=!0,e.push("\u8FD8\u6709\u66F4\u591A\u89E3\u6790\u8B66\u544A\u672A\u663E\u793A\u3002")))}}}function kr(t,e){if(t instanceof Error&&/[\u4e00-\u9fff]/.test(t.message))return t;let r=t instanceof Error?t.message:String(t??""),n=r?`${e}\uFF1A${r}`:`${e}\u3002`;return new Error(/[。！？]$/.test(n)?n:`${n}\u3002`)}function Jo(t,e){let r=(Array.isArray(e)?e:[]).filter(a=>a&&Number.isInteger(a.chapterIndex)&&a.chapterIndex>=0&&a.chapterIndex<t.length&&a.title);for(let a=0;a<t.length;a+=1){let i=r.find(l=>l.chapterIndex===a),s=t[a].blocks.find(l=>l.kind==="heading"&&l.text);t[a].title=(i?.title||s?.text||`\u7B2C ${a+1} \u7AE0`).slice(0,120)}if(r.length===0)return t.map((a,i)=>({title:a.title,chapterIndex:i,depth:0}));let n=[],o=new Set;for(let a=0;a<t.length;a+=1){let i=r.filter(s=>s.chapterIndex===a);if(i.length===0){let s={title:t[a].title,chapterIndex:a,depth:0},l=`${a}|${s.title}|0`;o.has(l)||(o.add(l),n.push(s));continue}for(let s of i){let l=Number.isInteger(s.depth)&&s.depth>=0?s.depth:0,d=s.anchor?String(s.anchor).slice(0,300):"",f=`${s.chapterIndex}|${s.title}|${l}|${d}`;o.has(f)||(o.add(f),n.push({title:s.title,chapterIndex:s.chapterIndex,depth:l,...d?{anchor:d}:{}}))}}return n}function Vn(t,e="\u672A\u547D\u540D\u6587\u6863"){return _r(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||e}function _n(){let t=[];return{urls:t,create(e){let r=URL.createObjectURL(e);return t.push(r),r},add(e){return e&&!t.includes(e)&&t.push(e),e},dispose(){for(;t.length>0;){let e=t.pop();try{URL.revokeObjectURL(e)}catch{}}}}}function kn(t){let e=/^data:([^;,]*)((?:;[^;,]*)*),(.*)$/is.exec(String(t||""));if(!e)return null;let r=e[1]||"application/octet-stream",n=e[2]||"",o=e[3]||"",a=/;base64/i.test(n);try{let i;if(a){let l=o.replace(/\s+/g,"");i=atob(l)}else i=decodeURIComponent(o);let s=new Uint8Array(i.length);for(let l=0;l<i.length;l+=1)s[l]=i.charCodeAt(l)&255;return new Blob([s],{type:r})}catch{return null}}function Kd(t){let e=String(t||"").trim().toLowerCase();return!e||/^(utf-?8|utf8)$/.test(e)?"utf-8":/^utf-?16(le)?$/.test(e)?"utf-16le":/^utf-?16be$/.test(e)?"utf-16be":/^(gb2312|gbk|gb18030|cp936|x-gbk)$/.test(e)?"gb18030":/^(big5|big5-hkscs|cp950)$/.test(e)?"big5":/^(shift_jis|sjis|windows-31j|cp932)$/.test(e)?"shift_jis":/^(euc-kr|ks_c_5601-1987|cp949)$/.test(e)?"euc-kr":/^(iso-8859-1|latin1|windows-1252|cp1252)$/.test(e)?"windows-1252":e}function Xn(t,e,r=!1){return new TextDecoder(e,{fatal:r}).decode(t)}function sg(t){let e=Xn(t.subarray(0,Math.min(t.length,512)),"windows-1252"),r=ig.exec(e);return r&&(r[1]||r[2])||""}function rn(t,{defaultEncoding:e="utf-8",sniffDeclaration:r=!0}={}){let n=t instanceof Uint8Array?t:new Uint8Array(t);if(n.length===0)return"";if(n[0]===239&&n[1]===187&&n[2]===191)return Xn(n.subarray(3),"utf-8");if(n[0]===255&&n[1]===254)return Xn(n.subarray(2),"utf-16le");if(n[0]===254&&n[1]===255)return Xn(n.subarray(2),"utf-16be");let o=e||"utf-8";if(r){let a=sg(n);a&&(o=Kd(a))}o=Kd(o);try{return Xn(n,o,!0)}catch{try{return Xn(n,"utf-8",!0)}catch{return Xn(n,"utf-8",!1)}}}function oi(t){if(!t)return!1;let e=t.slice(0,4096);if(!e)return!1;let r=0;for(let n=0;n<e.length;n+=1){let o=e.charCodeAt(n);(o===65533||o===0||o<9||o>13&&o<32)&&(r+=1)}return r/e.length>.08}var ag,ig,Kn=cr(()=>{ag={jpg:"image/jpeg",jpeg:"image/jpeg",jpe:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",avif:"image/avif",bmp:"image/bmp",tif:"image/tiff",tiff:"image/tiff",svg:"image/svg+xml",ico:"image/x-icon",jxl:"image/jxl"};ig=/(?:encoding\s*=\s*["']([A-Za-z0-9._-]+)["'])|(?:charset\s*=\s*["']?([A-Za-z0-9._-]+))/i});function Zd(t){return/^(https?:|mailto:|tel:)/i.test(t)}function Ls(t){return/^[a-z][a-z0-9+.-]*:/i.test(t)}function cg(t,e){e&&!t.includes(e)&&t.push(e)}async function Qd(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=tn(),a=_n();try{let ne=function(c,S){let b=String(c||"").trim();if(!b||Zd(b)||b.startsWith("//")||Ls(b))return null;let{path:Y,fragment:he}=Zo(b),de=Y?wn(S,b):null,ve=de?U.get(de.toLowerCase()):void 0;return ve==null&&de&&(ve=re.get(_r(de).toLowerCase())),ve==null?null:{chapterIndex:ve,anchor:he}},i=await en(t),s;try{s=Nd(i)}catch{throw new Error("EPUB \u538B\u7F29\u5305\u5DF2\u635F\u574F\uFF0C\u65E0\u6CD5\u89E3\u538B\u3002")}let l=Yd(s);if(l.names.length===0)throw new Error("EPUB \u538B\u7F29\u5305\u4E0D\u5305\u542B\u4EFB\u4F55\u6587\u4EF6\u3002");let d=l.get("META-INF/encryption.xml");if(d){let c=rn(d.bytes);if(/<encrypteddata/i.test(c)&&/application\/(xhtml\+xml|epub\+zip)/i.test(c))throw new Error("\u8BE5 EPUB \u6587\u4EF6\u53D7 DRM \u4FDD\u62A4\uFF0C\u65E0\u6CD5\u6253\u5F00\u3002")}let f=l.get("META-INF/container.xml");if(!f){let c=l.names.find(S=>/container\.xml$/i.test(S));c&&(f=l.get(c))}if(!f)throw new Error("\u7F3A\u5C11 META-INF/container.xml\uFF0C\u4E0D\u662F\u6709\u6548\u7684 EPUB \u6587\u4EF6\u3002");let g=bo(rn(f.bytes));if(!g)throw new Error("META-INF/container.xml \u683C\u5F0F\u9519\u8BEF\u3002");let p=It(g,"rootfile")[0],u=p?rt(p,"full-path"):"";if(!u)throw new Error("container.xml \u4E2D\u6CA1\u6709\u6307\u5B9A OPF \u5185\u5BB9\u6E05\u5355\u3002");let T=l.get(u)||l.get(wn("",u));if(!T)throw new Error(`\u627E\u4E0D\u5230 EPUB \u5185\u5BB9\u6E05\u5355\u6587\u4EF6\uFF1A${u}`);let _=xo(T.name),w=bo(rn(T.bytes));if(!w)throw new Error("EPUB \u5185\u5BB9\u6E05\u5355\uFF08OPF\uFF09\u683C\u5F0F\u9519\u8BEF\u3002");let N=Yt(w,"metadata")||w,v=It(N,"title").map(c=>it(c.textContent)).filter(Boolean),I=[];for(let c of It(N,"creator"))cg(I,it(c.textContent));let C=It(N,"language").map(c=>it(c.textContent)).filter(Boolean),L=It(N,"meta").filter(c=>String(rt(c,"name")||"").toLowerCase()==="cover").map(c=>rt(c,"content")||"").find(Boolean)||"",P=Yt(w,"manifest");if(!P)throw new Error("OPF \u5185\u5BB9\u6E05\u5355\u7F3A\u5C11 manifest \u5217\u8868\u3002");let x=new Map;for(let c of It(P,"item")){let S=rt(c,"id");if(!S||x.has(S))continue;let b=rt(c,"href")||"",Y=wn(_,b);x.set(S,{id:S,href:b,path:Y,mediaType:String(rt(c,"media-type")||"").toLowerCase(),properties:String(rt(c,"properties")||"").toLowerCase()})}let M=Yt(w,"spine");if(!M)throw new Error("OPF \u5185\u5BB9\u6E05\u5355\u7F3A\u5C11 spine \u9605\u8BFB\u987A\u5E8F\u3002");let F=It(M,"itemref");if(F.length===0)throw new Error("EPUB \u7684\u9605\u8BFB\u987A\u5E8F\uFF08spine\uFF09\u4E3A\u7A7A\u3002");let te=[],U=new Map,re=new Map;for(let c of F){let S=rt(c,"idref"),b=S?x.get(S):null;if(!b){o(`\u9605\u8BFB\u987A\u5E8F\u4E2D\u7684\u6761\u76EE\u201C${S||"\u672A\u77E5"}\u201D\u4E0D\u5728\u6E05\u5355\u4E2D\uFF0C\u5DF2\u8DF3\u8FC7\u3002`);continue}if(/\bnav\b/.test(b.properties))continue;if(!b.path){o(`\u7AE0\u8282\u6587\u4EF6\u201C${b.href||b.id}\u201D\u4F4D\u4E8E\u5916\u90E8\u7F51\u7EDC\uFF0C\u5DF2\u8DF3\u8FC7\u3002`);continue}let Y=l.get(b.path);if(!Y){o(`\u627E\u4E0D\u5230\u7AE0\u8282\u6587\u4EF6\uFF1A${b.path}`);continue}let he=b.mediaType||"",de=lg.has(he)||/\.(x?html?|htm)$/i.test(b.path),ve=he.startsWith("image/")||/\.(png|jpe?g|gif|webp|avif|bmp|tiff?|svg)$/i.test(b.path);if(!de&&!ve){o(`\u4E0D\u652F\u6301\u7684\u7AE0\u8282\u7C7B\u578B\uFF08${he||"\u672A\u77E5"}\uFF09\uFF1A${b.path}`);continue}let ke=te.length;te.push({item:b,entry:Y,isImage:ve,chapterIndex:ke}),U.set(b.path.toLowerCase(),ke);let Fe=_r(b.path).toLowerCase();re.has(Fe)||re.set(Fe,ke)}if(te.length===0)throw new Error("EPUB \u4E2D\u6CA1\u6709\u627E\u5230\u53EF\u663E\u793A\u7684\u7AE0\u8282\u5185\u5BB9\u3002");let ie=0,z=()=>`b${ie+=1}`,$=[];for(let c of te){let{item:S,entry:b,isImage:Y,chapterIndex:he}=c;if(Y){let Be=S.mediaType.startsWith("image/")?S.mediaType:Qo(S.path),xe=a.create(new Blob([b.bytes],{type:Be}));$.push({id:`ch${he}`,title:"",blocks:[{id:z(),kind:"image",src:xe}]});continue}let de=xo(S.path),ve=Be=>{let xe=String(Be||"").trim();if(!xe)return null;if(/^data:/i.test(xe)){let pt=kn(xe);return pt?{src:a.create(pt)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684\u5185\u5D4C\u56FE\u7247\u3002"),null)}if(/^(https?:)?\/\//i.test(xe))return o("\u5DF2\u8DF3\u8FC7\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\uFF08\u907F\u514D\u8DDF\u8E2A\u4E0E\u9690\u79C1\u6CC4\u9732\uFF09\u3002"),null;if(Ls(xe))return null;let lt=wn(de,xe),nt=lt?l.get(lt):null;if(!nt)return o(`\u627E\u4E0D\u5230\u56FE\u7247\u6587\u4EF6\uFF1A${_r(lt||xe)}`),null;let We=Qo(lt);return{src:a.create(new Blob([nt.bytes],{type:We}))}},ke=Be=>{let xe=String(Be||"").trim();if(!xe)return null;if(Zd(xe))return{external:!0,href:xe};if(xe.startsWith("//")||Ls(xe))return null;let{path:lt,fragment:nt}=Zo(xe);if(!lt)return{chapter:he,anchor:nt};let We=wn(de,xe),pt=We?U.get(We.toLowerCase()):void 0;return pt==null&&We&&(pt=re.get(_r(We).toLowerCase())),pt==null?null:{chapter:pt,anchor:nt}},Fe="";try{Fe=rn(b.bytes)}catch{o(`\u7B2C ${he+1} \u7AE0\u7684\u7F16\u7801\u65E0\u6CD5\u8BC6\u522B\uFF0C\u5DF2\u5C3D\u91CF\u6309 UTF-8 \u8BFB\u53D6\u3002`)}let oe=bo(Fe),ze=oe&&(Yt(oe,"body")||oe.documentElement)||null,qe=ze?null:Jr(Fe),Je=ze||qe?.body||qe?.documentElement||null,Ue=Je?qn(Je,{nextId:z,warn:o,chapterIndex:he,resolveImage:ve,resolveLink:ke}):[];Ue.length===0&&o(`\u7B2C ${he+1} \u7AE0\u6CA1\u6709\u53EF\u663E\u793A\u7684\u5185\u5BB9\u3002`),$.push({id:`ch${he}`,title:"",blocks:Ue})}let G=[...x.values()].find(c=>/\bnav\b/.test(c.properties)&&c.path),se=rt(M,"toc"),D=se&&x.get(se)||[...x.values()].find(c=>c.mediaType==="application/x-dtbncx+xml"&&c.path)||null,pe=c=>{let S=l.get(c.path);if(!S)return o(`\u627E\u4E0D\u5230 EPUB \u5BFC\u822A\u6587\u4EF6\uFF1A${c.path}`),[];let b=rn(S.bytes),Y=bo(b)||Jr(b);if(!Y)return o("\u65E0\u6CD5\u89E3\u6790 EPUB \u5BFC\u822A\u76EE\u5F55\u3002"),[];let he=It(Y,"nav"),de=he.find(qe=>String(rt(qe,"type")||rt(qe,"epub:type")||"").toLowerCase().split(/\s+/).includes("toc"))||he[0]||null;if(!de)return[];let ve=Yt(de,"ol")||Yt(de,"ul");if(!ve)return[];let ke=[],Fe=xo(c.path),oe=U.get(c.path.toLowerCase()),ze=(qe,Je)=>{for(let Ue of Array.from(qe.children||[])){if(hr(Ue)!=="li")continue;let Be=null,xe=null;for(let lt of Array.from(Ue.children||[])){let nt=hr(lt);!Be&&(nt==="a"||nt==="span")&&(Be=lt),!xe&&(nt==="ol"||nt==="ul")&&(xe=lt)}if(Be&&hr(Be)==="a"){let lt=it(Be.textContent).slice(0,200),nt=rt(Be,"href")||"",We=ne(nt,Fe);if(!We&&nt.startsWith("#")&&oe!=null){let{fragment:pt}=Zo(nt);We={chapterIndex:oe,anchor:pt}}lt&&We&&ke.push({title:lt,chapterIndex:We.chapterIndex,depth:Je,...We.anchor?{anchor:We.anchor}:{}})}xe&&ze(xe,Je+1)}};return ze(ve,0),ke},be=c=>{let S=l.get(c.path);if(!S)return o(`\u627E\u4E0D\u5230 EPUB NCX \u76EE\u5F55\u6587\u4EF6\uFF1A${c.path}`),[];let b=rn(S.bytes),Y=bo(b)||Jr(b);if(!Y)return o("\u65E0\u6CD5\u89E3\u6790 EPUB NCX \u76EE\u5F55\u3002"),[];let he=[],de=xo(c.path);for(let ve of It(Y,"navpoint")){let ke=Yt(ve,"navlabel"),Fe=ke?Yt(ke,"text"):Yt(ve,"text"),oe=it(Fe?.textContent||"").slice(0,200),ze=Array.from(ve.children||[]).find(Ue=>hr(Ue)==="content")||Yt(ve,"content"),qe=ne(rt(ze,"src")||"",de);if(!oe||!qe)continue;let Je=0;for(let Ue=ve.parentNode;Ue;Ue=Ue.parentNode)hr(Ue)==="navpoint"&&(Je+=1);he.push({title:oe,chapterIndex:qe.chapterIndex,depth:Je,...qe.anchor?{anchor:qe.anchor}:{}})}return he},_e=[];G&&(_e=pe(G),_e.length===0&&o("EPUB \u5BFC\u822A\u6587\u4EF6\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u5F55\u9879\u3002"));let V=[];_e.length===0&&D&&(V=be(D));let Oe=_e.length>0?_e:V;Oe.length===0&&o("\u672A\u627E\u5230 EPUB \u76EE\u5F55\uFF0C\u5DF2\u6309\u7AE0\u8282\u6807\u9898\u751F\u6210\u3002");let Ie=Jo($,Oe),Se="",De=[...x.values()].find(c=>/\bcover-image\b/.test(c.properties)&&c.path);if(De)Se=De.path;else if(L&&x.get(L)?.path)Se=x.get(L).path;else{let c=Yt(w,"guide");if(c){let S=It(c,"reference").find(b=>/\bcover\b/.test(String(rt(b,"type")||"").toLowerCase()));S&&(Se=wn(_,rt(S,"href")||"")||"")}}let He="";if(Se){let c=l.get(Se);if(c){let S=Qo(Se);if(S.startsWith("image/"))He=a.create(new Blob([c.bytes],{type:S}));else if(/\.(x?html?|htm)$/i.test(Se)){let b=Jr(rn(c.bytes)),Y=jn(b?.body||b?.documentElement||b)[0],he=Y&&(rt(Y,"src")||rt(Y,"xlink:href"))||"",de=he?wn(xo(Se),he):null,ve=de?l.get(de):null;ve&&(He=a.create(new Blob([ve.bytes],{type:Qo(de)})))}}}let h={title:v[0]||Vn(r),chapters:$,toc:Ie,warnings:n,dispose:()=>a.dispose()};return I.length>0&&(h.author=I.join(", ")),C.length>0&&(h.language=C[0]),He&&(h.cover=He),h}catch(i){throw a.dispose(),kr(i,"\u65E0\u6CD5\u89E3\u6790 EPUB \u6587\u4EF6")}}var lg,Jd=cr(()=>{ms();Wn();Yo();Kn();lg=new Set(["application/xhtml+xml","text/html","application/xml","text/xml","text/xhtml"])});function dg(t){return _r(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u6863"}async function ea(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=tn(),a=_n();try{let i=await en(t),s=rn(i),l=Jr(s);if(!l)throw new Error("HTML \u6587\u4EF6\u683C\u5F0F\u9519\u8BEF\uFF0C\u65E0\u6CD5\u89E3\u6790\u3002");let d=l.body||l.documentElement;if(!d)throw new Error("HTML \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let f=0,p=qn(d,{nextId:()=>`b${f+=1}`,warn:o,resolveImage:v=>{let I=String(v||"").trim();if(!I)return null;if(/^data:/i.test(I)){let C=kn(I);return C?{src:a.create(C)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684\u5185\u5D4C\u56FE\u7247\u3002"),null)}return/^(https?:)?\/\//i.test(I)?(o("\u5DF2\u8DF3\u8FC7\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\uFF08\u907F\u514D\u8DDF\u8E2A\u4E0E\u9690\u79C1\u6CC4\u9732\uFF09\u3002"),null):(o("\u5DF2\u8DF3\u8FC7 HTML \u4E2D\u7684\u672C\u5730\u56FE\u7247\uFF08\u65E0\u6CD5\u5B9A\u4F4D\u56FE\u7247\u6587\u4EF6\uFF09\u3002"),null)},resolveLink:v=>{let I=String(v||"").trim();return I?/^(https?:\/\/|mailto:)/i.test(I)?{external:!0,href:I}:I.startsWith("#")?{chapter:0,anchor:I.slice(1)}:null:null}});if(p.length===0)throw new Error("HTML \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let u=Yt(l,"title"),T=p.find(v=>v.kind==="heading"&&v.text),_=it(u?.textContent||"")||T?.text||dg(r),w=rt(l.documentElement,"lang")||"",A=[];for(let v of It(l,"meta"))if(String(rt(v,"name")||"").toLowerCase()==="author"){let I=it(rt(v,"content")||"");I&&!A.includes(I)&&A.push(I)}let N={title:_,chapters:[{id:"ch0",title:_,blocks:p}],toc:[{title:_,chapterIndex:0,depth:0}],warnings:n,dispose:()=>a.dispose()};return w&&(N.language=w),A.length>0&&(N.author=A.join(", ")),N}catch(i){throw a.dispose(),kr(i,"\u65E0\u6CD5\u89E3\u6790 HTML \u6587\u4EF6")}}var eh=cr(()=>{Wn();Yo();Kn()});function th(t){return/[\u3000-\u303f\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uffef\uac00-\ud7af]/.test(t)}function rh(t){let e="";for(let r of t){let n=String(r).trim();if(!n)continue;if(!e){e=n;continue}let o=e[e.length-1],a=n[0];e+=th(o)&&th(a)?n:` ${n}`}return e}function mg(t){let e=String(t||"").trim();if(!e||e.length>gg)return!1;if(ug.test(e)||pg.test(e))return!/[，,。；;]/.test(e);if(fg.test(e)){let r=e.split(/\s+/).filter(Boolean).length;return!(r>14||/\.$/u.test(e)&&r>3)}return!1}function Ds(t){if(!t||t.length===0)throw new Error("\u6587\u672C\u6587\u4EF6\u5185\u5BB9\u4E3A\u7A7A\u3002");if(t[0]===239&&t[1]===187&&t[2]===191)return{text:new TextDecoder("utf-8").decode(t.subarray(3)),encoding:"utf-8"};if(t[0]===255&&t[1]===254)return{text:new TextDecoder("utf-16le").decode(t.subarray(2)),encoding:"utf-16le"};if(t[0]===254&&t[1]===255)return{text:new TextDecoder("utf-16be").decode(t.subarray(2)),encoding:"utf-16be"};let e=Math.min(t.length,4096),r=0,n=0;for(let a=0;a<e;a+=2)t[a]===0&&(r+=1),a+1<e&&t[a+1]===0&&(n+=1);let o=Math.ceil(e/2);if(o>4&&n/o>.35&&r/o<.05)return{text:new TextDecoder("utf-16le").decode(t),encoding:"utf-16le"};if(o>4&&r/o>.35&&n/o<.05)return{text:new TextDecoder("utf-16be").decode(t),encoding:"utf-16be"};try{return{text:new TextDecoder("utf-8",{fatal:!0}).decode(t),encoding:"utf-8"}}catch{}try{return{text:new TextDecoder("gb18030",{fatal:!0}).decode(t),encoding:"gb18030"}}catch{}return{text:new TextDecoder("utf-8").decode(t),encoding:"utf-8"}}function bg(t){let e=[],r=[],n=()=>{r.length>0&&(e.push(r),r=[])};for(let o of t)String(o).trim()?r.push(o):n();return n(),e}function xg(t){let e=t.map(n=>n.trim()).filter(Boolean);return e.length<2?!1:e.filter(n=>/[。！？!?…"”’」』）)]$/.test(n)).length/e.length>=.5}function vg(t){let e=t.map(o=>String(o)),r=bg(e);if(r.length>1)return r.map(o=>rh(o)).filter(Boolean);let n=e.map(o=>o.trim()).filter(Boolean);return n.length<=1||xg(n)?n:r.map(o=>rh(o)).filter(Boolean)}function yg(t,{fallbackTitle:e="\u6B63\u6587"}={}){let n=String(t||"").replace(/\r\n?/g,`
`).replace(/\u0000/g,"").split(`
`),o=[],a={title:"",lines:[],heading:""},i=()=>{(a.heading||a.lines.some(s=>s.trim()))&&o.push(a),a={title:"",lines:[],heading:""}};for(let s of n){if(mg(s)){i();let l=s.trim();a={title:l,lines:[],heading:l};continue}a.lines.push(s)}return i(),o.length===0?[{title:e,lines:n,heading:""}]:o}function Fs(t,{nextId:e,title:r="\u6B63\u6587"}={}){let n=yg(t,{fallbackTitle:r}),o=i=>i.lines.some(s=>String(s).trim()),a=[];for(let i=0;i<n.length;i+=1){if(o(n[i])){a.push(n[i]);continue}let s=i;for(;s+1<n.length&&!o(n[s+1]);)s+=1;if(s-i+1>=3){i=s;continue}a.push(...n.slice(i,s+1)),i=s}return n=a.length>0?a:n,n.map((i,s)=>{let l=[];i.heading&&l.push({id:e(),kind:"heading",level:1,html:Un(i.heading),text:it(i.heading)});for(let d of vg(i.lines))l.push({id:e(),kind:"paragraph",html:Un(d),text:d});return{id:`ch${s}`,title:i.title||r||`\u7B2C ${s+1} \u7AE0`,blocks:l}})}function wg(t){return _r(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u672C"}async function zs(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=tn();try{let a=await en(t),{text:i,encoding:s}=Ds(a);if(oi(i))throw new Error("\u6587\u672C\u6587\u4EF6\u5305\u542B\u5927\u91CF\u65E0\u6CD5\u8BC6\u522B\u7684\u5B57\u7B26\uFF0C\u53EF\u80FD\u4E0D\u662F\u7EAF\u6587\u672C\u6587\u4EF6\u3002");s==="gb18030"&&o("\u5DF2\u6309 GB18030 \u7F16\u7801\u8BFB\u53D6\u6587\u672C\uFF08\u975E UTF-8\uFF09\u3002");let l=wg(r),d=0,g=Fs(i,{nextId:()=>`b${d+=1}`,title:l});if(g.length===0||g.every(u=>u.blocks.length===0))throw new Error("\u6587\u672C\u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");g[0].title||(g[0].title=l);let p=g.map((u,T)=>({title:u.title,chapterIndex:T,depth:0}));return{title:l,chapters:g,toc:p,warnings:n,encoding:s,dispose:()=>{}}}catch(a){throw kr(a,"\u65E0\u6CD5\u89E3\u6790\u6587\u672C\u6587\u4EF6")}}var hg,ug,pg,fg,gg,ai=cr(()=>{Wn();Kn();hg="[0-9\uFF10-\uFF19\u96F6\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u767E\u5343\u4E07\u4E24]",ug=new RegExp(`^\\s*(\u7B2C\\s*${hg}+\\s*[\u7AE0\u7BC0\u8282\u56DE\u5377\u7BC7])(?:[\\s:\uFF1A\xB7\u3001.\uFF0E\u2014\u2013-].*)?$`),pg=/^\s*(序章|楔子|引子|前言|序言|后记|後記|尾声|尾聲|终章|終章|番外(?:篇)?)(?:[\s:：·、.．—–-].*)?$/,fg=/^\s*((?:chapter|part|book|section)\s+(?:[0-9]+|[ivxlcdm]{1,8}|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty))(?:[.:：\s—–-].*)?$/i,gg=72});function Tg(t){let e=String(t||"").trim();return e&&(/^(https?:\/\/|mailto:)/i.test(e)||e.startsWith("#"))?e:""}function Bs(t){let e=Un(String(t??"").trim()),r=[],n=o=>{let a=`\0${r.length}\0`;return r.push(o),a};return e=e.replace(/`([^`]+)`/g,(o,a)=>n(`<code>${a}</code>`)),e=e.replace(_g,(o,a,i)=>{let s=Tg(i);return s?n(`<a href="${s}">${a}</a>`):a}),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/__([^_]+)__/g,"<strong>$1</strong>").replace(/~~([^~]+)~~/g,"<s>$1</s>").replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g,"$1<em>$2</em>").replace(/(^|[^_])_([^_\n]+)_(?!_)/g,"$1<em>$2</em>"),e=e.replace(/\u0000(\d+)\u0000/g,(o,a)=>r[Number(a)]??""),e}function Sg(t){return _r(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u6863"}function ta(t){return String(t).trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(e=>e.trim())}function Eg(t){if(!/\|/.test(t))return!1;let e=ta(t);return e.length>0&&e.every(r=>/^:?-{3,}:?$/.test(r))}function oh(t,e){return!!e&&t.includes("|")&&Eg(e)&&ta(t).length===ta(e).length}function nh(t,e){return!!(/^\s{0,3}(#{1,6}\s|>|(?:```|~~~))/.test(t)||/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(t)||/^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/.test(t)||oh(t,e))}function Ag(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=tn(),a=_n(),i=0,s={nextId:()=>`b${i+=1}`,warn:o,resolveLink:w=>{let A=String(w||"").trim();return A?/^(https?:\/\/|mailto:)/i.test(A)?{external:!0,href:A}:A.startsWith("#")?{chapter:0,anchor:A.slice(1)}:null:null}},l=[],d=[];function f(w){let A=String(w??""),N=[];return A=A.replace(kg,(v,I,C)=>{let E=it(I);if(/^data:image\//i.test(C)){let L=kn(C);if(L){let P=Ms(s,{src:a.create(L),alt:E});P&&N.push(P)}else o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684 Markdown \u5185\u5D4C\u56FE\u7247\u3002")}else/^https?:/i.test(C)?o("\u5DF2\u8DF3\u8FC7 Markdown \u4E2D\u7684\u5916\u90E8\u56FE\u7247\uFF08\u907F\u514D\u7F51\u7EDC\u8DDF\u8E2A\uFF09\u3002"):o("\u5DF2\u8DF3\u8FC7 Markdown \u4E2D\u7684\u672C\u5730\u56FE\u7247\uFF08\u65E0\u6CD5\u5B9A\u4F4D\u56FE\u7247\u6587\u4EF6\uFF09\u3002");return E?` ${E} `:" "}),{html:Bs(A),images:N}}function g(w,A,N={}){let{html:v,images:I}=f(A),C=ri(s,w,v,N);C&&l.push(C);for(let E of I)l.push(E);return!!C}let p=String(t??"").replace(/\r\n?/g,`
`).replace(/\u0000/g,"").split(`
`),u=0;for(;u<p.length;){let w=p[u];if(!w.trim()){u+=1;continue}let A=/^\s*(`{3,}|~{3,})\s*([A-Za-z0-9_+#.-]*)\s*$/.exec(w);if(A){let E=A[1],L=[];u+=1;let P=new RegExp(`^\\s*${E[0]==="`"?"`":"~"}{${E.length},}\\s*$`);for(;u<p.length;){if(P.test(p[u])){u+=1;break}L.push(p[u]),u+=1}let x=Is(s,L.join(`
`));x&&l.push(x);continue}let N=/^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(w);if(N){g("heading",N[2],{level:N[1].length}),u+=1;continue}if(/^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/.test(w)){l.push(Ps(s)),u+=1;continue}if(oh(w,p[u+1])){let E=ta(w);u+=2;let L=[];for(;u<p.length&&p[u].includes("|")&&p[u].trim();)L.push(ta(p[u])),u+=1;let P=`<thead><tr>${E.map(F=>`<th>${Bs(F)}</th>`).join("")}</tr></thead>`,x=L.length>0?`<tbody>${L.map(F=>`<tr>${E.map((te,U)=>`<td>${Bs(F[U]||"")}</td>`).join("")}</tr>`).join("")}</tbody>`:"",M=Rs(s,`<table>${P}${x}</table>`);M&&l.push(M);continue}if(/^\s{0,3}>/.test(w)){let E=[];for(;u<p.length&&/^\s{0,3}>/.test(p[u]);)E.push(p[u].replace(/^\s{0,3}>\s?/,"")),u+=1;let L=[],P=[];for(let M of E){let F=f(M);F.html&&L.push(F.html),P.push(...F.images)}let x=ri(s,"quote",L.join("<br>"));x&&l.push(x);for(let M of P)l.push(M);continue}if(/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(w)){for(;u<p.length;){let E=/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+(.*)$/.exec(p[u]);if(!E)break;for(g("list-item",E[1]),u+=1;u<p.length&&/^\s{2,}\S/.test(p[u])&&!/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(p[u])&&!nh(p[u],p[u+1]);)u+=1}continue}let v=[];for(;u<p.length&&p[u].trim()&&!nh(p[u],p[u+1]);)v.push(p[u]),u+=1;if(v.length===0){u+=1;continue}let I=[];for(let E of v){let L=/(?: {2,}|\\)$/.test(E),P=f(E.replace(/(?: {2,}|\\)$/,""));P.html&&I.push(L?`${P.html}<br>`:P.html),d.push(...P.images)}let C=ri(s,"paragraph",I.join(" "));for(C&&l.push(C);d.length>0;)l.push(d.shift())}let _=l.find(w=>w.kind==="heading"&&w.text)?.text||Sg(r);if(l.length===0)throw a.dispose(),new Error("Markdown \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");return{title:_,chapters:[{id:"ch0",title:_,blocks:l}],toc:[{title:_,chapterIndex:0,depth:0}],warnings:n,dispose:()=>a.dispose()}}async function ra(t,e={}){try{let r=await en(t),{text:n}=Ds(r);return Ag(n,e)}catch(r){throw kr(r,"\u65E0\u6CD5\u89E3\u6790 Markdown \u6587\u4EF6")}}var _g,kg,ah=cr(()=>{Wn();Yo();Kn();ai();_g=/\[([^\]]+)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g,kg=/!\[([^\]]*)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g});var lh=wi((Nx,sh)=>{"use strict";function nn(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function ih(t,e){for(var r="",n=0,o=-1,a=0,i,s=0;s<=t.length;++s){if(s<t.length)i=t.charCodeAt(s);else{if(i===47)break;i=47}if(i===47){if(!(o===s-1||a===1))if(o!==s-1&&a===2){if(r.length<2||n!==2||r.charCodeAt(r.length-1)!==46||r.charCodeAt(r.length-2)!==46){if(r.length>2){var l=r.lastIndexOf("/");if(l!==r.length-1){l===-1?(r="",n=0):(r=r.slice(0,l),n=r.length-1-r.lastIndexOf("/")),o=s,a=0;continue}}else if(r.length===2||r.length===1){r="",n=0,o=s,a=0;continue}}e&&(r.length>0?r+="/..":r="..",n=2)}else r.length>0?r+="/"+t.slice(o+1,s):r=t.slice(o+1,s),n=s-o-1;o=s,a=0}else i===46&&a!==-1?++a:a=-1}return r}function Ng(t,e){var r=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+n:r+t+n:n}var vo={resolve:function(){for(var e="",r=!1,n,o=arguments.length-1;o>=-1&&!r;o--){var a;o>=0?a=arguments[o]:(n===void 0&&(n=process.cwd()),a=n),nn(a),a.length!==0&&(e=a+"/"+e,r=a.charCodeAt(0)===47)}return e=ih(e,!r),r?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(nn(e),e.length===0)return".";var r=e.charCodeAt(0)===47,n=e.charCodeAt(e.length-1)===47;return e=ih(e,!r),e.length===0&&!r&&(e="."),e.length>0&&n&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return nn(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,r=0;r<arguments.length;++r){var n=arguments[r];nn(n),n.length>0&&(e===void 0?e=n:e+="/"+n)}return e===void 0?".":vo.normalize(e)},relative:function(e,r){if(nn(e),nn(r),e===r||(e=vo.resolve(e),r=vo.resolve(r),e===r))return"";for(var n=1;n<e.length&&e.charCodeAt(n)===47;++n);for(var o=e.length,a=o-n,i=1;i<r.length&&r.charCodeAt(i)===47;++i);for(var s=r.length,l=s-i,d=a<l?a:l,f=-1,g=0;g<=d;++g){if(g===d){if(l>d){if(r.charCodeAt(i+g)===47)return r.slice(i+g+1);if(g===0)return r.slice(i+g)}else a>d&&(e.charCodeAt(n+g)===47?f=g:g===0&&(f=0));break}var p=e.charCodeAt(n+g),u=r.charCodeAt(i+g);if(p!==u)break;p===47&&(f=g)}var T="";for(g=n+f+1;g<=o;++g)(g===o||e.charCodeAt(g)===47)&&(T.length===0?T+="..":T+="/..");return T.length>0?T+r.slice(i+f):(i+=f,r.charCodeAt(i)===47&&++i,r.slice(i))},_makeLong:function(e){return e},dirname:function(e){if(nn(e),e.length===0)return".";for(var r=e.charCodeAt(0),n=r===47,o=-1,a=!0,i=e.length-1;i>=1;--i)if(r=e.charCodeAt(i),r===47){if(!a){o=i;break}}else a=!1;return o===-1?n?"/":".":n&&o===1?"//":e.slice(0,o)},basename:function(e,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');nn(e);var n=0,o=-1,a=!0,i;if(r!==void 0&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var s=r.length-1,l=-1;for(i=e.length-1;i>=0;--i){var d=e.charCodeAt(i);if(d===47){if(!a){n=i+1;break}}else l===-1&&(a=!1,l=i+1),s>=0&&(d===r.charCodeAt(s)?--s===-1&&(o=i):(s=-1,o=l))}return n===o?o=l:o===-1&&(o=e.length),e.slice(n,o)}else{for(i=e.length-1;i>=0;--i)if(e.charCodeAt(i)===47){if(!a){n=i+1;break}}else o===-1&&(a=!1,o=i+1);return o===-1?"":e.slice(n,o)}},extname:function(e){nn(e);for(var r=-1,n=0,o=-1,a=!0,i=0,s=e.length-1;s>=0;--s){var l=e.charCodeAt(s);if(l===47){if(!a){n=s+1;break}continue}o===-1&&(a=!1,o=s+1),l===46?r===-1?r=s:i!==1&&(i=1):r!==-1&&(i=-1)}return r===-1||o===-1||i===0||i===1&&r===o-1&&r===n+1?"":e.slice(r,o)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return Ng("/",e)},parse:function(e){nn(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return r;var n=e.charCodeAt(0),o=n===47,a;o?(r.root="/",a=1):a=0;for(var i=-1,s=0,l=-1,d=!0,f=e.length-1,g=0;f>=a;--f){if(n=e.charCodeAt(f),n===47){if(!d){s=f+1;break}continue}l===-1&&(d=!1,l=f+1),n===46?i===-1?i=f:g!==1&&(g=1):i!==-1&&(g=-1)}return i===-1||l===-1||g===0||g===1&&i===l-1&&i===s+1?l!==-1&&(s===0&&o?r.base=r.name=e.slice(1,l):r.base=r.name=e.slice(s,l)):(s===0&&o?(r.name=e.slice(1,i),r.base=e.slice(1,l)):(r.name=e.slice(s,i),r.base=e.slice(s,l)),r.ext=e.slice(i,l)),s>0?r.dir=e.slice(0,s-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};vo.posix=vo;sh.exports=vo});var vh=wi((Cx,$s)=>{"use strict";var yo=typeof Reflect=="object"?Reflect:null,ch=yo&&typeof yo.apply=="function"?yo.apply:function(e,r,n){return Function.prototype.apply.call(e,r,n)},ii;yo&&typeof yo.ownKeys=="function"?ii=yo.ownKeys:Object.getOwnPropertySymbols?ii=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:ii=function(e){return Object.getOwnPropertyNames(e)};function Cg(t){console&&console.warn&&console.warn(t)}var hh=Number.isNaN||function(e){return e!==e};function st(){st.init.call(this)}$s.exports=st;$s.exports.once=Pg;st.EventEmitter=st;st.prototype._events=void 0;st.prototype._eventsCount=0;st.prototype._maxListeners=void 0;var dh=10;function si(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(st,"defaultMaxListeners",{enumerable:!0,get:function(){return dh},set:function(t){if(typeof t!="number"||t<0||hh(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");dh=t}});st.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};st.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||hh(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function uh(t){return t._maxListeners===void 0?st.defaultMaxListeners:t._maxListeners}st.prototype.getMaxListeners=function(){return uh(this)};st.prototype.emit=function(e){for(var r=[],n=1;n<arguments.length;n++)r.push(arguments[n]);var o=e==="error",a=this._events;if(a!==void 0)o=o&&a.error===void 0;else if(!o)return!1;if(o){var i;if(r.length>0&&(i=r[0]),i instanceof Error)throw i;var s=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw s.context=i,s}var l=a[e];if(l===void 0)return!1;if(typeof l=="function")ch(l,this,r);else for(var d=l.length,f=bh(l,d),n=0;n<d;++n)ch(f[n],this,r);return!0};function ph(t,e,r,n){var o,a,i;if(si(r),a=t._events,a===void 0?(a=t._events=Object.create(null),t._eventsCount=0):(a.newListener!==void 0&&(t.emit("newListener",e,r.listener?r.listener:r),a=t._events),i=a[e]),i===void 0)i=a[e]=r,++t._eventsCount;else if(typeof i=="function"?i=a[e]=n?[r,i]:[i,r]:n?i.unshift(r):i.push(r),o=uh(t),o>0&&i.length>o&&!i.warned){i.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+i.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=t,s.type=e,s.count=i.length,Cg(s)}return t}st.prototype.addListener=function(e,r){return ph(this,e,r,!1)};st.prototype.on=st.prototype.addListener;st.prototype.prependListener=function(e,r){return ph(this,e,r,!0)};function Ig(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function fh(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},o=Ig.bind(n);return o.listener=r,n.wrapFn=o,o}st.prototype.once=function(e,r){return si(r),this.on(e,fh(this,e,r)),this};st.prototype.prependOnceListener=function(e,r){return si(r),this.prependListener(e,fh(this,e,r)),this};st.prototype.removeListener=function(e,r){var n,o,a,i,s;if(si(r),o=this._events,o===void 0)return this;if(n=o[e],n===void 0)return this;if(n===r||n.listener===r)--this._eventsCount===0?this._events=Object.create(null):(delete o[e],o.removeListener&&this.emit("removeListener",e,n.listener||r));else if(typeof n!="function"){for(a=-1,i=n.length-1;i>=0;i--)if(n[i]===r||n[i].listener===r){s=n[i].listener,a=i;break}if(a<0)return this;a===0?n.shift():Rg(n,a),n.length===1&&(o[e]=n[0]),o.removeListener!==void 0&&this.emit("removeListener",e,s||r)}return this};st.prototype.off=st.prototype.removeListener;st.prototype.removeAllListeners=function(e){var r,n,o;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var a=Object.keys(n),i;for(o=0;o<a.length;++o)i=a[o],i!=="removeListener"&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(r=n[e],typeof r=="function")this.removeListener(e,r);else if(r!==void 0)for(o=r.length-1;o>=0;o--)this.removeListener(e,r[o]);return this};function gh(t,e,r){var n=t._events;if(n===void 0)return[];var o=n[e];return o===void 0?[]:typeof o=="function"?r?[o.listener||o]:[o]:r?Mg(o):bh(o,o.length)}st.prototype.listeners=function(e){return gh(this,e,!0)};st.prototype.rawListeners=function(e){return gh(this,e,!1)};st.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):mh.call(t,e)};st.prototype.listenerCount=mh;function mh(t){var e=this._events;if(e!==void 0){var r=e[t];if(typeof r=="function")return 1;if(r!==void 0)return r.length}return 0}st.prototype.eventNames=function(){return this._eventsCount>0?ii(this._events):[]};function bh(t,e){for(var r=new Array(e),n=0;n<e;++n)r[n]=t[n];return r}function Rg(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function Mg(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}function Pg(t,e){return new Promise(function(r,n){function o(i){t.removeListener(e,a),n(i)}function a(){typeof t.removeListener=="function"&&t.removeListener("error",o),r([].slice.call(arguments))}xh(t,e,a,{once:!0}),e!=="error"&&Og(t,o,{once:!0})})}function Og(t,e,r){typeof t.on=="function"&&xh(t,"error",e,r)}function xh(t,e,r,n){if(typeof t.on=="function")n.once?t.once(e,r):t.on(e,r);else if(typeof t.addEventListener=="function")t.addEventListener(e,function o(a){n.once&&t.removeEventListener(e,o),r(a)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}});var yh=wi(li=>{(function(t){t.parser=function(h,c){return new r(h,c)},t.SAXParser=r,t.SAXStream=f,t.createStream=l,t.MAX_BUFFER_LENGTH=64*1024;var e=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];t.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function r(h,c){if(!(this instanceof r))return new r(h,c);var S=this;o(S),S.q=S.c="",S.bufferCheckPosition=t.MAX_BUFFER_LENGTH,S.encoding=null,S.opt=c||{},S.opt.lowercase=S.opt.lowercase||S.opt.lowercasetags,S.looseCase=S.opt.lowercase?"toLowerCase":"toUpperCase",S.opt.maxEntityCount=S.opt.maxEntityCount||512,S.opt.maxEntityDepth=S.opt.maxEntityDepth||4,S.entityCount=S.entityDepth=0,S.tags=[],S.closed=S.closedRoot=S.sawRoot=!1,S.tag=S.error=null,S.strict=!!h,S.noscript=!!(h||S.opt.noscript),S.state=x.BEGIN,S.strictEntities=S.opt.strictEntities,S.ENTITIES=S.strictEntities?Object.create(t.XML_ENTITIES):Object.create(t.ENTITIES),S.attribList=[],S.opt.xmlns&&(S.ns=Object.create(_)),S.opt.unquotedAttributeValues===void 0&&(S.opt.unquotedAttributeValues=!h),S.trackPosition=S.opt.position!==!1,S.trackPosition&&(S.position=S.line=S.column=0),F(S,"onready")}Object.create||(Object.create=function(h){function c(){}c.prototype=h;var S=new c;return S}),Object.keys||(Object.keys=function(h){var c=[];for(var S in h)h.hasOwnProperty(S)&&c.push(S);return c});function n(h){for(var c=Math.max(t.MAX_BUFFER_LENGTH,10),S=0,b=0,Y=e.length;b<Y;b++){var he=h[e[b]].length;if(he>c)switch(e[b]){case"textNode":ne(h);break;case"cdata":z(h,"oncdata",h.cdata),h.cdata="";break;case"script":z(h,"onscript",h.script),h.script="";break;default:G(h,"Max buffer length exceeded: "+e[b])}S=Math.max(S,he)}var de=t.MAX_BUFFER_LENGTH-S;h.bufferCheckPosition=de+h.position}function o(h){for(var c=0,S=e.length;c<S;c++)h[e[c]]=""}function a(h){ne(h),h.cdata!==""&&(z(h,"oncdata",h.cdata),h.cdata=""),h.script!==""&&(z(h,"onscript",h.script),h.script="")}r.prototype={end:function(){se(this)},write:xt,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){a(this)}};var i;try{i=require("stream").Stream}catch{i=function(){}}i||(i=function(){});var s=t.EVENTS.filter(function(h){return h!=="error"&&h!=="end"});function l(h,c){return new f(h,c)}function d(h,c){if(h.length>=2){if(h[0]===255&&h[1]===254)return"utf-16le";if(h[0]===254&&h[1]===255)return"utf-16be"}return h.length>=3&&h[0]===239&&h[1]===187&&h[2]===191?"utf8":h.length>=4?h[0]===60&&h[1]===0&&h[2]===63&&h[3]===0?"utf-16le":h[0]===0&&h[1]===60&&h[2]===0&&h[3]===63?"utf-16be":"utf8":c?"utf8":null}function f(h,c){if(!(this instanceof f))return new f(h,c);i.apply(this),this._parser=new r(h,c),this.writable=!0,this.readable=!0;var S=this;this._parser.onend=function(){S.emit("end")},this._parser.onerror=function(b){S.emit("error",b),S._parser.error=null},this._decoder=null,this._decoderBuffer=null,s.forEach(function(b){Object.defineProperty(S,"on"+b,{get:function(){return S._parser["on"+b]},set:function(Y){if(!Y)return S.removeAllListeners(b),S._parser["on"+b]=Y,Y;S.on(b,Y)},enumerable:!0,configurable:!1})})}f.prototype=Object.create(i.prototype,{constructor:{value:f}}),f.prototype._decodeBuffer=function(h,c){if(this._decoderBuffer&&(h=Buffer.concat([this._decoderBuffer,h]),this._decoderBuffer=null),!this._decoder){var S=d(h,c);if(!S)return this._decoderBuffer=h,"";this._parser.encoding=S,this._decoder=new TextDecoder(S)}return this._decoder.decode(h,{stream:!c})},f.prototype.write=function(h){if(typeof Buffer=="function"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(h))h=this._decodeBuffer(h,!1);else if(this._decoderBuffer){var c=this._decodeBuffer(Buffer.alloc(0),!0);c&&(this._parser.write(c),this.emit("data",c))}return this._parser.write(h.toString()),this.emit("data",h),!0},f.prototype.end=function(h){if(h&&h.length&&this.write(h),this._decoderBuffer){var c=this._decodeBuffer(Buffer.alloc(0),!0);c&&(this._parser.write(c),this.emit("data",c))}else if(this._decoder){var S=this._decoder.decode();S&&(this._parser.write(S),this.emit("data",S))}return this._parser.end(),!0},f.prototype.on=function(h,c){var S=this;return!S._parser["on"+h]&&s.indexOf(h)!==-1&&(S._parser["on"+h]=function(){var b=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);b.splice(0,0,h),S.emit.apply(S,b)}),i.prototype.on.call(S,h,c)};var g=/^\[CDATA\[$/i,p=/^DOCTYPE$/i,u="http://www.w3.org/XML/1998/namespace",T="http://www.w3.org/2000/xmlns/",_={xml:u,xmlns:T},w=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,A=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,N=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,v=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function I(h){return h===" "||h===`
`||h==="\r"||h==="	"}function C(h){return h==='"'||h==="'"}function E(h){return h===">"||I(h)}function L(h,c){return h.test(c)}function P(h,c){return!L(h,c)}var x=0;t.STATE={BEGIN:x++,BEGIN_WHITESPACE:x++,TEXT:x++,TEXT_ENTITY:x++,OPEN_WAKA:x++,SGML_DECL:x++,SGML_DECL_QUOTED:x++,DOCTYPE:x++,DOCTYPE_QUOTED:x++,DOCTYPE_DTD:x++,DOCTYPE_DTD_QUOTED:x++,COMMENT_STARTING:x++,COMMENT:x++,COMMENT_ENDING:x++,COMMENT_ENDED:x++,CDATA:x++,CDATA_ENDING:x++,CDATA_ENDING_2:x++,PROC_INST:x++,PROC_INST_BODY:x++,PROC_INST_ENDING:x++,OPEN_TAG:x++,OPEN_TAG_SLASH:x++,ATTRIB:x++,ATTRIB_NAME:x++,ATTRIB_NAME_SAW_WHITE:x++,ATTRIB_VALUE:x++,ATTRIB_VALUE_QUOTED:x++,ATTRIB_VALUE_CLOSED:x++,ATTRIB_VALUE_UNQUOTED:x++,ATTRIB_VALUE_ENTITY_Q:x++,ATTRIB_VALUE_ENTITY_U:x++,CLOSE_TAG:x++,CLOSE_TAG_SAW_WHITE:x++,SCRIPT:x++,SCRIPT_ENDING:x++},t.XML_ENTITIES=Object.assign(Object.create(null),{amp:"&",gt:">",lt:"<",quot:'"',apos:"'"}),t.ENTITIES=Object.assign(Object.create(null),{amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830}),Object.keys(t.ENTITIES).forEach(function(h){var c=t.ENTITIES[h],S=typeof c=="number"?String.fromCharCode(c):c;t.ENTITIES[h]=S});for(var M in t.STATE)t.STATE[t.STATE[M]]=M;x=t.STATE;function F(h,c,S){h[c]&&h[c](S)}function te(h){var c=h&&h.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);return c?c[2]:null}function U(h){return h?h.toLowerCase().replace(/[^a-z0-9]/g,""):null}function re(h,c){let S=U(h),b=U(c);return!S||!b?!0:b==="utf16"?S==="utf16le"||S==="utf16be":S===b}function ie(h,c){if(!(!h.strict||!h.encoding||!c||c.name!=="xml")){var S=te(c.body);S&&!re(h.encoding,S)&&D(h,"XML declaration encoding "+S+" does not match detected stream encoding "+h.encoding.toUpperCase())}}function z(h,c,S){h.textNode&&ne(h),F(h,c,S)}function ne(h){h.textNode=$(h.opt,h.textNode),h.textNode&&F(h,"ontext",h.textNode),h.textNode=""}function $(h,c){return h.trim&&(c=c.trim()),h.normalize&&(c=c.replace(/\s+/g," ")),c}function G(h,c){return ne(h),h.trackPosition&&(c+=`
Line: `+h.line+`
Column: `+h.column+`
Char: `+h.c),c=new Error(c),h.error=c,F(h,"onerror",c),h}function se(h){return h.sawRoot&&!h.closedRoot&&D(h,"Unclosed root tag"),h.state!==x.BEGIN&&h.state!==x.BEGIN_WHITESPACE&&h.state!==x.TEXT&&G(h,"Unexpected end"),ne(h),h.c="",h.closed=!0,F(h,"onend"),r.call(h,h.strict,h.opt),h}function D(h,c){if(typeof h!="object"||!(h instanceof r))throw new Error("bad call to strictFail");h.strict&&G(h,c)}function pe(h){h.strict||(h.tagName=h.tagName[h.looseCase]());var c=h.tags[h.tags.length-1]||h,S=h.tag={name:h.tagName,attributes:{}};h.opt.xmlns&&(S.ns=c.ns),h.attribList.length=0,z(h,"onopentagstart",S)}function be(h,c){var S=h.indexOf(":"),b=S<0?["",h]:h.split(":"),Y=b[0],he=b[1];return c&&h==="xmlns"&&(Y="xmlns",he=""),{prefix:Y,local:he}}function _e(h){if(h.strict||(h.attribName=h.attribName[h.looseCase]()),h.attribList.indexOf(h.attribName)!==-1||h.tag.attributes.hasOwnProperty(h.attribName)){h.attribName=h.attribValue="";return}if(h.opt.xmlns){var c=be(h.attribName,!0),S=c.prefix,b=c.local;if(S==="xmlns")if(b==="xml"&&h.attribValue!==u)D(h,"xml: prefix must be bound to "+u+`
Actual: `+h.attribValue);else if(b==="xmlns"&&h.attribValue!==T)D(h,"xmlns: prefix must be bound to "+T+`
Actual: `+h.attribValue);else{var Y=h.tag,he=h.tags[h.tags.length-1]||h;Y.ns===he.ns&&(Y.ns=Object.create(he.ns)),Y.ns[b]=h.attribValue}h.attribList.push([h.attribName,h.attribValue])}else h.tag.attributes[h.attribName]=h.attribValue,z(h,"onattribute",{name:h.attribName,value:h.attribValue});h.attribName=h.attribValue=""}function V(h,c){if(h.opt.xmlns){var S=h.tag,b=be(h.tagName);S.prefix=b.prefix,S.local=b.local,S.uri=S.ns[b.prefix]||"",S.prefix&&!S.uri&&(D(h,"Unbound namespace prefix: "+JSON.stringify(h.tagName)),S.uri=b.prefix);var Y=h.tags[h.tags.length-1]||h;S.ns&&Y.ns!==S.ns&&Object.keys(S.ns).forEach(function(Be){z(h,"onopennamespace",{prefix:Be,uri:S.ns[Be]})});for(var he=0,de=h.attribList.length;he<de;he++){var ve=h.attribList[he],ke=ve[0],Fe=ve[1],oe=be(ke,!0),ze=oe.prefix,qe=oe.local,Je=ze===""?"":S.ns[ze]||"",Ue={name:ke,value:Fe,prefix:ze,local:qe,uri:Je};ze&&ze!=="xmlns"&&!Je&&(D(h,"Unbound namespace prefix: "+JSON.stringify(ze)),Ue.uri=ze),h.tag.attributes[ke]=Ue,z(h,"onattribute",Ue)}h.attribList.length=0}h.tag.isSelfClosing=!!c,h.sawRoot=!0,h.tags.push(h.tag),z(h,"onopentag",h.tag),c||(!h.noscript&&h.tagName.toLowerCase()==="script"?h.state=x.SCRIPT:h.state=x.TEXT,h.tag=null,h.tagName=""),h.attribName=h.attribValue="",h.attribList.length=0}function Oe(h){if(!h.tagName){D(h,"Weird empty close tag."),h.textNode+="</>",h.state=x.TEXT;return}if(h.script){if(h.tagName!=="script"){h.script+="</"+h.tagName+">",h.tagName="",h.state=x.SCRIPT;return}z(h,"onscript",h.script),h.script=""}var c=h.tags.length,S=h.tagName;h.strict||(S=S[h.looseCase]());for(var b=S;c--;){var Y=h.tags[c];if(Y.name!==b)D(h,"Unexpected close tag");else break}if(c<0){D(h,"Unmatched closing tag: "+h.tagName),h.textNode+="</"+h.tagName+">",h.state=x.TEXT;return}h.tagName=S;for(var he=h.tags.length;he-- >c;){var de=h.tag=h.tags.pop();h.tagName=h.tag.name,z(h,"onclosetag",h.tagName);var ve={};for(var ke in de.ns)ve[ke]=de.ns[ke];var Fe=h.tags[h.tags.length-1]||h;h.opt.xmlns&&de.ns!==Fe.ns&&Object.keys(de.ns).forEach(function(oe){var ze=de.ns[oe];z(h,"onclosenamespace",{prefix:oe,uri:ze})})}c===0&&(h.closedRoot=!0),h.tagName=h.attribValue=h.attribName="",h.attribList.length=0,h.state=x.TEXT}function Ie(h){var c=h.entity,S=c.toLowerCase(),b,Y="";return h.ENTITIES[c]?h.ENTITIES[c]:h.ENTITIES[S]?h.ENTITIES[S]:(c=S,c.charAt(0)==="#"&&(c.charAt(1)==="x"?(c=c.slice(2),b=parseInt(c,16),Y=b.toString(16)):(c=c.slice(1),b=parseInt(c,10),Y=b.toString(10))),c=c.replace(/^0+/,""),isNaN(b)||Y.toLowerCase()!==c||b<0||b>1114111||!Se(b)?(D(h,"Invalid character entity"),"&"+h.entity+";"):String.fromCodePoint(b))}function Se(h){return h===9||h===10||h===13||h>=32&&h<=55295||h>=57344&&h<=65533||h>=65536&&h<=1114111}function De(h,c){c==="<"?(h.state=x.OPEN_WAKA,h.startTagPosition=h.position):I(c)||(D(h,"Non-whitespace before first tag."),h.textNode=c,h.state=x.TEXT)}function He(h,c){var S="";return c<h.length&&(S=h.charAt(c)),S}function xt(h){var c=this;if(this.error)throw this.error;if(c.closed)return G(c,"Cannot write after close. Assign an onready handler.");if(h===null)return se(c);typeof h=="object"&&(h=h.toString());for(var S=0,b="";b=He(h,S++),c.c=b,!!b;)switch(c.trackPosition&&(c.position++,b===`
`?(c.line++,c.column=0):c.column++),c.state){case x.BEGIN:if(c.state=x.BEGIN_WHITESPACE,b==="\uFEFF")continue;De(c,b);continue;case x.BEGIN_WHITESPACE:De(c,b);continue;case x.TEXT:if(c.sawRoot&&!c.closedRoot){for(var he=S-1;b&&b!=="<"&&b!=="&";)b=He(h,S++),b&&c.trackPosition&&(c.position++,b===`
`?(c.line++,c.column=0):c.column++);c.textNode+=h.substring(he,S-1)}b==="<"&&!(c.sawRoot&&c.closedRoot&&!c.strict)?(c.state=x.OPEN_WAKA,c.startTagPosition=c.position):(!I(b)&&(!c.sawRoot||c.closedRoot)&&D(c,"Text data outside of root node."),b==="&"?c.state=x.TEXT_ENTITY:c.textNode+=b);continue;case x.SCRIPT:b==="<"?c.state=x.SCRIPT_ENDING:c.script+=b;continue;case x.SCRIPT_ENDING:b==="/"?c.state=x.CLOSE_TAG:(c.script+="<"+b,c.state=x.SCRIPT);continue;case x.OPEN_WAKA:if(b==="!")c.state=x.SGML_DECL,c.sgmlDecl="";else if(!I(b))if(L(w,b))c.state=x.OPEN_TAG,c.tagName=b;else if(b==="/")c.state=x.CLOSE_TAG,c.tagName="";else if(b==="?")c.state=x.PROC_INST,c.procInstName=c.procInstBody="";else{if(D(c,"Unencoded <"),c.startTagPosition+1<c.position){var Y=c.position-c.startTagPosition;b=new Array(Y).join(" ")+b}c.textNode+="<"+b,c.state=x.TEXT}continue;case x.SGML_DECL:if(c.sgmlDecl+b==="--"){c.state=x.COMMENT,c.comment="",c.sgmlDecl="";continue}c.doctype&&c.doctype!==!0&&c.sgmlDecl?(c.state=x.DOCTYPE_DTD,c.doctype+="<!"+c.sgmlDecl+b,c.sgmlDecl=""):g.test(c.sgmlDecl+b)?(z(c,"onopencdata"),c.state=x.CDATA,c.sgmlDecl="",c.cdata=""):p.test(c.sgmlDecl+b)?(c.state=x.DOCTYPE,(c.doctype||c.sawRoot)&&D(c,"Inappropriately located doctype declaration"),c.doctype="",c.sgmlDecl=""):b===">"?(z(c,"onsgmldeclaration",c.sgmlDecl),c.sgmlDecl="",c.state=x.TEXT):(C(b)&&(c.state=x.SGML_DECL_QUOTED),c.sgmlDecl+=b);continue;case x.SGML_DECL_QUOTED:b===c.q&&(c.state=x.SGML_DECL,c.q=""),c.sgmlDecl+=b;continue;case x.DOCTYPE:b===">"?(c.state=x.TEXT,z(c,"ondoctype",c.doctype),c.doctype=!0):(c.doctype+=b,b==="["?c.state=x.DOCTYPE_DTD:C(b)&&(c.state=x.DOCTYPE_QUOTED,c.q=b));continue;case x.DOCTYPE_QUOTED:c.doctype+=b,b===c.q&&(c.q="",c.state=x.DOCTYPE);continue;case x.DOCTYPE_DTD:b==="]"?(c.doctype+=b,c.state=x.DOCTYPE):b==="<"?(c.state=x.OPEN_WAKA,c.startTagPosition=c.position):C(b)?(c.doctype+=b,c.state=x.DOCTYPE_DTD_QUOTED,c.q=b):c.doctype+=b;continue;case x.DOCTYPE_DTD_QUOTED:c.doctype+=b,b===c.q&&(c.state=x.DOCTYPE_DTD,c.q="");continue;case x.COMMENT:b==="-"?c.state=x.COMMENT_ENDING:c.comment+=b;continue;case x.COMMENT_ENDING:b==="-"?(c.state=x.COMMENT_ENDED,c.comment=$(c.opt,c.comment),c.comment&&z(c,"oncomment",c.comment),c.comment=""):(c.comment+="-"+b,c.state=x.COMMENT);continue;case x.COMMENT_ENDED:b!==">"?(D(c,"Malformed comment"),c.comment+="--"+b,c.state=x.COMMENT):c.doctype&&c.doctype!==!0?c.state=x.DOCTYPE_DTD:c.state=x.TEXT;continue;case x.CDATA:for(var he=S-1;b&&b!=="]";)b=He(h,S++),b&&c.trackPosition&&(c.position++,b===`
`?(c.line++,c.column=0):c.column++);c.cdata+=h.substring(he,S-1),b==="]"&&(c.state=x.CDATA_ENDING);continue;case x.CDATA_ENDING:b==="]"?c.state=x.CDATA_ENDING_2:(c.cdata+="]"+b,c.state=x.CDATA);continue;case x.CDATA_ENDING_2:b===">"?(c.cdata&&z(c,"oncdata",c.cdata),z(c,"onclosecdata"),c.cdata="",c.state=x.TEXT):b==="]"?c.cdata+="]":(c.cdata+="]]"+b,c.state=x.CDATA);continue;case x.PROC_INST:b==="?"?c.state=x.PROC_INST_ENDING:I(b)?c.state=x.PROC_INST_BODY:c.procInstName+=b;continue;case x.PROC_INST_BODY:if(!c.procInstBody&&I(b))continue;b==="?"?c.state=x.PROC_INST_ENDING:c.procInstBody+=b;continue;case x.PROC_INST_ENDING:if(b===">"){let Fe={name:c.procInstName,body:c.procInstBody};ie(c,Fe),z(c,"onprocessinginstruction",Fe),c.procInstName=c.procInstBody="",c.state=x.TEXT}else c.procInstBody+="?"+b,c.state=x.PROC_INST_BODY;continue;case x.OPEN_TAG:L(A,b)?c.tagName+=b:(pe(c),b===">"?V(c):b==="/"?c.state=x.OPEN_TAG_SLASH:(I(b)||D(c,"Invalid character in tag name"),c.state=x.ATTRIB));continue;case x.OPEN_TAG_SLASH:b===">"?(V(c,!0),Oe(c)):(D(c,"Forward-slash in opening tag not followed by >"),c.state=x.ATTRIB);continue;case x.ATTRIB:if(I(b))continue;b===">"?V(c):b==="/"?c.state=x.OPEN_TAG_SLASH:L(w,b)?(c.attribName=b,c.attribValue="",c.state=x.ATTRIB_NAME):D(c,"Invalid attribute name");continue;case x.ATTRIB_NAME:b==="="?c.state=x.ATTRIB_VALUE:b===">"?(D(c,"Attribute without value"),c.attribValue=c.attribName,_e(c),V(c)):I(b)?c.state=x.ATTRIB_NAME_SAW_WHITE:L(A,b)?c.attribName+=b:D(c,"Invalid attribute name");continue;case x.ATTRIB_NAME_SAW_WHITE:if(b==="=")c.state=x.ATTRIB_VALUE;else{if(I(b))continue;D(c,"Attribute without value"),c.tag.attributes[c.attribName]="",c.attribValue="",z(c,"onattribute",{name:c.attribName,value:""}),c.attribName="",b===">"?V(c):L(w,b)?(c.attribName=b,c.state=x.ATTRIB_NAME):(D(c,"Invalid attribute name"),c.state=x.ATTRIB)}continue;case x.ATTRIB_VALUE:if(I(b))continue;C(b)?(c.q=b,c.state=x.ATTRIB_VALUE_QUOTED):(c.opt.unquotedAttributeValues||G(c,"Unquoted attribute value"),c.state=x.ATTRIB_VALUE_UNQUOTED,c.attribValue=b);continue;case x.ATTRIB_VALUE_QUOTED:if(b!==c.q){b==="&"?c.state=x.ATTRIB_VALUE_ENTITY_Q:c.attribValue+=b;continue}_e(c),c.q="",c.state=x.ATTRIB_VALUE_CLOSED;continue;case x.ATTRIB_VALUE_CLOSED:I(b)?c.state=x.ATTRIB:b===">"?V(c):b==="/"?c.state=x.OPEN_TAG_SLASH:L(w,b)?(D(c,"No whitespace between attributes"),c.attribName=b,c.attribValue="",c.state=x.ATTRIB_NAME):D(c,"Invalid attribute name");continue;case x.ATTRIB_VALUE_UNQUOTED:if(!E(b)){b==="&"?c.state=x.ATTRIB_VALUE_ENTITY_U:c.attribValue+=b;continue}_e(c),b===">"?V(c):c.state=x.ATTRIB;continue;case x.CLOSE_TAG:if(c.tagName)b===">"?Oe(c):L(A,b)?c.tagName+=b:c.script?(c.script+="</"+c.tagName+b,c.tagName="",c.state=x.SCRIPT):(I(b)||D(c,"Invalid tagname in closing tag"),c.state=x.CLOSE_TAG_SAW_WHITE);else{if(I(b))continue;P(w,b)?c.script?(c.script+="</"+b,c.state=x.SCRIPT):D(c,"Invalid tagname in closing tag."):c.tagName=b}continue;case x.CLOSE_TAG_SAW_WHITE:if(I(b))continue;b===">"?Oe(c):D(c,"Invalid characters in closing tag");continue;case x.TEXT_ENTITY:case x.ATTRIB_VALUE_ENTITY_Q:case x.ATTRIB_VALUE_ENTITY_U:var de,ve;switch(c.state){case x.TEXT_ENTITY:de=x.TEXT,ve="textNode";break;case x.ATTRIB_VALUE_ENTITY_Q:de=x.ATTRIB_VALUE_QUOTED,ve="attribValue";break;case x.ATTRIB_VALUE_ENTITY_U:de=x.ATTRIB_VALUE_UNQUOTED,ve="attribValue";break}if(b===";"){var ke=Ie(c);c.opt.unparsedEntities&&!Object.values(t.XML_ENTITIES).includes(ke)?((c.entityCount+=1)>c.opt.maxEntityCount&&G(c,"Parsed entity count exceeds max entity count"),(c.entityDepth+=1)>c.opt.maxEntityDepth&&G(c,"Parsed entity depth exceeds max entity depth"),c.entity="",c.state=de,c.write(ke),c.entityDepth-=1):(c[ve]+=ke,c.entity="",c.state=de)}else L(c.entity.length?v:N,b)?c.entity+=b:(D(c,"Invalid character in entity name"),c[ve]+="&"+c.entity+b,c.entity="",c.state=de);continue;default:throw new Error(c,"Unknown state: "+c.state)}return c.position>=c.bufferCheckPosition&&n(c),c}String.fromCodePoint||(function(){var h=String.fromCharCode,c=Math.floor,S=function(){var b=16384,Y=[],he,de,ve=-1,ke=arguments.length;if(!ke)return"";for(var Fe="";++ve<ke;){var oe=Number(arguments[ve]);if(!isFinite(oe)||oe<0||oe>1114111||c(oe)!==oe)throw RangeError("Invalid code point: "+oe);oe<=65535?Y.push(oe):(oe-=65536,he=(oe>>10)+55296,de=oe%1024+56320,Y.push(he,de)),(ve+1===ke||Y.length>b)&&(Fe+=h.apply(null,Y),Y.length=0)}return Fe};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:S,configurable:!0,writable:!0}):String.fromCodePoint=S})()})(typeof li>"u"?li.sax={}:li)});function Fg(t){return t.charCodeAt(0)===65279?t.slice(1):t}function zg(t){return t.toLowerCase()}function Bg(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===0}function ci(t,e,r){for(let n of t)e=n(e,r);return e}function wo(t,e,r){let n=Object.create(null);n.value=r,n.writable=!0,n.enumerable=!0,n.configurable=!0,Object.defineProperty(t,e,n)}function $g(t,e){let r={};return typeof e=="object"&&(r=e),new Hs(r).parseStringPromise(t)}async function Th(t,e={}){return await $g(t,e)}var _o,_h,kh,Lg,Dg,Tr,wh,Hs,Sh=cr(()=>{_o=Mt(lh(),1),_h=Mt(vh(),1),kh=Mt(yh(),1),Lg=Object.defineProperty,Dg=(t,e,r)=>e in t?Lg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Tr=(t,e,r)=>Dg(t,typeof e!="symbol"?e+"":e,r);wh={.1:{explicitCharkey:!1,trim:!0,normalize:!0,normalizeTags:!1,attrkey:"@",charkey:"#",explicitArray:!1,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!1,validator:null,xmlns:!1,explicitChildren:!1,childkey:"@@",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,emptyTag:""},.2:{explicitCharkey:!1,trim:!1,normalize:!1,normalizeTags:!1,attrkey:"$",charkey:"_",explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!0,validator:null,xmlns:!1,explicitChildren:!1,preserveChildrenOrder:!1,childkey:"$$",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,rootName:"root",xmldec:{version:"1.0",encoding:"UTF-8",standalone:!0},doctype:null,renderOpts:{pretty:!0,indent:"  ",newline:`
`},headless:!1,chunkSize:1e4,emptyTag:"",cdata:!1}};Hs=class extends _h.EventEmitter{constructor(e){super(),Tr(this,"options"),Tr(this,"remaining",""),Tr(this,"saxParser"),Tr(this,"resultObject",null),Tr(this,"EXPLICIT_CHARKEY"),Tr(this,"errThrown",!1),Tr(this,"ended",!1),Tr(this,"processAsync",()=>{try{if(this.remaining.length<=this.options.chunkSize){let r=this.remaining;this.remaining="",this.saxParser=this.saxParser.write(r),this.saxParser.close()}else{let r=this.remaining.slice(0,this.options.chunkSize);this.remaining=this.remaining.slice(this.options.chunkSize),this.saxParser=this.saxParser.write(r),setTimeout(this.processAsync,0)}}catch(r){this.errThrown||(this.errThrown=!0,this.emit("error",r))}}),Tr(this,"assignOrPush",(r,n,o)=>{n in r?(Array.isArray(r[n])||wo(r,n,[r[n]]),r[n].push(o)):this.options.explicitArray?wo(r,n,[o]):wo(r,n,o)}),Tr(this,"reset",()=>{this.removeAllListeners(),this.saxParser=kh.default.parser(this.options.strict,{trim:!1,normalize:!1,xmlns:this.options.xmlns}),this.errThrown=!1,this.saxParser.onerror=i=>{this.saxParser.resume(),this.errThrown||(this.errThrown=!0,this.emit("error",i))},this.saxParser.onend=()=>{this.ended||(this.ended=!0,this.emit("end",this.resultObject))},this.ended=!1,this.EXPLICIT_CHARKEY=this.options.explicitCharkey,this.resultObject=null;let r=[],n=this.options.attrkey,o=this.options.charkey;this.saxParser.onopentag=i=>{let s={};s[o]="",this.options.ignoreAttrs||Object.keys(i.attributes).forEach(l=>{!(n in s)&&!this.options.mergeAttrs&&(s[n]={});let d=this.options.attrValueProcessors?ci(this.options.attrValueProcessors,i.attributes[l],l):i.attributes[l],f=this.options.attrNameProcessors?ci(this.options.attrNameProcessors,l):l;this.options.mergeAttrs?this.assignOrPush(s,f,d):wo(s[n],f,d)}),s["#name"]=this.options.tagNameProcessors?ci(this.options.tagNameProcessors,i.name):i.name,this.options.xmlns&&(s[this.options.xmlnskey]={uri:i.uri,local:i.local}),r.push(s)},this.saxParser.onclosetag=()=>{let i=r.pop(),s=i["#name"];(!this.options.explicitChildren||!this.options.preserveChildrenOrder)&&delete i["#name"];let l;i.cdata===!0&&(l=i.cdata,delete i.cdata);let d=r[r.length-1],f="";if(i[o].match(/^\s*$/)&&!l?(f=i[o],delete i[o]):(this.options.trim&&(i[o]=i[o].trim()),this.options.normalize&&(i[o]=i[o].replace(/\s{2,}/g," ").trim()),i[o]=this.options.valueProcessors?ci(this.options.valueProcessors,i[o],s):i[o],Object.keys(i).length===1&&o in i&&!this.EXPLICIT_CHARKEY&&(i=i[o])),Bg(i)&&(typeof this.options.emptyTag=="function"?i=this.options.emptyTag():i=this.options.emptyTag!==""?this.options.emptyTag:f),this.options.validator){let g=`/${r.map(p=>p["#name"]).concat(s).join("/")}`;(()=>{try{i=this.options.validator(g,d&&d[s],i)}catch(p){this.emit("error",p)}})()}if(this.options.explicitChildren&&!this.options.mergeAttrs&&typeof i=="object")if(this.options.preserveChildrenOrder){if(d){d[this.options.childkey]=d[this.options.childkey]||[];let g={};Object.keys(i).forEach(p=>{wo(g,p,i[p])}),d[this.options.childkey].push(g),delete i["#name"],Object.keys(i).length===1&&o in i&&!this.EXPLICIT_CHARKEY&&(i=i[o])}}else{let g={};this.options.attrkey in i&&(g[this.options.attrkey]=i[this.options.attrkey],delete i[this.options.attrkey]),!this.options.charsAsChildren&&this.options.charkey in i&&(g[this.options.charkey]=i[this.options.charkey],delete i[this.options.charkey]),Object.getOwnPropertyNames(i).length>0&&(g[this.options.childkey]=i),i=g}if(r.length>0)this.assignOrPush(d,s,i);else{if(this.options.explicitRoot){let g=i,p={};wo(p,s,g),i=p}this.resultObject=i,this.ended=!0,this.emit("end",this.resultObject)}};let a=i=>{let s=r[r.length-1];if(s&&(s[o]+=i,this.options.explicitChildren&&this.options.preserveChildrenOrder&&this.options.charsAsChildren&&(this.options.includeWhiteChars||i.replace(/\\n/g,"").trim()!==""))){s[this.options.childkey]=s[this.options.childkey]||[];let l={"#name":"__text__"};l[o]=i,this.options.normalize&&(l[o]=l[o].replace(/\s{2,}/g," ").trim()),s[this.options.childkey].push(l)}return s};this.saxParser.ontext=a,this.saxParser.oncdata=i=>{let s=a(i);s&&(s.cdata=!0)}}),Tr(this,"parseString",(r,n)=>{n&&typeof n=="function"&&(this.on("end",o=>{this.reset(),n(null,o)}),this.on("error",o=>{this.reset(),n(o)}));try{return r=r.toString(),r.trim()===""?(this.emit("end",null),!0):(r=Fg(r),this.options.async?(this.remaining=r,setTimeout(this.processAsync,0),this.saxParser):this.saxParser.write(r).close())}catch(o){if(!this.errThrown&&!this.ended)this.emit("error",o),this.errThrown=!0;else if(this.ended)throw o}}),Tr(this,"parseStringPromise",r=>new Promise((n,o)=>{this.parseString(r,(a,i)=>{a?o(a):n(i)})})),this.options={},Object.keys(wh["0.2"]).forEach(r=>{this.options[r]=wh["0.2"][r]}),e&&Object.keys(e).forEach(r=>{this.options[r]=e[r]}),this.options.xmlns&&(this.options.xmlnskey=`${this.options.attrkey}ns`),this.options.normalizeTags&&(this.options.tagNameProcessors||(this.options.tagNameProcessors=[]),this.options.tagNameProcessors.unshift(zg)),this.reset()}}});function Eh(t){return t.includes("&")?t.replace(/&(#x[\dA-Fa-f]+|#\d+|[a-zA-Z]+);/g,(e,r)=>r.startsWith("#x")?String.fromCodePoint(Number.parseInt(r.slice(2),16)):r.startsWith("#")?String.fromCodePoint(Number.parseInt(r.slice(1),10)):Hg[e]||e):t}function Wg(t){let e=t.slice(0,12),r=Array.from(e).map(n=>n.toString(16).padStart(2,"0")).join("");for(let[n,o]of Object.entries(Ug))if(r.startsWith(n))return o;return"unknown"}function ui(t,e,r,n){return URL.createObjectURL(new Blob([t],{type:e}))}function Ph(t){let e="";return e=t.name??"",e}function rm(t){return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}async function Oh(t){return t instanceof Uint8Array?rm(t):await t.arrayBuffer()}function Qt(t){let e=t.byteLength,r=e===4?"getUint32":e===2?"getUint16":"getUint8";return new DataView(t)[r](0)}function Er(t,e){let r={};for(let n in t){let[o,a,i]=t[n];r[n]=i==="string"?na(e.slice(o,o+a)):Qt(e.slice(o,o+a))}return r}function oa(t){let e=t.reduce((o,a)=>o+a.length,0),r=new t[0].constructor(e),n=0;for(let o of t)r.set(o,n),n+=o.length;return r}function di(t,e=0){let r=0,n=0;for(let o of t.subarray(e,e+4))if(r=r<<7|(o&127)>>>0,n++,o&128)break;return{value:r,length:n}}function om(t){let e=0;for(let r of t.subarray(-4))r&128&&(e=0),e=e<<7|r&127;return e}function Lh(t){let e=0;for(;t>0;t=t>>1)(t&1)===1&&e++;return e}function am(t){let e=0;for(;(t&1)===0;)t=t>>1,e++;return e}function im(t){let e=[];for(let r=0;r<t.length;r++){let n=t[r];if(n===0)e.push(0);else if(n<=8)for(let o of t.subarray(r+1,(r+=n)+1))e.push(o);else if(n<=127)e.push(n);else if(n<=191){let o=n<<8|t[r+++1],a=(o&16383)>>>3,i=(o&7)+3;for(let s=0;s<i;s++)e.push(e[e.length-a])}else e.push(32,n^128)}return Uint8Array.from(e)}function sm(t,e){let r=e(t.huffcdic),{magic:n,offset1:o,offset2:a}=Er(Qg,r);if(n!=="HUFF")throw new Error("Invalid HUFF record");let i=Array.from({length:256},(f,g)=>o+g*4).map(f=>Qt(r.slice(f,f+4))).map(f=>[f&128,f&31,f>>>8]),s=[[0,0],...Array.from({length:32},(f,g)=>a+g*8).map(f=>[Qt(r.slice(f,f+4)),Qt(r.slice(f+4,f+8))])],l=[];for(let f=1;f<t.numHuffcdic;f++){let g=e(t.huffcdic+f),p=Er(Jg,g);if(p.magic!=="CDIC")throw new Error("Invalid CDIC record");let u=Math.min(1<<p.codeLength,p.numEntries-l.length),T=g.slice(p.length);for(let _=0;_<u;_++){let w=Qt(T.slice(_*2,_*2+2)),A=Qt(T.slice(w,w+2)),N=A&32767,v=A&32768,I=new Uint8Array(T.slice(w+2,w+2+N));l.push([I,v])}}let d=f=>{let g=new Uint8Array,p=f.byteLength*8;for(let u=0;u<p;){let T=Number(lm(f,u)),[_,w,A]=i[T>>>24];if(!_){for(;T>>>32-w<s[w][0];)w+=1;A=s[w][1]}if(u+=w,u>p)break;let N=A-(T>>>32-w),[v,I]=l[N];I||(v=d(v),l[N]=[v,!0]),g=oa([g,v])}return g};return d}function lm(t,e){let r=e>>3,n=e+32,o=n>>3,a=0n;for(let i=r;i<=o;i++)a=a<<8n|BigInt(t[i]??0);return a>>8n-BigInt(n&7)&0xFFFFFFFFn}function cm(t,e){let{magic:r,count:n}=Er(Yg,t);if(r!=="EXTH")throw new Error("Invalid EXTH header");let o=js(e.toString()),a={},i=12;for(let s=0;s<n;s++){let l=Qt(t.slice(i,i+4)),d=Qt(t.slice(i+4,i+8));if(l in Ch){let[f,g,p]=Ch[l],u=t.slice(i+8,i+d),T=g==="uint"?Qt(u):o.decode(u);p?(a[f]??(a[f]=[]),a[f].push(T)):a[f]=T}i+=d}return a}function dm(t){let e=t&1,r=Lh(t>>>1);return n=>{for(let o=0;o<r;o++){let a=om(n);n=n.subarray(0,-a)}if(e){let o=(n[n.length-1]&3)+1;n=n.subarray(0,-o)}return n}}function hm(t){let{flags:e,dataStart:r,keyLength:n,keyStart:o}=Er(tm,t),a=new Uint8Array(t.slice(r));if(e&2){let i=n===16?1024:1040,s=new Uint8Array(t.slice(o,o+n)),l=Math.min(i,a.length);for(let d=0;d<l;d++)a[d]=a[d]^s[d%s.length]}if(e&1)try{return Ad(a)}catch(i){console.warn(i),console.warn("Failed to decompress font")}return a}function hi(t,e){let r=e(t),n=Er(Nh,r);if(n.magic!=="INDX")throw new Error("Invalid INDX record");let o=js(n.encoding.toString()),a={},i=0;for(let p=0;p<n.numCncx;p++){let u=e(t+n.numRecords+p+1),T=new Uint8Array(u);for(let _=0;_<T.byteLength;){let w=_,{value:A,length:N}=di(T,_);_+=N;let v=u.slice(_,_+A);_+=A,a[i+w]=o.decode(v)}i+=65536}let s=r.slice(n.length),l=Er(Zg,s);if(l.magic!=="TAGX")throw new Error("Invalid TAGX section");let d=(l.length-12)/4,f=Array.from({length:d},(p,u)=>new Uint8Array(s.slice(12+u*4,12+u*4+4))),g=[];for(let p=0;p<n.numRecords;p++){let u=e(t+1+p),T=new Uint8Array(u),_=Er(Nh,u);if(_.magic!=="INDX")throw new Error("Invalid INDX record");for(let w=0;w<_.numRecords;w++){let A=_.idxt+4+2*w,N=Qt(u.slice(A,A+2)),v=Qt(u.slice(N,N+1)),I=na(u.slice(N+1,N+1+v)),C=[],E=N+1+v,L=0,P=E+l.numControlBytes;for(let[M,F,te,U]of f){if(U&1){L++;continue}let re=E+L,ie=Qt(u.slice(re,re+1))&te;if(ie===te)if(Lh(te)>1){let{value:z,length:ne}=di(T,P);C.push([M,0,z,F]),P+=ne}else C.push([M,1,0,F]);else C.push([M,ie>>am(te),0,F])}let x={};for(let[M,F,te,U]of C){let re=[];if(F!==0)for(let ie=0;ie<F*U;ie++){let{value:z,length:ne}=di(T,P);re.push(z),P+=ne}else{let ie=0;for(;ie<te;){let{value:z,length:ne}=di(T,P);re.push(z),P+=ne,ie+=ne}}x[M]=re}g.push({name:I,tagMap:x})}}return{table:g,cncx:a}}function um(t,e){let{table:r,cncx:n}=hi(t,e),o=r.map(({tagMap:i},s)=>({index:s,offset:i[1]?.[0],size:i[2]?.[0],label:n[i[3]?.[0]]??"",headingLevel:i[4]?.[0],pos:i[6],parent:i[21]?.[0],firstChild:i[22]?.[0],lastChild:i[23]?.[0]})),a=i=>(i.firstChild==null||(i.children=o.filter(s=>s.parent===i.index).map(a)),i);return o.filter(i=>i.headingLevel===0).map(a)}function Ih(t=0,e=0){return`kindle:pos:fid:${t.toString(32).toUpperCase().padStart(4,"0")}:off:${e.toString(32).toUpperCase().padStart(10,"0")}`}function Rh(t){let e=t.match(fm);if(!e)return"";let[,r,n]=e;return`[${r}="${n}"]`}function mm(t){let[e,r]=t.match(gm).slice(1);return{fid:Number.parseInt(e,32),off:Number.parseInt(r,32)}}async function Gs(t,e){let r=new Us(t,e);return await r.innerLoadFile(),await r.innerInit(),r}async function qs(t,e){let r=new Ws(t,e);return await r.innerLoadFile(),await r.innerInit(),r}var Hg,Ah,Ug,jg,Gg,qg,Xg,Vg,Kg,Yg,Nh,Zg,Qg,Jg,em,tm,nm,na,js,Ch,pm,fm,gm,Mh,bm,xm,Zt,pi,vm,ym,Pt,Us,wm,_m,Sr,Ws,Dh=cr(()=>{ms();Sh();Hg={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};Ah={XML:"application/xml",XHTML:"application/xhtml+xml",HTML:"text/html",CSS:"text/css",SVG:"image/svg+xml"},Ug={ffd8ff:"image/jpeg","89504e47":"image/png",47494638:"image/gif","424d":"image/bmp","3c737667":"image/svg+xml","00000018":"video/mp4","00000020":"video/mp4","1a45dfa3":"video/mkv","1f43b675":"video/webm",494433:"audio/mp3",52494646:"audio/wav","4f676753":"audio/ogg","00010000":"font/ttf",74727565:"font/ttf","4f54544f":"font/otf","774f4646":"font/woff","774f4632":"font/woff2","504c":"font/eot"};jg={1252:"windows-1252",65001:"utf-8"},Gg={1:["ar","ar-SA","ar-IQ","ar-EG","ar-LY","ar-DZ","ar-MA","ar-TN","ar-OM","ar-YE","ar-SY","ar-JO","ar-LB","ar-KW","ar-AE","ar-BH","ar-QA"],2:["bg"],3:["ca"],4:["zh","zh-TW","zh-CN","zh-HK","zh-SG"],5:["cs"],6:["da"],7:["de","de-DE","de-CH","de-AT","de-LU","de-LI"],8:["el"],9:["en","en-US","en-GB","en-AU","en-CA","en-NZ","en-IE","en-ZA","en-JM",null,"en-BZ","en-TT","en-ZW","en-PH"],10:["es","es-ES","es-MX",null,"es-GT","es-CR","es-PA","es-DO","es-VE","es-CO","es-PE","es-AR","es-EC","es-CL","es-UY","es-PY","es-BO","es-SV","es-HN","es-NI","es-PR"],11:["fi"],12:["fr","fr-FR","fr-BE","fr-CA","fr-CH","fr-LU","fr-MC"],13:["he"],14:["hu"],15:["is"],16:["it","it-IT","it-CH"],17:["ja"],18:["ko"],19:["nl","nl-NL","nl-BE"],20:["no","nb","nn"],21:["pl"],22:["pt","pt-BR","pt-PT"],23:["rm"],24:["ro"],25:["ru"],26:["hr",null,"sr"],27:["sk"],28:["sq"],29:["sv","sv-SE","sv-FI"],30:["th"],31:["tr"],32:["ur"],33:["id"],34:["uk"],35:["be"],36:["sl"],37:["et"],38:["lv"],39:["lt"],41:["fa"],42:["vi"],43:["hy"],44:["az"],45:["eu"],46:["hsb"],47:["mk"],48:["st"],49:["ts"],50:["tn"],52:["xh"],53:["zu"],54:["af"],55:["ka"],56:["fo"],57:["hi"],58:["mt"],59:["se"],62:["ms"],63:["kk"],65:["sw"],67:["uz",null,"uz-UZ"],68:["tt"],69:["bn"],70:["pa"],71:["gu"],72:["or"],73:["ta"],74:["te"],75:["kn"],76:["ml"],77:["as"],78:["mr"],79:["sa"],82:["cy","cy-GB"],83:["gl","gl-ES"],87:["kok"],97:["ne"],98:["fy"]},qg={name:[0,32,"string"],type:[60,4,"string"],creator:[64,4,"string"],numRecords:[76,2,"uint"]},Xg={compression:[0,2,"uint"],numTextRecords:[8,2,"uint"],recordSize:[10,2,"uint"],encryption:[12,2,"uint"]},Vg={magic:[16,4,"string"],length:[20,4,"uint"],type:[24,4,"uint"],encoding:[28,4,"uint"],uid:[32,4,"uint"],version:[36,4,"uint"],titleOffset:[84,4,"uint"],titleLength:[88,4,"uint"],localeRegion:[94,1,"uint"],localeLanguage:[95,1,"uint"],resourceStart:[108,4,"uint"],huffcdic:[112,4,"uint"],numHuffcdic:[116,4,"uint"],exthFlag:[128,4,"uint"],trailingFlags:[240,4,"uint"],indx:[244,4,"uint"]},Kg={resourceStart:[108,4,"uint"],fdst:[192,4,"uint"],numFdst:[196,4,"uint"],frag:[248,4,"uint"],skel:[252,4,"uint"],guide:[260,4,"uint"]},Yg={magic:[0,4,"string"],length:[4,4,"uint"],count:[8,4,"uint"]},Nh={magic:[0,4,"string"],length:[4,4,"uint"],type:[8,4,"uint"],idxt:[20,4,"uint"],numRecords:[24,4,"uint"],encoding:[28,4,"uint"],language:[32,4,"uint"],total:[36,4,"uint"],ordt:[40,4,"uint"],ligt:[44,4,"uint"],numLigt:[48,4,"uint"],numCncx:[52,4,"uint"]},Zg={magic:[0,4,"string"],length:[4,4,"uint"],numControlBytes:[8,4,"uint"]},Qg={magic:[0,4,"string"],offset1:[8,4,"uint"],offset2:[12,4,"uint"]},Jg={magic:[0,4,"string"],length:[4,4,"uint"],numEntries:[8,4,"uint"],codeLength:[12,4,"uint"]},em={magic:[0,4,"string"],numEntries:[8,4,"uint"]},tm={flags:[8,4,"uint"],dataStart:[12,4,"uint"],keyLength:[16,4,"uint"],keyStart:[20,4,"uint"]};nm=new TextDecoder,na=t=>nm.decode(t);js=t=>new TextDecoder(jg[t]);Ch={100:["creator","string",!0],101:["publisher","string",!1],103:["description","string",!1],104:["isbn","string",!1],105:["subject","string",!0],106:["date","string",!1],108:["contributor","string",!0],109:["rights","string",!1],110:["subjectCode","string",!0],112:["source","string",!0],113:["asin","string",!1],121:["boundary","uint",!1],122:["fixedLayout","string",!1],125:["numResources","uint",!1],126:["originalResolution","string",!1],127:["zeroGutter","string",!1],128:["zeroMargin","string",!1],129:["coverURI","string",!1],132:["regionMagnification","string",!1],201:["coverOffset","uint",!1],202:["thumbnailOffset","uint",!1],503:["title","string",!1],524:["language","string",!0],527:["pageProgressionDirection","string",!1]};pm=/<\s*(?:mbp:)?pagebreak[^>]*>/gi;fm=/\s(id|name|aid)\s*=\s*['"]([^'"]*)['"]/i;gm=/kindle:pos:fid:(\w+):off:(\w+)/;Mh=/kindle:(flow|embed):(\w+)(?:\?mime=(\w+\/[-+.\w]+))?/,bm=Object.defineProperty,xm=(t,e,r)=>e in t?bm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Zt=(t,e,r)=>xm(t,typeof e!="symbol"?e+"":e,r),pi=class{constructor(e,r){if(Zt(this,"fileArrayBuffer"),Zt(this,"recordsOffset"),Zt(this,"recordsMagic"),Zt(this,"start",0),Zt(this,"pdbHeader"),Zt(this,"mobiHeader"),Zt(this,"palmdocHeader"),Zt(this,"kf8Header"),Zt(this,"exth"),Zt(this,"isKf8",!1),Zt(this,"resourceStart"),Zt(this,"decoder"),Zt(this,"encoder"),Zt(this,"removeTrailingEntries"),Zt(this,"decompress"),this.fileArrayBuffer=e,this.parsePdbHeader(),this.parseFirstRecord(this.loadRecord(0)),this.resourceStart=this.mobiHeader.resourceStart,!this.isKf8){let n=this.exth.boundary??4294967295;if(n<4294967295){try{this.parseFirstRecord(this.loadRecord(n)),this.start=n,this.isKf8=!0}catch{console.warn("Failed to parse kf8 header.")}r.endsWith(".mobi")&&console.warn(`File "${r}" is a compatible file. Please change the file extension to .azw3 to make it parse correctly.`)}}this.setup()}decode(e){return this.decoder.decode(e)}encode(e){return this.encoder.encode(e)}pdbLoadRecord(e){let[r,n]=this.recordsOffset[e]??[0,0];return this.fileArrayBuffer.slice(r,n)}loadRecord(e){return this.pdbLoadRecord(this.start+e)}loadMagic(e){return this.recordsMagic[this.start+e]}loadTextBuffer(e){return this.decompress(this.removeTrailingEntries(new Uint8Array(this.loadRecord(e+1))))}loadResource(e){let r=this.pdbLoadRecord(this.resourceStart+e),n=na(r.slice(0,4)),o;return n==="FONT"?o=hm(r):n==="VIDE"||n==="AUDI"?o=new Uint8Array(r.slice(12)):o=new Uint8Array(r),{type:Wg(o),raw:o}}getNCX(){let e=this.mobiHeader.indx;if(e<4294967295)return um(e,this.loadRecord.bind(this))}getMetadata(){let e=this.mobiHeader,r=this.exth;return{identifier:this.mobiHeader.uid.toString(),title:r?.title||e.title,author:r?.creator?.map(Eh)??[],publisher:r?.publisher??"",language:r?.language?.[0]??e.language,published:r?.date??"",description:r?.description??"",subject:r?.subject?.map(Eh)??[],rights:r?.rights??"",contributor:r?.contributor??[]}}getCoverImage(){let e=this.exth,r=Number(e.coverOffset??4294967295),n=Number(e.thumbnailOffset??4294967295),o=r<4294967295?r:n<4294967295?n:void 0;if(o)return this.loadResource(o)}parsePdbHeader(){let e=Er(qg,this.fileArrayBuffer.slice(0,78));e.name=e.name.replace(/\0.*$/,""),this.pdbHeader=e;let r=this.fileArrayBuffer.slice(78,78+e.numRecords*8),n=Array.from({length:e.numRecords},(o,a)=>Qt(r.slice(a*8,a*8+4)));this.recordsOffset=n.map((o,a)=>[o,n[a+1]]),this.recordsMagic=n.map(o=>na(this.fileArrayBuffer.slice(o,o+4)))}parseFirstRecord(e){this.palmdocHeader=Er(Xg,e.slice(0,16));let r=Er(Vg,e);if(r.magic!=="MOBI")throw new Error("Missing MOBI header");let{titleOffset:n,titleLength:o,localeLanguage:a,localeRegion:i}=r,s=Gg[a.toString()]??[],l={title:na(e.slice(n,n+o)),language:s[i>>2]??s[0]??"unknown"};this.mobiHeader=Object.assign(r,l),this.kf8Header=r.version>=8?Er(Kg,e):void 0,this.isKf8=r.version>=8,this.exth=r.exthFlag&64?cm(e.slice(r.length+16),r.encoding):void 0}setup(){this.decoder=js(this.mobiHeader.encoding.toString()),this.encoder=new TextEncoder;let e=this.palmdocHeader.compression;if(e===1)this.decompress=n=>n;else if(e===2)this.decompress=im;else if(e===17480)this.decompress=sm(this.mobiHeader,this.loadRecord.bind(this));else throw new Error("Unsupported compression");let r=this.mobiHeader.trailingFlags;this.removeTrailingEntries=dm(r)}},vm=Object.defineProperty,ym=(t,e,r)=>e in t?vm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Pt=(t,e,r)=>ym(t,typeof e!="symbol"?e+"":e,r);Us=class{constructor(e,r="./images"){this.file=e,Pt(this,"fileArrayBuffer"),Pt(this,"mobiFile"),Pt(this,"fileName",""),Pt(this,"fdstTable",[]),Pt(this,"fullRawLength",0),Pt(this,"skelTable",[]),Pt(this,"fragTable",[]),Pt(this,"chapters",[]),Pt(this,"toc",[]),Pt(this,"fragmentOffsets",new Map),Pt(this,"fragmentSelectors",new Map),Pt(this,"rawHead",new Uint8Array),Pt(this,"rawTail",new Uint8Array),Pt(this,"lastLoadedHead",-1),Pt(this,"lastLoadedTail",-1),Pt(this,"resourceCache",new Map),Pt(this,"chapterCache",new Map),Pt(this,"idToChapter",new Map),Pt(this,"resourceSaveDir","./images"),this.fileName=Ph(e),this.resourceSaveDir=r}getFileInfo(){return{fileName:this.fileName}}getMetadata(){return this.mobiFile.getMetadata()}getCoverImage(){if(this.resourceCache.has("cover"))return this.resourceCache.get("cover");let e=this.mobiFile.getCoverImage(),r="";return e&&(r=ui(e.raw,e.type,"cover",this.resourceSaveDir),this.resourceCache.set("cover",r)),r}getSpine(){return this.chapters}getToc(){return this.toc}async innerLoadFile(){this.fileArrayBuffer=await Oh(this.file),this.mobiFile=new pi(this.fileArrayBuffer,this.fileName)}async innerInit(){let e=this.mobiFile.loadRecord.bind(this.mobiFile),r=this.mobiFile.kf8Header,n=this.mobiFile.loadRecord(r.fdst),o=Er(em,n);if(o.magic!=="FDST")throw new Error("Missing FDST record");let a=Array.from({length:o.numEntries},(p,u)=>12+u*8).map(p=>[Qt(n.slice(p,p+4)),Qt(n.slice(p+4,p+8))]);this.fdstTable=a,this.fullRawLength=a[a.length-1][1];let s=hi(r.skel,e).table.map(({name:p,tagMap:u},T)=>({index:T,name:p,numFrag:u[1][0],offset:u[6][0],length:u[6][1]}));this.skelTable=s;let l=hi(r.frag,e),d=l.table.map(({name:p,tagMap:u})=>({insertOffset:Number.parseInt(p),selector:l.cncx[u[2][0]],index:u[4][0],offset:u[6][0],length:u[6][1]}));this.fragTable=d;let f=this.skelTable.reduce((p,u,T)=>{let _=p[p.length-1],w=_?.fragEnd??0,A=w+u.numFrag,N=this.fragTable.slice(w,A),v=u.length+N.reduce((E,L)=>E+L.length,0),I=(_?.totalLength??0)+v,C={id:T.toString(),skel:u,frags:N,fragEnd:A,length:v,totalLength:I};return this.idToChapter.set(T,C),p.push(C),p},[]);this.chapters=f;let g=this.mobiFile.getNCX();if(g){let p=({label:u,pos:T,children:_})=>{let[w,A]=T,N=Ih(w,A),v=this.fragmentOffsets.get(w);return v?v.push(A):this.fragmentOffsets.set(w,[A]),{label:u,href:N,children:_?.map(p)}};this.toc=g.map(p)}}getGuide(){let e=this.mobiFile.kf8Header.guide;if(e<4294967295){let r=this.mobiFile.loadRecord.bind(this.mobiFile),{table:n,cncx:o}=hi(e,r);return n.map(({name:a,tagMap:i})=>({label:o[i[1][0]]??"",type:a?.split(/\s/),href:Ih(i[6]?.[0]??i[3]?.[0])}))}}loadRaw(e,r){let n=r-this.rawHead.length,o=this.fullRawLength===0?1/0:this.fullRawLength-this.rawTail.length-e;if(n<0||n<o){for(;this.rawHead.length<r;){this.lastLoadedHead++;let i=this.lastLoadedHead,s=this.mobiFile.loadTextBuffer(i);this.rawHead=oa([this.rawHead,s])}return this.rawHead.slice(e,r)}for(;this.fullRawLength-this.rawTail.length>e;){this.lastLoadedTail++;let i=this.mobiFile.palmdocHeader.numTextRecords-1-this.lastLoadedTail,s=this.mobiFile.loadTextBuffer(i);this.rawTail=oa([s,this.rawTail])}let a=this.fullRawLength-this.rawTail.length;return this.rawTail.slice(e-a,r-a)}loadText(e){let{skel:r,frags:n,length:o}=e,a=this.loadRaw(r.offset,r.offset+o),i=a.slice(0,r.length);for(let s of n){let l=s.insertOffset-r.offset,d=r.length+s.offset,f=a.slice(d,d+s.length);i=oa([i.slice(0,l),f,i.slice(l)]);let g=this.fragmentOffsets.get(s.index);if(g)for(let p of g){let u=this.mobiFile.decode(f.buffer).slice(p),T=Rh(u);T&&this.cacheFragmentSelector(s.index,p,T)}}return this.mobiFile.decode(i.buffer)}loadChapter(e){let r=Number.parseInt(e);if(Number.isNaN(r))return;if(this.chapterCache.has(r))return this.chapterCache.get(r);let n=this.idToChapter.get(r);if(n){let o=this.replace(this.loadText(n));return this.chapterCache.set(r,o),o}}cacheFragmentSelector(e,r,n){let o=this.fragmentSelectors.get(e);if(o)o.set(r,n);else{let a=new Map;this.fragmentSelectors.set(e,a),a.set(r,n)}}loadFlow(e){if(e<4294967295)return this.loadRaw(this.fdstTable[e][0],this.fdstTable[e][1])}resolveHref(e){if(/^(?!blob|kindle)\w+:/i.test(e))return;let{fid:r,off:n}=mm(e),o=this.chapters.find(T=>T.frags.some(_=>_.index===r));if(!o)return;let a=o.id,i=this.fragmentSelectors.get(r)?.get(n);if(i)return{id:a,selector:i};let{skel:s,frags:l}=o,d=l.find(T=>T.index===r),f=s.offset+s.length+d.offset,g=this.loadRaw(f,f+d.length),p=this.mobiFile.decode(g.buffer).slice(n),u=Rh(p);return this.cacheFragmentSelector(r,n,u),{id:a,selector:u}}replaceResources(e){return e.replace(new RegExp(Mh,"gi"),(r,n,o,a)=>{if(this.resourceCache.has(r))return this.resourceCache.get(r);let i=n==="flow"?this.loadFlow(Number.parseInt(o)):this.mobiFile.loadResource(Number.parseInt(o,36)-1).raw,s="";if(a===Ah.CSS||a===Ah.SVG){let d=this.mobiFile.decode(i?.buffer);s=this.replaceResources(d)}else s=i;let l=ui(s,a,o,this.resourceSaveDir);return this.resourceCache.set(r,l),l})}replace(e){let r=[],o=e.match(/<head[^>]*>([\s\S]*)<\/head>/i)[1].match(/<link[^>]*>/gi)??[];for(let s of o){let l=s.match(/href="([^"]*)"/i)[1],d=s.match(Mh)[2],f=this.replaceResources(l);r.push({id:d,href:f})}let a=e.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1];return{html:this.replaceResources(a),css:r}}destroy(){this.resourceCache.forEach(e=>{URL.revokeObjectURL(e)})}},wm=Object.defineProperty,_m=(t,e,r)=>e in t?wm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Sr=(t,e,r)=>_m(t,typeof e!="symbol"?e+"":e,r);Ws=class{constructor(e,r="./images"){this.file=e,Sr(this,"fileArrayBuffer"),Sr(this,"mobiFile"),Sr(this,"fileName",""),Sr(this,"chapters",[]),Sr(this,"idToChapter",new Map),Sr(this,"toc",[]),Sr(this,"resourceSaveDir","./images"),Sr(this,"chapterCache",new Map),Sr(this,"resourceCache",new Map),Sr(this,"recindexReg",/recindex=["']?(\d+)["']?/),Sr(this,"mediarecindexReg",/mediarecindex=["']?(\d+)["']?/),Sr(this,"fileposReg",/filepos=["']?(\d+)["']?/),this.fileName=Ph(e),this.resourceSaveDir=r}getFileInfo(){return{fileName:this.fileName}}getSpine(){return this.chapters}loadChapter(e){let r=Number.parseInt(e);if(Number.isNaN(r))return;if(this.chapterCache.has(r))return this.chapterCache.get(r);let n=this.idToChapter.get(r);if(!n)return;let o=this.replace(n.text);return this.chapterCache.set(r,o),o}getToc(){return this.toc}getCoverImage(){if(this.resourceCache.has("cover"))return this.resourceCache.get("cover");let e=this.mobiFile.getCoverImage(),r="";return e&&(r=ui(e.raw,e.type,"cover",this.resourceSaveDir),this.resourceCache.set("cover",r)),r}getMetadata(){return this.mobiFile.getMetadata()}async innerLoadFile(){this.fileArrayBuffer=await Oh(this.file),this.mobiFile=new pi(this.fileArrayBuffer,this.fileName)}async innerInit(){let{palmdocHeader:e}=this.mobiFile,r=[];for(let T=0;T<e.numTextRecords;T++)r.push(this.mobiFile.loadTextBuffer(T));let n=oa(r),o=Array.from(n,T=>String.fromCharCode(T)).join(""),a=[],i=new Map,s=0,l=Array.from(o.matchAll(pm));l.unshift({index:0,input:"",groups:void 0,0:""});for(let T=0;T<l.length;T++){let _=l[T],w=_.index,A=_[0],N=l[T+1]?.index,v=o.slice(w+A.length,N),I=Uint8Array.from(v,L=>L.charCodeAt(0)),C=this.mobiFile.decode(I.buffer),E={id:String(s),text:C,start:w,end:N,size:I.length};a.push(E),i.set(s,E),s++}let d=a[a.length-1].text;a[a.length-1].text=d.slice(0,d.indexOf("</body>"));let f=a[0].text,g=f.indexOf("<body>");a[0].text=f.slice(g+6),this.chapters=a,this.idToChapter=i;let p=f.slice(0,g),u=this.findTocChapter(p);if(u){let T=`<wrapper>${u.text.replace(/filepos=(\d+)/gi,'filepos="$1"')}</wrapper>`,_=await Th(T,{preserveChildrenOrder:!0,explicitChildren:!0,childkey:"children"}),w=[];this.parseNavMap(_.wrapper.children,w),this.toc=w}}findTocChapter(e){let r=/<reference.*\/>/g,n=e.match(r),o=/type="(.+?)"/,a=/filepos=(.*)/;if(n)for(let i of n){let s=i.match(o)?.[1].trim(),l=i.match(a)?.[1].trim();if(s==="toc"&&l){let d=Number.parseInt(l,10);return this.chapters.find(g=>g.end>d)}}}parseNavMap(e,r){for(let n of e){let o=n["#name"];if(o==="p"||o==="blockquote"){let a={label:"",href:""};if(n.a){let i=n.a[0],s=i._,l=Number(i.$.filepos);a={label:s,href:`filepos:${l}`},r.push(a)}(n.p||n.blockquote)&&(a.children=[],this.parseNavMap(n.children,a.children))}}}loadResource(e){if(this.resourceCache.has(String(e)))return this.resourceCache.get(String(e));let{type:r,raw:n}=this.mobiFile.loadResource(e-1),o=ui(n,r,String(e),this.resourceSaveDir);return this.resourceCache.set(String(e),o),o}replace(e){return e=e.replace(/<img[^>]*>/g,r=>{let n=r.match(this.recindexReg)[1],o=this.loadResource(Number.parseInt(n));return r.replace(this.recindexReg,`src="${o}"`)}),e=e.replace(/<(video|audio)[^>]*>/g,r=>{let n=r.match(this.recindexReg)[1],o=this.loadResource(Number.parseInt(n));r=r.replace(this.mediarecindexReg,`src="${o}"`);let a=r.match(this.recindexReg)?.[1];if(a){let i=this.loadResource(Number.parseInt(a));r=r.replace(this.recindexReg,`poster="${i}"`)}return r}),e=e.replace(/<a[^>]*>/g,r=>{let n=r.match(this.fileposReg);if(!n)return r;let o=n[1];return r.replace(this.fileposReg,`href="filepos:${o}"`)}),{html:e,css:[]}}resolveHref(e){let r=e.match(/filepos:(\d+)/);if(!r)return;let n=r[1],o=Number(n),a=this.chapters.find(i=>i.end>o);if(a)return{id:a.id,selector:`[id="filepos:${n}"]`}}destroy(){this.resourceCache.forEach(e=>{URL.revokeObjectURL(e)}),this.resourceCache.clear()}}});function fi(t,e,r){let n="";for(let o=0;o<r;o+=1){let a=t[e+o]??0;n+=a>=32&&a<127?String.fromCharCode(a):""}return n}function aa(t,e){return(t[e]??0)<<8|(t[e+1]??0)}function Fh(t,e){return(t[e]??0)*16777216+((t[e+1]??0)<<16|(t[e+2]??0)<<8|(t[e+3]??0))>>>0}function on(t,e){return(t[e+3]??0)*16777216+((t[e+2]??0)<<16|(t[e+1]??0)<<8|(t[e]??0))>>>0}function Tm(t){if(t.length<86)throw new Error("\u6587\u4EF6\u592A\u5C0F\uFF0C\u4E0D\u662F\u6709\u6548\u7684 MOBI/PalmDOC \u6587\u4EF6\u3002");let e=fi(t,60,4).trim(),r=fi(t,64,4).trim(),n=`${e}${r}`;if(n!=="BOOKMOBI"&&n!=="TEXtREAd")throw new Error("\u6587\u4EF6\u4E0D\u662F MOBI/PalmDOC \u683C\u5F0F\uFF08\u7F3A\u5C11 PDB \u6587\u4EF6\u5934\uFF09\u3002");let o=aa(t,76);if(o<1)throw new Error("MOBI \u8BB0\u5F55\u8868\u4E3A\u7A7A\u3002");if(78+o*8+2>t.length)throw new Error("MOBI \u8BB0\u5F55\u8868\u5DF2\u635F\u574F\u3002");let a=[];for(let _=0;_<o;_+=1){let w=Fh(t,78+_*8);if(w<78||w>=t.length)throw new Error("MOBI \u8BB0\u5F55\u504F\u79FB\u65E0\u6548\uFF0C\u6587\u4EF6\u53EF\u80FD\u5DF2\u635F\u574F\u3002");if(a.length>0&&w<a[a.length-1])throw new Error("MOBI \u8BB0\u5F55\u987A\u5E8F\u65E0\u6548\u3002");a.push(w)}let i=a[0];if(i+16>t.length)throw new Error("MOBI \u6587\u4EF6\u5934\u5DF2\u635F\u574F\u3002");let s=aa(t,i),l=Fh(t,i+4),d=aa(t,i+8),f=aa(t,i+10),g=aa(t,i+12);if(g!==0)throw new Error("\u8BE5 MOBI \u6587\u4EF6\u53D7 DRM \u4FDD\u62A4\uFF0C\u65E0\u6CD5\u6253\u5F00\u3002");if(![km,1,$h,Vs].includes(s))throw new Error(`\u4E0D\u652F\u6301\u7684 MOBI \u538B\u7F29\u65B9\u5F0F\uFF08${s}\uFF09\u3002`);let p=0,u=65001,T=!1;return n==="BOOKMOBI"&&fi(t,i+16,4)==="MOBI"&&(p=on(t,i+36),u=on(t,i+28)||65001,T=p===8),{pdbType:n,numRecords:o,offsets:a,compression:s,textLength:l,recordCount:d,recordSize:f,encryption:g,version:p,encoding:u,isKf8:T}}function Sm(t,e,r){let n=e[r];if(n==null)return null;let o=e[r+1]??t.length;return o<=n?new Uint8Array(0):t.subarray(n,o)}function Em(t){let e=t instanceof Uint8Array?t:new Uint8Array(t),r=[],n=0;for(;n<e.length;){let o=e[n];if(n+=1,o===0)r.push(0);else if(o<=8)for(let a=0;a<o&&n<e.length;a+=1)r.push(e[n]),n+=1;else if(o<=127)r.push(o);else if(o<=191){if(n>=e.length)break;let a=o<<8|e[n];n+=1;let i=a>>3&2047,s=(a&7)+3,l=r.length-i;for(let d=0;d<s;d+=1)r.push(l+d>=0?r[l+d]:0)}else r.push(32),r.push(o^128)}return Uint8Array.from(r)}function Am(t){let e=0;for(let o of t)e+=o.length;let r=new Uint8Array(e),n=0;for(let o of t)r.set(o,n),n+=o.length;return r}function Xs(t,e){let r=[];e&&r.push(e),r.push("utf-8","gb18030","windows-1252");for(let n of r)try{return new TextDecoder(n,{fatal:!0}).decode(t)}catch{}return new TextDecoder("utf-8").decode(t)}function Nm(t,e){let r=e.recordCount>0?e.recordCount:e.numRecords-1,n=[];for(let a=1;a<=r;a+=1){let i=Sm(t,e.offsets,a);if(!i)break;if(e.compression===Vs)throw new Error("\u8BE5 MOBI \u4F7F\u7528 HUFF/CDIC \u538B\u7F29\uFF0C\u5185\u7F6E\u89E3\u6790\u5668\u65E0\u6CD5\u5904\u7406\u3002");n.push(e.compression===$h?Em(i):i)}if(n.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u6587\u672C\u5185\u5BB9\u3002");let o=Am(n);return e.textLength>0&&e.textLength<=o.length&&(o=o.subarray(0,e.textLength)),o}function Cm(t,e){let r={title:"",author:"",language:""};if(e.pdbType!=="BOOKMOBI")return r;let n=e.offsets[0],o=Hh[e.encoding]||"utf-8",a=on(t,n+84),i=on(t,n+88);a>0&&i>0&&n+a+i<=t.length&&(r.title=it(Xs(t.subarray(n+a,n+a+i),o)));let s=on(t,n+20),l=on(t,n+128),d=n+16+s;if(l&64&&fi(t,d,4)==="EXTH"&&d+12<=t.length){let f=on(t,d+4),g=on(t,d+8),p=Math.min(t.length,d+f,d+12+g*8+4096),u=d+12;for(let T=0;T<g&&u+8<=p;T+=1){let _=on(t,u),w=on(t,u+4);if(w<8||u+w>t.length)break;let A=t.subarray(u+8,u+w),N=it(Xs(A,o));_===100&&N&&!r.author?r.author=N:_===503&&N?r.title=N:_===524&&N&&!r.language&&(r.language=N),u+=w}}return r}function zh(t,e){if(!Number.isFinite(e)||e<0)return null;for(let r=0;r<t.length;r+=1){let n=Number(t[r]?.start),o=Number(t[r]?.end);if(Number.isFinite(n)&&Number.isFinite(o)&&e>=n&&e<o)return r}for(let r=0;r<t.length;r+=1){let n=Number(t[r]?.start);if(Number.isFinite(n)&&n>e)return r}return t.length>0?t.length-1:null}function Bh(t){let e=String(t||"");return e.startsWith("#")?e.slice(1):""}function Im(t,e,{fileName:r,tracker:n,warn:o}){let a={};try{a=t.getMetadata()||{}}catch{a={}}let i=[];try{i=t.getSpine()||[]}catch{i=[]}if(!Array.isArray(i)||i.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u9605\u8BFB\u987A\u5E8F\u3002");let s=new Map;i.forEach((E,L)=>{E?.id!=null&&s.set(String(E.id),L)});let l=0,d=()=>`b${l+=1}`,f=E=>{let L=String(E||"").trim();if(!L)return null;if(/^blob:/i.test(L))return n.add(L),{src:L};if(/^data:/i.test(L)){let P=kn(L);return P?{src:n.create(P)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684 MOBI \u5185\u5D4C\u56FE\u7247\u3002"),null)}return/^(https?:)?\/\//i.test(L)?(o("\u5DF2\u8DF3\u8FC7 MOBI \u4E2D\u7684\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\u3002"),null):(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u6790\u7684 MOBI \u56FE\u7247\u3002"),null)},g=E=>L=>{let P=String(L||"").trim();if(!P)return null;if(/^(https?:|mailto:)/i.test(P))return{external:!0,href:P};if(P.startsWith("#"))return{chapter:E,anchor:P.slice(1)};if(P.startsWith("//")||/^(?!filepos:|kindle:)[a-z][a-z0-9+.-]*:/i.test(P))return null;try{let M=t.resolveHref(P);if(M?.id!=null){let F=s.get(String(M.id));if(F!=null){let te=Bh(M.selector);return te?{chapter:F,anchor:te}:{chapter:F}}}}catch{}let x=/filepos:(\d+)/i.exec(P);if(x){let M=zh(i,Number(x[1]));if(M!=null)return{chapter:M}}return null},p=[];for(let E=0;E<i.length;E+=1){let L="";try{L=t.loadChapter(i[E].id)?.html||""}catch{o(`\u7B2C ${E+1} \u7AE0\u52A0\u8F7D\u5931\u8D25\uFF0C\u5DF2\u8DF3\u8FC7\u8BE5\u7AE0\u5185\u5BB9\u3002`)}let P=[];if(L){let x=Jr(L),M=x?.body||x?.documentElement||null;M&&(P=qn(M,{nextId:d,warn:o,chapterIndex:E,resolveImage:f,resolveLink:g(E)}))}p.push({id:`ch${E}`,title:"",blocks:P})}let u=[],T=(E,L)=>{if(Array.isArray(E))for(let P of E){if(!P)continue;let x=it(P.label||P.title||"").slice(0,200),M=String(P.href||""),F=null,te="";if(M){try{let U=t.resolveHref(M);if(U?.id!=null){let re=s.get(String(U.id));re!=null&&(F=re,te=Bh(U.selector))}}catch{}if(F==null){let U=/filepos:(\d+)/i.exec(M);U&&(F=zh(i,Number(U[1])))}}x&&F!=null&&u.push({title:x,chapterIndex:F,depth:L,...te?{anchor:te}:{}}),T(P.children,L+1)}};try{T(t.getToc?.()||[],0)}catch{o("MOBI \u76EE\u5F55\u8BFB\u53D6\u5931\u8D25\uFF0C\u5DF2\u6309\u7AE0\u8282\u6807\u9898\u751F\u6210\u76EE\u5F55\u3002")}let _=Jo(p,u),w=it(a.title||"")||Vn(r),N=(Array.isArray(a.author)?a.author:[a.author]).map(E=>it(E||"")).filter(Boolean).join(", "),v="";try{let E=t.getCoverImage();E&&(n.add(E),v=E)}catch{}let I={title:w,chapters:p,toc:_};N&&(I.author=N);let C=it(a.language||"");return C&&(I.language=C),v&&(I.cover=v),I}function Rm(t){return String(t||"").split(/<\s*(?:mbp:)?pagebreak[^>]*>/gi)}function Mm(t,e,{fileName:r,warn:n}){if(e.compression===Vs)throw new Error("\u8BE5 MOBI \u6587\u4EF6\u4F7F\u7528 HUFF/CDIC \u538B\u7F29\uFF0C\u5185\u7F6E\u89E3\u6790\u5668\u65E0\u6CD5\u5904\u7406\u3002");let o=Cm(t,e),a=Nm(t,e),i=Pm(e.encoding),s=Xs(a,i),l=o.title||Vn(r),d=0,f=()=>`b${d+=1}`,g=/<\s*(?:html|body|p|div|h[1-6]|br)\b/i.test(s),p;if(g){let _=Rm(s),w=new TextEncoder,A=[],N=0;for(let v of _){let I=w.encode(v).length;A.push({start:N,end:N+I}),N+=I}p=[],_.forEach((v,I)=>{if(!v.trim())return;let C=Jr(v),E=C?.body||C?.documentElement||null,L=p.length,P=E?qn(E,{nextId:f,warn:n,chapterIndex:L,resolveImage:()=>(n("\u5185\u7F6E MOBI \u89E3\u6790\u5668\u65E0\u6CD5\u63D0\u53D6\u56FE\u7247\u8D44\u6E90\u3002"),null),resolveLink:x=>{let M=String(x||"").trim();if(!M)return null;if(/^(https?:|mailto:)/i.test(M))return{external:!0,href:M};if(M.startsWith("#"))return{chapter:L,anchor:M.slice(1)};let F=/filepos:(\d+)/i.exec(M);if(F){let te=Number(F[1]);for(let U=0;U<A.length;U+=1)if(te>=A[U].start&&te<A[U].end){let re=_.slice(0,U).filter(ie=>ie.trim()).length;return re<p.length?{chapter:re}:null}}return null}}):[];p.push({id:`ch${L}`,title:"",blocks:P})})}else p=Fs(s,{nextId:f,title:l});if(!p||p.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let u=Jo(p,[]),T={title:l,chapters:p,toc:u};return o.author&&(T.author=o.author),o.language&&(T.language=o.language),T}function Pm(t){return Hh[t]||""}async function ko(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=tn(),a=_n(),i=null;try{let s=await en(t),l=Tm(s);if(l.pdbType==="BOOKMOBI"){let f=l.isKf8||/^(azw3?|kf8)$/i.test(String(r).split(".").pop()||"");try{i=f?await Gs(s):await qs(s)}catch{try{i=f?await qs(s):await Gs(s)}catch{i=null}i||o("MOBI \u89E3\u6790\u5E93\u65E0\u6CD5\u6253\u5F00\u8BE5\u6587\u4EF6\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\uFF08\u53EF\u80FD\u7F3A\u5C11\u56FE\u7247\u4E0E\u76EE\u5F55\u4FE1\u606F\uFF09\u3002")}if(i)try{let g=i.getSpine?.()||[];(!Array.isArray(g)||g.length===0)&&(i.destroy?.(),i=null,o("MOBI \u9605\u8BFB\u987A\u5E8F\u4E3A\u7A7A\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\u3002"))}catch{i.destroy?.(),i=null,o("MOBI \u89E3\u6790\u5E93\u8FD4\u56DE\u5F02\u5E38\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\u3002")}}return{...i?Im(i,l,{fileName:r,tracker:a,warn:o}):Mm(s,l,{fileName:r,warn:o}),warnings:n,dispose:()=>{try{i?.destroy?.()}catch{}a.dispose()}}}catch(s){try{i?.destroy?.()}catch{}throw a.dispose(),kr(s,"\u65E0\u6CD5\u89E3\u6790 MOBI \u6587\u4EF6")}}var km,$h,Vs,Hh,Uh=cr(()=>{Dh();Wn();Yo();ai();Kn();km=0,$h=2,Vs=17480,Hh={65001:"utf-8",65e3:"utf-7",1250:"windows-1250",1251:"windows-1251",1252:"windows-1252",932:"shift_jis",936:"gb18030",949:"euc-kr",950:"big5"}});var Ys={};sl(Ys,{extensionOf:()=>ni,parseBook:()=>zm});function Dm(t){let e=t?`\u201C.${t}\u201D`:"\u8BE5\u6587\u4EF6";return new Error(`\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u683C\u5F0F\uFF1A${e}\u3002\u76EE\u524D\u652F\u6301 ${Lm}\u3002`)}function Ks(){return new Error("PDF \u6587\u4EF6\u8BF7\u4F7F\u7528 PDF \u9605\u8BFB\u6A21\u5F0F\u6253\u5F00\uFF08PDF \u7531\u72EC\u7ACB\u7684\u9605\u8BFB\u5668\u5904\u7406\uFF09\u3002")}async function Fm(t){let e;try{e=new Uint8Array(await t.slice(0,256).arrayBuffer())}catch{return null}if(e.length>=8){if(String.fromCharCode(...e.subarray(0,4))==="%PDF")return"pdf";if(e[0]===80&&e[1]===75)return"epub";let o="";for(let a=60;a<68;a+=1){let i=e[a]??0;o+=i>=32&&i<127?String.fromCharCode(i):" "}if(o==="BOOKMOBI"||o==="TEXtREAd")return"mobi"}let r=new TextDecoder("utf-8").decode(e.subarray(0,Math.min(e.length,200)));return/^\s*(?:<!doctype\s+html|<html|<head|<body)/i.test(r)?"html":oi(r)?null:"txt"}async function zm(t,e={}){let r=typeof e.fileName=="string"?e.fileName:"",n=typeof e.mime=="string"?e.mime:"",o=ni(r);if(o==="pdf")throw Ks();let a=Br[o]||null;if(!a){let i=n.toLowerCase().split(";")[0].trim();if(i==="application/pdf")throw Ks();a=Om[i]||null}if(!a&&!o){let i=await Fm(t);if(i==="pdf")throw Ks();a=i&&Br[i]||null}if(!a)throw Dm(o);try{let i=await a.parse(t,{fileName:r,mime:n});return{...i,title:i.title||Vn(r),format:a.format,warnings:Array.isArray(i.warnings)?i.warnings:[]}}catch(i){throw kr(i,"\u65E0\u6CD5\u6253\u5F00\u6587\u6863")}}var Br,Om,Lm,Zs=cr(()=>{Jd();eh();ah();Uh();ai();Kn();Br={epub:{parse:Qd,format:"epub"},mobi:{parse:ko,format:"mobi"},prc:{parse:ko,format:"mobi"},azw:{parse:ko,format:"mobi"},azw3:{parse:ko,format:"mobi"},kf8:{parse:ko,format:"mobi"},txt:{parse:zs,format:"txt"},text:{parse:zs,format:"txt"},md:{parse:ra,format:"md"},markdown:{parse:ra,format:"md"},mdown:{parse:ra,format:"md"},mkd:{parse:ra,format:"md"},html:{parse:ea,format:"html"},htm:{parse:ea,format:"html"},xhtml:{parse:ea,format:"html"},xht:{parse:ea,format:"html"}},Om={"application/epub+zip":Br.epub,"application/x-mobipocket-ebook":Br.mobi,"application/x-mobi":Br.mobi,"application/vnd.amazon.ebook":Br.mobi,"text/plain":Br.txt,"text/markdown":Br.md,"text/x-markdown":Br.md,"text/html":Br.html,"application/xhtml+xml":Br.html},Lm="EPUB\u3001MOBI/KF8\u3001TXT\u3001Markdown \u548C HTML"});var Qm={};sl(Qm,{PANEL_ID:()=>rl,apply:()=>Zm,inject:()=>Km,name:()=>Vm});module.exports=fu(Qm);var bv=require("react");var j=Mt(require("react"),1);var or=Mt(require("react"),1);var eb=require("react"),W=require("react/jsx-runtime");function Ze({size:t=18,children:e,viewBox:r="0 0 24 24",fill:n="none",strokeWidth:o=1.7,...a}){return(0,W.jsx)("svg",{width:t,height:t,viewBox:r,fill:n,stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",...a,children:e})}function cl(t){return(0,W.jsxs)(Ze,{...t,children:[(0,W.jsx)("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5Z"}),(0,W.jsx)("path",{d:"M4 18.5A2.5 2.5 0 0 1 6.5 16H20"}),(0,W.jsx)("path",{d:"M8 7h8M8 10.5h5"})]})}function _i(t){return(0,W.jsxs)(Ze,{...t,children:[(0,W.jsx)("path",{d:"M12 6.5C10.6 5.2 8.7 4.6 6.5 4.6H3v13h3.9c2 0 3.8.6 5.1 1.8 1.3-1.2 3.1-1.8 5.1-1.8H21v-13h-3.5c-2.2 0-4.1.6-5.5 1.9Z"}),(0,W.jsx)("path",{d:"M12 6.5v12.9"})]})}function dl(t){return(0,W.jsxs)(Ze,{...t,children:[(0,W.jsx)("path",{d:"M19 12H5"}),(0,W.jsx)("path",{d:"m11 18-6-6 6-6"})]})}function hl(t){return(0,W.jsxs)(Ze,{...t,children:[(0,W.jsx)("path",{d:"M12 16V4"}),(0,W.jsx)("path",{d:"m7 9 5-5 5 5"}),(0,W.jsx)("path",{d:"M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15"})]})}function Io(t){return(0,W.jsxs)(Ze,{...t,children:[(0,W.jsx)("circle",{cx:"11",cy:"11",r:"7"}),(0,W.jsx)("path",{d:"m20 20-3.6-3.6"})]})}function xn(t){return(0,W.jsxs)(Ze,{...t,children:[(0,W.jsx)("path",{d:"m12 3 1.5 4.2L18 9l-4.5 1.8L12 15l-1.5-4.2L6 9l4.5-1.8L12 3Z"}),(0,W.jsx)("path",{d:"m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"}),(0,W.jsx)("path",{d:"m5 13 .7 1.8L7.5 15.5l-1.8.7L5 18l-.7-1.8L2.5 15.5l1.8-.7L5 13Z"})]})}function no(t){return(0,W.jsxs)(Ze,{...t,children:[(0,W.jsx)("path",{d:"M4 5h8M8 3v2c0 4.2-1.8 7.2-5 9"}),(0,W.jsx)("path",{d:"M5 10c1.8 2.2 4 3.6 6.8 4.4"}),(0,W.jsx)("path",{d:"m13 20 3.6-9L20 20"}),(0,W.jsx)("path",{d:"M14.6 16.8h4.8"})]})}function br(t){return(0,W.jsx)(Ze,{...t,children:(0,W.jsx)("path",{d:"m6 6 12 12M18 6 6 18"})})}function oo(t){return(0,W.jsx)(Ze,{...t,children:(0,W.jsx)("path",{d:"m15 18-6-6 6-6"})})}function ao(t){return(0,W.jsx)(Ze,{...t,children:(0,W.jsx)("path",{d:"m9 18 6-6-6-6"})})}function ul(t){return(0,W.jsx)(Ze,{...t,children:(0,W.jsx)("path",{d:"m6 9 6 6 6-6"})})}function ki(t){return(0,W.jsxs)(Ze,{...t,children:[(0,W.jsx)("path",{d:"M8 6h12M8 12h12M8 18h12"}),(0,W.jsx)("path",{d:"M4 6h.01M4 12h.01M4 18h.01"})]})}function ua(t){return(0,W.jsxs)(Ze,{...t,children:[(0,W.jsx)("circle",{cx:"12",cy:"12",r:"3.2"}),(0,W.jsx)("path",{d:"M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"})]})}function cn(t){return(0,W.jsxs)(Ze,{...t,children:[(0,W.jsx)("path",{d:"M4 7h16M9 7V5h6v2M7 7l.7 12.2A1.8 1.8 0 0 0 9.5 21h5a1.8 1.8 0 0 0 1.8-1.8L17 7"}),(0,W.jsx)("path",{d:"M10 11v6M14 11v6"})]})}function pl(t){return(0,W.jsxs)(Ze,{...t,children:[(0,W.jsx)("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),(0,W.jsx)("path",{d:"M5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V5"})]})}function dn(t){return(0,W.jsx)(Ze,{...t,children:(0,W.jsx)("path",{d:"M12 5v14M5 12h14"})})}function pa(t){return(0,W.jsx)(Ze,{...t,children:(0,W.jsx)("path",{d:"M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"})})}function fa(t){return(0,W.jsx)(Ze,{...t,children:(0,W.jsx)("path",{d:"M5 12h14"})})}function fl(t){return(0,W.jsxs)(Ze,{...t,children:[(0,W.jsx)("path",{d:"M20 11a8 8 0 1 0-2.3 6.3"}),(0,W.jsx)("path",{d:"M20 4v7h-7"})]})}function gl(t){return(0,W.jsxs)(Ze,{...t,children:[(0,W.jsx)("path",{d:"M14 4h6v6M20 4l-9 9"}),(0,W.jsx)("path",{d:"M19 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"})]})}function ga({size:t=18}){return(0,W.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[(0,W.jsx)("path",{fill:"#4285F4",d:"M22.6 12.23c0-.78-.07-1.53-.2-2.25H12v4.26h5.94a5.08 5.08 0 0 1-2.2 3.33v2.77h3.56c2.08-1.92 3.3-4.74 3.3-8.11Z"}),(0,W.jsx)("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.77c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"}),(0,W.jsx)("path",{fill:"#FBBC05",d:"M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"}),(0,W.jsx)("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.2 1.64l3.15-3.15A10.97 10.97 0 0 0 12 1 11 11 0 0 0 2.18 7.06L5.84 9.9C6.71 7.3 9.14 5.38 12 5.38Z"})]})}function ma({size:t=18}){return(0,W.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[(0,W.jsx)("path",{fill:"currentColor",d:"M12 3 1.5 8.5 12 14l8.6-4.5v6.2h1.9V8.5L12 3Z",opacity:".9"}),(0,W.jsx)("path",{fill:"currentColor",d:"M6.2 11.4v4.1c0 2.2 2.6 4 5.8 4s5.8-1.8 5.8-4v-4.1L12 14.4l-5.8-3Z",opacity:".65"})]})}function ml(t){return(0,W.jsx)(Ze,{...t,children:(0,W.jsx)("path",{d:"m5 12 4.5 4.5L19 7"})})}function bl(t){return(0,W.jsxs)(Ze,{...t,children:[(0,W.jsx)("path",{d:"m15 4 1 2.2L18.2 7 16 8 15 10.2 14 8l-2.2-1L14 6.2 15 4Z"}),(0,W.jsx)("path",{d:"m5 19 8.5-8.5"}),(0,W.jsx)("path",{d:"m4 14 6 6"})]})}function xl(t){return(0,W.jsxs)(Ze,{...t,children:[(0,W.jsx)("path",{d:"M20 13 13 20a2 2 0 0 1-2.8 0L3 12.8V3h9.8L20 10.2a2 2 0 0 1 0 2.8Z"}),(0,W.jsx)("circle",{cx:"7.5",cy:"7.5",r:"1.2"})]})}function ba(t){return(0,W.jsxs)(Ze,{...t,children:[(0,W.jsx)("path",{d:"m14 4 6 6-9.5 9.5H5v-5L14 4Z"}),(0,W.jsx)("path",{d:"M12 21h9"}),(0,W.jsx)("path",{d:"M14 6.5 17.5 10"})]})}function xa(t){return(0,W.jsxs)(Ze,{...t,children:[(0,W.jsx)("path",{d:"M12 3a9 9 0 1 0 0 18h1.2a1.8 1.8 0 0 0 1.3-3l-.6-.7a1.6 1.6 0 0 1 1.2-2.7h1.6A4.3 4.3 0 0 0 21 10.3 7.7 7.7 0 0 0 12 3Z"}),(0,W.jsx)("circle",{cx:"7.5",cy:"11",r:"1"}),(0,W.jsx)("circle",{cx:"10",cy:"7.2",r:"1"}),(0,W.jsx)("circle",{cx:"15",cy:"7.2",r:"1"}),(0,W.jsx)("circle",{cx:"17",cy:"11",r:"1"})]})}function Ti(t){return(0,W.jsx)(Ze,{...t,children:(0,W.jsx)("path",{d:"M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"})})}function vl(t){return(0,W.jsx)(Ze,{...t,children:(0,W.jsx)("path",{d:"M3 8h5V3M21 8h-5V3M3 16h5v5M21 16h-5v5"})})}function va(t){return(0,W.jsxs)(Ze,{...t,children:[(0,W.jsx)("path",{d:"M12 3v12"}),(0,W.jsx)("path",{d:"m7 10 5 5 5-5"}),(0,W.jsx)("path",{d:"M4 18v2h16v-2"})]})}function yl(t){return(0,W.jsxs)(Ze,{...t,children:[(0,W.jsx)("path",{d:"M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"}),(0,W.jsx)("path",{d:"M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"})]})}function wl(t){return(0,W.jsxs)(Ze,{...t,children:[(0,W.jsx)("path",{d:"M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"}),(0,W.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})}function _l(t){return(0,W.jsxs)(Ze,{...t,children:[(0,W.jsx)("path",{d:"m3 3 18 18"}),(0,W.jsx)("path",{d:"M10.6 6.1A10.7 10.7 0 0 1 12 6c6 0 9.5 6 9.5 6a16.5 16.5 0 0 1-3.2 3.7"}),(0,W.jsx)("path",{d:"M6.2 6.7C3.9 8.4 2.5 12 2.5 12S6 18 12 18c1.3 0 2.5-.3 3.5-.8"}),(0,W.jsx)("path",{d:"M9.9 9.9a3 3 0 0 0 4.2 4.2"})]})}var gu="dsh-reader";var At="books",Wt="annotations",vt="assets",Mr="pdfTranslations",ya="reader-background",wa="book-collection:",kl="dsh-reader:settings:v1";var Dt=Object.freeze({settingsVersion:2,autoTranslate:!1,hideTranslations:!1,fontSize:18,lineHeight:1.85,tocWidth:260,readingMode:"scroll",pageAnimation:"slide",bookAnimation:"slide",showToc:!0,aiOpen:!1,theme:"auto",fontFamily:"serif",fontWeight:400,contentWidth:760,brightness:1,backgroundPreset:"paper",customBackground:"#fbf7ee",textTone:"auto",backgroundImageKey:"",backgroundImageOpacity:.26,backgroundImageBlur:0,annotationPanelOpen:!1}),Ro=Object.freeze([{id:"book",label:"\u4E66\u7C4D",hint:"EPUB / MOBI / TXT \u4E0E\u4E66\u7C4D\u578B PDF"},{id:"paper",label:"\u6587\u732E",hint:"\u8BBA\u6587\u3001\u62A5\u544A\u3001\u5B66\u672F PDF"},{id:"document",label:"\u6587\u6863",hint:"Markdown / HTML \u7B49\u77ED\u6587\u6863"}]),Ei=new Set(Ro.map(t=>t.id)),mu=new Set(["paper","white","sepia","green","night","custom"]),bu=new Set(["serif","sans","kai","system"]),xu=new Set(["scroll","book"]),vu=new Set(["slide","fade","push","flip"]),yu=new Set(["slide","cover","flip"]),wu=new Set([400,500,600]),_u=new Set(["auto","dark","light"]);function Nt(){return new Promise((t,e)=>{if(typeof indexedDB>"u"){e(new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 IndexedDB\uFF0C\u65E0\u6CD5\u4FDD\u5B58\u4E66\u67B6\u3002"));return}let r=indexedDB.open(gu,3);r.onupgradeneeded=()=>{let n=r.result;n.objectStoreNames.contains(At)||n.createObjectStore(At,{keyPath:"id"}).createIndex("lastOpenedAt","lastOpenedAt"),n.objectStoreNames.contains(Wt)||n.createObjectStore(Wt,{keyPath:"id"}).createIndex("bookId","bookId"),n.objectStoreNames.contains(vt)||n.createObjectStore(vt,{keyPath:"key"}),n.objectStoreNames.contains(Mr)||n.createObjectStore(Mr,{keyPath:"key"}).createIndex("bookId","bookId")},r.onsuccess=()=>t(r.result),r.onerror=()=>e(r.error??new Error("\u6253\u5F00\u4E66\u67B6\u6570\u636E\u5E93\u5931\u8D25\u3002")),r.onblocked=()=>e(new Error("\u4E66\u67B6\u6570\u636E\u5E93\u88AB\u53E6\u4E00\u4E2A\u9875\u9762\u5360\u7528\uFF0C\u8BF7\u5173\u95ED\u5176\u5B83 DSH \u9875\u9762\u540E\u91CD\u8BD5\u3002"))})}function rr(t){return new Promise((e,r)=>{t.oncomplete=()=>e(),t.onerror=()=>r(t.error??new Error("\u4E66\u67B6\u5199\u5165\u5931\u8D25\u3002")),t.onabort=()=>r(t.error??new Error("\u4E66\u67B6\u5199\u5165\u5DF2\u53D6\u6D88\u3002"))})}function Si(t){return new Promise((e,r)=>{t.onsuccess=()=>e(t.result),t.onerror=()=>r(t.error)})}var Ai=()=>IDBKeyRange.bound(wa,`${wa}\uFFFF`),Tl=t=>`${wa}${t}`;function Mn(t){let e=/\.([^./\\]+)$/u.exec(String(t??""));return e?e[1].toLowerCase():""}function Gr(t){switch(t){case"pdf":return"PDF";case"epub":return"EPUB";case"mobi":return"MOBI";case"azw":return"AZW";case"azw3":return"AZW3";case"txt":return"TXT";case"md":return"Markdown";case"html":return"HTML";default:return String(t??"\u6587\u4EF6").toUpperCase()}}function Mo(t){return Ro.find(e=>e.id===t)?.label??"\u672A\u5206\u7C7B"}function Ni(t){return["pdf","epub","mobi","azw","azw3","txt","md","markdown","html","htm"].includes(Mn(t))}function ku(t){let e=String(t??"");return e.length===0?0:(e.match(/[\u3400-\u9fff\uf900-\ufaff]/gu)??[]).length/e.length}function Ci(t={}){let e=String(t.format||Mn(t.title)||"").toLowerCase(),r=`${t.title||""} ${t.author||""}`;return e==="pdf"?/(?:^|\b)(book|novel|textbook|edition|volume|monograph|文集|全集|教材|小说|专著|丛书)(?:\b|$)/iu.test(r)||Number(t.size)>45*1024*1024?"book":"paper":["epub","mobi","azw","azw3","txt"].includes(e)?"book":"document"}async function Tu(t){if(!globalThis.crypto?.subtle){let r=2166136261,n=new Uint8Array(t);for(let o=0;o<n.length;o+=1)r^=n[o],r=Math.imul(r,16777619);return(r>>>0).toString(16).padStart(8,"0")}let e=await globalThis.crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(e)].map(r=>r.toString(16).padStart(2,"0")).join("")}async function Su(t){let e=await t.slice(0,Math.min(t.size,1048576)).arrayBuffer();return`${(await Tu(e)).slice(0,20)}-${t.size}-${String(t.name).replace(/[^\w.-]+/gu,"_").slice(-48)}`}async function Ii(){let t=await Nt();try{let n=t.transaction(At,"readonly").objectStore(At).index("lastOpenedAt").openCursor(null,"prev"),o=[];return await new Promise((a,i)=>{n.onsuccess=()=>{let s=n.result;if(!s){a();return}let l=s.value;o.push({id:l.id,title:l.title,author:l.author,format:l.format,size:l.size,addedAt:l.addedAt,lastOpenedAt:l.lastOpenedAt,progress:l.progress??null,language:l.language??"",cover:typeof l.cover=="string"?l.cover:"",category:Ei.has(l.category)?l.category:Ci(l),categoryManual:!!l.categoryManual}),s.continue()},n.onerror=()=>i(n.error)}),o}finally{t.close()}}async function _a(t){let e=await Nt();try{let n=e.transaction(At,"readonly").objectStore(At).get(t);return await new Promise((o,a)=>{n.onsuccess=()=>o(n.result??null),n.onerror=()=>a(n.error)})}finally{e.close()}}async function Sl(t,{title:e,author:r,language:n}={}){if(!Ni(t.name))throw new Error(`\u6682\u4E0D\u652F\u6301 .${Mn(t.name)||"\u672A\u77E5"} \u6587\u4EF6\u3002\u8BF7\u9009\u62E9 PDF / EPUB / MOBI / TXT / Markdown / HTML\u3002`);if(t.size>335544320)throw new Error(`\u6587\u4EF6\u8D85\u8FC7 ${Math.round(335544320/1024/1024)} MB\uFF0C\u6D4F\u89C8\u5668\u4E66\u67B6\u65E0\u6CD5\u5BB9\u7EB3\u3002`);let o=await Su(t),a=await _a(o),i=Date.now(),s=a?.id??o,l=Mn(t.name)==="markdown"?"md":Mn(t.name),d={title:String(e??a?.title??t.name.replace(/\.[^.]+$/u,"")).trim()||"\u672A\u547D\u540D\u6587\u6863",author:String(r??a?.author??"").trim(),language:String(n??a?.language??""),format:l,size:t.size},f={id:s,...d,category:a?.category&&Ei.has(a.category)?a.category:Ci(d),categoryManual:!!a?.categoryManual,cover:typeof a?.cover=="string"?a.cover:"",addedAt:a?.addedAt??i,lastOpenedAt:i,progress:a?.progress??null,blob:t},g=await Nt();try{let p=g.transaction(At,"readwrite");return p.objectStore(At).put(f),await rr(p),f}catch(p){throw p?.name==="QuotaExceededError"?new Error("\u6D4F\u89C8\u5668\u5B58\u50A8\u7A7A\u95F4\u5DF2\u6EE1\uFF0C\u65E0\u6CD5\u52A0\u5165\u4E66\u67B6\u3002\u8BF7\u5220\u9664\u4E00\u4E9B\u4E66\u540E\u91CD\u8BD5\u3002"):p}finally{g.close()}}async function io(t,e){let r=await Nt();try{let n=r.transaction(At,"readwrite"),o=n.objectStore(At),a=o.get(t),i=null;return a.onsuccess=()=>{a.result&&(i={...a.result,...e},o.put(i))},await rr(n),i}finally{r.close()}}async function El(t,e,{manual:r=!0}={}){if(!Ei.has(e))throw new Error("\u672A\u77E5\u7684\u4E66\u7C4D\u5206\u7C7B\u3002");return io(t,{category:e,categoryManual:r})}async function Al(){let t=await Ii(),e={book:0,paper:0,document:0},r=0;for(let n of t){if(n.categoryManual){e[n.category]=(e[n.category]||0)+1;continue}let o=Ci(n);e[o]=(e[o]||0)+1,o!==n.category&&(await io(n.id,{category:o,categoryManual:!1}),r+=1)}return{changed:r,counts:e}}async function Ri(t,e){return io(t,{lastOpenedAt:Date.now(),...e!==void 0?{progress:e}:{}})}async function Nl(){let t=await Nt();try{let e=t.transaction(vt,"readonly").objectStore(vt);return(await Si(e.getAll(Ai()))).sort((n,o)=>n.createdAt-o.createdAt)}finally{t.close()}}async function Cl({id:t,name:e,add:r=[],remove:n=[]}){let o=e==null?void 0:String(e).trim();if((o!==void 0||!t)&&(!o||o.length>60))throw new Error("\u4E66\u5355\u540D\u79F0\u987B\u4E3A 1\u201360 \u4E2A\u5B57\u7B26\u3002");let a=await Nt();try{let i=a.transaction([vt,At],"readwrite"),s=i.objectStore(vt),l=i.objectStore(At),d=[...new Set(r)],f=rr(i);f.catch(()=>{});let[g,p]=await Promise.all([Si(s.getAll(Ai())),Promise.all(d.map(N=>Si(l.getKey(N))))]),u=g.find(N=>N.id===t);if(t&&!u)throw new Error("\u8FD9\u4E2A\u4E66\u5355\u5DF2\u88AB\u5220\u9664\u3002");let T=o??u.name;if(g.some(N=>N.id!==t&&N.name.toLowerCase()===T.toLowerCase()))throw new Error("\u5DF2\u6709\u540C\u540D\u4E66\u5355\uFF0C\u8BF7\u6362\u4E00\u4E2A\u540D\u79F0\u3002");if(p.some(N=>N===void 0))throw new Error("\u90E8\u5206\u9009\u4E2D\u7684\u4E66\u5DF2\u4ECE\u4E66\u67B6\u5220\u9664\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u3002");let _=new Set(n),w=t??Fl("collection"),A={id:w,key:Tl(w),name:T,bookIds:[...new Set([...u?.bookIds??[],...p])].filter(N=>!_.has(N)),createdAt:u?.createdAt??Date.now()};return s.put(A),await f,A}finally{a.close()}}async function Il(t){let e=await Nt();try{let r=e.transaction(vt,"readwrite");r.objectStore(vt).delete(Tl(t)),await rr(r)}finally{e.close()}}async function Rl(t){let e=await Nt();try{let r=e.transaction([At,Wt,Mr,vt],"readwrite");r.objectStore(At).delete(t),r.objectStore(vt).delete(`pdf-translation:${t}`);let n=r.objectStore(vt).openCursor(Ai());n.onsuccess=()=>{let s=n.result;if(!s)return;let l=s.value;l.bookIds.includes(t)&&s.update({...l,bookIds:l.bookIds.filter(d=>d!==t)}),s.continue()};let o=r.objectStore(Mr).index("bookId").openKeyCursor(IDBKeyRange.only(t));o.onsuccess=()=>{let s=o.result;s&&(r.objectStore(Mr).delete(s.primaryKey),s.continue())};let i=r.objectStore(Wt).index("bookId").openKeyCursor(IDBKeyRange.only(t));i.onsuccess=()=>{let s=i.result;s&&(r.objectStore(Wt).delete(s.primaryKey),s.continue())},await rr(r)}finally{e.close()}}async function Ml(){let t=await Nt();try{let e=t.transaction([At,Wt,Mr,vt],"readwrite");e.objectStore(At).clear(),e.objectStore(Wt).clear(),e.objectStore(Mr).clear();let r=e.objectStore(vt).openKeyCursor();r.onsuccess=()=>{let n=r.result;if(n){let o=String(n.key);(o.startsWith("pdf-translation:")||o.startsWith(wa))&&e.objectStore(vt).delete(n.primaryKey),n.continue()}},await rr(e)}finally{t.close()}}async function Pl(t){let e=await Nt();try{let r=e.transaction(Mr,"readonly").objectStore(Mr).get(t);return await new Promise((n,o)=>{r.onsuccess=()=>n(r.result||null),r.onerror=()=>o(r.error)})}finally{e.close()}}async function Ol(t){let e=await Nt();try{let r=e.transaction([At,Mr],"readwrite"),n=r.objectStore(At).get(t.bookId);n.onsuccess=()=>{n.result&&r.objectStore(Mr).put({...t,updatedAt:Date.now()})},await rr(r)}finally{e.close()}}async function Ll(t){let e=await Nt();try{let r=e.transaction(vt,"readonly").objectStore(vt).get(`pdf-translation:${t}`);return await new Promise((n,o)=>{r.onsuccess=()=>n(r.result?.value||{}),r.onerror=()=>o(r.error)})}finally{e.close()}}async function Dl(t,e){let r=await Nt();try{let n=r.transaction([At,vt],"readwrite"),o=n.objectStore(At).get(t);o.onsuccess=()=>{o.result&&n.objectStore(vt).put({key:`pdf-translation:${t}`,value:e})},await rr(n)}finally{r.close()}}function Fl(t="a"){return globalThis.crypto?.randomUUID?`${t}-${crypto.randomUUID()}`:`${t}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}async function zl(t){let e=await Nt();try{let o=e.transaction(Wt,"readonly").objectStore(Wt).index("bookId").getAll(t);return(await new Promise((i,s)=>{o.onsuccess=()=>i(o.result??[]),o.onerror=()=>s(o.error)})).sort((i,s)=>{let l=Number.isFinite(i.page)?i.page:Number.MAX_SAFE_INTEGER,d=Number.isFinite(s.page)?s.page:Number.MAX_SAFE_INTEGER;if(l!==d)return l-d;let f=Number.isFinite(i.chapterIndex)?i.chapterIndex:Number.MAX_SAFE_INTEGER,g=Number.isFinite(s.chapterIndex)?s.chapterIndex:Number.MAX_SAFE_INTEGER;return f!==g?f-g:(i.createdAt||0)-(s.createdAt||0)})}finally{e.close()}}async function Bl(t){let e=Date.now(),r={...t,id:t.id||Fl(),createdAt:t.createdAt||e,updatedAt:e};if(!r.bookId)throw new Error("\u6279\u6CE8\u7F3A\u5C11\u4E66\u7C4D\u4FE1\u606F\u3002");if(!r.kind||!r.style)throw new Error("\u6279\u6CE8\u7F3A\u5C11\u7C7B\u578B\u3002");let n=await Nt();try{let o=n.transaction(Wt,"readwrite");return o.objectStore(Wt).put(r),await rr(o),r}finally{n.close()}}async function $l(t,e){let r=await Nt();try{let n=r.transaction(Wt,"readwrite"),o=n.objectStore(Wt),a=await new Promise((s,l)=>{let d=o.get(t);d.onsuccess=()=>s(d.result??null),d.onerror=()=>l(d.error)});if(!a)return await rr(n),null;let i={...a,...e,id:a.id,updatedAt:Date.now()};return o.put(i),await rr(n),i}finally{r.close()}}async function Hl(t){let e=await Nt();try{let r=e.transaction(Wt,"readwrite");r.objectStore(Wt).delete(t),await rr(r)}finally{e.close()}}async function Ul(t){if(!t||!t.size)throw new Error("\u80CC\u666F\u56FE\u7247\u4E3A\u7A7A\u3002");if(t.size>16777216)throw new Error(`\u80CC\u666F\u56FE\u7247\u8D85\u8FC7 ${Math.round(16777216/1024/1024)} MB\uFF0C\u8BF7\u9009\u62E9\u66F4\u5C0F\u7684\u56FE\u7247\u3002`);let e=await Nt();try{let r=e.transaction(vt,"readwrite");return r.objectStore(vt).put({key:ya,blob:t,type:t.type||"image/*",size:t.size,updatedAt:Date.now()}),await rr(r),ya}finally{e.close()}}async function Wl(){let t=await Nt();try{let r=t.transaction(vt,"readonly").objectStore(vt).get(ya);return(await new Promise((o,a)=>{r.onsuccess=()=>o(r.result??null),r.onerror=()=>a(r.error)}))?.blob??null}finally{t.close()}}async function jl(){let t=await Nt();try{let e=t.transaction(vt,"readwrite");e.objectStore(vt).delete(ya),await rr(e)}finally{t.close()}}function Rn(t,e,r,n){let o=Number(t);return Number.isFinite(o)?Math.max(e,Math.min(r,o)):n}function Eu(t,e){return/^#[0-9a-f]{6}$/iu.test(String(t))?String(t):e}function Gl(){try{let t=localStorage.getItem(kl);if(!t)return{...Dt};let e=JSON.parse(t),n=(Number(e.settingsVersion)||1)>=2&&typeof e.autoTranslate=="boolean"?e.autoTranslate:!1;return{...Dt,...e,settingsVersion:2,autoTranslate:n,hideTranslations:!!e.hideTranslations,fontSize:Rn(e.fontSize,13,34,Dt.fontSize),lineHeight:Rn(e.lineHeight,1.35,2.4,Dt.lineHeight),tocWidth:Rn(e.tocWidth,180,520,Dt.tocWidth),readingMode:e.readingMode==="page"?"book":xu.has(e.readingMode)?e.readingMode:Dt.readingMode,pageAnimation:vu.has(e.pageAnimation)?e.pageAnimation:Dt.pageAnimation,bookAnimation:yu.has(e.bookAnimation)?e.bookAnimation:Dt.bookAnimation,fontFamily:bu.has(e.fontFamily)?e.fontFamily:Dt.fontFamily,fontWeight:wu.has(Number(e.fontWeight))?Number(e.fontWeight):Dt.fontWeight,contentWidth:Rn(e.contentWidth,520,1600,Dt.contentWidth),brightness:Rn(e.brightness,.6,1.2,Dt.brightness),backgroundPreset:mu.has(e.backgroundPreset)?e.backgroundPreset:Dt.backgroundPreset,customBackground:Eu(e.customBackground,Dt.customBackground),textTone:_u.has(e.textTone)?e.textTone:Dt.textTone,backgroundImageKey:typeof e.backgroundImageKey=="string"?e.backgroundImageKey:"",backgroundImageOpacity:Rn(e.backgroundImageOpacity,0,.85,Dt.backgroundImageOpacity),backgroundImageBlur:Rn(e.backgroundImageBlur,0,12,Dt.backgroundImageBlur),annotationPanelOpen:!!e.annotationPanelOpen}}catch{return{...Dt}}}function ql(t){try{localStorage.setItem(kl,JSON.stringify(t))}catch{}}function Xl(t){let e=Number(t)||0;return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:e<1024*1024*1024?`${(e/1024/1024).toFixed(1)} MB`:`${(e/1024/1024/1024).toFixed(2)} GB`}function Mi(t){if(!t)return"";let e=Date.now()-Number(t);return e<6e4?"\u521A\u521A":e<36e5?`${Math.floor(e/6e4)} \u5206\u949F\u524D`:e<864e5?`${Math.floor(e/36e5)} \u5C0F\u65F6\u524D`:e<7*864e5?`${Math.floor(e/864e5)} \u5929\u524D`:new Date(t).toLocaleDateString("zh-CN")}function Vl(t){let e=String(t??"").replace(/\s+/gu,"");if(e.length<40)return!1;let r=ku(e),n=(e.match(/[A-Za-zÀ-ÖØ-öø-ÿ\u0400-\u04ff]/gu)??[]).length/e.length;return r<.18&&n>.45}var nr=Mt(require("react"),1);var me=require("react/jsx-runtime"),Pr=t=>t.title||"\u672A\u547D\u540D\u6587\u6863";function Pi(t,e){return`${t.title||""} ${t.author||""}`.toLowerCase().includes(e)}function Au({book:t}){let[e,r]=nr.default.useState(!1);return t.cover&&!e?(0,me.jsx)("img",{src:t.cover,alt:"",loading:"lazy",decoding:"async",onError:()=>r(!0)}):(0,me.jsx)("span",{className:"dshr-collection__spine",children:Gr(t.format)})}function Kl({folder:t,expanded:e,onToggle:r,onOpen:n,onRead:o}){let a=nr.default.useId(),i=nr.default.useId();return(0,me.jsxs)("article",{className:"dshr-collection","data-collection-id":t.id,children:[(0,me.jsxs)("button",{type:"button",className:"dshr-collection__open","aria-label":`\u6253\u5F00\u4E66\u5355 ${t.name}`,"aria-describedby":i,onClick:n,children:[(0,me.jsxs)("span",{className:"dshr-collection__top",children:[(0,me.jsx)("span",{className:"dshr-collection__icon",children:(0,me.jsx)(pa,{size:17})}),(0,me.jsxs)("span",{className:"dshr-collection__heading",children:[(0,me.jsx)("strong",{title:t.name,children:t.name}),(0,me.jsxs)("small",{id:i,children:[t.system?"\u9ED8\u8BA4\u5206\u7C7B":"\u81EA\u5EFA\u4E66\u5355"," \xB7 ",t.books.length," \u672C"]})]}),(0,me.jsx)(ao,{size:16})]}),t.books.length?(0,me.jsx)("span",{className:"dshr-collection__covers",children:t.books.slice(0,4).map(s=>(0,me.jsxs)("span",{className:"dshr-collection__sample",children:[(0,me.jsx)("span",{className:"dshr-collection__cover",children:(0,me.jsx)(Au,{book:s},s.cover)}),(0,me.jsx)("span",{className:"dshr-collection__title",title:Pr(s),children:Pr(s)})]},s.id))}):(0,me.jsx)("span",{className:"dshr-collection__empty",children:"\u6682\u672A\u6536\u5F55\u4E66\u7C4D"})]}),t.books.length>0&&(0,me.jsxs)("button",{type:"button",className:"dshr-collection__peek",onClick:r,"aria-expanded":e,"aria-controls":a,children:[e?"\u6536\u8D77\u4E66\u540D":`\u9884\u89C8\u5168\u90E8 ${t.books.length} \u672C`," ",(0,me.jsx)(ul,{size:13})]}),t.books.length>0&&(0,me.jsx)("ul",{className:"dshr-collection__preview",id:a,hidden:!e,"aria-label":`${t.name}\u4E66\u540D\u6E05\u5355`,children:e&&t.books.map(s=>(0,me.jsx)("li",{children:(0,me.jsxs)("button",{type:"button",onClick:()=>o(s),children:[(0,me.jsx)("span",{children:Pr(s)}),(0,me.jsx)("small",{children:Gr(s.format)})]})},s.id))})]})}function Yl({action:t,books:e,collections:r,onClose:n,onCreate:o,onSave:a,onDelete:i}){let s=nr.default.useRef(null),l=nr.default.useRef(!1),[d,f]=nr.default.useState(!1),[g,p]=nr.default.useState(""),[u,T]=nr.default.useState(t.collection?.name??""),[_,w]=nr.default.useState(""),A=t.collection?.bookIds??[],[N,v]=nr.default.useState(()=>new Set(t.bookIds??A)),[I,C]=nr.default.useState(""),E=nr.default.useId(),L=t.kind==="add",P=t.kind==="delete",x=L?"\u52A0\u5165\u4E66\u5355":P?"\u5220\u9664\u4E66\u5355":t.collection?"\u7F16\u8F91\u4E66\u5355":"\u65B0\u5EFA\u4E66\u5355",M=_.trim().toLowerCase(),F=!L&&!P?e.filter(U=>Pi(U,M)):[];nr.default.useLayoutEffect(()=>{let U=s.current;return U.showModal(),()=>U.close()},[]);async function te(U){if(U.preventDefault(),!l.current){l.current=!0,f(!0),p("");try{P?await i(t.collection.id):L?await a({id:I,add:t.bookIds}):await a({id:t.collection?.id,name:u,add:[...N].filter(re=>!A.includes(re)),remove:A.filter(re=>!N.has(re))}),n()}catch(re){p(re?.message||"\u4E66\u5355\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002")}finally{l.current=!1,f(!1)}}}return(0,me.jsx)("dialog",{ref:s,className:"dshr-modal dshr-collection-dialog","aria-labelledby":E,onCancel:U=>{U.preventDefault(),l.current||n()},children:(0,me.jsxs)("form",{onSubmit:te,children:[(0,me.jsx)("h3",{id:E,children:x}),P?(0,me.jsxs)("p",{children:["\u5220\u9664\u300C",t.collection.name,"\u300D\u540E\uFF0C\u91CC\u9762\u7684\u4E66\u4ECD\u53EF\u5728\u5168\u90E8\u6587\u6863\u4E2D\u6253\u5F00\uFF0C\u8FDB\u5EA6\u4E0E\u6279\u6CE8\u4F1A\u4FDD\u7559\u3002"]}):L?(0,me.jsxs)("label",{className:"dshr-collection-dialog__field",children:[(0,me.jsxs)("span",{children:["\u5C06 ",t.bookIds.length," \u672C\u4E66\u52A0\u5165"]}),(0,me.jsxs)("select",{value:I,onChange:U=>C(U.target.value),disabled:d,required:!0,children:[(0,me.jsx)("option",{value:"",children:"\u9009\u62E9\u81EA\u5EFA\u4E66\u5355"}),r.map(U=>(0,me.jsxs)("option",{value:U.id,children:[U.name," \xB7 ",U.bookIds.length," \u672C"]},U.id))]})]}):(0,me.jsxs)(me.Fragment,{children:[(0,me.jsxs)("label",{className:"dshr-collection-dialog__field",children:[(0,me.jsx)("span",{children:"\u4E66\u5355\u540D\u79F0"}),(0,me.jsx)("input",{value:u,onChange:U=>T(U.target.value),placeholder:"\u4F8B\u5982\uFF1A\u8BBA\u6587\u5F85\u8BFB",maxLength:60,disabled:d,required:!0})]}),(0,me.jsxs)("div",{className:"dshr-collection-dialog__listbar",children:[(0,me.jsx)("strong",{children:"\u6536\u5F55\u4E66\u7C4D"}),(0,me.jsxs)("span",{children:[N.size," \u672C\u5DF2\u9009"]})]}),e.length>0&&(0,me.jsxs)("label",{className:"dshr-library__search dshr-collection-dialog__search",children:[(0,me.jsx)(Io,{size:14}),(0,me.jsx)("input",{type:"search",placeholder:"\u641C\u7D22\u4E66\u540D\u3001\u4F5C\u8005","aria-label":"\u641C\u7D22\u53EF\u52A0\u5165\u7684\u4E66\u7C4D",value:_,onChange:U=>w(U.target.value)})]}),F.length?(0,me.jsx)("div",{className:"dshr-collection-dialog__choices",children:F.map(U=>(0,me.jsxs)("label",{children:[(0,me.jsx)("input",{type:"checkbox",checked:N.has(U.id),disabled:d,onChange:re=>{let ie=re.target.checked;v(z=>{let ne=new Set(z);return ie?ne.add(U.id):ne.delete(U.id),ne})}}),(0,me.jsxs)("span",{children:[Pr(U),(0,me.jsx)("small",{children:[Gr(U.format),U.author].filter(Boolean).join(" \xB7 ")})]})]},U.id))}):(0,me.jsx)("p",{children:e.length?"\u6CA1\u6709\u5339\u914D\u7684\u4E66\u7C4D\u3002":"\u53EF\u4EE5\u5148\u521B\u5EFA\u7A7A\u4E66\u5355\uFF0C\u5BFC\u5165\u4E66\u7C4D\u540E\u518D\u52A0\u5165\u3002"})]}),g&&(0,me.jsx)("p",{className:"dshr-collection-dialog__error",role:"alert",children:g}),(0,me.jsxs)("div",{className:"dshr-modal__actions dshr-collection-dialog__actions",children:[L&&(0,me.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:d,onClick:()=>o(t.bookIds),children:[(0,me.jsx)(dn,{size:15})," \u65B0\u5EFA\u4E66\u5355"]}),(0,me.jsx)("button",{type:"button",className:"dshr-btn",disabled:d,onClick:n,children:"\u53D6\u6D88"}),(0,me.jsxs)("button",{type:"submit",className:`dshr-btn ${P?"dshr-btn--danger":"dshr-btn--primary"}`,disabled:d||(L?!I:!P&&!u.trim()),children:[P&&(0,me.jsx)(cn,{size:14}),d?"\u6B63\u5728\u4FDD\u5B58\u2026":P?"\u5220\u9664\u4E66\u5355":L?"\u52A0\u5165":"\u4FDD\u5B58\u4E66\u5355"]})]})]})})}var H=require("react/jsx-runtime");function Zl(t){let e=t.progress;return e?typeof e.page=="number"&&typeof e.pages=="number"&&e.pages>0?Math.max(0,Math.min(100,e.page/e.pages*100)):typeof e.percent=="number"?Math.max(0,Math.min(100,e.percent)):typeof e.chapter=="number"&&typeof e.chapters=="number"&&e.chapters>0?Math.max(0,Math.min(100,(e.chapter+1)/e.chapters*100)):0:0}var Nu={book:"paper",paper:"document",document:"book"};function Cu({book:t,onOpen:e,onDelete:r,onCycleCategory:n,onAdd:o,onRemove:a,selection:i,onToggle:s}){let l=Zl(t),d=[Gr(t.format),t.author||"",Xl(t.size)].filter(Boolean).join(" \xB7 ");return(0,H.jsxs)("article",{className:`dshr-book-card${i?" is-selecting":""}${i?.has(t.id)?" is-selected":""}`,children:[(0,H.jsxs)("button",{type:"button",className:"dshr-book","aria-pressed":i?i.has(t.id):void 0,"aria-label":i?`\u9009\u62E9 ${Pr(t)}`:`\u6253\u5F00 ${Pr(t)}`,onClick:()=>i?s(t.id):e(t),children:[(0,H.jsx)("span",{className:"dshr-book__media",children:t.cover?(0,H.jsx)("img",{className:"dshr-book__cover",src:t.cover,alt:"",loading:"lazy",decoding:"async"}):(0,H.jsx)("span",{className:"dshr-book__spine",children:Gr(t.format)})}),(0,H.jsxs)("span",{className:"dshr-book__body",children:[(0,H.jsx)("span",{className:"dshr-book__title",children:Pr(t)}),(0,H.jsx)("span",{className:"dshr-book__meta",children:d}),(0,H.jsxs)("span",{className:"dshr-book__foot",children:[(0,H.jsx)("span",{children:t.lastOpenedAt?`\u9605\u8BFB\u4E8E ${Mi(t.lastOpenedAt)}`:Mi(t.addedAt)}),(0,H.jsx)("span",{children:l>0?`${Math.round(l)}%`:"\u672A\u5F00\u59CB"})]}),(0,H.jsx)("span",{className:"dshr-book__progress","aria-hidden":"true",children:(0,H.jsx)("i",{style:{"--p":`${l}%`}})})]}),i&&(0,H.jsx)("span",{className:"dshr-book__selected","aria-hidden":"true",children:i.has(t.id)&&(0,H.jsx)(ml,{size:14})})]}),!i&&(0,H.jsxs)("div",{className:"dshr-book__badges",children:[(0,H.jsxs)("button",{type:"button",className:`dshr-book__category is-${t.category||"document"}`,title:`\u9ED8\u8BA4\u5206\u7C7B\uFF1A${Mo(t.category)}${t.categoryManual?"\uFF08\u624B\u52A8\uFF09":"\uFF08\u81EA\u52A8\uFF09"} \xB7 \u70B9\u51FB\u5207\u6362`,onClick:()=>n(t),children:[(0,H.jsx)(xl,{size:11})," ",Mo(t.category)]}),(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--ghost dshr-book__add","aria-label":`\u5C06 ${Pr(t)} \u52A0\u5165\u4E66\u5355`,onClick:()=>o([t.id]),children:[(0,H.jsx)(dn,{size:13})," \u52A0\u5165\u4E66\u5355"]}),a?(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost","aria-label":`\u4ECE\u6B64\u4E66\u5355\u79FB\u51FA ${Pr(t)}`,title:"\u4ECE\u6B64\u4E66\u5355\u79FB\u51FA",onClick:()=>a([t.id]),children:(0,H.jsx)(fa,{size:14})}):(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost dshr-book__delete","aria-label":`\u4ECE\u4E66\u67B6\u5220\u9664 ${Pr(t)}`,title:"\u4ECE\u4E66\u67B6\u5220\u9664",onClick:()=>r(t),children:(0,H.jsx)(cn,{size:14})})]})]})}function Ql({books:t,collections:e,onCollectionsChange:r,loading:n,resumeBook:o,onResume:a,importing:i,organizing:s,categoryFilter:l,onCategoryFilter:d,onAutoOrganize:f,onImport:g,onOpen:p,onDelete:u,onCycleCategory:T,onSettings:_,onOnlineImport:w}){let A=or.default.useRef(null),[N,v]=or.default.useState(!1),[I,C]=or.default.useState(""),[E,L]=or.default.useState(null),[P,x]=or.default.useState(null),[M,F]=or.default.useState(null),[te,U]=or.default.useState(""),re=or.default.useRef(0),ie=or.default.useRef(null),z=or.default.useRef(null),ne=or.default.useRef(!1),$=or.default.useMemo(()=>{let h=new Map(t.map(b=>[b.id,b])),c=new Map(Ro.map(b=>[b.id,[]])),S=[...t].sort((b,Y)=>b.addedAt-Y.addedAt);for(let b of S)c.get(b.category)?.push(b);return[...e.map(b=>({...b,books:b.bookIds.map(Y=>h.get(Y)).filter(Boolean)})),...Ro.map(b=>({id:b.id,name:b.label,system:!0,books:c.get(b.id)}))]},[t,e]),G=$.find(h=>h.id===l),se=G?.books??t,D=I.trim().toLowerCase(),pe=D?se.filter(h=>Pi(h,D)):se,be=P?se.filter(h=>P.has(h.id)).map(h=>h.id):[];or.default.useLayoutEffect(()=>{ne.current&&(ne.current=!1,z.current?.focus({preventScroll:!0}))},[l]);function _e(h){ne.current=!0,d(h),C(""),x(null),L(null),U(""),ie.current?.scrollTo({top:0})}let V=(h=[])=>F({kind:"edit",bookIds:h}),Oe=h=>e.length?F({kind:"add",bookIds:h}):V(h);async function Ie(h){let c=await Cl(h);return r(S=>S.some(b=>b.id===c.id)?S.map(b=>b.id===c.id?c:b):[...S,c]),c}async function Se(h){try{await Ie({id:G.id,remove:h}),x(null),U(`\u5DF2\u4ECE\u300C${G.name}\u300D\u79FB\u51FA ${h.length} \u672C\u3002`)}catch(c){U(c?.message||"\u79FB\u51FA\u4E66\u5355\u5931\u8D25\u3002")}}async function De(h){await Il(h),r(c=>c.filter(S=>S.id!==h)),l===h&&_e("all"),U("\u4E66\u5355\u5DF2\u5220\u9664\u3002")}let He=()=>A.current?.click(),xt=h=>{h.preventDefault(),re.current=0,v(!1);let c=[...h.dataTransfer?.files??[]].filter(S=>Ni(S.name));if(c.length===0){g([],{rejected:!0});return}g(c)};return(0,H.jsxs)("div",{className:"dshr-library",ref:ie,children:[(0,H.jsxs)("div",{className:"dshr-library__inner",children:[(0,H.jsxs)("header",{className:"dshr-hero",children:[(0,H.jsxs)("div",{children:[(0,H.jsxs)("div",{className:"dshr-hero__eyebrow",children:[(0,H.jsx)(_i,{size:15})," DSH READER \xB7 LIBRARY"]}),(0,H.jsx)("h1",{children:"\u6211\u7684\u4E66\u67B6"}),(0,H.jsx)("p",{children:"\u7528\u4E66\u5355\u6574\u7406\u4E66\u7C4D\u3001\u8BBA\u6587\u548C\u9605\u8BFB\u8D44\u6599\u3002"})]}),(0,H.jsxs)("div",{className:"dshr-hero__actions",children:[(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:He,disabled:i,children:[i?(0,H.jsx)("span",{className:"dshr-spinner"}):(0,H.jsx)(dn,{size:15}),i?"\u6B63\u5728\u52A0\u5165\u4E66\u67B6\u2026":"\u5BFC\u5165\u6587\u6863"]}),(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:w,title:"\u4ECE\u53E4\u767B\u5821\u3001Standard Ebooks\u3001arXiv \u7B49\u516C\u5F00\u6765\u6E90\u4E0B\u8F7D\u5E76\u6253\u5F00",children:[(0,H.jsx)(va,{size:15})," \u516C\u5F00\u4E66\u5E93\u5BFC\u5165"]}),(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:f,disabled:s||t.length===0,title:"\u6309\u6587\u4EF6\u7C7B\u578B\u4E0E\u5143\u6570\u636E\uFF0C\u628A\u4E66\u67B6\u6574\u7406\u6210\u4E66\u7C4D / \u6587\u732E / \u6587\u6863",children:[s?(0,H.jsx)("span",{className:"dshr-spinner"}):(0,H.jsx)(bl,{size:15}),s?"\u6574\u7406\u4E2D\u2026":"\u4E00\u952E\u6574\u7406"]}),(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:_,title:"\u9605\u8BFB\u4E0E\u4E66\u67B6\u8BBE\u7F6E",children:[(0,H.jsx)(ua,{size:15})," \u8BBE\u7F6E"]})]})]}),o?(0,H.jsxs)("button",{type:"button",className:"dshr-resume",onClick:()=>a(o),children:[(0,H.jsx)("span",{className:"dshr-resume__mark",children:(0,H.jsx)(_i,{size:19})}),(0,H.jsxs)("span",{className:"dshr-resume__body",children:[(0,H.jsx)("span",{className:"dshr-resume__eyebrow",children:"\u7EE7\u7EED\u4E0A\u6B21\u9605\u8BFB"}),(0,H.jsx)("strong",{children:o.title||"\u4E0A\u6B21\u6253\u5F00\u7684\u6587\u6863"}),(0,H.jsxs)("span",{className:"dshr-resume__meta",children:[Gr(o.format),o.progress?.page?` \xB7 \u7B2C ${o.progress.page}${o.progress.pages?` / ${o.progress.pages}`:""} \u9875`:"",` \xB7 ${Math.round(Zl(o))}%`]})]}),(0,H.jsx)("span",{className:"dshr-resume__arrow",children:"\u2192"})]}):null,!G&&!n&&(0,H.jsxs)("section",{className:"dshr-collections","aria-label":"\u4E66\u5355\u6587\u4EF6\u5939",children:[(0,H.jsxs)("div",{className:"dshr-collections__bar",children:[(0,H.jsx)("h2",{ref:z,tabIndex:-1,children:"\u4E66\u5355\u6587\u4EF6\u5939"}),(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>V(),children:[(0,H.jsx)(dn,{size:15})," \u65B0\u5EFA\u4E66\u5355"]})]}),(0,H.jsx)("div",{className:"dshr-collections__grid",children:$.map(h=>(0,H.jsx)(Kl,{folder:h,expanded:E===h.id,onToggle:()=>L(c=>c===h.id?null:h.id),onOpen:()=>_e(h.id),onRead:p},h.id))})]}),!G&&(0,H.jsxs)("section",{className:`dshr-drop${t.length?" is-compact":""}${N?" is-over":""}`,onDragEnter:h=>{h.preventDefault(),re.current+=1,v(!0)},onDragOver:h=>h.preventDefault(),onDragLeave:()=>{re.current=Math.max(0,re.current-1),re.current===0&&v(!1)},onDrop:xt,"aria-label":"\u62D6\u653E\u6587\u6863\u4EE5\u5BFC\u5165",children:[(0,H.jsx)("div",{className:"dshr-drop__mark",children:(0,H.jsx)(hl,{size:24})}),(0,H.jsxs)("div",{className:"dshr-drop__body",children:[(0,H.jsx)("div",{className:"dshr-drop__title",children:"\u62D6\u4E00\u4EFD\u6587\u732E\u6216\u4E66\u5230\u8FD9\u91CC\uFF0C\u6216\u70B9\u51FB\u5BFC\u5165"}),(0,H.jsx)("div",{className:"dshr-drop__hint",children:"\u6587\u4EF6\u53EA\u4FDD\u5B58\u5728\u672C\u673A\u6D4F\u89C8\u5668\u4E66\u67B6\u4E2D\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\uFF1B\u7FFB\u8BD1\u4EC5\u53D1\u9001\u5F53\u524D\u9009\u4E2D\u7684\u6BB5\u843D\u3002"}),!t.length&&(0,H.jsx)("div",{className:"dshr-drop__formats",children:["PDF","EPUB","MOBI","AZW3","TXT","Markdown","HTML"].map(h=>(0,H.jsx)("span",{className:"dshr-chip",children:h},h))})]}),(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:He,disabled:i,children:"\u9009\u62E9\u6587\u4EF6"})]}),G&&(0,H.jsxs)("div",{className:"dshr-collection-context",children:[(0,H.jsxs)("nav",{"aria-label":"\u4E66\u67B6\u4F4D\u7F6E",children:[(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--ghost",onClick:()=>_e("all"),children:[(0,H.jsx)(oo,{size:15})," \u8FD4\u56DE\u4E66\u67B6"]}),(0,H.jsxs)("span",{ref:z,tabIndex:-1,"aria-current":"page",children:[(0,H.jsx)(pa,{size:16})," ",G.name]})]}),!G.system&&(0,H.jsxs)("div",{className:"dshr-collection-context__actions",children:[(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>F({kind:"edit",collection:G}),children:"\u7F16\u8F91\u4E66\u5355"}),(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--ghost",onClick:()=>F({kind:"delete",collection:G}),children:[(0,H.jsx)(cn,{size:15})," \u5220\u9664\u4E66\u5355"]})]})]}),(0,H.jsxs)("div",{className:"dshr-library__bar",children:[(0,H.jsx)("h2",{children:G?"\u4E66\u5355\u5185\u5BB9":"\u5168\u90E8\u6587\u6863"}),(0,H.jsxs)("div",{className:"dshr-library__search",children:[(0,H.jsx)(Io,{size:14}),(0,H.jsx)("input",{type:"search",value:I,onChange:h=>C(h.target.value),placeholder:G?"\u641C\u7D22\u6B64\u4E66\u5355":"\u641C\u7D22\u4E66\u540D\u3001\u4F5C\u8005","aria-label":G?"\u641C\u7D22\u6B64\u4E66\u5355":"\u641C\u7D22\u4E66\u67B6"})]}),(0,H.jsxs)("span",{children:[pe.length," / ",se.length," \u672C"]}),se.length>0&&(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline","aria-pressed":!!P,onClick:()=>x(h=>h?null:new Set),children:P?"\u9000\u51FA\u591A\u9009":"\u591A\u9009"})]}),(0,H.jsx)("div",{className:"dshr-library__notice",role:"status",children:te}),P&&(0,H.jsxs)("div",{className:"dshr-collection-selection","aria-label":"\u6279\u91CF\u4E66\u5355\u64CD\u4F5C",children:[(0,H.jsxs)("span",{children:["\u5DF2\u9009 ",be.length," \u672C"]}),(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",disabled:!pe.length,onClick:()=>x(h=>new Set([...h,...pe.map(c=>c.id)])),children:"\u5168\u9009\u5F53\u524D\u7ED3\u679C"}),(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:!be.length,onClick:()=>Oe(be),children:"\u52A0\u5165\u4E66\u5355"}),G&&!G.system&&(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",disabled:!be.length,onClick:()=>{Se(be)},children:"\u4ECE\u6B64\u4E66\u5355\u79FB\u51FA"})]}),n?(0,H.jsxs)("div",{className:"dshr-loading",style:{minHeight:180},children:[(0,H.jsx)("div",{className:"dshr-loading__ring"}),(0,H.jsx)("span",{children:"\u6B63\u5728\u6253\u5F00\u4E66\u67B6\u2026"})]}):pe.length===0?(0,H.jsxs)("div",{className:"dshr-empty-books",children:[D?`\u6CA1\u6709\u5339\u914D\u300C${I.trim()}\u300D\u7684\u6587\u6863\u3002`:G?`\u300C${G.name}\u300D\u8FD8\u6CA1\u6709\u4E66\u3002`:"\u5BFC\u5165\u6587\u6863\u540E\uFF0C\u5C31\u53EF\u4EE5\u628A\u5B83\u4EEC\u52A0\u5165\u4E66\u5355\u3002",G&&!G.system&&!D&&(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>F({kind:"edit",collection:G}),children:[(0,H.jsx)(dn,{size:15})," \u6DFB\u52A0\u4E66\u7C4D"]})]}):(0,H.jsx)("div",{className:"dshr-books",children:pe.map(h=>(0,H.jsx)(Cu,{book:h,onOpen:p,onDelete:u,onCycleCategory:c=>T(c,Nu[c.category||"document"]),onAdd:Oe,onRemove:G&&!G.system?Se:void 0,selection:P,onToggle:c=>x(S=>{let b=new Set(S);return b.has(c)?b.delete(c):b.add(c),b})},h.id))}),(0,H.jsxs)("footer",{className:"dshr-library__foot",children:[(0,H.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,H.jsx)(no,{size:14})," \u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1"]}),(0,H.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,H.jsx)(xn,{size:14})," \u9009\u4E2D\u95EE AI"]}),(0,H.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,H.jsx)(Io,{size:14})," Google / \u5B66\u672F\u641C\u7D22"]}),(0,H.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,H.jsx)(cl,{size:14})," \u672C\u5730\u4E66\u67B6 \xB7 \u8FDB\u5EA6\u4E0E\u6279\u6CE8\u81EA\u52A8\u4FDD\u5B58"]})]})]}),M&&(0,H.jsx)(Yl,{action:M,books:t,collections:e,onClose:()=>F(null),onCreate:V,onDelete:De,onSave:async h=>{let c=await Ie(h);x(null),U(M.kind==="add"?`\u5DF2\u52A0\u5165\u300C${c.name}\u300D\u3002`:`\u5DF2\u4FDD\u5B58\u300C${c.name}\u300D\u3002`)}},`${M.kind}:${M.collection?.id||""}`),(0,H.jsx)("input",{ref:A,type:"file",multiple:!0,accept:".pdf,.epub,.mobi,.azw,.azw3,.txt,.md,.markdown,.html,.htm,application/pdf,application/epub+zip,text/plain,text/markdown,text/html",className:"dshr-sr-only",tabIndex:-1,onChange:h=>{let c=[...h.target.files??[]];h.target.value="",c.length>0&&g(c)}})]})}var bt=Mt(require("react"),1);var Iu=Object.freeze({"content-type":"application/json","x-dsh-reader":"1"}),qr=class extends Error{constructor(e,r="REQUEST_FAILED",n=0){super(e),this.name="ReaderApiError",this.code=r,this.status=n}};async function ec(t){let e=null;try{e=await t.json()}catch{}return new qr(e?.error?.message||e?.message||`\u7FFB\u8BD1\u670D\u52A1\u4E0D\u53EF\u7528\uFF08HTTP ${t.status}\uFF09\u3002`,e?.error?.code||e?.code||"REQUEST_FAILED",t.status)}async function Oi(t,e,{signal:r}={}){let n;try{n=await fetch(t,{method:"POST",headers:Iu,body:JSON.stringify(e),signal:r,credentials:"same-origin"})}catch(o){throw o?.name==="AbortError"?o:new qr("\u65E0\u6CD5\u8FDE\u63A5\u5230 DSH \u4E3B\u8FDB\u7A0B\uFF0C\u8BF7\u786E\u8BA4 DSH \u6B63\u5728\u8FD0\u884C\u3002","NETWORK",0)}if(!n.ok)throw await ec(n);return n}function Pn(t){return t?.name==="AbortError"}async function so(t,e={}){let r=t.map(i=>({id:String(i.id),text:String(i.text??"")})).filter(i=>i.text.trim()!=="");if(r.length===0)return{};let n=await Oi("/dsh-reader/ai/translate",{segments:r,context:String(e.context??"").slice(0,1200),title:String(e.title??"").slice(0,300),glossary:String(e.glossary??"").slice(0,4e3),...e.expectedModel?{expectedModel:e.expectedModel}:{}},{signal:e.signal}),o=await n.json().catch(()=>null);if(!o||typeof o!="object"||!Array.isArray(o.translations))throw new qr("\u7FFB\u8BD1\u670D\u52A1\u8FD4\u56DE\u4E86\u65E0\u6CD5\u8BC6\u522B\u7684\u7ED3\u679C\u3002","BAD_RESPONSE",n.status);let a={};for(let i of o.translations)i&&typeof i.id=="string"&&typeof i.zh=="string"&&i.zh.trim()!==""&&(a[i.id]=i.zh);if(Object.keys(a).length===0)throw new qr("\u7FFB\u8BD1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u53EF\u7528\u8BD1\u6587\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","EMPTY_TRANSLATION",n.status);return e.includeMetadata?{translations:a,model:o.model,promptVersion:o.promptVersion}:a}async function tc({signal:t}={}){let e=await fetch("/dsh-reader/ai/status",{signal:t,credentials:"same-origin",headers:{"x-dsh-reader":"1"},cache:"no-store"});if(!e.ok)throw await ec(e);return e.json()}function Jl(t){let e=t.split(/\r?\n/u).filter(r=>r.startsWith("data:")).map(r=>r.slice(5).trimStart()).join(`
`);if(e==="")return null;try{return JSON.parse(e)}catch{return{type:"delta",text:e}}}async function Li(t,{onDelta:e,onMeta:r}={}){let n=await Oi("/dsh-reader/ai/chat",t,{signal:t.signal});if(!n.body)throw new qr("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u6D41\u5F0F\u54CD\u5E94\u3002","NO_STREAM",n.status);let o=n.body.getReader(),a=new TextDecoder,i="",s=!1,l=null;try{for(;;){let{value:d,done:f}=await o.read();if(f)break;i+=a.decode(d,{stream:!0});let g=i.search(/\r?\n\r?\n/u);for(;g!==-1;){let p=i.slice(0,g),u=i.slice(g).match(/^\r?\n\r?\n/u)?.[0]??`

`;i=i.slice(g+u.length);let T=Jl(p);T&&(T.type==="delta"&&typeof T.text=="string"?e?.(T.text):T.type==="error"?l=new qr(T.message||"AI \u56DE\u7B54\u5931\u8D25\u3002",T.code||"AI_FAILED"):T.type==="done"?s=!0:r?.(T)),g=i.search(/\r?\n\r?\n/u)}}if(i.trim()!==""){let d=Jl(i);d?.type==="delta"&&typeof d.text=="string"&&e?.(d.text),d?.type==="error"&&(l=new qr(d.message||"AI \u56DE\u7B54\u5931\u8D25\u3002",d.code||"AI_FAILED")),d?.type==="done"&&(s=!0)}}finally{o.releaseLock?.()}if(l)throw l}async function rc(t,{signal:e}={}){let r=await Oi("/dsh-reader/import/fetch",{url:String(t||"")},{signal:e}),n=await r.blob();if(!n.size)throw new qr("\u6765\u6E90\u8FD4\u56DE\u4E86\u7A7A\u6587\u4EF6\u3002","EMPTY",0);let o="book",a=r.headers.get("x-dsh-reader-filename");if(a)try{o=decodeURIComponent(a)}catch{o=a}return new File([n],o,{type:n.type||"application/octet-stream"})}var hn=Mt(require("react"),1);var ic=Object.freeze([{id:"yellow",label:"\u9EC4",value:"#f5d76e"},{id:"green",label:"\u7EFF",value:"#8fd18b"},{id:"pink",label:"\u7C89",value:"#f3a6c0"},{id:"blue",label:"\u84DD",value:"#94c9f0"}]),Po=Object.freeze([{id:"thin",label:"\u7EC6",value:4},{id:"medium",label:"\u4E2D",value:9},{id:"wide",label:"\u5BBD",value:16}]),sc=Object.freeze([{id:"ink",label:"\u58A8",value:"#3f3a33"},{id:"red",label:"\u6731",value:"#c2543f"},{id:"amber",label:"\u8D6D",value:"#a9772b"},{id:"blue",label:"\u84DD",value:"#3f6f97"}]),lo=Object.freeze({highlight:"\u8367\u5149\u7B14",underline:"\u4E0B\u5212\u7EBF",note:"\u4FBF\u7B7E"}),co=Object.freeze([{id:"highlight",label:lo.highlight},{id:"underline",label:lo.underline},{id:"note",label:lo.note}]);function Di(t){return lo[t]||"\u6807\u6CE8"}var Ea="data-anno-block",lc=".dshr-block__body";function Fi(t){return t?t.ownerDocument?t.ownerDocument:t.nodeType===9?t:typeof globalThis<"u"&&globalThis.document?globalThis.document:null:null}function Or(t,e=0){let r=typeof t=="number"?t:Number(t);return Number.isFinite(r)?Math.trunc(r):e}function jt(t,e,r){return Math.min(r,Math.max(e,t))}function ka(t,e=5){let r=10**e;return Math.round(t*r)/r}function Sa(t){return String(t??"").replace(/\s+/gu," ").trim()}function Ru(t){if(!t||t.nodeType!==1)return!1;let e=t.tagName;if(e==="SCRIPT"||e==="STYLE"||e==="NOSCRIPT"||e==="TEXTAREA"||e==="SVG"||e==="CANVAS")return!0;let r=t.classList;return!!(r&&(r.contains("dshr-translation")||r.contains("dshr-anno-ignore"))||typeof t.hasAttribute=="function"&&t.hasAttribute("data-anno-ignore"))}function zi(t){let e=[],r=[],n=new Map,o=0;if(!t)return{nodes:e,starts:r,positions:n,total:o,text:""};let a=s=>{for(let l=s.firstChild;l;l=l.nextSibling)if(l.nodeType===3){let d=l.nodeValue||"";n.set(l,e.length),e.push(l),r.push(o),o+=d.length}else l.nodeType===1&&!Ru(l)&&a(l)};a(t);let i="";for(let s=0;s<e.length;s+=1)i+=e[s].nodeValue||"";return{nodes:e,starts:r,positions:n,total:o,text:i}}function Mu(t,e,r){if(!t||!e)return null;let n;try{n=t.createRange();let o=e.nodeType===3?e.nodeValue?e.nodeValue.length:0:e.childNodes?e.childNodes.length:0;return n.setStart(e,jt(Or(r),0,o)),n.collapse(!0),n}catch{return null}}function nc(t,e,r,n){if(!r)return 0;if(r.nodeType===3){let o=t.positions.get(r),a=r.nodeValue||"";if(o!==void 0)return t.starts[o]+jt(Or(n),0,a.length)}if(r===e||e.contains(r)){let o=Fi(e),a=Mu(o,r,n);if(!a)return 0;let i=o.createRange();for(let s=0;s<t.nodes.length;s+=1)try{if(i.setStart(t.nodes[s],0),i.collapse(!0),a.compareBoundaryPoints(0,i)<=0)return t.starts[s]}catch{}return t.total}try{return e.compareDocumentPosition(r)&4?t.total:0}catch{return 0}}function oc(t,e){if(!t.nodes.length)return null;let r=jt(Or(e),0,t.total);for(let o=0;o<t.nodes.length;o+=1){let a=t.nodes[o].nodeValue?t.nodes[o].nodeValue.length:0,i=t.starts[o];if(r<i+a)return{node:t.nodes[o],offset:r-i};if(r===i+a&&a>0)return{node:t.nodes[o],offset:a}}let n=t.nodes[t.nodes.length-1];return{node:n,offset:n.nodeValue?n.nodeValue.length:0}}function Pu(t,e,r){if(!t)return null;let n=zi(t);if(!n.nodes.length||n.total===0)return null;let o=jt(Or(e),0,n.total),a=jt(Or(r),0,n.total);a<o&&([o,a]=[a,o]);let i=oc(n,o),s=oc(n,a),l=Fi(t);if(!l||!i||!s)return null;try{let d=l.createRange();return d.setStart(i.node,i.offset),d.setEnd(s.node,s.offset),d}catch{return null}}function cc(t){let e=[];if(!t)return e;try{let r=typeof t.getClientRects=="function"?t.getClientRects():null;if(r&&typeof r.length=="number")for(let n=0;n<r.length;n+=1){let o=r[n];o&&e.push(o)}}catch{}if(e.length===0)try{let r=typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():null;r&&(r.width||r.height)&&e.push(r)}catch{}return e}function Ou(t){let e=1/0,r=1/0,n=-1/0,o=-1/0;for(let a=0;a<t.length;a+=1){let i=t[a],s=Number(i.width)||0,l=Number(i.height)||0;if(!s&&!l)continue;let d=Number(i.left)||0,f=Number(i.top)||0;e=Math.min(e,d),r=Math.min(r,f),n=Math.max(n,d+s),o=Math.max(o,f+l)}return Number.isFinite(e)?{left:e,top:r,width:n-e,height:o-r,right:n,bottom:o}:{left:0,top:0,width:0,height:0,right:0,bottom:0}}function Lu(t,e,r){let n=e,o=r;for(;n<o&&/\s/u.test(t[n]);)n+=1;for(;o>n&&/\s/u.test(t[o-1]);)o-=1;return{start:n,end:o,text:t.slice(n,o)}}function dc(t,e){if(!t||!e||!e.rangeCount)return null;let r=Fi(t);if(!r)return null;let n;try{n=e.getRangeAt(0)}catch{return null}if(!n)return null;try{if(!t.contains(n.commonAncestorContainer))return null}catch{return null}let o=[],a;try{a=t.querySelectorAll(`[${Ea}]`)}catch{return null}for(let s=0;s<a.length;s+=1){let l=a[s],d=l.getAttribute(Ea);if(!d)continue;let f=l.classList&&l.classList.contains("dshr-block__body")?l:l.querySelector(lc);if(!f)continue;let g=zi(f);if(g.total===0)continue;let p;try{p=r.createRange(),p.selectNodeContents(f)}catch{continue}let u=!1,T=!1,_=!1,w=!1;try{u=n.compareBoundaryPoints(3,p)>=0,T=n.compareBoundaryPoints(1,p)<=0,_=n.compareBoundaryPoints(0,p)<0,w=n.compareBoundaryPoints(2,p)>0}catch{continue}if(u||T)continue;let A=_?0:nc(g,f,n.startContainer,n.startOffset),N=w?g.total:nc(g,f,n.endContainer,n.endOffset),v=jt(Or(A),0,g.total),I=jt(Or(N),0,g.total);if(I<=v)continue;let C=Lu(g.text,v,I);C.end<=C.start||o.push({blockId:d,start:C.start,end:C.end,text:C.text})}if(o.length===0)return null;let i="";for(let s=0;s<o.length;s+=1)s>0&&(i+=`
`),i+=o[s].text;return i=i.replace(/\u00a0/gu," ").trim(),i?{text:i,rect:Ou(cc(n)),ranges:o}:null}function hc(t,e){if(!t||!e)return[];let r;try{r=e.getBoundingClientRect()}catch{return[]}if(!r)return[];let n=Number(r.width)||0,o=Number(r.height)||0;if(n<=0||o<=0)return[];let a=Number(r.left)||0,i=Number(r.top)||0,s=a+n,l=i+o,d=cc(t);if(d.length===0)return[];let f=[];for(let g=0;g<d.length;g+=1){let p=d[g];if(!p)continue;let u=Number(p.width)||0,T=Number(p.height)||0;if(u<=0||T<=0)continue;let _=Number(p.left)||0,w=Number(p.top)||0,A=Math.max(_,a),N=Math.max(w,i),v=Math.min(_+u,s),I=Math.min(w+T,l);v-A<.5||I-N<.5||f.push({x:ka(jt((A-a)/n,0,1)),y:ka(jt((N-i)/o,0,1)),w:ka(jt((v-A)/n,0,1)),h:ka(jt((I-N)/o,0,1))})}return f.sort((g,p)=>g.y-p.y||g.x-p.x),f}function Du(t){let e=String(t??""),r="",n=[],o=-1;for(let a=0;a<e.length;a+=1){let i=e[a];if(/\s/u.test(i)){o<0&&r.length>0&&(o=a);continue}o>=0&&(n.push(o),r+=" ",o=-1),n.push(a),r+=i}return{text:r,map:n}}function Fu(t,e,r,n,o){let a=t.length,i=r[n];if(i===void 0)return null;let s=n+o<r.length?r[n+o]:a;return s>i?{start:i,end:s}:null}function ac(t,e){if(!t||!e)return null;let r=String(t),n=String(e).trim();if(!n)return null;let o=r.indexOf(n);if(o>=0)return{start:o,end:o+n.length};let a=Du(r),i=Sa(n);if(!i)return null;let s=a.text.indexOf(i);if(s>=0){let d=Fu(r,a.text,a.map,s,i.length);if(d)return d}let l=Math.min(i.length,48);for(let d=l;d>=12;d-=4){let f=i.slice(0,d),g=a.text.indexOf(f);if(g<0)continue;let p=a.map[g];if(p===void 0)continue;let u=Math.min(r.length,p+i.length);if(u>p)return{start:p,end:u}}return null}function zu(t,e,r){let n=Sa(t);if(!n)return!1;let o=[],a=Sa(e);a&&o.push(a);let i=Sa(r);return i&&i!==a&&o.push(i),o.length===0?!0:o.some(s=>n===s?!0:n.length<8||s.length<8?!1:n.includes(s)||s.includes(n))}function Ta(t,e,r){let n=jt(Or(e),0,t.index.total),o=jt(Or(r),0,t.index.total);if(o<=n)return null;let a=Pu(t.body,n,o);return a?{blockId:t.blockId,start:n,end:o,text:t.index.text.slice(n,o),range:a}:null}function Bu(t){let e=[];if(!t)return e;let r;try{r=t.querySelectorAll(`[${Ea}]`)}catch{return e}for(let n=0;n<r.length;n+=1){let o=r[n],a=o.getAttribute(Ea);if(!a)continue;let i=o.classList&&o.classList.contains("dshr-block__body")?o:o.querySelector(lc);if(!i)continue;let s=zi(i);s.total!==0&&e.push({blockId:a,body:i,index:s})}return e}function uc(t,e){let r=[];if(!t||!e)return r;let n=Bu(t);if(n.length===0)return r;let o=new Map;for(let s=0;s<n.length;s+=1)o.has(n[s].blockId)||o.set(n[s].blockId,n[s]);let a=typeof e.quote=="string"?e.quote:"",i=Array.isArray(e.ranges)?e.ranges:[];for(let s=0;s<i.length;s+=1){let l=i[s];if(!l||typeof l!="object")continue;let d=o.get(String(l.blockId==null?"":l.blockId));if(!d)continue;let f=jt(Or(l.start),0,d.index.total),g=jt(Or(l.end),0,d.index.total),p=g>f;if(p){let T=d.index.text.slice(f,g);if(zu(T,l.text,a)){let _=Ta(d,f,g);_&&r.push(_);continue}}let u=ac(d.index.text,a||l.text);if(u){let T=Ta(d,u.start,u.end);T&&r.push(T);continue}if(p){let T=Ta(d,f,g);T&&r.push(T)}}if(r.length===0&&a){let s=a.split(/\n+/u).map(f=>f.trim()).filter(f=>f.length>=2),l=s.length>0?s:[a.trim()],d=new Set;for(let f=0;f<n.length;f+=1){let g=n[f];if(d.has(g.blockId))continue;let p=1/0,u=-1/0;for(let _=0;_<l.length;_+=1){let w=ac(g.index.text,l[_]);w&&(p=Math.min(p,w.start),u=Math.max(u,w.end))}if(!Number.isFinite(p)||u<=p)continue;d.add(g.blockId);let T=Ta(g,p,u);T&&r.push(T)}}return r}var pb=require("react"),St=require("react/jsx-runtime");function On({size:t=14}){return(0,St.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,St.jsx)("path",{d:"M9.4 2.6 5.1 6.9l-.7 2.7 2.7-.7 4.4-4.3-2.1-2Z",stroke:"currentColor",strokeWidth:"1.35",strokeLinejoin:"round"}),(0,St.jsx)("path",{d:"m4.4 9.6-2.1 2.1c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0l2.1-2.1",stroke:"currentColor",strokeWidth:"1.35",strokeLinecap:"round"}),(0,St.jsx)("path",{d:"M3 13.5h7.4",stroke:"currentColor",strokeWidth:"1.35",strokeLinecap:"round",opacity:".55"})]})}function Aa({size:t=14}){return(0,St.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,St.jsx)("path",{d:"M4.2 3v4.6a3.8 3.8 0 0 0 7.6 0V3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,St.jsx)("path",{d:"M3.4 13.3c2-.7 4.2-.8 9.2-.2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function vn({size:t=12}){return(0,St.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,St.jsx)("path",{d:"M3.5 2.7h9v6.2l-3.2 3.4H3.5z",fill:"currentColor",fillOpacity:".9",stroke:"currentColor",strokeWidth:"1",strokeLinejoin:"round"}),(0,St.jsx)("path",{d:"M9.3 12.3V9h3.1",stroke:"var(--dshr-anno-paper, #ffffff)",strokeWidth:"1.15",strokeLinejoin:"round"}),(0,St.jsx)("path",{d:"M5.4 5.5h5.1M5.4 7.4h3.4",stroke:"var(--dshr-anno-paper, #ffffff)",strokeWidth:"1",strokeLinecap:"round",opacity:".8"})]})}function pc({size:t=56}){return(0,St.jsxs)("svg",{width:t,height:t,viewBox:"0 0 56 56",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,St.jsx)("rect",{x:"8.5",y:"9",width:"33",height:"38",rx:"4",stroke:"currentColor",strokeWidth:"1.8",opacity:".55"}),(0,St.jsx)("path",{d:"M15 18h20M15 24h20M15 30h13",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",opacity:".42"}),(0,St.jsx)("path",{d:"M34 28.5h11.5v9.2l-4.6 5H34z",fill:"currentColor",fillOpacity:".16",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),(0,St.jsx)("path",{d:"M40.9 42.7v-5h4.6",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),(0,St.jsx)("path",{d:"M36.8 33.6h5.6M36.8 36.4h3.8",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",opacity:".7"})]})}function Na({size:t=13}){return(0,St.jsx)("svg",{width:t,height:t,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",focusable:"false",children:(0,St.jsx)("path",{d:"m3.4 3.4 7.2 7.2M10.6 3.4 3.4 10.6",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})})}function fc(t,e,r){let n=Number(t);return Number.isFinite(n)?Math.min(r,Math.max(e,n)):e}function Ca(t){let e=Number(t);return .36+(fc(Number.isFinite(e)?e:9,4,16)-4)/12*.34}function Ia(t){return(1-fc(t,.1,.95))*.82}function Ra(t){let e=String(t??""),r=2166136261;for(let n=0;n<e.length;n+=1)r^=e.charCodeAt(n),r=Math.imul(r,16777619);return r>>>0}function $u(t,e=0){let r=(Number(t)^Math.imul((Number(e)||0)+1,2654435769))>>>0;return r^=r<<13,r>>>=0,r^=r>>>17,r^=r<<5,r>>>=0,r/4294967296}function Ma(t,e){let r=Math.max(4,Number(e)||4),n=f=>$u(t,f)*2-1,o=3.7+n(1)*.5,a=3.1+n(2)*.45,i=3.7+n(3)*.45,s=3.3+n(4)*.55,l=r*.54,d=Math.max(1,r-.6);return[`M0.6 ${o.toFixed(2)}`,`C${(r*.18).toFixed(2)} ${a.toFixed(2)}`,`${(r*.34).toFixed(2)} ${a.toFixed(2)}`,`${l.toFixed(2)} ${i.toFixed(2)}`,`S${(r*.82).toFixed(2)} ${s.toFixed(2)}`,`${d.toFixed(2)} ${(s-.25).toFixed(2)}`].join(" ")}function Pa(t){if(!t)return"\u6279\u6CE8";let e=typeof t.note=="string"?t.note.trim():"";if(e)return e.length>34?`${e.slice(0,34)}\u2026`:e;let r=typeof t.quote=="string"?t.quote.trim():"";return r?r.length>34?`${r.slice(0,34)}\u2026`:r:"\u6279\u6CE8"}var Ln=require("react/jsx-runtime");function Hu(t,e){let r=Math.min(t.left+t.width,e.left+e.width)-Math.max(t.left,e.left),n=Math.min(t.top+t.height,e.top+e.height)-Math.max(t.top,e.top);if(r<=0||n<=0)return 0;let o=r*n,a=Math.min(t.width*t.height,e.width*e.height);return a>0?o/a:0}function Uu(t){let e=[];if(!t)return e;try{let n=typeof t.getClientRects=="function"?t.getClientRects():null;if(n&&typeof n.length=="number")for(let o=0;o<n.length;o+=1){let a=n[o];if(!a)continue;let i=Number(a.width)||0,s=Number(a.height)||0;i<=0||s<=0||e.push({left:Number(a.left)||0,top:Number(a.top)||0,width:i,height:s})}}catch{}if(e.length===0)try{let n=typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():null;n&&(Number(n.width)||0)>0&&(Number(n.height)||0)>0&&e.push({left:Number(n.left)||0,top:Number(n.top)||0,width:Number(n.width)||0,height:Number(n.height)||0})}catch{}if(e.length<=1)return e;let r=[];for(let n=0;n<e.length;n+=1){let o=e[n],a=!1;for(let i=0;i<r.length;i+=1)if(Hu(o,r[i])>.55){a=!0;break}a||r.push(o)}return r}function Wu(t,e){return!t||t.kind&&t.kind!=="flow"?!1:!e||t.chapterId==null?!0:t.chapterId===e}function ju(t,e){if(t===e)return!0;if(!t||!e||t.length!==e.length)return!1;for(let r=0;r<t.length;r+=1){let n=t[r],o=e[r];if(n.type!==o.type||n.key!==o.key||n.annotationId!==o.annotationId||n.x!==o.x||n.y!==o.y||n.width!==o.width||n.height!==o.height||n.color!==o.color||n.path!==o.path||n.isNote!==o.isNote||n.label!==o.label)return!1}return!0}function gc({containerRef:t,annotations:e,chapterId:r,onOpenAnnotation:n,layoutVersion:o}){let a=hn.default.useRef(null),i=hn.default.useRef(0),s=hn.default.useRef({annotations:e,chapterId:r,onOpenAnnotation:n});s.current={annotations:e,chapterId:r,onOpenAnnotation:n};let[l,d]=hn.default.useState({height:0,marks:[]}),f=hn.default.useCallback(()=>{let p=a.current,u=t&&t.current?t.current:null;if(!p||!u)return;let T;try{T=p.getBoundingClientRect()}catch{return}if(!T)return;let{annotations:_,chapterId:w}=s.current,A=Array.isArray(_)?_:[],N=u.clientWidth||T&&u.getBoundingClientRect().width||0,v=0,I=null;try{if(I=u.querySelector(".dshr-content__inner"),!I){for(let L=u.firstElementChild;L;L=L.nextElementSibling)if(!(L===p||L.classList&&L.classList.contains("dshr-anno-layer"))){I=L;break}}}catch{I=null}if(I)try{let L=I.getBoundingClientRect();v=Math.max(0,L.top-T.top+L.height)}catch{v=0}let C=[];for(let L=0;L<A.length;L+=1){let P=A[L];if(!Wu(P,w))continue;let x;try{x=uc(u,P)}catch{continue}if(!Array.isArray(x)||x.length===0)continue;let M=P.style==="underline"||P.style==="note"?P.style:"highlight",F=P.color||"#f5d76e",te=Ra(`${P.id||""}|${P.createdAt||0}`),U=Ca(P.width),re=P.id==null?"":String(P.id),ie=M==="note"||typeof P.note=="string"&&P.note.trim().length>0,z=Pa(P),ne=null;for(let $=0;$<x.length;$+=1){let G=x[$],se=Uu(G&&G.range);for(let D=0;D<se.length;D+=1){let pe=se[D],be=pe.left-T.left,_e=pe.top-T.top,V=`${re}:${$}:${D}`;if(ne={x:be,y:_e,width:pe.width,height:pe.height},M==="underline"){let Oe=pe.width+2;C.push({type:"underline",key:`u:${V}`,annotationId:re,x:be-1,y:_e+pe.height-7.2,width:Oe,height:8,color:F,path:Ma(te,Oe),isNote:!1,label:z})}else{let Oe=Math.max(3.5,pe.height*U);C.push({type:"band",key:`b:${V}`,annotationId:re,x:be-1,y:_e+pe.height*Ia(U),width:pe.width+2,height:Oe,color:F,path:"",isNote:M==="note",label:z})}v=Math.max(v,_e+pe.height+8)}}if(ie&&ne){let $=Math.min(Math.max(2,ne.x+ne.width+3),Math.max(2,N-21));C.push({type:"note",key:`n:${re}`,annotationId:re,x:$,y:Math.max(0,ne.y-1),width:19,height:19,color:F,path:"",isNote:!0,label:z})}}let E=Math.max(0,Math.ceil(v+8));d(L=>L.height===E&&ju(L.marks,C)?L:{height:E,marks:C})},[t]),g=hn.default.useCallback(()=>{if(typeof window>"u"||i.current)return;let p=()=>{i.current=0,f()};i.current=typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(p):window.setTimeout(p,16)},[f]);return hn.default.useEffect(()=>{let p=t&&t.current?t.current:null,u=a.current;if(!p||!u||typeof window>"u")return;let T=[];g(),T.push(window.setTimeout(g,80));let _=null;if(typeof ResizeObserver<"u"){let E=new ResizeObserver(()=>g());try{E.observe(p);let L=u.parentElement;L&&L!==p&&E.observe(L);let P=p.querySelector(".dshr-content__inner");P&&!P.contains(u)&&E.observe(P)}catch{}_=E}let w=null;if(typeof MutationObserver<"u"){w=new MutationObserver(E=>{for(let L=0;L<E.length;L+=1){let P=E[L].target;if(!u.contains(P)){g();return}}});try{w.observe(p,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["class","style","data-rendered"]})}catch{}}let A=()=>g(),N=E=>{u.contains(E.target)||g()};window.addEventListener("resize",A),p.addEventListener("load",N,!0);let v=p.contains(u);v||p.addEventListener("scroll",A,{passive:!0});let I=null,C=typeof document<"u"?document.fonts:null;if(C&&typeof C.ready=="object"&&typeof C.ready.then=="function"&&C.ready.then(()=>g()).catch(()=>{}),C&&typeof C.addEventListener=="function"){I=()=>g();try{C.addEventListener("loadingdone",I)}catch{I=null}}return()=>{for(let E=0;E<T.length;E+=1)window.clearTimeout(T[E]);if(i.current&&(typeof window.cancelAnimationFrame=="function"?window.cancelAnimationFrame(i.current):window.clearTimeout(i.current),i.current=0),_&&_.disconnect(),w&&w.disconnect(),window.removeEventListener("resize",A),p.removeEventListener("load",N,!0),v||p.removeEventListener("scroll",A),C&&I)try{C.removeEventListener("loadingdone",I)}catch{}}},[t,g]),hn.default.useEffect(()=>{if(g(),typeof window>"u")return;let p=window.setTimeout(g,40);return()=>window.clearTimeout(p)},[e,r,o,g]),(0,Ln.jsx)("div",{ref:a,className:"dshr-anno-layer",style:l.height>0?{height:`${l.height}px`}:void 0,"data-anno-layer":"flow",children:l.marks.map(p=>{if(p.type==="note")return(0,Ln.jsx)("button",{type:"button",className:"dshr-anno-note-btn",style:{left:`${p.x}px`,top:`${p.y}px`,"--dshr-anno-color":p.color},"data-anno-id":p.annotationId,title:p.label?`\u67E5\u770B\u6279\u6CE8\uFF1A${p.label}`:"\u67E5\u770B\u6279\u6CE8","aria-label":p.label?`\u67E5\u770B\u6279\u6CE8\uFF1A${p.label}`:"\u67E5\u770B\u6279\u6CE8",onMouseDown:u=>u.preventDefault(),onClick:()=>{let u=s.current.onOpenAnnotation;typeof u=="function"&&u(p.annotationId)},children:(0,Ln.jsx)(vn,{size:12})},p.key);if(p.type==="underline"){let u=Math.max(2,Math.round(p.width*100)/100);return(0,Ln.jsx)("svg",{className:"dshr-anno-underline",style:{left:`${p.x}px`,top:`${p.y}px`,width:`${p.width}px`,height:`${p.height}px`,"--dshr-anno-color":p.color},viewBox:`0 0 ${u} 8`,preserveAspectRatio:"none","data-anno-id":p.annotationId,"aria-hidden":"true",focusable:"false",children:(0,Ln.jsx)("path",{d:p.path})},p.key)}return(0,Ln.jsx)("span",{className:`dshr-anno-band${p.isNote?" dshr-anno-band--note":""}`,style:{left:`${p.x}px`,top:`${p.y}px`,width:`${p.width}px`,height:`${p.height}px`,"--dshr-anno-color":p.color},"data-anno-id":p.annotationId,"aria-hidden":"true"},p.key)})})}function Oo(t){let e=t.scrollHeight-t.clientHeight;return e>0?Math.max(0,Math.min(1,t.scrollTop/e)):0}function Oa(t,e,r){return{chapter:t,chapters:e,scrollRatio:r,percent:(t+r)/e*100}}function mc(t,e){let r=Math.max(1,e-48-56),n=t.filter(a=>Number.isFinite(a.top)&&a.bottom>a.top).toSorted((a,i)=>a.top-i.top),o=[0];for(let a of n)for(;a.bottom>o.at(-1)+48+r+.5;){let i=o.at(-1),s=a.top-48;o.push(s>i+.5?s:i+r)}return o}function Gu(t,e){let r=0,n=t.length-1;for(;r<n;){let o=Math.ceil((r+n)/2);t[o]<=e+.5?r=o:n=o-1}return r}function bc(){let t=[0],e=0;return{get page(){return e+1},get pages(){return t.length},get top(){return t[e]},get starts(){return t},replace(r,n){t=r.length?r:[0],e=Gu(t,Math.max(0,n||0))},turn(r){let n=Math.max(0,Math.min(t.length-1,e+Math.sign(r)));return n===e?!1:(e=n,!0)}}}function xc(t,e){let r=t.getBoundingClientRect(),n=[],o=(s,l)=>{s.height<2||s.width<.1||n.push({top:s.top-r.top+t.scrollTop,bottom:s.bottom-r.top+t.scrollTop,...l})},a=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let s=a.nextNode();s;s=a.nextNode()){if(!s.nodeValue?.trim()||s.parentElement.closest('[aria-hidden="true"],script,style'))continue;let l=document.createRange();l.selectNodeContents(s);for(let d of l.getClientRects())o(d,{node:s})}for(let s of e.querySelectorAll("img,svg,hr,video,canvas"))o(s.getBoundingClientRect(),{element:s,atomic:!0});n.sort((s,l)=>s.top-l.top);let i=[];for(let s of n){let l=i.at(-1),d=l&&Math.min(l.bottom,s.bottom)-Math.max(l.top,s.top);l&&!l.atomic&&!s.atomic&&d>Math.min(l.bottom-l.top,s.bottom-s.top)*.5?l.bottom=Math.max(l.bottom,s.bottom):i.push({...s})}return i}function Bi(t,e,r){let n=e+48,o=t.find(_=>_.bottom>n+.5)||t.at(-1);if(!o)return null;let a=o.element||o.node?.parentElement.closest(".dshr-block__body,.dshr-translation,.dshr-chapter__kicker")||o.node?.parentElement,i=r.getBoundingClientRect(),s=a?.getBoundingClientRect(),l=s?.height?(n-(s.top-i.top+r.scrollTop))/s.height:0;if(!o.node)return{element:a,ratio:l};let d=document.createRange(),f=1,g=o.node.length;for(;f<g;){let _=f+g>>1;d.setStart(o.node,0),d.setEnd(o.node,_);let w=d.getClientRects(),A=w[w.length-1];(A?A.top-i.top+r.scrollTop:-1/0)<o.top-1?f=_+1:g=_}let p=Math.max(0,f-1),u=p,T=document.createTreeWalker(a,NodeFilter.SHOW_TEXT);for(let _=T.nextNode();_&&_!==o.node;_=T.nextNode())u+=_.length;return{node:o.node,offset:p,textOffset:u,element:a,ratio:l}}function vc(t,e,r){if(!t)return r;let n=e.getBoundingClientRect();if(!t.node?.isConnected&&t.element?.isConnected&&Number.isFinite(t.textOffset)){let o=t.textOffset,a=document.createTreeWalker(t.element,NodeFilter.SHOW_TEXT);for(let i=a.nextNode();i;i=a.nextNode()){if(o<i.length){t.node=i,t.offset=o;break}o-=i.length}}if(t.node?.isConnected&&e.contains(t.node)&&t.node.length){let o=document.createRange(),a=Math.min(t.offset,t.node.length-1);o.setStart(t.node,a),o.setEnd(t.node,a+1);let i=o.getBoundingClientRect();if(i.height)return i.top-n.top+e.scrollTop-48}if(t.element?.isConnected&&e.contains(t.element)){let o=t.element.getBoundingClientRect();return o.top-n.top+e.scrollTop+Math.max(0,t.ratio)*o.height-48}return r}var Pe=require("react/jsx-runtime"),$i=new Set(["heading","paragraph","list-item","quote"]),qu=6;function Xu(t,e){let r=t.style.scrollBehavior;t.style.scrollBehavior="auto",t.scrollTop=e,t.style.scrollBehavior=r}function Vu(t,e){return`${t.title||""} \xB7 ${e?.title||""}`}var Ku=bt.default.memo(function({block:e}){if(e.kind==="image")return(0,Pe.jsxs)("figure",{children:[e.src?(0,Pe.jsx)("img",{src:e.src,alt:e.alt||"",loading:"lazy",decoding:"async"}):(0,Pe.jsx)("div",{className:"dshr-translation",children:"\u56FE\u7247\u672A\u80FD\u8F7D\u5165"}),e.caption?(0,Pe.jsx)("figcaption",{children:e.caption}):null]});if(e.kind==="table")return(0,Pe.jsx)("div",{dangerouslySetInnerHTML:{__html:e.html||""}});if(e.kind==="code")return(0,Pe.jsx)("pre",{className:"dshr-block__code",children:e.text||""});if(e.kind==="rule")return(0,Pe.jsx)("hr",{});if(e.kind==="heading"){let r=`h${Math.max(1,Math.min(6,e.level||2))}`;return(0,Pe.jsx)(r,{dangerouslySetInnerHTML:{__html:e.html||""}})}return(0,Pe.jsx)("p",{dangerouslySetInnerHTML:{__html:e.html||""}})});function Yu({state:t,onRetry:e}){return t?t.status==="loading"?(0,Pe.jsx)("div",{className:"dshr-translation",children:(0,Pe.jsxs)("span",{className:"dshr-translation__loading",children:[(0,Pe.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u7FFB\u8BD1\u2026"]})}):t.status==="error"?(0,Pe.jsxs)("div",{className:"dshr-translation is-error",children:[(0,Pe.jsx)("p",{children:t.error||"\u8FD9\u6BB5\u7FFB\u8BD1\u5931\u8D25\u4E86\u3002"}),(0,Pe.jsx)("button",{type:"button",className:"dshr-translation__retry",onClick:e,children:"\u91CD\u8BD5"})]}):t.zh?(0,Pe.jsx)("div",{className:"dshr-translation",children:String(t.zh).split(/\n+/u).filter(Boolean).map((r,n)=>(0,Pe.jsx)("p",{children:r},n))}):null:null}function yc({book:t,chapterIndex:e,onChapterChange:r,settings:n,chapterEntry:o,onChapterEntered:a,onSelection:i,onProgress:s,annotations:l=[],onOpenAnnotation:d,focusAnnotation:f,layoutVersion:g=0}){let p=t.chapters[e],u=bt.default.useRef(null),T=bt.default.useRef(null),_=bt.default.useRef(0),w=bt.default.useRef(new Map),A=bt.default.useRef(!1),N=bt.default.useRef(null),v=bt.default.useRef(!0),I=bt.default.useMemo(()=>new Map((p?.blocks??[]).map($=>[$.id,$])),[p]),[C,E]=bt.default.useState({}),[L,P]=bt.default.useState(!1);bt.default.useEffect(()=>{v.current=!0;let $=new AbortController;return N.current=$,()=>{v.current=!1,$.abort()}},[]);let x=bt.default.useCallback($=>`${p?.id||"chapter"}:${$.id}`,[p?.id]),M=bt.default.useCallback(($,G)=>{v.current&&E(se=>({...se,[$]:{...se[$]||{},...G}}))},[]),F=bt.default.useCallback(async()=>{if(A.current||w.current.size===0)return;A.current=!0,P(!0);let $=[...w.current.entries()].slice(0,qu);for(let[se]of $)w.current.delete(se);let G=Vu(t,p);try{let se=await so($.map(([D,pe])=>({id:D,text:pe.text})),{context:G,title:t.title,signal:N.current?.signal});for(let[D]of $)se[D]?M(D,{status:"done",zh:se[D],error:void 0}):M(D,{status:"error",error:"\u7FFB\u8BD1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u8FD9\u4E00\u6BB5\u3002"})}catch(se){if(!Pn(se))for(let[D]of $)M(D,{status:"error",error:se?.message||"\u7FFB\u8BD1\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002"})}finally{A.current=!1,v.current&&(P(!1),w.current.size>0&&window.setTimeout(()=>{F()},120))}},[t,p,M]),te=bt.default.useCallback(($,{force:G=!1}={})=>{if(!$||!$i.has($.kind)||!$.text?.trim())return;let se=x($),D=C[se];!G&&(D?.status==="loading"||D?.status==="done")||(M(se,{status:"loading",error:void 0}),w.current.set(se,{text:$.text.slice(0,4e3)}),F())},[F,x,C,M]),U=bt.default.useCallback($=>{let G=$.slice($.indexOf(":")+1),se=I.get(G);se&&te(se,{force:!0})},[I,te]),re=bt.default.useCallback(()=>{for(let $ of p?.blocks??[])$i.has($.kind)&&$.text?.trim()&&te($,{force:C[`${p.id}:${$.id}`]?.status==="error"})},[p,te,C]);bt.default.useEffect(()=>{let $=u.current;if(!$||!n.autoTranslate||typeof IntersectionObserver>"u")return;T.current?.disconnect();let G=new IntersectionObserver(se=>{for(let D of se){if(!D.isIntersecting)continue;let pe=D.target.getAttribute("data-seg-id"),be=I.get(pe);be&&te(be)}},{root:$,rootMargin:"420px 0px 520px 0px",threshold:.01});for(let se of $.querySelectorAll("[data-seg-id]"))G.observe(se);return T.current=G,()=>G.disconnect()},[I,p?.id,te,n.autoTranslate]),bt.default.useLayoutEffect(()=>{let $=u.current;if(!$||!o||n.readingMode==="book")return;let G=o.edge==="end"?1:Math.max(0,Math.min(1,Number(o.scrollRatio)||0));Xu($,Math.max(0,$.scrollHeight-$.clientHeight)*G),a?.(o,Oo($))},[o,n.readingMode,a]);let ie=bt.default.useCallback($=>{let G=u.current;if(!G)return;let se=dc(G,window.getSelection());if(!se){i?.(null);return}i?.({...se,source:"flow",context:p?.blocks.map(D=>D.text||"").join(`
`).slice(0,2400)||""})},[p,i]);bt.default.useEffect(()=>{if(!f?.id)return;let $=u.current,G=$?.dataset.readerNavigation||"0",se=window.setTimeout(()=>{if(!$||$!==u.current||($.dataset.readerNavigation||"0")!==G)return;let D=f.blockId?$.querySelector(`[data-anno-block="${CSS.escape(f.blockId)}"]`):null;if(!D)return;let pe=new CustomEvent("dshr-flow-navigate",{cancelable:!0,detail:{element:D}});$.dispatchEvent(pe)&&D.scrollIntoView({block:"center",behavior:"smooth"})},120);return()=>window.clearTimeout(se)},[t,e,f]);let z=bt.default.useCallback(()=>{let $=u.current;if(!$)return;let G=Date.now();G-_.current<600||(_.current=G,s?.(Oa(e,t.chapters.length,Oo($))))},[t.chapters.length,e,s]),ne=bt.default.useCallback($=>{let G=$.target.closest?.("a");if(!G)return;let se=G.getAttribute("data-chapter");if(se){$.preventDefault();let pe=Number(se);Number.isInteger(pe)&&pe>=0&&pe<t.chapters.length&&r(pe);return}let D=G.getAttribute("href")||"";D&&!D.startsWith("#")&&($.preventDefault(),window.open(D,"_blank","noopener,noreferrer"))},[t.chapters.length,r]);return p?(0,Pe.jsxs)("div",{className:"dshr-content",ref:u,onScroll:z,onMouseUp:ie,onKeyUp:ie,onClick:ne,children:[(0,Pe.jsxs)("div",{className:"dshr-content__inner",children:[(0,Pe.jsxs)("article",{className:"dshr-chapter",children:[(0,Pe.jsxs)("div",{className:"dshr-chapter__kicker",children:["\u7B2C ",e+1," / ",t.chapters.length," \u7AE0",n.autoTranslate?" \xB7 \u5B9E\u65F6\u7FFB\u8BD1\u5DF2\u5F00\u542F":""]}),p.blocks.map($=>{let G=x($),se=C[G],D=$i.has($.kind)&&$.text?.trim();return(0,Pe.jsxs)("div",{className:`dshr-block dshr-block--${$.kind}`,"data-kind":$.kind,"data-seg-id":D?$.id:void 0,"data-anno-block":$.id,children:[(0,Pe.jsx)("div",{className:"dshr-block__body",children:(0,Pe.jsx)(Ku,{block:$})}),D?(0,Pe.jsx)(Yu,{state:se,onRetry:()=>U(G)}):null]},$.id)})]}),(0,Pe.jsxs)("div",{className:"dshr-chapter__nav",children:[(0,Pe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e<=0,onClick:()=>r(e-1),children:[(0,Pe.jsx)(oo,{size:15})," ",e>0?t.chapters[e-1].title:"\u5DF2\u662F\u7B2C\u4E00\u7AE0"]}),(0,Pe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:re,disabled:L,title:"\u7FFB\u8BD1\u672C\u7AE0\u6240\u6709\u6BB5\u843D",children:[L?(0,Pe.jsx)("span",{className:"dshr-spinner"}):(0,Pe.jsx)(no,{size:15})," \u7FFB\u8BD1\u672C\u7AE0"]}),(0,Pe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e>=t.chapters.length-1,onClick:()=>r(e+1),children:[e<t.chapters.length-1?t.chapters[e+1].title:"\u5DF2\u662F\u6700\u540E\u4E00\u7AE0"," ",(0,Pe.jsx)(ao,{size:15})]})]})]}),(0,Pe.jsx)(gc,{containerRef:u,annotations:l,chapterId:p.id,onOpenAnnotation:d,layoutVersion:g})]}):(0,Pe.jsxs)("div",{className:"dshr-error-panel",children:[(0,Pe.jsx)("h3",{children:"\u8FD9\u4E00\u7AE0\u4E0D\u5B58\u5728"}),(0,Pe.jsx)("p",{children:"\u6587\u6863\u76EE\u5F55\u53EF\u80FD\u4E0D\u5B8C\u6574\uFF0C\u8BF7\u5C1D\u8BD5\u91CD\u65B0\u5BFC\u5165\u3002"})]})}var zo=Mt(require("react"),1);var Hi="6.5.438-reader3",Fn="/dsh-reader-assets/",wc;function Zu(){return`${Fn}pdf.bundle.js?v=${Hi}`}function Qu(){return wc||=import(Zu()).then(t=>{if(!t?.getDocument||!t.GlobalWorkerOptions)throw new Error("PDF \u5F15\u64CE\u8D44\u6E90\u683C\u5F0F\u4E0D\u6B63\u786E");return t.GlobalWorkerOptions.workerSrc=`${Fn}pdf.worker.mjs?v=${Hi}`,t.GlobalWorkerOptions.rendererSrc=`${Fn}pdf.renderer.mjs?v=${Hi}`,t}).catch(t=>{throw wc=null,t})}var Xr=()=>new DOMException("PDF operation cancelled","AbortError"),Dn=t=>{if(t?.aborted)throw Xr()};async function Ju(t,e,{signal:r,onRead:n,onError:o}={}){Dn(r);let a=256*1024,i=new Uint8Array(await e.slice(0,Math.min(a,e.size)).arrayBuffer());Dn(r);let s={bytes:i.length,reads:1,total:e.size};class l extends t.PDFDataRangeTransport{constructor(){super(e.size,i,!0)}aborted=!1;queue=[];active=0;requestDataRange(f,g){this.aborted||r?.aborted||(this.queue.push({begin:f,end:g}),this.pump())}pump(){for(;!this.aborted&&this.active<2&&this.queue.length;){let{begin:f,end:g}=this.queue.shift();this.active++,e.slice(f,g).arrayBuffer().then(p=>{if(this.aborted||r?.aborted)return;let u=new Uint8Array(p);if(u.length!==g-f)throw new Error("PDF \u5206\u6BB5\u8BFB\u53D6\u4E0D\u5B8C\u6574");s.bytes+=u.length,s.reads++,n?.({...s}),this.onDataRange(f,u)}).catch(p=>{this.aborted||r?.aborted||(this.abort(),o?.(p))}).finally(()=>{this.active--,this.pump()})}}abort(){this.aborted=!0,this.queue.length=0}}return n?.({...s}),{range:new l,stats:s,rangeChunkSize:a,disableStream:!0,disableAutoFetch:!0}}async function La(t,{signal:e,onProgress:r,onRead:n,onError:o}={}){Dn(e);let a=await Qu();Dn(e);let i,s,l,d,f=!1,g,p,u=new Promise((w,A)=>{p=A});u.catch(()=>{});let T=()=>g||(f=!0,clearTimeout(d),s?.abort(),e?.removeEventListener("abort",_),g=Promise.resolve().then(()=>i?.destroy()).catch(()=>{}).finally(()=>l?.destroy()),g),_=()=>{p(Xr()),T()};e?.addEventListener("abort",_,{once:!0});try{if(l=new a.PDFWorker({verbosity:0}),await Promise.race([l.promise,u,new Promise((N,v)=>{d=setTimeout(()=>v(new Error("PDF \u540E\u53F0\u7EBF\u7A0B\u542F\u52A8\u8D85\u65F6\uFF0C\u8BF7\u68C0\u67E5 Host \u7684 Worker \u8D44\u6E90\u4E0E\u5B89\u5168\u7B56\u7565\u3002")),1e4)})]),clearTimeout(d),Dn(e),typeof Worker!="function"||!(l.port instanceof Worker))throw new Error("PDF \u540E\u53F0\u7EBF\u7A0B\u4E0D\u53EF\u7528\uFF0C\u8BF7\u68C0\u67E5 /dsh-reader-assets/pdf.worker.mjs \u548C Host \u7684 Worker \u5B89\u5168\u7B56\u7565\u3002");let w;if(typeof Blob<"u"&&t instanceof Blob?(w=await Ju(a,t,{signal:e,onRead:n,onError:N=>{p(N),o?.(N),T()}}),s=w.range):w={data:(t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)).slice()},Dn(e),f)throw Xr();i=a.getDocument({...w,worker:l,cMapUrl:`${Fn}cmaps/`,cMapPacked:!0,standardFontDataUrl:`${Fn}standard_fonts/`,wasmUrl:`${Fn}wasm/`,iccUrl:`${Fn}iccs/`,isEvalSupported:!1,disableWorkerRendering:!1,verbosity:0}),i.onProgress=r;let A=await Promise.race([i.promise,u]);if(Dn(e),f)throw Xr();return{engine:a,pdf:A,close:T,source:w}}catch(w){throw await T(),w}}var Da=class{constructor(e=48*1024*1024){this.limit=e,this.bytes=0,this.entries=new Map}get(e){let r=this.entries.get(e);return r&&(this.entries.delete(e),this.entries.set(e,r)),r}set(e,r){this.delete(e);let n=r.bitmap.width*r.bitmap.height*4;if(n>this.limit){r.bitmap.close();return}for(this.entries.set(e,{...r,bytes:n}),this.bytes+=n;this.bytes>this.limit;)this.delete(this.entries.keys().next().value)}delete(e){let r=this.entries.get(e);r&&(this.bytes-=r.bytes,r.bitmap.close(),this.entries.delete(e))}clear(){for(let e of this.entries.keys())this.delete(e)}},Fa=class{constructor(e,r,n=20){this.count=e,this.defaultHeight=r,this.gap=n,this.heights=new Map,this.tree=new Float64Array(e+1),this.paddingTop=18}setHeight(e,r){let n=r-(this.heights.get(e)??this.defaultHeight);this.heights.set(e,r);for(let o=e;o<=this.count;o+=o&-o)this.tree[o]+=n}top(e){let r=(e-1)*(this.defaultHeight+this.gap);for(let n=e-1;n>0;n-=n&-n)r+=this.tree[n];return this.paddingTop+r}height(e){return this.heights.get(e)??this.defaultHeight}pageAt(e){let r=1,n=this.count;for(;r<n;){let o=Math.ceil((r+n)/2);this.top(o)<=e?r=o:n=o-1}return r}entryAt(e){let r=this.pageAt(e);return{page:r,top:this.top(r),height:this.height(r)}}};var ep=/[\u1100-\u11FF\u2E80-\u2EFF\u3000-\u303F\u3040-\u30FF\u3100-\u312F\u3130-\u318F\u3400-\u4DBF\u4E00-\u9FFF\uA960-\uA97F\uAC00-\uD7AF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF]/,_c=/[.。！？!?；;…]$/;function Lo(t){return!!t&&ep.test(t)}function tp(t){return String(t).replace(/\u0000/g,"").replace(/[\t\u00a0\u2000-\u200a\u202f\u205f\u3000]/g," ").replace(/\s+/g," ")}function za(t){return typeof t=="number"&&Number.isFinite(t)?t:null}function rp(t){let e=t&&t.transform;if(!Array.isArray(e)||e.length<6)return null;let r=za(e[4]),n=za(e[5]);if(r===null||n===null)return null;let o=za(t.width),a=za(t.height);return{x:r,y:n,width:o===null?null:Math.abs(o),height:a===null||a<=0?null:a}}function np(t,e){let r=0;for(let n of t)r+=Lo(n)?1:.5;return r*(e||10)}function op(t){return{text:"",startX:t?t.x:0,endX:t?t.x:0,y:t?t.y:0,height:t&&t.height?t.height:0,hasGeometry:!!t}}function ap(t,e,r){let n=tp(e);if(!n)return;let o="";if(t.text){let a=t.text[t.text.length-1],i=n[0];if(a===" "||i===" "||t.text.endsWith(" "))o="";else if(Lo(a)||Lo(i))o="";else if(r&&t.hasGeometry){let s=r.x-t.endX,l=Math.max(t.height||0,r.height||0,1);o=s>l*.18?" ":""}}if(t.text=(t.text+o+n).replace(/^ +/,""),r&&t.hasGeometry){let a=r.width===null?np(n,r.height||t.height):r.width;t.endX=Math.max(t.endX,r.x+a),t.startX=Math.min(t.startX,r.x),r.height&&(t.height=Math.max(t.height,r.height))}}function ip(t,e,r){if(!t||r)return!0;if(!e||!t.hasGeometry)return!1;let n=Math.max(t.height||0,e.height||0,1);return Math.abs(e.y-t.y)>n*.58||e.x<t.endX-n*2&&t.endX-t.startX>n}function sp(t,e){let r=t.lastLine;if(!r)return!1;let n=r.height||10,o=e.height||n,a=Math.max(n,o,1),i=r.y-e.y;if(i<-a*1.2||i>a*1.68)return!0;let s=o/n;return!!(s>1.18||s<.84||e.startX-t.leftX>a*1.25||_c.test(r.text)&&i>a*1.35&&r.endX<t.rightX-a*2)}function lp(t){let e="";for(let r of t){let n=r.text.trim();if(!n)continue;if(!e){e=n;continue}let o=e[e.length-1],a=n[0];o==="-"||Lo(o)||Lo(a)?e+=n:e+=" "+n}return e}function cp(t){if(t.length<=1400)return[t];let e=[],r=t;for(;r.length>1400;){let n=Math.floor(770.0000000000001),o=Math.min(r.length,1400),a=-1;for(let s=o;s>n;s-=1)if(_c.test(r[s-1])||r[s-1]===`
`){a=s;break}a<=0&&(a=r.lastIndexOf(" ",o),a<n&&(a=o));let i=r.slice(0,a).trim();i&&e.push(i),r=r.slice(a).trim()}return r&&e.push(r),e}function kc(t,{metadata:e=!1}={}){let r=[],n=null,o=!1;if(Array.isArray(t))for(let[l,d]of t.entries()){if(!d||typeof d.str!="string")continue;if(!d.str.trim()){d.hasEOL&&(o=!0);continue}let f=rp(d);ip(n,f,o)&&(n=op(f),n.itemIndices=[],r.push(n)),ap(n,d.str,f),n.itemIndices.push(d.__pdfItemIndex??l),o=!!d.hasEOL}let a=[],i=null;for(let l of r)l.text.trim()&&(!i||sp(i,l)?(i={lines:[l],lastLine:l,leftX:l.startX,rightX:l.endX},a.push(i)):(i.lines.push(l),i.lastLine=l,i.leftX=Math.min(i.leftX,l.startX),i.rightX=Math.max(i.rightX,l.endX)));let s=[];for(let l of a){let d=lp(l.lines);for(let f of cp(d)){let g=f.trim();g&&s.push({src:g,...e?{itemIndices:l.lines.flatMap(p=>p.itemIndices)}:{}})}}return{text:s.map(l=>l.src).join(`

`),segments:s}}function dp(t,e){let r=(t||[]).filter(d=>typeof d?.str=="string").map((d,f)=>({...d,__pdfItemIndex:f})),n=0;for(let d=0;d<(t||[]).length;d+=1)typeof t[d]?.str=="string"&&(r[n++].__pdfItemIndex=d);if(!e)return r;let o=r.filter(d=>d.str.trim().length>15&&d.width>e*.12),a=o.filter(d=>d.transform?.[4]<e*.3&&d.transform[4]+d.width<e*.53),i=o.filter(d=>d.transform?.[4]>=e*.48);if(a.length<4||i.length<4)return r;let s=[...new Set(o.filter(d=>d.transform?.[4]<e*.4&&d.transform[4]+d.width>e*.6).map(d=>Math.round(d.transform[5])))].sort((d,f)=>f-d),l=d=>{let f=d.transform?.[5]||0,g=s.filter(u=>u>f+3).length*2,p=s.some(u=>Math.abs(u-f)<=3);return[g+(p?1:0),p?0:d.transform?.[4]>=e*.48?2:1,-f,d.transform?.[4]||0]};return r.sort((d,f)=>{let g=l(d),p=l(f);for(let u=0;u<g.length;u+=1)if(g[u]!==p[u])return g[u]-p[u];return d.__pdfItemIndex-f.__pdfItemIndex})}function Ui(t,e,r){let n=kc(dp(t,r),{metadata:!0});return{text:n.text,segments:n.segments.map((o,a)=>({...o,id:`p${e}-s${a}`,protectedTokens:[...new Set(o.itemIndices.map(i=>t[i]?.str?.trim()).filter(i=>i&&/[∑∫√≈≠≤≥∂∞]/u.test(i)&&!/[A-Za-z]{4}|[\u3400-\u9fff]/u.test(i)))]}))}}var Tc=String.raw`
.dshr-pdf-root {
  --dshr-pdf-bg: var(--dsw-alias-bg-base, #f1f2f5);
  --dshr-pdf-panel: var(--dsw-alias-bg-layer-1, #ffffff);
  --dshr-pdf-panel-2: var(--dsw-alias-bg-layer-2, #f7f8fa);
  --dshr-pdf-fg: var(--dsw-alias-label-primary, #1a1d21);
  --dshr-pdf-fg-secondary: var(--dsw-alias-label-secondary, #5a626c);
  --dshr-pdf-fg-tertiary: var(--dsw-alias-label-tertiary, #8b939d);
  --dshr-pdf-border: var(--dsw-alias-border-l2, rgba(20, 24, 31, 0.12));
  --dshr-pdf-hover: var(--dsw-alias-interactive-bg-hover, rgba(20, 24, 31, 0.06));
  --dshr-pdf-accent: var(--dsw-alias-state-business-primary, #4d6bfe);
  --dshr-pdf-paper: #ffffff;
  --dshr-pdf-paper-fg: #1a1d21;
  --dshr-pdf-page-shadow: 0 1px 2px rgba(16, 24, 40, 0.08), 0 10px 28px rgba(16, 24, 40, 0.09);
  --dshr-pdf-selection: rgba(77, 107, 254, 0.28);

  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: 100%;
  min-height: 0;
  min-width: 0;
  overflow: hidden;
  background: var(--dshr-pdf-bg);
  color: var(--dshr-pdf-fg);
  font-family: var(
    --dsw-font-family,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    "PingFang SC",
    "Hiragino Sans GB",
    "Microsoft YaHei",
    "Helvetica Neue",
    Helvetica,
    Arial,
    sans-serif
  );
  font-size: 13px;
  line-height: 1.5;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

[data-ds-dark-theme] .dshr-pdf-root,
.dshr-pdf-root[data-ds-dark-theme],
html[data-ds-dark-theme] .dshr-pdf-root {
  --dshr-pdf-bg: var(--dsw-alias-bg-base, #17181c);
  --dshr-pdf-panel: var(--dsw-alias-bg-layer-1, #202126);
  --dshr-pdf-panel-2: var(--dsw-alias-bg-layer-2, #26272d);
  --dshr-pdf-fg: var(--dsw-alias-label-primary, #e9ebee);
  --dshr-pdf-fg-secondary: var(--dsw-alias-label-secondary, #a8afb8);
  --dshr-pdf-fg-tertiary: var(--dsw-alias-label-tertiary, #7b828c);
  --dshr-pdf-border: var(--dsw-alias-border-l2, rgba(255, 255, 255, 0.13));
  --dshr-pdf-hover: var(--dsw-alias-interactive-bg-hover, rgba(255, 255, 255, 0.08));
  --dshr-pdf-accent: var(--dsw-alias-state-business-primary, #7c96ff);
  --dshr-pdf-paper: #fdfdfd;
  --dshr-pdf-paper-fg: #1a1d21;
  --dshr-pdf-page-shadow: 0 1px 2px rgba(0, 0, 0, 0.5), 0 12px 34px rgba(0, 0, 0, 0.45);
  --dshr-pdf-selection: rgba(124, 150, 255, 0.32);
}

.dshr-pdf-root *,
.dshr-pdf-root *::before,
.dshr-pdf-root *::after {
  box-sizing: border-box;
}

.dshr-pdf-root:focus,
.dshr-pdf-root:focus-visible {
  outline: none;
}

/* ------------------------------------------------------------------ toolbar */

.dshr-pdf-toolbar {
  flex: none;
  display: flex;
  align-items: center;
  gap: 4px;
  min-height: 38px;
  padding: 4px 8px;
  background: var(--dshr-pdf-panel);
  border-bottom: 0.5px solid var(--dshr-pdf-border);
  color: var(--dshr-pdf-fg-secondary);
  user-select: none;
  -webkit-user-select: none;
}

.dshr-pdf-title {
  flex: 1 1 auto;
  min-width: 0;
  padding: 0 6px 0 2px;
  overflow: hidden;
  color: var(--dshr-pdf-fg-secondary);
  font-size: 12px;
  line-height: 18px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.dshr-pdf-toolbar-spacer {
  flex: 1 1 auto;
  min-width: 0;
}

.dshr-pdf-tbtn {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 26px;
  height: 26px;
  padding: 0 6px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--dshr-pdf-fg-secondary);
  font: inherit;
  font-size: 13px;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.12s ease, color 0.12s ease;
}

.dshr-pdf-tbtn:hover:not(:disabled) {
  background: var(--dshr-pdf-hover);
  color: var(--dshr-pdf-fg);
}

.dshr-pdf-tbtn:active:not(:disabled) {
  transform: translateY(0.5px);
}

.dshr-pdf-tbtn:disabled {
  opacity: 0.38;
  cursor: default;
}

.dshr-pdf-tbtn:focus-visible {
  outline: 1.5px solid var(--dshr-pdf-accent);
  outline-offset: 1px;
}

.dshr-pdf-tbtn[data-active="true"] {
  background: color-mix(in srgb, var(--dshr-pdf-accent) 14%, transparent);
  color: var(--dshr-pdf-accent);
}

.dshr-pdf-tbtn.dshr-pdf-tbtn-wide {
  padding: 0 8px;
  font-size: 12px;
}

.dshr-pdf-zoom-percent {
  flex: none;
  min-width: 44px;
  padding: 0 2px;
  color: var(--dshr-pdf-fg-secondary);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  line-height: 26px;
  text-align: center;
}

.dshr-pdf-pager {
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  height: 26px;
  padding: 0 2px;
  color: var(--dshr-pdf-fg-tertiary);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.dshr-pdf-page-input {
  width: 42px;
  height: 24px;
  margin: 0;
  padding: 0 4px;
  border: 0.5px solid var(--dshr-pdf-border);
  border-radius: 5px;
  outline: none;
  background: var(--dshr-pdf-bg);
  color: var(--dshr-pdf-fg);
  font: inherit;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  text-align: center;
}

.dshr-pdf-page-input:hover {
  border-color: color-mix(in srgb, var(--dshr-pdf-fg-tertiary) 55%, transparent);
}

.dshr-pdf-page-input:focus {
  border-color: var(--dshr-pdf-accent);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--dshr-pdf-accent) 35%, transparent);
}

.dshr-pdf-toolbar-sep {
  flex: none;
  width: 1px;
  height: 16px;
  margin: 0 4px;
  background: var(--dshr-pdf-border);
}

/* --------------------------------------------------------------- scroll area */

.dshr-pdf-scroll {
  position: relative;
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  overflow: auto;
  outline: none;
  overscroll-behavior: contain;
  overflow-anchor: none;
  scrollbar-width: thin;
  scrollbar-color: color-mix(in srgb, var(--dshr-pdf-fg-tertiary) 42%, transparent) transparent;
}

.dshr-pdf-scroll::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.dshr-pdf-scroll::-webkit-scrollbar-thumb {
  border: 2px solid transparent;
  border-radius: 6px;
  background: color-mix(in srgb, var(--dshr-pdf-fg-tertiary) 38%, transparent);
  background-clip: content-box;
}

.dshr-pdf-scroll::-webkit-scrollbar-thumb:hover {
  background: color-mix(in srgb, var(--dshr-pdf-fg-tertiary) 58%, transparent);
  background-clip: content-box;
}

.dshr-pdf-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.dshr-pdf-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  min-width: 100%;
  padding: 18px 16px 48px;
}

/* Fit-width text layers use this variable; the per-page value is set inline on
   the frame so PDF.js can compute glyph boxes and the canvas size identically. */
.dshr-pdf-frame {
  --total-scale-factor: 1;
  --scale-round-x: 1px;
  --scale-round-y: 1px;
  --min-font-size: 1;

  position: relative;
  flex: none;
  overflow: hidden;
  border-radius: 3px;
  background: var(--dshr-pdf-paper);
  box-shadow: var(--dshr-pdf-page-shadow);
  isolation: isolate;
}

.dshr-pdf-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: none;
  width: max-content;
  max-width: 100%;
  padding: 0 0 20px;
}
.dshr-pdf-spacer { flex: none; width: 1px; pointer-events: none; }
.dshr-root[data-reading-mode="book"] .dshr-pdf-page { padding-bottom: 96px; }

.dshr-pdf-page-col {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: none;
}

.dshr-pdf-canvas {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
}

.dshr-pdf-placeholder {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0 0 14px;
  background:
    linear-gradient(
      100deg,
      color-mix(in srgb, var(--dshr-pdf-fg) 2.5%, var(--dshr-pdf-paper)) 30%,
      color-mix(in srgb, var(--dshr-pdf-fg) 5%, var(--dshr-pdf-paper)) 47%,
      color-mix(in srgb, var(--dshr-pdf-fg) 2.5%, var(--dshr-pdf-paper)) 64%
    );
  background-size: 260% 100%;
  color: color-mix(in srgb, var(--dshr-pdf-paper-fg) 22%, var(--dshr-pdf-paper));
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  animation: dshr-pdf-shimmer 1.8s ease-in-out infinite;
}

.dshr-pdf-frame[data-rendered="true"] .dshr-pdf-placeholder {
  animation: none;
  background: var(--dshr-pdf-paper);
  color: transparent;
}

.dshr-pdf-page-loading {
  position: absolute;
  inset: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.dshr-pdf-frame[data-rendered="true"] .dshr-pdf-page-loading {
  display: none;
}

.dshr-pdf-spinner {
  display: block;
  width: 18px;
  height: 18px;
  border: 2px solid color-mix(in srgb, var(--dshr-pdf-accent) 26%, transparent);
  border-top-color: var(--dshr-pdf-accent);
  border-radius: 50%;
  animation: dshr-pdf-spin 0.8s linear infinite;
}

/* --------------------------------------------------------------- text layer */

.dshr-pdf-text-layer {
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: clip;
  opacity: 1;
  line-height: 1;
  letter-spacing: normal;
  word-spacing: normal;
  text-align: initial;
  forced-color-adjust: none;
  text-size-adjust: none;
  -webkit-text-size-adjust: none;
  transform-origin: 0 0;
  caret-color: CanvasText;
  color-scheme: only light;

  --min-font-size: 1;
  --text-scale-factor: calc(var(--total-scale-factor) * var(--min-font-size));
  --min-font-size-inv: calc(1 / var(--min-font-size));
}

.dshr-pdf-text-layer :is(span, br) {
  position: absolute;
  color: transparent;
  white-space: pre;
  cursor: text;
  transform-origin: 0% 0%;
  -webkit-user-select: text;
  user-select: text;
}

.dshr-pdf-text-layer > :not(.markedContent),
.dshr-pdf-text-layer .markedContent span:not(.markedContent) {
  z-index: 1;

  --font-height: 0;
  --scale-x: 1;
  --rotate: 0deg;
  font-size: calc(var(--text-scale-factor) * var(--font-height));
  transform: rotate(var(--rotate)) scaleX(var(--scale-x)) scale(var(--min-font-size-inv));
}

.dshr-pdf-text-layer .markedContent {
  display: contents;
}

/* PDF.js stores its text layer in unrotated page coordinates and rotates the
   whole layer with these transforms (matching pdf_viewer.css, but scoped). */
.dshr-pdf-text-layer[data-main-rotation="90"] {
  transform: rotate(90deg) translateY(-100%);
}

.dshr-pdf-text-layer[data-main-rotation="180"] {
  transform: rotate(180deg) translate(-100%, -100%);
}

.dshr-pdf-text-layer[data-main-rotation="270"] {
  transform: rotate(270deg) translateX(-100%);
}

.dshr-pdf-text-layer span[role="img"] {
  cursor: default;
  -webkit-user-select: none;
  user-select: none;
}

.dshr-pdf-text-layer ::selection {
  background: var(--dshr-pdf-selection);
  color: transparent;
}

.dshr-pdf-text-layer ::-moz-selection {
  background: var(--dshr-pdf-selection);
  color: transparent;
}

/* -------------------------------------------------------------- translation */

.dshr-pdf-translation {
  margin-top: 10px;
  overflow: hidden;
  border: 0.5px solid var(--dshr-pdf-border);
  border-radius: 9px;
  background: var(--dshr-pdf-panel);
  color: var(--dshr-pdf-fg);
  box-shadow: 0 1px 2px color-mix(in srgb, var(--dshr-pdf-fg) 5%, transparent);
}

.dshr-pdf-translation-head {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin: 0;
  padding: 7px 10px;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 12px;
  line-height: 18px;
  text-align: left;
  cursor: pointer;
}

.dshr-pdf-translation-head:hover {
  background: var(--dshr-pdf-hover);
}

.dshr-pdf-translation-head:focus-visible {
  outline: 1.5px solid var(--dshr-pdf-accent);
  outline-offset: -1.5px;
}

.dshr-pdf-translation-title {
  flex: none;
  color: var(--dshr-pdf-fg);
  font-weight: 600;
  letter-spacing: 0.01em;
}

.dshr-pdf-translation-meta {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  color: var(--dshr-pdf-fg-tertiary);
  font-size: 11px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.dshr-pdf-translation-chevron {
  flex: none;
  color: var(--dshr-pdf-fg-tertiary);
  font-size: 10px;
  line-height: 1;
}

.dshr-pdf-translation-body {
  padding: 2px 10px 10px;
  border-top: 0.5px solid var(--dshr-pdf-border);
}

.dshr-pdf-translation-item {
  padding: 8px 0;
}

.dshr-pdf-translation-item + .dshr-pdf-translation-item {
  border-top: 0.5px dashed var(--dshr-pdf-border);
}

.dshr-pdf-translation-src {
  margin: 0 0 4px;
  color: var(--dshr-pdf-fg-tertiary);
  font-size: 11.5px;
  line-height: 1.55;
  overflow-wrap: anywhere;
}

.dshr-pdf-translation-zh {
  margin: 0;
  color: var(--dshr-pdf-fg);
  font-size: 13px;
  line-height: 1.72;
  overflow-wrap: anywhere;
}

.dshr-pdf-translation-status {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 9px 0 4px;
  color: var(--dshr-pdf-fg-secondary);
  font-size: 12px;
  line-height: 18px;
}

.dshr-pdf-translation-status .dshr-pdf-spinner {
  width: 13px;
  height: 13px;
  border-width: 1.5px;
}

.dshr-pdf-translation-error {
  color: var(--dsw-alias-state-error-primary, #d64545);
}

.dshr-pdf-translation-empty {
  padding: 9px 0 4px;
  color: var(--dshr-pdf-fg-tertiary);
  font-size: 12px;
  line-height: 18px;
}

.dshr-pdf-translation-retry {
  flex: none;
  margin-left: auto;
  padding: 2px 9px;
  border: 0.5px solid var(--dshr-pdf-border);
  border-radius: 5px;
  background: var(--dshr-pdf-panel-2);
  color: var(--dshr-pdf-fg-secondary);
  font: inherit;
  font-size: 11.5px;
  line-height: 18px;
  cursor: pointer;
}

.dshr-pdf-translation-retry:hover {
  background: var(--dshr-pdf-hover);
  color: var(--dshr-pdf-fg);
}

.dshr-pdf-translation-retry:focus-visible {
  outline: 1.5px solid var(--dshr-pdf-accent);
  outline-offset: 1px;
}

/* --------------------------------------------------------- loading / errors */

.dshr-pdf-status {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 100%;
  padding: 48px 24px;
  color: var(--dshr-pdf-fg-secondary);
  text-align: center;
}

.dshr-pdf-status-title {
  margin: 0;
  color: var(--dshr-pdf-fg);
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
}

.dshr-pdf-status-detail {
  max-width: 560px;
  margin: 0;
  color: var(--dshr-pdf-fg-tertiary);
  font-size: 12px;
  line-height: 19px;
  overflow-wrap: anywhere;
}

.dshr-pdf-status-error {
  color: var(--dsw-alias-state-error-primary, #d64545);
}

.dshr-pdf-status-retry {
  margin-top: 2px;
  padding: 5px 14px;
  border: 0.5px solid var(--dshr-pdf-border);
  border-radius: 7px;
  background: var(--dshr-pdf-panel);
  color: var(--dshr-pdf-fg);
  font: inherit;
  font-size: 12px;
  line-height: 20px;
  cursor: pointer;
}

.dshr-pdf-status-retry:hover {
  background: var(--dshr-pdf-hover);
}

.dshr-pdf-status-retry:focus-visible {
  outline: 1.5px solid var(--dshr-pdf-accent);
  outline-offset: 2px;
}

.dshr-pdf-status-spinner {
  width: 26px;
  height: 26px;
  border: 2.5px solid color-mix(in srgb, var(--dshr-pdf-accent) 22%, transparent);
  border-top-color: var(--dshr-pdf-accent);
  border-radius: 50%;
  animation: dshr-pdf-spin 0.85s linear infinite;
}

.dshr-pdf-status-progress {
  color: var(--dshr-pdf-fg-tertiary);
  font-size: 11.5px;
  font-variant-numeric: tabular-nums;
}

@keyframes dshr-pdf-spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes dshr-pdf-shimmer {
  0% {
    background-position: 120% 0;
  }
  100% {
    background-position: -120% 0;
  }
}

/* ------------------------------------------------------------ dark fallback */

@media (prefers-color-scheme: dark) {
  :root:not([data-ds-light-theme]):not([data-ds-theme="light"]) .dshr-pdf-root {
    --dshr-pdf-bg: var(--dsw-alias-bg-base, #17181c);
    --dshr-pdf-panel: var(--dsw-alias-bg-layer-1, #202126);
    --dshr-pdf-panel-2: var(--dsw-alias-bg-layer-2, #26272d);
    --dshr-pdf-fg: var(--dsw-alias-label-primary, #e9ebee);
    --dshr-pdf-fg-secondary: var(--dsw-alias-label-secondary, #a8afb8);
    --dshr-pdf-fg-tertiary: var(--dsw-alias-label-tertiary, #7b828c);
    --dshr-pdf-border: var(--dsw-alias-border-l2, rgba(255, 255, 255, 0.13));
    --dshr-pdf-hover: var(--dsw-alias-interactive-bg-hover, rgba(255, 255, 255, 0.08));
    --dshr-pdf-accent: var(--dsw-alias-state-business-primary, #7c96ff);
    --dshr-pdf-page-shadow: 0 1px 2px rgba(0, 0, 0, 0.5), 0 12px 34px rgba(0, 0, 0, 0.45);
    --dshr-pdf-selection: rgba(124, 150, 255, 0.32);
  }
}

/* ---------------------------------------------------------------- responsive */

@media (max-width: 720px) {
  .dshr-pdf-title {
    display: none;
  }

  .dshr-pdf-toolbar {
    gap: 2px;
    padding: 4px 6px;
  }

  .dshr-pdf-toolbar-sep {
    margin: 0 2px;
  }

  .dshr-pdf-content {
    padding: 12px 8px 40px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .dshr-pdf-root *,
  .dshr-pdf-root *::before,
  .dshr-pdf-root *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
`;var Sc=String.raw`
.dshr-pdf-root { container-type: inline-size; container-name: pdf-reader; }
.dshr-pdf-workspace { display: flex; flex: 1 1 auto; min-height: 0; min-width: 0; overflow: hidden; }
.dshr-pdf-workspace > .dshr-pdf-scroll { flex: 1 1 0; }
.dshr-pdf-translation-panel { flex: 0 0 clamp(300px, 32%, 440px); width: 32%; min-width: 260px; min-height: 0; display: flex; flex-direction: column; background: var(--dshr-pdf-panel); border-left: 1px solid var(--dshr-pdf-border); overflow: hidden; color: var(--dshr-pdf-fg); }
.dshr-pdf-translation-panel button { border: 1px solid var(--dshr-pdf-border); border-radius: 6px; background: var(--dshr-pdf-panel-2); color: inherit; padding: 4px 8px; cursor: pointer; font: inherit; }
.dshr-pdf-translation-panel button:hover:not(:disabled) { background: var(--dshr-pdf-hover); }
.dshr-pdf-translation-panel button:disabled { opacity: .45; cursor: default; }
.dshr-pdf-translation-panel :is(button,input,textarea):focus-visible { outline: 2px solid var(--dshr-pdf-accent); outline-offset: 2px; }
.dshr-pdf-translation-header { display: flex; align-items: center; justify-content: space-between; padding: 13px 14px 10px; gap: 8px; flex: none; }
.dshr-pdf-translation-header > div { display: flex; flex-direction: column; gap: 4px; }
.dshr-pdf-translation-header strong { font-size: 15px; }
.dshr-pdf-translation-header span { font-size: 11px; color: var(--dshr-pdf-fg-secondary); }
.dshr-pdf-translation-header > button { font-size: 20px; line-height: 20px; padding: 2px 7px; }
.dshr-pdf-translation-controls, .dshr-pdf-translation-options { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; padding: 4px 14px 8px; font-size: 12px; flex: none; }
.dshr-pdf-translation-panel label { display: inline-flex; gap: 4px; align-items: center; }
.dshr-pdf-translation-panel input { accent-color: var(--dshr-pdf-accent); }
.dshr-pdf-translation-font { min-width: 15px; text-align: center; color: var(--dshr-pdf-fg-secondary); }
.dshr-pdf-glossary { margin: 0 14px 10px; padding: 8px 10px; background: var(--dshr-pdf-panel-2); border-radius: 8px; font-size: 12px; flex: none; }
.dshr-pdf-glossary summary { cursor: pointer; color: var(--dshr-pdf-fg-secondary); }
.dshr-pdf-glossary label { display: block; margin: 10px 0; }
.dshr-pdf-glossary textarea { display: block; width: 100%; min-height: 78px; max-height: 130px; resize: vertical; margin-top: 6px; padding: 8px; background: var(--dshr-pdf-panel); color: inherit; border: 1px solid var(--dshr-pdf-border); border-radius: 6px; font: inherit; }
.dshr-pdf-translation-notice { flex: none; padding: 7px 14px; font-size: 12px; color: var(--dshr-pdf-fg-secondary); background: var(--dshr-pdf-panel-2); }
.dshr-pdf-translation-notice button { margin-left: 6px; }
.dshr-pdf-translation-list { flex: 1 1 auto; min-height: 80px; overflow-y: auto; overscroll-behavior: contain; overflow-anchor: none; padding: 3px 12px 16px; scrollbar-width: thin; }
.dshr-pdf-translation-paragraph { padding: 11px 12px; margin: 7px 0; border: 1px solid transparent; border-radius: 8px; }
.dshr-pdf-translation-paragraph.is-linked { border-color: color-mix(in srgb, var(--dshr-pdf-accent) 45%, transparent); background: color-mix(in srgb, var(--dshr-pdf-accent) 7%, var(--dshr-pdf-panel)); }
.dshr-pdf-translation-paragraph-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; font-size: 11px; color: var(--dshr-pdf-fg-secondary); }
.dshr-pdf-translation-paragraph-head button { border: 0; background: transparent; color: var(--dshr-pdf-accent); padding: 2px; font-size: 11px; }
.dshr-pdf-translation-paragraph-head > div { display: flex; gap: 7px; }
.dshr-pdf-translation-result { font-size: var(--dshr-translation-font-size, 16px); line-height: 1.85; margin: 9px 0 0; white-space: pre-wrap; overflow-wrap: anywhere; }
.dshr-pdf-translation-original { font-size: 12px; line-height: 1.7; color: var(--dshr-pdf-fg-secondary); padding-bottom: 9px; border-bottom: 1px solid var(--dshr-pdf-border); white-space: pre-wrap; }
.dshr-pdf-translation-waiting { color: var(--dshr-pdf-fg-tertiary); font-size: 13px; line-height: 1.8; }
.dshr-pdf-translation-segment-error { font-size: 12px; color: var(--dshr-pdf-fg-secondary); }
.dshr-pdf-translation-footer { flex: none; display: flex; flex-wrap: wrap; gap: 8px; padding: 9px 14px; border-top: 1px solid var(--dshr-pdf-border); font-size: 11px; color: var(--dshr-pdf-fg-secondary); }
.dshr-pdf-text-layer span[data-pdf-linked="true"] { background: rgba(255, 202, 72, .36); border-radius: 2px; }
@container (max-width: 740px) { .dshr-pdf-translation-panel { flex-basis: 280px; min-width: 220px; } }
@media (max-width: 620px) { .dshr-pdf-workspace { flex-direction: column; } .dshr-pdf-translation-panel { width: 100%; flex: 0 0 42%; min-height: 190px; min-width: 0; border-left: 0; border-top: 1px solid var(--dshr-pdf-border); } .dshr-pdf-translation-header { padding: 7px 12px; } }
@container pdf-reader (max-width: 700px) { .dshr-pdf-workspace { flex-direction: column; } .dshr-pdf-translation-panel { width: 100%; flex: 0 0 42%; min-height: 190px; min-width: 0; border-left: 0; border-top: 1px solid var(--dshr-pdf-border); } .dshr-pdf-translation-header { padding: 7px 12px; } }
`;var Do=Mt(require("react"),1);var Ec="reader-a-1";function zn(t){return String(t||"").split(/\r?\n/u).map(e=>e.trim()).filter(Boolean).join(`
`).slice(0,4e3)}function hp(t,e=[]){let r=[...new Set([...e,...t.match(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]|\[\d+(?:\s*[,–—-]\s*\d+)*\]|https?:\/\/[^\s]+|\b10\.\d{4,9}\/[^\s]+/gu)||[]])].filter(a=>a&&t.includes(a)).sort((a,i)=>i.length-a.length),n=[],o=t;for(let a of r){let i=`\u27E6KEEP_${n.length}\u27E7`;o.includes(a)&&(o=o.split(a).join(i),n.push({placeholder:i,token:a}))}return{text:o,restore(a){let i=String(a||"");for(let{placeholder:s,token:l}of n){if(!i.includes(s))throw new Error("\u8BD1\u6587\u9057\u6F0F\u4E86\u516C\u5F0F\u6216\u5F15\u7528\u6807\u8BB0\uFF0C\u8BF7\u91CD\u8BD5\u672C\u6BB5\u3002");i=i.split(s).join(l)}if(/⟦KEEP_\d+⟧/u.test(i))throw new Error("\u8BD1\u6587\u5305\u542B\u65E0\u6CD5\u5BF9\u5E94\u7684\u516C\u5F0F\u6807\u8BB0\uFF0C\u8BF7\u91CD\u8BD5\u672C\u6BB5\u3002");return i}}}async function up(t,e){if(!globalThis.crypto?.subtle)return null;let r=new TextEncoder().encode(JSON.stringify([Ec,t.documentId,e,"zh-CN",t.model?.provider,t.model?.model,t.model?.promptVersion,zn(t.glossary)])),n=await crypto.subtle.digest("SHA-256",r);return`${t.documentId}:${Array.from(new Uint8Array(n),o=>o.toString(16).padStart(2,"0")).join("")}`}var Ba=class{constructor({translate:e,cache:r,onChange:n=()=>{},onModelChanged:o=()=>{},prefetchDelay:a=700,requestTimeout:i=12e4}){this.translate=e,this.cache=r,this.onChange=n,this.onModelChanged=o,this.prefetchDelay=a,this.requestTimeout=i,this.sources=new Map,this.entries=new Map,this.jobs=new Map,this.preparing=new Map,this.epoch=0,this.sequence=0,this.activePage=1,this.visibleIds=new Set,this.config={},this.disposed=!1}configure(e){if(this.disposed)return;let r={...e,glossary:zn(e.glossary)},n=JSON.stringify([r.documentId,r.model,r.glossary,Ec]),o=n!==this.namespace;if(o){let a=this.config.documentId;this.epoch+=1,this.abortJobs(),a&&a!==r.documentId&&this.sources.clear(),this.entries.clear(),this.preparing.clear(),this.namespace=n,this.cacheIssue=""}if(this.config=r,(!r.enabled||!r.canTranslate)&&this.abortJobs(),r.prefetch===!1)for(let a of[...this.jobs.values()])a.page!==this.activePage&&this.abortJob(a);if(o)for(let[a,i]of this.sources)this.registerPage(a,i);this.emit(),this.pump()}setFocus(e,r=[]){if(!this.disposed){if(e!==this.activePage){this.activePage=e,this.prefetchAfter=Date.now()+this.prefetchDelay,clearTimeout(this.timer),this.timer=null;for(let n of[...this.jobs.values()])n.page!==e&&this.abortJob(n);for(let n of this.sources.keys())if(Math.abs(n-e)>3){this.sources.delete(n);for(let[o,a]of this.entries)a.page===n&&this.entries.delete(o)}}this.visibleIds=new Set(r),this.emit(),this.pump()}}registerPage(e,r){if(this.disposed)return;this.sources.set(e,r);let n=[];for(let[o,a]of(r.segments||[]).entries()){let i=a.id||`p${e}-s${o}`,s=`${e}:${i}`;if(this.entries.get(s)?.src===a.src)continue;let l={...a,id:i,uid:s,index:o,page:e,status:"checking",zh:"",cached:!1};this.entries.set(s,l),n.push(l)}if(n.length){let o=Symbol(),a=this.epoch;this.preparing.set(e,o),Promise.all(n.map(i=>this.prepare(i,a))).finally(()=>{this.preparing.get(e)===o&&(this.preparing.delete(e),this.pump())})}this.emit()}fresh(e,r){return!this.disposed&&r===this.epoch&&this.entries.get(e.uid)===e}async prepare(e,r){try{let n=e.src.replace(/\s/gu,"");if(n&&(n.match(/[\u3400-\u9fff]/gu)||[]).length/n.length>=.55){e.zh=e.src,e.status="done",e.passthrough=!0,this.emit();return}if(e.key=await up(this.config,e.src),!this.fresh(e,r))return;let o=e.key&&await this.cache?.get(e.key);if(!this.fresh(e,r))return;typeof o?.zh=="string"&&o.zh.trim()?(e.zh=o.zh,e.cached=!0,e.status="done"):e.status="queued"}catch{if(!this.fresh(e,r))return;e.status="queued",this.cacheIssue="\u672C\u5730\u7F13\u5B58\u6682\u4E0D\u53EF\u7528\uFF0C\u672C\u6B21\u8BD1\u6587\u4ECD\u53EF\u9605\u8BFB\u3002"}this.emit(),this.pump()}abortJob(e){clearTimeout(e.timeout),e.controller.abort(),this.jobs.delete(e.id);for(let r of e.entries)this.entries.get(r.uid)===r&&r.job===e.id&&(r.status="queued")}abortJobs(){clearTimeout(this.timer),this.timer=null;for(let e of[...this.jobs.values()])this.abortJob(e)}pump(){if(!(this.disposed||!this.config.enabled||!this.config.canTranslate||!this.config.documentId))for(;this.jobs.size<2;){let e=[...this.entries.values()].filter(d=>d.page===this.activePage),r=e.some(d=>d.status==="queued"||d.status==="checking"||d.status==="loading"),n=[...this.entries.values()].filter(d=>d.status==="queued"&&!this.preparing.has(d.page)&&(d.page===this.activePage||this.config.prefetch!==!1&&!r&&d.page===this.activePage+1)).sort((d,f)=>d.page-this.activePage-(f.page-this.activePage)||Number(this.visibleIds.has(f.id))-Number(this.visibleIds.has(d.id))||d.index-f.index);if(!n.length)return;let o=n[0];if(o.page!==this.activePage&&Date.now()<(this.prefetchAfter||0)){this.timer||(this.timer=setTimeout(()=>{this.timer=null,this.pump()},this.prefetchAfter-Date.now()));return}let a=[],i=0,s=e.some(d=>d.status==="done")?3:1;for(let d of n){if(d.page!==o.page||a.length>=s||i+d.src.length>3e3&&a.length)break;a.push(d),i+=d.src.length}let l={id:++this.sequence,epoch:this.epoch,controller:new AbortController,page:o.page,entries:a,config:this.config};this.jobs.set(l.id,l);for(let d of a)d.status="loading",d.job=l.id,d.error="";l.timeout=setTimeout(()=>{if(this.jobs.get(l.id)===l){this.abortJob(l);for(let d of a)this.fresh(d,l.epoch)&&(d.status="error",d.error="\u672C\u6BB5\u7FFB\u8BD1\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5\u6216\u7A0D\u540E\u7EE7\u7EED\u3002");this.emit(),this.pump()}},this.requestTimeout),this.emit(),this.run(l)}}async run(e){let r=n=>!e.controller.signal.aborted&&this.fresh(n,e.epoch)&&n.job===e.id;try{let n=this.sources.get(e.page)?.segments||[],o=e.entries.map(d=>hp(d.src,d.protectedTokens)),a=e.entries[0].index,i=n.slice(Math.max(0,a-1),a+e.entries.length+1).map(d=>d.src);a===0&&this.sources.get(e.page-1)?.segments?.length&&i.unshift(this.sources.get(e.page-1).segments.at(-1).src),a+e.entries.length>=n.length&&this.sources.get(e.page+1)?.segments?.length&&i.push(this.sources.get(e.page+1).segments[0].src);let s=i.join(`
`).slice(0,1200),l=await this.translate(e.entries.map((d,f)=>({id:d.id,text:o[f].text})),{title:e.config.title,context:s,glossary:e.config.glossary,expectedModel:e.config.model,signal:e.controller.signal,includeMetadata:!0});if(l.model&&(l.model.provider!==e.config.model?.provider||l.model.model!==e.config.model?.model)||l.promptVersion&&l.promptVersion!==e.config.model?.promptVersion){let d=new Error("\u9ED8\u8BA4\u6A21\u578B\u5DF2\u53D8\u5316\uFF0C\u8BF7\u5237\u65B0\u7FFB\u8BD1\u670D\u52A1\u3002");throw d.code="MODEL_CHANGED",d}for(let[d,f]of e.entries.entries())if(r(f)){try{let g=l.translations?.[f.id];if(!g?.trim())throw new Error("\u672C\u6BB5\u6CA1\u6709\u8FD4\u56DE\u8BD1\u6587\uFF0C\u8BF7\u91CD\u8BD5\u3002");f.zh=o[d].restore(g),f.status="done",f.cached=!1,f.key&&Promise.resolve(this.cache?.put({key:f.key,bookId:e.config.documentId,zh:f.zh})).catch(()=>{r(f)&&(this.cacheIssue="\u8BD1\u6587\u5DF2\u5B8C\u6210\uFF0C\u4F46\u672C\u5730\u7F13\u5B58\u672A\u80FD\u4FDD\u5B58\u3002",this.emit())})}catch(g){f.status="error",f.error=g.message}this.emit()}}catch(n){for(let o of e.entries)r(o)&&(o.status="error",o.error=n.message||"\u672C\u6BB5\u7FFB\u8BD1\u5931\u8D25\u3002");!e.controller.signal.aborted&&e.epoch===this.epoch&&n.code==="MODEL_CHANGED"&&this.onModelChanged()}finally{clearTimeout(e.timeout),this.jobs.delete(e.id),this.disposed||(this.emit(),this.pump())}}retry(e,r){if(e===this.activePage)for(let n of[...this.jobs.values()])n.page!==e&&this.abortJob(n);for(let n of this.entries.values())if(n.page===e&&(r?n.id===r:n.status==="error")){if(n.status==="loading"||n.status==="checking")continue;n.status="queued",n.error="",n.cached=!1}this.emit(),this.pump()}emit(){if(this.disposed)return;let e={};for(let r of this.entries.values())(e[r.page]||=[]).push({...r});for(let r of Object.values(e))r.sort((n,o)=>n.index-o.index);this.onChange({pages:e,cacheIssue:this.cacheIssue||""})}dispose(){this.disposed=!0,this.abortJobs(),this.sources.clear(),this.entries.clear()}};var Te=require("react/jsx-runtime");function Ac({page:t,source:e,rows:r=[],activeId:n,originRef:o,translation:a,onActivate:i,onClose:s}){let l=Do.default.useRef(null),{preferences:d,updatePreferences:f,paused:g,setPaused:p,modelError:u,refreshModel:T,cacheIssue:_,retry:w}=a,[A,N]=Do.default.useState(d.glossary||"");Do.default.useEffect(()=>N(d.glossary||""),[d.glossary]);let v=r.filter(P=>P.status==="done").length,I=r.filter(P=>P.status==="error").length,C=r.filter(P=>P.cached).length,E=r.map(P=>P.status).join(",");Do.default.useEffect(()=>{if(!d.linked||o.current!=="source")return;let P=l.current,x=[...P?.querySelectorAll("[data-translation-segment]")||[]].find(te=>te.dataset.translationSegment===n);if(!P||!x)return;let M=P.getBoundingClientRect(),F=x.getBoundingClientRect();(F.top<M.top+8||F.bottom>M.bottom-8)&&(P.scrollTop+=F.top-M.top-12)},[t,n,E,d.linked,d.fontSize]);let L=(P,x=!1)=>i(P,{origin:"translation",reveal:x});return(0,Te.jsxs)("aside",{className:"dshr-pdf-translation-panel","aria-label":"PDF \u4E2D\u6587\u5BF9\u7167",style:{"--dshr-translation-font-size":`${d.fontSize||16}px`},children:[(0,Te.jsxs)("header",{className:"dshr-pdf-translation-header",children:[(0,Te.jsxs)("div",{children:[(0,Te.jsx)("strong",{children:"\u4E2D\u6587\u5BF9\u7167"}),(0,Te.jsxs)("span",{children:["\u7B2C ",t," \u9875 \xB7 ",v,"/",r.length," \u6BB5",C?` \xB7 \u7F13\u5B58 ${C} \u6BB5`:""]})]}),(0,Te.jsx)("button",{type:"button","aria-label":"\u5173\u95ED\u8BD1\u6587\u4FA7\u680F",title:"\u5173\u95ED\u8BD1\u6587\u4FA7\u680F",onClick:s,children:"\xD7"})]}),(0,Te.jsxs)("div",{className:"dshr-pdf-translation-controls",children:[(0,Te.jsx)("button",{type:"button",onClick:()=>p(!g),children:g?"\u7EE7\u7EED\u7FFB\u8BD1":"\u6682\u505C\u7FFB\u8BD1"}),(0,Te.jsxs)("label",{children:[(0,Te.jsx)("input",{type:"checkbox",checked:d.linked!==!1,onChange:P=>f({linked:P.target.checked})}),"\u6BB5\u843D\u8054\u52A8"]}),(0,Te.jsx)("button",{type:"button","aria-label":"\u7F29\u5C0F\u8BD1\u6587\u5B57\u53F7",disabled:d.fontSize<=12,onClick:()=>f({fontSize:Math.max(12,d.fontSize-1)}),children:"A\u2212"}),(0,Te.jsx)("span",{className:"dshr-pdf-translation-font",children:d.fontSize||16}),(0,Te.jsx)("button",{type:"button","aria-label":"\u653E\u5927\u8BD1\u6587\u5B57\u53F7",disabled:d.fontSize>=24,onClick:()=>f({fontSize:Math.min(24,d.fontSize+1)}),children:"A\uFF0B"})]}),(0,Te.jsxs)("div",{className:"dshr-pdf-translation-options",children:[(0,Te.jsxs)("label",{children:[(0,Te.jsx)("input",{type:"checkbox",checked:!!d.showSource,onChange:P=>f({showSource:P.target.checked})}),"\u663E\u793A\u539F\u6587"]}),(0,Te.jsxs)("label",{children:[(0,Te.jsx)("input",{type:"checkbox",checked:d.prefetch!==!1,onChange:P=>f({prefetch:P.target.checked})}),"\u9884\u8BD1\u4E0B\u4E00\u9875"]})]}),(0,Te.jsxs)("details",{className:"dshr-pdf-glossary",children:[(0,Te.jsxs)("summary",{children:["\u6587\u6863\u672F\u8BED\u8868",d.glossary?" \xB7 \u5DF2\u542F\u7528":""]}),(0,Te.jsxs)("label",{children:["\u6BCF\u884C\u586B\u5199\u201C\u539F\u8BCD = \u4E2D\u6587\u8BD1\u6CD5\u201D",(0,Te.jsx)("textarea",{"aria-label":"\u6587\u6863\u672F\u8BED\u8868",maxLength:4e3,value:A,placeholder:`band gap = \u5E26\u9699
gate = \u6805\u6781`,onChange:P=>N(P.target.value)})]}),(0,Te.jsx)("button",{type:"button",disabled:zn(A)===d.glossary,onClick:()=>f({glossary:zn(A)}),children:"\u5E94\u7528\u5E76\u66F4\u65B0\u8BD1\u6587"})]}),u&&(!r.length||r.some(P=>P.status!=="done"))&&e?.segments.length!==0?(0,Te.jsxs)("div",{className:"dshr-pdf-translation-notice",role:"status",children:[u,(0,Te.jsx)("button",{type:"button",onClick:T,children:"\u5237\u65B0\u670D\u52A1"})]}):null,_?(0,Te.jsx)("div",{className:"dshr-pdf-translation-notice",role:"status",children:_}):null,g?(0,Te.jsx)("div",{className:"dshr-pdf-translation-notice",role:"status",children:"\u5DF2\u6682\u505C\uFF0C\u5DF2\u5B8C\u6210\u7684\u8BD1\u6587\u4ECD\u53EF\u9605\u8BFB\u3002"}):null,(0,Te.jsxs)("div",{className:"dshr-pdf-translation-list",ref:l,tabIndex:0,"aria-label":`\u7B2C ${t} \u9875\u8BD1\u6587`,onWheel:()=>{o.current="translation"},children:[e?e.segments.length===0?(0,Te.jsx)("p",{className:"dshr-pdf-translation-empty",children:"\u6B64\u9875\u6CA1\u6709\u53EF\u63D0\u53D6\u7684\u6587\u5B57\uFF0C\u53EF\u80FD\u662F\u626B\u63CF\u9875\u6216\u56FE\u7247\u9875\u3002"}):null:(0,Te.jsx)("p",{className:"dshr-pdf-translation-empty",children:"\u6B63\u5728\u63D0\u53D6\u5F53\u524D\u9875\u6BB5\u843D\u2026"}),(e?.segments||[]).map(P=>{let x=r.find(M=>M.id===P.id)||{status:"queued"};return(0,Te.jsxs)("article",{"data-translation-segment":P.id,"data-status":x.status,className:`dshr-pdf-translation-paragraph${n===P.id&&d.linked!==!1?" is-linked":""}`,onPointerEnter:()=>{d.linked!==!1&&L(P.id)},children:[(0,Te.jsxs)("div",{className:"dshr-pdf-translation-paragraph-head",children:[(0,Te.jsxs)("span",{children:["\u6BB5\u843D ",Number(P.id.split("-s").at(-1))+1,x.cached?" \xB7 \u7F13\u5B58":""]}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("button",{type:"button","aria-label":`\u5B9A\u4F4D\u6BB5\u843D ${P.id}`,onClick:()=>L(P.id,!0),children:"\u5B9A\u4F4D\u539F\u6587"}),x.status==="done"&&!x.passthrough?(0,Te.jsx)("button",{type:"button","aria-label":`\u91CD\u65B0\u7FFB\u8BD1\u6BB5\u843D ${P.id}`,onClick:()=>w(t,P.id),children:"\u91CD\u8BD1\u672C\u6BB5"}):null]})]}),d.showSource?(0,Te.jsx)("p",{className:"dshr-pdf-translation-original",children:P.src}):null,x.zh?(0,Te.jsx)("p",{className:"dshr-pdf-translation-result",children:x.zh}):null,x.status==="done"?null:x.status==="error"?(0,Te.jsxs)("div",{className:"dshr-pdf-translation-segment-error",children:[(0,Te.jsx)("p",{children:x.error}),(0,Te.jsx)("button",{type:"button",onClick:()=>w(t,P.id),children:"\u91CD\u8BD5\u672C\u6BB5"})]}):(0,Te.jsx)("p",{className:"dshr-pdf-translation-waiting",role:"status",children:g?"\u7B49\u5F85\u7EE7\u7EED\u7FFB\u8BD1":x.status==="loading"?"\u6B63\u5728\u7FFB\u8BD1\u672C\u6BB5\u2026":x.status==="checking"?"\u6B63\u5728\u8BFB\u53D6\u5DF2\u6709\u8BD1\u6587\u2026":"\u7B49\u5F85\u7FFB\u8BD1\u2026"})]},P.id)})]}),(0,Te.jsxs)("footer",{className:"dshr-pdf-translation-footer",children:[(0,Te.jsx)("span",{children:"\u60AC\u505C\u5BF9\u7167\u6BB5\u843D\uFF0C\u70B9\u51FB\u201C\u5B9A\u4F4D\u539F\u6587\u201D\u8FD4\u56DE\u51FA\u5904\u3002"}),I?(0,Te.jsxs)("button",{type:"button",onClick:()=>w(t),children:["\u91CD\u8BD5\u5931\u8D25\u6BB5\u843D\uFF08",I,"\uFF09"]}):null]})]})}var xr=Mt(require("react"),1);var Wi={glossary:"",fontSize:16,prefetch:!0,showSource:!1,linked:!0};function Nc({documentId:t,title:e,enabled:r,activePage:n,sources:o,visibleIds:a}){let[i,s]=xr.default.useState({documentId:"",pages:{},cacheIssue:""}),[l,d]=xr.default.useState({...Wi,documentId:""}),[f,g]=xr.default.useState(null),[p,u]=xr.default.useState(""),[T,_]=xr.default.useState(0),[w,A]=xr.default.useState(!1),N=xr.default.useRef(null);return xr.default.useEffect(()=>{if(!t)return;let v=!0;s({documentId:t,pages:{},cacheIssue:""}),A(!1);let I=new Ba({translate:so,cache:{get:Pl,put:Ol},onChange:C=>{v&&s({documentId:t,...C})},onModelChanged:()=>{v&&_(C=>C+1)}});return N.current={documentId:t,controller:I},Ll(t).catch(()=>({})).then(C=>{v&&d({...Wi,...C,documentId:t,glossary:zn(C.glossary),fontSize:Math.max(12,Math.min(24,Number(C.fontSize)||16))})}),()=>{v=!1,I.dispose(),N.current?.controller===I&&(N.current=null)}},[t]),xr.default.useEffect(()=>{if(!t)return;let v=new AbortController;u(""),tc({signal:v.signal}).then(E=>{v.signal.aborted||(g({...E,documentId:t}),E.ready||u("\u7FFB\u8BD1\u6A21\u578B\u672A\u5C31\u7EEA\uFF0C\u8BF7\u5728 DSH \u8BBE\u7F6E\u4E2D\u9009\u62E9\u9ED8\u8BA4\u6A21\u578B\u3002"))}).catch(E=>{v.signal.aborted||(u(E.message||"\u7FFB\u8BD1\u670D\u52A1\u4E0D\u53EF\u7528\u3002"),g({documentId:t,ready:!1}))});let I=()=>{document.visibilityState==="visible"&&_(E=>E+1)},C=setInterval(I,6e4);return document.addEventListener("visibilitychange",I),()=>{v.abort(),clearInterval(C),document.removeEventListener("visibilitychange",I)}},[t,T]),xr.default.useEffect(()=>{let v=N.current;if(!(!v||v.documentId!==t||l.documentId!==t||f?.documentId!==t)){v.controller.configure({documentId:t,title:e,enabled:r&&!w,canTranslate:!!f.ready,model:{provider:f.provider||"",model:f.model||"",promptVersion:f.promptVersion||""},glossary:l.glossary,prefetch:l.prefetch}),v.controller.setFocus(n,a);for(let[I,C]of Object.entries(o))Math.abs(Number(I)-n)<=3&&v.controller.registerPage(Number(I),C)}},[t,e,r,w,l.glossary,l.prefetch,l.documentId,f,n,a,o]),xr.default.useEffect(()=>{t&&l.documentId===t&&Dl(t,l).catch(()=>{})},[t,l]),{...i.documentId===t?i:{pages:{},cacheIssue:""},preferences:l.documentId===t?l:Wi,paused:w,model:f?.documentId===t?f:null,modelError:p,setPaused:A,refreshModel:()=>_(v=>v+1),updatePreferences:v=>d(I=>({...I,...v})),retry:(v,I)=>N.current?.controller.retry(v,I)}}var Cc=Mt(require("react"),1);var Bn=require("react/jsx-runtime");function $a(t){let e=Number(t);return Number.isFinite(e)?Math.min(1,Math.max(0,e)):0}function pp(t,e){typeof t=="function"&&t(e)}function Ic({annotations:t,onOpenAnnotation:e,page:r}){let n=Cc.default.useRef(e);n.current=e;let o=Array.isArray(t)?t:[],a=[];for(let i=0;i<o.length;i+=1){let s=o[i];if(!s||!Array.isArray(s.rects)||s.rects.length===0||s.kind&&s.kind!=="pdf"||r!=null&&s.page!=null&&Number(s.page)!==Number(r))continue;let l=s.style==="underline"||s.style==="note"?s.style:"highlight",d=s.color||"#f5d76e",f=s.id==null?"":String(s.id),g=Ra(`${f}|${s.createdAt||0}`),p=Ca(s.width),u=Pa(s),T=l==="note"||typeof s.note=="string"&&s.note.trim().length>0,_=null;for(let w=0;w<s.rects.length;w+=1){let A=s.rects[w];if(!A||typeof A!="object")continue;let N=$a(A.x),v=$a(A.y),I=Math.min($a(A.w),1-N),C=Math.min($a(A.h),1-v);if(!(I>.002)||!(C>.001))continue;_={x:N,y:v,width:I,height:C};let E=`${f}:${w}`;if(l==="underline")a.push((0,Bn.jsx)("svg",{className:"dshr-anno-pdf-underline",style:{left:`${N*100}%`,top:`calc(${(v+C)*100}% - 4px)`,width:`${I*100}%`,height:"5px","--dshr-anno-color":d},viewBox:"0 0 100 6",preserveAspectRatio:"none","data-anno-id":f,"aria-hidden":"true",focusable:"false",children:(0,Bn.jsx)("path",{d:Ma(g,100)})},`u:${E}`));else{let L=Math.max(C*p,.004),P=v+C*Ia(p);a.push((0,Bn.jsx)("span",{className:"dshr-anno-pdf-band",style:{left:`${N*100}%`,top:`${P*100}%`,width:`${I*100}%`,height:`${L*100}%`,"--dshr-anno-color":d},"data-anno-id":f,"aria-hidden":"true"},`b:${E}`))}}if(T&&_){let w=_.x+_.width,A=Math.min(Math.max(.005,w+.004),.972),N=Math.max(.004,_.y);a.push((0,Bn.jsx)("button",{type:"button",className:"dshr-anno-note-btn",style:{left:`${A*100}%`,top:`${N*100}%`,"--dshr-anno-color":d},"data-anno-id":f,title:u?`\u67E5\u770B\u6279\u6CE8\uFF1A${u}`:"\u67E5\u770B\u6279\u6CE8","aria-label":u?`\u67E5\u770B\u6279\u6CE8\uFF1A${u}`:"\u67E5\u770B\u6279\u6CE8",onMouseDown:v=>v.preventDefault(),onClick:()=>pp(n.current,f),children:(0,Bn.jsx)(vn,{size:12})},`n:${f}`))}}return(0,Bn.jsx)("div",{className:"dshr-anno-pdf-layer","data-anno-layer":"pdf",children:a})}var Ae=require("react/jsx-runtime"),zc=Tc+Sc;var{useCallback:Rc,useEffect:Ft,useLayoutEffect:ji,useMemo:Gi,useRef:Ee,useState:Ct}=zo.default,Vi=612,Ki=792,qi=.1,Xi=5,Mc=1.2,fp=32,gp="1000px 0px",mp=1e7,Pc=8192,bp=2,xp=160,vp=600;function Vr(t,e,r){return Math.min(r,Math.max(e,t))}function Ha(t,e,r,n,o=0){let a=t&&Number.isFinite(t.width)&&t.width>0?t.width:Vi,i=t&&Number.isFinite(t.height)&&t.height>0?t.height:Ki,s;if((e==="fit"||e==="page")&&n>0){if(s=Math.max(1,Math.floor(n)),e==="page"&&o>0){let f=Math.floor(a/i*Math.max(1,o-36));s=Math.max(1,Math.min(s,f))}}else s=Math.max(1,Math.floor(a*Vr(r,qi,Xi)));let l=s/a,d=Math.max(1,Math.floor(i*l));return{width:s,height:d,pageScale:l}}function Fo(t,e,r=mp){let n=e&&Number.isFinite(e.width)&&e.width>0?e.width:Vi,o=e&&Number.isFinite(e.height)&&e.height>0?e.height:Ki,a=Math.min(Math.max(globalThis.devicePixelRatio||1,1),2),i=t*a,s=n*o*i*i;s>r&&(i*=Math.sqrt(r/s));let l=Math.max(n,o)*i;return l>Pc&&(i*=Pc/l),Math.max(Number.EPSILON,i)}function Oc(t){let e=t&&t.name;return e==="RenderingCancelledException"||e==="AbortException"||e==="AbortError"||e==="WorkerTaskCancelled"}function Lc(t){let e=t&&t.name,r=t&&t.message?String(t.message):String(t||"");return e==="PasswordException"?"\u8BE5 PDF \u5DF2\u52A0\u5BC6\uFF0C\u9700\u8981\u5BC6\u7801\u624D\u80FD\u6253\u5F00\u3002":e==="InvalidPDFException"?"\u6587\u4EF6\u4E0D\u662F\u6709\u6548\u7684 PDF\uFF0C\u6216\u8005\u5DF2\u7ECF\u635F\u574F\u3002":e==="MissingPDFException"?"\u6CA1\u6709\u627E\u5230 PDF \u6570\u636E\u3002":e==="UnexpectedResponseException"?`PDF \u6570\u636E\u8BFB\u53D6\u5931\u8D25${r?`\uFF1A${r}`:"\u3002"} `:/dynamically imported module|Importing a module script failed|Failed to fetch|error loading|Cannot find module/i.test(r)?"PDF \u5F15\u64CE\u52A0\u8F7D\u5931\u8D25\uFF08/dsh-reader-assets/pdf.bundle.js\uFF09\u3002\u8BF7\u786E\u8BA4 Host \u5DF2\u6B63\u786E\u63D0\u4F9B\u9759\u6001\u8D44\u6E90\u540E\u91CD\u8BD5\u3002":r?`PDF \u52A0\u8F7D\u5931\u8D25\uFF1A${r}`:"PDF \u52A0\u8F7D\u5931\u8D25\u3002"}function Dc(t){if(!t)return null;let e=t.nodeType===1?t:t.parentElement;if(!e||typeof e.closest!="function")return null;let r=e.closest("[data-page]");if(!r)return null;let n=Number(r.getAttribute("data-page"));return Number.isFinite(n)?n:null}function yp(t){if(!t||t.rangeCount===0)return null;let e=t.getRangeAt(0),r=typeof e.getClientRects=="function"?e.getClientRects():null;if(!r||r.length===0){let s=e.getBoundingClientRect();return s&&(s.width||s.height)?s:null}if(r.length===1)return r[0];let n=1/0,o=1/0,a=-1/0,i=-1/0;for(let s=0;s<r.length;s+=1){let l=r[s];!l||!l.width&&!l.height||(n=Math.min(n,l.left),o=Math.min(o,l.top),a=Math.max(a,l.right),i=Math.max(i,l.bottom))}if(!Number.isFinite(n))return e.getBoundingClientRect();try{return new DOMRect(n,o,Math.max(0,a-n),Math.max(0,i-o))}catch{return e.getBoundingClientRect()}}function Fc(t){let e=fp,r=t.querySelector(".dshr-pdf-content");if(r){let n=getComputedStyle(r),o=Number.parseFloat(n.paddingLeft)||0,a=Number.parseFloat(n.paddingRight)||0;e=o+a}return Math.max(120,t.clientWidth-e)}var wp=zo.default.memo(function({pageNumber:e,dim:r,mode:n,scale:o,viewportWidth:a,viewportHeight:i,rendered:s,active:l=!0,registerPageElement:d,registerFrameElement:f,annotations:g,onOpenAnnotation:p}){let u=Ha(r,n,o,a,i),T=zo.default.useCallback(w=>d(e,w),[e,d]),_=zo.default.useCallback(w=>f(e,w),[e,f]);return(0,Ae.jsx)("div",{className:"dshr-pdf-page","data-page":e,"data-active":l?"true":"false",style:l?void 0:{display:"none"},ref:T,children:(0,Ae.jsx)("div",{className:"dshr-pdf-page-col",style:{width:`${u.width}px`},children:(0,Ae.jsxs)("div",{className:"dshr-pdf-frame","data-page":e,"data-rendered":s?"true":"false",style:{width:`${u.width}px`,height:`${u.height}px`,"--total-scale-factor":String(u.pageScale)},ref:_,children:[(0,Ae.jsx)("div",{className:"dshr-pdf-placeholder","aria-hidden":"true",children:e}),(0,Ae.jsx)("canvas",{className:"dshr-pdf-canvas",width:1,height:1}),(0,Ae.jsx)("div",{className:"dshr-pdf-text-layer"}),(0,Ae.jsx)(Ic,{annotations:g,onOpenAnnotation:p}),(0,Ae.jsx)("div",{className:"dshr-pdf-page-loading","aria-hidden":"true",children:(0,Ae.jsx)("span",{className:"dshr-pdf-spinner"})})]})})})});function Bc({data:t,documentId:e="",fileName:r="",initialPage:n=1,autoTranslate:o=!1,pageTranslations:a,onReady:i,onPageChange:s,onPageText:l,onSelection:d,onRetryTranslation:f,annotations:g=[],onOpenAnnotation:p,focusAnnotation:u,hideTranslations:T=!1,paged:_=!1,onHideTranslations:w}){let A=Ee(null);A.current={autoTranslate:o,paged:_,onReady:i,onPageChange:s,onPageText:l,onSelection:d,onRetryTranslation:f,onOpenAnnotation:p};let N=Ee(null),v=Ee(null),I=Ee(new Map),C=Ee(new Map),E=Ee(new Map),L=Ee(new Map),P=Ee({width:Vi,height:Ki}),x=Ee(new Map),M=Ee(new Set),F=Ee([]),te=Ee(new Set),U=Ee(null),re=Ee(null),ie=Ee(null),z=Ee(new Da),ne=Ee(0),$=Ee(!1),G=Ee("fit"),se=Ee(1),D=Ee(0),pe=Ee(0),be=Ee(!1),_e=Ee(0),V=Ee(1),Oe=Ee(!!o),Ie=Ee([]),Se=Ee(new Set),De=Ee(0),He=Ee(0),xt=Ee(0),h=Ee(0),c=Ee(null),S=Ee(0),b=Ee(null),Y=Ee(!1),he=Ee(""),de=Ee(0),ve=Ee(!1),ke=Ee(!1),Fe=Ee(!1),[oe,ze]=Ct("loading"),[qe,Je]=Ct(null),[Ue,Be]=Ct(null),[xe,lt]=Ct(0),[nt,We]=Ct({}),[pt,ur]=Ct(null),[yt,Et]=Ct("fit"),[ft,Ar]=Ct(1),[Ot,Nr]=Ct(0),[kt,ee]=Ct(0),[ae,we]=Ct(!1),[le,gt]=Ct(Vr(Number.parseInt(n,10)||1,1,999999)),[Ve,Jt]=Ct({}),[Tn,fn]=Ct(""),[pr,Bt]=Ct(!1),[Zn,Sn]=Ct(0),[Lt,ct]=Ct({}),[Qn,ar]=Ct([]),[Rt,$r]=Ct(null),[ir,En]=Ct(!1),an=Ee(null),sn=Ee("source"),fr=o&&!T&&!ir,sr=Nc({documentId:e,title:r,enabled:fr,activePage:le,sources:Lt,visibleIds:Qn}),fe=Ee(!1);fe.current=fr&&sr.preferences.linked!==!1,an.current=Rt;let k=Gi(()=>{let m=new Fa(xe,Ha(pt,ae?"page":yt,ft,Ot,kt).height);for(let[R,B]of Object.entries(nt))m.setHeight(Number(R),Ha(B,ae?"page":yt,ft,Ot,kt).height);return m.paddingTop=c.current?.paddingTop??18,m},[xe,pt,nt,ae,yt,ft,Ot,kt]);c.current=k,ji(()=>{let m=b.current;b.current=null,m&&m.revision===S.current&&!_&&So(m.anchor)},[k,_]),Ft(()=>{o&&!T&&En(!1)},[o,T]);function q(m,R){x.current.set(m,R),ct(B=>B[m]===R?B:Object.fromEntries(Object.entries({...B,[m]:R}).filter(([K])=>Math.abs(Number(K)-V.current)<=3)))}function ue(m,R){return[...m?.querySelectorAll("[data-pdf-segments]")||[]].filter(B=>B.dataset.pdfSegments.split("|").includes(R))}function et(m,{origin:R="source",reveal:B=!1}={},K=V.current){if(sn.current=R,$r(ot=>ot?.page===K&&ot.id===m?ot:{page:K,id:m}),R==="source"&&K!==V.current&&Ur(K),!B)return;let ce=v.current,Z=ue(C.current.get(K),m)[0];if(!ce||!Z)return;let Ne=Z.getBoundingClientRect(),Ye=ce.getBoundingClientRect();(Ne.top<Ye.top+12||Ne.bottom>Ye.bottom-12)&&ce.scrollTo({top:Math.max(0,ce.scrollTop+Ne.top-Ye.top-28),behavior:"auto"})}function dt(){let m=v.current,R=C.current.get(V.current);if(!m||!R)return;let B=m.getBoundingClientRect(),K=new Set;for(let Ne of R.querySelectorAll("[data-pdf-segments]")){let Ye=Ne.getBoundingClientRect();if(Ye.bottom>B.top+4&&Ye.top<B.bottom-4)for(let ot of Ne.dataset.pdfSegments.split("|"))K.add(ot)}let ce=[...K];ar(Ne=>Ne.join("|")===ce.join("|")?Ne:ce);let Z=an.current;ce.length&&(!Z||Z.page!==V.current||!K.has(Z.id)&&sn.current==="source")&&et(ce[0])}Ft(()=>{for(let m of C.current.values())for(let R of m.querySelectorAll("[data-pdf-segments]"))fe.current&&Number(m.dataset.page)===Rt?.page&&R.dataset.pdfSegments.split("|").includes(Rt.id)?R.dataset.pdfLinked="true":delete R.dataset.pdfLinked},[Rt,Ve,Lt,fr,sr.preferences.linked]),Ft(()=>{if(oe!=="ready")return;let m=requestAnimationFrame(dt);return()=>cancelAnimationFrame(m)},[le,oe,Lt,fr]),Ft(()=>{if(!e||!fr||sr.paused||sr.preferences.prefetch===!1||oe!=="ready"||!Ve[le]||le>=xe)return;let m=!1,R=ne.current,B=le+1,K=setTimeout(async()=>{if(!(De.current>0))try{let ce=await re.current?.getPage(B);if(!ce||m)return;let Z=await ce.getTextContent();if(m||R!==ne.current)return;q(B,Ui(Z.items,B,ce.getViewport({scale:1}).width))}catch{}},850);return()=>{m=!0,clearTimeout(K)}},[e,le,xe,oe,fr,sr.paused,sr.preferences.prefetch,Ve]),Oe.current=!!o,G.current=yt,se.current=ft,D.current=Ot,pe.current=kt,be.current=ae,_e.current=xe,pt&&(P.current=pt);function je(m){let R=L.current.get(m);return R||P.current}function wt(m){return Ha(je(m),be.current?"page":G.current,se.current,D.current,pe.current)}function Ut(m){return wt(m).pageScale}function gr(m){let R=E.current.get(m);return R||(R={page:null,token:0,wantRender:!1,rendered:!1,rendering:!1,renderTask:null,textLayer:null,textContent:null,grouped:null,lastRenderScale:null,lastRasterScale:0,textLayerReady:!1},E.current.set(m,R)),R}function Cr(m,R){Jt(B=>{if(R)return B[m]?B:{...B,[m]:!0};if(!B[m])return B;let K={...B};return delete K[m],K})}function Tt(m,R,B){if(!(R>0)||!(B>0))return!1;let K=L.current.get(m);return K&&Math.abs(K.width-R)<.05&&Math.abs(K.height-B)<.05?!1:(!b.current&&!A.current?.paged&&(b.current={anchor:mn(),revision:S.current}),L.current.set(m,{width:R,height:B}),We(ce=>({...ce,[m]:{width:R,height:B}})),Hr(),!0)}function gn(){if(A.current?.paged)return;let m=v.current;if(!m)return;let R=m.querySelector(".dshr-pdf-content");R&&c.current&&(c.current.paddingTop=Number.parseFloat(getComputedStyle(R).paddingTop)||0)}function Hr(){xt.current||(xt.current=requestAnimationFrame(()=>{xt.current=0,gn()}))}function Ur(m){if(!Number.isFinite(m)||m===V.current||(V.current=m,gt(m),sn.current="source",!Fe.current))return;let R=A.current&&A.current.onPageChange;R&&R(m)}function ia(){if(A.current?.paged||!Fe.current)return;let m=v.current;if(!m)return;let R=c.current;if(!R?.count)return;let B=m.scrollTop+Vr(m.clientHeight*.28,48,240);Ur(R.pageAt(B))}function mn(){if(A.current?.paged||!v.current||!c.current?.count)return null;let m=v.current.scrollTop,R=c.current.entryAt(m+1);return{page:R.page,ratio:Vr((m-R.top)/R.height,0,1)}}function So(m){!m||A.current?.paged||!v.current||!c.current?.count||(v.current.scrollTop=Math.max(0,c.current.top(m.page)+m.ratio*c.current.height(m.page)))}function An(m){requestAnimationFrame(()=>{requestAnimationFrame(()=>{$.current||m()})})}function Nn(m){if(!Oe.current||te.current.has(m))return;let R=x.current.get(m);if(!R||(te.current.add(m),!R.text))return;let B=A.current&&A.current.onPageText;B&&B(m,{text:R.text,segments:R.segments.map(K=>({src:K.src}))})}function sa(){M.current.forEach(m=>Nn(m))}function Wr(m,R,B){return!$.current&&B===ne.current&&R===m.token&&m.wantRender}async function Eo(m){let R=re.current,B=U.current,K=C.current.get(m);if(!R||!B||!K)return;let ce=ne.current,Z=gr(m),Ne=Z.token+=1;if(Z.renderTask){try{Z.renderTask.cancel()}catch{}Z.renderTask=null}if(Z.textLayer){try{Z.textLayer.cancel()}catch{}Z.textLayer=null}let Ye=K.querySelector("canvas.dshr-pdf-canvas"),ot=K.querySelector(".dshr-pdf-text-layer");if(!(!Ye||!ot)){Z.rendering=!0,Z.renderFailed=!1;try{let Ge=Z.page;if(!Ge){if(Ge=await R.getPage(m),!Wr(Z,Ne,ce))return;Z.page=Ge}let mt=Ge.getViewport({scale:1}),_t=je(m);(Math.abs(mt.width-_t.width)>.05||Math.abs(mt.height-_t.height)>.05)&&Tt(m,mt.width,mt.height);let ht=wt(m),No=je(m),vi=()=>A.current?.paged?m===V.current:M.current.has(m),yi=Fo(ht.pageScale,No),In=!Z.rendered&&z.current.get(m);In&&(Ye.width=In.bitmap.width,Ye.height=In.bitmap.height,Ye.getContext("2d",{alpha:!1}).drawImage(In.bitmap,0,0),Z.rendered=!0,Z.lastRenderScale=In.scale,Z.lastRasterScale=In.rasterScale,K.dataset.pdfQuality=In.rasterScale>=yi-.002?"full":"preview",N.current&&(N.current.dataset.pdfCacheHits=String((Number(N.current.dataset.pdfCacheHits)||0)+1)),Cr(m,!0));let lu=Z.lastRenderScale===null||Math.abs(Z.lastRenderScale-ht.pageScale)>=.002,Co=vi()?yi:Math.min(Fo(ht.pageScale,No,2e6),ht.pageScale);if(!Z.rendered||lu||Z.lastRasterScale<Co-.002){let mr=Math.min(Co,ht.pageScale),ca=!Z.rendered&&mr<Co-.002?[mr,Co]:[Co];for(let ln=0;ln<ca.length;ln++){if(ln&&(await new Promise(tr=>setTimeout(tr,32)),!Wr(Z,Ne,ce)||!vi()))return;let eo=ca[ln],to=Ge.getViewport({scale:eo}),Rr=document.createElement("canvas");Rr.width=Math.max(1,Math.floor(to.width)),Rr.height=Math.max(1,Math.floor(to.height));try{let tr=Ge.render({canvas:Rr,viewport:to,intent:"display",background:"#ffffff"});tr.onContinue=lr=>setTimeout(()=>{Wr(Z,Ne,ce)?lr():tr.cancel()},vi()?0:16),Z.renderTask=tr;try{await tr.promise}finally{Z.renderTask===tr&&(Z.renderTask=null)}if(!Wr(Z,Ne,ce))return;if(N.current){let lr=tr.isWorkerRendering?"pdfWorkerRenders":"pdfMainRenders";N.current.dataset[lr]=String((Number(N.current.dataset[lr])||0)+1),N.current.dataset.pdfRenderer=tr.isWorkerRendering?"worker":"main"}Ye.width=Rr.width,Ye.height=Rr.height;let ro=Ye.getContext("2d",{alpha:!1});if(!ro)throw new Error("\u65E0\u6CD5\u521B\u5EFA PDF \u753B\u5E03\u4E0A\u4E0B\u6587");if(ro.drawImage(Rr,0,0),Z.lastRenderScale=ht.pageScale,Z.lastRasterScale=eo,Z.rendered=!0,K.dataset.pdfQuality=eo>=yi-.002?"full":"preview",Cr(m,!0),typeof createImageBitmap=="function")try{let lr=await createImageBitmap(Rr);if(!Wr(Z,Ne,ce)){lr.close();return}z.current.set(m,{bitmap:lr,scale:ht.pageScale,rasterScale:eo}),N.current&&(N.current.dataset.pdfCacheBytes=String(z.current.bytes))}catch{}}finally{Rr.width=0,Rr.height=0}}}if(A.current?.paged?m!==V.current:!M.current.has(m))return;try{let mr=Z.textContent;if(!mr){if(mr=await Ge.getTextContent(),!Wr(Z,Ne,ce))return;Z.textContent=mr}Z.grouped||(Z.grouped=Ui(mr.items,m,mt.width),q(m,Z.grouped)),ot.replaceChildren();let ca=Ge.getViewport({scale:ht.pageScale}),ln=new B.TextLayer({textContentSource:mr,container:ot,viewport:ca});Z.textLayer=ln;try{await ln.render()}finally{Z.textLayer===ln&&(Z.textLayer=null)}if(!Wr(Z,Ne,ce))return;Z.textLayerReady=!0;let eo=ln.textDivs||[],to=new Map,Rr=0;mr.items.forEach((tr,ro)=>{typeof tr.str=="string"&&to.set(ro,eo[Rr++])});for(let tr of Z.grouped.segments)for(let ro of tr.itemIndices||[]){let lr=to.get(ro);if(!lr)continue;let da=new Set((lr.dataset.pdfSegments||"").split("|").filter(Boolean));da.add(tr.id),lr.dataset.pdfSegments=[...da].join("|"),lr.dataset.pdfSegment=[...da][0],fe.current&&an.current?.page===m&&da.has(an.current.id)&&(lr.dataset.pdfLinked="true")}dt()}catch(mr){Oc(mr)||console.warn("[dsh-reader] PDF \u6587\u672C\u5C42\u6E32\u67D3\u5931\u8D25",mr)}if(!Wr(Z,Ne,ce))return;M.current.has(m)&&Nn(m)}catch(Ge){Oc(Ge)||(Z.renderFailed=!0,console.warn(`[dsh-reader] \u7B2C ${m} \u9875\u6E32\u67D3\u5931\u8D25`,Ge))}finally{Z.rendering=!1}}}function Ao(){if(!$.current)for(;De.current<bp&&Ie.current.length>0;){Ie.current.sort((Ne,Ye)=>Math.abs(Ne.pageNumber-V.current)-Math.abs(Ye.pageNumber-V.current));let m=Ie.current[0],R=E.current.get(V.current);if(m.pageNumber!==V.current&&(!R?.rendered||R.rendering))break;let B=Ie.current.shift();Se.current.delete(B.pageNumber);let K=E.current.get(B.pageNumber);if(!K||!K.wantRender||K.rendering||!C.current.has(B.pageNumber))continue;De.current+=1;let ce=ne.current,Z=K.token+1;Eo(B.pageNumber).catch(()=>{}).finally(()=>{if(ce===ne.current){if(De.current=Math.max(0,De.current-1),K.wantRender&&C.current.has(B.pageNumber)){let Ne=wt(B.pageNumber),ot=(A.current?.paged?B.pageNumber===V.current:M.current.has(B.pageNumber))&&K.rendered&&!K.renderFailed&&K.lastRasterScale<Fo(Ne.pageScale,je(B.pageNumber))-.002;(K.token!==Z||ot||K.rendered&&Math.abs((K.lastRenderScale||0)-Ne.pageScale)>.002)&&Cn(B.pageNumber,{front:!0})}Ao()}})}}function Cn(m,{front:R=!1}={}){if(!C.current.has(m))return;let B=gr(m);if(B.wantRender=!0,R&&m===V.current&&!B.rendered)for(let[ce,Z]of E.current)ce!==m&&Z.renderTask&&!M.current.has(ce)&&(Z.token++,Z.renderTask.cancel());if(B.rendering)return;if(Se.current.has(m)){R&&Ie.current.sort((ce,Z)=>(Z.pageNumber===m)-(ce.pageNumber===m));return}if(B.rendered&&B.lastRenderScale!==null){let ce=wt(m);if((B.textLayerReady||(A.current?.paged?m!==V.current:!M.current.has(m)))&&Math.abs(B.lastRenderScale-ce.pageScale)<.002&&B.lastRasterScale>=(m===V.current?Fo(ce.pageScale,je(m)):Math.min(Fo(ce.pageScale,je(m),2e6),ce.pageScale))-.002)return}Se.current.add(m);let K={pageNumber:m};R?Ie.current.unshift(K):Ie.current.push(K),Ao()}function Jn(m){let R=E.current.get(m);if(!R)return;if(R.wantRender=!1,R.token+=1,R.renderTask){try{R.renderTask.cancel()}catch{}R.renderTask=null}if(R.textLayer){try{R.textLayer.cancel()}catch{}R.textLayer=null}let B=C.current.get(m);if(B){let K=B.querySelector("canvas.dshr-pdf-canvas");K&&(K.width=0,K.height=0);let ce=B.querySelector(".dshr-pdf-text-layer");ce&&ce.replaceChildren()}if(R.page){try{R.page.cleanup()}catch{}R.page=null}R.textContent=null,R.grouped=null,x.current.delete(m),R.lastRenderScale=null,R.lastRasterScale=0,R.textLayerReady=!1,R.rendered&&(R.rendered=!1,Cr(m,!1)),Ie.current.length>0&&(Ie.current=Ie.current.filter(K=>K.pageNumber!==m)),Se.current.delete(m),E.current.delete(m)}function mi(){for(let[m,R]of E.current){if(!R.rendered||!R.wantRender||R.rendering)continue;let B=wt(m);(!R.textLayerReady||R.lastRenderScale===null||Math.abs(R.lastRenderScale-B.pageScale)>.002)&&Cn(m)}}function la(m=xp){He.current&&clearTimeout(He.current),He.current=setTimeout(()=>{He.current=0,mi()},m)}function bn(m){S.current++,b.current=null,m=Vr(Math.round(Number(m)||1),1,_e.current||1);let R=v.current;if(A.current?.paged){Ur(m);return}if(!R||!c.current?.count){Ur(m);return}let B=c.current.top(m)-10;typeof R.scrollTo=="function"?R.scrollTo({top:Math.max(0,B),behavior:"auto"}):R.scrollTop=Math.max(0,B),Ur(m)}function y(m){let R=v.current;R&&R.scrollBy({top:m*R.clientHeight*.92,behavior:"auto"})}function O(m){!m||A.current?.paged||(b.current={anchor:m,revision:S.current})}function J(m){let R=mn(),B=G.current==="fit"?Ut(V.current):se.current,K=Vr(B*m,qi,Xi);be.current=!1,we(!1),G.current="custom",se.current=K,Et("custom"),Ar(K),O(R)}function Ke(){let m=mn();be.current=!1,we(!1),G.current="fit",Et("fit"),O(m)}function Re(){let m=mn(),R=!be.current;be.current=R,we(R),G.current="fit",Et("fit"),O(m),Hr()}function tt(){bn(Math.max(1,V.current-1),"smooth")}Ft(()=>{let m=v.current;if(!m||oe!=="ready")return;let R=B=>{(Number(B.detail)||1)>0?ut():tt()};return m.addEventListener("dshr-pdf-page-turn",R),()=>m.removeEventListener("dshr-pdf-page-turn",R)},[oe,xe,le]);function ut(){bn(Math.min(_e.current||1,V.current+1),"smooth")}function Ir(m,R){let B=x.current.get(m);if(!B||!B.text)return;let K=B.text,ce=R.replace(/\s+/g," ").trim(),Z=ce?K.indexOf(ce):-1,Ne=vp,Ye=0;if(Z>=0){let mt=Math.max(80,Math.floor((Ne-Math.min(ce.length,Ne-160))/2));Ye=Math.max(0,Z-mt)}let ot=Math.min(K.length,Ye+Ne);return ot-Ye<Ne&&(Ye=Math.max(0,ot-Ne)),K.slice(Ye,ot).trim()||void 0}function er(){if(he.current="",!Y.current)return;Y.current=!1;let m=A.current&&A.current.onSelection;m&&m(null)}function jr(){let m=globalThis.getSelection?globalThis.getSelection():null;if(!m||m.isCollapsed||m.rangeCount===0){er();return}let B=N.current;if(!B)return;let K=m.getRangeAt(0);if(!B.querySelector(".dshr-pdf-content")?.contains(K.commonAncestorContainer)){er();return}let ce=m.toString().replace(/\s+/g," ").trim();if(!ce){er();return}let Z=Dc(K.startContainer)||Dc(K.endContainer)||V.current,Ne=yp(m);if(!Ne)return;let Ye=[Z,ce,Math.round(Ne.left),Math.round(Ne.top),Math.round(Ne.width),Math.round(Ne.height)].join("|");if(Ye===he.current)return;he.current=Ye;let ot={text:ce,page:Z,rect:Ne},Ge=C.current.get(Z);if(Ge){let ht=hc(K,Ge);ht.length>0&&(ot.pageRects=ht)}let mt=Ir(Z,ce);mt&&(ot.context=mt),Y.current=!0;let _t=A.current&&A.current.onSelection;_t&&_t(ot)}let bi=Rc((m,R)=>{R?I.current.set(m,R):I.current.delete(m)},[]),Yh=Rc((m,R)=>{if(R){C.current.set(m,R);for(let K of F.current)K.observe(R);let B=E.current.get(m);B&&(B.rendered=!1,B.textLayerReady=!1,B.lastRenderScale=null,Cr(m,!1))}else{let B=C.current.get(m);if(B)for(let K of F.current)K.unobserve(B);M.current.delete(m),Jn(m),C.current.delete(m)}},[]);function Zh(m){let R=m.target;if(R&&typeof R.closest=="function"&&R.closest('button, a, input, textarea, select, [role="button"]'))return;let B=N.current;B&&typeof B.focus=="function"&&B.focus({preventScroll:!0})}function Qh(m){if(m.defaultPrevented||m.altKey||A.current?.paged)return;let R=m.target;if(R?.closest?.(".dshr-pdf-translation-panel"))return;let B=R&&R.tagName?R.tagName.toLowerCase():"";if(B==="input"||B==="textarea"||B==="select"||R&&R.isContentEditable)return;let K=v.current;if(!(!K||oe!=="ready"))switch(m.key){case"PageDown":m.preventDefault(),y(1);break;case"PageUp":m.preventDefault(),y(-1);break;case"Home":m.preventDefault(),K.scrollTo({top:0,behavior:"auto"}),Ur(1);break;case"End":m.preventDefault(),K.scrollTo({top:K.scrollHeight,behavior:"auto"}),Ur(_e.current||1);break;default:break}}function nl(){for(let m of E.current.values()){if(m.token+=1,m.renderTask)try{m.renderTask.cancel()}catch{}if(m.textLayer)try{m.textLayer.cancel()}catch{}if(m.page)try{m.page.cleanup()}catch{}}E.current.clear()}Ft(()=>{let m=!1,R=new AbortController,B;if(ne.current+=1,$.current=!1,ie.current?.close(),ie.current=null,re.current=null,z.current.clear(),N.current){for(let ce of["pdfReadBytes","pdfSourceBytes","pdfRangeReads","pdfCacheHits","pdfCacheBytes","pdfWorkerRenders","pdfMainRenders"])N.current.dataset[ce]="0";delete N.current.dataset.pdfRenderer}nl(),I.current.clear(),C.current.clear(),L.current.clear(),x.current.clear(),M.current.clear(),te.current.clear(),Ie.current=[],Se.current.clear(),De.current=0,b.current=null,S.current++,ke.current=!1,ze("loading"),Je(null),Be(null),lt(0),We({}),ur(null),Jt({}),fn(""),Bt(!1),gt(1),ct({}),$r(null),ar([]),V.current=0,Fe.current=!1;let K=typeof Blob<"u"&&t instanceof Blob;if(!K&&!(t instanceof ArrayBuffer)&&!ArrayBuffer.isView(t)||(K?t.size===0:t.byteLength===0)){ze("error"),Je("\u6CA1\u6709\u53EF\u663E\u793A\u7684 PDF \u6570\u636E\u3002");return}return(async()=>{try{if(B=await La(t,{signal:R.signal,onRead:ht=>{!m&&N.current&&(N.current.dataset.pdfReadBytes=String(ht.bytes),N.current.dataset.pdfSourceBytes=String(ht.total),N.current.dataset.pdfRangeReads=String(ht.reads))},onProgress:ht=>{!m&&ht?.total>0&&Be(Math.max(1,Math.min(100,Math.round(ht.loaded/ht.total*100))))},onError:ht=>{m||(ze("error"),Je(Lc(ht)))}}),m){B.close();return}ie.current=B;let{engine:ce,pdf:Z}=B;U.current=ce,re.current=Z;let Ne=await Z.getPage(1);if(m)return;let Ye=Ne.getViewport({scale:1}),ot={width:Ye.width,height:Ye.height};P.current=ot;try{Ne.cleanup()}catch{}let Ge=Vr(Number.parseInt(n,10)||1,1,Z.numPages),mt=null;if(Ge!==1)try{let ht=await Z.getPage(Ge),No=ht.getViewport({scale:1});mt={width:No.width,height:No.height},L.current.set(Ge,mt),ht.cleanup()}catch{}if(m)return;ur(ot),We(mt?{[Ge]:mt}:{}),lt(Z.numPages),_e.current=Z.numPages,Be(null),ze("ready"),gt(Ge),V.current=Ge;let _t=A.current&&A.current.onReady;_t&&_t({pageCount:Z.numPages})}catch(ce){if(m)return;B?.close(),ie.current=null,re.current=null,Be(null),ze("error"),Je(Lc(ce))}})(),()=>{if(m=!0,R.abort(),$.current=!0,ne.current+=1,nl(),B?.close(),ie.current=null,re.current=null,z.current.clear(),Ie.current=[],Se.current.clear(),He.current&&(clearTimeout(He.current),He.current=0),xt.current&&(cancelAnimationFrame(xt.current),xt.current=0),h.current&&(cancelAnimationFrame(h.current),h.current=0),Y.current){Y.current=!1;let ce=A.current&&A.current.onSelection;ce&&ce(null)}}},[t,Zn]),Ft(()=>{let m=()=>jr(),R=()=>jr(),B=()=>{de.current||(de.current=requestAnimationFrame(()=>{de.current=0;let K=globalThis.getSelection?globalThis.getSelection():null;(!K||K.isCollapsed||K.rangeCount===0)&&er()}))};return document.addEventListener("mouseup",m,!0),document.addEventListener("keyup",R,!0),document.addEventListener("selectionchange",B),()=>{document.removeEventListener("mouseup",m,!0),document.removeEventListener("keyup",R,!0),document.removeEventListener("selectionchange",B),de.current&&(cancelAnimationFrame(de.current),de.current=0)}},[]),ji(()=>{if(oe!=="ready")return;let m=v.current;if(!m)return;let R=Fc(m);R>0&&(D.current=R,Nr(R)),m.clientHeight>0&&(pe.current=m.clientHeight,ee(m.clientHeight))},[oe,xe]),Ft(()=>{_&&we(!0)},[_]),Ft(()=>{if(!_)return;let m=v.current;m&&(m.scrollTop=0)},[_]),Ft(()=>{if(!_||oe!=="ready"||xe<=0)return;M.current=new Set([le]),Nn(le);let m=[le];for(let K=1;K<=2;K+=1)m.push(le+K,le-K);let B=m.filter((K,ce,Z)=>K>=1&&K<=xe&&Z.indexOf(K)===ce).map((K,ce)=>window.setTimeout(()=>Cn(K,{front:ce===0}),ce===0?0:ce===1?30:1e3+(ce-2)*120));return()=>{for(let K of B)window.clearTimeout(K)}},[_,oe,le,xe,ae,yt,ft,Ot,kt]),Ft(()=>{if(!_||oe!=="ready")return;let m=v.current;m&&m.dispatchEvent(new CustomEvent("dshr-pdf-page-state",{detail:{page:le,pages:xe}}))},[_,oe,le,xe]),Ft(()=>{oe==="ready"&&(Hr(),la())},[ae,kt,oe]),Ft(()=>{if(oe!=="ready")return;let m=v.current;if(!m)return;let R=!1,B=null,K=null,ce=()=>{let ot=Fc(m),Ge=m.clientHeight,mt=ot>0&&Math.abs(ot-D.current)>=.5,_t=Ge>0&&Math.abs(Ge-pe.current)>=.5;if(!mt&&!_t)return;let ht=mt||_t&&be.current?mn():null;mt&&(D.current=ot,Nr(ot)),_t&&(pe.current=Ge,ee(Ge)),ht&&!A.current?.paged&&O(ht)},Z=()=>{h.current||(S.current++,b.current=null,h.current=requestAnimationFrame(()=>{h.current=0,ia(),dt()}))},Ne=null;typeof ResizeObserver=="function"&&(Ne=new ResizeObserver(()=>{R||ce()}),Ne.observe(m)),m.addEventListener("scroll",Z,{passive:!0}),!_&&typeof IntersectionObserver=="function"&&(B=new IntersectionObserver(Ge=>{for(let mt of Ge){let _t=Number(mt.target.getAttribute("data-page"));Number.isFinite(_t)&&(mt.isIntersecting?(M.current.add(_t),Cn(_t,{front:!0}),Nn(_t)):M.current.delete(_t))}},{root:m,rootMargin:"0px",threshold:0}),K=new IntersectionObserver(Ge=>{for(let mt of Ge){let _t=Number(mt.target.getAttribute("data-page"));Number.isFinite(_t)&&(mt.isIntersecting?Cn(_t):A.current?.paged||Jn(_t))}},{root:m,rootMargin:gp,threshold:0}),F.current=[B,K],An(()=>{if(!R)for(let Ge of C.current.values())B.observe(Ge),K.observe(Ge)}));let Ye=requestAnimationFrame(()=>{R||(gn(),ia())});return()=>{R=!0,cancelAnimationFrame(Ye),Ne&&Ne.disconnect(),B&&B.disconnect(),K&&K.disconnect(),F.current=[],m.removeEventListener("scroll",Z)}},[oe,xe,_]),Ft(()=>{if(oe!=="ready"||xe<=0||ke.current)return;ke.current=!0;let m=Vr(Number.parseInt(n,10)||1,1,xe),R=setTimeout(()=>{Fe.current=!0,v.current&&(gn(),bn(m,"auto"))},0);return()=>clearTimeout(R)},[oe,xe]);let ol=Ee(_);ji(()=>{ol.current!==_&&(ol.current=_,oe==="ready"&&(_?v.current.scrollTop=0:bn(V.current,"auto")))},[_,oe]),Ft(()=>{oe==="ready"&&(Hr(),la())},[oe,yt,ft,Ot,nt]),Ft(()=>{oe==="ready"&&Hr()},[oe,T]),Ft(()=>{Oe.current=!!o,o&&oe==="ready"&&sa()},[o,oe]);let xi=Gi(()=>{if(xe<=0)return[];let m=_?2:Math.min(16,Math.max(3,Math.ceil(kt/Math.max(1,Math.min(k.defaultHeight,...k.heights.values())))+1)),R=Math.max(1,le-m),B=Math.min(xe,le+m);return Array.from({length:B-R+1},(K,ce)=>R+ce)},[_,le,xe,k,kt]),al=xi[0]||1,il=xi.at(-1)||0,Jh=Gi(()=>{let m=new Map;for(let R of g||[]){if(!R||R.kind!=="pdf"||!Number.isFinite(R.page))continue;let B=m.get(R.page)||[];B.push(R),m.set(R.page,B)}return m},[g]);Ft(()=>{if(!u?.page||oe!=="ready")return;let m=setTimeout(()=>{bn(Vr(Number(u.page)||1,1,_e.current||1),"smooth")},80);return()=>clearTimeout(m)},[u,oe]);let eu=(yt==="fit"?Ut(le):ft)<Xi-.001,tu=(yt==="fit"?Ut(le):ft)>qi+.001;function ru(m){let R=m.currentTarget;fn(String(le)),Bt(!0),requestAnimationFrame(()=>{R&&typeof R.select=="function"&&R.select()})}function nu(m){let R=m.target.value.replace(/[^\d]/g,"").slice(0,6);fn(R)}function ou(){if(ve.current){ve.current=!1,Bt(!1);return}let m=Number.parseInt(Tn,10);Number.isFinite(m)&&_e.current>0&&bn(Vr(m,1,_e.current),"auto"),Bt(!1)}function au(){pr&&ou()}function iu(m){m.key==="Enter"?(m.preventDefault(),m.currentTarget.blur()):m.key==="Escape"&&(m.preventDefault(),ve.current=!0,Bt(!1),m.currentTarget.blur())}let su=pr?Tn:String(le);return(0,Ae.jsxs)("div",{className:"dshr-pdf-root",ref:N,tabIndex:0,"data-dshr-pdf":"",role:"region","aria-label":r?`PDF \u9605\u8BFB\u5668\uFF1A${r}`:"PDF \u9605\u8BFB\u5668",onKeyDown:Qh,children:[oe==="ready"?(0,Ae.jsxs)("div",{className:"dshr-pdf-toolbar",role:"toolbar","aria-label":"PDF \u9605\u8BFB\u5DE5\u5177\u680F",children:[r?(0,Ae.jsx)("span",{className:"dshr-pdf-title",title:r,children:r}):(0,Ae.jsx)("span",{className:"dshr-pdf-title"}),(0,Ae.jsx)("span",{className:"dshr-pdf-toolbar-spacer"}),(0,Ae.jsx)("button",{type:"button",className:"dshr-pdf-tbtn",title:"\u7F29\u5C0F","aria-label":"\u7F29\u5C0F",disabled:!tu,onClick:()=>J(1/Mc),children:"\u2212"}),(0,Ae.jsx)("span",{className:"dshr-pdf-zoom-percent","data-scale":ae?"page":yt==="fit"?"fit":ft,title:ae?"\u5F53\u524D\u4E3A\u6574\u9875\u663E\u793A":yt==="fit"?"\u5F53\u524D\u4E3A\u9002\u5408\u5BBD\u5EA6":"\u5F53\u524D\u7F29\u653E\u6BD4\u4F8B",children:ae?"\u6574\u9875":yt==="fit"?"\u9002\u5BBD":`${Math.round(ft*100)}%`}),(0,Ae.jsx)("button",{type:"button",className:"dshr-pdf-tbtn",title:"\u653E\u5927","aria-label":"\u653E\u5927",disabled:!eu,onClick:()=>J(Mc),children:"\uFF0B"}),(0,Ae.jsx)("button",{type:"button",className:"dshr-pdf-tbtn dshr-pdf-tbtn-wide","data-active":ae?"true":"false","aria-pressed":ae,title:ae?"\u5F53\u524D\u6574\u9875\u663E\u793A\uFF1B\u70B9\u51FB\u56DE\u5230\u9002\u5408\u5BBD\u5EA6":"\u9002\u5408\u5BBD\u5EA6\uFF1B\u70B9\u51FB\u5207\u6362\u4E3A\u6574\u9875\u663E\u793A",onClick:Re,children:ae?"\u6574\u9875":"\u9002\u5BBD"}),(0,Ae.jsx)("span",{className:"dshr-pdf-toolbar-sep","aria-hidden":"true"}),(0,Ae.jsx)("button",{type:"button",className:"dshr-pdf-tbtn",title:"\u4E0A\u4E00\u9875\uFF08PageUp\uFF09","aria-label":"\u4E0A\u4E00\u9875",disabled:le<=1,onClick:tt,children:"\u2039"}),(0,Ae.jsxs)("div",{className:"dshr-pdf-pager",children:[(0,Ae.jsx)("input",{className:"dshr-pdf-page-input",inputMode:"numeric","aria-label":"\u9875\u7801",value:su,onChange:nu,onFocus:ru,onBlur:au,onKeyDown:iu}),(0,Ae.jsxs)("span",{"aria-hidden":"true",children:["/ ",xe]})]}),(0,Ae.jsx)("button",{type:"button",className:"dshr-pdf-tbtn",title:"\u4E0B\u4E00\u9875\uFF08PageDown\uFF09","aria-label":"\u4E0B\u4E00\u9875",disabled:le>=xe,onClick:ut,children:"\u203A"})]}):null,(0,Ae.jsxs)("div",{className:"dshr-pdf-workspace",children:[(0,Ae.jsx)("div",{className:"dshr-pdf-scroll",ref:v,"data-pdf-page":_?le:void 0,"data-pdf-pages":_?xe:void 0,onMouseDown:Zh,onPointerOver:m=>{if(!fe.current||m.buttons)return;let R=m.target.closest?.("[data-pdf-segment]"),B=Number(R?.closest(".dshr-pdf-frame")?.dataset.page);R&&B&&et(R.dataset.pdfSegment,{origin:"source"},B)},children:oe==="ready"?(0,Ae.jsxs)("div",{className:"dshr-pdf-content",children:[!_&&al>1?(0,Ae.jsx)("div",{className:"dshr-pdf-spacer","aria-hidden":"true",style:{height:k.top(al)-k.paddingTop}}):null,xi.map(m=>(0,Ae.jsx)(wp,{pageNumber:m,dim:je(m),mode:ae?"page":yt,scale:ft,viewportWidth:Ot,viewportHeight:kt,active:!_||m===le,rendered:!!Ve[m],registerPageElement:bi,registerFrameElement:Yh,annotations:Jh.get(m),onOpenAnnotation:p},m)),!_&&il<xe?(0,Ae.jsx)("div",{className:"dshr-pdf-spacer","aria-hidden":"true",style:{height:k.top(xe+1)-k.top(il+1)}}):null]}):(0,Ae.jsx)("div",{className:"dshr-pdf-status",role:oe==="error"?"alert":"status",children:oe==="error"?(0,Ae.jsxs)(Ae.Fragment,{children:[(0,Ae.jsx)("p",{className:"dshr-pdf-status-title dshr-pdf-status-error",children:"PDF \u52A0\u8F7D\u5931\u8D25"}),(0,Ae.jsx)("p",{className:"dshr-pdf-status-detail",children:qe}),(0,Ae.jsx)("button",{type:"button",className:"dshr-pdf-status-retry",onClick:()=>Sn(m=>m+1),children:"\u91CD\u65B0\u52A0\u8F7D"})]}):(0,Ae.jsxs)(Ae.Fragment,{children:[(0,Ae.jsx)("span",{className:"dshr-pdf-status-spinner","aria-hidden":"true"}),(0,Ae.jsx)("p",{className:"dshr-pdf-status-title",children:"\u6B63\u5728\u52A0\u8F7D PDF\u2026"}),Ue!==null?(0,Ae.jsxs)("p",{className:"dshr-pdf-status-progress",children:[Ue,"%"]}):null]})})}),fr?(0,Ae.jsx)(Ac,{page:le,source:Lt[le],rows:e?sr.pages[le]||[]:(Lt[le]?.segments||[]).map((m,R)=>({...m,...a?.[le]?.segments?.[R]||{},status:a?.[le]?.status||"queued",error:a?.[le]?.error})),activeId:Rt?.page===le?Rt.id:null,originRef:sn,translation:e?sr:{...sr,retry:m=>{te.current.delete(m),f?.(m),Nn(m)}},onActivate:(m,R)=>et(m,R,le),onClose:()=>{En(!0),w?.()}}):null]})]})}Bc.displayName="PdfViewer";var $c=Bc;var Lr=Mt(require("react"),1);var Qb=require("react"),zt=require("react/jsx-runtime");function Ua(t,e="i"){let r=[],n=String(t??""),o=/(\*\*[^*]+\*\*|__[^_]+__|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/gu,a=0,i=0;for(let s of n.matchAll(o)){s.index>a&&r.push(n.slice(a,s.index));let l=s[0],d=`${e}-${i++}`;if(l.startsWith("**")||l.startsWith("__"))r.push((0,zt.jsx)("strong",{children:l.slice(2,-2)},d));else if(l.startsWith("`"))r.push((0,zt.jsx)("code",{children:l.slice(1,-1)},d));else{let f=/^\[([^\]]+)\]\(([^)\s]+)\)$/u.exec(l);f&&/^https?:\/\//iu.test(f[2])?r.push((0,zt.jsx)("a",{href:f[2],target:"_blank",rel:"noreferrer noopener",children:f[1]},d)):r.push(l)}a=s.index+l.length}return a<n.length&&r.push(n.slice(a)),r}function Hc({text:t}){let e=String(t??"").replace(/\r\n/gu,`
`).split(`
`),r=[],n=[],o=[],a=[],i=null,s=0,l=()=>{if(n.length===0)return;let p=n.join(" ");r.push((0,zt.jsx)("p",{children:Ua(p,`p${s}`)},`p-${s++}`)),n=[]},d=()=>{o.length!==0&&(r.push((0,zt.jsx)("ul",{children:o.map((p,u)=>(0,zt.jsx)("li",{children:Ua(p,`l${s}-${u}`)},`li-${s}-${u}`))},`ul-${s++}`)),o=[])},f=()=>{a.length!==0&&(r.push((0,zt.jsx)("blockquote",{children:a.map((p,u)=>(0,zt.jsx)("p",{children:Ua(p,`q${s}-${u}`)},`bqp-${s}-${u}`))},`bq-${s++}`)),a=[])},g=()=>{l(),d(),f()};for(let p of e){let u=p.trimEnd();if(u.trim().startsWith("```")){i===null?(g(),i=[]):(r.push((0,zt.jsx)("pre",{children:(0,zt.jsx)("code",{children:i.join(`
`)})},`pre-${s++}`)),i=null);continue}if(i!==null){i.push(p);continue}if(u.trim()===""){g();continue}let T=/^(#{1,4})\s+(.*)$/u.exec(u);if(T){g();let v=`h${Math.min(4,T[1].length)}`;r.push((0,zt.jsx)(v,{children:Ua(T[2],`h${s}`)},`h-${s++}`));continue}let _=/^\s*>\s?(.*)$/u.exec(u);if(_){l(),d(),a.push(_[1]);continue}let w=/^\s*[-*+]\s+(.*)$/u.exec(u);if(w){g(),o.push(w[1]);continue}let A=/^\s*\d+[.)]\s+(.*)$/u.exec(u);if(A){g(),o.push(A[1]);continue}if(/^\s*([-*_])(?:\s*\1){2,}\s*$/u.test(u)){g(),r.push((0,zt.jsx)("hr",{},`hr-${s++}`));continue}d(),f(),n.push(u)}return i!==null&&r.push((0,zt.jsx)("pre",{children:(0,zt.jsx)("code",{children:i.join(`
`)})},`pre-${s++}`)),g(),(0,zt.jsx)(zt.Fragment,{children:r})}var $e=require("react/jsx-runtime"),_p=["\u5E2E\u6211\u68B3\u7406\u8FD9\u6BB5\u8BDD\u7684\u8BBA\u8BC1\u7ED3\u6784","\u89E3\u91CA\u5176\u4E2D\u7684\u4E13\u4E1A\u672F\u8BED\u548C\u80CC\u666F","\u7FFB\u8BD1\u5E76\u6307\u51FA\u5173\u952E\u8BED\u6CD5","\u8FD9\u6BB5\u548C\u6211\u7684\u7814\u7A76\u95EE\u9898\u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F"];function Uc({open:t,onClose:e,seed:r,onGoogle:n,onToast:o}){let[a,i]=Lr.default.useState([]),[s,l]=Lr.default.useState(""),[d,f]=Lr.default.useState(!1),[g,p]=Lr.default.useState(""),u=Lr.default.useRef(null),T=Lr.default.useRef(null),_=r?.id??"",w=r?.text??"",A=r?.context??"",N=Lr.default.useCallback(()=>{let E=T.current;E&&requestAnimationFrame(()=>{E.scrollTop=E.scrollHeight})},[]),v=Lr.default.useCallback(async(E,{replace:L=!1,history:P}={})=>{let x=String(E??"").trim();if(!x||d)return;u.current?.abort();let M=new AbortController;u.current=M;let F={role:"user",content:x},U=L?[F]:[...P??a,F];i([...U,{role:"assistant",content:""}]),f(!0),p(""),N();let re="";try{await Li({messages:U.map(ie=>({role:ie.role,content:ie.content})),selection:w,context:A,signal:M.signal},{onDelta:ie=>{re+=ie,i(z=>{if(z.length===0)return z;let ne=[...z],$=ne[ne.length-1];return $?.role!=="assistant"?z:(ne[ne.length-1]={...$,content:re},ne)}),N()}}),re.trim()||(p("AI \u6CA1\u6709\u8FD4\u56DE\u5185\u5BB9\uFF0C\u8BF7\u91CD\u8BD5\u6216\u6362\u4E00\u79CD\u95EE\u6CD5\u3002"),i(ie=>ie.filter((z,ne)=>!(ne===ie.length-1&&z.role==="assistant"&&!z.content))))}catch(ie){if(Pn(ie))return;p(ie?.message||"AI \u8BF7\u6C42\u5931\u8D25\u3002"),i(z=>{let ne=z[z.length-1];return ne?.role==="assistant"&&!ne.content?z.slice(0,-1):z})}finally{f(!1)}},[d,A,a,N,w]);if(Lr.default.useEffect(()=>{if(!t||!_)return;u.current?.abort(),i([]),p(""),l("");let E="\u8BF7\u89E3\u91CA\u8FD9\u6BB5\u5185\u5BB9\u3002";i([{role:"user",content:E},{role:"assistant",content:""}]),f(!0);let L=new AbortController;u.current=L;let P="";return Li({messages:[{role:"user",content:E}],selection:w,context:A,signal:L.signal},{onDelta:x=>{P+=x,i(M=>{if(M.length===0)return M;let F=[...M],te=F[F.length-1];return te?.role!=="assistant"?M:(F[F.length-1]={...te,content:P},F)}),N()}}).catch(x=>{Pn(x)||p(x?.message||"AI \u8BF7\u6C42\u5931\u8D25\u3002")}).finally(()=>{f(!1),P.trim()||i(x=>x.filter((M,F)=>!(F===x.length-1&&M.role==="assistant"&&!M.content)))}),()=>L.abort()},[t,_]),Lr.default.useEffect(()=>{t||u.current?.abort()},[t]),!t)return null;let I=E=>{E.preventDefault();let L=s.trim();!L||d||(l(""),v(L))},C=E=>{let L=w||a.find(P=>P.role==="user")?.content||"";if(!L.trim()){o?.("\u5148\u5728\u6B63\u6587\u91CC\u9009\u4E2D\u4E00\u6BB5\u6587\u5B57\uFF0C\u518D\u641C\u7D22\u3002");return}n?.(L,E?"scholar":"web")};return(0,$e.jsxs)("aside",{className:"dshr-ai","aria-label":"AI \u9605\u8BFB\u52A9\u624B",children:[(0,$e.jsxs)("div",{className:"dshr-ai__head",children:[(0,$e.jsx)(xn,{size:17}),(0,$e.jsx)("strong",{children:"AI \u9605\u8BFB\u52A9\u624B"}),(0,$e.jsx)("span",{className:"dshr-chip dshr-chip--brand",children:"DSH \u9ED8\u8BA4\u6A21\u578B"}),(0,$e.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:e,"aria-label":"\u5173\u95ED AI \u9762\u677F",title:"\u5173\u95ED",children:(0,$e.jsx)(br,{size:16})})]}),(0,$e.jsxs)("div",{className:"dshr-ai__body",ref:T,children:[a.length===0?(0,$e.jsxs)("div",{className:"dshr-ai__welcome",children:[(0,$e.jsx)("strong",{children:"\u9009\u4E2D\u6B63\u6587\u4E2D\u7684\u4EFB\u610F\u53E5\u5B50"}),"\uFF0C\u6211\u4F1A\u89E3\u91CA\u542B\u4E49\u3001\u672F\u8BED\u548C\u8BED\u6CD5\uFF1B\u4E5F\u53EF\u4EE5\u76F4\u63A5\u8FFD\u95EE\uFF0C\u6216\u8DF3\u8F6C Google / Google \u5B66\u672F\u7EE7\u7EED\u67E5\u3002",(0,$e.jsx)("div",{className:"dshr-ai__suggestions",children:_p.map(E=>(0,$e.jsx)("button",{type:"button",onClick:()=>{v(E)},disabled:d,children:E},E))})]}):a.map((E,L)=>(0,$e.jsxs)("div",{className:`dshr-ai__msg${E.role==="user"?" dshr-ai__msg--user":""}`,children:[(0,$e.jsx)("span",{className:"dshr-ai__role",children:E.role==="user"?"\u4F60":"\u9605\u8BFB\u52A9\u624B"}),E.role==="assistant"?E.content?(0,$e.jsx)(Hc,{text:E.content}):d&&L===a.length-1?(0,$e.jsxs)("span",{className:"dshr-translation__loading",children:[(0,$e.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u601D\u8003\u2026"]}):null:E.content]},L)),g?(0,$e.jsxs)("div",{className:"dshr-ai__error",children:[g,(0,$e.jsx)("div",{style:{marginTop:6},children:(0,$e.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>{v(a.find(E=>E.role==="user")?.content||"\u8BF7\u91CD\u65B0\u89E3\u91CA\u8FD9\u6BB5\u5185\u5BB9\u3002",{replace:!0,history:[]})},children:[(0,$e.jsx)(fl,{size:13})," \u91CD\u65B0\u56DE\u7B54"]})})]}):null]}),(0,$e.jsx)("div",{className:"dshr-ai__foot",children:(0,$e.jsxs)("form",{onSubmit:I,children:[(0,$e.jsx)("textarea",{className:"dshr-ai__input",placeholder:"\u8FFD\u95EE\uFF1A\u8FD9\u6BB5\u7684\u8BBA\u8BC1\u6709\u4EC0\u4E48\u95EE\u9898\uFF1F\uFF0F\u672F\u8BED\u662F\u4EC0\u4E48\u610F\u601D\uFF1F",value:s,onChange:E=>l(E.target.value),onKeyDown:E=>{E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),v(s),l(""))},disabled:d,"aria-label":"\u5411 AI \u8FFD\u95EE"}),(0,$e.jsxs)("div",{className:"dshr-ai__actions",children:[(0,$e.jsx)("span",{className:"dshr-ai__hint",children:"Enter \u53D1\u9001 \xB7 Shift+Enter \u6362\u884C"}),(0,$e.jsxs)("div",{style:{display:"flex",gap:5},children:[(0,$e.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>C(!1),title:"\u7528 Google \u641C\u7D22\u9009\u4E2D\u7684\u6587\u5B57",children:[(0,$e.jsx)(ga,{size:13})," Google"]}),(0,$e.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>C(!0),title:"\u7528 Google \u5B66\u672F\u641C\u7D22\u9009\u4E2D\u7684\u6587\u5B57",children:[(0,$e.jsx)(ma,{size:13})," \u5B66\u672F"]}),(0,$e.jsxs)("button",{type:"submit",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:d||!s.trim(),children:[d?(0,$e.jsx)("span",{className:"dshr-spinner"}):(0,$e.jsx)(gl,{size:13})," \u53D1\u9001"]})]})]})]})})]})}var a0=require("react");var Xe=require("react/jsx-runtime");function Wc({selection:t,translation:e,onTranslate:r,onAnnotate:n,onExplain:o,onGoogle:a,onCopy:i,onClose:s,onRetry:l}){if(!t?.text?.trim())return null;let d=t.rect,g=476/2,p=typeof window<"u"?window.innerWidth:1200,u=typeof window<"u"?window.innerHeight:800,T=d?d.left+d.width/2:p/2,_=Math.max(g+10,Math.min(p-g-10,T)),w=d&&d.top>70?d.top-46:Math.min(u-190,(d?.bottom??0)+10),A=Math.min(u-180,w+42);return(0,Xe.jsxs)(Xe.Fragment,{children:[(0,Xe.jsxs)("div",{className:"dshr-selection",style:{left:_,top:Math.max(8,w)},role:"toolbar","aria-label":"\u9009\u4E2D\u6587\u5B57\u64CD\u4F5C",onMouseDown:N=>N.preventDefault(),children:[(0,Xe.jsxs)("button",{type:"button",className:"dshr-selection__btn dshr-selection__btn--accent",onClick:()=>r(t),children:[(0,Xe.jsx)(no,{size:14})," \u7FFB\u8BD1"]}),(0,Xe.jsxs)("button",{type:"button",className:"dshr-selection__btn dshr-selection__btn--mark",onClick:()=>n(t),title:"\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u3001\u4FBF\u7B7E\u6216\u5907\u6CE8",children:[(0,Xe.jsx)(ba,{size:14})," \u6807\u8BB0"]}),(0,Xe.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>o(t),children:[(0,Xe.jsx)(xn,{size:14})," AI \u89E3\u91CA"]}),(0,Xe.jsx)("span",{className:"dshr-selection__sep"}),(0,Xe.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>a(t.text,"web"),title:"\u7528 Google \u641C\u7D22",children:[(0,Xe.jsx)(ga,{size:14})," Google"]}),(0,Xe.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>a(t.text,"scholar"),title:"\u7528 Google \u5B66\u672F\u641C\u7D22",children:[(0,Xe.jsx)(ma,{size:14})," \u5B66\u672F"]}),(0,Xe.jsx)("span",{className:"dshr-selection__sep"}),(0,Xe.jsx)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>i(t.text),title:"\u590D\u5236\u9009\u4E2D\u6587\u5B57",children:(0,Xe.jsx)(pl,{size:14})}),(0,Xe.jsx)("button",{type:"button",className:"dshr-selection__btn",onClick:s,title:"\u5173\u95ED","aria-label":"\u5173\u95ED\u9009\u4E2D\u6587\u5B57\u5DE5\u5177\u680F",children:(0,Xe.jsx)(br,{size:13})})]}),e?(0,Xe.jsxs)("div",{className:"dshr-selection__pop",style:{left:_,top:A},onMouseDown:N=>N.preventDefault(),children:[(0,Xe.jsxs)("div",{className:"dshr-selection__pop-head",children:[(0,Xe.jsx)("span",{children:"\u4E2D\u6587\u8BD1\u6587"}),(0,Xe.jsx)("button",{type:"button",onClick:s,"aria-label":"\u5173\u95ED\u8BD1\u6587",children:(0,Xe.jsx)(br,{size:12})})]}),e.status==="loading"?(0,Xe.jsxs)("span",{className:"dshr-translation__loading",children:[(0,Xe.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u7FFB\u8BD1\u9009\u4E2D\u5185\u5BB9\u2026"]}):e.status==="error"?(0,Xe.jsxs)("span",{style:{color:"var(--dshr-error)"},children:[e.error||"\u7FFB\u8BD1\u5931\u8D25\u3002"," ",(0,Xe.jsx)("button",{type:"button",className:"dshr-translation__retry",onClick:l,children:"\u91CD\u8BD5"})]}):String(e.zh||"").split(/\n+/u).filter(Boolean).map((N,v)=>(0,Xe.jsx)("p",{style:{margin:v===0?0:"8px 0 0"},children:N},v))]}):null]})}var Wa=Mt(require("react"),1);var ge=require("react/jsx-runtime");function jc({settings:t,onChange:e,onClose:r,onClearLibrary:n,onOpenAppearance:o}){let[a,i]=Wa.default.useState(!1);Wa.default.useEffect(()=>{let l=d=>{d.key==="Escape"&&r()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[r]);let s=l=>e({...t,...l});return(0,ge.jsx)("div",{className:"dshr-modal-mask",onMouseDown:l=>{l.target===l.currentTarget&&r()},children:(0,ge.jsxs)("div",{className:"dshr-modal",role:"dialog","aria-modal":"true","aria-label":"\u9605\u8BFB\u8BBE\u7F6E",children:[(0,ge.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:12},children:[(0,ge.jsxs)("div",{style:{flex:1},children:[(0,ge.jsx)("h3",{children:"\u9605\u8BFB\u8BBE\u7F6E"}),(0,ge.jsx)("p",{children:"\u8BBE\u7F6E\u53EA\u4FDD\u5B58\u5728\u672C\u673A\uFF0C\u4E0D\u5F71\u54CD DSH \u7684\u5176\u5B83\u63D2\u4EF6\u3002"})]}),(0,ge.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:r,"aria-label":"\u5173\u95ED\u8BBE\u7F6E",children:(0,ge.jsx)(br,{size:16})})]}),(0,ge.jsxs)("div",{className:"dshr-settings-row",children:[(0,ge.jsxs)("div",{children:[(0,ge.jsx)("div",{className:"dshr-settings-row__title",children:"\u5B57\u4F53\u3001\u80CC\u666F\u4E0E\u5E03\u5C40"}),(0,ge.jsx)("div",{className:"dshr-settings-row__hint",children:"\u5B57\u4F53\u3001\u5B57\u91CD\u3001\u5B57\u53F7\u3001\u884C\u8DDD\u3001\u9605\u8BFB\u5BBD\u5EA6\u3001\u76EE\u5F55\u5BBD\u5EA6\u3001\u4EAE\u5EA6\u3001\u80CC\u666F\u989C\u8272\u4E0E\u81EA\u5B9A\u4E49\u80CC\u666F\u56FE\u7247\u3002"})]}),(0,ge.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:o,children:[(0,ge.jsx)(xa,{size:14})," \u6253\u5F00\u5916\u89C2\u9762\u677F"]})]}),(0,ge.jsxs)("div",{className:"dshr-settings-row",children:[(0,ge.jsxs)("div",{children:[(0,ge.jsx)("div",{className:"dshr-settings-row__title",children:"\u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1"}),(0,ge.jsx)("div",{className:"dshr-settings-row__hint",children:"\u6EDA\u52A8\u5230\u5916\u6587\u6BB5\u843D\u540E\u81EA\u52A8\u7FFB\u8BD1\u6210\u4E2D\u6587\uFF0C\u8BD1\u6587\u663E\u793A\u5728\u539F\u6587\u4E0B\u65B9\u3002"})]}),(0,ge.jsxs)("button",{type:"button",className:"dshr-switch",role:"switch","aria-checked":t.autoTranslate,onClick:()=>s({autoTranslate:!t.autoTranslate}),children:[(0,ge.jsx)("span",{className:"dshr-switch__track"}),t.autoTranslate?"\u5F00\u542F":"\u5173\u95ED"]})]}),(0,ge.jsxs)("div",{className:"dshr-settings-row",children:[(0,ge.jsxs)("div",{children:[(0,ge.jsx)("div",{className:"dshr-settings-row__title",children:"\u6B63\u6587\u5B57\u53F7"}),(0,ge.jsxs)("div",{className:"dshr-settings-row__hint",children:[t.fontSize,"px \xB7 \u9002\u5408\u957F\u7BC7\u9605\u8BFB\u7684\u5B57\u53F7"]})]}),(0,ge.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:5},children:[(0,ge.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--outline",onClick:()=>s({fontSize:Math.max(14,t.fontSize-1)}),"aria-label":"\u51CF\u5C0F\u5B57\u53F7",children:(0,ge.jsx)(fa,{size:15})}),(0,ge.jsxs)("span",{className:"dshr-chip",style:{minWidth:46,justifyContent:"center"},children:[t.fontSize,"px"]}),(0,ge.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--outline",onClick:()=>s({fontSize:Math.min(26,t.fontSize+1)}),"aria-label":"\u589E\u5927\u5B57\u53F7",children:(0,ge.jsx)(dn,{size:15})})]})]}),(0,ge.jsxs)("div",{className:"dshr-settings-row",children:[(0,ge.jsxs)("div",{children:[(0,ge.jsx)("div",{className:"dshr-settings-row__title",children:"\u884C\u8DDD"}),(0,ge.jsxs)("div",{className:"dshr-settings-row__hint",children:["\u5F53\u524D ",t.lineHeight.toFixed(2)]})]}),(0,ge.jsx)("input",{type:"range",min:"1.45",max:"2.2",step:"0.05",value:t.lineHeight,onChange:l=>s({lineHeight:Number(l.target.value)}),"aria-label":"\u884C\u8DDD"})]}),(0,ge.jsxs)("div",{className:"dshr-settings-row",children:[(0,ge.jsxs)("div",{children:[(0,ge.jsx)("div",{className:"dshr-settings-row__title",children:"\u7FFB\u8BD1\u4E0E AI"}),(0,ge.jsx)("div",{className:"dshr-settings-row__hint",children:"\u4F7F\u7528 DSH \u5F53\u524D\u9ED8\u8BA4\u6A21\u578B\uFF1B\u7FFB\u8BD1\u53EA\u53D1\u9001\u5F53\u524D\u6BB5\u843D\u6216\u9009\u4E2D\u6587\u5B57\uFF0C\u4E0D\u53D1\u9001\u6574\u672C\u4E66\u3002"})]}),(0,ge.jsx)("span",{className:"dshr-chip dshr-chip--brand",children:"DSH \u9ED8\u8BA4\u6A21\u578B"})]}),(0,ge.jsxs)("div",{className:"dshr-settings-row dshr-settings-row--danger",children:[(0,ge.jsxs)("div",{children:[(0,ge.jsx)("div",{className:"dshr-settings-row__title",children:"\u6E05\u7A7A\u672C\u5730\u4E66\u67B6"}),(0,ge.jsx)("div",{className:"dshr-settings-row__hint",children:"\u5220\u9664\u5DF2\u5BFC\u5165\u7684\u6240\u6709\u6587\u6863\u3001\u4E66\u5355\u3001\u6279\u6CE8\u548C\u9605\u8BFB\u8FDB\u5EA6\uFF0C\u65E0\u6CD5\u64A4\u9500\u3002"})]}),a?(0,ge.jsxs)("div",{style:{display:"flex",gap:6},children:[(0,ge.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm",onClick:()=>i(!1),children:"\u53D6\u6D88"}),(0,ge.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--danger",onClick:()=>{n(),i(!1)},children:[(0,ge.jsx)(cn,{size:13})," \u786E\u8BA4\u6E05\u7A7A"]})]}):(0,ge.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--danger",onClick:()=>i(!0),children:[(0,ge.jsx)(cn,{size:13})," \u6E05\u7A7A"]})]})]})})}function Gc({book:t,onCancel:e,onConfirm:r}){return Wa.default.useEffect(()=>{let n=o=>{o.key==="Escape"&&e()};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[e]),(0,ge.jsx)("div",{className:"dshr-modal-mask",onMouseDown:n=>{n.target===n.currentTarget&&e()},children:(0,ge.jsxs)("div",{className:"dshr-modal",role:"dialog","aria-modal":"true","aria-label":"\u5220\u9664\u6587\u6863",children:[(0,ge.jsx)("h3",{children:"\u4ECE\u4E66\u67B6\u5220\u9664\uFF1F"}),(0,ge.jsxs)("p",{children:["\u300A",t?.title||"\u672A\u547D\u540D\u6587\u6863","\u300B\u53CA\u5176\u9605\u8BFB\u8FDB\u5EA6\u4F1A\u4ECE\u672C\u673A\u5220\u9664\u3002\u539F\u59CB\u6587\u4EF6\u4E0D\u53D7\u5F71\u54CD\u3002"]}),(0,ge.jsxs)("div",{className:"dshr-modal__actions",children:[(0,ge.jsx)("button",{type:"button",className:"dshr-btn",onClick:e,children:"\u53D6\u6D88"}),(0,ge.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--danger",onClick:r,children:[(0,ge.jsx)(cn,{size:14})," \u5220\u9664"]})]})]})})}function qc({message:t}){return t?(0,ge.jsx)("div",{className:"dshr-toast",role:"status",children:t}):null}var ho=Mt(require("react"),1);var at=require("react/jsx-runtime"),kp=[{label:"Project Gutenberg",hint:"\u4E03\u4E07\u672C\u516C\u7248\u4E66",href:"https://www.gutenberg.org/"},{label:"Standard Ebooks",hint:"\u7CBE\u6821\u516C\u7248\u4E66",href:"https://standardebooks.org/"},{label:"arXiv",hint:"\u5F00\u653E\u83B7\u53D6\u8BBA\u6587",href:"https://arxiv.org/"},{label:"Open Library",hint:"\u5F00\u653E\u56FE\u4E66\u76EE\u5F55",href:"https://openlibrary.org/"},{label:"Internet Archive",hint:"\u516C\u7248\u4E0E\u5F00\u653E\u9986\u85CF",href:"https://archive.org/"},{label:"Wikisource",hint:"\u516C\u7248\u6587\u732E",href:"https://zh.wikisource.org/"}];function Xc({open:t,busy:e,onClose:r,onSubmit:n}){let[o,a]=ho.default.useState(""),[i,s]=ho.default.useState(""),l=ho.default.useRef(null);return ho.default.useEffect(()=>{t&&(s(""),window.setTimeout(()=>l.current?.focus(),30))},[t]),ho.default.useEffect(()=>{if(!t)return;let f=g=>{g.key==="Escape"&&!e&&r()};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[t,e,r]),t?(0,at.jsx)("div",{className:"dshr-modal-mask",onMouseDown:f=>{f.target===f.currentTarget&&!e&&r()},children:(0,at.jsxs)("div",{className:"dshr-modal dshr-online-modal",role:"dialog","aria-modal":"true","aria-label":"\u4ECE\u516C\u5F00\u6765\u6E90\u5BFC\u5165",children:[(0,at.jsxs)("div",{className:"dshr-online-modal__head",children:[(0,at.jsxs)("div",{children:[(0,at.jsxs)("h3",{children:[(0,at.jsx)(va,{size:17})," \u4ECE\u516C\u5F00\u6765\u6E90\u5BFC\u5165"]}),(0,at.jsx)("p",{children:"\u7C98\u8D34\u7535\u5B50\u4E66\u6587\u4EF6\u7684\u76F4\u94FE\uFF0C\u4E0B\u8F7D\u540E\u81EA\u52A8\u52A0\u5165\u4E66\u67B6\u5E76\u6253\u5F00\u3002"})]}),(0,at.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:r,disabled:e,"aria-label":"\u5173\u95ED\u5728\u7EBF\u5BFC\u5165",children:(0,at.jsx)(br,{size:16})})]}),(0,at.jsxs)("div",{className:"dshr-online-modal__notice",children:[(0,at.jsx)("strong",{children:"\u7248\u6743\u63D0\u793A"}),(0,at.jsx)("span",{children:"\u4EC5\u652F\u6301\u4F60\u786E\u8BA4\u6709\u6743\u4E0B\u8F7D\u7684\u516C\u5F00\u7248\u6743 / \u5F00\u653E\u83B7\u53D6\u8D44\u6E90\u3002\u672C\u529F\u80FD\u4E0D\u5185\u7F6E Z-Library \u7B49\u7248\u6743\u4E0D\u660E\u7684\u4E66\u6E90\uFF0C\u4E5F\u4E0D\u4F1A\u6293\u53D6\u767B\u5F55\u540E\u7684\u79C1\u5BC6\u9875\u9762\u3002"})]}),(0,at.jsxs)("form",{className:"dshr-online-modal__form",onSubmit:f=>{f.preventDefault();let g=o.trim();if(!/^https:\/\//iu.test(g)){s("\u8BF7\u8F93\u5165\u4EE5 https:// \u5F00\u5934\u7684\u7535\u5B50\u4E66\u6587\u4EF6\u76F4\u94FE\u3002");return}s(""),n(g)},children:[(0,at.jsx)("label",{htmlFor:"dshr-online-url",children:"\u6587\u4EF6\u76F4\u94FE"}),(0,at.jsxs)("div",{className:"dshr-online-modal__input",children:[(0,at.jsx)(yl,{size:15}),(0,at.jsx)("input",{ref:l,id:"dshr-online-url",type:"url",value:o,onChange:f=>{a(f.target.value),s("")},placeholder:"https://www.gutenberg.org/ebooks/11.epub3.images",spellCheck:"false",autoComplete:"off",disabled:e})]}),i?(0,at.jsx)("p",{className:"dshr-online-modal__error",children:i}):null,(0,at.jsx)("p",{className:"dshr-online-modal__hint",children:"\u652F\u6301 PDF / EPUB / MOBI / AZW3 / TXT / Markdown / HTML \u76F4\u94FE\uFF1B\u5355\u4E2A\u6587\u4EF6\u6700\u5927 120 MB\u3002 \u53E4\u767B\u5821\u3001Standard Ebooks\u3001arXiv\u3001Open Library\u3001Internet Archive \u7B49\u7AD9\u70B9\u53EF\u6B63\u5E38\u4F7F\u7528\u3002"}),(0,at.jsxs)("div",{className:"dshr-online-modal__actions",children:[(0,at.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--ghost",onClick:r,disabled:e,children:"\u53D6\u6D88"}),(0,at.jsx)("button",{type:"submit",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:e||o.trim()==="",children:e?"\u6B63\u5728\u4E0B\u8F7D\u2026":"\u4E0B\u8F7D\u5E76\u6253\u5F00"})]})]}),(0,at.jsxs)("div",{className:"dshr-online-modal__sources",children:[(0,at.jsx)("span",{children:"\u53BB\u54EA\u91CC\u627E\u4E66\uFF1F"}),(0,at.jsx)("div",{className:"dshr-online-modal__source-list",children:kp.map(f=>(0,at.jsx)("a",{href:f.href,target:"_blank",rel:"noreferrer",title:f.hint,children:f.label},f.label))})]})]})}):null}var vr=Mt(require("react"),1);var $t=class t{static GetDistanceBetweenTwoPoint(e,r){return e===null||r===null?1/0:Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))}static GetSegmentLength(e){return t.GetDistanceBetweenTwoPoint(e[0],e[1])}static GetAngleBetweenTwoLine(e,r){let n=e[0].y-e[1].y,o=r[0].y-r[1].y,a=e[1].x-e[0].x,i=r[1].x-r[0].x;return Math.acos((n*o+a*i)/(Math.sqrt(n*n+a*a)*Math.sqrt(o*o+i*i)))}static PointInRect(e,r){return r===null?null:r.x>=e.left&&r.x<=e.width+e.left&&r.y>=e.top&&r.y<=e.top+e.height?r:null}static GetRotatedPoint(e,r,n){return{x:e.x*Math.cos(n)+e.y*Math.sin(n)+r.x,y:e.y*Math.cos(n)-e.x*Math.sin(n)+r.y}}static LimitPointToCircle(e,r,n){if(t.GetDistanceBetweenTwoPoint(e,n)<=r)return n;let o=e.x,a=e.y,i=n.x,s=n.y,l=Math.sqrt(Math.pow(r,2)*Math.pow(o-i,2)/(Math.pow(o-i,2)+Math.pow(a-s,2)))+o;n.x<0&&(l*=-1);let d=(l-o)*(a-s)/(o-i)+a;return o-i+a===0&&(d=r),{x:l,y:d}}static GetIntersectBetweenTwoSegment(e,r,n){return t.PointInRect(e,t.GetIntersectBeetwenTwoLine(r,n))}static GetIntersectBeetwenTwoLine(e,r){let n=e[0].y-e[1].y,o=r[0].y-r[1].y,a=e[1].x-e[0].x,i=r[1].x-r[0].x,s=e[0].x*e[1].y-e[1].x*e[0].y,l=r[0].x*r[1].y-r[1].x*r[0].y,d=n*l-o*s,f=a*l-i*s,g=-((s*i-l*a)/(n*i-o*a)),p=-((n*l-o*s)/(n*i-o*a));if(isFinite(g)&&isFinite(p))return{x:g,y:p};if(Math.abs(d-f)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(e,r){let n=Math.abs(e.x-r.x),o=Math.abs(e.y-r.y),a=Math.max(n,o),i=[e];function s(l,d,f,g,p){return d>l?l+p*(f/g):d<l?l-p*(f/g):l}for(let l=1;l<=a;l+=1)i.push({x:s(e.x,r.x,n,a,l),y:s(e.y,r.y,o,a,l)});return i}};var Bo=class{constructor(e,r,n,o){this.direction=e;this.corner=r;this.pageWidth=parseInt(n,10),this.pageHeight=parseInt(o,10)}direction;corner;angle;position;rect;topIntersectPoint=null;sideIntersectPoint=null;bottomIntersectPoint=null;pageWidth;pageHeight;calc(e){try{return this.position=this.calcAngleAndPosition(e),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){let e=[],r=!1;return e.push(this.rect.topLeft),e.push(this.topIntersectPoint),this.sideIntersectPoint===null?r=!0:(e.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(r=!1)),e.push(this.bottomIntersectPoint),(r||this.corner==="bottom")&&e.push(this.rect.bottomLeft),e}getBottomClipArea(){let e=[];return e.push(this.topIntersectPoint),this.corner==="top"?e.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&e.push({x:this.pageWidth,y:0}),e.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?$t.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&e.push(this.sideIntersectPoint):this.corner==="top"&&e.push({x:this.pageWidth,y:this.pageHeight}),e.push(this.bottomIntersectPoint),e.push(this.topIntersectPoint),e}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){let e=$t.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?e:Math.PI-e}calcAngleAndPosition(e){let r=e;if(this.updateAngleAndGeometry(r),this.corner==="top"?r=this.checkPositionAtCenterLine(r,{x:0,y:0},{x:0,y:this.pageHeight}):r=this.checkPositionAtCenterLine(r,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(r.x-this.pageWidth)<1&&Math.abs(r.y)<1)throw new Error("Point is too small");return r}updateAngleAndGeometry(e){this.angle=this.calculateAngle(e),this.rect=this.getPageRect(e)}calculateAngle(e){let r=this.pageWidth-e.x+1,n=this.corner==="bottom"?this.pageHeight-e.y:e.y,o=2*Math.acos(r/Math.sqrt(n*n+r*r));n<0&&(o=-o);let a=Math.PI-o;if(!isFinite(o)||a>=0&&a<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(o=-o),o}getPageRect(e){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],e):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],e)}getRectFromBasePoint(e,r){return{topLeft:this.getRotatedPoint(e[0],r),topRight:this.getRotatedPoint(e[1],r),bottomLeft:this.getRotatedPoint(e[2],r),bottomRight:this.getRotatedPoint(e[3],r)}}getRotatedPoint(e,r){return{x:e.x*Math.cos(this.angle)+e.y*Math.sin(this.angle)+r.x,y:e.y*Math.cos(this.angle)-e.x*Math.sin(this.angle)+r.y}}calculateIntersectPoint(e){let r={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=$t.GetIntersectBetweenTwoSegment(r,[e,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=$t.GetIntersectBetweenTwoSegment(r,[e,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=$t.GetIntersectBetweenTwoSegment(r,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=$t.GetIntersectBetweenTwoSegment(r,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=$t.GetIntersectBetweenTwoSegment(r,[e,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=$t.GetIntersectBetweenTwoSegment(r,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(e,r,n){let o=e,a=$t.LimitPointToCircle(r,this.pageWidth,o);o!==a&&(o=a,this.updateAngleAndGeometry(o));let i=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2)),s=this.rect.bottomRight,l=this.rect.topLeft;if(this.corner==="bottom"&&(s=this.rect.topRight,l=this.rect.bottomLeft),s.x<=0){let d=$t.LimitPointToCircle(n,i,l);d!==o&&(o=d,this.updateAngleAndGeometry(o))}return o}getSegmentToShadowLine(){let e=this.getShadowStartPoint(),r=e!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint;return[e,r]}};var Yi={slide:250,cover:300,flip:500},Sp="cubic-bezier(.25,.1,.25,1)",Vc=t=>`polygon(${t.filter(Boolean).map(e=>`${e.x}px ${e.y}px`).join(",")})`,Ep=0;function Kc(t,e){let r=t.getBoundingClientRect(),n=e.querySelectorAll(".dshr-block,.dshr-chapter__kicker,.dshr-chapter__nav");return[...n.length?n:e.children].map(o=>{let a=o.getBoundingClientRect();return{element:o,top:a.top-r.top+t.scrollTop,bottom:a.bottom-r.top+t.scrollTop,left:a.left-r.left,width:a.width,height:a.height}})}function ja(t){let e=[t,...t.querySelectorAll("*")],r=new Map,n=`dshr-snapshot-${++Ep}-`;for(let o of e){o.id&&(r.set(o.id,n+r.size),o.id=r.get(o.id));for(let a of["data-seg-id","data-anno-block","data-anno-id","autofocus"])o.removeAttribute(a)}if(r.size)for(let o of e)for(let a of[...o.attributes]){if(a.name==="id")continue;let i=a.value.replace(/url\(\s*(['"]?)#([^\s)'";]+)\1\s*\)/g,(s,l,d)=>r.has(d)?`url(#${r.get(d)})`:s);(a.name==="href"||a.name==="xlink:href")&&r.has(i.slice(1))&&(i="#"+r.get(i.slice(1))),i!==a.value&&o.setAttribute(a.name,i)}}function Yc(t,e,r,n,o,a){let i=document.createElement("div");i.className="dshr-turn-page";let s=t.getBoundingClientRect(),l=e.getBoundingClientRect(),d=e.cloneNode(!1);ja(d),Object.assign(d.style,{position:"absolute",left:`${l.left-s.left}px`,top:"0",width:`${l.width}px`,height:"100%",padding:"0",margin:"0"}),i.append(d);let f=new Map([[e,d]]),g=u=>{if(f.has(u))return f.get(u);let T=u.cloneNode(!1);return ja(T),g(u.parentElement).append(T),f.set(u,T),T};for(let u of r){if(u.bottom<=n+48||u.top>=n+t.clientHeight-o||!u.height)continue;if(u.height>t.clientHeight*8)throw new Error("Snapshot block exceeds viewport budget");let T=document.createTreeWalker(u.element,4294967295);for(let N=u.element;N;N=T.nextNode())if(a.nodes-=1,N.nodeType===3&&(a.text-=N.length),a.nodes<0||a.text<0)throw new Error("Snapshot exceeds DOM budget");let _=u.element.cloneNode(!0);ja(_),Object.assign(_.style,{position:"absolute",margin:"0",boxSizing:"border-box",left:`${u.left-(l.left-s.left)}px`,top:`${u.top-n}px`,width:`${u.width}px`,height:`${u.height}px`}),g(u.element.parentElement).append(_);let w=[u.element,...u.element.querySelectorAll("*")],A=[_,..._.querySelectorAll("*")];w.forEach((N,v)=>{N.scrollLeft&&(A[v].scrollLeft=N.scrollLeft),N.tagName==="CANVAS"&&(A[v].width=N.width,A[v].height=N.height,A[v].getContext("2d")?.drawImage(N,0,0))})}let p=t.querySelector(":scope > .dshr-anno-layer");if(p){let u=p.cloneNode(!1);Object.assign(u.style,{top:"0",height:"100%"});for(let T of p.children){let _=Number.parseFloat(T.style.top),w=Number.parseFloat(T.style.height)||24;if(_+w<=n+48||_>=n+t.clientHeight-o)continue;if(--a.nodes<0)throw new Error("Snapshot marks exceed DOM budget");let A=T.cloneNode(!0);ja(A),A.style.top=`${_-n}px`,u.append(A)}i.append(u)}for(let[u,T]of[["top",48],["bottom",o]]){let _=document.createElement("div");_.className=`dshr-turn-mask dshr-turn-mask--${u}`,_.style.height=`${T}px`,i.append(_)}return i}function Ap(t,e,r){let n=new Bo(0,"bottom",String(Math.round(t)),String(Math.round(e))),o=Math.max(1e-4,Math.min(.9999,r)),a=Math.min(e*.22,t*.28)*Math.sin(Math.PI*o);if(!n.calc({x:t*(1-2*o),y:e-a-.1}))return null;let i=n.getActiveCorner(),s=n.getAngle(),l=n.getFlippingClipArea().filter(Boolean).map(d=>$t.GetRotatedPoint({x:d.x-i.x,y:d.y-i.y},{x:0,y:0},s));return{reveal:Vc(n.getBottomClipArea()),fold:Vc(l),transform:`translate3d(${i.x}px,${i.y}px,0) rotate(${s}rad)`,shadow:n.getShadowStartPoint(),shadowAngle:n.getShadowAngle()+Math.PI*1.5,strength:Math.sin(Math.PI*o)}}function Zi(t,e,r,n,o){let a={nodes:1800,text:64e3};return{page:Yc(t,e,r,n,o,a),budget:a,width:t.clientWidth,height:t.clientHeight}}function Zc({reader:t,scroll:e,stage:r,records:n,from:o,to:a,fromBottom:i,toBottom:s,mode:l,direction:d,departing:f}){let g=Object.hasOwn(Yi,l)?l:"slide",p=e.getBoundingClientRect(),u=t.getBoundingClientRect(),T=document.createElement("div");T.className=`dshr-flow-transition is-${g}`,T.dataset.direction=String(d),T.setAttribute("aria-hidden","true"),T.inert=!0,Object.assign(T.style,{left:`${p.left-u.left}px`,top:`${p.top-u.top}px`,width:`${e.clientWidth}px`,height:`${e.clientHeight}px`});let _=window.getComputedStyle(e);for(let F of Array.from(_))F.startsWith("--dshr-")&&T.style.setProperty(F,_.getPropertyValue(F));let w=f??Zi(e,r,n,o,i),A=w.page,N=Yc(e,r,n,a,s,w.budget);A.dataset.turnPage="old",N.dataset.turnPage="new",T.append(A,N);let v=[],I=0,C,E=!1,L,P=()=>{E=!0,cancelAnimationFrame(I),clearTimeout(C);for(let F of v)F.cancel();L?.(),T.remove()},x=(F,te)=>{let U=F.animate(te,{duration:Yi[g],easing:Sp,fill:"both"});return U.finished.catch(()=>{}),v.push(U),U};try{if(t.append(T),g==="slide")x(A,[{transform:"translateX(0)"},{transform:`translateX(${-d*100}%)`}]),x(N,[{transform:`translateX(${d*100}%)`},{transform:"translateX(0)"}]);else if(g==="cover"){let F=d>0?N:A,te=d>0?A:N;te.dataset.turnRole="stationary",F.dataset.turnRole="moving",te.style.zIndex="0",F.style.zIndex="1",F.classList.add("has-edge-shadow"),x(F,d>0?[{transform:"translateX(100%)"},{transform:"translateX(0)"}]:[{transform:"translateX(0)"},{transform:"translateX(100%)"}])}else{let F=d>0?A:N,te=d>0?N:A;F.style.zIndex="0",te.style.zIndex="1";let U=document.createElement("div");U.className="dshr-turn-fold";let re=document.createElement("div");re.className="dshr-turn-fold-shadow",te.append(re),T.append(U);let ie=x(T,[{opacity:1},{opacity:1}]),z=$=>{let G=d>0?$:1-$;if(G<=0){te.style.clipPath="inset(0 100% 0 0)",U.hidden=!0;return}if(G>=1){te.style.clipPath="none",U.hidden=!0,re.hidden=!0;return}let se=Ap(e.clientWidth,e.clientHeight,G);se&&(U.hidden=!1,re.hidden=!1,te.style.clipPath=se.reveal,U.style.clipPath=se.fold,U.style.transform=se.transform,se.shadow&&Object.assign(re.style,{opacity:String(se.strength*.16),transform:`translate3d(${se.shadow.x}px,${se.shadow.y-e.clientHeight}px,0) rotate(${se.shadowAngle}rad)`}))};z(0);let ne=()=>{E||(z(ie.effect.getComputedTiming().progress??0),I=requestAnimationFrame(ne))};I=requestAnimationFrame(ne)}}catch(F){throw P(),F}let M=Promise.all(v.map(F=>F.finished.catch(()=>{})));return{overlay:T,width:e.clientWidth,height:e.clientHeight,cancel:P,async play(){try{await Promise.race([M,new Promise(F=>{L=F,C=setTimeout(F,Yi[g]+300)})])}finally{P()}}}}var Ht=require("react/jsx-runtime"),Jc='input, textarea, select, [contenteditable="true"]',ed=".dshr-modal-mask,.dshr-modal,.dshr-appearance-panel,.dshr-anno-panel,.dshr-ai,.dshr-selection,.dshr-online-modal,.dshr-anno-composer,.dshr-pdf-translation-panel",Np=".dshr-topbar,.dshr-toc,.dshr-paged-controls,"+ed+","+Jc,Cp=()=>window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,Qc=220,po=null;function td({enabled:t,animation:e,bookMode:r=!1,bookFrame:n=!1,pdfMode:o=!1,frameTop:a=52,frameLeft:i=0,leftOffset:s,readerKey:l,canPrevChapter:d,canNextChapter:f,chapterEntry:g,onChapterTurn:p,onChapterEntered:u}){let[T,_]=vr.default.useState({page:1,pages:1}),[w,A]=vr.default.useState({top:48,bottom:56}),[N,v]=vr.default.useState(null),I=vr.default.useRef(null),C=vr.default.useRef(null),E=vr.default.useRef(null),L=vr.default.useRef(0),P=vr.default.useRef(-1/0),x=vr.default.useRef({});if(vr.default.useLayoutEffect(()=>{x.current={canPrevChapter:d,canNextChapter:f,chapterEntry:g,onChapterTurn:p,onChapterEntered:u,animation:e}}),vr.default.useLayoutEffect(()=>{let re=E.current;if(E.current=null,!t)return;let ie=I.current?.closest(".dshr-reader"),z=ie?.querySelector(".dshr-content,.dshr-pdf-scroll");if(!z)return;let ne=z.classList.contains("dshr-pdf-scroll"),$=z.querySelector(".dshr-content__inner"),G=ne?null:x.current.chapterEntry,se=G&&re?.entry===G?re.snapshot:null,D=G?.edge,pe=G?.direction,be=-1/0,_e=!1,V=bc(),Oe={scrollBehavior:z.style.scrollBehavior,overflowAnchor:z.style.overflowAnchor};z.style.scrollBehavior="auto",z.style.overflowAnchor="none",z.classList.add("dshr-paged-scroll");let Ie=!1,Se=!0,De=!1,He=0,xt=0,h=0,c=[],S=null,b=[],Y=null,he=[],de=!ne&&$?document.createElement("div"):null;de&&(de.className="dshr-page-tail",de.setAttribute("aria-hidden","true"),z.append(de));let ve=()=>{z.dataset.readerNavigation=String(++L.current)};ve(),A({top:48,bottom:56});let ke=()=>{if(Ie)return;z.dataset.readerPage=String(V.page),z.dataset.readerPages=String(V.pages),z.dataset.readerTarget=String(V.top),_(ae=>ae.page===V.page&&ae.pages===V.pages?ae:{page:V.page,pages:V.pages});let ee=Fe(V.top);A(ae=>ae.bottom===ee?ae:{top:48,bottom:ee})},Fe=ee=>{let ae=ee+z.clientHeight-56,we=c.find(le=>le.top<ae-.5&&le.bottom>ae+.5&&le.bottom-le.top<=z.clientHeight-48-56&&le.top>ee+48);return we?Math.max(56,z.clientHeight-(we.top-ee)):56},oe=()=>{Math.abs(z.scrollTop-V.top)>.5&&(z.scrollTop=V.top)},ze=ee=>{if(Ie||ne||_e||!$||!z.clientHeight||!z.clientWidth)return;if(De){Se=!0;return}c=xc(z,$),he=Kc(z,$);let ae=mc(c,z.clientHeight);if(de){let le=z.scrollHeight-de.offsetHeight,gt=Math.max(0,Math.ceil(ae.at(-1)+z.clientHeight-le));de.style.height=gt+"px"}let we=ee;if(we==null&&(D==="start"?we=ae[0]:D==="end"?we=ae.at(-1):G?we=Math.max(0,Math.min(1,Number(G.scrollRatio)||0))*Math.max(0,z.scrollHeight-z.clientHeight):we=vc(S,z,z.scrollTop)),V.replace(ae,we),Se=!1,oe(),S=Bi(c,V.top,z),ke(),G){let le=G;G=null,be=performance.now();let gt=se;se=null,gt&&gt.width===z.clientWidth&&gt.height===z.clientHeight&&Be(V.top,le.direction,gt),x.current.onChapterEntered?.(le,Oo(z))}},qe=ee=>{Ie||ne||_e||(Se=!0,De&&Y&&(Y.width!==z.clientWidth||Y.height!==z.clientHeight||ee?.type==="loadingdone")&&Y.cancel(),!xt&&(xt=requestAnimationFrame(()=>{xt=0,De||ze()})))},Je=()=>{He+=1,Y?.cancel(),Y=null,delete z.dataset.readerTurning,ie.classList.remove("dshr-is-turning"),De=!1,b.length=0},Ue=()=>$?.animate&&!Cp(),Be=async(ee,ae,we)=>{De=!0;let le=++He;z.dataset.readerTurning="true";try{Ue()&&(Y=Zc({reader:ie,scroll:z,stage:$,records:he,from:ee,to:V.top,fromBottom:Fe(ee),toBottom:Fe(V.top),mode:x.current.animation,direction:ae,departing:we}),ie.classList.add("dshr-is-turning")),oe(),Y&&await Y.play()}catch{}finally{!Ie&&le===He&&(Y?.cancel(),Y=null,delete z.dataset.readerTurning,ie.classList.remove("dshr-is-turning"),De=!1,Se?ze():(oe(),ke()),b.length&&lt(b.shift()))}},xe=ee=>{let{canPrevChapter:ae,canNextChapter:we,onChapterTurn:le}=x.current;if(!le||!(ee<0?ae:we))return;_e=!0,b.length=0,ve();let gt={edge:ee>0?"start":"end",direction:ee};if(Ue())try{E.current={entry:gt,snapshot:Zi(z,$,he,V.top,Fe(V.top))}}catch{}le(ee,gt)},lt=(ee,ae=!1)=>{if(Ie||_e)return;if(po=ie,ee=ee>0?1:-1,ne){z.dispatchEvent(new CustomEvent("dshr-pdf-page-turn",{detail:ee}));return}if(G){ze();return}if(ee===pe&&(ae||De||performance.now()-be<Qc))return;if(pe=null,De){b.length<32&&b.push(ee);return}if(Se&&ze(),Se||De)return;let we=V.top;if(!V.turn(ee)){xe(ee);return}D=null,S=Bi(c,V.top,z),ve(),ke(),Be(we,ee)};C.current=lt;let nt=()=>{ne||De||_e||Se||h||(h=requestAnimationFrame(()=>{h=0,!Ie&&!De&&!_e&&!Se&&oe()}))},We=ee=>{if(ne||!$||(ee.preventDefault(),_e))return;Je(),pe=null,D=null,se=null;let ae=ee.detail||{},we=Number(ae.top)||0;ae.ratio!=null&&(we=Number(ae.ratio)*Math.max(0,z.scrollHeight-z.clientHeight)),ae.element&&$.contains(ae.element)&&(we=ae.element.getBoundingClientRect().top-z.getBoundingClientRect().top+z.scrollTop-48),ve(),S=null,ze(Math.max(0,we))},pt=ee=>{if(ee.target instanceof Element&&ee.target.closest(Np)||ee.ctrlKey||ee.metaKey||Math.abs(ee.deltaY)<8&&Math.abs(ee.deltaX)<8)return;ee.preventDefault();let ae=performance.now(),we=ae-P.current;P.current=ae,we>=Qc&&lt(ee.deltaY>0||ee.deltaX>0?1:-1)},ur=ee=>{if(ee.defaultPrevented||ee.repeat||ee.ctrlKey||ee.metaKey||ee.altKey||!z.isConnected||ee.target instanceof Element&&ee.target.closest(Jc+","+ed))return;let ae=ee.target instanceof Element&&ee.target.closest(".dshr-root"),we=ee.target instanceof Element&&ee.target.closest(".dshr-reader");if(we&&we!==ie||ae&&!ae.contains(ie)||!ae&&(po?.isConnected?po!==ie:[...document.querySelectorAll(".dshr-reader")].find(Jt=>Jt.getBoundingClientRect().height>0)!==ie))return;let le=window.getSelection?.();if(le&&!le.isCollapsed)return;let gt=["ArrowDown","ArrowRight","PageDown"," "].includes(ee.key),Ve=["ArrowUp","ArrowLeft","PageUp"].includes(ee.key);!gt&&!Ve||(ee.preventDefault(),lt(gt?1:-1))},yt=ee=>{let{page:ae,pages:we}=ee.detail||{};Number.isFinite(ae)&&ae>=1&&Number.isFinite(we)&&we>=1&&_({page:ae,pages:we})},Et=ee=>{lt(Number(ee.detail)>0?1:-1)},ft=()=>{po=ie};ie.addEventListener("pointerdown",ft),z.addEventListener("wheel",pt,{passive:!1}),z.addEventListener("scroll",nt,{passive:!0}),z.addEventListener("dshr-flow-navigate",We),z.addEventListener("dshr-page-turn",Et),z.addEventListener("dshr-pdf-page-state",yt),window.addEventListener("keydown",ur);let Ar,Ot,Nr,kt=()=>{if(Ie)return;let ee=z.getBoundingClientRect(),ae=ie.getBoundingClientRect(),we={right:Math.max(0,ae.right-ee.right),center:ee.left-ae.left+ee.width/2,top:ee.top-ae.top+ee.height/2,bottom:Math.max(0,ae.bottom-ee.bottom)};v(le=>le&&Object.keys(we).every(gt=>Math.abs(le[gt]-we[gt])<.5)?le:we)};if(kt(),typeof ResizeObserver=="function"&&(Nr=new ResizeObserver(kt),Nr.observe(z),Nr.observe(ie)),ne){let ee=Number(z.dataset.pdfPage),ae=Number(z.dataset.pdfPages);ee>0&&ae>0&&_({page:ee,pages:ae})}else ze(),typeof ResizeObserver=="function"&&(Ar=new ResizeObserver(qe),Ar.observe(z),Ar.observe($)),typeof MutationObserver=="function"&&(Ot=new MutationObserver(qe),Ot.observe($,{subtree:!0,childList:!0,characterData:!0})),$.addEventListener("load",qe,!0),document.fonts?.addEventListener("loadingdone",qe),document.fonts?.ready.then(qe);return()=>{Ie=!0,Je(),cancelAnimationFrame(xt),cancelAnimationFrame(h),Ar?.disconnect(),Nr?.disconnect(),Ot?.disconnect(),$?.removeEventListener("load",qe,!0),document.fonts?.removeEventListener("loadingdone",qe),z.removeEventListener("wheel",pt),z.removeEventListener("scroll",nt),z.removeEventListener("dshr-flow-navigate",We),z.removeEventListener("dshr-page-turn",Et),z.removeEventListener("dshr-pdf-page-state",yt),window.removeEventListener("keydown",ur),ie.removeEventListener("pointerdown",ft),po===ie&&(po=null),z.classList.remove("dshr-paged-scroll"),Object.assign(z.style,Oe);for(let ee of["readerPage","readerPages","readerTarget","readerNavigation","readerTurning"])delete z.dataset[ee];de?.remove(),C.current=null}},[t,r,l]),!t)return null;let{page:M,pages:F}=T,te=M<=1&&!d,U=M>=F&&!f&&!(o&&F<=1);return(0,Ht.jsxs)("div",{ref:I,className:`dshr-paged-controls${r?" is-book":""}${n?" has-book-frame":""}`,style:{"--dshr-paged-left":`${Math.max(10,Number(s)||10)}px`,...N?{"--dshr-paged-right":`${N.right+12}px`,"--dshr-paged-center":`${N.center}px`,"--dshr-paged-top":`${N.top}px`,"--dshr-paged-bottom":`${N.bottom+14}px`}:{},"--dshr-book-frame-top":`${Math.max(0,Number(a)||0)}px`,"--dshr-book-frame-left":`${Math.max(0,Number(i)||0)}px`,"--dshr-book-top-cover":`${w.top}px`,"--dshr-book-bottom-cover":`${w.bottom}px`},"aria-live":"polite",children:[n?(0,Ht.jsxs)(Ht.Fragment,{children:[(0,Ht.jsx)("div",{className:"dshr-book-mask dshr-book-mask--top","aria-hidden":"true"}),(0,Ht.jsx)("div",{className:"dshr-book-mask dshr-book-mask--bottom","aria-hidden":"true"})]}):null,(0,Ht.jsx)("button",{type:"button",className:"dshr-paged-btn dshr-paged-prev",onClick:re=>{te||C.current?.(-1,re.detail>1)},disabled:te,title:"\u4E0A\u4E00\u9875\uFF08\u2190 / \u2191 / PageUp\uFF09","aria-label":"\u4E0A\u4E00\u9875",children:(0,Ht.jsx)(oo,{size:20})}),(0,Ht.jsx)("button",{type:"button",className:"dshr-paged-btn dshr-paged-next",onClick:re=>{U||C.current?.(1,re.detail>1)},disabled:U,title:"\u4E0B\u4E00\u9875\uFF08\u2192 / \u2193 / PageDown / \u7A7A\u683C\uFF09","aria-label":"\u4E0B\u4E00\u9875",children:(0,Ht.jsx)(ao,{size:20})}),(0,Ht.jsxs)("div",{className:"dshr-paged-status",title:"\u7FFB\u9875\u8FDB\u5EA6",children:[(0,Ht.jsx)("b",{children:M}),(0,Ht.jsx)("span",{children:"/"}),(0,Ht.jsx)("em",{children:F})]})]})}var un=Mt(require("react"),1);var ns=Object.freeze([Object.freeze({id:"serif",label:"\u5B8B\u4F53 / Serif",stack:'"Songti SC", "Noto Serif SC", "Source Han Serif SC", "STSong", "SimSun", "\u5B8B\u4F53", Georgia, "Times New Roman", serif'}),Object.freeze({id:"sans",label:"\u9ED1\u4F53 / Sans",stack:'"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", "Segoe UI", system-ui, -apple-system, sans-serif'}),Object.freeze({id:"kai",label:"\u6977\u4F53 / Kai",stack:'"Kaiti SC", "STKaiti", "KaiTi", "\u6977\u4F53", "Noto Serif SC", "Songti SC", "SimSun", serif'}),Object.freeze({id:"system",label:"\u7CFB\u7EDF\u9ED8\u8BA4",stack:'system-ui, -apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif'})]),os=Object.freeze([Object.freeze({value:400,label:"\u5E38\u89C4"}),Object.freeze({value:500,label:"\u4E2D\u7B49"}),Object.freeze({value:600,label:"\u52A0\u7C97"})]),G0=Object.freeze([Object.freeze({id:"scroll",label:"\u6EDA\u52A8"}),Object.freeze({id:"book",label:"\u6A2A\u7248"})]),id=Object.freeze([Object.freeze({id:"slide",label:"\u6A2A\u5411\u6ED1\u9875",hint:"\u524D\u540E\u4E24\u9875\u8FDE\u7EED\u5E73\u79FB\u8854\u63A5\uFF0C\u4E0D\u6DE1\u51FA\u6B63\u6587"}),Object.freeze({id:"cover",label:"\u4E66\u9875\u8986\u76D6",hint:"\u65B0\u9875\u4ECE\u53F3\u4FA7\u8986\u76D6\u9759\u6B62\u5E95\u9875\uFF0C\u56DE\u7FFB\u65F6\u63ED\u5F00\u5F53\u524D\u9875"}),Object.freeze({id:"flip",label:"3D \u4E66\u9875",hint:"\u4ECE\u53F3\u4E0B\u9875\u89D2\u5411\u4E66\u810A\u6298\u53E0\uFF0C\u5E26\u7EB8\u80CC\u4E0E\u52A8\u6001\u9634\u5F71"})]),Xa=Object.freeze([Object.freeze({id:"paper",label:"\u7EB8\u5F20",bg:"#fbf7ee",ink:"#2b2a26",muted:"#736f64",border:"rgba(43, 42, 38, 0.15)",accent:"#9a6b2f"}),Object.freeze({id:"white",label:"\u767D\u8272",bg:"#ffffff",ink:"#1f2328",muted:"#5c6370",border:"rgba(31, 35, 40, 0.13)",accent:"#3f5ce0"}),Object.freeze({id:"sepia",label:"\u7F8A\u76AE\u7EB8",bg:"#f2e6cf",ink:"#453322",muted:"#715f47",border:"rgba(69, 51, 34, 0.18)",accent:"#8f5a24"}),Object.freeze({id:"green",label:"\u62A4\u773C\u7EFF",bg:"#e3efe4",ink:"#263a2b",muted:"#556b5a",border:"rgba(38, 58, 43, 0.17)",accent:"#3d6a47"}),Object.freeze({id:"night",label:"\u591C\u95F4",bg:"#1c1e22",ink:"#e9e6dd",muted:"#a6a29a",border:"rgba(233, 230, 221, 0.16)",accent:"#d2a76b"}),Object.freeze({id:"custom",label:"\u81EA\u5B9A\u4E49"})]),Gt=Object.freeze({fontSize:18,lineHeight:1.85,fontFamily:"serif",fontWeight:400,contentWidth:760,tocWidth:260,readingMode:"scroll",pageAnimation:"slide",bookAnimation:"slide",brightness:1,backgroundPreset:"paper",customBackground:"#fbf7ee",textTone:"auto",backgroundImageKey:"",backgroundImageOpacity:.26,backgroundImageBlur:0}),Me=Object.freeze({fontSize:Object.freeze({min:13,max:34,step:1}),lineHeight:Object.freeze({min:1.35,max:2.4,step:.05}),contentWidth:Object.freeze({min:520,max:1600,step:20}),tocWidth:Object.freeze({min:180,max:520,step:10}),brightness:Object.freeze({min:.6,max:1.2,step:.01}),backgroundImageOpacity:Object.freeze({min:0,max:.8,step:.01}),backgroundImageBlur:Object.freeze({min:0,max:12,step:1})}),$o=Object.freeze(os.map(t=>t.value)),Ip=Object.freeze(Xa.map(t=>t.id)),Rp=new Map(Xa.map(t=>[t.id,t])),rd=new Map(ns.map(t=>[t.id,t])),Mp=Object.freeze(["auto","dark","light"]),es=Object.freeze({ink:"#181511",muted:"#6b6559",border:"rgba(32, 29, 24, 0.15)",tone:"dark"}),ts=Object.freeze({ink:"#f8f5ec",muted:"#b3ada0",border:"rgba(245, 242, 233, 0.18)",tone:"light"}),Pp="#8a5a24",Op="#d8b06a",nd=Object.freeze({white:"#ffffff",black:"#000000",red:"#ff0000",lime:"#00ff00",blue:"#0000ff",yellow:"#ffff00",aqua:"#00ffff",cyan:"#00ffff",fuchsia:"#ff00ff",magenta:"#ff00ff",silver:"#c0c0c0",gray:"#808080",grey:"#808080",maroon:"#800000",olive:"#808000",green:"#008000",purple:"#800080",teal:"#008080",navy:"#000080",orange:"#ffa500",pink:"#ffc0cb",brown:"#a52a2a",gold:"#ffd700",beige:"#f5f5dc",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",turquoise:"#40e0d0",salmon:"#fa8072",coral:"#ff7f50",indigo:"#4b0082",violet:"#ee82ee",wheat:"#f5deb3",tan:"#d2b48c",snow:"#fffafa",linen:"#faf0e6"});function fo(t){return Math.max(0,Math.min(255,Math.round(t)))}function Lp(t){let e=t.slice(1);if(!/^[0-9a-f]+$/iu.test(e))return null;if(e.length===3||e.length===4){let[r,n,o]=e.slice(0,3).split("").map(a=>Number.parseInt(`${a}${a}`,16));return{r,g:n,b:o}}return e.length===6||e.length===8?{r:Number.parseInt(e.slice(0,2),16),g:Number.parseInt(e.slice(2,4),16),b:Number.parseInt(e.slice(4,6),16)}:null}function Dp(t){let e=/^([+-]?(?:\d+\.?\d*|\.\d+))(%?)$/u.exec(t);if(!e)return null;let r=Number(e[1]);return Number.isFinite(r)?(e[2]==="%"&&(r=r/100*255),fo(r)):null}function Fp(t){let e=t.replace(/\//gu," ").split(/[\s,]+/u).filter(Boolean);if(e.length<3)return null;let r=e.slice(0,3).map(Dp);return r.some(n=>n===null)?null:{r:r[0],g:r[1],b:r[2]}}function Qi(t,e,r){let n=r;return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function zp(t){let e=t.replace(/\//gu," ").split(/[\s,]+/u).filter(Boolean);if(e.length<3)return null;let r=Number.parseFloat(e[0]),n=Number.parseFloat(e[1]),o=Number.parseFloat(e[2]);if(![r,n,o].every(Number.isFinite))return null;let a=Math.max(0,Math.min(100,n))/100,i=Math.max(0,Math.min(100,o))/100,s=(r%360+360)%360/360;if(a===0){let f=fo(i*255);return{r:f,g:f,b:f}}let l=i<.5?i*(1+a):i+a-i*a,d=2*i-l;return{r:fo(Qi(d,l,s+1/3)*255),g:fo(Qi(d,l,s)*255),b:fo(Qi(d,l,s-1/3)*255)}}function Ga(t){if(typeof t!="string")return null;let e=t.trim().toLowerCase();if(!e)return null;if(e.startsWith("#"))return Lp(e);if(e in nd)return Ga(nd[e]);let r=/^([a-z]+)\((.*)\)$/u.exec(e);if(!r)return null;let n=r[1],o=r[2];return n==="rgb"||n==="rgba"?Fp(o):n==="hsl"||n==="hsla"?zp(o):null}function od({r:t,g:e,b:r}){return`#${[t,e,r].map(n=>fo(n).toString(16).padStart(2,"0")).join("")}`}function Ji(t){let e=t/255;return e<=.03928?e/12.92:((e+.055)/1.055)**2.4}function ad(t){let e=Ga(t);return e?.2126*Ji(e.r)+.7152*Ji(e.g)+.0722*Ji(e.b):1}function qa(t,e){let r=ad(t),n=ad(e),o=Math.max(r,n),a=Math.min(r,n);return(o+.05)/(a+.05)}function as(t,e="#ffffff"){let r=Ga(t);if(r)return od(r);let n=Ga(e);return n?od(n):"#ffffff"}function rs(t){let e=qa(es.ink,t);return qa(ts.ink,t)>e?{...ts}:{...es}}function sd(t){let e=rs(t);return{ink:e.ink,muted:e.muted,border:e.border}}function Dr(t,e,r,n){let o=Number(t);return Number.isFinite(o)?Math.max(e,Math.min(r,o)):n}function Bp(t){return Ip.includes(t)?t:"paper"}function $p(t){return Mp.includes(t)?t:"auto"}function Hp(t){let e=Number(t);if(!Number.isFinite(e))return 400;let r=Math.max($o[0],Math.min($o[$o.length-1],e)),n=$o[0],o=Number.POSITIVE_INFINITY;for(let a of $o){let i=Math.abs(a-r);i<o&&(n=a,o=i)}return n}function Up(t){return(rd.get(t)||rd.get("serif")).stack}function Wp(t){return t>=600?700:600}function is(t){let e=t&&typeof t=="object"?t:{},r=Bp(e.backgroundPreset),n=as(e.customBackground,Gt.customBackground),o=r==="custom"?null:Rp.get(r),a=o?o.bg:n,i=rs(a);o&&(i={ink:o.ink,muted:o.muted,border:o.border});let s=$p(e.textTone);s==="dark"?i={...es}:s==="light"&&(i={...ts});let l=o?o.accent:rs(a).tone==="light"?Op:Pp,d=Hp(e.fontWeight);return{preset:r,bg:a,ink:i.ink,muted:i.muted,border:i.border,accent:l,fontFamily:Up(e.fontFamily),fontWeight:d,headingWeight:Wp(d),width:Dr(e.contentWidth,Me.contentWidth.min,Me.contentWidth.max,Gt.contentWidth),brightness:Dr(e.brightness,Me.brightness.min,Me.brightness.max,Gt.brightness),imageOpacity:Dr(e.backgroundImageOpacity,Me.backgroundImageOpacity.min,Me.backgroundImageOpacity.max,Gt.backgroundImageOpacity),imageBlur:Dr(e.backgroundImageBlur,Me.backgroundImageBlur.min,Me.backgroundImageBlur.max,Gt.backgroundImageBlur)}}function jp(t){return`url("${String(t).replace(/[\n\r\f]/gu," ").replace(/\\/gu,"\\\\").replace(/"/gu,'\\"')}")`}function Va(t,e){let r=is(t),n=typeof e=="string"&&e.trim()?jp(e.trim()):"none";return{"--dshr-reader-bg":r.bg,"--dshr-reader-ink":r.ink,"--dshr-reader-muted":r.muted,"--dshr-reader-border":r.border,"--dshr-reader-accent":r.accent,"--dshr-reader-font":r.fontFamily,"--dshr-reader-weight":String(r.fontWeight),"--dshr-reader-heading-weight":String(r.headingWeight),"--dshr-reader-width":`${r.width}px`,"--dshr-reader-brightness":String(r.brightness),"--dshr-reader-image-opacity":String(r.imageOpacity),"--dshr-reader-image-blur":`${r.imageBlur}px`,"--dshr-reader-image":n}}var ss=String.raw`
/* ============================================================ defaults ===== */

.dshr-root {
  --dshr-reader-bg: #fbf7ee;
  --dshr-reader-ink: #2b2a26;
  --dshr-reader-muted: #736f64;
  --dshr-reader-border: rgba(43, 42, 38, 0.15);
  --dshr-reader-accent: #9a6b2f;
  --dshr-reader-font: "Songti SC", "Noto Serif SC", "Source Han Serif SC", "STSong", "SimSun", "宋体", Georgia, "Times New Roman", serif;
  --dshr-reader-weight: 400;
  --dshr-reader-heading-weight: 600;
  --dshr-reader-width: 760px;
  --dshr-reader-brightness: 1;
  --dshr-reader-image-opacity: 0.26;
  --dshr-reader-image-blur: 0px;
  --dshr-reader-image: none;
}

/* ====================================================== flow reader surface = */

.dshr-content {
  container-type: size;
  position: relative;
  isolation: isolate;
  background-color: var(--dshr-reader-bg, #fbf7ee);
  color: var(--dshr-reader-ink, #2b2a26);
  filter: brightness(var(--dshr-reader-brightness, 1));
  scrollbar-width: thin;
  scrollbar-color: color-mix(in srgb, var(--dshr-reader-muted, #736f64) 46%, transparent) transparent;
}

/* Sticky image layer: full scrollport, painted above the page color and below
   the content. A 100cqh height plus the matching negative margin keep it out of
   layout flow while the sticky box stays pinned to the scrollport. */
.dshr-content::before {
  content: "";
  position: sticky;
  top: 0;
  z-index: -1;
  display: block;
  flex: none;
  width: 100%;
  height: 100cqh;
  margin-bottom: -100cqh;
  pointer-events: none;
  background-image: var(--dshr-reader-image, none);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: var(--dshr-reader-image-opacity, 0.26);
  filter: blur(var(--dshr-reader-image-blur, 0px));
}

.dshr-content__inner {
  width: min(var(--dshr-reader-width), calc(100% - 48px));
  overflow-wrap: break-word;
  color: var(--dshr-reader-ink, #2b2a26);
}

.dshr-content.is-pdf .dshr-content__inner {
  width: 100%;
}

.dshr-content::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.dshr-content::-webkit-scrollbar-thumb {
  border: 2px solid transparent;
  border-radius: 6px;
  background: color-mix(in srgb, var(--dshr-reader-muted, #736f64) 40%, transparent);
  background-clip: content-box;
}

.dshr-content::-webkit-scrollbar-thumb:hover {
  background: color-mix(in srgb, var(--dshr-reader-muted, #736f64) 58%, transparent);
  background-clip: content-box;
}

.dshr-content ::selection {
  background: color-mix(in srgb, var(--dshr-reader-accent, #9a6b2f) 26%, transparent);
}

/* ------------------------------------------------------------ flow typography */

.dshr-block {
  font-family: var(--dshr-reader-font, serif);
  font-weight: var(--dshr-reader-weight, 400);
  color: var(--dshr-reader-ink, #2b2a26);
}

.dshr-block[data-kind="heading"] :is(h1, h2, h3, h4, h5, h6) {
  font-family: var(--dshr-reader-font, serif);
  font-weight: var(--dshr-reader-heading-weight, 600);
  color: var(--dshr-reader-ink, #2b2a26);
}

.dshr-chapter__kicker {
  color: var(--dshr-reader-muted, #736f64);
}

.dshr-block[data-kind="list-item"]::before {
  color: var(--dshr-reader-accent, #9a6b2f);
}

.dshr-block[data-kind="quote"] {
  color: var(--dshr-reader-muted, #736f64);
  border-left-color: color-mix(in srgb, var(--dshr-reader-accent, #9a6b2f) 55%, transparent);
}

.dshr-block[data-kind="code"] {
  background: color-mix(in srgb, var(--dshr-reader-ink, #2b2a26) 5%, var(--dshr-reader-bg, #fbf7ee));
  border-color: var(--dshr-reader-border, rgba(43, 42, 38, 0.15));
  color: var(--dshr-reader-ink, #2b2a26);
}

.dshr-block[data-kind="table"] :is(td, th) {
  border-color: var(--dshr-reader-border, rgba(43, 42, 38, 0.15));
}

.dshr-block[data-kind="table"] th {
  background: color-mix(in srgb, var(--dshr-reader-ink, #2b2a26) 5%, var(--dshr-reader-bg, #fbf7ee));
}

.dshr-block[data-kind="image"] figcaption {
  color: var(--dshr-reader-muted, #736f64);
}

.dshr-block[data-kind="rule"] {
  background: var(--dshr-reader-border, rgba(43, 42, 38, 0.15));
}

.dshr-block a {
  color: var(--dshr-reader-accent, #9a6b2f);
  border-bottom-color: color-mix(in srgb, var(--dshr-reader-accent, #9a6b2f) 34%, transparent);
}

.dshr-block a:hover {
  border-bottom-color: var(--dshr-reader-accent, #9a6b2f);
}

.dshr-block :is(ruby, rt) {
  color: var(--dshr-reader-muted, #736f64);
}

/* -------------------------------------------------- translation + navigation */

.dshr-translation {
  background: color-mix(in srgb, var(--dshr-reader-ink, #2b2a26) 6%, var(--dshr-reader-bg, #fbf7ee));
  border-color: color-mix(in srgb, var(--dshr-reader-ink, #2b2a26) 13%, transparent);
  color: var(--dshr-reader-muted, #736f64);
}

.dshr-translation::before {
  color: var(--dshr-reader-accent, #9a6b2f);
}

.dshr-translation.is-error {
  background: color-mix(in srgb, var(--dshr-reader-bg, #fbf7ee) 88%, #d64545);
  border-color: color-mix(in srgb, var(--dshr-reader-bg, #fbf7ee) 58%, #d64545);
  color: color-mix(in srgb, var(--dshr-reader-ink, #2b2a26) 55%, #d64545);
}

.dshr-translation__retry {
  color: color-mix(in srgb, var(--dshr-reader-ink, #2b2a26) 55%, #d64545);
}

.dshr-translation__loading {
  color: var(--dshr-reader-muted, #736f64);
}

/* A transition page is a presentation-only copy outside the scroll container.
   Share all descendant control paint rules with it, so a dark host skin cannot
   replace the reading paper's palette at either end of a turn. Do not give the
   copy .dshr-content: that class also identifies the live navigation surface. */
:is(.dshr-content, .dshr-turn-page) .dshr-spinner {
  border-color: color-mix(in srgb, var(--dshr-reader-ink, #2b2a26) 18%, transparent);
  border-top-color: var(--dshr-reader-accent, #9a6b2f);
}

:is(.dshr-content, .dshr-turn-page) .dshr-btn {
  color: var(--dshr-reader-muted, #736f64);
}

:is(.dshr-content, .dshr-turn-page) .dshr-btn:hover {
  background: color-mix(in srgb, var(--dshr-reader-ink, #2b2a26) 8%, transparent);
  color: var(--dshr-reader-ink, #2b2a26);
}

:is(.dshr-content, .dshr-turn-page) .dshr-btn--outline {
  background: color-mix(in srgb, var(--dshr-reader-bg, #fbf7ee) 52%, transparent);
  border-color: var(--dshr-reader-border, rgba(43, 42, 38, 0.15));
}

:is(.dshr-content, .dshr-turn-page) .dshr-btn--outline:hover {
  border-color: color-mix(in srgb, var(--dshr-reader-ink, #2b2a26) 30%, transparent);
}

.dshr-chapter__nav {
  border-top-color: var(--dshr-reader-border, rgba(43, 42, 38, 0.15));
}

/* ======================================================= PDF reader surface = */

.dshr-pdf-scroll {
  container-type: size;
  position: relative;
  isolation: isolate;
  background-color: var(--dshr-reader-bg, #fbf7ee);
  scrollbar-color: color-mix(in srgb, var(--dshr-reader-muted, #736f64) 44%, transparent) transparent;
}

.dshr-pdf-scroll::before {
  content: "";
  position: sticky;
  top: 0;
  z-index: -1;
  display: block;
  flex: none;
  width: 100%;
  height: 100cqh;
  margin-bottom: -100cqh;
  pointer-events: none;
  background-image: var(--dshr-reader-image, none);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: var(--dshr-reader-image-opacity, 0.26);
  filter: blur(var(--dshr-reader-image-blur, 0px));
}

/* A small fixed gutter keeps fit-width pages away from the scrollbar without
   duplicating the user-facing reading-width control. */
.dshr-pdf-content {
  padding-left: 20px;
  padding-right: 20px;
}

.dshr-pdf-scroll {
  filter: brightness(var(--dshr-reader-brightness, 1));
}

/* ================================================== responsive refinement === */

@container (max-width: 720px) {
  .dshr-content__inner {
    width: min(var(--dshr-reader-width), calc(100% - 28px));
  }

  .dshr-pdf-content {
    padding-left: 12px;
    padding-right: 12px;
  }
}

/* ======================================================= appearance panel == */

.dshr-appearance-mask {
  position: fixed;
  inset: 0;
  z-index: 96;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  background: var(--dsw-alias-bg-mask-1, rgba(15, 23, 42, 0.32));
  animation: dshr-appearance-fade 0.16s ease-out;
}

@keyframes dshr-appearance-fade {
  from { opacity: 0; }
}

@keyframes dshr-appearance-slide {
  from { opacity: 0; transform: translateX(26px); }
}

@keyframes dshr-appearance-sheet {
  from { opacity: 0; transform: translateY(30px); }
}

.dshr-appearance-panel {
  --dshr-appearance-surface: var(--dshr-layer-2, var(--dsw-alias-bg-layer-2, #ffffff));
  --dshr-appearance-surface-2: var(--dshr-layer, var(--dsw-alias-bg-layer-1, #f6f7f8));
  --dshr-appearance-surface-3: var(--dshr-layer-3, var(--dsw-alias-bg-layer-3, #f0f1f3));
  --dshr-appearance-fg: var(--dshr-fg, var(--dsw-alias-label-primary, #1f2328));
  --dshr-appearance-fg-2: var(--dshr-fg-2, var(--dsw-alias-label-secondary, #5c6370));
  --dshr-appearance-fg-3: var(--dshr-fg-3, var(--dsw-alias-label-tertiary, #8a919c));
  --dshr-appearance-border: var(--dshr-border, var(--dsw-alias-border-l2, rgba(31, 35, 40, 0.10)));
  --dshr-appearance-border-strong: var(--dshr-border-strong, var(--dsw-alias-border-l3, rgba(31, 35, 40, 0.16)));
  --dshr-appearance-hover: var(--dshr-hover, var(--dsw-alias-interactive-bg-hover, rgba(31, 35, 40, 0.055)));
  --dshr-appearance-brand: var(--dshr-brand, var(--dsw-alias-state-business-primary, #4d6bfe));
  --dshr-appearance-on-brand: var(--dshr-on-brand, #ffffff);
  --dshr-appearance-brand-soft: color-mix(in srgb, var(--dshr-appearance-brand) 12%, transparent);

  position: relative;
  display: flex;
  flex-direction: column;
  width: min(400px, 100vw);
  max-width: 100vw;
  height: 100%;
  background: var(--dshr-appearance-surface);
  color: var(--dshr-appearance-fg);
  border-left: 1px solid var(--dshr-appearance-border);
  box-shadow: -20px 0 60px rgba(15, 23, 42, 0.22);
  outline: none;
  animation: dshr-appearance-slide 0.2s cubic-bezier(0.2, 0.9, 0.25, 1);
}

.dshr-appearance-panel *,
.dshr-appearance-panel *::before,
.dshr-appearance-panel *::after {
  box-sizing: border-box;
}

.dshr-appearance-head {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 16px 14px 13px 18px;
  border-bottom: 1px solid var(--dshr-appearance-border);
}

.dshr-appearance-head__text {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.dshr-appearance-head__text strong {
  font-size: 15px;
  font-weight: 650;
  letter-spacing: 0.01em;
}

.dshr-appearance-head__text span {
  color: var(--dshr-appearance-fg-3);
  font-size: 11.5px;
  line-height: 1.5;
}

.dshr-appearance-close {
  flex: 0 0 auto;
  width: 28px;
  height: 28px;
  padding: 0;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--dshr-appearance-fg-3);
}

.dshr-appearance-close:hover {
  background: var(--dshr-appearance-hover);
  color: var(--dshr-appearance-fg);
}

.dshr-appearance-body {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 14px 16px 20px;
  scrollbar-width: thin;
  scrollbar-color: color-mix(in srgb, var(--dshr-appearance-fg-3) 38%, transparent) transparent;
}

.dshr-appearance-body::-webkit-scrollbar {
  width: 9px;
}

.dshr-appearance-body::-webkit-scrollbar-thumb {
  border: 2px solid transparent;
  border-radius: 6px;
  background: color-mix(in srgb, var(--dshr-appearance-fg-3) 34%, transparent);
  background-clip: content-box;
}

/* ---------------------------------------------------------------- preview */

.dshr-appearance-preview {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  flex: 0 0 auto;
  border: 1px solid var(--dshr-reader-border, rgba(43, 42, 38, 0.15));
  border-radius: 12px;
  background-color: var(--dshr-reader-bg, #fbf7ee);
  color: var(--dshr-reader-ink, #2b2a26);
  min-height: 154px;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);
}

.dshr-appearance-preview::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image: var(--dshr-reader-image, none);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: var(--dshr-reader-image-opacity, 0.26);
  filter: blur(var(--dshr-reader-image-blur, 0px));
}

.dshr-appearance-preview__badge {
  position: absolute;
  top: 9px;
  right: 10px;
  z-index: 1;
  padding: 2px 7px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--dshr-reader-bg, #fbf7ee) 72%, var(--dshr-reader-ink, #2b2a26));
  color: var(--dshr-reader-ink, #2b2a26);
  font-size: 9.5px;
  letter-spacing: 0.08em;
  opacity: 0.66;
}

.dshr-appearance-preview__inner {
  position: relative;
  padding: 18px 20px 16px;
  font-family: var(--dshr-reader-font, serif);
  font-weight: var(--dshr-reader-weight, 400);
  color: var(--dshr-reader-ink, #2b2a26);
}

.dshr-appearance-preview__kicker {
  display: block;
  margin-bottom: 5px;
  color: var(--dshr-reader-muted, #736f64);
  font-size: 0.68em;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.dshr-appearance-preview__title {
  margin: 0 0 0.3em;
  font-family: var(--dshr-reader-font, serif);
  font-weight: var(--dshr-reader-heading-weight, 600);
  font-size: 1.42em;
  line-height: 1.28;
  color: var(--dshr-reader-ink, #2b2a26);
}

.dshr-appearance-preview__text {
  margin: 0 0 0.45em;
  color: var(--dshr-reader-ink, #2b2a26);
}

.dshr-appearance-preview__quote {
  margin: 0;
  padding-left: 0.75em;
  border-left: 2px solid var(--dshr-reader-accent, #9a6b2f);
  color: var(--dshr-reader-muted, #736f64);
}

/* --------------------------------------------------------------- sections */

.dshr-appearance-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dshr-appearance-section__title {
  margin: 0;
  color: var(--dshr-appearance-fg-3);
  font-size: 10.5px;
  font-weight: 650;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.dshr-appearance-hint {
  margin: 0;
  color: var(--dshr-appearance-fg-3);
  font-size: 10.5px;
  line-height: 1.6;
}

.dshr-appearance-field {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.dshr-appearance-field__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  color: var(--dshr-appearance-fg-2);
  font-size: 12.5px;
}

.dshr-appearance-field__value {
  color: var(--dshr-appearance-fg-3);
  font-size: 11px;
  font-variant-numeric: tabular-nums;
}

.dshr-appearance-field__value.is-warning {
  color: var(--dsw-alias-state-warn-primary, #b54708);
}

/* --------------------------------------------------------------- swatches */

.dshr-appearance-swatches {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}

.dshr-appearance-swatch {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  padding: 7px;
  border: 1px solid var(--dshr-appearance-border);
  border-radius: 10px;
  background: transparent;
  color: var(--dshr-appearance-fg-2);
  text-align: left;
  transition: border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
}

.dshr-appearance-swatch:hover {
  border-color: var(--dshr-appearance-border-strong);
  background: var(--dshr-appearance-hover);
}

.dshr-appearance-swatch.is-active {
  border-color: var(--dshr-appearance-brand);
  box-shadow: 0 0 0 2px var(--dshr-appearance-brand-soft);
}

.dshr-appearance-swatch__chip {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 27px;
  border-radius: 6px;
  border: 1px solid rgba(15, 23, 42, 0.12);
  font-size: 12.5px;
  font-weight: 650;
}

.dshr-appearance-swatch__label {
  overflow: hidden;
  color: var(--dshr-appearance-fg-2);
  font-size: 10.5px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.dshr-appearance-swatch.is-active .dshr-appearance-swatch__label {
  color: var(--dshr-appearance-fg);
  font-weight: 600;
}

/* ----------------------------------------------------------- custom color */

.dshr-appearance-colorrow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--dshr-appearance-fg-2);
  font-size: 12.5px;
}

.dshr-appearance-colorrow__control {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.dshr-appearance-color {
  width: 30px;
  height: 28px;
  padding: 0;
  border: 1px solid var(--dshr-appearance-border-strong);
  border-radius: 8px;
  background: var(--dshr-appearance-surface-2);
  cursor: pointer;
}

.dshr-appearance-color::-webkit-color-swatch-wrapper {
  padding: 3px;
}

.dshr-appearance-color::-webkit-color-swatch {
  border: 0;
  border-radius: 5px;
}

.dshr-appearance-colorrow__hex {
  color: var(--dshr-appearance-fg-3);
  font-family: "Cascadia Code", "SFMono-Regular", Consolas, monospace;
  font-size: 10.5px;
  letter-spacing: 0.02em;
}

/* ------------------------------------------------------------- segmented */

.dshr-appearance-segmented {
  display: flex;
  gap: 2px;
  padding: 3px;
  border: 1px solid var(--dshr-appearance-border);
  border-radius: 10px;
  background: var(--dshr-appearance-surface-2);
}

.dshr-appearance-segmented__item {
  flex: 1 1 0;
  min-width: 0;
  height: 28px;
  padding: 0 6px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--dshr-appearance-fg-2);
  font-size: 12px;
  line-height: 1;
  white-space: nowrap;
  transition: background 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;
}

.dshr-appearance-segmented__item:hover {
  color: var(--dshr-appearance-fg);
}

.dshr-appearance-segmented__item[aria-pressed="true"] {
  background: var(--dshr-appearance-surface);
  color: var(--dshr-appearance-fg);
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.12);
}

/* ---------------------------------------------------------------- families */

.dshr-appearance-families {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
}

.dshr-appearance-family {
  height: 38px;
  padding: 0 10px;
  border: 1px solid var(--dshr-appearance-border);
  border-radius: 9px;
  background: transparent;
  color: var(--dshr-appearance-fg-2);
  font-size: 12.5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: border-color 0.15s ease, background 0.15s ease, color 0.15s ease;
}

.dshr-appearance-family:hover {
  border-color: var(--dshr-appearance-border-strong);
  color: var(--dshr-appearance-fg);
}

.dshr-appearance-family[aria-pressed="true"] {
  border-color: var(--dshr-appearance-brand);
  background: var(--dshr-appearance-brand-soft);
  color: var(--dshr-appearance-fg);
}

.dshr-appearance-animations {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
}

.dshr-appearance-animation {
  height: 38px;
  padding: 0 8px;
  border: 1px solid var(--dshr-appearance-border);
  border-radius: 9px;
  background: transparent;
  color: var(--dshr-appearance-fg-2);
  font-size: 12.5px;
  white-space: nowrap;
  transition: border-color 0.15s ease, background 0.15s ease, color 0.15s ease;
}

.dshr-appearance-animation:hover {
  border-color: var(--dshr-appearance-border-strong);
  color: var(--dshr-appearance-fg);
}

.dshr-appearance-animation[aria-pressed="true"] {
  border-color: var(--dshr-appearance-brand);
  background: var(--dshr-appearance-brand-soft);
  color: var(--dshr-appearance-fg);
}

/* ----------------------------------------------------------------- sliders */

.dshr-appearance-slider {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.dshr-appearance-slider.is-disabled {
  opacity: 0.45;
}

.dshr-appearance-slider__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  color: var(--dshr-appearance-fg-2);
  font-size: 12.5px;
}

.dshr-appearance-slider__value {
  color: var(--dshr-appearance-fg-3);
  font-size: 11px;
  font-variant-numeric: tabular-nums;
}

.dshr-appearance-slider input[type="range"] {
  width: 100%;
  height: 18px;
  margin: 0;
  accent-color: var(--dshr-appearance-brand);
  cursor: pointer;
}

.dshr-appearance-slider.is-disabled input[type="range"] {
  cursor: not-allowed;
}

.dshr-appearance-slider__hint {
  color: var(--dshr-appearance-fg-3);
  font-size: 10.5px;
  line-height: 1.55;
}

/* ------------------------------------------------------------ image block */

.dshr-appearance-image {
  display: flex;
  align-items: center;
  gap: 10px;
}

.dshr-appearance-image__thumb {
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  overflow: hidden;
  border: 1px dashed var(--dshr-appearance-border-strong);
  border-radius: 10px;
  background: var(--dshr-appearance-surface-2);
  color: var(--dshr-appearance-fg-3);
}

.dshr-appearance-image__thumb.has-image {
  border-style: solid;
  border-color: var(--dshr-appearance-border);
}

.dshr-appearance-image__thumb img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.dshr-appearance-image__meta {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.dshr-appearance-image__meta strong {
  color: var(--dshr-appearance-fg);
  font-size: 12px;
  font-weight: 600;
}

.dshr-appearance-image__meta span {
  color: var(--dshr-appearance-fg-3);
  font-size: 10.5px;
  line-height: 1.5;
}

.dshr-appearance-image__actions {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

/* ---------------------------------------------------------------- buttons */

.dshr-appearance-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 30px;
  padding: 0 12px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  color: var(--dshr-appearance-fg-2);
  font-size: 12px;
  line-height: 1;
  white-space: nowrap;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.dshr-appearance-btn:hover {
  background: var(--dshr-appearance-hover);
  color: var(--dshr-appearance-fg);
}

.dshr-appearance-btn[disabled] {
  opacity: 0.42;
  cursor: not-allowed;
}

.dshr-appearance-btn[disabled]:hover {
  background: transparent;
  color: var(--dshr-appearance-fg-2);
}

.dshr-appearance-btn--sm {
  height: 26px;
  padding: 0 9px;
  border-radius: 7px;
  font-size: 11.5px;
}

.dshr-appearance-btn--soft {
  background: var(--dshr-appearance-surface-2);
  border-color: var(--dshr-appearance-border);
}

.dshr-appearance-btn--soft:hover {
  border-color: var(--dshr-appearance-border-strong);
}

.dshr-appearance-btn--ghost {
  color: var(--dshr-appearance-fg-3);
}

.dshr-appearance-btn--danger {
  color: #d64545;
  border-color: color-mix(in srgb, #d64545 30%, transparent);
}

.dshr-appearance-btn--primary {
  background: var(--dshr-appearance-brand);
  color: var(--dshr-appearance-on-brand);
  box-shadow: 0 5px 16px color-mix(in srgb, var(--dshr-appearance-brand) 22%, transparent);
}

.dshr-appearance-btn--primary:hover {
  background: color-mix(in srgb, var(--dshr-appearance-brand) 86%, #000000);
  color: var(--dshr-appearance-on-brand);
}

/* ------------------------------------------------------------------ footer */

.dshr-appearance-foot {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 11px 16px 13px;
  border-top: 1px solid var(--dshr-appearance-border);
  background: var(--dshr-appearance-surface);
}

.dshr-appearance-foot .dshr-appearance-btn {
  height: 33px;
}

/* --------------------------------------------------------------- focus ring */

.dshr-appearance-panel :is(button, input):focus-visible {
  outline: 2px solid var(--dshr-appearance-brand);
  outline-offset: 2px;
}

/* -------------------------------------------------------------- responsive */

@media (max-width: 560px) {
  .dshr-appearance-mask {
    align-items: flex-end;
    background: var(--dsw-alias-bg-mask-1, rgba(15, 23, 42, 0.36));
  }

  .dshr-appearance-panel {
    width: 100%;
    height: min(92vh, 860px);
    border-left: 0;
    border-top: 1px solid var(--dshr-appearance-border);
    border-radius: 18px 18px 0 0;
    box-shadow: 0 -20px 60px rgba(15, 23, 42, 0.26);
    animation: dshr-appearance-sheet 0.22s cubic-bezier(0.2, 0.9, 0.25, 1);
  }

  .dshr-appearance-head {
    padding-top: 14px;
  }
}

@media (max-height: 560px) {
  .dshr-appearance-panel {
    height: 100%;
  }

  .dshr-appearance-preview {
    min-height: 126px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .dshr-appearance-mask,
  .dshr-appearance-panel {
    animation-duration: 0.001ms !important;
  }
}
`;var X=require("react/jsx-runtime");function go({size:t=15,children:e,viewBox:r="0 0 24 24"}){return(0,X.jsx)("svg",{width:t,height:t,viewBox:r,fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:e})}function Gp(t){return(0,X.jsx)(go,{...t,children:(0,X.jsx)("path",{d:"m6 6 12 12M18 6 6 18"})})}function qp(t){return(0,X.jsxs)(go,{...t,children:[(0,X.jsx)("rect",{x:"3",y:"4.5",width:"18",height:"15",rx:"2.4"}),(0,X.jsx)("circle",{cx:"8.4",cy:"9.6",r:"1.5"}),(0,X.jsx)("path",{d:"m4 17 4.6-4.4a1.6 1.6 0 0 1 2.2 0l2.5 2.4 2.1-2a1.6 1.6 0 0 1 2.2 0L20 15.6"})]})}function Xp(t){return(0,X.jsxs)(go,{...t,children:[(0,X.jsx)("path",{d:"M12 16V4"}),(0,X.jsx)("path",{d:"m7 9 5-5 5 5"}),(0,X.jsx)("path",{d:"M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15"})]})}function Vp(t){return(0,X.jsxs)(go,{...t,children:[(0,X.jsx)("path",{d:"M4 7h16M9 7V5h6v2M7 7l.7 12.2A1.8 1.8 0 0 0 9.5 21h5a1.8 1.8 0 0 0 1.8-1.8L17 7"}),(0,X.jsx)("path",{d:"M10 11v6M14 11v6"})]})}function Kp(t){return(0,X.jsxs)(go,{...t,children:[(0,X.jsx)("path",{d:"M20 11a8 8 0 1 0-2.3 6.3"}),(0,X.jsx)("path",{d:"M20 4v7h-7"})]})}function ld(t){return(0,X.jsx)(go,{...t,children:(0,X.jsx)("path",{d:"m5 12 4.5 4.5L19 7"})})}var Yp=Object.freeze([{id:"auto",label:"\u81EA\u52A8"},{id:"dark",label:"\u6DF1\u8272\u5B57"},{id:"light",label:"\u6D45\u8272\u5B57"}]),Zp=Object.freeze(["fontSize","lineHeight","fontFamily","fontWeight","contentWidth","tocWidth","brightness","backgroundPreset","customBackground","textTone","backgroundImageOpacity","backgroundImageBlur"]),Qp='button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';function cd({label:t,value:e,options:r,onChange:n}){return(0,X.jsx)("div",{className:"dshr-appearance-segmented",role:"group","aria-label":t,children:r.map(o=>{let a=o.value!==void 0?o.value:o.id;return(0,X.jsx)("button",{type:"button",className:"dshr-appearance-segmented__item","aria-pressed":e===a,onClick:()=>n(a),children:o.label},String(a))})})}function $n({label:t,valueText:e,min:r,max:n,step:o,value:a,onChange:i,disabled:s,hint:l}){return(0,X.jsxs)("label",{className:`dshr-appearance-slider${s?" is-disabled":""}`,children:[(0,X.jsxs)("span",{className:"dshr-appearance-slider__head",children:[(0,X.jsx)("span",{children:t}),(0,X.jsx)("span",{className:"dshr-appearance-slider__value",children:e})]}),(0,X.jsx)("input",{type:"range",min:r,max:n,step:o,value:a,disabled:s,onChange:d=>i(Number(d.target.value)),"aria-label":t}),l?(0,X.jsx)("span",{className:"dshr-appearance-slider__hint",children:l}):null]})}function dd({open:t,settings:e,backgroundImageUrl:r,onChange:n,onPickBackgroundImage:o,onClearBackgroundImage:a,onClose:i}){let s=un.default.useRef(null),l=un.default.useId(),[d,f]=un.default.useState(!1),g=is(e),p=!!r,u=as(e.customBackground,Gt.customBackground),T=sd(u).ink,_=qa(g.ink,g.bg),w=Dr(e.fontSize,Me.fontSize.min,Me.fontSize.max,Gt.fontSize),A=Dr(e.lineHeight,Me.lineHeight.min,Me.lineHeight.max,Gt.lineHeight),N=!p&&Zp.every(M=>e[M]===Gt[M]),v=un.default.useCallback(M=>{typeof n=="function"&&n({...e,...M})},[n,e]);if(un.default.useEffect(()=>{if(!t)return;let M=F=>{F.key==="Escape"&&(F.preventDefault(),i?.())};return window.addEventListener("keydown",M),()=>window.removeEventListener("keydown",M)},[t,i]),un.default.useEffect(()=>{if(!t)return;let M=typeof document<"u"?document.activeElement:null,F=window.requestAnimationFrame(()=>{s.current?.focus({preventScroll:!0})});return()=>{window.cancelAnimationFrame(F),M instanceof HTMLElement&&M.isConnected&&M.focus({preventScroll:!0})}},[t]),un.default.useEffect(()=>{if(!t){f(!1);return}},[t]),un.default.useEffect(()=>{if(!d)return;let M=window.setTimeout(()=>f(!1),3200);return()=>window.clearTimeout(M)},[d]),!t)return null;let I=M=>{M.target===M.currentTarget&&i?.()},C=M=>{if(M.key!=="Tab"||!s.current)return;let F=[...s.current.querySelectorAll(Qp)].filter(ie=>ie.offsetParent!==null||ie===document.activeElement);if(F.length===0)return;let te=F[0],U=F[F.length-1],re=document.activeElement;M.shiftKey&&(re===te||!s.current.contains(re))?(M.preventDefault(),U.focus()):!M.shiftKey&&re===U&&(M.preventDefault(),te.focus())},E=()=>{if(!d){f(!0);return}f(!1),p&&a?.(),n?.({...e,...Gt})},P={...Va(e,r),fontSize:`${Math.min(16,Math.max(12,Math.round(w*.8)))}px`,lineHeight:String(A)},x=_>=4.5;return(0,X.jsx)("div",{className:"dshr-appearance-mask",onMouseDown:I,children:(0,X.jsxs)("aside",{className:"dshr-appearance-panel",role:"dialog","aria-modal":"true","aria-labelledby":l,tabIndex:-1,ref:s,onKeyDown:C,children:[(0,X.jsxs)("header",{className:"dshr-appearance-head",children:[(0,X.jsxs)("div",{className:"dshr-appearance-head__text",children:[(0,X.jsx)("strong",{id:l,children:"\u9605\u8BFB\u5916\u89C2"}),(0,X.jsx)("span",{children:"\u8C03\u6574\u6392\u7248\u3001\u5B57\u4F53\u4E0E\u80CC\u666F \xB7 \u4EC5\u4FDD\u5B58\u5728\u672C\u673A"})]}),(0,X.jsx)("button",{type:"button",className:"dshr-appearance-close",onClick:i,"aria-label":"\u5173\u95ED\u5916\u89C2\u8BBE\u7F6E",children:(0,X.jsx)(Gp,{size:16})})]}),(0,X.jsxs)("div",{className:"dshr-appearance-body",children:[(0,X.jsxs)("div",{className:"dshr-appearance-preview",style:P,"aria-hidden":"true",children:[(0,X.jsx)("span",{className:"dshr-appearance-preview__badge",children:"\u5B9E\u65F6\u9884\u89C8"}),(0,X.jsxs)("div",{className:"dshr-appearance-preview__inner",children:[(0,X.jsx)("span",{className:"dshr-appearance-preview__kicker",children:"\u7B2C 1 \u7AE0"}),(0,X.jsx)("p",{className:"dshr-appearance-preview__title",children:"\u5C71\u5C45\u79CB\u669D"}),(0,X.jsx)("p",{className:"dshr-appearance-preview__text",children:"\u7A7A\u5C71\u65B0\u96E8\u540E\uFF0C\u5929\u6C14\u665A\u6765\u79CB\u3002\u660E\u6708\u677E\u95F4\u7167\uFF0C\u6E05\u6CC9\u77F3\u4E0A\u6D41\u3002"}),(0,X.jsx)("p",{className:"dshr-appearance-preview__quote",children:"\u7AF9\u55A7\u5F52\u6D63\u5973\uFF0C\u83B2\u52A8\u4E0B\u6E14\u821F\u3002"})]})]}),(0,X.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-bg`,children:[(0,X.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-bg`,children:"\u80CC\u666F"}),(0,X.jsx)("div",{className:"dshr-appearance-swatches",role:"group","aria-label":"\u80CC\u666F\u9884\u8BBE",children:Xa.map(M=>{let F=M.id==="custom"?u:M.bg,te=M.id==="custom"?T:M.ink,U=g.preset===M.id;return(0,X.jsxs)("button",{type:"button",className:`dshr-appearance-swatch${U?" is-active":""}`,"aria-pressed":U,onClick:()=>v({backgroundPreset:M.id}),children:[(0,X.jsx)("span",{className:"dshr-appearance-swatch__chip",style:{background:F,color:te},children:"\u6587"}),(0,X.jsx)("span",{className:"dshr-appearance-swatch__label",children:M.label})]},M.id)})}),(0,X.jsxs)("label",{className:"dshr-appearance-colorrow",children:[(0,X.jsx)("span",{children:"\u81EA\u5B9A\u4E49\u989C\u8272"}),(0,X.jsxs)("span",{className:"dshr-appearance-colorrow__control",children:[(0,X.jsx)("input",{type:"color",className:"dshr-appearance-color",value:u,"aria-label":"\u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272",onChange:M=>v({backgroundPreset:"custom",customBackground:M.target.value})}),(0,X.jsx)("code",{className:"dshr-appearance-colorrow__hex",children:u.toUpperCase()})]})]}),(0,X.jsxs)("div",{className:"dshr-appearance-field",children:[(0,X.jsxs)("div",{className:"dshr-appearance-field__head",children:[(0,X.jsx)("span",{children:"\u6587\u5B57\u8272\u8C03"}),(0,X.jsxs)("span",{className:`dshr-appearance-field__value${x?"":" is-warning"}`,children:["\u5BF9\u6BD4\u5EA6 ",_.toFixed(1),":1"]})]}),(0,X.jsx)(cd,{label:"\u6587\u5B57\u8272\u8C03",value:e.textTone==="dark"||e.textTone==="light"?e.textTone:"auto",options:Yp,onChange:M=>v({textTone:M})}),(0,X.jsxs)("p",{className:"dshr-appearance-hint",children:[x?"\u81EA\u52A8\u6A21\u5F0F\u4F1A\u6309\u80CC\u666F\u4EAE\u5EA6\u9009\u62E9\u6DF1\u8272\u6216\u6D45\u8272\u6587\u5B57\u3002":"\u5F53\u524D\u6587\u5B57\u4E0E\u80CC\u666F\u5BF9\u6BD4\u5EA6\u504F\u4F4E\uFF0C\u5EFA\u8BAE\u6539\u9009\u5176\u5B83\u80CC\u666F\u6216\u6587\u5B57\u8272\u8C03\u3002",p?" \u80CC\u666F\u56FE\u7247\u4F1A\u8FDB\u4E00\u6B65\u5F71\u54CD\u5B9E\u9645\u53EF\u8BFB\u6027\u3002":""]})]})]}),(0,X.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-image`,children:[(0,X.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-image`,children:"\u80CC\u666F\u56FE\u7247"}),(0,X.jsxs)("div",{className:"dshr-appearance-image",children:[(0,X.jsx)("span",{className:`dshr-appearance-image__thumb${p?" has-image":""}`,children:p?(0,X.jsx)("img",{src:r,alt:""}):(0,X.jsx)(qp,{size:20})}),(0,X.jsxs)("div",{className:"dshr-appearance-image__meta",children:[(0,X.jsx)("strong",{children:p?"\u5DF2\u9009\u62E9\u80CC\u666F\u56FE\u7247":"\u672A\u9009\u62E9\u80CC\u666F\u56FE\u7247"}),(0,X.jsx)("span",{children:"\u4F5C\u4E3A\u6587\u5B57\u4E0B\u65B9\u7684\u886C\u5E95\uFF0C\u4EC5\u4FDD\u5B58\u5728\u672C\u673A\u3002"})]}),(0,X.jsxs)("div",{className:"dshr-appearance-image__actions",children:[(0,X.jsxs)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--soft dshr-appearance-btn--sm",onClick:o,children:[p?(0,X.jsx)(ld,{size:13}):(0,X.jsx)(Xp,{size:13}),p?"\u66F4\u6362":"\u9009\u62E9\u56FE\u7247"]}),p?(0,X.jsxs)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--ghost dshr-appearance-btn--sm",onClick:a,children:[(0,X.jsx)(Vp,{size:13})," \u79FB\u9664"]}):null]})]}),(0,X.jsx)($n,{label:"\u56FE\u7247\u4E0D\u900F\u660E\u5EA6",valueText:`${Math.round(Dr(e.backgroundImageOpacity,Me.backgroundImageOpacity.min,Me.backgroundImageOpacity.max,Gt.backgroundImageOpacity)*100)}%`,min:Me.backgroundImageOpacity.min,max:Me.backgroundImageOpacity.max,step:Me.backgroundImageOpacity.step,value:Dr(e.backgroundImageOpacity,Me.backgroundImageOpacity.min,Me.backgroundImageOpacity.max,Gt.backgroundImageOpacity),disabled:!p,onChange:M=>v({backgroundImageOpacity:M})}),(0,X.jsx)($n,{label:"\u56FE\u7247\u6A21\u7CCA",valueText:`${Math.round(g.imageBlur)}px`,min:Me.backgroundImageBlur.min,max:Me.backgroundImageBlur.max,step:Me.backgroundImageBlur.step,value:g.imageBlur,disabled:!p,onChange:M=>v({backgroundImageBlur:M})}),(0,X.jsx)($n,{label:"\u9605\u8BFB\u4EAE\u5EA6",valueText:`${Math.round(g.brightness*100)}%`,min:Me.brightness.min,max:Me.brightness.max,step:Me.brightness.step,value:g.brightness,onChange:M=>v({brightness:M})}),(0,X.jsx)("p",{className:"dshr-appearance-hint",children:"\u8C03\u4F4E\u4EAE\u5EA6\u53EF\u51CF\u5C11\u591C\u95F4\u5C4F\u5E55\u523A\u6FC0\uFF1B\u53EA\u5F71\u54CD\u6B63\u6587/PDF \u9605\u8BFB\u533A\uFF0C\u4E0D\u5F71\u54CD\u5DE5\u5177\u680F\u4E0E\u6279\u6CE8\u9762\u677F\u3002"})]}),(0,X.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-type`,children:[(0,X.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-type`,children:"\u5B57\u4F53"}),(0,X.jsx)("div",{className:"dshr-appearance-families",role:"group","aria-label":"\u5B57\u4F53",children:ns.map(M=>(0,X.jsx)("button",{type:"button",className:"dshr-appearance-family",style:{fontFamily:M.stack},"aria-pressed":g.fontFamily===M.stack,onClick:()=>v({fontFamily:M.id}),title:M.label,children:M.label},M.id))}),(0,X.jsxs)("div",{className:"dshr-appearance-field",children:[(0,X.jsx)("div",{className:"dshr-appearance-field__head",children:(0,X.jsx)("span",{children:"\u5B57\u91CD"})}),(0,X.jsx)(cd,{label:"\u5B57\u91CD",value:g.fontWeight,options:os.map(M=>({value:M.value,label:M.label})),onChange:M=>v({fontWeight:M})})]}),(0,X.jsx)($n,{label:"\u5B57\u53F7",valueText:`${w}px`,min:Me.fontSize.min,max:Me.fontSize.max,step:Me.fontSize.step,value:w,onChange:M=>v({fontSize:M})}),(0,X.jsx)($n,{label:"\u884C\u9AD8",valueText:A.toFixed(2),min:Me.lineHeight.min,max:Me.lineHeight.max,step:Me.lineHeight.step,value:A,onChange:M=>v({lineHeight:Math.round(M*100)/100})})]}),(0,X.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-layout`,children:[(0,X.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-layout`,children:"\u7248\u5F0F"}),(0,X.jsx)($n,{label:"\u9605\u8BFB\u5BBD\u5EA6",valueText:`${Math.round(g.width)}px`,min:Me.contentWidth.min,max:Me.contentWidth.max,step:Me.contentWidth.step,value:g.width,onChange:M=>v({contentWidth:M})}),(0,X.jsx)($n,{label:"\u76EE\u5F55\u5BBD\u5EA6",valueText:`${Math.round(Dr(e.tocWidth,Me.tocWidth.min,Me.tocWidth.max,Gt.tocWidth))}px`,min:Me.tocWidth.min,max:Me.tocWidth.max,step:Me.tocWidth.step,value:Dr(e.tocWidth,Me.tocWidth.min,Me.tocWidth.max,Gt.tocWidth),onChange:M=>v({tocWidth:M})}),(0,X.jsx)("p",{className:"dshr-appearance-hint",children:"\u63A7\u5236\u6B63\u6587\u6700\u5927\u5BBD\u5EA6\uFF1B\u76EE\u5F55\u5BBD\u5EA6\u53EF\u5728\u8FD9\u91CC\u8C03\uFF0C\u4E5F\u53EF\u4EE5\u62D6\u52A8\u76EE\u5F55\u53F3\u8FB9\u7F18\u3002\u76EE\u5F55\u6807\u9898\u4F1A\u5B8C\u6574\u6362\u884C\u663E\u793A\u3002"})]})]}),(0,X.jsxs)("footer",{className:"dshr-appearance-foot",children:[(0,X.jsxs)("button",{type:"button",className:`dshr-appearance-btn dshr-appearance-btn--ghost${d?" dshr-appearance-btn--danger":""}`,onClick:E,disabled:N&&!d,title:N?"\u5F53\u524D\u5DF2\u662F\u9ED8\u8BA4\u5916\u89C2":"\u6062\u590D\u9ED8\u8BA4\u5916\u89C2",children:[d?(0,X.jsx)(ld,{size:14}):(0,X.jsx)(Kp,{size:14}),d?"\u786E\u8BA4\u6062\u590D\uFF1F":"\u6062\u590D\u9ED8\u8BA4"]}),(0,X.jsx)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--primary",onClick:i,children:"\u5B8C\u6210"})]})]})})}var Ka=Mt(require("react"),1);var ye=require("react/jsx-runtime"),Jp={highlight:On,underline:Aa,note:vn},ef=[{id:"all",label:"\u5168\u90E8"},...co.map(t=>({id:t.id,label:t.label}))];function tf(t){let e=Number(t);if(!Number.isFinite(e)||e<=0)return"";try{return new Date(e).toLocaleDateString("zh-CN",{month:"numeric",day:"numeric"})}catch{return""}}function rf(t){let e=new Map,r=t&&Array.isArray(t.chapters)?t.chapters:[];for(let n=0;n<r.length;n+=1){let o=r[n];o&&o.id!=null&&e.set(String(o.id),{index:n,title:o.title||""})}return e}function hd(t){return t?t.kind==="pdf"?!0:t.kind==="flow"?!1:Array.isArray(t.rects)&&!Array.isArray(t.ranges):!1}function ud(t,e){if(!t)return null;if(t.chapterId!=null){let r=e.get(String(t.chapterId));if(r)return r}if(Number.isInteger(Number(t.chapterIndex))&&Number(t.chapterIndex)>=0){let r=Number(t.chapterIndex),o=(e.size>0?[...e.values()]:[]).find(a=>a.index===r);return{index:r,title:o?o.title:""}}return null}function nf(t,e,r){let n=(Array.isArray(t)?t:[]).filter(i=>!(!i||r!=="all"&&i.style!==r)),o=new Map;for(let i=0;i<n.length;i+=1){let s=n[i],l=hd(s),d,f,g;if(l){let p=Number(s.page),u=Number.isInteger(p)&&p>0;d=`pdf:${u?p:"unknown"}`,f=u?1e4+p:999999,g=u?`\u7B2C ${p} \u9875`:"PDF \u9875\u9762"}else{let p=ud(s,e),u=p?p.index:null;d=`flow:${u??"unknown"}`,f=u??99999,g=u==null?"\u6B63\u6587":`\u7B2C ${u+1} \u7AE0${p&&p.title?` \xB7 ${p.title}`:""}`}o.has(d)||o.set(d,{key:d,order:f,title:g,items:[]}),o.get(d).items.push(s)}let a=[...o.values()];a.sort((i,s)=>i.order-s.order);for(let i=0;i<a.length;i+=1)a[i].items.sort((l,d)=>{let f=Array.isArray(l.ranges)&&l.ranges[0]&&l.ranges[0].start||0,g=Array.isArray(d.ranges)&&d.ranges[0]&&d.ranges[0].start||0;return f!==g?f-g:(Number(l.createdAt)||0)-(Number(d.createdAt)||0)});return a}function of({hasAny:t,filter:e}){return t?(0,ye.jsxs)("div",{className:"dshr-anno-panel__empty",children:[(0,ye.jsx)("p",{className:"dshr-anno-panel__empty-title",children:"\u6CA1\u6709\u5339\u914D\u7684\u6807\u6CE8"}),(0,ye.jsxs)("p",{className:"dshr-anno-panel__empty-text",children:["\u5F53\u524D\u7B5B\u9009\u662F\u300C",e==="all"?"\u5168\u90E8":Di(e),"\u300D\uFF0C\u5207\u6362\u7B5B\u9009\u770B\u770B\u5176\u4F59\u6807\u6CE8\u3002"]})]}):(0,ye.jsxs)("div",{className:"dshr-anno-panel__empty",children:[(0,ye.jsx)("span",{className:"dshr-anno-panel__empty-mark","aria-hidden":"true",children:(0,ye.jsx)(pc,{size:44})}),(0,ye.jsx)("p",{className:"dshr-anno-panel__empty-title",children:"\u8FD8\u6CA1\u6709\u4EFB\u4F55\u6807\u6CE8"}),(0,ye.jsx)("p",{className:"dshr-anno-panel__empty-text",children:"\u5728\u9605\u8BFB\u65F6\u9009\u4E2D\u4E00\u6BB5\u6587\u5B57\uFF0C\u5C31\u53EF\u4EE5\u7528\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u6216\u4FBF\u7B7E\u628A\u5B83\u7559\u5728\u8FD9\u91CC\u3002"}),(0,ye.jsxs)("ol",{className:"dshr-anno-panel__steps",children:[(0,ye.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,ye.jsx)("span",{className:"dshr-anno-panel__step-index",children:"1"})," \u9009\u4E2D\u6B63\u6587\u4E2D\u7684\u4E00\u6BB5\u6587\u5B57"]}),(0,ye.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,ye.jsx)("span",{className:"dshr-anno-panel__step-index",children:"2"})," \u9009\u62E9\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u6216\u4FBF\u7B7E"]}),(0,ye.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,ye.jsx)("span",{className:"dshr-anno-panel__step-index",children:"3"})," \u4E4B\u540E\u56DE\u5230\u8FD9\u91CC\u56DE\u770B\u3001\u8DF3\u8F6C"]})]}),(0,ye.jsx)("p",{className:"dshr-anno-panel__hint",children:"PDF \u9875\u9762\u540C\u6837\u652F\u6301\uFF1A\u9009\u4E2D\u6587\u5B57\u540E\u70B9\u51FB\u300C\u6807\u6CE8\u300D\u5373\u53EF\u3002"})]})}function pd({open:t,annotations:e,book:r,onClose:n,onOpenAnnotation:o,onJump:a,onDelete:i}){let[s,l]=Ka.default.useState("all"),d=Ka.default.useMemo(()=>rf(r),[r]);if(Ka.default.useEffect(()=>{if(!t||typeof document>"u")return;let _=w=>{w.key!=="Escape"||typeof n!="function"||document.querySelector(".dshr-anno-composer")||(w.preventDefault(),n())};return document.addEventListener("keydown",_,!0),()=>document.removeEventListener("keydown",_,!0)},[n,t]),!t)return null;let f=(Array.isArray(e)?e:[]).filter(Boolean),g={all:f.length};for(let _=0;_<co.length;_+=1){let w=co[_].id;g[w]=f.filter(A=>A.style===w).length}let p=nf(f,d,s),u=s==="all"?f.length:f.filter(_=>_.style===s).length,T=(_,w)=>{typeof _=="function"&&_(w)};return(0,ye.jsxs)("aside",{className:"dshr-anno-panel","aria-label":"\u6807\u6CE8\u7B14\u8BB0\u9762\u677F",children:[(0,ye.jsxs)("header",{className:"dshr-anno-panel__head",children:[(0,ye.jsxs)("div",{className:"dshr-anno-panel__titles",children:[(0,ye.jsxs)("h3",{className:"dshr-anno-panel__title",children:["\u6807\u6CE8\u7B14\u8BB0",(0,ye.jsx)("span",{className:"dshr-anno-panel__count",children:f.length})]}),(0,ye.jsx)("span",{className:"dshr-anno-panel__sub",children:f.length>0?`${u} \u6761\u6807\u6CE8 \xB7 ${p.length} \u4E2A\u4F4D\u7F6E`:"\u9009\u4E2D\u6587\u5B57\u5373\u53EF\u6DFB\u52A0\u6807\u6CE8"})]}),(0,ye.jsx)("button",{type:"button",className:"dshr-anno-panel__close","aria-label":"\u5173\u95ED\u6807\u6CE8\u9762\u677F",onClick:()=>T(n),children:(0,ye.jsx)(Na,{size:13})})]}),f.length>0?(0,ye.jsx)("div",{className:"dshr-anno-panel__filters",role:"tablist","aria-label":"\u6309\u6837\u5F0F\u7B5B\u9009\u6807\u6CE8",children:ef.map(_=>{let w=s===_.id,A=g[_.id]||0;return(0,ye.jsxs)("button",{type:"button",role:"tab","aria-selected":w,className:`dshr-anno-panel__filter${w?" is-active":""}`,onClick:()=>l(_.id),children:[_.label,_.id==="all"?` ${A}`:A>0?` ${A}`:""]},_.id)})}):null,(0,ye.jsx)("div",{className:"dshr-anno-panel__list",children:p.length===0?(0,ye.jsx)(of,{hasAny:f.length>0,filter:s}):p.map(_=>(0,ye.jsxs)("section",{className:"dshr-anno-panel__group",children:[(0,ye.jsxs)("div",{className:"dshr-anno-panel__group-head",children:[(0,ye.jsx)("span",{className:"dshr-anno-panel__group-title",title:_.title,children:_.title}),(0,ye.jsx)("span",{className:"dshr-anno-panel__group-rule"}),(0,ye.jsx)("span",{className:"dshr-anno-panel__group-count",children:_.items.length})]}),_.items.map(w=>{let A=w.style||"highlight",N=Jp[A]||On,v=w.color||"#f5d76e",I=typeof w.quote=="string"?w.quote.trim():"",C=typeof w.note=="string"?w.note.trim():"",E=ud(w,d),L=hd(w)?Number(w.page)>0?`\u7B2C ${w.page} \u9875`:"PDF":E?`\u7B2C ${E.index+1} \u7AE0`:"\u6B63\u6587",P=tf(w.updatedAt||w.createdAt);return(0,ye.jsxs)("article",{className:"dshr-anno-item",style:{"--dshr-anno-color":v},"data-anno-id":w.id||void 0,children:[(0,ye.jsxs)("button",{type:"button",className:"dshr-anno-item__main",onClick:()=>T(o,w.id),title:"\u7F16\u8F91\u8FD9\u6761\u6807\u6CE8",children:[(0,ye.jsxs)("div",{className:"dshr-anno-item__meta",children:[(0,ye.jsx)("span",{className:"dshr-anno-item__dot","aria-hidden":"true"}),(0,ye.jsxs)("span",{className:"dshr-anno-item__style",children:[(0,ye.jsx)(N,{size:12})," ",Di(A)]}),(0,ye.jsx)("span",{className:"dshr-anno-item__sep","aria-hidden":"true",children:"\xB7"}),(0,ye.jsx)("span",{className:"dshr-anno-item__location",children:L}),(0,ye.jsx)("span",{className:"dshr-anno-item__spacer"}),P?(0,ye.jsx)("span",{children:P}):null]}),(0,ye.jsx)("p",{className:"dshr-anno-item__quote",children:I||C||"\uFF08\u672A\u8BB0\u5F55\u9009\u4E2D\u6587\u5B57\uFF09"}),C&&C!==I?(0,ye.jsx)("p",{className:"dshr-anno-item__note",children:C}):null]}),(0,ye.jsxs)("div",{className:"dshr-anno-item__actions",children:[(0,ye.jsx)("button",{type:"button",className:"dshr-anno-item__action dshr-anno-item__action--jump",onClick:()=>T(a,w),title:"\u8DF3\u8F6C\u5230\u8FD9\u6761\u6807\u6CE8\u7684\u4F4D\u7F6E",children:"\u5B9A\u4F4D"}),(0,ye.jsx)("span",{className:"dshr-anno-item__spacer"}),(0,ye.jsx)("button",{type:"button",className:"dshr-anno-item__action dshr-anno-item__action--danger",onClick:()=>T(i,w),title:"\u5220\u9664\u8FD9\u6761\u6807\u6CE8",children:"\u5220\u9664"})]})]},w.id||`${_.key}:${I}`)})]},_.key))})]})}var Yr=Mt(require("react"),1);var Ce=require("react/jsx-runtime"),fd={highlight:On,underline:Aa,note:vn},af={highlight:"\u7528\u534A\u900F\u660E\u7684\u8272\u5E26\u8986\u76D6\u9009\u4E2D\u6587\u5B57\uFF0C\u53EF\u8C03\u7B14\u89E6\u7C97\u7EC6\u3002",underline:"\u5728\u9009\u4E2D\u6587\u5B57\u4E0B\u65B9\u753B\u4E00\u6761\u624B\u5199\u5F0F\u4E0B\u5212\u7EBF\u3002",note:"\u5728\u9009\u4E2D\u6587\u5B57\u65C1\u653E\u4E00\u679A\u4FBF\u7B7E\uFF0C\u8BB0\u5F55\u6B64\u523B\u7684\u60F3\u6CD5\u3002"},gd=2e3,ls=Po[1].value;function cs(t){return t==="underline"?sc:ic}function bd(t){return Object.prototype.hasOwnProperty.call(lo,t)?t:"highlight"}function sf(t){let e=Number(t);if(!Number.isFinite(e))return ls;let r=ls,n=1/0;for(let o=0;o<Po.length;o+=1){let a=Po[o].value,i=Math.abs(a-e);i<n&&(r=a,n=i)}return r}function md(t){let e=t&&typeof t=="object"?t:{},r=bd(e.style),n=cs(r),o=n.find(a=>a.value===e.color);return{style:r,color:o?o.value:typeof e.color=="string"&&e.color?e.color:n[0].value,width:sf(e.width),note:typeof e.note=="string"?e.note:"",quote:typeof e.quote=="string"?e.quote:""}}function lf(t,e){if(!t||typeof t!="object")return`${e}:empty`;let r=typeof t.quote=="string"?t.quote:"";return[e,t.id||"",r,Array.isArray(t.ranges)?t.ranges.length:0,t.page==null?"":t.page,t.chapterId==null?"":t.chapterId].join("|")}function cf(t){return`${Math.round(2+(Number(t)||ls)*.34)}px`}function xd({open:t,draft:e,mode:r,onClose:n,onSave:o,onDelete:a}){let i=r==="edit",[s,l]=Yr.default.useState(()=>md(e)),d=Yr.default.useRef(""),f=Yr.default.useRef(null);Yr.default.useEffect(()=>{if(!t){d.current="";return}let C=lf(e,r);d.current!==C&&(d.current=C,l(md(e)))},[e,r,t]),Yr.default.useEffect(()=>{if(!t||typeof window>"u")return;let C=window.setTimeout(()=>{let E=f.current;if(E)try{E.focus({preventScroll:!0}),E.setSelectionRange(E.value.length,E.value.length)}catch{}},30);return()=>window.clearTimeout(C)},[t]);let g=Yr.default.useCallback(C=>{l(E=>({...E,...C}))},[]),p=Yr.default.useCallback(C=>{let E=bd(C);l(L=>{let P=cs(E),x=P.some(M=>M.value===L.color);return{...L,style:E,color:x?L.color:P[0].value}})},[]),u=Yr.default.useCallback(()=>{if(!s.note.trim()&&!s.quote.trim()&&s.style==="note")return;let E={...e&&typeof e=="object"?e:{},style:s.style,color:s.color,width:s.width,note:s.note,quote:s.quote};typeof o=="function"&&o(E)},[e,o,s]);if(Yr.default.useEffect(()=>{if(!t||typeof document>"u")return;let C=E=>{if(E.key==="Escape"){E.preventDefault(),E.stopImmediatePropagation(),typeof n=="function"&&n();return}E.key==="Enter"&&(E.metaKey||E.ctrlKey)&&(E.preventDefault(),E.stopImmediatePropagation(),u())};return document.addEventListener("keydown",C,!0),()=>document.removeEventListener("keydown",C,!0)},[u,n,t]),!t)return null;let T=cs(s.style),_=fd[s.style]||On,w=s.quote.trim(),A=!!(s.note.trim()||w||s.style!=="note"),N=s.style==="note"?"\u4FBF\u7B7E\u5185\u5BB9":"\u5907\u6CE8",v=s.style==="note"?"\u5199\u4E0B\u8FD9\u6BB5\u6587\u5B57\u7ED9\u4F60\u7684\u60F3\u6CD5\u2026":"\u53EF\u9009\uFF1A\u4E3A\u8FD9\u6761\u6807\u6CE8\u5199\u4E00\u6761\u5907\u6CE8\u2026",I=s.style==="underline"?"\u4E0B\u5212\u7EBF\u989C\u8272":s.style==="note"?"\u4FBF\u7B7E\u989C\u8272":"\u8367\u5149\u7B14\u989C\u8272";return(0,Ce.jsx)("div",{className:"dshr-anno-composer-mask",role:"presentation",onMouseDown:C=>{C.target===C.currentTarget&&typeof n=="function"&&n()},children:(0,Ce.jsxs)("div",{className:"dshr-anno-composer",role:"dialog","aria-modal":"true","aria-label":i?"\u7F16\u8F91\u6807\u6CE8":"\u6DFB\u52A0\u6807\u6CE8",onMouseDown:C=>C.stopPropagation(),children:[(0,Ce.jsxs)("header",{className:"dshr-anno-composer__head",children:[(0,Ce.jsxs)("div",{className:"dshr-anno-composer__titles",children:[(0,Ce.jsx)("h3",{className:"dshr-anno-composer__title",children:i?"\u7F16\u8F91\u6807\u6CE8":"\u6DFB\u52A0\u6807\u6CE8"}),(0,Ce.jsx)("span",{className:"dshr-anno-composer__sub",children:af[s.style]})]}),(0,Ce.jsx)("button",{type:"button",className:"dshr-anno-composer__close","aria-label":"\u5173\u95ED\u6807\u6CE8\u7F16\u8F91\u5668",onClick:()=>{typeof n=="function"&&n()},children:(0,Ce.jsx)(Na,{size:13})})]}),(0,Ce.jsxs)("div",{className:"dshr-anno-composer__body",children:[(0,Ce.jsx)("div",{className:"dshr-anno-composer__tabs",role:"tablist","aria-label":"\u6807\u6CE8\u6837\u5F0F",children:co.map(C=>{let E=fd[C.id]||On,L=s.style===C.id;return(0,Ce.jsxs)("button",{type:"button",role:"tab","aria-selected":L,className:`dshr-anno-composer__tab${L?" is-active":""}`,onClick:()=>p(C.id),children:[(0,Ce.jsx)(E,{size:14})," ",C.label]},C.id)})}),(0,Ce.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Ce.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Ce.jsx)("span",{children:I}),(0,Ce.jsx)("em",{children:s.style==="underline"?"\u7EB8\u4E0A\u7684\u58A8\u8272":"\u534A\u900F\u660E\u7B14\u89E6"})]}),(0,Ce.jsx)("div",{className:"dshr-anno-composer__swatches",role:"radiogroup","aria-label":I,children:T.map(C=>{let E=s.color===C.value;return(0,Ce.jsx)("button",{type:"button",role:"radio","aria-checked":E,"aria-label":`${C.label}\u8272`,title:`${C.label}\u8272`,className:`dshr-anno-swatch${E?" is-active":""}`,style:{"--swatch":C.value},onClick:()=>g({color:C.value}),children:C.label},C.id)})})]}),s.style==="highlight"?(0,Ce.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Ce.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Ce.jsx)("span",{children:"\u7B14\u89E6\u7C97\u7EC6"}),(0,Ce.jsx)("em",{children:"\u7EC6 / \u4E2D / \u5BBD"})]}),(0,Ce.jsx)("div",{className:"dshr-anno-composer__widths",role:"radiogroup","aria-label":"\u7B14\u89E6\u7C97\u7EC6",children:Po.map(C=>{let E=s.width===C.value;return(0,Ce.jsxs)("button",{type:"button",role:"radio","aria-checked":E,className:`dshr-anno-width${E?" is-active":""}`,onClick:()=>g({width:C.value}),children:[(0,Ce.jsx)("span",{className:"dshr-anno-width__bar",style:{height:cf(C.value),background:s.color}}),C.label]},C.id)})})]}):null,(0,Ce.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Ce.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Ce.jsx)("span",{children:N}),(0,Ce.jsx)("em",{children:s.style==="note"?"\u53EF\u7559\u7A7A\uFF0C\u4EC5\u6807\u8BB0\u4F4D\u7F6E":"\u53EF\u9009"})]}),(0,Ce.jsx)("textarea",{ref:f,className:"dshr-anno-composer__textarea",value:s.note,maxLength:gd,placeholder:v,"aria-label":N,onChange:C=>g({note:C.target.value})}),(0,Ce.jsxs)("div",{className:"dshr-anno-composer__counter",children:[s.note.length," / ",gd]})]}),w?(0,Ce.jsxs)("div",{className:"dshr-anno-composer__quote",style:{"--dshr-anno-color":s.color},children:[(0,Ce.jsx)("span",{className:"dshr-anno-composer__quote-label",children:"\u9009\u4E2D\u6587\u5B57"}),(0,Ce.jsx)("p",{className:"dshr-anno-composer__quote-text",children:w})]}):null,(0,Ce.jsxs)("div",{className:`dshr-anno-composer__preview is-${s.style}`,style:{"--dshr-anno-color":s.color},children:[(0,Ce.jsx)("span",{className:"dshr-anno-composer__preview-label",children:"\u6548\u679C\u9884\u89C8"}),(0,Ce.jsx)("span",{className:"dshr-anno-composer__preview-text",children:w||"\u9009\u4E2D\u7684\u6587\u5B57\u4F1A\u8FD9\u6837\u663E\u793A"})]})]}),(0,Ce.jsxs)("footer",{className:"dshr-anno-composer__foot",children:[i?(0,Ce.jsx)("button",{type:"button",className:"dshr-anno-btn dshr-anno-btn--danger",onClick:()=>{typeof a=="function"&&a(e||{})},children:"\u5220\u9664"}):null,(0,Ce.jsx)("span",{className:"dshr-anno-composer__spacer"}),(0,Ce.jsx)("button",{type:"button",className:"dshr-anno-btn",onClick:()=>{typeof n=="function"&&n()},children:"\u53D6\u6D88"}),(0,Ce.jsx)("button",{type:"button",className:"dshr-anno-btn dshr-anno-btn--primary",disabled:!A,onClick:u,title:"Ctrl / \u2318 + Enter \u4FDD\u5B58",children:i?"\u4FDD\u5B58\u4FEE\u6539":"\u4FDD\u5B58\u6807\u6CE8"})]})]})})}var Wh=360,jh=520;function Gh(t){try{return t.toDataURL("image/jpeg",.84)}catch{return""}}function Bm(t){let e=Number(t.naturalWidth||t.width)||0,r=Number(t.naturalHeight||t.height)||0;if(!e||!r)return"";let n=Math.min(Wh/e,jh/r,1),o=document.createElement("canvas");o.width=Math.max(1,Math.round(e*n)),o.height=Math.max(1,Math.round(r*n));let a=o.getContext("2d");return a.fillStyle="#fbf7ee",a.fillRect(0,0,o.width,o.height),a.drawImage(t,0,0,o.width,o.height),Gh(o)}function $m(t){return new Promise(e=>{let r=new Image;r.decoding="async",r.onload=()=>e(r),r.onerror=()=>e(null),r.src=t})}async function Hm(t){if(!t||!String(t.type||"").startsWith("image/"))return"";let e=URL.createObjectURL(t);try{let r=await $m(e);return r?Bm(r):""}finally{URL.revokeObjectURL(e)}}async function Um(t,e){let r=await La(t,{signal:e}),n,o,a=()=>{o?.cancel(),r.close()};e?.addEventListener("abort",a,{once:!0});try{if(e?.aborted)throw Xr();let i=await r.pdf.getPage(1);if(e?.aborted)throw Xr();let s=i.getViewport({scale:1}),l=Math.min(Wh/s.width,jh/s.height,1.5),d=i.getViewport({scale:l});if(n=document.createElement("canvas"),n.width=Math.max(1,Math.round(d.width)),n.height=Math.max(1,Math.round(d.height)),o=i.render({canvas:n,viewport:d,background:"#ffffff"}),o.onContinue=f=>setTimeout(()=>{e?.aborted?o.cancel():f()},16),await o.promise,e?.aborted)throw Xr();return Gh(n)}finally{e?.removeEventListener("abort",a),await r.close(),n&&(n.width=0,n.height=0)}}async function qh(t,{signal:e}={}){if(e?.aborted)throw Xr();if(!t?.blob)return{};let r=String(t.format||"").toLowerCase();try{if(r==="pdf"){let n=await Um(t.blob,e);return n?{cover:n}:{}}if(["epub","mobi","azw","azw3"].includes(r)){let{parseBook:n}=await Promise.resolve().then(()=>(Zs(),Ys)),o=/\.[a-z0-9]+$/iu.test(t.title||"")?t.title:`${t.title||"book"}.${r}`,a=await n(t.blob,{fileName:o,mime:t.blob.type});try{let i="";if(a.cover)try{let s=await fetch(a.cover);i=await Hm(await s.blob())}catch{i=""}return{...i?{cover:i}:{},...a.title?{title:a.title}:{},...a.author?{author:a.author}:{},...a.language?{language:a.language}:{}}}finally{a.dispose?.()}}}catch(n){if(e?.aborted)throw Xr();console.warn("[dsh-reader] cover generation failed",t.title,n)}return{}}var Q=require("react/jsx-runtime"),gi="dsh-reader:last-book:v1",Qs="dsh-reader:session-book:v1";function Js(t){let e=t/255;return e<=.03928?e/12.92:((e+.055)/1.055)**2.4}function el(t){let e=/^#?([0-9a-f]{6})$/iu.exec(String(t||"").trim());if(!e)return null;let r=e[1];return{r:parseInt(r.slice(0,2),16),g:parseInt(r.slice(2,4),16),b:parseInt(r.slice(4,6),16)}}function Wm(t){let e=el(t);return e?.2126*Js(e.r)+.7152*Js(e.g)+.0722*Js(e.b):1}function jm(t,e,r){let n=el(t),o=el(e);if(!n||!o)return e;let a=Math.max(0,Math.min(1,r));return`#${To(n.r*a+o.r*(1-a)).slice(1)}${To(n.g*a+o.g*(1-a)).slice(1)}${To(n.b*a+o.b*(1-a)).slice(1)}`}function To(t){return`#${Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0")}`}function Gm(t){let e=document.createElement("canvas");e.width=32,e.height=32;let r=e.getContext("2d",{willReadFrequently:!0});if(!r)return"";r.drawImage(t,0,0,e.width,e.height);let n;try{n=r.getImageData(0,0,e.width,e.height).data}catch{return""}let o=new Map;for(let i=0;i<n.length;i+=4){let s=n[i+3];if(s<40)continue;let l=n[i],d=n[i+1],f=n[i+2],g=`${l>>5}:${d>>5}:${f>>5}`,p=o.get(g);p||(p={count:0,r:0,g:0,b:0},o.set(g,p)),p.count+=s,p.r+=l*s,p.g+=d*s,p.b+=f*s}let a=null;for(let i of o.values())(!a||i.count>a.count)&&(a=i);return a?To(a.r/a.count)+To(a.g/a.count).slice(1)+To(a.b/a.count).slice(1):""}function qm(t,e,r){return Math.max(e,Math.min(r,t))}var tl=class extends j.default.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,r){console.error("[dsh-reader]",e,r)}reset=()=>this.setState({error:null});render(){return this.state.error?(0,Q.jsx)("div",{className:"dshr-root",children:(0,Q.jsxs)("div",{className:"dshr-error-panel",children:[(0,Q.jsx)("h3",{children:"\u9605\u8BFB\u5668\u9047\u5230\u4E86\u4E00\u4E2A\u95EE\u9898"}),(0,Q.jsxs)("p",{children:[this.state.error?.message||"\u672A\u77E5\u9519\u8BEF","\u3002\u8FD9\u901A\u5E38\u662F\u6587\u6863\u683C\u5F0F\u6216\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u91CD\u65B0\u6253\u5F00\u6587\u6863\u901A\u5E38\u53EF\u4EE5\u6062\u590D\u3002"]}),(0,Q.jsx)("div",{style:{display:"flex",gap:8,marginTop:14},children:(0,Q.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:()=>{this.reset(),this.props.onReset?.()},children:"\u8FD4\u56DE\u4E66\u67B6"})})]})}):this.props.children}};function Xm(){let[t,e]=j.default.useState(""),r=j.default.useRef(0),n=j.default.useCallback((o,a=2800)=>{window.clearTimeout(r.current),e(String(o)),r.current=window.setTimeout(()=>e(""),a)},[]);return j.default.useEffect(()=>()=>window.clearTimeout(r.current),[]),[t,n]}function Xh(){let[t,e]=j.default.useState([]),[r,n]=j.default.useState([]),o=j.default.useRef(0),[a,i]=j.default.useState(!0),[s,l]=j.default.useState(!1),[d,f]=j.default.useState(!1),[g,p]=j.default.useState("all"),[u,T]=j.default.useState(null),[_,w]=j.default.useState(!1),[A,N]=j.default.useState(""),[v,I]=j.default.useState(Gl),[C,E]=j.default.useState(!1),[L,P]=j.default.useState(!1),[x,M]=j.default.useState(!1),[F,te]=j.default.useState(!1),[U,re]=j.default.useState(!1),[ie,z]=j.default.useState(!1),ne=j.default.useRef(null),[$,G]=j.default.useState(null),[se,D]=Xm(),[{index:pe,entry:be},_e]=j.default.useState({index:0,entry:null}),[V,Oe]=j.default.useState({}),[Ie,Se]=j.default.useState(!0),[De,He]=j.default.useState(!1),[xt,h]=j.default.useState(null),[c,S]=j.default.useState(null),[b,Y]=j.default.useState(null),[he,de]=j.default.useState([]),[ve,ke]=j.default.useState(!1),[Fe,oe]=j.default.useState(null),[ze,qe]=j.default.useState(!1),[Je,Ue]=j.default.useState(null),[Be,xe]=j.default.useState(null),[lt,nt]=j.default.useState(null),[We,pt]=j.default.useState(""),[ur,yt]=j.default.useState(0),[Et,ft]=j.default.useState(""),[Ar,Ot]=j.default.useState(!1),[Nr,kt]=j.default.useState(0),ee=j.default.useRef(null),ae=j.default.useRef({timer:0,latest:null}),we=j.default.useRef({token:0,controller:null}),le=j.default.useRef(null),gt=j.default.useRef(v),Ve=j.default.useRef(t),Jt=j.default.useRef({running:!1,attempted:new Set}),Tn=j.default.useRef(!1),[fn,pr]=j.default.useState(null);le.current=u,gt.current=v,Ve.current=t;let Bt=j.default.useCallback(()=>{we.current.token+=1,we.current.controller?.abort()},[]);j.default.useLayoutEffect(()=>()=>Bt(),[u?.record?.id,c,Bt]);let Zn=`${v.fontSize}:${v.lineHeight}:${v.fontFamily}:${v.fontWeight}:${v.tocWidth}:${v.contentWidth}:${We?"img":"plain"}:${Nr}`,Sn=j.default.useMemo(()=>Va(v,We),[v,We]),Lt=j.default.useMemo(()=>{let y=Sn["--dshr-reader-bg"]||v.customBackground||"#fbf7ee",O=Et&&We?jm(Et,y,Number(v.backgroundImageOpacity)||0):y,Ke=Wm(O)*Math.max(.35,Math.min(1.25,Number(v.brightness)||1))<.4?"#f8f5ec":"#17181a";return{"--dshr-immersive-ink":Ke,"--dshr-immersive-chip":`color-mix(in srgb, ${O} 58%, transparent)`,"--dshr-immersive-chip-hover":`color-mix(in srgb, ${O} 82%, transparent)`,"--dshr-immersive-border":`color-mix(in srgb, ${Ke} 32%, transparent)`}},[Et,We,Sn,v.customBackground,v.backgroundImageOpacity,v.brightness]),ct=j.default.useCallback(async()=>{let y=++o.current;try{let[O,J]=await Promise.all([Ii(),Nl()]);e(O),y===o.current&&n(J)}catch(O){D(O?.message||"\u8BFB\u53D6\u4E66\u67B6\u5931\u8D25\u3002")}finally{i(!1)}},[D]),Qn=j.default.useCallback(y=>{o.current+=1,n(y)},[]),ar=j.default.useCallback(async y=>{if(!y){de([]);return}try{de(await zl(y))}catch(O){console.warn("[dsh-reader] annotations unavailable",O),de([])}},[]);j.default.useEffect(()=>{ct()},[ct]),j.default.useEffect(()=>{if(a||u)return;let y=Ve.current.filter(Re=>!Re.cover&&["pdf","epub","mobi","azw","azw3"].includes(Re.format)&&!Jt.current.attempted.has(Re.id));if(y.length===0)return;let O=Jt.current,J=new AbortController;O.controller=J,O.running=!0;let Ke=setTimeout(()=>{(async()=>{for(let Re of y){if(J.signal.aborted)break;if(!O.attempted.has(Re.id))try{let tt=await _a(Re.id);if(!tt||J.signal.aborted)continue;let ut=await qh(tt,{signal:J.signal});if(J.signal.aborted)break;O.attempted.add(Re.id),(ut.cover||ut.title||ut.author||ut.language)&&(await io(tt.id,ut),e(Ir=>Ir.map(er=>er.id===tt.id?{...er,...ut}:er)))}catch(tt){if(J.signal.aborted)break;O.attempted.add(Re.id),console.warn("[dsh-reader] cover generation failed",Re.title,tt)}}})().finally(()=>{O.controller===J&&(O.running=!1)})},500);return()=>{clearTimeout(Ke),J.abort()}},[a,u]),j.default.useEffect(()=>{ql(v)},[v]),j.default.useEffect(()=>{if(!u||v.readingMode==="book")return;let y=O=>{if(O.defaultPrevented||O.repeat||O.ctrlKey||O.metaKey||O.altKey||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(O.key)||O.target instanceof Element&&O.target.closest('input, textarea, select, [contenteditable="true"], .dshr-modal-mask, .dshr-appearance-panel, .dshr-anno-panel, .dshr-ai, .dshr-selection, .dshr-anno-composer, .dshr-pdf-translation-panel'))return;let J=window.getSelection?.();if(J&&!J.isCollapsed)return;let Ke=document.querySelector(".dshr-root .dshr-content")||document.querySelector(".dshr-root .dshr-pdf-scroll");if(!Ke)return;O.preventDefault();let Re=Math.max(160,Math.round(Ke.clientHeight*.82)),tt=O.key==="ArrowRight"||O.key==="ArrowDown";Ke.scrollBy({top:tt?Re:-Re,behavior:"smooth"})};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[u,v.readingMode]),j.default.useEffect(()=>{if(!We){ft("");return}let y=!1,O=new Image;return O.onload=()=>{y||ft(Gm(O))},O.onerror=()=>{y||ft("")},O.src=We,()=>{y=!0}},[We]),j.default.useEffect(()=>{let y=!1,O="";if(!v.backgroundImageKey){pt("");return}return(async()=>{try{let J=await Wl();if(!J||y)return;O=URL.createObjectURL(J),pt(O)}catch{y||pt("")}})(),()=>{y=!0,O&&URL.revokeObjectURL(O)}},[v.backgroundImageKey,ur]),j.default.useEffect(()=>{if(!c)return;let y=J=>{J?.type==="scroll"&&J.target instanceof Element&&J.target.closest(".dshr-pdf-translation-panel")||S(null)},O=J=>{J.key==="Escape"&&S(null)};return window.addEventListener("resize",y),window.addEventListener("keydown",O),document.addEventListener("scroll",y,!0),()=>{window.removeEventListener("resize",y),window.removeEventListener("keydown",O),document.removeEventListener("scroll",y,!0)}},[c]);let Rt=j.default.useCallback(async()=>{let y=ae.current.latest;if(y){ae.current.latest=null;try{await Ri(y.id,y.progress),e(O=>O.map(J=>J.id===y.id?{...J,progress:y.progress,lastOpenedAt:Date.now()}:J))}catch{}}},[ct]),$r=j.default.useCallback((y,O)=>{y&&(Oe(O),ae.current.latest={id:y,progress:O},!ae.current.timer&&(ae.current.timer=window.setTimeout(()=>{ae.current.timer=0,Rt()},700)))},[Rt]);j.default.useEffect(()=>()=>{window.clearTimeout(ae.current.timer),Rt()},[Rt]);let ir=j.default.useCallback(async()=>{f(!0);try{let y=await Al();await ct();let O=[`\u6587\u732E ${y.counts.paper||0}`,`\u4E66\u7C4D ${y.counts.book||0}`];y.counts.document&&O.push(`\u6587\u6863 ${y.counts.document}`),D(y.changed>0?`\u4E66\u5355\u5DF2\u6574\u7406\uFF1A${O.join(" \xB7 ")}`:`\u4E66\u5355\u5DF2\u662F\u6700\u65B0\uFF1A${O.join(" \xB7 ")}`)}catch(y){D(y?.message||"\u81EA\u52A8\u6574\u7406\u5931\u8D25\u3002")}finally{f(!1)}},[ct,D]),En=j.default.useCallback(async(y,O)=>{let J=["book","paper","document"],Ke=O||J[(J.indexOf(y.category||"document")+1)%J.length];try{await El(y.id,Ke),await ct(),D(`\u300A${y.title||"\u6587\u6863"}\u300B\u5DF2\u5F52\u5165\u300C${Mo(Ke)}\u300D\u3002`)}catch(Re){D(Re?.message||"\u4FEE\u6539\u5206\u7C7B\u5931\u8D25\u3002")}},[ct,D]),an=j.default.useCallback(y=>{I(O=>({...O,...y})),kt(O=>O+1)},[]),sn=j.default.useCallback(()=>{ee.current?.click()},[]),fr=j.default.useCallback(async y=>{if(y){if(!String(y.type||"").startsWith("image/")){D("\u8BF7\u9009\u62E9\u56FE\u7247\u6587\u4EF6\uFF08JPG / PNG / WebP\uFF09\u3002");return}Ot(!0);try{let O=y;try{let J=await createImageBitmap(y),Ke=Math.min(1,2400/Math.max(J.width,J.height));if(Ke<1){let Re=document.createElement("canvas");Re.width=Math.round(J.width*Ke),Re.height=Math.round(J.height*Ke),Re.getContext("2d").drawImage(J,0,0,Re.width,Re.height);let ut=await new Promise(Ir=>Re.toBlob(Ir,"image/jpeg",.86));ut&&(O=ut)}J.close?.()}catch{}await Ul(O),I(J=>({...J,backgroundImageKey:"reader-background"})),yt(J=>J+1),D("\u80CC\u666F\u56FE\u7247\u5DF2\u4FDD\u5B58\uFF0C\u53EF\u8C03\u6574\u900F\u660E\u5EA6\u548C\u6A21\u7CCA\u5EA6\u3002")}catch(O){D(O?.message||"\u80CC\u666F\u56FE\u7247\u4FDD\u5B58\u5931\u8D25\u3002")}finally{Ot(!1)}}},[D]),sr=j.default.useCallback(async()=>{try{await jl(),I(y=>({...y,backgroundImageKey:""})),pt(""),D("\u5DF2\u79FB\u9664\u80CC\u666F\u56FE\u7247\u3002")}catch(y){D(y?.message||"\u79FB\u9664\u80CC\u666F\u56FE\u7247\u5931\u8D25\u3002")}},[D]),fe=j.default.useCallback(async(y,O={})=>{if(O.rejected){D("\u6CA1\u6709\u53EF\u8BC6\u522B\u7684\u6587\u6863\u3002\u652F\u6301 PDF / EPUB / MOBI / TXT / Markdown / HTML\u3002");return}if(!y?.length)return;l(!0);let J=[],Ke=[];for(let Re of y)try{let tt=await Sl(Re);J.push(tt)}catch(tt){Ke.push(`${Re.name}: ${tt?.message||"\u5BFC\u5165\u5931\u8D25"}`)}await ct(),l(!1),Ke.length>0&&D(Ke[0],4200),J.length>0&&(D(J.length===1?"\u5DF2\u52A0\u5165\u4E66\u67B6\u3002":`\u5DF2\u52A0\u5165 ${J.length} \u4EFD\u6587\u6863\u3002`),je(J[0]))},[ct,D]),k=j.default.useCallback(async y=>{M(!0);try{let O=await rc(y);P(!1),await fe([O])}catch(O){D(O?.message||"\u5728\u7EBF\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u94FE\u63A5\u6216\u7A0D\u540E\u91CD\u8BD5\u3002",5200)}finally{M(!1)}},[fe,D]),q=j.default.useCallback(async()=>{if(re(!1),document.fullscreenElement===ne.current)try{await document.exitFullscreen()}catch{}},[]),ue=j.default.useCallback(async()=>{if(U){await q();return}re(!0),Se(!1)},[U,q]),et=j.default.useCallback(async()=>{try{document.fullscreenElement===ne.current?await document.exitFullscreen():ne.current?.requestFullscreen&&await ne.current.requestFullscreen()}catch{D("\u6D4F\u89C8\u5668\u963B\u6B62\u4E86\u5168\u5C4F\uFF1B\u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528\u5F53\u524D\u7A97\u53E3\u7684\u6C89\u6D78\u6A21\u5F0F\u3002",3600)}},[D]);j.default.useEffect(()=>{let y=()=>{z(document.fullscreenElement===ne.current)};return document.addEventListener("fullscreenchange",y),()=>document.removeEventListener("fullscreenchange",y)},[]),j.default.useEffect(()=>{!u&&U&&q()},[u,U,q]),j.default.useEffect(()=>{if(!U)return;let y=O=>{O.key==="Escape"&&(O.preventDefault(),q())};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[U,q]);let dt=j.default.useCallback(()=>{try{localStorage.removeItem(gi)}catch{}try{sessionStorage.removeItem(Qs)}catch{}pr(null),ae.current.timer&&(window.clearTimeout(ae.current.timer),ae.current.timer=0),Rt(),He(!1),h(null),S(null),Y(null),de([]),ke(!1),qe(!1),oe(null),Ue(null),xe(null),nt(null);let y=le.current?.book;if(y?.dispose)try{y.dispose()}catch{}T(null),Oe({}),_e({index:0,entry:null})},[Rt]),je=j.default.useCallback(async y=>{w(!0),N(`\u6B63\u5728\u6253\u5F00\u300A${y.title||"\u6587\u6863"}\u300B\u2026`);try{let O=await _a(y.id);if(!O?.blob)throw new Error("\u4E66\u67B6\u4E2D\u627E\u4E0D\u5230\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u53EF\u80FD\u5DF2\u88AB\u6E05\u7406\u3002\u8BF7\u91CD\u65B0\u5BFC\u5165\u3002");pr(null);try{localStorage.setItem(gi,O.id)}catch{}try{sessionStorage.setItem(Qs,O.id)}catch{}if((O.format||Mn(O.title))==="pdf"){O.blob.size>24*1024*1024&&N(`\u6B63\u5728\u6253\u5F00\u5927\u578B PDF\u300A${O.title||y.title||"\u6587\u6863"}\u300B\u2026`);let er=O.blob,jr=O.progress||{},bi={...O,blob:null,blobName:O.blob.name||""};T({kind:"pdf",record:bi,data:er}),Oe({page:jr.page||1,pages:jr.pages||0,percent:jr.percent||0}),_e({index:0,entry:null}),Se(!1),ke(!1),nt(null),await ar(O.id),w(!1),await Ri(O.id),await ct();return}let{parseBook:Ke}=await Promise.resolve().then(()=>(Zs(),Ys)),Re=await Ke(O.blob,{fileName:O.title??y.title,mime:O.blob.type}),tt={...O,title:Re.title||O.title,author:Re.author||O.author,language:Re.language||O.language};(tt.title!==O.title||tt.author!==O.author||tt.language!==O.language)&&(await io(O.id,{title:tt.title,author:tt.author,language:tt.language}),await ct());let ut=O.progress||{},Ir=qm(Number(ut.chapter)||0,0,Math.max(0,Re.chapters.length-1));T({kind:"flow",record:tt,book:Re}),_e({index:Ir,entry:{scrollRatio:Number(ut.scrollRatio)||0}}),Oe({chapter:Ir,chapters:Re.chapters.length,percent:Number(ut.percent)||(Re.chapters.length?(Ir+1)/Re.chapters.length*100:0)}),Se(!0),ke(!1),xe(null),await ar(O.id),w(!1),Vl(Re.chapters.slice(0,3).map(er=>er.blocks.map(jr=>jr.text||"").join(" ")).join(" "))&&!gt.current.autoTranslate&&D("\u68C0\u6D4B\u5230\u5916\u6587\u5185\u5BB9\u3002\u9876\u90E8\u300C\u5B9E\u65F6\u7FFB\u8BD1\u300D\u53EF\u4EE5\u968F\u65F6\u5F00\u542F\u3002",4200)}catch(O){w(!1),D(O?.message||"\u6253\u5F00\u6587\u6863\u5931\u8D25\u3002",5e3)}},[ct,ar,D]);j.default.useEffect(()=>{if(a||u||Tn.current||Ve.current.length===0)return;Tn.current=!0;let y="";try{y=localStorage.getItem(gi)||""}catch{}if(!y){pr(null);return}let O=Ve.current.find(Re=>Re.id===y);if(!O){pr(null);try{localStorage.removeItem(gi)}catch{}return}let J=Number(O.size)>24*1024*1024||Number(O.progress?.pages)>300,Ke=!1;try{Ke=sessionStorage.getItem(Qs)===O.id}catch{}pr(O),!(J&&!Ke)&&je(O)},[a,u,je]),j.default.useEffect(()=>{let y=()=>{document.visibilityState==="hidden"&&Rt()};return document.addEventListener("visibilitychange",y),()=>document.removeEventListener("visibilitychange",y)},[Rt]);let wt=j.default.useCallback(async()=>{let y=$;if(y)try{le.current?.record?.id===y.id&&dt(),await Rl(y.id),G(null),await ct(),D("\u5DF2\u4ECE\u4E66\u67B6\u5220\u9664\u3002")}catch(O){D(O?.message||"\u5220\u9664\u5931\u8D25\u3002")}},[dt,$,ct,D]),Ut=j.default.useCallback(async()=>{try{dt(),await Ml(),await ct(),E(!1),D("\u4E66\u67B6\u5DF2\u6E05\u7A7A\u3002")}catch(y){D(y?.message||"\u6E05\u7A7A\u4E66\u67B6\u5931\u8D25\u3002")}},[dt,ct,D]),gr=j.default.useCallback((y,O)=>{h({id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:String(y||"").slice(0,8e3),context:String(O||"").slice(0,1600)}),He(!0),ke(!1),S(null),Y(null)},[]),Cr=j.default.useCallback((y,O="web")=>{let J=String(y||"").trim().slice(0,500);if(!J)return;let Ke=O==="scholar"?`https://scholar.google.com/scholar?q=${encodeURIComponent(J)}`:`https://www.google.com/search?q=${encodeURIComponent(J)}`;window.open(Ke,"_blank","noopener,noreferrer")||D("\u6D4F\u89C8\u5668\u62E6\u622A\u4E86\u65B0\u7A97\u53E3\u3002\u8BF7\u5141\u8BB8\u5F39\u51FA\u7A97\u53E3\uFF0C\u6216\u590D\u5236\u6587\u5B57\u540E\u624B\u52A8\u641C\u7D22\u3002")},[D]),Tt=j.default.useCallback(async y=>{try{await navigator.clipboard.writeText(y),D("\u5DF2\u590D\u5236\u3002")}catch{D("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u3002")}},[D]),gn=j.default.useCallback(y=>{if(Bt(),!y?.text?.trim()){S(null);return}S({...y,source:"flow"}),Y(null)},[Bt]),Hr=j.default.useCallback(y=>{if(Bt(),!y?.text){S(null);return}S({...y,source:"pdf"}),Y(null)},[Bt]),Ur=j.default.useCallback(async y=>{let O=y?.text?.trim();if(!O)return;Bt();let J=new AbortController,Ke=we.current.token,Re=u?.record?.id;we.current.controller=J;let tt=()=>!J.signal.aborted&&Ke===we.current.token&&le.current?.record?.id===Re;Y({status:"loading"});try{let ut=await so([{id:"selection",text:O}],{context:y.context||"",title:u?.book?.title||u?.record?.title||"",signal:J.signal});tt()&&Y({status:"done",zh:ut.selection||""})}catch(ut){tt()&&!Pn(ut)&&Y({status:"error",error:ut?.message||"\u7FFB\u8BD1\u5931\u8D25\u3002"})}},[u,Bt]),ia=j.default.useCallback(y=>{let O=le.current?.record?.id;if(!O||!y?.text?.trim())return;let J=le.current?.kind==="pdf";Ue(null),oe({bookId:O,kind:J?"pdf":"flow",style:"highlight",color:"#f5d76e",width:9,note:"",quote:y.text.trim(),chapterId:J?void 0:le.current?.book?.chapters?.[pe]?.id,chapterIndex:J?void 0:pe,ranges:J?void 0:y.ranges,page:J?y.page:void 0,rects:J?y.pageRects:void 0}),qe(!0),S(null),Y(null)},[pe]),mn=j.default.useCallback(y=>{y&&(Ue(y),oe({...y}),qe(!0))},[]),So=j.default.useCallback(y=>{let O=he.find(J=>J.id===y);O&&mn(O)},[he,mn]),An=j.default.useCallback(()=>{qe(!1),oe(null),Ue(null)},[]),Nn=j.default.useCallback(async y=>{if(!(!y||!y.bookId))try{y.id?await $l(y.id,y):await Bl(y),await ar(y.bookId),An(),kt(O=>O+1),D(y.note?.trim()?"\u6279\u6CE8\u5DF2\u4FDD\u5B58\u3002":"\u6807\u8BB0\u5DF2\u4FDD\u5B58\u3002")}catch(O){D(O?.message||"\u4FDD\u5B58\u6279\u6CE8\u5931\u8D25\u3002")}},[An,ar,D]),sa=j.default.useCallback(async y=>{if(y?.id)try{await Hl(y.id),await ar(le.current?.record?.id),An(),kt(O=>O+1),D("\u6279\u6CE8\u5DF2\u5220\u9664\u3002")}catch(O){D(O?.message||"\u5220\u9664\u6279\u6CE8\u5931\u8D25\u3002")}},[An,ar,D]),Wr=j.default.useCallback(y=>{if(!y)return;if(y.kind==="pdf"){nt({id:y.id,page:y.page,token:Date.now()}),ke(!1);return}let O=Number.isFinite(y.chapterIndex)?y.chapterIndex:0;_e(J=>J.index===O?J:{index:O,entry:{edge:"start"}}),xe({id:y.id,blockId:y.ranges?.[0]?.blockId,token:Date.now()}),ke(!1)},[]),Eo=j.default.useCallback((y,O={edge:"start"})=>{y===pe||y<0||y>=(u?.book?.chapters.length??0)||(xe(null),_e({index:y,entry:O}))},[pe,u]),Ao=j.default.useCallback((y,O)=>{y!==be||u?.kind!=="flow"||(_e(J=>J.entry===y?{index:J.index,entry:null}:J),$r(u.record.id,Oa(pe,u.book.chapters.length,O)))},[be,pe,u,$r]);function Cn(y){if(y.button!==0)return;y.preventDefault();let O=y.clientX,J=Number(gt.current.tocWidth)||260,Ke=document.body.style.cursor,Re=document.body.style.userSelect;document.body.style.cursor="col-resize",document.body.style.userSelect="none",document.body.classList.add("dshr-toc-resizing");let tt=Ir=>{let er=Math.max(180,Math.min(520,Math.round(J+Ir.clientX-O)));I(jr=>({...jr,tocWidth:er}))},ut=()=>{window.removeEventListener("pointermove",tt),window.removeEventListener("pointerup",ut),window.removeEventListener("pointercancel",ut),document.body.style.cursor=Ke,document.body.style.userSelect=Re,document.body.classList.remove("dshr-toc-resizing")};window.addEventListener("pointermove",tt),window.addEventListener("pointerup",ut),window.addEventListener("pointercancel",ut)}let Jn=u?.book?.title||u?.record?.title||u?.record?.blob?.name||u?.record?.blobName||"",mi=u?.book?.author||u?.record?.author||"",la=u?u.kind==="pdf"?V.pages?`\u7B2C ${V.page||1} / ${V.pages} \u9875`:"PDF \u6587\u6863":`\u7B2C ${(pe||0)+1} / ${u.book.chapters.length} \u7AE0`:"",bn=u?u.kind==="pdf"?V.pages>0?(V.page||1)/V.pages*100:0:(pe+1)/Math.max(1,u.book.chapters.length)*100:0;return(0,Q.jsx)(tl,{onReset:dt,children:(0,Q.jsxs)("div",{ref:ne,className:`dshr-root${U?" is-immersive":""}`,style:{...Sn,...Lt,"--dshr-font-size":`${v.fontSize}px`,"--dshr-line-height":String(v.lineHeight),"--dshr-toc-width":`${v.tocWidth}px`},"data-reader-background":v.backgroundPreset,"data-hide-translations":v.hideTranslations?"true":"false","data-reading-mode":v.readingMode||"scroll",children:[(0,Q.jsx)("input",{ref:ee,type:"file",accept:"image/*",className:"dshr-sr-only",tabIndex:-1,onChange:y=>{let O=y.target.files?.[0];y.target.value="",fr(O)}}),u?(0,Q.jsxs)("div",{className:"dshr-reader",children:[(0,Q.jsxs)("div",{className:"dshr-topbar",style:{position:"relative"},children:[(0,Q.jsx)("div",{className:"dshr-progress","aria-hidden":"true",children:(0,Q.jsx)("i",{style:{"--p":`${Math.min(100,bn)}%`}})}),(0,Q.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:dt,title:"\u8FD4\u56DE\u4E66\u67B6","aria-label":"\u8FD4\u56DE\u4E66\u67B6",children:(0,Q.jsx)(dl,{size:17})}),(0,Q.jsxs)("div",{className:"dshr-topbar__title",children:[(0,Q.jsx)("strong",{title:Jn,children:Jn}),(0,Q.jsx)("span",{children:[mi,Gr(u.record?.format),la].filter(Boolean).join(" \xB7 ")})]}),(0,Q.jsxs)("div",{className:"dshr-topbar__tools",children:[u.kind==="flow"?(0,Q.jsx)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${Ie?"dshr-btn--outline":""}`,onClick:()=>Se(y=>!y),title:"\u76EE\u5F55","aria-label":"\u76EE\u5F55","aria-pressed":Ie,children:(0,Q.jsx)(ki,{size:16})}):null,(0,Q.jsxs)("div",{className:"dshr-topbar__mode",role:"group","aria-label":"\u7FFB\u4E66\u65B9\u5F0F",children:[(0,Q.jsx)("button",{type:"button",className:`dshr-topbar__mode-btn${v.readingMode!=="book"?" is-active":""}`,onClick:()=>I(y=>({...y,readingMode:"scroll"})),"aria-pressed":v.readingMode!=="book",title:"\u8FDE\u7EED\u6EDA\u52A8\u9605\u8BFB",children:(0,Q.jsx)("span",{children:"\u6EDA\u52A8"})}),(0,Q.jsx)("button",{type:"button",className:`dshr-topbar__mode-btn${v.readingMode==="book"?" is-active":""}`,onClick:()=>I(y=>({...y,readingMode:"book"})),"aria-pressed":v.readingMode==="book",title:"\u6A2A\u7248\u7EB8\u8D28\u4E66\u7FFB\u9875",children:(0,Q.jsx)("span",{children:"\u6A2A\u7248"})}),v.readingMode==="book"?(0,Q.jsx)("select",{className:"dshr-topbar__animation","aria-label":"\u7FFB\u9875\u52A8\u753B",value:v.bookAnimation||"slide",onChange:y=>I(O=>({...O,bookAnimation:y.target.value})),children:id.map(y=>(0,Q.jsx)("option",{value:y.id,children:y.label},y.id))}):null]}),(0,Q.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon",onClick:()=>{ue()},title:"\u6C89\u6D78\u6A21\u5F0F\uFF08\u9690\u85CF\u5DE5\u5177\u680F\u4E0E\u4FA7\u8FB9\u76EE\u5F55\uFF09","aria-label":"\u8FDB\u5165\u6C89\u6D78\u6A21\u5F0F",children:(0,Q.jsx)(Ti,{size:16})}),(0,Q.jsxs)("button",{type:"button",className:"dshr-switch",role:"switch","aria-checked":v.autoTranslate,onClick:()=>I(y=>({...y,autoTranslate:!y.autoTranslate,...u.kind==="pdf"&&!y.autoTranslate?{hideTranslations:!1}:{}})),title:"\u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1",children:[(0,Q.jsx)("span",{className:"dshr-switch__track"}),(0,Q.jsx)("span",{style:{whiteSpace:"nowrap"},children:"\u5B9E\u65F6\u7FFB\u8BD1"})]}),(0,Q.jsx)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${v.hideTranslations?"dshr-btn--outline":""}`,onClick:()=>I(y=>({...y,hideTranslations:!y.hideTranslations})),title:v.hideTranslations?"\u663E\u793A\u4E2D\u6587\u8BD1\u6587":"\u53EA\u770B\u539F\u6587\uFF08\u9690\u85CF\u5DF2\u7FFB\u8BD1\u5185\u5BB9\uFF09","aria-label":v.hideTranslations?"\u663E\u793A\u4E2D\u6587\u8BD1\u6587":"\u53EA\u770B\u539F\u6587\uFF0C\u9690\u85CF\u8BD1\u6587","aria-pressed":v.hideTranslations,children:v.hideTranslations?(0,Q.jsx)(_l,{size:16}):(0,Q.jsx)(wl,{size:16})}),(0,Q.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon",onClick:()=>{te(!0),S(null)},title:"\u5B57\u4F53\u3001\u80CC\u666F\u4E0E\u7559\u767D","aria-label":"\u9605\u8BFB\u5916\u89C2",children:(0,Q.jsx)(xa,{size:16})}),(0,Q.jsxs)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${ve?"dshr-btn--outline":""}`,onClick:()=>{ke(y=>!y),He(!1),S(null)},title:"\u6279\u6CE8\u4E0E\u4FBF\u7B7E","aria-label":`\u6279\u6CE8\u4E0E\u4FBF\u7B7E\uFF0C\u5171 ${he.length} \u6761`,children:[(0,Q.jsx)(ba,{size:16}),he.length>0?(0,Q.jsx)("span",{className:"dshr-count-badge",children:he.length>99?"99+":he.length}):null]}),(0,Q.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary dshr-btn--sm",onClick:()=>gr("",""),title:"\u6253\u5F00 AI \u9605\u8BFB\u52A9\u624B",children:[(0,Q.jsx)(xn,{size:14})," AI"]}),(0,Q.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:()=>E(!0),title:"\u9605\u8BFB\u8BBE\u7F6E","aria-label":"\u9605\u8BFB\u8BBE\u7F6E",children:(0,Q.jsx)(ua,{size:16})})]})]}),(0,Q.jsxs)("div",{className:"dshr-body",children:[u.kind==="flow"?(0,Q.jsxs)("aside",{className:`dshr-toc${Ie?"":" is-closed"}`,"aria-label":"\u76EE\u5F55",children:[(0,Q.jsxs)("div",{className:"dshr-toc__head",children:[(0,Q.jsx)("strong",{children:"\u76EE\u5F55"}),(0,Q.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost",onClick:()=>Se(!1),"aria-label":"\u6536\u8D77\u76EE\u5F55",children:(0,Q.jsx)(br,{size:14})})]}),(0,Q.jsx)("div",{className:"dshr-toc__list",children:u.book.chapters.map((y,O)=>(0,Q.jsx)("button",{type:"button",className:`dshr-toc__item${O===pe?" is-active":""}`,onClick:()=>Eo(O),title:y.title,children:y.title||`\u7B2C ${O+1} \u7AE0`},y.id||O))}),(0,Q.jsx)("div",{className:"dshr-toc__resizer",role:"separator","aria-orientation":"vertical","aria-label":"\u62D6\u52A8\u8C03\u6574\u76EE\u5F55\u5BBD\u5EA6",title:"\u62D6\u52A8\u8C03\u6574\u76EE\u5F55\u5BBD\u5EA6\uFF1B\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4",onPointerDown:Cn,onDoubleClick:()=>I(y=>({...y,tocWidth:260}))})]}):null,u.kind==="pdf"?(0,Q.jsx)($c,{data:u.data,documentId:u.record.id,fileName:Jn,initialPage:u.record.progress?.page||1,autoTranslate:v.autoTranslate,hideTranslations:v.hideTranslations,paged:v.readingMode==="book",onHideTranslations:()=>I(y=>({...y,hideTranslations:!0})),annotations:he,onOpenAnnotation:So,focusAnnotation:lt,onReady:({pageCount:y})=>Oe(O=>({...O,page:O.page||1,pages:y,percent:y>0?(O.page||1)/y*100:O.percent||0})),onPageChange:y=>{let O=V.pages||0,J={...V,page:y,pages:O,percent:O>0?y/O*100:0};Oe(J),$r(u.record.id,J)},onSelection:Hr},u.record.id):(0,Q.jsx)(yc,{book:u.book,chapterIndex:pe,onChapterChange:Eo,settings:v,chapterEntry:be,onChapterEntered:Ao,onSelection:gn,onProgress:y=>{Oe(y),$r(u.record.id,y)},annotations:he,onOpenAnnotation:So,focusAnnotation:Be,layoutVersion:Zn}),De?(0,Q.jsx)(Uc,{open:De,onClose:()=>He(!1),seed:xt,onGoogle:Cr,onToast:D}):null,ve?(0,Q.jsx)(pd,{open:ve,annotations:he,book:u.book||u.record,onClose:()=>ke(!1),onOpenAnnotation:So,onJump:Wr,onDelete:y=>{sa(y)}}):null]}),U?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)("div",{className:"dshr-immersive-controls",children:[(0,Q.jsx)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>{et()},title:ie?"\u9000\u51FA\u5168\u5C4F\uFF08Esc\uFF09":"\u8FDB\u5165\u5168\u5C4F","aria-label":ie?"\u9000\u51FA\u5168\u5C4F":"\u8FDB\u5165\u5168\u5C4F","aria-pressed":ie,children:ie?(0,Q.jsx)(vl,{size:15}):(0,Q.jsx)(Ti,{size:15})}),(0,Q.jsxs)("button",{type:"button",className:"dshr-immersive-btn dshr-immersive-btn--exit",onClick:()=>{q()},title:"\u9000\u51FA\u6C89\u6D78\u6A21\u5F0F\uFF08Esc\uFF09",children:[(0,Q.jsx)(br,{size:14})," \u9000\u51FA\u6C89\u6D78"]})]}),u.kind==="flow"&&!Ie?(0,Q.jsx)("button",{type:"button",className:"dshr-immersive-toc",onClick:()=>Se(!0),title:"\u6253\u5F00\u76EE\u5F55","aria-label":"\u6253\u5F00\u76EE\u5F55",children:(0,Q.jsx)(ki,{size:15})}):null]}):null,(0,Q.jsx)(td,{enabled:v.readingMode==="book",animation:v.bookAnimation,bookMode:!0,bookFrame:u.kind==="flow",pdfMode:u.kind==="pdf",frameTop:U?0:52,frameLeft:u.kind==="flow"&&Ie?v.tocWidth:0,leftOffset:u.kind==="flow"&&Ie?v.tocWidth+12:12,readerKey:`${u.record.id}:${u.kind}:${pe}`,canPrevChapter:u.kind==="flow"&&pe>0,canNextChapter:u.kind==="flow"&&pe<(u.book?.chapters?.length||1)-1,chapterEntry:be,onChapterEntered:Ao,onChapterTurn:(y,O)=>Eo(pe+y,O)})]}):(0,Q.jsx)(Ql,{books:t,collections:r,onCollectionsChange:Qn,loading:a,resumeBook:fn,onResume:y=>{je(y)},importing:s,organizing:d,categoryFilter:g,onCategoryFilter:p,onAutoOrganize:()=>{ir()},onImport:fe,onOpen:y=>{je(y)},onDelete:y=>G(y),onCycleCategory:(y,O)=>{En(y,O)},onSettings:()=>E(!0),onOnlineImport:()=>P(!0)}),_?(0,Q.jsx)("div",{className:"dshr-modal-mask",style:{background:"color-mix(in srgb, var(--dshr-bg) 76%, transparent)",backdropFilter:"blur(5px)"},children:(0,Q.jsxs)("div",{className:"dshr-loading",children:[(0,Q.jsx)("div",{className:"dshr-loading__ring"}),(0,Q.jsx)("span",{children:A})]})}):null,c&&!De&&!ze?(0,Q.jsx)(Wc,{selection:c,translation:b,onTranslate:y=>{Ur(y)},onAnnotate:ia,onExplain:y=>gr(y.text,y.context),onGoogle:Cr,onCopy:Tt,onClose:()=>{S(null),Y(null)},onRetry:()=>{Ur(c)}}):null,(0,Q.jsx)(Xc,{open:L,busy:x,onClose:()=>{x||P(!1)},onSubmit:y=>{k(y)}}),C?(0,Q.jsx)(jc,{settings:v,onChange:I,onClose:()=>E(!1),onOpenAppearance:()=>{E(!1),te(!0)},onClearLibrary:()=>{Ut()}}):null,F?(0,Q.jsx)(dd,{open:F,settings:v,backgroundImageUrl:We,onChange:an,onPickBackgroundImage:sn,onClearBackgroundImage:()=>{sr()},onClose:()=>te(!1)}):null,$?(0,Q.jsx)(Gc,{book:$,onCancel:()=>G(null),onConfirm:()=>{wt()}}):null,ze&&Fe?(0,Q.jsx)(xd,{open:ze,draft:Fe,mode:Je?"edit":"create",onClose:An,onSave:y=>{Nn(y)},onDelete:Je?()=>{sa(Je)}:void 0}):null,(0,Q.jsx)(qc,{message:se})]})})}var Vh=String.raw`
.dshr-root {
  --dshr-bg: var(--dsw-alias-bg-base, #ffffff);
  --dshr-layer: var(--dsw-alias-bg-layer-1, #f7f7f8);
  --dshr-layer-2: var(--dsw-alias-bg-layer-2, #ffffff);
  --dshr-layer-3: var(--dsw-alias-bg-layer-3, #f0f1f3);
  --dshr-fg: var(--dsw-alias-label-primary, #1f2328);
  --dshr-fg-2: var(--dsw-alias-label-secondary, #5c6370);
  --dshr-fg-3: var(--dsw-alias-label-tertiary, #8a919c);
  --dshr-border: var(--dsw-alias-border-l2, rgba(31, 35, 40, 0.10));
  --dshr-border-strong: var(--dsw-alias-border-l3, rgba(31, 35, 40, 0.16));
  --dshr-hover: var(--dsw-alias-interactive-bg-hover, rgba(31, 35, 40, 0.055));
  --dshr-active: var(--dsw-alias-interactive-bg-active, rgba(31, 35, 40, 0.09));
  --dshr-brand: #4d6bfe;
  --dshr-on-brand: #ffffff;
  --dshr-brand-soft: color-mix(in srgb, var(--dshr-brand) 12%, transparent);
  --dshr-link: var(--dsw-alias-link, #2f6fed);
  --dshr-error: var(--dsw-alias-state-error-primary, #d92d20);
  --dshr-warn: var(--dsw-alias-state-warn-primary, #b54708);
  --dshr-radius: 14px;
  --dshr-radius-sm: 9px;
  --dshr-serif: "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, "Times New Roman", serif;
  --dshr-sans: var(--dsh-font-family-ui, "PingFang SC", "Microsoft YaHei", "Segoe UI", system-ui, sans-serif);
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  padding-top: var(--dsh-frame-top-clearance, 0px);
  color: var(--dshr-fg);
  background:
    radial-gradient(900px 380px at 88% -8%, color-mix(in srgb, var(--dshr-brand) 9%, transparent), transparent 70%),
    var(--dshr-bg);
  font-family: var(--dshr-sans);
  container-type: inline-size;
}
[data-ds-dark-theme] .dshr-root {
  --dshr-bg: var(--dsw-alias-bg-base, #17181b);
  --dshr-layer: var(--dsw-alias-bg-layer-1, #1e2024);
  --dshr-layer-2: var(--dsw-alias-bg-layer-2, #24262b);
  --dshr-layer-3: var(--dsw-alias-bg-layer-3, #2c2f35);
  --dshr-fg: var(--dsw-alias-label-primary, #eceef2);
  --dshr-fg-2: var(--dsw-alias-label-secondary, #b3b8c2);
  --dshr-fg-3: var(--dsw-alias-label-tertiary, #858c98);
  --dshr-border: var(--dsw-alias-border-l2, rgba(255, 255, 255, 0.10));
  --dshr-border-strong: var(--dsw-alias-border-l3, rgba(255, 255, 255, 0.16));
  --dshr-hover: var(--dsw-alias-interactive-bg-hover, rgba(255, 255, 255, 0.07));
  --dshr-active: var(--dsw-alias-interactive-bg-active, rgba(255, 255, 255, 0.11));
  --dshr-brand: #7aaaff;
  --dshr-on-brand: #0b1220;
  --dshr-link: var(--dsw-alias-link, #8fb1ff);
  background:
    radial-gradient(900px 380px at 88% -8%, color-mix(in srgb, var(--dshr-brand) 13%, transparent), transparent 70%),
    var(--dshr-bg);
}
.dshr-root *, .dshr-root *::before, .dshr-root *::after { box-sizing: border-box; }
.dshr-root button, .dshr-root input, .dshr-root select, .dshr-root textarea { font: inherit; color: inherit; }
.dshr-root button { cursor: pointer; }
.dshr-root ::selection { background: color-mix(in srgb, var(--dshr-brand) 28%, transparent); }

.dshr-app {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding-top: var(--dsh-frame-top-clearance, 0px);
}
.dshr-main { flex: 1 1 auto; min-height: 0; display: flex; overflow: hidden; position: relative; }

/* ---------- shared controls ---------- */
.dshr-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 7px;
  height: 32px; padding: 0 12px; border-radius: 9px; border: 1px solid transparent;
  background: transparent; color: var(--dshr-fg-2); white-space: nowrap;
  transition: background .16s ease, color .16s ease, border-color .16s ease, transform .16s ease;
  font-size: 13px; line-height: 1;
}
.dshr-btn:hover { background: var(--dshr-hover); color: var(--dshr-fg); }
.dshr-btn:active { transform: translateY(1px); }
.dshr-btn[disabled] { opacity: .45; cursor: not-allowed; transform: none; }
.dshr-btn--primary {
  background: var(--dshr-brand); color: var(--dshr-on-brand) !important; border-color: transparent;
  box-shadow: 0 5px 16px color-mix(in srgb, var(--dshr-brand) 24%, transparent);
}
.dshr-btn--primary:hover { background: color-mix(in srgb, var(--dshr-brand) 86%, #000); color: var(--dshr-on-brand) !important; }
.dshr-btn--outline { border-color: var(--dshr-border); background: var(--dshr-layer-2); }
.dshr-btn--outline:hover { border-color: var(--dshr-border-strong); }
.dshr-btn--ghost { color: var(--dshr-fg-2); }
.dshr-btn--icon { width: 32px; padding: 0; }
.dshr-btn--danger { color: var(--dshr-error); }
.dshr-btn--sm { height: 27px; padding: 0 9px; font-size: 12px; border-radius: 7px; }

.dshr-switch {
  display: inline-flex; align-items: center; gap: 8px; border: 0; background: transparent;
  padding: 4px 6px; border-radius: 9px; color: var(--dshr-fg-2); font-size: 12.5px;
}
.dshr-switch:hover { background: var(--dshr-hover); color: var(--dshr-fg); }
.dshr-switch__track {
  width: 30px; height: 18px; border-radius: 999px; background: var(--dshr-border-strong);
  position: relative; transition: background .18s ease; flex: 0 0 auto;
}
.dshr-switch__track::after {
  content: ""; position: absolute; top: 2px; left: 2px; width: 14px; height: 14px;
  border-radius: 50%; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,.25);
  transition: transform .18s cubic-bezier(.2,.9,.25,1);
}
.dshr-switch[aria-checked="true"] .dshr-switch__track { background: var(--dshr-brand); }
.dshr-switch[aria-checked="true"] .dshr-switch__track::after { transform: translateX(12px); }

.dshr-chip {
  display: inline-flex; align-items: center; gap: 5px; height: 21px; padding: 0 8px;
  border-radius: 999px; background: var(--dshr-layer-3); color: var(--dshr-fg-2);
  font-size: 11px; font-weight: 600; letter-spacing: .02em;
}
.dshr-chip--brand { background: var(--dshr-brand-soft); color: var(--dshr-brand); }
.dshr-icon { display: inline-flex; flex: 0 0 auto; }

/* ---------- library ---------- */
.dshr-library { flex: 1; min-height: 0; overflow-y: auto; scrollbar-gutter: stable; }
[data-ds-dark-theme] .dshr-library { color-scheme: dark; }
.dshr-library__inner { width: min(1120px, 100%); margin: 0 auto; padding: 34px 40px 80px; }
.dshr-hero { display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: 18px; margin: 4px 0 20px; }
.dshr-hero__eyebrow { display: flex; align-items: center; gap: 8px; color: var(--dshr-brand); font-size: 12px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
.dshr-hero h1 { margin: 8px 0 5px; font: 650 30px/1.15 var(--dshr-serif); letter-spacing: -.02em; }
.dshr-hero p { margin: 0; max-width: 620px; color: var(--dshr-fg-2); font-size: 13.5px; line-height: 1.7; }
.dshr-hero__actions { display: flex; flex-wrap: wrap; gap: 8px; padding-bottom: 4px; }
.dshr-resume {
  display: flex; align-items: center; gap: 14px; width: 100%; margin: 0 0 20px;
  padding: 14px 18px; border: 1px solid var(--dshr-border); border-radius: 14px;
  background: color-mix(in srgb, var(--dshr-layer-2) 76%, var(--dshr-bg));
  color: var(--dshr-fg); text-align: left; cursor: pointer;
  box-shadow: 0 1px 2px color-mix(in srgb, var(--dshr-fg) 5%, transparent);
  transition: border-color .15s ease, transform .15s ease, box-shadow .15s ease;
}
.dshr-resume:hover { border-color: color-mix(in srgb, var(--dshr-brand) 52%, var(--dshr-border)); transform: translateY(-1px); box-shadow: 0 8px 24px color-mix(in srgb, var(--dshr-fg) 9%, transparent); }
.dshr-resume:focus-visible { outline: 2px solid var(--dshr-brand); outline-offset: 2px; }
.dshr-resume__mark { display: grid; place-items: center; flex: 0 0 auto; width: 40px; height: 40px; border-radius: 11px; color: var(--dshr-brand); background: var(--dshr-brand-soft); }
.dshr-resume__body { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.dshr-resume__eyebrow { color: var(--dshr-brand); font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
.dshr-resume__body strong { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 15px; font-weight: 650; }
.dshr-resume__meta { color: var(--dshr-fg-3); font-size: 12px; }
.dshr-resume__arrow { margin-left: auto; color: var(--dshr-fg-3); font-size: 20px; }
.dshr-drop {
  position: relative; border: 1.5px dashed var(--dshr-border-strong); border-radius: 18px;
  background: linear-gradient(135deg, color-mix(in srgb, var(--dshr-brand) 5%, var(--dshr-layer)), var(--dshr-layer));
  padding: 30px 28px; display: flex; align-items: center; gap: 20px; overflow: hidden;
  transition: border-color .2s ease, background .2s ease, transform .2s ease;
}
.dshr-drop::after {
  content: ""; position: absolute; inset: -40% -10% auto auto; width: 380px; height: 240px;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--dshr-brand) 14%, transparent), transparent);
  pointer-events: none;
}
.dshr-drop.is-over { border-color: var(--dshr-brand); background: color-mix(in srgb, var(--dshr-brand) 8%, var(--dshr-layer)); transform: translateY(-1px); }
.dshr-drop__mark {
  width: 54px; height: 54px; border-radius: 16px; display: grid; place-items: center; flex: 0 0 auto;
  color: #fff; background: linear-gradient(145deg, color-mix(in srgb, var(--dshr-brand) 84%, #fff), var(--dshr-brand));
  box-shadow: 0 10px 26px color-mix(in srgb, var(--dshr-brand) 28%, transparent);
}
.dshr-drop__body { min-width: 0; flex: 1; }
.dshr-drop__title { font-weight: 650; font-size: 15px; margin-bottom: 4px; }
.dshr-drop__hint { color: var(--dshr-fg-2); font-size: 12.5px; line-height: 1.6; }
.dshr-drop__formats { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 10px; }
.dshr-drop.is-compact { padding: 11px 14px; gap: 10px; border-radius: 12px; }
.dshr-drop.is-compact .dshr-drop__mark { width: 34px; height: 34px; border-radius: 8px; }
.dshr-drop.is-compact .dshr-drop__mark svg { width: 17px; height: 17px; }
.dshr-drop.is-compact .dshr-drop__title { margin-bottom: 1px; font-size: 13px; }
.dshr-drop.is-compact .dshr-drop__hint { font-size: 11px; }
.dshr-library__bar { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin: 30px 2px 14px; }
.dshr-library__bar h2 { margin: 0; font-size: 14px; font-weight: 650; letter-spacing: .01em; flex: 0 0 auto; }
.dshr-library__bar > span { color: var(--dshr-fg-3); font-size: 12px; margin-left: auto; }
.dshr-library__search {
  display: flex; align-items: center; gap: 6px; height: 30px; padding: 0 9px;
  border: 1px solid var(--dshr-border); border-radius: 8px; background: var(--dshr-layer-2);
  color: var(--dshr-fg-3); flex: 1; max-width: 260px; margin-left: 10px;
}
.dshr-library__search input {
  width: 100%; border: 0; outline: none; background: transparent; font-size: 12px;
}
.dshr-library__search:focus-within { border-color: color-mix(in srgb, var(--dshr-brand) 48%, var(--dshr-border)); box-shadow: 0 0 0 2px var(--dshr-brand-soft); }
.dshr-collections { margin-bottom: 20px; }
.dshr-collections__bar, .dshr-collection-context { display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; margin-bottom: 12px; }
.dshr-collections__bar h2 { margin: 0; font-size: 15px; }
.dshr-collections__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 250px), 1fr)); align-items: start; gap: 12px; }
.dshr-collection { min-width: 0; border: 1px solid var(--dshr-border); border-radius: var(--dshr-radius); background: var(--dshr-layer-2); }
.dshr-collection:hover, .dshr-collection:focus-within { border-color: var(--dshr-border-strong); }
.dshr-collection__open { width: 100%; display: block; text-align: left; border: 0; border-radius: inherit; padding: 13px; background: transparent; }
.dshr-collection__top { display: flex; align-items: center; gap: 9px; }
.dshr-collection__icon { display: grid; place-items: center; width: 34px; height: 34px; flex: 0 0 auto; border-radius: 8px; color: var(--dshr-brand); background: var(--dshr-brand-soft); }
.dshr-collection__heading { display: flex; flex: 1; flex-direction: column; min-width: 0; gap: 2px; }
.dshr-collection__heading strong { font-size: 14px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.dshr-collection__heading small, .dshr-collection__empty { color: var(--dshr-fg-2); font-size: 11px; }
.dshr-collection__top > svg { flex: 0 0 auto; color: var(--dshr-fg-3); }
.dshr-collection__covers { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 7px; margin-top: 11px; }
.dshr-collection__sample { display: flex; flex-direction: column; gap: 5px; min-width: 0; }
.dshr-collection__cover { display: block; width: 100%; aspect-ratio: 2/3; max-height: 95px; border-radius: 5px; overflow: hidden; background: var(--dshr-layer-3); }
.dshr-collection__cover img { display: block; width: 100%; height: 100%; object-fit: contain; }
.dshr-collection__spine { display: grid; place-items: center; width: 100%; height: 100%; border-left: 2px solid var(--dshr-brand); color: var(--dshr-fg-2); font-size: 10px; }
.dshr-collection__title { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; overflow-wrap: anywhere; font-size: 11px; line-height: 1.35; color: var(--dshr-fg-2); }
.dshr-collection__empty { display: grid; min-height: 98px; place-items: center; margin-top: 10px; border-radius: 7px; background: var(--dshr-layer); }
.dshr-root .dshr-collection__peek { display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 8px 13px; font-size: 12px; border: 0; border-top: 1px solid var(--dshr-border); background: transparent; color: var(--dshr-fg-2); }
.dshr-collection__peek:hover, .dshr-collection__preview button:hover { background: var(--dshr-hover); }
.dshr-collection__peek[aria-expanded="true"] svg { transform: rotate(180deg); }
.dshr-collection__preview { list-style: none; margin: 0; padding: 3px 8px 8px; max-height: 240px; overflow: auto; }
.dshr-collection__preview button { display: flex; align-items: baseline; gap: 8px; justify-content: space-between; width: 100%; padding: 6px; text-align: left; border: 0; border-radius: 5px; background: transparent; }
.dshr-collection__preview button span { min-width: 0; font-size: 12px; overflow-wrap: anywhere; }
.dshr-collection__preview button small { flex: 0 0 auto; font-size: 10px; color: var(--dshr-fg-2); }
.dshr-collection-context nav, .dshr-collection-context nav span, .dshr-collection-context__actions { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; }
.dshr-collection-context nav span { font-weight: 650; overflow-wrap: anywhere; min-width: 0; }
.dshr-collection-context nav svg { flex: 0 0 auto; }
.dshr-collection-selection { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; padding: 9px 12px; margin-bottom: 10px; border: 1px solid var(--dshr-border); border-radius: 9px; background: var(--dshr-brand-soft); font-size: 12px; }
.dshr-library__notice:not(:empty) { margin: 0 2px 10px; font-size: 12px; color: var(--dshr-fg-2); }
.dshr-collection__open:focus-visible, .dshr-collection__peek:focus-visible, .dshr-collection__preview button:focus-visible, .dshr-book:focus-visible { outline: 2px solid var(--dshr-brand); outline-offset: -2px; }
.dshr-books { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 250px), 1fr)); gap: 14px; }
.dshr-book__badges { display: flex; align-items: center; gap: 4px; padding: 3px 8px; border-top: 1px solid var(--dshr-border); }
.dshr-book__add { margin-left: auto; }
.dshr-book__category {
  display: inline-flex; align-items: center; gap: 4px; height: 21px; padding: 0 7px;
  border-radius: 999px; border: 1px solid var(--dshr-border); background: var(--dshr-layer);
  color: var(--dshr-fg-2); font-size: 10.5px; font-weight: 600;
}
.dshr-book__category:hover { border-color: var(--dshr-border-strong); background: var(--dshr-hover); }
.dshr-book__category.is-paper { color: #8a5a12; background: color-mix(in srgb, #f5b84b 16%, var(--dshr-layer-2)); }
.dshr-book__category.is-book { color: #26624a; background: color-mix(in srgb, #49b98a 16%, var(--dshr-layer-2)); }
.dshr-book__category.is-document { color: #3d4f8f; background: color-mix(in srgb, #7e96ef 16%, var(--dshr-layer-2)); }
[data-ds-dark-theme] .dshr-book__category.is-paper { color: #f5c46b; }
[data-ds-dark-theme] .dshr-book__category.is-book { color: #83dcb6; }
[data-ds-dark-theme] .dshr-book__category.is-document { color: #a9baff; }
.dshr-count-badge {
  position: absolute; top: 2px; right: 2px; min-width: 14px; height: 14px; padding: 0 3px;
  border-radius: 999px; background: var(--dshr-brand); color: var(--dshr-on-brand);
  font-size: 8.5px; line-height: 14px; text-align: center; font-weight: 700;
}
.dshr-book-card { min-width: 0; border-radius: var(--dshr-radius); border: 1px solid var(--dshr-border); background: var(--dshr-layer-2); }
.dshr-book-card:hover, .dshr-book-card:focus-within { border-color: var(--dshr-border-strong); }
.dshr-book-card.is-selected { border-color: var(--dshr-brand); background: var(--dshr-brand-soft); }
.dshr-book { position: relative; display: flex; width: 100%; gap: 13px; min-height: 122px; padding: 11px; text-align: left; border: 0; border-radius: inherit; background: transparent; }
.dshr-book-card.is-selecting .dshr-book__title { padding-right: 24px; }
.dshr-book__selected { position: absolute; top: 9px; right: 9px; display: grid; place-items: center; width: 18px; height: 18px; border: 1px solid var(--dshr-border-strong); border-radius: 5px; }
.dshr-book-card.is-selected .dshr-book__selected { background: var(--dshr-brand); color: var(--dshr-on-brand); border-color: transparent; }
.dshr-book__media { width: 70px; height: 104px; flex: 0 0 auto; position: relative; }
.dshr-book__cover {
  width: 100%; height: 100%; object-fit: cover; display: block;
  border-radius: 5px 8px 8px 5px; background: var(--dshr-layer-3);
  box-shadow: 0 6px 16px rgba(15, 23, 42, .18), inset 0 0 0 1px rgba(255,255,255,.10);
}
.dshr-book__spine {
  width: 100%; height: 100%; min-height: 0; border-radius: 6px 9px 9px 6px; flex: 0 0 auto;
  background: linear-gradient(150deg, color-mix(in srgb, var(--dshr-brand) 20%, var(--dshr-layer-3)), var(--dshr-layer-3));
  border-left: 3px solid color-mix(in srgb, var(--dshr-brand) 58%, transparent);
  display: flex; align-items: center; justify-content: center; color: var(--dshr-brand);
  font: 700 11px/1 var(--dshr-sans); letter-spacing: .02em;
  box-shadow: 0 5px 14px rgba(15, 23, 42, .08);
}
.dshr-book__body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 4px; }
.dshr-book__title {
  font-weight: 650; font-size: 14px; line-height: 1.45; overflow: hidden;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
  overflow-wrap: anywhere; word-break: break-word;
}
.dshr-book__meta { color: var(--dshr-fg-3); font-size: 11.5px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.dshr-book__foot { margin-top: auto; display: flex; align-items: center; justify-content: space-between; gap: 8px; color: var(--dshr-fg-3); font-size: 11px; }
.dshr-book__progress { width: 100%; height: 3px; border-radius: 999px; background: var(--dshr-layer-3); overflow: hidden; margin-top: 7px; }
.dshr-book__progress > i { display: block; height: 100%; width: var(--p, 0%); background: var(--dshr-brand); border-radius: inherit; }
.dshr-empty-books { display: flex; align-items: center; flex-wrap: wrap; gap: 10px; padding: 24px 6px; color: var(--dshr-fg-2); font-size: 13px; }
.dshr-library__foot { margin-top: 30px; color: var(--dshr-fg-3); font-size: 11.5px; line-height: 1.7; display: flex; gap: 16px; flex-wrap: wrap; }

/* ---------- reader chrome ---------- */
.dshr-reader { flex: 1; min-width: 0; display: flex; flex-direction: column; min-height: 0; position: relative; }
.dshr-root:fullscreen { width: 100vw; height: 100vh; border-radius: 0; }
.dshr-root.is-immersive .dshr-topbar { display: none; }
.dshr-immersive-controls {
  position: absolute; z-index: 40; top: 12px; right: 12px;
  display: flex; align-items: center; gap: 6px;
}
.dshr-immersive-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 5px;
  height: 32px; min-width: 32px; padding: 0 9px;
  border: 1px solid var(--dshr-border); border-radius: 8px;
  background: color-mix(in srgb, var(--dshr-layer) 82%, transparent); color: var(--dshr-fg-2);
  backdrop-filter: blur(8px); font-size: 12px;
}
.dshr-immersive-btn:hover { color: var(--dshr-fg); border-color: var(--dshr-border-strong); }
.dshr-immersive-btn--exit { font-size: 11.5px; }
.dshr-immersive-toc {
  position: absolute; z-index: 40; top: 56px; left: 0;
  display: grid; place-items: center; width: 32px; height: 42px; padding: 0;
  border: 1px solid var(--dshr-immersive-border, var(--dshr-border)); border-left: 0;
  border-radius: 0 9px 9px 0;
  background: var(--dshr-immersive-chip, color-mix(in srgb, var(--dshr-layer) 72%, transparent));
  color: var(--dshr-immersive-ink, var(--dshr-fg));
  backdrop-filter: blur(10px);
  box-shadow: 0 3px 14px rgba(0, 0, 0, .10);
  transition: color .18s ease, background .18s ease, border-color .18s ease, transform .18s ease;
}
.dshr-immersive-toc svg { opacity: .92; }
.dshr-immersive-toc:hover, .dshr-immersive-toc:focus-visible {
  color: var(--dshr-immersive-ink, var(--dshr-fg));
  background: var(--dshr-immersive-chip-hover, color-mix(in srgb, var(--dshr-layer) 90%, transparent));
  border-color: var(--dshr-immersive-border, var(--dshr-border-strong));
  transform: translateX(1px);
}
.dshr-paged-controls { position: absolute; inset: 0; z-index: 18; pointer-events: none; }
.dshr-book-mask {
  position: absolute; left: var(--dshr-book-frame-left, 0); right: 0; z-index: 1;
  background: var(--dshr-reader-bg, #fbf7ee); pointer-events: none;
}
.dshr-book-mask--top { top: var(--dshr-book-frame-top, 52px); height: var(--dshr-book-top-cover, 48px); }
.dshr-book-mask--bottom { bottom: 0; height: var(--dshr-book-bottom-cover, 56px); }
.dshr-root[data-reading-mode="book"] .dshr-content__inner { padding-top: 48px; padding-bottom: 240px; }
.dshr-paged-btn {
  position: absolute; top: var(--dshr-paged-top, 50%); transform: translateY(-50%); pointer-events: auto; z-index: 2;
  display: grid; place-items: center; width: 36px; height: 62px;
  border: 1px solid var(--dshr-border); border-radius: 10px;
  background: color-mix(in srgb, var(--dshr-bg) 78%, transparent); color: var(--dshr-fg-3);
  opacity: .38; backdrop-filter: blur(8px); transition: opacity .18s ease, color .18s ease, border-color .18s ease;
}
.dshr-paged-btn:hover:not(:disabled), .dshr-paged-controls:hover .dshr-paged-btn:not(:disabled) { opacity: 1; color: var(--dshr-brand); border-color: var(--dshr-brand); }
.dshr-paged-btn:disabled { opacity: .12; cursor: default; }
.dshr-paged-prev { left: var(--dshr-paged-left, 12px); }
.dshr-paged-next { right: var(--dshr-paged-right, 12px); }
.dshr-paged-status {
  position: absolute; bottom: var(--dshr-paged-bottom, 14px); left: var(--dshr-paged-center, 50%); transform: translateX(-50%); pointer-events: auto; z-index: 2;
  display: inline-flex; align-items: baseline; gap: 3px; padding: 4px 10px;
  border: 1px solid var(--dshr-border); border-radius: 30px;
  background: color-mix(in srgb, var(--dshr-bg) 84%, transparent); color: var(--dshr-fg-3);
  backdrop-filter: blur(8px); font: 11px/1.4 var(--dshr-sans); letter-spacing: .02em;
}
.dshr-paged-status b { color: var(--dshr-fg); font-size: 13px; font-weight: 650; }
.dshr-paged-status span { opacity: .45; }
.dshr-paged-status em { font-style: normal; }
.dshr-paged-scroll { scrollbar-width: none; scroll-behavior: auto; overflow-anchor: none; }
.dshr-page-tail { width: 1px; pointer-events: none; }
.dshr-flow-transition {
  position: absolute; z-index: 17; overflow: hidden; isolation: isolate;
  pointer-events: none; user-select: none; contain: strict;
  background: var(--dshr-reader-bg, #fbf7ee);
  color: var(--dshr-reader-ink); filter: brightness(var(--dshr-reader-brightness, 1));
}
.dshr-turn-page { position: absolute; inset: 0; overflow: hidden; background: var(--dshr-reader-bg, #fbf7ee); }
.dshr-turn-page::before {
  content: ''; position: absolute; inset: 0; background: var(--dshr-reader-image, none) center / cover no-repeat;
  opacity: var(--dshr-reader-image-opacity, .26); filter: blur(var(--dshr-reader-image-blur, 0px));
}
.dshr-turn-page.has-edge-shadow { box-shadow: -14px 0 24px -18px rgba(0,0,0,.38); }
.dshr-turn-mask { position: absolute; left: 0; right: 0; z-index: 4; background: var(--dshr-reader-bg, #fbf7ee); }
.dshr-turn-mask--top { top: 0; }
.dshr-turn-mask--bottom { bottom: 0; }
.dshr-is-turning .dshr-book-mask { visibility: hidden; }
.dshr-turn-fold {
  position: absolute; inset: 0; z-index: 3; transform-origin: 0 0; overflow: hidden;
  background: linear-gradient(100deg, rgba(0,0,0,.13), transparent 9%, rgba(255,255,255,.15) 30%, transparent 75%), var(--dshr-reader-bg, #fbf7ee);
  box-shadow: inset 1px 0 2px rgba(0,0,0,.12);
}
.dshr-turn-fold-shadow {
  position: absolute; left: 0; top: 0; width: 70px; height: 200%; transform-origin: 0 50%;
  background: linear-gradient(to right, #000, transparent); pointer-events: none;
}
.dshr-paged-scroll::-webkit-scrollbar { width: 0; height: 0; }
.dshr-topbar {
  display: flex; align-items: center; gap: 10px; padding: 9px 16px 9px 12px;
  border-bottom: 1px solid var(--dshr-border); background: color-mix(in srgb, var(--dshr-bg) 88%, transparent);
  backdrop-filter: blur(12px); flex: 0 0 auto; min-height: 52px;
}
.dshr-topbar__title { min-width: 0; flex: 1; display: flex; flex-direction: column; gap: 2px; }
.dshr-topbar__title strong { font-size: 13.5px; font-weight: 650; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.dshr-topbar__title span { color: var(--dshr-fg-3); font-size: 11px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.dshr-topbar__tools { display: flex; align-items: center; gap: 4px; }
.dshr-topbar__mode {
  display: flex; align-items: center; gap: 2px; padding: 2px;
  border: 1px solid var(--dshr-border); border-radius: 8px; background: var(--dshr-layer-2);
}
.dshr-topbar__mode-btn {
  height: 24px; padding: 0 8px; border: 0; border-radius: 6px;
  background: transparent; color: var(--dshr-fg-3);
  font: 11.5px/1 var(--dshr-sans); white-space: nowrap;
  transition: color .15s ease, background .15s ease;
}
.dshr-topbar__mode-btn:hover { color: var(--dshr-fg); }
.dshr-topbar__mode-btn.is-active { color: var(--dshr-brand); background: var(--dshr-brand-soft); font-weight: 600; }
.dshr-topbar__animation {
  height: 24px; max-width: 96px; margin-left: 2px; padding: 0 5px;
  border: 1px solid var(--dshr-border-strong); border-radius: 6px; outline: 0;
  background: var(--dshr-layer-2); color: var(--dshr-fg);
  font: 600 11.5px/1 var(--dshr-sans); cursor: pointer;
}
.dshr-topbar__animation option { background: var(--dshr-layer-2); color: var(--dshr-fg); }
.dshr-topbar__animation:focus-visible { border-color: var(--dshr-brand); }
.dshr-topbar__tools .dshr-btn { position: relative; }
.dshr-topbar__divider { width: 1px; height: 18px; background: var(--dshr-border); margin: 0 4px; }
.dshr-progress {
  height: 2px; flex: 0 0 auto; background: transparent; position: absolute; left: 0; right: 0; top: 0; z-index: 3;
}
.dshr-progress > i { display: block; height: 100%; background: var(--dshr-brand); width: var(--p, 0%); transition: width .25s ease; }

.dshr-body { flex: 1; min-height: 0; display: flex; overflow: hidden; position: relative; }
.dshr-toc {
  width: var(--dshr-toc-width, 246px); flex: 0 0 auto; position: relative;
  border-right: 1px solid var(--dshr-border); background: var(--dshr-layer);
  display: flex; flex-direction: column; min-height: 0; transition: width .2s ease, opacity .2s ease;
}
.dshr-toc.is-closed { width: 0; border-right-color: transparent; opacity: 0; overflow: hidden; pointer-events: none; }
.dshr-toc__resizer {
  position: absolute; z-index: 3; top: 0; right: -4px; bottom: 0; width: 8px;
  cursor: col-resize; touch-action: none; outline: none;
}
.dshr-toc__resizer::after {
  content: ""; position: absolute; top: 50%; left: 50%; width: 3px; height: 38px;
  transform: translate(-50%, -50%); border-radius: 3px; background: var(--dshr-border-strong);
  opacity: .45; transition: opacity .15s ease, background .15s ease;
}
.dshr-toc__resizer:hover::after, .dshr-toc__resizer:focus-visible::after { opacity: 1; background: var(--dshr-brand); }
.dshr-toc-resizing .dshr-toc { transition: none; }
.dshr-toc__head { padding: 15px 16px 10px; display: flex; align-items: center; justify-content: space-between; }
.dshr-toc__head strong { font-size: 12px; letter-spacing: .08em; text-transform: uppercase; color: var(--dshr-fg-3); }
.dshr-toc__list { overflow-y: auto; padding: 2px 9px 20px; min-height: 0; }
.dshr-toc__item {
  display: block; width: 100%; text-align: left; border: 0; background: transparent; color: var(--dshr-fg-2);
  padding: 7px 9px; border-radius: 7px; font-size: 12.5px; line-height: 1.45;
  overflow-wrap: anywhere; white-space: normal;
}
.dshr-toc__item:hover { background: var(--dshr-hover); color: var(--dshr-fg); }
.dshr-toc__item.is-active { background: var(--dshr-brand-soft); color: var(--dshr-brand); font-weight: 600; }
.dshr-toc__item[data-depth="1"] { padding-left: 20px; }
.dshr-toc__item[data-depth="2"] { padding-left: 31px; font-size: 12px; }
.dshr-toc__empty { color: var(--dshr-fg-3); font-size: 12px; padding: 14px 10px; }

.dshr-content { flex: 1; min-width: 0; overflow-y: auto; scroll-behavior: smooth; position: relative; }
.dshr-content__inner { width: min(760px, calc(100% - 56px)); margin: 0 auto; padding: 34px 0 110px; }
.dshr-content.is-pdf .dshr-content__inner { width: 100%; padding: 0; }
.dshr-chapter { outline: none; }
.dshr-chapter__kicker { color: var(--dshr-fg-3); font-size: 11px; letter-spacing: .1em; text-transform: uppercase; margin-bottom: 7px; }
.dshr-block { position: relative; margin: 0 0 1.05em; font-size: var(--dshr-font-size, 18px); line-height: var(--dshr-line-height, 1.85); }
.dshr-block__body { position: relative; }
.dshr-block__body > :first-child { margin-top: 0; }
.dshr-block__body > :last-child { margin-bottom: 0; }
.dshr-block[data-kind="heading"] { margin: 1.9em 0 .75em; }
.dshr-block[data-kind="heading"] h1 { font-size: 1.9em; }
.dshr-block[data-kind="heading"] h2 { font-size: 1.5em; }
.dshr-block[data-kind="heading"] h3 { font-size: 1.24em; }
.dshr-block[data-kind="heading"] h4, .dshr-block[data-kind="heading"] h5, .dshr-block[data-kind="heading"] h6 { font-size: 1.06em; }
.dshr-block[data-kind="heading"] :is(h1,h2,h3,h4,h5,h6) {
  font-family: var(--dshr-serif); font-weight: 650; line-height: 1.35; margin: 0; color: var(--dshr-fg);
}
.dshr-block[data-kind="list-item"] { padding-left: 1.35em; margin-bottom: .55em; }
.dshr-block[data-kind="list-item"]::before { content: "•"; position: absolute; left: .2em; color: var(--dshr-brand); }
.dshr-block[data-kind="quote"] {
  padding: 2px 0 2px 18px; border-left: 3px solid color-mix(in srgb, var(--dshr-brand) 55%, transparent);
  color: var(--dshr-fg-2); font-style: italic;
}
.dshr-block[data-kind="code"] {
  background: var(--dshr-layer); border: 1px solid var(--dshr-border); border-radius: 10px;
  padding: 12px 14px; overflow-x: auto; font: 13px/1.65 "Cascadia Code", "SFMono-Regular", Consolas, monospace;
}
.dshr-block[data-kind="table"] { overflow-x: auto; font-size: .88em; }
.dshr-block[data-kind="table"] table { border-collapse: collapse; min-width: 60%; }
.dshr-block[data-kind="table"] :is(td,th) { border: 1px solid var(--dshr-border); padding: 7px 10px; text-align: left; vertical-align: top; }
.dshr-block[data-kind="table"] th { background: var(--dshr-layer); font-weight: 650; }
.dshr-block[data-kind="image"] { margin: 1.4em 0; text-align: center; }
.dshr-block[data-kind="image"] img { max-width: 100%; max-height: 78vh; border-radius: 8px; }
.dshr-block[data-kind="image"] figcaption { margin-top: 8px; color: var(--dshr-fg-3); font-size: 12px; }
.dshr-block[data-kind="rule"] { border: 0; height: 1px; background: var(--dshr-border); margin: 2em 0; }
.dshr-block a { color: var(--dshr-link); text-decoration: none; border-bottom: 1px solid color-mix(in srgb, var(--dshr-link) 30%, transparent); }
.dshr-block a:hover { border-bottom-color: var(--dshr-link); }
.dshr-block :is(ruby, rt) { font-size: .72em; color: var(--dshr-fg-2); }
.dshr-block[data-kind="paragraph"] > p:first-child, .dshr-block[data-kind="quote"] > p:first-child { margin-top: 0; }
.dshr-block[data-kind="paragraph"] > p:last-child, .dshr-block[data-kind="quote"] > p:last-child { margin-bottom: 0; }

.dshr-root[data-hide-translations="true"] .dshr-translation,
.dshr-root[data-hide-translations="true"] .dshr-pdf-translation {
  display: none !important;
}
.dshr-translation {
  margin: 8px 0 4px; padding: 9px 12px 10px; border-radius: 9px;
  background: color-mix(in srgb, var(--dshr-brand) 5.5%, var(--dshr-layer));
  border: 1px solid color-mix(in srgb, var(--dshr-brand) 12%, transparent);
  color: var(--dshr-fg-2); font-size: calc(var(--dshr-font-size, 18px) * .78);
  line-height: 1.72; position: relative;
}
.dshr-translation::before {
  content: "译"; position: absolute; right: 9px; top: 7px; color: var(--dshr-brand);
  font: 700 10px/1 var(--dshr-sans); opacity: .55;
}
.dshr-translation.is-error { background: color-mix(in srgb, var(--dshr-error) 6%, var(--dshr-layer)); border-color: color-mix(in srgb, var(--dshr-error) 16%, transparent); color: var(--dshr-error); }
.dshr-translation p { margin: 0 0 .55em; }
.dshr-translation p:last-child { margin-bottom: 0; }
.dshr-translation__loading { display: inline-flex; align-items: center; gap: 7px; color: var(--dshr-fg-3); font-size: 11.5px; }
.dshr-spinner {
  width: 11px; height: 11px; border-radius: 50%; border: 1.5px solid var(--dshr-border-strong);
  border-top-color: var(--dshr-brand); animation: dshr-spin .7s linear infinite; display: inline-block;
}
@keyframes dshr-spin { to { transform: rotate(360deg); } }
.dshr-translation__retry { border: 0; background: transparent; color: var(--dshr-error); text-decoration: underline; padding: 0; font-size: 11.5px; }

.dshr-chapter__nav { display: flex; justify-content: space-between; gap: 14px; margin-top: 42px; padding-top: 20px; border-top: 1px solid var(--dshr-border); }
.dshr-chapter__nav button { max-width: 50%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

/* ---------- floating selection toolbar ---------- */
.dshr-selection {
  position: fixed; z-index: 70; display: flex; align-items: center; gap: 1px; padding: 4px;
  border-radius: 10px; background: var(--dshr-layer-2); border: 1px solid var(--dshr-border-strong);
  box-shadow: 0 12px 34px rgba(15, 23, 42, .18); transform: translateX(-50%);
  animation: dshr-pop .12s ease-out;
}
@keyframes dshr-pop { from { opacity: 0; transform: translate(-50%, 4px) scale(.97); } }
.dshr-selection__btn {
  height: 28px; padding: 0 8px; border: 0; border-radius: 6px; background: transparent;
  color: var(--dshr-fg-2); font-size: 12px; display: inline-flex; align-items: center; gap: 4px; white-space: nowrap;
}
.dshr-selection__btn:hover { background: var(--dshr-hover); color: var(--dshr-fg); }
.dshr-selection__btn--accent { color: var(--dshr-brand); font-weight: 600; }
.dshr-selection__btn--mark { color: #a06a00; }
[data-ds-dark-theme] .dshr-selection__btn--mark { color: #f5c46b; }
.dshr-selection__sep { width: 1px; height: 16px; background: var(--dshr-border); margin: 0 2px; }
.dshr-selection__pop {
  position: fixed; z-index: 71; max-width: min(420px, calc(100vw - 32px)); padding: 12px 14px;
  border-radius: 11px; background: var(--dshr-layer-2); border: 1px solid var(--dshr-border-strong);
  box-shadow: 0 16px 40px rgba(15, 23, 42, .2); transform: translateX(-50%);
  font-size: 13px; line-height: 1.65; color: var(--dshr-fg); max-height: 40vh; overflow: auto;
}
.dshr-selection__pop-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 7px; color: var(--dshr-fg-3); font-size: 10.5px; letter-spacing: .08em; text-transform: uppercase; }
.dshr-selection__pop-head button { border: 0; background: transparent; color: var(--dshr-fg-3); padding: 0; }

/* ---------- AI panel ---------- */
.dshr-ai {
  width: min(390px, 38vw); flex: 0 0 auto; border-left: 1px solid var(--dshr-border);
  background: var(--dshr-layer-2); display: flex; flex-direction: column; min-height: 0;
  box-shadow: -10px 0 30px rgba(15, 23, 42, .04); animation: dshr-slide .2s ease-out;
}
@keyframes dshr-slide { from { opacity: 0; transform: translateX(15px); } }
.dshr-ai__head { display: flex; align-items: center; gap: 8px; padding: 13px 14px; border-bottom: 1px solid var(--dshr-border); }
.dshr-ai__head strong { font-size: 13px; flex: 1; }
.dshr-ai__head span { color: var(--dshr-fg-3); font-size: 10.5px; }
.dshr-ai__body { flex: 1; min-height: 0; overflow-y: auto; padding: 16px 15px 8px; }
.dshr-ai__welcome { color: var(--dshr-fg-2); font-size: 13px; line-height: 1.8; padding: 10px 4px; }
.dshr-ai__welcome strong { color: var(--dshr-fg); }
.dshr-ai__suggestions { display: flex; flex-direction: column; gap: 7px; margin-top: 15px; }
.dshr-ai__suggestions button {
  text-align: left; border: 1px solid var(--dshr-border); background: var(--dshr-layer); border-radius: 9px;
  padding: 9px 11px; color: var(--dshr-fg-2); font-size: 12px; line-height: 1.5;
}
.dshr-ai__suggestions button:hover { border-color: var(--dshr-border-strong); color: var(--dshr-fg); background: var(--dshr-hover); }
.dshr-ai__msg { margin: 0 0 16px; font-size: 13px; line-height: 1.75; color: var(--dshr-fg); overflow-wrap: anywhere; }
.dshr-ai__msg--user { background: var(--dshr-brand-soft); border: 1px solid color-mix(in srgb, var(--dshr-brand) 14%, transparent); padding: 9px 11px; border-radius: 10px; color: var(--dshr-fg); }
.dshr-ai__msg--user .dshr-ai__role { color: var(--dshr-brand); }
.dshr-ai__role { display: block; font-size: 10px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; color: var(--dshr-fg-3); margin-bottom: 4px; }
.dshr-ai__msg p { margin: 0 0 .7em; } .dshr-ai__msg p:last-child { margin-bottom: 0; }
.dshr-ai__msg ul { margin: .4em 0 .7em; padding-left: 1.25em; } .dshr-ai__msg li { margin: 0 0 .35em; }
.dshr-ai__msg h1, .dshr-ai__msg h2, .dshr-ai__msg h3, .dshr-ai__msg h4 { margin: .9em 0 .4em; font-size: 1.04em; line-height: 1.45; }
.dshr-ai__msg blockquote {
  margin: .5em 0 .8em; padding: 2px 0 2px 11px; border-left: 2px solid var(--dshr-brand);
  color: var(--dshr-fg-2); font-style: italic;
}
.dshr-ai__msg blockquote p { margin-bottom: .35em; }
.dshr-ai__msg pre {
  margin: .5em 0 .8em; padding: 9px 10px; border-radius: 8px; overflow-x: auto;
  background: var(--dshr-layer); border: 1px solid var(--dshr-border);
  font: 12px/1.6 "Cascadia Code", Consolas, monospace;
}
.dshr-ai__msg hr { border: 0; border-top: 1px solid var(--dshr-border); margin: 1em 0; }
.dshr-ai__msg a { color: var(--dshr-link); }
.dshr-ai__msg code { font: .9em "Cascadia Code", Consolas, monospace; background: var(--dshr-layer-3); padding: 1px 4px; border-radius: 4px; }
.dshr-ai__citation { margin-top: 10px; font-size: 11px; color: var(--dshr-fg-3); display: flex; gap: 6px; flex-wrap: wrap; }
.dshr-ai__foot { padding: 10px 12px 12px; border-top: 1px solid var(--dshr-border); }
.dshr-ai__input {
  width: 100%; min-height: 58px; max-height: 150px; resize: vertical; padding: 10px 12px;
  border: 1px solid var(--dshr-border); border-radius: 10px; background: var(--dshr-layer);
  outline: none; font-size: 13px; line-height: 1.55;
}
.dshr-ai__input:focus { border-color: color-mix(in srgb, var(--dshr-brand) 55%, var(--dshr-border)); box-shadow: 0 0 0 3px var(--dshr-brand-soft); }
.dshr-ai__actions { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-top: 8px; }
.dshr-ai__hint { font-size: 10.5px; color: var(--dshr-fg-3); }
.dshr-ai__error { margin: 8px 0; padding: 8px 10px; border-radius: 8px; background: color-mix(in srgb, var(--dshr-error) 7%, transparent); color: var(--dshr-error); font-size: 12px; line-height: 1.55; }

/* ---------- dialogs / toast ---------- */
.dshr-modal-mask {
  position: fixed; inset: 0; z-index: 90; background: var(--dsw-alias-bg-mask-1, rgba(15, 23, 42, .32));
  display: grid; place-items: center; padding: 20px; animation: dshr-fade .15s ease-out;
}
@keyframes dshr-fade { from { opacity: 0; } }
.dshr-modal {
  width: min(430px, 100%); border-radius: 16px; background: var(--dshr-layer-2); border: 1px solid var(--dshr-border-strong);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .25); padding: 20px;
}
.dshr-modal h3 { margin: 0 0 8px; font-size: 16px; }
.dshr-modal p { margin: 0 0 18px; color: var(--dshr-fg-2); font-size: 13px; line-height: 1.65; }
.dshr-modal__actions { display: flex; justify-content: flex-end; gap: 8px; }
.dshr-collection-dialog { width: min(480px, calc(100% - 24px)); max-height: calc(100dvh - 32px); overflow: auto; color: var(--dshr-fg); }
.dshr-collection-dialog::backdrop { background: var(--dsw-alias-bg-mask-1, rgba(15, 23, 42, .45)); }
.dshr-collection-dialog__field { display: grid; gap: 6px; margin: 12px 0; font-size: 13px; }
.dshr-collection-dialog__field :is(input,select) { width: 100%; min-width: 0; padding: 8px 10px; border-radius: 7px; border: 1px solid var(--dshr-border-strong); background: var(--dshr-layer); }
.dshr-collection-dialog__listbar { display: flex; justify-content: space-between; margin: 15px 0 7px; font-size: 12px; }
.dshr-collection-dialog__listbar span { color: var(--dshr-fg-2); }
.dshr-collection-dialog__search { display: flex; width: 100%; max-width: none; margin: 0 0 6px; }
.dshr-collection-dialog__choices { max-height: min(240px, 36vh); overflow: auto; border: 1px solid var(--dshr-border); border-radius: 8px; }
.dshr-collection-dialog__choices label { display: flex; align-items: flex-start; gap: 9px; padding: 8px; font-size: 13px; cursor: pointer; }
.dshr-collection-dialog__choices label + label { border-top: 1px solid var(--dshr-border); }
.dshr-collection-dialog__choices label:hover { background: var(--dshr-hover); }
.dshr-collection-dialog__choices input { flex: 0 0 auto; accent-color: var(--dshr-brand); }
.dshr-collection-dialog__choices span { min-width: 0; overflow-wrap: anywhere; }
.dshr-collection-dialog__choices small { display: block; font-size: 11px; color: var(--dshr-fg-2); }
.dshr-collection-dialog p.dshr-collection-dialog__error { color: var(--dshr-error); margin: 9px 0; }
.dshr-collection-dialog__actions { flex-wrap: wrap; margin-top: 13px; }
.dshr-online-modal { width: min(620px, calc(100vw - 32px)); }
.dshr-online-modal__head { display: flex; align-items: flex-start; gap: 12px; }
.dshr-online-modal__head > div { flex: 1; }
.dshr-online-modal__head h3 { display: flex; align-items: center; gap: 7px; }
.dshr-online-modal__head p { margin-bottom: 0; }
.dshr-online-modal__notice {
  display: flex; flex-direction: column; gap: 3px; margin: 16px 0;
  padding: 10px 12px; border: 1px solid rgba(190, 120, 30, .28); border-radius: 9px;
  background: rgba(190, 120, 30, .07); color: var(--dshr-fg-2); font-size: 12px; line-height: 1.55;
}
.dshr-online-modal__notice strong { color: #b47a24; font-size: 12px; }
.dshr-online-modal__form label { display: block; margin-bottom: 6px; font-size: 12px; font-weight: 600; color: var(--dshr-fg-2); }
.dshr-online-modal__input {
  display: flex; align-items: center; gap: 8px; padding: 0 11px;
  border: 1px solid var(--dshr-border); border-radius: 9px; background: var(--dshr-layer-2); color: var(--dshr-fg-3);
}
.dshr-online-modal__input:focus-within { border-color: var(--dshr-brand); box-shadow: 0 0 0 3px var(--dshr-brand-soft); }
.dshr-online-modal__input input {
  flex: 1; min-width: 0; height: 40px; border: 0; outline: 0; background: transparent;
  color: var(--dshr-fg); font: 12.5px/1.4 var(--dshr-sans);
}
.dshr-online-modal__error { margin: 7px 0 0 !important; color: var(--dshr-error) !important; font-size: 12px !important; }
.dshr-online-modal__hint { margin: 9px 0 16px !important; color: var(--dshr-fg-3) !important; font-size: 11.5px !important; line-height: 1.6 !important; }
.dshr-online-modal__actions { display: flex; justify-content: flex-end; gap: 8px; }
.dshr-online-modal__sources { margin-top: 18px; padding-top: 13px; border-top: 1px solid var(--dshr-border); }
.dshr-online-modal__sources > span { display: block; margin-bottom: 8px; font-size: 11.5px; color: var(--dshr-fg-3); }
.dshr-online-modal__source-list { display: flex; flex-wrap: wrap; gap: 7px; }
.dshr-online-modal__source-list a {
  display: inline-flex; padding: 3px 8px; border: 1px solid var(--dshr-border); border-radius: 6px;
  color: var(--dshr-fg-2); font-size: 11.5px; text-decoration: none; background: var(--dshr-layer-2);
}
.dshr-online-modal__source-list a:hover { color: var(--dshr-brand); border-color: var(--dshr-brand); }
.dshr-settings-row {
  display: flex; align-items: center; justify-content: space-between; gap: 18px;
  padding: 13px 0; border-top: 1px solid var(--dshr-border);
}
.dshr-settings-row--danger { border-color: color-mix(in srgb, var(--dshr-error) 16%, var(--dshr-border)); }
.dshr-settings-row__title { font-size: 13px; font-weight: 600; margin-bottom: 3px; }
.dshr-settings-row__hint { color: var(--dshr-fg-3); font-size: 11.5px; line-height: 1.55; max-width: 320px; }
.dshr-settings-row input[type="range"] { width: 116px; accent-color: var(--dshr-brand); }
.dshr-toast {
  position: fixed; z-index: 100; left: 50%; bottom: 28px; transform: translateX(-50%);
  max-width: min(560px, calc(100vw - 40px)); padding: 10px 14px; border-radius: 10px;
  background: var(--dsw-alias-toast-bg, #1f2328); color: var(--dsw-alias-toast-label, #fff);
  box-shadow: 0 12px 32px rgba(0,0,0,.22); font-size: 12.5px; line-height: 1.55;
  animation: dshr-toast-in .18s ease-out;
}
@keyframes dshr-toast-in { from { opacity: 0; transform: translate(-50%, 6px); } }
.dshr-loading {
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px;
  color: var(--dshr-fg-2); font-size: 13px; min-height: 0;
}
.dshr-loading__ring {
  width: 34px; height: 34px; border-radius: 50%; border: 2px solid var(--dshr-border);
  border-top-color: var(--dshr-brand); animation: dshr-spin .8s linear infinite;
}
.dshr-error-panel { margin: 40px auto; max-width: 560px; padding: 20px; border: 1px solid var(--dshr-border); background: var(--dshr-layer-2); border-radius: 12px; }
.dshr-error-panel h3 { margin: 0 0 8px; color: var(--dshr-error); font-size: 15px; }
.dshr-error-panel p { color: var(--dshr-fg-2); line-height: 1.65; font-size: 13px; }
.dshr-kbd { font: 10px/1.4 var(--dshr-sans); padding: 1px 5px; border: 1px solid var(--dshr-border); border-bottom-width: 2px; border-radius: 4px; color: var(--dshr-fg-3); }
.dshr-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }

@container (max-width: 780px) {
  .dshr-library__inner { padding: 24px 20px 70px; }
  .dshr-hero { align-items: flex-start; flex-direction: column; gap: 14px; }
  .dshr-hero h1 { font-size: 28px; }
  .dshr-drop { padding: 20px; }
  .dshr-toc { width: min(var(--dshr-toc-width, 246px), 240px); }
  .dshr-ai { width: min(340px, 44vw); }
  .dshr-content__inner { width: calc(100% - 48px); }
  .dshr-library__bar { flex-wrap: wrap; gap: 9px; }
  .dshr-library__search { order: 3; flex-basis: 100%; max-width: none; margin-left: 0; }
  .dshr-topbar .dshr-switch > span:last-child { display: none; }
  .dshr-topbar__tools { gap: 2px; }
}
@container (max-width: 600px) {
  .dshr-toc { position: absolute; z-index: 20; inset: 0 auto 0 0; width: min(var(--dshr-toc-width, 250px), calc(100vw - 72px)); box-shadow: 16px 0 40px rgba(0,0,0,.16); }
  .dshr-toc__resizer { display: none; }
  .dshr-ai { position: absolute; z-index: 20; inset: 0 0 0 auto; width: min(360px, 88vw); }
  .dshr-topbar { padding: 8px 10px; }
  .dshr-hero__actions { width: 100%; flex-wrap: wrap; }
  .dshr-drop__formats { display: none; }
  .dshr-books { grid-template-columns: 1fr; }
}
@media (prefers-reduced-motion: reduce) {
  .dshr-root *, .dshr-root *::before, .dshr-root *::after { animation-duration: .001ms !important; transition-duration: .001ms !important; scroll-behavior: auto !important; }
}
`;var Kh=String.raw`
/* ------------------------------------------------------------- variables */
.dshr-anno-layer,
.dshr-anno-pdf-layer,
.dshr-anno-panel,
.dshr-anno-composer,
.dshr-anno-composer-mask {
  --dshr-anno-ink: var(--dshr-fg, #1f2328);
  --dshr-anno-muted: var(--dshr-fg-2, #5c6370);
  --dshr-anno-faint: var(--dshr-fg-3, #8a919c);
  --dshr-anno-line: var(--dshr-border, rgba(31, 35, 40, .10));
  --dshr-anno-line-strong: var(--dshr-border-strong, rgba(31, 35, 40, .16));
  --dshr-anno-paper: var(--dshr-layer-2, #ffffff);
  --dshr-anno-paper-2: var(--dshr-layer, #f7f7f8);
  --dshr-anno-hover: var(--dshr-hover, rgba(31, 35, 40, .055));
  --dshr-anno-brand: var(--dshr-brand, #4d6bfe);
  --dshr-anno-danger: var(--dshr-error, #d92d20);
  --dshr-anno-radius: 13px;
  font-family: var(--dshr-sans, "PingFang SC", "Microsoft YaHei", system-ui, sans-serif);
}

/* --------------------------------------------------------- overlay layer */
.dshr-anno-layer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  overflow: visible;
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
}

.dshr-anno-band {
  position: absolute;
  pointer-events: none;
  border-radius: 3px 7px 4px 8px / 5px 3px 7px 4px;
  background: var(--dshr-anno-color, #f5d76e);
  opacity: .34;
  mix-blend-mode: multiply;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, .22),
    0 0 0 .5px color-mix(in srgb, var(--dshr-anno-color, #f5d76e) 18%, transparent);
  transform: translateZ(0);
}

.dshr-anno-band::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    90deg,
    transparent 4%,
    color-mix(in srgb, var(--dshr-anno-color, #f5d76e) 72%, #ffffff) 38%,
    transparent 62%,
    color-mix(in srgb, var(--dshr-anno-color, #f5d76e) 55%, #ffffff) 88%,
    transparent
  );
  opacity: .16;
}

.dshr-anno-band--note {
  opacity: .2;
  border-radius: 4px 9px 5px 10px / 6px 4px 8px 5px;
}

.dshr-anno-underline {
  position: absolute;
  display: block;
  overflow: visible;
  pointer-events: none;
  color: var(--dshr-anno-color, #c2543f);
}

.dshr-anno-underline path {
  fill: none;
  stroke: currentColor;
  stroke-width: 2.1;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: .78;
}

.dshr-anno-note-btn {
  position: absolute;
  z-index: 5;
  display: grid;
  place-items: center;
  width: 19px;
  height: 19px;
  padding: 0;
  border-radius: 5px 5px 5px 2px;
  border: 1px solid color-mix(in srgb, var(--dshr-anno-color, #f5d76e) 58%, var(--dshr-anno-line-strong, rgba(31, 35, 40, .16)));
  background: color-mix(in srgb, var(--dshr-anno-color, #f5d76e) 20%, var(--dshr-anno-paper, #ffffff));
  color: color-mix(in srgb, var(--dshr-anno-color, #f5d76e) 74%, #2b2a26);
  box-shadow: 0 3px 9px rgba(20, 20, 20, .16);
  pointer-events: auto;
  cursor: pointer;
  transform: translate(0, -1px);
  transition: transform .14s ease, box-shadow .14s ease, filter .14s ease;
}

.dshr-anno-note-btn:hover {
  transform: translate(0, -2px) scale(1.07);
  box-shadow: 0 5px 13px rgba(20, 20, 20, .22);
  filter: saturate(1.08);
}

.dshr-anno-note-btn:active { transform: translate(0, 0) scale(.97); }

.dshr-anno-note-btn:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--dshr-anno-color, #f5d76e) 62%, var(--dshr-anno-brand, #4d6bfe));
  outline-offset: 2px;
}

.dshr-anno-note-btn svg { display: block; pointer-events: none; }

[data-ds-dark-theme] .dshr-anno-band {
  mix-blend-mode: screen;
  opacity: .26;
}

[data-ds-dark-theme] .dshr-anno-band--note { opacity: .16; }

[data-ds-dark-theme] .dshr-anno-note-btn {
  background: color-mix(in srgb, var(--dshr-anno-color, #f5d76e) 30%, var(--dshr-anno-paper, #24262b));
  color: color-mix(in srgb, var(--dshr-anno-color, #f5d76e) 82%, #ffffff);
  box-shadow: 0 3px 10px rgba(0, 0, 0, .45);
}

/* ------------------------------------------------------------- PDF layer */
.dshr-anno-pdf-layer {
  position: absolute;
  inset: 0;
  z-index: 3;
  overflow: hidden;
  pointer-events: none;
}

.dshr-anno-pdf-band {
  position: absolute;
  pointer-events: none;
  border-radius: 2px 5px 3px 6px / 4px 2px 5px 3px;
  background: var(--dshr-anno-color, #f5d76e);
  opacity: .3;
  mix-blend-mode: multiply;
}

.dshr-anno-pdf-underline {
  position: absolute;
  pointer-events: none;
  display: block;
  height: 5px;
  overflow: visible;
  color: var(--dshr-anno-color, #c2543f);
}

.dshr-anno-pdf-underline path {
  fill: none;
  stroke: currentColor;
  stroke-width: 2.2;
  stroke-linecap: round;
  opacity: .8;
}

[data-ds-dark-theme] .dshr-anno-pdf-band {
  mix-blend-mode: screen;
  opacity: .24;
}

/* ------------------------------------------------------------- composer */
.dshr-anno-composer-mask {
  position: fixed;
  inset: 0;
  z-index: 96;
  display: grid;
  place-items: center;
  padding: 18px;
  background: var(--dsw-alias-bg-mask-1, rgba(15, 23, 42, .34));
  animation: dshr-anno-fade .16s ease-out;
}

@keyframes dshr-anno-fade { from { opacity: 0; } }
@keyframes dshr-anno-pop { from { opacity: 0; transform: translateY(5px) scale(.985); } }
@keyframes dshr-anno-slide { from { opacity: 0; transform: translateX(14px); } }

.dshr-anno-composer {
  width: min(548px, 100%);
  max-height: min(88vh, 760px);
  display: flex;
  flex-direction: column;
  min-height: 0;
  border-radius: 17px;
  border: 1px solid var(--dshr-anno-line-strong, rgba(31, 35, 40, .16));
  background: var(--dshr-anno-paper, #ffffff);
  color: var(--dshr-anno-ink, #1f2328);
  box-shadow: 0 26px 78px rgba(15, 23, 42, .28);
  animation: dshr-anno-pop .17s ease-out;
}

.dshr-anno-composer__head {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 17px 18px 13px;
  border-bottom: 1px solid var(--dshr-anno-line, rgba(31, 35, 40, .10));
}

.dshr-anno-composer__titles { flex: 1; min-width: 0; }

.dshr-anno-composer__title {
  margin: 0;
  font-size: 15px;
  font-weight: 650;
  line-height: 1.35;
  letter-spacing: .01em;
}

.dshr-anno-composer__sub {
  display: block;
  margin-top: 3px;
  color: var(--dshr-anno-faint, #8a919c);
  font-size: 11.5px;
  line-height: 1.5;
}

.dshr-anno-composer__close {
  flex: 0 0 auto;
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  color: var(--dshr-anno-faint, #8a919c);
  font-size: 17px;
  line-height: 1;
}

.dshr-anno-composer__close:hover {
  background: var(--dshr-anno-hover, rgba(31, 35, 40, .055));
  color: var(--dshr-anno-ink, #1f2328);
}

.dshr-anno-composer__body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 15px 18px 18px;
  scrollbar-gutter: stable;
}

.dshr-anno-composer__tabs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  padding: 4px;
  border-radius: 11px;
  background: var(--dshr-anno-paper-2, #f7f7f8);
  border: 1px solid var(--dshr-anno-line, rgba(31, 35, 40, .10));
}

.dshr-anno-composer__tab {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 34px;
  padding: 0 8px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  color: var(--dshr-anno-muted, #5c6370);
  font-size: 12.5px;
  font-weight: 550;
  white-space: nowrap;
  transition: background .15s ease, color .15s ease, border-color .15s ease;
}

.dshr-anno-composer__tab:hover { color: var(--dshr-anno-ink, #1f2328); background: var(--dshr-anno-hover, rgba(31, 35, 40, .055)); }

.dshr-anno-composer__tab.is-active {
  background: var(--dshr-anno-paper, #ffffff);
  border-color: var(--dshr-anno-line-strong, rgba(31, 35, 40, .16));
  color: var(--dshr-anno-ink, #1f2328);
  box-shadow: 0 2px 7px rgba(15, 23, 42, .08);
}

.dshr-anno-composer__tab svg { flex: 0 0 auto; }

.dshr-anno-composer__field { margin-top: 16px; }

.dshr-anno-composer__label {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 8px;
  color: var(--dshr-anno-muted, #5c6370);
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: .04em;
}

.dshr-anno-composer__label em {
  font-style: normal;
  font-weight: 400;
  color: var(--dshr-anno-faint, #8a919c);
  letter-spacing: 0;
}

.dshr-anno-composer__swatches { display: flex; flex-wrap: wrap; gap: 8px; }

.dshr-anno-swatch {
  position: relative;
  width: 34px;
  height: 34px;
  padding: 0;
  border: 1px solid var(--dshr-anno-line-strong, rgba(31, 35, 40, .16));
  border-radius: 10px;
  background: var(--swatch, #f5d76e);
  color: color-mix(in srgb, var(--swatch, #f5d76e) 34%, #2b2a26);
  font-size: 11px;
  font-weight: 700;
  display: grid;
  place-items: center;
  transition: transform .14s ease, box-shadow .14s ease, border-color .14s ease;
}

.dshr-anno-swatch:hover { transform: translateY(-1px); box-shadow: 0 5px 12px rgba(15, 23, 42, .14); }

.dshr-anno-swatch.is-active {
  border-color: color-mix(in srgb, var(--swatch, #f5d76e) 48%, var(--dshr-anno-ink, #1f2328));
  box-shadow:
    0 0 0 2px var(--dshr-anno-paper, #ffffff),
    0 0 0 4px color-mix(in srgb, var(--swatch, #f5d76e) 66%, transparent);
  transform: translateY(-1px);
}

.dshr-anno-swatch.is-active::after {
  content: "";
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--dshr-anno-ink, #1f2328) 62%, transparent);
}

.dshr-anno-composer__widths { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }

.dshr-anno-width {
  display: flex;
  align-items: center;
  gap: 9px;
  height: 38px;
  padding: 0 11px;
  border: 1px solid var(--dshr-anno-line, rgba(31, 35, 40, .10));
  border-radius: 9px;
  background: var(--dshr-anno-paper-2, #f7f7f8);
  color: var(--dshr-anno-muted, #5c6370);
  font-size: 12px;
  transition: border-color .14s ease, background .14s ease, color .14s ease;
}

.dshr-anno-width:hover { border-color: var(--dshr-anno-line-strong, rgba(31, 35, 40, .16)); color: var(--dshr-anno-ink, #1f2328); }

.dshr-anno-width.is-active {
  border-color: color-mix(in srgb, var(--dshr-anno-brand, #4d6bfe) 52%, var(--dshr-anno-line, rgba(31, 35, 40, .10)));
  background: color-mix(in srgb, var(--dshr-anno-brand, #4d6bfe) 8%, var(--dshr-anno-paper, #ffffff));
  color: var(--dshr-anno-ink, #1f2328);
}

.dshr-anno-width__bar {
  flex: 0 0 auto;
  width: 26px;
  border-radius: 999px;
  background: var(--dshr-anno-color, #f5d76e);
  opacity: .72;
  box-shadow: 0 1px 2px rgba(15, 23, 42, .12);
}

.dshr-anno-composer__textarea {
  width: 100%;
  min-height: 86px;
  max-height: 220px;
  resize: vertical;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid var(--dshr-anno-line, rgba(31, 35, 40, .10));
  background: var(--dshr-anno-paper-2, #f7f7f8);
  color: var(--dshr-anno-ink, #1f2328);
  font-size: 13px;
  line-height: 1.7;
  outline: none;
  transition: border-color .15s ease, box-shadow .15s ease;
}

.dshr-anno-composer__textarea:focus {
  border-color: color-mix(in srgb, var(--dshr-anno-brand, #4d6bfe) 55%, var(--dshr-anno-line, rgba(31, 35, 40, .10)));
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--dshr-anno-brand, #4d6bfe) 13%, transparent);
}

.dshr-anno-composer__counter {
  margin-top: 5px;
  text-align: right;
  color: var(--dshr-anno-faint, #8a919c);
  font-size: 10.5px;
  font-variant-numeric: tabular-nums;
}

.dshr-anno-composer__quote {
  margin-top: 15px;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px dashed color-mix(in srgb, var(--dshr-anno-color, #f5d76e) 52%, var(--dshr-anno-line, rgba(31, 35, 40, .10)));
  background: color-mix(in srgb, var(--dshr-anno-color, #f5d76e) 7%, var(--dshr-anno-paper-2, #f7f7f8));
}

.dshr-anno-composer__quote-label {
  display: block;
  margin-bottom: 4px;
  color: var(--dshr-anno-faint, #8a919c);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .11em;
  text-transform: uppercase;
}

.dshr-anno-composer__quote-text {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
  color: var(--dshr-anno-muted, #5c6370);
  font-size: 12.5px;
  line-height: 1.7;
  overflow-wrap: anywhere;
}

.dshr-anno-composer__preview {
  margin-top: 16px;
  padding: 13px 14px;
  border-radius: 11px;
  border: 1px solid var(--dshr-anno-line, rgba(31, 35, 40, .10));
  background: var(--dshr-anno-paper-2, #f7f7f8);
}

.dshr-anno-composer__preview-label {
  display: block;
  margin-bottom: 7px;
  color: var(--dshr-anno-faint, #8a919c);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .11em;
  text-transform: uppercase;
}

.dshr-anno-composer__preview-text {
  display: block;
  color: var(--dshr-anno-ink, #1f2328);
  font-size: 14px;
  line-height: 1.9;
  overflow-wrap: anywhere;
}

.dshr-anno-composer__preview.is-highlight .dshr-anno-composer__preview-text {
  display: inline;
  background: color-mix(in srgb, var(--dshr-anno-color, #f5d76e) 44%, transparent);
  border-radius: 3px 7px 4px 8px / 5px 3px 7px 4px;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  padding: 1px 2px;
}

.dshr-anno-composer__preview.is-underline .dshr-anno-composer__preview-text {
  display: inline;
  text-decoration-line: underline;
  text-decoration-color: var(--dshr-anno-color, #c2543f);
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  text-decoration-skip-ink: none;
}

.dshr-anno-composer__preview.is-note .dshr-anno-composer__preview-text {
  display: inline;
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: var(--dshr-anno-color, #f5d76e);
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
}

.dshr-anno-composer__foot {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 13px 18px 15px;
  border-top: 1px solid var(--dshr-anno-line, rgba(31, 35, 40, .10));
}

.dshr-anno-composer__spacer { flex: 1; }

.dshr-anno-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 34px;
  padding: 0 14px;
  border-radius: 9px;
  border: 1px solid transparent;
  background: transparent;
  color: var(--dshr-anno-muted, #5c6370);
  font-size: 12.5px;
  font-weight: 550;
  white-space: nowrap;
  transition: background .15s ease, color .15s ease, border-color .15s ease, transform .12s ease;
}

.dshr-anno-btn:hover { background: var(--dshr-anno-hover, rgba(31, 35, 40, .055)); color: var(--dshr-anno-ink, #1f2328); }
.dshr-anno-btn:active { transform: translateY(1px); }
.dshr-anno-btn[disabled] { opacity: .42; cursor: not-allowed; transform: none; }

.dshr-anno-btn--primary {
  background: var(--dshr-anno-brand, #4d6bfe);
  color: var(--dshr-on-brand, #ffffff) !important;
  box-shadow: 0 5px 16px color-mix(in srgb, var(--dshr-anno-brand, #4d6bfe) 26%, transparent);
}

.dshr-anno-btn--primary:hover {
  background: color-mix(in srgb, var(--dshr-anno-brand, #4d6bfe) 86%, #000);
  color: var(--dshr-on-brand, #ffffff) !important;
}

.dshr-anno-btn--outline {
  border-color: var(--dshr-anno-line, rgba(31, 35, 40, .10));
  background: var(--dshr-anno-paper-2, #f7f7f8);
}

.dshr-anno-btn--danger { color: var(--dshr-anno-danger, #d92d20); }
.dshr-anno-btn--danger:hover {
  color: var(--dshr-anno-danger, #d92d20);
  background: color-mix(in srgb, var(--dshr-anno-danger, #d92d20) 9%, transparent);
}

/* ------------------------------------------------------- notes panel */
.dshr-anno-panel {
  width: min(368px, 37vw);
  flex: 0 0 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--dshr-anno-line, rgba(31, 35, 40, .10));
  background: var(--dshr-anno-paper, #ffffff);
  color: var(--dshr-anno-ink, #1f2328);
  box-shadow: -10px 0 30px rgba(15, 23, 42, .05);
  animation: dshr-anno-slide .2s ease-out;
}

.dshr-anno-panel__head {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 14px 10px 16px;
  border-bottom: 1px solid var(--dshr-anno-line, rgba(31, 35, 40, .10));
}

.dshr-anno-panel__titles { flex: 1; min-width: 0; }

.dshr-anno-panel__title {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  font-size: 13.5px;
  font-weight: 650;
  line-height: 1.4;
}

.dshr-anno-panel__count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 18px;
  padding: 0 6px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--dshr-anno-brand, #4d6bfe) 12%, transparent);
  color: var(--dshr-anno-brand, #4d6bfe);
  font-size: 10.5px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.dshr-anno-panel__sub {
  display: block;
  margin-top: 2px;
  color: var(--dshr-anno-faint, #8a919c);
  font-size: 11px;
  line-height: 1.5;
}

.dshr-anno-panel__close {
  flex: 0 0 auto;
  width: 27px;
  height: 27px;
  display: grid;
  place-items: center;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  color: var(--dshr-anno-faint, #8a919c);
  font-size: 16px;
  line-height: 1;
}

.dshr-anno-panel__close:hover {
  background: var(--dshr-anno-hover, rgba(31, 35, 40, .055));
  color: var(--dshr-anno-ink, #1f2328);
}

.dshr-anno-panel__filters {
  display: flex;
  gap: 5px;
  padding: 9px 12px;
  border-bottom: 1px solid var(--dshr-anno-line, rgba(31, 35, 40, .10));
  overflow-x: auto;
  scrollbar-width: none;
}

.dshr-anno-panel__filters::-webkit-scrollbar { display: none; }

.dshr-anno-panel__filter {
  flex: 0 0 auto;
  height: 25px;
  padding: 0 10px;
  border: 1px solid transparent;
  border-radius: 999px;
  background: transparent;
  color: var(--dshr-anno-muted, #5c6370);
  font-size: 11.5px;
  white-space: nowrap;
}

.dshr-anno-panel__filter:hover { background: var(--dshr-anno-hover, rgba(31, 35, 40, .055)); color: var(--dshr-anno-ink, #1f2328); }

.dshr-anno-panel__filter.is-active {
  background: color-mix(in srgb, var(--dshr-anno-brand, #4d6bfe) 11%, transparent);
  border-color: color-mix(in srgb, var(--dshr-anno-brand, #4d6bfe) 20%, transparent);
  color: var(--dshr-anno-brand, #4d6bfe);
  font-weight: 600;
}

.dshr-anno-panel__list {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 12px 12px 30px;
  scrollbar-gutter: stable;
}

.dshr-anno-panel__group + .dshr-anno-panel__group { margin-top: 16px; }

.dshr-anno-panel__group-head {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 4px 7px;
}

.dshr-anno-panel__group-title {
  color: var(--dshr-anno-faint, #8a919c);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dshr-anno-panel__group-rule {
  flex: 1;
  height: 1px;
  background: var(--dshr-anno-line, rgba(31, 35, 40, .10));
}

.dshr-anno-panel__group-count {
  color: var(--dshr-anno-faint, #8a919c);
  font-size: 10.5px;
  font-variant-numeric: tabular-nums;
}

.dshr-anno-item {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--dshr-anno-line, rgba(31, 35, 40, .10));
  border-radius: var(--dshr-anno-radius, 13px);
  background: var(--dshr-anno-paper, #ffffff);
  overflow: hidden;
  transition: border-color .15s ease, box-shadow .15s ease, transform .15s ease;
}

.dshr-anno-item + .dshr-anno-item { margin-top: 8px; }

.dshr-anno-item:hover {
  border-color: var(--dshr-anno-line-strong, rgba(31, 35, 40, .16));
  box-shadow: 0 7px 20px rgba(15, 23, 42, .07);
  transform: translateY(-1px);
}

.dshr-anno-item__main {
  position: relative;
  display: block;
  width: 100%;
  padding: 10px 12px 8px 15px;
  border: 0;
  background: transparent;
  text-align: left;
  color: inherit;
  cursor: pointer;
}

.dshr-anno-item__main::before {
  content: "";
  position: absolute;
  left: 0;
  top: 9px;
  bottom: 9px;
  width: 3px;
  border-radius: 0 3px 3px 0;
  background: var(--dshr-anno-color, #f5d76e);
  opacity: .9;
}

.dshr-anno-item__meta {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 5px;
  color: var(--dshr-anno-faint, #8a919c);
  font-size: 10.5px;
  line-height: 1.3;
}

.dshr-anno-item__style {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--dshr-anno-muted, #5c6370);
  font-weight: 600;
}

.dshr-anno-item__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--dshr-anno-color, #f5d76e);
  box-shadow: 0 0 0 1px rgba(15, 23, 42, .08);
}

.dshr-anno-item__location {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dshr-anno-item__sep { color: var(--dshr-anno-line-strong, rgba(31, 35, 40, .16)); }

.dshr-anno-item__quote {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
  color: var(--dshr-anno-ink, #1f2328);
  font-size: 12.5px;
  line-height: 1.6;
  overflow-wrap: anywhere;
}

.dshr-anno-item__quote::before { content: "“"; color: var(--dshr-anno-color, #f5d76e); }
.dshr-anno-item__quote::after { content: "”"; color: var(--dshr-anno-color, #f5d76e); }

.dshr-anno-item__note {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 5px 0 0;
  padding: 5px 8px;
  border-radius: 7px;
  background: var(--dshr-anno-paper-2, #f7f7f8);
  color: var(--dshr-anno-muted, #5c6370);
  font-size: 11.5px;
  line-height: 1.6;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

.dshr-anno-item__note::before { content: "✎ "; color: var(--dshr-anno-faint, #8a919c); }

.dshr-anno-item__actions {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 9px 8px 12px;
}

.dshr-anno-item__action {
  height: 24px;
  padding: 0 9px;
  border: 1px solid transparent;
  border-radius: 7px;
  background: transparent;
  color: var(--dshr-anno-faint, #8a919c);
  font-size: 11px;
  white-space: nowrap;
}

.dshr-anno-item__action:hover {
  background: var(--dshr-anno-hover, rgba(31, 35, 40, .055));
  color: var(--dshr-anno-ink, #1f2328);
}

.dshr-anno-item__action--jump { color: var(--dshr-anno-brand, #4d6bfe); }
.dshr-anno-item__action--danger:hover { color: var(--dshr-anno-danger, #d92d20); background: color-mix(in srgb, var(--dshr-anno-danger, #d92d20) 8%, transparent); }

.dshr-anno-item__spacer { flex: 1; }

.dshr-anno-panel__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 44px 26px 30px;
  color: var(--dshr-anno-muted, #5c6370);
}

.dshr-anno-panel__empty-mark {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  margin-bottom: 14px;
  border-radius: 18px;
  color: color-mix(in srgb, var(--dshr-anno-brand, #4d6bfe) 74%, #ffffff);
  background:
    linear-gradient(145deg, color-mix(in srgb, var(--dshr-anno-brand, #4d6bfe) 15%, transparent), transparent),
    var(--dshr-anno-paper-2, #f7f7f8);
  border: 1px solid color-mix(in srgb, var(--dshr-anno-brand, #4d6bfe) 18%, transparent);
}

.dshr-anno-panel__empty-title {
  margin: 0 0 6px;
  color: var(--dshr-anno-ink, #1f2328);
  font-size: 13.5px;
  font-weight: 650;
}

.dshr-anno-panel__empty-text {
  margin: 0;
  max-width: 250px;
  font-size: 11.5px;
  line-height: 1.75;
}

.dshr-anno-panel__steps {
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 100%;
  max-width: 262px;
  margin: 18px 0 0;
  padding: 0;
  list-style: none;
  text-align: left;
}

.dshr-anno-panel__step {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 8px 10px;
  border-radius: 9px;
  border: 1px solid var(--dshr-anno-line, rgba(31, 35, 40, .10));
  background: var(--dshr-anno-paper-2, #f7f7f8);
  font-size: 11.5px;
  line-height: 1.5;
}

.dshr-anno-panel__step-index {
  flex: 0 0 auto;
  width: 18px;
  height: 18px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: color-mix(in srgb, var(--dshr-anno-brand, #4d6bfe) 12%, transparent);
  color: var(--dshr-anno-brand, #4d6bfe);
  font-size: 10px;
  font-weight: 700;
}

.dshr-anno-panel__hint {
  margin-top: 16px;
  color: var(--dshr-anno-faint, #8a919c);
  font-size: 10.5px;
  line-height: 1.6;
}

.dshr-anno-panel__empty-mark svg { display: block; }

/* ------------------------------------------------------------ responsive */
@container (max-width: 820px) {
  .dshr-anno-panel { width: 306px; }
}

@media (max-width: 620px) {
  .dshr-anno-composer-mask { padding: 10px; }
  .dshr-anno-composer { max-height: 92vh; border-radius: 14px; }
  .dshr-anno-panel { width: min(340px, 92vw); }
}

@media (prefers-reduced-motion: reduce) {
  .dshr-anno-layer *,
  .dshr-anno-panel *,
  .dshr-anno-composer *,
  .dshr-anno-composer-mask {
    animation-duration: .001ms !important;
    transition-duration: .001ms !important;
  }
}
`;var Yn=require("react/jsx-runtime"),Vm="dsh-reader",Km=["slots","layout"],rl="reader";function Ym({size:t=18}){return(0,Yn.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,Yn.jsx)("path",{d:"M4 5.4A2.4 2.4 0 0 1 6.4 3H20v16.1H6.4A2.4 2.4 0 0 0 4 21.5V5.4Z",stroke:"currentColor",strokeWidth:"1.65",strokeLinejoin:"round"}),(0,Yn.jsx)("path",{d:"M4 18.4a2.4 2.4 0 0 1 2.4-2.3H20",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round"}),(0,Yn.jsx)("path",{d:"M8.2 7h7.6M8.2 10.2h4.6",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round"}),(0,Yn.jsx)("circle",{cx:"17.2",cy:"18.6",r:"2.1",fill:"currentColor",opacity:".9"})]})}function Zm(t){t.effect(()=>{let e=document.createElement("style");return e.dataset.dshReader="styles",e.textContent=`${Vh}
${zc}
${ss}
${Kh}`,document.head.appendChild(e),()=>e.remove()},"dsh-reader: styles"),t.slots.inject("main",function*(){yield t.slots.register({name:"main",key:rl},Xh)}),t.slots.inject("sidebar.panellist",()=>t.slots.register({name:"sidebar.panellist",id:rl,order:10,label:()=>"\u9605\u8BFB"},Ym))}

return module.exports;
}});

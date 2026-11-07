window.__ModuleLoader__.load({ id: "dsh-reader", factory: (require) => {
var module = { exports: {} }; var exports = module.exports;
var Wh=Object.create;var Jo=Object.defineProperty;var jh=Object.getOwnPropertyDescriptor;var Gh=Object.getOwnPropertyNames;var qh=Object.getPrototypeOf,Xh=Object.prototype.hasOwnProperty;var nr=(t,e,r)=>()=>{if(r)throw r[0];try{return t&&(e=t(t=0)),e}catch(n){throw r=[n],n}};var ci=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}},Xs=(t,e)=>{for(var r in e)Jo(t,r,{get:e[r],enumerable:!0})},Vs=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Gh(e))!Xh.call(t,o)&&o!==r&&Jo(t,o,{get:()=>e[o],enumerable:!(n=jh(e,o))||n.enumerable});return t};var Ct=(t,e,r)=>(r=t!=null?Wh(qh(t)):{},Vs(e||!t||!t.__esModule?Jo(r,"default",{value:t,enumerable:!0}):r,t)),Vh=t=>Vs(Jo({},"__esModule",{value:!0}),t);function Jf(t,e){return od(t,{i:2},e&&e.out,e&&e.dictionary)}function ad(t,e){return od(t.subarray(Qf(t,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}function rp(t,e){if(e){for(var r="",n=0;n<t.length;n+=16384)r+=String.fromCharCode.apply(null,t.subarray(n,n+16384));return r}else{if(Ji)return Ji.decode(t);var o=tp(t),i=o.s,r=o.r;return r.length&&Gt(8),i}}function id(t,e){for(var r={},n=t.length-22;pr(t,n)!=101010256;--n)(!n||t.length-n>65558)&&Gt(13);var o=Gr(t,n+8);if(!o)return{};var i=pr(t,n+16),a=pr(t,n-20)==117853008;if(a){var s=pr(t,n-12);a=pr(t,s)==101075792,a&&(o=pr(t,s+32),i=pr(t,s+48))}for(var l=e&&e.filter,d=0;d<o;++d){var h=op(t,i,a),g=h[0],f=h[1],p=h[2],S=h[3],w=h[4],x=h[5],T=np(t,x);i=w,(!l||l({name:S,size:f,originalSize:p,compression:g}))&&(g?g==8?r[S]=Jf(t.subarray(T,T+f),{out:new or(p)}):Gt(14,"unknown compression type "+g):r[S]=es(t,T,T+f))}return r}var or,lo,Wf,Zc,Qc,jf,Jc,ed,td,Gf,rd,qf,M0,Qi,an,Ke,No,Co,Ke,Ke,Ke,Ke,nd,Ke,Xf,Vf,Ki,Pr,Yi,Kf,es,Yf,Gt,od,Zf,Gr,pr,Zi,Qf,Ji,ep,tp,np,op,ap,ts=nr(()=>{or=Uint8Array,lo=Uint16Array,Wf=Int32Array,Zc=new or([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Qc=new or([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),jf=new or([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Jc=function(t,e){for(var r=new lo(31),n=0;n<31;++n)r[n]=e+=1<<t[n-1];for(var o=new Wf(r[30]),n=1;n<30;++n)for(var i=r[n];i<r[n+1];++i)o[i]=i-r[n]<<5|n;return{b:r,r:o}},ed=Jc(Zc,2),td=ed.b,Gf=ed.r;td[28]=258,Gf[258]=28;rd=Jc(Qc,0),qf=rd.b,M0=rd.r,Qi=new lo(32768);for(Ke=0;Ke<32768;++Ke)an=(Ke&43690)>>1|(Ke&21845)<<1,an=(an&52428)>>2|(an&13107)<<2,an=(an&61680)>>4|(an&3855)<<4,Qi[Ke]=((an&65280)>>8|(an&255)<<8)>>1;No=(function(t,e,r){for(var n=t.length,o=0,i=new lo(e);o<n;++o)t[o]&&++i[t[o]-1];var a=new lo(e);for(o=1;o<e;++o)a[o]=a[o-1]+i[o-1]<<1;var s;if(r){s=new lo(1<<e);var l=15-e;for(o=0;o<n;++o)if(t[o])for(var d=o<<4|t[o],h=e-t[o],g=a[t[o]-1]++<<h,f=g|(1<<h)-1;g<=f;++g)s[Qi[g]>>l]=d}else for(s=new lo(n),o=0;o<n;++o)t[o]&&(s[o]=Qi[a[t[o]-1]++]>>15-t[o]);return s}),Co=new or(288);for(Ke=0;Ke<144;++Ke)Co[Ke]=8;for(Ke=144;Ke<256;++Ke)Co[Ke]=9;for(Ke=256;Ke<280;++Ke)Co[Ke]=7;for(Ke=280;Ke<288;++Ke)Co[Ke]=8;nd=new or(32);for(Ke=0;Ke<32;++Ke)nd[Ke]=5;Xf=No(Co,9,1),Vf=No(nd,5,1),Ki=function(t){for(var e=t[0],r=1;r<t.length;++r)t[r]>e&&(e=t[r]);return e},Pr=function(t,e,r){var n=e/8|0;return(t[n]|t[n+1]<<8)>>(e&7)&r},Yi=function(t,e){var r=e/8|0;return(t[r]|t[r+1]<<8|t[r+2]<<16)>>(e&7)},Kf=function(t){return(t+7)/8|0},es=function(t,e,r){return(e==null||e<0)&&(e=0),(r==null||r>t.length)&&(r=t.length),new or(t.subarray(e,r))},Yf=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Gt=function(t,e,r){var n=new Error(e||Yf[t]);if(n.code=t,Error.captureStackTrace&&Error.captureStackTrace(n,Gt),!r)throw n;return n},od=function(t,e,r,n){var o=t.length,i=n?n.length:0;if(!o||e.f&&!e.l)return r||new or(0);var a=!r,s=a||e.i!=2,l=e.i;a&&(r=new or(o*3));var d=function(ut){var u=r.length;if(ut>u){var c=new or(Math.max(u*2,ut));c.set(r),r=c}},h=e.f||0,g=e.p||0,f=e.b||0,p=e.l,S=e.d,w=e.m,x=e.n,T=o*8;do{if(!p){h=Pr(t,g,1);var M=Pr(t,g+1,3);if(g+=3,M)if(M==1)p=Xf,S=Vf,w=9,x=5;else if(M==2){var E=Pr(t,g,31)+257,L=Pr(t,g+10,15)+4,P=E+Pr(t,g+5,31)+1;g+=14;for(var m=new or(P),_=new or(19),F=0;F<L;++F)_[jf[F]]=Pr(t,g+F*3,7);g+=L*3;for(var V=Ki(_),z=(1<<V)-1,se=No(_,V,1),F=0;F<P;){var de=se[Pr(t,g,z)];g+=de&15;var N=de>>4;if(N<16)m[F++]=N;else{var q=0,me=0;for(N==16?(me=3+Pr(t,g,3),g+=2,q=m[F-1]):N==17?(me=3+Pr(t,g,7),g+=3):N==18&&(me=11+Pr(t,g,127),g+=7);me--;)m[F++]=q}}var X=m.subarray(0,E),D=m.subarray(E);w=Ki(X),x=Ki(D),p=No(X,w,1),S=No(D,x,1)}else Gt(1);else{var N=Kf(g)+4,R=t[N-4]|t[N-3]<<8,C=N+R;if(C>o){l&&Gt(0);break}s&&d(f+R),r.set(t.subarray(N,C),f),e.b=f+=R,e.p=g=C*8,e.f=h;continue}if(g>T){l&&Gt(0);break}}s&&d(f+131072);for(var he=(1<<w)-1,$=(1<<x)-1,re=g;;re=g){var q=p[Yi(t,g)&he],ne=q>>4;if(g+=q&15,g>T){l&&Gt(0);break}if(q||Gt(2),ne<256)r[f++]=ne;else if(ne==256){re=g,p=null;break}else{var ye=ne-254;if(ne>264){var F=ne-257,Q=Zc[F];ye=Pr(t,g,(1<<Q)-1)+td[F],g+=Q}var Be=S[Yi(t,g)&$],$e=Be>>4;Be||Gt(3),g+=Be&15;var D=qf[$e];if($e>3){var Q=Qc[$e];D+=Yi(t,g)&(1<<Q)-1,g+=Q}if(g>T){l&&Gt(0);break}s&&d(f+131072);var Pe=f+ye;if(f<D){var ct=i-D,Oe=Math.min(D,Pe);for(ct+f<0&&Gt(3);f<Oe;++f)r[f]=n[ct+f]}for(;f<Pe;++f)r[f]=r[f-D]}}e.l=p,e.p=re,e.b=f,e.f=h,p&&(h=1,e.m=w,e.d=S,e.n=x)}while(!h);return f!=r.length&&a?es(r,0,f):r.subarray(0,f)},Zf=new or(0),Gr=function(t,e){return t[e]|t[e+1]<<8},pr=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},Zi=function(t,e){return pr(t,e)+pr(t,e+4)*4294967296},Qf=function(t,e){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&Gt(6,"invalid zlib data"),(t[1]>>5&1)==+!e&&Gt(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};Ji=typeof TextDecoder<"u"&&new TextDecoder,ep=0;try{Ji.decode(Zf,{stream:!0}),ep=1}catch{}tp=function(t){for(var e="",r=0;;){var n=t[r++],o=(n>127)+(n>223)+(n>239);if(r+o>t.length)return{s:e,r:es(t,r-1)};o?o==3?(n=((n&15)<<18|(t[r++]&63)<<12|(t[r++]&63)<<6|t[r++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):o&1?e+=String.fromCharCode((n&31)<<6|t[r++]&63):e+=String.fromCharCode((n&15)<<12|(t[r++]&63)<<6|t[r++]&63):e+=String.fromCharCode(n)}};np=function(t,e){return e+30+Gr(t,e+26)+Gr(t,e+28)},op=function(t,e,r){var n=Gr(t,e+28),o=Gr(t,e+30),i=rp(t.subarray(e+46,e+46+n),!(Gr(t,e+8)&2048)),a=e+46+n,s=ap(t,a,o,r,pr(t,e+20),pr(t,e+24),pr(t,e+42)),l=s[0],d=s[1],h=s[2];return[Gr(t,e+10),l,d,i,a+o+Gr(t,e+32),h]},ap=function(t,e,r,n,o,i,a){var s=o==4294967295,l=i==4294967295,d=a==4294967295,h=e+r,g=s+l+d;if(n&&g){for(;e+4<h;e+=4+Gr(t,e+2))if(Gr(t,e)==1)return[s?Zi(t,e+4+8*l):o,l?Zi(t,e+4):i,d?Zi(t,e+4+8*(l+s)):a,1];n<2&&Gt(13)}return[o,i,a,0]}});function Vt(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return cs(t,e,n)}}function fp(t){return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return ds(t,r)}}function Re(t,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ba;sd&&sd(t,null);let n=e.length;for(;n--;){let o=e[n];if(typeof o=="string"){let i=r(o);i!==o&&(ip(e)||(e[n]=i),o=i)}t[o]=!0}return t}function pp(t){for(let e=0;e<t.length;e++)Or(t,e)||(t[e]=null);return t}function qr(t){let e=ls(null);for(let[r,n]of gd(t))Or(t,r)&&(Array.isArray(n)?e[r]=pp(n):n&&typeof n=="object"&&n.constructor===Object?e[r]=qr(n):e[r]=n);return e}function Po(t,e){for(;t!==null;){let n=lp(t,e);if(n){if(n.get)return Vt(n.get);if(typeof n.value=="function")return Vt(n.value)}t=sp(t)}function r(){return null}return r}function xd(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Sp(),e=fe=>xd(fe);if(e.version="3.3.1",e.removed=[],!t||!t.document||t.document.nodeType!==Oo.document||!t.Element)return e.isSupported=!1,e;let{document:r}=t,n=r,o=n.currentScript,{DocumentFragment:i,HTMLTemplateElement:a,Node:s,Element:l,NodeFilter:d,NamedNodeMap:h=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:g,DOMParser:f,trustedTypes:p}=t,S=l.prototype,w=Po(S,"cloneNode"),x=Po(S,"remove"),T=Po(S,"nextSibling"),M=Po(S,"childNodes"),N=Po(S,"parentNode");if(typeof a=="function"){let fe=r.createElement("template");fe.content&&fe.content.ownerDocument&&(r=fe.content.ownerDocument)}let R,C="",{implementation:E,createNodeIterator:L,createDocumentFragment:P,getElementsByTagName:m}=r,{importNode:_}=n,F=pd();e.isSupported=typeof gd=="function"&&typeof N=="function"&&E&&E.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:V,ERB_EXPR:z,TMPLIT_EXPR:se,DATA_ATTR:de,ARIA_ATTR:q,IS_SCRIPT_OR_DATA:me,ATTR_WHITESPACE:X,CUSTOM_ELEMENT:D}=fd,{IS_ALLOWED_URI:he}=fd,$=null,re=Re({},[...cd,...os,...as,...is,...dd]),ne=null,ye=Re({},[...hd,...ss,...ud,...za]),Q=Object.seal(ls(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Be=null,$e=null,Pe=Object.seal(ls(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),ct=!0,Oe=!0,ut=!1,u=!0,c=!1,A=!0,v=!1,oe=!1,ue=!1,le=!1,be=!1,Ee=!1,Me=!0,te=!1,je="user-content-",Je=!0,et=!1,We={},De=null,ge=Re({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),He=null,Ye=Re({},["audio","video","img","source","image","track"]),tt=null,xt=Re({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),J="http://www.w3.org/1998/Math/MathML",ce="http://www.w3.org/2000/svg",Ce="http://www.w3.org/1999/xhtml",Fe=Ce,Bt=!1,Ot=null,Jr=Re({},[J,ce,Ce],rs),ft=Re({},["mi","mo","mn","ms","mtext"]),er=Re({},["annotation-xml"]),pt=Re({},["title","style","font","a","script"]),Qt=null,Ae=["application/xhtml+xml","text/html"],sn="text/html",st=null,wr=null,Dr=r.createElement("form"),$t=function(y){return y instanceof RegExp||y instanceof Function},ln=function(){let y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(wr&&wr===y)){if((!y||typeof y!="object")&&(y={}),y=qr(y),Qt=Ae.indexOf(y.PARSER_MEDIA_TYPE)===-1?sn:y.PARSER_MEDIA_TYPE,st=Qt==="application/xhtml+xml"?rs:Ba,$=Or(y,"ALLOWED_TAGS")?Re({},y.ALLOWED_TAGS,st):re,ne=Or(y,"ALLOWED_ATTR")?Re({},y.ALLOWED_ATTR,st):ye,Ot=Or(y,"ALLOWED_NAMESPACES")?Re({},y.ALLOWED_NAMESPACES,rs):Jr,tt=Or(y,"ADD_URI_SAFE_ATTR")?Re(qr(xt),y.ADD_URI_SAFE_ATTR,st):xt,He=Or(y,"ADD_DATA_URI_TAGS")?Re(qr(Ye),y.ADD_DATA_URI_TAGS,st):Ye,De=Or(y,"FORBID_CONTENTS")?Re({},y.FORBID_CONTENTS,st):ge,Be=Or(y,"FORBID_TAGS")?Re({},y.FORBID_TAGS,st):qr({}),$e=Or(y,"FORBID_ATTR")?Re({},y.FORBID_ATTR,st):qr({}),We=Or(y,"USE_PROFILES")?y.USE_PROFILES:!1,ct=y.ALLOW_ARIA_ATTR!==!1,Oe=y.ALLOW_DATA_ATTR!==!1,ut=y.ALLOW_UNKNOWN_PROTOCOLS||!1,u=y.ALLOW_SELF_CLOSE_IN_ATTR!==!1,c=y.SAFE_FOR_TEMPLATES||!1,A=y.SAFE_FOR_XML!==!1,v=y.WHOLE_DOCUMENT||!1,le=y.RETURN_DOM||!1,be=y.RETURN_DOM_FRAGMENT||!1,Ee=y.RETURN_TRUSTED_TYPE||!1,ue=y.FORCE_BODY||!1,Me=y.SANITIZE_DOM!==!1,te=y.SANITIZE_NAMED_PROPS||!1,Je=y.KEEP_CONTENT!==!1,et=y.IN_PLACE||!1,he=y.ALLOWED_URI_REGEXP||md,Fe=y.NAMESPACE||Ce,ft=y.MATHML_TEXT_INTEGRATION_POINTS||ft,er=y.HTML_INTEGRATION_POINTS||er,Q=y.CUSTOM_ELEMENT_HANDLING||{},y.CUSTOM_ELEMENT_HANDLING&&$t(y.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Q.tagNameCheck=y.CUSTOM_ELEMENT_HANDLING.tagNameCheck),y.CUSTOM_ELEMENT_HANDLING&&$t(y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Q.attributeNameCheck=y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),y.CUSTOM_ELEMENT_HANDLING&&typeof y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(Q.allowCustomizedBuiltInElements=y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),c&&(Oe=!1),be&&(le=!0),We&&($=Re({},dd),ne=[],We.html===!0&&(Re($,cd),Re(ne,hd)),We.svg===!0&&(Re($,os),Re(ne,ss),Re(ne,za)),We.svgFilters===!0&&(Re($,as),Re(ne,ss),Re(ne,za)),We.mathMl===!0&&(Re($,is),Re(ne,ud),Re(ne,za))),y.ADD_TAGS&&(typeof y.ADD_TAGS=="function"?Pe.tagCheck=y.ADD_TAGS:($===re&&($=qr($)),Re($,y.ADD_TAGS,st))),y.ADD_ATTR&&(typeof y.ADD_ATTR=="function"?Pe.attributeCheck=y.ADD_ATTR:(ne===ye&&(ne=qr(ne)),Re(ne,y.ADD_ATTR,st))),y.ADD_URI_SAFE_ATTR&&Re(tt,y.ADD_URI_SAFE_ATTR,st),y.FORBID_CONTENTS&&(De===ge&&(De=qr(De)),Re(De,y.FORBID_CONTENTS,st)),y.ADD_FORBID_CONTENTS&&(De===ge&&(De=qr(De)),Re(De,y.ADD_FORBID_CONTENTS,st)),Je&&($["#text"]=!0),v&&Re($,["html","head","body"]),$.table&&(Re($,["tbody"]),delete Be.tbody),y.TRUSTED_TYPES_POLICY){if(typeof y.TRUSTED_TYPES_POLICY.createHTML!="function")throw Ro('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof y.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Ro('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');R=y.TRUSTED_TYPES_POLICY,C=R.createHTML("")}else R===void 0&&(R=Ep(p,o)),R!==null&&typeof C=="string"&&(C=R.createHTML(""));Xt&&Xt(y),wr=y}},ir=Re({},[...os,...as,...gp]),Gn=Re({},[...is,...mp]),_t=function(y){let j=N(y);(!j||!j.tagName)&&(j={namespaceURI:Fe,tagName:"template"});let ae=Ba(y.tagName),Ze=Ba(j.tagName);return Ot[y.namespaceURI]?y.namespaceURI===ce?j.namespaceURI===Ce?ae==="svg":j.namespaceURI===J?ae==="svg"&&(Ze==="annotation-xml"||ft[Ze]):!!ir[ae]:y.namespaceURI===J?j.namespaceURI===Ce?ae==="math":j.namespaceURI===ce?ae==="math"&&er[Ze]:!!Gn[ae]:y.namespaceURI===Ce?j.namespaceURI===ce&&!er[Ze]||j.namespaceURI===J&&!ft[Ze]?!1:!Gn[ae]&&(pt[ae]||!ir[ae]):!!(Qt==="application/xhtml+xml"&&Ot[y.namespaceURI]):!1},mt=function(y){Io(e.removed,{element:y});try{N(y).removeChild(y)}catch{x(y)}},Et=function(y,j){try{Io(e.removed,{attribute:j.getAttributeNode(y),from:j})}catch{Io(e.removed,{attribute:null,from:j})}if(j.removeAttribute(y),y==="is")if(le||be)try{mt(j)}catch{}else try{j.setAttribute(y,"")}catch{}},bn=function(y){let j=null,ae=null;if(ue)y="<remove></remove>"+y;else{let Xe=ns(y,/^[\r\n\t ]+/);ae=Xe&&Xe[0]}Qt==="application/xhtml+xml"&&Fe===Ce&&(y='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+y+"</body></html>");let Ze=R?R.createHTML(y):y;if(Fe===Ce)try{j=new f().parseFromString(Ze,Qt)}catch{}if(!j||!j.documentElement){j=E.createDocument(Fe,"template",null);try{j.documentElement.innerHTML=Bt?C:Ze}catch{}}let vt=j.body||j.documentElement;return y&&ae&&vt.insertBefore(r.createTextNode(ae),vt.childNodes[0]||null),Fe===Ce?m.call(j,v?"html":"body")[0]:v?j.documentElement:vt},xn=function(y){return L.call(y.ownerDocument||y,y,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},sr=function(y){return y instanceof g&&(typeof y.nodeName!="string"||typeof y.textContent!="string"||typeof y.removeChild!="function"||!(y.attributes instanceof h)||typeof y.removeAttribute!="function"||typeof y.setAttribute!="function"||typeof y.namespaceURI!="string"||typeof y.insertBefore!="function"||typeof y.hasChildNodes!="function")},vn=function(y){return typeof s=="function"&&y instanceof s};function tr(fe,y,j){Fa(fe,ae=>{ae.call(e,y,j,wr)})}let yn=function(y){let j=null;if(tr(F.beforeSanitizeElements,y,null),sr(y))return mt(y),!0;let ae=st(y.nodeName);if(tr(F.uponSanitizeElement,y,{tagName:ae,allowedTags:$}),A&&y.hasChildNodes()&&!vn(y.firstElementChild)&&qt(/<[/\w!]/g,y.innerHTML)&&qt(/<[/\w!]/g,y.textContent)||y.nodeType===Oo.progressingInstruction||A&&y.nodeType===Oo.comment&&qt(/<[/\w]/g,y.data))return mt(y),!0;if(!(Pe.tagCheck instanceof Function&&Pe.tagCheck(ae))&&(!$[ae]||Be[ae])){if(!Be[ae]&&kr(ae)&&(Q.tagNameCheck instanceof RegExp&&qt(Q.tagNameCheck,ae)||Q.tagNameCheck instanceof Function&&Q.tagNameCheck(ae)))return!1;if(Je&&!De[ae]){let Ze=N(y)||y.parentNode,vt=M(y)||y.childNodes;if(vt&&Ze){let Xe=vt.length;for(let bt=Xe-1;bt>=0;--bt){let Ht=w(vt[bt],!0);Ht.__removalCount=(y.__removalCount||0)+1,Ze.insertBefore(Ht,T(y))}}}return mt(y),!0}return y instanceof l&&!_t(y)||(ae==="noscript"||ae==="noembed"||ae==="noframes")&&qt(/<\/no(script|embed|frames)/i,y.innerHTML)?(mt(y),!0):(c&&y.nodeType===Oo.text&&(j=y.textContent,Fa([V,z,se],Ze=>{j=Mo(j,Ze," ")}),y.textContent!==j&&(Io(e.removed,{element:y.cloneNode()}),y.textContent=j)),tr(F.afterSanitizeElements,y,null),!1)},en=function(y,j,ae){if(Me&&(j==="id"||j==="name")&&(ae in r||ae in Dr))return!1;if(!(Oe&&!$e[j]&&qt(de,j))){if(!(ct&&qt(q,j))){if(!(Pe.attributeCheck instanceof Function&&Pe.attributeCheck(j,y))){if(!ne[j]||$e[j]){if(!(kr(y)&&(Q.tagNameCheck instanceof RegExp&&qt(Q.tagNameCheck,y)||Q.tagNameCheck instanceof Function&&Q.tagNameCheck(y))&&(Q.attributeNameCheck instanceof RegExp&&qt(Q.attributeNameCheck,j)||Q.attributeNameCheck instanceof Function&&Q.attributeNameCheck(j,y))||j==="is"&&Q.allowCustomizedBuiltInElements&&(Q.tagNameCheck instanceof RegExp&&qt(Q.tagNameCheck,ae)||Q.tagNameCheck instanceof Function&&Q.tagNameCheck(ae))))return!1}else if(!tt[j]){if(!qt(he,Mo(ae,X,""))){if(!((j==="src"||j==="xlink:href"||j==="href")&&y!=="script"&&hp(ae,"data:")===0&&He[y])){if(!(ut&&!qt(me,Mo(ae,X,"")))){if(ae)return!1}}}}}}}return!0},kr=function(y){return y!=="annotation-xml"&&ns(y,D)},lr=function(y){tr(F.beforeSanitizeAttributes,y,null);let{attributes:j}=y;if(!j||sr(y))return;let ae={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ne,forceKeepAttr:void 0},Ze=j.length;for(;Ze--;){let vt=j[Ze],{name:Xe,namespaceURI:bt,value:Ht}=vt,_r=st(Xe),Fr=Ht,yt=Xe==="value"?Fr:up(Fr);if(ae.attrName=_r,ae.attrValue=yt,ae.keepAttr=!0,ae.forceKeepAttr=void 0,tr(F.uponSanitizeAttribute,y,ae),yt=ae.attrValue,te&&(_r==="id"||_r==="name")&&(Et(Xe,y),yt=je+yt),A&&qt(/((--!?|])>)|<\/(style|title|textarea)/i,yt)){Et(Xe,y);continue}if(_r==="attributename"&&ns(yt,"href")){Et(Xe,y);continue}if(ae.forceKeepAttr)continue;if(!ae.keepAttr){Et(Xe,y);continue}if(!u&&qt(/\/>/i,yt)){Et(Xe,y);continue}c&&Fa([V,z,se],Tr=>{yt=Mo(yt,Tr," ")});let cn=st(y.nodeName);if(!en(cn,_r,yt)){Et(Xe,y);continue}if(R&&typeof p=="object"&&typeof p.getAttributeType=="function"&&!bt)switch(p.getAttributeType(cn,_r)){case"TrustedHTML":{yt=R.createHTML(yt);break}case"TrustedScriptURL":{yt=R.createScriptURL(yt);break}}if(yt!==Fr)try{bt?y.setAttributeNS(bt,Xe,yt):y.setAttribute(Xe,yt),sr(y)?mt(y):ld(e.removed)}catch{Et(Xe,y)}}tr(F.afterSanitizeAttributes,y,null)},At=function fe(y){let j=null,ae=xn(y);for(tr(F.beforeSanitizeShadowDOM,y,null);j=ae.nextNode();)tr(F.uponSanitizeShadowNode,j,null),yn(j),lr(j),j.content instanceof i&&fe(j.content);tr(F.afterSanitizeShadowDOM,y,null)};return e.sanitize=function(fe){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},j=null,ae=null,Ze=null,vt=null;if(Bt=!fe,Bt&&(fe="<!-->"),typeof fe!="string"&&!vn(fe))if(typeof fe.toString=="function"){if(fe=fe.toString(),typeof fe!="string")throw Ro("dirty is not a string, aborting")}else throw Ro("toString is not a function");if(!e.isSupported)return fe;if(oe||ln(y),e.removed=[],typeof fe=="string"&&(et=!1),et){if(fe.nodeName){let Ht=st(fe.nodeName);if(!$[Ht]||Be[Ht])throw Ro("root node is forbidden and cannot be sanitized in-place")}}else if(fe instanceof s)j=bn("<!---->"),ae=j.ownerDocument.importNode(fe,!0),ae.nodeType===Oo.element&&ae.nodeName==="BODY"||ae.nodeName==="HTML"?j=ae:j.appendChild(ae);else{if(!le&&!c&&!v&&fe.indexOf("<")===-1)return R&&Ee?R.createHTML(fe):fe;if(j=bn(fe),!j)return le?null:Ee?C:""}j&&ue&&mt(j.firstChild);let Xe=xn(et?fe:j);for(;Ze=Xe.nextNode();)yn(Ze),lr(Ze),Ze.content instanceof i&&At(Ze.content);if(et)return fe;if(le){if(be)for(vt=P.call(j.ownerDocument);j.firstChild;)vt.appendChild(j.firstChild);else vt=j;return(ne.shadowroot||ne.shadowrootmode)&&(vt=_.call(n,vt,!0)),vt}let bt=v?j.outerHTML:j.innerHTML;return v&&$["!doctype"]&&j.ownerDocument&&j.ownerDocument.doctype&&j.ownerDocument.doctype.name&&qt(bd,j.ownerDocument.doctype.name)&&(bt="<!DOCTYPE "+j.ownerDocument.doctype.name+`>
`+bt),c&&Fa([V,z,se],Ht=>{bt=Mo(bt,Ht," ")}),R&&Ee?R.createHTML(bt):bt},e.setConfig=function(){let fe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ln(fe),oe=!0},e.clearConfig=function(){wr=null,oe=!1},e.isValidAttribute=function(fe,y,j){wr||ln({});let ae=st(fe),Ze=st(y);return en(ae,Ze,j)},e.addHook=function(fe,y){typeof y=="function"&&Io(F[fe],y)},e.removeHook=function(fe,y){if(y!==void 0){let j=cp(F[fe],y);return j===-1?void 0:dp(F[fe],j,1)[0]}return ld(F[fe])},e.removeHooks=function(fe){F[fe]=[]},e.removeAllHooks=function(){F=pd()},e}var gd,sd,ip,sp,lp,Xt,gr,ls,cs,ds,Fa,cp,ld,Io,dp,Ba,rs,ns,Mo,hp,up,Or,qt,Ro,cd,os,as,gp,is,mp,dd,hd,ss,ud,za,bp,xp,vp,yp,wp,md,kp,_p,bd,Tp,fd,Oo,Sp,Ep,pd,Lo,vd=nr(()=>{({entries:gd,setPrototypeOf:sd,isFrozen:ip,getPrototypeOf:sp,getOwnPropertyDescriptor:lp}=Object),{freeze:Xt,seal:gr,create:ls}=Object,{apply:cs,construct:ds}=typeof Reflect<"u"&&Reflect;Xt||(Xt=function(e){return e});gr||(gr=function(e){return e});cs||(cs=function(e,r){for(var n=arguments.length,o=new Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];return e.apply(r,o)});ds||(ds=function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return new e(...n)});Fa=Vt(Array.prototype.forEach),cp=Vt(Array.prototype.lastIndexOf),ld=Vt(Array.prototype.pop),Io=Vt(Array.prototype.push),dp=Vt(Array.prototype.splice),Ba=Vt(String.prototype.toLowerCase),rs=Vt(String.prototype.toString),ns=Vt(String.prototype.match),Mo=Vt(String.prototype.replace),hp=Vt(String.prototype.indexOf),up=Vt(String.prototype.trim),Or=Vt(Object.prototype.hasOwnProperty),qt=Vt(RegExp.prototype.test),Ro=fp(TypeError);cd=Xt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),os=Xt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),as=Xt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),gp=Xt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),is=Xt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),mp=Xt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),dd=Xt(["#text"]),hd=Xt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),ss=Xt(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ud=Xt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),za=Xt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),bp=gr(/\{\{[\w\W]*|[\w\W]*\}\}/gm),xp=gr(/<%[\w\W]*|[\w\W]*%>/gm),vp=gr(/\$\{[\w\W]*/gm),yp=gr(/^data-[\-\w.\u00B7-\uFFFF]+$/),wp=gr(/^aria-[\-\w]+$/),md=gr(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),kp=gr(/^(?:\w+script|data):/i),_p=gr(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),bd=gr(/^html$/i),Tp=gr(/^[a-z][.\w]*(-[.\w]+)+$/i),fd=Object.freeze({__proto__:null,ARIA_ATTR:wp,ATTR_WHITESPACE:_p,CUSTOM_ELEMENT:Tp,DATA_ATTR:yp,DOCTYPE_NAME:bd,ERB_EXPR:xp,IS_ALLOWED_URI:md,IS_SCRIPT_OR_DATA:kp,MUSTACHE_EXPR:bp,TMPLIT_EXPR:vp}),Oo={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Sp=function(){return typeof window>"u"?null:window},Ep=function(e,r){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null,o="data-tt-policy-suffix";r&&r.hasAttribute(o)&&(n=r.getAttribute(o));let i="dompurify"+(n?"#"+n:"");try{return e.createPolicy(i,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},pd=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};Lo=xd()});function kd(){if(Ln)return Ln;if(typeof Lo?.sanitize=="function"&&Lo.isSupported)Ln=Lo;else{let t=typeof window<"u"?window:globalThis.window;if(!t)throw new Error("\u65E0\u6CD5\u6E05\u7406 HTML\uFF1A\u5F53\u524D\u73AF\u5883\u7F3A\u5C11\u6D4F\u89C8\u5668 window\u3002");Ln=Lo(t)}if(!Ln||typeof Ln.sanitize!="function")throw new Error("\u65E0\u6CD5\u6E05\u7406 HTML\uFF1A\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 DOMPurify\u3002");return Ln}function $a(t){if(!t)return"";try{return kd().sanitize(String(t),wd)}catch{return""}}function hs(t){if(!t)return"";try{return kd().sanitize(String(t),Np)}catch{return""}}function Dn(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function at(t){return String(t??"").replace(/\u00a0/g," ").replace(/[\t\f\v\u2000-\u200b\u2028\u2029]+/g," ").replace(/[ ]*\n[ ]*/g," ").replace(/ {2,}/g," ").trim()}function Do(t="div"){return document.createElement(t)}function Xr(t){try{return new DOMParser().parseFromString(String(t??""),"text/html")}catch{return null}}function co(t){try{let e=new DOMParser().parseFromString(String(t??""),"application/xml");return!e||!e.documentElement||e.documentElement.localName?.toLowerCase()==="parsererror"||Kt(e,"parsererror")?null:e}catch{return null}}function ar(t){return String(t?.localName||t?.nodeName||"").toLowerCase()}function St(t,e){let r=[];if(!t)return r;let n=String(e).toLowerCase(),o=i=>{for(let a=i.firstChild;a;a=a.nextSibling)a.nodeType===1&&(ar(a)===n&&r.push(a),o(a))};return o(t),r}function Kt(t,e){if(!t)return null;let r=String(e).toLowerCase(),n=null,o=i=>{for(let a=i.firstChild;a&&!n;a=a.nextSibling)if(a.nodeType===1){if(ar(a)===r){n=a;return}o(a)}};return o(t),n}function Qe(t,e){if(!t||!e)return null;let r=t.getAttribute?.(e);if(r!=null)return r;let n=String(e).toLowerCase(),o=t.attributes;if(!o)return null;for(let i=0;i<o.length;i+=1){let a=o[i];if(!a)continue;if(String(a.name||"").toLowerCase()===n||!n.includes(":")&&String(a.localName||"").toLowerCase()===n)return a.value}return null}var yd,Ap,wd,Np,Ln,Fn=nr(()=>{vd();yd=Object.freeze(["b","strong","i","em","u","s","sub","sup","code","span","a","br","ruby","rt","rp","small","mark"]),Ap=Object.freeze(["table","caption","thead","tbody","tfoot","tr","th","td","colgroup","col"]),wd=Object.freeze({ALLOWED_TAGS:[...yd],ALLOWED_ATTR:["href"],ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!1,KEEP_CONTENT:!0,FORBID_TAGS:["script","style","iframe","frame","frameset","object","embed","applet","form","input","button","select","textarea","meta","link","base","svg","math","template","noscript"],FORBID_ATTR:["style","src","srcset","formaction","xlink:href","onerror","onload","onclick"]}),Np=Object.freeze({...wd,ALLOWED_TAGS:[...yd,...Ap]}),Ln=null});function Bn(t){return t.nextId()}function Rp(t){if(!t||t.nodeType!==1)return!1;if(t.hasAttribute?.("hidden")||Qe(t,"aria-hidden")==="true")return!0;let e=Qe(t,"style")||"";return/display\s*:\s*none|visibility\s*:\s*hidden/i.test(e)}function Pp(t,e){typeof t?.warn=="function"&&t.warn(e)}function fs(t){for(let e of Array.from(t?.children||[])){let r=ar(e);if(_d.has(r)&&r!=="span"&&r!=="a"||fs(e))return!0}return!1}function Td(t){let e=Array.from(t.querySelectorAll(Mp));for(let r=e.length-1;r>=0;r-=1){let n=e[r];if(!n.parentNode)continue;let o=t.ownerDocument.createDocumentFragment();for(;n.firstChild;)o.appendChild(n.firstChild);o.appendChild(t.ownerDocument.createElement("br")),n.parentNode.replaceChild(o,n)}return t}function Sd(t){for(let e of St(t,"img"))e.remove();for(let e of St(t,"image"))e.remove()}function zn(t){let e=[],r=n=>{for(let o of Array.from(n?.children||[])){let i=ar(o);i==="img"||i==="image"?e.push(o):i==="svg"?e.push(...St(o,"image")):i!=="script"&&i!=="style"&&r(o)}};return r(t),e}function ps(t,e){if(!t||typeof e?.resolveLink!="function")return;let r=Array.from(t.getElementsByTagName?.("a")||[]);for(let n of r){let o=n.getAttribute("href");if(n.removeAttribute("href"),n.removeAttribute("data-chapter"),n.removeAttribute("data-anchor"),!o)continue;let i=null;try{i=e.resolveLink(o)}catch{i=null}if(i){if(i.external){i.href&&n.setAttribute("href",i.href);continue}Number.isInteger(i.chapter)&&i.chapter>=0&&(n.setAttribute("data-chapter",String(i.chapter)),i.anchor&&n.setAttribute("data-anchor",String(i.anchor).slice(0,300)))}}}function Ed(t,e){let r=$a(t.innerHTML);if(!r)return null;let n=Do("div");n.innerHTML=r,ps(n,e);let o=n.innerHTML.replace(/^(?:\s*<br\s*\/?>\s*)+/i,"").replace(/(?:\s*<br\s*\/?>\s*)+$/i,"");if(!o)return null;let i=at(n.textContent);return i?{html:o,text:i}:null}function Wa(t,e,r,n={}){let o=$a(r);if(!o)return null;let i=Do("div");i.innerHTML=o,ps(i,t);let a=i.innerHTML,s=at(i.textContent);return s?{id:Bn(t),kind:e,html:a,text:s,...n}:null}function gs(t,e){let r=String(e??"").replace(/\r\n?/g,`
`).replace(/\u00a0/g," ").replace(/^\n+|\n+$/g,"");return r.trim()?{id:Bn(t),kind:"code",html:Dn(r),text:r}:null}function ms(t,e,r={}){let n=hs(e);if(!n)return null;let o=Do("div");if(o.innerHTML=n,!o.querySelector("table"))return null;ps(o,t);let a=o.innerHTML,s=at(o.textContent);return s?{id:Bn(t),kind:"table",html:a,text:s,...r}:null}function bs(t,{src:e,alt:r="",caption:n=""}={}){if(!e)return null;let o={id:Bn(t),kind:"image",src:e},i=at(r),a=at(n);return i&&(o.alt=i),a&&(o.caption=a),o}function xs(t){return{id:Bn(t),kind:"rule"}}function $n(t,e){let r=[];return t&&Ha(t,e,r),r}function Ha(t,e,r){let n=[],o=()=>{if(n.length===0)return;let i=Do("div");for(let s of n)i.appendChild(s.cloneNode(!0));let a=at(i.textContent)!==""||zn(i).length>0;n=[],a&&fn("paragraph",i,e,r)};for(let i of Array.from(t.childNodes||[])){if(i.nodeType===3){String(i.textContent||"").trim()&&n.push(i);continue}if(i.nodeType!==1||Rp(i))continue;let a=ar(i);Cp.has(a)||(_d.has(a)?(o(),Op(i,a,e,r)):n.push(i))}o()}function Op(t,e,r,n){if(us.has(e)){fn("heading",t,r,n,{level:Number(e.slice(1)),stripImages:!0,flatten:!1});return}switch(e){case"p":fn("paragraph",t,r,n);return;case"li":case"dt":fn("list-item",t,r,n,{flatten:!0});return;case"dd":fn("paragraph",t,r,n,{flatten:!0});return;case"blockquote":fn("quote",t,r,n,{flatten:!0});return;case"pre":Dp(t,r,n);return;case"table":Fp(t,r,n);return;case"hr":n.push(xs(r));return;case"figure":{Lp(t,r,n);return}case"img":case"image":Ua(t,r,n,"");return;case"picture":case"svg":{for(let o of zn(t))Ua(o,r,n,"");return}case"ul":case"ol":{for(let o of Array.from(t.children||[]))ar(o)==="li"?fn("list-item",o,r,n,{flatten:!0}):Ha(o,r,n);return}case"dl":{Ha(t,r,n);return}case"figcaption":return;default:Ip.has(e)||fs(t)?Ha(t,r,n):fn("paragraph",t,r,n)}}function fn(t,e,r,n,o={}){let i=e.cloneNode(!0),a=zn(i);if(a.length>0)for(let l of a)l.remove();o.stripImages&&Sd(i),o.flatten!==!1&&Td(i);let s=Ed(i,r);if(s){let l={id:Bn(r),kind:t,html:s.html,text:s.text};o.level&&(l.level=o.level),n.push(l)}if(!o.stripImages&&a.length>0){let l=zn(e);for(let d of l)Ua(d,r,n,"")}}function Ua(t,e,r,n){let o=Qe(t,"src")||Qe(t,"xlink:href")||Qe(t,"href");if(!o)return;let i=null;try{i=typeof e?.resolveImage=="function"?e.resolveImage(o):null}catch{i=null}if(!i||!i.src)return;let a=Qe(t,"alt")||Qe(t,"title")||i.alt||"",s=bs(e,{src:i.src,alt:a,caption:n||i.caption||""});s&&r.push(s)}function Lp(t,e,r){let n=St(t,"figcaption")[0]||null,o=n?at(n.textContent):"",i=zn(t);i.length>0&&i.forEach((l,d)=>{Ua(l,e,r,d===0?o:"")});let a=t.cloneNode(!0);Sd(a);for(let l of St(a,"figcaption"))l.remove();fs(a)&&Td(a);let s=Ed(a,e);s&&s.text!==o&&r.push({id:Bn(e),kind:"paragraph",html:s.html,text:s.text})}function Dp(t,e,r){let n=St(t,"code")[0]||t,o=String(n.textContent||"").replace(/\r\n?/g,`
`);if(!o.trim())return;let i=$a(n.innerHTML),a=gs(e,o);a&&(i&&(a.html=i),r.push(a))}function Fp(t,e,r){let n=t.cloneNode(!0),o=hs(n.outerHTML);if(!o){Pp(e,"\u5DF2\u8DF3\u8FC7\u4E00\u4E2A\u65E0\u6CD5\u89E3\u6790\u7684\u8868\u683C\u3002");return}let i=ms(e,o);i&&r.push(i)}var us,Cp,Ip,_d,Mp,Fo=nr(()=>{Fn();us=new Set(["h1","h2","h3","h4","h5","h6"]),Cp=new Set(["script","style","noscript","template","head","title","meta","link","base","iframe","frame","frameset","object","embed","applet","form","input","select","textarea","button","audio","video","source","track","canvas","map","area","math","nav"]),Ip=new Set(["div","section","article","main","header","footer","aside","center","details","summary","fieldset","body","html","hgroup","dl"]),_d=new Set([...us,"p","div","section","article","main","header","footer","aside","center","details","summary","fieldset","body","html","hgroup","dl","dt","dd","blockquote","pre","table","ul","ol","li","figure","figcaption","hr","address","picture","svg","img","image"]),Mp=[...us,"p","div","section","article","header","footer","aside","center","details","summary","fieldset","blockquote","ul","ol","li","dl","dt","dd","table","thead","tbody","tfoot","tr","td","th","caption","pre","figure","figcaption","address","hgroup"].join(",")});function ja(t){if(typeof t!="string"||!t)return"";let e=t.split(/[\\/]/).pop()||"",r=/\.([A-Za-z0-9]+)$/.exec(e);return r?r[1].toLowerCase():""}function mr(t){let e=String(t||"").replace(/\\/g,"/"),r=e.lastIndexOf("/");return r>=0?e.slice(r+1):e}function ho(t){let e=String(t||"").replace(/\\/g,"/"),r=e.lastIndexOf("/");return r>0?e.slice(0,r):""}function vs(t){let e=[];for(let r of String(t||"").replace(/\\/g,"/").split("/"))if(!(!r||r===".")){if(r===".."){e.pop();continue}e.push(r)}return e.join("/")}function zo(t){let e=String(t||""),r=e.indexOf("#"),n=r>=0?e.slice(0,r):e,o=r>=0?e.slice(r+1):"";try{o=decodeURIComponent(o)}catch{}let i=n.indexOf("?");return{path:i>=0?n.slice(0,i):n,fragment:o}}function pn(t,e){if(!e)return null;let r=String(e).trim();if(!r||r.startsWith("#")||/^[a-z][a-z0-9+.-]*:/i.test(r)||r.startsWith("//"))return null;let{path:n}=zo(r);if(!n)return null;let o=n;try{o=decodeURIComponent(n)}catch{}o=o.replace(/\\/g,"/");let i=o.startsWith("/")?o.slice(1):t?`${t}/${o}`:o;return vs(i)||null}function Nd(t){let e=new Map,r=[];for(let[n,o]of Object.entries(t||{})){if(!o||/\/$/.test(n))continue;let i=vs(n);if(!i)continue;let a=i.toLowerCase();e.has(a)||(e.set(a,{name:i,bytes:o}),r.push(i))}return{names:r,get(n){let o=vs(n||"");return o&&e.get(o.toLowerCase())||null},has(n){return!!this.get(n)}}}function Bo(t){return zp[ja(t)]||"application/octet-stream"}async function Vr(t){if(!t||typeof t.arrayBuffer!="function")throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u6570\u636E\uFF1A\u8BF7\u9009\u62E9\u4E00\u4E2A\u6709\u6548\u7684\u6587\u6863\u6587\u4EF6\u3002");let e;try{e=await t.arrayBuffer()}catch{throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u6570\u636E\uFF0C\u6587\u4EF6\u53EF\u80FD\u5DF2\u88AB\u79FB\u52A8\u6216\u635F\u574F\u3002")}let r=new Uint8Array(e);if(r.length===0)throw new Error("\u6587\u4EF6\u5185\u5BB9\u4E3A\u7A7A\u3002");return r}function Kr(t=40){let e=[],r=new Set,n=!1;return{warnings:e,warn:i=>{let a=String(i||"").trim();!a||r.has(a)||(r.add(a),e.length<t?e.push(a):n||(n=!0,e.push("\u8FD8\u6709\u66F4\u591A\u89E3\u6790\u8B66\u544A\u672A\u663E\u793A\u3002")))}}}function br(t,e){if(t instanceof Error&&/[\u4e00-\u9fff]/.test(t.message))return t;let r=t instanceof Error?t.message:String(t??""),n=r?`${e}\uFF1A${r}`:`${e}\u3002`;return new Error(/[。！？]$/.test(n)?n:`${n}\u3002`)}function $o(t,e){let r=(Array.isArray(e)?e:[]).filter(i=>i&&Number.isInteger(i.chapterIndex)&&i.chapterIndex>=0&&i.chapterIndex<t.length&&i.title);for(let i=0;i<t.length;i+=1){let a=r.find(l=>l.chapterIndex===i),s=t[i].blocks.find(l=>l.kind==="heading"&&l.text);t[i].title=(a?.title||s?.text||`\u7B2C ${i+1} \u7AE0`).slice(0,120)}if(r.length===0)return t.map((i,a)=>({title:i.title,chapterIndex:a,depth:0}));let n=[],o=new Set;for(let i=0;i<t.length;i+=1){let a=r.filter(s=>s.chapterIndex===i);if(a.length===0){let s={title:t[i].title,chapterIndex:i,depth:0},l=`${i}|${s.title}|0`;o.has(l)||(o.add(l),n.push(s));continue}for(let s of a){let l=Number.isInteger(s.depth)&&s.depth>=0?s.depth:0,d=s.anchor?String(s.anchor).slice(0,300):"",h=`${s.chapterIndex}|${s.title}|${l}|${d}`;o.has(h)||(o.add(h),n.push({title:s.title,chapterIndex:s.chapterIndex,depth:l,...d?{anchor:d}:{}}))}}return n}function Un(t,e="\u672A\u547D\u540D\u6587\u6863"){return mr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||e}function gn(){let t=[];return{urls:t,create(e){let r=URL.createObjectURL(e);return t.push(r),r},add(e){return e&&!t.includes(e)&&t.push(e),e},dispose(){for(;t.length>0;){let e=t.pop();try{URL.revokeObjectURL(e)}catch{}}}}}function mn(t){let e=/^data:([^;,]*)((?:;[^;,]*)*),(.*)$/is.exec(String(t||""));if(!e)return null;let r=e[1]||"application/octet-stream",n=e[2]||"",o=e[3]||"",i=/;base64/i.test(n);try{let a;if(i){let l=o.replace(/\s+/g,"");a=atob(l)}else a=decodeURIComponent(o);let s=new Uint8Array(a.length);for(let l=0;l<a.length;l+=1)s[l]=a.charCodeAt(l)&255;return new Blob([s],{type:r})}catch{return null}}function Ad(t){let e=String(t||"").trim().toLowerCase();return!e||/^(utf-?8|utf8)$/.test(e)?"utf-8":/^utf-?16(le)?$/.test(e)?"utf-16le":/^utf-?16be$/.test(e)?"utf-16be":/^(gb2312|gbk|gb18030|cp936|x-gbk)$/.test(e)?"gb18030":/^(big5|big5-hkscs|cp950)$/.test(e)?"big5":/^(shift_jis|sjis|windows-31j|cp932)$/.test(e)?"shift_jis":/^(euc-kr|ks_c_5601-1987|cp949)$/.test(e)?"euc-kr":/^(iso-8859-1|latin1|windows-1252|cp1252)$/.test(e)?"windows-1252":e}function Hn(t,e,r=!1){return new TextDecoder(e,{fatal:r}).decode(t)}function $p(t){let e=Hn(t.subarray(0,Math.min(t.length,512)),"windows-1252"),r=Bp.exec(e);return r&&(r[1]||r[2])||""}function Yr(t,{defaultEncoding:e="utf-8",sniffDeclaration:r=!0}={}){let n=t instanceof Uint8Array?t:new Uint8Array(t);if(n.length===0)return"";if(n[0]===239&&n[1]===187&&n[2]===191)return Hn(n.subarray(3),"utf-8");if(n[0]===255&&n[1]===254)return Hn(n.subarray(2),"utf-16le");if(n[0]===254&&n[1]===255)return Hn(n.subarray(2),"utf-16be");let o=e||"utf-8";if(r){let i=$p(n);i&&(o=Ad(i))}o=Ad(o);try{return Hn(n,o,!0)}catch{try{return Hn(n,"utf-8",!0)}catch{return Hn(n,"utf-8",!1)}}}function Ga(t){if(!t)return!1;let e=t.slice(0,4096);if(!e)return!1;let r=0;for(let n=0;n<e.length;n+=1){let o=e.charCodeAt(n);(o===65533||o===0||o<9||o>13&&o<32)&&(r+=1)}return r/e.length>.08}var zp,Bp,Wn=nr(()=>{zp={jpg:"image/jpeg",jpeg:"image/jpeg",jpe:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",avif:"image/avif",bmp:"image/bmp",tif:"image/tiff",tiff:"image/tiff",svg:"image/svg+xml",ico:"image/x-icon",jxl:"image/jxl"};Bp=/(?:encoding\s*=\s*["']([A-Za-z0-9._-]+)["'])|(?:charset\s*=\s*["']?([A-Za-z0-9._-]+))/i});function Cd(t){return/^(https?:|mailto:|tel:)/i.test(t)}function ys(t){return/^[a-z][a-z0-9+.-]*:/i.test(t)}function Up(t,e){e&&!t.includes(e)&&t.push(e)}async function Id(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Kr(),i=gn();try{let me=function(c,A){let v=String(c||"").trim();if(!v||Cd(v)||v.startsWith("//")||ys(v))return null;let{path:oe,fragment:ue}=zo(v),le=oe?pn(A,v):null,be=le?z.get(le.toLowerCase()):void 0;return be==null&&le&&(be=se.get(mr(le).toLowerCase())),be==null?null:{chapterIndex:be,anchor:ue}},a=await Vr(t),s;try{s=id(a)}catch{throw new Error("EPUB \u538B\u7F29\u5305\u5DF2\u635F\u574F\uFF0C\u65E0\u6CD5\u89E3\u538B\u3002")}let l=Nd(s);if(l.names.length===0)throw new Error("EPUB \u538B\u7F29\u5305\u4E0D\u5305\u542B\u4EFB\u4F55\u6587\u4EF6\u3002");let d=l.get("META-INF/encryption.xml");if(d){let c=Yr(d.bytes);if(/<encrypteddata/i.test(c)&&/application\/(xhtml\+xml|epub\+zip)/i.test(c))throw new Error("\u8BE5 EPUB \u6587\u4EF6\u53D7 DRM \u4FDD\u62A4\uFF0C\u65E0\u6CD5\u6253\u5F00\u3002")}let h=l.get("META-INF/container.xml");if(!h){let c=l.names.find(A=>/container\.xml$/i.test(A));c&&(h=l.get(c))}if(!h)throw new Error("\u7F3A\u5C11 META-INF/container.xml\uFF0C\u4E0D\u662F\u6709\u6548\u7684 EPUB \u6587\u4EF6\u3002");let g=co(Yr(h.bytes));if(!g)throw new Error("META-INF/container.xml \u683C\u5F0F\u9519\u8BEF\u3002");let f=St(g,"rootfile")[0],p=f?Qe(f,"full-path"):"";if(!p)throw new Error("container.xml \u4E2D\u6CA1\u6709\u6307\u5B9A OPF \u5185\u5BB9\u6E05\u5355\u3002");let S=l.get(p)||l.get(pn("",p));if(!S)throw new Error(`\u627E\u4E0D\u5230 EPUB \u5185\u5BB9\u6E05\u5355\u6587\u4EF6\uFF1A${p}`);let w=ho(S.name),x=co(Yr(S.bytes));if(!x)throw new Error("EPUB \u5185\u5BB9\u6E05\u5355\uFF08OPF\uFF09\u683C\u5F0F\u9519\u8BEF\u3002");let M=Kt(x,"metadata")||x,N=St(M,"title").map(c=>at(c.textContent)).filter(Boolean),R=[];for(let c of St(M,"creator"))Up(R,at(c.textContent));let C=St(M,"language").map(c=>at(c.textContent)).filter(Boolean),L=St(M,"meta").filter(c=>String(Qe(c,"name")||"").toLowerCase()==="cover").map(c=>Qe(c,"content")||"").find(Boolean)||"",P=Kt(x,"manifest");if(!P)throw new Error("OPF \u5185\u5BB9\u6E05\u5355\u7F3A\u5C11 manifest \u5217\u8868\u3002");let m=new Map;for(let c of St(P,"item")){let A=Qe(c,"id");if(!A||m.has(A))continue;let v=Qe(c,"href")||"",oe=pn(w,v);m.set(A,{id:A,href:v,path:oe,mediaType:String(Qe(c,"media-type")||"").toLowerCase(),properties:String(Qe(c,"properties")||"").toLowerCase()})}let _=Kt(x,"spine");if(!_)throw new Error("OPF \u5185\u5BB9\u6E05\u5355\u7F3A\u5C11 spine \u9605\u8BFB\u987A\u5E8F\u3002");let F=St(_,"itemref");if(F.length===0)throw new Error("EPUB \u7684\u9605\u8BFB\u987A\u5E8F\uFF08spine\uFF09\u4E3A\u7A7A\u3002");let V=[],z=new Map,se=new Map;for(let c of F){let A=Qe(c,"idref"),v=A?m.get(A):null;if(!v){o(`\u9605\u8BFB\u987A\u5E8F\u4E2D\u7684\u6761\u76EE\u201C${A||"\u672A\u77E5"}\u201D\u4E0D\u5728\u6E05\u5355\u4E2D\uFF0C\u5DF2\u8DF3\u8FC7\u3002`);continue}if(/\bnav\b/.test(v.properties))continue;if(!v.path){o(`\u7AE0\u8282\u6587\u4EF6\u201C${v.href||v.id}\u201D\u4F4D\u4E8E\u5916\u90E8\u7F51\u7EDC\uFF0C\u5DF2\u8DF3\u8FC7\u3002`);continue}let oe=l.get(v.path);if(!oe){o(`\u627E\u4E0D\u5230\u7AE0\u8282\u6587\u4EF6\uFF1A${v.path}`);continue}let ue=v.mediaType||"",le=Hp.has(ue)||/\.(x?html?|htm)$/i.test(v.path),be=ue.startsWith("image/")||/\.(png|jpe?g|gif|webp|avif|bmp|tiff?|svg)$/i.test(v.path);if(!le&&!be){o(`\u4E0D\u652F\u6301\u7684\u7AE0\u8282\u7C7B\u578B\uFF08${ue||"\u672A\u77E5"}\uFF09\uFF1A${v.path}`);continue}let Ee=V.length;V.push({item:v,entry:oe,isImage:be,chapterIndex:Ee}),z.set(v.path.toLowerCase(),Ee);let Me=mr(v.path).toLowerCase();se.has(Me)||se.set(Me,Ee)}if(V.length===0)throw new Error("EPUB \u4E2D\u6CA1\u6709\u627E\u5230\u53EF\u663E\u793A\u7684\u7AE0\u8282\u5185\u5BB9\u3002");let de=0,q=()=>`b${de+=1}`,X=[];for(let c of V){let{item:A,entry:v,isImage:oe,chapterIndex:ue}=c;if(oe){let De=A.mediaType.startsWith("image/")?A.mediaType:Bo(A.path),ge=i.create(new Blob([v.bytes],{type:De}));X.push({id:`ch${ue}`,title:"",blocks:[{id:q(),kind:"image",src:ge}]});continue}let le=ho(A.path),be=De=>{let ge=String(De||"").trim();if(!ge)return null;if(/^data:/i.test(ge)){let xt=mn(ge);return xt?{src:i.create(xt)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684\u5185\u5D4C\u56FE\u7247\u3002"),null)}if(/^(https?:)?\/\//i.test(ge))return o("\u5DF2\u8DF3\u8FC7\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\uFF08\u907F\u514D\u8DDF\u8E2A\u4E0E\u9690\u79C1\u6CC4\u9732\uFF09\u3002"),null;if(ys(ge))return null;let He=pn(le,ge),Ye=He?l.get(He):null;if(!Ye)return o(`\u627E\u4E0D\u5230\u56FE\u7247\u6587\u4EF6\uFF1A${mr(He||ge)}`),null;let tt=Bo(He);return{src:i.create(new Blob([Ye.bytes],{type:tt}))}},Ee=De=>{let ge=String(De||"").trim();if(!ge)return null;if(Cd(ge))return{external:!0,href:ge};if(ge.startsWith("//")||ys(ge))return null;let{path:He,fragment:Ye}=zo(ge);if(!He)return{chapter:ue,anchor:Ye};let tt=pn(le,ge),xt=tt?z.get(tt.toLowerCase()):void 0;return xt==null&&tt&&(xt=se.get(mr(tt).toLowerCase())),xt==null?null:{chapter:xt,anchor:Ye}},Me="";try{Me=Yr(v.bytes)}catch{o(`\u7B2C ${ue+1} \u7AE0\u7684\u7F16\u7801\u65E0\u6CD5\u8BC6\u522B\uFF0C\u5DF2\u5C3D\u91CF\u6309 UTF-8 \u8BFB\u53D6\u3002`)}let te=co(Me),je=te&&(Kt(te,"body")||te.documentElement)||null,Je=je?null:Xr(Me),et=je||Je?.body||Je?.documentElement||null,We=et?$n(et,{nextId:q,warn:o,chapterIndex:ue,resolveImage:be,resolveLink:Ee}):[];We.length===0&&o(`\u7B2C ${ue+1} \u7AE0\u6CA1\u6709\u53EF\u663E\u793A\u7684\u5185\u5BB9\u3002`),X.push({id:`ch${ue}`,title:"",blocks:We})}let D=[...m.values()].find(c=>/\bnav\b/.test(c.properties)&&c.path),he=Qe(_,"toc"),$=he&&m.get(he)||[...m.values()].find(c=>c.mediaType==="application/x-dtbncx+xml"&&c.path)||null,re=c=>{let A=l.get(c.path);if(!A)return o(`\u627E\u4E0D\u5230 EPUB \u5BFC\u822A\u6587\u4EF6\uFF1A${c.path}`),[];let v=Yr(A.bytes),oe=co(v)||Xr(v);if(!oe)return o("\u65E0\u6CD5\u89E3\u6790 EPUB \u5BFC\u822A\u76EE\u5F55\u3002"),[];let ue=St(oe,"nav"),le=ue.find(Je=>String(Qe(Je,"type")||Qe(Je,"epub:type")||"").toLowerCase().split(/\s+/).includes("toc"))||ue[0]||null;if(!le)return[];let be=Kt(le,"ol")||Kt(le,"ul");if(!be)return[];let Ee=[],Me=ho(c.path),te=z.get(c.path.toLowerCase()),je=(Je,et)=>{for(let We of Array.from(Je.children||[])){if(ar(We)!=="li")continue;let De=null,ge=null;for(let He of Array.from(We.children||[])){let Ye=ar(He);!De&&(Ye==="a"||Ye==="span")&&(De=He),!ge&&(Ye==="ol"||Ye==="ul")&&(ge=He)}if(De&&ar(De)==="a"){let He=at(De.textContent).slice(0,200),Ye=Qe(De,"href")||"",tt=me(Ye,Me);if(!tt&&Ye.startsWith("#")&&te!=null){let{fragment:xt}=zo(Ye);tt={chapterIndex:te,anchor:xt}}He&&tt&&Ee.push({title:He,chapterIndex:tt.chapterIndex,depth:et,...tt.anchor?{anchor:tt.anchor}:{}})}ge&&je(ge,et+1)}};return je(be,0),Ee},ne=c=>{let A=l.get(c.path);if(!A)return o(`\u627E\u4E0D\u5230 EPUB NCX \u76EE\u5F55\u6587\u4EF6\uFF1A${c.path}`),[];let v=Yr(A.bytes),oe=co(v)||Xr(v);if(!oe)return o("\u65E0\u6CD5\u89E3\u6790 EPUB NCX \u76EE\u5F55\u3002"),[];let ue=[],le=ho(c.path);for(let be of St(oe,"navpoint")){let Ee=Kt(be,"navlabel"),Me=Ee?Kt(Ee,"text"):Kt(be,"text"),te=at(Me?.textContent||"").slice(0,200),je=Array.from(be.children||[]).find(We=>ar(We)==="content")||Kt(be,"content"),Je=me(Qe(je,"src")||"",le);if(!te||!Je)continue;let et=0;for(let We=be.parentNode;We;We=We.parentNode)ar(We)==="navpoint"&&(et+=1);ue.push({title:te,chapterIndex:Je.chapterIndex,depth:et,...Je.anchor?{anchor:Je.anchor}:{}})}return ue},ye=[];D&&(ye=re(D),ye.length===0&&o("EPUB \u5BFC\u822A\u6587\u4EF6\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u5F55\u9879\u3002"));let Q=[];ye.length===0&&$&&(Q=ne($));let Be=ye.length>0?ye:Q;Be.length===0&&o("\u672A\u627E\u5230 EPUB \u76EE\u5F55\uFF0C\u5DF2\u6309\u7AE0\u8282\u6807\u9898\u751F\u6210\u3002");let $e=$o(X,Be),Pe="",ct=[...m.values()].find(c=>/\bcover-image\b/.test(c.properties)&&c.path);if(ct)Pe=ct.path;else if(L&&m.get(L)?.path)Pe=m.get(L).path;else{let c=Kt(x,"guide");if(c){let A=St(c,"reference").find(v=>/\bcover\b/.test(String(Qe(v,"type")||"").toLowerCase()));A&&(Pe=pn(w,Qe(A,"href")||"")||"")}}let Oe="";if(Pe){let c=l.get(Pe);if(c){let A=Bo(Pe);if(A.startsWith("image/"))Oe=i.create(new Blob([c.bytes],{type:A}));else if(/\.(x?html?|htm)$/i.test(Pe)){let v=Xr(Yr(c.bytes)),oe=zn(v?.body||v?.documentElement||v)[0],ue=oe&&(Qe(oe,"src")||Qe(oe,"xlink:href"))||"",le=ue?pn(ho(Pe),ue):null,be=le?l.get(le):null;be&&(Oe=i.create(new Blob([be.bytes],{type:Bo(le)})))}}}let u={title:N[0]||Un(r),chapters:X,toc:$e,warnings:n,dispose:()=>i.dispose()};return R.length>0&&(u.author=R.join(", ")),C.length>0&&(u.language=C[0]),Oe&&(u.cover=Oe),u}catch(a){throw i.dispose(),br(a,"\u65E0\u6CD5\u89E3\u6790 EPUB \u6587\u4EF6")}}var Hp,Md=nr(()=>{ts();Fn();Fo();Wn();Hp=new Set(["application/xhtml+xml","text/html","application/xml","text/xml","text/xhtml"])});function Wp(t){return mr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u6863"}async function Ho(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Kr(),i=gn();try{let a=await Vr(t),s=Yr(a),l=Xr(s);if(!l)throw new Error("HTML \u6587\u4EF6\u683C\u5F0F\u9519\u8BEF\uFF0C\u65E0\u6CD5\u89E3\u6790\u3002");let d=l.body||l.documentElement;if(!d)throw new Error("HTML \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let h=0,f=$n(d,{nextId:()=>`b${h+=1}`,warn:o,resolveImage:N=>{let R=String(N||"").trim();if(!R)return null;if(/^data:/i.test(R)){let C=mn(R);return C?{src:i.create(C)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684\u5185\u5D4C\u56FE\u7247\u3002"),null)}return/^(https?:)?\/\//i.test(R)?(o("\u5DF2\u8DF3\u8FC7\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\uFF08\u907F\u514D\u8DDF\u8E2A\u4E0E\u9690\u79C1\u6CC4\u9732\uFF09\u3002"),null):(o("\u5DF2\u8DF3\u8FC7 HTML \u4E2D\u7684\u672C\u5730\u56FE\u7247\uFF08\u65E0\u6CD5\u5B9A\u4F4D\u56FE\u7247\u6587\u4EF6\uFF09\u3002"),null)},resolveLink:N=>{let R=String(N||"").trim();return R?/^(https?:\/\/|mailto:)/i.test(R)?{external:!0,href:R}:R.startsWith("#")?{chapter:0,anchor:R.slice(1)}:null:null}});if(f.length===0)throw new Error("HTML \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let p=Kt(l,"title"),S=f.find(N=>N.kind==="heading"&&N.text),w=at(p?.textContent||"")||S?.text||Wp(r),x=Qe(l.documentElement,"lang")||"",T=[];for(let N of St(l,"meta"))if(String(Qe(N,"name")||"").toLowerCase()==="author"){let R=at(Qe(N,"content")||"");R&&!T.includes(R)&&T.push(R)}let M={title:w,chapters:[{id:"ch0",title:w,blocks:f}],toc:[{title:w,chapterIndex:0,depth:0}],warnings:n,dispose:()=>i.dispose()};return x&&(M.language=x),T.length>0&&(M.author=T.join(", ")),M}catch(a){throw i.dispose(),br(a,"\u65E0\u6CD5\u89E3\u6790 HTML \u6587\u4EF6")}}var Rd=nr(()=>{Fn();Fo();Wn()});function Pd(t){return/[\u3000-\u303f\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uffef\uac00-\ud7af]/.test(t)}function Od(t){let e="";for(let r of t){let n=String(r).trim();if(!n)continue;if(!e){e=n;continue}let o=e[e.length-1],i=n[0];e+=Pd(o)&&Pd(i)?n:` ${n}`}return e}function Kp(t){let e=String(t||"").trim();if(!e||e.length>Vp)return!1;if(Gp.test(e)||qp.test(e))return!/[，,。；;]/.test(e);if(Xp.test(e)){let r=e.split(/\s+/).filter(Boolean).length;return!(r>14||/\.$/u.test(e)&&r>3)}return!1}function ws(t){if(!t||t.length===0)throw new Error("\u6587\u672C\u6587\u4EF6\u5185\u5BB9\u4E3A\u7A7A\u3002");if(t[0]===239&&t[1]===187&&t[2]===191)return{text:new TextDecoder("utf-8").decode(t.subarray(3)),encoding:"utf-8"};if(t[0]===255&&t[1]===254)return{text:new TextDecoder("utf-16le").decode(t.subarray(2)),encoding:"utf-16le"};if(t[0]===254&&t[1]===255)return{text:new TextDecoder("utf-16be").decode(t.subarray(2)),encoding:"utf-16be"};let e=Math.min(t.length,4096),r=0,n=0;for(let i=0;i<e;i+=2)t[i]===0&&(r+=1),i+1<e&&t[i+1]===0&&(n+=1);let o=Math.ceil(e/2);if(o>4&&n/o>.35&&r/o<.05)return{text:new TextDecoder("utf-16le").decode(t),encoding:"utf-16le"};if(o>4&&r/o>.35&&n/o<.05)return{text:new TextDecoder("utf-16be").decode(t),encoding:"utf-16be"};try{return{text:new TextDecoder("utf-8",{fatal:!0}).decode(t),encoding:"utf-8"}}catch{}try{return{text:new TextDecoder("gb18030",{fatal:!0}).decode(t),encoding:"gb18030"}}catch{}return{text:new TextDecoder("utf-8").decode(t),encoding:"utf-8"}}function Yp(t){let e=[],r=[],n=()=>{r.length>0&&(e.push(r),r=[])};for(let o of t)String(o).trim()?r.push(o):n();return n(),e}function Zp(t){let e=t.map(n=>n.trim()).filter(Boolean);return e.length<2?!1:e.filter(n=>/[。！？!?…"”’」』）)]$/.test(n)).length/e.length>=.5}function Qp(t){let e=t.map(o=>String(o)),r=Yp(e);if(r.length>1)return r.map(o=>Od(o)).filter(Boolean);let n=e.map(o=>o.trim()).filter(Boolean);return n.length<=1||Zp(n)?n:r.map(o=>Od(o)).filter(Boolean)}function Jp(t,{fallbackTitle:e="\u6B63\u6587"}={}){let n=String(t||"").replace(/\r\n?/g,`
`).replace(/\u0000/g,"").split(`
`),o=[],i={title:"",lines:[],heading:""},a=()=>{(i.heading||i.lines.some(s=>s.trim()))&&o.push(i),i={title:"",lines:[],heading:""}};for(let s of n){if(Kp(s)){a();let l=s.trim();i={title:l,lines:[],heading:l};continue}i.lines.push(s)}return a(),o.length===0?[{title:e,lines:n,heading:""}]:o}function ks(t,{nextId:e,title:r="\u6B63\u6587"}={}){let n=Jp(t,{fallbackTitle:r}),o=a=>a.lines.some(s=>String(s).trim()),i=[];for(let a=0;a<n.length;a+=1){if(o(n[a])){i.push(n[a]);continue}let s=a;for(;s+1<n.length&&!o(n[s+1]);)s+=1;if(s-a+1>=3){a=s;continue}i.push(...n.slice(a,s+1)),a=s}return n=i.length>0?i:n,n.map((a,s)=>{let l=[];a.heading&&l.push({id:e(),kind:"heading",level:1,html:Dn(a.heading),text:at(a.heading)});for(let d of Qp(a.lines))l.push({id:e(),kind:"paragraph",html:Dn(d),text:d});return{id:`ch${s}`,title:a.title||r||`\u7B2C ${s+1} \u7AE0`,blocks:l}})}function eg(t){return mr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u672C"}async function _s(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Kr();try{let i=await Vr(t),{text:a,encoding:s}=ws(i);if(Ga(a))throw new Error("\u6587\u672C\u6587\u4EF6\u5305\u542B\u5927\u91CF\u65E0\u6CD5\u8BC6\u522B\u7684\u5B57\u7B26\uFF0C\u53EF\u80FD\u4E0D\u662F\u7EAF\u6587\u672C\u6587\u4EF6\u3002");s==="gb18030"&&o("\u5DF2\u6309 GB18030 \u7F16\u7801\u8BFB\u53D6\u6587\u672C\uFF08\u975E UTF-8\uFF09\u3002");let l=eg(r),d=0,g=ks(a,{nextId:()=>`b${d+=1}`,title:l});if(g.length===0||g.every(p=>p.blocks.length===0))throw new Error("\u6587\u672C\u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");g[0].title||(g[0].title=l);let f=g.map((p,S)=>({title:p.title,chapterIndex:S,depth:0}));return{title:l,chapters:g,toc:f,warnings:n,encoding:s,dispose:()=>{}}}catch(i){throw br(i,"\u65E0\u6CD5\u89E3\u6790\u6587\u672C\u6587\u4EF6")}}var jp,Gp,qp,Xp,Vp,qa=nr(()=>{Fn();Wn();jp="[0-9\uFF10-\uFF19\u96F6\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u767E\u5343\u4E07\u4E24]",Gp=new RegExp(`^\\s*(\u7B2C\\s*${jp}+\\s*[\u7AE0\u7BC0\u8282\u56DE\u5377\u7BC7])(?:[\\s:\uFF1A\xB7\u3001.\uFF0E\u2014\u2013-].*)?$`),qp=/^\s*(序章|楔子|引子|前言|序言|后记|後記|尾声|尾聲|终章|終章|番外(?:篇)?)(?:[\s:：·、.．—–-].*)?$/,Xp=/^\s*((?:chapter|part|book|section)\s+(?:[0-9]+|[ivxlcdm]{1,8}|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty))(?:[.:：\s—–-].*)?$/i,Vp=72});function ng(t){let e=String(t||"").trim();return e&&(/^(https?:\/\/|mailto:)/i.test(e)||e.startsWith("#"))?e:""}function Ts(t){let e=Dn(String(t??"").trim()),r=[],n=o=>{let i=`\0${r.length}\0`;return r.push(o),i};return e=e.replace(/`([^`]+)`/g,(o,i)=>n(`<code>${i}</code>`)),e=e.replace(tg,(o,i,a)=>{let s=ng(a);return s?n(`<a href="${s}">${i}</a>`):i}),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/__([^_]+)__/g,"<strong>$1</strong>").replace(/~~([^~]+)~~/g,"<s>$1</s>").replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g,"$1<em>$2</em>").replace(/(^|[^_])_([^_\n]+)_(?!_)/g,"$1<em>$2</em>"),e=e.replace(/\u0000(\d+)\u0000/g,(o,i)=>r[Number(i)]??""),e}function og(t){return mr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u6863"}function Uo(t){return String(t).trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(e=>e.trim())}function ag(t){if(!/\|/.test(t))return!1;let e=Uo(t);return e.length>0&&e.every(r=>/^:?-{3,}:?$/.test(r))}function Dd(t,e){return!!e&&t.includes("|")&&ag(e)&&Uo(t).length===Uo(e).length}function Ld(t,e){return!!(/^\s{0,3}(#{1,6}\s|>|(?:```|~~~))/.test(t)||/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(t)||/^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/.test(t)||Dd(t,e))}function ig(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Kr(),i=gn(),a=0,s={nextId:()=>`b${a+=1}`,warn:o,resolveLink:x=>{let T=String(x||"").trim();return T?/^(https?:\/\/|mailto:)/i.test(T)?{external:!0,href:T}:T.startsWith("#")?{chapter:0,anchor:T.slice(1)}:null:null}},l=[],d=[];function h(x){let T=String(x??""),M=[];return T=T.replace(rg,(N,R,C)=>{let E=at(R);if(/^data:image\//i.test(C)){let L=mn(C);if(L){let P=bs(s,{src:i.create(L),alt:E});P&&M.push(P)}else o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684 Markdown \u5185\u5D4C\u56FE\u7247\u3002")}else/^https?:/i.test(C)?o("\u5DF2\u8DF3\u8FC7 Markdown \u4E2D\u7684\u5916\u90E8\u56FE\u7247\uFF08\u907F\u514D\u7F51\u7EDC\u8DDF\u8E2A\uFF09\u3002"):o("\u5DF2\u8DF3\u8FC7 Markdown \u4E2D\u7684\u672C\u5730\u56FE\u7247\uFF08\u65E0\u6CD5\u5B9A\u4F4D\u56FE\u7247\u6587\u4EF6\uFF09\u3002");return E?` ${E} `:" "}),{html:Ts(T),images:M}}function g(x,T,M={}){let{html:N,images:R}=h(T),C=Wa(s,x,N,M);C&&l.push(C);for(let E of R)l.push(E);return!!C}let f=String(t??"").replace(/\r\n?/g,`
`).replace(/\u0000/g,"").split(`
`),p=0;for(;p<f.length;){let x=f[p];if(!x.trim()){p+=1;continue}let T=/^\s*(`{3,}|~{3,})\s*([A-Za-z0-9_+#.-]*)\s*$/.exec(x);if(T){let E=T[1],L=[];p+=1;let P=new RegExp(`^\\s*${E[0]==="`"?"`":"~"}{${E.length},}\\s*$`);for(;p<f.length;){if(P.test(f[p])){p+=1;break}L.push(f[p]),p+=1}let m=gs(s,L.join(`
`));m&&l.push(m);continue}let M=/^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(x);if(M){g("heading",M[2],{level:M[1].length}),p+=1;continue}if(/^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/.test(x)){l.push(xs(s)),p+=1;continue}if(Dd(x,f[p+1])){let E=Uo(x);p+=2;let L=[];for(;p<f.length&&f[p].includes("|")&&f[p].trim();)L.push(Uo(f[p])),p+=1;let P=`<thead><tr>${E.map(F=>`<th>${Ts(F)}</th>`).join("")}</tr></thead>`,m=L.length>0?`<tbody>${L.map(F=>`<tr>${E.map((V,z)=>`<td>${Ts(F[z]||"")}</td>`).join("")}</tr>`).join("")}</tbody>`:"",_=ms(s,`<table>${P}${m}</table>`);_&&l.push(_);continue}if(/^\s{0,3}>/.test(x)){let E=[];for(;p<f.length&&/^\s{0,3}>/.test(f[p]);)E.push(f[p].replace(/^\s{0,3}>\s?/,"")),p+=1;let L=[],P=[];for(let _ of E){let F=h(_);F.html&&L.push(F.html),P.push(...F.images)}let m=Wa(s,"quote",L.join("<br>"));m&&l.push(m);for(let _ of P)l.push(_);continue}if(/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(x)){for(;p<f.length;){let E=/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+(.*)$/.exec(f[p]);if(!E)break;for(g("list-item",E[1]),p+=1;p<f.length&&/^\s{2,}\S/.test(f[p])&&!/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(f[p])&&!Ld(f[p],f[p+1]);)p+=1}continue}let N=[];for(;p<f.length&&f[p].trim()&&!Ld(f[p],f[p+1]);)N.push(f[p]),p+=1;if(N.length===0){p+=1;continue}let R=[];for(let E of N){let L=/(?: {2,}|\\)$/.test(E),P=h(E.replace(/(?: {2,}|\\)$/,""));P.html&&R.push(L?`${P.html}<br>`:P.html),d.push(...P.images)}let C=Wa(s,"paragraph",R.join(" "));for(C&&l.push(C);d.length>0;)l.push(d.shift())}let w=l.find(x=>x.kind==="heading"&&x.text)?.text||og(r);if(l.length===0)throw i.dispose(),new Error("Markdown \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");return{title:w,chapters:[{id:"ch0",title:w,blocks:l}],toc:[{title:w,chapterIndex:0,depth:0}],warnings:n,dispose:()=>i.dispose()}}async function Wo(t,e={}){try{let r=await Vr(t),{text:n}=ws(r);return ig(n,e)}catch(r){throw br(r,"\u65E0\u6CD5\u89E3\u6790 Markdown \u6587\u4EF6")}}var tg,rg,Fd=nr(()=>{Fn();Fo();Wn();qa();tg=/\[([^\]]+)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g,rg=/!\[([^\]]*)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g});var $d=ci((rx,Bd)=>{"use strict";function Zr(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function zd(t,e){for(var r="",n=0,o=-1,i=0,a,s=0;s<=t.length;++s){if(s<t.length)a=t.charCodeAt(s);else{if(a===47)break;a=47}if(a===47){if(!(o===s-1||i===1))if(o!==s-1&&i===2){if(r.length<2||n!==2||r.charCodeAt(r.length-1)!==46||r.charCodeAt(r.length-2)!==46){if(r.length>2){var l=r.lastIndexOf("/");if(l!==r.length-1){l===-1?(r="",n=0):(r=r.slice(0,l),n=r.length-1-r.lastIndexOf("/")),o=s,i=0;continue}}else if(r.length===2||r.length===1){r="",n=0,o=s,i=0;continue}}e&&(r.length>0?r+="/..":r="..",n=2)}else r.length>0?r+="/"+t.slice(o+1,s):r=t.slice(o+1,s),n=s-o-1;o=s,i=0}else a===46&&i!==-1?++i:i=-1}return r}function sg(t,e){var r=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+n:r+t+n:n}var uo={resolve:function(){for(var e="",r=!1,n,o=arguments.length-1;o>=-1&&!r;o--){var i;o>=0?i=arguments[o]:(n===void 0&&(n=process.cwd()),i=n),Zr(i),i.length!==0&&(e=i+"/"+e,r=i.charCodeAt(0)===47)}return e=zd(e,!r),r?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(Zr(e),e.length===0)return".";var r=e.charCodeAt(0)===47,n=e.charCodeAt(e.length-1)===47;return e=zd(e,!r),e.length===0&&!r&&(e="."),e.length>0&&n&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return Zr(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,r=0;r<arguments.length;++r){var n=arguments[r];Zr(n),n.length>0&&(e===void 0?e=n:e+="/"+n)}return e===void 0?".":uo.normalize(e)},relative:function(e,r){if(Zr(e),Zr(r),e===r||(e=uo.resolve(e),r=uo.resolve(r),e===r))return"";for(var n=1;n<e.length&&e.charCodeAt(n)===47;++n);for(var o=e.length,i=o-n,a=1;a<r.length&&r.charCodeAt(a)===47;++a);for(var s=r.length,l=s-a,d=i<l?i:l,h=-1,g=0;g<=d;++g){if(g===d){if(l>d){if(r.charCodeAt(a+g)===47)return r.slice(a+g+1);if(g===0)return r.slice(a+g)}else i>d&&(e.charCodeAt(n+g)===47?h=g:g===0&&(h=0));break}var f=e.charCodeAt(n+g),p=r.charCodeAt(a+g);if(f!==p)break;f===47&&(h=g)}var S="";for(g=n+h+1;g<=o;++g)(g===o||e.charCodeAt(g)===47)&&(S.length===0?S+="..":S+="/..");return S.length>0?S+r.slice(a+h):(a+=h,r.charCodeAt(a)===47&&++a,r.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(Zr(e),e.length===0)return".";for(var r=e.charCodeAt(0),n=r===47,o=-1,i=!0,a=e.length-1;a>=1;--a)if(r=e.charCodeAt(a),r===47){if(!i){o=a;break}}else i=!1;return o===-1?n?"/":".":n&&o===1?"//":e.slice(0,o)},basename:function(e,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');Zr(e);var n=0,o=-1,i=!0,a;if(r!==void 0&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var s=r.length-1,l=-1;for(a=e.length-1;a>=0;--a){var d=e.charCodeAt(a);if(d===47){if(!i){n=a+1;break}}else l===-1&&(i=!1,l=a+1),s>=0&&(d===r.charCodeAt(s)?--s===-1&&(o=a):(s=-1,o=l))}return n===o?o=l:o===-1&&(o=e.length),e.slice(n,o)}else{for(a=e.length-1;a>=0;--a)if(e.charCodeAt(a)===47){if(!i){n=a+1;break}}else o===-1&&(i=!1,o=a+1);return o===-1?"":e.slice(n,o)}},extname:function(e){Zr(e);for(var r=-1,n=0,o=-1,i=!0,a=0,s=e.length-1;s>=0;--s){var l=e.charCodeAt(s);if(l===47){if(!i){n=s+1;break}continue}o===-1&&(i=!1,o=s+1),l===46?r===-1?r=s:a!==1&&(a=1):r!==-1&&(a=-1)}return r===-1||o===-1||a===0||a===1&&r===o-1&&r===n+1?"":e.slice(r,o)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return sg("/",e)},parse:function(e){Zr(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return r;var n=e.charCodeAt(0),o=n===47,i;o?(r.root="/",i=1):i=0;for(var a=-1,s=0,l=-1,d=!0,h=e.length-1,g=0;h>=i;--h){if(n=e.charCodeAt(h),n===47){if(!d){s=h+1;break}continue}l===-1&&(d=!1,l=h+1),n===46?a===-1?a=h:g!==1&&(g=1):a!==-1&&(g=-1)}return a===-1||l===-1||g===0||g===1&&a===l-1&&a===s+1?l!==-1&&(s===0&&o?r.base=r.name=e.slice(1,l):r.base=r.name=e.slice(s,l)):(s===0&&o?(r.name=e.slice(1,a),r.base=e.slice(1,l)):(r.name=e.slice(s,a),r.base=e.slice(s,l)),r.ext=e.slice(a,l)),s>0?r.dir=e.slice(0,s-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};uo.posix=uo;Bd.exports=uo});var Zd=ci((nx,Ss)=>{"use strict";var fo=typeof Reflect=="object"?Reflect:null,Hd=fo&&typeof fo.apply=="function"?fo.apply:function(e,r,n){return Function.prototype.apply.call(e,r,n)},Xa;fo&&typeof fo.ownKeys=="function"?Xa=fo.ownKeys:Object.getOwnPropertySymbols?Xa=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Xa=function(e){return Object.getOwnPropertyNames(e)};function lg(t){console&&console.warn&&console.warn(t)}var Wd=Number.isNaN||function(e){return e!==e};function it(){it.init.call(this)}Ss.exports=it;Ss.exports.once=ug;it.EventEmitter=it;it.prototype._events=void 0;it.prototype._eventsCount=0;it.prototype._maxListeners=void 0;var Ud=10;function Va(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(it,"defaultMaxListeners",{enumerable:!0,get:function(){return Ud},set:function(t){if(typeof t!="number"||t<0||Wd(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");Ud=t}});it.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};it.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||Wd(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function jd(t){return t._maxListeners===void 0?it.defaultMaxListeners:t._maxListeners}it.prototype.getMaxListeners=function(){return jd(this)};it.prototype.emit=function(e){for(var r=[],n=1;n<arguments.length;n++)r.push(arguments[n]);var o=e==="error",i=this._events;if(i!==void 0)o=o&&i.error===void 0;else if(!o)return!1;if(o){var a;if(r.length>0&&(a=r[0]),a instanceof Error)throw a;var s=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var l=i[e];if(l===void 0)return!1;if(typeof l=="function")Hd(l,this,r);else for(var d=l.length,h=Kd(l,d),n=0;n<d;++n)Hd(h[n],this,r);return!0};function Gd(t,e,r,n){var o,i,a;if(Va(r),i=t._events,i===void 0?(i=t._events=Object.create(null),t._eventsCount=0):(i.newListener!==void 0&&(t.emit("newListener",e,r.listener?r.listener:r),i=t._events),a=i[e]),a===void 0)a=i[e]=r,++t._eventsCount;else if(typeof a=="function"?a=i[e]=n?[r,a]:[a,r]:n?a.unshift(r):a.push(r),o=jd(t),o>0&&a.length>o&&!a.warned){a.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=t,s.type=e,s.count=a.length,lg(s)}return t}it.prototype.addListener=function(e,r){return Gd(this,e,r,!1)};it.prototype.on=it.prototype.addListener;it.prototype.prependListener=function(e,r){return Gd(this,e,r,!0)};function cg(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function qd(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},o=cg.bind(n);return o.listener=r,n.wrapFn=o,o}it.prototype.once=function(e,r){return Va(r),this.on(e,qd(this,e,r)),this};it.prototype.prependOnceListener=function(e,r){return Va(r),this.prependListener(e,qd(this,e,r)),this};it.prototype.removeListener=function(e,r){var n,o,i,a,s;if(Va(r),o=this._events,o===void 0)return this;if(n=o[e],n===void 0)return this;if(n===r||n.listener===r)--this._eventsCount===0?this._events=Object.create(null):(delete o[e],o.removeListener&&this.emit("removeListener",e,n.listener||r));else if(typeof n!="function"){for(i=-1,a=n.length-1;a>=0;a--)if(n[a]===r||n[a].listener===r){s=n[a].listener,i=a;break}if(i<0)return this;i===0?n.shift():dg(n,i),n.length===1&&(o[e]=n[0]),o.removeListener!==void 0&&this.emit("removeListener",e,s||r)}return this};it.prototype.off=it.prototype.removeListener;it.prototype.removeAllListeners=function(e){var r,n,o;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var i=Object.keys(n),a;for(o=0;o<i.length;++o)a=i[o],a!=="removeListener"&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(r=n[e],typeof r=="function")this.removeListener(e,r);else if(r!==void 0)for(o=r.length-1;o>=0;o--)this.removeListener(e,r[o]);return this};function Xd(t,e,r){var n=t._events;if(n===void 0)return[];var o=n[e];return o===void 0?[]:typeof o=="function"?r?[o.listener||o]:[o]:r?hg(o):Kd(o,o.length)}it.prototype.listeners=function(e){return Xd(this,e,!0)};it.prototype.rawListeners=function(e){return Xd(this,e,!1)};it.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):Vd.call(t,e)};it.prototype.listenerCount=Vd;function Vd(t){var e=this._events;if(e!==void 0){var r=e[t];if(typeof r=="function")return 1;if(r!==void 0)return r.length}return 0}it.prototype.eventNames=function(){return this._eventsCount>0?Xa(this._events):[]};function Kd(t,e){for(var r=new Array(e),n=0;n<e;++n)r[n]=t[n];return r}function dg(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function hg(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}function ug(t,e){return new Promise(function(r,n){function o(a){t.removeListener(e,i),n(a)}function i(){typeof t.removeListener=="function"&&t.removeListener("error",o),r([].slice.call(arguments))}Yd(t,e,i,{once:!0}),e!=="error"&&fg(t,o,{once:!0})})}function fg(t,e,r){typeof t.on=="function"&&Yd(t,"error",e,r)}function Yd(t,e,r,n){if(typeof t.on=="function")n.once?t.once(e,r):t.on(e,r);else if(typeof t.addEventListener=="function")t.addEventListener(e,function o(i){n.once&&t.removeEventListener(e,o),r(i)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}});var Qd=ci(Ka=>{(function(t){t.parser=function(u,c){return new r(u,c)},t.SAXParser=r,t.SAXStream=h,t.createStream=l,t.MAX_BUFFER_LENGTH=64*1024;var e=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];t.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function r(u,c){if(!(this instanceof r))return new r(u,c);var A=this;o(A),A.q=A.c="",A.bufferCheckPosition=t.MAX_BUFFER_LENGTH,A.encoding=null,A.opt=c||{},A.opt.lowercase=A.opt.lowercase||A.opt.lowercasetags,A.looseCase=A.opt.lowercase?"toLowerCase":"toUpperCase",A.opt.maxEntityCount=A.opt.maxEntityCount||512,A.opt.maxEntityDepth=A.opt.maxEntityDepth||4,A.entityCount=A.entityDepth=0,A.tags=[],A.closed=A.closedRoot=A.sawRoot=!1,A.tag=A.error=null,A.strict=!!u,A.noscript=!!(u||A.opt.noscript),A.state=m.BEGIN,A.strictEntities=A.opt.strictEntities,A.ENTITIES=A.strictEntities?Object.create(t.XML_ENTITIES):Object.create(t.ENTITIES),A.attribList=[],A.opt.xmlns&&(A.ns=Object.create(w)),A.opt.unquotedAttributeValues===void 0&&(A.opt.unquotedAttributeValues=!u),A.trackPosition=A.opt.position!==!1,A.trackPosition&&(A.position=A.line=A.column=0),F(A,"onready")}Object.create||(Object.create=function(u){function c(){}c.prototype=u;var A=new c;return A}),Object.keys||(Object.keys=function(u){var c=[];for(var A in u)u.hasOwnProperty(A)&&c.push(A);return c});function n(u){for(var c=Math.max(t.MAX_BUFFER_LENGTH,10),A=0,v=0,oe=e.length;v<oe;v++){var ue=u[e[v]].length;if(ue>c)switch(e[v]){case"textNode":me(u);break;case"cdata":q(u,"oncdata",u.cdata),u.cdata="";break;case"script":q(u,"onscript",u.script),u.script="";break;default:D(u,"Max buffer length exceeded: "+e[v])}A=Math.max(A,ue)}var le=t.MAX_BUFFER_LENGTH-A;u.bufferCheckPosition=le+u.position}function o(u){for(var c=0,A=e.length;c<A;c++)u[e[c]]=""}function i(u){me(u),u.cdata!==""&&(q(u,"oncdata",u.cdata),u.cdata=""),u.script!==""&&(q(u,"onscript",u.script),u.script="")}r.prototype={end:function(){he(this)},write:ut,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){i(this)}};var a;try{a=require("stream").Stream}catch{a=function(){}}a||(a=function(){});var s=t.EVENTS.filter(function(u){return u!=="error"&&u!=="end"});function l(u,c){return new h(u,c)}function d(u,c){if(u.length>=2){if(u[0]===255&&u[1]===254)return"utf-16le";if(u[0]===254&&u[1]===255)return"utf-16be"}return u.length>=3&&u[0]===239&&u[1]===187&&u[2]===191?"utf8":u.length>=4?u[0]===60&&u[1]===0&&u[2]===63&&u[3]===0?"utf-16le":u[0]===0&&u[1]===60&&u[2]===0&&u[3]===63?"utf-16be":"utf8":c?"utf8":null}function h(u,c){if(!(this instanceof h))return new h(u,c);a.apply(this),this._parser=new r(u,c),this.writable=!0,this.readable=!0;var A=this;this._parser.onend=function(){A.emit("end")},this._parser.onerror=function(v){A.emit("error",v),A._parser.error=null},this._decoder=null,this._decoderBuffer=null,s.forEach(function(v){Object.defineProperty(A,"on"+v,{get:function(){return A._parser["on"+v]},set:function(oe){if(!oe)return A.removeAllListeners(v),A._parser["on"+v]=oe,oe;A.on(v,oe)},enumerable:!0,configurable:!1})})}h.prototype=Object.create(a.prototype,{constructor:{value:h}}),h.prototype._decodeBuffer=function(u,c){if(this._decoderBuffer&&(u=Buffer.concat([this._decoderBuffer,u]),this._decoderBuffer=null),!this._decoder){var A=d(u,c);if(!A)return this._decoderBuffer=u,"";this._parser.encoding=A,this._decoder=new TextDecoder(A)}return this._decoder.decode(u,{stream:!c})},h.prototype.write=function(u){if(typeof Buffer=="function"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(u))u=this._decodeBuffer(u,!1);else if(this._decoderBuffer){var c=this._decodeBuffer(Buffer.alloc(0),!0);c&&(this._parser.write(c),this.emit("data",c))}return this._parser.write(u.toString()),this.emit("data",u),!0},h.prototype.end=function(u){if(u&&u.length&&this.write(u),this._decoderBuffer){var c=this._decodeBuffer(Buffer.alloc(0),!0);c&&(this._parser.write(c),this.emit("data",c))}else if(this._decoder){var A=this._decoder.decode();A&&(this._parser.write(A),this.emit("data",A))}return this._parser.end(),!0},h.prototype.on=function(u,c){var A=this;return!A._parser["on"+u]&&s.indexOf(u)!==-1&&(A._parser["on"+u]=function(){var v=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);v.splice(0,0,u),A.emit.apply(A,v)}),a.prototype.on.call(A,u,c)};var g=/^\[CDATA\[$/i,f=/^DOCTYPE$/i,p="http://www.w3.org/XML/1998/namespace",S="http://www.w3.org/2000/xmlns/",w={xml:p,xmlns:S},x=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,T=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,M=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,N=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function R(u){return u===" "||u===`
`||u==="\r"||u==="	"}function C(u){return u==='"'||u==="'"}function E(u){return u===">"||R(u)}function L(u,c){return u.test(c)}function P(u,c){return!L(u,c)}var m=0;t.STATE={BEGIN:m++,BEGIN_WHITESPACE:m++,TEXT:m++,TEXT_ENTITY:m++,OPEN_WAKA:m++,SGML_DECL:m++,SGML_DECL_QUOTED:m++,DOCTYPE:m++,DOCTYPE_QUOTED:m++,DOCTYPE_DTD:m++,DOCTYPE_DTD_QUOTED:m++,COMMENT_STARTING:m++,COMMENT:m++,COMMENT_ENDING:m++,COMMENT_ENDED:m++,CDATA:m++,CDATA_ENDING:m++,CDATA_ENDING_2:m++,PROC_INST:m++,PROC_INST_BODY:m++,PROC_INST_ENDING:m++,OPEN_TAG:m++,OPEN_TAG_SLASH:m++,ATTRIB:m++,ATTRIB_NAME:m++,ATTRIB_NAME_SAW_WHITE:m++,ATTRIB_VALUE:m++,ATTRIB_VALUE_QUOTED:m++,ATTRIB_VALUE_CLOSED:m++,ATTRIB_VALUE_UNQUOTED:m++,ATTRIB_VALUE_ENTITY_Q:m++,ATTRIB_VALUE_ENTITY_U:m++,CLOSE_TAG:m++,CLOSE_TAG_SAW_WHITE:m++,SCRIPT:m++,SCRIPT_ENDING:m++},t.XML_ENTITIES=Object.assign(Object.create(null),{amp:"&",gt:">",lt:"<",quot:'"',apos:"'"}),t.ENTITIES=Object.assign(Object.create(null),{amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830}),Object.keys(t.ENTITIES).forEach(function(u){var c=t.ENTITIES[u],A=typeof c=="number"?String.fromCharCode(c):c;t.ENTITIES[u]=A});for(var _ in t.STATE)t.STATE[t.STATE[_]]=_;m=t.STATE;function F(u,c,A){u[c]&&u[c](A)}function V(u){var c=u&&u.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);return c?c[2]:null}function z(u){return u?u.toLowerCase().replace(/[^a-z0-9]/g,""):null}function se(u,c){let A=z(u),v=z(c);return!A||!v?!0:v==="utf16"?A==="utf16le"||A==="utf16be":A===v}function de(u,c){if(!(!u.strict||!u.encoding||!c||c.name!=="xml")){var A=V(c.body);A&&!se(u.encoding,A)&&$(u,"XML declaration encoding "+A+" does not match detected stream encoding "+u.encoding.toUpperCase())}}function q(u,c,A){u.textNode&&me(u),F(u,c,A)}function me(u){u.textNode=X(u.opt,u.textNode),u.textNode&&F(u,"ontext",u.textNode),u.textNode=""}function X(u,c){return u.trim&&(c=c.trim()),u.normalize&&(c=c.replace(/\s+/g," ")),c}function D(u,c){return me(u),u.trackPosition&&(c+=`
Line: `+u.line+`
Column: `+u.column+`
Char: `+u.c),c=new Error(c),u.error=c,F(u,"onerror",c),u}function he(u){return u.sawRoot&&!u.closedRoot&&$(u,"Unclosed root tag"),u.state!==m.BEGIN&&u.state!==m.BEGIN_WHITESPACE&&u.state!==m.TEXT&&D(u,"Unexpected end"),me(u),u.c="",u.closed=!0,F(u,"onend"),r.call(u,u.strict,u.opt),u}function $(u,c){if(typeof u!="object"||!(u instanceof r))throw new Error("bad call to strictFail");u.strict&&D(u,c)}function re(u){u.strict||(u.tagName=u.tagName[u.looseCase]());var c=u.tags[u.tags.length-1]||u,A=u.tag={name:u.tagName,attributes:{}};u.opt.xmlns&&(A.ns=c.ns),u.attribList.length=0,q(u,"onopentagstart",A)}function ne(u,c){var A=u.indexOf(":"),v=A<0?["",u]:u.split(":"),oe=v[0],ue=v[1];return c&&u==="xmlns"&&(oe="xmlns",ue=""),{prefix:oe,local:ue}}function ye(u){if(u.strict||(u.attribName=u.attribName[u.looseCase]()),u.attribList.indexOf(u.attribName)!==-1||u.tag.attributes.hasOwnProperty(u.attribName)){u.attribName=u.attribValue="";return}if(u.opt.xmlns){var c=ne(u.attribName,!0),A=c.prefix,v=c.local;if(A==="xmlns")if(v==="xml"&&u.attribValue!==p)$(u,"xml: prefix must be bound to "+p+`
Actual: `+u.attribValue);else if(v==="xmlns"&&u.attribValue!==S)$(u,"xmlns: prefix must be bound to "+S+`
Actual: `+u.attribValue);else{var oe=u.tag,ue=u.tags[u.tags.length-1]||u;oe.ns===ue.ns&&(oe.ns=Object.create(ue.ns)),oe.ns[v]=u.attribValue}u.attribList.push([u.attribName,u.attribValue])}else u.tag.attributes[u.attribName]=u.attribValue,q(u,"onattribute",{name:u.attribName,value:u.attribValue});u.attribName=u.attribValue=""}function Q(u,c){if(u.opt.xmlns){var A=u.tag,v=ne(u.tagName);A.prefix=v.prefix,A.local=v.local,A.uri=A.ns[v.prefix]||"",A.prefix&&!A.uri&&($(u,"Unbound namespace prefix: "+JSON.stringify(u.tagName)),A.uri=v.prefix);var oe=u.tags[u.tags.length-1]||u;A.ns&&oe.ns!==A.ns&&Object.keys(A.ns).forEach(function(De){q(u,"onopennamespace",{prefix:De,uri:A.ns[De]})});for(var ue=0,le=u.attribList.length;ue<le;ue++){var be=u.attribList[ue],Ee=be[0],Me=be[1],te=ne(Ee,!0),je=te.prefix,Je=te.local,et=je===""?"":A.ns[je]||"",We={name:Ee,value:Me,prefix:je,local:Je,uri:et};je&&je!=="xmlns"&&!et&&($(u,"Unbound namespace prefix: "+JSON.stringify(je)),We.uri=je),u.tag.attributes[Ee]=We,q(u,"onattribute",We)}u.attribList.length=0}u.tag.isSelfClosing=!!c,u.sawRoot=!0,u.tags.push(u.tag),q(u,"onopentag",u.tag),c||(!u.noscript&&u.tagName.toLowerCase()==="script"?u.state=m.SCRIPT:u.state=m.TEXT,u.tag=null,u.tagName=""),u.attribName=u.attribValue="",u.attribList.length=0}function Be(u){if(!u.tagName){$(u,"Weird empty close tag."),u.textNode+="</>",u.state=m.TEXT;return}if(u.script){if(u.tagName!=="script"){u.script+="</"+u.tagName+">",u.tagName="",u.state=m.SCRIPT;return}q(u,"onscript",u.script),u.script=""}var c=u.tags.length,A=u.tagName;u.strict||(A=A[u.looseCase]());for(var v=A;c--;){var oe=u.tags[c];if(oe.name!==v)$(u,"Unexpected close tag");else break}if(c<0){$(u,"Unmatched closing tag: "+u.tagName),u.textNode+="</"+u.tagName+">",u.state=m.TEXT;return}u.tagName=A;for(var ue=u.tags.length;ue-- >c;){var le=u.tag=u.tags.pop();u.tagName=u.tag.name,q(u,"onclosetag",u.tagName);var be={};for(var Ee in le.ns)be[Ee]=le.ns[Ee];var Me=u.tags[u.tags.length-1]||u;u.opt.xmlns&&le.ns!==Me.ns&&Object.keys(le.ns).forEach(function(te){var je=le.ns[te];q(u,"onclosenamespace",{prefix:te,uri:je})})}c===0&&(u.closedRoot=!0),u.tagName=u.attribValue=u.attribName="",u.attribList.length=0,u.state=m.TEXT}function $e(u){var c=u.entity,A=c.toLowerCase(),v,oe="";return u.ENTITIES[c]?u.ENTITIES[c]:u.ENTITIES[A]?u.ENTITIES[A]:(c=A,c.charAt(0)==="#"&&(c.charAt(1)==="x"?(c=c.slice(2),v=parseInt(c,16),oe=v.toString(16)):(c=c.slice(1),v=parseInt(c,10),oe=v.toString(10))),c=c.replace(/^0+/,""),isNaN(v)||oe.toLowerCase()!==c||v<0||v>1114111||!Pe(v)?($(u,"Invalid character entity"),"&"+u.entity+";"):String.fromCodePoint(v))}function Pe(u){return u===9||u===10||u===13||u>=32&&u<=55295||u>=57344&&u<=65533||u>=65536&&u<=1114111}function ct(u,c){c==="<"?(u.state=m.OPEN_WAKA,u.startTagPosition=u.position):R(c)||($(u,"Non-whitespace before first tag."),u.textNode=c,u.state=m.TEXT)}function Oe(u,c){var A="";return c<u.length&&(A=u.charAt(c)),A}function ut(u){var c=this;if(this.error)throw this.error;if(c.closed)return D(c,"Cannot write after close. Assign an onready handler.");if(u===null)return he(c);typeof u=="object"&&(u=u.toString());for(var A=0,v="";v=Oe(u,A++),c.c=v,!!v;)switch(c.trackPosition&&(c.position++,v===`
`?(c.line++,c.column=0):c.column++),c.state){case m.BEGIN:if(c.state=m.BEGIN_WHITESPACE,v==="\uFEFF")continue;ct(c,v);continue;case m.BEGIN_WHITESPACE:ct(c,v);continue;case m.TEXT:if(c.sawRoot&&!c.closedRoot){for(var ue=A-1;v&&v!=="<"&&v!=="&";)v=Oe(u,A++),v&&c.trackPosition&&(c.position++,v===`
`?(c.line++,c.column=0):c.column++);c.textNode+=u.substring(ue,A-1)}v==="<"&&!(c.sawRoot&&c.closedRoot&&!c.strict)?(c.state=m.OPEN_WAKA,c.startTagPosition=c.position):(!R(v)&&(!c.sawRoot||c.closedRoot)&&$(c,"Text data outside of root node."),v==="&"?c.state=m.TEXT_ENTITY:c.textNode+=v);continue;case m.SCRIPT:v==="<"?c.state=m.SCRIPT_ENDING:c.script+=v;continue;case m.SCRIPT_ENDING:v==="/"?c.state=m.CLOSE_TAG:(c.script+="<"+v,c.state=m.SCRIPT);continue;case m.OPEN_WAKA:if(v==="!")c.state=m.SGML_DECL,c.sgmlDecl="";else if(!R(v))if(L(x,v))c.state=m.OPEN_TAG,c.tagName=v;else if(v==="/")c.state=m.CLOSE_TAG,c.tagName="";else if(v==="?")c.state=m.PROC_INST,c.procInstName=c.procInstBody="";else{if($(c,"Unencoded <"),c.startTagPosition+1<c.position){var oe=c.position-c.startTagPosition;v=new Array(oe).join(" ")+v}c.textNode+="<"+v,c.state=m.TEXT}continue;case m.SGML_DECL:if(c.sgmlDecl+v==="--"){c.state=m.COMMENT,c.comment="",c.sgmlDecl="";continue}c.doctype&&c.doctype!==!0&&c.sgmlDecl?(c.state=m.DOCTYPE_DTD,c.doctype+="<!"+c.sgmlDecl+v,c.sgmlDecl=""):g.test(c.sgmlDecl+v)?(q(c,"onopencdata"),c.state=m.CDATA,c.sgmlDecl="",c.cdata=""):f.test(c.sgmlDecl+v)?(c.state=m.DOCTYPE,(c.doctype||c.sawRoot)&&$(c,"Inappropriately located doctype declaration"),c.doctype="",c.sgmlDecl=""):v===">"?(q(c,"onsgmldeclaration",c.sgmlDecl),c.sgmlDecl="",c.state=m.TEXT):(C(v)&&(c.state=m.SGML_DECL_QUOTED),c.sgmlDecl+=v);continue;case m.SGML_DECL_QUOTED:v===c.q&&(c.state=m.SGML_DECL,c.q=""),c.sgmlDecl+=v;continue;case m.DOCTYPE:v===">"?(c.state=m.TEXT,q(c,"ondoctype",c.doctype),c.doctype=!0):(c.doctype+=v,v==="["?c.state=m.DOCTYPE_DTD:C(v)&&(c.state=m.DOCTYPE_QUOTED,c.q=v));continue;case m.DOCTYPE_QUOTED:c.doctype+=v,v===c.q&&(c.q="",c.state=m.DOCTYPE);continue;case m.DOCTYPE_DTD:v==="]"?(c.doctype+=v,c.state=m.DOCTYPE):v==="<"?(c.state=m.OPEN_WAKA,c.startTagPosition=c.position):C(v)?(c.doctype+=v,c.state=m.DOCTYPE_DTD_QUOTED,c.q=v):c.doctype+=v;continue;case m.DOCTYPE_DTD_QUOTED:c.doctype+=v,v===c.q&&(c.state=m.DOCTYPE_DTD,c.q="");continue;case m.COMMENT:v==="-"?c.state=m.COMMENT_ENDING:c.comment+=v;continue;case m.COMMENT_ENDING:v==="-"?(c.state=m.COMMENT_ENDED,c.comment=X(c.opt,c.comment),c.comment&&q(c,"oncomment",c.comment),c.comment=""):(c.comment+="-"+v,c.state=m.COMMENT);continue;case m.COMMENT_ENDED:v!==">"?($(c,"Malformed comment"),c.comment+="--"+v,c.state=m.COMMENT):c.doctype&&c.doctype!==!0?c.state=m.DOCTYPE_DTD:c.state=m.TEXT;continue;case m.CDATA:for(var ue=A-1;v&&v!=="]";)v=Oe(u,A++),v&&c.trackPosition&&(c.position++,v===`
`?(c.line++,c.column=0):c.column++);c.cdata+=u.substring(ue,A-1),v==="]"&&(c.state=m.CDATA_ENDING);continue;case m.CDATA_ENDING:v==="]"?c.state=m.CDATA_ENDING_2:(c.cdata+="]"+v,c.state=m.CDATA);continue;case m.CDATA_ENDING_2:v===">"?(c.cdata&&q(c,"oncdata",c.cdata),q(c,"onclosecdata"),c.cdata="",c.state=m.TEXT):v==="]"?c.cdata+="]":(c.cdata+="]]"+v,c.state=m.CDATA);continue;case m.PROC_INST:v==="?"?c.state=m.PROC_INST_ENDING:R(v)?c.state=m.PROC_INST_BODY:c.procInstName+=v;continue;case m.PROC_INST_BODY:if(!c.procInstBody&&R(v))continue;v==="?"?c.state=m.PROC_INST_ENDING:c.procInstBody+=v;continue;case m.PROC_INST_ENDING:if(v===">"){let Me={name:c.procInstName,body:c.procInstBody};de(c,Me),q(c,"onprocessinginstruction",Me),c.procInstName=c.procInstBody="",c.state=m.TEXT}else c.procInstBody+="?"+v,c.state=m.PROC_INST_BODY;continue;case m.OPEN_TAG:L(T,v)?c.tagName+=v:(re(c),v===">"?Q(c):v==="/"?c.state=m.OPEN_TAG_SLASH:(R(v)||$(c,"Invalid character in tag name"),c.state=m.ATTRIB));continue;case m.OPEN_TAG_SLASH:v===">"?(Q(c,!0),Be(c)):($(c,"Forward-slash in opening tag not followed by >"),c.state=m.ATTRIB);continue;case m.ATTRIB:if(R(v))continue;v===">"?Q(c):v==="/"?c.state=m.OPEN_TAG_SLASH:L(x,v)?(c.attribName=v,c.attribValue="",c.state=m.ATTRIB_NAME):$(c,"Invalid attribute name");continue;case m.ATTRIB_NAME:v==="="?c.state=m.ATTRIB_VALUE:v===">"?($(c,"Attribute without value"),c.attribValue=c.attribName,ye(c),Q(c)):R(v)?c.state=m.ATTRIB_NAME_SAW_WHITE:L(T,v)?c.attribName+=v:$(c,"Invalid attribute name");continue;case m.ATTRIB_NAME_SAW_WHITE:if(v==="=")c.state=m.ATTRIB_VALUE;else{if(R(v))continue;$(c,"Attribute without value"),c.tag.attributes[c.attribName]="",c.attribValue="",q(c,"onattribute",{name:c.attribName,value:""}),c.attribName="",v===">"?Q(c):L(x,v)?(c.attribName=v,c.state=m.ATTRIB_NAME):($(c,"Invalid attribute name"),c.state=m.ATTRIB)}continue;case m.ATTRIB_VALUE:if(R(v))continue;C(v)?(c.q=v,c.state=m.ATTRIB_VALUE_QUOTED):(c.opt.unquotedAttributeValues||D(c,"Unquoted attribute value"),c.state=m.ATTRIB_VALUE_UNQUOTED,c.attribValue=v);continue;case m.ATTRIB_VALUE_QUOTED:if(v!==c.q){v==="&"?c.state=m.ATTRIB_VALUE_ENTITY_Q:c.attribValue+=v;continue}ye(c),c.q="",c.state=m.ATTRIB_VALUE_CLOSED;continue;case m.ATTRIB_VALUE_CLOSED:R(v)?c.state=m.ATTRIB:v===">"?Q(c):v==="/"?c.state=m.OPEN_TAG_SLASH:L(x,v)?($(c,"No whitespace between attributes"),c.attribName=v,c.attribValue="",c.state=m.ATTRIB_NAME):$(c,"Invalid attribute name");continue;case m.ATTRIB_VALUE_UNQUOTED:if(!E(v)){v==="&"?c.state=m.ATTRIB_VALUE_ENTITY_U:c.attribValue+=v;continue}ye(c),v===">"?Q(c):c.state=m.ATTRIB;continue;case m.CLOSE_TAG:if(c.tagName)v===">"?Be(c):L(T,v)?c.tagName+=v:c.script?(c.script+="</"+c.tagName+v,c.tagName="",c.state=m.SCRIPT):(R(v)||$(c,"Invalid tagname in closing tag"),c.state=m.CLOSE_TAG_SAW_WHITE);else{if(R(v))continue;P(x,v)?c.script?(c.script+="</"+v,c.state=m.SCRIPT):$(c,"Invalid tagname in closing tag."):c.tagName=v}continue;case m.CLOSE_TAG_SAW_WHITE:if(R(v))continue;v===">"?Be(c):$(c,"Invalid characters in closing tag");continue;case m.TEXT_ENTITY:case m.ATTRIB_VALUE_ENTITY_Q:case m.ATTRIB_VALUE_ENTITY_U:var le,be;switch(c.state){case m.TEXT_ENTITY:le=m.TEXT,be="textNode";break;case m.ATTRIB_VALUE_ENTITY_Q:le=m.ATTRIB_VALUE_QUOTED,be="attribValue";break;case m.ATTRIB_VALUE_ENTITY_U:le=m.ATTRIB_VALUE_UNQUOTED,be="attribValue";break}if(v===";"){var Ee=$e(c);c.opt.unparsedEntities&&!Object.values(t.XML_ENTITIES).includes(Ee)?((c.entityCount+=1)>c.opt.maxEntityCount&&D(c,"Parsed entity count exceeds max entity count"),(c.entityDepth+=1)>c.opt.maxEntityDepth&&D(c,"Parsed entity depth exceeds max entity depth"),c.entity="",c.state=le,c.write(Ee),c.entityDepth-=1):(c[be]+=Ee,c.entity="",c.state=le)}else L(c.entity.length?N:M,v)?c.entity+=v:($(c,"Invalid character in entity name"),c[be]+="&"+c.entity+v,c.entity="",c.state=le);continue;default:throw new Error(c,"Unknown state: "+c.state)}return c.position>=c.bufferCheckPosition&&n(c),c}String.fromCodePoint||(function(){var u=String.fromCharCode,c=Math.floor,A=function(){var v=16384,oe=[],ue,le,be=-1,Ee=arguments.length;if(!Ee)return"";for(var Me="";++be<Ee;){var te=Number(arguments[be]);if(!isFinite(te)||te<0||te>1114111||c(te)!==te)throw RangeError("Invalid code point: "+te);te<=65535?oe.push(te):(te-=65536,ue=(te>>10)+55296,le=te%1024+56320,oe.push(ue,le)),(be+1===Ee||oe.length>v)&&(Me+=u.apply(null,oe),oe.length=0)}return Me};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:A,configurable:!0,writable:!0}):String.fromCodePoint=A})()})(typeof Ka>"u"?Ka.sax={}:Ka)});function mg(t){return t.charCodeAt(0)===65279?t.slice(1):t}function bg(t){return t.toLowerCase()}function xg(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===0}function Ya(t,e,r){for(let n of t)e=n(e,r);return e}function po(t,e,r){let n=Object.create(null);n.value=r,n.writable=!0,n.enumerable=!0,n.configurable=!0,Object.defineProperty(t,e,n)}function vg(t,e){let r={};return typeof e=="object"&&(r=e),new Es(r).parseStringPromise(t)}async function rh(t,e={}){return await vg(t,e)}var go,eh,th,pg,gg,xr,Jd,Es,nh=nr(()=>{go=Ct($d(),1),eh=Ct(Zd(),1),th=Ct(Qd(),1),pg=Object.defineProperty,gg=(t,e,r)=>e in t?pg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,xr=(t,e,r)=>gg(t,typeof e!="symbol"?e+"":e,r);Jd={.1:{explicitCharkey:!1,trim:!0,normalize:!0,normalizeTags:!1,attrkey:"@",charkey:"#",explicitArray:!1,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!1,validator:null,xmlns:!1,explicitChildren:!1,childkey:"@@",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,emptyTag:""},.2:{explicitCharkey:!1,trim:!1,normalize:!1,normalizeTags:!1,attrkey:"$",charkey:"_",explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!0,validator:null,xmlns:!1,explicitChildren:!1,preserveChildrenOrder:!1,childkey:"$$",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,rootName:"root",xmldec:{version:"1.0",encoding:"UTF-8",standalone:!0},doctype:null,renderOpts:{pretty:!0,indent:"  ",newline:`
`},headless:!1,chunkSize:1e4,emptyTag:"",cdata:!1}};Es=class extends eh.EventEmitter{constructor(e){super(),xr(this,"options"),xr(this,"remaining",""),xr(this,"saxParser"),xr(this,"resultObject",null),xr(this,"EXPLICIT_CHARKEY"),xr(this,"errThrown",!1),xr(this,"ended",!1),xr(this,"processAsync",()=>{try{if(this.remaining.length<=this.options.chunkSize){let r=this.remaining;this.remaining="",this.saxParser=this.saxParser.write(r),this.saxParser.close()}else{let r=this.remaining.slice(0,this.options.chunkSize);this.remaining=this.remaining.slice(this.options.chunkSize),this.saxParser=this.saxParser.write(r),setTimeout(this.processAsync,0)}}catch(r){this.errThrown||(this.errThrown=!0,this.emit("error",r))}}),xr(this,"assignOrPush",(r,n,o)=>{n in r?(Array.isArray(r[n])||po(r,n,[r[n]]),r[n].push(o)):this.options.explicitArray?po(r,n,[o]):po(r,n,o)}),xr(this,"reset",()=>{this.removeAllListeners(),this.saxParser=th.default.parser(this.options.strict,{trim:!1,normalize:!1,xmlns:this.options.xmlns}),this.errThrown=!1,this.saxParser.onerror=a=>{this.saxParser.resume(),this.errThrown||(this.errThrown=!0,this.emit("error",a))},this.saxParser.onend=()=>{this.ended||(this.ended=!0,this.emit("end",this.resultObject))},this.ended=!1,this.EXPLICIT_CHARKEY=this.options.explicitCharkey,this.resultObject=null;let r=[],n=this.options.attrkey,o=this.options.charkey;this.saxParser.onopentag=a=>{let s={};s[o]="",this.options.ignoreAttrs||Object.keys(a.attributes).forEach(l=>{!(n in s)&&!this.options.mergeAttrs&&(s[n]={});let d=this.options.attrValueProcessors?Ya(this.options.attrValueProcessors,a.attributes[l],l):a.attributes[l],h=this.options.attrNameProcessors?Ya(this.options.attrNameProcessors,l):l;this.options.mergeAttrs?this.assignOrPush(s,h,d):po(s[n],h,d)}),s["#name"]=this.options.tagNameProcessors?Ya(this.options.tagNameProcessors,a.name):a.name,this.options.xmlns&&(s[this.options.xmlnskey]={uri:a.uri,local:a.local}),r.push(s)},this.saxParser.onclosetag=()=>{let a=r.pop(),s=a["#name"];(!this.options.explicitChildren||!this.options.preserveChildrenOrder)&&delete a["#name"];let l;a.cdata===!0&&(l=a.cdata,delete a.cdata);let d=r[r.length-1],h="";if(a[o].match(/^\s*$/)&&!l?(h=a[o],delete a[o]):(this.options.trim&&(a[o]=a[o].trim()),this.options.normalize&&(a[o]=a[o].replace(/\s{2,}/g," ").trim()),a[o]=this.options.valueProcessors?Ya(this.options.valueProcessors,a[o],s):a[o],Object.keys(a).length===1&&o in a&&!this.EXPLICIT_CHARKEY&&(a=a[o])),xg(a)&&(typeof this.options.emptyTag=="function"?a=this.options.emptyTag():a=this.options.emptyTag!==""?this.options.emptyTag:h),this.options.validator){let g=`/${r.map(f=>f["#name"]).concat(s).join("/")}`;(()=>{try{a=this.options.validator(g,d&&d[s],a)}catch(f){this.emit("error",f)}})()}if(this.options.explicitChildren&&!this.options.mergeAttrs&&typeof a=="object")if(this.options.preserveChildrenOrder){if(d){d[this.options.childkey]=d[this.options.childkey]||[];let g={};Object.keys(a).forEach(f=>{po(g,f,a[f])}),d[this.options.childkey].push(g),delete a["#name"],Object.keys(a).length===1&&o in a&&!this.EXPLICIT_CHARKEY&&(a=a[o])}}else{let g={};this.options.attrkey in a&&(g[this.options.attrkey]=a[this.options.attrkey],delete a[this.options.attrkey]),!this.options.charsAsChildren&&this.options.charkey in a&&(g[this.options.charkey]=a[this.options.charkey],delete a[this.options.charkey]),Object.getOwnPropertyNames(a).length>0&&(g[this.options.childkey]=a),a=g}if(r.length>0)this.assignOrPush(d,s,a);else{if(this.options.explicitRoot){let g=a,f={};po(f,s,g),a=f}this.resultObject=a,this.ended=!0,this.emit("end",this.resultObject)}};let i=a=>{let s=r[r.length-1];if(s&&(s[o]+=a,this.options.explicitChildren&&this.options.preserveChildrenOrder&&this.options.charsAsChildren&&(this.options.includeWhiteChars||a.replace(/\\n/g,"").trim()!==""))){s[this.options.childkey]=s[this.options.childkey]||[];let l={"#name":"__text__"};l[o]=a,this.options.normalize&&(l[o]=l[o].replace(/\s{2,}/g," ").trim()),s[this.options.childkey].push(l)}return s};this.saxParser.ontext=i,this.saxParser.oncdata=a=>{let s=i(a);s&&(s.cdata=!0)}}),xr(this,"parseString",(r,n)=>{n&&typeof n=="function"&&(this.on("end",o=>{this.reset(),n(null,o)}),this.on("error",o=>{this.reset(),n(o)}));try{return r=r.toString(),r.trim()===""?(this.emit("end",null),!0):(r=mg(r),this.options.async?(this.remaining=r,setTimeout(this.processAsync,0),this.saxParser):this.saxParser.write(r).close())}catch(o){if(!this.errThrown&&!this.ended)this.emit("error",o),this.errThrown=!0;else if(this.ended)throw o}}),xr(this,"parseStringPromise",r=>new Promise((n,o)=>{this.parseString(r,(i,a)=>{i?o(i):n(a)})})),this.options={},Object.keys(Jd["0.2"]).forEach(r=>{this.options[r]=Jd["0.2"][r]}),e&&Object.keys(e).forEach(r=>{this.options[r]=e[r]}),this.options.xmlns&&(this.options.xmlnskey=`${this.options.attrkey}ns`),this.options.normalizeTags&&(this.options.tagNameProcessors||(this.options.tagNameProcessors=[]),this.options.tagNameProcessors.unshift(bg)),this.reset()}}});function oh(t){return t.includes("&")?t.replace(/&(#x[\dA-Fa-f]+|#\d+|[a-zA-Z]+);/g,(e,r)=>r.startsWith("#x")?String.fromCodePoint(Number.parseInt(r.slice(2),16)):r.startsWith("#")?String.fromCodePoint(Number.parseInt(r.slice(1),10)):yg[e]||e):t}function kg(t){let e=t.slice(0,12),r=Array.from(e).map(n=>n.toString(16).padStart(2,"0")).join("");for(let[n,o]of Object.entries(wg))if(r.startsWith(n))return o;return"unknown"}function Ja(t,e,r,n){return URL.createObjectURL(new Blob([t],{type:e}))}function hh(t){let e="";return e=t.name??"",e}function Lg(t){return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}async function uh(t){return t instanceof Uint8Array?Lg(t):await t.arrayBuffer()}function Zt(t){let e=t.byteLength,r=e===4?"getUint32":e===2?"getUint16":"getUint8";return new DataView(t)[r](0)}function yr(t,e){let r={};for(let n in t){let[o,i,a]=t[n];r[n]=a==="string"?jo(e.slice(o,o+i)):Zt(e.slice(o,o+i))}return r}function Go(t){let e=t.reduce((o,i)=>o+i.length,0),r=new t[0].constructor(e),n=0;for(let o of t)r.set(o,n),n+=o.length;return r}function Za(t,e=0){let r=0,n=0;for(let o of t.subarray(e,e+4))if(r=r<<7|(o&127)>>>0,n++,o&128)break;return{value:r,length:n}}function Fg(t){let e=0;for(let r of t.subarray(-4))r&128&&(e=0),e=e<<7|r&127;return e}function fh(t){let e=0;for(;t>0;t=t>>1)(t&1)===1&&e++;return e}function zg(t){let e=0;for(;(t&1)===0;)t=t>>1,e++;return e}function Bg(t){let e=[];for(let r=0;r<t.length;r++){let n=t[r];if(n===0)e.push(0);else if(n<=8)for(let o of t.subarray(r+1,(r+=n)+1))e.push(o);else if(n<=127)e.push(n);else if(n<=191){let o=n<<8|t[r+++1],i=(o&16383)>>>3,a=(o&7)+3;for(let s=0;s<a;s++)e.push(e[e.length-i])}else e.push(32,n^128)}return Uint8Array.from(e)}function $g(t,e){let r=e(t.huffcdic),{magic:n,offset1:o,offset2:i}=yr(Mg,r);if(n!=="HUFF")throw new Error("Invalid HUFF record");let a=Array.from({length:256},(h,g)=>o+g*4).map(h=>Zt(r.slice(h,h+4))).map(h=>[h&128,h&31,h>>>8]),s=[[0,0],...Array.from({length:32},(h,g)=>i+g*8).map(h=>[Zt(r.slice(h,h+4)),Zt(r.slice(h+4,h+8))])],l=[];for(let h=1;h<t.numHuffcdic;h++){let g=e(t.huffcdic+h),f=yr(Rg,g);if(f.magic!=="CDIC")throw new Error("Invalid CDIC record");let p=Math.min(1<<f.codeLength,f.numEntries-l.length),S=g.slice(f.length);for(let w=0;w<p;w++){let x=Zt(S.slice(w*2,w*2+2)),T=Zt(S.slice(x,x+2)),M=T&32767,N=T&32768,R=new Uint8Array(S.slice(x+2,x+2+M));l.push([R,N])}}let d=h=>{let g=new Uint8Array,f=h.byteLength*8;for(let p=0;p<f;){let S=Number(Hg(h,p)),[w,x,T]=a[S>>>24];if(!w){for(;S>>>32-x<s[x][0];)x+=1;T=s[x][1]}if(p+=x,p>f)break;let M=T-(S>>>32-x),[N,R]=l[M];R||(N=d(N),l[M]=[N,!0]),g=Go([g,N])}return g};return d}function Hg(t,e){let r=e>>3,n=e+32,o=n>>3,i=0n;for(let a=r;a<=o;a++)i=i<<8n|BigInt(t[a]??0);return i>>8n-BigInt(n&7)&0xFFFFFFFFn}function Ug(t,e){let{magic:r,count:n}=yr(Cg,t);if(r!=="EXTH")throw new Error("Invalid EXTH header");let o=Cs(e.toString()),i={},a=12;for(let s=0;s<n;s++){let l=Zt(t.slice(a,a+4)),d=Zt(t.slice(a+4,a+8));if(l in sh){let[h,g,f]=sh[l],p=t.slice(a+8,a+d),S=g==="uint"?Zt(p):o.decode(p);f?(i[h]??(i[h]=[]),i[h].push(S)):i[h]=S}a+=d}return i}function Wg(t){let e=t&1,r=fh(t>>>1);return n=>{for(let o=0;o<r;o++){let i=Fg(n);n=n.subarray(0,-i)}if(e){let o=(n[n.length-1]&3)+1;n=n.subarray(0,-o)}return n}}function jg(t){let{flags:e,dataStart:r,keyLength:n,keyStart:o}=yr(Og,t),i=new Uint8Array(t.slice(r));if(e&2){let a=n===16?1024:1040,s=new Uint8Array(t.slice(o,o+n)),l=Math.min(a,i.length);for(let d=0;d<l;d++)i[d]=i[d]^s[d%s.length]}if(e&1)try{return ad(i)}catch(a){console.warn(a),console.warn("Failed to decompress font")}return i}function Qa(t,e){let r=e(t),n=yr(ih,r);if(n.magic!=="INDX")throw new Error("Invalid INDX record");let o=Cs(n.encoding.toString()),i={},a=0;for(let f=0;f<n.numCncx;f++){let p=e(t+n.numRecords+f+1),S=new Uint8Array(p);for(let w=0;w<S.byteLength;){let x=w,{value:T,length:M}=Za(S,w);w+=M;let N=p.slice(w,w+T);w+=T,i[a+x]=o.decode(N)}a+=65536}let s=r.slice(n.length),l=yr(Ig,s);if(l.magic!=="TAGX")throw new Error("Invalid TAGX section");let d=(l.length-12)/4,h=Array.from({length:d},(f,p)=>new Uint8Array(s.slice(12+p*4,12+p*4+4))),g=[];for(let f=0;f<n.numRecords;f++){let p=e(t+1+f),S=new Uint8Array(p),w=yr(ih,p);if(w.magic!=="INDX")throw new Error("Invalid INDX record");for(let x=0;x<w.numRecords;x++){let T=w.idxt+4+2*x,M=Zt(p.slice(T,T+2)),N=Zt(p.slice(M,M+1)),R=jo(p.slice(M+1,M+1+N)),C=[],E=M+1+N,L=0,P=E+l.numControlBytes;for(let[_,F,V,z]of h){if(z&1){L++;continue}let se=E+L,de=Zt(p.slice(se,se+1))&V;if(de===V)if(fh(V)>1){let{value:q,length:me}=Za(S,P);C.push([_,0,q,F]),P+=me}else C.push([_,1,0,F]);else C.push([_,de>>zg(V),0,F])}let m={};for(let[_,F,V,z]of C){let se=[];if(F!==0)for(let de=0;de<F*z;de++){let{value:q,length:me}=Za(S,P);se.push(q),P+=me}else{let de=0;for(;de<V;){let{value:q,length:me}=Za(S,P);se.push(q),P+=me,de+=me}}m[_]=se}g.push({name:R,tagMap:m})}}return{table:g,cncx:i}}function Gg(t,e){let{table:r,cncx:n}=Qa(t,e),o=r.map(({tagMap:a},s)=>({index:s,offset:a[1]?.[0],size:a[2]?.[0],label:n[a[3]?.[0]]??"",headingLevel:a[4]?.[0],pos:a[6],parent:a[21]?.[0],firstChild:a[22]?.[0],lastChild:a[23]?.[0]})),i=a=>(a.firstChild==null||(a.children=o.filter(s=>s.parent===a.index).map(i)),a);return o.filter(a=>a.headingLevel===0).map(i)}function lh(t=0,e=0){return`kindle:pos:fid:${t.toString(32).toUpperCase().padStart(4,"0")}:off:${e.toString(32).toUpperCase().padStart(10,"0")}`}function ch(t){let e=t.match(Xg);if(!e)return"";let[,r,n]=e;return`[${r}="${n}"]`}function Kg(t){let[e,r]=t.match(Vg).slice(1);return{fid:Number.parseInt(e,32),off:Number.parseInt(r,32)}}async function Is(t,e){let r=new As(t,e);return await r.innerLoadFile(),await r.innerInit(),r}async function Ms(t,e){let r=new Ns(t,e);return await r.innerLoadFile(),await r.innerInit(),r}var yg,ah,wg,_g,Tg,Sg,Eg,Ag,Ng,Cg,ih,Ig,Mg,Rg,Pg,Og,Dg,jo,Cs,sh,qg,Xg,Vg,dh,Yg,Zg,Yt,ei,Qg,Jg,Nt,As,em,tm,vr,Ns,ph=nr(()=>{ts();nh();yg={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};ah={XML:"application/xml",XHTML:"application/xhtml+xml",HTML:"text/html",CSS:"text/css",SVG:"image/svg+xml"},wg={ffd8ff:"image/jpeg","89504e47":"image/png",47494638:"image/gif","424d":"image/bmp","3c737667":"image/svg+xml","00000018":"video/mp4","00000020":"video/mp4","1a45dfa3":"video/mkv","1f43b675":"video/webm",494433:"audio/mp3",52494646:"audio/wav","4f676753":"audio/ogg","00010000":"font/ttf",74727565:"font/ttf","4f54544f":"font/otf","774f4646":"font/woff","774f4632":"font/woff2","504c":"font/eot"};_g={1252:"windows-1252",65001:"utf-8"},Tg={1:["ar","ar-SA","ar-IQ","ar-EG","ar-LY","ar-DZ","ar-MA","ar-TN","ar-OM","ar-YE","ar-SY","ar-JO","ar-LB","ar-KW","ar-AE","ar-BH","ar-QA"],2:["bg"],3:["ca"],4:["zh","zh-TW","zh-CN","zh-HK","zh-SG"],5:["cs"],6:["da"],7:["de","de-DE","de-CH","de-AT","de-LU","de-LI"],8:["el"],9:["en","en-US","en-GB","en-AU","en-CA","en-NZ","en-IE","en-ZA","en-JM",null,"en-BZ","en-TT","en-ZW","en-PH"],10:["es","es-ES","es-MX",null,"es-GT","es-CR","es-PA","es-DO","es-VE","es-CO","es-PE","es-AR","es-EC","es-CL","es-UY","es-PY","es-BO","es-SV","es-HN","es-NI","es-PR"],11:["fi"],12:["fr","fr-FR","fr-BE","fr-CA","fr-CH","fr-LU","fr-MC"],13:["he"],14:["hu"],15:["is"],16:["it","it-IT","it-CH"],17:["ja"],18:["ko"],19:["nl","nl-NL","nl-BE"],20:["no","nb","nn"],21:["pl"],22:["pt","pt-BR","pt-PT"],23:["rm"],24:["ro"],25:["ru"],26:["hr",null,"sr"],27:["sk"],28:["sq"],29:["sv","sv-SE","sv-FI"],30:["th"],31:["tr"],32:["ur"],33:["id"],34:["uk"],35:["be"],36:["sl"],37:["et"],38:["lv"],39:["lt"],41:["fa"],42:["vi"],43:["hy"],44:["az"],45:["eu"],46:["hsb"],47:["mk"],48:["st"],49:["ts"],50:["tn"],52:["xh"],53:["zu"],54:["af"],55:["ka"],56:["fo"],57:["hi"],58:["mt"],59:["se"],62:["ms"],63:["kk"],65:["sw"],67:["uz",null,"uz-UZ"],68:["tt"],69:["bn"],70:["pa"],71:["gu"],72:["or"],73:["ta"],74:["te"],75:["kn"],76:["ml"],77:["as"],78:["mr"],79:["sa"],82:["cy","cy-GB"],83:["gl","gl-ES"],87:["kok"],97:["ne"],98:["fy"]},Sg={name:[0,32,"string"],type:[60,4,"string"],creator:[64,4,"string"],numRecords:[76,2,"uint"]},Eg={compression:[0,2,"uint"],numTextRecords:[8,2,"uint"],recordSize:[10,2,"uint"],encryption:[12,2,"uint"]},Ag={magic:[16,4,"string"],length:[20,4,"uint"],type:[24,4,"uint"],encoding:[28,4,"uint"],uid:[32,4,"uint"],version:[36,4,"uint"],titleOffset:[84,4,"uint"],titleLength:[88,4,"uint"],localeRegion:[94,1,"uint"],localeLanguage:[95,1,"uint"],resourceStart:[108,4,"uint"],huffcdic:[112,4,"uint"],numHuffcdic:[116,4,"uint"],exthFlag:[128,4,"uint"],trailingFlags:[240,4,"uint"],indx:[244,4,"uint"]},Ng={resourceStart:[108,4,"uint"],fdst:[192,4,"uint"],numFdst:[196,4,"uint"],frag:[248,4,"uint"],skel:[252,4,"uint"],guide:[260,4,"uint"]},Cg={magic:[0,4,"string"],length:[4,4,"uint"],count:[8,4,"uint"]},ih={magic:[0,4,"string"],length:[4,4,"uint"],type:[8,4,"uint"],idxt:[20,4,"uint"],numRecords:[24,4,"uint"],encoding:[28,4,"uint"],language:[32,4,"uint"],total:[36,4,"uint"],ordt:[40,4,"uint"],ligt:[44,4,"uint"],numLigt:[48,4,"uint"],numCncx:[52,4,"uint"]},Ig={magic:[0,4,"string"],length:[4,4,"uint"],numControlBytes:[8,4,"uint"]},Mg={magic:[0,4,"string"],offset1:[8,4,"uint"],offset2:[12,4,"uint"]},Rg={magic:[0,4,"string"],length:[4,4,"uint"],numEntries:[8,4,"uint"],codeLength:[12,4,"uint"]},Pg={magic:[0,4,"string"],numEntries:[8,4,"uint"]},Og={flags:[8,4,"uint"],dataStart:[12,4,"uint"],keyLength:[16,4,"uint"],keyStart:[20,4,"uint"]};Dg=new TextDecoder,jo=t=>Dg.decode(t);Cs=t=>new TextDecoder(_g[t]);sh={100:["creator","string",!0],101:["publisher","string",!1],103:["description","string",!1],104:["isbn","string",!1],105:["subject","string",!0],106:["date","string",!1],108:["contributor","string",!0],109:["rights","string",!1],110:["subjectCode","string",!0],112:["source","string",!0],113:["asin","string",!1],121:["boundary","uint",!1],122:["fixedLayout","string",!1],125:["numResources","uint",!1],126:["originalResolution","string",!1],127:["zeroGutter","string",!1],128:["zeroMargin","string",!1],129:["coverURI","string",!1],132:["regionMagnification","string",!1],201:["coverOffset","uint",!1],202:["thumbnailOffset","uint",!1],503:["title","string",!1],524:["language","string",!0],527:["pageProgressionDirection","string",!1]};qg=/<\s*(?:mbp:)?pagebreak[^>]*>/gi;Xg=/\s(id|name|aid)\s*=\s*['"]([^'"]*)['"]/i;Vg=/kindle:pos:fid:(\w+):off:(\w+)/;dh=/kindle:(flow|embed):(\w+)(?:\?mime=(\w+\/[-+.\w]+))?/,Yg=Object.defineProperty,Zg=(t,e,r)=>e in t?Yg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Yt=(t,e,r)=>Zg(t,typeof e!="symbol"?e+"":e,r),ei=class{constructor(e,r){if(Yt(this,"fileArrayBuffer"),Yt(this,"recordsOffset"),Yt(this,"recordsMagic"),Yt(this,"start",0),Yt(this,"pdbHeader"),Yt(this,"mobiHeader"),Yt(this,"palmdocHeader"),Yt(this,"kf8Header"),Yt(this,"exth"),Yt(this,"isKf8",!1),Yt(this,"resourceStart"),Yt(this,"decoder"),Yt(this,"encoder"),Yt(this,"removeTrailingEntries"),Yt(this,"decompress"),this.fileArrayBuffer=e,this.parsePdbHeader(),this.parseFirstRecord(this.loadRecord(0)),this.resourceStart=this.mobiHeader.resourceStart,!this.isKf8){let n=this.exth.boundary??4294967295;if(n<4294967295){try{this.parseFirstRecord(this.loadRecord(n)),this.start=n,this.isKf8=!0}catch{console.warn("Failed to parse kf8 header.")}r.endsWith(".mobi")&&console.warn(`File "${r}" is a compatible file. Please change the file extension to .azw3 to make it parse correctly.`)}}this.setup()}decode(e){return this.decoder.decode(e)}encode(e){return this.encoder.encode(e)}pdbLoadRecord(e){let[r,n]=this.recordsOffset[e]??[0,0];return this.fileArrayBuffer.slice(r,n)}loadRecord(e){return this.pdbLoadRecord(this.start+e)}loadMagic(e){return this.recordsMagic[this.start+e]}loadTextBuffer(e){return this.decompress(this.removeTrailingEntries(new Uint8Array(this.loadRecord(e+1))))}loadResource(e){let r=this.pdbLoadRecord(this.resourceStart+e),n=jo(r.slice(0,4)),o;return n==="FONT"?o=jg(r):n==="VIDE"||n==="AUDI"?o=new Uint8Array(r.slice(12)):o=new Uint8Array(r),{type:kg(o),raw:o}}getNCX(){let e=this.mobiHeader.indx;if(e<4294967295)return Gg(e,this.loadRecord.bind(this))}getMetadata(){let e=this.mobiHeader,r=this.exth;return{identifier:this.mobiHeader.uid.toString(),title:r?.title||e.title,author:r?.creator?.map(oh)??[],publisher:r?.publisher??"",language:r?.language?.[0]??e.language,published:r?.date??"",description:r?.description??"",subject:r?.subject?.map(oh)??[],rights:r?.rights??"",contributor:r?.contributor??[]}}getCoverImage(){let e=this.exth,r=Number(e.coverOffset??4294967295),n=Number(e.thumbnailOffset??4294967295),o=r<4294967295?r:n<4294967295?n:void 0;if(o)return this.loadResource(o)}parsePdbHeader(){let e=yr(Sg,this.fileArrayBuffer.slice(0,78));e.name=e.name.replace(/\0.*$/,""),this.pdbHeader=e;let r=this.fileArrayBuffer.slice(78,78+e.numRecords*8),n=Array.from({length:e.numRecords},(o,i)=>Zt(r.slice(i*8,i*8+4)));this.recordsOffset=n.map((o,i)=>[o,n[i+1]]),this.recordsMagic=n.map(o=>jo(this.fileArrayBuffer.slice(o,o+4)))}parseFirstRecord(e){this.palmdocHeader=yr(Eg,e.slice(0,16));let r=yr(Ag,e);if(r.magic!=="MOBI")throw new Error("Missing MOBI header");let{titleOffset:n,titleLength:o,localeLanguage:i,localeRegion:a}=r,s=Tg[i.toString()]??[],l={title:jo(e.slice(n,n+o)),language:s[a>>2]??s[0]??"unknown"};this.mobiHeader=Object.assign(r,l),this.kf8Header=r.version>=8?yr(Ng,e):void 0,this.isKf8=r.version>=8,this.exth=r.exthFlag&64?Ug(e.slice(r.length+16),r.encoding):void 0}setup(){this.decoder=Cs(this.mobiHeader.encoding.toString()),this.encoder=new TextEncoder;let e=this.palmdocHeader.compression;if(e===1)this.decompress=n=>n;else if(e===2)this.decompress=Bg;else if(e===17480)this.decompress=$g(this.mobiHeader,this.loadRecord.bind(this));else throw new Error("Unsupported compression");let r=this.mobiHeader.trailingFlags;this.removeTrailingEntries=Wg(r)}},Qg=Object.defineProperty,Jg=(t,e,r)=>e in t?Qg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Nt=(t,e,r)=>Jg(t,typeof e!="symbol"?e+"":e,r);As=class{constructor(e,r="./images"){this.file=e,Nt(this,"fileArrayBuffer"),Nt(this,"mobiFile"),Nt(this,"fileName",""),Nt(this,"fdstTable",[]),Nt(this,"fullRawLength",0),Nt(this,"skelTable",[]),Nt(this,"fragTable",[]),Nt(this,"chapters",[]),Nt(this,"toc",[]),Nt(this,"fragmentOffsets",new Map),Nt(this,"fragmentSelectors",new Map),Nt(this,"rawHead",new Uint8Array),Nt(this,"rawTail",new Uint8Array),Nt(this,"lastLoadedHead",-1),Nt(this,"lastLoadedTail",-1),Nt(this,"resourceCache",new Map),Nt(this,"chapterCache",new Map),Nt(this,"idToChapter",new Map),Nt(this,"resourceSaveDir","./images"),this.fileName=hh(e),this.resourceSaveDir=r}getFileInfo(){return{fileName:this.fileName}}getMetadata(){return this.mobiFile.getMetadata()}getCoverImage(){if(this.resourceCache.has("cover"))return this.resourceCache.get("cover");let e=this.mobiFile.getCoverImage(),r="";return e&&(r=Ja(e.raw,e.type,"cover",this.resourceSaveDir),this.resourceCache.set("cover",r)),r}getSpine(){return this.chapters}getToc(){return this.toc}async innerLoadFile(){this.fileArrayBuffer=await uh(this.file),this.mobiFile=new ei(this.fileArrayBuffer,this.fileName)}async innerInit(){let e=this.mobiFile.loadRecord.bind(this.mobiFile),r=this.mobiFile.kf8Header,n=this.mobiFile.loadRecord(r.fdst),o=yr(Pg,n);if(o.magic!=="FDST")throw new Error("Missing FDST record");let i=Array.from({length:o.numEntries},(f,p)=>12+p*8).map(f=>[Zt(n.slice(f,f+4)),Zt(n.slice(f+4,f+8))]);this.fdstTable=i,this.fullRawLength=i[i.length-1][1];let s=Qa(r.skel,e).table.map(({name:f,tagMap:p},S)=>({index:S,name:f,numFrag:p[1][0],offset:p[6][0],length:p[6][1]}));this.skelTable=s;let l=Qa(r.frag,e),d=l.table.map(({name:f,tagMap:p})=>({insertOffset:Number.parseInt(f),selector:l.cncx[p[2][0]],index:p[4][0],offset:p[6][0],length:p[6][1]}));this.fragTable=d;let h=this.skelTable.reduce((f,p,S)=>{let w=f[f.length-1],x=w?.fragEnd??0,T=x+p.numFrag,M=this.fragTable.slice(x,T),N=p.length+M.reduce((E,L)=>E+L.length,0),R=(w?.totalLength??0)+N,C={id:S.toString(),skel:p,frags:M,fragEnd:T,length:N,totalLength:R};return this.idToChapter.set(S,C),f.push(C),f},[]);this.chapters=h;let g=this.mobiFile.getNCX();if(g){let f=({label:p,pos:S,children:w})=>{let[x,T]=S,M=lh(x,T),N=this.fragmentOffsets.get(x);return N?N.push(T):this.fragmentOffsets.set(x,[T]),{label:p,href:M,children:w?.map(f)}};this.toc=g.map(f)}}getGuide(){let e=this.mobiFile.kf8Header.guide;if(e<4294967295){let r=this.mobiFile.loadRecord.bind(this.mobiFile),{table:n,cncx:o}=Qa(e,r);return n.map(({name:i,tagMap:a})=>({label:o[a[1][0]]??"",type:i?.split(/\s/),href:lh(a[6]?.[0]??a[3]?.[0])}))}}loadRaw(e,r){let n=r-this.rawHead.length,o=this.fullRawLength===0?1/0:this.fullRawLength-this.rawTail.length-e;if(n<0||n<o){for(;this.rawHead.length<r;){this.lastLoadedHead++;let a=this.lastLoadedHead,s=this.mobiFile.loadTextBuffer(a);this.rawHead=Go([this.rawHead,s])}return this.rawHead.slice(e,r)}for(;this.fullRawLength-this.rawTail.length>e;){this.lastLoadedTail++;let a=this.mobiFile.palmdocHeader.numTextRecords-1-this.lastLoadedTail,s=this.mobiFile.loadTextBuffer(a);this.rawTail=Go([s,this.rawTail])}let i=this.fullRawLength-this.rawTail.length;return this.rawTail.slice(e-i,r-i)}loadText(e){let{skel:r,frags:n,length:o}=e,i=this.loadRaw(r.offset,r.offset+o),a=i.slice(0,r.length);for(let s of n){let l=s.insertOffset-r.offset,d=r.length+s.offset,h=i.slice(d,d+s.length);a=Go([a.slice(0,l),h,a.slice(l)]);let g=this.fragmentOffsets.get(s.index);if(g)for(let f of g){let p=this.mobiFile.decode(h.buffer).slice(f),S=ch(p);S&&this.cacheFragmentSelector(s.index,f,S)}}return this.mobiFile.decode(a.buffer)}loadChapter(e){let r=Number.parseInt(e);if(Number.isNaN(r))return;if(this.chapterCache.has(r))return this.chapterCache.get(r);let n=this.idToChapter.get(r);if(n){let o=this.replace(this.loadText(n));return this.chapterCache.set(r,o),o}}cacheFragmentSelector(e,r,n){let o=this.fragmentSelectors.get(e);if(o)o.set(r,n);else{let i=new Map;this.fragmentSelectors.set(e,i),i.set(r,n)}}loadFlow(e){if(e<4294967295)return this.loadRaw(this.fdstTable[e][0],this.fdstTable[e][1])}resolveHref(e){if(/^(?!blob|kindle)\w+:/i.test(e))return;let{fid:r,off:n}=Kg(e),o=this.chapters.find(S=>S.frags.some(w=>w.index===r));if(!o)return;let i=o.id,a=this.fragmentSelectors.get(r)?.get(n);if(a)return{id:i,selector:a};let{skel:s,frags:l}=o,d=l.find(S=>S.index===r),h=s.offset+s.length+d.offset,g=this.loadRaw(h,h+d.length),f=this.mobiFile.decode(g.buffer).slice(n),p=ch(f);return this.cacheFragmentSelector(r,n,p),{id:i,selector:p}}replaceResources(e){return e.replace(new RegExp(dh,"gi"),(r,n,o,i)=>{if(this.resourceCache.has(r))return this.resourceCache.get(r);let a=n==="flow"?this.loadFlow(Number.parseInt(o)):this.mobiFile.loadResource(Number.parseInt(o,36)-1).raw,s="";if(i===ah.CSS||i===ah.SVG){let d=this.mobiFile.decode(a?.buffer);s=this.replaceResources(d)}else s=a;let l=Ja(s,i,o,this.resourceSaveDir);return this.resourceCache.set(r,l),l})}replace(e){let r=[],o=e.match(/<head[^>]*>([\s\S]*)<\/head>/i)[1].match(/<link[^>]*>/gi)??[];for(let s of o){let l=s.match(/href="([^"]*)"/i)[1],d=s.match(dh)[2],h=this.replaceResources(l);r.push({id:d,href:h})}let i=e.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1];return{html:this.replaceResources(i),css:r}}destroy(){this.resourceCache.forEach(e=>{URL.revokeObjectURL(e)})}},em=Object.defineProperty,tm=(t,e,r)=>e in t?em(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,vr=(t,e,r)=>tm(t,typeof e!="symbol"?e+"":e,r);Ns=class{constructor(e,r="./images"){this.file=e,vr(this,"fileArrayBuffer"),vr(this,"mobiFile"),vr(this,"fileName",""),vr(this,"chapters",[]),vr(this,"idToChapter",new Map),vr(this,"toc",[]),vr(this,"resourceSaveDir","./images"),vr(this,"chapterCache",new Map),vr(this,"resourceCache",new Map),vr(this,"recindexReg",/recindex=["']?(\d+)["']?/),vr(this,"mediarecindexReg",/mediarecindex=["']?(\d+)["']?/),vr(this,"fileposReg",/filepos=["']?(\d+)["']?/),this.fileName=hh(e),this.resourceSaveDir=r}getFileInfo(){return{fileName:this.fileName}}getSpine(){return this.chapters}loadChapter(e){let r=Number.parseInt(e);if(Number.isNaN(r))return;if(this.chapterCache.has(r))return this.chapterCache.get(r);let n=this.idToChapter.get(r);if(!n)return;let o=this.replace(n.text);return this.chapterCache.set(r,o),o}getToc(){return this.toc}getCoverImage(){if(this.resourceCache.has("cover"))return this.resourceCache.get("cover");let e=this.mobiFile.getCoverImage(),r="";return e&&(r=Ja(e.raw,e.type,"cover",this.resourceSaveDir),this.resourceCache.set("cover",r)),r}getMetadata(){return this.mobiFile.getMetadata()}async innerLoadFile(){this.fileArrayBuffer=await uh(this.file),this.mobiFile=new ei(this.fileArrayBuffer,this.fileName)}async innerInit(){let{palmdocHeader:e}=this.mobiFile,r=[];for(let S=0;S<e.numTextRecords;S++)r.push(this.mobiFile.loadTextBuffer(S));let n=Go(r),o=Array.from(n,S=>String.fromCharCode(S)).join(""),i=[],a=new Map,s=0,l=Array.from(o.matchAll(qg));l.unshift({index:0,input:"",groups:void 0,0:""});for(let S=0;S<l.length;S++){let w=l[S],x=w.index,T=w[0],M=l[S+1]?.index,N=o.slice(x+T.length,M),R=Uint8Array.from(N,L=>L.charCodeAt(0)),C=this.mobiFile.decode(R.buffer),E={id:String(s),text:C,start:x,end:M,size:R.length};i.push(E),a.set(s,E),s++}let d=i[i.length-1].text;i[i.length-1].text=d.slice(0,d.indexOf("</body>"));let h=i[0].text,g=h.indexOf("<body>");i[0].text=h.slice(g+6),this.chapters=i,this.idToChapter=a;let f=h.slice(0,g),p=this.findTocChapter(f);if(p){let S=`<wrapper>${p.text.replace(/filepos=(\d+)/gi,'filepos="$1"')}</wrapper>`,w=await rh(S,{preserveChildrenOrder:!0,explicitChildren:!0,childkey:"children"}),x=[];this.parseNavMap(w.wrapper.children,x),this.toc=x}}findTocChapter(e){let r=/<reference.*\/>/g,n=e.match(r),o=/type="(.+?)"/,i=/filepos=(.*)/;if(n)for(let a of n){let s=a.match(o)?.[1].trim(),l=a.match(i)?.[1].trim();if(s==="toc"&&l){let d=Number.parseInt(l,10);return this.chapters.find(g=>g.end>d)}}}parseNavMap(e,r){for(let n of e){let o=n["#name"];if(o==="p"||o==="blockquote"){let i={label:"",href:""};if(n.a){let a=n.a[0],s=a._,l=Number(a.$.filepos);i={label:s,href:`filepos:${l}`},r.push(i)}(n.p||n.blockquote)&&(i.children=[],this.parseNavMap(n.children,i.children))}}}loadResource(e){if(this.resourceCache.has(String(e)))return this.resourceCache.get(String(e));let{type:r,raw:n}=this.mobiFile.loadResource(e-1),o=Ja(n,r,String(e),this.resourceSaveDir);return this.resourceCache.set(String(e),o),o}replace(e){return e=e.replace(/<img[^>]*>/g,r=>{let n=r.match(this.recindexReg)[1],o=this.loadResource(Number.parseInt(n));return r.replace(this.recindexReg,`src="${o}"`)}),e=e.replace(/<(video|audio)[^>]*>/g,r=>{let n=r.match(this.recindexReg)[1],o=this.loadResource(Number.parseInt(n));r=r.replace(this.mediarecindexReg,`src="${o}"`);let i=r.match(this.recindexReg)?.[1];if(i){let a=this.loadResource(Number.parseInt(i));r=r.replace(this.recindexReg,`poster="${a}"`)}return r}),e=e.replace(/<a[^>]*>/g,r=>{let n=r.match(this.fileposReg);if(!n)return r;let o=n[1];return r.replace(this.fileposReg,`href="filepos:${o}"`)}),{html:e,css:[]}}resolveHref(e){let r=e.match(/filepos:(\d+)/);if(!r)return;let n=r[1],o=Number(n),i=this.chapters.find(a=>a.end>o);if(i)return{id:i.id,selector:`[id="filepos:${n}"]`}}destroy(){this.resourceCache.forEach(e=>{URL.revokeObjectURL(e)}),this.resourceCache.clear()}}});function ti(t,e,r){let n="";for(let o=0;o<r;o+=1){let i=t[e+o]??0;n+=i>=32&&i<127?String.fromCharCode(i):""}return n}function qo(t,e){return(t[e]??0)<<8|(t[e+1]??0)}function gh(t,e){return(t[e]??0)*16777216+((t[e+1]??0)<<16|(t[e+2]??0)<<8|(t[e+3]??0))>>>0}function Qr(t,e){return(t[e+3]??0)*16777216+((t[e+2]??0)<<16|(t[e+1]??0)<<8|(t[e]??0))>>>0}function nm(t){if(t.length<86)throw new Error("\u6587\u4EF6\u592A\u5C0F\uFF0C\u4E0D\u662F\u6709\u6548\u7684 MOBI/PalmDOC \u6587\u4EF6\u3002");let e=ti(t,60,4).trim(),r=ti(t,64,4).trim(),n=`${e}${r}`;if(n!=="BOOKMOBI"&&n!=="TEXtREAd")throw new Error("\u6587\u4EF6\u4E0D\u662F MOBI/PalmDOC \u683C\u5F0F\uFF08\u7F3A\u5C11 PDB \u6587\u4EF6\u5934\uFF09\u3002");let o=qo(t,76);if(o<1)throw new Error("MOBI \u8BB0\u5F55\u8868\u4E3A\u7A7A\u3002");if(78+o*8+2>t.length)throw new Error("MOBI \u8BB0\u5F55\u8868\u5DF2\u635F\u574F\u3002");let i=[];for(let w=0;w<o;w+=1){let x=gh(t,78+w*8);if(x<78||x>=t.length)throw new Error("MOBI \u8BB0\u5F55\u504F\u79FB\u65E0\u6548\uFF0C\u6587\u4EF6\u53EF\u80FD\u5DF2\u635F\u574F\u3002");if(i.length>0&&x<i[i.length-1])throw new Error("MOBI \u8BB0\u5F55\u987A\u5E8F\u65E0\u6548\u3002");i.push(x)}let a=i[0];if(a+16>t.length)throw new Error("MOBI \u6587\u4EF6\u5934\u5DF2\u635F\u574F\u3002");let s=qo(t,a),l=gh(t,a+4),d=qo(t,a+8),h=qo(t,a+10),g=qo(t,a+12);if(g!==0)throw new Error("\u8BE5 MOBI \u6587\u4EF6\u53D7 DRM \u4FDD\u62A4\uFF0C\u65E0\u6CD5\u6253\u5F00\u3002");if(![rm,1,xh,Ps].includes(s))throw new Error(`\u4E0D\u652F\u6301\u7684 MOBI \u538B\u7F29\u65B9\u5F0F\uFF08${s}\uFF09\u3002`);let f=0,p=65001,S=!1;return n==="BOOKMOBI"&&ti(t,a+16,4)==="MOBI"&&(f=Qr(t,a+36),p=Qr(t,a+28)||65001,S=f===8),{pdbType:n,numRecords:o,offsets:i,compression:s,textLength:l,recordCount:d,recordSize:h,encryption:g,version:f,encoding:p,isKf8:S}}function om(t,e,r){let n=e[r];if(n==null)return null;let o=e[r+1]??t.length;return o<=n?new Uint8Array(0):t.subarray(n,o)}function am(t){let e=t instanceof Uint8Array?t:new Uint8Array(t),r=[],n=0;for(;n<e.length;){let o=e[n];if(n+=1,o===0)r.push(0);else if(o<=8)for(let i=0;i<o&&n<e.length;i+=1)r.push(e[n]),n+=1;else if(o<=127)r.push(o);else if(o<=191){if(n>=e.length)break;let i=o<<8|e[n];n+=1;let a=i>>3&2047,s=(i&7)+3,l=r.length-a;for(let d=0;d<s;d+=1)r.push(l+d>=0?r[l+d]:0)}else r.push(32),r.push(o^128)}return Uint8Array.from(r)}function im(t){let e=0;for(let o of t)e+=o.length;let r=new Uint8Array(e),n=0;for(let o of t)r.set(o,n),n+=o.length;return r}function Rs(t,e){let r=[];e&&r.push(e),r.push("utf-8","gb18030","windows-1252");for(let n of r)try{return new TextDecoder(n,{fatal:!0}).decode(t)}catch{}return new TextDecoder("utf-8").decode(t)}function sm(t,e){let r=e.recordCount>0?e.recordCount:e.numRecords-1,n=[];for(let i=1;i<=r;i+=1){let a=om(t,e.offsets,i);if(!a)break;if(e.compression===Ps)throw new Error("\u8BE5 MOBI \u4F7F\u7528 HUFF/CDIC \u538B\u7F29\uFF0C\u5185\u7F6E\u89E3\u6790\u5668\u65E0\u6CD5\u5904\u7406\u3002");n.push(e.compression===xh?am(a):a)}if(n.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u6587\u672C\u5185\u5BB9\u3002");let o=im(n);return e.textLength>0&&e.textLength<=o.length&&(o=o.subarray(0,e.textLength)),o}function lm(t,e){let r={title:"",author:"",language:""};if(e.pdbType!=="BOOKMOBI")return r;let n=e.offsets[0],o=vh[e.encoding]||"utf-8",i=Qr(t,n+84),a=Qr(t,n+88);i>0&&a>0&&n+i+a<=t.length&&(r.title=at(Rs(t.subarray(n+i,n+i+a),o)));let s=Qr(t,n+20),l=Qr(t,n+128),d=n+16+s;if(l&64&&ti(t,d,4)==="EXTH"&&d+12<=t.length){let h=Qr(t,d+4),g=Qr(t,d+8),f=Math.min(t.length,d+h,d+12+g*8+4096),p=d+12;for(let S=0;S<g&&p+8<=f;S+=1){let w=Qr(t,p),x=Qr(t,p+4);if(x<8||p+x>t.length)break;let T=t.subarray(p+8,p+x),M=at(Rs(T,o));w===100&&M&&!r.author?r.author=M:w===503&&M?r.title=M:w===524&&M&&!r.language&&(r.language=M),p+=x}}return r}function mh(t,e){if(!Number.isFinite(e)||e<0)return null;for(let r=0;r<t.length;r+=1){let n=Number(t[r]?.start),o=Number(t[r]?.end);if(Number.isFinite(n)&&Number.isFinite(o)&&e>=n&&e<o)return r}for(let r=0;r<t.length;r+=1){let n=Number(t[r]?.start);if(Number.isFinite(n)&&n>e)return r}return t.length>0?t.length-1:null}function bh(t){let e=String(t||"");return e.startsWith("#")?e.slice(1):""}function cm(t,e,{fileName:r,tracker:n,warn:o}){let i={};try{i=t.getMetadata()||{}}catch{i={}}let a=[];try{a=t.getSpine()||[]}catch{a=[]}if(!Array.isArray(a)||a.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u9605\u8BFB\u987A\u5E8F\u3002");let s=new Map;a.forEach((E,L)=>{E?.id!=null&&s.set(String(E.id),L)});let l=0,d=()=>`b${l+=1}`,h=E=>{let L=String(E||"").trim();if(!L)return null;if(/^blob:/i.test(L))return n.add(L),{src:L};if(/^data:/i.test(L)){let P=mn(L);return P?{src:n.create(P)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684 MOBI \u5185\u5D4C\u56FE\u7247\u3002"),null)}return/^(https?:)?\/\//i.test(L)?(o("\u5DF2\u8DF3\u8FC7 MOBI \u4E2D\u7684\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\u3002"),null):(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u6790\u7684 MOBI \u56FE\u7247\u3002"),null)},g=E=>L=>{let P=String(L||"").trim();if(!P)return null;if(/^(https?:|mailto:)/i.test(P))return{external:!0,href:P};if(P.startsWith("#"))return{chapter:E,anchor:P.slice(1)};if(P.startsWith("//")||/^(?!filepos:|kindle:)[a-z][a-z0-9+.-]*:/i.test(P))return null;try{let _=t.resolveHref(P);if(_?.id!=null){let F=s.get(String(_.id));if(F!=null){let V=bh(_.selector);return V?{chapter:F,anchor:V}:{chapter:F}}}}catch{}let m=/filepos:(\d+)/i.exec(P);if(m){let _=mh(a,Number(m[1]));if(_!=null)return{chapter:_}}return null},f=[];for(let E=0;E<a.length;E+=1){let L="";try{L=t.loadChapter(a[E].id)?.html||""}catch{o(`\u7B2C ${E+1} \u7AE0\u52A0\u8F7D\u5931\u8D25\uFF0C\u5DF2\u8DF3\u8FC7\u8BE5\u7AE0\u5185\u5BB9\u3002`)}let P=[];if(L){let m=Xr(L),_=m?.body||m?.documentElement||null;_&&(P=$n(_,{nextId:d,warn:o,chapterIndex:E,resolveImage:h,resolveLink:g(E)}))}f.push({id:`ch${E}`,title:"",blocks:P})}let p=[],S=(E,L)=>{if(Array.isArray(E))for(let P of E){if(!P)continue;let m=at(P.label||P.title||"").slice(0,200),_=String(P.href||""),F=null,V="";if(_){try{let z=t.resolveHref(_);if(z?.id!=null){let se=s.get(String(z.id));se!=null&&(F=se,V=bh(z.selector))}}catch{}if(F==null){let z=/filepos:(\d+)/i.exec(_);z&&(F=mh(a,Number(z[1])))}}m&&F!=null&&p.push({title:m,chapterIndex:F,depth:L,...V?{anchor:V}:{}}),S(P.children,L+1)}};try{S(t.getToc?.()||[],0)}catch{o("MOBI \u76EE\u5F55\u8BFB\u53D6\u5931\u8D25\uFF0C\u5DF2\u6309\u7AE0\u8282\u6807\u9898\u751F\u6210\u76EE\u5F55\u3002")}let w=$o(f,p),x=at(i.title||"")||Un(r),M=(Array.isArray(i.author)?i.author:[i.author]).map(E=>at(E||"")).filter(Boolean).join(", "),N="";try{let E=t.getCoverImage();E&&(n.add(E),N=E)}catch{}let R={title:x,chapters:f,toc:w};M&&(R.author=M);let C=at(i.language||"");return C&&(R.language=C),N&&(R.cover=N),R}function dm(t){return String(t||"").split(/<\s*(?:mbp:)?pagebreak[^>]*>/gi)}function hm(t,e,{fileName:r,warn:n}){if(e.compression===Ps)throw new Error("\u8BE5 MOBI \u6587\u4EF6\u4F7F\u7528 HUFF/CDIC \u538B\u7F29\uFF0C\u5185\u7F6E\u89E3\u6790\u5668\u65E0\u6CD5\u5904\u7406\u3002");let o=lm(t,e),i=sm(t,e),a=um(e.encoding),s=Rs(i,a),l=o.title||Un(r),d=0,h=()=>`b${d+=1}`,g=/<\s*(?:html|body|p|div|h[1-6]|br)\b/i.test(s),f;if(g){let w=dm(s),x=new TextEncoder,T=[],M=0;for(let N of w){let R=x.encode(N).length;T.push({start:M,end:M+R}),M+=R}f=[],w.forEach((N,R)=>{if(!N.trim())return;let C=Xr(N),E=C?.body||C?.documentElement||null,L=f.length,P=E?$n(E,{nextId:h,warn:n,chapterIndex:L,resolveImage:()=>(n("\u5185\u7F6E MOBI \u89E3\u6790\u5668\u65E0\u6CD5\u63D0\u53D6\u56FE\u7247\u8D44\u6E90\u3002"),null),resolveLink:m=>{let _=String(m||"").trim();if(!_)return null;if(/^(https?:|mailto:)/i.test(_))return{external:!0,href:_};if(_.startsWith("#"))return{chapter:L,anchor:_.slice(1)};let F=/filepos:(\d+)/i.exec(_);if(F){let V=Number(F[1]);for(let z=0;z<T.length;z+=1)if(V>=T[z].start&&V<T[z].end){let se=w.slice(0,z).filter(de=>de.trim()).length;return se<f.length?{chapter:se}:null}}return null}}):[];f.push({id:`ch${L}`,title:"",blocks:P})})}else f=ks(s,{nextId:h,title:l});if(!f||f.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let p=$o(f,[]),S={title:l,chapters:f,toc:p};return o.author&&(S.author=o.author),o.language&&(S.language=o.language),S}function um(t){return vh[t]||""}async function mo(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Kr(),i=gn(),a=null;try{let s=await Vr(t),l=nm(s);if(l.pdbType==="BOOKMOBI"){let h=l.isKf8||/^(azw3?|kf8)$/i.test(String(r).split(".").pop()||"");try{a=h?await Is(s):await Ms(s)}catch{try{a=h?await Ms(s):await Is(s)}catch{a=null}a||o("MOBI \u89E3\u6790\u5E93\u65E0\u6CD5\u6253\u5F00\u8BE5\u6587\u4EF6\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\uFF08\u53EF\u80FD\u7F3A\u5C11\u56FE\u7247\u4E0E\u76EE\u5F55\u4FE1\u606F\uFF09\u3002")}if(a)try{let g=a.getSpine?.()||[];(!Array.isArray(g)||g.length===0)&&(a.destroy?.(),a=null,o("MOBI \u9605\u8BFB\u987A\u5E8F\u4E3A\u7A7A\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\u3002"))}catch{a.destroy?.(),a=null,o("MOBI \u89E3\u6790\u5E93\u8FD4\u56DE\u5F02\u5E38\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\u3002")}}return{...a?cm(a,l,{fileName:r,tracker:i,warn:o}):hm(s,l,{fileName:r,warn:o}),warnings:n,dispose:()=>{try{a?.destroy?.()}catch{}i.dispose()}}}catch(s){try{a?.destroy?.()}catch{}throw i.dispose(),br(s,"\u65E0\u6CD5\u89E3\u6790 MOBI \u6587\u4EF6")}}var rm,xh,Ps,vh,yh=nr(()=>{ph();Fn();Fo();qa();Wn();rm=0,xh=2,Ps=17480,vh={65001:"utf-8",65e3:"utf-7",1250:"windows-1250",1251:"windows-1251",1252:"windows-1252",932:"shift_jis",936:"gb18030",949:"euc-kr",950:"big5"}});var Ls={};Xs(Ls,{extensionOf:()=>ja,parseBook:()=>bm});function gm(t){let e=t?`\u201C.${t}\u201D`:"\u8BE5\u6587\u4EF6";return new Error(`\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u683C\u5F0F\uFF1A${e}\u3002\u76EE\u524D\u652F\u6301 ${pm}\u3002`)}function Os(){return new Error("PDF \u6587\u4EF6\u8BF7\u4F7F\u7528 PDF \u9605\u8BFB\u6A21\u5F0F\u6253\u5F00\uFF08PDF \u7531\u72EC\u7ACB\u7684\u9605\u8BFB\u5668\u5904\u7406\uFF09\u3002")}async function mm(t){let e;try{e=new Uint8Array(await t.slice(0,256).arrayBuffer())}catch{return null}if(e.length>=8){if(String.fromCharCode(...e.subarray(0,4))==="%PDF")return"pdf";if(e[0]===80&&e[1]===75)return"epub";let o="";for(let i=60;i<68;i+=1){let a=e[i]??0;o+=a>=32&&a<127?String.fromCharCode(a):" "}if(o==="BOOKMOBI"||o==="TEXtREAd")return"mobi"}let r=new TextDecoder("utf-8").decode(e.subarray(0,Math.min(e.length,200)));return/^\s*(?:<!doctype\s+html|<html|<head|<body)/i.test(r)?"html":Ga(r)?null:"txt"}async function bm(t,e={}){let r=typeof e.fileName=="string"?e.fileName:"",n=typeof e.mime=="string"?e.mime:"",o=ja(r);if(o==="pdf")throw Os();let i=Lr[o]||null;if(!i){let a=n.toLowerCase().split(";")[0].trim();if(a==="application/pdf")throw Os();i=fm[a]||null}if(!i&&!o){let a=await mm(t);if(a==="pdf")throw Os();i=a&&Lr[a]||null}if(!i)throw gm(o);try{let a=await i.parse(t,{fileName:r,mime:n});return{...a,title:a.title||Un(r),format:i.format,warnings:Array.isArray(a.warnings)?a.warnings:[]}}catch(a){throw br(a,"\u65E0\u6CD5\u6253\u5F00\u6587\u6863")}}var Lr,fm,pm,Ds=nr(()=>{Md();Rd();Fd();yh();qa();Wn();Lr={epub:{parse:Id,format:"epub"},mobi:{parse:mo,format:"mobi"},prc:{parse:mo,format:"mobi"},azw:{parse:mo,format:"mobi"},azw3:{parse:mo,format:"mobi"},kf8:{parse:mo,format:"mobi"},txt:{parse:_s,format:"txt"},text:{parse:_s,format:"txt"},md:{parse:Wo,format:"md"},markdown:{parse:Wo,format:"md"},mdown:{parse:Wo,format:"md"},mkd:{parse:Wo,format:"md"},html:{parse:Ho,format:"html"},htm:{parse:Ho,format:"html"},xhtml:{parse:Ho,format:"html"},xht:{parse:Ho,format:"html"}},fm={"application/epub+zip":Lr.epub,"application/x-mobipocket-ebook":Lr.mobi,"application/x-mobi":Lr.mobi,"application/vnd.amazon.ebook":Lr.mobi,"text/plain":Lr.txt,"text/markdown":Lr.md,"text/x-markdown":Lr.md,"text/html":Lr.html,"application/xhtml+xml":Lr.html},pm="EPUB\u3001MOBI/KF8\u3001TXT\u3001Markdown \u548C HTML"});var Mm={};Xs(Mm,{PANEL_ID:()=>Hs,apply:()=>Im,inject:()=>Nm,name:()=>Am});module.exports=Vh(Mm);var jx=require("react");var H=Ct(require("react"),1);var En=Ct(require("react"),1);var Pm=require("react"),U=require("react/jsx-runtime");function nt({size:t=18,children:e,viewBox:r="0 0 24 24",fill:n="none",strokeWidth:o=1.7,...i}){return(0,U.jsx)("svg",{width:t,height:t,viewBox:r,fill:n,stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",...i,children:e})}function Ks(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5Z"}),(0,U.jsx)("path",{d:"M4 18.5A2.5 2.5 0 0 1 6.5 16H20"}),(0,U.jsx)("path",{d:"M8 7h8M8 10.5h5"})]})}function di(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M12 6.5C10.6 5.2 8.7 4.6 6.5 4.6H3v13h3.9c2 0 3.8.6 5.1 1.8 1.3-1.2 3.1-1.8 5.1-1.8H21v-13h-3.5c-2.2 0-4.1.6-5.5 1.9Z"}),(0,U.jsx)("path",{d:"M12 6.5v12.9"})]})}function Ys(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M19 12H5"}),(0,U.jsx)("path",{d:"m11 18-6-6 6-6"})]})}function Zs(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M12 16V4"}),(0,U.jsx)("path",{d:"m7 9 5-5 5 5"}),(0,U.jsx)("path",{d:"M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15"})]})}function hi(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("circle",{cx:"11",cy:"11",r:"7"}),(0,U.jsx)("path",{d:"m20 20-3.6-3.6"})]})}function hn(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"m12 3 1.5 4.2L18 9l-4.5 1.8L12 15l-1.5-4.2L6 9l4.5-1.8L12 3Z"}),(0,U.jsx)("path",{d:"m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"}),(0,U.jsx)("path",{d:"m5 13 .7 1.8L7.5 15.5l-1.8.7L5 18l-.7-1.8L2.5 15.5l1.8-.7L5 13Z"})]})}function Kn(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M4 5h8M8 3v2c0 4.2-1.8 7.2-5 9"}),(0,U.jsx)("path",{d:"M5 10c1.8 2.2 4 3.6 6.8 4.4"}),(0,U.jsx)("path",{d:"m13 20 3.6-9L20 20"}),(0,U.jsx)("path",{d:"M14.6 16.8h4.8"})]})}function hr(t){return(0,U.jsx)(nt,{...t,children:(0,U.jsx)("path",{d:"m6 6 12 12M18 6 6 18"})})}function ea(t){return(0,U.jsx)(nt,{...t,children:(0,U.jsx)("path",{d:"m15 18-6-6 6-6"})})}function ta(t){return(0,U.jsx)(nt,{...t,children:(0,U.jsx)("path",{d:"m9 18 6-6-6-6"})})}function ui(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M8 6h12M8 12h12M8 18h12"}),(0,U.jsx)("path",{d:"M4 6h.01M4 12h.01M4 18h.01"})]})}function ra(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("circle",{cx:"12",cy:"12",r:"3.2"}),(0,U.jsx)("path",{d:"M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"})]})}function Yn(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M4 7h16M9 7V5h6v2M7 7l.7 12.2A1.8 1.8 0 0 0 9.5 21h5a1.8 1.8 0 0 0 1.8-1.8L17 7"}),(0,U.jsx)("path",{d:"M10 11v6M14 11v6"})]})}function Qs(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),(0,U.jsx)("path",{d:"M5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V5"})]})}function na(t){return(0,U.jsx)(nt,{...t,children:(0,U.jsx)("path",{d:"M12 5v14M5 12h14"})})}function Js(t){return(0,U.jsx)(nt,{...t,children:(0,U.jsx)("path",{d:"M5 12h14"})})}function el(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M20 11a8 8 0 1 0-2.3 6.3"}),(0,U.jsx)("path",{d:"M20 4v7h-7"})]})}function tl(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M14 4h6v6M20 4l-9 9"}),(0,U.jsx)("path",{d:"M19 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"})]})}function oa({size:t=18}){return(0,U.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[(0,U.jsx)("path",{fill:"#4285F4",d:"M22.6 12.23c0-.78-.07-1.53-.2-2.25H12v4.26h5.94a5.08 5.08 0 0 1-2.2 3.33v2.77h3.56c2.08-1.92 3.3-4.74 3.3-8.11Z"}),(0,U.jsx)("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.77c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"}),(0,U.jsx)("path",{fill:"#FBBC05",d:"M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"}),(0,U.jsx)("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.2 1.64l3.15-3.15A10.97 10.97 0 0 0 12 1 11 11 0 0 0 2.18 7.06L5.84 9.9C6.71 7.3 9.14 5.38 12 5.38Z"})]})}function aa({size:t=18}){return(0,U.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[(0,U.jsx)("path",{fill:"currentColor",d:"M12 3 1.5 8.5 12 14l8.6-4.5v6.2h1.9V8.5L12 3Z",opacity:".9"}),(0,U.jsx)("path",{fill:"currentColor",d:"M6.2 11.4v4.1c0 2.2 2.6 4 5.8 4s5.8-1.8 5.8-4v-4.1L12 14.4l-5.8-3Z",opacity:".65"})]})}function rl(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"m15 4 1 2.2L18.2 7 16 8 15 10.2 14 8l-2.2-1L14 6.2 15 4Z"}),(0,U.jsx)("path",{d:"m5 19 8.5-8.5"}),(0,U.jsx)("path",{d:"m4 14 6 6"})]})}function nl(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M20 13 13 20a2 2 0 0 1-2.8 0L3 12.8V3h9.8L20 10.2a2 2 0 0 1 0 2.8Z"}),(0,U.jsx)("circle",{cx:"7.5",cy:"7.5",r:"1.2"})]})}function ia(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"m14 4 6 6-9.5 9.5H5v-5L14 4Z"}),(0,U.jsx)("path",{d:"M12 21h9"}),(0,U.jsx)("path",{d:"M14 6.5 17.5 10"})]})}function sa(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M12 3a9 9 0 1 0 0 18h1.2a1.8 1.8 0 0 0 1.3-3l-.6-.7a1.6 1.6 0 0 1 1.2-2.7h1.6A4.3 4.3 0 0 0 21 10.3 7.7 7.7 0 0 0 12 3Z"}),(0,U.jsx)("circle",{cx:"7.5",cy:"11",r:"1"}),(0,U.jsx)("circle",{cx:"10",cy:"7.2",r:"1"}),(0,U.jsx)("circle",{cx:"15",cy:"7.2",r:"1"}),(0,U.jsx)("circle",{cx:"17",cy:"11",r:"1"})]})}function fi(t){return(0,U.jsx)(nt,{...t,children:(0,U.jsx)("path",{d:"M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"})})}function ol(t){return(0,U.jsx)(nt,{...t,children:(0,U.jsx)("path",{d:"M3 8h5V3M21 8h-5V3M3 16h5v5M21 16h-5v5"})})}function la(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M12 3v12"}),(0,U.jsx)("path",{d:"m7 10 5 5 5-5"}),(0,U.jsx)("path",{d:"M4 18v2h16v-2"})]})}function al(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"}),(0,U.jsx)("path",{d:"M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"})]})}function il(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"}),(0,U.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})}function sl(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"m3 3 18 18"}),(0,U.jsx)("path",{d:"M10.6 6.1A10.7 10.7 0 0 1 12 6c6 0 9.5 6 9.5 6a16.5 16.5 0 0 1-3.2 3.7"}),(0,U.jsx)("path",{d:"M6.2 6.7C3.9 8.4 2.5 12 2.5 12S6 18 12 18c1.3 0 2.5-.3 3.5-.8"}),(0,U.jsx)("path",{d:"M9.9 9.9a3 3 0 0 0 4.2 4.2"})]})}var Kh="dsh-reader";var Mt="books",Ut="annotations",Lt="assets",Cr="pdfTranslations",ca="reader-background",ll="dsh-reader:settings:v1";var It=Object.freeze({settingsVersion:2,autoTranslate:!1,hideTranslations:!1,fontSize:18,lineHeight:1.85,tocWidth:260,readingMode:"scroll",pageAnimation:"slide",bookAnimation:"slide",showToc:!0,aiOpen:!1,theme:"auto",fontFamily:"serif",fontWeight:400,contentWidth:760,brightness:1,backgroundPreset:"paper",customBackground:"#fbf7ee",textTone:"auto",backgroundImageKey:"",backgroundImageOpacity:.26,backgroundImageBlur:0,annotationPanelOpen:!1}),da=Object.freeze([{id:"book",label:"\u4E66\u7C4D",hint:"EPUB / MOBI / TXT \u4E0E\u4E66\u7C4D\u578B PDF"},{id:"paper",label:"\u6587\u732E",hint:"\u8BBA\u6587\u3001\u62A5\u544A\u3001\u5B66\u672F PDF"},{id:"document",label:"\u6587\u6863",hint:"Markdown / HTML \u7B49\u77ED\u6587\u6863"}]),pi=new Set(da.map(t=>t.id)),Yh=new Set(["paper","white","sepia","green","night","custom"]),Zh=new Set(["serif","sans","kai","system"]),Qh=new Set(["scroll","book"]),Jh=new Set(["slide","fade","push","flip"]),eu=new Set(["slide","cover","flip"]),tu=new Set([400,500,600]),ru=new Set(["auto","dark","light"]);function Dt(){return new Promise((t,e)=>{if(typeof indexedDB>"u"){e(new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 IndexedDB\uFF0C\u65E0\u6CD5\u4FDD\u5B58\u4E66\u67B6\u3002"));return}let r=indexedDB.open(Kh,3);r.onupgradeneeded=()=>{let n=r.result;n.objectStoreNames.contains(Mt)||n.createObjectStore(Mt,{keyPath:"id"}).createIndex("lastOpenedAt","lastOpenedAt"),n.objectStoreNames.contains(Ut)||n.createObjectStore(Ut,{keyPath:"id"}).createIndex("bookId","bookId"),n.objectStoreNames.contains(Lt)||n.createObjectStore(Lt,{keyPath:"key"}),n.objectStoreNames.contains(Cr)||n.createObjectStore(Cr,{keyPath:"key"}).createIndex("bookId","bookId")},r.onsuccess=()=>t(r.result),r.onerror=()=>e(r.error??new Error("\u6253\u5F00\u4E66\u67B6\u6570\u636E\u5E93\u5931\u8D25\u3002")),r.onblocked=()=>e(new Error("\u4E66\u67B6\u6570\u636E\u5E93\u88AB\u53E6\u4E00\u4E2A\u9875\u9762\u5360\u7528\uFF0C\u8BF7\u5173\u95ED\u5176\u5B83 DSH \u9875\u9762\u540E\u91CD\u8BD5\u3002"))})}function ur(t){return new Promise((e,r)=>{t.oncomplete=()=>e(),t.onerror=()=>r(t.error??new Error("\u4E66\u67B6\u5199\u5165\u5931\u8D25\u3002")),t.onabort=()=>r(t.error??new Error("\u4E66\u67B6\u5199\u5165\u5DF2\u53D6\u6D88\u3002"))})}function Sn(t){let e=/\.([^./\\]+)$/u.exec(String(t??""));return e?e[1].toLowerCase():""}function Zn(t){switch(t){case"pdf":return"PDF";case"epub":return"EPUB";case"mobi":return"MOBI";case"azw":return"AZW";case"azw3":return"AZW3";case"txt":return"TXT";case"md":return"Markdown";case"html":return"HTML";default:return String(t??"\u6587\u4EF6").toUpperCase()}}function Qn(t){return da.find(e=>e.id===t)?.label??"\u672A\u5206\u7C7B"}function gi(t){return["pdf","epub","mobi","azw","azw3","txt","md","markdown","html","htm"].includes(Sn(t))}function nu(t){let e=String(t??"");return e.length===0?0:(e.match(/[\u3400-\u9fff\uf900-\ufaff]/gu)??[]).length/e.length}function mi(t={}){let e=String(t.format||Sn(t.title)||"").toLowerCase(),r=`${t.title||""} ${t.author||""}`;return e==="pdf"?/(?:^|\b)(book|novel|textbook|edition|volume|monograph|文集|全集|教材|小说|专著|丛书)(?:\b|$)/iu.test(r)||Number(t.size)>45*1024*1024?"book":"paper":["epub","mobi","azw","azw3","txt"].includes(e)?"book":"document"}async function ou(t){if(!globalThis.crypto?.subtle){let r=2166136261,n=new Uint8Array(t);for(let o=0;o<n.length;o+=1)r^=n[o],r=Math.imul(r,16777619);return(r>>>0).toString(16).padStart(8,"0")}let e=await globalThis.crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(e)].map(r=>r.toString(16).padStart(2,"0")).join("")}async function au(t){let e=await t.slice(0,Math.min(t.size,1048576)).arrayBuffer();return`${(await ou(e)).slice(0,20)}-${t.size}-${String(t.name).replace(/[^\w.-]+/gu,"_").slice(-48)}`}async function bi(){let t=await Dt();try{let n=t.transaction(Mt,"readonly").objectStore(Mt).index("lastOpenedAt").openCursor(null,"prev"),o=[];return await new Promise((i,a)=>{n.onsuccess=()=>{let s=n.result;if(!s){i();return}let l=s.value;o.push({id:l.id,title:l.title,author:l.author,format:l.format,size:l.size,addedAt:l.addedAt,lastOpenedAt:l.lastOpenedAt,progress:l.progress??null,language:l.language??"",cover:typeof l.cover=="string"?l.cover:"",category:pi.has(l.category)?l.category:mi(l),categoryManual:!!l.categoryManual}),s.continue()},n.onerror=()=>a(n.error)}),o}finally{t.close()}}async function yo(t){let e=await Dt();try{let n=e.transaction(Mt,"readonly").objectStore(Mt).get(t);return await new Promise((o,i)=>{n.onsuccess=()=>o(n.result??null),n.onerror=()=>i(n.error)})}finally{e.close()}}async function cl(t,{title:e,author:r,language:n}={}){if(!gi(t.name))throw new Error(`\u6682\u4E0D\u652F\u6301 .${Sn(t.name)||"\u672A\u77E5"} \u6587\u4EF6\u3002\u8BF7\u9009\u62E9 PDF / EPUB / MOBI / TXT / Markdown / HTML\u3002`);if(t.size>335544320)throw new Error(`\u6587\u4EF6\u8D85\u8FC7 ${Math.round(335544320/1024/1024)} MB\uFF0C\u6D4F\u89C8\u5668\u4E66\u67B6\u65E0\u6CD5\u5BB9\u7EB3\u3002`);let o=await au(t),i=await yo(o),a=Date.now(),s=i?.id??o,l=Sn(t.name)==="markdown"?"md":Sn(t.name),d={title:String(e??i?.title??t.name.replace(/\.[^.]+$/u,"")).trim()||"\u672A\u547D\u540D\u6587\u6863",author:String(r??i?.author??"").trim(),language:String(n??i?.language??""),format:l,size:t.size},h={id:s,...d,category:i?.category&&pi.has(i.category)?i.category:mi(d),categoryManual:!!i?.categoryManual,cover:typeof i?.cover=="string"?i.cover:"",addedAt:i?.addedAt??a,lastOpenedAt:a,progress:i?.progress??null,blob:t},g=await Dt();try{let f=g.transaction(Mt,"readwrite");return f.objectStore(Mt).put(h),await ur(f),h}catch(f){throw f?.name==="QuotaExceededError"?new Error("\u6D4F\u89C8\u5668\u5B58\u50A8\u7A7A\u95F4\u5DF2\u6EE1\uFF0C\u65E0\u6CD5\u52A0\u5165\u4E66\u67B6\u3002\u8BF7\u5220\u9664\u4E00\u4E9B\u4E66\u540E\u91CD\u8BD5\u3002"):f}finally{g.close()}}async function Jn(t,e){let r=await yo(t);if(!r)return null;let n={...r,...e},o=await Dt();try{let i=o.transaction(Mt,"readwrite");return i.objectStore(Mt).put(n),await ur(i),n}finally{o.close()}}async function dl(t,e,{manual:r=!0}={}){if(!pi.has(e))throw new Error("\u672A\u77E5\u7684\u4E66\u7C4D\u5206\u7C7B\u3002");return Jn(t,{category:e,categoryManual:r})}async function hl(){let t=await bi(),e={book:0,paper:0,document:0},r=0;for(let n of t){if(n.categoryManual){e[n.category]=(e[n.category]||0)+1;continue}let o=mi(n);e[o]=(e[o]||0)+1,o!==n.category&&(await Jn(n.id,{category:o,categoryManual:!1}),r+=1)}return{changed:r,counts:e}}async function xi(t,e){return Jn(t,{lastOpenedAt:Date.now(),...e!==void 0?{progress:e}:{}})}async function ul(t){let e=await Dt();try{let r=e.transaction([Mt,Ut,Cr,Lt],"readwrite");r.objectStore(Mt).delete(t),r.objectStore(Lt).delete(`pdf-translation:${t}`);let n=r.objectStore(Cr).index("bookId").openKeyCursor(IDBKeyRange.only(t));n.onsuccess=()=>{let a=n.result;a&&(r.objectStore(Cr).delete(a.primaryKey),a.continue())};let i=r.objectStore(Ut).index("bookId").openKeyCursor(IDBKeyRange.only(t));i.onsuccess=()=>{let a=i.result;a&&(r.objectStore(Ut).delete(a.primaryKey),a.continue())},await ur(r)}finally{e.close()}}async function fl(){let t=await Dt();try{let e=t.transaction([Mt,Ut,Cr,Lt],"readwrite");e.objectStore(Mt).clear(),e.objectStore(Ut).clear(),e.objectStore(Cr).clear();let r=e.objectStore(Lt).openKeyCursor();r.onsuccess=()=>{let n=r.result;n&&(String(n.key).startsWith("pdf-translation:")&&e.objectStore(Lt).delete(n.primaryKey),n.continue())},await ur(e)}finally{t.close()}}async function pl(t){let e=await Dt();try{let r=e.transaction(Cr,"readonly").objectStore(Cr).get(t);return await new Promise((n,o)=>{r.onsuccess=()=>n(r.result||null),r.onerror=()=>o(r.error)})}finally{e.close()}}async function gl(t){let e=await Dt();try{let r=e.transaction([Mt,Cr],"readwrite"),n=r.objectStore(Mt).get(t.bookId);n.onsuccess=()=>{n.result&&r.objectStore(Cr).put({...t,updatedAt:Date.now()})},await ur(r)}finally{e.close()}}async function ml(t){let e=await Dt();try{let r=e.transaction(Lt,"readonly").objectStore(Lt).get(`pdf-translation:${t}`);return await new Promise((n,o)=>{r.onsuccess=()=>n(r.result?.value||{}),r.onerror=()=>o(r.error)})}finally{e.close()}}async function bl(t,e){let r=await Dt();try{let n=r.transaction([Mt,Lt],"readwrite"),o=n.objectStore(Mt).get(t);o.onsuccess=()=>{o.result&&n.objectStore(Lt).put({key:`pdf-translation:${t}`,value:e})},await ur(n)}finally{r.close()}}function iu(t="a"){return globalThis.crypto?.randomUUID?`${t}-${crypto.randomUUID()}`:`${t}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}async function xl(t){let e=await Dt();try{let o=e.transaction(Ut,"readonly").objectStore(Ut).index("bookId").getAll(t);return(await new Promise((a,s)=>{o.onsuccess=()=>a(o.result??[]),o.onerror=()=>s(o.error)})).sort((a,s)=>{let l=Number.isFinite(a.page)?a.page:Number.MAX_SAFE_INTEGER,d=Number.isFinite(s.page)?s.page:Number.MAX_SAFE_INTEGER;if(l!==d)return l-d;let h=Number.isFinite(a.chapterIndex)?a.chapterIndex:Number.MAX_SAFE_INTEGER,g=Number.isFinite(s.chapterIndex)?s.chapterIndex:Number.MAX_SAFE_INTEGER;return h!==g?h-g:(a.createdAt||0)-(s.createdAt||0)})}finally{e.close()}}async function vl(t){let e=Date.now(),r={...t,id:t.id||iu(),createdAt:t.createdAt||e,updatedAt:e};if(!r.bookId)throw new Error("\u6279\u6CE8\u7F3A\u5C11\u4E66\u7C4D\u4FE1\u606F\u3002");if(!r.kind||!r.style)throw new Error("\u6279\u6CE8\u7F3A\u5C11\u7C7B\u578B\u3002");let n=await Dt();try{let o=n.transaction(Ut,"readwrite");return o.objectStore(Ut).put(r),await ur(o),r}finally{n.close()}}async function yl(t,e){let r=await Dt();try{let n=r.transaction(Ut,"readwrite"),o=n.objectStore(Ut),i=await new Promise((s,l)=>{let d=o.get(t);d.onsuccess=()=>s(d.result??null),d.onerror=()=>l(d.error)});if(!i)return await ur(n),null;let a={...i,...e,id:i.id,updatedAt:Date.now()};return o.put(a),await ur(n),a}finally{r.close()}}async function wl(t){let e=await Dt();try{let r=e.transaction(Ut,"readwrite");r.objectStore(Ut).delete(t),await ur(r)}finally{e.close()}}async function kl(t){if(!t||!t.size)throw new Error("\u80CC\u666F\u56FE\u7247\u4E3A\u7A7A\u3002");if(t.size>16777216)throw new Error(`\u80CC\u666F\u56FE\u7247\u8D85\u8FC7 ${Math.round(16777216/1024/1024)} MB\uFF0C\u8BF7\u9009\u62E9\u66F4\u5C0F\u7684\u56FE\u7247\u3002`);let e=await Dt();try{let r=e.transaction(Lt,"readwrite");return r.objectStore(Lt).put({key:ca,blob:t,type:t.type||"image/*",size:t.size,updatedAt:Date.now()}),await ur(r),ca}finally{e.close()}}async function _l(){let t=await Dt();try{let r=t.transaction(Lt,"readonly").objectStore(Lt).get(ca);return(await new Promise((o,i)=>{r.onsuccess=()=>o(r.result??null),r.onerror=()=>i(r.error)}))?.blob??null}finally{t.close()}}async function Tl(){let t=await Dt();try{let e=t.transaction(Lt,"readwrite");e.objectStore(Lt).delete(ca),await ur(e)}finally{t.close()}}function Tn(t,e,r,n){let o=Number(t);return Number.isFinite(o)?Math.max(e,Math.min(r,o)):n}function su(t,e){return/^#[0-9a-f]{6}$/iu.test(String(t))?String(t):e}function Sl(){try{let t=localStorage.getItem(ll);if(!t)return{...It};let e=JSON.parse(t),n=(Number(e.settingsVersion)||1)>=2&&typeof e.autoTranslate=="boolean"?e.autoTranslate:!1;return{...It,...e,settingsVersion:2,autoTranslate:n,hideTranslations:!!e.hideTranslations,fontSize:Tn(e.fontSize,13,34,It.fontSize),lineHeight:Tn(e.lineHeight,1.35,2.4,It.lineHeight),tocWidth:Tn(e.tocWidth,180,520,It.tocWidth),readingMode:e.readingMode==="page"?"book":Qh.has(e.readingMode)?e.readingMode:It.readingMode,pageAnimation:Jh.has(e.pageAnimation)?e.pageAnimation:It.pageAnimation,bookAnimation:eu.has(e.bookAnimation)?e.bookAnimation:It.bookAnimation,fontFamily:Zh.has(e.fontFamily)?e.fontFamily:It.fontFamily,fontWeight:tu.has(Number(e.fontWeight))?Number(e.fontWeight):It.fontWeight,contentWidth:Tn(e.contentWidth,520,1600,It.contentWidth),brightness:Tn(e.brightness,.6,1.2,It.brightness),backgroundPreset:Yh.has(e.backgroundPreset)?e.backgroundPreset:It.backgroundPreset,customBackground:su(e.customBackground,It.customBackground),textTone:ru.has(e.textTone)?e.textTone:It.textTone,backgroundImageKey:typeof e.backgroundImageKey=="string"?e.backgroundImageKey:"",backgroundImageOpacity:Tn(e.backgroundImageOpacity,0,.85,It.backgroundImageOpacity),backgroundImageBlur:Tn(e.backgroundImageBlur,0,12,It.backgroundImageBlur),annotationPanelOpen:!!e.annotationPanelOpen}}catch{return{...It}}}function El(t){try{localStorage.setItem(ll,JSON.stringify(t))}catch{}}function Al(t){let e=Number(t)||0;return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:e<1024*1024*1024?`${(e/1024/1024).toFixed(1)} MB`:`${(e/1024/1024/1024).toFixed(2)} GB`}function vi(t){if(!t)return"";let e=Date.now()-Number(t);return e<6e4?"\u521A\u521A":e<36e5?`${Math.floor(e/6e4)} \u5206\u949F\u524D`:e<864e5?`${Math.floor(e/36e5)} \u5C0F\u65F6\u524D`:e<7*864e5?`${Math.floor(e/864e5)} \u5929\u524D`:new Date(t).toLocaleDateString("zh-CN")}function Nl(t){let e=String(t??"").replace(/\s+/gu,"");if(e.length<40)return!1;let r=nu(e),n=(e.match(/[A-Za-zÀ-ÖØ-öø-ÿ\u0400-\u04ff]/gu)??[]).length/e.length;return r<.18&&n>.45}var Z=require("react/jsx-runtime");function Cl(t){let e=t.progress;return e?typeof e.page=="number"&&typeof e.pages=="number"&&e.pages>0?Math.max(0,Math.min(100,e.page/e.pages*100)):typeof e.percent=="number"?Math.max(0,Math.min(100,e.percent)):typeof e.chapter=="number"&&typeof e.chapters=="number"&&e.chapters>0?Math.max(0,Math.min(100,(e.chapter+1)/e.chapters*100)):0:0}var lu={book:"paper",paper:"document",document:"book"};function cu({book:t,onOpen:e,onDelete:r,onCycleCategory:n}){let o=Cl(t),i=[Zn(t.format),t.author||"",Al(t.size)].filter(Boolean).join(" \xB7 ");return(0,Z.jsxs)("div",{className:"dshr-book",role:"button",tabIndex:0,onClick:()=>e(t),onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),e(t))},children:[(0,Z.jsx)("div",{className:"dshr-book__media",children:t.cover?(0,Z.jsx)("img",{className:"dshr-book__cover",src:t.cover,alt:`${t.title||"\u6587\u6863"}\u5C01\u9762`,loading:"lazy"}):(0,Z.jsx)("div",{className:"dshr-book__spine",children:Zn(t.format)})}),(0,Z.jsxs)("div",{className:"dshr-book__body",children:[(0,Z.jsx)("div",{className:"dshr-book__title",children:t.title||"\u672A\u547D\u540D\u6587\u6863"}),(0,Z.jsx)("div",{className:"dshr-book__meta",children:i}),(0,Z.jsxs)("div",{className:"dshr-book__foot",children:[(0,Z.jsx)("span",{children:t.lastOpenedAt?`\u9605\u8BFB\u4E8E ${vi(t.lastOpenedAt)}`:vi(t.addedAt)}),(0,Z.jsx)("span",{children:o>0?`${Math.round(o)}%`:"\u672A\u5F00\u59CB"})]}),(0,Z.jsx)("div",{className:"dshr-book__progress","aria-hidden":"true",children:(0,Z.jsx)("i",{style:{"--p":`${o}%`}})})]}),(0,Z.jsxs)("div",{className:"dshr-book__badges",children:[(0,Z.jsxs)("button",{type:"button",className:`dshr-book__category is-${t.category||"document"}`,title:`\u5206\u7C7B\uFF1A${Qn(t.category)}${t.categoryManual?"\uFF08\u624B\u52A8\uFF09":"\uFF08\u81EA\u52A8\uFF09"} \xB7 \u70B9\u51FB\u5207\u6362`,onClick:a=>{a.stopPropagation(),n(t)},children:[(0,Z.jsx)(nl,{size:11})," ",Qn(t.category)]}),(0,Z.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost dshr-book__delete","aria-label":`\u4ECE\u4E66\u67B6\u5220\u9664 ${t.title||"\u8FD9\u672C\u4E66"}`,title:"\u4ECE\u4E66\u67B6\u5220\u9664",onClick:a=>{a.stopPropagation(),r(t)},children:(0,Z.jsx)(Yn,{size:14})})]})]})}function Il({books:t,loading:e,resumeBook:r,onResume:n,importing:o,organizing:i,categoryFilter:a,onCategoryFilter:s,onAutoOrganize:l,onImport:d,onOpen:h,onDelete:g,onCycleCategory:f,onSettings:p,onOnlineImport:S}){let w=En.default.useRef(null),[x,T]=En.default.useState(!1),[M,N]=En.default.useState(""),R=En.default.useRef(0),C=En.default.useMemo(()=>{let m={all:t.length,book:0,paper:0,document:0};for(let _ of t)m[_.category]=(m[_.category]||0)+1;return m},[t]),E=En.default.useMemo(()=>{let m=M.trim().toLowerCase();return t.filter(_=>a!=="all"&&_.category!==a?!1:m?`${_.title} ${_.author||""}`.toLowerCase().includes(m):!0)},[t,a,M]),L=()=>w.current?.click(),P=m=>{m.preventDefault(),R.current=0,T(!1);let _=[...m.dataTransfer?.files??[]].filter(F=>gi(F.name));if(_.length===0){d([],{rejected:!0});return}d(_)};return(0,Z.jsxs)("div",{className:"dshr-library",children:[(0,Z.jsxs)("div",{className:"dshr-library__inner",children:[(0,Z.jsxs)("header",{className:"dshr-hero",children:[(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("div",{className:"dshr-hero__eyebrow",children:[(0,Z.jsx)(di,{size:15})," DSH READER \xB7 LIBRARY"]}),(0,Z.jsx)("h1",{children:"\u4F60\u7684\u8DE8\u8BED\u8A00\u9605\u8BFB\u52A9\u624B"}),(0,Z.jsx)("p",{children:"PDF\u3001EPUB\u3001MOBI\u3001TXT \u90FD\u80FD\u5728\u8FD9\u91CC\u6253\u5F00\u3002\u81EA\u52A8\u6574\u7406\u6210\u4E66\u7C4D\u4E0E\u6587\u732E\u4E66\u5355\uFF0C \u8BFB\u5230\u5916\u6587\u65F6\u5B9E\u65F6\u5BF9\u7167\u4E2D\u6587\uFF1B\u9009\u4E2D\u6587\u5B57\u5373\u53EF\u7FFB\u8BD1\u3001\u95EE AI \u6216\u8DF3\u8F6C Google \u641C\u7D22\u3002"})]}),(0,Z.jsxs)("div",{className:"dshr-hero__actions",children:[(0,Z.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:L,disabled:o,children:[o?(0,Z.jsx)("span",{className:"dshr-spinner"}):(0,Z.jsx)(na,{size:15}),o?"\u6B63\u5728\u52A0\u5165\u4E66\u67B6\u2026":"\u5BFC\u5165\u6587\u6863"]}),(0,Z.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:S,title:"\u4ECE\u53E4\u767B\u5821\u3001Standard Ebooks\u3001arXiv \u7B49\u516C\u5F00\u6765\u6E90\u4E0B\u8F7D\u5E76\u6253\u5F00",children:[(0,Z.jsx)(la,{size:15})," \u516C\u5F00\u4E66\u5E93\u5BFC\u5165"]}),(0,Z.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:l,disabled:i||t.length===0,title:"\u6309\u6587\u4EF6\u7C7B\u578B\u4E0E\u5143\u6570\u636E\uFF0C\u628A\u4E66\u67B6\u6574\u7406\u6210\u4E66\u7C4D / \u6587\u732E / \u6587\u6863",children:[i?(0,Z.jsx)("span",{className:"dshr-spinner"}):(0,Z.jsx)(rl,{size:15}),i?"\u6574\u7406\u4E2D\u2026":"\u4E00\u952E\u6574\u7406"]}),(0,Z.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:p,title:"\u9605\u8BFB\u4E0E\u4E66\u67B6\u8BBE\u7F6E",children:[(0,Z.jsx)(ra,{size:15})," \u8BBE\u7F6E"]})]})]}),r?(0,Z.jsxs)("button",{type:"button",className:"dshr-resume",onClick:()=>n(r),children:[(0,Z.jsx)("span",{className:"dshr-resume__mark",children:(0,Z.jsx)(di,{size:19})}),(0,Z.jsxs)("span",{className:"dshr-resume__body",children:[(0,Z.jsx)("span",{className:"dshr-resume__eyebrow",children:"\u7EE7\u7EED\u4E0A\u6B21\u9605\u8BFB"}),(0,Z.jsx)("strong",{children:r.title||"\u4E0A\u6B21\u6253\u5F00\u7684\u6587\u6863"}),(0,Z.jsxs)("span",{className:"dshr-resume__meta",children:[Zn(r.format),r.progress?.page?` \xB7 \u7B2C ${r.progress.page}${r.progress.pages?` / ${r.progress.pages}`:""} \u9875`:"",` \xB7 ${Math.round(Cl(r))}%`]})]}),(0,Z.jsx)("span",{className:"dshr-resume__arrow",children:"\u2192"})]}):null,(0,Z.jsxs)("section",{className:`dshr-drop${x?" is-over":""}`,onDragEnter:m=>{m.preventDefault(),R.current+=1,T(!0)},onDragOver:m=>m.preventDefault(),onDragLeave:()=>{R.current=Math.max(0,R.current-1),R.current===0&&T(!1)},onDrop:P,"aria-label":"\u62D6\u653E\u6587\u6863\u4EE5\u5BFC\u5165",children:[(0,Z.jsx)("div",{className:"dshr-drop__mark",children:(0,Z.jsx)(Zs,{size:24})}),(0,Z.jsxs)("div",{className:"dshr-drop__body",children:[(0,Z.jsx)("div",{className:"dshr-drop__title",children:"\u62D6\u4E00\u4EFD\u6587\u732E\u6216\u4E66\u5230\u8FD9\u91CC\uFF0C\u6216\u70B9\u51FB\u5BFC\u5165"}),(0,Z.jsx)("div",{className:"dshr-drop__hint",children:"\u6587\u4EF6\u53EA\u4FDD\u5B58\u5728\u672C\u673A\u6D4F\u89C8\u5668\u4E66\u67B6\u4E2D\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\uFF1B\u7FFB\u8BD1\u4EC5\u53D1\u9001\u5F53\u524D\u9009\u4E2D\u7684\u6BB5\u843D\u3002"}),(0,Z.jsx)("div",{className:"dshr-drop__formats",children:["PDF","EPUB","MOBI","AZW3","TXT","Markdown","HTML"].map(m=>(0,Z.jsx)("span",{className:"dshr-chip",children:m},m))})]}),(0,Z.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:L,disabled:o,children:"\u9009\u62E9\u6587\u4EF6"})]}),(0,Z.jsxs)("div",{className:"dshr-library__bar",children:[(0,Z.jsx)("h2",{children:"\u6211\u7684\u4E66\u67B6"}),(0,Z.jsxs)("div",{className:"dshr-library__search",children:[(0,Z.jsx)(hi,{size:14}),(0,Z.jsx)("input",{type:"search",value:M,onChange:m=>N(m.target.value),placeholder:"\u641C\u7D22\u4E66\u540D\u3001\u4F5C\u8005","aria-label":"\u641C\u7D22\u4E66\u67B6"})]}),(0,Z.jsxs)("span",{children:[E.length," / ",t.length," \u672C \xB7 \u6700\u8FD1\u9605\u8BFB\u4F18\u5148"]})]}),(0,Z.jsxs)("div",{className:"dshr-library__tabs",role:"tablist","aria-label":"\u4E66\u67B6\u5206\u7C7B",children:[(0,Z.jsxs)("button",{type:"button",role:"tab","aria-selected":a==="all",className:`dshr-library__tab${a==="all"?" is-active":""}`,onClick:()=>s("all"),children:["\u5168\u90E8 ",(0,Z.jsx)("span",{children:C.all})]}),da.map(m=>(0,Z.jsxs)("button",{type:"button",role:"tab","aria-selected":a===m.id,className:`dshr-library__tab${a===m.id?" is-active":""}`,onClick:()=>s(m.id),title:m.hint,children:[m.label," ",(0,Z.jsx)("span",{children:C[m.id]||0})]},m.id)),(0,Z.jsx)("span",{className:"dshr-library__tabs-hint",children:"\u70B9\u5361\u7247\u53F3\u4E0A\u89D2\u5206\u7C7B\u6807\u7B7E\u53EF\u624B\u52A8\u5207\u6362"})]}),e?(0,Z.jsxs)("div",{className:"dshr-loading",style:{minHeight:180},children:[(0,Z.jsx)("div",{className:"dshr-loading__ring"}),(0,Z.jsx)("span",{children:"\u6B63\u5728\u6253\u5F00\u4E66\u67B6\u2026"})]}):E.length===0?(0,Z.jsx)("div",{className:"dshr-empty-books",children:t.length===0?"\u4E66\u67B6\u662F\u7A7A\u7684\u3002\u5BFC\u5165\u7B2C\u4E00\u7BC7\u8BBA\u6587\u3001\u7B2C\u4E00\u672C\u4E66\uFF0C\u6216\u628A\u6587\u4EF6\u62D6\u8FDB\u4E0A\u9762\u7684\u865A\u7EBF\u6846\u3002\u9996\u6B21\u9605\u8BFB\u540E\uFF0C\u8FDB\u5EA6\u4F1A\u81EA\u52A8\u8BB0\u5F55\u5728\u8FD9\u91CC\u3002":M.trim()?`\u6CA1\u6709\u5339\u914D\u300C${M.trim()}\u300D\u7684\u6587\u6863\u3002`:`\u300C${Qn(a)}\u300D\u4E66\u5355\u8FD8\u662F\u7A7A\u7684\u3002\u5BFC\u5165\u6587\u4EF6\uFF0C\u6216\u70B9\u5361\u7247\u4E0A\u7684\u5206\u7C7B\u6807\u7B7E\u628A\u5DF2\u6709\u6587\u6863\u79FB\u8FDB\u6765\u3002`}):(0,Z.jsx)("div",{className:"dshr-books",children:E.map(m=>(0,Z.jsx)(cu,{book:m,onOpen:h,onDelete:g,onCycleCategory:_=>f(_,lu[_.category||"document"])},m.id))}),(0,Z.jsxs)("footer",{className:"dshr-library__foot",children:[(0,Z.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,Z.jsx)(Kn,{size:14})," \u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1"]}),(0,Z.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,Z.jsx)(hn,{size:14})," \u9009\u4E2D\u95EE AI"]}),(0,Z.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,Z.jsx)(hi,{size:14})," Google / \u5B66\u672F\u641C\u7D22"]}),(0,Z.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,Z.jsx)(Ks,{size:14})," \u672C\u5730\u4E66\u67B6 \xB7 \u8FDB\u5EA6\u4E0E\u6279\u6CE8\u81EA\u52A8\u4FDD\u5B58"]})]})]}),(0,Z.jsx)("input",{ref:w,type:"file",multiple:!0,accept:".pdf,.epub,.mobi,.azw,.azw3,.txt,.md,.markdown,.html,.htm,application/pdf,application/epub+zip,text/plain,text/markdown,text/html",className:"dshr-sr-only",tabIndex:-1,onChange:m=>{let _=[...m.target.files??[]];m.target.value="",_.length>0&&d(_)}})]})}var ht=Ct(require("react"),1);var du=Object.freeze({"content-type":"application/json","x-dsh-reader":"1"}),$r=class extends Error{constructor(e,r="REQUEST_FAILED",n=0){super(e),this.name="ReaderApiError",this.code=r,this.status=n}};async function Rl(t){let e=null;try{e=await t.json()}catch{}return new $r(e?.error?.message||e?.message||`\u7FFB\u8BD1\u670D\u52A1\u4E0D\u53EF\u7528\uFF08HTTP ${t.status}\uFF09\u3002`,e?.error?.code||e?.code||"REQUEST_FAILED",t.status)}async function yi(t,e,{signal:r}={}){let n;try{n=await fetch(t,{method:"POST",headers:du,body:JSON.stringify(e),signal:r,credentials:"same-origin"})}catch(o){throw o?.name==="AbortError"?o:new $r("\u65E0\u6CD5\u8FDE\u63A5\u5230 DSH \u4E3B\u8FDB\u7A0B\uFF0C\u8BF7\u786E\u8BA4 DSH \u6B63\u5728\u8FD0\u884C\u3002","NETWORK",0)}if(!n.ok)throw await Rl(n);return n}function An(t){return t?.name==="AbortError"}async function eo(t,e={}){let r=t.map(a=>({id:String(a.id),text:String(a.text??"")})).filter(a=>a.text.trim()!=="");if(r.length===0)return{};let n=await yi("/dsh-reader/ai/translate",{segments:r,context:String(e.context??"").slice(0,1200),title:String(e.title??"").slice(0,300),glossary:String(e.glossary??"").slice(0,4e3),...e.expectedModel?{expectedModel:e.expectedModel}:{}},{signal:e.signal}),o=await n.json().catch(()=>null);if(!o||typeof o!="object"||!Array.isArray(o.translations))throw new $r("\u7FFB\u8BD1\u670D\u52A1\u8FD4\u56DE\u4E86\u65E0\u6CD5\u8BC6\u522B\u7684\u7ED3\u679C\u3002","BAD_RESPONSE",n.status);let i={};for(let a of o.translations)a&&typeof a.id=="string"&&typeof a.zh=="string"&&a.zh.trim()!==""&&(i[a.id]=a.zh);if(Object.keys(i).length===0)throw new $r("\u7FFB\u8BD1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u53EF\u7528\u8BD1\u6587\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","EMPTY_TRANSLATION",n.status);return e.includeMetadata?{translations:i,model:o.model,promptVersion:o.promptVersion}:i}async function Pl({signal:t}={}){let e=await fetch("/dsh-reader/ai/status",{signal:t,credentials:"same-origin",headers:{"x-dsh-reader":"1"},cache:"no-store"});if(!e.ok)throw await Rl(e);return e.json()}function Ml(t){let e=t.split(/\r?\n/u).filter(r=>r.startsWith("data:")).map(r=>r.slice(5).trimStart()).join(`
`);if(e==="")return null;try{return JSON.parse(e)}catch{return{type:"delta",text:e}}}async function wi(t,{onDelta:e,onMeta:r}={}){let n=await yi("/dsh-reader/ai/chat",t,{signal:t.signal});if(!n.body)throw new $r("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u6D41\u5F0F\u54CD\u5E94\u3002","NO_STREAM",n.status);let o=n.body.getReader(),i=new TextDecoder,a="",s=!1,l=null;try{for(;;){let{value:d,done:h}=await o.read();if(h)break;a+=i.decode(d,{stream:!0});let g=a.search(/\r?\n\r?\n/u);for(;g!==-1;){let f=a.slice(0,g),p=a.slice(g).match(/^\r?\n\r?\n/u)?.[0]??`

`;a=a.slice(g+p.length);let S=Ml(f);S&&(S.type==="delta"&&typeof S.text=="string"?e?.(S.text):S.type==="error"?l=new $r(S.message||"AI \u56DE\u7B54\u5931\u8D25\u3002",S.code||"AI_FAILED"):S.type==="done"?s=!0:r?.(S)),g=a.search(/\r?\n\r?\n/u)}}if(a.trim()!==""){let d=Ml(a);d?.type==="delta"&&typeof d.text=="string"&&e?.(d.text),d?.type==="error"&&(l=new $r(d.message||"AI \u56DE\u7B54\u5931\u8D25\u3002",d.code||"AI_FAILED")),d?.type==="done"&&(s=!0)}}finally{o.releaseLock?.()}if(l)throw l}async function Ol(t,{signal:e}={}){let r=await yi("/dsh-reader/import/fetch",{url:String(t||"")},{signal:e}),n=await r.blob();if(!n.size)throw new $r("\u6765\u6E90\u8FD4\u56DE\u4E86\u7A7A\u6587\u4EF6\u3002","EMPTY",0);let o="book",i=r.headers.get("x-dsh-reader-filename");if(i)try{o=decodeURIComponent(i)}catch{o=i}return new File([n],o,{type:n.type||"application/octet-stream"})}var rn=Ct(require("react"),1);var zl=Object.freeze([{id:"yellow",label:"\u9EC4",value:"#f5d76e"},{id:"green",label:"\u7EFF",value:"#8fd18b"},{id:"pink",label:"\u7C89",value:"#f3a6c0"},{id:"blue",label:"\u84DD",value:"#94c9f0"}]),wo=Object.freeze([{id:"thin",label:"\u7EC6",value:4},{id:"medium",label:"\u4E2D",value:9},{id:"wide",label:"\u5BBD",value:16}]),Bl=Object.freeze([{id:"ink",label:"\u58A8",value:"#3f3a33"},{id:"red",label:"\u6731",value:"#c2543f"},{id:"amber",label:"\u8D6D",value:"#a9772b"},{id:"blue",label:"\u84DD",value:"#3f6f97"}]),to=Object.freeze({highlight:"\u8367\u5149\u7B14",underline:"\u4E0B\u5212\u7EBF",note:"\u4FBF\u7B7E"}),ro=Object.freeze([{id:"highlight",label:to.highlight},{id:"underline",label:to.underline},{id:"note",label:to.note}]);function ki(t){return to[t]||"\u6807\u6CE8"}var pa="data-anno-block",$l=".dshr-block__body";function _i(t){return t?t.ownerDocument?t.ownerDocument:t.nodeType===9?t:typeof globalThis<"u"&&globalThis.document?globalThis.document:null:null}function Ir(t,e=0){let r=typeof t=="number"?t:Number(t);return Number.isFinite(r)?Math.trunc(r):e}function Wt(t,e,r){return Math.min(r,Math.max(e,t))}function ha(t,e=5){let r=10**e;return Math.round(t*r)/r}function fa(t){return String(t??"").replace(/\s+/gu," ").trim()}function hu(t){if(!t||t.nodeType!==1)return!1;let e=t.tagName;if(e==="SCRIPT"||e==="STYLE"||e==="NOSCRIPT"||e==="TEXTAREA"||e==="SVG"||e==="CANVAS")return!0;let r=t.classList;return!!(r&&(r.contains("dshr-translation")||r.contains("dshr-anno-ignore"))||typeof t.hasAttribute=="function"&&t.hasAttribute("data-anno-ignore"))}function Ti(t){let e=[],r=[],n=new Map,o=0;if(!t)return{nodes:e,starts:r,positions:n,total:o,text:""};let i=s=>{for(let l=s.firstChild;l;l=l.nextSibling)if(l.nodeType===3){let d=l.nodeValue||"";n.set(l,e.length),e.push(l),r.push(o),o+=d.length}else l.nodeType===1&&!hu(l)&&i(l)};i(t);let a="";for(let s=0;s<e.length;s+=1)a+=e[s].nodeValue||"";return{nodes:e,starts:r,positions:n,total:o,text:a}}function uu(t,e,r){if(!t||!e)return null;let n;try{n=t.createRange();let o=e.nodeType===3?e.nodeValue?e.nodeValue.length:0:e.childNodes?e.childNodes.length:0;return n.setStart(e,Wt(Ir(r),0,o)),n.collapse(!0),n}catch{return null}}function Ll(t,e,r,n){if(!r)return 0;if(r.nodeType===3){let o=t.positions.get(r),i=r.nodeValue||"";if(o!==void 0)return t.starts[o]+Wt(Ir(n),0,i.length)}if(r===e||e.contains(r)){let o=_i(e),i=uu(o,r,n);if(!i)return 0;let a=o.createRange();for(let s=0;s<t.nodes.length;s+=1)try{if(a.setStart(t.nodes[s],0),a.collapse(!0),i.compareBoundaryPoints(0,a)<=0)return t.starts[s]}catch{}return t.total}try{return e.compareDocumentPosition(r)&4?t.total:0}catch{return 0}}function Dl(t,e){if(!t.nodes.length)return null;let r=Wt(Ir(e),0,t.total);for(let o=0;o<t.nodes.length;o+=1){let i=t.nodes[o].nodeValue?t.nodes[o].nodeValue.length:0,a=t.starts[o];if(r<a+i)return{node:t.nodes[o],offset:r-a};if(r===a+i&&i>0)return{node:t.nodes[o],offset:i}}let n=t.nodes[t.nodes.length-1];return{node:n,offset:n.nodeValue?n.nodeValue.length:0}}function fu(t,e,r){if(!t)return null;let n=Ti(t);if(!n.nodes.length||n.total===0)return null;let o=Wt(Ir(e),0,n.total),i=Wt(Ir(r),0,n.total);i<o&&([o,i]=[i,o]);let a=Dl(n,o),s=Dl(n,i),l=_i(t);if(!l||!a||!s)return null;try{let d=l.createRange();return d.setStart(a.node,a.offset),d.setEnd(s.node,s.offset),d}catch{return null}}function Hl(t){let e=[];if(!t)return e;try{let r=typeof t.getClientRects=="function"?t.getClientRects():null;if(r&&typeof r.length=="number")for(let n=0;n<r.length;n+=1){let o=r[n];o&&e.push(o)}}catch{}if(e.length===0)try{let r=typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():null;r&&(r.width||r.height)&&e.push(r)}catch{}return e}function pu(t){let e=1/0,r=1/0,n=-1/0,o=-1/0;for(let i=0;i<t.length;i+=1){let a=t[i],s=Number(a.width)||0,l=Number(a.height)||0;if(!s&&!l)continue;let d=Number(a.left)||0,h=Number(a.top)||0;e=Math.min(e,d),r=Math.min(r,h),n=Math.max(n,d+s),o=Math.max(o,h+l)}return Number.isFinite(e)?{left:e,top:r,width:n-e,height:o-r,right:n,bottom:o}:{left:0,top:0,width:0,height:0,right:0,bottom:0}}function gu(t,e,r){let n=e,o=r;for(;n<o&&/\s/u.test(t[n]);)n+=1;for(;o>n&&/\s/u.test(t[o-1]);)o-=1;return{start:n,end:o,text:t.slice(n,o)}}function Ul(t,e){if(!t||!e||!e.rangeCount)return null;let r=_i(t);if(!r)return null;let n;try{n=e.getRangeAt(0)}catch{return null}if(!n)return null;try{if(!t.contains(n.commonAncestorContainer))return null}catch{return null}let o=[],i;try{i=t.querySelectorAll(`[${pa}]`)}catch{return null}for(let s=0;s<i.length;s+=1){let l=i[s],d=l.getAttribute(pa);if(!d)continue;let h=l.classList&&l.classList.contains("dshr-block__body")?l:l.querySelector($l);if(!h)continue;let g=Ti(h);if(g.total===0)continue;let f;try{f=r.createRange(),f.selectNodeContents(h)}catch{continue}let p=!1,S=!1,w=!1,x=!1;try{p=n.compareBoundaryPoints(3,f)>=0,S=n.compareBoundaryPoints(1,f)<=0,w=n.compareBoundaryPoints(0,f)<0,x=n.compareBoundaryPoints(2,f)>0}catch{continue}if(p||S)continue;let T=w?0:Ll(g,h,n.startContainer,n.startOffset),M=x?g.total:Ll(g,h,n.endContainer,n.endOffset),N=Wt(Ir(T),0,g.total),R=Wt(Ir(M),0,g.total);if(R<=N)continue;let C=gu(g.text,N,R);C.end<=C.start||o.push({blockId:d,start:C.start,end:C.end,text:C.text})}if(o.length===0)return null;let a="";for(let s=0;s<o.length;s+=1)s>0&&(a+=`
`),a+=o[s].text;return a=a.replace(/\u00a0/gu," ").trim(),a?{text:a,rect:pu(Hl(n)),ranges:o}:null}function Wl(t,e){if(!t||!e)return[];let r;try{r=e.getBoundingClientRect()}catch{return[]}if(!r)return[];let n=Number(r.width)||0,o=Number(r.height)||0;if(n<=0||o<=0)return[];let i=Number(r.left)||0,a=Number(r.top)||0,s=i+n,l=a+o,d=Hl(t);if(d.length===0)return[];let h=[];for(let g=0;g<d.length;g+=1){let f=d[g];if(!f)continue;let p=Number(f.width)||0,S=Number(f.height)||0;if(p<=0||S<=0)continue;let w=Number(f.left)||0,x=Number(f.top)||0,T=Math.max(w,i),M=Math.max(x,a),N=Math.min(w+p,s),R=Math.min(x+S,l);N-T<.5||R-M<.5||h.push({x:ha(Wt((T-i)/n,0,1)),y:ha(Wt((M-a)/o,0,1)),w:ha(Wt((N-T)/n,0,1)),h:ha(Wt((R-M)/o,0,1))})}return h.sort((g,f)=>g.y-f.y||g.x-f.x),h}function mu(t){let e=String(t??""),r="",n=[],o=-1;for(let i=0;i<e.length;i+=1){let a=e[i];if(/\s/u.test(a)){o<0&&r.length>0&&(o=i);continue}o>=0&&(n.push(o),r+=" ",o=-1),n.push(i),r+=a}return{text:r,map:n}}function bu(t,e,r,n,o){let i=t.length,a=r[n];if(a===void 0)return null;let s=n+o<r.length?r[n+o]:i;return s>a?{start:a,end:s}:null}function Fl(t,e){if(!t||!e)return null;let r=String(t),n=String(e).trim();if(!n)return null;let o=r.indexOf(n);if(o>=0)return{start:o,end:o+n.length};let i=mu(r),a=fa(n);if(!a)return null;let s=i.text.indexOf(a);if(s>=0){let d=bu(r,i.text,i.map,s,a.length);if(d)return d}let l=Math.min(a.length,48);for(let d=l;d>=12;d-=4){let h=a.slice(0,d),g=i.text.indexOf(h);if(g<0)continue;let f=i.map[g];if(f===void 0)continue;let p=Math.min(r.length,f+a.length);if(p>f)return{start:f,end:p}}return null}function xu(t,e,r){let n=fa(t);if(!n)return!1;let o=[],i=fa(e);i&&o.push(i);let a=fa(r);return a&&a!==i&&o.push(a),o.length===0?!0:o.some(s=>n===s?!0:n.length<8||s.length<8?!1:n.includes(s)||s.includes(n))}function ua(t,e,r){let n=Wt(Ir(e),0,t.index.total),o=Wt(Ir(r),0,t.index.total);if(o<=n)return null;let i=fu(t.body,n,o);return i?{blockId:t.blockId,start:n,end:o,text:t.index.text.slice(n,o),range:i}:null}function vu(t){let e=[];if(!t)return e;let r;try{r=t.querySelectorAll(`[${pa}]`)}catch{return e}for(let n=0;n<r.length;n+=1){let o=r[n],i=o.getAttribute(pa);if(!i)continue;let a=o.classList&&o.classList.contains("dshr-block__body")?o:o.querySelector($l);if(!a)continue;let s=Ti(a);s.total!==0&&e.push({blockId:i,body:a,index:s})}return e}function jl(t,e){let r=[];if(!t||!e)return r;let n=vu(t);if(n.length===0)return r;let o=new Map;for(let s=0;s<n.length;s+=1)o.has(n[s].blockId)||o.set(n[s].blockId,n[s]);let i=typeof e.quote=="string"?e.quote:"",a=Array.isArray(e.ranges)?e.ranges:[];for(let s=0;s<a.length;s+=1){let l=a[s];if(!l||typeof l!="object")continue;let d=o.get(String(l.blockId==null?"":l.blockId));if(!d)continue;let h=Wt(Ir(l.start),0,d.index.total),g=Wt(Ir(l.end),0,d.index.total),f=g>h;if(f){let S=d.index.text.slice(h,g);if(xu(S,l.text,i)){let w=ua(d,h,g);w&&r.push(w);continue}}let p=Fl(d.index.text,i||l.text);if(p){let S=ua(d,p.start,p.end);S&&r.push(S);continue}if(f){let S=ua(d,h,g);S&&r.push(S)}}if(r.length===0&&i){let s=i.split(/\n+/u).map(h=>h.trim()).filter(h=>h.length>=2),l=s.length>0?s:[i.trim()],d=new Set;for(let h=0;h<n.length;h+=1){let g=n[h];if(d.has(g.blockId))continue;let f=1/0,p=-1/0;for(let w=0;w<l.length;w+=1){let x=Fl(g.index.text,l[w]);x&&(f=Math.min(f,x.start),p=Math.max(p,x.end))}if(!Number.isFinite(f)||p<=f)continue;d.add(g.blockId);let S=ua(g,f,p);S&&r.push(S)}}return r}var Um=require("react"),kt=require("react/jsx-runtime");function Nn({size:t=14}){return(0,kt.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,kt.jsx)("path",{d:"M9.4 2.6 5.1 6.9l-.7 2.7 2.7-.7 4.4-4.3-2.1-2Z",stroke:"currentColor",strokeWidth:"1.35",strokeLinejoin:"round"}),(0,kt.jsx)("path",{d:"m4.4 9.6-2.1 2.1c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0l2.1-2.1",stroke:"currentColor",strokeWidth:"1.35",strokeLinecap:"round"}),(0,kt.jsx)("path",{d:"M3 13.5h7.4",stroke:"currentColor",strokeWidth:"1.35",strokeLinecap:"round",opacity:".55"})]})}function ga({size:t=14}){return(0,kt.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,kt.jsx)("path",{d:"M4.2 3v4.6a3.8 3.8 0 0 0 7.6 0V3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,kt.jsx)("path",{d:"M3.4 13.3c2-.7 4.2-.8 9.2-.2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function un({size:t=12}){return(0,kt.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,kt.jsx)("path",{d:"M3.5 2.7h9v6.2l-3.2 3.4H3.5z",fill:"currentColor",fillOpacity:".9",stroke:"currentColor",strokeWidth:"1",strokeLinejoin:"round"}),(0,kt.jsx)("path",{d:"M9.3 12.3V9h3.1",stroke:"var(--dshr-anno-paper, #ffffff)",strokeWidth:"1.15",strokeLinejoin:"round"}),(0,kt.jsx)("path",{d:"M5.4 5.5h5.1M5.4 7.4h3.4",stroke:"var(--dshr-anno-paper, #ffffff)",strokeWidth:"1",strokeLinecap:"round",opacity:".8"})]})}function Gl({size:t=56}){return(0,kt.jsxs)("svg",{width:t,height:t,viewBox:"0 0 56 56",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,kt.jsx)("rect",{x:"8.5",y:"9",width:"33",height:"38",rx:"4",stroke:"currentColor",strokeWidth:"1.8",opacity:".55"}),(0,kt.jsx)("path",{d:"M15 18h20M15 24h20M15 30h13",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",opacity:".42"}),(0,kt.jsx)("path",{d:"M34 28.5h11.5v9.2l-4.6 5H34z",fill:"currentColor",fillOpacity:".16",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),(0,kt.jsx)("path",{d:"M40.9 42.7v-5h4.6",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),(0,kt.jsx)("path",{d:"M36.8 33.6h5.6M36.8 36.4h3.8",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",opacity:".7"})]})}function ma({size:t=13}){return(0,kt.jsx)("svg",{width:t,height:t,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",focusable:"false",children:(0,kt.jsx)("path",{d:"m3.4 3.4 7.2 7.2M10.6 3.4 3.4 10.6",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})})}function ql(t,e,r){let n=Number(t);return Number.isFinite(n)?Math.min(r,Math.max(e,n)):e}function ba(t){let e=Number(t);return .36+(ql(Number.isFinite(e)?e:9,4,16)-4)/12*.34}function xa(t){return(1-ql(t,.1,.95))*.82}function va(t){let e=String(t??""),r=2166136261;for(let n=0;n<e.length;n+=1)r^=e.charCodeAt(n),r=Math.imul(r,16777619);return r>>>0}function yu(t,e=0){let r=(Number(t)^Math.imul((Number(e)||0)+1,2654435769))>>>0;return r^=r<<13,r>>>=0,r^=r>>>17,r^=r<<5,r>>>=0,r/4294967296}function ya(t,e){let r=Math.max(4,Number(e)||4),n=h=>yu(t,h)*2-1,o=3.7+n(1)*.5,i=3.1+n(2)*.45,a=3.7+n(3)*.45,s=3.3+n(4)*.55,l=r*.54,d=Math.max(1,r-.6);return[`M0.6 ${o.toFixed(2)}`,`C${(r*.18).toFixed(2)} ${i.toFixed(2)}`,`${(r*.34).toFixed(2)} ${i.toFixed(2)}`,`${l.toFixed(2)} ${a.toFixed(2)}`,`S${(r*.82).toFixed(2)} ${s.toFixed(2)}`,`${d.toFixed(2)} ${(s-.25).toFixed(2)}`].join(" ")}function wa(t){if(!t)return"\u6279\u6CE8";let e=typeof t.note=="string"?t.note.trim():"";if(e)return e.length>34?`${e.slice(0,34)}\u2026`:e;let r=typeof t.quote=="string"?t.quote.trim():"";return r?r.length>34?`${r.slice(0,34)}\u2026`:r:"\u6279\u6CE8"}var Cn=require("react/jsx-runtime");function wu(t,e){let r=Math.min(t.left+t.width,e.left+e.width)-Math.max(t.left,e.left),n=Math.min(t.top+t.height,e.top+e.height)-Math.max(t.top,e.top);if(r<=0||n<=0)return 0;let o=r*n,i=Math.min(t.width*t.height,e.width*e.height);return i>0?o/i:0}function ku(t){let e=[];if(!t)return e;try{let n=typeof t.getClientRects=="function"?t.getClientRects():null;if(n&&typeof n.length=="number")for(let o=0;o<n.length;o+=1){let i=n[o];if(!i)continue;let a=Number(i.width)||0,s=Number(i.height)||0;a<=0||s<=0||e.push({left:Number(i.left)||0,top:Number(i.top)||0,width:a,height:s})}}catch{}if(e.length===0)try{let n=typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():null;n&&(Number(n.width)||0)>0&&(Number(n.height)||0)>0&&e.push({left:Number(n.left)||0,top:Number(n.top)||0,width:Number(n.width)||0,height:Number(n.height)||0})}catch{}if(e.length<=1)return e;let r=[];for(let n=0;n<e.length;n+=1){let o=e[n],i=!1;for(let a=0;a<r.length;a+=1)if(wu(o,r[a])>.55){i=!0;break}i||r.push(o)}return r}function _u(t,e){return!t||t.kind&&t.kind!=="flow"?!1:!e||t.chapterId==null?!0:t.chapterId===e}function Tu(t,e){if(t===e)return!0;if(!t||!e||t.length!==e.length)return!1;for(let r=0;r<t.length;r+=1){let n=t[r],o=e[r];if(n.type!==o.type||n.key!==o.key||n.annotationId!==o.annotationId||n.x!==o.x||n.y!==o.y||n.width!==o.width||n.height!==o.height||n.color!==o.color||n.path!==o.path||n.isNote!==o.isNote||n.label!==o.label)return!1}return!0}function Xl({containerRef:t,annotations:e,chapterId:r,onOpenAnnotation:n,layoutVersion:o}){let i=rn.default.useRef(null),a=rn.default.useRef(0),s=rn.default.useRef({annotations:e,chapterId:r,onOpenAnnotation:n});s.current={annotations:e,chapterId:r,onOpenAnnotation:n};let[l,d]=rn.default.useState({height:0,marks:[]}),h=rn.default.useCallback(()=>{let f=i.current,p=t&&t.current?t.current:null;if(!f||!p)return;let S;try{S=f.getBoundingClientRect()}catch{return}if(!S)return;let{annotations:w,chapterId:x}=s.current,T=Array.isArray(w)?w:[],M=p.clientWidth||S&&p.getBoundingClientRect().width||0,N=0,R=null;try{if(R=p.querySelector(".dshr-content__inner"),!R){for(let L=p.firstElementChild;L;L=L.nextElementSibling)if(!(L===f||L.classList&&L.classList.contains("dshr-anno-layer"))){R=L;break}}}catch{R=null}if(R)try{let L=R.getBoundingClientRect();N=Math.max(0,L.top-S.top+L.height)}catch{N=0}let C=[];for(let L=0;L<T.length;L+=1){let P=T[L];if(!_u(P,x))continue;let m;try{m=jl(p,P)}catch{continue}if(!Array.isArray(m)||m.length===0)continue;let _=P.style==="underline"||P.style==="note"?P.style:"highlight",F=P.color||"#f5d76e",V=va(`${P.id||""}|${P.createdAt||0}`),z=ba(P.width),se=P.id==null?"":String(P.id),de=_==="note"||typeof P.note=="string"&&P.note.trim().length>0,q=wa(P),me=null;for(let X=0;X<m.length;X+=1){let D=m[X],he=ku(D&&D.range);for(let $=0;$<he.length;$+=1){let re=he[$],ne=re.left-S.left,ye=re.top-S.top,Q=`${se}:${X}:${$}`;if(me={x:ne,y:ye,width:re.width,height:re.height},_==="underline"){let Be=re.width+2;C.push({type:"underline",key:`u:${Q}`,annotationId:se,x:ne-1,y:ye+re.height-7.2,width:Be,height:8,color:F,path:ya(V,Be),isNote:!1,label:q})}else{let Be=Math.max(3.5,re.height*z);C.push({type:"band",key:`b:${Q}`,annotationId:se,x:ne-1,y:ye+re.height*xa(z),width:re.width+2,height:Be,color:F,path:"",isNote:_==="note",label:q})}N=Math.max(N,ye+re.height+8)}}if(de&&me){let X=Math.min(Math.max(2,me.x+me.width+3),Math.max(2,M-21));C.push({type:"note",key:`n:${se}`,annotationId:se,x:X,y:Math.max(0,me.y-1),width:19,height:19,color:F,path:"",isNote:!0,label:q})}}let E=Math.max(0,Math.ceil(N+8));d(L=>L.height===E&&Tu(L.marks,C)?L:{height:E,marks:C})},[t]),g=rn.default.useCallback(()=>{if(typeof window>"u"||a.current)return;let f=()=>{a.current=0,h()};a.current=typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(f):window.setTimeout(f,16)},[h]);return rn.default.useEffect(()=>{let f=t&&t.current?t.current:null,p=i.current;if(!f||!p||typeof window>"u")return;let S=[];g(),S.push(window.setTimeout(g,80));let w=null;if(typeof ResizeObserver<"u"){let E=new ResizeObserver(()=>g());try{E.observe(f);let L=p.parentElement;L&&L!==f&&E.observe(L);let P=f.querySelector(".dshr-content__inner");P&&!P.contains(p)&&E.observe(P)}catch{}w=E}let x=null;if(typeof MutationObserver<"u"){x=new MutationObserver(E=>{for(let L=0;L<E.length;L+=1){let P=E[L].target;if(!p.contains(P)){g();return}}});try{x.observe(f,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["class","style","data-rendered"]})}catch{}}let T=()=>g(),M=E=>{p.contains(E.target)||g()};window.addEventListener("resize",T),f.addEventListener("load",M,!0);let N=f.contains(p);N||f.addEventListener("scroll",T,{passive:!0});let R=null,C=typeof document<"u"?document.fonts:null;if(C&&typeof C.ready=="object"&&typeof C.ready.then=="function"&&C.ready.then(()=>g()).catch(()=>{}),C&&typeof C.addEventListener=="function"){R=()=>g();try{C.addEventListener("loadingdone",R)}catch{R=null}}return()=>{for(let E=0;E<S.length;E+=1)window.clearTimeout(S[E]);if(a.current&&(typeof window.cancelAnimationFrame=="function"?window.cancelAnimationFrame(a.current):window.clearTimeout(a.current),a.current=0),w&&w.disconnect(),x&&x.disconnect(),window.removeEventListener("resize",T),f.removeEventListener("load",M,!0),N||f.removeEventListener("scroll",T),C&&R)try{C.removeEventListener("loadingdone",R)}catch{}}},[t,g]),rn.default.useEffect(()=>{if(g(),typeof window>"u")return;let f=window.setTimeout(g,40);return()=>window.clearTimeout(f)},[e,r,o,g]),(0,Cn.jsx)("div",{ref:i,className:"dshr-anno-layer",style:l.height>0?{height:`${l.height}px`}:void 0,"data-anno-layer":"flow",children:l.marks.map(f=>{if(f.type==="note")return(0,Cn.jsx)("button",{type:"button",className:"dshr-anno-note-btn",style:{left:`${f.x}px`,top:`${f.y}px`,"--dshr-anno-color":f.color},"data-anno-id":f.annotationId,title:f.label?`\u67E5\u770B\u6279\u6CE8\uFF1A${f.label}`:"\u67E5\u770B\u6279\u6CE8","aria-label":f.label?`\u67E5\u770B\u6279\u6CE8\uFF1A${f.label}`:"\u67E5\u770B\u6279\u6CE8",onMouseDown:p=>p.preventDefault(),onClick:()=>{let p=s.current.onOpenAnnotation;typeof p=="function"&&p(f.annotationId)},children:(0,Cn.jsx)(un,{size:12})},f.key);if(f.type==="underline"){let p=Math.max(2,Math.round(f.width*100)/100);return(0,Cn.jsx)("svg",{className:"dshr-anno-underline",style:{left:`${f.x}px`,top:`${f.y}px`,width:`${f.width}px`,height:`${f.height}px`,"--dshr-anno-color":f.color},viewBox:`0 0 ${p} 8`,preserveAspectRatio:"none","data-anno-id":f.annotationId,"aria-hidden":"true",focusable:"false",children:(0,Cn.jsx)("path",{d:f.path})},f.key)}return(0,Cn.jsx)("span",{className:`dshr-anno-band${f.isNote?" dshr-anno-band--note":""}`,style:{left:`${f.x}px`,top:`${f.y}px`,width:`${f.width}px`,height:`${f.height}px`,"--dshr-anno-color":f.color},"data-anno-id":f.annotationId,"aria-hidden":"true"},f.key)})})}var Ie=require("react/jsx-runtime"),Si=new Set(["heading","paragraph","list-item","quote"]),Su=6;function Vl(t,e){let r=t.style.scrollBehavior;t.style.scrollBehavior="auto",t.scrollTop=e,t.style.scrollBehavior=r}function Eu(t,e){return`${t.title||""} \xB7 ${e?.title||""}`}var Au=ht.default.memo(function({block:e}){if(e.kind==="image")return(0,Ie.jsxs)("figure",{children:[e.src?(0,Ie.jsx)("img",{src:e.src,alt:e.alt||"",loading:"lazy",decoding:"async"}):(0,Ie.jsx)("div",{className:"dshr-translation",children:"\u56FE\u7247\u672A\u80FD\u8F7D\u5165"}),e.caption?(0,Ie.jsx)("figcaption",{children:e.caption}):null]});if(e.kind==="table")return(0,Ie.jsx)("div",{dangerouslySetInnerHTML:{__html:e.html||""}});if(e.kind==="code")return(0,Ie.jsx)("pre",{className:"dshr-block__code",children:e.text||""});if(e.kind==="rule")return(0,Ie.jsx)("hr",{});if(e.kind==="heading"){let r=`h${Math.max(1,Math.min(6,e.level||2))}`;return(0,Ie.jsx)(r,{dangerouslySetInnerHTML:{__html:e.html||""}})}return(0,Ie.jsx)("p",{dangerouslySetInnerHTML:{__html:e.html||""}})});function Nu({state:t,onRetry:e}){return t?t.status==="loading"?(0,Ie.jsx)("div",{className:"dshr-translation",children:(0,Ie.jsxs)("span",{className:"dshr-translation__loading",children:[(0,Ie.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u7FFB\u8BD1\u2026"]})}):t.status==="error"?(0,Ie.jsxs)("div",{className:"dshr-translation is-error",children:[(0,Ie.jsx)("p",{children:t.error||"\u8FD9\u6BB5\u7FFB\u8BD1\u5931\u8D25\u4E86\u3002"}),(0,Ie.jsx)("button",{type:"button",className:"dshr-translation__retry",onClick:e,children:"\u91CD\u8BD5"})]}):t.zh?(0,Ie.jsx)("div",{className:"dshr-translation",children:String(t.zh).split(/\n+/u).filter(Boolean).map((r,n)=>(0,Ie.jsx)("p",{children:r},n))}):null:null}function Kl({book:t,chapterIndex:e,onChapterChange:r,settings:n,restore:o,onRestored:i,onSelection:a,onProgress:s,annotations:l=[],onOpenAnnotation:d,focusAnnotation:h,layoutVersion:g=0}){let f=t.chapters[e],p=ht.default.useRef(null),S=ht.default.useRef(null),w=ht.default.useRef(null),x=ht.default.useRef(0),T=ht.default.useRef(new Map),M=ht.default.useRef(!1),N=ht.default.useRef(null),R=ht.default.useRef(!0),C=ht.default.useMemo(()=>new Map((f?.blocks??[]).map(D=>[D.id,D])),[f]),[E,L]=ht.default.useState({}),[P,m]=ht.default.useState(!1);ht.default.useEffect(()=>{R.current=!0;let D=new AbortController;return N.current=D,()=>{R.current=!1,D.abort()}},[]);let _=ht.default.useCallback(D=>`${f?.id||"chapter"}:${D.id}`,[f?.id]),F=ht.default.useCallback((D,he)=>{R.current&&L($=>({...$,[D]:{...$[D]||{},...he}}))},[]),V=ht.default.useCallback(async()=>{if(M.current||T.current.size===0)return;M.current=!0,m(!0);let D=[...T.current.entries()].slice(0,Su);for(let[$]of D)T.current.delete($);let he=Eu(t,f);try{let $=await eo(D.map(([re,ne])=>({id:re,text:ne.text})),{context:he,title:t.title,signal:N.current?.signal});for(let[re]of D)$[re]?F(re,{status:"done",zh:$[re],error:void 0}):F(re,{status:"error",error:"\u7FFB\u8BD1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u8FD9\u4E00\u6BB5\u3002"})}catch($){if(!An($))for(let[re]of D)F(re,{status:"error",error:$?.message||"\u7FFB\u8BD1\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002"})}finally{M.current=!1,R.current&&(m(!1),T.current.size>0&&window.setTimeout(()=>{V()},120))}},[t,f,F]),z=ht.default.useCallback((D,{force:he=!1}={})=>{if(!D||!Si.has(D.kind)||!D.text?.trim())return;let $=_(D),re=E[$];!he&&(re?.status==="loading"||re?.status==="done")||(F($,{status:"loading",error:void 0}),T.current.set($,{text:D.text.slice(0,4e3)}),V())},[V,_,E,F]),se=ht.default.useCallback(D=>{let he=D.slice(D.indexOf(":")+1),$=C.get(he);$&&z($,{force:!0})},[C,z]),de=ht.default.useCallback(()=>{for(let D of f?.blocks??[])Si.has(D.kind)&&D.text?.trim()&&z(D,{force:E[`${f.id}:${D.id}`]?.status==="error"})},[f,z,E]);ht.default.useEffect(()=>{let D=p.current;if(!D||!n.autoTranslate||typeof IntersectionObserver>"u")return;S.current?.disconnect();let he=new IntersectionObserver($=>{for(let re of $){if(!re.isIntersecting)continue;let ne=re.target.getAttribute("data-seg-id"),ye=C.get(ne);ye&&z(ye)}},{root:D,rootMargin:"420px 0px 520px 0px",threshold:.01});for(let $ of D.querySelectorAll("[data-seg-id]"))he.observe($);return S.current=he,()=>he.disconnect()},[C,f?.id,z,n.autoTranslate]),ht.default.useLayoutEffect(()=>{let D=p.current;if(!(!D||w.current?.book===t&&w.current?.index===e))if(o&&o.chapter===e){let he=Math.max(0,Math.min(1,Number(o.scrollRatio)||0)),$=D.dataset.readerNavigation||"0",re=requestAnimationFrame(()=>{if(w.current={book:t,index:e},(D.dataset.readerNavigation||"0")!==$){i?.();return}let ne=new CustomEvent("dshr-flow-navigate",{cancelable:!0,detail:{ratio:he}});D.dispatchEvent(ne)&&Vl(D,Math.max(0,D.scrollHeight-D.clientHeight)*he),i?.()});return()=>cancelAnimationFrame(re)}else w.current={book:t,index:e},Vl(D,0)},[t,e]);let q=ht.default.useCallback(D=>{let he=p.current;if(!he)return;let $=Ul(he,window.getSelection());if(!$){a?.(null);return}a?.({...$,source:"flow",context:f?.blocks.map(re=>re.text||"").join(`
`).slice(0,2400)||""})},[f,a]);ht.default.useEffect(()=>{if(!h?.id)return;let D=p.current,he=D?.dataset.readerNavigation||"0",$=window.setTimeout(()=>{if((D?.dataset.readerNavigation||"0")!==he)return;let re=h.blockId?p.current?.querySelector(`[data-anno-block="${CSS.escape(h.blockId)}"]`):null;if(!re)return;let ne=new CustomEvent("dshr-flow-navigate",{cancelable:!0,detail:{element:re}});p.current.dispatchEvent(ne)&&re.scrollIntoView({block:"center",behavior:"smooth"})},120);return()=>window.clearTimeout($)},[h]);let me=ht.default.useCallback(()=>{let D=p.current;if(!D)return;let he=Date.now();if(he-x.current<600)return;x.current=he;let $=D.scrollHeight>D.clientHeight?D.scrollTop/(D.scrollHeight-D.clientHeight):0;s?.({chapter:e,chapters:t.chapters.length,scrollRatio:Math.max(0,Math.min(1,$)),percent:Math.max(0,Math.min(100,(e+Math.max(0,Math.min(1,$)))/t.chapters.length*100))})},[t.chapters.length,e,s]),X=ht.default.useCallback(D=>{let he=D.target.closest?.("a");if(!he)return;let $=he.getAttribute("data-chapter");if($){D.preventDefault();let ne=Number($);Number.isInteger(ne)&&ne>=0&&ne<t.chapters.length&&r(ne);return}let re=he.getAttribute("href")||"";re&&!re.startsWith("#")&&(D.preventDefault(),window.open(re,"_blank","noopener,noreferrer"))},[t.chapters.length,r]);return f?(0,Ie.jsxs)("div",{className:"dshr-content",ref:p,onScroll:me,onMouseUp:q,onKeyUp:q,onClick:X,children:[(0,Ie.jsxs)("div",{className:"dshr-content__inner",children:[(0,Ie.jsxs)("article",{className:"dshr-chapter",children:[(0,Ie.jsxs)("div",{className:"dshr-chapter__kicker",children:["\u7B2C ",e+1," / ",t.chapters.length," \u7AE0",n.autoTranslate?" \xB7 \u5B9E\u65F6\u7FFB\u8BD1\u5DF2\u5F00\u542F":""]}),f.blocks.map(D=>{let he=_(D),$=E[he],re=Si.has(D.kind)&&D.text?.trim();return(0,Ie.jsxs)("div",{className:`dshr-block dshr-block--${D.kind}`,"data-kind":D.kind,"data-seg-id":re?D.id:void 0,"data-anno-block":D.id,children:[(0,Ie.jsx)("div",{className:"dshr-block__body",children:(0,Ie.jsx)(Au,{block:D})}),re?(0,Ie.jsx)(Nu,{state:$,onRetry:()=>se(he)}):null]},D.id)})]}),(0,Ie.jsxs)("div",{className:"dshr-chapter__nav",children:[(0,Ie.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e<=0,onClick:()=>r(e-1),children:[(0,Ie.jsx)(ea,{size:15})," ",e>0?t.chapters[e-1].title:"\u5DF2\u662F\u7B2C\u4E00\u7AE0"]}),(0,Ie.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:de,disabled:P,title:"\u7FFB\u8BD1\u672C\u7AE0\u6240\u6709\u6BB5\u843D",children:[P?(0,Ie.jsx)("span",{className:"dshr-spinner"}):(0,Ie.jsx)(Kn,{size:15})," \u7FFB\u8BD1\u672C\u7AE0"]}),(0,Ie.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e>=t.chapters.length-1,onClick:()=>r(e+1),children:[e<t.chapters.length-1?t.chapters[e+1].title:"\u5DF2\u662F\u6700\u540E\u4E00\u7AE0"," ",(0,Ie.jsx)(ta,{size:15})]})]})]}),(0,Ie.jsx)(Xl,{containerRef:p,annotations:l,chapterId:f.id,onOpenAnnotation:d,layoutVersion:g})]}):(0,Ie.jsxs)("div",{className:"dshr-error-panel",children:[(0,Ie.jsx)("h3",{children:"\u8FD9\u4E00\u7AE0\u4E0D\u5B58\u5728"}),(0,Ie.jsx)("p",{children:"\u6587\u6863\u76EE\u5F55\u53EF\u80FD\u4E0D\u5B8C\u6574\uFF0C\u8BF7\u5C1D\u8BD5\u91CD\u65B0\u5BFC\u5165\u3002"})]})}var So=Ct(require("react"),1);var Ei="6.5.438-reader3",Mn="/dsh-reader-assets/",Yl;function Cu(){return`${Mn}pdf.bundle.js?v=${Ei}`}function Iu(){return Yl||=import(Cu()).then(t=>{if(!t?.getDocument||!t.GlobalWorkerOptions)throw new Error("PDF \u5F15\u64CE\u8D44\u6E90\u683C\u5F0F\u4E0D\u6B63\u786E");return t.GlobalWorkerOptions.workerSrc=`${Mn}pdf.worker.mjs?v=${Ei}`,t.GlobalWorkerOptions.rendererSrc=`${Mn}pdf.renderer.mjs?v=${Ei}`,t}).catch(t=>{throw Yl=null,t})}var Hr=()=>new DOMException("PDF operation cancelled","AbortError"),In=t=>{if(t?.aborted)throw Hr()};async function Mu(t,e,{signal:r,onRead:n,onError:o}={}){In(r);let i=256*1024,a=new Uint8Array(await e.slice(0,Math.min(i,e.size)).arrayBuffer());In(r);let s={bytes:a.length,reads:1,total:e.size};class l extends t.PDFDataRangeTransport{constructor(){super(e.size,a,!0)}aborted=!1;queue=[];active=0;requestDataRange(h,g){this.aborted||r?.aborted||(this.queue.push({begin:h,end:g}),this.pump())}pump(){for(;!this.aborted&&this.active<2&&this.queue.length;){let{begin:h,end:g}=this.queue.shift();this.active++,e.slice(h,g).arrayBuffer().then(f=>{if(this.aborted||r?.aborted)return;let p=new Uint8Array(f);if(p.length!==g-h)throw new Error("PDF \u5206\u6BB5\u8BFB\u53D6\u4E0D\u5B8C\u6574");s.bytes+=p.length,s.reads++,n?.({...s}),this.onDataRange(h,p)}).catch(f=>{this.aborted||r?.aborted||(this.abort(),o?.(f))}).finally(()=>{this.active--,this.pump()})}}abort(){this.aborted=!0,this.queue.length=0}}return n?.({...s}),{range:new l,stats:s,rangeChunkSize:i,disableStream:!0,disableAutoFetch:!0}}async function ka(t,{signal:e,onProgress:r,onRead:n,onError:o}={}){In(e);let i=await Iu();In(e);let a,s,l,d,h=!1,g,f,p=new Promise((x,T)=>{f=T});p.catch(()=>{});let S=()=>g||(h=!0,clearTimeout(d),s?.abort(),e?.removeEventListener("abort",w),g=Promise.resolve().then(()=>a?.destroy()).catch(()=>{}).finally(()=>l?.destroy()),g),w=()=>{f(Hr()),S()};e?.addEventListener("abort",w,{once:!0});try{if(l=new i.PDFWorker({verbosity:0}),await Promise.race([l.promise,p,new Promise((M,N)=>{d=setTimeout(()=>N(new Error("PDF \u540E\u53F0\u7EBF\u7A0B\u542F\u52A8\u8D85\u65F6\uFF0C\u8BF7\u68C0\u67E5 Host \u7684 Worker \u8D44\u6E90\u4E0E\u5B89\u5168\u7B56\u7565\u3002")),1e4)})]),clearTimeout(d),In(e),typeof Worker!="function"||!(l.port instanceof Worker))throw new Error("PDF \u540E\u53F0\u7EBF\u7A0B\u4E0D\u53EF\u7528\uFF0C\u8BF7\u68C0\u67E5 /dsh-reader-assets/pdf.worker.mjs \u548C Host \u7684 Worker \u5B89\u5168\u7B56\u7565\u3002");let x;if(typeof Blob<"u"&&t instanceof Blob?(x=await Mu(i,t,{signal:e,onRead:n,onError:M=>{f(M),o?.(M),S()}}),s=x.range):x={data:(t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)).slice()},In(e),h)throw Hr();a=i.getDocument({...x,worker:l,cMapUrl:`${Mn}cmaps/`,cMapPacked:!0,standardFontDataUrl:`${Mn}standard_fonts/`,wasmUrl:`${Mn}wasm/`,iccUrl:`${Mn}iccs/`,isEvalSupported:!1,disableWorkerRendering:!1,verbosity:0}),a.onProgress=r;let T=await Promise.race([a.promise,p]);if(In(e),h)throw Hr();return{engine:i,pdf:T,close:S,source:x}}catch(x){throw await S(),x}}var _a=class{constructor(e=48*1024*1024){this.limit=e,this.bytes=0,this.entries=new Map}get(e){let r=this.entries.get(e);return r&&(this.entries.delete(e),this.entries.set(e,r)),r}set(e,r){this.delete(e);let n=r.bitmap.width*r.bitmap.height*4;if(n>this.limit){r.bitmap.close();return}for(this.entries.set(e,{...r,bytes:n}),this.bytes+=n;this.bytes>this.limit;)this.delete(this.entries.keys().next().value)}delete(e){let r=this.entries.get(e);r&&(this.bytes-=r.bytes,r.bitmap.close(),this.entries.delete(e))}clear(){for(let e of this.entries.keys())this.delete(e)}},Ta=class{constructor(e,r,n=20){this.count=e,this.defaultHeight=r,this.gap=n,this.heights=new Map,this.tree=new Float64Array(e+1),this.paddingTop=18}setHeight(e,r){let n=r-(this.heights.get(e)??this.defaultHeight);this.heights.set(e,r);for(let o=e;o<=this.count;o+=o&-o)this.tree[o]+=n}top(e){let r=(e-1)*(this.defaultHeight+this.gap);for(let n=e-1;n>0;n-=n&-n)r+=this.tree[n];return this.paddingTop+r}height(e){return this.heights.get(e)??this.defaultHeight}pageAt(e){let r=1,n=this.count;for(;r<n;){let o=Math.ceil((r+n)/2);this.top(o)<=e?r=o:n=o-1}return r}entryAt(e){let r=this.pageAt(e);return{page:r,top:this.top(r),height:this.height(r)}}};var Ru=/[\u1100-\u11FF\u2E80-\u2EFF\u3000-\u303F\u3040-\u30FF\u3100-\u312F\u3130-\u318F\u3400-\u4DBF\u4E00-\u9FFF\uA960-\uA97F\uAC00-\uD7AF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF]/,Zl=/[.。！？!?；;…]$/;function ko(t){return!!t&&Ru.test(t)}function Pu(t){return String(t).replace(/\u0000/g,"").replace(/[\t\u00a0\u2000-\u200a\u202f\u205f\u3000]/g," ").replace(/\s+/g," ")}function Sa(t){return typeof t=="number"&&Number.isFinite(t)?t:null}function Ou(t){let e=t&&t.transform;if(!Array.isArray(e)||e.length<6)return null;let r=Sa(e[4]),n=Sa(e[5]);if(r===null||n===null)return null;let o=Sa(t.width),i=Sa(t.height);return{x:r,y:n,width:o===null?null:Math.abs(o),height:i===null||i<=0?null:i}}function Lu(t,e){let r=0;for(let n of t)r+=ko(n)?1:.5;return r*(e||10)}function Du(t){return{text:"",startX:t?t.x:0,endX:t?t.x:0,y:t?t.y:0,height:t&&t.height?t.height:0,hasGeometry:!!t}}function Fu(t,e,r){let n=Pu(e);if(!n)return;let o="";if(t.text){let i=t.text[t.text.length-1],a=n[0];if(i===" "||a===" "||t.text.endsWith(" "))o="";else if(ko(i)||ko(a))o="";else if(r&&t.hasGeometry){let s=r.x-t.endX,l=Math.max(t.height||0,r.height||0,1);o=s>l*.18?" ":""}}if(t.text=(t.text+o+n).replace(/^ +/,""),r&&t.hasGeometry){let i=r.width===null?Lu(n,r.height||t.height):r.width;t.endX=Math.max(t.endX,r.x+i),t.startX=Math.min(t.startX,r.x),r.height&&(t.height=Math.max(t.height,r.height))}}function zu(t,e,r){if(!t||r)return!0;if(!e||!t.hasGeometry)return!1;let n=Math.max(t.height||0,e.height||0,1);return Math.abs(e.y-t.y)>n*.58||e.x<t.endX-n*2&&t.endX-t.startX>n}function Bu(t,e){let r=t.lastLine;if(!r)return!1;let n=r.height||10,o=e.height||n,i=Math.max(n,o,1),a=r.y-e.y;if(a<-i*1.2||a>i*1.68)return!0;let s=o/n;return!!(s>1.18||s<.84||e.startX-t.leftX>i*1.25||Zl.test(r.text)&&a>i*1.35&&r.endX<t.rightX-i*2)}function $u(t){let e="";for(let r of t){let n=r.text.trim();if(!n)continue;if(!e){e=n;continue}let o=e[e.length-1],i=n[0];o==="-"||ko(o)||ko(i)?e+=n:e+=" "+n}return e}function Hu(t){if(t.length<=1400)return[t];let e=[],r=t;for(;r.length>1400;){let n=Math.floor(770.0000000000001),o=Math.min(r.length,1400),i=-1;for(let s=o;s>n;s-=1)if(Zl.test(r[s-1])||r[s-1]===`
`){i=s;break}i<=0&&(i=r.lastIndexOf(" ",o),i<n&&(i=o));let a=r.slice(0,i).trim();a&&e.push(a),r=r.slice(i).trim()}return r&&e.push(r),e}function Ql(t,{metadata:e=!1}={}){let r=[],n=null,o=!1;if(Array.isArray(t))for(let[l,d]of t.entries()){if(!d||typeof d.str!="string")continue;if(!d.str.trim()){d.hasEOL&&(o=!0);continue}let h=Ou(d);zu(n,h,o)&&(n=Du(h),n.itemIndices=[],r.push(n)),Fu(n,d.str,h),n.itemIndices.push(d.__pdfItemIndex??l),o=!!d.hasEOL}let i=[],a=null;for(let l of r)l.text.trim()&&(!a||Bu(a,l)?(a={lines:[l],lastLine:l,leftX:l.startX,rightX:l.endX},i.push(a)):(a.lines.push(l),a.lastLine=l,a.leftX=Math.min(a.leftX,l.startX),a.rightX=Math.max(a.rightX,l.endX)));let s=[];for(let l of i){let d=$u(l.lines);for(let h of Hu(d)){let g=h.trim();g&&s.push({src:g,...e?{itemIndices:l.lines.flatMap(f=>f.itemIndices)}:{}})}}return{text:s.map(l=>l.src).join(`

`),segments:s}}function Uu(t,e){let r=(t||[]).filter(d=>typeof d?.str=="string").map((d,h)=>({...d,__pdfItemIndex:h})),n=0;for(let d=0;d<(t||[]).length;d+=1)typeof t[d]?.str=="string"&&(r[n++].__pdfItemIndex=d);if(!e)return r;let o=r.filter(d=>d.str.trim().length>15&&d.width>e*.12),i=o.filter(d=>d.transform?.[4]<e*.3&&d.transform[4]+d.width<e*.53),a=o.filter(d=>d.transform?.[4]>=e*.48);if(i.length<4||a.length<4)return r;let s=[...new Set(o.filter(d=>d.transform?.[4]<e*.4&&d.transform[4]+d.width>e*.6).map(d=>Math.round(d.transform[5])))].sort((d,h)=>h-d),l=d=>{let h=d.transform?.[5]||0,g=s.filter(p=>p>h+3).length*2,f=s.some(p=>Math.abs(p-h)<=3);return[g+(f?1:0),f?0:d.transform?.[4]>=e*.48?2:1,-h,d.transform?.[4]||0]};return r.sort((d,h)=>{let g=l(d),f=l(h);for(let p=0;p<g.length;p+=1)if(g[p]!==f[p])return g[p]-f[p];return d.__pdfItemIndex-h.__pdfItemIndex})}function Ai(t,e,r){let n=Ql(Uu(t,r),{metadata:!0});return{text:n.text,segments:n.segments.map((o,i)=>({...o,id:`p${e}-s${i}`,protectedTokens:[...new Set(o.itemIndices.map(a=>t[a]?.str?.trim()).filter(a=>a&&/[∑∫√≈≠≤≥∂∞]/u.test(a)&&!/[A-Za-z]{4}|[\u3400-\u9fff]/u.test(a)))]}))}}var Jl=String.raw`
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
`;var ec=String.raw`
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
`;var _o=Ct(require("react"),1);var tc="reader-a-1";function Rn(t){return String(t||"").split(/\r?\n/u).map(e=>e.trim()).filter(Boolean).join(`
`).slice(0,4e3)}function Wu(t,e=[]){let r=[...new Set([...e,...t.match(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]|\[\d+(?:\s*[,–—-]\s*\d+)*\]|https?:\/\/[^\s]+|\b10\.\d{4,9}\/[^\s]+/gu)||[]])].filter(i=>i&&t.includes(i)).sort((i,a)=>a.length-i.length),n=[],o=t;for(let i of r){let a=`\u27E6KEEP_${n.length}\u27E7`;o.includes(i)&&(o=o.split(i).join(a),n.push({placeholder:a,token:i}))}return{text:o,restore(i){let a=String(i||"");for(let{placeholder:s,token:l}of n){if(!a.includes(s))throw new Error("\u8BD1\u6587\u9057\u6F0F\u4E86\u516C\u5F0F\u6216\u5F15\u7528\u6807\u8BB0\uFF0C\u8BF7\u91CD\u8BD5\u672C\u6BB5\u3002");a=a.split(s).join(l)}if(/⟦KEEP_\d+⟧/u.test(a))throw new Error("\u8BD1\u6587\u5305\u542B\u65E0\u6CD5\u5BF9\u5E94\u7684\u516C\u5F0F\u6807\u8BB0\uFF0C\u8BF7\u91CD\u8BD5\u672C\u6BB5\u3002");return a}}}async function ju(t,e){if(!globalThis.crypto?.subtle)return null;let r=new TextEncoder().encode(JSON.stringify([tc,t.documentId,e,"zh-CN",t.model?.provider,t.model?.model,t.model?.promptVersion,Rn(t.glossary)])),n=await crypto.subtle.digest("SHA-256",r);return`${t.documentId}:${Array.from(new Uint8Array(n),o=>o.toString(16).padStart(2,"0")).join("")}`}var Ea=class{constructor({translate:e,cache:r,onChange:n=()=>{},onModelChanged:o=()=>{},prefetchDelay:i=700,requestTimeout:a=12e4}){this.translate=e,this.cache=r,this.onChange=n,this.onModelChanged=o,this.prefetchDelay=i,this.requestTimeout=a,this.sources=new Map,this.entries=new Map,this.jobs=new Map,this.preparing=new Map,this.epoch=0,this.sequence=0,this.activePage=1,this.visibleIds=new Set,this.config={},this.disposed=!1}configure(e){if(this.disposed)return;let r={...e,glossary:Rn(e.glossary)},n=JSON.stringify([r.documentId,r.model,r.glossary,tc]),o=n!==this.namespace;if(o){let i=this.config.documentId;this.epoch+=1,this.abortJobs(),i&&i!==r.documentId&&this.sources.clear(),this.entries.clear(),this.preparing.clear(),this.namespace=n,this.cacheIssue=""}if(this.config=r,(!r.enabled||!r.canTranslate)&&this.abortJobs(),r.prefetch===!1)for(let i of[...this.jobs.values()])i.page!==this.activePage&&this.abortJob(i);if(o)for(let[i,a]of this.sources)this.registerPage(i,a);this.emit(),this.pump()}setFocus(e,r=[]){if(!this.disposed){if(e!==this.activePage){this.activePage=e,this.prefetchAfter=Date.now()+this.prefetchDelay,clearTimeout(this.timer),this.timer=null;for(let n of[...this.jobs.values()])n.page!==e&&this.abortJob(n);for(let n of this.sources.keys())if(Math.abs(n-e)>3){this.sources.delete(n);for(let[o,i]of this.entries)i.page===n&&this.entries.delete(o)}}this.visibleIds=new Set(r),this.emit(),this.pump()}}registerPage(e,r){if(this.disposed)return;this.sources.set(e,r);let n=[];for(let[o,i]of(r.segments||[]).entries()){let a=i.id||`p${e}-s${o}`,s=`${e}:${a}`;if(this.entries.get(s)?.src===i.src)continue;let l={...i,id:a,uid:s,index:o,page:e,status:"checking",zh:"",cached:!1};this.entries.set(s,l),n.push(l)}if(n.length){let o=Symbol(),i=this.epoch;this.preparing.set(e,o),Promise.all(n.map(a=>this.prepare(a,i))).finally(()=>{this.preparing.get(e)===o&&(this.preparing.delete(e),this.pump())})}this.emit()}fresh(e,r){return!this.disposed&&r===this.epoch&&this.entries.get(e.uid)===e}async prepare(e,r){try{let n=e.src.replace(/\s/gu,"");if(n&&(n.match(/[\u3400-\u9fff]/gu)||[]).length/n.length>=.55){e.zh=e.src,e.status="done",e.passthrough=!0,this.emit();return}if(e.key=await ju(this.config,e.src),!this.fresh(e,r))return;let o=e.key&&await this.cache?.get(e.key);if(!this.fresh(e,r))return;typeof o?.zh=="string"&&o.zh.trim()?(e.zh=o.zh,e.cached=!0,e.status="done"):e.status="queued"}catch{if(!this.fresh(e,r))return;e.status="queued",this.cacheIssue="\u672C\u5730\u7F13\u5B58\u6682\u4E0D\u53EF\u7528\uFF0C\u672C\u6B21\u8BD1\u6587\u4ECD\u53EF\u9605\u8BFB\u3002"}this.emit(),this.pump()}abortJob(e){clearTimeout(e.timeout),e.controller.abort(),this.jobs.delete(e.id);for(let r of e.entries)this.entries.get(r.uid)===r&&r.job===e.id&&(r.status="queued")}abortJobs(){clearTimeout(this.timer),this.timer=null;for(let e of[...this.jobs.values()])this.abortJob(e)}pump(){if(!(this.disposed||!this.config.enabled||!this.config.canTranslate||!this.config.documentId))for(;this.jobs.size<2;){let e=[...this.entries.values()].filter(d=>d.page===this.activePage),r=e.some(d=>d.status==="queued"||d.status==="checking"||d.status==="loading"),n=[...this.entries.values()].filter(d=>d.status==="queued"&&!this.preparing.has(d.page)&&(d.page===this.activePage||this.config.prefetch!==!1&&!r&&d.page===this.activePage+1)).sort((d,h)=>d.page-this.activePage-(h.page-this.activePage)||Number(this.visibleIds.has(h.id))-Number(this.visibleIds.has(d.id))||d.index-h.index);if(!n.length)return;let o=n[0];if(o.page!==this.activePage&&Date.now()<(this.prefetchAfter||0)){this.timer||(this.timer=setTimeout(()=>{this.timer=null,this.pump()},this.prefetchAfter-Date.now()));return}let i=[],a=0,s=e.some(d=>d.status==="done")?3:1;for(let d of n){if(d.page!==o.page||i.length>=s||a+d.src.length>3e3&&i.length)break;i.push(d),a+=d.src.length}let l={id:++this.sequence,epoch:this.epoch,controller:new AbortController,page:o.page,entries:i,config:this.config};this.jobs.set(l.id,l);for(let d of i)d.status="loading",d.job=l.id,d.error="";l.timeout=setTimeout(()=>{if(this.jobs.get(l.id)===l){this.abortJob(l);for(let d of i)this.fresh(d,l.epoch)&&(d.status="error",d.error="\u672C\u6BB5\u7FFB\u8BD1\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5\u6216\u7A0D\u540E\u7EE7\u7EED\u3002");this.emit(),this.pump()}},this.requestTimeout),this.emit(),this.run(l)}}async run(e){let r=n=>!e.controller.signal.aborted&&this.fresh(n,e.epoch)&&n.job===e.id;try{let n=this.sources.get(e.page)?.segments||[],o=e.entries.map(d=>Wu(d.src,d.protectedTokens)),i=e.entries[0].index,a=n.slice(Math.max(0,i-1),i+e.entries.length+1).map(d=>d.src);i===0&&this.sources.get(e.page-1)?.segments?.length&&a.unshift(this.sources.get(e.page-1).segments.at(-1).src),i+e.entries.length>=n.length&&this.sources.get(e.page+1)?.segments?.length&&a.push(this.sources.get(e.page+1).segments[0].src);let s=a.join(`
`).slice(0,1200),l=await this.translate(e.entries.map((d,h)=>({id:d.id,text:o[h].text})),{title:e.config.title,context:s,glossary:e.config.glossary,expectedModel:e.config.model,signal:e.controller.signal,includeMetadata:!0});if(l.model&&(l.model.provider!==e.config.model?.provider||l.model.model!==e.config.model?.model)||l.promptVersion&&l.promptVersion!==e.config.model?.promptVersion){let d=new Error("\u9ED8\u8BA4\u6A21\u578B\u5DF2\u53D8\u5316\uFF0C\u8BF7\u5237\u65B0\u7FFB\u8BD1\u670D\u52A1\u3002");throw d.code="MODEL_CHANGED",d}for(let[d,h]of e.entries.entries())if(r(h)){try{let g=l.translations?.[h.id];if(!g?.trim())throw new Error("\u672C\u6BB5\u6CA1\u6709\u8FD4\u56DE\u8BD1\u6587\uFF0C\u8BF7\u91CD\u8BD5\u3002");h.zh=o[d].restore(g),h.status="done",h.cached=!1,h.key&&Promise.resolve(this.cache?.put({key:h.key,bookId:e.config.documentId,zh:h.zh})).catch(()=>{r(h)&&(this.cacheIssue="\u8BD1\u6587\u5DF2\u5B8C\u6210\uFF0C\u4F46\u672C\u5730\u7F13\u5B58\u672A\u80FD\u4FDD\u5B58\u3002",this.emit())})}catch(g){h.status="error",h.error=g.message}this.emit()}}catch(n){for(let o of e.entries)r(o)&&(o.status="error",o.error=n.message||"\u672C\u6BB5\u7FFB\u8BD1\u5931\u8D25\u3002");!e.controller.signal.aborted&&e.epoch===this.epoch&&n.code==="MODEL_CHANGED"&&this.onModelChanged()}finally{clearTimeout(e.timeout),this.jobs.delete(e.id),this.disposed||(this.emit(),this.pump())}}retry(e,r){if(e===this.activePage)for(let n of[...this.jobs.values()])n.page!==e&&this.abortJob(n);for(let n of this.entries.values())if(n.page===e&&(r?n.id===r:n.status==="error")){if(n.status==="loading"||n.status==="checking")continue;n.status="queued",n.error="",n.cached=!1}this.emit(),this.pump()}emit(){if(this.disposed)return;let e={};for(let r of this.entries.values())(e[r.page]||=[]).push({...r});for(let r of Object.values(e))r.sort((n,o)=>n.index-o.index);this.onChange({pages:e,cacheIssue:this.cacheIssue||""})}dispose(){this.disposed=!0,this.abortJobs(),this.sources.clear(),this.entries.clear()}};var ve=require("react/jsx-runtime");function rc({page:t,source:e,rows:r=[],activeId:n,originRef:o,translation:i,onActivate:a,onClose:s}){let l=_o.default.useRef(null),{preferences:d,updatePreferences:h,paused:g,setPaused:f,modelError:p,refreshModel:S,cacheIssue:w,retry:x}=i,[T,M]=_o.default.useState(d.glossary||"");_o.default.useEffect(()=>M(d.glossary||""),[d.glossary]);let N=r.filter(P=>P.status==="done").length,R=r.filter(P=>P.status==="error").length,C=r.filter(P=>P.cached).length,E=r.map(P=>P.status).join(",");_o.default.useEffect(()=>{if(!d.linked||o.current!=="source")return;let P=l.current,m=[...P?.querySelectorAll("[data-translation-segment]")||[]].find(V=>V.dataset.translationSegment===n);if(!P||!m)return;let _=P.getBoundingClientRect(),F=m.getBoundingClientRect();(F.top<_.top+8||F.bottom>_.bottom-8)&&(P.scrollTop+=F.top-_.top-12)},[t,n,E,d.linked,d.fontSize]);let L=(P,m=!1)=>a(P,{origin:"translation",reveal:m});return(0,ve.jsxs)("aside",{className:"dshr-pdf-translation-panel","aria-label":"PDF \u4E2D\u6587\u5BF9\u7167",style:{"--dshr-translation-font-size":`${d.fontSize||16}px`},children:[(0,ve.jsxs)("header",{className:"dshr-pdf-translation-header",children:[(0,ve.jsxs)("div",{children:[(0,ve.jsx)("strong",{children:"\u4E2D\u6587\u5BF9\u7167"}),(0,ve.jsxs)("span",{children:["\u7B2C ",t," \u9875 \xB7 ",N,"/",r.length," \u6BB5",C?` \xB7 \u7F13\u5B58 ${C} \u6BB5`:""]})]}),(0,ve.jsx)("button",{type:"button","aria-label":"\u5173\u95ED\u8BD1\u6587\u4FA7\u680F",title:"\u5173\u95ED\u8BD1\u6587\u4FA7\u680F",onClick:s,children:"\xD7"})]}),(0,ve.jsxs)("div",{className:"dshr-pdf-translation-controls",children:[(0,ve.jsx)("button",{type:"button",onClick:()=>f(!g),children:g?"\u7EE7\u7EED\u7FFB\u8BD1":"\u6682\u505C\u7FFB\u8BD1"}),(0,ve.jsxs)("label",{children:[(0,ve.jsx)("input",{type:"checkbox",checked:d.linked!==!1,onChange:P=>h({linked:P.target.checked})}),"\u6BB5\u843D\u8054\u52A8"]}),(0,ve.jsx)("button",{type:"button","aria-label":"\u7F29\u5C0F\u8BD1\u6587\u5B57\u53F7",disabled:d.fontSize<=12,onClick:()=>h({fontSize:Math.max(12,d.fontSize-1)}),children:"A\u2212"}),(0,ve.jsx)("span",{className:"dshr-pdf-translation-font",children:d.fontSize||16}),(0,ve.jsx)("button",{type:"button","aria-label":"\u653E\u5927\u8BD1\u6587\u5B57\u53F7",disabled:d.fontSize>=24,onClick:()=>h({fontSize:Math.min(24,d.fontSize+1)}),children:"A\uFF0B"})]}),(0,ve.jsxs)("div",{className:"dshr-pdf-translation-options",children:[(0,ve.jsxs)("label",{children:[(0,ve.jsx)("input",{type:"checkbox",checked:!!d.showSource,onChange:P=>h({showSource:P.target.checked})}),"\u663E\u793A\u539F\u6587"]}),(0,ve.jsxs)("label",{children:[(0,ve.jsx)("input",{type:"checkbox",checked:d.prefetch!==!1,onChange:P=>h({prefetch:P.target.checked})}),"\u9884\u8BD1\u4E0B\u4E00\u9875"]})]}),(0,ve.jsxs)("details",{className:"dshr-pdf-glossary",children:[(0,ve.jsxs)("summary",{children:["\u6587\u6863\u672F\u8BED\u8868",d.glossary?" \xB7 \u5DF2\u542F\u7528":""]}),(0,ve.jsxs)("label",{children:["\u6BCF\u884C\u586B\u5199\u201C\u539F\u8BCD = \u4E2D\u6587\u8BD1\u6CD5\u201D",(0,ve.jsx)("textarea",{"aria-label":"\u6587\u6863\u672F\u8BED\u8868",maxLength:4e3,value:T,placeholder:`band gap = \u5E26\u9699
gate = \u6805\u6781`,onChange:P=>M(P.target.value)})]}),(0,ve.jsx)("button",{type:"button",disabled:Rn(T)===d.glossary,onClick:()=>h({glossary:Rn(T)}),children:"\u5E94\u7528\u5E76\u66F4\u65B0\u8BD1\u6587"})]}),p&&(!r.length||r.some(P=>P.status!=="done"))&&e?.segments.length!==0?(0,ve.jsxs)("div",{className:"dshr-pdf-translation-notice",role:"status",children:[p,(0,ve.jsx)("button",{type:"button",onClick:S,children:"\u5237\u65B0\u670D\u52A1"})]}):null,w?(0,ve.jsx)("div",{className:"dshr-pdf-translation-notice",role:"status",children:w}):null,g?(0,ve.jsx)("div",{className:"dshr-pdf-translation-notice",role:"status",children:"\u5DF2\u6682\u505C\uFF0C\u5DF2\u5B8C\u6210\u7684\u8BD1\u6587\u4ECD\u53EF\u9605\u8BFB\u3002"}):null,(0,ve.jsxs)("div",{className:"dshr-pdf-translation-list",ref:l,tabIndex:0,"aria-label":`\u7B2C ${t} \u9875\u8BD1\u6587`,onWheel:()=>{o.current="translation"},children:[e?e.segments.length===0?(0,ve.jsx)("p",{className:"dshr-pdf-translation-empty",children:"\u6B64\u9875\u6CA1\u6709\u53EF\u63D0\u53D6\u7684\u6587\u5B57\uFF0C\u53EF\u80FD\u662F\u626B\u63CF\u9875\u6216\u56FE\u7247\u9875\u3002"}):null:(0,ve.jsx)("p",{className:"dshr-pdf-translation-empty",children:"\u6B63\u5728\u63D0\u53D6\u5F53\u524D\u9875\u6BB5\u843D\u2026"}),(e?.segments||[]).map(P=>{let m=r.find(_=>_.id===P.id)||{status:"queued"};return(0,ve.jsxs)("article",{"data-translation-segment":P.id,"data-status":m.status,className:`dshr-pdf-translation-paragraph${n===P.id&&d.linked!==!1?" is-linked":""}`,onPointerEnter:()=>{d.linked!==!1&&L(P.id)},children:[(0,ve.jsxs)("div",{className:"dshr-pdf-translation-paragraph-head",children:[(0,ve.jsxs)("span",{children:["\u6BB5\u843D ",Number(P.id.split("-s").at(-1))+1,m.cached?" \xB7 \u7F13\u5B58":""]}),(0,ve.jsxs)("div",{children:[(0,ve.jsx)("button",{type:"button","aria-label":`\u5B9A\u4F4D\u6BB5\u843D ${P.id}`,onClick:()=>L(P.id,!0),children:"\u5B9A\u4F4D\u539F\u6587"}),m.status==="done"&&!m.passthrough?(0,ve.jsx)("button",{type:"button","aria-label":`\u91CD\u65B0\u7FFB\u8BD1\u6BB5\u843D ${P.id}`,onClick:()=>x(t,P.id),children:"\u91CD\u8BD1\u672C\u6BB5"}):null]})]}),d.showSource?(0,ve.jsx)("p",{className:"dshr-pdf-translation-original",children:P.src}):null,m.zh?(0,ve.jsx)("p",{className:"dshr-pdf-translation-result",children:m.zh}):null,m.status==="done"?null:m.status==="error"?(0,ve.jsxs)("div",{className:"dshr-pdf-translation-segment-error",children:[(0,ve.jsx)("p",{children:m.error}),(0,ve.jsx)("button",{type:"button",onClick:()=>x(t,P.id),children:"\u91CD\u8BD5\u672C\u6BB5"})]}):(0,ve.jsx)("p",{className:"dshr-pdf-translation-waiting",role:"status",children:g?"\u7B49\u5F85\u7EE7\u7EED\u7FFB\u8BD1":m.status==="loading"?"\u6B63\u5728\u7FFB\u8BD1\u672C\u6BB5\u2026":m.status==="checking"?"\u6B63\u5728\u8BFB\u53D6\u5DF2\u6709\u8BD1\u6587\u2026":"\u7B49\u5F85\u7FFB\u8BD1\u2026"})]},P.id)})]}),(0,ve.jsxs)("footer",{className:"dshr-pdf-translation-footer",children:[(0,ve.jsx)("span",{children:"\u60AC\u505C\u5BF9\u7167\u6BB5\u843D\uFF0C\u70B9\u51FB\u201C\u5B9A\u4F4D\u539F\u6587\u201D\u8FD4\u56DE\u51FA\u5904\u3002"}),R?(0,ve.jsxs)("button",{type:"button",onClick:()=>x(t),children:["\u91CD\u8BD5\u5931\u8D25\u6BB5\u843D\uFF08",R,"\uFF09"]}):null]})]})}var fr=Ct(require("react"),1);var Ni={glossary:"",fontSize:16,prefetch:!0,showSource:!1,linked:!0};function nc({documentId:t,title:e,enabled:r,activePage:n,sources:o,visibleIds:i}){let[a,s]=fr.default.useState({documentId:"",pages:{},cacheIssue:""}),[l,d]=fr.default.useState({...Ni,documentId:""}),[h,g]=fr.default.useState(null),[f,p]=fr.default.useState(""),[S,w]=fr.default.useState(0),[x,T]=fr.default.useState(!1),M=fr.default.useRef(null);return fr.default.useEffect(()=>{if(!t)return;let N=!0;s({documentId:t,pages:{},cacheIssue:""}),T(!1);let R=new Ea({translate:eo,cache:{get:pl,put:gl},onChange:C=>{N&&s({documentId:t,...C})},onModelChanged:()=>{N&&w(C=>C+1)}});return M.current={documentId:t,controller:R},ml(t).catch(()=>({})).then(C=>{N&&d({...Ni,...C,documentId:t,glossary:Rn(C.glossary),fontSize:Math.max(12,Math.min(24,Number(C.fontSize)||16))})}),()=>{N=!1,R.dispose(),M.current?.controller===R&&(M.current=null)}},[t]),fr.default.useEffect(()=>{if(!t)return;let N=new AbortController;p(""),Pl({signal:N.signal}).then(E=>{N.signal.aborted||(g({...E,documentId:t}),E.ready||p("\u7FFB\u8BD1\u6A21\u578B\u672A\u5C31\u7EEA\uFF0C\u8BF7\u5728 DSH \u8BBE\u7F6E\u4E2D\u9009\u62E9\u9ED8\u8BA4\u6A21\u578B\u3002"))}).catch(E=>{N.signal.aborted||(p(E.message||"\u7FFB\u8BD1\u670D\u52A1\u4E0D\u53EF\u7528\u3002"),g({documentId:t,ready:!1}))});let R=()=>{document.visibilityState==="visible"&&w(E=>E+1)},C=setInterval(R,6e4);return document.addEventListener("visibilitychange",R),()=>{N.abort(),clearInterval(C),document.removeEventListener("visibilitychange",R)}},[t,S]),fr.default.useEffect(()=>{let N=M.current;if(!(!N||N.documentId!==t||l.documentId!==t||h?.documentId!==t)){N.controller.configure({documentId:t,title:e,enabled:r&&!x,canTranslate:!!h.ready,model:{provider:h.provider||"",model:h.model||"",promptVersion:h.promptVersion||""},glossary:l.glossary,prefetch:l.prefetch}),N.controller.setFocus(n,i);for(let[R,C]of Object.entries(o))Math.abs(Number(R)-n)<=3&&N.controller.registerPage(Number(R),C)}},[t,e,r,x,l.glossary,l.prefetch,l.documentId,h,n,i,o]),fr.default.useEffect(()=>{t&&l.documentId===t&&bl(t,l).catch(()=>{})},[t,l]),{...a.documentId===t?a:{pages:{},cacheIssue:""},preferences:l.documentId===t?l:Ni,paused:x,model:h?.documentId===t?h:null,modelError:f,setPaused:T,refreshModel:()=>w(N=>N+1),updatePreferences:N=>d(R=>({...R,...N})),retry:(N,R)=>M.current?.controller.retry(N,R)}}var oc=Ct(require("react"),1);var Pn=require("react/jsx-runtime");function Aa(t){let e=Number(t);return Number.isFinite(e)?Math.min(1,Math.max(0,e)):0}function Gu(t,e){typeof t=="function"&&t(e)}function ac({annotations:t,onOpenAnnotation:e,page:r}){let n=oc.default.useRef(e);n.current=e;let o=Array.isArray(t)?t:[],i=[];for(let a=0;a<o.length;a+=1){let s=o[a];if(!s||!Array.isArray(s.rects)||s.rects.length===0||s.kind&&s.kind!=="pdf"||r!=null&&s.page!=null&&Number(s.page)!==Number(r))continue;let l=s.style==="underline"||s.style==="note"?s.style:"highlight",d=s.color||"#f5d76e",h=s.id==null?"":String(s.id),g=va(`${h}|${s.createdAt||0}`),f=ba(s.width),p=wa(s),S=l==="note"||typeof s.note=="string"&&s.note.trim().length>0,w=null;for(let x=0;x<s.rects.length;x+=1){let T=s.rects[x];if(!T||typeof T!="object")continue;let M=Aa(T.x),N=Aa(T.y),R=Math.min(Aa(T.w),1-M),C=Math.min(Aa(T.h),1-N);if(!(R>.002)||!(C>.001))continue;w={x:M,y:N,width:R,height:C};let E=`${h}:${x}`;if(l==="underline")i.push((0,Pn.jsx)("svg",{className:"dshr-anno-pdf-underline",style:{left:`${M*100}%`,top:`calc(${(N+C)*100}% - 4px)`,width:`${R*100}%`,height:"5px","--dshr-anno-color":d},viewBox:"0 0 100 6",preserveAspectRatio:"none","data-anno-id":h,"aria-hidden":"true",focusable:"false",children:(0,Pn.jsx)("path",{d:ya(g,100)})},`u:${E}`));else{let L=Math.max(C*f,.004),P=N+C*xa(f);i.push((0,Pn.jsx)("span",{className:"dshr-anno-pdf-band",style:{left:`${M*100}%`,top:`${P*100}%`,width:`${R*100}%`,height:`${L*100}%`,"--dshr-anno-color":d},"data-anno-id":h,"aria-hidden":"true"},`b:${E}`))}}if(S&&w){let x=w.x+w.width,T=Math.min(Math.max(.005,x+.004),.972),M=Math.max(.004,w.y);i.push((0,Pn.jsx)("button",{type:"button",className:"dshr-anno-note-btn",style:{left:`${T*100}%`,top:`${M*100}%`,"--dshr-anno-color":d},"data-anno-id":h,title:p?`\u67E5\u770B\u6279\u6CE8\uFF1A${p}`:"\u67E5\u770B\u6279\u6CE8","aria-label":p?`\u67E5\u770B\u6279\u6CE8\uFF1A${p}`:"\u67E5\u770B\u6279\u6CE8",onMouseDown:N=>N.preventDefault(),onClick:()=>Gu(n.current,h),children:(0,Pn.jsx)(un,{size:12})},`n:${h}`))}}return(0,Pn.jsx)("div",{className:"dshr-anno-pdf-layer","data-anno-layer":"pdf",children:i})}var ke=require("react/jsx-runtime"),fc=Jl+ec;var{useCallback:ic,useEffect:Rt,useLayoutEffect:Ci,useMemo:Ii,useRef:we,useState:Tt}=So.default,Pi=612,Oi=792,Mi=.1,Ri=5,sc=1.2,qu=32,Xu="1000px 0px",Vu=1e7,lc=8192,Ku=2,Yu=160,Zu=600;function Ur(t,e,r){return Math.min(r,Math.max(e,t))}function Na(t,e,r,n,o=0){let i=t&&Number.isFinite(t.width)&&t.width>0?t.width:Pi,a=t&&Number.isFinite(t.height)&&t.height>0?t.height:Oi,s;if((e==="fit"||e==="page")&&n>0){if(s=Math.max(1,Math.floor(n)),e==="page"&&o>0){let h=Math.floor(i/a*Math.max(1,o-36));s=Math.max(1,Math.min(s,h))}}else s=Math.max(1,Math.floor(i*Ur(r,Mi,Ri)));let l=s/i,d=Math.max(1,Math.floor(a*l));return{width:s,height:d,pageScale:l}}function To(t,e,r=Vu){let n=e&&Number.isFinite(e.width)&&e.width>0?e.width:Pi,o=e&&Number.isFinite(e.height)&&e.height>0?e.height:Oi,i=Math.min(Math.max(globalThis.devicePixelRatio||1,1),2),a=t*i,s=n*o*a*a;s>r&&(a*=Math.sqrt(r/s));let l=Math.max(n,o)*a;return l>lc&&(a*=lc/l),Math.max(Number.EPSILON,a)}function cc(t){let e=t&&t.name;return e==="RenderingCancelledException"||e==="AbortException"||e==="AbortError"||e==="WorkerTaskCancelled"}function dc(t){let e=t&&t.name,r=t&&t.message?String(t.message):String(t||"");return e==="PasswordException"?"\u8BE5 PDF \u5DF2\u52A0\u5BC6\uFF0C\u9700\u8981\u5BC6\u7801\u624D\u80FD\u6253\u5F00\u3002":e==="InvalidPDFException"?"\u6587\u4EF6\u4E0D\u662F\u6709\u6548\u7684 PDF\uFF0C\u6216\u8005\u5DF2\u7ECF\u635F\u574F\u3002":e==="MissingPDFException"?"\u6CA1\u6709\u627E\u5230 PDF \u6570\u636E\u3002":e==="UnexpectedResponseException"?`PDF \u6570\u636E\u8BFB\u53D6\u5931\u8D25${r?`\uFF1A${r}`:"\u3002"} `:/dynamically imported module|Importing a module script failed|Failed to fetch|error loading|Cannot find module/i.test(r)?"PDF \u5F15\u64CE\u52A0\u8F7D\u5931\u8D25\uFF08/dsh-reader-assets/pdf.bundle.js\uFF09\u3002\u8BF7\u786E\u8BA4 Host \u5DF2\u6B63\u786E\u63D0\u4F9B\u9759\u6001\u8D44\u6E90\u540E\u91CD\u8BD5\u3002":r?`PDF \u52A0\u8F7D\u5931\u8D25\uFF1A${r}`:"PDF \u52A0\u8F7D\u5931\u8D25\u3002"}function hc(t){if(!t)return null;let e=t.nodeType===1?t:t.parentElement;if(!e||typeof e.closest!="function")return null;let r=e.closest("[data-page]");if(!r)return null;let n=Number(r.getAttribute("data-page"));return Number.isFinite(n)?n:null}function Qu(t){if(!t||t.rangeCount===0)return null;let e=t.getRangeAt(0),r=typeof e.getClientRects=="function"?e.getClientRects():null;if(!r||r.length===0){let s=e.getBoundingClientRect();return s&&(s.width||s.height)?s:null}if(r.length===1)return r[0];let n=1/0,o=1/0,i=-1/0,a=-1/0;for(let s=0;s<r.length;s+=1){let l=r[s];!l||!l.width&&!l.height||(n=Math.min(n,l.left),o=Math.min(o,l.top),i=Math.max(i,l.right),a=Math.max(a,l.bottom))}if(!Number.isFinite(n))return e.getBoundingClientRect();try{return new DOMRect(n,o,Math.max(0,i-n),Math.max(0,a-o))}catch{return e.getBoundingClientRect()}}function uc(t){let e=qu,r=t.querySelector(".dshr-pdf-content");if(r){let n=getComputedStyle(r),o=Number.parseFloat(n.paddingLeft)||0,i=Number.parseFloat(n.paddingRight)||0;e=o+i}return Math.max(120,t.clientWidth-e)}var Ju=So.default.memo(function({pageNumber:e,dim:r,mode:n,scale:o,viewportWidth:i,viewportHeight:a,rendered:s,active:l=!0,registerPageElement:d,registerFrameElement:h,annotations:g,onOpenAnnotation:f}){let p=Na(r,n,o,i,a),S=So.default.useCallback(x=>d(e,x),[e,d]),w=So.default.useCallback(x=>h(e,x),[e,h]);return(0,ke.jsx)("div",{className:"dshr-pdf-page","data-page":e,"data-active":l?"true":"false",style:l?void 0:{display:"none"},ref:S,children:(0,ke.jsx)("div",{className:"dshr-pdf-page-col",style:{width:`${p.width}px`},children:(0,ke.jsxs)("div",{className:"dshr-pdf-frame","data-page":e,"data-rendered":s?"true":"false",style:{width:`${p.width}px`,height:`${p.height}px`,"--total-scale-factor":String(p.pageScale)},ref:w,children:[(0,ke.jsx)("div",{className:"dshr-pdf-placeholder","aria-hidden":"true",children:e}),(0,ke.jsx)("canvas",{className:"dshr-pdf-canvas",width:1,height:1}),(0,ke.jsx)("div",{className:"dshr-pdf-text-layer"}),(0,ke.jsx)(ac,{annotations:g,onOpenAnnotation:f}),(0,ke.jsx)("div",{className:"dshr-pdf-page-loading","aria-hidden":"true",children:(0,ke.jsx)("span",{className:"dshr-pdf-spinner"})})]})})})});function pc({data:t,documentId:e="",fileName:r="",initialPage:n=1,autoTranslate:o=!1,pageTranslations:i,onReady:a,onPageChange:s,onPageText:l,onSelection:d,onRetryTranslation:h,annotations:g=[],onOpenAnnotation:f,focusAnnotation:p,hideTranslations:S=!1,paged:w=!1,onHideTranslations:x}){let T=we(null);T.current={autoTranslate:o,paged:w,onReady:a,onPageChange:s,onPageText:l,onSelection:d,onRetryTranslation:h,onOpenAnnotation:f};let M=we(null),N=we(null),R=we(new Map),C=we(new Map),E=we(new Map),L=we(new Map),P=we({width:Pi,height:Oi}),m=we(new Map),_=we(new Set),F=we([]),V=we(new Set),z=we(null),se=we(null),de=we(null),q=we(new _a),me=we(0),X=we(!1),D=we("fit"),he=we(1),$=we(0),re=we(0),ne=we(!1),ye=we(0),Q=we(1),Be=we(!!o),$e=we([]),Pe=we(new Set),ct=we(0),Oe=we(0),ut=we(0),u=we(0),c=we(null),A=we(0),v=we(null),oe=we(!1),ue=we(""),le=we(0),be=we(!1),Ee=we(!1),Me=we(!1),[te,je]=Tt("loading"),[Je,et]=Tt(null),[We,De]=Tt(null),[ge,He]=Tt(0),[Ye,tt]=Tt({}),[xt,J]=Tt(null),[ce,Ce]=Tt("fit"),[Fe,Bt]=Tt(1),[Ot,Jr]=Tt(0),[ft,er]=Tt(0),[pt,Qt]=Tt(!1),[Ae,sn]=Tt(Ur(Number.parseInt(n,10)||1,1,999999)),[st,wr]=Tt({}),[Dr,$t]=Tt(""),[ln,ir]=Tt(!1),[Gn,_t]=Tt(0),[mt,Et]=Tt({}),[bn,xn]=Tt([]),[sr,vn]=Tt(null),[tr,yn]=Tt(!1),en=we(null),kr=we("source"),lr=o&&!S&&!tr,At=nc({documentId:e,title:r,enabled:lr,activePage:Ae,sources:mt,visibleIds:bn}),fe=we(!1);fe.current=lr&&At.preferences.linked!==!1,en.current=sr;let y=Ii(()=>{let b=new Ta(ge,Na(xt,pt?"page":ce,Fe,Ot,ft).height);for(let[I,B]of Object.entries(Ye))b.setHeight(Number(I),Na(B,pt?"page":ce,Fe,Ot,ft).height);return b.paddingTop=c.current?.paddingTop??18,b},[ge,xt,Ye,pt,ce,Fe,Ot,ft]);c.current=y,Ci(()=>{let b=v.current;v.current=null,b&&b.revision===A.current&&!w&&Xo(b.anchor)},[y,w]),Rt(()=>{o&&!S&&yn(!1)},[o,S]);function j(b,I){m.current.set(b,I),Et(B=>B[b]===I?B:Object.fromEntries(Object.entries({...B,[b]:I}).filter(([G])=>Math.abs(Number(G)-Q.current)<=3)))}function ae(b,I){return[...b?.querySelectorAll("[data-pdf-segments]")||[]].filter(B=>B.dataset.pdfSegments.split("|").includes(I))}function Ze(b,{origin:I="source",reveal:B=!1}={},G=Q.current){if(kr.current=I,vn(rt=>rt?.page===G&&rt.id===b?rt:{page:G,id:b}),I==="source"&&G!==Q.current&&Sr(G),!B)return;let ie=N.current,K=ae(C.current.get(G),b)[0];if(!ie||!K)return;let Te=K.getBoundingClientRect(),Ve=ie.getBoundingClientRect();(Te.top<Ve.top+12||Te.bottom>Ve.bottom-12)&&ie.scrollTo({top:Math.max(0,ie.scrollTop+Te.top-Ve.top-28),behavior:"auto"})}function vt(){let b=N.current,I=C.current.get(Q.current);if(!b||!I)return;let B=b.getBoundingClientRect(),G=new Set;for(let Te of I.querySelectorAll("[data-pdf-segments]")){let Ve=Te.getBoundingClientRect();if(Ve.bottom>B.top+4&&Ve.top<B.bottom-4)for(let rt of Te.dataset.pdfSegments.split("|"))G.add(rt)}let ie=[...G];xn(Te=>Te.join("|")===ie.join("|")?Te:ie);let K=en.current;ie.length&&(!K||K.page!==Q.current||!G.has(K.id)&&kr.current==="source")&&Ze(ie[0])}Rt(()=>{for(let b of C.current.values())for(let I of b.querySelectorAll("[data-pdf-segments]"))fe.current&&Number(b.dataset.page)===sr?.page&&I.dataset.pdfSegments.split("|").includes(sr.id)?I.dataset.pdfLinked="true":delete I.dataset.pdfLinked},[sr,st,mt,lr,At.preferences.linked]),Rt(()=>{if(te!=="ready")return;let b=requestAnimationFrame(vt);return()=>cancelAnimationFrame(b)},[Ae,te,mt,lr]),Rt(()=>{if(!e||!lr||At.paused||At.preferences.prefetch===!1||te!=="ready"||!st[Ae]||Ae>=ge)return;let b=!1,I=me.current,B=Ae+1,G=setTimeout(async()=>{if(!(ct.current>0))try{let ie=await se.current?.getPage(B);if(!ie||b)return;let K=await ie.getTextContent();if(b||I!==me.current)return;j(B,Ai(K.items,B,ie.getViewport({scale:1}).width))}catch{}},850);return()=>{b=!0,clearTimeout(G)}},[e,Ae,ge,te,lr,At.paused,At.preferences.prefetch,st]),Be.current=!!o,D.current=ce,he.current=Fe,$.current=Ot,re.current=ft,ne.current=pt,ye.current=ge,xt&&(P.current=xt);function Xe(b){let I=L.current.get(b);return I||P.current}function bt(b){return Na(Xe(b),ne.current?"page":D.current,he.current,$.current,re.current)}function Ht(b){return bt(b).pageScale}function _r(b){let I=E.current.get(b);return I||(I={page:null,token:0,wantRender:!1,rendered:!1,rendering:!1,renderTask:null,textLayer:null,textContent:null,grouped:null,lastRenderScale:null,lastRasterScale:0,textLayerReady:!1},E.current.set(b,I)),I}function Fr(b,I){wr(B=>{if(I)return B[b]?B:{...B,[b]:!0};if(!B[b])return B;let G={...B};return delete G[b],G})}function yt(b,I,B){if(!(I>0)||!(B>0))return!1;let G=L.current.get(b);return G&&Math.abs(G.width-I)<.05&&Math.abs(G.height-B)<.05?!1:(!v.current&&!T.current?.paged&&(v.current={anchor:wn(),revision:A.current}),L.current.set(b,{width:I,height:B}),tt(ie=>({...ie,[b]:{width:I,height:B}})),Tr(),!0)}function cn(){if(T.current?.paged)return;let b=N.current;if(!b)return;let I=b.querySelector(".dshr-pdf-content");I&&c.current&&(c.current.paddingTop=Number.parseFloat(getComputedStyle(I).paddingTop)||0)}function Tr(){ut.current||(ut.current=requestAnimationFrame(()=>{ut.current=0,cn()}))}function Sr(b){if(!Number.isFinite(b)||b===Q.current||(Q.current=b,sn(b),kr.current="source",!Me.current))return;let I=T.current&&T.current.onPageChange;I&&I(b)}function dn(){if(T.current?.paged||!Me.current)return;let b=N.current;if(!b)return;let I=c.current;if(!I?.count)return;let B=b.scrollTop+Ur(b.clientHeight*.28,48,240);Sr(I.pageAt(B))}function wn(){if(T.current?.paged||!N.current||!c.current?.count)return null;let b=N.current.scrollTop,I=c.current.entryAt(b+1);return{page:I.page,ratio:Ur((b-I.top)/I.height,0,1)}}function Xo(b){!b||T.current?.paged||!N.current||!c.current?.count||(N.current.scrollTop=Math.max(0,c.current.top(b.page)+b.ratio*c.current.height(b.page)))}function ni(b){requestAnimationFrame(()=>{requestAnimationFrame(()=>{X.current||b()})})}function zr(b){if(!Be.current||V.current.has(b))return;let I=m.current.get(b);if(!I||(V.current.add(b),!I.text))return;let B=T.current&&T.current.onPageText;B&&B(b,{text:I.text,segments:I.segments.map(G=>({src:G.src}))})}function oi(){_.current.forEach(b=>zr(b))}function cr(b,I,B){return!X.current&&B===me.current&&I===b.token&&b.wantRender}async function ai(b){let I=se.current,B=z.current,G=C.current.get(b);if(!I||!B||!G)return;let ie=me.current,K=_r(b),Te=K.token+=1;if(K.renderTask){try{K.renderTask.cancel()}catch{}K.renderTask=null}if(K.textLayer){try{K.textLayer.cancel()}catch{}K.textLayer=null}let Ve=G.querySelector("canvas.dshr-pdf-canvas"),rt=G.querySelector(".dshr-pdf-text-layer");if(!(!Ve||!rt)){K.rendering=!0,K.renderFailed=!1;try{let Ue=K.page;if(!Ue){if(Ue=await I.getPage(b),!cr(K,Te,ie))return;K.page=Ue}let gt=Ue.getViewport({scale:1}),wt=Xe(b);(Math.abs(gt.width-wt.width)>.05||Math.abs(gt.height-wt.height)>.05)&&yt(b,gt.width,gt.height);let lt=bt(b),xo=Xe(b),si=()=>T.current?.paged?b===Q.current:_.current.has(b),li=To(lt.pageScale,xo),_n=!K.rendered&&q.current.get(b);_n&&(Ve.width=_n.bitmap.width,Ve.height=_n.bitmap.height,Ve.getContext("2d",{alpha:!1}).drawImage(_n.bitmap,0,0),K.rendered=!0,K.lastRenderScale=_n.scale,K.lastRasterScale=_n.rasterScale,G.dataset.pdfQuality=_n.rasterScale>=li-.002?"full":"preview",M.current&&(M.current.dataset.pdfCacheHits=String((Number(M.current.dataset.pdfCacheHits)||0)+1)),Fr(b,!0));let Uh=K.lastRenderScale===null||Math.abs(K.lastRenderScale-lt.pageScale)>=.002,vo=si()?li:Math.min(To(lt.pageScale,xo,2e6),lt.pageScale);if(!K.rendered||Uh||K.lastRasterScale<vo-.002){let dr=Math.min(vo,lt.pageScale),Zo=!K.rendered&&dr<vo-.002?[dr,vo]:[vo];for(let tn=0;tn<Zo.length;tn++){if(tn&&(await new Promise(Jt=>setTimeout(Jt,32)),!cr(K,Te,ie)||!si()))return;let qn=Zo[tn],Xn=Ue.getViewport({scale:qn}),Nr=document.createElement("canvas");Nr.width=Math.max(1,Math.floor(Xn.width)),Nr.height=Math.max(1,Math.floor(Xn.height));try{let Jt=Ue.render({canvas:Nr,viewport:Xn,intent:"display",background:"#ffffff"});Jt.onContinue=rr=>setTimeout(()=>{cr(K,Te,ie)?rr():Jt.cancel()},si()?0:16),K.renderTask=Jt;try{await Jt.promise}finally{K.renderTask===Jt&&(K.renderTask=null)}if(!cr(K,Te,ie))return;if(M.current){let rr=Jt.isWorkerRendering?"pdfWorkerRenders":"pdfMainRenders";M.current.dataset[rr]=String((Number(M.current.dataset[rr])||0)+1),M.current.dataset.pdfRenderer=Jt.isWorkerRendering?"worker":"main"}Ve.width=Nr.width,Ve.height=Nr.height;let Vn=Ve.getContext("2d",{alpha:!1});if(!Vn)throw new Error("\u65E0\u6CD5\u521B\u5EFA PDF \u753B\u5E03\u4E0A\u4E0B\u6587");if(Vn.drawImage(Nr,0,0),K.lastRenderScale=lt.pageScale,K.lastRasterScale=qn,K.rendered=!0,G.dataset.pdfQuality=qn>=li-.002?"full":"preview",Fr(b,!0),typeof createImageBitmap=="function")try{let rr=await createImageBitmap(Nr);if(!cr(K,Te,ie)){rr.close();return}q.current.set(b,{bitmap:rr,scale:lt.pageScale,rasterScale:qn}),M.current&&(M.current.dataset.pdfCacheBytes=String(q.current.bytes))}catch{}}finally{Nr.width=0,Nr.height=0}}}if(T.current?.paged?b!==Q.current:!_.current.has(b))return;try{let dr=K.textContent;if(!dr){if(dr=await Ue.getTextContent(),!cr(K,Te,ie))return;K.textContent=dr}K.grouped||(K.grouped=Ai(dr.items,b,gt.width),j(b,K.grouped)),rt.replaceChildren();let Zo=Ue.getViewport({scale:lt.pageScale}),tn=new B.TextLayer({textContentSource:dr,container:rt,viewport:Zo});K.textLayer=tn;try{await tn.render()}finally{K.textLayer===tn&&(K.textLayer=null)}if(!cr(K,Te,ie))return;K.textLayerReady=!0;let qn=tn.textDivs||[],Xn=new Map,Nr=0;dr.items.forEach((Jt,Vn)=>{typeof Jt.str=="string"&&Xn.set(Vn,qn[Nr++])});for(let Jt of K.grouped.segments)for(let Vn of Jt.itemIndices||[]){let rr=Xn.get(Vn);if(!rr)continue;let Qo=new Set((rr.dataset.pdfSegments||"").split("|").filter(Boolean));Qo.add(Jt.id),rr.dataset.pdfSegments=[...Qo].join("|"),rr.dataset.pdfSegment=[...Qo][0],fe.current&&en.current?.page===b&&Qo.has(en.current.id)&&(rr.dataset.pdfLinked="true")}vt()}catch(dr){cc(dr)||console.warn("[dsh-reader] PDF \u6587\u672C\u5C42\u6E32\u67D3\u5931\u8D25",dr)}if(!cr(K,Te,ie))return;_.current.has(b)&&zr(b)}catch(Ue){cc(Ue)||(K.renderFailed=!0,console.warn(`[dsh-reader] \u7B2C ${b} \u9875\u6E32\u67D3\u5931\u8D25`,Ue))}finally{K.rendering=!1}}}function Vo(){if(!X.current)for(;ct.current<Ku&&$e.current.length>0;){$e.current.sort((Te,Ve)=>Math.abs(Te.pageNumber-Q.current)-Math.abs(Ve.pageNumber-Q.current));let b=$e.current[0],I=E.current.get(Q.current);if(b.pageNumber!==Q.current&&(!I?.rendered||I.rendering))break;let B=$e.current.shift();Pe.current.delete(B.pageNumber);let G=E.current.get(B.pageNumber);if(!G||!G.wantRender||G.rendering||!C.current.has(B.pageNumber))continue;ct.current+=1;let ie=me.current,K=G.token+1;ai(B.pageNumber).catch(()=>{}).finally(()=>{if(ie===me.current){if(ct.current=Math.max(0,ct.current-1),G.wantRender&&C.current.has(B.pageNumber)){let Te=bt(B.pageNumber),rt=(T.current?.paged?B.pageNumber===Q.current:_.current.has(B.pageNumber))&&G.rendered&&!G.renderFailed&&G.lastRasterScale<To(Te.pageScale,Xe(B.pageNumber))-.002;(G.token!==K||rt||G.rendered&&Math.abs((G.lastRenderScale||0)-Te.pageScale)>.002)&&kn(B.pageNumber,{front:!0})}Vo()}})}}function kn(b,{front:I=!1}={}){if(!C.current.has(b))return;let B=_r(b);if(B.wantRender=!0,I&&b===Q.current&&!B.rendered)for(let[ie,K]of E.current)ie!==b&&K.renderTask&&!_.current.has(ie)&&(K.token++,K.renderTask.cancel());if(B.rendering)return;if(Pe.current.has(b)){I&&$e.current.sort((ie,K)=>(K.pageNumber===b)-(ie.pageNumber===b));return}if(B.rendered&&B.lastRenderScale!==null){let ie=bt(b);if((B.textLayerReady||(T.current?.paged?b!==Q.current:!_.current.has(b)))&&Math.abs(B.lastRenderScale-ie.pageScale)<.002&&B.lastRasterScale>=(b===Q.current?To(ie.pageScale,Xe(b)):Math.min(To(ie.pageScale,Xe(b),2e6),ie.pageScale))-.002)return}Pe.current.add(b);let G={pageNumber:b};I?$e.current.unshift(G):$e.current.push(G),Vo()}function k(b){let I=E.current.get(b);if(!I)return;if(I.wantRender=!1,I.token+=1,I.renderTask){try{I.renderTask.cancel()}catch{}I.renderTask=null}if(I.textLayer){try{I.textLayer.cancel()}catch{}I.textLayer=null}let B=C.current.get(b);if(B){let G=B.querySelector("canvas.dshr-pdf-canvas");G&&(G.width=0,G.height=0);let ie=B.querySelector(".dshr-pdf-text-layer");ie&&ie.replaceChildren()}if(I.page){try{I.page.cleanup()}catch{}I.page=null}I.textContent=null,I.grouped=null,m.current.delete(b),I.lastRenderScale=null,I.lastRasterScale=0,I.textLayerReady=!1,I.rendered&&(I.rendered=!1,Fr(b,!1)),$e.current.length>0&&($e.current=$e.current.filter(G=>G.pageNumber!==b)),Pe.current.delete(b),E.current.delete(b)}function O(){for(let[b,I]of E.current){if(!I.rendered||!I.wantRender||I.rendering)continue;let B=bt(b);(!I.textLayerReady||I.lastRenderScale===null||Math.abs(I.lastRenderScale-B.pageScale)>.002)&&kn(b)}}function ee(b=Yu){Oe.current&&clearTimeout(Oe.current),Oe.current=setTimeout(()=>{Oe.current=0,O()},b)}function Le(b){A.current++,v.current=null,b=Ur(Math.round(Number(b)||1),1,ye.current||1);let I=N.current;if(T.current?.paged){Sr(b);return}if(!I||!c.current?.count){Sr(b);return}let B=c.current.top(b)-10;typeof I.scrollTo=="function"?I.scrollTo({top:Math.max(0,B),behavior:"auto"}):I.scrollTop=Math.max(0,B),Sr(b)}function _e(b){let I=N.current;I&&I.scrollBy({top:b*I.clientHeight*.92,behavior:"auto"})}function Ge(b){!b||T.current?.paged||(v.current={anchor:b,revision:A.current})}function dt(b){let I=wn(),B=D.current==="fit"?Ht(Q.current):he.current,G=Ur(B*b,Mi,Ri);ne.current=!1,Qt(!1),D.current="custom",he.current=G,Ce("custom"),Bt(G),Ge(I)}function Er(){let b=wn();ne.current=!1,Qt(!1),D.current="fit",Ce("fit"),Ge(b)}function Ar(){let b=wn(),I=!ne.current;ne.current=I,Qt(I),D.current="fit",Ce("fit"),Ge(b),Tr()}function Br(){Le(Math.max(1,Q.current-1),"smooth")}Rt(()=>{let b=N.current;if(!b||te!=="ready")return;let I=B=>{(Number(B.detail)||1)>0?Ko():Br()};return b.addEventListener("dshr-pdf-page-turn",I),()=>b.removeEventListener("dshr-pdf-page-turn",I)},[te,ge,Ae]);function Ko(){Le(Math.min(ye.current||1,Q.current+1),"smooth")}function Nh(b,I){let B=m.current.get(b);if(!B||!B.text)return;let G=B.text,ie=I.replace(/\s+/g," ").trim(),K=ie?G.indexOf(ie):-1,Te=Zu,Ve=0;if(K>=0){let gt=Math.max(80,Math.floor((Te-Math.min(ie.length,Te-160))/2));Ve=Math.max(0,K-gt)}let rt=Math.min(G.length,Ve+Te);return rt-Ve<Te&&(Ve=Math.max(0,rt-Te)),G.slice(Ve,rt).trim()||void 0}function Yo(){if(ue.current="",!oe.current)return;oe.current=!1;let b=T.current&&T.current.onSelection;b&&b(null)}function Us(){let b=globalThis.getSelection?globalThis.getSelection():null;if(!b||b.isCollapsed||b.rangeCount===0){Yo();return}let B=M.current;if(!B)return;let G=b.getRangeAt(0);if(!B.querySelector(".dshr-pdf-content")?.contains(G.commonAncestorContainer)){Yo();return}let ie=b.toString().replace(/\s+/g," ").trim();if(!ie){Yo();return}let K=hc(G.startContainer)||hc(G.endContainer)||Q.current,Te=Qu(b);if(!Te)return;let Ve=[K,ie,Math.round(Te.left),Math.round(Te.top),Math.round(Te.width),Math.round(Te.height)].join("|");if(Ve===ue.current)return;ue.current=Ve;let rt={text:ie,page:K,rect:Te},Ue=C.current.get(K);if(Ue){let lt=Wl(G,Ue);lt.length>0&&(rt.pageRects=lt)}let gt=Nh(K,ie);gt&&(rt.context=gt),oe.current=!0;let wt=T.current&&T.current.onSelection;wt&&wt(rt)}let Ch=ic((b,I)=>{I?R.current.set(b,I):R.current.delete(b)},[]),Ih=ic((b,I)=>{if(I){C.current.set(b,I);for(let G of F.current)G.observe(I);let B=E.current.get(b);B&&(B.rendered=!1,B.textLayerReady=!1,B.lastRenderScale=null,Fr(b,!1))}else{let B=C.current.get(b);if(B)for(let G of F.current)G.unobserve(B);_.current.delete(b),k(b),C.current.delete(b)}},[]);function Mh(b){let I=b.target;if(I&&typeof I.closest=="function"&&I.closest('button, a, input, textarea, select, [role="button"]'))return;let B=M.current;B&&typeof B.focus=="function"&&B.focus({preventScroll:!0})}function Rh(b){if(b.defaultPrevented||b.altKey||T.current?.paged)return;let I=b.target;if(I?.closest?.(".dshr-pdf-translation-panel"))return;let B=I&&I.tagName?I.tagName.toLowerCase():"";if(B==="input"||B==="textarea"||B==="select"||I&&I.isContentEditable)return;let G=N.current;if(!(!G||te!=="ready"))switch(b.key){case"PageDown":b.preventDefault(),_e(1);break;case"PageUp":b.preventDefault(),_e(-1);break;case"Home":b.preventDefault(),G.scrollTo({top:0,behavior:"auto"}),Sr(1);break;case"End":b.preventDefault(),G.scrollTo({top:G.scrollHeight,behavior:"auto"}),Sr(ye.current||1);break;default:break}}function Ws(){for(let b of E.current.values()){if(b.token+=1,b.renderTask)try{b.renderTask.cancel()}catch{}if(b.textLayer)try{b.textLayer.cancel()}catch{}if(b.page)try{b.page.cleanup()}catch{}}E.current.clear()}Rt(()=>{let b=!1,I=new AbortController,B;if(me.current+=1,X.current=!1,de.current?.close(),de.current=null,se.current=null,q.current.clear(),M.current){for(let ie of["pdfReadBytes","pdfSourceBytes","pdfRangeReads","pdfCacheHits","pdfCacheBytes","pdfWorkerRenders","pdfMainRenders"])M.current.dataset[ie]="0";delete M.current.dataset.pdfRenderer}Ws(),R.current.clear(),C.current.clear(),L.current.clear(),m.current.clear(),_.current.clear(),V.current.clear(),$e.current=[],Pe.current.clear(),ct.current=0,v.current=null,A.current++,Ee.current=!1,je("loading"),et(null),De(null),He(0),tt({}),J(null),wr({}),$t(""),ir(!1),sn(1),Et({}),vn(null),xn([]),Q.current=0,Me.current=!1;let G=typeof Blob<"u"&&t instanceof Blob;if(!G&&!(t instanceof ArrayBuffer)&&!ArrayBuffer.isView(t)||(G?t.size===0:t.byteLength===0)){je("error"),et("\u6CA1\u6709\u53EF\u663E\u793A\u7684 PDF \u6570\u636E\u3002");return}return(async()=>{try{if(B=await ka(t,{signal:I.signal,onRead:lt=>{!b&&M.current&&(M.current.dataset.pdfReadBytes=String(lt.bytes),M.current.dataset.pdfSourceBytes=String(lt.total),M.current.dataset.pdfRangeReads=String(lt.reads))},onProgress:lt=>{!b&&lt?.total>0&&De(Math.max(1,Math.min(100,Math.round(lt.loaded/lt.total*100))))},onError:lt=>{b||(je("error"),et(dc(lt)))}}),b){B.close();return}de.current=B;let{engine:ie,pdf:K}=B;z.current=ie,se.current=K;let Te=await K.getPage(1);if(b)return;let Ve=Te.getViewport({scale:1}),rt={width:Ve.width,height:Ve.height};P.current=rt;try{Te.cleanup()}catch{}let Ue=Ur(Number.parseInt(n,10)||1,1,K.numPages),gt=null;if(Ue!==1)try{let lt=await K.getPage(Ue),xo=lt.getViewport({scale:1});gt={width:xo.width,height:xo.height},L.current.set(Ue,gt),lt.cleanup()}catch{}if(b)return;J(rt),tt(gt?{[Ue]:gt}:{}),He(K.numPages),ye.current=K.numPages,De(null),je("ready"),sn(Ue),Q.current=Ue;let wt=T.current&&T.current.onReady;wt&&wt({pageCount:K.numPages})}catch(ie){if(b)return;B?.close(),de.current=null,se.current=null,De(null),je("error"),et(dc(ie))}})(),()=>{if(b=!0,I.abort(),X.current=!0,me.current+=1,Ws(),B?.close(),de.current=null,se.current=null,q.current.clear(),$e.current=[],Pe.current.clear(),Oe.current&&(clearTimeout(Oe.current),Oe.current=0),ut.current&&(cancelAnimationFrame(ut.current),ut.current=0),u.current&&(cancelAnimationFrame(u.current),u.current=0),oe.current){oe.current=!1;let ie=T.current&&T.current.onSelection;ie&&ie(null)}}},[t,Gn]),Rt(()=>{let b=()=>Us(),I=()=>Us(),B=()=>{le.current||(le.current=requestAnimationFrame(()=>{le.current=0;let G=globalThis.getSelection?globalThis.getSelection():null;(!G||G.isCollapsed||G.rangeCount===0)&&Yo()}))};return document.addEventListener("mouseup",b,!0),document.addEventListener("keyup",I,!0),document.addEventListener("selectionchange",B),()=>{document.removeEventListener("mouseup",b,!0),document.removeEventListener("keyup",I,!0),document.removeEventListener("selectionchange",B),le.current&&(cancelAnimationFrame(le.current),le.current=0)}},[]),Ci(()=>{if(te!=="ready")return;let b=N.current;if(!b)return;let I=uc(b);I>0&&($.current=I,Jr(I)),b.clientHeight>0&&(re.current=b.clientHeight,er(b.clientHeight))},[te,ge]),Rt(()=>{w&&Qt(!0)},[w]),Rt(()=>{if(!w)return;let b=N.current;b&&(b.scrollTop=0)},[w]),Rt(()=>{if(!w||te!=="ready"||ge<=0)return;_.current=new Set([Ae]),zr(Ae);let b=[Ae];for(let G=1;G<=2;G+=1)b.push(Ae+G,Ae-G);let B=b.filter((G,ie,K)=>G>=1&&G<=ge&&K.indexOf(G)===ie).map((G,ie)=>window.setTimeout(()=>kn(G,{front:ie===0}),ie===0?0:ie===1?30:1e3+(ie-2)*120));return()=>{for(let G of B)window.clearTimeout(G)}},[w,te,Ae,ge,pt,ce,Fe,Ot,ft]),Rt(()=>{if(!w||te!=="ready")return;let b=N.current;b&&b.dispatchEvent(new CustomEvent("dshr-pdf-page-state",{detail:{page:Ae,pages:ge}}))},[w,te,Ae,ge]),Rt(()=>{te==="ready"&&(Tr(),ee())},[pt,ft,te]),Rt(()=>{if(te!=="ready")return;let b=N.current;if(!b)return;let I=!1,B=null,G=null,ie=()=>{let rt=uc(b),Ue=b.clientHeight,gt=rt>0&&Math.abs(rt-$.current)>=.5,wt=Ue>0&&Math.abs(Ue-re.current)>=.5;if(!gt&&!wt)return;let lt=gt||wt&&ne.current?wn():null;gt&&($.current=rt,Jr(rt)),wt&&(re.current=Ue,er(Ue)),lt&&!T.current?.paged&&Ge(lt)},K=()=>{u.current||(A.current++,v.current=null,u.current=requestAnimationFrame(()=>{u.current=0,dn(),vt()}))},Te=null;typeof ResizeObserver=="function"&&(Te=new ResizeObserver(()=>{I||ie()}),Te.observe(b)),b.addEventListener("scroll",K,{passive:!0}),!w&&typeof IntersectionObserver=="function"&&(B=new IntersectionObserver(Ue=>{for(let gt of Ue){let wt=Number(gt.target.getAttribute("data-page"));Number.isFinite(wt)&&(gt.isIntersecting?(_.current.add(wt),kn(wt,{front:!0}),zr(wt)):_.current.delete(wt))}},{root:b,rootMargin:"0px",threshold:0}),G=new IntersectionObserver(Ue=>{for(let gt of Ue){let wt=Number(gt.target.getAttribute("data-page"));Number.isFinite(wt)&&(gt.isIntersecting?kn(wt):T.current?.paged||k(wt))}},{root:b,rootMargin:Xu,threshold:0}),F.current=[B,G],ni(()=>{if(!I)for(let Ue of C.current.values())B.observe(Ue),G.observe(Ue)}));let Ve=requestAnimationFrame(()=>{I||(cn(),dn())});return()=>{I=!0,cancelAnimationFrame(Ve),Te&&Te.disconnect(),B&&B.disconnect(),G&&G.disconnect(),F.current=[],b.removeEventListener("scroll",K)}},[te,ge,w]),Rt(()=>{if(te!=="ready"||ge<=0||Ee.current)return;Ee.current=!0;let b=Ur(Number.parseInt(n,10)||1,1,ge),I=setTimeout(()=>{Me.current=!0,N.current&&(cn(),Le(b,"auto"))},0);return()=>clearTimeout(I)},[te,ge]);let js=we(w);Ci(()=>{js.current!==w&&(js.current=w,te==="ready"&&(w?N.current.scrollTop=0:Le(Q.current,"auto")))},[w,te]),Rt(()=>{te==="ready"&&(Tr(),ee())},[te,ce,Fe,Ot,Ye]),Rt(()=>{te==="ready"&&Tr()},[te,S]),Rt(()=>{Be.current=!!o,o&&te==="ready"&&oi()},[o,te]);let ii=Ii(()=>{if(ge<=0)return[];let b=w?2:Math.min(16,Math.max(3,Math.ceil(ft/Math.max(1,Math.min(y.defaultHeight,...y.heights.values())))+1)),I=Math.max(1,Ae-b),B=Math.min(ge,Ae+b);return Array.from({length:B-I+1},(G,ie)=>I+ie)},[w,Ae,ge,y,ft]),Gs=ii[0]||1,qs=ii.at(-1)||0,Ph=Ii(()=>{let b=new Map;for(let I of g||[]){if(!I||I.kind!=="pdf"||!Number.isFinite(I.page))continue;let B=b.get(I.page)||[];B.push(I),b.set(I.page,B)}return b},[g]);Rt(()=>{if(!p?.page||te!=="ready")return;let b=setTimeout(()=>{Le(Ur(Number(p.page)||1,1,ye.current||1),"smooth")},80);return()=>clearTimeout(b)},[p,te]);let Oh=(ce==="fit"?Ht(Ae):Fe)<Ri-.001,Lh=(ce==="fit"?Ht(Ae):Fe)>Mi+.001;function Dh(b){let I=b.currentTarget;$t(String(Ae)),ir(!0),requestAnimationFrame(()=>{I&&typeof I.select=="function"&&I.select()})}function Fh(b){let I=b.target.value.replace(/[^\d]/g,"").slice(0,6);$t(I)}function zh(){if(be.current){be.current=!1,ir(!1);return}let b=Number.parseInt(Dr,10);Number.isFinite(b)&&ye.current>0&&Le(Ur(b,1,ye.current),"auto"),ir(!1)}function Bh(){ln&&zh()}function $h(b){b.key==="Enter"?(b.preventDefault(),b.currentTarget.blur()):b.key==="Escape"&&(b.preventDefault(),be.current=!0,ir(!1),b.currentTarget.blur())}let Hh=ln?Dr:String(Ae);return(0,ke.jsxs)("div",{className:"dshr-pdf-root",ref:M,tabIndex:0,"data-dshr-pdf":"",role:"region","aria-label":r?`PDF \u9605\u8BFB\u5668\uFF1A${r}`:"PDF \u9605\u8BFB\u5668",onKeyDown:Rh,children:[te==="ready"?(0,ke.jsxs)("div",{className:"dshr-pdf-toolbar",role:"toolbar","aria-label":"PDF \u9605\u8BFB\u5DE5\u5177\u680F",children:[r?(0,ke.jsx)("span",{className:"dshr-pdf-title",title:r,children:r}):(0,ke.jsx)("span",{className:"dshr-pdf-title"}),(0,ke.jsx)("span",{className:"dshr-pdf-toolbar-spacer"}),(0,ke.jsx)("button",{type:"button",className:"dshr-pdf-tbtn",title:"\u7F29\u5C0F","aria-label":"\u7F29\u5C0F",disabled:!Lh,onClick:()=>dt(1/sc),children:"\u2212"}),(0,ke.jsx)("span",{className:"dshr-pdf-zoom-percent","data-scale":pt?"page":ce==="fit"?"fit":Fe,title:pt?"\u5F53\u524D\u4E3A\u6574\u9875\u663E\u793A":ce==="fit"?"\u5F53\u524D\u4E3A\u9002\u5408\u5BBD\u5EA6":"\u5F53\u524D\u7F29\u653E\u6BD4\u4F8B",children:pt?"\u6574\u9875":ce==="fit"?"\u9002\u5BBD":`${Math.round(Fe*100)}%`}),(0,ke.jsx)("button",{type:"button",className:"dshr-pdf-tbtn",title:"\u653E\u5927","aria-label":"\u653E\u5927",disabled:!Oh,onClick:()=>dt(sc),children:"\uFF0B"}),(0,ke.jsx)("button",{type:"button",className:"dshr-pdf-tbtn dshr-pdf-tbtn-wide","data-active":pt?"true":"false","aria-pressed":pt,title:pt?"\u5F53\u524D\u6574\u9875\u663E\u793A\uFF1B\u70B9\u51FB\u56DE\u5230\u9002\u5408\u5BBD\u5EA6":"\u9002\u5408\u5BBD\u5EA6\uFF1B\u70B9\u51FB\u5207\u6362\u4E3A\u6574\u9875\u663E\u793A",onClick:Ar,children:pt?"\u6574\u9875":"\u9002\u5BBD"}),(0,ke.jsx)("span",{className:"dshr-pdf-toolbar-sep","aria-hidden":"true"}),(0,ke.jsx)("button",{type:"button",className:"dshr-pdf-tbtn",title:"\u4E0A\u4E00\u9875\uFF08PageUp\uFF09","aria-label":"\u4E0A\u4E00\u9875",disabled:Ae<=1,onClick:Br,children:"\u2039"}),(0,ke.jsxs)("div",{className:"dshr-pdf-pager",children:[(0,ke.jsx)("input",{className:"dshr-pdf-page-input",inputMode:"numeric","aria-label":"\u9875\u7801",value:Hh,onChange:Fh,onFocus:Dh,onBlur:Bh,onKeyDown:$h}),(0,ke.jsxs)("span",{"aria-hidden":"true",children:["/ ",ge]})]}),(0,ke.jsx)("button",{type:"button",className:"dshr-pdf-tbtn",title:"\u4E0B\u4E00\u9875\uFF08PageDown\uFF09","aria-label":"\u4E0B\u4E00\u9875",disabled:Ae>=ge,onClick:Ko,children:"\u203A"})]}):null,(0,ke.jsxs)("div",{className:"dshr-pdf-workspace",children:[(0,ke.jsx)("div",{className:"dshr-pdf-scroll",ref:N,"data-pdf-page":w?Ae:void 0,"data-pdf-pages":w?ge:void 0,onMouseDown:Mh,onPointerOver:b=>{if(!fe.current||b.buttons)return;let I=b.target.closest?.("[data-pdf-segment]"),B=Number(I?.closest(".dshr-pdf-frame")?.dataset.page);I&&B&&Ze(I.dataset.pdfSegment,{origin:"source"},B)},children:te==="ready"?(0,ke.jsxs)("div",{className:"dshr-pdf-content",children:[!w&&Gs>1?(0,ke.jsx)("div",{className:"dshr-pdf-spacer","aria-hidden":"true",style:{height:y.top(Gs)-y.paddingTop}}):null,ii.map(b=>(0,ke.jsx)(Ju,{pageNumber:b,dim:Xe(b),mode:pt?"page":ce,scale:Fe,viewportWidth:Ot,viewportHeight:ft,active:!w||b===Ae,rendered:!!st[b],registerPageElement:Ch,registerFrameElement:Ih,annotations:Ph.get(b),onOpenAnnotation:f},b)),!w&&qs<ge?(0,ke.jsx)("div",{className:"dshr-pdf-spacer","aria-hidden":"true",style:{height:y.top(ge+1)-y.top(qs+1)}}):null]}):(0,ke.jsx)("div",{className:"dshr-pdf-status",role:te==="error"?"alert":"status",children:te==="error"?(0,ke.jsxs)(ke.Fragment,{children:[(0,ke.jsx)("p",{className:"dshr-pdf-status-title dshr-pdf-status-error",children:"PDF \u52A0\u8F7D\u5931\u8D25"}),(0,ke.jsx)("p",{className:"dshr-pdf-status-detail",children:Je}),(0,ke.jsx)("button",{type:"button",className:"dshr-pdf-status-retry",onClick:()=>_t(b=>b+1),children:"\u91CD\u65B0\u52A0\u8F7D"})]}):(0,ke.jsxs)(ke.Fragment,{children:[(0,ke.jsx)("span",{className:"dshr-pdf-status-spinner","aria-hidden":"true"}),(0,ke.jsx)("p",{className:"dshr-pdf-status-title",children:"\u6B63\u5728\u52A0\u8F7D PDF\u2026"}),We!==null?(0,ke.jsxs)("p",{className:"dshr-pdf-status-progress",children:[We,"%"]}):null]})})}),lr?(0,ke.jsx)(rc,{page:Ae,source:mt[Ae],rows:e?At.pages[Ae]||[]:(mt[Ae]?.segments||[]).map((b,I)=>({...b,...i?.[Ae]?.segments?.[I]||{},status:i?.[Ae]?.status||"queued",error:i?.[Ae]?.error})),activeId:sr?.page===Ae?sr.id:null,originRef:kr,translation:e?At:{...At,retry:b=>{V.current.delete(b),h?.(b),zr(b)}},onActivate:(b,I)=>Ze(b,I,Ae),onClose:()=>{yn(!0),x?.()}}):null]})]})}pc.displayName="PdfViewer";var gc=pc;var Mr=Ct(require("react"),1);var Sb=require("react"),Pt=require("react/jsx-runtime");function Ca(t,e="i"){let r=[],n=String(t??""),o=/(\*\*[^*]+\*\*|__[^_]+__|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/gu,i=0,a=0;for(let s of n.matchAll(o)){s.index>i&&r.push(n.slice(i,s.index));let l=s[0],d=`${e}-${a++}`;if(l.startsWith("**")||l.startsWith("__"))r.push((0,Pt.jsx)("strong",{children:l.slice(2,-2)},d));else if(l.startsWith("`"))r.push((0,Pt.jsx)("code",{children:l.slice(1,-1)},d));else{let h=/^\[([^\]]+)\]\(([^)\s]+)\)$/u.exec(l);h&&/^https?:\/\//iu.test(h[2])?r.push((0,Pt.jsx)("a",{href:h[2],target:"_blank",rel:"noreferrer noopener",children:h[1]},d)):r.push(l)}i=s.index+l.length}return i<n.length&&r.push(n.slice(i)),r}function mc({text:t}){let e=String(t??"").replace(/\r\n/gu,`
`).split(`
`),r=[],n=[],o=[],i=[],a=null,s=0,l=()=>{if(n.length===0)return;let f=n.join(" ");r.push((0,Pt.jsx)("p",{children:Ca(f,`p${s}`)},`p-${s++}`)),n=[]},d=()=>{o.length!==0&&(r.push((0,Pt.jsx)("ul",{children:o.map((f,p)=>(0,Pt.jsx)("li",{children:Ca(f,`l${s}-${p}`)},`li-${s}-${p}`))},`ul-${s++}`)),o=[])},h=()=>{i.length!==0&&(r.push((0,Pt.jsx)("blockquote",{children:i.map((f,p)=>(0,Pt.jsx)("p",{children:Ca(f,`q${s}-${p}`)},`bqp-${s}-${p}`))},`bq-${s++}`)),i=[])},g=()=>{l(),d(),h()};for(let f of e){let p=f.trimEnd();if(p.trim().startsWith("```")){a===null?(g(),a=[]):(r.push((0,Pt.jsx)("pre",{children:(0,Pt.jsx)("code",{children:a.join(`
`)})},`pre-${s++}`)),a=null);continue}if(a!==null){a.push(f);continue}if(p.trim()===""){g();continue}let S=/^(#{1,4})\s+(.*)$/u.exec(p);if(S){g();let N=`h${Math.min(4,S[1].length)}`;r.push((0,Pt.jsx)(N,{children:Ca(S[2],`h${s}`)},`h-${s++}`));continue}let w=/^\s*>\s?(.*)$/u.exec(p);if(w){l(),d(),i.push(w[1]);continue}let x=/^\s*[-*+]\s+(.*)$/u.exec(p);if(x){g(),o.push(x[1]);continue}let T=/^\s*\d+[.)]\s+(.*)$/u.exec(p);if(T){g(),o.push(T[1]);continue}if(/^\s*([-*_])(?:\s*\1){2,}\s*$/u.test(p)){g(),r.push((0,Pt.jsx)("hr",{},`hr-${s++}`));continue}d(),h(),n.push(p)}return a!==null&&r.push((0,Pt.jsx)("pre",{children:(0,Pt.jsx)("code",{children:a.join(`
`)})},`pre-${s++}`)),g(),(0,Pt.jsx)(Pt.Fragment,{children:r})}var ze=require("react/jsx-runtime"),ef=["\u5E2E\u6211\u68B3\u7406\u8FD9\u6BB5\u8BDD\u7684\u8BBA\u8BC1\u7ED3\u6784","\u89E3\u91CA\u5176\u4E2D\u7684\u4E13\u4E1A\u672F\u8BED\u548C\u80CC\u666F","\u7FFB\u8BD1\u5E76\u6307\u51FA\u5173\u952E\u8BED\u6CD5","\u8FD9\u6BB5\u548C\u6211\u7684\u7814\u7A76\u95EE\u9898\u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F"];function bc({open:t,onClose:e,seed:r,onGoogle:n,onToast:o}){let[i,a]=Mr.default.useState([]),[s,l]=Mr.default.useState(""),[d,h]=Mr.default.useState(!1),[g,f]=Mr.default.useState(""),p=Mr.default.useRef(null),S=Mr.default.useRef(null),w=r?.id??"",x=r?.text??"",T=r?.context??"",M=Mr.default.useCallback(()=>{let E=S.current;E&&requestAnimationFrame(()=>{E.scrollTop=E.scrollHeight})},[]),N=Mr.default.useCallback(async(E,{replace:L=!1,history:P}={})=>{let m=String(E??"").trim();if(!m||d)return;p.current?.abort();let _=new AbortController;p.current=_;let F={role:"user",content:m},z=L?[F]:[...P??i,F];a([...z,{role:"assistant",content:""}]),h(!0),f(""),M();let se="";try{await wi({messages:z.map(de=>({role:de.role,content:de.content})),selection:x,context:T,signal:_.signal},{onDelta:de=>{se+=de,a(q=>{if(q.length===0)return q;let me=[...q],X=me[me.length-1];return X?.role!=="assistant"?q:(me[me.length-1]={...X,content:se},me)}),M()}}),se.trim()||(f("AI \u6CA1\u6709\u8FD4\u56DE\u5185\u5BB9\uFF0C\u8BF7\u91CD\u8BD5\u6216\u6362\u4E00\u79CD\u95EE\u6CD5\u3002"),a(de=>de.filter((q,me)=>!(me===de.length-1&&q.role==="assistant"&&!q.content))))}catch(de){if(An(de))return;f(de?.message||"AI \u8BF7\u6C42\u5931\u8D25\u3002"),a(q=>{let me=q[q.length-1];return me?.role==="assistant"&&!me.content?q.slice(0,-1):q})}finally{h(!1)}},[d,T,i,M,x]);if(Mr.default.useEffect(()=>{if(!t||!w)return;p.current?.abort(),a([]),f(""),l("");let E="\u8BF7\u89E3\u91CA\u8FD9\u6BB5\u5185\u5BB9\u3002";a([{role:"user",content:E},{role:"assistant",content:""}]),h(!0);let L=new AbortController;p.current=L;let P="";return wi({messages:[{role:"user",content:E}],selection:x,context:T,signal:L.signal},{onDelta:m=>{P+=m,a(_=>{if(_.length===0)return _;let F=[..._],V=F[F.length-1];return V?.role!=="assistant"?_:(F[F.length-1]={...V,content:P},F)}),M()}}).catch(m=>{An(m)||f(m?.message||"AI \u8BF7\u6C42\u5931\u8D25\u3002")}).finally(()=>{h(!1),P.trim()||a(m=>m.filter((_,F)=>!(F===m.length-1&&_.role==="assistant"&&!_.content)))}),()=>L.abort()},[t,w]),Mr.default.useEffect(()=>{t||p.current?.abort()},[t]),!t)return null;let R=E=>{E.preventDefault();let L=s.trim();!L||d||(l(""),N(L))},C=E=>{let L=x||i.find(P=>P.role==="user")?.content||"";if(!L.trim()){o?.("\u5148\u5728\u6B63\u6587\u91CC\u9009\u4E2D\u4E00\u6BB5\u6587\u5B57\uFF0C\u518D\u641C\u7D22\u3002");return}n?.(L,E?"scholar":"web")};return(0,ze.jsxs)("aside",{className:"dshr-ai","aria-label":"AI \u9605\u8BFB\u52A9\u624B",children:[(0,ze.jsxs)("div",{className:"dshr-ai__head",children:[(0,ze.jsx)(hn,{size:17}),(0,ze.jsx)("strong",{children:"AI \u9605\u8BFB\u52A9\u624B"}),(0,ze.jsx)("span",{className:"dshr-chip dshr-chip--brand",children:"DSH \u9ED8\u8BA4\u6A21\u578B"}),(0,ze.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:e,"aria-label":"\u5173\u95ED AI \u9762\u677F",title:"\u5173\u95ED",children:(0,ze.jsx)(hr,{size:16})})]}),(0,ze.jsxs)("div",{className:"dshr-ai__body",ref:S,children:[i.length===0?(0,ze.jsxs)("div",{className:"dshr-ai__welcome",children:[(0,ze.jsx)("strong",{children:"\u9009\u4E2D\u6B63\u6587\u4E2D\u7684\u4EFB\u610F\u53E5\u5B50"}),"\uFF0C\u6211\u4F1A\u89E3\u91CA\u542B\u4E49\u3001\u672F\u8BED\u548C\u8BED\u6CD5\uFF1B\u4E5F\u53EF\u4EE5\u76F4\u63A5\u8FFD\u95EE\uFF0C\u6216\u8DF3\u8F6C Google / Google \u5B66\u672F\u7EE7\u7EED\u67E5\u3002",(0,ze.jsx)("div",{className:"dshr-ai__suggestions",children:ef.map(E=>(0,ze.jsx)("button",{type:"button",onClick:()=>{N(E)},disabled:d,children:E},E))})]}):i.map((E,L)=>(0,ze.jsxs)("div",{className:`dshr-ai__msg${E.role==="user"?" dshr-ai__msg--user":""}`,children:[(0,ze.jsx)("span",{className:"dshr-ai__role",children:E.role==="user"?"\u4F60":"\u9605\u8BFB\u52A9\u624B"}),E.role==="assistant"?E.content?(0,ze.jsx)(mc,{text:E.content}):d&&L===i.length-1?(0,ze.jsxs)("span",{className:"dshr-translation__loading",children:[(0,ze.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u601D\u8003\u2026"]}):null:E.content]},L)),g?(0,ze.jsxs)("div",{className:"dshr-ai__error",children:[g,(0,ze.jsx)("div",{style:{marginTop:6},children:(0,ze.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>{N(i.find(E=>E.role==="user")?.content||"\u8BF7\u91CD\u65B0\u89E3\u91CA\u8FD9\u6BB5\u5185\u5BB9\u3002",{replace:!0,history:[]})},children:[(0,ze.jsx)(el,{size:13})," \u91CD\u65B0\u56DE\u7B54"]})})]}):null]}),(0,ze.jsx)("div",{className:"dshr-ai__foot",children:(0,ze.jsxs)("form",{onSubmit:R,children:[(0,ze.jsx)("textarea",{className:"dshr-ai__input",placeholder:"\u8FFD\u95EE\uFF1A\u8FD9\u6BB5\u7684\u8BBA\u8BC1\u6709\u4EC0\u4E48\u95EE\u9898\uFF1F\uFF0F\u672F\u8BED\u662F\u4EC0\u4E48\u610F\u601D\uFF1F",value:s,onChange:E=>l(E.target.value),onKeyDown:E=>{E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),N(s),l(""))},disabled:d,"aria-label":"\u5411 AI \u8FFD\u95EE"}),(0,ze.jsxs)("div",{className:"dshr-ai__actions",children:[(0,ze.jsx)("span",{className:"dshr-ai__hint",children:"Enter \u53D1\u9001 \xB7 Shift+Enter \u6362\u884C"}),(0,ze.jsxs)("div",{style:{display:"flex",gap:5},children:[(0,ze.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>C(!1),title:"\u7528 Google \u641C\u7D22\u9009\u4E2D\u7684\u6587\u5B57",children:[(0,ze.jsx)(oa,{size:13})," Google"]}),(0,ze.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>C(!0),title:"\u7528 Google \u5B66\u672F\u641C\u7D22\u9009\u4E2D\u7684\u6587\u5B57",children:[(0,ze.jsx)(aa,{size:13})," \u5B66\u672F"]}),(0,ze.jsxs)("button",{type:"submit",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:d||!s.trim(),children:[d?(0,ze.jsx)("span",{className:"dshr-spinner"}):(0,ze.jsx)(tl,{size:13})," \u53D1\u9001"]})]})]})]})})]})}var Rb=require("react");var qe=require("react/jsx-runtime");function xc({selection:t,translation:e,onTranslate:r,onAnnotate:n,onExplain:o,onGoogle:i,onCopy:a,onClose:s,onRetry:l}){if(!t?.text?.trim())return null;let d=t.rect,g=476/2,f=typeof window<"u"?window.innerWidth:1200,p=typeof window<"u"?window.innerHeight:800,S=d?d.left+d.width/2:f/2,w=Math.max(g+10,Math.min(f-g-10,S)),x=d&&d.top>70?d.top-46:Math.min(p-190,(d?.bottom??0)+10),T=Math.min(p-180,x+42);return(0,qe.jsxs)(qe.Fragment,{children:[(0,qe.jsxs)("div",{className:"dshr-selection",style:{left:w,top:Math.max(8,x)},role:"toolbar","aria-label":"\u9009\u4E2D\u6587\u5B57\u64CD\u4F5C",onMouseDown:M=>M.preventDefault(),children:[(0,qe.jsxs)("button",{type:"button",className:"dshr-selection__btn dshr-selection__btn--accent",onClick:()=>r(t),children:[(0,qe.jsx)(Kn,{size:14})," \u7FFB\u8BD1"]}),(0,qe.jsxs)("button",{type:"button",className:"dshr-selection__btn dshr-selection__btn--mark",onClick:()=>n(t),title:"\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u3001\u4FBF\u7B7E\u6216\u5907\u6CE8",children:[(0,qe.jsx)(ia,{size:14})," \u6807\u8BB0"]}),(0,qe.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>o(t),children:[(0,qe.jsx)(hn,{size:14})," AI \u89E3\u91CA"]}),(0,qe.jsx)("span",{className:"dshr-selection__sep"}),(0,qe.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>i(t.text,"web"),title:"\u7528 Google \u641C\u7D22",children:[(0,qe.jsx)(oa,{size:14})," Google"]}),(0,qe.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>i(t.text,"scholar"),title:"\u7528 Google \u5B66\u672F\u641C\u7D22",children:[(0,qe.jsx)(aa,{size:14})," \u5B66\u672F"]}),(0,qe.jsx)("span",{className:"dshr-selection__sep"}),(0,qe.jsx)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>a(t.text),title:"\u590D\u5236\u9009\u4E2D\u6587\u5B57",children:(0,qe.jsx)(Qs,{size:14})}),(0,qe.jsx)("button",{type:"button",className:"dshr-selection__btn",onClick:s,title:"\u5173\u95ED","aria-label":"\u5173\u95ED\u9009\u4E2D\u6587\u5B57\u5DE5\u5177\u680F",children:(0,qe.jsx)(hr,{size:13})})]}),e?(0,qe.jsxs)("div",{className:"dshr-selection__pop",style:{left:w,top:T},onMouseDown:M=>M.preventDefault(),children:[(0,qe.jsxs)("div",{className:"dshr-selection__pop-head",children:[(0,qe.jsx)("span",{children:"\u4E2D\u6587\u8BD1\u6587"}),(0,qe.jsx)("button",{type:"button",onClick:s,"aria-label":"\u5173\u95ED\u8BD1\u6587",children:(0,qe.jsx)(hr,{size:12})})]}),e.status==="loading"?(0,qe.jsxs)("span",{className:"dshr-translation__loading",children:[(0,qe.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u7FFB\u8BD1\u9009\u4E2D\u5185\u5BB9\u2026"]}):e.status==="error"?(0,qe.jsxs)("span",{style:{color:"var(--dshr-error)"},children:[e.error||"\u7FFB\u8BD1\u5931\u8D25\u3002"," ",(0,qe.jsx)("button",{type:"button",className:"dshr-translation__retry",onClick:l,children:"\u91CD\u8BD5"})]}):String(e.zh||"").split(/\n+/u).filter(Boolean).map((M,N)=>(0,qe.jsx)("p",{style:{margin:N===0?0:"8px 0 0"},children:M},N))]}):null]})}var Ia=Ct(require("react"),1);var pe=require("react/jsx-runtime");function vc({settings:t,onChange:e,onClose:r,onClearLibrary:n,onOpenAppearance:o}){let[i,a]=Ia.default.useState(!1);Ia.default.useEffect(()=>{let l=d=>{d.key==="Escape"&&r()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[r]);let s=l=>e({...t,...l});return(0,pe.jsx)("div",{className:"dshr-modal-mask",onMouseDown:l=>{l.target===l.currentTarget&&r()},children:(0,pe.jsxs)("div",{className:"dshr-modal",role:"dialog","aria-modal":"true","aria-label":"\u9605\u8BFB\u8BBE\u7F6E",children:[(0,pe.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:12},children:[(0,pe.jsxs)("div",{style:{flex:1},children:[(0,pe.jsx)("h3",{children:"\u9605\u8BFB\u8BBE\u7F6E"}),(0,pe.jsx)("p",{children:"\u8BBE\u7F6E\u53EA\u4FDD\u5B58\u5728\u672C\u673A\uFF0C\u4E0D\u5F71\u54CD DSH \u7684\u5176\u5B83\u63D2\u4EF6\u3002"})]}),(0,pe.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:r,"aria-label":"\u5173\u95ED\u8BBE\u7F6E",children:(0,pe.jsx)(hr,{size:16})})]}),(0,pe.jsxs)("div",{className:"dshr-settings-row",children:[(0,pe.jsxs)("div",{children:[(0,pe.jsx)("div",{className:"dshr-settings-row__title",children:"\u5B57\u4F53\u3001\u80CC\u666F\u4E0E\u5E03\u5C40"}),(0,pe.jsx)("div",{className:"dshr-settings-row__hint",children:"\u5B57\u4F53\u3001\u5B57\u91CD\u3001\u5B57\u53F7\u3001\u884C\u8DDD\u3001\u9605\u8BFB\u5BBD\u5EA6\u3001\u76EE\u5F55\u5BBD\u5EA6\u3001\u4EAE\u5EA6\u3001\u80CC\u666F\u989C\u8272\u4E0E\u81EA\u5B9A\u4E49\u80CC\u666F\u56FE\u7247\u3002"})]}),(0,pe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:o,children:[(0,pe.jsx)(sa,{size:14})," \u6253\u5F00\u5916\u89C2\u9762\u677F"]})]}),(0,pe.jsxs)("div",{className:"dshr-settings-row",children:[(0,pe.jsxs)("div",{children:[(0,pe.jsx)("div",{className:"dshr-settings-row__title",children:"\u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1"}),(0,pe.jsx)("div",{className:"dshr-settings-row__hint",children:"\u6EDA\u52A8\u5230\u5916\u6587\u6BB5\u843D\u540E\u81EA\u52A8\u7FFB\u8BD1\u6210\u4E2D\u6587\uFF0C\u8BD1\u6587\u663E\u793A\u5728\u539F\u6587\u4E0B\u65B9\u3002"})]}),(0,pe.jsxs)("button",{type:"button",className:"dshr-switch",role:"switch","aria-checked":t.autoTranslate,onClick:()=>s({autoTranslate:!t.autoTranslate}),children:[(0,pe.jsx)("span",{className:"dshr-switch__track"}),t.autoTranslate?"\u5F00\u542F":"\u5173\u95ED"]})]}),(0,pe.jsxs)("div",{className:"dshr-settings-row",children:[(0,pe.jsxs)("div",{children:[(0,pe.jsx)("div",{className:"dshr-settings-row__title",children:"\u6B63\u6587\u5B57\u53F7"}),(0,pe.jsxs)("div",{className:"dshr-settings-row__hint",children:[t.fontSize,"px \xB7 \u9002\u5408\u957F\u7BC7\u9605\u8BFB\u7684\u5B57\u53F7"]})]}),(0,pe.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:5},children:[(0,pe.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--outline",onClick:()=>s({fontSize:Math.max(14,t.fontSize-1)}),"aria-label":"\u51CF\u5C0F\u5B57\u53F7",children:(0,pe.jsx)(Js,{size:15})}),(0,pe.jsxs)("span",{className:"dshr-chip",style:{minWidth:46,justifyContent:"center"},children:[t.fontSize,"px"]}),(0,pe.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--outline",onClick:()=>s({fontSize:Math.min(26,t.fontSize+1)}),"aria-label":"\u589E\u5927\u5B57\u53F7",children:(0,pe.jsx)(na,{size:15})})]})]}),(0,pe.jsxs)("div",{className:"dshr-settings-row",children:[(0,pe.jsxs)("div",{children:[(0,pe.jsx)("div",{className:"dshr-settings-row__title",children:"\u884C\u8DDD"}),(0,pe.jsxs)("div",{className:"dshr-settings-row__hint",children:["\u5F53\u524D ",t.lineHeight.toFixed(2)]})]}),(0,pe.jsx)("input",{type:"range",min:"1.45",max:"2.2",step:"0.05",value:t.lineHeight,onChange:l=>s({lineHeight:Number(l.target.value)}),"aria-label":"\u884C\u8DDD"})]}),(0,pe.jsxs)("div",{className:"dshr-settings-row",children:[(0,pe.jsxs)("div",{children:[(0,pe.jsx)("div",{className:"dshr-settings-row__title",children:"\u7FFB\u8BD1\u4E0E AI"}),(0,pe.jsx)("div",{className:"dshr-settings-row__hint",children:"\u4F7F\u7528 DSH \u5F53\u524D\u9ED8\u8BA4\u6A21\u578B\uFF1B\u7FFB\u8BD1\u53EA\u53D1\u9001\u5F53\u524D\u6BB5\u843D\u6216\u9009\u4E2D\u6587\u5B57\uFF0C\u4E0D\u53D1\u9001\u6574\u672C\u4E66\u3002"})]}),(0,pe.jsx)("span",{className:"dshr-chip dshr-chip--brand",children:"DSH \u9ED8\u8BA4\u6A21\u578B"})]}),(0,pe.jsxs)("div",{className:"dshr-settings-row dshr-settings-row--danger",children:[(0,pe.jsxs)("div",{children:[(0,pe.jsx)("div",{className:"dshr-settings-row__title",children:"\u6E05\u7A7A\u672C\u5730\u4E66\u67B6"}),(0,pe.jsx)("div",{className:"dshr-settings-row__hint",children:"\u5220\u9664\u5DF2\u5BFC\u5165\u7684\u6240\u6709\u6587\u6863\u3001\u6279\u6CE8\u548C\u9605\u8BFB\u8FDB\u5EA6\uFF0C\u65E0\u6CD5\u64A4\u9500\u3002"})]}),i?(0,pe.jsxs)("div",{style:{display:"flex",gap:6},children:[(0,pe.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm",onClick:()=>a(!1),children:"\u53D6\u6D88"}),(0,pe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--danger",onClick:()=>{n(),a(!1)},children:[(0,pe.jsx)(Yn,{size:13})," \u786E\u8BA4\u6E05\u7A7A"]})]}):(0,pe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--danger",onClick:()=>a(!0),children:[(0,pe.jsx)(Yn,{size:13})," \u6E05\u7A7A"]})]})]})})}function yc({book:t,onCancel:e,onConfirm:r}){return Ia.default.useEffect(()=>{let n=o=>{o.key==="Escape"&&e()};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[e]),(0,pe.jsx)("div",{className:"dshr-modal-mask",onMouseDown:n=>{n.target===n.currentTarget&&e()},children:(0,pe.jsxs)("div",{className:"dshr-modal",role:"dialog","aria-modal":"true","aria-label":"\u5220\u9664\u6587\u6863",children:[(0,pe.jsx)("h3",{children:"\u4ECE\u4E66\u67B6\u5220\u9664\uFF1F"}),(0,pe.jsxs)("p",{children:["\u300A",t?.title||"\u672A\u547D\u540D\u6587\u6863","\u300B\u53CA\u5176\u9605\u8BFB\u8FDB\u5EA6\u4F1A\u4ECE\u672C\u673A\u5220\u9664\u3002\u539F\u59CB\u6587\u4EF6\u4E0D\u53D7\u5F71\u54CD\u3002"]}),(0,pe.jsxs)("div",{className:"dshr-modal__actions",children:[(0,pe.jsx)("button",{type:"button",className:"dshr-btn",onClick:e,children:"\u53D6\u6D88"}),(0,pe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--danger",onClick:r,children:[(0,pe.jsx)(Yn,{size:14})," \u5220\u9664"]})]})]})})}function wc({message:t}){return t?(0,pe.jsx)("div",{className:"dshr-toast",role:"status",children:t}):null}var no=Ct(require("react"),1);var ot=require("react/jsx-runtime"),tf=[{label:"Project Gutenberg",hint:"\u4E03\u4E07\u672C\u516C\u7248\u4E66",href:"https://www.gutenberg.org/"},{label:"Standard Ebooks",hint:"\u7CBE\u6821\u516C\u7248\u4E66",href:"https://standardebooks.org/"},{label:"arXiv",hint:"\u5F00\u653E\u83B7\u53D6\u8BBA\u6587",href:"https://arxiv.org/"},{label:"Open Library",hint:"\u5F00\u653E\u56FE\u4E66\u76EE\u5F55",href:"https://openlibrary.org/"},{label:"Internet Archive",hint:"\u516C\u7248\u4E0E\u5F00\u653E\u9986\u85CF",href:"https://archive.org/"},{label:"Wikisource",hint:"\u516C\u7248\u6587\u732E",href:"https://zh.wikisource.org/"}];function kc({open:t,busy:e,onClose:r,onSubmit:n}){let[o,i]=no.default.useState(""),[a,s]=no.default.useState(""),l=no.default.useRef(null);return no.default.useEffect(()=>{t&&(s(""),window.setTimeout(()=>l.current?.focus(),30))},[t]),no.default.useEffect(()=>{if(!t)return;let h=g=>{g.key==="Escape"&&!e&&r()};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[t,e,r]),t?(0,ot.jsx)("div",{className:"dshr-modal-mask",onMouseDown:h=>{h.target===h.currentTarget&&!e&&r()},children:(0,ot.jsxs)("div",{className:"dshr-modal dshr-online-modal",role:"dialog","aria-modal":"true","aria-label":"\u4ECE\u516C\u5F00\u6765\u6E90\u5BFC\u5165",children:[(0,ot.jsxs)("div",{className:"dshr-online-modal__head",children:[(0,ot.jsxs)("div",{children:[(0,ot.jsxs)("h3",{children:[(0,ot.jsx)(la,{size:17})," \u4ECE\u516C\u5F00\u6765\u6E90\u5BFC\u5165"]}),(0,ot.jsx)("p",{children:"\u7C98\u8D34\u7535\u5B50\u4E66\u6587\u4EF6\u7684\u76F4\u94FE\uFF0C\u4E0B\u8F7D\u540E\u81EA\u52A8\u52A0\u5165\u4E66\u67B6\u5E76\u6253\u5F00\u3002"})]}),(0,ot.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:r,disabled:e,"aria-label":"\u5173\u95ED\u5728\u7EBF\u5BFC\u5165",children:(0,ot.jsx)(hr,{size:16})})]}),(0,ot.jsxs)("div",{className:"dshr-online-modal__notice",children:[(0,ot.jsx)("strong",{children:"\u7248\u6743\u63D0\u793A"}),(0,ot.jsx)("span",{children:"\u4EC5\u652F\u6301\u4F60\u786E\u8BA4\u6709\u6743\u4E0B\u8F7D\u7684\u516C\u5F00\u7248\u6743 / \u5F00\u653E\u83B7\u53D6\u8D44\u6E90\u3002\u672C\u529F\u80FD\u4E0D\u5185\u7F6E Z-Library \u7B49\u7248\u6743\u4E0D\u660E\u7684\u4E66\u6E90\uFF0C\u4E5F\u4E0D\u4F1A\u6293\u53D6\u767B\u5F55\u540E\u7684\u79C1\u5BC6\u9875\u9762\u3002"})]}),(0,ot.jsxs)("form",{className:"dshr-online-modal__form",onSubmit:h=>{h.preventDefault();let g=o.trim();if(!/^https:\/\//iu.test(g)){s("\u8BF7\u8F93\u5165\u4EE5 https:// \u5F00\u5934\u7684\u7535\u5B50\u4E66\u6587\u4EF6\u76F4\u94FE\u3002");return}s(""),n(g)},children:[(0,ot.jsx)("label",{htmlFor:"dshr-online-url",children:"\u6587\u4EF6\u76F4\u94FE"}),(0,ot.jsxs)("div",{className:"dshr-online-modal__input",children:[(0,ot.jsx)(al,{size:15}),(0,ot.jsx)("input",{ref:l,id:"dshr-online-url",type:"url",value:o,onChange:h=>{i(h.target.value),s("")},placeholder:"https://www.gutenberg.org/ebooks/11.epub3.images",spellCheck:"false",autoComplete:"off",disabled:e})]}),a?(0,ot.jsx)("p",{className:"dshr-online-modal__error",children:a}):null,(0,ot.jsx)("p",{className:"dshr-online-modal__hint",children:"\u652F\u6301 PDF / EPUB / MOBI / AZW3 / TXT / Markdown / HTML \u76F4\u94FE\uFF1B\u5355\u4E2A\u6587\u4EF6\u6700\u5927 120 MB\u3002 \u53E4\u767B\u5821\u3001Standard Ebooks\u3001arXiv\u3001Open Library\u3001Internet Archive \u7B49\u7AD9\u70B9\u53EF\u6B63\u5E38\u4F7F\u7528\u3002"}),(0,ot.jsxs)("div",{className:"dshr-online-modal__actions",children:[(0,ot.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--ghost",onClick:r,disabled:e,children:"\u53D6\u6D88"}),(0,ot.jsx)("button",{type:"submit",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:e||o.trim()==="",children:e?"\u6B63\u5728\u4E0B\u8F7D\u2026":"\u4E0B\u8F7D\u5E76\u6253\u5F00"})]})]}),(0,ot.jsxs)("div",{className:"dshr-online-modal__sources",children:[(0,ot.jsx)("span",{children:"\u53BB\u54EA\u91CC\u627E\u4E66\uFF1F"}),(0,ot.jsx)("div",{className:"dshr-online-modal__source-list",children:tf.map(h=>(0,ot.jsx)("a",{href:h.href,target:"_blank",rel:"noreferrer",title:h.hint,children:h.label},h.label))})]})]})}):null}var nn=Ct(require("react"),1);var zt=class t{static GetDistanceBetweenTwoPoint(e,r){return e===null||r===null?1/0:Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))}static GetSegmentLength(e){return t.GetDistanceBetweenTwoPoint(e[0],e[1])}static GetAngleBetweenTwoLine(e,r){let n=e[0].y-e[1].y,o=r[0].y-r[1].y,i=e[1].x-e[0].x,a=r[1].x-r[0].x;return Math.acos((n*o+i*a)/(Math.sqrt(n*n+i*i)*Math.sqrt(o*o+a*a)))}static PointInRect(e,r){return r===null?null:r.x>=e.left&&r.x<=e.width+e.left&&r.y>=e.top&&r.y<=e.top+e.height?r:null}static GetRotatedPoint(e,r,n){return{x:e.x*Math.cos(n)+e.y*Math.sin(n)+r.x,y:e.y*Math.cos(n)-e.x*Math.sin(n)+r.y}}static LimitPointToCircle(e,r,n){if(t.GetDistanceBetweenTwoPoint(e,n)<=r)return n;let o=e.x,i=e.y,a=n.x,s=n.y,l=Math.sqrt(Math.pow(r,2)*Math.pow(o-a,2)/(Math.pow(o-a,2)+Math.pow(i-s,2)))+o;n.x<0&&(l*=-1);let d=(l-o)*(i-s)/(o-a)+i;return o-a+i===0&&(d=r),{x:l,y:d}}static GetIntersectBetweenTwoSegment(e,r,n){return t.PointInRect(e,t.GetIntersectBeetwenTwoLine(r,n))}static GetIntersectBeetwenTwoLine(e,r){let n=e[0].y-e[1].y,o=r[0].y-r[1].y,i=e[1].x-e[0].x,a=r[1].x-r[0].x,s=e[0].x*e[1].y-e[1].x*e[0].y,l=r[0].x*r[1].y-r[1].x*r[0].y,d=n*l-o*s,h=i*l-a*s,g=-((s*a-l*i)/(n*a-o*i)),f=-((n*l-o*s)/(n*a-o*i));if(isFinite(g)&&isFinite(f))return{x:g,y:f};if(Math.abs(d-h)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(e,r){let n=Math.abs(e.x-r.x),o=Math.abs(e.y-r.y),i=Math.max(n,o),a=[e];function s(l,d,h,g,f){return d>l?l+f*(h/g):d<l?l-f*(h/g):l}for(let l=1;l<=i;l+=1)a.push({x:s(e.x,r.x,n,i,l),y:s(e.y,r.y,o,i,l)});return a}};var Eo=class{constructor(e,r,n,o){this.direction=e;this.corner=r;this.pageWidth=parseInt(n,10),this.pageHeight=parseInt(o,10)}direction;corner;angle;position;rect;topIntersectPoint=null;sideIntersectPoint=null;bottomIntersectPoint=null;pageWidth;pageHeight;calc(e){try{return this.position=this.calcAngleAndPosition(e),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){let e=[],r=!1;return e.push(this.rect.topLeft),e.push(this.topIntersectPoint),this.sideIntersectPoint===null?r=!0:(e.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(r=!1)),e.push(this.bottomIntersectPoint),(r||this.corner==="bottom")&&e.push(this.rect.bottomLeft),e}getBottomClipArea(){let e=[];return e.push(this.topIntersectPoint),this.corner==="top"?e.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&e.push({x:this.pageWidth,y:0}),e.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?zt.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&e.push(this.sideIntersectPoint):this.corner==="top"&&e.push({x:this.pageWidth,y:this.pageHeight}),e.push(this.bottomIntersectPoint),e.push(this.topIntersectPoint),e}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){let e=zt.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?e:Math.PI-e}calcAngleAndPosition(e){let r=e;if(this.updateAngleAndGeometry(r),this.corner==="top"?r=this.checkPositionAtCenterLine(r,{x:0,y:0},{x:0,y:this.pageHeight}):r=this.checkPositionAtCenterLine(r,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(r.x-this.pageWidth)<1&&Math.abs(r.y)<1)throw new Error("Point is too small");return r}updateAngleAndGeometry(e){this.angle=this.calculateAngle(e),this.rect=this.getPageRect(e)}calculateAngle(e){let r=this.pageWidth-e.x+1,n=this.corner==="bottom"?this.pageHeight-e.y:e.y,o=2*Math.acos(r/Math.sqrt(n*n+r*r));n<0&&(o=-o);let i=Math.PI-o;if(!isFinite(o)||i>=0&&i<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(o=-o),o}getPageRect(e){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],e):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],e)}getRectFromBasePoint(e,r){return{topLeft:this.getRotatedPoint(e[0],r),topRight:this.getRotatedPoint(e[1],r),bottomLeft:this.getRotatedPoint(e[2],r),bottomRight:this.getRotatedPoint(e[3],r)}}getRotatedPoint(e,r){return{x:e.x*Math.cos(this.angle)+e.y*Math.sin(this.angle)+r.x,y:e.y*Math.cos(this.angle)-e.x*Math.sin(this.angle)+r.y}}calculateIntersectPoint(e){let r={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=zt.GetIntersectBetweenTwoSegment(r,[e,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=zt.GetIntersectBetweenTwoSegment(r,[e,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=zt.GetIntersectBetweenTwoSegment(r,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=zt.GetIntersectBetweenTwoSegment(r,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=zt.GetIntersectBetweenTwoSegment(r,[e,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=zt.GetIntersectBetweenTwoSegment(r,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(e,r,n){let o=e,i=zt.LimitPointToCircle(r,this.pageWidth,o);o!==i&&(o=i,this.updateAngleAndGeometry(o));let a=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2)),s=this.rect.bottomRight,l=this.rect.topLeft;if(this.corner==="bottom"&&(s=this.rect.topRight,l=this.rect.bottomLeft),s.x<=0){let d=zt.LimitPointToCircle(n,a,l);d!==o&&(o=d,this.updateAngleAndGeometry(o))}return o}getSegmentToShadowLine(){let e=this.getShadowStartPoint(),r=e!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint;return[e,r]}};function _c(t,e){let r=Math.max(1,e-48-56),n=t.filter(i=>Number.isFinite(i.top)&&i.bottom>i.top).toSorted((i,a)=>i.top-a.top),o=[0];for(let i of n)for(;i.bottom>o.at(-1)+48+r+.5;){let a=o.at(-1),s=i.top-48;o.push(s>a+.5?s:a+r)}return o}function nf(t,e){let r=0,n=t.length-1;for(;r<n;){let o=Math.ceil((r+n)/2);t[o]<=e+.5?r=o:n=o-1}return r}function Tc(){let t=[0],e=0;return{get page(){return e+1},get pages(){return t.length},get top(){return t[e]},get starts(){return t},replace(r,n){t=r.length?r:[0],e=nf(t,Math.max(0,n||0))},turn(r){let n=Math.max(0,Math.min(t.length-1,e+Math.sign(r)));return n===e?!1:(e=n,!0)}}}function Sc(t,e){let r=t.getBoundingClientRect(),n=[],o=(s,l)=>{s.height<2||s.width<.1||n.push({top:s.top-r.top+t.scrollTop,bottom:s.bottom-r.top+t.scrollTop,...l})},i=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let s=i.nextNode();s;s=i.nextNode()){if(!s.nodeValue?.trim()||s.parentElement.closest('[aria-hidden="true"],script,style'))continue;let l=document.createRange();l.selectNodeContents(s);for(let d of l.getClientRects())o(d,{node:s})}for(let s of e.querySelectorAll("img,svg,hr,video,canvas"))o(s.getBoundingClientRect(),{element:s,atomic:!0});n.sort((s,l)=>s.top-l.top);let a=[];for(let s of n){let l=a.at(-1),d=l&&Math.min(l.bottom,s.bottom)-Math.max(l.top,s.top);l&&!l.atomic&&!s.atomic&&d>Math.min(l.bottom-l.top,s.bottom-s.top)*.5?l.bottom=Math.max(l.bottom,s.bottom):a.push({...s})}return a}function Li(t,e,r){let n=e+48,o=t.find(w=>w.bottom>n+.5)||t.at(-1);if(!o)return null;let i=o.element||o.node?.parentElement.closest(".dshr-block__body,.dshr-translation,.dshr-chapter__kicker")||o.node?.parentElement,a=r.getBoundingClientRect(),s=i?.getBoundingClientRect(),l=s?.height?(n-(s.top-a.top+r.scrollTop))/s.height:0;if(!o.node)return{element:i,ratio:l};let d=document.createRange(),h=1,g=o.node.length;for(;h<g;){let w=h+g>>1;d.setStart(o.node,0),d.setEnd(o.node,w);let x=d.getClientRects(),T=x[x.length-1];(T?T.top-a.top+r.scrollTop:-1/0)<o.top-1?h=w+1:g=w}let f=Math.max(0,h-1),p=f,S=document.createTreeWalker(i,NodeFilter.SHOW_TEXT);for(let w=S.nextNode();w&&w!==o.node;w=S.nextNode())p+=w.length;return{node:o.node,offset:f,textOffset:p,element:i,ratio:l}}function Ec(t,e,r){if(!t)return r;let n=e.getBoundingClientRect();if(!t.node?.isConnected&&t.element?.isConnected&&Number.isFinite(t.textOffset)){let o=t.textOffset,i=document.createTreeWalker(t.element,NodeFilter.SHOW_TEXT);for(let a=i.nextNode();a;a=i.nextNode()){if(o<a.length){t.node=a,t.offset=o;break}o-=a.length}}if(t.node?.isConnected&&e.contains(t.node)&&t.node.length){let o=document.createRange(),i=Math.min(t.offset,t.node.length-1);o.setStart(t.node,i),o.setEnd(t.node,i+1);let a=o.getBoundingClientRect();if(a.height)return a.top-n.top+e.scrollTop-48}if(t.element?.isConnected&&e.contains(t.element)){let o=t.element.getBoundingClientRect();return o.top-n.top+e.scrollTop+Math.max(0,t.ratio)*o.height-48}return r}var Di={slide:250,cover:300,flip:500},of="cubic-bezier(.25,.1,.25,1)",Ac=t=>`polygon(${t.filter(Boolean).map(e=>`${e.x}px ${e.y}px`).join(",")})`,af=0;function Cc(t,e){let r=t.getBoundingClientRect(),n=e.querySelectorAll(".dshr-block,.dshr-chapter__kicker,.dshr-chapter__nav");return[...n.length?n:e.children].map(o=>{let i=o.getBoundingClientRect();return{element:o,top:i.top-r.top+t.scrollTop,bottom:i.bottom-r.top+t.scrollTop,left:i.left-r.left,width:i.width,height:i.height}})}function Ma(t){let e=[t,...t.querySelectorAll("*")],r=new Map,n=`dshr-snapshot-${++af}-`;for(let o of e){o.id&&(r.set(o.id,n+r.size),o.id=r.get(o.id));for(let i of["data-seg-id","data-anno-block","data-anno-id","autofocus"])o.removeAttribute(i)}if(r.size)for(let o of e)for(let i of[...o.attributes]){if(i.name==="id")continue;let a=i.value.replace(/url\(\s*(['"]?)#([^\s)'";]+)\1\s*\)/g,(s,l,d)=>r.has(d)?`url(#${r.get(d)})`:s);(i.name==="href"||i.name==="xlink:href")&&r.has(a.slice(1))&&(a="#"+r.get(a.slice(1))),a!==i.value&&o.setAttribute(i.name,a)}}function Nc(t,e,r,n,o,i){let a=document.createElement("div");a.className="dshr-turn-page";let s=t.getBoundingClientRect(),l=e.getBoundingClientRect(),d=e.cloneNode(!1);Ma(d),Object.assign(d.style,{position:"absolute",left:`${l.left-s.left}px`,top:"0",width:`${l.width}px`,height:"100%",padding:"0",margin:"0"}),a.append(d);let h=new Map([[e,d]]),g=p=>{if(h.has(p))return h.get(p);let S=p.cloneNode(!1);return Ma(S),g(p.parentElement).append(S),h.set(p,S),S};for(let p of r){if(p.bottom<=n+48||p.top>=n+t.clientHeight-o||!p.height)continue;if(p.height>t.clientHeight*8)throw new Error("Snapshot block exceeds viewport budget");let S=document.createTreeWalker(p.element,4294967295);for(let M=p.element;M;M=S.nextNode())if(i.nodes-=1,M.nodeType===3&&(i.text-=M.length),i.nodes<0||i.text<0)throw new Error("Snapshot exceeds DOM budget");let w=p.element.cloneNode(!0);Ma(w),Object.assign(w.style,{position:"absolute",margin:"0",boxSizing:"border-box",left:`${p.left-(l.left-s.left)}px`,top:`${p.top-n}px`,width:`${p.width}px`,height:`${p.height}px`}),g(p.element.parentElement).append(w);let x=[p.element,...p.element.querySelectorAll("*")],T=[w,...w.querySelectorAll("*")];x.forEach((M,N)=>{M.scrollLeft&&(T[N].scrollLeft=M.scrollLeft),M.tagName==="CANVAS"&&(T[N].width=M.width,T[N].height=M.height,T[N].getContext("2d")?.drawImage(M,0,0))})}let f=t.querySelector(":scope > .dshr-anno-layer");if(f){let p=f.cloneNode(!1);Object.assign(p.style,{top:"0",height:"100%"});for(let S of f.children){let w=Number.parseFloat(S.style.top),x=Number.parseFloat(S.style.height)||24;if(w+x<=n+48||w>=n+t.clientHeight-o)continue;if(--i.nodes<0)throw new Error("Snapshot marks exceed DOM budget");let T=S.cloneNode(!0);Ma(T),T.style.top=`${w-n}px`,p.append(T)}a.append(p)}for(let[p,S]of[["top",48],["bottom",o]]){let w=document.createElement("div");w.className=`dshr-turn-mask dshr-turn-mask--${p}`,w.style.height=`${S}px`,a.append(w)}return a}function sf(t,e,r){let n=new Eo(0,"bottom",String(Math.round(t)),String(Math.round(e))),o=Math.max(1e-4,Math.min(.9999,r)),i=Math.min(e*.22,t*.28)*Math.sin(Math.PI*o);if(!n.calc({x:t*(1-2*o),y:e-i-.1}))return null;let a=n.getActiveCorner(),s=n.getAngle(),l=n.getFlippingClipArea().filter(Boolean).map(d=>zt.GetRotatedPoint({x:d.x-a.x,y:d.y-a.y},{x:0,y:0},s));return{reveal:Ac(n.getBottomClipArea()),fold:Ac(l),transform:`translate3d(${a.x}px,${a.y}px,0) rotate(${s}rad)`,shadow:n.getShadowStartPoint(),shadowAngle:n.getShadowAngle()+Math.PI*1.5,strength:Math.sin(Math.PI*o)}}function Ic({reader:t,scroll:e,stage:r,records:n,from:o,to:i,fromBottom:a,toBottom:s,mode:l,direction:d}){let h=Object.hasOwn(Di,l)?l:"slide",g=e.getBoundingClientRect(),f=t.getBoundingClientRect(),p=document.createElement("div");p.className=`dshr-flow-transition is-${h}`,p.dataset.direction=String(d),p.setAttribute("aria-hidden","true"),p.inert=!0,Object.assign(p.style,{left:`${g.left-f.left}px`,top:`${g.top-f.top}px`,width:`${e.clientWidth}px`,height:`${e.clientHeight}px`});let S=window.getComputedStyle(e);for(let _ of Array.from(S))_.startsWith("--dshr-")&&p.style.setProperty(_,S.getPropertyValue(_));let w={nodes:1800,text:64e3},x=Nc(e,r,n,o,a,w),T=Nc(e,r,n,i,s,w);x.dataset.turnPage="old",T.dataset.turnPage="new",p.append(x,T);let M=[],N=0,R,C=!1,E,L=()=>{C=!0,cancelAnimationFrame(N),clearTimeout(R);for(let _ of M)_.cancel();E?.(),p.remove()},P=(_,F)=>{let V=_.animate(F,{duration:Di[h],easing:of,fill:"both"});return V.finished.catch(()=>{}),M.push(V),V};try{if(t.append(p),h==="slide")P(x,[{transform:"translateX(0)"},{transform:`translateX(${-d*100}%)`}]),P(T,[{transform:`translateX(${d*100}%)`},{transform:"translateX(0)"}]);else if(h==="cover"){let _=d>0?T:x,F=d>0?x:T;F.dataset.turnRole="stationary",_.dataset.turnRole="moving",F.style.zIndex="0",_.style.zIndex="1",_.classList.add("has-edge-shadow"),P(_,d>0?[{transform:"translateX(100%)"},{transform:"translateX(0)"}]:[{transform:"translateX(0)"},{transform:"translateX(100%)"}])}else{let _=d>0?x:T,F=d>0?T:x;_.style.zIndex="0",F.style.zIndex="1";let V=document.createElement("div");V.className="dshr-turn-fold";let z=document.createElement("div");z.className="dshr-turn-fold-shadow",F.append(z),p.append(V);let se=P(p,[{opacity:1},{opacity:1}]),de=me=>{let X=d>0?me:1-me;if(X<=0){F.style.clipPath="inset(0 100% 0 0)",V.hidden=!0;return}if(X>=1){F.style.clipPath="none",V.hidden=!0,z.hidden=!0;return}let D=sf(e.clientWidth,e.clientHeight,X);D&&(V.hidden=!1,z.hidden=!1,F.style.clipPath=D.reveal,V.style.clipPath=D.fold,V.style.transform=D.transform,D.shadow&&Object.assign(z.style,{opacity:String(D.strength*.16),transform:`translate3d(${D.shadow.x}px,${D.shadow.y-e.clientHeight}px,0) rotate(${D.shadowAngle}rad)`}))};de(0);let q=()=>{C||(de(se.effect.getComputedTiming().progress??0),N=requestAnimationFrame(q))};N=requestAnimationFrame(q)}}catch(_){throw L(),_}let m=Promise.all(M.map(_=>_.finished.catch(()=>{})));return{overlay:p,width:e.clientWidth,height:e.clientHeight,cancel:L,async play(){try{await Promise.race([m,new Promise(_=>{E=_,R=setTimeout(_,Di[h]+300)})])}finally{L()}}}}var Ft=require("react/jsx-runtime"),Mc='input, textarea, select, [contenteditable="true"]',Rc=".dshr-modal-mask,.dshr-modal,.dshr-appearance-panel,.dshr-anno-panel,.dshr-ai,.dshr-selection,.dshr-online-modal,.dshr-anno-composer,.dshr-pdf-translation-panel",lf=".dshr-topbar,.dshr-toc,.dshr-paged-controls,"+Rc+","+Mc,cf=()=>window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,ao=null;function Pc({enabled:t,animation:e,bookMode:r=!1,bookFrame:n=!1,pdfMode:o=!1,frameTop:i=52,frameLeft:a=0,leftOffset:s,readerKey:l,canPrevChapter:d,canNextChapter:h,onPrevChapter:g,onNextChapter:f}){let[p,S]=nn.default.useState({page:1,pages:1}),[w,x]=nn.default.useState(!1),[T,M]=nn.default.useState({top:48,bottom:56}),[N,R]=nn.default.useState(null),C=nn.default.useRef(null),E=nn.default.useRef(null),L=nn.default.useRef({});if(L.current={canPrevChapter:d,canNextChapter:h,onPrevChapter:g,onNextChapter:f,animation:e},nn.default.useEffect(()=>{if(!t)return;let V=C.current?.closest(".dshr-reader"),z=V?.querySelector(".dshr-content,.dshr-pdf-scroll");if(!z)return;let se=z.classList.contains("dshr-pdf-scroll"),de=z.querySelector(".dshr-content__inner"),q=Tc(),me={scrollBehavior:z.style.scrollBehavior,overflowAnchor:z.style.overflowAnchor};z.style.scrollBehavior="auto",z.style.overflowAnchor="none",z.classList.add("dshr-paged-scroll");let X=!1,D=!0,he=!1,$=0,re=0,ne=0,ye=0,Q=0,Be=-1/0,$e=[],Pe=null,ct=[],Oe=null,ut=[],u=!se&&de?document.createElement("div"):null;u&&(u.className="dshr-page-tail",u.setAttribute("aria-hidden","true"),z.append(u)),z.dataset.readerNavigation="0",x(!1),M({top:48,bottom:56});let c=()=>{if(X)return;z.dataset.readerPage=String(q.page),z.dataset.readerPages=String(q.pages),z.dataset.readerTarget=String(q.top),S(ce=>ce.page===q.page&&ce.pages===q.pages?ce:{page:q.page,pages:q.pages});let J=A(q.top);M(ce=>ce.bottom===J?ce:{top:48,bottom:J})},A=J=>{let ce=J+z.clientHeight-56,Ce=$e.find(Fe=>Fe.top<ce-.5&&Fe.bottom>ce+.5&&Fe.bottom-Fe.top<=z.clientHeight-48-56&&Fe.top>J+48);return Ce?Math.max(56,z.clientHeight-(Ce.top-J)):56},v=()=>{Math.abs(z.scrollTop-q.top)>.5&&(z.scrollTop=q.top)},oe=J=>{if(X||se||!de||!z.clientHeight||!z.clientWidth)return;if(he){D=!0;return}let ce=J??Ec(Pe,z,z.scrollTop);$e=Sc(z,de),ut=Cc(z,de);let Ce=_c($e,z.clientHeight);if(u){let Fe=z.scrollHeight-u.offsetHeight,Bt=Math.max(0,Math.ceil(Ce.at(-1)+z.clientHeight-Fe));u.style.height=Bt+"px"}q.replace(Ce,ce),D=!1,v(),Pe=Li($e,q.top,z),c()},ue=J=>{X||se||(D=!0,he&&Oe&&(Oe.width!==z.clientWidth||Oe.height!==z.clientHeight||J?.type==="loadingdone")&&Oe.cancel(),!re&&(re=requestAnimationFrame(()=>{re=0,he||oe()})))},le=()=>{$+=1,Oe?.cancel(),Oe=null,delete z.dataset.readerTurning,V.classList.remove("dshr-is-turning"),he=!1,ct.length=0},be=()=>{Q=0,clearTimeout(ye),x(!1)},Ee=J=>{if(J<0)be(),L.current.canPrevChapter&&L.current.onPrevChapter?.();else if(L.current.canNextChapter){let ce=Date.now();Q&&ce-Q<=700?(be(),L.current.onNextChapter?.()):(Q=ce,x(!0),clearTimeout(ye),ye=setTimeout(be,850))}},Me=async J=>{if(X)return;if(ao=V,J=J>0?1:-1,se){z.dispatchEvent(new CustomEvent("dshr-pdf-page-turn",{detail:J}));return}if(he){ct.length<32&&ct.push(J);return}D&&oe();let ce=q.top;if(!q.turn(J)){Ee(J);return}be(),Pe=Li($e,q.top,z),z.dataset.readerNavigation=String(Number(z.dataset.readerNavigation||0)+1),c(),he=!0;let Ce=++$;z.dataset.readerTurning="true";try{de?.animate&&!cf()&&(Oe=Ic({reader:V,scroll:z,stage:de,records:ut,from:ce,to:q.top,fromBottom:A(ce),toBottom:A(q.top),mode:L.current.animation,direction:J}),V.classList.add("dshr-is-turning")),v(),Oe&&await Oe.play()}catch{}finally{!X&&Ce===$&&(Oe?.cancel(),Oe=null,delete z.dataset.readerTurning,V.classList.remove("dshr-is-turning"),he=!1,D?oe():(v(),c()),ct.length&&Me(ct.shift()))}};E.current=Me;let te=()=>{se||he||ne||(ne=requestAnimationFrame(()=>{ne=0,!X&&!he&&v()}))},je=J=>{if(se||!de)return;J.preventDefault(),le();let ce=J.detail||{},Ce=Number(ce.top)||0;ce.ratio!=null&&(Ce=Number(ce.ratio)*Math.max(0,z.scrollHeight-z.clientHeight)),ce.element&&de.contains(ce.element)&&(Ce=ce.element.getBoundingClientRect().top-z.getBoundingClientRect().top+z.scrollTop-48),z.dataset.readerNavigation=String(Number(z.dataset.readerNavigation||0)+1),Pe=null,oe(Math.max(0,Ce))},Je=J=>{if(J.target instanceof Element&&J.target.closest(lf)||J.ctrlKey||J.metaKey||Math.abs(J.deltaY)<8&&Math.abs(J.deltaX)<8)return;J.preventDefault();let ce=performance.now(),Ce=ce-Be;Be=ce,Ce>=220&&Me(J.deltaY>0||J.deltaX>0?1:-1)},et=J=>{if(J.defaultPrevented||J.repeat||J.ctrlKey||J.metaKey||J.altKey||!z.isConnected||J.target instanceof Element&&J.target.closest(Mc+","+Rc))return;let ce=J.target instanceof Element&&J.target.closest(".dshr-root"),Ce=J.target instanceof Element&&J.target.closest(".dshr-reader");if(Ce&&Ce!==V||ce&&!ce.contains(V)||!ce&&(ao?.isConnected?ao!==V:[...document.querySelectorAll(".dshr-reader")].find(Jr=>Jr.getBoundingClientRect().height>0)!==V))return;let Fe=window.getSelection?.();if(Fe&&!Fe.isCollapsed)return;let Bt=["ArrowDown","ArrowRight","PageDown"," "].includes(J.key),Ot=["ArrowUp","ArrowLeft","PageUp"].includes(J.key);!Bt&&!Ot||(J.preventDefault(),Me(Bt?1:-1))},We=J=>{let{page:ce,pages:Ce}=J.detail||{};Number.isFinite(ce)&&ce>=1&&Number.isFinite(Ce)&&Ce>=1&&S({page:ce,pages:Ce})},De=J=>{Me(Number(J.detail)>0?1:-1)},ge=()=>{ao=V};V.addEventListener("pointerdown",ge),z.addEventListener("wheel",Je,{passive:!1}),z.addEventListener("scroll",te,{passive:!0}),z.addEventListener("dshr-flow-navigate",je),z.addEventListener("dshr-page-turn",De),z.addEventListener("dshr-pdf-page-state",We),window.addEventListener("keydown",et);let He,Ye,tt,xt=()=>{if(X)return;let J=z.getBoundingClientRect(),ce=V.getBoundingClientRect(),Ce={right:Math.max(0,ce.right-J.right),center:J.left-ce.left+J.width/2,top:J.top-ce.top+J.height/2,bottom:Math.max(0,ce.bottom-J.bottom)};R(Fe=>Fe&&Object.keys(Ce).every(Bt=>Math.abs(Fe[Bt]-Ce[Bt])<.5)?Fe:Ce)};if(xt(),typeof ResizeObserver=="function"&&(tt=new ResizeObserver(xt),tt.observe(z),tt.observe(V)),se){let J=Number(z.dataset.pdfPage),ce=Number(z.dataset.pdfPages);J>0&&ce>0&&S({page:J,pages:ce})}else oe(z.scrollTop),typeof ResizeObserver=="function"&&(He=new ResizeObserver(ue),He.observe(z),He.observe(de)),typeof MutationObserver=="function"&&(Ye=new MutationObserver(ue),Ye.observe(de,{subtree:!0,childList:!0,characterData:!0})),de.addEventListener("load",ue,!0),document.fonts?.addEventListener("loadingdone",ue),document.fonts?.ready.then(ue);return()=>{X=!0,le(),clearTimeout(ye),cancelAnimationFrame(re),cancelAnimationFrame(ne),He?.disconnect(),tt?.disconnect(),Ye?.disconnect(),de?.removeEventListener("load",ue,!0),document.fonts?.removeEventListener("loadingdone",ue),z.removeEventListener("wheel",Je),z.removeEventListener("scroll",te),z.removeEventListener("dshr-flow-navigate",je),z.removeEventListener("dshr-page-turn",De),z.removeEventListener("dshr-pdf-page-state",We),window.removeEventListener("keydown",et),V.removeEventListener("pointerdown",ge),ao===V&&(ao=null),z.classList.remove("dshr-paged-scroll"),Object.assign(z.style,me);for(let J of["readerPage","readerPages","readerTarget","readerNavigation","readerTurning"])delete z.dataset[J];u?.remove(),E.current=null}},[t,r,l]),!t)return null;let{page:P,pages:m}=p,_=P<=1&&!d,F=P>=m&&!h&&!(o&&m<=1);return(0,Ft.jsxs)("div",{ref:C,className:`dshr-paged-controls${r?" is-book":""}${n?" has-book-frame":""}`,style:{"--dshr-paged-left":`${Math.max(10,Number(s)||10)}px`,...N?{"--dshr-paged-right":`${N.right+12}px`,"--dshr-paged-center":`${N.center}px`,"--dshr-paged-top":`${N.top}px`,"--dshr-paged-bottom":`${N.bottom+14}px`}:{},"--dshr-book-frame-top":`${Math.max(0,Number(i)||0)}px`,"--dshr-book-frame-left":`${Math.max(0,Number(a)||0)}px`,"--dshr-book-top-cover":`${T.top}px`,"--dshr-book-bottom-cover":`${T.bottom}px`},"aria-live":"polite",children:[n?(0,Ft.jsxs)(Ft.Fragment,{children:[(0,Ft.jsx)("div",{className:"dshr-book-mask dshr-book-mask--top","aria-hidden":"true"}),(0,Ft.jsx)("div",{className:"dshr-book-mask dshr-book-mask--bottom","aria-hidden":"true"})]}):null,(0,Ft.jsx)("button",{type:"button",className:"dshr-paged-btn dshr-paged-prev",onClick:()=>{_||E.current?.(-1)},disabled:_,title:"\u4E0A\u4E00\u9875\uFF08\u2190 / \u2191 / PageUp\uFF09","aria-label":"\u4E0A\u4E00\u9875",children:(0,Ft.jsx)(ea,{size:20})}),(0,Ft.jsx)("button",{type:"button",className:"dshr-paged-btn dshr-paged-next",onClick:()=>{F||E.current?.(1)},disabled:F,title:"\u4E0B\u4E00\u9875\uFF08\u2192 / \u2193 / PageDown / \u7A7A\u683C\uFF09","aria-label":"\u4E0B\u4E00\u9875",children:(0,Ft.jsx)(ta,{size:20})}),w?(0,Ft.jsx)("div",{className:"dshr-paged-hint",role:"status",children:"\u518D\u6309\u4E00\u6B21\u8FDB\u5165\u4E0B\u4E00\u7AE0"}):null,(0,Ft.jsxs)("div",{className:"dshr-paged-status",title:"\u7FFB\u9875\u8FDB\u5EA6",children:[(0,Ft.jsx)("b",{children:P}),(0,Ft.jsx)("span",{children:"/"}),(0,Ft.jsx)("em",{children:m})]})]})}var on=Ct(require("react"),1);var Ui=Object.freeze([Object.freeze({id:"serif",label:"\u5B8B\u4F53 / Serif",stack:'"Songti SC", "Noto Serif SC", "Source Han Serif SC", "STSong", "SimSun", "\u5B8B\u4F53", Georgia, "Times New Roman", serif'}),Object.freeze({id:"sans",label:"\u9ED1\u4F53 / Sans",stack:'"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", "Segoe UI", system-ui, -apple-system, sans-serif'}),Object.freeze({id:"kai",label:"\u6977\u4F53 / Kai",stack:'"Kaiti SC", "STKaiti", "KaiTi", "\u6977\u4F53", "Noto Serif SC", "Songti SC", "SimSun", serif'}),Object.freeze({id:"system",label:"\u7CFB\u7EDF\u9ED8\u8BA4",stack:'system-ui, -apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif'})]),Wi=Object.freeze([Object.freeze({value:400,label:"\u5E38\u89C4"}),Object.freeze({value:500,label:"\u4E2D\u7B49"}),Object.freeze({value:600,label:"\u52A0\u7C97"})]),v0=Object.freeze([Object.freeze({id:"scroll",label:"\u6EDA\u52A8"}),Object.freeze({id:"book",label:"\u6A2A\u7248"})]),zc=Object.freeze([Object.freeze({id:"slide",label:"\u6A2A\u5411\u6ED1\u9875",hint:"\u524D\u540E\u4E24\u9875\u8FDE\u7EED\u5E73\u79FB\u8854\u63A5\uFF0C\u4E0D\u6DE1\u51FA\u6B63\u6587"}),Object.freeze({id:"cover",label:"\u4E66\u9875\u8986\u76D6",hint:"\u65B0\u9875\u4ECE\u53F3\u4FA7\u8986\u76D6\u9759\u6B62\u5E95\u9875\uFF0C\u56DE\u7FFB\u65F6\u63ED\u5F00\u5F53\u524D\u9875"}),Object.freeze({id:"flip",label:"3D \u4E66\u9875",hint:"\u4ECE\u53F3\u4E0B\u9875\u89D2\u5411\u4E66\u810A\u6298\u53E0\uFF0C\u5E26\u7EB8\u80CC\u4E0E\u52A8\u6001\u9634\u5F71"})]),Oa=Object.freeze([Object.freeze({id:"paper",label:"\u7EB8\u5F20",bg:"#fbf7ee",ink:"#2b2a26",muted:"#736f64",border:"rgba(43, 42, 38, 0.15)",accent:"#9a6b2f"}),Object.freeze({id:"white",label:"\u767D\u8272",bg:"#ffffff",ink:"#1f2328",muted:"#5c6370",border:"rgba(31, 35, 40, 0.13)",accent:"#3f5ce0"}),Object.freeze({id:"sepia",label:"\u7F8A\u76AE\u7EB8",bg:"#f2e6cf",ink:"#453322",muted:"#715f47",border:"rgba(69, 51, 34, 0.18)",accent:"#8f5a24"}),Object.freeze({id:"green",label:"\u62A4\u773C\u7EFF",bg:"#e3efe4",ink:"#263a2b",muted:"#556b5a",border:"rgba(38, 58, 43, 0.17)",accent:"#3d6a47"}),Object.freeze({id:"night",label:"\u591C\u95F4",bg:"#1c1e22",ink:"#e9e6dd",muted:"#a6a29a",border:"rgba(233, 230, 221, 0.16)",accent:"#d2a76b"}),Object.freeze({id:"custom",label:"\u81EA\u5B9A\u4E49"})]),jt=Object.freeze({fontSize:18,lineHeight:1.85,fontFamily:"serif",fontWeight:400,contentWidth:760,tocWidth:260,readingMode:"scroll",pageAnimation:"slide",bookAnimation:"slide",brightness:1,backgroundPreset:"paper",customBackground:"#fbf7ee",textTone:"auto",backgroundImageKey:"",backgroundImageOpacity:.26,backgroundImageBlur:0}),Ne=Object.freeze({fontSize:Object.freeze({min:13,max:34,step:1}),lineHeight:Object.freeze({min:1.35,max:2.4,step:.05}),contentWidth:Object.freeze({min:520,max:1600,step:20}),tocWidth:Object.freeze({min:180,max:520,step:10}),brightness:Object.freeze({min:.6,max:1.2,step:.01}),backgroundImageOpacity:Object.freeze({min:0,max:.8,step:.01}),backgroundImageBlur:Object.freeze({min:0,max:12,step:1})}),Ao=Object.freeze(Wi.map(t=>t.value)),df=Object.freeze(Oa.map(t=>t.id)),hf=new Map(Oa.map(t=>[t.id,t])),Oc=new Map(Ui.map(t=>[t.id,t])),uf=Object.freeze(["auto","dark","light"]),Bi=Object.freeze({ink:"#181511",muted:"#6b6559",border:"rgba(32, 29, 24, 0.15)",tone:"dark"}),$i=Object.freeze({ink:"#f8f5ec",muted:"#b3ada0",border:"rgba(245, 242, 233, 0.18)",tone:"light"}),ff="#8a5a24",pf="#d8b06a",Lc=Object.freeze({white:"#ffffff",black:"#000000",red:"#ff0000",lime:"#00ff00",blue:"#0000ff",yellow:"#ffff00",aqua:"#00ffff",cyan:"#00ffff",fuchsia:"#ff00ff",magenta:"#ff00ff",silver:"#c0c0c0",gray:"#808080",grey:"#808080",maroon:"#800000",olive:"#808000",green:"#008000",purple:"#800080",teal:"#008080",navy:"#000080",orange:"#ffa500",pink:"#ffc0cb",brown:"#a52a2a",gold:"#ffd700",beige:"#f5f5dc",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",turquoise:"#40e0d0",salmon:"#fa8072",coral:"#ff7f50",indigo:"#4b0082",violet:"#ee82ee",wheat:"#f5deb3",tan:"#d2b48c",snow:"#fffafa",linen:"#faf0e6"});function io(t){return Math.max(0,Math.min(255,Math.round(t)))}function gf(t){let e=t.slice(1);if(!/^[0-9a-f]+$/iu.test(e))return null;if(e.length===3||e.length===4){let[r,n,o]=e.slice(0,3).split("").map(i=>Number.parseInt(`${i}${i}`,16));return{r,g:n,b:o}}return e.length===6||e.length===8?{r:Number.parseInt(e.slice(0,2),16),g:Number.parseInt(e.slice(2,4),16),b:Number.parseInt(e.slice(4,6),16)}:null}function mf(t){let e=/^([+-]?(?:\d+\.?\d*|\.\d+))(%?)$/u.exec(t);if(!e)return null;let r=Number(e[1]);return Number.isFinite(r)?(e[2]==="%"&&(r=r/100*255),io(r)):null}function bf(t){let e=t.replace(/\//gu," ").split(/[\s,]+/u).filter(Boolean);if(e.length<3)return null;let r=e.slice(0,3).map(mf);return r.some(n=>n===null)?null:{r:r[0],g:r[1],b:r[2]}}function Fi(t,e,r){let n=r;return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function xf(t){let e=t.replace(/\//gu," ").split(/[\s,]+/u).filter(Boolean);if(e.length<3)return null;let r=Number.parseFloat(e[0]),n=Number.parseFloat(e[1]),o=Number.parseFloat(e[2]);if(![r,n,o].every(Number.isFinite))return null;let i=Math.max(0,Math.min(100,n))/100,a=Math.max(0,Math.min(100,o))/100,s=(r%360+360)%360/360;if(i===0){let h=io(a*255);return{r:h,g:h,b:h}}let l=a<.5?a*(1+i):a+i-a*i,d=2*a-l;return{r:io(Fi(d,l,s+1/3)*255),g:io(Fi(d,l,s)*255),b:io(Fi(d,l,s-1/3)*255)}}function Ra(t){if(typeof t!="string")return null;let e=t.trim().toLowerCase();if(!e)return null;if(e.startsWith("#"))return gf(e);if(e in Lc)return Ra(Lc[e]);let r=/^([a-z]+)\((.*)\)$/u.exec(e);if(!r)return null;let n=r[1],o=r[2];return n==="rgb"||n==="rgba"?bf(o):n==="hsl"||n==="hsla"?xf(o):null}function Dc({r:t,g:e,b:r}){return`#${[t,e,r].map(n=>io(n).toString(16).padStart(2,"0")).join("")}`}function zi(t){let e=t/255;return e<=.03928?e/12.92:((e+.055)/1.055)**2.4}function Fc(t){let e=Ra(t);return e?.2126*zi(e.r)+.7152*zi(e.g)+.0722*zi(e.b):1}function Pa(t,e){let r=Fc(t),n=Fc(e),o=Math.max(r,n),i=Math.min(r,n);return(o+.05)/(i+.05)}function ji(t,e="#ffffff"){let r=Ra(t);if(r)return Dc(r);let n=Ra(e);return n?Dc(n):"#ffffff"}function Hi(t){let e=Pa(Bi.ink,t);return Pa($i.ink,t)>e?{...$i}:{...Bi}}function Bc(t){let e=Hi(t);return{ink:e.ink,muted:e.muted,border:e.border}}function Rr(t,e,r,n){let o=Number(t);return Number.isFinite(o)?Math.max(e,Math.min(r,o)):n}function vf(t){return df.includes(t)?t:"paper"}function yf(t){return uf.includes(t)?t:"auto"}function wf(t){let e=Number(t);if(!Number.isFinite(e))return 400;let r=Math.max(Ao[0],Math.min(Ao[Ao.length-1],e)),n=Ao[0],o=Number.POSITIVE_INFINITY;for(let i of Ao){let a=Math.abs(i-r);a<o&&(n=i,o=a)}return n}function kf(t){return(Oc.get(t)||Oc.get("serif")).stack}function _f(t){return t>=600?700:600}function Gi(t){let e=t&&typeof t=="object"?t:{},r=vf(e.backgroundPreset),n=ji(e.customBackground,jt.customBackground),o=r==="custom"?null:hf.get(r),i=o?o.bg:n,a=Hi(i);o&&(a={ink:o.ink,muted:o.muted,border:o.border});let s=yf(e.textTone);s==="dark"?a={...Bi}:s==="light"&&(a={...$i});let l=o?o.accent:Hi(i).tone==="light"?pf:ff,d=wf(e.fontWeight);return{preset:r,bg:i,ink:a.ink,muted:a.muted,border:a.border,accent:l,fontFamily:kf(e.fontFamily),fontWeight:d,headingWeight:_f(d),width:Rr(e.contentWidth,Ne.contentWidth.min,Ne.contentWidth.max,jt.contentWidth),brightness:Rr(e.brightness,Ne.brightness.min,Ne.brightness.max,jt.brightness),imageOpacity:Rr(e.backgroundImageOpacity,Ne.backgroundImageOpacity.min,Ne.backgroundImageOpacity.max,jt.backgroundImageOpacity),imageBlur:Rr(e.backgroundImageBlur,Ne.backgroundImageBlur.min,Ne.backgroundImageBlur.max,jt.backgroundImageBlur)}}function Tf(t){return`url("${String(t).replace(/[\n\r\f]/gu," ").replace(/\\/gu,"\\\\").replace(/"/gu,'\\"')}")`}function La(t,e){let r=Gi(t),n=typeof e=="string"&&e.trim()?Tf(e.trim()):"none";return{"--dshr-reader-bg":r.bg,"--dshr-reader-ink":r.ink,"--dshr-reader-muted":r.muted,"--dshr-reader-border":r.border,"--dshr-reader-accent":r.accent,"--dshr-reader-font":r.fontFamily,"--dshr-reader-weight":String(r.fontWeight),"--dshr-reader-heading-weight":String(r.headingWeight),"--dshr-reader-width":`${r.width}px`,"--dshr-reader-brightness":String(r.brightness),"--dshr-reader-image-opacity":String(r.imageOpacity),"--dshr-reader-image-blur":`${r.imageBlur}px`,"--dshr-reader-image":n}}var qi=String.raw`
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
`;var W=require("react/jsx-runtime");function so({size:t=15,children:e,viewBox:r="0 0 24 24"}){return(0,W.jsx)("svg",{width:t,height:t,viewBox:r,fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:e})}function Sf(t){return(0,W.jsx)(so,{...t,children:(0,W.jsx)("path",{d:"m6 6 12 12M18 6 6 18"})})}function Ef(t){return(0,W.jsxs)(so,{...t,children:[(0,W.jsx)("rect",{x:"3",y:"4.5",width:"18",height:"15",rx:"2.4"}),(0,W.jsx)("circle",{cx:"8.4",cy:"9.6",r:"1.5"}),(0,W.jsx)("path",{d:"m4 17 4.6-4.4a1.6 1.6 0 0 1 2.2 0l2.5 2.4 2.1-2a1.6 1.6 0 0 1 2.2 0L20 15.6"})]})}function Af(t){return(0,W.jsxs)(so,{...t,children:[(0,W.jsx)("path",{d:"M12 16V4"}),(0,W.jsx)("path",{d:"m7 9 5-5 5 5"}),(0,W.jsx)("path",{d:"M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15"})]})}function Nf(t){return(0,W.jsxs)(so,{...t,children:[(0,W.jsx)("path",{d:"M4 7h16M9 7V5h6v2M7 7l.7 12.2A1.8 1.8 0 0 0 9.5 21h5a1.8 1.8 0 0 0 1.8-1.8L17 7"}),(0,W.jsx)("path",{d:"M10 11v6M14 11v6"})]})}function Cf(t){return(0,W.jsxs)(so,{...t,children:[(0,W.jsx)("path",{d:"M20 11a8 8 0 1 0-2.3 6.3"}),(0,W.jsx)("path",{d:"M20 4v7h-7"})]})}function $c(t){return(0,W.jsx)(so,{...t,children:(0,W.jsx)("path",{d:"m5 12 4.5 4.5L19 7"})})}var If=Object.freeze([{id:"auto",label:"\u81EA\u52A8"},{id:"dark",label:"\u6DF1\u8272\u5B57"},{id:"light",label:"\u6D45\u8272\u5B57"}]),Mf=Object.freeze(["fontSize","lineHeight","fontFamily","fontWeight","contentWidth","tocWidth","brightness","backgroundPreset","customBackground","textTone","backgroundImageOpacity","backgroundImageBlur"]),Rf='button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';function Hc({label:t,value:e,options:r,onChange:n}){return(0,W.jsx)("div",{className:"dshr-appearance-segmented",role:"group","aria-label":t,children:r.map(o=>{let i=o.value!==void 0?o.value:o.id;return(0,W.jsx)("button",{type:"button",className:"dshr-appearance-segmented__item","aria-pressed":e===i,onClick:()=>n(i),children:o.label},String(i))})})}function On({label:t,valueText:e,min:r,max:n,step:o,value:i,onChange:a,disabled:s,hint:l}){return(0,W.jsxs)("label",{className:`dshr-appearance-slider${s?" is-disabled":""}`,children:[(0,W.jsxs)("span",{className:"dshr-appearance-slider__head",children:[(0,W.jsx)("span",{children:t}),(0,W.jsx)("span",{className:"dshr-appearance-slider__value",children:e})]}),(0,W.jsx)("input",{type:"range",min:r,max:n,step:o,value:i,disabled:s,onChange:d=>a(Number(d.target.value)),"aria-label":t}),l?(0,W.jsx)("span",{className:"dshr-appearance-slider__hint",children:l}):null]})}function Uc({open:t,settings:e,backgroundImageUrl:r,onChange:n,onPickBackgroundImage:o,onClearBackgroundImage:i,onClose:a}){let s=on.default.useRef(null),l=on.default.useId(),[d,h]=on.default.useState(!1),g=Gi(e),f=!!r,p=ji(e.customBackground,jt.customBackground),S=Bc(p).ink,w=Pa(g.ink,g.bg),x=Rr(e.fontSize,Ne.fontSize.min,Ne.fontSize.max,jt.fontSize),T=Rr(e.lineHeight,Ne.lineHeight.min,Ne.lineHeight.max,jt.lineHeight),M=!f&&Mf.every(_=>e[_]===jt[_]),N=on.default.useCallback(_=>{typeof n=="function"&&n({...e,..._})},[n,e]);if(on.default.useEffect(()=>{if(!t)return;let _=F=>{F.key==="Escape"&&(F.preventDefault(),a?.())};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[t,a]),on.default.useEffect(()=>{if(!t)return;let _=typeof document<"u"?document.activeElement:null,F=window.requestAnimationFrame(()=>{s.current?.focus({preventScroll:!0})});return()=>{window.cancelAnimationFrame(F),_ instanceof HTMLElement&&_.isConnected&&_.focus({preventScroll:!0})}},[t]),on.default.useEffect(()=>{if(!t){h(!1);return}},[t]),on.default.useEffect(()=>{if(!d)return;let _=window.setTimeout(()=>h(!1),3200);return()=>window.clearTimeout(_)},[d]),!t)return null;let R=_=>{_.target===_.currentTarget&&a?.()},C=_=>{if(_.key!=="Tab"||!s.current)return;let F=[...s.current.querySelectorAll(Rf)].filter(de=>de.offsetParent!==null||de===document.activeElement);if(F.length===0)return;let V=F[0],z=F[F.length-1],se=document.activeElement;_.shiftKey&&(se===V||!s.current.contains(se))?(_.preventDefault(),z.focus()):!_.shiftKey&&se===z&&(_.preventDefault(),V.focus())},E=()=>{if(!d){h(!0);return}h(!1),f&&i?.(),n?.({...e,...jt})},P={...La(e,r),fontSize:`${Math.min(16,Math.max(12,Math.round(x*.8)))}px`,lineHeight:String(T)},m=w>=4.5;return(0,W.jsx)("div",{className:"dshr-appearance-mask",onMouseDown:R,children:(0,W.jsxs)("aside",{className:"dshr-appearance-panel",role:"dialog","aria-modal":"true","aria-labelledby":l,tabIndex:-1,ref:s,onKeyDown:C,children:[(0,W.jsxs)("header",{className:"dshr-appearance-head",children:[(0,W.jsxs)("div",{className:"dshr-appearance-head__text",children:[(0,W.jsx)("strong",{id:l,children:"\u9605\u8BFB\u5916\u89C2"}),(0,W.jsx)("span",{children:"\u8C03\u6574\u6392\u7248\u3001\u5B57\u4F53\u4E0E\u80CC\u666F \xB7 \u4EC5\u4FDD\u5B58\u5728\u672C\u673A"})]}),(0,W.jsx)("button",{type:"button",className:"dshr-appearance-close",onClick:a,"aria-label":"\u5173\u95ED\u5916\u89C2\u8BBE\u7F6E",children:(0,W.jsx)(Sf,{size:16})})]}),(0,W.jsxs)("div",{className:"dshr-appearance-body",children:[(0,W.jsxs)("div",{className:"dshr-appearance-preview",style:P,"aria-hidden":"true",children:[(0,W.jsx)("span",{className:"dshr-appearance-preview__badge",children:"\u5B9E\u65F6\u9884\u89C8"}),(0,W.jsxs)("div",{className:"dshr-appearance-preview__inner",children:[(0,W.jsx)("span",{className:"dshr-appearance-preview__kicker",children:"\u7B2C 1 \u7AE0"}),(0,W.jsx)("p",{className:"dshr-appearance-preview__title",children:"\u5C71\u5C45\u79CB\u669D"}),(0,W.jsx)("p",{className:"dshr-appearance-preview__text",children:"\u7A7A\u5C71\u65B0\u96E8\u540E\uFF0C\u5929\u6C14\u665A\u6765\u79CB\u3002\u660E\u6708\u677E\u95F4\u7167\uFF0C\u6E05\u6CC9\u77F3\u4E0A\u6D41\u3002"}),(0,W.jsx)("p",{className:"dshr-appearance-preview__quote",children:"\u7AF9\u55A7\u5F52\u6D63\u5973\uFF0C\u83B2\u52A8\u4E0B\u6E14\u821F\u3002"})]})]}),(0,W.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-bg`,children:[(0,W.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-bg`,children:"\u80CC\u666F"}),(0,W.jsx)("div",{className:"dshr-appearance-swatches",role:"group","aria-label":"\u80CC\u666F\u9884\u8BBE",children:Oa.map(_=>{let F=_.id==="custom"?p:_.bg,V=_.id==="custom"?S:_.ink,z=g.preset===_.id;return(0,W.jsxs)("button",{type:"button",className:`dshr-appearance-swatch${z?" is-active":""}`,"aria-pressed":z,onClick:()=>N({backgroundPreset:_.id}),children:[(0,W.jsx)("span",{className:"dshr-appearance-swatch__chip",style:{background:F,color:V},children:"\u6587"}),(0,W.jsx)("span",{className:"dshr-appearance-swatch__label",children:_.label})]},_.id)})}),(0,W.jsxs)("label",{className:"dshr-appearance-colorrow",children:[(0,W.jsx)("span",{children:"\u81EA\u5B9A\u4E49\u989C\u8272"}),(0,W.jsxs)("span",{className:"dshr-appearance-colorrow__control",children:[(0,W.jsx)("input",{type:"color",className:"dshr-appearance-color",value:p,"aria-label":"\u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272",onChange:_=>N({backgroundPreset:"custom",customBackground:_.target.value})}),(0,W.jsx)("code",{className:"dshr-appearance-colorrow__hex",children:p.toUpperCase()})]})]}),(0,W.jsxs)("div",{className:"dshr-appearance-field",children:[(0,W.jsxs)("div",{className:"dshr-appearance-field__head",children:[(0,W.jsx)("span",{children:"\u6587\u5B57\u8272\u8C03"}),(0,W.jsxs)("span",{className:`dshr-appearance-field__value${m?"":" is-warning"}`,children:["\u5BF9\u6BD4\u5EA6 ",w.toFixed(1),":1"]})]}),(0,W.jsx)(Hc,{label:"\u6587\u5B57\u8272\u8C03",value:e.textTone==="dark"||e.textTone==="light"?e.textTone:"auto",options:If,onChange:_=>N({textTone:_})}),(0,W.jsxs)("p",{className:"dshr-appearance-hint",children:[m?"\u81EA\u52A8\u6A21\u5F0F\u4F1A\u6309\u80CC\u666F\u4EAE\u5EA6\u9009\u62E9\u6DF1\u8272\u6216\u6D45\u8272\u6587\u5B57\u3002":"\u5F53\u524D\u6587\u5B57\u4E0E\u80CC\u666F\u5BF9\u6BD4\u5EA6\u504F\u4F4E\uFF0C\u5EFA\u8BAE\u6539\u9009\u5176\u5B83\u80CC\u666F\u6216\u6587\u5B57\u8272\u8C03\u3002",f?" \u80CC\u666F\u56FE\u7247\u4F1A\u8FDB\u4E00\u6B65\u5F71\u54CD\u5B9E\u9645\u53EF\u8BFB\u6027\u3002":""]})]})]}),(0,W.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-image`,children:[(0,W.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-image`,children:"\u80CC\u666F\u56FE\u7247"}),(0,W.jsxs)("div",{className:"dshr-appearance-image",children:[(0,W.jsx)("span",{className:`dshr-appearance-image__thumb${f?" has-image":""}`,children:f?(0,W.jsx)("img",{src:r,alt:""}):(0,W.jsx)(Ef,{size:20})}),(0,W.jsxs)("div",{className:"dshr-appearance-image__meta",children:[(0,W.jsx)("strong",{children:f?"\u5DF2\u9009\u62E9\u80CC\u666F\u56FE\u7247":"\u672A\u9009\u62E9\u80CC\u666F\u56FE\u7247"}),(0,W.jsx)("span",{children:"\u4F5C\u4E3A\u6587\u5B57\u4E0B\u65B9\u7684\u886C\u5E95\uFF0C\u4EC5\u4FDD\u5B58\u5728\u672C\u673A\u3002"})]}),(0,W.jsxs)("div",{className:"dshr-appearance-image__actions",children:[(0,W.jsxs)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--soft dshr-appearance-btn--sm",onClick:o,children:[f?(0,W.jsx)($c,{size:13}):(0,W.jsx)(Af,{size:13}),f?"\u66F4\u6362":"\u9009\u62E9\u56FE\u7247"]}),f?(0,W.jsxs)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--ghost dshr-appearance-btn--sm",onClick:i,children:[(0,W.jsx)(Nf,{size:13})," \u79FB\u9664"]}):null]})]}),(0,W.jsx)(On,{label:"\u56FE\u7247\u4E0D\u900F\u660E\u5EA6",valueText:`${Math.round(Rr(e.backgroundImageOpacity,Ne.backgroundImageOpacity.min,Ne.backgroundImageOpacity.max,jt.backgroundImageOpacity)*100)}%`,min:Ne.backgroundImageOpacity.min,max:Ne.backgroundImageOpacity.max,step:Ne.backgroundImageOpacity.step,value:Rr(e.backgroundImageOpacity,Ne.backgroundImageOpacity.min,Ne.backgroundImageOpacity.max,jt.backgroundImageOpacity),disabled:!f,onChange:_=>N({backgroundImageOpacity:_})}),(0,W.jsx)(On,{label:"\u56FE\u7247\u6A21\u7CCA",valueText:`${Math.round(g.imageBlur)}px`,min:Ne.backgroundImageBlur.min,max:Ne.backgroundImageBlur.max,step:Ne.backgroundImageBlur.step,value:g.imageBlur,disabled:!f,onChange:_=>N({backgroundImageBlur:_})}),(0,W.jsx)(On,{label:"\u9605\u8BFB\u4EAE\u5EA6",valueText:`${Math.round(g.brightness*100)}%`,min:Ne.brightness.min,max:Ne.brightness.max,step:Ne.brightness.step,value:g.brightness,onChange:_=>N({brightness:_})}),(0,W.jsx)("p",{className:"dshr-appearance-hint",children:"\u8C03\u4F4E\u4EAE\u5EA6\u53EF\u51CF\u5C11\u591C\u95F4\u5C4F\u5E55\u523A\u6FC0\uFF1B\u53EA\u5F71\u54CD\u6B63\u6587/PDF \u9605\u8BFB\u533A\uFF0C\u4E0D\u5F71\u54CD\u5DE5\u5177\u680F\u4E0E\u6279\u6CE8\u9762\u677F\u3002"})]}),(0,W.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-type`,children:[(0,W.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-type`,children:"\u5B57\u4F53"}),(0,W.jsx)("div",{className:"dshr-appearance-families",role:"group","aria-label":"\u5B57\u4F53",children:Ui.map(_=>(0,W.jsx)("button",{type:"button",className:"dshr-appearance-family",style:{fontFamily:_.stack},"aria-pressed":g.fontFamily===_.stack,onClick:()=>N({fontFamily:_.id}),title:_.label,children:_.label},_.id))}),(0,W.jsxs)("div",{className:"dshr-appearance-field",children:[(0,W.jsx)("div",{className:"dshr-appearance-field__head",children:(0,W.jsx)("span",{children:"\u5B57\u91CD"})}),(0,W.jsx)(Hc,{label:"\u5B57\u91CD",value:g.fontWeight,options:Wi.map(_=>({value:_.value,label:_.label})),onChange:_=>N({fontWeight:_})})]}),(0,W.jsx)(On,{label:"\u5B57\u53F7",valueText:`${x}px`,min:Ne.fontSize.min,max:Ne.fontSize.max,step:Ne.fontSize.step,value:x,onChange:_=>N({fontSize:_})}),(0,W.jsx)(On,{label:"\u884C\u9AD8",valueText:T.toFixed(2),min:Ne.lineHeight.min,max:Ne.lineHeight.max,step:Ne.lineHeight.step,value:T,onChange:_=>N({lineHeight:Math.round(_*100)/100})})]}),(0,W.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-layout`,children:[(0,W.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-layout`,children:"\u7248\u5F0F"}),(0,W.jsx)(On,{label:"\u9605\u8BFB\u5BBD\u5EA6",valueText:`${Math.round(g.width)}px`,min:Ne.contentWidth.min,max:Ne.contentWidth.max,step:Ne.contentWidth.step,value:g.width,onChange:_=>N({contentWidth:_})}),(0,W.jsx)(On,{label:"\u76EE\u5F55\u5BBD\u5EA6",valueText:`${Math.round(Rr(e.tocWidth,Ne.tocWidth.min,Ne.tocWidth.max,jt.tocWidth))}px`,min:Ne.tocWidth.min,max:Ne.tocWidth.max,step:Ne.tocWidth.step,value:Rr(e.tocWidth,Ne.tocWidth.min,Ne.tocWidth.max,jt.tocWidth),onChange:_=>N({tocWidth:_})}),(0,W.jsx)("p",{className:"dshr-appearance-hint",children:"\u63A7\u5236\u6B63\u6587\u6700\u5927\u5BBD\u5EA6\uFF1B\u76EE\u5F55\u5BBD\u5EA6\u53EF\u5728\u8FD9\u91CC\u8C03\uFF0C\u4E5F\u53EF\u4EE5\u62D6\u52A8\u76EE\u5F55\u53F3\u8FB9\u7F18\u3002\u76EE\u5F55\u6807\u9898\u4F1A\u5B8C\u6574\u6362\u884C\u663E\u793A\u3002"})]})]}),(0,W.jsxs)("footer",{className:"dshr-appearance-foot",children:[(0,W.jsxs)("button",{type:"button",className:`dshr-appearance-btn dshr-appearance-btn--ghost${d?" dshr-appearance-btn--danger":""}`,onClick:E,disabled:M&&!d,title:M?"\u5F53\u524D\u5DF2\u662F\u9ED8\u8BA4\u5916\u89C2":"\u6062\u590D\u9ED8\u8BA4\u5916\u89C2",children:[d?(0,W.jsx)($c,{size:14}):(0,W.jsx)(Cf,{size:14}),d?"\u786E\u8BA4\u6062\u590D\uFF1F":"\u6062\u590D\u9ED8\u8BA4"]}),(0,W.jsx)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--primary",onClick:a,children:"\u5B8C\u6210"})]})]})})}var Da=Ct(require("react"),1);var xe=require("react/jsx-runtime"),Pf={highlight:Nn,underline:ga,note:un},Of=[{id:"all",label:"\u5168\u90E8"},...ro.map(t=>({id:t.id,label:t.label}))];function Lf(t){let e=Number(t);if(!Number.isFinite(e)||e<=0)return"";try{return new Date(e).toLocaleDateString("zh-CN",{month:"numeric",day:"numeric"})}catch{return""}}function Df(t){let e=new Map,r=t&&Array.isArray(t.chapters)?t.chapters:[];for(let n=0;n<r.length;n+=1){let o=r[n];o&&o.id!=null&&e.set(String(o.id),{index:n,title:o.title||""})}return e}function Wc(t){return t?t.kind==="pdf"?!0:t.kind==="flow"?!1:Array.isArray(t.rects)&&!Array.isArray(t.ranges):!1}function jc(t,e){if(!t)return null;if(t.chapterId!=null){let r=e.get(String(t.chapterId));if(r)return r}if(Number.isInteger(Number(t.chapterIndex))&&Number(t.chapterIndex)>=0){let r=Number(t.chapterIndex),o=(e.size>0?[...e.values()]:[]).find(i=>i.index===r);return{index:r,title:o?o.title:""}}return null}function Ff(t,e,r){let n=(Array.isArray(t)?t:[]).filter(a=>!(!a||r!=="all"&&a.style!==r)),o=new Map;for(let a=0;a<n.length;a+=1){let s=n[a],l=Wc(s),d,h,g;if(l){let f=Number(s.page),p=Number.isInteger(f)&&f>0;d=`pdf:${p?f:"unknown"}`,h=p?1e4+f:999999,g=p?`\u7B2C ${f} \u9875`:"PDF \u9875\u9762"}else{let f=jc(s,e),p=f?f.index:null;d=`flow:${p??"unknown"}`,h=p??99999,g=p==null?"\u6B63\u6587":`\u7B2C ${p+1} \u7AE0${f&&f.title?` \xB7 ${f.title}`:""}`}o.has(d)||o.set(d,{key:d,order:h,title:g,items:[]}),o.get(d).items.push(s)}let i=[...o.values()];i.sort((a,s)=>a.order-s.order);for(let a=0;a<i.length;a+=1)i[a].items.sort((l,d)=>{let h=Array.isArray(l.ranges)&&l.ranges[0]&&l.ranges[0].start||0,g=Array.isArray(d.ranges)&&d.ranges[0]&&d.ranges[0].start||0;return h!==g?h-g:(Number(l.createdAt)||0)-(Number(d.createdAt)||0)});return i}function zf({hasAny:t,filter:e}){return t?(0,xe.jsxs)("div",{className:"dshr-anno-panel__empty",children:[(0,xe.jsx)("p",{className:"dshr-anno-panel__empty-title",children:"\u6CA1\u6709\u5339\u914D\u7684\u6807\u6CE8"}),(0,xe.jsxs)("p",{className:"dshr-anno-panel__empty-text",children:["\u5F53\u524D\u7B5B\u9009\u662F\u300C",e==="all"?"\u5168\u90E8":ki(e),"\u300D\uFF0C\u5207\u6362\u7B5B\u9009\u770B\u770B\u5176\u4F59\u6807\u6CE8\u3002"]})]}):(0,xe.jsxs)("div",{className:"dshr-anno-panel__empty",children:[(0,xe.jsx)("span",{className:"dshr-anno-panel__empty-mark","aria-hidden":"true",children:(0,xe.jsx)(Gl,{size:44})}),(0,xe.jsx)("p",{className:"dshr-anno-panel__empty-title",children:"\u8FD8\u6CA1\u6709\u4EFB\u4F55\u6807\u6CE8"}),(0,xe.jsx)("p",{className:"dshr-anno-panel__empty-text",children:"\u5728\u9605\u8BFB\u65F6\u9009\u4E2D\u4E00\u6BB5\u6587\u5B57\uFF0C\u5C31\u53EF\u4EE5\u7528\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u6216\u4FBF\u7B7E\u628A\u5B83\u7559\u5728\u8FD9\u91CC\u3002"}),(0,xe.jsxs)("ol",{className:"dshr-anno-panel__steps",children:[(0,xe.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,xe.jsx)("span",{className:"dshr-anno-panel__step-index",children:"1"})," \u9009\u4E2D\u6B63\u6587\u4E2D\u7684\u4E00\u6BB5\u6587\u5B57"]}),(0,xe.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,xe.jsx)("span",{className:"dshr-anno-panel__step-index",children:"2"})," \u9009\u62E9\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u6216\u4FBF\u7B7E"]}),(0,xe.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,xe.jsx)("span",{className:"dshr-anno-panel__step-index",children:"3"})," \u4E4B\u540E\u56DE\u5230\u8FD9\u91CC\u56DE\u770B\u3001\u8DF3\u8F6C"]})]}),(0,xe.jsx)("p",{className:"dshr-anno-panel__hint",children:"PDF \u9875\u9762\u540C\u6837\u652F\u6301\uFF1A\u9009\u4E2D\u6587\u5B57\u540E\u70B9\u51FB\u300C\u6807\u6CE8\u300D\u5373\u53EF\u3002"})]})}function Gc({open:t,annotations:e,book:r,onClose:n,onOpenAnnotation:o,onJump:i,onDelete:a}){let[s,l]=Da.default.useState("all"),d=Da.default.useMemo(()=>Df(r),[r]);if(Da.default.useEffect(()=>{if(!t||typeof document>"u")return;let w=x=>{x.key!=="Escape"||typeof n!="function"||document.querySelector(".dshr-anno-composer")||(x.preventDefault(),n())};return document.addEventListener("keydown",w,!0),()=>document.removeEventListener("keydown",w,!0)},[n,t]),!t)return null;let h=(Array.isArray(e)?e:[]).filter(Boolean),g={all:h.length};for(let w=0;w<ro.length;w+=1){let x=ro[w].id;g[x]=h.filter(T=>T.style===x).length}let f=Ff(h,d,s),p=s==="all"?h.length:h.filter(w=>w.style===s).length,S=(w,x)=>{typeof w=="function"&&w(x)};return(0,xe.jsxs)("aside",{className:"dshr-anno-panel","aria-label":"\u6807\u6CE8\u7B14\u8BB0\u9762\u677F",children:[(0,xe.jsxs)("header",{className:"dshr-anno-panel__head",children:[(0,xe.jsxs)("div",{className:"dshr-anno-panel__titles",children:[(0,xe.jsxs)("h3",{className:"dshr-anno-panel__title",children:["\u6807\u6CE8\u7B14\u8BB0",(0,xe.jsx)("span",{className:"dshr-anno-panel__count",children:h.length})]}),(0,xe.jsx)("span",{className:"dshr-anno-panel__sub",children:h.length>0?`${p} \u6761\u6807\u6CE8 \xB7 ${f.length} \u4E2A\u4F4D\u7F6E`:"\u9009\u4E2D\u6587\u5B57\u5373\u53EF\u6DFB\u52A0\u6807\u6CE8"})]}),(0,xe.jsx)("button",{type:"button",className:"dshr-anno-panel__close","aria-label":"\u5173\u95ED\u6807\u6CE8\u9762\u677F",onClick:()=>S(n),children:(0,xe.jsx)(ma,{size:13})})]}),h.length>0?(0,xe.jsx)("div",{className:"dshr-anno-panel__filters",role:"tablist","aria-label":"\u6309\u6837\u5F0F\u7B5B\u9009\u6807\u6CE8",children:Of.map(w=>{let x=s===w.id,T=g[w.id]||0;return(0,xe.jsxs)("button",{type:"button",role:"tab","aria-selected":x,className:`dshr-anno-panel__filter${x?" is-active":""}`,onClick:()=>l(w.id),children:[w.label,w.id==="all"?` ${T}`:T>0?` ${T}`:""]},w.id)})}):null,(0,xe.jsx)("div",{className:"dshr-anno-panel__list",children:f.length===0?(0,xe.jsx)(zf,{hasAny:h.length>0,filter:s}):f.map(w=>(0,xe.jsxs)("section",{className:"dshr-anno-panel__group",children:[(0,xe.jsxs)("div",{className:"dshr-anno-panel__group-head",children:[(0,xe.jsx)("span",{className:"dshr-anno-panel__group-title",title:w.title,children:w.title}),(0,xe.jsx)("span",{className:"dshr-anno-panel__group-rule"}),(0,xe.jsx)("span",{className:"dshr-anno-panel__group-count",children:w.items.length})]}),w.items.map(x=>{let T=x.style||"highlight",M=Pf[T]||Nn,N=x.color||"#f5d76e",R=typeof x.quote=="string"?x.quote.trim():"",C=typeof x.note=="string"?x.note.trim():"",E=jc(x,d),L=Wc(x)?Number(x.page)>0?`\u7B2C ${x.page} \u9875`:"PDF":E?`\u7B2C ${E.index+1} \u7AE0`:"\u6B63\u6587",P=Lf(x.updatedAt||x.createdAt);return(0,xe.jsxs)("article",{className:"dshr-anno-item",style:{"--dshr-anno-color":N},"data-anno-id":x.id||void 0,children:[(0,xe.jsxs)("button",{type:"button",className:"dshr-anno-item__main",onClick:()=>S(o,x.id),title:"\u7F16\u8F91\u8FD9\u6761\u6807\u6CE8",children:[(0,xe.jsxs)("div",{className:"dshr-anno-item__meta",children:[(0,xe.jsx)("span",{className:"dshr-anno-item__dot","aria-hidden":"true"}),(0,xe.jsxs)("span",{className:"dshr-anno-item__style",children:[(0,xe.jsx)(M,{size:12})," ",ki(T)]}),(0,xe.jsx)("span",{className:"dshr-anno-item__sep","aria-hidden":"true",children:"\xB7"}),(0,xe.jsx)("span",{className:"dshr-anno-item__location",children:L}),(0,xe.jsx)("span",{className:"dshr-anno-item__spacer"}),P?(0,xe.jsx)("span",{children:P}):null]}),(0,xe.jsx)("p",{className:"dshr-anno-item__quote",children:R||C||"\uFF08\u672A\u8BB0\u5F55\u9009\u4E2D\u6587\u5B57\uFF09"}),C&&C!==R?(0,xe.jsx)("p",{className:"dshr-anno-item__note",children:C}):null]}),(0,xe.jsxs)("div",{className:"dshr-anno-item__actions",children:[(0,xe.jsx)("button",{type:"button",className:"dshr-anno-item__action dshr-anno-item__action--jump",onClick:()=>S(i,x),title:"\u8DF3\u8F6C\u5230\u8FD9\u6761\u6807\u6CE8\u7684\u4F4D\u7F6E",children:"\u5B9A\u4F4D"}),(0,xe.jsx)("span",{className:"dshr-anno-item__spacer"}),(0,xe.jsx)("button",{type:"button",className:"dshr-anno-item__action dshr-anno-item__action--danger",onClick:()=>S(a,x),title:"\u5220\u9664\u8FD9\u6761\u6807\u6CE8",children:"\u5220\u9664"})]})]},x.id||`${w.key}:${R}`)})]},w.key))})]})}var jr=Ct(require("react"),1);var Se=require("react/jsx-runtime"),qc={highlight:Nn,underline:ga,note:un},Bf={highlight:"\u7528\u534A\u900F\u660E\u7684\u8272\u5E26\u8986\u76D6\u9009\u4E2D\u6587\u5B57\uFF0C\u53EF\u8C03\u7B14\u89E6\u7C97\u7EC6\u3002",underline:"\u5728\u9009\u4E2D\u6587\u5B57\u4E0B\u65B9\u753B\u4E00\u6761\u624B\u5199\u5F0F\u4E0B\u5212\u7EBF\u3002",note:"\u5728\u9009\u4E2D\u6587\u5B57\u65C1\u653E\u4E00\u679A\u4FBF\u7B7E\uFF0C\u8BB0\u5F55\u6B64\u523B\u7684\u60F3\u6CD5\u3002"},Xc=2e3,Xi=wo[1].value;function Vi(t){return t==="underline"?Bl:zl}function Kc(t){return Object.prototype.hasOwnProperty.call(to,t)?t:"highlight"}function $f(t){let e=Number(t);if(!Number.isFinite(e))return Xi;let r=Xi,n=1/0;for(let o=0;o<wo.length;o+=1){let i=wo[o].value,a=Math.abs(i-e);a<n&&(r=i,n=a)}return r}function Vc(t){let e=t&&typeof t=="object"?t:{},r=Kc(e.style),n=Vi(r),o=n.find(i=>i.value===e.color);return{style:r,color:o?o.value:typeof e.color=="string"&&e.color?e.color:n[0].value,width:$f(e.width),note:typeof e.note=="string"?e.note:"",quote:typeof e.quote=="string"?e.quote:""}}function Hf(t,e){if(!t||typeof t!="object")return`${e}:empty`;let r=typeof t.quote=="string"?t.quote:"";return[e,t.id||"",r,Array.isArray(t.ranges)?t.ranges.length:0,t.page==null?"":t.page,t.chapterId==null?"":t.chapterId].join("|")}function Uf(t){return`${Math.round(2+(Number(t)||Xi)*.34)}px`}function Yc({open:t,draft:e,mode:r,onClose:n,onSave:o,onDelete:i}){let a=r==="edit",[s,l]=jr.default.useState(()=>Vc(e)),d=jr.default.useRef(""),h=jr.default.useRef(null);jr.default.useEffect(()=>{if(!t){d.current="";return}let C=Hf(e,r);d.current!==C&&(d.current=C,l(Vc(e)))},[e,r,t]),jr.default.useEffect(()=>{if(!t||typeof window>"u")return;let C=window.setTimeout(()=>{let E=h.current;if(E)try{E.focus({preventScroll:!0}),E.setSelectionRange(E.value.length,E.value.length)}catch{}},30);return()=>window.clearTimeout(C)},[t]);let g=jr.default.useCallback(C=>{l(E=>({...E,...C}))},[]),f=jr.default.useCallback(C=>{let E=Kc(C);l(L=>{let P=Vi(E),m=P.some(_=>_.value===L.color);return{...L,style:E,color:m?L.color:P[0].value}})},[]),p=jr.default.useCallback(()=>{if(!s.note.trim()&&!s.quote.trim()&&s.style==="note")return;let E={...e&&typeof e=="object"?e:{},style:s.style,color:s.color,width:s.width,note:s.note,quote:s.quote};typeof o=="function"&&o(E)},[e,o,s]);if(jr.default.useEffect(()=>{if(!t||typeof document>"u")return;let C=E=>{if(E.key==="Escape"){E.preventDefault(),E.stopImmediatePropagation(),typeof n=="function"&&n();return}E.key==="Enter"&&(E.metaKey||E.ctrlKey)&&(E.preventDefault(),E.stopImmediatePropagation(),p())};return document.addEventListener("keydown",C,!0),()=>document.removeEventListener("keydown",C,!0)},[p,n,t]),!t)return null;let S=Vi(s.style),w=qc[s.style]||Nn,x=s.quote.trim(),T=!!(s.note.trim()||x||s.style!=="note"),M=s.style==="note"?"\u4FBF\u7B7E\u5185\u5BB9":"\u5907\u6CE8",N=s.style==="note"?"\u5199\u4E0B\u8FD9\u6BB5\u6587\u5B57\u7ED9\u4F60\u7684\u60F3\u6CD5\u2026":"\u53EF\u9009\uFF1A\u4E3A\u8FD9\u6761\u6807\u6CE8\u5199\u4E00\u6761\u5907\u6CE8\u2026",R=s.style==="underline"?"\u4E0B\u5212\u7EBF\u989C\u8272":s.style==="note"?"\u4FBF\u7B7E\u989C\u8272":"\u8367\u5149\u7B14\u989C\u8272";return(0,Se.jsx)("div",{className:"dshr-anno-composer-mask",role:"presentation",onMouseDown:C=>{C.target===C.currentTarget&&typeof n=="function"&&n()},children:(0,Se.jsxs)("div",{className:"dshr-anno-composer",role:"dialog","aria-modal":"true","aria-label":a?"\u7F16\u8F91\u6807\u6CE8":"\u6DFB\u52A0\u6807\u6CE8",onMouseDown:C=>C.stopPropagation(),children:[(0,Se.jsxs)("header",{className:"dshr-anno-composer__head",children:[(0,Se.jsxs)("div",{className:"dshr-anno-composer__titles",children:[(0,Se.jsx)("h3",{className:"dshr-anno-composer__title",children:a?"\u7F16\u8F91\u6807\u6CE8":"\u6DFB\u52A0\u6807\u6CE8"}),(0,Se.jsx)("span",{className:"dshr-anno-composer__sub",children:Bf[s.style]})]}),(0,Se.jsx)("button",{type:"button",className:"dshr-anno-composer__close","aria-label":"\u5173\u95ED\u6807\u6CE8\u7F16\u8F91\u5668",onClick:()=>{typeof n=="function"&&n()},children:(0,Se.jsx)(ma,{size:13})})]}),(0,Se.jsxs)("div",{className:"dshr-anno-composer__body",children:[(0,Se.jsx)("div",{className:"dshr-anno-composer__tabs",role:"tablist","aria-label":"\u6807\u6CE8\u6837\u5F0F",children:ro.map(C=>{let E=qc[C.id]||Nn,L=s.style===C.id;return(0,Se.jsxs)("button",{type:"button",role:"tab","aria-selected":L,className:`dshr-anno-composer__tab${L?" is-active":""}`,onClick:()=>f(C.id),children:[(0,Se.jsx)(E,{size:14})," ",C.label]},C.id)})}),(0,Se.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Se.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Se.jsx)("span",{children:R}),(0,Se.jsx)("em",{children:s.style==="underline"?"\u7EB8\u4E0A\u7684\u58A8\u8272":"\u534A\u900F\u660E\u7B14\u89E6"})]}),(0,Se.jsx)("div",{className:"dshr-anno-composer__swatches",role:"radiogroup","aria-label":R,children:S.map(C=>{let E=s.color===C.value;return(0,Se.jsx)("button",{type:"button",role:"radio","aria-checked":E,"aria-label":`${C.label}\u8272`,title:`${C.label}\u8272`,className:`dshr-anno-swatch${E?" is-active":""}`,style:{"--swatch":C.value},onClick:()=>g({color:C.value}),children:C.label},C.id)})})]}),s.style==="highlight"?(0,Se.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Se.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Se.jsx)("span",{children:"\u7B14\u89E6\u7C97\u7EC6"}),(0,Se.jsx)("em",{children:"\u7EC6 / \u4E2D / \u5BBD"})]}),(0,Se.jsx)("div",{className:"dshr-anno-composer__widths",role:"radiogroup","aria-label":"\u7B14\u89E6\u7C97\u7EC6",children:wo.map(C=>{let E=s.width===C.value;return(0,Se.jsxs)("button",{type:"button",role:"radio","aria-checked":E,className:`dshr-anno-width${E?" is-active":""}`,onClick:()=>g({width:C.value}),children:[(0,Se.jsx)("span",{className:"dshr-anno-width__bar",style:{height:Uf(C.value),background:s.color}}),C.label]},C.id)})})]}):null,(0,Se.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Se.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Se.jsx)("span",{children:M}),(0,Se.jsx)("em",{children:s.style==="note"?"\u53EF\u7559\u7A7A\uFF0C\u4EC5\u6807\u8BB0\u4F4D\u7F6E":"\u53EF\u9009"})]}),(0,Se.jsx)("textarea",{ref:h,className:"dshr-anno-composer__textarea",value:s.note,maxLength:Xc,placeholder:N,"aria-label":M,onChange:C=>g({note:C.target.value})}),(0,Se.jsxs)("div",{className:"dshr-anno-composer__counter",children:[s.note.length," / ",Xc]})]}),x?(0,Se.jsxs)("div",{className:"dshr-anno-composer__quote",style:{"--dshr-anno-color":s.color},children:[(0,Se.jsx)("span",{className:"dshr-anno-composer__quote-label",children:"\u9009\u4E2D\u6587\u5B57"}),(0,Se.jsx)("p",{className:"dshr-anno-composer__quote-text",children:x})]}):null,(0,Se.jsxs)("div",{className:`dshr-anno-composer__preview is-${s.style}`,style:{"--dshr-anno-color":s.color},children:[(0,Se.jsx)("span",{className:"dshr-anno-composer__preview-label",children:"\u6548\u679C\u9884\u89C8"}),(0,Se.jsx)("span",{className:"dshr-anno-composer__preview-text",children:x||"\u9009\u4E2D\u7684\u6587\u5B57\u4F1A\u8FD9\u6837\u663E\u793A"})]})]}),(0,Se.jsxs)("footer",{className:"dshr-anno-composer__foot",children:[a?(0,Se.jsx)("button",{type:"button",className:"dshr-anno-btn dshr-anno-btn--danger",onClick:()=>{typeof i=="function"&&i(e||{})},children:"\u5220\u9664"}):null,(0,Se.jsx)("span",{className:"dshr-anno-composer__spacer"}),(0,Se.jsx)("button",{type:"button",className:"dshr-anno-btn",onClick:()=>{typeof n=="function"&&n()},children:"\u53D6\u6D88"}),(0,Se.jsx)("button",{type:"button",className:"dshr-anno-btn dshr-anno-btn--primary",disabled:!T,onClick:p,title:"Ctrl / \u2318 + Enter \u4FDD\u5B58",children:a?"\u4FDD\u5B58\u4FEE\u6539":"\u4FDD\u5B58\u6807\u6CE8"})]})]})})}var wh=360,kh=520;function _h(t){try{return t.toDataURL("image/jpeg",.84)}catch{return""}}function xm(t){let e=Number(t.naturalWidth||t.width)||0,r=Number(t.naturalHeight||t.height)||0;if(!e||!r)return"";let n=Math.min(wh/e,kh/r,1),o=document.createElement("canvas");o.width=Math.max(1,Math.round(e*n)),o.height=Math.max(1,Math.round(r*n));let i=o.getContext("2d");return i.fillStyle="#fbf7ee",i.fillRect(0,0,o.width,o.height),i.drawImage(t,0,0,o.width,o.height),_h(o)}function vm(t){return new Promise(e=>{let r=new Image;r.decoding="async",r.onload=()=>e(r),r.onerror=()=>e(null),r.src=t})}async function ym(t){if(!t||!String(t.type||"").startsWith("image/"))return"";let e=URL.createObjectURL(t);try{let r=await vm(e);return r?xm(r):""}finally{URL.revokeObjectURL(e)}}async function wm(t,e){let r=await ka(t,{signal:e}),n,o,i=()=>{o?.cancel(),r.close()};e?.addEventListener("abort",i,{once:!0});try{if(e?.aborted)throw Hr();let a=await r.pdf.getPage(1);if(e?.aborted)throw Hr();let s=a.getViewport({scale:1}),l=Math.min(wh/s.width,kh/s.height,1.5),d=a.getViewport({scale:l});if(n=document.createElement("canvas"),n.width=Math.max(1,Math.round(d.width)),n.height=Math.max(1,Math.round(d.height)),o=a.render({canvas:n,viewport:d,background:"#ffffff"}),o.onContinue=h=>setTimeout(()=>{e?.aborted?o.cancel():h()},16),await o.promise,e?.aborted)throw Hr();return _h(n)}finally{e?.removeEventListener("abort",i),await r.close(),n&&(n.width=0,n.height=0)}}async function Th(t,{signal:e}={}){if(e?.aborted)throw Hr();if(!t?.blob)return{};let r=String(t.format||"").toLowerCase();try{if(r==="pdf"){let n=await wm(t.blob,e);return n?{cover:n}:{}}if(["epub","mobi","azw","azw3"].includes(r)){let{parseBook:n}=await Promise.resolve().then(()=>(Ds(),Ls)),o=/\.[a-z0-9]+$/iu.test(t.title||"")?t.title:`${t.title||"book"}.${r}`,i=await n(t.blob,{fileName:o,mime:t.blob.type});try{let a="";if(i.cover)try{let s=await fetch(i.cover);a=await ym(await s.blob())}catch{a=""}return{...a?{cover:a}:{},...i.title?{title:i.title}:{},...i.author?{author:i.author}:{},...i.language?{language:i.language}:{}}}finally{i.dispose?.()}}}catch(n){if(e?.aborted)throw Hr();console.warn("[dsh-reader] cover generation failed",t.title,n)}return{}}var Y=require("react/jsx-runtime"),ri="dsh-reader:last-book:v1",Fs="dsh-reader:session-book:v1";function zs(t){let e=t/255;return e<=.03928?e/12.92:((e+.055)/1.055)**2.4}function Bs(t){let e=/^#?([0-9a-f]{6})$/iu.exec(String(t||"").trim());if(!e)return null;let r=e[1];return{r:parseInt(r.slice(0,2),16),g:parseInt(r.slice(2,4),16),b:parseInt(r.slice(4,6),16)}}function km(t){let e=Bs(t);return e?.2126*zs(e.r)+.7152*zs(e.g)+.0722*zs(e.b):1}function _m(t,e,r){let n=Bs(t),o=Bs(e);if(!n||!o)return e;let i=Math.max(0,Math.min(1,r));return`#${bo(n.r*i+o.r*(1-i)).slice(1)}${bo(n.g*i+o.g*(1-i)).slice(1)}${bo(n.b*i+o.b*(1-i)).slice(1)}`}function bo(t){return`#${Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0")}`}function Tm(t){let e=document.createElement("canvas");e.width=32,e.height=32;let r=e.getContext("2d",{willReadFrequently:!0});if(!r)return"";r.drawImage(t,0,0,e.width,e.height);let n;try{n=r.getImageData(0,0,e.width,e.height).data}catch{return""}let o=new Map;for(let a=0;a<n.length;a+=4){let s=n[a+3];if(s<40)continue;let l=n[a],d=n[a+1],h=n[a+2],g=`${l>>5}:${d>>5}:${h>>5}`,f=o.get(g);f||(f={count:0,r:0,g:0,b:0},o.set(g,f)),f.count+=s,f.r+=l*s,f.g+=d*s,f.b+=h*s}let i=null;for(let a of o.values())(!i||a.count>i.count)&&(i=a);return i?bo(i.r/i.count)+bo(i.g/i.count).slice(1)+bo(i.b/i.count).slice(1):""}function Sm(t,e,r){return Math.max(e,Math.min(r,t))}var $s=class extends H.default.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,r){console.error("[dsh-reader]",e,r)}reset=()=>this.setState({error:null});render(){return this.state.error?(0,Y.jsx)("div",{className:"dshr-root",children:(0,Y.jsxs)("div",{className:"dshr-error-panel",children:[(0,Y.jsx)("h3",{children:"\u9605\u8BFB\u5668\u9047\u5230\u4E86\u4E00\u4E2A\u95EE\u9898"}),(0,Y.jsxs)("p",{children:[this.state.error?.message||"\u672A\u77E5\u9519\u8BEF","\u3002\u8FD9\u901A\u5E38\u662F\u6587\u6863\u683C\u5F0F\u6216\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u91CD\u65B0\u6253\u5F00\u6587\u6863\u901A\u5E38\u53EF\u4EE5\u6062\u590D\u3002"]}),(0,Y.jsx)("div",{style:{display:"flex",gap:8,marginTop:14},children:(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:()=>{this.reset(),this.props.onReset?.()},children:"\u8FD4\u56DE\u4E66\u67B6"})})]})}):this.props.children}};function Em(){let[t,e]=H.default.useState(""),r=H.default.useRef(0),n=H.default.useCallback((o,i=2800)=>{window.clearTimeout(r.current),e(String(o)),r.current=window.setTimeout(()=>e(""),i)},[]);return H.default.useEffect(()=>()=>window.clearTimeout(r.current),[]),[t,n]}function Sh(){let[t,e]=H.default.useState([]),[r,n]=H.default.useState(!0),[o,i]=H.default.useState(!1),[a,s]=H.default.useState(!1),[l,d]=H.default.useState("all"),[h,g]=H.default.useState(null),[f,p]=H.default.useState(!1),[S,w]=H.default.useState(""),[x,T]=H.default.useState(Sl),[M,N]=H.default.useState(!1),[R,C]=H.default.useState(!1),[E,L]=H.default.useState(!1),[P,m]=H.default.useState(!1),[_,F]=H.default.useState(!1),[V,z]=H.default.useState(!1),se=H.default.useRef(null),[de,q]=H.default.useState(null),[me,X]=Em(),[D,he]=H.default.useState(0),[$,re]=H.default.useState(null),[ne,ye]=H.default.useState({}),[Q,Be]=H.default.useState(!0),[$e,Pe]=H.default.useState(!1),[ct,Oe]=H.default.useState(null),[ut,u]=H.default.useState(null),[c,A]=H.default.useState(null),[v,oe]=H.default.useState([]),[ue,le]=H.default.useState(!1),[be,Ee]=H.default.useState(null),[Me,te]=H.default.useState(!1),[je,Je]=H.default.useState(null),[et,We]=H.default.useState(null),[De,ge]=H.default.useState(null),[He,Ye]=H.default.useState(""),[tt,xt]=H.default.useState(0),[J,ce]=H.default.useState(""),[Ce,Fe]=H.default.useState(!1),[Bt,Ot]=H.default.useState(0),Jr=H.default.useRef(null),ft=H.default.useRef({timer:0,latest:null}),er=H.default.useRef({token:0,controller:null}),pt=H.default.useRef(null),Qt=H.default.useRef(x),Ae=H.default.useRef(t),sn=H.default.useRef({running:!1,attempted:new Set}),st=H.default.useRef(!1),[wr,Dr]=H.default.useState(null);pt.current=h,Qt.current=x,Ae.current=t;let $t=H.default.useCallback(()=>{er.current.token+=1,er.current.controller?.abort()},[]);H.default.useLayoutEffect(()=>()=>$t(),[h?.record?.id,ut,$t]);let ln=`${x.fontSize}:${x.lineHeight}:${x.fontFamily}:${x.fontWeight}:${x.tocWidth}:${x.contentWidth}:${He?"img":"plain"}:${Bt}`,ir=H.default.useMemo(()=>La(x,He),[x,He]),Gn=H.default.useMemo(()=>{let k=ir["--dshr-reader-bg"]||x.customBackground||"#fbf7ee",O=J&&He?_m(J,k,Number(x.backgroundImageOpacity)||0):k,Le=km(O)*Math.max(.35,Math.min(1.25,Number(x.brightness)||1))<.4?"#f8f5ec":"#17181a";return{"--dshr-immersive-ink":Le,"--dshr-immersive-chip":`color-mix(in srgb, ${O} 58%, transparent)`,"--dshr-immersive-chip-hover":`color-mix(in srgb, ${O} 82%, transparent)`,"--dshr-immersive-border":`color-mix(in srgb, ${Le} 32%, transparent)`}},[J,He,ir,x.customBackground,x.backgroundImageOpacity,x.brightness]),_t=H.default.useCallback(async()=>{try{e(await bi())}catch(k){X(k?.message||"\u8BFB\u53D6\u4E66\u67B6\u5931\u8D25\u3002")}finally{n(!1)}},[X]),mt=H.default.useCallback(async k=>{if(!k){oe([]);return}try{oe(await xl(k))}catch(O){console.warn("[dsh-reader] annotations unavailable",O),oe([])}},[]);H.default.useEffect(()=>{_t()},[_t]),H.default.useEffect(()=>{if(r||h)return;let k=Ae.current.filter(_e=>!_e.cover&&["pdf","epub","mobi","azw","azw3"].includes(_e.format)&&!sn.current.attempted.has(_e.id));if(k.length===0)return;let O=sn.current,ee=new AbortController;O.controller=ee,O.running=!0;let Le=setTimeout(()=>{(async()=>{for(let _e of k){if(ee.signal.aborted)break;if(!O.attempted.has(_e.id))try{let Ge=await yo(_e.id);if(!Ge||ee.signal.aborted)continue;let dt=await Th(Ge,{signal:ee.signal});if(ee.signal.aborted)break;O.attempted.add(_e.id),(dt.cover||dt.title||dt.author||dt.language)&&(await Jn(Ge.id,dt),e(Er=>Er.map(Ar=>Ar.id===Ge.id?{...Ar,...dt}:Ar)))}catch(Ge){if(ee.signal.aborted)break;O.attempted.add(_e.id),console.warn("[dsh-reader] cover generation failed",_e.title,Ge)}}})().finally(()=>{O.controller===ee&&(O.running=!1)})},500);return()=>{clearTimeout(Le),ee.abort()}},[r,h]),H.default.useEffect(()=>{El(x)},[x]),H.default.useEffect(()=>{if(!h||x.readingMode==="book")return;let k=O=>{if(O.defaultPrevented||O.repeat||O.ctrlKey||O.metaKey||O.altKey||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(O.key)||O.target instanceof Element&&O.target.closest('input, textarea, select, [contenteditable="true"], .dshr-modal-mask, .dshr-appearance-panel, .dshr-anno-panel, .dshr-ai, .dshr-selection, .dshr-anno-composer, .dshr-pdf-translation-panel'))return;let ee=window.getSelection?.();if(ee&&!ee.isCollapsed)return;let Le=document.querySelector(".dshr-root .dshr-content")||document.querySelector(".dshr-root .dshr-pdf-scroll");if(!Le)return;O.preventDefault();let _e=Math.max(160,Math.round(Le.clientHeight*.82)),Ge=O.key==="ArrowRight"||O.key==="ArrowDown";Le.scrollBy({top:Ge?_e:-_e,behavior:"smooth"})};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[h,x.readingMode]),H.default.useEffect(()=>{if(!He){ce("");return}let k=!1,O=new Image;return O.onload=()=>{k||ce(Tm(O))},O.onerror=()=>{k||ce("")},O.src=He,()=>{k=!0}},[He]),H.default.useEffect(()=>{let k=!1,O="";if(!x.backgroundImageKey){Ye("");return}return(async()=>{try{let ee=await _l();if(!ee||k)return;O=URL.createObjectURL(ee),Ye(O)}catch{k||Ye("")}})(),()=>{k=!0,O&&URL.revokeObjectURL(O)}},[x.backgroundImageKey,tt]),H.default.useEffect(()=>{if(!ut)return;let k=ee=>{ee?.type==="scroll"&&ee.target instanceof Element&&ee.target.closest(".dshr-pdf-translation-panel")||u(null)},O=ee=>{ee.key==="Escape"&&u(null)};return window.addEventListener("resize",k),window.addEventListener("keydown",O),document.addEventListener("scroll",k,!0),()=>{window.removeEventListener("resize",k),window.removeEventListener("keydown",O),document.removeEventListener("scroll",k,!0)}},[ut]);let Et=H.default.useCallback(async()=>{let k=ft.current.latest;if(k){ft.current.latest=null;try{await xi(k.id,k.progress),e(O=>O.map(ee=>ee.id===k.id?{...ee,progress:k.progress,lastOpenedAt:Date.now()}:ee))}catch{}}},[_t]),bn=H.default.useCallback((k,O)=>{k&&(ye(O),ft.current.latest={id:k,progress:O},!ft.current.timer&&(ft.current.timer=window.setTimeout(()=>{ft.current.timer=0,Et()},700)))},[Et]);H.default.useEffect(()=>()=>{window.clearTimeout(ft.current.timer),Et()},[Et]);let xn=H.default.useCallback(async()=>{s(!0);try{let k=await hl();await _t();let O=[`\u6587\u732E ${k.counts.paper||0}`,`\u4E66\u7C4D ${k.counts.book||0}`];k.counts.document&&O.push(`\u6587\u6863 ${k.counts.document}`),X(k.changed>0?`\u4E66\u5355\u5DF2\u6574\u7406\uFF1A${O.join(" \xB7 ")}`:`\u4E66\u5355\u5DF2\u662F\u6700\u65B0\uFF1A${O.join(" \xB7 ")}`)}catch(k){X(k?.message||"\u81EA\u52A8\u6574\u7406\u5931\u8D25\u3002")}finally{s(!1)}},[_t,X]),sr=H.default.useCallback(async(k,O)=>{let ee=["book","paper","document"],Le=O||ee[(ee.indexOf(k.category||"document")+1)%ee.length];try{await dl(k.id,Le),await _t(),X(`\u300A${k.title||"\u6587\u6863"}\u300B\u5DF2\u5F52\u5165\u300C${Qn(Le)}\u300D\u3002`)}catch(_e){X(_e?.message||"\u4FEE\u6539\u5206\u7C7B\u5931\u8D25\u3002")}},[_t,X]),vn=H.default.useCallback(k=>{T(O=>({...O,...k})),Ot(O=>O+1)},[]),tr=H.default.useCallback(()=>{Jr.current?.click()},[]),yn=H.default.useCallback(async k=>{if(k){if(!String(k.type||"").startsWith("image/")){X("\u8BF7\u9009\u62E9\u56FE\u7247\u6587\u4EF6\uFF08JPG / PNG / WebP\uFF09\u3002");return}Fe(!0);try{let O=k;try{let ee=await createImageBitmap(k),Le=Math.min(1,2400/Math.max(ee.width,ee.height));if(Le<1){let _e=document.createElement("canvas");_e.width=Math.round(ee.width*Le),_e.height=Math.round(ee.height*Le),_e.getContext("2d").drawImage(ee,0,0,_e.width,_e.height);let dt=await new Promise(Er=>_e.toBlob(Er,"image/jpeg",.86));dt&&(O=dt)}ee.close?.()}catch{}await kl(O),T(ee=>({...ee,backgroundImageKey:"reader-background"})),xt(ee=>ee+1),X("\u80CC\u666F\u56FE\u7247\u5DF2\u4FDD\u5B58\uFF0C\u53EF\u8C03\u6574\u900F\u660E\u5EA6\u548C\u6A21\u7CCA\u5EA6\u3002")}catch(O){X(O?.message||"\u80CC\u666F\u56FE\u7247\u4FDD\u5B58\u5931\u8D25\u3002")}finally{Fe(!1)}}},[X]),en=H.default.useCallback(async()=>{try{await Tl(),T(k=>({...k,backgroundImageKey:""})),Ye(""),X("\u5DF2\u79FB\u9664\u80CC\u666F\u56FE\u7247\u3002")}catch(k){X(k?.message||"\u79FB\u9664\u80CC\u666F\u56FE\u7247\u5931\u8D25\u3002")}},[X]),kr=H.default.useCallback(async(k,O={})=>{if(O.rejected){X("\u6CA1\u6709\u53EF\u8BC6\u522B\u7684\u6587\u6863\u3002\u652F\u6301 PDF / EPUB / MOBI / TXT / Markdown / HTML\u3002");return}if(!k?.length)return;i(!0);let ee=[],Le=[];for(let _e of k)try{let Ge=await cl(_e);ee.push(Ge)}catch(Ge){Le.push(`${_e.name}: ${Ge?.message||"\u5BFC\u5165\u5931\u8D25"}`)}await _t(),i(!1),Le.length>0&&X(Le[0],4200),ee.length>0&&(X(ee.length===1?"\u5DF2\u52A0\u5165\u4E66\u67B6\u3002":`\u5DF2\u52A0\u5165 ${ee.length} \u4EFD\u6587\u6863\u3002`),ae(ee[0]))},[_t,X]),lr=H.default.useCallback(async k=>{L(!0);try{let O=await Ol(k);C(!1),await kr([O])}catch(O){X(O?.message||"\u5728\u7EBF\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u94FE\u63A5\u6216\u7A0D\u540E\u91CD\u8BD5\u3002",5200)}finally{L(!1)}},[kr,X]),At=H.default.useCallback(async()=>{if(F(!1),document.fullscreenElement===se.current)try{await document.exitFullscreen()}catch{}},[]),fe=H.default.useCallback(async()=>{if(_){await At();return}F(!0),Be(!1)},[_,At]),y=H.default.useCallback(async()=>{try{document.fullscreenElement===se.current?await document.exitFullscreen():se.current?.requestFullscreen&&await se.current.requestFullscreen()}catch{X("\u6D4F\u89C8\u5668\u963B\u6B62\u4E86\u5168\u5C4F\uFF1B\u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528\u5F53\u524D\u7A97\u53E3\u7684\u6C89\u6D78\u6A21\u5F0F\u3002",3600)}},[X]);H.default.useEffect(()=>{let k=()=>{z(document.fullscreenElement===se.current)};return document.addEventListener("fullscreenchange",k),()=>document.removeEventListener("fullscreenchange",k)},[]),H.default.useEffect(()=>{!h&&_&&At()},[h,_,At]),H.default.useEffect(()=>{if(!_)return;let k=O=>{O.key==="Escape"&&(O.preventDefault(),At())};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[_,At]);let j=H.default.useCallback(()=>{try{localStorage.removeItem(ri)}catch{}try{sessionStorage.removeItem(Fs)}catch{}Dr(null),ft.current.timer&&(window.clearTimeout(ft.current.timer),ft.current.timer=0),Et(),Pe(!1),Oe(null),u(null),A(null),oe([]),le(!1),te(!1),Ee(null),Je(null),We(null),ge(null);let k=pt.current?.book;if(k?.dispose)try{k.dispose()}catch{}g(null),ye({}),re(null),he(0)},[Et]),ae=H.default.useCallback(async k=>{p(!0),w(`\u6B63\u5728\u6253\u5F00\u300A${k.title||"\u6587\u6863"}\u300B\u2026`);try{let O=await yo(k.id);if(!O?.blob)throw new Error("\u4E66\u67B6\u4E2D\u627E\u4E0D\u5230\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u53EF\u80FD\u5DF2\u88AB\u6E05\u7406\u3002\u8BF7\u91CD\u65B0\u5BFC\u5165\u3002");Dr(null);try{localStorage.setItem(ri,O.id)}catch{}try{sessionStorage.setItem(Fs,O.id)}catch{}if((O.format||Sn(O.title))==="pdf"){O.blob.size>24*1024*1024&&w(`\u6B63\u5728\u6253\u5F00\u5927\u578B PDF\u300A${O.title||k.title||"\u6587\u6863"}\u300B\u2026`);let Ar=O.blob,Br=O.progress||{},Ko={...O,blob:null,blobName:O.blob.name||""};g({kind:"pdf",record:Ko,data:Ar}),ye({page:Br.page||1,pages:Br.pages||0,percent:Br.percent||0}),he(0),re(null),Be(!1),le(!1),ge(null),await mt(O.id),p(!1),await xi(O.id),await _t();return}let{parseBook:Le}=await Promise.resolve().then(()=>(Ds(),Ls)),_e=await Le(O.blob,{fileName:O.title??k.title,mime:O.blob.type}),Ge={...O,title:_e.title||O.title,author:_e.author||O.author,language:_e.language||O.language};(Ge.title!==O.title||Ge.author!==O.author||Ge.language!==O.language)&&(await Jn(O.id,{title:Ge.title,author:Ge.author,language:Ge.language}),await _t());let dt=O.progress||{},Er=Sm(Number(dt.chapter)||0,0,Math.max(0,_e.chapters.length-1));g({kind:"flow",record:Ge,book:_e}),he(Er),re({chapter:Er,scrollRatio:Number(dt.scrollRatio)||0}),ye({chapter:Er,chapters:_e.chapters.length,percent:Number(dt.percent)||(_e.chapters.length?(Er+1)/_e.chapters.length*100:0)}),Be(!0),le(!1),We(null),await mt(O.id),p(!1),Nl(_e.chapters.slice(0,3).map(Ar=>Ar.blocks.map(Br=>Br.text||"").join(" ")).join(" "))&&!Qt.current.autoTranslate&&X("\u68C0\u6D4B\u5230\u5916\u6587\u5185\u5BB9\u3002\u9876\u90E8\u300C\u5B9E\u65F6\u7FFB\u8BD1\u300D\u53EF\u4EE5\u968F\u65F6\u5F00\u542F\u3002",4200)}catch(O){p(!1),X(O?.message||"\u6253\u5F00\u6587\u6863\u5931\u8D25\u3002",5e3)}},[_t,mt,X]);H.default.useEffect(()=>{if(r||h||st.current||Ae.current.length===0)return;st.current=!0;let k="";try{k=localStorage.getItem(ri)||""}catch{}if(!k){Dr(null);return}let O=Ae.current.find(_e=>_e.id===k);if(!O){Dr(null);try{localStorage.removeItem(ri)}catch{}return}let ee=Number(O.size)>24*1024*1024||Number(O.progress?.pages)>300,Le=!1;try{Le=sessionStorage.getItem(Fs)===O.id}catch{}Dr(O),!(ee&&!Le)&&ae(O)},[r,h,ae]),H.default.useEffect(()=>{let k=()=>{document.visibilityState==="hidden"&&Et()};return document.addEventListener("visibilitychange",k),()=>document.removeEventListener("visibilitychange",k)},[Et]);let Ze=H.default.useCallback(async()=>{let k=de;if(k)try{pt.current?.record?.id===k.id&&j(),await ul(k.id),q(null),await _t(),X("\u5DF2\u4ECE\u4E66\u67B6\u5220\u9664\u3002")}catch(O){X(O?.message||"\u5220\u9664\u5931\u8D25\u3002")}},[j,de,_t,X]),vt=H.default.useCallback(async()=>{try{j(),await fl(),await _t(),N(!1),X("\u4E66\u67B6\u5DF2\u6E05\u7A7A\u3002")}catch(k){X(k?.message||"\u6E05\u7A7A\u4E66\u67B6\u5931\u8D25\u3002")}},[j,_t,X]),Xe=H.default.useCallback((k,O)=>{Oe({id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:String(k||"").slice(0,8e3),context:String(O||"").slice(0,1600)}),Pe(!0),le(!1),u(null),A(null)},[]),bt=H.default.useCallback((k,O="web")=>{let ee=String(k||"").trim().slice(0,500);if(!ee)return;let Le=O==="scholar"?`https://scholar.google.com/scholar?q=${encodeURIComponent(ee)}`:`https://www.google.com/search?q=${encodeURIComponent(ee)}`;window.open(Le,"_blank","noopener,noreferrer")||X("\u6D4F\u89C8\u5668\u62E6\u622A\u4E86\u65B0\u7A97\u53E3\u3002\u8BF7\u5141\u8BB8\u5F39\u51FA\u7A97\u53E3\uFF0C\u6216\u590D\u5236\u6587\u5B57\u540E\u624B\u52A8\u641C\u7D22\u3002")},[X]),Ht=H.default.useCallback(async k=>{try{await navigator.clipboard.writeText(k),X("\u5DF2\u590D\u5236\u3002")}catch{X("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u3002")}},[X]),_r=H.default.useCallback(k=>{if($t(),!k?.text?.trim()){u(null);return}u({...k,source:"flow"}),A(null)},[$t]),Fr=H.default.useCallback(k=>{if($t(),!k?.text){u(null);return}u({...k,source:"pdf"}),A(null)},[$t]),yt=H.default.useCallback(async k=>{let O=k?.text?.trim();if(!O)return;$t();let ee=new AbortController,Le=er.current.token,_e=h?.record?.id;er.current.controller=ee;let Ge=()=>!ee.signal.aborted&&Le===er.current.token&&pt.current?.record?.id===_e;A({status:"loading"});try{let dt=await eo([{id:"selection",text:O}],{context:k.context||"",title:h?.book?.title||h?.record?.title||"",signal:ee.signal});Ge()&&A({status:"done",zh:dt.selection||""})}catch(dt){Ge()&&!An(dt)&&A({status:"error",error:dt?.message||"\u7FFB\u8BD1\u5931\u8D25\u3002"})}},[h,$t]),cn=H.default.useCallback(k=>{let O=pt.current?.record?.id;if(!O||!k?.text?.trim())return;let ee=pt.current?.kind==="pdf";Je(null),Ee({bookId:O,kind:ee?"pdf":"flow",style:"highlight",color:"#f5d76e",width:9,note:"",quote:k.text.trim(),chapterId:ee?void 0:pt.current?.book?.chapters?.[D]?.id,chapterIndex:ee?void 0:D,ranges:ee?void 0:k.ranges,page:ee?k.page:void 0,rects:ee?k.pageRects:void 0}),te(!0),u(null),A(null)},[D]),Tr=H.default.useCallback(k=>{k&&(Je(k),Ee({...k}),te(!0))},[]),Sr=H.default.useCallback(k=>{let O=v.find(ee=>ee.id===k);O&&Tr(O)},[v,Tr]),dn=H.default.useCallback(()=>{te(!1),Ee(null),Je(null)},[]),wn=H.default.useCallback(async k=>{if(!(!k||!k.bookId))try{k.id?await yl(k.id,k):await vl(k),await mt(k.bookId),dn(),Ot(O=>O+1),X(k.note?.trim()?"\u6279\u6CE8\u5DF2\u4FDD\u5B58\u3002":"\u6807\u8BB0\u5DF2\u4FDD\u5B58\u3002")}catch(O){X(O?.message||"\u4FDD\u5B58\u6279\u6CE8\u5931\u8D25\u3002")}},[dn,mt,X]),Xo=H.default.useCallback(async k=>{if(k?.id)try{await wl(k.id),await mt(pt.current?.record?.id),dn(),Ot(O=>O+1),X("\u6279\u6CE8\u5DF2\u5220\u9664\u3002")}catch(O){X(O?.message||"\u5220\u9664\u6279\u6CE8\u5931\u8D25\u3002")}},[dn,mt,X]),ni=H.default.useCallback(k=>{if(!k)return;if(k.kind==="pdf"){ge({id:k.id,page:k.page,token:Date.now()}),le(!1);return}let O=Number.isFinite(k.chapterIndex)?k.chapterIndex:0;he(O),re(null),We({id:k.id,blockId:k.ranges?.[0]?.blockId,token:Date.now()}),le(!1)},[]),zr=H.default.useCallback(k=>{he(k),re(null)},[]);function oi(k){if(k.button!==0)return;k.preventDefault();let O=k.clientX,ee=Number(Qt.current.tocWidth)||260,Le=document.body.style.cursor,_e=document.body.style.userSelect;document.body.style.cursor="col-resize",document.body.style.userSelect="none",document.body.classList.add("dshr-toc-resizing");let Ge=Er=>{let Ar=Math.max(180,Math.min(520,Math.round(ee+Er.clientX-O)));T(Br=>({...Br,tocWidth:Ar}))},dt=()=>{window.removeEventListener("pointermove",Ge),window.removeEventListener("pointerup",dt),window.removeEventListener("pointercancel",dt),document.body.style.cursor=Le,document.body.style.userSelect=_e,document.body.classList.remove("dshr-toc-resizing")};window.addEventListener("pointermove",Ge),window.addEventListener("pointerup",dt),window.addEventListener("pointercancel",dt)}let cr=h?.book?.title||h?.record?.title||h?.record?.blob?.name||h?.record?.blobName||"",ai=h?.book?.author||h?.record?.author||"",Vo=h?h.kind==="pdf"?ne.pages?`\u7B2C ${ne.page||1} / ${ne.pages} \u9875`:"PDF \u6587\u6863":`\u7B2C ${(D||0)+1} / ${h.book.chapters.length} \u7AE0`:"",kn=h?h.kind==="pdf"?ne.pages>0?(ne.page||1)/ne.pages*100:0:(D+1)/Math.max(1,h.book.chapters.length)*100:0;return(0,Y.jsx)($s,{onReset:j,children:(0,Y.jsxs)("div",{ref:se,className:`dshr-root${_?" is-immersive":""}`,style:{...ir,...Gn,"--dshr-font-size":`${x.fontSize}px`,"--dshr-line-height":String(x.lineHeight),"--dshr-toc-width":`${x.tocWidth}px`},"data-reader-background":x.backgroundPreset,"data-hide-translations":x.hideTranslations?"true":"false","data-reading-mode":x.readingMode||"scroll",children:[(0,Y.jsx)("input",{ref:Jr,type:"file",accept:"image/*",className:"dshr-sr-only",tabIndex:-1,onChange:k=>{let O=k.target.files?.[0];k.target.value="",yn(O)}}),h?(0,Y.jsxs)("div",{className:"dshr-reader",children:[(0,Y.jsxs)("div",{className:"dshr-topbar",style:{position:"relative"},children:[(0,Y.jsx)("div",{className:"dshr-progress","aria-hidden":"true",children:(0,Y.jsx)("i",{style:{"--p":`${Math.min(100,kn)}%`}})}),(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:j,title:"\u8FD4\u56DE\u4E66\u67B6","aria-label":"\u8FD4\u56DE\u4E66\u67B6",children:(0,Y.jsx)(Ys,{size:17})}),(0,Y.jsxs)("div",{className:"dshr-topbar__title",children:[(0,Y.jsx)("strong",{title:cr,children:cr}),(0,Y.jsx)("span",{children:[ai,Zn(h.record?.format),Vo].filter(Boolean).join(" \xB7 ")})]}),(0,Y.jsxs)("div",{className:"dshr-topbar__tools",children:[h.kind==="flow"?(0,Y.jsx)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${Q?"dshr-btn--outline":""}`,onClick:()=>Be(k=>!k),title:"\u76EE\u5F55","aria-label":"\u76EE\u5F55","aria-pressed":Q,children:(0,Y.jsx)(ui,{size:16})}):null,(0,Y.jsxs)("div",{className:"dshr-topbar__mode",role:"group","aria-label":"\u7FFB\u4E66\u65B9\u5F0F",children:[(0,Y.jsx)("button",{type:"button",className:`dshr-topbar__mode-btn${x.readingMode!=="book"?" is-active":""}`,onClick:()=>T(k=>({...k,readingMode:"scroll"})),"aria-pressed":x.readingMode!=="book",title:"\u8FDE\u7EED\u6EDA\u52A8\u9605\u8BFB",children:(0,Y.jsx)("span",{children:"\u6EDA\u52A8"})}),(0,Y.jsx)("button",{type:"button",className:`dshr-topbar__mode-btn${x.readingMode==="book"?" is-active":""}`,onClick:()=>T(k=>({...k,readingMode:"book"})),"aria-pressed":x.readingMode==="book",title:"\u6A2A\u7248\u7EB8\u8D28\u4E66\u7FFB\u9875",children:(0,Y.jsx)("span",{children:"\u6A2A\u7248"})}),x.readingMode==="book"?(0,Y.jsx)("select",{className:"dshr-topbar__animation","aria-label":"\u7FFB\u9875\u52A8\u753B",value:x.bookAnimation||"slide",onChange:k=>T(O=>({...O,bookAnimation:k.target.value})),children:zc.map(k=>(0,Y.jsx)("option",{value:k.id,children:k.label},k.id))}):null]}),(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon",onClick:()=>{fe()},title:"\u6C89\u6D78\u6A21\u5F0F\uFF08\u9690\u85CF\u5DE5\u5177\u680F\u4E0E\u4FA7\u8FB9\u76EE\u5F55\uFF09","aria-label":"\u8FDB\u5165\u6C89\u6D78\u6A21\u5F0F",children:(0,Y.jsx)(fi,{size:16})}),(0,Y.jsxs)("button",{type:"button",className:"dshr-switch",role:"switch","aria-checked":x.autoTranslate,onClick:()=>T(k=>({...k,autoTranslate:!k.autoTranslate,...h.kind==="pdf"&&!k.autoTranslate?{hideTranslations:!1}:{}})),title:"\u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1",children:[(0,Y.jsx)("span",{className:"dshr-switch__track"}),(0,Y.jsx)("span",{style:{whiteSpace:"nowrap"},children:"\u5B9E\u65F6\u7FFB\u8BD1"})]}),(0,Y.jsx)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${x.hideTranslations?"dshr-btn--outline":""}`,onClick:()=>T(k=>({...k,hideTranslations:!k.hideTranslations})),title:x.hideTranslations?"\u663E\u793A\u4E2D\u6587\u8BD1\u6587":"\u53EA\u770B\u539F\u6587\uFF08\u9690\u85CF\u5DF2\u7FFB\u8BD1\u5185\u5BB9\uFF09","aria-label":x.hideTranslations?"\u663E\u793A\u4E2D\u6587\u8BD1\u6587":"\u53EA\u770B\u539F\u6587\uFF0C\u9690\u85CF\u8BD1\u6587","aria-pressed":x.hideTranslations,children:x.hideTranslations?(0,Y.jsx)(sl,{size:16}):(0,Y.jsx)(il,{size:16})}),(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon",onClick:()=>{m(!0),u(null)},title:"\u5B57\u4F53\u3001\u80CC\u666F\u4E0E\u7559\u767D","aria-label":"\u9605\u8BFB\u5916\u89C2",children:(0,Y.jsx)(sa,{size:16})}),(0,Y.jsxs)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${ue?"dshr-btn--outline":""}`,onClick:()=>{le(k=>!k),Pe(!1),u(null)},title:"\u6279\u6CE8\u4E0E\u4FBF\u7B7E","aria-label":`\u6279\u6CE8\u4E0E\u4FBF\u7B7E\uFF0C\u5171 ${v.length} \u6761`,children:[(0,Y.jsx)(ia,{size:16}),v.length>0?(0,Y.jsx)("span",{className:"dshr-count-badge",children:v.length>99?"99+":v.length}):null]}),(0,Y.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary dshr-btn--sm",onClick:()=>Xe("",""),title:"\u6253\u5F00 AI \u9605\u8BFB\u52A9\u624B",children:[(0,Y.jsx)(hn,{size:14})," AI"]}),(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:()=>N(!0),title:"\u9605\u8BFB\u8BBE\u7F6E","aria-label":"\u9605\u8BFB\u8BBE\u7F6E",children:(0,Y.jsx)(ra,{size:16})})]})]}),(0,Y.jsxs)("div",{className:"dshr-body",children:[h.kind==="flow"?(0,Y.jsxs)("aside",{className:`dshr-toc${Q?"":" is-closed"}`,"aria-label":"\u76EE\u5F55",children:[(0,Y.jsxs)("div",{className:"dshr-toc__head",children:[(0,Y.jsx)("strong",{children:"\u76EE\u5F55"}),(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost",onClick:()=>Be(!1),"aria-label":"\u6536\u8D77\u76EE\u5F55",children:(0,Y.jsx)(hr,{size:14})})]}),(0,Y.jsx)("div",{className:"dshr-toc__list",children:h.book.chapters.map((k,O)=>(0,Y.jsx)("button",{type:"button",className:`dshr-toc__item${O===D?" is-active":""}`,onClick:()=>zr(O),title:k.title,children:k.title||`\u7B2C ${O+1} \u7AE0`},k.id||O))}),(0,Y.jsx)("div",{className:"dshr-toc__resizer",role:"separator","aria-orientation":"vertical","aria-label":"\u62D6\u52A8\u8C03\u6574\u76EE\u5F55\u5BBD\u5EA6",title:"\u62D6\u52A8\u8C03\u6574\u76EE\u5F55\u5BBD\u5EA6\uFF1B\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4",onPointerDown:oi,onDoubleClick:()=>T(k=>({...k,tocWidth:260}))})]}):null,h.kind==="pdf"?(0,Y.jsx)(gc,{data:h.data,documentId:h.record.id,fileName:cr,initialPage:h.record.progress?.page||1,autoTranslate:x.autoTranslate,hideTranslations:x.hideTranslations,paged:x.readingMode==="book",onHideTranslations:()=>T(k=>({...k,hideTranslations:!0})),annotations:v,onOpenAnnotation:Sr,focusAnnotation:De,onReady:({pageCount:k})=>ye(O=>({...O,page:O.page||1,pages:k,percent:k>0?(O.page||1)/k*100:O.percent||0})),onPageChange:k=>{let O=ne.pages||0,ee={...ne,page:k,pages:O,percent:O>0?k/O*100:0};ye(ee),bn(h.record.id,ee)},onSelection:Fr},h.record.id):(0,Y.jsx)(Kl,{book:h.book,chapterIndex:D,onChapterChange:zr,settings:x,restore:$,onRestored:()=>re(null),onSelection:_r,onProgress:k=>{ye(k),bn(h.record.id,k)},annotations:v,onOpenAnnotation:Sr,focusAnnotation:et,layoutVersion:ln}),$e?(0,Y.jsx)(bc,{open:$e,onClose:()=>Pe(!1),seed:ct,onGoogle:bt,onToast:X}):null,ue?(0,Y.jsx)(Gc,{open:ue,annotations:v,book:h.book||h.record,onClose:()=>le(!1),onOpenAnnotation:Sr,onJump:ni,onDelete:k=>{Xo(k)}}):null]}),_?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)("div",{className:"dshr-immersive-controls",children:[(0,Y.jsx)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>{y()},title:V?"\u9000\u51FA\u5168\u5C4F\uFF08Esc\uFF09":"\u8FDB\u5165\u5168\u5C4F","aria-label":V?"\u9000\u51FA\u5168\u5C4F":"\u8FDB\u5165\u5168\u5C4F","aria-pressed":V,children:V?(0,Y.jsx)(ol,{size:15}):(0,Y.jsx)(fi,{size:15})}),(0,Y.jsxs)("button",{type:"button",className:"dshr-immersive-btn dshr-immersive-btn--exit",onClick:()=>{At()},title:"\u9000\u51FA\u6C89\u6D78\u6A21\u5F0F\uFF08Esc\uFF09",children:[(0,Y.jsx)(hr,{size:14})," \u9000\u51FA\u6C89\u6D78"]})]}),h.kind==="flow"&&!Q?(0,Y.jsx)("button",{type:"button",className:"dshr-immersive-toc",onClick:()=>Be(!0),title:"\u6253\u5F00\u76EE\u5F55","aria-label":"\u6253\u5F00\u76EE\u5F55",children:(0,Y.jsx)(ui,{size:15})}):null]}):null,(0,Y.jsx)(Pc,{enabled:x.readingMode==="book",animation:x.bookAnimation,bookMode:!0,bookFrame:h.kind==="flow",pdfMode:h.kind==="pdf",frameTop:_?0:52,frameLeft:h.kind==="flow"&&Q?x.tocWidth:0,leftOffset:h.kind==="flow"&&Q?x.tocWidth+12:12,readerKey:`${h.record.id}:${h.kind}:${D}`,canPrevChapter:h.kind==="flow"&&D>0,canNextChapter:h.kind==="flow"&&D<(h.book?.chapters?.length||1)-1,onPrevChapter:()=>zr(Math.max(0,D-1)),onNextChapter:()=>zr(Math.min((h.book?.chapters?.length||1)-1,D+1))})]}):(0,Y.jsx)(Il,{books:t,loading:r,resumeBook:wr,onResume:k=>{ae(k)},importing:o,organizing:a,categoryFilter:l,onCategoryFilter:d,onAutoOrganize:()=>{xn()},onImport:kr,onOpen:k=>{ae(k)},onDelete:k=>q(k),onCycleCategory:(k,O)=>{sr(k,O)},onSettings:()=>N(!0),onOnlineImport:()=>C(!0)}),f?(0,Y.jsx)("div",{className:"dshr-modal-mask",style:{background:"color-mix(in srgb, var(--dshr-bg) 76%, transparent)",backdropFilter:"blur(5px)"},children:(0,Y.jsxs)("div",{className:"dshr-loading",children:[(0,Y.jsx)("div",{className:"dshr-loading__ring"}),(0,Y.jsx)("span",{children:S})]})}):null,ut&&!$e&&!Me?(0,Y.jsx)(xc,{selection:ut,translation:c,onTranslate:k=>{yt(k)},onAnnotate:cn,onExplain:k=>Xe(k.text,k.context),onGoogle:bt,onCopy:Ht,onClose:()=>{u(null),A(null)},onRetry:()=>{yt(ut)}}):null,(0,Y.jsx)(kc,{open:R,busy:E,onClose:()=>{E||C(!1)},onSubmit:k=>{lr(k)}}),M?(0,Y.jsx)(vc,{settings:x,onChange:T,onClose:()=>N(!1),onOpenAppearance:()=>{N(!1),m(!0)},onClearLibrary:()=>{vt()}}):null,P?(0,Y.jsx)(Uc,{open:P,settings:x,backgroundImageUrl:He,onChange:vn,onPickBackgroundImage:tr,onClearBackgroundImage:()=>{en()},onClose:()=>m(!1)}):null,de?(0,Y.jsx)(yc,{book:de,onCancel:()=>q(null),onConfirm:()=>{Ze()}}):null,Me&&be?(0,Y.jsx)(Yc,{open:Me,draft:be,mode:je?"edit":"create",onClose:dn,onSave:k=>{wn(k)},onDelete:je?()=>{Xo(je)}:void 0}):null,(0,Y.jsx)(wc,{message:me})]})})}var Eh=String.raw`
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
.dshr-library__inner { width: min(1120px, 100%); margin: 0 auto; padding: 34px 40px 80px; }
.dshr-hero { display: flex; align-items: flex-end; justify-content: space-between; gap: 26px; margin: 4px 0 28px; }
.dshr-hero__eyebrow { display: flex; align-items: center; gap: 8px; color: var(--dshr-brand); font-size: 12px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
.dshr-hero h1 { margin: 10px 0 7px; font: 650 34px/1.15 var(--dshr-serif); letter-spacing: -.02em; }
.dshr-hero p { margin: 0; max-width: 620px; color: var(--dshr-fg-2); font-size: 13.5px; line-height: 1.7; }
.dshr-hero__actions { display: flex; gap: 10px; flex: 0 0 auto; padding-bottom: 4px; }
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
.dshr-library__tabs { display: flex; align-items: center; gap: 5px; flex-wrap: wrap; margin: 0 2px 16px; }
.dshr-library__tab {
  display: inline-flex; align-items: center; gap: 6px; height: 29px; padding: 0 11px;
  border: 1px solid var(--dshr-border); border-radius: 999px; background: var(--dshr-layer-2);
  color: var(--dshr-fg-2); font-size: 12px; transition: background .15s ease, color .15s ease, border-color .15s ease;
}
.dshr-library__tab:hover { border-color: var(--dshr-border-strong); color: var(--dshr-fg); }
.dshr-library__tab.is-active { background: var(--dshr-brand); color: var(--dshr-on-brand); border-color: transparent; font-weight: 600; }
.dshr-library__tab span { font-size: 10.5px; opacity: .72; }
.dshr-library__tabs-hint { margin-left: auto; color: var(--dshr-fg-3); font-size: 10.5px; }
.dshr-books { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 14px; }
.dshr-book__badges { position: absolute; top: 8px; right: 8px; display: flex; align-items: center; gap: 3px; }
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
.dshr-book__badges .dshr-book__delete { position: static; opacity: 0; pointer-events: none; transition: opacity .15s ease; }
.dshr-book:hover .dshr-book__badges .dshr-book__delete,
.dshr-book:focus-within .dshr-book__badges .dshr-book__delete { opacity: 1; pointer-events: auto; }
.dshr-count-badge {
  position: absolute; top: 2px; right: 2px; min-width: 14px; height: 14px; padding: 0 3px;
  border-radius: 999px; background: var(--dshr-brand); color: var(--dshr-on-brand);
  font-size: 8.5px; line-height: 14px; text-align: center; font-weight: 700;
}
.dshr-book {
  position: relative; display: flex; gap: 13px; min-height: 134px; padding: 15px;
  text-align: left; border-radius: var(--dshr-radius); border: 1px solid var(--dshr-border);
  background: var(--dshr-layer-2); transition: border-color .16s ease, box-shadow .16s ease, transform .16s ease;
}
.dshr-book:hover { border-color: var(--dshr-border-strong); box-shadow: 0 8px 26px rgba(15, 23, 42, .07); transform: translateY(-1px); }
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
  overflow-wrap: anywhere; word-break: break-word; padding-right: 68px;
}
.dshr-book__meta { color: var(--dshr-fg-3); font-size: 11.5px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.dshr-book__foot { margin-top: auto; display: flex; align-items: center; justify-content: space-between; gap: 8px; color: var(--dshr-fg-3); font-size: 11px; }
.dshr-book__progress { width: 100%; height: 3px; border-radius: 999px; background: var(--dshr-layer-3); overflow: hidden; margin-top: 7px; }
.dshr-book__progress > i { display: block; height: 100%; width: var(--p, 0%); background: var(--dshr-brand); border-radius: inherit; }
.dshr-book__delete {
  position: absolute; top: 8px; right: 8px; opacity: 0; transition: opacity .15s ease;
}
.dshr-book:hover .dshr-book__delete, .dshr-book:focus-within .dshr-book__delete { opacity: 1; }
.dshr-empty-books { padding: 28px 6px; color: var(--dshr-fg-3); font-size: 13px; }
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
.dshr-paged-hint {
  position: absolute; bottom: 50px; left: 50%; transform: translateX(-50%); z-index: 2;
  padding: 5px 12px; border: 1px solid color-mix(in srgb, var(--dshr-brand) 34%, transparent);
  border-radius: 30px; background: color-mix(in srgb, var(--dshr-bg) 88%, transparent);
  color: var(--dshr-brand); backdrop-filter: blur(8px); font: 11.5px/1.4 var(--dshr-sans);
  pointer-events: none; animation: dshr-page-hint-in .18s ease-out;
}
@keyframes dshr-page-hint-in { from { opacity: 0; transform: translate(-50%, 4px); } to { opacity: 1; transform: translate(-50%, 0); } }
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
  .dshr-library__tabs-hint { display: none; }
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
  .dshr-library__tabs { gap: 4px; }
  .dshr-library__tab { padding: 0 9px; }
}
@media (prefers-reduced-motion: reduce) {
  .dshr-root *, .dshr-root *::before, .dshr-root *::after { animation-duration: .001ms !important; transition-duration: .001ms !important; scroll-behavior: auto !important; }
}
`;var Ah=String.raw`
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
`;var jn=require("react/jsx-runtime"),Am="dsh-reader",Nm=["slots","layout"],Hs="reader";function Cm({size:t=18}){return(0,jn.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,jn.jsx)("path",{d:"M4 5.4A2.4 2.4 0 0 1 6.4 3H20v16.1H6.4A2.4 2.4 0 0 0 4 21.5V5.4Z",stroke:"currentColor",strokeWidth:"1.65",strokeLinejoin:"round"}),(0,jn.jsx)("path",{d:"M4 18.4a2.4 2.4 0 0 1 2.4-2.3H20",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round"}),(0,jn.jsx)("path",{d:"M8.2 7h7.6M8.2 10.2h4.6",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round"}),(0,jn.jsx)("circle",{cx:"17.2",cy:"18.6",r:"2.1",fill:"currentColor",opacity:".9"})]})}function Im(t){t.effect(()=>{let e=document.createElement("style");return e.dataset.dshReader="styles",e.textContent=`${Eh}
${fc}
${qi}
${Ah}`,document.head.appendChild(e),()=>e.remove()},"dsh-reader: styles"),t.slots.inject("main",function*(){yield t.slots.register({name:"main",key:Hs},Sh)}),t.slots.inject("sidebar.panellist",()=>t.slots.register({name:"sidebar.panellist",id:Hs,order:10,label:()=>"\u9605\u8BFB"},Cm))}

return module.exports;
}});

window.__ModuleLoader__.load({ id: "dsh-reader", factory: (require) => {
var module = { exports: {} }; var exports = module.exports;
var Ap=Object.create;var Za=Object.defineProperty;var Cp=Object.getOwnPropertyDescriptor;var Ip=Object.getOwnPropertyNames;var Rp=Object.getPrototypeOf,Mp=Object.prototype.hasOwnProperty;var kr=(t,e,r)=>()=>{if(r)throw r[0];try{return t&&(e=t(t=0)),e}catch(n){throw r=[n],n}};var gs=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}},uc=(t,e)=>{for(var r in e)Za(t,r,{get:e[r],enumerable:!0})},hc=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Ip(e))!Mp.call(t,o)&&o!==r&&Za(t,o,{get:()=>e[o],enumerable:!(n=Cp(e,o))||n.enumerable});return t};var It=(t,e,r)=>(r=t!=null?Ap(Rp(t)):{},hc(e||!t||!t.__esModule?Za(r,"default",{value:t,enumerable:!0}):r,t)),Pp=t=>hc(Za({},"__esModule",{value:!0}),t);function Vg(t,e){return qu(t,{i:2},e&&e.out,e&&e.dictionary)}function Xu(t,e){return qu(t.subarray(Xg(t,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}function Zg(t,e){if(e){for(var r="",n=0;n<t.length;n+=16384)r+=String.fromCharCode.apply(null,t.subarray(n,n+16384));return r}else{if(ml)return ml.decode(t);var o=Yg(t),a=o.s,r=o.r;return r.length&&sr(8),a}}function Vu(t,e){for(var r={},n=t.length-22;Or(t,n)!=101010256;--n)(!n||t.length-n>65558)&&sr(13);var o=gn(t,n+8);if(!o)return{};var a=Or(t,n+16),i=Or(t,n-20)==117853008;if(i){var s=Or(t,n-12);i=Or(t,s)==101075792,i&&(o=Or(t,s+32),a=Or(t,s+48))}for(var l=e&&e.filter,d=0;d<o;++d){var h=Jg(t,a,i),p=h[0],u=h[1],g=h[2],w=h[3],b=h[4],S=h[5],y=Qg(t,S);a=b,(!l||l({name:w,size:u,originalSize:g,compression:p}))&&(p?p==8?r[w]=Vg(t.subarray(y,y+u),{out:new Sr(g)}):sr(14,"unknown compression type "+p):r[w]=bl(t,y,y+u))}return r}var Sr,$o,zg,Bu,$u,Bg,Hu,Uu,Wu,$g,ju,Hg,Yv,gl,On,st,ka,_a,st,st,st,st,Gu,st,Ug,Wg,hl,en,pl,jg,bl,Gg,sr,qu,qg,gn,Or,fl,Xg,ml,Kg,Yg,Qg,Jg,em,xl=kr(()=>{Sr=Uint8Array,$o=Uint16Array,zg=Int32Array,Bu=new Sr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),$u=new Sr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Bg=new Sr([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Hu=function(t,e){for(var r=new $o(31),n=0;n<31;++n)r[n]=e+=1<<t[n-1];for(var o=new zg(r[30]),n=1;n<30;++n)for(var a=r[n];a<r[n+1];++a)o[a]=a-r[n]<<5|n;return{b:r,r:o}},Uu=Hu(Bu,2),Wu=Uu.b,$g=Uu.r;Wu[28]=258,$g[258]=28;ju=Hu($u,0),Hg=ju.b,Yv=ju.r,gl=new $o(32768);for(st=0;st<32768;++st)On=(st&43690)>>1|(st&21845)<<1,On=(On&52428)>>2|(On&13107)<<2,On=(On&61680)>>4|(On&3855)<<4,gl[st]=((On&65280)>>8|(On&255)<<8)>>1;ka=(function(t,e,r){for(var n=t.length,o=0,a=new $o(e);o<n;++o)t[o]&&++a[t[o]-1];var i=new $o(e);for(o=1;o<e;++o)i[o]=i[o-1]+a[o-1]<<1;var s;if(r){s=new $o(1<<e);var l=15-e;for(o=0;o<n;++o)if(t[o])for(var d=o<<4|t[o],h=e-t[o],p=i[t[o]-1]++<<h,u=p|(1<<h)-1;p<=u;++p)s[gl[p]>>l]=d}else for(s=new $o(n),o=0;o<n;++o)t[o]&&(s[o]=gl[i[t[o]-1]++]>>15-t[o]);return s}),_a=new Sr(288);for(st=0;st<144;++st)_a[st]=8;for(st=144;st<256;++st)_a[st]=9;for(st=256;st<280;++st)_a[st]=7;for(st=280;st<288;++st)_a[st]=8;Gu=new Sr(32);for(st=0;st<32;++st)Gu[st]=5;Ug=ka(_a,9,1),Wg=ka(Gu,5,1),hl=function(t){for(var e=t[0],r=1;r<t.length;++r)t[r]>e&&(e=t[r]);return e},en=function(t,e,r){var n=e/8|0;return(t[n]|t[n+1]<<8)>>(e&7)&r},pl=function(t,e){var r=e/8|0;return(t[r]|t[r+1]<<8|t[r+2]<<16)>>(e&7)},jg=function(t){return(t+7)/8|0},bl=function(t,e,r){return(e==null||e<0)&&(e=0),(r==null||r>t.length)&&(r=t.length),new Sr(t.subarray(e,r))},Gg=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],sr=function(t,e,r){var n=new Error(e||Gg[t]);if(n.code=t,Error.captureStackTrace&&Error.captureStackTrace(n,sr),!r)throw n;return n},qu=function(t,e,r,n){var o=t.length,a=n?n.length:0;if(!o||e.f&&!e.l)return r||new Sr(0);var i=!r,s=i||e.i!=2,l=e.i;i&&(r=new Sr(o*3));var d=function(nt){var f=r.length;if(nt>f){var c=new Sr(Math.max(f*2,nt));c.set(r),r=c}},h=e.f||0,p=e.p||0,u=e.b||0,g=e.l,w=e.d,b=e.m,S=e.n,y=o*8;do{if(!g){h=en(t,p,1);var k=en(t,p+1,3);if(p+=3,k)if(k==1)g=Ug,w=Wg,b=9,S=5;else if(k==2){var C=en(t,p,31)+257,O=en(t,p+10,15)+4,R=C+en(t,p+5,31)+1;p+=14;for(var m=new Sr(R),M=new Sr(19),F=0;F<O;++F)M[Bg[F]]=en(t,p+F*3,7);p+=O*3;for(var L=hl(M),$=(1<<L)-1,J=ka(M,L,1),F=0;F<R;){var se=J[en(t,p,$)];p+=se&15;var E=se>>4;if(E<16)m[F++]=E;else{var ne=0,ce=0;for(E==16?(ce=3+en(t,p,3),p+=2,ne=m[F-1]):E==17?(ce=3+en(t,p,7),p+=3):E==18&&(ce=11+en(t,p,127),p+=7);ce--;)m[F++]=ne}}var G=m.subarray(0,C),oe=m.subarray(C);b=hl(G),S=hl(oe),g=ka(G,b,1),w=ka(oe,S,1)}else sr(1);else{var E=jg(p)+4,A=t[E-4]|t[E-3]<<8,T=E+A;if(T>o){l&&sr(0);break}s&&d(u+A),r.set(t.subarray(E,T),u),e.b=u+=A,e.p=p=T*8,e.f=h;continue}if(p>y){l&&sr(0);break}}s&&d(u+131072);for(var ue=(1<<b)-1,P=(1<<S)-1,B=p;;B=p){var ne=g[pl(t,p)&ue],V=ne>>4;if(p+=ne&15,p>y){l&&sr(0);break}if(ne||sr(2),V<256)r[u++]=V;else if(V==256){B=p,g=null;break}else{var he=V-254;if(V>264){var F=V-257,Z=Bu[F];he=en(t,p,(1<<Z)-1)+Wu[F],p+=Z}var Pe=w[pl(t,p)&P],de=Pe>>4;Pe||sr(3),p+=Pe&15;var oe=Hg[de];if(de>3){var Z=$u[de];oe+=pl(t,p)&(1<<Z)-1,p+=Z}if(p>y){l&&sr(0);break}s&&d(u+131072);var _e=u+he;if(u<oe){var Ve=a-oe,Ue=Math.min(oe,_e);for(Ve+u<0&&sr(3);u<Ue;++u)r[u]=n[Ve+u]}for(;u<_e;++u)r[u]=r[u-oe]}}e.l=g,e.p=B,e.b=u,e.f=h,g&&(h=1,e.m=b,e.d=w,e.n=S)}while(!h);return u!=r.length&&i?bl(r,0,u):r.subarray(0,u)},qg=new Sr(0),gn=function(t,e){return t[e]|t[e+1]<<8},Or=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},fl=function(t,e){return Or(t,e)+Or(t,e+4)*4294967296},Xg=function(t,e){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&sr(6,"invalid zlib data"),(t[1]>>5&1)==+!e&&sr(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};ml=typeof TextDecoder<"u"&&new TextDecoder,Kg=0;try{ml.decode(qg,{stream:!0}),Kg=1}catch{}Yg=function(t){for(var e="",r=0;;){var n=t[r++],o=(n>127)+(n>223)+(n>239);if(r+o>t.length)return{s:e,r:bl(t,r-1)};o?o==3?(n=((n&15)<<18|(t[r++]&63)<<12|(t[r++]&63)<<6|t[r++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):o&1?e+=String.fromCharCode((n&31)<<6|t[r++]&63):e+=String.fromCharCode((n&15)<<12|(t[r++]&63)<<6|t[r++]&63):e+=String.fromCharCode(n)}};Qg=function(t,e){return e+30+gn(t,e+26)+gn(t,e+28)},Jg=function(t,e,r){var n=gn(t,e+28),o=gn(t,e+30),a=Zg(t.subarray(e+46,e+46+n),!(gn(t,e+8)&2048)),i=e+46+n,s=em(t,i,o,r,Or(t,e+20),Or(t,e+24),Or(t,e+42)),l=s[0],d=s[1],h=s[2];return[gn(t,e+10),l,d,a,i+o+gn(t,e+32),h]},em=function(t,e,r,n,o,a,i){var s=o==4294967295,l=a==4294967295,d=i==4294967295,h=e+r,p=s+l+d;if(n&&p){for(;e+4<h;e+=4+gn(t,e+2))if(gn(t,e)==1)return[s?fl(t,e+4+8*l):o,l?fl(t,e+4):a,d?fl(t,e+4+8*(l+s)):i,1];n<2&&sr(13)}return[o,a,i,0]}});function dr(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return El(t,e,n)}}function lm(t){return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return Nl(t,r)}}function Xe(t,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Gi;Ku&&Ku(t,null);let n=e.length;for(;n--;){let o=e[n];if(typeof o=="string"){let a=r(o);a!==o&&(tm(e)||(e[n]=a),o=a)}t[o]=!0}return t}function cm(t){for(let e=0;e<t.length;e++)tn(t,e)||(t[e]=null);return t}function mn(t){let e=Tl(null);for(let[r,n]of nh(t))tn(t,r)&&(Array.isArray(n)?e[r]=cm(n):n&&typeof n=="object"&&n.constructor===Object?e[r]=mn(n):e[r]=n);return e}function Na(t,e){for(;t!==null;){let n=nm(t,e);if(n){if(n.get)return dr(n.get);if(typeof n.value=="function")return dr(n.value)}t=rm(t)}function r(){return null}return r}function ih(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ym(),e=xe=>ih(xe);if(e.version="3.3.1",e.removed=[],!t||!t.document||t.document.nodeType!==Aa.document||!t.Element)return e.isSupported=!1,e;let{document:r}=t,n=r,o=n.currentScript,{DocumentFragment:a,HTMLTemplateElement:i,Node:s,Element:l,NodeFilter:d,NamedNodeMap:h=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:p,DOMParser:u,trustedTypes:g}=t,w=l.prototype,b=Na(w,"cloneNode"),S=Na(w,"remove"),y=Na(w,"nextSibling"),k=Na(w,"childNodes"),E=Na(w,"parentNode");if(typeof i=="function"){let xe=r.createElement("template");xe.content&&xe.content.ownerDocument&&(r=xe.content.ownerDocument)}let A,T="",{implementation:C,createNodeIterator:O,createDocumentFragment:R,getElementsByTagName:m}=r,{importNode:M}=n,F=rh();e.isSupported=typeof nh=="function"&&typeof E=="function"&&C&&C.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:L,ERB_EXPR:$,TMPLIT_EXPR:J,DATA_ATTR:se,ARIA_ATTR:ne,IS_SCRIPT_OR_DATA:ce,ATTR_WHITESPACE:G,CUSTOM_ELEMENT:oe}=th,{IS_ALLOWED_URI:ue}=th,P=null,B=Xe({},[...Zu,...wl,...kl,..._l,...Qu]),V=null,he=Xe({},[...Ju,...Sl,...eh,...ji]),Z=Object.seal(Tl(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Pe=null,de=null,_e=Object.seal(Tl(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),Ve=!0,Ue=!0,nt=!1,f=!0,c=!1,_=!0,x=!1,le=!1,re=!1,ge=!1,be=!1,ye=!1,De=!0,Ee=!1,Be="user-content-",at=!0,ot=!1,Oe={},Ke=null,Ge=Xe({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),ht=null,ve=Xe({},["audio","video","img","source","image","track"]),lt=null,Et=Xe({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),fr="http://www.w3.org/1998/Math/MathML",Kt="http://www.w3.org/2000/svg",Dt="http://www.w3.org/1999/xhtml",$e=Dt,$t=!1,ae=null,ke=Xe({},[fr,Kt,Dt],vl),Re=Xe({},["mi","mo","mn","ms","mtext"]),Qe=Xe({},["annotation-xml"]),Nt=Xe({},["title","style","font","a","script"]),Hr=null,Ur=["application/xhtml+xml","text/html"],wo="text/html",qe=null,At=null,_t=r.createElement("form"),nn=function(I){return I instanceof RegExp||I instanceof Function},Rt=function(){let I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(At&&At===I)){if((!I||typeof I!="object")&&(I={}),I=mn(I),Hr=Ur.indexOf(I.PARSER_MEDIA_TYPE)===-1?wo:I.PARSER_MEDIA_TYPE,qe=Hr==="application/xhtml+xml"?vl:Gi,P=tn(I,"ALLOWED_TAGS")?Xe({},I.ALLOWED_TAGS,qe):B,V=tn(I,"ALLOWED_ATTR")?Xe({},I.ALLOWED_ATTR,qe):he,ae=tn(I,"ALLOWED_NAMESPACES")?Xe({},I.ALLOWED_NAMESPACES,vl):ke,lt=tn(I,"ADD_URI_SAFE_ATTR")?Xe(mn(Et),I.ADD_URI_SAFE_ATTR,qe):Et,ht=tn(I,"ADD_DATA_URI_TAGS")?Xe(mn(ve),I.ADD_DATA_URI_TAGS,qe):ve,Ke=tn(I,"FORBID_CONTENTS")?Xe({},I.FORBID_CONTENTS,qe):Ge,Pe=tn(I,"FORBID_TAGS")?Xe({},I.FORBID_TAGS,qe):mn({}),de=tn(I,"FORBID_ATTR")?Xe({},I.FORBID_ATTR,qe):mn({}),Oe=tn(I,"USE_PROFILES")?I.USE_PROFILES:!1,Ve=I.ALLOW_ARIA_ATTR!==!1,Ue=I.ALLOW_DATA_ATTR!==!1,nt=I.ALLOW_UNKNOWN_PROTOCOLS||!1,f=I.ALLOW_SELF_CLOSE_IN_ATTR!==!1,c=I.SAFE_FOR_TEMPLATES||!1,_=I.SAFE_FOR_XML!==!1,x=I.WHOLE_DOCUMENT||!1,ge=I.RETURN_DOM||!1,be=I.RETURN_DOM_FRAGMENT||!1,ye=I.RETURN_TRUSTED_TYPE||!1,re=I.FORCE_BODY||!1,De=I.SANITIZE_DOM!==!1,Ee=I.SANITIZE_NAMED_PROPS||!1,at=I.KEEP_CONTENT!==!1,ot=I.IN_PLACE||!1,ue=I.ALLOWED_URI_REGEXP||oh,$e=I.NAMESPACE||Dt,Re=I.MATHML_TEXT_INTEGRATION_POINTS||Re,Qe=I.HTML_INTEGRATION_POINTS||Qe,Z=I.CUSTOM_ELEMENT_HANDLING||{},I.CUSTOM_ELEMENT_HANDLING&&nn(I.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Z.tagNameCheck=I.CUSTOM_ELEMENT_HANDLING.tagNameCheck),I.CUSTOM_ELEMENT_HANDLING&&nn(I.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Z.attributeNameCheck=I.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),I.CUSTOM_ELEMENT_HANDLING&&typeof I.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(Z.allowCustomizedBuiltInElements=I.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),c&&(Ue=!1),be&&(ge=!0),Oe&&(P=Xe({},Qu),V=[],Oe.html===!0&&(Xe(P,Zu),Xe(V,Ju)),Oe.svg===!0&&(Xe(P,wl),Xe(V,Sl),Xe(V,ji)),Oe.svgFilters===!0&&(Xe(P,kl),Xe(V,Sl),Xe(V,ji)),Oe.mathMl===!0&&(Xe(P,_l),Xe(V,eh),Xe(V,ji))),I.ADD_TAGS&&(typeof I.ADD_TAGS=="function"?_e.tagCheck=I.ADD_TAGS:(P===B&&(P=mn(P)),Xe(P,I.ADD_TAGS,qe))),I.ADD_ATTR&&(typeof I.ADD_ATTR=="function"?_e.attributeCheck=I.ADD_ATTR:(V===he&&(V=mn(V)),Xe(V,I.ADD_ATTR,qe))),I.ADD_URI_SAFE_ATTR&&Xe(lt,I.ADD_URI_SAFE_ATTR,qe),I.FORBID_CONTENTS&&(Ke===Ge&&(Ke=mn(Ke)),Xe(Ke,I.FORBID_CONTENTS,qe)),I.ADD_FORBID_CONTENTS&&(Ke===Ge&&(Ke=mn(Ke)),Xe(Ke,I.ADD_FORBID_CONTENTS,qe)),at&&(P["#text"]=!0),x&&Xe(P,["html","head","body"]),P.table&&(Xe(P,["tbody"]),delete Pe.tbody),I.TRUSTED_TYPES_POLICY){if(typeof I.TRUSTED_TYPES_POLICY.createHTML!="function")throw Ea('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof I.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Ea('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');A=I.TRUSTED_TYPES_POLICY,T=A.createHTML("")}else A===void 0&&(A=wm(g,o)),A!==null&&typeof T=="string"&&(T=A.createHTML(""));cr&&cr(I),At=I}},qt=Xe({},[...wl,...kl,...dm]),Yt=Xe({},[..._l,...um]),_n=function(I){let ee=E(I);(!ee||!ee.tagName)&&(ee={namespaceURI:$e,tagName:"template"});let me=Gi(I.tagName),tt=Gi(ee.tagName);return ae[I.namespaceURI]?I.namespaceURI===Kt?ee.namespaceURI===Dt?me==="svg":ee.namespaceURI===fr?me==="svg"&&(tt==="annotation-xml"||Re[tt]):!!qt[me]:I.namespaceURI===fr?ee.namespaceURI===Dt?me==="math":ee.namespaceURI===Kt?me==="math"&&Qe[tt]:!!Yt[me]:I.namespaceURI===Dt?ee.namespaceURI===Kt&&!Qe[tt]||ee.namespaceURI===fr&&!Re[tt]?!1:!Yt[me]&&(Nt[me]||!qt[me]):!!(Hr==="application/xhtml+xml"&&ae[I.namespaceURI]):!1},Ne=function(I){Sa(e.removed,{element:I});try{E(I).removeChild(I)}catch{S(I)}},gr=function(I,ee){try{Sa(e.removed,{attribute:ee.getAttributeNode(I),from:ee})}catch{Sa(e.removed,{attribute:null,from:ee})}if(ee.removeAttribute(I),I==="is")if(ge||be)try{Ne(ee)}catch{}else try{ee.setAttribute(I,"")}catch{}},Sn=function(I){let ee=null,me=null;if(re)I="<remove></remove>"+I;else{let St=yl(I,/^[\r\n\t ]+/);me=St&&St[0]}Hr==="application/xhtml+xml"&&$e===Dt&&(I='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+I+"</body></html>");let tt=A?A.createHTML(I):I;if($e===Dt)try{ee=new u().parseFromString(tt,Hr)}catch{}if(!ee||!ee.documentElement){ee=C.createDocument($e,"template",null);try{ee.documentElement.innerHTML=$t?T:tt}catch{}}let Mt=ee.body||ee.documentElement;return I&&me&&Mt.insertBefore(r.createTextNode(me),Mt.childNodes[0]||null),$e===Dt?m.call(ee,x?"html":"body")[0]:x?ee.documentElement:Mt},Wr=function(I){return O.call(I.ownerDocument||I,I,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},rr=function(I){return I instanceof p&&(typeof I.nodeName!="string"||typeof I.textContent!="string"||typeof I.removeChild!="function"||!(I.attributes instanceof h)||typeof I.removeAttribute!="function"||typeof I.setAttribute!="function"||typeof I.namespaceURI!="string"||typeof I.insertBefore!="function"||typeof I.hasChildNodes!="function")},Ln=function(I){return typeof s=="function"&&I instanceof s};function Qt(xe,I,ee){Wi(xe,me=>{me.call(e,I,ee,At)})}let on=function(I){let ee=null;if(Qt(F.beforeSanitizeElements,I,null),rr(I))return Ne(I),!0;let me=qe(I.nodeName);if(Qt(F.uponSanitizeElement,I,{tagName:me,allowedTags:P}),_&&I.hasChildNodes()&&!Ln(I.firstElementChild)&&lr(/<[/\w!]/g,I.innerHTML)&&lr(/<[/\w!]/g,I.textContent)||I.nodeType===Aa.progressingInstruction||_&&I.nodeType===Aa.comment&&lr(/<[/\w]/g,I.data))return Ne(I),!0;if(!(_e.tagCheck instanceof Function&&_e.tagCheck(me))&&(!P[me]||Pe[me])){if(!Pe[me]&&Kn(me)&&(Z.tagNameCheck instanceof RegExp&&lr(Z.tagNameCheck,me)||Z.tagNameCheck instanceof Function&&Z.tagNameCheck(me)))return!1;if(at&&!Ke[me]){let tt=E(I)||I.parentNode,Mt=k(I)||I.childNodes;if(Mt&&tt){let St=Mt.length;for(let Pt=St-1;Pt>=0;--Pt){let er=b(Mt[Pt],!0);er.__removalCount=(I.__removalCount||0)+1,tt.insertBefore(er,y(I))}}}return Ne(I),!0}return I instanceof l&&!_n(I)||(me==="noscript"||me==="noembed"||me==="noframes")&&lr(/<\/no(script|embed|frames)/i,I.innerHTML)?(Ne(I),!0):(c&&I.nodeType===Aa.text&&(ee=I.textContent,Wi([L,$,J],tt=>{ee=Ta(ee,tt," ")}),I.textContent!==ee&&(Sa(e.removed,{element:I.cloneNode()}),I.textContent=ee)),Qt(F.afterSanitizeElements,I,null),!1)},Ct=function(I,ee,me){if(De&&(ee==="id"||ee==="name")&&(me in r||me in _t))return!1;if(!(Ue&&!de[ee]&&lr(se,ee))){if(!(Ve&&lr(ne,ee))){if(!(_e.attributeCheck instanceof Function&&_e.attributeCheck(ee,I))){if(!V[ee]||de[ee]){if(!(Kn(I)&&(Z.tagNameCheck instanceof RegExp&&lr(Z.tagNameCheck,I)||Z.tagNameCheck instanceof Function&&Z.tagNameCheck(I))&&(Z.attributeNameCheck instanceof RegExp&&lr(Z.attributeNameCheck,ee)||Z.attributeNameCheck instanceof Function&&Z.attributeNameCheck(ee,I))||ee==="is"&&Z.allowCustomizedBuiltInElements&&(Z.tagNameCheck instanceof RegExp&&lr(Z.tagNameCheck,me)||Z.tagNameCheck instanceof Function&&Z.tagNameCheck(me))))return!1}else if(!lt[ee]){if(!lr(ue,Ta(me,G,""))){if(!((ee==="src"||ee==="xlink:href"||ee==="href")&&I!=="script"&&im(me,"data:")===0&&ht[I])){if(!(nt&&!lr(ce,Ta(me,G,"")))){if(me)return!1}}}}}}}return!0},Kn=function(I){return I!=="annotation-xml"&&yl(I,oe)},Jt=function(I){Qt(F.beforeSanitizeAttributes,I,null);let{attributes:ee}=I;if(!ee||rr(I))return;let me={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:V,forceKeepAttr:void 0},tt=ee.length;for(;tt--;){let Mt=ee[tt],{name:St,namespaceURI:Pt,value:er}=Mt,Ht=qe(St),mr=er,ct=St==="value"?mr:sm(mr);if(me.attrName=Ht,me.attrValue=ct,me.keepAttr=!0,me.forceKeepAttr=void 0,Qt(F.uponSanitizeAttribute,I,me),ct=me.attrValue,Ee&&(Ht==="id"||Ht==="name")&&(gr(St,I),ct=Be+ct),_&&lr(/((--!?|])>)|<\/(style|title|textarea)/i,ct)){gr(St,I);continue}if(Ht==="attributename"&&yl(ct,"href")){gr(St,I);continue}if(me.forceKeepAttr)continue;if(!me.keepAttr){gr(St,I);continue}if(!f&&lr(/\/>/i,ct)){gr(St,I);continue}c&&Wi([L,$,J],Nr=>{ct=Ta(ct,Nr," ")});let Er=qe(I.nodeName);if(!Ct(Er,Ht,ct)){gr(St,I);continue}if(A&&typeof g=="object"&&typeof g.getAttributeType=="function"&&!Pt)switch(g.getAttributeType(Er,Ht)){case"TrustedHTML":{ct=A.createHTML(ct);break}case"TrustedScriptURL":{ct=A.createScriptURL(ct);break}}if(ct!==mr)try{Pt?I.setAttributeNS(Pt,St,ct):I.setAttribute(St,ct),rr(I)?Ne(I):Yu(e.removed)}catch{gr(St,I)}}Qt(F.afterSanitizeAttributes,I,null)},vr=function xe(I){let ee=null,me=Wr(I);for(Qt(F.beforeSanitizeShadowDOM,I,null);ee=me.nextNode();)Qt(F.uponSanitizeShadowNode,ee,null),on(ee),Jt(ee),ee.content instanceof a&&xe(ee.content);Qt(F.afterSanitizeShadowDOM,I,null)};return e.sanitize=function(xe){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},ee=null,me=null,tt=null,Mt=null;if($t=!xe,$t&&(xe="<!-->"),typeof xe!="string"&&!Ln(xe))if(typeof xe.toString=="function"){if(xe=xe.toString(),typeof xe!="string")throw Ea("dirty is not a string, aborting")}else throw Ea("toString is not a function");if(!e.isSupported)return xe;if(le||Rt(I),e.removed=[],typeof xe=="string"&&(ot=!1),ot){if(xe.nodeName){let er=qe(xe.nodeName);if(!P[er]||Pe[er])throw Ea("root node is forbidden and cannot be sanitized in-place")}}else if(xe instanceof s)ee=Sn("<!---->"),me=ee.ownerDocument.importNode(xe,!0),me.nodeType===Aa.element&&me.nodeName==="BODY"||me.nodeName==="HTML"?ee=me:ee.appendChild(me);else{if(!ge&&!c&&!x&&xe.indexOf("<")===-1)return A&&ye?A.createHTML(xe):xe;if(ee=Sn(xe),!ee)return ge?null:ye?T:""}ee&&re&&Ne(ee.firstChild);let St=Wr(ot?xe:ee);for(;tt=St.nextNode();)on(tt),Jt(tt),tt.content instanceof a&&vr(tt.content);if(ot)return xe;if(ge){if(be)for(Mt=R.call(ee.ownerDocument);ee.firstChild;)Mt.appendChild(ee.firstChild);else Mt=ee;return(V.shadowroot||V.shadowrootmode)&&(Mt=M.call(n,Mt,!0)),Mt}let Pt=x?ee.outerHTML:ee.innerHTML;return x&&P["!doctype"]&&ee.ownerDocument&&ee.ownerDocument.doctype&&ee.ownerDocument.doctype.name&&lr(ah,ee.ownerDocument.doctype.name)&&(Pt="<!DOCTYPE "+ee.ownerDocument.doctype.name+`>
`+Pt),c&&Wi([L,$,J],er=>{Pt=Ta(Pt,er," ")}),A&&ye?A.createHTML(Pt):Pt},e.setConfig=function(){let xe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Rt(xe),le=!0},e.clearConfig=function(){At=null,le=!1},e.isValidAttribute=function(xe,I,ee){At||Rt({});let me=qe(xe),tt=qe(I);return Ct(me,tt,ee)},e.addHook=function(xe,I){typeof I=="function"&&Sa(F[xe],I)},e.removeHook=function(xe,I){if(I!==void 0){let ee=om(F[xe],I);return ee===-1?void 0:am(F[xe],ee,1)[0]}return Yu(F[xe])},e.removeHooks=function(xe){F[xe]=[]},e.removeAllHooks=function(){F=rh()},e}var nh,Ku,tm,rm,nm,cr,Lr,Tl,El,Nl,Wi,om,Yu,Sa,am,Gi,vl,yl,Ta,im,sm,tn,lr,Ea,Zu,wl,kl,dm,_l,um,Qu,Ju,Sl,eh,ji,hm,pm,fm,gm,mm,oh,bm,xm,ah,vm,th,Aa,ym,wm,rh,Ca,sh=kr(()=>{({entries:nh,setPrototypeOf:Ku,isFrozen:tm,getPrototypeOf:rm,getOwnPropertyDescriptor:nm}=Object),{freeze:cr,seal:Lr,create:Tl}=Object,{apply:El,construct:Nl}=typeof Reflect<"u"&&Reflect;cr||(cr=function(e){return e});Lr||(Lr=function(e){return e});El||(El=function(e,r){for(var n=arguments.length,o=new Array(n>2?n-2:0),a=2;a<n;a++)o[a-2]=arguments[a];return e.apply(r,o)});Nl||(Nl=function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return new e(...n)});Wi=dr(Array.prototype.forEach),om=dr(Array.prototype.lastIndexOf),Yu=dr(Array.prototype.pop),Sa=dr(Array.prototype.push),am=dr(Array.prototype.splice),Gi=dr(String.prototype.toLowerCase),vl=dr(String.prototype.toString),yl=dr(String.prototype.match),Ta=dr(String.prototype.replace),im=dr(String.prototype.indexOf),sm=dr(String.prototype.trim),tn=dr(Object.prototype.hasOwnProperty),lr=dr(RegExp.prototype.test),Ea=lm(TypeError);Zu=cr(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),wl=cr(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),kl=cr(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),dm=cr(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),_l=cr(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),um=cr(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Qu=cr(["#text"]),Ju=cr(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Sl=cr(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),eh=cr(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ji=cr(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),hm=Lr(/\{\{[\w\W]*|[\w\W]*\}\}/gm),pm=Lr(/<%[\w\W]*|[\w\W]*%>/gm),fm=Lr(/\$\{[\w\W]*/gm),gm=Lr(/^data-[\-\w.\u00B7-\uFFFF]+$/),mm=Lr(/^aria-[\-\w]+$/),oh=Lr(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),bm=Lr(/^(?:\w+script|data):/i),xm=Lr(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ah=Lr(/^html$/i),vm=Lr(/^[a-z][.\w]*(-[.\w]+)+$/i),th=Object.freeze({__proto__:null,ARIA_ATTR:mm,ATTR_WHITESPACE:xm,CUSTOM_ELEMENT:vm,DATA_ATTR:gm,DOCTYPE_NAME:ah,ERB_EXPR:pm,IS_ALLOWED_URI:oh,IS_SCRIPT_OR_DATA:bm,MUSTACHE_EXPR:hm,TMPLIT_EXPR:fm}),Aa={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},ym=function(){return typeof window>"u"?null:window},wm=function(e,r){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null,o="data-tt-policy-suffix";r&&r.hasAttribute(o)&&(n=r.getAttribute(o));let a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML(i){return i},createScriptURL(i){return i}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},rh=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};Ca=ih()});function dh(){if(uo)return uo;if(typeof Ca?.sanitize=="function"&&Ca.isSupported)uo=Ca;else{let t=typeof window<"u"?window:globalThis.window;if(!t)throw new Error("\u65E0\u6CD5\u6E05\u7406 HTML\uFF1A\u5F53\u524D\u73AF\u5883\u7F3A\u5C11\u6D4F\u89C8\u5668 window\u3002");uo=Ca(t)}if(!uo||typeof uo.sanitize!="function")throw new Error("\u65E0\u6CD5\u6E05\u7406 HTML\uFF1A\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 DOMPurify\u3002");return uo}function qi(t){if(!t)return"";try{return dh().sanitize(String(t),ch)}catch{return""}}function Al(t){if(!t)return"";try{return dh().sanitize(String(t),_m)}catch{return""}}function ho(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ft(t){return String(t??"").replace(/\u00a0/g," ").replace(/[\t\f\v\u2000-\u200b\u2028\u2029]+/g," ").replace(/[ ]*\n[ ]*/g," ").replace(/ {2,}/g," ").trim()}function Ia(t="div"){return document.createElement(t)}function bn(t){try{return new DOMParser().parseFromString(String(t??""),"text/html")}catch{return null}}function Ho(t){try{let e=new DOMParser().parseFromString(String(t??""),"application/xml");return!e||!e.documentElement||e.documentElement.localName?.toLowerCase()==="parsererror"||ur(e,"parsererror")?null:e}catch{return null}}function Tr(t){return String(t?.localName||t?.nodeName||"").toLowerCase()}function Bt(t,e){let r=[];if(!t)return r;let n=String(e).toLowerCase(),o=a=>{for(let i=a.firstChild;i;i=i.nextSibling)i.nodeType===1&&(Tr(i)===n&&r.push(i),o(i))};return o(t),r}function ur(t,e){if(!t)return null;let r=String(e).toLowerCase(),n=null,o=a=>{for(let i=a.firstChild;i&&!n;i=i.nextSibling)if(i.nodeType===1){if(Tr(i)===r){n=i;return}o(i)}};return o(t),n}function dt(t,e){if(!t||!e)return null;let r=t.getAttribute?.(e);if(r!=null)return r;let n=String(e).toLowerCase(),o=t.attributes;if(!o)return null;for(let a=0;a<o.length;a+=1){let i=o[a];if(!i)continue;if(String(i.name||"").toLowerCase()===n||!n.includes(":")&&String(i.localName||"").toLowerCase()===n)return i.value}return null}var lh,km,ch,_m,uo,po=kr(()=>{sh();lh=Object.freeze(["b","strong","i","em","u","s","sub","sup","code","span","a","br","ruby","rt","rp","small","mark"]),km=Object.freeze(["table","caption","thead","tbody","tfoot","tr","th","td","colgroup","col"]),ch=Object.freeze({ALLOWED_TAGS:[...lh],ALLOWED_ATTR:["href"],ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!1,KEEP_CONTENT:!0,FORBID_TAGS:["script","style","iframe","frame","frameset","object","embed","applet","form","input","button","select","textarea","meta","link","base","svg","math","template","noscript"],FORBID_ATTR:["style","src","srcset","formaction","xlink:href","onerror","onload","onclick"]}),_m=Object.freeze({...ch,ALLOWED_TAGS:[...lh,...km]}),uo=null});function go(t){return t.nextId()}function Nm(t){if(!t||t.nodeType!==1)return!1;if(t.hasAttribute?.("hidden")||dt(t,"aria-hidden")==="true")return!0;let e=dt(t,"style")||"";return/display\s*:\s*none|visibility\s*:\s*hidden/i.test(e)}function Am(t,e){typeof t?.warn=="function"&&t.warn(e)}function Il(t){for(let e of Array.from(t?.children||[])){let r=Tr(e);if(uh.has(r)&&r!=="span"&&r!=="a"||Il(e))return!0}return!1}function hh(t){let e=Array.from(t.querySelectorAll(Em));for(let r=e.length-1;r>=0;r-=1){let n=e[r];if(!n.parentNode)continue;let o=t.ownerDocument.createDocumentFragment();for(;n.firstChild;)o.appendChild(n.firstChild);o.appendChild(t.ownerDocument.createElement("br")),n.parentNode.replaceChild(o,n)}return t}function ph(t){for(let e of Bt(t,"img"))e.remove();for(let e of Bt(t,"image"))e.remove()}function fo(t){let e=[],r=n=>{for(let o of Array.from(n?.children||[])){let a=Tr(o);a==="img"||a==="image"?e.push(o):a==="svg"?e.push(...Bt(o,"image")):a!=="script"&&a!=="style"&&r(o)}};return r(t),e}function Rl(t,e){if(!t||typeof e?.resolveLink!="function")return;let r=Array.from(t.getElementsByTagName?.("a")||[]);for(let n of r){let o=n.getAttribute("href");if(n.removeAttribute("href"),n.removeAttribute("data-chapter"),n.removeAttribute("data-anchor"),!o)continue;let a=null;try{a=e.resolveLink(o)}catch{a=null}if(a){if(a.external){a.href&&n.setAttribute("href",a.href);continue}Number.isInteger(a.chapter)&&a.chapter>=0&&(n.setAttribute("data-chapter",String(a.chapter)),a.anchor&&n.setAttribute("data-anchor",String(a.anchor).slice(0,300)))}}}function fh(t,e){let r=qi(t.innerHTML);if(!r)return null;let n=Ia("div");n.innerHTML=r,Rl(n,e);let o=n.innerHTML.replace(/^(?:\s*<br\s*\/?>\s*)+/i,"").replace(/(?:\s*<br\s*\/?>\s*)+$/i,"");if(!o)return null;let a=ft(n.textContent);return a?{html:o,text:a}:null}function Ki(t,e,r,n={}){let o=qi(r);if(!o)return null;let a=Ia("div");a.innerHTML=o,Rl(a,t);let i=a.innerHTML,s=ft(a.textContent);return s?{id:go(t),kind:e,html:i,text:s,...n}:null}function Ml(t,e){let r=String(e??"").replace(/\r\n?/g,`
`).replace(/\u00a0/g," ").replace(/^\n+|\n+$/g,"");return r.trim()?{id:go(t),kind:"code",html:ho(r),text:r}:null}function Pl(t,e,r={}){let n=Al(e);if(!n)return null;let o=Ia("div");if(o.innerHTML=n,!o.querySelector("table"))return null;Rl(o,t);let i=o.innerHTML,s=ft(o.textContent);return s?{id:go(t),kind:"table",html:i,text:s,...r}:null}function Ol(t,{src:e,alt:r="",caption:n=""}={}){if(!e)return null;let o={id:go(t),kind:"image",src:e},a=ft(r),i=ft(n);return a&&(o.alt=a),i&&(o.caption=i),o}function Ll(t){return{id:go(t),kind:"rule"}}function mo(t,e){let r=[];return t&&Xi(t,e,r),r}function Xi(t,e,r){let n=[],o=()=>{if(n.length===0)return;let a=Ia("div");for(let s of n)a.appendChild(s.cloneNode(!0));let i=ft(a.textContent)!==""||fo(a).length>0;n=[],i&&Gn("paragraph",a,e,r)};for(let a of Array.from(t.childNodes||[])){if(a.nodeType===3){String(a.textContent||"").trim()&&n.push(a);continue}if(a.nodeType!==1||Nm(a))continue;let i=Tr(a);Sm.has(i)||(uh.has(i)?(o(),Cm(a,i,e,r)):n.push(a))}o()}function Cm(t,e,r,n){if(Cl.has(e)){Gn("heading",t,r,n,{level:Number(e.slice(1)),stripImages:!0,flatten:!1});return}switch(e){case"p":Gn("paragraph",t,r,n);return;case"li":case"dt":Gn("list-item",t,r,n,{flatten:!0});return;case"dd":Gn("paragraph",t,r,n,{flatten:!0});return;case"blockquote":Gn("quote",t,r,n,{flatten:!0});return;case"pre":Rm(t,r,n);return;case"table":Mm(t,r,n);return;case"hr":n.push(Ll(r));return;case"figure":{Im(t,r,n);return}case"img":case"image":Vi(t,r,n,"");return;case"picture":case"svg":{for(let o of fo(t))Vi(o,r,n,"");return}case"ul":case"ol":{for(let o of Array.from(t.children||[]))Tr(o)==="li"?Gn("list-item",o,r,n,{flatten:!0}):Xi(o,r,n);return}case"dl":{Xi(t,r,n);return}case"figcaption":return;default:Tm.has(e)||Il(t)?Xi(t,r,n):Gn("paragraph",t,r,n)}}function Gn(t,e,r,n,o={}){let a=e.cloneNode(!0),i=fo(a);if(i.length>0)for(let l of i)l.remove();o.stripImages&&ph(a),o.flatten!==!1&&hh(a);let s=fh(a,r);if(s){let l={id:go(r),kind:t,html:s.html,text:s.text};o.level&&(l.level=o.level),n.push(l)}if(!o.stripImages&&i.length>0){let l=fo(e);for(let d of l)Vi(d,r,n,"")}}function Vi(t,e,r,n){let o=dt(t,"src")||dt(t,"xlink:href")||dt(t,"href");if(!o)return;let a=null;try{a=typeof e?.resolveImage=="function"?e.resolveImage(o):null}catch{a=null}if(!a||!a.src)return;let i=dt(t,"alt")||dt(t,"title")||a.alt||"",s=Ol(e,{src:a.src,alt:i,caption:n||a.caption||""});s&&r.push(s)}function Im(t,e,r){let n=Bt(t,"figcaption")[0]||null,o=n?ft(n.textContent):"",a=fo(t);a.length>0&&a.forEach((l,d)=>{Vi(l,e,r,d===0?o:"")});let i=t.cloneNode(!0);ph(i);for(let l of Bt(i,"figcaption"))l.remove();Il(i)&&hh(i);let s=fh(i,e);s&&s.text!==o&&r.push({id:go(e),kind:"paragraph",html:s.html,text:s.text})}function Rm(t,e,r){let n=Bt(t,"code")[0]||t,o=String(n.textContent||"").replace(/\r\n?/g,`
`);if(!o.trim())return;let a=qi(n.innerHTML),i=Ml(e,o);i&&(a&&(i.html=a),r.push(i))}function Mm(t,e,r){let n=t.cloneNode(!0),o=Al(n.outerHTML);if(!o){Am(e,"\u5DF2\u8DF3\u8FC7\u4E00\u4E2A\u65E0\u6CD5\u89E3\u6790\u7684\u8868\u683C\u3002");return}let a=Pl(e,o);a&&r.push(a)}var Cl,Sm,Tm,uh,Em,Ra=kr(()=>{po();Cl=new Set(["h1","h2","h3","h4","h5","h6"]),Sm=new Set(["script","style","noscript","template","head","title","meta","link","base","iframe","frame","frameset","object","embed","applet","form","input","select","textarea","button","audio","video","source","track","canvas","map","area","math","nav"]),Tm=new Set(["div","section","article","main","header","footer","aside","center","details","summary","fieldset","body","html","hgroup","dl"]),uh=new Set([...Cl,"p","div","section","article","main","header","footer","aside","center","details","summary","fieldset","body","html","hgroup","dl","dt","dd","blockquote","pre","table","ul","ol","li","figure","figcaption","hr","address","picture","svg","img","image"]),Em=[...Cl,"p","div","section","article","header","footer","aside","center","details","summary","fieldset","blockquote","ul","ol","li","dl","dt","dd","table","thead","tbody","tfoot","tr","td","th","caption","pre","figure","figcaption","address","hgroup"].join(",")});function Yi(t){if(typeof t!="string"||!t)return"";let e=t.split(/[\\/]/).pop()||"",r=/\.([A-Za-z0-9]+)$/.exec(e);return r?r[1].toLowerCase():""}function Dr(t){let e=String(t||"").replace(/\\/g,"/"),r=e.lastIndexOf("/");return r>=0?e.slice(r+1):e}function Uo(t){let e=String(t||"").replace(/\\/g,"/"),r=e.lastIndexOf("/");return r>0?e.slice(0,r):""}function Dl(t){let e=[];for(let r of String(t||"").replace(/\\/g,"/").split("/"))if(!(!r||r===".")){if(r===".."){e.pop();continue}e.push(r)}return e.join("/")}function Ma(t){let e=String(t||""),r=e.indexOf("#"),n=r>=0?e.slice(0,r):e,o=r>=0?e.slice(r+1):"";try{o=decodeURIComponent(o)}catch{}let a=n.indexOf("?");return{path:a>=0?n.slice(0,a):n,fragment:o}}function qn(t,e){if(!e)return null;let r=String(e).trim();if(!r||r.startsWith("#")||/^[a-z][a-z0-9+.-]*:/i.test(r)||r.startsWith("//"))return null;let{path:n}=Ma(r);if(!n)return null;let o=n;try{o=decodeURIComponent(n)}catch{}o=o.replace(/\\/g,"/");let a=o.startsWith("/")?o.slice(1):t?`${t}/${o}`:o;return Dl(a)||null}function mh(t){let e=new Map,r=[];for(let[n,o]of Object.entries(t||{})){if(!o||/\/$/.test(n))continue;let a=Dl(n);if(!a)continue;let i=a.toLowerCase();e.has(i)||(e.set(i,{name:a,bytes:o}),r.push(a))}return{names:r,get(n){let o=Dl(n||"");return o&&e.get(o.toLowerCase())||null},has(n){return!!this.get(n)}}}function Pa(t){return Pm[Yi(t)]||"application/octet-stream"}async function xn(t){if(!t||typeof t.arrayBuffer!="function")throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u6570\u636E\uFF1A\u8BF7\u9009\u62E9\u4E00\u4E2A\u6709\u6548\u7684\u6587\u6863\u6587\u4EF6\u3002");let e;try{e=await t.arrayBuffer()}catch{throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u6570\u636E\uFF0C\u6587\u4EF6\u53EF\u80FD\u5DF2\u88AB\u79FB\u52A8\u6216\u635F\u574F\u3002")}let r=new Uint8Array(e);if(r.length===0)throw new Error("\u6587\u4EF6\u5185\u5BB9\u4E3A\u7A7A\u3002");return r}function vn(t=40){let e=[],r=new Set,n=!1;return{warnings:e,warn:a=>{let i=String(a||"").trim();!i||r.has(i)||(r.add(i),e.length<t?e.push(i):n||(n=!0,e.push("\u8FD8\u6709\u66F4\u591A\u89E3\u6790\u8B66\u544A\u672A\u663E\u793A\u3002")))}}}function Fr(t,e){if(t instanceof Error&&/[\u4e00-\u9fff]/.test(t.message))return t;let r=t instanceof Error?t.message:String(t??""),n=r?`${e}\uFF1A${r}`:`${e}\u3002`;return new Error(/[。！？]$/.test(n)?n:`${n}\u3002`)}function Oa(t,e){let r=(Array.isArray(e)?e:[]).filter(a=>a&&Number.isInteger(a.chapterIndex)&&a.chapterIndex>=0&&a.chapterIndex<t.length&&a.title);for(let a=0;a<t.length;a+=1){let i=r.find(l=>l.chapterIndex===a),s=t[a].blocks.find(l=>l.kind==="heading"&&l.text);t[a].title=(i?.title||s?.text||`\u7B2C ${a+1} \u7AE0`).slice(0,120)}if(r.length===0)return t.map((a,i)=>({title:a.title,chapterIndex:i,depth:0}));let n=[],o=new Set;for(let a=0;a<t.length;a+=1){let i=r.filter(s=>s.chapterIndex===a);if(i.length===0){let s={title:t[a].title,chapterIndex:a,depth:0},l=`${a}|${s.title}|0`;o.has(l)||(o.add(l),n.push(s));continue}for(let s of i){let l=Number.isInteger(s.depth)&&s.depth>=0?s.depth:0,d=s.anchor?String(s.anchor).slice(0,300):"",h=`${s.chapterIndex}|${s.title}|${l}|${d}`;o.has(h)||(o.add(h),n.push({title:s.title,chapterIndex:s.chapterIndex,depth:l,...d?{anchor:d}:{}}))}}return n}function xo(t,e="\u672A\u547D\u540D\u6587\u6863"){return Dr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||e}function Xn(){let t=[];return{urls:t,create(e){let r=URL.createObjectURL(e);return t.push(r),r},add(e){return e&&!t.includes(e)&&t.push(e),e},dispose(){for(;t.length>0;){let e=t.pop();try{URL.revokeObjectURL(e)}catch{}}}}}function Vn(t){let e=/^data:([^;,]*)((?:;[^;,]*)*),(.*)$/is.exec(String(t||""));if(!e)return null;let r=e[1]||"application/octet-stream",n=e[2]||"",o=e[3]||"",a=/;base64/i.test(n);try{let i;if(a){let l=o.replace(/\s+/g,"");i=atob(l)}else i=decodeURIComponent(o);let s=new Uint8Array(i.length);for(let l=0;l<i.length;l+=1)s[l]=i.charCodeAt(l)&255;return new Blob([s],{type:r})}catch{return null}}function gh(t){let e=String(t||"").trim().toLowerCase();return!e||/^(utf-?8|utf8)$/.test(e)?"utf-8":/^utf-?16(le)?$/.test(e)?"utf-16le":/^utf-?16be$/.test(e)?"utf-16be":/^(gb2312|gbk|gb18030|cp936|x-gbk)$/.test(e)?"gb18030":/^(big5|big5-hkscs|cp950)$/.test(e)?"big5":/^(shift_jis|sjis|windows-31j|cp932)$/.test(e)?"shift_jis":/^(euc-kr|ks_c_5601-1987|cp949)$/.test(e)?"euc-kr":/^(iso-8859-1|latin1|windows-1252|cp1252)$/.test(e)?"windows-1252":e}function bo(t,e,r=!1){return new TextDecoder(e,{fatal:r}).decode(t)}function Lm(t){let e=bo(t.subarray(0,Math.min(t.length,512)),"windows-1252"),r=Om.exec(e);return r&&(r[1]||r[2])||""}function yn(t,{defaultEncoding:e="utf-8",sniffDeclaration:r=!0}={}){let n=t instanceof Uint8Array?t:new Uint8Array(t);if(n.length===0)return"";if(n[0]===239&&n[1]===187&&n[2]===191)return bo(n.subarray(3),"utf-8");if(n[0]===255&&n[1]===254)return bo(n.subarray(2),"utf-16le");if(n[0]===254&&n[1]===255)return bo(n.subarray(2),"utf-16be");let o=e||"utf-8";if(r){let a=Lm(n);a&&(o=gh(a))}o=gh(o);try{return bo(n,o,!0)}catch{try{return bo(n,"utf-8",!0)}catch{return bo(n,"utf-8",!1)}}}function Zi(t){if(!t)return!1;let e=t.slice(0,4096);if(!e)return!1;let r=0;for(let n=0;n<e.length;n+=1){let o=e.charCodeAt(n);(o===65533||o===0||o<9||o>13&&o<32)&&(r+=1)}return r/e.length>.08}var Pm,Om,vo=kr(()=>{Pm={jpg:"image/jpeg",jpeg:"image/jpeg",jpe:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",avif:"image/avif",bmp:"image/bmp",tif:"image/tiff",tiff:"image/tiff",svg:"image/svg+xml",ico:"image/x-icon",jxl:"image/jxl"};Om=/(?:encoding\s*=\s*["']([A-Za-z0-9._-]+)["'])|(?:charset\s*=\s*["']?([A-Za-z0-9._-]+))/i});function bh(t){return/^(https?:|mailto:|tel:)/i.test(t)}function Fl(t){return/^[a-z][a-z0-9+.-]*:/i.test(t)}function Fm(t,e){e&&!t.includes(e)&&t.push(e)}async function xh(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=vn(),a=Xn();try{let ce=function(c,_){let x=String(c||"").trim();if(!x||bh(x)||x.startsWith("//")||Fl(x))return null;let{path:le,fragment:re}=Ma(x),ge=le?qn(_,x):null,be=ge?$.get(ge.toLowerCase()):void 0;return be==null&&ge&&(be=J.get(Dr(ge).toLowerCase())),be==null?null:{chapterIndex:be,anchor:re}},i=await xn(t),s;try{s=Vu(i)}catch{throw new Error("EPUB \u538B\u7F29\u5305\u5DF2\u635F\u574F\uFF0C\u65E0\u6CD5\u89E3\u538B\u3002")}let l=mh(s);if(l.names.length===0)throw new Error("EPUB \u538B\u7F29\u5305\u4E0D\u5305\u542B\u4EFB\u4F55\u6587\u4EF6\u3002");let d=l.get("META-INF/encryption.xml");if(d){let c=yn(d.bytes);if(/<encrypteddata/i.test(c)&&/application\/(xhtml\+xml|epub\+zip)/i.test(c))throw new Error("\u8BE5 EPUB \u6587\u4EF6\u53D7 DRM \u4FDD\u62A4\uFF0C\u65E0\u6CD5\u6253\u5F00\u3002")}let h=l.get("META-INF/container.xml");if(!h){let c=l.names.find(_=>/container\.xml$/i.test(_));c&&(h=l.get(c))}if(!h)throw new Error("\u7F3A\u5C11 META-INF/container.xml\uFF0C\u4E0D\u662F\u6709\u6548\u7684 EPUB \u6587\u4EF6\u3002");let p=Ho(yn(h.bytes));if(!p)throw new Error("META-INF/container.xml \u683C\u5F0F\u9519\u8BEF\u3002");let u=Bt(p,"rootfile")[0],g=u?dt(u,"full-path"):"";if(!g)throw new Error("container.xml \u4E2D\u6CA1\u6709\u6307\u5B9A OPF \u5185\u5BB9\u6E05\u5355\u3002");let w=l.get(g)||l.get(qn("",g));if(!w)throw new Error(`\u627E\u4E0D\u5230 EPUB \u5185\u5BB9\u6E05\u5355\u6587\u4EF6\uFF1A${g}`);let b=Uo(w.name),S=Ho(yn(w.bytes));if(!S)throw new Error("EPUB \u5185\u5BB9\u6E05\u5355\uFF08OPF\uFF09\u683C\u5F0F\u9519\u8BEF\u3002");let k=ur(S,"metadata")||S,E=Bt(k,"title").map(c=>ft(c.textContent)).filter(Boolean),A=[];for(let c of Bt(k,"creator"))Fm(A,ft(c.textContent));let T=Bt(k,"language").map(c=>ft(c.textContent)).filter(Boolean),O=Bt(k,"meta").filter(c=>String(dt(c,"name")||"").toLowerCase()==="cover").map(c=>dt(c,"content")||"").find(Boolean)||"",R=ur(S,"manifest");if(!R)throw new Error("OPF \u5185\u5BB9\u6E05\u5355\u7F3A\u5C11 manifest \u5217\u8868\u3002");let m=new Map;for(let c of Bt(R,"item")){let _=dt(c,"id");if(!_||m.has(_))continue;let x=dt(c,"href")||"",le=qn(b,x);m.set(_,{id:_,href:x,path:le,mediaType:String(dt(c,"media-type")||"").toLowerCase(),properties:String(dt(c,"properties")||"").toLowerCase()})}let M=ur(S,"spine");if(!M)throw new Error("OPF \u5185\u5BB9\u6E05\u5355\u7F3A\u5C11 spine \u9605\u8BFB\u987A\u5E8F\u3002");let F=Bt(M,"itemref");if(F.length===0)throw new Error("EPUB \u7684\u9605\u8BFB\u987A\u5E8F\uFF08spine\uFF09\u4E3A\u7A7A\u3002");let L=[],$=new Map,J=new Map;for(let c of F){let _=dt(c,"idref"),x=_?m.get(_):null;if(!x){o(`\u9605\u8BFB\u987A\u5E8F\u4E2D\u7684\u6761\u76EE\u201C${_||"\u672A\u77E5"}\u201D\u4E0D\u5728\u6E05\u5355\u4E2D\uFF0C\u5DF2\u8DF3\u8FC7\u3002`);continue}if(/\bnav\b/.test(x.properties))continue;if(!x.path){o(`\u7AE0\u8282\u6587\u4EF6\u201C${x.href||x.id}\u201D\u4F4D\u4E8E\u5916\u90E8\u7F51\u7EDC\uFF0C\u5DF2\u8DF3\u8FC7\u3002`);continue}let le=l.get(x.path);if(!le){o(`\u627E\u4E0D\u5230\u7AE0\u8282\u6587\u4EF6\uFF1A${x.path}`);continue}let re=x.mediaType||"",ge=Dm.has(re)||/\.(x?html?|htm)$/i.test(x.path),be=re.startsWith("image/")||/\.(png|jpe?g|gif|webp|avif|bmp|tiff?|svg)$/i.test(x.path);if(!ge&&!be){o(`\u4E0D\u652F\u6301\u7684\u7AE0\u8282\u7C7B\u578B\uFF08${re||"\u672A\u77E5"}\uFF09\uFF1A${x.path}`);continue}let ye=L.length;L.push({item:x,entry:le,isImage:be,chapterIndex:ye}),$.set(x.path.toLowerCase(),ye);let De=Dr(x.path).toLowerCase();J.has(De)||J.set(De,ye)}if(L.length===0)throw new Error("EPUB \u4E2D\u6CA1\u6709\u627E\u5230\u53EF\u663E\u793A\u7684\u7AE0\u8282\u5185\u5BB9\u3002");let se=0,ne=()=>`b${se+=1}`,G=[];for(let c of L){let{item:_,entry:x,isImage:le,chapterIndex:re}=c;if(le){let Ke=_.mediaType.startsWith("image/")?_.mediaType:Pa(_.path),Ge=a.create(new Blob([x.bytes],{type:Ke}));G.push({id:`ch${re}`,title:"",blocks:[{id:ne(),kind:"image",src:Ge}]});continue}let ge=Uo(_.path),be=Ke=>{let Ge=String(Ke||"").trim();if(!Ge)return null;if(/^data:/i.test(Ge)){let Et=Vn(Ge);return Et?{src:a.create(Et)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684\u5185\u5D4C\u56FE\u7247\u3002"),null)}if(/^(https?:)?\/\//i.test(Ge))return o("\u5DF2\u8DF3\u8FC7\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\uFF08\u907F\u514D\u8DDF\u8E2A\u4E0E\u9690\u79C1\u6CC4\u9732\uFF09\u3002"),null;if(Fl(Ge))return null;let ht=qn(ge,Ge),ve=ht?l.get(ht):null;if(!ve)return o(`\u627E\u4E0D\u5230\u56FE\u7247\u6587\u4EF6\uFF1A${Dr(ht||Ge)}`),null;let lt=Pa(ht);return{src:a.create(new Blob([ve.bytes],{type:lt}))}},ye=Ke=>{let Ge=String(Ke||"").trim();if(!Ge)return null;if(bh(Ge))return{external:!0,href:Ge};if(Ge.startsWith("//")||Fl(Ge))return null;let{path:ht,fragment:ve}=Ma(Ge);if(!ht)return{chapter:re,anchor:ve};let lt=qn(ge,Ge),Et=lt?$.get(lt.toLowerCase()):void 0;return Et==null&&lt&&(Et=J.get(Dr(lt).toLowerCase())),Et==null?null:{chapter:Et,anchor:ve}},De="";try{De=yn(x.bytes)}catch{o(`\u7B2C ${re+1} \u7AE0\u7684\u7F16\u7801\u65E0\u6CD5\u8BC6\u522B\uFF0C\u5DF2\u5C3D\u91CF\u6309 UTF-8 \u8BFB\u53D6\u3002`)}let Ee=Ho(De),Be=Ee&&(ur(Ee,"body")||Ee.documentElement)||null,at=Be?null:bn(De),ot=Be||at?.body||at?.documentElement||null,Oe=ot?mo(ot,{nextId:ne,warn:o,chapterIndex:re,resolveImage:be,resolveLink:ye}):[];Oe.length===0&&o(`\u7B2C ${re+1} \u7AE0\u6CA1\u6709\u53EF\u663E\u793A\u7684\u5185\u5BB9\u3002`),G.push({id:`ch${re}`,title:"",blocks:Oe})}let oe=[...m.values()].find(c=>/\bnav\b/.test(c.properties)&&c.path),ue=dt(M,"toc"),P=ue&&m.get(ue)||[...m.values()].find(c=>c.mediaType==="application/x-dtbncx+xml"&&c.path)||null,B=c=>{let _=l.get(c.path);if(!_)return o(`\u627E\u4E0D\u5230 EPUB \u5BFC\u822A\u6587\u4EF6\uFF1A${c.path}`),[];let x=yn(_.bytes),le=Ho(x)||bn(x);if(!le)return o("\u65E0\u6CD5\u89E3\u6790 EPUB \u5BFC\u822A\u76EE\u5F55\u3002"),[];let re=Bt(le,"nav"),ge=re.find(at=>String(dt(at,"type")||dt(at,"epub:type")||"").toLowerCase().split(/\s+/).includes("toc"))||re[0]||null;if(!ge)return[];let be=ur(ge,"ol")||ur(ge,"ul");if(!be)return[];let ye=[],De=Uo(c.path),Ee=$.get(c.path.toLowerCase()),Be=(at,ot)=>{for(let Oe of Array.from(at.children||[])){if(Tr(Oe)!=="li")continue;let Ke=null,Ge=null;for(let ht of Array.from(Oe.children||[])){let ve=Tr(ht);!Ke&&(ve==="a"||ve==="span")&&(Ke=ht),!Ge&&(ve==="ol"||ve==="ul")&&(Ge=ht)}if(Ke&&Tr(Ke)==="a"){let ht=ft(Ke.textContent).slice(0,200),ve=dt(Ke,"href")||"",lt=ce(ve,De);if(!lt&&ve.startsWith("#")&&Ee!=null){let{fragment:Et}=Ma(ve);lt={chapterIndex:Ee,anchor:Et}}ht&&lt&&ye.push({title:ht,chapterIndex:lt.chapterIndex,depth:ot,...lt.anchor?{anchor:lt.anchor}:{}})}Ge&&Be(Ge,ot+1)}};return Be(be,0),ye},V=c=>{let _=l.get(c.path);if(!_)return o(`\u627E\u4E0D\u5230 EPUB NCX \u76EE\u5F55\u6587\u4EF6\uFF1A${c.path}`),[];let x=yn(_.bytes),le=Ho(x)||bn(x);if(!le)return o("\u65E0\u6CD5\u89E3\u6790 EPUB NCX \u76EE\u5F55\u3002"),[];let re=[],ge=Uo(c.path);for(let be of Bt(le,"navpoint")){let ye=ur(be,"navlabel"),De=ye?ur(ye,"text"):ur(be,"text"),Ee=ft(De?.textContent||"").slice(0,200),Be=Array.from(be.children||[]).find(Oe=>Tr(Oe)==="content")||ur(be,"content"),at=ce(dt(Be,"src")||"",ge);if(!Ee||!at)continue;let ot=0;for(let Oe=be.parentNode;Oe;Oe=Oe.parentNode)Tr(Oe)==="navpoint"&&(ot+=1);re.push({title:Ee,chapterIndex:at.chapterIndex,depth:ot,...at.anchor?{anchor:at.anchor}:{}})}return re},he=[];oe&&(he=B(oe),he.length===0&&o("EPUB \u5BFC\u822A\u6587\u4EF6\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u5F55\u9879\u3002"));let Z=[];he.length===0&&P&&(Z=V(P));let Pe=he.length>0?he:Z;Pe.length===0&&o("\u672A\u627E\u5230 EPUB \u76EE\u5F55\uFF0C\u5DF2\u6309\u7AE0\u8282\u6807\u9898\u751F\u6210\u3002");let de=Oa(G,Pe),_e="",Ve=[...m.values()].find(c=>/\bcover-image\b/.test(c.properties)&&c.path);if(Ve)_e=Ve.path;else if(O&&m.get(O)?.path)_e=m.get(O).path;else{let c=ur(S,"guide");if(c){let _=Bt(c,"reference").find(x=>/\bcover\b/.test(String(dt(x,"type")||"").toLowerCase()));_&&(_e=qn(b,dt(_,"href")||"")||"")}}let Ue="";if(_e){let c=l.get(_e);if(c){let _=Pa(_e);if(_.startsWith("image/"))Ue=a.create(new Blob([c.bytes],{type:_}));else if(/\.(x?html?|htm)$/i.test(_e)){let x=bn(yn(c.bytes)),le=fo(x?.body||x?.documentElement||x)[0],re=le&&(dt(le,"src")||dt(le,"xlink:href"))||"",ge=re?qn(Uo(_e),re):null,be=ge?l.get(ge):null;be&&(Ue=a.create(new Blob([be.bytes],{type:Pa(ge)})))}}}let f={title:E[0]||xo(r),chapters:G,toc:de,warnings:n,dispose:()=>a.dispose()};return A.length>0&&(f.author=A.join(", ")),T.length>0&&(f.language=T[0]),Ue&&(f.cover=Ue),f}catch(i){throw a.dispose(),Fr(i,"\u65E0\u6CD5\u89E3\u6790 EPUB \u6587\u4EF6")}}var Dm,vh=kr(()=>{xl();po();Ra();vo();Dm=new Set(["application/xhtml+xml","text/html","application/xml","text/xml","text/xhtml"])});function zm(t){return Dr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u6863"}async function La(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=vn(),a=Xn();try{let i=await xn(t),s=yn(i),l=bn(s);if(!l)throw new Error("HTML \u6587\u4EF6\u683C\u5F0F\u9519\u8BEF\uFF0C\u65E0\u6CD5\u89E3\u6790\u3002");let d=l.body||l.documentElement;if(!d)throw new Error("HTML \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let h=0,u=mo(d,{nextId:()=>`b${h+=1}`,warn:o,resolveImage:E=>{let A=String(E||"").trim();if(!A)return null;if(/^data:/i.test(A)){let T=Vn(A);return T?{src:a.create(T)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684\u5185\u5D4C\u56FE\u7247\u3002"),null)}return/^(https?:)?\/\//i.test(A)?(o("\u5DF2\u8DF3\u8FC7\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\uFF08\u907F\u514D\u8DDF\u8E2A\u4E0E\u9690\u79C1\u6CC4\u9732\uFF09\u3002"),null):(o("\u5DF2\u8DF3\u8FC7 HTML \u4E2D\u7684\u672C\u5730\u56FE\u7247\uFF08\u65E0\u6CD5\u5B9A\u4F4D\u56FE\u7247\u6587\u4EF6\uFF09\u3002"),null)},resolveLink:E=>{let A=String(E||"").trim();return A?/^(https?:\/\/|mailto:)/i.test(A)?{external:!0,href:A}:A.startsWith("#")?{chapter:0,anchor:A.slice(1)}:null:null}});if(u.length===0)throw new Error("HTML \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let g=ur(l,"title"),w=u.find(E=>E.kind==="heading"&&E.text),b=ft(g?.textContent||"")||w?.text||zm(r),S=dt(l.documentElement,"lang")||"",y=[];for(let E of Bt(l,"meta"))if(String(dt(E,"name")||"").toLowerCase()==="author"){let A=ft(dt(E,"content")||"");A&&!y.includes(A)&&y.push(A)}let k={title:b,chapters:[{id:"ch0",title:b,blocks:u}],toc:[{title:b,chapterIndex:0,depth:0}],warnings:n,dispose:()=>a.dispose()};return S&&(k.language=S),y.length>0&&(k.author=y.join(", ")),k}catch(i){throw a.dispose(),Fr(i,"\u65E0\u6CD5\u89E3\u6790 HTML \u6587\u4EF6")}}var yh=kr(()=>{po();Ra();vo()});function wh(t){return/[\u3000-\u303f\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uffef\uac00-\ud7af]/.test(t)}function kh(t){let e="";for(let r of t){let n=String(r).trim();if(!n)continue;if(!e){e=n;continue}let o=e[e.length-1],a=n[0];e+=wh(o)&&wh(a)?n:` ${n}`}return e}function jm(t){let e=String(t||"").trim();if(!e||e.length>Wm)return!1;if($m.test(e)||Hm.test(e))return!/[，,。；;]/.test(e);if(Um.test(e)){let r=e.split(/\s+/).filter(Boolean).length;return!(r>14||/\.$/u.test(e)&&r>3)}return!1}function zl(t){if(!t||t.length===0)throw new Error("\u6587\u672C\u6587\u4EF6\u5185\u5BB9\u4E3A\u7A7A\u3002");if(t[0]===239&&t[1]===187&&t[2]===191)return{text:new TextDecoder("utf-8").decode(t.subarray(3)),encoding:"utf-8"};if(t[0]===255&&t[1]===254)return{text:new TextDecoder("utf-16le").decode(t.subarray(2)),encoding:"utf-16le"};if(t[0]===254&&t[1]===255)return{text:new TextDecoder("utf-16be").decode(t.subarray(2)),encoding:"utf-16be"};let e=Math.min(t.length,4096),r=0,n=0;for(let a=0;a<e;a+=2)t[a]===0&&(r+=1),a+1<e&&t[a+1]===0&&(n+=1);let o=Math.ceil(e/2);if(o>4&&n/o>.35&&r/o<.05)return{text:new TextDecoder("utf-16le").decode(t),encoding:"utf-16le"};if(o>4&&r/o>.35&&n/o<.05)return{text:new TextDecoder("utf-16be").decode(t),encoding:"utf-16be"};try{return{text:new TextDecoder("utf-8",{fatal:!0}).decode(t),encoding:"utf-8"}}catch{}try{return{text:new TextDecoder("gb18030",{fatal:!0}).decode(t),encoding:"gb18030"}}catch{}return{text:new TextDecoder("utf-8").decode(t),encoding:"utf-8"}}function Gm(t){let e=[],r=[],n=()=>{r.length>0&&(e.push(r),r=[])};for(let o of t)String(o).trim()?r.push(o):n();return n(),e}function qm(t){let e=t.map(n=>n.trim()).filter(Boolean);return e.length<2?!1:e.filter(n=>/[。！？!?…"”’」』）)]$/.test(n)).length/e.length>=.5}function Xm(t){let e=t.map(o=>String(o)),r=Gm(e);if(r.length>1)return r.map(o=>kh(o)).filter(Boolean);let n=e.map(o=>o.trim()).filter(Boolean);return n.length<=1||qm(n)?n:r.map(o=>kh(o)).filter(Boolean)}function Vm(t,{fallbackTitle:e="\u6B63\u6587"}={}){let n=String(t||"").replace(/\r\n?/g,`
`).replace(/\u0000/g,"").split(`
`),o=[],a={title:"",lines:[],heading:""},i=()=>{(a.heading||a.lines.some(s=>s.trim()))&&o.push(a),a={title:"",lines:[],heading:""}};for(let s of n){if(jm(s)){i();let l=s.trim();a={title:l,lines:[],heading:l};continue}a.lines.push(s)}return i(),o.length===0?[{title:e,lines:n,heading:""}]:o}function Bl(t,{nextId:e,title:r="\u6B63\u6587"}={}){let n=Vm(t,{fallbackTitle:r}),o=i=>i.lines.some(s=>String(s).trim()),a=[];for(let i=0;i<n.length;i+=1){if(o(n[i])){a.push(n[i]);continue}let s=i;for(;s+1<n.length&&!o(n[s+1]);)s+=1;if(s-i+1>=3){i=s;continue}a.push(...n.slice(i,s+1)),i=s}return n=a.length>0?a:n,n.map((i,s)=>{let l=[];i.heading&&l.push({id:e(),kind:"heading",level:1,html:ho(i.heading),text:ft(i.heading)});for(let d of Xm(i.lines))l.push({id:e(),kind:"paragraph",html:ho(d),text:d});return{id:`ch${s}`,title:i.title||r||`\u7B2C ${s+1} \u7AE0`,blocks:l}})}function Km(t){return Dr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u672C"}async function $l(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=vn();try{let a=await xn(t),{text:i,encoding:s}=zl(a);if(Zi(i))throw new Error("\u6587\u672C\u6587\u4EF6\u5305\u542B\u5927\u91CF\u65E0\u6CD5\u8BC6\u522B\u7684\u5B57\u7B26\uFF0C\u53EF\u80FD\u4E0D\u662F\u7EAF\u6587\u672C\u6587\u4EF6\u3002");s==="gb18030"&&o("\u5DF2\u6309 GB18030 \u7F16\u7801\u8BFB\u53D6\u6587\u672C\uFF08\u975E UTF-8\uFF09\u3002");let l=Km(r),d=0,p=Bl(i,{nextId:()=>`b${d+=1}`,title:l});if(p.length===0||p.every(g=>g.blocks.length===0))throw new Error("\u6587\u672C\u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");p[0].title||(p[0].title=l);let u=p.map((g,w)=>({title:g.title,chapterIndex:w,depth:0}));return{title:l,chapters:p,toc:u,warnings:n,encoding:s,dispose:()=>{}}}catch(a){throw Fr(a,"\u65E0\u6CD5\u89E3\u6790\u6587\u672C\u6587\u4EF6")}}var Bm,$m,Hm,Um,Wm,Qi=kr(()=>{po();vo();Bm="[0-9\uFF10-\uFF19\u96F6\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u767E\u5343\u4E07\u4E24]",$m=new RegExp(`^\\s*(\u7B2C\\s*${Bm}+\\s*[\u7AE0\u7BC0\u8282\u56DE\u5377\u7BC7])(?:[\\s:\uFF1A\xB7\u3001.\uFF0E\u2014\u2013-].*)?$`),Hm=/^\s*(序章|楔子|引子|前言|序言|后记|後記|尾声|尾聲|终章|終章|番外(?:篇)?)(?:[\s:：·、.．—–-].*)?$/,Um=/^\s*((?:chapter|part|book|section)\s+(?:[0-9]+|[ivxlcdm]{1,8}|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty))(?:[.:：\s—–-].*)?$/i,Wm=72});function Qm(t){let e=String(t||"").trim();return e&&(/^(https?:\/\/|mailto:)/i.test(e)||e.startsWith("#"))?e:""}function Hl(t){let e=ho(String(t??"").trim()),r=[],n=o=>{let a=`\0${r.length}\0`;return r.push(o),a};return e=e.replace(/`([^`]+)`/g,(o,a)=>n(`<code>${a}</code>`)),e=e.replace(Ym,(o,a,i)=>{let s=Qm(i);return s?n(`<a href="${s}">${a}</a>`):a}),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/__([^_]+)__/g,"<strong>$1</strong>").replace(/~~([^~]+)~~/g,"<s>$1</s>").replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g,"$1<em>$2</em>").replace(/(^|[^_])_([^_\n]+)_(?!_)/g,"$1<em>$2</em>"),e=e.replace(/\u0000(\d+)\u0000/g,(o,a)=>r[Number(a)]??""),e}function Jm(t){return Dr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u6863"}function Da(t){return String(t).trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(e=>e.trim())}function eb(t){if(!/\|/.test(t))return!1;let e=Da(t);return e.length>0&&e.every(r=>/^:?-{3,}:?$/.test(r))}function Sh(t,e){return!!e&&t.includes("|")&&eb(e)&&Da(t).length===Da(e).length}function _h(t,e){return!!(/^\s{0,3}(#{1,6}\s|>|(?:```|~~~))/.test(t)||/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(t)||/^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/.test(t)||Sh(t,e))}function tb(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=vn(),a=Xn(),i=0,s={nextId:()=>`b${i+=1}`,warn:o,resolveLink:S=>{let y=String(S||"").trim();return y?/^(https?:\/\/|mailto:)/i.test(y)?{external:!0,href:y}:y.startsWith("#")?{chapter:0,anchor:y.slice(1)}:null:null}},l=[],d=[];function h(S){let y=String(S??""),k=[];return y=y.replace(Zm,(E,A,T)=>{let C=ft(A);if(/^data:image\//i.test(T)){let O=Vn(T);if(O){let R=Ol(s,{src:a.create(O),alt:C});R&&k.push(R)}else o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684 Markdown \u5185\u5D4C\u56FE\u7247\u3002")}else/^https?:/i.test(T)?o("\u5DF2\u8DF3\u8FC7 Markdown \u4E2D\u7684\u5916\u90E8\u56FE\u7247\uFF08\u907F\u514D\u7F51\u7EDC\u8DDF\u8E2A\uFF09\u3002"):o("\u5DF2\u8DF3\u8FC7 Markdown \u4E2D\u7684\u672C\u5730\u56FE\u7247\uFF08\u65E0\u6CD5\u5B9A\u4F4D\u56FE\u7247\u6587\u4EF6\uFF09\u3002");return C?` ${C} `:" "}),{html:Hl(y),images:k}}function p(S,y,k={}){let{html:E,images:A}=h(y),T=Ki(s,S,E,k);T&&l.push(T);for(let C of A)l.push(C);return!!T}let u=String(t??"").replace(/\r\n?/g,`
`).replace(/\u0000/g,"").split(`
`),g=0;for(;g<u.length;){let S=u[g];if(!S.trim()){g+=1;continue}let y=/^\s*(`{3,}|~{3,})\s*([A-Za-z0-9_+#.-]*)\s*$/.exec(S);if(y){let C=y[1],O=[];g+=1;let R=new RegExp(`^\\s*${C[0]==="`"?"`":"~"}{${C.length},}\\s*$`);for(;g<u.length;){if(R.test(u[g])){g+=1;break}O.push(u[g]),g+=1}let m=Ml(s,O.join(`
`));m&&l.push(m);continue}let k=/^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(S);if(k){p("heading",k[2],{level:k[1].length}),g+=1;continue}if(/^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/.test(S)){l.push(Ll(s)),g+=1;continue}if(Sh(S,u[g+1])){let C=Da(S);g+=2;let O=[];for(;g<u.length&&u[g].includes("|")&&u[g].trim();)O.push(Da(u[g])),g+=1;let R=`<thead><tr>${C.map(F=>`<th>${Hl(F)}</th>`).join("")}</tr></thead>`,m=O.length>0?`<tbody>${O.map(F=>`<tr>${C.map((L,$)=>`<td>${Hl(F[$]||"")}</td>`).join("")}</tr>`).join("")}</tbody>`:"",M=Pl(s,`<table>${R}${m}</table>`);M&&l.push(M);continue}if(/^\s{0,3}>/.test(S)){let C=[];for(;g<u.length&&/^\s{0,3}>/.test(u[g]);)C.push(u[g].replace(/^\s{0,3}>\s?/,"")),g+=1;let O=[],R=[];for(let M of C){let F=h(M);F.html&&O.push(F.html),R.push(...F.images)}let m=Ki(s,"quote",O.join("<br>"));m&&l.push(m);for(let M of R)l.push(M);continue}if(/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(S)){for(;g<u.length;){let C=/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+(.*)$/.exec(u[g]);if(!C)break;for(p("list-item",C[1]),g+=1;g<u.length&&/^\s{2,}\S/.test(u[g])&&!/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(u[g])&&!_h(u[g],u[g+1]);)g+=1}continue}let E=[];for(;g<u.length&&u[g].trim()&&!_h(u[g],u[g+1]);)E.push(u[g]),g+=1;if(E.length===0){g+=1;continue}let A=[];for(let C of E){let O=/(?: {2,}|\\)$/.test(C),R=h(C.replace(/(?: {2,}|\\)$/,""));R.html&&A.push(O?`${R.html}<br>`:R.html),d.push(...R.images)}let T=Ki(s,"paragraph",A.join(" "));for(T&&l.push(T);d.length>0;)l.push(d.shift())}let b=l.find(S=>S.kind==="heading"&&S.text)?.text||Jm(r);if(l.length===0)throw a.dispose(),new Error("Markdown \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");return{title:b,chapters:[{id:"ch0",title:b,blocks:l}],toc:[{title:b,chapterIndex:0,depth:0}],warnings:n,dispose:()=>a.dispose()}}async function Fa(t,e={}){try{let r=await xn(t),{text:n}=zl(r);return tb(n,e)}catch(r){throw Fr(r,"\u65E0\u6CD5\u89E3\u6790 Markdown \u6587\u4EF6")}}var Ym,Zm,Th=kr(()=>{po();Ra();vo();Qi();Ym=/\[([^\]]+)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g,Zm=/!\[([^\]]*)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g});var Ah=gs((w1,Nh)=>{"use strict";function wn(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function Eh(t,e){for(var r="",n=0,o=-1,a=0,i,s=0;s<=t.length;++s){if(s<t.length)i=t.charCodeAt(s);else{if(i===47)break;i=47}if(i===47){if(!(o===s-1||a===1))if(o!==s-1&&a===2){if(r.length<2||n!==2||r.charCodeAt(r.length-1)!==46||r.charCodeAt(r.length-2)!==46){if(r.length>2){var l=r.lastIndexOf("/");if(l!==r.length-1){l===-1?(r="",n=0):(r=r.slice(0,l),n=r.length-1-r.lastIndexOf("/")),o=s,a=0;continue}}else if(r.length===2||r.length===1){r="",n=0,o=s,a=0;continue}}e&&(r.length>0?r+="/..":r="..",n=2)}else r.length>0?r+="/"+t.slice(o+1,s):r=t.slice(o+1,s),n=s-o-1;o=s,a=0}else i===46&&a!==-1?++a:a=-1}return r}function rb(t,e){var r=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+n:r+t+n:n}var Wo={resolve:function(){for(var e="",r=!1,n,o=arguments.length-1;o>=-1&&!r;o--){var a;o>=0?a=arguments[o]:(n===void 0&&(n=process.cwd()),a=n),wn(a),a.length!==0&&(e=a+"/"+e,r=a.charCodeAt(0)===47)}return e=Eh(e,!r),r?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(wn(e),e.length===0)return".";var r=e.charCodeAt(0)===47,n=e.charCodeAt(e.length-1)===47;return e=Eh(e,!r),e.length===0&&!r&&(e="."),e.length>0&&n&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return wn(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,r=0;r<arguments.length;++r){var n=arguments[r];wn(n),n.length>0&&(e===void 0?e=n:e+="/"+n)}return e===void 0?".":Wo.normalize(e)},relative:function(e,r){if(wn(e),wn(r),e===r||(e=Wo.resolve(e),r=Wo.resolve(r),e===r))return"";for(var n=1;n<e.length&&e.charCodeAt(n)===47;++n);for(var o=e.length,a=o-n,i=1;i<r.length&&r.charCodeAt(i)===47;++i);for(var s=r.length,l=s-i,d=a<l?a:l,h=-1,p=0;p<=d;++p){if(p===d){if(l>d){if(r.charCodeAt(i+p)===47)return r.slice(i+p+1);if(p===0)return r.slice(i+p)}else a>d&&(e.charCodeAt(n+p)===47?h=p:p===0&&(h=0));break}var u=e.charCodeAt(n+p),g=r.charCodeAt(i+p);if(u!==g)break;u===47&&(h=p)}var w="";for(p=n+h+1;p<=o;++p)(p===o||e.charCodeAt(p)===47)&&(w.length===0?w+="..":w+="/..");return w.length>0?w+r.slice(i+h):(i+=h,r.charCodeAt(i)===47&&++i,r.slice(i))},_makeLong:function(e){return e},dirname:function(e){if(wn(e),e.length===0)return".";for(var r=e.charCodeAt(0),n=r===47,o=-1,a=!0,i=e.length-1;i>=1;--i)if(r=e.charCodeAt(i),r===47){if(!a){o=i;break}}else a=!1;return o===-1?n?"/":".":n&&o===1?"//":e.slice(0,o)},basename:function(e,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');wn(e);var n=0,o=-1,a=!0,i;if(r!==void 0&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var s=r.length-1,l=-1;for(i=e.length-1;i>=0;--i){var d=e.charCodeAt(i);if(d===47){if(!a){n=i+1;break}}else l===-1&&(a=!1,l=i+1),s>=0&&(d===r.charCodeAt(s)?--s===-1&&(o=i):(s=-1,o=l))}return n===o?o=l:o===-1&&(o=e.length),e.slice(n,o)}else{for(i=e.length-1;i>=0;--i)if(e.charCodeAt(i)===47){if(!a){n=i+1;break}}else o===-1&&(a=!1,o=i+1);return o===-1?"":e.slice(n,o)}},extname:function(e){wn(e);for(var r=-1,n=0,o=-1,a=!0,i=0,s=e.length-1;s>=0;--s){var l=e.charCodeAt(s);if(l===47){if(!a){n=s+1;break}continue}o===-1&&(a=!1,o=s+1),l===46?r===-1?r=s:i!==1&&(i=1):r!==-1&&(i=-1)}return r===-1||o===-1||i===0||i===1&&r===o-1&&r===n+1?"":e.slice(r,o)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return rb("/",e)},parse:function(e){wn(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return r;var n=e.charCodeAt(0),o=n===47,a;o?(r.root="/",a=1):a=0;for(var i=-1,s=0,l=-1,d=!0,h=e.length-1,p=0;h>=a;--h){if(n=e.charCodeAt(h),n===47){if(!d){s=h+1;break}continue}l===-1&&(d=!1,l=h+1),n===46?i===-1?i=h:p!==1&&(p=1):i!==-1&&(p=-1)}return i===-1||l===-1||p===0||p===1&&i===l-1&&i===s+1?l!==-1&&(s===0&&o?r.base=r.name=e.slice(1,l):r.base=r.name=e.slice(s,l)):(s===0&&o?(r.name=e.slice(1,i),r.base=e.slice(1,l)):(r.name=e.slice(s,i),r.base=e.slice(s,l)),r.ext=e.slice(i,l)),s>0?r.dir=e.slice(0,s-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};Wo.posix=Wo;Nh.exports=Wo});var Bh=gs((k1,Ul)=>{"use strict";var jo=typeof Reflect=="object"?Reflect:null,Ch=jo&&typeof jo.apply=="function"?jo.apply:function(e,r,n){return Function.prototype.apply.call(e,r,n)},Ji;jo&&typeof jo.ownKeys=="function"?Ji=jo.ownKeys:Object.getOwnPropertySymbols?Ji=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Ji=function(e){return Object.getOwnPropertyNames(e)};function nb(t){console&&console.warn&&console.warn(t)}var Rh=Number.isNaN||function(e){return e!==e};function gt(){gt.init.call(this)}Ul.exports=gt;Ul.exports.once=sb;gt.EventEmitter=gt;gt.prototype._events=void 0;gt.prototype._eventsCount=0;gt.prototype._maxListeners=void 0;var Ih=10;function es(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(gt,"defaultMaxListeners",{enumerable:!0,get:function(){return Ih},set:function(t){if(typeof t!="number"||t<0||Rh(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");Ih=t}});gt.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};gt.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||Rh(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function Mh(t){return t._maxListeners===void 0?gt.defaultMaxListeners:t._maxListeners}gt.prototype.getMaxListeners=function(){return Mh(this)};gt.prototype.emit=function(e){for(var r=[],n=1;n<arguments.length;n++)r.push(arguments[n]);var o=e==="error",a=this._events;if(a!==void 0)o=o&&a.error===void 0;else if(!o)return!1;if(o){var i;if(r.length>0&&(i=r[0]),i instanceof Error)throw i;var s=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw s.context=i,s}var l=a[e];if(l===void 0)return!1;if(typeof l=="function")Ch(l,this,r);else for(var d=l.length,h=Fh(l,d),n=0;n<d;++n)Ch(h[n],this,r);return!0};function Ph(t,e,r,n){var o,a,i;if(es(r),a=t._events,a===void 0?(a=t._events=Object.create(null),t._eventsCount=0):(a.newListener!==void 0&&(t.emit("newListener",e,r.listener?r.listener:r),a=t._events),i=a[e]),i===void 0)i=a[e]=r,++t._eventsCount;else if(typeof i=="function"?i=a[e]=n?[r,i]:[i,r]:n?i.unshift(r):i.push(r),o=Mh(t),o>0&&i.length>o&&!i.warned){i.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+i.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=t,s.type=e,s.count=i.length,nb(s)}return t}gt.prototype.addListener=function(e,r){return Ph(this,e,r,!1)};gt.prototype.on=gt.prototype.addListener;gt.prototype.prependListener=function(e,r){return Ph(this,e,r,!0)};function ob(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Oh(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},o=ob.bind(n);return o.listener=r,n.wrapFn=o,o}gt.prototype.once=function(e,r){return es(r),this.on(e,Oh(this,e,r)),this};gt.prototype.prependOnceListener=function(e,r){return es(r),this.prependListener(e,Oh(this,e,r)),this};gt.prototype.removeListener=function(e,r){var n,o,a,i,s;if(es(r),o=this._events,o===void 0)return this;if(n=o[e],n===void 0)return this;if(n===r||n.listener===r)--this._eventsCount===0?this._events=Object.create(null):(delete o[e],o.removeListener&&this.emit("removeListener",e,n.listener||r));else if(typeof n!="function"){for(a=-1,i=n.length-1;i>=0;i--)if(n[i]===r||n[i].listener===r){s=n[i].listener,a=i;break}if(a<0)return this;a===0?n.shift():ab(n,a),n.length===1&&(o[e]=n[0]),o.removeListener!==void 0&&this.emit("removeListener",e,s||r)}return this};gt.prototype.off=gt.prototype.removeListener;gt.prototype.removeAllListeners=function(e){var r,n,o;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var a=Object.keys(n),i;for(o=0;o<a.length;++o)i=a[o],i!=="removeListener"&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(r=n[e],typeof r=="function")this.removeListener(e,r);else if(r!==void 0)for(o=r.length-1;o>=0;o--)this.removeListener(e,r[o]);return this};function Lh(t,e,r){var n=t._events;if(n===void 0)return[];var o=n[e];return o===void 0?[]:typeof o=="function"?r?[o.listener||o]:[o]:r?ib(o):Fh(o,o.length)}gt.prototype.listeners=function(e){return Lh(this,e,!0)};gt.prototype.rawListeners=function(e){return Lh(this,e,!1)};gt.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):Dh.call(t,e)};gt.prototype.listenerCount=Dh;function Dh(t){var e=this._events;if(e!==void 0){var r=e[t];if(typeof r=="function")return 1;if(r!==void 0)return r.length}return 0}gt.prototype.eventNames=function(){return this._eventsCount>0?Ji(this._events):[]};function Fh(t,e){for(var r=new Array(e),n=0;n<e;++n)r[n]=t[n];return r}function ab(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function ib(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}function sb(t,e){return new Promise(function(r,n){function o(i){t.removeListener(e,a),n(i)}function a(){typeof t.removeListener=="function"&&t.removeListener("error",o),r([].slice.call(arguments))}zh(t,e,a,{once:!0}),e!=="error"&&lb(t,o,{once:!0})})}function lb(t,e,r){typeof t.on=="function"&&zh(t,"error",e,r)}function zh(t,e,r,n){if(typeof t.on=="function")n.once?t.once(e,r):t.on(e,r);else if(typeof t.addEventListener=="function")t.addEventListener(e,function o(a){n.once&&t.removeEventListener(e,o),r(a)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}});var $h=gs(ts=>{(function(t){t.parser=function(f,c){return new r(f,c)},t.SAXParser=r,t.SAXStream=h,t.createStream=l,t.MAX_BUFFER_LENGTH=64*1024;var e=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];t.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function r(f,c){if(!(this instanceof r))return new r(f,c);var _=this;o(_),_.q=_.c="",_.bufferCheckPosition=t.MAX_BUFFER_LENGTH,_.encoding=null,_.opt=c||{},_.opt.lowercase=_.opt.lowercase||_.opt.lowercasetags,_.looseCase=_.opt.lowercase?"toLowerCase":"toUpperCase",_.opt.maxEntityCount=_.opt.maxEntityCount||512,_.opt.maxEntityDepth=_.opt.maxEntityDepth||4,_.entityCount=_.entityDepth=0,_.tags=[],_.closed=_.closedRoot=_.sawRoot=!1,_.tag=_.error=null,_.strict=!!f,_.noscript=!!(f||_.opt.noscript),_.state=m.BEGIN,_.strictEntities=_.opt.strictEntities,_.ENTITIES=_.strictEntities?Object.create(t.XML_ENTITIES):Object.create(t.ENTITIES),_.attribList=[],_.opt.xmlns&&(_.ns=Object.create(b)),_.opt.unquotedAttributeValues===void 0&&(_.opt.unquotedAttributeValues=!f),_.trackPosition=_.opt.position!==!1,_.trackPosition&&(_.position=_.line=_.column=0),F(_,"onready")}Object.create||(Object.create=function(f){function c(){}c.prototype=f;var _=new c;return _}),Object.keys||(Object.keys=function(f){var c=[];for(var _ in f)f.hasOwnProperty(_)&&c.push(_);return c});function n(f){for(var c=Math.max(t.MAX_BUFFER_LENGTH,10),_=0,x=0,le=e.length;x<le;x++){var re=f[e[x]].length;if(re>c)switch(e[x]){case"textNode":ce(f);break;case"cdata":ne(f,"oncdata",f.cdata),f.cdata="";break;case"script":ne(f,"onscript",f.script),f.script="";break;default:oe(f,"Max buffer length exceeded: "+e[x])}_=Math.max(_,re)}var ge=t.MAX_BUFFER_LENGTH-_;f.bufferCheckPosition=ge+f.position}function o(f){for(var c=0,_=e.length;c<_;c++)f[e[c]]=""}function a(f){ce(f),f.cdata!==""&&(ne(f,"oncdata",f.cdata),f.cdata=""),f.script!==""&&(ne(f,"onscript",f.script),f.script="")}r.prototype={end:function(){ue(this)},write:nt,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){a(this)}};var i;try{i=require("stream").Stream}catch{i=function(){}}i||(i=function(){});var s=t.EVENTS.filter(function(f){return f!=="error"&&f!=="end"});function l(f,c){return new h(f,c)}function d(f,c){if(f.length>=2){if(f[0]===255&&f[1]===254)return"utf-16le";if(f[0]===254&&f[1]===255)return"utf-16be"}return f.length>=3&&f[0]===239&&f[1]===187&&f[2]===191?"utf8":f.length>=4?f[0]===60&&f[1]===0&&f[2]===63&&f[3]===0?"utf-16le":f[0]===0&&f[1]===60&&f[2]===0&&f[3]===63?"utf-16be":"utf8":c?"utf8":null}function h(f,c){if(!(this instanceof h))return new h(f,c);i.apply(this),this._parser=new r(f,c),this.writable=!0,this.readable=!0;var _=this;this._parser.onend=function(){_.emit("end")},this._parser.onerror=function(x){_.emit("error",x),_._parser.error=null},this._decoder=null,this._decoderBuffer=null,s.forEach(function(x){Object.defineProperty(_,"on"+x,{get:function(){return _._parser["on"+x]},set:function(le){if(!le)return _.removeAllListeners(x),_._parser["on"+x]=le,le;_.on(x,le)},enumerable:!0,configurable:!1})})}h.prototype=Object.create(i.prototype,{constructor:{value:h}}),h.prototype._decodeBuffer=function(f,c){if(this._decoderBuffer&&(f=Buffer.concat([this._decoderBuffer,f]),this._decoderBuffer=null),!this._decoder){var _=d(f,c);if(!_)return this._decoderBuffer=f,"";this._parser.encoding=_,this._decoder=new TextDecoder(_)}return this._decoder.decode(f,{stream:!c})},h.prototype.write=function(f){if(typeof Buffer=="function"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(f))f=this._decodeBuffer(f,!1);else if(this._decoderBuffer){var c=this._decodeBuffer(Buffer.alloc(0),!0);c&&(this._parser.write(c),this.emit("data",c))}return this._parser.write(f.toString()),this.emit("data",f),!0},h.prototype.end=function(f){if(f&&f.length&&this.write(f),this._decoderBuffer){var c=this._decodeBuffer(Buffer.alloc(0),!0);c&&(this._parser.write(c),this.emit("data",c))}else if(this._decoder){var _=this._decoder.decode();_&&(this._parser.write(_),this.emit("data",_))}return this._parser.end(),!0},h.prototype.on=function(f,c){var _=this;return!_._parser["on"+f]&&s.indexOf(f)!==-1&&(_._parser["on"+f]=function(){var x=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);x.splice(0,0,f),_.emit.apply(_,x)}),i.prototype.on.call(_,f,c)};var p=/^\[CDATA\[$/i,u=/^DOCTYPE$/i,g="http://www.w3.org/XML/1998/namespace",w="http://www.w3.org/2000/xmlns/",b={xml:g,xmlns:w},S=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,y=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,k=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,E=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function A(f){return f===" "||f===`
`||f==="\r"||f==="	"}function T(f){return f==='"'||f==="'"}function C(f){return f===">"||A(f)}function O(f,c){return f.test(c)}function R(f,c){return!O(f,c)}var m=0;t.STATE={BEGIN:m++,BEGIN_WHITESPACE:m++,TEXT:m++,TEXT_ENTITY:m++,OPEN_WAKA:m++,SGML_DECL:m++,SGML_DECL_QUOTED:m++,DOCTYPE:m++,DOCTYPE_QUOTED:m++,DOCTYPE_DTD:m++,DOCTYPE_DTD_QUOTED:m++,COMMENT_STARTING:m++,COMMENT:m++,COMMENT_ENDING:m++,COMMENT_ENDED:m++,CDATA:m++,CDATA_ENDING:m++,CDATA_ENDING_2:m++,PROC_INST:m++,PROC_INST_BODY:m++,PROC_INST_ENDING:m++,OPEN_TAG:m++,OPEN_TAG_SLASH:m++,ATTRIB:m++,ATTRIB_NAME:m++,ATTRIB_NAME_SAW_WHITE:m++,ATTRIB_VALUE:m++,ATTRIB_VALUE_QUOTED:m++,ATTRIB_VALUE_CLOSED:m++,ATTRIB_VALUE_UNQUOTED:m++,ATTRIB_VALUE_ENTITY_Q:m++,ATTRIB_VALUE_ENTITY_U:m++,CLOSE_TAG:m++,CLOSE_TAG_SAW_WHITE:m++,SCRIPT:m++,SCRIPT_ENDING:m++},t.XML_ENTITIES=Object.assign(Object.create(null),{amp:"&",gt:">",lt:"<",quot:'"',apos:"'"}),t.ENTITIES=Object.assign(Object.create(null),{amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830}),Object.keys(t.ENTITIES).forEach(function(f){var c=t.ENTITIES[f],_=typeof c=="number"?String.fromCharCode(c):c;t.ENTITIES[f]=_});for(var M in t.STATE)t.STATE[t.STATE[M]]=M;m=t.STATE;function F(f,c,_){f[c]&&f[c](_)}function L(f){var c=f&&f.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);return c?c[2]:null}function $(f){return f?f.toLowerCase().replace(/[^a-z0-9]/g,""):null}function J(f,c){let _=$(f),x=$(c);return!_||!x?!0:x==="utf16"?_==="utf16le"||_==="utf16be":_===x}function se(f,c){if(!(!f.strict||!f.encoding||!c||c.name!=="xml")){var _=L(c.body);_&&!J(f.encoding,_)&&P(f,"XML declaration encoding "+_+" does not match detected stream encoding "+f.encoding.toUpperCase())}}function ne(f,c,_){f.textNode&&ce(f),F(f,c,_)}function ce(f){f.textNode=G(f.opt,f.textNode),f.textNode&&F(f,"ontext",f.textNode),f.textNode=""}function G(f,c){return f.trim&&(c=c.trim()),f.normalize&&(c=c.replace(/\s+/g," ")),c}function oe(f,c){return ce(f),f.trackPosition&&(c+=`
Line: `+f.line+`
Column: `+f.column+`
Char: `+f.c),c=new Error(c),f.error=c,F(f,"onerror",c),f}function ue(f){return f.sawRoot&&!f.closedRoot&&P(f,"Unclosed root tag"),f.state!==m.BEGIN&&f.state!==m.BEGIN_WHITESPACE&&f.state!==m.TEXT&&oe(f,"Unexpected end"),ce(f),f.c="",f.closed=!0,F(f,"onend"),r.call(f,f.strict,f.opt),f}function P(f,c){if(typeof f!="object"||!(f instanceof r))throw new Error("bad call to strictFail");f.strict&&oe(f,c)}function B(f){f.strict||(f.tagName=f.tagName[f.looseCase]());var c=f.tags[f.tags.length-1]||f,_=f.tag={name:f.tagName,attributes:{}};f.opt.xmlns&&(_.ns=c.ns),f.attribList.length=0,ne(f,"onopentagstart",_)}function V(f,c){var _=f.indexOf(":"),x=_<0?["",f]:f.split(":"),le=x[0],re=x[1];return c&&f==="xmlns"&&(le="xmlns",re=""),{prefix:le,local:re}}function he(f){if(f.strict||(f.attribName=f.attribName[f.looseCase]()),f.attribList.indexOf(f.attribName)!==-1||f.tag.attributes.hasOwnProperty(f.attribName)){f.attribName=f.attribValue="";return}if(f.opt.xmlns){var c=V(f.attribName,!0),_=c.prefix,x=c.local;if(_==="xmlns")if(x==="xml"&&f.attribValue!==g)P(f,"xml: prefix must be bound to "+g+`
Actual: `+f.attribValue);else if(x==="xmlns"&&f.attribValue!==w)P(f,"xmlns: prefix must be bound to "+w+`
Actual: `+f.attribValue);else{var le=f.tag,re=f.tags[f.tags.length-1]||f;le.ns===re.ns&&(le.ns=Object.create(re.ns)),le.ns[x]=f.attribValue}f.attribList.push([f.attribName,f.attribValue])}else f.tag.attributes[f.attribName]=f.attribValue,ne(f,"onattribute",{name:f.attribName,value:f.attribValue});f.attribName=f.attribValue=""}function Z(f,c){if(f.opt.xmlns){var _=f.tag,x=V(f.tagName);_.prefix=x.prefix,_.local=x.local,_.uri=_.ns[x.prefix]||"",_.prefix&&!_.uri&&(P(f,"Unbound namespace prefix: "+JSON.stringify(f.tagName)),_.uri=x.prefix);var le=f.tags[f.tags.length-1]||f;_.ns&&le.ns!==_.ns&&Object.keys(_.ns).forEach(function(Ke){ne(f,"onopennamespace",{prefix:Ke,uri:_.ns[Ke]})});for(var re=0,ge=f.attribList.length;re<ge;re++){var be=f.attribList[re],ye=be[0],De=be[1],Ee=V(ye,!0),Be=Ee.prefix,at=Ee.local,ot=Be===""?"":_.ns[Be]||"",Oe={name:ye,value:De,prefix:Be,local:at,uri:ot};Be&&Be!=="xmlns"&&!ot&&(P(f,"Unbound namespace prefix: "+JSON.stringify(Be)),Oe.uri=Be),f.tag.attributes[ye]=Oe,ne(f,"onattribute",Oe)}f.attribList.length=0}f.tag.isSelfClosing=!!c,f.sawRoot=!0,f.tags.push(f.tag),ne(f,"onopentag",f.tag),c||(!f.noscript&&f.tagName.toLowerCase()==="script"?f.state=m.SCRIPT:f.state=m.TEXT,f.tag=null,f.tagName=""),f.attribName=f.attribValue="",f.attribList.length=0}function Pe(f){if(!f.tagName){P(f,"Weird empty close tag."),f.textNode+="</>",f.state=m.TEXT;return}if(f.script){if(f.tagName!=="script"){f.script+="</"+f.tagName+">",f.tagName="",f.state=m.SCRIPT;return}ne(f,"onscript",f.script),f.script=""}var c=f.tags.length,_=f.tagName;f.strict||(_=_[f.looseCase]());for(var x=_;c--;){var le=f.tags[c];if(le.name!==x)P(f,"Unexpected close tag");else break}if(c<0){P(f,"Unmatched closing tag: "+f.tagName),f.textNode+="</"+f.tagName+">",f.state=m.TEXT;return}f.tagName=_;for(var re=f.tags.length;re-- >c;){var ge=f.tag=f.tags.pop();f.tagName=f.tag.name,ne(f,"onclosetag",f.tagName);var be={};for(var ye in ge.ns)be[ye]=ge.ns[ye];var De=f.tags[f.tags.length-1]||f;f.opt.xmlns&&ge.ns!==De.ns&&Object.keys(ge.ns).forEach(function(Ee){var Be=ge.ns[Ee];ne(f,"onclosenamespace",{prefix:Ee,uri:Be})})}c===0&&(f.closedRoot=!0),f.tagName=f.attribValue=f.attribName="",f.attribList.length=0,f.state=m.TEXT}function de(f){var c=f.entity,_=c.toLowerCase(),x,le="";return f.ENTITIES[c]?f.ENTITIES[c]:f.ENTITIES[_]?f.ENTITIES[_]:(c=_,c.charAt(0)==="#"&&(c.charAt(1)==="x"?(c=c.slice(2),x=parseInt(c,16),le=x.toString(16)):(c=c.slice(1),x=parseInt(c,10),le=x.toString(10))),c=c.replace(/^0+/,""),isNaN(x)||le.toLowerCase()!==c||x<0||x>1114111||!_e(x)?(P(f,"Invalid character entity"),"&"+f.entity+";"):String.fromCodePoint(x))}function _e(f){return f===9||f===10||f===13||f>=32&&f<=55295||f>=57344&&f<=65533||f>=65536&&f<=1114111}function Ve(f,c){c==="<"?(f.state=m.OPEN_WAKA,f.startTagPosition=f.position):A(c)||(P(f,"Non-whitespace before first tag."),f.textNode=c,f.state=m.TEXT)}function Ue(f,c){var _="";return c<f.length&&(_=f.charAt(c)),_}function nt(f){var c=this;if(this.error)throw this.error;if(c.closed)return oe(c,"Cannot write after close. Assign an onready handler.");if(f===null)return ue(c);typeof f=="object"&&(f=f.toString());for(var _=0,x="";x=Ue(f,_++),c.c=x,!!x;)switch(c.trackPosition&&(c.position++,x===`
`?(c.line++,c.column=0):c.column++),c.state){case m.BEGIN:if(c.state=m.BEGIN_WHITESPACE,x==="\uFEFF")continue;Ve(c,x);continue;case m.BEGIN_WHITESPACE:Ve(c,x);continue;case m.TEXT:if(c.sawRoot&&!c.closedRoot){for(var re=_-1;x&&x!=="<"&&x!=="&";)x=Ue(f,_++),x&&c.trackPosition&&(c.position++,x===`
`?(c.line++,c.column=0):c.column++);c.textNode+=f.substring(re,_-1)}x==="<"&&!(c.sawRoot&&c.closedRoot&&!c.strict)?(c.state=m.OPEN_WAKA,c.startTagPosition=c.position):(!A(x)&&(!c.sawRoot||c.closedRoot)&&P(c,"Text data outside of root node."),x==="&"?c.state=m.TEXT_ENTITY:c.textNode+=x);continue;case m.SCRIPT:x==="<"?c.state=m.SCRIPT_ENDING:c.script+=x;continue;case m.SCRIPT_ENDING:x==="/"?c.state=m.CLOSE_TAG:(c.script+="<"+x,c.state=m.SCRIPT);continue;case m.OPEN_WAKA:if(x==="!")c.state=m.SGML_DECL,c.sgmlDecl="";else if(!A(x))if(O(S,x))c.state=m.OPEN_TAG,c.tagName=x;else if(x==="/")c.state=m.CLOSE_TAG,c.tagName="";else if(x==="?")c.state=m.PROC_INST,c.procInstName=c.procInstBody="";else{if(P(c,"Unencoded <"),c.startTagPosition+1<c.position){var le=c.position-c.startTagPosition;x=new Array(le).join(" ")+x}c.textNode+="<"+x,c.state=m.TEXT}continue;case m.SGML_DECL:if(c.sgmlDecl+x==="--"){c.state=m.COMMENT,c.comment="",c.sgmlDecl="";continue}c.doctype&&c.doctype!==!0&&c.sgmlDecl?(c.state=m.DOCTYPE_DTD,c.doctype+="<!"+c.sgmlDecl+x,c.sgmlDecl=""):p.test(c.sgmlDecl+x)?(ne(c,"onopencdata"),c.state=m.CDATA,c.sgmlDecl="",c.cdata=""):u.test(c.sgmlDecl+x)?(c.state=m.DOCTYPE,(c.doctype||c.sawRoot)&&P(c,"Inappropriately located doctype declaration"),c.doctype="",c.sgmlDecl=""):x===">"?(ne(c,"onsgmldeclaration",c.sgmlDecl),c.sgmlDecl="",c.state=m.TEXT):(T(x)&&(c.state=m.SGML_DECL_QUOTED),c.sgmlDecl+=x);continue;case m.SGML_DECL_QUOTED:x===c.q&&(c.state=m.SGML_DECL,c.q=""),c.sgmlDecl+=x;continue;case m.DOCTYPE:x===">"?(c.state=m.TEXT,ne(c,"ondoctype",c.doctype),c.doctype=!0):(c.doctype+=x,x==="["?c.state=m.DOCTYPE_DTD:T(x)&&(c.state=m.DOCTYPE_QUOTED,c.q=x));continue;case m.DOCTYPE_QUOTED:c.doctype+=x,x===c.q&&(c.q="",c.state=m.DOCTYPE);continue;case m.DOCTYPE_DTD:x==="]"?(c.doctype+=x,c.state=m.DOCTYPE):x==="<"?(c.state=m.OPEN_WAKA,c.startTagPosition=c.position):T(x)?(c.doctype+=x,c.state=m.DOCTYPE_DTD_QUOTED,c.q=x):c.doctype+=x;continue;case m.DOCTYPE_DTD_QUOTED:c.doctype+=x,x===c.q&&(c.state=m.DOCTYPE_DTD,c.q="");continue;case m.COMMENT:x==="-"?c.state=m.COMMENT_ENDING:c.comment+=x;continue;case m.COMMENT_ENDING:x==="-"?(c.state=m.COMMENT_ENDED,c.comment=G(c.opt,c.comment),c.comment&&ne(c,"oncomment",c.comment),c.comment=""):(c.comment+="-"+x,c.state=m.COMMENT);continue;case m.COMMENT_ENDED:x!==">"?(P(c,"Malformed comment"),c.comment+="--"+x,c.state=m.COMMENT):c.doctype&&c.doctype!==!0?c.state=m.DOCTYPE_DTD:c.state=m.TEXT;continue;case m.CDATA:for(var re=_-1;x&&x!=="]";)x=Ue(f,_++),x&&c.trackPosition&&(c.position++,x===`
`?(c.line++,c.column=0):c.column++);c.cdata+=f.substring(re,_-1),x==="]"&&(c.state=m.CDATA_ENDING);continue;case m.CDATA_ENDING:x==="]"?c.state=m.CDATA_ENDING_2:(c.cdata+="]"+x,c.state=m.CDATA);continue;case m.CDATA_ENDING_2:x===">"?(c.cdata&&ne(c,"oncdata",c.cdata),ne(c,"onclosecdata"),c.cdata="",c.state=m.TEXT):x==="]"?c.cdata+="]":(c.cdata+="]]"+x,c.state=m.CDATA);continue;case m.PROC_INST:x==="?"?c.state=m.PROC_INST_ENDING:A(x)?c.state=m.PROC_INST_BODY:c.procInstName+=x;continue;case m.PROC_INST_BODY:if(!c.procInstBody&&A(x))continue;x==="?"?c.state=m.PROC_INST_ENDING:c.procInstBody+=x;continue;case m.PROC_INST_ENDING:if(x===">"){let De={name:c.procInstName,body:c.procInstBody};se(c,De),ne(c,"onprocessinginstruction",De),c.procInstName=c.procInstBody="",c.state=m.TEXT}else c.procInstBody+="?"+x,c.state=m.PROC_INST_BODY;continue;case m.OPEN_TAG:O(y,x)?c.tagName+=x:(B(c),x===">"?Z(c):x==="/"?c.state=m.OPEN_TAG_SLASH:(A(x)||P(c,"Invalid character in tag name"),c.state=m.ATTRIB));continue;case m.OPEN_TAG_SLASH:x===">"?(Z(c,!0),Pe(c)):(P(c,"Forward-slash in opening tag not followed by >"),c.state=m.ATTRIB);continue;case m.ATTRIB:if(A(x))continue;x===">"?Z(c):x==="/"?c.state=m.OPEN_TAG_SLASH:O(S,x)?(c.attribName=x,c.attribValue="",c.state=m.ATTRIB_NAME):P(c,"Invalid attribute name");continue;case m.ATTRIB_NAME:x==="="?c.state=m.ATTRIB_VALUE:x===">"?(P(c,"Attribute without value"),c.attribValue=c.attribName,he(c),Z(c)):A(x)?c.state=m.ATTRIB_NAME_SAW_WHITE:O(y,x)?c.attribName+=x:P(c,"Invalid attribute name");continue;case m.ATTRIB_NAME_SAW_WHITE:if(x==="=")c.state=m.ATTRIB_VALUE;else{if(A(x))continue;P(c,"Attribute without value"),c.tag.attributes[c.attribName]="",c.attribValue="",ne(c,"onattribute",{name:c.attribName,value:""}),c.attribName="",x===">"?Z(c):O(S,x)?(c.attribName=x,c.state=m.ATTRIB_NAME):(P(c,"Invalid attribute name"),c.state=m.ATTRIB)}continue;case m.ATTRIB_VALUE:if(A(x))continue;T(x)?(c.q=x,c.state=m.ATTRIB_VALUE_QUOTED):(c.opt.unquotedAttributeValues||oe(c,"Unquoted attribute value"),c.state=m.ATTRIB_VALUE_UNQUOTED,c.attribValue=x);continue;case m.ATTRIB_VALUE_QUOTED:if(x!==c.q){x==="&"?c.state=m.ATTRIB_VALUE_ENTITY_Q:c.attribValue+=x;continue}he(c),c.q="",c.state=m.ATTRIB_VALUE_CLOSED;continue;case m.ATTRIB_VALUE_CLOSED:A(x)?c.state=m.ATTRIB:x===">"?Z(c):x==="/"?c.state=m.OPEN_TAG_SLASH:O(S,x)?(P(c,"No whitespace between attributes"),c.attribName=x,c.attribValue="",c.state=m.ATTRIB_NAME):P(c,"Invalid attribute name");continue;case m.ATTRIB_VALUE_UNQUOTED:if(!C(x)){x==="&"?c.state=m.ATTRIB_VALUE_ENTITY_U:c.attribValue+=x;continue}he(c),x===">"?Z(c):c.state=m.ATTRIB;continue;case m.CLOSE_TAG:if(c.tagName)x===">"?Pe(c):O(y,x)?c.tagName+=x:c.script?(c.script+="</"+c.tagName+x,c.tagName="",c.state=m.SCRIPT):(A(x)||P(c,"Invalid tagname in closing tag"),c.state=m.CLOSE_TAG_SAW_WHITE);else{if(A(x))continue;R(S,x)?c.script?(c.script+="</"+x,c.state=m.SCRIPT):P(c,"Invalid tagname in closing tag."):c.tagName=x}continue;case m.CLOSE_TAG_SAW_WHITE:if(A(x))continue;x===">"?Pe(c):P(c,"Invalid characters in closing tag");continue;case m.TEXT_ENTITY:case m.ATTRIB_VALUE_ENTITY_Q:case m.ATTRIB_VALUE_ENTITY_U:var ge,be;switch(c.state){case m.TEXT_ENTITY:ge=m.TEXT,be="textNode";break;case m.ATTRIB_VALUE_ENTITY_Q:ge=m.ATTRIB_VALUE_QUOTED,be="attribValue";break;case m.ATTRIB_VALUE_ENTITY_U:ge=m.ATTRIB_VALUE_UNQUOTED,be="attribValue";break}if(x===";"){var ye=de(c);c.opt.unparsedEntities&&!Object.values(t.XML_ENTITIES).includes(ye)?((c.entityCount+=1)>c.opt.maxEntityCount&&oe(c,"Parsed entity count exceeds max entity count"),(c.entityDepth+=1)>c.opt.maxEntityDepth&&oe(c,"Parsed entity depth exceeds max entity depth"),c.entity="",c.state=ge,c.write(ye),c.entityDepth-=1):(c[be]+=ye,c.entity="",c.state=ge)}else O(c.entity.length?E:k,x)?c.entity+=x:(P(c,"Invalid character in entity name"),c[be]+="&"+c.entity+x,c.entity="",c.state=ge);continue;default:throw new Error(c,"Unknown state: "+c.state)}return c.position>=c.bufferCheckPosition&&n(c),c}String.fromCodePoint||(function(){var f=String.fromCharCode,c=Math.floor,_=function(){var x=16384,le=[],re,ge,be=-1,ye=arguments.length;if(!ye)return"";for(var De="";++be<ye;){var Ee=Number(arguments[be]);if(!isFinite(Ee)||Ee<0||Ee>1114111||c(Ee)!==Ee)throw RangeError("Invalid code point: "+Ee);Ee<=65535?le.push(Ee):(Ee-=65536,re=(Ee>>10)+55296,ge=Ee%1024+56320,le.push(re,ge)),(be+1===ye||le.length>x)&&(De+=f.apply(null,le),le.length=0)}return De};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:_,configurable:!0,writable:!0}):String.fromCodePoint=_})()})(typeof ts>"u"?ts.sax={}:ts)});function ub(t){return t.charCodeAt(0)===65279?t.slice(1):t}function hb(t){return t.toLowerCase()}function pb(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===0}function rs(t,e,r){for(let n of t)e=n(e,r);return e}function Go(t,e,r){let n=Object.create(null);n.value=r,n.writable=!0,n.enumerable=!0,n.configurable=!0,Object.defineProperty(t,e,n)}function fb(t,e){let r={};return typeof e=="object"&&(r=e),new Wl(r).parseStringPromise(t)}async function jh(t,e={}){return await fb(t,e)}var qo,Uh,Wh,cb,db,zr,Hh,Wl,Gh=kr(()=>{qo=It(Ah(),1),Uh=It(Bh(),1),Wh=It($h(),1),cb=Object.defineProperty,db=(t,e,r)=>e in t?cb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,zr=(t,e,r)=>db(t,typeof e!="symbol"?e+"":e,r);Hh={.1:{explicitCharkey:!1,trim:!0,normalize:!0,normalizeTags:!1,attrkey:"@",charkey:"#",explicitArray:!1,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!1,validator:null,xmlns:!1,explicitChildren:!1,childkey:"@@",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,emptyTag:""},.2:{explicitCharkey:!1,trim:!1,normalize:!1,normalizeTags:!1,attrkey:"$",charkey:"_",explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!0,validator:null,xmlns:!1,explicitChildren:!1,preserveChildrenOrder:!1,childkey:"$$",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,rootName:"root",xmldec:{version:"1.0",encoding:"UTF-8",standalone:!0},doctype:null,renderOpts:{pretty:!0,indent:"  ",newline:`
`},headless:!1,chunkSize:1e4,emptyTag:"",cdata:!1}};Wl=class extends Uh.EventEmitter{constructor(e){super(),zr(this,"options"),zr(this,"remaining",""),zr(this,"saxParser"),zr(this,"resultObject",null),zr(this,"EXPLICIT_CHARKEY"),zr(this,"errThrown",!1),zr(this,"ended",!1),zr(this,"processAsync",()=>{try{if(this.remaining.length<=this.options.chunkSize){let r=this.remaining;this.remaining="",this.saxParser=this.saxParser.write(r),this.saxParser.close()}else{let r=this.remaining.slice(0,this.options.chunkSize);this.remaining=this.remaining.slice(this.options.chunkSize),this.saxParser=this.saxParser.write(r),setTimeout(this.processAsync,0)}}catch(r){this.errThrown||(this.errThrown=!0,this.emit("error",r))}}),zr(this,"assignOrPush",(r,n,o)=>{n in r?(Array.isArray(r[n])||Go(r,n,[r[n]]),r[n].push(o)):this.options.explicitArray?Go(r,n,[o]):Go(r,n,o)}),zr(this,"reset",()=>{this.removeAllListeners(),this.saxParser=Wh.default.parser(this.options.strict,{trim:!1,normalize:!1,xmlns:this.options.xmlns}),this.errThrown=!1,this.saxParser.onerror=i=>{this.saxParser.resume(),this.errThrown||(this.errThrown=!0,this.emit("error",i))},this.saxParser.onend=()=>{this.ended||(this.ended=!0,this.emit("end",this.resultObject))},this.ended=!1,this.EXPLICIT_CHARKEY=this.options.explicitCharkey,this.resultObject=null;let r=[],n=this.options.attrkey,o=this.options.charkey;this.saxParser.onopentag=i=>{let s={};s[o]="",this.options.ignoreAttrs||Object.keys(i.attributes).forEach(l=>{!(n in s)&&!this.options.mergeAttrs&&(s[n]={});let d=this.options.attrValueProcessors?rs(this.options.attrValueProcessors,i.attributes[l],l):i.attributes[l],h=this.options.attrNameProcessors?rs(this.options.attrNameProcessors,l):l;this.options.mergeAttrs?this.assignOrPush(s,h,d):Go(s[n],h,d)}),s["#name"]=this.options.tagNameProcessors?rs(this.options.tagNameProcessors,i.name):i.name,this.options.xmlns&&(s[this.options.xmlnskey]={uri:i.uri,local:i.local}),r.push(s)},this.saxParser.onclosetag=()=>{let i=r.pop(),s=i["#name"];(!this.options.explicitChildren||!this.options.preserveChildrenOrder)&&delete i["#name"];let l;i.cdata===!0&&(l=i.cdata,delete i.cdata);let d=r[r.length-1],h="";if(i[o].match(/^\s*$/)&&!l?(h=i[o],delete i[o]):(this.options.trim&&(i[o]=i[o].trim()),this.options.normalize&&(i[o]=i[o].replace(/\s{2,}/g," ").trim()),i[o]=this.options.valueProcessors?rs(this.options.valueProcessors,i[o],s):i[o],Object.keys(i).length===1&&o in i&&!this.EXPLICIT_CHARKEY&&(i=i[o])),pb(i)&&(typeof this.options.emptyTag=="function"?i=this.options.emptyTag():i=this.options.emptyTag!==""?this.options.emptyTag:h),this.options.validator){let p=`/${r.map(u=>u["#name"]).concat(s).join("/")}`;(()=>{try{i=this.options.validator(p,d&&d[s],i)}catch(u){this.emit("error",u)}})()}if(this.options.explicitChildren&&!this.options.mergeAttrs&&typeof i=="object")if(this.options.preserveChildrenOrder){if(d){d[this.options.childkey]=d[this.options.childkey]||[];let p={};Object.keys(i).forEach(u=>{Go(p,u,i[u])}),d[this.options.childkey].push(p),delete i["#name"],Object.keys(i).length===1&&o in i&&!this.EXPLICIT_CHARKEY&&(i=i[o])}}else{let p={};this.options.attrkey in i&&(p[this.options.attrkey]=i[this.options.attrkey],delete i[this.options.attrkey]),!this.options.charsAsChildren&&this.options.charkey in i&&(p[this.options.charkey]=i[this.options.charkey],delete i[this.options.charkey]),Object.getOwnPropertyNames(i).length>0&&(p[this.options.childkey]=i),i=p}if(r.length>0)this.assignOrPush(d,s,i);else{if(this.options.explicitRoot){let p=i,u={};Go(u,s,p),i=u}this.resultObject=i,this.ended=!0,this.emit("end",this.resultObject)}};let a=i=>{let s=r[r.length-1];if(s&&(s[o]+=i,this.options.explicitChildren&&this.options.preserveChildrenOrder&&this.options.charsAsChildren&&(this.options.includeWhiteChars||i.replace(/\\n/g,"").trim()!==""))){s[this.options.childkey]=s[this.options.childkey]||[];let l={"#name":"__text__"};l[o]=i,this.options.normalize&&(l[o]=l[o].replace(/\s{2,}/g," ").trim()),s[this.options.childkey].push(l)}return s};this.saxParser.ontext=a,this.saxParser.oncdata=i=>{let s=a(i);s&&(s.cdata=!0)}}),zr(this,"parseString",(r,n)=>{n&&typeof n=="function"&&(this.on("end",o=>{this.reset(),n(null,o)}),this.on("error",o=>{this.reset(),n(o)}));try{return r=r.toString(),r.trim()===""?(this.emit("end",null),!0):(r=ub(r),this.options.async?(this.remaining=r,setTimeout(this.processAsync,0),this.saxParser):this.saxParser.write(r).close())}catch(o){if(!this.errThrown&&!this.ended)this.emit("error",o),this.errThrown=!0;else if(this.ended)throw o}}),zr(this,"parseStringPromise",r=>new Promise((n,o)=>{this.parseString(r,(a,i)=>{a?o(a):n(i)})})),this.options={},Object.keys(Hh["0.2"]).forEach(r=>{this.options[r]=Hh["0.2"][r]}),e&&Object.keys(e).forEach(r=>{this.options[r]=e[r]}),this.options.xmlns&&(this.options.xmlnskey=`${this.options.attrkey}ns`),this.options.normalizeTags&&(this.options.tagNameProcessors||(this.options.tagNameProcessors=[]),this.options.tagNameProcessors.unshift(hb)),this.reset()}}});function qh(t){return t.includes("&")?t.replace(/&(#x[\dA-Fa-f]+|#\d+|[a-zA-Z]+);/g,(e,r)=>r.startsWith("#x")?String.fromCodePoint(Number.parseInt(r.slice(2),16)):r.startsWith("#")?String.fromCodePoint(Number.parseInt(r.slice(1),10)):gb[e]||e):t}function bb(t){let e=t.slice(0,12),r=Array.from(e).map(n=>n.toString(16).padStart(2,"0")).join("");for(let[n,o]of Object.entries(mb))if(r.startsWith(n))return o;return"unknown"}function as(t,e,r,n){return URL.createObjectURL(new Blob([t],{type:e}))}function Jh(t){let e="";return e=t.name??"",e}function Ib(t){return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}async function ep(t){return t instanceof Uint8Array?Ib(t):await t.arrayBuffer()}function pr(t){let e=t.byteLength,r=e===4?"getUint32":e===2?"getUint16":"getUint8";return new DataView(t)[r](0)}function $r(t,e){let r={};for(let n in t){let[o,a,i]=t[n];r[n]=i==="string"?za(e.slice(o,o+a)):pr(e.slice(o,o+a))}return r}function Ba(t){let e=t.reduce((o,a)=>o+a.length,0),r=new t[0].constructor(e),n=0;for(let o of t)r.set(o,n),n+=o.length;return r}function ns(t,e=0){let r=0,n=0;for(let o of t.subarray(e,e+4))if(r=r<<7|(o&127)>>>0,n++,o&128)break;return{value:r,length:n}}function Mb(t){let e=0;for(let r of t.subarray(-4))r&128&&(e=0),e=e<<7|r&127;return e}function tp(t){let e=0;for(;t>0;t=t>>1)(t&1)===1&&e++;return e}function Pb(t){let e=0;for(;(t&1)===0;)t=t>>1,e++;return e}function Ob(t){let e=[];for(let r=0;r<t.length;r++){let n=t[r];if(n===0)e.push(0);else if(n<=8)for(let o of t.subarray(r+1,(r+=n)+1))e.push(o);else if(n<=127)e.push(n);else if(n<=191){let o=n<<8|t[r+++1],a=(o&16383)>>>3,i=(o&7)+3;for(let s=0;s<i;s++)e.push(e[e.length-a])}else e.push(32,n^128)}return Uint8Array.from(e)}function Lb(t,e){let r=e(t.huffcdic),{magic:n,offset1:o,offset2:a}=$r(Eb,r);if(n!=="HUFF")throw new Error("Invalid HUFF record");let i=Array.from({length:256},(h,p)=>o+p*4).map(h=>pr(r.slice(h,h+4))).map(h=>[h&128,h&31,h>>>8]),s=[[0,0],...Array.from({length:32},(h,p)=>a+p*8).map(h=>[pr(r.slice(h,h+4)),pr(r.slice(h+4,h+8))])],l=[];for(let h=1;h<t.numHuffcdic;h++){let p=e(t.huffcdic+h),u=$r(Nb,p);if(u.magic!=="CDIC")throw new Error("Invalid CDIC record");let g=Math.min(1<<u.codeLength,u.numEntries-l.length),w=p.slice(u.length);for(let b=0;b<g;b++){let S=pr(w.slice(b*2,b*2+2)),y=pr(w.slice(S,S+2)),k=y&32767,E=y&32768,A=new Uint8Array(w.slice(S+2,S+2+k));l.push([A,E])}}let d=h=>{let p=new Uint8Array,u=h.byteLength*8;for(let g=0;g<u;){let w=Number(Db(h,g)),[b,S,y]=i[w>>>24];if(!b){for(;w>>>32-S<s[S][0];)S+=1;y=s[S][1]}if(g+=S,g>u)break;let k=y-(w>>>32-S),[E,A]=l[k];A||(E=d(E),l[k]=[E,!0]),p=Ba([p,E])}return p};return d}function Db(t,e){let r=e>>3,n=e+32,o=n>>3,a=0n;for(let i=r;i<=o;i++)a=a<<8n|BigInt(t[i]??0);return a>>8n-BigInt(n&7)&0xFFFFFFFFn}function Fb(t,e){let{magic:r,count:n}=$r(Sb,t);if(r!=="EXTH")throw new Error("Invalid EXTH header");let o=ql(e.toString()),a={},i=12;for(let s=0;s<n;s++){let l=pr(t.slice(i,i+4)),d=pr(t.slice(i+4,i+8));if(l in Kh){let[h,p,u]=Kh[l],g=t.slice(i+8,i+d),w=p==="uint"?pr(g):o.decode(g);u?(a[h]??(a[h]=[]),a[h].push(w)):a[h]=w}i+=d}return a}function zb(t){let e=t&1,r=tp(t>>>1);return n=>{for(let o=0;o<r;o++){let a=Mb(n);n=n.subarray(0,-a)}if(e){let o=(n[n.length-1]&3)+1;n=n.subarray(0,-o)}return n}}function Bb(t){let{flags:e,dataStart:r,keyLength:n,keyStart:o}=$r(Cb,t),a=new Uint8Array(t.slice(r));if(e&2){let i=n===16?1024:1040,s=new Uint8Array(t.slice(o,o+n)),l=Math.min(i,a.length);for(let d=0;d<l;d++)a[d]=a[d]^s[d%s.length]}if(e&1)try{return Xu(a)}catch(i){console.warn(i),console.warn("Failed to decompress font")}return a}function os(t,e){let r=e(t),n=$r(Vh,r);if(n.magic!=="INDX")throw new Error("Invalid INDX record");let o=ql(n.encoding.toString()),a={},i=0;for(let u=0;u<n.numCncx;u++){let g=e(t+n.numRecords+u+1),w=new Uint8Array(g);for(let b=0;b<w.byteLength;){let S=b,{value:y,length:k}=ns(w,b);b+=k;let E=g.slice(b,b+y);b+=y,a[i+S]=o.decode(E)}i+=65536}let s=r.slice(n.length),l=$r(Tb,s);if(l.magic!=="TAGX")throw new Error("Invalid TAGX section");let d=(l.length-12)/4,h=Array.from({length:d},(u,g)=>new Uint8Array(s.slice(12+g*4,12+g*4+4))),p=[];for(let u=0;u<n.numRecords;u++){let g=e(t+1+u),w=new Uint8Array(g),b=$r(Vh,g);if(b.magic!=="INDX")throw new Error("Invalid INDX record");for(let S=0;S<b.numRecords;S++){let y=b.idxt+4+2*S,k=pr(g.slice(y,y+2)),E=pr(g.slice(k,k+1)),A=za(g.slice(k+1,k+1+E)),T=[],C=k+1+E,O=0,R=C+l.numControlBytes;for(let[M,F,L,$]of h){if($&1){O++;continue}let J=C+O,se=pr(g.slice(J,J+1))&L;if(se===L)if(tp(L)>1){let{value:ne,length:ce}=ns(w,R);T.push([M,0,ne,F]),R+=ce}else T.push([M,1,0,F]);else T.push([M,se>>Pb(L),0,F])}let m={};for(let[M,F,L,$]of T){let J=[];if(F!==0)for(let se=0;se<F*$;se++){let{value:ne,length:ce}=ns(w,R);J.push(ne),R+=ce}else{let se=0;for(;se<L;){let{value:ne,length:ce}=ns(w,R);J.push(ne),R+=ce,se+=ce}}m[M]=J}p.push({name:A,tagMap:m})}}return{table:p,cncx:a}}function $b(t,e){let{table:r,cncx:n}=os(t,e),o=r.map(({tagMap:i},s)=>({index:s,offset:i[1]?.[0],size:i[2]?.[0],label:n[i[3]?.[0]]??"",headingLevel:i[4]?.[0],pos:i[6],parent:i[21]?.[0],firstChild:i[22]?.[0],lastChild:i[23]?.[0]})),a=i=>(i.firstChild==null||(i.children=o.filter(s=>s.parent===i.index).map(a)),i);return o.filter(i=>i.headingLevel===0).map(a)}function Yh(t=0,e=0){return`kindle:pos:fid:${t.toString(32).toUpperCase().padStart(4,"0")}:off:${e.toString(32).toUpperCase().padStart(10,"0")}`}function Zh(t){let e=t.match(Ub);if(!e)return"";let[,r,n]=e;return`[${r}="${n}"]`}function jb(t){let[e,r]=t.match(Wb).slice(1);return{fid:Number.parseInt(e,32),off:Number.parseInt(r,32)}}async function Xl(t,e){let r=new jl(t,e);return await r.innerLoadFile(),await r.innerInit(),r}async function Vl(t,e){let r=new Gl(t,e);return await r.innerLoadFile(),await r.innerInit(),r}var gb,Xh,mb,xb,vb,yb,wb,kb,_b,Sb,Vh,Tb,Eb,Nb,Ab,Cb,Rb,za,ql,Kh,Hb,Ub,Wb,Qh,Gb,qb,hr,is,Xb,Vb,Gt,jl,Kb,Yb,Br,Gl,rp=kr(()=>{xl();Gh();gb={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};Xh={XML:"application/xml",XHTML:"application/xhtml+xml",HTML:"text/html",CSS:"text/css",SVG:"image/svg+xml"},mb={ffd8ff:"image/jpeg","89504e47":"image/png",47494638:"image/gif","424d":"image/bmp","3c737667":"image/svg+xml","00000018":"video/mp4","00000020":"video/mp4","1a45dfa3":"video/mkv","1f43b675":"video/webm",494433:"audio/mp3",52494646:"audio/wav","4f676753":"audio/ogg","00010000":"font/ttf",74727565:"font/ttf","4f54544f":"font/otf","774f4646":"font/woff","774f4632":"font/woff2","504c":"font/eot"};xb={1252:"windows-1252",65001:"utf-8"},vb={1:["ar","ar-SA","ar-IQ","ar-EG","ar-LY","ar-DZ","ar-MA","ar-TN","ar-OM","ar-YE","ar-SY","ar-JO","ar-LB","ar-KW","ar-AE","ar-BH","ar-QA"],2:["bg"],3:["ca"],4:["zh","zh-TW","zh-CN","zh-HK","zh-SG"],5:["cs"],6:["da"],7:["de","de-DE","de-CH","de-AT","de-LU","de-LI"],8:["el"],9:["en","en-US","en-GB","en-AU","en-CA","en-NZ","en-IE","en-ZA","en-JM",null,"en-BZ","en-TT","en-ZW","en-PH"],10:["es","es-ES","es-MX",null,"es-GT","es-CR","es-PA","es-DO","es-VE","es-CO","es-PE","es-AR","es-EC","es-CL","es-UY","es-PY","es-BO","es-SV","es-HN","es-NI","es-PR"],11:["fi"],12:["fr","fr-FR","fr-BE","fr-CA","fr-CH","fr-LU","fr-MC"],13:["he"],14:["hu"],15:["is"],16:["it","it-IT","it-CH"],17:["ja"],18:["ko"],19:["nl","nl-NL","nl-BE"],20:["no","nb","nn"],21:["pl"],22:["pt","pt-BR","pt-PT"],23:["rm"],24:["ro"],25:["ru"],26:["hr",null,"sr"],27:["sk"],28:["sq"],29:["sv","sv-SE","sv-FI"],30:["th"],31:["tr"],32:["ur"],33:["id"],34:["uk"],35:["be"],36:["sl"],37:["et"],38:["lv"],39:["lt"],41:["fa"],42:["vi"],43:["hy"],44:["az"],45:["eu"],46:["hsb"],47:["mk"],48:["st"],49:["ts"],50:["tn"],52:["xh"],53:["zu"],54:["af"],55:["ka"],56:["fo"],57:["hi"],58:["mt"],59:["se"],62:["ms"],63:["kk"],65:["sw"],67:["uz",null,"uz-UZ"],68:["tt"],69:["bn"],70:["pa"],71:["gu"],72:["or"],73:["ta"],74:["te"],75:["kn"],76:["ml"],77:["as"],78:["mr"],79:["sa"],82:["cy","cy-GB"],83:["gl","gl-ES"],87:["kok"],97:["ne"],98:["fy"]},yb={name:[0,32,"string"],type:[60,4,"string"],creator:[64,4,"string"],numRecords:[76,2,"uint"]},wb={compression:[0,2,"uint"],numTextRecords:[8,2,"uint"],recordSize:[10,2,"uint"],encryption:[12,2,"uint"]},kb={magic:[16,4,"string"],length:[20,4,"uint"],type:[24,4,"uint"],encoding:[28,4,"uint"],uid:[32,4,"uint"],version:[36,4,"uint"],titleOffset:[84,4,"uint"],titleLength:[88,4,"uint"],localeRegion:[94,1,"uint"],localeLanguage:[95,1,"uint"],resourceStart:[108,4,"uint"],huffcdic:[112,4,"uint"],numHuffcdic:[116,4,"uint"],exthFlag:[128,4,"uint"],trailingFlags:[240,4,"uint"],indx:[244,4,"uint"]},_b={resourceStart:[108,4,"uint"],fdst:[192,4,"uint"],numFdst:[196,4,"uint"],frag:[248,4,"uint"],skel:[252,4,"uint"],guide:[260,4,"uint"]},Sb={magic:[0,4,"string"],length:[4,4,"uint"],count:[8,4,"uint"]},Vh={magic:[0,4,"string"],length:[4,4,"uint"],type:[8,4,"uint"],idxt:[20,4,"uint"],numRecords:[24,4,"uint"],encoding:[28,4,"uint"],language:[32,4,"uint"],total:[36,4,"uint"],ordt:[40,4,"uint"],ligt:[44,4,"uint"],numLigt:[48,4,"uint"],numCncx:[52,4,"uint"]},Tb={magic:[0,4,"string"],length:[4,4,"uint"],numControlBytes:[8,4,"uint"]},Eb={magic:[0,4,"string"],offset1:[8,4,"uint"],offset2:[12,4,"uint"]},Nb={magic:[0,4,"string"],length:[4,4,"uint"],numEntries:[8,4,"uint"],codeLength:[12,4,"uint"]},Ab={magic:[0,4,"string"],numEntries:[8,4,"uint"]},Cb={flags:[8,4,"uint"],dataStart:[12,4,"uint"],keyLength:[16,4,"uint"],keyStart:[20,4,"uint"]};Rb=new TextDecoder,za=t=>Rb.decode(t);ql=t=>new TextDecoder(xb[t]);Kh={100:["creator","string",!0],101:["publisher","string",!1],103:["description","string",!1],104:["isbn","string",!1],105:["subject","string",!0],106:["date","string",!1],108:["contributor","string",!0],109:["rights","string",!1],110:["subjectCode","string",!0],112:["source","string",!0],113:["asin","string",!1],121:["boundary","uint",!1],122:["fixedLayout","string",!1],125:["numResources","uint",!1],126:["originalResolution","string",!1],127:["zeroGutter","string",!1],128:["zeroMargin","string",!1],129:["coverURI","string",!1],132:["regionMagnification","string",!1],201:["coverOffset","uint",!1],202:["thumbnailOffset","uint",!1],503:["title","string",!1],524:["language","string",!0],527:["pageProgressionDirection","string",!1]};Hb=/<\s*(?:mbp:)?pagebreak[^>]*>/gi;Ub=/\s(id|name|aid)\s*=\s*['"]([^'"]*)['"]/i;Wb=/kindle:pos:fid:(\w+):off:(\w+)/;Qh=/kindle:(flow|embed):(\w+)(?:\?mime=(\w+\/[-+.\w]+))?/,Gb=Object.defineProperty,qb=(t,e,r)=>e in t?Gb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,hr=(t,e,r)=>qb(t,typeof e!="symbol"?e+"":e,r),is=class{constructor(e,r){if(hr(this,"fileArrayBuffer"),hr(this,"recordsOffset"),hr(this,"recordsMagic"),hr(this,"start",0),hr(this,"pdbHeader"),hr(this,"mobiHeader"),hr(this,"palmdocHeader"),hr(this,"kf8Header"),hr(this,"exth"),hr(this,"isKf8",!1),hr(this,"resourceStart"),hr(this,"decoder"),hr(this,"encoder"),hr(this,"removeTrailingEntries"),hr(this,"decompress"),this.fileArrayBuffer=e,this.parsePdbHeader(),this.parseFirstRecord(this.loadRecord(0)),this.resourceStart=this.mobiHeader.resourceStart,!this.isKf8){let n=this.exth.boundary??4294967295;if(n<4294967295){try{this.parseFirstRecord(this.loadRecord(n)),this.start=n,this.isKf8=!0}catch{console.warn("Failed to parse kf8 header.")}r.endsWith(".mobi")&&console.warn(`File "${r}" is a compatible file. Please change the file extension to .azw3 to make it parse correctly.`)}}this.setup()}decode(e){return this.decoder.decode(e)}encode(e){return this.encoder.encode(e)}pdbLoadRecord(e){let[r,n]=this.recordsOffset[e]??[0,0];return this.fileArrayBuffer.slice(r,n)}loadRecord(e){return this.pdbLoadRecord(this.start+e)}loadMagic(e){return this.recordsMagic[this.start+e]}loadTextBuffer(e){return this.decompress(this.removeTrailingEntries(new Uint8Array(this.loadRecord(e+1))))}loadResource(e){let r=this.pdbLoadRecord(this.resourceStart+e),n=za(r.slice(0,4)),o;return n==="FONT"?o=Bb(r):n==="VIDE"||n==="AUDI"?o=new Uint8Array(r.slice(12)):o=new Uint8Array(r),{type:bb(o),raw:o}}getNCX(){let e=this.mobiHeader.indx;if(e<4294967295)return $b(e,this.loadRecord.bind(this))}getMetadata(){let e=this.mobiHeader,r=this.exth;return{identifier:this.mobiHeader.uid.toString(),title:r?.title||e.title,author:r?.creator?.map(qh)??[],publisher:r?.publisher??"",language:r?.language?.[0]??e.language,published:r?.date??"",description:r?.description??"",subject:r?.subject?.map(qh)??[],rights:r?.rights??"",contributor:r?.contributor??[]}}getCoverImage(){let e=this.exth,r=Number(e.coverOffset??4294967295),n=Number(e.thumbnailOffset??4294967295),o=r<4294967295?r:n<4294967295?n:void 0;if(o)return this.loadResource(o)}parsePdbHeader(){let e=$r(yb,this.fileArrayBuffer.slice(0,78));e.name=e.name.replace(/\0.*$/,""),this.pdbHeader=e;let r=this.fileArrayBuffer.slice(78,78+e.numRecords*8),n=Array.from({length:e.numRecords},(o,a)=>pr(r.slice(a*8,a*8+4)));this.recordsOffset=n.map((o,a)=>[o,n[a+1]]),this.recordsMagic=n.map(o=>za(this.fileArrayBuffer.slice(o,o+4)))}parseFirstRecord(e){this.palmdocHeader=$r(wb,e.slice(0,16));let r=$r(kb,e);if(r.magic!=="MOBI")throw new Error("Missing MOBI header");let{titleOffset:n,titleLength:o,localeLanguage:a,localeRegion:i}=r,s=vb[a.toString()]??[],l={title:za(e.slice(n,n+o)),language:s[i>>2]??s[0]??"unknown"};this.mobiHeader=Object.assign(r,l),this.kf8Header=r.version>=8?$r(_b,e):void 0,this.isKf8=r.version>=8,this.exth=r.exthFlag&64?Fb(e.slice(r.length+16),r.encoding):void 0}setup(){this.decoder=ql(this.mobiHeader.encoding.toString()),this.encoder=new TextEncoder;let e=this.palmdocHeader.compression;if(e===1)this.decompress=n=>n;else if(e===2)this.decompress=Ob;else if(e===17480)this.decompress=Lb(this.mobiHeader,this.loadRecord.bind(this));else throw new Error("Unsupported compression");let r=this.mobiHeader.trailingFlags;this.removeTrailingEntries=zb(r)}},Xb=Object.defineProperty,Vb=(t,e,r)=>e in t?Xb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Gt=(t,e,r)=>Vb(t,typeof e!="symbol"?e+"":e,r);jl=class{constructor(e,r="./images"){this.file=e,Gt(this,"fileArrayBuffer"),Gt(this,"mobiFile"),Gt(this,"fileName",""),Gt(this,"fdstTable",[]),Gt(this,"fullRawLength",0),Gt(this,"skelTable",[]),Gt(this,"fragTable",[]),Gt(this,"chapters",[]),Gt(this,"toc",[]),Gt(this,"fragmentOffsets",new Map),Gt(this,"fragmentSelectors",new Map),Gt(this,"rawHead",new Uint8Array),Gt(this,"rawTail",new Uint8Array),Gt(this,"lastLoadedHead",-1),Gt(this,"lastLoadedTail",-1),Gt(this,"resourceCache",new Map),Gt(this,"chapterCache",new Map),Gt(this,"idToChapter",new Map),Gt(this,"resourceSaveDir","./images"),this.fileName=Jh(e),this.resourceSaveDir=r}getFileInfo(){return{fileName:this.fileName}}getMetadata(){return this.mobiFile.getMetadata()}getCoverImage(){if(this.resourceCache.has("cover"))return this.resourceCache.get("cover");let e=this.mobiFile.getCoverImage(),r="";return e&&(r=as(e.raw,e.type,"cover",this.resourceSaveDir),this.resourceCache.set("cover",r)),r}getSpine(){return this.chapters}getToc(){return this.toc}async innerLoadFile(){this.fileArrayBuffer=await ep(this.file),this.mobiFile=new is(this.fileArrayBuffer,this.fileName)}async innerInit(){let e=this.mobiFile.loadRecord.bind(this.mobiFile),r=this.mobiFile.kf8Header,n=this.mobiFile.loadRecord(r.fdst),o=$r(Ab,n);if(o.magic!=="FDST")throw new Error("Missing FDST record");let a=Array.from({length:o.numEntries},(u,g)=>12+g*8).map(u=>[pr(n.slice(u,u+4)),pr(n.slice(u+4,u+8))]);this.fdstTable=a,this.fullRawLength=a[a.length-1][1];let s=os(r.skel,e).table.map(({name:u,tagMap:g},w)=>({index:w,name:u,numFrag:g[1][0],offset:g[6][0],length:g[6][1]}));this.skelTable=s;let l=os(r.frag,e),d=l.table.map(({name:u,tagMap:g})=>({insertOffset:Number.parseInt(u),selector:l.cncx[g[2][0]],index:g[4][0],offset:g[6][0],length:g[6][1]}));this.fragTable=d;let h=this.skelTable.reduce((u,g,w)=>{let b=u[u.length-1],S=b?.fragEnd??0,y=S+g.numFrag,k=this.fragTable.slice(S,y),E=g.length+k.reduce((C,O)=>C+O.length,0),A=(b?.totalLength??0)+E,T={id:w.toString(),skel:g,frags:k,fragEnd:y,length:E,totalLength:A};return this.idToChapter.set(w,T),u.push(T),u},[]);this.chapters=h;let p=this.mobiFile.getNCX();if(p){let u=({label:g,pos:w,children:b})=>{let[S,y]=w,k=Yh(S,y),E=this.fragmentOffsets.get(S);return E?E.push(y):this.fragmentOffsets.set(S,[y]),{label:g,href:k,children:b?.map(u)}};this.toc=p.map(u)}}getGuide(){let e=this.mobiFile.kf8Header.guide;if(e<4294967295){let r=this.mobiFile.loadRecord.bind(this.mobiFile),{table:n,cncx:o}=os(e,r);return n.map(({name:a,tagMap:i})=>({label:o[i[1][0]]??"",type:a?.split(/\s/),href:Yh(i[6]?.[0]??i[3]?.[0])}))}}loadRaw(e,r){let n=r-this.rawHead.length,o=this.fullRawLength===0?1/0:this.fullRawLength-this.rawTail.length-e;if(n<0||n<o){for(;this.rawHead.length<r;){this.lastLoadedHead++;let i=this.lastLoadedHead,s=this.mobiFile.loadTextBuffer(i);this.rawHead=Ba([this.rawHead,s])}return this.rawHead.slice(e,r)}for(;this.fullRawLength-this.rawTail.length>e;){this.lastLoadedTail++;let i=this.mobiFile.palmdocHeader.numTextRecords-1-this.lastLoadedTail,s=this.mobiFile.loadTextBuffer(i);this.rawTail=Ba([s,this.rawTail])}let a=this.fullRawLength-this.rawTail.length;return this.rawTail.slice(e-a,r-a)}loadText(e){let{skel:r,frags:n,length:o}=e,a=this.loadRaw(r.offset,r.offset+o),i=a.slice(0,r.length);for(let s of n){let l=s.insertOffset-r.offset,d=r.length+s.offset,h=a.slice(d,d+s.length);i=Ba([i.slice(0,l),h,i.slice(l)]);let p=this.fragmentOffsets.get(s.index);if(p)for(let u of p){let g=this.mobiFile.decode(h.buffer).slice(u),w=Zh(g);w&&this.cacheFragmentSelector(s.index,u,w)}}return this.mobiFile.decode(i.buffer)}loadChapter(e){let r=Number.parseInt(e);if(Number.isNaN(r))return;if(this.chapterCache.has(r))return this.chapterCache.get(r);let n=this.idToChapter.get(r);if(n){let o=this.replace(this.loadText(n));return this.chapterCache.set(r,o),o}}cacheFragmentSelector(e,r,n){let o=this.fragmentSelectors.get(e);if(o)o.set(r,n);else{let a=new Map;this.fragmentSelectors.set(e,a),a.set(r,n)}}loadFlow(e){if(e<4294967295)return this.loadRaw(this.fdstTable[e][0],this.fdstTable[e][1])}resolveHref(e){if(/^(?!blob|kindle)\w+:/i.test(e))return;let{fid:r,off:n}=jb(e),o=this.chapters.find(w=>w.frags.some(b=>b.index===r));if(!o)return;let a=o.id,i=this.fragmentSelectors.get(r)?.get(n);if(i)return{id:a,selector:i};let{skel:s,frags:l}=o,d=l.find(w=>w.index===r),h=s.offset+s.length+d.offset,p=this.loadRaw(h,h+d.length),u=this.mobiFile.decode(p.buffer).slice(n),g=Zh(u);return this.cacheFragmentSelector(r,n,g),{id:a,selector:g}}replaceResources(e){return e.replace(new RegExp(Qh,"gi"),(r,n,o,a)=>{if(this.resourceCache.has(r))return this.resourceCache.get(r);let i=n==="flow"?this.loadFlow(Number.parseInt(o)):this.mobiFile.loadResource(Number.parseInt(o,36)-1).raw,s="";if(a===Xh.CSS||a===Xh.SVG){let d=this.mobiFile.decode(i?.buffer);s=this.replaceResources(d)}else s=i;let l=as(s,a,o,this.resourceSaveDir);return this.resourceCache.set(r,l),l})}replace(e){let r=[],o=e.match(/<head[^>]*>([\s\S]*)<\/head>/i)[1].match(/<link[^>]*>/gi)??[];for(let s of o){let l=s.match(/href="([^"]*)"/i)[1],d=s.match(Qh)[2],h=this.replaceResources(l);r.push({id:d,href:h})}let a=e.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1];return{html:this.replaceResources(a),css:r}}destroy(){this.resourceCache.forEach(e=>{URL.revokeObjectURL(e)})}},Kb=Object.defineProperty,Yb=(t,e,r)=>e in t?Kb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Br=(t,e,r)=>Yb(t,typeof e!="symbol"?e+"":e,r);Gl=class{constructor(e,r="./images"){this.file=e,Br(this,"fileArrayBuffer"),Br(this,"mobiFile"),Br(this,"fileName",""),Br(this,"chapters",[]),Br(this,"idToChapter",new Map),Br(this,"toc",[]),Br(this,"resourceSaveDir","./images"),Br(this,"chapterCache",new Map),Br(this,"resourceCache",new Map),Br(this,"recindexReg",/recindex=["']?(\d+)["']?/),Br(this,"mediarecindexReg",/mediarecindex=["']?(\d+)["']?/),Br(this,"fileposReg",/filepos=["']?(\d+)["']?/),this.fileName=Jh(e),this.resourceSaveDir=r}getFileInfo(){return{fileName:this.fileName}}getSpine(){return this.chapters}loadChapter(e){let r=Number.parseInt(e);if(Number.isNaN(r))return;if(this.chapterCache.has(r))return this.chapterCache.get(r);let n=this.idToChapter.get(r);if(!n)return;let o=this.replace(n.text);return this.chapterCache.set(r,o),o}getToc(){return this.toc}getCoverImage(){if(this.resourceCache.has("cover"))return this.resourceCache.get("cover");let e=this.mobiFile.getCoverImage(),r="";return e&&(r=as(e.raw,e.type,"cover",this.resourceSaveDir),this.resourceCache.set("cover",r)),r}getMetadata(){return this.mobiFile.getMetadata()}async innerLoadFile(){this.fileArrayBuffer=await ep(this.file),this.mobiFile=new is(this.fileArrayBuffer,this.fileName)}async innerInit(){let{palmdocHeader:e}=this.mobiFile,r=[];for(let w=0;w<e.numTextRecords;w++)r.push(this.mobiFile.loadTextBuffer(w));let n=Ba(r),o=Array.from(n,w=>String.fromCharCode(w)).join(""),a=[],i=new Map,s=0,l=Array.from(o.matchAll(Hb));l.unshift({index:0,input:"",groups:void 0,0:""});for(let w=0;w<l.length;w++){let b=l[w],S=b.index,y=b[0],k=l[w+1]?.index,E=o.slice(S+y.length,k),A=Uint8Array.from(E,O=>O.charCodeAt(0)),T=this.mobiFile.decode(A.buffer),C={id:String(s),text:T,start:S,end:k,size:A.length};a.push(C),i.set(s,C),s++}let d=a[a.length-1].text;a[a.length-1].text=d.slice(0,d.indexOf("</body>"));let h=a[0].text,p=h.indexOf("<body>");a[0].text=h.slice(p+6),this.chapters=a,this.idToChapter=i;let u=h.slice(0,p),g=this.findTocChapter(u);if(g){let w=`<wrapper>${g.text.replace(/filepos=(\d+)/gi,'filepos="$1"')}</wrapper>`,b=await jh(w,{preserveChildrenOrder:!0,explicitChildren:!0,childkey:"children"}),S=[];this.parseNavMap(b.wrapper.children,S),this.toc=S}}findTocChapter(e){let r=/<reference.*\/>/g,n=e.match(r),o=/type="(.+?)"/,a=/filepos=(.*)/;if(n)for(let i of n){let s=i.match(o)?.[1].trim(),l=i.match(a)?.[1].trim();if(s==="toc"&&l){let d=Number.parseInt(l,10);return this.chapters.find(p=>p.end>d)}}}parseNavMap(e,r){for(let n of e){let o=n["#name"];if(o==="p"||o==="blockquote"){let a={label:"",href:""};if(n.a){let i=n.a[0],s=i._,l=Number(i.$.filepos);a={label:s,href:`filepos:${l}`},r.push(a)}(n.p||n.blockquote)&&(a.children=[],this.parseNavMap(n.children,a.children))}}}loadResource(e){if(this.resourceCache.has(String(e)))return this.resourceCache.get(String(e));let{type:r,raw:n}=this.mobiFile.loadResource(e-1),o=as(n,r,String(e),this.resourceSaveDir);return this.resourceCache.set(String(e),o),o}replace(e){return e=e.replace(/<img[^>]*>/g,r=>{let n=r.match(this.recindexReg)[1],o=this.loadResource(Number.parseInt(n));return r.replace(this.recindexReg,`src="${o}"`)}),e=e.replace(/<(video|audio)[^>]*>/g,r=>{let n=r.match(this.recindexReg)[1],o=this.loadResource(Number.parseInt(n));r=r.replace(this.mediarecindexReg,`src="${o}"`);let a=r.match(this.recindexReg)?.[1];if(a){let i=this.loadResource(Number.parseInt(a));r=r.replace(this.recindexReg,`poster="${i}"`)}return r}),e=e.replace(/<a[^>]*>/g,r=>{let n=r.match(this.fileposReg);if(!n)return r;let o=n[1];return r.replace(this.fileposReg,`href="filepos:${o}"`)}),{html:e,css:[]}}resolveHref(e){let r=e.match(/filepos:(\d+)/);if(!r)return;let n=r[1],o=Number(n),a=this.chapters.find(i=>i.end>o);if(a)return{id:a.id,selector:`[id="filepos:${n}"]`}}destroy(){this.resourceCache.forEach(e=>{URL.revokeObjectURL(e)}),this.resourceCache.clear()}}});function ss(t,e,r){let n="";for(let o=0;o<r;o+=1){let a=t[e+o]??0;n+=a>=32&&a<127?String.fromCharCode(a):""}return n}function $a(t,e){return(t[e]??0)<<8|(t[e+1]??0)}function np(t,e){return(t[e]??0)*16777216+((t[e+1]??0)<<16|(t[e+2]??0)<<8|(t[e+3]??0))>>>0}function kn(t,e){return(t[e+3]??0)*16777216+((t[e+2]??0)<<16|(t[e+1]??0)<<8|(t[e]??0))>>>0}function Qb(t){if(t.length<86)throw new Error("\u6587\u4EF6\u592A\u5C0F\uFF0C\u4E0D\u662F\u6709\u6548\u7684 MOBI/PalmDOC \u6587\u4EF6\u3002");let e=ss(t,60,4).trim(),r=ss(t,64,4).trim(),n=`${e}${r}`;if(n!=="BOOKMOBI"&&n!=="TEXtREAd")throw new Error("\u6587\u4EF6\u4E0D\u662F MOBI/PalmDOC \u683C\u5F0F\uFF08\u7F3A\u5C11 PDB \u6587\u4EF6\u5934\uFF09\u3002");let o=$a(t,76);if(o<1)throw new Error("MOBI \u8BB0\u5F55\u8868\u4E3A\u7A7A\u3002");if(78+o*8+2>t.length)throw new Error("MOBI \u8BB0\u5F55\u8868\u5DF2\u635F\u574F\u3002");let a=[];for(let b=0;b<o;b+=1){let S=np(t,78+b*8);if(S<78||S>=t.length)throw new Error("MOBI \u8BB0\u5F55\u504F\u79FB\u65E0\u6548\uFF0C\u6587\u4EF6\u53EF\u80FD\u5DF2\u635F\u574F\u3002");if(a.length>0&&S<a[a.length-1])throw new Error("MOBI \u8BB0\u5F55\u987A\u5E8F\u65E0\u6548\u3002");a.push(S)}let i=a[0];if(i+16>t.length)throw new Error("MOBI \u6587\u4EF6\u5934\u5DF2\u635F\u574F\u3002");let s=$a(t,i),l=np(t,i+4),d=$a(t,i+8),h=$a(t,i+10),p=$a(t,i+12);if(p!==0)throw new Error("\u8BE5 MOBI \u6587\u4EF6\u53D7 DRM \u4FDD\u62A4\uFF0C\u65E0\u6CD5\u6253\u5F00\u3002");if(![Zb,1,ip,Yl].includes(s))throw new Error(`\u4E0D\u652F\u6301\u7684 MOBI \u538B\u7F29\u65B9\u5F0F\uFF08${s}\uFF09\u3002`);let u=0,g=65001,w=!1;return n==="BOOKMOBI"&&ss(t,i+16,4)==="MOBI"&&(u=kn(t,i+36),g=kn(t,i+28)||65001,w=u===8),{pdbType:n,numRecords:o,offsets:a,compression:s,textLength:l,recordCount:d,recordSize:h,encryption:p,version:u,encoding:g,isKf8:w}}function Jb(t,e,r){let n=e[r];if(n==null)return null;let o=e[r+1]??t.length;return o<=n?new Uint8Array(0):t.subarray(n,o)}function e0(t){let e=t instanceof Uint8Array?t:new Uint8Array(t),r=[],n=0;for(;n<e.length;){let o=e[n];if(n+=1,o===0)r.push(0);else if(o<=8)for(let a=0;a<o&&n<e.length;a+=1)r.push(e[n]),n+=1;else if(o<=127)r.push(o);else if(o<=191){if(n>=e.length)break;let a=o<<8|e[n];n+=1;let i=a>>3&2047,s=(a&7)+3,l=r.length-i;for(let d=0;d<s;d+=1)r.push(l+d>=0?r[l+d]:0)}else r.push(32),r.push(o^128)}return Uint8Array.from(r)}function t0(t){let e=0;for(let o of t)e+=o.length;let r=new Uint8Array(e),n=0;for(let o of t)r.set(o,n),n+=o.length;return r}function Kl(t,e){let r=[];e&&r.push(e),r.push("utf-8","gb18030","windows-1252");for(let n of r)try{return new TextDecoder(n,{fatal:!0}).decode(t)}catch{}return new TextDecoder("utf-8").decode(t)}function r0(t,e){let r=e.recordCount>0?e.recordCount:e.numRecords-1,n=[];for(let a=1;a<=r;a+=1){let i=Jb(t,e.offsets,a);if(!i)break;if(e.compression===Yl)throw new Error("\u8BE5 MOBI \u4F7F\u7528 HUFF/CDIC \u538B\u7F29\uFF0C\u5185\u7F6E\u89E3\u6790\u5668\u65E0\u6CD5\u5904\u7406\u3002");n.push(e.compression===ip?e0(i):i)}if(n.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u6587\u672C\u5185\u5BB9\u3002");let o=t0(n);return e.textLength>0&&e.textLength<=o.length&&(o=o.subarray(0,e.textLength)),o}function n0(t,e){let r={title:"",author:"",language:""};if(e.pdbType!=="BOOKMOBI")return r;let n=e.offsets[0],o=sp[e.encoding]||"utf-8",a=kn(t,n+84),i=kn(t,n+88);a>0&&i>0&&n+a+i<=t.length&&(r.title=ft(Kl(t.subarray(n+a,n+a+i),o)));let s=kn(t,n+20),l=kn(t,n+128),d=n+16+s;if(l&64&&ss(t,d,4)==="EXTH"&&d+12<=t.length){let h=kn(t,d+4),p=kn(t,d+8),u=Math.min(t.length,d+h,d+12+p*8+4096),g=d+12;for(let w=0;w<p&&g+8<=u;w+=1){let b=kn(t,g),S=kn(t,g+4);if(S<8||g+S>t.length)break;let y=t.subarray(g+8,g+S),k=ft(Kl(y,o));b===100&&k&&!r.author?r.author=k:b===503&&k?r.title=k:b===524&&k&&!r.language&&(r.language=k),g+=S}}return r}function op(t,e){if(!Number.isFinite(e)||e<0)return null;for(let r=0;r<t.length;r+=1){let n=Number(t[r]?.start),o=Number(t[r]?.end);if(Number.isFinite(n)&&Number.isFinite(o)&&e>=n&&e<o)return r}for(let r=0;r<t.length;r+=1){let n=Number(t[r]?.start);if(Number.isFinite(n)&&n>e)return r}return t.length>0?t.length-1:null}function ap(t){let e=String(t||"");return e.startsWith("#")?e.slice(1):""}function o0(t,e,{fileName:r,tracker:n,warn:o}){let a={};try{a=t.getMetadata()||{}}catch{a={}}let i=[];try{i=t.getSpine()||[]}catch{i=[]}if(!Array.isArray(i)||i.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u9605\u8BFB\u987A\u5E8F\u3002");let s=new Map;i.forEach((C,O)=>{C?.id!=null&&s.set(String(C.id),O)});let l=0,d=()=>`b${l+=1}`,h=C=>{let O=String(C||"").trim();if(!O)return null;if(/^blob:/i.test(O))return n.add(O),{src:O};if(/^data:/i.test(O)){let R=Vn(O);return R?{src:n.create(R)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684 MOBI \u5185\u5D4C\u56FE\u7247\u3002"),null)}return/^(https?:)?\/\//i.test(O)?(o("\u5DF2\u8DF3\u8FC7 MOBI \u4E2D\u7684\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\u3002"),null):(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u6790\u7684 MOBI \u56FE\u7247\u3002"),null)},p=C=>O=>{let R=String(O||"").trim();if(!R)return null;if(/^(https?:|mailto:)/i.test(R))return{external:!0,href:R};if(R.startsWith("#"))return{chapter:C,anchor:R.slice(1)};if(R.startsWith("//")||/^(?!filepos:|kindle:)[a-z][a-z0-9+.-]*:/i.test(R))return null;try{let M=t.resolveHref(R);if(M?.id!=null){let F=s.get(String(M.id));if(F!=null){let L=ap(M.selector);return L?{chapter:F,anchor:L}:{chapter:F}}}}catch{}let m=/filepos:(\d+)/i.exec(R);if(m){let M=op(i,Number(m[1]));if(M!=null)return{chapter:M}}return null},u=[];for(let C=0;C<i.length;C+=1){let O="";try{O=t.loadChapter(i[C].id)?.html||""}catch{o(`\u7B2C ${C+1} \u7AE0\u52A0\u8F7D\u5931\u8D25\uFF0C\u5DF2\u8DF3\u8FC7\u8BE5\u7AE0\u5185\u5BB9\u3002`)}let R=[];if(O){let m=bn(O),M=m?.body||m?.documentElement||null;M&&(R=mo(M,{nextId:d,warn:o,chapterIndex:C,resolveImage:h,resolveLink:p(C)}))}u.push({id:`ch${C}`,title:"",blocks:R})}let g=[],w=(C,O)=>{if(Array.isArray(C))for(let R of C){if(!R)continue;let m=ft(R.label||R.title||"").slice(0,200),M=String(R.href||""),F=null,L="";if(M){try{let $=t.resolveHref(M);if($?.id!=null){let J=s.get(String($.id));J!=null&&(F=J,L=ap($.selector))}}catch{}if(F==null){let $=/filepos:(\d+)/i.exec(M);$&&(F=op(i,Number($[1])))}}m&&F!=null&&g.push({title:m,chapterIndex:F,depth:O,...L?{anchor:L}:{}}),w(R.children,O+1)}};try{w(t.getToc?.()||[],0)}catch{o("MOBI \u76EE\u5F55\u8BFB\u53D6\u5931\u8D25\uFF0C\u5DF2\u6309\u7AE0\u8282\u6807\u9898\u751F\u6210\u76EE\u5F55\u3002")}let b=Oa(u,g),S=ft(a.title||"")||xo(r),k=(Array.isArray(a.author)?a.author:[a.author]).map(C=>ft(C||"")).filter(Boolean).join(", "),E="";try{let C=t.getCoverImage();C&&(n.add(C),E=C)}catch{}let A={title:S,chapters:u,toc:b};k&&(A.author=k);let T=ft(a.language||"");return T&&(A.language=T),E&&(A.cover=E),A}function a0(t){return String(t||"").split(/<\s*(?:mbp:)?pagebreak[^>]*>/gi)}function i0(t,e,{fileName:r,warn:n}){if(e.compression===Yl)throw new Error("\u8BE5 MOBI \u6587\u4EF6\u4F7F\u7528 HUFF/CDIC \u538B\u7F29\uFF0C\u5185\u7F6E\u89E3\u6790\u5668\u65E0\u6CD5\u5904\u7406\u3002");let o=n0(t,e),a=r0(t,e),i=s0(e.encoding),s=Kl(a,i),l=o.title||xo(r),d=0,h=()=>`b${d+=1}`,p=/<\s*(?:html|body|p|div|h[1-6]|br)\b/i.test(s),u;if(p){let b=a0(s),S=new TextEncoder,y=[],k=0;for(let E of b){let A=S.encode(E).length;y.push({start:k,end:k+A}),k+=A}u=[],b.forEach((E,A)=>{if(!E.trim())return;let T=bn(E),C=T?.body||T?.documentElement||null,O=u.length,R=C?mo(C,{nextId:h,warn:n,chapterIndex:O,resolveImage:()=>(n("\u5185\u7F6E MOBI \u89E3\u6790\u5668\u65E0\u6CD5\u63D0\u53D6\u56FE\u7247\u8D44\u6E90\u3002"),null),resolveLink:m=>{let M=String(m||"").trim();if(!M)return null;if(/^(https?:|mailto:)/i.test(M))return{external:!0,href:M};if(M.startsWith("#"))return{chapter:O,anchor:M.slice(1)};let F=/filepos:(\d+)/i.exec(M);if(F){let L=Number(F[1]);for(let $=0;$<y.length;$+=1)if(L>=y[$].start&&L<y[$].end){let J=b.slice(0,$).filter(se=>se.trim()).length;return J<u.length?{chapter:J}:null}}return null}}):[];u.push({id:`ch${O}`,title:"",blocks:R})})}else u=Bl(s,{nextId:h,title:l});if(!u||u.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let g=Oa(u,[]),w={title:l,chapters:u,toc:g};return o.author&&(w.author=o.author),o.language&&(w.language=o.language),w}function s0(t){return sp[t]||""}async function Xo(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=vn(),a=Xn(),i=null;try{let s=await xn(t),l=Qb(s);if(l.pdbType==="BOOKMOBI"){let h=l.isKf8||/^(azw3?|kf8)$/i.test(String(r).split(".").pop()||"");try{i=h?await Xl(s):await Vl(s)}catch{try{i=h?await Vl(s):await Xl(s)}catch{i=null}i||o("MOBI \u89E3\u6790\u5E93\u65E0\u6CD5\u6253\u5F00\u8BE5\u6587\u4EF6\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\uFF08\u53EF\u80FD\u7F3A\u5C11\u56FE\u7247\u4E0E\u76EE\u5F55\u4FE1\u606F\uFF09\u3002")}if(i)try{let p=i.getSpine?.()||[];(!Array.isArray(p)||p.length===0)&&(i.destroy?.(),i=null,o("MOBI \u9605\u8BFB\u987A\u5E8F\u4E3A\u7A7A\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\u3002"))}catch{i.destroy?.(),i=null,o("MOBI \u89E3\u6790\u5E93\u8FD4\u56DE\u5F02\u5E38\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\u3002")}}return{...i?o0(i,l,{fileName:r,tracker:a,warn:o}):i0(s,l,{fileName:r,warn:o}),warnings:n,dispose:()=>{try{i?.destroy?.()}catch{}a.dispose()}}}catch(s){try{i?.destroy?.()}catch{}throw a.dispose(),Fr(s,"\u65E0\u6CD5\u89E3\u6790 MOBI \u6587\u4EF6")}}var Zb,ip,Yl,sp,lp=kr(()=>{rp();po();Ra();Qi();vo();Zb=0,ip=2,Yl=17480,sp={65001:"utf-8",65e3:"utf-7",1250:"windows-1250",1251:"windows-1251",1252:"windows-1252",932:"shift_jis",936:"gb18030",949:"euc-kr",950:"big5"}});var Ql={};uc(Ql,{extensionOf:()=>Yi,parseBook:()=>h0});function d0(t){let e=t?`\u201C.${t}\u201D`:"\u8BE5\u6587\u4EF6";return new Error(`\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u683C\u5F0F\uFF1A${e}\u3002\u76EE\u524D\u652F\u6301 ${c0}\u3002`)}function Zl(){return new Error("PDF \u6587\u4EF6\u8BF7\u4F7F\u7528 PDF \u9605\u8BFB\u6A21\u5F0F\u6253\u5F00\uFF08PDF \u7531\u72EC\u7ACB\u7684\u9605\u8BFB\u5668\u5904\u7406\uFF09\u3002")}async function u0(t){let e;try{e=new Uint8Array(await t.slice(0,256).arrayBuffer())}catch{return null}if(e.length>=8){if(String.fromCharCode(...e.subarray(0,4))==="%PDF")return"pdf";if(e[0]===80&&e[1]===75)return"epub";let o="";for(let a=60;a<68;a+=1){let i=e[a]??0;o+=i>=32&&i<127?String.fromCharCode(i):" "}if(o==="BOOKMOBI"||o==="TEXtREAd")return"mobi"}let r=new TextDecoder("utf-8").decode(e.subarray(0,Math.min(e.length,200)));return/^\s*(?:<!doctype\s+html|<html|<head|<body)/i.test(r)?"html":Zi(r)?null:"txt"}async function h0(t,e={}){let r=typeof e.fileName=="string"?e.fileName:"",n=typeof e.mime=="string"?e.mime:"",o=Yi(r);if(o==="pdf")throw Zl();let a=rn[o]||null;if(!a){let i=n.toLowerCase().split(";")[0].trim();if(i==="application/pdf")throw Zl();a=l0[i]||null}if(!a&&!o){let i=await u0(t);if(i==="pdf")throw Zl();a=i&&rn[i]||null}if(!a)throw d0(o);try{let i=await a.parse(t,{fileName:r,mime:n});return{...i,title:i.title||xo(r),format:a.format,warnings:Array.isArray(i.warnings)?i.warnings:[]}}catch(i){throw Fr(i,"\u65E0\u6CD5\u6253\u5F00\u6587\u6863")}}var rn,l0,c0,Jl=kr(()=>{vh();yh();Th();lp();Qi();vo();rn={epub:{parse:xh,format:"epub"},mobi:{parse:Xo,format:"mobi"},prc:{parse:Xo,format:"mobi"},azw:{parse:Xo,format:"mobi"},azw3:{parse:Xo,format:"mobi"},kf8:{parse:Xo,format:"mobi"},txt:{parse:$l,format:"txt"},text:{parse:$l,format:"txt"},md:{parse:Fa,format:"md"},markdown:{parse:Fa,format:"md"},mdown:{parse:Fa,format:"md"},mkd:{parse:Fa,format:"md"},html:{parse:La,format:"html"},htm:{parse:La,format:"html"},xhtml:{parse:La,format:"html"},xht:{parse:La,format:"html"}},l0={"application/epub+zip":rn.epub,"application/x-mobipocket-ebook":rn.mobi,"application/x-mobi":rn.mobi,"application/vnd.amazon.ebook":rn.mobi,"text/plain":rn.txt,"text/markdown":rn.md,"text/x-markdown":rn.md,"text/html":rn.html,"application/xhtml+xml":rn.html},c0="EPUB\u3001MOBI/KF8\u3001TXT\u3001Markdown \u548C HTML"});var T0={};uc(T0,{PANEL_ID:()=>rc,apply:()=>S0,inject:()=>k0,name:()=>w0});module.exports=Pp(T0);var py=require("react");var q=It(require("react"),1);var xr=It(require("react"),1);var N0=require("react"),X=require("react/jsx-runtime");function it({size:t=18,children:e,viewBox:r="0 0 24 24",fill:n="none",strokeWidth:o=1.7,...a}){return(0,X.jsx)("svg",{width:t,height:t,viewBox:r,fill:n,stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",...a,children:e})}function pc(t){return(0,X.jsxs)(it,{...t,children:[(0,X.jsx)("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5Z"}),(0,X.jsx)("path",{d:"M4 18.5A2.5 2.5 0 0 1 6.5 16H20"}),(0,X.jsx)("path",{d:"M8 7h8M8 10.5h5"})]})}function ra(t){return(0,X.jsxs)(it,{...t,children:[(0,X.jsx)("path",{d:"M12 6.5C10.6 5.2 8.7 4.6 6.5 4.6H3v13h3.9c2 0 3.8.6 5.1 1.8 1.3-1.2 3.1-1.8 5.1-1.8H21v-13h-3.5c-2.2 0-4.1.6-5.5 1.9Z"}),(0,X.jsx)("path",{d:"M12 6.5v12.9"})]})}function fc(t){return(0,X.jsxs)(it,{...t,children:[(0,X.jsx)("path",{d:"M19 12H5"}),(0,X.jsx)("path",{d:"m11 18-6-6 6-6"})]})}function gc(t){return(0,X.jsxs)(it,{...t,children:[(0,X.jsx)("path",{d:"M12 16V4"}),(0,X.jsx)("path",{d:"m7 9 5-5 5 5"}),(0,X.jsx)("path",{d:"M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15"})]})}function na(t){return(0,X.jsxs)(it,{...t,children:[(0,X.jsx)("circle",{cx:"11",cy:"11",r:"7"}),(0,X.jsx)("path",{d:"m20 20-3.6-3.6"})]})}function Hn(t){return(0,X.jsxs)(it,{...t,children:[(0,X.jsx)("path",{d:"m12 3 1.5 4.2L18 9l-4.5 1.8L12 15l-1.5-4.2L6 9l4.5-1.8L12 3Z"}),(0,X.jsx)("path",{d:"m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"}),(0,X.jsx)("path",{d:"m5 13 .7 1.8L7.5 15.5l-1.8.7L5 18l-.7-1.8L2.5 15.5l1.8-.7L5 13Z"})]})}function No(t){return(0,X.jsxs)(it,{...t,children:[(0,X.jsx)("path",{d:"M4 5h8M8 3v2c0 4.2-1.8 7.2-5 9"}),(0,X.jsx)("path",{d:"M5 10c1.8 2.2 4 3.6 6.8 4.4"}),(0,X.jsx)("path",{d:"m13 20 3.6-9L20 20"}),(0,X.jsx)("path",{d:"M14.6 16.8h4.8"})]})}function Ir(t){return(0,X.jsx)(it,{...t,children:(0,X.jsx)("path",{d:"m6 6 12 12M18 6 6 18"})})}function Qa(t){return(0,X.jsx)(it,{...t,children:(0,X.jsx)("path",{d:"m15 18-6-6 6-6"})})}function Ja(t){return(0,X.jsx)(it,{...t,children:(0,X.jsx)("path",{d:"m9 18 6-6-6-6"})})}function mc(t){return(0,X.jsx)(it,{...t,children:(0,X.jsx)("path",{d:"m6 9 6 6 6-6"})})}function ms(t){return(0,X.jsxs)(it,{...t,children:[(0,X.jsx)("path",{d:"M8 6h12M8 12h12M8 18h12"}),(0,X.jsx)("path",{d:"M4 6h.01M4 12h.01M4 18h.01"})]})}function ei(t){return(0,X.jsxs)(it,{...t,children:[(0,X.jsx)("circle",{cx:"12",cy:"12",r:"3.2"}),(0,X.jsx)("path",{d:"M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"})]})}function An(t){return(0,X.jsxs)(it,{...t,children:[(0,X.jsx)("path",{d:"M4 7h16M9 7V5h6v2M7 7l.7 12.2A1.8 1.8 0 0 0 9.5 21h5a1.8 1.8 0 0 0 1.8-1.8L17 7"}),(0,X.jsx)("path",{d:"M10 11v6M14 11v6"})]})}function bc(t){return(0,X.jsxs)(it,{...t,children:[(0,X.jsx)("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),(0,X.jsx)("path",{d:"M5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V5"})]})}function Cn(t){return(0,X.jsx)(it,{...t,children:(0,X.jsx)("path",{d:"M12 5v14M5 12h14"})})}function ti(t){return(0,X.jsx)(it,{...t,children:(0,X.jsx)("path",{d:"M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"})})}function ri(t){return(0,X.jsx)(it,{...t,children:(0,X.jsx)("path",{d:"M5 12h14"})})}function xc(t){return(0,X.jsxs)(it,{...t,children:[(0,X.jsx)("path",{d:"M20 11a8 8 0 1 0-2.3 6.3"}),(0,X.jsx)("path",{d:"M20 4v7h-7"})]})}function vc(t){return(0,X.jsxs)(it,{...t,children:[(0,X.jsx)("path",{d:"M14 4h6v6M20 4l-9 9"}),(0,X.jsx)("path",{d:"M19 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"})]})}function ni({size:t=18}){return(0,X.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[(0,X.jsx)("path",{fill:"#4285F4",d:"M22.6 12.23c0-.78-.07-1.53-.2-2.25H12v4.26h5.94a5.08 5.08 0 0 1-2.2 3.33v2.77h3.56c2.08-1.92 3.3-4.74 3.3-8.11Z"}),(0,X.jsx)("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.77c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"}),(0,X.jsx)("path",{fill:"#FBBC05",d:"M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"}),(0,X.jsx)("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.2 1.64l3.15-3.15A10.97 10.97 0 0 0 12 1 11 11 0 0 0 2.18 7.06L5.84 9.9C6.71 7.3 9.14 5.38 12 5.38Z"})]})}function oi({size:t=18}){return(0,X.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[(0,X.jsx)("path",{fill:"currentColor",d:"M12 3 1.5 8.5 12 14l8.6-4.5v6.2h1.9V8.5L12 3Z",opacity:".9"}),(0,X.jsx)("path",{fill:"currentColor",d:"M6.2 11.4v4.1c0 2.2 2.6 4 5.8 4s5.8-1.8 5.8-4v-4.1L12 14.4l-5.8-3Z",opacity:".65"})]})}function yc(t){return(0,X.jsx)(it,{...t,children:(0,X.jsx)("path",{d:"m5 12 4.5 4.5L19 7"})})}function wc(t){return(0,X.jsxs)(it,{...t,children:[(0,X.jsx)("path",{d:"m15 4 1 2.2L18.2 7 16 8 15 10.2 14 8l-2.2-1L14 6.2 15 4Z"}),(0,X.jsx)("path",{d:"m5 19 8.5-8.5"}),(0,X.jsx)("path",{d:"m4 14 6 6"})]})}function kc(t){return(0,X.jsxs)(it,{...t,children:[(0,X.jsx)("path",{d:"M20 13 13 20a2 2 0 0 1-2.8 0L3 12.8V3h9.8L20 10.2a2 2 0 0 1 0 2.8Z"}),(0,X.jsx)("circle",{cx:"7.5",cy:"7.5",r:"1.2"})]})}function ai(t){return(0,X.jsxs)(it,{...t,children:[(0,X.jsx)("path",{d:"m14 4 6 6-9.5 9.5H5v-5L14 4Z"}),(0,X.jsx)("path",{d:"M12 21h9"}),(0,X.jsx)("path",{d:"M14 6.5 17.5 10"})]})}function oa(t){return(0,X.jsxs)(it,{...t,children:[(0,X.jsx)("path",{d:"M12 3a9 9 0 1 0 0 18h1.2a1.8 1.8 0 0 0 1.3-3l-.6-.7a1.6 1.6 0 0 1 1.2-2.7h1.6A4.3 4.3 0 0 0 21 10.3 7.7 7.7 0 0 0 12 3Z"}),(0,X.jsx)("circle",{cx:"7.5",cy:"11",r:"1"}),(0,X.jsx)("circle",{cx:"10",cy:"7.2",r:"1"}),(0,X.jsx)("circle",{cx:"15",cy:"7.2",r:"1"}),(0,X.jsx)("circle",{cx:"17",cy:"11",r:"1"})]})}function bs(t){return(0,X.jsx)(it,{...t,children:(0,X.jsx)("path",{d:"M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"})})}function _c(t){return(0,X.jsx)(it,{...t,children:(0,X.jsx)("path",{d:"M3 8h5V3M21 8h-5V3M3 16h5v5M21 16h-5v5"})})}function ii(t){return(0,X.jsxs)(it,{...t,children:[(0,X.jsx)("path",{d:"M12 3v12"}),(0,X.jsx)("path",{d:"m7 10 5 5 5-5"}),(0,X.jsx)("path",{d:"M4 18v2h16v-2"})]})}function Sc(t){return(0,X.jsxs)(it,{...t,children:[(0,X.jsx)("path",{d:"M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"}),(0,X.jsx)("path",{d:"M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"})]})}function Tc(t){return(0,X.jsxs)(it,{...t,children:[(0,X.jsx)("path",{d:"M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"}),(0,X.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})}function Ec(t){return(0,X.jsxs)(it,{...t,children:[(0,X.jsx)("path",{d:"m3 3 18 18"}),(0,X.jsx)("path",{d:"M10.6 6.1A10.7 10.7 0 0 1 12 6c6 0 9.5 6 9.5 6a16.5 16.5 0 0 1-3.2 3.7"}),(0,X.jsx)("path",{d:"M6.2 6.7C3.9 8.4 2.5 12 2.5 12S6 18 12 18c1.3 0 2.5-.3 3.5-.8"}),(0,X.jsx)("path",{d:"M9.9 9.9a3 3 0 0 0 4.2 4.2"})]})}var xs=new WeakMap,Nc=Promise.resolve();function In(t){return Number.isSafeInteger(t?.bytes)&&t.bytes>0&&typeof t.sha256=="string"&&/^[a-f0-9]{64}$/.test(t.sha256)}function vs(t,e){return In(t)&&In(e)&&t.bytes===e.bytes&&t.sha256===e.sha256}function si(t){if(!t?.size||t.size>320*1024*1024)return Promise.reject(new Error("\u8BF7\u9009\u62E9 320 MiB \u4EE5\u5185\u7684 PDF\u3002"));let e=xs.get(t);if(e)return e;let r=Nc.then(async()=>{if(!globalThis.crypto?.subtle)throw new Error("\u6B64\u73AF\u5883\u65E0\u6CD5\u6838\u9A8C SHA-256 \u6587\u4EF6\u6458\u8981\u3002");let n=await t.arrayBuffer(),o=new Uint8Array(await crypto.subtle.digest("SHA-256",n));return{bytes:t.size,sha256:[...o].map(a=>a.toString(16).padStart(2,"0")).join("")}});return Nc=r.catch(()=>{}),xs.set(t,r),r.catch(()=>{xs.delete(t)}),r}function li(t={},e){let r=new Set,n=Array.isArray(t.groups)?t.groups:[];return{question:String(t.question??"").trim().slice(0,1e3),synthesis:String(t.synthesis??"").trim().slice(0,2e4),groups:n.map(o=>({id:o.id,name:String(o.name??"").trim().slice(0,80),comparison:String(o.comparison??"").trim().slice(0,1e4),ids:(o.ids??[]).filter(a=>!e.has(a)||r.has(a)?!1:(r.add(a),!0))}))}}function ci(t,e=[]){let r=new Map(t.map(o=>[o.id,o])),n=e.map(o=>({id:o.id,name:o.name,comparison:o.comparison,rows:o.ids.flatMap(a=>{let i=r.get(a);return r.delete(a),i?[i]:[]})}));return n.push({id:"",name:"\u672A\u5206\u7EC4",rows:[...r.values()]}),n}function Rn(t,e){let r=e?.citationConfirmed?e:t;return{title:r.title||e?.title||"\u9898\u540D\u5F85\u786E\u8BA4",author:r.author||!e?.citationConfirmed&&e?.author||"",year:r.year||"",doi:r.doi||"",printLabel:t.printLabel||"",page:t.anchor?.page}}var Op="dsh-reader",Lp=3,xt="books",or="annotations",Je="assets",Vr="pdfTranslations",di="reader-background",ui="book-collection:",ys="pdf-evidence:",Ic="dsh-reader:settings:v1",Ac=320*1024*1024,Cc=16*1024*1024,Xt=Object.freeze({settingsVersion:2,autoTranslate:!1,hideTranslations:!1,fontSize:18,lineHeight:1.85,tocWidth:260,readingMode:"scroll",pageAnimation:"slide",bookAnimation:"slide",showToc:!0,aiOpen:!1,theme:"auto",fontFamily:"serif",fontWeight:400,contentWidth:760,brightness:1,backgroundPreset:"paper",customBackground:"#fbf7ee",textTone:"auto",backgroundImageKey:"",backgroundImageOpacity:.26,backgroundImageBlur:0,annotationPanelOpen:!1}),aa=Object.freeze([{id:"book",label:"\u4E66\u7C4D",hint:"EPUB / MOBI / TXT \u4E0E\u4E66\u7C4D\u578B PDF"},{id:"paper",label:"\u6587\u732E",hint:"\u8BBA\u6587\u3001\u62A5\u544A\u3001\u5B66\u672F PDF"},{id:"document",label:"\u6587\u6863",hint:"Markdown / HTML \u7B49\u77ED\u6587\u6863"}]),ws=new Set(aa.map(t=>t.id)),Dp=new Set(["paper","white","sepia","green","night","custom"]),Fp=new Set(["serif","sans","kai","system"]),zp=new Set(["scroll","book"]),Bp=new Set(["slide","fade","push","flip"]),$p=new Set(["slide","cover","flip"]),Hp=new Set([400,500,600]),Up=new Set(["auto","dark","light"]);function vt(){return new Promise((t,e)=>{if(typeof indexedDB>"u"){e(new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 IndexedDB\uFF0C\u65E0\u6CD5\u4FDD\u5B58\u4E66\u67B6\u3002"));return}let r=indexedDB.open(Op,Lp);r.onupgradeneeded=()=>{let n=r.result;n.objectStoreNames.contains(xt)||n.createObjectStore(xt,{keyPath:"id"}).createIndex("lastOpenedAt","lastOpenedAt"),n.objectStoreNames.contains(or)||n.createObjectStore(or,{keyPath:"id"}).createIndex("bookId","bookId"),n.objectStoreNames.contains(Je)||n.createObjectStore(Je,{keyPath:"key"}),n.objectStoreNames.contains(Vr)||n.createObjectStore(Vr,{keyPath:"key"}).createIndex("bookId","bookId")},r.onsuccess=()=>t(r.result),r.onerror=()=>e(r.error??new Error("\u6253\u5F00\u4E66\u67B6\u6570\u636E\u5E93\u5931\u8D25\u3002")),r.onblocked=()=>e(new Error("\u4E66\u67B6\u6570\u636E\u5E93\u88AB\u53E6\u4E00\u4E2A\u9875\u9762\u5360\u7528\uFF0C\u8BF7\u5173\u95ED\u5176\u5B83 DSH \u9875\u9762\u540E\u91CD\u8BD5\u3002"))})}function Wt(t){return new Promise((e,r)=>{t.oncomplete=()=>e(),t.onerror=()=>r(t.error??new Error("\u4E66\u67B6\u5199\u5165\u5931\u8D25\u3002")),t.onabort=()=>r(t.error??new Error("\u4E66\u67B6\u5199\u5165\u5DF2\u53D6\u6D88\u3002"))})}function Wn(t){return new Promise((e,r)=>{t.onsuccess=()=>e(t.result),t.onerror=()=>r(t.error)})}var ia=()=>IDBKeyRange.bound(ui,`${ui}\uFFFF`),ks=t=>`${ui}${t}`,sa=()=>IDBKeyRange.bound(ys,`${ys}\uFFFF`),_s=t=>ys+t;function Un(t){let e=/\.([^./\\]+)$/u.exec(String(t??""));return e?e[1].toLowerCase():""}function dn(t){switch(t){case"pdf":return"PDF";case"epub":return"EPUB";case"mobi":return"MOBI";case"azw":return"AZW";case"azw3":return"AZW3";case"txt":return"TXT";case"md":return"Markdown";case"html":return"HTML";default:return String(t??"\u6587\u4EF6").toUpperCase()}}function la(t){return aa.find(e=>e.id===t)?.label??"\u672A\u5206\u7C7B"}function Ss(t){return["pdf","epub","mobi","azw","azw3","txt","md","markdown","html","htm"].includes(Un(t))}function Wp(t){let e=String(t??"");return e.length===0?0:(e.match(/[\u3400-\u9fff\uf900-\ufaff]/gu)??[]).length/e.length}function Ts(t={}){let e=String(t.format||Un(t.title)||"").toLowerCase(),r=`${t.title||""} ${t.author||""}`;return e==="pdf"?/(?:^|\b)(book|novel|textbook|edition|volume|monograph|文集|全集|教材|小说|专著|丛书)(?:\b|$)/iu.test(r)||Number(t.size)>45*1024*1024?"book":"paper":["epub","mobi","azw","azw3","txt"].includes(e)?"book":"document"}async function jp(t){if(!globalThis.crypto?.subtle){let r=2166136261,n=new Uint8Array(t);for(let o=0;o<n.length;o+=1)r^=n[o],r=Math.imul(r,16777619);return(r>>>0).toString(16).padStart(8,"0")}let e=await globalThis.crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(e)].map(r=>r.toString(16).padStart(2,"0")).join("")}async function Gp(t){let e=await t.slice(0,Math.min(t.size,1048576)).arrayBuffer();return`${(await jp(e)).slice(0,20)}-${t.size}-${String(t.name).replace(/[^\w.-]+/gu,"_").slice(-48)}`}async function Es(){let t=await vt();try{let n=t.transaction(xt,"readonly").objectStore(xt).index("lastOpenedAt").openCursor(null,"prev"),o=[];return await new Promise((a,i)=>{n.onsuccess=()=>{let s=n.result;if(!s){a();return}let l=s.value;o.push({id:l.id,title:l.title,author:l.author,year:l.year??"",doi:l.doi??"",citationConfirmed:!!l.citationConfirmed,format:l.format,size:l.size,addedAt:l.addedAt,lastOpenedAt:l.lastOpenedAt,progress:l.progress??null,language:l.language??"",cover:typeof l.cover=="string"?l.cover:"",category:ws.has(l.category)?l.category:Ts(l),categoryManual:!!l.categoryManual}),s.continue()},n.onerror=()=>i(n.error)}),o}finally{t.close()}}async function ca(t){let e=await vt();try{let n=e.transaction(xt,"readonly").objectStore(xt).get(t);return await new Promise((o,a)=>{n.onsuccess=()=>o(n.result??null),n.onerror=()=>a(n.error)})}finally{e.close()}}async function da(t,{title:e,author:r,language:n,fingerprint:o}={}){if(!Ss(t.name))throw new Error(`\u6682\u4E0D\u652F\u6301 .${Un(t.name)||"\u672A\u77E5"} \u6587\u4EF6\u3002\u8BF7\u9009\u62E9 PDF / EPUB / MOBI / TXT / Markdown / HTML\u3002`);if(t.size>Ac)throw new Error(`\u6587\u4EF6\u8D85\u8FC7 ${Math.round(Ac/1024/1024)} MB\uFF0C\u6D4F\u89C8\u5668\u4E66\u67B6\u65E0\u6CD5\u5BB9\u7EB3\u3002`);if(o&&(!In(o)||o.bytes!==t.size||Un(t.name)!=="pdf"))throw new Error("PDF \u6587\u4EF6\u6458\u8981\u65E0\u6548\u3002");let a=o?`pdf-sha256-${o.sha256}-${o.bytes}`:await Gp(t),i=Date.now(),s=await vt();try{let l=s.transaction(xt,"readwrite"),d=Wt(l);d.catch(()=>{});let h=l.objectStore(xt),p=await Wn(h.get(a)),u=p?.id??a,g=Un(t.name)==="markdown"?"md":Un(t.name),w={title:String((p?.citationConfirmed?p.title:e)??p?.title??t.name.replace(/\.[^.]+$/u,"")).trim()||"\u672A\u547D\u540D\u6587\u6863",author:String((p?.citationConfirmed?p.author:r)??p?.author??"").trim(),language:String(n??p?.language??"").trim(),format:g,size:t.size},b={id:u,...w,...p?.citationConfirmed?{citationConfirmed:!0,year:p.year,doi:p.doi}:{},category:p?.category&&ws.has(p.category)?p.category:Ts(w),categoryManual:!!p?.categoryManual,cover:typeof p?.cover=="string"?p.cover:"",addedAt:p?.addedAt??i,lastOpenedAt:i,progress:p?.progress??null,fileRevision:pi(),blob:t};return h.put(b),await d,b}catch(l){throw l?.name==="QuotaExceededError"?new Error("\u6D4F\u89C8\u5668\u5B58\u50A8\u7A7A\u95F4\u5DF2\u6EE1\uFF0C\u65E0\u6CD5\u52A0\u5165\u4E66\u67B6\u3002\u8BF7\u5220\u9664\u4E00\u4E9B\u4E66\u540E\u91CD\u8BD5\u3002"):l}finally{s.close()}}async function Ao(t,e,{preserveCitation:r=!1}={}){let n=await vt();try{let o=n.transaction(xt,"readwrite"),a=o.objectStore(xt),i=a.get(t),s=null;return i.onsuccess=()=>{if(!i.result)return;let l=i.result,d=r&&l.citationConfirmed?{title:l.title,author:l.author}:{};s={...l,...e,...d,..."blob"in e?{fileRevision:pi()}:{}},a.put(s)},await Wt(o),s}finally{n.close()}}async function Rc(t,{title:e,author:r,year:n,doi:o}){let a={title:String(e??"").trim(),author:String(r??"").trim(),year:String(n??"").trim(),doi:String(o??"").trim().replace(/^https?:\/\/(?:dx\.)?doi\.org\//iu,"")};if(!a.title||a.title.length>300||a.author.length>500)throw new Error("\u8BF7\u8F93\u5165\u6709\u6548\u7684\u9898\u540D\u548C\u4F5C\u8005\u3002");if(a.year&&!/^[1-9]\d{3}$/u.test(a.year))throw new Error("\u5E74\u4EFD\u987B\u4E3A\u56DB\u4F4D\u6570\u5B57\u3002");if(a.doi&&(a.doi.length>400||!/^10\.\d{4,}\/\S+$/u.test(a.doi)))throw new Error("\u8BF7\u8F93\u5165\u6709\u6548\u7684 DOI\u3002");let i=await vt();try{let s=i.transaction([xt,Je],"readwrite"),l=Wt(s);l.catch(()=>{});let d=s.objectStore(xt),h=await Wn(d.get(t));if(h?.format!=="pdf")throw new Error("\u627E\u4E0D\u5230\u8FD9\u4EFD PDF\u3002");d.put({...h,...a,citationConfirmed:!0});let p=s.objectStore(Je).openCursor(sa());return p.onsuccess=()=>{let u=p.result;u&&(u.value.value.bookId===t&&u.update({...u.value,value:{...u.value.value,...a}}),u.continue())},await l,{...a,citationConfirmed:!0}}finally{i.close()}}async function Mc(t,e,{manual:r=!0}={}){if(!ws.has(e))throw new Error("\u672A\u77E5\u7684\u4E66\u7C4D\u5206\u7C7B\u3002");return Ao(t,{category:e,categoryManual:r})}async function Pc(){let t=await Es(),e={book:0,paper:0,document:0},r=0;for(let n of t){if(n.categoryManual){e[n.category]=(e[n.category]||0)+1;continue}let o=Ts(n);e[o]=(e[o]||0)+1,o!==n.category&&(await Ao(n.id,{category:o,categoryManual:!1}),r+=1)}return{changed:r,counts:e}}async function Ns(t,e){return Ao(t,{lastOpenedAt:Date.now(),...e!==void 0?{progress:e}:{}})}async function Oc(){let t=await vt();try{let e=t.transaction(Je,"readonly").objectStore(Je);return(await Wn(e.getAll(ia()))).sort((n,o)=>n.createdAt-o.createdAt)}finally{t.close()}}async function Lc({id:t,name:e,add:r=[],remove:n=[]}){let o=e==null?void 0:String(e).trim();if((o!==void 0||!t)&&(!o||o.length>60))throw new Error("\u4E66\u5355\u540D\u79F0\u987B\u4E3A 1\u201360 \u4E2A\u5B57\u7B26\u3002");let a=await vt();try{let i=a.transaction([Je,xt],"readwrite"),s=i.objectStore(Je),l=i.objectStore(xt),d=[...new Set(r)],h=Wt(i);h.catch(()=>{});let[p,u]=await Promise.all([Wn(s.getAll(ia())),Promise.all(d.map(k=>Wn(l.getKey(k))))]),g=p.find(k=>k.id===t);if(t&&!g)throw new Error("\u8FD9\u4E2A\u4E66\u5355\u5DF2\u88AB\u5220\u9664\u3002");let w=o??g.name;if(p.some(k=>k.id!==t&&k.name.toLowerCase()===w.toLowerCase()))throw new Error("\u5DF2\u6709\u540C\u540D\u4E66\u5355\uFF0C\u8BF7\u6362\u4E00\u4E2A\u540D\u79F0\u3002");if(u.some(k=>k===void 0))throw new Error("\u90E8\u5206\u9009\u4E2D\u7684\u4E66\u5DF2\u4ECE\u4E66\u67B6\u5220\u9664\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u3002");let b=new Set(n),S=t??pi("collection"),y={id:S,key:ks(S),name:w,bookIds:[...new Set([...g?.bookIds??[],...u])].filter(k=>!b.has(k)),createdAt:g?.createdAt??Date.now(),...g?.research?{research:g.research,researchRevision:g.researchRevision}:{}};return s.put(y),await h,y}finally{a.close()}}async function Dc(t,e){let r=await vt();try{let n=r.transaction(Je,"readwrite"),o=Wt(n);o.catch(()=>{});let a=n.objectStore(Je),[i,s]=await Promise.all([Wn(a.get(ks(t.id))),Wn(a.getAll(sa()))]);if(!i)throw new Error("\u8BE5\u4E13\u9898\u5DF2\u5220\u9664\u3002");if((i.researchRevision??0)!==(t.researchRevision??0))throw new Error("\u8BE5\u4E13\u9898\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u540E\u7F16\u8F91\u3002");let l=new Set(s.filter(p=>p.value.topicIds?.includes(t.id)).map(p=>p.value.id)),d=li(e,l);if(d.groups.some(p=>!p.name))throw new Error("\u8BF7\u586B\u5199\u5206\u7EC4\u540D\u79F0\u3002");let h={...i,research:d,researchRevision:(i.researchRevision??0)+1};return a.put(h),await o,h}finally{r.close()}}function As(t,e,r){let n=t.openCursor(ia());n.onsuccess=()=>{let o=n.result;if(!o)return;let a=o.value;if((!r||r.has(a.id))&&a.research?.groups.some(i=>i.ids.some(s=>e.has(s)))){let i=a.research.groups.map(s=>({...s,ids:s.ids.filter(l=>!e.has(l))}));o.update({...a,research:{...a.research,groups:i},researchRevision:(a.researchRevision??0)+1})}o.continue()}}async function Fc(t){let e=await vt();try{let r=e.transaction(Je,"readwrite"),n=r.objectStore(Je);n.delete(ks(t)),zc(n,t),await Wt(r)}finally{e.close()}}function zc(t,e){let r=t.openCursor(sa());r.onsuccess=()=>{let n=r.result;if(!n)return;let o=n.value,a=o.value.topicIds||[],i=e?a.filter(s=>s!==e):[];i.length!==a.length&&n.update({...o,value:{...o.value,topicIds:i}}),n.continue()}}async function Bc(t,{deleteEvidence:e=!1}={}){let r=await vt();try{let n=r.transaction([xt,or,Vr,Je],"readwrite");n.objectStore(xt).delete(t),n.objectStore(Je).delete(`pdf-translation:${t}`);let o=n.objectStore(Je),a=new Set;if(e){let h=o.openCursor(sa());h.onsuccess=()=>{let p=h.result;if(!p){a.size&&As(o,a);return}p.value.value.bookId===t&&(a.add(p.value.value.id),p.delete()),p.continue()}}let i=o.openCursor(ia());i.onsuccess=()=>{let h=i.result;if(!h)return;let p=h.value;p.bookIds.includes(t)&&h.update({...p,bookIds:p.bookIds.filter(u=>u!==t)}),h.continue()};let s=n.objectStore(Vr).index("bookId").openKeyCursor(IDBKeyRange.only(t));s.onsuccess=()=>{let h=s.result;h&&(n.objectStore(Vr).delete(h.primaryKey),h.continue())};let d=n.objectStore(or).index("bookId").openKeyCursor(IDBKeyRange.only(t));d.onsuccess=()=>{let h=d.result;h&&(n.objectStore(or).delete(h.primaryKey),h.continue())},await Wt(n)}finally{r.close()}}async function hi(){let t=await vt();try{return(await Wn(t.transaction(Je,"readonly").objectStore(Je).getAll(sa()))).map(r=>r.value).sort((r,n)=>n.createdAt-r.createdAt||n.id.localeCompare(r.id))}finally{t.close()}}async function $c(t){let e=await vt();try{let r=e.transaction([xt,Je],"readwrite"),n=Wt(r),o=r.objectStore(Je),a=r.objectStore(xt).get(t.bookId);a.onsuccess=()=>{if(!a.result?.blob||(a.result.fileRevision??null)!==t.fileRevision){r.abort();return}let i=_s(t.id),s=o.get(i);s.onsuccess=()=>{s.result||o.add({key:i,value:t})}},await n}finally{e.close()}}async function Co(t,e,r){let n=await vt();try{let o=n.transaction([Je,xt],"readwrite"),a=o.objectStore(Je),i=_s(t),s=a.get(i),l=null,d=(h={})=>{let p=s.result?.value;!p||r&&p.sourceRevision!==r||(l={...p,...e,...h,updatedAt:Date.now()},a.put({key:i,value:l}))};return s.onsuccess=()=>{if(e.topicIds){let p=a.getAll(ia());p.onsuccess=()=>{let u=new Set(p.result.map(b=>b.id)),g=[...new Set(e.topicIds)].filter(b=>u.has(b));d({topicIds:g});let w=new Set((s.result?.value.topicIds??[]).filter(b=>!g.includes(b)));l&&w.size&&As(a,new Set([t]),w)};return}if(!e.bookId){d();return}let h=o.objectStore(xt).get(e.bookId);h.onsuccess=()=>{h.result?.blob&&(h.result.fileRevision??null)===e.fileRevision&&d()}},await Wt(o),l}finally{n.close()}}async function Hc(t){let e=await vt();try{let r=e.transaction(Je,"readwrite"),n=r.objectStore(Je);n.delete(_s(t)),As(n,new Set([t])),await Wt(r)}finally{e.close()}}async function Uc(){let t=await vt();try{let e=t.transaction([xt,or,Vr,Je],"readwrite");e.objectStore(xt).clear(),e.objectStore(or).clear(),e.objectStore(Vr).clear();let r=e.objectStore(Je);zc(r);let n=r.openKeyCursor();n.onsuccess=()=>{let o=n.result;if(o){let a=String(o.key);(a.startsWith("pdf-translation:")||a.startsWith(ui))&&r.delete(o.primaryKey),o.continue()}},await Wt(e)}finally{t.close()}}async function Wc(t){let e=await vt();try{let r=e.transaction(Vr,"readonly").objectStore(Vr).get(t);return await new Promise((n,o)=>{r.onsuccess=()=>n(r.result||null),r.onerror=()=>o(r.error)})}finally{e.close()}}async function jc(t){let e=await vt();try{let r=e.transaction([xt,Vr],"readwrite"),n=r.objectStore(xt).get(t.bookId);n.onsuccess=()=>{n.result&&r.objectStore(Vr).put({...t,updatedAt:Date.now()})},await Wt(r)}finally{e.close()}}async function Gc(t){let e=await vt();try{let r=e.transaction(Je,"readonly").objectStore(Je).get(`pdf-translation:${t}`);return await new Promise((n,o)=>{r.onsuccess=()=>n(r.result?.value||{}),r.onerror=()=>o(r.error)})}finally{e.close()}}async function qc(t,e){let r=await vt();try{let n=r.transaction([xt,Je],"readwrite"),o=n.objectStore(xt).get(t);o.onsuccess=()=>{o.result&&n.objectStore(Je).put({key:`pdf-translation:${t}`,value:e})},await Wt(n)}finally{r.close()}}function pi(t="a"){return globalThis.crypto?.randomUUID?`${t}-${crypto.randomUUID()}`:`${t}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}async function Xc(t){let e=await vt();try{let o=e.transaction(or,"readonly").objectStore(or).index("bookId").getAll(t);return(await new Promise((i,s)=>{o.onsuccess=()=>i(o.result??[]),o.onerror=()=>s(o.error)})).sort((i,s)=>{let l=Number.isFinite(i.page)?i.page:Number.MAX_SAFE_INTEGER,d=Number.isFinite(s.page)?s.page:Number.MAX_SAFE_INTEGER;if(l!==d)return l-d;let h=Number.isFinite(i.chapterIndex)?i.chapterIndex:Number.MAX_SAFE_INTEGER,p=Number.isFinite(s.chapterIndex)?s.chapterIndex:Number.MAX_SAFE_INTEGER;return h!==p?h-p:(i.createdAt||0)-(s.createdAt||0)})}finally{e.close()}}async function Vc(t){let e=Date.now(),r={...t,id:t.id||pi(),createdAt:t.createdAt||e,updatedAt:e};if(!r.bookId)throw new Error("\u6279\u6CE8\u7F3A\u5C11\u4E66\u7C4D\u4FE1\u606F\u3002");if(!r.kind||!r.style)throw new Error("\u6279\u6CE8\u7F3A\u5C11\u7C7B\u578B\u3002");let n=await vt();try{let o=n.transaction(or,"readwrite");return o.objectStore(or).put(r),await Wt(o),r}finally{n.close()}}async function Kc(t,e){let r=await vt();try{let n=r.transaction(or,"readwrite"),o=n.objectStore(or),a=await new Promise((s,l)=>{let d=o.get(t);d.onsuccess=()=>s(d.result??null),d.onerror=()=>l(d.error)});if(!a)return await Wt(n),null;let i={...a,...e,id:a.id,updatedAt:Date.now()};return o.put(i),await Wt(n),i}finally{r.close()}}async function Yc(t){let e=await vt();try{let r=e.transaction(or,"readwrite");r.objectStore(or).delete(t),await Wt(r)}finally{e.close()}}async function Zc(t){if(!t||!t.size)throw new Error("\u80CC\u666F\u56FE\u7247\u4E3A\u7A7A\u3002");if(t.size>Cc)throw new Error(`\u80CC\u666F\u56FE\u7247\u8D85\u8FC7 ${Math.round(Cc/1024/1024)} MB\uFF0C\u8BF7\u9009\u62E9\u66F4\u5C0F\u7684\u56FE\u7247\u3002`);let e=await vt();try{let r=e.transaction(Je,"readwrite");return r.objectStore(Je).put({key:di,blob:t,type:t.type||"image/*",size:t.size,updatedAt:Date.now()}),await Wt(r),di}finally{e.close()}}async function Qc(){let t=await vt();try{let r=t.transaction(Je,"readonly").objectStore(Je).get(di);return(await new Promise((o,a)=>{r.onsuccess=()=>o(r.result??null),r.onerror=()=>a(r.error)}))?.blob??null}finally{t.close()}}async function Jc(){let t=await vt();try{let e=t.transaction(Je,"readwrite");e.objectStore(Je).delete(di),await Wt(e)}finally{t.close()}}function Jn(t,e,r,n){let o=Number(t);return Number.isFinite(o)?Math.max(e,Math.min(r,o)):n}function qp(t,e){return/^#[0-9a-f]{6}$/iu.test(String(t))?String(t):e}function ed(){try{let t=localStorage.getItem(Ic);if(!t)return{...Xt};let e=JSON.parse(t),n=(Number(e.settingsVersion)||1)>=2&&typeof e.autoTranslate=="boolean"?e.autoTranslate:!1;return{...Xt,...e,settingsVersion:2,autoTranslate:n,hideTranslations:!!e.hideTranslations,fontSize:Jn(e.fontSize,13,34,Xt.fontSize),lineHeight:Jn(e.lineHeight,1.35,2.4,Xt.lineHeight),tocWidth:Jn(e.tocWidth,180,520,Xt.tocWidth),readingMode:e.readingMode==="page"?"book":zp.has(e.readingMode)?e.readingMode:Xt.readingMode,pageAnimation:Bp.has(e.pageAnimation)?e.pageAnimation:Xt.pageAnimation,bookAnimation:$p.has(e.bookAnimation)?e.bookAnimation:Xt.bookAnimation,fontFamily:Fp.has(e.fontFamily)?e.fontFamily:Xt.fontFamily,fontWeight:Hp.has(Number(e.fontWeight))?Number(e.fontWeight):Xt.fontWeight,contentWidth:Jn(e.contentWidth,520,1600,Xt.contentWidth),brightness:Jn(e.brightness,.6,1.2,Xt.brightness),backgroundPreset:Dp.has(e.backgroundPreset)?e.backgroundPreset:Xt.backgroundPreset,customBackground:qp(e.customBackground,Xt.customBackground),textTone:Up.has(e.textTone)?e.textTone:Xt.textTone,backgroundImageKey:typeof e.backgroundImageKey=="string"?e.backgroundImageKey:"",backgroundImageOpacity:Jn(e.backgroundImageOpacity,0,.85,Xt.backgroundImageOpacity),backgroundImageBlur:Jn(e.backgroundImageBlur,0,12,Xt.backgroundImageBlur),annotationPanelOpen:!!e.annotationPanelOpen}}catch{return{...Xt}}}function td(t){try{localStorage.setItem(Ic,JSON.stringify(t))}catch{}}function rd(t){let e=Number(t)||0;return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:e<1024*1024*1024?`${(e/1024/1024).toFixed(1)} MB`:`${(e/1024/1024/1024).toFixed(2)} GB`}function Cs(t){if(!t)return"";let e=Date.now()-Number(t);return e<6e4?"\u521A\u521A":e<36e5?`${Math.floor(e/6e4)} \u5206\u949F\u524D`:e<864e5?`${Math.floor(e/36e5)} \u5C0F\u65F6\u524D`:e<7*864e5?`${Math.floor(e/864e5)} \u5929\u524D`:new Date(t).toLocaleDateString("zh-CN")}function nd(t){let e=String(t??"").replace(/\s+/gu,"");if(e.length<40)return!1;let r=Wp(e),n=(e.match(/[A-Za-zÀ-ÖØ-öø-ÿ\u0400-\u04ff]/gu)??[]).length/e.length;return r<.18&&n>.45}var br=It(require("react"),1);var we=require("react/jsx-runtime"),Rr=t=>t.title||"\u672A\u547D\u540D\u6587\u6863";function Is(t,e){return`${t.title||""} ${t.author||""}`.toLowerCase().includes(e)}function Xp({book:t}){let[e,r]=br.default.useState(!1);return t.cover&&!e?(0,we.jsx)("img",{src:t.cover,alt:"",loading:"lazy",decoding:"async",onError:()=>r(!0)}):(0,we.jsx)("span",{className:"dshr-collection__spine",children:dn(t.format)})}function od({folder:t,expanded:e,onToggle:r,onOpen:n,onRead:o}){let a=br.default.useId(),i=br.default.useId();return(0,we.jsxs)("article",{className:"dshr-collection","data-collection-id":t.id,children:[(0,we.jsxs)("button",{type:"button",className:"dshr-collection__open","aria-label":`\u6253\u5F00\u4E66\u5355 ${t.name}`,"aria-describedby":i,onClick:n,children:[(0,we.jsxs)("span",{className:"dshr-collection__top",children:[(0,we.jsx)("span",{className:"dshr-collection__icon",children:(0,we.jsx)(ti,{size:17})}),(0,we.jsxs)("span",{className:"dshr-collection__heading",children:[(0,we.jsx)("strong",{title:t.name,children:t.name}),(0,we.jsxs)("small",{id:i,children:[t.system?"\u9ED8\u8BA4\u5206\u7C7B":"\u81EA\u5EFA\u4E66\u5355"," \xB7 ",t.books.length," \u672C"]})]}),(0,we.jsx)(Ja,{size:16})]}),t.books.length?(0,we.jsx)("span",{className:"dshr-collection__covers",children:t.books.slice(0,4).map(s=>(0,we.jsxs)("span",{className:"dshr-collection__sample",children:[(0,we.jsx)("span",{className:"dshr-collection__cover",children:(0,we.jsx)(Xp,{book:s},s.cover)}),(0,we.jsx)("span",{className:"dshr-collection__title",title:Rr(s),children:Rr(s)})]},s.id))}):(0,we.jsx)("span",{className:"dshr-collection__empty",children:"\u6682\u672A\u6536\u5F55\u4E66\u7C4D"})]}),t.books.length>0&&(0,we.jsxs)("button",{type:"button",className:"dshr-collection__peek",onClick:r,"aria-expanded":e,"aria-controls":a,children:[e?"\u6536\u8D77\u4E66\u540D":`\u9884\u89C8\u5168\u90E8 ${t.books.length} \u672C`," ",(0,we.jsx)(mc,{size:13})]}),t.books.length>0&&(0,we.jsx)("ul",{className:"dshr-collection__preview",id:a,hidden:!e,"aria-label":`${t.name}\u4E66\u540D\u6E05\u5355`,children:e&&t.books.map(s=>(0,we.jsx)("li",{children:(0,we.jsxs)("button",{type:"button",onClick:()=>o(s),children:[(0,we.jsx)("span",{children:Rr(s)}),(0,we.jsx)("small",{children:dn(s.format)})]})},s.id))})]})}function ad({action:t,books:e,collections:r,onClose:n,onCreate:o,onSave:a,onDelete:i}){let s=br.default.useRef(null),l=br.default.useRef(!1),[d,h]=br.default.useState(!1),[p,u]=br.default.useState(""),[g,w]=br.default.useState(t.collection?.name??""),[b,S]=br.default.useState(""),y=t.collection?.bookIds??[],[k,E]=br.default.useState(()=>new Set(t.bookIds??y)),[A,T]=br.default.useState(""),C=br.default.useId(),O=t.kind==="add",R=t.kind==="delete",m=O?"\u52A0\u5165\u4E66\u5355":R?"\u5220\u9664\u4E66\u5355":t.collection?"\u7F16\u8F91\u4E66\u5355":"\u65B0\u5EFA\u4E66\u5355",M=b.trim().toLowerCase(),F=!O&&!R?e.filter($=>Is($,M)):[];br.default.useLayoutEffect(()=>{let $=s.current;return $.showModal(),()=>$.close()},[]);async function L($){if($.preventDefault(),!l.current){l.current=!0,h(!0),u("");try{R?await i(t.collection.id):O?await a({id:A,add:t.bookIds}):await a({id:t.collection?.id,name:g,add:[...k].filter(J=>!y.includes(J)),remove:y.filter(J=>!k.has(J))}),n()}catch(J){u(J?.message||"\u4E66\u5355\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002")}finally{l.current=!1,h(!1)}}}return(0,we.jsx)("dialog",{ref:s,className:"dshr-modal dshr-collection-dialog","aria-labelledby":C,onCancel:$=>{$.preventDefault(),l.current||n()},children:(0,we.jsxs)("form",{onSubmit:L,children:[(0,we.jsx)("h3",{id:C,children:m}),R?(0,we.jsxs)("p",{children:["\u5220\u9664\u300C",t.collection.name,"\u300D\u540E\uFF0C\u91CC\u9762\u7684\u4E66\u4ECD\u53EF\u5728\u5168\u90E8\u6587\u6863\u4E2D\u6253\u5F00\uFF0C\u8FDB\u5EA6\u4E0E\u6279\u6CE8\u4F1A\u4FDD\u7559\u3002"]}):O?(0,we.jsxs)("label",{className:"dshr-collection-dialog__field",children:[(0,we.jsxs)("span",{children:["\u5C06 ",t.bookIds.length," \u672C\u4E66\u52A0\u5165"]}),(0,we.jsxs)("select",{value:A,onChange:$=>T($.target.value),disabled:d,required:!0,children:[(0,we.jsx)("option",{value:"",children:"\u9009\u62E9\u81EA\u5EFA\u4E66\u5355"}),r.map($=>(0,we.jsxs)("option",{value:$.id,children:[$.name," \xB7 ",$.bookIds.length," \u672C"]},$.id))]})]}):(0,we.jsxs)(we.Fragment,{children:[(0,we.jsxs)("label",{className:"dshr-collection-dialog__field",children:[(0,we.jsx)("span",{children:"\u4E66\u5355\u540D\u79F0"}),(0,we.jsx)("input",{value:g,onChange:$=>w($.target.value),placeholder:"\u4F8B\u5982\uFF1A\u8BBA\u6587\u5F85\u8BFB",maxLength:60,disabled:d,required:!0})]}),(0,we.jsxs)("div",{className:"dshr-collection-dialog__listbar",children:[(0,we.jsx)("strong",{children:"\u6536\u5F55\u4E66\u7C4D"}),(0,we.jsxs)("span",{children:[k.size," \u672C\u5DF2\u9009"]})]}),e.length>0&&(0,we.jsxs)("label",{className:"dshr-library__search dshr-collection-dialog__search",children:[(0,we.jsx)(na,{size:14}),(0,we.jsx)("input",{type:"search",placeholder:"\u641C\u7D22\u4E66\u540D\u3001\u4F5C\u8005","aria-label":"\u641C\u7D22\u53EF\u52A0\u5165\u7684\u4E66\u7C4D",value:b,onChange:$=>S($.target.value)})]}),F.length?(0,we.jsx)("div",{className:"dshr-collection-dialog__choices",children:F.map($=>(0,we.jsxs)("label",{children:[(0,we.jsx)("input",{type:"checkbox",checked:k.has($.id),disabled:d,onChange:J=>{let se=J.target.checked;E(ne=>{let ce=new Set(ne);return se?ce.add($.id):ce.delete($.id),ce})}}),(0,we.jsxs)("span",{children:[Rr($),(0,we.jsx)("small",{children:[dn($.format),$.author].filter(Boolean).join(" \xB7 ")})]})]},$.id))}):(0,we.jsx)("p",{children:e.length?"\u6CA1\u6709\u5339\u914D\u7684\u4E66\u7C4D\u3002":"\u53EF\u4EE5\u5148\u521B\u5EFA\u7A7A\u4E66\u5355\uFF0C\u5BFC\u5165\u4E66\u7C4D\u540E\u518D\u52A0\u5165\u3002"})]}),p&&(0,we.jsx)("p",{className:"dshr-collection-dialog__error",role:"alert",children:p}),(0,we.jsxs)("div",{className:"dshr-modal__actions dshr-collection-dialog__actions",children:[O&&(0,we.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:d,onClick:()=>o(t.bookIds),children:[(0,we.jsx)(Cn,{size:15})," \u65B0\u5EFA\u4E66\u5355"]}),(0,we.jsx)("button",{type:"button",className:"dshr-btn",disabled:d,onClick:n,children:"\u53D6\u6D88"}),(0,we.jsxs)("button",{type:"submit",className:`dshr-btn ${R?"dshr-btn--danger":"dshr-btn--primary"}`,disabled:d||(O?!A:!R&&!g.trim()),children:[R&&(0,we.jsx)(An,{size:14}),d?"\u6B63\u5728\u4FDD\u5B58\u2026":R?"\u5220\u9664\u4E66\u5355":O?"\u52A0\u5165":"\u4FDD\u5B58\u4E66\u5355"]})]})]})})}var j=require("react/jsx-runtime");function id(t){let e=t.progress;return e?typeof e.page=="number"&&typeof e.pages=="number"&&e.pages>0?Math.max(0,Math.min(100,e.page/e.pages*100)):typeof e.percent=="number"?Math.max(0,Math.min(100,e.percent)):typeof e.chapter=="number"&&typeof e.chapters=="number"&&e.chapters>0?Math.max(0,Math.min(100,(e.chapter+1)/e.chapters*100)):0:0}var Vp={book:"paper",paper:"document",document:"book"};function Kp({book:t,onOpen:e,onDelete:r,onCycleCategory:n,onAdd:o,onRemove:a,onEditCitation:i,selection:s,onToggle:l}){let d=id(t),h=[dn(t.format),t.author||"",rd(t.size)].filter(Boolean).join(" \xB7 ");return(0,j.jsxs)("article",{className:`dshr-book-card${s?" is-selecting":""}${s?.has(t.id)?" is-selected":""}`,children:[(0,j.jsxs)("button",{type:"button",className:"dshr-book","aria-pressed":s?s.has(t.id):void 0,"aria-label":s?`\u9009\u62E9 ${Rr(t)}`:`\u6253\u5F00 ${Rr(t)}`,onClick:()=>s?l(t.id):e(t),children:[(0,j.jsx)("span",{className:"dshr-book__media",children:t.cover?(0,j.jsx)("img",{className:"dshr-book__cover",src:t.cover,alt:"",loading:"lazy",decoding:"async"}):(0,j.jsx)("span",{className:"dshr-book__spine",children:dn(t.format)})}),(0,j.jsxs)("span",{className:"dshr-book__body",children:[(0,j.jsx)("span",{className:"dshr-book__title",children:Rr(t)}),(0,j.jsx)("span",{className:"dshr-book__meta",children:h}),(0,j.jsxs)("span",{className:"dshr-book__foot",children:[(0,j.jsx)("span",{children:t.lastOpenedAt?`\u9605\u8BFB\u4E8E ${Cs(t.lastOpenedAt)}`:Cs(t.addedAt)}),(0,j.jsx)("span",{children:d>0?`${Math.round(d)}%`:"\u672A\u5F00\u59CB"})]}),(0,j.jsx)("span",{className:"dshr-book__progress","aria-hidden":"true",children:(0,j.jsx)("i",{style:{"--p":`${d}%`}})})]}),s&&(0,j.jsx)("span",{className:"dshr-book__selected","aria-hidden":"true",children:s.has(t.id)&&(0,j.jsx)(yc,{size:14})})]}),!s&&(0,j.jsxs)("div",{className:"dshr-book__badges",children:[(0,j.jsxs)("button",{type:"button",className:`dshr-book__category is-${t.category||"document"}`,title:`\u9ED8\u8BA4\u5206\u7C7B\uFF1A${la(t.category)}${t.categoryManual?"\uFF08\u624B\u52A8\uFF09":"\uFF08\u81EA\u52A8\uFF09"} \xB7 \u70B9\u51FB\u5207\u6362`,onClick:()=>n(t),children:[(0,j.jsx)(kc,{size:11})," ",la(t.category)]}),t.format==="pdf"&&i?(0,j.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--ghost","aria-label":`\u7F16\u8F91\u8BBA\u6587\u51FA\u5904 ${Rr(t)}`,onClick:()=>i(t),children:"\u51FA\u5904"}):null,(0,j.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--ghost dshr-book__add","aria-label":`\u5C06 ${Rr(t)} \u52A0\u5165\u4E66\u5355`,onClick:()=>o([t.id]),children:[(0,j.jsx)(Cn,{size:13})," \u52A0\u5165\u4E66\u5355"]}),a?(0,j.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost","aria-label":`\u4ECE\u6B64\u4E66\u5355\u79FB\u51FA ${Rr(t)}`,title:"\u4ECE\u6B64\u4E66\u5355\u79FB\u51FA",onClick:()=>a([t.id]),children:(0,j.jsx)(ri,{size:14})}):(0,j.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost dshr-book__delete","aria-label":`\u4ECE\u4E66\u67B6\u5220\u9664 ${Rr(t)}`,title:"\u4ECE\u4E66\u67B6\u5220\u9664",onClick:()=>r(t),children:(0,j.jsx)(An,{size:14})})]})]})}function sd({books:t,collections:e,onCollectionsChange:r,loading:n,resumeBook:o,onResume:a,importing:i,organizing:s,categoryFilter:l,onCategoryFilter:d,onAutoOrganize:h,onImport:p,onOpen:u,onDelete:g,onCycleCategory:w,onSettings:b,onOnlineImport:S,onEvidence:y,onEditCitation:k}){let E=xr.default.useRef(null),[A,T]=xr.default.useState(!1),[C,O]=xr.default.useState(""),[R,m]=xr.default.useState(null),[M,F]=xr.default.useState(null),[L,$]=xr.default.useState(null),[J,se]=xr.default.useState(""),ne=xr.default.useRef(0),ce=xr.default.useRef(null),G=xr.default.useRef(null),oe=xr.default.useRef(!1),ue=xr.default.useMemo(()=>{let _=new Map(t.map(re=>[re.id,re])),x=new Map(aa.map(re=>[re.id,[]])),le=[...t].sort((re,ge)=>re.addedAt-ge.addedAt);for(let re of le)x.get(re.category)?.push(re);return[...e.map(re=>({...re,books:re.bookIds.map(ge=>_.get(ge)).filter(Boolean)})),...aa.map(re=>({id:re.id,name:re.label,system:!0,books:x.get(re.id)}))]},[t,e]),P=ue.find(_=>_.id===l),B=P?.books??t,V=C.trim().toLowerCase(),he=V?B.filter(_=>Is(_,V)):B,Z=M?B.filter(_=>M.has(_.id)).map(_=>_.id):[];xr.default.useLayoutEffect(()=>{oe.current&&(oe.current=!1,G.current?.focus({preventScroll:!0}))},[l]);function Pe(_){oe.current=!0,d(_),O(""),F(null),m(null),se(""),ce.current?.scrollTo({top:0})}let de=(_=[])=>$({kind:"edit",bookIds:_}),_e=_=>e.length?$({kind:"add",bookIds:_}):de(_);async function Ve(_){let x=await Lc(_);return r(le=>le.some(re=>re.id===x.id)?le.map(re=>re.id===x.id?x:re):[...le,x]),x}async function Ue(_){try{await Ve({id:P.id,remove:_}),F(null),se(`\u5DF2\u4ECE\u300C${P.name}\u300D\u79FB\u51FA ${_.length} \u672C\u3002`)}catch(x){se(x?.message||"\u79FB\u51FA\u4E66\u5355\u5931\u8D25\u3002")}}async function nt(_){await Fc(_),r(x=>x.filter(le=>le.id!==_)),l===_&&Pe("all"),se("\u4E66\u5355\u5DF2\u5220\u9664\u3002")}let f=()=>E.current?.click(),c=_=>{_.preventDefault(),ne.current=0,T(!1);let x=[..._.dataTransfer?.files??[]].filter(le=>Ss(le.name));if(x.length===0){p([],{rejected:!0});return}p(x)};return(0,j.jsxs)("div",{className:"dshr-library",ref:ce,children:[(0,j.jsxs)("div",{className:"dshr-library__inner",children:[(0,j.jsxs)("header",{className:"dshr-hero",children:[(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:"dshr-hero__eyebrow",children:[(0,j.jsx)(ra,{size:15})," DSH READER \xB7 LIBRARY"]}),(0,j.jsx)("h1",{children:"\u6211\u7684\u4E66\u67B6"}),(0,j.jsx)("p",{children:"\u7528\u4E66\u5355\u6574\u7406\u4E66\u7C4D\u3001\u8BBA\u6587\u548C\u9605\u8BFB\u8D44\u6599\u3002"})]}),(0,j.jsxs)("div",{className:"dshr-hero__actions",children:[(0,j.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:f,disabled:i,children:[i?(0,j.jsx)("span",{className:"dshr-spinner"}):(0,j.jsx)(Cn,{size:15}),i?"\u6B63\u5728\u52A0\u5165\u4E66\u67B6\u2026":"\u5BFC\u5165\u6587\u6863"]}),(0,j.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:S,title:"\u4ECE\u53E4\u767B\u5821\u3001Standard Ebooks\u3001arXiv \u7B49\u516C\u5F00\u6765\u6E90\u4E0B\u8F7D\u5E76\u6253\u5F00",children:[(0,j.jsx)(ii,{size:15})," \u516C\u5F00\u4E66\u5E93\u5BFC\u5165"]}),(0,j.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:h,disabled:s||t.length===0,title:"\u6309\u6587\u4EF6\u7C7B\u578B\u4E0E\u5143\u6570\u636E\uFF0C\u628A\u4E66\u67B6\u6574\u7406\u6210\u4E66\u7C4D / \u6587\u732E / \u6587\u6863",children:[s?(0,j.jsx)("span",{className:"dshr-spinner"}):(0,j.jsx)(wc,{size:15}),s?"\u6574\u7406\u4E2D\u2026":"\u4E00\u952E\u6574\u7406"]}),(0,j.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:b,title:"\u9605\u8BFB\u4E0E\u4E66\u67B6\u8BBE\u7F6E",children:[(0,j.jsx)(ei,{size:15})," \u8BBE\u7F6E"]}),(0,j.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>y(),children:"\u8BC1\u636E\u5E93"})]})]}),o?(0,j.jsxs)("button",{type:"button",className:"dshr-resume",onClick:()=>a(o),children:[(0,j.jsx)("span",{className:"dshr-resume__mark",children:(0,j.jsx)(ra,{size:19})}),(0,j.jsxs)("span",{className:"dshr-resume__body",children:[(0,j.jsx)("span",{className:"dshr-resume__eyebrow",children:"\u7EE7\u7EED\u4E0A\u6B21\u9605\u8BFB"}),(0,j.jsx)("strong",{children:o.title||"\u4E0A\u6B21\u6253\u5F00\u7684\u6587\u6863"}),(0,j.jsxs)("span",{className:"dshr-resume__meta",children:[dn(o.format),o.progress?.page?` \xB7 \u7B2C ${o.progress.page}${o.progress.pages?` / ${o.progress.pages}`:""} \u9875`:"",` \xB7 ${Math.round(id(o))}%`]})]}),(0,j.jsx)("span",{className:"dshr-resume__arrow",children:"\u2192"})]}):null,!P&&!n&&(0,j.jsxs)("section",{className:"dshr-collections","aria-label":"\u4E66\u5355\u6587\u4EF6\u5939",children:[(0,j.jsxs)("div",{className:"dshr-collections__bar",children:[(0,j.jsx)("h2",{ref:G,tabIndex:-1,children:"\u4E66\u5355\u6587\u4EF6\u5939"}),(0,j.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>de(),children:[(0,j.jsx)(Cn,{size:15})," \u65B0\u5EFA\u4E66\u5355"]})]}),(0,j.jsx)("div",{className:"dshr-collections__grid",children:ue.map(_=>(0,j.jsx)(od,{folder:_,expanded:R===_.id,onToggle:()=>m(x=>x===_.id?null:_.id),onOpen:()=>Pe(_.id),onRead:u},_.id))})]}),!P&&(0,j.jsxs)("section",{className:`dshr-drop${t.length?" is-compact":""}${A?" is-over":""}`,onDragEnter:_=>{_.preventDefault(),ne.current+=1,T(!0)},onDragOver:_=>_.preventDefault(),onDragLeave:()=>{ne.current=Math.max(0,ne.current-1),ne.current===0&&T(!1)},onDrop:c,"aria-label":"\u62D6\u653E\u6587\u6863\u4EE5\u5BFC\u5165",children:[(0,j.jsx)("div",{className:"dshr-drop__mark",children:(0,j.jsx)(gc,{size:24})}),(0,j.jsxs)("div",{className:"dshr-drop__body",children:[(0,j.jsx)("div",{className:"dshr-drop__title",children:"\u62D6\u4E00\u4EFD\u6587\u732E\u6216\u4E66\u5230\u8FD9\u91CC\uFF0C\u6216\u70B9\u51FB\u5BFC\u5165"}),(0,j.jsx)("div",{className:"dshr-drop__hint",children:"\u6587\u4EF6\u53EA\u4FDD\u5B58\u5728\u672C\u673A\u6D4F\u89C8\u5668\u4E66\u67B6\u4E2D\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\uFF1B\u7FFB\u8BD1\u4EC5\u53D1\u9001\u5F53\u524D\u9009\u4E2D\u7684\u6BB5\u843D\u3002"}),!t.length&&(0,j.jsx)("div",{className:"dshr-drop__formats",children:["PDF","EPUB","MOBI","AZW3","TXT","Markdown","HTML"].map(_=>(0,j.jsx)("span",{className:"dshr-chip",children:_},_))})]}),(0,j.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:f,disabled:i,children:"\u9009\u62E9\u6587\u4EF6"})]}),P&&(0,j.jsxs)("div",{className:"dshr-collection-context",children:[(0,j.jsxs)("nav",{"aria-label":"\u4E66\u67B6\u4F4D\u7F6E",children:[(0,j.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--ghost",onClick:()=>Pe("all"),children:[(0,j.jsx)(Qa,{size:15})," \u8FD4\u56DE\u4E66\u67B6"]}),(0,j.jsxs)("span",{ref:G,tabIndex:-1,"aria-current":"page",children:[(0,j.jsx)(ti,{size:16})," ",P.name]})]}),!P.system&&(0,j.jsxs)("div",{className:"dshr-collection-context__actions",children:[(0,j.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>y(P.id),children:"\u4E13\u9898\u4E0E\u8BC1\u636E"}),(0,j.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>$({kind:"edit",collection:P}),children:"\u7F16\u8F91\u4E66\u5355"}),(0,j.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--ghost",onClick:()=>$({kind:"delete",collection:P}),children:[(0,j.jsx)(An,{size:15})," \u5220\u9664\u4E66\u5355"]})]})]}),(0,j.jsxs)("div",{className:"dshr-library__bar",children:[(0,j.jsx)("h2",{children:P?"\u4E66\u5355\u5185\u5BB9":"\u5168\u90E8\u6587\u6863"}),(0,j.jsxs)("div",{className:"dshr-library__search",children:[(0,j.jsx)(na,{size:14}),(0,j.jsx)("input",{type:"search",value:C,onChange:_=>O(_.target.value),placeholder:P?"\u641C\u7D22\u6B64\u4E66\u5355":"\u641C\u7D22\u4E66\u540D\u3001\u4F5C\u8005","aria-label":P?"\u641C\u7D22\u6B64\u4E66\u5355":"\u641C\u7D22\u4E66\u67B6"})]}),(0,j.jsxs)("span",{children:[he.length," / ",B.length," \u672C"]}),B.length>0&&(0,j.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline","aria-pressed":!!M,onClick:()=>F(_=>_?null:new Set),children:M?"\u9000\u51FA\u591A\u9009":"\u591A\u9009"})]}),(0,j.jsx)("div",{className:"dshr-library__notice",role:"status",children:J}),M&&(0,j.jsxs)("div",{className:"dshr-collection-selection","aria-label":"\u6279\u91CF\u4E66\u5355\u64CD\u4F5C",children:[(0,j.jsxs)("span",{children:["\u5DF2\u9009 ",Z.length," \u672C"]}),(0,j.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",disabled:!he.length,onClick:()=>F(_=>new Set([..._,...he.map(x=>x.id)])),children:"\u5168\u9009\u5F53\u524D\u7ED3\u679C"}),(0,j.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:!Z.length,onClick:()=>_e(Z),children:"\u52A0\u5165\u4E66\u5355"}),P&&!P.system&&(0,j.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",disabled:!Z.length,onClick:()=>{Ue(Z)},children:"\u4ECE\u6B64\u4E66\u5355\u79FB\u51FA"})]}),n?(0,j.jsxs)("div",{className:"dshr-loading",style:{minHeight:180},children:[(0,j.jsx)("div",{className:"dshr-loading__ring"}),(0,j.jsx)("span",{children:"\u6B63\u5728\u6253\u5F00\u4E66\u67B6\u2026"})]}):he.length===0?(0,j.jsxs)("div",{className:"dshr-empty-books",children:[V?`\u6CA1\u6709\u5339\u914D\u300C${C.trim()}\u300D\u7684\u6587\u6863\u3002`:P?`\u300C${P.name}\u300D\u8FD8\u6CA1\u6709\u4E66\u3002`:"\u5BFC\u5165\u6587\u6863\u540E\uFF0C\u5C31\u53EF\u4EE5\u628A\u5B83\u4EEC\u52A0\u5165\u4E66\u5355\u3002",P&&!P.system&&!V&&(0,j.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>$({kind:"edit",collection:P}),children:[(0,j.jsx)(Cn,{size:15})," \u6DFB\u52A0\u4E66\u7C4D"]})]}):(0,j.jsx)("div",{className:"dshr-books",children:he.map(_=>(0,j.jsx)(Kp,{book:_,onOpen:u,onDelete:g,onEditCitation:k,onCycleCategory:x=>w(x,Vp[x.category||"document"]),onAdd:_e,onRemove:P&&!P.system?Ue:void 0,selection:M,onToggle:x=>F(le=>{let re=new Set(le);return re.has(x)?re.delete(x):re.add(x),re})},_.id))}),(0,j.jsxs)("footer",{className:"dshr-library__foot",children:[(0,j.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,j.jsx)(No,{size:14})," \u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1"]}),(0,j.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,j.jsx)(Hn,{size:14})," \u9009\u4E2D\u95EE AI"]}),(0,j.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,j.jsx)(na,{size:14})," Google / \u5B66\u672F\u641C\u7D22"]}),(0,j.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,j.jsx)(pc,{size:14})," \u672C\u5730\u4E66\u67B6 \xB7 \u8FDB\u5EA6\u4E0E\u6279\u6CE8\u81EA\u52A8\u4FDD\u5B58"]})]})]}),L&&(0,j.jsx)(ad,{action:L,books:t,collections:e,onClose:()=>$(null),onCreate:de,onDelete:nt,onSave:async _=>{let x=await Ve(_);F(null),se(L.kind==="add"?`\u5DF2\u52A0\u5165\u300C${x.name}\u300D\u3002`:`\u5DF2\u4FDD\u5B58\u300C${x.name}\u300D\u3002`)}},`${L.kind}:${L.collection?.id||""}`),(0,j.jsx)("input",{ref:E,type:"file",multiple:!0,accept:".pdf,.epub,.mobi,.azw,.azw3,.txt,.md,.markdown,.html,.htm,application/pdf,application/epub+zip,text/plain,text/markdown,text/html",className:"dshr-sr-only",tabIndex:-1,onChange:_=>{let x=[..._.target.files??[]];_.target.value="",x.length>0&&p(x)}})]})}var kt=It(require("react"),1);var Yp=Object.freeze({"content-type":"application/json","x-dsh-reader":"1"}),un=class extends Error{constructor(e,r="REQUEST_FAILED",n=0){super(e),this.name="ReaderApiError",this.code=r,this.status=n}};async function cd(t){let e=null;try{e=await t.json()}catch{}return new un(e?.error?.message||e?.message||`\u7FFB\u8BD1\u670D\u52A1\u4E0D\u53EF\u7528\uFF08HTTP ${t.status}\uFF09\u3002`,e?.error?.code||e?.code||"REQUEST_FAILED",t.status)}async function Rs(t,e,{signal:r}={}){let n;try{n=await fetch(t,{method:"POST",headers:Yp,body:JSON.stringify(e),signal:r,credentials:"same-origin"})}catch(o){throw o?.name==="AbortError"?o:new un("\u65E0\u6CD5\u8FDE\u63A5\u5230 DSH \u4E3B\u8FDB\u7A0B\uFF0C\u8BF7\u786E\u8BA4 DSH \u6B63\u5728\u8FD0\u884C\u3002","NETWORK",0)}if(!n.ok)throw await cd(n);return n}function eo(t){return t?.name==="AbortError"}async function Io(t,e={}){let r=t.map(i=>({id:String(i.id),text:String(i.text??"")})).filter(i=>i.text.trim()!=="");if(r.length===0)return{};let n=await Rs("/dsh-reader/ai/translate",{segments:r,context:String(e.context??"").slice(0,1200),title:String(e.title??"").slice(0,300),glossary:String(e.glossary??"").slice(0,4e3),...e.expectedModel?{expectedModel:e.expectedModel}:{}},{signal:e.signal}),o=await n.json().catch(()=>null);if(!o||typeof o!="object"||!Array.isArray(o.translations))throw new un("\u7FFB\u8BD1\u670D\u52A1\u8FD4\u56DE\u4E86\u65E0\u6CD5\u8BC6\u522B\u7684\u7ED3\u679C\u3002","BAD_RESPONSE",n.status);let a={};for(let i of o.translations)i&&typeof i.id=="string"&&typeof i.zh=="string"&&i.zh.trim()!==""&&(a[i.id]=i.zh);if(Object.keys(a).length===0)throw new un("\u7FFB\u8BD1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u53EF\u7528\u8BD1\u6587\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","EMPTY_TRANSLATION",n.status);return e.includeMetadata?{translations:a,model:o.model,promptVersion:o.promptVersion}:a}async function dd({signal:t}={}){let e=await fetch("/dsh-reader/ai/status",{signal:t,credentials:"same-origin",headers:{"x-dsh-reader":"1"},cache:"no-store"});if(!e.ok)throw await cd(e);return e.json()}function ld(t){let e=t.split(/\r?\n/u).filter(r=>r.startsWith("data:")).map(r=>r.slice(5).trimStart()).join(`
`);if(e==="")return null;try{return JSON.parse(e)}catch{return{type:"delta",text:e}}}async function Ms(t,{onDelta:e,onMeta:r}={}){let n=await Rs("/dsh-reader/ai/chat",t,{signal:t.signal});if(!n.body)throw new un("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u6D41\u5F0F\u54CD\u5E94\u3002","NO_STREAM",n.status);let o=n.body.getReader(),a=new TextDecoder,i="",s=!1,l=null;try{for(;;){let{value:d,done:h}=await o.read();if(h)break;i+=a.decode(d,{stream:!0});let p=i.search(/\r?\n\r?\n/u);for(;p!==-1;){let u=i.slice(0,p),g=i.slice(p).match(/^\r?\n\r?\n/u)?.[0]??`

`;i=i.slice(p+g.length);let w=ld(u);w&&(w.type==="delta"&&typeof w.text=="string"?e?.(w.text):w.type==="error"?l=new un(w.message||"AI \u56DE\u7B54\u5931\u8D25\u3002",w.code||"AI_FAILED"):w.type==="done"?s=!0:r?.(w)),p=i.search(/\r?\n\r?\n/u)}}if(i.trim()!==""){let d=ld(i);d?.type==="delta"&&typeof d.text=="string"&&e?.(d.text),d?.type==="error"&&(l=new un(d.message||"AI \u56DE\u7B54\u5931\u8D25\u3002",d.code||"AI_FAILED")),d?.type==="done"&&(s=!0)}}finally{o.releaseLock?.()}if(l)throw l}async function ud(t,{signal:e}={}){let r=await Rs("/dsh-reader/import/fetch",{url:String(t||"")},{signal:e}),n=await r.blob();if(!n.size)throw new un("\u6765\u6E90\u8FD4\u56DE\u4E86\u7A7A\u6587\u4EF6\u3002","EMPTY",0);let o="book",a=r.headers.get("x-dsh-reader-filename");if(a)try{o=decodeURIComponent(a)}catch{o=a}return new File([n],o,{type:n.type||"application/octet-stream"})}var Mn=It(require("react"),1);var gd=Object.freeze([{id:"yellow",label:"\u9EC4",value:"#f5d76e"},{id:"green",label:"\u7EFF",value:"#8fd18b"},{id:"pink",label:"\u7C89",value:"#f3a6c0"},{id:"blue",label:"\u84DD",value:"#94c9f0"}]),ua=Object.freeze([{id:"thin",label:"\u7EC6",value:4},{id:"medium",label:"\u4E2D",value:9},{id:"wide",label:"\u5BBD",value:16}]),md=Object.freeze([{id:"ink",label:"\u58A8",value:"#3f3a33"},{id:"red",label:"\u6731",value:"#c2543f"},{id:"amber",label:"\u8D6D",value:"#a9772b"},{id:"blue",label:"\u84DD",value:"#3f6f97"}]),Ro=Object.freeze({highlight:"\u8367\u5149\u7B14",underline:"\u4E0B\u5212\u7EBF",note:"\u4FBF\u7B7E"}),Mo=Object.freeze([{id:"highlight",label:Ro.highlight},{id:"underline",label:Ro.underline},{id:"note",label:Ro.note}]);function Ps(t){return Ro[t]||"\u6807\u6CE8"}var bi="data-anno-block",bd=".dshr-block__body";function Os(t){return t?t.ownerDocument?t.ownerDocument:t.nodeType===9?t:typeof globalThis<"u"&&globalThis.document?globalThis.document:null:null}function Kr(t,e=0){let r=typeof t=="number"?t:Number(t);return Number.isFinite(r)?Math.trunc(r):e}function ar(t,e,r){return Math.min(r,Math.max(e,t))}function fi(t,e=5){let r=10**e;return Math.round(t*r)/r}function mi(t){return String(t??"").replace(/\s+/gu," ").trim()}function Zp(t){if(!t||t.nodeType!==1)return!1;let e=t.tagName;if(e==="SCRIPT"||e==="STYLE"||e==="NOSCRIPT"||e==="TEXTAREA"||e==="SVG"||e==="CANVAS")return!0;let r=t.classList;return!!(r&&(r.contains("dshr-translation")||r.contains("dshr-anno-ignore"))||typeof t.hasAttribute=="function"&&t.hasAttribute("data-anno-ignore"))}function Ls(t){let e=[],r=[],n=new Map,o=0;if(!t)return{nodes:e,starts:r,positions:n,total:o,text:""};let a=s=>{for(let l=s.firstChild;l;l=l.nextSibling)if(l.nodeType===3){let d=l.nodeValue||"";n.set(l,e.length),e.push(l),r.push(o),o+=d.length}else l.nodeType===1&&!Zp(l)&&a(l)};a(t);let i="";for(let s=0;s<e.length;s+=1)i+=e[s].nodeValue||"";return{nodes:e,starts:r,positions:n,total:o,text:i}}function Qp(t,e,r){if(!t||!e)return null;let n;try{n=t.createRange();let o=e.nodeType===3?e.nodeValue?e.nodeValue.length:0:e.childNodes?e.childNodes.length:0;return n.setStart(e,ar(Kr(r),0,o)),n.collapse(!0),n}catch{return null}}function hd(t,e,r,n){if(!r)return 0;if(r.nodeType===3){let o=t.positions.get(r),a=r.nodeValue||"";if(o!==void 0)return t.starts[o]+ar(Kr(n),0,a.length)}if(r===e||e.contains(r)){let o=Os(e),a=Qp(o,r,n);if(!a)return 0;let i=o.createRange();for(let s=0;s<t.nodes.length;s+=1)try{if(i.setStart(t.nodes[s],0),i.collapse(!0),a.compareBoundaryPoints(0,i)<=0)return t.starts[s]}catch{}return t.total}try{return e.compareDocumentPosition(r)&4?t.total:0}catch{return 0}}function pd(t,e){if(!t.nodes.length)return null;let r=ar(Kr(e),0,t.total);for(let o=0;o<t.nodes.length;o+=1){let a=t.nodes[o].nodeValue?t.nodes[o].nodeValue.length:0,i=t.starts[o];if(r<i+a)return{node:t.nodes[o],offset:r-i};if(r===i+a&&a>0)return{node:t.nodes[o],offset:a}}let n=t.nodes[t.nodes.length-1];return{node:n,offset:n.nodeValue?n.nodeValue.length:0}}function Jp(t,e,r){if(!t)return null;let n=Ls(t);if(!n.nodes.length||n.total===0)return null;let o=ar(Kr(e),0,n.total),a=ar(Kr(r),0,n.total);a<o&&([o,a]=[a,o]);let i=pd(n,o),s=pd(n,a),l=Os(t);if(!l||!i||!s)return null;try{let d=l.createRange();return d.setStart(i.node,i.offset),d.setEnd(s.node,s.offset),d}catch{return null}}function xd(t){let e=[];if(!t)return e;try{let r=typeof t.getClientRects=="function"?t.getClientRects():null;if(r&&typeof r.length=="number")for(let n=0;n<r.length;n+=1){let o=r[n];o&&e.push(o)}}catch{}if(e.length===0)try{let r=typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():null;r&&(r.width||r.height)&&e.push(r)}catch{}return e}function ef(t){let e=1/0,r=1/0,n=-1/0,o=-1/0;for(let a=0;a<t.length;a+=1){let i=t[a],s=Number(i.width)||0,l=Number(i.height)||0;if(!s&&!l)continue;let d=Number(i.left)||0,h=Number(i.top)||0;e=Math.min(e,d),r=Math.min(r,h),n=Math.max(n,d+s),o=Math.max(o,h+l)}return Number.isFinite(e)?{left:e,top:r,width:n-e,height:o-r,right:n,bottom:o}:{left:0,top:0,width:0,height:0,right:0,bottom:0}}function tf(t,e,r){let n=e,o=r;for(;n<o&&/\s/u.test(t[n]);)n+=1;for(;o>n&&/\s/u.test(t[o-1]);)o-=1;return{start:n,end:o,text:t.slice(n,o)}}function vd(t,e){if(!t||!e||!e.rangeCount)return null;let r=Os(t);if(!r)return null;let n;try{n=e.getRangeAt(0)}catch{return null}if(!n)return null;try{if(!t.contains(n.commonAncestorContainer))return null}catch{return null}let o=[],a;try{a=t.querySelectorAll(`[${bi}]`)}catch{return null}for(let s=0;s<a.length;s+=1){let l=a[s],d=l.getAttribute(bi);if(!d)continue;let h=l.classList&&l.classList.contains("dshr-block__body")?l:l.querySelector(bd);if(!h)continue;let p=Ls(h);if(p.total===0)continue;let u;try{u=r.createRange(),u.selectNodeContents(h)}catch{continue}let g=!1,w=!1,b=!1,S=!1;try{g=n.compareBoundaryPoints(3,u)>=0,w=n.compareBoundaryPoints(1,u)<=0,b=n.compareBoundaryPoints(0,u)<0,S=n.compareBoundaryPoints(2,u)>0}catch{continue}if(g||w)continue;let y=b?0:hd(p,h,n.startContainer,n.startOffset),k=S?p.total:hd(p,h,n.endContainer,n.endOffset),E=ar(Kr(y),0,p.total),A=ar(Kr(k),0,p.total);if(A<=E)continue;let T=tf(p.text,E,A);T.end<=T.start||o.push({blockId:d,start:T.start,end:T.end,text:T.text})}if(o.length===0)return null;let i="";for(let s=0;s<o.length;s+=1)s>0&&(i+=`
`),i+=o[s].text;return i=i.replace(/\u00a0/gu," ").trim(),i?{text:i,rect:ef(xd(n)),ranges:o}:null}function ha(t,e){if(!t||!e)return[];let r;try{r=e.getBoundingClientRect()}catch{return[]}if(!r)return[];let n=Number(r.width)||0,o=Number(r.height)||0;if(n<=0||o<=0)return[];let a=Number(r.left)||0,i=Number(r.top)||0,s=a+n,l=i+o,d=xd(t);if(d.length===0)return[];let h=[];for(let p=0;p<d.length;p+=1){let u=d[p];if(!u)continue;let g=Number(u.width)||0,w=Number(u.height)||0;if(g<=0||w<=0)continue;let b=Number(u.left)||0,S=Number(u.top)||0,y=Math.max(b,a),k=Math.max(S,i),E=Math.min(b+g,s),A=Math.min(S+w,l);E-y<.5||A-k<.5||h.push({x:fi(ar((y-a)/n,0,1)),y:fi(ar((k-i)/o,0,1)),w:fi(ar((E-y)/n,0,1)),h:fi(ar((A-k)/o,0,1))})}return h.sort((p,u)=>p.y-u.y||p.x-u.x),h}function rf(t){let e=String(t??""),r="",n=[],o=-1;for(let a=0;a<e.length;a+=1){let i=e[a];if(/\s/u.test(i)){o<0&&r.length>0&&(o=a);continue}o>=0&&(n.push(o),r+=" ",o=-1),n.push(a),r+=i}return{text:r,map:n}}function nf(t,e,r,n,o){let a=t.length,i=r[n];if(i===void 0)return null;let s=n+o<r.length?r[n+o]:a;return s>i?{start:i,end:s}:null}function fd(t,e){if(!t||!e)return null;let r=String(t),n=String(e).trim();if(!n)return null;let o=r.indexOf(n);if(o>=0)return{start:o,end:o+n.length};let a=rf(r),i=mi(n);if(!i)return null;let s=a.text.indexOf(i);if(s>=0){let d=nf(r,a.text,a.map,s,i.length);if(d)return d}let l=Math.min(i.length,48);for(let d=l;d>=12;d-=4){let h=i.slice(0,d),p=a.text.indexOf(h);if(p<0)continue;let u=a.map[p];if(u===void 0)continue;let g=Math.min(r.length,u+i.length);if(g>u)return{start:u,end:g}}return null}function of(t,e,r){let n=mi(t);if(!n)return!1;let o=[],a=mi(e);a&&o.push(a);let i=mi(r);return i&&i!==a&&o.push(i),o.length===0?!0:o.some(s=>n===s?!0:n.length<8||s.length<8?!1:n.includes(s)||s.includes(n))}function gi(t,e,r){let n=ar(Kr(e),0,t.index.total),o=ar(Kr(r),0,t.index.total);if(o<=n)return null;let a=Jp(t.body,n,o);return a?{blockId:t.blockId,start:n,end:o,text:t.index.text.slice(n,o),range:a}:null}function af(t){let e=[];if(!t)return e;let r;try{r=t.querySelectorAll(`[${bi}]`)}catch{return e}for(let n=0;n<r.length;n+=1){let o=r[n],a=o.getAttribute(bi);if(!a)continue;let i=o.classList&&o.classList.contains("dshr-block__body")?o:o.querySelector(bd);if(!i)continue;let s=Ls(i);s.total!==0&&e.push({blockId:a,body:i,index:s})}return e}function yd(t,e){let r=[];if(!t||!e)return r;let n=af(t);if(n.length===0)return r;let o=new Map;for(let s=0;s<n.length;s+=1)o.has(n[s].blockId)||o.set(n[s].blockId,n[s]);let a=typeof e.quote=="string"?e.quote:"",i=Array.isArray(e.ranges)?e.ranges:[];for(let s=0;s<i.length;s+=1){let l=i[s];if(!l||typeof l!="object")continue;let d=o.get(String(l.blockId==null?"":l.blockId));if(!d)continue;let h=ar(Kr(l.start),0,d.index.total),p=ar(Kr(l.end),0,d.index.total),u=p>h;if(u){let w=d.index.text.slice(h,p);if(of(w,l.text,a)){let b=gi(d,h,p);b&&r.push(b);continue}}let g=fd(d.index.text,a||l.text);if(g){let w=gi(d,g.start,g.end);w&&r.push(w);continue}if(u){let w=gi(d,h,p);w&&r.push(w)}}if(r.length===0&&a){let s=a.split(/\n+/u).map(h=>h.trim()).filter(h=>h.length>=2),l=s.length>0?s:[a.trim()],d=new Set;for(let h=0;h<n.length;h+=1){let p=n[h];if(d.has(p.blockId))continue;let u=1/0,g=-1/0;for(let b=0;b<l.length;b+=1){let S=fd(p.index.text,l[b]);S&&(u=Math.min(u,S.start),g=Math.max(g,S.end))}if(!Number.isFinite(u)||g<=u)continue;d.add(p.blockId);let w=gi(p,u,g);w&&r.push(w)}}return r}var j0=require("react"),Ot=require("react/jsx-runtime");function to({size:t=14}){return(0,Ot.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,Ot.jsx)("path",{d:"M9.4 2.6 5.1 6.9l-.7 2.7 2.7-.7 4.4-4.3-2.1-2Z",stroke:"currentColor",strokeWidth:"1.35",strokeLinejoin:"round"}),(0,Ot.jsx)("path",{d:"m4.4 9.6-2.1 2.1c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0l2.1-2.1",stroke:"currentColor",strokeWidth:"1.35",strokeLinecap:"round"}),(0,Ot.jsx)("path",{d:"M3 13.5h7.4",stroke:"currentColor",strokeWidth:"1.35",strokeLinecap:"round",opacity:".55"})]})}function xi({size:t=14}){return(0,Ot.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,Ot.jsx)("path",{d:"M4.2 3v4.6a3.8 3.8 0 0 0 7.6 0V3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,Ot.jsx)("path",{d:"M3.4 13.3c2-.7 4.2-.8 9.2-.2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function jn({size:t=12}){return(0,Ot.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,Ot.jsx)("path",{d:"M3.5 2.7h9v6.2l-3.2 3.4H3.5z",fill:"currentColor",fillOpacity:".9",stroke:"currentColor",strokeWidth:"1",strokeLinejoin:"round"}),(0,Ot.jsx)("path",{d:"M9.3 12.3V9h3.1",stroke:"var(--dshr-anno-paper, #ffffff)",strokeWidth:"1.15",strokeLinejoin:"round"}),(0,Ot.jsx)("path",{d:"M5.4 5.5h5.1M5.4 7.4h3.4",stroke:"var(--dshr-anno-paper, #ffffff)",strokeWidth:"1",strokeLinecap:"round",opacity:".8"})]})}function wd({size:t=56}){return(0,Ot.jsxs)("svg",{width:t,height:t,viewBox:"0 0 56 56",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,Ot.jsx)("rect",{x:"8.5",y:"9",width:"33",height:"38",rx:"4",stroke:"currentColor",strokeWidth:"1.8",opacity:".55"}),(0,Ot.jsx)("path",{d:"M15 18h20M15 24h20M15 30h13",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",opacity:".42"}),(0,Ot.jsx)("path",{d:"M34 28.5h11.5v9.2l-4.6 5H34z",fill:"currentColor",fillOpacity:".16",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),(0,Ot.jsx)("path",{d:"M40.9 42.7v-5h4.6",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),(0,Ot.jsx)("path",{d:"M36.8 33.6h5.6M36.8 36.4h3.8",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",opacity:".7"})]})}function vi({size:t=13}){return(0,Ot.jsx)("svg",{width:t,height:t,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",focusable:"false",children:(0,Ot.jsx)("path",{d:"m3.4 3.4 7.2 7.2M10.6 3.4 3.4 10.6",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})})}function kd(t,e,r){let n=Number(t);return Number.isFinite(n)?Math.min(r,Math.max(e,n)):e}function yi(t){let e=Number(t);return .36+(kd(Number.isFinite(e)?e:9,4,16)-4)/12*.34}function wi(t){return(1-kd(t,.1,.95))*.82}function ki(t){let e=String(t??""),r=2166136261;for(let n=0;n<e.length;n+=1)r^=e.charCodeAt(n),r=Math.imul(r,16777619);return r>>>0}function sf(t,e=0){let r=(Number(t)^Math.imul((Number(e)||0)+1,2654435769))>>>0;return r^=r<<13,r>>>=0,r^=r>>>17,r^=r<<5,r>>>=0,r/4294967296}function _i(t,e){let r=Math.max(4,Number(e)||4),n=h=>sf(t,h)*2-1,o=3.7+n(1)*.5,a=3.1+n(2)*.45,i=3.7+n(3)*.45,s=3.3+n(4)*.55,l=r*.54,d=Math.max(1,r-.6);return[`M0.6 ${o.toFixed(2)}`,`C${(r*.18).toFixed(2)} ${a.toFixed(2)}`,`${(r*.34).toFixed(2)} ${a.toFixed(2)}`,`${l.toFixed(2)} ${i.toFixed(2)}`,`S${(r*.82).toFixed(2)} ${s.toFixed(2)}`,`${d.toFixed(2)} ${(s-.25).toFixed(2)}`].join(" ")}function Si(t){if(!t)return"\u6279\u6CE8";let e=typeof t.note=="string"?t.note.trim():"";if(e)return e.length>34?`${e.slice(0,34)}\u2026`:e;let r=typeof t.quote=="string"?t.quote.trim():"";return r?r.length>34?`${r.slice(0,34)}\u2026`:r:"\u6279\u6CE8"}var ro=require("react/jsx-runtime");function lf(t,e){let r=Math.min(t.left+t.width,e.left+e.width)-Math.max(t.left,e.left),n=Math.min(t.top+t.height,e.top+e.height)-Math.max(t.top,e.top);if(r<=0||n<=0)return 0;let o=r*n,a=Math.min(t.width*t.height,e.width*e.height);return a>0?o/a:0}function cf(t){let e=[];if(!t)return e;try{let n=typeof t.getClientRects=="function"?t.getClientRects():null;if(n&&typeof n.length=="number")for(let o=0;o<n.length;o+=1){let a=n[o];if(!a)continue;let i=Number(a.width)||0,s=Number(a.height)||0;i<=0||s<=0||e.push({left:Number(a.left)||0,top:Number(a.top)||0,width:i,height:s})}}catch{}if(e.length===0)try{let n=typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():null;n&&(Number(n.width)||0)>0&&(Number(n.height)||0)>0&&e.push({left:Number(n.left)||0,top:Number(n.top)||0,width:Number(n.width)||0,height:Number(n.height)||0})}catch{}if(e.length<=1)return e;let r=[];for(let n=0;n<e.length;n+=1){let o=e[n],a=!1;for(let i=0;i<r.length;i+=1)if(lf(o,r[i])>.55){a=!0;break}a||r.push(o)}return r}function df(t,e){return!t||t.kind&&t.kind!=="flow"?!1:!e||t.chapterId==null?!0:t.chapterId===e}function uf(t,e){if(t===e)return!0;if(!t||!e||t.length!==e.length)return!1;for(let r=0;r<t.length;r+=1){let n=t[r],o=e[r];if(n.type!==o.type||n.key!==o.key||n.annotationId!==o.annotationId||n.x!==o.x||n.y!==o.y||n.width!==o.width||n.height!==o.height||n.color!==o.color||n.path!==o.path||n.isNote!==o.isNote||n.label!==o.label)return!1}return!0}function _d({containerRef:t,annotations:e,chapterId:r,onOpenAnnotation:n,layoutVersion:o}){let a=Mn.default.useRef(null),i=Mn.default.useRef(0),s=Mn.default.useRef({annotations:e,chapterId:r,onOpenAnnotation:n});s.current={annotations:e,chapterId:r,onOpenAnnotation:n};let[l,d]=Mn.default.useState({height:0,marks:[]}),h=Mn.default.useCallback(()=>{let u=a.current,g=t&&t.current?t.current:null;if(!u||!g)return;let w;try{w=u.getBoundingClientRect()}catch{return}if(!w)return;let{annotations:b,chapterId:S}=s.current,y=Array.isArray(b)?b:[],k=g.clientWidth||w&&g.getBoundingClientRect().width||0,E=0,A=null;try{if(A=g.querySelector(".dshr-content__inner"),!A){for(let O=g.firstElementChild;O;O=O.nextElementSibling)if(!(O===u||O.classList&&O.classList.contains("dshr-anno-layer"))){A=O;break}}}catch{A=null}if(A)try{let O=A.getBoundingClientRect();E=Math.max(0,O.top-w.top+O.height)}catch{E=0}let T=[];for(let O=0;O<y.length;O+=1){let R=y[O];if(!df(R,S))continue;let m;try{m=yd(g,R)}catch{continue}if(!Array.isArray(m)||m.length===0)continue;let M=R.style==="underline"||R.style==="note"?R.style:"highlight",F=R.color||"#f5d76e",L=ki(`${R.id||""}|${R.createdAt||0}`),$=yi(R.width),J=R.id==null?"":String(R.id),se=M==="note"||typeof R.note=="string"&&R.note.trim().length>0,ne=Si(R),ce=null;for(let G=0;G<m.length;G+=1){let oe=m[G],ue=cf(oe&&oe.range);for(let P=0;P<ue.length;P+=1){let B=ue[P],V=B.left-w.left,he=B.top-w.top,Z=`${J}:${G}:${P}`;if(ce={x:V,y:he,width:B.width,height:B.height},M==="underline"){let Pe=B.width+2;T.push({type:"underline",key:`u:${Z}`,annotationId:J,x:V-1,y:he+B.height-7.2,width:Pe,height:8,color:F,path:_i(L,Pe),isNote:!1,label:ne})}else{let Pe=Math.max(3.5,B.height*$);T.push({type:"band",key:`b:${Z}`,annotationId:J,x:V-1,y:he+B.height*wi($),width:B.width+2,height:Pe,color:F,path:"",isNote:M==="note",label:ne})}E=Math.max(E,he+B.height+8)}}if(se&&ce){let G=Math.min(Math.max(2,ce.x+ce.width+3),Math.max(2,k-21));T.push({type:"note",key:`n:${J}`,annotationId:J,x:G,y:Math.max(0,ce.y-1),width:19,height:19,color:F,path:"",isNote:!0,label:ne})}}let C=Math.max(0,Math.ceil(E+8));d(O=>O.height===C&&uf(O.marks,T)?O:{height:C,marks:T})},[t]),p=Mn.default.useCallback(()=>{if(typeof window>"u"||i.current)return;let u=()=>{i.current=0,h()};i.current=typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(u):window.setTimeout(u,16)},[h]);return Mn.default.useEffect(()=>{let u=t&&t.current?t.current:null,g=a.current;if(!u||!g||typeof window>"u")return;let w=[];p(),w.push(window.setTimeout(p,80));let b=null;if(typeof ResizeObserver<"u"){let C=new ResizeObserver(()=>p());try{C.observe(u);let O=g.parentElement;O&&O!==u&&C.observe(O);let R=u.querySelector(".dshr-content__inner");R&&!R.contains(g)&&C.observe(R)}catch{}b=C}let S=null;if(typeof MutationObserver<"u"){S=new MutationObserver(C=>{for(let O=0;O<C.length;O+=1){let R=C[O].target;if(!g.contains(R)){p();return}}});try{S.observe(u,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["class","style","data-rendered"]})}catch{}}let y=()=>p(),k=C=>{g.contains(C.target)||p()};window.addEventListener("resize",y),u.addEventListener("load",k,!0);let E=u.contains(g);E||u.addEventListener("scroll",y,{passive:!0});let A=null,T=typeof document<"u"?document.fonts:null;if(T&&typeof T.ready=="object"&&typeof T.ready.then=="function"&&T.ready.then(()=>p()).catch(()=>{}),T&&typeof T.addEventListener=="function"){A=()=>p();try{T.addEventListener("loadingdone",A)}catch{A=null}}return()=>{for(let C=0;C<w.length;C+=1)window.clearTimeout(w[C]);if(i.current&&(typeof window.cancelAnimationFrame=="function"?window.cancelAnimationFrame(i.current):window.clearTimeout(i.current),i.current=0),b&&b.disconnect(),S&&S.disconnect(),window.removeEventListener("resize",y),u.removeEventListener("load",k,!0),E||u.removeEventListener("scroll",y),T&&A)try{T.removeEventListener("loadingdone",A)}catch{}}},[t,p]),Mn.default.useEffect(()=>{if(p(),typeof window>"u")return;let u=window.setTimeout(p,40);return()=>window.clearTimeout(u)},[e,r,o,p]),(0,ro.jsx)("div",{ref:a,className:"dshr-anno-layer",style:l.height>0?{height:`${l.height}px`}:void 0,"data-anno-layer":"flow",children:l.marks.map(u=>{if(u.type==="note")return(0,ro.jsx)("button",{type:"button",className:"dshr-anno-note-btn",style:{left:`${u.x}px`,top:`${u.y}px`,"--dshr-anno-color":u.color},"data-anno-id":u.annotationId,title:u.label?`\u67E5\u770B\u6279\u6CE8\uFF1A${u.label}`:"\u67E5\u770B\u6279\u6CE8","aria-label":u.label?`\u67E5\u770B\u6279\u6CE8\uFF1A${u.label}`:"\u67E5\u770B\u6279\u6CE8",onMouseDown:g=>g.preventDefault(),onClick:()=>{let g=s.current.onOpenAnnotation;typeof g=="function"&&g(u.annotationId)},children:(0,ro.jsx)(jn,{size:12})},u.key);if(u.type==="underline"){let g=Math.max(2,Math.round(u.width*100)/100);return(0,ro.jsx)("svg",{className:"dshr-anno-underline",style:{left:`${u.x}px`,top:`${u.y}px`,width:`${u.width}px`,height:`${u.height}px`,"--dshr-anno-color":u.color},viewBox:`0 0 ${g} 8`,preserveAspectRatio:"none","data-anno-id":u.annotationId,"aria-hidden":"true",focusable:"false",children:(0,ro.jsx)("path",{d:u.path})},u.key)}return(0,ro.jsx)("span",{className:`dshr-anno-band${u.isNote?" dshr-anno-band--note":""}`,style:{left:`${u.x}px`,top:`${u.y}px`,width:`${u.width}px`,height:`${u.height}px`,"--dshr-anno-color":u.color},"data-anno-id":u.annotationId,"aria-hidden":"true"},u.key)})})}function pa(t){let e=t.scrollHeight-t.clientHeight;return e>0?Math.max(0,Math.min(1,t.scrollTop/e)):0}function Ti(t,e,r){return{chapter:t,chapters:e,scrollRatio:r,percent:(t+r)/e*100}}function Sd(t,e){let r=Math.max(1,e-48-56),n=t.filter(a=>Number.isFinite(a.top)&&a.bottom>a.top).toSorted((a,i)=>a.top-i.top),o=[0];for(let a of n)for(;a.bottom>o.at(-1)+48+r+.5;){let i=o.at(-1),s=a.top-48;o.push(s>i+.5?s:i+r)}return o}function hf(t,e){let r=0,n=t.length-1;for(;r<n;){let o=Math.ceil((r+n)/2);t[o]<=e+.5?r=o:n=o-1}return r}function Td(){let t=[0],e=0;return{get page(){return e+1},get pages(){return t.length},get top(){return t[e]},get starts(){return t},replace(r,n){t=r.length?r:[0],e=hf(t,Math.max(0,n||0))},turn(r){let n=Math.max(0,Math.min(t.length-1,e+Math.sign(r)));return n===e?!1:(e=n,!0)}}}function Ed(t,e){let r=t.getBoundingClientRect(),n=[],o=(s,l)=>{s.height<2||s.width<.1||n.push({top:s.top-r.top+t.scrollTop,bottom:s.bottom-r.top+t.scrollTop,...l})},a=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let s=a.nextNode();s;s=a.nextNode()){if(!s.nodeValue?.trim()||s.parentElement.closest('[aria-hidden="true"],script,style'))continue;let l=document.createRange();l.selectNodeContents(s);for(let d of l.getClientRects())o(d,{node:s})}for(let s of e.querySelectorAll("img,svg,hr,video,canvas"))o(s.getBoundingClientRect(),{element:s,atomic:!0});n.sort((s,l)=>s.top-l.top);let i=[];for(let s of n){let l=i.at(-1),d=l&&Math.min(l.bottom,s.bottom)-Math.max(l.top,s.top);l&&!l.atomic&&!s.atomic&&d>Math.min(l.bottom-l.top,s.bottom-s.top)*.5?l.bottom=Math.max(l.bottom,s.bottom):i.push({...s})}return i}function Ds(t,e,r){let n=e+48,o=t.find(b=>b.bottom>n+.5)||t.at(-1);if(!o)return null;let a=o.element||o.node?.parentElement.closest(".dshr-block__body,.dshr-translation,.dshr-chapter__kicker")||o.node?.parentElement,i=r.getBoundingClientRect(),s=a?.getBoundingClientRect(),l=s?.height?(n-(s.top-i.top+r.scrollTop))/s.height:0;if(!o.node)return{element:a,ratio:l};let d=document.createRange(),h=1,p=o.node.length;for(;h<p;){let b=h+p>>1;d.setStart(o.node,0),d.setEnd(o.node,b);let S=d.getClientRects(),y=S[S.length-1];(y?y.top-i.top+r.scrollTop:-1/0)<o.top-1?h=b+1:p=b}let u=Math.max(0,h-1),g=u,w=document.createTreeWalker(a,NodeFilter.SHOW_TEXT);for(let b=w.nextNode();b&&b!==o.node;b=w.nextNode())g+=b.length;return{node:o.node,offset:u,textOffset:g,element:a,ratio:l}}function Nd(t,e,r){if(!t)return r;let n=e.getBoundingClientRect();if(!t.node?.isConnected&&t.element?.isConnected&&Number.isFinite(t.textOffset)){let o=t.textOffset,a=document.createTreeWalker(t.element,NodeFilter.SHOW_TEXT);for(let i=a.nextNode();i;i=a.nextNode()){if(o<i.length){t.node=i,t.offset=o;break}o-=i.length}}if(t.node?.isConnected&&e.contains(t.node)&&t.node.length){let o=document.createRange(),a=Math.min(t.offset,t.node.length-1);o.setStart(t.node,a),o.setEnd(t.node,a+1);let i=o.getBoundingClientRect();if(i.height)return i.top-n.top+e.scrollTop-48}if(t.element?.isConnected&&e.contains(t.element)){let o=t.element.getBoundingClientRect();return o.top-n.top+e.scrollTop+Math.max(0,t.ratio)*o.height-48}return r}var je=require("react/jsx-runtime"),Fs=new Set(["heading","paragraph","list-item","quote"]),pf=6;function ff(t,e){let r=t.style.scrollBehavior;t.style.scrollBehavior="auto",t.scrollTop=e,t.style.scrollBehavior=r}function gf(t,e){return`${t.title||""} \xB7 ${e?.title||""}`}var mf=kt.default.memo(function({block:e}){if(e.kind==="image")return(0,je.jsxs)("figure",{children:[e.src?(0,je.jsx)("img",{src:e.src,alt:e.alt||"",loading:"lazy",decoding:"async"}):(0,je.jsx)("div",{className:"dshr-translation",children:"\u56FE\u7247\u672A\u80FD\u8F7D\u5165"}),e.caption?(0,je.jsx)("figcaption",{children:e.caption}):null]});if(e.kind==="table")return(0,je.jsx)("div",{dangerouslySetInnerHTML:{__html:e.html||""}});if(e.kind==="code")return(0,je.jsx)("pre",{className:"dshr-block__code",children:e.text||""});if(e.kind==="rule")return(0,je.jsx)("hr",{});if(e.kind==="heading"){let r=`h${Math.max(1,Math.min(6,e.level||2))}`;return(0,je.jsx)(r,{dangerouslySetInnerHTML:{__html:e.html||""}})}return(0,je.jsx)("p",{dangerouslySetInnerHTML:{__html:e.html||""}})});function bf({state:t,onRetry:e}){return t?t.status==="loading"?(0,je.jsx)("div",{className:"dshr-translation",children:(0,je.jsxs)("span",{className:"dshr-translation__loading",children:[(0,je.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u7FFB\u8BD1\u2026"]})}):t.status==="error"?(0,je.jsxs)("div",{className:"dshr-translation is-error",children:[(0,je.jsx)("p",{children:t.error||"\u8FD9\u6BB5\u7FFB\u8BD1\u5931\u8D25\u4E86\u3002"}),(0,je.jsx)("button",{type:"button",className:"dshr-translation__retry",onClick:e,children:"\u91CD\u8BD5"})]}):t.zh?(0,je.jsx)("div",{className:"dshr-translation",children:String(t.zh).split(/\n+/u).filter(Boolean).map((r,n)=>(0,je.jsx)("p",{children:r},n))}):null:null}function Ad({book:t,chapterIndex:e,onChapterChange:r,settings:n,chapterEntry:o,onChapterEntered:a,onSelection:i,onProgress:s,annotations:l=[],onOpenAnnotation:d,focusAnnotation:h,layoutVersion:p=0}){let u=t.chapters[e],g=kt.default.useRef(null),w=kt.default.useRef(null),b=kt.default.useRef(0),S=kt.default.useRef(new Map),y=kt.default.useRef(!1),k=kt.default.useRef(null),E=kt.default.useRef(!0),A=kt.default.useMemo(()=>new Map((u?.blocks??[]).map(G=>[G.id,G])),[u]),[T,C]=kt.default.useState({}),[O,R]=kt.default.useState(!1);kt.default.useEffect(()=>{E.current=!0;let G=new AbortController;return k.current=G,()=>{E.current=!1,G.abort()}},[]);let m=kt.default.useCallback(G=>`${u?.id||"chapter"}:${G.id}`,[u?.id]),M=kt.default.useCallback((G,oe)=>{E.current&&C(ue=>({...ue,[G]:{...ue[G]||{},...oe}}))},[]),F=kt.default.useCallback(async()=>{if(y.current||S.current.size===0)return;y.current=!0,R(!0);let G=[...S.current.entries()].slice(0,pf);for(let[ue]of G)S.current.delete(ue);let oe=gf(t,u);try{let ue=await Io(G.map(([P,B])=>({id:P,text:B.text})),{context:oe,title:t.title,signal:k.current?.signal});for(let[P]of G)ue[P]?M(P,{status:"done",zh:ue[P],error:void 0}):M(P,{status:"error",error:"\u7FFB\u8BD1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u8FD9\u4E00\u6BB5\u3002"})}catch(ue){if(!eo(ue))for(let[P]of G)M(P,{status:"error",error:ue?.message||"\u7FFB\u8BD1\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002"})}finally{y.current=!1,E.current&&(R(!1),S.current.size>0&&window.setTimeout(()=>{F()},120))}},[t,u,M]),L=kt.default.useCallback((G,{force:oe=!1}={})=>{if(!G||!Fs.has(G.kind)||!G.text?.trim())return;let ue=m(G),P=T[ue];!oe&&(P?.status==="loading"||P?.status==="done")||(M(ue,{status:"loading",error:void 0}),S.current.set(ue,{text:G.text.slice(0,4e3)}),F())},[F,m,T,M]),$=kt.default.useCallback(G=>{let oe=G.slice(G.indexOf(":")+1),ue=A.get(oe);ue&&L(ue,{force:!0})},[A,L]),J=kt.default.useCallback(()=>{for(let G of u?.blocks??[])Fs.has(G.kind)&&G.text?.trim()&&L(G,{force:T[`${u.id}:${G.id}`]?.status==="error"})},[u,L,T]);kt.default.useEffect(()=>{let G=g.current;if(!G||!n.autoTranslate||typeof IntersectionObserver>"u")return;w.current?.disconnect();let oe=new IntersectionObserver(ue=>{for(let P of ue){if(!P.isIntersecting)continue;let B=P.target.getAttribute("data-seg-id"),V=A.get(B);V&&L(V)}},{root:G,rootMargin:"420px 0px 520px 0px",threshold:.01});for(let ue of G.querySelectorAll("[data-seg-id]"))oe.observe(ue);return w.current=oe,()=>oe.disconnect()},[A,u?.id,L,n.autoTranslate]),kt.default.useLayoutEffect(()=>{let G=g.current;if(!G||!o||n.readingMode==="book")return;let oe=o.edge==="end"?1:Math.max(0,Math.min(1,Number(o.scrollRatio)||0));ff(G,Math.max(0,G.scrollHeight-G.clientHeight)*oe),a?.(o,pa(G))},[o,n.readingMode,a]);let se=kt.default.useCallback(G=>{let oe=g.current;if(!oe)return;let ue=vd(oe,window.getSelection());if(!ue){i?.(null);return}i?.({...ue,source:"flow",context:u?.blocks.map(P=>P.text||"").join(`
`).slice(0,2400)||""})},[u,i]);kt.default.useEffect(()=>{if(!h?.id)return;let G=g.current,oe=G?.dataset.readerNavigation||"0",ue=window.setTimeout(()=>{if(!G||G!==g.current||(G.dataset.readerNavigation||"0")!==oe)return;let P=h.blockId?G.querySelector(`[data-anno-block="${CSS.escape(h.blockId)}"]`):null;if(!P)return;let B=new CustomEvent("dshr-flow-navigate",{cancelable:!0,detail:{element:P}});G.dispatchEvent(B)&&P.scrollIntoView({block:"center",behavior:"smooth"})},120);return()=>window.clearTimeout(ue)},[t,e,h]);let ne=kt.default.useCallback(()=>{let G=g.current;if(!G)return;let oe=Date.now();oe-b.current<600||(b.current=oe,s?.(Ti(e,t.chapters.length,pa(G))))},[t.chapters.length,e,s]),ce=kt.default.useCallback(G=>{let oe=G.target.closest?.("a");if(!oe)return;let ue=oe.getAttribute("data-chapter");if(ue){G.preventDefault();let B=Number(ue);Number.isInteger(B)&&B>=0&&B<t.chapters.length&&r(B);return}let P=oe.getAttribute("href")||"";P&&!P.startsWith("#")&&(G.preventDefault(),window.open(P,"_blank","noopener,noreferrer"))},[t.chapters.length,r]);return u?(0,je.jsxs)("div",{className:"dshr-content",ref:g,role:"region","aria-label":"\u6B63\u6587\u9605\u8BFB\u533A",tabIndex:n.readingMode==="book"?0:void 0,onScroll:ne,onMouseUp:se,onKeyUp:se,onClick:ce,children:[(0,je.jsxs)("div",{className:"dshr-content__inner",children:[(0,je.jsxs)("article",{className:"dshr-chapter",children:[(0,je.jsxs)("div",{className:"dshr-chapter__kicker",children:["\u7B2C ",e+1," / ",t.chapters.length," \u7AE0",n.autoTranslate?" \xB7 \u5B9E\u65F6\u7FFB\u8BD1\u5DF2\u5F00\u542F":""]}),u.blocks.map(G=>{let oe=m(G),ue=T[oe],P=Fs.has(G.kind)&&G.text?.trim();return(0,je.jsxs)("div",{className:`dshr-block dshr-block--${G.kind}`,"data-kind":G.kind,"data-seg-id":P?G.id:void 0,"data-anno-block":G.id,children:[(0,je.jsx)("div",{className:"dshr-block__body",children:(0,je.jsx)(mf,{block:G})}),P?(0,je.jsx)(bf,{state:ue,onRetry:()=>$(oe)}):null]},G.id)})]}),(0,je.jsxs)("div",{className:"dshr-chapter__nav",children:[(0,je.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e<=0,onClick:()=>r(e-1),children:[(0,je.jsx)(Qa,{size:15})," ",e>0?t.chapters[e-1].title:"\u5DF2\u662F\u7B2C\u4E00\u7AE0"]}),(0,je.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:J,disabled:O,title:"\u7FFB\u8BD1\u672C\u7AE0\u6240\u6709\u6BB5\u843D",children:[O?(0,je.jsx)("span",{className:"dshr-spinner"}):(0,je.jsx)(No,{size:15})," \u7FFB\u8BD1\u672C\u7AE0"]}),(0,je.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e>=t.chapters.length-1,onClick:()=>r(e+1),children:[e<t.chapters.length-1?t.chapters[e+1].title:"\u5DF2\u662F\u6700\u540E\u4E00\u7AE0"," ",(0,je.jsx)(Ja,{size:15})]})]})]}),(0,je.jsx)(_d,{containerRef:g,annotations:l,chapterId:u.id,onOpenAnnotation:d,layoutVersion:p})]}):(0,je.jsxs)("div",{className:"dshr-error-panel",children:[(0,je.jsx)("h3",{children:"\u8FD9\u4E00\u7AE0\u4E0D\u5B58\u5728"}),(0,je.jsx)("p",{children:"\u6587\u6863\u76EE\u5F55\u53EF\u80FD\u4E0D\u5B8C\u6574\uFF0C\u8BF7\u5C1D\u8BD5\u91CD\u65B0\u5BFC\u5165\u3002"})]})}var xa=It(require("react"),1);var zs="6.5.438-reader4",oo="/dsh-reader-assets/",Cd;function xf(){return`${oo}pdf.bundle.js?v=${zs}`}function vf(){return Cd||=import(xf()).then(t=>{if(!t?.getDocument||!t.GlobalWorkerOptions)throw new Error("PDF \u5F15\u64CE\u8D44\u6E90\u683C\u5F0F\u4E0D\u6B63\u786E");return t.GlobalWorkerOptions.workerSrc=`${oo}pdf.worker.mjs?v=${zs}`,t.GlobalWorkerOptions.rendererSrc=`${oo}pdf.renderer.mjs?v=${zs}`,t}).catch(t=>{throw Cd=null,t})}var hn=()=>new DOMException("PDF operation cancelled","AbortError"),no=t=>{if(t?.aborted)throw hn()};async function yf(t,e,{signal:r,onRead:n,onError:o}={}){no(r);let a=256*1024,i=new Uint8Array(await e.slice(0,Math.min(a,e.size)).arrayBuffer());no(r);let s={bytes:i.length,reads:1,total:e.size};class l extends t.PDFDataRangeTransport{constructor(){super(e.size,i,!0)}aborted=!1;queue=[];active=0;requestDataRange(h,p){this.aborted||r?.aborted||(this.queue.push({begin:h,end:p}),this.pump())}pump(){for(;!this.aborted&&this.active<2&&this.queue.length;){let{begin:h,end:p}=this.queue.shift();this.active++,e.slice(h,p).arrayBuffer().then(u=>{if(this.aborted||r?.aborted)return;let g=new Uint8Array(u);if(g.length!==p-h)throw new Error("PDF \u5206\u6BB5\u8BFB\u53D6\u4E0D\u5B8C\u6574");s.bytes+=g.length,s.reads++,n?.({...s}),this.onDataRange(h,g)}).catch(u=>{this.aborted||r?.aborted||(this.abort(),o?.(u))}).finally(()=>{this.active--,this.pump()})}}abort(){this.aborted=!0,this.queue.length=0}}return n?.({...s}),{range:new l,stats:s,rangeChunkSize:a,disableStream:!0,disableAutoFetch:!0}}async function Ei(t,{signal:e,onProgress:r,onRead:n,onError:o}={}){no(e);let a=await vf();no(e);let i,s,l,d,h=!1,p,u,g=new Promise((S,y)=>{u=y});g.catch(()=>{});let w=()=>p||(h=!0,clearTimeout(d),s?.abort(),e?.removeEventListener("abort",b),p=Promise.resolve().then(()=>i?.destroy()).catch(()=>{}).finally(()=>l?.destroy()),p),b=()=>{u(hn()),w()};e?.addEventListener("abort",b,{once:!0});try{if(l=new a.PDFWorker({verbosity:0}),await Promise.race([l.promise,g,new Promise((k,E)=>{d=setTimeout(()=>E(new Error("PDF \u540E\u53F0\u7EBF\u7A0B\u542F\u52A8\u8D85\u65F6\uFF0C\u8BF7\u68C0\u67E5 Host \u7684 Worker \u8D44\u6E90\u4E0E\u5B89\u5168\u7B56\u7565\u3002")),1e4)})]),clearTimeout(d),no(e),typeof Worker!="function"||!(l.port instanceof Worker))throw new Error("PDF \u540E\u53F0\u7EBF\u7A0B\u4E0D\u53EF\u7528\uFF0C\u8BF7\u68C0\u67E5 /dsh-reader-assets/pdf.worker.mjs \u548C Host \u7684 Worker \u5B89\u5168\u7B56\u7565\u3002");let S;if(typeof Blob<"u"&&t instanceof Blob?(S=await yf(a,t,{signal:e,onRead:n,onError:k=>{u(k),o?.(k),w()}}),s=S.range):S={data:(t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)).slice()},no(e),h)throw hn();i=a.getDocument({...S,worker:l,cMapUrl:`${oo}cmaps/`,cMapPacked:!0,standardFontDataUrl:`${oo}standard_fonts/`,wasmUrl:`${oo}wasm/`,iccUrl:`${oo}iccs/`,isEvalSupported:!1,disableWorkerRendering:!1,verbosity:0}),i.onProgress=r;let y=await Promise.race([i.promise,g]);if(no(e),h)throw hn();return{engine:a,pdf:y,close:w,source:S}}catch(S){throw await w(),S}}var Ni=class{constructor(e=48*1024*1024){this.limit=e,this.bytes=0,this.entries=new Map}get(e){let r=this.entries.get(e);return r&&(this.entries.delete(e),this.entries.set(e,r)),r}set(e,r){this.delete(e);let n=r.bitmap.width*r.bitmap.height*4;if(n>this.limit){r.bitmap.close();return}for(this.entries.set(e,{...r,bytes:n}),this.bytes+=n;this.bytes>this.limit;)this.delete(this.entries.keys().next().value)}delete(e){let r=this.entries.get(e);r&&(this.bytes-=r.bytes,r.bitmap.close(),this.entries.delete(e))}clear(){for(let e of this.entries.keys())this.delete(e)}},Ai=class{constructor(e,r,n=20){this.count=e,this.defaultHeight=r,this.gap=n,this.heights=new Map,this.tree=new Float64Array(e+1),this.paddingTop=18}setHeight(e,r){let n=r-(this.heights.get(e)??this.defaultHeight);this.heights.set(e,r);for(let o=e;o<=this.count;o+=o&-o)this.tree[o]+=n}top(e){let r=(e-1)*(this.defaultHeight+this.gap);for(let n=e-1;n>0;n-=n&-n)r+=this.tree[n];return this.paddingTop+r}height(e){return this.heights.get(e)??this.defaultHeight}pageAt(e){let r=1,n=this.count;for(;r<n;){let o=Math.ceil((r+n)/2);this.top(o)<=e?r=o:n=o-1}return r}entryAt(e){let r=this.pageAt(e);return{page:r,top:this.top(r),height:this.height(r)}}};var wf=/[\u1100-\u11FF\u2E80-\u2EFF\u3000-\u303F\u3040-\u30FF\u3100-\u312F\u3130-\u318F\u3400-\u4DBF\u4E00-\u9FFF\uA960-\uA97F\uAC00-\uD7AF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF]/,Rd=/[.。！？!?；;…]$/,kf="0123456789+\u2212-",Id="\u2070\xB9\xB2\xB3\u2074\u2075\u2076\u2077\u2078\u2079\u207A\u207B\u207B";var _f=/[\u0000-\u0008\u000b\u000c\u000e-\u001f\ufffd]/u;function ga(t){return!!t&&wf.test(t)}function Sf(t){return String(t).replace(/\u0000/g,"").replace(/[\t\u00a0\u2000-\u200a\u202f\u205f\u3000]/g," ").replace(/\s+/g," ")}function Ci(t){return typeof t=="number"&&Number.isFinite(t)?t:null}function fa(t){let e=t&&t.transform;if(!Array.isArray(e)||e.length<6)return null;let r=Ci(e[4]),n=Ci(e[5]);if(r===null||n===null)return null;let o=Ci(t.width),a=Ci(t.height);return{x:r,y:n,width:o===null?null:Math.abs(o),height:a===null||a<=0?null:a}}function Tf(t,e){let r=0;for(let n of t)r+=ga(n)?1:.5;return r*(e||10)}function Ef(t){return{text:"",startX:t?t.x:0,endX:t?t.x:0,y:t?t.y:0,height:t&&t.height?t.height:0,hasGeometry:!!t}}function Nf(t,e,r){let n=Sf(e);if(!n)return;if(r?.height&&t.hasGeometry&&t.height&&/^[+−-]?\d*$/.test(n)){let a=t.text.codePointAt(t.text.length-2),i=a>=119808&&a<=120779,s=/^[0-9]+$/.test(n)&&t.text&&Id.includes(t.text.at(-1)),l=(r.y-t.y)/t.height,d=(r.x-t.endX)/t.height;(i||s)&&r.height<=t.height*.85&&l>=.18&&l<=.58&&d>=-.2&&d<=.18&&(n=[...n].map(h=>Id[kf.indexOf(h)]).join(""))}let o="";if(t.text){let a=t.text[t.text.length-1],i=n[0];if(a===" "||i===" "||t.text.endsWith(" "))o="";else if(ga(a)||ga(i))o="";else if(r&&t.hasGeometry){let s=r.x-t.endX,l=Math.max(t.height||0,r.height||0,1);o=s>l*.18?" ":""}}if(t.text=(t.text+o+n).replace(/^ +/,""),r&&t.hasGeometry){let a=r.width===null?Tf(n,r.height||t.height):r.width;t.endX=Math.max(t.endX,r.x+a),t.startX=Math.min(t.startX,r.x),r.height&&(t.height=Math.max(t.height,r.height))}}function Af(t,e,r){if(!t||r)return!0;if(!e||!t.hasGeometry)return!1;let n=Math.max(t.height||0,e.height||0,1);return Math.abs(e.y-t.y)>n*.58||e.x<t.endX-n*2&&t.endX-t.startX>n}function Cf(t,e){let r=t.lastLine;if(!r)return!1;let n=r.height||10,o=e.height||n,a=Math.max(n,o,1),i=r.y-e.y;if(i<-a*1.2||i>a*1.68)return!0;let s=o/n;return!!(s>1.18||s<.84||e.startX-t.leftX>a*1.25||Rd.test(r.text)&&i>a*1.35&&r.endX<t.rightX-a*2)}function If(t){let e="";for(let r of t){let n=r.text.trim();if(!n)continue;if(!e){e=n;continue}let o=e[e.length-1],a=n[0];o==="-"||ga(o)||ga(a)?e+=n:e+=" "+n}return e}function Rf(t){if(t.length<=1400)return[t];let e=[],r=t;for(;r.length>1400;){let n=Math.floor(770.0000000000001),o=Math.min(r.length,1400),a=-1;for(let s=o;s>n;s-=1)if(Rd.test(r[s-1])||r[s-1]===`
`){a=s;break}a<=0&&(a=r.lastIndexOf(" ",o),a<n&&(a=o));let i=r.slice(0,a).trim();i&&e.push(i),r=r.slice(a).trim()}return r&&e.push(r),e}function Md(t,{metadata:e=!1}={}){let r=[],n=null,o=!1;if(Array.isArray(t))for(let[l,d]of t.entries()){if(!d||typeof d.str!="string")continue;if(!d.str.trim()){d.hasEOL&&(o=!0);continue}let h=fa(d);Af(n,h,o)&&(n=Ef(h),n.itemIndices=[],r.push(n)),Nf(n,d.str,h),n.itemIndices.push(d.__pdfItemIndex??l),o=!!d.hasEOL}let a=[],i=null;for(let l of r)l.text.trim()&&(!i||Cf(i,l)?(i={lines:[l],lastLine:l,leftX:l.startX,rightX:l.endX},a.push(i)):(i.lines.push(l),i.lastLine=l,i.leftX=Math.min(i.leftX,l.startX),i.rightX=Math.max(i.rightX,l.endX)));let s=[];for(let l of a){let d=If(l.lines);for(let h of Rf(d)){let p=h.trim();p&&s.push({src:p,...e?{itemIndices:l.lines.flatMap(u=>u.itemIndices)}:{}})}}return{text:s.map(l=>l.src).join(`

`),segments:s}}function Mf(t,e){let r=(t||[]).filter(u=>typeof u?.str=="string").map((u,g)=>({...u,__pdfItemIndex:g})),n=0;for(let u=0;u<(t||[]).length;u+=1)typeof t[u]?.str=="string"&&(r[n++].__pdfItemIndex=u);if(!e)return r;let o=r.filter(u=>u.str.trim().length>15&&u.width>e*.12),a=o.filter(u=>u.transform?.[4]<e*.3&&u.transform[4]+u.width<e*.5),i=o.filter(u=>u.transform?.[4]>=e*.49&&u.transform[4]<e*.66);if(a.length<4||i.length<4)return r;let s=r.filter(u=>u.str.trim()&&u.transform?.[4]<e*.48&&u.transform[4]+u.width>e*.52),d=i.filter(u=>{let g=u.transform[5],w=Math.max(2,(u.height||10)*.55);return a.some(b=>Math.abs(b.transform[5]-g)<w)&&!s.some(b=>Math.abs(b.transform[5]-g)<w)}).map(u=>u.transform[4]).sort((u,g)=>u-g);if(!d.some((u,g)=>d[g+3]-u<e*.02))return r;let h=[...new Set(o.filter(u=>u.transform?.[4]<e*.4&&u.transform[4]+u.width>e*.6).map(u=>Math.round(u.transform[5])))].sort((u,g)=>g-u),p=u=>{let g=u.transform?.[5]||0,w=h.filter(S=>S>g+3).length*2,b=h.some(S=>Math.abs(S-g)<=3);return[w+(b?1:0),b?0:u.transform?.[4]>=e*.48?2:1]};return r.sort((u,g)=>{let w=p(u),b=p(g);for(let S=0;S<w.length;S+=1)if(w[S]!==b[S])return w[S]-b[S];return u.__pdfItemIndex-g.__pdfItemIndex})}function Pf(t){for(let e=1;e+1<t.length;e++){let r=t[e];if(r.str!=="\u221A")continue;let n=t[e-1],o=t[e+1],a=t[e+2];if(n.str!=="1"||!/^[A-Za-z]$/u.test(o.str))continue;let i=fa(n),s=fa(r),l=fa(o);if(!i?.height||!s?.width||!l?.height||!l.width||!i.width)continue;let d=i.x+i.width/2,h=(i.y-l.y)/l.height;if(s.y>=i.y||s.y<=l.y||h<.8||h>1.8||d<s.x||d>l.x+l.width||Math.abs(l.x-s.x-s.width)>l.height*.25||(r.str="/\u221A",!a||!/^[A-Za-z0-9]$/u.test(a.str)))continue;let p=fa(a);p?.height&&p.height<=l.height*.85&&p.y<l.y-l.height*.1&&p.y>l.y-l.height*.55&&Math.abs(p.x-l.x-l.width)<=l.height*.18&&(a.str="_"+a.str)}}function Bs(t,e,r){let n=Mf(t,r);Pf(n);let o=Md(n,{metadata:!0});return{text:o.text,segments:o.segments.map((a,i)=>{let s=a.itemIndices.map(u=>t[u]?.str?.trim()||""),l=(a.src.match(/(?:\b[Oo]|[𝑂𝒪ΩΘ])\s*\((?:[^()\n]|\([^()\n]{1,40}\)){1,120}\)/gu)||[]).filter(u=>/[\u{1d400}-\u{1d7ff}⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻+×/]|\(\s*[A-Z]\s*\)/u.test(u)),d=a.src.match(/(?<![\p{L}\p{N}.])\d+(?:[.,]\d+)?(?:\s*[-–—]\s*\d+(?:[.,]\d+)?)?\s*×(?!\s*\d)/gu)||[],h=a.src.match(/\b1\/√[A-Za-z](?:_[A-Za-z0-9])?(?![\p{L}\p{N}_])/gu)||[],p=s.filter(u=>/[∑∫√≈≠≤≥∂∞]/u.test(u)&&!/[A-Za-z]{4}|[\u3400-\u9fff]/u.test(u));return{...a,id:`p${e}-s${i}`,protectedTokens:[...new Set([...l,...d,...h,...p])],...s.some(u=>_f.test(u))?{sourceNeedsReview:!0}:{}}})}}var Pd=String.raw`
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

.dshr-pdf-tool-group { flex: none; display: flex; align-items: center; gap: 4px; }
.dshr-pdf-toolbar .dshr-pdf-tool-group { gap: inherit; }

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

.dshr-topbar--pdf {
  --dshr-pdf-fg: var(--dshr-fg);
  --dshr-pdf-fg-secondary: var(--dshr-fg-2);
  --dshr-pdf-fg-tertiary: var(--dshr-fg-2);
  --dshr-pdf-border: var(--dshr-border);
  --dshr-pdf-hover: var(--dshr-hover);
  --dshr-pdf-accent: var(--dshr-brand);
}
.dshr-topbar--pdf .dshr-pdf-page-input { width: 50px; background: var(--dshr-layer-2); }
.dshr-topbar__icons .dshr-pdf-tbtn { width: 30px; height: 32px; font-size: 16px; }
.dshr-topbar__icons .dshr-pdf-tool-group { gap: 0; }

.dshr-immersive-controls--pdf .dshr-pdf-tool-group { gap: 3px; }
.dshr-immersive-controls--pdf .dshr-immersive-btn { min-width: 30px; }
.dshr-immersive-controls--pdf .dshr-pdf-zoom-percent,
.dshr-immersive-controls--pdf .dshr-pdf-pager { color: inherit; }
.dshr-immersive-controls--pdf .dshr-pdf-zoom-percent { min-width: 36px; }
.dshr-immersive-controls--pdf .dshr-pdf-page-input {
  height: 34px;
  width: 50px;
  border: 1px solid color-mix(in srgb, currentColor 15%, transparent);
  border-radius: 7px;
  background: color-mix(in srgb, currentColor 4%, transparent);
  color: inherit;
  box-shadow: none;
}
.dshr-immersive-controls--pdf .dshr-pdf-page-input:hover {
  border-color: color-mix(in srgb, currentColor 27%, transparent);
}
.dshr-immersive-controls--pdf .dshr-pdf-page-input:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 1px;
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
.dshr-pdf-scroll[data-pdf-page] .dshr-pdf-content { padding-inline: 24px; }

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
.dshr-pdf-evidence-mark { position: absolute; inset: 0; pointer-events: none; z-index: 5; }
.dshr-pdf-evidence-mark > i {
  position: absolute; border: 1px solid #25756d; border-radius: 2px;
  background: rgba(62, 194, 176, .28);
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
`;var Od=String.raw`
.dshr-pdf-root { container-type: inline-size; }
.dshr-pdf-body { display: flex; flex: 1 1 auto; min-height: 0; position: relative; overflow: hidden; }
.dshr-pdf-area { display: flex; flex: 1 1 0; min-width: 0; container: pdf-reader / inline-size; }
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
`;var ma=It(require("react"),1);var Ld="reader-a-2";function ao(t){return String(t||"").split(/\r?\n/u).map(e=>e.trim()).filter(Boolean).join(`
`).slice(0,4e3)}function Of(t,e=[]){let r=[...new Set([...e,...t.match(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]|\[\d+(?:\s*[,–—-]\s*\d+)*\]|https?:\/\/[^\s]+|\b10\.\d{4,9}\/[^\s]+/gu)||[]])].filter(a=>a&&t.includes(a)).sort((a,i)=>i.length-a.length),n=[],o=t;for(let a of r){let i=`\u27E6KEEP_${n.length}\u27E7`,s=o.split(a);s.length!==1&&(o=s.join(i),n.push({placeholder:i,token:a,count:s.length-1}))}return{text:o,restore(a){let i=String(a||"");for(let{placeholder:s,token:l,count:d}of n){let h=i.split(s);if(h.length-1!==d)throw new Error("\u8BD1\u6587\u9057\u6F0F\u6216\u91CD\u590D\u4E86\u516C\u5F0F\u6216\u5F15\u7528\u6807\u8BB0\uFF0C\u8BF7\u91CD\u8BD5\u672C\u6BB5\u3002");i=h.join(l)}if(/⟦KEEP_\d+⟧/u.test(i))throw new Error("\u8BD1\u6587\u5305\u542B\u65E0\u6CD5\u5BF9\u5E94\u7684\u516C\u5F0F\u6807\u8BB0\uFF0C\u8BF7\u91CD\u8BD5\u672C\u6BB5\u3002");return i}}}async function Lf(t,e){if(!globalThis.crypto?.subtle)return null;let r=new TextEncoder().encode(JSON.stringify([Ld,t.documentId,e,"zh-CN",t.model?.provider,t.model?.model,t.model?.promptVersion,ao(t.glossary)])),n=await crypto.subtle.digest("SHA-256",r);return`${t.documentId}:${Array.from(new Uint8Array(n),o=>o.toString(16).padStart(2,"0")).join("")}`}var Ii=class{constructor({translate:e,cache:r,onChange:n=()=>{},onModelChanged:o=()=>{},prefetchDelay:a=700,requestTimeout:i=12e4}){this.translate=e,this.cache=r,this.onChange=n,this.onModelChanged=o,this.prefetchDelay=a,this.requestTimeout=i,this.sources=new Map,this.entries=new Map,this.jobs=new Map,this.preparing=new Map,this.epoch=0,this.sequence=0,this.activePage=1,this.visibleIds=new Set,this.config={},this.disposed=!1}configure(e){if(this.disposed)return;let r={...e,glossary:ao(e.glossary)},n=JSON.stringify([r.documentId,r.model,r.glossary,Ld]),o=n!==this.namespace;if(o){let a=this.config.documentId;this.epoch+=1,this.abortJobs(),a&&a!==r.documentId&&this.sources.clear(),this.entries.clear(),this.preparing.clear(),this.namespace=n,this.cacheIssue=""}if(this.config=r,(!r.enabled||!r.canTranslate)&&this.abortJobs(),r.prefetch===!1)for(let a of[...this.jobs.values()])a.page!==this.activePage&&this.abortJob(a);if(o)for(let[a,i]of this.sources)this.registerPage(a,i);this.emit(),this.pump()}setFocus(e,r=[]){if(!this.disposed){if(e!==this.activePage){this.activePage=e,this.prefetchAfter=Date.now()+this.prefetchDelay,clearTimeout(this.timer),this.timer=null;for(let n of[...this.jobs.values()])n.page!==e&&this.abortJob(n);for(let n of this.sources.keys())if(Math.abs(n-e)>3){this.sources.delete(n);for(let[o,a]of this.entries)a.page===n&&this.entries.delete(o)}}this.visibleIds=new Set(r),this.emit(),this.pump()}}registerPage(e,r){if(this.disposed)return;this.sources.set(e,r);let n=[];for(let[o,a]of(r.segments||[]).entries()){let i=a.id||`p${e}-s${o}`,s=`${e}:${i}`,l=this.entries.get(s);if(l?.src===a.src&&l.sourceNeedsReview===a.sourceNeedsReview)continue;let d={...a,id:i,uid:s,index:o,page:e,status:"checking",zh:"",cached:!1};this.entries.set(s,d),a.sourceNeedsReview?d.status="source-review":n.push(d)}if(n.length){let o=Symbol(),a=this.epoch;this.preparing.set(e,o),Promise.all(n.map(i=>this.prepare(i,a))).finally(()=>{this.preparing.get(e)===o&&(this.preparing.delete(e),this.pump())})}this.emit()}fresh(e,r){return!this.disposed&&r===this.epoch&&this.entries.get(e.uid)===e}async prepare(e,r){try{let n=e.src.replace(/\s/gu,"");if(n&&(n.match(/[\u3400-\u9fff]/gu)||[]).length/n.length>=.55){e.zh=e.src,e.status="done",e.passthrough=!0,this.emit();return}if(e.key=await Lf(this.config,e.src),!this.fresh(e,r))return;let o=e.key&&await this.cache?.get(e.key);if(!this.fresh(e,r))return;typeof o?.zh=="string"&&o.zh.trim()?(e.zh=o.zh,e.cached=!0,e.status="done"):e.status="queued"}catch{if(!this.fresh(e,r))return;e.status="queued",this.cacheIssue="\u672C\u5730\u7F13\u5B58\u6682\u4E0D\u53EF\u7528\uFF0C\u672C\u6B21\u8BD1\u6587\u4ECD\u53EF\u9605\u8BFB\u3002"}this.emit(),this.pump()}abortJob(e){clearTimeout(e.timeout),e.controller.abort(),this.jobs.delete(e.id);for(let r of e.entries)this.entries.get(r.uid)===r&&r.job===e.id&&(r.status="queued")}abortJobs(){clearTimeout(this.timer),this.timer=null;for(let e of[...this.jobs.values()])this.abortJob(e)}pump(){if(!(this.disposed||!this.config.enabled||!this.config.canTranslate||!this.config.documentId))for(;this.jobs.size<2;){let e=[...this.entries.values()].filter(d=>d.page===this.activePage),r=e.some(d=>d.status==="queued"||d.status==="checking"||d.status==="loading"),n=[...this.entries.values()].filter(d=>d.status==="queued"&&!this.preparing.has(d.page)&&(d.page===this.activePage||this.config.prefetch!==!1&&!r&&d.page===this.activePage+1)).sort((d,h)=>d.page-this.activePage-(h.page-this.activePage)||Number(this.visibleIds.has(h.id))-Number(this.visibleIds.has(d.id))||d.index-h.index);if(!n.length)return;let o=n[0];if(o.page!==this.activePage&&Date.now()<(this.prefetchAfter||0)){this.timer||(this.timer=setTimeout(()=>{this.timer=null,this.pump()},this.prefetchAfter-Date.now()));return}let a=[],i=0,s=e.some(d=>d.status==="done")?3:1;for(let d of n){if(d.page!==o.page||a.length>=s||i+d.src.length>3e3&&a.length)break;a.push(d),i+=d.src.length}let l={id:++this.sequence,epoch:this.epoch,controller:new AbortController,page:o.page,entries:a,config:this.config};this.jobs.set(l.id,l);for(let d of a)d.status="loading",d.job=l.id,d.error="";l.timeout=setTimeout(()=>{if(this.jobs.get(l.id)===l){this.abortJob(l);for(let d of a)this.fresh(d,l.epoch)&&(d.status="error",d.error="\u672C\u6BB5\u7FFB\u8BD1\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5\u6216\u7A0D\u540E\u7EE7\u7EED\u3002");this.emit(),this.pump()}},this.requestTimeout),this.emit(),this.run(l)}}async run(e){let r=n=>!e.controller.signal.aborted&&this.fresh(n,e.epoch)&&n.job===e.id;try{let n=this.sources.get(e.page)?.segments||[],o=e.entries.map(d=>Of(d.src,d.protectedTokens)),a=e.entries[0].index,i=n.slice(Math.max(0,a-1),a+e.entries.length+1);a===0&&i.unshift(this.sources.get(e.page-1)?.segments?.at(-1)),a+e.entries.length>=n.length&&i.push(this.sources.get(e.page+1)?.segments?.[0]);let s=i.filter(d=>d&&!d.sourceNeedsReview).map(d=>d.src).join(`
`).slice(0,1200),l=await this.translate(e.entries.map((d,h)=>({id:d.id,text:o[h].text})),{title:e.config.title,context:s,glossary:e.config.glossary,expectedModel:e.config.model,signal:e.controller.signal,includeMetadata:!0});if(l.model&&(l.model.provider!==e.config.model?.provider||l.model.model!==e.config.model?.model)||l.promptVersion&&l.promptVersion!==e.config.model?.promptVersion){let d=new Error("\u9ED8\u8BA4\u6A21\u578B\u5DF2\u53D8\u5316\uFF0C\u8BF7\u5237\u65B0\u7FFB\u8BD1\u670D\u52A1\u3002");throw d.code="MODEL_CHANGED",d}for(let[d,h]of e.entries.entries())if(r(h)){try{let p=l.translations?.[h.id];if(!p?.trim())throw new Error("\u672C\u6BB5\u6CA1\u6709\u8FD4\u56DE\u8BD1\u6587\uFF0C\u8BF7\u91CD\u8BD5\u3002");h.zh=o[d].restore(p),h.status="done",h.cached=!1,h.key&&Promise.resolve(this.cache?.put({key:h.key,bookId:e.config.documentId,zh:h.zh})).catch(()=>{r(h)&&(this.cacheIssue="\u8BD1\u6587\u5DF2\u5B8C\u6210\uFF0C\u4F46\u672C\u5730\u7F13\u5B58\u672A\u80FD\u4FDD\u5B58\u3002",this.emit())})}catch(p){h.status="error",h.error=p.message}this.emit()}}catch(n){for(let o of e.entries)r(o)&&(o.status="error",o.error=n.message||"\u672C\u6BB5\u7FFB\u8BD1\u5931\u8D25\u3002");!e.controller.signal.aborted&&e.epoch===this.epoch&&n.code==="MODEL_CHANGED"&&this.onModelChanged()}finally{clearTimeout(e.timeout),this.jobs.delete(e.id),this.disposed||(this.emit(),this.pump())}}retry(e,r){if(e===this.activePage)for(let n of[...this.jobs.values()])n.page!==e&&this.abortJob(n);for(let n of this.entries.values())if(n.page===e&&(r?n.id===r:n.status==="error")){if(n.status==="loading"||n.status==="checking"||n.sourceNeedsReview)continue;n.status="queued",n.error="",n.cached=!1}this.emit(),this.pump()}emit(){if(this.disposed)return;let e={};for(let r of this.entries.values())(e[r.page]||=[]).push({...r});for(let r of Object.values(e))r.sort((n,o)=>n.index-o.index);this.onChange({pages:e,cacheIssue:this.cacheIssue||""})}dispose(){this.disposed=!0,this.abortJobs(),this.sources.clear(),this.entries.clear()}};var Ce=require("react/jsx-runtime");function Dd({page:t,source:e,rows:r=[],activeId:n,originRef:o,translation:a,onActivate:i,onClose:s}){let l=ma.default.useRef(null),{preferences:d,updatePreferences:h,paused:p,setPaused:u,modelError:g,refreshModel:w,cacheIssue:b,retry:S}=a,[y,k]=ma.default.useState(d.glossary||"");ma.default.useEffect(()=>k(d.glossary||""),[d.glossary]);let E=r.filter(R=>R.status==="done").length,A=r.filter(R=>R.status==="error").length,T=r.filter(R=>R.cached).length,C=r.map(R=>R.status).join(",");ma.default.useEffect(()=>{if(!d.linked||o.current!=="source")return;let R=l.current,m=[...R?.querySelectorAll("[data-translation-segment]")||[]].find(L=>L.dataset.translationSegment===n);if(!R||!m)return;let M=R.getBoundingClientRect(),F=m.getBoundingClientRect();(F.top<M.top+8||F.bottom>M.bottom-8)&&(R.scrollTop+=F.top-M.top-12)},[t,n,C,d.linked,d.fontSize]);let O=(R,m=!1)=>i(R,{origin:"translation",reveal:m});return(0,Ce.jsxs)("aside",{className:"dshr-pdf-translation-panel","aria-label":"PDF \u4E2D\u6587\u5BF9\u7167",style:{"--dshr-translation-font-size":`${d.fontSize||16}px`},children:[(0,Ce.jsxs)("header",{className:"dshr-pdf-translation-header",children:[(0,Ce.jsxs)("div",{children:[(0,Ce.jsx)("strong",{children:"\u4E2D\u6587\u5BF9\u7167"}),(0,Ce.jsxs)("span",{children:["\u7B2C ",t," \u9875 \xB7 ",E,"/",r.length," \u6BB5",T?` \xB7 \u7F13\u5B58 ${T} \u6BB5`:""]})]}),(0,Ce.jsx)("button",{type:"button","aria-label":"\u5173\u95ED\u8BD1\u6587\u4FA7\u680F",title:"\u5173\u95ED\u8BD1\u6587\u4FA7\u680F",onClick:s,children:"\xD7"})]}),(0,Ce.jsxs)("div",{className:"dshr-pdf-translation-controls",children:[(0,Ce.jsx)("button",{type:"button",onClick:()=>u(!p),children:p?"\u7EE7\u7EED\u7FFB\u8BD1":"\u6682\u505C\u7FFB\u8BD1"}),(0,Ce.jsxs)("label",{children:[(0,Ce.jsx)("input",{type:"checkbox",checked:d.linked!==!1,onChange:R=>h({linked:R.target.checked})}),"\u6BB5\u843D\u8054\u52A8"]}),(0,Ce.jsx)("button",{type:"button","aria-label":"\u7F29\u5C0F\u8BD1\u6587\u5B57\u53F7",disabled:d.fontSize<=12,onClick:()=>h({fontSize:Math.max(12,d.fontSize-1)}),children:"A\u2212"}),(0,Ce.jsx)("span",{className:"dshr-pdf-translation-font",children:d.fontSize||16}),(0,Ce.jsx)("button",{type:"button","aria-label":"\u653E\u5927\u8BD1\u6587\u5B57\u53F7",disabled:d.fontSize>=24,onClick:()=>h({fontSize:Math.min(24,d.fontSize+1)}),children:"A\uFF0B"})]}),(0,Ce.jsxs)("div",{className:"dshr-pdf-translation-options",children:[(0,Ce.jsxs)("label",{children:[(0,Ce.jsx)("input",{type:"checkbox",checked:!!d.showSource,onChange:R=>h({showSource:R.target.checked})}),"\u663E\u793A\u539F\u6587"]}),(0,Ce.jsxs)("label",{children:[(0,Ce.jsx)("input",{type:"checkbox",checked:d.prefetch!==!1,onChange:R=>h({prefetch:R.target.checked})}),"\u9884\u8BD1\u4E0B\u4E00\u9875"]})]}),(0,Ce.jsxs)("details",{className:"dshr-pdf-glossary",children:[(0,Ce.jsxs)("summary",{children:["\u6587\u6863\u672F\u8BED\u8868",d.glossary?" \xB7 \u5DF2\u542F\u7528":""]}),(0,Ce.jsxs)("label",{children:["\u6BCF\u884C\u586B\u5199\u201C\u539F\u8BCD = \u4E2D\u6587\u8BD1\u6CD5\u201D",(0,Ce.jsx)("textarea",{"aria-label":"\u6587\u6863\u672F\u8BED\u8868",maxLength:4e3,value:y,placeholder:`band gap = \u5E26\u9699
gate = \u6805\u6781`,onChange:R=>k(R.target.value)})]}),(0,Ce.jsx)("button",{type:"button",disabled:ao(y)===d.glossary,onClick:()=>h({glossary:ao(y)}),children:"\u5E94\u7528\u5E76\u66F4\u65B0\u8BD1\u6587"})]}),g&&(!r.length||r.some(R=>R.status!=="done"))&&e?.segments.length!==0?(0,Ce.jsxs)("div",{className:"dshr-pdf-translation-notice",role:"status",children:[g,(0,Ce.jsx)("button",{type:"button",onClick:w,children:"\u5237\u65B0\u670D\u52A1"})]}):null,b?(0,Ce.jsx)("div",{className:"dshr-pdf-translation-notice",role:"status",children:b}):null,p?(0,Ce.jsx)("div",{className:"dshr-pdf-translation-notice",role:"status",children:"\u5DF2\u6682\u505C\uFF0C\u5DF2\u5B8C\u6210\u7684\u8BD1\u6587\u4ECD\u53EF\u9605\u8BFB\u3002"}):null,(0,Ce.jsxs)("div",{className:"dshr-pdf-translation-list",ref:l,tabIndex:0,"aria-label":`\u7B2C ${t} \u9875\u8BD1\u6587`,onWheel:()=>{o.current="translation"},children:[e?e.segments.length===0?(0,Ce.jsx)("p",{className:"dshr-pdf-translation-empty",children:"\u6B64\u9875\u6CA1\u6709\u53EF\u63D0\u53D6\u7684\u6587\u5B57\uFF0C\u53EF\u80FD\u662F\u626B\u63CF\u9875\u6216\u56FE\u7247\u9875\u3002"}):null:(0,Ce.jsx)("p",{className:"dshr-pdf-translation-empty",children:"\u6B63\u5728\u63D0\u53D6\u5F53\u524D\u9875\u6BB5\u843D\u2026"}),(e?.segments||[]).map(R=>{let m=R.sourceNeedsReview?{status:"source-review"}:r.find(M=>M.id===R.id)||{status:"queued"};return(0,Ce.jsxs)("article",{"data-translation-segment":R.id,"data-status":m.status,className:`dshr-pdf-translation-paragraph${n===R.id&&d.linked!==!1?" is-linked":""}`,onPointerEnter:()=>{d.linked!==!1&&O(R.id)},children:[(0,Ce.jsxs)("div",{className:"dshr-pdf-translation-paragraph-head",children:[(0,Ce.jsxs)("span",{children:["\u6BB5\u843D ",Number(R.id.split("-s").at(-1))+1,m.cached?" \xB7 \u7F13\u5B58":""]}),(0,Ce.jsxs)("div",{children:[(0,Ce.jsx)("button",{type:"button","aria-label":`\u5B9A\u4F4D\u6BB5\u843D ${R.id}`,onClick:()=>O(R.id,!0),children:"\u5B9A\u4F4D\u539F\u6587"}),m.status==="done"&&!m.passthrough?(0,Ce.jsx)("button",{type:"button","aria-label":`\u91CD\u65B0\u7FFB\u8BD1\u6BB5\u843D ${R.id}`,onClick:()=>S(t,R.id),children:"\u91CD\u8BD1\u672C\u6BB5"}):null]})]}),d.showSource?(0,Ce.jsx)("p",{className:"dshr-pdf-translation-original",children:R.src}):null,m.zh?(0,Ce.jsx)("p",{className:"dshr-pdf-translation-result",children:m.zh}):null,m.status==="done"?null:m.status==="source-review"?(0,Ce.jsx)("p",{className:"dshr-pdf-translation-waiting",role:"status",children:"\u672C\u6BB5\u542B\u65E0\u6CD5\u786E\u8BA4\u7684 PDF \u5B57\u7B26\u3002\u8BF7\u9009\u62E9\u201C\u5B9A\u4F4D\u539F\u6587\u201D\uFF0C\u5728\u9875\u9762\u56FE\u50CF\u4E0A\u6838\u5BF9\u3002"}):m.status==="error"?(0,Ce.jsxs)("div",{className:"dshr-pdf-translation-segment-error",children:[(0,Ce.jsx)("p",{children:m.error}),(0,Ce.jsx)("button",{type:"button",onClick:()=>S(t,R.id),children:"\u91CD\u8BD5\u672C\u6BB5"})]}):(0,Ce.jsx)("p",{className:"dshr-pdf-translation-waiting",role:"status",children:p?"\u7B49\u5F85\u7EE7\u7EED\u7FFB\u8BD1":m.status==="loading"?"\u6B63\u5728\u7FFB\u8BD1\u672C\u6BB5\u2026":m.status==="checking"?"\u6B63\u5728\u8BFB\u53D6\u5DF2\u6709\u8BD1\u6587\u2026":"\u7B49\u5F85\u7FFB\u8BD1\u2026"})]},R.id)})]}),(0,Ce.jsxs)("footer",{className:"dshr-pdf-translation-footer",children:[(0,Ce.jsx)("span",{children:"\u60AC\u505C\u5BF9\u7167\u6BB5\u843D\uFF0C\u70B9\u51FB\u201C\u5B9A\u4F4D\u539F\u6587\u201D\u8FD4\u56DE\u51FA\u5904\u3002"}),A?(0,Ce.jsxs)("button",{type:"button",onClick:()=>S(t),children:["\u91CD\u8BD5\u5931\u8D25\u6BB5\u843D\uFF08",A,"\uFF09"]}):null]})]})}var Mr=It(require("react"),1);var $s={glossary:"",fontSize:16,prefetch:!0,showSource:!1,linked:!0};function Fd({documentId:t,title:e,enabled:r,activePage:n,sources:o,visibleIds:a}){let[i,s]=Mr.default.useState({documentId:"",pages:{},cacheIssue:""}),[l,d]=Mr.default.useState({...$s,documentId:""}),[h,p]=Mr.default.useState(null),[u,g]=Mr.default.useState(""),[w,b]=Mr.default.useState(0),[S,y]=Mr.default.useState(!1),k=Mr.default.useRef(null);return Mr.default.useEffect(()=>{if(!t)return;let E=!0;s({documentId:t,pages:{},cacheIssue:""}),y(!1);let A=new Ii({translate:Io,cache:{get:Wc,put:jc},onChange:T=>{E&&s({documentId:t,...T})},onModelChanged:()=>{E&&b(T=>T+1)}});return k.current={documentId:t,controller:A},Gc(t).catch(()=>({})).then(T=>{E&&d({...$s,...T,documentId:t,glossary:ao(T.glossary),fontSize:Math.max(12,Math.min(24,Number(T.fontSize)||16))})}),()=>{E=!1,A.dispose(),k.current?.controller===A&&(k.current=null)}},[t]),Mr.default.useEffect(()=>{if(!t)return;let E=new AbortController;g(""),dd({signal:E.signal}).then(C=>{E.signal.aborted||(p({...C,documentId:t}),C.ready||g("\u7FFB\u8BD1\u6A21\u578B\u672A\u5C31\u7EEA\uFF0C\u8BF7\u5728 DSH \u8BBE\u7F6E\u4E2D\u9009\u62E9\u9ED8\u8BA4\u6A21\u578B\u3002"))}).catch(C=>{E.signal.aborted||(g(C.message||"\u7FFB\u8BD1\u670D\u52A1\u4E0D\u53EF\u7528\u3002"),p({documentId:t,ready:!1}))});let A=()=>{document.visibilityState==="visible"&&b(C=>C+1)},T=setInterval(A,6e4);return document.addEventListener("visibilitychange",A),()=>{E.abort(),clearInterval(T),document.removeEventListener("visibilitychange",A)}},[t,w]),Mr.default.useEffect(()=>{let E=k.current;if(!(!E||E.documentId!==t||l.documentId!==t||h?.documentId!==t)){E.controller.configure({documentId:t,title:e,enabled:r&&!S,canTranslate:!!h.ready,model:{provider:h.provider||"",model:h.model||"",promptVersion:h.promptVersion||""},glossary:l.glossary,prefetch:l.prefetch}),E.controller.setFocus(n,a);for(let[A,T]of Object.entries(o))Math.abs(Number(A)-n)<=3&&E.controller.registerPage(Number(A),T)}},[t,e,r,S,l.glossary,l.prefetch,l.documentId,h,n,a,o]),Mr.default.useEffect(()=>{t&&l.documentId===t&&qc(t,l).catch(()=>{})},[t,l]),{...i.documentId===t?i:{pages:{},cacheIssue:""},preferences:l.documentId===t?l:$s,paused:S,model:h?.documentId===t?h:null,modelError:u,setPaused:y,refreshModel:()=>b(E=>E+1),updatePreferences:E=>d(A=>({...A,...E})),retry:(E,A)=>k.current?.controller.retry(E,A)}}var zd=It(require("react"),1);var io=require("react/jsx-runtime");function Ri(t){let e=Number(t);return Number.isFinite(e)?Math.min(1,Math.max(0,e)):0}function Df(t,e){typeof t=="function"&&t(e)}function Bd({annotations:t,onOpenAnnotation:e,page:r}){let n=zd.default.useRef(e);n.current=e;let o=Array.isArray(t)?t:[],a=[];for(let i=0;i<o.length;i+=1){let s=o[i];if(!s||!Array.isArray(s.rects)||s.rects.length===0||s.kind&&s.kind!=="pdf"||r!=null&&s.page!=null&&Number(s.page)!==Number(r))continue;let l=s.style==="underline"||s.style==="note"?s.style:"highlight",d=s.color||"#f5d76e",h=s.id==null?"":String(s.id),p=ki(`${h}|${s.createdAt||0}`),u=yi(s.width),g=Si(s),w=l==="note"||typeof s.note=="string"&&s.note.trim().length>0,b=null;for(let S=0;S<s.rects.length;S+=1){let y=s.rects[S];if(!y||typeof y!="object")continue;let k=Ri(y.x),E=Ri(y.y),A=Math.min(Ri(y.w),1-k),T=Math.min(Ri(y.h),1-E);if(!(A>.002)||!(T>.001))continue;b={x:k,y:E,width:A,height:T};let C=`${h}:${S}`;if(l==="underline")a.push((0,io.jsx)("svg",{className:"dshr-anno-pdf-underline",style:{left:`${k*100}%`,top:`calc(${(E+T)*100}% - 4px)`,width:`${A*100}%`,height:"5px","--dshr-anno-color":d},viewBox:"0 0 100 6",preserveAspectRatio:"none","data-anno-id":h,"aria-hidden":"true",focusable:"false",children:(0,io.jsx)("path",{d:_i(p,100)})},`u:${C}`));else{let O=Math.max(T*u,.004),R=E+T*wi(u);a.push((0,io.jsx)("span",{className:"dshr-anno-pdf-band",style:{left:`${k*100}%`,top:`${R*100}%`,width:`${A*100}%`,height:`${O*100}%`,"--dshr-anno-color":d},"data-anno-id":h,"aria-hidden":"true"},`b:${C}`))}}if(w&&b){let S=b.x+b.width,y=Math.min(Math.max(.005,S+.004),.972),k=Math.max(.004,b.y);a.push((0,io.jsx)("button",{type:"button",className:"dshr-anno-note-btn",style:{left:`${y*100}%`,top:`${k*100}%`,"--dshr-anno-color":d},"data-anno-id":h,title:g?`\u67E5\u770B\u6279\u6CE8\uFF1A${g}`:"\u67E5\u770B\u6279\u6CE8","aria-label":g?`\u67E5\u770B\u6279\u6CE8\uFF1A${g}`:"\u67E5\u770B\u6279\u6CE8",onMouseDown:E=>E.preventDefault(),onClick:()=>Df(n.current,h),children:(0,io.jsx)(jn,{size:12})},`n:${h}`))}}return(0,io.jsx)("div",{className:"dshr-anno-pdf-layer","data-anno-layer":"pdf",children:a})}var $d=t=>String(t??"").replace(/\s+/gu," ").trim();function Hd(t,e,r,n){if(!e?.contains(t.startContainer)||!e.contains(t.endContainer))return null;let o=t.cloneRange();o.selectNodeContents(e),o.setEnd(t.startContainer,t.startOffset);let a=o.toString().length,i=a+t.toString().length,s=i>a&&Ud(e,a,i),l=s?ha(s,r):[];return Mi(l)?{version:1,page:n,start:a,end:i,rects:l}:null}function Mi(t){return Array.isArray(t)&&t.length>0&&t.every(e=>e&&[e.x,e.y,e.w,e.h].every(Number.isFinite)&&e.x>=0&&e.y>=0&&e.w>0&&e.h>0&&e.x+e.w<=1.0001&&e.y+e.h<=1.0001)}function Ff(t,e){return!Mi(t)||!Mi(e)||t.length!==e.length?!1:t.every((r,n)=>{let o=e[n],a=r.x+r.w/2,i=r.y+r.h/2,s=o.x+o.w/2,l=o.y+o.h/2;return Math.abs(a-s)<=Math.min(.012,r.w/3)&&Math.abs(i-l)<=Math.min(.012,r.h/3)})}function Ud(t,e,r){let n=t.ownerDocument,o=n.createTreeWalker(t,4),a=0,i=null,s=0;for(let l=o.nextNode();l;l=o.nextNode()){let d=a+l.length;if(!i&&e<d&&(i=l,s=e-a),i&&r<=d){let h=n.createRange();return h.setStart(i,s),h.setEnd(l,r-a),h}a=d}return null}function zf(t){let e=t.cloneContents();for(let r of e.querySelectorAll("br"))r.replaceWith(`
`);return $d(e.textContent)}function Wd(t,e,r){if(!r||t?.version!==1||t.page!==Number(r.dataset.page)||!Number.isSafeInteger(t.start)||!Number.isSafeInteger(t.end)||t.start<0||t.end<=t.start||!Mi(t.rects))return null;let n=r.querySelector(".dshr-pdf-text-layer"),o=n&&Ud(n,t.start,t.end);if(!o)return null;let a=zf(o);if(!a||a!==$d(e))return null;let i=ha(o,r);return Ff(t.rects,i)?i:null}var Se=require("react/jsx-runtime"),Zd=Pd+Od;var{useCallback:jd,useEffect:jt,useLayoutEffect:Hs,useMemo:Us,useRef:Ie,useState:zt}=xa.default,qs=612,Xs=792,Ws=.1,js=5,Gd=1.2,Bf=32,$f="1000px 0px",Hf=1e7,qd=8192,Uf=2,Gs=128,Wf=160,jf=600;function Yr(t,e,r){return Math.min(r,Math.max(e,t))}function Gf(t){if(t.items.length<=Gs)return t;let e=0,r=!1;return new ReadableStream({async pull(n){if(await new Promise(a=>setTimeout(a,0)),r)return;let o=Math.min(e+Gs,t.items.length);n.enqueue({items:t.items.slice(e,o),styles:e===0?t.styles:void 0,lang:t.lang}),e=o,e===t.items.length&&n.close()},cancel(){r=!0}})}function Pi(t,e,r,n,o=0){let a=t&&Number.isFinite(t.width)&&t.width>0?t.width:qs,i=t&&Number.isFinite(t.height)&&t.height>0?t.height:Xs,s;if((e==="fit"||e==="page")&&n>0){if(s=Math.max(1,Math.floor(n)),e==="page"&&o>0){let h=Math.floor(a/i*Math.max(1,o-36));s=Math.max(1,Math.min(s,h))}}else s=Math.max(1,Math.floor(a*Yr(r,Ws,js)));let l=s/a,d=Math.max(1,Math.floor(i*l));return{width:s,height:d,pageScale:l}}function ba(t,e,r=Hf){let n=e&&Number.isFinite(e.width)&&e.width>0?e.width:qs,o=e&&Number.isFinite(e.height)&&e.height>0?e.height:Xs,a=Math.min(Math.max(globalThis.devicePixelRatio||1,1),2),i=t*a,s=n*o*i*i;s>r&&(i*=Math.sqrt(r/s));let l=Math.max(n,o)*i;return l>qd&&(i*=qd/l),Math.max(Number.EPSILON,i)}function Xd(t){let e=t&&t.name;return e==="RenderingCancelledException"||e==="AbortException"||e==="AbortError"||e==="WorkerTaskCancelled"}function Vd(t){let e=t&&t.name,r=t&&t.message?String(t.message):String(t||"");return e==="PasswordException"?"\u8BE5 PDF \u5DF2\u52A0\u5BC6\uFF0C\u9700\u8981\u5BC6\u7801\u624D\u80FD\u6253\u5F00\u3002":e==="InvalidPDFException"?"\u6587\u4EF6\u4E0D\u662F\u6709\u6548\u7684 PDF\uFF0C\u6216\u8005\u5DF2\u7ECF\u635F\u574F\u3002":e==="MissingPDFException"?"\u6CA1\u6709\u627E\u5230 PDF \u6570\u636E\u3002":e==="UnexpectedResponseException"?`PDF \u6570\u636E\u8BFB\u53D6\u5931\u8D25${r?`\uFF1A${r}`:"\u3002"} `:/dynamically imported module|Importing a module script failed|Failed to fetch|error loading|Cannot find module/i.test(r)?"PDF \u5F15\u64CE\u52A0\u8F7D\u5931\u8D25\uFF08/dsh-reader-assets/pdf.bundle.js\uFF09\u3002\u8BF7\u786E\u8BA4 Host \u5DF2\u6B63\u786E\u63D0\u4F9B\u9759\u6001\u8D44\u6E90\u540E\u91CD\u8BD5\u3002":r?`PDF \u52A0\u8F7D\u5931\u8D25\uFF1A${r}`:"PDF \u52A0\u8F7D\u5931\u8D25\u3002"}function Kd(t){if(!t)return null;let e=t.nodeType===1?t:t.parentElement;if(!e||typeof e.closest!="function")return null;let r=e.closest("[data-page]");if(!r)return null;let n=Number(r.getAttribute("data-page"));return Number.isFinite(n)?n:null}function qf(t){if(!t||t.rangeCount===0)return null;let e=t.getRangeAt(0),r=typeof e.getClientRects=="function"?e.getClientRects():null;if(!r||r.length===0){let s=e.getBoundingClientRect();return s&&(s.width||s.height)?s:null}if(r.length===1)return r[0];let n=1/0,o=1/0,a=-1/0,i=-1/0;for(let s=0;s<r.length;s+=1){let l=r[s];!l||!l.width&&!l.height||(n=Math.min(n,l.left),o=Math.min(o,l.top),a=Math.max(a,l.right),i=Math.max(i,l.bottom))}if(!Number.isFinite(n))return e.getBoundingClientRect();try{return new DOMRect(n,o,Math.max(0,a-n),Math.max(0,i-o))}catch{return e.getBoundingClientRect()}}function Yd(t){let e=Bf,r=t.querySelector(".dshr-pdf-content");if(r){let n=getComputedStyle(r),o=Number.parseFloat(n.paddingLeft)||0,a=Number.parseFloat(n.paddingRight)||0;e=o+a}return Math.max(120,t.clientWidth-e)}var Xf=xa.default.memo(function({pageNumber:e,dim:r,mode:n,scale:o,viewportWidth:a,viewportHeight:i,rendered:s,active:l=!0,registerPageElement:d,registerFrameElement:h,annotations:p,onOpenAnnotation:u,evidenceRects:g}){let w=Pi(r,n,o,a,i),b=xa.default.useCallback(y=>d(e,y),[e,d]),S=xa.default.useCallback(y=>h(e,y),[e,h]);return(0,Se.jsx)("div",{className:"dshr-pdf-page","data-page":e,"data-active":l?"true":"false",style:l?void 0:{display:"none"},ref:b,children:(0,Se.jsx)("div",{className:"dshr-pdf-page-col",style:{width:`${w.width}px`},children:(0,Se.jsxs)("div",{className:"dshr-pdf-frame","data-page":e,"data-rendered":s?"true":"false",style:{width:`${w.width}px`,height:`${w.height}px`,"--total-scale-factor":String(w.pageScale)},ref:S,children:[(0,Se.jsx)("div",{className:"dshr-pdf-placeholder","aria-hidden":"true",children:e}),(0,Se.jsx)("canvas",{className:"dshr-pdf-canvas",width:1,height:1}),(0,Se.jsx)("div",{className:"dshr-pdf-text-layer"}),(0,Se.jsx)(Bd,{annotations:p,onOpenAnnotation:u}),g?(0,Se.jsx)("div",{className:"dshr-pdf-evidence-mark","aria-hidden":"true",children:g.map((y,k)=>(0,Se.jsx)("i",{style:{left:`${y.x*100}%`,top:`${y.y*100}%`,width:`${y.w*100}%`,height:`${y.h*100}%`}},k))}):null,(0,Se.jsx)("div",{className:"dshr-pdf-page-loading","aria-hidden":"true",children:(0,Se.jsx)("span",{className:"dshr-pdf-spinner"})})]})})})});function Qd({data:t,documentId:e="",fileName:r="",renderImmersiveToolbar:n,renderTopbar:o,sidePanels:a,initialPage:i=1,autoTranslate:s=!1,pageTranslations:l,onReady:d,onPageChange:h,onPageText:p,onSelection:u,onRetryTranslation:g,annotations:w=[],onOpenAnnotation:b,focusAnnotation:S,focusEvidence:y,onEvidenceLocated:k,hideTranslations:E=!1,paged:A=!1,viewMode:T,onViewModeChange:C,onHideTranslations:O}){let R=Ie(null);R.current={autoTranslate:s,paged:A,onReady:d,onPageChange:h,onPageText:p,onSelection:u,onRetryTranslation:g,onOpenAnnotation:b,focusEvidence:y};let m=Ie(null),M=Ie(null),F=Ie(new Map),L=Ie(new Map),$=Ie(new Map),J=Ie(new Map),se=Ie({width:qs,height:Xs}),ne=Ie(new Map),ce=Ie(new Set),G=Ie([]),oe=Ie(new Set),ue=Ie(null),P=Ie(null),B=Ie(null),V=Ie(null),he=Ie(new Ni),Z=Ie(0),Pe=Ie(!1),de=Ie("fit"),_e=Ie(1),Ve=Ie(0),Ue=Ie(0),nt=Ie(!1),f=Ie(0),c=Ie(1),_=Ie(!!s),x=Ie([]),le=Ie(new Set),re=Ie(0),ge=Ie(0),be=Ie(0),ye=Ie(0),De=Ie(null),Ee=Ie(0),Be=Ie(null),at=Ie(!1),ot=Ie(""),Oe=Ie(0),Ke=Ie(!1),Ge=Ie(!1),ht=Ie(!1),[ve,lt]=zt("loading"),[Et,fr]=zt(null),[Kt,Dt]=zt(null),[$e,$t]=zt(0),[ae,ke]=zt({}),[Re,Qe]=zt(null),[Nt,Hr]=zt(A?"page":"width"),Ur=T??Nt,wo=C??Hr,qe=Ur==="page",At=Ur.startsWith("custom-")?"custom":"fit",[_t,nn]=zt(1),[Rt,qt]=zt(0),[Yt,_n]=zt(0),[Ne,gr]=zt(Yr(Number.parseInt(i,10)||1,1,999999)),[Sn,Wr]=zt({}),[rr,Ln]=zt(""),[Qt,on]=zt(!1),[Ct,Kn]=zt(0),[Jt,vr]=zt({}),[xe,I]=zt(null),[ee,me]=zt([]),[tt,Mt]=zt(null),[St,Pt]=zt(!1),er=Ie(null),Ht=Ie("source"),mr=s&&!E&&!St,ct=Fd({documentId:e,title:r,enabled:mr,activePage:Ne,sources:Jt,visibleIds:ee}),Er=Ie(null);Er.current=ct.pages;let Nr=Ie(!1);Nr.current=mr;let Ft=Ie(!1);Ft.current=mr&&ct.preferences.linked!==!1,er.current=tt;let jr=Us(()=>{let v=new Ai($e,Pi(Re,qe?"page":At,_t,Rt,Yt).height);for(let[D,H]of Object.entries(ae))v.setHeight(Number(D),Pi(H,qe?"page":At,_t,Rt,Yt).height);return v.paddingTop=De.current?.paddingTop??18,v},[$e,Re,ae,qe,At,_t,Rt,Yt]);De.current=jr,Hs(()=>{let v=Be.current;Be.current=null,v&&v.revision===Ee.current&&!A&&ja(v.anchor)},[jr,A]),jt(()=>{s&&!E&&Pt(!1)},[s,E]);function Ha(v,D){ne.current.set(v,D),vr(H=>H[v]===D?H:Object.fromEntries(Object.entries({...H,[v]:D}).filter(([W])=>Math.abs(Number(W)-c.current)<=3)))}function cs(v,D){return[...v?.querySelectorAll("[data-pdf-segments]")||[]].filter(H=>H.dataset.pdfSegments.split("|").includes(D))}function Ko(v,{origin:D="source",reveal:H=!1}={},W=c.current){if(Ht.current=D,Mt(We=>We?.page===W&&We.id===v?We:{page:W,id:v}),D==="source"&&W!==c.current&&Gr(W),!H)return;let ie=M.current,te=cs(L.current.get(W),v)[0];if(!ie||!te)return;let Ae=te.getBoundingClientRect(),et=ie.getBoundingClientRect();(Ae.top<et.top+12||Ae.bottom>et.bottom-12)&&ie.scrollTo({top:Math.max(0,ie.scrollTop+Ae.top-et.top-28),behavior:"auto"})}function Yo(){if(!Nr.current)return;let v=M.current,D=L.current.get(c.current);if(!v||!D)return;let H=v.getBoundingClientRect(),W=new Set;for(let Ae of D.querySelectorAll("[data-pdf-segments]")){let et=Ae.getBoundingClientRect();if(et.bottom>H.top+4&&et.top<H.bottom-4)for(let We of Ae.dataset.pdfSegments.split("|"))W.add(We)}let ie=[...W];me(Ae=>Ae.join("|")===ie.join("|")?Ae:ie);let te=er.current;ie.length&&(!te||te.page!==c.current||!W.has(te.id)&&Ht.current==="source")&&Ko(ie[0])}jt(()=>{for(let v of L.current.values())for(let D of v.querySelectorAll("[data-pdf-segments]"))Ft.current&&Number(v.dataset.page)===tt?.page&&D.dataset.pdfSegments.split("|").includes(tt.id)?D.dataset.pdfLinked="true":delete D.dataset.pdfLinked},[tt,Sn,Jt,mr,ct.preferences.linked]),jt(()=>{if(ve!=="ready")return;let v=requestAnimationFrame(Yo);return()=>cancelAnimationFrame(v)},[Ne,ve,Jt,mr]),jt(()=>{if(!e||!mr||ct.paused||ct.preferences.prefetch===!1||ve!=="ready"||!Sn[Ne]||Ne>=$e)return;let v=!1,D=Z.current,H=Ne+1,W=setTimeout(async()=>{if(!(re.current>0))try{let ie=await P.current?.getPage(H);if(!ie||v)return;let te=await ie.getTextContent();if(v||D!==Z.current)return;Ha(H,Bs(te.items,H,ie.getViewport({scale:1}).width))}catch{}},850);return()=>{v=!0,clearTimeout(W)}},[e,Ne,$e,ve,mr,ct.paused,ct.preferences.prefetch,Sn]),_.current=!!s,de.current=At,_e.current=_t,Ve.current=Rt,Ue.current=Yt,nt.current=qe,f.current=$e,Re&&(se.current=Re);function an(v){let D=J.current.get(v);return D||se.current}function Dn(v){return Pi(an(v),nt.current?"page":de.current,_e.current,Ve.current,Ue.current)}function ko(v){return Dn(v).pageScale}function Ua(v){let D=$.current.get(v);return D||(D={page:null,token:0,wantRender:!1,rendered:!1,rendering:!1,renderTask:null,textLayer:null,textContent:null,grouped:null,lastRenderScale:null,lastRasterScale:0,textLayerReady:!1},$.current.set(v,D)),D}function _o(v,D){Wr(H=>{if(D)return H[v]?H:{...H,[v]:!0};if(!H[v])return H;let W={...H};return delete W[v],W})}function Wa(v,D,H){if(!(D>0)||!(H>0))return!1;let W=J.current.get(v);return W&&Math.abs(W.width-D)<.05&&Math.abs(W.height-H)<.05?!1:(!Be.current&&!R.current?.paged&&(Be.current={anchor:So(),revision:Ee.current}),J.current.set(v,{width:D,height:H}),ke(ie=>({...ie,[v]:{width:D,height:H}})),Fn(),!0)}function Zo(){if(R.current?.paged)return;let v=M.current;if(!v)return;let D=v.querySelector(".dshr-pdf-content");D&&De.current&&(De.current.paddingTop=Number.parseFloat(getComputedStyle(D).paddingTop)||0)}function Fn(){be.current||(be.current=requestAnimationFrame(()=>{be.current=0,Zo()}))}function Gr(v){if(!Number.isFinite(v)||v===c.current||(R.current?.paged&&$.current.get(c.current)?.textLayer?.cancel(),c.current=v,gr(v),Ht.current="source",!ht.current))return;let D=R.current&&R.current.onPageChange;D&&D(v)}function zn(){if(R.current?.paged||!ht.current)return;let v=M.current;if(!v)return;let D=De.current;if(!D?.count)return;let H=v.scrollTop+Yr(v.clientHeight*.28,48,240);Gr(D.pageAt(H))}function So(){if(R.current?.paged||!M.current||!De.current?.count)return null;let v=M.current.scrollTop,D=De.current.entryAt(v+1);return{page:D.page,ratio:Yr((v-D.top)/D.height,0,1)}}function ja(v){!v||R.current?.paged||!M.current||!De.current?.count||(M.current.scrollTop=Math.max(0,De.current.top(v.page)+v.ratio*De.current.height(v.page)))}function ds(v){requestAnimationFrame(()=>{requestAnimationFrame(()=>{Pe.current||v()})})}function Tn(v){if(!_.current||oe.current.has(v))return;let D=ne.current.get(v);if(!D||(oe.current.add(v),!D.text))return;let H=R.current&&R.current.onPageText;H&&H(v,{text:D.text,segments:D.segments.map(W=>({src:W.src}))})}function Ga(){ce.current.forEach(v=>Tn(v))}function sn(v,D,H){return!Pe.current&&H===Z.current&&D===v.token&&v.wantRender}async function Yn(v){let D=P.current,H=ue.current,W=L.current.get(v);if(!D||!H||!W)return;let ie=Z.current,te=Ua(v),Ae=te.token+=1;if(te.renderTask){try{te.renderTask.cancel()}catch{}te.renderTask=null}if(te.textLayer){try{te.textLayer.cancel()}catch{}te.textLayer=null}let et=W.querySelector("canvas.dshr-pdf-canvas"),We=W.querySelector(".dshr-pdf-text-layer");if(!(!et||!We)){te.rendering=!0,te.renderFailed=!1;try{let He=te.page;if(!He){if(He=await D.getPage(v),!sn(te,Ae,ie))return;te.page=He}let ut=He.getViewport({scale:1}),wt=an(v);(Math.abs(ut.width-wt.width)>.05||Math.abs(ut.height-wt.height)>.05)&&Wa(v,ut.width,ut.height);let Ye=Dn(v),Ar=an(v),yr=()=>R.current?.paged?v===c.current:ce.current.has(v),ln=ba(Ye.pageScale,Ar),wr=!te.rendered&&he.current.get(v);wr&&(et.width=wr.bitmap.width,et.height=wr.bitmap.height,et.getContext("2d",{alpha:!1}).drawImage(wr.bitmap,0,0),te.rendered=!0,te.lastRenderScale=wr.scale,te.lastRasterScale=wr.rasterScale,W.dataset.pdfQuality=wr.rasterScale>=ln-.002?"full":"preview",m.current&&(m.current.dataset.pdfCacheHits=String((Number(m.current.dataset.pdfCacheHits)||0)+1)),_o(v,!0));let ps=te.lastRenderScale===null||Math.abs(te.lastRenderScale-Ye.pageScale)>=.002,Bn=yr()?ln:Math.min(ba(Ye.pageScale,Ar,2e6),Ye.pageScale);if(!te.rendered||ps||te.lastRasterScale<Bn-.002){let Zt=Math.min(Bn,Ye.pageScale),Ut=!te.rendered&&Zt<Bn-.002?[Zt,Bn]:[Bn];for(let Qn=0;Qn<Ut.length;Qn++){if(Qn&&(await new Promise(Cr=>setTimeout(Cr,32)),!sn(te,Ae,ie)||!yr()))return;let cn=Ut[Qn],$n=He.getViewport({scale:cn}),Xr=document.createElement("canvas");Xr.width=Math.max(1,Math.floor($n.width)),Xr.height=Math.max(1,Math.floor($n.height));try{let Cr=He.render({canvas:Xr,viewport:$n,intent:"display",background:"#ffffff"});Cr.onContinue=nr=>setTimeout(()=>{sn(te,Ae,ie)?nr():Cr.cancel()},yr()?0:16),te.renderTask=Cr;try{await Cr.promise}finally{te.renderTask===Cr&&(te.renderTask=null)}if(!sn(te,Ae,ie))return;if(m.current){let nr=Cr.isWorkerRendering?"pdfWorkerRenders":"pdfMainRenders";m.current.dataset[nr]=String((Number(m.current.dataset[nr])||0)+1),m.current.dataset.pdfRenderer=Cr.isWorkerRendering?"worker":"main"}et.width=Xr.width,et.height=Xr.height;let Ka=et.getContext("2d",{alpha:!1});if(!Ka)throw new Error("\u65E0\u6CD5\u521B\u5EFA PDF \u753B\u5E03\u4E0A\u4E0B\u6587");if(Ka.drawImage(Xr,0,0),te.lastRenderScale=Ye.pageScale,te.lastRasterScale=cn,te.rendered=!0,W.dataset.pdfQuality=cn>=ln-.002?"full":"preview",_o(v,!0),typeof createImageBitmap=="function")try{let nr=await createImageBitmap(Xr);if(!sn(te,Ae,ie)){nr.close();return}he.current.set(v,{bitmap:nr,scale:Ye.pageScale,rasterScale:cn}),m.current&&(m.current.dataset.pdfCacheBytes=String(he.current.bytes))}catch{}}finally{Xr.width=0,Xr.height=0}}}if(R.current?.paged?v!==c.current:!ce.current.has(v))return;try{let Zt=te.textContent;if(!Zt){if(Zt=await He.getTextContent(),!sn(te,Ae,ie))return;te.textContent=Zt}if(!yr())return;te.grouped||(te.grouped=Bs(Zt.items,v,ut.width),Ha(v,te.grouped));let Ut=He.getViewport({scale:Ye.pageScale}),Qn=Zt.items.length>Gs,cn=Qn?We.cloneNode(!1):We;cn.replaceChildren();let $n=new H.TextLayer({textContentSource:Gf(Zt),container:cn,viewport:Ut});te.textLayer=$n;try{await $n.render()}finally{te.textLayer===$n&&(te.textLayer=null)}if(!sn(te,Ae,ie)||!yr())return;if(Qn){let nr=document.createDocumentFragment();for(;cn.firstChild;)nr.append(cn.firstChild);We.style.cssText=cn.style.cssText,We.replaceChildren(nr)}te.textLayerReady=!0;let Xr=$n.textDivs||[],Cr=new Map,Ka=0;Zt.items.forEach((nr,fs)=>{typeof nr.str=="string"&&Cr.set(fs,Xr[Ka++])});for(let nr of te.grouped.segments)for(let fs of nr.itemIndices||[]){let ta=Cr.get(fs);if(!ta)continue;let Ya=new Set((ta.dataset.pdfSegments||"").split("|").filter(Boolean));Ya.add(nr.id),ta.dataset.pdfSegments=[...Ya].join("|"),ta.dataset.pdfSegment=[...Ya][0],Ft.current&&er.current?.page===v&&Ya.has(er.current.id)&&(ta.dataset.pdfLinked="true")}Yo()}catch(Zt){Xd(Zt)||console.warn("[dsh-reader] PDF \u6587\u672C\u5C42\u6E32\u67D3\u5931\u8D25",Zt)}if(!sn(te,Ae,ie))return;ce.current.has(v)&&Tn(v)}catch(He){Xd(He)||(te.renderFailed=!0,console.warn(`[dsh-reader] \u7B2C ${v} \u9875\u6E32\u67D3\u5931\u8D25`,He))}finally{te.rendering=!1}}}function qa(){if(!Pe.current)for(;re.current<Uf&&x.current.length>0;){x.current.sort((Ae,et)=>Math.abs(Ae.pageNumber-c.current)-Math.abs(et.pageNumber-c.current));let v=x.current[0],D=$.current.get(c.current);if(v.pageNumber!==c.current&&(!D?.rendered||D.rendering))break;let H=x.current.shift();le.current.delete(H.pageNumber);let W=$.current.get(H.pageNumber);if(!W||!W.wantRender||W.rendering||!L.current.has(H.pageNumber))continue;re.current+=1;let ie=Z.current,te=W.token+1;Yn(H.pageNumber).catch(()=>{}).finally(()=>{if(ie===Z.current){if(re.current=Math.max(0,re.current-1),W.wantRender&&L.current.has(H.pageNumber)){let Ae=Dn(H.pageNumber),We=(R.current?.paged?H.pageNumber===c.current:ce.current.has(H.pageNumber))&&W.rendered&&!W.renderFailed&&W.lastRasterScale<ba(Ae.pageScale,an(H.pageNumber))-.002;(W.token!==te||We||W.rendered&&Math.abs((W.lastRenderScale||0)-Ae.pageScale)>.002)&&Zn(H.pageNumber,{front:!0})}qa()}})}}function Zn(v,{front:D=!1}={}){if(!L.current.has(v))return;let H=Ua(v);if(H.wantRender=!0,D&&v===c.current&&!H.rendered)for(let[ie,te]of $.current)ie!==v&&te.renderTask&&!ce.current.has(ie)&&(te.token++,te.renderTask.cancel());if(H.rendering)return;if(le.current.has(v)){D&&x.current.sort((ie,te)=>(te.pageNumber===v)-(ie.pageNumber===v));return}if(H.rendered&&H.lastRenderScale!==null){let ie=Dn(v);if((H.textLayerReady||(R.current?.paged?v!==c.current:!ce.current.has(v)))&&Math.abs(H.lastRenderScale-ie.pageScale)<.002&&H.lastRasterScale>=(v===c.current?ba(ie.pageScale,an(v)):Math.min(ba(ie.pageScale,an(v),2e6),ie.pageScale))-.002)return}le.current.add(v);let W={pageNumber:v};D?x.current.unshift(W):x.current.push(W),qa()}function Xa(v){let D=$.current.get(v);if(!D)return;if(D.wantRender=!1,D.token+=1,D.renderTask){try{D.renderTask.cancel()}catch{}D.renderTask=null}if(D.textLayer){try{D.textLayer.cancel()}catch{}D.textLayer=null}let H=L.current.get(v);if(H){let W=H.querySelector("canvas.dshr-pdf-canvas");W&&(W.width=0,W.height=0);let ie=H.querySelector(".dshr-pdf-text-layer");ie&&ie.replaceChildren()}if(D.page){try{D.page.cleanup()}catch{}D.page=null}D.textContent=null,D.grouped=null,ne.current.delete(v),D.lastRenderScale=null,D.lastRasterScale=0,D.textLayerReady=!1,D.rendered&&(D.rendered=!1,_o(v,!1)),x.current.length>0&&(x.current=x.current.filter(W=>W.pageNumber!==v)),le.current.delete(v),$.current.delete(v)}function Qo(){for(let[v,D]of $.current){if(!D.rendered||!D.wantRender||D.rendering)continue;let H=Dn(v);(!D.textLayerReady||D.lastRenderScale===null||Math.abs(D.lastRenderScale-H.pageScale)>.002)&&Zn(v)}}function Jo(v=Wf){ge.current&&clearTimeout(ge.current),ge.current=setTimeout(()=>{ge.current=0,Qo()},v)}function En(v){Ee.current++,Be.current=null,v=Yr(Math.round(Number(v)||1),1,f.current||1);let D=M.current;if(R.current?.paged){Gr(v);return}if(!D||!De.current?.count){Gr(v);return}let H=De.current.top(v)-10;typeof D.scrollTo=="function"?D.scrollTo({top:Math.max(0,H),behavior:"auto"}):D.scrollTop=Math.max(0,H),Gr(v)}function ea(v){let D=M.current;D&&D.scrollBy({top:v*D.clientHeight*.92,behavior:"auto"})}function N(v){!v||R.current?.paged||(Be.current={anchor:v,revision:Ee.current})}function z(v){let D=So(),H=de.current==="fit"?ko(c.current):_e.current,W=Yr(H*v,Ws,js);nt.current=!1,de.current="custom",_e.current=W,wo(Ur==="page"||Ur==="custom-page"?"custom-page":"custom-width"),nn(W),N(D)}function Q(){let v=So(),D=!nt.current;nt.current=D,de.current="fit",wo(D?"page":"width"),N(v),Fn()}jt(()=>{let v=M.current;if(!v||ve!=="ready")return;let D=H=>{let W=H.detail<0?-1:1,ie=Yr(c.current+W,1,f.current);ie!==c.current&&En(ie)};return v.addEventListener("dshr-pdf-page-turn",D),()=>v.removeEventListener("dshr-pdf-page-turn",D)},[ve,$e,Ne]);function Le(v,D){let H=ne.current.get(v);if(!H||!H.text)return;let W=H.text,ie=D.replace(/\s+/g," ").trim(),te=ie?W.indexOf(ie):-1,Ae=jf,et=0;if(te>=0){let ut=Math.max(80,Math.floor((Ae-Math.min(ie.length,Ae-160))/2));et=Math.max(0,te-ut)}let We=Math.min(W.length,et+Ae);return We-et<Ae&&(et=Math.max(0,We-Ae)),W.slice(et,We).trim()||void 0}function pe(){if(ot.current="",!at.current)return;at.current=!1;let v=R.current&&R.current.onSelection;v&&v(null)}function mt(){let v=globalThis.getSelection?globalThis.getSelection():null;if(!v||v.isCollapsed||v.rangeCount===0){pe();return}let H=m.current;if(!H)return;let W=v.getRangeAt(0);if(!H.querySelector(".dshr-pdf-content")?.contains(W.commonAncestorContainer)){pe();return}let ie=v.toString().replace(/\s+/g," ").trim();if(!ie){pe();return}let te=Kd(W.startContainer)||Kd(W.endContainer)||c.current,Ae=qf(v);if(!Ae)return;let et=[te,ie,Math.round(Ae.left),Math.round(Ae.top),Math.round(Ae.width),Math.round(Ae.height)].join("|");if(et===ot.current)return;ot.current=et;let We={text:ie,page:te,rect:Ae},He=L.current.get(te);if(He){let Ye=ha(W,He);Ye.length>0&&(We.pageRects=Ye);let Ar=He.querySelector(".dshr-pdf-text-layer");if(We.evidenceAnchor=Hd(W,Ar,He,te),We.evidenceAnchor){let yr=P.current;!B.current&&yr?.getPageLabels&&(B.current=yr.getPageLabels().catch(()=>null)),We.printLabelRequest=B.current?.then(Ut=>Ut?.[te-1]||"");let ln=Ut=>(Ut.nodeType===1?Ut:Ut.parentElement)?.closest("[data-pdf-segments]")?.dataset.pdfSegments.split("|")||[],wr=ln(W.endContainer),ps=ln(W.startContainer),Bn=Ut=>String(Ut??"").replace(/\s+/gu,""),Zt=Er.current?.[te]?.find(Ut=>Ut.status==="done"&&Ut.zh?.trim()&&!Ut.sourceNeedsReview&&ps.includes(Ut.id)&&wr.includes(Ut.id)&&Bn(Ut.src).includes(Bn(ie)));Zt&&(We.paragraphTranslation={scope:"paragraph",text:Zt.zh,source:Zt.src})}}let ut=Le(te,ie);ut&&(We.context=ut),at.current=!0;let wt=R.current&&R.current.onSelection;wt&&wt(We)}let yt=jd((v,D)=>{D?F.current.set(v,D):F.current.delete(v)},[]),bt=jd((v,D)=>{if(D){L.current.set(v,D);for(let W of G.current)W.observe(D);let H=$.current.get(v);H&&(H.rendered=!1,H.textLayerReady=!1,H.lastRenderScale=null,_o(v,!1))}else{let H=L.current.get(v);if(H)for(let W of G.current)W.unobserve(H);ce.current.delete(v),Xa(v),L.current.delete(v)}},[]);function Tt(v){let D=v.target;if(D&&typeof D.closest=="function"&&D.closest('button, a, input, textarea, select, [role="button"]'))return;let H=m.current;H&&typeof H.focus=="function"&&H.focus({preventScroll:!0})}function qr(v){if(v.defaultPrevented||v.altKey||R.current?.paged)return;let D=v.target;if(D?.closest?.(".dshr-pdf-translation-panel, .dshr-topbar--pdf, .dshr-immersive-controls, .dshr-ai, .dshr-anno-panel"))return;let H=D&&D.tagName?D.tagName.toLowerCase():"";if(H==="input"||H==="textarea"||H==="select"||D&&D.isContentEditable)return;let W=M.current;if(!(!W||ve!=="ready"))switch(v.key){case"PageDown":v.preventDefault(),ea(1);break;case"PageUp":v.preventDefault(),ea(-1);break;case"Home":v.preventDefault(),W.scrollTo({top:0,behavior:"auto"}),Gr(1);break;case"End":v.preventDefault(),W.scrollTo({top:W.scrollHeight,behavior:"auto"}),Gr(f.current||1);break;default:break}}function To(){for(let v of $.current.values()){if(v.token+=1,v.renderTask)try{v.renderTask.cancel()}catch{}if(v.textLayer)try{v.textLayer.cancel()}catch{}if(v.page)try{v.page.cleanup()}catch{}}$.current.clear()}jt(()=>{let v=!1,D=new AbortController,H;if(Z.current+=1,Pe.current=!1,V.current?.close(),V.current=null,P.current=null,he.current.clear(),m.current){for(let ie of["pdfReadBytes","pdfSourceBytes","pdfRangeReads","pdfCacheHits","pdfCacheBytes","pdfWorkerRenders","pdfMainRenders"])m.current.dataset[ie]="0";delete m.current.dataset.pdfRenderer}To(),F.current.clear(),L.current.clear(),J.current.clear(),ne.current.clear(),ce.current.clear(),oe.current.clear(),x.current=[],le.current.clear(),re.current=0,Be.current=null,Ee.current++,Ge.current=!1,B.current=null,lt("loading"),fr(null),Dt(null),$t(0),ke({}),Qe(null),Wr({}),Ln(""),on(!1),gr(1),vr({}),Mt(null),me([]),c.current=0,ht.current=!1;let W=typeof Blob<"u"&&t instanceof Blob;if(!W&&!(t instanceof ArrayBuffer)&&!ArrayBuffer.isView(t)||(W?t.size===0:t.byteLength===0)){lt("error"),fr("\u6CA1\u6709\u53EF\u663E\u793A\u7684 PDF \u6570\u636E\u3002");return}return(async()=>{try{if(H=await Ei(t,{signal:D.signal,onRead:Ye=>{!v&&m.current&&(m.current.dataset.pdfReadBytes=String(Ye.bytes),m.current.dataset.pdfSourceBytes=String(Ye.total),m.current.dataset.pdfRangeReads=String(Ye.reads))},onProgress:Ye=>{!v&&Ye?.total>0&&Dt(Math.max(1,Math.min(100,Math.round(Ye.loaded/Ye.total*100))))},onError:Ye=>{v||(lt("error"),fr(Vd(Ye)))}}),v){H.close();return}V.current=H;let{engine:ie,pdf:te}=H;ue.current=ie,P.current=te;let Ae=await te.getPage(1);if(v)return;let et=Ae.getViewport({scale:1}),We={width:et.width,height:et.height};se.current=We;try{Ae.cleanup()}catch{}let He=Yr(Number.parseInt(i,10)||1,1,te.numPages),ut=null;if(He!==1)try{let Ye=await te.getPage(He),Ar=Ye.getViewport({scale:1});ut={width:Ar.width,height:Ar.height},J.current.set(He,ut),Ye.cleanup()}catch{}if(v)return;Qe(We),ke(ut?{[He]:ut}:{}),$t(te.numPages),f.current=te.numPages,Dt(null),lt("ready"),gr(He),c.current=He;let wt=R.current&&R.current.onReady;wt&&wt({pageCount:te.numPages})}catch(ie){if(v)return;H?.close(),V.current=null,P.current=null,Dt(null),lt("error"),fr(Vd(ie))}})(),()=>{if(v=!0,D.abort(),Pe.current=!0,Z.current+=1,To(),H?.close(),V.current=null,P.current=null,he.current.clear(),x.current=[],le.current.clear(),ge.current&&(clearTimeout(ge.current),ge.current=0),be.current&&(cancelAnimationFrame(be.current),be.current=0),ye.current&&(cancelAnimationFrame(ye.current),ye.current=0),at.current){at.current=!1;let ie=R.current&&R.current.onSelection;ie&&ie(null)}}},[t,Ct]),jt(()=>{let v=()=>mt(),D=()=>mt(),H=()=>{Oe.current||(Oe.current=requestAnimationFrame(()=>{Oe.current=0;let W=globalThis.getSelection?globalThis.getSelection():null;(!W||W.isCollapsed||W.rangeCount===0)&&pe()}))};return document.addEventListener("mouseup",v,!0),document.addEventListener("keyup",D,!0),document.addEventListener("selectionchange",H),()=>{document.removeEventListener("mouseup",v,!0),document.removeEventListener("keyup",D,!0),document.removeEventListener("selectionchange",H),Oe.current&&(cancelAnimationFrame(Oe.current),Oe.current=0)}},[]),Hs(()=>{if(ve!=="ready")return;let v=M.current;if(!v)return;let D=Yd(v);D>0&&(Ve.current=D,qt(D)),v.clientHeight>0&&(Ue.current=v.clientHeight,_n(v.clientHeight))},[ve,$e,A]),jt(()=>{A&&T===void 0&&Hr("page")},[A,T]),jt(()=>{if(!A)return;let v=M.current;v&&(v.scrollTop=0)},[A]),jt(()=>{if(!A||ve!=="ready"||$e<=0)return;ce.current=new Set([Ne]),Tn(Ne);let v=[Ne];for(let W=1;W<=2;W+=1)v.push(Ne+W,Ne-W);let H=v.filter((W,ie,te)=>W>=1&&W<=$e&&te.indexOf(W)===ie).map((W,ie)=>window.setTimeout(()=>Zn(W,{front:ie===0}),ie===0?0:ie===1?30:1e3+(ie-2)*120));return()=>{for(let W of H)window.clearTimeout(W)}},[A,ve,Ne,$e,qe,At,_t,Rt,Yt]),jt(()=>{if(!A||ve!=="ready")return;let v=M.current;v&&v.dispatchEvent(new CustomEvent("dshr-pdf-page-state",{detail:{page:Ne,pages:$e}}))},[A,ve,Ne,$e]),jt(()=>{ve==="ready"&&(Fn(),Jo())},[qe,Yt,ve]),jt(()=>{if(ve!=="ready")return;let v=M.current;if(!v)return;let D=!1,H=null,W=null,ie=()=>{let We=Yd(v),He=v.clientHeight,ut=We>0&&Math.abs(We-Ve.current)>=.5,wt=He>0&&Math.abs(He-Ue.current)>=.5;if(!ut&&!wt)return;let Ye=ut||wt&&nt.current?So():null;ut&&(Ve.current=We,qt(We)),wt&&(Ue.current=He,_n(He)),Ye&&!R.current?.paged&&N(Ye)},te=()=>{ye.current||(Ee.current++,Be.current=null,ye.current=requestAnimationFrame(()=>{ye.current=0,zn(),Yo()}))},Ae=null;typeof ResizeObserver=="function"&&(Ae=new ResizeObserver(()=>{D||ie()}),Ae.observe(v)),v.addEventListener("scroll",te,{passive:!0}),!A&&typeof IntersectionObserver=="function"&&(H=new IntersectionObserver(He=>{for(let ut of He){let wt=Number(ut.target.getAttribute("data-page"));Number.isFinite(wt)&&(ut.isIntersecting?(ce.current.add(wt),Zn(wt,{front:!0}),Tn(wt)):ce.current.delete(wt))}},{root:v,rootMargin:"0px",threshold:0}),W=new IntersectionObserver(He=>{for(let ut of He){let wt=Number(ut.target.getAttribute("data-page"));Number.isFinite(wt)&&(ut.isIntersecting?Zn(wt):R.current?.paged||Xa(wt))}},{root:v,rootMargin:$f,threshold:0}),G.current=[H,W],ds(()=>{if(!D)for(let He of L.current.values())H.observe(He),W.observe(He)}));let et=requestAnimationFrame(()=>{D||(Zo(),zn())});return()=>{D=!0,cancelAnimationFrame(et),Ae&&Ae.disconnect(),H&&H.disconnect(),W&&W.disconnect(),G.current=[],v.removeEventListener("scroll",te)}},[ve,$e,A]),jt(()=>{if(ve!=="ready"||$e<=0||Ge.current)return;Ge.current=!0;let v=Yr(Number.parseInt(i,10)||1,1,$e),D=setTimeout(()=>{if(ht.current=!0,!M.current)return;Zo();let W=R.current.focusEvidence?.anchor?.page,ie=Number.isInteger(W)&&W>=1&&W<=$e;En(ie?W:v)},0);return()=>clearTimeout(D)},[ve,$e]);let Eo=Ie(A);Hs(()=>{Eo.current!==A&&(Eo.current=A,ve==="ready"&&(A?M.current.scrollTop=0:En(c.current,"auto")))},[A,ve]),jt(()=>{ve==="ready"&&(Fn(),Jo())},[ve,At,_t,Rt,ae]),jt(()=>{ve==="ready"&&Fn()},[ve,E]),jt(()=>{_.current=!!s,s&&ve==="ready"&&Ga()},[s,ve]);let Nn=Us(()=>{if($e<=0)return[];let v=A?2:Math.min(16,Math.max(3,Math.ceil(Yt/Math.max(1,Math.min(jr.defaultHeight,...jr.heights.values())))+1)),D=Math.max(1,Ne-v),H=Math.min($e,Ne+v);return Array.from({length:H-D+1},(W,ie)=>D+ie)},[A,Ne,$e,jr,Yt]),Va=Nn[0]||1,nc=Nn.at(-1)||0,xp=Us(()=>{let v=new Map;for(let D of w||[]){if(!D||D.kind!=="pdf"||!Number.isFinite(D.page))continue;let H=v.get(D.page)||[];H.push(D),v.set(D.page,H)}return v},[w]);jt(()=>{if(!S?.page||ve!=="ready")return;let v=setTimeout(()=>{En(Yr(Number(S.page)||1,1,f.current||1),"smooth")},80);return()=>clearTimeout(v)},[S,ve]),jt(()=>{if(!y)return;let{anchor:v,quote:D,token:H}=y,W=We=>k?.(H,We);if(ve==="error"){W("unavailable");return}if(ve!=="ready")return;let ie=v?.page;if(!Number.isInteger(ie)||ie<1||ie>f.current){W("unavailable");return}En(ie);let te=performance.now()+6e3,Ae,et=()=>{if(c.current!==ie){W("cancelled");return}let We=$.current.get(ie),He=L.current.get(ie);if(We?.textLayerReady&&!We.textLayer&&He?.isConnected){let ut=Wd(v,D,He);if(!ut){W("page");return}let wt=M.current,Ye=wt.getBoundingClientRect(),Ar=He.getBoundingClientRect(),yr=ut[0],ln=Ar.left+(yr.x+yr.w/2)*Ar.width,wr=Ar.top+(yr.y+yr.h/2)*Ar.height;wt.scrollBy({left:ln<Ye.left||ln>Ye.right?ln-(Ye.left+Ye.width/2):0,top:wr<Ye.top||wr>Ye.bottom?wr-(Ye.top+Ye.height/2):0,behavior:"auto"}),I({token:H,page:ie,rects:ut}),W("exact");return}if(performance.now()>=te){W("page");return}Ae=requestAnimationFrame(et)};return Ae=requestAnimationFrame(et),()=>cancelAnimationFrame(Ae)},[y,ve]);let vp=(At==="fit"?ko(Ne):_t)<js-.001,yp=(At==="fit"?ko(Ne):_t)>Ws+.001;function wp(v){let D=v.currentTarget;Ln(String(Ne)),on(!0),requestAnimationFrame(()=>{D&&typeof D.select=="function"&&D.select()})}function kp(v){let D=v.target.value.replace(/[^\d]/g,"").slice(0,6);Ln(D)}function _p(){if(Ke.current){Ke.current=!1,on(!1);return}let v=Number.parseInt(rr,10);Number.isFinite(v)&&f.current>0&&En(Yr(v,1,f.current),"auto"),on(!1)}function Sp(){Qt&&_p()}function Tp(v){v.key==="Enter"?(v.preventDefault(),v.currentTarget.blur()):v.key==="Escape"&&(v.preventDefault(),Ke.current=!0,on(!1),v.currentTarget.blur())}let Ep=Qt?rr:String(Ne),us=n?"dshr-immersive-btn":"dshr-pdf-tbtn",oc=n||o,ac=`${Math.round((oc?ko(Ne):_t)*100)}%`,ic=(0,Se.jsx)("button",{type:"button",className:us,title:"\u7F29\u5C0F","aria-label":"\u7F29\u5C0F",disabled:!yp,onClick:()=>z(1/Gd),children:"\u2212"}),sc=(0,Se.jsx)("span",{className:"dshr-pdf-zoom-percent","data-scale":qe?"page":At==="fit"?"fit":_t,title:qe?"\u5F53\u524D\u4E3A\u6574\u9875\u663E\u793A":At==="fit"?"\u5F53\u524D\u4E3A\u9002\u5408\u5BBD\u5EA6":"\u5F53\u524D\u7F29\u653E\u6BD4\u4F8B",children:oc?ac:qe?"\u6574\u9875":At==="fit"?"\u9002\u5BBD":ac}),lc=(0,Se.jsx)("button",{type:"button",className:us,title:"\u653E\u5927","aria-label":"\u653E\u5927",disabled:!vp,onClick:()=>z(Gd),children:"\uFF0B"}),cc=(0,Se.jsx)("button",{type:"button",className:`${us} dshr-pdf-tbtn-wide`,"data-active":qe?"true":"false","aria-pressed":qe,title:qe?"\u5F53\u524D\u6574\u9875\u663E\u793A\uFF1B\u70B9\u51FB\u5207\u6362\u4E3A\u9002\u5408\u5BBD\u5EA6":Ur==="width"?"\u5F53\u524D\u4E3A\u9002\u5408\u5BBD\u5EA6\uFF1B\u70B9\u51FB\u5207\u6362\u4E3A\u6574\u9875\u663E\u793A":"\u5F53\u524D\u4E3A\u81EA\u5B9A\u4E49\u7F29\u653E\uFF1B\u70B9\u51FB\u5207\u6362\u4E3A\u6574\u9875\u663E\u793A\uFF0C\u518D\u70B9\u51FB\u5207\u56DE\u9002\u5408\u5BBD\u5EA6",onClick:Q,children:qe?"\u6574\u9875":Ur==="width"?"\u9002\u5BBD":"\u81EA\u5B9A\u4E49"}),dc=(0,Se.jsxs)("div",{className:"dshr-pdf-pager",children:[(0,Se.jsx)("input",{className:"dshr-pdf-page-input",inputMode:"numeric","aria-label":"\u9875\u7801",value:Ep,onChange:kp,onFocus:wp,onBlur:Sp,onKeyDown:Tp}),(0,Se.jsxs)("span",{"aria-hidden":"true",children:["/ ",$e]})]}),hs=ve==="ready"?(0,Se.jsxs)(Se.Fragment,{children:[(0,Se.jsxs)("div",{className:"dshr-pdf-tool-group",role:"group","aria-label":"PDF \u7F29\u653E",children:[ic,sc,lc,cc]}),n?null:(0,Se.jsx)("span",{className:"dshr-pdf-toolbar-sep","aria-hidden":"true"}),dc]}):null,Np=o&&ve==="ready"?{iconTools:(0,Se.jsxs)("div",{className:"dshr-pdf-tool-group",role:"group","aria-label":"PDF \u7F29\u653E",children:[ic,sc,lc]}),textTools:(0,Se.jsxs)("div",{className:"dshr-pdf-tool-group",role:"group","aria-label":"PDF \u9875\u7801\u4E0E\u89C6\u56FE",children:[dc,cc]})}:void 0;return(0,Se.jsxs)("div",{className:"dshr-pdf-root",ref:m,tabIndex:0,"data-dshr-pdf":"",role:"region","aria-label":r?`PDF \u9605\u8BFB\u5668\uFF1A${r}`:"PDF \u9605\u8BFB\u5668",onKeyDown:qr,children:[o?o(Np):n?n(hs):hs&&(0,Se.jsxs)("div",{className:"dshr-pdf-toolbar",role:"toolbar","aria-label":"PDF \u9605\u8BFB\u5DE5\u5177\u680F",children:[(0,Se.jsx)("span",{className:"dshr-pdf-title",title:r||void 0,children:r}),(0,Se.jsx)("span",{className:"dshr-pdf-toolbar-spacer"}),hs]}),(0,Se.jsxs)("div",{className:"dshr-pdf-body",children:[(0,Se.jsx)("div",{className:"dshr-pdf-area",children:(0,Se.jsxs)("div",{className:"dshr-pdf-workspace",children:[(0,Se.jsx)("div",{className:"dshr-pdf-scroll",ref:M,"data-pdf-page":A?Ne:void 0,"data-pdf-pages":A?$e:void 0,onMouseDown:Tt,onPointerOver:v=>{if(!Ft.current||v.buttons)return;let D=v.target.closest?.("[data-pdf-segment]"),H=Number(D?.closest(".dshr-pdf-frame")?.dataset.page);D&&H&&Ko(D.dataset.pdfSegment,{origin:"source"},H)},children:ve==="ready"?(0,Se.jsxs)("div",{className:"dshr-pdf-content",children:[!A&&Va>1?(0,Se.jsx)("div",{className:"dshr-pdf-spacer","aria-hidden":"true",style:{height:jr.top(Va)-jr.paddingTop}}):null,Nn.map(v=>(0,Se.jsx)(Xf,{pageNumber:v,dim:an(v),mode:qe?"page":At,scale:_t,viewportWidth:Rt,viewportHeight:Yt,active:!A||v===Ne,rendered:!!Sn[v],registerPageElement:yt,registerFrameElement:bt,annotations:xp.get(v),onOpenAnnotation:b,evidenceRects:xe?.token===y?.token&&xe?.page===v?xe.rects:void 0},v)),!A&&nc<$e?(0,Se.jsx)("div",{className:"dshr-pdf-spacer","aria-hidden":"true",style:{height:jr.top($e+1)-jr.top(nc+1)}}):null]}):(0,Se.jsx)("div",{className:"dshr-pdf-status",role:ve==="error"?"alert":"status",children:ve==="error"?(0,Se.jsxs)(Se.Fragment,{children:[(0,Se.jsx)("p",{className:"dshr-pdf-status-title dshr-pdf-status-error",children:"PDF \u52A0\u8F7D\u5931\u8D25"}),(0,Se.jsx)("p",{className:"dshr-pdf-status-detail",children:Et}),(0,Se.jsx)("button",{type:"button",className:"dshr-pdf-status-retry",onClick:()=>Kn(v=>v+1),children:"\u91CD\u65B0\u52A0\u8F7D"})]}):(0,Se.jsxs)(Se.Fragment,{children:[(0,Se.jsx)("span",{className:"dshr-pdf-status-spinner","aria-hidden":"true"}),(0,Se.jsx)("p",{className:"dshr-pdf-status-title",children:"\u6B63\u5728\u52A0\u8F7D PDF\u2026"}),Kt!==null?(0,Se.jsxs)("p",{className:"dshr-pdf-status-progress",children:[Kt,"%"]}):null]})})}),mr?(0,Se.jsx)(Dd,{page:Ne,source:Jt[Ne],rows:e?ct.pages[Ne]||[]:(Jt[Ne]?.segments||[]).map((v,D)=>({...v,...l?.[Ne]?.segments?.[D]||{},status:l?.[Ne]?.status||"queued",error:l?.[Ne]?.error})),activeId:tt?.page===Ne?tt.id:null,originRef:Ht,translation:e?ct:{...ct,retry:v=>{oe.current.delete(v),g?.(v),Tn(v)}},onActivate:(v,D)=>Ko(v,D,Ne),onClose:()=>{Pt(!0),O?.()}}):null]})}),a]})]})}Qd.displayName="PdfViewer";var Jd=Qd;var Zr=It(require("react"),1);var Mx=require("react"),Vt=require("react/jsx-runtime");function Oi(t,e="i"){let r=[],n=String(t??""),o=/(\*\*[^*]+\*\*|__[^_]+__|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/gu,a=0,i=0;for(let s of n.matchAll(o)){s.index>a&&r.push(n.slice(a,s.index));let l=s[0],d=`${e}-${i++}`;if(l.startsWith("**")||l.startsWith("__"))r.push((0,Vt.jsx)("strong",{children:l.slice(2,-2)},d));else if(l.startsWith("`"))r.push((0,Vt.jsx)("code",{children:l.slice(1,-1)},d));else{let h=/^\[([^\]]+)\]\(([^)\s]+)\)$/u.exec(l);h&&/^https?:\/\//iu.test(h[2])?r.push((0,Vt.jsx)("a",{href:h[2],target:"_blank",rel:"noreferrer noopener",children:h[1]},d)):r.push(l)}a=s.index+l.length}return a<n.length&&r.push(n.slice(a)),r}function eu({text:t}){let e=String(t??"").replace(/\r\n/gu,`
`).split(`
`),r=[],n=[],o=[],a=[],i=null,s=0,l=()=>{if(n.length===0)return;let u=n.join(" ");r.push((0,Vt.jsx)("p",{children:Oi(u,`p${s}`)},`p-${s++}`)),n=[]},d=()=>{o.length!==0&&(r.push((0,Vt.jsx)("ul",{children:o.map((u,g)=>(0,Vt.jsx)("li",{children:Oi(u,`l${s}-${g}`)},`li-${s}-${g}`))},`ul-${s++}`)),o=[])},h=()=>{a.length!==0&&(r.push((0,Vt.jsx)("blockquote",{children:a.map((u,g)=>(0,Vt.jsx)("p",{children:Oi(u,`q${s}-${g}`)},`bqp-${s}-${g}`))},`bq-${s++}`)),a=[])},p=()=>{l(),d(),h()};for(let u of e){let g=u.trimEnd();if(g.trim().startsWith("```")){i===null?(p(),i=[]):(r.push((0,Vt.jsx)("pre",{children:(0,Vt.jsx)("code",{children:i.join(`
`)})},`pre-${s++}`)),i=null);continue}if(i!==null){i.push(u);continue}if(g.trim()===""){p();continue}let w=/^(#{1,4})\s+(.*)$/u.exec(g);if(w){p();let E=`h${Math.min(4,w[1].length)}`;r.push((0,Vt.jsx)(E,{children:Oi(w[2],`h${s}`)},`h-${s++}`));continue}let b=/^\s*>\s?(.*)$/u.exec(g);if(b){l(),d(),a.push(b[1]);continue}let S=/^\s*[-*+]\s+(.*)$/u.exec(g);if(S){p(),o.push(S[1]);continue}let y=/^\s*\d+[.)]\s+(.*)$/u.exec(g);if(y){p(),o.push(y[1]);continue}if(/^\s*([-*_])(?:\s*\1){2,}\s*$/u.test(g)){p(),r.push((0,Vt.jsx)("hr",{},`hr-${s++}`));continue}d(),h(),n.push(g)}return i!==null&&r.push((0,Vt.jsx)("pre",{children:(0,Vt.jsx)("code",{children:i.join(`
`)})},`pre-${s++}`)),p(),(0,Vt.jsx)(Vt.Fragment,{children:r})}var Ze=require("react/jsx-runtime"),Vf=["\u5E2E\u6211\u68B3\u7406\u8FD9\u6BB5\u8BDD\u7684\u8BBA\u8BC1\u7ED3\u6784","\u89E3\u91CA\u5176\u4E2D\u7684\u4E13\u4E1A\u672F\u8BED\u548C\u80CC\u666F","\u7FFB\u8BD1\u5E76\u6307\u51FA\u5173\u952E\u8BED\u6CD5","\u8FD9\u6BB5\u548C\u6211\u7684\u7814\u7A76\u95EE\u9898\u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F"];function tu({open:t,onClose:e,seed:r,onGoogle:n,onToast:o}){let[a,i]=Zr.default.useState([]),[s,l]=Zr.default.useState(""),[d,h]=Zr.default.useState(!1),[p,u]=Zr.default.useState(""),g=Zr.default.useRef(null),w=Zr.default.useRef(null),b=r?.id??"",S=r?.text??"",y=r?.context??"",k=Zr.default.useCallback(()=>{let C=w.current;C&&requestAnimationFrame(()=>{C.scrollTop=C.scrollHeight})},[]),E=Zr.default.useCallback(async(C,{replace:O=!1,history:R}={})=>{let m=String(C??"").trim();if(!m||d)return;g.current?.abort();let M=new AbortController;g.current=M;let F={role:"user",content:m},$=O?[F]:[...R??a,F];i([...$,{role:"assistant",content:""}]),h(!0),u(""),k();let J="";try{await Ms({messages:$.map(se=>({role:se.role,content:se.content})),selection:S,context:y,signal:M.signal},{onDelta:se=>{J+=se,i(ne=>{if(ne.length===0)return ne;let ce=[...ne],G=ce[ce.length-1];return G?.role!=="assistant"?ne:(ce[ce.length-1]={...G,content:J},ce)}),k()}}),J.trim()||(u("AI \u6CA1\u6709\u8FD4\u56DE\u5185\u5BB9\uFF0C\u8BF7\u91CD\u8BD5\u6216\u6362\u4E00\u79CD\u95EE\u6CD5\u3002"),i(se=>se.filter((ne,ce)=>!(ce===se.length-1&&ne.role==="assistant"&&!ne.content))))}catch(se){if(eo(se))return;u(se?.message||"AI \u8BF7\u6C42\u5931\u8D25\u3002"),i(ne=>{let ce=ne[ne.length-1];return ce?.role==="assistant"&&!ce.content?ne.slice(0,-1):ne})}finally{h(!1)}},[d,y,a,k,S]);if(Zr.default.useEffect(()=>{if(!t||!b)return;g.current?.abort(),i([]),u(""),l("");let C="\u8BF7\u89E3\u91CA\u8FD9\u6BB5\u5185\u5BB9\u3002";i([{role:"user",content:C},{role:"assistant",content:""}]),h(!0);let O=new AbortController;g.current=O;let R="";return Ms({messages:[{role:"user",content:C}],selection:S,context:y,signal:O.signal},{onDelta:m=>{R+=m,i(M=>{if(M.length===0)return M;let F=[...M],L=F[F.length-1];return L?.role!=="assistant"?M:(F[F.length-1]={...L,content:R},F)}),k()}}).catch(m=>{eo(m)||u(m?.message||"AI \u8BF7\u6C42\u5931\u8D25\u3002")}).finally(()=>{h(!1),R.trim()||i(m=>m.filter((M,F)=>!(F===m.length-1&&M.role==="assistant"&&!M.content)))}),()=>O.abort()},[t,b]),Zr.default.useEffect(()=>{t||g.current?.abort()},[t]),!t)return null;let A=C=>{C.preventDefault();let O=s.trim();!O||d||(l(""),E(O))},T=C=>{let O=S||a.find(R=>R.role==="user")?.content||"";if(!O.trim()){o?.("\u5148\u5728\u6B63\u6587\u91CC\u9009\u4E2D\u4E00\u6BB5\u6587\u5B57\uFF0C\u518D\u641C\u7D22\u3002");return}n?.(O,C?"scholar":"web")};return(0,Ze.jsxs)("aside",{className:"dshr-ai","aria-label":"AI \u9605\u8BFB\u52A9\u624B",children:[(0,Ze.jsxs)("div",{className:"dshr-ai__head",children:[(0,Ze.jsx)(Hn,{size:17}),(0,Ze.jsx)("strong",{children:"AI \u9605\u8BFB\u52A9\u624B"}),(0,Ze.jsx)("span",{className:"dshr-chip dshr-chip--brand",children:"DSH \u9ED8\u8BA4\u6A21\u578B"}),(0,Ze.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:e,"aria-label":"\u5173\u95ED AI \u9762\u677F",title:"\u5173\u95ED",children:(0,Ze.jsx)(Ir,{size:16})})]}),(0,Ze.jsxs)("div",{className:"dshr-ai__body",ref:w,children:[a.length===0?(0,Ze.jsxs)("div",{className:"dshr-ai__welcome",children:[(0,Ze.jsx)("strong",{children:"\u9009\u4E2D\u6B63\u6587\u4E2D\u7684\u4EFB\u610F\u53E5\u5B50"}),"\uFF0C\u6211\u4F1A\u89E3\u91CA\u542B\u4E49\u3001\u672F\u8BED\u548C\u8BED\u6CD5\uFF1B\u4E5F\u53EF\u4EE5\u76F4\u63A5\u8FFD\u95EE\uFF0C\u6216\u8DF3\u8F6C Google / Google \u5B66\u672F\u7EE7\u7EED\u67E5\u3002",(0,Ze.jsx)("div",{className:"dshr-ai__suggestions",children:Vf.map(C=>(0,Ze.jsx)("button",{type:"button",onClick:()=>{E(C)},disabled:d,children:C},C))})]}):a.map((C,O)=>(0,Ze.jsxs)("div",{className:`dshr-ai__msg${C.role==="user"?" dshr-ai__msg--user":""}`,children:[(0,Ze.jsx)("span",{className:"dshr-ai__role",children:C.role==="user"?"\u4F60":"\u9605\u8BFB\u52A9\u624B"}),C.role==="assistant"?C.content?(0,Ze.jsx)(eu,{text:C.content}):d&&O===a.length-1?(0,Ze.jsxs)("span",{className:"dshr-translation__loading",children:[(0,Ze.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u601D\u8003\u2026"]}):null:C.content]},O)),p?(0,Ze.jsxs)("div",{className:"dshr-ai__error",children:[p,(0,Ze.jsx)("div",{style:{marginTop:6},children:(0,Ze.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>{E(a.find(C=>C.role==="user")?.content||"\u8BF7\u91CD\u65B0\u89E3\u91CA\u8FD9\u6BB5\u5185\u5BB9\u3002",{replace:!0,history:[]})},children:[(0,Ze.jsx)(xc,{size:13})," \u91CD\u65B0\u56DE\u7B54"]})})]}):null]}),(0,Ze.jsx)("div",{className:"dshr-ai__foot",children:(0,Ze.jsxs)("form",{onSubmit:A,children:[(0,Ze.jsx)("textarea",{className:"dshr-ai__input",placeholder:"\u8FFD\u95EE\uFF1A\u8FD9\u6BB5\u7684\u8BBA\u8BC1\u6709\u4EC0\u4E48\u95EE\u9898\uFF1F\uFF0F\u672F\u8BED\u662F\u4EC0\u4E48\u610F\u601D\uFF1F",value:s,onChange:C=>l(C.target.value),onKeyDown:C=>{C.key==="Enter"&&!C.shiftKey&&(C.preventDefault(),E(s),l(""))},disabled:d,"aria-label":"\u5411 AI \u8FFD\u95EE"}),(0,Ze.jsxs)("div",{className:"dshr-ai__actions",children:[(0,Ze.jsx)("span",{className:"dshr-ai__hint",children:"Enter \u53D1\u9001 \xB7 Shift+Enter \u6362\u884C"}),(0,Ze.jsxs)("div",{style:{display:"flex",gap:5},children:[(0,Ze.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>T(!1),title:"\u7528 Google \u641C\u7D22\u9009\u4E2D\u7684\u6587\u5B57",children:[(0,Ze.jsx)(ni,{size:13})," Google"]}),(0,Ze.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>T(!0),title:"\u7528 Google \u5B66\u672F\u641C\u7D22\u9009\u4E2D\u7684\u6587\u5B57",children:[(0,Ze.jsx)(oi,{size:13})," \u5B66\u672F"]}),(0,Ze.jsxs)("button",{type:"submit",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:d||!s.trim(),children:[d?(0,Ze.jsx)("span",{className:"dshr-spinner"}):(0,Ze.jsx)(vc,{size:13})," \u53D1\u9001"]})]})]})]})})]})}var Bx=require("react");var rt=require("react/jsx-runtime");function ru({selection:t,translation:e,onTranslate:r,onAnnotate:n,onExplain:o,onGoogle:a,onCopy:i,onClose:s,onRetry:l,onEvidence:d,replacingEvidence:h}){if(!t?.text?.trim())return null;let p=t.rect,u=typeof window<"u"?window.innerWidth:1200,g=Math.min(d?560:476,Math.max(1,u-20)),w=g/2,b=typeof window<"u"?window.innerHeight:800,S=p?p.left+p.width/2:u/2,y=Math.max(w+10,Math.min(u-w-10,S)),k=p&&p.top>70?p.top-46:Math.min(b-190,(p?.bottom??0)+10),E=Math.min(b-180,k+42);return(0,rt.jsxs)(rt.Fragment,{children:[(0,rt.jsxs)("div",{className:"dshr-selection",style:{left:y,top:Math.max(8,k),maxWidth:g},role:"toolbar","aria-label":"\u9009\u4E2D\u6587\u5B57\u64CD\u4F5C",onMouseDown:A=>A.preventDefault(),children:[(0,rt.jsxs)("button",{type:"button",className:"dshr-selection__btn dshr-selection__btn--accent",onClick:()=>r(t),children:[(0,rt.jsx)(No,{size:14})," \u7FFB\u8BD1"]}),(0,rt.jsxs)("button",{type:"button",className:"dshr-selection__btn dshr-selection__btn--mark",onClick:()=>n(t),title:"\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u3001\u4FBF\u7B7E\u6216\u5907\u6CE8",children:[(0,rt.jsx)(ai,{size:14})," \u6807\u8BB0"]}),d?(0,rt.jsx)("button",{type:"button",className:"dshr-selection__btn dshr-selection__btn--accent",onClick:d,children:h?"\u91CD\u65B0\u5173\u8054\u6B64\u9009\u533A":"\u4FDD\u5B58\u8BC1\u636E"}):null,(0,rt.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>o(t),children:[(0,rt.jsx)(Hn,{size:14})," AI \u89E3\u91CA"]}),(0,rt.jsx)("span",{className:"dshr-selection__sep"}),(0,rt.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>a(t.text,"web"),title:"\u7528 Google \u641C\u7D22",children:[(0,rt.jsx)(ni,{size:14})," Google"]}),(0,rt.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>a(t.text,"scholar"),title:"\u7528 Google \u5B66\u672F\u641C\u7D22",children:[(0,rt.jsx)(oi,{size:14})," \u5B66\u672F"]}),(0,rt.jsx)("span",{className:"dshr-selection__sep"}),(0,rt.jsx)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>i(t.text),title:"\u590D\u5236\u9009\u4E2D\u6587\u5B57",children:(0,rt.jsx)(bc,{size:14})}),(0,rt.jsx)("button",{type:"button",className:"dshr-selection__btn",onClick:s,title:"\u5173\u95ED","aria-label":"\u5173\u95ED\u9009\u4E2D\u6587\u5B57\u5DE5\u5177\u680F",children:(0,rt.jsx)(Ir,{size:13})})]}),e?(0,rt.jsxs)("div",{className:"dshr-selection__pop",style:{left:y,top:E},onMouseDown:A=>A.preventDefault(),children:[(0,rt.jsxs)("div",{className:"dshr-selection__pop-head",children:[(0,rt.jsx)("span",{children:"\u4E2D\u6587\u8BD1\u6587"}),(0,rt.jsx)("button",{type:"button",onClick:s,"aria-label":"\u5173\u95ED\u8BD1\u6587",children:(0,rt.jsx)(Ir,{size:12})})]}),e.status==="loading"?(0,rt.jsxs)("span",{className:"dshr-translation__loading",children:[(0,rt.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u7FFB\u8BD1\u9009\u4E2D\u5185\u5BB9\u2026"]}):e.status==="error"?(0,rt.jsxs)("span",{style:{color:"var(--dshr-error)"},children:[e.error||"\u7FFB\u8BD1\u5931\u8D25\u3002"," ",(0,rt.jsx)("button",{type:"button",className:"dshr-translation__retry",onClick:l,children:"\u91CD\u8BD5"})]}):String(e.zh||"").split(/\n+/u).filter(Boolean).map((A,T)=>(0,rt.jsx)("p",{style:{margin:T===0?0:"8px 0 0"},children:A},T))]}):null]})}var va=It(require("react"),1);var fe=require("react/jsx-runtime");function nu({settings:t,onChange:e,onClose:r,onClearLibrary:n,onOpenAppearance:o}){let[a,i]=va.default.useState(!1);va.default.useEffect(()=>{let l=d=>{d.key==="Escape"&&r()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[r]);let s=l=>e({...t,...l});return(0,fe.jsx)("div",{className:"dshr-modal-mask",onMouseDown:l=>{l.target===l.currentTarget&&r()},children:(0,fe.jsxs)("div",{className:"dshr-modal",role:"dialog","aria-modal":"true","aria-label":"\u9605\u8BFB\u8BBE\u7F6E",children:[(0,fe.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:12},children:[(0,fe.jsxs)("div",{style:{flex:1},children:[(0,fe.jsx)("h3",{children:"\u9605\u8BFB\u8BBE\u7F6E"}),(0,fe.jsx)("p",{children:"\u8BBE\u7F6E\u53EA\u4FDD\u5B58\u5728\u672C\u673A\uFF0C\u4E0D\u5F71\u54CD DSH \u7684\u5176\u5B83\u63D2\u4EF6\u3002"})]}),(0,fe.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:r,"aria-label":"\u5173\u95ED\u8BBE\u7F6E",children:(0,fe.jsx)(Ir,{size:16})})]}),(0,fe.jsxs)("div",{className:"dshr-settings-row",children:[(0,fe.jsxs)("div",{children:[(0,fe.jsx)("div",{className:"dshr-settings-row__title",children:"\u5B57\u4F53\u3001\u80CC\u666F\u4E0E\u5E03\u5C40"}),(0,fe.jsx)("div",{className:"dshr-settings-row__hint",children:"\u5B57\u4F53\u3001\u5B57\u91CD\u3001\u5B57\u53F7\u3001\u884C\u8DDD\u3001\u9605\u8BFB\u5BBD\u5EA6\u3001\u76EE\u5F55\u5BBD\u5EA6\u3001\u4EAE\u5EA6\u3001\u80CC\u666F\u989C\u8272\u4E0E\u81EA\u5B9A\u4E49\u80CC\u666F\u56FE\u7247\u3002"})]}),(0,fe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:o,children:[(0,fe.jsx)(oa,{size:14})," \u6253\u5F00\u5916\u89C2\u9762\u677F"]})]}),(0,fe.jsxs)("div",{className:"dshr-settings-row",children:[(0,fe.jsxs)("div",{children:[(0,fe.jsx)("div",{className:"dshr-settings-row__title",children:"\u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1"}),(0,fe.jsx)("div",{className:"dshr-settings-row__hint",children:"\u6EDA\u52A8\u5230\u5916\u6587\u6BB5\u843D\u540E\u81EA\u52A8\u7FFB\u8BD1\u6210\u4E2D\u6587\uFF0C\u8BD1\u6587\u663E\u793A\u5728\u539F\u6587\u4E0B\u65B9\u3002"})]}),(0,fe.jsxs)("button",{type:"button",className:"dshr-switch",role:"switch","aria-checked":t.autoTranslate,onClick:()=>s({autoTranslate:!t.autoTranslate}),children:[(0,fe.jsx)("span",{className:"dshr-switch__track"}),t.autoTranslate?"\u5F00\u542F":"\u5173\u95ED"]})]}),(0,fe.jsxs)("div",{className:"dshr-settings-row",children:[(0,fe.jsxs)("div",{children:[(0,fe.jsx)("div",{className:"dshr-settings-row__title",children:"\u6B63\u6587\u5B57\u53F7"}),(0,fe.jsxs)("div",{className:"dshr-settings-row__hint",children:[t.fontSize,"px \xB7 \u9002\u5408\u957F\u7BC7\u9605\u8BFB\u7684\u5B57\u53F7"]})]}),(0,fe.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:5},children:[(0,fe.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--outline",onClick:()=>s({fontSize:Math.max(14,t.fontSize-1)}),"aria-label":"\u51CF\u5C0F\u5B57\u53F7",children:(0,fe.jsx)(ri,{size:15})}),(0,fe.jsxs)("span",{className:"dshr-chip",style:{minWidth:46,justifyContent:"center"},children:[t.fontSize,"px"]}),(0,fe.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--outline",onClick:()=>s({fontSize:Math.min(26,t.fontSize+1)}),"aria-label":"\u589E\u5927\u5B57\u53F7",children:(0,fe.jsx)(Cn,{size:15})})]})]}),(0,fe.jsxs)("div",{className:"dshr-settings-row",children:[(0,fe.jsxs)("div",{children:[(0,fe.jsx)("div",{className:"dshr-settings-row__title",children:"\u884C\u8DDD"}),(0,fe.jsxs)("div",{className:"dshr-settings-row__hint",children:["\u5F53\u524D ",t.lineHeight.toFixed(2)]})]}),(0,fe.jsx)("input",{type:"range",min:"1.45",max:"2.2",step:"0.05",value:t.lineHeight,onChange:l=>s({lineHeight:Number(l.target.value)}),"aria-label":"\u884C\u8DDD"})]}),(0,fe.jsxs)("div",{className:"dshr-settings-row",children:[(0,fe.jsxs)("div",{children:[(0,fe.jsx)("div",{className:"dshr-settings-row__title",children:"\u7FFB\u8BD1\u4E0E AI"}),(0,fe.jsx)("div",{className:"dshr-settings-row__hint",children:"\u4F7F\u7528 DSH \u5F53\u524D\u9ED8\u8BA4\u6A21\u578B\uFF1B\u7FFB\u8BD1\u53EA\u53D1\u9001\u5F53\u524D\u6BB5\u843D\u6216\u9009\u4E2D\u6587\u5B57\uFF0C\u4E0D\u53D1\u9001\u6574\u672C\u4E66\u3002"})]}),(0,fe.jsx)("span",{className:"dshr-chip dshr-chip--brand",children:"DSH \u9ED8\u8BA4\u6A21\u578B"})]}),(0,fe.jsxs)("div",{className:"dshr-settings-row dshr-settings-row--danger",children:[(0,fe.jsxs)("div",{children:[(0,fe.jsx)("div",{className:"dshr-settings-row__title",children:"\u6E05\u7A7A\u672C\u5730\u4E66\u67B6"}),(0,fe.jsx)("div",{className:"dshr-settings-row__hint",children:"\u5220\u9664\u5DF2\u5BFC\u5165\u7684\u6240\u6709\u6587\u6863\u3001\u4E66\u5355\u3001\u6279\u6CE8\u548C\u9605\u8BFB\u8FDB\u5EA6\u3002\u5DF2\u4FDD\u5B58\u7684\u8BC1\u636E\u4FDD\u7559\u5E76\u6807\u4E3A\u539F\u6587\u7F3A\u5931\u3002"})]}),a?(0,fe.jsxs)("div",{style:{display:"flex",gap:6},children:[(0,fe.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm",onClick:()=>i(!1),children:"\u53D6\u6D88"}),(0,fe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--danger",onClick:()=>{n(),i(!1)},children:[(0,fe.jsx)(An,{size:13})," \u786E\u8BA4\u6E05\u7A7A"]})]}):(0,fe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--danger",onClick:()=>i(!0),children:[(0,fe.jsx)(An,{size:13})," \u6E05\u7A7A"]})]})]})})}function ou({book:t,onCancel:e,onConfirm:r}){let[n,o]=va.default.useState(!1),a=t?.evidenceCount>0;return va.default.useEffect(()=>{let i=s=>{s.key==="Escape"&&e()};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[e]),(0,fe.jsx)("div",{className:"dshr-modal-mask",onMouseDown:i=>{i.target===i.currentTarget&&e()},children:(0,fe.jsxs)("div",{className:"dshr-modal",role:"dialog","aria-modal":"true","aria-label":"\u5220\u9664\u6587\u6863",children:[(0,fe.jsx)("h3",{children:"\u4ECE\u4E66\u67B6\u5220\u9664\uFF1F"}),(0,fe.jsxs)("p",{children:["\u300A",t?.title||"\u672A\u547D\u540D\u6587\u6863","\u300B\u53CA\u5176\u9605\u8BFB\u8FDB\u5EA6\u4F1A\u4ECE\u672C\u673A\u5220\u9664\u3002\u539F\u59CB\u6587\u4EF6\u4E0D\u53D7\u5F71\u54CD\u3002"]}),a?(0,fe.jsxs)("p",{children:["\u5173\u8054\u4E86 ",t.evidenceCount," \u6761\u8BC1\u636E\u3002\u4FDD\u7559\u540E\u53EF\u67E5\u770B\u548C\u5BFC\u51FA\uFF0C\u539F\u6587\u4F1A\u6807\u8BB0\u4E3A\u7F3A\u5931\u3002"]}):null,(0,fe.jsxs)("div",{className:"dshr-modal__actions",children:[(0,fe.jsx)("button",{type:"button",className:"dshr-btn",onClick:e,children:"\u53D6\u6D88"}),a?(0,fe.jsxs)(fe.Fragment,{children:[(0,fe.jsx)("button",{type:"button",className:"dshr-btn",onClick:()=>r(!1),children:"\u5220\u9664\u539F\u6587\u5E76\u4FDD\u7559\u8BC1\u636E"}),(0,fe.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--danger",onClick:()=>n?r(!0):o(!0),children:n?"\u786E\u8BA4\u540C\u65F6\u5220\u9664\u8BC1\u636E":"\u4E00\u5E76\u5220\u9664\u8BC1\u636E"})]}):(0,fe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--danger",onClick:()=>r(!1),children:[(0,fe.jsx)(An,{size:14})," \u5220\u9664"]})]})]})})}function au({message:t}){return t?(0,fe.jsx)("div",{className:"dshr-toast",role:"status",children:t}):null}var Po=It(require("react"),1);var pt=require("react/jsx-runtime"),Kf=[{label:"Project Gutenberg",hint:"\u4E03\u4E07\u672C\u516C\u7248\u4E66",href:"https://www.gutenberg.org/"},{label:"Standard Ebooks",hint:"\u7CBE\u6821\u516C\u7248\u4E66",href:"https://standardebooks.org/"},{label:"arXiv",hint:"\u5F00\u653E\u83B7\u53D6\u8BBA\u6587",href:"https://arxiv.org/"},{label:"Open Library",hint:"\u5F00\u653E\u56FE\u4E66\u76EE\u5F55",href:"https://openlibrary.org/"},{label:"Internet Archive",hint:"\u516C\u7248\u4E0E\u5F00\u653E\u9986\u85CF",href:"https://archive.org/"},{label:"Wikisource",hint:"\u516C\u7248\u6587\u732E",href:"https://zh.wikisource.org/"}];function iu({open:t,busy:e,onClose:r,onSubmit:n}){let[o,a]=Po.default.useState(""),[i,s]=Po.default.useState(""),l=Po.default.useRef(null);return Po.default.useEffect(()=>{t&&(s(""),window.setTimeout(()=>l.current?.focus(),30))},[t]),Po.default.useEffect(()=>{if(!t)return;let h=p=>{p.key==="Escape"&&!e&&r()};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[t,e,r]),t?(0,pt.jsx)("div",{className:"dshr-modal-mask",onMouseDown:h=>{h.target===h.currentTarget&&!e&&r()},children:(0,pt.jsxs)("div",{className:"dshr-modal dshr-online-modal",role:"dialog","aria-modal":"true","aria-label":"\u4ECE\u516C\u5F00\u6765\u6E90\u5BFC\u5165",children:[(0,pt.jsxs)("div",{className:"dshr-online-modal__head",children:[(0,pt.jsxs)("div",{children:[(0,pt.jsxs)("h3",{children:[(0,pt.jsx)(ii,{size:17})," \u4ECE\u516C\u5F00\u6765\u6E90\u5BFC\u5165"]}),(0,pt.jsx)("p",{children:"\u7C98\u8D34\u7535\u5B50\u4E66\u6587\u4EF6\u7684\u76F4\u94FE\uFF0C\u4E0B\u8F7D\u540E\u81EA\u52A8\u52A0\u5165\u4E66\u67B6\u5E76\u6253\u5F00\u3002"})]}),(0,pt.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:r,disabled:e,"aria-label":"\u5173\u95ED\u5728\u7EBF\u5BFC\u5165",children:(0,pt.jsx)(Ir,{size:16})})]}),(0,pt.jsxs)("div",{className:"dshr-online-modal__notice",children:[(0,pt.jsx)("strong",{children:"\u7248\u6743\u63D0\u793A"}),(0,pt.jsx)("span",{children:"\u4EC5\u652F\u6301\u4F60\u786E\u8BA4\u6709\u6743\u4E0B\u8F7D\u7684\u516C\u5F00\u7248\u6743 / \u5F00\u653E\u83B7\u53D6\u8D44\u6E90\u3002\u672C\u529F\u80FD\u4E0D\u5185\u7F6E Z-Library \u7B49\u7248\u6743\u4E0D\u660E\u7684\u4E66\u6E90\uFF0C\u4E5F\u4E0D\u4F1A\u6293\u53D6\u767B\u5F55\u540E\u7684\u79C1\u5BC6\u9875\u9762\u3002"})]}),(0,pt.jsxs)("form",{className:"dshr-online-modal__form",onSubmit:h=>{h.preventDefault();let p=o.trim();if(!/^https:\/\//iu.test(p)){s("\u8BF7\u8F93\u5165\u4EE5 https:// \u5F00\u5934\u7684\u7535\u5B50\u4E66\u6587\u4EF6\u76F4\u94FE\u3002");return}s(""),n(p)},children:[(0,pt.jsx)("label",{htmlFor:"dshr-online-url",children:"\u6587\u4EF6\u76F4\u94FE"}),(0,pt.jsxs)("div",{className:"dshr-online-modal__input",children:[(0,pt.jsx)(Sc,{size:15}),(0,pt.jsx)("input",{ref:l,id:"dshr-online-url",type:"url",value:o,onChange:h=>{a(h.target.value),s("")},placeholder:"https://www.gutenberg.org/ebooks/11.epub3.images",spellCheck:"false",autoComplete:"off",disabled:e})]}),i?(0,pt.jsx)("p",{className:"dshr-online-modal__error",children:i}):null,(0,pt.jsx)("p",{className:"dshr-online-modal__hint",children:"\u652F\u6301 PDF / EPUB / MOBI / AZW3 / TXT / Markdown / HTML \u76F4\u94FE\uFF1B\u5355\u4E2A\u6587\u4EF6\u6700\u5927 120 MB\u3002 \u53E4\u767B\u5821\u3001Standard Ebooks\u3001arXiv\u3001Open Library\u3001Internet Archive \u7B49\u7AD9\u70B9\u53EF\u6B63\u5E38\u4F7F\u7528\u3002"}),(0,pt.jsxs)("div",{className:"dshr-online-modal__actions",children:[(0,pt.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--ghost",onClick:r,disabled:e,children:"\u53D6\u6D88"}),(0,pt.jsx)("button",{type:"submit",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:e||o.trim()==="",children:e?"\u6B63\u5728\u4E0B\u8F7D\u2026":"\u4E0B\u8F7D\u5E76\u6253\u5F00"})]})]}),(0,pt.jsxs)("div",{className:"dshr-online-modal__sources",children:[(0,pt.jsx)("span",{children:"\u53BB\u54EA\u91CC\u627E\u4E66\uFF1F"}),(0,pt.jsx)("div",{className:"dshr-online-modal__source-list",children:Kf.map(h=>(0,pt.jsx)("a",{href:h.href,target:"_blank",rel:"noreferrer",title:h.hint,children:h.label},h.label))})]})]})}):null}var Pr=It(require("react"),1);var tr=class t{static GetDistanceBetweenTwoPoint(e,r){return e===null||r===null?1/0:Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))}static GetSegmentLength(e){return t.GetDistanceBetweenTwoPoint(e[0],e[1])}static GetAngleBetweenTwoLine(e,r){let n=e[0].y-e[1].y,o=r[0].y-r[1].y,a=e[1].x-e[0].x,i=r[1].x-r[0].x;return Math.acos((n*o+a*i)/(Math.sqrt(n*n+a*a)*Math.sqrt(o*o+i*i)))}static PointInRect(e,r){return r===null?null:r.x>=e.left&&r.x<=e.width+e.left&&r.y>=e.top&&r.y<=e.top+e.height?r:null}static GetRotatedPoint(e,r,n){return{x:e.x*Math.cos(n)+e.y*Math.sin(n)+r.x,y:e.y*Math.cos(n)-e.x*Math.sin(n)+r.y}}static LimitPointToCircle(e,r,n){if(t.GetDistanceBetweenTwoPoint(e,n)<=r)return n;let o=e.x,a=e.y,i=n.x,s=n.y,l=Math.sqrt(Math.pow(r,2)*Math.pow(o-i,2)/(Math.pow(o-i,2)+Math.pow(a-s,2)))+o;n.x<0&&(l*=-1);let d=(l-o)*(a-s)/(o-i)+a;return o-i+a===0&&(d=r),{x:l,y:d}}static GetIntersectBetweenTwoSegment(e,r,n){return t.PointInRect(e,t.GetIntersectBeetwenTwoLine(r,n))}static GetIntersectBeetwenTwoLine(e,r){let n=e[0].y-e[1].y,o=r[0].y-r[1].y,a=e[1].x-e[0].x,i=r[1].x-r[0].x,s=e[0].x*e[1].y-e[1].x*e[0].y,l=r[0].x*r[1].y-r[1].x*r[0].y,d=n*l-o*s,h=a*l-i*s,p=-((s*i-l*a)/(n*i-o*a)),u=-((n*l-o*s)/(n*i-o*a));if(isFinite(p)&&isFinite(u))return{x:p,y:u};if(Math.abs(d-h)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(e,r){let n=Math.abs(e.x-r.x),o=Math.abs(e.y-r.y),a=Math.max(n,o),i=[e];function s(l,d,h,p,u){return d>l?l+u*(h/p):d<l?l-u*(h/p):l}for(let l=1;l<=a;l+=1)i.push({x:s(e.x,r.x,n,a,l),y:s(e.y,r.y,o,a,l)});return i}};var ya=class{constructor(e,r,n,o){this.direction=e;this.corner=r;this.pageWidth=parseInt(n,10),this.pageHeight=parseInt(o,10)}direction;corner;angle;position;rect;topIntersectPoint=null;sideIntersectPoint=null;bottomIntersectPoint=null;pageWidth;pageHeight;calc(e){try{return this.position=this.calcAngleAndPosition(e),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){let e=[],r=!1;return e.push(this.rect.topLeft),e.push(this.topIntersectPoint),this.sideIntersectPoint===null?r=!0:(e.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(r=!1)),e.push(this.bottomIntersectPoint),(r||this.corner==="bottom")&&e.push(this.rect.bottomLeft),e}getBottomClipArea(){let e=[];return e.push(this.topIntersectPoint),this.corner==="top"?e.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&e.push({x:this.pageWidth,y:0}),e.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?tr.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&e.push(this.sideIntersectPoint):this.corner==="top"&&e.push({x:this.pageWidth,y:this.pageHeight}),e.push(this.bottomIntersectPoint),e.push(this.topIntersectPoint),e}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){let e=tr.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?e:Math.PI-e}calcAngleAndPosition(e){let r=e;if(this.updateAngleAndGeometry(r),this.corner==="top"?r=this.checkPositionAtCenterLine(r,{x:0,y:0},{x:0,y:this.pageHeight}):r=this.checkPositionAtCenterLine(r,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(r.x-this.pageWidth)<1&&Math.abs(r.y)<1)throw new Error("Point is too small");return r}updateAngleAndGeometry(e){this.angle=this.calculateAngle(e),this.rect=this.getPageRect(e)}calculateAngle(e){let r=this.pageWidth-e.x+1,n=this.corner==="bottom"?this.pageHeight-e.y:e.y,o=2*Math.acos(r/Math.sqrt(n*n+r*r));n<0&&(o=-o);let a=Math.PI-o;if(!isFinite(o)||a>=0&&a<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(o=-o),o}getPageRect(e){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],e):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],e)}getRectFromBasePoint(e,r){return{topLeft:this.getRotatedPoint(e[0],r),topRight:this.getRotatedPoint(e[1],r),bottomLeft:this.getRotatedPoint(e[2],r),bottomRight:this.getRotatedPoint(e[3],r)}}getRotatedPoint(e,r){return{x:e.x*Math.cos(this.angle)+e.y*Math.sin(this.angle)+r.x,y:e.y*Math.cos(this.angle)-e.x*Math.sin(this.angle)+r.y}}calculateIntersectPoint(e){let r={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=tr.GetIntersectBetweenTwoSegment(r,[e,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=tr.GetIntersectBetweenTwoSegment(r,[e,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=tr.GetIntersectBetweenTwoSegment(r,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=tr.GetIntersectBetweenTwoSegment(r,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=tr.GetIntersectBetweenTwoSegment(r,[e,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=tr.GetIntersectBetweenTwoSegment(r,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(e,r,n){let o=e,a=tr.LimitPointToCircle(r,this.pageWidth,o);o!==a&&(o=a,this.updateAngleAndGeometry(o));let i=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2)),s=this.rect.bottomRight,l=this.rect.topLeft;if(this.corner==="bottom"&&(s=this.rect.topRight,l=this.rect.bottomLeft),s.x<=0){let d=tr.LimitPointToCircle(n,i,l);d!==o&&(o=d,this.updateAngleAndGeometry(o))}return o}getSegmentToShadowLine(){let e=this.getShadowStartPoint(),r=e!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint;return[e,r]}};var Vs={slide:250,cover:300,flip:500},Zf="cubic-bezier(.25,.1,.25,1)",su=t=>`polygon(${t.filter(Boolean).map(e=>`${e.x}px ${e.y}px`).join(",")})`,Qf=0;function lu(t,e){let r=t.getBoundingClientRect(),n=e.querySelectorAll(".dshr-block,.dshr-chapter__kicker,.dshr-chapter__nav");return[...n.length?n:e.children].map(o=>{let a=o.getBoundingClientRect();return{element:o,top:a.top-r.top+t.scrollTop,bottom:a.bottom-r.top+t.scrollTop,left:a.left-r.left,width:a.width,height:a.height}})}function Li(t){let e=[t,...t.querySelectorAll("*")],r=new Map,n=`dshr-snapshot-${++Qf}-`;for(let o of e){o.id&&(r.set(o.id,n+r.size),o.id=r.get(o.id));for(let a of["data-seg-id","data-anno-block","data-anno-id","autofocus"])o.removeAttribute(a)}if(r.size)for(let o of e)for(let a of[...o.attributes]){if(a.name==="id")continue;let i=a.value.replace(/url\(\s*(['"]?)#([^\s)'";]+)\1\s*\)/g,(s,l,d)=>r.has(d)?`url(#${r.get(d)})`:s);(a.name==="href"||a.name==="xlink:href")&&r.has(i.slice(1))&&(i="#"+r.get(i.slice(1))),i!==a.value&&o.setAttribute(a.name,i)}}function cu(t,e,r,n,o,a){let i=document.createElement("div");i.className="dshr-turn-page";let s=t.getBoundingClientRect(),l=e.getBoundingClientRect(),d=e.cloneNode(!1);Li(d),Object.assign(d.style,{position:"absolute",left:`${l.left-s.left}px`,top:"0",width:`${l.width}px`,height:"100%",padding:"0",margin:"0"}),i.append(d);let h=new Map([[e,d]]),p=g=>{if(h.has(g))return h.get(g);let w=g.cloneNode(!1);return Li(w),p(g.parentElement).append(w),h.set(g,w),w};for(let g of r){if(g.bottom<=n+48||g.top>=n+t.clientHeight-o||!g.height)continue;if(g.height>t.clientHeight*8)throw new Error("Snapshot block exceeds viewport budget");let w=document.createTreeWalker(g.element,4294967295);for(let k=g.element;k;k=w.nextNode())if(a.nodes-=1,k.nodeType===3&&(a.text-=k.length),a.nodes<0||a.text<0)throw new Error("Snapshot exceeds DOM budget");let b=g.element.cloneNode(!0);Li(b),Object.assign(b.style,{position:"absolute",margin:"0",boxSizing:"border-box",left:`${g.left-(l.left-s.left)}px`,top:`${g.top-n}px`,width:`${g.width}px`,height:`${g.height}px`}),p(g.element.parentElement).append(b);let S=[g.element,...g.element.querySelectorAll("*")],y=[b,...b.querySelectorAll("*")];S.forEach((k,E)=>{k.scrollLeft&&(y[E].scrollLeft=k.scrollLeft),k.tagName==="CANVAS"&&(y[E].width=k.width,y[E].height=k.height,y[E].getContext("2d")?.drawImage(k,0,0))})}let u=t.querySelector(":scope > .dshr-anno-layer");if(u){let g=u.cloneNode(!1);Object.assign(g.style,{top:"0",height:"100%"});for(let w of u.children){let b=Number.parseFloat(w.style.top),S=Number.parseFloat(w.style.height)||24;if(b+S<=n+48||b>=n+t.clientHeight-o)continue;if(--a.nodes<0)throw new Error("Snapshot marks exceed DOM budget");let y=w.cloneNode(!0);Li(y),y.style.top=`${b-n}px`,g.append(y)}i.append(g)}for(let[g,w]of[["top",48],["bottom",o]]){let b=document.createElement("div");b.className=`dshr-turn-mask dshr-turn-mask--${g}`,b.style.height=`${w}px`,i.append(b)}return i}function Jf(t,e,r){let n=new ya(0,"bottom",String(Math.round(t)),String(Math.round(e))),o=Math.max(1e-4,Math.min(.9999,r)),a=Math.min(e*.22,t*.28)*Math.sin(Math.PI*o);if(!n.calc({x:t*(1-2*o),y:e-a-.1}))return null;let i=n.getActiveCorner(),s=n.getAngle(),l=n.getFlippingClipArea().filter(Boolean).map(d=>tr.GetRotatedPoint({x:d.x-i.x,y:d.y-i.y},{x:0,y:0},s));return{reveal:su(n.getBottomClipArea()),fold:su(l),transform:`translate3d(${i.x}px,${i.y}px,0) rotate(${s}rad)`,shadow:n.getShadowStartPoint(),shadowAngle:n.getShadowAngle()+Math.PI*1.5,strength:Math.sin(Math.PI*o)}}function Ks(t,e,r,n,o){let a={nodes:1800,text:64e3};return{page:cu(t,e,r,n,o,a),budget:a,width:t.clientWidth,height:t.clientHeight}}function du({reader:t,scroll:e,stage:r,records:n,from:o,to:a,fromBottom:i,toBottom:s,mode:l,direction:d,departing:h}){let p=Object.hasOwn(Vs,l)?l:"slide",u=e.getBoundingClientRect(),g=t.getBoundingClientRect(),w=document.createElement("div");w.className=`dshr-flow-transition is-${p}`,w.dataset.direction=String(d),w.setAttribute("aria-hidden","true"),w.inert=!0,Object.assign(w.style,{left:`${u.left-g.left}px`,top:`${u.top-g.top}px`,width:`${e.clientWidth}px`,height:`${e.clientHeight}px`});let b=window.getComputedStyle(e);for(let F of Array.from(b))F.startsWith("--dshr-")&&w.style.setProperty(F,b.getPropertyValue(F));let S=h??Ks(e,r,n,o,i),y=S.page,k=cu(e,r,n,a,s,S.budget);y.dataset.turnPage="old",k.dataset.turnPage="new",w.append(y,k);let E=[],A=0,T,C=!1,O,R=()=>{C=!0,cancelAnimationFrame(A),clearTimeout(T);for(let F of E)F.cancel();O?.(),w.remove()},m=(F,L)=>{let $=F.animate(L,{duration:Vs[p],easing:Zf,fill:"both"});return $.finished.catch(()=>{}),E.push($),$};try{if(t.append(w),p==="slide")m(y,[{transform:"translateX(0)"},{transform:`translateX(${-d*100}%)`}]),m(k,[{transform:`translateX(${d*100}%)`},{transform:"translateX(0)"}]);else if(p==="cover"){let F=d>0?k:y,L=d>0?y:k;L.dataset.turnRole="stationary",F.dataset.turnRole="moving",L.style.zIndex="0",F.style.zIndex="1",F.classList.add("has-edge-shadow"),m(F,d>0?[{transform:"translateX(100%)"},{transform:"translateX(0)"}]:[{transform:"translateX(0)"},{transform:"translateX(100%)"}])}else{let F=d>0?y:k,L=d>0?k:y;F.style.zIndex="0",L.style.zIndex="1";let $=document.createElement("div");$.className="dshr-turn-fold";let J=document.createElement("div");J.className="dshr-turn-fold-shadow",L.append(J),w.append($);let se=m(w,[{opacity:1},{opacity:1}]),ne=G=>{let oe=d>0?G:1-G;if(oe<=0){L.style.clipPath="inset(0 100% 0 0)",$.hidden=!0;return}if(oe>=1){L.style.clipPath="none",$.hidden=!0,J.hidden=!0;return}let ue=Jf(e.clientWidth,e.clientHeight,oe);ue&&($.hidden=!1,J.hidden=!1,L.style.clipPath=ue.reveal,$.style.clipPath=ue.fold,$.style.transform=ue.transform,ue.shadow&&Object.assign(J.style,{opacity:String(ue.strength*.16),transform:`translate3d(${ue.shadow.x}px,${ue.shadow.y-e.clientHeight}px,0) rotate(${ue.shadowAngle}rad)`}))};ne(0);let ce=()=>{C||(ne(se.effect.getComputedTiming().progress??0),A=requestAnimationFrame(ce))};A=requestAnimationFrame(ce)}}catch(F){throw R(),F}let M=Promise.all(E.map(F=>F.finished.catch(()=>{})));return{overlay:w,width:e.clientWidth,height:e.clientHeight,cancel:R,async play(){try{await Promise.race([M,new Promise(F=>{O=F,T=setTimeout(F,Vs[p]+300)})])}finally{R()}}}}var eg='a,button,input,select,textarea,img,video,[role="button"],[contenteditable="true"],.dshr-pdf-frame';function Ys(t){let e=window.getSelection?.();return e&&!e.isCollapsed&&(t.contains(e.anchorNode)||t.contains(e.focusNode))}function uu({scroll:t,reader:e,stage:r,hint:n,canTurn:o,turn:a}){let i=null,s="",l=()=>Ys(t),d=k=>{let{target:E,clientX:A,clientY:T}=k;if(!(E instanceof Element)||E.closest(eg)||r?.contains(E))return null;let C=t.getBoundingClientRect(),O=C.left+t.clientLeft,R=O+t.clientWidth,m=C.top+t.clientTop+12,M=t.clientHeight-24;if(T<m||T>=m+M)return null;let F=Math.max(24,Math.min(64,t.clientWidth*.06)),L=A>=O&&A<O+F?-1:A<R&&A>=R-F?1:0;if(!L||!o(L))return null;let $=r||t.querySelector('.dshr-pdf-page[data-active="true"] .dshr-pdf-frame');if(!$)return null;let J=$.getBoundingClientRect();if(J.right<=O||J.left>=R)return null;let se=Math.min(F,L<0?J.left-O:R-J.right);return se<24||(L<0?A>=O+se:A<R-se)?null:{direction:L,left:L<0?O:R-se,top:m,width:se,height:M}},h=()=>{s&&(s="",n.hidden=!0,delete t.dataset.pageGutterHover)},p=()=>{i=null,h()},u=k=>Math.hypot(k.clientX-i.x,k.clientY-i.y)>6,y={pointerdown:k=>{if(i=null,k.button!==0||!k.isPrimary||k.ctrlKey||k.metaKey||k.altKey||k.shiftKey||l())return;let E=d(k);E&&(i={id:k.pointerId,direction:E.direction,x:k.clientX,y:k.clientY,time:k.timeStamp,released:!1})},pointermove:k=>{let E=d(k);if(i&&(k.pointerId!==i.id||u(k)||E?.direction!==i.direction)&&(i=null),!E||k.buttons||k.pointerType!=="mouse"||l()){h();return}let A=e.getBoundingClientRect(),T=E.left-A.left,C=E.top-A.top,O=[T,C,E.width,E.height].join(":");O!==s&&(s=O,Object.assign(n.style,{left:T+"px",top:C+"px",width:E.width+"px",height:E.height+"px"}),n.hidden=!1,t.dataset.pageGutterHover="true")},pointerup:k=>{if(!i||k.pointerId!==i.id||u(k)||k.timeStamp-i.time>500||l()||d(k)?.direction!==i.direction){i=null;return}i.released=!0},click:k=>{let E=i;i=null,!(!E?.released||k.timeStamp-E.time>600||k.defaultPrevented||l()||d(k)?.direction!==E.direction)&&a(E.direction,k.detail>1)},selectstart:k=>{i&&k.preventDefault()},pointerleave:()=>{i?.released||(i=null),h()},pointercancel:p,contextmenu:p,scroll:h};for(let[k,E]of Object.entries(y))t.addEventListener(k,E);return{hide:h,dispose(){for(let[k,E]of Object.entries(y))t.removeEventListener(k,E);p()}}}var _r=require("react/jsx-runtime"),pu='input, textarea, select, [contenteditable="true"]',fu=".dshr-modal-mask,.dshr-modal,.dshr-appearance-panel,.dshr-anno-panel,.dshr-ai,.dshr-selection,.dshr-online-modal,.dshr-anno-composer,.dshr-pdf-translation-panel",tg=".dshr-topbar,.dshr-immersive-controls,.dshr-toc,.dshr-paged-controls,"+fu+","+pu,rg=()=>window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,hu=220,Lo=null;function gu({enabled:t,animation:e,bookMode:r=!1,bookFrame:n=!1,frameTop:o=52,frameLeft:a=0,readerKey:i,canPrevChapter:s,canNextChapter:l,chapterEntry:d,onChapterTurn:h,onChapterEntered:p}){let[u,g]=Pr.default.useState({page:1,pages:1}),[w,b]=Pr.default.useState({top:48,bottom:56}),[S,y]=Pr.default.useState(null),k=Pr.default.useRef(null),E=Pr.default.useRef(null),A=Pr.default.useRef(null),T=Pr.default.useRef(0),C=Pr.default.useRef(-1/0),O=Pr.default.useRef({});if(Pr.default.useLayoutEffect(()=>{O.current={canPrevChapter:s,canNextChapter:l,chapterEntry:d,onChapterTurn:h,onChapterEntered:p,animation:e}}),Pr.default.useLayoutEffect(()=>{let M=A.current;if(A.current=null,!t)return;let F=k.current?.closest(".dshr-reader"),L=F?.querySelector(".dshr-content,.dshr-pdf-scroll");if(!L)return;let $=L.classList.contains("dshr-pdf-scroll"),J=L.querySelector(".dshr-content__inner"),se=$?null:O.current.chapterEntry,ne=se&&M?.entry===se?M.snapshot:null,ce=se?.edge,G=se?.direction,oe=-1/0,ue=!1,P=Td(),B={scrollBehavior:L.style.scrollBehavior,overflowAnchor:L.style.overflowAnchor};L.style.scrollBehavior="auto",L.style.overflowAnchor="none",L.classList.add("dshr-paged-scroll");let V=!1,he=!0,Z=!1,Pe=0,de=0,_e=0,Ve=[],Ue=null,nt=[],f=null,c=[],_=!$&&J?document.createElement("div"):null;_&&(_.className="dshr-page-tail",_.setAttribute("aria-hidden","true"),L.append(_));let x=()=>{L.dataset.readerNavigation=String(++T.current)};x(),b({top:48,bottom:56});let le=()=>{if(V)return;L.dataset.readerPage=String(P.page),L.dataset.readerPages=String(P.pages),L.dataset.readerTarget=String(P.top),g(ke=>ke.page===P.page&&ke.pages===P.pages?ke:{page:P.page,pages:P.pages});let ae=re(P.top);b(ke=>ke.bottom===ae?ke:{top:48,bottom:ae})},re=ae=>{let ke=ae+L.clientHeight-56,Re=Ve.find(Qe=>Qe.top<ke-.5&&Qe.bottom>ke+.5&&Qe.bottom-Qe.top<=L.clientHeight-48-56&&Qe.top>ae+48);return Re?Math.max(56,L.clientHeight-(Re.top-ae)):56},ge=()=>{Math.abs(L.scrollTop-P.top)>.5&&(L.scrollTop=P.top)},be=ae=>{if(V||$||ue||!J||!L.clientHeight||!L.clientWidth)return;if(Z){he=!0;return}Ve=Ed(L,J),c=lu(L,J);let ke=Sd(Ve,L.clientHeight);if(_){let Qe=L.scrollHeight-_.offsetHeight,Nt=Math.max(0,Math.ceil(ke.at(-1)+L.clientHeight-Qe));_.style.height=Nt+"px"}let Re=ae;if(Re==null&&(ce==="start"?Re=ke[0]:ce==="end"?Re=ke.at(-1):se?Re=Math.max(0,Math.min(1,Number(se.scrollRatio)||0))*Math.max(0,L.scrollHeight-L.clientHeight):Re=Nd(Ue,L,L.scrollTop)),P.replace(ke,Re),he=!1,ge(),Ue=Ds(Ve,P.top,L),le(),se){let Qe=se;se=null,oe=performance.now();let Nt=ne;ne=null,Nt&&Nt.width===L.clientWidth&&Nt.height===L.clientHeight&&Be(P.top,Qe.direction,Nt),O.current.onChapterEntered?.(Qe,pa(L))}},ye=ae=>{V||$||ue||(he=!0,Z&&f&&(f.width!==L.clientWidth||f.height!==L.clientHeight||ae?.type==="loadingdone")&&f.cancel(),!de&&(de=requestAnimationFrame(()=>{de=0,Z||be()})))},De=()=>{Pe+=1,f?.cancel(),f=null,delete L.dataset.readerTurning,F.classList.remove("dshr-is-turning"),Z=!1,nt.length=0},Ee=()=>J?.animate&&!rg(),Be=async(ae,ke,Re)=>{Z=!0;let Qe=++Pe;L.dataset.readerTurning="true";try{Ee()&&(f=du({reader:F,scroll:L,stage:J,records:c,from:ae,to:P.top,fromBottom:re(ae),toBottom:re(P.top),mode:O.current.animation,direction:ke,departing:Re}),F.classList.add("dshr-is-turning")),ge(),f&&await f.play()}catch{}finally{!V&&Qe===Pe&&(f?.cancel(),f=null,delete L.dataset.readerTurning,F.classList.remove("dshr-is-turning"),Z=!1,he?be():(ge(),le()),nt.length&&ot(nt.shift()))}},at=ae=>{let{canPrevChapter:ke,canNextChapter:Re,onChapterTurn:Qe}=O.current;if(!Qe||!(ae<0?ke:Re))return;ue=!0,nt.length=0,x();let Nt={edge:ae>0?"start":"end",direction:ae};if(Ee())try{A.current={entry:Nt,snapshot:Ks(L,J,c,P.top,re(P.top))}}catch{}Qe(ae,Nt)},ot=(ae,ke=!1)=>{if(V||ue)return;if(Lo=F,ae=ae>0?1:-1,$){L.dispatchEvent(new CustomEvent("dshr-pdf-page-turn",{detail:ae}));return}if(se){be();return}if(ae===G&&(ke||Z||performance.now()-oe<hu))return;if(G=null,Z){nt.length<32&&nt.push(ae);return}if(he&&be(),he||Z)return;let Re=P.top;if(!P.turn(ae)){at(ae);return}ce=null,Ue=Ds(Ve,P.top,L),x(),le(),Be(Re,ae)},Oe=uu({scroll:L,reader:F,stage:J,hint:E.current,turn:ot,canTurn:ae=>{if($){let ke=Number(L.dataset.pdfPage);return ae<0?ke>1:ke>0&&ke<Number(L.dataset.pdfPages)}return ae<0?P.page>1||O.current.canPrevChapter:P.page<P.pages||O.current.canNextChapter}}),Ke=()=>{$||Z||ue||he||_e||(_e=requestAnimationFrame(()=>{_e=0,!V&&!Z&&!ue&&!he&&ge()}))},Ge=ae=>{if($||!J||(ae.preventDefault(),ue))return;De(),G=null,ce=null,ne=null;let ke=ae.detail||{},Re=Number(ke.top)||0;ke.ratio!=null&&(Re=Number(ke.ratio)*Math.max(0,L.scrollHeight-L.clientHeight)),ke.element&&J.contains(ke.element)&&(Re=ke.element.getBoundingClientRect().top-L.getBoundingClientRect().top+L.scrollTop-48),x(),Ue=null,be(Math.max(0,Re))},ht=ae=>{if(ae.target instanceof Element&&ae.target.closest(tg)||ae.ctrlKey||ae.metaKey||Math.abs(ae.deltaY)<8&&Math.abs(ae.deltaX)<8)return;ae.preventDefault();let ke=performance.now(),Re=ke-C.current;C.current=ke,Re>=hu&&ot(ae.deltaY>0||ae.deltaX>0?1:-1)},ve=ae=>{if(ae.defaultPrevented||ae.repeat||ae.ctrlKey||ae.metaKey||ae.altKey||!L.isConnected||ae.target instanceof Element&&ae.target.closest(pu+","+fu+",.dshr-topbar--pdf,.dshr-immersive-controls"))return;let ke=ae.target instanceof Element&&ae.target.closest(".dshr-root"),Re=ae.target instanceof Element&&ae.target.closest(".dshr-reader");if(Re&&Re!==F||ke&&!ke.contains(F)||!ke&&(Lo?.isConnected?Lo!==F:[...document.querySelectorAll(".dshr-reader")].find(Hr=>Hr.getBoundingClientRect().height>0)!==F)||Ys(L))return;let Qe=["ArrowDown","ArrowRight","PageDown"," "].includes(ae.key),Nt=["ArrowUp","ArrowLeft","PageUp"].includes(ae.key);!Qe&&!Nt||(ae.preventDefault(),ot(Qe?1:-1))},lt=ae=>{Oe.hide();let{page:ke,pages:Re}=ae.detail||{};Number.isFinite(ke)&&ke>=1&&Number.isFinite(Re)&&Re>=1&&g({page:ke,pages:Re})},Et=ae=>{ot(Number(ae.detail)>0?1:-1)},fr=()=>{Lo=F};F.addEventListener("pointerdown",fr),L.addEventListener("wheel",ht,{passive:!1}),L.addEventListener("scroll",Ke,{passive:!0}),L.addEventListener("dshr-flow-navigate",Ge),L.addEventListener("dshr-page-turn",Et),L.addEventListener("dshr-pdf-page-state",lt),window.addEventListener("keydown",ve);let Kt,Dt,$e,$t=()=>{if(V)return;Oe.hide();let ae=L.getBoundingClientRect(),ke=F.getBoundingClientRect(),Re={center:ae.left-ke.left+ae.width/2,bottom:Math.max(0,ke.bottom-ae.bottom)};y(Qe=>Qe&&Object.keys(Re).every(Nt=>Math.abs(Qe[Nt]-Re[Nt])<.5)?Qe:Re)};if($t(),typeof ResizeObserver=="function"&&($e=new ResizeObserver($t),$e.observe(L),$e.observe(F)),$){let ae=Number(L.dataset.pdfPage),ke=Number(L.dataset.pdfPages);ae>0&&ke>0&&g({page:ae,pages:ke})}else be(),typeof ResizeObserver=="function"&&(Kt=new ResizeObserver(ye),Kt.observe(L),Kt.observe(J)),typeof MutationObserver=="function"&&(Dt=new MutationObserver(ye),Dt.observe(J,{subtree:!0,childList:!0,characterData:!0})),J.addEventListener("load",ye,!0),document.fonts?.addEventListener("loadingdone",ye),document.fonts?.ready.then(ye);return()=>{V=!0,De(),cancelAnimationFrame(de),cancelAnimationFrame(_e),Kt?.disconnect(),$e?.disconnect(),Dt?.disconnect(),J?.removeEventListener("load",ye,!0),document.fonts?.removeEventListener("loadingdone",ye),L.removeEventListener("wheel",ht),L.removeEventListener("scroll",Ke),L.removeEventListener("dshr-flow-navigate",Ge),L.removeEventListener("dshr-page-turn",Et),L.removeEventListener("dshr-pdf-page-state",lt),window.removeEventListener("keydown",ve),F.removeEventListener("pointerdown",fr),Lo===F&&(Lo=null),L.classList.remove("dshr-paged-scroll"),Object.assign(L.style,B);for(let ae of["readerPage","readerPages","readerTarget","readerNavigation","readerTurning"])delete L.dataset[ae];_?.remove(),Oe.dispose()}},[t,r,i]),!t)return null;let{page:R,pages:m}=u;return(0,_r.jsxs)("div",{ref:k,className:`dshr-paged-controls${r?" is-book":""}${n?" has-book-frame":""}`,style:{...S?{"--dshr-paged-center":`${S.center}px`,"--dshr-paged-bottom":`${S.bottom+14}px`}:{},"--dshr-book-frame-top":`${Math.max(0,Number(o)||0)}px`,"--dshr-book-frame-left":`${Math.max(0,Number(a)||0)}px`,"--dshr-book-top-cover":`${w.top}px`,"--dshr-book-bottom-cover":`${w.bottom}px`},"aria-live":"polite",children:[n?(0,_r.jsxs)(_r.Fragment,{children:[(0,_r.jsx)("div",{className:"dshr-book-mask dshr-book-mask--top","aria-hidden":"true"}),(0,_r.jsx)("div",{className:"dshr-book-mask dshr-book-mask--bottom","aria-hidden":"true"})]}):null,(0,_r.jsx)("div",{ref:E,className:"dshr-page-gutter-hint",hidden:!0,"aria-hidden":"true"}),(0,_r.jsxs)("div",{className:"dshr-paged-status",title:"\u70B9\u51FB\u5DE6\u53F3\u7559\u767D\u6216\u6309\u65B9\u5411\u952E\u7FFB\u9875",children:[(0,_r.jsx)("b",{children:R}),(0,_r.jsx)("span",{children:"/"}),(0,_r.jsx)("em",{children:m})]})]})}var Pn=It(require("react"),1);var rl=Object.freeze([Object.freeze({id:"serif",label:"\u5B8B\u4F53 / Serif",stack:'"Songti SC", "Noto Serif SC", "Source Han Serif SC", "STSong", "SimSun", "\u5B8B\u4F53", Georgia, "Times New Roman", serif'}),Object.freeze({id:"sans",label:"\u9ED1\u4F53 / Sans",stack:'"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", "Segoe UI", system-ui, -apple-system, sans-serif'}),Object.freeze({id:"kai",label:"\u6977\u4F53 / Kai",stack:'"Kaiti SC", "STKaiti", "KaiTi", "\u6977\u4F53", "Noto Serif SC", "Songti SC", "SimSun", serif'}),Object.freeze({id:"system",label:"\u7CFB\u7EDF\u9ED8\u8BA4",stack:'system-ui, -apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif'})]),nl=Object.freeze([Object.freeze({value:400,label:"\u5E38\u89C4"}),Object.freeze({value:500,label:"\u4E2D\u7B49"}),Object.freeze({value:600,label:"\u52A0\u7C97"})]),Ev=Object.freeze([Object.freeze({id:"scroll",label:"\u6EDA\u52A8"}),Object.freeze({id:"book",label:"\u6A2A\u7248"})]),yu=Object.freeze([Object.freeze({id:"slide",label:"\u6A2A\u5411\u6ED1\u9875",hint:"\u524D\u540E\u4E24\u9875\u8FDE\u7EED\u5E73\u79FB\u8854\u63A5\uFF0C\u4E0D\u6DE1\u51FA\u6B63\u6587"}),Object.freeze({id:"cover",label:"\u4E66\u9875\u8986\u76D6",hint:"\u65B0\u9875\u4ECE\u53F3\u4FA7\u8986\u76D6\u9759\u6B62\u5E95\u9875\uFF0C\u56DE\u7FFB\u65F6\u63ED\u5F00\u5F53\u524D\u9875"}),Object.freeze({id:"flip",label:"3D \u4E66\u9875",hint:"\u4ECE\u53F3\u4E0B\u9875\u89D2\u5411\u4E66\u810A\u6298\u53E0\uFF0C\u5E26\u7EB8\u80CC\u4E0E\u52A8\u6001\u9634\u5F71"})]),zi=Object.freeze([Object.freeze({id:"paper",label:"\u7EB8\u5F20",bg:"#fbf7ee",ink:"#2b2a26",muted:"#736f64",border:"rgba(43, 42, 38, 0.15)",accent:"#9a6b2f"}),Object.freeze({id:"white",label:"\u767D\u8272",bg:"#ffffff",ink:"#1f2328",muted:"#5c6370",border:"rgba(31, 35, 40, 0.13)",accent:"#3f5ce0"}),Object.freeze({id:"sepia",label:"\u7F8A\u76AE\u7EB8",bg:"#f2e6cf",ink:"#453322",muted:"#715f47",border:"rgba(69, 51, 34, 0.18)",accent:"#8f5a24"}),Object.freeze({id:"green",label:"\u62A4\u773C\u7EFF",bg:"#e3efe4",ink:"#263a2b",muted:"#556b5a",border:"rgba(38, 58, 43, 0.17)",accent:"#3d6a47"}),Object.freeze({id:"night",label:"\u591C\u95F4",bg:"#1c1e22",ink:"#e9e6dd",muted:"#a6a29a",border:"rgba(233, 230, 221, 0.16)",accent:"#d2a76b"}),Object.freeze({id:"custom",label:"\u81EA\u5B9A\u4E49"})]),ir=Object.freeze({fontSize:18,lineHeight:1.85,fontFamily:"serif",fontWeight:400,contentWidth:760,tocWidth:260,readingMode:"scroll",pageAnimation:"slide",bookAnimation:"slide",brightness:1,backgroundPreset:"paper",customBackground:"#fbf7ee",textTone:"auto",backgroundImageKey:"",backgroundImageOpacity:.26,backgroundImageBlur:0}),Fe=Object.freeze({fontSize:Object.freeze({min:13,max:34,step:1}),lineHeight:Object.freeze({min:1.35,max:2.4,step:.05}),contentWidth:Object.freeze({min:520,max:1600,step:20}),tocWidth:Object.freeze({min:180,max:520,step:10}),brightness:Object.freeze({min:.6,max:1.2,step:.01}),backgroundImageOpacity:Object.freeze({min:0,max:.8,step:.01}),backgroundImageBlur:Object.freeze({min:0,max:12,step:1})}),wa=Object.freeze(nl.map(t=>t.value)),ng=Object.freeze(zi.map(t=>t.id)),og=new Map(zi.map(t=>[t.id,t])),mu=new Map(rl.map(t=>[t.id,t])),ag=Object.freeze(["auto","dark","light"]),Js=Object.freeze({ink:"#181511",muted:"#6b6559",border:"rgba(32, 29, 24, 0.15)",tone:"dark"}),el=Object.freeze({ink:"#f8f5ec",muted:"#b3ada0",border:"rgba(245, 242, 233, 0.18)",tone:"light"}),ig="#8a5a24",sg="#d8b06a",bu=Object.freeze({white:"#ffffff",black:"#000000",red:"#ff0000",lime:"#00ff00",blue:"#0000ff",yellow:"#ffff00",aqua:"#00ffff",cyan:"#00ffff",fuchsia:"#ff00ff",magenta:"#ff00ff",silver:"#c0c0c0",gray:"#808080",grey:"#808080",maroon:"#800000",olive:"#808000",green:"#008000",purple:"#800080",teal:"#008080",navy:"#000080",orange:"#ffa500",pink:"#ffc0cb",brown:"#a52a2a",gold:"#ffd700",beige:"#f5f5dc",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",turquoise:"#40e0d0",salmon:"#fa8072",coral:"#ff7f50",indigo:"#4b0082",violet:"#ee82ee",wheat:"#f5deb3",tan:"#d2b48c",snow:"#fffafa",linen:"#faf0e6"});function Do(t){return Math.max(0,Math.min(255,Math.round(t)))}function lg(t){let e=t.slice(1);if(!/^[0-9a-f]+$/iu.test(e))return null;if(e.length===3||e.length===4){let[r,n,o]=e.slice(0,3).split("").map(a=>Number.parseInt(`${a}${a}`,16));return{r,g:n,b:o}}return e.length===6||e.length===8?{r:Number.parseInt(e.slice(0,2),16),g:Number.parseInt(e.slice(2,4),16),b:Number.parseInt(e.slice(4,6),16)}:null}function cg(t){let e=/^([+-]?(?:\d+\.?\d*|\.\d+))(%?)$/u.exec(t);if(!e)return null;let r=Number(e[1]);return Number.isFinite(r)?(e[2]==="%"&&(r=r/100*255),Do(r)):null}function dg(t){let e=t.replace(/\//gu," ").split(/[\s,]+/u).filter(Boolean);if(e.length<3)return null;let r=e.slice(0,3).map(cg);return r.some(n=>n===null)?null:{r:r[0],g:r[1],b:r[2]}}function Zs(t,e,r){let n=r;return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function ug(t){let e=t.replace(/\//gu," ").split(/[\s,]+/u).filter(Boolean);if(e.length<3)return null;let r=Number.parseFloat(e[0]),n=Number.parseFloat(e[1]),o=Number.parseFloat(e[2]);if(![r,n,o].every(Number.isFinite))return null;let a=Math.max(0,Math.min(100,n))/100,i=Math.max(0,Math.min(100,o))/100,s=(r%360+360)%360/360;if(a===0){let h=Do(i*255);return{r:h,g:h,b:h}}let l=i<.5?i*(1+a):i+a-i*a,d=2*i-l;return{r:Do(Zs(d,l,s+1/3)*255),g:Do(Zs(d,l,s)*255),b:Do(Zs(d,l,s-1/3)*255)}}function Di(t){if(typeof t!="string")return null;let e=t.trim().toLowerCase();if(!e)return null;if(e.startsWith("#"))return lg(e);if(e in bu)return Di(bu[e]);let r=/^([a-z]+)\((.*)\)$/u.exec(e);if(!r)return null;let n=r[1],o=r[2];return n==="rgb"||n==="rgba"?dg(o):n==="hsl"||n==="hsla"?ug(o):null}function xu({r:t,g:e,b:r}){return`#${[t,e,r].map(n=>Do(n).toString(16).padStart(2,"0")).join("")}`}function Qs(t){let e=t/255;return e<=.03928?e/12.92:((e+.055)/1.055)**2.4}function vu(t){let e=Di(t);return e?.2126*Qs(e.r)+.7152*Qs(e.g)+.0722*Qs(e.b):1}function Fi(t,e){let r=vu(t),n=vu(e),o=Math.max(r,n),a=Math.min(r,n);return(o+.05)/(a+.05)}function ol(t,e="#ffffff"){let r=Di(t);if(r)return xu(r);let n=Di(e);return n?xu(n):"#ffffff"}function tl(t){let e=Fi(Js.ink,t);return Fi(el.ink,t)>e?{...el}:{...Js}}function Bi(t){let e=tl(t);return{ink:e.ink,muted:e.muted,border:e.border}}function Qr(t,e,r,n){let o=Number(t);return Number.isFinite(o)?Math.max(e,Math.min(r,o)):n}function hg(t){return ng.includes(t)?t:"paper"}function pg(t){return ag.includes(t)?t:"auto"}function fg(t){let e=Number(t);if(!Number.isFinite(e))return 400;let r=Math.max(wa[0],Math.min(wa[wa.length-1],e)),n=wa[0],o=Number.POSITIVE_INFINITY;for(let a of wa){let i=Math.abs(a-r);i<o&&(n=a,o=i)}return n}function gg(t){return(mu.get(t)||mu.get("serif")).stack}function mg(t){return t>=600?700:600}function al(t){let e=t&&typeof t=="object"?t:{},r=hg(e.backgroundPreset),n=ol(e.customBackground,ir.customBackground),o=r==="custom"?null:og.get(r),a=o?o.bg:n,i=tl(a);o&&(i={ink:o.ink,muted:o.muted,border:o.border});let s=pg(e.textTone);s==="dark"?i={...Js}:s==="light"&&(i={...el});let l=o?o.accent:tl(a).tone==="light"?sg:ig,d=fg(e.fontWeight);return{preset:r,bg:a,ink:i.ink,muted:i.muted,border:i.border,accent:l,fontFamily:gg(e.fontFamily),fontWeight:d,headingWeight:mg(d),width:Qr(e.contentWidth,Fe.contentWidth.min,Fe.contentWidth.max,ir.contentWidth),brightness:Qr(e.brightness,Fe.brightness.min,Fe.brightness.max,ir.brightness),imageOpacity:Qr(e.backgroundImageOpacity,Fe.backgroundImageOpacity.min,Fe.backgroundImageOpacity.max,ir.backgroundImageOpacity),imageBlur:Qr(e.backgroundImageBlur,Fe.backgroundImageBlur.min,Fe.backgroundImageBlur.max,ir.backgroundImageBlur)}}function bg(t){return`url("${String(t).replace(/[\n\r\f]/gu," ").replace(/\\/gu,"\\\\").replace(/"/gu,'\\"')}")`}function $i(t,e){let r=al(t),n=typeof e=="string"&&e.trim()?bg(e.trim()):"none";return{"--dshr-reader-bg":r.bg,"--dshr-reader-ink":r.ink,"--dshr-reader-muted":r.muted,"--dshr-reader-border":r.border,"--dshr-reader-accent":r.accent,"--dshr-reader-font":r.fontFamily,"--dshr-reader-weight":String(r.fontWeight),"--dshr-reader-heading-weight":String(r.headingWeight),"--dshr-reader-width":`${r.width}px`,"--dshr-reader-brightness":String(r.brightness),"--dshr-reader-image-opacity":String(r.imageOpacity),"--dshr-reader-image-blur":`${r.imageBlur}px`,"--dshr-reader-image":n}}var il=String.raw`
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

.dshr-root.is-immersive .dshr-appearance-panel {
  --dshr-appearance-surface: var(--dshr-immersive-surface, var(--dshr-layer-2));
  --dshr-appearance-surface-2: color-mix(in srgb, var(--dshr-appearance-surface) 96%, var(--dshr-appearance-fg));
  --dshr-appearance-surface-3: color-mix(in srgb, var(--dshr-appearance-surface) 90%, var(--dshr-appearance-fg));
  --dshr-appearance-fg: var(--dshr-immersive-ink, var(--dshr-fg));
  --dshr-appearance-fg-2: color-mix(in srgb, var(--dshr-appearance-fg) 82%, var(--dshr-appearance-surface));
  --dshr-appearance-fg-3: color-mix(in srgb, var(--dshr-appearance-fg) 70%, var(--dshr-appearance-surface));
  --dshr-appearance-border: color-mix(in srgb, var(--dshr-appearance-fg) 15%, transparent);
  --dshr-appearance-border-strong: color-mix(in srgb, var(--dshr-appearance-fg) 27%, transparent);
  --dshr-appearance-hover: var(--dshr-appearance-surface-2);
  --dshr-appearance-brand: var(--dshr-appearance-fg-2);
  color: var(--dshr-appearance-fg);
}

.dshr-root.is-immersive .dshr-appearance-panel button {
  transition: none;
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

.dshr-root.is-immersive .dshr-appearance-btn--primary {
  color: var(--dshr-appearance-fg);
  background: var(--dshr-appearance-surface-2);
  border-color: var(--dshr-appearance-border-strong);
  box-shadow: none;
}

.dshr-root.is-immersive .dshr-appearance-btn--primary:hover {
  background: var(--dshr-appearance-surface-3);
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
`;var K=require("react/jsx-runtime");function Fo({size:t=15,children:e,viewBox:r="0 0 24 24"}){return(0,K.jsx)("svg",{width:t,height:t,viewBox:r,fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:e})}function xg(t){return(0,K.jsx)(Fo,{...t,children:(0,K.jsx)("path",{d:"m6 6 12 12M18 6 6 18"})})}function vg(t){return(0,K.jsxs)(Fo,{...t,children:[(0,K.jsx)("rect",{x:"3",y:"4.5",width:"18",height:"15",rx:"2.4"}),(0,K.jsx)("circle",{cx:"8.4",cy:"9.6",r:"1.5"}),(0,K.jsx)("path",{d:"m4 17 4.6-4.4a1.6 1.6 0 0 1 2.2 0l2.5 2.4 2.1-2a1.6 1.6 0 0 1 2.2 0L20 15.6"})]})}function yg(t){return(0,K.jsxs)(Fo,{...t,children:[(0,K.jsx)("path",{d:"M12 16V4"}),(0,K.jsx)("path",{d:"m7 9 5-5 5 5"}),(0,K.jsx)("path",{d:"M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15"})]})}function wg(t){return(0,K.jsxs)(Fo,{...t,children:[(0,K.jsx)("path",{d:"M4 7h16M9 7V5h6v2M7 7l.7 12.2A1.8 1.8 0 0 0 9.5 21h5a1.8 1.8 0 0 0 1.8-1.8L17 7"}),(0,K.jsx)("path",{d:"M10 11v6M14 11v6"})]})}function kg(t){return(0,K.jsxs)(Fo,{...t,children:[(0,K.jsx)("path",{d:"M20 11a8 8 0 1 0-2.3 6.3"}),(0,K.jsx)("path",{d:"M20 4v7h-7"})]})}function wu(t){return(0,K.jsx)(Fo,{...t,children:(0,K.jsx)("path",{d:"m5 12 4.5 4.5L19 7"})})}var _g=Object.freeze([{id:"auto",label:"\u81EA\u52A8"},{id:"dark",label:"\u6DF1\u8272\u5B57"},{id:"light",label:"\u6D45\u8272\u5B57"}]),Sg=Object.freeze(["fontSize","lineHeight","fontFamily","fontWeight","contentWidth","tocWidth","brightness","backgroundPreset","customBackground","textTone","backgroundImageOpacity","backgroundImageBlur"]),Tg='button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';function ku({label:t,value:e,options:r,onChange:n}){return(0,K.jsx)("div",{className:"dshr-appearance-segmented",role:"group","aria-label":t,children:r.map(o=>{let a=o.value!==void 0?o.value:o.id;return(0,K.jsx)("button",{type:"button",className:"dshr-appearance-segmented__item","aria-pressed":e===a,onClick:()=>n(a),children:o.label},String(a))})})}function so({label:t,valueText:e,min:r,max:n,step:o,value:a,onChange:i,disabled:s,hint:l}){return(0,K.jsxs)("label",{className:`dshr-appearance-slider${s?" is-disabled":""}`,children:[(0,K.jsxs)("span",{className:"dshr-appearance-slider__head",children:[(0,K.jsx)("span",{children:t}),(0,K.jsx)("span",{className:"dshr-appearance-slider__value",children:e})]}),(0,K.jsx)("input",{type:"range",min:r,max:n,step:o,value:a,disabled:s,onChange:d=>i(Number(d.target.value)),"aria-label":t}),l?(0,K.jsx)("span",{className:"dshr-appearance-slider__hint",children:l}):null]})}function _u({open:t,settings:e,backgroundImageUrl:r,onChange:n,onPickBackgroundImage:o,onClearBackgroundImage:a,onClose:i}){let s=Pn.default.useRef(null),l=Pn.default.useId(),[d,h]=Pn.default.useState(!1),p=al(e),u=!!r,g=ol(e.customBackground,ir.customBackground),w=Bi(g).ink,b=Fi(p.ink,p.bg),S=Qr(e.fontSize,Fe.fontSize.min,Fe.fontSize.max,ir.fontSize),y=Qr(e.lineHeight,Fe.lineHeight.min,Fe.lineHeight.max,ir.lineHeight),k=!u&&Sg.every(M=>e[M]===ir[M]),E=Pn.default.useCallback(M=>{typeof n=="function"&&n({...e,...M})},[n,e]);if(Pn.default.useEffect(()=>{if(!t)return;let M=F=>{F.key==="Escape"&&(F.preventDefault(),i?.())};return window.addEventListener("keydown",M),()=>window.removeEventListener("keydown",M)},[t,i]),Pn.default.useEffect(()=>{if(!t)return;let M=typeof document<"u"?document.activeElement:null,F=window.requestAnimationFrame(()=>{s.current?.focus({preventScroll:!0})});return()=>{window.cancelAnimationFrame(F),M instanceof HTMLElement&&M.isConnected&&M.focus({preventScroll:!0})}},[t]),Pn.default.useEffect(()=>{if(!t){h(!1);return}},[t]),Pn.default.useEffect(()=>{if(!d)return;let M=window.setTimeout(()=>h(!1),3200);return()=>window.clearTimeout(M)},[d]),!t)return null;let A=M=>{M.target===M.currentTarget&&i?.()},T=M=>{if(M.key!=="Tab"||!s.current)return;let F=[...s.current.querySelectorAll(Tg)].filter(se=>se.offsetParent!==null||se===document.activeElement);if(F.length===0)return;let L=F[0],$=F[F.length-1],J=document.activeElement;M.shiftKey&&(J===L||!s.current.contains(J))?(M.preventDefault(),$.focus()):!M.shiftKey&&J===$&&(M.preventDefault(),L.focus())},C=()=>{if(!d){h(!0);return}h(!1),u&&a?.(),n?.({...e,...ir})},R={...$i(e,r),fontSize:`${Math.min(16,Math.max(12,Math.round(S*.8)))}px`,lineHeight:String(y)},m=b>=4.5;return(0,K.jsx)("div",{className:"dshr-appearance-mask",onMouseDown:A,children:(0,K.jsxs)("aside",{className:"dshr-appearance-panel",role:"dialog","aria-modal":"true","aria-labelledby":l,tabIndex:-1,ref:s,onKeyDown:T,children:[(0,K.jsxs)("header",{className:"dshr-appearance-head",children:[(0,K.jsxs)("div",{className:"dshr-appearance-head__text",children:[(0,K.jsx)("strong",{id:l,children:"\u9605\u8BFB\u5916\u89C2"}),(0,K.jsx)("span",{children:"\u8C03\u6574\u6392\u7248\u3001\u5B57\u4F53\u4E0E\u80CC\u666F \xB7 \u4EC5\u4FDD\u5B58\u5728\u672C\u673A"})]}),(0,K.jsx)("button",{type:"button",className:"dshr-appearance-close",onClick:i,"aria-label":"\u5173\u95ED\u5916\u89C2\u8BBE\u7F6E",children:(0,K.jsx)(xg,{size:16})})]}),(0,K.jsxs)("div",{className:"dshr-appearance-body",children:[(0,K.jsxs)("div",{className:"dshr-appearance-preview",style:R,"aria-hidden":"true",children:[(0,K.jsx)("span",{className:"dshr-appearance-preview__badge",children:"\u5B9E\u65F6\u9884\u89C8"}),(0,K.jsxs)("div",{className:"dshr-appearance-preview__inner",children:[(0,K.jsx)("span",{className:"dshr-appearance-preview__kicker",children:"\u7B2C 1 \u7AE0"}),(0,K.jsx)("p",{className:"dshr-appearance-preview__title",children:"\u5C71\u5C45\u79CB\u669D"}),(0,K.jsx)("p",{className:"dshr-appearance-preview__text",children:"\u7A7A\u5C71\u65B0\u96E8\u540E\uFF0C\u5929\u6C14\u665A\u6765\u79CB\u3002\u660E\u6708\u677E\u95F4\u7167\uFF0C\u6E05\u6CC9\u77F3\u4E0A\u6D41\u3002"}),(0,K.jsx)("p",{className:"dshr-appearance-preview__quote",children:"\u7AF9\u55A7\u5F52\u6D63\u5973\uFF0C\u83B2\u52A8\u4E0B\u6E14\u821F\u3002"})]})]}),(0,K.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-bg`,children:[(0,K.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-bg`,children:"\u80CC\u666F"}),(0,K.jsx)("div",{className:"dshr-appearance-swatches",role:"group","aria-label":"\u80CC\u666F\u9884\u8BBE",children:zi.map(M=>{let F=M.id==="custom"?g:M.bg,L=M.id==="custom"?w:M.ink,$=p.preset===M.id;return(0,K.jsxs)("button",{type:"button",className:`dshr-appearance-swatch${$?" is-active":""}`,"aria-pressed":$,onClick:()=>E({backgroundPreset:M.id}),children:[(0,K.jsx)("span",{className:"dshr-appearance-swatch__chip",style:{background:F,color:L},children:"\u6587"}),(0,K.jsx)("span",{className:"dshr-appearance-swatch__label",children:M.label})]},M.id)})}),(0,K.jsxs)("label",{className:"dshr-appearance-colorrow",children:[(0,K.jsx)("span",{children:"\u81EA\u5B9A\u4E49\u989C\u8272"}),(0,K.jsxs)("span",{className:"dshr-appearance-colorrow__control",children:[(0,K.jsx)("input",{type:"color",className:"dshr-appearance-color",value:g,"aria-label":"\u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272",onChange:M=>E({backgroundPreset:"custom",customBackground:M.target.value})}),(0,K.jsx)("code",{className:"dshr-appearance-colorrow__hex",children:g.toUpperCase()})]})]}),(0,K.jsxs)("div",{className:"dshr-appearance-field",children:[(0,K.jsxs)("div",{className:"dshr-appearance-field__head",children:[(0,K.jsx)("span",{children:"\u6587\u5B57\u8272\u8C03"}),(0,K.jsxs)("span",{className:`dshr-appearance-field__value${m?"":" is-warning"}`,children:["\u5BF9\u6BD4\u5EA6 ",b.toFixed(1),":1"]})]}),(0,K.jsx)(ku,{label:"\u6587\u5B57\u8272\u8C03",value:e.textTone==="dark"||e.textTone==="light"?e.textTone:"auto",options:_g,onChange:M=>E({textTone:M})}),(0,K.jsxs)("p",{className:"dshr-appearance-hint",children:[m?"\u81EA\u52A8\u6A21\u5F0F\u4F1A\u6309\u80CC\u666F\u4EAE\u5EA6\u9009\u62E9\u6DF1\u8272\u6216\u6D45\u8272\u6587\u5B57\u3002":"\u5F53\u524D\u6587\u5B57\u4E0E\u80CC\u666F\u5BF9\u6BD4\u5EA6\u504F\u4F4E\uFF0C\u5EFA\u8BAE\u6539\u9009\u5176\u5B83\u80CC\u666F\u6216\u6587\u5B57\u8272\u8C03\u3002",u?" \u80CC\u666F\u56FE\u7247\u4F1A\u8FDB\u4E00\u6B65\u5F71\u54CD\u5B9E\u9645\u53EF\u8BFB\u6027\u3002":""]})]})]}),(0,K.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-image`,children:[(0,K.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-image`,children:"\u80CC\u666F\u56FE\u7247"}),(0,K.jsxs)("div",{className:"dshr-appearance-image",children:[(0,K.jsx)("span",{className:`dshr-appearance-image__thumb${u?" has-image":""}`,children:u?(0,K.jsx)("img",{src:r,alt:""}):(0,K.jsx)(vg,{size:20})}),(0,K.jsxs)("div",{className:"dshr-appearance-image__meta",children:[(0,K.jsx)("strong",{children:u?"\u5DF2\u9009\u62E9\u80CC\u666F\u56FE\u7247":"\u672A\u9009\u62E9\u80CC\u666F\u56FE\u7247"}),(0,K.jsx)("span",{children:"\u4F5C\u4E3A\u6587\u5B57\u4E0B\u65B9\u7684\u886C\u5E95\uFF0C\u4EC5\u4FDD\u5B58\u5728\u672C\u673A\u3002"})]}),(0,K.jsxs)("div",{className:"dshr-appearance-image__actions",children:[(0,K.jsxs)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--soft dshr-appearance-btn--sm",onClick:o,children:[u?(0,K.jsx)(wu,{size:13}):(0,K.jsx)(yg,{size:13}),u?"\u66F4\u6362":"\u9009\u62E9\u56FE\u7247"]}),u?(0,K.jsxs)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--ghost dshr-appearance-btn--sm",onClick:a,children:[(0,K.jsx)(wg,{size:13})," \u79FB\u9664"]}):null]})]}),(0,K.jsx)(so,{label:"\u56FE\u7247\u4E0D\u900F\u660E\u5EA6",valueText:`${Math.round(Qr(e.backgroundImageOpacity,Fe.backgroundImageOpacity.min,Fe.backgroundImageOpacity.max,ir.backgroundImageOpacity)*100)}%`,min:Fe.backgroundImageOpacity.min,max:Fe.backgroundImageOpacity.max,step:Fe.backgroundImageOpacity.step,value:Qr(e.backgroundImageOpacity,Fe.backgroundImageOpacity.min,Fe.backgroundImageOpacity.max,ir.backgroundImageOpacity),disabled:!u,onChange:M=>E({backgroundImageOpacity:M})}),(0,K.jsx)(so,{label:"\u56FE\u7247\u6A21\u7CCA",valueText:`${Math.round(p.imageBlur)}px`,min:Fe.backgroundImageBlur.min,max:Fe.backgroundImageBlur.max,step:Fe.backgroundImageBlur.step,value:p.imageBlur,disabled:!u,onChange:M=>E({backgroundImageBlur:M})}),(0,K.jsx)(so,{label:"\u9605\u8BFB\u4EAE\u5EA6",valueText:`${Math.round(p.brightness*100)}%`,min:Fe.brightness.min,max:Fe.brightness.max,step:Fe.brightness.step,value:p.brightness,onChange:M=>E({brightness:M})}),(0,K.jsx)("p",{className:"dshr-appearance-hint",children:"\u8C03\u4F4E\u4EAE\u5EA6\u53EF\u51CF\u5C11\u591C\u95F4\u5C4F\u5E55\u523A\u6FC0\uFF1B\u53EA\u5F71\u54CD\u6B63\u6587/PDF \u9605\u8BFB\u533A\uFF0C\u4E0D\u5F71\u54CD\u5DE5\u5177\u680F\u4E0E\u6279\u6CE8\u9762\u677F\u3002"})]}),(0,K.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-type`,children:[(0,K.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-type`,children:"\u5B57\u4F53"}),(0,K.jsx)("div",{className:"dshr-appearance-families",role:"group","aria-label":"\u5B57\u4F53",children:rl.map(M=>(0,K.jsx)("button",{type:"button",className:"dshr-appearance-family",style:{fontFamily:M.stack},"aria-pressed":p.fontFamily===M.stack,onClick:()=>E({fontFamily:M.id}),title:M.label,children:M.label},M.id))}),(0,K.jsxs)("div",{className:"dshr-appearance-field",children:[(0,K.jsx)("div",{className:"dshr-appearance-field__head",children:(0,K.jsx)("span",{children:"\u5B57\u91CD"})}),(0,K.jsx)(ku,{label:"\u5B57\u91CD",value:p.fontWeight,options:nl.map(M=>({value:M.value,label:M.label})),onChange:M=>E({fontWeight:M})})]}),(0,K.jsx)(so,{label:"\u5B57\u53F7",valueText:`${S}px`,min:Fe.fontSize.min,max:Fe.fontSize.max,step:Fe.fontSize.step,value:S,onChange:M=>E({fontSize:M})}),(0,K.jsx)(so,{label:"\u884C\u9AD8",valueText:y.toFixed(2),min:Fe.lineHeight.min,max:Fe.lineHeight.max,step:Fe.lineHeight.step,value:y,onChange:M=>E({lineHeight:Math.round(M*100)/100})})]}),(0,K.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-layout`,children:[(0,K.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-layout`,children:"\u7248\u5F0F"}),(0,K.jsx)(so,{label:"\u9605\u8BFB\u5BBD\u5EA6",valueText:`${Math.round(p.width)}px`,min:Fe.contentWidth.min,max:Fe.contentWidth.max,step:Fe.contentWidth.step,value:p.width,onChange:M=>E({contentWidth:M})}),(0,K.jsx)(so,{label:"\u76EE\u5F55\u5BBD\u5EA6",valueText:`${Math.round(Qr(e.tocWidth,Fe.tocWidth.min,Fe.tocWidth.max,ir.tocWidth))}px`,min:Fe.tocWidth.min,max:Fe.tocWidth.max,step:Fe.tocWidth.step,value:Qr(e.tocWidth,Fe.tocWidth.min,Fe.tocWidth.max,ir.tocWidth),onChange:M=>E({tocWidth:M})}),(0,K.jsx)("p",{className:"dshr-appearance-hint",children:"\u63A7\u5236\u6B63\u6587\u6700\u5927\u5BBD\u5EA6\uFF1B\u76EE\u5F55\u5BBD\u5EA6\u53EF\u5728\u8FD9\u91CC\u8C03\uFF0C\u4E5F\u53EF\u4EE5\u62D6\u52A8\u76EE\u5F55\u53F3\u8FB9\u7F18\u3002\u76EE\u5F55\u6807\u9898\u4F1A\u5B8C\u6574\u6362\u884C\u663E\u793A\u3002"})]})]}),(0,K.jsxs)("footer",{className:"dshr-appearance-foot",children:[(0,K.jsxs)("button",{type:"button",className:`dshr-appearance-btn dshr-appearance-btn--ghost${d?" dshr-appearance-btn--danger":""}`,onClick:C,disabled:k&&!d,title:k?"\u5F53\u524D\u5DF2\u662F\u9ED8\u8BA4\u5916\u89C2":"\u6062\u590D\u9ED8\u8BA4\u5916\u89C2",children:[d?(0,K.jsx)(wu,{size:14}):(0,K.jsx)(kg,{size:14}),d?"\u786E\u8BA4\u6062\u590D\uFF1F":"\u6062\u590D\u9ED8\u8BA4"]}),(0,K.jsx)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--primary",onClick:i,children:"\u5B8C\u6210"})]})]})})}var Hi=It(require("react"),1);var Te=require("react/jsx-runtime"),Eg={highlight:to,underline:xi,note:jn},Ng=[{id:"all",label:"\u5168\u90E8"},...Mo.map(t=>({id:t.id,label:t.label}))];function Ag(t){let e=Number(t);if(!Number.isFinite(e)||e<=0)return"";try{return new Date(e).toLocaleDateString("zh-CN",{month:"numeric",day:"numeric"})}catch{return""}}function Cg(t){let e=new Map,r=t&&Array.isArray(t.chapters)?t.chapters:[];for(let n=0;n<r.length;n+=1){let o=r[n];o&&o.id!=null&&e.set(String(o.id),{index:n,title:o.title||""})}return e}function Su(t){return t?t.kind==="pdf"?!0:t.kind==="flow"?!1:Array.isArray(t.rects)&&!Array.isArray(t.ranges):!1}function Tu(t,e){if(!t)return null;if(t.chapterId!=null){let r=e.get(String(t.chapterId));if(r)return r}if(Number.isInteger(Number(t.chapterIndex))&&Number(t.chapterIndex)>=0){let r=Number(t.chapterIndex),o=(e.size>0?[...e.values()]:[]).find(a=>a.index===r);return{index:r,title:o?o.title:""}}return null}function Ig(t,e,r){let n=(Array.isArray(t)?t:[]).filter(i=>!(!i||r!=="all"&&i.style!==r)),o=new Map;for(let i=0;i<n.length;i+=1){let s=n[i],l=Su(s),d,h,p;if(l){let u=Number(s.page),g=Number.isInteger(u)&&u>0;d=`pdf:${g?u:"unknown"}`,h=g?1e4+u:999999,p=g?`\u7B2C ${u} \u9875`:"PDF \u9875\u9762"}else{let u=Tu(s,e),g=u?u.index:null;d=`flow:${g??"unknown"}`,h=g??99999,p=g==null?"\u6B63\u6587":`\u7B2C ${g+1} \u7AE0${u&&u.title?` \xB7 ${u.title}`:""}`}o.has(d)||o.set(d,{key:d,order:h,title:p,items:[]}),o.get(d).items.push(s)}let a=[...o.values()];a.sort((i,s)=>i.order-s.order);for(let i=0;i<a.length;i+=1)a[i].items.sort((l,d)=>{let h=Array.isArray(l.ranges)&&l.ranges[0]&&l.ranges[0].start||0,p=Array.isArray(d.ranges)&&d.ranges[0]&&d.ranges[0].start||0;return h!==p?h-p:(Number(l.createdAt)||0)-(Number(d.createdAt)||0)});return a}function Rg({hasAny:t,filter:e}){return t?(0,Te.jsxs)("div",{className:"dshr-anno-panel__empty",children:[(0,Te.jsx)("p",{className:"dshr-anno-panel__empty-title",children:"\u6CA1\u6709\u5339\u914D\u7684\u6807\u6CE8"}),(0,Te.jsxs)("p",{className:"dshr-anno-panel__empty-text",children:["\u5F53\u524D\u7B5B\u9009\u662F\u300C",e==="all"?"\u5168\u90E8":Ps(e),"\u300D\uFF0C\u5207\u6362\u7B5B\u9009\u770B\u770B\u5176\u4F59\u6807\u6CE8\u3002"]})]}):(0,Te.jsxs)("div",{className:"dshr-anno-panel__empty",children:[(0,Te.jsx)("span",{className:"dshr-anno-panel__empty-mark","aria-hidden":"true",children:(0,Te.jsx)(wd,{size:44})}),(0,Te.jsx)("p",{className:"dshr-anno-panel__empty-title",children:"\u8FD8\u6CA1\u6709\u4EFB\u4F55\u6807\u6CE8"}),(0,Te.jsx)("p",{className:"dshr-anno-panel__empty-text",children:"\u5728\u9605\u8BFB\u65F6\u9009\u4E2D\u4E00\u6BB5\u6587\u5B57\uFF0C\u5C31\u53EF\u4EE5\u7528\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u6216\u4FBF\u7B7E\u628A\u5B83\u7559\u5728\u8FD9\u91CC\u3002"}),(0,Te.jsxs)("ol",{className:"dshr-anno-panel__steps",children:[(0,Te.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,Te.jsx)("span",{className:"dshr-anno-panel__step-index",children:"1"})," \u9009\u4E2D\u6B63\u6587\u4E2D\u7684\u4E00\u6BB5\u6587\u5B57"]}),(0,Te.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,Te.jsx)("span",{className:"dshr-anno-panel__step-index",children:"2"})," \u9009\u62E9\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u6216\u4FBF\u7B7E"]}),(0,Te.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,Te.jsx)("span",{className:"dshr-anno-panel__step-index",children:"3"})," \u4E4B\u540E\u56DE\u5230\u8FD9\u91CC\u56DE\u770B\u3001\u8DF3\u8F6C"]})]}),(0,Te.jsx)("p",{className:"dshr-anno-panel__hint",children:"PDF \u9875\u9762\u540C\u6837\u652F\u6301\uFF1A\u9009\u4E2D\u6587\u5B57\u540E\u70B9\u51FB\u300C\u6807\u6CE8\u300D\u5373\u53EF\u3002"})]})}function Eu({open:t,annotations:e,book:r,onClose:n,onOpenAnnotation:o,onJump:a,onDelete:i}){let[s,l]=Hi.default.useState("all"),d=Hi.default.useMemo(()=>Cg(r),[r]);if(Hi.default.useEffect(()=>{if(!t||typeof document>"u")return;let b=S=>{S.key!=="Escape"||typeof n!="function"||document.querySelector(".dshr-anno-composer")||(S.preventDefault(),n())};return document.addEventListener("keydown",b,!0),()=>document.removeEventListener("keydown",b,!0)},[n,t]),!t)return null;let h=(Array.isArray(e)?e:[]).filter(Boolean),p={all:h.length};for(let b=0;b<Mo.length;b+=1){let S=Mo[b].id;p[S]=h.filter(y=>y.style===S).length}let u=Ig(h,d,s),g=s==="all"?h.length:h.filter(b=>b.style===s).length,w=(b,S)=>{typeof b=="function"&&b(S)};return(0,Te.jsxs)("aside",{className:"dshr-anno-panel","aria-label":"\u6807\u6CE8\u7B14\u8BB0\u9762\u677F",children:[(0,Te.jsxs)("header",{className:"dshr-anno-panel__head",children:[(0,Te.jsxs)("div",{className:"dshr-anno-panel__titles",children:[(0,Te.jsxs)("h3",{className:"dshr-anno-panel__title",children:["\u6807\u6CE8\u7B14\u8BB0",(0,Te.jsx)("span",{className:"dshr-anno-panel__count",children:h.length})]}),(0,Te.jsx)("span",{className:"dshr-anno-panel__sub",children:h.length>0?`${g} \u6761\u6807\u6CE8 \xB7 ${u.length} \u4E2A\u4F4D\u7F6E`:"\u9009\u4E2D\u6587\u5B57\u5373\u53EF\u6DFB\u52A0\u6807\u6CE8"})]}),(0,Te.jsx)("button",{type:"button",className:"dshr-anno-panel__close","aria-label":"\u5173\u95ED\u6807\u6CE8\u9762\u677F",onClick:()=>w(n),children:(0,Te.jsx)(vi,{size:13})})]}),h.length>0?(0,Te.jsx)("div",{className:"dshr-anno-panel__filters",role:"tablist","aria-label":"\u6309\u6837\u5F0F\u7B5B\u9009\u6807\u6CE8",children:Ng.map(b=>{let S=s===b.id,y=p[b.id]||0;return(0,Te.jsxs)("button",{type:"button",role:"tab","aria-selected":S,className:`dshr-anno-panel__filter${S?" is-active":""}`,onClick:()=>l(b.id),children:[b.label,b.id==="all"?` ${y}`:y>0?` ${y}`:""]},b.id)})}):null,(0,Te.jsx)("div",{className:"dshr-anno-panel__list",children:u.length===0?(0,Te.jsx)(Rg,{hasAny:h.length>0,filter:s}):u.map(b=>(0,Te.jsxs)("section",{className:"dshr-anno-panel__group",children:[(0,Te.jsxs)("div",{className:"dshr-anno-panel__group-head",children:[(0,Te.jsx)("span",{className:"dshr-anno-panel__group-title",title:b.title,children:b.title}),(0,Te.jsx)("span",{className:"dshr-anno-panel__group-rule"}),(0,Te.jsx)("span",{className:"dshr-anno-panel__group-count",children:b.items.length})]}),b.items.map(S=>{let y=S.style||"highlight",k=Eg[y]||to,E=S.color||"#f5d76e",A=typeof S.quote=="string"?S.quote.trim():"",T=typeof S.note=="string"?S.note.trim():"",C=Tu(S,d),O=Su(S)?Number(S.page)>0?`\u7B2C ${S.page} \u9875`:"PDF":C?`\u7B2C ${C.index+1} \u7AE0`:"\u6B63\u6587",R=Ag(S.updatedAt||S.createdAt);return(0,Te.jsxs)("article",{className:"dshr-anno-item",style:{"--dshr-anno-color":E},"data-anno-id":S.id||void 0,children:[(0,Te.jsxs)("button",{type:"button",className:"dshr-anno-item__main",onClick:()=>w(o,S.id),title:"\u7F16\u8F91\u8FD9\u6761\u6807\u6CE8",children:[(0,Te.jsxs)("div",{className:"dshr-anno-item__meta",children:[(0,Te.jsx)("span",{className:"dshr-anno-item__dot","aria-hidden":"true"}),(0,Te.jsxs)("span",{className:"dshr-anno-item__style",children:[(0,Te.jsx)(k,{size:12})," ",Ps(y)]}),(0,Te.jsx)("span",{className:"dshr-anno-item__sep","aria-hidden":"true",children:"\xB7"}),(0,Te.jsx)("span",{className:"dshr-anno-item__location",children:O}),(0,Te.jsx)("span",{className:"dshr-anno-item__spacer"}),R?(0,Te.jsx)("span",{children:R}):null]}),(0,Te.jsx)("p",{className:"dshr-anno-item__quote",children:A||T||"\uFF08\u672A\u8BB0\u5F55\u9009\u4E2D\u6587\u5B57\uFF09"}),T&&T!==A?(0,Te.jsx)("p",{className:"dshr-anno-item__note",children:T}):null]}),(0,Te.jsxs)("div",{className:"dshr-anno-item__actions",children:[(0,Te.jsx)("button",{type:"button",className:"dshr-anno-item__action dshr-anno-item__action--jump",onClick:()=>w(a,S),title:"\u8DF3\u8F6C\u5230\u8FD9\u6761\u6807\u6CE8\u7684\u4F4D\u7F6E",children:"\u5B9A\u4F4D"}),(0,Te.jsx)("span",{className:"dshr-anno-item__spacer"}),(0,Te.jsx)("button",{type:"button",className:"dshr-anno-item__action dshr-anno-item__action--danger",onClick:()=>w(i,S),title:"\u5220\u9664\u8FD9\u6761\u6807\u6CE8",children:"\u5220\u9664"})]})]},S.id||`${b.key}:${A}`)})]},b.key))})]})}var fn=It(require("react"),1);var Me=require("react/jsx-runtime"),Nu={highlight:to,underline:xi,note:jn},Mg={highlight:"\u7528\u534A\u900F\u660E\u7684\u8272\u5E26\u8986\u76D6\u9009\u4E2D\u6587\u5B57\uFF0C\u53EF\u8C03\u7B14\u89E6\u7C97\u7EC6\u3002",underline:"\u5728\u9009\u4E2D\u6587\u5B57\u4E0B\u65B9\u753B\u4E00\u6761\u624B\u5199\u5F0F\u4E0B\u5212\u7EBF\u3002",note:"\u5728\u9009\u4E2D\u6587\u5B57\u65C1\u653E\u4E00\u679A\u4FBF\u7B7E\uFF0C\u8BB0\u5F55\u6B64\u523B\u7684\u60F3\u6CD5\u3002"},Au=2e3,sl=ua[1].value;function ll(t){return t==="underline"?md:gd}function Iu(t){return Object.prototype.hasOwnProperty.call(Ro,t)?t:"highlight"}function Pg(t){let e=Number(t);if(!Number.isFinite(e))return sl;let r=sl,n=1/0;for(let o=0;o<ua.length;o+=1){let a=ua[o].value,i=Math.abs(a-e);i<n&&(r=a,n=i)}return r}function Cu(t){let e=t&&typeof t=="object"?t:{},r=Iu(e.style),n=ll(r),o=n.find(a=>a.value===e.color);return{style:r,color:o?o.value:typeof e.color=="string"&&e.color?e.color:n[0].value,width:Pg(e.width),note:typeof e.note=="string"?e.note:"",quote:typeof e.quote=="string"?e.quote:""}}function Og(t,e){if(!t||typeof t!="object")return`${e}:empty`;let r=typeof t.quote=="string"?t.quote:"";return[e,t.id||"",r,Array.isArray(t.ranges)?t.ranges.length:0,t.page==null?"":t.page,t.chapterId==null?"":t.chapterId].join("|")}function Lg(t){return`${Math.round(2+(Number(t)||sl)*.34)}px`}function Ru({open:t,draft:e,mode:r,onClose:n,onSave:o,onDelete:a}){let i=r==="edit",[s,l]=fn.default.useState(()=>Cu(e)),d=fn.default.useRef(""),h=fn.default.useRef(null);fn.default.useEffect(()=>{if(!t){d.current="";return}let T=Og(e,r);d.current!==T&&(d.current=T,l(Cu(e)))},[e,r,t]),fn.default.useEffect(()=>{if(!t||typeof window>"u")return;let T=window.setTimeout(()=>{let C=h.current;if(C)try{C.focus({preventScroll:!0}),C.setSelectionRange(C.value.length,C.value.length)}catch{}},30);return()=>window.clearTimeout(T)},[t]);let p=fn.default.useCallback(T=>{l(C=>({...C,...T}))},[]),u=fn.default.useCallback(T=>{let C=Iu(T);l(O=>{let R=ll(C),m=R.some(M=>M.value===O.color);return{...O,style:C,color:m?O.color:R[0].value}})},[]),g=fn.default.useCallback(()=>{if(!s.note.trim()&&!s.quote.trim()&&s.style==="note")return;let C={...e&&typeof e=="object"?e:{},style:s.style,color:s.color,width:s.width,note:s.note,quote:s.quote};typeof o=="function"&&o(C)},[e,o,s]);if(fn.default.useEffect(()=>{if(!t||typeof document>"u")return;let T=C=>{if(C.key==="Escape"){C.preventDefault(),C.stopImmediatePropagation(),typeof n=="function"&&n();return}C.key==="Enter"&&(C.metaKey||C.ctrlKey)&&(C.preventDefault(),C.stopImmediatePropagation(),g())};return document.addEventListener("keydown",T,!0),()=>document.removeEventListener("keydown",T,!0)},[g,n,t]),!t)return null;let w=ll(s.style),b=Nu[s.style]||to,S=s.quote.trim(),y=!!(s.note.trim()||S||s.style!=="note"),k=s.style==="note"?"\u4FBF\u7B7E\u5185\u5BB9":"\u5907\u6CE8",E=s.style==="note"?"\u5199\u4E0B\u8FD9\u6BB5\u6587\u5B57\u7ED9\u4F60\u7684\u60F3\u6CD5\u2026":"\u53EF\u9009\uFF1A\u4E3A\u8FD9\u6761\u6807\u6CE8\u5199\u4E00\u6761\u5907\u6CE8\u2026",A=s.style==="underline"?"\u4E0B\u5212\u7EBF\u989C\u8272":s.style==="note"?"\u4FBF\u7B7E\u989C\u8272":"\u8367\u5149\u7B14\u989C\u8272";return(0,Me.jsx)("div",{className:"dshr-anno-composer-mask",role:"presentation",onMouseDown:T=>{T.target===T.currentTarget&&typeof n=="function"&&n()},children:(0,Me.jsxs)("div",{className:"dshr-anno-composer",role:"dialog","aria-modal":"true","aria-label":i?"\u7F16\u8F91\u6807\u6CE8":"\u6DFB\u52A0\u6807\u6CE8",onMouseDown:T=>T.stopPropagation(),children:[(0,Me.jsxs)("header",{className:"dshr-anno-composer__head",children:[(0,Me.jsxs)("div",{className:"dshr-anno-composer__titles",children:[(0,Me.jsx)("h3",{className:"dshr-anno-composer__title",children:i?"\u7F16\u8F91\u6807\u6CE8":"\u6DFB\u52A0\u6807\u6CE8"}),(0,Me.jsx)("span",{className:"dshr-anno-composer__sub",children:Mg[s.style]})]}),(0,Me.jsx)("button",{type:"button",className:"dshr-anno-composer__close","aria-label":"\u5173\u95ED\u6807\u6CE8\u7F16\u8F91\u5668",onClick:()=>{typeof n=="function"&&n()},children:(0,Me.jsx)(vi,{size:13})})]}),(0,Me.jsxs)("div",{className:"dshr-anno-composer__body",children:[(0,Me.jsx)("div",{className:"dshr-anno-composer__tabs",role:"tablist","aria-label":"\u6807\u6CE8\u6837\u5F0F",children:Mo.map(T=>{let C=Nu[T.id]||to,O=s.style===T.id;return(0,Me.jsxs)("button",{type:"button",role:"tab","aria-selected":O,className:`dshr-anno-composer__tab${O?" is-active":""}`,onClick:()=>u(T.id),children:[(0,Me.jsx)(C,{size:14})," ",T.label]},T.id)})}),(0,Me.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Me.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Me.jsx)("span",{children:A}),(0,Me.jsx)("em",{children:s.style==="underline"?"\u7EB8\u4E0A\u7684\u58A8\u8272":"\u534A\u900F\u660E\u7B14\u89E6"})]}),(0,Me.jsx)("div",{className:"dshr-anno-composer__swatches",role:"radiogroup","aria-label":A,children:w.map(T=>{let C=s.color===T.value;return(0,Me.jsx)("button",{type:"button",role:"radio","aria-checked":C,"aria-label":`${T.label}\u8272`,title:`${T.label}\u8272`,className:`dshr-anno-swatch${C?" is-active":""}`,style:{"--swatch":T.value},onClick:()=>p({color:T.value}),children:T.label},T.id)})})]}),s.style==="highlight"?(0,Me.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Me.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Me.jsx)("span",{children:"\u7B14\u89E6\u7C97\u7EC6"}),(0,Me.jsx)("em",{children:"\u7EC6 / \u4E2D / \u5BBD"})]}),(0,Me.jsx)("div",{className:"dshr-anno-composer__widths",role:"radiogroup","aria-label":"\u7B14\u89E6\u7C97\u7EC6",children:ua.map(T=>{let C=s.width===T.value;return(0,Me.jsxs)("button",{type:"button",role:"radio","aria-checked":C,className:`dshr-anno-width${C?" is-active":""}`,onClick:()=>p({width:T.value}),children:[(0,Me.jsx)("span",{className:"dshr-anno-width__bar",style:{height:Lg(T.value),background:s.color}}),T.label]},T.id)})})]}):null,(0,Me.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Me.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Me.jsx)("span",{children:k}),(0,Me.jsx)("em",{children:s.style==="note"?"\u53EF\u7559\u7A7A\uFF0C\u4EC5\u6807\u8BB0\u4F4D\u7F6E":"\u53EF\u9009"})]}),(0,Me.jsx)("textarea",{ref:h,className:"dshr-anno-composer__textarea",value:s.note,maxLength:Au,placeholder:E,"aria-label":k,onChange:T=>p({note:T.target.value})}),(0,Me.jsxs)("div",{className:"dshr-anno-composer__counter",children:[s.note.length," / ",Au]})]}),S?(0,Me.jsxs)("div",{className:"dshr-anno-composer__quote",style:{"--dshr-anno-color":s.color},children:[(0,Me.jsx)("span",{className:"dshr-anno-composer__quote-label",children:"\u9009\u4E2D\u6587\u5B57"}),(0,Me.jsx)("p",{className:"dshr-anno-composer__quote-text",children:S})]}):null,(0,Me.jsxs)("div",{className:`dshr-anno-composer__preview is-${s.style}`,style:{"--dshr-anno-color":s.color},children:[(0,Me.jsx)("span",{className:"dshr-anno-composer__preview-label",children:"\u6548\u679C\u9884\u89C8"}),(0,Me.jsx)("span",{className:"dshr-anno-composer__preview-text",children:S||"\u9009\u4E2D\u7684\u6587\u5B57\u4F1A\u8FD9\u6837\u663E\u793A"})]})]}),(0,Me.jsxs)("footer",{className:"dshr-anno-composer__foot",children:[i?(0,Me.jsx)("button",{type:"button",className:"dshr-anno-btn dshr-anno-btn--danger",onClick:()=>{typeof a=="function"&&a(e||{})},children:"\u5220\u9664"}):null,(0,Me.jsx)("span",{className:"dshr-anno-composer__spacer"}),(0,Me.jsx)("button",{type:"button",className:"dshr-anno-btn",onClick:()=>{typeof n=="function"&&n()},children:"\u53D6\u6D88"}),(0,Me.jsx)("button",{type:"button",className:"dshr-anno-btn dshr-anno-btn--primary",disabled:!y,onClick:g,title:"Ctrl / \u2318 + Enter \u4FDD\u5B58",children:i?"\u4FDD\u5B58\u4FEE\u6539":"\u4FDD\u5B58\u6807\u6CE8"})]})]})})}var Lt=It(require("react"),1);var Bo={selection:"\u9009\u533A\u8BD1\u6587",paragraph:"\u6240\u5C5E\u6BB5\u843D\u8BD1\u6587"};function Mu(t){return String(t??"").replace(/[!-/:-@[-\x60{-~]/gu,e=>"\\"+e)}var lo=t=>Mu(String(t??"").replace(/\s+/gu," ").trim()),zo=t=>String(t??"").split(/\r\n?|\n/u).map(e=>"> "+Mu(e).replace(/^[ \t]+/u,r=>r.replace(/[ \t]/gu,n=>n==="	"?"&#9;":"&#32;"))).join(`
`);function cl({sections:t,books:e,topic:r}){let n=[r?"# "+lo(r.name):"# \u9605\u8BFB\u8BC1\u636E"];r&&(n.push(`## \u7814\u7A76\u95EE\u9898

`+(r.research?.question?zo(r.research.question):"\u672A\u586B\u5199")),n.push(`## \u4EBA\u5DE5\u7EFC\u5408

`+(r.research?.synthesis?zo(r.research.synthesis):"\u672A\u586B\u5199")));let o=0;for(let a of t)if(a.rows.length){r&&(n.push("## "+lo(a.name)),a.comparison&&n.push(`**\u672C\u7EC4\u6BD4\u8F83**

`+zo(a.comparison)));for(let i of a.rows){let s=Rn(i,e.get(i.bookId));n.push("### "+ ++o+". "+lo(s.title),["- PDF \u7269\u7406\u9875\u7801 "+(Number.isSafeInteger(s.page)&&s.page>0?s.page:"\u5F85\u786E\u8BA4"),"- \u5370\u5237\u9875\u6807 "+(lo(s.printLabel)||"\u672A\u63D0\u4F9B"),"- \u4F5C\u8005 "+(lo(s.author)||"\u672A\u63D0\u4F9B"),"- \u5E74\u4EFD "+(lo(s.year)||"\u672A\u63D0\u4F9B"),"- DOI "+(lo(s.doi)||"\u672A\u63D0\u4F9B")].join(`
`)),n.push(`**\u539F\u6587**

`+zo(i.quote)),i.translation&&n.push("**"+(Bo[i.translation.scope]||"\u8BD1\u6587")+`**

`+zo(i.translation.text)),i.note&&n.push(`**\u5907\u6CE8**

`+zo(i.note))}}return n.join(`

`)+`
`}function dl(t,e){let r=URL.createObjectURL(new Blob([t],{type:"text/markdown;charset=utf-8"}));try{let n=document.createElement("a");n.href=r,n.download=e,n.click()}finally{setTimeout(()=>URL.revokeObjectURL(r),1e3)}}var co=It(require("react"),1);var ze=require("react/jsx-runtime");function Pu({book:t,close:e,save:r}){let[n,o]=co.default.useState({title:t.title||"",author:t.author||"",year:t.year||"",doi:t.doi||""}),[a,i]=co.default.useState(!1),[s,l]=co.default.useState("");async function d(h){if(h.preventDefault(),!a){i(!0),l("");try{await r(t.id,n),e()}catch(p){l(p.message||"\u51FA\u5904\u4FDD\u5B58\u5931\u8D25\u3002")}finally{i(!1)}}}return(0,ze.jsx)("div",{className:"dshr-modal-mask",children:(0,ze.jsxs)("form",{className:"dshr-modal dshr-evidence-dialog",role:"dialog","aria-modal":"true","aria-label":"\u8BBA\u6587\u51FA\u5904",onSubmit:d,onKeyDown:h=>{h.key==="Escape"&&!a&&e()},children:[(0,ze.jsx)("h3",{children:"\u8BBA\u6587\u51FA\u5904"}),(0,ze.jsx)("p",{children:"\u53EF\u6838\u5BF9\u9898\u540D\uFF0C\u5E76\u8865\u5F55\u5DF2\u786E\u8BA4\u7684\u4F5C\u8005\u3001\u5E74\u4EFD\u548C DOI\u3002"}),[["title","\u9898\u540D",300,"\u5FC5\u586B"],["author","\u4F5C\u8005",500,"\u672A\u63D0\u4F9B"],["year","\u5E74\u4EFD",4,"\u672A\u63D0\u4F9B"],["doi","DOI",400,"\u672A\u63D0\u4F9B"]].map(([h,p,u,g])=>(0,ze.jsxs)("label",{children:[p,(0,ze.jsx)("input",{type:"text",autoFocus:h==="title",required:h==="title",inputMode:h==="year"?"numeric":void 0,maxLength:u,placeholder:g,value:n[h],onChange:w=>o(b=>({...b,[h]:w.target.value}))})]},h)),s?(0,ze.jsx)("p",{role:"alert",children:s}):null,(0,ze.jsxs)("div",{className:"dshr-modal__actions",children:[(0,ze.jsx)("button",{type:"button",className:"dshr-btn",onClick:e,disabled:a,children:"\u53D6\u6D88"}),(0,ze.jsx)("button",{type:"submit",className:"dshr-btn dshr-btn--primary",disabled:a,children:"\u4FDD\u5B58\u51FA\u5904"})]})]})})}function Ui(t,e,r){let n=[...t],o=e+r;return[n[e],n[o]]=[n[o],n[e]],n}function Ou({topic:t,rows:e,books:r,save:n,close:o}){let[a,i]=co.default.useState(()=>li(t.research,new Set(e.map(y=>y.id)))),[s,l]=co.default.useState(""),[d,h]=co.default.useState(!1),p=new Map(a.groups.flatMap(y=>y.ids.map(k=>[k,y.id]))),u=new Map(e.map(y=>[y.id,y]));function g(y){i(k=>({...k,groups:y(k.groups)}))}function w(y,k){g(E=>E.map((A,T)=>T===y?{...A,...k}:A))}function b(y,k){g(E=>E.map(A=>({...A,ids:A.id===k?[...A.ids,y]:A.ids.filter(T=>T!==y)})))}async function S(y){if(y.preventDefault(),!d){l(""),h(!0);try{await n(t,a),o()}catch(k){l(k.message||"\u4E13\u9898\u4FDD\u5B58\u5931\u8D25\u3002")}finally{h(!1)}}}return(0,ze.jsxs)("form",{className:"dshr-topic-form",onSubmit:S,children:[(0,ze.jsxs)("label",{children:["\u7814\u7A76\u95EE\u9898",(0,ze.jsx)("textarea",{value:a.question,maxLength:1e3,onChange:y=>i({...a,question:y.target.value})})]}),(0,ze.jsxs)("label",{children:["\u4EBA\u5DE5\u7EFC\u5408",(0,ze.jsx)("textarea",{value:a.synthesis,maxLength:2e4,onChange:y=>i({...a,synthesis:y.target.value})})]}),a.groups.map((y,k)=>(0,ze.jsxs)("fieldset",{children:[(0,ze.jsxs)("legend",{children:["\u5206\u7EC4 ",k+1]}),(0,ze.jsxs)("label",{children:["\u5206\u7EC4\u540D\u79F0",(0,ze.jsx)("input",{value:y.name,maxLength:80,required:!0,onChange:E=>w(k,{name:E.target.value})})]}),(0,ze.jsxs)("label",{children:["\u672C\u7EC4\u6BD4\u8F83",(0,ze.jsx)("textarea",{value:y.comparison||"",maxLength:1e4,onChange:E=>w(k,{comparison:E.target.value})})]}),(0,ze.jsxs)("div",{className:"dshr-evidence-actions",children:[(0,ze.jsx)("button",{type:"button",className:"dshr-btn",disabled:k===0,onClick:()=>g(E=>Ui(E,k,-1)),children:"\u4E0A\u79FB\u5206\u7EC4"}),(0,ze.jsx)("button",{type:"button",className:"dshr-btn",disabled:k===a.groups.length-1,onClick:()=>g(E=>Ui(E,k,1)),children:"\u4E0B\u79FB\u5206\u7EC4"}),(0,ze.jsx)("button",{type:"button",className:"dshr-btn",onClick:()=>g(E=>E.filter(A=>A.id!==y.id)),children:"\u79FB\u9664\u5206\u7EC4"})]}),(0,ze.jsx)("ol",{children:y.ids.filter(E=>u.has(E)).map((E,A)=>{let T=u.get(E);return(0,ze.jsxs)("li",{children:[Rn(T,r.get(T.bookId)).title," \xB7 ",T.quote.slice(0,48),(0,ze.jsx)("button",{type:"button",className:"dshr-btn",disabled:A===0,onClick:()=>w(k,{ids:Ui(y.ids,A,-1)}),children:"\u4E0A\u79FB\u8BC1\u636E"}),(0,ze.jsx)("button",{type:"button",className:"dshr-btn",disabled:A===y.ids.length-1,onClick:()=>w(k,{ids:Ui(y.ids,A,1)}),children:"\u4E0B\u79FB\u8BC1\u636E"})]},E)})})]},y.id)),(0,ze.jsx)("button",{type:"button",className:"dshr-btn",onClick:()=>g(y=>[...y,{id:crypto.randomUUID(),name:"",ids:[]}]),children:"\u65B0\u5EFA\u5206\u7EC4"}),e.length&&a.groups.length?(0,ze.jsxs)("fieldset",{children:[(0,ze.jsx)("legend",{children:"\u8BC1\u636E\u5F52\u7EC4"}),e.map(y=>(0,ze.jsxs)("label",{"data-topic-record":y.id,children:[Rn(y,r.get(y.bookId)).title," \xB7 ",y.quote.slice(0,65),(0,ze.jsxs)("select",{value:p.get(y.id)||"",onChange:k=>b(y.id,k.target.value),children:[(0,ze.jsx)("option",{value:"",children:"\u672A\u5206\u7EC4"}),a.groups.map((k,E)=>(0,ze.jsx)("option",{value:k.id,children:k.name||"\u5206\u7EC4 "+(E+1)},k.id))]})]},y.id))]}):null,s?(0,ze.jsx)("p",{role:"alert",children:s}):null,(0,ze.jsxs)("div",{className:"dshr-modal__actions",children:[(0,ze.jsx)("button",{type:"button",className:"dshr-btn",onClick:o,disabled:d,children:"\u53D6\u6D88\u7F16\u8F91\u4E13\u9898"}),(0,ze.jsx)("button",{type:"submit",className:"dshr-btn dshr-btn--primary",disabled:d,children:"\u4FDD\u5B58\u4E13\u9898"})]})]})}var U=require("react/jsx-runtime");function Lu({title:t,close:e,children:r}){return Lt.default.useEffect(()=>{let n=o=>{o.key==="Escape"&&(o.preventDefault(),e())};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[e]),(0,U.jsx)("div",{className:"dshr-modal-mask",onMouseDown:n=>{n.target===n.currentTarget&&e()},children:(0,U.jsxs)("div",{className:"dshr-modal dshr-evidence-dialog",role:"dialog","aria-modal":"true","aria-label":t,children:[(0,U.jsx)("h3",{children:t}),r]})})}function Du({evidence:t}){let{draft:e,busy:r,problem:n}=t,[o,a]=Lt.default.useState(e.note),[i,s]=Lt.default.useState(e.translation?"0":""),[l,d]=Lt.default.useState(""),h=Lt.default.useRef(!1);Lt.default.useEffect(()=>{let u=!0;return e.printLabelRequest?.then(g=>{u&&!h.current&&d(g.slice(0,80))}),()=>{u=!1}},[e.printLabelRequest]);let p=i===""?null:e.options[Number(i)];return(0,U.jsxs)(Lu,{title:e.old?"\u786E\u8BA4\u91CD\u65B0\u5173\u8054\u8BC1\u636E":"\u4FDD\u5B58\u8BC1\u636E",close:t.closeDraft,children:[(0,U.jsxs)("p",{children:[e.source.title," \xB7 PDF \u7B2C ",e.source.anchor.page," \u9875"]}),e.old?(0,U.jsx)("p",{children:"\u672C\u6B21\u4F1A\u7528\u65B0\u9009\u533A\u66F4\u65B0\u8BC1\u636E\u539F\u6587\u548C\u51FA\u5904\u3002"}):null,(0,U.jsx)("blockquote",{children:e.source.quote}),(0,U.jsxs)("label",{children:["\u5370\u5237\u9875\u6807\uFF08\u53EF\u9009\uFF09",(0,U.jsx)("input",{value:l,maxLength:80,placeholder:"\u672A\u63D0\u4F9B",onChange:u=>{h.current=!0,d(u.target.value)}})]}),(0,U.jsxs)("label",{children:["\u5907\u6CE8\uFF08\u53EF\u9009\uFF09",(0,U.jsx)("textarea",{value:o,maxLength:2e4,onChange:u=>a(u.target.value)})]}),e.options.length?(0,U.jsxs)("label",{children:["\u8BD1\u6587\u5FEB\u7167",(0,U.jsxs)("select",{value:i,onChange:u=>s(u.target.value),children:[(0,U.jsx)("option",{value:"",children:"\u6682\u4E0D\u9644\u8BD1\u6587"}),e.options.map((u,g)=>(0,U.jsx)("option",{value:g,children:Bo[u.scope]},u.scope))]})]}):(0,U.jsx)("p",{children:"\u53EF\u5148\u4FDD\u5B58\u539F\u6587\uFF0C\u4E4B\u540E\u8865\u5145\u8BD1\u6587\u3002"}),p?(0,U.jsx)("blockquote",{children:p.text}):null,n?(0,U.jsx)("p",{role:"alert",children:n}):null,(0,U.jsxs)("div",{className:"dshr-modal__actions",children:[(0,U.jsx)("button",{type:"button",className:"dshr-btn",disabled:r,onClick:t.closeDraft,children:"\u53D6\u6D88"}),(0,U.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--primary",disabled:r,onClick:()=>t.saveDraft({note:o,translation:p,printLabel:l}),children:e.old?"\u786E\u8BA4\u66F4\u65B0\u51FA\u5904":"\u4FDD\u5B58\u8BC1\u636E"})]})]})}function Dg({record:t,evidence:e,book:r,collections:n,selected:o,onSelect:a,exportOne:i}){let s=!r,l=Rn(t,r),[d,h]=Lt.default.useState(null),[p,u]=Lt.default.useState(!1),g=Lt.default.useRef(null),w=In(t.identity),b=s?"\u539F\u6587\u7F3A\u5931":w?"\u53D6\u8BC1\u7248\u672C\u5DF2\u8BB0\u5F55":t.identityError?"\u6838\u9A8C\u5931\u8D25":"\u6587\u4EF6\u8EAB\u4EFD\u5F85\u786E\u8BA4";function S(y){h(k=>({...k,...y}))}return(0,U.jsxs)("article",{className:"dshr-evidence-card","data-evidence-id":t.id,"data-evidence-state":b,children:[(0,U.jsxs)("strong",{children:[l.title," \xB7 ",l.page?`PDF \u7269\u7406\u9875 ${l.page}`:"PDF \u9875\u7801\u5F85\u786E\u8BA4"]}),(0,U.jsxs)("p",{children:["\u5370\u5237\u9875\u6807 ",l.printLabel||"\u672A\u63D0\u4F9B"," \xB7 \u4F5C\u8005 ",l.author||"\u672A\u63D0\u4F9B"," \xB7 \u5E74\u4EFD ",l.year||"\u672A\u63D0\u4F9B"," \xB7 DOI ",l.doi||"\u672A\u63D0\u4F9B"]}),(0,U.jsxs)("label",{className:"dshr-evidence-checkbox",children:[(0,U.jsx)("input",{type:"checkbox",checked:o,onChange:y=>a(t,y.target.checked)}),"\u9009\u5165\u5BFC\u51FA"]}),(0,U.jsxs)("p",{children:[b," \xB7 ",new Date(t.createdAt).toLocaleString()]}),(0,U.jsx)("blockquote",{children:t.quote}),t.translation?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)("strong",{children:Bo[t.translation.scope]}),(0,U.jsx)("blockquote",{children:t.translation.text})]}):(0,U.jsx)("p",{children:"\u6682\u65E0\u8BD1\u6587\u5FEB\u7167"}),t.note?(0,U.jsx)("p",{className:"dshr-evidence-note",children:t.note}):null,t.identityError&&!w&&!s?(0,U.jsx)("p",{children:t.identityError}):null,(0,U.jsxs)("div",{className:"dshr-evidence-actions",children:[(0,U.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e.busy||s||!w,onClick:()=>e.jump(t),children:"\u56DE\u5230\u539F\u6587"}),!w&&!s?(0,U.jsx)("button",{type:"button",className:"dshr-btn",disabled:e.busy,onClick:()=>e.retry(t),children:"\u91CD\u8BD5\u6838\u9A8C"}):null,(0,U.jsx)("button",{type:"button",className:"dshr-btn",disabled:e.busy,onClick:()=>g.current.click(),children:"\u91CD\u65B0\u5173\u8054 PDF"}),(0,U.jsx)("input",{ref:g,hidden:!0,type:"file",accept:".pdf,application/pdf",onChange:y=>{let k=y.currentTarget.files[0];y.currentTarget.value="",k&&e.pickFile(t,k)}}),e.mismatch?.record.id===t.id?(0,U.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e.busy,onClick:e.reselect,children:"\u6253\u5F00\u8BE5\u7248\u672C\u91CD\u65B0\u9009\u533A"}):null,(0,U.jsx)("button",{type:"button",className:"dshr-btn",onClick:()=>i(t),children:"\u5BFC\u51FA\u8BC1\u636E"}),(0,U.jsx)("button",{type:"button",className:"dshr-btn",disabled:e.busy,onClick:()=>h({note:t.note||"",text:t.translation?.text||"",scope:t.translation?.scope||"selection",topicIds:t.topicIds||[],printLabel:t.printLabel||""}),children:"\u7F16\u8F91\u8BC1\u636E"}),(0,U.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--danger",disabled:e.busy,onClick:()=>u(!0),children:"\u5220\u9664\u8BC1\u636E"})]}),p?(0,U.jsxs)("div",{className:"dshr-evidence-actions",children:[(0,U.jsx)("p",{children:"\u8FD9\u4F1A\u5220\u9664\u8BC1\u636E\u5E76\u79FB\u9664\u76F8\u5173\u4E66\u5355\u4E2D\u7684\u5F15\u7528\u3002"}),(0,U.jsx)("button",{type:"button",className:"dshr-btn",onClick:()=>u(!1),children:"\u53D6\u6D88\u5220\u9664"}),(0,U.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--danger",disabled:e.busy,onClick:()=>{u(!1),e.remove(t)},children:"\u786E\u8BA4\u5220\u9664\u8BC1\u636E"})]}):null,d?(0,U.jsxs)("form",{onSubmit:y=>{y.preventDefault();let k=d.text.trim()?{scope:d.scope,text:d.text.trim(),source:d.scope==="selection"?t.quote:t.translation?.scope==="paragraph"?t.translation.source:""}:null;e.edit(t,{note:d.note,translation:k,topicIds:d.topicIds,printLabel:d.printLabel.trim()}),h(null)},children:[(0,U.jsxs)("label",{children:["\u7F16\u8F91\u5370\u5237\u9875\u6807",(0,U.jsx)("input",{value:d.printLabel,maxLength:80,placeholder:"\u672A\u63D0\u4F9B",onChange:y=>S({printLabel:y.target.value})})]}),(0,U.jsxs)("label",{children:["\u7F16\u8F91\u5907\u6CE8",(0,U.jsx)("textarea",{value:d.note,maxLength:2e4,onChange:y=>S({note:y.target.value})})]}),(0,U.jsxs)("label",{children:["\u5DF2\u6838\u5BF9\u7684\u8BD1\u6587",(0,U.jsx)("textarea",{value:d.text,maxLength:4e4,onChange:y=>S({text:y.target.value})})]}),(0,U.jsxs)("label",{children:["\u8BD1\u6587\u8986\u76D6\u8303\u56F4",(0,U.jsxs)("select",{value:d.scope,onChange:y=>S({scope:y.target.value}),children:[(0,U.jsx)("option",{value:"selection",children:Bo.selection}),t.translation?.scope==="paragraph"?(0,U.jsx)("option",{value:"paragraph",children:Bo.paragraph}):null]})]}),n.length?(0,U.jsxs)("fieldset",{children:[(0,U.jsx)("legend",{children:"\u4E66\u5355\u4E2D\u7684\u8BC1\u636E\u5F15\u7528"}),n.map(y=>(0,U.jsxs)("label",{className:"dshr-evidence-checkbox",children:[(0,U.jsx)("input",{type:"checkbox",checked:d.topicIds.includes(y.id),onChange:k=>S({topicIds:k.target.checked?[...d.topicIds,y.id]:d.topicIds.filter(E=>E!==y.id)})}),y.name]},y.id))]}):null,(0,U.jsxs)("div",{className:"dshr-modal__actions",children:[(0,U.jsx)("button",{type:"button",className:"dshr-btn",onClick:()=>h(null),children:"\u53D6\u6D88\u7F16\u8F91"}),(0,U.jsx)("button",{type:"submit",className:"dshr-btn dshr-btn--primary",disabled:e.busy,children:"\u786E\u8BA4\u4FDD\u5B58\u4FEE\u6539"})]})]}):null]})}function Fu({evidence:t,books:e,collections:r,saveResearch:n}){let[o,a]=Lt.default.useState(t.panel.topicId||""),[i,s]=Lt.default.useState(!1),[l,d]=Lt.default.useState(""),[h,p]=Lt.default.useState(!1),[u,g]=Lt.default.useState(()=>new Set),[w,b]=Lt.default.useState(null),[S,y]=Lt.default.useState(""),[k,E]=Lt.default.useState(0),A=t.panel.bookId,T=Lt.default.useMemo(()=>new Map(e.map(B=>[B.id,B])),[e]),C=r.find(B=>B.id===o),O=Lt.default.useMemo(()=>t.rows.filter(B=>!o||B.topicIds?.includes(o)),[t.rows,o]),R=Lt.default.useMemo(()=>{let B=new Map;for(let V of O)B.set(V.bookId,Rn(V,T.get(V.bookId)).title);return[...B].sort((V,he)=>V[1].localeCompare(he[1]))},[O,T]),m=l||(!C&&!i?A:""),M=m?O.filter(B=>B.bookId===m):O,F=ci(M,C?.research?.groups),L=O.filter(B=>u.has(B.id)),$=40,J=Math.max(0,Math.ceil(M.length/$)-1),se=Math.min(k,J),ne=0;function ce(B){a(B),d(""),E(0),g(new Set),y("")}function G(B,V){g(he=>{let Z=new Set(he);return V?Z.add(B.id):Z.delete(B.id),Z})}function oe(B,V){y(""),b({sections:ci(B,C?.research?.groups),topic:C,count:B.length,scopeName:V})}function ue(){try{dl(cl({...w,books:T}),w.topic?"\u4E13\u9898\u5BF9\u7167\u7B14\u8BB0.md":"\u9605\u8BFB\u8BC1\u636E.md"),b(null),y("\u5DF2\u5C06 Markdown \u4EA4\u7ED9\u6D4F\u89C8\u5668\u4FDD\u5B58\u3002")}catch(B){y(B?.message||"\u65E0\u6CD5\u4FDD\u5B58 Markdown\uFF0C\u8BF7\u91CD\u8BD5\u3002")}}function P(B){try{dl(cl({sections:ci([B]),books:T}),"\u8BC1\u636E-"+B.id+".md"),y("\u5DF2\u5C06 Markdown \u4EA4\u7ED9\u6D4F\u89C8\u5668\u4FDD\u5B58\u3002")}catch(V){y(V?.message||"\u65E0\u6CD5\u4FDD\u5B58 Markdown\uFF0C\u8BF7\u91CD\u8BD5\u3002")}}return(0,U.jsxs)(Lu,{title:"\u8BC1\u636E\u5E93",close:t.closePanel,children:[h&&C?(0,U.jsx)(Ou,{topic:C,rows:O,books:T,save:n,close:()=>p(!1)}):w?(0,U.jsxs)("section",{"aria-label":"Markdown \u5BFC\u51FA\u8303\u56F4",children:[(0,U.jsx)("h4",{children:"\u786E\u8BA4\u5BFC\u51FA\u8303\u56F4"}),(0,U.jsxs)("p",{children:[w.scopeName," \xB7 ",w.count," \u6761\u8BC1\u636E"]}),w.sections.filter(B=>B.rows.length).map(B=>(0,U.jsxs)("div",{children:[w.topic?(0,U.jsx)("strong",{children:B.name}):null,(0,U.jsx)("ol",{children:B.rows.map(V=>{let he=Rn(V,T.get(V.bookId));return(0,U.jsxs)("li",{children:[he.title," \xB7 PDF \u7269\u7406\u9875 ",he.page||"\u5F85\u786E\u8BA4"]},V.id)})})]},B.id)),S?(0,U.jsx)("p",{role:"alert",children:S}):null,(0,U.jsxs)("div",{className:"dshr-evidence-actions",children:[(0,U.jsx)("button",{type:"button",className:"dshr-btn",onClick:()=>b(null),children:"\u53D6\u6D88\u5BFC\u51FA"}),(0,U.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:ue,children:"\u786E\u8BA4\u5BFC\u51FA Markdown"})]})]}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)("div",{className:"dshr-evidence-actions",children:[A&&!C?(0,U.jsx)("button",{type:"button",className:"dshr-btn","aria-pressed":i,onClick:()=>{s(B=>!B),E(0)},children:i?"\u67E5\u770B\u5F53\u524D\u8BBA\u6587":"\u67E5\u770B\u5168\u90E8\u8BC1\u636E"}):null,r.length?(0,U.jsxs)("label",{children:["\u6309\u4E66\u5355\u67E5\u770B",(0,U.jsxs)("select",{value:C?.id||"",onChange:B=>ce(B.target.value),children:[(0,U.jsx)("option",{value:"",children:"\u6240\u6709\u4E66\u5355"}),r.map(B=>(0,U.jsx)("option",{value:B.id,children:B.name},B.id))]})]}):null,C?(0,U.jsxs)("label",{children:["\u6309\u8BBA\u6587\u7B5B\u9009",(0,U.jsxs)("select",{value:l,onChange:B=>{d(B.target.value),E(0)},children:[(0,U.jsx)("option",{value:"",children:"\u5168\u90E8\u8BBA\u6587"}),R.map(([B,V])=>(0,U.jsx)("option",{value:B,children:V},B))]})]}):null,(0,U.jsxs)("span",{role:"status",children:[M.length," \u6761\u8BC1\u636E"]})]}),C?(0,U.jsxs)("section",{className:"dshr-topic-summary",children:[(0,U.jsx)("h4",{children:C.name}),(0,U.jsxs)("p",{children:[(0,U.jsx)("strong",{children:"\u7814\u7A76\u95EE\u9898"})," ",C.research?.question||"\u672A\u586B\u5199"]}),(0,U.jsxs)("p",{children:[(0,U.jsx)("strong",{children:"\u4EBA\u5DE5\u7EFC\u5408"})," ",C.research?.synthesis||"\u672A\u586B\u5199"]}),(0,U.jsxs)("div",{className:"dshr-evidence-actions",children:[(0,U.jsx)("button",{type:"button",className:"dshr-btn",disabled:t.busy,onClick:()=>p(!0),children:"\u7F16\u8F91\u4E13\u9898"}),(0,U.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:t.busy||!O.length,onClick:()=>oe(O,"\u6574\u4E13\u9898"),children:"\u5BFC\u51FA\u6574\u4E13\u9898"})]})]}):null,(0,U.jsxs)("div",{className:"dshr-evidence-actions",children:[(0,U.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:t.busy||!L.length,onClick:()=>oe(L,"\u6240\u9009\u8BC1\u636E"),children:"\u5BFC\u51FA\u6240\u9009\u8BC1\u636E"}),L.length?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)("span",{children:["\u5DF2\u9009 ",L.length," \u6761"]}),(0,U.jsx)("button",{type:"button",className:"dshr-btn",onClick:()=>g(new Set),children:"\u6E05\u7A7A\u9009\u62E9"})]}):null]}),S?(0,U.jsx)("p",{role:"status",children:S}):null,t.problem?(0,U.jsx)("p",{role:"alert",children:t.problem}):null,M.length?F.map(B=>{let V=se*$,he=B.rows.slice(Math.max(0,V-ne),Math.max(0,V+$-ne));return ne+=B.rows.length,he.length?(0,U.jsxs)("section",{"data-evidence-group":B.name,children:[C?(0,U.jsx)("h4",{children:B.name}):null,B.comparison?(0,U.jsx)("p",{className:"dshr-evidence-note",children:B.comparison}):null,he.map(Z=>(0,U.jsx)(Dg,{record:Z,evidence:t,collections:r,book:T.get(Z.bookId),exportOne:P,selected:u.has(Z.id),onSelect:G},Z.id))]},B.id):null}):(0,U.jsx)("p",{children:"\u5F53\u524D\u8303\u56F4\u6CA1\u6709\u8BC1\u636E\u3002\u53EF\u4ECE PDF \u4FDD\u5B58\u8BC1\u636E\uFF0C\u518D\u5C06\u5B83\u52A0\u5165\u4E66\u5355\u3002"}),J?(0,U.jsxs)("div",{className:"dshr-evidence-actions","aria-label":"\u8BC1\u636E\u5217\u8868\u5206\u9875",children:[(0,U.jsx)("button",{type:"button",className:"dshr-btn",disabled:se===0,onClick:()=>E(se-1),children:"\u4E0A\u4E00\u6279"}),(0,U.jsxs)("span",{children:[se+1," / ",J+1]}),(0,U.jsx)("button",{type:"button",className:"dshr-btn",disabled:se===J,onClick:()=>E(se+1),children:"\u4E0B\u4E00\u6279"})]}):null]}),(0,U.jsx)("div",{className:"dshr-modal__actions",children:(0,U.jsx)("button",{type:"button",className:"dshr-btn",disabled:t.busy,onClick:t.closePanel,children:"\u5173\u95ED\u8BC1\u636E\u5E93"})})]})}var Jr=It(require("react"),1);var ul=()=>crypto.randomUUID(),Fg=({record:t,anchor:e,quote:r})=>({bookId:t.id,title:t.title,author:t.author,year:t.year||"",doi:t.doi||"",fileRevision:t.fileRevision??null,anchor:e,quote:r,sourceRevision:ul()});function zu({currentRef:t,navigation:e,openBook:r,refreshBooks:n,showToast:o}){let[a,i]=Jr.default.useState([]),[s,l]=Jr.default.useState(null),[d,h]=Jr.default.useState(null),[p,u]=Jr.default.useState(null),[g,w]=Jr.default.useState(!1),[b,S]=Jr.default.useState(""),[y,k]=Jr.default.useState(null),[E,A]=Jr.default.useState(null),T=Jr.default.useRef(!1),C=Jr.default.useRef(0);async function O(){let P=++C.current,B=await hi();P===C.current&&i(B)}async function R(P){if(!T.current){T.current=!0,w(!0),S("");try{await P()}catch(B){S(B?.message||"\u8BC1\u636E\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002")}finally{T.current=!1,w(!1)}}}function m(P="",B=""){l({bookId:P,topicId:B}),k(null),R(O)}async function M(P,B){let V=await si(B);await Co(P.id,{identity:V,identityError:""},P.sourceRevision),await O()}function F(P,B){let V=t.current;if(V?.kind!=="pdf"||!P.evidenceAnchor)return;let he=E?.blob===V.data?E.record:null,Z=[B?.status==="done"&&B.zh?.trim()?{scope:"selection",text:B.zh,source:P.text}:null,P.paragraphTranslation].filter(Boolean);S(""),h({id:he?.id||ul(),old:he,blob:V.data,source:Fg({record:V.record,anchor:P.evidenceAnchor,quote:P.text}),options:Z,note:he?.note||"",translation:Z[0]||null,printLabelRequest:P.printLabelRequest})}function L({note:P,translation:B,printLabel:V}){d&&R(async()=>{let{old:he,blob:Z,source:Pe,id:de}=d,_e={...Pe,note:P,translation:B,printLabel:V.trim().slice(0,80),identity:null,identityError:""},Ve=he?await Co(de,_e,he.sourceRevision):{id:de,..._e,topicIds:[],createdAt:Date.now(),updatedAt:Date.now()};if(!Ve)throw new Error("\u8BC1\u636E\u6216\u539F\u6587\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u540E\u91CD\u8BD5\u3002");he||await $c(Ve),h(null),A(null),l({bookId:Pe.bookId}),++C.current,i(Ue=>[Ve,...Ue.filter(nt=>nt.id!==Ve.id)]),o("\u8BC1\u636E\u5DF2\u4FDD\u5B58\u3002"),M(Ve,Z).catch(async Ue=>{try{await Co(de,{identityError:Ue?.message||"\u6587\u4EF6\u6838\u9A8C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002"},Pe.sourceRevision),await O()}catch{}})})}async function $(P){let B=await ca(P.bookId);if(!B?.blob)throw new Error("\u539F\u6587\u7F3A\u5931\u3002\u8BF7\u9009\u62E9 PDF \u91CD\u65B0\u5173\u8054\u3002");if(B.format!=="pdf")throw new Error("\u5F53\u524D\u5173\u8054\u4E0D\u662F PDF\uFF0C\u8BF7\u91CD\u65B0\u5173\u8054\u3002");return B}function J(P){R(async()=>{let B=await $(P);if((B.fileRevision??null)!==P.fileRevision)throw new Error("\u53D6\u8BC1\u65F6\u7684\u7248\u672C\u5C1A\u672A\u786E\u8BA4\uFF0C\u5F53\u524D\u6587\u4EF6\u5DF2\u66F4\u65B0\u3002\u8BF7\u9009\u62E9\u6587\u4EF6\u540E\u91CD\u65B0\u9009\u533A\u3002");await M(P,B.blob)})}function se(P){if(T.current)return;let B=++e.current;u(null),R(async()=>{if(!In(P.identity))throw new Error("\u6587\u4EF6\u8EAB\u4EFD\u5F85\u786E\u8BA4\uFF0C\u6838\u9A8C\u5B8C\u6210\u540E\u53EF\u5B9A\u4F4D\u3002");let V=await $(P),he=t.current,Z=he?.kind==="pdf"&&he.record.id===V.id&&he.record.fileRevision===V.fileRevision?he.data:V.blob,Pe=await si(Z);if(B===e.current){if(!vs(P.identity,Pe))throw new Error("\u6587\u4EF6\u7248\u672C\u4E0D\u4E00\u81F4\u3002\u8BF7\u9009\u62E9\u6B63\u786E\u539F\u6587\uFF0C\u6216\u91CD\u65B0\u9009\u533A\u786E\u8BA4\u51FA\u5904\u3002");Z!==t.current?.data&&!await r(V,{verifiedRecord:V,token:B})||B===e.current&&(l(null),u({token:B,blob:Z,anchor:P.anchor,quote:P.quote}))}})}function ne(P,B){P===e.current&&(B==="exact"&&o("\u5DF2\u7CBE\u786E\u5B9A\u4F4D\u539F\u6587\u3002"),B==="page"&&o("\u4EC5\u5B9A\u4F4D\u5230 PDF \u9875\u3002\u8BF7\u6838\u5BF9\u539F\u6587\u540E\u91CD\u65B0\u9009\u533A\u3002",4500),B==="unavailable"&&o("\u65E0\u6CD5\u786E\u8BA4\u6709\u6548\u9875\u7801\uFF0C\u8BF7\u91CD\u65B0\u6838\u5BF9\u539F\u6587\u3002",4500))}function ce(P,B){R(async()=>{if(k(null),!/\.pdf$/i.test(B.name)||!(await B.slice(0,1024).text()).includes("%PDF-"))throw new Error("\u8BF7\u9009\u62E9\u6709\u6548\u7684 PDF \u6587\u4EF6\u3002");let V=await si(B);if(!vs(P.identity,V)){k({record:P,file:B,identity:V}),S(In(P.identity)?"\u6240\u9009\u6587\u4EF6\u4E0E\u53D6\u8BC1\u7248\u672C\u4E0D\u540C\u3002\u53EF\u6362\u4E00\u4E2A\u6587\u4EF6\uFF0C\u6216\u6253\u5F00\u8BE5\u7248\u672C\u91CD\u65B0\u9009\u62E9\u539F\u6587\u3002":"\u539F\u7248\u672C\u5F85\u786E\u8BA4\u3002\u82E5\u65E0\u6CD5\u6838\u9A8C\u539F\u6587\u4EF6\uFF0C\u8BF7\u5728\u6240\u9009 PDF \u91CD\u65B0\u9009\u62E9\u539F\u6587\u3002");return}let he=await da(B,{fingerprint:V});if(!await Co(P.id,{bookId:he.id,fileRevision:he.fileRevision,sourceRevision:ul(),identityError:""},P.sourceRevision))throw new Error("\u8BC1\u636E\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u540E\u91CD\u8BD5\u3002");l({bookId:he.id}),await n(),await O(),o("\u5DF2\u786E\u8BA4\u540C\u4E00\u6587\u4EF6\u5E76\u91CD\u65B0\u5173\u8054\u3002")})}function G(){if(!y||T.current)return;let P=++e.current;R(async()=>{let{record:B,file:V,identity:he}=y,Z=await da(V,{fingerprint:he});P!==e.current||!await r(Z,{verifiedRecord:Z,token:P})||(A({record:B,blob:Z.blob}),k(null),l(null),o("\u8BF7\u9009\u62E9\u8BE5\u7248\u672C\u7684\u5BF9\u5E94\u539F\u6587\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u91CD\u65B0\u5173\u8054\u6B64\u9009\u533A\u300D\u3002",5e3))})}function oe(P,B){R(async()=>{if(!await Co(P.id,B,P.sourceRevision))throw new Error("\u8BC1\u636E\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u540E\u91CD\u8BD5\u3002");await Promise.all([O(),B.topicIds?n():void 0]),o("\u8BC1\u636E\u5DF2\u66F4\u65B0\u3002")})}function ue(P){R(async()=>{await Hc(P.id),await Promise.all([O(),n()]),o("\u8BC1\u636E\u5DF2\u5220\u9664\uFF0C\u76F8\u5173\u4E66\u5355\u5F15\u7528\u5DF2\u79FB\u9664\u3002")})}return{rows:a,panel:s,draft:d,focus:p,busy:g,problem:b,mismatch:y,replacement:E,refresh:O,show:m,retry:J,jump:se,located:ne,createDraft:F,saveDraft:L,pickFile:ce,reselect:G,edit:oe,remove:ue,closePanel:()=>{T.current||(l(null),k(null),S(""))},closeDraft:()=>{T.current||(h(null),S(""))}}}var cp=360,dp=520;function up(t){try{return t.toDataURL("image/jpeg",.84)}catch{return""}}function p0(t){let e=Number(t.naturalWidth||t.width)||0,r=Number(t.naturalHeight||t.height)||0;if(!e||!r)return"";let n=Math.min(cp/e,dp/r,1),o=document.createElement("canvas");o.width=Math.max(1,Math.round(e*n)),o.height=Math.max(1,Math.round(r*n));let a=o.getContext("2d");return a.fillStyle="#fbf7ee",a.fillRect(0,0,o.width,o.height),a.drawImage(t,0,0,o.width,o.height),up(o)}function f0(t){return new Promise(e=>{let r=new Image;r.decoding="async",r.onload=()=>e(r),r.onerror=()=>e(null),r.src=t})}async function g0(t){if(!t||!String(t.type||"").startsWith("image/"))return"";let e=URL.createObjectURL(t);try{let r=await f0(e);return r?p0(r):""}finally{URL.revokeObjectURL(e)}}async function m0(t,e){let r=await Ei(t,{signal:e}),n,o,a=()=>{o?.cancel(),r.close()};e?.addEventListener("abort",a,{once:!0});try{if(e?.aborted)throw hn();let i=await r.pdf.getPage(1);if(e?.aborted)throw hn();let s=i.getViewport({scale:1}),l=Math.min(cp/s.width,dp/s.height,1.5),d=i.getViewport({scale:l});if(n=document.createElement("canvas"),n.width=Math.max(1,Math.round(d.width)),n.height=Math.max(1,Math.round(d.height)),o=i.render({canvas:n,viewport:d,background:"#ffffff"}),o.onContinue=h=>setTimeout(()=>{e?.aborted?o.cancel():h()},16),await o.promise,e?.aborted)throw hn();return up(n)}finally{e?.removeEventListener("abort",a),await r.close(),n&&(n.width=0,n.height=0)}}async function hp(t,{signal:e}={}){if(e?.aborted)throw hn();if(!t?.blob)return{};let r=String(t.format||"").toLowerCase();try{if(r==="pdf"){let n=await m0(t.blob,e);return n?{cover:n}:{}}if(["epub","mobi","azw","azw3"].includes(r)){let{parseBook:n}=await Promise.resolve().then(()=>(Jl(),Ql)),o=/\.[a-z0-9]+$/iu.test(t.title||"")?t.title:`${t.title||"book"}.${r}`,a=await n(t.blob,{fileName:o,mime:t.blob.type});try{let i="";if(a.cover)try{let s=await fetch(a.cover);i=await g0(await s.blob())}catch{i=""}return{...i?{cover:i}:{},...a.title?{title:a.title}:{},...a.author?{author:a.author}:{},...a.language?{language:a.language}:{}}}finally{a.dispose?.()}}}catch(n){if(e?.aborted)throw hn();console.warn("[dsh-reader] cover generation failed",t.title,n)}return{}}var Y=require("react/jsx-runtime"),ls="dsh-reader:last-book:v1",ec="dsh-reader:session-book:v1",pp=44;function fp(t){let e=/^#?([0-9a-f]{6})$/iu.exec(String(t||"").trim());if(!e)return null;let r=e[1];return{r:parseInt(r.slice(0,2),16),g:parseInt(r.slice(2,4),16),b:parseInt(r.slice(4,6),16)}}function b0(t,e,r){let n=fp(t),o=fp(e);if(!n||!o)return e;let a=Math.max(0,Math.min(1,r));return`#${Vo(n.r*a+o.r*(1-a)).slice(1)}${Vo(n.g*a+o.g*(1-a)).slice(1)}${Vo(n.b*a+o.b*(1-a)).slice(1)}`}function Vo(t){return`#${Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0")}`}function x0(t){let e=document.createElement("canvas");e.width=32,e.height=32;let r=e.getContext("2d",{willReadFrequently:!0});if(!r)return"";r.drawImage(t,0,0,e.width,e.height);let n;try{n=r.getImageData(0,0,e.width,e.height).data}catch{return""}let o=new Map;for(let i=0;i<n.length;i+=4){let s=n[i+3];if(s<40)continue;let l=n[i],d=n[i+1],h=n[i+2],p=`${l>>5}:${d>>5}:${h>>5}`,u=o.get(p);u||(u={count:0,r:0,g:0,b:0},o.set(p,u)),u.count+=s,u.r+=l*s,u.g+=d*s,u.b+=h*s}let a=null;for(let i of o.values())(!a||i.count>a.count)&&(a=i);return a?Vo(a.r/a.count)+Vo(a.g/a.count).slice(1)+Vo(a.b/a.count).slice(1):""}function v0(t,e,r){return Math.max(e,Math.min(r,t))}var tc=class extends q.default.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,r){console.error("[dsh-reader]",e,r)}reset=()=>this.setState({error:null});render(){return this.state.error?(0,Y.jsx)("div",{className:"dshr-root",children:(0,Y.jsxs)("div",{className:"dshr-error-panel",children:[(0,Y.jsx)("h3",{children:"\u9605\u8BFB\u5668\u9047\u5230\u4E86\u4E00\u4E2A\u95EE\u9898"}),(0,Y.jsxs)("p",{children:[this.state.error?.message||"\u672A\u77E5\u9519\u8BEF","\u3002\u8FD9\u901A\u5E38\u662F\u6587\u6863\u683C\u5F0F\u6216\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u91CD\u65B0\u6253\u5F00\u6587\u6863\u901A\u5E38\u53EF\u4EE5\u6062\u590D\u3002"]}),(0,Y.jsx)("div",{style:{display:"flex",gap:8,marginTop:14},children:(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:()=>{this.reset(),this.props.onReset?.()},children:"\u8FD4\u56DE\u4E66\u67B6"})})]})}):this.props.children}};function y0(){let[t,e]=q.default.useState(""),r=q.default.useRef(0),n=q.default.useCallback((o,a=2800)=>{window.clearTimeout(r.current),e(String(o)),r.current=window.setTimeout(()=>e(""),a)},[]);return q.default.useEffect(()=>()=>window.clearTimeout(r.current),[]),[t,n]}function gp(){let[t,e]=q.default.useState([]),[r,n]=q.default.useState([]),[o,a]=q.default.useState(null),i=q.default.useRef(0),[s,l]=q.default.useState(!0),[d,h]=q.default.useState(!1),[p,u]=q.default.useState(!1),[g,w]=q.default.useState("all"),[b,S]=q.default.useState(null),[y,k]=q.default.useState(!1),[E,A]=q.default.useState(""),[T,C]=q.default.useState(ed),[O,R]=q.default.useState("width"),m=b?.kind==="pdf"&&(O==="width"||O==="custom-width"),M=m?"scroll":T.readingMode,[F,L]=q.default.useState(!1),[$,J]=q.default.useState(!1),[se,ne]=q.default.useState(!1),[ce,G]=q.default.useState(!1),[oe,ue]=q.default.useState(!1),[P,B]=q.default.useState(!1),V=q.default.useRef(null),[he,Z]=q.default.useState(null),[Pe,de]=y0(),[{index:_e,entry:Ve},Ue]=q.default.useState({index:0,entry:null}),[nt,f]=q.default.useState({}),[c,_]=q.default.useState(!0),[x,le]=q.default.useState(!1),[re,ge]=q.default.useState(null),[be,ye]=q.default.useState(null),[De,Ee]=q.default.useState(null),[Be,at]=q.default.useState([]),[ot,Oe]=q.default.useState(!1),[Ke,Ge]=q.default.useState(null),[ht,ve]=q.default.useState(!1),[lt,Et]=q.default.useState(null),[fr,Kt]=q.default.useState(null),[Dt,$e]=q.default.useState(null),[$t,ae]=q.default.useState(""),[ke,Re]=q.default.useState(0),[Qe,Nt]=q.default.useState(""),[Hr,Ur]=q.default.useState(!1),[wo,qe]=q.default.useState(0),At=q.default.useRef(null),_t=q.default.useRef({timer:0,latest:null}),nn=q.default.useRef({token:0,controller:null}),Rt=q.default.useRef(null),qt=q.default.useRef(0),Yt=q.default.useRef(T),_n=q.default.useRef(t),Ne=q.default.useRef({running:!1,attempted:new Set}),gr=q.default.useRef(!1),[Sn,Wr]=q.default.useState(null);Rt.current=b,Yt.current=T,_n.current=t;let rr=q.default.useCallback(()=>{nn.current.token+=1,nn.current.controller?.abort()},[]);q.default.useLayoutEffect(()=>()=>rr(),[b?.record?.id,be,rr]);let Ln=`${T.fontSize}:${T.lineHeight}:${T.fontFamily}:${T.fontWeight}:${T.tocWidth}:${T.contentWidth}:${$t?"img":"plain"}:${wo}`,Qt=q.default.useMemo(()=>$i(T,$t),[T,$t]),on=q.default.useMemo(()=>{let N=Qt["--dshr-reader-bg"]||T.customBackground||"#fbf7ee",z=Qe&&$t?b0(Qe,N,Number(T.backgroundImageOpacity)||0):N;return{"--dshr-immersive-surface":z,"--dshr-immersive-ink":Bi(z).ink}},[Qe,$t,Qt,T.customBackground,T.backgroundImageOpacity]),Ct=q.default.useCallback(async()=>{let N=++i.current;try{let[z,Q]=await Promise.all([Es(),Oc()]);e(z),N===i.current&&n(Q)}catch(z){de(z?.message||"\u8BFB\u53D6\u4E66\u67B6\u5931\u8D25\u3002")}finally{l(!1)}},[de]),Kn=q.default.useCallback(N=>{i.current+=1,n(N)},[]),Jt=q.default.useCallback(async N=>{if(!N){at([]);return}try{at(await Xc(N))}catch(z){console.warn("[dsh-reader] annotations unavailable",z),at([])}},[]);q.default.useEffect(()=>{Ct()},[Ct]),q.default.useEffect(()=>{if(s||b)return;let N=_n.current.filter(pe=>!pe.cover&&["pdf","epub","mobi","azw","azw3"].includes(pe.format)&&!Ne.current.attempted.has(pe.id));if(N.length===0)return;let z=Ne.current,Q=new AbortController;z.controller=Q,z.running=!0;let Le=setTimeout(()=>{(async()=>{for(let pe of N){if(Q.signal.aborted)break;if(!z.attempted.has(pe.id))try{let mt=await ca(pe.id);if(!mt||Q.signal.aborted)continue;let yt=await hp(mt,{signal:Q.signal});if(Q.signal.aborted)break;if(z.attempted.add(pe.id),yt.cover||yt.title||yt.author||yt.language){let bt=await Ao(mt.id,yt,{preserveCitation:!0});bt&&e(Tt=>Tt.map(qr=>qr.id===mt.id?{...qr,title:bt.title,author:bt.author,cover:bt.cover,language:bt.language}:qr))}}catch(mt){if(Q.signal.aborted)break;z.attempted.add(pe.id),console.warn("[dsh-reader] cover generation failed",pe.title,mt)}}})().finally(()=>{z.controller===Q&&(z.running=!1)})},500);return()=>{clearTimeout(Le),Q.abort()}},[s,b]),q.default.useEffect(()=>{td(T)},[T]),q.default.useEffect(()=>{if(!b||M==="book")return;let N=z=>{if(z.defaultPrevented||z.repeat||z.ctrlKey||z.metaKey||z.altKey||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(z.key)||z.target instanceof Element&&z.target.closest('input, textarea, select, [contenteditable="true"], .dshr-topbar--pdf, .dshr-immersive-controls, .dshr-modal-mask, .dshr-appearance-panel, .dshr-anno-panel, .dshr-ai, .dshr-selection, .dshr-anno-composer, .dshr-pdf-translation-panel'))return;let Q=window.getSelection?.();if(Q&&!Q.isCollapsed)return;let Le=document.querySelector(".dshr-root .dshr-content")||document.querySelector(".dshr-root .dshr-pdf-scroll");if(!Le)return;z.preventDefault();let pe=Math.max(160,Math.round(Le.clientHeight*.82)),mt=z.key==="ArrowRight"||z.key==="ArrowDown";Le.scrollBy({top:mt?pe:-pe,behavior:"smooth"})};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[b,M]),q.default.useEffect(()=>{if(!$t){Nt("");return}let N=!1,z=new Image;return z.onload=()=>{N||Nt(x0(z))},z.onerror=()=>{N||Nt("")},z.src=$t,()=>{N=!0}},[$t]),q.default.useEffect(()=>{let N=!1,z="";if(!T.backgroundImageKey){ae("");return}return(async()=>{try{let Q=await Qc();if(!Q||N)return;z=URL.createObjectURL(Q),ae(z)}catch{N||ae("")}})(),()=>{N=!0,z&&URL.revokeObjectURL(z)}},[T.backgroundImageKey,ke]),q.default.useEffect(()=>{if(!be)return;let N=Q=>{Q?.type==="scroll"&&Q.target instanceof Element&&Q.target.closest(".dshr-pdf-translation-panel")||ye(null)},z=Q=>{Q.key==="Escape"&&ye(null)};return window.addEventListener("resize",N),window.addEventListener("keydown",z),document.addEventListener("scroll",N,!0),()=>{window.removeEventListener("resize",N),window.removeEventListener("keydown",z),document.removeEventListener("scroll",N,!0)}},[be]);let vr=q.default.useCallback(async()=>{let N=_t.current.latest;if(N){_t.current.latest=null;try{await Ns(N.id,N.progress),e(z=>z.map(Q=>Q.id===N.id?{...Q,progress:N.progress,lastOpenedAt:Date.now()}:Q))}catch{}}},[Ct]),xe=q.default.useCallback((N,z)=>{N&&(f(z),_t.current.latest={id:N,progress:z},!_t.current.timer&&(_t.current.timer=window.setTimeout(()=>{_t.current.timer=0,vr()},700)))},[vr]);q.default.useEffect(()=>()=>{window.clearTimeout(_t.current.timer),vr()},[vr]);let I=q.default.useCallback(async()=>{u(!0);try{let N=await Pc();await Ct();let z=[`\u6587\u732E ${N.counts.paper||0}`,`\u4E66\u7C4D ${N.counts.book||0}`];N.counts.document&&z.push(`\u6587\u6863 ${N.counts.document}`),de(N.changed>0?`\u4E66\u5355\u5DF2\u6574\u7406\uFF1A${z.join(" \xB7 ")}`:`\u4E66\u5355\u5DF2\u662F\u6700\u65B0\uFF1A${z.join(" \xB7 ")}`)}catch(N){de(N?.message||"\u81EA\u52A8\u6574\u7406\u5931\u8D25\u3002")}finally{u(!1)}},[Ct,de]),ee=q.default.useCallback(async(N,z)=>{let Q=["book","paper","document"],Le=z||Q[(Q.indexOf(N.category||"document")+1)%Q.length];try{await Mc(N.id,Le),await Ct(),de(`\u300A${N.title||"\u6587\u6863"}\u300B\u5DF2\u5F52\u5165\u300C${la(Le)}\u300D\u3002`)}catch(pe){de(pe?.message||"\u4FEE\u6539\u5206\u7C7B\u5931\u8D25\u3002")}},[Ct,de]),me=q.default.useCallback(N=>{C(z=>({...z,...N})),qe(z=>z+1)},[]),tt=q.default.useCallback(()=>{At.current?.click()},[]),Mt=q.default.useCallback(async N=>{if(N){if(!String(N.type||"").startsWith("image/")){de("\u8BF7\u9009\u62E9\u56FE\u7247\u6587\u4EF6\uFF08JPG / PNG / WebP\uFF09\u3002");return}Ur(!0);try{let z=N;try{let Q=await createImageBitmap(N),Le=Math.min(1,2400/Math.max(Q.width,Q.height));if(Le<1){let pe=document.createElement("canvas");pe.width=Math.round(Q.width*Le),pe.height=Math.round(Q.height*Le),pe.getContext("2d").drawImage(Q,0,0,pe.width,pe.height);let yt=await new Promise(bt=>pe.toBlob(bt,"image/jpeg",.86));yt&&(z=yt)}Q.close?.()}catch{}await Zc(z),C(Q=>({...Q,backgroundImageKey:"reader-background"})),Re(Q=>Q+1),de("\u80CC\u666F\u56FE\u7247\u5DF2\u4FDD\u5B58\uFF0C\u53EF\u8C03\u6574\u900F\u660E\u5EA6\u548C\u6A21\u7CCA\u5EA6\u3002")}catch(z){de(z?.message||"\u80CC\u666F\u56FE\u7247\u4FDD\u5B58\u5931\u8D25\u3002")}finally{Ur(!1)}}},[de]),St=q.default.useCallback(async()=>{try{await Jc(),C(N=>({...N,backgroundImageKey:""})),ae(""),de("\u5DF2\u79FB\u9664\u80CC\u666F\u56FE\u7247\u3002")}catch(N){de(N?.message||"\u79FB\u9664\u80CC\u666F\u56FE\u7247\u5931\u8D25\u3002")}},[de]),Pt=q.default.useCallback(async(N,z={})=>{if(z.rejected){de("\u6CA1\u6709\u53EF\u8BC6\u522B\u7684\u6587\u6863\u3002\u652F\u6301 PDF / EPUB / MOBI / TXT / Markdown / HTML\u3002");return}if(!N?.length)return;h(!0);let Q=[],Le=[];for(let pe of N)try{let mt=await da(pe);Q.push(mt)}catch(mt){Le.push(`${pe.name}: ${mt?.message||"\u5BFC\u5165\u5931\u8D25"}`)}await Ct(),h(!1),Le.length>0&&de(Le[0],4200),Q.length>0&&(de(Q.length===1?"\u5DF2\u52A0\u5165\u4E66\u67B6\u3002":`\u5DF2\u52A0\u5165 ${Q.length} \u4EFD\u6587\u6863\u3002`),Nr(Q[0]))},[Ct,de]),er=q.default.useCallback(async N=>{ne(!0);try{let z=await ud(N);J(!1),await Pt([z])}catch(z){de(z?.message||"\u5728\u7EBF\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u94FE\u63A5\u6216\u7A0D\u540E\u91CD\u8BD5\u3002",5200)}finally{ne(!1)}},[Pt,de]),Ht=q.default.useCallback(async()=>{if(ue(!1),document.fullscreenElement===V.current)try{await document.exitFullscreen()}catch{}},[]),mr=q.default.useCallback(async()=>{if(oe){await Ht();return}ue(!0),_(!1)},[oe,Ht]),ct=q.default.useCallback(async()=>{try{document.fullscreenElement===V.current?await document.exitFullscreen():V.current?.requestFullscreen&&await V.current.requestFullscreen()}catch{de("\u6D4F\u89C8\u5668\u963B\u6B62\u4E86\u5168\u5C4F\uFF1B\u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528\u5F53\u524D\u7A97\u53E3\u7684\u6C89\u6D78\u6A21\u5F0F\u3002",3600)}},[de]);q.default.useEffect(()=>{let N=()=>{B(document.fullscreenElement===V.current)};return document.addEventListener("fullscreenchange",N),()=>document.removeEventListener("fullscreenchange",N)},[]),q.default.useEffect(()=>{!b&&oe&&Ht()},[b,oe,Ht]),q.default.useEffect(()=>{if(!oe||ce)return;let N=z=>{z.key==="Escape"&&!z.defaultPrevented&&(z.preventDefault(),Ht())};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[oe,ce,Ht]);let Er=q.default.useCallback(()=>{qt.current+=1,k(!1);try{localStorage.removeItem(ls)}catch{}try{sessionStorage.removeItem(ec)}catch{}Wr(null),_t.current.timer&&(window.clearTimeout(_t.current.timer),_t.current.timer=0),vr(),le(!1),ge(null),ye(null),Ee(null),at([]),Oe(!1),ve(!1),Ge(null),Et(null),Kt(null),$e(null);let N=Rt.current?.book;if(N?.dispose)try{N.dispose()}catch{}S(null),f({}),Ue({index:0,entry:null})},[vr]),Nr=q.default.useCallback(async(N,{verifiedRecord:z,token:Q}={})=>{let Le=Q??++qt.current;if(Le!==qt.current)return!1;k(!0),A(`\u6B63\u5728\u6253\u5F00\u300A${N.title||"\u6587\u6863"}\u300B\u2026`);try{let pe=z??await ca(N.id);if(Le!==qt.current)return!1;if(!pe?.blob)throw new Error("\u4E66\u67B6\u4E2D\u627E\u4E0D\u5230\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u53EF\u80FD\u5DF2\u88AB\u6E05\u7406\u3002\u8BF7\u91CD\u65B0\u5BFC\u5165\u3002");Wr(null);try{localStorage.setItem(ls,pe.id)}catch{}try{sessionStorage.setItem(ec,pe.id)}catch{}if((pe.format||Un(pe.title))==="pdf"){pe.blob.size>24*1024*1024&&A(`\u6B63\u5728\u6253\u5F00\u5927\u578B PDF\u300A${pe.title||N.title||"\u6587\u6863"}\u300B\u2026`);let Eo=pe.blob,Nn=pe.progress||{},Va={...pe,blob:null,blobName:pe.blob.name||""};return R(Yt.current.readingMode==="book"?"page":"width"),S({kind:"pdf",record:Va,data:Eo}),f({page:Nn.page||1,pages:Nn.pages||0,percent:Nn.percent||0}),Ue({index:0,entry:null}),_(!1),Oe(!1),$e(null),await Jt(pe.id),Le===qt.current&&k(!1),await Ns(pe.id),await Ct(),Le===qt.current}let{parseBook:yt}=await Promise.resolve().then(()=>(Jl(),Ql)),bt=await yt(pe.blob,{fileName:pe.title??N.title,mime:pe.blob.type});if(Le!==qt.current)return bt.dispose?.(),!1;let Tt={...pe,title:bt.title||pe.title,author:bt.author||pe.author,language:bt.language||pe.language};if((Tt.title!==pe.title||Tt.author!==pe.author||Tt.language!==pe.language)&&(await Ao(pe.id,{title:Tt.title,author:Tt.author,language:Tt.language}),await Ct()),Le!==qt.current)return bt.dispose?.(),!1;let qr=pe.progress||{},To=v0(Number(qr.chapter)||0,0,Math.max(0,bt.chapters.length-1));return S({kind:"flow",record:Tt,book:bt}),Ue({index:To,entry:{scrollRatio:Number(qr.scrollRatio)||0}}),f({chapter:To,chapters:bt.chapters.length,percent:Number(qr.percent)||(bt.chapters.length?(To+1)/bt.chapters.length*100:0)}),_(!0),Oe(!1),Kt(null),await Jt(pe.id),Le!==qt.current?!1:(k(!1),nd(bt.chapters.slice(0,3).map(Eo=>Eo.blocks.map(Nn=>Nn.text||"").join(" ")).join(" "))&&!Yt.current.autoTranslate&&de("\u68C0\u6D4B\u5230\u5916\u6587\u5185\u5BB9\u3002\u9876\u90E8\u300C\u5B9E\u65F6\u7FFB\u8BD1\u300D\u53EF\u4EE5\u968F\u65F6\u5F00\u542F\u3002",4200),!0)}catch(pe){return Le!==qt.current||(k(!1),de(pe?.message||"\u6253\u5F00\u6587\u6863\u5931\u8D25\u3002",5e3)),!1}},[Ct,Jt,de]),Ft=zu({currentRef:Rt,navigation:qt,openBook:Nr,refreshBooks:Ct,showToast:de});async function jr(N,z){let Q=await Rc(N,z);e(Le=>Le.map(pe=>pe.id===N?{...pe,...Q}:pe)),de("\u8BBA\u6587\u51FA\u5904\u5DF2\u4FDD\u5B58\u3002")}async function Ha(N,z){let Q=await Dc(N,z);Kn(Le=>Le.map(pe=>pe.id===Q.id?Q:pe)),de("\u4E13\u9898\u5DF2\u4FDD\u5B58\u3002")}q.default.useEffect(()=>{if(s||b||gr.current||_n.current.length===0)return;gr.current=!0;let N="";try{N=localStorage.getItem(ls)||""}catch{}if(!N){Wr(null);return}let z=_n.current.find(pe=>pe.id===N);if(!z){Wr(null);try{localStorage.removeItem(ls)}catch{}return}let Q=Number(z.size)>24*1024*1024||Number(z.progress?.pages)>300,Le=!1;try{Le=sessionStorage.getItem(ec)===z.id}catch{}Wr(z),!(Q&&!Le)&&Nr(z)},[s,b,Nr]),q.default.useEffect(()=>{let N=()=>{document.visibilityState==="hidden"&&vr()};return document.addEventListener("visibilitychange",N),()=>document.removeEventListener("visibilitychange",N)},[vr]);async function cs(N){if(N.format!=="pdf"){Z(N);return}try{let z=(await hi()).filter(Q=>Q.bookId===N.id).length;Z({...N,evidenceCount:z})}catch(z){de(z?.message||"\u8BFB\u53D6\u8BC1\u636E\u5173\u8054\u5931\u8D25\u3002")}}let Ko=q.default.useCallback(async(N=!1)=>{let z=he;if(z)try{Rt.current?.record?.id===z.id&&Er(),await Bc(z.id,{deleteEvidence:N}),Z(null),await Ct(),de("\u5DF2\u4ECE\u4E66\u67B6\u5220\u9664\u3002")}catch(Q){de(Q?.message||"\u5220\u9664\u5931\u8D25\u3002")}},[Er,he,Ct,de]),Yo=q.default.useCallback(async()=>{try{Er(),await Uc(),await Ct(),L(!1),de("\u4E66\u67B6\u5DF2\u6E05\u7A7A\u3002")}catch(N){de(N?.message||"\u6E05\u7A7A\u4E66\u67B6\u5931\u8D25\u3002")}},[Er,Ct,de]),an=q.default.useCallback((N,z)=>{ge({id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:String(N||"").slice(0,8e3),context:String(z||"").slice(0,1600)}),le(!0),Oe(!1),ye(null),Ee(null)},[]),Dn=q.default.useCallback((N,z="web")=>{let Q=String(N||"").trim().slice(0,500);if(!Q)return;let Le=z==="scholar"?`https://scholar.google.com/scholar?q=${encodeURIComponent(Q)}`:`https://www.google.com/search?q=${encodeURIComponent(Q)}`;window.open(Le,"_blank","noopener,noreferrer")||de("\u6D4F\u89C8\u5668\u62E6\u622A\u4E86\u65B0\u7A97\u53E3\u3002\u8BF7\u5141\u8BB8\u5F39\u51FA\u7A97\u53E3\uFF0C\u6216\u590D\u5236\u6587\u5B57\u540E\u624B\u52A8\u641C\u7D22\u3002")},[de]),ko=q.default.useCallback(async N=>{try{await navigator.clipboard.writeText(N),de("\u5DF2\u590D\u5236\u3002")}catch{de("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u3002")}},[de]),Ua=q.default.useCallback(N=>{if(rr(),!N?.text?.trim()){ye(null);return}ye({...N,source:"flow"}),Ee(null)},[rr]),_o=q.default.useCallback(N=>{if(rr(),!N?.text){ye(null);return}ye({...N,source:"pdf"}),Ee(null)},[rr]),Wa=q.default.useCallback(async N=>{let z=N?.text?.trim();if(!z)return;rr();let Q=new AbortController,Le=nn.current.token,pe=b?.record?.id;nn.current.controller=Q;let mt=()=>!Q.signal.aborted&&Le===nn.current.token&&Rt.current?.record?.id===pe;Ee({status:"loading"});try{let yt=await Io([{id:"selection",text:z}],{context:N.context||"",title:b?.book?.title||b?.record?.title||"",signal:Q.signal});mt()&&Ee({status:"done",zh:yt.selection||""})}catch(yt){mt()&&!eo(yt)&&Ee({status:"error",error:yt?.message||"\u7FFB\u8BD1\u5931\u8D25\u3002"})}},[b,rr]),Zo=q.default.useCallback(N=>{let z=Rt.current?.record?.id;if(!z||!N?.text?.trim())return;let Q=Rt.current?.kind==="pdf";Et(null),Ge({bookId:z,kind:Q?"pdf":"flow",style:"highlight",color:"#f5d76e",width:9,note:"",quote:N.text.trim(),chapterId:Q?void 0:Rt.current?.book?.chapters?.[_e]?.id,chapterIndex:Q?void 0:_e,ranges:Q?void 0:N.ranges,page:Q?N.page:void 0,rects:Q?N.pageRects:void 0}),ve(!0),ye(null),Ee(null)},[_e]),Fn=q.default.useCallback(N=>{N&&(Et(N),Ge({...N}),ve(!0))},[]),Gr=q.default.useCallback(N=>{let z=Be.find(Q=>Q.id===N);z&&Fn(z)},[Be,Fn]),zn=q.default.useCallback(()=>{ve(!1),Ge(null),Et(null)},[]),So=q.default.useCallback(async N=>{if(!(!N||!N.bookId))try{N.id?await Kc(N.id,N):await Vc(N),await Jt(N.bookId),zn(),qe(z=>z+1),de(N.note?.trim()?"\u6279\u6CE8\u5DF2\u4FDD\u5B58\u3002":"\u6807\u8BB0\u5DF2\u4FDD\u5B58\u3002")}catch(z){de(z?.message||"\u4FDD\u5B58\u6279\u6CE8\u5931\u8D25\u3002")}},[zn,Jt,de]),ja=q.default.useCallback(async N=>{if(N?.id)try{await Yc(N.id),await Jt(Rt.current?.record?.id),zn(),qe(z=>z+1),de("\u6279\u6CE8\u5DF2\u5220\u9664\u3002")}catch(z){de(z?.message||"\u5220\u9664\u6279\u6CE8\u5931\u8D25\u3002")}},[zn,Jt,de]),ds=q.default.useCallback(N=>{if(!N)return;if(N.kind==="pdf"){$e({id:N.id,page:N.page,token:Date.now()}),Oe(!1);return}let z=Number.isFinite(N.chapterIndex)?N.chapterIndex:0;Ue(Q=>Q.index===z?Q:{index:z,entry:{edge:"start"}}),Kt({id:N.id,blockId:N.ranges?.[0]?.blockId,token:Date.now()}),Oe(!1)},[]),Tn=q.default.useCallback((N,z={edge:"start"})=>{N===_e||N<0||N>=(b?.book?.chapters.length??0)||(Kt(null),Ue({index:N,entry:z}))},[_e,b]),Ga=q.default.useCallback((N,z)=>{N!==Ve||b?.kind!=="flow"||(Ue(Q=>Q.entry===N?{index:Q.index,entry:null}:Q),xe(b.record.id,Ti(_e,b.book.chapters.length,z)))},[Ve,_e,b,xe]);function sn(N){if(N.button!==0)return;N.preventDefault();let z=N.clientX,Q=Number(Yt.current.tocWidth)||260,Le=document.body.style.cursor,pe=document.body.style.userSelect;document.body.style.cursor="col-resize",document.body.style.userSelect="none",document.body.classList.add("dshr-toc-resizing");let mt=bt=>{let Tt=Math.max(180,Math.min(520,Math.round(Q+bt.clientX-z)));C(qr=>({...qr,tocWidth:Tt}))},yt=()=>{window.removeEventListener("pointermove",mt),window.removeEventListener("pointerup",yt),window.removeEventListener("pointercancel",yt),document.body.style.cursor=Le,document.body.style.userSelect=pe,document.body.classList.remove("dshr-toc-resizing")};window.addEventListener("pointermove",mt),window.addEventListener("pointerup",yt),window.addEventListener("pointercancel",yt)}let Yn=b?.book?.title||b?.record?.title||b?.record?.blob?.name||b?.record?.blobName||"",qa=b?.book?.author||b?.record?.author||"",Zn=b?.kind==="flow"?`\u7B2C ${(_e||0)+1} / ${b.book.chapters.length} \u7AE0`:"",Xa=b?b.kind==="pdf"?nt.pages>0?(nt.page||1)/nt.pages*100:0:(_e+1)/Math.max(1,b.book.chapters.length)*100:0;function Qo(){return(0,Y.jsxs)("div",{className:"dshr-topbar__mode",role:"group","aria-label":"\u7FFB\u4E66\u65B9\u5F0F",children:[(0,Y.jsx)("button",{type:"button",className:`dshr-topbar__mode-btn${M!=="book"?" is-active":""}`,onClick:()=>{m||C(N=>({...N,readingMode:"scroll"}))},"aria-pressed":M!=="book",title:m?"\u9002\u5BBD\u89C6\u56FE\u56FA\u5B9A\u4F7F\u7528\u6EDA\u52A8\u9605\u8BFB":"\u8FDE\u7EED\u6EDA\u52A8\u9605\u8BFB",children:(0,Y.jsx)("span",{children:"\u6EDA\u52A8"})}),(0,Y.jsx)("button",{type:"button",className:`dshr-topbar__mode-btn${M==="book"?" is-active":""}`,onClick:()=>C(N=>({...N,readingMode:"book"})),"aria-pressed":M==="book",disabled:m,title:m?"\u5207\u6362\u5230\u6574\u9875\u540E\u53EF\u4F7F\u7528\u6A2A\u7248\u7FFB\u9875":"\u6A2A\u7248\u7EB8\u8D28\u4E66\u7FFB\u9875",children:(0,Y.jsx)("span",{children:"\u6A2A\u7248"})}),M==="book"?(0,Y.jsx)("select",{className:"dshr-topbar__animation","aria-label":"\u7FFB\u9875\u52A8\u753B",value:T.bookAnimation||"slide",onChange:N=>C(z=>({...z,bookAnimation:N.target.value})),children:yu.map(N=>(0,Y.jsx)("option",{value:N.id,children:N.label},N.id))}):null]})}function Jo({iconTools:N,textTools:z}={}){let Q=b.kind==="pdf",Le=(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon",onClick:()=>{mr()},title:"\u5207\u6362\u5230\u6C89\u6D78\u9605\u8BFB","aria-label":"\u8FDB\u5165\u6C89\u6D78\u6A21\u5F0F",children:(0,Y.jsx)(bs,{size:16})}),pe=(0,Y.jsxs)("button",{type:"button",className:"dshr-switch",role:"switch","aria-checked":T.autoTranslate,onClick:()=>C(Tt=>({...Tt,autoTranslate:!Tt.autoTranslate,...b.kind==="pdf"&&!Tt.autoTranslate?{hideTranslations:!1}:{}})),title:"\u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1","aria-label":"\u5B9E\u65F6\u7FFB\u8BD1",children:[(0,Y.jsx)("span",{className:"dshr-switch__track"}),(0,Y.jsx)("span",{style:{whiteSpace:"nowrap"},children:"\u5B9E\u65F6\u7FFB\u8BD1"})]}),mt=(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${T.hideTranslations?"dshr-btn--outline":""}`,onClick:()=>C(Tt=>({...Tt,hideTranslations:!Tt.hideTranslations})),title:T.hideTranslations?"\u663E\u793A\u4E2D\u6587\u8BD1\u6587":"\u53EA\u770B\u539F\u6587\uFF08\u9690\u85CF\u5DF2\u7FFB\u8BD1\u5185\u5BB9\uFF09","aria-label":T.hideTranslations?"\u663E\u793A\u4E2D\u6587\u8BD1\u6587":"\u53EA\u770B\u539F\u6587\uFF0C\u9690\u85CF\u8BD1\u6587","aria-pressed":T.hideTranslations,children:T.hideTranslations?(0,Y.jsx)(Ec,{size:16}):(0,Y.jsx)(Tc,{size:16})}),(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon",onClick:()=>{G(!0),ye(null)},title:"\u5B57\u4F53\u3001\u80CC\u666F\u4E0E\u7559\u767D","aria-label":"\u9605\u8BFB\u5916\u89C2",children:(0,Y.jsx)(oa,{size:16})}),(0,Y.jsxs)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${ot?"dshr-btn--outline":""}`,onClick:()=>{Oe(Tt=>!Tt),le(!1),ye(null)},title:"\u6279\u6CE8\u4E0E\u4FBF\u7B7E","aria-label":`\u6279\u6CE8\u4E0E\u4FBF\u7B7E\uFF0C\u5171 ${Be.length} \u6761`,children:[(0,Y.jsx)(ai,{size:16}),Be.length>0?(0,Y.jsx)("span",{className:"dshr-count-badge",children:Be.length>99?"99+":Be.length}):null]})]}),yt=(0,Y.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary dshr-btn--sm",onClick:()=>an("",""),title:"\u6253\u5F00 AI \u9605\u8BFB\u52A9\u624B",children:[(0,Y.jsx)(Hn,{size:14})," AI"]}),bt=(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:()=>L(!0),title:"\u9605\u8BFB\u8BBE\u7F6E","aria-label":"\u9605\u8BFB\u8BBE\u7F6E",children:(0,Y.jsx)(ei,{size:16})});return(0,Y.jsxs)("div",{className:`dshr-topbar${Q?" dshr-topbar--pdf":""}`,style:{position:"relative"},children:[(0,Y.jsx)("div",{className:"dshr-progress","aria-hidden":"true",children:(0,Y.jsx)("i",{style:{"--p":`${Math.min(100,Xa)}%`}})}),(0,Y.jsxs)("div",{className:"dshr-topbar__identity",children:[(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:Er,title:"\u8FD4\u56DE\u4E66\u67B6","aria-label":"\u8FD4\u56DE\u4E66\u67B6",children:(0,Y.jsx)(fc,{size:17})}),(0,Y.jsxs)("div",{className:"dshr-topbar__title",children:[(0,Y.jsx)("strong",{title:Yn,children:Yn}),(0,Y.jsx)("span",{children:[qa,dn(b.record?.format),Zn].filter(Boolean).join(" \xB7 ")})]})]}),Q?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)("div",{className:"dshr-topbar__tools dshr-topbar__icons",role:"group","aria-label":"\u9605\u8BFB\u5FEB\u6377\u64CD\u4F5C",children:[N,Le,mt,(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon","aria-label":"\u8BC1\u636E\u5E93",title:"\u5F53\u524D\u8BBA\u6587\u7684\u8BC1\u636E",onClick:()=>Ft.show(b.record.id),children:(0,Y.jsx)(ra,{size:16})}),bt]}),(0,Y.jsxs)("div",{className:"dshr-topbar__tools dshr-topbar__labels",children:[z,Qo(),pe,yt]})]}):(0,Y.jsxs)("div",{className:"dshr-topbar__tools",children:[(0,Y.jsx)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${c?"dshr-btn--outline":""}`,onClick:()=>_(Tt=>!Tt),title:"\u76EE\u5F55","aria-label":"\u76EE\u5F55","aria-pressed":c,children:(0,Y.jsx)(ms,{size:16})}),Qo(),Le,pe,mt,yt,bt]})]})}function En(N){let z=b.kind==="pdf";return(0,Y.jsxs)("div",{className:`dshr-immersive-controls${z?" dshr-immersive-controls--pdf":""}`,role:"group","aria-label":"\u6C89\u6D78\u9605\u8BFB\u63A7\u4EF6",style:z?void 0:{height:pp},children:[z?(0,Y.jsx)("span",{className:"dshr-immersive-title",title:Yn,children:Yn}):null,N,z&&N?Qo():null,(0,Y.jsxs)("div",{className:"dshr-immersive-actions",children:[z?null:(0,Y.jsxs)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>_(Q=>!Q),title:c?"\u6536\u8D77\u76EE\u5F55":"\u6253\u5F00\u76EE\u5F55","aria-pressed":c,children:[(0,Y.jsx)(ms,{size:15})," \u76EE\u5F55"]}),(0,Y.jsxs)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>{G(!0),ye(null)},title:"\u9605\u8BFB\u5916\u89C2","aria-label":"\u9605\u8BFB\u5916\u89C2","aria-haspopup":"dialog","aria-expanded":ce,autoFocus:!0,children:[(0,Y.jsx)(oa,{size:15})," \u5916\u89C2"]}),(0,Y.jsxs)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>{ct()},title:P?"\u9000\u51FA\u5168\u5C4F":"\u8FDB\u5165\u5168\u5C4F","aria-label":P?"\u9000\u51FA\u5168\u5C4F":"\u8FDB\u5165\u5168\u5C4F","aria-pressed":P,children:[P?(0,Y.jsx)(_c,{size:15}):(0,Y.jsx)(bs,{size:15}),P?"\u8FD8\u539F":"\u5168\u5C4F"]}),(0,Y.jsxs)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>{Ht()},title:"\u9000\u51FA\u6C89\u6D78\u6A21\u5F0F\uFF08Esc\uFF09",children:[(0,Y.jsx)(Ir,{size:15})," \u9000\u51FA\u6C89\u6D78"]})]})]})}let ea=b?(0,Y.jsxs)(Y.Fragment,{children:[x?(0,Y.jsx)(tu,{open:x,onClose:()=>le(!1),seed:re,onGoogle:Dn,onToast:de}):null,ot?(0,Y.jsx)(Eu,{open:ot,annotations:Be,book:b.book||b.record,onClose:()=>Oe(!1),onOpenAnnotation:Gr,onJump:ds,onDelete:N=>{ja(N)}}):null]}):null;return(0,Y.jsx)(tc,{onReset:Er,children:(0,Y.jsxs)("div",{ref:V,className:`dshr-root${oe?" is-immersive":""}`,style:{...Qt,...on,"--dshr-font-size":`${T.fontSize}px`,"--dshr-line-height":String(T.lineHeight),"--dshr-toc-width":`${T.tocWidth}px`},"data-reader-background":T.backgroundPreset,"data-hide-translations":T.hideTranslations?"true":"false","data-reading-mode":M||"scroll",children:[(0,Y.jsx)("input",{ref:At,type:"file",accept:"image/*",className:"dshr-sr-only",tabIndex:-1,onChange:N=>{let z=N.target.files?.[0];N.target.value="",Mt(z)}}),b?(0,Y.jsxs)("div",{className:"dshr-reader",children:[!oe&&b.kind==="flow"?Jo():null,oe&&b.kind==="flow"?En():null,(0,Y.jsxs)("div",{className:"dshr-body",children:[b.kind==="flow"?(0,Y.jsxs)("aside",{className:`dshr-toc${c?"":" is-closed"}`,"aria-label":"\u76EE\u5F55",children:[(0,Y.jsxs)("div",{className:"dshr-toc__head",children:[(0,Y.jsx)("strong",{children:"\u76EE\u5F55"}),(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost",onClick:()=>_(!1),"aria-label":"\u6536\u8D77\u76EE\u5F55",children:(0,Y.jsx)(Ir,{size:14})})]}),(0,Y.jsx)("div",{className:"dshr-toc__list",children:b.book.chapters.map((N,z)=>(0,Y.jsx)("button",{type:"button",className:`dshr-toc__item${z===_e?" is-active":""}`,onClick:()=>Tn(z),title:N.title,children:N.title||`\u7B2C ${z+1} \u7AE0`},N.id||z))}),(0,Y.jsx)("div",{className:"dshr-toc__resizer",role:"separator","aria-orientation":"vertical","aria-label":"\u62D6\u52A8\u8C03\u6574\u76EE\u5F55\u5BBD\u5EA6",title:"\u62D6\u52A8\u8C03\u6574\u76EE\u5F55\u5BBD\u5EA6\uFF1B\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4",onPointerDown:sn,onDoubleClick:()=>C(N=>({...N,tocWidth:260}))})]}):null,b.kind==="pdf"?(0,Y.jsx)(Jd,{data:b.data,documentId:b.record.id,fileName:Yn,renderImmersiveToolbar:oe?En:void 0,renderTopbar:oe?void 0:Jo,sidePanels:ea,initialPage:b.record.progress?.page||1,autoTranslate:T.autoTranslate,hideTranslations:T.hideTranslations,viewMode:O,onViewModeChange:R,paged:M==="book",onHideTranslations:()=>C(N=>({...N,hideTranslations:!0})),annotations:Be,onOpenAnnotation:Gr,focusAnnotation:Dt,focusEvidence:Ft.focus?.blob===b.data&&Ft.focus?.token===qt.current?Ft.focus:void 0,onEvidenceLocated:Ft.located,onReady:({pageCount:N})=>f(z=>({...z,page:z.page||1,pages:N,percent:N>0?(z.page||1)/N*100:z.percent||0})),onPageChange:N=>{let z=nt.pages||0,Q={...nt,page:N,pages:z,percent:z>0?N/z*100:0};f(Q),xe(b.record.id,Q)},onSelection:_o},b.record.id):(0,Y.jsx)(Ad,{book:b.book,chapterIndex:_e,onChapterChange:Tn,settings:T,chapterEntry:Ve,onChapterEntered:Ga,onSelection:Ua,onProgress:N=>{f(N),xe(b.record.id,N)},annotations:Be,onOpenAnnotation:Gr,focusAnnotation:fr,layoutVersion:Ln}),b.kind==="flow"?ea:null]}),(0,Y.jsx)(gu,{enabled:M==="book",animation:T.bookAnimation,bookMode:!0,bookFrame:b.kind==="flow",frameTop:oe?pp:52,frameLeft:b.kind==="flow"&&c?T.tocWidth:0,readerKey:`${b.record.id}:${b.kind}:${_e}`,canPrevChapter:b.kind==="flow"&&_e>0,canNextChapter:b.kind==="flow"&&_e<(b.book?.chapters?.length||1)-1,chapterEntry:Ve,onChapterEntered:Ga,onChapterTurn:(N,z)=>Tn(_e+N,z)})]}):(0,Y.jsx)(sd,{books:t,collections:r,onCollectionsChange:Kn,loading:s,resumeBook:Sn,onResume:N=>{Nr(N)},importing:d,organizing:p,categoryFilter:g,onCategoryFilter:w,onAutoOrganize:()=>{I()},onImport:Pt,onOpen:N=>{Nr(N)},onDelete:N=>{cs(N)},onCycleCategory:(N,z)=>{ee(N,z)},onSettings:()=>L(!0),onOnlineImport:()=>J(!0),onEvidence:N=>Ft.show("",N),onEditCitation:a}),y?(0,Y.jsx)("div",{className:"dshr-modal-mask",style:{background:"color-mix(in srgb, var(--dshr-bg) 76%, transparent)",backdropFilter:"blur(5px)"},children:(0,Y.jsxs)("div",{className:"dshr-loading",children:[(0,Y.jsx)("div",{className:"dshr-loading__ring"}),(0,Y.jsx)("span",{children:E})]})}):null,be&&!x&&!ht&&!Ft.draft&&!Ft.panel?(0,Y.jsx)(ru,{selection:be,translation:De,onTranslate:N=>{Wa(N)},onAnnotate:Zo,onEvidence:be.source==="pdf"&&be.evidenceAnchor?()=>Ft.createDraft(be,De):void 0,replacingEvidence:Ft.replacement?.blob===b?.data,onExplain:N=>an(N.text,N.context),onGoogle:Dn,onCopy:ko,onClose:()=>{ye(null),Ee(null)},onRetry:()=>{Wa(be)}}):null,(0,Y.jsx)(iu,{open:$,busy:se,onClose:()=>{se||J(!1)},onSubmit:N=>{er(N)}}),F?(0,Y.jsx)(nu,{settings:T,onChange:C,onClose:()=>L(!1),onOpenAppearance:()=>{L(!1),G(!0)},onClearLibrary:()=>{Yo()}}):null,ce?(0,Y.jsx)(_u,{open:ce,settings:T,backgroundImageUrl:$t,onChange:me,onPickBackgroundImage:tt,onClearBackgroundImage:()=>{St()},onClose:()=>G(!1)}):null,he?(0,Y.jsx)(ou,{book:he,onCancel:()=>Z(null),onConfirm:N=>{Ko(N)}}):null,o?(0,Y.jsx)(Pu,{book:o,close:()=>a(null),save:jr},o.id):null,Ft.panel?(0,Y.jsx)(Fu,{evidence:Ft,books:t,collections:r,saveResearch:Ha}):null,Ft.draft?(0,Y.jsx)(Du,{evidence:Ft},Ft.draft.id):null,ht&&Ke?(0,Y.jsx)(Ru,{open:ht,draft:Ke,mode:lt?"edit":"create",onClose:zn,onSave:N=>{So(N)},onDelete:lt?()=>{ja(lt)}:void 0}):null,(0,Y.jsx)(au,{message:Pe})]})})}var mp=String.raw`
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
  flex: 0 0 auto;
  display: flex; align-items: center; justify-content: flex-end; gap: 4px;
  padding: 0 10px; font-size: 12px;
  color: var(--dshr-immersive-ink, var(--dshr-fg));
  background: var(--dshr-immersive-surface, var(--dshr-layer));
  border-bottom: 1px solid color-mix(in srgb, currentColor 12%, transparent);
}
.dshr-immersive-actions { display: flex; align-items: center; gap: 4px; }
.dshr-immersive-controls--pdf { flex-wrap: wrap; gap: 4px 12px; min-height: 44px; padding-block: 4px; }
.dshr-immersive-title {
  flex: 1 1 0; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.dshr-immersive-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 5px;
  min-height: 34px; padding: 0 8px; white-space: nowrap;
  border: 1px solid color-mix(in srgb, currentColor 15%, transparent); border-radius: 7px;
  background: color-mix(in srgb, currentColor 4%, transparent);
}
.dshr-immersive-btn:hover:not(:disabled), .dshr-immersive-btn[aria-pressed="true"], .dshr-immersive-btn[aria-expanded="true"] {
  background: color-mix(in srgb, currentColor 10%, transparent);
  border-color: color-mix(in srgb, currentColor 27%, transparent);
}
.dshr-immersive-btn:disabled { opacity: .4; cursor: default; }
.dshr-immersive-btn:focus-visible { outline: 2px solid currentColor; outline-offset: 1px; }
@container (max-width: 640px) {
  .dshr-immersive-controls--pdf { justify-content: center; column-gap: 8px; }
  .dshr-immersive-controls--pdf .dshr-immersive-btn svg, .dshr-immersive-title { display: none; }
}
@container (max-width: 300px) {
  .dshr-immersive-btn svg { display: none; }
}
.dshr-paged-controls { position: absolute; inset: 0; z-index: 18; pointer-events: none; }
.dshr-book-mask {
  position: absolute; left: var(--dshr-book-frame-left, 0); right: 0; z-index: 1;
  background: var(--dshr-reader-bg, #fbf7ee); pointer-events: none;
}
.dshr-book-mask--top { top: var(--dshr-book-frame-top, 52px); height: var(--dshr-book-top-cover, 48px); }
.dshr-book-mask--bottom { bottom: 0; height: var(--dshr-book-bottom-cover, 56px); }
.dshr-root[data-reading-mode="book"] .dshr-content__inner {
  width: min(var(--dshr-reader-width, 760px), calc(100% - 2 * clamp(24px, 6%, 64px)));
  padding-top: 48px; padding-bottom: 240px;
}
.dshr-page-gutter-hint {
  position: absolute; z-index: 2; pointer-events: none;
  border-radius: 8px; background: color-mix(in srgb, var(--dshr-reader-ink, var(--dshr-fg)) 5%, transparent);
}
.dshr-paged-scroll[data-page-gutter-hover] { cursor: pointer; }
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
.dshr-topbar__identity { display: flex; align-items: center; gap: 10px; flex: 1; min-width: 0; }
.dshr-topbar__identity > button { flex: none; }
.dshr-topbar__title { min-width: 0; flex: 1; display: flex; flex-direction: column; gap: 2px; }
.dshr-topbar__title strong { font-size: 13.5px; font-weight: 650; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.dshr-topbar__title span { color: var(--dshr-fg-3); font-size: 11px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.dshr-topbar__tools { display: flex; align-items: center; gap: 4px; }
.dshr-topbar--pdf {
  display: grid; grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  column-gap: 12px; padding-inline: 12px; font-family: var(--dshr-sans);
}
.dshr-topbar__icons { justify-content: center; }
.dshr-topbar__labels { justify-content: flex-end; }
.dshr-topbar__icons, .dshr-topbar__labels { min-width: 0; flex-wrap: wrap; }
.dshr-topbar__icons > *, .dshr-topbar__labels > * { flex: none; }
@container (max-width: 1360px) {
  .dshr-topbar--pdf { row-gap: 4px; }
  .dshr-topbar__labels { grid-column: 1 / -1; }
}
@container (max-width: 430px) {
  .dshr-topbar--pdf { grid-template-columns: minmax(0, 1fr); }
}
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
.dshr-topbar__mode-btn:hover:not(:disabled) { color: var(--dshr-fg); }
.dshr-topbar__mode-btn:disabled { opacity: .45; cursor: default; }
.dshr-topbar__mode-btn.is-active { color: var(--dshr-brand); background: var(--dshr-brand-soft); font-weight: 600; }
.dshr-topbar__animation {
  height: 24px; max-width: 96px; margin-left: 2px; padding: 0 5px;
  border: 1px solid var(--dshr-border-strong); border-radius: 6px; outline: 0;
  background: var(--dshr-layer-2); color: var(--dshr-fg);
  font: 600 11.5px/1 var(--dshr-sans); cursor: pointer;
}
.dshr-topbar__animation option { background: var(--dshr-layer-2); color: var(--dshr-fg); }
.dshr-topbar__animation:focus-visible { border-color: var(--dshr-brand); }
.dshr-immersive-controls--pdf .dshr-topbar__mode {
  border-color: color-mix(in srgb, currentColor 15%, transparent);
  background: color-mix(in srgb, currentColor 4%, transparent);
}
.dshr-immersive-controls--pdf .dshr-topbar__mode-btn { color: inherit; }
.dshr-immersive-controls--pdf .dshr-topbar__mode-btn.is-active {
  background: color-mix(in srgb, currentColor 10%, transparent);
}
.dshr-immersive-controls--pdf .dshr-topbar__animation {
  color: inherit;
  border-color: color-mix(in srgb, currentColor 15%, transparent);
  background: transparent;
}
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
  position: fixed; z-index: 70; display: flex; flex-wrap: wrap; align-items: center; gap: 1px; padding: 4px;
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
.dshr-evidence-dialog { width: min(680px, 100%); max-height: 88vh; overflow: auto; }
.dshr-evidence-dialog label { display: grid; gap: 4px; margin-block: 7px; }
.dshr-evidence-dialog textarea, .dshr-evidence-dialog select, .dshr-evidence-dialog input:not([type=checkbox]) {
  padding: 6px 8px; border: 1px solid var(--dshr-border); border-radius: 6px;
  background: var(--dshr-layer-2); color: var(--dshr-fg);
}
.dshr-evidence-dialog textarea { min-height: 56px; resize: vertical; }
.dshr-evidence-dialog blockquote {
  margin: 8px 0; padding: 6px 10px; border-inline-start: 2px solid var(--dshr-border-strong);
  white-space: pre-wrap; overflow-wrap: anywhere;
}
.dshr-evidence-card { margin-block: 8px; padding: 10px; border: 1px solid var(--dshr-border); border-radius: 8px; }
.dshr-evidence-card p { margin: 4px 0; }
.dshr-evidence-note { white-space: pre-wrap; overflow-wrap: anywhere; }
.dshr-evidence-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 4px; }
.dshr-evidence-dialog .dshr-evidence-checkbox { display: flex; align-items: center; }
.dshr-topic-summary, .dshr-topic-form fieldset { border: 1px solid var(--dshr-border); border-radius: 8px; padding: 8px; margin-block: 8px; }
.dshr-topic-summary p { white-space: pre-wrap; overflow-wrap: anywhere; }
.dshr-topic-form li button { margin-inline-start: 4px; }
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
  .dshr-topbar:not(.dshr-topbar--pdf) .dshr-switch > span:last-child { display: none; }
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
`;var bp=String.raw`
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
`;var yo=require("react/jsx-runtime"),w0="dsh-reader",k0=["slots","layout"],rc="reader";function _0({size:t=18}){return(0,yo.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,yo.jsx)("path",{d:"M4 5.4A2.4 2.4 0 0 1 6.4 3H20v16.1H6.4A2.4 2.4 0 0 0 4 21.5V5.4Z",stroke:"currentColor",strokeWidth:"1.65",strokeLinejoin:"round"}),(0,yo.jsx)("path",{d:"M4 18.4a2.4 2.4 0 0 1 2.4-2.3H20",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round"}),(0,yo.jsx)("path",{d:"M8.2 7h7.6M8.2 10.2h4.6",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round"}),(0,yo.jsx)("circle",{cx:"17.2",cy:"18.6",r:"2.1",fill:"currentColor",opacity:".9"})]})}function S0(t){t.effect(()=>{let e=document.createElement("style");return e.dataset.dshReader="styles",e.textContent=`${mp}
${Zd}
${il}
${bp}`,document.head.appendChild(e),()=>e.remove()},"dsh-reader: styles"),t.slots.inject("main",function*(){yield t.slots.register({name:"main",key:rc},gp)}),t.slots.inject("sidebar.panellist",()=>t.slots.register({name:"sidebar.panellist",id:rc,order:10,label:()=>"\u9605\u8BFB"},_0))}

return module.exports;
}});

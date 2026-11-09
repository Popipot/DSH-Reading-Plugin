window.__ModuleLoader__.load({ id: "dsh-reader", factory: (require) => {
var module = { exports: {} }; var exports = module.exports;
var vu=Object.create;var ma=Object.defineProperty;var yu=Object.getOwnPropertyDescriptor;var wu=Object.getOwnPropertyNames;var _u=Object.getPrototypeOf,ku=Object.prototype.hasOwnProperty;var dr=(t,e,r)=>()=>{if(r)throw r[0];try{return t&&(e=t(t=0)),e}catch(n){throw r=[n],n}};var Ni=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}},fl=(t,e)=>{for(var r in e)ma(t,r,{get:e[r],enumerable:!0})},gl=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of wu(e))!ku.call(t,o)&&o!==r&&ma(t,o,{get:()=>e[o],enumerable:!(n=yu(e,o))||n.enumerable});return t};var It=(t,e,r)=>(r=t!=null?vu(_u(t)):{},gl(e||!t||!t.__esModule?ma(r,"default",{value:t,enumerable:!0}):r,t)),Tu=t=>gl(ma({},"__esModule",{value:!0}),t);function Pf(t,e){return Pd(t,{i:2},e&&e.out,e&&e.dictionary)}function Od(t,e){return Pd(t.subarray(Mf(t,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}function Df(t,e){if(e){for(var r="",n=0;n<t.length;n+=16384)r+=String.fromCharCode.apply(null,t.subarray(n,n+16384));return r}else{if(_s)return _s.decode(t);var o=Lf(t),a=o.s,r=o.r;return r.length&&qt(8),a}}function Ld(t,e){for(var r={},n=t.length-22;kr(t,n)!=101010256;--n)(!n||t.length-n>65558)&&qt(13);var o=Qr(t,n+8);if(!o)return{};var a=kr(t,n+16),i=kr(t,n-20)==117853008;if(i){var s=kr(t,n-12);i=kr(t,s)==101075792,i&&(o=kr(t,s+32),a=kr(t,s+48))}for(var l=e&&e.filter,d=0;d<o;++d){var f=zf(t,a,i),g=f[0],u=f[1],p=f[2],_=f[3],S=f[4],v=f[5],P=Ff(t,v);a=S,(!l||l({name:_,size:u,originalSize:p,compression:g}))&&(g?g==8?r[_]=Pf(t.subarray(P,P+u),{out:new hr(p)}):qt(14,"unknown compression type "+g):r[_]=ks(t,P,P+u))}return r}var hr,mo,kf,Ed,Ad,Tf,Nd,Cd,Id,Sf,Rd,Ef,gx,ws,fn,Ze,Go,qo,Ze,Ze,Ze,Ze,Md,Ze,Af,Nf,xs,$r,vs,Cf,ks,If,qt,Pd,Rf,Qr,kr,ys,Mf,_s,Of,Lf,Ff,zf,Bf,Ts=dr(()=>{hr=Uint8Array,mo=Uint16Array,kf=Int32Array,Ed=new hr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ad=new hr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Tf=new hr([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Nd=function(t,e){for(var r=new mo(31),n=0;n<31;++n)r[n]=e+=1<<t[n-1];for(var o=new kf(r[30]),n=1;n<30;++n)for(var a=r[n];a<r[n+1];++a)o[a]=a-r[n]<<5|n;return{b:r,r:o}},Cd=Nd(Ed,2),Id=Cd.b,Sf=Cd.r;Id[28]=258,Sf[258]=28;Rd=Nd(Ad,0),Ef=Rd.b,gx=Rd.r,ws=new mo(32768);for(Ze=0;Ze<32768;++Ze)fn=(Ze&43690)>>1|(Ze&21845)<<1,fn=(fn&52428)>>2|(fn&13107)<<2,fn=(fn&61680)>>4|(fn&3855)<<4,ws[Ze]=((fn&65280)>>8|(fn&255)<<8)>>1;Go=(function(t,e,r){for(var n=t.length,o=0,a=new mo(e);o<n;++o)t[o]&&++a[t[o]-1];var i=new mo(e);for(o=1;o<e;++o)i[o]=i[o-1]+a[o-1]<<1;var s;if(r){s=new mo(1<<e);var l=15-e;for(o=0;o<n;++o)if(t[o])for(var d=o<<4|t[o],f=e-t[o],g=i[t[o]-1]++<<f,u=g|(1<<f)-1;g<=u;++g)s[ws[g]>>l]=d}else for(s=new mo(n),o=0;o<n;++o)t[o]&&(s[o]=ws[i[t[o]-1]++]>>15-t[o]);return s}),qo=new hr(288);for(Ze=0;Ze<144;++Ze)qo[Ze]=8;for(Ze=144;Ze<256;++Ze)qo[Ze]=9;for(Ze=256;Ze<280;++Ze)qo[Ze]=7;for(Ze=280;Ze<288;++Ze)qo[Ze]=8;Md=new hr(32);for(Ze=0;Ze<32;++Ze)Md[Ze]=5;Af=Go(qo,9,1),Nf=Go(Md,5,1),xs=function(t){for(var e=t[0],r=1;r<t.length;++r)t[r]>e&&(e=t[r]);return e},$r=function(t,e,r){var n=e/8|0;return(t[n]|t[n+1]<<8)>>(e&7)&r},vs=function(t,e){var r=e/8|0;return(t[r]|t[r+1]<<8|t[r+2]<<16)>>(e&7)},Cf=function(t){return(t+7)/8|0},ks=function(t,e,r){return(e==null||e<0)&&(e=0),(r==null||r>t.length)&&(r=t.length),new hr(t.subarray(e,r))},If=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],qt=function(t,e,r){var n=new Error(e||If[t]);if(n.code=t,Error.captureStackTrace&&Error.captureStackTrace(n,qt),!r)throw n;return n},Pd=function(t,e,r,n){var o=t.length,a=n?n.length:0;if(!o||e.f&&!e.l)return r||new hr(0);var i=!r,s=i||e.i!=2,l=e.i;i&&(r=new hr(o*3));var d=function(ft){var h=r.length;if(ft>h){var c=new hr(Math.max(h*2,ft));c.set(r),r=c}},f=e.f||0,g=e.p||0,u=e.b||0,p=e.l,_=e.d,S=e.m,v=e.n,P=o*8;do{if(!p){f=$r(t,g,1);var A=$r(t,g+1,3);if(g+=3,A)if(A==1)p=Af,_=Nf,S=9,v=5;else if(A==2){var E=$r(t,g,31)+257,L=$r(t,g+10,15)+4,I=E+$r(t,g+5,31)+1;g+=14;for(var x=new hr(I),O=new hr(19),D=0;D<L;++D)O[Tf[D]]=$r(t,g+D*3,7);g+=L*3;for(var te=xs(O),H=(1<<te)-1,ne=Go(O,te,1),D=0;D<I;){var re=ne[$r(t,g,H)];g+=re&15;var y=re>>4;if(y<16)x[D++]=y;else{var z=0,oe=0;for(y==16?(oe=3+$r(t,g,3),g+=2,z=x[D-1]):y==17?(oe=3+$r(t,g,7),g+=3):y==18&&(oe=11+$r(t,g,127),g+=7);oe--;)x[D++]=z}}var B=x.subarray(0,E),q=x.subarray(E);S=xs(B),v=xs(q),p=Go(B,S,1),_=Go(q,v,1)}else qt(1);else{var y=Cf(g)+4,N=t[y-4]|t[y-3]<<8,M=y+N;if(M>o){l&&qt(0);break}s&&d(u+N),r.set(t.subarray(y,M),u),e.b=u+=N,e.p=g=M*8,e.f=f;continue}if(g>P){l&&qt(0);break}}s&&d(u+131072);for(var ae=(1<<S)-1,F=(1<<v)-1,de=g;;de=g){var z=p[vs(t,g)&ae],ve=z>>4;if(g+=z&15,g>P){l&&qt(0);break}if(z||qt(2),ve<256)r[u++]=ve;else if(ve==256){de=g,p=null;break}else{var Ae=ve-254;if(ve>264){var D=ve-257,J=Ed[D];Ae=$r(t,g,(1<<J)-1)+Id[D],g+=J}var ge=_[vs(t,g)&F],Ue=ge>>4;ge||qt(3),g+=ge&15;var q=Ef[Ue];if(Ue>3){var J=Ad[Ue];q+=vs(t,g)&(1<<J)-1,g+=J}if(g>P){l&&qt(0);break}s&&d(u+131072);var we=u+Ae;if(u<q){var Be=a-q,Xe=Math.min(q,we);for(Be+u<0&&qt(3);u<Xe;++u)r[u]=n[Be+u]}for(;u<we;++u)r[u]=r[u-q]}}e.l=p,e.p=de,e.b=u,e.f=f,p&&(f=1,e.m=S,e.d=_,e.n=v)}while(!f);return u!=r.length&&i?ks(r,0,u):r.subarray(0,u)},Rf=new hr(0),Qr=function(t,e){return t[e]|t[e+1]<<8},kr=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},ys=function(t,e){return kr(t,e)+kr(t,e+4)*4294967296},Mf=function(t,e){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&qt(6,"invalid zlib data"),(t[1]>>5&1)==+!e&&qt(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};_s=typeof TextDecoder<"u"&&new TextDecoder,Of=0;try{_s.decode(Rf,{stream:!0}),Of=1}catch{}Lf=function(t){for(var e="",r=0;;){var n=t[r++],o=(n>127)+(n>223)+(n>239);if(r+o>t.length)return{s:e,r:ks(t,r-1)};o?o==3?(n=((n&15)<<18|(t[r++]&63)<<12|(t[r++]&63)<<6|t[r++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):o&1?e+=String.fromCharCode((n&31)<<6|t[r++]&63):e+=String.fromCharCode((n&15)<<12|(t[r++]&63)<<6|t[r++]&63):e+=String.fromCharCode(n)}};Ff=function(t,e){return e+30+Qr(t,e+26)+Qr(t,e+28)},zf=function(t,e,r){var n=Qr(t,e+28),o=Qr(t,e+30),a=Df(t.subarray(e+46,e+46+n),!(Qr(t,e+8)&2048)),i=e+46+n,s=Bf(t,i,o,r,kr(t,e+20),kr(t,e+24),kr(t,e+42)),l=s[0],d=s[1],f=s[2];return[Qr(t,e+10),l,d,a,i+o+Qr(t,e+32),f]},Bf=function(t,e,r,n,o,a,i){var s=o==4294967295,l=a==4294967295,d=i==4294967295,f=e+r,g=s+l+d;if(n&&g){for(;e+4<f;e+=4+Qr(t,e+2))if(Qr(t,e)==1)return[s?ys(t,e+4+8*l):o,l?ys(t,e+4):a,d?ys(t,e+4+8*(l+s)):i,1];n<2&&qt(13)}return[o,a,i,0]}});function Kt(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return Ms(t,e,n)}}function Xf(t){return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return Ps(t,r)}}function Fe(t,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ni;Dd&&Dd(t,null);let n=e.length;for(;n--;){let o=e[n];if(typeof o=="string"){let a=r(o);a!==o&&($f(e)||(e[n]=a),o=a)}t[o]=!0}return t}function Vf(t){for(let e=0;e<t.length;e++)Hr(t,e)||(t[e]=null);return t}function Jr(t){let e=Rs(null);for(let[r,n]of jd(t))Hr(t,r)&&(Array.isArray(n)?e[r]=Vf(n):n&&typeof n=="object"&&n.constructor===Object?e[r]=Jr(n):e[r]=n);return e}function Yo(t,e){for(;t!==null;){let n=Uf(t,e);if(n){if(n.get)return Kt(n.get);if(typeof n.value=="function")return Kt(n.value)}t=Hf(t)}function r(){return null}return r}function Xd(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ag(),e=se=>Xd(se);if(e.version="3.3.1",e.removed=[],!t||!t.document||t.document.nodeType!==Zo.document||!t.Element)return e.isSupported=!1,e;let{document:r}=t,n=r,o=n.currentScript,{DocumentFragment:a,HTMLTemplateElement:i,Node:s,Element:l,NodeFilter:d,NamedNodeMap:f=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:g,DOMParser:u,trustedTypes:p}=t,_=l.prototype,S=Yo(_,"cloneNode"),v=Yo(_,"remove"),P=Yo(_,"nextSibling"),A=Yo(_,"childNodes"),y=Yo(_,"parentNode");if(typeof i=="function"){let se=r.createElement("template");se.content&&se.content.ownerDocument&&(r=se.content.ownerDocument)}let N,M="",{implementation:E,createNodeIterator:L,createDocumentFragment:I,getElementsByTagName:x}=r,{importNode:O}=n,D=Wd();e.isSupported=typeof jd=="function"&&typeof y=="function"&&E&&E.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:te,ERB_EXPR:H,TMPLIT_EXPR:ne,DATA_ATTR:re,ARIA_ATTR:z,IS_SCRIPT_OR_DATA:oe,ATTR_WHITESPACE:B,CUSTOM_ELEMENT:q}=Ud,{IS_ALLOWED_URI:ae}=Ud,F=null,de=Fe({},[...zd,...As,...Ns,...Cs,...Bd]),ve=null,Ae=Fe({},[...$d,...Is,...Hd,...ri]),J=Object.seal(Rs(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ge=null,Ue=null,we=Object.seal(Rs(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),Be=!0,Xe=!0,ft=!1,h=!0,c=!1,k=!0,b=!1,Y=!1,ce=!1,he=!1,ye=!1,Te=!1,We=!0,Ce=!1,ue="user-content-",ze=!0,dt=!1,$e={},je=null,De=Fe({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),ke=null,ht=Fe({},["audio","video","img","source","image","track"]),Ge=null,xt=Fe({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Jt="http://www.w3.org/1998/Math/MathML",pr="http://www.w3.org/2000/svg",ot="http://www.w3.org/1999/xhtml",Lt=ot,_t=!1,fr=null,Dt=Fe({},[Jt,pr,ot],Ss),er=Fe({},["mi","mo","mn","ms","mtext"]),K=Fe({},["annotation-xml"]),pe=Fe({},["title","style","font","a","script"]),be=null,Oe=["application/xhtml+xml","text/html"],xe="text/html",Qe=null,Ft=null,kn=r.createElement("form"),Tn=function(T){return T instanceof RegExp||T instanceof Function},lr=function(){let T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Ft&&Ft===T)){if((!T||typeof T!="object")&&(T={}),T=Jr(T),be=Oe.indexOf(T.PARSER_MEDIA_TYPE)===-1?xe:T.PARSER_MEDIA_TYPE,Qe=be==="application/xhtml+xml"?Ss:ni,F=Hr(T,"ALLOWED_TAGS")?Fe({},T.ALLOWED_TAGS,Qe):de,ve=Hr(T,"ALLOWED_ATTR")?Fe({},T.ALLOWED_ATTR,Qe):Ae,fr=Hr(T,"ALLOWED_NAMESPACES")?Fe({},T.ALLOWED_NAMESPACES,Ss):Dt,Ge=Hr(T,"ADD_URI_SAFE_ATTR")?Fe(Jr(xt),T.ADD_URI_SAFE_ATTR,Qe):xt,ke=Hr(T,"ADD_DATA_URI_TAGS")?Fe(Jr(ht),T.ADD_DATA_URI_TAGS,Qe):ht,je=Hr(T,"FORBID_CONTENTS")?Fe({},T.FORBID_CONTENTS,Qe):De,ge=Hr(T,"FORBID_TAGS")?Fe({},T.FORBID_TAGS,Qe):Jr({}),Ue=Hr(T,"FORBID_ATTR")?Fe({},T.FORBID_ATTR,Qe):Jr({}),$e=Hr(T,"USE_PROFILES")?T.USE_PROFILES:!1,Be=T.ALLOW_ARIA_ATTR!==!1,Xe=T.ALLOW_DATA_ATTR!==!1,ft=T.ALLOW_UNKNOWN_PROTOCOLS||!1,h=T.ALLOW_SELF_CLOSE_IN_ATTR!==!1,c=T.SAFE_FOR_TEMPLATES||!1,k=T.SAFE_FOR_XML!==!1,b=T.WHOLE_DOCUMENT||!1,he=T.RETURN_DOM||!1,ye=T.RETURN_DOM_FRAGMENT||!1,Te=T.RETURN_TRUSTED_TYPE||!1,ce=T.FORCE_BODY||!1,We=T.SANITIZE_DOM!==!1,Ce=T.SANITIZE_NAMED_PROPS||!1,ze=T.KEEP_CONTENT!==!1,dt=T.IN_PLACE||!1,ae=T.ALLOWED_URI_REGEXP||Gd,Lt=T.NAMESPACE||ot,er=T.MATHML_TEXT_INTEGRATION_POINTS||er,K=T.HTML_INTEGRATION_POINTS||K,J=T.CUSTOM_ELEMENT_HANDLING||{},T.CUSTOM_ELEMENT_HANDLING&&Tn(T.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(J.tagNameCheck=T.CUSTOM_ELEMENT_HANDLING.tagNameCheck),T.CUSTOM_ELEMENT_HANDLING&&Tn(T.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(J.attributeNameCheck=T.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),T.CUSTOM_ELEMENT_HANDLING&&typeof T.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(J.allowCustomizedBuiltInElements=T.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),c&&(Xe=!1),ye&&(he=!0),$e&&(F=Fe({},Bd),ve=[],$e.html===!0&&(Fe(F,zd),Fe(ve,$d)),$e.svg===!0&&(Fe(F,As),Fe(ve,Is),Fe(ve,ri)),$e.svgFilters===!0&&(Fe(F,Ns),Fe(ve,Is),Fe(ve,ri)),$e.mathMl===!0&&(Fe(F,Cs),Fe(ve,Hd),Fe(ve,ri))),T.ADD_TAGS&&(typeof T.ADD_TAGS=="function"?we.tagCheck=T.ADD_TAGS:(F===de&&(F=Jr(F)),Fe(F,T.ADD_TAGS,Qe))),T.ADD_ATTR&&(typeof T.ADD_ATTR=="function"?we.attributeCheck=T.ADD_ATTR:(ve===Ae&&(ve=Jr(ve)),Fe(ve,T.ADD_ATTR,Qe))),T.ADD_URI_SAFE_ATTR&&Fe(Ge,T.ADD_URI_SAFE_ATTR,Qe),T.FORBID_CONTENTS&&(je===De&&(je=Jr(je)),Fe(je,T.FORBID_CONTENTS,Qe)),T.ADD_FORBID_CONTENTS&&(je===De&&(je=Jr(je)),Fe(je,T.ADD_FORBID_CONTENTS,Qe)),ze&&(F["#text"]=!0),b&&Fe(F,["html","head","body"]),F.table&&(Fe(F,["tbody"]),delete ge.tbody),T.TRUSTED_TYPES_POLICY){if(typeof T.TRUSTED_TYPES_POLICY.createHTML!="function")throw Ko('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof T.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Ko('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');N=T.TRUSTED_TYPES_POLICY,M=N.createHTML("")}else N===void 0&&(N=ig(p,o)),N!==null&&typeof M=="string"&&(M=N.createHTML(""));Vt&&Vt(T),Ft=T}},tr=Fe({},[...As,...Ns,...Kf]),Wr=Fe({},[...Cs,...Yf]),Sn=function(T){let G=y(T);(!G||!G.tagName)&&(G={namespaceURI:Lt,tagName:"template"});let ie=ni(T.tagName),at=ni(G.tagName);return fr[T.namespaceURI]?T.namespaceURI===pr?G.namespaceURI===ot?ie==="svg":G.namespaceURI===Jt?ie==="svg"&&(at==="annotation-xml"||er[at]):!!tr[ie]:T.namespaceURI===Jt?G.namespaceURI===ot?ie==="math":G.namespaceURI===pr?ie==="math"&&K[at]:!!Wr[ie]:T.namespaceURI===ot?G.namespaceURI===pr&&!K[at]||G.namespaceURI===Jt&&!er[at]?!1:!Wr[ie]&&(pe[ie]||!tr[ie]):!!(be==="application/xhtml+xml"&&fr[T.namespaceURI]):!1},rr=function(T){Xo(e.removed,{element:T});try{y(T).removeChild(T)}catch{v(T)}},Je=function(T,G){try{Xo(e.removed,{attribute:G.getAttributeNode(T),from:G})}catch{Xo(e.removed,{attribute:null,from:G})}if(G.removeAttribute(T),T==="is")if(he||ye)try{rr(G)}catch{}else try{G.setAttribute(T,"")}catch{}},En=function(T){let G=null,ie=null;if(ce)T="<remove></remove>"+T;else{let et=Es(T,/^[\r\n\t ]+/);ie=et&&et[0]}be==="application/xhtml+xml"&&Lt===ot&&(T='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+T+"</body></html>");let at=N?N.createHTML(T):T;if(Lt===ot)try{G=new u().parseFromString(at,be)}catch{}if(!G||!G.documentElement){G=E.createDocument(Lt,"template",null);try{G.documentElement.innerHTML=_t?M:at}catch{}}let gt=G.body||G.documentElement;return T&&ie&&gt.insertBefore(r.createTextNode(ie),gt.childNodes[0]||null),Lt===ot?x.call(G,b?"html":"body")[0]:b?G.documentElement:gt},gr=function(T){return L.call(T.ownerDocument||T,T,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},$t=function(T){return T instanceof g&&(typeof T.nodeName!="string"||typeof T.textContent!="string"||typeof T.removeChild!="function"||!(T.attributes instanceof f)||typeof T.removeAttribute!="function"||typeof T.setAttribute!="function"||typeof T.namespaceURI!="string"||typeof T.insertBefore!="function"||typeof T.hasChildNodes!="function")},nr=function(T){return typeof s=="function"&&T instanceof s};function or(se,T,G){ti(se,ie=>{ie.call(e,T,G,Ft)})}let Jn=function(T){let G=null;if(or(D.beforeSanitizeElements,T,null),$t(T))return rr(T),!0;let ie=Qe(T.nodeName);if(or(D.uponSanitizeElement,T,{tagName:ie,allowedTags:F}),k&&T.hasChildNodes()&&!nr(T.firstElementChild)&&Xt(/<[/\w!]/g,T.innerHTML)&&Xt(/<[/\w!]/g,T.textContent)||T.nodeType===Zo.progressingInstruction||k&&T.nodeType===Zo.comment&&Xt(/<[/\w]/g,T.data))return rr(T),!0;if(!(we.tagCheck instanceof Function&&we.tagCheck(ie))&&(!F[ie]||ge[ie])){if(!ge[ie]&&sn(ie)&&(J.tagNameCheck instanceof RegExp&&Xt(J.tagNameCheck,ie)||J.tagNameCheck instanceof Function&&J.tagNameCheck(ie)))return!1;if(ze&&!je[ie]){let at=y(T)||T.parentNode,gt=A(T)||T.childNodes;if(gt&&at){let et=gt.length;for(let Tt=et-1;Tt>=0;--Tt){let Ct=S(gt[Tt],!0);Ct.__removalCount=(T.__removalCount||0)+1,at.insertBefore(Ct,P(T))}}}return rr(T),!0}return T instanceof l&&!Sn(T)||(ie==="noscript"||ie==="noembed"||ie==="noframes")&&Xt(/<\/no(script|embed|frames)/i,T.innerHTML)?(rr(T),!0):(c&&T.nodeType===Zo.text&&(G=T.textContent,ti([te,H,ne],at=>{G=Vo(G,at," ")}),T.textContent!==G&&(Xo(e.removed,{element:T.cloneNode()}),T.textContent=G)),or(D.afterSanitizeElements,T,null),!1)},An=function(T,G,ie){if(We&&(G==="id"||G==="name")&&(ie in r||ie in kn))return!1;if(!(Xe&&!Ue[G]&&Xt(re,G))){if(!(Be&&Xt(z,G))){if(!(we.attributeCheck instanceof Function&&we.attributeCheck(G,T))){if(!ve[G]||Ue[G]){if(!(sn(T)&&(J.tagNameCheck instanceof RegExp&&Xt(J.tagNameCheck,T)||J.tagNameCheck instanceof Function&&J.tagNameCheck(T))&&(J.attributeNameCheck instanceof RegExp&&Xt(J.attributeNameCheck,G)||J.attributeNameCheck instanceof Function&&J.attributeNameCheck(G,T))||G==="is"&&J.allowCustomizedBuiltInElements&&(J.tagNameCheck instanceof RegExp&&Xt(J.tagNameCheck,ie)||J.tagNameCheck instanceof Function&&J.tagNameCheck(ie))))return!1}else if(!Ge[G]){if(!Xt(ae,Vo(ie,B,""))){if(!((G==="src"||G==="xlink:href"||G==="href")&&T!=="script"&&Gf(ie,"data:")===0&&ke[T])){if(!(ft&&!Xt(oe,Vo(ie,B,"")))){if(ie)return!1}}}}}}}return!0},sn=function(T){return T!=="annotation-xml"&&Es(T,q)},ln=function(T){or(D.beforeSanitizeAttributes,T,null);let{attributes:G}=T;if(!G||$t(T))return;let ie={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ve,forceKeepAttr:void 0},at=G.length;for(;at--;){let gt=G[at],{name:et,namespaceURI:Tt,value:Ct}=gt,Ht=Qe(et),Ir=Ct,yt=et==="value"?Ir:qf(Ir);if(ie.attrName=Ht,ie.attrValue=yt,ie.keepAttr=!0,ie.forceKeepAttr=void 0,or(D.uponSanitizeAttribute,T,ie),yt=ie.attrValue,Ce&&(Ht==="id"||Ht==="name")&&(Je(et,T),yt=ue+yt),k&&Xt(/((--!?|])>)|<\/(style|title|textarea)/i,yt)){Je(et,T);continue}if(Ht==="attributename"&&Es(yt,"href")){Je(et,T);continue}if(ie.forceKeepAttr)continue;if(!ie.keepAttr){Je(et,T);continue}if(!h&&Xt(/\/>/i,yt)){Je(et,T);continue}c&&ti([te,H,ne],eo=>{yt=Vo(yt,eo," ")});let cn=Qe(T.nodeName);if(!An(cn,Ht,yt)){Je(et,T);continue}if(N&&typeof p=="object"&&typeof p.getAttributeType=="function"&&!Tt)switch(p.getAttributeType(cn,Ht)){case"TrustedHTML":{yt=N.createHTML(yt);break}case"TrustedScriptURL":{yt=N.createScriptURL(yt);break}}if(yt!==Ir)try{Tt?T.setAttributeNS(Tt,et,yt):T.setAttribute(et,yt),$t(T)?rr(T):Fd(e.removed)}catch{Je(et,T)}}or(D.afterSanitizeAttributes,T,null)},mr=function se(T){let G=null,ie=gr(T);for(or(D.beforeSanitizeShadowDOM,T,null);G=ie.nextNode();)or(D.uponSanitizeShadowNode,G,null),Jn(G),ln(G),G.content instanceof a&&se(G.content);or(D.afterSanitizeShadowDOM,T,null)};return e.sanitize=function(se){let T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},G=null,ie=null,at=null,gt=null;if(_t=!se,_t&&(se="<!-->"),typeof se!="string"&&!nr(se))if(typeof se.toString=="function"){if(se=se.toString(),typeof se!="string")throw Ko("dirty is not a string, aborting")}else throw Ko("toString is not a function");if(!e.isSupported)return se;if(Y||lr(T),e.removed=[],typeof se=="string"&&(dt=!1),dt){if(se.nodeName){let Ct=Qe(se.nodeName);if(!F[Ct]||ge[Ct])throw Ko("root node is forbidden and cannot be sanitized in-place")}}else if(se instanceof s)G=En("<!---->"),ie=G.ownerDocument.importNode(se,!0),ie.nodeType===Zo.element&&ie.nodeName==="BODY"||ie.nodeName==="HTML"?G=ie:G.appendChild(ie);else{if(!he&&!c&&!b&&se.indexOf("<")===-1)return N&&Te?N.createHTML(se):se;if(G=En(se),!G)return he?null:Te?M:""}G&&ce&&rr(G.firstChild);let et=gr(dt?se:G);for(;at=et.nextNode();)Jn(at),ln(at),at.content instanceof a&&mr(at.content);if(dt)return se;if(he){if(ye)for(gt=I.call(G.ownerDocument);G.firstChild;)gt.appendChild(G.firstChild);else gt=G;return(ve.shadowroot||ve.shadowrootmode)&&(gt=O.call(n,gt,!0)),gt}let Tt=b?G.outerHTML:G.innerHTML;return b&&F["!doctype"]&&G.ownerDocument&&G.ownerDocument.doctype&&G.ownerDocument.doctype.name&&Xt(qd,G.ownerDocument.doctype.name)&&(Tt="<!DOCTYPE "+G.ownerDocument.doctype.name+`>
`+Tt),c&&ti([te,H,ne],Ct=>{Tt=Vo(Tt,Ct," ")}),N&&Te?N.createHTML(Tt):Tt},e.setConfig=function(){let se=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};lr(se),Y=!0},e.clearConfig=function(){Ft=null,Y=!1},e.isValidAttribute=function(se,T,G){Ft||lr({});let ie=Qe(se),at=Qe(T);return An(ie,at,G)},e.addHook=function(se,T){typeof T=="function"&&Xo(D[se],T)},e.removeHook=function(se,T){if(T!==void 0){let G=Wf(D[se],T);return G===-1?void 0:jf(D[se],G,1)[0]}return Fd(D[se])},e.removeHooks=function(se){D[se]=[]},e.removeAllHooks=function(){D=Wd()},e}var jd,Dd,$f,Hf,Uf,Vt,Tr,Rs,Ms,Ps,ti,Wf,Fd,Xo,jf,ni,Ss,Es,Vo,Gf,qf,Hr,Xt,Ko,zd,As,Ns,Kf,Cs,Yf,Bd,$d,Is,Hd,ri,Zf,Qf,Jf,eg,tg,Gd,rg,ng,qd,og,Ud,Zo,ag,ig,Wd,Qo,Vd=dr(()=>{({entries:jd,setPrototypeOf:Dd,isFrozen:$f,getPrototypeOf:Hf,getOwnPropertyDescriptor:Uf}=Object),{freeze:Vt,seal:Tr,create:Rs}=Object,{apply:Ms,construct:Ps}=typeof Reflect<"u"&&Reflect;Vt||(Vt=function(e){return e});Tr||(Tr=function(e){return e});Ms||(Ms=function(e,r){for(var n=arguments.length,o=new Array(n>2?n-2:0),a=2;a<n;a++)o[a-2]=arguments[a];return e.apply(r,o)});Ps||(Ps=function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return new e(...n)});ti=Kt(Array.prototype.forEach),Wf=Kt(Array.prototype.lastIndexOf),Fd=Kt(Array.prototype.pop),Xo=Kt(Array.prototype.push),jf=Kt(Array.prototype.splice),ni=Kt(String.prototype.toLowerCase),Ss=Kt(String.prototype.toString),Es=Kt(String.prototype.match),Vo=Kt(String.prototype.replace),Gf=Kt(String.prototype.indexOf),qf=Kt(String.prototype.trim),Hr=Kt(Object.prototype.hasOwnProperty),Xt=Kt(RegExp.prototype.test),Ko=Xf(TypeError);zd=Vt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),As=Vt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ns=Vt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Kf=Vt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Cs=Vt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Yf=Vt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Bd=Vt(["#text"]),$d=Vt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Is=Vt(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Hd=Vt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ri=Vt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Zf=Tr(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Qf=Tr(/<%[\w\W]*|[\w\W]*%>/gm),Jf=Tr(/\$\{[\w\W]*/gm),eg=Tr(/^data-[\-\w.\u00B7-\uFFFF]+$/),tg=Tr(/^aria-[\-\w]+$/),Gd=Tr(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),rg=Tr(/^(?:\w+script|data):/i),ng=Tr(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),qd=Tr(/^html$/i),og=Tr(/^[a-z][.\w]*(-[.\w]+)+$/i),Ud=Object.freeze({__proto__:null,ARIA_ATTR:tg,ATTR_WHITESPACE:ng,CUSTOM_ELEMENT:og,DATA_ATTR:eg,DOCTYPE_NAME:qd,ERB_EXPR:Qf,IS_ALLOWED_URI:Gd,IS_SCRIPT_OR_DATA:rg,MUSTACHE_EXPR:Zf,TMPLIT_EXPR:Jf}),Zo={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},ag=function(){return typeof window>"u"?null:window},ig=function(e,r){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null,o="data-tt-policy-suffix";r&&r.hasAttribute(o)&&(n=r.getAttribute(o));let a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML(i){return i},createScriptURL(i){return i}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},Wd=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};Qo=Xd()});function Zd(){if(Wn)return Wn;if(typeof Qo?.sanitize=="function"&&Qo.isSupported)Wn=Qo;else{let t=typeof window<"u"?window:globalThis.window;if(!t)throw new Error("\u65E0\u6CD5\u6E05\u7406 HTML\uFF1A\u5F53\u524D\u73AF\u5883\u7F3A\u5C11\u6D4F\u89C8\u5668 window\u3002");Wn=Qo(t)}if(!Wn||typeof Wn.sanitize!="function")throw new Error("\u65E0\u6CD5\u6E05\u7406 HTML\uFF1A\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 DOMPurify\u3002");return Wn}function oi(t){if(!t)return"";try{return Zd().sanitize(String(t),Yd)}catch{return""}}function Os(t){if(!t)return"";try{return Zd().sanitize(String(t),lg)}catch{return""}}function jn(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function lt(t){return String(t??"").replace(/\u00a0/g," ").replace(/[\t\f\v\u2000-\u200b\u2028\u2029]+/g," ").replace(/[ ]*\n[ ]*/g," ").replace(/ {2,}/g," ").trim()}function Jo(t="div"){return document.createElement(t)}function en(t){try{return new DOMParser().parseFromString(String(t??""),"text/html")}catch{return null}}function bo(t){try{let e=new DOMParser().parseFromString(String(t??""),"application/xml");return!e||!e.documentElement||e.documentElement.localName?.toLowerCase()==="parsererror"||Yt(e,"parsererror")?null:e}catch{return null}}function ur(t){return String(t?.localName||t?.nodeName||"").toLowerCase()}function Nt(t,e){let r=[];if(!t)return r;let n=String(e).toLowerCase(),o=a=>{for(let i=a.firstChild;i;i=i.nextSibling)i.nodeType===1&&(ur(i)===n&&r.push(i),o(i))};return o(t),r}function Yt(t,e){if(!t)return null;let r=String(e).toLowerCase(),n=null,o=a=>{for(let i=a.firstChild;i&&!n;i=i.nextSibling)if(i.nodeType===1){if(ur(i)===r){n=i;return}o(i)}};return o(t),n}function nt(t,e){if(!t||!e)return null;let r=t.getAttribute?.(e);if(r!=null)return r;let n=String(e).toLowerCase(),o=t.attributes;if(!o)return null;for(let a=0;a<o.length;a+=1){let i=o[a];if(!i)continue;if(String(i.name||"").toLowerCase()===n||!n.includes(":")&&String(i.localName||"").toLowerCase()===n)return i.value}return null}var Kd,sg,Yd,lg,Wn,Gn=dr(()=>{Vd();Kd=Object.freeze(["b","strong","i","em","u","s","sub","sup","code","span","a","br","ruby","rt","rp","small","mark"]),sg=Object.freeze(["table","caption","thead","tbody","tfoot","tr","th","td","colgroup","col"]),Yd=Object.freeze({ALLOWED_TAGS:[...Kd],ALLOWED_ATTR:["href"],ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!1,KEEP_CONTENT:!0,FORBID_TAGS:["script","style","iframe","frame","frameset","object","embed","applet","form","input","button","select","textarea","meta","link","base","svg","math","template","noscript"],FORBID_ATTR:["style","src","srcset","formaction","xlink:href","onerror","onload","onclick"]}),lg=Object.freeze({...Yd,ALLOWED_TAGS:[...Kd,...sg]}),Wn=null});function Xn(t){return t.nextId()}function ug(t){if(!t||t.nodeType!==1)return!1;if(t.hasAttribute?.("hidden")||nt(t,"aria-hidden")==="true")return!0;let e=nt(t,"style")||"";return/display\s*:\s*none|visibility\s*:\s*hidden/i.test(e)}function pg(t,e){typeof t?.warn=="function"&&t.warn(e)}function Ds(t){for(let e of Array.from(t?.children||[])){let r=ur(e);if(Qd.has(r)&&r!=="span"&&r!=="a"||Ds(e))return!0}return!1}function Jd(t){let e=Array.from(t.querySelectorAll(hg));for(let r=e.length-1;r>=0;r-=1){let n=e[r];if(!n.parentNode)continue;let o=t.ownerDocument.createDocumentFragment();for(;n.firstChild;)o.appendChild(n.firstChild);o.appendChild(t.ownerDocument.createElement("br")),n.parentNode.replaceChild(o,n)}return t}function eh(t){for(let e of Nt(t,"img"))e.remove();for(let e of Nt(t,"image"))e.remove()}function qn(t){let e=[],r=n=>{for(let o of Array.from(n?.children||[])){let a=ur(o);a==="img"||a==="image"?e.push(o):a==="svg"?e.push(...Nt(o,"image")):a!=="script"&&a!=="style"&&r(o)}};return r(t),e}function Fs(t,e){if(!t||typeof e?.resolveLink!="function")return;let r=Array.from(t.getElementsByTagName?.("a")||[]);for(let n of r){let o=n.getAttribute("href");if(n.removeAttribute("href"),n.removeAttribute("data-chapter"),n.removeAttribute("data-anchor"),!o)continue;let a=null;try{a=e.resolveLink(o)}catch{a=null}if(a){if(a.external){a.href&&n.setAttribute("href",a.href);continue}Number.isInteger(a.chapter)&&a.chapter>=0&&(n.setAttribute("data-chapter",String(a.chapter)),a.anchor&&n.setAttribute("data-anchor",String(a.anchor).slice(0,300)))}}}function th(t,e){let r=oi(t.innerHTML);if(!r)return null;let n=Jo("div");n.innerHTML=r,Fs(n,e);let o=n.innerHTML.replace(/^(?:\s*<br\s*\/?>\s*)+/i,"").replace(/(?:\s*<br\s*\/?>\s*)+$/i,"");if(!o)return null;let a=lt(n.textContent);return a?{html:o,text:a}:null}function si(t,e,r,n={}){let o=oi(r);if(!o)return null;let a=Jo("div");a.innerHTML=o,Fs(a,t);let i=a.innerHTML,s=lt(a.textContent);return s?{id:Xn(t),kind:e,html:i,text:s,...n}:null}function zs(t,e){let r=String(e??"").replace(/\r\n?/g,`
`).replace(/\u00a0/g," ").replace(/^\n+|\n+$/g,"");return r.trim()?{id:Xn(t),kind:"code",html:jn(r),text:r}:null}function Bs(t,e,r={}){let n=Os(e);if(!n)return null;let o=Jo("div");if(o.innerHTML=n,!o.querySelector("table"))return null;Fs(o,t);let i=o.innerHTML,s=lt(o.textContent);return s?{id:Xn(t),kind:"table",html:i,text:s,...r}:null}function $s(t,{src:e,alt:r="",caption:n=""}={}){if(!e)return null;let o={id:Xn(t),kind:"image",src:e},a=lt(r),i=lt(n);return a&&(o.alt=a),i&&(o.caption=i),o}function Hs(t){return{id:Xn(t),kind:"rule"}}function Vn(t,e){let r=[];return t&&ai(t,e,r),r}function ai(t,e,r){let n=[],o=()=>{if(n.length===0)return;let a=Jo("div");for(let s of n)a.appendChild(s.cloneNode(!0));let i=lt(a.textContent)!==""||qn(a).length>0;n=[],i&&vn("paragraph",a,e,r)};for(let a of Array.from(t.childNodes||[])){if(a.nodeType===3){String(a.textContent||"").trim()&&n.push(a);continue}if(a.nodeType!==1||ug(a))continue;let i=ur(a);cg.has(i)||(Qd.has(i)?(o(),fg(a,i,e,r)):n.push(a))}o()}function fg(t,e,r,n){if(Ls.has(e)){vn("heading",t,r,n,{level:Number(e.slice(1)),stripImages:!0,flatten:!1});return}switch(e){case"p":vn("paragraph",t,r,n);return;case"li":case"dt":vn("list-item",t,r,n,{flatten:!0});return;case"dd":vn("paragraph",t,r,n,{flatten:!0});return;case"blockquote":vn("quote",t,r,n,{flatten:!0});return;case"pre":mg(t,r,n);return;case"table":bg(t,r,n);return;case"hr":n.push(Hs(r));return;case"figure":{gg(t,r,n);return}case"img":case"image":ii(t,r,n,"");return;case"picture":case"svg":{for(let o of qn(t))ii(o,r,n,"");return}case"ul":case"ol":{for(let o of Array.from(t.children||[]))ur(o)==="li"?vn("list-item",o,r,n,{flatten:!0}):ai(o,r,n);return}case"dl":{ai(t,r,n);return}case"figcaption":return;default:dg.has(e)||Ds(t)?ai(t,r,n):vn("paragraph",t,r,n)}}function vn(t,e,r,n,o={}){let a=e.cloneNode(!0),i=qn(a);if(i.length>0)for(let l of i)l.remove();o.stripImages&&eh(a),o.flatten!==!1&&Jd(a);let s=th(a,r);if(s){let l={id:Xn(r),kind:t,html:s.html,text:s.text};o.level&&(l.level=o.level),n.push(l)}if(!o.stripImages&&i.length>0){let l=qn(e);for(let d of l)ii(d,r,n,"")}}function ii(t,e,r,n){let o=nt(t,"src")||nt(t,"xlink:href")||nt(t,"href");if(!o)return;let a=null;try{a=typeof e?.resolveImage=="function"?e.resolveImage(o):null}catch{a=null}if(!a||!a.src)return;let i=nt(t,"alt")||nt(t,"title")||a.alt||"",s=$s(e,{src:a.src,alt:i,caption:n||a.caption||""});s&&r.push(s)}function gg(t,e,r){let n=Nt(t,"figcaption")[0]||null,o=n?lt(n.textContent):"",a=qn(t);a.length>0&&a.forEach((l,d)=>{ii(l,e,r,d===0?o:"")});let i=t.cloneNode(!0);eh(i);for(let l of Nt(i,"figcaption"))l.remove();Ds(i)&&Jd(i);let s=th(i,e);s&&s.text!==o&&r.push({id:Xn(e),kind:"paragraph",html:s.html,text:s.text})}function mg(t,e,r){let n=Nt(t,"code")[0]||t,o=String(n.textContent||"").replace(/\r\n?/g,`
`);if(!o.trim())return;let a=oi(n.innerHTML),i=zs(e,o);i&&(a&&(i.html=a),r.push(i))}function bg(t,e,r){let n=t.cloneNode(!0),o=Os(n.outerHTML);if(!o){pg(e,"\u5DF2\u8DF3\u8FC7\u4E00\u4E2A\u65E0\u6CD5\u89E3\u6790\u7684\u8868\u683C\u3002");return}let a=Bs(e,o);a&&r.push(a)}var Ls,cg,dg,Qd,hg,ea=dr(()=>{Gn();Ls=new Set(["h1","h2","h3","h4","h5","h6"]),cg=new Set(["script","style","noscript","template","head","title","meta","link","base","iframe","frame","frameset","object","embed","applet","form","input","select","textarea","button","audio","video","source","track","canvas","map","area","math","nav"]),dg=new Set(["div","section","article","main","header","footer","aside","center","details","summary","fieldset","body","html","hgroup","dl"]),Qd=new Set([...Ls,"p","div","section","article","main","header","footer","aside","center","details","summary","fieldset","body","html","hgroup","dl","dt","dd","blockquote","pre","table","ul","ol","li","figure","figcaption","hr","address","picture","svg","img","image"]),hg=[...Ls,"p","div","section","article","header","footer","aside","center","details","summary","fieldset","blockquote","ul","ol","li","dl","dt","dd","table","thead","tbody","tfoot","tr","td","th","caption","pre","figure","figcaption","address","hgroup"].join(",")});function li(t){if(typeof t!="string"||!t)return"";let e=t.split(/[\\/]/).pop()||"",r=/\.([A-Za-z0-9]+)$/.exec(e);return r?r[1].toLowerCase():""}function Sr(t){let e=String(t||"").replace(/\\/g,"/"),r=e.lastIndexOf("/");return r>=0?e.slice(r+1):e}function xo(t){let e=String(t||"").replace(/\\/g,"/"),r=e.lastIndexOf("/");return r>0?e.slice(0,r):""}function Us(t){let e=[];for(let r of String(t||"").replace(/\\/g,"/").split("/"))if(!(!r||r===".")){if(r===".."){e.pop();continue}e.push(r)}return e.join("/")}function ta(t){let e=String(t||""),r=e.indexOf("#"),n=r>=0?e.slice(0,r):e,o=r>=0?e.slice(r+1):"";try{o=decodeURIComponent(o)}catch{}let a=n.indexOf("?");return{path:a>=0?n.slice(0,a):n,fragment:o}}function yn(t,e){if(!e)return null;let r=String(e).trim();if(!r||r.startsWith("#")||/^[a-z][a-z0-9+.-]*:/i.test(r)||r.startsWith("//"))return null;let{path:n}=ta(r);if(!n)return null;let o=n;try{o=decodeURIComponent(n)}catch{}o=o.replace(/\\/g,"/");let a=o.startsWith("/")?o.slice(1):t?`${t}/${o}`:o;return Us(a)||null}function nh(t){let e=new Map,r=[];for(let[n,o]of Object.entries(t||{})){if(!o||/\/$/.test(n))continue;let a=Us(n);if(!a)continue;let i=a.toLowerCase();e.has(i)||(e.set(i,{name:a,bytes:o}),r.push(a))}return{names:r,get(n){let o=Us(n||"");return o&&e.get(o.toLowerCase())||null},has(n){return!!this.get(n)}}}function ra(t){return xg[li(t)]||"application/octet-stream"}async function tn(t){if(!t||typeof t.arrayBuffer!="function")throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u6570\u636E\uFF1A\u8BF7\u9009\u62E9\u4E00\u4E2A\u6709\u6548\u7684\u6587\u6863\u6587\u4EF6\u3002");let e;try{e=await t.arrayBuffer()}catch{throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u6570\u636E\uFF0C\u6587\u4EF6\u53EF\u80FD\u5DF2\u88AB\u79FB\u52A8\u6216\u635F\u574F\u3002")}let r=new Uint8Array(e);if(r.length===0)throw new Error("\u6587\u4EF6\u5185\u5BB9\u4E3A\u7A7A\u3002");return r}function rn(t=40){let e=[],r=new Set,n=!1;return{warnings:e,warn:a=>{let i=String(a||"").trim();!i||r.has(i)||(r.add(i),e.length<t?e.push(i):n||(n=!0,e.push("\u8FD8\u6709\u66F4\u591A\u89E3\u6790\u8B66\u544A\u672A\u663E\u793A\u3002")))}}}function Er(t,e){if(t instanceof Error&&/[\u4e00-\u9fff]/.test(t.message))return t;let r=t instanceof Error?t.message:String(t??""),n=r?`${e}\uFF1A${r}`:`${e}\u3002`;return new Error(/[。！？]$/.test(n)?n:`${n}\u3002`)}function na(t,e){let r=(Array.isArray(e)?e:[]).filter(a=>a&&Number.isInteger(a.chapterIndex)&&a.chapterIndex>=0&&a.chapterIndex<t.length&&a.title);for(let a=0;a<t.length;a+=1){let i=r.find(l=>l.chapterIndex===a),s=t[a].blocks.find(l=>l.kind==="heading"&&l.text);t[a].title=(i?.title||s?.text||`\u7B2C ${a+1} \u7AE0`).slice(0,120)}if(r.length===0)return t.map((a,i)=>({title:a.title,chapterIndex:i,depth:0}));let n=[],o=new Set;for(let a=0;a<t.length;a+=1){let i=r.filter(s=>s.chapterIndex===a);if(i.length===0){let s={title:t[a].title,chapterIndex:a,depth:0},l=`${a}|${s.title}|0`;o.has(l)||(o.add(l),n.push(s));continue}for(let s of i){let l=Number.isInteger(s.depth)&&s.depth>=0?s.depth:0,d=s.anchor?String(s.anchor).slice(0,300):"",f=`${s.chapterIndex}|${s.title}|${l}|${d}`;o.has(f)||(o.add(f),n.push({title:s.title,chapterIndex:s.chapterIndex,depth:l,...d?{anchor:d}:{}}))}}return n}function Yn(t,e="\u672A\u547D\u540D\u6587\u6863"){return Sr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||e}function wn(){let t=[];return{urls:t,create(e){let r=URL.createObjectURL(e);return t.push(r),r},add(e){return e&&!t.includes(e)&&t.push(e),e},dispose(){for(;t.length>0;){let e=t.pop();try{URL.revokeObjectURL(e)}catch{}}}}}function _n(t){let e=/^data:([^;,]*)((?:;[^;,]*)*),(.*)$/is.exec(String(t||""));if(!e)return null;let r=e[1]||"application/octet-stream",n=e[2]||"",o=e[3]||"",a=/;base64/i.test(n);try{let i;if(a){let l=o.replace(/\s+/g,"");i=atob(l)}else i=decodeURIComponent(o);let s=new Uint8Array(i.length);for(let l=0;l<i.length;l+=1)s[l]=i.charCodeAt(l)&255;return new Blob([s],{type:r})}catch{return null}}function rh(t){let e=String(t||"").trim().toLowerCase();return!e||/^(utf-?8|utf8)$/.test(e)?"utf-8":/^utf-?16(le)?$/.test(e)?"utf-16le":/^utf-?16be$/.test(e)?"utf-16be":/^(gb2312|gbk|gb18030|cp936|x-gbk)$/.test(e)?"gb18030":/^(big5|big5-hkscs|cp950)$/.test(e)?"big5":/^(shift_jis|sjis|windows-31j|cp932)$/.test(e)?"shift_jis":/^(euc-kr|ks_c_5601-1987|cp949)$/.test(e)?"euc-kr":/^(iso-8859-1|latin1|windows-1252|cp1252)$/.test(e)?"windows-1252":e}function Kn(t,e,r=!1){return new TextDecoder(e,{fatal:r}).decode(t)}function yg(t){let e=Kn(t.subarray(0,Math.min(t.length,512)),"windows-1252"),r=vg.exec(e);return r&&(r[1]||r[2])||""}function nn(t,{defaultEncoding:e="utf-8",sniffDeclaration:r=!0}={}){let n=t instanceof Uint8Array?t:new Uint8Array(t);if(n.length===0)return"";if(n[0]===239&&n[1]===187&&n[2]===191)return Kn(n.subarray(3),"utf-8");if(n[0]===255&&n[1]===254)return Kn(n.subarray(2),"utf-16le");if(n[0]===254&&n[1]===255)return Kn(n.subarray(2),"utf-16be");let o=e||"utf-8";if(r){let a=yg(n);a&&(o=rh(a))}o=rh(o);try{return Kn(n,o,!0)}catch{try{return Kn(n,"utf-8",!0)}catch{return Kn(n,"utf-8",!1)}}}function ci(t){if(!t)return!1;let e=t.slice(0,4096);if(!e)return!1;let r=0;for(let n=0;n<e.length;n+=1){let o=e.charCodeAt(n);(o===65533||o===0||o<9||o>13&&o<32)&&(r+=1)}return r/e.length>.08}var xg,vg,Zn=dr(()=>{xg={jpg:"image/jpeg",jpeg:"image/jpeg",jpe:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",avif:"image/avif",bmp:"image/bmp",tif:"image/tiff",tiff:"image/tiff",svg:"image/svg+xml",ico:"image/x-icon",jxl:"image/jxl"};vg=/(?:encoding\s*=\s*["']([A-Za-z0-9._-]+)["'])|(?:charset\s*=\s*["']?([A-Za-z0-9._-]+))/i});function oh(t){return/^(https?:|mailto:|tel:)/i.test(t)}function Ws(t){return/^[a-z][a-z0-9+.-]*:/i.test(t)}function _g(t,e){e&&!t.includes(e)&&t.push(e)}async function ah(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=rn(),a=wn();try{let oe=function(c,k){let b=String(c||"").trim();if(!b||oh(b)||b.startsWith("//")||Ws(b))return null;let{path:Y,fragment:ce}=ta(b),he=Y?yn(k,b):null,ye=he?H.get(he.toLowerCase()):void 0;return ye==null&&he&&(ye=ne.get(Sr(he).toLowerCase())),ye==null?null:{chapterIndex:ye,anchor:ce}},i=await tn(t),s;try{s=Ld(i)}catch{throw new Error("EPUB \u538B\u7F29\u5305\u5DF2\u635F\u574F\uFF0C\u65E0\u6CD5\u89E3\u538B\u3002")}let l=nh(s);if(l.names.length===0)throw new Error("EPUB \u538B\u7F29\u5305\u4E0D\u5305\u542B\u4EFB\u4F55\u6587\u4EF6\u3002");let d=l.get("META-INF/encryption.xml");if(d){let c=nn(d.bytes);if(/<encrypteddata/i.test(c)&&/application\/(xhtml\+xml|epub\+zip)/i.test(c))throw new Error("\u8BE5 EPUB \u6587\u4EF6\u53D7 DRM \u4FDD\u62A4\uFF0C\u65E0\u6CD5\u6253\u5F00\u3002")}let f=l.get("META-INF/container.xml");if(!f){let c=l.names.find(k=>/container\.xml$/i.test(k));c&&(f=l.get(c))}if(!f)throw new Error("\u7F3A\u5C11 META-INF/container.xml\uFF0C\u4E0D\u662F\u6709\u6548\u7684 EPUB \u6587\u4EF6\u3002");let g=bo(nn(f.bytes));if(!g)throw new Error("META-INF/container.xml \u683C\u5F0F\u9519\u8BEF\u3002");let u=Nt(g,"rootfile")[0],p=u?nt(u,"full-path"):"";if(!p)throw new Error("container.xml \u4E2D\u6CA1\u6709\u6307\u5B9A OPF \u5185\u5BB9\u6E05\u5355\u3002");let _=l.get(p)||l.get(yn("",p));if(!_)throw new Error(`\u627E\u4E0D\u5230 EPUB \u5185\u5BB9\u6E05\u5355\u6587\u4EF6\uFF1A${p}`);let S=xo(_.name),v=bo(nn(_.bytes));if(!v)throw new Error("EPUB \u5185\u5BB9\u6E05\u5355\uFF08OPF\uFF09\u683C\u5F0F\u9519\u8BEF\u3002");let A=Yt(v,"metadata")||v,y=Nt(A,"title").map(c=>lt(c.textContent)).filter(Boolean),N=[];for(let c of Nt(A,"creator"))_g(N,lt(c.textContent));let M=Nt(A,"language").map(c=>lt(c.textContent)).filter(Boolean),L=Nt(A,"meta").filter(c=>String(nt(c,"name")||"").toLowerCase()==="cover").map(c=>nt(c,"content")||"").find(Boolean)||"",I=Yt(v,"manifest");if(!I)throw new Error("OPF \u5185\u5BB9\u6E05\u5355\u7F3A\u5C11 manifest \u5217\u8868\u3002");let x=new Map;for(let c of Nt(I,"item")){let k=nt(c,"id");if(!k||x.has(k))continue;let b=nt(c,"href")||"",Y=yn(S,b);x.set(k,{id:k,href:b,path:Y,mediaType:String(nt(c,"media-type")||"").toLowerCase(),properties:String(nt(c,"properties")||"").toLowerCase()})}let O=Yt(v,"spine");if(!O)throw new Error("OPF \u5185\u5BB9\u6E05\u5355\u7F3A\u5C11 spine \u9605\u8BFB\u987A\u5E8F\u3002");let D=Nt(O,"itemref");if(D.length===0)throw new Error("EPUB \u7684\u9605\u8BFB\u987A\u5E8F\uFF08spine\uFF09\u4E3A\u7A7A\u3002");let te=[],H=new Map,ne=new Map;for(let c of D){let k=nt(c,"idref"),b=k?x.get(k):null;if(!b){o(`\u9605\u8BFB\u987A\u5E8F\u4E2D\u7684\u6761\u76EE\u201C${k||"\u672A\u77E5"}\u201D\u4E0D\u5728\u6E05\u5355\u4E2D\uFF0C\u5DF2\u8DF3\u8FC7\u3002`);continue}if(/\bnav\b/.test(b.properties))continue;if(!b.path){o(`\u7AE0\u8282\u6587\u4EF6\u201C${b.href||b.id}\u201D\u4F4D\u4E8E\u5916\u90E8\u7F51\u7EDC\uFF0C\u5DF2\u8DF3\u8FC7\u3002`);continue}let Y=l.get(b.path);if(!Y){o(`\u627E\u4E0D\u5230\u7AE0\u8282\u6587\u4EF6\uFF1A${b.path}`);continue}let ce=b.mediaType||"",he=wg.has(ce)||/\.(x?html?|htm)$/i.test(b.path),ye=ce.startsWith("image/")||/\.(png|jpe?g|gif|webp|avif|bmp|tiff?|svg)$/i.test(b.path);if(!he&&!ye){o(`\u4E0D\u652F\u6301\u7684\u7AE0\u8282\u7C7B\u578B\uFF08${ce||"\u672A\u77E5"}\uFF09\uFF1A${b.path}`);continue}let Te=te.length;te.push({item:b,entry:Y,isImage:ye,chapterIndex:Te}),H.set(b.path.toLowerCase(),Te);let We=Sr(b.path).toLowerCase();ne.has(We)||ne.set(We,Te)}if(te.length===0)throw new Error("EPUB \u4E2D\u6CA1\u6709\u627E\u5230\u53EF\u663E\u793A\u7684\u7AE0\u8282\u5185\u5BB9\u3002");let re=0,z=()=>`b${re+=1}`,B=[];for(let c of te){let{item:k,entry:b,isImage:Y,chapterIndex:ce}=c;if(Y){let je=k.mediaType.startsWith("image/")?k.mediaType:ra(k.path),De=a.create(new Blob([b.bytes],{type:je}));B.push({id:`ch${ce}`,title:"",blocks:[{id:z(),kind:"image",src:De}]});continue}let he=xo(k.path),ye=je=>{let De=String(je||"").trim();if(!De)return null;if(/^data:/i.test(De)){let xt=_n(De);return xt?{src:a.create(xt)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684\u5185\u5D4C\u56FE\u7247\u3002"),null)}if(/^(https?:)?\/\//i.test(De))return o("\u5DF2\u8DF3\u8FC7\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\uFF08\u907F\u514D\u8DDF\u8E2A\u4E0E\u9690\u79C1\u6CC4\u9732\uFF09\u3002"),null;if(Ws(De))return null;let ke=yn(he,De),ht=ke?l.get(ke):null;if(!ht)return o(`\u627E\u4E0D\u5230\u56FE\u7247\u6587\u4EF6\uFF1A${Sr(ke||De)}`),null;let Ge=ra(ke);return{src:a.create(new Blob([ht.bytes],{type:Ge}))}},Te=je=>{let De=String(je||"").trim();if(!De)return null;if(oh(De))return{external:!0,href:De};if(De.startsWith("//")||Ws(De))return null;let{path:ke,fragment:ht}=ta(De);if(!ke)return{chapter:ce,anchor:ht};let Ge=yn(he,De),xt=Ge?H.get(Ge.toLowerCase()):void 0;return xt==null&&Ge&&(xt=ne.get(Sr(Ge).toLowerCase())),xt==null?null:{chapter:xt,anchor:ht}},We="";try{We=nn(b.bytes)}catch{o(`\u7B2C ${ce+1} \u7AE0\u7684\u7F16\u7801\u65E0\u6CD5\u8BC6\u522B\uFF0C\u5DF2\u5C3D\u91CF\u6309 UTF-8 \u8BFB\u53D6\u3002`)}let Ce=bo(We),ue=Ce&&(Yt(Ce,"body")||Ce.documentElement)||null,ze=ue?null:en(We),dt=ue||ze?.body||ze?.documentElement||null,$e=dt?Vn(dt,{nextId:z,warn:o,chapterIndex:ce,resolveImage:ye,resolveLink:Te}):[];$e.length===0&&o(`\u7B2C ${ce+1} \u7AE0\u6CA1\u6709\u53EF\u663E\u793A\u7684\u5185\u5BB9\u3002`),B.push({id:`ch${ce}`,title:"",blocks:$e})}let q=[...x.values()].find(c=>/\bnav\b/.test(c.properties)&&c.path),ae=nt(O,"toc"),F=ae&&x.get(ae)||[...x.values()].find(c=>c.mediaType==="application/x-dtbncx+xml"&&c.path)||null,de=c=>{let k=l.get(c.path);if(!k)return o(`\u627E\u4E0D\u5230 EPUB \u5BFC\u822A\u6587\u4EF6\uFF1A${c.path}`),[];let b=nn(k.bytes),Y=bo(b)||en(b);if(!Y)return o("\u65E0\u6CD5\u89E3\u6790 EPUB \u5BFC\u822A\u76EE\u5F55\u3002"),[];let ce=Nt(Y,"nav"),he=ce.find(ze=>String(nt(ze,"type")||nt(ze,"epub:type")||"").toLowerCase().split(/\s+/).includes("toc"))||ce[0]||null;if(!he)return[];let ye=Yt(he,"ol")||Yt(he,"ul");if(!ye)return[];let Te=[],We=xo(c.path),Ce=H.get(c.path.toLowerCase()),ue=(ze,dt)=>{for(let $e of Array.from(ze.children||[])){if(ur($e)!=="li")continue;let je=null,De=null;for(let ke of Array.from($e.children||[])){let ht=ur(ke);!je&&(ht==="a"||ht==="span")&&(je=ke),!De&&(ht==="ol"||ht==="ul")&&(De=ke)}if(je&&ur(je)==="a"){let ke=lt(je.textContent).slice(0,200),ht=nt(je,"href")||"",Ge=oe(ht,We);if(!Ge&&ht.startsWith("#")&&Ce!=null){let{fragment:xt}=ta(ht);Ge={chapterIndex:Ce,anchor:xt}}ke&&Ge&&Te.push({title:ke,chapterIndex:Ge.chapterIndex,depth:dt,...Ge.anchor?{anchor:Ge.anchor}:{}})}De&&ue(De,dt+1)}};return ue(ye,0),Te},ve=c=>{let k=l.get(c.path);if(!k)return o(`\u627E\u4E0D\u5230 EPUB NCX \u76EE\u5F55\u6587\u4EF6\uFF1A${c.path}`),[];let b=nn(k.bytes),Y=bo(b)||en(b);if(!Y)return o("\u65E0\u6CD5\u89E3\u6790 EPUB NCX \u76EE\u5F55\u3002"),[];let ce=[],he=xo(c.path);for(let ye of Nt(Y,"navpoint")){let Te=Yt(ye,"navlabel"),We=Te?Yt(Te,"text"):Yt(ye,"text"),Ce=lt(We?.textContent||"").slice(0,200),ue=Array.from(ye.children||[]).find($e=>ur($e)==="content")||Yt(ye,"content"),ze=oe(nt(ue,"src")||"",he);if(!Ce||!ze)continue;let dt=0;for(let $e=ye.parentNode;$e;$e=$e.parentNode)ur($e)==="navpoint"&&(dt+=1);ce.push({title:Ce,chapterIndex:ze.chapterIndex,depth:dt,...ze.anchor?{anchor:ze.anchor}:{}})}return ce},Ae=[];q&&(Ae=de(q),Ae.length===0&&o("EPUB \u5BFC\u822A\u6587\u4EF6\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u5F55\u9879\u3002"));let J=[];Ae.length===0&&F&&(J=ve(F));let ge=Ae.length>0?Ae:J;ge.length===0&&o("\u672A\u627E\u5230 EPUB \u76EE\u5F55\uFF0C\u5DF2\u6309\u7AE0\u8282\u6807\u9898\u751F\u6210\u3002");let Ue=na(B,ge),we="",Be=[...x.values()].find(c=>/\bcover-image\b/.test(c.properties)&&c.path);if(Be)we=Be.path;else if(L&&x.get(L)?.path)we=x.get(L).path;else{let c=Yt(v,"guide");if(c){let k=Nt(c,"reference").find(b=>/\bcover\b/.test(String(nt(b,"type")||"").toLowerCase()));k&&(we=yn(S,nt(k,"href")||"")||"")}}let Xe="";if(we){let c=l.get(we);if(c){let k=ra(we);if(k.startsWith("image/"))Xe=a.create(new Blob([c.bytes],{type:k}));else if(/\.(x?html?|htm)$/i.test(we)){let b=en(nn(c.bytes)),Y=qn(b?.body||b?.documentElement||b)[0],ce=Y&&(nt(Y,"src")||nt(Y,"xlink:href"))||"",he=ce?yn(xo(we),ce):null,ye=he?l.get(he):null;ye&&(Xe=a.create(new Blob([ye.bytes],{type:ra(he)})))}}}let h={title:y[0]||Yn(r),chapters:B,toc:Ue,warnings:n,dispose:()=>a.dispose()};return N.length>0&&(h.author=N.join(", ")),M.length>0&&(h.language=M[0]),Xe&&(h.cover=Xe),h}catch(i){throw a.dispose(),Er(i,"\u65E0\u6CD5\u89E3\u6790 EPUB \u6587\u4EF6")}}var wg,ih=dr(()=>{Ts();Gn();ea();Zn();wg=new Set(["application/xhtml+xml","text/html","application/xml","text/xml","text/xhtml"])});function kg(t){return Sr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u6863"}async function oa(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=rn(),a=wn();try{let i=await tn(t),s=nn(i),l=en(s);if(!l)throw new Error("HTML \u6587\u4EF6\u683C\u5F0F\u9519\u8BEF\uFF0C\u65E0\u6CD5\u89E3\u6790\u3002");let d=l.body||l.documentElement;if(!d)throw new Error("HTML \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let f=0,u=Vn(d,{nextId:()=>`b${f+=1}`,warn:o,resolveImage:y=>{let N=String(y||"").trim();if(!N)return null;if(/^data:/i.test(N)){let M=_n(N);return M?{src:a.create(M)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684\u5185\u5D4C\u56FE\u7247\u3002"),null)}return/^(https?:)?\/\//i.test(N)?(o("\u5DF2\u8DF3\u8FC7\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\uFF08\u907F\u514D\u8DDF\u8E2A\u4E0E\u9690\u79C1\u6CC4\u9732\uFF09\u3002"),null):(o("\u5DF2\u8DF3\u8FC7 HTML \u4E2D\u7684\u672C\u5730\u56FE\u7247\uFF08\u65E0\u6CD5\u5B9A\u4F4D\u56FE\u7247\u6587\u4EF6\uFF09\u3002"),null)},resolveLink:y=>{let N=String(y||"").trim();return N?/^(https?:\/\/|mailto:)/i.test(N)?{external:!0,href:N}:N.startsWith("#")?{chapter:0,anchor:N.slice(1)}:null:null}});if(u.length===0)throw new Error("HTML \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let p=Yt(l,"title"),_=u.find(y=>y.kind==="heading"&&y.text),S=lt(p?.textContent||"")||_?.text||kg(r),v=nt(l.documentElement,"lang")||"",P=[];for(let y of Nt(l,"meta"))if(String(nt(y,"name")||"").toLowerCase()==="author"){let N=lt(nt(y,"content")||"");N&&!P.includes(N)&&P.push(N)}let A={title:S,chapters:[{id:"ch0",title:S,blocks:u}],toc:[{title:S,chapterIndex:0,depth:0}],warnings:n,dispose:()=>a.dispose()};return v&&(A.language=v),P.length>0&&(A.author=P.join(", ")),A}catch(i){throw a.dispose(),Er(i,"\u65E0\u6CD5\u89E3\u6790 HTML \u6587\u4EF6")}}var sh=dr(()=>{Gn();ea();Zn()});function lh(t){return/[\u3000-\u303f\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uffef\uac00-\ud7af]/.test(t)}function ch(t){let e="";for(let r of t){let n=String(r).trim();if(!n)continue;if(!e){e=n;continue}let o=e[e.length-1],a=n[0];e+=lh(o)&&lh(a)?n:` ${n}`}return e}function Cg(t){let e=String(t||"").trim();if(!e||e.length>Ng)return!1;if(Sg.test(e)||Eg.test(e))return!/[，,。；;]/.test(e);if(Ag.test(e)){let r=e.split(/\s+/).filter(Boolean).length;return!(r>14||/\.$/u.test(e)&&r>3)}return!1}function js(t){if(!t||t.length===0)throw new Error("\u6587\u672C\u6587\u4EF6\u5185\u5BB9\u4E3A\u7A7A\u3002");if(t[0]===239&&t[1]===187&&t[2]===191)return{text:new TextDecoder("utf-8").decode(t.subarray(3)),encoding:"utf-8"};if(t[0]===255&&t[1]===254)return{text:new TextDecoder("utf-16le").decode(t.subarray(2)),encoding:"utf-16le"};if(t[0]===254&&t[1]===255)return{text:new TextDecoder("utf-16be").decode(t.subarray(2)),encoding:"utf-16be"};let e=Math.min(t.length,4096),r=0,n=0;for(let a=0;a<e;a+=2)t[a]===0&&(r+=1),a+1<e&&t[a+1]===0&&(n+=1);let o=Math.ceil(e/2);if(o>4&&n/o>.35&&r/o<.05)return{text:new TextDecoder("utf-16le").decode(t),encoding:"utf-16le"};if(o>4&&r/o>.35&&n/o<.05)return{text:new TextDecoder("utf-16be").decode(t),encoding:"utf-16be"};try{return{text:new TextDecoder("utf-8",{fatal:!0}).decode(t),encoding:"utf-8"}}catch{}try{return{text:new TextDecoder("gb18030",{fatal:!0}).decode(t),encoding:"gb18030"}}catch{}return{text:new TextDecoder("utf-8").decode(t),encoding:"utf-8"}}function Ig(t){let e=[],r=[],n=()=>{r.length>0&&(e.push(r),r=[])};for(let o of t)String(o).trim()?r.push(o):n();return n(),e}function Rg(t){let e=t.map(n=>n.trim()).filter(Boolean);return e.length<2?!1:e.filter(n=>/[。！？!?…"”’」』）)]$/.test(n)).length/e.length>=.5}function Mg(t){let e=t.map(o=>String(o)),r=Ig(e);if(r.length>1)return r.map(o=>ch(o)).filter(Boolean);let n=e.map(o=>o.trim()).filter(Boolean);return n.length<=1||Rg(n)?n:r.map(o=>ch(o)).filter(Boolean)}function Pg(t,{fallbackTitle:e="\u6B63\u6587"}={}){let n=String(t||"").replace(/\r\n?/g,`
`).replace(/\u0000/g,"").split(`
`),o=[],a={title:"",lines:[],heading:""},i=()=>{(a.heading||a.lines.some(s=>s.trim()))&&o.push(a),a={title:"",lines:[],heading:""}};for(let s of n){if(Cg(s)){i();let l=s.trim();a={title:l,lines:[],heading:l};continue}a.lines.push(s)}return i(),o.length===0?[{title:e,lines:n,heading:""}]:o}function Gs(t,{nextId:e,title:r="\u6B63\u6587"}={}){let n=Pg(t,{fallbackTitle:r}),o=i=>i.lines.some(s=>String(s).trim()),a=[];for(let i=0;i<n.length;i+=1){if(o(n[i])){a.push(n[i]);continue}let s=i;for(;s+1<n.length&&!o(n[s+1]);)s+=1;if(s-i+1>=3){i=s;continue}a.push(...n.slice(i,s+1)),i=s}return n=a.length>0?a:n,n.map((i,s)=>{let l=[];i.heading&&l.push({id:e(),kind:"heading",level:1,html:jn(i.heading),text:lt(i.heading)});for(let d of Mg(i.lines))l.push({id:e(),kind:"paragraph",html:jn(d),text:d});return{id:`ch${s}`,title:i.title||r||`\u7B2C ${s+1} \u7AE0`,blocks:l}})}function Og(t){return Sr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u672C"}async function qs(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=rn();try{let a=await tn(t),{text:i,encoding:s}=js(a);if(ci(i))throw new Error("\u6587\u672C\u6587\u4EF6\u5305\u542B\u5927\u91CF\u65E0\u6CD5\u8BC6\u522B\u7684\u5B57\u7B26\uFF0C\u53EF\u80FD\u4E0D\u662F\u7EAF\u6587\u672C\u6587\u4EF6\u3002");s==="gb18030"&&o("\u5DF2\u6309 GB18030 \u7F16\u7801\u8BFB\u53D6\u6587\u672C\uFF08\u975E UTF-8\uFF09\u3002");let l=Og(r),d=0,g=Gs(i,{nextId:()=>`b${d+=1}`,title:l});if(g.length===0||g.every(p=>p.blocks.length===0))throw new Error("\u6587\u672C\u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");g[0].title||(g[0].title=l);let u=g.map((p,_)=>({title:p.title,chapterIndex:_,depth:0}));return{title:l,chapters:g,toc:u,warnings:n,encoding:s,dispose:()=>{}}}catch(a){throw Er(a,"\u65E0\u6CD5\u89E3\u6790\u6587\u672C\u6587\u4EF6")}}var Tg,Sg,Eg,Ag,Ng,di=dr(()=>{Gn();Zn();Tg="[0-9\uFF10-\uFF19\u96F6\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u767E\u5343\u4E07\u4E24]",Sg=new RegExp(`^\\s*(\u7B2C\\s*${Tg}+\\s*[\u7AE0\u7BC0\u8282\u56DE\u5377\u7BC7])(?:[\\s:\uFF1A\xB7\u3001.\uFF0E\u2014\u2013-].*)?$`),Eg=/^\s*(序章|楔子|引子|前言|序言|后记|後記|尾声|尾聲|终章|終章|番外(?:篇)?)(?:[\s:：·、.．—–-].*)?$/,Ag=/^\s*((?:chapter|part|book|section)\s+(?:[0-9]+|[ivxlcdm]{1,8}|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty))(?:[.:：\s—–-].*)?$/i,Ng=72});function Fg(t){let e=String(t||"").trim();return e&&(/^(https?:\/\/|mailto:)/i.test(e)||e.startsWith("#"))?e:""}function Xs(t){let e=jn(String(t??"").trim()),r=[],n=o=>{let a=`\0${r.length}\0`;return r.push(o),a};return e=e.replace(/`([^`]+)`/g,(o,a)=>n(`<code>${a}</code>`)),e=e.replace(Lg,(o,a,i)=>{let s=Fg(i);return s?n(`<a href="${s}">${a}</a>`):a}),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/__([^_]+)__/g,"<strong>$1</strong>").replace(/~~([^~]+)~~/g,"<s>$1</s>").replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g,"$1<em>$2</em>").replace(/(^|[^_])_([^_\n]+)_(?!_)/g,"$1<em>$2</em>"),e=e.replace(/\u0000(\d+)\u0000/g,(o,a)=>r[Number(a)]??""),e}function zg(t){return Sr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u6863"}function aa(t){return String(t).trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(e=>e.trim())}function Bg(t){if(!/\|/.test(t))return!1;let e=aa(t);return e.length>0&&e.every(r=>/^:?-{3,}:?$/.test(r))}function hh(t,e){return!!e&&t.includes("|")&&Bg(e)&&aa(t).length===aa(e).length}function dh(t,e){return!!(/^\s{0,3}(#{1,6}\s|>|(?:```|~~~))/.test(t)||/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(t)||/^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/.test(t)||hh(t,e))}function $g(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=rn(),a=wn(),i=0,s={nextId:()=>`b${i+=1}`,warn:o,resolveLink:v=>{let P=String(v||"").trim();return P?/^(https?:\/\/|mailto:)/i.test(P)?{external:!0,href:P}:P.startsWith("#")?{chapter:0,anchor:P.slice(1)}:null:null}},l=[],d=[];function f(v){let P=String(v??""),A=[];return P=P.replace(Dg,(y,N,M)=>{let E=lt(N);if(/^data:image\//i.test(M)){let L=_n(M);if(L){let I=$s(s,{src:a.create(L),alt:E});I&&A.push(I)}else o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684 Markdown \u5185\u5D4C\u56FE\u7247\u3002")}else/^https?:/i.test(M)?o("\u5DF2\u8DF3\u8FC7 Markdown \u4E2D\u7684\u5916\u90E8\u56FE\u7247\uFF08\u907F\u514D\u7F51\u7EDC\u8DDF\u8E2A\uFF09\u3002"):o("\u5DF2\u8DF3\u8FC7 Markdown \u4E2D\u7684\u672C\u5730\u56FE\u7247\uFF08\u65E0\u6CD5\u5B9A\u4F4D\u56FE\u7247\u6587\u4EF6\uFF09\u3002");return E?` ${E} `:" "}),{html:Xs(P),images:A}}function g(v,P,A={}){let{html:y,images:N}=f(P),M=si(s,v,y,A);M&&l.push(M);for(let E of N)l.push(E);return!!M}let u=String(t??"").replace(/\r\n?/g,`
`).replace(/\u0000/g,"").split(`
`),p=0;for(;p<u.length;){let v=u[p];if(!v.trim()){p+=1;continue}let P=/^\s*(`{3,}|~{3,})\s*([A-Za-z0-9_+#.-]*)\s*$/.exec(v);if(P){let E=P[1],L=[];p+=1;let I=new RegExp(`^\\s*${E[0]==="`"?"`":"~"}{${E.length},}\\s*$`);for(;p<u.length;){if(I.test(u[p])){p+=1;break}L.push(u[p]),p+=1}let x=zs(s,L.join(`
`));x&&l.push(x);continue}let A=/^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(v);if(A){g("heading",A[2],{level:A[1].length}),p+=1;continue}if(/^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/.test(v)){l.push(Hs(s)),p+=1;continue}if(hh(v,u[p+1])){let E=aa(v);p+=2;let L=[];for(;p<u.length&&u[p].includes("|")&&u[p].trim();)L.push(aa(u[p])),p+=1;let I=`<thead><tr>${E.map(D=>`<th>${Xs(D)}</th>`).join("")}</tr></thead>`,x=L.length>0?`<tbody>${L.map(D=>`<tr>${E.map((te,H)=>`<td>${Xs(D[H]||"")}</td>`).join("")}</tr>`).join("")}</tbody>`:"",O=Bs(s,`<table>${I}${x}</table>`);O&&l.push(O);continue}if(/^\s{0,3}>/.test(v)){let E=[];for(;p<u.length&&/^\s{0,3}>/.test(u[p]);)E.push(u[p].replace(/^\s{0,3}>\s?/,"")),p+=1;let L=[],I=[];for(let O of E){let D=f(O);D.html&&L.push(D.html),I.push(...D.images)}let x=si(s,"quote",L.join("<br>"));x&&l.push(x);for(let O of I)l.push(O);continue}if(/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(v)){for(;p<u.length;){let E=/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+(.*)$/.exec(u[p]);if(!E)break;for(g("list-item",E[1]),p+=1;p<u.length&&/^\s{2,}\S/.test(u[p])&&!/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(u[p])&&!dh(u[p],u[p+1]);)p+=1}continue}let y=[];for(;p<u.length&&u[p].trim()&&!dh(u[p],u[p+1]);)y.push(u[p]),p+=1;if(y.length===0){p+=1;continue}let N=[];for(let E of y){let L=/(?: {2,}|\\)$/.test(E),I=f(E.replace(/(?: {2,}|\\)$/,""));I.html&&N.push(L?`${I.html}<br>`:I.html),d.push(...I.images)}let M=si(s,"paragraph",N.join(" "));for(M&&l.push(M);d.length>0;)l.push(d.shift())}let S=l.find(v=>v.kind==="heading"&&v.text)?.text||zg(r);if(l.length===0)throw a.dispose(),new Error("Markdown \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");return{title:S,chapters:[{id:"ch0",title:S,blocks:l}],toc:[{title:S,chapterIndex:0,depth:0}],warnings:n,dispose:()=>a.dispose()}}async function ia(t,e={}){try{let r=await tn(t),{text:n}=js(r);return $g(n,e)}catch(r){throw Er(r,"\u65E0\u6CD5\u89E3\u6790 Markdown \u6587\u4EF6")}}var Lg,Dg,uh=dr(()=>{Gn();ea();Zn();di();Lg=/\[([^\]]+)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g,Dg=/!\[([^\]]*)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g});var gh=Ni(($x,fh)=>{"use strict";function on(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function ph(t,e){for(var r="",n=0,o=-1,a=0,i,s=0;s<=t.length;++s){if(s<t.length)i=t.charCodeAt(s);else{if(i===47)break;i=47}if(i===47){if(!(o===s-1||a===1))if(o!==s-1&&a===2){if(r.length<2||n!==2||r.charCodeAt(r.length-1)!==46||r.charCodeAt(r.length-2)!==46){if(r.length>2){var l=r.lastIndexOf("/");if(l!==r.length-1){l===-1?(r="",n=0):(r=r.slice(0,l),n=r.length-1-r.lastIndexOf("/")),o=s,a=0;continue}}else if(r.length===2||r.length===1){r="",n=0,o=s,a=0;continue}}e&&(r.length>0?r+="/..":r="..",n=2)}else r.length>0?r+="/"+t.slice(o+1,s):r=t.slice(o+1,s),n=s-o-1;o=s,a=0}else i===46&&a!==-1?++a:a=-1}return r}function Hg(t,e){var r=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+n:r+t+n:n}var vo={resolve:function(){for(var e="",r=!1,n,o=arguments.length-1;o>=-1&&!r;o--){var a;o>=0?a=arguments[o]:(n===void 0&&(n=process.cwd()),a=n),on(a),a.length!==0&&(e=a+"/"+e,r=a.charCodeAt(0)===47)}return e=ph(e,!r),r?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(on(e),e.length===0)return".";var r=e.charCodeAt(0)===47,n=e.charCodeAt(e.length-1)===47;return e=ph(e,!r),e.length===0&&!r&&(e="."),e.length>0&&n&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return on(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,r=0;r<arguments.length;++r){var n=arguments[r];on(n),n.length>0&&(e===void 0?e=n:e+="/"+n)}return e===void 0?".":vo.normalize(e)},relative:function(e,r){if(on(e),on(r),e===r||(e=vo.resolve(e),r=vo.resolve(r),e===r))return"";for(var n=1;n<e.length&&e.charCodeAt(n)===47;++n);for(var o=e.length,a=o-n,i=1;i<r.length&&r.charCodeAt(i)===47;++i);for(var s=r.length,l=s-i,d=a<l?a:l,f=-1,g=0;g<=d;++g){if(g===d){if(l>d){if(r.charCodeAt(i+g)===47)return r.slice(i+g+1);if(g===0)return r.slice(i+g)}else a>d&&(e.charCodeAt(n+g)===47?f=g:g===0&&(f=0));break}var u=e.charCodeAt(n+g),p=r.charCodeAt(i+g);if(u!==p)break;u===47&&(f=g)}var _="";for(g=n+f+1;g<=o;++g)(g===o||e.charCodeAt(g)===47)&&(_.length===0?_+="..":_+="/..");return _.length>0?_+r.slice(i+f):(i+=f,r.charCodeAt(i)===47&&++i,r.slice(i))},_makeLong:function(e){return e},dirname:function(e){if(on(e),e.length===0)return".";for(var r=e.charCodeAt(0),n=r===47,o=-1,a=!0,i=e.length-1;i>=1;--i)if(r=e.charCodeAt(i),r===47){if(!a){o=i;break}}else a=!1;return o===-1?n?"/":".":n&&o===1?"//":e.slice(0,o)},basename:function(e,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');on(e);var n=0,o=-1,a=!0,i;if(r!==void 0&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var s=r.length-1,l=-1;for(i=e.length-1;i>=0;--i){var d=e.charCodeAt(i);if(d===47){if(!a){n=i+1;break}}else l===-1&&(a=!1,l=i+1),s>=0&&(d===r.charCodeAt(s)?--s===-1&&(o=i):(s=-1,o=l))}return n===o?o=l:o===-1&&(o=e.length),e.slice(n,o)}else{for(i=e.length-1;i>=0;--i)if(e.charCodeAt(i)===47){if(!a){n=i+1;break}}else o===-1&&(a=!1,o=i+1);return o===-1?"":e.slice(n,o)}},extname:function(e){on(e);for(var r=-1,n=0,o=-1,a=!0,i=0,s=e.length-1;s>=0;--s){var l=e.charCodeAt(s);if(l===47){if(!a){n=s+1;break}continue}o===-1&&(a=!1,o=s+1),l===46?r===-1?r=s:i!==1&&(i=1):r!==-1&&(i=-1)}return r===-1||o===-1||i===0||i===1&&r===o-1&&r===n+1?"":e.slice(r,o)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return Hg("/",e)},parse:function(e){on(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return r;var n=e.charCodeAt(0),o=n===47,a;o?(r.root="/",a=1):a=0;for(var i=-1,s=0,l=-1,d=!0,f=e.length-1,g=0;f>=a;--f){if(n=e.charCodeAt(f),n===47){if(!d){s=f+1;break}continue}l===-1&&(d=!1,l=f+1),n===46?i===-1?i=f:g!==1&&(g=1):i!==-1&&(g=-1)}return i===-1||l===-1||g===0||g===1&&i===l-1&&i===s+1?l!==-1&&(s===0&&o?r.base=r.name=e.slice(1,l):r.base=r.name=e.slice(s,l)):(s===0&&o?(r.name=e.slice(1,i),r.base=e.slice(1,l)):(r.name=e.slice(s,i),r.base=e.slice(s,l)),r.ext=e.slice(i,l)),s>0?r.dir=e.slice(0,s-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};vo.posix=vo;fh.exports=vo});var Eh=Ni((Hx,Vs)=>{"use strict";var yo=typeof Reflect=="object"?Reflect:null,mh=yo&&typeof yo.apply=="function"?yo.apply:function(e,r,n){return Function.prototype.apply.call(e,r,n)},hi;yo&&typeof yo.ownKeys=="function"?hi=yo.ownKeys:Object.getOwnPropertySymbols?hi=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:hi=function(e){return Object.getOwnPropertyNames(e)};function Ug(t){console&&console.warn&&console.warn(t)}var xh=Number.isNaN||function(e){return e!==e};function ct(){ct.init.call(this)}Vs.exports=ct;Vs.exports.once=qg;ct.EventEmitter=ct;ct.prototype._events=void 0;ct.prototype._eventsCount=0;ct.prototype._maxListeners=void 0;var bh=10;function ui(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(ct,"defaultMaxListeners",{enumerable:!0,get:function(){return bh},set:function(t){if(typeof t!="number"||t<0||xh(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");bh=t}});ct.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};ct.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||xh(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function vh(t){return t._maxListeners===void 0?ct.defaultMaxListeners:t._maxListeners}ct.prototype.getMaxListeners=function(){return vh(this)};ct.prototype.emit=function(e){for(var r=[],n=1;n<arguments.length;n++)r.push(arguments[n]);var o=e==="error",a=this._events;if(a!==void 0)o=o&&a.error===void 0;else if(!o)return!1;if(o){var i;if(r.length>0&&(i=r[0]),i instanceof Error)throw i;var s=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw s.context=i,s}var l=a[e];if(l===void 0)return!1;if(typeof l=="function")mh(l,this,r);else for(var d=l.length,f=Th(l,d),n=0;n<d;++n)mh(f[n],this,r);return!0};function yh(t,e,r,n){var o,a,i;if(ui(r),a=t._events,a===void 0?(a=t._events=Object.create(null),t._eventsCount=0):(a.newListener!==void 0&&(t.emit("newListener",e,r.listener?r.listener:r),a=t._events),i=a[e]),i===void 0)i=a[e]=r,++t._eventsCount;else if(typeof i=="function"?i=a[e]=n?[r,i]:[i,r]:n?i.unshift(r):i.push(r),o=vh(t),o>0&&i.length>o&&!i.warned){i.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+i.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=t,s.type=e,s.count=i.length,Ug(s)}return t}ct.prototype.addListener=function(e,r){return yh(this,e,r,!1)};ct.prototype.on=ct.prototype.addListener;ct.prototype.prependListener=function(e,r){return yh(this,e,r,!0)};function Wg(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function wh(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},o=Wg.bind(n);return o.listener=r,n.wrapFn=o,o}ct.prototype.once=function(e,r){return ui(r),this.on(e,wh(this,e,r)),this};ct.prototype.prependOnceListener=function(e,r){return ui(r),this.prependListener(e,wh(this,e,r)),this};ct.prototype.removeListener=function(e,r){var n,o,a,i,s;if(ui(r),o=this._events,o===void 0)return this;if(n=o[e],n===void 0)return this;if(n===r||n.listener===r)--this._eventsCount===0?this._events=Object.create(null):(delete o[e],o.removeListener&&this.emit("removeListener",e,n.listener||r));else if(typeof n!="function"){for(a=-1,i=n.length-1;i>=0;i--)if(n[i]===r||n[i].listener===r){s=n[i].listener,a=i;break}if(a<0)return this;a===0?n.shift():jg(n,a),n.length===1&&(o[e]=n[0]),o.removeListener!==void 0&&this.emit("removeListener",e,s||r)}return this};ct.prototype.off=ct.prototype.removeListener;ct.prototype.removeAllListeners=function(e){var r,n,o;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var a=Object.keys(n),i;for(o=0;o<a.length;++o)i=a[o],i!=="removeListener"&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(r=n[e],typeof r=="function")this.removeListener(e,r);else if(r!==void 0)for(o=r.length-1;o>=0;o--)this.removeListener(e,r[o]);return this};function _h(t,e,r){var n=t._events;if(n===void 0)return[];var o=n[e];return o===void 0?[]:typeof o=="function"?r?[o.listener||o]:[o]:r?Gg(o):Th(o,o.length)}ct.prototype.listeners=function(e){return _h(this,e,!0)};ct.prototype.rawListeners=function(e){return _h(this,e,!1)};ct.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):kh.call(t,e)};ct.prototype.listenerCount=kh;function kh(t){var e=this._events;if(e!==void 0){var r=e[t];if(typeof r=="function")return 1;if(r!==void 0)return r.length}return 0}ct.prototype.eventNames=function(){return this._eventsCount>0?hi(this._events):[]};function Th(t,e){for(var r=new Array(e),n=0;n<e;++n)r[n]=t[n];return r}function jg(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function Gg(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}function qg(t,e){return new Promise(function(r,n){function o(i){t.removeListener(e,a),n(i)}function a(){typeof t.removeListener=="function"&&t.removeListener("error",o),r([].slice.call(arguments))}Sh(t,e,a,{once:!0}),e!=="error"&&Xg(t,o,{once:!0})})}function Xg(t,e,r){typeof t.on=="function"&&Sh(t,"error",e,r)}function Sh(t,e,r,n){if(typeof t.on=="function")n.once?t.once(e,r):t.on(e,r);else if(typeof t.addEventListener=="function")t.addEventListener(e,function o(a){n.once&&t.removeEventListener(e,o),r(a)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}});var Ah=Ni(pi=>{(function(t){t.parser=function(h,c){return new r(h,c)},t.SAXParser=r,t.SAXStream=f,t.createStream=l,t.MAX_BUFFER_LENGTH=64*1024;var e=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];t.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function r(h,c){if(!(this instanceof r))return new r(h,c);var k=this;o(k),k.q=k.c="",k.bufferCheckPosition=t.MAX_BUFFER_LENGTH,k.encoding=null,k.opt=c||{},k.opt.lowercase=k.opt.lowercase||k.opt.lowercasetags,k.looseCase=k.opt.lowercase?"toLowerCase":"toUpperCase",k.opt.maxEntityCount=k.opt.maxEntityCount||512,k.opt.maxEntityDepth=k.opt.maxEntityDepth||4,k.entityCount=k.entityDepth=0,k.tags=[],k.closed=k.closedRoot=k.sawRoot=!1,k.tag=k.error=null,k.strict=!!h,k.noscript=!!(h||k.opt.noscript),k.state=x.BEGIN,k.strictEntities=k.opt.strictEntities,k.ENTITIES=k.strictEntities?Object.create(t.XML_ENTITIES):Object.create(t.ENTITIES),k.attribList=[],k.opt.xmlns&&(k.ns=Object.create(S)),k.opt.unquotedAttributeValues===void 0&&(k.opt.unquotedAttributeValues=!h),k.trackPosition=k.opt.position!==!1,k.trackPosition&&(k.position=k.line=k.column=0),D(k,"onready")}Object.create||(Object.create=function(h){function c(){}c.prototype=h;var k=new c;return k}),Object.keys||(Object.keys=function(h){var c=[];for(var k in h)h.hasOwnProperty(k)&&c.push(k);return c});function n(h){for(var c=Math.max(t.MAX_BUFFER_LENGTH,10),k=0,b=0,Y=e.length;b<Y;b++){var ce=h[e[b]].length;if(ce>c)switch(e[b]){case"textNode":oe(h);break;case"cdata":z(h,"oncdata",h.cdata),h.cdata="";break;case"script":z(h,"onscript",h.script),h.script="";break;default:q(h,"Max buffer length exceeded: "+e[b])}k=Math.max(k,ce)}var he=t.MAX_BUFFER_LENGTH-k;h.bufferCheckPosition=he+h.position}function o(h){for(var c=0,k=e.length;c<k;c++)h[e[c]]=""}function a(h){oe(h),h.cdata!==""&&(z(h,"oncdata",h.cdata),h.cdata=""),h.script!==""&&(z(h,"onscript",h.script),h.script="")}r.prototype={end:function(){ae(this)},write:ft,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){a(this)}};var i;try{i=require("stream").Stream}catch{i=function(){}}i||(i=function(){});var s=t.EVENTS.filter(function(h){return h!=="error"&&h!=="end"});function l(h,c){return new f(h,c)}function d(h,c){if(h.length>=2){if(h[0]===255&&h[1]===254)return"utf-16le";if(h[0]===254&&h[1]===255)return"utf-16be"}return h.length>=3&&h[0]===239&&h[1]===187&&h[2]===191?"utf8":h.length>=4?h[0]===60&&h[1]===0&&h[2]===63&&h[3]===0?"utf-16le":h[0]===0&&h[1]===60&&h[2]===0&&h[3]===63?"utf-16be":"utf8":c?"utf8":null}function f(h,c){if(!(this instanceof f))return new f(h,c);i.apply(this),this._parser=new r(h,c),this.writable=!0,this.readable=!0;var k=this;this._parser.onend=function(){k.emit("end")},this._parser.onerror=function(b){k.emit("error",b),k._parser.error=null},this._decoder=null,this._decoderBuffer=null,s.forEach(function(b){Object.defineProperty(k,"on"+b,{get:function(){return k._parser["on"+b]},set:function(Y){if(!Y)return k.removeAllListeners(b),k._parser["on"+b]=Y,Y;k.on(b,Y)},enumerable:!0,configurable:!1})})}f.prototype=Object.create(i.prototype,{constructor:{value:f}}),f.prototype._decodeBuffer=function(h,c){if(this._decoderBuffer&&(h=Buffer.concat([this._decoderBuffer,h]),this._decoderBuffer=null),!this._decoder){var k=d(h,c);if(!k)return this._decoderBuffer=h,"";this._parser.encoding=k,this._decoder=new TextDecoder(k)}return this._decoder.decode(h,{stream:!c})},f.prototype.write=function(h){if(typeof Buffer=="function"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(h))h=this._decodeBuffer(h,!1);else if(this._decoderBuffer){var c=this._decodeBuffer(Buffer.alloc(0),!0);c&&(this._parser.write(c),this.emit("data",c))}return this._parser.write(h.toString()),this.emit("data",h),!0},f.prototype.end=function(h){if(h&&h.length&&this.write(h),this._decoderBuffer){var c=this._decodeBuffer(Buffer.alloc(0),!0);c&&(this._parser.write(c),this.emit("data",c))}else if(this._decoder){var k=this._decoder.decode();k&&(this._parser.write(k),this.emit("data",k))}return this._parser.end(),!0},f.prototype.on=function(h,c){var k=this;return!k._parser["on"+h]&&s.indexOf(h)!==-1&&(k._parser["on"+h]=function(){var b=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);b.splice(0,0,h),k.emit.apply(k,b)}),i.prototype.on.call(k,h,c)};var g=/^\[CDATA\[$/i,u=/^DOCTYPE$/i,p="http://www.w3.org/XML/1998/namespace",_="http://www.w3.org/2000/xmlns/",S={xml:p,xmlns:_},v=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,P=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,A=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,y=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function N(h){return h===" "||h===`
`||h==="\r"||h==="	"}function M(h){return h==='"'||h==="'"}function E(h){return h===">"||N(h)}function L(h,c){return h.test(c)}function I(h,c){return!L(h,c)}var x=0;t.STATE={BEGIN:x++,BEGIN_WHITESPACE:x++,TEXT:x++,TEXT_ENTITY:x++,OPEN_WAKA:x++,SGML_DECL:x++,SGML_DECL_QUOTED:x++,DOCTYPE:x++,DOCTYPE_QUOTED:x++,DOCTYPE_DTD:x++,DOCTYPE_DTD_QUOTED:x++,COMMENT_STARTING:x++,COMMENT:x++,COMMENT_ENDING:x++,COMMENT_ENDED:x++,CDATA:x++,CDATA_ENDING:x++,CDATA_ENDING_2:x++,PROC_INST:x++,PROC_INST_BODY:x++,PROC_INST_ENDING:x++,OPEN_TAG:x++,OPEN_TAG_SLASH:x++,ATTRIB:x++,ATTRIB_NAME:x++,ATTRIB_NAME_SAW_WHITE:x++,ATTRIB_VALUE:x++,ATTRIB_VALUE_QUOTED:x++,ATTRIB_VALUE_CLOSED:x++,ATTRIB_VALUE_UNQUOTED:x++,ATTRIB_VALUE_ENTITY_Q:x++,ATTRIB_VALUE_ENTITY_U:x++,CLOSE_TAG:x++,CLOSE_TAG_SAW_WHITE:x++,SCRIPT:x++,SCRIPT_ENDING:x++},t.XML_ENTITIES=Object.assign(Object.create(null),{amp:"&",gt:">",lt:"<",quot:'"',apos:"'"}),t.ENTITIES=Object.assign(Object.create(null),{amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830}),Object.keys(t.ENTITIES).forEach(function(h){var c=t.ENTITIES[h],k=typeof c=="number"?String.fromCharCode(c):c;t.ENTITIES[h]=k});for(var O in t.STATE)t.STATE[t.STATE[O]]=O;x=t.STATE;function D(h,c,k){h[c]&&h[c](k)}function te(h){var c=h&&h.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);return c?c[2]:null}function H(h){return h?h.toLowerCase().replace(/[^a-z0-9]/g,""):null}function ne(h,c){let k=H(h),b=H(c);return!k||!b?!0:b==="utf16"?k==="utf16le"||k==="utf16be":k===b}function re(h,c){if(!(!h.strict||!h.encoding||!c||c.name!=="xml")){var k=te(c.body);k&&!ne(h.encoding,k)&&F(h,"XML declaration encoding "+k+" does not match detected stream encoding "+h.encoding.toUpperCase())}}function z(h,c,k){h.textNode&&oe(h),D(h,c,k)}function oe(h){h.textNode=B(h.opt,h.textNode),h.textNode&&D(h,"ontext",h.textNode),h.textNode=""}function B(h,c){return h.trim&&(c=c.trim()),h.normalize&&(c=c.replace(/\s+/g," ")),c}function q(h,c){return oe(h),h.trackPosition&&(c+=`
Line: `+h.line+`
Column: `+h.column+`
Char: `+h.c),c=new Error(c),h.error=c,D(h,"onerror",c),h}function ae(h){return h.sawRoot&&!h.closedRoot&&F(h,"Unclosed root tag"),h.state!==x.BEGIN&&h.state!==x.BEGIN_WHITESPACE&&h.state!==x.TEXT&&q(h,"Unexpected end"),oe(h),h.c="",h.closed=!0,D(h,"onend"),r.call(h,h.strict,h.opt),h}function F(h,c){if(typeof h!="object"||!(h instanceof r))throw new Error("bad call to strictFail");h.strict&&q(h,c)}function de(h){h.strict||(h.tagName=h.tagName[h.looseCase]());var c=h.tags[h.tags.length-1]||h,k=h.tag={name:h.tagName,attributes:{}};h.opt.xmlns&&(k.ns=c.ns),h.attribList.length=0,z(h,"onopentagstart",k)}function ve(h,c){var k=h.indexOf(":"),b=k<0?["",h]:h.split(":"),Y=b[0],ce=b[1];return c&&h==="xmlns"&&(Y="xmlns",ce=""),{prefix:Y,local:ce}}function Ae(h){if(h.strict||(h.attribName=h.attribName[h.looseCase]()),h.attribList.indexOf(h.attribName)!==-1||h.tag.attributes.hasOwnProperty(h.attribName)){h.attribName=h.attribValue="";return}if(h.opt.xmlns){var c=ve(h.attribName,!0),k=c.prefix,b=c.local;if(k==="xmlns")if(b==="xml"&&h.attribValue!==p)F(h,"xml: prefix must be bound to "+p+`
Actual: `+h.attribValue);else if(b==="xmlns"&&h.attribValue!==_)F(h,"xmlns: prefix must be bound to "+_+`
Actual: `+h.attribValue);else{var Y=h.tag,ce=h.tags[h.tags.length-1]||h;Y.ns===ce.ns&&(Y.ns=Object.create(ce.ns)),Y.ns[b]=h.attribValue}h.attribList.push([h.attribName,h.attribValue])}else h.tag.attributes[h.attribName]=h.attribValue,z(h,"onattribute",{name:h.attribName,value:h.attribValue});h.attribName=h.attribValue=""}function J(h,c){if(h.opt.xmlns){var k=h.tag,b=ve(h.tagName);k.prefix=b.prefix,k.local=b.local,k.uri=k.ns[b.prefix]||"",k.prefix&&!k.uri&&(F(h,"Unbound namespace prefix: "+JSON.stringify(h.tagName)),k.uri=b.prefix);var Y=h.tags[h.tags.length-1]||h;k.ns&&Y.ns!==k.ns&&Object.keys(k.ns).forEach(function(je){z(h,"onopennamespace",{prefix:je,uri:k.ns[je]})});for(var ce=0,he=h.attribList.length;ce<he;ce++){var ye=h.attribList[ce],Te=ye[0],We=ye[1],Ce=ve(Te,!0),ue=Ce.prefix,ze=Ce.local,dt=ue===""?"":k.ns[ue]||"",$e={name:Te,value:We,prefix:ue,local:ze,uri:dt};ue&&ue!=="xmlns"&&!dt&&(F(h,"Unbound namespace prefix: "+JSON.stringify(ue)),$e.uri=ue),h.tag.attributes[Te]=$e,z(h,"onattribute",$e)}h.attribList.length=0}h.tag.isSelfClosing=!!c,h.sawRoot=!0,h.tags.push(h.tag),z(h,"onopentag",h.tag),c||(!h.noscript&&h.tagName.toLowerCase()==="script"?h.state=x.SCRIPT:h.state=x.TEXT,h.tag=null,h.tagName=""),h.attribName=h.attribValue="",h.attribList.length=0}function ge(h){if(!h.tagName){F(h,"Weird empty close tag."),h.textNode+="</>",h.state=x.TEXT;return}if(h.script){if(h.tagName!=="script"){h.script+="</"+h.tagName+">",h.tagName="",h.state=x.SCRIPT;return}z(h,"onscript",h.script),h.script=""}var c=h.tags.length,k=h.tagName;h.strict||(k=k[h.looseCase]());for(var b=k;c--;){var Y=h.tags[c];if(Y.name!==b)F(h,"Unexpected close tag");else break}if(c<0){F(h,"Unmatched closing tag: "+h.tagName),h.textNode+="</"+h.tagName+">",h.state=x.TEXT;return}h.tagName=k;for(var ce=h.tags.length;ce-- >c;){var he=h.tag=h.tags.pop();h.tagName=h.tag.name,z(h,"onclosetag",h.tagName);var ye={};for(var Te in he.ns)ye[Te]=he.ns[Te];var We=h.tags[h.tags.length-1]||h;h.opt.xmlns&&he.ns!==We.ns&&Object.keys(he.ns).forEach(function(Ce){var ue=he.ns[Ce];z(h,"onclosenamespace",{prefix:Ce,uri:ue})})}c===0&&(h.closedRoot=!0),h.tagName=h.attribValue=h.attribName="",h.attribList.length=0,h.state=x.TEXT}function Ue(h){var c=h.entity,k=c.toLowerCase(),b,Y="";return h.ENTITIES[c]?h.ENTITIES[c]:h.ENTITIES[k]?h.ENTITIES[k]:(c=k,c.charAt(0)==="#"&&(c.charAt(1)==="x"?(c=c.slice(2),b=parseInt(c,16),Y=b.toString(16)):(c=c.slice(1),b=parseInt(c,10),Y=b.toString(10))),c=c.replace(/^0+/,""),isNaN(b)||Y.toLowerCase()!==c||b<0||b>1114111||!we(b)?(F(h,"Invalid character entity"),"&"+h.entity+";"):String.fromCodePoint(b))}function we(h){return h===9||h===10||h===13||h>=32&&h<=55295||h>=57344&&h<=65533||h>=65536&&h<=1114111}function Be(h,c){c==="<"?(h.state=x.OPEN_WAKA,h.startTagPosition=h.position):N(c)||(F(h,"Non-whitespace before first tag."),h.textNode=c,h.state=x.TEXT)}function Xe(h,c){var k="";return c<h.length&&(k=h.charAt(c)),k}function ft(h){var c=this;if(this.error)throw this.error;if(c.closed)return q(c,"Cannot write after close. Assign an onready handler.");if(h===null)return ae(c);typeof h=="object"&&(h=h.toString());for(var k=0,b="";b=Xe(h,k++),c.c=b,!!b;)switch(c.trackPosition&&(c.position++,b===`
`?(c.line++,c.column=0):c.column++),c.state){case x.BEGIN:if(c.state=x.BEGIN_WHITESPACE,b==="\uFEFF")continue;Be(c,b);continue;case x.BEGIN_WHITESPACE:Be(c,b);continue;case x.TEXT:if(c.sawRoot&&!c.closedRoot){for(var ce=k-1;b&&b!=="<"&&b!=="&";)b=Xe(h,k++),b&&c.trackPosition&&(c.position++,b===`
`?(c.line++,c.column=0):c.column++);c.textNode+=h.substring(ce,k-1)}b==="<"&&!(c.sawRoot&&c.closedRoot&&!c.strict)?(c.state=x.OPEN_WAKA,c.startTagPosition=c.position):(!N(b)&&(!c.sawRoot||c.closedRoot)&&F(c,"Text data outside of root node."),b==="&"?c.state=x.TEXT_ENTITY:c.textNode+=b);continue;case x.SCRIPT:b==="<"?c.state=x.SCRIPT_ENDING:c.script+=b;continue;case x.SCRIPT_ENDING:b==="/"?c.state=x.CLOSE_TAG:(c.script+="<"+b,c.state=x.SCRIPT);continue;case x.OPEN_WAKA:if(b==="!")c.state=x.SGML_DECL,c.sgmlDecl="";else if(!N(b))if(L(v,b))c.state=x.OPEN_TAG,c.tagName=b;else if(b==="/")c.state=x.CLOSE_TAG,c.tagName="";else if(b==="?")c.state=x.PROC_INST,c.procInstName=c.procInstBody="";else{if(F(c,"Unencoded <"),c.startTagPosition+1<c.position){var Y=c.position-c.startTagPosition;b=new Array(Y).join(" ")+b}c.textNode+="<"+b,c.state=x.TEXT}continue;case x.SGML_DECL:if(c.sgmlDecl+b==="--"){c.state=x.COMMENT,c.comment="",c.sgmlDecl="";continue}c.doctype&&c.doctype!==!0&&c.sgmlDecl?(c.state=x.DOCTYPE_DTD,c.doctype+="<!"+c.sgmlDecl+b,c.sgmlDecl=""):g.test(c.sgmlDecl+b)?(z(c,"onopencdata"),c.state=x.CDATA,c.sgmlDecl="",c.cdata=""):u.test(c.sgmlDecl+b)?(c.state=x.DOCTYPE,(c.doctype||c.sawRoot)&&F(c,"Inappropriately located doctype declaration"),c.doctype="",c.sgmlDecl=""):b===">"?(z(c,"onsgmldeclaration",c.sgmlDecl),c.sgmlDecl="",c.state=x.TEXT):(M(b)&&(c.state=x.SGML_DECL_QUOTED),c.sgmlDecl+=b);continue;case x.SGML_DECL_QUOTED:b===c.q&&(c.state=x.SGML_DECL,c.q=""),c.sgmlDecl+=b;continue;case x.DOCTYPE:b===">"?(c.state=x.TEXT,z(c,"ondoctype",c.doctype),c.doctype=!0):(c.doctype+=b,b==="["?c.state=x.DOCTYPE_DTD:M(b)&&(c.state=x.DOCTYPE_QUOTED,c.q=b));continue;case x.DOCTYPE_QUOTED:c.doctype+=b,b===c.q&&(c.q="",c.state=x.DOCTYPE);continue;case x.DOCTYPE_DTD:b==="]"?(c.doctype+=b,c.state=x.DOCTYPE):b==="<"?(c.state=x.OPEN_WAKA,c.startTagPosition=c.position):M(b)?(c.doctype+=b,c.state=x.DOCTYPE_DTD_QUOTED,c.q=b):c.doctype+=b;continue;case x.DOCTYPE_DTD_QUOTED:c.doctype+=b,b===c.q&&(c.state=x.DOCTYPE_DTD,c.q="");continue;case x.COMMENT:b==="-"?c.state=x.COMMENT_ENDING:c.comment+=b;continue;case x.COMMENT_ENDING:b==="-"?(c.state=x.COMMENT_ENDED,c.comment=B(c.opt,c.comment),c.comment&&z(c,"oncomment",c.comment),c.comment=""):(c.comment+="-"+b,c.state=x.COMMENT);continue;case x.COMMENT_ENDED:b!==">"?(F(c,"Malformed comment"),c.comment+="--"+b,c.state=x.COMMENT):c.doctype&&c.doctype!==!0?c.state=x.DOCTYPE_DTD:c.state=x.TEXT;continue;case x.CDATA:for(var ce=k-1;b&&b!=="]";)b=Xe(h,k++),b&&c.trackPosition&&(c.position++,b===`
`?(c.line++,c.column=0):c.column++);c.cdata+=h.substring(ce,k-1),b==="]"&&(c.state=x.CDATA_ENDING);continue;case x.CDATA_ENDING:b==="]"?c.state=x.CDATA_ENDING_2:(c.cdata+="]"+b,c.state=x.CDATA);continue;case x.CDATA_ENDING_2:b===">"?(c.cdata&&z(c,"oncdata",c.cdata),z(c,"onclosecdata"),c.cdata="",c.state=x.TEXT):b==="]"?c.cdata+="]":(c.cdata+="]]"+b,c.state=x.CDATA);continue;case x.PROC_INST:b==="?"?c.state=x.PROC_INST_ENDING:N(b)?c.state=x.PROC_INST_BODY:c.procInstName+=b;continue;case x.PROC_INST_BODY:if(!c.procInstBody&&N(b))continue;b==="?"?c.state=x.PROC_INST_ENDING:c.procInstBody+=b;continue;case x.PROC_INST_ENDING:if(b===">"){let We={name:c.procInstName,body:c.procInstBody};re(c,We),z(c,"onprocessinginstruction",We),c.procInstName=c.procInstBody="",c.state=x.TEXT}else c.procInstBody+="?"+b,c.state=x.PROC_INST_BODY;continue;case x.OPEN_TAG:L(P,b)?c.tagName+=b:(de(c),b===">"?J(c):b==="/"?c.state=x.OPEN_TAG_SLASH:(N(b)||F(c,"Invalid character in tag name"),c.state=x.ATTRIB));continue;case x.OPEN_TAG_SLASH:b===">"?(J(c,!0),ge(c)):(F(c,"Forward-slash in opening tag not followed by >"),c.state=x.ATTRIB);continue;case x.ATTRIB:if(N(b))continue;b===">"?J(c):b==="/"?c.state=x.OPEN_TAG_SLASH:L(v,b)?(c.attribName=b,c.attribValue="",c.state=x.ATTRIB_NAME):F(c,"Invalid attribute name");continue;case x.ATTRIB_NAME:b==="="?c.state=x.ATTRIB_VALUE:b===">"?(F(c,"Attribute without value"),c.attribValue=c.attribName,Ae(c),J(c)):N(b)?c.state=x.ATTRIB_NAME_SAW_WHITE:L(P,b)?c.attribName+=b:F(c,"Invalid attribute name");continue;case x.ATTRIB_NAME_SAW_WHITE:if(b==="=")c.state=x.ATTRIB_VALUE;else{if(N(b))continue;F(c,"Attribute without value"),c.tag.attributes[c.attribName]="",c.attribValue="",z(c,"onattribute",{name:c.attribName,value:""}),c.attribName="",b===">"?J(c):L(v,b)?(c.attribName=b,c.state=x.ATTRIB_NAME):(F(c,"Invalid attribute name"),c.state=x.ATTRIB)}continue;case x.ATTRIB_VALUE:if(N(b))continue;M(b)?(c.q=b,c.state=x.ATTRIB_VALUE_QUOTED):(c.opt.unquotedAttributeValues||q(c,"Unquoted attribute value"),c.state=x.ATTRIB_VALUE_UNQUOTED,c.attribValue=b);continue;case x.ATTRIB_VALUE_QUOTED:if(b!==c.q){b==="&"?c.state=x.ATTRIB_VALUE_ENTITY_Q:c.attribValue+=b;continue}Ae(c),c.q="",c.state=x.ATTRIB_VALUE_CLOSED;continue;case x.ATTRIB_VALUE_CLOSED:N(b)?c.state=x.ATTRIB:b===">"?J(c):b==="/"?c.state=x.OPEN_TAG_SLASH:L(v,b)?(F(c,"No whitespace between attributes"),c.attribName=b,c.attribValue="",c.state=x.ATTRIB_NAME):F(c,"Invalid attribute name");continue;case x.ATTRIB_VALUE_UNQUOTED:if(!E(b)){b==="&"?c.state=x.ATTRIB_VALUE_ENTITY_U:c.attribValue+=b;continue}Ae(c),b===">"?J(c):c.state=x.ATTRIB;continue;case x.CLOSE_TAG:if(c.tagName)b===">"?ge(c):L(P,b)?c.tagName+=b:c.script?(c.script+="</"+c.tagName+b,c.tagName="",c.state=x.SCRIPT):(N(b)||F(c,"Invalid tagname in closing tag"),c.state=x.CLOSE_TAG_SAW_WHITE);else{if(N(b))continue;I(v,b)?c.script?(c.script+="</"+b,c.state=x.SCRIPT):F(c,"Invalid tagname in closing tag."):c.tagName=b}continue;case x.CLOSE_TAG_SAW_WHITE:if(N(b))continue;b===">"?ge(c):F(c,"Invalid characters in closing tag");continue;case x.TEXT_ENTITY:case x.ATTRIB_VALUE_ENTITY_Q:case x.ATTRIB_VALUE_ENTITY_U:var he,ye;switch(c.state){case x.TEXT_ENTITY:he=x.TEXT,ye="textNode";break;case x.ATTRIB_VALUE_ENTITY_Q:he=x.ATTRIB_VALUE_QUOTED,ye="attribValue";break;case x.ATTRIB_VALUE_ENTITY_U:he=x.ATTRIB_VALUE_UNQUOTED,ye="attribValue";break}if(b===";"){var Te=Ue(c);c.opt.unparsedEntities&&!Object.values(t.XML_ENTITIES).includes(Te)?((c.entityCount+=1)>c.opt.maxEntityCount&&q(c,"Parsed entity count exceeds max entity count"),(c.entityDepth+=1)>c.opt.maxEntityDepth&&q(c,"Parsed entity depth exceeds max entity depth"),c.entity="",c.state=he,c.write(Te),c.entityDepth-=1):(c[ye]+=Te,c.entity="",c.state=he)}else L(c.entity.length?y:A,b)?c.entity+=b:(F(c,"Invalid character in entity name"),c[ye]+="&"+c.entity+b,c.entity="",c.state=he);continue;default:throw new Error(c,"Unknown state: "+c.state)}return c.position>=c.bufferCheckPosition&&n(c),c}String.fromCodePoint||(function(){var h=String.fromCharCode,c=Math.floor,k=function(){var b=16384,Y=[],ce,he,ye=-1,Te=arguments.length;if(!Te)return"";for(var We="";++ye<Te;){var Ce=Number(arguments[ye]);if(!isFinite(Ce)||Ce<0||Ce>1114111||c(Ce)!==Ce)throw RangeError("Invalid code point: "+Ce);Ce<=65535?Y.push(Ce):(Ce-=65536,ce=(Ce>>10)+55296,he=Ce%1024+56320,Y.push(ce,he)),(ye+1===Te||Y.length>b)&&(We+=h.apply(null,Y),Y.length=0)}return We};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:k,configurable:!0,writable:!0}):String.fromCodePoint=k})()})(typeof pi>"u"?pi.sax={}:pi)});function Yg(t){return t.charCodeAt(0)===65279?t.slice(1):t}function Zg(t){return t.toLowerCase()}function Qg(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===0}function fi(t,e,r){for(let n of t)e=n(e,r);return e}function wo(t,e,r){let n=Object.create(null);n.value=r,n.writable=!0,n.enumerable=!0,n.configurable=!0,Object.defineProperty(t,e,n)}function Jg(t,e){let r={};return typeof e=="object"&&(r=e),new Ks(r).parseStringPromise(t)}async function Rh(t,e={}){return await Jg(t,e)}var _o,Ch,Ih,Vg,Kg,Ar,Nh,Ks,Mh=dr(()=>{_o=It(gh(),1),Ch=It(Eh(),1),Ih=It(Ah(),1),Vg=Object.defineProperty,Kg=(t,e,r)=>e in t?Vg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ar=(t,e,r)=>Kg(t,typeof e!="symbol"?e+"":e,r);Nh={.1:{explicitCharkey:!1,trim:!0,normalize:!0,normalizeTags:!1,attrkey:"@",charkey:"#",explicitArray:!1,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!1,validator:null,xmlns:!1,explicitChildren:!1,childkey:"@@",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,emptyTag:""},.2:{explicitCharkey:!1,trim:!1,normalize:!1,normalizeTags:!1,attrkey:"$",charkey:"_",explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!0,validator:null,xmlns:!1,explicitChildren:!1,preserveChildrenOrder:!1,childkey:"$$",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,rootName:"root",xmldec:{version:"1.0",encoding:"UTF-8",standalone:!0},doctype:null,renderOpts:{pretty:!0,indent:"  ",newline:`
`},headless:!1,chunkSize:1e4,emptyTag:"",cdata:!1}};Ks=class extends Ch.EventEmitter{constructor(e){super(),Ar(this,"options"),Ar(this,"remaining",""),Ar(this,"saxParser"),Ar(this,"resultObject",null),Ar(this,"EXPLICIT_CHARKEY"),Ar(this,"errThrown",!1),Ar(this,"ended",!1),Ar(this,"processAsync",()=>{try{if(this.remaining.length<=this.options.chunkSize){let r=this.remaining;this.remaining="",this.saxParser=this.saxParser.write(r),this.saxParser.close()}else{let r=this.remaining.slice(0,this.options.chunkSize);this.remaining=this.remaining.slice(this.options.chunkSize),this.saxParser=this.saxParser.write(r),setTimeout(this.processAsync,0)}}catch(r){this.errThrown||(this.errThrown=!0,this.emit("error",r))}}),Ar(this,"assignOrPush",(r,n,o)=>{n in r?(Array.isArray(r[n])||wo(r,n,[r[n]]),r[n].push(o)):this.options.explicitArray?wo(r,n,[o]):wo(r,n,o)}),Ar(this,"reset",()=>{this.removeAllListeners(),this.saxParser=Ih.default.parser(this.options.strict,{trim:!1,normalize:!1,xmlns:this.options.xmlns}),this.errThrown=!1,this.saxParser.onerror=i=>{this.saxParser.resume(),this.errThrown||(this.errThrown=!0,this.emit("error",i))},this.saxParser.onend=()=>{this.ended||(this.ended=!0,this.emit("end",this.resultObject))},this.ended=!1,this.EXPLICIT_CHARKEY=this.options.explicitCharkey,this.resultObject=null;let r=[],n=this.options.attrkey,o=this.options.charkey;this.saxParser.onopentag=i=>{let s={};s[o]="",this.options.ignoreAttrs||Object.keys(i.attributes).forEach(l=>{!(n in s)&&!this.options.mergeAttrs&&(s[n]={});let d=this.options.attrValueProcessors?fi(this.options.attrValueProcessors,i.attributes[l],l):i.attributes[l],f=this.options.attrNameProcessors?fi(this.options.attrNameProcessors,l):l;this.options.mergeAttrs?this.assignOrPush(s,f,d):wo(s[n],f,d)}),s["#name"]=this.options.tagNameProcessors?fi(this.options.tagNameProcessors,i.name):i.name,this.options.xmlns&&(s[this.options.xmlnskey]={uri:i.uri,local:i.local}),r.push(s)},this.saxParser.onclosetag=()=>{let i=r.pop(),s=i["#name"];(!this.options.explicitChildren||!this.options.preserveChildrenOrder)&&delete i["#name"];let l;i.cdata===!0&&(l=i.cdata,delete i.cdata);let d=r[r.length-1],f="";if(i[o].match(/^\s*$/)&&!l?(f=i[o],delete i[o]):(this.options.trim&&(i[o]=i[o].trim()),this.options.normalize&&(i[o]=i[o].replace(/\s{2,}/g," ").trim()),i[o]=this.options.valueProcessors?fi(this.options.valueProcessors,i[o],s):i[o],Object.keys(i).length===1&&o in i&&!this.EXPLICIT_CHARKEY&&(i=i[o])),Qg(i)&&(typeof this.options.emptyTag=="function"?i=this.options.emptyTag():i=this.options.emptyTag!==""?this.options.emptyTag:f),this.options.validator){let g=`/${r.map(u=>u["#name"]).concat(s).join("/")}`;(()=>{try{i=this.options.validator(g,d&&d[s],i)}catch(u){this.emit("error",u)}})()}if(this.options.explicitChildren&&!this.options.mergeAttrs&&typeof i=="object")if(this.options.preserveChildrenOrder){if(d){d[this.options.childkey]=d[this.options.childkey]||[];let g={};Object.keys(i).forEach(u=>{wo(g,u,i[u])}),d[this.options.childkey].push(g),delete i["#name"],Object.keys(i).length===1&&o in i&&!this.EXPLICIT_CHARKEY&&(i=i[o])}}else{let g={};this.options.attrkey in i&&(g[this.options.attrkey]=i[this.options.attrkey],delete i[this.options.attrkey]),!this.options.charsAsChildren&&this.options.charkey in i&&(g[this.options.charkey]=i[this.options.charkey],delete i[this.options.charkey]),Object.getOwnPropertyNames(i).length>0&&(g[this.options.childkey]=i),i=g}if(r.length>0)this.assignOrPush(d,s,i);else{if(this.options.explicitRoot){let g=i,u={};wo(u,s,g),i=u}this.resultObject=i,this.ended=!0,this.emit("end",this.resultObject)}};let a=i=>{let s=r[r.length-1];if(s&&(s[o]+=i,this.options.explicitChildren&&this.options.preserveChildrenOrder&&this.options.charsAsChildren&&(this.options.includeWhiteChars||i.replace(/\\n/g,"").trim()!==""))){s[this.options.childkey]=s[this.options.childkey]||[];let l={"#name":"__text__"};l[o]=i,this.options.normalize&&(l[o]=l[o].replace(/\s{2,}/g," ").trim()),s[this.options.childkey].push(l)}return s};this.saxParser.ontext=a,this.saxParser.oncdata=i=>{let s=a(i);s&&(s.cdata=!0)}}),Ar(this,"parseString",(r,n)=>{n&&typeof n=="function"&&(this.on("end",o=>{this.reset(),n(null,o)}),this.on("error",o=>{this.reset(),n(o)}));try{return r=r.toString(),r.trim()===""?(this.emit("end",null),!0):(r=Yg(r),this.options.async?(this.remaining=r,setTimeout(this.processAsync,0),this.saxParser):this.saxParser.write(r).close())}catch(o){if(!this.errThrown&&!this.ended)this.emit("error",o),this.errThrown=!0;else if(this.ended)throw o}}),Ar(this,"parseStringPromise",r=>new Promise((n,o)=>{this.parseString(r,(a,i)=>{a?o(a):n(i)})})),this.options={},Object.keys(Nh["0.2"]).forEach(r=>{this.options[r]=Nh["0.2"][r]}),e&&Object.keys(e).forEach(r=>{this.options[r]=e[r]}),this.options.xmlns&&(this.options.xmlnskey=`${this.options.attrkey}ns`),this.options.normalizeTags&&(this.options.tagNameProcessors||(this.options.tagNameProcessors=[]),this.options.tagNameProcessors.unshift(Zg)),this.reset()}}});function Ph(t){return t.includes("&")?t.replace(/&(#x[\dA-Fa-f]+|#\d+|[a-zA-Z]+);/g,(e,r)=>r.startsWith("#x")?String.fromCodePoint(Number.parseInt(r.slice(2),16)):r.startsWith("#")?String.fromCodePoint(Number.parseInt(r.slice(1),10)):em[e]||e):t}function rm(t){let e=t.slice(0,12),r=Array.from(e).map(n=>n.toString(16).padStart(2,"0")).join("");for(let[n,o]of Object.entries(tm))if(r.startsWith(n))return o;return"unknown"}function bi(t,e,r,n){return URL.createObjectURL(new Blob([t],{type:e}))}function $h(t){let e="";return e=t.name??"",e}function gm(t){return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}async function Hh(t){return t instanceof Uint8Array?gm(t):await t.arrayBuffer()}function Qt(t){let e=t.byteLength,r=e===4?"getUint32":e===2?"getUint16":"getUint8";return new DataView(t)[r](0)}function Cr(t,e){let r={};for(let n in t){let[o,a,i]=t[n];r[n]=i==="string"?sa(e.slice(o,o+a)):Qt(e.slice(o,o+a))}return r}function la(t){let e=t.reduce((o,a)=>o+a.length,0),r=new t[0].constructor(e),n=0;for(let o of t)r.set(o,n),n+=o.length;return r}function gi(t,e=0){let r=0,n=0;for(let o of t.subarray(e,e+4))if(r=r<<7|(o&127)>>>0,n++,o&128)break;return{value:r,length:n}}function bm(t){let e=0;for(let r of t.subarray(-4))r&128&&(e=0),e=e<<7|r&127;return e}function Uh(t){let e=0;for(;t>0;t=t>>1)(t&1)===1&&e++;return e}function xm(t){let e=0;for(;(t&1)===0;)t=t>>1,e++;return e}function vm(t){let e=[];for(let r=0;r<t.length;r++){let n=t[r];if(n===0)e.push(0);else if(n<=8)for(let o of t.subarray(r+1,(r+=n)+1))e.push(o);else if(n<=127)e.push(n);else if(n<=191){let o=n<<8|t[r+++1],a=(o&16383)>>>3,i=(o&7)+3;for(let s=0;s<i;s++)e.push(e[e.length-a])}else e.push(32,n^128)}return Uint8Array.from(e)}function ym(t,e){let r=e(t.huffcdic),{magic:n,offset1:o,offset2:a}=Cr(hm,r);if(n!=="HUFF")throw new Error("Invalid HUFF record");let i=Array.from({length:256},(f,g)=>o+g*4).map(f=>Qt(r.slice(f,f+4))).map(f=>[f&128,f&31,f>>>8]),s=[[0,0],...Array.from({length:32},(f,g)=>a+g*8).map(f=>[Qt(r.slice(f,f+4)),Qt(r.slice(f+4,f+8))])],l=[];for(let f=1;f<t.numHuffcdic;f++){let g=e(t.huffcdic+f),u=Cr(um,g);if(u.magic!=="CDIC")throw new Error("Invalid CDIC record");let p=Math.min(1<<u.codeLength,u.numEntries-l.length),_=g.slice(u.length);for(let S=0;S<p;S++){let v=Qt(_.slice(S*2,S*2+2)),P=Qt(_.slice(v,v+2)),A=P&32767,y=P&32768,N=new Uint8Array(_.slice(v+2,v+2+A));l.push([N,y])}}let d=f=>{let g=new Uint8Array,u=f.byteLength*8;for(let p=0;p<u;){let _=Number(wm(f,p)),[S,v,P]=i[_>>>24];if(!S){for(;_>>>32-v<s[v][0];)v+=1;P=s[v][1]}if(p+=v,p>u)break;let A=P-(_>>>32-v),[y,N]=l[A];N||(y=d(y),l[A]=[y,!0]),g=la([g,y])}return g};return d}function wm(t,e){let r=e>>3,n=e+32,o=n>>3,a=0n;for(let i=r;i<=o;i++)a=a<<8n|BigInt(t[i]??0);return a>>8n-BigInt(n&7)&0xFFFFFFFFn}function _m(t,e){let{magic:r,count:n}=Cr(cm,t);if(r!=="EXTH")throw new Error("Invalid EXTH header");let o=Qs(e.toString()),a={},i=12;for(let s=0;s<n;s++){let l=Qt(t.slice(i,i+4)),d=Qt(t.slice(i+4,i+8));if(l in Dh){let[f,g,u]=Dh[l],p=t.slice(i+8,i+d),_=g==="uint"?Qt(p):o.decode(p);u?(a[f]??(a[f]=[]),a[f].push(_)):a[f]=_}i+=d}return a}function km(t){let e=t&1,r=Uh(t>>>1);return n=>{for(let o=0;o<r;o++){let a=bm(n);n=n.subarray(0,-a)}if(e){let o=(n[n.length-1]&3)+1;n=n.subarray(0,-o)}return n}}function Tm(t){let{flags:e,dataStart:r,keyLength:n,keyStart:o}=Cr(fm,t),a=new Uint8Array(t.slice(r));if(e&2){let i=n===16?1024:1040,s=new Uint8Array(t.slice(o,o+n)),l=Math.min(i,a.length);for(let d=0;d<l;d++)a[d]=a[d]^s[d%s.length]}if(e&1)try{return Od(a)}catch(i){console.warn(i),console.warn("Failed to decompress font")}return a}function mi(t,e){let r=e(t),n=Cr(Lh,r);if(n.magic!=="INDX")throw new Error("Invalid INDX record");let o=Qs(n.encoding.toString()),a={},i=0;for(let u=0;u<n.numCncx;u++){let p=e(t+n.numRecords+u+1),_=new Uint8Array(p);for(let S=0;S<_.byteLength;){let v=S,{value:P,length:A}=gi(_,S);S+=A;let y=p.slice(S,S+P);S+=P,a[i+v]=o.decode(y)}i+=65536}let s=r.slice(n.length),l=Cr(dm,s);if(l.magic!=="TAGX")throw new Error("Invalid TAGX section");let d=(l.length-12)/4,f=Array.from({length:d},(u,p)=>new Uint8Array(s.slice(12+p*4,12+p*4+4))),g=[];for(let u=0;u<n.numRecords;u++){let p=e(t+1+u),_=new Uint8Array(p),S=Cr(Lh,p);if(S.magic!=="INDX")throw new Error("Invalid INDX record");for(let v=0;v<S.numRecords;v++){let P=S.idxt+4+2*v,A=Qt(p.slice(P,P+2)),y=Qt(p.slice(A,A+1)),N=sa(p.slice(A+1,A+1+y)),M=[],E=A+1+y,L=0,I=E+l.numControlBytes;for(let[O,D,te,H]of f){if(H&1){L++;continue}let ne=E+L,re=Qt(p.slice(ne,ne+1))&te;if(re===te)if(Uh(te)>1){let{value:z,length:oe}=gi(_,I);M.push([O,0,z,D]),I+=oe}else M.push([O,1,0,D]);else M.push([O,re>>xm(te),0,D])}let x={};for(let[O,D,te,H]of M){let ne=[];if(D!==0)for(let re=0;re<D*H;re++){let{value:z,length:oe}=gi(_,I);ne.push(z),I+=oe}else{let re=0;for(;re<te;){let{value:z,length:oe}=gi(_,I);ne.push(z),I+=oe,re+=oe}}x[O]=ne}g.push({name:N,tagMap:x})}}return{table:g,cncx:a}}function Sm(t,e){let{table:r,cncx:n}=mi(t,e),o=r.map(({tagMap:i},s)=>({index:s,offset:i[1]?.[0],size:i[2]?.[0],label:n[i[3]?.[0]]??"",headingLevel:i[4]?.[0],pos:i[6],parent:i[21]?.[0],firstChild:i[22]?.[0],lastChild:i[23]?.[0]})),a=i=>(i.firstChild==null||(i.children=o.filter(s=>s.parent===i.index).map(a)),i);return o.filter(i=>i.headingLevel===0).map(a)}function Fh(t=0,e=0){return`kindle:pos:fid:${t.toString(32).toUpperCase().padStart(4,"0")}:off:${e.toString(32).toUpperCase().padStart(10,"0")}`}function zh(t){let e=t.match(Am);if(!e)return"";let[,r,n]=e;return`[${r}="${n}"]`}function Cm(t){let[e,r]=t.match(Nm).slice(1);return{fid:Number.parseInt(e,32),off:Number.parseInt(r,32)}}async function Js(t,e){let r=new Ys(t,e);return await r.innerLoadFile(),await r.innerInit(),r}async function el(t,e){let r=new Zs(t,e);return await r.innerLoadFile(),await r.innerInit(),r}var em,Oh,tm,nm,om,am,im,sm,lm,cm,Lh,dm,hm,um,pm,fm,mm,sa,Qs,Dh,Em,Am,Nm,Bh,Im,Rm,Zt,xi,Mm,Pm,Rt,Ys,Om,Lm,Nr,Zs,Wh=dr(()=>{Ts();Mh();em={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};Oh={XML:"application/xml",XHTML:"application/xhtml+xml",HTML:"text/html",CSS:"text/css",SVG:"image/svg+xml"},tm={ffd8ff:"image/jpeg","89504e47":"image/png",47494638:"image/gif","424d":"image/bmp","3c737667":"image/svg+xml","00000018":"video/mp4","00000020":"video/mp4","1a45dfa3":"video/mkv","1f43b675":"video/webm",494433:"audio/mp3",52494646:"audio/wav","4f676753":"audio/ogg","00010000":"font/ttf",74727565:"font/ttf","4f54544f":"font/otf","774f4646":"font/woff","774f4632":"font/woff2","504c":"font/eot"};nm={1252:"windows-1252",65001:"utf-8"},om={1:["ar","ar-SA","ar-IQ","ar-EG","ar-LY","ar-DZ","ar-MA","ar-TN","ar-OM","ar-YE","ar-SY","ar-JO","ar-LB","ar-KW","ar-AE","ar-BH","ar-QA"],2:["bg"],3:["ca"],4:["zh","zh-TW","zh-CN","zh-HK","zh-SG"],5:["cs"],6:["da"],7:["de","de-DE","de-CH","de-AT","de-LU","de-LI"],8:["el"],9:["en","en-US","en-GB","en-AU","en-CA","en-NZ","en-IE","en-ZA","en-JM",null,"en-BZ","en-TT","en-ZW","en-PH"],10:["es","es-ES","es-MX",null,"es-GT","es-CR","es-PA","es-DO","es-VE","es-CO","es-PE","es-AR","es-EC","es-CL","es-UY","es-PY","es-BO","es-SV","es-HN","es-NI","es-PR"],11:["fi"],12:["fr","fr-FR","fr-BE","fr-CA","fr-CH","fr-LU","fr-MC"],13:["he"],14:["hu"],15:["is"],16:["it","it-IT","it-CH"],17:["ja"],18:["ko"],19:["nl","nl-NL","nl-BE"],20:["no","nb","nn"],21:["pl"],22:["pt","pt-BR","pt-PT"],23:["rm"],24:["ro"],25:["ru"],26:["hr",null,"sr"],27:["sk"],28:["sq"],29:["sv","sv-SE","sv-FI"],30:["th"],31:["tr"],32:["ur"],33:["id"],34:["uk"],35:["be"],36:["sl"],37:["et"],38:["lv"],39:["lt"],41:["fa"],42:["vi"],43:["hy"],44:["az"],45:["eu"],46:["hsb"],47:["mk"],48:["st"],49:["ts"],50:["tn"],52:["xh"],53:["zu"],54:["af"],55:["ka"],56:["fo"],57:["hi"],58:["mt"],59:["se"],62:["ms"],63:["kk"],65:["sw"],67:["uz",null,"uz-UZ"],68:["tt"],69:["bn"],70:["pa"],71:["gu"],72:["or"],73:["ta"],74:["te"],75:["kn"],76:["ml"],77:["as"],78:["mr"],79:["sa"],82:["cy","cy-GB"],83:["gl","gl-ES"],87:["kok"],97:["ne"],98:["fy"]},am={name:[0,32,"string"],type:[60,4,"string"],creator:[64,4,"string"],numRecords:[76,2,"uint"]},im={compression:[0,2,"uint"],numTextRecords:[8,2,"uint"],recordSize:[10,2,"uint"],encryption:[12,2,"uint"]},sm={magic:[16,4,"string"],length:[20,4,"uint"],type:[24,4,"uint"],encoding:[28,4,"uint"],uid:[32,4,"uint"],version:[36,4,"uint"],titleOffset:[84,4,"uint"],titleLength:[88,4,"uint"],localeRegion:[94,1,"uint"],localeLanguage:[95,1,"uint"],resourceStart:[108,4,"uint"],huffcdic:[112,4,"uint"],numHuffcdic:[116,4,"uint"],exthFlag:[128,4,"uint"],trailingFlags:[240,4,"uint"],indx:[244,4,"uint"]},lm={resourceStart:[108,4,"uint"],fdst:[192,4,"uint"],numFdst:[196,4,"uint"],frag:[248,4,"uint"],skel:[252,4,"uint"],guide:[260,4,"uint"]},cm={magic:[0,4,"string"],length:[4,4,"uint"],count:[8,4,"uint"]},Lh={magic:[0,4,"string"],length:[4,4,"uint"],type:[8,4,"uint"],idxt:[20,4,"uint"],numRecords:[24,4,"uint"],encoding:[28,4,"uint"],language:[32,4,"uint"],total:[36,4,"uint"],ordt:[40,4,"uint"],ligt:[44,4,"uint"],numLigt:[48,4,"uint"],numCncx:[52,4,"uint"]},dm={magic:[0,4,"string"],length:[4,4,"uint"],numControlBytes:[8,4,"uint"]},hm={magic:[0,4,"string"],offset1:[8,4,"uint"],offset2:[12,4,"uint"]},um={magic:[0,4,"string"],length:[4,4,"uint"],numEntries:[8,4,"uint"],codeLength:[12,4,"uint"]},pm={magic:[0,4,"string"],numEntries:[8,4,"uint"]},fm={flags:[8,4,"uint"],dataStart:[12,4,"uint"],keyLength:[16,4,"uint"],keyStart:[20,4,"uint"]};mm=new TextDecoder,sa=t=>mm.decode(t);Qs=t=>new TextDecoder(nm[t]);Dh={100:["creator","string",!0],101:["publisher","string",!1],103:["description","string",!1],104:["isbn","string",!1],105:["subject","string",!0],106:["date","string",!1],108:["contributor","string",!0],109:["rights","string",!1],110:["subjectCode","string",!0],112:["source","string",!0],113:["asin","string",!1],121:["boundary","uint",!1],122:["fixedLayout","string",!1],125:["numResources","uint",!1],126:["originalResolution","string",!1],127:["zeroGutter","string",!1],128:["zeroMargin","string",!1],129:["coverURI","string",!1],132:["regionMagnification","string",!1],201:["coverOffset","uint",!1],202:["thumbnailOffset","uint",!1],503:["title","string",!1],524:["language","string",!0],527:["pageProgressionDirection","string",!1]};Em=/<\s*(?:mbp:)?pagebreak[^>]*>/gi;Am=/\s(id|name|aid)\s*=\s*['"]([^'"]*)['"]/i;Nm=/kindle:pos:fid:(\w+):off:(\w+)/;Bh=/kindle:(flow|embed):(\w+)(?:\?mime=(\w+\/[-+.\w]+))?/,Im=Object.defineProperty,Rm=(t,e,r)=>e in t?Im(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Zt=(t,e,r)=>Rm(t,typeof e!="symbol"?e+"":e,r),xi=class{constructor(e,r){if(Zt(this,"fileArrayBuffer"),Zt(this,"recordsOffset"),Zt(this,"recordsMagic"),Zt(this,"start",0),Zt(this,"pdbHeader"),Zt(this,"mobiHeader"),Zt(this,"palmdocHeader"),Zt(this,"kf8Header"),Zt(this,"exth"),Zt(this,"isKf8",!1),Zt(this,"resourceStart"),Zt(this,"decoder"),Zt(this,"encoder"),Zt(this,"removeTrailingEntries"),Zt(this,"decompress"),this.fileArrayBuffer=e,this.parsePdbHeader(),this.parseFirstRecord(this.loadRecord(0)),this.resourceStart=this.mobiHeader.resourceStart,!this.isKf8){let n=this.exth.boundary??4294967295;if(n<4294967295){try{this.parseFirstRecord(this.loadRecord(n)),this.start=n,this.isKf8=!0}catch{console.warn("Failed to parse kf8 header.")}r.endsWith(".mobi")&&console.warn(`File "${r}" is a compatible file. Please change the file extension to .azw3 to make it parse correctly.`)}}this.setup()}decode(e){return this.decoder.decode(e)}encode(e){return this.encoder.encode(e)}pdbLoadRecord(e){let[r,n]=this.recordsOffset[e]??[0,0];return this.fileArrayBuffer.slice(r,n)}loadRecord(e){return this.pdbLoadRecord(this.start+e)}loadMagic(e){return this.recordsMagic[this.start+e]}loadTextBuffer(e){return this.decompress(this.removeTrailingEntries(new Uint8Array(this.loadRecord(e+1))))}loadResource(e){let r=this.pdbLoadRecord(this.resourceStart+e),n=sa(r.slice(0,4)),o;return n==="FONT"?o=Tm(r):n==="VIDE"||n==="AUDI"?o=new Uint8Array(r.slice(12)):o=new Uint8Array(r),{type:rm(o),raw:o}}getNCX(){let e=this.mobiHeader.indx;if(e<4294967295)return Sm(e,this.loadRecord.bind(this))}getMetadata(){let e=this.mobiHeader,r=this.exth;return{identifier:this.mobiHeader.uid.toString(),title:r?.title||e.title,author:r?.creator?.map(Ph)??[],publisher:r?.publisher??"",language:r?.language?.[0]??e.language,published:r?.date??"",description:r?.description??"",subject:r?.subject?.map(Ph)??[],rights:r?.rights??"",contributor:r?.contributor??[]}}getCoverImage(){let e=this.exth,r=Number(e.coverOffset??4294967295),n=Number(e.thumbnailOffset??4294967295),o=r<4294967295?r:n<4294967295?n:void 0;if(o)return this.loadResource(o)}parsePdbHeader(){let e=Cr(am,this.fileArrayBuffer.slice(0,78));e.name=e.name.replace(/\0.*$/,""),this.pdbHeader=e;let r=this.fileArrayBuffer.slice(78,78+e.numRecords*8),n=Array.from({length:e.numRecords},(o,a)=>Qt(r.slice(a*8,a*8+4)));this.recordsOffset=n.map((o,a)=>[o,n[a+1]]),this.recordsMagic=n.map(o=>sa(this.fileArrayBuffer.slice(o,o+4)))}parseFirstRecord(e){this.palmdocHeader=Cr(im,e.slice(0,16));let r=Cr(sm,e);if(r.magic!=="MOBI")throw new Error("Missing MOBI header");let{titleOffset:n,titleLength:o,localeLanguage:a,localeRegion:i}=r,s=om[a.toString()]??[],l={title:sa(e.slice(n,n+o)),language:s[i>>2]??s[0]??"unknown"};this.mobiHeader=Object.assign(r,l),this.kf8Header=r.version>=8?Cr(lm,e):void 0,this.isKf8=r.version>=8,this.exth=r.exthFlag&64?_m(e.slice(r.length+16),r.encoding):void 0}setup(){this.decoder=Qs(this.mobiHeader.encoding.toString()),this.encoder=new TextEncoder;let e=this.palmdocHeader.compression;if(e===1)this.decompress=n=>n;else if(e===2)this.decompress=vm;else if(e===17480)this.decompress=ym(this.mobiHeader,this.loadRecord.bind(this));else throw new Error("Unsupported compression");let r=this.mobiHeader.trailingFlags;this.removeTrailingEntries=km(r)}},Mm=Object.defineProperty,Pm=(t,e,r)=>e in t?Mm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Rt=(t,e,r)=>Pm(t,typeof e!="symbol"?e+"":e,r);Ys=class{constructor(e,r="./images"){this.file=e,Rt(this,"fileArrayBuffer"),Rt(this,"mobiFile"),Rt(this,"fileName",""),Rt(this,"fdstTable",[]),Rt(this,"fullRawLength",0),Rt(this,"skelTable",[]),Rt(this,"fragTable",[]),Rt(this,"chapters",[]),Rt(this,"toc",[]),Rt(this,"fragmentOffsets",new Map),Rt(this,"fragmentSelectors",new Map),Rt(this,"rawHead",new Uint8Array),Rt(this,"rawTail",new Uint8Array),Rt(this,"lastLoadedHead",-1),Rt(this,"lastLoadedTail",-1),Rt(this,"resourceCache",new Map),Rt(this,"chapterCache",new Map),Rt(this,"idToChapter",new Map),Rt(this,"resourceSaveDir","./images"),this.fileName=$h(e),this.resourceSaveDir=r}getFileInfo(){return{fileName:this.fileName}}getMetadata(){return this.mobiFile.getMetadata()}getCoverImage(){if(this.resourceCache.has("cover"))return this.resourceCache.get("cover");let e=this.mobiFile.getCoverImage(),r="";return e&&(r=bi(e.raw,e.type,"cover",this.resourceSaveDir),this.resourceCache.set("cover",r)),r}getSpine(){return this.chapters}getToc(){return this.toc}async innerLoadFile(){this.fileArrayBuffer=await Hh(this.file),this.mobiFile=new xi(this.fileArrayBuffer,this.fileName)}async innerInit(){let e=this.mobiFile.loadRecord.bind(this.mobiFile),r=this.mobiFile.kf8Header,n=this.mobiFile.loadRecord(r.fdst),o=Cr(pm,n);if(o.magic!=="FDST")throw new Error("Missing FDST record");let a=Array.from({length:o.numEntries},(u,p)=>12+p*8).map(u=>[Qt(n.slice(u,u+4)),Qt(n.slice(u+4,u+8))]);this.fdstTable=a,this.fullRawLength=a[a.length-1][1];let s=mi(r.skel,e).table.map(({name:u,tagMap:p},_)=>({index:_,name:u,numFrag:p[1][0],offset:p[6][0],length:p[6][1]}));this.skelTable=s;let l=mi(r.frag,e),d=l.table.map(({name:u,tagMap:p})=>({insertOffset:Number.parseInt(u),selector:l.cncx[p[2][0]],index:p[4][0],offset:p[6][0],length:p[6][1]}));this.fragTable=d;let f=this.skelTable.reduce((u,p,_)=>{let S=u[u.length-1],v=S?.fragEnd??0,P=v+p.numFrag,A=this.fragTable.slice(v,P),y=p.length+A.reduce((E,L)=>E+L.length,0),N=(S?.totalLength??0)+y,M={id:_.toString(),skel:p,frags:A,fragEnd:P,length:y,totalLength:N};return this.idToChapter.set(_,M),u.push(M),u},[]);this.chapters=f;let g=this.mobiFile.getNCX();if(g){let u=({label:p,pos:_,children:S})=>{let[v,P]=_,A=Fh(v,P),y=this.fragmentOffsets.get(v);return y?y.push(P):this.fragmentOffsets.set(v,[P]),{label:p,href:A,children:S?.map(u)}};this.toc=g.map(u)}}getGuide(){let e=this.mobiFile.kf8Header.guide;if(e<4294967295){let r=this.mobiFile.loadRecord.bind(this.mobiFile),{table:n,cncx:o}=mi(e,r);return n.map(({name:a,tagMap:i})=>({label:o[i[1][0]]??"",type:a?.split(/\s/),href:Fh(i[6]?.[0]??i[3]?.[0])}))}}loadRaw(e,r){let n=r-this.rawHead.length,o=this.fullRawLength===0?1/0:this.fullRawLength-this.rawTail.length-e;if(n<0||n<o){for(;this.rawHead.length<r;){this.lastLoadedHead++;let i=this.lastLoadedHead,s=this.mobiFile.loadTextBuffer(i);this.rawHead=la([this.rawHead,s])}return this.rawHead.slice(e,r)}for(;this.fullRawLength-this.rawTail.length>e;){this.lastLoadedTail++;let i=this.mobiFile.palmdocHeader.numTextRecords-1-this.lastLoadedTail,s=this.mobiFile.loadTextBuffer(i);this.rawTail=la([s,this.rawTail])}let a=this.fullRawLength-this.rawTail.length;return this.rawTail.slice(e-a,r-a)}loadText(e){let{skel:r,frags:n,length:o}=e,a=this.loadRaw(r.offset,r.offset+o),i=a.slice(0,r.length);for(let s of n){let l=s.insertOffset-r.offset,d=r.length+s.offset,f=a.slice(d,d+s.length);i=la([i.slice(0,l),f,i.slice(l)]);let g=this.fragmentOffsets.get(s.index);if(g)for(let u of g){let p=this.mobiFile.decode(f.buffer).slice(u),_=zh(p);_&&this.cacheFragmentSelector(s.index,u,_)}}return this.mobiFile.decode(i.buffer)}loadChapter(e){let r=Number.parseInt(e);if(Number.isNaN(r))return;if(this.chapterCache.has(r))return this.chapterCache.get(r);let n=this.idToChapter.get(r);if(n){let o=this.replace(this.loadText(n));return this.chapterCache.set(r,o),o}}cacheFragmentSelector(e,r,n){let o=this.fragmentSelectors.get(e);if(o)o.set(r,n);else{let a=new Map;this.fragmentSelectors.set(e,a),a.set(r,n)}}loadFlow(e){if(e<4294967295)return this.loadRaw(this.fdstTable[e][0],this.fdstTable[e][1])}resolveHref(e){if(/^(?!blob|kindle)\w+:/i.test(e))return;let{fid:r,off:n}=Cm(e),o=this.chapters.find(_=>_.frags.some(S=>S.index===r));if(!o)return;let a=o.id,i=this.fragmentSelectors.get(r)?.get(n);if(i)return{id:a,selector:i};let{skel:s,frags:l}=o,d=l.find(_=>_.index===r),f=s.offset+s.length+d.offset,g=this.loadRaw(f,f+d.length),u=this.mobiFile.decode(g.buffer).slice(n),p=zh(u);return this.cacheFragmentSelector(r,n,p),{id:a,selector:p}}replaceResources(e){return e.replace(new RegExp(Bh,"gi"),(r,n,o,a)=>{if(this.resourceCache.has(r))return this.resourceCache.get(r);let i=n==="flow"?this.loadFlow(Number.parseInt(o)):this.mobiFile.loadResource(Number.parseInt(o,36)-1).raw,s="";if(a===Oh.CSS||a===Oh.SVG){let d=this.mobiFile.decode(i?.buffer);s=this.replaceResources(d)}else s=i;let l=bi(s,a,o,this.resourceSaveDir);return this.resourceCache.set(r,l),l})}replace(e){let r=[],o=e.match(/<head[^>]*>([\s\S]*)<\/head>/i)[1].match(/<link[^>]*>/gi)??[];for(let s of o){let l=s.match(/href="([^"]*)"/i)[1],d=s.match(Bh)[2],f=this.replaceResources(l);r.push({id:d,href:f})}let a=e.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1];return{html:this.replaceResources(a),css:r}}destroy(){this.resourceCache.forEach(e=>{URL.revokeObjectURL(e)})}},Om=Object.defineProperty,Lm=(t,e,r)=>e in t?Om(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Nr=(t,e,r)=>Lm(t,typeof e!="symbol"?e+"":e,r);Zs=class{constructor(e,r="./images"){this.file=e,Nr(this,"fileArrayBuffer"),Nr(this,"mobiFile"),Nr(this,"fileName",""),Nr(this,"chapters",[]),Nr(this,"idToChapter",new Map),Nr(this,"toc",[]),Nr(this,"resourceSaveDir","./images"),Nr(this,"chapterCache",new Map),Nr(this,"resourceCache",new Map),Nr(this,"recindexReg",/recindex=["']?(\d+)["']?/),Nr(this,"mediarecindexReg",/mediarecindex=["']?(\d+)["']?/),Nr(this,"fileposReg",/filepos=["']?(\d+)["']?/),this.fileName=$h(e),this.resourceSaveDir=r}getFileInfo(){return{fileName:this.fileName}}getSpine(){return this.chapters}loadChapter(e){let r=Number.parseInt(e);if(Number.isNaN(r))return;if(this.chapterCache.has(r))return this.chapterCache.get(r);let n=this.idToChapter.get(r);if(!n)return;let o=this.replace(n.text);return this.chapterCache.set(r,o),o}getToc(){return this.toc}getCoverImage(){if(this.resourceCache.has("cover"))return this.resourceCache.get("cover");let e=this.mobiFile.getCoverImage(),r="";return e&&(r=bi(e.raw,e.type,"cover",this.resourceSaveDir),this.resourceCache.set("cover",r)),r}getMetadata(){return this.mobiFile.getMetadata()}async innerLoadFile(){this.fileArrayBuffer=await Hh(this.file),this.mobiFile=new xi(this.fileArrayBuffer,this.fileName)}async innerInit(){let{palmdocHeader:e}=this.mobiFile,r=[];for(let _=0;_<e.numTextRecords;_++)r.push(this.mobiFile.loadTextBuffer(_));let n=la(r),o=Array.from(n,_=>String.fromCharCode(_)).join(""),a=[],i=new Map,s=0,l=Array.from(o.matchAll(Em));l.unshift({index:0,input:"",groups:void 0,0:""});for(let _=0;_<l.length;_++){let S=l[_],v=S.index,P=S[0],A=l[_+1]?.index,y=o.slice(v+P.length,A),N=Uint8Array.from(y,L=>L.charCodeAt(0)),M=this.mobiFile.decode(N.buffer),E={id:String(s),text:M,start:v,end:A,size:N.length};a.push(E),i.set(s,E),s++}let d=a[a.length-1].text;a[a.length-1].text=d.slice(0,d.indexOf("</body>"));let f=a[0].text,g=f.indexOf("<body>");a[0].text=f.slice(g+6),this.chapters=a,this.idToChapter=i;let u=f.slice(0,g),p=this.findTocChapter(u);if(p){let _=`<wrapper>${p.text.replace(/filepos=(\d+)/gi,'filepos="$1"')}</wrapper>`,S=await Rh(_,{preserveChildrenOrder:!0,explicitChildren:!0,childkey:"children"}),v=[];this.parseNavMap(S.wrapper.children,v),this.toc=v}}findTocChapter(e){let r=/<reference.*\/>/g,n=e.match(r),o=/type="(.+?)"/,a=/filepos=(.*)/;if(n)for(let i of n){let s=i.match(o)?.[1].trim(),l=i.match(a)?.[1].trim();if(s==="toc"&&l){let d=Number.parseInt(l,10);return this.chapters.find(g=>g.end>d)}}}parseNavMap(e,r){for(let n of e){let o=n["#name"];if(o==="p"||o==="blockquote"){let a={label:"",href:""};if(n.a){let i=n.a[0],s=i._,l=Number(i.$.filepos);a={label:s,href:`filepos:${l}`},r.push(a)}(n.p||n.blockquote)&&(a.children=[],this.parseNavMap(n.children,a.children))}}}loadResource(e){if(this.resourceCache.has(String(e)))return this.resourceCache.get(String(e));let{type:r,raw:n}=this.mobiFile.loadResource(e-1),o=bi(n,r,String(e),this.resourceSaveDir);return this.resourceCache.set(String(e),o),o}replace(e){return e=e.replace(/<img[^>]*>/g,r=>{let n=r.match(this.recindexReg)[1],o=this.loadResource(Number.parseInt(n));return r.replace(this.recindexReg,`src="${o}"`)}),e=e.replace(/<(video|audio)[^>]*>/g,r=>{let n=r.match(this.recindexReg)[1],o=this.loadResource(Number.parseInt(n));r=r.replace(this.mediarecindexReg,`src="${o}"`);let a=r.match(this.recindexReg)?.[1];if(a){let i=this.loadResource(Number.parseInt(a));r=r.replace(this.recindexReg,`poster="${i}"`)}return r}),e=e.replace(/<a[^>]*>/g,r=>{let n=r.match(this.fileposReg);if(!n)return r;let o=n[1];return r.replace(this.fileposReg,`href="filepos:${o}"`)}),{html:e,css:[]}}resolveHref(e){let r=e.match(/filepos:(\d+)/);if(!r)return;let n=r[1],o=Number(n),a=this.chapters.find(i=>i.end>o);if(a)return{id:a.id,selector:`[id="filepos:${n}"]`}}destroy(){this.resourceCache.forEach(e=>{URL.revokeObjectURL(e)}),this.resourceCache.clear()}}});function vi(t,e,r){let n="";for(let o=0;o<r;o+=1){let a=t[e+o]??0;n+=a>=32&&a<127?String.fromCharCode(a):""}return n}function ca(t,e){return(t[e]??0)<<8|(t[e+1]??0)}function jh(t,e){return(t[e]??0)*16777216+((t[e+1]??0)<<16|(t[e+2]??0)<<8|(t[e+3]??0))>>>0}function an(t,e){return(t[e+3]??0)*16777216+((t[e+2]??0)<<16|(t[e+1]??0)<<8|(t[e]??0))>>>0}function Fm(t){if(t.length<86)throw new Error("\u6587\u4EF6\u592A\u5C0F\uFF0C\u4E0D\u662F\u6709\u6548\u7684 MOBI/PalmDOC \u6587\u4EF6\u3002");let e=vi(t,60,4).trim(),r=vi(t,64,4).trim(),n=`${e}${r}`;if(n!=="BOOKMOBI"&&n!=="TEXtREAd")throw new Error("\u6587\u4EF6\u4E0D\u662F MOBI/PalmDOC \u683C\u5F0F\uFF08\u7F3A\u5C11 PDB \u6587\u4EF6\u5934\uFF09\u3002");let o=ca(t,76);if(o<1)throw new Error("MOBI \u8BB0\u5F55\u8868\u4E3A\u7A7A\u3002");if(78+o*8+2>t.length)throw new Error("MOBI \u8BB0\u5F55\u8868\u5DF2\u635F\u574F\u3002");let a=[];for(let S=0;S<o;S+=1){let v=jh(t,78+S*8);if(v<78||v>=t.length)throw new Error("MOBI \u8BB0\u5F55\u504F\u79FB\u65E0\u6548\uFF0C\u6587\u4EF6\u53EF\u80FD\u5DF2\u635F\u574F\u3002");if(a.length>0&&v<a[a.length-1])throw new Error("MOBI \u8BB0\u5F55\u987A\u5E8F\u65E0\u6548\u3002");a.push(v)}let i=a[0];if(i+16>t.length)throw new Error("MOBI \u6587\u4EF6\u5934\u5DF2\u635F\u574F\u3002");let s=ca(t,i),l=jh(t,i+4),d=ca(t,i+8),f=ca(t,i+10),g=ca(t,i+12);if(g!==0)throw new Error("\u8BE5 MOBI \u6587\u4EF6\u53D7 DRM \u4FDD\u62A4\uFF0C\u65E0\u6CD5\u6253\u5F00\u3002");if(![Dm,1,Xh,rl].includes(s))throw new Error(`\u4E0D\u652F\u6301\u7684 MOBI \u538B\u7F29\u65B9\u5F0F\uFF08${s}\uFF09\u3002`);let u=0,p=65001,_=!1;return n==="BOOKMOBI"&&vi(t,i+16,4)==="MOBI"&&(u=an(t,i+36),p=an(t,i+28)||65001,_=u===8),{pdbType:n,numRecords:o,offsets:a,compression:s,textLength:l,recordCount:d,recordSize:f,encryption:g,version:u,encoding:p,isKf8:_}}function zm(t,e,r){let n=e[r];if(n==null)return null;let o=e[r+1]??t.length;return o<=n?new Uint8Array(0):t.subarray(n,o)}function Bm(t){let e=t instanceof Uint8Array?t:new Uint8Array(t),r=[],n=0;for(;n<e.length;){let o=e[n];if(n+=1,o===0)r.push(0);else if(o<=8)for(let a=0;a<o&&n<e.length;a+=1)r.push(e[n]),n+=1;else if(o<=127)r.push(o);else if(o<=191){if(n>=e.length)break;let a=o<<8|e[n];n+=1;let i=a>>3&2047,s=(a&7)+3,l=r.length-i;for(let d=0;d<s;d+=1)r.push(l+d>=0?r[l+d]:0)}else r.push(32),r.push(o^128)}return Uint8Array.from(r)}function $m(t){let e=0;for(let o of t)e+=o.length;let r=new Uint8Array(e),n=0;for(let o of t)r.set(o,n),n+=o.length;return r}function tl(t,e){let r=[];e&&r.push(e),r.push("utf-8","gb18030","windows-1252");for(let n of r)try{return new TextDecoder(n,{fatal:!0}).decode(t)}catch{}return new TextDecoder("utf-8").decode(t)}function Hm(t,e){let r=e.recordCount>0?e.recordCount:e.numRecords-1,n=[];for(let a=1;a<=r;a+=1){let i=zm(t,e.offsets,a);if(!i)break;if(e.compression===rl)throw new Error("\u8BE5 MOBI \u4F7F\u7528 HUFF/CDIC \u538B\u7F29\uFF0C\u5185\u7F6E\u89E3\u6790\u5668\u65E0\u6CD5\u5904\u7406\u3002");n.push(e.compression===Xh?Bm(i):i)}if(n.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u6587\u672C\u5185\u5BB9\u3002");let o=$m(n);return e.textLength>0&&e.textLength<=o.length&&(o=o.subarray(0,e.textLength)),o}function Um(t,e){let r={title:"",author:"",language:""};if(e.pdbType!=="BOOKMOBI")return r;let n=e.offsets[0],o=Vh[e.encoding]||"utf-8",a=an(t,n+84),i=an(t,n+88);a>0&&i>0&&n+a+i<=t.length&&(r.title=lt(tl(t.subarray(n+a,n+a+i),o)));let s=an(t,n+20),l=an(t,n+128),d=n+16+s;if(l&64&&vi(t,d,4)==="EXTH"&&d+12<=t.length){let f=an(t,d+4),g=an(t,d+8),u=Math.min(t.length,d+f,d+12+g*8+4096),p=d+12;for(let _=0;_<g&&p+8<=u;_+=1){let S=an(t,p),v=an(t,p+4);if(v<8||p+v>t.length)break;let P=t.subarray(p+8,p+v),A=lt(tl(P,o));S===100&&A&&!r.author?r.author=A:S===503&&A?r.title=A:S===524&&A&&!r.language&&(r.language=A),p+=v}}return r}function Gh(t,e){if(!Number.isFinite(e)||e<0)return null;for(let r=0;r<t.length;r+=1){let n=Number(t[r]?.start),o=Number(t[r]?.end);if(Number.isFinite(n)&&Number.isFinite(o)&&e>=n&&e<o)return r}for(let r=0;r<t.length;r+=1){let n=Number(t[r]?.start);if(Number.isFinite(n)&&n>e)return r}return t.length>0?t.length-1:null}function qh(t){let e=String(t||"");return e.startsWith("#")?e.slice(1):""}function Wm(t,e,{fileName:r,tracker:n,warn:o}){let a={};try{a=t.getMetadata()||{}}catch{a={}}let i=[];try{i=t.getSpine()||[]}catch{i=[]}if(!Array.isArray(i)||i.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u9605\u8BFB\u987A\u5E8F\u3002");let s=new Map;i.forEach((E,L)=>{E?.id!=null&&s.set(String(E.id),L)});let l=0,d=()=>`b${l+=1}`,f=E=>{let L=String(E||"").trim();if(!L)return null;if(/^blob:/i.test(L))return n.add(L),{src:L};if(/^data:/i.test(L)){let I=_n(L);return I?{src:n.create(I)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684 MOBI \u5185\u5D4C\u56FE\u7247\u3002"),null)}return/^(https?:)?\/\//i.test(L)?(o("\u5DF2\u8DF3\u8FC7 MOBI \u4E2D\u7684\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\u3002"),null):(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u6790\u7684 MOBI \u56FE\u7247\u3002"),null)},g=E=>L=>{let I=String(L||"").trim();if(!I)return null;if(/^(https?:|mailto:)/i.test(I))return{external:!0,href:I};if(I.startsWith("#"))return{chapter:E,anchor:I.slice(1)};if(I.startsWith("//")||/^(?!filepos:|kindle:)[a-z][a-z0-9+.-]*:/i.test(I))return null;try{let O=t.resolveHref(I);if(O?.id!=null){let D=s.get(String(O.id));if(D!=null){let te=qh(O.selector);return te?{chapter:D,anchor:te}:{chapter:D}}}}catch{}let x=/filepos:(\d+)/i.exec(I);if(x){let O=Gh(i,Number(x[1]));if(O!=null)return{chapter:O}}return null},u=[];for(let E=0;E<i.length;E+=1){let L="";try{L=t.loadChapter(i[E].id)?.html||""}catch{o(`\u7B2C ${E+1} \u7AE0\u52A0\u8F7D\u5931\u8D25\uFF0C\u5DF2\u8DF3\u8FC7\u8BE5\u7AE0\u5185\u5BB9\u3002`)}let I=[];if(L){let x=en(L),O=x?.body||x?.documentElement||null;O&&(I=Vn(O,{nextId:d,warn:o,chapterIndex:E,resolveImage:f,resolveLink:g(E)}))}u.push({id:`ch${E}`,title:"",blocks:I})}let p=[],_=(E,L)=>{if(Array.isArray(E))for(let I of E){if(!I)continue;let x=lt(I.label||I.title||"").slice(0,200),O=String(I.href||""),D=null,te="";if(O){try{let H=t.resolveHref(O);if(H?.id!=null){let ne=s.get(String(H.id));ne!=null&&(D=ne,te=qh(H.selector))}}catch{}if(D==null){let H=/filepos:(\d+)/i.exec(O);H&&(D=Gh(i,Number(H[1])))}}x&&D!=null&&p.push({title:x,chapterIndex:D,depth:L,...te?{anchor:te}:{}}),_(I.children,L+1)}};try{_(t.getToc?.()||[],0)}catch{o("MOBI \u76EE\u5F55\u8BFB\u53D6\u5931\u8D25\uFF0C\u5DF2\u6309\u7AE0\u8282\u6807\u9898\u751F\u6210\u76EE\u5F55\u3002")}let S=na(u,p),v=lt(a.title||"")||Yn(r),A=(Array.isArray(a.author)?a.author:[a.author]).map(E=>lt(E||"")).filter(Boolean).join(", "),y="";try{let E=t.getCoverImage();E&&(n.add(E),y=E)}catch{}let N={title:v,chapters:u,toc:S};A&&(N.author=A);let M=lt(a.language||"");return M&&(N.language=M),y&&(N.cover=y),N}function jm(t){return String(t||"").split(/<\s*(?:mbp:)?pagebreak[^>]*>/gi)}function Gm(t,e,{fileName:r,warn:n}){if(e.compression===rl)throw new Error("\u8BE5 MOBI \u6587\u4EF6\u4F7F\u7528 HUFF/CDIC \u538B\u7F29\uFF0C\u5185\u7F6E\u89E3\u6790\u5668\u65E0\u6CD5\u5904\u7406\u3002");let o=Um(t,e),a=Hm(t,e),i=qm(e.encoding),s=tl(a,i),l=o.title||Yn(r),d=0,f=()=>`b${d+=1}`,g=/<\s*(?:html|body|p|div|h[1-6]|br)\b/i.test(s),u;if(g){let S=jm(s),v=new TextEncoder,P=[],A=0;for(let y of S){let N=v.encode(y).length;P.push({start:A,end:A+N}),A+=N}u=[],S.forEach((y,N)=>{if(!y.trim())return;let M=en(y),E=M?.body||M?.documentElement||null,L=u.length,I=E?Vn(E,{nextId:f,warn:n,chapterIndex:L,resolveImage:()=>(n("\u5185\u7F6E MOBI \u89E3\u6790\u5668\u65E0\u6CD5\u63D0\u53D6\u56FE\u7247\u8D44\u6E90\u3002"),null),resolveLink:x=>{let O=String(x||"").trim();if(!O)return null;if(/^(https?:|mailto:)/i.test(O))return{external:!0,href:O};if(O.startsWith("#"))return{chapter:L,anchor:O.slice(1)};let D=/filepos:(\d+)/i.exec(O);if(D){let te=Number(D[1]);for(let H=0;H<P.length;H+=1)if(te>=P[H].start&&te<P[H].end){let ne=S.slice(0,H).filter(re=>re.trim()).length;return ne<u.length?{chapter:ne}:null}}return null}}):[];u.push({id:`ch${L}`,title:"",blocks:I})})}else u=Gs(s,{nextId:f,title:l});if(!u||u.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let p=na(u,[]),_={title:l,chapters:u,toc:p};return o.author&&(_.author=o.author),o.language&&(_.language=o.language),_}function qm(t){return Vh[t]||""}async function ko(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=rn(),a=wn(),i=null;try{let s=await tn(t),l=Fm(s);if(l.pdbType==="BOOKMOBI"){let f=l.isKf8||/^(azw3?|kf8)$/i.test(String(r).split(".").pop()||"");try{i=f?await Js(s):await el(s)}catch{try{i=f?await el(s):await Js(s)}catch{i=null}i||o("MOBI \u89E3\u6790\u5E93\u65E0\u6CD5\u6253\u5F00\u8BE5\u6587\u4EF6\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\uFF08\u53EF\u80FD\u7F3A\u5C11\u56FE\u7247\u4E0E\u76EE\u5F55\u4FE1\u606F\uFF09\u3002")}if(i)try{let g=i.getSpine?.()||[];(!Array.isArray(g)||g.length===0)&&(i.destroy?.(),i=null,o("MOBI \u9605\u8BFB\u987A\u5E8F\u4E3A\u7A7A\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\u3002"))}catch{i.destroy?.(),i=null,o("MOBI \u89E3\u6790\u5E93\u8FD4\u56DE\u5F02\u5E38\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\u3002")}}return{...i?Wm(i,l,{fileName:r,tracker:a,warn:o}):Gm(s,l,{fileName:r,warn:o}),warnings:n,dispose:()=>{try{i?.destroy?.()}catch{}a.dispose()}}}catch(s){try{i?.destroy?.()}catch{}throw a.dispose(),Er(s,"\u65E0\u6CD5\u89E3\u6790 MOBI \u6587\u4EF6")}}var Dm,Xh,rl,Vh,Kh=dr(()=>{Wh();Gn();ea();di();Zn();Dm=0,Xh=2,rl=17480,Vh={65001:"utf-8",65e3:"utf-7",1250:"windows-1250",1251:"windows-1251",1252:"windows-1252",932:"shift_jis",936:"gb18030",949:"euc-kr",950:"big5"}});var ol={};fl(ol,{extensionOf:()=>li,parseBook:()=>Zm});function Km(t){let e=t?`\u201C.${t}\u201D`:"\u8BE5\u6587\u4EF6";return new Error(`\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u683C\u5F0F\uFF1A${e}\u3002\u76EE\u524D\u652F\u6301 ${Vm}\u3002`)}function nl(){return new Error("PDF \u6587\u4EF6\u8BF7\u4F7F\u7528 PDF \u9605\u8BFB\u6A21\u5F0F\u6253\u5F00\uFF08PDF \u7531\u72EC\u7ACB\u7684\u9605\u8BFB\u5668\u5904\u7406\uFF09\u3002")}async function Ym(t){let e;try{e=new Uint8Array(await t.slice(0,256).arrayBuffer())}catch{return null}if(e.length>=8){if(String.fromCharCode(...e.subarray(0,4))==="%PDF")return"pdf";if(e[0]===80&&e[1]===75)return"epub";let o="";for(let a=60;a<68;a+=1){let i=e[a]??0;o+=i>=32&&i<127?String.fromCharCode(i):" "}if(o==="BOOKMOBI"||o==="TEXtREAd")return"mobi"}let r=new TextDecoder("utf-8").decode(e.subarray(0,Math.min(e.length,200)));return/^\s*(?:<!doctype\s+html|<html|<head|<body)/i.test(r)?"html":ci(r)?null:"txt"}async function Zm(t,e={}){let r=typeof e.fileName=="string"?e.fileName:"",n=typeof e.mime=="string"?e.mime:"",o=li(r);if(o==="pdf")throw nl();let a=Ur[o]||null;if(!a){let i=n.toLowerCase().split(";")[0].trim();if(i==="application/pdf")throw nl();a=Xm[i]||null}if(!a&&!o){let i=await Ym(t);if(i==="pdf")throw nl();a=i&&Ur[i]||null}if(!a)throw Km(o);try{let i=await a.parse(t,{fileName:r,mime:n});return{...i,title:i.title||Yn(r),format:a.format,warnings:Array.isArray(i.warnings)?i.warnings:[]}}catch(i){throw Er(i,"\u65E0\u6CD5\u6253\u5F00\u6587\u6863")}}var Ur,Xm,Vm,al=dr(()=>{ih();sh();uh();Kh();di();Zn();Ur={epub:{parse:ah,format:"epub"},mobi:{parse:ko,format:"mobi"},prc:{parse:ko,format:"mobi"},azw:{parse:ko,format:"mobi"},azw3:{parse:ko,format:"mobi"},kf8:{parse:ko,format:"mobi"},txt:{parse:qs,format:"txt"},text:{parse:qs,format:"txt"},md:{parse:ia,format:"md"},markdown:{parse:ia,format:"md"},mdown:{parse:ia,format:"md"},mkd:{parse:ia,format:"md"},html:{parse:oa,format:"html"},htm:{parse:oa,format:"html"},xhtml:{parse:oa,format:"html"},xht:{parse:oa,format:"html"}},Xm={"application/epub+zip":Ur.epub,"application/x-mobipocket-ebook":Ur.mobi,"application/x-mobi":Ur.mobi,"application/vnd.amazon.ebook":Ur.mobi,"text/plain":Ur.txt,"text/markdown":Ur.md,"text/x-markdown":Ur.md,"text/html":Ur.html,"application/xhtml+xml":Ur.html},Vm="EPUB\u3001MOBI/KF8\u3001TXT\u3001Markdown \u548C HTML"});var db={};fl(db,{PANEL_ID:()=>ll,apply:()=>cb,inject:()=>sb,name:()=>ib});module.exports=Tu(db);var Cv=require("react");var j=It(require("react"),1);var sr=It(require("react"),1);var ub=require("react"),W=require("react/jsx-runtime");function Ye({size:t=18,children:e,viewBox:r="0 0 24 24",fill:n="none",strokeWidth:o=1.7,...a}){return(0,W.jsx)("svg",{width:t,height:t,viewBox:r,fill:n,stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",...a,children:e})}function ml(t){return(0,W.jsxs)(Ye,{...t,children:[(0,W.jsx)("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5Z"}),(0,W.jsx)("path",{d:"M4 18.5A2.5 2.5 0 0 1 6.5 16H20"}),(0,W.jsx)("path",{d:"M8 7h8M8 10.5h5"})]})}function Ci(t){return(0,W.jsxs)(Ye,{...t,children:[(0,W.jsx)("path",{d:"M12 6.5C10.6 5.2 8.7 4.6 6.5 4.6H3v13h3.9c2 0 3.8.6 5.1 1.8 1.3-1.2 3.1-1.8 5.1-1.8H21v-13h-3.5c-2.2 0-4.1.6-5.5 1.9Z"}),(0,W.jsx)("path",{d:"M12 6.5v12.9"})]})}function bl(t){return(0,W.jsxs)(Ye,{...t,children:[(0,W.jsx)("path",{d:"M19 12H5"}),(0,W.jsx)("path",{d:"m11 18-6-6 6-6"})]})}function xl(t){return(0,W.jsxs)(Ye,{...t,children:[(0,W.jsx)("path",{d:"M12 16V4"}),(0,W.jsx)("path",{d:"m7 9 5-5 5 5"}),(0,W.jsx)("path",{d:"M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15"})]})}function Mo(t){return(0,W.jsxs)(Ye,{...t,children:[(0,W.jsx)("circle",{cx:"11",cy:"11",r:"7"}),(0,W.jsx)("path",{d:"m20 20-3.6-3.6"})]})}function bn(t){return(0,W.jsxs)(Ye,{...t,children:[(0,W.jsx)("path",{d:"m12 3 1.5 4.2L18 9l-4.5 1.8L12 15l-1.5-4.2L6 9l4.5-1.8L12 3Z"}),(0,W.jsx)("path",{d:"m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"}),(0,W.jsx)("path",{d:"m5 13 .7 1.8L7.5 15.5l-1.8.7L5 18l-.7-1.8L2.5 15.5l1.8-.7L5 13Z"})]})}function no(t){return(0,W.jsxs)(Ye,{...t,children:[(0,W.jsx)("path",{d:"M4 5h8M8 3v2c0 4.2-1.8 7.2-5 9"}),(0,W.jsx)("path",{d:"M5 10c1.8 2.2 4 3.6 6.8 4.4"}),(0,W.jsx)("path",{d:"m13 20 3.6-9L20 20"}),(0,W.jsx)("path",{d:"M14.6 16.8h4.8"})]})}function yr(t){return(0,W.jsx)(Ye,{...t,children:(0,W.jsx)("path",{d:"m6 6 12 12M18 6 6 18"})})}function oo(t){return(0,W.jsx)(Ye,{...t,children:(0,W.jsx)("path",{d:"m15 18-6-6 6-6"})})}function ao(t){return(0,W.jsx)(Ye,{...t,children:(0,W.jsx)("path",{d:"m9 18 6-6-6-6"})})}function vl(t){return(0,W.jsx)(Ye,{...t,children:(0,W.jsx)("path",{d:"m6 9 6 6 6-6"})})}function Ii(t){return(0,W.jsxs)(Ye,{...t,children:[(0,W.jsx)("path",{d:"M8 6h12M8 12h12M8 18h12"}),(0,W.jsx)("path",{d:"M4 6h.01M4 12h.01M4 18h.01"})]})}function ba(t){return(0,W.jsxs)(Ye,{...t,children:[(0,W.jsx)("circle",{cx:"12",cy:"12",r:"3.2"}),(0,W.jsx)("path",{d:"M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"})]})}function dn(t){return(0,W.jsxs)(Ye,{...t,children:[(0,W.jsx)("path",{d:"M4 7h16M9 7V5h6v2M7 7l.7 12.2A1.8 1.8 0 0 0 9.5 21h5a1.8 1.8 0 0 0 1.8-1.8L17 7"}),(0,W.jsx)("path",{d:"M10 11v6M14 11v6"})]})}function yl(t){return(0,W.jsxs)(Ye,{...t,children:[(0,W.jsx)("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),(0,W.jsx)("path",{d:"M5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V5"})]})}function hn(t){return(0,W.jsx)(Ye,{...t,children:(0,W.jsx)("path",{d:"M12 5v14M5 12h14"})})}function xa(t){return(0,W.jsx)(Ye,{...t,children:(0,W.jsx)("path",{d:"M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"})})}function va(t){return(0,W.jsx)(Ye,{...t,children:(0,W.jsx)("path",{d:"M5 12h14"})})}function wl(t){return(0,W.jsxs)(Ye,{...t,children:[(0,W.jsx)("path",{d:"M20 11a8 8 0 1 0-2.3 6.3"}),(0,W.jsx)("path",{d:"M20 4v7h-7"})]})}function _l(t){return(0,W.jsxs)(Ye,{...t,children:[(0,W.jsx)("path",{d:"M14 4h6v6M20 4l-9 9"}),(0,W.jsx)("path",{d:"M19 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"})]})}function ya({size:t=18}){return(0,W.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[(0,W.jsx)("path",{fill:"#4285F4",d:"M22.6 12.23c0-.78-.07-1.53-.2-2.25H12v4.26h5.94a5.08 5.08 0 0 1-2.2 3.33v2.77h3.56c2.08-1.92 3.3-4.74 3.3-8.11Z"}),(0,W.jsx)("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.77c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"}),(0,W.jsx)("path",{fill:"#FBBC05",d:"M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"}),(0,W.jsx)("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.2 1.64l3.15-3.15A10.97 10.97 0 0 0 12 1 11 11 0 0 0 2.18 7.06L5.84 9.9C6.71 7.3 9.14 5.38 12 5.38Z"})]})}function wa({size:t=18}){return(0,W.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[(0,W.jsx)("path",{fill:"currentColor",d:"M12 3 1.5 8.5 12 14l8.6-4.5v6.2h1.9V8.5L12 3Z",opacity:".9"}),(0,W.jsx)("path",{fill:"currentColor",d:"M6.2 11.4v4.1c0 2.2 2.6 4 5.8 4s5.8-1.8 5.8-4v-4.1L12 14.4l-5.8-3Z",opacity:".65"})]})}function kl(t){return(0,W.jsx)(Ye,{...t,children:(0,W.jsx)("path",{d:"m5 12 4.5 4.5L19 7"})})}function Tl(t){return(0,W.jsxs)(Ye,{...t,children:[(0,W.jsx)("path",{d:"m15 4 1 2.2L18.2 7 16 8 15 10.2 14 8l-2.2-1L14 6.2 15 4Z"}),(0,W.jsx)("path",{d:"m5 19 8.5-8.5"}),(0,W.jsx)("path",{d:"m4 14 6 6"})]})}function Sl(t){return(0,W.jsxs)(Ye,{...t,children:[(0,W.jsx)("path",{d:"M20 13 13 20a2 2 0 0 1-2.8 0L3 12.8V3h9.8L20 10.2a2 2 0 0 1 0 2.8Z"}),(0,W.jsx)("circle",{cx:"7.5",cy:"7.5",r:"1.2"})]})}function _a(t){return(0,W.jsxs)(Ye,{...t,children:[(0,W.jsx)("path",{d:"m14 4 6 6-9.5 9.5H5v-5L14 4Z"}),(0,W.jsx)("path",{d:"M12 21h9"}),(0,W.jsx)("path",{d:"M14 6.5 17.5 10"})]})}function Po(t){return(0,W.jsxs)(Ye,{...t,children:[(0,W.jsx)("path",{d:"M12 3a9 9 0 1 0 0 18h1.2a1.8 1.8 0 0 0 1.3-3l-.6-.7a1.6 1.6 0 0 1 1.2-2.7h1.6A4.3 4.3 0 0 0 21 10.3 7.7 7.7 0 0 0 12 3Z"}),(0,W.jsx)("circle",{cx:"7.5",cy:"11",r:"1"}),(0,W.jsx)("circle",{cx:"10",cy:"7.2",r:"1"}),(0,W.jsx)("circle",{cx:"15",cy:"7.2",r:"1"}),(0,W.jsx)("circle",{cx:"17",cy:"11",r:"1"})]})}function Ri(t){return(0,W.jsx)(Ye,{...t,children:(0,W.jsx)("path",{d:"M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"})})}function El(t){return(0,W.jsx)(Ye,{...t,children:(0,W.jsx)("path",{d:"M3 8h5V3M21 8h-5V3M3 16h5v5M21 16h-5v5"})})}function ka(t){return(0,W.jsxs)(Ye,{...t,children:[(0,W.jsx)("path",{d:"M12 3v12"}),(0,W.jsx)("path",{d:"m7 10 5 5 5-5"}),(0,W.jsx)("path",{d:"M4 18v2h16v-2"})]})}function Al(t){return(0,W.jsxs)(Ye,{...t,children:[(0,W.jsx)("path",{d:"M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"}),(0,W.jsx)("path",{d:"M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"})]})}function Nl(t){return(0,W.jsxs)(Ye,{...t,children:[(0,W.jsx)("path",{d:"M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"}),(0,W.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})}function Cl(t){return(0,W.jsxs)(Ye,{...t,children:[(0,W.jsx)("path",{d:"m3 3 18 18"}),(0,W.jsx)("path",{d:"M10.6 6.1A10.7 10.7 0 0 1 12 6c6 0 9.5 6 9.5 6a16.5 16.5 0 0 1-3.2 3.7"}),(0,W.jsx)("path",{d:"M6.2 6.7C3.9 8.4 2.5 12 2.5 12S6 18 12 18c1.3 0 2.5-.3 3.5-.8"}),(0,W.jsx)("path",{d:"M9.9 9.9a3 3 0 0 0 4.2 4.2"})]})}var Su="dsh-reader";var St="books",Wt="annotations",vt="assets",Lr="pdfTranslations",Ta="reader-background",Sa="book-collection:",Il="dsh-reader:settings:v1";var Mt=Object.freeze({settingsVersion:2,autoTranslate:!1,hideTranslations:!1,fontSize:18,lineHeight:1.85,tocWidth:260,readingMode:"scroll",pageAnimation:"slide",bookAnimation:"slide",showToc:!0,aiOpen:!1,theme:"auto",fontFamily:"serif",fontWeight:400,contentWidth:760,brightness:1,backgroundPreset:"paper",customBackground:"#fbf7ee",textTone:"auto",backgroundImageKey:"",backgroundImageOpacity:.26,backgroundImageBlur:0,annotationPanelOpen:!1}),Oo=Object.freeze([{id:"book",label:"\u4E66\u7C4D",hint:"EPUB / MOBI / TXT \u4E0E\u4E66\u7C4D\u578B PDF"},{id:"paper",label:"\u6587\u732E",hint:"\u8BBA\u6587\u3001\u62A5\u544A\u3001\u5B66\u672F PDF"},{id:"document",label:"\u6587\u6863",hint:"Markdown / HTML \u7B49\u77ED\u6587\u6863"}]),Pi=new Set(Oo.map(t=>t.id)),Eu=new Set(["paper","white","sepia","green","night","custom"]),Au=new Set(["serif","sans","kai","system"]),Nu=new Set(["scroll","book"]),Cu=new Set(["slide","fade","push","flip"]),Iu=new Set(["slide","cover","flip"]),Ru=new Set([400,500,600]),Mu=new Set(["auto","dark","light"]);function Et(){return new Promise((t,e)=>{if(typeof indexedDB>"u"){e(new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 IndexedDB\uFF0C\u65E0\u6CD5\u4FDD\u5B58\u4E66\u67B6\u3002"));return}let r=indexedDB.open(Su,3);r.onupgradeneeded=()=>{let n=r.result;n.objectStoreNames.contains(St)||n.createObjectStore(St,{keyPath:"id"}).createIndex("lastOpenedAt","lastOpenedAt"),n.objectStoreNames.contains(Wt)||n.createObjectStore(Wt,{keyPath:"id"}).createIndex("bookId","bookId"),n.objectStoreNames.contains(vt)||n.createObjectStore(vt,{keyPath:"key"}),n.objectStoreNames.contains(Lr)||n.createObjectStore(Lr,{keyPath:"key"}).createIndex("bookId","bookId")},r.onsuccess=()=>t(r.result),r.onerror=()=>e(r.error??new Error("\u6253\u5F00\u4E66\u67B6\u6570\u636E\u5E93\u5931\u8D25\u3002")),r.onblocked=()=>e(new Error("\u4E66\u67B6\u6570\u636E\u5E93\u88AB\u53E6\u4E00\u4E2A\u9875\u9762\u5360\u7528\uFF0C\u8BF7\u5173\u95ED\u5176\u5B83 DSH \u9875\u9762\u540E\u91CD\u8BD5\u3002"))})}function ar(t){return new Promise((e,r)=>{t.oncomplete=()=>e(),t.onerror=()=>r(t.error??new Error("\u4E66\u67B6\u5199\u5165\u5931\u8D25\u3002")),t.onabort=()=>r(t.error??new Error("\u4E66\u67B6\u5199\u5165\u5DF2\u53D6\u6D88\u3002"))})}function Mi(t){return new Promise((e,r)=>{t.onsuccess=()=>e(t.result),t.onerror=()=>r(t.error)})}var Oi=()=>IDBKeyRange.bound(Sa,`${Sa}\uFFFF`),Rl=t=>`${Sa}${t}`;function On(t){let e=/\.([^./\\]+)$/u.exec(String(t??""));return e?e[1].toLowerCase():""}function qr(t){switch(t){case"pdf":return"PDF";case"epub":return"EPUB";case"mobi":return"MOBI";case"azw":return"AZW";case"azw3":return"AZW3";case"txt":return"TXT";case"md":return"Markdown";case"html":return"HTML";default:return String(t??"\u6587\u4EF6").toUpperCase()}}function Lo(t){return Oo.find(e=>e.id===t)?.label??"\u672A\u5206\u7C7B"}function Li(t){return["pdf","epub","mobi","azw","azw3","txt","md","markdown","html","htm"].includes(On(t))}function Pu(t){let e=String(t??"");return e.length===0?0:(e.match(/[\u3400-\u9fff\uf900-\ufaff]/gu)??[]).length/e.length}function Di(t={}){let e=String(t.format||On(t.title)||"").toLowerCase(),r=`${t.title||""} ${t.author||""}`;return e==="pdf"?/(?:^|\b)(book|novel|textbook|edition|volume|monograph|文集|全集|教材|小说|专著|丛书)(?:\b|$)/iu.test(r)||Number(t.size)>45*1024*1024?"book":"paper":["epub","mobi","azw","azw3","txt"].includes(e)?"book":"document"}async function Ou(t){if(!globalThis.crypto?.subtle){let r=2166136261,n=new Uint8Array(t);for(let o=0;o<n.length;o+=1)r^=n[o],r=Math.imul(r,16777619);return(r>>>0).toString(16).padStart(8,"0")}let e=await globalThis.crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(e)].map(r=>r.toString(16).padStart(2,"0")).join("")}async function Lu(t){let e=await t.slice(0,Math.min(t.size,1048576)).arrayBuffer();return`${(await Ou(e)).slice(0,20)}-${t.size}-${String(t.name).replace(/[^\w.-]+/gu,"_").slice(-48)}`}async function Fi(){let t=await Et();try{let n=t.transaction(St,"readonly").objectStore(St).index("lastOpenedAt").openCursor(null,"prev"),o=[];return await new Promise((a,i)=>{n.onsuccess=()=>{let s=n.result;if(!s){a();return}let l=s.value;o.push({id:l.id,title:l.title,author:l.author,format:l.format,size:l.size,addedAt:l.addedAt,lastOpenedAt:l.lastOpenedAt,progress:l.progress??null,language:l.language??"",cover:typeof l.cover=="string"?l.cover:"",category:Pi.has(l.category)?l.category:Di(l),categoryManual:!!l.categoryManual}),s.continue()},n.onerror=()=>i(n.error)}),o}finally{t.close()}}async function Ea(t){let e=await Et();try{let n=e.transaction(St,"readonly").objectStore(St).get(t);return await new Promise((o,a)=>{n.onsuccess=()=>o(n.result??null),n.onerror=()=>a(n.error)})}finally{e.close()}}async function Ml(t,{title:e,author:r,language:n}={}){if(!Li(t.name))throw new Error(`\u6682\u4E0D\u652F\u6301 .${On(t.name)||"\u672A\u77E5"} \u6587\u4EF6\u3002\u8BF7\u9009\u62E9 PDF / EPUB / MOBI / TXT / Markdown / HTML\u3002`);if(t.size>335544320)throw new Error(`\u6587\u4EF6\u8D85\u8FC7 ${Math.round(335544320/1024/1024)} MB\uFF0C\u6D4F\u89C8\u5668\u4E66\u67B6\u65E0\u6CD5\u5BB9\u7EB3\u3002`);let o=await Lu(t),a=await Ea(o),i=Date.now(),s=a?.id??o,l=On(t.name)==="markdown"?"md":On(t.name),d={title:String(e??a?.title??t.name.replace(/\.[^.]+$/u,"")).trim()||"\u672A\u547D\u540D\u6587\u6863",author:String(r??a?.author??"").trim(),language:String(n??a?.language??""),format:l,size:t.size},f={id:s,...d,category:a?.category&&Pi.has(a.category)?a.category:Di(d),categoryManual:!!a?.categoryManual,cover:typeof a?.cover=="string"?a.cover:"",addedAt:a?.addedAt??i,lastOpenedAt:i,progress:a?.progress??null,blob:t},g=await Et();try{let u=g.transaction(St,"readwrite");return u.objectStore(St).put(f),await ar(u),f}catch(u){throw u?.name==="QuotaExceededError"?new Error("\u6D4F\u89C8\u5668\u5B58\u50A8\u7A7A\u95F4\u5DF2\u6EE1\uFF0C\u65E0\u6CD5\u52A0\u5165\u4E66\u67B6\u3002\u8BF7\u5220\u9664\u4E00\u4E9B\u4E66\u540E\u91CD\u8BD5\u3002"):u}finally{g.close()}}async function io(t,e){let r=await Et();try{let n=r.transaction(St,"readwrite"),o=n.objectStore(St),a=o.get(t),i=null;return a.onsuccess=()=>{a.result&&(i={...a.result,...e},o.put(i))},await ar(n),i}finally{r.close()}}async function Pl(t,e,{manual:r=!0}={}){if(!Pi.has(e))throw new Error("\u672A\u77E5\u7684\u4E66\u7C4D\u5206\u7C7B\u3002");return io(t,{category:e,categoryManual:r})}async function Ol(){let t=await Fi(),e={book:0,paper:0,document:0},r=0;for(let n of t){if(n.categoryManual){e[n.category]=(e[n.category]||0)+1;continue}let o=Di(n);e[o]=(e[o]||0)+1,o!==n.category&&(await io(n.id,{category:o,categoryManual:!1}),r+=1)}return{changed:r,counts:e}}async function zi(t,e){return io(t,{lastOpenedAt:Date.now(),...e!==void 0?{progress:e}:{}})}async function Ll(){let t=await Et();try{let e=t.transaction(vt,"readonly").objectStore(vt);return(await Mi(e.getAll(Oi()))).sort((n,o)=>n.createdAt-o.createdAt)}finally{t.close()}}async function Dl({id:t,name:e,add:r=[],remove:n=[]}){let o=e==null?void 0:String(e).trim();if((o!==void 0||!t)&&(!o||o.length>60))throw new Error("\u4E66\u5355\u540D\u79F0\u987B\u4E3A 1\u201360 \u4E2A\u5B57\u7B26\u3002");let a=await Et();try{let i=a.transaction([vt,St],"readwrite"),s=i.objectStore(vt),l=i.objectStore(St),d=[...new Set(r)],f=ar(i);f.catch(()=>{});let[g,u]=await Promise.all([Mi(s.getAll(Oi())),Promise.all(d.map(A=>Mi(l.getKey(A))))]),p=g.find(A=>A.id===t);if(t&&!p)throw new Error("\u8FD9\u4E2A\u4E66\u5355\u5DF2\u88AB\u5220\u9664\u3002");let _=o??p.name;if(g.some(A=>A.id!==t&&A.name.toLowerCase()===_.toLowerCase()))throw new Error("\u5DF2\u6709\u540C\u540D\u4E66\u5355\uFF0C\u8BF7\u6362\u4E00\u4E2A\u540D\u79F0\u3002");if(u.some(A=>A===void 0))throw new Error("\u90E8\u5206\u9009\u4E2D\u7684\u4E66\u5DF2\u4ECE\u4E66\u67B6\u5220\u9664\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u3002");let S=new Set(n),v=t??jl("collection"),P={id:v,key:Rl(v),name:_,bookIds:[...new Set([...p?.bookIds??[],...u])].filter(A=>!S.has(A)),createdAt:p?.createdAt??Date.now()};return s.put(P),await f,P}finally{a.close()}}async function Fl(t){let e=await Et();try{let r=e.transaction(vt,"readwrite");r.objectStore(vt).delete(Rl(t)),await ar(r)}finally{e.close()}}async function zl(t){let e=await Et();try{let r=e.transaction([St,Wt,Lr,vt],"readwrite");r.objectStore(St).delete(t),r.objectStore(vt).delete(`pdf-translation:${t}`);let n=r.objectStore(vt).openCursor(Oi());n.onsuccess=()=>{let s=n.result;if(!s)return;let l=s.value;l.bookIds.includes(t)&&s.update({...l,bookIds:l.bookIds.filter(d=>d!==t)}),s.continue()};let o=r.objectStore(Lr).index("bookId").openKeyCursor(IDBKeyRange.only(t));o.onsuccess=()=>{let s=o.result;s&&(r.objectStore(Lr).delete(s.primaryKey),s.continue())};let i=r.objectStore(Wt).index("bookId").openKeyCursor(IDBKeyRange.only(t));i.onsuccess=()=>{let s=i.result;s&&(r.objectStore(Wt).delete(s.primaryKey),s.continue())},await ar(r)}finally{e.close()}}async function Bl(){let t=await Et();try{let e=t.transaction([St,Wt,Lr,vt],"readwrite");e.objectStore(St).clear(),e.objectStore(Wt).clear(),e.objectStore(Lr).clear();let r=e.objectStore(vt).openKeyCursor();r.onsuccess=()=>{let n=r.result;if(n){let o=String(n.key);(o.startsWith("pdf-translation:")||o.startsWith(Sa))&&e.objectStore(vt).delete(n.primaryKey),n.continue()}},await ar(e)}finally{t.close()}}async function $l(t){let e=await Et();try{let r=e.transaction(Lr,"readonly").objectStore(Lr).get(t);return await new Promise((n,o)=>{r.onsuccess=()=>n(r.result||null),r.onerror=()=>o(r.error)})}finally{e.close()}}async function Hl(t){let e=await Et();try{let r=e.transaction([St,Lr],"readwrite"),n=r.objectStore(St).get(t.bookId);n.onsuccess=()=>{n.result&&r.objectStore(Lr).put({...t,updatedAt:Date.now()})},await ar(r)}finally{e.close()}}async function Ul(t){let e=await Et();try{let r=e.transaction(vt,"readonly").objectStore(vt).get(`pdf-translation:${t}`);return await new Promise((n,o)=>{r.onsuccess=()=>n(r.result?.value||{}),r.onerror=()=>o(r.error)})}finally{e.close()}}async function Wl(t,e){let r=await Et();try{let n=r.transaction([St,vt],"readwrite"),o=n.objectStore(St).get(t);o.onsuccess=()=>{o.result&&n.objectStore(vt).put({key:`pdf-translation:${t}`,value:e})},await ar(n)}finally{r.close()}}function jl(t="a"){return globalThis.crypto?.randomUUID?`${t}-${crypto.randomUUID()}`:`${t}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}async function Gl(t){let e=await Et();try{let o=e.transaction(Wt,"readonly").objectStore(Wt).index("bookId").getAll(t);return(await new Promise((i,s)=>{o.onsuccess=()=>i(o.result??[]),o.onerror=()=>s(o.error)})).sort((i,s)=>{let l=Number.isFinite(i.page)?i.page:Number.MAX_SAFE_INTEGER,d=Number.isFinite(s.page)?s.page:Number.MAX_SAFE_INTEGER;if(l!==d)return l-d;let f=Number.isFinite(i.chapterIndex)?i.chapterIndex:Number.MAX_SAFE_INTEGER,g=Number.isFinite(s.chapterIndex)?s.chapterIndex:Number.MAX_SAFE_INTEGER;return f!==g?f-g:(i.createdAt||0)-(s.createdAt||0)})}finally{e.close()}}async function ql(t){let e=Date.now(),r={...t,id:t.id||jl(),createdAt:t.createdAt||e,updatedAt:e};if(!r.bookId)throw new Error("\u6279\u6CE8\u7F3A\u5C11\u4E66\u7C4D\u4FE1\u606F\u3002");if(!r.kind||!r.style)throw new Error("\u6279\u6CE8\u7F3A\u5C11\u7C7B\u578B\u3002");let n=await Et();try{let o=n.transaction(Wt,"readwrite");return o.objectStore(Wt).put(r),await ar(o),r}finally{n.close()}}async function Xl(t,e){let r=await Et();try{let n=r.transaction(Wt,"readwrite"),o=n.objectStore(Wt),a=await new Promise((s,l)=>{let d=o.get(t);d.onsuccess=()=>s(d.result??null),d.onerror=()=>l(d.error)});if(!a)return await ar(n),null;let i={...a,...e,id:a.id,updatedAt:Date.now()};return o.put(i),await ar(n),i}finally{r.close()}}async function Vl(t){let e=await Et();try{let r=e.transaction(Wt,"readwrite");r.objectStore(Wt).delete(t),await ar(r)}finally{e.close()}}async function Kl(t){if(!t||!t.size)throw new Error("\u80CC\u666F\u56FE\u7247\u4E3A\u7A7A\u3002");if(t.size>16777216)throw new Error(`\u80CC\u666F\u56FE\u7247\u8D85\u8FC7 ${Math.round(16777216/1024/1024)} MB\uFF0C\u8BF7\u9009\u62E9\u66F4\u5C0F\u7684\u56FE\u7247\u3002`);let e=await Et();try{let r=e.transaction(vt,"readwrite");return r.objectStore(vt).put({key:Ta,blob:t,type:t.type||"image/*",size:t.size,updatedAt:Date.now()}),await ar(r),Ta}finally{e.close()}}async function Yl(){let t=await Et();try{let r=t.transaction(vt,"readonly").objectStore(vt).get(Ta);return(await new Promise((o,a)=>{r.onsuccess=()=>o(r.result??null),r.onerror=()=>a(r.error)}))?.blob??null}finally{t.close()}}async function Zl(){let t=await Et();try{let e=t.transaction(vt,"readwrite");e.objectStore(vt).delete(Ta),await ar(e)}finally{t.close()}}function Pn(t,e,r,n){let o=Number(t);return Number.isFinite(o)?Math.max(e,Math.min(r,o)):n}function Du(t,e){return/^#[0-9a-f]{6}$/iu.test(String(t))?String(t):e}function Ql(){try{let t=localStorage.getItem(Il);if(!t)return{...Mt};let e=JSON.parse(t),n=(Number(e.settingsVersion)||1)>=2&&typeof e.autoTranslate=="boolean"?e.autoTranslate:!1;return{...Mt,...e,settingsVersion:2,autoTranslate:n,hideTranslations:!!e.hideTranslations,fontSize:Pn(e.fontSize,13,34,Mt.fontSize),lineHeight:Pn(e.lineHeight,1.35,2.4,Mt.lineHeight),tocWidth:Pn(e.tocWidth,180,520,Mt.tocWidth),readingMode:e.readingMode==="page"?"book":Nu.has(e.readingMode)?e.readingMode:Mt.readingMode,pageAnimation:Cu.has(e.pageAnimation)?e.pageAnimation:Mt.pageAnimation,bookAnimation:Iu.has(e.bookAnimation)?e.bookAnimation:Mt.bookAnimation,fontFamily:Au.has(e.fontFamily)?e.fontFamily:Mt.fontFamily,fontWeight:Ru.has(Number(e.fontWeight))?Number(e.fontWeight):Mt.fontWeight,contentWidth:Pn(e.contentWidth,520,1600,Mt.contentWidth),brightness:Pn(e.brightness,.6,1.2,Mt.brightness),backgroundPreset:Eu.has(e.backgroundPreset)?e.backgroundPreset:Mt.backgroundPreset,customBackground:Du(e.customBackground,Mt.customBackground),textTone:Mu.has(e.textTone)?e.textTone:Mt.textTone,backgroundImageKey:typeof e.backgroundImageKey=="string"?e.backgroundImageKey:"",backgroundImageOpacity:Pn(e.backgroundImageOpacity,0,.85,Mt.backgroundImageOpacity),backgroundImageBlur:Pn(e.backgroundImageBlur,0,12,Mt.backgroundImageBlur),annotationPanelOpen:!!e.annotationPanelOpen}}catch{return{...Mt}}}function Jl(t){try{localStorage.setItem(Il,JSON.stringify(t))}catch{}}function ec(t){let e=Number(t)||0;return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:e<1024*1024*1024?`${(e/1024/1024).toFixed(1)} MB`:`${(e/1024/1024/1024).toFixed(2)} GB`}function Bi(t){if(!t)return"";let e=Date.now()-Number(t);return e<6e4?"\u521A\u521A":e<36e5?`${Math.floor(e/6e4)} \u5206\u949F\u524D`:e<864e5?`${Math.floor(e/36e5)} \u5C0F\u65F6\u524D`:e<7*864e5?`${Math.floor(e/864e5)} \u5929\u524D`:new Date(t).toLocaleDateString("zh-CN")}function tc(t){let e=String(t??"").replace(/\s+/gu,"");if(e.length<40)return!1;let r=Pu(e),n=(e.match(/[A-Za-zÀ-ÖØ-öø-ÿ\u0400-\u04ff]/gu)??[]).length/e.length;return r<.18&&n>.45}var ir=It(require("react"),1);var me=require("react/jsx-runtime"),Dr=t=>t.title||"\u672A\u547D\u540D\u6587\u6863";function $i(t,e){return`${t.title||""} ${t.author||""}`.toLowerCase().includes(e)}function Fu({book:t}){let[e,r]=ir.default.useState(!1);return t.cover&&!e?(0,me.jsx)("img",{src:t.cover,alt:"",loading:"lazy",decoding:"async",onError:()=>r(!0)}):(0,me.jsx)("span",{className:"dshr-collection__spine",children:qr(t.format)})}function rc({folder:t,expanded:e,onToggle:r,onOpen:n,onRead:o}){let a=ir.default.useId(),i=ir.default.useId();return(0,me.jsxs)("article",{className:"dshr-collection","data-collection-id":t.id,children:[(0,me.jsxs)("button",{type:"button",className:"dshr-collection__open","aria-label":`\u6253\u5F00\u4E66\u5355 ${t.name}`,"aria-describedby":i,onClick:n,children:[(0,me.jsxs)("span",{className:"dshr-collection__top",children:[(0,me.jsx)("span",{className:"dshr-collection__icon",children:(0,me.jsx)(xa,{size:17})}),(0,me.jsxs)("span",{className:"dshr-collection__heading",children:[(0,me.jsx)("strong",{title:t.name,children:t.name}),(0,me.jsxs)("small",{id:i,children:[t.system?"\u9ED8\u8BA4\u5206\u7C7B":"\u81EA\u5EFA\u4E66\u5355"," \xB7 ",t.books.length," \u672C"]})]}),(0,me.jsx)(ao,{size:16})]}),t.books.length?(0,me.jsx)("span",{className:"dshr-collection__covers",children:t.books.slice(0,4).map(s=>(0,me.jsxs)("span",{className:"dshr-collection__sample",children:[(0,me.jsx)("span",{className:"dshr-collection__cover",children:(0,me.jsx)(Fu,{book:s},s.cover)}),(0,me.jsx)("span",{className:"dshr-collection__title",title:Dr(s),children:Dr(s)})]},s.id))}):(0,me.jsx)("span",{className:"dshr-collection__empty",children:"\u6682\u672A\u6536\u5F55\u4E66\u7C4D"})]}),t.books.length>0&&(0,me.jsxs)("button",{type:"button",className:"dshr-collection__peek",onClick:r,"aria-expanded":e,"aria-controls":a,children:[e?"\u6536\u8D77\u4E66\u540D":`\u9884\u89C8\u5168\u90E8 ${t.books.length} \u672C`," ",(0,me.jsx)(vl,{size:13})]}),t.books.length>0&&(0,me.jsx)("ul",{className:"dshr-collection__preview",id:a,hidden:!e,"aria-label":`${t.name}\u4E66\u540D\u6E05\u5355`,children:e&&t.books.map(s=>(0,me.jsx)("li",{children:(0,me.jsxs)("button",{type:"button",onClick:()=>o(s),children:[(0,me.jsx)("span",{children:Dr(s)}),(0,me.jsx)("small",{children:qr(s.format)})]})},s.id))})]})}function nc({action:t,books:e,collections:r,onClose:n,onCreate:o,onSave:a,onDelete:i}){let s=ir.default.useRef(null),l=ir.default.useRef(!1),[d,f]=ir.default.useState(!1),[g,u]=ir.default.useState(""),[p,_]=ir.default.useState(t.collection?.name??""),[S,v]=ir.default.useState(""),P=t.collection?.bookIds??[],[A,y]=ir.default.useState(()=>new Set(t.bookIds??P)),[N,M]=ir.default.useState(""),E=ir.default.useId(),L=t.kind==="add",I=t.kind==="delete",x=L?"\u52A0\u5165\u4E66\u5355":I?"\u5220\u9664\u4E66\u5355":t.collection?"\u7F16\u8F91\u4E66\u5355":"\u65B0\u5EFA\u4E66\u5355",O=S.trim().toLowerCase(),D=!L&&!I?e.filter(H=>$i(H,O)):[];ir.default.useLayoutEffect(()=>{let H=s.current;return H.showModal(),()=>H.close()},[]);async function te(H){if(H.preventDefault(),!l.current){l.current=!0,f(!0),u("");try{I?await i(t.collection.id):L?await a({id:N,add:t.bookIds}):await a({id:t.collection?.id,name:p,add:[...A].filter(ne=>!P.includes(ne)),remove:P.filter(ne=>!A.has(ne))}),n()}catch(ne){u(ne?.message||"\u4E66\u5355\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002")}finally{l.current=!1,f(!1)}}}return(0,me.jsx)("dialog",{ref:s,className:"dshr-modal dshr-collection-dialog","aria-labelledby":E,onCancel:H=>{H.preventDefault(),l.current||n()},children:(0,me.jsxs)("form",{onSubmit:te,children:[(0,me.jsx)("h3",{id:E,children:x}),I?(0,me.jsxs)("p",{children:["\u5220\u9664\u300C",t.collection.name,"\u300D\u540E\uFF0C\u91CC\u9762\u7684\u4E66\u4ECD\u53EF\u5728\u5168\u90E8\u6587\u6863\u4E2D\u6253\u5F00\uFF0C\u8FDB\u5EA6\u4E0E\u6279\u6CE8\u4F1A\u4FDD\u7559\u3002"]}):L?(0,me.jsxs)("label",{className:"dshr-collection-dialog__field",children:[(0,me.jsxs)("span",{children:["\u5C06 ",t.bookIds.length," \u672C\u4E66\u52A0\u5165"]}),(0,me.jsxs)("select",{value:N,onChange:H=>M(H.target.value),disabled:d,required:!0,children:[(0,me.jsx)("option",{value:"",children:"\u9009\u62E9\u81EA\u5EFA\u4E66\u5355"}),r.map(H=>(0,me.jsxs)("option",{value:H.id,children:[H.name," \xB7 ",H.bookIds.length," \u672C"]},H.id))]})]}):(0,me.jsxs)(me.Fragment,{children:[(0,me.jsxs)("label",{className:"dshr-collection-dialog__field",children:[(0,me.jsx)("span",{children:"\u4E66\u5355\u540D\u79F0"}),(0,me.jsx)("input",{value:p,onChange:H=>_(H.target.value),placeholder:"\u4F8B\u5982\uFF1A\u8BBA\u6587\u5F85\u8BFB",maxLength:60,disabled:d,required:!0})]}),(0,me.jsxs)("div",{className:"dshr-collection-dialog__listbar",children:[(0,me.jsx)("strong",{children:"\u6536\u5F55\u4E66\u7C4D"}),(0,me.jsxs)("span",{children:[A.size," \u672C\u5DF2\u9009"]})]}),e.length>0&&(0,me.jsxs)("label",{className:"dshr-library__search dshr-collection-dialog__search",children:[(0,me.jsx)(Mo,{size:14}),(0,me.jsx)("input",{type:"search",placeholder:"\u641C\u7D22\u4E66\u540D\u3001\u4F5C\u8005","aria-label":"\u641C\u7D22\u53EF\u52A0\u5165\u7684\u4E66\u7C4D",value:S,onChange:H=>v(H.target.value)})]}),D.length?(0,me.jsx)("div",{className:"dshr-collection-dialog__choices",children:D.map(H=>(0,me.jsxs)("label",{children:[(0,me.jsx)("input",{type:"checkbox",checked:A.has(H.id),disabled:d,onChange:ne=>{let re=ne.target.checked;y(z=>{let oe=new Set(z);return re?oe.add(H.id):oe.delete(H.id),oe})}}),(0,me.jsxs)("span",{children:[Dr(H),(0,me.jsx)("small",{children:[qr(H.format),H.author].filter(Boolean).join(" \xB7 ")})]})]},H.id))}):(0,me.jsx)("p",{children:e.length?"\u6CA1\u6709\u5339\u914D\u7684\u4E66\u7C4D\u3002":"\u53EF\u4EE5\u5148\u521B\u5EFA\u7A7A\u4E66\u5355\uFF0C\u5BFC\u5165\u4E66\u7C4D\u540E\u518D\u52A0\u5165\u3002"})]}),g&&(0,me.jsx)("p",{className:"dshr-collection-dialog__error",role:"alert",children:g}),(0,me.jsxs)("div",{className:"dshr-modal__actions dshr-collection-dialog__actions",children:[L&&(0,me.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:d,onClick:()=>o(t.bookIds),children:[(0,me.jsx)(hn,{size:15})," \u65B0\u5EFA\u4E66\u5355"]}),(0,me.jsx)("button",{type:"button",className:"dshr-btn",disabled:d,onClick:n,children:"\u53D6\u6D88"}),(0,me.jsxs)("button",{type:"submit",className:`dshr-btn ${I?"dshr-btn--danger":"dshr-btn--primary"}`,disabled:d||(L?!N:!I&&!p.trim()),children:[I&&(0,me.jsx)(dn,{size:14}),d?"\u6B63\u5728\u4FDD\u5B58\u2026":I?"\u5220\u9664\u4E66\u5355":L?"\u52A0\u5165":"\u4FDD\u5B58\u4E66\u5355"]})]})]})})}var U=require("react/jsx-runtime");function oc(t){let e=t.progress;return e?typeof e.page=="number"&&typeof e.pages=="number"&&e.pages>0?Math.max(0,Math.min(100,e.page/e.pages*100)):typeof e.percent=="number"?Math.max(0,Math.min(100,e.percent)):typeof e.chapter=="number"&&typeof e.chapters=="number"&&e.chapters>0?Math.max(0,Math.min(100,(e.chapter+1)/e.chapters*100)):0:0}var zu={book:"paper",paper:"document",document:"book"};function Bu({book:t,onOpen:e,onDelete:r,onCycleCategory:n,onAdd:o,onRemove:a,selection:i,onToggle:s}){let l=oc(t),d=[qr(t.format),t.author||"",ec(t.size)].filter(Boolean).join(" \xB7 ");return(0,U.jsxs)("article",{className:`dshr-book-card${i?" is-selecting":""}${i?.has(t.id)?" is-selected":""}`,children:[(0,U.jsxs)("button",{type:"button",className:"dshr-book","aria-pressed":i?i.has(t.id):void 0,"aria-label":i?`\u9009\u62E9 ${Dr(t)}`:`\u6253\u5F00 ${Dr(t)}`,onClick:()=>i?s(t.id):e(t),children:[(0,U.jsx)("span",{className:"dshr-book__media",children:t.cover?(0,U.jsx)("img",{className:"dshr-book__cover",src:t.cover,alt:"",loading:"lazy",decoding:"async"}):(0,U.jsx)("span",{className:"dshr-book__spine",children:qr(t.format)})}),(0,U.jsxs)("span",{className:"dshr-book__body",children:[(0,U.jsx)("span",{className:"dshr-book__title",children:Dr(t)}),(0,U.jsx)("span",{className:"dshr-book__meta",children:d}),(0,U.jsxs)("span",{className:"dshr-book__foot",children:[(0,U.jsx)("span",{children:t.lastOpenedAt?`\u9605\u8BFB\u4E8E ${Bi(t.lastOpenedAt)}`:Bi(t.addedAt)}),(0,U.jsx)("span",{children:l>0?`${Math.round(l)}%`:"\u672A\u5F00\u59CB"})]}),(0,U.jsx)("span",{className:"dshr-book__progress","aria-hidden":"true",children:(0,U.jsx)("i",{style:{"--p":`${l}%`}})})]}),i&&(0,U.jsx)("span",{className:"dshr-book__selected","aria-hidden":"true",children:i.has(t.id)&&(0,U.jsx)(kl,{size:14})})]}),!i&&(0,U.jsxs)("div",{className:"dshr-book__badges",children:[(0,U.jsxs)("button",{type:"button",className:`dshr-book__category is-${t.category||"document"}`,title:`\u9ED8\u8BA4\u5206\u7C7B\uFF1A${Lo(t.category)}${t.categoryManual?"\uFF08\u624B\u52A8\uFF09":"\uFF08\u81EA\u52A8\uFF09"} \xB7 \u70B9\u51FB\u5207\u6362`,onClick:()=>n(t),children:[(0,U.jsx)(Sl,{size:11})," ",Lo(t.category)]}),(0,U.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--ghost dshr-book__add","aria-label":`\u5C06 ${Dr(t)} \u52A0\u5165\u4E66\u5355`,onClick:()=>o([t.id]),children:[(0,U.jsx)(hn,{size:13})," \u52A0\u5165\u4E66\u5355"]}),a?(0,U.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost","aria-label":`\u4ECE\u6B64\u4E66\u5355\u79FB\u51FA ${Dr(t)}`,title:"\u4ECE\u6B64\u4E66\u5355\u79FB\u51FA",onClick:()=>a([t.id]),children:(0,U.jsx)(va,{size:14})}):(0,U.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost dshr-book__delete","aria-label":`\u4ECE\u4E66\u67B6\u5220\u9664 ${Dr(t)}`,title:"\u4ECE\u4E66\u67B6\u5220\u9664",onClick:()=>r(t),children:(0,U.jsx)(dn,{size:14})})]})]})}function ac({books:t,collections:e,onCollectionsChange:r,loading:n,resumeBook:o,onResume:a,importing:i,organizing:s,categoryFilter:l,onCategoryFilter:d,onAutoOrganize:f,onImport:g,onOpen:u,onDelete:p,onCycleCategory:_,onSettings:S,onOnlineImport:v}){let P=sr.default.useRef(null),[A,y]=sr.default.useState(!1),[N,M]=sr.default.useState(""),[E,L]=sr.default.useState(null),[I,x]=sr.default.useState(null),[O,D]=sr.default.useState(null),[te,H]=sr.default.useState(""),ne=sr.default.useRef(0),re=sr.default.useRef(null),z=sr.default.useRef(null),oe=sr.default.useRef(!1),B=sr.default.useMemo(()=>{let h=new Map(t.map(b=>[b.id,b])),c=new Map(Oo.map(b=>[b.id,[]])),k=[...t].sort((b,Y)=>b.addedAt-Y.addedAt);for(let b of k)c.get(b.category)?.push(b);return[...e.map(b=>({...b,books:b.bookIds.map(Y=>h.get(Y)).filter(Boolean)})),...Oo.map(b=>({id:b.id,name:b.label,system:!0,books:c.get(b.id)}))]},[t,e]),q=B.find(h=>h.id===l),ae=q?.books??t,F=N.trim().toLowerCase(),de=F?ae.filter(h=>$i(h,F)):ae,ve=I?ae.filter(h=>I.has(h.id)).map(h=>h.id):[];sr.default.useLayoutEffect(()=>{oe.current&&(oe.current=!1,z.current?.focus({preventScroll:!0}))},[l]);function Ae(h){oe.current=!0,d(h),M(""),x(null),L(null),H(""),re.current?.scrollTo({top:0})}let J=(h=[])=>D({kind:"edit",bookIds:h}),ge=h=>e.length?D({kind:"add",bookIds:h}):J(h);async function Ue(h){let c=await Dl(h);return r(k=>k.some(b=>b.id===c.id)?k.map(b=>b.id===c.id?c:b):[...k,c]),c}async function we(h){try{await Ue({id:q.id,remove:h}),x(null),H(`\u5DF2\u4ECE\u300C${q.name}\u300D\u79FB\u51FA ${h.length} \u672C\u3002`)}catch(c){H(c?.message||"\u79FB\u51FA\u4E66\u5355\u5931\u8D25\u3002")}}async function Be(h){await Fl(h),r(c=>c.filter(k=>k.id!==h)),l===h&&Ae("all"),H("\u4E66\u5355\u5DF2\u5220\u9664\u3002")}let Xe=()=>P.current?.click(),ft=h=>{h.preventDefault(),ne.current=0,y(!1);let c=[...h.dataTransfer?.files??[]].filter(k=>Li(k.name));if(c.length===0){g([],{rejected:!0});return}g(c)};return(0,U.jsxs)("div",{className:"dshr-library",ref:re,children:[(0,U.jsxs)("div",{className:"dshr-library__inner",children:[(0,U.jsxs)("header",{className:"dshr-hero",children:[(0,U.jsxs)("div",{children:[(0,U.jsxs)("div",{className:"dshr-hero__eyebrow",children:[(0,U.jsx)(Ci,{size:15})," DSH READER \xB7 LIBRARY"]}),(0,U.jsx)("h1",{children:"\u6211\u7684\u4E66\u67B6"}),(0,U.jsx)("p",{children:"\u7528\u4E66\u5355\u6574\u7406\u4E66\u7C4D\u3001\u8BBA\u6587\u548C\u9605\u8BFB\u8D44\u6599\u3002"})]}),(0,U.jsxs)("div",{className:"dshr-hero__actions",children:[(0,U.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:Xe,disabled:i,children:[i?(0,U.jsx)("span",{className:"dshr-spinner"}):(0,U.jsx)(hn,{size:15}),i?"\u6B63\u5728\u52A0\u5165\u4E66\u67B6\u2026":"\u5BFC\u5165\u6587\u6863"]}),(0,U.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:v,title:"\u4ECE\u53E4\u767B\u5821\u3001Standard Ebooks\u3001arXiv \u7B49\u516C\u5F00\u6765\u6E90\u4E0B\u8F7D\u5E76\u6253\u5F00",children:[(0,U.jsx)(ka,{size:15})," \u516C\u5F00\u4E66\u5E93\u5BFC\u5165"]}),(0,U.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:f,disabled:s||t.length===0,title:"\u6309\u6587\u4EF6\u7C7B\u578B\u4E0E\u5143\u6570\u636E\uFF0C\u628A\u4E66\u67B6\u6574\u7406\u6210\u4E66\u7C4D / \u6587\u732E / \u6587\u6863",children:[s?(0,U.jsx)("span",{className:"dshr-spinner"}):(0,U.jsx)(Tl,{size:15}),s?"\u6574\u7406\u4E2D\u2026":"\u4E00\u952E\u6574\u7406"]}),(0,U.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:S,title:"\u9605\u8BFB\u4E0E\u4E66\u67B6\u8BBE\u7F6E",children:[(0,U.jsx)(ba,{size:15})," \u8BBE\u7F6E"]})]})]}),o?(0,U.jsxs)("button",{type:"button",className:"dshr-resume",onClick:()=>a(o),children:[(0,U.jsx)("span",{className:"dshr-resume__mark",children:(0,U.jsx)(Ci,{size:19})}),(0,U.jsxs)("span",{className:"dshr-resume__body",children:[(0,U.jsx)("span",{className:"dshr-resume__eyebrow",children:"\u7EE7\u7EED\u4E0A\u6B21\u9605\u8BFB"}),(0,U.jsx)("strong",{children:o.title||"\u4E0A\u6B21\u6253\u5F00\u7684\u6587\u6863"}),(0,U.jsxs)("span",{className:"dshr-resume__meta",children:[qr(o.format),o.progress?.page?` \xB7 \u7B2C ${o.progress.page}${o.progress.pages?` / ${o.progress.pages}`:""} \u9875`:"",` \xB7 ${Math.round(oc(o))}%`]})]}),(0,U.jsx)("span",{className:"dshr-resume__arrow",children:"\u2192"})]}):null,!q&&!n&&(0,U.jsxs)("section",{className:"dshr-collections","aria-label":"\u4E66\u5355\u6587\u4EF6\u5939",children:[(0,U.jsxs)("div",{className:"dshr-collections__bar",children:[(0,U.jsx)("h2",{ref:z,tabIndex:-1,children:"\u4E66\u5355\u6587\u4EF6\u5939"}),(0,U.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>J(),children:[(0,U.jsx)(hn,{size:15})," \u65B0\u5EFA\u4E66\u5355"]})]}),(0,U.jsx)("div",{className:"dshr-collections__grid",children:B.map(h=>(0,U.jsx)(rc,{folder:h,expanded:E===h.id,onToggle:()=>L(c=>c===h.id?null:h.id),onOpen:()=>Ae(h.id),onRead:u},h.id))})]}),!q&&(0,U.jsxs)("section",{className:`dshr-drop${t.length?" is-compact":""}${A?" is-over":""}`,onDragEnter:h=>{h.preventDefault(),ne.current+=1,y(!0)},onDragOver:h=>h.preventDefault(),onDragLeave:()=>{ne.current=Math.max(0,ne.current-1),ne.current===0&&y(!1)},onDrop:ft,"aria-label":"\u62D6\u653E\u6587\u6863\u4EE5\u5BFC\u5165",children:[(0,U.jsx)("div",{className:"dshr-drop__mark",children:(0,U.jsx)(xl,{size:24})}),(0,U.jsxs)("div",{className:"dshr-drop__body",children:[(0,U.jsx)("div",{className:"dshr-drop__title",children:"\u62D6\u4E00\u4EFD\u6587\u732E\u6216\u4E66\u5230\u8FD9\u91CC\uFF0C\u6216\u70B9\u51FB\u5BFC\u5165"}),(0,U.jsx)("div",{className:"dshr-drop__hint",children:"\u6587\u4EF6\u53EA\u4FDD\u5B58\u5728\u672C\u673A\u6D4F\u89C8\u5668\u4E66\u67B6\u4E2D\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\uFF1B\u7FFB\u8BD1\u4EC5\u53D1\u9001\u5F53\u524D\u9009\u4E2D\u7684\u6BB5\u843D\u3002"}),!t.length&&(0,U.jsx)("div",{className:"dshr-drop__formats",children:["PDF","EPUB","MOBI","AZW3","TXT","Markdown","HTML"].map(h=>(0,U.jsx)("span",{className:"dshr-chip",children:h},h))})]}),(0,U.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:Xe,disabled:i,children:"\u9009\u62E9\u6587\u4EF6"})]}),q&&(0,U.jsxs)("div",{className:"dshr-collection-context",children:[(0,U.jsxs)("nav",{"aria-label":"\u4E66\u67B6\u4F4D\u7F6E",children:[(0,U.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--ghost",onClick:()=>Ae("all"),children:[(0,U.jsx)(oo,{size:15})," \u8FD4\u56DE\u4E66\u67B6"]}),(0,U.jsxs)("span",{ref:z,tabIndex:-1,"aria-current":"page",children:[(0,U.jsx)(xa,{size:16})," ",q.name]})]}),!q.system&&(0,U.jsxs)("div",{className:"dshr-collection-context__actions",children:[(0,U.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>D({kind:"edit",collection:q}),children:"\u7F16\u8F91\u4E66\u5355"}),(0,U.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--ghost",onClick:()=>D({kind:"delete",collection:q}),children:[(0,U.jsx)(dn,{size:15})," \u5220\u9664\u4E66\u5355"]})]})]}),(0,U.jsxs)("div",{className:"dshr-library__bar",children:[(0,U.jsx)("h2",{children:q?"\u4E66\u5355\u5185\u5BB9":"\u5168\u90E8\u6587\u6863"}),(0,U.jsxs)("div",{className:"dshr-library__search",children:[(0,U.jsx)(Mo,{size:14}),(0,U.jsx)("input",{type:"search",value:N,onChange:h=>M(h.target.value),placeholder:q?"\u641C\u7D22\u6B64\u4E66\u5355":"\u641C\u7D22\u4E66\u540D\u3001\u4F5C\u8005","aria-label":q?"\u641C\u7D22\u6B64\u4E66\u5355":"\u641C\u7D22\u4E66\u67B6"})]}),(0,U.jsxs)("span",{children:[de.length," / ",ae.length," \u672C"]}),ae.length>0&&(0,U.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline","aria-pressed":!!I,onClick:()=>x(h=>h?null:new Set),children:I?"\u9000\u51FA\u591A\u9009":"\u591A\u9009"})]}),(0,U.jsx)("div",{className:"dshr-library__notice",role:"status",children:te}),I&&(0,U.jsxs)("div",{className:"dshr-collection-selection","aria-label":"\u6279\u91CF\u4E66\u5355\u64CD\u4F5C",children:[(0,U.jsxs)("span",{children:["\u5DF2\u9009 ",ve.length," \u672C"]}),(0,U.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",disabled:!de.length,onClick:()=>x(h=>new Set([...h,...de.map(c=>c.id)])),children:"\u5168\u9009\u5F53\u524D\u7ED3\u679C"}),(0,U.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:!ve.length,onClick:()=>ge(ve),children:"\u52A0\u5165\u4E66\u5355"}),q&&!q.system&&(0,U.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",disabled:!ve.length,onClick:()=>{we(ve)},children:"\u4ECE\u6B64\u4E66\u5355\u79FB\u51FA"})]}),n?(0,U.jsxs)("div",{className:"dshr-loading",style:{minHeight:180},children:[(0,U.jsx)("div",{className:"dshr-loading__ring"}),(0,U.jsx)("span",{children:"\u6B63\u5728\u6253\u5F00\u4E66\u67B6\u2026"})]}):de.length===0?(0,U.jsxs)("div",{className:"dshr-empty-books",children:[F?`\u6CA1\u6709\u5339\u914D\u300C${N.trim()}\u300D\u7684\u6587\u6863\u3002`:q?`\u300C${q.name}\u300D\u8FD8\u6CA1\u6709\u4E66\u3002`:"\u5BFC\u5165\u6587\u6863\u540E\uFF0C\u5C31\u53EF\u4EE5\u628A\u5B83\u4EEC\u52A0\u5165\u4E66\u5355\u3002",q&&!q.system&&!F&&(0,U.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>D({kind:"edit",collection:q}),children:[(0,U.jsx)(hn,{size:15})," \u6DFB\u52A0\u4E66\u7C4D"]})]}):(0,U.jsx)("div",{className:"dshr-books",children:de.map(h=>(0,U.jsx)(Bu,{book:h,onOpen:u,onDelete:p,onCycleCategory:c=>_(c,zu[c.category||"document"]),onAdd:ge,onRemove:q&&!q.system?we:void 0,selection:I,onToggle:c=>x(k=>{let b=new Set(k);return b.has(c)?b.delete(c):b.add(c),b})},h.id))}),(0,U.jsxs)("footer",{className:"dshr-library__foot",children:[(0,U.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,U.jsx)(no,{size:14})," \u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1"]}),(0,U.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,U.jsx)(bn,{size:14})," \u9009\u4E2D\u95EE AI"]}),(0,U.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,U.jsx)(Mo,{size:14})," Google / \u5B66\u672F\u641C\u7D22"]}),(0,U.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,U.jsx)(ml,{size:14})," \u672C\u5730\u4E66\u67B6 \xB7 \u8FDB\u5EA6\u4E0E\u6279\u6CE8\u81EA\u52A8\u4FDD\u5B58"]})]})]}),O&&(0,U.jsx)(nc,{action:O,books:t,collections:e,onClose:()=>D(null),onCreate:J,onDelete:Be,onSave:async h=>{let c=await Ue(h);x(null),H(O.kind==="add"?`\u5DF2\u52A0\u5165\u300C${c.name}\u300D\u3002`:`\u5DF2\u4FDD\u5B58\u300C${c.name}\u300D\u3002`)}},`${O.kind}:${O.collection?.id||""}`),(0,U.jsx)("input",{ref:P,type:"file",multiple:!0,accept:".pdf,.epub,.mobi,.azw,.azw3,.txt,.md,.markdown,.html,.htm,application/pdf,application/epub+zip,text/plain,text/markdown,text/html",className:"dshr-sr-only",tabIndex:-1,onChange:h=>{let c=[...h.target.files??[]];h.target.value="",c.length>0&&g(c)}})]})}var bt=It(require("react"),1);var $u=Object.freeze({"content-type":"application/json","x-dsh-reader":"1"}),Xr=class extends Error{constructor(e,r="REQUEST_FAILED",n=0){super(e),this.name="ReaderApiError",this.code=r,this.status=n}};async function sc(t){let e=null;try{e=await t.json()}catch{}return new Xr(e?.error?.message||e?.message||`\u7FFB\u8BD1\u670D\u52A1\u4E0D\u53EF\u7528\uFF08HTTP ${t.status}\uFF09\u3002`,e?.error?.code||e?.code||"REQUEST_FAILED",t.status)}async function Hi(t,e,{signal:r}={}){let n;try{n=await fetch(t,{method:"POST",headers:$u,body:JSON.stringify(e),signal:r,credentials:"same-origin"})}catch(o){throw o?.name==="AbortError"?o:new Xr("\u65E0\u6CD5\u8FDE\u63A5\u5230 DSH \u4E3B\u8FDB\u7A0B\uFF0C\u8BF7\u786E\u8BA4 DSH \u6B63\u5728\u8FD0\u884C\u3002","NETWORK",0)}if(!n.ok)throw await sc(n);return n}function Ln(t){return t?.name==="AbortError"}async function so(t,e={}){let r=t.map(i=>({id:String(i.id),text:String(i.text??"")})).filter(i=>i.text.trim()!=="");if(r.length===0)return{};let n=await Hi("/dsh-reader/ai/translate",{segments:r,context:String(e.context??"").slice(0,1200),title:String(e.title??"").slice(0,300),glossary:String(e.glossary??"").slice(0,4e3),...e.expectedModel?{expectedModel:e.expectedModel}:{}},{signal:e.signal}),o=await n.json().catch(()=>null);if(!o||typeof o!="object"||!Array.isArray(o.translations))throw new Xr("\u7FFB\u8BD1\u670D\u52A1\u8FD4\u56DE\u4E86\u65E0\u6CD5\u8BC6\u522B\u7684\u7ED3\u679C\u3002","BAD_RESPONSE",n.status);let a={};for(let i of o.translations)i&&typeof i.id=="string"&&typeof i.zh=="string"&&i.zh.trim()!==""&&(a[i.id]=i.zh);if(Object.keys(a).length===0)throw new Xr("\u7FFB\u8BD1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u53EF\u7528\u8BD1\u6587\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","EMPTY_TRANSLATION",n.status);return e.includeMetadata?{translations:a,model:o.model,promptVersion:o.promptVersion}:a}async function lc({signal:t}={}){let e=await fetch("/dsh-reader/ai/status",{signal:t,credentials:"same-origin",headers:{"x-dsh-reader":"1"},cache:"no-store"});if(!e.ok)throw await sc(e);return e.json()}function ic(t){let e=t.split(/\r?\n/u).filter(r=>r.startsWith("data:")).map(r=>r.slice(5).trimStart()).join(`
`);if(e==="")return null;try{return JSON.parse(e)}catch{return{type:"delta",text:e}}}async function Ui(t,{onDelta:e,onMeta:r}={}){let n=await Hi("/dsh-reader/ai/chat",t,{signal:t.signal});if(!n.body)throw new Xr("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u6D41\u5F0F\u54CD\u5E94\u3002","NO_STREAM",n.status);let o=n.body.getReader(),a=new TextDecoder,i="",s=!1,l=null;try{for(;;){let{value:d,done:f}=await o.read();if(f)break;i+=a.decode(d,{stream:!0});let g=i.search(/\r?\n\r?\n/u);for(;g!==-1;){let u=i.slice(0,g),p=i.slice(g).match(/^\r?\n\r?\n/u)?.[0]??`

`;i=i.slice(g+p.length);let _=ic(u);_&&(_.type==="delta"&&typeof _.text=="string"?e?.(_.text):_.type==="error"?l=new Xr(_.message||"AI \u56DE\u7B54\u5931\u8D25\u3002",_.code||"AI_FAILED"):_.type==="done"?s=!0:r?.(_)),g=i.search(/\r?\n\r?\n/u)}}if(i.trim()!==""){let d=ic(i);d?.type==="delta"&&typeof d.text=="string"&&e?.(d.text),d?.type==="error"&&(l=new Xr(d.message||"AI \u56DE\u7B54\u5931\u8D25\u3002",d.code||"AI_FAILED")),d?.type==="done"&&(s=!0)}}finally{o.releaseLock?.()}if(l)throw l}async function cc(t,{signal:e}={}){let r=await Hi("/dsh-reader/import/fetch",{url:String(t||"")},{signal:e}),n=await r.blob();if(!n.size)throw new Xr("\u6765\u6E90\u8FD4\u56DE\u4E86\u7A7A\u6587\u4EF6\u3002","EMPTY",0);let o="book",a=r.headers.get("x-dsh-reader-filename");if(a)try{o=decodeURIComponent(a)}catch{o=a}return new File([n],o,{type:n.type||"application/octet-stream"})}var un=It(require("react"),1);var pc=Object.freeze([{id:"yellow",label:"\u9EC4",value:"#f5d76e"},{id:"green",label:"\u7EFF",value:"#8fd18b"},{id:"pink",label:"\u7C89",value:"#f3a6c0"},{id:"blue",label:"\u84DD",value:"#94c9f0"}]),Do=Object.freeze([{id:"thin",label:"\u7EC6",value:4},{id:"medium",label:"\u4E2D",value:9},{id:"wide",label:"\u5BBD",value:16}]),fc=Object.freeze([{id:"ink",label:"\u58A8",value:"#3f3a33"},{id:"red",label:"\u6731",value:"#c2543f"},{id:"amber",label:"\u8D6D",value:"#a9772b"},{id:"blue",label:"\u84DD",value:"#3f6f97"}]),lo=Object.freeze({highlight:"\u8367\u5149\u7B14",underline:"\u4E0B\u5212\u7EBF",note:"\u4FBF\u7B7E"}),co=Object.freeze([{id:"highlight",label:lo.highlight},{id:"underline",label:lo.underline},{id:"note",label:lo.note}]);function Wi(t){return lo[t]||"\u6807\u6CE8"}var Ia="data-anno-block",gc=".dshr-block__body";function ji(t){return t?t.ownerDocument?t.ownerDocument:t.nodeType===9?t:typeof globalThis<"u"&&globalThis.document?globalThis.document:null:null}function Fr(t,e=0){let r=typeof t=="number"?t:Number(t);return Number.isFinite(r)?Math.trunc(r):e}function jt(t,e,r){return Math.min(r,Math.max(e,t))}function Aa(t,e=5){let r=10**e;return Math.round(t*r)/r}function Ca(t){return String(t??"").replace(/\s+/gu," ").trim()}function Hu(t){if(!t||t.nodeType!==1)return!1;let e=t.tagName;if(e==="SCRIPT"||e==="STYLE"||e==="NOSCRIPT"||e==="TEXTAREA"||e==="SVG"||e==="CANVAS")return!0;let r=t.classList;return!!(r&&(r.contains("dshr-translation")||r.contains("dshr-anno-ignore"))||typeof t.hasAttribute=="function"&&t.hasAttribute("data-anno-ignore"))}function Gi(t){let e=[],r=[],n=new Map,o=0;if(!t)return{nodes:e,starts:r,positions:n,total:o,text:""};let a=s=>{for(let l=s.firstChild;l;l=l.nextSibling)if(l.nodeType===3){let d=l.nodeValue||"";n.set(l,e.length),e.push(l),r.push(o),o+=d.length}else l.nodeType===1&&!Hu(l)&&a(l)};a(t);let i="";for(let s=0;s<e.length;s+=1)i+=e[s].nodeValue||"";return{nodes:e,starts:r,positions:n,total:o,text:i}}function Uu(t,e,r){if(!t||!e)return null;let n;try{n=t.createRange();let o=e.nodeType===3?e.nodeValue?e.nodeValue.length:0:e.childNodes?e.childNodes.length:0;return n.setStart(e,jt(Fr(r),0,o)),n.collapse(!0),n}catch{return null}}function dc(t,e,r,n){if(!r)return 0;if(r.nodeType===3){let o=t.positions.get(r),a=r.nodeValue||"";if(o!==void 0)return t.starts[o]+jt(Fr(n),0,a.length)}if(r===e||e.contains(r)){let o=ji(e),a=Uu(o,r,n);if(!a)return 0;let i=o.createRange();for(let s=0;s<t.nodes.length;s+=1)try{if(i.setStart(t.nodes[s],0),i.collapse(!0),a.compareBoundaryPoints(0,i)<=0)return t.starts[s]}catch{}return t.total}try{return e.compareDocumentPosition(r)&4?t.total:0}catch{return 0}}function hc(t,e){if(!t.nodes.length)return null;let r=jt(Fr(e),0,t.total);for(let o=0;o<t.nodes.length;o+=1){let a=t.nodes[o].nodeValue?t.nodes[o].nodeValue.length:0,i=t.starts[o];if(r<i+a)return{node:t.nodes[o],offset:r-i};if(r===i+a&&a>0)return{node:t.nodes[o],offset:a}}let n=t.nodes[t.nodes.length-1];return{node:n,offset:n.nodeValue?n.nodeValue.length:0}}function Wu(t,e,r){if(!t)return null;let n=Gi(t);if(!n.nodes.length||n.total===0)return null;let o=jt(Fr(e),0,n.total),a=jt(Fr(r),0,n.total);a<o&&([o,a]=[a,o]);let i=hc(n,o),s=hc(n,a),l=ji(t);if(!l||!i||!s)return null;try{let d=l.createRange();return d.setStart(i.node,i.offset),d.setEnd(s.node,s.offset),d}catch{return null}}function mc(t){let e=[];if(!t)return e;try{let r=typeof t.getClientRects=="function"?t.getClientRects():null;if(r&&typeof r.length=="number")for(let n=0;n<r.length;n+=1){let o=r[n];o&&e.push(o)}}catch{}if(e.length===0)try{let r=typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():null;r&&(r.width||r.height)&&e.push(r)}catch{}return e}function ju(t){let e=1/0,r=1/0,n=-1/0,o=-1/0;for(let a=0;a<t.length;a+=1){let i=t[a],s=Number(i.width)||0,l=Number(i.height)||0;if(!s&&!l)continue;let d=Number(i.left)||0,f=Number(i.top)||0;e=Math.min(e,d),r=Math.min(r,f),n=Math.max(n,d+s),o=Math.max(o,f+l)}return Number.isFinite(e)?{left:e,top:r,width:n-e,height:o-r,right:n,bottom:o}:{left:0,top:0,width:0,height:0,right:0,bottom:0}}function Gu(t,e,r){let n=e,o=r;for(;n<o&&/\s/u.test(t[n]);)n+=1;for(;o>n&&/\s/u.test(t[o-1]);)o-=1;return{start:n,end:o,text:t.slice(n,o)}}function bc(t,e){if(!t||!e||!e.rangeCount)return null;let r=ji(t);if(!r)return null;let n;try{n=e.getRangeAt(0)}catch{return null}if(!n)return null;try{if(!t.contains(n.commonAncestorContainer))return null}catch{return null}let o=[],a;try{a=t.querySelectorAll(`[${Ia}]`)}catch{return null}for(let s=0;s<a.length;s+=1){let l=a[s],d=l.getAttribute(Ia);if(!d)continue;let f=l.classList&&l.classList.contains("dshr-block__body")?l:l.querySelector(gc);if(!f)continue;let g=Gi(f);if(g.total===0)continue;let u;try{u=r.createRange(),u.selectNodeContents(f)}catch{continue}let p=!1,_=!1,S=!1,v=!1;try{p=n.compareBoundaryPoints(3,u)>=0,_=n.compareBoundaryPoints(1,u)<=0,S=n.compareBoundaryPoints(0,u)<0,v=n.compareBoundaryPoints(2,u)>0}catch{continue}if(p||_)continue;let P=S?0:dc(g,f,n.startContainer,n.startOffset),A=v?g.total:dc(g,f,n.endContainer,n.endOffset),y=jt(Fr(P),0,g.total),N=jt(Fr(A),0,g.total);if(N<=y)continue;let M=Gu(g.text,y,N);M.end<=M.start||o.push({blockId:d,start:M.start,end:M.end,text:M.text})}if(o.length===0)return null;let i="";for(let s=0;s<o.length;s+=1)s>0&&(i+=`
`),i+=o[s].text;return i=i.replace(/\u00a0/gu," ").trim(),i?{text:i,rect:ju(mc(n)),ranges:o}:null}function xc(t,e){if(!t||!e)return[];let r;try{r=e.getBoundingClientRect()}catch{return[]}if(!r)return[];let n=Number(r.width)||0,o=Number(r.height)||0;if(n<=0||o<=0)return[];let a=Number(r.left)||0,i=Number(r.top)||0,s=a+n,l=i+o,d=mc(t);if(d.length===0)return[];let f=[];for(let g=0;g<d.length;g+=1){let u=d[g];if(!u)continue;let p=Number(u.width)||0,_=Number(u.height)||0;if(p<=0||_<=0)continue;let S=Number(u.left)||0,v=Number(u.top)||0,P=Math.max(S,a),A=Math.max(v,i),y=Math.min(S+p,s),N=Math.min(v+_,l);y-P<.5||N-A<.5||f.push({x:Aa(jt((P-a)/n,0,1)),y:Aa(jt((A-i)/o,0,1)),w:Aa(jt((y-P)/n,0,1)),h:Aa(jt((N-A)/o,0,1))})}return f.sort((g,u)=>g.y-u.y||g.x-u.x),f}function qu(t){let e=String(t??""),r="",n=[],o=-1;for(let a=0;a<e.length;a+=1){let i=e[a];if(/\s/u.test(i)){o<0&&r.length>0&&(o=a);continue}o>=0&&(n.push(o),r+=" ",o=-1),n.push(a),r+=i}return{text:r,map:n}}function Xu(t,e,r,n,o){let a=t.length,i=r[n];if(i===void 0)return null;let s=n+o<r.length?r[n+o]:a;return s>i?{start:i,end:s}:null}function uc(t,e){if(!t||!e)return null;let r=String(t),n=String(e).trim();if(!n)return null;let o=r.indexOf(n);if(o>=0)return{start:o,end:o+n.length};let a=qu(r),i=Ca(n);if(!i)return null;let s=a.text.indexOf(i);if(s>=0){let d=Xu(r,a.text,a.map,s,i.length);if(d)return d}let l=Math.min(i.length,48);for(let d=l;d>=12;d-=4){let f=i.slice(0,d),g=a.text.indexOf(f);if(g<0)continue;let u=a.map[g];if(u===void 0)continue;let p=Math.min(r.length,u+i.length);if(p>u)return{start:u,end:p}}return null}function Vu(t,e,r){let n=Ca(t);if(!n)return!1;let o=[],a=Ca(e);a&&o.push(a);let i=Ca(r);return i&&i!==a&&o.push(i),o.length===0?!0:o.some(s=>n===s?!0:n.length<8||s.length<8?!1:n.includes(s)||s.includes(n))}function Na(t,e,r){let n=jt(Fr(e),0,t.index.total),o=jt(Fr(r),0,t.index.total);if(o<=n)return null;let a=Wu(t.body,n,o);return a?{blockId:t.blockId,start:n,end:o,text:t.index.text.slice(n,o),range:a}:null}function Ku(t){let e=[];if(!t)return e;let r;try{r=t.querySelectorAll(`[${Ia}]`)}catch{return e}for(let n=0;n<r.length;n+=1){let o=r[n],a=o.getAttribute(Ia);if(!a)continue;let i=o.classList&&o.classList.contains("dshr-block__body")?o:o.querySelector(gc);if(!i)continue;let s=Gi(i);s.total!==0&&e.push({blockId:a,body:i,index:s})}return e}function vc(t,e){let r=[];if(!t||!e)return r;let n=Ku(t);if(n.length===0)return r;let o=new Map;for(let s=0;s<n.length;s+=1)o.has(n[s].blockId)||o.set(n[s].blockId,n[s]);let a=typeof e.quote=="string"?e.quote:"",i=Array.isArray(e.ranges)?e.ranges:[];for(let s=0;s<i.length;s+=1){let l=i[s];if(!l||typeof l!="object")continue;let d=o.get(String(l.blockId==null?"":l.blockId));if(!d)continue;let f=jt(Fr(l.start),0,d.index.total),g=jt(Fr(l.end),0,d.index.total),u=g>f;if(u){let _=d.index.text.slice(f,g);if(Vu(_,l.text,a)){let S=Na(d,f,g);S&&r.push(S);continue}}let p=uc(d.index.text,a||l.text);if(p){let _=Na(d,p.start,p.end);_&&r.push(_);continue}if(u){let _=Na(d,f,g);_&&r.push(_)}}if(r.length===0&&a){let s=a.split(/\n+/u).map(f=>f.trim()).filter(f=>f.length>=2),l=s.length>0?s:[a.trim()],d=new Set;for(let f=0;f<n.length;f+=1){let g=n[f];if(d.has(g.blockId))continue;let u=1/0,p=-1/0;for(let S=0;S<l.length;S+=1){let v=uc(g.index.text,l[S]);v&&(u=Math.min(u,v.start),p=Math.max(p,v.end))}if(!Number.isFinite(u)||p<=u)continue;d.add(g.blockId);let _=Na(g,u,p);_&&r.push(_)}}return r}var Sb=require("react"),kt=require("react/jsx-runtime");function Dn({size:t=14}){return(0,kt.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,kt.jsx)("path",{d:"M9.4 2.6 5.1 6.9l-.7 2.7 2.7-.7 4.4-4.3-2.1-2Z",stroke:"currentColor",strokeWidth:"1.35",strokeLinejoin:"round"}),(0,kt.jsx)("path",{d:"m4.4 9.6-2.1 2.1c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0l2.1-2.1",stroke:"currentColor",strokeWidth:"1.35",strokeLinecap:"round"}),(0,kt.jsx)("path",{d:"M3 13.5h7.4",stroke:"currentColor",strokeWidth:"1.35",strokeLinecap:"round",opacity:".55"})]})}function Ra({size:t=14}){return(0,kt.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,kt.jsx)("path",{d:"M4.2 3v4.6a3.8 3.8 0 0 0 7.6 0V3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,kt.jsx)("path",{d:"M3.4 13.3c2-.7 4.2-.8 9.2-.2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function xn({size:t=12}){return(0,kt.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,kt.jsx)("path",{d:"M3.5 2.7h9v6.2l-3.2 3.4H3.5z",fill:"currentColor",fillOpacity:".9",stroke:"currentColor",strokeWidth:"1",strokeLinejoin:"round"}),(0,kt.jsx)("path",{d:"M9.3 12.3V9h3.1",stroke:"var(--dshr-anno-paper, #ffffff)",strokeWidth:"1.15",strokeLinejoin:"round"}),(0,kt.jsx)("path",{d:"M5.4 5.5h5.1M5.4 7.4h3.4",stroke:"var(--dshr-anno-paper, #ffffff)",strokeWidth:"1",strokeLinecap:"round",opacity:".8"})]})}function yc({size:t=56}){return(0,kt.jsxs)("svg",{width:t,height:t,viewBox:"0 0 56 56",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,kt.jsx)("rect",{x:"8.5",y:"9",width:"33",height:"38",rx:"4",stroke:"currentColor",strokeWidth:"1.8",opacity:".55"}),(0,kt.jsx)("path",{d:"M15 18h20M15 24h20M15 30h13",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",opacity:".42"}),(0,kt.jsx)("path",{d:"M34 28.5h11.5v9.2l-4.6 5H34z",fill:"currentColor",fillOpacity:".16",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),(0,kt.jsx)("path",{d:"M40.9 42.7v-5h4.6",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),(0,kt.jsx)("path",{d:"M36.8 33.6h5.6M36.8 36.4h3.8",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",opacity:".7"})]})}function Ma({size:t=13}){return(0,kt.jsx)("svg",{width:t,height:t,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",focusable:"false",children:(0,kt.jsx)("path",{d:"m3.4 3.4 7.2 7.2M10.6 3.4 3.4 10.6",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})})}function wc(t,e,r){let n=Number(t);return Number.isFinite(n)?Math.min(r,Math.max(e,n)):e}function Pa(t){let e=Number(t);return .36+(wc(Number.isFinite(e)?e:9,4,16)-4)/12*.34}function Oa(t){return(1-wc(t,.1,.95))*.82}function La(t){let e=String(t??""),r=2166136261;for(let n=0;n<e.length;n+=1)r^=e.charCodeAt(n),r=Math.imul(r,16777619);return r>>>0}function Yu(t,e=0){let r=(Number(t)^Math.imul((Number(e)||0)+1,2654435769))>>>0;return r^=r<<13,r>>>=0,r^=r>>>17,r^=r<<5,r>>>=0,r/4294967296}function Da(t,e){let r=Math.max(4,Number(e)||4),n=f=>Yu(t,f)*2-1,o=3.7+n(1)*.5,a=3.1+n(2)*.45,i=3.7+n(3)*.45,s=3.3+n(4)*.55,l=r*.54,d=Math.max(1,r-.6);return[`M0.6 ${o.toFixed(2)}`,`C${(r*.18).toFixed(2)} ${a.toFixed(2)}`,`${(r*.34).toFixed(2)} ${a.toFixed(2)}`,`${l.toFixed(2)} ${i.toFixed(2)}`,`S${(r*.82).toFixed(2)} ${s.toFixed(2)}`,`${d.toFixed(2)} ${(s-.25).toFixed(2)}`].join(" ")}function Fa(t){if(!t)return"\u6279\u6CE8";let e=typeof t.note=="string"?t.note.trim():"";if(e)return e.length>34?`${e.slice(0,34)}\u2026`:e;let r=typeof t.quote=="string"?t.quote.trim():"";return r?r.length>34?`${r.slice(0,34)}\u2026`:r:"\u6279\u6CE8"}var Fn=require("react/jsx-runtime");function Zu(t,e){let r=Math.min(t.left+t.width,e.left+e.width)-Math.max(t.left,e.left),n=Math.min(t.top+t.height,e.top+e.height)-Math.max(t.top,e.top);if(r<=0||n<=0)return 0;let o=r*n,a=Math.min(t.width*t.height,e.width*e.height);return a>0?o/a:0}function Qu(t){let e=[];if(!t)return e;try{let n=typeof t.getClientRects=="function"?t.getClientRects():null;if(n&&typeof n.length=="number")for(let o=0;o<n.length;o+=1){let a=n[o];if(!a)continue;let i=Number(a.width)||0,s=Number(a.height)||0;i<=0||s<=0||e.push({left:Number(a.left)||0,top:Number(a.top)||0,width:i,height:s})}}catch{}if(e.length===0)try{let n=typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():null;n&&(Number(n.width)||0)>0&&(Number(n.height)||0)>0&&e.push({left:Number(n.left)||0,top:Number(n.top)||0,width:Number(n.width)||0,height:Number(n.height)||0})}catch{}if(e.length<=1)return e;let r=[];for(let n=0;n<e.length;n+=1){let o=e[n],a=!1;for(let i=0;i<r.length;i+=1)if(Zu(o,r[i])>.55){a=!0;break}a||r.push(o)}return r}function Ju(t,e){return!t||t.kind&&t.kind!=="flow"?!1:!e||t.chapterId==null?!0:t.chapterId===e}function ep(t,e){if(t===e)return!0;if(!t||!e||t.length!==e.length)return!1;for(let r=0;r<t.length;r+=1){let n=t[r],o=e[r];if(n.type!==o.type||n.key!==o.key||n.annotationId!==o.annotationId||n.x!==o.x||n.y!==o.y||n.width!==o.width||n.height!==o.height||n.color!==o.color||n.path!==o.path||n.isNote!==o.isNote||n.label!==o.label)return!1}return!0}function _c({containerRef:t,annotations:e,chapterId:r,onOpenAnnotation:n,layoutVersion:o}){let a=un.default.useRef(null),i=un.default.useRef(0),s=un.default.useRef({annotations:e,chapterId:r,onOpenAnnotation:n});s.current={annotations:e,chapterId:r,onOpenAnnotation:n};let[l,d]=un.default.useState({height:0,marks:[]}),f=un.default.useCallback(()=>{let u=a.current,p=t&&t.current?t.current:null;if(!u||!p)return;let _;try{_=u.getBoundingClientRect()}catch{return}if(!_)return;let{annotations:S,chapterId:v}=s.current,P=Array.isArray(S)?S:[],A=p.clientWidth||_&&p.getBoundingClientRect().width||0,y=0,N=null;try{if(N=p.querySelector(".dshr-content__inner"),!N){for(let L=p.firstElementChild;L;L=L.nextElementSibling)if(!(L===u||L.classList&&L.classList.contains("dshr-anno-layer"))){N=L;break}}}catch{N=null}if(N)try{let L=N.getBoundingClientRect();y=Math.max(0,L.top-_.top+L.height)}catch{y=0}let M=[];for(let L=0;L<P.length;L+=1){let I=P[L];if(!Ju(I,v))continue;let x;try{x=vc(p,I)}catch{continue}if(!Array.isArray(x)||x.length===0)continue;let O=I.style==="underline"||I.style==="note"?I.style:"highlight",D=I.color||"#f5d76e",te=La(`${I.id||""}|${I.createdAt||0}`),H=Pa(I.width),ne=I.id==null?"":String(I.id),re=O==="note"||typeof I.note=="string"&&I.note.trim().length>0,z=Fa(I),oe=null;for(let B=0;B<x.length;B+=1){let q=x[B],ae=Qu(q&&q.range);for(let F=0;F<ae.length;F+=1){let de=ae[F],ve=de.left-_.left,Ae=de.top-_.top,J=`${ne}:${B}:${F}`;if(oe={x:ve,y:Ae,width:de.width,height:de.height},O==="underline"){let ge=de.width+2;M.push({type:"underline",key:`u:${J}`,annotationId:ne,x:ve-1,y:Ae+de.height-7.2,width:ge,height:8,color:D,path:Da(te,ge),isNote:!1,label:z})}else{let ge=Math.max(3.5,de.height*H);M.push({type:"band",key:`b:${J}`,annotationId:ne,x:ve-1,y:Ae+de.height*Oa(H),width:de.width+2,height:ge,color:D,path:"",isNote:O==="note",label:z})}y=Math.max(y,Ae+de.height+8)}}if(re&&oe){let B=Math.min(Math.max(2,oe.x+oe.width+3),Math.max(2,A-21));M.push({type:"note",key:`n:${ne}`,annotationId:ne,x:B,y:Math.max(0,oe.y-1),width:19,height:19,color:D,path:"",isNote:!0,label:z})}}let E=Math.max(0,Math.ceil(y+8));d(L=>L.height===E&&ep(L.marks,M)?L:{height:E,marks:M})},[t]),g=un.default.useCallback(()=>{if(typeof window>"u"||i.current)return;let u=()=>{i.current=0,f()};i.current=typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(u):window.setTimeout(u,16)},[f]);return un.default.useEffect(()=>{let u=t&&t.current?t.current:null,p=a.current;if(!u||!p||typeof window>"u")return;let _=[];g(),_.push(window.setTimeout(g,80));let S=null;if(typeof ResizeObserver<"u"){let E=new ResizeObserver(()=>g());try{E.observe(u);let L=p.parentElement;L&&L!==u&&E.observe(L);let I=u.querySelector(".dshr-content__inner");I&&!I.contains(p)&&E.observe(I)}catch{}S=E}let v=null;if(typeof MutationObserver<"u"){v=new MutationObserver(E=>{for(let L=0;L<E.length;L+=1){let I=E[L].target;if(!p.contains(I)){g();return}}});try{v.observe(u,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["class","style","data-rendered"]})}catch{}}let P=()=>g(),A=E=>{p.contains(E.target)||g()};window.addEventListener("resize",P),u.addEventListener("load",A,!0);let y=u.contains(p);y||u.addEventListener("scroll",P,{passive:!0});let N=null,M=typeof document<"u"?document.fonts:null;if(M&&typeof M.ready=="object"&&typeof M.ready.then=="function"&&M.ready.then(()=>g()).catch(()=>{}),M&&typeof M.addEventListener=="function"){N=()=>g();try{M.addEventListener("loadingdone",N)}catch{N=null}}return()=>{for(let E=0;E<_.length;E+=1)window.clearTimeout(_[E]);if(i.current&&(typeof window.cancelAnimationFrame=="function"?window.cancelAnimationFrame(i.current):window.clearTimeout(i.current),i.current=0),S&&S.disconnect(),v&&v.disconnect(),window.removeEventListener("resize",P),u.removeEventListener("load",A,!0),y||u.removeEventListener("scroll",P),M&&N)try{M.removeEventListener("loadingdone",N)}catch{}}},[t,g]),un.default.useEffect(()=>{if(g(),typeof window>"u")return;let u=window.setTimeout(g,40);return()=>window.clearTimeout(u)},[e,r,o,g]),(0,Fn.jsx)("div",{ref:a,className:"dshr-anno-layer",style:l.height>0?{height:`${l.height}px`}:void 0,"data-anno-layer":"flow",children:l.marks.map(u=>{if(u.type==="note")return(0,Fn.jsx)("button",{type:"button",className:"dshr-anno-note-btn",style:{left:`${u.x}px`,top:`${u.y}px`,"--dshr-anno-color":u.color},"data-anno-id":u.annotationId,title:u.label?`\u67E5\u770B\u6279\u6CE8\uFF1A${u.label}`:"\u67E5\u770B\u6279\u6CE8","aria-label":u.label?`\u67E5\u770B\u6279\u6CE8\uFF1A${u.label}`:"\u67E5\u770B\u6279\u6CE8",onMouseDown:p=>p.preventDefault(),onClick:()=>{let p=s.current.onOpenAnnotation;typeof p=="function"&&p(u.annotationId)},children:(0,Fn.jsx)(xn,{size:12})},u.key);if(u.type==="underline"){let p=Math.max(2,Math.round(u.width*100)/100);return(0,Fn.jsx)("svg",{className:"dshr-anno-underline",style:{left:`${u.x}px`,top:`${u.y}px`,width:`${u.width}px`,height:`${u.height}px`,"--dshr-anno-color":u.color},viewBox:`0 0 ${p} 8`,preserveAspectRatio:"none","data-anno-id":u.annotationId,"aria-hidden":"true",focusable:"false",children:(0,Fn.jsx)("path",{d:u.path})},u.key)}return(0,Fn.jsx)("span",{className:`dshr-anno-band${u.isNote?" dshr-anno-band--note":""}`,style:{left:`${u.x}px`,top:`${u.y}px`,width:`${u.width}px`,height:`${u.height}px`,"--dshr-anno-color":u.color},"data-anno-id":u.annotationId,"aria-hidden":"true"},u.key)})})}function Fo(t){let e=t.scrollHeight-t.clientHeight;return e>0?Math.max(0,Math.min(1,t.scrollTop/e)):0}function za(t,e,r){return{chapter:t,chapters:e,scrollRatio:r,percent:(t+r)/e*100}}function kc(t,e){let r=Math.max(1,e-48-56),n=t.filter(a=>Number.isFinite(a.top)&&a.bottom>a.top).toSorted((a,i)=>a.top-i.top),o=[0];for(let a of n)for(;a.bottom>o.at(-1)+48+r+.5;){let i=o.at(-1),s=a.top-48;o.push(s>i+.5?s:i+r)}return o}function tp(t,e){let r=0,n=t.length-1;for(;r<n;){let o=Math.ceil((r+n)/2);t[o]<=e+.5?r=o:n=o-1}return r}function Tc(){let t=[0],e=0;return{get page(){return e+1},get pages(){return t.length},get top(){return t[e]},get starts(){return t},replace(r,n){t=r.length?r:[0],e=tp(t,Math.max(0,n||0))},turn(r){let n=Math.max(0,Math.min(t.length-1,e+Math.sign(r)));return n===e?!1:(e=n,!0)}}}function Sc(t,e){let r=t.getBoundingClientRect(),n=[],o=(s,l)=>{s.height<2||s.width<.1||n.push({top:s.top-r.top+t.scrollTop,bottom:s.bottom-r.top+t.scrollTop,...l})},a=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let s=a.nextNode();s;s=a.nextNode()){if(!s.nodeValue?.trim()||s.parentElement.closest('[aria-hidden="true"],script,style'))continue;let l=document.createRange();l.selectNodeContents(s);for(let d of l.getClientRects())o(d,{node:s})}for(let s of e.querySelectorAll("img,svg,hr,video,canvas"))o(s.getBoundingClientRect(),{element:s,atomic:!0});n.sort((s,l)=>s.top-l.top);let i=[];for(let s of n){let l=i.at(-1),d=l&&Math.min(l.bottom,s.bottom)-Math.max(l.top,s.top);l&&!l.atomic&&!s.atomic&&d>Math.min(l.bottom-l.top,s.bottom-s.top)*.5?l.bottom=Math.max(l.bottom,s.bottom):i.push({...s})}return i}function qi(t,e,r){let n=e+48,o=t.find(S=>S.bottom>n+.5)||t.at(-1);if(!o)return null;let a=o.element||o.node?.parentElement.closest(".dshr-block__body,.dshr-translation,.dshr-chapter__kicker")||o.node?.parentElement,i=r.getBoundingClientRect(),s=a?.getBoundingClientRect(),l=s?.height?(n-(s.top-i.top+r.scrollTop))/s.height:0;if(!o.node)return{element:a,ratio:l};let d=document.createRange(),f=1,g=o.node.length;for(;f<g;){let S=f+g>>1;d.setStart(o.node,0),d.setEnd(o.node,S);let v=d.getClientRects(),P=v[v.length-1];(P?P.top-i.top+r.scrollTop:-1/0)<o.top-1?f=S+1:g=S}let u=Math.max(0,f-1),p=u,_=document.createTreeWalker(a,NodeFilter.SHOW_TEXT);for(let S=_.nextNode();S&&S!==o.node;S=_.nextNode())p+=S.length;return{node:o.node,offset:u,textOffset:p,element:a,ratio:l}}function Ec(t,e,r){if(!t)return r;let n=e.getBoundingClientRect();if(!t.node?.isConnected&&t.element?.isConnected&&Number.isFinite(t.textOffset)){let o=t.textOffset,a=document.createTreeWalker(t.element,NodeFilter.SHOW_TEXT);for(let i=a.nextNode();i;i=a.nextNode()){if(o<i.length){t.node=i,t.offset=o;break}o-=i.length}}if(t.node?.isConnected&&e.contains(t.node)&&t.node.length){let o=document.createRange(),a=Math.min(t.offset,t.node.length-1);o.setStart(t.node,a),o.setEnd(t.node,a+1);let i=o.getBoundingClientRect();if(i.height)return i.top-n.top+e.scrollTop-48}if(t.element?.isConnected&&e.contains(t.element)){let o=t.element.getBoundingClientRect();return o.top-n.top+e.scrollTop+Math.max(0,t.ratio)*o.height-48}return r}var Le=require("react/jsx-runtime"),Xi=new Set(["heading","paragraph","list-item","quote"]),rp=6;function np(t,e){let r=t.style.scrollBehavior;t.style.scrollBehavior="auto",t.scrollTop=e,t.style.scrollBehavior=r}function op(t,e){return`${t.title||""} \xB7 ${e?.title||""}`}var ap=bt.default.memo(function({block:e}){if(e.kind==="image")return(0,Le.jsxs)("figure",{children:[e.src?(0,Le.jsx)("img",{src:e.src,alt:e.alt||"",loading:"lazy",decoding:"async"}):(0,Le.jsx)("div",{className:"dshr-translation",children:"\u56FE\u7247\u672A\u80FD\u8F7D\u5165"}),e.caption?(0,Le.jsx)("figcaption",{children:e.caption}):null]});if(e.kind==="table")return(0,Le.jsx)("div",{dangerouslySetInnerHTML:{__html:e.html||""}});if(e.kind==="code")return(0,Le.jsx)("pre",{className:"dshr-block__code",children:e.text||""});if(e.kind==="rule")return(0,Le.jsx)("hr",{});if(e.kind==="heading"){let r=`h${Math.max(1,Math.min(6,e.level||2))}`;return(0,Le.jsx)(r,{dangerouslySetInnerHTML:{__html:e.html||""}})}return(0,Le.jsx)("p",{dangerouslySetInnerHTML:{__html:e.html||""}})});function ip({state:t,onRetry:e}){return t?t.status==="loading"?(0,Le.jsx)("div",{className:"dshr-translation",children:(0,Le.jsxs)("span",{className:"dshr-translation__loading",children:[(0,Le.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u7FFB\u8BD1\u2026"]})}):t.status==="error"?(0,Le.jsxs)("div",{className:"dshr-translation is-error",children:[(0,Le.jsx)("p",{children:t.error||"\u8FD9\u6BB5\u7FFB\u8BD1\u5931\u8D25\u4E86\u3002"}),(0,Le.jsx)("button",{type:"button",className:"dshr-translation__retry",onClick:e,children:"\u91CD\u8BD5"})]}):t.zh?(0,Le.jsx)("div",{className:"dshr-translation",children:String(t.zh).split(/\n+/u).filter(Boolean).map((r,n)=>(0,Le.jsx)("p",{children:r},n))}):null:null}function Ac({book:t,chapterIndex:e,onChapterChange:r,settings:n,chapterEntry:o,onChapterEntered:a,onSelection:i,onProgress:s,annotations:l=[],onOpenAnnotation:d,focusAnnotation:f,layoutVersion:g=0}){let u=t.chapters[e],p=bt.default.useRef(null),_=bt.default.useRef(null),S=bt.default.useRef(0),v=bt.default.useRef(new Map),P=bt.default.useRef(!1),A=bt.default.useRef(null),y=bt.default.useRef(!0),N=bt.default.useMemo(()=>new Map((u?.blocks??[]).map(B=>[B.id,B])),[u]),[M,E]=bt.default.useState({}),[L,I]=bt.default.useState(!1);bt.default.useEffect(()=>{y.current=!0;let B=new AbortController;return A.current=B,()=>{y.current=!1,B.abort()}},[]);let x=bt.default.useCallback(B=>`${u?.id||"chapter"}:${B.id}`,[u?.id]),O=bt.default.useCallback((B,q)=>{y.current&&E(ae=>({...ae,[B]:{...ae[B]||{},...q}}))},[]),D=bt.default.useCallback(async()=>{if(P.current||v.current.size===0)return;P.current=!0,I(!0);let B=[...v.current.entries()].slice(0,rp);for(let[ae]of B)v.current.delete(ae);let q=op(t,u);try{let ae=await so(B.map(([F,de])=>({id:F,text:de.text})),{context:q,title:t.title,signal:A.current?.signal});for(let[F]of B)ae[F]?O(F,{status:"done",zh:ae[F],error:void 0}):O(F,{status:"error",error:"\u7FFB\u8BD1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u8FD9\u4E00\u6BB5\u3002"})}catch(ae){if(!Ln(ae))for(let[F]of B)O(F,{status:"error",error:ae?.message||"\u7FFB\u8BD1\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002"})}finally{P.current=!1,y.current&&(I(!1),v.current.size>0&&window.setTimeout(()=>{D()},120))}},[t,u,O]),te=bt.default.useCallback((B,{force:q=!1}={})=>{if(!B||!Xi.has(B.kind)||!B.text?.trim())return;let ae=x(B),F=M[ae];!q&&(F?.status==="loading"||F?.status==="done")||(O(ae,{status:"loading",error:void 0}),v.current.set(ae,{text:B.text.slice(0,4e3)}),D())},[D,x,M,O]),H=bt.default.useCallback(B=>{let q=B.slice(B.indexOf(":")+1),ae=N.get(q);ae&&te(ae,{force:!0})},[N,te]),ne=bt.default.useCallback(()=>{for(let B of u?.blocks??[])Xi.has(B.kind)&&B.text?.trim()&&te(B,{force:M[`${u.id}:${B.id}`]?.status==="error"})},[u,te,M]);bt.default.useEffect(()=>{let B=p.current;if(!B||!n.autoTranslate||typeof IntersectionObserver>"u")return;_.current?.disconnect();let q=new IntersectionObserver(ae=>{for(let F of ae){if(!F.isIntersecting)continue;let de=F.target.getAttribute("data-seg-id"),ve=N.get(de);ve&&te(ve)}},{root:B,rootMargin:"420px 0px 520px 0px",threshold:.01});for(let ae of B.querySelectorAll("[data-seg-id]"))q.observe(ae);return _.current=q,()=>q.disconnect()},[N,u?.id,te,n.autoTranslate]),bt.default.useLayoutEffect(()=>{let B=p.current;if(!B||!o||n.readingMode==="book")return;let q=o.edge==="end"?1:Math.max(0,Math.min(1,Number(o.scrollRatio)||0));np(B,Math.max(0,B.scrollHeight-B.clientHeight)*q),a?.(o,Fo(B))},[o,n.readingMode,a]);let re=bt.default.useCallback(B=>{let q=p.current;if(!q)return;let ae=bc(q,window.getSelection());if(!ae){i?.(null);return}i?.({...ae,source:"flow",context:u?.blocks.map(F=>F.text||"").join(`
`).slice(0,2400)||""})},[u,i]);bt.default.useEffect(()=>{if(!f?.id)return;let B=p.current,q=B?.dataset.readerNavigation||"0",ae=window.setTimeout(()=>{if(!B||B!==p.current||(B.dataset.readerNavigation||"0")!==q)return;let F=f.blockId?B.querySelector(`[data-anno-block="${CSS.escape(f.blockId)}"]`):null;if(!F)return;let de=new CustomEvent("dshr-flow-navigate",{cancelable:!0,detail:{element:F}});B.dispatchEvent(de)&&F.scrollIntoView({block:"center",behavior:"smooth"})},120);return()=>window.clearTimeout(ae)},[t,e,f]);let z=bt.default.useCallback(()=>{let B=p.current;if(!B)return;let q=Date.now();q-S.current<600||(S.current=q,s?.(za(e,t.chapters.length,Fo(B))))},[t.chapters.length,e,s]),oe=bt.default.useCallback(B=>{let q=B.target.closest?.("a");if(!q)return;let ae=q.getAttribute("data-chapter");if(ae){B.preventDefault();let de=Number(ae);Number.isInteger(de)&&de>=0&&de<t.chapters.length&&r(de);return}let F=q.getAttribute("href")||"";F&&!F.startsWith("#")&&(B.preventDefault(),window.open(F,"_blank","noopener,noreferrer"))},[t.chapters.length,r]);return u?(0,Le.jsxs)("div",{className:"dshr-content",ref:p,onScroll:z,onMouseUp:re,onKeyUp:re,onClick:oe,children:[(0,Le.jsxs)("div",{className:"dshr-content__inner",children:[(0,Le.jsxs)("article",{className:"dshr-chapter",children:[(0,Le.jsxs)("div",{className:"dshr-chapter__kicker",children:["\u7B2C ",e+1," / ",t.chapters.length," \u7AE0",n.autoTranslate?" \xB7 \u5B9E\u65F6\u7FFB\u8BD1\u5DF2\u5F00\u542F":""]}),u.blocks.map(B=>{let q=x(B),ae=M[q],F=Xi.has(B.kind)&&B.text?.trim();return(0,Le.jsxs)("div",{className:`dshr-block dshr-block--${B.kind}`,"data-kind":B.kind,"data-seg-id":F?B.id:void 0,"data-anno-block":B.id,children:[(0,Le.jsx)("div",{className:"dshr-block__body",children:(0,Le.jsx)(ap,{block:B})}),F?(0,Le.jsx)(ip,{state:ae,onRetry:()=>H(q)}):null]},B.id)})]}),(0,Le.jsxs)("div",{className:"dshr-chapter__nav",children:[(0,Le.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e<=0,onClick:()=>r(e-1),children:[(0,Le.jsx)(oo,{size:15})," ",e>0?t.chapters[e-1].title:"\u5DF2\u662F\u7B2C\u4E00\u7AE0"]}),(0,Le.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:ne,disabled:L,title:"\u7FFB\u8BD1\u672C\u7AE0\u6240\u6709\u6BB5\u843D",children:[L?(0,Le.jsx)("span",{className:"dshr-spinner"}):(0,Le.jsx)(no,{size:15})," \u7FFB\u8BD1\u672C\u7AE0"]}),(0,Le.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e>=t.chapters.length-1,onClick:()=>r(e+1),children:[e<t.chapters.length-1?t.chapters[e+1].title:"\u5DF2\u662F\u6700\u540E\u4E00\u7AE0"," ",(0,Le.jsx)(ao,{size:15})]})]})]}),(0,Le.jsx)(_c,{containerRef:p,annotations:l,chapterId:u.id,onOpenAnnotation:d,layoutVersion:g})]}):(0,Le.jsxs)("div",{className:"dshr-error-panel",children:[(0,Le.jsx)("h3",{children:"\u8FD9\u4E00\u7AE0\u4E0D\u5B58\u5728"}),(0,Le.jsx)("p",{children:"\u6587\u6863\u76EE\u5F55\u53EF\u80FD\u4E0D\u5B8C\u6574\uFF0C\u8BF7\u5C1D\u8BD5\u91CD\u65B0\u5BFC\u5165\u3002"})]})}var Uo=It(require("react"),1);var Vi="6.5.438-reader4",Bn="/dsh-reader-assets/",Nc;function sp(){return`${Bn}pdf.bundle.js?v=${Vi}`}function lp(){return Nc||=import(sp()).then(t=>{if(!t?.getDocument||!t.GlobalWorkerOptions)throw new Error("PDF \u5F15\u64CE\u8D44\u6E90\u683C\u5F0F\u4E0D\u6B63\u786E");return t.GlobalWorkerOptions.workerSrc=`${Bn}pdf.worker.mjs?v=${Vi}`,t.GlobalWorkerOptions.rendererSrc=`${Bn}pdf.renderer.mjs?v=${Vi}`,t}).catch(t=>{throw Nc=null,t})}var Vr=()=>new DOMException("PDF operation cancelled","AbortError"),zn=t=>{if(t?.aborted)throw Vr()};async function cp(t,e,{signal:r,onRead:n,onError:o}={}){zn(r);let a=256*1024,i=new Uint8Array(await e.slice(0,Math.min(a,e.size)).arrayBuffer());zn(r);let s={bytes:i.length,reads:1,total:e.size};class l extends t.PDFDataRangeTransport{constructor(){super(e.size,i,!0)}aborted=!1;queue=[];active=0;requestDataRange(f,g){this.aborted||r?.aborted||(this.queue.push({begin:f,end:g}),this.pump())}pump(){for(;!this.aborted&&this.active<2&&this.queue.length;){let{begin:f,end:g}=this.queue.shift();this.active++,e.slice(f,g).arrayBuffer().then(u=>{if(this.aborted||r?.aborted)return;let p=new Uint8Array(u);if(p.length!==g-f)throw new Error("PDF \u5206\u6BB5\u8BFB\u53D6\u4E0D\u5B8C\u6574");s.bytes+=p.length,s.reads++,n?.({...s}),this.onDataRange(f,p)}).catch(u=>{this.aborted||r?.aborted||(this.abort(),o?.(u))}).finally(()=>{this.active--,this.pump()})}}abort(){this.aborted=!0,this.queue.length=0}}return n?.({...s}),{range:new l,stats:s,rangeChunkSize:a,disableStream:!0,disableAutoFetch:!0}}async function Ba(t,{signal:e,onProgress:r,onRead:n,onError:o}={}){zn(e);let a=await lp();zn(e);let i,s,l,d,f=!1,g,u,p=new Promise((v,P)=>{u=P});p.catch(()=>{});let _=()=>g||(f=!0,clearTimeout(d),s?.abort(),e?.removeEventListener("abort",S),g=Promise.resolve().then(()=>i?.destroy()).catch(()=>{}).finally(()=>l?.destroy()),g),S=()=>{u(Vr()),_()};e?.addEventListener("abort",S,{once:!0});try{if(l=new a.PDFWorker({verbosity:0}),await Promise.race([l.promise,p,new Promise((A,y)=>{d=setTimeout(()=>y(new Error("PDF \u540E\u53F0\u7EBF\u7A0B\u542F\u52A8\u8D85\u65F6\uFF0C\u8BF7\u68C0\u67E5 Host \u7684 Worker \u8D44\u6E90\u4E0E\u5B89\u5168\u7B56\u7565\u3002")),1e4)})]),clearTimeout(d),zn(e),typeof Worker!="function"||!(l.port instanceof Worker))throw new Error("PDF \u540E\u53F0\u7EBF\u7A0B\u4E0D\u53EF\u7528\uFF0C\u8BF7\u68C0\u67E5 /dsh-reader-assets/pdf.worker.mjs \u548C Host \u7684 Worker \u5B89\u5168\u7B56\u7565\u3002");let v;if(typeof Blob<"u"&&t instanceof Blob?(v=await cp(a,t,{signal:e,onRead:n,onError:A=>{u(A),o?.(A),_()}}),s=v.range):v={data:(t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)).slice()},zn(e),f)throw Vr();i=a.getDocument({...v,worker:l,cMapUrl:`${Bn}cmaps/`,cMapPacked:!0,standardFontDataUrl:`${Bn}standard_fonts/`,wasmUrl:`${Bn}wasm/`,iccUrl:`${Bn}iccs/`,isEvalSupported:!1,disableWorkerRendering:!1,verbosity:0}),i.onProgress=r;let P=await Promise.race([i.promise,p]);if(zn(e),f)throw Vr();return{engine:a,pdf:P,close:_,source:v}}catch(v){throw await _(),v}}var $a=class{constructor(e=48*1024*1024){this.limit=e,this.bytes=0,this.entries=new Map}get(e){let r=this.entries.get(e);return r&&(this.entries.delete(e),this.entries.set(e,r)),r}set(e,r){this.delete(e);let n=r.bitmap.width*r.bitmap.height*4;if(n>this.limit){r.bitmap.close();return}for(this.entries.set(e,{...r,bytes:n}),this.bytes+=n;this.bytes>this.limit;)this.delete(this.entries.keys().next().value)}delete(e){let r=this.entries.get(e);r&&(this.bytes-=r.bytes,r.bitmap.close(),this.entries.delete(e))}clear(){for(let e of this.entries.keys())this.delete(e)}},Ha=class{constructor(e,r,n=20){this.count=e,this.defaultHeight=r,this.gap=n,this.heights=new Map,this.tree=new Float64Array(e+1),this.paddingTop=18}setHeight(e,r){let n=r-(this.heights.get(e)??this.defaultHeight);this.heights.set(e,r);for(let o=e;o<=this.count;o+=o&-o)this.tree[o]+=n}top(e){let r=(e-1)*(this.defaultHeight+this.gap);for(let n=e-1;n>0;n-=n&-n)r+=this.tree[n];return this.paddingTop+r}height(e){return this.heights.get(e)??this.defaultHeight}pageAt(e){let r=1,n=this.count;for(;r<n;){let o=Math.ceil((r+n)/2);this.top(o)<=e?r=o:n=o-1}return r}entryAt(e){let r=this.pageAt(e);return{page:r,top:this.top(r),height:this.height(r)}}};var dp=/[\u1100-\u11FF\u2E80-\u2EFF\u3000-\u303F\u3040-\u30FF\u3100-\u312F\u3130-\u318F\u3400-\u4DBF\u4E00-\u9FFF\uA960-\uA97F\uAC00-\uD7AF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF]/,Ic=/[.。！？!?；;…]$/,hp="0123456789+\u2212-",Cc="\u2070\xB9\xB2\xB3\u2074\u2075\u2076\u2077\u2078\u2079\u207A\u207B\u207B";var up=/[\u0000-\u0008\u000b\u000c\u000e-\u001f\ufffd]/u;function Bo(t){return!!t&&dp.test(t)}function pp(t){return String(t).replace(/\u0000/g,"").replace(/[\t\u00a0\u2000-\u200a\u202f\u205f\u3000]/g," ").replace(/\s+/g," ")}function Ua(t){return typeof t=="number"&&Number.isFinite(t)?t:null}function zo(t){let e=t&&t.transform;if(!Array.isArray(e)||e.length<6)return null;let r=Ua(e[4]),n=Ua(e[5]);if(r===null||n===null)return null;let o=Ua(t.width),a=Ua(t.height);return{x:r,y:n,width:o===null?null:Math.abs(o),height:a===null||a<=0?null:a}}function fp(t,e){let r=0;for(let n of t)r+=Bo(n)?1:.5;return r*(e||10)}function gp(t){return{text:"",startX:t?t.x:0,endX:t?t.x:0,y:t?t.y:0,height:t&&t.height?t.height:0,hasGeometry:!!t}}function mp(t,e,r){let n=pp(e);if(!n)return;if(r?.height&&t.hasGeometry&&t.height&&/^[+−-]?\d*$/.test(n)){let a=t.text.codePointAt(t.text.length-2),i=a>=119808&&a<=120779,s=/^[0-9]+$/.test(n)&&t.text&&Cc.includes(t.text.at(-1)),l=(r.y-t.y)/t.height,d=(r.x-t.endX)/t.height;(i||s)&&r.height<=t.height*.85&&l>=.18&&l<=.58&&d>=-.2&&d<=.18&&(n=[...n].map(f=>Cc[hp.indexOf(f)]).join(""))}let o="";if(t.text){let a=t.text[t.text.length-1],i=n[0];if(a===" "||i===" "||t.text.endsWith(" "))o="";else if(Bo(a)||Bo(i))o="";else if(r&&t.hasGeometry){let s=r.x-t.endX,l=Math.max(t.height||0,r.height||0,1);o=s>l*.18?" ":""}}if(t.text=(t.text+o+n).replace(/^ +/,""),r&&t.hasGeometry){let a=r.width===null?fp(n,r.height||t.height):r.width;t.endX=Math.max(t.endX,r.x+a),t.startX=Math.min(t.startX,r.x),r.height&&(t.height=Math.max(t.height,r.height))}}function bp(t,e,r){if(!t||r)return!0;if(!e||!t.hasGeometry)return!1;let n=Math.max(t.height||0,e.height||0,1);return Math.abs(e.y-t.y)>n*.58||e.x<t.endX-n*2&&t.endX-t.startX>n}function xp(t,e){let r=t.lastLine;if(!r)return!1;let n=r.height||10,o=e.height||n,a=Math.max(n,o,1),i=r.y-e.y;if(i<-a*1.2||i>a*1.68)return!0;let s=o/n;return!!(s>1.18||s<.84||e.startX-t.leftX>a*1.25||Ic.test(r.text)&&i>a*1.35&&r.endX<t.rightX-a*2)}function vp(t){let e="";for(let r of t){let n=r.text.trim();if(!n)continue;if(!e){e=n;continue}let o=e[e.length-1],a=n[0];o==="-"||Bo(o)||Bo(a)?e+=n:e+=" "+n}return e}function yp(t){if(t.length<=1400)return[t];let e=[],r=t;for(;r.length>1400;){let n=Math.floor(770.0000000000001),o=Math.min(r.length,1400),a=-1;for(let s=o;s>n;s-=1)if(Ic.test(r[s-1])||r[s-1]===`
`){a=s;break}a<=0&&(a=r.lastIndexOf(" ",o),a<n&&(a=o));let i=r.slice(0,a).trim();i&&e.push(i),r=r.slice(a).trim()}return r&&e.push(r),e}function Rc(t,{metadata:e=!1}={}){let r=[],n=null,o=!1;if(Array.isArray(t))for(let[l,d]of t.entries()){if(!d||typeof d.str!="string")continue;if(!d.str.trim()){d.hasEOL&&(o=!0);continue}let f=zo(d);bp(n,f,o)&&(n=gp(f),n.itemIndices=[],r.push(n)),mp(n,d.str,f),n.itemIndices.push(d.__pdfItemIndex??l),o=!!d.hasEOL}let a=[],i=null;for(let l of r)l.text.trim()&&(!i||xp(i,l)?(i={lines:[l],lastLine:l,leftX:l.startX,rightX:l.endX},a.push(i)):(i.lines.push(l),i.lastLine=l,i.leftX=Math.min(i.leftX,l.startX),i.rightX=Math.max(i.rightX,l.endX)));let s=[];for(let l of a){let d=vp(l.lines);for(let f of yp(d)){let g=f.trim();g&&s.push({src:g,...e?{itemIndices:l.lines.flatMap(u=>u.itemIndices)}:{}})}}return{text:s.map(l=>l.src).join(`

`),segments:s}}function wp(t,e){let r=(t||[]).filter(u=>typeof u?.str=="string").map((u,p)=>({...u,__pdfItemIndex:p})),n=0;for(let u=0;u<(t||[]).length;u+=1)typeof t[u]?.str=="string"&&(r[n++].__pdfItemIndex=u);if(!e)return r;let o=r.filter(u=>u.str.trim().length>15&&u.width>e*.12),a=o.filter(u=>u.transform?.[4]<e*.3&&u.transform[4]+u.width<e*.5),i=o.filter(u=>u.transform?.[4]>=e*.49&&u.transform[4]<e*.66);if(a.length<4||i.length<4)return r;let s=r.filter(u=>u.str.trim()&&u.transform?.[4]<e*.48&&u.transform[4]+u.width>e*.52),d=i.filter(u=>{let p=u.transform[5],_=Math.max(2,(u.height||10)*.55);return a.some(S=>Math.abs(S.transform[5]-p)<_)&&!s.some(S=>Math.abs(S.transform[5]-p)<_)}).map(u=>u.transform[4]).sort((u,p)=>u-p);if(!d.some((u,p)=>d[p+3]-u<e*.02))return r;let f=[...new Set(o.filter(u=>u.transform?.[4]<e*.4&&u.transform[4]+u.width>e*.6).map(u=>Math.round(u.transform[5])))].sort((u,p)=>p-u),g=u=>{let p=u.transform?.[5]||0,_=f.filter(v=>v>p+3).length*2,S=f.some(v=>Math.abs(v-p)<=3);return[_+(S?1:0),S?0:u.transform?.[4]>=e*.48?2:1]};return r.sort((u,p)=>{let _=g(u),S=g(p);for(let v=0;v<_.length;v+=1)if(_[v]!==S[v])return _[v]-S[v];return u.__pdfItemIndex-p.__pdfItemIndex})}function _p(t){for(let e=1;e+1<t.length;e++){let r=t[e];if(r.str!=="\u221A")continue;let n=t[e-1],o=t[e+1],a=t[e+2];if(n.str!=="1"||!/^[A-Za-z]$/u.test(o.str))continue;let i=zo(n),s=zo(r),l=zo(o);if(!i?.height||!s?.width||!l?.height||!l.width||!i.width)continue;let d=i.x+i.width/2,f=(i.y-l.y)/l.height;if(s.y>=i.y||s.y<=l.y||f<.8||f>1.8||d<s.x||d>l.x+l.width||Math.abs(l.x-s.x-s.width)>l.height*.25||(r.str="/\u221A",!a||!/^[A-Za-z0-9]$/u.test(a.str)))continue;let g=zo(a);g?.height&&g.height<=l.height*.85&&g.y<l.y-l.height*.1&&g.y>l.y-l.height*.55&&Math.abs(g.x-l.x-l.width)<=l.height*.18&&(a.str="_"+a.str)}}function Ki(t,e,r){let n=wp(t,r);_p(n);let o=Rc(n,{metadata:!0});return{text:o.text,segments:o.segments.map((a,i)=>{let s=a.itemIndices.map(u=>t[u]?.str?.trim()||""),l=(a.src.match(/(?:\b[Oo]|[𝑂𝒪ΩΘ])\s*\((?:[^()\n]|\([^()\n]{1,40}\)){1,120}\)/gu)||[]).filter(u=>/[\u{1d400}-\u{1d7ff}⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻+×/]|\(\s*[A-Z]\s*\)/u.test(u)),d=a.src.match(/(?<![\p{L}\p{N}.])\d+(?:[.,]\d+)?(?:\s*[-–—]\s*\d+(?:[.,]\d+)?)?\s*×(?!\s*\d)/gu)||[],f=a.src.match(/\b1\/√[A-Za-z](?:_[A-Za-z0-9])?(?![\p{L}\p{N}_])/gu)||[],g=s.filter(u=>/[∑∫√≈≠≤≥∂∞]/u.test(u)&&!/[A-Za-z]{4}|[\u3400-\u9fff]/u.test(u));return{...a,id:`p${e}-s${i}`,protectedTokens:[...new Set([...l,...d,...f,...g])],...s.some(u=>up.test(u))?{sourceNeedsReview:!0}:{}}})}}var Mc=String.raw`
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
`;var Pc=String.raw`
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
`;var $o=It(require("react"),1);var Oc="reader-a-2";function $n(t){return String(t||"").split(/\r?\n/u).map(e=>e.trim()).filter(Boolean).join(`
`).slice(0,4e3)}function kp(t,e=[]){let r=[...new Set([...e,...t.match(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]|\[\d+(?:\s*[,–—-]\s*\d+)*\]|https?:\/\/[^\s]+|\b10\.\d{4,9}\/[^\s]+/gu)||[]])].filter(a=>a&&t.includes(a)).sort((a,i)=>i.length-a.length),n=[],o=t;for(let a of r){let i=`\u27E6KEEP_${n.length}\u27E7`,s=o.split(a);s.length!==1&&(o=s.join(i),n.push({placeholder:i,token:a,count:s.length-1}))}return{text:o,restore(a){let i=String(a||"");for(let{placeholder:s,token:l,count:d}of n){let f=i.split(s);if(f.length-1!==d)throw new Error("\u8BD1\u6587\u9057\u6F0F\u6216\u91CD\u590D\u4E86\u516C\u5F0F\u6216\u5F15\u7528\u6807\u8BB0\uFF0C\u8BF7\u91CD\u8BD5\u672C\u6BB5\u3002");i=f.join(l)}if(/⟦KEEP_\d+⟧/u.test(i))throw new Error("\u8BD1\u6587\u5305\u542B\u65E0\u6CD5\u5BF9\u5E94\u7684\u516C\u5F0F\u6807\u8BB0\uFF0C\u8BF7\u91CD\u8BD5\u672C\u6BB5\u3002");return i}}}async function Tp(t,e){if(!globalThis.crypto?.subtle)return null;let r=new TextEncoder().encode(JSON.stringify([Oc,t.documentId,e,"zh-CN",t.model?.provider,t.model?.model,t.model?.promptVersion,$n(t.glossary)])),n=await crypto.subtle.digest("SHA-256",r);return`${t.documentId}:${Array.from(new Uint8Array(n),o=>o.toString(16).padStart(2,"0")).join("")}`}var Wa=class{constructor({translate:e,cache:r,onChange:n=()=>{},onModelChanged:o=()=>{},prefetchDelay:a=700,requestTimeout:i=12e4}){this.translate=e,this.cache=r,this.onChange=n,this.onModelChanged=o,this.prefetchDelay=a,this.requestTimeout=i,this.sources=new Map,this.entries=new Map,this.jobs=new Map,this.preparing=new Map,this.epoch=0,this.sequence=0,this.activePage=1,this.visibleIds=new Set,this.config={},this.disposed=!1}configure(e){if(this.disposed)return;let r={...e,glossary:$n(e.glossary)},n=JSON.stringify([r.documentId,r.model,r.glossary,Oc]),o=n!==this.namespace;if(o){let a=this.config.documentId;this.epoch+=1,this.abortJobs(),a&&a!==r.documentId&&this.sources.clear(),this.entries.clear(),this.preparing.clear(),this.namespace=n,this.cacheIssue=""}if(this.config=r,(!r.enabled||!r.canTranslate)&&this.abortJobs(),r.prefetch===!1)for(let a of[...this.jobs.values()])a.page!==this.activePage&&this.abortJob(a);if(o)for(let[a,i]of this.sources)this.registerPage(a,i);this.emit(),this.pump()}setFocus(e,r=[]){if(!this.disposed){if(e!==this.activePage){this.activePage=e,this.prefetchAfter=Date.now()+this.prefetchDelay,clearTimeout(this.timer),this.timer=null;for(let n of[...this.jobs.values()])n.page!==e&&this.abortJob(n);for(let n of this.sources.keys())if(Math.abs(n-e)>3){this.sources.delete(n);for(let[o,a]of this.entries)a.page===n&&this.entries.delete(o)}}this.visibleIds=new Set(r),this.emit(),this.pump()}}registerPage(e,r){if(this.disposed)return;this.sources.set(e,r);let n=[];for(let[o,a]of(r.segments||[]).entries()){let i=a.id||`p${e}-s${o}`,s=`${e}:${i}`,l=this.entries.get(s);if(l?.src===a.src&&l.sourceNeedsReview===a.sourceNeedsReview)continue;let d={...a,id:i,uid:s,index:o,page:e,status:"checking",zh:"",cached:!1};this.entries.set(s,d),a.sourceNeedsReview?d.status="source-review":n.push(d)}if(n.length){let o=Symbol(),a=this.epoch;this.preparing.set(e,o),Promise.all(n.map(i=>this.prepare(i,a))).finally(()=>{this.preparing.get(e)===o&&(this.preparing.delete(e),this.pump())})}this.emit()}fresh(e,r){return!this.disposed&&r===this.epoch&&this.entries.get(e.uid)===e}async prepare(e,r){try{let n=e.src.replace(/\s/gu,"");if(n&&(n.match(/[\u3400-\u9fff]/gu)||[]).length/n.length>=.55){e.zh=e.src,e.status="done",e.passthrough=!0,this.emit();return}if(e.key=await Tp(this.config,e.src),!this.fresh(e,r))return;let o=e.key&&await this.cache?.get(e.key);if(!this.fresh(e,r))return;typeof o?.zh=="string"&&o.zh.trim()?(e.zh=o.zh,e.cached=!0,e.status="done"):e.status="queued"}catch{if(!this.fresh(e,r))return;e.status="queued",this.cacheIssue="\u672C\u5730\u7F13\u5B58\u6682\u4E0D\u53EF\u7528\uFF0C\u672C\u6B21\u8BD1\u6587\u4ECD\u53EF\u9605\u8BFB\u3002"}this.emit(),this.pump()}abortJob(e){clearTimeout(e.timeout),e.controller.abort(),this.jobs.delete(e.id);for(let r of e.entries)this.entries.get(r.uid)===r&&r.job===e.id&&(r.status="queued")}abortJobs(){clearTimeout(this.timer),this.timer=null;for(let e of[...this.jobs.values()])this.abortJob(e)}pump(){if(!(this.disposed||!this.config.enabled||!this.config.canTranslate||!this.config.documentId))for(;this.jobs.size<2;){let e=[...this.entries.values()].filter(d=>d.page===this.activePage),r=e.some(d=>d.status==="queued"||d.status==="checking"||d.status==="loading"),n=[...this.entries.values()].filter(d=>d.status==="queued"&&!this.preparing.has(d.page)&&(d.page===this.activePage||this.config.prefetch!==!1&&!r&&d.page===this.activePage+1)).sort((d,f)=>d.page-this.activePage-(f.page-this.activePage)||Number(this.visibleIds.has(f.id))-Number(this.visibleIds.has(d.id))||d.index-f.index);if(!n.length)return;let o=n[0];if(o.page!==this.activePage&&Date.now()<(this.prefetchAfter||0)){this.timer||(this.timer=setTimeout(()=>{this.timer=null,this.pump()},this.prefetchAfter-Date.now()));return}let a=[],i=0,s=e.some(d=>d.status==="done")?3:1;for(let d of n){if(d.page!==o.page||a.length>=s||i+d.src.length>3e3&&a.length)break;a.push(d),i+=d.src.length}let l={id:++this.sequence,epoch:this.epoch,controller:new AbortController,page:o.page,entries:a,config:this.config};this.jobs.set(l.id,l);for(let d of a)d.status="loading",d.job=l.id,d.error="";l.timeout=setTimeout(()=>{if(this.jobs.get(l.id)===l){this.abortJob(l);for(let d of a)this.fresh(d,l.epoch)&&(d.status="error",d.error="\u672C\u6BB5\u7FFB\u8BD1\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5\u6216\u7A0D\u540E\u7EE7\u7EED\u3002");this.emit(),this.pump()}},this.requestTimeout),this.emit(),this.run(l)}}async run(e){let r=n=>!e.controller.signal.aborted&&this.fresh(n,e.epoch)&&n.job===e.id;try{let n=this.sources.get(e.page)?.segments||[],o=e.entries.map(d=>kp(d.src,d.protectedTokens)),a=e.entries[0].index,i=n.slice(Math.max(0,a-1),a+e.entries.length+1);a===0&&i.unshift(this.sources.get(e.page-1)?.segments?.at(-1)),a+e.entries.length>=n.length&&i.push(this.sources.get(e.page+1)?.segments?.[0]);let s=i.filter(d=>d&&!d.sourceNeedsReview).map(d=>d.src).join(`
`).slice(0,1200),l=await this.translate(e.entries.map((d,f)=>({id:d.id,text:o[f].text})),{title:e.config.title,context:s,glossary:e.config.glossary,expectedModel:e.config.model,signal:e.controller.signal,includeMetadata:!0});if(l.model&&(l.model.provider!==e.config.model?.provider||l.model.model!==e.config.model?.model)||l.promptVersion&&l.promptVersion!==e.config.model?.promptVersion){let d=new Error("\u9ED8\u8BA4\u6A21\u578B\u5DF2\u53D8\u5316\uFF0C\u8BF7\u5237\u65B0\u7FFB\u8BD1\u670D\u52A1\u3002");throw d.code="MODEL_CHANGED",d}for(let[d,f]of e.entries.entries())if(r(f)){try{let g=l.translations?.[f.id];if(!g?.trim())throw new Error("\u672C\u6BB5\u6CA1\u6709\u8FD4\u56DE\u8BD1\u6587\uFF0C\u8BF7\u91CD\u8BD5\u3002");f.zh=o[d].restore(g),f.status="done",f.cached=!1,f.key&&Promise.resolve(this.cache?.put({key:f.key,bookId:e.config.documentId,zh:f.zh})).catch(()=>{r(f)&&(this.cacheIssue="\u8BD1\u6587\u5DF2\u5B8C\u6210\uFF0C\u4F46\u672C\u5730\u7F13\u5B58\u672A\u80FD\u4FDD\u5B58\u3002",this.emit())})}catch(g){f.status="error",f.error=g.message}this.emit()}}catch(n){for(let o of e.entries)r(o)&&(o.status="error",o.error=n.message||"\u672C\u6BB5\u7FFB\u8BD1\u5931\u8D25\u3002");!e.controller.signal.aborted&&e.epoch===this.epoch&&n.code==="MODEL_CHANGED"&&this.onModelChanged()}finally{clearTimeout(e.timeout),this.jobs.delete(e.id),this.disposed||(this.emit(),this.pump())}}retry(e,r){if(e===this.activePage)for(let n of[...this.jobs.values()])n.page!==e&&this.abortJob(n);for(let n of this.entries.values())if(n.page===e&&(r?n.id===r:n.status==="error")){if(n.status==="loading"||n.status==="checking"||n.sourceNeedsReview)continue;n.status="queued",n.error="",n.cached=!1}this.emit(),this.pump()}emit(){if(this.disposed)return;let e={};for(let r of this.entries.values())(e[r.page]||=[]).push({...r});for(let r of Object.values(e))r.sort((n,o)=>n.index-o.index);this.onChange({pages:e,cacheIssue:this.cacheIssue||""})}dispose(){this.disposed=!0,this.abortJobs(),this.sources.clear(),this.entries.clear()}};var Se=require("react/jsx-runtime");function Lc({page:t,source:e,rows:r=[],activeId:n,originRef:o,translation:a,onActivate:i,onClose:s}){let l=$o.default.useRef(null),{preferences:d,updatePreferences:f,paused:g,setPaused:u,modelError:p,refreshModel:_,cacheIssue:S,retry:v}=a,[P,A]=$o.default.useState(d.glossary||"");$o.default.useEffect(()=>A(d.glossary||""),[d.glossary]);let y=r.filter(I=>I.status==="done").length,N=r.filter(I=>I.status==="error").length,M=r.filter(I=>I.cached).length,E=r.map(I=>I.status).join(",");$o.default.useEffect(()=>{if(!d.linked||o.current!=="source")return;let I=l.current,x=[...I?.querySelectorAll("[data-translation-segment]")||[]].find(te=>te.dataset.translationSegment===n);if(!I||!x)return;let O=I.getBoundingClientRect(),D=x.getBoundingClientRect();(D.top<O.top+8||D.bottom>O.bottom-8)&&(I.scrollTop+=D.top-O.top-12)},[t,n,E,d.linked,d.fontSize]);let L=(I,x=!1)=>i(I,{origin:"translation",reveal:x});return(0,Se.jsxs)("aside",{className:"dshr-pdf-translation-panel","aria-label":"PDF \u4E2D\u6587\u5BF9\u7167",style:{"--dshr-translation-font-size":`${d.fontSize||16}px`},children:[(0,Se.jsxs)("header",{className:"dshr-pdf-translation-header",children:[(0,Se.jsxs)("div",{children:[(0,Se.jsx)("strong",{children:"\u4E2D\u6587\u5BF9\u7167"}),(0,Se.jsxs)("span",{children:["\u7B2C ",t," \u9875 \xB7 ",y,"/",r.length," \u6BB5",M?` \xB7 \u7F13\u5B58 ${M} \u6BB5`:""]})]}),(0,Se.jsx)("button",{type:"button","aria-label":"\u5173\u95ED\u8BD1\u6587\u4FA7\u680F",title:"\u5173\u95ED\u8BD1\u6587\u4FA7\u680F",onClick:s,children:"\xD7"})]}),(0,Se.jsxs)("div",{className:"dshr-pdf-translation-controls",children:[(0,Se.jsx)("button",{type:"button",onClick:()=>u(!g),children:g?"\u7EE7\u7EED\u7FFB\u8BD1":"\u6682\u505C\u7FFB\u8BD1"}),(0,Se.jsxs)("label",{children:[(0,Se.jsx)("input",{type:"checkbox",checked:d.linked!==!1,onChange:I=>f({linked:I.target.checked})}),"\u6BB5\u843D\u8054\u52A8"]}),(0,Se.jsx)("button",{type:"button","aria-label":"\u7F29\u5C0F\u8BD1\u6587\u5B57\u53F7",disabled:d.fontSize<=12,onClick:()=>f({fontSize:Math.max(12,d.fontSize-1)}),children:"A\u2212"}),(0,Se.jsx)("span",{className:"dshr-pdf-translation-font",children:d.fontSize||16}),(0,Se.jsx)("button",{type:"button","aria-label":"\u653E\u5927\u8BD1\u6587\u5B57\u53F7",disabled:d.fontSize>=24,onClick:()=>f({fontSize:Math.min(24,d.fontSize+1)}),children:"A\uFF0B"})]}),(0,Se.jsxs)("div",{className:"dshr-pdf-translation-options",children:[(0,Se.jsxs)("label",{children:[(0,Se.jsx)("input",{type:"checkbox",checked:!!d.showSource,onChange:I=>f({showSource:I.target.checked})}),"\u663E\u793A\u539F\u6587"]}),(0,Se.jsxs)("label",{children:[(0,Se.jsx)("input",{type:"checkbox",checked:d.prefetch!==!1,onChange:I=>f({prefetch:I.target.checked})}),"\u9884\u8BD1\u4E0B\u4E00\u9875"]})]}),(0,Se.jsxs)("details",{className:"dshr-pdf-glossary",children:[(0,Se.jsxs)("summary",{children:["\u6587\u6863\u672F\u8BED\u8868",d.glossary?" \xB7 \u5DF2\u542F\u7528":""]}),(0,Se.jsxs)("label",{children:["\u6BCF\u884C\u586B\u5199\u201C\u539F\u8BCD = \u4E2D\u6587\u8BD1\u6CD5\u201D",(0,Se.jsx)("textarea",{"aria-label":"\u6587\u6863\u672F\u8BED\u8868",maxLength:4e3,value:P,placeholder:`band gap = \u5E26\u9699
gate = \u6805\u6781`,onChange:I=>A(I.target.value)})]}),(0,Se.jsx)("button",{type:"button",disabled:$n(P)===d.glossary,onClick:()=>f({glossary:$n(P)}),children:"\u5E94\u7528\u5E76\u66F4\u65B0\u8BD1\u6587"})]}),p&&(!r.length||r.some(I=>I.status!=="done"))&&e?.segments.length!==0?(0,Se.jsxs)("div",{className:"dshr-pdf-translation-notice",role:"status",children:[p,(0,Se.jsx)("button",{type:"button",onClick:_,children:"\u5237\u65B0\u670D\u52A1"})]}):null,S?(0,Se.jsx)("div",{className:"dshr-pdf-translation-notice",role:"status",children:S}):null,g?(0,Se.jsx)("div",{className:"dshr-pdf-translation-notice",role:"status",children:"\u5DF2\u6682\u505C\uFF0C\u5DF2\u5B8C\u6210\u7684\u8BD1\u6587\u4ECD\u53EF\u9605\u8BFB\u3002"}):null,(0,Se.jsxs)("div",{className:"dshr-pdf-translation-list",ref:l,tabIndex:0,"aria-label":`\u7B2C ${t} \u9875\u8BD1\u6587`,onWheel:()=>{o.current="translation"},children:[e?e.segments.length===0?(0,Se.jsx)("p",{className:"dshr-pdf-translation-empty",children:"\u6B64\u9875\u6CA1\u6709\u53EF\u63D0\u53D6\u7684\u6587\u5B57\uFF0C\u53EF\u80FD\u662F\u626B\u63CF\u9875\u6216\u56FE\u7247\u9875\u3002"}):null:(0,Se.jsx)("p",{className:"dshr-pdf-translation-empty",children:"\u6B63\u5728\u63D0\u53D6\u5F53\u524D\u9875\u6BB5\u843D\u2026"}),(e?.segments||[]).map(I=>{let x=I.sourceNeedsReview?{status:"source-review"}:r.find(O=>O.id===I.id)||{status:"queued"};return(0,Se.jsxs)("article",{"data-translation-segment":I.id,"data-status":x.status,className:`dshr-pdf-translation-paragraph${n===I.id&&d.linked!==!1?" is-linked":""}`,onPointerEnter:()=>{d.linked!==!1&&L(I.id)},children:[(0,Se.jsxs)("div",{className:"dshr-pdf-translation-paragraph-head",children:[(0,Se.jsxs)("span",{children:["\u6BB5\u843D ",Number(I.id.split("-s").at(-1))+1,x.cached?" \xB7 \u7F13\u5B58":""]}),(0,Se.jsxs)("div",{children:[(0,Se.jsx)("button",{type:"button","aria-label":`\u5B9A\u4F4D\u6BB5\u843D ${I.id}`,onClick:()=>L(I.id,!0),children:"\u5B9A\u4F4D\u539F\u6587"}),x.status==="done"&&!x.passthrough?(0,Se.jsx)("button",{type:"button","aria-label":`\u91CD\u65B0\u7FFB\u8BD1\u6BB5\u843D ${I.id}`,onClick:()=>v(t,I.id),children:"\u91CD\u8BD1\u672C\u6BB5"}):null]})]}),d.showSource?(0,Se.jsx)("p",{className:"dshr-pdf-translation-original",children:I.src}):null,x.zh?(0,Se.jsx)("p",{className:"dshr-pdf-translation-result",children:x.zh}):null,x.status==="done"?null:x.status==="source-review"?(0,Se.jsx)("p",{className:"dshr-pdf-translation-waiting",role:"status",children:"\u672C\u6BB5\u542B\u65E0\u6CD5\u786E\u8BA4\u7684 PDF \u5B57\u7B26\u3002\u8BF7\u9009\u62E9\u201C\u5B9A\u4F4D\u539F\u6587\u201D\uFF0C\u5728\u9875\u9762\u56FE\u50CF\u4E0A\u6838\u5BF9\u3002"}):x.status==="error"?(0,Se.jsxs)("div",{className:"dshr-pdf-translation-segment-error",children:[(0,Se.jsx)("p",{children:x.error}),(0,Se.jsx)("button",{type:"button",onClick:()=>v(t,I.id),children:"\u91CD\u8BD5\u672C\u6BB5"})]}):(0,Se.jsx)("p",{className:"dshr-pdf-translation-waiting",role:"status",children:g?"\u7B49\u5F85\u7EE7\u7EED\u7FFB\u8BD1":x.status==="loading"?"\u6B63\u5728\u7FFB\u8BD1\u672C\u6BB5\u2026":x.status==="checking"?"\u6B63\u5728\u8BFB\u53D6\u5DF2\u6709\u8BD1\u6587\u2026":"\u7B49\u5F85\u7FFB\u8BD1\u2026"})]},I.id)})]}),(0,Se.jsxs)("footer",{className:"dshr-pdf-translation-footer",children:[(0,Se.jsx)("span",{children:"\u60AC\u505C\u5BF9\u7167\u6BB5\u843D\uFF0C\u70B9\u51FB\u201C\u5B9A\u4F4D\u539F\u6587\u201D\u8FD4\u56DE\u51FA\u5904\u3002"}),N?(0,Se.jsxs)("button",{type:"button",onClick:()=>v(t),children:["\u91CD\u8BD5\u5931\u8D25\u6BB5\u843D\uFF08",N,"\uFF09"]}):null]})]})}var wr=It(require("react"),1);var Yi={glossary:"",fontSize:16,prefetch:!0,showSource:!1,linked:!0};function Dc({documentId:t,title:e,enabled:r,activePage:n,sources:o,visibleIds:a}){let[i,s]=wr.default.useState({documentId:"",pages:{},cacheIssue:""}),[l,d]=wr.default.useState({...Yi,documentId:""}),[f,g]=wr.default.useState(null),[u,p]=wr.default.useState(""),[_,S]=wr.default.useState(0),[v,P]=wr.default.useState(!1),A=wr.default.useRef(null);return wr.default.useEffect(()=>{if(!t)return;let y=!0;s({documentId:t,pages:{},cacheIssue:""}),P(!1);let N=new Wa({translate:so,cache:{get:$l,put:Hl},onChange:M=>{y&&s({documentId:t,...M})},onModelChanged:()=>{y&&S(M=>M+1)}});return A.current={documentId:t,controller:N},Ul(t).catch(()=>({})).then(M=>{y&&d({...Yi,...M,documentId:t,glossary:$n(M.glossary),fontSize:Math.max(12,Math.min(24,Number(M.fontSize)||16))})}),()=>{y=!1,N.dispose(),A.current?.controller===N&&(A.current=null)}},[t]),wr.default.useEffect(()=>{if(!t)return;let y=new AbortController;p(""),lc({signal:y.signal}).then(E=>{y.signal.aborted||(g({...E,documentId:t}),E.ready||p("\u7FFB\u8BD1\u6A21\u578B\u672A\u5C31\u7EEA\uFF0C\u8BF7\u5728 DSH \u8BBE\u7F6E\u4E2D\u9009\u62E9\u9ED8\u8BA4\u6A21\u578B\u3002"))}).catch(E=>{y.signal.aborted||(p(E.message||"\u7FFB\u8BD1\u670D\u52A1\u4E0D\u53EF\u7528\u3002"),g({documentId:t,ready:!1}))});let N=()=>{document.visibilityState==="visible"&&S(E=>E+1)},M=setInterval(N,6e4);return document.addEventListener("visibilitychange",N),()=>{y.abort(),clearInterval(M),document.removeEventListener("visibilitychange",N)}},[t,_]),wr.default.useEffect(()=>{let y=A.current;if(!(!y||y.documentId!==t||l.documentId!==t||f?.documentId!==t)){y.controller.configure({documentId:t,title:e,enabled:r&&!v,canTranslate:!!f.ready,model:{provider:f.provider||"",model:f.model||"",promptVersion:f.promptVersion||""},glossary:l.glossary,prefetch:l.prefetch}),y.controller.setFocus(n,a);for(let[N,M]of Object.entries(o))Math.abs(Number(N)-n)<=3&&y.controller.registerPage(Number(N),M)}},[t,e,r,v,l.glossary,l.prefetch,l.documentId,f,n,a,o]),wr.default.useEffect(()=>{t&&l.documentId===t&&Wl(t,l).catch(()=>{})},[t,l]),{...i.documentId===t?i:{pages:{},cacheIssue:""},preferences:l.documentId===t?l:Yi,paused:v,model:f?.documentId===t?f:null,modelError:u,setPaused:P,refreshModel:()=>S(y=>y+1),updatePreferences:y=>d(N=>({...N,...y})),retry:(y,N)=>A.current?.controller.retry(y,N)}}var Fc=It(require("react"),1);var Hn=require("react/jsx-runtime");function ja(t){let e=Number(t);return Number.isFinite(e)?Math.min(1,Math.max(0,e)):0}function Sp(t,e){typeof t=="function"&&t(e)}function zc({annotations:t,onOpenAnnotation:e,page:r}){let n=Fc.default.useRef(e);n.current=e;let o=Array.isArray(t)?t:[],a=[];for(let i=0;i<o.length;i+=1){let s=o[i];if(!s||!Array.isArray(s.rects)||s.rects.length===0||s.kind&&s.kind!=="pdf"||r!=null&&s.page!=null&&Number(s.page)!==Number(r))continue;let l=s.style==="underline"||s.style==="note"?s.style:"highlight",d=s.color||"#f5d76e",f=s.id==null?"":String(s.id),g=La(`${f}|${s.createdAt||0}`),u=Pa(s.width),p=Fa(s),_=l==="note"||typeof s.note=="string"&&s.note.trim().length>0,S=null;for(let v=0;v<s.rects.length;v+=1){let P=s.rects[v];if(!P||typeof P!="object")continue;let A=ja(P.x),y=ja(P.y),N=Math.min(ja(P.w),1-A),M=Math.min(ja(P.h),1-y);if(!(N>.002)||!(M>.001))continue;S={x:A,y,width:N,height:M};let E=`${f}:${v}`;if(l==="underline")a.push((0,Hn.jsx)("svg",{className:"dshr-anno-pdf-underline",style:{left:`${A*100}%`,top:`calc(${(y+M)*100}% - 4px)`,width:`${N*100}%`,height:"5px","--dshr-anno-color":d},viewBox:"0 0 100 6",preserveAspectRatio:"none","data-anno-id":f,"aria-hidden":"true",focusable:"false",children:(0,Hn.jsx)("path",{d:Da(g,100)})},`u:${E}`));else{let L=Math.max(M*u,.004),I=y+M*Oa(u);a.push((0,Hn.jsx)("span",{className:"dshr-anno-pdf-band",style:{left:`${A*100}%`,top:`${I*100}%`,width:`${N*100}%`,height:`${L*100}%`,"--dshr-anno-color":d},"data-anno-id":f,"aria-hidden":"true"},`b:${E}`))}}if(_&&S){let v=S.x+S.width,P=Math.min(Math.max(.005,v+.004),.972),A=Math.max(.004,S.y);a.push((0,Hn.jsx)("button",{type:"button",className:"dshr-anno-note-btn",style:{left:`${P*100}%`,top:`${A*100}%`,"--dshr-anno-color":d},"data-anno-id":f,title:p?`\u67E5\u770B\u6279\u6CE8\uFF1A${p}`:"\u67E5\u770B\u6279\u6CE8","aria-label":p?`\u67E5\u770B\u6279\u6CE8\uFF1A${p}`:"\u67E5\u770B\u6279\u6CE8",onMouseDown:y=>y.preventDefault(),onClick:()=>Sp(n.current,f),children:(0,Hn.jsx)(xn,{size:12})},`n:${f}`))}}return(0,Hn.jsx)("div",{className:"dshr-anno-pdf-layer","data-anno-layer":"pdf",children:a})}var Ee=require("react/jsx-runtime"),qc=Mc+Pc;var{useCallback:Bc,useEffect:Pt,useLayoutEffect:Zi,useMemo:Qi,useRef:Ne,useState:At}=Uo.default,rs=612,ns=792,Ji=.1,es=5,$c=1.2,Ep=32,Ap="1000px 0px",Np=1e7,Hc=8192,Cp=2,ts=128,Ip=160,Rp=600;function Kr(t,e,r){return Math.min(r,Math.max(e,t))}function Mp(t){if(t.items.length<=ts)return t;let e=0,r=!1;return new ReadableStream({async pull(n){if(await new Promise(a=>setTimeout(a,0)),r)return;let o=Math.min(e+ts,t.items.length);n.enqueue({items:t.items.slice(e,o),styles:e===0?t.styles:void 0,lang:t.lang}),e=o,e===t.items.length&&n.close()},cancel(){r=!0}})}function Ga(t,e,r,n,o=0){let a=t&&Number.isFinite(t.width)&&t.width>0?t.width:rs,i=t&&Number.isFinite(t.height)&&t.height>0?t.height:ns,s;if((e==="fit"||e==="page")&&n>0){if(s=Math.max(1,Math.floor(n)),e==="page"&&o>0){let f=Math.floor(a/i*Math.max(1,o-36));s=Math.max(1,Math.min(s,f))}}else s=Math.max(1,Math.floor(a*Kr(r,Ji,es)));let l=s/a,d=Math.max(1,Math.floor(i*l));return{width:s,height:d,pageScale:l}}function Ho(t,e,r=Np){let n=e&&Number.isFinite(e.width)&&e.width>0?e.width:rs,o=e&&Number.isFinite(e.height)&&e.height>0?e.height:ns,a=Math.min(Math.max(globalThis.devicePixelRatio||1,1),2),i=t*a,s=n*o*i*i;s>r&&(i*=Math.sqrt(r/s));let l=Math.max(n,o)*i;return l>Hc&&(i*=Hc/l),Math.max(Number.EPSILON,i)}function Uc(t){let e=t&&t.name;return e==="RenderingCancelledException"||e==="AbortException"||e==="AbortError"||e==="WorkerTaskCancelled"}function Wc(t){let e=t&&t.name,r=t&&t.message?String(t.message):String(t||"");return e==="PasswordException"?"\u8BE5 PDF \u5DF2\u52A0\u5BC6\uFF0C\u9700\u8981\u5BC6\u7801\u624D\u80FD\u6253\u5F00\u3002":e==="InvalidPDFException"?"\u6587\u4EF6\u4E0D\u662F\u6709\u6548\u7684 PDF\uFF0C\u6216\u8005\u5DF2\u7ECF\u635F\u574F\u3002":e==="MissingPDFException"?"\u6CA1\u6709\u627E\u5230 PDF \u6570\u636E\u3002":e==="UnexpectedResponseException"?`PDF \u6570\u636E\u8BFB\u53D6\u5931\u8D25${r?`\uFF1A${r}`:"\u3002"} `:/dynamically imported module|Importing a module script failed|Failed to fetch|error loading|Cannot find module/i.test(r)?"PDF \u5F15\u64CE\u52A0\u8F7D\u5931\u8D25\uFF08/dsh-reader-assets/pdf.bundle.js\uFF09\u3002\u8BF7\u786E\u8BA4 Host \u5DF2\u6B63\u786E\u63D0\u4F9B\u9759\u6001\u8D44\u6E90\u540E\u91CD\u8BD5\u3002":r?`PDF \u52A0\u8F7D\u5931\u8D25\uFF1A${r}`:"PDF \u52A0\u8F7D\u5931\u8D25\u3002"}function jc(t){if(!t)return null;let e=t.nodeType===1?t:t.parentElement;if(!e||typeof e.closest!="function")return null;let r=e.closest("[data-page]");if(!r)return null;let n=Number(r.getAttribute("data-page"));return Number.isFinite(n)?n:null}function Pp(t){if(!t||t.rangeCount===0)return null;let e=t.getRangeAt(0),r=typeof e.getClientRects=="function"?e.getClientRects():null;if(!r||r.length===0){let s=e.getBoundingClientRect();return s&&(s.width||s.height)?s:null}if(r.length===1)return r[0];let n=1/0,o=1/0,a=-1/0,i=-1/0;for(let s=0;s<r.length;s+=1){let l=r[s];!l||!l.width&&!l.height||(n=Math.min(n,l.left),o=Math.min(o,l.top),a=Math.max(a,l.right),i=Math.max(i,l.bottom))}if(!Number.isFinite(n))return e.getBoundingClientRect();try{return new DOMRect(n,o,Math.max(0,a-n),Math.max(0,i-o))}catch{return e.getBoundingClientRect()}}function Gc(t){let e=Ep,r=t.querySelector(".dshr-pdf-content");if(r){let n=getComputedStyle(r),o=Number.parseFloat(n.paddingLeft)||0,a=Number.parseFloat(n.paddingRight)||0;e=o+a}return Math.max(120,t.clientWidth-e)}var Op=Uo.default.memo(function({pageNumber:e,dim:r,mode:n,scale:o,viewportWidth:a,viewportHeight:i,rendered:s,active:l=!0,registerPageElement:d,registerFrameElement:f,annotations:g,onOpenAnnotation:u}){let p=Ga(r,n,o,a,i),_=Uo.default.useCallback(v=>d(e,v),[e,d]),S=Uo.default.useCallback(v=>f(e,v),[e,f]);return(0,Ee.jsx)("div",{className:"dshr-pdf-page","data-page":e,"data-active":l?"true":"false",style:l?void 0:{display:"none"},ref:_,children:(0,Ee.jsx)("div",{className:"dshr-pdf-page-col",style:{width:`${p.width}px`},children:(0,Ee.jsxs)("div",{className:"dshr-pdf-frame","data-page":e,"data-rendered":s?"true":"false",style:{width:`${p.width}px`,height:`${p.height}px`,"--total-scale-factor":String(p.pageScale)},ref:S,children:[(0,Ee.jsx)("div",{className:"dshr-pdf-placeholder","aria-hidden":"true",children:e}),(0,Ee.jsx)("canvas",{className:"dshr-pdf-canvas",width:1,height:1}),(0,Ee.jsx)("div",{className:"dshr-pdf-text-layer"}),(0,Ee.jsx)(zc,{annotations:g,onOpenAnnotation:u}),(0,Ee.jsx)("div",{className:"dshr-pdf-page-loading","aria-hidden":"true",children:(0,Ee.jsx)("span",{className:"dshr-pdf-spinner"})})]})})})});function Xc({data:t,documentId:e="",fileName:r="",renderToolbar:n,initialPage:o=1,autoTranslate:a=!1,pageTranslations:i,onReady:s,onPageChange:l,onPageText:d,onSelection:f,onRetryTranslation:g,annotations:u=[],onOpenAnnotation:p,focusAnnotation:_,hideTranslations:S=!1,paged:v=!1,onHideTranslations:P}){let A=Ne(null);A.current={autoTranslate:a,paged:v,onReady:s,onPageChange:l,onPageText:d,onSelection:f,onRetryTranslation:g,onOpenAnnotation:p};let y=Ne(null),N=Ne(null),M=Ne(new Map),E=Ne(new Map),L=Ne(new Map),I=Ne(new Map),x=Ne({width:rs,height:ns}),O=Ne(new Map),D=Ne(new Set),te=Ne([]),H=Ne(new Set),ne=Ne(null),re=Ne(null),z=Ne(null),oe=Ne(new $a),B=Ne(0),q=Ne(!1),ae=Ne("fit"),F=Ne(1),de=Ne(0),ve=Ne(0),Ae=Ne(!1),J=Ne(0),ge=Ne(1),Ue=Ne(!!a),we=Ne([]),Be=Ne(new Set),Xe=Ne(0),ft=Ne(0),h=Ne(0),c=Ne(0),k=Ne(null),b=Ne(0),Y=Ne(null),ce=Ne(!1),he=Ne(""),ye=Ne(0),Te=Ne(!1),We=Ne(!1),Ce=Ne(!1),[ue,ze]=At("loading"),[dt,$e]=At(null),[je,De]=At(null),[ke,ht]=At(0),[Ge,xt]=At({}),[Jt,pr]=At(null),[ot,Lt]=At("fit"),[_t,fr]=At(1),[Dt,er]=At(0),[K,pe]=At(0),[be,Oe]=At(!1),[xe,Qe]=At(Kr(Number.parseInt(o,10)||1,1,999999)),[Ft,kn]=At({}),[Tn,lr]=At(""),[tr,Wr]=At(!1),[Sn,rr]=At(0),[Je,En]=At({}),[gr,$t]=At([]),[nr,or]=At(null),[Jn,An]=At(!1),sn=Ne(null),ln=Ne("source"),mr=a&&!S&&!Jn,se=Dc({documentId:e,title:r,enabled:mr,activePage:xe,sources:Je,visibleIds:gr}),T=Ne(!1);T.current=mr;let G=Ne(!1);G.current=mr&&se.preferences.linked!==!1,sn.current=nr;let ie=Qi(()=>{let m=new Ha(ke,Ga(Jt,be?"page":ot,_t,Dt,K).height);for(let[C,$]of Object.entries(Ge))m.setHeight(Number(C),Ga($,be?"page":ot,_t,Dt,K).height);return m.paddingTop=k.current?.paddingTop??18,m},[ke,Jt,Ge,be,ot,_t,Dt,K]);k.current=ie,Zi(()=>{let m=Y.current;Y.current=null,m&&m.revision===b.current&&!v&&wi(m.anchor)},[ie,v]),Pt(()=>{a&&!S&&An(!1)},[a,S]);function at(m,C){O.current.set(m,C),En($=>$[m]===C?$:Object.fromEntries(Object.entries({...$,[m]:C}).filter(([V])=>Math.abs(Number(V)-ge.current)<=3)))}function gt(m,C){return[...m?.querySelectorAll("[data-pdf-segments]")||[]].filter($=>$.dataset.pdfSegments.split("|").includes(C))}function et(m,{origin:C="source",reveal:$=!1}={},V=ge.current){if(ln.current=C,or(rt=>rt?.page===V&&rt.id===m?rt:{page:V,id:m}),C==="source"&&V!==ge.current&&jr(V),!$)return;let le=N.current,ee=gt(E.current.get(V),m)[0];if(!le||!ee)return;let Ie=ee.getBoundingClientRect(),Ke=le.getBoundingClientRect();(Ie.top<Ke.top+12||Ie.bottom>Ke.bottom-12)&&le.scrollTo({top:Math.max(0,le.scrollTop+Ie.top-Ke.top-28),behavior:"auto"})}function Tt(){if(!T.current)return;let m=N.current,C=E.current.get(ge.current);if(!m||!C)return;let $=m.getBoundingClientRect(),V=new Set;for(let Ie of C.querySelectorAll("[data-pdf-segments]")){let Ke=Ie.getBoundingClientRect();if(Ke.bottom>$.top+4&&Ke.top<$.bottom-4)for(let rt of Ie.dataset.pdfSegments.split("|"))V.add(rt)}let le=[...V];$t(Ie=>Ie.join("|")===le.join("|")?Ie:le);let ee=sn.current;le.length&&(!ee||ee.page!==ge.current||!V.has(ee.id)&&ln.current==="source")&&et(le[0])}Pt(()=>{for(let m of E.current.values())for(let C of m.querySelectorAll("[data-pdf-segments]"))G.current&&Number(m.dataset.page)===nr?.page&&C.dataset.pdfSegments.split("|").includes(nr.id)?C.dataset.pdfLinked="true":delete C.dataset.pdfLinked},[nr,Ft,Je,mr,se.preferences.linked]),Pt(()=>{if(ue!=="ready")return;let m=requestAnimationFrame(Tt);return()=>cancelAnimationFrame(m)},[xe,ue,Je,mr]),Pt(()=>{if(!e||!mr||se.paused||se.preferences.prefetch===!1||ue!=="ready"||!Ft[xe]||xe>=ke)return;let m=!1,C=B.current,$=xe+1,V=setTimeout(async()=>{if(!(Xe.current>0))try{let le=await re.current?.getPage($);if(!le||m)return;let ee=await le.getTextContent();if(m||C!==B.current)return;at($,Ki(ee.items,$,le.getViewport({scale:1}).width))}catch{}},850);return()=>{m=!0,clearTimeout(V)}},[e,xe,ke,ue,mr,se.paused,se.preferences.prefetch,Ft]),Ue.current=!!a,ae.current=ot,F.current=_t,de.current=Dt,ve.current=K,Ae.current=be,J.current=ke,Jt&&(x.current=Jt);function Ct(m){let C=I.current.get(m);return C||x.current}function Ht(m){return Ga(Ct(m),Ae.current?"page":ae.current,F.current,de.current,ve.current)}function Ir(m){return Ht(m).pageScale}function yt(m){let C=L.current.get(m);return C||(C={page:null,token:0,wantRender:!1,rendered:!1,rendering:!1,renderTask:null,textLayer:null,textContent:null,grouped:null,lastRenderScale:null,lastRasterScale:0,textLayerReady:!1},L.current.set(m,C)),C}function cn(m,C){kn($=>{if(C)return $[m]?$:{...$,[m]:!0};if(!$[m])return $;let V={...$};return delete V[m],V})}function eo(m,C,$){if(!(C>0)||!($>0))return!1;let V=I.current.get(m);return V&&Math.abs(V.width-C)<.05&&Math.abs(V.height-$)<.05?!1:(!Y.current&&!A.current?.paged&&(Y.current={anchor:Rr(),revision:b.current}),I.current.set(m,{width:C,height:$}),xt(le=>({...le,[m]:{width:C,height:$}})),Nn(),!0)}function to(){if(A.current?.paged)return;let m=N.current;if(!m)return;let C=m.querySelector(".dshr-pdf-content");C&&k.current&&(k.current.paddingTop=Number.parseFloat(getComputedStyle(C).paddingTop)||0)}function Nn(){h.current||(h.current=requestAnimationFrame(()=>{h.current=0,to()}))}function jr(m){if(!Number.isFinite(m)||m===ge.current||(A.current?.paged&&L.current.get(ge.current)?.textLayer?.cancel(),ge.current=m,Qe(m),ln.current="source",!Ce.current))return;let C=A.current&&A.current.onPageChange;C&&C(m)}function ro(){if(A.current?.paged||!Ce.current)return;let m=N.current;if(!m)return;let C=k.current;if(!C?.count)return;let $=m.scrollTop+Kr(m.clientHeight*.28,48,240);jr(C.pageAt($))}function Rr(){if(A.current?.paged||!N.current||!k.current?.count)return null;let m=N.current.scrollTop,C=k.current.entryAt(m+1);return{page:C.page,ratio:Kr((m-C.top)/C.height,0,1)}}function wi(m){!m||A.current?.paged||!N.current||!k.current?.count||(N.current.scrollTop=Math.max(0,k.current.top(m.page)+m.ratio*k.current.height(m.page)))}function da(m){requestAnimationFrame(()=>{requestAnimationFrame(()=>{q.current||m()})})}function Cn(m){if(!Ue.current||H.current.has(m))return;let C=O.current.get(m);if(!C||(H.current.add(m),!C.text))return;let $=A.current&&A.current.onPageText;$&&$(m,{text:C.text,segments:C.segments.map(V=>({src:V.src}))})}function So(){D.current.forEach(m=>Cn(m))}function Mr(m,C,$){return!q.current&&$===B.current&&C===m.token&&m.wantRender}async function _i(m){let C=re.current,$=ne.current,V=E.current.get(m);if(!C||!$||!V)return;let le=B.current,ee=yt(m),Ie=ee.token+=1;if(ee.renderTask){try{ee.renderTask.cancel()}catch{}ee.renderTask=null}if(ee.textLayer){try{ee.textLayer.cancel()}catch{}ee.textLayer=null}let Ke=V.querySelector("canvas.dshr-pdf-canvas"),rt=V.querySelector(".dshr-pdf-text-layer");if(!(!Ke||!rt)){ee.rendering=!0,ee.renderFailed=!1;try{let qe=ee.page;if(!qe){if(qe=await C.getPage(m),!Mr(ee,Ie,le))return;ee.page=qe}let mt=qe.getViewport({scale:1}),wt=Ct(m);(Math.abs(mt.width-wt.width)>.05||Math.abs(mt.height-wt.height)>.05)&&eo(m,mt.width,mt.height);let ut=Ht(m),No=Ct(m),Co=()=>A.current?.paged?m===ge.current:D.current.has(m),Ei=Ho(ut.pageScale,No),Rn=!ee.rendered&&oe.current.get(m);Rn&&(Ke.width=Rn.bitmap.width,Ke.height=Rn.bitmap.height,Ke.getContext("2d",{alpha:!1}).drawImage(Rn.bitmap,0,0),ee.rendered=!0,ee.lastRenderScale=Rn.scale,ee.lastRasterScale=Rn.rasterScale,V.dataset.pdfQuality=Rn.rasterScale>=Ei-.002?"full":"preview",y.current&&(y.current.dataset.pdfCacheHits=String((Number(y.current.dataset.pdfCacheHits)||0)+1)),cn(m,!0));let xu=ee.lastRenderScale===null||Math.abs(ee.lastRenderScale-ut.pageScale)>=.002,Io=Co()?Ei:Math.min(Ho(ut.pageScale,No,2e6),ut.pageScale);if(!ee.rendered||xu||ee.lastRasterScale<Io-.002){let cr=Math.min(Io,ut.pageScale),pa=!ee.rendered&&cr<Io-.002?[cr,Io]:[Io];for(let Mn=0;Mn<pa.length;Mn++){if(Mn&&(await new Promise(vr=>setTimeout(vr,32)),!Mr(ee,Ie,le)||!Co()))return;let Gr=pa[Mn],mn=qe.getViewport({scale:Gr}),Or=document.createElement("canvas");Or.width=Math.max(1,Math.floor(mn.width)),Or.height=Math.max(1,Math.floor(mn.height));try{let vr=qe.render({canvas:Or,viewport:mn,intent:"display",background:"#ffffff"});vr.onContinue=Ut=>setTimeout(()=>{Mr(ee,Ie,le)?Ut():vr.cancel()},Co()?0:16),ee.renderTask=vr;try{await vr.promise}finally{ee.renderTask===vr&&(ee.renderTask=null)}if(!Mr(ee,Ie,le))return;if(y.current){let Ut=vr.isWorkerRendering?"pdfWorkerRenders":"pdfMainRenders";y.current.dataset[Ut]=String((Number(y.current.dataset[Ut])||0)+1),y.current.dataset.pdfRenderer=vr.isWorkerRendering?"worker":"main"}Ke.width=Or.width,Ke.height=Or.height;let fa=Ke.getContext("2d",{alpha:!1});if(!fa)throw new Error("\u65E0\u6CD5\u521B\u5EFA PDF \u753B\u5E03\u4E0A\u4E0B\u6587");if(fa.drawImage(Or,0,0),ee.lastRenderScale=ut.pageScale,ee.lastRasterScale=Gr,ee.rendered=!0,V.dataset.pdfQuality=Gr>=Ei-.002?"full":"preview",cn(m,!0),typeof createImageBitmap=="function")try{let Ut=await createImageBitmap(Or);if(!Mr(ee,Ie,le)){Ut.close();return}oe.current.set(m,{bitmap:Ut,scale:ut.pageScale,rasterScale:Gr}),y.current&&(y.current.dataset.pdfCacheBytes=String(oe.current.bytes))}catch{}}finally{Or.width=0,Or.height=0}}}if(A.current?.paged?m!==ge.current:!D.current.has(m))return;try{let cr=ee.textContent;if(!cr){if(cr=await qe.getTextContent(),!Mr(ee,Ie,le))return;ee.textContent=cr}if(!Co())return;ee.grouped||(ee.grouped=Ki(cr.items,m,mt.width),at(m,ee.grouped));let pa=qe.getViewport({scale:ut.pageScale}),Mn=cr.items.length>ts,Gr=Mn?rt.cloneNode(!1):rt;Gr.replaceChildren();let mn=new $.TextLayer({textContentSource:Mp(cr),container:Gr,viewport:pa});ee.textLayer=mn;try{await mn.render()}finally{ee.textLayer===mn&&(ee.textLayer=null)}if(!Mr(ee,Ie,le)||!Co())return;if(Mn){let Ut=document.createDocumentFragment();for(;Gr.firstChild;)Ut.append(Gr.firstChild);rt.style.cssText=Gr.style.cssText,rt.replaceChildren(Ut)}ee.textLayerReady=!0;let Or=mn.textDivs||[],vr=new Map,fa=0;cr.items.forEach((Ut,Ai)=>{typeof Ut.str=="string"&&vr.set(Ai,Or[fa++])});for(let Ut of ee.grouped.segments)for(let Ai of Ut.itemIndices||[]){let Ro=vr.get(Ai);if(!Ro)continue;let ga=new Set((Ro.dataset.pdfSegments||"").split("|").filter(Boolean));ga.add(Ut.id),Ro.dataset.pdfSegments=[...ga].join("|"),Ro.dataset.pdfSegment=[...ga][0],G.current&&sn.current?.page===m&&ga.has(sn.current.id)&&(Ro.dataset.pdfLinked="true")}Tt()}catch(cr){Uc(cr)||console.warn("[dsh-reader] PDF \u6587\u672C\u5C42\u6E32\u67D3\u5931\u8D25",cr)}if(!Mr(ee,Ie,le))return;D.current.has(m)&&Cn(m)}catch(qe){Uc(qe)||(ee.renderFailed=!0,console.warn(`[dsh-reader] \u7B2C ${m} \u9875\u6E32\u67D3\u5931\u8D25`,qe))}finally{ee.rendering=!1}}}function gn(){if(!q.current)for(;Xe.current<Cp&&we.current.length>0;){we.current.sort((Ie,Ke)=>Math.abs(Ie.pageNumber-ge.current)-Math.abs(Ke.pageNumber-ge.current));let m=we.current[0],C=L.current.get(ge.current);if(m.pageNumber!==ge.current&&(!C?.rendered||C.rendering))break;let $=we.current.shift();Be.current.delete($.pageNumber);let V=L.current.get($.pageNumber);if(!V||!V.wantRender||V.rendering||!E.current.has($.pageNumber))continue;Xe.current+=1;let le=B.current,ee=V.token+1;_i($.pageNumber).catch(()=>{}).finally(()=>{if(le===B.current){if(Xe.current=Math.max(0,Xe.current-1),V.wantRender&&E.current.has($.pageNumber)){let Ie=Ht($.pageNumber),rt=(A.current?.paged?$.pageNumber===ge.current:D.current.has($.pageNumber))&&V.rendered&&!V.renderFailed&&V.lastRasterScale<Ho(Ie.pageScale,Ct($.pageNumber))-.002;(V.token!==ee||rt||V.rendered&&Math.abs((V.lastRenderScale||0)-Ie.pageScale)>.002)&&In($.pageNumber,{front:!0})}gn()}})}}function In(m,{front:C=!1}={}){if(!E.current.has(m))return;let $=yt(m);if($.wantRender=!0,C&&m===ge.current&&!$.rendered)for(let[le,ee]of L.current)le!==m&&ee.renderTask&&!D.current.has(le)&&(ee.token++,ee.renderTask.cancel());if($.rendering)return;if(Be.current.has(m)){C&&we.current.sort((le,ee)=>(ee.pageNumber===m)-(le.pageNumber===m));return}if($.rendered&&$.lastRenderScale!==null){let le=Ht(m);if(($.textLayerReady||(A.current?.paged?m!==ge.current:!D.current.has(m)))&&Math.abs($.lastRenderScale-le.pageScale)<.002&&$.lastRasterScale>=(m===ge.current?Ho(le.pageScale,Ct(m)):Math.min(Ho(le.pageScale,Ct(m),2e6),le.pageScale))-.002)return}Be.current.add(m);let V={pageNumber:m};C?we.current.unshift(V):we.current.push(V),gn()}function ha(m){let C=L.current.get(m);if(!C)return;if(C.wantRender=!1,C.token+=1,C.renderTask){try{C.renderTask.cancel()}catch{}C.renderTask=null}if(C.textLayer){try{C.textLayer.cancel()}catch{}C.textLayer=null}let $=E.current.get(m);if($){let V=$.querySelector("canvas.dshr-pdf-canvas");V&&(V.width=0,V.height=0);let le=$.querySelector(".dshr-pdf-text-layer");le&&le.replaceChildren()}if(C.page){try{C.page.cleanup()}catch{}C.page=null}C.textContent=null,C.grouped=null,O.current.delete(m),C.lastRenderScale=null,C.lastRasterScale=0,C.textLayerReady=!1,C.rendered&&(C.rendered=!1,cn(m,!1)),we.current.length>0&&(we.current=we.current.filter(V=>V.pageNumber!==m)),Be.current.delete(m),L.current.delete(m)}function ki(){for(let[m,C]of L.current){if(!C.rendered||!C.wantRender||C.rendering)continue;let $=Ht(m);(!C.textLayerReady||C.lastRenderScale===null||Math.abs(C.lastRenderScale-$.pageScale)>.002)&&In(m)}}function Eo(m=Ip){ft.current&&clearTimeout(ft.current),ft.current=setTimeout(()=>{ft.current=0,ki()},m)}function w(m){b.current++,Y.current=null,m=Kr(Math.round(Number(m)||1),1,J.current||1);let C=N.current;if(A.current?.paged){jr(m);return}if(!C||!k.current?.count){jr(m);return}let $=k.current.top(m)-10;typeof C.scrollTo=="function"?C.scrollTo({top:Math.max(0,$),behavior:"auto"}):C.scrollTop=Math.max(0,$),jr(m)}function R(m){let C=N.current;C&&C.scrollBy({top:m*C.clientHeight*.92,behavior:"auto"})}function Z(m){!m||A.current?.paged||(Y.current={anchor:m,revision:b.current})}function tt(m){let C=Rr(),$=ae.current==="fit"?Ir(ge.current):F.current,V=Kr($*m,Ji,es);Ae.current=!1,Oe(!1),ae.current="custom",F.current=V,Lt("custom"),fr(V),Z(C)}function Me(){let m=Rr();Ae.current=!1,Oe(!1),ae.current="fit",Lt("fit"),Z(m)}function it(){let m=Rr(),C=!Ae.current;Ae.current=C,Oe(C),ae.current="fit",Lt("fit"),Z(m),Nn()}function pt(){w(Math.max(1,ge.current-1),"smooth")}Pt(()=>{let m=N.current;if(!m||ue!=="ready")return;let C=$=>{(Number($.detail)||1)>0?br():pt()};return m.addEventListener("dshr-pdf-page-turn",C),()=>m.removeEventListener("dshr-pdf-page-turn",C)},[ue,ke,xe]);function br(){w(Math.min(J.current||1,ge.current+1),"smooth")}function Pr(m,C){let $=O.current.get(m);if(!$||!$.text)return;let V=$.text,le=C.replace(/\s+/g," ").trim(),ee=le?V.indexOf(le):-1,Ie=Rp,Ke=0;if(ee>=0){let mt=Math.max(80,Math.floor((Ie-Math.min(le.length,Ie-160))/2));Ke=Math.max(0,ee-mt)}let rt=Math.min(V.length,Ke+Ie);return rt-Ke<Ie&&(Ke=Math.max(0,rt-Ie)),V.slice(Ke,rt).trim()||void 0}function xr(){if(he.current="",!ce.current)return;ce.current=!1;let m=A.current&&A.current.onSelection;m&&m(null)}function ua(){let m=globalThis.getSelection?globalThis.getSelection():null;if(!m||m.isCollapsed||m.rangeCount===0){xr();return}let $=y.current;if(!$)return;let V=m.getRangeAt(0);if(!$.querySelector(".dshr-pdf-content")?.contains(V.commonAncestorContainer)){xr();return}let le=m.toString().replace(/\s+/g," ").trim();if(!le){xr();return}let ee=jc(V.startContainer)||jc(V.endContainer)||ge.current,Ie=Pp(m);if(!Ie)return;let Ke=[ee,le,Math.round(Ie.left),Math.round(Ie.top),Math.round(Ie.width),Math.round(Ie.height)].join("|");if(Ke===he.current)return;he.current=Ke;let rt={text:le,page:ee,rect:Ie},qe=E.current.get(ee);if(qe){let ut=xc(V,qe);ut.length>0&&(rt.pageRects=ut)}let mt=Pr(ee,le);mt&&(rt.context=mt),ce.current=!0;let wt=A.current&&A.current.onSelection;wt&&wt(rt)}let au=Bc((m,C)=>{C?M.current.set(m,C):M.current.delete(m)},[]),iu=Bc((m,C)=>{if(C){E.current.set(m,C);for(let V of te.current)V.observe(C);let $=L.current.get(m);$&&($.rendered=!1,$.textLayerReady=!1,$.lastRenderScale=null,cn(m,!1))}else{let $=E.current.get(m);if($)for(let V of te.current)V.unobserve($);D.current.delete(m),ha(m),E.current.delete(m)}},[]);function su(m){let C=m.target;if(C&&typeof C.closest=="function"&&C.closest('button, a, input, textarea, select, [role="button"]'))return;let $=y.current;$&&typeof $.focus=="function"&&$.focus({preventScroll:!0})}function lu(m){if(m.defaultPrevented||m.altKey||A.current?.paged)return;let C=m.target;if(C?.closest?.(".dshr-pdf-translation-panel, .dshr-immersive-controls"))return;let $=C&&C.tagName?C.tagName.toLowerCase():"";if($==="input"||$==="textarea"||$==="select"||C&&C.isContentEditable)return;let V=N.current;if(!(!V||ue!=="ready"))switch(m.key){case"PageDown":m.preventDefault(),R(1);break;case"PageUp":m.preventDefault(),R(-1);break;case"Home":m.preventDefault(),V.scrollTo({top:0,behavior:"auto"}),jr(1);break;case"End":m.preventDefault(),V.scrollTo({top:V.scrollHeight,behavior:"auto"}),jr(J.current||1);break;default:break}}function cl(){for(let m of L.current.values()){if(m.token+=1,m.renderTask)try{m.renderTask.cancel()}catch{}if(m.textLayer)try{m.textLayer.cancel()}catch{}if(m.page)try{m.page.cleanup()}catch{}}L.current.clear()}Pt(()=>{let m=!1,C=new AbortController,$;if(B.current+=1,q.current=!1,z.current?.close(),z.current=null,re.current=null,oe.current.clear(),y.current){for(let le of["pdfReadBytes","pdfSourceBytes","pdfRangeReads","pdfCacheHits","pdfCacheBytes","pdfWorkerRenders","pdfMainRenders"])y.current.dataset[le]="0";delete y.current.dataset.pdfRenderer}cl(),M.current.clear(),E.current.clear(),I.current.clear(),O.current.clear(),D.current.clear(),H.current.clear(),we.current=[],Be.current.clear(),Xe.current=0,Y.current=null,b.current++,We.current=!1,ze("loading"),$e(null),De(null),ht(0),xt({}),pr(null),kn({}),lr(""),Wr(!1),Qe(1),En({}),or(null),$t([]),ge.current=0,Ce.current=!1;let V=typeof Blob<"u"&&t instanceof Blob;if(!V&&!(t instanceof ArrayBuffer)&&!ArrayBuffer.isView(t)||(V?t.size===0:t.byteLength===0)){ze("error"),$e("\u6CA1\u6709\u53EF\u663E\u793A\u7684 PDF \u6570\u636E\u3002");return}return(async()=>{try{if($=await Ba(t,{signal:C.signal,onRead:ut=>{!m&&y.current&&(y.current.dataset.pdfReadBytes=String(ut.bytes),y.current.dataset.pdfSourceBytes=String(ut.total),y.current.dataset.pdfRangeReads=String(ut.reads))},onProgress:ut=>{!m&&ut?.total>0&&De(Math.max(1,Math.min(100,Math.round(ut.loaded/ut.total*100))))},onError:ut=>{m||(ze("error"),$e(Wc(ut)))}}),m){$.close();return}z.current=$;let{engine:le,pdf:ee}=$;ne.current=le,re.current=ee;let Ie=await ee.getPage(1);if(m)return;let Ke=Ie.getViewport({scale:1}),rt={width:Ke.width,height:Ke.height};x.current=rt;try{Ie.cleanup()}catch{}let qe=Kr(Number.parseInt(o,10)||1,1,ee.numPages),mt=null;if(qe!==1)try{let ut=await ee.getPage(qe),No=ut.getViewport({scale:1});mt={width:No.width,height:No.height},I.current.set(qe,mt),ut.cleanup()}catch{}if(m)return;pr(rt),xt(mt?{[qe]:mt}:{}),ht(ee.numPages),J.current=ee.numPages,De(null),ze("ready"),Qe(qe),ge.current=qe;let wt=A.current&&A.current.onReady;wt&&wt({pageCount:ee.numPages})}catch(le){if(m)return;$?.close(),z.current=null,re.current=null,De(null),ze("error"),$e(Wc(le))}})(),()=>{if(m=!0,C.abort(),q.current=!0,B.current+=1,cl(),$?.close(),z.current=null,re.current=null,oe.current.clear(),we.current=[],Be.current.clear(),ft.current&&(clearTimeout(ft.current),ft.current=0),h.current&&(cancelAnimationFrame(h.current),h.current=0),c.current&&(cancelAnimationFrame(c.current),c.current=0),ce.current){ce.current=!1;let le=A.current&&A.current.onSelection;le&&le(null)}}},[t,Sn]),Pt(()=>{let m=()=>ua(),C=()=>ua(),$=()=>{ye.current||(ye.current=requestAnimationFrame(()=>{ye.current=0;let V=globalThis.getSelection?globalThis.getSelection():null;(!V||V.isCollapsed||V.rangeCount===0)&&xr()}))};return document.addEventListener("mouseup",m,!0),document.addEventListener("keyup",C,!0),document.addEventListener("selectionchange",$),()=>{document.removeEventListener("mouseup",m,!0),document.removeEventListener("keyup",C,!0),document.removeEventListener("selectionchange",$),ye.current&&(cancelAnimationFrame(ye.current),ye.current=0)}},[]),Zi(()=>{if(ue!=="ready")return;let m=N.current;if(!m)return;let C=Gc(m);C>0&&(de.current=C,er(C)),m.clientHeight>0&&(ve.current=m.clientHeight,pe(m.clientHeight))},[ue,ke]),Pt(()=>{v&&Oe(!0)},[v]),Pt(()=>{if(!v)return;let m=N.current;m&&(m.scrollTop=0)},[v]),Pt(()=>{if(!v||ue!=="ready"||ke<=0)return;D.current=new Set([xe]),Cn(xe);let m=[xe];for(let V=1;V<=2;V+=1)m.push(xe+V,xe-V);let $=m.filter((V,le,ee)=>V>=1&&V<=ke&&ee.indexOf(V)===le).map((V,le)=>window.setTimeout(()=>In(V,{front:le===0}),le===0?0:le===1?30:1e3+(le-2)*120));return()=>{for(let V of $)window.clearTimeout(V)}},[v,ue,xe,ke,be,ot,_t,Dt,K]),Pt(()=>{if(!v||ue!=="ready")return;let m=N.current;m&&m.dispatchEvent(new CustomEvent("dshr-pdf-page-state",{detail:{page:xe,pages:ke}}))},[v,ue,xe,ke]),Pt(()=>{ue==="ready"&&(Nn(),Eo())},[be,K,ue]),Pt(()=>{if(ue!=="ready")return;let m=N.current;if(!m)return;let C=!1,$=null,V=null,le=()=>{let rt=Gc(m),qe=m.clientHeight,mt=rt>0&&Math.abs(rt-de.current)>=.5,wt=qe>0&&Math.abs(qe-ve.current)>=.5;if(!mt&&!wt)return;let ut=mt||wt&&Ae.current?Rr():null;mt&&(de.current=rt,er(rt)),wt&&(ve.current=qe,pe(qe)),ut&&!A.current?.paged&&Z(ut)},ee=()=>{c.current||(b.current++,Y.current=null,c.current=requestAnimationFrame(()=>{c.current=0,ro(),Tt()}))},Ie=null;typeof ResizeObserver=="function"&&(Ie=new ResizeObserver(()=>{C||le()}),Ie.observe(m)),m.addEventListener("scroll",ee,{passive:!0}),!v&&typeof IntersectionObserver=="function"&&($=new IntersectionObserver(qe=>{for(let mt of qe){let wt=Number(mt.target.getAttribute("data-page"));Number.isFinite(wt)&&(mt.isIntersecting?(D.current.add(wt),In(wt,{front:!0}),Cn(wt)):D.current.delete(wt))}},{root:m,rootMargin:"0px",threshold:0}),V=new IntersectionObserver(qe=>{for(let mt of qe){let wt=Number(mt.target.getAttribute("data-page"));Number.isFinite(wt)&&(mt.isIntersecting?In(wt):A.current?.paged||ha(wt))}},{root:m,rootMargin:Ap,threshold:0}),te.current=[$,V],da(()=>{if(!C)for(let qe of E.current.values())$.observe(qe),V.observe(qe)}));let Ke=requestAnimationFrame(()=>{C||(to(),ro())});return()=>{C=!0,cancelAnimationFrame(Ke),Ie&&Ie.disconnect(),$&&$.disconnect(),V&&V.disconnect(),te.current=[],m.removeEventListener("scroll",ee)}},[ue,ke,v]),Pt(()=>{if(ue!=="ready"||ke<=0||We.current)return;We.current=!0;let m=Kr(Number.parseInt(o,10)||1,1,ke),C=setTimeout(()=>{Ce.current=!0,N.current&&(to(),w(m,"auto"))},0);return()=>clearTimeout(C)},[ue,ke]);let dl=Ne(v);Zi(()=>{dl.current!==v&&(dl.current=v,ue==="ready"&&(v?N.current.scrollTop=0:w(ge.current,"auto")))},[v,ue]),Pt(()=>{ue==="ready"&&(Nn(),Eo())},[ue,ot,_t,Dt,Ge]),Pt(()=>{ue==="ready"&&Nn()},[ue,S]),Pt(()=>{Ue.current=!!a,a&&ue==="ready"&&So()},[a,ue]);let Ti=Qi(()=>{if(ke<=0)return[];let m=v?2:Math.min(16,Math.max(3,Math.ceil(K/Math.max(1,Math.min(ie.defaultHeight,...ie.heights.values())))+1)),C=Math.max(1,xe-m),$=Math.min(ke,xe+m);return Array.from({length:$-C+1},(V,le)=>C+le)},[v,xe,ke,ie,K]),hl=Ti[0]||1,ul=Ti.at(-1)||0,cu=Qi(()=>{let m=new Map;for(let C of u||[]){if(!C||C.kind!=="pdf"||!Number.isFinite(C.page))continue;let $=m.get(C.page)||[];$.push(C),m.set(C.page,$)}return m},[u]);Pt(()=>{if(!_?.page||ue!=="ready")return;let m=setTimeout(()=>{w(Kr(Number(_.page)||1,1,J.current||1),"smooth")},80);return()=>clearTimeout(m)},[_,ue]);let du=(ot==="fit"?Ir(xe):_t)<es-.001,hu=(ot==="fit"?Ir(xe):_t)>Ji+.001;function uu(m){let C=m.currentTarget;lr(String(xe)),Wr(!0),requestAnimationFrame(()=>{C&&typeof C.select=="function"&&C.select()})}function pu(m){let C=m.target.value.replace(/[^\d]/g,"").slice(0,6);lr(C)}function fu(){if(Te.current){Te.current=!1,Wr(!1);return}let m=Number.parseInt(Tn,10);Number.isFinite(m)&&J.current>0&&w(Kr(m,1,J.current),"auto"),Wr(!1)}function gu(){tr&&fu()}function mu(m){m.key==="Enter"?(m.preventDefault(),m.currentTarget.blur()):m.key==="Escape"&&(m.preventDefault(),Te.current=!0,Wr(!1),m.currentTarget.blur())}let bu=tr?Tn:String(xe),Ao=n?"dshr-immersive-btn":"dshr-pdf-tbtn",pl=`${Math.round((n?Ir(xe):_t)*100)}%`,Si=ue==="ready"?(0,Ee.jsxs)(Ee.Fragment,{children:[(0,Ee.jsxs)("div",{className:"dshr-pdf-tool-group",role:"group","aria-label":"PDF \u7F29\u653E",children:[(0,Ee.jsx)("button",{type:"button",className:Ao,title:"\u7F29\u5C0F","aria-label":"\u7F29\u5C0F",disabled:!hu,onClick:()=>tt(1/$c),children:"\u2212"}),(0,Ee.jsx)("span",{className:"dshr-pdf-zoom-percent","data-scale":be?"page":ot==="fit"?"fit":_t,title:be?"\u5F53\u524D\u4E3A\u6574\u9875\u663E\u793A":ot==="fit"?"\u5F53\u524D\u4E3A\u9002\u5408\u5BBD\u5EA6":"\u5F53\u524D\u7F29\u653E\u6BD4\u4F8B",children:n?pl:be?"\u6574\u9875":ot==="fit"?"\u9002\u5BBD":pl}),(0,Ee.jsx)("button",{type:"button",className:Ao,title:"\u653E\u5927","aria-label":"\u653E\u5927",disabled:!du,onClick:()=>tt($c),children:"\uFF0B"}),(0,Ee.jsx)("button",{type:"button",className:`${Ao} dshr-pdf-tbtn-wide`,"data-active":be?"true":"false","aria-pressed":be,title:be?"\u5F53\u524D\u6574\u9875\u663E\u793A\uFF1B\u70B9\u51FB\u56DE\u5230\u9002\u5408\u5BBD\u5EA6":"\u70B9\u51FB\u5207\u6362\u4E3A\u6574\u9875\u663E\u793A\uFF1B\u518D\u6B21\u70B9\u51FB\u56DE\u5230\u9002\u5408\u5BBD\u5EA6",onClick:it,children:n||be?"\u6574\u9875":"\u9002\u5BBD"})]}),n?null:(0,Ee.jsx)("span",{className:"dshr-pdf-toolbar-sep","aria-hidden":"true"}),(0,Ee.jsxs)("div",{className:"dshr-pdf-tool-group",role:"group","aria-label":"PDF \u7FFB\u9875",children:[(0,Ee.jsx)("button",{type:"button",className:Ao,title:"\u4E0A\u4E00\u9875\uFF08PageUp\uFF09","aria-label":"\u4E0A\u4E00\u9875",disabled:xe<=1,onClick:pt,children:"\u2039"}),(0,Ee.jsxs)("div",{className:"dshr-pdf-pager",children:[(0,Ee.jsx)("input",{className:"dshr-pdf-page-input",inputMode:"numeric","aria-label":"\u9875\u7801",value:bu,onChange:pu,onFocus:uu,onBlur:gu,onKeyDown:mu}),(0,Ee.jsxs)("span",{"aria-hidden":"true",children:["/ ",ke]})]}),(0,Ee.jsx)("button",{type:"button",className:Ao,title:"\u4E0B\u4E00\u9875\uFF08PageDown\uFF09","aria-label":"\u4E0B\u4E00\u9875",disabled:xe>=ke,onClick:br,children:"\u203A"})]})]}):null;return(0,Ee.jsxs)("div",{className:"dshr-pdf-root",ref:y,tabIndex:0,"data-dshr-pdf":"",role:"region","aria-label":r?`PDF \u9605\u8BFB\u5668\uFF1A${r}`:"PDF \u9605\u8BFB\u5668",onKeyDown:lu,children:[n?n(Si):Si&&(0,Ee.jsxs)("div",{className:"dshr-pdf-toolbar",role:"toolbar","aria-label":"PDF \u9605\u8BFB\u5DE5\u5177\u680F",children:[(0,Ee.jsx)("span",{className:"dshr-pdf-title",title:r||void 0,children:r}),(0,Ee.jsx)("span",{className:"dshr-pdf-toolbar-spacer"}),Si]}),(0,Ee.jsxs)("div",{className:"dshr-pdf-workspace",children:[(0,Ee.jsx)("div",{className:"dshr-pdf-scroll",ref:N,"data-pdf-page":v?xe:void 0,"data-pdf-pages":v?ke:void 0,onMouseDown:su,onPointerOver:m=>{if(!G.current||m.buttons)return;let C=m.target.closest?.("[data-pdf-segment]"),$=Number(C?.closest(".dshr-pdf-frame")?.dataset.page);C&&$&&et(C.dataset.pdfSegment,{origin:"source"},$)},children:ue==="ready"?(0,Ee.jsxs)("div",{className:"dshr-pdf-content",children:[!v&&hl>1?(0,Ee.jsx)("div",{className:"dshr-pdf-spacer","aria-hidden":"true",style:{height:ie.top(hl)-ie.paddingTop}}):null,Ti.map(m=>(0,Ee.jsx)(Op,{pageNumber:m,dim:Ct(m),mode:be?"page":ot,scale:_t,viewportWidth:Dt,viewportHeight:K,active:!v||m===xe,rendered:!!Ft[m],registerPageElement:au,registerFrameElement:iu,annotations:cu.get(m),onOpenAnnotation:p},m)),!v&&ul<ke?(0,Ee.jsx)("div",{className:"dshr-pdf-spacer","aria-hidden":"true",style:{height:ie.top(ke+1)-ie.top(ul+1)}}):null]}):(0,Ee.jsx)("div",{className:"dshr-pdf-status",role:ue==="error"?"alert":"status",children:ue==="error"?(0,Ee.jsxs)(Ee.Fragment,{children:[(0,Ee.jsx)("p",{className:"dshr-pdf-status-title dshr-pdf-status-error",children:"PDF \u52A0\u8F7D\u5931\u8D25"}),(0,Ee.jsx)("p",{className:"dshr-pdf-status-detail",children:dt}),(0,Ee.jsx)("button",{type:"button",className:"dshr-pdf-status-retry",onClick:()=>rr(m=>m+1),children:"\u91CD\u65B0\u52A0\u8F7D"})]}):(0,Ee.jsxs)(Ee.Fragment,{children:[(0,Ee.jsx)("span",{className:"dshr-pdf-status-spinner","aria-hidden":"true"}),(0,Ee.jsx)("p",{className:"dshr-pdf-status-title",children:"\u6B63\u5728\u52A0\u8F7D PDF\u2026"}),je!==null?(0,Ee.jsxs)("p",{className:"dshr-pdf-status-progress",children:[je,"%"]}):null]})})}),mr?(0,Ee.jsx)(Lc,{page:xe,source:Je[xe],rows:e?se.pages[xe]||[]:(Je[xe]?.segments||[]).map((m,C)=>({...m,...i?.[xe]?.segments?.[C]||{},status:i?.[xe]?.status||"queued",error:i?.[xe]?.error})),activeId:nr?.page===xe?nr.id:null,originRef:ln,translation:e?se:{...se,retry:m=>{H.current.delete(m),g?.(m),Cn(m)}},onActivate:(m,C)=>et(m,C,xe),onClose:()=>{An(!0),P?.()}}):null]})]})}Xc.displayName="PdfViewer";var Vc=Xc;var zr=It(require("react"),1);var d0=require("react"),Ot=require("react/jsx-runtime");function qa(t,e="i"){let r=[],n=String(t??""),o=/(\*\*[^*]+\*\*|__[^_]+__|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/gu,a=0,i=0;for(let s of n.matchAll(o)){s.index>a&&r.push(n.slice(a,s.index));let l=s[0],d=`${e}-${i++}`;if(l.startsWith("**")||l.startsWith("__"))r.push((0,Ot.jsx)("strong",{children:l.slice(2,-2)},d));else if(l.startsWith("`"))r.push((0,Ot.jsx)("code",{children:l.slice(1,-1)},d));else{let f=/^\[([^\]]+)\]\(([^)\s]+)\)$/u.exec(l);f&&/^https?:\/\//iu.test(f[2])?r.push((0,Ot.jsx)("a",{href:f[2],target:"_blank",rel:"noreferrer noopener",children:f[1]},d)):r.push(l)}a=s.index+l.length}return a<n.length&&r.push(n.slice(a)),r}function Kc({text:t}){let e=String(t??"").replace(/\r\n/gu,`
`).split(`
`),r=[],n=[],o=[],a=[],i=null,s=0,l=()=>{if(n.length===0)return;let u=n.join(" ");r.push((0,Ot.jsx)("p",{children:qa(u,`p${s}`)},`p-${s++}`)),n=[]},d=()=>{o.length!==0&&(r.push((0,Ot.jsx)("ul",{children:o.map((u,p)=>(0,Ot.jsx)("li",{children:qa(u,`l${s}-${p}`)},`li-${s}-${p}`))},`ul-${s++}`)),o=[])},f=()=>{a.length!==0&&(r.push((0,Ot.jsx)("blockquote",{children:a.map((u,p)=>(0,Ot.jsx)("p",{children:qa(u,`q${s}-${p}`)},`bqp-${s}-${p}`))},`bq-${s++}`)),a=[])},g=()=>{l(),d(),f()};for(let u of e){let p=u.trimEnd();if(p.trim().startsWith("```")){i===null?(g(),i=[]):(r.push((0,Ot.jsx)("pre",{children:(0,Ot.jsx)("code",{children:i.join(`
`)})},`pre-${s++}`)),i=null);continue}if(i!==null){i.push(u);continue}if(p.trim()===""){g();continue}let _=/^(#{1,4})\s+(.*)$/u.exec(p);if(_){g();let y=`h${Math.min(4,_[1].length)}`;r.push((0,Ot.jsx)(y,{children:qa(_[2],`h${s}`)},`h-${s++}`));continue}let S=/^\s*>\s?(.*)$/u.exec(p);if(S){l(),d(),a.push(S[1]);continue}let v=/^\s*[-*+]\s+(.*)$/u.exec(p);if(v){g(),o.push(v[1]);continue}let P=/^\s*\d+[.)]\s+(.*)$/u.exec(p);if(P){g(),o.push(P[1]);continue}if(/^\s*([-*_])(?:\s*\1){2,}\s*$/u.test(p)){g(),r.push((0,Ot.jsx)("hr",{},`hr-${s++}`));continue}d(),f(),n.push(p)}return i!==null&&r.push((0,Ot.jsx)("pre",{children:(0,Ot.jsx)("code",{children:i.join(`
`)})},`pre-${s++}`)),g(),(0,Ot.jsx)(Ot.Fragment,{children:r})}var He=require("react/jsx-runtime"),Lp=["\u5E2E\u6211\u68B3\u7406\u8FD9\u6BB5\u8BDD\u7684\u8BBA\u8BC1\u7ED3\u6784","\u89E3\u91CA\u5176\u4E2D\u7684\u4E13\u4E1A\u672F\u8BED\u548C\u80CC\u666F","\u7FFB\u8BD1\u5E76\u6307\u51FA\u5173\u952E\u8BED\u6CD5","\u8FD9\u6BB5\u548C\u6211\u7684\u7814\u7A76\u95EE\u9898\u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F"];function Yc({open:t,onClose:e,seed:r,onGoogle:n,onToast:o}){let[a,i]=zr.default.useState([]),[s,l]=zr.default.useState(""),[d,f]=zr.default.useState(!1),[g,u]=zr.default.useState(""),p=zr.default.useRef(null),_=zr.default.useRef(null),S=r?.id??"",v=r?.text??"",P=r?.context??"",A=zr.default.useCallback(()=>{let E=_.current;E&&requestAnimationFrame(()=>{E.scrollTop=E.scrollHeight})},[]),y=zr.default.useCallback(async(E,{replace:L=!1,history:I}={})=>{let x=String(E??"").trim();if(!x||d)return;p.current?.abort();let O=new AbortController;p.current=O;let D={role:"user",content:x},H=L?[D]:[...I??a,D];i([...H,{role:"assistant",content:""}]),f(!0),u(""),A();let ne="";try{await Ui({messages:H.map(re=>({role:re.role,content:re.content})),selection:v,context:P,signal:O.signal},{onDelta:re=>{ne+=re,i(z=>{if(z.length===0)return z;let oe=[...z],B=oe[oe.length-1];return B?.role!=="assistant"?z:(oe[oe.length-1]={...B,content:ne},oe)}),A()}}),ne.trim()||(u("AI \u6CA1\u6709\u8FD4\u56DE\u5185\u5BB9\uFF0C\u8BF7\u91CD\u8BD5\u6216\u6362\u4E00\u79CD\u95EE\u6CD5\u3002"),i(re=>re.filter((z,oe)=>!(oe===re.length-1&&z.role==="assistant"&&!z.content))))}catch(re){if(Ln(re))return;u(re?.message||"AI \u8BF7\u6C42\u5931\u8D25\u3002"),i(z=>{let oe=z[z.length-1];return oe?.role==="assistant"&&!oe.content?z.slice(0,-1):z})}finally{f(!1)}},[d,P,a,A,v]);if(zr.default.useEffect(()=>{if(!t||!S)return;p.current?.abort(),i([]),u(""),l("");let E="\u8BF7\u89E3\u91CA\u8FD9\u6BB5\u5185\u5BB9\u3002";i([{role:"user",content:E},{role:"assistant",content:""}]),f(!0);let L=new AbortController;p.current=L;let I="";return Ui({messages:[{role:"user",content:E}],selection:v,context:P,signal:L.signal},{onDelta:x=>{I+=x,i(O=>{if(O.length===0)return O;let D=[...O],te=D[D.length-1];return te?.role!=="assistant"?O:(D[D.length-1]={...te,content:I},D)}),A()}}).catch(x=>{Ln(x)||u(x?.message||"AI \u8BF7\u6C42\u5931\u8D25\u3002")}).finally(()=>{f(!1),I.trim()||i(x=>x.filter((O,D)=>!(D===x.length-1&&O.role==="assistant"&&!O.content)))}),()=>L.abort()},[t,S]),zr.default.useEffect(()=>{t||p.current?.abort()},[t]),!t)return null;let N=E=>{E.preventDefault();let L=s.trim();!L||d||(l(""),y(L))},M=E=>{let L=v||a.find(I=>I.role==="user")?.content||"";if(!L.trim()){o?.("\u5148\u5728\u6B63\u6587\u91CC\u9009\u4E2D\u4E00\u6BB5\u6587\u5B57\uFF0C\u518D\u641C\u7D22\u3002");return}n?.(L,E?"scholar":"web")};return(0,He.jsxs)("aside",{className:"dshr-ai","aria-label":"AI \u9605\u8BFB\u52A9\u624B",children:[(0,He.jsxs)("div",{className:"dshr-ai__head",children:[(0,He.jsx)(bn,{size:17}),(0,He.jsx)("strong",{children:"AI \u9605\u8BFB\u52A9\u624B"}),(0,He.jsx)("span",{className:"dshr-chip dshr-chip--brand",children:"DSH \u9ED8\u8BA4\u6A21\u578B"}),(0,He.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:e,"aria-label":"\u5173\u95ED AI \u9762\u677F",title:"\u5173\u95ED",children:(0,He.jsx)(yr,{size:16})})]}),(0,He.jsxs)("div",{className:"dshr-ai__body",ref:_,children:[a.length===0?(0,He.jsxs)("div",{className:"dshr-ai__welcome",children:[(0,He.jsx)("strong",{children:"\u9009\u4E2D\u6B63\u6587\u4E2D\u7684\u4EFB\u610F\u53E5\u5B50"}),"\uFF0C\u6211\u4F1A\u89E3\u91CA\u542B\u4E49\u3001\u672F\u8BED\u548C\u8BED\u6CD5\uFF1B\u4E5F\u53EF\u4EE5\u76F4\u63A5\u8FFD\u95EE\uFF0C\u6216\u8DF3\u8F6C Google / Google \u5B66\u672F\u7EE7\u7EED\u67E5\u3002",(0,He.jsx)("div",{className:"dshr-ai__suggestions",children:Lp.map(E=>(0,He.jsx)("button",{type:"button",onClick:()=>{y(E)},disabled:d,children:E},E))})]}):a.map((E,L)=>(0,He.jsxs)("div",{className:`dshr-ai__msg${E.role==="user"?" dshr-ai__msg--user":""}`,children:[(0,He.jsx)("span",{className:"dshr-ai__role",children:E.role==="user"?"\u4F60":"\u9605\u8BFB\u52A9\u624B"}),E.role==="assistant"?E.content?(0,He.jsx)(Kc,{text:E.content}):d&&L===a.length-1?(0,He.jsxs)("span",{className:"dshr-translation__loading",children:[(0,He.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u601D\u8003\u2026"]}):null:E.content]},L)),g?(0,He.jsxs)("div",{className:"dshr-ai__error",children:[g,(0,He.jsx)("div",{style:{marginTop:6},children:(0,He.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>{y(a.find(E=>E.role==="user")?.content||"\u8BF7\u91CD\u65B0\u89E3\u91CA\u8FD9\u6BB5\u5185\u5BB9\u3002",{replace:!0,history:[]})},children:[(0,He.jsx)(wl,{size:13})," \u91CD\u65B0\u56DE\u7B54"]})})]}):null]}),(0,He.jsx)("div",{className:"dshr-ai__foot",children:(0,He.jsxs)("form",{onSubmit:N,children:[(0,He.jsx)("textarea",{className:"dshr-ai__input",placeholder:"\u8FFD\u95EE\uFF1A\u8FD9\u6BB5\u7684\u8BBA\u8BC1\u6709\u4EC0\u4E48\u95EE\u9898\uFF1F\uFF0F\u672F\u8BED\u662F\u4EC0\u4E48\u610F\u601D\uFF1F",value:s,onChange:E=>l(E.target.value),onKeyDown:E=>{E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),y(s),l(""))},disabled:d,"aria-label":"\u5411 AI \u8FFD\u95EE"}),(0,He.jsxs)("div",{className:"dshr-ai__actions",children:[(0,He.jsx)("span",{className:"dshr-ai__hint",children:"Enter \u53D1\u9001 \xB7 Shift+Enter \u6362\u884C"}),(0,He.jsxs)("div",{style:{display:"flex",gap:5},children:[(0,He.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>M(!1),title:"\u7528 Google \u641C\u7D22\u9009\u4E2D\u7684\u6587\u5B57",children:[(0,He.jsx)(ya,{size:13})," Google"]}),(0,He.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>M(!0),title:"\u7528 Google \u5B66\u672F\u641C\u7D22\u9009\u4E2D\u7684\u6587\u5B57",children:[(0,He.jsx)(wa,{size:13})," \u5B66\u672F"]}),(0,He.jsxs)("button",{type:"submit",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:d||!s.trim(),children:[d?(0,He.jsx)("span",{className:"dshr-spinner"}):(0,He.jsx)(_l,{size:13})," \u53D1\u9001"]})]})]})]})})]})}var b0=require("react");var Ve=require("react/jsx-runtime");function Zc({selection:t,translation:e,onTranslate:r,onAnnotate:n,onExplain:o,onGoogle:a,onCopy:i,onClose:s,onRetry:l}){if(!t?.text?.trim())return null;let d=t.rect,g=476/2,u=typeof window<"u"?window.innerWidth:1200,p=typeof window<"u"?window.innerHeight:800,_=d?d.left+d.width/2:u/2,S=Math.max(g+10,Math.min(u-g-10,_)),v=d&&d.top>70?d.top-46:Math.min(p-190,(d?.bottom??0)+10),P=Math.min(p-180,v+42);return(0,Ve.jsxs)(Ve.Fragment,{children:[(0,Ve.jsxs)("div",{className:"dshr-selection",style:{left:S,top:Math.max(8,v)},role:"toolbar","aria-label":"\u9009\u4E2D\u6587\u5B57\u64CD\u4F5C",onMouseDown:A=>A.preventDefault(),children:[(0,Ve.jsxs)("button",{type:"button",className:"dshr-selection__btn dshr-selection__btn--accent",onClick:()=>r(t),children:[(0,Ve.jsx)(no,{size:14})," \u7FFB\u8BD1"]}),(0,Ve.jsxs)("button",{type:"button",className:"dshr-selection__btn dshr-selection__btn--mark",onClick:()=>n(t),title:"\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u3001\u4FBF\u7B7E\u6216\u5907\u6CE8",children:[(0,Ve.jsx)(_a,{size:14})," \u6807\u8BB0"]}),(0,Ve.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>o(t),children:[(0,Ve.jsx)(bn,{size:14})," AI \u89E3\u91CA"]}),(0,Ve.jsx)("span",{className:"dshr-selection__sep"}),(0,Ve.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>a(t.text,"web"),title:"\u7528 Google \u641C\u7D22",children:[(0,Ve.jsx)(ya,{size:14})," Google"]}),(0,Ve.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>a(t.text,"scholar"),title:"\u7528 Google \u5B66\u672F\u641C\u7D22",children:[(0,Ve.jsx)(wa,{size:14})," \u5B66\u672F"]}),(0,Ve.jsx)("span",{className:"dshr-selection__sep"}),(0,Ve.jsx)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>i(t.text),title:"\u590D\u5236\u9009\u4E2D\u6587\u5B57",children:(0,Ve.jsx)(yl,{size:14})}),(0,Ve.jsx)("button",{type:"button",className:"dshr-selection__btn",onClick:s,title:"\u5173\u95ED","aria-label":"\u5173\u95ED\u9009\u4E2D\u6587\u5B57\u5DE5\u5177\u680F",children:(0,Ve.jsx)(yr,{size:13})})]}),e?(0,Ve.jsxs)("div",{className:"dshr-selection__pop",style:{left:S,top:P},onMouseDown:A=>A.preventDefault(),children:[(0,Ve.jsxs)("div",{className:"dshr-selection__pop-head",children:[(0,Ve.jsx)("span",{children:"\u4E2D\u6587\u8BD1\u6587"}),(0,Ve.jsx)("button",{type:"button",onClick:s,"aria-label":"\u5173\u95ED\u8BD1\u6587",children:(0,Ve.jsx)(yr,{size:12})})]}),e.status==="loading"?(0,Ve.jsxs)("span",{className:"dshr-translation__loading",children:[(0,Ve.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u7FFB\u8BD1\u9009\u4E2D\u5185\u5BB9\u2026"]}):e.status==="error"?(0,Ve.jsxs)("span",{style:{color:"var(--dshr-error)"},children:[e.error||"\u7FFB\u8BD1\u5931\u8D25\u3002"," ",(0,Ve.jsx)("button",{type:"button",className:"dshr-translation__retry",onClick:l,children:"\u91CD\u8BD5"})]}):String(e.zh||"").split(/\n+/u).filter(Boolean).map((A,y)=>(0,Ve.jsx)("p",{style:{margin:y===0?0:"8px 0 0"},children:A},y))]}):null]})}var Xa=It(require("react"),1);var fe=require("react/jsx-runtime");function Qc({settings:t,onChange:e,onClose:r,onClearLibrary:n,onOpenAppearance:o}){let[a,i]=Xa.default.useState(!1);Xa.default.useEffect(()=>{let l=d=>{d.key==="Escape"&&r()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[r]);let s=l=>e({...t,...l});return(0,fe.jsx)("div",{className:"dshr-modal-mask",onMouseDown:l=>{l.target===l.currentTarget&&r()},children:(0,fe.jsxs)("div",{className:"dshr-modal",role:"dialog","aria-modal":"true","aria-label":"\u9605\u8BFB\u8BBE\u7F6E",children:[(0,fe.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:12},children:[(0,fe.jsxs)("div",{style:{flex:1},children:[(0,fe.jsx)("h3",{children:"\u9605\u8BFB\u8BBE\u7F6E"}),(0,fe.jsx)("p",{children:"\u8BBE\u7F6E\u53EA\u4FDD\u5B58\u5728\u672C\u673A\uFF0C\u4E0D\u5F71\u54CD DSH \u7684\u5176\u5B83\u63D2\u4EF6\u3002"})]}),(0,fe.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:r,"aria-label":"\u5173\u95ED\u8BBE\u7F6E",children:(0,fe.jsx)(yr,{size:16})})]}),(0,fe.jsxs)("div",{className:"dshr-settings-row",children:[(0,fe.jsxs)("div",{children:[(0,fe.jsx)("div",{className:"dshr-settings-row__title",children:"\u5B57\u4F53\u3001\u80CC\u666F\u4E0E\u5E03\u5C40"}),(0,fe.jsx)("div",{className:"dshr-settings-row__hint",children:"\u5B57\u4F53\u3001\u5B57\u91CD\u3001\u5B57\u53F7\u3001\u884C\u8DDD\u3001\u9605\u8BFB\u5BBD\u5EA6\u3001\u76EE\u5F55\u5BBD\u5EA6\u3001\u4EAE\u5EA6\u3001\u80CC\u666F\u989C\u8272\u4E0E\u81EA\u5B9A\u4E49\u80CC\u666F\u56FE\u7247\u3002"})]}),(0,fe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:o,children:[(0,fe.jsx)(Po,{size:14})," \u6253\u5F00\u5916\u89C2\u9762\u677F"]})]}),(0,fe.jsxs)("div",{className:"dshr-settings-row",children:[(0,fe.jsxs)("div",{children:[(0,fe.jsx)("div",{className:"dshr-settings-row__title",children:"\u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1"}),(0,fe.jsx)("div",{className:"dshr-settings-row__hint",children:"\u6EDA\u52A8\u5230\u5916\u6587\u6BB5\u843D\u540E\u81EA\u52A8\u7FFB\u8BD1\u6210\u4E2D\u6587\uFF0C\u8BD1\u6587\u663E\u793A\u5728\u539F\u6587\u4E0B\u65B9\u3002"})]}),(0,fe.jsxs)("button",{type:"button",className:"dshr-switch",role:"switch","aria-checked":t.autoTranslate,onClick:()=>s({autoTranslate:!t.autoTranslate}),children:[(0,fe.jsx)("span",{className:"dshr-switch__track"}),t.autoTranslate?"\u5F00\u542F":"\u5173\u95ED"]})]}),(0,fe.jsxs)("div",{className:"dshr-settings-row",children:[(0,fe.jsxs)("div",{children:[(0,fe.jsx)("div",{className:"dshr-settings-row__title",children:"\u6B63\u6587\u5B57\u53F7"}),(0,fe.jsxs)("div",{className:"dshr-settings-row__hint",children:[t.fontSize,"px \xB7 \u9002\u5408\u957F\u7BC7\u9605\u8BFB\u7684\u5B57\u53F7"]})]}),(0,fe.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:5},children:[(0,fe.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--outline",onClick:()=>s({fontSize:Math.max(14,t.fontSize-1)}),"aria-label":"\u51CF\u5C0F\u5B57\u53F7",children:(0,fe.jsx)(va,{size:15})}),(0,fe.jsxs)("span",{className:"dshr-chip",style:{minWidth:46,justifyContent:"center"},children:[t.fontSize,"px"]}),(0,fe.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--outline",onClick:()=>s({fontSize:Math.min(26,t.fontSize+1)}),"aria-label":"\u589E\u5927\u5B57\u53F7",children:(0,fe.jsx)(hn,{size:15})})]})]}),(0,fe.jsxs)("div",{className:"dshr-settings-row",children:[(0,fe.jsxs)("div",{children:[(0,fe.jsx)("div",{className:"dshr-settings-row__title",children:"\u884C\u8DDD"}),(0,fe.jsxs)("div",{className:"dshr-settings-row__hint",children:["\u5F53\u524D ",t.lineHeight.toFixed(2)]})]}),(0,fe.jsx)("input",{type:"range",min:"1.45",max:"2.2",step:"0.05",value:t.lineHeight,onChange:l=>s({lineHeight:Number(l.target.value)}),"aria-label":"\u884C\u8DDD"})]}),(0,fe.jsxs)("div",{className:"dshr-settings-row",children:[(0,fe.jsxs)("div",{children:[(0,fe.jsx)("div",{className:"dshr-settings-row__title",children:"\u7FFB\u8BD1\u4E0E AI"}),(0,fe.jsx)("div",{className:"dshr-settings-row__hint",children:"\u4F7F\u7528 DSH \u5F53\u524D\u9ED8\u8BA4\u6A21\u578B\uFF1B\u7FFB\u8BD1\u53EA\u53D1\u9001\u5F53\u524D\u6BB5\u843D\u6216\u9009\u4E2D\u6587\u5B57\uFF0C\u4E0D\u53D1\u9001\u6574\u672C\u4E66\u3002"})]}),(0,fe.jsx)("span",{className:"dshr-chip dshr-chip--brand",children:"DSH \u9ED8\u8BA4\u6A21\u578B"})]}),(0,fe.jsxs)("div",{className:"dshr-settings-row dshr-settings-row--danger",children:[(0,fe.jsxs)("div",{children:[(0,fe.jsx)("div",{className:"dshr-settings-row__title",children:"\u6E05\u7A7A\u672C\u5730\u4E66\u67B6"}),(0,fe.jsx)("div",{className:"dshr-settings-row__hint",children:"\u5220\u9664\u5DF2\u5BFC\u5165\u7684\u6240\u6709\u6587\u6863\u3001\u4E66\u5355\u3001\u6279\u6CE8\u548C\u9605\u8BFB\u8FDB\u5EA6\uFF0C\u65E0\u6CD5\u64A4\u9500\u3002"})]}),a?(0,fe.jsxs)("div",{style:{display:"flex",gap:6},children:[(0,fe.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm",onClick:()=>i(!1),children:"\u53D6\u6D88"}),(0,fe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--danger",onClick:()=>{n(),i(!1)},children:[(0,fe.jsx)(dn,{size:13})," \u786E\u8BA4\u6E05\u7A7A"]})]}):(0,fe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--danger",onClick:()=>i(!0),children:[(0,fe.jsx)(dn,{size:13})," \u6E05\u7A7A"]})]})]})})}function Jc({book:t,onCancel:e,onConfirm:r}){return Xa.default.useEffect(()=>{let n=o=>{o.key==="Escape"&&e()};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[e]),(0,fe.jsx)("div",{className:"dshr-modal-mask",onMouseDown:n=>{n.target===n.currentTarget&&e()},children:(0,fe.jsxs)("div",{className:"dshr-modal",role:"dialog","aria-modal":"true","aria-label":"\u5220\u9664\u6587\u6863",children:[(0,fe.jsx)("h3",{children:"\u4ECE\u4E66\u67B6\u5220\u9664\uFF1F"}),(0,fe.jsxs)("p",{children:["\u300A",t?.title||"\u672A\u547D\u540D\u6587\u6863","\u300B\u53CA\u5176\u9605\u8BFB\u8FDB\u5EA6\u4F1A\u4ECE\u672C\u673A\u5220\u9664\u3002\u539F\u59CB\u6587\u4EF6\u4E0D\u53D7\u5F71\u54CD\u3002"]}),(0,fe.jsxs)("div",{className:"dshr-modal__actions",children:[(0,fe.jsx)("button",{type:"button",className:"dshr-btn",onClick:e,children:"\u53D6\u6D88"}),(0,fe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--danger",onClick:r,children:[(0,fe.jsx)(dn,{size:14})," \u5220\u9664"]})]})]})})}function ed({message:t}){return t?(0,fe.jsx)("div",{className:"dshr-toast",role:"status",children:t}):null}var ho=It(require("react"),1);var st=require("react/jsx-runtime"),Dp=[{label:"Project Gutenberg",hint:"\u4E03\u4E07\u672C\u516C\u7248\u4E66",href:"https://www.gutenberg.org/"},{label:"Standard Ebooks",hint:"\u7CBE\u6821\u516C\u7248\u4E66",href:"https://standardebooks.org/"},{label:"arXiv",hint:"\u5F00\u653E\u83B7\u53D6\u8BBA\u6587",href:"https://arxiv.org/"},{label:"Open Library",hint:"\u5F00\u653E\u56FE\u4E66\u76EE\u5F55",href:"https://openlibrary.org/"},{label:"Internet Archive",hint:"\u516C\u7248\u4E0E\u5F00\u653E\u9986\u85CF",href:"https://archive.org/"},{label:"Wikisource",hint:"\u516C\u7248\u6587\u732E",href:"https://zh.wikisource.org/"}];function td({open:t,busy:e,onClose:r,onSubmit:n}){let[o,a]=ho.default.useState(""),[i,s]=ho.default.useState(""),l=ho.default.useRef(null);return ho.default.useEffect(()=>{t&&(s(""),window.setTimeout(()=>l.current?.focus(),30))},[t]),ho.default.useEffect(()=>{if(!t)return;let f=g=>{g.key==="Escape"&&!e&&r()};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[t,e,r]),t?(0,st.jsx)("div",{className:"dshr-modal-mask",onMouseDown:f=>{f.target===f.currentTarget&&!e&&r()},children:(0,st.jsxs)("div",{className:"dshr-modal dshr-online-modal",role:"dialog","aria-modal":"true","aria-label":"\u4ECE\u516C\u5F00\u6765\u6E90\u5BFC\u5165",children:[(0,st.jsxs)("div",{className:"dshr-online-modal__head",children:[(0,st.jsxs)("div",{children:[(0,st.jsxs)("h3",{children:[(0,st.jsx)(ka,{size:17})," \u4ECE\u516C\u5F00\u6765\u6E90\u5BFC\u5165"]}),(0,st.jsx)("p",{children:"\u7C98\u8D34\u7535\u5B50\u4E66\u6587\u4EF6\u7684\u76F4\u94FE\uFF0C\u4E0B\u8F7D\u540E\u81EA\u52A8\u52A0\u5165\u4E66\u67B6\u5E76\u6253\u5F00\u3002"})]}),(0,st.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:r,disabled:e,"aria-label":"\u5173\u95ED\u5728\u7EBF\u5BFC\u5165",children:(0,st.jsx)(yr,{size:16})})]}),(0,st.jsxs)("div",{className:"dshr-online-modal__notice",children:[(0,st.jsx)("strong",{children:"\u7248\u6743\u63D0\u793A"}),(0,st.jsx)("span",{children:"\u4EC5\u652F\u6301\u4F60\u786E\u8BA4\u6709\u6743\u4E0B\u8F7D\u7684\u516C\u5F00\u7248\u6743 / \u5F00\u653E\u83B7\u53D6\u8D44\u6E90\u3002\u672C\u529F\u80FD\u4E0D\u5185\u7F6E Z-Library \u7B49\u7248\u6743\u4E0D\u660E\u7684\u4E66\u6E90\uFF0C\u4E5F\u4E0D\u4F1A\u6293\u53D6\u767B\u5F55\u540E\u7684\u79C1\u5BC6\u9875\u9762\u3002"})]}),(0,st.jsxs)("form",{className:"dshr-online-modal__form",onSubmit:f=>{f.preventDefault();let g=o.trim();if(!/^https:\/\//iu.test(g)){s("\u8BF7\u8F93\u5165\u4EE5 https:// \u5F00\u5934\u7684\u7535\u5B50\u4E66\u6587\u4EF6\u76F4\u94FE\u3002");return}s(""),n(g)},children:[(0,st.jsx)("label",{htmlFor:"dshr-online-url",children:"\u6587\u4EF6\u76F4\u94FE"}),(0,st.jsxs)("div",{className:"dshr-online-modal__input",children:[(0,st.jsx)(Al,{size:15}),(0,st.jsx)("input",{ref:l,id:"dshr-online-url",type:"url",value:o,onChange:f=>{a(f.target.value),s("")},placeholder:"https://www.gutenberg.org/ebooks/11.epub3.images",spellCheck:"false",autoComplete:"off",disabled:e})]}),i?(0,st.jsx)("p",{className:"dshr-online-modal__error",children:i}):null,(0,st.jsx)("p",{className:"dshr-online-modal__hint",children:"\u652F\u6301 PDF / EPUB / MOBI / AZW3 / TXT / Markdown / HTML \u76F4\u94FE\uFF1B\u5355\u4E2A\u6587\u4EF6\u6700\u5927 120 MB\u3002 \u53E4\u767B\u5821\u3001Standard Ebooks\u3001arXiv\u3001Open Library\u3001Internet Archive \u7B49\u7AD9\u70B9\u53EF\u6B63\u5E38\u4F7F\u7528\u3002"}),(0,st.jsxs)("div",{className:"dshr-online-modal__actions",children:[(0,st.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--ghost",onClick:r,disabled:e,children:"\u53D6\u6D88"}),(0,st.jsx)("button",{type:"submit",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:e||o.trim()==="",children:e?"\u6B63\u5728\u4E0B\u8F7D\u2026":"\u4E0B\u8F7D\u5E76\u6253\u5F00"})]})]}),(0,st.jsxs)("div",{className:"dshr-online-modal__sources",children:[(0,st.jsx)("span",{children:"\u53BB\u54EA\u91CC\u627E\u4E66\uFF1F"}),(0,st.jsx)("div",{className:"dshr-online-modal__source-list",children:Dp.map(f=>(0,st.jsx)("a",{href:f.href,target:"_blank",rel:"noreferrer",title:f.hint,children:f.label},f.label))})]})]})}):null}var _r=It(require("react"),1);var zt=class t{static GetDistanceBetweenTwoPoint(e,r){return e===null||r===null?1/0:Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))}static GetSegmentLength(e){return t.GetDistanceBetweenTwoPoint(e[0],e[1])}static GetAngleBetweenTwoLine(e,r){let n=e[0].y-e[1].y,o=r[0].y-r[1].y,a=e[1].x-e[0].x,i=r[1].x-r[0].x;return Math.acos((n*o+a*i)/(Math.sqrt(n*n+a*a)*Math.sqrt(o*o+i*i)))}static PointInRect(e,r){return r===null?null:r.x>=e.left&&r.x<=e.width+e.left&&r.y>=e.top&&r.y<=e.top+e.height?r:null}static GetRotatedPoint(e,r,n){return{x:e.x*Math.cos(n)+e.y*Math.sin(n)+r.x,y:e.y*Math.cos(n)-e.x*Math.sin(n)+r.y}}static LimitPointToCircle(e,r,n){if(t.GetDistanceBetweenTwoPoint(e,n)<=r)return n;let o=e.x,a=e.y,i=n.x,s=n.y,l=Math.sqrt(Math.pow(r,2)*Math.pow(o-i,2)/(Math.pow(o-i,2)+Math.pow(a-s,2)))+o;n.x<0&&(l*=-1);let d=(l-o)*(a-s)/(o-i)+a;return o-i+a===0&&(d=r),{x:l,y:d}}static GetIntersectBetweenTwoSegment(e,r,n){return t.PointInRect(e,t.GetIntersectBeetwenTwoLine(r,n))}static GetIntersectBeetwenTwoLine(e,r){let n=e[0].y-e[1].y,o=r[0].y-r[1].y,a=e[1].x-e[0].x,i=r[1].x-r[0].x,s=e[0].x*e[1].y-e[1].x*e[0].y,l=r[0].x*r[1].y-r[1].x*r[0].y,d=n*l-o*s,f=a*l-i*s,g=-((s*i-l*a)/(n*i-o*a)),u=-((n*l-o*s)/(n*i-o*a));if(isFinite(g)&&isFinite(u))return{x:g,y:u};if(Math.abs(d-f)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(e,r){let n=Math.abs(e.x-r.x),o=Math.abs(e.y-r.y),a=Math.max(n,o),i=[e];function s(l,d,f,g,u){return d>l?l+u*(f/g):d<l?l-u*(f/g):l}for(let l=1;l<=a;l+=1)i.push({x:s(e.x,r.x,n,a,l),y:s(e.y,r.y,o,a,l)});return i}};var Wo=class{constructor(e,r,n,o){this.direction=e;this.corner=r;this.pageWidth=parseInt(n,10),this.pageHeight=parseInt(o,10)}direction;corner;angle;position;rect;topIntersectPoint=null;sideIntersectPoint=null;bottomIntersectPoint=null;pageWidth;pageHeight;calc(e){try{return this.position=this.calcAngleAndPosition(e),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){let e=[],r=!1;return e.push(this.rect.topLeft),e.push(this.topIntersectPoint),this.sideIntersectPoint===null?r=!0:(e.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(r=!1)),e.push(this.bottomIntersectPoint),(r||this.corner==="bottom")&&e.push(this.rect.bottomLeft),e}getBottomClipArea(){let e=[];return e.push(this.topIntersectPoint),this.corner==="top"?e.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&e.push({x:this.pageWidth,y:0}),e.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?zt.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&e.push(this.sideIntersectPoint):this.corner==="top"&&e.push({x:this.pageWidth,y:this.pageHeight}),e.push(this.bottomIntersectPoint),e.push(this.topIntersectPoint),e}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){let e=zt.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?e:Math.PI-e}calcAngleAndPosition(e){let r=e;if(this.updateAngleAndGeometry(r),this.corner==="top"?r=this.checkPositionAtCenterLine(r,{x:0,y:0},{x:0,y:this.pageHeight}):r=this.checkPositionAtCenterLine(r,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(r.x-this.pageWidth)<1&&Math.abs(r.y)<1)throw new Error("Point is too small");return r}updateAngleAndGeometry(e){this.angle=this.calculateAngle(e),this.rect=this.getPageRect(e)}calculateAngle(e){let r=this.pageWidth-e.x+1,n=this.corner==="bottom"?this.pageHeight-e.y:e.y,o=2*Math.acos(r/Math.sqrt(n*n+r*r));n<0&&(o=-o);let a=Math.PI-o;if(!isFinite(o)||a>=0&&a<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(o=-o),o}getPageRect(e){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],e):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],e)}getRectFromBasePoint(e,r){return{topLeft:this.getRotatedPoint(e[0],r),topRight:this.getRotatedPoint(e[1],r),bottomLeft:this.getRotatedPoint(e[2],r),bottomRight:this.getRotatedPoint(e[3],r)}}getRotatedPoint(e,r){return{x:e.x*Math.cos(this.angle)+e.y*Math.sin(this.angle)+r.x,y:e.y*Math.cos(this.angle)-e.x*Math.sin(this.angle)+r.y}}calculateIntersectPoint(e){let r={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=zt.GetIntersectBetweenTwoSegment(r,[e,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=zt.GetIntersectBetweenTwoSegment(r,[e,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=zt.GetIntersectBetweenTwoSegment(r,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=zt.GetIntersectBetweenTwoSegment(r,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=zt.GetIntersectBetweenTwoSegment(r,[e,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=zt.GetIntersectBetweenTwoSegment(r,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(e,r,n){let o=e,a=zt.LimitPointToCircle(r,this.pageWidth,o);o!==a&&(o=a,this.updateAngleAndGeometry(o));let i=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2)),s=this.rect.bottomRight,l=this.rect.topLeft;if(this.corner==="bottom"&&(s=this.rect.topRight,l=this.rect.bottomLeft),s.x<=0){let d=zt.LimitPointToCircle(n,i,l);d!==o&&(o=d,this.updateAngleAndGeometry(o))}return o}getSegmentToShadowLine(){let e=this.getShadowStartPoint(),r=e!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint;return[e,r]}};var os={slide:250,cover:300,flip:500},zp="cubic-bezier(.25,.1,.25,1)",rd=t=>`polygon(${t.filter(Boolean).map(e=>`${e.x}px ${e.y}px`).join(",")})`,Bp=0;function nd(t,e){let r=t.getBoundingClientRect(),n=e.querySelectorAll(".dshr-block,.dshr-chapter__kicker,.dshr-chapter__nav");return[...n.length?n:e.children].map(o=>{let a=o.getBoundingClientRect();return{element:o,top:a.top-r.top+t.scrollTop,bottom:a.bottom-r.top+t.scrollTop,left:a.left-r.left,width:a.width,height:a.height}})}function Va(t){let e=[t,...t.querySelectorAll("*")],r=new Map,n=`dshr-snapshot-${++Bp}-`;for(let o of e){o.id&&(r.set(o.id,n+r.size),o.id=r.get(o.id));for(let a of["data-seg-id","data-anno-block","data-anno-id","autofocus"])o.removeAttribute(a)}if(r.size)for(let o of e)for(let a of[...o.attributes]){if(a.name==="id")continue;let i=a.value.replace(/url\(\s*(['"]?)#([^\s)'";]+)\1\s*\)/g,(s,l,d)=>r.has(d)?`url(#${r.get(d)})`:s);(a.name==="href"||a.name==="xlink:href")&&r.has(i.slice(1))&&(i="#"+r.get(i.slice(1))),i!==a.value&&o.setAttribute(a.name,i)}}function od(t,e,r,n,o,a){let i=document.createElement("div");i.className="dshr-turn-page";let s=t.getBoundingClientRect(),l=e.getBoundingClientRect(),d=e.cloneNode(!1);Va(d),Object.assign(d.style,{position:"absolute",left:`${l.left-s.left}px`,top:"0",width:`${l.width}px`,height:"100%",padding:"0",margin:"0"}),i.append(d);let f=new Map([[e,d]]),g=p=>{if(f.has(p))return f.get(p);let _=p.cloneNode(!1);return Va(_),g(p.parentElement).append(_),f.set(p,_),_};for(let p of r){if(p.bottom<=n+48||p.top>=n+t.clientHeight-o||!p.height)continue;if(p.height>t.clientHeight*8)throw new Error("Snapshot block exceeds viewport budget");let _=document.createTreeWalker(p.element,4294967295);for(let A=p.element;A;A=_.nextNode())if(a.nodes-=1,A.nodeType===3&&(a.text-=A.length),a.nodes<0||a.text<0)throw new Error("Snapshot exceeds DOM budget");let S=p.element.cloneNode(!0);Va(S),Object.assign(S.style,{position:"absolute",margin:"0",boxSizing:"border-box",left:`${p.left-(l.left-s.left)}px`,top:`${p.top-n}px`,width:`${p.width}px`,height:`${p.height}px`}),g(p.element.parentElement).append(S);let v=[p.element,...p.element.querySelectorAll("*")],P=[S,...S.querySelectorAll("*")];v.forEach((A,y)=>{A.scrollLeft&&(P[y].scrollLeft=A.scrollLeft),A.tagName==="CANVAS"&&(P[y].width=A.width,P[y].height=A.height,P[y].getContext("2d")?.drawImage(A,0,0))})}let u=t.querySelector(":scope > .dshr-anno-layer");if(u){let p=u.cloneNode(!1);Object.assign(p.style,{top:"0",height:"100%"});for(let _ of u.children){let S=Number.parseFloat(_.style.top),v=Number.parseFloat(_.style.height)||24;if(S+v<=n+48||S>=n+t.clientHeight-o)continue;if(--a.nodes<0)throw new Error("Snapshot marks exceed DOM budget");let P=_.cloneNode(!0);Va(P),P.style.top=`${S-n}px`,p.append(P)}i.append(p)}for(let[p,_]of[["top",48],["bottom",o]]){let S=document.createElement("div");S.className=`dshr-turn-mask dshr-turn-mask--${p}`,S.style.height=`${_}px`,i.append(S)}return i}function $p(t,e,r){let n=new Wo(0,"bottom",String(Math.round(t)),String(Math.round(e))),o=Math.max(1e-4,Math.min(.9999,r)),a=Math.min(e*.22,t*.28)*Math.sin(Math.PI*o);if(!n.calc({x:t*(1-2*o),y:e-a-.1}))return null;let i=n.getActiveCorner(),s=n.getAngle(),l=n.getFlippingClipArea().filter(Boolean).map(d=>zt.GetRotatedPoint({x:d.x-i.x,y:d.y-i.y},{x:0,y:0},s));return{reveal:rd(n.getBottomClipArea()),fold:rd(l),transform:`translate3d(${i.x}px,${i.y}px,0) rotate(${s}rad)`,shadow:n.getShadowStartPoint(),shadowAngle:n.getShadowAngle()+Math.PI*1.5,strength:Math.sin(Math.PI*o)}}function as(t,e,r,n,o){let a={nodes:1800,text:64e3};return{page:od(t,e,r,n,o,a),budget:a,width:t.clientWidth,height:t.clientHeight}}function ad({reader:t,scroll:e,stage:r,records:n,from:o,to:a,fromBottom:i,toBottom:s,mode:l,direction:d,departing:f}){let g=Object.hasOwn(os,l)?l:"slide",u=e.getBoundingClientRect(),p=t.getBoundingClientRect(),_=document.createElement("div");_.className=`dshr-flow-transition is-${g}`,_.dataset.direction=String(d),_.setAttribute("aria-hidden","true"),_.inert=!0,Object.assign(_.style,{left:`${u.left-p.left}px`,top:`${u.top-p.top}px`,width:`${e.clientWidth}px`,height:`${e.clientHeight}px`});let S=window.getComputedStyle(e);for(let D of Array.from(S))D.startsWith("--dshr-")&&_.style.setProperty(D,S.getPropertyValue(D));let v=f??as(e,r,n,o,i),P=v.page,A=od(e,r,n,a,s,v.budget);P.dataset.turnPage="old",A.dataset.turnPage="new",_.append(P,A);let y=[],N=0,M,E=!1,L,I=()=>{E=!0,cancelAnimationFrame(N),clearTimeout(M);for(let D of y)D.cancel();L?.(),_.remove()},x=(D,te)=>{let H=D.animate(te,{duration:os[g],easing:zp,fill:"both"});return H.finished.catch(()=>{}),y.push(H),H};try{if(t.append(_),g==="slide")x(P,[{transform:"translateX(0)"},{transform:`translateX(${-d*100}%)`}]),x(A,[{transform:`translateX(${d*100}%)`},{transform:"translateX(0)"}]);else if(g==="cover"){let D=d>0?A:P,te=d>0?P:A;te.dataset.turnRole="stationary",D.dataset.turnRole="moving",te.style.zIndex="0",D.style.zIndex="1",D.classList.add("has-edge-shadow"),x(D,d>0?[{transform:"translateX(100%)"},{transform:"translateX(0)"}]:[{transform:"translateX(0)"},{transform:"translateX(100%)"}])}else{let D=d>0?P:A,te=d>0?A:P;D.style.zIndex="0",te.style.zIndex="1";let H=document.createElement("div");H.className="dshr-turn-fold";let ne=document.createElement("div");ne.className="dshr-turn-fold-shadow",te.append(ne),_.append(H);let re=x(_,[{opacity:1},{opacity:1}]),z=B=>{let q=d>0?B:1-B;if(q<=0){te.style.clipPath="inset(0 100% 0 0)",H.hidden=!0;return}if(q>=1){te.style.clipPath="none",H.hidden=!0,ne.hidden=!0;return}let ae=$p(e.clientWidth,e.clientHeight,q);ae&&(H.hidden=!1,ne.hidden=!1,te.style.clipPath=ae.reveal,H.style.clipPath=ae.fold,H.style.transform=ae.transform,ae.shadow&&Object.assign(ne.style,{opacity:String(ae.strength*.16),transform:`translate3d(${ae.shadow.x}px,${ae.shadow.y-e.clientHeight}px,0) rotate(${ae.shadowAngle}rad)`}))};z(0);let oe=()=>{E||(z(re.effect.getComputedTiming().progress??0),N=requestAnimationFrame(oe))};N=requestAnimationFrame(oe)}}catch(D){throw I(),D}let O=Promise.all(y.map(D=>D.finished.catch(()=>{})));return{overlay:_,width:e.clientWidth,height:e.clientHeight,cancel:I,async play(){try{await Promise.race([O,new Promise(D=>{L=D,M=setTimeout(D,os[g]+300)})])}finally{I()}}}}var Bt=require("react/jsx-runtime"),sd='input, textarea, select, [contenteditable="true"]',ld=".dshr-modal-mask,.dshr-modal,.dshr-appearance-panel,.dshr-anno-panel,.dshr-ai,.dshr-selection,.dshr-online-modal,.dshr-anno-composer,.dshr-pdf-translation-panel",Hp=".dshr-topbar,.dshr-immersive-controls,.dshr-toc,.dshr-paged-controls,"+ld+","+sd,Up=()=>window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,id=220,po=null;function cd({enabled:t,animation:e,bookMode:r=!1,bookFrame:n=!1,pdfMode:o=!1,frameTop:a=52,frameLeft:i=0,leftOffset:s,readerKey:l,canPrevChapter:d,canNextChapter:f,chapterEntry:g,onChapterTurn:u,onChapterEntered:p}){let[_,S]=_r.default.useState({page:1,pages:1}),[v,P]=_r.default.useState({top:48,bottom:56}),[A,y]=_r.default.useState(null),N=_r.default.useRef(null),M=_r.default.useRef(null),E=_r.default.useRef(null),L=_r.default.useRef(0),I=_r.default.useRef(-1/0),x=_r.default.useRef({});if(_r.default.useLayoutEffect(()=>{x.current={canPrevChapter:d,canNextChapter:f,chapterEntry:g,onChapterTurn:u,onChapterEntered:p,animation:e}}),_r.default.useLayoutEffect(()=>{let ne=E.current;if(E.current=null,!t)return;let re=N.current?.closest(".dshr-reader"),z=re?.querySelector(".dshr-content,.dshr-pdf-scroll");if(!z)return;let oe=z.classList.contains("dshr-pdf-scroll"),B=z.querySelector(".dshr-content__inner"),q=oe?null:x.current.chapterEntry,ae=q&&ne?.entry===q?ne.snapshot:null,F=q?.edge,de=q?.direction,ve=-1/0,Ae=!1,J=Tc(),ge={scrollBehavior:z.style.scrollBehavior,overflowAnchor:z.style.overflowAnchor};z.style.scrollBehavior="auto",z.style.overflowAnchor="none",z.classList.add("dshr-paged-scroll");let Ue=!1,we=!0,Be=!1,Xe=0,ft=0,h=0,c=[],k=null,b=[],Y=null,ce=[],he=!oe&&B?document.createElement("div"):null;he&&(he.className="dshr-page-tail",he.setAttribute("aria-hidden","true"),z.append(he));let ye=()=>{z.dataset.readerNavigation=String(++L.current)};ye(),P({top:48,bottom:56});let Te=()=>{if(Ue)return;z.dataset.readerPage=String(J.page),z.dataset.readerPages=String(J.pages),z.dataset.readerTarget=String(J.top),S(pe=>pe.page===J.page&&pe.pages===J.pages?pe:{page:J.page,pages:J.pages});let K=We(J.top);P(pe=>pe.bottom===K?pe:{top:48,bottom:K})},We=K=>{let pe=K+z.clientHeight-56,be=c.find(Oe=>Oe.top<pe-.5&&Oe.bottom>pe+.5&&Oe.bottom-Oe.top<=z.clientHeight-48-56&&Oe.top>K+48);return be?Math.max(56,z.clientHeight-(be.top-K)):56},Ce=()=>{Math.abs(z.scrollTop-J.top)>.5&&(z.scrollTop=J.top)},ue=K=>{if(Ue||oe||Ae||!B||!z.clientHeight||!z.clientWidth)return;if(Be){we=!0;return}c=Sc(z,B),ce=nd(z,B);let pe=kc(c,z.clientHeight);if(he){let Oe=z.scrollHeight-he.offsetHeight,xe=Math.max(0,Math.ceil(pe.at(-1)+z.clientHeight-Oe));he.style.height=xe+"px"}let be=K;if(be==null&&(F==="start"?be=pe[0]:F==="end"?be=pe.at(-1):q?be=Math.max(0,Math.min(1,Number(q.scrollRatio)||0))*Math.max(0,z.scrollHeight-z.clientHeight):be=Ec(k,z,z.scrollTop)),J.replace(pe,be),we=!1,Ce(),k=qi(c,J.top,z),Te(),q){let Oe=q;q=null,ve=performance.now();let xe=ae;ae=null,xe&&xe.width===z.clientWidth&&xe.height===z.clientHeight&&je(J.top,Oe.direction,xe),x.current.onChapterEntered?.(Oe,Fo(z))}},ze=K=>{Ue||oe||Ae||(we=!0,Be&&Y&&(Y.width!==z.clientWidth||Y.height!==z.clientHeight||K?.type==="loadingdone")&&Y.cancel(),!ft&&(ft=requestAnimationFrame(()=>{ft=0,Be||ue()})))},dt=()=>{Xe+=1,Y?.cancel(),Y=null,delete z.dataset.readerTurning,re.classList.remove("dshr-is-turning"),Be=!1,b.length=0},$e=()=>B?.animate&&!Up(),je=async(K,pe,be)=>{Be=!0;let Oe=++Xe;z.dataset.readerTurning="true";try{$e()&&(Y=ad({reader:re,scroll:z,stage:B,records:ce,from:K,to:J.top,fromBottom:We(K),toBottom:We(J.top),mode:x.current.animation,direction:pe,departing:be}),re.classList.add("dshr-is-turning")),Ce(),Y&&await Y.play()}catch{}finally{!Ue&&Oe===Xe&&(Y?.cancel(),Y=null,delete z.dataset.readerTurning,re.classList.remove("dshr-is-turning"),Be=!1,we?ue():(Ce(),Te()),b.length&&ke(b.shift()))}},De=K=>{let{canPrevChapter:pe,canNextChapter:be,onChapterTurn:Oe}=x.current;if(!Oe||!(K<0?pe:be))return;Ae=!0,b.length=0,ye();let xe={edge:K>0?"start":"end",direction:K};if($e())try{E.current={entry:xe,snapshot:as(z,B,ce,J.top,We(J.top))}}catch{}Oe(K,xe)},ke=(K,pe=!1)=>{if(Ue||Ae)return;if(po=re,K=K>0?1:-1,oe){z.dispatchEvent(new CustomEvent("dshr-pdf-page-turn",{detail:K}));return}if(q){ue();return}if(K===de&&(pe||Be||performance.now()-ve<id))return;if(de=null,Be){b.length<32&&b.push(K);return}if(we&&ue(),we||Be)return;let be=J.top;if(!J.turn(K)){De(K);return}F=null,k=qi(c,J.top,z),ye(),Te(),je(be,K)};M.current=ke;let ht=()=>{oe||Be||Ae||we||h||(h=requestAnimationFrame(()=>{h=0,!Ue&&!Be&&!Ae&&!we&&Ce()}))},Ge=K=>{if(oe||!B||(K.preventDefault(),Ae))return;dt(),de=null,F=null,ae=null;let pe=K.detail||{},be=Number(pe.top)||0;pe.ratio!=null&&(be=Number(pe.ratio)*Math.max(0,z.scrollHeight-z.clientHeight)),pe.element&&B.contains(pe.element)&&(be=pe.element.getBoundingClientRect().top-z.getBoundingClientRect().top+z.scrollTop-48),ye(),k=null,ue(Math.max(0,be))},xt=K=>{if(K.target instanceof Element&&K.target.closest(Hp)||K.ctrlKey||K.metaKey||Math.abs(K.deltaY)<8&&Math.abs(K.deltaX)<8)return;K.preventDefault();let pe=performance.now(),be=pe-I.current;I.current=pe,be>=id&&ke(K.deltaY>0||K.deltaX>0?1:-1)},Jt=K=>{if(K.defaultPrevented||K.repeat||K.ctrlKey||K.metaKey||K.altKey||!z.isConnected||K.target instanceof Element&&K.target.closest(sd+","+ld+",.dshr-immersive-controls"))return;let pe=K.target instanceof Element&&K.target.closest(".dshr-root"),be=K.target instanceof Element&&K.target.closest(".dshr-reader");if(be&&be!==re||pe&&!pe.contains(re)||!pe&&(po?.isConnected?po!==re:[...document.querySelectorAll(".dshr-reader")].find(Ft=>Ft.getBoundingClientRect().height>0)!==re))return;let Oe=window.getSelection?.();if(Oe&&!Oe.isCollapsed)return;let xe=["ArrowDown","ArrowRight","PageDown"," "].includes(K.key),Qe=["ArrowUp","ArrowLeft","PageUp"].includes(K.key);!xe&&!Qe||(K.preventDefault(),ke(xe?1:-1))},pr=K=>{let{page:pe,pages:be}=K.detail||{};Number.isFinite(pe)&&pe>=1&&Number.isFinite(be)&&be>=1&&S({page:pe,pages:be})},ot=K=>{ke(Number(K.detail)>0?1:-1)},Lt=()=>{po=re};re.addEventListener("pointerdown",Lt),z.addEventListener("wheel",xt,{passive:!1}),z.addEventListener("scroll",ht,{passive:!0}),z.addEventListener("dshr-flow-navigate",Ge),z.addEventListener("dshr-page-turn",ot),z.addEventListener("dshr-pdf-page-state",pr),window.addEventListener("keydown",Jt);let _t,fr,Dt,er=()=>{if(Ue)return;let K=z.getBoundingClientRect(),pe=re.getBoundingClientRect(),be={right:Math.max(0,pe.right-K.right),center:K.left-pe.left+K.width/2,top:K.top-pe.top+K.height/2,bottom:Math.max(0,pe.bottom-K.bottom)};y(Oe=>Oe&&Object.keys(be).every(xe=>Math.abs(Oe[xe]-be[xe])<.5)?Oe:be)};if(er(),typeof ResizeObserver=="function"&&(Dt=new ResizeObserver(er),Dt.observe(z),Dt.observe(re)),oe){let K=Number(z.dataset.pdfPage),pe=Number(z.dataset.pdfPages);K>0&&pe>0&&S({page:K,pages:pe})}else ue(),typeof ResizeObserver=="function"&&(_t=new ResizeObserver(ze),_t.observe(z),_t.observe(B)),typeof MutationObserver=="function"&&(fr=new MutationObserver(ze),fr.observe(B,{subtree:!0,childList:!0,characterData:!0})),B.addEventListener("load",ze,!0),document.fonts?.addEventListener("loadingdone",ze),document.fonts?.ready.then(ze);return()=>{Ue=!0,dt(),cancelAnimationFrame(ft),cancelAnimationFrame(h),_t?.disconnect(),Dt?.disconnect(),fr?.disconnect(),B?.removeEventListener("load",ze,!0),document.fonts?.removeEventListener("loadingdone",ze),z.removeEventListener("wheel",xt),z.removeEventListener("scroll",ht),z.removeEventListener("dshr-flow-navigate",Ge),z.removeEventListener("dshr-page-turn",ot),z.removeEventListener("dshr-pdf-page-state",pr),window.removeEventListener("keydown",Jt),re.removeEventListener("pointerdown",Lt),po===re&&(po=null),z.classList.remove("dshr-paged-scroll"),Object.assign(z.style,ge);for(let K of["readerPage","readerPages","readerTarget","readerNavigation","readerTurning"])delete z.dataset[K];he?.remove(),M.current=null}},[t,r,l]),!t)return null;let{page:O,pages:D}=_,te=O<=1&&!d,H=O>=D&&!f&&!(o&&D<=1);return(0,Bt.jsxs)("div",{ref:N,className:`dshr-paged-controls${r?" is-book":""}${n?" has-book-frame":""}`,style:{"--dshr-paged-left":`${Math.max(10,Number(s)||10)}px`,...A?{"--dshr-paged-right":`${A.right+12}px`,"--dshr-paged-center":`${A.center}px`,"--dshr-paged-top":`${A.top}px`,"--dshr-paged-bottom":`${A.bottom+14}px`}:{},"--dshr-book-frame-top":`${Math.max(0,Number(a)||0)}px`,"--dshr-book-frame-left":`${Math.max(0,Number(i)||0)}px`,"--dshr-book-top-cover":`${v.top}px`,"--dshr-book-bottom-cover":`${v.bottom}px`},"aria-live":"polite",children:[n?(0,Bt.jsxs)(Bt.Fragment,{children:[(0,Bt.jsx)("div",{className:"dshr-book-mask dshr-book-mask--top","aria-hidden":"true"}),(0,Bt.jsx)("div",{className:"dshr-book-mask dshr-book-mask--bottom","aria-hidden":"true"})]}):null,(0,Bt.jsx)("button",{type:"button",className:"dshr-paged-btn dshr-paged-prev",onClick:ne=>{te||M.current?.(-1,ne.detail>1)},disabled:te,title:"\u4E0A\u4E00\u9875\uFF08\u2190 / \u2191 / PageUp\uFF09","aria-label":"\u4E0A\u4E00\u9875",children:(0,Bt.jsx)(oo,{size:20})}),(0,Bt.jsx)("button",{type:"button",className:"dshr-paged-btn dshr-paged-next",onClick:ne=>{H||M.current?.(1,ne.detail>1)},disabled:H,title:"\u4E0B\u4E00\u9875\uFF08\u2192 / \u2193 / PageDown / \u7A7A\u683C\uFF09","aria-label":"\u4E0B\u4E00\u9875",children:(0,Bt.jsx)(ao,{size:20})}),(0,Bt.jsxs)("div",{className:"dshr-paged-status",title:"\u7FFB\u9875\u8FDB\u5EA6",children:[(0,Bt.jsx)("b",{children:O}),(0,Bt.jsx)("span",{children:"/"}),(0,Bt.jsx)("em",{children:D})]})]})}var pn=It(require("react"),1);var hs=Object.freeze([Object.freeze({id:"serif",label:"\u5B8B\u4F53 / Serif",stack:'"Songti SC", "Noto Serif SC", "Source Han Serif SC", "STSong", "SimSun", "\u5B8B\u4F53", Georgia, "Times New Roman", serif'}),Object.freeze({id:"sans",label:"\u9ED1\u4F53 / Sans",stack:'"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", "Segoe UI", system-ui, -apple-system, sans-serif'}),Object.freeze({id:"kai",label:"\u6977\u4F53 / Kai",stack:'"Kaiti SC", "STKaiti", "KaiTi", "\u6977\u4F53", "Noto Serif SC", "Songti SC", "SimSun", serif'}),Object.freeze({id:"system",label:"\u7CFB\u7EDF\u9ED8\u8BA4",stack:'system-ui, -apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif'})]),us=Object.freeze([Object.freeze({value:400,label:"\u5E38\u89C4"}),Object.freeze({value:500,label:"\u4E2D\u7B49"}),Object.freeze({value:600,label:"\u52A0\u7C97"})]),nx=Object.freeze([Object.freeze({id:"scroll",label:"\u6EDA\u52A8"}),Object.freeze({id:"book",label:"\u6A2A\u7248"})]),fd=Object.freeze([Object.freeze({id:"slide",label:"\u6A2A\u5411\u6ED1\u9875",hint:"\u524D\u540E\u4E24\u9875\u8FDE\u7EED\u5E73\u79FB\u8854\u63A5\uFF0C\u4E0D\u6DE1\u51FA\u6B63\u6587"}),Object.freeze({id:"cover",label:"\u4E66\u9875\u8986\u76D6",hint:"\u65B0\u9875\u4ECE\u53F3\u4FA7\u8986\u76D6\u9759\u6B62\u5E95\u9875\uFF0C\u56DE\u7FFB\u65F6\u63ED\u5F00\u5F53\u524D\u9875"}),Object.freeze({id:"flip",label:"3D \u4E66\u9875",hint:"\u4ECE\u53F3\u4E0B\u9875\u89D2\u5411\u4E66\u810A\u6298\u53E0\uFF0C\u5E26\u7EB8\u80CC\u4E0E\u52A8\u6001\u9634\u5F71"})]),Za=Object.freeze([Object.freeze({id:"paper",label:"\u7EB8\u5F20",bg:"#fbf7ee",ink:"#2b2a26",muted:"#736f64",border:"rgba(43, 42, 38, 0.15)",accent:"#9a6b2f"}),Object.freeze({id:"white",label:"\u767D\u8272",bg:"#ffffff",ink:"#1f2328",muted:"#5c6370",border:"rgba(31, 35, 40, 0.13)",accent:"#3f5ce0"}),Object.freeze({id:"sepia",label:"\u7F8A\u76AE\u7EB8",bg:"#f2e6cf",ink:"#453322",muted:"#715f47",border:"rgba(69, 51, 34, 0.18)",accent:"#8f5a24"}),Object.freeze({id:"green",label:"\u62A4\u773C\u7EFF",bg:"#e3efe4",ink:"#263a2b",muted:"#556b5a",border:"rgba(38, 58, 43, 0.17)",accent:"#3d6a47"}),Object.freeze({id:"night",label:"\u591C\u95F4",bg:"#1c1e22",ink:"#e9e6dd",muted:"#a6a29a",border:"rgba(233, 230, 221, 0.16)",accent:"#d2a76b"}),Object.freeze({id:"custom",label:"\u81EA\u5B9A\u4E49"})]),Gt=Object.freeze({fontSize:18,lineHeight:1.85,fontFamily:"serif",fontWeight:400,contentWidth:760,tocWidth:260,readingMode:"scroll",pageAnimation:"slide",bookAnimation:"slide",brightness:1,backgroundPreset:"paper",customBackground:"#fbf7ee",textTone:"auto",backgroundImageKey:"",backgroundImageOpacity:.26,backgroundImageBlur:0}),Pe=Object.freeze({fontSize:Object.freeze({min:13,max:34,step:1}),lineHeight:Object.freeze({min:1.35,max:2.4,step:.05}),contentWidth:Object.freeze({min:520,max:1600,step:20}),tocWidth:Object.freeze({min:180,max:520,step:10}),brightness:Object.freeze({min:.6,max:1.2,step:.01}),backgroundImageOpacity:Object.freeze({min:0,max:.8,step:.01}),backgroundImageBlur:Object.freeze({min:0,max:12,step:1})}),jo=Object.freeze(us.map(t=>t.value)),Wp=Object.freeze(Za.map(t=>t.id)),jp=new Map(Za.map(t=>[t.id,t])),dd=new Map(hs.map(t=>[t.id,t])),Gp=Object.freeze(["auto","dark","light"]),ls=Object.freeze({ink:"#181511",muted:"#6b6559",border:"rgba(32, 29, 24, 0.15)",tone:"dark"}),cs=Object.freeze({ink:"#f8f5ec",muted:"#b3ada0",border:"rgba(245, 242, 233, 0.18)",tone:"light"}),qp="#8a5a24",Xp="#d8b06a",hd=Object.freeze({white:"#ffffff",black:"#000000",red:"#ff0000",lime:"#00ff00",blue:"#0000ff",yellow:"#ffff00",aqua:"#00ffff",cyan:"#00ffff",fuchsia:"#ff00ff",magenta:"#ff00ff",silver:"#c0c0c0",gray:"#808080",grey:"#808080",maroon:"#800000",olive:"#808000",green:"#008000",purple:"#800080",teal:"#008080",navy:"#000080",orange:"#ffa500",pink:"#ffc0cb",brown:"#a52a2a",gold:"#ffd700",beige:"#f5f5dc",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",turquoise:"#40e0d0",salmon:"#fa8072",coral:"#ff7f50",indigo:"#4b0082",violet:"#ee82ee",wheat:"#f5deb3",tan:"#d2b48c",snow:"#fffafa",linen:"#faf0e6"});function fo(t){return Math.max(0,Math.min(255,Math.round(t)))}function Vp(t){let e=t.slice(1);if(!/^[0-9a-f]+$/iu.test(e))return null;if(e.length===3||e.length===4){let[r,n,o]=e.slice(0,3).split("").map(a=>Number.parseInt(`${a}${a}`,16));return{r,g:n,b:o}}return e.length===6||e.length===8?{r:Number.parseInt(e.slice(0,2),16),g:Number.parseInt(e.slice(2,4),16),b:Number.parseInt(e.slice(4,6),16)}:null}function Kp(t){let e=/^([+-]?(?:\d+\.?\d*|\.\d+))(%?)$/u.exec(t);if(!e)return null;let r=Number(e[1]);return Number.isFinite(r)?(e[2]==="%"&&(r=r/100*255),fo(r)):null}function Yp(t){let e=t.replace(/\//gu," ").split(/[\s,]+/u).filter(Boolean);if(e.length<3)return null;let r=e.slice(0,3).map(Kp);return r.some(n=>n===null)?null:{r:r[0],g:r[1],b:r[2]}}function is(t,e,r){let n=r;return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Zp(t){let e=t.replace(/\//gu," ").split(/[\s,]+/u).filter(Boolean);if(e.length<3)return null;let r=Number.parseFloat(e[0]),n=Number.parseFloat(e[1]),o=Number.parseFloat(e[2]);if(![r,n,o].every(Number.isFinite))return null;let a=Math.max(0,Math.min(100,n))/100,i=Math.max(0,Math.min(100,o))/100,s=(r%360+360)%360/360;if(a===0){let f=fo(i*255);return{r:f,g:f,b:f}}let l=i<.5?i*(1+a):i+a-i*a,d=2*i-l;return{r:fo(is(d,l,s+1/3)*255),g:fo(is(d,l,s)*255),b:fo(is(d,l,s-1/3)*255)}}function Ka(t){if(typeof t!="string")return null;let e=t.trim().toLowerCase();if(!e)return null;if(e.startsWith("#"))return Vp(e);if(e in hd)return Ka(hd[e]);let r=/^([a-z]+)\((.*)\)$/u.exec(e);if(!r)return null;let n=r[1],o=r[2];return n==="rgb"||n==="rgba"?Yp(o):n==="hsl"||n==="hsla"?Zp(o):null}function ud({r:t,g:e,b:r}){return`#${[t,e,r].map(n=>fo(n).toString(16).padStart(2,"0")).join("")}`}function ss(t){let e=t/255;return e<=.03928?e/12.92:((e+.055)/1.055)**2.4}function pd(t){let e=Ka(t);return e?.2126*ss(e.r)+.7152*ss(e.g)+.0722*ss(e.b):1}function Ya(t,e){let r=pd(t),n=pd(e),o=Math.max(r,n),a=Math.min(r,n);return(o+.05)/(a+.05)}function ps(t,e="#ffffff"){let r=Ka(t);if(r)return ud(r);let n=Ka(e);return n?ud(n):"#ffffff"}function ds(t){let e=Ya(ls.ink,t);return Ya(cs.ink,t)>e?{...cs}:{...ls}}function Qa(t){let e=ds(t);return{ink:e.ink,muted:e.muted,border:e.border}}function Br(t,e,r,n){let o=Number(t);return Number.isFinite(o)?Math.max(e,Math.min(r,o)):n}function Qp(t){return Wp.includes(t)?t:"paper"}function Jp(t){return Gp.includes(t)?t:"auto"}function ef(t){let e=Number(t);if(!Number.isFinite(e))return 400;let r=Math.max(jo[0],Math.min(jo[jo.length-1],e)),n=jo[0],o=Number.POSITIVE_INFINITY;for(let a of jo){let i=Math.abs(a-r);i<o&&(n=a,o=i)}return n}function tf(t){return(dd.get(t)||dd.get("serif")).stack}function rf(t){return t>=600?700:600}function fs(t){let e=t&&typeof t=="object"?t:{},r=Qp(e.backgroundPreset),n=ps(e.customBackground,Gt.customBackground),o=r==="custom"?null:jp.get(r),a=o?o.bg:n,i=ds(a);o&&(i={ink:o.ink,muted:o.muted,border:o.border});let s=Jp(e.textTone);s==="dark"?i={...ls}:s==="light"&&(i={...cs});let l=o?o.accent:ds(a).tone==="light"?Xp:qp,d=ef(e.fontWeight);return{preset:r,bg:a,ink:i.ink,muted:i.muted,border:i.border,accent:l,fontFamily:tf(e.fontFamily),fontWeight:d,headingWeight:rf(d),width:Br(e.contentWidth,Pe.contentWidth.min,Pe.contentWidth.max,Gt.contentWidth),brightness:Br(e.brightness,Pe.brightness.min,Pe.brightness.max,Gt.brightness),imageOpacity:Br(e.backgroundImageOpacity,Pe.backgroundImageOpacity.min,Pe.backgroundImageOpacity.max,Gt.backgroundImageOpacity),imageBlur:Br(e.backgroundImageBlur,Pe.backgroundImageBlur.min,Pe.backgroundImageBlur.max,Gt.backgroundImageBlur)}}function nf(t){return`url("${String(t).replace(/[\n\r\f]/gu," ").replace(/\\/gu,"\\\\").replace(/"/gu,'\\"')}")`}function Ja(t,e){let r=fs(t),n=typeof e=="string"&&e.trim()?nf(e.trim()):"none";return{"--dshr-reader-bg":r.bg,"--dshr-reader-ink":r.ink,"--dshr-reader-muted":r.muted,"--dshr-reader-border":r.border,"--dshr-reader-accent":r.accent,"--dshr-reader-font":r.fontFamily,"--dshr-reader-weight":String(r.fontWeight),"--dshr-reader-heading-weight":String(r.headingWeight),"--dshr-reader-width":`${r.width}px`,"--dshr-reader-brightness":String(r.brightness),"--dshr-reader-image-opacity":String(r.imageOpacity),"--dshr-reader-image-blur":`${r.imageBlur}px`,"--dshr-reader-image":n}}var gs=String.raw`
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
`;var X=require("react/jsx-runtime");function go({size:t=15,children:e,viewBox:r="0 0 24 24"}){return(0,X.jsx)("svg",{width:t,height:t,viewBox:r,fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:e})}function of(t){return(0,X.jsx)(go,{...t,children:(0,X.jsx)("path",{d:"m6 6 12 12M18 6 6 18"})})}function af(t){return(0,X.jsxs)(go,{...t,children:[(0,X.jsx)("rect",{x:"3",y:"4.5",width:"18",height:"15",rx:"2.4"}),(0,X.jsx)("circle",{cx:"8.4",cy:"9.6",r:"1.5"}),(0,X.jsx)("path",{d:"m4 17 4.6-4.4a1.6 1.6 0 0 1 2.2 0l2.5 2.4 2.1-2a1.6 1.6 0 0 1 2.2 0L20 15.6"})]})}function sf(t){return(0,X.jsxs)(go,{...t,children:[(0,X.jsx)("path",{d:"M12 16V4"}),(0,X.jsx)("path",{d:"m7 9 5-5 5 5"}),(0,X.jsx)("path",{d:"M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15"})]})}function lf(t){return(0,X.jsxs)(go,{...t,children:[(0,X.jsx)("path",{d:"M4 7h16M9 7V5h6v2M7 7l.7 12.2A1.8 1.8 0 0 0 9.5 21h5a1.8 1.8 0 0 0 1.8-1.8L17 7"}),(0,X.jsx)("path",{d:"M10 11v6M14 11v6"})]})}function cf(t){return(0,X.jsxs)(go,{...t,children:[(0,X.jsx)("path",{d:"M20 11a8 8 0 1 0-2.3 6.3"}),(0,X.jsx)("path",{d:"M20 4v7h-7"})]})}function gd(t){return(0,X.jsx)(go,{...t,children:(0,X.jsx)("path",{d:"m5 12 4.5 4.5L19 7"})})}var df=Object.freeze([{id:"auto",label:"\u81EA\u52A8"},{id:"dark",label:"\u6DF1\u8272\u5B57"},{id:"light",label:"\u6D45\u8272\u5B57"}]),hf=Object.freeze(["fontSize","lineHeight","fontFamily","fontWeight","contentWidth","tocWidth","brightness","backgroundPreset","customBackground","textTone","backgroundImageOpacity","backgroundImageBlur"]),uf='button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';function md({label:t,value:e,options:r,onChange:n}){return(0,X.jsx)("div",{className:"dshr-appearance-segmented",role:"group","aria-label":t,children:r.map(o=>{let a=o.value!==void 0?o.value:o.id;return(0,X.jsx)("button",{type:"button",className:"dshr-appearance-segmented__item","aria-pressed":e===a,onClick:()=>n(a),children:o.label},String(a))})})}function Un({label:t,valueText:e,min:r,max:n,step:o,value:a,onChange:i,disabled:s,hint:l}){return(0,X.jsxs)("label",{className:`dshr-appearance-slider${s?" is-disabled":""}`,children:[(0,X.jsxs)("span",{className:"dshr-appearance-slider__head",children:[(0,X.jsx)("span",{children:t}),(0,X.jsx)("span",{className:"dshr-appearance-slider__value",children:e})]}),(0,X.jsx)("input",{type:"range",min:r,max:n,step:o,value:a,disabled:s,onChange:d=>i(Number(d.target.value)),"aria-label":t}),l?(0,X.jsx)("span",{className:"dshr-appearance-slider__hint",children:l}):null]})}function bd({open:t,settings:e,backgroundImageUrl:r,onChange:n,onPickBackgroundImage:o,onClearBackgroundImage:a,onClose:i}){let s=pn.default.useRef(null),l=pn.default.useId(),[d,f]=pn.default.useState(!1),g=fs(e),u=!!r,p=ps(e.customBackground,Gt.customBackground),_=Qa(p).ink,S=Ya(g.ink,g.bg),v=Br(e.fontSize,Pe.fontSize.min,Pe.fontSize.max,Gt.fontSize),P=Br(e.lineHeight,Pe.lineHeight.min,Pe.lineHeight.max,Gt.lineHeight),A=!u&&hf.every(O=>e[O]===Gt[O]),y=pn.default.useCallback(O=>{typeof n=="function"&&n({...e,...O})},[n,e]);if(pn.default.useEffect(()=>{if(!t)return;let O=D=>{D.key==="Escape"&&(D.preventDefault(),i?.())};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[t,i]),pn.default.useEffect(()=>{if(!t)return;let O=typeof document<"u"?document.activeElement:null,D=window.requestAnimationFrame(()=>{s.current?.focus({preventScroll:!0})});return()=>{window.cancelAnimationFrame(D),O instanceof HTMLElement&&O.isConnected&&O.focus({preventScroll:!0})}},[t]),pn.default.useEffect(()=>{if(!t){f(!1);return}},[t]),pn.default.useEffect(()=>{if(!d)return;let O=window.setTimeout(()=>f(!1),3200);return()=>window.clearTimeout(O)},[d]),!t)return null;let N=O=>{O.target===O.currentTarget&&i?.()},M=O=>{if(O.key!=="Tab"||!s.current)return;let D=[...s.current.querySelectorAll(uf)].filter(re=>re.offsetParent!==null||re===document.activeElement);if(D.length===0)return;let te=D[0],H=D[D.length-1],ne=document.activeElement;O.shiftKey&&(ne===te||!s.current.contains(ne))?(O.preventDefault(),H.focus()):!O.shiftKey&&ne===H&&(O.preventDefault(),te.focus())},E=()=>{if(!d){f(!0);return}f(!1),u&&a?.(),n?.({...e,...Gt})},I={...Ja(e,r),fontSize:`${Math.min(16,Math.max(12,Math.round(v*.8)))}px`,lineHeight:String(P)},x=S>=4.5;return(0,X.jsx)("div",{className:"dshr-appearance-mask",onMouseDown:N,children:(0,X.jsxs)("aside",{className:"dshr-appearance-panel",role:"dialog","aria-modal":"true","aria-labelledby":l,tabIndex:-1,ref:s,onKeyDown:M,children:[(0,X.jsxs)("header",{className:"dshr-appearance-head",children:[(0,X.jsxs)("div",{className:"dshr-appearance-head__text",children:[(0,X.jsx)("strong",{id:l,children:"\u9605\u8BFB\u5916\u89C2"}),(0,X.jsx)("span",{children:"\u8C03\u6574\u6392\u7248\u3001\u5B57\u4F53\u4E0E\u80CC\u666F \xB7 \u4EC5\u4FDD\u5B58\u5728\u672C\u673A"})]}),(0,X.jsx)("button",{type:"button",className:"dshr-appearance-close",onClick:i,"aria-label":"\u5173\u95ED\u5916\u89C2\u8BBE\u7F6E",children:(0,X.jsx)(of,{size:16})})]}),(0,X.jsxs)("div",{className:"dshr-appearance-body",children:[(0,X.jsxs)("div",{className:"dshr-appearance-preview",style:I,"aria-hidden":"true",children:[(0,X.jsx)("span",{className:"dshr-appearance-preview__badge",children:"\u5B9E\u65F6\u9884\u89C8"}),(0,X.jsxs)("div",{className:"dshr-appearance-preview__inner",children:[(0,X.jsx)("span",{className:"dshr-appearance-preview__kicker",children:"\u7B2C 1 \u7AE0"}),(0,X.jsx)("p",{className:"dshr-appearance-preview__title",children:"\u5C71\u5C45\u79CB\u669D"}),(0,X.jsx)("p",{className:"dshr-appearance-preview__text",children:"\u7A7A\u5C71\u65B0\u96E8\u540E\uFF0C\u5929\u6C14\u665A\u6765\u79CB\u3002\u660E\u6708\u677E\u95F4\u7167\uFF0C\u6E05\u6CC9\u77F3\u4E0A\u6D41\u3002"}),(0,X.jsx)("p",{className:"dshr-appearance-preview__quote",children:"\u7AF9\u55A7\u5F52\u6D63\u5973\uFF0C\u83B2\u52A8\u4E0B\u6E14\u821F\u3002"})]})]}),(0,X.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-bg`,children:[(0,X.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-bg`,children:"\u80CC\u666F"}),(0,X.jsx)("div",{className:"dshr-appearance-swatches",role:"group","aria-label":"\u80CC\u666F\u9884\u8BBE",children:Za.map(O=>{let D=O.id==="custom"?p:O.bg,te=O.id==="custom"?_:O.ink,H=g.preset===O.id;return(0,X.jsxs)("button",{type:"button",className:`dshr-appearance-swatch${H?" is-active":""}`,"aria-pressed":H,onClick:()=>y({backgroundPreset:O.id}),children:[(0,X.jsx)("span",{className:"dshr-appearance-swatch__chip",style:{background:D,color:te},children:"\u6587"}),(0,X.jsx)("span",{className:"dshr-appearance-swatch__label",children:O.label})]},O.id)})}),(0,X.jsxs)("label",{className:"dshr-appearance-colorrow",children:[(0,X.jsx)("span",{children:"\u81EA\u5B9A\u4E49\u989C\u8272"}),(0,X.jsxs)("span",{className:"dshr-appearance-colorrow__control",children:[(0,X.jsx)("input",{type:"color",className:"dshr-appearance-color",value:p,"aria-label":"\u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272",onChange:O=>y({backgroundPreset:"custom",customBackground:O.target.value})}),(0,X.jsx)("code",{className:"dshr-appearance-colorrow__hex",children:p.toUpperCase()})]})]}),(0,X.jsxs)("div",{className:"dshr-appearance-field",children:[(0,X.jsxs)("div",{className:"dshr-appearance-field__head",children:[(0,X.jsx)("span",{children:"\u6587\u5B57\u8272\u8C03"}),(0,X.jsxs)("span",{className:`dshr-appearance-field__value${x?"":" is-warning"}`,children:["\u5BF9\u6BD4\u5EA6 ",S.toFixed(1),":1"]})]}),(0,X.jsx)(md,{label:"\u6587\u5B57\u8272\u8C03",value:e.textTone==="dark"||e.textTone==="light"?e.textTone:"auto",options:df,onChange:O=>y({textTone:O})}),(0,X.jsxs)("p",{className:"dshr-appearance-hint",children:[x?"\u81EA\u52A8\u6A21\u5F0F\u4F1A\u6309\u80CC\u666F\u4EAE\u5EA6\u9009\u62E9\u6DF1\u8272\u6216\u6D45\u8272\u6587\u5B57\u3002":"\u5F53\u524D\u6587\u5B57\u4E0E\u80CC\u666F\u5BF9\u6BD4\u5EA6\u504F\u4F4E\uFF0C\u5EFA\u8BAE\u6539\u9009\u5176\u5B83\u80CC\u666F\u6216\u6587\u5B57\u8272\u8C03\u3002",u?" \u80CC\u666F\u56FE\u7247\u4F1A\u8FDB\u4E00\u6B65\u5F71\u54CD\u5B9E\u9645\u53EF\u8BFB\u6027\u3002":""]})]})]}),(0,X.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-image`,children:[(0,X.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-image`,children:"\u80CC\u666F\u56FE\u7247"}),(0,X.jsxs)("div",{className:"dshr-appearance-image",children:[(0,X.jsx)("span",{className:`dshr-appearance-image__thumb${u?" has-image":""}`,children:u?(0,X.jsx)("img",{src:r,alt:""}):(0,X.jsx)(af,{size:20})}),(0,X.jsxs)("div",{className:"dshr-appearance-image__meta",children:[(0,X.jsx)("strong",{children:u?"\u5DF2\u9009\u62E9\u80CC\u666F\u56FE\u7247":"\u672A\u9009\u62E9\u80CC\u666F\u56FE\u7247"}),(0,X.jsx)("span",{children:"\u4F5C\u4E3A\u6587\u5B57\u4E0B\u65B9\u7684\u886C\u5E95\uFF0C\u4EC5\u4FDD\u5B58\u5728\u672C\u673A\u3002"})]}),(0,X.jsxs)("div",{className:"dshr-appearance-image__actions",children:[(0,X.jsxs)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--soft dshr-appearance-btn--sm",onClick:o,children:[u?(0,X.jsx)(gd,{size:13}):(0,X.jsx)(sf,{size:13}),u?"\u66F4\u6362":"\u9009\u62E9\u56FE\u7247"]}),u?(0,X.jsxs)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--ghost dshr-appearance-btn--sm",onClick:a,children:[(0,X.jsx)(lf,{size:13})," \u79FB\u9664"]}):null]})]}),(0,X.jsx)(Un,{label:"\u56FE\u7247\u4E0D\u900F\u660E\u5EA6",valueText:`${Math.round(Br(e.backgroundImageOpacity,Pe.backgroundImageOpacity.min,Pe.backgroundImageOpacity.max,Gt.backgroundImageOpacity)*100)}%`,min:Pe.backgroundImageOpacity.min,max:Pe.backgroundImageOpacity.max,step:Pe.backgroundImageOpacity.step,value:Br(e.backgroundImageOpacity,Pe.backgroundImageOpacity.min,Pe.backgroundImageOpacity.max,Gt.backgroundImageOpacity),disabled:!u,onChange:O=>y({backgroundImageOpacity:O})}),(0,X.jsx)(Un,{label:"\u56FE\u7247\u6A21\u7CCA",valueText:`${Math.round(g.imageBlur)}px`,min:Pe.backgroundImageBlur.min,max:Pe.backgroundImageBlur.max,step:Pe.backgroundImageBlur.step,value:g.imageBlur,disabled:!u,onChange:O=>y({backgroundImageBlur:O})}),(0,X.jsx)(Un,{label:"\u9605\u8BFB\u4EAE\u5EA6",valueText:`${Math.round(g.brightness*100)}%`,min:Pe.brightness.min,max:Pe.brightness.max,step:Pe.brightness.step,value:g.brightness,onChange:O=>y({brightness:O})}),(0,X.jsx)("p",{className:"dshr-appearance-hint",children:"\u8C03\u4F4E\u4EAE\u5EA6\u53EF\u51CF\u5C11\u591C\u95F4\u5C4F\u5E55\u523A\u6FC0\uFF1B\u53EA\u5F71\u54CD\u6B63\u6587/PDF \u9605\u8BFB\u533A\uFF0C\u4E0D\u5F71\u54CD\u5DE5\u5177\u680F\u4E0E\u6279\u6CE8\u9762\u677F\u3002"})]}),(0,X.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-type`,children:[(0,X.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-type`,children:"\u5B57\u4F53"}),(0,X.jsx)("div",{className:"dshr-appearance-families",role:"group","aria-label":"\u5B57\u4F53",children:hs.map(O=>(0,X.jsx)("button",{type:"button",className:"dshr-appearance-family",style:{fontFamily:O.stack},"aria-pressed":g.fontFamily===O.stack,onClick:()=>y({fontFamily:O.id}),title:O.label,children:O.label},O.id))}),(0,X.jsxs)("div",{className:"dshr-appearance-field",children:[(0,X.jsx)("div",{className:"dshr-appearance-field__head",children:(0,X.jsx)("span",{children:"\u5B57\u91CD"})}),(0,X.jsx)(md,{label:"\u5B57\u91CD",value:g.fontWeight,options:us.map(O=>({value:O.value,label:O.label})),onChange:O=>y({fontWeight:O})})]}),(0,X.jsx)(Un,{label:"\u5B57\u53F7",valueText:`${v}px`,min:Pe.fontSize.min,max:Pe.fontSize.max,step:Pe.fontSize.step,value:v,onChange:O=>y({fontSize:O})}),(0,X.jsx)(Un,{label:"\u884C\u9AD8",valueText:P.toFixed(2),min:Pe.lineHeight.min,max:Pe.lineHeight.max,step:Pe.lineHeight.step,value:P,onChange:O=>y({lineHeight:Math.round(O*100)/100})})]}),(0,X.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-layout`,children:[(0,X.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-layout`,children:"\u7248\u5F0F"}),(0,X.jsx)(Un,{label:"\u9605\u8BFB\u5BBD\u5EA6",valueText:`${Math.round(g.width)}px`,min:Pe.contentWidth.min,max:Pe.contentWidth.max,step:Pe.contentWidth.step,value:g.width,onChange:O=>y({contentWidth:O})}),(0,X.jsx)(Un,{label:"\u76EE\u5F55\u5BBD\u5EA6",valueText:`${Math.round(Br(e.tocWidth,Pe.tocWidth.min,Pe.tocWidth.max,Gt.tocWidth))}px`,min:Pe.tocWidth.min,max:Pe.tocWidth.max,step:Pe.tocWidth.step,value:Br(e.tocWidth,Pe.tocWidth.min,Pe.tocWidth.max,Gt.tocWidth),onChange:O=>y({tocWidth:O})}),(0,X.jsx)("p",{className:"dshr-appearance-hint",children:"\u63A7\u5236\u6B63\u6587\u6700\u5927\u5BBD\u5EA6\uFF1B\u76EE\u5F55\u5BBD\u5EA6\u53EF\u5728\u8FD9\u91CC\u8C03\uFF0C\u4E5F\u53EF\u4EE5\u62D6\u52A8\u76EE\u5F55\u53F3\u8FB9\u7F18\u3002\u76EE\u5F55\u6807\u9898\u4F1A\u5B8C\u6574\u6362\u884C\u663E\u793A\u3002"})]})]}),(0,X.jsxs)("footer",{className:"dshr-appearance-foot",children:[(0,X.jsxs)("button",{type:"button",className:`dshr-appearance-btn dshr-appearance-btn--ghost${d?" dshr-appearance-btn--danger":""}`,onClick:E,disabled:A&&!d,title:A?"\u5F53\u524D\u5DF2\u662F\u9ED8\u8BA4\u5916\u89C2":"\u6062\u590D\u9ED8\u8BA4\u5916\u89C2",children:[d?(0,X.jsx)(gd,{size:14}):(0,X.jsx)(cf,{size:14}),d?"\u786E\u8BA4\u6062\u590D\uFF1F":"\u6062\u590D\u9ED8\u8BA4"]}),(0,X.jsx)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--primary",onClick:i,children:"\u5B8C\u6210"})]})]})})}var ei=It(require("react"),1);var _e=require("react/jsx-runtime"),pf={highlight:Dn,underline:Ra,note:xn},ff=[{id:"all",label:"\u5168\u90E8"},...co.map(t=>({id:t.id,label:t.label}))];function gf(t){let e=Number(t);if(!Number.isFinite(e)||e<=0)return"";try{return new Date(e).toLocaleDateString("zh-CN",{month:"numeric",day:"numeric"})}catch{return""}}function mf(t){let e=new Map,r=t&&Array.isArray(t.chapters)?t.chapters:[];for(let n=0;n<r.length;n+=1){let o=r[n];o&&o.id!=null&&e.set(String(o.id),{index:n,title:o.title||""})}return e}function xd(t){return t?t.kind==="pdf"?!0:t.kind==="flow"?!1:Array.isArray(t.rects)&&!Array.isArray(t.ranges):!1}function vd(t,e){if(!t)return null;if(t.chapterId!=null){let r=e.get(String(t.chapterId));if(r)return r}if(Number.isInteger(Number(t.chapterIndex))&&Number(t.chapterIndex)>=0){let r=Number(t.chapterIndex),o=(e.size>0?[...e.values()]:[]).find(a=>a.index===r);return{index:r,title:o?o.title:""}}return null}function bf(t,e,r){let n=(Array.isArray(t)?t:[]).filter(i=>!(!i||r!=="all"&&i.style!==r)),o=new Map;for(let i=0;i<n.length;i+=1){let s=n[i],l=xd(s),d,f,g;if(l){let u=Number(s.page),p=Number.isInteger(u)&&u>0;d=`pdf:${p?u:"unknown"}`,f=p?1e4+u:999999,g=p?`\u7B2C ${u} \u9875`:"PDF \u9875\u9762"}else{let u=vd(s,e),p=u?u.index:null;d=`flow:${p??"unknown"}`,f=p??99999,g=p==null?"\u6B63\u6587":`\u7B2C ${p+1} \u7AE0${u&&u.title?` \xB7 ${u.title}`:""}`}o.has(d)||o.set(d,{key:d,order:f,title:g,items:[]}),o.get(d).items.push(s)}let a=[...o.values()];a.sort((i,s)=>i.order-s.order);for(let i=0;i<a.length;i+=1)a[i].items.sort((l,d)=>{let f=Array.isArray(l.ranges)&&l.ranges[0]&&l.ranges[0].start||0,g=Array.isArray(d.ranges)&&d.ranges[0]&&d.ranges[0].start||0;return f!==g?f-g:(Number(l.createdAt)||0)-(Number(d.createdAt)||0)});return a}function xf({hasAny:t,filter:e}){return t?(0,_e.jsxs)("div",{className:"dshr-anno-panel__empty",children:[(0,_e.jsx)("p",{className:"dshr-anno-panel__empty-title",children:"\u6CA1\u6709\u5339\u914D\u7684\u6807\u6CE8"}),(0,_e.jsxs)("p",{className:"dshr-anno-panel__empty-text",children:["\u5F53\u524D\u7B5B\u9009\u662F\u300C",e==="all"?"\u5168\u90E8":Wi(e),"\u300D\uFF0C\u5207\u6362\u7B5B\u9009\u770B\u770B\u5176\u4F59\u6807\u6CE8\u3002"]})]}):(0,_e.jsxs)("div",{className:"dshr-anno-panel__empty",children:[(0,_e.jsx)("span",{className:"dshr-anno-panel__empty-mark","aria-hidden":"true",children:(0,_e.jsx)(yc,{size:44})}),(0,_e.jsx)("p",{className:"dshr-anno-panel__empty-title",children:"\u8FD8\u6CA1\u6709\u4EFB\u4F55\u6807\u6CE8"}),(0,_e.jsx)("p",{className:"dshr-anno-panel__empty-text",children:"\u5728\u9605\u8BFB\u65F6\u9009\u4E2D\u4E00\u6BB5\u6587\u5B57\uFF0C\u5C31\u53EF\u4EE5\u7528\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u6216\u4FBF\u7B7E\u628A\u5B83\u7559\u5728\u8FD9\u91CC\u3002"}),(0,_e.jsxs)("ol",{className:"dshr-anno-panel__steps",children:[(0,_e.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,_e.jsx)("span",{className:"dshr-anno-panel__step-index",children:"1"})," \u9009\u4E2D\u6B63\u6587\u4E2D\u7684\u4E00\u6BB5\u6587\u5B57"]}),(0,_e.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,_e.jsx)("span",{className:"dshr-anno-panel__step-index",children:"2"})," \u9009\u62E9\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u6216\u4FBF\u7B7E"]}),(0,_e.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,_e.jsx)("span",{className:"dshr-anno-panel__step-index",children:"3"})," \u4E4B\u540E\u56DE\u5230\u8FD9\u91CC\u56DE\u770B\u3001\u8DF3\u8F6C"]})]}),(0,_e.jsx)("p",{className:"dshr-anno-panel__hint",children:"PDF \u9875\u9762\u540C\u6837\u652F\u6301\uFF1A\u9009\u4E2D\u6587\u5B57\u540E\u70B9\u51FB\u300C\u6807\u6CE8\u300D\u5373\u53EF\u3002"})]})}function yd({open:t,annotations:e,book:r,onClose:n,onOpenAnnotation:o,onJump:a,onDelete:i}){let[s,l]=ei.default.useState("all"),d=ei.default.useMemo(()=>mf(r),[r]);if(ei.default.useEffect(()=>{if(!t||typeof document>"u")return;let S=v=>{v.key!=="Escape"||typeof n!="function"||document.querySelector(".dshr-anno-composer")||(v.preventDefault(),n())};return document.addEventListener("keydown",S,!0),()=>document.removeEventListener("keydown",S,!0)},[n,t]),!t)return null;let f=(Array.isArray(e)?e:[]).filter(Boolean),g={all:f.length};for(let S=0;S<co.length;S+=1){let v=co[S].id;g[v]=f.filter(P=>P.style===v).length}let u=bf(f,d,s),p=s==="all"?f.length:f.filter(S=>S.style===s).length,_=(S,v)=>{typeof S=="function"&&S(v)};return(0,_e.jsxs)("aside",{className:"dshr-anno-panel","aria-label":"\u6807\u6CE8\u7B14\u8BB0\u9762\u677F",children:[(0,_e.jsxs)("header",{className:"dshr-anno-panel__head",children:[(0,_e.jsxs)("div",{className:"dshr-anno-panel__titles",children:[(0,_e.jsxs)("h3",{className:"dshr-anno-panel__title",children:["\u6807\u6CE8\u7B14\u8BB0",(0,_e.jsx)("span",{className:"dshr-anno-panel__count",children:f.length})]}),(0,_e.jsx)("span",{className:"dshr-anno-panel__sub",children:f.length>0?`${p} \u6761\u6807\u6CE8 \xB7 ${u.length} \u4E2A\u4F4D\u7F6E`:"\u9009\u4E2D\u6587\u5B57\u5373\u53EF\u6DFB\u52A0\u6807\u6CE8"})]}),(0,_e.jsx)("button",{type:"button",className:"dshr-anno-panel__close","aria-label":"\u5173\u95ED\u6807\u6CE8\u9762\u677F",onClick:()=>_(n),children:(0,_e.jsx)(Ma,{size:13})})]}),f.length>0?(0,_e.jsx)("div",{className:"dshr-anno-panel__filters",role:"tablist","aria-label":"\u6309\u6837\u5F0F\u7B5B\u9009\u6807\u6CE8",children:ff.map(S=>{let v=s===S.id,P=g[S.id]||0;return(0,_e.jsxs)("button",{type:"button",role:"tab","aria-selected":v,className:`dshr-anno-panel__filter${v?" is-active":""}`,onClick:()=>l(S.id),children:[S.label,S.id==="all"?` ${P}`:P>0?` ${P}`:""]},S.id)})}):null,(0,_e.jsx)("div",{className:"dshr-anno-panel__list",children:u.length===0?(0,_e.jsx)(xf,{hasAny:f.length>0,filter:s}):u.map(S=>(0,_e.jsxs)("section",{className:"dshr-anno-panel__group",children:[(0,_e.jsxs)("div",{className:"dshr-anno-panel__group-head",children:[(0,_e.jsx)("span",{className:"dshr-anno-panel__group-title",title:S.title,children:S.title}),(0,_e.jsx)("span",{className:"dshr-anno-panel__group-rule"}),(0,_e.jsx)("span",{className:"dshr-anno-panel__group-count",children:S.items.length})]}),S.items.map(v=>{let P=v.style||"highlight",A=pf[P]||Dn,y=v.color||"#f5d76e",N=typeof v.quote=="string"?v.quote.trim():"",M=typeof v.note=="string"?v.note.trim():"",E=vd(v,d),L=xd(v)?Number(v.page)>0?`\u7B2C ${v.page} \u9875`:"PDF":E?`\u7B2C ${E.index+1} \u7AE0`:"\u6B63\u6587",I=gf(v.updatedAt||v.createdAt);return(0,_e.jsxs)("article",{className:"dshr-anno-item",style:{"--dshr-anno-color":y},"data-anno-id":v.id||void 0,children:[(0,_e.jsxs)("button",{type:"button",className:"dshr-anno-item__main",onClick:()=>_(o,v.id),title:"\u7F16\u8F91\u8FD9\u6761\u6807\u6CE8",children:[(0,_e.jsxs)("div",{className:"dshr-anno-item__meta",children:[(0,_e.jsx)("span",{className:"dshr-anno-item__dot","aria-hidden":"true"}),(0,_e.jsxs)("span",{className:"dshr-anno-item__style",children:[(0,_e.jsx)(A,{size:12})," ",Wi(P)]}),(0,_e.jsx)("span",{className:"dshr-anno-item__sep","aria-hidden":"true",children:"\xB7"}),(0,_e.jsx)("span",{className:"dshr-anno-item__location",children:L}),(0,_e.jsx)("span",{className:"dshr-anno-item__spacer"}),I?(0,_e.jsx)("span",{children:I}):null]}),(0,_e.jsx)("p",{className:"dshr-anno-item__quote",children:N||M||"\uFF08\u672A\u8BB0\u5F55\u9009\u4E2D\u6587\u5B57\uFF09"}),M&&M!==N?(0,_e.jsx)("p",{className:"dshr-anno-item__note",children:M}):null]}),(0,_e.jsxs)("div",{className:"dshr-anno-item__actions",children:[(0,_e.jsx)("button",{type:"button",className:"dshr-anno-item__action dshr-anno-item__action--jump",onClick:()=>_(a,v),title:"\u8DF3\u8F6C\u5230\u8FD9\u6761\u6807\u6CE8\u7684\u4F4D\u7F6E",children:"\u5B9A\u4F4D"}),(0,_e.jsx)("span",{className:"dshr-anno-item__spacer"}),(0,_e.jsx)("button",{type:"button",className:"dshr-anno-item__action dshr-anno-item__action--danger",onClick:()=>_(i,v),title:"\u5220\u9664\u8FD9\u6761\u6807\u6CE8",children:"\u5220\u9664"})]})]},v.id||`${S.key}:${N}`)})]},S.key))})]})}var Zr=It(require("react"),1);var Re=require("react/jsx-runtime"),wd={highlight:Dn,underline:Ra,note:xn},vf={highlight:"\u7528\u534A\u900F\u660E\u7684\u8272\u5E26\u8986\u76D6\u9009\u4E2D\u6587\u5B57\uFF0C\u53EF\u8C03\u7B14\u89E6\u7C97\u7EC6\u3002",underline:"\u5728\u9009\u4E2D\u6587\u5B57\u4E0B\u65B9\u753B\u4E00\u6761\u624B\u5199\u5F0F\u4E0B\u5212\u7EBF\u3002",note:"\u5728\u9009\u4E2D\u6587\u5B57\u65C1\u653E\u4E00\u679A\u4FBF\u7B7E\uFF0C\u8BB0\u5F55\u6B64\u523B\u7684\u60F3\u6CD5\u3002"},_d=2e3,ms=Do[1].value;function bs(t){return t==="underline"?fc:pc}function Td(t){return Object.prototype.hasOwnProperty.call(lo,t)?t:"highlight"}function yf(t){let e=Number(t);if(!Number.isFinite(e))return ms;let r=ms,n=1/0;for(let o=0;o<Do.length;o+=1){let a=Do[o].value,i=Math.abs(a-e);i<n&&(r=a,n=i)}return r}function kd(t){let e=t&&typeof t=="object"?t:{},r=Td(e.style),n=bs(r),o=n.find(a=>a.value===e.color);return{style:r,color:o?o.value:typeof e.color=="string"&&e.color?e.color:n[0].value,width:yf(e.width),note:typeof e.note=="string"?e.note:"",quote:typeof e.quote=="string"?e.quote:""}}function wf(t,e){if(!t||typeof t!="object")return`${e}:empty`;let r=typeof t.quote=="string"?t.quote:"";return[e,t.id||"",r,Array.isArray(t.ranges)?t.ranges.length:0,t.page==null?"":t.page,t.chapterId==null?"":t.chapterId].join("|")}function _f(t){return`${Math.round(2+(Number(t)||ms)*.34)}px`}function Sd({open:t,draft:e,mode:r,onClose:n,onSave:o,onDelete:a}){let i=r==="edit",[s,l]=Zr.default.useState(()=>kd(e)),d=Zr.default.useRef(""),f=Zr.default.useRef(null);Zr.default.useEffect(()=>{if(!t){d.current="";return}let M=wf(e,r);d.current!==M&&(d.current=M,l(kd(e)))},[e,r,t]),Zr.default.useEffect(()=>{if(!t||typeof window>"u")return;let M=window.setTimeout(()=>{let E=f.current;if(E)try{E.focus({preventScroll:!0}),E.setSelectionRange(E.value.length,E.value.length)}catch{}},30);return()=>window.clearTimeout(M)},[t]);let g=Zr.default.useCallback(M=>{l(E=>({...E,...M}))},[]),u=Zr.default.useCallback(M=>{let E=Td(M);l(L=>{let I=bs(E),x=I.some(O=>O.value===L.color);return{...L,style:E,color:x?L.color:I[0].value}})},[]),p=Zr.default.useCallback(()=>{if(!s.note.trim()&&!s.quote.trim()&&s.style==="note")return;let E={...e&&typeof e=="object"?e:{},style:s.style,color:s.color,width:s.width,note:s.note,quote:s.quote};typeof o=="function"&&o(E)},[e,o,s]);if(Zr.default.useEffect(()=>{if(!t||typeof document>"u")return;let M=E=>{if(E.key==="Escape"){E.preventDefault(),E.stopImmediatePropagation(),typeof n=="function"&&n();return}E.key==="Enter"&&(E.metaKey||E.ctrlKey)&&(E.preventDefault(),E.stopImmediatePropagation(),p())};return document.addEventListener("keydown",M,!0),()=>document.removeEventListener("keydown",M,!0)},[p,n,t]),!t)return null;let _=bs(s.style),S=wd[s.style]||Dn,v=s.quote.trim(),P=!!(s.note.trim()||v||s.style!=="note"),A=s.style==="note"?"\u4FBF\u7B7E\u5185\u5BB9":"\u5907\u6CE8",y=s.style==="note"?"\u5199\u4E0B\u8FD9\u6BB5\u6587\u5B57\u7ED9\u4F60\u7684\u60F3\u6CD5\u2026":"\u53EF\u9009\uFF1A\u4E3A\u8FD9\u6761\u6807\u6CE8\u5199\u4E00\u6761\u5907\u6CE8\u2026",N=s.style==="underline"?"\u4E0B\u5212\u7EBF\u989C\u8272":s.style==="note"?"\u4FBF\u7B7E\u989C\u8272":"\u8367\u5149\u7B14\u989C\u8272";return(0,Re.jsx)("div",{className:"dshr-anno-composer-mask",role:"presentation",onMouseDown:M=>{M.target===M.currentTarget&&typeof n=="function"&&n()},children:(0,Re.jsxs)("div",{className:"dshr-anno-composer",role:"dialog","aria-modal":"true","aria-label":i?"\u7F16\u8F91\u6807\u6CE8":"\u6DFB\u52A0\u6807\u6CE8",onMouseDown:M=>M.stopPropagation(),children:[(0,Re.jsxs)("header",{className:"dshr-anno-composer__head",children:[(0,Re.jsxs)("div",{className:"dshr-anno-composer__titles",children:[(0,Re.jsx)("h3",{className:"dshr-anno-composer__title",children:i?"\u7F16\u8F91\u6807\u6CE8":"\u6DFB\u52A0\u6807\u6CE8"}),(0,Re.jsx)("span",{className:"dshr-anno-composer__sub",children:vf[s.style]})]}),(0,Re.jsx)("button",{type:"button",className:"dshr-anno-composer__close","aria-label":"\u5173\u95ED\u6807\u6CE8\u7F16\u8F91\u5668",onClick:()=>{typeof n=="function"&&n()},children:(0,Re.jsx)(Ma,{size:13})})]}),(0,Re.jsxs)("div",{className:"dshr-anno-composer__body",children:[(0,Re.jsx)("div",{className:"dshr-anno-composer__tabs",role:"tablist","aria-label":"\u6807\u6CE8\u6837\u5F0F",children:co.map(M=>{let E=wd[M.id]||Dn,L=s.style===M.id;return(0,Re.jsxs)("button",{type:"button",role:"tab","aria-selected":L,className:`dshr-anno-composer__tab${L?" is-active":""}`,onClick:()=>u(M.id),children:[(0,Re.jsx)(E,{size:14})," ",M.label]},M.id)})}),(0,Re.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Re.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Re.jsx)("span",{children:N}),(0,Re.jsx)("em",{children:s.style==="underline"?"\u7EB8\u4E0A\u7684\u58A8\u8272":"\u534A\u900F\u660E\u7B14\u89E6"})]}),(0,Re.jsx)("div",{className:"dshr-anno-composer__swatches",role:"radiogroup","aria-label":N,children:_.map(M=>{let E=s.color===M.value;return(0,Re.jsx)("button",{type:"button",role:"radio","aria-checked":E,"aria-label":`${M.label}\u8272`,title:`${M.label}\u8272`,className:`dshr-anno-swatch${E?" is-active":""}`,style:{"--swatch":M.value},onClick:()=>g({color:M.value}),children:M.label},M.id)})})]}),s.style==="highlight"?(0,Re.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Re.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Re.jsx)("span",{children:"\u7B14\u89E6\u7C97\u7EC6"}),(0,Re.jsx)("em",{children:"\u7EC6 / \u4E2D / \u5BBD"})]}),(0,Re.jsx)("div",{className:"dshr-anno-composer__widths",role:"radiogroup","aria-label":"\u7B14\u89E6\u7C97\u7EC6",children:Do.map(M=>{let E=s.width===M.value;return(0,Re.jsxs)("button",{type:"button",role:"radio","aria-checked":E,className:`dshr-anno-width${E?" is-active":""}`,onClick:()=>g({width:M.value}),children:[(0,Re.jsx)("span",{className:"dshr-anno-width__bar",style:{height:_f(M.value),background:s.color}}),M.label]},M.id)})})]}):null,(0,Re.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Re.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Re.jsx)("span",{children:A}),(0,Re.jsx)("em",{children:s.style==="note"?"\u53EF\u7559\u7A7A\uFF0C\u4EC5\u6807\u8BB0\u4F4D\u7F6E":"\u53EF\u9009"})]}),(0,Re.jsx)("textarea",{ref:f,className:"dshr-anno-composer__textarea",value:s.note,maxLength:_d,placeholder:y,"aria-label":A,onChange:M=>g({note:M.target.value})}),(0,Re.jsxs)("div",{className:"dshr-anno-composer__counter",children:[s.note.length," / ",_d]})]}),v?(0,Re.jsxs)("div",{className:"dshr-anno-composer__quote",style:{"--dshr-anno-color":s.color},children:[(0,Re.jsx)("span",{className:"dshr-anno-composer__quote-label",children:"\u9009\u4E2D\u6587\u5B57"}),(0,Re.jsx)("p",{className:"dshr-anno-composer__quote-text",children:v})]}):null,(0,Re.jsxs)("div",{className:`dshr-anno-composer__preview is-${s.style}`,style:{"--dshr-anno-color":s.color},children:[(0,Re.jsx)("span",{className:"dshr-anno-composer__preview-label",children:"\u6548\u679C\u9884\u89C8"}),(0,Re.jsx)("span",{className:"dshr-anno-composer__preview-text",children:v||"\u9009\u4E2D\u7684\u6587\u5B57\u4F1A\u8FD9\u6837\u663E\u793A"})]})]}),(0,Re.jsxs)("footer",{className:"dshr-anno-composer__foot",children:[i?(0,Re.jsx)("button",{type:"button",className:"dshr-anno-btn dshr-anno-btn--danger",onClick:()=>{typeof a=="function"&&a(e||{})},children:"\u5220\u9664"}):null,(0,Re.jsx)("span",{className:"dshr-anno-composer__spacer"}),(0,Re.jsx)("button",{type:"button",className:"dshr-anno-btn",onClick:()=>{typeof n=="function"&&n()},children:"\u53D6\u6D88"}),(0,Re.jsx)("button",{type:"button",className:"dshr-anno-btn dshr-anno-btn--primary",disabled:!P,onClick:p,title:"Ctrl / \u2318 + Enter \u4FDD\u5B58",children:i?"\u4FDD\u5B58\u4FEE\u6539":"\u4FDD\u5B58\u6807\u6CE8"})]})]})})}var Yh=360,Zh=520;function Qh(t){try{return t.toDataURL("image/jpeg",.84)}catch{return""}}function Qm(t){let e=Number(t.naturalWidth||t.width)||0,r=Number(t.naturalHeight||t.height)||0;if(!e||!r)return"";let n=Math.min(Yh/e,Zh/r,1),o=document.createElement("canvas");o.width=Math.max(1,Math.round(e*n)),o.height=Math.max(1,Math.round(r*n));let a=o.getContext("2d");return a.fillStyle="#fbf7ee",a.fillRect(0,0,o.width,o.height),a.drawImage(t,0,0,o.width,o.height),Qh(o)}function Jm(t){return new Promise(e=>{let r=new Image;r.decoding="async",r.onload=()=>e(r),r.onerror=()=>e(null),r.src=t})}async function eb(t){if(!t||!String(t.type||"").startsWith("image/"))return"";let e=URL.createObjectURL(t);try{let r=await Jm(e);return r?Qm(r):""}finally{URL.revokeObjectURL(e)}}async function tb(t,e){let r=await Ba(t,{signal:e}),n,o,a=()=>{o?.cancel(),r.close()};e?.addEventListener("abort",a,{once:!0});try{if(e?.aborted)throw Vr();let i=await r.pdf.getPage(1);if(e?.aborted)throw Vr();let s=i.getViewport({scale:1}),l=Math.min(Yh/s.width,Zh/s.height,1.5),d=i.getViewport({scale:l});if(n=document.createElement("canvas"),n.width=Math.max(1,Math.round(d.width)),n.height=Math.max(1,Math.round(d.height)),o=i.render({canvas:n,viewport:d,background:"#ffffff"}),o.onContinue=f=>setTimeout(()=>{e?.aborted?o.cancel():f()},16),await o.promise,e?.aborted)throw Vr();return Qh(n)}finally{e?.removeEventListener("abort",a),await r.close(),n&&(n.width=0,n.height=0)}}async function Jh(t,{signal:e}={}){if(e?.aborted)throw Vr();if(!t?.blob)return{};let r=String(t.format||"").toLowerCase();try{if(r==="pdf"){let n=await tb(t.blob,e);return n?{cover:n}:{}}if(["epub","mobi","azw","azw3"].includes(r)){let{parseBook:n}=await Promise.resolve().then(()=>(al(),ol)),o=/\.[a-z0-9]+$/iu.test(t.title||"")?t.title:`${t.title||"book"}.${r}`,a=await n(t.blob,{fileName:o,mime:t.blob.type});try{let i="";if(a.cover)try{let s=await fetch(a.cover);i=await eb(await s.blob())}catch{i=""}return{...i?{cover:i}:{},...a.title?{title:a.title}:{},...a.author?{author:a.author}:{},...a.language?{language:a.language}:{}}}finally{a.dispose?.()}}}catch(n){if(e?.aborted)throw Vr();console.warn("[dsh-reader] cover generation failed",t.title,n)}return{}}var Q=require("react/jsx-runtime"),yi="dsh-reader:last-book:v1",il="dsh-reader:session-book:v1",eu=44;function tu(t){let e=/^#?([0-9a-f]{6})$/iu.exec(String(t||"").trim());if(!e)return null;let r=e[1];return{r:parseInt(r.slice(0,2),16),g:parseInt(r.slice(2,4),16),b:parseInt(r.slice(4,6),16)}}function rb(t,e,r){let n=tu(t),o=tu(e);if(!n||!o)return e;let a=Math.max(0,Math.min(1,r));return`#${To(n.r*a+o.r*(1-a)).slice(1)}${To(n.g*a+o.g*(1-a)).slice(1)}${To(n.b*a+o.b*(1-a)).slice(1)}`}function To(t){return`#${Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0")}`}function nb(t){let e=document.createElement("canvas");e.width=32,e.height=32;let r=e.getContext("2d",{willReadFrequently:!0});if(!r)return"";r.drawImage(t,0,0,e.width,e.height);let n;try{n=r.getImageData(0,0,e.width,e.height).data}catch{return""}let o=new Map;for(let i=0;i<n.length;i+=4){let s=n[i+3];if(s<40)continue;let l=n[i],d=n[i+1],f=n[i+2],g=`${l>>5}:${d>>5}:${f>>5}`,u=o.get(g);u||(u={count:0,r:0,g:0,b:0},o.set(g,u)),u.count+=s,u.r+=l*s,u.g+=d*s,u.b+=f*s}let a=null;for(let i of o.values())(!a||i.count>a.count)&&(a=i);return a?To(a.r/a.count)+To(a.g/a.count).slice(1)+To(a.b/a.count).slice(1):""}function ob(t,e,r){return Math.max(e,Math.min(r,t))}var sl=class extends j.default.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,r){console.error("[dsh-reader]",e,r)}reset=()=>this.setState({error:null});render(){return this.state.error?(0,Q.jsx)("div",{className:"dshr-root",children:(0,Q.jsxs)("div",{className:"dshr-error-panel",children:[(0,Q.jsx)("h3",{children:"\u9605\u8BFB\u5668\u9047\u5230\u4E86\u4E00\u4E2A\u95EE\u9898"}),(0,Q.jsxs)("p",{children:[this.state.error?.message||"\u672A\u77E5\u9519\u8BEF","\u3002\u8FD9\u901A\u5E38\u662F\u6587\u6863\u683C\u5F0F\u6216\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u91CD\u65B0\u6253\u5F00\u6587\u6863\u901A\u5E38\u53EF\u4EE5\u6062\u590D\u3002"]}),(0,Q.jsx)("div",{style:{display:"flex",gap:8,marginTop:14},children:(0,Q.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:()=>{this.reset(),this.props.onReset?.()},children:"\u8FD4\u56DE\u4E66\u67B6"})})]})}):this.props.children}};function ab(){let[t,e]=j.default.useState(""),r=j.default.useRef(0),n=j.default.useCallback((o,a=2800)=>{window.clearTimeout(r.current),e(String(o)),r.current=window.setTimeout(()=>e(""),a)},[]);return j.default.useEffect(()=>()=>window.clearTimeout(r.current),[]),[t,n]}function ru(){let[t,e]=j.default.useState([]),[r,n]=j.default.useState([]),o=j.default.useRef(0),[a,i]=j.default.useState(!0),[s,l]=j.default.useState(!1),[d,f]=j.default.useState(!1),[g,u]=j.default.useState("all"),[p,_]=j.default.useState(null),[S,v]=j.default.useState(!1),[P,A]=j.default.useState(""),[y,N]=j.default.useState(Ql),[M,E]=j.default.useState(!1),[L,I]=j.default.useState(!1),[x,O]=j.default.useState(!1),[D,te]=j.default.useState(!1),[H,ne]=j.default.useState(!1),[re,z]=j.default.useState(!1),oe=j.default.useRef(null),[B,q]=j.default.useState(null),[ae,F]=ab(),[{index:de,entry:ve},Ae]=j.default.useState({index:0,entry:null}),[J,ge]=j.default.useState({}),[Ue,we]=j.default.useState(!0),[Be,Xe]=j.default.useState(!1),[ft,h]=j.default.useState(null),[c,k]=j.default.useState(null),[b,Y]=j.default.useState(null),[ce,he]=j.default.useState([]),[ye,Te]=j.default.useState(!1),[We,Ce]=j.default.useState(null),[ue,ze]=j.default.useState(!1),[dt,$e]=j.default.useState(null),[je,De]=j.default.useState(null),[ke,ht]=j.default.useState(null),[Ge,xt]=j.default.useState(""),[Jt,pr]=j.default.useState(0),[ot,Lt]=j.default.useState(""),[_t,fr]=j.default.useState(!1),[Dt,er]=j.default.useState(0),K=j.default.useRef(null),pe=j.default.useRef({timer:0,latest:null}),be=j.default.useRef({token:0,controller:null}),Oe=j.default.useRef(null),xe=j.default.useRef(y),Qe=j.default.useRef(t),Ft=j.default.useRef({running:!1,attempted:new Set}),kn=j.default.useRef(!1),[Tn,lr]=j.default.useState(null);Oe.current=p,xe.current=y,Qe.current=t;let tr=j.default.useCallback(()=>{be.current.token+=1,be.current.controller?.abort()},[]);j.default.useLayoutEffect(()=>()=>tr(),[p?.record?.id,c,tr]);let Wr=`${y.fontSize}:${y.lineHeight}:${y.fontFamily}:${y.fontWeight}:${y.tocWidth}:${y.contentWidth}:${Ge?"img":"plain"}:${Dt}`,Sn=j.default.useMemo(()=>Ja(y,Ge),[y,Ge]),rr=j.default.useMemo(()=>{let w=Sn["--dshr-reader-bg"]||y.customBackground||"#fbf7ee",R=ot&&Ge?rb(ot,w,Number(y.backgroundImageOpacity)||0):w;return{"--dshr-immersive-surface":R,"--dshr-immersive-ink":Qa(R).ink}},[ot,Ge,Sn,y.customBackground,y.backgroundImageOpacity]),Je=j.default.useCallback(async()=>{let w=++o.current;try{let[R,Z]=await Promise.all([Fi(),Ll()]);e(R),w===o.current&&n(Z)}catch(R){F(R?.message||"\u8BFB\u53D6\u4E66\u67B6\u5931\u8D25\u3002")}finally{i(!1)}},[F]),En=j.default.useCallback(w=>{o.current+=1,n(w)},[]),gr=j.default.useCallback(async w=>{if(!w){he([]);return}try{he(await Gl(w))}catch(R){console.warn("[dsh-reader] annotations unavailable",R),he([])}},[]);j.default.useEffect(()=>{Je()},[Je]),j.default.useEffect(()=>{if(a||p)return;let w=Qe.current.filter(Me=>!Me.cover&&["pdf","epub","mobi","azw","azw3"].includes(Me.format)&&!Ft.current.attempted.has(Me.id));if(w.length===0)return;let R=Ft.current,Z=new AbortController;R.controller=Z,R.running=!0;let tt=setTimeout(()=>{(async()=>{for(let Me of w){if(Z.signal.aborted)break;if(!R.attempted.has(Me.id))try{let it=await Ea(Me.id);if(!it||Z.signal.aborted)continue;let pt=await Jh(it,{signal:Z.signal});if(Z.signal.aborted)break;R.attempted.add(Me.id),(pt.cover||pt.title||pt.author||pt.language)&&(await io(it.id,pt),e(br=>br.map(Pr=>Pr.id===it.id?{...Pr,...pt}:Pr)))}catch(it){if(Z.signal.aborted)break;R.attempted.add(Me.id),console.warn("[dsh-reader] cover generation failed",Me.title,it)}}})().finally(()=>{R.controller===Z&&(R.running=!1)})},500);return()=>{clearTimeout(tt),Z.abort()}},[a,p]),j.default.useEffect(()=>{Jl(y)},[y]),j.default.useEffect(()=>{if(!p||y.readingMode==="book")return;let w=R=>{if(R.defaultPrevented||R.repeat||R.ctrlKey||R.metaKey||R.altKey||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(R.key)||R.target instanceof Element&&R.target.closest('input, textarea, select, [contenteditable="true"], .dshr-immersive-controls, .dshr-modal-mask, .dshr-appearance-panel, .dshr-anno-panel, .dshr-ai, .dshr-selection, .dshr-anno-composer, .dshr-pdf-translation-panel'))return;let Z=window.getSelection?.();if(Z&&!Z.isCollapsed)return;let tt=document.querySelector(".dshr-root .dshr-content")||document.querySelector(".dshr-root .dshr-pdf-scroll");if(!tt)return;R.preventDefault();let Me=Math.max(160,Math.round(tt.clientHeight*.82)),it=R.key==="ArrowRight"||R.key==="ArrowDown";tt.scrollBy({top:it?Me:-Me,behavior:"smooth"})};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[p,y.readingMode]),j.default.useEffect(()=>{if(!Ge){Lt("");return}let w=!1,R=new Image;return R.onload=()=>{w||Lt(nb(R))},R.onerror=()=>{w||Lt("")},R.src=Ge,()=>{w=!0}},[Ge]),j.default.useEffect(()=>{let w=!1,R="";if(!y.backgroundImageKey){xt("");return}return(async()=>{try{let Z=await Yl();if(!Z||w)return;R=URL.createObjectURL(Z),xt(R)}catch{w||xt("")}})(),()=>{w=!0,R&&URL.revokeObjectURL(R)}},[y.backgroundImageKey,Jt]),j.default.useEffect(()=>{if(!c)return;let w=Z=>{Z?.type==="scroll"&&Z.target instanceof Element&&Z.target.closest(".dshr-pdf-translation-panel")||k(null)},R=Z=>{Z.key==="Escape"&&k(null)};return window.addEventListener("resize",w),window.addEventListener("keydown",R),document.addEventListener("scroll",w,!0),()=>{window.removeEventListener("resize",w),window.removeEventListener("keydown",R),document.removeEventListener("scroll",w,!0)}},[c]);let $t=j.default.useCallback(async()=>{let w=pe.current.latest;if(w){pe.current.latest=null;try{await zi(w.id,w.progress),e(R=>R.map(Z=>Z.id===w.id?{...Z,progress:w.progress,lastOpenedAt:Date.now()}:Z))}catch{}}},[Je]),nr=j.default.useCallback((w,R)=>{w&&(ge(R),pe.current.latest={id:w,progress:R},!pe.current.timer&&(pe.current.timer=window.setTimeout(()=>{pe.current.timer=0,$t()},700)))},[$t]);j.default.useEffect(()=>()=>{window.clearTimeout(pe.current.timer),$t()},[$t]);let or=j.default.useCallback(async()=>{f(!0);try{let w=await Ol();await Je();let R=[`\u6587\u732E ${w.counts.paper||0}`,`\u4E66\u7C4D ${w.counts.book||0}`];w.counts.document&&R.push(`\u6587\u6863 ${w.counts.document}`),F(w.changed>0?`\u4E66\u5355\u5DF2\u6574\u7406\uFF1A${R.join(" \xB7 ")}`:`\u4E66\u5355\u5DF2\u662F\u6700\u65B0\uFF1A${R.join(" \xB7 ")}`)}catch(w){F(w?.message||"\u81EA\u52A8\u6574\u7406\u5931\u8D25\u3002")}finally{f(!1)}},[Je,F]),Jn=j.default.useCallback(async(w,R)=>{let Z=["book","paper","document"],tt=R||Z[(Z.indexOf(w.category||"document")+1)%Z.length];try{await Pl(w.id,tt),await Je(),F(`\u300A${w.title||"\u6587\u6863"}\u300B\u5DF2\u5F52\u5165\u300C${Lo(tt)}\u300D\u3002`)}catch(Me){F(Me?.message||"\u4FEE\u6539\u5206\u7C7B\u5931\u8D25\u3002")}},[Je,F]),An=j.default.useCallback(w=>{N(R=>({...R,...w})),er(R=>R+1)},[]),sn=j.default.useCallback(()=>{K.current?.click()},[]),ln=j.default.useCallback(async w=>{if(w){if(!String(w.type||"").startsWith("image/")){F("\u8BF7\u9009\u62E9\u56FE\u7247\u6587\u4EF6\uFF08JPG / PNG / WebP\uFF09\u3002");return}fr(!0);try{let R=w;try{let Z=await createImageBitmap(w),tt=Math.min(1,2400/Math.max(Z.width,Z.height));if(tt<1){let Me=document.createElement("canvas");Me.width=Math.round(Z.width*tt),Me.height=Math.round(Z.height*tt),Me.getContext("2d").drawImage(Z,0,0,Me.width,Me.height);let pt=await new Promise(br=>Me.toBlob(br,"image/jpeg",.86));pt&&(R=pt)}Z.close?.()}catch{}await Kl(R),N(Z=>({...Z,backgroundImageKey:"reader-background"})),pr(Z=>Z+1),F("\u80CC\u666F\u56FE\u7247\u5DF2\u4FDD\u5B58\uFF0C\u53EF\u8C03\u6574\u900F\u660E\u5EA6\u548C\u6A21\u7CCA\u5EA6\u3002")}catch(R){F(R?.message||"\u80CC\u666F\u56FE\u7247\u4FDD\u5B58\u5931\u8D25\u3002")}finally{fr(!1)}}},[F]),mr=j.default.useCallback(async()=>{try{await Zl(),N(w=>({...w,backgroundImageKey:""})),xt(""),F("\u5DF2\u79FB\u9664\u80CC\u666F\u56FE\u7247\u3002")}catch(w){F(w?.message||"\u79FB\u9664\u80CC\u666F\u56FE\u7247\u5931\u8D25\u3002")}},[F]),se=j.default.useCallback(async(w,R={})=>{if(R.rejected){F("\u6CA1\u6709\u53EF\u8BC6\u522B\u7684\u6587\u6863\u3002\u652F\u6301 PDF / EPUB / MOBI / TXT / Markdown / HTML\u3002");return}if(!w?.length)return;l(!0);let Z=[],tt=[];for(let Me of w)try{let it=await Ml(Me);Z.push(it)}catch(it){tt.push(`${Me.name}: ${it?.message||"\u5BFC\u5165\u5931\u8D25"}`)}await Je(),l(!1),tt.length>0&&F(tt[0],4200),Z.length>0&&(F(Z.length===1?"\u5DF2\u52A0\u5165\u4E66\u67B6\u3002":`\u5DF2\u52A0\u5165 ${Z.length} \u4EFD\u6587\u6863\u3002`),et(Z[0]))},[Je,F]),T=j.default.useCallback(async w=>{O(!0);try{let R=await cc(w);I(!1),await se([R])}catch(R){F(R?.message||"\u5728\u7EBF\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u94FE\u63A5\u6216\u7A0D\u540E\u91CD\u8BD5\u3002",5200)}finally{O(!1)}},[se,F]),G=j.default.useCallback(async()=>{if(ne(!1),document.fullscreenElement===oe.current)try{await document.exitFullscreen()}catch{}},[]),ie=j.default.useCallback(async()=>{if(H){await G();return}ne(!0),we(!1)},[H,G]),at=j.default.useCallback(async()=>{try{document.fullscreenElement===oe.current?await document.exitFullscreen():oe.current?.requestFullscreen&&await oe.current.requestFullscreen()}catch{F("\u6D4F\u89C8\u5668\u963B\u6B62\u4E86\u5168\u5C4F\uFF1B\u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528\u5F53\u524D\u7A97\u53E3\u7684\u6C89\u6D78\u6A21\u5F0F\u3002",3600)}},[F]);j.default.useEffect(()=>{let w=()=>{z(document.fullscreenElement===oe.current)};return document.addEventListener("fullscreenchange",w),()=>document.removeEventListener("fullscreenchange",w)},[]),j.default.useEffect(()=>{!p&&H&&G()},[p,H,G]),j.default.useEffect(()=>{if(!H||D)return;let w=R=>{R.key==="Escape"&&!R.defaultPrevented&&(R.preventDefault(),G())};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[H,D,G]);let gt=j.default.useCallback(()=>{try{localStorage.removeItem(yi)}catch{}try{sessionStorage.removeItem(il)}catch{}lr(null),pe.current.timer&&(window.clearTimeout(pe.current.timer),pe.current.timer=0),$t(),Xe(!1),h(null),k(null),Y(null),he([]),Te(!1),ze(!1),Ce(null),$e(null),De(null),ht(null);let w=Oe.current?.book;if(w?.dispose)try{w.dispose()}catch{}_(null),ge({}),Ae({index:0,entry:null})},[$t]),et=j.default.useCallback(async w=>{v(!0),A(`\u6B63\u5728\u6253\u5F00\u300A${w.title||"\u6587\u6863"}\u300B\u2026`);try{let R=await Ea(w.id);if(!R?.blob)throw new Error("\u4E66\u67B6\u4E2D\u627E\u4E0D\u5230\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u53EF\u80FD\u5DF2\u88AB\u6E05\u7406\u3002\u8BF7\u91CD\u65B0\u5BFC\u5165\u3002");lr(null);try{localStorage.setItem(yi,R.id)}catch{}try{sessionStorage.setItem(il,R.id)}catch{}if((R.format||On(R.title))==="pdf"){R.blob.size>24*1024*1024&&A(`\u6B63\u5728\u6253\u5F00\u5927\u578B PDF\u300A${R.title||w.title||"\u6587\u6863"}\u300B\u2026`);let Pr=R.blob,xr=R.progress||{},ua={...R,blob:null,blobName:R.blob.name||""};_({kind:"pdf",record:ua,data:Pr}),ge({page:xr.page||1,pages:xr.pages||0,percent:xr.percent||0}),Ae({index:0,entry:null}),we(!1),Te(!1),ht(null),await gr(R.id),v(!1),await zi(R.id),await Je();return}let{parseBook:tt}=await Promise.resolve().then(()=>(al(),ol)),Me=await tt(R.blob,{fileName:R.title??w.title,mime:R.blob.type}),it={...R,title:Me.title||R.title,author:Me.author||R.author,language:Me.language||R.language};(it.title!==R.title||it.author!==R.author||it.language!==R.language)&&(await io(R.id,{title:it.title,author:it.author,language:it.language}),await Je());let pt=R.progress||{},br=ob(Number(pt.chapter)||0,0,Math.max(0,Me.chapters.length-1));_({kind:"flow",record:it,book:Me}),Ae({index:br,entry:{scrollRatio:Number(pt.scrollRatio)||0}}),ge({chapter:br,chapters:Me.chapters.length,percent:Number(pt.percent)||(Me.chapters.length?(br+1)/Me.chapters.length*100:0)}),we(!0),Te(!1),De(null),await gr(R.id),v(!1),tc(Me.chapters.slice(0,3).map(Pr=>Pr.blocks.map(xr=>xr.text||"").join(" ")).join(" "))&&!xe.current.autoTranslate&&F("\u68C0\u6D4B\u5230\u5916\u6587\u5185\u5BB9\u3002\u9876\u90E8\u300C\u5B9E\u65F6\u7FFB\u8BD1\u300D\u53EF\u4EE5\u968F\u65F6\u5F00\u542F\u3002",4200)}catch(R){v(!1),F(R?.message||"\u6253\u5F00\u6587\u6863\u5931\u8D25\u3002",5e3)}},[Je,gr,F]);j.default.useEffect(()=>{if(a||p||kn.current||Qe.current.length===0)return;kn.current=!0;let w="";try{w=localStorage.getItem(yi)||""}catch{}if(!w){lr(null);return}let R=Qe.current.find(Me=>Me.id===w);if(!R){lr(null);try{localStorage.removeItem(yi)}catch{}return}let Z=Number(R.size)>24*1024*1024||Number(R.progress?.pages)>300,tt=!1;try{tt=sessionStorage.getItem(il)===R.id}catch{}lr(R),!(Z&&!tt)&&et(R)},[a,p,et]),j.default.useEffect(()=>{let w=()=>{document.visibilityState==="hidden"&&$t()};return document.addEventListener("visibilitychange",w),()=>document.removeEventListener("visibilitychange",w)},[$t]);let Tt=j.default.useCallback(async()=>{let w=B;if(w)try{Oe.current?.record?.id===w.id&&gt(),await zl(w.id),q(null),await Je(),F("\u5DF2\u4ECE\u4E66\u67B6\u5220\u9664\u3002")}catch(R){F(R?.message||"\u5220\u9664\u5931\u8D25\u3002")}},[gt,B,Je,F]),Ct=j.default.useCallback(async()=>{try{gt(),await Bl(),await Je(),E(!1),F("\u4E66\u67B6\u5DF2\u6E05\u7A7A\u3002")}catch(w){F(w?.message||"\u6E05\u7A7A\u4E66\u67B6\u5931\u8D25\u3002")}},[gt,Je,F]),Ht=j.default.useCallback((w,R)=>{h({id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:String(w||"").slice(0,8e3),context:String(R||"").slice(0,1600)}),Xe(!0),Te(!1),k(null),Y(null)},[]),Ir=j.default.useCallback((w,R="web")=>{let Z=String(w||"").trim().slice(0,500);if(!Z)return;let tt=R==="scholar"?`https://scholar.google.com/scholar?q=${encodeURIComponent(Z)}`:`https://www.google.com/search?q=${encodeURIComponent(Z)}`;window.open(tt,"_blank","noopener,noreferrer")||F("\u6D4F\u89C8\u5668\u62E6\u622A\u4E86\u65B0\u7A97\u53E3\u3002\u8BF7\u5141\u8BB8\u5F39\u51FA\u7A97\u53E3\uFF0C\u6216\u590D\u5236\u6587\u5B57\u540E\u624B\u52A8\u641C\u7D22\u3002")},[F]),yt=j.default.useCallback(async w=>{try{await navigator.clipboard.writeText(w),F("\u5DF2\u590D\u5236\u3002")}catch{F("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u3002")}},[F]),cn=j.default.useCallback(w=>{if(tr(),!w?.text?.trim()){k(null);return}k({...w,source:"flow"}),Y(null)},[tr]),eo=j.default.useCallback(w=>{if(tr(),!w?.text){k(null);return}k({...w,source:"pdf"}),Y(null)},[tr]),to=j.default.useCallback(async w=>{let R=w?.text?.trim();if(!R)return;tr();let Z=new AbortController,tt=be.current.token,Me=p?.record?.id;be.current.controller=Z;let it=()=>!Z.signal.aborted&&tt===be.current.token&&Oe.current?.record?.id===Me;Y({status:"loading"});try{let pt=await so([{id:"selection",text:R}],{context:w.context||"",title:p?.book?.title||p?.record?.title||"",signal:Z.signal});it()&&Y({status:"done",zh:pt.selection||""})}catch(pt){it()&&!Ln(pt)&&Y({status:"error",error:pt?.message||"\u7FFB\u8BD1\u5931\u8D25\u3002"})}},[p,tr]),Nn=j.default.useCallback(w=>{let R=Oe.current?.record?.id;if(!R||!w?.text?.trim())return;let Z=Oe.current?.kind==="pdf";$e(null),Ce({bookId:R,kind:Z?"pdf":"flow",style:"highlight",color:"#f5d76e",width:9,note:"",quote:w.text.trim(),chapterId:Z?void 0:Oe.current?.book?.chapters?.[de]?.id,chapterIndex:Z?void 0:de,ranges:Z?void 0:w.ranges,page:Z?w.page:void 0,rects:Z?w.pageRects:void 0}),ze(!0),k(null),Y(null)},[de]),jr=j.default.useCallback(w=>{w&&($e(w),Ce({...w}),ze(!0))},[]),ro=j.default.useCallback(w=>{let R=ce.find(Z=>Z.id===w);R&&jr(R)},[ce,jr]),Rr=j.default.useCallback(()=>{ze(!1),Ce(null),$e(null)},[]),wi=j.default.useCallback(async w=>{if(!(!w||!w.bookId))try{w.id?await Xl(w.id,w):await ql(w),await gr(w.bookId),Rr(),er(R=>R+1),F(w.note?.trim()?"\u6279\u6CE8\u5DF2\u4FDD\u5B58\u3002":"\u6807\u8BB0\u5DF2\u4FDD\u5B58\u3002")}catch(R){F(R?.message||"\u4FDD\u5B58\u6279\u6CE8\u5931\u8D25\u3002")}},[Rr,gr,F]),da=j.default.useCallback(async w=>{if(w?.id)try{await Vl(w.id),await gr(Oe.current?.record?.id),Rr(),er(R=>R+1),F("\u6279\u6CE8\u5DF2\u5220\u9664\u3002")}catch(R){F(R?.message||"\u5220\u9664\u6279\u6CE8\u5931\u8D25\u3002")}},[Rr,gr,F]),Cn=j.default.useCallback(w=>{if(!w)return;if(w.kind==="pdf"){ht({id:w.id,page:w.page,token:Date.now()}),Te(!1);return}let R=Number.isFinite(w.chapterIndex)?w.chapterIndex:0;Ae(Z=>Z.index===R?Z:{index:R,entry:{edge:"start"}}),De({id:w.id,blockId:w.ranges?.[0]?.blockId,token:Date.now()}),Te(!1)},[]),So=j.default.useCallback((w,R={edge:"start"})=>{w===de||w<0||w>=(p?.book?.chapters.length??0)||(De(null),Ae({index:w,entry:R}))},[de,p]),Mr=j.default.useCallback((w,R)=>{w!==ve||p?.kind!=="flow"||(Ae(Z=>Z.entry===w?{index:Z.index,entry:null}:Z),nr(p.record.id,za(de,p.book.chapters.length,R)))},[ve,de,p,nr]);function _i(w){if(w.button!==0)return;w.preventDefault();let R=w.clientX,Z=Number(xe.current.tocWidth)||260,tt=document.body.style.cursor,Me=document.body.style.userSelect;document.body.style.cursor="col-resize",document.body.style.userSelect="none",document.body.classList.add("dshr-toc-resizing");let it=br=>{let Pr=Math.max(180,Math.min(520,Math.round(Z+br.clientX-R)));N(xr=>({...xr,tocWidth:Pr}))},pt=()=>{window.removeEventListener("pointermove",it),window.removeEventListener("pointerup",pt),window.removeEventListener("pointercancel",pt),document.body.style.cursor=tt,document.body.style.userSelect=Me,document.body.classList.remove("dshr-toc-resizing")};window.addEventListener("pointermove",it),window.addEventListener("pointerup",pt),window.addEventListener("pointercancel",pt)}let gn=p?.book?.title||p?.record?.title||p?.record?.blob?.name||p?.record?.blobName||"",In=p?.book?.author||p?.record?.author||"",ha=p?p.kind==="pdf"?J.pages?`\u7B2C ${J.page||1} / ${J.pages} \u9875`:"PDF \u6587\u6863":`\u7B2C ${(de||0)+1} / ${p.book.chapters.length} \u7AE0`:"",ki=p?p.kind==="pdf"?J.pages>0?(J.page||1)/J.pages*100:0:(de+1)/Math.max(1,p.book.chapters.length)*100:0;function Eo(w){let R=p.kind==="pdf";return(0,Q.jsxs)("div",{className:`dshr-immersive-controls${R?" dshr-immersive-controls--pdf":""}`,role:"group","aria-label":"\u6C89\u6D78\u9605\u8BFB\u63A7\u4EF6",style:R?void 0:{height:eu},children:[R?(0,Q.jsx)("span",{className:"dshr-immersive-title",title:gn,children:gn}):null,w,(0,Q.jsxs)("div",{className:"dshr-immersive-actions",children:[R?null:(0,Q.jsxs)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>we(Z=>!Z),title:Ue?"\u6536\u8D77\u76EE\u5F55":"\u6253\u5F00\u76EE\u5F55","aria-pressed":Ue,children:[(0,Q.jsx)(Ii,{size:15})," \u76EE\u5F55"]}),(0,Q.jsxs)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>{te(!0),k(null)},title:"\u9605\u8BFB\u5916\u89C2","aria-label":"\u9605\u8BFB\u5916\u89C2","aria-haspopup":"dialog","aria-expanded":D,autoFocus:!0,children:[(0,Q.jsx)(Po,{size:15})," \u5916\u89C2"]}),(0,Q.jsxs)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>{at()},title:re?"\u9000\u51FA\u5168\u5C4F":"\u8FDB\u5165\u5168\u5C4F","aria-label":re?"\u9000\u51FA\u5168\u5C4F":"\u8FDB\u5165\u5168\u5C4F","aria-pressed":re,children:[re?(0,Q.jsx)(El,{size:15}):(0,Q.jsx)(Ri,{size:15}),re?"\u8FD8\u539F":"\u5168\u5C4F"]}),(0,Q.jsxs)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>{G()},title:"\u9000\u51FA\u6C89\u6D78\u6A21\u5F0F\uFF08Esc\uFF09",children:[(0,Q.jsx)(yr,{size:15})," \u9000\u51FA\u6C89\u6D78"]})]})]})}return(0,Q.jsx)(sl,{onReset:gt,children:(0,Q.jsxs)("div",{ref:oe,className:`dshr-root${H?" is-immersive":""}`,style:{...Sn,...rr,"--dshr-font-size":`${y.fontSize}px`,"--dshr-line-height":String(y.lineHeight),"--dshr-toc-width":`${y.tocWidth}px`},"data-reader-background":y.backgroundPreset,"data-hide-translations":y.hideTranslations?"true":"false","data-reading-mode":y.readingMode||"scroll",children:[(0,Q.jsx)("input",{ref:K,type:"file",accept:"image/*",className:"dshr-sr-only",tabIndex:-1,onChange:w=>{let R=w.target.files?.[0];w.target.value="",ln(R)}}),p?(0,Q.jsxs)("div",{className:"dshr-reader",children:[(0,Q.jsxs)("div",{className:"dshr-topbar",style:{position:"relative"},children:[(0,Q.jsx)("div",{className:"dshr-progress","aria-hidden":"true",children:(0,Q.jsx)("i",{style:{"--p":`${Math.min(100,ki)}%`}})}),(0,Q.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:gt,title:"\u8FD4\u56DE\u4E66\u67B6","aria-label":"\u8FD4\u56DE\u4E66\u67B6",children:(0,Q.jsx)(bl,{size:17})}),(0,Q.jsxs)("div",{className:"dshr-topbar__title",children:[(0,Q.jsx)("strong",{title:gn,children:gn}),(0,Q.jsx)("span",{children:[In,qr(p.record?.format),ha].filter(Boolean).join(" \xB7 ")})]}),(0,Q.jsxs)("div",{className:"dshr-topbar__tools",children:[p.kind==="flow"?(0,Q.jsx)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${Ue?"dshr-btn--outline":""}`,onClick:()=>we(w=>!w),title:"\u76EE\u5F55","aria-label":"\u76EE\u5F55","aria-pressed":Ue,children:(0,Q.jsx)(Ii,{size:16})}):null,(0,Q.jsxs)("div",{className:"dshr-topbar__mode",role:"group","aria-label":"\u7FFB\u4E66\u65B9\u5F0F",children:[(0,Q.jsx)("button",{type:"button",className:`dshr-topbar__mode-btn${y.readingMode!=="book"?" is-active":""}`,onClick:()=>N(w=>({...w,readingMode:"scroll"})),"aria-pressed":y.readingMode!=="book",title:"\u8FDE\u7EED\u6EDA\u52A8\u9605\u8BFB",children:(0,Q.jsx)("span",{children:"\u6EDA\u52A8"})}),(0,Q.jsx)("button",{type:"button",className:`dshr-topbar__mode-btn${y.readingMode==="book"?" is-active":""}`,onClick:()=>N(w=>({...w,readingMode:"book"})),"aria-pressed":y.readingMode==="book",title:"\u6A2A\u7248\u7EB8\u8D28\u4E66\u7FFB\u9875",children:(0,Q.jsx)("span",{children:"\u6A2A\u7248"})}),y.readingMode==="book"?(0,Q.jsx)("select",{className:"dshr-topbar__animation","aria-label":"\u7FFB\u9875\u52A8\u753B",value:y.bookAnimation||"slide",onChange:w=>N(R=>({...R,bookAnimation:w.target.value})),children:fd.map(w=>(0,Q.jsx)("option",{value:w.id,children:w.label},w.id))}):null]}),(0,Q.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon",onClick:()=>{ie()},title:"\u6C89\u6D78\u6A21\u5F0F\uFF08\u9690\u85CF\u5DE5\u5177\u680F\u4E0E\u4FA7\u8FB9\u76EE\u5F55\uFF09","aria-label":"\u8FDB\u5165\u6C89\u6D78\u6A21\u5F0F",children:(0,Q.jsx)(Ri,{size:16})}),(0,Q.jsxs)("button",{type:"button",className:"dshr-switch",role:"switch","aria-checked":y.autoTranslate,onClick:()=>N(w=>({...w,autoTranslate:!w.autoTranslate,...p.kind==="pdf"&&!w.autoTranslate?{hideTranslations:!1}:{}})),title:"\u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1",children:[(0,Q.jsx)("span",{className:"dshr-switch__track"}),(0,Q.jsx)("span",{style:{whiteSpace:"nowrap"},children:"\u5B9E\u65F6\u7FFB\u8BD1"})]}),(0,Q.jsx)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${y.hideTranslations?"dshr-btn--outline":""}`,onClick:()=>N(w=>({...w,hideTranslations:!w.hideTranslations})),title:y.hideTranslations?"\u663E\u793A\u4E2D\u6587\u8BD1\u6587":"\u53EA\u770B\u539F\u6587\uFF08\u9690\u85CF\u5DF2\u7FFB\u8BD1\u5185\u5BB9\uFF09","aria-label":y.hideTranslations?"\u663E\u793A\u4E2D\u6587\u8BD1\u6587":"\u53EA\u770B\u539F\u6587\uFF0C\u9690\u85CF\u8BD1\u6587","aria-pressed":y.hideTranslations,children:y.hideTranslations?(0,Q.jsx)(Cl,{size:16}):(0,Q.jsx)(Nl,{size:16})}),(0,Q.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon",onClick:()=>{te(!0),k(null)},title:"\u5B57\u4F53\u3001\u80CC\u666F\u4E0E\u7559\u767D","aria-label":"\u9605\u8BFB\u5916\u89C2",children:(0,Q.jsx)(Po,{size:16})}),(0,Q.jsxs)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${ye?"dshr-btn--outline":""}`,onClick:()=>{Te(w=>!w),Xe(!1),k(null)},title:"\u6279\u6CE8\u4E0E\u4FBF\u7B7E","aria-label":`\u6279\u6CE8\u4E0E\u4FBF\u7B7E\uFF0C\u5171 ${ce.length} \u6761`,children:[(0,Q.jsx)(_a,{size:16}),ce.length>0?(0,Q.jsx)("span",{className:"dshr-count-badge",children:ce.length>99?"99+":ce.length}):null]}),(0,Q.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary dshr-btn--sm",onClick:()=>Ht("",""),title:"\u6253\u5F00 AI \u9605\u8BFB\u52A9\u624B",children:[(0,Q.jsx)(bn,{size:14})," AI"]}),(0,Q.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:()=>E(!0),title:"\u9605\u8BFB\u8BBE\u7F6E","aria-label":"\u9605\u8BFB\u8BBE\u7F6E",children:(0,Q.jsx)(ba,{size:16})})]})]}),H&&p.kind==="flow"?Eo():null,(0,Q.jsxs)("div",{className:"dshr-body",children:[p.kind==="flow"?(0,Q.jsxs)("aside",{className:`dshr-toc${Ue?"":" is-closed"}`,"aria-label":"\u76EE\u5F55",children:[(0,Q.jsxs)("div",{className:"dshr-toc__head",children:[(0,Q.jsx)("strong",{children:"\u76EE\u5F55"}),(0,Q.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost",onClick:()=>we(!1),"aria-label":"\u6536\u8D77\u76EE\u5F55",children:(0,Q.jsx)(yr,{size:14})})]}),(0,Q.jsx)("div",{className:"dshr-toc__list",children:p.book.chapters.map((w,R)=>(0,Q.jsx)("button",{type:"button",className:`dshr-toc__item${R===de?" is-active":""}`,onClick:()=>So(R),title:w.title,children:w.title||`\u7B2C ${R+1} \u7AE0`},w.id||R))}),(0,Q.jsx)("div",{className:"dshr-toc__resizer",role:"separator","aria-orientation":"vertical","aria-label":"\u62D6\u52A8\u8C03\u6574\u76EE\u5F55\u5BBD\u5EA6",title:"\u62D6\u52A8\u8C03\u6574\u76EE\u5F55\u5BBD\u5EA6\uFF1B\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4",onPointerDown:_i,onDoubleClick:()=>N(w=>({...w,tocWidth:260}))})]}):null,p.kind==="pdf"?(0,Q.jsx)(Vc,{data:p.data,documentId:p.record.id,fileName:gn,renderToolbar:H?Eo:void 0,initialPage:p.record.progress?.page||1,autoTranslate:y.autoTranslate,hideTranslations:y.hideTranslations,paged:y.readingMode==="book",onHideTranslations:()=>N(w=>({...w,hideTranslations:!0})),annotations:ce,onOpenAnnotation:ro,focusAnnotation:ke,onReady:({pageCount:w})=>ge(R=>({...R,page:R.page||1,pages:w,percent:w>0?(R.page||1)/w*100:R.percent||0})),onPageChange:w=>{let R=J.pages||0,Z={...J,page:w,pages:R,percent:R>0?w/R*100:0};ge(Z),nr(p.record.id,Z)},onSelection:eo},p.record.id):(0,Q.jsx)(Ac,{book:p.book,chapterIndex:de,onChapterChange:So,settings:y,chapterEntry:ve,onChapterEntered:Mr,onSelection:cn,onProgress:w=>{ge(w),nr(p.record.id,w)},annotations:ce,onOpenAnnotation:ro,focusAnnotation:je,layoutVersion:Wr}),Be?(0,Q.jsx)(Yc,{open:Be,onClose:()=>Xe(!1),seed:ft,onGoogle:Ir,onToast:F}):null,ye?(0,Q.jsx)(yd,{open:ye,annotations:ce,book:p.book||p.record,onClose:()=>Te(!1),onOpenAnnotation:ro,onJump:Cn,onDelete:w=>{da(w)}}):null]}),(0,Q.jsx)(cd,{enabled:y.readingMode==="book",animation:y.bookAnimation,bookMode:!0,bookFrame:p.kind==="flow",pdfMode:p.kind==="pdf",frameTop:H?eu:52,frameLeft:p.kind==="flow"&&Ue?y.tocWidth:0,leftOffset:p.kind==="flow"&&Ue?y.tocWidth+12:12,readerKey:`${p.record.id}:${p.kind}:${de}`,canPrevChapter:p.kind==="flow"&&de>0,canNextChapter:p.kind==="flow"&&de<(p.book?.chapters?.length||1)-1,chapterEntry:ve,onChapterEntered:Mr,onChapterTurn:(w,R)=>So(de+w,R)})]}):(0,Q.jsx)(ac,{books:t,collections:r,onCollectionsChange:En,loading:a,resumeBook:Tn,onResume:w=>{et(w)},importing:s,organizing:d,categoryFilter:g,onCategoryFilter:u,onAutoOrganize:()=>{or()},onImport:se,onOpen:w=>{et(w)},onDelete:w=>q(w),onCycleCategory:(w,R)=>{Jn(w,R)},onSettings:()=>E(!0),onOnlineImport:()=>I(!0)}),S?(0,Q.jsx)("div",{className:"dshr-modal-mask",style:{background:"color-mix(in srgb, var(--dshr-bg) 76%, transparent)",backdropFilter:"blur(5px)"},children:(0,Q.jsxs)("div",{className:"dshr-loading",children:[(0,Q.jsx)("div",{className:"dshr-loading__ring"}),(0,Q.jsx)("span",{children:P})]})}):null,c&&!Be&&!ue?(0,Q.jsx)(Zc,{selection:c,translation:b,onTranslate:w=>{to(w)},onAnnotate:Nn,onExplain:w=>Ht(w.text,w.context),onGoogle:Ir,onCopy:yt,onClose:()=>{k(null),Y(null)},onRetry:()=>{to(c)}}):null,(0,Q.jsx)(td,{open:L,busy:x,onClose:()=>{x||I(!1)},onSubmit:w=>{T(w)}}),M?(0,Q.jsx)(Qc,{settings:y,onChange:N,onClose:()=>E(!1),onOpenAppearance:()=>{E(!1),te(!0)},onClearLibrary:()=>{Ct()}}):null,D?(0,Q.jsx)(bd,{open:D,settings:y,backgroundImageUrl:Ge,onChange:An,onPickBackgroundImage:sn,onClearBackgroundImage:()=>{mr()},onClose:()=>te(!1)}):null,B?(0,Q.jsx)(Jc,{book:B,onCancel:()=>q(null),onConfirm:()=>{Tt()}}):null,ue&&We?(0,Q.jsx)(Sd,{open:ue,draft:We,mode:dt?"edit":"create",onClose:Rr,onSave:w=>{wi(w)},onDelete:dt?()=>{da(dt)}:void 0}):null,(0,Q.jsx)(ed,{message:ae})]})})}var nu=String.raw`
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
`;var ou=String.raw`
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
`;var Qn=require("react/jsx-runtime"),ib="dsh-reader",sb=["slots","layout"],ll="reader";function lb({size:t=18}){return(0,Qn.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,Qn.jsx)("path",{d:"M4 5.4A2.4 2.4 0 0 1 6.4 3H20v16.1H6.4A2.4 2.4 0 0 0 4 21.5V5.4Z",stroke:"currentColor",strokeWidth:"1.65",strokeLinejoin:"round"}),(0,Qn.jsx)("path",{d:"M4 18.4a2.4 2.4 0 0 1 2.4-2.3H20",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round"}),(0,Qn.jsx)("path",{d:"M8.2 7h7.6M8.2 10.2h4.6",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round"}),(0,Qn.jsx)("circle",{cx:"17.2",cy:"18.6",r:"2.1",fill:"currentColor",opacity:".9"})]})}function cb(t){t.effect(()=>{let e=document.createElement("style");return e.dataset.dshReader="styles",e.textContent=`${nu}
${qc}
${gs}
${ou}`,document.head.appendChild(e),()=>e.remove()},"dsh-reader: styles"),t.slots.inject("main",function*(){yield t.slots.register({name:"main",key:ll},ru)}),t.slots.inject("sidebar.panellist",()=>t.slots.register({name:"sidebar.panellist",id:ll,order:10,label:()=>"\u9605\u8BFB"},lb))}

return module.exports;
}});

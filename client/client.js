window.__ModuleLoader__.load({ id: "dsh-reader", factory: (require) => {
var module = { exports: {} }; var exports = module.exports;
var lp=Object.create;var Ma=Object.defineProperty;var cp=Object.getOwnPropertyDescriptor;var dp=Object.getOwnPropertyNames;var up=Object.getPrototypeOf,hp=Object.prototype.hasOwnProperty;var xr=(t,e,r)=>()=>{if(r)throw r[0];try{return t&&(e=t(t=0)),e}catch(n){throw r=[n],n}};var Qi=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}},Vl=(t,e)=>{for(var r in e)Ma(t,r,{get:e[r],enumerable:!0})},Kl=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of dp(e))!hp.call(t,o)&&o!==r&&Ma(t,o,{get:()=>e[o],enumerable:!(n=cp(e,o))||n.enumerable});return t};var Lt=(t,e,r)=>(r=t!=null?lp(up(t)):{},Kl(e||!t||!t.__esModule?Ma(r,"default",{value:t,enumerable:!0}):r,t)),pp=t=>Kl(Ma({},"__esModule",{value:!0}),t);function Cg(t,e){return Tu(t,{i:2},e&&e.out,e&&e.dictionary)}function Eu(t,e){return Tu(t.subarray(Ng(t,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}function Pg(t,e){if(e){for(var r="",n=0;n<t.length;n+=16384)r+=String.fromCharCode.apply(null,t.subarray(n,n+16384));return r}else{if(Zs)return Zs.decode(t);var o=Rg(t),i=o.s,r=o.r;return r.length&&tr(8),i}}function Au(t,e){for(var r={},n=t.length-22;Cr(t,n)!=101010256;--n)(!n||t.length-n>65558)&&tr(13);var o=nn(t,n+8);if(!o)return{};var i=Cr(t,n+16),a=Cr(t,n-20)==117853008;if(a){var s=Cr(t,n-12);a=Cr(t,s)==101075792,a&&(o=Cr(t,s+32),i=Cr(t,s+48))}for(var l=e&&e.filter,d=0;d<o;++d){var p=Og(t,i,a),g=p[0],u=p[1],h=p[2],_=p[3],C=p[4],y=p[5],P=Mg(t,y);i=C,(!l||l({name:_,size:u,originalSize:h,compression:g}))&&(g?g==8?r[_]=Cg(t.subarray(P,P+u),{out:new yr(h)}):tr(14,"unknown compression type "+g):r[_]=Qs(t,P,P+u))}return r}var yr,No,vg,xu,vu,yg,yu,wu,_u,wg,ku,_g,_v,Ys,En,at,sa,la,at,at,at,at,Su,at,kg,Sg,Xs,Gr,Vs,Tg,Qs,Eg,tr,Tu,Ag,nn,Cr,Ks,Ng,Zs,Ig,Rg,Mg,Og,Lg,Js=xr(()=>{yr=Uint8Array,No=Uint16Array,vg=Int32Array,xu=new yr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),vu=new yr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),yg=new yr([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),yu=function(t,e){for(var r=new No(31),n=0;n<31;++n)r[n]=e+=1<<t[n-1];for(var o=new vg(r[30]),n=1;n<30;++n)for(var i=r[n];i<r[n+1];++i)o[i]=i-r[n]<<5|n;return{b:r,r:o}},wu=yu(xu,2),_u=wu.b,wg=wu.r;_u[28]=258,wg[258]=28;ku=yu(vu,0),_g=ku.b,_v=ku.r,Ys=new No(32768);for(at=0;at<32768;++at)En=(at&43690)>>1|(at&21845)<<1,En=(En&52428)>>2|(En&13107)<<2,En=(En&61680)>>4|(En&3855)<<4,Ys[at]=((En&65280)>>8|(En&255)<<8)>>1;sa=(function(t,e,r){for(var n=t.length,o=0,i=new No(e);o<n;++o)t[o]&&++i[t[o]-1];var a=new No(e);for(o=1;o<e;++o)a[o]=a[o-1]+i[o-1]<<1;var s;if(r){s=new No(1<<e);var l=15-e;for(o=0;o<n;++o)if(t[o])for(var d=o<<4|t[o],p=e-t[o],g=a[t[o]-1]++<<p,u=g|(1<<p)-1;g<=u;++g)s[Ys[g]>>l]=d}else for(s=new No(n),o=0;o<n;++o)t[o]&&(s[o]=Ys[a[t[o]-1]++]>>15-t[o]);return s}),la=new yr(288);for(at=0;at<144;++at)la[at]=8;for(at=144;at<256;++at)la[at]=9;for(at=256;at<280;++at)la[at]=7;for(at=280;at<288;++at)la[at]=8;Su=new yr(32);for(at=0;at<32;++at)Su[at]=5;kg=sa(la,9,1),Sg=sa(Su,5,1),Xs=function(t){for(var e=t[0],r=1;r<t.length;++r)t[r]>e&&(e=t[r]);return e},Gr=function(t,e,r){var n=e/8|0;return(t[n]|t[n+1]<<8)>>(e&7)&r},Vs=function(t,e){var r=e/8|0;return(t[r]|t[r+1]<<8|t[r+2]<<16)>>(e&7)},Tg=function(t){return(t+7)/8|0},Qs=function(t,e,r){return(e==null||e<0)&&(e=0),(r==null||r>t.length)&&(r=t.length),new yr(t.subarray(e,r))},Eg=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],tr=function(t,e,r){var n=new Error(e||Eg[t]);if(n.code=t,Error.captureStackTrace&&Error.captureStackTrace(n,tr),!r)throw n;return n},Tu=function(t,e,r,n){var o=t.length,i=n?n.length:0;if(!o||e.f&&!e.l)return r||new yr(0);var a=!r,s=a||e.i!=2,l=e.i;a&&(r=new yr(o*3));var d=function(Tt){var f=r.length;if(Tt>f){var c=new yr(Math.max(f*2,Tt));c.set(r),r=c}},p=e.f||0,g=e.p||0,u=e.b||0,h=e.l,_=e.d,C=e.m,y=e.n,P=o*8;do{if(!h){p=Gr(t,g,1);var E=Gr(t,g+1,3);if(g+=3,E)if(E==1)h=kg,_=Sg,C=9,y=5;else if(E==2){var k=Gr(t,g,31)+257,R=Gr(t,g+10,15)+4,I=k+Gr(t,g+5,31)+1;g+=14;for(var b=new yr(I),O=new yr(19),L=0;L<R;++L)O[yg[L]]=Gr(t,g+L*3,7);g+=R*3;for(var F=Xs(O),$=(1<<F)-1,J=sa(O,F,1),L=0;L<I;){var te=J[Gr(t,g,$)];g+=te&15;var v=te>>4;if(v<16)b[L++]=v;else{var ie=0,ue=0;for(v==16?(ue=3+Gr(t,g,3),g+=2,ie=b[L-1]):v==17?(ue=3+Gr(t,g,7),g+=3):v==18&&(ue=11+Gr(t,g,127),g+=7);ue--;)b[L++]=ie}}var U=b.subarray(0,k),se=b.subarray(k);C=Xs(U),y=Xs(se),h=sa(U,C,1),_=sa(se,y,1)}else tr(1);else{var v=Tg(g)+4,S=t[v-4]|t[v-3]<<8,M=v+S;if(M>o){l&&tr(0);break}s&&d(u+S),r.set(t.subarray(v,M),u),e.b=u+=S,e.p=g=M*8,e.f=p;continue}if(g>P){l&&tr(0);break}}s&&d(u+131072);for(var Y=(1<<C)-1,T=(1<<y)-1,q=g;;q=g){var ie=h[Vs(t,g)&Y],re=ie>>4;if(g+=ie&15,g>P){l&&tr(0);break}if(ie||tr(2),re<256)r[u++]=re;else if(re==256){q=g,h=null;break}else{var me=re-254;if(re>264){var L=re-257,ne=xu[L];me=Gr(t,g,(1<<ne)-1)+_u[L],g+=ne}var Te=_[Vs(t,g)&T],Xe=Te>>4;Te||tr(3),g+=Te&15;var se=_g[Xe];if(Xe>3){var ne=vu[Xe];se+=Vs(t,g)&(1<<ne)-1,g+=ne}if(g>P){l&&tr(0);break}s&&d(u+131072);var Ee=u+me;if(u<se){var $e=i-se,_e=Math.min(se,Ee);for($e+u<0&&tr(3);u<_e;++u)r[u]=n[$e+u]}for(;u<Ee;++u)r[u]=r[u-se]}}e.l=h,e.p=q,e.b=u,e.f=p,h&&(p=1,e.m=C,e.d=_,e.n=y)}while(!p);return u!=r.length&&a?Qs(r,0,u):r.subarray(0,u)},Ag=new yr(0),nn=function(t,e){return t[e]|t[e+1]<<8},Cr=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},Ks=function(t,e){return Cr(t,e)+Cr(t,e+4)*4294967296},Ng=function(t,e){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&tr(6,"invalid zlib data"),(t[1]>>5&1)==+!e&&tr(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};Zs=typeof TextDecoder<"u"&&new TextDecoder,Ig=0;try{Zs.decode(Ag,{stream:!0}),Ig=1}catch{}Rg=function(t){for(var e="",r=0;;){var n=t[r++],o=(n>127)+(n>223)+(n>239);if(r+o>t.length)return{s:e,r:Qs(t,r-1)};o?o==3?(n=((n&15)<<18|(t[r++]&63)<<12|(t[r++]&63)<<6|t[r++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):o&1?e+=String.fromCharCode((n&31)<<6|t[r++]&63):e+=String.fromCharCode((n&15)<<12|(t[r++]&63)<<6|t[r++]&63):e+=String.fromCharCode(n)}};Mg=function(t,e){return e+30+nn(t,e+26)+nn(t,e+28)},Og=function(t,e,r){var n=nn(t,e+28),o=nn(t,e+30),i=Pg(t.subarray(e+46,e+46+n),!(nn(t,e+8)&2048)),a=e+46+n,s=Lg(t,a,o,r,Cr(t,e+20),Cr(t,e+24),Cr(t,e+42)),l=s[0],d=s[1],p=s[2];return[nn(t,e+10),l,d,i,a+o+nn(t,e+32),p]},Lg=function(t,e,r,n,o,i,a){var s=o==4294967295,l=i==4294967295,d=a==4294967295,p=e+r,g=s+l+d;if(n&&g){for(;e+4<p;e+=4+nn(t,e+2))if(nn(t,e)==1)return[s?Ks(t,e+4+8*l):o,l?Ks(t,e+4):i,d?Ks(t,e+4+8*(l+s)):a,1];n<2&&tr(13)}return[o,i,a,0]}});function or(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return sl(t,e,n)}}function Wg(t){return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return ll(t,r)}}function We(t,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ti;Nu&&Nu(t,null);let n=e.length;for(;n--;){let o=e[n];if(typeof o=="string"){let i=r(o);i!==o&&(Dg(e)||(e[n]=i),o=i)}t[o]=!0}return t}function jg(t){for(let e=0;e<t.length;e++)qr(t,e)||(t[e]=null);return t}function on(t){let e=il(null);for(let[r,n]of Du(t))qr(t,r)&&(Array.isArray(n)?e[r]=jg(n):n&&typeof n=="object"&&n.constructor===Object?e[r]=on(n):e[r]=n);return e}function ha(t,e){for(;t!==null;){let n=zg(t,e);if(n){if(n.get)return or(n.get);if(typeof n.value=="function")return or(n.value)}t=Fg(t)}function r(){return null}return r}function Bu(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:tm(),e=xe=>Bu(xe);if(e.version="3.3.1",e.removed=[],!t||!t.document||t.document.nodeType!==pa.document||!t.Element)return e.isSupported=!1,e;let{document:r}=t,n=r,o=n.currentScript,{DocumentFragment:i,HTMLTemplateElement:a,Node:s,Element:l,NodeFilter:d,NamedNodeMap:p=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:g,DOMParser:u,trustedTypes:h}=t,_=l.prototype,C=ha(_,"cloneNode"),y=ha(_,"remove"),P=ha(_,"nextSibling"),E=ha(_,"childNodes"),v=ha(_,"parentNode");if(typeof a=="function"){let xe=r.createElement("template");xe.content&&xe.content.ownerDocument&&(r=xe.content.ownerDocument)}let S,M="",{implementation:k,createNodeIterator:R,createDocumentFragment:I,getElementsByTagName:b}=r,{importNode:O}=n,L=Lu();e.isSupported=typeof Du=="function"&&typeof v=="function"&&k&&k.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:F,ERB_EXPR:$,TMPLIT_EXPR:J,DATA_ATTR:te,ARIA_ATTR:ie,IS_SCRIPT_OR_DATA:ue,ATTR_WHITESPACE:U,CUSTOM_ELEMENT:se}=Ou,{IS_ALLOWED_URI:Y}=Ou,T=null,q=We({},[...Iu,...rl,...nl,...ol,...Ru]),re=null,me=We({},[...Pu,...al,...Mu,...Si]),ne=Object.seal(il(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Te=null,Xe=null,Ee=Object.seal(il(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),$e=!0,_e=!0,Tt=!1,f=!0,c=!1,w=!0,x=!1,V=!1,de=!1,he=!1,ye=!1,we=!1,Ve=!0,Me=!1,Ye="user-content-",st=!0,et=!1,je={},pe=null,Le=We({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),It=null,lt=We({},["audio","video","img","source","image","track"]),Ze=null,wt=We({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Qe="http://www.w3.org/1998/Math/MathML",lr="http://www.w3.org/2000/svg",Mt="http://www.w3.org/1999/xhtml",Bt=Mt,_r=!1,oe=null,be=We({},[Qe,lr,Mt],el),Ie=We({},["mi","mo","mn","ms","mtext"]),Pe=We({},["annotation-xml"]),ct=We({},["title","style","font","a","script"]),Ot=null,cr=["application/xhtml+xml","text/html"],Et="text/html",mt=null,bt=null,hn=r.createElement("form"),De=function(A){return A instanceof RegExp||A instanceof Function},pn=function(){let A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(bt&&bt===A)){if((!A||typeof A!="object")&&(A={}),A=on(A),Ot=cr.indexOf(A.PARSER_MEDIA_TYPE)===-1?Et:A.PARSER_MEDIA_TYPE,mt=Ot==="application/xhtml+xml"?el:Ti,T=qr(A,"ALLOWED_TAGS")?We({},A.ALLOWED_TAGS,mt):q,re=qr(A,"ALLOWED_ATTR")?We({},A.ALLOWED_ATTR,mt):me,oe=qr(A,"ALLOWED_NAMESPACES")?We({},A.ALLOWED_NAMESPACES,el):be,Ze=qr(A,"ADD_URI_SAFE_ATTR")?We(on(wt),A.ADD_URI_SAFE_ATTR,mt):wt,It=qr(A,"ADD_DATA_URI_TAGS")?We(on(lt),A.ADD_DATA_URI_TAGS,mt):lt,pe=qr(A,"FORBID_CONTENTS")?We({},A.FORBID_CONTENTS,mt):Le,Te=qr(A,"FORBID_TAGS")?We({},A.FORBID_TAGS,mt):on({}),Xe=qr(A,"FORBID_ATTR")?We({},A.FORBID_ATTR,mt):on({}),je=qr(A,"USE_PROFILES")?A.USE_PROFILES:!1,$e=A.ALLOW_ARIA_ATTR!==!1,_e=A.ALLOW_DATA_ATTR!==!1,Tt=A.ALLOW_UNKNOWN_PROTOCOLS||!1,f=A.ALLOW_SELF_CLOSE_IN_ATTR!==!1,c=A.SAFE_FOR_TEMPLATES||!1,w=A.SAFE_FOR_XML!==!1,x=A.WHOLE_DOCUMENT||!1,he=A.RETURN_DOM||!1,ye=A.RETURN_DOM_FRAGMENT||!1,we=A.RETURN_TRUSTED_TYPE||!1,de=A.FORCE_BODY||!1,Ve=A.SANITIZE_DOM!==!1,Me=A.SANITIZE_NAMED_PROPS||!1,st=A.KEEP_CONTENT!==!1,et=A.IN_PLACE||!1,Y=A.ALLOWED_URI_REGEXP||Fu,Bt=A.NAMESPACE||Mt,Ie=A.MATHML_TEXT_INTEGRATION_POINTS||Ie,Pe=A.HTML_INTEGRATION_POINTS||Pe,ne=A.CUSTOM_ELEMENT_HANDLING||{},A.CUSTOM_ELEMENT_HANDLING&&De(A.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(ne.tagNameCheck=A.CUSTOM_ELEMENT_HANDLING.tagNameCheck),A.CUSTOM_ELEMENT_HANDLING&&De(A.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(ne.attributeNameCheck=A.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),A.CUSTOM_ELEMENT_HANDLING&&typeof A.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(ne.allowCustomizedBuiltInElements=A.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),c&&(_e=!1),ye&&(he=!0),je&&(T=We({},Ru),re=[],je.html===!0&&(We(T,Iu),We(re,Pu)),je.svg===!0&&(We(T,rl),We(re,al),We(re,Si)),je.svgFilters===!0&&(We(T,nl),We(re,al),We(re,Si)),je.mathMl===!0&&(We(T,ol),We(re,Mu),We(re,Si))),A.ADD_TAGS&&(typeof A.ADD_TAGS=="function"?Ee.tagCheck=A.ADD_TAGS:(T===q&&(T=on(T)),We(T,A.ADD_TAGS,mt))),A.ADD_ATTR&&(typeof A.ADD_ATTR=="function"?Ee.attributeCheck=A.ADD_ATTR:(re===me&&(re=on(re)),We(re,A.ADD_ATTR,mt))),A.ADD_URI_SAFE_ATTR&&We(Ze,A.ADD_URI_SAFE_ATTR,mt),A.FORBID_CONTENTS&&(pe===Le&&(pe=on(pe)),We(pe,A.FORBID_CONTENTS,mt)),A.ADD_FORBID_CONTENTS&&(pe===Le&&(pe=on(pe)),We(pe,A.ADD_FORBID_CONTENTS,mt)),st&&(T["#text"]=!0),x&&We(T,["html","head","body"]),T.table&&(We(T,["tbody"]),delete Te.tbody),A.TRUSTED_TYPES_POLICY){if(typeof A.TRUSTED_TYPES_POLICY.createHTML!="function")throw ua('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof A.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ua('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');S=A.TRUSTED_TYPES_POLICY,M=S.createHTML("")}else S===void 0&&(S=rm(h,o)),S!==null&&typeof M=="string"&&(M=S.createHTML(""));nr&&nr(A),bt=A}},pr=We({},[...rl,...nl,...Gg]),dr=We({},[...ol,...qg]),ho=function(A){let Q=v(A);(!Q||!Q.tagName)&&(Q={namespaceURI:Bt,tagName:"template"});let ce=Ti(A.tagName),rt=Ti(Q.tagName);return oe[A.namespaceURI]?A.namespaceURI===lr?Q.namespaceURI===Mt?ce==="svg":Q.namespaceURI===Qe?ce==="svg"&&(rt==="annotation-xml"||Ie[rt]):!!pr[ce]:A.namespaceURI===Qe?Q.namespaceURI===Mt?ce==="math":Q.namespaceURI===lr?ce==="math"&&Pe[rt]:!!dr[ce]:A.namespaceURI===Mt?Q.namespaceURI===lr&&!Pe[rt]||Q.namespaceURI===Qe&&!Ie[rt]?!1:!dr[ce]&&(ct[ce]||!pr[ce]):!!(Ot==="application/xhtml+xml"&&oe[A.namespaceURI]):!1},Ut=function(A){ca(e.removed,{element:A});try{v(A).removeChild(A)}catch{y(A)}},kr=function(A,Q){try{ca(e.removed,{attribute:Q.getAttributeNode(A),from:Q})}catch{ca(e.removed,{attribute:null,from:Q})}if(Q.removeAttribute(A),A==="is")if(he||ye)try{Ut(Q)}catch{}else try{Q.setAttribute(A,"")}catch{}},xt=function(A){let Q=null,ce=null;if(de)A="<remove></remove>"+A;else{let He=tl(A,/^[\r\n\t ]+/);ce=He&&He[0]}Ot==="application/xhtml+xml"&&Bt===Mt&&(A='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+A+"</body></html>");let rt=S?S.createHTML(A):A;if(Bt===Mt)try{Q=new u().parseFromString(rt,Ot)}catch{}if(!Q||!Q.documentElement){Q=k.createDocument(Bt,"template",null);try{Q.documentElement.innerHTML=_r?M:rt}catch{}}let gt=Q.body||Q.documentElement;return A&&ce&&gt.insertBefore(r.createTextNode(ce),gt.childNodes[0]||null),Bt===Mt?b.call(Q,x?"html":"body")[0]:x?Q.documentElement:gt},po=function(A){return R.call(A.ownerDocument||A,A,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},fr=function(A){return A instanceof g&&(typeof A.nodeName!="string"||typeof A.textContent!="string"||typeof A.removeChild!="function"||!(A.attributes instanceof p)||typeof A.removeAttribute!="function"||typeof A.setAttribute!="function"||typeof A.namespaceURI!="string"||typeof A.insertBefore!="function"||typeof A.hasChildNodes!="function")},qt=function(A){return typeof s=="function"&&A instanceof s};function Xt(xe,A,Q){ki(xe,ce=>{ce.call(e,A,Q,bt)})}let An=function(A){let Q=null;if(Xt(L.beforeSanitizeElements,A,null),fr(A))return Ut(A),!0;let ce=mt(A.nodeName);if(Xt(L.uponSanitizeElement,A,{tagName:ce,allowedTags:T}),w&&A.hasChildNodes()&&!qt(A.firstElementChild)&&rr(/<[/\w!]/g,A.innerHTML)&&rr(/<[/\w!]/g,A.textContent)||A.nodeType===pa.progressingInstruction||w&&A.nodeType===pa.comment&&rr(/<[/\w]/g,A.data))return Ut(A),!0;if(!(Ee.tagCheck instanceof Function&&Ee.tagCheck(ce))&&(!T[ce]||Te[ce])){if(!Te[ce]&&go(ce)&&(ne.tagNameCheck instanceof RegExp&&rr(ne.tagNameCheck,ce)||ne.tagNameCheck instanceof Function&&ne.tagNameCheck(ce)))return!1;if(st&&!pe[ce]){let rt=v(A)||A.parentNode,gt=E(A)||A.childNodes;if(gt&&rt){let He=gt.length;for(let At=He-1;At>=0;--At){let ut=C(gt[At],!0);ut.__removalCount=(A.__removalCount||0)+1,rt.insertBefore(ut,P(A))}}}return Ut(A),!0}return A instanceof l&&!ho(A)||(ce==="noscript"||ce==="noembed"||ce==="noframes")&&rr(/<\/no(script|embed|frames)/i,A.innerHTML)?(Ut(A),!0):(c&&A.nodeType===pa.text&&(Q=A.textContent,ki([F,$,J],rt=>{Q=da(Q,rt," ")}),A.textContent!==Q&&(ca(e.removed,{element:A.cloneNode()}),A.textContent=Q)),Xt(L.afterSanitizeElements,A,null),!1)},fo=function(A,Q,ce){if(Ve&&(Q==="id"||Q==="name")&&(ce in r||ce in hn))return!1;if(!(_e&&!Xe[Q]&&rr(te,Q))){if(!($e&&rr(ie,Q))){if(!(Ee.attributeCheck instanceof Function&&Ee.attributeCheck(Q,A))){if(!re[Q]||Xe[Q]){if(!(go(A)&&(ne.tagNameCheck instanceof RegExp&&rr(ne.tagNameCheck,A)||ne.tagNameCheck instanceof Function&&ne.tagNameCheck(A))&&(ne.attributeNameCheck instanceof RegExp&&rr(ne.attributeNameCheck,Q)||ne.attributeNameCheck instanceof Function&&ne.attributeNameCheck(Q,A))||Q==="is"&&ne.allowCustomizedBuiltInElements&&(ne.tagNameCheck instanceof RegExp&&rr(ne.tagNameCheck,ce)||ne.tagNameCheck instanceof Function&&ne.tagNameCheck(ce))))return!1}else if(!Ze[Q]){if(!rr(Y,da(ce,U,""))){if(!((Q==="src"||Q==="xlink:href"||Q==="href")&&A!=="script"&&Hg(ce,"data:")===0&&It[A])){if(!(Tt&&!rr(ue,da(ce,U,"")))){if(ce)return!1}}}}}}}return!0},go=function(A){return A!=="annotation-xml"&&tl(A,se)},zn=function(A){Xt(L.beforeSanitizeAttributes,A,null);let{attributes:Q}=A;if(!Q||fr(A))return;let ce={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:re,forceKeepAttr:void 0},rt=Q.length;for(;rt--;){let gt=Q[rt],{name:He,namespaceURI:At,value:ut}=gt,gr=mt(He),Yt=ut,Rt=He==="value"?Yt:Ug(Yt);if(ce.attrName=gr,ce.attrValue=Rt,ce.keepAttr=!0,ce.forceKeepAttr=void 0,Xt(L.uponSanitizeAttribute,A,ce),Rt=ce.attrValue,Me&&(gr==="id"||gr==="name")&&(kr(He,A),Rt=Ye+Rt),w&&rr(/((--!?|])>)|<\/(style|title|textarea)/i,Rt)){kr(He,A);continue}if(gr==="attributename"&&tl(Rt,"href")){kr(He,A);continue}if(ce.forceKeepAttr)continue;if(!ce.keepAttr){kr(He,A);continue}if(!f&&rr(/\/>/i,Rt)){kr(He,A);continue}c&&ki([F,$,J],fn=>{Rt=da(Rt,fn," ")});let Bn=mt(A.nodeName);if(!fo(Bn,gr,Rt)){kr(He,A);continue}if(S&&typeof h=="object"&&typeof h.getAttributeType=="function"&&!At)switch(h.getAttributeType(Bn,gr)){case"TrustedHTML":{Rt=S.createHTML(Rt);break}case"TrustedScriptURL":{Rt=S.createScriptURL(Rt);break}}if(Rt!==Yt)try{At?A.setAttributeNS(At,He,Rt):A.setAttribute(He,Rt),fr(A)?Ut(A):Cu(e.removed)}catch{kr(He,A)}}Xt(L.afterSanitizeAttributes,A,null)},Vr=function xe(A){let Q=null,ce=po(A);for(Xt(L.beforeSanitizeShadowDOM,A,null);Q=ce.nextNode();)Xt(L.uponSanitizeShadowNode,Q,null),An(Q),zn(Q),Q.content instanceof i&&xe(Q.content);Xt(L.afterSanitizeShadowDOM,A,null)};return e.sanitize=function(xe){let A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},Q=null,ce=null,rt=null,gt=null;if(_r=!xe,_r&&(xe="<!-->"),typeof xe!="string"&&!qt(xe))if(typeof xe.toString=="function"){if(xe=xe.toString(),typeof xe!="string")throw ua("dirty is not a string, aborting")}else throw ua("toString is not a function");if(!e.isSupported)return xe;if(V||pn(A),e.removed=[],typeof xe=="string"&&(et=!1),et){if(xe.nodeName){let ut=mt(xe.nodeName);if(!T[ut]||Te[ut])throw ua("root node is forbidden and cannot be sanitized in-place")}}else if(xe instanceof s)Q=xt("<!---->"),ce=Q.ownerDocument.importNode(xe,!0),ce.nodeType===pa.element&&ce.nodeName==="BODY"||ce.nodeName==="HTML"?Q=ce:Q.appendChild(ce);else{if(!he&&!c&&!x&&xe.indexOf("<")===-1)return S&&we?S.createHTML(xe):xe;if(Q=xt(xe),!Q)return he?null:we?M:""}Q&&de&&Ut(Q.firstChild);let He=po(et?xe:Q);for(;rt=He.nextNode();)An(rt),zn(rt),rt.content instanceof i&&Vr(rt.content);if(et)return xe;if(he){if(ye)for(gt=I.call(Q.ownerDocument);Q.firstChild;)gt.appendChild(Q.firstChild);else gt=Q;return(re.shadowroot||re.shadowrootmode)&&(gt=O.call(n,gt,!0)),gt}let At=x?Q.outerHTML:Q.innerHTML;return x&&T["!doctype"]&&Q.ownerDocument&&Q.ownerDocument.doctype&&Q.ownerDocument.doctype.name&&rr(zu,Q.ownerDocument.doctype.name)&&(At="<!DOCTYPE "+Q.ownerDocument.doctype.name+`>
`+At),c&&ki([F,$,J],ut=>{At=da(At,ut," ")}),S&&we?S.createHTML(At):At},e.setConfig=function(){let xe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};pn(xe),V=!0},e.clearConfig=function(){bt=null,V=!1},e.isValidAttribute=function(xe,A,Q){bt||pn({});let ce=mt(xe),rt=mt(A);return fo(ce,rt,Q)},e.addHook=function(xe,A){typeof A=="function"&&ca(L[xe],A)},e.removeHook=function(xe,A){if(A!==void 0){let Q=Bg(L[xe],A);return Q===-1?void 0:$g(L[xe],Q,1)[0]}return Cu(L[xe])},e.removeHooks=function(xe){L[xe]=[]},e.removeAllHooks=function(){L=Lu()},e}var Du,Nu,Dg,Fg,zg,nr,Ir,il,sl,ll,ki,Bg,Cu,ca,$g,Ti,el,tl,da,Hg,Ug,qr,rr,ua,Iu,rl,nl,Gg,ol,qg,Ru,Pu,al,Mu,Si,Xg,Vg,Kg,Yg,Zg,Fu,Qg,Jg,zu,em,Ou,pa,tm,rm,Lu,fa,$u=xr(()=>{({entries:Du,setPrototypeOf:Nu,isFrozen:Dg,getPrototypeOf:Fg,getOwnPropertyDescriptor:zg}=Object),{freeze:nr,seal:Ir,create:il}=Object,{apply:sl,construct:ll}=typeof Reflect<"u"&&Reflect;nr||(nr=function(e){return e});Ir||(Ir=function(e){return e});sl||(sl=function(e,r){for(var n=arguments.length,o=new Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];return e.apply(r,o)});ll||(ll=function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return new e(...n)});ki=or(Array.prototype.forEach),Bg=or(Array.prototype.lastIndexOf),Cu=or(Array.prototype.pop),ca=or(Array.prototype.push),$g=or(Array.prototype.splice),Ti=or(String.prototype.toLowerCase),el=or(String.prototype.toString),tl=or(String.prototype.match),da=or(String.prototype.replace),Hg=or(String.prototype.indexOf),Ug=or(String.prototype.trim),qr=or(Object.prototype.hasOwnProperty),rr=or(RegExp.prototype.test),ua=Wg(TypeError);Iu=nr(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),rl=nr(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),nl=nr(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Gg=nr(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ol=nr(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),qg=nr(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ru=nr(["#text"]),Pu=nr(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),al=nr(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Mu=nr(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Si=nr(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Xg=Ir(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Vg=Ir(/<%[\w\W]*|[\w\W]*%>/gm),Kg=Ir(/\$\{[\w\W]*/gm),Yg=Ir(/^data-[\-\w.\u00B7-\uFFFF]+$/),Zg=Ir(/^aria-[\-\w]+$/),Fu=Ir(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Qg=Ir(/^(?:\w+script|data):/i),Jg=Ir(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),zu=Ir(/^html$/i),em=Ir(/^[a-z][.\w]*(-[.\w]+)+$/i),Ou=Object.freeze({__proto__:null,ARIA_ATTR:Zg,ATTR_WHITESPACE:Jg,CUSTOM_ELEMENT:em,DATA_ATTR:Yg,DOCTYPE_NAME:zu,ERB_EXPR:Vg,IS_ALLOWED_URI:Fu,IS_SCRIPT_OR_DATA:Qg,MUSTACHE_EXPR:Xg,TMPLIT_EXPR:Kg}),pa={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},tm=function(){return typeof window>"u"?null:window},rm=function(e,r){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null,o="data-tt-policy-suffix";r&&r.hasAttribute(o)&&(n=r.getAttribute(o));let i="dompurify"+(n?"#"+n:"");try{return e.createPolicy(i,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},Lu=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};fa=Bu()});function Wu(){if(to)return to;if(typeof fa?.sanitize=="function"&&fa.isSupported)to=fa;else{let t=typeof window<"u"?window:globalThis.window;if(!t)throw new Error("\u65E0\u6CD5\u6E05\u7406 HTML\uFF1A\u5F53\u524D\u73AF\u5883\u7F3A\u5C11\u6D4F\u89C8\u5668 window\u3002");to=fa(t)}if(!to||typeof to.sanitize!="function")throw new Error("\u65E0\u6CD5\u6E05\u7406 HTML\uFF1A\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 DOMPurify\u3002");return to}function Ei(t){if(!t)return"";try{return Wu().sanitize(String(t),Uu)}catch{return""}}function cl(t){if(!t)return"";try{return Wu().sanitize(String(t),om)}catch{return""}}function ro(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function pt(t){return String(t??"").replace(/\u00a0/g," ").replace(/[\t\f\v\u2000-\u200b\u2028\u2029]+/g," ").replace(/[ ]*\n[ ]*/g," ").replace(/ {2,}/g," ").trim()}function ga(t="div"){return document.createElement(t)}function an(t){try{return new DOMParser().parseFromString(String(t??""),"text/html")}catch{return null}}function Co(t){try{let e=new DOMParser().parseFromString(String(t??""),"application/xml");return!e||!e.documentElement||e.documentElement.localName?.toLowerCase()==="parsererror"||ar(e,"parsererror")?null:e}catch{return null}}function wr(t){return String(t?.localName||t?.nodeName||"").toLowerCase()}function zt(t,e){let r=[];if(!t)return r;let n=String(e).toLowerCase(),o=i=>{for(let a=i.firstChild;a;a=a.nextSibling)a.nodeType===1&&(wr(a)===n&&r.push(a),o(a))};return o(t),r}function ar(t,e){if(!t)return null;let r=String(e).toLowerCase(),n=null,o=i=>{for(let a=i.firstChild;a&&!n;a=a.nextSibling)if(a.nodeType===1){if(wr(a)===r){n=a;return}o(a)}};return o(t),n}function it(t,e){if(!t||!e)return null;let r=t.getAttribute?.(e);if(r!=null)return r;let n=String(e).toLowerCase(),o=t.attributes;if(!o)return null;for(let i=0;i<o.length;i+=1){let a=o[i];if(!a)continue;if(String(a.name||"").toLowerCase()===n||!n.includes(":")&&String(a.localName||"").toLowerCase()===n)return a.value}return null}var Hu,nm,Uu,om,to,no=xr(()=>{$u();Hu=Object.freeze(["b","strong","i","em","u","s","sub","sup","code","span","a","br","ruby","rt","rp","small","mark"]),nm=Object.freeze(["table","caption","thead","tbody","tfoot","tr","th","td","colgroup","col"]),Uu=Object.freeze({ALLOWED_TAGS:[...Hu],ALLOWED_ATTR:["href"],ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!1,KEEP_CONTENT:!0,FORBID_TAGS:["script","style","iframe","frame","frameset","object","embed","applet","form","input","button","select","textarea","meta","link","base","svg","math","template","noscript"],FORBID_ATTR:["style","src","srcset","formaction","xlink:href","onerror","onload","onclick"]}),om=Object.freeze({...Uu,ALLOWED_TAGS:[...Hu,...nm]}),to=null});function ao(t){return t.nextId()}function lm(t){if(!t||t.nodeType!==1)return!1;if(t.hasAttribute?.("hidden")||it(t,"aria-hidden")==="true")return!0;let e=it(t,"style")||"";return/display\s*:\s*none|visibility\s*:\s*hidden/i.test(e)}function cm(t,e){typeof t?.warn=="function"&&t.warn(e)}function ul(t){for(let e of Array.from(t?.children||[])){let r=wr(e);if(ju.has(r)&&r!=="span"&&r!=="a"||ul(e))return!0}return!1}function Gu(t){let e=Array.from(t.querySelectorAll(sm));for(let r=e.length-1;r>=0;r-=1){let n=e[r];if(!n.parentNode)continue;let o=t.ownerDocument.createDocumentFragment();for(;n.firstChild;)o.appendChild(n.firstChild);o.appendChild(t.ownerDocument.createElement("br")),n.parentNode.replaceChild(o,n)}return t}function qu(t){for(let e of zt(t,"img"))e.remove();for(let e of zt(t,"image"))e.remove()}function oo(t){let e=[],r=n=>{for(let o of Array.from(n?.children||[])){let i=wr(o);i==="img"||i==="image"?e.push(o):i==="svg"?e.push(...zt(o,"image")):i!=="script"&&i!=="style"&&r(o)}};return r(t),e}function hl(t,e){if(!t||typeof e?.resolveLink!="function")return;let r=Array.from(t.getElementsByTagName?.("a")||[]);for(let n of r){let o=n.getAttribute("href");if(n.removeAttribute("href"),n.removeAttribute("data-chapter"),n.removeAttribute("data-anchor"),!o)continue;let i=null;try{i=e.resolveLink(o)}catch{i=null}if(i){if(i.external){i.href&&n.setAttribute("href",i.href);continue}Number.isInteger(i.chapter)&&i.chapter>=0&&(n.setAttribute("data-chapter",String(i.chapter)),i.anchor&&n.setAttribute("data-anchor",String(i.anchor).slice(0,300)))}}}function Xu(t,e){let r=Ei(t.innerHTML);if(!r)return null;let n=ga("div");n.innerHTML=r,hl(n,e);let o=n.innerHTML.replace(/^(?:\s*<br\s*\/?>\s*)+/i,"").replace(/(?:\s*<br\s*\/?>\s*)+$/i,"");if(!o)return null;let i=pt(n.textContent);return i?{html:o,text:i}:null}function Ci(t,e,r,n={}){let o=Ei(r);if(!o)return null;let i=ga("div");i.innerHTML=o,hl(i,t);let a=i.innerHTML,s=pt(i.textContent);return s?{id:ao(t),kind:e,html:a,text:s,...n}:null}function pl(t,e){let r=String(e??"").replace(/\r\n?/g,`
`).replace(/\u00a0/g," ").replace(/^\n+|\n+$/g,"");return r.trim()?{id:ao(t),kind:"code",html:ro(r),text:r}:null}function fl(t,e,r={}){let n=cl(e);if(!n)return null;let o=ga("div");if(o.innerHTML=n,!o.querySelector("table"))return null;hl(o,t);let a=o.innerHTML,s=pt(o.textContent);return s?{id:ao(t),kind:"table",html:a,text:s,...r}:null}function gl(t,{src:e,alt:r="",caption:n=""}={}){if(!e)return null;let o={id:ao(t),kind:"image",src:e},i=pt(r),a=pt(n);return i&&(o.alt=i),a&&(o.caption=a),o}function ml(t){return{id:ao(t),kind:"rule"}}function io(t,e){let r=[];return t&&Ai(t,e,r),r}function Ai(t,e,r){let n=[],o=()=>{if(n.length===0)return;let i=ga("div");for(let s of n)i.appendChild(s.cloneNode(!0));let a=pt(i.textContent)!==""||oo(i).length>0;n=[],a&&On("paragraph",i,e,r)};for(let i of Array.from(t.childNodes||[])){if(i.nodeType===3){String(i.textContent||"").trim()&&n.push(i);continue}if(i.nodeType!==1||lm(i))continue;let a=wr(i);am.has(a)||(ju.has(a)?(o(),dm(i,a,e,r)):n.push(i))}o()}function dm(t,e,r,n){if(dl.has(e)){On("heading",t,r,n,{level:Number(e.slice(1)),stripImages:!0,flatten:!1});return}switch(e){case"p":On("paragraph",t,r,n);return;case"li":case"dt":On("list-item",t,r,n,{flatten:!0});return;case"dd":On("paragraph",t,r,n,{flatten:!0});return;case"blockquote":On("quote",t,r,n,{flatten:!0});return;case"pre":hm(t,r,n);return;case"table":pm(t,r,n);return;case"hr":n.push(ml(r));return;case"figure":{um(t,r,n);return}case"img":case"image":Ni(t,r,n,"");return;case"picture":case"svg":{for(let o of oo(t))Ni(o,r,n,"");return}case"ul":case"ol":{for(let o of Array.from(t.children||[]))wr(o)==="li"?On("list-item",o,r,n,{flatten:!0}):Ai(o,r,n);return}case"dl":{Ai(t,r,n);return}case"figcaption":return;default:im.has(e)||ul(t)?Ai(t,r,n):On("paragraph",t,r,n)}}function On(t,e,r,n,o={}){let i=e.cloneNode(!0),a=oo(i);if(a.length>0)for(let l of a)l.remove();o.stripImages&&qu(i),o.flatten!==!1&&Gu(i);let s=Xu(i,r);if(s){let l={id:ao(r),kind:t,html:s.html,text:s.text};o.level&&(l.level=o.level),n.push(l)}if(!o.stripImages&&a.length>0){let l=oo(e);for(let d of l)Ni(d,r,n,"")}}function Ni(t,e,r,n){let o=it(t,"src")||it(t,"xlink:href")||it(t,"href");if(!o)return;let i=null;try{i=typeof e?.resolveImage=="function"?e.resolveImage(o):null}catch{i=null}if(!i||!i.src)return;let a=it(t,"alt")||it(t,"title")||i.alt||"",s=gl(e,{src:i.src,alt:a,caption:n||i.caption||""});s&&r.push(s)}function um(t,e,r){let n=zt(t,"figcaption")[0]||null,o=n?pt(n.textContent):"",i=oo(t);i.length>0&&i.forEach((l,d)=>{Ni(l,e,r,d===0?o:"")});let a=t.cloneNode(!0);qu(a);for(let l of zt(a,"figcaption"))l.remove();ul(a)&&Gu(a);let s=Xu(a,e);s&&s.text!==o&&r.push({id:ao(e),kind:"paragraph",html:s.html,text:s.text})}function hm(t,e,r){let n=zt(t,"code")[0]||t,o=String(n.textContent||"").replace(/\r\n?/g,`
`);if(!o.trim())return;let i=Ei(n.innerHTML),a=pl(e,o);a&&(i&&(a.html=i),r.push(a))}function pm(t,e,r){let n=t.cloneNode(!0),o=cl(n.outerHTML);if(!o){cm(e,"\u5DF2\u8DF3\u8FC7\u4E00\u4E2A\u65E0\u6CD5\u89E3\u6790\u7684\u8868\u683C\u3002");return}let i=fl(e,o);i&&r.push(i)}var dl,am,im,ju,sm,ma=xr(()=>{no();dl=new Set(["h1","h2","h3","h4","h5","h6"]),am=new Set(["script","style","noscript","template","head","title","meta","link","base","iframe","frame","frameset","object","embed","applet","form","input","select","textarea","button","audio","video","source","track","canvas","map","area","math","nav"]),im=new Set(["div","section","article","main","header","footer","aside","center","details","summary","fieldset","body","html","hgroup","dl"]),ju=new Set([...dl,"p","div","section","article","main","header","footer","aside","center","details","summary","fieldset","body","html","hgroup","dl","dt","dd","blockquote","pre","table","ul","ol","li","figure","figcaption","hr","address","picture","svg","img","image"]),sm=[...dl,"p","div","section","article","header","footer","aside","center","details","summary","fieldset","blockquote","ul","ol","li","dl","dt","dd","table","thead","tbody","tfoot","tr","td","th","caption","pre","figure","figcaption","address","hgroup"].join(",")});function Ii(t){if(typeof t!="string"||!t)return"";let e=t.split(/[\\/]/).pop()||"",r=/\.([A-Za-z0-9]+)$/.exec(e);return r?r[1].toLowerCase():""}function Rr(t){let e=String(t||"").replace(/\\/g,"/"),r=e.lastIndexOf("/");return r>=0?e.slice(r+1):e}function Io(t){let e=String(t||"").replace(/\\/g,"/"),r=e.lastIndexOf("/");return r>0?e.slice(0,r):""}function bl(t){let e=[];for(let r of String(t||"").replace(/\\/g,"/").split("/"))if(!(!r||r===".")){if(r===".."){e.pop();continue}e.push(r)}return e.join("/")}function ba(t){let e=String(t||""),r=e.indexOf("#"),n=r>=0?e.slice(0,r):e,o=r>=0?e.slice(r+1):"";try{o=decodeURIComponent(o)}catch{}let i=n.indexOf("?");return{path:i>=0?n.slice(0,i):n,fragment:o}}function Ln(t,e){if(!e)return null;let r=String(e).trim();if(!r||r.startsWith("#")||/^[a-z][a-z0-9+.-]*:/i.test(r)||r.startsWith("//"))return null;let{path:n}=ba(r);if(!n)return null;let o=n;try{o=decodeURIComponent(n)}catch{}o=o.replace(/\\/g,"/");let i=o.startsWith("/")?o.slice(1):t?`${t}/${o}`:o;return bl(i)||null}function Ku(t){let e=new Map,r=[];for(let[n,o]of Object.entries(t||{})){if(!o||/\/$/.test(n))continue;let i=bl(n);if(!i)continue;let a=i.toLowerCase();e.has(a)||(e.set(a,{name:i,bytes:o}),r.push(i))}return{names:r,get(n){let o=bl(n||"");return o&&e.get(o.toLowerCase())||null},has(n){return!!this.get(n)}}}function xa(t){return fm[Ii(t)]||"application/octet-stream"}async function sn(t){if(!t||typeof t.arrayBuffer!="function")throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u6570\u636E\uFF1A\u8BF7\u9009\u62E9\u4E00\u4E2A\u6709\u6548\u7684\u6587\u6863\u6587\u4EF6\u3002");let e;try{e=await t.arrayBuffer()}catch{throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u6570\u636E\uFF0C\u6587\u4EF6\u53EF\u80FD\u5DF2\u88AB\u79FB\u52A8\u6216\u635F\u574F\u3002")}let r=new Uint8Array(e);if(r.length===0)throw new Error("\u6587\u4EF6\u5185\u5BB9\u4E3A\u7A7A\u3002");return r}function ln(t=40){let e=[],r=new Set,n=!1;return{warnings:e,warn:i=>{let a=String(i||"").trim();!a||r.has(a)||(r.add(a),e.length<t?e.push(a):n||(n=!0,e.push("\u8FD8\u6709\u66F4\u591A\u89E3\u6790\u8B66\u544A\u672A\u663E\u793A\u3002")))}}}function Pr(t,e){if(t instanceof Error&&/[\u4e00-\u9fff]/.test(t.message))return t;let r=t instanceof Error?t.message:String(t??""),n=r?`${e}\uFF1A${r}`:`${e}\u3002`;return new Error(/[。！？]$/.test(n)?n:`${n}\u3002`)}function va(t,e){let r=(Array.isArray(e)?e:[]).filter(i=>i&&Number.isInteger(i.chapterIndex)&&i.chapterIndex>=0&&i.chapterIndex<t.length&&i.title);for(let i=0;i<t.length;i+=1){let a=r.find(l=>l.chapterIndex===i),s=t[i].blocks.find(l=>l.kind==="heading"&&l.text);t[i].title=(a?.title||s?.text||`\u7B2C ${i+1} \u7AE0`).slice(0,120)}if(r.length===0)return t.map((i,a)=>({title:i.title,chapterIndex:a,depth:0}));let n=[],o=new Set;for(let i=0;i<t.length;i+=1){let a=r.filter(s=>s.chapterIndex===i);if(a.length===0){let s={title:t[i].title,chapterIndex:i,depth:0},l=`${i}|${s.title}|0`;o.has(l)||(o.add(l),n.push(s));continue}for(let s of a){let l=Number.isInteger(s.depth)&&s.depth>=0?s.depth:0,d=s.anchor?String(s.anchor).slice(0,300):"",p=`${s.chapterIndex}|${s.title}|${l}|${d}`;o.has(p)||(o.add(p),n.push({title:s.title,chapterIndex:s.chapterIndex,depth:l,...d?{anchor:d}:{}}))}}return n}function lo(t,e="\u672A\u547D\u540D\u6587\u6863"){return Rr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||e}function Dn(){let t=[];return{urls:t,create(e){let r=URL.createObjectURL(e);return t.push(r),r},add(e){return e&&!t.includes(e)&&t.push(e),e},dispose(){for(;t.length>0;){let e=t.pop();try{URL.revokeObjectURL(e)}catch{}}}}}function Fn(t){let e=/^data:([^;,]*)((?:;[^;,]*)*),(.*)$/is.exec(String(t||""));if(!e)return null;let r=e[1]||"application/octet-stream",n=e[2]||"",o=e[3]||"",i=/;base64/i.test(n);try{let a;if(i){let l=o.replace(/\s+/g,"");a=atob(l)}else a=decodeURIComponent(o);let s=new Uint8Array(a.length);for(let l=0;l<a.length;l+=1)s[l]=a.charCodeAt(l)&255;return new Blob([s],{type:r})}catch{return null}}function Vu(t){let e=String(t||"").trim().toLowerCase();return!e||/^(utf-?8|utf8)$/.test(e)?"utf-8":/^utf-?16(le)?$/.test(e)?"utf-16le":/^utf-?16be$/.test(e)?"utf-16be":/^(gb2312|gbk|gb18030|cp936|x-gbk)$/.test(e)?"gb18030":/^(big5|big5-hkscs|cp950)$/.test(e)?"big5":/^(shift_jis|sjis|windows-31j|cp932)$/.test(e)?"shift_jis":/^(euc-kr|ks_c_5601-1987|cp949)$/.test(e)?"euc-kr":/^(iso-8859-1|latin1|windows-1252|cp1252)$/.test(e)?"windows-1252":e}function so(t,e,r=!1){return new TextDecoder(e,{fatal:r}).decode(t)}function mm(t){let e=so(t.subarray(0,Math.min(t.length,512)),"windows-1252"),r=gm.exec(e);return r&&(r[1]||r[2])||""}function cn(t,{defaultEncoding:e="utf-8",sniffDeclaration:r=!0}={}){let n=t instanceof Uint8Array?t:new Uint8Array(t);if(n.length===0)return"";if(n[0]===239&&n[1]===187&&n[2]===191)return so(n.subarray(3),"utf-8");if(n[0]===255&&n[1]===254)return so(n.subarray(2),"utf-16le");if(n[0]===254&&n[1]===255)return so(n.subarray(2),"utf-16be");let o=e||"utf-8";if(r){let i=mm(n);i&&(o=Vu(i))}o=Vu(o);try{return so(n,o,!0)}catch{try{return so(n,"utf-8",!0)}catch{return so(n,"utf-8",!1)}}}function Ri(t){if(!t)return!1;let e=t.slice(0,4096);if(!e)return!1;let r=0;for(let n=0;n<e.length;n+=1){let o=e.charCodeAt(n);(o===65533||o===0||o<9||o>13&&o<32)&&(r+=1)}return r/e.length>.08}var fm,gm,co=xr(()=>{fm={jpg:"image/jpeg",jpeg:"image/jpeg",jpe:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",avif:"image/avif",bmp:"image/bmp",tif:"image/tiff",tiff:"image/tiff",svg:"image/svg+xml",ico:"image/x-icon",jxl:"image/jxl"};gm=/(?:encoding\s*=\s*["']([A-Za-z0-9._-]+)["'])|(?:charset\s*=\s*["']?([A-Za-z0-9._-]+))/i});function Yu(t){return/^(https?:|mailto:|tel:)/i.test(t)}function xl(t){return/^[a-z][a-z0-9+.-]*:/i.test(t)}function xm(t,e){e&&!t.includes(e)&&t.push(e)}async function Zu(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=ln(),i=Dn();try{let ue=function(c,w){let x=String(c||"").trim();if(!x||Yu(x)||x.startsWith("//")||xl(x))return null;let{path:V,fragment:de}=ba(x),he=V?Ln(w,x):null,ye=he?$.get(he.toLowerCase()):void 0;return ye==null&&he&&(ye=J.get(Rr(he).toLowerCase())),ye==null?null:{chapterIndex:ye,anchor:de}},a=await sn(t),s;try{s=Au(a)}catch{throw new Error("EPUB \u538B\u7F29\u5305\u5DF2\u635F\u574F\uFF0C\u65E0\u6CD5\u89E3\u538B\u3002")}let l=Ku(s);if(l.names.length===0)throw new Error("EPUB \u538B\u7F29\u5305\u4E0D\u5305\u542B\u4EFB\u4F55\u6587\u4EF6\u3002");let d=l.get("META-INF/encryption.xml");if(d){let c=cn(d.bytes);if(/<encrypteddata/i.test(c)&&/application\/(xhtml\+xml|epub\+zip)/i.test(c))throw new Error("\u8BE5 EPUB \u6587\u4EF6\u53D7 DRM \u4FDD\u62A4\uFF0C\u65E0\u6CD5\u6253\u5F00\u3002")}let p=l.get("META-INF/container.xml");if(!p){let c=l.names.find(w=>/container\.xml$/i.test(w));c&&(p=l.get(c))}if(!p)throw new Error("\u7F3A\u5C11 META-INF/container.xml\uFF0C\u4E0D\u662F\u6709\u6548\u7684 EPUB \u6587\u4EF6\u3002");let g=Co(cn(p.bytes));if(!g)throw new Error("META-INF/container.xml \u683C\u5F0F\u9519\u8BEF\u3002");let u=zt(g,"rootfile")[0],h=u?it(u,"full-path"):"";if(!h)throw new Error("container.xml \u4E2D\u6CA1\u6709\u6307\u5B9A OPF \u5185\u5BB9\u6E05\u5355\u3002");let _=l.get(h)||l.get(Ln("",h));if(!_)throw new Error(`\u627E\u4E0D\u5230 EPUB \u5185\u5BB9\u6E05\u5355\u6587\u4EF6\uFF1A${h}`);let C=Io(_.name),y=Co(cn(_.bytes));if(!y)throw new Error("EPUB \u5185\u5BB9\u6E05\u5355\uFF08OPF\uFF09\u683C\u5F0F\u9519\u8BEF\u3002");let E=ar(y,"metadata")||y,v=zt(E,"title").map(c=>pt(c.textContent)).filter(Boolean),S=[];for(let c of zt(E,"creator"))xm(S,pt(c.textContent));let M=zt(E,"language").map(c=>pt(c.textContent)).filter(Boolean),R=zt(E,"meta").filter(c=>String(it(c,"name")||"").toLowerCase()==="cover").map(c=>it(c,"content")||"").find(Boolean)||"",I=ar(y,"manifest");if(!I)throw new Error("OPF \u5185\u5BB9\u6E05\u5355\u7F3A\u5C11 manifest \u5217\u8868\u3002");let b=new Map;for(let c of zt(I,"item")){let w=it(c,"id");if(!w||b.has(w))continue;let x=it(c,"href")||"",V=Ln(C,x);b.set(w,{id:w,href:x,path:V,mediaType:String(it(c,"media-type")||"").toLowerCase(),properties:String(it(c,"properties")||"").toLowerCase()})}let O=ar(y,"spine");if(!O)throw new Error("OPF \u5185\u5BB9\u6E05\u5355\u7F3A\u5C11 spine \u9605\u8BFB\u987A\u5E8F\u3002");let L=zt(O,"itemref");if(L.length===0)throw new Error("EPUB \u7684\u9605\u8BFB\u987A\u5E8F\uFF08spine\uFF09\u4E3A\u7A7A\u3002");let F=[],$=new Map,J=new Map;for(let c of L){let w=it(c,"idref"),x=w?b.get(w):null;if(!x){o(`\u9605\u8BFB\u987A\u5E8F\u4E2D\u7684\u6761\u76EE\u201C${w||"\u672A\u77E5"}\u201D\u4E0D\u5728\u6E05\u5355\u4E2D\uFF0C\u5DF2\u8DF3\u8FC7\u3002`);continue}if(/\bnav\b/.test(x.properties))continue;if(!x.path){o(`\u7AE0\u8282\u6587\u4EF6\u201C${x.href||x.id}\u201D\u4F4D\u4E8E\u5916\u90E8\u7F51\u7EDC\uFF0C\u5DF2\u8DF3\u8FC7\u3002`);continue}let V=l.get(x.path);if(!V){o(`\u627E\u4E0D\u5230\u7AE0\u8282\u6587\u4EF6\uFF1A${x.path}`);continue}let de=x.mediaType||"",he=bm.has(de)||/\.(x?html?|htm)$/i.test(x.path),ye=de.startsWith("image/")||/\.(png|jpe?g|gif|webp|avif|bmp|tiff?|svg)$/i.test(x.path);if(!he&&!ye){o(`\u4E0D\u652F\u6301\u7684\u7AE0\u8282\u7C7B\u578B\uFF08${de||"\u672A\u77E5"}\uFF09\uFF1A${x.path}`);continue}let we=F.length;F.push({item:x,entry:V,isImage:ye,chapterIndex:we}),$.set(x.path.toLowerCase(),we);let Ve=Rr(x.path).toLowerCase();J.has(Ve)||J.set(Ve,we)}if(F.length===0)throw new Error("EPUB \u4E2D\u6CA1\u6709\u627E\u5230\u53EF\u663E\u793A\u7684\u7AE0\u8282\u5185\u5BB9\u3002");let te=0,ie=()=>`b${te+=1}`,U=[];for(let c of F){let{item:w,entry:x,isImage:V,chapterIndex:de}=c;if(V){let pe=w.mediaType.startsWith("image/")?w.mediaType:xa(w.path),Le=i.create(new Blob([x.bytes],{type:pe}));U.push({id:`ch${de}`,title:"",blocks:[{id:ie(),kind:"image",src:Le}]});continue}let he=Io(w.path),ye=pe=>{let Le=String(pe||"").trim();if(!Le)return null;if(/^data:/i.test(Le)){let wt=Fn(Le);return wt?{src:i.create(wt)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684\u5185\u5D4C\u56FE\u7247\u3002"),null)}if(/^(https?:)?\/\//i.test(Le))return o("\u5DF2\u8DF3\u8FC7\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\uFF08\u907F\u514D\u8DDF\u8E2A\u4E0E\u9690\u79C1\u6CC4\u9732\uFF09\u3002"),null;if(xl(Le))return null;let It=Ln(he,Le),lt=It?l.get(It):null;if(!lt)return o(`\u627E\u4E0D\u5230\u56FE\u7247\u6587\u4EF6\uFF1A${Rr(It||Le)}`),null;let Ze=xa(It);return{src:i.create(new Blob([lt.bytes],{type:Ze}))}},we=pe=>{let Le=String(pe||"").trim();if(!Le)return null;if(Yu(Le))return{external:!0,href:Le};if(Le.startsWith("//")||xl(Le))return null;let{path:It,fragment:lt}=ba(Le);if(!It)return{chapter:de,anchor:lt};let Ze=Ln(he,Le),wt=Ze?$.get(Ze.toLowerCase()):void 0;return wt==null&&Ze&&(wt=J.get(Rr(Ze).toLowerCase())),wt==null?null:{chapter:wt,anchor:lt}},Ve="";try{Ve=cn(x.bytes)}catch{o(`\u7B2C ${de+1} \u7AE0\u7684\u7F16\u7801\u65E0\u6CD5\u8BC6\u522B\uFF0C\u5DF2\u5C3D\u91CF\u6309 UTF-8 \u8BFB\u53D6\u3002`)}let Me=Co(Ve),Ye=Me&&(ar(Me,"body")||Me.documentElement)||null,st=Ye?null:an(Ve),et=Ye||st?.body||st?.documentElement||null,je=et?io(et,{nextId:ie,warn:o,chapterIndex:de,resolveImage:ye,resolveLink:we}):[];je.length===0&&o(`\u7B2C ${de+1} \u7AE0\u6CA1\u6709\u53EF\u663E\u793A\u7684\u5185\u5BB9\u3002`),U.push({id:`ch${de}`,title:"",blocks:je})}let se=[...b.values()].find(c=>/\bnav\b/.test(c.properties)&&c.path),Y=it(O,"toc"),T=Y&&b.get(Y)||[...b.values()].find(c=>c.mediaType==="application/x-dtbncx+xml"&&c.path)||null,q=c=>{let w=l.get(c.path);if(!w)return o(`\u627E\u4E0D\u5230 EPUB \u5BFC\u822A\u6587\u4EF6\uFF1A${c.path}`),[];let x=cn(w.bytes),V=Co(x)||an(x);if(!V)return o("\u65E0\u6CD5\u89E3\u6790 EPUB \u5BFC\u822A\u76EE\u5F55\u3002"),[];let de=zt(V,"nav"),he=de.find(st=>String(it(st,"type")||it(st,"epub:type")||"").toLowerCase().split(/\s+/).includes("toc"))||de[0]||null;if(!he)return[];let ye=ar(he,"ol")||ar(he,"ul");if(!ye)return[];let we=[],Ve=Io(c.path),Me=$.get(c.path.toLowerCase()),Ye=(st,et)=>{for(let je of Array.from(st.children||[])){if(wr(je)!=="li")continue;let pe=null,Le=null;for(let It of Array.from(je.children||[])){let lt=wr(It);!pe&&(lt==="a"||lt==="span")&&(pe=It),!Le&&(lt==="ol"||lt==="ul")&&(Le=It)}if(pe&&wr(pe)==="a"){let It=pt(pe.textContent).slice(0,200),lt=it(pe,"href")||"",Ze=ue(lt,Ve);if(!Ze&&lt.startsWith("#")&&Me!=null){let{fragment:wt}=ba(lt);Ze={chapterIndex:Me,anchor:wt}}It&&Ze&&we.push({title:It,chapterIndex:Ze.chapterIndex,depth:et,...Ze.anchor?{anchor:Ze.anchor}:{}})}Le&&Ye(Le,et+1)}};return Ye(ye,0),we},re=c=>{let w=l.get(c.path);if(!w)return o(`\u627E\u4E0D\u5230 EPUB NCX \u76EE\u5F55\u6587\u4EF6\uFF1A${c.path}`),[];let x=cn(w.bytes),V=Co(x)||an(x);if(!V)return o("\u65E0\u6CD5\u89E3\u6790 EPUB NCX \u76EE\u5F55\u3002"),[];let de=[],he=Io(c.path);for(let ye of zt(V,"navpoint")){let we=ar(ye,"navlabel"),Ve=we?ar(we,"text"):ar(ye,"text"),Me=pt(Ve?.textContent||"").slice(0,200),Ye=Array.from(ye.children||[]).find(je=>wr(je)==="content")||ar(ye,"content"),st=ue(it(Ye,"src")||"",he);if(!Me||!st)continue;let et=0;for(let je=ye.parentNode;je;je=je.parentNode)wr(je)==="navpoint"&&(et+=1);de.push({title:Me,chapterIndex:st.chapterIndex,depth:et,...st.anchor?{anchor:st.anchor}:{}})}return de},me=[];se&&(me=q(se),me.length===0&&o("EPUB \u5BFC\u822A\u6587\u4EF6\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u5F55\u9879\u3002"));let ne=[];me.length===0&&T&&(ne=re(T));let Te=me.length>0?me:ne;Te.length===0&&o("\u672A\u627E\u5230 EPUB \u76EE\u5F55\uFF0C\u5DF2\u6309\u7AE0\u8282\u6807\u9898\u751F\u6210\u3002");let Xe=va(U,Te),Ee="",$e=[...b.values()].find(c=>/\bcover-image\b/.test(c.properties)&&c.path);if($e)Ee=$e.path;else if(R&&b.get(R)?.path)Ee=b.get(R).path;else{let c=ar(y,"guide");if(c){let w=zt(c,"reference").find(x=>/\bcover\b/.test(String(it(x,"type")||"").toLowerCase()));w&&(Ee=Ln(C,it(w,"href")||"")||"")}}let _e="";if(Ee){let c=l.get(Ee);if(c){let w=xa(Ee);if(w.startsWith("image/"))_e=i.create(new Blob([c.bytes],{type:w}));else if(/\.(x?html?|htm)$/i.test(Ee)){let x=an(cn(c.bytes)),V=oo(x?.body||x?.documentElement||x)[0],de=V&&(it(V,"src")||it(V,"xlink:href"))||"",he=de?Ln(Io(Ee),de):null,ye=he?l.get(he):null;ye&&(_e=i.create(new Blob([ye.bytes],{type:xa(he)})))}}}let f={title:v[0]||lo(r),chapters:U,toc:Xe,warnings:n,dispose:()=>i.dispose()};return S.length>0&&(f.author=S.join(", ")),M.length>0&&(f.language=M[0]),_e&&(f.cover=_e),f}catch(a){throw i.dispose(),Pr(a,"\u65E0\u6CD5\u89E3\u6790 EPUB \u6587\u4EF6")}}var bm,Qu=xr(()=>{Js();no();ma();co();bm=new Set(["application/xhtml+xml","text/html","application/xml","text/xml","text/xhtml"])});function vm(t){return Rr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u6863"}async function ya(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=ln(),i=Dn();try{let a=await sn(t),s=cn(a),l=an(s);if(!l)throw new Error("HTML \u6587\u4EF6\u683C\u5F0F\u9519\u8BEF\uFF0C\u65E0\u6CD5\u89E3\u6790\u3002");let d=l.body||l.documentElement;if(!d)throw new Error("HTML \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let p=0,u=io(d,{nextId:()=>`b${p+=1}`,warn:o,resolveImage:v=>{let S=String(v||"").trim();if(!S)return null;if(/^data:/i.test(S)){let M=Fn(S);return M?{src:i.create(M)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684\u5185\u5D4C\u56FE\u7247\u3002"),null)}return/^(https?:)?\/\//i.test(S)?(o("\u5DF2\u8DF3\u8FC7\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\uFF08\u907F\u514D\u8DDF\u8E2A\u4E0E\u9690\u79C1\u6CC4\u9732\uFF09\u3002"),null):(o("\u5DF2\u8DF3\u8FC7 HTML \u4E2D\u7684\u672C\u5730\u56FE\u7247\uFF08\u65E0\u6CD5\u5B9A\u4F4D\u56FE\u7247\u6587\u4EF6\uFF09\u3002"),null)},resolveLink:v=>{let S=String(v||"").trim();return S?/^(https?:\/\/|mailto:)/i.test(S)?{external:!0,href:S}:S.startsWith("#")?{chapter:0,anchor:S.slice(1)}:null:null}});if(u.length===0)throw new Error("HTML \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let h=ar(l,"title"),_=u.find(v=>v.kind==="heading"&&v.text),C=pt(h?.textContent||"")||_?.text||vm(r),y=it(l.documentElement,"lang")||"",P=[];for(let v of zt(l,"meta"))if(String(it(v,"name")||"").toLowerCase()==="author"){let S=pt(it(v,"content")||"");S&&!P.includes(S)&&P.push(S)}let E={title:C,chapters:[{id:"ch0",title:C,blocks:u}],toc:[{title:C,chapterIndex:0,depth:0}],warnings:n,dispose:()=>i.dispose()};return y&&(E.language=y),P.length>0&&(E.author=P.join(", ")),E}catch(a){throw i.dispose(),Pr(a,"\u65E0\u6CD5\u89E3\u6790 HTML \u6587\u4EF6")}}var Ju=xr(()=>{no();ma();co()});function eh(t){return/[\u3000-\u303f\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uffef\uac00-\ud7af]/.test(t)}function th(t){let e="";for(let r of t){let n=String(r).trim();if(!n)continue;if(!e){e=n;continue}let o=e[e.length-1],i=n[0];e+=eh(o)&&eh(i)?n:` ${n}`}return e}function Tm(t){let e=String(t||"").trim();if(!e||e.length>Sm)return!1;if(wm.test(e)||_m.test(e))return!/[，,。；;]/.test(e);if(km.test(e)){let r=e.split(/\s+/).filter(Boolean).length;return!(r>14||/\.$/u.test(e)&&r>3)}return!1}function vl(t){if(!t||t.length===0)throw new Error("\u6587\u672C\u6587\u4EF6\u5185\u5BB9\u4E3A\u7A7A\u3002");if(t[0]===239&&t[1]===187&&t[2]===191)return{text:new TextDecoder("utf-8").decode(t.subarray(3)),encoding:"utf-8"};if(t[0]===255&&t[1]===254)return{text:new TextDecoder("utf-16le").decode(t.subarray(2)),encoding:"utf-16le"};if(t[0]===254&&t[1]===255)return{text:new TextDecoder("utf-16be").decode(t.subarray(2)),encoding:"utf-16be"};let e=Math.min(t.length,4096),r=0,n=0;for(let i=0;i<e;i+=2)t[i]===0&&(r+=1),i+1<e&&t[i+1]===0&&(n+=1);let o=Math.ceil(e/2);if(o>4&&n/o>.35&&r/o<.05)return{text:new TextDecoder("utf-16le").decode(t),encoding:"utf-16le"};if(o>4&&r/o>.35&&n/o<.05)return{text:new TextDecoder("utf-16be").decode(t),encoding:"utf-16be"};try{return{text:new TextDecoder("utf-8",{fatal:!0}).decode(t),encoding:"utf-8"}}catch{}try{return{text:new TextDecoder("gb18030",{fatal:!0}).decode(t),encoding:"gb18030"}}catch{}return{text:new TextDecoder("utf-8").decode(t),encoding:"utf-8"}}function Em(t){let e=[],r=[],n=()=>{r.length>0&&(e.push(r),r=[])};for(let o of t)String(o).trim()?r.push(o):n();return n(),e}function Am(t){let e=t.map(n=>n.trim()).filter(Boolean);return e.length<2?!1:e.filter(n=>/[。！？!?…"”’」』）)]$/.test(n)).length/e.length>=.5}function Nm(t){let e=t.map(o=>String(o)),r=Em(e);if(r.length>1)return r.map(o=>th(o)).filter(Boolean);let n=e.map(o=>o.trim()).filter(Boolean);return n.length<=1||Am(n)?n:r.map(o=>th(o)).filter(Boolean)}function Cm(t,{fallbackTitle:e="\u6B63\u6587"}={}){let n=String(t||"").replace(/\r\n?/g,`
`).replace(/\u0000/g,"").split(`
`),o=[],i={title:"",lines:[],heading:""},a=()=>{(i.heading||i.lines.some(s=>s.trim()))&&o.push(i),i={title:"",lines:[],heading:""}};for(let s of n){if(Tm(s)){a();let l=s.trim();i={title:l,lines:[],heading:l};continue}i.lines.push(s)}return a(),o.length===0?[{title:e,lines:n,heading:""}]:o}function yl(t,{nextId:e,title:r="\u6B63\u6587"}={}){let n=Cm(t,{fallbackTitle:r}),o=a=>a.lines.some(s=>String(s).trim()),i=[];for(let a=0;a<n.length;a+=1){if(o(n[a])){i.push(n[a]);continue}let s=a;for(;s+1<n.length&&!o(n[s+1]);)s+=1;if(s-a+1>=3){a=s;continue}i.push(...n.slice(a,s+1)),a=s}return n=i.length>0?i:n,n.map((a,s)=>{let l=[];a.heading&&l.push({id:e(),kind:"heading",level:1,html:ro(a.heading),text:pt(a.heading)});for(let d of Nm(a.lines))l.push({id:e(),kind:"paragraph",html:ro(d),text:d});return{id:`ch${s}`,title:a.title||r||`\u7B2C ${s+1} \u7AE0`,blocks:l}})}function Im(t){return Rr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u672C"}async function wl(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=ln();try{let i=await sn(t),{text:a,encoding:s}=vl(i);if(Ri(a))throw new Error("\u6587\u672C\u6587\u4EF6\u5305\u542B\u5927\u91CF\u65E0\u6CD5\u8BC6\u522B\u7684\u5B57\u7B26\uFF0C\u53EF\u80FD\u4E0D\u662F\u7EAF\u6587\u672C\u6587\u4EF6\u3002");s==="gb18030"&&o("\u5DF2\u6309 GB18030 \u7F16\u7801\u8BFB\u53D6\u6587\u672C\uFF08\u975E UTF-8\uFF09\u3002");let l=Im(r),d=0,g=yl(a,{nextId:()=>`b${d+=1}`,title:l});if(g.length===0||g.every(h=>h.blocks.length===0))throw new Error("\u6587\u672C\u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");g[0].title||(g[0].title=l);let u=g.map((h,_)=>({title:h.title,chapterIndex:_,depth:0}));return{title:l,chapters:g,toc:u,warnings:n,encoding:s,dispose:()=>{}}}catch(i){throw Pr(i,"\u65E0\u6CD5\u89E3\u6790\u6587\u672C\u6587\u4EF6")}}var ym,wm,_m,km,Sm,Pi=xr(()=>{no();co();ym="[0-9\uFF10-\uFF19\u96F6\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u767E\u5343\u4E07\u4E24]",wm=new RegExp(`^\\s*(\u7B2C\\s*${ym}+\\s*[\u7AE0\u7BC0\u8282\u56DE\u5377\u7BC7])(?:[\\s:\uFF1A\xB7\u3001.\uFF0E\u2014\u2013-].*)?$`),_m=/^\s*(序章|楔子|引子|前言|序言|后记|後記|尾声|尾聲|终章|終章|番外(?:篇)?)(?:[\s:：·、.．—–-].*)?$/,km=/^\s*((?:chapter|part|book|section)\s+(?:[0-9]+|[ivxlcdm]{1,8}|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty))(?:[.:：\s—–-].*)?$/i,Sm=72});function Mm(t){let e=String(t||"").trim();return e&&(/^(https?:\/\/|mailto:)/i.test(e)||e.startsWith("#"))?e:""}function _l(t){let e=ro(String(t??"").trim()),r=[],n=o=>{let i=`\0${r.length}\0`;return r.push(o),i};return e=e.replace(/`([^`]+)`/g,(o,i)=>n(`<code>${i}</code>`)),e=e.replace(Rm,(o,i,a)=>{let s=Mm(a);return s?n(`<a href="${s}">${i}</a>`):i}),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/__([^_]+)__/g,"<strong>$1</strong>").replace(/~~([^~]+)~~/g,"<s>$1</s>").replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g,"$1<em>$2</em>").replace(/(^|[^_])_([^_\n]+)_(?!_)/g,"$1<em>$2</em>"),e=e.replace(/\u0000(\d+)\u0000/g,(o,i)=>r[Number(i)]??""),e}function Om(t){return Rr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u6863"}function wa(t){return String(t).trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(e=>e.trim())}function Lm(t){if(!/\|/.test(t))return!1;let e=wa(t);return e.length>0&&e.every(r=>/^:?-{3,}:?$/.test(r))}function nh(t,e){return!!e&&t.includes("|")&&Lm(e)&&wa(t).length===wa(e).length}function rh(t,e){return!!(/^\s{0,3}(#{1,6}\s|>|(?:```|~~~))/.test(t)||/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(t)||/^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/.test(t)||nh(t,e))}function Dm(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=ln(),i=Dn(),a=0,s={nextId:()=>`b${a+=1}`,warn:o,resolveLink:y=>{let P=String(y||"").trim();return P?/^(https?:\/\/|mailto:)/i.test(P)?{external:!0,href:P}:P.startsWith("#")?{chapter:0,anchor:P.slice(1)}:null:null}},l=[],d=[];function p(y){let P=String(y??""),E=[];return P=P.replace(Pm,(v,S,M)=>{let k=pt(S);if(/^data:image\//i.test(M)){let R=Fn(M);if(R){let I=gl(s,{src:i.create(R),alt:k});I&&E.push(I)}else o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684 Markdown \u5185\u5D4C\u56FE\u7247\u3002")}else/^https?:/i.test(M)?o("\u5DF2\u8DF3\u8FC7 Markdown \u4E2D\u7684\u5916\u90E8\u56FE\u7247\uFF08\u907F\u514D\u7F51\u7EDC\u8DDF\u8E2A\uFF09\u3002"):o("\u5DF2\u8DF3\u8FC7 Markdown \u4E2D\u7684\u672C\u5730\u56FE\u7247\uFF08\u65E0\u6CD5\u5B9A\u4F4D\u56FE\u7247\u6587\u4EF6\uFF09\u3002");return k?` ${k} `:" "}),{html:_l(P),images:E}}function g(y,P,E={}){let{html:v,images:S}=p(P),M=Ci(s,y,v,E);M&&l.push(M);for(let k of S)l.push(k);return!!M}let u=String(t??"").replace(/\r\n?/g,`
`).replace(/\u0000/g,"").split(`
`),h=0;for(;h<u.length;){let y=u[h];if(!y.trim()){h+=1;continue}let P=/^\s*(`{3,}|~{3,})\s*([A-Za-z0-9_+#.-]*)\s*$/.exec(y);if(P){let k=P[1],R=[];h+=1;let I=new RegExp(`^\\s*${k[0]==="`"?"`":"~"}{${k.length},}\\s*$`);for(;h<u.length;){if(I.test(u[h])){h+=1;break}R.push(u[h]),h+=1}let b=pl(s,R.join(`
`));b&&l.push(b);continue}let E=/^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(y);if(E){g("heading",E[2],{level:E[1].length}),h+=1;continue}if(/^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/.test(y)){l.push(ml(s)),h+=1;continue}if(nh(y,u[h+1])){let k=wa(y);h+=2;let R=[];for(;h<u.length&&u[h].includes("|")&&u[h].trim();)R.push(wa(u[h])),h+=1;let I=`<thead><tr>${k.map(L=>`<th>${_l(L)}</th>`).join("")}</tr></thead>`,b=R.length>0?`<tbody>${R.map(L=>`<tr>${k.map((F,$)=>`<td>${_l(L[$]||"")}</td>`).join("")}</tr>`).join("")}</tbody>`:"",O=fl(s,`<table>${I}${b}</table>`);O&&l.push(O);continue}if(/^\s{0,3}>/.test(y)){let k=[];for(;h<u.length&&/^\s{0,3}>/.test(u[h]);)k.push(u[h].replace(/^\s{0,3}>\s?/,"")),h+=1;let R=[],I=[];for(let O of k){let L=p(O);L.html&&R.push(L.html),I.push(...L.images)}let b=Ci(s,"quote",R.join("<br>"));b&&l.push(b);for(let O of I)l.push(O);continue}if(/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(y)){for(;h<u.length;){let k=/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+(.*)$/.exec(u[h]);if(!k)break;for(g("list-item",k[1]),h+=1;h<u.length&&/^\s{2,}\S/.test(u[h])&&!/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(u[h])&&!rh(u[h],u[h+1]);)h+=1}continue}let v=[];for(;h<u.length&&u[h].trim()&&!rh(u[h],u[h+1]);)v.push(u[h]),h+=1;if(v.length===0){h+=1;continue}let S=[];for(let k of v){let R=/(?: {2,}|\\)$/.test(k),I=p(k.replace(/(?: {2,}|\\)$/,""));I.html&&S.push(R?`${I.html}<br>`:I.html),d.push(...I.images)}let M=Ci(s,"paragraph",S.join(" "));for(M&&l.push(M);d.length>0;)l.push(d.shift())}let C=l.find(y=>y.kind==="heading"&&y.text)?.text||Om(r);if(l.length===0)throw i.dispose(),new Error("Markdown \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");return{title:C,chapters:[{id:"ch0",title:C,blocks:l}],toc:[{title:C,chapterIndex:0,depth:0}],warnings:n,dispose:()=>i.dispose()}}async function _a(t,e={}){try{let r=await sn(t),{text:n}=vl(r);return Dm(n,e)}catch(r){throw Pr(r,"\u65E0\u6CD5\u89E3\u6790 Markdown \u6587\u4EF6")}}var Rm,Pm,oh=xr(()=>{no();ma();co();Pi();Rm=/\[([^\]]+)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g,Pm=/!\[([^\]]*)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g});var sh=Qi((Xv,ih)=>{"use strict";function dn(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function ah(t,e){for(var r="",n=0,o=-1,i=0,a,s=0;s<=t.length;++s){if(s<t.length)a=t.charCodeAt(s);else{if(a===47)break;a=47}if(a===47){if(!(o===s-1||i===1))if(o!==s-1&&i===2){if(r.length<2||n!==2||r.charCodeAt(r.length-1)!==46||r.charCodeAt(r.length-2)!==46){if(r.length>2){var l=r.lastIndexOf("/");if(l!==r.length-1){l===-1?(r="",n=0):(r=r.slice(0,l),n=r.length-1-r.lastIndexOf("/")),o=s,i=0;continue}}else if(r.length===2||r.length===1){r="",n=0,o=s,i=0;continue}}e&&(r.length>0?r+="/..":r="..",n=2)}else r.length>0?r+="/"+t.slice(o+1,s):r=t.slice(o+1,s),n=s-o-1;o=s,i=0}else a===46&&i!==-1?++i:i=-1}return r}function Fm(t,e){var r=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+n:r+t+n:n}var Ro={resolve:function(){for(var e="",r=!1,n,o=arguments.length-1;o>=-1&&!r;o--){var i;o>=0?i=arguments[o]:(n===void 0&&(n=process.cwd()),i=n),dn(i),i.length!==0&&(e=i+"/"+e,r=i.charCodeAt(0)===47)}return e=ah(e,!r),r?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(dn(e),e.length===0)return".";var r=e.charCodeAt(0)===47,n=e.charCodeAt(e.length-1)===47;return e=ah(e,!r),e.length===0&&!r&&(e="."),e.length>0&&n&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return dn(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,r=0;r<arguments.length;++r){var n=arguments[r];dn(n),n.length>0&&(e===void 0?e=n:e+="/"+n)}return e===void 0?".":Ro.normalize(e)},relative:function(e,r){if(dn(e),dn(r),e===r||(e=Ro.resolve(e),r=Ro.resolve(r),e===r))return"";for(var n=1;n<e.length&&e.charCodeAt(n)===47;++n);for(var o=e.length,i=o-n,a=1;a<r.length&&r.charCodeAt(a)===47;++a);for(var s=r.length,l=s-a,d=i<l?i:l,p=-1,g=0;g<=d;++g){if(g===d){if(l>d){if(r.charCodeAt(a+g)===47)return r.slice(a+g+1);if(g===0)return r.slice(a+g)}else i>d&&(e.charCodeAt(n+g)===47?p=g:g===0&&(p=0));break}var u=e.charCodeAt(n+g),h=r.charCodeAt(a+g);if(u!==h)break;u===47&&(p=g)}var _="";for(g=n+p+1;g<=o;++g)(g===o||e.charCodeAt(g)===47)&&(_.length===0?_+="..":_+="/..");return _.length>0?_+r.slice(a+p):(a+=p,r.charCodeAt(a)===47&&++a,r.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(dn(e),e.length===0)return".";for(var r=e.charCodeAt(0),n=r===47,o=-1,i=!0,a=e.length-1;a>=1;--a)if(r=e.charCodeAt(a),r===47){if(!i){o=a;break}}else i=!1;return o===-1?n?"/":".":n&&o===1?"//":e.slice(0,o)},basename:function(e,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');dn(e);var n=0,o=-1,i=!0,a;if(r!==void 0&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var s=r.length-1,l=-1;for(a=e.length-1;a>=0;--a){var d=e.charCodeAt(a);if(d===47){if(!i){n=a+1;break}}else l===-1&&(i=!1,l=a+1),s>=0&&(d===r.charCodeAt(s)?--s===-1&&(o=a):(s=-1,o=l))}return n===o?o=l:o===-1&&(o=e.length),e.slice(n,o)}else{for(a=e.length-1;a>=0;--a)if(e.charCodeAt(a)===47){if(!i){n=a+1;break}}else o===-1&&(i=!1,o=a+1);return o===-1?"":e.slice(n,o)}},extname:function(e){dn(e);for(var r=-1,n=0,o=-1,i=!0,a=0,s=e.length-1;s>=0;--s){var l=e.charCodeAt(s);if(l===47){if(!i){n=s+1;break}continue}o===-1&&(i=!1,o=s+1),l===46?r===-1?r=s:a!==1&&(a=1):r!==-1&&(a=-1)}return r===-1||o===-1||a===0||a===1&&r===o-1&&r===n+1?"":e.slice(r,o)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return Fm("/",e)},parse:function(e){dn(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return r;var n=e.charCodeAt(0),o=n===47,i;o?(r.root="/",i=1):i=0;for(var a=-1,s=0,l=-1,d=!0,p=e.length-1,g=0;p>=i;--p){if(n=e.charCodeAt(p),n===47){if(!d){s=p+1;break}continue}l===-1&&(d=!1,l=p+1),n===46?a===-1?a=p:g!==1&&(g=1):a!==-1&&(g=-1)}return a===-1||l===-1||g===0||g===1&&a===l-1&&a===s+1?l!==-1&&(s===0&&o?r.base=r.name=e.slice(1,l):r.base=r.name=e.slice(s,l)):(s===0&&o?(r.name=e.slice(1,a),r.base=e.slice(1,l)):(r.name=e.slice(s,a),r.base=e.slice(s,l)),r.ext=e.slice(a,l)),s>0?r.dir=e.slice(0,s-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};Ro.posix=Ro;ih.exports=Ro});var xh=Qi((Vv,kl)=>{"use strict";var Po=typeof Reflect=="object"?Reflect:null,lh=Po&&typeof Po.apply=="function"?Po.apply:function(e,r,n){return Function.prototype.apply.call(e,r,n)},Mi;Po&&typeof Po.ownKeys=="function"?Mi=Po.ownKeys:Object.getOwnPropertySymbols?Mi=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Mi=function(e){return Object.getOwnPropertyNames(e)};function zm(t){console&&console.warn&&console.warn(t)}var dh=Number.isNaN||function(e){return e!==e};function ft(){ft.init.call(this)}kl.exports=ft;kl.exports.once=Um;ft.EventEmitter=ft;ft.prototype._events=void 0;ft.prototype._eventsCount=0;ft.prototype._maxListeners=void 0;var ch=10;function Oi(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(ft,"defaultMaxListeners",{enumerable:!0,get:function(){return ch},set:function(t){if(typeof t!="number"||t<0||dh(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");ch=t}});ft.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};ft.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||dh(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function uh(t){return t._maxListeners===void 0?ft.defaultMaxListeners:t._maxListeners}ft.prototype.getMaxListeners=function(){return uh(this)};ft.prototype.emit=function(e){for(var r=[],n=1;n<arguments.length;n++)r.push(arguments[n]);var o=e==="error",i=this._events;if(i!==void 0)o=o&&i.error===void 0;else if(!o)return!1;if(o){var a;if(r.length>0&&(a=r[0]),a instanceof Error)throw a;var s=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var l=i[e];if(l===void 0)return!1;if(typeof l=="function")lh(l,this,r);else for(var d=l.length,p=mh(l,d),n=0;n<d;++n)lh(p[n],this,r);return!0};function hh(t,e,r,n){var o,i,a;if(Oi(r),i=t._events,i===void 0?(i=t._events=Object.create(null),t._eventsCount=0):(i.newListener!==void 0&&(t.emit("newListener",e,r.listener?r.listener:r),i=t._events),a=i[e]),a===void 0)a=i[e]=r,++t._eventsCount;else if(typeof a=="function"?a=i[e]=n?[r,a]:[a,r]:n?a.unshift(r):a.push(r),o=uh(t),o>0&&a.length>o&&!a.warned){a.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=t,s.type=e,s.count=a.length,zm(s)}return t}ft.prototype.addListener=function(e,r){return hh(this,e,r,!1)};ft.prototype.on=ft.prototype.addListener;ft.prototype.prependListener=function(e,r){return hh(this,e,r,!0)};function Bm(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function ph(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},o=Bm.bind(n);return o.listener=r,n.wrapFn=o,o}ft.prototype.once=function(e,r){return Oi(r),this.on(e,ph(this,e,r)),this};ft.prototype.prependOnceListener=function(e,r){return Oi(r),this.prependListener(e,ph(this,e,r)),this};ft.prototype.removeListener=function(e,r){var n,o,i,a,s;if(Oi(r),o=this._events,o===void 0)return this;if(n=o[e],n===void 0)return this;if(n===r||n.listener===r)--this._eventsCount===0?this._events=Object.create(null):(delete o[e],o.removeListener&&this.emit("removeListener",e,n.listener||r));else if(typeof n!="function"){for(i=-1,a=n.length-1;a>=0;a--)if(n[a]===r||n[a].listener===r){s=n[a].listener,i=a;break}if(i<0)return this;i===0?n.shift():$m(n,i),n.length===1&&(o[e]=n[0]),o.removeListener!==void 0&&this.emit("removeListener",e,s||r)}return this};ft.prototype.off=ft.prototype.removeListener;ft.prototype.removeAllListeners=function(e){var r,n,o;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var i=Object.keys(n),a;for(o=0;o<i.length;++o)a=i[o],a!=="removeListener"&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(r=n[e],typeof r=="function")this.removeListener(e,r);else if(r!==void 0)for(o=r.length-1;o>=0;o--)this.removeListener(e,r[o]);return this};function fh(t,e,r){var n=t._events;if(n===void 0)return[];var o=n[e];return o===void 0?[]:typeof o=="function"?r?[o.listener||o]:[o]:r?Hm(o):mh(o,o.length)}ft.prototype.listeners=function(e){return fh(this,e,!0)};ft.prototype.rawListeners=function(e){return fh(this,e,!1)};ft.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):gh.call(t,e)};ft.prototype.listenerCount=gh;function gh(t){var e=this._events;if(e!==void 0){var r=e[t];if(typeof r=="function")return 1;if(r!==void 0)return r.length}return 0}ft.prototype.eventNames=function(){return this._eventsCount>0?Mi(this._events):[]};function mh(t,e){for(var r=new Array(e),n=0;n<e;++n)r[n]=t[n];return r}function $m(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function Hm(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}function Um(t,e){return new Promise(function(r,n){function o(a){t.removeListener(e,i),n(a)}function i(){typeof t.removeListener=="function"&&t.removeListener("error",o),r([].slice.call(arguments))}bh(t,e,i,{once:!0}),e!=="error"&&Wm(t,o,{once:!0})})}function Wm(t,e,r){typeof t.on=="function"&&bh(t,"error",e,r)}function bh(t,e,r,n){if(typeof t.on=="function")n.once?t.once(e,r):t.on(e,r);else if(typeof t.addEventListener=="function")t.addEventListener(e,function o(i){n.once&&t.removeEventListener(e,o),r(i)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}});var vh=Qi(Li=>{(function(t){t.parser=function(f,c){return new r(f,c)},t.SAXParser=r,t.SAXStream=p,t.createStream=l,t.MAX_BUFFER_LENGTH=64*1024;var e=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];t.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function r(f,c){if(!(this instanceof r))return new r(f,c);var w=this;o(w),w.q=w.c="",w.bufferCheckPosition=t.MAX_BUFFER_LENGTH,w.encoding=null,w.opt=c||{},w.opt.lowercase=w.opt.lowercase||w.opt.lowercasetags,w.looseCase=w.opt.lowercase?"toLowerCase":"toUpperCase",w.opt.maxEntityCount=w.opt.maxEntityCount||512,w.opt.maxEntityDepth=w.opt.maxEntityDepth||4,w.entityCount=w.entityDepth=0,w.tags=[],w.closed=w.closedRoot=w.sawRoot=!1,w.tag=w.error=null,w.strict=!!f,w.noscript=!!(f||w.opt.noscript),w.state=b.BEGIN,w.strictEntities=w.opt.strictEntities,w.ENTITIES=w.strictEntities?Object.create(t.XML_ENTITIES):Object.create(t.ENTITIES),w.attribList=[],w.opt.xmlns&&(w.ns=Object.create(C)),w.opt.unquotedAttributeValues===void 0&&(w.opt.unquotedAttributeValues=!f),w.trackPosition=w.opt.position!==!1,w.trackPosition&&(w.position=w.line=w.column=0),L(w,"onready")}Object.create||(Object.create=function(f){function c(){}c.prototype=f;var w=new c;return w}),Object.keys||(Object.keys=function(f){var c=[];for(var w in f)f.hasOwnProperty(w)&&c.push(w);return c});function n(f){for(var c=Math.max(t.MAX_BUFFER_LENGTH,10),w=0,x=0,V=e.length;x<V;x++){var de=f[e[x]].length;if(de>c)switch(e[x]){case"textNode":ue(f);break;case"cdata":ie(f,"oncdata",f.cdata),f.cdata="";break;case"script":ie(f,"onscript",f.script),f.script="";break;default:se(f,"Max buffer length exceeded: "+e[x])}w=Math.max(w,de)}var he=t.MAX_BUFFER_LENGTH-w;f.bufferCheckPosition=he+f.position}function o(f){for(var c=0,w=e.length;c<w;c++)f[e[c]]=""}function i(f){ue(f),f.cdata!==""&&(ie(f,"oncdata",f.cdata),f.cdata=""),f.script!==""&&(ie(f,"onscript",f.script),f.script="")}r.prototype={end:function(){Y(this)},write:Tt,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){i(this)}};var a;try{a=require("stream").Stream}catch{a=function(){}}a||(a=function(){});var s=t.EVENTS.filter(function(f){return f!=="error"&&f!=="end"});function l(f,c){return new p(f,c)}function d(f,c){if(f.length>=2){if(f[0]===255&&f[1]===254)return"utf-16le";if(f[0]===254&&f[1]===255)return"utf-16be"}return f.length>=3&&f[0]===239&&f[1]===187&&f[2]===191?"utf8":f.length>=4?f[0]===60&&f[1]===0&&f[2]===63&&f[3]===0?"utf-16le":f[0]===0&&f[1]===60&&f[2]===0&&f[3]===63?"utf-16be":"utf8":c?"utf8":null}function p(f,c){if(!(this instanceof p))return new p(f,c);a.apply(this),this._parser=new r(f,c),this.writable=!0,this.readable=!0;var w=this;this._parser.onend=function(){w.emit("end")},this._parser.onerror=function(x){w.emit("error",x),w._parser.error=null},this._decoder=null,this._decoderBuffer=null,s.forEach(function(x){Object.defineProperty(w,"on"+x,{get:function(){return w._parser["on"+x]},set:function(V){if(!V)return w.removeAllListeners(x),w._parser["on"+x]=V,V;w.on(x,V)},enumerable:!0,configurable:!1})})}p.prototype=Object.create(a.prototype,{constructor:{value:p}}),p.prototype._decodeBuffer=function(f,c){if(this._decoderBuffer&&(f=Buffer.concat([this._decoderBuffer,f]),this._decoderBuffer=null),!this._decoder){var w=d(f,c);if(!w)return this._decoderBuffer=f,"";this._parser.encoding=w,this._decoder=new TextDecoder(w)}return this._decoder.decode(f,{stream:!c})},p.prototype.write=function(f){if(typeof Buffer=="function"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(f))f=this._decodeBuffer(f,!1);else if(this._decoderBuffer){var c=this._decodeBuffer(Buffer.alloc(0),!0);c&&(this._parser.write(c),this.emit("data",c))}return this._parser.write(f.toString()),this.emit("data",f),!0},p.prototype.end=function(f){if(f&&f.length&&this.write(f),this._decoderBuffer){var c=this._decodeBuffer(Buffer.alloc(0),!0);c&&(this._parser.write(c),this.emit("data",c))}else if(this._decoder){var w=this._decoder.decode();w&&(this._parser.write(w),this.emit("data",w))}return this._parser.end(),!0},p.prototype.on=function(f,c){var w=this;return!w._parser["on"+f]&&s.indexOf(f)!==-1&&(w._parser["on"+f]=function(){var x=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);x.splice(0,0,f),w.emit.apply(w,x)}),a.prototype.on.call(w,f,c)};var g=/^\[CDATA\[$/i,u=/^DOCTYPE$/i,h="http://www.w3.org/XML/1998/namespace",_="http://www.w3.org/2000/xmlns/",C={xml:h,xmlns:_},y=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,P=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,E=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,v=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function S(f){return f===" "||f===`
`||f==="\r"||f==="	"}function M(f){return f==='"'||f==="'"}function k(f){return f===">"||S(f)}function R(f,c){return f.test(c)}function I(f,c){return!R(f,c)}var b=0;t.STATE={BEGIN:b++,BEGIN_WHITESPACE:b++,TEXT:b++,TEXT_ENTITY:b++,OPEN_WAKA:b++,SGML_DECL:b++,SGML_DECL_QUOTED:b++,DOCTYPE:b++,DOCTYPE_QUOTED:b++,DOCTYPE_DTD:b++,DOCTYPE_DTD_QUOTED:b++,COMMENT_STARTING:b++,COMMENT:b++,COMMENT_ENDING:b++,COMMENT_ENDED:b++,CDATA:b++,CDATA_ENDING:b++,CDATA_ENDING_2:b++,PROC_INST:b++,PROC_INST_BODY:b++,PROC_INST_ENDING:b++,OPEN_TAG:b++,OPEN_TAG_SLASH:b++,ATTRIB:b++,ATTRIB_NAME:b++,ATTRIB_NAME_SAW_WHITE:b++,ATTRIB_VALUE:b++,ATTRIB_VALUE_QUOTED:b++,ATTRIB_VALUE_CLOSED:b++,ATTRIB_VALUE_UNQUOTED:b++,ATTRIB_VALUE_ENTITY_Q:b++,ATTRIB_VALUE_ENTITY_U:b++,CLOSE_TAG:b++,CLOSE_TAG_SAW_WHITE:b++,SCRIPT:b++,SCRIPT_ENDING:b++},t.XML_ENTITIES=Object.assign(Object.create(null),{amp:"&",gt:">",lt:"<",quot:'"',apos:"'"}),t.ENTITIES=Object.assign(Object.create(null),{amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830}),Object.keys(t.ENTITIES).forEach(function(f){var c=t.ENTITIES[f],w=typeof c=="number"?String.fromCharCode(c):c;t.ENTITIES[f]=w});for(var O in t.STATE)t.STATE[t.STATE[O]]=O;b=t.STATE;function L(f,c,w){f[c]&&f[c](w)}function F(f){var c=f&&f.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);return c?c[2]:null}function $(f){return f?f.toLowerCase().replace(/[^a-z0-9]/g,""):null}function J(f,c){let w=$(f),x=$(c);return!w||!x?!0:x==="utf16"?w==="utf16le"||w==="utf16be":w===x}function te(f,c){if(!(!f.strict||!f.encoding||!c||c.name!=="xml")){var w=F(c.body);w&&!J(f.encoding,w)&&T(f,"XML declaration encoding "+w+" does not match detected stream encoding "+f.encoding.toUpperCase())}}function ie(f,c,w){f.textNode&&ue(f),L(f,c,w)}function ue(f){f.textNode=U(f.opt,f.textNode),f.textNode&&L(f,"ontext",f.textNode),f.textNode=""}function U(f,c){return f.trim&&(c=c.trim()),f.normalize&&(c=c.replace(/\s+/g," ")),c}function se(f,c){return ue(f),f.trackPosition&&(c+=`
Line: `+f.line+`
Column: `+f.column+`
Char: `+f.c),c=new Error(c),f.error=c,L(f,"onerror",c),f}function Y(f){return f.sawRoot&&!f.closedRoot&&T(f,"Unclosed root tag"),f.state!==b.BEGIN&&f.state!==b.BEGIN_WHITESPACE&&f.state!==b.TEXT&&se(f,"Unexpected end"),ue(f),f.c="",f.closed=!0,L(f,"onend"),r.call(f,f.strict,f.opt),f}function T(f,c){if(typeof f!="object"||!(f instanceof r))throw new Error("bad call to strictFail");f.strict&&se(f,c)}function q(f){f.strict||(f.tagName=f.tagName[f.looseCase]());var c=f.tags[f.tags.length-1]||f,w=f.tag={name:f.tagName,attributes:{}};f.opt.xmlns&&(w.ns=c.ns),f.attribList.length=0,ie(f,"onopentagstart",w)}function re(f,c){var w=f.indexOf(":"),x=w<0?["",f]:f.split(":"),V=x[0],de=x[1];return c&&f==="xmlns"&&(V="xmlns",de=""),{prefix:V,local:de}}function me(f){if(f.strict||(f.attribName=f.attribName[f.looseCase]()),f.attribList.indexOf(f.attribName)!==-1||f.tag.attributes.hasOwnProperty(f.attribName)){f.attribName=f.attribValue="";return}if(f.opt.xmlns){var c=re(f.attribName,!0),w=c.prefix,x=c.local;if(w==="xmlns")if(x==="xml"&&f.attribValue!==h)T(f,"xml: prefix must be bound to "+h+`
Actual: `+f.attribValue);else if(x==="xmlns"&&f.attribValue!==_)T(f,"xmlns: prefix must be bound to "+_+`
Actual: `+f.attribValue);else{var V=f.tag,de=f.tags[f.tags.length-1]||f;V.ns===de.ns&&(V.ns=Object.create(de.ns)),V.ns[x]=f.attribValue}f.attribList.push([f.attribName,f.attribValue])}else f.tag.attributes[f.attribName]=f.attribValue,ie(f,"onattribute",{name:f.attribName,value:f.attribValue});f.attribName=f.attribValue=""}function ne(f,c){if(f.opt.xmlns){var w=f.tag,x=re(f.tagName);w.prefix=x.prefix,w.local=x.local,w.uri=w.ns[x.prefix]||"",w.prefix&&!w.uri&&(T(f,"Unbound namespace prefix: "+JSON.stringify(f.tagName)),w.uri=x.prefix);var V=f.tags[f.tags.length-1]||f;w.ns&&V.ns!==w.ns&&Object.keys(w.ns).forEach(function(pe){ie(f,"onopennamespace",{prefix:pe,uri:w.ns[pe]})});for(var de=0,he=f.attribList.length;de<he;de++){var ye=f.attribList[de],we=ye[0],Ve=ye[1],Me=re(we,!0),Ye=Me.prefix,st=Me.local,et=Ye===""?"":w.ns[Ye]||"",je={name:we,value:Ve,prefix:Ye,local:st,uri:et};Ye&&Ye!=="xmlns"&&!et&&(T(f,"Unbound namespace prefix: "+JSON.stringify(Ye)),je.uri=Ye),f.tag.attributes[we]=je,ie(f,"onattribute",je)}f.attribList.length=0}f.tag.isSelfClosing=!!c,f.sawRoot=!0,f.tags.push(f.tag),ie(f,"onopentag",f.tag),c||(!f.noscript&&f.tagName.toLowerCase()==="script"?f.state=b.SCRIPT:f.state=b.TEXT,f.tag=null,f.tagName=""),f.attribName=f.attribValue="",f.attribList.length=0}function Te(f){if(!f.tagName){T(f,"Weird empty close tag."),f.textNode+="</>",f.state=b.TEXT;return}if(f.script){if(f.tagName!=="script"){f.script+="</"+f.tagName+">",f.tagName="",f.state=b.SCRIPT;return}ie(f,"onscript",f.script),f.script=""}var c=f.tags.length,w=f.tagName;f.strict||(w=w[f.looseCase]());for(var x=w;c--;){var V=f.tags[c];if(V.name!==x)T(f,"Unexpected close tag");else break}if(c<0){T(f,"Unmatched closing tag: "+f.tagName),f.textNode+="</"+f.tagName+">",f.state=b.TEXT;return}f.tagName=w;for(var de=f.tags.length;de-- >c;){var he=f.tag=f.tags.pop();f.tagName=f.tag.name,ie(f,"onclosetag",f.tagName);var ye={};for(var we in he.ns)ye[we]=he.ns[we];var Ve=f.tags[f.tags.length-1]||f;f.opt.xmlns&&he.ns!==Ve.ns&&Object.keys(he.ns).forEach(function(Me){var Ye=he.ns[Me];ie(f,"onclosenamespace",{prefix:Me,uri:Ye})})}c===0&&(f.closedRoot=!0),f.tagName=f.attribValue=f.attribName="",f.attribList.length=0,f.state=b.TEXT}function Xe(f){var c=f.entity,w=c.toLowerCase(),x,V="";return f.ENTITIES[c]?f.ENTITIES[c]:f.ENTITIES[w]?f.ENTITIES[w]:(c=w,c.charAt(0)==="#"&&(c.charAt(1)==="x"?(c=c.slice(2),x=parseInt(c,16),V=x.toString(16)):(c=c.slice(1),x=parseInt(c,10),V=x.toString(10))),c=c.replace(/^0+/,""),isNaN(x)||V.toLowerCase()!==c||x<0||x>1114111||!Ee(x)?(T(f,"Invalid character entity"),"&"+f.entity+";"):String.fromCodePoint(x))}function Ee(f){return f===9||f===10||f===13||f>=32&&f<=55295||f>=57344&&f<=65533||f>=65536&&f<=1114111}function $e(f,c){c==="<"?(f.state=b.OPEN_WAKA,f.startTagPosition=f.position):S(c)||(T(f,"Non-whitespace before first tag."),f.textNode=c,f.state=b.TEXT)}function _e(f,c){var w="";return c<f.length&&(w=f.charAt(c)),w}function Tt(f){var c=this;if(this.error)throw this.error;if(c.closed)return se(c,"Cannot write after close. Assign an onready handler.");if(f===null)return Y(c);typeof f=="object"&&(f=f.toString());for(var w=0,x="";x=_e(f,w++),c.c=x,!!x;)switch(c.trackPosition&&(c.position++,x===`
`?(c.line++,c.column=0):c.column++),c.state){case b.BEGIN:if(c.state=b.BEGIN_WHITESPACE,x==="\uFEFF")continue;$e(c,x);continue;case b.BEGIN_WHITESPACE:$e(c,x);continue;case b.TEXT:if(c.sawRoot&&!c.closedRoot){for(var de=w-1;x&&x!=="<"&&x!=="&";)x=_e(f,w++),x&&c.trackPosition&&(c.position++,x===`
`?(c.line++,c.column=0):c.column++);c.textNode+=f.substring(de,w-1)}x==="<"&&!(c.sawRoot&&c.closedRoot&&!c.strict)?(c.state=b.OPEN_WAKA,c.startTagPosition=c.position):(!S(x)&&(!c.sawRoot||c.closedRoot)&&T(c,"Text data outside of root node."),x==="&"?c.state=b.TEXT_ENTITY:c.textNode+=x);continue;case b.SCRIPT:x==="<"?c.state=b.SCRIPT_ENDING:c.script+=x;continue;case b.SCRIPT_ENDING:x==="/"?c.state=b.CLOSE_TAG:(c.script+="<"+x,c.state=b.SCRIPT);continue;case b.OPEN_WAKA:if(x==="!")c.state=b.SGML_DECL,c.sgmlDecl="";else if(!S(x))if(R(y,x))c.state=b.OPEN_TAG,c.tagName=x;else if(x==="/")c.state=b.CLOSE_TAG,c.tagName="";else if(x==="?")c.state=b.PROC_INST,c.procInstName=c.procInstBody="";else{if(T(c,"Unencoded <"),c.startTagPosition+1<c.position){var V=c.position-c.startTagPosition;x=new Array(V).join(" ")+x}c.textNode+="<"+x,c.state=b.TEXT}continue;case b.SGML_DECL:if(c.sgmlDecl+x==="--"){c.state=b.COMMENT,c.comment="",c.sgmlDecl="";continue}c.doctype&&c.doctype!==!0&&c.sgmlDecl?(c.state=b.DOCTYPE_DTD,c.doctype+="<!"+c.sgmlDecl+x,c.sgmlDecl=""):g.test(c.sgmlDecl+x)?(ie(c,"onopencdata"),c.state=b.CDATA,c.sgmlDecl="",c.cdata=""):u.test(c.sgmlDecl+x)?(c.state=b.DOCTYPE,(c.doctype||c.sawRoot)&&T(c,"Inappropriately located doctype declaration"),c.doctype="",c.sgmlDecl=""):x===">"?(ie(c,"onsgmldeclaration",c.sgmlDecl),c.sgmlDecl="",c.state=b.TEXT):(M(x)&&(c.state=b.SGML_DECL_QUOTED),c.sgmlDecl+=x);continue;case b.SGML_DECL_QUOTED:x===c.q&&(c.state=b.SGML_DECL,c.q=""),c.sgmlDecl+=x;continue;case b.DOCTYPE:x===">"?(c.state=b.TEXT,ie(c,"ondoctype",c.doctype),c.doctype=!0):(c.doctype+=x,x==="["?c.state=b.DOCTYPE_DTD:M(x)&&(c.state=b.DOCTYPE_QUOTED,c.q=x));continue;case b.DOCTYPE_QUOTED:c.doctype+=x,x===c.q&&(c.q="",c.state=b.DOCTYPE);continue;case b.DOCTYPE_DTD:x==="]"?(c.doctype+=x,c.state=b.DOCTYPE):x==="<"?(c.state=b.OPEN_WAKA,c.startTagPosition=c.position):M(x)?(c.doctype+=x,c.state=b.DOCTYPE_DTD_QUOTED,c.q=x):c.doctype+=x;continue;case b.DOCTYPE_DTD_QUOTED:c.doctype+=x,x===c.q&&(c.state=b.DOCTYPE_DTD,c.q="");continue;case b.COMMENT:x==="-"?c.state=b.COMMENT_ENDING:c.comment+=x;continue;case b.COMMENT_ENDING:x==="-"?(c.state=b.COMMENT_ENDED,c.comment=U(c.opt,c.comment),c.comment&&ie(c,"oncomment",c.comment),c.comment=""):(c.comment+="-"+x,c.state=b.COMMENT);continue;case b.COMMENT_ENDED:x!==">"?(T(c,"Malformed comment"),c.comment+="--"+x,c.state=b.COMMENT):c.doctype&&c.doctype!==!0?c.state=b.DOCTYPE_DTD:c.state=b.TEXT;continue;case b.CDATA:for(var de=w-1;x&&x!=="]";)x=_e(f,w++),x&&c.trackPosition&&(c.position++,x===`
`?(c.line++,c.column=0):c.column++);c.cdata+=f.substring(de,w-1),x==="]"&&(c.state=b.CDATA_ENDING);continue;case b.CDATA_ENDING:x==="]"?c.state=b.CDATA_ENDING_2:(c.cdata+="]"+x,c.state=b.CDATA);continue;case b.CDATA_ENDING_2:x===">"?(c.cdata&&ie(c,"oncdata",c.cdata),ie(c,"onclosecdata"),c.cdata="",c.state=b.TEXT):x==="]"?c.cdata+="]":(c.cdata+="]]"+x,c.state=b.CDATA);continue;case b.PROC_INST:x==="?"?c.state=b.PROC_INST_ENDING:S(x)?c.state=b.PROC_INST_BODY:c.procInstName+=x;continue;case b.PROC_INST_BODY:if(!c.procInstBody&&S(x))continue;x==="?"?c.state=b.PROC_INST_ENDING:c.procInstBody+=x;continue;case b.PROC_INST_ENDING:if(x===">"){let Ve={name:c.procInstName,body:c.procInstBody};te(c,Ve),ie(c,"onprocessinginstruction",Ve),c.procInstName=c.procInstBody="",c.state=b.TEXT}else c.procInstBody+="?"+x,c.state=b.PROC_INST_BODY;continue;case b.OPEN_TAG:R(P,x)?c.tagName+=x:(q(c),x===">"?ne(c):x==="/"?c.state=b.OPEN_TAG_SLASH:(S(x)||T(c,"Invalid character in tag name"),c.state=b.ATTRIB));continue;case b.OPEN_TAG_SLASH:x===">"?(ne(c,!0),Te(c)):(T(c,"Forward-slash in opening tag not followed by >"),c.state=b.ATTRIB);continue;case b.ATTRIB:if(S(x))continue;x===">"?ne(c):x==="/"?c.state=b.OPEN_TAG_SLASH:R(y,x)?(c.attribName=x,c.attribValue="",c.state=b.ATTRIB_NAME):T(c,"Invalid attribute name");continue;case b.ATTRIB_NAME:x==="="?c.state=b.ATTRIB_VALUE:x===">"?(T(c,"Attribute without value"),c.attribValue=c.attribName,me(c),ne(c)):S(x)?c.state=b.ATTRIB_NAME_SAW_WHITE:R(P,x)?c.attribName+=x:T(c,"Invalid attribute name");continue;case b.ATTRIB_NAME_SAW_WHITE:if(x==="=")c.state=b.ATTRIB_VALUE;else{if(S(x))continue;T(c,"Attribute without value"),c.tag.attributes[c.attribName]="",c.attribValue="",ie(c,"onattribute",{name:c.attribName,value:""}),c.attribName="",x===">"?ne(c):R(y,x)?(c.attribName=x,c.state=b.ATTRIB_NAME):(T(c,"Invalid attribute name"),c.state=b.ATTRIB)}continue;case b.ATTRIB_VALUE:if(S(x))continue;M(x)?(c.q=x,c.state=b.ATTRIB_VALUE_QUOTED):(c.opt.unquotedAttributeValues||se(c,"Unquoted attribute value"),c.state=b.ATTRIB_VALUE_UNQUOTED,c.attribValue=x);continue;case b.ATTRIB_VALUE_QUOTED:if(x!==c.q){x==="&"?c.state=b.ATTRIB_VALUE_ENTITY_Q:c.attribValue+=x;continue}me(c),c.q="",c.state=b.ATTRIB_VALUE_CLOSED;continue;case b.ATTRIB_VALUE_CLOSED:S(x)?c.state=b.ATTRIB:x===">"?ne(c):x==="/"?c.state=b.OPEN_TAG_SLASH:R(y,x)?(T(c,"No whitespace between attributes"),c.attribName=x,c.attribValue="",c.state=b.ATTRIB_NAME):T(c,"Invalid attribute name");continue;case b.ATTRIB_VALUE_UNQUOTED:if(!k(x)){x==="&"?c.state=b.ATTRIB_VALUE_ENTITY_U:c.attribValue+=x;continue}me(c),x===">"?ne(c):c.state=b.ATTRIB;continue;case b.CLOSE_TAG:if(c.tagName)x===">"?Te(c):R(P,x)?c.tagName+=x:c.script?(c.script+="</"+c.tagName+x,c.tagName="",c.state=b.SCRIPT):(S(x)||T(c,"Invalid tagname in closing tag"),c.state=b.CLOSE_TAG_SAW_WHITE);else{if(S(x))continue;I(y,x)?c.script?(c.script+="</"+x,c.state=b.SCRIPT):T(c,"Invalid tagname in closing tag."):c.tagName=x}continue;case b.CLOSE_TAG_SAW_WHITE:if(S(x))continue;x===">"?Te(c):T(c,"Invalid characters in closing tag");continue;case b.TEXT_ENTITY:case b.ATTRIB_VALUE_ENTITY_Q:case b.ATTRIB_VALUE_ENTITY_U:var he,ye;switch(c.state){case b.TEXT_ENTITY:he=b.TEXT,ye="textNode";break;case b.ATTRIB_VALUE_ENTITY_Q:he=b.ATTRIB_VALUE_QUOTED,ye="attribValue";break;case b.ATTRIB_VALUE_ENTITY_U:he=b.ATTRIB_VALUE_UNQUOTED,ye="attribValue";break}if(x===";"){var we=Xe(c);c.opt.unparsedEntities&&!Object.values(t.XML_ENTITIES).includes(we)?((c.entityCount+=1)>c.opt.maxEntityCount&&se(c,"Parsed entity count exceeds max entity count"),(c.entityDepth+=1)>c.opt.maxEntityDepth&&se(c,"Parsed entity depth exceeds max entity depth"),c.entity="",c.state=he,c.write(we),c.entityDepth-=1):(c[ye]+=we,c.entity="",c.state=he)}else R(c.entity.length?v:E,x)?c.entity+=x:(T(c,"Invalid character in entity name"),c[ye]+="&"+c.entity+x,c.entity="",c.state=he);continue;default:throw new Error(c,"Unknown state: "+c.state)}return c.position>=c.bufferCheckPosition&&n(c),c}String.fromCodePoint||(function(){var f=String.fromCharCode,c=Math.floor,w=function(){var x=16384,V=[],de,he,ye=-1,we=arguments.length;if(!we)return"";for(var Ve="";++ye<we;){var Me=Number(arguments[ye]);if(!isFinite(Me)||Me<0||Me>1114111||c(Me)!==Me)throw RangeError("Invalid code point: "+Me);Me<=65535?V.push(Me):(Me-=65536,de=(Me>>10)+55296,he=Me%1024+56320,V.push(de,he)),(ye+1===we||V.length>x)&&(Ve+=f.apply(null,V),V.length=0)}return Ve};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:w,configurable:!0,writable:!0}):String.fromCodePoint=w})()})(typeof Li>"u"?Li.sax={}:Li)});function qm(t){return t.charCodeAt(0)===65279?t.slice(1):t}function Xm(t){return t.toLowerCase()}function Vm(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===0}function Di(t,e,r){for(let n of t)e=n(e,r);return e}function Mo(t,e,r){let n=Object.create(null);n.value=r,n.writable=!0,n.enumerable=!0,n.configurable=!0,Object.defineProperty(t,e,n)}function Km(t,e){let r={};return typeof e=="object"&&(r=e),new Sl(r).parseStringPromise(t)}async function kh(t,e={}){return await Km(t,e)}var Oo,wh,_h,jm,Gm,Mr,yh,Sl,Sh=xr(()=>{Oo=Lt(sh(),1),wh=Lt(xh(),1),_h=Lt(vh(),1),jm=Object.defineProperty,Gm=(t,e,r)=>e in t?jm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Mr=(t,e,r)=>Gm(t,typeof e!="symbol"?e+"":e,r);yh={.1:{explicitCharkey:!1,trim:!0,normalize:!0,normalizeTags:!1,attrkey:"@",charkey:"#",explicitArray:!1,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!1,validator:null,xmlns:!1,explicitChildren:!1,childkey:"@@",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,emptyTag:""},.2:{explicitCharkey:!1,trim:!1,normalize:!1,normalizeTags:!1,attrkey:"$",charkey:"_",explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!0,validator:null,xmlns:!1,explicitChildren:!1,preserveChildrenOrder:!1,childkey:"$$",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,rootName:"root",xmldec:{version:"1.0",encoding:"UTF-8",standalone:!0},doctype:null,renderOpts:{pretty:!0,indent:"  ",newline:`
`},headless:!1,chunkSize:1e4,emptyTag:"",cdata:!1}};Sl=class extends wh.EventEmitter{constructor(e){super(),Mr(this,"options"),Mr(this,"remaining",""),Mr(this,"saxParser"),Mr(this,"resultObject",null),Mr(this,"EXPLICIT_CHARKEY"),Mr(this,"errThrown",!1),Mr(this,"ended",!1),Mr(this,"processAsync",()=>{try{if(this.remaining.length<=this.options.chunkSize){let r=this.remaining;this.remaining="",this.saxParser=this.saxParser.write(r),this.saxParser.close()}else{let r=this.remaining.slice(0,this.options.chunkSize);this.remaining=this.remaining.slice(this.options.chunkSize),this.saxParser=this.saxParser.write(r),setTimeout(this.processAsync,0)}}catch(r){this.errThrown||(this.errThrown=!0,this.emit("error",r))}}),Mr(this,"assignOrPush",(r,n,o)=>{n in r?(Array.isArray(r[n])||Mo(r,n,[r[n]]),r[n].push(o)):this.options.explicitArray?Mo(r,n,[o]):Mo(r,n,o)}),Mr(this,"reset",()=>{this.removeAllListeners(),this.saxParser=_h.default.parser(this.options.strict,{trim:!1,normalize:!1,xmlns:this.options.xmlns}),this.errThrown=!1,this.saxParser.onerror=a=>{this.saxParser.resume(),this.errThrown||(this.errThrown=!0,this.emit("error",a))},this.saxParser.onend=()=>{this.ended||(this.ended=!0,this.emit("end",this.resultObject))},this.ended=!1,this.EXPLICIT_CHARKEY=this.options.explicitCharkey,this.resultObject=null;let r=[],n=this.options.attrkey,o=this.options.charkey;this.saxParser.onopentag=a=>{let s={};s[o]="",this.options.ignoreAttrs||Object.keys(a.attributes).forEach(l=>{!(n in s)&&!this.options.mergeAttrs&&(s[n]={});let d=this.options.attrValueProcessors?Di(this.options.attrValueProcessors,a.attributes[l],l):a.attributes[l],p=this.options.attrNameProcessors?Di(this.options.attrNameProcessors,l):l;this.options.mergeAttrs?this.assignOrPush(s,p,d):Mo(s[n],p,d)}),s["#name"]=this.options.tagNameProcessors?Di(this.options.tagNameProcessors,a.name):a.name,this.options.xmlns&&(s[this.options.xmlnskey]={uri:a.uri,local:a.local}),r.push(s)},this.saxParser.onclosetag=()=>{let a=r.pop(),s=a["#name"];(!this.options.explicitChildren||!this.options.preserveChildrenOrder)&&delete a["#name"];let l;a.cdata===!0&&(l=a.cdata,delete a.cdata);let d=r[r.length-1],p="";if(a[o].match(/^\s*$/)&&!l?(p=a[o],delete a[o]):(this.options.trim&&(a[o]=a[o].trim()),this.options.normalize&&(a[o]=a[o].replace(/\s{2,}/g," ").trim()),a[o]=this.options.valueProcessors?Di(this.options.valueProcessors,a[o],s):a[o],Object.keys(a).length===1&&o in a&&!this.EXPLICIT_CHARKEY&&(a=a[o])),Vm(a)&&(typeof this.options.emptyTag=="function"?a=this.options.emptyTag():a=this.options.emptyTag!==""?this.options.emptyTag:p),this.options.validator){let g=`/${r.map(u=>u["#name"]).concat(s).join("/")}`;(()=>{try{a=this.options.validator(g,d&&d[s],a)}catch(u){this.emit("error",u)}})()}if(this.options.explicitChildren&&!this.options.mergeAttrs&&typeof a=="object")if(this.options.preserveChildrenOrder){if(d){d[this.options.childkey]=d[this.options.childkey]||[];let g={};Object.keys(a).forEach(u=>{Mo(g,u,a[u])}),d[this.options.childkey].push(g),delete a["#name"],Object.keys(a).length===1&&o in a&&!this.EXPLICIT_CHARKEY&&(a=a[o])}}else{let g={};this.options.attrkey in a&&(g[this.options.attrkey]=a[this.options.attrkey],delete a[this.options.attrkey]),!this.options.charsAsChildren&&this.options.charkey in a&&(g[this.options.charkey]=a[this.options.charkey],delete a[this.options.charkey]),Object.getOwnPropertyNames(a).length>0&&(g[this.options.childkey]=a),a=g}if(r.length>0)this.assignOrPush(d,s,a);else{if(this.options.explicitRoot){let g=a,u={};Mo(u,s,g),a=u}this.resultObject=a,this.ended=!0,this.emit("end",this.resultObject)}};let i=a=>{let s=r[r.length-1];if(s&&(s[o]+=a,this.options.explicitChildren&&this.options.preserveChildrenOrder&&this.options.charsAsChildren&&(this.options.includeWhiteChars||a.replace(/\\n/g,"").trim()!==""))){s[this.options.childkey]=s[this.options.childkey]||[];let l={"#name":"__text__"};l[o]=a,this.options.normalize&&(l[o]=l[o].replace(/\s{2,}/g," ").trim()),s[this.options.childkey].push(l)}return s};this.saxParser.ontext=i,this.saxParser.oncdata=a=>{let s=i(a);s&&(s.cdata=!0)}}),Mr(this,"parseString",(r,n)=>{n&&typeof n=="function"&&(this.on("end",o=>{this.reset(),n(null,o)}),this.on("error",o=>{this.reset(),n(o)}));try{return r=r.toString(),r.trim()===""?(this.emit("end",null),!0):(r=qm(r),this.options.async?(this.remaining=r,setTimeout(this.processAsync,0),this.saxParser):this.saxParser.write(r).close())}catch(o){if(!this.errThrown&&!this.ended)this.emit("error",o),this.errThrown=!0;else if(this.ended)throw o}}),Mr(this,"parseStringPromise",r=>new Promise((n,o)=>{this.parseString(r,(i,a)=>{i?o(i):n(a)})})),this.options={},Object.keys(yh["0.2"]).forEach(r=>{this.options[r]=yh["0.2"][r]}),e&&Object.keys(e).forEach(r=>{this.options[r]=e[r]}),this.options.xmlns&&(this.options.xmlnskey=`${this.options.attrkey}ns`),this.options.normalizeTags&&(this.options.tagNameProcessors||(this.options.tagNameProcessors=[]),this.options.tagNameProcessors.unshift(Xm)),this.reset()}}});function Th(t){return t.includes("&")?t.replace(/&(#x[\dA-Fa-f]+|#\d+|[a-zA-Z]+);/g,(e,r)=>r.startsWith("#x")?String.fromCodePoint(Number.parseInt(r.slice(2),16)):r.startsWith("#")?String.fromCodePoint(Number.parseInt(r.slice(1),10)):Ym[e]||e):t}function Qm(t){let e=t.slice(0,12),r=Array.from(e).map(n=>n.toString(16).padStart(2,"0")).join("");for(let[n,o]of Object.entries(Zm))if(r.startsWith(n))return o;return"unknown"}function Bi(t,e,r,n){return URL.createObjectURL(new Blob([t],{type:e}))}function Ph(t){let e="";return e=t.name??"",e}function ub(t){return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}async function Mh(t){return t instanceof Uint8Array?ub(t):await t.arrayBuffer()}function sr(t){let e=t.byteLength,r=e===4?"getUint32":e===2?"getUint16":"getUint8";return new DataView(t)[r](0)}function Lr(t,e){let r={};for(let n in t){let[o,i,a]=t[n];r[n]=a==="string"?ka(e.slice(o,o+i)):sr(e.slice(o,o+i))}return r}function Sa(t){let e=t.reduce((o,i)=>o+i.length,0),r=new t[0].constructor(e),n=0;for(let o of t)r.set(o,n),n+=o.length;return r}function Fi(t,e=0){let r=0,n=0;for(let o of t.subarray(e,e+4))if(r=r<<7|(o&127)>>>0,n++,o&128)break;return{value:r,length:n}}function pb(t){let e=0;for(let r of t.subarray(-4))r&128&&(e=0),e=e<<7|r&127;return e}function Oh(t){let e=0;for(;t>0;t=t>>1)(t&1)===1&&e++;return e}function fb(t){let e=0;for(;(t&1)===0;)t=t>>1,e++;return e}function gb(t){let e=[];for(let r=0;r<t.length;r++){let n=t[r];if(n===0)e.push(0);else if(n<=8)for(let o of t.subarray(r+1,(r+=n)+1))e.push(o);else if(n<=127)e.push(n);else if(n<=191){let o=n<<8|t[r+++1],i=(o&16383)>>>3,a=(o&7)+3;for(let s=0;s<a;s++)e.push(e[e.length-i])}else e.push(32,n^128)}return Uint8Array.from(e)}function mb(t,e){let r=e(t.huffcdic),{magic:n,offset1:o,offset2:i}=Lr(sb,r);if(n!=="HUFF")throw new Error("Invalid HUFF record");let a=Array.from({length:256},(p,g)=>o+g*4).map(p=>sr(r.slice(p,p+4))).map(p=>[p&128,p&31,p>>>8]),s=[[0,0],...Array.from({length:32},(p,g)=>i+g*8).map(p=>[sr(r.slice(p,p+4)),sr(r.slice(p+4,p+8))])],l=[];for(let p=1;p<t.numHuffcdic;p++){let g=e(t.huffcdic+p),u=Lr(lb,g);if(u.magic!=="CDIC")throw new Error("Invalid CDIC record");let h=Math.min(1<<u.codeLength,u.numEntries-l.length),_=g.slice(u.length);for(let C=0;C<h;C++){let y=sr(_.slice(C*2,C*2+2)),P=sr(_.slice(y,y+2)),E=P&32767,v=P&32768,S=new Uint8Array(_.slice(y+2,y+2+E));l.push([S,v])}}let d=p=>{let g=new Uint8Array,u=p.byteLength*8;for(let h=0;h<u;){let _=Number(bb(p,h)),[C,y,P]=a[_>>>24];if(!C){for(;_>>>32-y<s[y][0];)y+=1;P=s[y][1]}if(h+=y,h>u)break;let E=P-(_>>>32-y),[v,S]=l[E];S||(v=d(v),l[E]=[v,!0]),g=Sa([g,v])}return g};return d}function bb(t,e){let r=e>>3,n=e+32,o=n>>3,i=0n;for(let a=r;a<=o;a++)i=i<<8n|BigInt(t[a]??0);return i>>8n-BigInt(n&7)&0xFFFFFFFFn}function xb(t,e){let{magic:r,count:n}=Lr(ab,t);if(r!=="EXTH")throw new Error("Invalid EXTH header");let o=Al(e.toString()),i={},a=12;for(let s=0;s<n;s++){let l=sr(t.slice(a,a+4)),d=sr(t.slice(a+4,a+8));if(l in Nh){let[p,g,u]=Nh[l],h=t.slice(a+8,a+d),_=g==="uint"?sr(h):o.decode(h);u?(i[p]??(i[p]=[]),i[p].push(_)):i[p]=_}a+=d}return i}function vb(t){let e=t&1,r=Oh(t>>>1);return n=>{for(let o=0;o<r;o++){let i=pb(n);n=n.subarray(0,-i)}if(e){let o=(n[n.length-1]&3)+1;n=n.subarray(0,-o)}return n}}function yb(t){let{flags:e,dataStart:r,keyLength:n,keyStart:o}=Lr(db,t),i=new Uint8Array(t.slice(r));if(e&2){let a=n===16?1024:1040,s=new Uint8Array(t.slice(o,o+n)),l=Math.min(a,i.length);for(let d=0;d<l;d++)i[d]=i[d]^s[d%s.length]}if(e&1)try{return Eu(i)}catch(a){console.warn(a),console.warn("Failed to decompress font")}return i}function zi(t,e){let r=e(t),n=Lr(Ah,r);if(n.magic!=="INDX")throw new Error("Invalid INDX record");let o=Al(n.encoding.toString()),i={},a=0;for(let u=0;u<n.numCncx;u++){let h=e(t+n.numRecords+u+1),_=new Uint8Array(h);for(let C=0;C<_.byteLength;){let y=C,{value:P,length:E}=Fi(_,C);C+=E;let v=h.slice(C,C+P);C+=P,i[a+y]=o.decode(v)}a+=65536}let s=r.slice(n.length),l=Lr(ib,s);if(l.magic!=="TAGX")throw new Error("Invalid TAGX section");let d=(l.length-12)/4,p=Array.from({length:d},(u,h)=>new Uint8Array(s.slice(12+h*4,12+h*4+4))),g=[];for(let u=0;u<n.numRecords;u++){let h=e(t+1+u),_=new Uint8Array(h),C=Lr(Ah,h);if(C.magic!=="INDX")throw new Error("Invalid INDX record");for(let y=0;y<C.numRecords;y++){let P=C.idxt+4+2*y,E=sr(h.slice(P,P+2)),v=sr(h.slice(E,E+1)),S=ka(h.slice(E+1,E+1+v)),M=[],k=E+1+v,R=0,I=k+l.numControlBytes;for(let[O,L,F,$]of p){if($&1){R++;continue}let J=k+R,te=sr(h.slice(J,J+1))&F;if(te===F)if(Oh(F)>1){let{value:ie,length:ue}=Fi(_,I);M.push([O,0,ie,L]),I+=ue}else M.push([O,1,0,L]);else M.push([O,te>>fb(F),0,L])}let b={};for(let[O,L,F,$]of M){let J=[];if(L!==0)for(let te=0;te<L*$;te++){let{value:ie,length:ue}=Fi(_,I);J.push(ie),I+=ue}else{let te=0;for(;te<F;){let{value:ie,length:ue}=Fi(_,I);J.push(ie),I+=ue,te+=ue}}b[O]=J}g.push({name:S,tagMap:b})}}return{table:g,cncx:i}}function wb(t,e){let{table:r,cncx:n}=zi(t,e),o=r.map(({tagMap:a},s)=>({index:s,offset:a[1]?.[0],size:a[2]?.[0],label:n[a[3]?.[0]]??"",headingLevel:a[4]?.[0],pos:a[6],parent:a[21]?.[0],firstChild:a[22]?.[0],lastChild:a[23]?.[0]})),i=a=>(a.firstChild==null||(a.children=o.filter(s=>s.parent===a.index).map(i)),a);return o.filter(a=>a.headingLevel===0).map(i)}function Ch(t=0,e=0){return`kindle:pos:fid:${t.toString(32).toUpperCase().padStart(4,"0")}:off:${e.toString(32).toUpperCase().padStart(10,"0")}`}function Ih(t){let e=t.match(kb);if(!e)return"";let[,r,n]=e;return`[${r}="${n}"]`}function Tb(t){let[e,r]=t.match(Sb).slice(1);return{fid:Number.parseInt(e,32),off:Number.parseInt(r,32)}}async function Nl(t,e){let r=new Tl(t,e);return await r.innerLoadFile(),await r.innerInit(),r}async function Cl(t,e){let r=new El(t,e);return await r.innerLoadFile(),await r.innerInit(),r}var Ym,Eh,Zm,Jm,eb,tb,rb,nb,ob,ab,Ah,ib,sb,lb,cb,db,hb,ka,Al,Nh,_b,kb,Sb,Rh,Eb,Ab,ir,$i,Nb,Cb,Ht,Tl,Ib,Rb,Or,El,Lh=xr(()=>{Js();Sh();Ym={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};Eh={XML:"application/xml",XHTML:"application/xhtml+xml",HTML:"text/html",CSS:"text/css",SVG:"image/svg+xml"},Zm={ffd8ff:"image/jpeg","89504e47":"image/png",47494638:"image/gif","424d":"image/bmp","3c737667":"image/svg+xml","00000018":"video/mp4","00000020":"video/mp4","1a45dfa3":"video/mkv","1f43b675":"video/webm",494433:"audio/mp3",52494646:"audio/wav","4f676753":"audio/ogg","00010000":"font/ttf",74727565:"font/ttf","4f54544f":"font/otf","774f4646":"font/woff","774f4632":"font/woff2","504c":"font/eot"};Jm={1252:"windows-1252",65001:"utf-8"},eb={1:["ar","ar-SA","ar-IQ","ar-EG","ar-LY","ar-DZ","ar-MA","ar-TN","ar-OM","ar-YE","ar-SY","ar-JO","ar-LB","ar-KW","ar-AE","ar-BH","ar-QA"],2:["bg"],3:["ca"],4:["zh","zh-TW","zh-CN","zh-HK","zh-SG"],5:["cs"],6:["da"],7:["de","de-DE","de-CH","de-AT","de-LU","de-LI"],8:["el"],9:["en","en-US","en-GB","en-AU","en-CA","en-NZ","en-IE","en-ZA","en-JM",null,"en-BZ","en-TT","en-ZW","en-PH"],10:["es","es-ES","es-MX",null,"es-GT","es-CR","es-PA","es-DO","es-VE","es-CO","es-PE","es-AR","es-EC","es-CL","es-UY","es-PY","es-BO","es-SV","es-HN","es-NI","es-PR"],11:["fi"],12:["fr","fr-FR","fr-BE","fr-CA","fr-CH","fr-LU","fr-MC"],13:["he"],14:["hu"],15:["is"],16:["it","it-IT","it-CH"],17:["ja"],18:["ko"],19:["nl","nl-NL","nl-BE"],20:["no","nb","nn"],21:["pl"],22:["pt","pt-BR","pt-PT"],23:["rm"],24:["ro"],25:["ru"],26:["hr",null,"sr"],27:["sk"],28:["sq"],29:["sv","sv-SE","sv-FI"],30:["th"],31:["tr"],32:["ur"],33:["id"],34:["uk"],35:["be"],36:["sl"],37:["et"],38:["lv"],39:["lt"],41:["fa"],42:["vi"],43:["hy"],44:["az"],45:["eu"],46:["hsb"],47:["mk"],48:["st"],49:["ts"],50:["tn"],52:["xh"],53:["zu"],54:["af"],55:["ka"],56:["fo"],57:["hi"],58:["mt"],59:["se"],62:["ms"],63:["kk"],65:["sw"],67:["uz",null,"uz-UZ"],68:["tt"],69:["bn"],70:["pa"],71:["gu"],72:["or"],73:["ta"],74:["te"],75:["kn"],76:["ml"],77:["as"],78:["mr"],79:["sa"],82:["cy","cy-GB"],83:["gl","gl-ES"],87:["kok"],97:["ne"],98:["fy"]},tb={name:[0,32,"string"],type:[60,4,"string"],creator:[64,4,"string"],numRecords:[76,2,"uint"]},rb={compression:[0,2,"uint"],numTextRecords:[8,2,"uint"],recordSize:[10,2,"uint"],encryption:[12,2,"uint"]},nb={magic:[16,4,"string"],length:[20,4,"uint"],type:[24,4,"uint"],encoding:[28,4,"uint"],uid:[32,4,"uint"],version:[36,4,"uint"],titleOffset:[84,4,"uint"],titleLength:[88,4,"uint"],localeRegion:[94,1,"uint"],localeLanguage:[95,1,"uint"],resourceStart:[108,4,"uint"],huffcdic:[112,4,"uint"],numHuffcdic:[116,4,"uint"],exthFlag:[128,4,"uint"],trailingFlags:[240,4,"uint"],indx:[244,4,"uint"]},ob={resourceStart:[108,4,"uint"],fdst:[192,4,"uint"],numFdst:[196,4,"uint"],frag:[248,4,"uint"],skel:[252,4,"uint"],guide:[260,4,"uint"]},ab={magic:[0,4,"string"],length:[4,4,"uint"],count:[8,4,"uint"]},Ah={magic:[0,4,"string"],length:[4,4,"uint"],type:[8,4,"uint"],idxt:[20,4,"uint"],numRecords:[24,4,"uint"],encoding:[28,4,"uint"],language:[32,4,"uint"],total:[36,4,"uint"],ordt:[40,4,"uint"],ligt:[44,4,"uint"],numLigt:[48,4,"uint"],numCncx:[52,4,"uint"]},ib={magic:[0,4,"string"],length:[4,4,"uint"],numControlBytes:[8,4,"uint"]},sb={magic:[0,4,"string"],offset1:[8,4,"uint"],offset2:[12,4,"uint"]},lb={magic:[0,4,"string"],length:[4,4,"uint"],numEntries:[8,4,"uint"],codeLength:[12,4,"uint"]},cb={magic:[0,4,"string"],numEntries:[8,4,"uint"]},db={flags:[8,4,"uint"],dataStart:[12,4,"uint"],keyLength:[16,4,"uint"],keyStart:[20,4,"uint"]};hb=new TextDecoder,ka=t=>hb.decode(t);Al=t=>new TextDecoder(Jm[t]);Nh={100:["creator","string",!0],101:["publisher","string",!1],103:["description","string",!1],104:["isbn","string",!1],105:["subject","string",!0],106:["date","string",!1],108:["contributor","string",!0],109:["rights","string",!1],110:["subjectCode","string",!0],112:["source","string",!0],113:["asin","string",!1],121:["boundary","uint",!1],122:["fixedLayout","string",!1],125:["numResources","uint",!1],126:["originalResolution","string",!1],127:["zeroGutter","string",!1],128:["zeroMargin","string",!1],129:["coverURI","string",!1],132:["regionMagnification","string",!1],201:["coverOffset","uint",!1],202:["thumbnailOffset","uint",!1],503:["title","string",!1],524:["language","string",!0],527:["pageProgressionDirection","string",!1]};_b=/<\s*(?:mbp:)?pagebreak[^>]*>/gi;kb=/\s(id|name|aid)\s*=\s*['"]([^'"]*)['"]/i;Sb=/kindle:pos:fid:(\w+):off:(\w+)/;Rh=/kindle:(flow|embed):(\w+)(?:\?mime=(\w+\/[-+.\w]+))?/,Eb=Object.defineProperty,Ab=(t,e,r)=>e in t?Eb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ir=(t,e,r)=>Ab(t,typeof e!="symbol"?e+"":e,r),$i=class{constructor(e,r){if(ir(this,"fileArrayBuffer"),ir(this,"recordsOffset"),ir(this,"recordsMagic"),ir(this,"start",0),ir(this,"pdbHeader"),ir(this,"mobiHeader"),ir(this,"palmdocHeader"),ir(this,"kf8Header"),ir(this,"exth"),ir(this,"isKf8",!1),ir(this,"resourceStart"),ir(this,"decoder"),ir(this,"encoder"),ir(this,"removeTrailingEntries"),ir(this,"decompress"),this.fileArrayBuffer=e,this.parsePdbHeader(),this.parseFirstRecord(this.loadRecord(0)),this.resourceStart=this.mobiHeader.resourceStart,!this.isKf8){let n=this.exth.boundary??4294967295;if(n<4294967295){try{this.parseFirstRecord(this.loadRecord(n)),this.start=n,this.isKf8=!0}catch{console.warn("Failed to parse kf8 header.")}r.endsWith(".mobi")&&console.warn(`File "${r}" is a compatible file. Please change the file extension to .azw3 to make it parse correctly.`)}}this.setup()}decode(e){return this.decoder.decode(e)}encode(e){return this.encoder.encode(e)}pdbLoadRecord(e){let[r,n]=this.recordsOffset[e]??[0,0];return this.fileArrayBuffer.slice(r,n)}loadRecord(e){return this.pdbLoadRecord(this.start+e)}loadMagic(e){return this.recordsMagic[this.start+e]}loadTextBuffer(e){return this.decompress(this.removeTrailingEntries(new Uint8Array(this.loadRecord(e+1))))}loadResource(e){let r=this.pdbLoadRecord(this.resourceStart+e),n=ka(r.slice(0,4)),o;return n==="FONT"?o=yb(r):n==="VIDE"||n==="AUDI"?o=new Uint8Array(r.slice(12)):o=new Uint8Array(r),{type:Qm(o),raw:o}}getNCX(){let e=this.mobiHeader.indx;if(e<4294967295)return wb(e,this.loadRecord.bind(this))}getMetadata(){let e=this.mobiHeader,r=this.exth;return{identifier:this.mobiHeader.uid.toString(),title:r?.title||e.title,author:r?.creator?.map(Th)??[],publisher:r?.publisher??"",language:r?.language?.[0]??e.language,published:r?.date??"",description:r?.description??"",subject:r?.subject?.map(Th)??[],rights:r?.rights??"",contributor:r?.contributor??[]}}getCoverImage(){let e=this.exth,r=Number(e.coverOffset??4294967295),n=Number(e.thumbnailOffset??4294967295),o=r<4294967295?r:n<4294967295?n:void 0;if(o)return this.loadResource(o)}parsePdbHeader(){let e=Lr(tb,this.fileArrayBuffer.slice(0,78));e.name=e.name.replace(/\0.*$/,""),this.pdbHeader=e;let r=this.fileArrayBuffer.slice(78,78+e.numRecords*8),n=Array.from({length:e.numRecords},(o,i)=>sr(r.slice(i*8,i*8+4)));this.recordsOffset=n.map((o,i)=>[o,n[i+1]]),this.recordsMagic=n.map(o=>ka(this.fileArrayBuffer.slice(o,o+4)))}parseFirstRecord(e){this.palmdocHeader=Lr(rb,e.slice(0,16));let r=Lr(nb,e);if(r.magic!=="MOBI")throw new Error("Missing MOBI header");let{titleOffset:n,titleLength:o,localeLanguage:i,localeRegion:a}=r,s=eb[i.toString()]??[],l={title:ka(e.slice(n,n+o)),language:s[a>>2]??s[0]??"unknown"};this.mobiHeader=Object.assign(r,l),this.kf8Header=r.version>=8?Lr(ob,e):void 0,this.isKf8=r.version>=8,this.exth=r.exthFlag&64?xb(e.slice(r.length+16),r.encoding):void 0}setup(){this.decoder=Al(this.mobiHeader.encoding.toString()),this.encoder=new TextEncoder;let e=this.palmdocHeader.compression;if(e===1)this.decompress=n=>n;else if(e===2)this.decompress=gb;else if(e===17480)this.decompress=mb(this.mobiHeader,this.loadRecord.bind(this));else throw new Error("Unsupported compression");let r=this.mobiHeader.trailingFlags;this.removeTrailingEntries=vb(r)}},Nb=Object.defineProperty,Cb=(t,e,r)=>e in t?Nb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ht=(t,e,r)=>Cb(t,typeof e!="symbol"?e+"":e,r);Tl=class{constructor(e,r="./images"){this.file=e,Ht(this,"fileArrayBuffer"),Ht(this,"mobiFile"),Ht(this,"fileName",""),Ht(this,"fdstTable",[]),Ht(this,"fullRawLength",0),Ht(this,"skelTable",[]),Ht(this,"fragTable",[]),Ht(this,"chapters",[]),Ht(this,"toc",[]),Ht(this,"fragmentOffsets",new Map),Ht(this,"fragmentSelectors",new Map),Ht(this,"rawHead",new Uint8Array),Ht(this,"rawTail",new Uint8Array),Ht(this,"lastLoadedHead",-1),Ht(this,"lastLoadedTail",-1),Ht(this,"resourceCache",new Map),Ht(this,"chapterCache",new Map),Ht(this,"idToChapter",new Map),Ht(this,"resourceSaveDir","./images"),this.fileName=Ph(e),this.resourceSaveDir=r}getFileInfo(){return{fileName:this.fileName}}getMetadata(){return this.mobiFile.getMetadata()}getCoverImage(){if(this.resourceCache.has("cover"))return this.resourceCache.get("cover");let e=this.mobiFile.getCoverImage(),r="";return e&&(r=Bi(e.raw,e.type,"cover",this.resourceSaveDir),this.resourceCache.set("cover",r)),r}getSpine(){return this.chapters}getToc(){return this.toc}async innerLoadFile(){this.fileArrayBuffer=await Mh(this.file),this.mobiFile=new $i(this.fileArrayBuffer,this.fileName)}async innerInit(){let e=this.mobiFile.loadRecord.bind(this.mobiFile),r=this.mobiFile.kf8Header,n=this.mobiFile.loadRecord(r.fdst),o=Lr(cb,n);if(o.magic!=="FDST")throw new Error("Missing FDST record");let i=Array.from({length:o.numEntries},(u,h)=>12+h*8).map(u=>[sr(n.slice(u,u+4)),sr(n.slice(u+4,u+8))]);this.fdstTable=i,this.fullRawLength=i[i.length-1][1];let s=zi(r.skel,e).table.map(({name:u,tagMap:h},_)=>({index:_,name:u,numFrag:h[1][0],offset:h[6][0],length:h[6][1]}));this.skelTable=s;let l=zi(r.frag,e),d=l.table.map(({name:u,tagMap:h})=>({insertOffset:Number.parseInt(u),selector:l.cncx[h[2][0]],index:h[4][0],offset:h[6][0],length:h[6][1]}));this.fragTable=d;let p=this.skelTable.reduce((u,h,_)=>{let C=u[u.length-1],y=C?.fragEnd??0,P=y+h.numFrag,E=this.fragTable.slice(y,P),v=h.length+E.reduce((k,R)=>k+R.length,0),S=(C?.totalLength??0)+v,M={id:_.toString(),skel:h,frags:E,fragEnd:P,length:v,totalLength:S};return this.idToChapter.set(_,M),u.push(M),u},[]);this.chapters=p;let g=this.mobiFile.getNCX();if(g){let u=({label:h,pos:_,children:C})=>{let[y,P]=_,E=Ch(y,P),v=this.fragmentOffsets.get(y);return v?v.push(P):this.fragmentOffsets.set(y,[P]),{label:h,href:E,children:C?.map(u)}};this.toc=g.map(u)}}getGuide(){let e=this.mobiFile.kf8Header.guide;if(e<4294967295){let r=this.mobiFile.loadRecord.bind(this.mobiFile),{table:n,cncx:o}=zi(e,r);return n.map(({name:i,tagMap:a})=>({label:o[a[1][0]]??"",type:i?.split(/\s/),href:Ch(a[6]?.[0]??a[3]?.[0])}))}}loadRaw(e,r){let n=r-this.rawHead.length,o=this.fullRawLength===0?1/0:this.fullRawLength-this.rawTail.length-e;if(n<0||n<o){for(;this.rawHead.length<r;){this.lastLoadedHead++;let a=this.lastLoadedHead,s=this.mobiFile.loadTextBuffer(a);this.rawHead=Sa([this.rawHead,s])}return this.rawHead.slice(e,r)}for(;this.fullRawLength-this.rawTail.length>e;){this.lastLoadedTail++;let a=this.mobiFile.palmdocHeader.numTextRecords-1-this.lastLoadedTail,s=this.mobiFile.loadTextBuffer(a);this.rawTail=Sa([s,this.rawTail])}let i=this.fullRawLength-this.rawTail.length;return this.rawTail.slice(e-i,r-i)}loadText(e){let{skel:r,frags:n,length:o}=e,i=this.loadRaw(r.offset,r.offset+o),a=i.slice(0,r.length);for(let s of n){let l=s.insertOffset-r.offset,d=r.length+s.offset,p=i.slice(d,d+s.length);a=Sa([a.slice(0,l),p,a.slice(l)]);let g=this.fragmentOffsets.get(s.index);if(g)for(let u of g){let h=this.mobiFile.decode(p.buffer).slice(u),_=Ih(h);_&&this.cacheFragmentSelector(s.index,u,_)}}return this.mobiFile.decode(a.buffer)}loadChapter(e){let r=Number.parseInt(e);if(Number.isNaN(r))return;if(this.chapterCache.has(r))return this.chapterCache.get(r);let n=this.idToChapter.get(r);if(n){let o=this.replace(this.loadText(n));return this.chapterCache.set(r,o),o}}cacheFragmentSelector(e,r,n){let o=this.fragmentSelectors.get(e);if(o)o.set(r,n);else{let i=new Map;this.fragmentSelectors.set(e,i),i.set(r,n)}}loadFlow(e){if(e<4294967295)return this.loadRaw(this.fdstTable[e][0],this.fdstTable[e][1])}resolveHref(e){if(/^(?!blob|kindle)\w+:/i.test(e))return;let{fid:r,off:n}=Tb(e),o=this.chapters.find(_=>_.frags.some(C=>C.index===r));if(!o)return;let i=o.id,a=this.fragmentSelectors.get(r)?.get(n);if(a)return{id:i,selector:a};let{skel:s,frags:l}=o,d=l.find(_=>_.index===r),p=s.offset+s.length+d.offset,g=this.loadRaw(p,p+d.length),u=this.mobiFile.decode(g.buffer).slice(n),h=Ih(u);return this.cacheFragmentSelector(r,n,h),{id:i,selector:h}}replaceResources(e){return e.replace(new RegExp(Rh,"gi"),(r,n,o,i)=>{if(this.resourceCache.has(r))return this.resourceCache.get(r);let a=n==="flow"?this.loadFlow(Number.parseInt(o)):this.mobiFile.loadResource(Number.parseInt(o,36)-1).raw,s="";if(i===Eh.CSS||i===Eh.SVG){let d=this.mobiFile.decode(a?.buffer);s=this.replaceResources(d)}else s=a;let l=Bi(s,i,o,this.resourceSaveDir);return this.resourceCache.set(r,l),l})}replace(e){let r=[],o=e.match(/<head[^>]*>([\s\S]*)<\/head>/i)[1].match(/<link[^>]*>/gi)??[];for(let s of o){let l=s.match(/href="([^"]*)"/i)[1],d=s.match(Rh)[2],p=this.replaceResources(l);r.push({id:d,href:p})}let i=e.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1];return{html:this.replaceResources(i),css:r}}destroy(){this.resourceCache.forEach(e=>{URL.revokeObjectURL(e)})}},Ib=Object.defineProperty,Rb=(t,e,r)=>e in t?Ib(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Or=(t,e,r)=>Rb(t,typeof e!="symbol"?e+"":e,r);El=class{constructor(e,r="./images"){this.file=e,Or(this,"fileArrayBuffer"),Or(this,"mobiFile"),Or(this,"fileName",""),Or(this,"chapters",[]),Or(this,"idToChapter",new Map),Or(this,"toc",[]),Or(this,"resourceSaveDir","./images"),Or(this,"chapterCache",new Map),Or(this,"resourceCache",new Map),Or(this,"recindexReg",/recindex=["']?(\d+)["']?/),Or(this,"mediarecindexReg",/mediarecindex=["']?(\d+)["']?/),Or(this,"fileposReg",/filepos=["']?(\d+)["']?/),this.fileName=Ph(e),this.resourceSaveDir=r}getFileInfo(){return{fileName:this.fileName}}getSpine(){return this.chapters}loadChapter(e){let r=Number.parseInt(e);if(Number.isNaN(r))return;if(this.chapterCache.has(r))return this.chapterCache.get(r);let n=this.idToChapter.get(r);if(!n)return;let o=this.replace(n.text);return this.chapterCache.set(r,o),o}getToc(){return this.toc}getCoverImage(){if(this.resourceCache.has("cover"))return this.resourceCache.get("cover");let e=this.mobiFile.getCoverImage(),r="";return e&&(r=Bi(e.raw,e.type,"cover",this.resourceSaveDir),this.resourceCache.set("cover",r)),r}getMetadata(){return this.mobiFile.getMetadata()}async innerLoadFile(){this.fileArrayBuffer=await Mh(this.file),this.mobiFile=new $i(this.fileArrayBuffer,this.fileName)}async innerInit(){let{palmdocHeader:e}=this.mobiFile,r=[];for(let _=0;_<e.numTextRecords;_++)r.push(this.mobiFile.loadTextBuffer(_));let n=Sa(r),o=Array.from(n,_=>String.fromCharCode(_)).join(""),i=[],a=new Map,s=0,l=Array.from(o.matchAll(_b));l.unshift({index:0,input:"",groups:void 0,0:""});for(let _=0;_<l.length;_++){let C=l[_],y=C.index,P=C[0],E=l[_+1]?.index,v=o.slice(y+P.length,E),S=Uint8Array.from(v,R=>R.charCodeAt(0)),M=this.mobiFile.decode(S.buffer),k={id:String(s),text:M,start:y,end:E,size:S.length};i.push(k),a.set(s,k),s++}let d=i[i.length-1].text;i[i.length-1].text=d.slice(0,d.indexOf("</body>"));let p=i[0].text,g=p.indexOf("<body>");i[0].text=p.slice(g+6),this.chapters=i,this.idToChapter=a;let u=p.slice(0,g),h=this.findTocChapter(u);if(h){let _=`<wrapper>${h.text.replace(/filepos=(\d+)/gi,'filepos="$1"')}</wrapper>`,C=await kh(_,{preserveChildrenOrder:!0,explicitChildren:!0,childkey:"children"}),y=[];this.parseNavMap(C.wrapper.children,y),this.toc=y}}findTocChapter(e){let r=/<reference.*\/>/g,n=e.match(r),o=/type="(.+?)"/,i=/filepos=(.*)/;if(n)for(let a of n){let s=a.match(o)?.[1].trim(),l=a.match(i)?.[1].trim();if(s==="toc"&&l){let d=Number.parseInt(l,10);return this.chapters.find(g=>g.end>d)}}}parseNavMap(e,r){for(let n of e){let o=n["#name"];if(o==="p"||o==="blockquote"){let i={label:"",href:""};if(n.a){let a=n.a[0],s=a._,l=Number(a.$.filepos);i={label:s,href:`filepos:${l}`},r.push(i)}(n.p||n.blockquote)&&(i.children=[],this.parseNavMap(n.children,i.children))}}}loadResource(e){if(this.resourceCache.has(String(e)))return this.resourceCache.get(String(e));let{type:r,raw:n}=this.mobiFile.loadResource(e-1),o=Bi(n,r,String(e),this.resourceSaveDir);return this.resourceCache.set(String(e),o),o}replace(e){return e=e.replace(/<img[^>]*>/g,r=>{let n=r.match(this.recindexReg)[1],o=this.loadResource(Number.parseInt(n));return r.replace(this.recindexReg,`src="${o}"`)}),e=e.replace(/<(video|audio)[^>]*>/g,r=>{let n=r.match(this.recindexReg)[1],o=this.loadResource(Number.parseInt(n));r=r.replace(this.mediarecindexReg,`src="${o}"`);let i=r.match(this.recindexReg)?.[1];if(i){let a=this.loadResource(Number.parseInt(i));r=r.replace(this.recindexReg,`poster="${a}"`)}return r}),e=e.replace(/<a[^>]*>/g,r=>{let n=r.match(this.fileposReg);if(!n)return r;let o=n[1];return r.replace(this.fileposReg,`href="filepos:${o}"`)}),{html:e,css:[]}}resolveHref(e){let r=e.match(/filepos:(\d+)/);if(!r)return;let n=r[1],o=Number(n),i=this.chapters.find(a=>a.end>o);if(i)return{id:i.id,selector:`[id="filepos:${n}"]`}}destroy(){this.resourceCache.forEach(e=>{URL.revokeObjectURL(e)}),this.resourceCache.clear()}}});function Hi(t,e,r){let n="";for(let o=0;o<r;o+=1){let i=t[e+o]??0;n+=i>=32&&i<127?String.fromCharCode(i):""}return n}function Ta(t,e){return(t[e]??0)<<8|(t[e+1]??0)}function Dh(t,e){return(t[e]??0)*16777216+((t[e+1]??0)<<16|(t[e+2]??0)<<8|(t[e+3]??0))>>>0}function un(t,e){return(t[e+3]??0)*16777216+((t[e+2]??0)<<16|(t[e+1]??0)<<8|(t[e]??0))>>>0}function Mb(t){if(t.length<86)throw new Error("\u6587\u4EF6\u592A\u5C0F\uFF0C\u4E0D\u662F\u6709\u6548\u7684 MOBI/PalmDOC \u6587\u4EF6\u3002");let e=Hi(t,60,4).trim(),r=Hi(t,64,4).trim(),n=`${e}${r}`;if(n!=="BOOKMOBI"&&n!=="TEXtREAd")throw new Error("\u6587\u4EF6\u4E0D\u662F MOBI/PalmDOC \u683C\u5F0F\uFF08\u7F3A\u5C11 PDB \u6587\u4EF6\u5934\uFF09\u3002");let o=Ta(t,76);if(o<1)throw new Error("MOBI \u8BB0\u5F55\u8868\u4E3A\u7A7A\u3002");if(78+o*8+2>t.length)throw new Error("MOBI \u8BB0\u5F55\u8868\u5DF2\u635F\u574F\u3002");let i=[];for(let C=0;C<o;C+=1){let y=Dh(t,78+C*8);if(y<78||y>=t.length)throw new Error("MOBI \u8BB0\u5F55\u504F\u79FB\u65E0\u6548\uFF0C\u6587\u4EF6\u53EF\u80FD\u5DF2\u635F\u574F\u3002");if(i.length>0&&y<i[i.length-1])throw new Error("MOBI \u8BB0\u5F55\u987A\u5E8F\u65E0\u6548\u3002");i.push(y)}let a=i[0];if(a+16>t.length)throw new Error("MOBI \u6587\u4EF6\u5934\u5DF2\u635F\u574F\u3002");let s=Ta(t,a),l=Dh(t,a+4),d=Ta(t,a+8),p=Ta(t,a+10),g=Ta(t,a+12);if(g!==0)throw new Error("\u8BE5 MOBI \u6587\u4EF6\u53D7 DRM \u4FDD\u62A4\uFF0C\u65E0\u6CD5\u6253\u5F00\u3002");if(![Pb,1,Bh,Rl].includes(s))throw new Error(`\u4E0D\u652F\u6301\u7684 MOBI \u538B\u7F29\u65B9\u5F0F\uFF08${s}\uFF09\u3002`);let u=0,h=65001,_=!1;return n==="BOOKMOBI"&&Hi(t,a+16,4)==="MOBI"&&(u=un(t,a+36),h=un(t,a+28)||65001,_=u===8),{pdbType:n,numRecords:o,offsets:i,compression:s,textLength:l,recordCount:d,recordSize:p,encryption:g,version:u,encoding:h,isKf8:_}}function Ob(t,e,r){let n=e[r];if(n==null)return null;let o=e[r+1]??t.length;return o<=n?new Uint8Array(0):t.subarray(n,o)}function Lb(t){let e=t instanceof Uint8Array?t:new Uint8Array(t),r=[],n=0;for(;n<e.length;){let o=e[n];if(n+=1,o===0)r.push(0);else if(o<=8)for(let i=0;i<o&&n<e.length;i+=1)r.push(e[n]),n+=1;else if(o<=127)r.push(o);else if(o<=191){if(n>=e.length)break;let i=o<<8|e[n];n+=1;let a=i>>3&2047,s=(i&7)+3,l=r.length-a;for(let d=0;d<s;d+=1)r.push(l+d>=0?r[l+d]:0)}else r.push(32),r.push(o^128)}return Uint8Array.from(r)}function Db(t){let e=0;for(let o of t)e+=o.length;let r=new Uint8Array(e),n=0;for(let o of t)r.set(o,n),n+=o.length;return r}function Il(t,e){let r=[];e&&r.push(e),r.push("utf-8","gb18030","windows-1252");for(let n of r)try{return new TextDecoder(n,{fatal:!0}).decode(t)}catch{}return new TextDecoder("utf-8").decode(t)}function Fb(t,e){let r=e.recordCount>0?e.recordCount:e.numRecords-1,n=[];for(let i=1;i<=r;i+=1){let a=Ob(t,e.offsets,i);if(!a)break;if(e.compression===Rl)throw new Error("\u8BE5 MOBI \u4F7F\u7528 HUFF/CDIC \u538B\u7F29\uFF0C\u5185\u7F6E\u89E3\u6790\u5668\u65E0\u6CD5\u5904\u7406\u3002");n.push(e.compression===Bh?Lb(a):a)}if(n.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u6587\u672C\u5185\u5BB9\u3002");let o=Db(n);return e.textLength>0&&e.textLength<=o.length&&(o=o.subarray(0,e.textLength)),o}function zb(t,e){let r={title:"",author:"",language:""};if(e.pdbType!=="BOOKMOBI")return r;let n=e.offsets[0],o=$h[e.encoding]||"utf-8",i=un(t,n+84),a=un(t,n+88);i>0&&a>0&&n+i+a<=t.length&&(r.title=pt(Il(t.subarray(n+i,n+i+a),o)));let s=un(t,n+20),l=un(t,n+128),d=n+16+s;if(l&64&&Hi(t,d,4)==="EXTH"&&d+12<=t.length){let p=un(t,d+4),g=un(t,d+8),u=Math.min(t.length,d+p,d+12+g*8+4096),h=d+12;for(let _=0;_<g&&h+8<=u;_+=1){let C=un(t,h),y=un(t,h+4);if(y<8||h+y>t.length)break;let P=t.subarray(h+8,h+y),E=pt(Il(P,o));C===100&&E&&!r.author?r.author=E:C===503&&E?r.title=E:C===524&&E&&!r.language&&(r.language=E),h+=y}}return r}function Fh(t,e){if(!Number.isFinite(e)||e<0)return null;for(let r=0;r<t.length;r+=1){let n=Number(t[r]?.start),o=Number(t[r]?.end);if(Number.isFinite(n)&&Number.isFinite(o)&&e>=n&&e<o)return r}for(let r=0;r<t.length;r+=1){let n=Number(t[r]?.start);if(Number.isFinite(n)&&n>e)return r}return t.length>0?t.length-1:null}function zh(t){let e=String(t||"");return e.startsWith("#")?e.slice(1):""}function Bb(t,e,{fileName:r,tracker:n,warn:o}){let i={};try{i=t.getMetadata()||{}}catch{i={}}let a=[];try{a=t.getSpine()||[]}catch{a=[]}if(!Array.isArray(a)||a.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u9605\u8BFB\u987A\u5E8F\u3002");let s=new Map;a.forEach((k,R)=>{k?.id!=null&&s.set(String(k.id),R)});let l=0,d=()=>`b${l+=1}`,p=k=>{let R=String(k||"").trim();if(!R)return null;if(/^blob:/i.test(R))return n.add(R),{src:R};if(/^data:/i.test(R)){let I=Fn(R);return I?{src:n.create(I)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684 MOBI \u5185\u5D4C\u56FE\u7247\u3002"),null)}return/^(https?:)?\/\//i.test(R)?(o("\u5DF2\u8DF3\u8FC7 MOBI \u4E2D\u7684\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\u3002"),null):(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u6790\u7684 MOBI \u56FE\u7247\u3002"),null)},g=k=>R=>{let I=String(R||"").trim();if(!I)return null;if(/^(https?:|mailto:)/i.test(I))return{external:!0,href:I};if(I.startsWith("#"))return{chapter:k,anchor:I.slice(1)};if(I.startsWith("//")||/^(?!filepos:|kindle:)[a-z][a-z0-9+.-]*:/i.test(I))return null;try{let O=t.resolveHref(I);if(O?.id!=null){let L=s.get(String(O.id));if(L!=null){let F=zh(O.selector);return F?{chapter:L,anchor:F}:{chapter:L}}}}catch{}let b=/filepos:(\d+)/i.exec(I);if(b){let O=Fh(a,Number(b[1]));if(O!=null)return{chapter:O}}return null},u=[];for(let k=0;k<a.length;k+=1){let R="";try{R=t.loadChapter(a[k].id)?.html||""}catch{o(`\u7B2C ${k+1} \u7AE0\u52A0\u8F7D\u5931\u8D25\uFF0C\u5DF2\u8DF3\u8FC7\u8BE5\u7AE0\u5185\u5BB9\u3002`)}let I=[];if(R){let b=an(R),O=b?.body||b?.documentElement||null;O&&(I=io(O,{nextId:d,warn:o,chapterIndex:k,resolveImage:p,resolveLink:g(k)}))}u.push({id:`ch${k}`,title:"",blocks:I})}let h=[],_=(k,R)=>{if(Array.isArray(k))for(let I of k){if(!I)continue;let b=pt(I.label||I.title||"").slice(0,200),O=String(I.href||""),L=null,F="";if(O){try{let $=t.resolveHref(O);if($?.id!=null){let J=s.get(String($.id));J!=null&&(L=J,F=zh($.selector))}}catch{}if(L==null){let $=/filepos:(\d+)/i.exec(O);$&&(L=Fh(a,Number($[1])))}}b&&L!=null&&h.push({title:b,chapterIndex:L,depth:R,...F?{anchor:F}:{}}),_(I.children,R+1)}};try{_(t.getToc?.()||[],0)}catch{o("MOBI \u76EE\u5F55\u8BFB\u53D6\u5931\u8D25\uFF0C\u5DF2\u6309\u7AE0\u8282\u6807\u9898\u751F\u6210\u76EE\u5F55\u3002")}let C=va(u,h),y=pt(i.title||"")||lo(r),E=(Array.isArray(i.author)?i.author:[i.author]).map(k=>pt(k||"")).filter(Boolean).join(", "),v="";try{let k=t.getCoverImage();k&&(n.add(k),v=k)}catch{}let S={title:y,chapters:u,toc:C};E&&(S.author=E);let M=pt(i.language||"");return M&&(S.language=M),v&&(S.cover=v),S}function $b(t){return String(t||"").split(/<\s*(?:mbp:)?pagebreak[^>]*>/gi)}function Hb(t,e,{fileName:r,warn:n}){if(e.compression===Rl)throw new Error("\u8BE5 MOBI \u6587\u4EF6\u4F7F\u7528 HUFF/CDIC \u538B\u7F29\uFF0C\u5185\u7F6E\u89E3\u6790\u5668\u65E0\u6CD5\u5904\u7406\u3002");let o=zb(t,e),i=Fb(t,e),a=Ub(e.encoding),s=Il(i,a),l=o.title||lo(r),d=0,p=()=>`b${d+=1}`,g=/<\s*(?:html|body|p|div|h[1-6]|br)\b/i.test(s),u;if(g){let C=$b(s),y=new TextEncoder,P=[],E=0;for(let v of C){let S=y.encode(v).length;P.push({start:E,end:E+S}),E+=S}u=[],C.forEach((v,S)=>{if(!v.trim())return;let M=an(v),k=M?.body||M?.documentElement||null,R=u.length,I=k?io(k,{nextId:p,warn:n,chapterIndex:R,resolveImage:()=>(n("\u5185\u7F6E MOBI \u89E3\u6790\u5668\u65E0\u6CD5\u63D0\u53D6\u56FE\u7247\u8D44\u6E90\u3002"),null),resolveLink:b=>{let O=String(b||"").trim();if(!O)return null;if(/^(https?:|mailto:)/i.test(O))return{external:!0,href:O};if(O.startsWith("#"))return{chapter:R,anchor:O.slice(1)};let L=/filepos:(\d+)/i.exec(O);if(L){let F=Number(L[1]);for(let $=0;$<P.length;$+=1)if(F>=P[$].start&&F<P[$].end){let J=C.slice(0,$).filter(te=>te.trim()).length;return J<u.length?{chapter:J}:null}}return null}}):[];u.push({id:`ch${R}`,title:"",blocks:I})})}else u=yl(s,{nextId:p,title:l});if(!u||u.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let h=va(u,[]),_={title:l,chapters:u,toc:h};return o.author&&(_.author=o.author),o.language&&(_.language=o.language),_}function Ub(t){return $h[t]||""}async function Lo(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=ln(),i=Dn(),a=null;try{let s=await sn(t),l=Mb(s);if(l.pdbType==="BOOKMOBI"){let p=l.isKf8||/^(azw3?|kf8)$/i.test(String(r).split(".").pop()||"");try{a=p?await Nl(s):await Cl(s)}catch{try{a=p?await Cl(s):await Nl(s)}catch{a=null}a||o("MOBI \u89E3\u6790\u5E93\u65E0\u6CD5\u6253\u5F00\u8BE5\u6587\u4EF6\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\uFF08\u53EF\u80FD\u7F3A\u5C11\u56FE\u7247\u4E0E\u76EE\u5F55\u4FE1\u606F\uFF09\u3002")}if(a)try{let g=a.getSpine?.()||[];(!Array.isArray(g)||g.length===0)&&(a.destroy?.(),a=null,o("MOBI \u9605\u8BFB\u987A\u5E8F\u4E3A\u7A7A\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\u3002"))}catch{a.destroy?.(),a=null,o("MOBI \u89E3\u6790\u5E93\u8FD4\u56DE\u5F02\u5E38\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\u3002")}}return{...a?Bb(a,l,{fileName:r,tracker:i,warn:o}):Hb(s,l,{fileName:r,warn:o}),warnings:n,dispose:()=>{try{a?.destroy?.()}catch{}i.dispose()}}}catch(s){try{a?.destroy?.()}catch{}throw i.dispose(),Pr(s,"\u65E0\u6CD5\u89E3\u6790 MOBI \u6587\u4EF6")}}var Pb,Bh,Rl,$h,Hh=xr(()=>{Lh();no();ma();Pi();co();Pb=0,Bh=2,Rl=17480,$h={65001:"utf-8",65e3:"utf-7",1250:"windows-1250",1251:"windows-1251",1252:"windows-1252",932:"shift_jis",936:"gb18030",949:"euc-kr",950:"big5"}});var Ml={};Vl(Ml,{extensionOf:()=>Ii,parseBook:()=>Xb});function Gb(t){let e=t?`\u201C.${t}\u201D`:"\u8BE5\u6587\u4EF6";return new Error(`\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u683C\u5F0F\uFF1A${e}\u3002\u76EE\u524D\u652F\u6301 ${jb}\u3002`)}function Pl(){return new Error("PDF \u6587\u4EF6\u8BF7\u4F7F\u7528 PDF \u9605\u8BFB\u6A21\u5F0F\u6253\u5F00\uFF08PDF \u7531\u72EC\u7ACB\u7684\u9605\u8BFB\u5668\u5904\u7406\uFF09\u3002")}async function qb(t){let e;try{e=new Uint8Array(await t.slice(0,256).arrayBuffer())}catch{return null}if(e.length>=8){if(String.fromCharCode(...e.subarray(0,4))==="%PDF")return"pdf";if(e[0]===80&&e[1]===75)return"epub";let o="";for(let i=60;i<68;i+=1){let a=e[i]??0;o+=a>=32&&a<127?String.fromCharCode(a):" "}if(o==="BOOKMOBI"||o==="TEXtREAd")return"mobi"}let r=new TextDecoder("utf-8").decode(e.subarray(0,Math.min(e.length,200)));return/^\s*(?:<!doctype\s+html|<html|<head|<body)/i.test(r)?"html":Ri(r)?null:"txt"}async function Xb(t,e={}){let r=typeof e.fileName=="string"?e.fileName:"",n=typeof e.mime=="string"?e.mime:"",o=Ii(r);if(o==="pdf")throw Pl();let i=Xr[o]||null;if(!i){let a=n.toLowerCase().split(";")[0].trim();if(a==="application/pdf")throw Pl();i=Wb[a]||null}if(!i&&!o){let a=await qb(t);if(a==="pdf")throw Pl();i=a&&Xr[a]||null}if(!i)throw Gb(o);try{let a=await i.parse(t,{fileName:r,mime:n});return{...a,title:a.title||lo(r),format:i.format,warnings:Array.isArray(a.warnings)?a.warnings:[]}}catch(a){throw Pr(a,"\u65E0\u6CD5\u6253\u5F00\u6587\u6863")}}var Xr,Wb,jb,Ol=xr(()=>{Qu();Ju();oh();Hh();Pi();co();Xr={epub:{parse:Zu,format:"epub"},mobi:{parse:Lo,format:"mobi"},prc:{parse:Lo,format:"mobi"},azw:{parse:Lo,format:"mobi"},azw3:{parse:Lo,format:"mobi"},kf8:{parse:Lo,format:"mobi"},txt:{parse:wl,format:"txt"},text:{parse:wl,format:"txt"},md:{parse:_a,format:"md"},markdown:{parse:_a,format:"md"},mdown:{parse:_a,format:"md"},mkd:{parse:_a,format:"md"},html:{parse:ya,format:"html"},htm:{parse:ya,format:"html"},xhtml:{parse:ya,format:"html"},xht:{parse:ya,format:"html"}},Wb={"application/epub+zip":Xr.epub,"application/x-mobipocket-ebook":Xr.mobi,"application/x-mobi":Xr.mobi,"application/vnd.amazon.ebook":Xr.mobi,"text/plain":Xr.txt,"text/markdown":Xr.md,"text/x-markdown":Xr.md,"text/html":Xr.html,"application/xhtml+xml":Xr.html},jb="EPUB\u3001MOBI/KF8\u3001TXT\u3001Markdown \u548C HTML"});var i0={};Vl(i0,{PANEL_ID:()=>Fl,apply:()=>a0,inject:()=>n0,name:()=>r0});module.exports=pp(i0);var z1=require("react");var G=Lt(require("react"),1);var hr=Lt(require("react"),1);var l0=require("react"),j=require("react/jsx-runtime");function ot({size:t=18,children:e,viewBox:r="0 0 24 24",fill:n="none",strokeWidth:o=1.7,...i}){return(0,j.jsx)("svg",{width:t,height:t,viewBox:r,fill:n,stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",...i,children:e})}function Yl(t){return(0,j.jsxs)(ot,{...t,children:[(0,j.jsx)("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5Z"}),(0,j.jsx)("path",{d:"M4 18.5A2.5 2.5 0 0 1 6.5 16H20"}),(0,j.jsx)("path",{d:"M8 7h8M8 10.5h5"})]})}function Wo(t){return(0,j.jsxs)(ot,{...t,children:[(0,j.jsx)("path",{d:"M12 6.5C10.6 5.2 8.7 4.6 6.5 4.6H3v13h3.9c2 0 3.8.6 5.1 1.8 1.3-1.2 3.1-1.8 5.1-1.8H21v-13h-3.5c-2.2 0-4.1.6-5.5 1.9Z"}),(0,j.jsx)("path",{d:"M12 6.5v12.9"})]})}function Zl(t){return(0,j.jsxs)(ot,{...t,children:[(0,j.jsx)("path",{d:"M19 12H5"}),(0,j.jsx)("path",{d:"m11 18-6-6 6-6"})]})}function Ql(t){return(0,j.jsxs)(ot,{...t,children:[(0,j.jsx)("path",{d:"M12 16V4"}),(0,j.jsx)("path",{d:"m7 9 5-5 5 5"}),(0,j.jsx)("path",{d:"M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15"})]})}function jo(t){return(0,j.jsxs)(ot,{...t,children:[(0,j.jsx)("circle",{cx:"11",cy:"11",r:"7"}),(0,j.jsx)("path",{d:"m20 20-3.6-3.6"})]})}function Rn(t){return(0,j.jsxs)(ot,{...t,children:[(0,j.jsx)("path",{d:"m12 3 1.5 4.2L18 9l-4.5 1.8L12 15l-1.5-4.2L6 9l4.5-1.8L12 3Z"}),(0,j.jsx)("path",{d:"m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"}),(0,j.jsx)("path",{d:"m5 13 .7 1.8L7.5 15.5l-1.8.7L5 18l-.7-1.8L2.5 15.5l1.8-.7L5 13Z"})]})}function mo(t){return(0,j.jsxs)(ot,{...t,children:[(0,j.jsx)("path",{d:"M4 5h8M8 3v2c0 4.2-1.8 7.2-5 9"}),(0,j.jsx)("path",{d:"M5 10c1.8 2.2 4 3.6 6.8 4.4"}),(0,j.jsx)("path",{d:"m13 20 3.6-9L20 20"}),(0,j.jsx)("path",{d:"M14.6 16.8h4.8"})]})}function Er(t){return(0,j.jsx)(ot,{...t,children:(0,j.jsx)("path",{d:"m6 6 12 12M18 6 6 18"})})}function Oa(t){return(0,j.jsx)(ot,{...t,children:(0,j.jsx)("path",{d:"m15 18-6-6 6-6"})})}function La(t){return(0,j.jsx)(ot,{...t,children:(0,j.jsx)("path",{d:"m9 18 6-6-6-6"})})}function Jl(t){return(0,j.jsx)(ot,{...t,children:(0,j.jsx)("path",{d:"m6 9 6 6 6-6"})})}function Ji(t){return(0,j.jsxs)(ot,{...t,children:[(0,j.jsx)("path",{d:"M8 6h12M8 12h12M8 18h12"}),(0,j.jsx)("path",{d:"M4 6h.01M4 12h.01M4 18h.01"})]})}function Da(t){return(0,j.jsxs)(ot,{...t,children:[(0,j.jsx)("circle",{cx:"12",cy:"12",r:"3.2"}),(0,j.jsx)("path",{d:"M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"})]})}function yn(t){return(0,j.jsxs)(ot,{...t,children:[(0,j.jsx)("path",{d:"M4 7h16M9 7V5h6v2M7 7l.7 12.2A1.8 1.8 0 0 0 9.5 21h5a1.8 1.8 0 0 0 1.8-1.8L17 7"}),(0,j.jsx)("path",{d:"M10 11v6M14 11v6"})]})}function ec(t){return(0,j.jsxs)(ot,{...t,children:[(0,j.jsx)("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),(0,j.jsx)("path",{d:"M5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V5"})]})}function wn(t){return(0,j.jsx)(ot,{...t,children:(0,j.jsx)("path",{d:"M12 5v14M5 12h14"})})}function Fa(t){return(0,j.jsx)(ot,{...t,children:(0,j.jsx)("path",{d:"M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"})})}function za(t){return(0,j.jsx)(ot,{...t,children:(0,j.jsx)("path",{d:"M5 12h14"})})}function tc(t){return(0,j.jsxs)(ot,{...t,children:[(0,j.jsx)("path",{d:"M20 11a8 8 0 1 0-2.3 6.3"}),(0,j.jsx)("path",{d:"M20 4v7h-7"})]})}function rc(t){return(0,j.jsxs)(ot,{...t,children:[(0,j.jsx)("path",{d:"M14 4h6v6M20 4l-9 9"}),(0,j.jsx)("path",{d:"M19 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"})]})}function Ba({size:t=18}){return(0,j.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[(0,j.jsx)("path",{fill:"#4285F4",d:"M22.6 12.23c0-.78-.07-1.53-.2-2.25H12v4.26h5.94a5.08 5.08 0 0 1-2.2 3.33v2.77h3.56c2.08-1.92 3.3-4.74 3.3-8.11Z"}),(0,j.jsx)("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.77c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"}),(0,j.jsx)("path",{fill:"#FBBC05",d:"M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"}),(0,j.jsx)("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.2 1.64l3.15-3.15A10.97 10.97 0 0 0 12 1 11 11 0 0 0 2.18 7.06L5.84 9.9C6.71 7.3 9.14 5.38 12 5.38Z"})]})}function $a({size:t=18}){return(0,j.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[(0,j.jsx)("path",{fill:"currentColor",d:"M12 3 1.5 8.5 12 14l8.6-4.5v6.2h1.9V8.5L12 3Z",opacity:".9"}),(0,j.jsx)("path",{fill:"currentColor",d:"M6.2 11.4v4.1c0 2.2 2.6 4 5.8 4s5.8-1.8 5.8-4v-4.1L12 14.4l-5.8-3Z",opacity:".65"})]})}function nc(t){return(0,j.jsx)(ot,{...t,children:(0,j.jsx)("path",{d:"m5 12 4.5 4.5L19 7"})})}function oc(t){return(0,j.jsxs)(ot,{...t,children:[(0,j.jsx)("path",{d:"m15 4 1 2.2L18.2 7 16 8 15 10.2 14 8l-2.2-1L14 6.2 15 4Z"}),(0,j.jsx)("path",{d:"m5 19 8.5-8.5"}),(0,j.jsx)("path",{d:"m4 14 6 6"})]})}function ac(t){return(0,j.jsxs)(ot,{...t,children:[(0,j.jsx)("path",{d:"M20 13 13 20a2 2 0 0 1-2.8 0L3 12.8V3h9.8L20 10.2a2 2 0 0 1 0 2.8Z"}),(0,j.jsx)("circle",{cx:"7.5",cy:"7.5",r:"1.2"})]})}function Ha(t){return(0,j.jsxs)(ot,{...t,children:[(0,j.jsx)("path",{d:"m14 4 6 6-9.5 9.5H5v-5L14 4Z"}),(0,j.jsx)("path",{d:"M12 21h9"}),(0,j.jsx)("path",{d:"M14 6.5 17.5 10"})]})}function Go(t){return(0,j.jsxs)(ot,{...t,children:[(0,j.jsx)("path",{d:"M12 3a9 9 0 1 0 0 18h1.2a1.8 1.8 0 0 0 1.3-3l-.6-.7a1.6 1.6 0 0 1 1.2-2.7h1.6A4.3 4.3 0 0 0 21 10.3 7.7 7.7 0 0 0 12 3Z"}),(0,j.jsx)("circle",{cx:"7.5",cy:"11",r:"1"}),(0,j.jsx)("circle",{cx:"10",cy:"7.2",r:"1"}),(0,j.jsx)("circle",{cx:"15",cy:"7.2",r:"1"}),(0,j.jsx)("circle",{cx:"17",cy:"11",r:"1"})]})}function es(t){return(0,j.jsx)(ot,{...t,children:(0,j.jsx)("path",{d:"M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"})})}function ic(t){return(0,j.jsx)(ot,{...t,children:(0,j.jsx)("path",{d:"M3 8h5V3M21 8h-5V3M3 16h5v5M21 16h-5v5"})})}function Ua(t){return(0,j.jsxs)(ot,{...t,children:[(0,j.jsx)("path",{d:"M12 3v12"}),(0,j.jsx)("path",{d:"m7 10 5 5 5-5"}),(0,j.jsx)("path",{d:"M4 18v2h16v-2"})]})}function sc(t){return(0,j.jsxs)(ot,{...t,children:[(0,j.jsx)("path",{d:"M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"}),(0,j.jsx)("path",{d:"M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"})]})}function lc(t){return(0,j.jsxs)(ot,{...t,children:[(0,j.jsx)("path",{d:"M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"}),(0,j.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})}function cc(t){return(0,j.jsxs)(ot,{...t,children:[(0,j.jsx)("path",{d:"m3 3 18 18"}),(0,j.jsx)("path",{d:"M10.6 6.1A10.7 10.7 0 0 1 12 6c6 0 9.5 6 9.5 6a16.5 16.5 0 0 1-3.2 3.7"}),(0,j.jsx)("path",{d:"M6.2 6.7C3.9 8.4 2.5 12 2.5 12S6 18 12 18c1.3 0 2.5-.3 3.5-.8"}),(0,j.jsx)("path",{d:"M9.9 9.9a3 3 0 0 0 4.2 4.2"})]})}var ts=new WeakMap,dc=Promise.resolve();function _n(t){return Number.isSafeInteger(t?.bytes)&&t.bytes>0&&typeof t.sha256=="string"&&/^[a-f0-9]{64}$/.test(t.sha256)}function rs(t,e){return _n(t)&&_n(e)&&t.bytes===e.bytes&&t.sha256===e.sha256}function Wa(t){if(!t?.size||t.size>320*1024*1024)return Promise.reject(new Error("\u8BF7\u9009\u62E9 320 MiB \u4EE5\u5185\u7684 PDF\u3002"));let e=ts.get(t);if(e)return e;let r=dc.then(async()=>{if(!globalThis.crypto?.subtle)throw new Error("\u6B64\u73AF\u5883\u65E0\u6CD5\u6838\u9A8C SHA-256 \u6587\u4EF6\u6458\u8981\u3002");let n=await t.arrayBuffer(),o=new Uint8Array(await crypto.subtle.digest("SHA-256",n));return{bytes:t.size,sha256:[...o].map(i=>i.toString(16).padStart(2,"0")).join("")}});return dc=r.catch(()=>{}),ts.set(t,r),r.catch(()=>{ts.delete(t)}),r}var fp="dsh-reader",gp=3,Nt="books",Qt="annotations",tt="assets",zr="pdfTranslations",ja="reader-background",Ga="book-collection:",ns="pdf-evidence:",pc="dsh-reader:settings:v1",uc=320*1024*1024,hc=16*1024*1024,jt=Object.freeze({settingsVersion:2,autoTranslate:!1,hideTranslations:!1,fontSize:18,lineHeight:1.85,tocWidth:260,readingMode:"scroll",pageAnimation:"slide",bookAnimation:"slide",showToc:!0,aiOpen:!1,theme:"auto",fontFamily:"serif",fontWeight:400,contentWidth:760,brightness:1,backgroundPreset:"paper",customBackground:"#fbf7ee",textTone:"auto",backgroundImageKey:"",backgroundImageOpacity:.26,backgroundImageBlur:0,annotationPanelOpen:!1}),qo=Object.freeze([{id:"book",label:"\u4E66\u7C4D",hint:"EPUB / MOBI / TXT \u4E0E\u4E66\u7C4D\u578B PDF"},{id:"paper",label:"\u6587\u732E",hint:"\u8BBA\u6587\u3001\u62A5\u544A\u3001\u5B66\u672F PDF"},{id:"document",label:"\u6587\u6863",hint:"Markdown / HTML \u7B49\u77ED\u6587\u6863"}]),os=new Set(qo.map(t=>t.id)),mp=new Set(["paper","white","sepia","green","night","custom"]),bp=new Set(["serif","sans","kai","system"]),xp=new Set(["scroll","book"]),vp=new Set(["slide","fade","push","flip"]),yp=new Set(["slide","cover","flip"]),wp=new Set([400,500,600]),_p=new Set(["auto","dark","light"]);function Ct(){return new Promise((t,e)=>{if(typeof indexedDB>"u"){e(new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 IndexedDB\uFF0C\u65E0\u6CD5\u4FDD\u5B58\u4E66\u67B6\u3002"));return}let r=indexedDB.open(fp,gp);r.onupgradeneeded=()=>{let n=r.result;n.objectStoreNames.contains(Nt)||n.createObjectStore(Nt,{keyPath:"id"}).createIndex("lastOpenedAt","lastOpenedAt"),n.objectStoreNames.contains(Qt)||n.createObjectStore(Qt,{keyPath:"id"}).createIndex("bookId","bookId"),n.objectStoreNames.contains(tt)||n.createObjectStore(tt,{keyPath:"key"}),n.objectStoreNames.contains(zr)||n.createObjectStore(zr,{keyPath:"key"}).createIndex("bookId","bookId")},r.onsuccess=()=>t(r.result),r.onerror=()=>e(r.error??new Error("\u6253\u5F00\u4E66\u67B6\u6570\u636E\u5E93\u5931\u8D25\u3002")),r.onblocked=()=>e(new Error("\u4E66\u67B6\u6570\u636E\u5E93\u88AB\u53E6\u4E00\u4E2A\u9875\u9762\u5360\u7528\uFF0C\u8BF7\u5173\u95ED\u5176\u5B83 DSH \u9875\u9762\u540E\u91CD\u8BD5\u3002"))})}function Vt(t){return new Promise((e,r)=>{t.oncomplete=()=>e(),t.onerror=()=>r(t.error??new Error("\u4E66\u67B6\u5199\u5165\u5931\u8D25\u3002")),t.onabort=()=>r(t.error??new Error("\u4E66\u67B6\u5199\u5165\u5DF2\u53D6\u6D88\u3002"))})}function qa(t){return new Promise((e,r)=>{t.onsuccess=()=>e(t.result),t.onerror=()=>r(t.error)})}var as=()=>IDBKeyRange.bound(Ga,`${Ga}\uFFFF`),fc=t=>`${Ga}${t}`,is=()=>IDBKeyRange.bound(ns,`${ns}\uFFFF`),ss=t=>ns+t;function Pn(t){let e=/\.([^./\\]+)$/u.exec(String(t??""));return e?e[1].toLowerCase():""}function Qr(t){switch(t){case"pdf":return"PDF";case"epub":return"EPUB";case"mobi":return"MOBI";case"azw":return"AZW";case"azw3":return"AZW3";case"txt":return"TXT";case"md":return"Markdown";case"html":return"HTML";default:return String(t??"\u6587\u4EF6").toUpperCase()}}function Xo(t){return qo.find(e=>e.id===t)?.label??"\u672A\u5206\u7C7B"}function ls(t){return["pdf","epub","mobi","azw","azw3","txt","md","markdown","html","htm"].includes(Pn(t))}function kp(t){let e=String(t??"");return e.length===0?0:(e.match(/[\u3400-\u9fff\uf900-\ufaff]/gu)??[]).length/e.length}function cs(t={}){let e=String(t.format||Pn(t.title)||"").toLowerCase(),r=`${t.title||""} ${t.author||""}`;return e==="pdf"?/(?:^|\b)(book|novel|textbook|edition|volume|monograph|文集|全集|教材|小说|专著|丛书)(?:\b|$)/iu.test(r)||Number(t.size)>45*1024*1024?"book":"paper":["epub","mobi","azw","azw3","txt"].includes(e)?"book":"document"}async function Sp(t){if(!globalThis.crypto?.subtle){let r=2166136261,n=new Uint8Array(t);for(let o=0;o<n.length;o+=1)r^=n[o],r=Math.imul(r,16777619);return(r>>>0).toString(16).padStart(8,"0")}let e=await globalThis.crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(e)].map(r=>r.toString(16).padStart(2,"0")).join("")}async function Tp(t){let e=await t.slice(0,Math.min(t.size,1048576)).arrayBuffer();return`${(await Sp(e)).slice(0,20)}-${t.size}-${String(t.name).replace(/[^\w.-]+/gu,"_").slice(-48)}`}async function ds(){let t=await Ct();try{let n=t.transaction(Nt,"readonly").objectStore(Nt).index("lastOpenedAt").openCursor(null,"prev"),o=[];return await new Promise((i,a)=>{n.onsuccess=()=>{let s=n.result;if(!s){i();return}let l=s.value;o.push({id:l.id,title:l.title,author:l.author,format:l.format,size:l.size,addedAt:l.addedAt,lastOpenedAt:l.lastOpenedAt,progress:l.progress??null,language:l.language??"",cover:typeof l.cover=="string"?l.cover:"",category:os.has(l.category)?l.category:cs(l),categoryManual:!!l.categoryManual}),s.continue()},n.onerror=()=>a(n.error)}),o}finally{t.close()}}async function bo(t){let e=await Ct();try{let n=e.transaction(Nt,"readonly").objectStore(Nt).get(t);return await new Promise((o,i)=>{n.onsuccess=()=>o(n.result??null),n.onerror=()=>i(n.error)})}finally{e.close()}}async function Vo(t,{title:e,author:r,language:n,fingerprint:o}={}){if(!ls(t.name))throw new Error(`\u6682\u4E0D\u652F\u6301 .${Pn(t.name)||"\u672A\u77E5"} \u6587\u4EF6\u3002\u8BF7\u9009\u62E9 PDF / EPUB / MOBI / TXT / Markdown / HTML\u3002`);if(t.size>uc)throw new Error(`\u6587\u4EF6\u8D85\u8FC7 ${Math.round(uc/1024/1024)} MB\uFF0C\u6D4F\u89C8\u5668\u4E66\u67B6\u65E0\u6CD5\u5BB9\u7EB3\u3002`);if(o&&(!_n(o)||o.bytes!==t.size||Pn(t.name)!=="pdf"))throw new Error("PDF \u6587\u4EF6\u6458\u8981\u65E0\u6548\u3002");let i=o?`pdf-sha256-${o.sha256}-${o.bytes}`:await Tp(t),a=await bo(i),s=Date.now(),l=a?.id??i,d=Pn(t.name)==="markdown"?"md":Pn(t.name),p={title:String(e??a?.title??t.name.replace(/\.[^.]+$/u,"")).trim()||"\u672A\u547D\u540D\u6587\u6863",author:String(r??a?.author??"").trim(),language:String(n??a?.language??""),format:d,size:t.size},g={id:l,...p,category:a?.category&&os.has(a.category)?a.category:cs(p),categoryManual:!!a?.categoryManual,cover:typeof a?.cover=="string"?a.cover:"",addedAt:a?.addedAt??s,lastOpenedAt:s,progress:a?.progress??null,fileRevision:Va(),blob:t},u=await Ct();try{let h=u.transaction(Nt,"readwrite");return h.objectStore(Nt).put(g),await Vt(h),g}catch(h){throw h?.name==="QuotaExceededError"?new Error("\u6D4F\u89C8\u5668\u5B58\u50A8\u7A7A\u95F4\u5DF2\u6EE1\uFF0C\u65E0\u6CD5\u52A0\u5165\u4E66\u67B6\u3002\u8BF7\u5220\u9664\u4E00\u4E9B\u4E66\u540E\u91CD\u8BD5\u3002"):h}finally{u.close()}}async function xo(t,e){let r=await Ct();try{let n=r.transaction(Nt,"readwrite"),o=n.objectStore(Nt),i=o.get(t),a=null;return i.onsuccess=()=>{i.result&&(a={...i.result,...e,..."blob"in e?{fileRevision:Va()}:{}},o.put(a))},await Vt(n),a}finally{r.close()}}async function gc(t,e,{manual:r=!0}={}){if(!os.has(e))throw new Error("\u672A\u77E5\u7684\u4E66\u7C4D\u5206\u7C7B\u3002");return xo(t,{category:e,categoryManual:r})}async function mc(){let t=await ds(),e={book:0,paper:0,document:0},r=0;for(let n of t){if(n.categoryManual){e[n.category]=(e[n.category]||0)+1;continue}let o=cs(n);e[o]=(e[o]||0)+1,o!==n.category&&(await xo(n.id,{category:o,categoryManual:!1}),r+=1)}return{changed:r,counts:e}}async function us(t,e){return xo(t,{lastOpenedAt:Date.now(),...e!==void 0?{progress:e}:{}})}async function bc(){let t=await Ct();try{let e=t.transaction(tt,"readonly").objectStore(tt);return(await qa(e.getAll(as()))).sort((n,o)=>n.createdAt-o.createdAt)}finally{t.close()}}async function xc({id:t,name:e,add:r=[],remove:n=[]}){let o=e==null?void 0:String(e).trim();if((o!==void 0||!t)&&(!o||o.length>60))throw new Error("\u4E66\u5355\u540D\u79F0\u987B\u4E3A 1\u201360 \u4E2A\u5B57\u7B26\u3002");let i=await Ct();try{let a=i.transaction([tt,Nt],"readwrite"),s=a.objectStore(tt),l=a.objectStore(Nt),d=[...new Set(r)],p=Vt(a);p.catch(()=>{});let[g,u]=await Promise.all([qa(s.getAll(as())),Promise.all(d.map(E=>qa(l.getKey(E))))]),h=g.find(E=>E.id===t);if(t&&!h)throw new Error("\u8FD9\u4E2A\u4E66\u5355\u5DF2\u88AB\u5220\u9664\u3002");let _=o??h.name;if(g.some(E=>E.id!==t&&E.name.toLowerCase()===_.toLowerCase()))throw new Error("\u5DF2\u6709\u540C\u540D\u4E66\u5355\uFF0C\u8BF7\u6362\u4E00\u4E2A\u540D\u79F0\u3002");if(u.some(E=>E===void 0))throw new Error("\u90E8\u5206\u9009\u4E2D\u7684\u4E66\u5DF2\u4ECE\u4E66\u67B6\u5220\u9664\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u3002");let C=new Set(n),y=t??Va("collection"),P={id:y,key:fc(y),name:_,bookIds:[...new Set([...h?.bookIds??[],...u])].filter(E=>!C.has(E)),createdAt:h?.createdAt??Date.now()};return s.put(P),await p,P}finally{i.close()}}async function vc(t){let e=await Ct();try{let r=e.transaction(tt,"readwrite"),n=r.objectStore(tt);n.delete(fc(t)),yc(n,t),await Vt(r)}finally{e.close()}}function yc(t,e){let r=t.openCursor(is());r.onsuccess=()=>{let n=r.result;if(!n)return;let o=n.value,i=o.value.topicIds||[],a=e?i.filter(s=>s!==e):[];a.length!==i.length&&n.update({...o,value:{...o.value,topicIds:a}}),n.continue()}}async function wc(t,{deleteEvidence:e=!1}={}){let r=await Ct();try{let n=r.transaction([Nt,Qt,zr,tt],"readwrite");if(n.objectStore(Nt).delete(t),n.objectStore(tt).delete(`pdf-translation:${t}`),e){let l=n.objectStore(tt).openCursor(is());l.onsuccess=()=>{let d=l.result;d&&(d.value.value.bookId===t&&d.delete(),d.continue())}}let o=n.objectStore(tt).openCursor(as());o.onsuccess=()=>{let l=o.result;if(!l)return;let d=l.value;d.bookIds.includes(t)&&l.update({...d,bookIds:d.bookIds.filter(p=>p!==t)}),l.continue()};let i=n.objectStore(zr).index("bookId").openKeyCursor(IDBKeyRange.only(t));i.onsuccess=()=>{let l=i.result;l&&(n.objectStore(zr).delete(l.primaryKey),l.continue())};let s=n.objectStore(Qt).index("bookId").openKeyCursor(IDBKeyRange.only(t));s.onsuccess=()=>{let l=s.result;l&&(n.objectStore(Qt).delete(l.primaryKey),l.continue())},await Vt(n)}finally{r.close()}}async function Xa(){let t=await Ct();try{return(await qa(t.transaction(tt,"readonly").objectStore(tt).getAll(is()))).map(r=>r.value).sort((r,n)=>n.createdAt-r.createdAt||n.id.localeCompare(r.id))}finally{t.close()}}async function _c(t){let e=await Ct();try{let r=e.transaction([Nt,tt],"readwrite"),n=Vt(r),o=r.objectStore(tt),i=r.objectStore(Nt).get(t.bookId);i.onsuccess=()=>{if(!i.result?.blob||(i.result.fileRevision??null)!==t.fileRevision){r.abort();return}let a=ss(t.id),s=o.get(a);s.onsuccess=()=>{s.result||o.add({key:a,value:t})}},await n}finally{e.close()}}async function vo(t,e,r){let n=await Ct();try{let o=n.transaction([tt,Nt],"readwrite"),i=o.objectStore(tt),a=ss(t),s=i.get(a),l=null,d=()=>{let p=s.result?.value;!p||r&&p.sourceRevision!==r||(l={...p,...e,updatedAt:Date.now()},i.put({key:a,value:l}))};return s.onsuccess=()=>{if(!e.bookId){d();return}let p=o.objectStore(Nt).get(e.bookId);p.onsuccess=()=>{p.result?.blob&&(p.result.fileRevision??null)===e.fileRevision&&d()}},await Vt(o),l}finally{n.close()}}async function kc(t){let e=await Ct();try{let r=e.transaction(tt,"readwrite");r.objectStore(tt).delete(ss(t)),await Vt(r)}finally{e.close()}}async function Sc(){let t=await Ct();try{let e=t.transaction([Nt,Qt,zr,tt],"readwrite");e.objectStore(Nt).clear(),e.objectStore(Qt).clear(),e.objectStore(zr).clear();let r=e.objectStore(tt);yc(r);let n=r.openKeyCursor();n.onsuccess=()=>{let o=n.result;if(o){let i=String(o.key);(i.startsWith("pdf-translation:")||i.startsWith(Ga))&&r.delete(o.primaryKey),o.continue()}},await Vt(e)}finally{t.close()}}async function Tc(t){let e=await Ct();try{let r=e.transaction(zr,"readonly").objectStore(zr).get(t);return await new Promise((n,o)=>{r.onsuccess=()=>n(r.result||null),r.onerror=()=>o(r.error)})}finally{e.close()}}async function Ec(t){let e=await Ct();try{let r=e.transaction([Nt,zr],"readwrite"),n=r.objectStore(Nt).get(t.bookId);n.onsuccess=()=>{n.result&&r.objectStore(zr).put({...t,updatedAt:Date.now()})},await Vt(r)}finally{e.close()}}async function Ac(t){let e=await Ct();try{let r=e.transaction(tt,"readonly").objectStore(tt).get(`pdf-translation:${t}`);return await new Promise((n,o)=>{r.onsuccess=()=>n(r.result?.value||{}),r.onerror=()=>o(r.error)})}finally{e.close()}}async function Nc(t,e){let r=await Ct();try{let n=r.transaction([Nt,tt],"readwrite"),o=n.objectStore(Nt).get(t);o.onsuccess=()=>{o.result&&n.objectStore(tt).put({key:`pdf-translation:${t}`,value:e})},await Vt(n)}finally{r.close()}}function Va(t="a"){return globalThis.crypto?.randomUUID?`${t}-${crypto.randomUUID()}`:`${t}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}async function Cc(t){let e=await Ct();try{let o=e.transaction(Qt,"readonly").objectStore(Qt).index("bookId").getAll(t);return(await new Promise((a,s)=>{o.onsuccess=()=>a(o.result??[]),o.onerror=()=>s(o.error)})).sort((a,s)=>{let l=Number.isFinite(a.page)?a.page:Number.MAX_SAFE_INTEGER,d=Number.isFinite(s.page)?s.page:Number.MAX_SAFE_INTEGER;if(l!==d)return l-d;let p=Number.isFinite(a.chapterIndex)?a.chapterIndex:Number.MAX_SAFE_INTEGER,g=Number.isFinite(s.chapterIndex)?s.chapterIndex:Number.MAX_SAFE_INTEGER;return p!==g?p-g:(a.createdAt||0)-(s.createdAt||0)})}finally{e.close()}}async function Ic(t){let e=Date.now(),r={...t,id:t.id||Va(),createdAt:t.createdAt||e,updatedAt:e};if(!r.bookId)throw new Error("\u6279\u6CE8\u7F3A\u5C11\u4E66\u7C4D\u4FE1\u606F\u3002");if(!r.kind||!r.style)throw new Error("\u6279\u6CE8\u7F3A\u5C11\u7C7B\u578B\u3002");let n=await Ct();try{let o=n.transaction(Qt,"readwrite");return o.objectStore(Qt).put(r),await Vt(o),r}finally{n.close()}}async function Rc(t,e){let r=await Ct();try{let n=r.transaction(Qt,"readwrite"),o=n.objectStore(Qt),i=await new Promise((s,l)=>{let d=o.get(t);d.onsuccess=()=>s(d.result??null),d.onerror=()=>l(d.error)});if(!i)return await Vt(n),null;let a={...i,...e,id:i.id,updatedAt:Date.now()};return o.put(a),await Vt(n),a}finally{r.close()}}async function Pc(t){let e=await Ct();try{let r=e.transaction(Qt,"readwrite");r.objectStore(Qt).delete(t),await Vt(r)}finally{e.close()}}async function Mc(t){if(!t||!t.size)throw new Error("\u80CC\u666F\u56FE\u7247\u4E3A\u7A7A\u3002");if(t.size>hc)throw new Error(`\u80CC\u666F\u56FE\u7247\u8D85\u8FC7 ${Math.round(hc/1024/1024)} MB\uFF0C\u8BF7\u9009\u62E9\u66F4\u5C0F\u7684\u56FE\u7247\u3002`);let e=await Ct();try{let r=e.transaction(tt,"readwrite");return r.objectStore(tt).put({key:ja,blob:t,type:t.type||"image/*",size:t.size,updatedAt:Date.now()}),await Vt(r),ja}finally{e.close()}}async function Oc(){let t=await Ct();try{let r=t.transaction(tt,"readonly").objectStore(tt).get(ja);return(await new Promise((o,i)=>{r.onsuccess=()=>o(r.result??null),r.onerror=()=>i(r.error)}))?.blob??null}finally{t.close()}}async function Lc(){let t=await Ct();try{let e=t.transaction(tt,"readwrite");e.objectStore(tt).delete(ja),await Vt(e)}finally{t.close()}}function qn(t,e,r,n){let o=Number(t);return Number.isFinite(o)?Math.max(e,Math.min(r,o)):n}function Ep(t,e){return/^#[0-9a-f]{6}$/iu.test(String(t))?String(t):e}function Dc(){try{let t=localStorage.getItem(pc);if(!t)return{...jt};let e=JSON.parse(t),n=(Number(e.settingsVersion)||1)>=2&&typeof e.autoTranslate=="boolean"?e.autoTranslate:!1;return{...jt,...e,settingsVersion:2,autoTranslate:n,hideTranslations:!!e.hideTranslations,fontSize:qn(e.fontSize,13,34,jt.fontSize),lineHeight:qn(e.lineHeight,1.35,2.4,jt.lineHeight),tocWidth:qn(e.tocWidth,180,520,jt.tocWidth),readingMode:e.readingMode==="page"?"book":xp.has(e.readingMode)?e.readingMode:jt.readingMode,pageAnimation:vp.has(e.pageAnimation)?e.pageAnimation:jt.pageAnimation,bookAnimation:yp.has(e.bookAnimation)?e.bookAnimation:jt.bookAnimation,fontFamily:bp.has(e.fontFamily)?e.fontFamily:jt.fontFamily,fontWeight:wp.has(Number(e.fontWeight))?Number(e.fontWeight):jt.fontWeight,contentWidth:qn(e.contentWidth,520,1600,jt.contentWidth),brightness:qn(e.brightness,.6,1.2,jt.brightness),backgroundPreset:mp.has(e.backgroundPreset)?e.backgroundPreset:jt.backgroundPreset,customBackground:Ep(e.customBackground,jt.customBackground),textTone:_p.has(e.textTone)?e.textTone:jt.textTone,backgroundImageKey:typeof e.backgroundImageKey=="string"?e.backgroundImageKey:"",backgroundImageOpacity:qn(e.backgroundImageOpacity,0,.85,jt.backgroundImageOpacity),backgroundImageBlur:qn(e.backgroundImageBlur,0,12,jt.backgroundImageBlur),annotationPanelOpen:!!e.annotationPanelOpen}}catch{return{...jt}}}function Fc(t){try{localStorage.setItem(pc,JSON.stringify(t))}catch{}}function zc(t){let e=Number(t)||0;return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:e<1024*1024*1024?`${(e/1024/1024).toFixed(1)} MB`:`${(e/1024/1024/1024).toFixed(2)} GB`}function hs(t){if(!t)return"";let e=Date.now()-Number(t);return e<6e4?"\u521A\u521A":e<36e5?`${Math.floor(e/6e4)} \u5206\u949F\u524D`:e<864e5?`${Math.floor(e/36e5)} \u5C0F\u65F6\u524D`:e<7*864e5?`${Math.floor(e/864e5)} \u5929\u524D`:new Date(t).toLocaleDateString("zh-CN")}function Bc(t){let e=String(t??"").replace(/\s+/gu,"");if(e.length<40)return!1;let r=kp(e),n=(e.match(/[A-Za-zÀ-ÖØ-öø-ÿ\u0400-\u04ff]/gu)??[]).length/e.length;return r<.18&&n>.45}var ur=Lt(require("react"),1);var ve=require("react/jsx-runtime"),Br=t=>t.title||"\u672A\u547D\u540D\u6587\u6863";function ps(t,e){return`${t.title||""} ${t.author||""}`.toLowerCase().includes(e)}function Ap({book:t}){let[e,r]=ur.default.useState(!1);return t.cover&&!e?(0,ve.jsx)("img",{src:t.cover,alt:"",loading:"lazy",decoding:"async",onError:()=>r(!0)}):(0,ve.jsx)("span",{className:"dshr-collection__spine",children:Qr(t.format)})}function $c({folder:t,expanded:e,onToggle:r,onOpen:n,onRead:o}){let i=ur.default.useId(),a=ur.default.useId();return(0,ve.jsxs)("article",{className:"dshr-collection","data-collection-id":t.id,children:[(0,ve.jsxs)("button",{type:"button",className:"dshr-collection__open","aria-label":`\u6253\u5F00\u4E66\u5355 ${t.name}`,"aria-describedby":a,onClick:n,children:[(0,ve.jsxs)("span",{className:"dshr-collection__top",children:[(0,ve.jsx)("span",{className:"dshr-collection__icon",children:(0,ve.jsx)(Fa,{size:17})}),(0,ve.jsxs)("span",{className:"dshr-collection__heading",children:[(0,ve.jsx)("strong",{title:t.name,children:t.name}),(0,ve.jsxs)("small",{id:a,children:[t.system?"\u9ED8\u8BA4\u5206\u7C7B":"\u81EA\u5EFA\u4E66\u5355"," \xB7 ",t.books.length," \u672C"]})]}),(0,ve.jsx)(La,{size:16})]}),t.books.length?(0,ve.jsx)("span",{className:"dshr-collection__covers",children:t.books.slice(0,4).map(s=>(0,ve.jsxs)("span",{className:"dshr-collection__sample",children:[(0,ve.jsx)("span",{className:"dshr-collection__cover",children:(0,ve.jsx)(Ap,{book:s},s.cover)}),(0,ve.jsx)("span",{className:"dshr-collection__title",title:Br(s),children:Br(s)})]},s.id))}):(0,ve.jsx)("span",{className:"dshr-collection__empty",children:"\u6682\u672A\u6536\u5F55\u4E66\u7C4D"})]}),t.books.length>0&&(0,ve.jsxs)("button",{type:"button",className:"dshr-collection__peek",onClick:r,"aria-expanded":e,"aria-controls":i,children:[e?"\u6536\u8D77\u4E66\u540D":`\u9884\u89C8\u5168\u90E8 ${t.books.length} \u672C`," ",(0,ve.jsx)(Jl,{size:13})]}),t.books.length>0&&(0,ve.jsx)("ul",{className:"dshr-collection__preview",id:i,hidden:!e,"aria-label":`${t.name}\u4E66\u540D\u6E05\u5355`,children:e&&t.books.map(s=>(0,ve.jsx)("li",{children:(0,ve.jsxs)("button",{type:"button",onClick:()=>o(s),children:[(0,ve.jsx)("span",{children:Br(s)}),(0,ve.jsx)("small",{children:Qr(s.format)})]})},s.id))})]})}function Hc({action:t,books:e,collections:r,onClose:n,onCreate:o,onSave:i,onDelete:a}){let s=ur.default.useRef(null),l=ur.default.useRef(!1),[d,p]=ur.default.useState(!1),[g,u]=ur.default.useState(""),[h,_]=ur.default.useState(t.collection?.name??""),[C,y]=ur.default.useState(""),P=t.collection?.bookIds??[],[E,v]=ur.default.useState(()=>new Set(t.bookIds??P)),[S,M]=ur.default.useState(""),k=ur.default.useId(),R=t.kind==="add",I=t.kind==="delete",b=R?"\u52A0\u5165\u4E66\u5355":I?"\u5220\u9664\u4E66\u5355":t.collection?"\u7F16\u8F91\u4E66\u5355":"\u65B0\u5EFA\u4E66\u5355",O=C.trim().toLowerCase(),L=!R&&!I?e.filter($=>ps($,O)):[];ur.default.useLayoutEffect(()=>{let $=s.current;return $.showModal(),()=>$.close()},[]);async function F($){if($.preventDefault(),!l.current){l.current=!0,p(!0),u("");try{I?await a(t.collection.id):R?await i({id:S,add:t.bookIds}):await i({id:t.collection?.id,name:h,add:[...E].filter(J=>!P.includes(J)),remove:P.filter(J=>!E.has(J))}),n()}catch(J){u(J?.message||"\u4E66\u5355\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002")}finally{l.current=!1,p(!1)}}}return(0,ve.jsx)("dialog",{ref:s,className:"dshr-modal dshr-collection-dialog","aria-labelledby":k,onCancel:$=>{$.preventDefault(),l.current||n()},children:(0,ve.jsxs)("form",{onSubmit:F,children:[(0,ve.jsx)("h3",{id:k,children:b}),I?(0,ve.jsxs)("p",{children:["\u5220\u9664\u300C",t.collection.name,"\u300D\u540E\uFF0C\u91CC\u9762\u7684\u4E66\u4ECD\u53EF\u5728\u5168\u90E8\u6587\u6863\u4E2D\u6253\u5F00\uFF0C\u8FDB\u5EA6\u4E0E\u6279\u6CE8\u4F1A\u4FDD\u7559\u3002"]}):R?(0,ve.jsxs)("label",{className:"dshr-collection-dialog__field",children:[(0,ve.jsxs)("span",{children:["\u5C06 ",t.bookIds.length," \u672C\u4E66\u52A0\u5165"]}),(0,ve.jsxs)("select",{value:S,onChange:$=>M($.target.value),disabled:d,required:!0,children:[(0,ve.jsx)("option",{value:"",children:"\u9009\u62E9\u81EA\u5EFA\u4E66\u5355"}),r.map($=>(0,ve.jsxs)("option",{value:$.id,children:[$.name," \xB7 ",$.bookIds.length," \u672C"]},$.id))]})]}):(0,ve.jsxs)(ve.Fragment,{children:[(0,ve.jsxs)("label",{className:"dshr-collection-dialog__field",children:[(0,ve.jsx)("span",{children:"\u4E66\u5355\u540D\u79F0"}),(0,ve.jsx)("input",{value:h,onChange:$=>_($.target.value),placeholder:"\u4F8B\u5982\uFF1A\u8BBA\u6587\u5F85\u8BFB",maxLength:60,disabled:d,required:!0})]}),(0,ve.jsxs)("div",{className:"dshr-collection-dialog__listbar",children:[(0,ve.jsx)("strong",{children:"\u6536\u5F55\u4E66\u7C4D"}),(0,ve.jsxs)("span",{children:[E.size," \u672C\u5DF2\u9009"]})]}),e.length>0&&(0,ve.jsxs)("label",{className:"dshr-library__search dshr-collection-dialog__search",children:[(0,ve.jsx)(jo,{size:14}),(0,ve.jsx)("input",{type:"search",placeholder:"\u641C\u7D22\u4E66\u540D\u3001\u4F5C\u8005","aria-label":"\u641C\u7D22\u53EF\u52A0\u5165\u7684\u4E66\u7C4D",value:C,onChange:$=>y($.target.value)})]}),L.length?(0,ve.jsx)("div",{className:"dshr-collection-dialog__choices",children:L.map($=>(0,ve.jsxs)("label",{children:[(0,ve.jsx)("input",{type:"checkbox",checked:E.has($.id),disabled:d,onChange:J=>{let te=J.target.checked;v(ie=>{let ue=new Set(ie);return te?ue.add($.id):ue.delete($.id),ue})}}),(0,ve.jsxs)("span",{children:[Br($),(0,ve.jsx)("small",{children:[Qr($.format),$.author].filter(Boolean).join(" \xB7 ")})]})]},$.id))}):(0,ve.jsx)("p",{children:e.length?"\u6CA1\u6709\u5339\u914D\u7684\u4E66\u7C4D\u3002":"\u53EF\u4EE5\u5148\u521B\u5EFA\u7A7A\u4E66\u5355\uFF0C\u5BFC\u5165\u4E66\u7C4D\u540E\u518D\u52A0\u5165\u3002"})]}),g&&(0,ve.jsx)("p",{className:"dshr-collection-dialog__error",role:"alert",children:g}),(0,ve.jsxs)("div",{className:"dshr-modal__actions dshr-collection-dialog__actions",children:[R&&(0,ve.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:d,onClick:()=>o(t.bookIds),children:[(0,ve.jsx)(wn,{size:15})," \u65B0\u5EFA\u4E66\u5355"]}),(0,ve.jsx)("button",{type:"button",className:"dshr-btn",disabled:d,onClick:n,children:"\u53D6\u6D88"}),(0,ve.jsxs)("button",{type:"submit",className:`dshr-btn ${I?"dshr-btn--danger":"dshr-btn--primary"}`,disabled:d||(R?!S:!I&&!h.trim()),children:[I&&(0,ve.jsx)(yn,{size:14}),d?"\u6B63\u5728\u4FDD\u5B58\u2026":I?"\u5220\u9664\u4E66\u5355":R?"\u52A0\u5165":"\u4FDD\u5B58\u4E66\u5355"]})]})]})})}var H=require("react/jsx-runtime");function Uc(t){let e=t.progress;return e?typeof e.page=="number"&&typeof e.pages=="number"&&e.pages>0?Math.max(0,Math.min(100,e.page/e.pages*100)):typeof e.percent=="number"?Math.max(0,Math.min(100,e.percent)):typeof e.chapter=="number"&&typeof e.chapters=="number"&&e.chapters>0?Math.max(0,Math.min(100,(e.chapter+1)/e.chapters*100)):0:0}var Np={book:"paper",paper:"document",document:"book"};function Cp({book:t,onOpen:e,onDelete:r,onCycleCategory:n,onAdd:o,onRemove:i,selection:a,onToggle:s}){let l=Uc(t),d=[Qr(t.format),t.author||"",zc(t.size)].filter(Boolean).join(" \xB7 ");return(0,H.jsxs)("article",{className:`dshr-book-card${a?" is-selecting":""}${a?.has(t.id)?" is-selected":""}`,children:[(0,H.jsxs)("button",{type:"button",className:"dshr-book","aria-pressed":a?a.has(t.id):void 0,"aria-label":a?`\u9009\u62E9 ${Br(t)}`:`\u6253\u5F00 ${Br(t)}`,onClick:()=>a?s(t.id):e(t),children:[(0,H.jsx)("span",{className:"dshr-book__media",children:t.cover?(0,H.jsx)("img",{className:"dshr-book__cover",src:t.cover,alt:"",loading:"lazy",decoding:"async"}):(0,H.jsx)("span",{className:"dshr-book__spine",children:Qr(t.format)})}),(0,H.jsxs)("span",{className:"dshr-book__body",children:[(0,H.jsx)("span",{className:"dshr-book__title",children:Br(t)}),(0,H.jsx)("span",{className:"dshr-book__meta",children:d}),(0,H.jsxs)("span",{className:"dshr-book__foot",children:[(0,H.jsx)("span",{children:t.lastOpenedAt?`\u9605\u8BFB\u4E8E ${hs(t.lastOpenedAt)}`:hs(t.addedAt)}),(0,H.jsx)("span",{children:l>0?`${Math.round(l)}%`:"\u672A\u5F00\u59CB"})]}),(0,H.jsx)("span",{className:"dshr-book__progress","aria-hidden":"true",children:(0,H.jsx)("i",{style:{"--p":`${l}%`}})})]}),a&&(0,H.jsx)("span",{className:"dshr-book__selected","aria-hidden":"true",children:a.has(t.id)&&(0,H.jsx)(nc,{size:14})})]}),!a&&(0,H.jsxs)("div",{className:"dshr-book__badges",children:[(0,H.jsxs)("button",{type:"button",className:`dshr-book__category is-${t.category||"document"}`,title:`\u9ED8\u8BA4\u5206\u7C7B\uFF1A${Xo(t.category)}${t.categoryManual?"\uFF08\u624B\u52A8\uFF09":"\uFF08\u81EA\u52A8\uFF09"} \xB7 \u70B9\u51FB\u5207\u6362`,onClick:()=>n(t),children:[(0,H.jsx)(ac,{size:11})," ",Xo(t.category)]}),(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--ghost dshr-book__add","aria-label":`\u5C06 ${Br(t)} \u52A0\u5165\u4E66\u5355`,onClick:()=>o([t.id]),children:[(0,H.jsx)(wn,{size:13})," \u52A0\u5165\u4E66\u5355"]}),i?(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost","aria-label":`\u4ECE\u6B64\u4E66\u5355\u79FB\u51FA ${Br(t)}`,title:"\u4ECE\u6B64\u4E66\u5355\u79FB\u51FA",onClick:()=>i([t.id]),children:(0,H.jsx)(za,{size:14})}):(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost dshr-book__delete","aria-label":`\u4ECE\u4E66\u67B6\u5220\u9664 ${Br(t)}`,title:"\u4ECE\u4E66\u67B6\u5220\u9664",onClick:()=>r(t),children:(0,H.jsx)(yn,{size:14})})]})]})}function Wc({books:t,collections:e,onCollectionsChange:r,loading:n,resumeBook:o,onResume:i,importing:a,organizing:s,categoryFilter:l,onCategoryFilter:d,onAutoOrganize:p,onImport:g,onOpen:u,onDelete:h,onCycleCategory:_,onSettings:C,onOnlineImport:y,onEvidence:P}){let E=hr.default.useRef(null),[v,S]=hr.default.useState(!1),[M,k]=hr.default.useState(""),[R,I]=hr.default.useState(null),[b,O]=hr.default.useState(null),[L,F]=hr.default.useState(null),[$,J]=hr.default.useState(""),te=hr.default.useRef(0),ie=hr.default.useRef(null),ue=hr.default.useRef(null),U=hr.default.useRef(!1),se=hr.default.useMemo(()=>{let c=new Map(t.map(V=>[V.id,V])),w=new Map(qo.map(V=>[V.id,[]])),x=[...t].sort((V,de)=>V.addedAt-de.addedAt);for(let V of x)w.get(V.category)?.push(V);return[...e.map(V=>({...V,books:V.bookIds.map(de=>c.get(de)).filter(Boolean)})),...qo.map(V=>({id:V.id,name:V.label,system:!0,books:w.get(V.id)}))]},[t,e]),Y=se.find(c=>c.id===l),T=Y?.books??t,q=M.trim().toLowerCase(),re=q?T.filter(c=>ps(c,q)):T,me=b?T.filter(c=>b.has(c.id)).map(c=>c.id):[];hr.default.useLayoutEffect(()=>{U.current&&(U.current=!1,ue.current?.focus({preventScroll:!0}))},[l]);function ne(c){U.current=!0,d(c),k(""),O(null),I(null),J(""),ie.current?.scrollTo({top:0})}let Te=(c=[])=>F({kind:"edit",bookIds:c}),Xe=c=>e.length?F({kind:"add",bookIds:c}):Te(c);async function Ee(c){let w=await xc(c);return r(x=>x.some(V=>V.id===w.id)?x.map(V=>V.id===w.id?w:V):[...x,w]),w}async function $e(c){try{await Ee({id:Y.id,remove:c}),O(null),J(`\u5DF2\u4ECE\u300C${Y.name}\u300D\u79FB\u51FA ${c.length} \u672C\u3002`)}catch(w){J(w?.message||"\u79FB\u51FA\u4E66\u5355\u5931\u8D25\u3002")}}async function _e(c){await vc(c),r(w=>w.filter(x=>x.id!==c)),l===c&&ne("all"),J("\u4E66\u5355\u5DF2\u5220\u9664\u3002")}let Tt=()=>E.current?.click(),f=c=>{c.preventDefault(),te.current=0,S(!1);let w=[...c.dataTransfer?.files??[]].filter(x=>ls(x.name));if(w.length===0){g([],{rejected:!0});return}g(w)};return(0,H.jsxs)("div",{className:"dshr-library",ref:ie,children:[(0,H.jsxs)("div",{className:"dshr-library__inner",children:[(0,H.jsxs)("header",{className:"dshr-hero",children:[(0,H.jsxs)("div",{children:[(0,H.jsxs)("div",{className:"dshr-hero__eyebrow",children:[(0,H.jsx)(Wo,{size:15})," DSH READER \xB7 LIBRARY"]}),(0,H.jsx)("h1",{children:"\u6211\u7684\u4E66\u67B6"}),(0,H.jsx)("p",{children:"\u7528\u4E66\u5355\u6574\u7406\u4E66\u7C4D\u3001\u8BBA\u6587\u548C\u9605\u8BFB\u8D44\u6599\u3002"})]}),(0,H.jsxs)("div",{className:"dshr-hero__actions",children:[(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:Tt,disabled:a,children:[a?(0,H.jsx)("span",{className:"dshr-spinner"}):(0,H.jsx)(wn,{size:15}),a?"\u6B63\u5728\u52A0\u5165\u4E66\u67B6\u2026":"\u5BFC\u5165\u6587\u6863"]}),(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:y,title:"\u4ECE\u53E4\u767B\u5821\u3001Standard Ebooks\u3001arXiv \u7B49\u516C\u5F00\u6765\u6E90\u4E0B\u8F7D\u5E76\u6253\u5F00",children:[(0,H.jsx)(Ua,{size:15})," \u516C\u5F00\u4E66\u5E93\u5BFC\u5165"]}),(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:p,disabled:s||t.length===0,title:"\u6309\u6587\u4EF6\u7C7B\u578B\u4E0E\u5143\u6570\u636E\uFF0C\u628A\u4E66\u67B6\u6574\u7406\u6210\u4E66\u7C4D / \u6587\u732E / \u6587\u6863",children:[s?(0,H.jsx)("span",{className:"dshr-spinner"}):(0,H.jsx)(oc,{size:15}),s?"\u6574\u7406\u4E2D\u2026":"\u4E00\u952E\u6574\u7406"]}),(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:C,title:"\u9605\u8BFB\u4E0E\u4E66\u67B6\u8BBE\u7F6E",children:[(0,H.jsx)(Da,{size:15})," \u8BBE\u7F6E"]}),(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:P,children:"\u8BC1\u636E\u5E93"})]})]}),o?(0,H.jsxs)("button",{type:"button",className:"dshr-resume",onClick:()=>i(o),children:[(0,H.jsx)("span",{className:"dshr-resume__mark",children:(0,H.jsx)(Wo,{size:19})}),(0,H.jsxs)("span",{className:"dshr-resume__body",children:[(0,H.jsx)("span",{className:"dshr-resume__eyebrow",children:"\u7EE7\u7EED\u4E0A\u6B21\u9605\u8BFB"}),(0,H.jsx)("strong",{children:o.title||"\u4E0A\u6B21\u6253\u5F00\u7684\u6587\u6863"}),(0,H.jsxs)("span",{className:"dshr-resume__meta",children:[Qr(o.format),o.progress?.page?` \xB7 \u7B2C ${o.progress.page}${o.progress.pages?` / ${o.progress.pages}`:""} \u9875`:"",` \xB7 ${Math.round(Uc(o))}%`]})]}),(0,H.jsx)("span",{className:"dshr-resume__arrow",children:"\u2192"})]}):null,!Y&&!n&&(0,H.jsxs)("section",{className:"dshr-collections","aria-label":"\u4E66\u5355\u6587\u4EF6\u5939",children:[(0,H.jsxs)("div",{className:"dshr-collections__bar",children:[(0,H.jsx)("h2",{ref:ue,tabIndex:-1,children:"\u4E66\u5355\u6587\u4EF6\u5939"}),(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>Te(),children:[(0,H.jsx)(wn,{size:15})," \u65B0\u5EFA\u4E66\u5355"]})]}),(0,H.jsx)("div",{className:"dshr-collections__grid",children:se.map(c=>(0,H.jsx)($c,{folder:c,expanded:R===c.id,onToggle:()=>I(w=>w===c.id?null:c.id),onOpen:()=>ne(c.id),onRead:u},c.id))})]}),!Y&&(0,H.jsxs)("section",{className:`dshr-drop${t.length?" is-compact":""}${v?" is-over":""}`,onDragEnter:c=>{c.preventDefault(),te.current+=1,S(!0)},onDragOver:c=>c.preventDefault(),onDragLeave:()=>{te.current=Math.max(0,te.current-1),te.current===0&&S(!1)},onDrop:f,"aria-label":"\u62D6\u653E\u6587\u6863\u4EE5\u5BFC\u5165",children:[(0,H.jsx)("div",{className:"dshr-drop__mark",children:(0,H.jsx)(Ql,{size:24})}),(0,H.jsxs)("div",{className:"dshr-drop__body",children:[(0,H.jsx)("div",{className:"dshr-drop__title",children:"\u62D6\u4E00\u4EFD\u6587\u732E\u6216\u4E66\u5230\u8FD9\u91CC\uFF0C\u6216\u70B9\u51FB\u5BFC\u5165"}),(0,H.jsx)("div",{className:"dshr-drop__hint",children:"\u6587\u4EF6\u53EA\u4FDD\u5B58\u5728\u672C\u673A\u6D4F\u89C8\u5668\u4E66\u67B6\u4E2D\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\uFF1B\u7FFB\u8BD1\u4EC5\u53D1\u9001\u5F53\u524D\u9009\u4E2D\u7684\u6BB5\u843D\u3002"}),!t.length&&(0,H.jsx)("div",{className:"dshr-drop__formats",children:["PDF","EPUB","MOBI","AZW3","TXT","Markdown","HTML"].map(c=>(0,H.jsx)("span",{className:"dshr-chip",children:c},c))})]}),(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:Tt,disabled:a,children:"\u9009\u62E9\u6587\u4EF6"})]}),Y&&(0,H.jsxs)("div",{className:"dshr-collection-context",children:[(0,H.jsxs)("nav",{"aria-label":"\u4E66\u67B6\u4F4D\u7F6E",children:[(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--ghost",onClick:()=>ne("all"),children:[(0,H.jsx)(Oa,{size:15})," \u8FD4\u56DE\u4E66\u67B6"]}),(0,H.jsxs)("span",{ref:ue,tabIndex:-1,"aria-current":"page",children:[(0,H.jsx)(Fa,{size:16})," ",Y.name]})]}),!Y.system&&(0,H.jsxs)("div",{className:"dshr-collection-context__actions",children:[(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>F({kind:"edit",collection:Y}),children:"\u7F16\u8F91\u4E66\u5355"}),(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--ghost",onClick:()=>F({kind:"delete",collection:Y}),children:[(0,H.jsx)(yn,{size:15})," \u5220\u9664\u4E66\u5355"]})]})]}),(0,H.jsxs)("div",{className:"dshr-library__bar",children:[(0,H.jsx)("h2",{children:Y?"\u4E66\u5355\u5185\u5BB9":"\u5168\u90E8\u6587\u6863"}),(0,H.jsxs)("div",{className:"dshr-library__search",children:[(0,H.jsx)(jo,{size:14}),(0,H.jsx)("input",{type:"search",value:M,onChange:c=>k(c.target.value),placeholder:Y?"\u641C\u7D22\u6B64\u4E66\u5355":"\u641C\u7D22\u4E66\u540D\u3001\u4F5C\u8005","aria-label":Y?"\u641C\u7D22\u6B64\u4E66\u5355":"\u641C\u7D22\u4E66\u67B6"})]}),(0,H.jsxs)("span",{children:[re.length," / ",T.length," \u672C"]}),T.length>0&&(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline","aria-pressed":!!b,onClick:()=>O(c=>c?null:new Set),children:b?"\u9000\u51FA\u591A\u9009":"\u591A\u9009"})]}),(0,H.jsx)("div",{className:"dshr-library__notice",role:"status",children:$}),b&&(0,H.jsxs)("div",{className:"dshr-collection-selection","aria-label":"\u6279\u91CF\u4E66\u5355\u64CD\u4F5C",children:[(0,H.jsxs)("span",{children:["\u5DF2\u9009 ",me.length," \u672C"]}),(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",disabled:!re.length,onClick:()=>O(c=>new Set([...c,...re.map(w=>w.id)])),children:"\u5168\u9009\u5F53\u524D\u7ED3\u679C"}),(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:!me.length,onClick:()=>Xe(me),children:"\u52A0\u5165\u4E66\u5355"}),Y&&!Y.system&&(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",disabled:!me.length,onClick:()=>{$e(me)},children:"\u4ECE\u6B64\u4E66\u5355\u79FB\u51FA"})]}),n?(0,H.jsxs)("div",{className:"dshr-loading",style:{minHeight:180},children:[(0,H.jsx)("div",{className:"dshr-loading__ring"}),(0,H.jsx)("span",{children:"\u6B63\u5728\u6253\u5F00\u4E66\u67B6\u2026"})]}):re.length===0?(0,H.jsxs)("div",{className:"dshr-empty-books",children:[q?`\u6CA1\u6709\u5339\u914D\u300C${M.trim()}\u300D\u7684\u6587\u6863\u3002`:Y?`\u300C${Y.name}\u300D\u8FD8\u6CA1\u6709\u4E66\u3002`:"\u5BFC\u5165\u6587\u6863\u540E\uFF0C\u5C31\u53EF\u4EE5\u628A\u5B83\u4EEC\u52A0\u5165\u4E66\u5355\u3002",Y&&!Y.system&&!q&&(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>F({kind:"edit",collection:Y}),children:[(0,H.jsx)(wn,{size:15})," \u6DFB\u52A0\u4E66\u7C4D"]})]}):(0,H.jsx)("div",{className:"dshr-books",children:re.map(c=>(0,H.jsx)(Cp,{book:c,onOpen:u,onDelete:h,onCycleCategory:w=>_(w,Np[w.category||"document"]),onAdd:Xe,onRemove:Y&&!Y.system?$e:void 0,selection:b,onToggle:w=>O(x=>{let V=new Set(x);return V.has(w)?V.delete(w):V.add(w),V})},c.id))}),(0,H.jsxs)("footer",{className:"dshr-library__foot",children:[(0,H.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,H.jsx)(mo,{size:14})," \u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1"]}),(0,H.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,H.jsx)(Rn,{size:14})," \u9009\u4E2D\u95EE AI"]}),(0,H.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,H.jsx)(jo,{size:14})," Google / \u5B66\u672F\u641C\u7D22"]}),(0,H.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,H.jsx)(Yl,{size:14})," \u672C\u5730\u4E66\u67B6 \xB7 \u8FDB\u5EA6\u4E0E\u6279\u6CE8\u81EA\u52A8\u4FDD\u5B58"]})]})]}),L&&(0,H.jsx)(Hc,{action:L,books:t,collections:e,onClose:()=>F(null),onCreate:Te,onDelete:_e,onSave:async c=>{let w=await Ee(c);O(null),J(L.kind==="add"?`\u5DF2\u52A0\u5165\u300C${w.name}\u300D\u3002`:`\u5DF2\u4FDD\u5B58\u300C${w.name}\u300D\u3002`)}},`${L.kind}:${L.collection?.id||""}`),(0,H.jsx)("input",{ref:E,type:"file",multiple:!0,accept:".pdf,.epub,.mobi,.azw,.azw3,.txt,.md,.markdown,.html,.htm,application/pdf,application/epub+zip,text/plain,text/markdown,text/html",className:"dshr-sr-only",tabIndex:-1,onChange:c=>{let w=[...c.target.files??[]];c.target.value="",w.length>0&&g(w)}})]})}var St=Lt(require("react"),1);var Ip=Object.freeze({"content-type":"application/json","x-dsh-reader":"1"}),Jr=class extends Error{constructor(e,r="REQUEST_FAILED",n=0){super(e),this.name="ReaderApiError",this.code=r,this.status=n}};async function Gc(t){let e=null;try{e=await t.json()}catch{}return new Jr(e?.error?.message||e?.message||`\u7FFB\u8BD1\u670D\u52A1\u4E0D\u53EF\u7528\uFF08HTTP ${t.status}\uFF09\u3002`,e?.error?.code||e?.code||"REQUEST_FAILED",t.status)}async function fs(t,e,{signal:r}={}){let n;try{n=await fetch(t,{method:"POST",headers:Ip,body:JSON.stringify(e),signal:r,credentials:"same-origin"})}catch(o){throw o?.name==="AbortError"?o:new Jr("\u65E0\u6CD5\u8FDE\u63A5\u5230 DSH \u4E3B\u8FDB\u7A0B\uFF0C\u8BF7\u786E\u8BA4 DSH \u6B63\u5728\u8FD0\u884C\u3002","NETWORK",0)}if(!n.ok)throw await Gc(n);return n}function Xn(t){return t?.name==="AbortError"}async function yo(t,e={}){let r=t.map(a=>({id:String(a.id),text:String(a.text??"")})).filter(a=>a.text.trim()!=="");if(r.length===0)return{};let n=await fs("/dsh-reader/ai/translate",{segments:r,context:String(e.context??"").slice(0,1200),title:String(e.title??"").slice(0,300),glossary:String(e.glossary??"").slice(0,4e3),...e.expectedModel?{expectedModel:e.expectedModel}:{}},{signal:e.signal}),o=await n.json().catch(()=>null);if(!o||typeof o!="object"||!Array.isArray(o.translations))throw new Jr("\u7FFB\u8BD1\u670D\u52A1\u8FD4\u56DE\u4E86\u65E0\u6CD5\u8BC6\u522B\u7684\u7ED3\u679C\u3002","BAD_RESPONSE",n.status);let i={};for(let a of o.translations)a&&typeof a.id=="string"&&typeof a.zh=="string"&&a.zh.trim()!==""&&(i[a.id]=a.zh);if(Object.keys(i).length===0)throw new Jr("\u7FFB\u8BD1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u53EF\u7528\u8BD1\u6587\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","EMPTY_TRANSLATION",n.status);return e.includeMetadata?{translations:i,model:o.model,promptVersion:o.promptVersion}:i}async function qc({signal:t}={}){let e=await fetch("/dsh-reader/ai/status",{signal:t,credentials:"same-origin",headers:{"x-dsh-reader":"1"},cache:"no-store"});if(!e.ok)throw await Gc(e);return e.json()}function jc(t){let e=t.split(/\r?\n/u).filter(r=>r.startsWith("data:")).map(r=>r.slice(5).trimStart()).join(`
`);if(e==="")return null;try{return JSON.parse(e)}catch{return{type:"delta",text:e}}}async function gs(t,{onDelta:e,onMeta:r}={}){let n=await fs("/dsh-reader/ai/chat",t,{signal:t.signal});if(!n.body)throw new Jr("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u6D41\u5F0F\u54CD\u5E94\u3002","NO_STREAM",n.status);let o=n.body.getReader(),i=new TextDecoder,a="",s=!1,l=null;try{for(;;){let{value:d,done:p}=await o.read();if(p)break;a+=i.decode(d,{stream:!0});let g=a.search(/\r?\n\r?\n/u);for(;g!==-1;){let u=a.slice(0,g),h=a.slice(g).match(/^\r?\n\r?\n/u)?.[0]??`

`;a=a.slice(g+h.length);let _=jc(u);_&&(_.type==="delta"&&typeof _.text=="string"?e?.(_.text):_.type==="error"?l=new Jr(_.message||"AI \u56DE\u7B54\u5931\u8D25\u3002",_.code||"AI_FAILED"):_.type==="done"?s=!0:r?.(_)),g=a.search(/\r?\n\r?\n/u)}}if(a.trim()!==""){let d=jc(a);d?.type==="delta"&&typeof d.text=="string"&&e?.(d.text),d?.type==="error"&&(l=new Jr(d.message||"AI \u56DE\u7B54\u5931\u8D25\u3002",d.code||"AI_FAILED")),d?.type==="done"&&(s=!0)}}finally{o.releaseLock?.()}if(l)throw l}async function Xc(t,{signal:e}={}){let r=await fs("/dsh-reader/import/fetch",{url:String(t||"")},{signal:e}),n=await r.blob();if(!n.size)throw new Jr("\u6765\u6E90\u8FD4\u56DE\u4E86\u7A7A\u6587\u4EF6\u3002","EMPTY",0);let o="book",i=r.headers.get("x-dsh-reader-filename");if(i)try{o=decodeURIComponent(i)}catch{o=i}return new File([n],o,{type:n.type||"application/octet-stream"})}var kn=Lt(require("react"),1);var Zc=Object.freeze([{id:"yellow",label:"\u9EC4",value:"#f5d76e"},{id:"green",label:"\u7EFF",value:"#8fd18b"},{id:"pink",label:"\u7C89",value:"#f3a6c0"},{id:"blue",label:"\u84DD",value:"#94c9f0"}]),Ko=Object.freeze([{id:"thin",label:"\u7EC6",value:4},{id:"medium",label:"\u4E2D",value:9},{id:"wide",label:"\u5BBD",value:16}]),Qc=Object.freeze([{id:"ink",label:"\u58A8",value:"#3f3a33"},{id:"red",label:"\u6731",value:"#c2543f"},{id:"amber",label:"\u8D6D",value:"#a9772b"},{id:"blue",label:"\u84DD",value:"#3f6f97"}]),wo=Object.freeze({highlight:"\u8367\u5149\u7B14",underline:"\u4E0B\u5212\u7EBF",note:"\u4FBF\u7B7E"}),_o=Object.freeze([{id:"highlight",label:wo.highlight},{id:"underline",label:wo.underline},{id:"note",label:wo.note}]);function ms(t){return wo[t]||"\u6807\u6CE8"}var Qa="data-anno-block",Jc=".dshr-block__body";function bs(t){return t?t.ownerDocument?t.ownerDocument:t.nodeType===9?t:typeof globalThis<"u"&&globalThis.document?globalThis.document:null:null}function $r(t,e=0){let r=typeof t=="number"?t:Number(t);return Number.isFinite(r)?Math.trunc(r):e}function Jt(t,e,r){return Math.min(r,Math.max(e,t))}function Ka(t,e=5){let r=10**e;return Math.round(t*r)/r}function Za(t){return String(t??"").replace(/\s+/gu," ").trim()}function Rp(t){if(!t||t.nodeType!==1)return!1;let e=t.tagName;if(e==="SCRIPT"||e==="STYLE"||e==="NOSCRIPT"||e==="TEXTAREA"||e==="SVG"||e==="CANVAS")return!0;let r=t.classList;return!!(r&&(r.contains("dshr-translation")||r.contains("dshr-anno-ignore"))||typeof t.hasAttribute=="function"&&t.hasAttribute("data-anno-ignore"))}function xs(t){let e=[],r=[],n=new Map,o=0;if(!t)return{nodes:e,starts:r,positions:n,total:o,text:""};let i=s=>{for(let l=s.firstChild;l;l=l.nextSibling)if(l.nodeType===3){let d=l.nodeValue||"";n.set(l,e.length),e.push(l),r.push(o),o+=d.length}else l.nodeType===1&&!Rp(l)&&i(l)};i(t);let a="";for(let s=0;s<e.length;s+=1)a+=e[s].nodeValue||"";return{nodes:e,starts:r,positions:n,total:o,text:a}}function Pp(t,e,r){if(!t||!e)return null;let n;try{n=t.createRange();let o=e.nodeType===3?e.nodeValue?e.nodeValue.length:0:e.childNodes?e.childNodes.length:0;return n.setStart(e,Jt($r(r),0,o)),n.collapse(!0),n}catch{return null}}function Vc(t,e,r,n){if(!r)return 0;if(r.nodeType===3){let o=t.positions.get(r),i=r.nodeValue||"";if(o!==void 0)return t.starts[o]+Jt($r(n),0,i.length)}if(r===e||e.contains(r)){let o=bs(e),i=Pp(o,r,n);if(!i)return 0;let a=o.createRange();for(let s=0;s<t.nodes.length;s+=1)try{if(a.setStart(t.nodes[s],0),a.collapse(!0),i.compareBoundaryPoints(0,a)<=0)return t.starts[s]}catch{}return t.total}try{return e.compareDocumentPosition(r)&4?t.total:0}catch{return 0}}function Kc(t,e){if(!t.nodes.length)return null;let r=Jt($r(e),0,t.total);for(let o=0;o<t.nodes.length;o+=1){let i=t.nodes[o].nodeValue?t.nodes[o].nodeValue.length:0,a=t.starts[o];if(r<a+i)return{node:t.nodes[o],offset:r-a};if(r===a+i&&i>0)return{node:t.nodes[o],offset:i}}let n=t.nodes[t.nodes.length-1];return{node:n,offset:n.nodeValue?n.nodeValue.length:0}}function Mp(t,e,r){if(!t)return null;let n=xs(t);if(!n.nodes.length||n.total===0)return null;let o=Jt($r(e),0,n.total),i=Jt($r(r),0,n.total);i<o&&([o,i]=[i,o]);let a=Kc(n,o),s=Kc(n,i),l=bs(t);if(!l||!a||!s)return null;try{let d=l.createRange();return d.setStart(a.node,a.offset),d.setEnd(s.node,s.offset),d}catch{return null}}function ed(t){let e=[];if(!t)return e;try{let r=typeof t.getClientRects=="function"?t.getClientRects():null;if(r&&typeof r.length=="number")for(let n=0;n<r.length;n+=1){let o=r[n];o&&e.push(o)}}catch{}if(e.length===0)try{let r=typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():null;r&&(r.width||r.height)&&e.push(r)}catch{}return e}function Op(t){let e=1/0,r=1/0,n=-1/0,o=-1/0;for(let i=0;i<t.length;i+=1){let a=t[i],s=Number(a.width)||0,l=Number(a.height)||0;if(!s&&!l)continue;let d=Number(a.left)||0,p=Number(a.top)||0;e=Math.min(e,d),r=Math.min(r,p),n=Math.max(n,d+s),o=Math.max(o,p+l)}return Number.isFinite(e)?{left:e,top:r,width:n-e,height:o-r,right:n,bottom:o}:{left:0,top:0,width:0,height:0,right:0,bottom:0}}function Lp(t,e,r){let n=e,o=r;for(;n<o&&/\s/u.test(t[n]);)n+=1;for(;o>n&&/\s/u.test(t[o-1]);)o-=1;return{start:n,end:o,text:t.slice(n,o)}}function td(t,e){if(!t||!e||!e.rangeCount)return null;let r=bs(t);if(!r)return null;let n;try{n=e.getRangeAt(0)}catch{return null}if(!n)return null;try{if(!t.contains(n.commonAncestorContainer))return null}catch{return null}let o=[],i;try{i=t.querySelectorAll(`[${Qa}]`)}catch{return null}for(let s=0;s<i.length;s+=1){let l=i[s],d=l.getAttribute(Qa);if(!d)continue;let p=l.classList&&l.classList.contains("dshr-block__body")?l:l.querySelector(Jc);if(!p)continue;let g=xs(p);if(g.total===0)continue;let u;try{u=r.createRange(),u.selectNodeContents(p)}catch{continue}let h=!1,_=!1,C=!1,y=!1;try{h=n.compareBoundaryPoints(3,u)>=0,_=n.compareBoundaryPoints(1,u)<=0,C=n.compareBoundaryPoints(0,u)<0,y=n.compareBoundaryPoints(2,u)>0}catch{continue}if(h||_)continue;let P=C?0:Vc(g,p,n.startContainer,n.startOffset),E=y?g.total:Vc(g,p,n.endContainer,n.endOffset),v=Jt($r(P),0,g.total),S=Jt($r(E),0,g.total);if(S<=v)continue;let M=Lp(g.text,v,S);M.end<=M.start||o.push({blockId:d,start:M.start,end:M.end,text:M.text})}if(o.length===0)return null;let a="";for(let s=0;s<o.length;s+=1)s>0&&(a+=`
`),a+=o[s].text;return a=a.replace(/\u00a0/gu," ").trim(),a?{text:a,rect:Op(ed(n)),ranges:o}:null}function Yo(t,e){if(!t||!e)return[];let r;try{r=e.getBoundingClientRect()}catch{return[]}if(!r)return[];let n=Number(r.width)||0,o=Number(r.height)||0;if(n<=0||o<=0)return[];let i=Number(r.left)||0,a=Number(r.top)||0,s=i+n,l=a+o,d=ed(t);if(d.length===0)return[];let p=[];for(let g=0;g<d.length;g+=1){let u=d[g];if(!u)continue;let h=Number(u.width)||0,_=Number(u.height)||0;if(h<=0||_<=0)continue;let C=Number(u.left)||0,y=Number(u.top)||0,P=Math.max(C,i),E=Math.max(y,a),v=Math.min(C+h,s),S=Math.min(y+_,l);v-P<.5||S-E<.5||p.push({x:Ka(Jt((P-i)/n,0,1)),y:Ka(Jt((E-a)/o,0,1)),w:Ka(Jt((v-P)/n,0,1)),h:Ka(Jt((S-E)/o,0,1))})}return p.sort((g,u)=>g.y-u.y||g.x-u.x),p}function Dp(t){let e=String(t??""),r="",n=[],o=-1;for(let i=0;i<e.length;i+=1){let a=e[i];if(/\s/u.test(a)){o<0&&r.length>0&&(o=i);continue}o>=0&&(n.push(o),r+=" ",o=-1),n.push(i),r+=a}return{text:r,map:n}}function Fp(t,e,r,n,o){let i=t.length,a=r[n];if(a===void 0)return null;let s=n+o<r.length?r[n+o]:i;return s>a?{start:a,end:s}:null}function Yc(t,e){if(!t||!e)return null;let r=String(t),n=String(e).trim();if(!n)return null;let o=r.indexOf(n);if(o>=0)return{start:o,end:o+n.length};let i=Dp(r),a=Za(n);if(!a)return null;let s=i.text.indexOf(a);if(s>=0){let d=Fp(r,i.text,i.map,s,a.length);if(d)return d}let l=Math.min(a.length,48);for(let d=l;d>=12;d-=4){let p=a.slice(0,d),g=i.text.indexOf(p);if(g<0)continue;let u=i.map[g];if(u===void 0)continue;let h=Math.min(r.length,u+a.length);if(h>u)return{start:u,end:h}}return null}function zp(t,e,r){let n=Za(t);if(!n)return!1;let o=[],i=Za(e);i&&o.push(i);let a=Za(r);return a&&a!==i&&o.push(a),o.length===0?!0:o.some(s=>n===s?!0:n.length<8||s.length<8?!1:n.includes(s)||s.includes(n))}function Ya(t,e,r){let n=Jt($r(e),0,t.index.total),o=Jt($r(r),0,t.index.total);if(o<=n)return null;let i=Mp(t.body,n,o);return i?{blockId:t.blockId,start:n,end:o,text:t.index.text.slice(n,o),range:i}:null}function Bp(t){let e=[];if(!t)return e;let r;try{r=t.querySelectorAll(`[${Qa}]`)}catch{return e}for(let n=0;n<r.length;n+=1){let o=r[n],i=o.getAttribute(Qa);if(!i)continue;let a=o.classList&&o.classList.contains("dshr-block__body")?o:o.querySelector(Jc);if(!a)continue;let s=xs(a);s.total!==0&&e.push({blockId:i,body:a,index:s})}return e}function rd(t,e){let r=[];if(!t||!e)return r;let n=Bp(t);if(n.length===0)return r;let o=new Map;for(let s=0;s<n.length;s+=1)o.has(n[s].blockId)||o.set(n[s].blockId,n[s]);let i=typeof e.quote=="string"?e.quote:"",a=Array.isArray(e.ranges)?e.ranges:[];for(let s=0;s<a.length;s+=1){let l=a[s];if(!l||typeof l!="object")continue;let d=o.get(String(l.blockId==null?"":l.blockId));if(!d)continue;let p=Jt($r(l.start),0,d.index.total),g=Jt($r(l.end),0,d.index.total),u=g>p;if(u){let _=d.index.text.slice(p,g);if(zp(_,l.text,i)){let C=Ya(d,p,g);C&&r.push(C);continue}}let h=Yc(d.index.text,i||l.text);if(h){let _=Ya(d,h.start,h.end);_&&r.push(_);continue}if(u){let _=Ya(d,p,g);_&&r.push(_)}}if(r.length===0&&i){let s=i.split(/\n+/u).map(p=>p.trim()).filter(p=>p.length>=2),l=s.length>0?s:[i.trim()],d=new Set;for(let p=0;p<n.length;p+=1){let g=n[p];if(d.has(g.blockId))continue;let u=1/0,h=-1/0;for(let C=0;C<l.length;C+=1){let y=Yc(g.index.text,l[C]);y&&(u=Math.min(u,y.start),h=Math.max(h,y.end))}if(!Number.isFinite(u)||h<=u)continue;d.add(g.blockId);let _=Ya(g,u,h);_&&r.push(_)}}return r}var k0=require("react"),Dt=require("react/jsx-runtime");function Vn({size:t=14}){return(0,Dt.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,Dt.jsx)("path",{d:"M9.4 2.6 5.1 6.9l-.7 2.7 2.7-.7 4.4-4.3-2.1-2Z",stroke:"currentColor",strokeWidth:"1.35",strokeLinejoin:"round"}),(0,Dt.jsx)("path",{d:"m4.4 9.6-2.1 2.1c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0l2.1-2.1",stroke:"currentColor",strokeWidth:"1.35",strokeLinecap:"round"}),(0,Dt.jsx)("path",{d:"M3 13.5h7.4",stroke:"currentColor",strokeWidth:"1.35",strokeLinecap:"round",opacity:".55"})]})}function Ja({size:t=14}){return(0,Dt.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,Dt.jsx)("path",{d:"M4.2 3v4.6a3.8 3.8 0 0 0 7.6 0V3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,Dt.jsx)("path",{d:"M3.4 13.3c2-.7 4.2-.8 9.2-.2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Mn({size:t=12}){return(0,Dt.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,Dt.jsx)("path",{d:"M3.5 2.7h9v6.2l-3.2 3.4H3.5z",fill:"currentColor",fillOpacity:".9",stroke:"currentColor",strokeWidth:"1",strokeLinejoin:"round"}),(0,Dt.jsx)("path",{d:"M9.3 12.3V9h3.1",stroke:"var(--dshr-anno-paper, #ffffff)",strokeWidth:"1.15",strokeLinejoin:"round"}),(0,Dt.jsx)("path",{d:"M5.4 5.5h5.1M5.4 7.4h3.4",stroke:"var(--dshr-anno-paper, #ffffff)",strokeWidth:"1",strokeLinecap:"round",opacity:".8"})]})}function nd({size:t=56}){return(0,Dt.jsxs)("svg",{width:t,height:t,viewBox:"0 0 56 56",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,Dt.jsx)("rect",{x:"8.5",y:"9",width:"33",height:"38",rx:"4",stroke:"currentColor",strokeWidth:"1.8",opacity:".55"}),(0,Dt.jsx)("path",{d:"M15 18h20M15 24h20M15 30h13",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",opacity:".42"}),(0,Dt.jsx)("path",{d:"M34 28.5h11.5v9.2l-4.6 5H34z",fill:"currentColor",fillOpacity:".16",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),(0,Dt.jsx)("path",{d:"M40.9 42.7v-5h4.6",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),(0,Dt.jsx)("path",{d:"M36.8 33.6h5.6M36.8 36.4h3.8",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",opacity:".7"})]})}function ei({size:t=13}){return(0,Dt.jsx)("svg",{width:t,height:t,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",focusable:"false",children:(0,Dt.jsx)("path",{d:"m3.4 3.4 7.2 7.2M10.6 3.4 3.4 10.6",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})})}function od(t,e,r){let n=Number(t);return Number.isFinite(n)?Math.min(r,Math.max(e,n)):e}function ti(t){let e=Number(t);return .36+(od(Number.isFinite(e)?e:9,4,16)-4)/12*.34}function ri(t){return(1-od(t,.1,.95))*.82}function ni(t){let e=String(t??""),r=2166136261;for(let n=0;n<e.length;n+=1)r^=e.charCodeAt(n),r=Math.imul(r,16777619);return r>>>0}function $p(t,e=0){let r=(Number(t)^Math.imul((Number(e)||0)+1,2654435769))>>>0;return r^=r<<13,r>>>=0,r^=r>>>17,r^=r<<5,r>>>=0,r/4294967296}function oi(t,e){let r=Math.max(4,Number(e)||4),n=p=>$p(t,p)*2-1,o=3.7+n(1)*.5,i=3.1+n(2)*.45,a=3.7+n(3)*.45,s=3.3+n(4)*.55,l=r*.54,d=Math.max(1,r-.6);return[`M0.6 ${o.toFixed(2)}`,`C${(r*.18).toFixed(2)} ${i.toFixed(2)}`,`${(r*.34).toFixed(2)} ${i.toFixed(2)}`,`${l.toFixed(2)} ${a.toFixed(2)}`,`S${(r*.82).toFixed(2)} ${s.toFixed(2)}`,`${d.toFixed(2)} ${(s-.25).toFixed(2)}`].join(" ")}function ai(t){if(!t)return"\u6279\u6CE8";let e=typeof t.note=="string"?t.note.trim():"";if(e)return e.length>34?`${e.slice(0,34)}\u2026`:e;let r=typeof t.quote=="string"?t.quote.trim():"";return r?r.length>34?`${r.slice(0,34)}\u2026`:r:"\u6279\u6CE8"}var Kn=require("react/jsx-runtime");function Hp(t,e){let r=Math.min(t.left+t.width,e.left+e.width)-Math.max(t.left,e.left),n=Math.min(t.top+t.height,e.top+e.height)-Math.max(t.top,e.top);if(r<=0||n<=0)return 0;let o=r*n,i=Math.min(t.width*t.height,e.width*e.height);return i>0?o/i:0}function Up(t){let e=[];if(!t)return e;try{let n=typeof t.getClientRects=="function"?t.getClientRects():null;if(n&&typeof n.length=="number")for(let o=0;o<n.length;o+=1){let i=n[o];if(!i)continue;let a=Number(i.width)||0,s=Number(i.height)||0;a<=0||s<=0||e.push({left:Number(i.left)||0,top:Number(i.top)||0,width:a,height:s})}}catch{}if(e.length===0)try{let n=typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():null;n&&(Number(n.width)||0)>0&&(Number(n.height)||0)>0&&e.push({left:Number(n.left)||0,top:Number(n.top)||0,width:Number(n.width)||0,height:Number(n.height)||0})}catch{}if(e.length<=1)return e;let r=[];for(let n=0;n<e.length;n+=1){let o=e[n],i=!1;for(let a=0;a<r.length;a+=1)if(Hp(o,r[a])>.55){i=!0;break}i||r.push(o)}return r}function Wp(t,e){return!t||t.kind&&t.kind!=="flow"?!1:!e||t.chapterId==null?!0:t.chapterId===e}function jp(t,e){if(t===e)return!0;if(!t||!e||t.length!==e.length)return!1;for(let r=0;r<t.length;r+=1){let n=t[r],o=e[r];if(n.type!==o.type||n.key!==o.key||n.annotationId!==o.annotationId||n.x!==o.x||n.y!==o.y||n.width!==o.width||n.height!==o.height||n.color!==o.color||n.path!==o.path||n.isNote!==o.isNote||n.label!==o.label)return!1}return!0}function ad({containerRef:t,annotations:e,chapterId:r,onOpenAnnotation:n,layoutVersion:o}){let i=kn.default.useRef(null),a=kn.default.useRef(0),s=kn.default.useRef({annotations:e,chapterId:r,onOpenAnnotation:n});s.current={annotations:e,chapterId:r,onOpenAnnotation:n};let[l,d]=kn.default.useState({height:0,marks:[]}),p=kn.default.useCallback(()=>{let u=i.current,h=t&&t.current?t.current:null;if(!u||!h)return;let _;try{_=u.getBoundingClientRect()}catch{return}if(!_)return;let{annotations:C,chapterId:y}=s.current,P=Array.isArray(C)?C:[],E=h.clientWidth||_&&h.getBoundingClientRect().width||0,v=0,S=null;try{if(S=h.querySelector(".dshr-content__inner"),!S){for(let R=h.firstElementChild;R;R=R.nextElementSibling)if(!(R===u||R.classList&&R.classList.contains("dshr-anno-layer"))){S=R;break}}}catch{S=null}if(S)try{let R=S.getBoundingClientRect();v=Math.max(0,R.top-_.top+R.height)}catch{v=0}let M=[];for(let R=0;R<P.length;R+=1){let I=P[R];if(!Wp(I,y))continue;let b;try{b=rd(h,I)}catch{continue}if(!Array.isArray(b)||b.length===0)continue;let O=I.style==="underline"||I.style==="note"?I.style:"highlight",L=I.color||"#f5d76e",F=ni(`${I.id||""}|${I.createdAt||0}`),$=ti(I.width),J=I.id==null?"":String(I.id),te=O==="note"||typeof I.note=="string"&&I.note.trim().length>0,ie=ai(I),ue=null;for(let U=0;U<b.length;U+=1){let se=b[U],Y=Up(se&&se.range);for(let T=0;T<Y.length;T+=1){let q=Y[T],re=q.left-_.left,me=q.top-_.top,ne=`${J}:${U}:${T}`;if(ue={x:re,y:me,width:q.width,height:q.height},O==="underline"){let Te=q.width+2;M.push({type:"underline",key:`u:${ne}`,annotationId:J,x:re-1,y:me+q.height-7.2,width:Te,height:8,color:L,path:oi(F,Te),isNote:!1,label:ie})}else{let Te=Math.max(3.5,q.height*$);M.push({type:"band",key:`b:${ne}`,annotationId:J,x:re-1,y:me+q.height*ri($),width:q.width+2,height:Te,color:L,path:"",isNote:O==="note",label:ie})}v=Math.max(v,me+q.height+8)}}if(te&&ue){let U=Math.min(Math.max(2,ue.x+ue.width+3),Math.max(2,E-21));M.push({type:"note",key:`n:${J}`,annotationId:J,x:U,y:Math.max(0,ue.y-1),width:19,height:19,color:L,path:"",isNote:!0,label:ie})}}let k=Math.max(0,Math.ceil(v+8));d(R=>R.height===k&&jp(R.marks,M)?R:{height:k,marks:M})},[t]),g=kn.default.useCallback(()=>{if(typeof window>"u"||a.current)return;let u=()=>{a.current=0,p()};a.current=typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(u):window.setTimeout(u,16)},[p]);return kn.default.useEffect(()=>{let u=t&&t.current?t.current:null,h=i.current;if(!u||!h||typeof window>"u")return;let _=[];g(),_.push(window.setTimeout(g,80));let C=null;if(typeof ResizeObserver<"u"){let k=new ResizeObserver(()=>g());try{k.observe(u);let R=h.parentElement;R&&R!==u&&k.observe(R);let I=u.querySelector(".dshr-content__inner");I&&!I.contains(h)&&k.observe(I)}catch{}C=k}let y=null;if(typeof MutationObserver<"u"){y=new MutationObserver(k=>{for(let R=0;R<k.length;R+=1){let I=k[R].target;if(!h.contains(I)){g();return}}});try{y.observe(u,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["class","style","data-rendered"]})}catch{}}let P=()=>g(),E=k=>{h.contains(k.target)||g()};window.addEventListener("resize",P),u.addEventListener("load",E,!0);let v=u.contains(h);v||u.addEventListener("scroll",P,{passive:!0});let S=null,M=typeof document<"u"?document.fonts:null;if(M&&typeof M.ready=="object"&&typeof M.ready.then=="function"&&M.ready.then(()=>g()).catch(()=>{}),M&&typeof M.addEventListener=="function"){S=()=>g();try{M.addEventListener("loadingdone",S)}catch{S=null}}return()=>{for(let k=0;k<_.length;k+=1)window.clearTimeout(_[k]);if(a.current&&(typeof window.cancelAnimationFrame=="function"?window.cancelAnimationFrame(a.current):window.clearTimeout(a.current),a.current=0),C&&C.disconnect(),y&&y.disconnect(),window.removeEventListener("resize",P),u.removeEventListener("load",E,!0),v||u.removeEventListener("scroll",P),M&&S)try{M.removeEventListener("loadingdone",S)}catch{}}},[t,g]),kn.default.useEffect(()=>{if(g(),typeof window>"u")return;let u=window.setTimeout(g,40);return()=>window.clearTimeout(u)},[e,r,o,g]),(0,Kn.jsx)("div",{ref:i,className:"dshr-anno-layer",style:l.height>0?{height:`${l.height}px`}:void 0,"data-anno-layer":"flow",children:l.marks.map(u=>{if(u.type==="note")return(0,Kn.jsx)("button",{type:"button",className:"dshr-anno-note-btn",style:{left:`${u.x}px`,top:`${u.y}px`,"--dshr-anno-color":u.color},"data-anno-id":u.annotationId,title:u.label?`\u67E5\u770B\u6279\u6CE8\uFF1A${u.label}`:"\u67E5\u770B\u6279\u6CE8","aria-label":u.label?`\u67E5\u770B\u6279\u6CE8\uFF1A${u.label}`:"\u67E5\u770B\u6279\u6CE8",onMouseDown:h=>h.preventDefault(),onClick:()=>{let h=s.current.onOpenAnnotation;typeof h=="function"&&h(u.annotationId)},children:(0,Kn.jsx)(Mn,{size:12})},u.key);if(u.type==="underline"){let h=Math.max(2,Math.round(u.width*100)/100);return(0,Kn.jsx)("svg",{className:"dshr-anno-underline",style:{left:`${u.x}px`,top:`${u.y}px`,width:`${u.width}px`,height:`${u.height}px`,"--dshr-anno-color":u.color},viewBox:`0 0 ${h} 8`,preserveAspectRatio:"none","data-anno-id":u.annotationId,"aria-hidden":"true",focusable:"false",children:(0,Kn.jsx)("path",{d:u.path})},u.key)}return(0,Kn.jsx)("span",{className:`dshr-anno-band${u.isNote?" dshr-anno-band--note":""}`,style:{left:`${u.x}px`,top:`${u.y}px`,width:`${u.width}px`,height:`${u.height}px`,"--dshr-anno-color":u.color},"data-anno-id":u.annotationId,"aria-hidden":"true"},u.key)})})}function Zo(t){let e=t.scrollHeight-t.clientHeight;return e>0?Math.max(0,Math.min(1,t.scrollTop/e)):0}function ii(t,e,r){return{chapter:t,chapters:e,scrollRatio:r,percent:(t+r)/e*100}}function id(t,e){let r=Math.max(1,e-48-56),n=t.filter(i=>Number.isFinite(i.top)&&i.bottom>i.top).toSorted((i,a)=>i.top-a.top),o=[0];for(let i of n)for(;i.bottom>o.at(-1)+48+r+.5;){let a=o.at(-1),s=i.top-48;o.push(s>a+.5?s:a+r)}return o}function Gp(t,e){let r=0,n=t.length-1;for(;r<n;){let o=Math.ceil((r+n)/2);t[o]<=e+.5?r=o:n=o-1}return r}function sd(){let t=[0],e=0;return{get page(){return e+1},get pages(){return t.length},get top(){return t[e]},get starts(){return t},replace(r,n){t=r.length?r:[0],e=Gp(t,Math.max(0,n||0))},turn(r){let n=Math.max(0,Math.min(t.length-1,e+Math.sign(r)));return n===e?!1:(e=n,!0)}}}function ld(t,e){let r=t.getBoundingClientRect(),n=[],o=(s,l)=>{s.height<2||s.width<.1||n.push({top:s.top-r.top+t.scrollTop,bottom:s.bottom-r.top+t.scrollTop,...l})},i=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let s=i.nextNode();s;s=i.nextNode()){if(!s.nodeValue?.trim()||s.parentElement.closest('[aria-hidden="true"],script,style'))continue;let l=document.createRange();l.selectNodeContents(s);for(let d of l.getClientRects())o(d,{node:s})}for(let s of e.querySelectorAll("img,svg,hr,video,canvas"))o(s.getBoundingClientRect(),{element:s,atomic:!0});n.sort((s,l)=>s.top-l.top);let a=[];for(let s of n){let l=a.at(-1),d=l&&Math.min(l.bottom,s.bottom)-Math.max(l.top,s.top);l&&!l.atomic&&!s.atomic&&d>Math.min(l.bottom-l.top,s.bottom-s.top)*.5?l.bottom=Math.max(l.bottom,s.bottom):a.push({...s})}return a}function vs(t,e,r){let n=e+48,o=t.find(C=>C.bottom>n+.5)||t.at(-1);if(!o)return null;let i=o.element||o.node?.parentElement.closest(".dshr-block__body,.dshr-translation,.dshr-chapter__kicker")||o.node?.parentElement,a=r.getBoundingClientRect(),s=i?.getBoundingClientRect(),l=s?.height?(n-(s.top-a.top+r.scrollTop))/s.height:0;if(!o.node)return{element:i,ratio:l};let d=document.createRange(),p=1,g=o.node.length;for(;p<g;){let C=p+g>>1;d.setStart(o.node,0),d.setEnd(o.node,C);let y=d.getClientRects(),P=y[y.length-1];(P?P.top-a.top+r.scrollTop:-1/0)<o.top-1?p=C+1:g=C}let u=Math.max(0,p-1),h=u,_=document.createTreeWalker(i,NodeFilter.SHOW_TEXT);for(let C=_.nextNode();C&&C!==o.node;C=_.nextNode())h+=C.length;return{node:o.node,offset:u,textOffset:h,element:i,ratio:l}}function cd(t,e,r){if(!t)return r;let n=e.getBoundingClientRect();if(!t.node?.isConnected&&t.element?.isConnected&&Number.isFinite(t.textOffset)){let o=t.textOffset,i=document.createTreeWalker(t.element,NodeFilter.SHOW_TEXT);for(let a=i.nextNode();a;a=i.nextNode()){if(o<a.length){t.node=a,t.offset=o;break}o-=a.length}}if(t.node?.isConnected&&e.contains(t.node)&&t.node.length){let o=document.createRange(),i=Math.min(t.offset,t.node.length-1);o.setStart(t.node,i),o.setEnd(t.node,i+1);let a=o.getBoundingClientRect();if(a.height)return a.top-n.top+e.scrollTop-48}if(t.element?.isConnected&&e.contains(t.element)){let o=t.element.getBoundingClientRect();return o.top-n.top+e.scrollTop+Math.max(0,t.ratio)*o.height-48}return r}var Be=require("react/jsx-runtime"),ys=new Set(["heading","paragraph","list-item","quote"]),qp=6;function Xp(t,e){let r=t.style.scrollBehavior;t.style.scrollBehavior="auto",t.scrollTop=e,t.style.scrollBehavior=r}function Vp(t,e){return`${t.title||""} \xB7 ${e?.title||""}`}var Kp=St.default.memo(function({block:e}){if(e.kind==="image")return(0,Be.jsxs)("figure",{children:[e.src?(0,Be.jsx)("img",{src:e.src,alt:e.alt||"",loading:"lazy",decoding:"async"}):(0,Be.jsx)("div",{className:"dshr-translation",children:"\u56FE\u7247\u672A\u80FD\u8F7D\u5165"}),e.caption?(0,Be.jsx)("figcaption",{children:e.caption}):null]});if(e.kind==="table")return(0,Be.jsx)("div",{dangerouslySetInnerHTML:{__html:e.html||""}});if(e.kind==="code")return(0,Be.jsx)("pre",{className:"dshr-block__code",children:e.text||""});if(e.kind==="rule")return(0,Be.jsx)("hr",{});if(e.kind==="heading"){let r=`h${Math.max(1,Math.min(6,e.level||2))}`;return(0,Be.jsx)(r,{dangerouslySetInnerHTML:{__html:e.html||""}})}return(0,Be.jsx)("p",{dangerouslySetInnerHTML:{__html:e.html||""}})});function Yp({state:t,onRetry:e}){return t?t.status==="loading"?(0,Be.jsx)("div",{className:"dshr-translation",children:(0,Be.jsxs)("span",{className:"dshr-translation__loading",children:[(0,Be.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u7FFB\u8BD1\u2026"]})}):t.status==="error"?(0,Be.jsxs)("div",{className:"dshr-translation is-error",children:[(0,Be.jsx)("p",{children:t.error||"\u8FD9\u6BB5\u7FFB\u8BD1\u5931\u8D25\u4E86\u3002"}),(0,Be.jsx)("button",{type:"button",className:"dshr-translation__retry",onClick:e,children:"\u91CD\u8BD5"})]}):t.zh?(0,Be.jsx)("div",{className:"dshr-translation",children:String(t.zh).split(/\n+/u).filter(Boolean).map((r,n)=>(0,Be.jsx)("p",{children:r},n))}):null:null}function dd({book:t,chapterIndex:e,onChapterChange:r,settings:n,chapterEntry:o,onChapterEntered:i,onSelection:a,onProgress:s,annotations:l=[],onOpenAnnotation:d,focusAnnotation:p,layoutVersion:g=0}){let u=t.chapters[e],h=St.default.useRef(null),_=St.default.useRef(null),C=St.default.useRef(0),y=St.default.useRef(new Map),P=St.default.useRef(!1),E=St.default.useRef(null),v=St.default.useRef(!0),S=St.default.useMemo(()=>new Map((u?.blocks??[]).map(U=>[U.id,U])),[u]),[M,k]=St.default.useState({}),[R,I]=St.default.useState(!1);St.default.useEffect(()=>{v.current=!0;let U=new AbortController;return E.current=U,()=>{v.current=!1,U.abort()}},[]);let b=St.default.useCallback(U=>`${u?.id||"chapter"}:${U.id}`,[u?.id]),O=St.default.useCallback((U,se)=>{v.current&&k(Y=>({...Y,[U]:{...Y[U]||{},...se}}))},[]),L=St.default.useCallback(async()=>{if(P.current||y.current.size===0)return;P.current=!0,I(!0);let U=[...y.current.entries()].slice(0,qp);for(let[Y]of U)y.current.delete(Y);let se=Vp(t,u);try{let Y=await yo(U.map(([T,q])=>({id:T,text:q.text})),{context:se,title:t.title,signal:E.current?.signal});for(let[T]of U)Y[T]?O(T,{status:"done",zh:Y[T],error:void 0}):O(T,{status:"error",error:"\u7FFB\u8BD1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u8FD9\u4E00\u6BB5\u3002"})}catch(Y){if(!Xn(Y))for(let[T]of U)O(T,{status:"error",error:Y?.message||"\u7FFB\u8BD1\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002"})}finally{P.current=!1,v.current&&(I(!1),y.current.size>0&&window.setTimeout(()=>{L()},120))}},[t,u,O]),F=St.default.useCallback((U,{force:se=!1}={})=>{if(!U||!ys.has(U.kind)||!U.text?.trim())return;let Y=b(U),T=M[Y];!se&&(T?.status==="loading"||T?.status==="done")||(O(Y,{status:"loading",error:void 0}),y.current.set(Y,{text:U.text.slice(0,4e3)}),L())},[L,b,M,O]),$=St.default.useCallback(U=>{let se=U.slice(U.indexOf(":")+1),Y=S.get(se);Y&&F(Y,{force:!0})},[S,F]),J=St.default.useCallback(()=>{for(let U of u?.blocks??[])ys.has(U.kind)&&U.text?.trim()&&F(U,{force:M[`${u.id}:${U.id}`]?.status==="error"})},[u,F,M]);St.default.useEffect(()=>{let U=h.current;if(!U||!n.autoTranslate||typeof IntersectionObserver>"u")return;_.current?.disconnect();let se=new IntersectionObserver(Y=>{for(let T of Y){if(!T.isIntersecting)continue;let q=T.target.getAttribute("data-seg-id"),re=S.get(q);re&&F(re)}},{root:U,rootMargin:"420px 0px 520px 0px",threshold:.01});for(let Y of U.querySelectorAll("[data-seg-id]"))se.observe(Y);return _.current=se,()=>se.disconnect()},[S,u?.id,F,n.autoTranslate]),St.default.useLayoutEffect(()=>{let U=h.current;if(!U||!o||n.readingMode==="book")return;let se=o.edge==="end"?1:Math.max(0,Math.min(1,Number(o.scrollRatio)||0));Xp(U,Math.max(0,U.scrollHeight-U.clientHeight)*se),i?.(o,Zo(U))},[o,n.readingMode,i]);let te=St.default.useCallback(U=>{let se=h.current;if(!se)return;let Y=td(se,window.getSelection());if(!Y){a?.(null);return}a?.({...Y,source:"flow",context:u?.blocks.map(T=>T.text||"").join(`
`).slice(0,2400)||""})},[u,a]);St.default.useEffect(()=>{if(!p?.id)return;let U=h.current,se=U?.dataset.readerNavigation||"0",Y=window.setTimeout(()=>{if(!U||U!==h.current||(U.dataset.readerNavigation||"0")!==se)return;let T=p.blockId?U.querySelector(`[data-anno-block="${CSS.escape(p.blockId)}"]`):null;if(!T)return;let q=new CustomEvent("dshr-flow-navigate",{cancelable:!0,detail:{element:T}});U.dispatchEvent(q)&&T.scrollIntoView({block:"center",behavior:"smooth"})},120);return()=>window.clearTimeout(Y)},[t,e,p]);let ie=St.default.useCallback(()=>{let U=h.current;if(!U)return;let se=Date.now();se-C.current<600||(C.current=se,s?.(ii(e,t.chapters.length,Zo(U))))},[t.chapters.length,e,s]),ue=St.default.useCallback(U=>{let se=U.target.closest?.("a");if(!se)return;let Y=se.getAttribute("data-chapter");if(Y){U.preventDefault();let q=Number(Y);Number.isInteger(q)&&q>=0&&q<t.chapters.length&&r(q);return}let T=se.getAttribute("href")||"";T&&!T.startsWith("#")&&(U.preventDefault(),window.open(T,"_blank","noopener,noreferrer"))},[t.chapters.length,r]);return u?(0,Be.jsxs)("div",{className:"dshr-content",ref:h,role:"region","aria-label":"\u6B63\u6587\u9605\u8BFB\u533A",tabIndex:n.readingMode==="book"?0:void 0,onScroll:ie,onMouseUp:te,onKeyUp:te,onClick:ue,children:[(0,Be.jsxs)("div",{className:"dshr-content__inner",children:[(0,Be.jsxs)("article",{className:"dshr-chapter",children:[(0,Be.jsxs)("div",{className:"dshr-chapter__kicker",children:["\u7B2C ",e+1," / ",t.chapters.length," \u7AE0",n.autoTranslate?" \xB7 \u5B9E\u65F6\u7FFB\u8BD1\u5DF2\u5F00\u542F":""]}),u.blocks.map(U=>{let se=b(U),Y=M[se],T=ys.has(U.kind)&&U.text?.trim();return(0,Be.jsxs)("div",{className:`dshr-block dshr-block--${U.kind}`,"data-kind":U.kind,"data-seg-id":T?U.id:void 0,"data-anno-block":U.id,children:[(0,Be.jsx)("div",{className:"dshr-block__body",children:(0,Be.jsx)(Kp,{block:U})}),T?(0,Be.jsx)(Yp,{state:Y,onRetry:()=>$(se)}):null]},U.id)})]}),(0,Be.jsxs)("div",{className:"dshr-chapter__nav",children:[(0,Be.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e<=0,onClick:()=>r(e-1),children:[(0,Be.jsx)(Oa,{size:15})," ",e>0?t.chapters[e-1].title:"\u5DF2\u662F\u7B2C\u4E00\u7AE0"]}),(0,Be.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:J,disabled:R,title:"\u7FFB\u8BD1\u672C\u7AE0\u6240\u6709\u6BB5\u843D",children:[R?(0,Be.jsx)("span",{className:"dshr-spinner"}):(0,Be.jsx)(mo,{size:15})," \u7FFB\u8BD1\u672C\u7AE0"]}),(0,Be.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e>=t.chapters.length-1,onClick:()=>r(e+1),children:[e<t.chapters.length-1?t.chapters[e+1].title:"\u5DF2\u662F\u6700\u540E\u4E00\u7AE0"," ",(0,Be.jsx)(La,{size:15})]})]})]}),(0,Be.jsx)(ad,{containerRef:h,annotations:l,chapterId:u.id,onOpenAnnotation:d,layoutVersion:g})]}):(0,Be.jsxs)("div",{className:"dshr-error-panel",children:[(0,Be.jsx)("h3",{children:"\u8FD9\u4E00\u7AE0\u4E0D\u5B58\u5728"}),(0,Be.jsx)("p",{children:"\u6587\u6863\u76EE\u5F55\u53EF\u80FD\u4E0D\u5B8C\u6574\uFF0C\u8BF7\u5C1D\u8BD5\u91CD\u65B0\u5BFC\u5165\u3002"})]})}var ra=Lt(require("react"),1);var ws="6.5.438-reader4",Zn="/dsh-reader-assets/",ud;function Zp(){return`${Zn}pdf.bundle.js?v=${ws}`}function Qp(){return ud||=import(Zp()).then(t=>{if(!t?.getDocument||!t.GlobalWorkerOptions)throw new Error("PDF \u5F15\u64CE\u8D44\u6E90\u683C\u5F0F\u4E0D\u6B63\u786E");return t.GlobalWorkerOptions.workerSrc=`${Zn}pdf.worker.mjs?v=${ws}`,t.GlobalWorkerOptions.rendererSrc=`${Zn}pdf.renderer.mjs?v=${ws}`,t}).catch(t=>{throw ud=null,t})}var en=()=>new DOMException("PDF operation cancelled","AbortError"),Yn=t=>{if(t?.aborted)throw en()};async function Jp(t,e,{signal:r,onRead:n,onError:o}={}){Yn(r);let i=256*1024,a=new Uint8Array(await e.slice(0,Math.min(i,e.size)).arrayBuffer());Yn(r);let s={bytes:a.length,reads:1,total:e.size};class l extends t.PDFDataRangeTransport{constructor(){super(e.size,a,!0)}aborted=!1;queue=[];active=0;requestDataRange(p,g){this.aborted||r?.aborted||(this.queue.push({begin:p,end:g}),this.pump())}pump(){for(;!this.aborted&&this.active<2&&this.queue.length;){let{begin:p,end:g}=this.queue.shift();this.active++,e.slice(p,g).arrayBuffer().then(u=>{if(this.aborted||r?.aborted)return;let h=new Uint8Array(u);if(h.length!==g-p)throw new Error("PDF \u5206\u6BB5\u8BFB\u53D6\u4E0D\u5B8C\u6574");s.bytes+=h.length,s.reads++,n?.({...s}),this.onDataRange(p,h)}).catch(u=>{this.aborted||r?.aborted||(this.abort(),o?.(u))}).finally(()=>{this.active--,this.pump()})}}abort(){this.aborted=!0,this.queue.length=0}}return n?.({...s}),{range:new l,stats:s,rangeChunkSize:i,disableStream:!0,disableAutoFetch:!0}}async function si(t,{signal:e,onProgress:r,onRead:n,onError:o}={}){Yn(e);let i=await Qp();Yn(e);let a,s,l,d,p=!1,g,u,h=new Promise((y,P)=>{u=P});h.catch(()=>{});let _=()=>g||(p=!0,clearTimeout(d),s?.abort(),e?.removeEventListener("abort",C),g=Promise.resolve().then(()=>a?.destroy()).catch(()=>{}).finally(()=>l?.destroy()),g),C=()=>{u(en()),_()};e?.addEventListener("abort",C,{once:!0});try{if(l=new i.PDFWorker({verbosity:0}),await Promise.race([l.promise,h,new Promise((E,v)=>{d=setTimeout(()=>v(new Error("PDF \u540E\u53F0\u7EBF\u7A0B\u542F\u52A8\u8D85\u65F6\uFF0C\u8BF7\u68C0\u67E5 Host \u7684 Worker \u8D44\u6E90\u4E0E\u5B89\u5168\u7B56\u7565\u3002")),1e4)})]),clearTimeout(d),Yn(e),typeof Worker!="function"||!(l.port instanceof Worker))throw new Error("PDF \u540E\u53F0\u7EBF\u7A0B\u4E0D\u53EF\u7528\uFF0C\u8BF7\u68C0\u67E5 /dsh-reader-assets/pdf.worker.mjs \u548C Host \u7684 Worker \u5B89\u5168\u7B56\u7565\u3002");let y;if(typeof Blob<"u"&&t instanceof Blob?(y=await Jp(i,t,{signal:e,onRead:n,onError:E=>{u(E),o?.(E),_()}}),s=y.range):y={data:(t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)).slice()},Yn(e),p)throw en();a=i.getDocument({...y,worker:l,cMapUrl:`${Zn}cmaps/`,cMapPacked:!0,standardFontDataUrl:`${Zn}standard_fonts/`,wasmUrl:`${Zn}wasm/`,iccUrl:`${Zn}iccs/`,isEvalSupported:!1,disableWorkerRendering:!1,verbosity:0}),a.onProgress=r;let P=await Promise.race([a.promise,h]);if(Yn(e),p)throw en();return{engine:i,pdf:P,close:_,source:y}}catch(y){throw await _(),y}}var li=class{constructor(e=48*1024*1024){this.limit=e,this.bytes=0,this.entries=new Map}get(e){let r=this.entries.get(e);return r&&(this.entries.delete(e),this.entries.set(e,r)),r}set(e,r){this.delete(e);let n=r.bitmap.width*r.bitmap.height*4;if(n>this.limit){r.bitmap.close();return}for(this.entries.set(e,{...r,bytes:n}),this.bytes+=n;this.bytes>this.limit;)this.delete(this.entries.keys().next().value)}delete(e){let r=this.entries.get(e);r&&(this.bytes-=r.bytes,r.bitmap.close(),this.entries.delete(e))}clear(){for(let e of this.entries.keys())this.delete(e)}},ci=class{constructor(e,r,n=20){this.count=e,this.defaultHeight=r,this.gap=n,this.heights=new Map,this.tree=new Float64Array(e+1),this.paddingTop=18}setHeight(e,r){let n=r-(this.heights.get(e)??this.defaultHeight);this.heights.set(e,r);for(let o=e;o<=this.count;o+=o&-o)this.tree[o]+=n}top(e){let r=(e-1)*(this.defaultHeight+this.gap);for(let n=e-1;n>0;n-=n&-n)r+=this.tree[n];return this.paddingTop+r}height(e){return this.heights.get(e)??this.defaultHeight}pageAt(e){let r=1,n=this.count;for(;r<n;){let o=Math.ceil((r+n)/2);this.top(o)<=e?r=o:n=o-1}return r}entryAt(e){let r=this.pageAt(e);return{page:r,top:this.top(r),height:this.height(r)}}};var ef=/[\u1100-\u11FF\u2E80-\u2EFF\u3000-\u303F\u3040-\u30FF\u3100-\u312F\u3130-\u318F\u3400-\u4DBF\u4E00-\u9FFF\uA960-\uA97F\uAC00-\uD7AF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF]/,pd=/[.。！？!?；;…]$/,tf="0123456789+\u2212-",hd="\u2070\xB9\xB2\xB3\u2074\u2075\u2076\u2077\u2078\u2079\u207A\u207B\u207B";var rf=/[\u0000-\u0008\u000b\u000c\u000e-\u001f\ufffd]/u;function Jo(t){return!!t&&ef.test(t)}function nf(t){return String(t).replace(/\u0000/g,"").replace(/[\t\u00a0\u2000-\u200a\u202f\u205f\u3000]/g," ").replace(/\s+/g," ")}function di(t){return typeof t=="number"&&Number.isFinite(t)?t:null}function Qo(t){let e=t&&t.transform;if(!Array.isArray(e)||e.length<6)return null;let r=di(e[4]),n=di(e[5]);if(r===null||n===null)return null;let o=di(t.width),i=di(t.height);return{x:r,y:n,width:o===null?null:Math.abs(o),height:i===null||i<=0?null:i}}function of(t,e){let r=0;for(let n of t)r+=Jo(n)?1:.5;return r*(e||10)}function af(t){return{text:"",startX:t?t.x:0,endX:t?t.x:0,y:t?t.y:0,height:t&&t.height?t.height:0,hasGeometry:!!t}}function sf(t,e,r){let n=nf(e);if(!n)return;if(r?.height&&t.hasGeometry&&t.height&&/^[+−-]?\d*$/.test(n)){let i=t.text.codePointAt(t.text.length-2),a=i>=119808&&i<=120779,s=/^[0-9]+$/.test(n)&&t.text&&hd.includes(t.text.at(-1)),l=(r.y-t.y)/t.height,d=(r.x-t.endX)/t.height;(a||s)&&r.height<=t.height*.85&&l>=.18&&l<=.58&&d>=-.2&&d<=.18&&(n=[...n].map(p=>hd[tf.indexOf(p)]).join(""))}let o="";if(t.text){let i=t.text[t.text.length-1],a=n[0];if(i===" "||a===" "||t.text.endsWith(" "))o="";else if(Jo(i)||Jo(a))o="";else if(r&&t.hasGeometry){let s=r.x-t.endX,l=Math.max(t.height||0,r.height||0,1);o=s>l*.18?" ":""}}if(t.text=(t.text+o+n).replace(/^ +/,""),r&&t.hasGeometry){let i=r.width===null?of(n,r.height||t.height):r.width;t.endX=Math.max(t.endX,r.x+i),t.startX=Math.min(t.startX,r.x),r.height&&(t.height=Math.max(t.height,r.height))}}function lf(t,e,r){if(!t||r)return!0;if(!e||!t.hasGeometry)return!1;let n=Math.max(t.height||0,e.height||0,1);return Math.abs(e.y-t.y)>n*.58||e.x<t.endX-n*2&&t.endX-t.startX>n}function cf(t,e){let r=t.lastLine;if(!r)return!1;let n=r.height||10,o=e.height||n,i=Math.max(n,o,1),a=r.y-e.y;if(a<-i*1.2||a>i*1.68)return!0;let s=o/n;return!!(s>1.18||s<.84||e.startX-t.leftX>i*1.25||pd.test(r.text)&&a>i*1.35&&r.endX<t.rightX-i*2)}function df(t){let e="";for(let r of t){let n=r.text.trim();if(!n)continue;if(!e){e=n;continue}let o=e[e.length-1],i=n[0];o==="-"||Jo(o)||Jo(i)?e+=n:e+=" "+n}return e}function uf(t){if(t.length<=1400)return[t];let e=[],r=t;for(;r.length>1400;){let n=Math.floor(770.0000000000001),o=Math.min(r.length,1400),i=-1;for(let s=o;s>n;s-=1)if(pd.test(r[s-1])||r[s-1]===`
`){i=s;break}i<=0&&(i=r.lastIndexOf(" ",o),i<n&&(i=o));let a=r.slice(0,i).trim();a&&e.push(a),r=r.slice(i).trim()}return r&&e.push(r),e}function fd(t,{metadata:e=!1}={}){let r=[],n=null,o=!1;if(Array.isArray(t))for(let[l,d]of t.entries()){if(!d||typeof d.str!="string")continue;if(!d.str.trim()){d.hasEOL&&(o=!0);continue}let p=Qo(d);lf(n,p,o)&&(n=af(p),n.itemIndices=[],r.push(n)),sf(n,d.str,p),n.itemIndices.push(d.__pdfItemIndex??l),o=!!d.hasEOL}let i=[],a=null;for(let l of r)l.text.trim()&&(!a||cf(a,l)?(a={lines:[l],lastLine:l,leftX:l.startX,rightX:l.endX},i.push(a)):(a.lines.push(l),a.lastLine=l,a.leftX=Math.min(a.leftX,l.startX),a.rightX=Math.max(a.rightX,l.endX)));let s=[];for(let l of i){let d=df(l.lines);for(let p of uf(d)){let g=p.trim();g&&s.push({src:g,...e?{itemIndices:l.lines.flatMap(u=>u.itemIndices)}:{}})}}return{text:s.map(l=>l.src).join(`

`),segments:s}}function hf(t,e){let r=(t||[]).filter(u=>typeof u?.str=="string").map((u,h)=>({...u,__pdfItemIndex:h})),n=0;for(let u=0;u<(t||[]).length;u+=1)typeof t[u]?.str=="string"&&(r[n++].__pdfItemIndex=u);if(!e)return r;let o=r.filter(u=>u.str.trim().length>15&&u.width>e*.12),i=o.filter(u=>u.transform?.[4]<e*.3&&u.transform[4]+u.width<e*.5),a=o.filter(u=>u.transform?.[4]>=e*.49&&u.transform[4]<e*.66);if(i.length<4||a.length<4)return r;let s=r.filter(u=>u.str.trim()&&u.transform?.[4]<e*.48&&u.transform[4]+u.width>e*.52),d=a.filter(u=>{let h=u.transform[5],_=Math.max(2,(u.height||10)*.55);return i.some(C=>Math.abs(C.transform[5]-h)<_)&&!s.some(C=>Math.abs(C.transform[5]-h)<_)}).map(u=>u.transform[4]).sort((u,h)=>u-h);if(!d.some((u,h)=>d[h+3]-u<e*.02))return r;let p=[...new Set(o.filter(u=>u.transform?.[4]<e*.4&&u.transform[4]+u.width>e*.6).map(u=>Math.round(u.transform[5])))].sort((u,h)=>h-u),g=u=>{let h=u.transform?.[5]||0,_=p.filter(y=>y>h+3).length*2,C=p.some(y=>Math.abs(y-h)<=3);return[_+(C?1:0),C?0:u.transform?.[4]>=e*.48?2:1]};return r.sort((u,h)=>{let _=g(u),C=g(h);for(let y=0;y<_.length;y+=1)if(_[y]!==C[y])return _[y]-C[y];return u.__pdfItemIndex-h.__pdfItemIndex})}function pf(t){for(let e=1;e+1<t.length;e++){let r=t[e];if(r.str!=="\u221A")continue;let n=t[e-1],o=t[e+1],i=t[e+2];if(n.str!=="1"||!/^[A-Za-z]$/u.test(o.str))continue;let a=Qo(n),s=Qo(r),l=Qo(o);if(!a?.height||!s?.width||!l?.height||!l.width||!a.width)continue;let d=a.x+a.width/2,p=(a.y-l.y)/l.height;if(s.y>=a.y||s.y<=l.y||p<.8||p>1.8||d<s.x||d>l.x+l.width||Math.abs(l.x-s.x-s.width)>l.height*.25||(r.str="/\u221A",!i||!/^[A-Za-z0-9]$/u.test(i.str)))continue;let g=Qo(i);g?.height&&g.height<=l.height*.85&&g.y<l.y-l.height*.1&&g.y>l.y-l.height*.55&&Math.abs(g.x-l.x-l.width)<=l.height*.18&&(i.str="_"+i.str)}}function _s(t,e,r){let n=hf(t,r);pf(n);let o=fd(n,{metadata:!0});return{text:o.text,segments:o.segments.map((i,a)=>{let s=i.itemIndices.map(u=>t[u]?.str?.trim()||""),l=(i.src.match(/(?:\b[Oo]|[𝑂𝒪ΩΘ])\s*\((?:[^()\n]|\([^()\n]{1,40}\)){1,120}\)/gu)||[]).filter(u=>/[\u{1d400}-\u{1d7ff}⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻+×/]|\(\s*[A-Z]\s*\)/u.test(u)),d=i.src.match(/(?<![\p{L}\p{N}.])\d+(?:[.,]\d+)?(?:\s*[-–—]\s*\d+(?:[.,]\d+)?)?\s*×(?!\s*\d)/gu)||[],p=i.src.match(/\b1\/√[A-Za-z](?:_[A-Za-z0-9])?(?![\p{L}\p{N}_])/gu)||[],g=s.filter(u=>/[∑∫√≈≠≤≥∂∞]/u.test(u)&&!/[A-Za-z]{4}|[\u3400-\u9fff]/u.test(u));return{...i,id:`p${e}-s${a}`,protectedTokens:[...new Set([...l,...d,...p,...g])],...s.some(u=>rf.test(u))?{sourceNeedsReview:!0}:{}}})}}var gd=String.raw`
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
`;var md=String.raw`
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
`;var ea=Lt(require("react"),1);var bd="reader-a-2";function Qn(t){return String(t||"").split(/\r?\n/u).map(e=>e.trim()).filter(Boolean).join(`
`).slice(0,4e3)}function ff(t,e=[]){let r=[...new Set([...e,...t.match(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]|\[\d+(?:\s*[,–—-]\s*\d+)*\]|https?:\/\/[^\s]+|\b10\.\d{4,9}\/[^\s]+/gu)||[]])].filter(i=>i&&t.includes(i)).sort((i,a)=>a.length-i.length),n=[],o=t;for(let i of r){let a=`\u27E6KEEP_${n.length}\u27E7`,s=o.split(i);s.length!==1&&(o=s.join(a),n.push({placeholder:a,token:i,count:s.length-1}))}return{text:o,restore(i){let a=String(i||"");for(let{placeholder:s,token:l,count:d}of n){let p=a.split(s);if(p.length-1!==d)throw new Error("\u8BD1\u6587\u9057\u6F0F\u6216\u91CD\u590D\u4E86\u516C\u5F0F\u6216\u5F15\u7528\u6807\u8BB0\uFF0C\u8BF7\u91CD\u8BD5\u672C\u6BB5\u3002");a=p.join(l)}if(/⟦KEEP_\d+⟧/u.test(a))throw new Error("\u8BD1\u6587\u5305\u542B\u65E0\u6CD5\u5BF9\u5E94\u7684\u516C\u5F0F\u6807\u8BB0\uFF0C\u8BF7\u91CD\u8BD5\u672C\u6BB5\u3002");return a}}}async function gf(t,e){if(!globalThis.crypto?.subtle)return null;let r=new TextEncoder().encode(JSON.stringify([bd,t.documentId,e,"zh-CN",t.model?.provider,t.model?.model,t.model?.promptVersion,Qn(t.glossary)])),n=await crypto.subtle.digest("SHA-256",r);return`${t.documentId}:${Array.from(new Uint8Array(n),o=>o.toString(16).padStart(2,"0")).join("")}`}var ui=class{constructor({translate:e,cache:r,onChange:n=()=>{},onModelChanged:o=()=>{},prefetchDelay:i=700,requestTimeout:a=12e4}){this.translate=e,this.cache=r,this.onChange=n,this.onModelChanged=o,this.prefetchDelay=i,this.requestTimeout=a,this.sources=new Map,this.entries=new Map,this.jobs=new Map,this.preparing=new Map,this.epoch=0,this.sequence=0,this.activePage=1,this.visibleIds=new Set,this.config={},this.disposed=!1}configure(e){if(this.disposed)return;let r={...e,glossary:Qn(e.glossary)},n=JSON.stringify([r.documentId,r.model,r.glossary,bd]),o=n!==this.namespace;if(o){let i=this.config.documentId;this.epoch+=1,this.abortJobs(),i&&i!==r.documentId&&this.sources.clear(),this.entries.clear(),this.preparing.clear(),this.namespace=n,this.cacheIssue=""}if(this.config=r,(!r.enabled||!r.canTranslate)&&this.abortJobs(),r.prefetch===!1)for(let i of[...this.jobs.values()])i.page!==this.activePage&&this.abortJob(i);if(o)for(let[i,a]of this.sources)this.registerPage(i,a);this.emit(),this.pump()}setFocus(e,r=[]){if(!this.disposed){if(e!==this.activePage){this.activePage=e,this.prefetchAfter=Date.now()+this.prefetchDelay,clearTimeout(this.timer),this.timer=null;for(let n of[...this.jobs.values()])n.page!==e&&this.abortJob(n);for(let n of this.sources.keys())if(Math.abs(n-e)>3){this.sources.delete(n);for(let[o,i]of this.entries)i.page===n&&this.entries.delete(o)}}this.visibleIds=new Set(r),this.emit(),this.pump()}}registerPage(e,r){if(this.disposed)return;this.sources.set(e,r);let n=[];for(let[o,i]of(r.segments||[]).entries()){let a=i.id||`p${e}-s${o}`,s=`${e}:${a}`,l=this.entries.get(s);if(l?.src===i.src&&l.sourceNeedsReview===i.sourceNeedsReview)continue;let d={...i,id:a,uid:s,index:o,page:e,status:"checking",zh:"",cached:!1};this.entries.set(s,d),i.sourceNeedsReview?d.status="source-review":n.push(d)}if(n.length){let o=Symbol(),i=this.epoch;this.preparing.set(e,o),Promise.all(n.map(a=>this.prepare(a,i))).finally(()=>{this.preparing.get(e)===o&&(this.preparing.delete(e),this.pump())})}this.emit()}fresh(e,r){return!this.disposed&&r===this.epoch&&this.entries.get(e.uid)===e}async prepare(e,r){try{let n=e.src.replace(/\s/gu,"");if(n&&(n.match(/[\u3400-\u9fff]/gu)||[]).length/n.length>=.55){e.zh=e.src,e.status="done",e.passthrough=!0,this.emit();return}if(e.key=await gf(this.config,e.src),!this.fresh(e,r))return;let o=e.key&&await this.cache?.get(e.key);if(!this.fresh(e,r))return;typeof o?.zh=="string"&&o.zh.trim()?(e.zh=o.zh,e.cached=!0,e.status="done"):e.status="queued"}catch{if(!this.fresh(e,r))return;e.status="queued",this.cacheIssue="\u672C\u5730\u7F13\u5B58\u6682\u4E0D\u53EF\u7528\uFF0C\u672C\u6B21\u8BD1\u6587\u4ECD\u53EF\u9605\u8BFB\u3002"}this.emit(),this.pump()}abortJob(e){clearTimeout(e.timeout),e.controller.abort(),this.jobs.delete(e.id);for(let r of e.entries)this.entries.get(r.uid)===r&&r.job===e.id&&(r.status="queued")}abortJobs(){clearTimeout(this.timer),this.timer=null;for(let e of[...this.jobs.values()])this.abortJob(e)}pump(){if(!(this.disposed||!this.config.enabled||!this.config.canTranslate||!this.config.documentId))for(;this.jobs.size<2;){let e=[...this.entries.values()].filter(d=>d.page===this.activePage),r=e.some(d=>d.status==="queued"||d.status==="checking"||d.status==="loading"),n=[...this.entries.values()].filter(d=>d.status==="queued"&&!this.preparing.has(d.page)&&(d.page===this.activePage||this.config.prefetch!==!1&&!r&&d.page===this.activePage+1)).sort((d,p)=>d.page-this.activePage-(p.page-this.activePage)||Number(this.visibleIds.has(p.id))-Number(this.visibleIds.has(d.id))||d.index-p.index);if(!n.length)return;let o=n[0];if(o.page!==this.activePage&&Date.now()<(this.prefetchAfter||0)){this.timer||(this.timer=setTimeout(()=>{this.timer=null,this.pump()},this.prefetchAfter-Date.now()));return}let i=[],a=0,s=e.some(d=>d.status==="done")?3:1;for(let d of n){if(d.page!==o.page||i.length>=s||a+d.src.length>3e3&&i.length)break;i.push(d),a+=d.src.length}let l={id:++this.sequence,epoch:this.epoch,controller:new AbortController,page:o.page,entries:i,config:this.config};this.jobs.set(l.id,l);for(let d of i)d.status="loading",d.job=l.id,d.error="";l.timeout=setTimeout(()=>{if(this.jobs.get(l.id)===l){this.abortJob(l);for(let d of i)this.fresh(d,l.epoch)&&(d.status="error",d.error="\u672C\u6BB5\u7FFB\u8BD1\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5\u6216\u7A0D\u540E\u7EE7\u7EED\u3002");this.emit(),this.pump()}},this.requestTimeout),this.emit(),this.run(l)}}async run(e){let r=n=>!e.controller.signal.aborted&&this.fresh(n,e.epoch)&&n.job===e.id;try{let n=this.sources.get(e.page)?.segments||[],o=e.entries.map(d=>ff(d.src,d.protectedTokens)),i=e.entries[0].index,a=n.slice(Math.max(0,i-1),i+e.entries.length+1);i===0&&a.unshift(this.sources.get(e.page-1)?.segments?.at(-1)),i+e.entries.length>=n.length&&a.push(this.sources.get(e.page+1)?.segments?.[0]);let s=a.filter(d=>d&&!d.sourceNeedsReview).map(d=>d.src).join(`
`).slice(0,1200),l=await this.translate(e.entries.map((d,p)=>({id:d.id,text:o[p].text})),{title:e.config.title,context:s,glossary:e.config.glossary,expectedModel:e.config.model,signal:e.controller.signal,includeMetadata:!0});if(l.model&&(l.model.provider!==e.config.model?.provider||l.model.model!==e.config.model?.model)||l.promptVersion&&l.promptVersion!==e.config.model?.promptVersion){let d=new Error("\u9ED8\u8BA4\u6A21\u578B\u5DF2\u53D8\u5316\uFF0C\u8BF7\u5237\u65B0\u7FFB\u8BD1\u670D\u52A1\u3002");throw d.code="MODEL_CHANGED",d}for(let[d,p]of e.entries.entries())if(r(p)){try{let g=l.translations?.[p.id];if(!g?.trim())throw new Error("\u672C\u6BB5\u6CA1\u6709\u8FD4\u56DE\u8BD1\u6587\uFF0C\u8BF7\u91CD\u8BD5\u3002");p.zh=o[d].restore(g),p.status="done",p.cached=!1,p.key&&Promise.resolve(this.cache?.put({key:p.key,bookId:e.config.documentId,zh:p.zh})).catch(()=>{r(p)&&(this.cacheIssue="\u8BD1\u6587\u5DF2\u5B8C\u6210\uFF0C\u4F46\u672C\u5730\u7F13\u5B58\u672A\u80FD\u4FDD\u5B58\u3002",this.emit())})}catch(g){p.status="error",p.error=g.message}this.emit()}}catch(n){for(let o of e.entries)r(o)&&(o.status="error",o.error=n.message||"\u672C\u6BB5\u7FFB\u8BD1\u5931\u8D25\u3002");!e.controller.signal.aborted&&e.epoch===this.epoch&&n.code==="MODEL_CHANGED"&&this.onModelChanged()}finally{clearTimeout(e.timeout),this.jobs.delete(e.id),this.disposed||(this.emit(),this.pump())}}retry(e,r){if(e===this.activePage)for(let n of[...this.jobs.values()])n.page!==e&&this.abortJob(n);for(let n of this.entries.values())if(n.page===e&&(r?n.id===r:n.status==="error")){if(n.status==="loading"||n.status==="checking"||n.sourceNeedsReview)continue;n.status="queued",n.error="",n.cached=!1}this.emit(),this.pump()}emit(){if(this.disposed)return;let e={};for(let r of this.entries.values())(e[r.page]||=[]).push({...r});for(let r of Object.values(e))r.sort((n,o)=>n.index-o.index);this.onChange({pages:e,cacheIssue:this.cacheIssue||""})}dispose(){this.disposed=!0,this.abortJobs(),this.sources.clear(),this.entries.clear()}};var Ne=require("react/jsx-runtime");function xd({page:t,source:e,rows:r=[],activeId:n,originRef:o,translation:i,onActivate:a,onClose:s}){let l=ea.default.useRef(null),{preferences:d,updatePreferences:p,paused:g,setPaused:u,modelError:h,refreshModel:_,cacheIssue:C,retry:y}=i,[P,E]=ea.default.useState(d.glossary||"");ea.default.useEffect(()=>E(d.glossary||""),[d.glossary]);let v=r.filter(I=>I.status==="done").length,S=r.filter(I=>I.status==="error").length,M=r.filter(I=>I.cached).length,k=r.map(I=>I.status).join(",");ea.default.useEffect(()=>{if(!d.linked||o.current!=="source")return;let I=l.current,b=[...I?.querySelectorAll("[data-translation-segment]")||[]].find(F=>F.dataset.translationSegment===n);if(!I||!b)return;let O=I.getBoundingClientRect(),L=b.getBoundingClientRect();(L.top<O.top+8||L.bottom>O.bottom-8)&&(I.scrollTop+=L.top-O.top-12)},[t,n,k,d.linked,d.fontSize]);let R=(I,b=!1)=>a(I,{origin:"translation",reveal:b});return(0,Ne.jsxs)("aside",{className:"dshr-pdf-translation-panel","aria-label":"PDF \u4E2D\u6587\u5BF9\u7167",style:{"--dshr-translation-font-size":`${d.fontSize||16}px`},children:[(0,Ne.jsxs)("header",{className:"dshr-pdf-translation-header",children:[(0,Ne.jsxs)("div",{children:[(0,Ne.jsx)("strong",{children:"\u4E2D\u6587\u5BF9\u7167"}),(0,Ne.jsxs)("span",{children:["\u7B2C ",t," \u9875 \xB7 ",v,"/",r.length," \u6BB5",M?` \xB7 \u7F13\u5B58 ${M} \u6BB5`:""]})]}),(0,Ne.jsx)("button",{type:"button","aria-label":"\u5173\u95ED\u8BD1\u6587\u4FA7\u680F",title:"\u5173\u95ED\u8BD1\u6587\u4FA7\u680F",onClick:s,children:"\xD7"})]}),(0,Ne.jsxs)("div",{className:"dshr-pdf-translation-controls",children:[(0,Ne.jsx)("button",{type:"button",onClick:()=>u(!g),children:g?"\u7EE7\u7EED\u7FFB\u8BD1":"\u6682\u505C\u7FFB\u8BD1"}),(0,Ne.jsxs)("label",{children:[(0,Ne.jsx)("input",{type:"checkbox",checked:d.linked!==!1,onChange:I=>p({linked:I.target.checked})}),"\u6BB5\u843D\u8054\u52A8"]}),(0,Ne.jsx)("button",{type:"button","aria-label":"\u7F29\u5C0F\u8BD1\u6587\u5B57\u53F7",disabled:d.fontSize<=12,onClick:()=>p({fontSize:Math.max(12,d.fontSize-1)}),children:"A\u2212"}),(0,Ne.jsx)("span",{className:"dshr-pdf-translation-font",children:d.fontSize||16}),(0,Ne.jsx)("button",{type:"button","aria-label":"\u653E\u5927\u8BD1\u6587\u5B57\u53F7",disabled:d.fontSize>=24,onClick:()=>p({fontSize:Math.min(24,d.fontSize+1)}),children:"A\uFF0B"})]}),(0,Ne.jsxs)("div",{className:"dshr-pdf-translation-options",children:[(0,Ne.jsxs)("label",{children:[(0,Ne.jsx)("input",{type:"checkbox",checked:!!d.showSource,onChange:I=>p({showSource:I.target.checked})}),"\u663E\u793A\u539F\u6587"]}),(0,Ne.jsxs)("label",{children:[(0,Ne.jsx)("input",{type:"checkbox",checked:d.prefetch!==!1,onChange:I=>p({prefetch:I.target.checked})}),"\u9884\u8BD1\u4E0B\u4E00\u9875"]})]}),(0,Ne.jsxs)("details",{className:"dshr-pdf-glossary",children:[(0,Ne.jsxs)("summary",{children:["\u6587\u6863\u672F\u8BED\u8868",d.glossary?" \xB7 \u5DF2\u542F\u7528":""]}),(0,Ne.jsxs)("label",{children:["\u6BCF\u884C\u586B\u5199\u201C\u539F\u8BCD = \u4E2D\u6587\u8BD1\u6CD5\u201D",(0,Ne.jsx)("textarea",{"aria-label":"\u6587\u6863\u672F\u8BED\u8868",maxLength:4e3,value:P,placeholder:`band gap = \u5E26\u9699
gate = \u6805\u6781`,onChange:I=>E(I.target.value)})]}),(0,Ne.jsx)("button",{type:"button",disabled:Qn(P)===d.glossary,onClick:()=>p({glossary:Qn(P)}),children:"\u5E94\u7528\u5E76\u66F4\u65B0\u8BD1\u6587"})]}),h&&(!r.length||r.some(I=>I.status!=="done"))&&e?.segments.length!==0?(0,Ne.jsxs)("div",{className:"dshr-pdf-translation-notice",role:"status",children:[h,(0,Ne.jsx)("button",{type:"button",onClick:_,children:"\u5237\u65B0\u670D\u52A1"})]}):null,C?(0,Ne.jsx)("div",{className:"dshr-pdf-translation-notice",role:"status",children:C}):null,g?(0,Ne.jsx)("div",{className:"dshr-pdf-translation-notice",role:"status",children:"\u5DF2\u6682\u505C\uFF0C\u5DF2\u5B8C\u6210\u7684\u8BD1\u6587\u4ECD\u53EF\u9605\u8BFB\u3002"}):null,(0,Ne.jsxs)("div",{className:"dshr-pdf-translation-list",ref:l,tabIndex:0,"aria-label":`\u7B2C ${t} \u9875\u8BD1\u6587`,onWheel:()=>{o.current="translation"},children:[e?e.segments.length===0?(0,Ne.jsx)("p",{className:"dshr-pdf-translation-empty",children:"\u6B64\u9875\u6CA1\u6709\u53EF\u63D0\u53D6\u7684\u6587\u5B57\uFF0C\u53EF\u80FD\u662F\u626B\u63CF\u9875\u6216\u56FE\u7247\u9875\u3002"}):null:(0,Ne.jsx)("p",{className:"dshr-pdf-translation-empty",children:"\u6B63\u5728\u63D0\u53D6\u5F53\u524D\u9875\u6BB5\u843D\u2026"}),(e?.segments||[]).map(I=>{let b=I.sourceNeedsReview?{status:"source-review"}:r.find(O=>O.id===I.id)||{status:"queued"};return(0,Ne.jsxs)("article",{"data-translation-segment":I.id,"data-status":b.status,className:`dshr-pdf-translation-paragraph${n===I.id&&d.linked!==!1?" is-linked":""}`,onPointerEnter:()=>{d.linked!==!1&&R(I.id)},children:[(0,Ne.jsxs)("div",{className:"dshr-pdf-translation-paragraph-head",children:[(0,Ne.jsxs)("span",{children:["\u6BB5\u843D ",Number(I.id.split("-s").at(-1))+1,b.cached?" \xB7 \u7F13\u5B58":""]}),(0,Ne.jsxs)("div",{children:[(0,Ne.jsx)("button",{type:"button","aria-label":`\u5B9A\u4F4D\u6BB5\u843D ${I.id}`,onClick:()=>R(I.id,!0),children:"\u5B9A\u4F4D\u539F\u6587"}),b.status==="done"&&!b.passthrough?(0,Ne.jsx)("button",{type:"button","aria-label":`\u91CD\u65B0\u7FFB\u8BD1\u6BB5\u843D ${I.id}`,onClick:()=>y(t,I.id),children:"\u91CD\u8BD1\u672C\u6BB5"}):null]})]}),d.showSource?(0,Ne.jsx)("p",{className:"dshr-pdf-translation-original",children:I.src}):null,b.zh?(0,Ne.jsx)("p",{className:"dshr-pdf-translation-result",children:b.zh}):null,b.status==="done"?null:b.status==="source-review"?(0,Ne.jsx)("p",{className:"dshr-pdf-translation-waiting",role:"status",children:"\u672C\u6BB5\u542B\u65E0\u6CD5\u786E\u8BA4\u7684 PDF \u5B57\u7B26\u3002\u8BF7\u9009\u62E9\u201C\u5B9A\u4F4D\u539F\u6587\u201D\uFF0C\u5728\u9875\u9762\u56FE\u50CF\u4E0A\u6838\u5BF9\u3002"}):b.status==="error"?(0,Ne.jsxs)("div",{className:"dshr-pdf-translation-segment-error",children:[(0,Ne.jsx)("p",{children:b.error}),(0,Ne.jsx)("button",{type:"button",onClick:()=>y(t,I.id),children:"\u91CD\u8BD5\u672C\u6BB5"})]}):(0,Ne.jsx)("p",{className:"dshr-pdf-translation-waiting",role:"status",children:g?"\u7B49\u5F85\u7EE7\u7EED\u7FFB\u8BD1":b.status==="loading"?"\u6B63\u5728\u7FFB\u8BD1\u672C\u6BB5\u2026":b.status==="checking"?"\u6B63\u5728\u8BFB\u53D6\u5DF2\u6709\u8BD1\u6587\u2026":"\u7B49\u5F85\u7FFB\u8BD1\u2026"})]},I.id)})]}),(0,Ne.jsxs)("footer",{className:"dshr-pdf-translation-footer",children:[(0,Ne.jsx)("span",{children:"\u60AC\u505C\u5BF9\u7167\u6BB5\u843D\uFF0C\u70B9\u51FB\u201C\u5B9A\u4F4D\u539F\u6587\u201D\u8FD4\u56DE\u51FA\u5904\u3002"}),S?(0,Ne.jsxs)("button",{type:"button",onClick:()=>y(t),children:["\u91CD\u8BD5\u5931\u8D25\u6BB5\u843D\uFF08",S,"\uFF09"]}):null]})]})}var Ar=Lt(require("react"),1);var ks={glossary:"",fontSize:16,prefetch:!0,showSource:!1,linked:!0};function vd({documentId:t,title:e,enabled:r,activePage:n,sources:o,visibleIds:i}){let[a,s]=Ar.default.useState({documentId:"",pages:{},cacheIssue:""}),[l,d]=Ar.default.useState({...ks,documentId:""}),[p,g]=Ar.default.useState(null),[u,h]=Ar.default.useState(""),[_,C]=Ar.default.useState(0),[y,P]=Ar.default.useState(!1),E=Ar.default.useRef(null);return Ar.default.useEffect(()=>{if(!t)return;let v=!0;s({documentId:t,pages:{},cacheIssue:""}),P(!1);let S=new ui({translate:yo,cache:{get:Tc,put:Ec},onChange:M=>{v&&s({documentId:t,...M})},onModelChanged:()=>{v&&C(M=>M+1)}});return E.current={documentId:t,controller:S},Ac(t).catch(()=>({})).then(M=>{v&&d({...ks,...M,documentId:t,glossary:Qn(M.glossary),fontSize:Math.max(12,Math.min(24,Number(M.fontSize)||16))})}),()=>{v=!1,S.dispose(),E.current?.controller===S&&(E.current=null)}},[t]),Ar.default.useEffect(()=>{if(!t)return;let v=new AbortController;h(""),qc({signal:v.signal}).then(k=>{v.signal.aborted||(g({...k,documentId:t}),k.ready||h("\u7FFB\u8BD1\u6A21\u578B\u672A\u5C31\u7EEA\uFF0C\u8BF7\u5728 DSH \u8BBE\u7F6E\u4E2D\u9009\u62E9\u9ED8\u8BA4\u6A21\u578B\u3002"))}).catch(k=>{v.signal.aborted||(h(k.message||"\u7FFB\u8BD1\u670D\u52A1\u4E0D\u53EF\u7528\u3002"),g({documentId:t,ready:!1}))});let S=()=>{document.visibilityState==="visible"&&C(k=>k+1)},M=setInterval(S,6e4);return document.addEventListener("visibilitychange",S),()=>{v.abort(),clearInterval(M),document.removeEventListener("visibilitychange",S)}},[t,_]),Ar.default.useEffect(()=>{let v=E.current;if(!(!v||v.documentId!==t||l.documentId!==t||p?.documentId!==t)){v.controller.configure({documentId:t,title:e,enabled:r&&!y,canTranslate:!!p.ready,model:{provider:p.provider||"",model:p.model||"",promptVersion:p.promptVersion||""},glossary:l.glossary,prefetch:l.prefetch}),v.controller.setFocus(n,i);for(let[S,M]of Object.entries(o))Math.abs(Number(S)-n)<=3&&v.controller.registerPage(Number(S),M)}},[t,e,r,y,l.glossary,l.prefetch,l.documentId,p,n,i,o]),Ar.default.useEffect(()=>{t&&l.documentId===t&&Nc(t,l).catch(()=>{})},[t,l]),{...a.documentId===t?a:{pages:{},cacheIssue:""},preferences:l.documentId===t?l:ks,paused:y,model:p?.documentId===t?p:null,modelError:u,setPaused:P,refreshModel:()=>C(v=>v+1),updatePreferences:v=>d(S=>({...S,...v})),retry:(v,S)=>E.current?.controller.retry(v,S)}}var yd=Lt(require("react"),1);var Jn=require("react/jsx-runtime");function hi(t){let e=Number(t);return Number.isFinite(e)?Math.min(1,Math.max(0,e)):0}function mf(t,e){typeof t=="function"&&t(e)}function wd({annotations:t,onOpenAnnotation:e,page:r}){let n=yd.default.useRef(e);n.current=e;let o=Array.isArray(t)?t:[],i=[];for(let a=0;a<o.length;a+=1){let s=o[a];if(!s||!Array.isArray(s.rects)||s.rects.length===0||s.kind&&s.kind!=="pdf"||r!=null&&s.page!=null&&Number(s.page)!==Number(r))continue;let l=s.style==="underline"||s.style==="note"?s.style:"highlight",d=s.color||"#f5d76e",p=s.id==null?"":String(s.id),g=ni(`${p}|${s.createdAt||0}`),u=ti(s.width),h=ai(s),_=l==="note"||typeof s.note=="string"&&s.note.trim().length>0,C=null;for(let y=0;y<s.rects.length;y+=1){let P=s.rects[y];if(!P||typeof P!="object")continue;let E=hi(P.x),v=hi(P.y),S=Math.min(hi(P.w),1-E),M=Math.min(hi(P.h),1-v);if(!(S>.002)||!(M>.001))continue;C={x:E,y:v,width:S,height:M};let k=`${p}:${y}`;if(l==="underline")i.push((0,Jn.jsx)("svg",{className:"dshr-anno-pdf-underline",style:{left:`${E*100}%`,top:`calc(${(v+M)*100}% - 4px)`,width:`${S*100}%`,height:"5px","--dshr-anno-color":d},viewBox:"0 0 100 6",preserveAspectRatio:"none","data-anno-id":p,"aria-hidden":"true",focusable:"false",children:(0,Jn.jsx)("path",{d:oi(g,100)})},`u:${k}`));else{let R=Math.max(M*u,.004),I=v+M*ri(u);i.push((0,Jn.jsx)("span",{className:"dshr-anno-pdf-band",style:{left:`${E*100}%`,top:`${I*100}%`,width:`${S*100}%`,height:`${R*100}%`,"--dshr-anno-color":d},"data-anno-id":p,"aria-hidden":"true"},`b:${k}`))}}if(_&&C){let y=C.x+C.width,P=Math.min(Math.max(.005,y+.004),.972),E=Math.max(.004,C.y);i.push((0,Jn.jsx)("button",{type:"button",className:"dshr-anno-note-btn",style:{left:`${P*100}%`,top:`${E*100}%`,"--dshr-anno-color":d},"data-anno-id":p,title:h?`\u67E5\u770B\u6279\u6CE8\uFF1A${h}`:"\u67E5\u770B\u6279\u6CE8","aria-label":h?`\u67E5\u770B\u6279\u6CE8\uFF1A${h}`:"\u67E5\u770B\u6279\u6CE8",onMouseDown:v=>v.preventDefault(),onClick:()=>mf(n.current,p),children:(0,Jn.jsx)(Mn,{size:12})},`n:${p}`))}}return(0,Jn.jsx)("div",{className:"dshr-anno-pdf-layer","data-anno-layer":"pdf",children:i})}var _d=t=>String(t??"").replace(/\s+/gu," ").trim();function kd(t,e,r,n){if(!e?.contains(t.startContainer)||!e.contains(t.endContainer))return null;let o=t.cloneRange();o.selectNodeContents(e),o.setEnd(t.startContainer,t.startOffset);let i=o.toString().length,a=i+t.toString().length,s=a>i&&Sd(e,i,a),l=s?Yo(s,r):[];return pi(l)?{version:1,page:n,start:i,end:a,rects:l}:null}function pi(t){return Array.isArray(t)&&t.length>0&&t.every(e=>e&&[e.x,e.y,e.w,e.h].every(Number.isFinite)&&e.x>=0&&e.y>=0&&e.w>0&&e.h>0&&e.x+e.w<=1.0001&&e.y+e.h<=1.0001)}function bf(t,e){return!pi(t)||!pi(e)||t.length!==e.length?!1:t.every((r,n)=>{let o=e[n],i=r.x+r.w/2,a=r.y+r.h/2,s=o.x+o.w/2,l=o.y+o.h/2;return Math.abs(i-s)<=Math.min(.012,r.w/3)&&Math.abs(a-l)<=Math.min(.012,r.h/3)})}function Sd(t,e,r){let n=t.ownerDocument,o=n.createTreeWalker(t,4),i=0,a=null,s=0;for(let l=o.nextNode();l;l=o.nextNode()){let d=i+l.length;if(!a&&e<d&&(a=l,s=e-i),a&&r<=d){let p=n.createRange();return p.setStart(a,s),p.setEnd(l,r-i),p}i=d}return null}function xf(t){let e=t.cloneContents();for(let r of e.querySelectorAll("br"))r.replaceWith(`
`);return _d(e.textContent)}function Td(t,e,r){if(!r||t?.version!==1||t.page!==Number(r.dataset.page)||!Number.isSafeInteger(t.start)||!Number.isSafeInteger(t.end)||t.start<0||t.end<=t.start||!pi(t.rects))return null;let n=r.querySelector(".dshr-pdf-text-layer"),o=n&&Sd(n,t.start,t.end);if(!o)return null;let i=xf(o);if(!i||i!==_d(e))return null;let a=Yo(o,r);return bf(t.rects,a)?a:null}var ke=require("react/jsx-runtime"),Md=gd+md;var{useCallback:Ed,useEffect:$t,useLayoutEffect:Ss,useMemo:Ts,useRef:Ce,useState:Ft}=ra.default,Cs=612,Is=792,Es=.1,As=5,Ad=1.2,vf=32,yf="1000px 0px",wf=1e7,Nd=8192,_f=2,Ns=128,kf=160,Sf=600;function Hr(t,e,r){return Math.min(r,Math.max(e,t))}function Tf(t){if(t.items.length<=Ns)return t;let e=0,r=!1;return new ReadableStream({async pull(n){if(await new Promise(i=>setTimeout(i,0)),r)return;let o=Math.min(e+Ns,t.items.length);n.enqueue({items:t.items.slice(e,o),styles:e===0?t.styles:void 0,lang:t.lang}),e=o,e===t.items.length&&n.close()},cancel(){r=!0}})}function fi(t,e,r,n,o=0){let i=t&&Number.isFinite(t.width)&&t.width>0?t.width:Cs,a=t&&Number.isFinite(t.height)&&t.height>0?t.height:Is,s;if((e==="fit"||e==="page")&&n>0){if(s=Math.max(1,Math.floor(n)),e==="page"&&o>0){let p=Math.floor(i/a*Math.max(1,o-36));s=Math.max(1,Math.min(s,p))}}else s=Math.max(1,Math.floor(i*Hr(r,Es,As)));let l=s/i,d=Math.max(1,Math.floor(a*l));return{width:s,height:d,pageScale:l}}function ta(t,e,r=wf){let n=e&&Number.isFinite(e.width)&&e.width>0?e.width:Cs,o=e&&Number.isFinite(e.height)&&e.height>0?e.height:Is,i=Math.min(Math.max(globalThis.devicePixelRatio||1,1),2),a=t*i,s=n*o*a*a;s>r&&(a*=Math.sqrt(r/s));let l=Math.max(n,o)*a;return l>Nd&&(a*=Nd/l),Math.max(Number.EPSILON,a)}function Cd(t){let e=t&&t.name;return e==="RenderingCancelledException"||e==="AbortException"||e==="AbortError"||e==="WorkerTaskCancelled"}function Id(t){let e=t&&t.name,r=t&&t.message?String(t.message):String(t||"");return e==="PasswordException"?"\u8BE5 PDF \u5DF2\u52A0\u5BC6\uFF0C\u9700\u8981\u5BC6\u7801\u624D\u80FD\u6253\u5F00\u3002":e==="InvalidPDFException"?"\u6587\u4EF6\u4E0D\u662F\u6709\u6548\u7684 PDF\uFF0C\u6216\u8005\u5DF2\u7ECF\u635F\u574F\u3002":e==="MissingPDFException"?"\u6CA1\u6709\u627E\u5230 PDF \u6570\u636E\u3002":e==="UnexpectedResponseException"?`PDF \u6570\u636E\u8BFB\u53D6\u5931\u8D25${r?`\uFF1A${r}`:"\u3002"} `:/dynamically imported module|Importing a module script failed|Failed to fetch|error loading|Cannot find module/i.test(r)?"PDF \u5F15\u64CE\u52A0\u8F7D\u5931\u8D25\uFF08/dsh-reader-assets/pdf.bundle.js\uFF09\u3002\u8BF7\u786E\u8BA4 Host \u5DF2\u6B63\u786E\u63D0\u4F9B\u9759\u6001\u8D44\u6E90\u540E\u91CD\u8BD5\u3002":r?`PDF \u52A0\u8F7D\u5931\u8D25\uFF1A${r}`:"PDF \u52A0\u8F7D\u5931\u8D25\u3002"}function Rd(t){if(!t)return null;let e=t.nodeType===1?t:t.parentElement;if(!e||typeof e.closest!="function")return null;let r=e.closest("[data-page]");if(!r)return null;let n=Number(r.getAttribute("data-page"));return Number.isFinite(n)?n:null}function Ef(t){if(!t||t.rangeCount===0)return null;let e=t.getRangeAt(0),r=typeof e.getClientRects=="function"?e.getClientRects():null;if(!r||r.length===0){let s=e.getBoundingClientRect();return s&&(s.width||s.height)?s:null}if(r.length===1)return r[0];let n=1/0,o=1/0,i=-1/0,a=-1/0;for(let s=0;s<r.length;s+=1){let l=r[s];!l||!l.width&&!l.height||(n=Math.min(n,l.left),o=Math.min(o,l.top),i=Math.max(i,l.right),a=Math.max(a,l.bottom))}if(!Number.isFinite(n))return e.getBoundingClientRect();try{return new DOMRect(n,o,Math.max(0,i-n),Math.max(0,a-o))}catch{return e.getBoundingClientRect()}}function Pd(t){let e=vf,r=t.querySelector(".dshr-pdf-content");if(r){let n=getComputedStyle(r),o=Number.parseFloat(n.paddingLeft)||0,i=Number.parseFloat(n.paddingRight)||0;e=o+i}return Math.max(120,t.clientWidth-e)}var Af=ra.default.memo(function({pageNumber:e,dim:r,mode:n,scale:o,viewportWidth:i,viewportHeight:a,rendered:s,active:l=!0,registerPageElement:d,registerFrameElement:p,annotations:g,onOpenAnnotation:u,evidenceRects:h}){let _=fi(r,n,o,i,a),C=ra.default.useCallback(P=>d(e,P),[e,d]),y=ra.default.useCallback(P=>p(e,P),[e,p]);return(0,ke.jsx)("div",{className:"dshr-pdf-page","data-page":e,"data-active":l?"true":"false",style:l?void 0:{display:"none"},ref:C,children:(0,ke.jsx)("div",{className:"dshr-pdf-page-col",style:{width:`${_.width}px`},children:(0,ke.jsxs)("div",{className:"dshr-pdf-frame","data-page":e,"data-rendered":s?"true":"false",style:{width:`${_.width}px`,height:`${_.height}px`,"--total-scale-factor":String(_.pageScale)},ref:y,children:[(0,ke.jsx)("div",{className:"dshr-pdf-placeholder","aria-hidden":"true",children:e}),(0,ke.jsx)("canvas",{className:"dshr-pdf-canvas",width:1,height:1}),(0,ke.jsx)("div",{className:"dshr-pdf-text-layer"}),(0,ke.jsx)(wd,{annotations:g,onOpenAnnotation:u}),h?(0,ke.jsx)("div",{className:"dshr-pdf-evidence-mark","aria-hidden":"true",children:h.map((P,E)=>(0,ke.jsx)("i",{style:{left:`${P.x*100}%`,top:`${P.y*100}%`,width:`${P.w*100}%`,height:`${P.h*100}%`}},E))}):null,(0,ke.jsx)("div",{className:"dshr-pdf-page-loading","aria-hidden":"true",children:(0,ke.jsx)("span",{className:"dshr-pdf-spinner"})})]})})})});function Od({data:t,documentId:e="",fileName:r="",renderImmersiveToolbar:n,renderTopbar:o,sidePanels:i,initialPage:a=1,autoTranslate:s=!1,pageTranslations:l,onReady:d,onPageChange:p,onPageText:g,onSelection:u,onRetryTranslation:h,annotations:_=[],onOpenAnnotation:C,focusAnnotation:y,focusEvidence:P,onEvidenceLocated:E,hideTranslations:v=!1,paged:S=!1,onHideTranslations:M}){let k=Ce(null);k.current={autoTranslate:s,paged:S,onReady:d,onPageChange:p,onPageText:g,onSelection:u,onRetryTranslation:h,onOpenAnnotation:C};let R=Ce(null),I=Ce(null),b=Ce(new Map),O=Ce(new Map),L=Ce(new Map),F=Ce(new Map),$=Ce({width:Cs,height:Is}),J=Ce(new Map),te=Ce(new Set),ie=Ce([]),ue=Ce(new Set),U=Ce(null),se=Ce(null),Y=Ce(null),T=Ce(new li),q=Ce(0),re=Ce(!1),me=Ce("fit"),ne=Ce(1),Te=Ce(0),Xe=Ce(0),Ee=Ce(!1),$e=Ce(0),_e=Ce(1),Tt=Ce(!!s),f=Ce([]),c=Ce(new Set),w=Ce(0),x=Ce(0),V=Ce(0),de=Ce(0),he=Ce(null),ye=Ce(0),we=Ce(null),Ve=Ce(!1),Me=Ce(""),Ye=Ce(0),st=Ce(!1),et=Ce(!1),je=Ce(!1),[pe,Le]=Ft("loading"),[It,lt]=Ft(null),[Ze,wt]=Ft(null),[Qe,lr]=Ft(0),[Mt,Bt]=Ft({}),[_r,oe]=Ft(null),[be,Ie]=Ft("fit"),[Pe,ct]=Ft(1),[Ot,cr]=Ft(0),[Et,mt]=Ft(0),[bt,hn]=Ft(!1),[De,pn]=Ft(Hr(Number.parseInt(a,10)||1,1,999999)),[pr,dr]=Ft({}),[ho,Ut]=Ft(""),[kr,xt]=Ft(!1),[po,fr]=Ft(0),[qt,Xt]=Ft({}),[An,fo]=Ft(null),[go,zn]=Ft([]),[Vr,xe]=Ft(null),[A,Q]=Ft(!1),ce=Ce(null),rt=Ce("source"),gt=s&&!v&&!A,He=vd({documentId:e,title:r,enabled:gt,activePage:De,sources:qt,visibleIds:go}),At=Ce(null);At.current=He.pages;let ut=Ce(!1);ut.current=gt;let gr=Ce(!1);gr.current=gt&&He.preferences.linked!==!1,ce.current=Vr;let Yt=Ts(()=>{let m=new ci(Qe,fi(_r,bt?"page":be,Pe,Ot,Et).height);for(let[D,B]of Object.entries(Mt))m.setHeight(Number(D),fi(B,bt?"page":be,Pe,Ot,Et).height);return m.paddingTop=he.current?.paddingTop??18,m},[Qe,_r,Mt,bt,be,Pe,Ot,Et]);he.current=Yt,Ss(()=>{let m=we.current;we.current=null,m&&m.revision===ye.current&&!S&&Na(m.anchor)},[Yt,S]),$t(()=>{s&&!v&&Q(!1)},[s,v]);function Rt(m,D){J.current.set(m,D),Xt(B=>B[m]===D?B:Object.fromEntries(Object.entries({...B,[m]:D}).filter(([W])=>Math.abs(Number(W)-_e.current)<=3)))}function Bn(m,D){return[...m?.querySelectorAll("[data-pdf-segments]")||[]].filter(B=>B.dataset.pdfSegments.split("|").includes(D))}function fn(m,{origin:D="source",reveal:B=!1}={},W=_e.current){if(rt.current=D,xe(Ue=>Ue?.page===W&&Ue.id===m?Ue:{page:W,id:m}),D==="source"&&W!==_e.current&&Kr(W),!B)return;let ae=I.current,ee=Bn(O.current.get(W),m)[0];if(!ae||!ee)return;let Ae=ee.getBoundingClientRect(),Ke=ae.getBoundingClientRect();(Ae.top<Ke.top+12||Ae.bottom>Ke.bottom-12)&&ae.scrollTo({top:Math.max(0,ae.scrollTop+Ae.top-Ke.top-28),behavior:"auto"})}function Fo(){if(!ut.current)return;let m=I.current,D=O.current.get(_e.current);if(!m||!D)return;let B=m.getBoundingClientRect(),W=new Set;for(let Ae of D.querySelectorAll("[data-pdf-segments]")){let Ke=Ae.getBoundingClientRect();if(Ke.bottom>B.top+4&&Ke.top<B.bottom-4)for(let Ue of Ae.dataset.pdfSegments.split("|"))W.add(Ue)}let ae=[...W];zn(Ae=>Ae.join("|")===ae.join("|")?Ae:ae);let ee=ce.current;ae.length&&(!ee||ee.page!==_e.current||!W.has(ee.id)&&rt.current==="source")&&fn(ae[0])}$t(()=>{for(let m of O.current.values())for(let D of m.querySelectorAll("[data-pdf-segments]"))gr.current&&Number(m.dataset.page)===Vr?.page&&D.dataset.pdfSegments.split("|").includes(Vr.id)?D.dataset.pdfLinked="true":delete D.dataset.pdfLinked},[Vr,pr,qt,gt,He.preferences.linked]),$t(()=>{if(pe!=="ready")return;let m=requestAnimationFrame(Fo);return()=>cancelAnimationFrame(m)},[De,pe,qt,gt]),$t(()=>{if(!e||!gt||He.paused||He.preferences.prefetch===!1||pe!=="ready"||!pr[De]||De>=Qe)return;let m=!1,D=q.current,B=De+1,W=setTimeout(async()=>{if(!(w.current>0))try{let ae=await se.current?.getPage(B);if(!ae||m)return;let ee=await ae.getTextContent();if(m||D!==q.current)return;Rt(B,_s(ee.items,B,ae.getViewport({scale:1}).width))}catch{}},850);return()=>{m=!0,clearTimeout(W)}},[e,De,Qe,pe,gt,He.paused,He.preferences.prefetch,pr]),Tt.current=!!s,me.current=be,ne.current=Pe,Te.current=Ot,Xe.current=Et,Ee.current=bt,$e.current=Qe,_r&&($.current=_r);function gn(m){let D=F.current.get(m);return D||$.current}function $n(m){return fi(gn(m),Ee.current?"page":me.current,ne.current,Te.current,Xe.current)}function Hn(m){return $n(m).pageScale}function Ea(m){let D=L.current.get(m);return D||(D={page:null,token:0,wantRender:!1,rendered:!1,rendering:!1,renderTask:null,textLayer:null,textContent:null,grouped:null,lastRenderScale:null,lastRasterScale:0,textLayerReady:!1},L.current.set(m,D)),D}function Un(m,D){dr(B=>{if(D)return B[m]?B:{...B,[m]:!0};if(!B[m])return B;let W={...B};return delete W[m],W})}function zo(m,D,B){if(!(D>0)||!(B>0))return!1;let W=F.current.get(m);return W&&Math.abs(W.width-D)<.05&&Math.abs(W.height-B)<.05?!1:(!we.current&&!k.current?.paged&&(we.current={anchor:bn(),revision:ye.current}),F.current.set(m,{width:D,height:B}),Bt(ae=>({...ae,[m]:{width:D,height:B}})),Wn(),!0)}function mn(){if(k.current?.paged)return;let m=I.current;if(!m)return;let D=m.querySelector(".dshr-pdf-content");D&&he.current&&(he.current.paddingTop=Number.parseFloat(getComputedStyle(D).paddingTop)||0)}function Wn(){V.current||(V.current=requestAnimationFrame(()=>{V.current=0,mn()}))}function Kr(m){if(!Number.isFinite(m)||m===_e.current||(k.current?.paged&&L.current.get(_e.current)?.textLayer?.cancel(),_e.current=m,pn(m),rt.current="source",!je.current))return;let D=k.current&&k.current.onPageChange;D&&D(m)}function Aa(){if(k.current?.paged||!je.current)return;let m=I.current;if(!m)return;let D=he.current;if(!D?.count)return;let B=m.scrollTop+Hr(m.clientHeight*.28,48,240);Kr(D.pageAt(B))}function bn(){if(k.current?.paged||!I.current||!he.current?.count)return null;let m=I.current.scrollTop,D=he.current.entryAt(m+1);return{page:D.page,ratio:Hr((m-D.top)/D.height,0,1)}}function Na(m){!m||k.current?.paged||!I.current||!he.current?.count||(I.current.scrollTop=Math.max(0,he.current.top(m.page)+m.ratio*he.current.height(m.page)))}function Wi(m){requestAnimationFrame(()=>{requestAnimationFrame(()=>{re.current||m()})})}function Dr(m){if(!Tt.current||ue.current.has(m))return;let D=J.current.get(m);if(!D||(ue.current.add(m),!D.text))return;let B=k.current&&k.current.onPageText;B&&B(m,{text:D.text,segments:D.segments.map(W=>({src:W.src}))})}function ji(){te.current.forEach(m=>Dr(m))}function Yr(m,D,B){return!re.current&&B===q.current&&D===m.token&&m.wantRender}async function Gi(m){let D=se.current,B=U.current,W=O.current.get(m);if(!D||!B||!W)return;let ae=q.current,ee=Ea(m),Ae=ee.token+=1;if(ee.renderTask){try{ee.renderTask.cancel()}catch{}ee.renderTask=null}if(ee.textLayer){try{ee.textLayer.cancel()}catch{}ee.textLayer=null}let Ke=W.querySelector("canvas.dshr-pdf-canvas"),Ue=W.querySelector(".dshr-pdf-text-layer");if(!(!Ke||!Ue)){ee.rendering=!0,ee.renderFailed=!1;try{let ze=ee.page;if(!ze){if(ze=await D.getPage(m),!Yr(ee,Ae,ae))return;ee.page=ze}let dt=ze.getViewport({scale:1}),kt=gn(m);(Math.abs(dt.width-kt.width)>.05||Math.abs(dt.height-kt.height)>.05)&&zo(m,dt.width,dt.height);let Ge=$n(m),Sr=gn(m),mr=()=>k.current?.paged?m===_e.current:te.current.has(m),xn=ta(Ge.pageScale,Sr),br=!ee.rendered&&T.current.get(m);br&&(Ke.width=br.bitmap.width,Ke.height=br.bitmap.height,Ke.getContext("2d",{alpha:!1}).drawImage(br.bitmap,0,0),ee.rendered=!0,ee.lastRenderScale=br.scale,ee.lastRasterScale=br.rasterScale,W.dataset.pdfQuality=br.rasterScale>=xn-.002?"full":"preview",R.current&&(R.current.dataset.pdfCacheHits=String((Number(R.current.dataset.pdfCacheHits)||0)+1)),Un(m,!0));let Ca=ee.lastRenderScale===null||Math.abs(ee.lastRenderScale-Ge.pageScale)>=.002,vn=mr()?xn:Math.min(ta(Ge.pageScale,Sr,2e6),Ge.pageScale);if(!ee.rendered||Ca||ee.lastRasterScale<vn-.002){let yt=Math.min(vn,Ge.pageScale),Ia=!ee.rendered&&yt<vn-.002?[yt,vn]:[vn];for(let Gn=0;Gn<Ia.length;Gn++){if(Gn&&(await new Promise(Tr=>setTimeout(Tr,32)),!Yr(ee,Ae,ae)||!mr()))return;let Zr=Ia[Gn],In=ze.getViewport({scale:Zr}),Fr=document.createElement("canvas");Fr.width=Math.max(1,Math.floor(In.width)),Fr.height=Math.max(1,Math.floor(In.height));try{let Tr=ze.render({canvas:Fr,viewport:In,intent:"display",background:"#ffffff"});Tr.onContinue=Zt=>setTimeout(()=>{Yr(ee,Ae,ae)?Zt():Tr.cancel()},mr()?0:16),ee.renderTask=Tr;try{await Tr.promise}finally{ee.renderTask===Tr&&(ee.renderTask=null)}if(!Yr(ee,Ae,ae))return;if(R.current){let Zt=Tr.isWorkerRendering?"pdfWorkerRenders":"pdfMainRenders";R.current.dataset[Zt]=String((Number(R.current.dataset[Zt])||0)+1),R.current.dataset.pdfRenderer=Tr.isWorkerRendering?"worker":"main"}Ke.width=Fr.width,Ke.height=Fr.height;let Ra=Ke.getContext("2d",{alpha:!1});if(!Ra)throw new Error("\u65E0\u6CD5\u521B\u5EFA PDF \u753B\u5E03\u4E0A\u4E0B\u6587");if(Ra.drawImage(Fr,0,0),ee.lastRenderScale=Ge.pageScale,ee.lastRasterScale=Zr,ee.rendered=!0,W.dataset.pdfQuality=Zr>=xn-.002?"full":"preview",Un(m,!0),typeof createImageBitmap=="function")try{let Zt=await createImageBitmap(Fr);if(!Yr(ee,Ae,ae)){Zt.close();return}T.current.set(m,{bitmap:Zt,scale:Ge.pageScale,rasterScale:Zr}),R.current&&(R.current.dataset.pdfCacheBytes=String(T.current.bytes))}catch{}}finally{Fr.width=0,Fr.height=0}}}if(k.current?.paged?m!==_e.current:!te.current.has(m))return;try{let yt=ee.textContent;if(!yt){if(yt=await ze.getTextContent(),!Yr(ee,Ae,ae))return;ee.textContent=yt}if(!mr())return;ee.grouped||(ee.grouped=_s(yt.items,m,dt.width),Rt(m,ee.grouped));let Ia=ze.getViewport({scale:Ge.pageScale}),Gn=yt.items.length>Ns,Zr=Gn?Ue.cloneNode(!1):Ue;Zr.replaceChildren();let In=new B.TextLayer({textContentSource:Tf(yt),container:Zr,viewport:Ia});ee.textLayer=In;try{await In.render()}finally{ee.textLayer===In&&(ee.textLayer=null)}if(!Yr(ee,Ae,ae)||!mr())return;if(Gn){let Zt=document.createDocumentFragment();for(;Zr.firstChild;)Zt.append(Zr.firstChild);Ue.style.cssText=Zr.style.cssText,Ue.replaceChildren(Zt)}ee.textLayerReady=!0;let Fr=In.textDivs||[],Tr=new Map,Ra=0;yt.items.forEach((Zt,Zi)=>{typeof Zt.str=="string"&&Tr.set(Zi,Fr[Ra++])});for(let Zt of ee.grouped.segments)for(let Zi of Zt.itemIndices||[]){let Uo=Tr.get(Zi);if(!Uo)continue;let Pa=new Set((Uo.dataset.pdfSegments||"").split("|").filter(Boolean));Pa.add(Zt.id),Uo.dataset.pdfSegments=[...Pa].join("|"),Uo.dataset.pdfSegment=[...Pa][0],gr.current&&ce.current?.page===m&&Pa.has(ce.current.id)&&(Uo.dataset.pdfLinked="true")}Fo()}catch(yt){Cd(yt)||console.warn("[dsh-reader] PDF \u6587\u672C\u5C42\u6E32\u67D3\u5931\u8D25",yt)}if(!Yr(ee,Ae,ae))return;te.current.has(m)&&Dr(m)}catch(ze){Cd(ze)||(ee.renderFailed=!0,console.warn(`[dsh-reader] \u7B2C ${m} \u9875\u6E32\u67D3\u5931\u8D25`,ze))}finally{ee.rendering=!1}}}function Bo(){if(!re.current)for(;w.current<_f&&f.current.length>0;){f.current.sort((Ae,Ke)=>Math.abs(Ae.pageNumber-_e.current)-Math.abs(Ke.pageNumber-_e.current));let m=f.current[0],D=L.current.get(_e.current);if(m.pageNumber!==_e.current&&(!D?.rendered||D.rendering))break;let B=f.current.shift();c.current.delete(B.pageNumber);let W=L.current.get(B.pageNumber);if(!W||!W.wantRender||W.rendering||!O.current.has(B.pageNumber))continue;w.current+=1;let ae=q.current,ee=W.token+1;Gi(B.pageNumber).catch(()=>{}).finally(()=>{if(ae===q.current){if(w.current=Math.max(0,w.current-1),W.wantRender&&O.current.has(B.pageNumber)){let Ae=$n(B.pageNumber),Ue=(k.current?.paged?B.pageNumber===_e.current:te.current.has(B.pageNumber))&&W.rendered&&!W.renderFailed&&W.lastRasterScale<ta(Ae.pageScale,gn(B.pageNumber))-.002;(W.token!==ee||Ue||W.rendered&&Math.abs((W.lastRenderScale||0)-Ae.pageScale)>.002)&&Nn(B.pageNumber,{front:!0})}Bo()}})}}function Nn(m,{front:D=!1}={}){if(!O.current.has(m))return;let B=Ea(m);if(B.wantRender=!0,D&&m===_e.current&&!B.rendered)for(let[ae,ee]of L.current)ae!==m&&ee.renderTask&&!te.current.has(ae)&&(ee.token++,ee.renderTask.cancel());if(B.rendering)return;if(c.current.has(m)){D&&f.current.sort((ae,ee)=>(ee.pageNumber===m)-(ae.pageNumber===m));return}if(B.rendered&&B.lastRenderScale!==null){let ae=$n(m);if((B.textLayerReady||(k.current?.paged?m!==_e.current:!te.current.has(m)))&&Math.abs(B.lastRenderScale-ae.pageScale)<.002&&B.lastRasterScale>=(m===_e.current?ta(ae.pageScale,gn(m)):Math.min(ta(ae.pageScale,gn(m),2e6),ae.pageScale))-.002)return}c.current.add(m);let W={pageNumber:m};D?f.current.unshift(W):f.current.push(W),Bo()}function $o(m){let D=L.current.get(m);if(!D)return;if(D.wantRender=!1,D.token+=1,D.renderTask){try{D.renderTask.cancel()}catch{}D.renderTask=null}if(D.textLayer){try{D.textLayer.cancel()}catch{}D.textLayer=null}let B=O.current.get(m);if(B){let W=B.querySelector("canvas.dshr-pdf-canvas");W&&(W.width=0,W.height=0);let ae=B.querySelector(".dshr-pdf-text-layer");ae&&ae.replaceChildren()}if(D.page){try{D.page.cleanup()}catch{}D.page=null}D.textContent=null,D.grouped=null,J.current.delete(m),D.lastRenderScale=null,D.lastRasterScale=0,D.textLayerReady=!1,D.rendered&&(D.rendered=!1,Un(m,!1)),f.current.length>0&&(f.current=f.current.filter(W=>W.pageNumber!==m)),c.current.delete(m),L.current.delete(m)}function N(){for(let[m,D]of L.current){if(!D.rendered||!D.wantRender||D.rendering)continue;let B=$n(m);(!D.textLayerReady||D.lastRenderScale===null||Math.abs(D.lastRenderScale-B.pageScale)>.002)&&Nn(m)}}function z(m=kf){x.current&&clearTimeout(x.current),x.current=setTimeout(()=>{x.current=0,N()},m)}function Z(m){ye.current++,we.current=null,m=Hr(Math.round(Number(m)||1),1,$e.current||1);let D=I.current;if(k.current?.paged){Kr(m);return}if(!D||!he.current?.count){Kr(m);return}let B=he.current.top(m)-10;typeof D.scrollTo=="function"?D.scrollTo({top:Math.max(0,B),behavior:"auto"}):D.scrollTop=Math.max(0,B),Kr(m)}function Fe(m){let D=I.current;D&&D.scrollBy({top:m*D.clientHeight*.92,behavior:"auto"})}function fe(m){!m||k.current?.paged||(we.current={anchor:m,revision:ye.current})}function vt(m){let D=bn(),B=me.current==="fit"?Hn(_e.current):ne.current,W=Hr(B*m,Es,As);Ee.current=!1,hn(!1),me.current="custom",ne.current=W,Ie("custom"),ct(W),fe(D)}function _t(){let m=bn();Ee.current=!1,hn(!1),me.current="fit",Ie("fit"),fe(m)}function Pt(){let m=bn(),D=!Ee.current;Ee.current=D,hn(D),me.current="fit",Ie("fit"),fe(m),Wn()}$t(()=>{let m=I.current;if(!m||pe!=="ready")return;let D=B=>{let W=B.detail<0?-1:1,ae=Hr(_e.current+W,1,$e.current);ae!==_e.current&&Z(ae)};return m.addEventListener("dshr-pdf-page-turn",D),()=>m.removeEventListener("dshr-pdf-page-turn",D)},[pe,Qe,De]);function Wt(m,D){let B=J.current.get(m);if(!B||!B.text)return;let W=B.text,ae=D.replace(/\s+/g," ").trim(),ee=ae?W.indexOf(ae):-1,Ae=Sf,Ke=0;if(ee>=0){let dt=Math.max(80,Math.floor((Ae-Math.min(ae.length,Ae-160))/2));Ke=Math.max(0,ee-dt)}let Ue=Math.min(W.length,Ke+Ae);return Ue-Ke<Ae&&(Ke=Math.max(0,Ue-Ae)),W.slice(Ke,Ue).trim()||void 0}function nt(){if(Me.current="",!Ve.current)return;Ve.current=!1;let m=k.current&&k.current.onSelection;m&&m(null)}function Cn(){let m=globalThis.getSelection?globalThis.getSelection():null;if(!m||m.isCollapsed||m.rangeCount===0){nt();return}let B=R.current;if(!B)return;let W=m.getRangeAt(0);if(!B.querySelector(".dshr-pdf-content")?.contains(W.commonAncestorContainer)){nt();return}let ae=m.toString().replace(/\s+/g," ").trim();if(!ae){nt();return}let ee=Rd(W.startContainer)||Rd(W.endContainer)||_e.current,Ae=Ef(m);if(!Ae)return;let Ke=[ee,ae,Math.round(Ae.left),Math.round(Ae.top),Math.round(Ae.width),Math.round(Ae.height)].join("|");if(Ke===Me.current)return;Me.current=Ke;let Ue={text:ae,page:ee,rect:Ae},ze=O.current.get(ee);if(ze){let Ge=Yo(W,ze);Ge.length>0&&(Ue.pageRects=Ge);let Sr=ze.querySelector(".dshr-pdf-text-layer");if(Ue.evidenceAnchor=kd(W,Sr,ze,ee),Ue.evidenceAnchor){let mr=yt=>(yt.nodeType===1?yt:yt.parentElement)?.closest("[data-pdf-segments]")?.dataset.pdfSegments.split("|")||[],xn=mr(W.endContainer),br=mr(W.startContainer),Ca=yt=>String(yt??"").replace(/\s+/gu,""),vn=At.current?.[ee]?.find(yt=>yt.status==="done"&&yt.zh?.trim()&&!yt.sourceNeedsReview&&br.includes(yt.id)&&xn.includes(yt.id)&&Ca(yt.src).includes(Ca(ae)));vn&&(Ue.paragraphTranslation={scope:"paragraph",text:vn.zh,source:vn.src})}}let dt=Wt(ee,ae);dt&&(Ue.context=dt),Ve.current=!0;let kt=k.current&&k.current.onSelection;kt&&kt(Ue)}let Ho=Ed((m,D)=>{D?b.current.set(m,D):b.current.delete(m)},[]),jn=Ed((m,D)=>{if(D){O.current.set(m,D);for(let W of ie.current)W.observe(D);let B=L.current.get(m);B&&(B.rendered=!1,B.textLayerReady=!1,B.lastRenderScale=null,Un(m,!1))}else{let B=O.current.get(m);if(B)for(let W of ie.current)W.unobserve(B);te.current.delete(m),$o(m),O.current.delete(m)}},[]);function qi(m){let D=m.target;if(D&&typeof D.closest=="function"&&D.closest('button, a, input, textarea, select, [role="button"]'))return;let B=R.current;B&&typeof B.focus=="function"&&B.focus({preventScroll:!0})}function Zh(m){if(m.defaultPrevented||m.altKey||k.current?.paged)return;let D=m.target;if(D?.closest?.(".dshr-pdf-translation-panel, .dshr-topbar--pdf, .dshr-immersive-controls, .dshr-ai, .dshr-anno-panel"))return;let B=D&&D.tagName?D.tagName.toLowerCase():"";if(B==="input"||B==="textarea"||B==="select"||D&&D.isContentEditable)return;let W=I.current;if(!(!W||pe!=="ready"))switch(m.key){case"PageDown":m.preventDefault(),Fe(1);break;case"PageUp":m.preventDefault(),Fe(-1);break;case"Home":m.preventDefault(),W.scrollTo({top:0,behavior:"auto"}),Kr(1);break;case"End":m.preventDefault(),W.scrollTo({top:W.scrollHeight,behavior:"auto"}),Kr($e.current||1);break;default:break}}function zl(){for(let m of L.current.values()){if(m.token+=1,m.renderTask)try{m.renderTask.cancel()}catch{}if(m.textLayer)try{m.textLayer.cancel()}catch{}if(m.page)try{m.page.cleanup()}catch{}}L.current.clear()}$t(()=>{let m=!1,D=new AbortController,B;if(q.current+=1,re.current=!1,Y.current?.close(),Y.current=null,se.current=null,T.current.clear(),R.current){for(let ae of["pdfReadBytes","pdfSourceBytes","pdfRangeReads","pdfCacheHits","pdfCacheBytes","pdfWorkerRenders","pdfMainRenders"])R.current.dataset[ae]="0";delete R.current.dataset.pdfRenderer}zl(),b.current.clear(),O.current.clear(),F.current.clear(),J.current.clear(),te.current.clear(),ue.current.clear(),f.current=[],c.current.clear(),w.current=0,we.current=null,ye.current++,et.current=!1,Le("loading"),lt(null),wt(null),lr(0),Bt({}),oe(null),dr({}),Ut(""),xt(!1),pn(1),Xt({}),xe(null),zn([]),_e.current=0,je.current=!1;let W=typeof Blob<"u"&&t instanceof Blob;if(!W&&!(t instanceof ArrayBuffer)&&!ArrayBuffer.isView(t)||(W?t.size===0:t.byteLength===0)){Le("error"),lt("\u6CA1\u6709\u53EF\u663E\u793A\u7684 PDF \u6570\u636E\u3002");return}return(async()=>{try{if(B=await si(t,{signal:D.signal,onRead:Ge=>{!m&&R.current&&(R.current.dataset.pdfReadBytes=String(Ge.bytes),R.current.dataset.pdfSourceBytes=String(Ge.total),R.current.dataset.pdfRangeReads=String(Ge.reads))},onProgress:Ge=>{!m&&Ge?.total>0&&wt(Math.max(1,Math.min(100,Math.round(Ge.loaded/Ge.total*100))))},onError:Ge=>{m||(Le("error"),lt(Id(Ge)))}}),m){B.close();return}Y.current=B;let{engine:ae,pdf:ee}=B;U.current=ae,se.current=ee;let Ae=await ee.getPage(1);if(m)return;let Ke=Ae.getViewport({scale:1}),Ue={width:Ke.width,height:Ke.height};$.current=Ue;try{Ae.cleanup()}catch{}let ze=Hr(Number.parseInt(a,10)||1,1,ee.numPages),dt=null;if(ze!==1)try{let Ge=await ee.getPage(ze),Sr=Ge.getViewport({scale:1});dt={width:Sr.width,height:Sr.height},F.current.set(ze,dt),Ge.cleanup()}catch{}if(m)return;oe(Ue),Bt(dt?{[ze]:dt}:{}),lr(ee.numPages),$e.current=ee.numPages,wt(null),Le("ready"),pn(ze),_e.current=ze;let kt=k.current&&k.current.onReady;kt&&kt({pageCount:ee.numPages})}catch(ae){if(m)return;B?.close(),Y.current=null,se.current=null,wt(null),Le("error"),lt(Id(ae))}})(),()=>{if(m=!0,D.abort(),re.current=!0,q.current+=1,zl(),B?.close(),Y.current=null,se.current=null,T.current.clear(),f.current=[],c.current.clear(),x.current&&(clearTimeout(x.current),x.current=0),V.current&&(cancelAnimationFrame(V.current),V.current=0),de.current&&(cancelAnimationFrame(de.current),de.current=0),Ve.current){Ve.current=!1;let ae=k.current&&k.current.onSelection;ae&&ae(null)}}},[t,po]),$t(()=>{let m=()=>Cn(),D=()=>Cn(),B=()=>{Ye.current||(Ye.current=requestAnimationFrame(()=>{Ye.current=0;let W=globalThis.getSelection?globalThis.getSelection():null;(!W||W.isCollapsed||W.rangeCount===0)&&nt()}))};return document.addEventListener("mouseup",m,!0),document.addEventListener("keyup",D,!0),document.addEventListener("selectionchange",B),()=>{document.removeEventListener("mouseup",m,!0),document.removeEventListener("keyup",D,!0),document.removeEventListener("selectionchange",B),Ye.current&&(cancelAnimationFrame(Ye.current),Ye.current=0)}},[]),Ss(()=>{if(pe!=="ready")return;let m=I.current;if(!m)return;let D=Pd(m);D>0&&(Te.current=D,cr(D)),m.clientHeight>0&&(Xe.current=m.clientHeight,mt(m.clientHeight))},[pe,Qe,S]),$t(()=>{S&&hn(!0)},[S]),$t(()=>{if(!S)return;let m=I.current;m&&(m.scrollTop=0)},[S]),$t(()=>{if(!S||pe!=="ready"||Qe<=0)return;te.current=new Set([De]),Dr(De);let m=[De];for(let W=1;W<=2;W+=1)m.push(De+W,De-W);let B=m.filter((W,ae,ee)=>W>=1&&W<=Qe&&ee.indexOf(W)===ae).map((W,ae)=>window.setTimeout(()=>Nn(W,{front:ae===0}),ae===0?0:ae===1?30:1e3+(ae-2)*120));return()=>{for(let W of B)window.clearTimeout(W)}},[S,pe,De,Qe,bt,be,Pe,Ot,Et]),$t(()=>{if(!S||pe!=="ready")return;let m=I.current;m&&m.dispatchEvent(new CustomEvent("dshr-pdf-page-state",{detail:{page:De,pages:Qe}}))},[S,pe,De,Qe]),$t(()=>{pe==="ready"&&(Wn(),z())},[bt,Et,pe]),$t(()=>{if(pe!=="ready")return;let m=I.current;if(!m)return;let D=!1,B=null,W=null,ae=()=>{let Ue=Pd(m),ze=m.clientHeight,dt=Ue>0&&Math.abs(Ue-Te.current)>=.5,kt=ze>0&&Math.abs(ze-Xe.current)>=.5;if(!dt&&!kt)return;let Ge=dt||kt&&Ee.current?bn():null;dt&&(Te.current=Ue,cr(Ue)),kt&&(Xe.current=ze,mt(ze)),Ge&&!k.current?.paged&&fe(Ge)},ee=()=>{de.current||(ye.current++,we.current=null,de.current=requestAnimationFrame(()=>{de.current=0,Aa(),Fo()}))},Ae=null;typeof ResizeObserver=="function"&&(Ae=new ResizeObserver(()=>{D||ae()}),Ae.observe(m)),m.addEventListener("scroll",ee,{passive:!0}),!S&&typeof IntersectionObserver=="function"&&(B=new IntersectionObserver(ze=>{for(let dt of ze){let kt=Number(dt.target.getAttribute("data-page"));Number.isFinite(kt)&&(dt.isIntersecting?(te.current.add(kt),Nn(kt,{front:!0}),Dr(kt)):te.current.delete(kt))}},{root:m,rootMargin:"0px",threshold:0}),W=new IntersectionObserver(ze=>{for(let dt of ze){let kt=Number(dt.target.getAttribute("data-page"));Number.isFinite(kt)&&(dt.isIntersecting?Nn(kt):k.current?.paged||$o(kt))}},{root:m,rootMargin:yf,threshold:0}),ie.current=[B,W],Wi(()=>{if(!D)for(let ze of O.current.values())B.observe(ze),W.observe(ze)}));let Ke=requestAnimationFrame(()=>{D||(mn(),Aa())});return()=>{D=!0,cancelAnimationFrame(Ke),Ae&&Ae.disconnect(),B&&B.disconnect(),W&&W.disconnect(),ie.current=[],m.removeEventListener("scroll",ee)}},[pe,Qe,S]),$t(()=>{if(pe!=="ready"||Qe<=0||et.current)return;et.current=!0;let m=Hr(Number.parseInt(a,10)||1,1,Qe),D=setTimeout(()=>{je.current=!0,I.current&&(mn(),Z(m,"auto"))},0);return()=>clearTimeout(D)},[pe,Qe]);let Bl=Ce(S);Ss(()=>{Bl.current!==S&&(Bl.current=S,pe==="ready"&&(S?I.current.scrollTop=0:Z(_e.current,"auto")))},[S,pe]),$t(()=>{pe==="ready"&&(Wn(),z())},[pe,be,Pe,Ot,Mt]),$t(()=>{pe==="ready"&&Wn()},[pe,v]),$t(()=>{Tt.current=!!s,s&&pe==="ready"&&ji()},[s,pe]);let Xi=Ts(()=>{if(Qe<=0)return[];let m=S?2:Math.min(16,Math.max(3,Math.ceil(Et/Math.max(1,Math.min(Yt.defaultHeight,...Yt.heights.values())))+1)),D=Math.max(1,De-m),B=Math.min(Qe,De+m);return Array.from({length:B-D+1},(W,ae)=>D+ae)},[S,De,Qe,Yt,Et]),$l=Xi[0]||1,Hl=Xi.at(-1)||0,Qh=Ts(()=>{let m=new Map;for(let D of _||[]){if(!D||D.kind!=="pdf"||!Number.isFinite(D.page))continue;let B=m.get(D.page)||[];B.push(D),m.set(D.page,B)}return m},[_]);$t(()=>{if(!y?.page||pe!=="ready")return;let m=setTimeout(()=>{Z(Hr(Number(y.page)||1,1,$e.current||1),"smooth")},80);return()=>clearTimeout(m)},[y,pe]),$t(()=>{if(!P)return;let{anchor:m,quote:D,token:B}=P,W=Ue=>E?.(B,Ue);if(pe==="error"){W("unavailable");return}if(pe!=="ready")return;let ae=m?.page;if(!Number.isInteger(ae)||ae<1||ae>$e.current){W("unavailable");return}Z(ae);let ee=performance.now()+6e3,Ae,Ke=()=>{if(_e.current!==ae){W("cancelled");return}let Ue=L.current.get(ae),ze=O.current.get(ae);if(Ue?.textLayerReady&&!Ue.textLayer&&ze?.isConnected){let dt=Td(m,D,ze);if(!dt){W("page");return}let kt=I.current,Ge=kt.getBoundingClientRect(),Sr=ze.getBoundingClientRect(),mr=dt[0],xn=Sr.left+(mr.x+mr.w/2)*Sr.width,br=Sr.top+(mr.y+mr.h/2)*Sr.height;kt.scrollBy({left:xn<Ge.left||xn>Ge.right?xn-(Ge.left+Ge.width/2):0,top:br<Ge.top||br>Ge.bottom?br-(Ge.top+Ge.height/2):0,behavior:"auto"}),fo({token:B,page:ae,rects:dt}),W("exact");return}if(performance.now()>=ee){W("page");return}Ae=requestAnimationFrame(Ke)};return Ae=requestAnimationFrame(Ke),()=>cancelAnimationFrame(Ae)},[P,pe]);let Jh=(be==="fit"?Hn(De):Pe)<As-.001,ep=(be==="fit"?Hn(De):Pe)>Es+.001;function tp(m){let D=m.currentTarget;Ut(String(De)),xt(!0),requestAnimationFrame(()=>{D&&typeof D.select=="function"&&D.select()})}function rp(m){let D=m.target.value.replace(/[^\d]/g,"").slice(0,6);Ut(D)}function np(){if(st.current){st.current=!1,xt(!1);return}let m=Number.parseInt(ho,10);Number.isFinite(m)&&$e.current>0&&Z(Hr(m,1,$e.current),"auto"),xt(!1)}function op(){kr&&np()}function ap(m){m.key==="Enter"?(m.preventDefault(),m.currentTarget.blur()):m.key==="Escape"&&(m.preventDefault(),st.current=!0,xt(!1),m.currentTarget.blur())}let ip=kr?ho:String(De),Vi=n?"dshr-immersive-btn":"dshr-pdf-tbtn",Ki=n||o,Ul=`${Math.round((Ki?Hn(De):Pe)*100)}%`,Wl=(0,ke.jsx)("button",{type:"button",className:Vi,title:"\u7F29\u5C0F","aria-label":"\u7F29\u5C0F",disabled:!ep,onClick:()=>vt(1/Ad),children:"\u2212"}),jl=(0,ke.jsx)("span",{className:"dshr-pdf-zoom-percent","data-scale":bt?"page":be==="fit"?"fit":Pe,title:bt?"\u5F53\u524D\u4E3A\u6574\u9875\u663E\u793A":be==="fit"?"\u5F53\u524D\u4E3A\u9002\u5408\u5BBD\u5EA6":"\u5F53\u524D\u7F29\u653E\u6BD4\u4F8B",children:Ki?Ul:bt?"\u6574\u9875":be==="fit"?"\u9002\u5BBD":Ul}),Gl=(0,ke.jsx)("button",{type:"button",className:Vi,title:"\u653E\u5927","aria-label":"\u653E\u5927",disabled:!Jh,onClick:()=>vt(Ad),children:"\uFF0B"}),ql=(0,ke.jsx)("button",{type:"button",className:`${Vi} dshr-pdf-tbtn-wide`,"data-active":bt?"true":"false","aria-pressed":bt,title:bt?"\u5F53\u524D\u6574\u9875\u663E\u793A\uFF1B\u70B9\u51FB\u56DE\u5230\u9002\u5408\u5BBD\u5EA6":"\u70B9\u51FB\u5207\u6362\u4E3A\u6574\u9875\u663E\u793A\uFF1B\u518D\u6B21\u70B9\u51FB\u56DE\u5230\u9002\u5408\u5BBD\u5EA6",onClick:Pt,children:Ki||bt?"\u6574\u9875":"\u9002\u5BBD"}),Xl=(0,ke.jsxs)("div",{className:"dshr-pdf-pager",children:[(0,ke.jsx)("input",{className:"dshr-pdf-page-input",inputMode:"numeric","aria-label":"\u9875\u7801",value:ip,onChange:rp,onFocus:tp,onBlur:op,onKeyDown:ap}),(0,ke.jsxs)("span",{"aria-hidden":"true",children:["/ ",Qe]})]}),Yi=pe==="ready"?(0,ke.jsxs)(ke.Fragment,{children:[(0,ke.jsxs)("div",{className:"dshr-pdf-tool-group",role:"group","aria-label":"PDF \u7F29\u653E",children:[Wl,jl,Gl,ql]}),n?null:(0,ke.jsx)("span",{className:"dshr-pdf-toolbar-sep","aria-hidden":"true"}),Xl]}):null,sp=o&&pe==="ready"?{iconTools:(0,ke.jsxs)("div",{className:"dshr-pdf-tool-group",role:"group","aria-label":"PDF \u7F29\u653E",children:[Wl,jl,Gl]}),textTools:(0,ke.jsxs)("div",{className:"dshr-pdf-tool-group",role:"group","aria-label":"PDF \u9875\u7801\u4E0E\u89C6\u56FE",children:[Xl,ql]})}:void 0;return(0,ke.jsxs)("div",{className:"dshr-pdf-root",ref:R,tabIndex:0,"data-dshr-pdf":"",role:"region","aria-label":r?`PDF \u9605\u8BFB\u5668\uFF1A${r}`:"PDF \u9605\u8BFB\u5668",onKeyDown:Zh,children:[o?o(sp):n?n(Yi):Yi&&(0,ke.jsxs)("div",{className:"dshr-pdf-toolbar",role:"toolbar","aria-label":"PDF \u9605\u8BFB\u5DE5\u5177\u680F",children:[(0,ke.jsx)("span",{className:"dshr-pdf-title",title:r||void 0,children:r}),(0,ke.jsx)("span",{className:"dshr-pdf-toolbar-spacer"}),Yi]}),(0,ke.jsxs)("div",{className:"dshr-pdf-body",children:[(0,ke.jsx)("div",{className:"dshr-pdf-area",children:(0,ke.jsxs)("div",{className:"dshr-pdf-workspace",children:[(0,ke.jsx)("div",{className:"dshr-pdf-scroll",ref:I,"data-pdf-page":S?De:void 0,"data-pdf-pages":S?Qe:void 0,onMouseDown:qi,onPointerOver:m=>{if(!gr.current||m.buttons)return;let D=m.target.closest?.("[data-pdf-segment]"),B=Number(D?.closest(".dshr-pdf-frame")?.dataset.page);D&&B&&fn(D.dataset.pdfSegment,{origin:"source"},B)},children:pe==="ready"?(0,ke.jsxs)("div",{className:"dshr-pdf-content",children:[!S&&$l>1?(0,ke.jsx)("div",{className:"dshr-pdf-spacer","aria-hidden":"true",style:{height:Yt.top($l)-Yt.paddingTop}}):null,Xi.map(m=>(0,ke.jsx)(Af,{pageNumber:m,dim:gn(m),mode:bt?"page":be,scale:Pe,viewportWidth:Ot,viewportHeight:Et,active:!S||m===De,rendered:!!pr[m],registerPageElement:Ho,registerFrameElement:jn,annotations:Qh.get(m),onOpenAnnotation:C,evidenceRects:An?.token===P?.token&&An?.page===m?An.rects:void 0},m)),!S&&Hl<Qe?(0,ke.jsx)("div",{className:"dshr-pdf-spacer","aria-hidden":"true",style:{height:Yt.top(Qe+1)-Yt.top(Hl+1)}}):null]}):(0,ke.jsx)("div",{className:"dshr-pdf-status",role:pe==="error"?"alert":"status",children:pe==="error"?(0,ke.jsxs)(ke.Fragment,{children:[(0,ke.jsx)("p",{className:"dshr-pdf-status-title dshr-pdf-status-error",children:"PDF \u52A0\u8F7D\u5931\u8D25"}),(0,ke.jsx)("p",{className:"dshr-pdf-status-detail",children:It}),(0,ke.jsx)("button",{type:"button",className:"dshr-pdf-status-retry",onClick:()=>fr(m=>m+1),children:"\u91CD\u65B0\u52A0\u8F7D"})]}):(0,ke.jsxs)(ke.Fragment,{children:[(0,ke.jsx)("span",{className:"dshr-pdf-status-spinner","aria-hidden":"true"}),(0,ke.jsx)("p",{className:"dshr-pdf-status-title",children:"\u6B63\u5728\u52A0\u8F7D PDF\u2026"}),Ze!==null?(0,ke.jsxs)("p",{className:"dshr-pdf-status-progress",children:[Ze,"%"]}):null]})})}),gt?(0,ke.jsx)(xd,{page:De,source:qt[De],rows:e?He.pages[De]||[]:(qt[De]?.segments||[]).map((m,D)=>({...m,...l?.[De]?.segments?.[D]||{},status:l?.[De]?.status||"queued",error:l?.[De]?.error})),activeId:Vr?.page===De?Vr.id:null,originRef:rt,translation:e?He:{...He,retry:m=>{ue.current.delete(m),h?.(m),Dr(m)}},onActivate:(m,D)=>fn(m,D,De),onClose:()=>{Q(!0),M?.()}}):null]})}),i]})]})}Od.displayName="PdfViewer";var Ld=Od;var Ur=Lt(require("react"),1);var ux=require("react"),Gt=require("react/jsx-runtime");function gi(t,e="i"){let r=[],n=String(t??""),o=/(\*\*[^*]+\*\*|__[^_]+__|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/gu,i=0,a=0;for(let s of n.matchAll(o)){s.index>i&&r.push(n.slice(i,s.index));let l=s[0],d=`${e}-${a++}`;if(l.startsWith("**")||l.startsWith("__"))r.push((0,Gt.jsx)("strong",{children:l.slice(2,-2)},d));else if(l.startsWith("`"))r.push((0,Gt.jsx)("code",{children:l.slice(1,-1)},d));else{let p=/^\[([^\]]+)\]\(([^)\s]+)\)$/u.exec(l);p&&/^https?:\/\//iu.test(p[2])?r.push((0,Gt.jsx)("a",{href:p[2],target:"_blank",rel:"noreferrer noopener",children:p[1]},d)):r.push(l)}i=s.index+l.length}return i<n.length&&r.push(n.slice(i)),r}function Dd({text:t}){let e=String(t??"").replace(/\r\n/gu,`
`).split(`
`),r=[],n=[],o=[],i=[],a=null,s=0,l=()=>{if(n.length===0)return;let u=n.join(" ");r.push((0,Gt.jsx)("p",{children:gi(u,`p${s}`)},`p-${s++}`)),n=[]},d=()=>{o.length!==0&&(r.push((0,Gt.jsx)("ul",{children:o.map((u,h)=>(0,Gt.jsx)("li",{children:gi(u,`l${s}-${h}`)},`li-${s}-${h}`))},`ul-${s++}`)),o=[])},p=()=>{i.length!==0&&(r.push((0,Gt.jsx)("blockquote",{children:i.map((u,h)=>(0,Gt.jsx)("p",{children:gi(u,`q${s}-${h}`)},`bqp-${s}-${h}`))},`bq-${s++}`)),i=[])},g=()=>{l(),d(),p()};for(let u of e){let h=u.trimEnd();if(h.trim().startsWith("```")){a===null?(g(),a=[]):(r.push((0,Gt.jsx)("pre",{children:(0,Gt.jsx)("code",{children:a.join(`
`)})},`pre-${s++}`)),a=null);continue}if(a!==null){a.push(u);continue}if(h.trim()===""){g();continue}let _=/^(#{1,4})\s+(.*)$/u.exec(h);if(_){g();let v=`h${Math.min(4,_[1].length)}`;r.push((0,Gt.jsx)(v,{children:gi(_[2],`h${s}`)},`h-${s++}`));continue}let C=/^\s*>\s?(.*)$/u.exec(h);if(C){l(),d(),i.push(C[1]);continue}let y=/^\s*[-*+]\s+(.*)$/u.exec(h);if(y){g(),o.push(y[1]);continue}let P=/^\s*\d+[.)]\s+(.*)$/u.exec(h);if(P){g(),o.push(P[1]);continue}if(/^\s*([-*_])(?:\s*\1){2,}\s*$/u.test(h)){g(),r.push((0,Gt.jsx)("hr",{},`hr-${s++}`));continue}d(),p(),n.push(h)}return a!==null&&r.push((0,Gt.jsx)("pre",{children:(0,Gt.jsx)("code",{children:a.join(`
`)})},`pre-${s++}`)),g(),(0,Gt.jsx)(Gt.Fragment,{children:r})}var qe=require("react/jsx-runtime"),Nf=["\u5E2E\u6211\u68B3\u7406\u8FD9\u6BB5\u8BDD\u7684\u8BBA\u8BC1\u7ED3\u6784","\u89E3\u91CA\u5176\u4E2D\u7684\u4E13\u4E1A\u672F\u8BED\u548C\u80CC\u666F","\u7FFB\u8BD1\u5E76\u6307\u51FA\u5173\u952E\u8BED\u6CD5","\u8FD9\u6BB5\u548C\u6211\u7684\u7814\u7A76\u95EE\u9898\u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F"];function Fd({open:t,onClose:e,seed:r,onGoogle:n,onToast:o}){let[i,a]=Ur.default.useState([]),[s,l]=Ur.default.useState(""),[d,p]=Ur.default.useState(!1),[g,u]=Ur.default.useState(""),h=Ur.default.useRef(null),_=Ur.default.useRef(null),C=r?.id??"",y=r?.text??"",P=r?.context??"",E=Ur.default.useCallback(()=>{let k=_.current;k&&requestAnimationFrame(()=>{k.scrollTop=k.scrollHeight})},[]),v=Ur.default.useCallback(async(k,{replace:R=!1,history:I}={})=>{let b=String(k??"").trim();if(!b||d)return;h.current?.abort();let O=new AbortController;h.current=O;let L={role:"user",content:b},$=R?[L]:[...I??i,L];a([...$,{role:"assistant",content:""}]),p(!0),u(""),E();let J="";try{await gs({messages:$.map(te=>({role:te.role,content:te.content})),selection:y,context:P,signal:O.signal},{onDelta:te=>{J+=te,a(ie=>{if(ie.length===0)return ie;let ue=[...ie],U=ue[ue.length-1];return U?.role!=="assistant"?ie:(ue[ue.length-1]={...U,content:J},ue)}),E()}}),J.trim()||(u("AI \u6CA1\u6709\u8FD4\u56DE\u5185\u5BB9\uFF0C\u8BF7\u91CD\u8BD5\u6216\u6362\u4E00\u79CD\u95EE\u6CD5\u3002"),a(te=>te.filter((ie,ue)=>!(ue===te.length-1&&ie.role==="assistant"&&!ie.content))))}catch(te){if(Xn(te))return;u(te?.message||"AI \u8BF7\u6C42\u5931\u8D25\u3002"),a(ie=>{let ue=ie[ie.length-1];return ue?.role==="assistant"&&!ue.content?ie.slice(0,-1):ie})}finally{p(!1)}},[d,P,i,E,y]);if(Ur.default.useEffect(()=>{if(!t||!C)return;h.current?.abort(),a([]),u(""),l("");let k="\u8BF7\u89E3\u91CA\u8FD9\u6BB5\u5185\u5BB9\u3002";a([{role:"user",content:k},{role:"assistant",content:""}]),p(!0);let R=new AbortController;h.current=R;let I="";return gs({messages:[{role:"user",content:k}],selection:y,context:P,signal:R.signal},{onDelta:b=>{I+=b,a(O=>{if(O.length===0)return O;let L=[...O],F=L[L.length-1];return F?.role!=="assistant"?O:(L[L.length-1]={...F,content:I},L)}),E()}}).catch(b=>{Xn(b)||u(b?.message||"AI \u8BF7\u6C42\u5931\u8D25\u3002")}).finally(()=>{p(!1),I.trim()||a(b=>b.filter((O,L)=>!(L===b.length-1&&O.role==="assistant"&&!O.content)))}),()=>R.abort()},[t,C]),Ur.default.useEffect(()=>{t||h.current?.abort()},[t]),!t)return null;let S=k=>{k.preventDefault();let R=s.trim();!R||d||(l(""),v(R))},M=k=>{let R=y||i.find(I=>I.role==="user")?.content||"";if(!R.trim()){o?.("\u5148\u5728\u6B63\u6587\u91CC\u9009\u4E2D\u4E00\u6BB5\u6587\u5B57\uFF0C\u518D\u641C\u7D22\u3002");return}n?.(R,k?"scholar":"web")};return(0,qe.jsxs)("aside",{className:"dshr-ai","aria-label":"AI \u9605\u8BFB\u52A9\u624B",children:[(0,qe.jsxs)("div",{className:"dshr-ai__head",children:[(0,qe.jsx)(Rn,{size:17}),(0,qe.jsx)("strong",{children:"AI \u9605\u8BFB\u52A9\u624B"}),(0,qe.jsx)("span",{className:"dshr-chip dshr-chip--brand",children:"DSH \u9ED8\u8BA4\u6A21\u578B"}),(0,qe.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:e,"aria-label":"\u5173\u95ED AI \u9762\u677F",title:"\u5173\u95ED",children:(0,qe.jsx)(Er,{size:16})})]}),(0,qe.jsxs)("div",{className:"dshr-ai__body",ref:_,children:[i.length===0?(0,qe.jsxs)("div",{className:"dshr-ai__welcome",children:[(0,qe.jsx)("strong",{children:"\u9009\u4E2D\u6B63\u6587\u4E2D\u7684\u4EFB\u610F\u53E5\u5B50"}),"\uFF0C\u6211\u4F1A\u89E3\u91CA\u542B\u4E49\u3001\u672F\u8BED\u548C\u8BED\u6CD5\uFF1B\u4E5F\u53EF\u4EE5\u76F4\u63A5\u8FFD\u95EE\uFF0C\u6216\u8DF3\u8F6C Google / Google \u5B66\u672F\u7EE7\u7EED\u67E5\u3002",(0,qe.jsx)("div",{className:"dshr-ai__suggestions",children:Nf.map(k=>(0,qe.jsx)("button",{type:"button",onClick:()=>{v(k)},disabled:d,children:k},k))})]}):i.map((k,R)=>(0,qe.jsxs)("div",{className:`dshr-ai__msg${k.role==="user"?" dshr-ai__msg--user":""}`,children:[(0,qe.jsx)("span",{className:"dshr-ai__role",children:k.role==="user"?"\u4F60":"\u9605\u8BFB\u52A9\u624B"}),k.role==="assistant"?k.content?(0,qe.jsx)(Dd,{text:k.content}):d&&R===i.length-1?(0,qe.jsxs)("span",{className:"dshr-translation__loading",children:[(0,qe.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u601D\u8003\u2026"]}):null:k.content]},R)),g?(0,qe.jsxs)("div",{className:"dshr-ai__error",children:[g,(0,qe.jsx)("div",{style:{marginTop:6},children:(0,qe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>{v(i.find(k=>k.role==="user")?.content||"\u8BF7\u91CD\u65B0\u89E3\u91CA\u8FD9\u6BB5\u5185\u5BB9\u3002",{replace:!0,history:[]})},children:[(0,qe.jsx)(tc,{size:13})," \u91CD\u65B0\u56DE\u7B54"]})})]}):null]}),(0,qe.jsx)("div",{className:"dshr-ai__foot",children:(0,qe.jsxs)("form",{onSubmit:S,children:[(0,qe.jsx)("textarea",{className:"dshr-ai__input",placeholder:"\u8FFD\u95EE\uFF1A\u8FD9\u6BB5\u7684\u8BBA\u8BC1\u6709\u4EC0\u4E48\u95EE\u9898\uFF1F\uFF0F\u672F\u8BED\u662F\u4EC0\u4E48\u610F\u601D\uFF1F",value:s,onChange:k=>l(k.target.value),onKeyDown:k=>{k.key==="Enter"&&!k.shiftKey&&(k.preventDefault(),v(s),l(""))},disabled:d,"aria-label":"\u5411 AI \u8FFD\u95EE"}),(0,qe.jsxs)("div",{className:"dshr-ai__actions",children:[(0,qe.jsx)("span",{className:"dshr-ai__hint",children:"Enter \u53D1\u9001 \xB7 Shift+Enter \u6362\u884C"}),(0,qe.jsxs)("div",{style:{display:"flex",gap:5},children:[(0,qe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>M(!1),title:"\u7528 Google \u641C\u7D22\u9009\u4E2D\u7684\u6587\u5B57",children:[(0,qe.jsx)(Ba,{size:13})," Google"]}),(0,qe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>M(!0),title:"\u7528 Google \u5B66\u672F\u641C\u7D22\u9009\u4E2D\u7684\u6587\u5B57",children:[(0,qe.jsx)($a,{size:13})," \u5B66\u672F"]}),(0,qe.jsxs)("button",{type:"submit",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:d||!s.trim(),children:[d?(0,qe.jsx)("span",{className:"dshr-spinner"}):(0,qe.jsx)(rc,{size:13})," \u53D1\u9001"]})]})]})]})})]})}var xx=require("react");var Je=require("react/jsx-runtime");function zd({selection:t,translation:e,onTranslate:r,onAnnotate:n,onExplain:o,onGoogle:i,onCopy:a,onClose:s,onRetry:l,onEvidence:d,replacingEvidence:p}){if(!t?.text?.trim())return null;let g=t.rect,u=typeof window<"u"?window.innerWidth:1200,h=Math.min(d?560:476,Math.max(1,u-20)),_=h/2,C=typeof window<"u"?window.innerHeight:800,y=g?g.left+g.width/2:u/2,P=Math.max(_+10,Math.min(u-_-10,y)),E=g&&g.top>70?g.top-46:Math.min(C-190,(g?.bottom??0)+10),v=Math.min(C-180,E+42);return(0,Je.jsxs)(Je.Fragment,{children:[(0,Je.jsxs)("div",{className:"dshr-selection",style:{left:P,top:Math.max(8,E),maxWidth:h},role:"toolbar","aria-label":"\u9009\u4E2D\u6587\u5B57\u64CD\u4F5C",onMouseDown:S=>S.preventDefault(),children:[(0,Je.jsxs)("button",{type:"button",className:"dshr-selection__btn dshr-selection__btn--accent",onClick:()=>r(t),children:[(0,Je.jsx)(mo,{size:14})," \u7FFB\u8BD1"]}),(0,Je.jsxs)("button",{type:"button",className:"dshr-selection__btn dshr-selection__btn--mark",onClick:()=>n(t),title:"\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u3001\u4FBF\u7B7E\u6216\u5907\u6CE8",children:[(0,Je.jsx)(Ha,{size:14})," \u6807\u8BB0"]}),d?(0,Je.jsx)("button",{type:"button",className:"dshr-selection__btn dshr-selection__btn--accent",onClick:d,children:p?"\u91CD\u65B0\u5173\u8054\u6B64\u9009\u533A":"\u4FDD\u5B58\u8BC1\u636E"}):null,(0,Je.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>o(t),children:[(0,Je.jsx)(Rn,{size:14})," AI \u89E3\u91CA"]}),(0,Je.jsx)("span",{className:"dshr-selection__sep"}),(0,Je.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>i(t.text,"web"),title:"\u7528 Google \u641C\u7D22",children:[(0,Je.jsx)(Ba,{size:14})," Google"]}),(0,Je.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>i(t.text,"scholar"),title:"\u7528 Google \u5B66\u672F\u641C\u7D22",children:[(0,Je.jsx)($a,{size:14})," \u5B66\u672F"]}),(0,Je.jsx)("span",{className:"dshr-selection__sep"}),(0,Je.jsx)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>a(t.text),title:"\u590D\u5236\u9009\u4E2D\u6587\u5B57",children:(0,Je.jsx)(ec,{size:14})}),(0,Je.jsx)("button",{type:"button",className:"dshr-selection__btn",onClick:s,title:"\u5173\u95ED","aria-label":"\u5173\u95ED\u9009\u4E2D\u6587\u5B57\u5DE5\u5177\u680F",children:(0,Je.jsx)(Er,{size:13})})]}),e?(0,Je.jsxs)("div",{className:"dshr-selection__pop",style:{left:P,top:v},onMouseDown:S=>S.preventDefault(),children:[(0,Je.jsxs)("div",{className:"dshr-selection__pop-head",children:[(0,Je.jsx)("span",{children:"\u4E2D\u6587\u8BD1\u6587"}),(0,Je.jsx)("button",{type:"button",onClick:s,"aria-label":"\u5173\u95ED\u8BD1\u6587",children:(0,Je.jsx)(Er,{size:12})})]}),e.status==="loading"?(0,Je.jsxs)("span",{className:"dshr-translation__loading",children:[(0,Je.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u7FFB\u8BD1\u9009\u4E2D\u5185\u5BB9\u2026"]}):e.status==="error"?(0,Je.jsxs)("span",{style:{color:"var(--dshr-error)"},children:[e.error||"\u7FFB\u8BD1\u5931\u8D25\u3002"," ",(0,Je.jsx)("button",{type:"button",className:"dshr-translation__retry",onClick:l,children:"\u91CD\u8BD5"})]}):String(e.zh||"").split(/\n+/u).filter(Boolean).map((S,M)=>(0,Je.jsx)("p",{style:{margin:M===0?0:"8px 0 0"},children:S},M))]}):null]})}var na=Lt(require("react"),1);var ge=require("react/jsx-runtime");function Bd({settings:t,onChange:e,onClose:r,onClearLibrary:n,onOpenAppearance:o}){let[i,a]=na.default.useState(!1);na.default.useEffect(()=>{let l=d=>{d.key==="Escape"&&r()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[r]);let s=l=>e({...t,...l});return(0,ge.jsx)("div",{className:"dshr-modal-mask",onMouseDown:l=>{l.target===l.currentTarget&&r()},children:(0,ge.jsxs)("div",{className:"dshr-modal",role:"dialog","aria-modal":"true","aria-label":"\u9605\u8BFB\u8BBE\u7F6E",children:[(0,ge.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:12},children:[(0,ge.jsxs)("div",{style:{flex:1},children:[(0,ge.jsx)("h3",{children:"\u9605\u8BFB\u8BBE\u7F6E"}),(0,ge.jsx)("p",{children:"\u8BBE\u7F6E\u53EA\u4FDD\u5B58\u5728\u672C\u673A\uFF0C\u4E0D\u5F71\u54CD DSH \u7684\u5176\u5B83\u63D2\u4EF6\u3002"})]}),(0,ge.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:r,"aria-label":"\u5173\u95ED\u8BBE\u7F6E",children:(0,ge.jsx)(Er,{size:16})})]}),(0,ge.jsxs)("div",{className:"dshr-settings-row",children:[(0,ge.jsxs)("div",{children:[(0,ge.jsx)("div",{className:"dshr-settings-row__title",children:"\u5B57\u4F53\u3001\u80CC\u666F\u4E0E\u5E03\u5C40"}),(0,ge.jsx)("div",{className:"dshr-settings-row__hint",children:"\u5B57\u4F53\u3001\u5B57\u91CD\u3001\u5B57\u53F7\u3001\u884C\u8DDD\u3001\u9605\u8BFB\u5BBD\u5EA6\u3001\u76EE\u5F55\u5BBD\u5EA6\u3001\u4EAE\u5EA6\u3001\u80CC\u666F\u989C\u8272\u4E0E\u81EA\u5B9A\u4E49\u80CC\u666F\u56FE\u7247\u3002"})]}),(0,ge.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:o,children:[(0,ge.jsx)(Go,{size:14})," \u6253\u5F00\u5916\u89C2\u9762\u677F"]})]}),(0,ge.jsxs)("div",{className:"dshr-settings-row",children:[(0,ge.jsxs)("div",{children:[(0,ge.jsx)("div",{className:"dshr-settings-row__title",children:"\u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1"}),(0,ge.jsx)("div",{className:"dshr-settings-row__hint",children:"\u6EDA\u52A8\u5230\u5916\u6587\u6BB5\u843D\u540E\u81EA\u52A8\u7FFB\u8BD1\u6210\u4E2D\u6587\uFF0C\u8BD1\u6587\u663E\u793A\u5728\u539F\u6587\u4E0B\u65B9\u3002"})]}),(0,ge.jsxs)("button",{type:"button",className:"dshr-switch",role:"switch","aria-checked":t.autoTranslate,onClick:()=>s({autoTranslate:!t.autoTranslate}),children:[(0,ge.jsx)("span",{className:"dshr-switch__track"}),t.autoTranslate?"\u5F00\u542F":"\u5173\u95ED"]})]}),(0,ge.jsxs)("div",{className:"dshr-settings-row",children:[(0,ge.jsxs)("div",{children:[(0,ge.jsx)("div",{className:"dshr-settings-row__title",children:"\u6B63\u6587\u5B57\u53F7"}),(0,ge.jsxs)("div",{className:"dshr-settings-row__hint",children:[t.fontSize,"px \xB7 \u9002\u5408\u957F\u7BC7\u9605\u8BFB\u7684\u5B57\u53F7"]})]}),(0,ge.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:5},children:[(0,ge.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--outline",onClick:()=>s({fontSize:Math.max(14,t.fontSize-1)}),"aria-label":"\u51CF\u5C0F\u5B57\u53F7",children:(0,ge.jsx)(za,{size:15})}),(0,ge.jsxs)("span",{className:"dshr-chip",style:{minWidth:46,justifyContent:"center"},children:[t.fontSize,"px"]}),(0,ge.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--outline",onClick:()=>s({fontSize:Math.min(26,t.fontSize+1)}),"aria-label":"\u589E\u5927\u5B57\u53F7",children:(0,ge.jsx)(wn,{size:15})})]})]}),(0,ge.jsxs)("div",{className:"dshr-settings-row",children:[(0,ge.jsxs)("div",{children:[(0,ge.jsx)("div",{className:"dshr-settings-row__title",children:"\u884C\u8DDD"}),(0,ge.jsxs)("div",{className:"dshr-settings-row__hint",children:["\u5F53\u524D ",t.lineHeight.toFixed(2)]})]}),(0,ge.jsx)("input",{type:"range",min:"1.45",max:"2.2",step:"0.05",value:t.lineHeight,onChange:l=>s({lineHeight:Number(l.target.value)}),"aria-label":"\u884C\u8DDD"})]}),(0,ge.jsxs)("div",{className:"dshr-settings-row",children:[(0,ge.jsxs)("div",{children:[(0,ge.jsx)("div",{className:"dshr-settings-row__title",children:"\u7FFB\u8BD1\u4E0E AI"}),(0,ge.jsx)("div",{className:"dshr-settings-row__hint",children:"\u4F7F\u7528 DSH \u5F53\u524D\u9ED8\u8BA4\u6A21\u578B\uFF1B\u7FFB\u8BD1\u53EA\u53D1\u9001\u5F53\u524D\u6BB5\u843D\u6216\u9009\u4E2D\u6587\u5B57\uFF0C\u4E0D\u53D1\u9001\u6574\u672C\u4E66\u3002"})]}),(0,ge.jsx)("span",{className:"dshr-chip dshr-chip--brand",children:"DSH \u9ED8\u8BA4\u6A21\u578B"})]}),(0,ge.jsxs)("div",{className:"dshr-settings-row dshr-settings-row--danger",children:[(0,ge.jsxs)("div",{children:[(0,ge.jsx)("div",{className:"dshr-settings-row__title",children:"\u6E05\u7A7A\u672C\u5730\u4E66\u67B6"}),(0,ge.jsx)("div",{className:"dshr-settings-row__hint",children:"\u5220\u9664\u5DF2\u5BFC\u5165\u7684\u6240\u6709\u6587\u6863\u3001\u4E66\u5355\u3001\u6279\u6CE8\u548C\u9605\u8BFB\u8FDB\u5EA6\u3002\u5DF2\u4FDD\u5B58\u7684\u8BC1\u636E\u4FDD\u7559\u5E76\u6807\u4E3A\u539F\u6587\u7F3A\u5931\u3002"})]}),i?(0,ge.jsxs)("div",{style:{display:"flex",gap:6},children:[(0,ge.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm",onClick:()=>a(!1),children:"\u53D6\u6D88"}),(0,ge.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--danger",onClick:()=>{n(),a(!1)},children:[(0,ge.jsx)(yn,{size:13})," \u786E\u8BA4\u6E05\u7A7A"]})]}):(0,ge.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--danger",onClick:()=>a(!0),children:[(0,ge.jsx)(yn,{size:13})," \u6E05\u7A7A"]})]})]})})}function $d({book:t,onCancel:e,onConfirm:r}){let[n,o]=na.default.useState(!1),i=t?.evidenceCount>0;return na.default.useEffect(()=>{let a=s=>{s.key==="Escape"&&e()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[e]),(0,ge.jsx)("div",{className:"dshr-modal-mask",onMouseDown:a=>{a.target===a.currentTarget&&e()},children:(0,ge.jsxs)("div",{className:"dshr-modal",role:"dialog","aria-modal":"true","aria-label":"\u5220\u9664\u6587\u6863",children:[(0,ge.jsx)("h3",{children:"\u4ECE\u4E66\u67B6\u5220\u9664\uFF1F"}),(0,ge.jsxs)("p",{children:["\u300A",t?.title||"\u672A\u547D\u540D\u6587\u6863","\u300B\u53CA\u5176\u9605\u8BFB\u8FDB\u5EA6\u4F1A\u4ECE\u672C\u673A\u5220\u9664\u3002\u539F\u59CB\u6587\u4EF6\u4E0D\u53D7\u5F71\u54CD\u3002"]}),i?(0,ge.jsxs)("p",{children:["\u5173\u8054\u4E86 ",t.evidenceCount," \u6761\u8BC1\u636E\u3002\u4FDD\u7559\u540E\u53EF\u67E5\u770B\u548C\u5BFC\u51FA\uFF0C\u539F\u6587\u4F1A\u6807\u8BB0\u4E3A\u7F3A\u5931\u3002"]}):null,(0,ge.jsxs)("div",{className:"dshr-modal__actions",children:[(0,ge.jsx)("button",{type:"button",className:"dshr-btn",onClick:e,children:"\u53D6\u6D88"}),i?(0,ge.jsxs)(ge.Fragment,{children:[(0,ge.jsx)("button",{type:"button",className:"dshr-btn",onClick:()=>r(!1),children:"\u5220\u9664\u539F\u6587\u5E76\u4FDD\u7559\u8BC1\u636E"}),(0,ge.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--danger",onClick:()=>n?r(!0):o(!0),children:n?"\u786E\u8BA4\u540C\u65F6\u5220\u9664\u8BC1\u636E":"\u4E00\u5E76\u5220\u9664\u8BC1\u636E"})]}):(0,ge.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--danger",onClick:()=>r(!1),children:[(0,ge.jsx)(yn,{size:14})," \u5220\u9664"]})]})]})})}function Hd({message:t}){return t?(0,ge.jsx)("div",{className:"dshr-toast",role:"status",children:t}):null}var ko=Lt(require("react"),1);var ht=require("react/jsx-runtime"),Cf=[{label:"Project Gutenberg",hint:"\u4E03\u4E07\u672C\u516C\u7248\u4E66",href:"https://www.gutenberg.org/"},{label:"Standard Ebooks",hint:"\u7CBE\u6821\u516C\u7248\u4E66",href:"https://standardebooks.org/"},{label:"arXiv",hint:"\u5F00\u653E\u83B7\u53D6\u8BBA\u6587",href:"https://arxiv.org/"},{label:"Open Library",hint:"\u5F00\u653E\u56FE\u4E66\u76EE\u5F55",href:"https://openlibrary.org/"},{label:"Internet Archive",hint:"\u516C\u7248\u4E0E\u5F00\u653E\u9986\u85CF",href:"https://archive.org/"},{label:"Wikisource",hint:"\u516C\u7248\u6587\u732E",href:"https://zh.wikisource.org/"}];function Ud({open:t,busy:e,onClose:r,onSubmit:n}){let[o,i]=ko.default.useState(""),[a,s]=ko.default.useState(""),l=ko.default.useRef(null);return ko.default.useEffect(()=>{t&&(s(""),window.setTimeout(()=>l.current?.focus(),30))},[t]),ko.default.useEffect(()=>{if(!t)return;let p=g=>{g.key==="Escape"&&!e&&r()};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[t,e,r]),t?(0,ht.jsx)("div",{className:"dshr-modal-mask",onMouseDown:p=>{p.target===p.currentTarget&&!e&&r()},children:(0,ht.jsxs)("div",{className:"dshr-modal dshr-online-modal",role:"dialog","aria-modal":"true","aria-label":"\u4ECE\u516C\u5F00\u6765\u6E90\u5BFC\u5165",children:[(0,ht.jsxs)("div",{className:"dshr-online-modal__head",children:[(0,ht.jsxs)("div",{children:[(0,ht.jsxs)("h3",{children:[(0,ht.jsx)(Ua,{size:17})," \u4ECE\u516C\u5F00\u6765\u6E90\u5BFC\u5165"]}),(0,ht.jsx)("p",{children:"\u7C98\u8D34\u7535\u5B50\u4E66\u6587\u4EF6\u7684\u76F4\u94FE\uFF0C\u4E0B\u8F7D\u540E\u81EA\u52A8\u52A0\u5165\u4E66\u67B6\u5E76\u6253\u5F00\u3002"})]}),(0,ht.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:r,disabled:e,"aria-label":"\u5173\u95ED\u5728\u7EBF\u5BFC\u5165",children:(0,ht.jsx)(Er,{size:16})})]}),(0,ht.jsxs)("div",{className:"dshr-online-modal__notice",children:[(0,ht.jsx)("strong",{children:"\u7248\u6743\u63D0\u793A"}),(0,ht.jsx)("span",{children:"\u4EC5\u652F\u6301\u4F60\u786E\u8BA4\u6709\u6743\u4E0B\u8F7D\u7684\u516C\u5F00\u7248\u6743 / \u5F00\u653E\u83B7\u53D6\u8D44\u6E90\u3002\u672C\u529F\u80FD\u4E0D\u5185\u7F6E Z-Library \u7B49\u7248\u6743\u4E0D\u660E\u7684\u4E66\u6E90\uFF0C\u4E5F\u4E0D\u4F1A\u6293\u53D6\u767B\u5F55\u540E\u7684\u79C1\u5BC6\u9875\u9762\u3002"})]}),(0,ht.jsxs)("form",{className:"dshr-online-modal__form",onSubmit:p=>{p.preventDefault();let g=o.trim();if(!/^https:\/\//iu.test(g)){s("\u8BF7\u8F93\u5165\u4EE5 https:// \u5F00\u5934\u7684\u7535\u5B50\u4E66\u6587\u4EF6\u76F4\u94FE\u3002");return}s(""),n(g)},children:[(0,ht.jsx)("label",{htmlFor:"dshr-online-url",children:"\u6587\u4EF6\u76F4\u94FE"}),(0,ht.jsxs)("div",{className:"dshr-online-modal__input",children:[(0,ht.jsx)(sc,{size:15}),(0,ht.jsx)("input",{ref:l,id:"dshr-online-url",type:"url",value:o,onChange:p=>{i(p.target.value),s("")},placeholder:"https://www.gutenberg.org/ebooks/11.epub3.images",spellCheck:"false",autoComplete:"off",disabled:e})]}),a?(0,ht.jsx)("p",{className:"dshr-online-modal__error",children:a}):null,(0,ht.jsx)("p",{className:"dshr-online-modal__hint",children:"\u652F\u6301 PDF / EPUB / MOBI / AZW3 / TXT / Markdown / HTML \u76F4\u94FE\uFF1B\u5355\u4E2A\u6587\u4EF6\u6700\u5927 120 MB\u3002 \u53E4\u767B\u5821\u3001Standard Ebooks\u3001arXiv\u3001Open Library\u3001Internet Archive \u7B49\u7AD9\u70B9\u53EF\u6B63\u5E38\u4F7F\u7528\u3002"}),(0,ht.jsxs)("div",{className:"dshr-online-modal__actions",children:[(0,ht.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--ghost",onClick:r,disabled:e,children:"\u53D6\u6D88"}),(0,ht.jsx)("button",{type:"submit",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:e||o.trim()==="",children:e?"\u6B63\u5728\u4E0B\u8F7D\u2026":"\u4E0B\u8F7D\u5E76\u6253\u5F00"})]})]}),(0,ht.jsxs)("div",{className:"dshr-online-modal__sources",children:[(0,ht.jsx)("span",{children:"\u53BB\u54EA\u91CC\u627E\u4E66\uFF1F"}),(0,ht.jsx)("div",{className:"dshr-online-modal__source-list",children:Cf.map(p=>(0,ht.jsx)("a",{href:p.href,target:"_blank",rel:"noreferrer",title:p.hint,children:p.label},p.label))})]})]})}):null}var Nr=Lt(require("react"),1);var Kt=class t{static GetDistanceBetweenTwoPoint(e,r){return e===null||r===null?1/0:Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))}static GetSegmentLength(e){return t.GetDistanceBetweenTwoPoint(e[0],e[1])}static GetAngleBetweenTwoLine(e,r){let n=e[0].y-e[1].y,o=r[0].y-r[1].y,i=e[1].x-e[0].x,a=r[1].x-r[0].x;return Math.acos((n*o+i*a)/(Math.sqrt(n*n+i*i)*Math.sqrt(o*o+a*a)))}static PointInRect(e,r){return r===null?null:r.x>=e.left&&r.x<=e.width+e.left&&r.y>=e.top&&r.y<=e.top+e.height?r:null}static GetRotatedPoint(e,r,n){return{x:e.x*Math.cos(n)+e.y*Math.sin(n)+r.x,y:e.y*Math.cos(n)-e.x*Math.sin(n)+r.y}}static LimitPointToCircle(e,r,n){if(t.GetDistanceBetweenTwoPoint(e,n)<=r)return n;let o=e.x,i=e.y,a=n.x,s=n.y,l=Math.sqrt(Math.pow(r,2)*Math.pow(o-a,2)/(Math.pow(o-a,2)+Math.pow(i-s,2)))+o;n.x<0&&(l*=-1);let d=(l-o)*(i-s)/(o-a)+i;return o-a+i===0&&(d=r),{x:l,y:d}}static GetIntersectBetweenTwoSegment(e,r,n){return t.PointInRect(e,t.GetIntersectBeetwenTwoLine(r,n))}static GetIntersectBeetwenTwoLine(e,r){let n=e[0].y-e[1].y,o=r[0].y-r[1].y,i=e[1].x-e[0].x,a=r[1].x-r[0].x,s=e[0].x*e[1].y-e[1].x*e[0].y,l=r[0].x*r[1].y-r[1].x*r[0].y,d=n*l-o*s,p=i*l-a*s,g=-((s*a-l*i)/(n*a-o*i)),u=-((n*l-o*s)/(n*a-o*i));if(isFinite(g)&&isFinite(u))return{x:g,y:u};if(Math.abs(d-p)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(e,r){let n=Math.abs(e.x-r.x),o=Math.abs(e.y-r.y),i=Math.max(n,o),a=[e];function s(l,d,p,g,u){return d>l?l+u*(p/g):d<l?l-u*(p/g):l}for(let l=1;l<=i;l+=1)a.push({x:s(e.x,r.x,n,i,l),y:s(e.y,r.y,o,i,l)});return a}};var oa=class{constructor(e,r,n,o){this.direction=e;this.corner=r;this.pageWidth=parseInt(n,10),this.pageHeight=parseInt(o,10)}direction;corner;angle;position;rect;topIntersectPoint=null;sideIntersectPoint=null;bottomIntersectPoint=null;pageWidth;pageHeight;calc(e){try{return this.position=this.calcAngleAndPosition(e),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){let e=[],r=!1;return e.push(this.rect.topLeft),e.push(this.topIntersectPoint),this.sideIntersectPoint===null?r=!0:(e.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(r=!1)),e.push(this.bottomIntersectPoint),(r||this.corner==="bottom")&&e.push(this.rect.bottomLeft),e}getBottomClipArea(){let e=[];return e.push(this.topIntersectPoint),this.corner==="top"?e.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&e.push({x:this.pageWidth,y:0}),e.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?Kt.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&e.push(this.sideIntersectPoint):this.corner==="top"&&e.push({x:this.pageWidth,y:this.pageHeight}),e.push(this.bottomIntersectPoint),e.push(this.topIntersectPoint),e}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){let e=Kt.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?e:Math.PI-e}calcAngleAndPosition(e){let r=e;if(this.updateAngleAndGeometry(r),this.corner==="top"?r=this.checkPositionAtCenterLine(r,{x:0,y:0},{x:0,y:this.pageHeight}):r=this.checkPositionAtCenterLine(r,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(r.x-this.pageWidth)<1&&Math.abs(r.y)<1)throw new Error("Point is too small");return r}updateAngleAndGeometry(e){this.angle=this.calculateAngle(e),this.rect=this.getPageRect(e)}calculateAngle(e){let r=this.pageWidth-e.x+1,n=this.corner==="bottom"?this.pageHeight-e.y:e.y,o=2*Math.acos(r/Math.sqrt(n*n+r*r));n<0&&(o=-o);let i=Math.PI-o;if(!isFinite(o)||i>=0&&i<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(o=-o),o}getPageRect(e){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],e):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],e)}getRectFromBasePoint(e,r){return{topLeft:this.getRotatedPoint(e[0],r),topRight:this.getRotatedPoint(e[1],r),bottomLeft:this.getRotatedPoint(e[2],r),bottomRight:this.getRotatedPoint(e[3],r)}}getRotatedPoint(e,r){return{x:e.x*Math.cos(this.angle)+e.y*Math.sin(this.angle)+r.x,y:e.y*Math.cos(this.angle)-e.x*Math.sin(this.angle)+r.y}}calculateIntersectPoint(e){let r={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=Kt.GetIntersectBetweenTwoSegment(r,[e,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=Kt.GetIntersectBetweenTwoSegment(r,[e,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=Kt.GetIntersectBetweenTwoSegment(r,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=Kt.GetIntersectBetweenTwoSegment(r,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=Kt.GetIntersectBetweenTwoSegment(r,[e,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=Kt.GetIntersectBetweenTwoSegment(r,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(e,r,n){let o=e,i=Kt.LimitPointToCircle(r,this.pageWidth,o);o!==i&&(o=i,this.updateAngleAndGeometry(o));let a=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2)),s=this.rect.bottomRight,l=this.rect.topLeft;if(this.corner==="bottom"&&(s=this.rect.topRight,l=this.rect.bottomLeft),s.x<=0){let d=Kt.LimitPointToCircle(n,a,l);d!==o&&(o=d,this.updateAngleAndGeometry(o))}return o}getSegmentToShadowLine(){let e=this.getShadowStartPoint(),r=e!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint;return[e,r]}};var Rs={slide:250,cover:300,flip:500},Rf="cubic-bezier(.25,.1,.25,1)",Wd=t=>`polygon(${t.filter(Boolean).map(e=>`${e.x}px ${e.y}px`).join(",")})`,Pf=0;function jd(t,e){let r=t.getBoundingClientRect(),n=e.querySelectorAll(".dshr-block,.dshr-chapter__kicker,.dshr-chapter__nav");return[...n.length?n:e.children].map(o=>{let i=o.getBoundingClientRect();return{element:o,top:i.top-r.top+t.scrollTop,bottom:i.bottom-r.top+t.scrollTop,left:i.left-r.left,width:i.width,height:i.height}})}function mi(t){let e=[t,...t.querySelectorAll("*")],r=new Map,n=`dshr-snapshot-${++Pf}-`;for(let o of e){o.id&&(r.set(o.id,n+r.size),o.id=r.get(o.id));for(let i of["data-seg-id","data-anno-block","data-anno-id","autofocus"])o.removeAttribute(i)}if(r.size)for(let o of e)for(let i of[...o.attributes]){if(i.name==="id")continue;let a=i.value.replace(/url\(\s*(['"]?)#([^\s)'";]+)\1\s*\)/g,(s,l,d)=>r.has(d)?`url(#${r.get(d)})`:s);(i.name==="href"||i.name==="xlink:href")&&r.has(a.slice(1))&&(a="#"+r.get(a.slice(1))),a!==i.value&&o.setAttribute(i.name,a)}}function Gd(t,e,r,n,o,i){let a=document.createElement("div");a.className="dshr-turn-page";let s=t.getBoundingClientRect(),l=e.getBoundingClientRect(),d=e.cloneNode(!1);mi(d),Object.assign(d.style,{position:"absolute",left:`${l.left-s.left}px`,top:"0",width:`${l.width}px`,height:"100%",padding:"0",margin:"0"}),a.append(d);let p=new Map([[e,d]]),g=h=>{if(p.has(h))return p.get(h);let _=h.cloneNode(!1);return mi(_),g(h.parentElement).append(_),p.set(h,_),_};for(let h of r){if(h.bottom<=n+48||h.top>=n+t.clientHeight-o||!h.height)continue;if(h.height>t.clientHeight*8)throw new Error("Snapshot block exceeds viewport budget");let _=document.createTreeWalker(h.element,4294967295);for(let E=h.element;E;E=_.nextNode())if(i.nodes-=1,E.nodeType===3&&(i.text-=E.length),i.nodes<0||i.text<0)throw new Error("Snapshot exceeds DOM budget");let C=h.element.cloneNode(!0);mi(C),Object.assign(C.style,{position:"absolute",margin:"0",boxSizing:"border-box",left:`${h.left-(l.left-s.left)}px`,top:`${h.top-n}px`,width:`${h.width}px`,height:`${h.height}px`}),g(h.element.parentElement).append(C);let y=[h.element,...h.element.querySelectorAll("*")],P=[C,...C.querySelectorAll("*")];y.forEach((E,v)=>{E.scrollLeft&&(P[v].scrollLeft=E.scrollLeft),E.tagName==="CANVAS"&&(P[v].width=E.width,P[v].height=E.height,P[v].getContext("2d")?.drawImage(E,0,0))})}let u=t.querySelector(":scope > .dshr-anno-layer");if(u){let h=u.cloneNode(!1);Object.assign(h.style,{top:"0",height:"100%"});for(let _ of u.children){let C=Number.parseFloat(_.style.top),y=Number.parseFloat(_.style.height)||24;if(C+y<=n+48||C>=n+t.clientHeight-o)continue;if(--i.nodes<0)throw new Error("Snapshot marks exceed DOM budget");let P=_.cloneNode(!0);mi(P),P.style.top=`${C-n}px`,h.append(P)}a.append(h)}for(let[h,_]of[["top",48],["bottom",o]]){let C=document.createElement("div");C.className=`dshr-turn-mask dshr-turn-mask--${h}`,C.style.height=`${_}px`,a.append(C)}return a}function Mf(t,e,r){let n=new oa(0,"bottom",String(Math.round(t)),String(Math.round(e))),o=Math.max(1e-4,Math.min(.9999,r)),i=Math.min(e*.22,t*.28)*Math.sin(Math.PI*o);if(!n.calc({x:t*(1-2*o),y:e-i-.1}))return null;let a=n.getActiveCorner(),s=n.getAngle(),l=n.getFlippingClipArea().filter(Boolean).map(d=>Kt.GetRotatedPoint({x:d.x-a.x,y:d.y-a.y},{x:0,y:0},s));return{reveal:Wd(n.getBottomClipArea()),fold:Wd(l),transform:`translate3d(${a.x}px,${a.y}px,0) rotate(${s}rad)`,shadow:n.getShadowStartPoint(),shadowAngle:n.getShadowAngle()+Math.PI*1.5,strength:Math.sin(Math.PI*o)}}function Ps(t,e,r,n,o){let i={nodes:1800,text:64e3};return{page:Gd(t,e,r,n,o,i),budget:i,width:t.clientWidth,height:t.clientHeight}}function qd({reader:t,scroll:e,stage:r,records:n,from:o,to:i,fromBottom:a,toBottom:s,mode:l,direction:d,departing:p}){let g=Object.hasOwn(Rs,l)?l:"slide",u=e.getBoundingClientRect(),h=t.getBoundingClientRect(),_=document.createElement("div");_.className=`dshr-flow-transition is-${g}`,_.dataset.direction=String(d),_.setAttribute("aria-hidden","true"),_.inert=!0,Object.assign(_.style,{left:`${u.left-h.left}px`,top:`${u.top-h.top}px`,width:`${e.clientWidth}px`,height:`${e.clientHeight}px`});let C=window.getComputedStyle(e);for(let L of Array.from(C))L.startsWith("--dshr-")&&_.style.setProperty(L,C.getPropertyValue(L));let y=p??Ps(e,r,n,o,a),P=y.page,E=Gd(e,r,n,i,s,y.budget);P.dataset.turnPage="old",E.dataset.turnPage="new",_.append(P,E);let v=[],S=0,M,k=!1,R,I=()=>{k=!0,cancelAnimationFrame(S),clearTimeout(M);for(let L of v)L.cancel();R?.(),_.remove()},b=(L,F)=>{let $=L.animate(F,{duration:Rs[g],easing:Rf,fill:"both"});return $.finished.catch(()=>{}),v.push($),$};try{if(t.append(_),g==="slide")b(P,[{transform:"translateX(0)"},{transform:`translateX(${-d*100}%)`}]),b(E,[{transform:`translateX(${d*100}%)`},{transform:"translateX(0)"}]);else if(g==="cover"){let L=d>0?E:P,F=d>0?P:E;F.dataset.turnRole="stationary",L.dataset.turnRole="moving",F.style.zIndex="0",L.style.zIndex="1",L.classList.add("has-edge-shadow"),b(L,d>0?[{transform:"translateX(100%)"},{transform:"translateX(0)"}]:[{transform:"translateX(0)"},{transform:"translateX(100%)"}])}else{let L=d>0?P:E,F=d>0?E:P;L.style.zIndex="0",F.style.zIndex="1";let $=document.createElement("div");$.className="dshr-turn-fold";let J=document.createElement("div");J.className="dshr-turn-fold-shadow",F.append(J),_.append($);let te=b(_,[{opacity:1},{opacity:1}]),ie=U=>{let se=d>0?U:1-U;if(se<=0){F.style.clipPath="inset(0 100% 0 0)",$.hidden=!0;return}if(se>=1){F.style.clipPath="none",$.hidden=!0,J.hidden=!0;return}let Y=Mf(e.clientWidth,e.clientHeight,se);Y&&($.hidden=!1,J.hidden=!1,F.style.clipPath=Y.reveal,$.style.clipPath=Y.fold,$.style.transform=Y.transform,Y.shadow&&Object.assign(J.style,{opacity:String(Y.strength*.16),transform:`translate3d(${Y.shadow.x}px,${Y.shadow.y-e.clientHeight}px,0) rotate(${Y.shadowAngle}rad)`}))};ie(0);let ue=()=>{k||(ie(te.effect.getComputedTiming().progress??0),S=requestAnimationFrame(ue))};S=requestAnimationFrame(ue)}}catch(L){throw I(),L}let O=Promise.all(v.map(L=>L.finished.catch(()=>{})));return{overlay:_,width:e.clientWidth,height:e.clientHeight,cancel:I,async play(){try{await Promise.race([O,new Promise(L=>{R=L,M=setTimeout(L,Rs[g]+300)})])}finally{I()}}}}var Of='a,button,input,select,textarea,img,video,[role="button"],[contenteditable="true"],.dshr-pdf-frame';function Ms(t){let e=window.getSelection?.();return e&&!e.isCollapsed&&(t.contains(e.anchorNode)||t.contains(e.focusNode))}function Xd({scroll:t,reader:e,stage:r,hint:n,canTurn:o,turn:i}){let a=null,s="",l=()=>Ms(t),d=E=>{let{target:v,clientX:S,clientY:M}=E;if(!(v instanceof Element)||v.closest(Of)||r?.contains(v))return null;let k=t.getBoundingClientRect(),R=k.left+t.clientLeft,I=R+t.clientWidth,b=k.top+t.clientTop+12,O=t.clientHeight-24;if(M<b||M>=b+O)return null;let L=Math.max(24,Math.min(64,t.clientWidth*.06)),F=S>=R&&S<R+L?-1:S<I&&S>=I-L?1:0;if(!F||!o(F))return null;let $=r||t.querySelector('.dshr-pdf-page[data-active="true"] .dshr-pdf-frame');if(!$)return null;let J=$.getBoundingClientRect();if(J.right<=R||J.left>=I)return null;let te=Math.min(L,F<0?J.left-R:I-J.right);return te<24||(F<0?S>=R+te:S<I-te)?null:{direction:F,left:F<0?R:I-te,top:b,width:te,height:O}},p=()=>{s&&(s="",n.hidden=!0,delete t.dataset.pageGutterHover)},g=()=>{a=null,p()},u=E=>Math.hypot(E.clientX-a.x,E.clientY-a.y)>6,P={pointerdown:E=>{if(a=null,E.button!==0||!E.isPrimary||E.ctrlKey||E.metaKey||E.altKey||E.shiftKey||l())return;let v=d(E);v&&(a={id:E.pointerId,direction:v.direction,x:E.clientX,y:E.clientY,time:E.timeStamp,released:!1})},pointermove:E=>{let v=d(E);if(a&&(E.pointerId!==a.id||u(E)||v?.direction!==a.direction)&&(a=null),!v||E.buttons||E.pointerType!=="mouse"||l()){p();return}let S=e.getBoundingClientRect(),M=v.left-S.left,k=v.top-S.top,R=[M,k,v.width,v.height].join(":");R!==s&&(s=R,Object.assign(n.style,{left:M+"px",top:k+"px",width:v.width+"px",height:v.height+"px"}),n.hidden=!1,t.dataset.pageGutterHover="true")},pointerup:E=>{if(!a||E.pointerId!==a.id||u(E)||E.timeStamp-a.time>500||l()||d(E)?.direction!==a.direction){a=null;return}a.released=!0},click:E=>{let v=a;a=null,!(!v?.released||E.timeStamp-v.time>600||E.defaultPrevented||l()||d(E)?.direction!==v.direction)&&i(v.direction,E.detail>1)},selectstart:E=>{a&&E.preventDefault()},pointerleave:()=>{a?.released||(a=null),p()},pointercancel:g,contextmenu:g,scroll:p};for(let[E,v]of Object.entries(P))t.addEventListener(E,v);return{hide:p,dispose(){for(let[E,v]of Object.entries(P))t.removeEventListener(E,v);g()}}}var vr=require("react/jsx-runtime"),Kd='input, textarea, select, [contenteditable="true"]',Yd=".dshr-modal-mask,.dshr-modal,.dshr-appearance-panel,.dshr-anno-panel,.dshr-ai,.dshr-selection,.dshr-online-modal,.dshr-anno-composer,.dshr-pdf-translation-panel",Lf=".dshr-topbar,.dshr-immersive-controls,.dshr-toc,.dshr-paged-controls,"+Yd+","+Kd,Df=()=>window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,Vd=220,To=null;function Zd({enabled:t,animation:e,bookMode:r=!1,bookFrame:n=!1,frameTop:o=52,frameLeft:i=0,readerKey:a,canPrevChapter:s,canNextChapter:l,chapterEntry:d,onChapterTurn:p,onChapterEntered:g}){let[u,h]=Nr.default.useState({page:1,pages:1}),[_,C]=Nr.default.useState({top:48,bottom:56}),[y,P]=Nr.default.useState(null),E=Nr.default.useRef(null),v=Nr.default.useRef(null),S=Nr.default.useRef(null),M=Nr.default.useRef(0),k=Nr.default.useRef(-1/0),R=Nr.default.useRef({});if(Nr.default.useLayoutEffect(()=>{R.current={canPrevChapter:s,canNextChapter:l,chapterEntry:d,onChapterTurn:p,onChapterEntered:g,animation:e}}),Nr.default.useLayoutEffect(()=>{let O=S.current;if(S.current=null,!t)return;let L=E.current?.closest(".dshr-reader"),F=L?.querySelector(".dshr-content,.dshr-pdf-scroll");if(!F)return;let $=F.classList.contains("dshr-pdf-scroll"),J=F.querySelector(".dshr-content__inner"),te=$?null:R.current.chapterEntry,ie=te&&O?.entry===te?O.snapshot:null,ue=te?.edge,U=te?.direction,se=-1/0,Y=!1,T=sd(),q={scrollBehavior:F.style.scrollBehavior,overflowAnchor:F.style.overflowAnchor};F.style.scrollBehavior="auto",F.style.overflowAnchor="none",F.classList.add("dshr-paged-scroll");let re=!1,me=!0,ne=!1,Te=0,Xe=0,Ee=0,$e=[],_e=null,Tt=[],f=null,c=[],w=!$&&J?document.createElement("div"):null;w&&(w.className="dshr-page-tail",w.setAttribute("aria-hidden","true"),F.append(w));let x=()=>{F.dataset.readerNavigation=String(++M.current)};x(),C({top:48,bottom:56});let V=()=>{if(re)return;F.dataset.readerPage=String(T.page),F.dataset.readerPages=String(T.pages),F.dataset.readerTarget=String(T.top),h(be=>be.page===T.page&&be.pages===T.pages?be:{page:T.page,pages:T.pages});let oe=de(T.top);C(be=>be.bottom===oe?be:{top:48,bottom:oe})},de=oe=>{let be=oe+F.clientHeight-56,Ie=$e.find(Pe=>Pe.top<be-.5&&Pe.bottom>be+.5&&Pe.bottom-Pe.top<=F.clientHeight-48-56&&Pe.top>oe+48);return Ie?Math.max(56,F.clientHeight-(Ie.top-oe)):56},he=()=>{Math.abs(F.scrollTop-T.top)>.5&&(F.scrollTop=T.top)},ye=oe=>{if(re||$||Y||!J||!F.clientHeight||!F.clientWidth)return;if(ne){me=!0;return}$e=ld(F,J),c=jd(F,J);let be=id($e,F.clientHeight);if(w){let Pe=F.scrollHeight-w.offsetHeight,ct=Math.max(0,Math.ceil(be.at(-1)+F.clientHeight-Pe));w.style.height=ct+"px"}let Ie=oe;if(Ie==null&&(ue==="start"?Ie=be[0]:ue==="end"?Ie=be.at(-1):te?Ie=Math.max(0,Math.min(1,Number(te.scrollRatio)||0))*Math.max(0,F.scrollHeight-F.clientHeight):Ie=cd(_e,F,F.scrollTop)),T.replace(be,Ie),me=!1,he(),_e=vs($e,T.top,F),V(),te){let Pe=te;te=null,se=performance.now();let ct=ie;ie=null,ct&&ct.width===F.clientWidth&&ct.height===F.clientHeight&&Ye(T.top,Pe.direction,ct),R.current.onChapterEntered?.(Pe,Zo(F))}},we=oe=>{re||$||Y||(me=!0,ne&&f&&(f.width!==F.clientWidth||f.height!==F.clientHeight||oe?.type==="loadingdone")&&f.cancel(),!Xe&&(Xe=requestAnimationFrame(()=>{Xe=0,ne||ye()})))},Ve=()=>{Te+=1,f?.cancel(),f=null,delete F.dataset.readerTurning,L.classList.remove("dshr-is-turning"),ne=!1,Tt.length=0},Me=()=>J?.animate&&!Df(),Ye=async(oe,be,Ie)=>{ne=!0;let Pe=++Te;F.dataset.readerTurning="true";try{Me()&&(f=qd({reader:L,scroll:F,stage:J,records:c,from:oe,to:T.top,fromBottom:de(oe),toBottom:de(T.top),mode:R.current.animation,direction:be,departing:Ie}),L.classList.add("dshr-is-turning")),he(),f&&await f.play()}catch{}finally{!re&&Pe===Te&&(f?.cancel(),f=null,delete F.dataset.readerTurning,L.classList.remove("dshr-is-turning"),ne=!1,me?ye():(he(),V()),Tt.length&&et(Tt.shift()))}},st=oe=>{let{canPrevChapter:be,canNextChapter:Ie,onChapterTurn:Pe}=R.current;if(!Pe||!(oe<0?be:Ie))return;Y=!0,Tt.length=0,x();let ct={edge:oe>0?"start":"end",direction:oe};if(Me())try{S.current={entry:ct,snapshot:Ps(F,J,c,T.top,de(T.top))}}catch{}Pe(oe,ct)},et=(oe,be=!1)=>{if(re||Y)return;if(To=L,oe=oe>0?1:-1,$){F.dispatchEvent(new CustomEvent("dshr-pdf-page-turn",{detail:oe}));return}if(te){ye();return}if(oe===U&&(be||ne||performance.now()-se<Vd))return;if(U=null,ne){Tt.length<32&&Tt.push(oe);return}if(me&&ye(),me||ne)return;let Ie=T.top;if(!T.turn(oe)){st(oe);return}ue=null,_e=vs($e,T.top,F),x(),V(),Ye(Ie,oe)},je=Xd({scroll:F,reader:L,stage:J,hint:v.current,turn:et,canTurn:oe=>{if($){let be=Number(F.dataset.pdfPage);return oe<0?be>1:be>0&&be<Number(F.dataset.pdfPages)}return oe<0?T.page>1||R.current.canPrevChapter:T.page<T.pages||R.current.canNextChapter}}),pe=()=>{$||ne||Y||me||Ee||(Ee=requestAnimationFrame(()=>{Ee=0,!re&&!ne&&!Y&&!me&&he()}))},Le=oe=>{if($||!J||(oe.preventDefault(),Y))return;Ve(),U=null,ue=null,ie=null;let be=oe.detail||{},Ie=Number(be.top)||0;be.ratio!=null&&(Ie=Number(be.ratio)*Math.max(0,F.scrollHeight-F.clientHeight)),be.element&&J.contains(be.element)&&(Ie=be.element.getBoundingClientRect().top-F.getBoundingClientRect().top+F.scrollTop-48),x(),_e=null,ye(Math.max(0,Ie))},It=oe=>{if(oe.target instanceof Element&&oe.target.closest(Lf)||oe.ctrlKey||oe.metaKey||Math.abs(oe.deltaY)<8&&Math.abs(oe.deltaX)<8)return;oe.preventDefault();let be=performance.now(),Ie=be-k.current;k.current=be,Ie>=Vd&&et(oe.deltaY>0||oe.deltaX>0?1:-1)},lt=oe=>{if(oe.defaultPrevented||oe.repeat||oe.ctrlKey||oe.metaKey||oe.altKey||!F.isConnected||oe.target instanceof Element&&oe.target.closest(Kd+","+Yd+",.dshr-topbar--pdf,.dshr-immersive-controls"))return;let be=oe.target instanceof Element&&oe.target.closest(".dshr-root"),Ie=oe.target instanceof Element&&oe.target.closest(".dshr-reader");if(Ie&&Ie!==L||be&&!be.contains(L)||!be&&(To?.isConnected?To!==L:[...document.querySelectorAll(".dshr-reader")].find(Ot=>Ot.getBoundingClientRect().height>0)!==L)||Ms(F))return;let Pe=["ArrowDown","ArrowRight","PageDown"," "].includes(oe.key),ct=["ArrowUp","ArrowLeft","PageUp"].includes(oe.key);!Pe&&!ct||(oe.preventDefault(),et(Pe?1:-1))},Ze=oe=>{je.hide();let{page:be,pages:Ie}=oe.detail||{};Number.isFinite(be)&&be>=1&&Number.isFinite(Ie)&&Ie>=1&&h({page:be,pages:Ie})},wt=oe=>{et(Number(oe.detail)>0?1:-1)},Qe=()=>{To=L};L.addEventListener("pointerdown",Qe),F.addEventListener("wheel",It,{passive:!1}),F.addEventListener("scroll",pe,{passive:!0}),F.addEventListener("dshr-flow-navigate",Le),F.addEventListener("dshr-page-turn",wt),F.addEventListener("dshr-pdf-page-state",Ze),window.addEventListener("keydown",lt);let lr,Mt,Bt,_r=()=>{if(re)return;je.hide();let oe=F.getBoundingClientRect(),be=L.getBoundingClientRect(),Ie={center:oe.left-be.left+oe.width/2,bottom:Math.max(0,be.bottom-oe.bottom)};P(Pe=>Pe&&Object.keys(Ie).every(ct=>Math.abs(Pe[ct]-Ie[ct])<.5)?Pe:Ie)};if(_r(),typeof ResizeObserver=="function"&&(Bt=new ResizeObserver(_r),Bt.observe(F),Bt.observe(L)),$){let oe=Number(F.dataset.pdfPage),be=Number(F.dataset.pdfPages);oe>0&&be>0&&h({page:oe,pages:be})}else ye(),typeof ResizeObserver=="function"&&(lr=new ResizeObserver(we),lr.observe(F),lr.observe(J)),typeof MutationObserver=="function"&&(Mt=new MutationObserver(we),Mt.observe(J,{subtree:!0,childList:!0,characterData:!0})),J.addEventListener("load",we,!0),document.fonts?.addEventListener("loadingdone",we),document.fonts?.ready.then(we);return()=>{re=!0,Ve(),cancelAnimationFrame(Xe),cancelAnimationFrame(Ee),lr?.disconnect(),Bt?.disconnect(),Mt?.disconnect(),J?.removeEventListener("load",we,!0),document.fonts?.removeEventListener("loadingdone",we),F.removeEventListener("wheel",It),F.removeEventListener("scroll",pe),F.removeEventListener("dshr-flow-navigate",Le),F.removeEventListener("dshr-page-turn",wt),F.removeEventListener("dshr-pdf-page-state",Ze),window.removeEventListener("keydown",lt),L.removeEventListener("pointerdown",Qe),To===L&&(To=null),F.classList.remove("dshr-paged-scroll"),Object.assign(F.style,q);for(let oe of["readerPage","readerPages","readerTarget","readerNavigation","readerTurning"])delete F.dataset[oe];w?.remove(),je.dispose()}},[t,r,a]),!t)return null;let{page:I,pages:b}=u;return(0,vr.jsxs)("div",{ref:E,className:`dshr-paged-controls${r?" is-book":""}${n?" has-book-frame":""}`,style:{...y?{"--dshr-paged-center":`${y.center}px`,"--dshr-paged-bottom":`${y.bottom+14}px`}:{},"--dshr-book-frame-top":`${Math.max(0,Number(o)||0)}px`,"--dshr-book-frame-left":`${Math.max(0,Number(i)||0)}px`,"--dshr-book-top-cover":`${_.top}px`,"--dshr-book-bottom-cover":`${_.bottom}px`},"aria-live":"polite",children:[n?(0,vr.jsxs)(vr.Fragment,{children:[(0,vr.jsx)("div",{className:"dshr-book-mask dshr-book-mask--top","aria-hidden":"true"}),(0,vr.jsx)("div",{className:"dshr-book-mask dshr-book-mask--bottom","aria-hidden":"true"})]}):null,(0,vr.jsx)("div",{ref:v,className:"dshr-page-gutter-hint",hidden:!0,"aria-hidden":"true"}),(0,vr.jsxs)("div",{className:"dshr-paged-status",title:"\u70B9\u51FB\u5DE6\u53F3\u7559\u767D\u6216\u6309\u65B9\u5411\u952E\u7FFB\u9875",children:[(0,vr.jsx)("b",{children:I}),(0,vr.jsx)("span",{children:"/"}),(0,vr.jsx)("em",{children:b})]})]})}var Sn=Lt(require("react"),1);var Bs=Object.freeze([Object.freeze({id:"serif",label:"\u5B8B\u4F53 / Serif",stack:'"Songti SC", "Noto Serif SC", "Source Han Serif SC", "STSong", "SimSun", "\u5B8B\u4F53", Georgia, "Times New Roman", serif'}),Object.freeze({id:"sans",label:"\u9ED1\u4F53 / Sans",stack:'"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", "Segoe UI", system-ui, -apple-system, sans-serif'}),Object.freeze({id:"kai",label:"\u6977\u4F53 / Kai",stack:'"Kaiti SC", "STKaiti", "KaiTi", "\u6977\u4F53", "Noto Serif SC", "Songti SC", "SimSun", serif'}),Object.freeze({id:"system",label:"\u7CFB\u7EDF\u9ED8\u8BA4",stack:'system-ui, -apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif'})]),$s=Object.freeze([Object.freeze({value:400,label:"\u5E38\u89C4"}),Object.freeze({value:500,label:"\u4E2D\u7B49"}),Object.freeze({value:600,label:"\u52A0\u7C97"})]),av=Object.freeze([Object.freeze({id:"scroll",label:"\u6EDA\u52A8"}),Object.freeze({id:"book",label:"\u6A2A\u7248"})]),ru=Object.freeze([Object.freeze({id:"slide",label:"\u6A2A\u5411\u6ED1\u9875",hint:"\u524D\u540E\u4E24\u9875\u8FDE\u7EED\u5E73\u79FB\u8854\u63A5\uFF0C\u4E0D\u6DE1\u51FA\u6B63\u6587"}),Object.freeze({id:"cover",label:"\u4E66\u9875\u8986\u76D6",hint:"\u65B0\u9875\u4ECE\u53F3\u4FA7\u8986\u76D6\u9759\u6B62\u5E95\u9875\uFF0C\u56DE\u7FFB\u65F6\u63ED\u5F00\u5F53\u524D\u9875"}),Object.freeze({id:"flip",label:"3D \u4E66\u9875",hint:"\u4ECE\u53F3\u4E0B\u9875\u89D2\u5411\u4E66\u810A\u6298\u53E0\uFF0C\u5E26\u7EB8\u80CC\u4E0E\u52A8\u6001\u9634\u5F71"})]),vi=Object.freeze([Object.freeze({id:"paper",label:"\u7EB8\u5F20",bg:"#fbf7ee",ink:"#2b2a26",muted:"#736f64",border:"rgba(43, 42, 38, 0.15)",accent:"#9a6b2f"}),Object.freeze({id:"white",label:"\u767D\u8272",bg:"#ffffff",ink:"#1f2328",muted:"#5c6370",border:"rgba(31, 35, 40, 0.13)",accent:"#3f5ce0"}),Object.freeze({id:"sepia",label:"\u7F8A\u76AE\u7EB8",bg:"#f2e6cf",ink:"#453322",muted:"#715f47",border:"rgba(69, 51, 34, 0.18)",accent:"#8f5a24"}),Object.freeze({id:"green",label:"\u62A4\u773C\u7EFF",bg:"#e3efe4",ink:"#263a2b",muted:"#556b5a",border:"rgba(38, 58, 43, 0.17)",accent:"#3d6a47"}),Object.freeze({id:"night",label:"\u591C\u95F4",bg:"#1c1e22",ink:"#e9e6dd",muted:"#a6a29a",border:"rgba(233, 230, 221, 0.16)",accent:"#d2a76b"}),Object.freeze({id:"custom",label:"\u81EA\u5B9A\u4E49"})]),er=Object.freeze({fontSize:18,lineHeight:1.85,fontFamily:"serif",fontWeight:400,contentWidth:760,tocWidth:260,readingMode:"scroll",pageAnimation:"slide",bookAnimation:"slide",brightness:1,backgroundPreset:"paper",customBackground:"#fbf7ee",textTone:"auto",backgroundImageKey:"",backgroundImageOpacity:.26,backgroundImageBlur:0}),Oe=Object.freeze({fontSize:Object.freeze({min:13,max:34,step:1}),lineHeight:Object.freeze({min:1.35,max:2.4,step:.05}),contentWidth:Object.freeze({min:520,max:1600,step:20}),tocWidth:Object.freeze({min:180,max:520,step:10}),brightness:Object.freeze({min:.6,max:1.2,step:.01}),backgroundImageOpacity:Object.freeze({min:0,max:.8,step:.01}),backgroundImageBlur:Object.freeze({min:0,max:12,step:1})}),aa=Object.freeze($s.map(t=>t.value)),Ff=Object.freeze(vi.map(t=>t.id)),zf=new Map(vi.map(t=>[t.id,t])),Qd=new Map(Bs.map(t=>[t.id,t])),Bf=Object.freeze(["auto","dark","light"]),Ds=Object.freeze({ink:"#181511",muted:"#6b6559",border:"rgba(32, 29, 24, 0.15)",tone:"dark"}),Fs=Object.freeze({ink:"#f8f5ec",muted:"#b3ada0",border:"rgba(245, 242, 233, 0.18)",tone:"light"}),$f="#8a5a24",Hf="#d8b06a",Jd=Object.freeze({white:"#ffffff",black:"#000000",red:"#ff0000",lime:"#00ff00",blue:"#0000ff",yellow:"#ffff00",aqua:"#00ffff",cyan:"#00ffff",fuchsia:"#ff00ff",magenta:"#ff00ff",silver:"#c0c0c0",gray:"#808080",grey:"#808080",maroon:"#800000",olive:"#808000",green:"#008000",purple:"#800080",teal:"#008080",navy:"#000080",orange:"#ffa500",pink:"#ffc0cb",brown:"#a52a2a",gold:"#ffd700",beige:"#f5f5dc",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",turquoise:"#40e0d0",salmon:"#fa8072",coral:"#ff7f50",indigo:"#4b0082",violet:"#ee82ee",wheat:"#f5deb3",tan:"#d2b48c",snow:"#fffafa",linen:"#faf0e6"});function Eo(t){return Math.max(0,Math.min(255,Math.round(t)))}function Uf(t){let e=t.slice(1);if(!/^[0-9a-f]+$/iu.test(e))return null;if(e.length===3||e.length===4){let[r,n,o]=e.slice(0,3).split("").map(i=>Number.parseInt(`${i}${i}`,16));return{r,g:n,b:o}}return e.length===6||e.length===8?{r:Number.parseInt(e.slice(0,2),16),g:Number.parseInt(e.slice(2,4),16),b:Number.parseInt(e.slice(4,6),16)}:null}function Wf(t){let e=/^([+-]?(?:\d+\.?\d*|\.\d+))(%?)$/u.exec(t);if(!e)return null;let r=Number(e[1]);return Number.isFinite(r)?(e[2]==="%"&&(r=r/100*255),Eo(r)):null}function jf(t){let e=t.replace(/\//gu," ").split(/[\s,]+/u).filter(Boolean);if(e.length<3)return null;let r=e.slice(0,3).map(Wf);return r.some(n=>n===null)?null:{r:r[0],g:r[1],b:r[2]}}function Os(t,e,r){let n=r;return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Gf(t){let e=t.replace(/\//gu," ").split(/[\s,]+/u).filter(Boolean);if(e.length<3)return null;let r=Number.parseFloat(e[0]),n=Number.parseFloat(e[1]),o=Number.parseFloat(e[2]);if(![r,n,o].every(Number.isFinite))return null;let i=Math.max(0,Math.min(100,n))/100,a=Math.max(0,Math.min(100,o))/100,s=(r%360+360)%360/360;if(i===0){let p=Eo(a*255);return{r:p,g:p,b:p}}let l=a<.5?a*(1+i):a+i-a*i,d=2*a-l;return{r:Eo(Os(d,l,s+1/3)*255),g:Eo(Os(d,l,s)*255),b:Eo(Os(d,l,s-1/3)*255)}}function bi(t){if(typeof t!="string")return null;let e=t.trim().toLowerCase();if(!e)return null;if(e.startsWith("#"))return Uf(e);if(e in Jd)return bi(Jd[e]);let r=/^([a-z]+)\((.*)\)$/u.exec(e);if(!r)return null;let n=r[1],o=r[2];return n==="rgb"||n==="rgba"?jf(o):n==="hsl"||n==="hsla"?Gf(o):null}function eu({r:t,g:e,b:r}){return`#${[t,e,r].map(n=>Eo(n).toString(16).padStart(2,"0")).join("")}`}function Ls(t){let e=t/255;return e<=.03928?e/12.92:((e+.055)/1.055)**2.4}function tu(t){let e=bi(t);return e?.2126*Ls(e.r)+.7152*Ls(e.g)+.0722*Ls(e.b):1}function xi(t,e){let r=tu(t),n=tu(e),o=Math.max(r,n),i=Math.min(r,n);return(o+.05)/(i+.05)}function Hs(t,e="#ffffff"){let r=bi(t);if(r)return eu(r);let n=bi(e);return n?eu(n):"#ffffff"}function zs(t){let e=xi(Ds.ink,t);return xi(Fs.ink,t)>e?{...Fs}:{...Ds}}function yi(t){let e=zs(t);return{ink:e.ink,muted:e.muted,border:e.border}}function Wr(t,e,r,n){let o=Number(t);return Number.isFinite(o)?Math.max(e,Math.min(r,o)):n}function qf(t){return Ff.includes(t)?t:"paper"}function Xf(t){return Bf.includes(t)?t:"auto"}function Vf(t){let e=Number(t);if(!Number.isFinite(e))return 400;let r=Math.max(aa[0],Math.min(aa[aa.length-1],e)),n=aa[0],o=Number.POSITIVE_INFINITY;for(let i of aa){let a=Math.abs(i-r);a<o&&(n=i,o=a)}return n}function Kf(t){return(Qd.get(t)||Qd.get("serif")).stack}function Yf(t){return t>=600?700:600}function Us(t){let e=t&&typeof t=="object"?t:{},r=qf(e.backgroundPreset),n=Hs(e.customBackground,er.customBackground),o=r==="custom"?null:zf.get(r),i=o?o.bg:n,a=zs(i);o&&(a={ink:o.ink,muted:o.muted,border:o.border});let s=Xf(e.textTone);s==="dark"?a={...Ds}:s==="light"&&(a={...Fs});let l=o?o.accent:zs(i).tone==="light"?Hf:$f,d=Vf(e.fontWeight);return{preset:r,bg:i,ink:a.ink,muted:a.muted,border:a.border,accent:l,fontFamily:Kf(e.fontFamily),fontWeight:d,headingWeight:Yf(d),width:Wr(e.contentWidth,Oe.contentWidth.min,Oe.contentWidth.max,er.contentWidth),brightness:Wr(e.brightness,Oe.brightness.min,Oe.brightness.max,er.brightness),imageOpacity:Wr(e.backgroundImageOpacity,Oe.backgroundImageOpacity.min,Oe.backgroundImageOpacity.max,er.backgroundImageOpacity),imageBlur:Wr(e.backgroundImageBlur,Oe.backgroundImageBlur.min,Oe.backgroundImageBlur.max,er.backgroundImageBlur)}}function Zf(t){return`url("${String(t).replace(/[\n\r\f]/gu," ").replace(/\\/gu,"\\\\").replace(/"/gu,'\\"')}")`}function wi(t,e){let r=Us(t),n=typeof e=="string"&&e.trim()?Zf(e.trim()):"none";return{"--dshr-reader-bg":r.bg,"--dshr-reader-ink":r.ink,"--dshr-reader-muted":r.muted,"--dshr-reader-border":r.border,"--dshr-reader-accent":r.accent,"--dshr-reader-font":r.fontFamily,"--dshr-reader-weight":String(r.fontWeight),"--dshr-reader-heading-weight":String(r.headingWeight),"--dshr-reader-width":`${r.width}px`,"--dshr-reader-brightness":String(r.brightness),"--dshr-reader-image-opacity":String(r.imageOpacity),"--dshr-reader-image-blur":`${r.imageBlur}px`,"--dshr-reader-image":n}}var Ws=String.raw`
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
`;var X=require("react/jsx-runtime");function Ao({size:t=15,children:e,viewBox:r="0 0 24 24"}){return(0,X.jsx)("svg",{width:t,height:t,viewBox:r,fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:e})}function Qf(t){return(0,X.jsx)(Ao,{...t,children:(0,X.jsx)("path",{d:"m6 6 12 12M18 6 6 18"})})}function Jf(t){return(0,X.jsxs)(Ao,{...t,children:[(0,X.jsx)("rect",{x:"3",y:"4.5",width:"18",height:"15",rx:"2.4"}),(0,X.jsx)("circle",{cx:"8.4",cy:"9.6",r:"1.5"}),(0,X.jsx)("path",{d:"m4 17 4.6-4.4a1.6 1.6 0 0 1 2.2 0l2.5 2.4 2.1-2a1.6 1.6 0 0 1 2.2 0L20 15.6"})]})}function eg(t){return(0,X.jsxs)(Ao,{...t,children:[(0,X.jsx)("path",{d:"M12 16V4"}),(0,X.jsx)("path",{d:"m7 9 5-5 5 5"}),(0,X.jsx)("path",{d:"M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15"})]})}function tg(t){return(0,X.jsxs)(Ao,{...t,children:[(0,X.jsx)("path",{d:"M4 7h16M9 7V5h6v2M7 7l.7 12.2A1.8 1.8 0 0 0 9.5 21h5a1.8 1.8 0 0 0 1.8-1.8L17 7"}),(0,X.jsx)("path",{d:"M10 11v6M14 11v6"})]})}function rg(t){return(0,X.jsxs)(Ao,{...t,children:[(0,X.jsx)("path",{d:"M20 11a8 8 0 1 0-2.3 6.3"}),(0,X.jsx)("path",{d:"M20 4v7h-7"})]})}function nu(t){return(0,X.jsx)(Ao,{...t,children:(0,X.jsx)("path",{d:"m5 12 4.5 4.5L19 7"})})}var ng=Object.freeze([{id:"auto",label:"\u81EA\u52A8"},{id:"dark",label:"\u6DF1\u8272\u5B57"},{id:"light",label:"\u6D45\u8272\u5B57"}]),og=Object.freeze(["fontSize","lineHeight","fontFamily","fontWeight","contentWidth","tocWidth","brightness","backgroundPreset","customBackground","textTone","backgroundImageOpacity","backgroundImageBlur"]),ag='button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';function ou({label:t,value:e,options:r,onChange:n}){return(0,X.jsx)("div",{className:"dshr-appearance-segmented",role:"group","aria-label":t,children:r.map(o=>{let i=o.value!==void 0?o.value:o.id;return(0,X.jsx)("button",{type:"button",className:"dshr-appearance-segmented__item","aria-pressed":e===i,onClick:()=>n(i),children:o.label},String(i))})})}function eo({label:t,valueText:e,min:r,max:n,step:o,value:i,onChange:a,disabled:s,hint:l}){return(0,X.jsxs)("label",{className:`dshr-appearance-slider${s?" is-disabled":""}`,children:[(0,X.jsxs)("span",{className:"dshr-appearance-slider__head",children:[(0,X.jsx)("span",{children:t}),(0,X.jsx)("span",{className:"dshr-appearance-slider__value",children:e})]}),(0,X.jsx)("input",{type:"range",min:r,max:n,step:o,value:i,disabled:s,onChange:d=>a(Number(d.target.value)),"aria-label":t}),l?(0,X.jsx)("span",{className:"dshr-appearance-slider__hint",children:l}):null]})}function au({open:t,settings:e,backgroundImageUrl:r,onChange:n,onPickBackgroundImage:o,onClearBackgroundImage:i,onClose:a}){let s=Sn.default.useRef(null),l=Sn.default.useId(),[d,p]=Sn.default.useState(!1),g=Us(e),u=!!r,h=Hs(e.customBackground,er.customBackground),_=yi(h).ink,C=xi(g.ink,g.bg),y=Wr(e.fontSize,Oe.fontSize.min,Oe.fontSize.max,er.fontSize),P=Wr(e.lineHeight,Oe.lineHeight.min,Oe.lineHeight.max,er.lineHeight),E=!u&&og.every(O=>e[O]===er[O]),v=Sn.default.useCallback(O=>{typeof n=="function"&&n({...e,...O})},[n,e]);if(Sn.default.useEffect(()=>{if(!t)return;let O=L=>{L.key==="Escape"&&(L.preventDefault(),a?.())};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[t,a]),Sn.default.useEffect(()=>{if(!t)return;let O=typeof document<"u"?document.activeElement:null,L=window.requestAnimationFrame(()=>{s.current?.focus({preventScroll:!0})});return()=>{window.cancelAnimationFrame(L),O instanceof HTMLElement&&O.isConnected&&O.focus({preventScroll:!0})}},[t]),Sn.default.useEffect(()=>{if(!t){p(!1);return}},[t]),Sn.default.useEffect(()=>{if(!d)return;let O=window.setTimeout(()=>p(!1),3200);return()=>window.clearTimeout(O)},[d]),!t)return null;let S=O=>{O.target===O.currentTarget&&a?.()},M=O=>{if(O.key!=="Tab"||!s.current)return;let L=[...s.current.querySelectorAll(ag)].filter(te=>te.offsetParent!==null||te===document.activeElement);if(L.length===0)return;let F=L[0],$=L[L.length-1],J=document.activeElement;O.shiftKey&&(J===F||!s.current.contains(J))?(O.preventDefault(),$.focus()):!O.shiftKey&&J===$&&(O.preventDefault(),F.focus())},k=()=>{if(!d){p(!0);return}p(!1),u&&i?.(),n?.({...e,...er})},I={...wi(e,r),fontSize:`${Math.min(16,Math.max(12,Math.round(y*.8)))}px`,lineHeight:String(P)},b=C>=4.5;return(0,X.jsx)("div",{className:"dshr-appearance-mask",onMouseDown:S,children:(0,X.jsxs)("aside",{className:"dshr-appearance-panel",role:"dialog","aria-modal":"true","aria-labelledby":l,tabIndex:-1,ref:s,onKeyDown:M,children:[(0,X.jsxs)("header",{className:"dshr-appearance-head",children:[(0,X.jsxs)("div",{className:"dshr-appearance-head__text",children:[(0,X.jsx)("strong",{id:l,children:"\u9605\u8BFB\u5916\u89C2"}),(0,X.jsx)("span",{children:"\u8C03\u6574\u6392\u7248\u3001\u5B57\u4F53\u4E0E\u80CC\u666F \xB7 \u4EC5\u4FDD\u5B58\u5728\u672C\u673A"})]}),(0,X.jsx)("button",{type:"button",className:"dshr-appearance-close",onClick:a,"aria-label":"\u5173\u95ED\u5916\u89C2\u8BBE\u7F6E",children:(0,X.jsx)(Qf,{size:16})})]}),(0,X.jsxs)("div",{className:"dshr-appearance-body",children:[(0,X.jsxs)("div",{className:"dshr-appearance-preview",style:I,"aria-hidden":"true",children:[(0,X.jsx)("span",{className:"dshr-appearance-preview__badge",children:"\u5B9E\u65F6\u9884\u89C8"}),(0,X.jsxs)("div",{className:"dshr-appearance-preview__inner",children:[(0,X.jsx)("span",{className:"dshr-appearance-preview__kicker",children:"\u7B2C 1 \u7AE0"}),(0,X.jsx)("p",{className:"dshr-appearance-preview__title",children:"\u5C71\u5C45\u79CB\u669D"}),(0,X.jsx)("p",{className:"dshr-appearance-preview__text",children:"\u7A7A\u5C71\u65B0\u96E8\u540E\uFF0C\u5929\u6C14\u665A\u6765\u79CB\u3002\u660E\u6708\u677E\u95F4\u7167\uFF0C\u6E05\u6CC9\u77F3\u4E0A\u6D41\u3002"}),(0,X.jsx)("p",{className:"dshr-appearance-preview__quote",children:"\u7AF9\u55A7\u5F52\u6D63\u5973\uFF0C\u83B2\u52A8\u4E0B\u6E14\u821F\u3002"})]})]}),(0,X.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-bg`,children:[(0,X.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-bg`,children:"\u80CC\u666F"}),(0,X.jsx)("div",{className:"dshr-appearance-swatches",role:"group","aria-label":"\u80CC\u666F\u9884\u8BBE",children:vi.map(O=>{let L=O.id==="custom"?h:O.bg,F=O.id==="custom"?_:O.ink,$=g.preset===O.id;return(0,X.jsxs)("button",{type:"button",className:`dshr-appearance-swatch${$?" is-active":""}`,"aria-pressed":$,onClick:()=>v({backgroundPreset:O.id}),children:[(0,X.jsx)("span",{className:"dshr-appearance-swatch__chip",style:{background:L,color:F},children:"\u6587"}),(0,X.jsx)("span",{className:"dshr-appearance-swatch__label",children:O.label})]},O.id)})}),(0,X.jsxs)("label",{className:"dshr-appearance-colorrow",children:[(0,X.jsx)("span",{children:"\u81EA\u5B9A\u4E49\u989C\u8272"}),(0,X.jsxs)("span",{className:"dshr-appearance-colorrow__control",children:[(0,X.jsx)("input",{type:"color",className:"dshr-appearance-color",value:h,"aria-label":"\u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272",onChange:O=>v({backgroundPreset:"custom",customBackground:O.target.value})}),(0,X.jsx)("code",{className:"dshr-appearance-colorrow__hex",children:h.toUpperCase()})]})]}),(0,X.jsxs)("div",{className:"dshr-appearance-field",children:[(0,X.jsxs)("div",{className:"dshr-appearance-field__head",children:[(0,X.jsx)("span",{children:"\u6587\u5B57\u8272\u8C03"}),(0,X.jsxs)("span",{className:`dshr-appearance-field__value${b?"":" is-warning"}`,children:["\u5BF9\u6BD4\u5EA6 ",C.toFixed(1),":1"]})]}),(0,X.jsx)(ou,{label:"\u6587\u5B57\u8272\u8C03",value:e.textTone==="dark"||e.textTone==="light"?e.textTone:"auto",options:ng,onChange:O=>v({textTone:O})}),(0,X.jsxs)("p",{className:"dshr-appearance-hint",children:[b?"\u81EA\u52A8\u6A21\u5F0F\u4F1A\u6309\u80CC\u666F\u4EAE\u5EA6\u9009\u62E9\u6DF1\u8272\u6216\u6D45\u8272\u6587\u5B57\u3002":"\u5F53\u524D\u6587\u5B57\u4E0E\u80CC\u666F\u5BF9\u6BD4\u5EA6\u504F\u4F4E\uFF0C\u5EFA\u8BAE\u6539\u9009\u5176\u5B83\u80CC\u666F\u6216\u6587\u5B57\u8272\u8C03\u3002",u?" \u80CC\u666F\u56FE\u7247\u4F1A\u8FDB\u4E00\u6B65\u5F71\u54CD\u5B9E\u9645\u53EF\u8BFB\u6027\u3002":""]})]})]}),(0,X.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-image`,children:[(0,X.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-image`,children:"\u80CC\u666F\u56FE\u7247"}),(0,X.jsxs)("div",{className:"dshr-appearance-image",children:[(0,X.jsx)("span",{className:`dshr-appearance-image__thumb${u?" has-image":""}`,children:u?(0,X.jsx)("img",{src:r,alt:""}):(0,X.jsx)(Jf,{size:20})}),(0,X.jsxs)("div",{className:"dshr-appearance-image__meta",children:[(0,X.jsx)("strong",{children:u?"\u5DF2\u9009\u62E9\u80CC\u666F\u56FE\u7247":"\u672A\u9009\u62E9\u80CC\u666F\u56FE\u7247"}),(0,X.jsx)("span",{children:"\u4F5C\u4E3A\u6587\u5B57\u4E0B\u65B9\u7684\u886C\u5E95\uFF0C\u4EC5\u4FDD\u5B58\u5728\u672C\u673A\u3002"})]}),(0,X.jsxs)("div",{className:"dshr-appearance-image__actions",children:[(0,X.jsxs)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--soft dshr-appearance-btn--sm",onClick:o,children:[u?(0,X.jsx)(nu,{size:13}):(0,X.jsx)(eg,{size:13}),u?"\u66F4\u6362":"\u9009\u62E9\u56FE\u7247"]}),u?(0,X.jsxs)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--ghost dshr-appearance-btn--sm",onClick:i,children:[(0,X.jsx)(tg,{size:13})," \u79FB\u9664"]}):null]})]}),(0,X.jsx)(eo,{label:"\u56FE\u7247\u4E0D\u900F\u660E\u5EA6",valueText:`${Math.round(Wr(e.backgroundImageOpacity,Oe.backgroundImageOpacity.min,Oe.backgroundImageOpacity.max,er.backgroundImageOpacity)*100)}%`,min:Oe.backgroundImageOpacity.min,max:Oe.backgroundImageOpacity.max,step:Oe.backgroundImageOpacity.step,value:Wr(e.backgroundImageOpacity,Oe.backgroundImageOpacity.min,Oe.backgroundImageOpacity.max,er.backgroundImageOpacity),disabled:!u,onChange:O=>v({backgroundImageOpacity:O})}),(0,X.jsx)(eo,{label:"\u56FE\u7247\u6A21\u7CCA",valueText:`${Math.round(g.imageBlur)}px`,min:Oe.backgroundImageBlur.min,max:Oe.backgroundImageBlur.max,step:Oe.backgroundImageBlur.step,value:g.imageBlur,disabled:!u,onChange:O=>v({backgroundImageBlur:O})}),(0,X.jsx)(eo,{label:"\u9605\u8BFB\u4EAE\u5EA6",valueText:`${Math.round(g.brightness*100)}%`,min:Oe.brightness.min,max:Oe.brightness.max,step:Oe.brightness.step,value:g.brightness,onChange:O=>v({brightness:O})}),(0,X.jsx)("p",{className:"dshr-appearance-hint",children:"\u8C03\u4F4E\u4EAE\u5EA6\u53EF\u51CF\u5C11\u591C\u95F4\u5C4F\u5E55\u523A\u6FC0\uFF1B\u53EA\u5F71\u54CD\u6B63\u6587/PDF \u9605\u8BFB\u533A\uFF0C\u4E0D\u5F71\u54CD\u5DE5\u5177\u680F\u4E0E\u6279\u6CE8\u9762\u677F\u3002"})]}),(0,X.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-type`,children:[(0,X.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-type`,children:"\u5B57\u4F53"}),(0,X.jsx)("div",{className:"dshr-appearance-families",role:"group","aria-label":"\u5B57\u4F53",children:Bs.map(O=>(0,X.jsx)("button",{type:"button",className:"dshr-appearance-family",style:{fontFamily:O.stack},"aria-pressed":g.fontFamily===O.stack,onClick:()=>v({fontFamily:O.id}),title:O.label,children:O.label},O.id))}),(0,X.jsxs)("div",{className:"dshr-appearance-field",children:[(0,X.jsx)("div",{className:"dshr-appearance-field__head",children:(0,X.jsx)("span",{children:"\u5B57\u91CD"})}),(0,X.jsx)(ou,{label:"\u5B57\u91CD",value:g.fontWeight,options:$s.map(O=>({value:O.value,label:O.label})),onChange:O=>v({fontWeight:O})})]}),(0,X.jsx)(eo,{label:"\u5B57\u53F7",valueText:`${y}px`,min:Oe.fontSize.min,max:Oe.fontSize.max,step:Oe.fontSize.step,value:y,onChange:O=>v({fontSize:O})}),(0,X.jsx)(eo,{label:"\u884C\u9AD8",valueText:P.toFixed(2),min:Oe.lineHeight.min,max:Oe.lineHeight.max,step:Oe.lineHeight.step,value:P,onChange:O=>v({lineHeight:Math.round(O*100)/100})})]}),(0,X.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-layout`,children:[(0,X.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-layout`,children:"\u7248\u5F0F"}),(0,X.jsx)(eo,{label:"\u9605\u8BFB\u5BBD\u5EA6",valueText:`${Math.round(g.width)}px`,min:Oe.contentWidth.min,max:Oe.contentWidth.max,step:Oe.contentWidth.step,value:g.width,onChange:O=>v({contentWidth:O})}),(0,X.jsx)(eo,{label:"\u76EE\u5F55\u5BBD\u5EA6",valueText:`${Math.round(Wr(e.tocWidth,Oe.tocWidth.min,Oe.tocWidth.max,er.tocWidth))}px`,min:Oe.tocWidth.min,max:Oe.tocWidth.max,step:Oe.tocWidth.step,value:Wr(e.tocWidth,Oe.tocWidth.min,Oe.tocWidth.max,er.tocWidth),onChange:O=>v({tocWidth:O})}),(0,X.jsx)("p",{className:"dshr-appearance-hint",children:"\u63A7\u5236\u6B63\u6587\u6700\u5927\u5BBD\u5EA6\uFF1B\u76EE\u5F55\u5BBD\u5EA6\u53EF\u5728\u8FD9\u91CC\u8C03\uFF0C\u4E5F\u53EF\u4EE5\u62D6\u52A8\u76EE\u5F55\u53F3\u8FB9\u7F18\u3002\u76EE\u5F55\u6807\u9898\u4F1A\u5B8C\u6574\u6362\u884C\u663E\u793A\u3002"})]})]}),(0,X.jsxs)("footer",{className:"dshr-appearance-foot",children:[(0,X.jsxs)("button",{type:"button",className:`dshr-appearance-btn dshr-appearance-btn--ghost${d?" dshr-appearance-btn--danger":""}`,onClick:k,disabled:E&&!d,title:E?"\u5F53\u524D\u5DF2\u662F\u9ED8\u8BA4\u5916\u89C2":"\u6062\u590D\u9ED8\u8BA4\u5916\u89C2",children:[d?(0,X.jsx)(nu,{size:14}):(0,X.jsx)(rg,{size:14}),d?"\u786E\u8BA4\u6062\u590D\uFF1F":"\u6062\u590D\u9ED8\u8BA4"]}),(0,X.jsx)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--primary",onClick:a,children:"\u5B8C\u6210"})]})]})})}var _i=Lt(require("react"),1);var Se=require("react/jsx-runtime"),ig={highlight:Vn,underline:Ja,note:Mn},sg=[{id:"all",label:"\u5168\u90E8"},..._o.map(t=>({id:t.id,label:t.label}))];function lg(t){let e=Number(t);if(!Number.isFinite(e)||e<=0)return"";try{return new Date(e).toLocaleDateString("zh-CN",{month:"numeric",day:"numeric"})}catch{return""}}function cg(t){let e=new Map,r=t&&Array.isArray(t.chapters)?t.chapters:[];for(let n=0;n<r.length;n+=1){let o=r[n];o&&o.id!=null&&e.set(String(o.id),{index:n,title:o.title||""})}return e}function iu(t){return t?t.kind==="pdf"?!0:t.kind==="flow"?!1:Array.isArray(t.rects)&&!Array.isArray(t.ranges):!1}function su(t,e){if(!t)return null;if(t.chapterId!=null){let r=e.get(String(t.chapterId));if(r)return r}if(Number.isInteger(Number(t.chapterIndex))&&Number(t.chapterIndex)>=0){let r=Number(t.chapterIndex),o=(e.size>0?[...e.values()]:[]).find(i=>i.index===r);return{index:r,title:o?o.title:""}}return null}function dg(t,e,r){let n=(Array.isArray(t)?t:[]).filter(a=>!(!a||r!=="all"&&a.style!==r)),o=new Map;for(let a=0;a<n.length;a+=1){let s=n[a],l=iu(s),d,p,g;if(l){let u=Number(s.page),h=Number.isInteger(u)&&u>0;d=`pdf:${h?u:"unknown"}`,p=h?1e4+u:999999,g=h?`\u7B2C ${u} \u9875`:"PDF \u9875\u9762"}else{let u=su(s,e),h=u?u.index:null;d=`flow:${h??"unknown"}`,p=h??99999,g=h==null?"\u6B63\u6587":`\u7B2C ${h+1} \u7AE0${u&&u.title?` \xB7 ${u.title}`:""}`}o.has(d)||o.set(d,{key:d,order:p,title:g,items:[]}),o.get(d).items.push(s)}let i=[...o.values()];i.sort((a,s)=>a.order-s.order);for(let a=0;a<i.length;a+=1)i[a].items.sort((l,d)=>{let p=Array.isArray(l.ranges)&&l.ranges[0]&&l.ranges[0].start||0,g=Array.isArray(d.ranges)&&d.ranges[0]&&d.ranges[0].start||0;return p!==g?p-g:(Number(l.createdAt)||0)-(Number(d.createdAt)||0)});return i}function ug({hasAny:t,filter:e}){return t?(0,Se.jsxs)("div",{className:"dshr-anno-panel__empty",children:[(0,Se.jsx)("p",{className:"dshr-anno-panel__empty-title",children:"\u6CA1\u6709\u5339\u914D\u7684\u6807\u6CE8"}),(0,Se.jsxs)("p",{className:"dshr-anno-panel__empty-text",children:["\u5F53\u524D\u7B5B\u9009\u662F\u300C",e==="all"?"\u5168\u90E8":ms(e),"\u300D\uFF0C\u5207\u6362\u7B5B\u9009\u770B\u770B\u5176\u4F59\u6807\u6CE8\u3002"]})]}):(0,Se.jsxs)("div",{className:"dshr-anno-panel__empty",children:[(0,Se.jsx)("span",{className:"dshr-anno-panel__empty-mark","aria-hidden":"true",children:(0,Se.jsx)(nd,{size:44})}),(0,Se.jsx)("p",{className:"dshr-anno-panel__empty-title",children:"\u8FD8\u6CA1\u6709\u4EFB\u4F55\u6807\u6CE8"}),(0,Se.jsx)("p",{className:"dshr-anno-panel__empty-text",children:"\u5728\u9605\u8BFB\u65F6\u9009\u4E2D\u4E00\u6BB5\u6587\u5B57\uFF0C\u5C31\u53EF\u4EE5\u7528\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u6216\u4FBF\u7B7E\u628A\u5B83\u7559\u5728\u8FD9\u91CC\u3002"}),(0,Se.jsxs)("ol",{className:"dshr-anno-panel__steps",children:[(0,Se.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,Se.jsx)("span",{className:"dshr-anno-panel__step-index",children:"1"})," \u9009\u4E2D\u6B63\u6587\u4E2D\u7684\u4E00\u6BB5\u6587\u5B57"]}),(0,Se.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,Se.jsx)("span",{className:"dshr-anno-panel__step-index",children:"2"})," \u9009\u62E9\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u6216\u4FBF\u7B7E"]}),(0,Se.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,Se.jsx)("span",{className:"dshr-anno-panel__step-index",children:"3"})," \u4E4B\u540E\u56DE\u5230\u8FD9\u91CC\u56DE\u770B\u3001\u8DF3\u8F6C"]})]}),(0,Se.jsx)("p",{className:"dshr-anno-panel__hint",children:"PDF \u9875\u9762\u540C\u6837\u652F\u6301\uFF1A\u9009\u4E2D\u6587\u5B57\u540E\u70B9\u51FB\u300C\u6807\u6CE8\u300D\u5373\u53EF\u3002"})]})}function lu({open:t,annotations:e,book:r,onClose:n,onOpenAnnotation:o,onJump:i,onDelete:a}){let[s,l]=_i.default.useState("all"),d=_i.default.useMemo(()=>cg(r),[r]);if(_i.default.useEffect(()=>{if(!t||typeof document>"u")return;let C=y=>{y.key!=="Escape"||typeof n!="function"||document.querySelector(".dshr-anno-composer")||(y.preventDefault(),n())};return document.addEventListener("keydown",C,!0),()=>document.removeEventListener("keydown",C,!0)},[n,t]),!t)return null;let p=(Array.isArray(e)?e:[]).filter(Boolean),g={all:p.length};for(let C=0;C<_o.length;C+=1){let y=_o[C].id;g[y]=p.filter(P=>P.style===y).length}let u=dg(p,d,s),h=s==="all"?p.length:p.filter(C=>C.style===s).length,_=(C,y)=>{typeof C=="function"&&C(y)};return(0,Se.jsxs)("aside",{className:"dshr-anno-panel","aria-label":"\u6807\u6CE8\u7B14\u8BB0\u9762\u677F",children:[(0,Se.jsxs)("header",{className:"dshr-anno-panel__head",children:[(0,Se.jsxs)("div",{className:"dshr-anno-panel__titles",children:[(0,Se.jsxs)("h3",{className:"dshr-anno-panel__title",children:["\u6807\u6CE8\u7B14\u8BB0",(0,Se.jsx)("span",{className:"dshr-anno-panel__count",children:p.length})]}),(0,Se.jsx)("span",{className:"dshr-anno-panel__sub",children:p.length>0?`${h} \u6761\u6807\u6CE8 \xB7 ${u.length} \u4E2A\u4F4D\u7F6E`:"\u9009\u4E2D\u6587\u5B57\u5373\u53EF\u6DFB\u52A0\u6807\u6CE8"})]}),(0,Se.jsx)("button",{type:"button",className:"dshr-anno-panel__close","aria-label":"\u5173\u95ED\u6807\u6CE8\u9762\u677F",onClick:()=>_(n),children:(0,Se.jsx)(ei,{size:13})})]}),p.length>0?(0,Se.jsx)("div",{className:"dshr-anno-panel__filters",role:"tablist","aria-label":"\u6309\u6837\u5F0F\u7B5B\u9009\u6807\u6CE8",children:sg.map(C=>{let y=s===C.id,P=g[C.id]||0;return(0,Se.jsxs)("button",{type:"button",role:"tab","aria-selected":y,className:`dshr-anno-panel__filter${y?" is-active":""}`,onClick:()=>l(C.id),children:[C.label,C.id==="all"?` ${P}`:P>0?` ${P}`:""]},C.id)})}):null,(0,Se.jsx)("div",{className:"dshr-anno-panel__list",children:u.length===0?(0,Se.jsx)(ug,{hasAny:p.length>0,filter:s}):u.map(C=>(0,Se.jsxs)("section",{className:"dshr-anno-panel__group",children:[(0,Se.jsxs)("div",{className:"dshr-anno-panel__group-head",children:[(0,Se.jsx)("span",{className:"dshr-anno-panel__group-title",title:C.title,children:C.title}),(0,Se.jsx)("span",{className:"dshr-anno-panel__group-rule"}),(0,Se.jsx)("span",{className:"dshr-anno-panel__group-count",children:C.items.length})]}),C.items.map(y=>{let P=y.style||"highlight",E=ig[P]||Vn,v=y.color||"#f5d76e",S=typeof y.quote=="string"?y.quote.trim():"",M=typeof y.note=="string"?y.note.trim():"",k=su(y,d),R=iu(y)?Number(y.page)>0?`\u7B2C ${y.page} \u9875`:"PDF":k?`\u7B2C ${k.index+1} \u7AE0`:"\u6B63\u6587",I=lg(y.updatedAt||y.createdAt);return(0,Se.jsxs)("article",{className:"dshr-anno-item",style:{"--dshr-anno-color":v},"data-anno-id":y.id||void 0,children:[(0,Se.jsxs)("button",{type:"button",className:"dshr-anno-item__main",onClick:()=>_(o,y.id),title:"\u7F16\u8F91\u8FD9\u6761\u6807\u6CE8",children:[(0,Se.jsxs)("div",{className:"dshr-anno-item__meta",children:[(0,Se.jsx)("span",{className:"dshr-anno-item__dot","aria-hidden":"true"}),(0,Se.jsxs)("span",{className:"dshr-anno-item__style",children:[(0,Se.jsx)(E,{size:12})," ",ms(P)]}),(0,Se.jsx)("span",{className:"dshr-anno-item__sep","aria-hidden":"true",children:"\xB7"}),(0,Se.jsx)("span",{className:"dshr-anno-item__location",children:R}),(0,Se.jsx)("span",{className:"dshr-anno-item__spacer"}),I?(0,Se.jsx)("span",{children:I}):null]}),(0,Se.jsx)("p",{className:"dshr-anno-item__quote",children:S||M||"\uFF08\u672A\u8BB0\u5F55\u9009\u4E2D\u6587\u5B57\uFF09"}),M&&M!==S?(0,Se.jsx)("p",{className:"dshr-anno-item__note",children:M}):null]}),(0,Se.jsxs)("div",{className:"dshr-anno-item__actions",children:[(0,Se.jsx)("button",{type:"button",className:"dshr-anno-item__action dshr-anno-item__action--jump",onClick:()=>_(i,y),title:"\u8DF3\u8F6C\u5230\u8FD9\u6761\u6807\u6CE8\u7684\u4F4D\u7F6E",children:"\u5B9A\u4F4D"}),(0,Se.jsx)("span",{className:"dshr-anno-item__spacer"}),(0,Se.jsx)("button",{type:"button",className:"dshr-anno-item__action dshr-anno-item__action--danger",onClick:()=>_(a,y),title:"\u5220\u9664\u8FD9\u6761\u6807\u6CE8",children:"\u5220\u9664"})]})]},y.id||`${C.key}:${S}`)})]},C.key))})]})}var rn=Lt(require("react"),1);var Re=require("react/jsx-runtime"),cu={highlight:Vn,underline:Ja,note:Mn},hg={highlight:"\u7528\u534A\u900F\u660E\u7684\u8272\u5E26\u8986\u76D6\u9009\u4E2D\u6587\u5B57\uFF0C\u53EF\u8C03\u7B14\u89E6\u7C97\u7EC6\u3002",underline:"\u5728\u9009\u4E2D\u6587\u5B57\u4E0B\u65B9\u753B\u4E00\u6761\u624B\u5199\u5F0F\u4E0B\u5212\u7EBF\u3002",note:"\u5728\u9009\u4E2D\u6587\u5B57\u65C1\u653E\u4E00\u679A\u4FBF\u7B7E\uFF0C\u8BB0\u5F55\u6B64\u523B\u7684\u60F3\u6CD5\u3002"},du=2e3,js=Ko[1].value;function Gs(t){return t==="underline"?Qc:Zc}function hu(t){return Object.prototype.hasOwnProperty.call(wo,t)?t:"highlight"}function pg(t){let e=Number(t);if(!Number.isFinite(e))return js;let r=js,n=1/0;for(let o=0;o<Ko.length;o+=1){let i=Ko[o].value,a=Math.abs(i-e);a<n&&(r=i,n=a)}return r}function uu(t){let e=t&&typeof t=="object"?t:{},r=hu(e.style),n=Gs(r),o=n.find(i=>i.value===e.color);return{style:r,color:o?o.value:typeof e.color=="string"&&e.color?e.color:n[0].value,width:pg(e.width),note:typeof e.note=="string"?e.note:"",quote:typeof e.quote=="string"?e.quote:""}}function fg(t,e){if(!t||typeof t!="object")return`${e}:empty`;let r=typeof t.quote=="string"?t.quote:"";return[e,t.id||"",r,Array.isArray(t.ranges)?t.ranges.length:0,t.page==null?"":t.page,t.chapterId==null?"":t.chapterId].join("|")}function gg(t){return`${Math.round(2+(Number(t)||js)*.34)}px`}function pu({open:t,draft:e,mode:r,onClose:n,onSave:o,onDelete:i}){let a=r==="edit",[s,l]=rn.default.useState(()=>uu(e)),d=rn.default.useRef(""),p=rn.default.useRef(null);rn.default.useEffect(()=>{if(!t){d.current="";return}let M=fg(e,r);d.current!==M&&(d.current=M,l(uu(e)))},[e,r,t]),rn.default.useEffect(()=>{if(!t||typeof window>"u")return;let M=window.setTimeout(()=>{let k=p.current;if(k)try{k.focus({preventScroll:!0}),k.setSelectionRange(k.value.length,k.value.length)}catch{}},30);return()=>window.clearTimeout(M)},[t]);let g=rn.default.useCallback(M=>{l(k=>({...k,...M}))},[]),u=rn.default.useCallback(M=>{let k=hu(M);l(R=>{let I=Gs(k),b=I.some(O=>O.value===R.color);return{...R,style:k,color:b?R.color:I[0].value}})},[]),h=rn.default.useCallback(()=>{if(!s.note.trim()&&!s.quote.trim()&&s.style==="note")return;let k={...e&&typeof e=="object"?e:{},style:s.style,color:s.color,width:s.width,note:s.note,quote:s.quote};typeof o=="function"&&o(k)},[e,o,s]);if(rn.default.useEffect(()=>{if(!t||typeof document>"u")return;let M=k=>{if(k.key==="Escape"){k.preventDefault(),k.stopImmediatePropagation(),typeof n=="function"&&n();return}k.key==="Enter"&&(k.metaKey||k.ctrlKey)&&(k.preventDefault(),k.stopImmediatePropagation(),h())};return document.addEventListener("keydown",M,!0),()=>document.removeEventListener("keydown",M,!0)},[h,n,t]),!t)return null;let _=Gs(s.style),C=cu[s.style]||Vn,y=s.quote.trim(),P=!!(s.note.trim()||y||s.style!=="note"),E=s.style==="note"?"\u4FBF\u7B7E\u5185\u5BB9":"\u5907\u6CE8",v=s.style==="note"?"\u5199\u4E0B\u8FD9\u6BB5\u6587\u5B57\u7ED9\u4F60\u7684\u60F3\u6CD5\u2026":"\u53EF\u9009\uFF1A\u4E3A\u8FD9\u6761\u6807\u6CE8\u5199\u4E00\u6761\u5907\u6CE8\u2026",S=s.style==="underline"?"\u4E0B\u5212\u7EBF\u989C\u8272":s.style==="note"?"\u4FBF\u7B7E\u989C\u8272":"\u8367\u5149\u7B14\u989C\u8272";return(0,Re.jsx)("div",{className:"dshr-anno-composer-mask",role:"presentation",onMouseDown:M=>{M.target===M.currentTarget&&typeof n=="function"&&n()},children:(0,Re.jsxs)("div",{className:"dshr-anno-composer",role:"dialog","aria-modal":"true","aria-label":a?"\u7F16\u8F91\u6807\u6CE8":"\u6DFB\u52A0\u6807\u6CE8",onMouseDown:M=>M.stopPropagation(),children:[(0,Re.jsxs)("header",{className:"dshr-anno-composer__head",children:[(0,Re.jsxs)("div",{className:"dshr-anno-composer__titles",children:[(0,Re.jsx)("h3",{className:"dshr-anno-composer__title",children:a?"\u7F16\u8F91\u6807\u6CE8":"\u6DFB\u52A0\u6807\u6CE8"}),(0,Re.jsx)("span",{className:"dshr-anno-composer__sub",children:hg[s.style]})]}),(0,Re.jsx)("button",{type:"button",className:"dshr-anno-composer__close","aria-label":"\u5173\u95ED\u6807\u6CE8\u7F16\u8F91\u5668",onClick:()=>{typeof n=="function"&&n()},children:(0,Re.jsx)(ei,{size:13})})]}),(0,Re.jsxs)("div",{className:"dshr-anno-composer__body",children:[(0,Re.jsx)("div",{className:"dshr-anno-composer__tabs",role:"tablist","aria-label":"\u6807\u6CE8\u6837\u5F0F",children:_o.map(M=>{let k=cu[M.id]||Vn,R=s.style===M.id;return(0,Re.jsxs)("button",{type:"button",role:"tab","aria-selected":R,className:`dshr-anno-composer__tab${R?" is-active":""}`,onClick:()=>u(M.id),children:[(0,Re.jsx)(k,{size:14})," ",M.label]},M.id)})}),(0,Re.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Re.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Re.jsx)("span",{children:S}),(0,Re.jsx)("em",{children:s.style==="underline"?"\u7EB8\u4E0A\u7684\u58A8\u8272":"\u534A\u900F\u660E\u7B14\u89E6"})]}),(0,Re.jsx)("div",{className:"dshr-anno-composer__swatches",role:"radiogroup","aria-label":S,children:_.map(M=>{let k=s.color===M.value;return(0,Re.jsx)("button",{type:"button",role:"radio","aria-checked":k,"aria-label":`${M.label}\u8272`,title:`${M.label}\u8272`,className:`dshr-anno-swatch${k?" is-active":""}`,style:{"--swatch":M.value},onClick:()=>g({color:M.value}),children:M.label},M.id)})})]}),s.style==="highlight"?(0,Re.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Re.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Re.jsx)("span",{children:"\u7B14\u89E6\u7C97\u7EC6"}),(0,Re.jsx)("em",{children:"\u7EC6 / \u4E2D / \u5BBD"})]}),(0,Re.jsx)("div",{className:"dshr-anno-composer__widths",role:"radiogroup","aria-label":"\u7B14\u89E6\u7C97\u7EC6",children:Ko.map(M=>{let k=s.width===M.value;return(0,Re.jsxs)("button",{type:"button",role:"radio","aria-checked":k,className:`dshr-anno-width${k?" is-active":""}`,onClick:()=>g({width:M.value}),children:[(0,Re.jsx)("span",{className:"dshr-anno-width__bar",style:{height:gg(M.value),background:s.color}}),M.label]},M.id)})})]}):null,(0,Re.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Re.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Re.jsx)("span",{children:E}),(0,Re.jsx)("em",{children:s.style==="note"?"\u53EF\u7559\u7A7A\uFF0C\u4EC5\u6807\u8BB0\u4F4D\u7F6E":"\u53EF\u9009"})]}),(0,Re.jsx)("textarea",{ref:p,className:"dshr-anno-composer__textarea",value:s.note,maxLength:du,placeholder:v,"aria-label":E,onChange:M=>g({note:M.target.value})}),(0,Re.jsxs)("div",{className:"dshr-anno-composer__counter",children:[s.note.length," / ",du]})]}),y?(0,Re.jsxs)("div",{className:"dshr-anno-composer__quote",style:{"--dshr-anno-color":s.color},children:[(0,Re.jsx)("span",{className:"dshr-anno-composer__quote-label",children:"\u9009\u4E2D\u6587\u5B57"}),(0,Re.jsx)("p",{className:"dshr-anno-composer__quote-text",children:y})]}):null,(0,Re.jsxs)("div",{className:`dshr-anno-composer__preview is-${s.style}`,style:{"--dshr-anno-color":s.color},children:[(0,Re.jsx)("span",{className:"dshr-anno-composer__preview-label",children:"\u6548\u679C\u9884\u89C8"}),(0,Re.jsx)("span",{className:"dshr-anno-composer__preview-text",children:y||"\u9009\u4E2D\u7684\u6587\u5B57\u4F1A\u8FD9\u6837\u663E\u793A"})]})]}),(0,Re.jsxs)("footer",{className:"dshr-anno-composer__foot",children:[a?(0,Re.jsx)("button",{type:"button",className:"dshr-anno-btn dshr-anno-btn--danger",onClick:()=>{typeof i=="function"&&i(e||{})},children:"\u5220\u9664"}):null,(0,Re.jsx)("span",{className:"dshr-anno-composer__spacer"}),(0,Re.jsx)("button",{type:"button",className:"dshr-anno-btn",onClick:()=>{typeof n=="function"&&n()},children:"\u53D6\u6D88"}),(0,Re.jsx)("button",{type:"button",className:"dshr-anno-btn dshr-anno-btn--primary",disabled:!P,onClick:h,title:"Ctrl / \u2318 + Enter \u4FDD\u5B58",children:a?"\u4FDD\u5B58\u4FEE\u6539":"\u4FDD\u5B58\u6807\u6CE8"})]})]})})}var Tn=Lt(require("react"),1);var le=require("react/jsx-runtime"),ia={selection:"\u9009\u533A\u8BD1\u6587",paragraph:"\u6240\u5C5E\u6BB5\u843D\u8BD1\u6587"};function fu({title:t,close:e,children:r}){return Tn.default.useEffect(()=>{let n=o=>{o.key==="Escape"&&(o.preventDefault(),e())};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[e]),(0,le.jsx)("div",{className:"dshr-modal-mask",onMouseDown:n=>{n.target===n.currentTarget&&e()},children:(0,le.jsxs)("div",{className:"dshr-modal dshr-evidence-dialog",role:"dialog","aria-modal":"true","aria-label":t,children:[(0,le.jsx)("h3",{children:t}),r]})})}function gu({evidence:t}){let{draft:e,busy:r,problem:n}=t,[o,i]=Tn.default.useState(e.note),[a,s]=Tn.default.useState(e.translation?"0":""),l=a===""?null:e.options[Number(a)];return(0,le.jsxs)(fu,{title:e.old?"\u786E\u8BA4\u91CD\u65B0\u5173\u8054\u8BC1\u636E":"\u4FDD\u5B58\u8BC1\u636E",close:t.closeDraft,children:[(0,le.jsxs)("p",{children:[e.source.title," \xB7 PDF \u7B2C ",e.source.anchor.page," \u9875"]}),e.old?(0,le.jsx)("p",{children:"\u672C\u6B21\u4F1A\u7528\u65B0\u9009\u533A\u66F4\u65B0\u8BC1\u636E\u539F\u6587\u548C\u51FA\u5904\u3002"}):null,(0,le.jsx)("blockquote",{children:e.source.quote}),(0,le.jsxs)("label",{children:["\u5907\u6CE8\uFF08\u53EF\u9009\uFF09",(0,le.jsx)("textarea",{value:o,maxLength:2e4,onChange:d=>i(d.target.value)})]}),e.options.length?(0,le.jsxs)("label",{children:["\u8BD1\u6587\u5FEB\u7167",(0,le.jsxs)("select",{value:a,onChange:d=>s(d.target.value),children:[(0,le.jsx)("option",{value:"",children:"\u6682\u4E0D\u9644\u8BD1\u6587"}),e.options.map((d,p)=>(0,le.jsx)("option",{value:p,children:ia[d.scope]},d.scope))]})]}):(0,le.jsx)("p",{children:"\u53EF\u5148\u4FDD\u5B58\u539F\u6587\uFF0C\u4E4B\u540E\u8865\u5145\u8BD1\u6587\u3002"}),l?(0,le.jsx)("blockquote",{children:l.text}):null,n?(0,le.jsx)("p",{role:"alert",children:n}):null,(0,le.jsxs)("div",{className:"dshr-modal__actions",children:[(0,le.jsx)("button",{type:"button",className:"dshr-btn",disabled:r,onClick:t.closeDraft,children:"\u53D6\u6D88"}),(0,le.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--primary",disabled:r,onClick:()=>t.saveDraft({note:o,translation:l}),children:e.old?"\u786E\u8BA4\u66F4\u65B0\u51FA\u5904":"\u4FDD\u5B58\u8BC1\u636E"})]})]})}function mg(t){let e=a=>String(a||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),r=a=>e(a).split(/\r?\n/u).map(s=>"> "+s).join(`
`),n=["# "+e(t.title),t.anchor?.page?`PDF \u7269\u7406\u9875\u7801 ${t.anchor.page}`:"PDF \u9875\u7801\u5F85\u786E\u8BA4",`## \u539F\u6587

`+r(t.quote),t.translation?`## ${ia[t.translation.scope]}

${r(t.translation.text)}`:"",t.note?`## \u5907\u6CE8

`+r(t.note):""].filter(Boolean).join(`

`)+`
`,o=URL.createObjectURL(new Blob([n],{type:"text/markdown;charset=utf-8"})),i=document.createElement("a");i.href=o,i.download=`\u8BC1\u636E-${t.id}.md`,i.click(),setTimeout(()=>URL.revokeObjectURL(o),1e3)}function bg({record:t,evidence:e,missing:r,collections:n}){let[o,i]=Tn.default.useState(null),[a,s]=Tn.default.useState(!1),l=Tn.default.useRef(null),d=_n(t.identity),p=r?"\u539F\u6587\u7F3A\u5931":d?"\u53D6\u8BC1\u7248\u672C\u5DF2\u8BB0\u5F55":t.identityError?"\u6838\u9A8C\u5931\u8D25":"\u6587\u4EF6\u8EAB\u4EFD\u5F85\u786E\u8BA4";function g(u){i(h=>({...h,...u}))}return(0,le.jsxs)("article",{className:"dshr-evidence-card","data-evidence-id":t.id,"data-evidence-state":p,children:[(0,le.jsxs)("strong",{children:[t.title," \xB7 ",t.anchor?.page?`PDF \u7B2C ${t.anchor.page} \u9875`:"PDF \u9875\u7801\u5F85\u786E\u8BA4"]}),(0,le.jsxs)("p",{children:[p," \xB7 ",new Date(t.createdAt).toLocaleString()]}),(0,le.jsx)("blockquote",{children:t.quote}),t.translation?(0,le.jsxs)(le.Fragment,{children:[(0,le.jsx)("strong",{children:ia[t.translation.scope]}),(0,le.jsx)("blockquote",{children:t.translation.text})]}):(0,le.jsx)("p",{children:"\u6682\u65E0\u8BD1\u6587\u5FEB\u7167"}),t.note?(0,le.jsx)("p",{className:"dshr-evidence-note",children:t.note}):null,t.identityError&&!d&&!r?(0,le.jsx)("p",{children:t.identityError}):null,(0,le.jsxs)("div",{className:"dshr-evidence-actions",children:[(0,le.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e.busy||r||!d,onClick:()=>e.jump(t),children:"\u56DE\u5230\u539F\u6587"}),!d&&!r?(0,le.jsx)("button",{type:"button",className:"dshr-btn",disabled:e.busy,onClick:()=>e.retry(t),children:"\u91CD\u8BD5\u6838\u9A8C"}):null,(0,le.jsx)("button",{type:"button",className:"dshr-btn",disabled:e.busy,onClick:()=>l.current.click(),children:"\u91CD\u65B0\u5173\u8054 PDF"}),(0,le.jsx)("input",{ref:l,hidden:!0,type:"file",accept:".pdf,application/pdf",onChange:u=>{let h=u.currentTarget.files[0];u.currentTarget.value="",h&&e.pickFile(t,h)}}),e.mismatch?.record.id===t.id?(0,le.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e.busy,onClick:e.reselect,children:"\u6253\u5F00\u8BE5\u7248\u672C\u91CD\u65B0\u9009\u533A"}):null,(0,le.jsx)("button",{type:"button",className:"dshr-btn",onClick:()=>mg(t),children:"\u5BFC\u51FA\u8BC1\u636E"}),(0,le.jsx)("button",{type:"button",className:"dshr-btn",disabled:e.busy,onClick:()=>i({note:t.note||"",text:t.translation?.text||"",scope:t.translation?.scope||"selection",topicIds:t.topicIds||[]}),children:"\u7F16\u8F91\u8BC1\u636E"}),(0,le.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--danger",disabled:e.busy,onClick:()=>s(!0),children:"\u5220\u9664\u8BC1\u636E"})]}),a?(0,le.jsxs)("div",{className:"dshr-evidence-actions",children:[(0,le.jsx)("p",{children:"\u8FD9\u4F1A\u5220\u9664\u8BC1\u636E\u5E76\u79FB\u9664\u76F8\u5173\u4E66\u5355\u4E2D\u7684\u5F15\u7528\u3002"}),(0,le.jsx)("button",{type:"button",className:"dshr-btn",onClick:()=>s(!1),children:"\u53D6\u6D88\u5220\u9664"}),(0,le.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--danger",disabled:e.busy,onClick:()=>{s(!1),e.remove(t)},children:"\u786E\u8BA4\u5220\u9664\u8BC1\u636E"})]}):null,o?(0,le.jsxs)("form",{onSubmit:u=>{u.preventDefault();let h=o.text.trim()?{scope:o.scope,text:o.text.trim(),source:o.scope==="selection"?t.quote:t.translation?.scope==="paragraph"?t.translation.source:""}:null;e.edit(t,{note:o.note,translation:h,topicIds:o.topicIds}),i(null)},children:[(0,le.jsxs)("label",{children:["\u7F16\u8F91\u5907\u6CE8",(0,le.jsx)("textarea",{value:o.note,maxLength:2e4,onChange:u=>g({note:u.target.value})})]}),(0,le.jsxs)("label",{children:["\u5DF2\u6838\u5BF9\u7684\u8BD1\u6587",(0,le.jsx)("textarea",{value:o.text,maxLength:4e4,onChange:u=>g({text:u.target.value})})]}),(0,le.jsxs)("label",{children:["\u8BD1\u6587\u8986\u76D6\u8303\u56F4",(0,le.jsxs)("select",{value:o.scope,onChange:u=>g({scope:u.target.value}),children:[(0,le.jsx)("option",{value:"selection",children:ia.selection}),t.translation?.scope==="paragraph"?(0,le.jsx)("option",{value:"paragraph",children:ia.paragraph}):null]})]}),n.length?(0,le.jsxs)("fieldset",{children:[(0,le.jsx)("legend",{children:"\u4E66\u5355\u4E2D\u7684\u8BC1\u636E\u5F15\u7528"}),n.map(u=>(0,le.jsxs)("label",{className:"dshr-evidence-checkbox",children:[(0,le.jsx)("input",{type:"checkbox",checked:o.topicIds.includes(u.id),onChange:h=>g({topicIds:h.target.checked?[...o.topicIds,u.id]:o.topicIds.filter(_=>_!==u.id)})}),u.name]},u.id))]}):null,(0,le.jsxs)("div",{className:"dshr-modal__actions",children:[(0,le.jsx)("button",{type:"button",className:"dshr-btn",onClick:()=>i(null),children:"\u53D6\u6D88\u7F16\u8F91"}),(0,le.jsx)("button",{type:"submit",className:"dshr-btn dshr-btn--primary",disabled:e.busy,children:"\u786E\u8BA4\u4FDD\u5B58\u4FEE\u6539"})]})]}):null]})}function mu({evidence:t,books:e,collections:r}){let[n,o]=Tn.default.useState(""),[i,a]=Tn.default.useState(!1),s=t.panel.bookId,l=new Set(e.map(p=>p.id)),d=t.rows.filter(p=>(i||!s||p.bookId===s)&&(!n||p.topicIds?.includes(n)));return(0,le.jsxs)(fu,{title:"\u8BC1\u636E\u5E93",close:t.closePanel,children:[(0,le.jsxs)("div",{className:"dshr-evidence-actions",children:[s?(0,le.jsx)("button",{type:"button",className:"dshr-btn","aria-pressed":i,onClick:()=>a(p=>!p),children:i?"\u67E5\u770B\u5F53\u524D\u8BBA\u6587":"\u67E5\u770B\u5168\u90E8\u8BC1\u636E"}):null,r.length?(0,le.jsxs)("label",{children:["\u6309\u4E66\u5355\u67E5\u770B",(0,le.jsxs)("select",{value:n,onChange:p=>o(p.target.value),children:[(0,le.jsx)("option",{value:"",children:"\u6240\u6709\u4E66\u5355"}),r.map(p=>(0,le.jsx)("option",{value:p.id,children:p.name},p.id))]})]}):null,(0,le.jsxs)("span",{role:"status",children:[d.length," \u6761\u8BC1\u636E"]})]}),t.problem?(0,le.jsx)("p",{role:"alert",children:t.problem}):null,d.length?d.map(p=>(0,le.jsx)(bg,{record:p,evidence:t,collections:r,missing:!l.has(p.bookId)},p.id)):(0,le.jsx)("p",{children:"\u9009\u4E2D PDF \u539F\u6587\u540E\uFF0C\u70B9\u51FB\u300C\u4FDD\u5B58\u8BC1\u636E\u300D\u5373\u53EF\u52A0\u5165\u3002"}),(0,le.jsx)("div",{className:"dshr-modal__actions",children:(0,le.jsx)("button",{type:"button",className:"dshr-btn",disabled:t.busy,onClick:t.closePanel,children:"\u5173\u95ED\u8BC1\u636E\u5E93"})})]})}var jr=Lt(require("react"),1);var qs=()=>crypto.randomUUID(),xg=({record:t,anchor:e,quote:r})=>({bookId:t.id,title:t.title,author:t.author,fileRevision:t.fileRevision??null,anchor:e,quote:r,sourceRevision:qs()});function bu({currentRef:t,navigation:e,openBook:r,refreshBooks:n,showToast:o}){let[i,a]=jr.default.useState([]),[s,l]=jr.default.useState(null),[d,p]=jr.default.useState(null),[g,u]=jr.default.useState(null),[h,_]=jr.default.useState(!1),[C,y]=jr.default.useState(""),[P,E]=jr.default.useState(null),[v,S]=jr.default.useState(null),M=jr.default.useRef(!1),k=jr.default.useRef(0);async function R(){let T=++k.current,q=await Xa();T===k.current&&a(q)}async function I(T){if(!M.current){M.current=!0,_(!0),y("");try{await T()}catch(q){y(q?.message||"\u8BC1\u636E\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002")}finally{M.current=!1,_(!1)}}}function b(T=""){l({bookId:T}),E(null),I(R)}async function O(T,q){let re=await Wa(q);await vo(T.id,{identity:re,identityError:""},T.sourceRevision),await R()}function L(T,q){let re=t.current;if(re?.kind!=="pdf"||!T.evidenceAnchor)return;let me=v?.blob===re.data?v.record:null,ne=[q?.status==="done"&&q.zh?.trim()?{scope:"selection",text:q.zh,source:T.text}:null,T.paragraphTranslation].filter(Boolean);y(""),p({id:me?.id||qs(),old:me,blob:re.data,source:xg({record:re.record,anchor:T.evidenceAnchor,quote:T.text}),options:ne,note:me?.note||"",translation:ne[0]||null})}function F({note:T,translation:q}){d&&I(async()=>{let{old:re,blob:me,source:ne,id:Te}=d,Xe={...ne,note:T,translation:q,identity:null,identityError:""},Ee=re?await vo(Te,Xe,re.sourceRevision):{id:Te,...Xe,topicIds:[],createdAt:Date.now(),updatedAt:Date.now()};if(!Ee)throw new Error("\u8BC1\u636E\u6216\u539F\u6587\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u540E\u91CD\u8BD5\u3002");re||await _c(Ee),p(null),S(null),l({bookId:ne.bookId}),++k.current,a($e=>[Ee,...$e.filter(_e=>_e.id!==Ee.id)]),o("\u8BC1\u636E\u5DF2\u4FDD\u5B58\u3002"),O(Ee,me).catch(async $e=>{try{await vo(Te,{identityError:$e?.message||"\u6587\u4EF6\u6838\u9A8C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002"},ne.sourceRevision),await R()}catch{}})})}async function $(T){let q=await bo(T.bookId);if(!q?.blob)throw new Error("\u539F\u6587\u7F3A\u5931\u3002\u8BF7\u9009\u62E9 PDF \u91CD\u65B0\u5173\u8054\u3002");if(q.format!=="pdf")throw new Error("\u5F53\u524D\u5173\u8054\u4E0D\u662F PDF\uFF0C\u8BF7\u91CD\u65B0\u5173\u8054\u3002");return q}function J(T){I(async()=>{let q=await $(T);if((q.fileRevision??null)!==T.fileRevision)throw new Error("\u53D6\u8BC1\u65F6\u7684\u7248\u672C\u5C1A\u672A\u786E\u8BA4\uFF0C\u5F53\u524D\u6587\u4EF6\u5DF2\u66F4\u65B0\u3002\u8BF7\u9009\u62E9\u6587\u4EF6\u540E\u91CD\u65B0\u9009\u533A\u3002");await O(T,q.blob)})}function te(T){if(M.current)return;let q=++e.current;u(null),I(async()=>{if(!_n(T.identity))throw new Error("\u6587\u4EF6\u8EAB\u4EFD\u5F85\u786E\u8BA4\uFF0C\u6838\u9A8C\u5B8C\u6210\u540E\u53EF\u5B9A\u4F4D\u3002");let re=await $(T),me=t.current,ne=me?.kind==="pdf"&&me.record.id===re.id&&me.record.fileRevision===re.fileRevision?me.data:re.blob,Te=await Wa(ne);if(q===e.current){if(!rs(T.identity,Te))throw new Error("\u6587\u4EF6\u7248\u672C\u4E0D\u4E00\u81F4\u3002\u8BF7\u9009\u62E9\u6B63\u786E\u539F\u6587\uFF0C\u6216\u91CD\u65B0\u9009\u533A\u786E\u8BA4\u51FA\u5904\u3002");ne!==t.current?.data&&!await r(re,{verifiedRecord:re,token:q})||q===e.current&&(l(null),u({token:q,blob:ne,anchor:T.anchor,quote:T.quote}))}})}function ie(T,q){T===e.current&&(q==="exact"&&o("\u5DF2\u7CBE\u786E\u5B9A\u4F4D\u539F\u6587\u3002"),q==="page"&&o("\u4EC5\u5B9A\u4F4D\u5230 PDF \u9875\u3002\u8BF7\u6838\u5BF9\u539F\u6587\u540E\u91CD\u65B0\u9009\u533A\u3002",4500),q==="unavailable"&&o("\u65E0\u6CD5\u786E\u8BA4\u6709\u6548\u9875\u7801\uFF0C\u8BF7\u91CD\u65B0\u6838\u5BF9\u539F\u6587\u3002",4500))}function ue(T,q){I(async()=>{if(E(null),!/\.pdf$/i.test(q.name)||!(await q.slice(0,1024).text()).includes("%PDF-"))throw new Error("\u8BF7\u9009\u62E9\u6709\u6548\u7684 PDF \u6587\u4EF6\u3002");let re=await Wa(q);if(!rs(T.identity,re)){E({record:T,file:q,identity:re}),y(_n(T.identity)?"\u6240\u9009\u6587\u4EF6\u4E0E\u53D6\u8BC1\u7248\u672C\u4E0D\u540C\u3002\u53EF\u6362\u4E00\u4E2A\u6587\u4EF6\uFF0C\u6216\u6253\u5F00\u8BE5\u7248\u672C\u91CD\u65B0\u9009\u62E9\u539F\u6587\u3002":"\u539F\u7248\u672C\u5F85\u786E\u8BA4\u3002\u82E5\u65E0\u6CD5\u6838\u9A8C\u539F\u6587\u4EF6\uFF0C\u8BF7\u5728\u6240\u9009 PDF \u91CD\u65B0\u9009\u62E9\u539F\u6587\u3002");return}let me=await Vo(q,{fingerprint:re});if(!await vo(T.id,{bookId:me.id,fileRevision:me.fileRevision,sourceRevision:qs(),identityError:""},T.sourceRevision))throw new Error("\u8BC1\u636E\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u540E\u91CD\u8BD5\u3002");l({bookId:me.id}),await n(),await R(),o("\u5DF2\u786E\u8BA4\u540C\u4E00\u6587\u4EF6\u5E76\u91CD\u65B0\u5173\u8054\u3002")})}function U(){if(!P||M.current)return;let T=++e.current;I(async()=>{let{record:q,file:re,identity:me}=P,ne=await Vo(re,{fingerprint:me});T!==e.current||!await r(ne,{verifiedRecord:ne,token:T})||(S({record:q,blob:ne.blob}),E(null),l(null),o("\u8BF7\u9009\u62E9\u8BE5\u7248\u672C\u7684\u5BF9\u5E94\u539F\u6587\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u91CD\u65B0\u5173\u8054\u6B64\u9009\u533A\u300D\u3002",5e3))})}function se(T,q){I(async()=>{if(!await vo(T.id,q,T.sourceRevision))throw new Error("\u8BC1\u636E\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u540E\u91CD\u8BD5\u3002");await R(),o("\u8BC1\u636E\u5DF2\u66F4\u65B0\u3002")})}function Y(T){I(async()=>{await kc(T.id),await R(),o("\u8BC1\u636E\u5DF2\u5220\u9664\uFF0C\u76F8\u5173\u4E66\u5355\u5F15\u7528\u5DF2\u79FB\u9664\u3002")})}return{rows:i,panel:s,draft:d,focus:g,busy:h,problem:C,mismatch:P,replacement:v,refresh:R,show:b,retry:J,jump:te,located:ie,createDraft:L,saveDraft:F,pickFile:ue,reselect:U,edit:se,remove:Y,closePanel:()=>{M.current||(l(null),E(null),y(""))},closeDraft:()=>{M.current||(p(null),y(""))}}}var Uh=360,Wh=520;function jh(t){try{return t.toDataURL("image/jpeg",.84)}catch{return""}}function Vb(t){let e=Number(t.naturalWidth||t.width)||0,r=Number(t.naturalHeight||t.height)||0;if(!e||!r)return"";let n=Math.min(Uh/e,Wh/r,1),o=document.createElement("canvas");o.width=Math.max(1,Math.round(e*n)),o.height=Math.max(1,Math.round(r*n));let i=o.getContext("2d");return i.fillStyle="#fbf7ee",i.fillRect(0,0,o.width,o.height),i.drawImage(t,0,0,o.width,o.height),jh(o)}function Kb(t){return new Promise(e=>{let r=new Image;r.decoding="async",r.onload=()=>e(r),r.onerror=()=>e(null),r.src=t})}async function Yb(t){if(!t||!String(t.type||"").startsWith("image/"))return"";let e=URL.createObjectURL(t);try{let r=await Kb(e);return r?Vb(r):""}finally{URL.revokeObjectURL(e)}}async function Zb(t,e){let r=await si(t,{signal:e}),n,o,i=()=>{o?.cancel(),r.close()};e?.addEventListener("abort",i,{once:!0});try{if(e?.aborted)throw en();let a=await r.pdf.getPage(1);if(e?.aborted)throw en();let s=a.getViewport({scale:1}),l=Math.min(Uh/s.width,Wh/s.height,1.5),d=a.getViewport({scale:l});if(n=document.createElement("canvas"),n.width=Math.max(1,Math.round(d.width)),n.height=Math.max(1,Math.round(d.height)),o=a.render({canvas:n,viewport:d,background:"#ffffff"}),o.onContinue=p=>setTimeout(()=>{e?.aborted?o.cancel():p()},16),await o.promise,e?.aborted)throw en();return jh(n)}finally{e?.removeEventListener("abort",i),await r.close(),n&&(n.width=0,n.height=0)}}async function Gh(t,{signal:e}={}){if(e?.aborted)throw en();if(!t?.blob)return{};let r=String(t.format||"").toLowerCase();try{if(r==="pdf"){let n=await Zb(t.blob,e);return n?{cover:n}:{}}if(["epub","mobi","azw","azw3"].includes(r)){let{parseBook:n}=await Promise.resolve().then(()=>(Ol(),Ml)),o=/\.[a-z0-9]+$/iu.test(t.title||"")?t.title:`${t.title||"book"}.${r}`,i=await n(t.blob,{fileName:o,mime:t.blob.type});try{let a="";if(i.cover)try{let s=await fetch(i.cover);a=await Yb(await s.blob())}catch{a=""}return{...a?{cover:a}:{},...i.title?{title:i.title}:{},...i.author?{author:i.author}:{},...i.language?{language:i.language}:{}}}finally{i.dispose?.()}}}catch(n){if(e?.aborted)throw en();console.warn("[dsh-reader] cover generation failed",t.title,n)}return{}}var K=require("react/jsx-runtime"),Ui="dsh-reader:last-book:v1",Ll="dsh-reader:session-book:v1",qh=44;function Xh(t){let e=/^#?([0-9a-f]{6})$/iu.exec(String(t||"").trim());if(!e)return null;let r=e[1];return{r:parseInt(r.slice(0,2),16),g:parseInt(r.slice(2,4),16),b:parseInt(r.slice(4,6),16)}}function Qb(t,e,r){let n=Xh(t),o=Xh(e);if(!n||!o)return e;let i=Math.max(0,Math.min(1,r));return`#${Do(n.r*i+o.r*(1-i)).slice(1)}${Do(n.g*i+o.g*(1-i)).slice(1)}${Do(n.b*i+o.b*(1-i)).slice(1)}`}function Do(t){return`#${Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0")}`}function Jb(t){let e=document.createElement("canvas");e.width=32,e.height=32;let r=e.getContext("2d",{willReadFrequently:!0});if(!r)return"";r.drawImage(t,0,0,e.width,e.height);let n;try{n=r.getImageData(0,0,e.width,e.height).data}catch{return""}let o=new Map;for(let a=0;a<n.length;a+=4){let s=n[a+3];if(s<40)continue;let l=n[a],d=n[a+1],p=n[a+2],g=`${l>>5}:${d>>5}:${p>>5}`,u=o.get(g);u||(u={count:0,r:0,g:0,b:0},o.set(g,u)),u.count+=s,u.r+=l*s,u.g+=d*s,u.b+=p*s}let i=null;for(let a of o.values())(!i||a.count>i.count)&&(i=a);return i?Do(i.r/i.count)+Do(i.g/i.count).slice(1)+Do(i.b/i.count).slice(1):""}function e0(t,e,r){return Math.max(e,Math.min(r,t))}var Dl=class extends G.default.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,r){console.error("[dsh-reader]",e,r)}reset=()=>this.setState({error:null});render(){return this.state.error?(0,K.jsx)("div",{className:"dshr-root",children:(0,K.jsxs)("div",{className:"dshr-error-panel",children:[(0,K.jsx)("h3",{children:"\u9605\u8BFB\u5668\u9047\u5230\u4E86\u4E00\u4E2A\u95EE\u9898"}),(0,K.jsxs)("p",{children:[this.state.error?.message||"\u672A\u77E5\u9519\u8BEF","\u3002\u8FD9\u901A\u5E38\u662F\u6587\u6863\u683C\u5F0F\u6216\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u91CD\u65B0\u6253\u5F00\u6587\u6863\u901A\u5E38\u53EF\u4EE5\u6062\u590D\u3002"]}),(0,K.jsx)("div",{style:{display:"flex",gap:8,marginTop:14},children:(0,K.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:()=>{this.reset(),this.props.onReset?.()},children:"\u8FD4\u56DE\u4E66\u67B6"})})]})}):this.props.children}};function t0(){let[t,e]=G.default.useState(""),r=G.default.useRef(0),n=G.default.useCallback((o,i=2800)=>{window.clearTimeout(r.current),e(String(o)),r.current=window.setTimeout(()=>e(""),i)},[]);return G.default.useEffect(()=>()=>window.clearTimeout(r.current),[]),[t,n]}function Vh(){let[t,e]=G.default.useState([]),[r,n]=G.default.useState([]),o=G.default.useRef(0),[i,a]=G.default.useState(!0),[s,l]=G.default.useState(!1),[d,p]=G.default.useState(!1),[g,u]=G.default.useState("all"),[h,_]=G.default.useState(null),[C,y]=G.default.useState(!1),[P,E]=G.default.useState(""),[v,S]=G.default.useState(Dc),[M,k]=G.default.useState(!1),[R,I]=G.default.useState(!1),[b,O]=G.default.useState(!1),[L,F]=G.default.useState(!1),[$,J]=G.default.useState(!1),[te,ie]=G.default.useState(!1),ue=G.default.useRef(null),[U,se]=G.default.useState(null),[Y,T]=t0(),[{index:q,entry:re},me]=G.default.useState({index:0,entry:null}),[ne,Te]=G.default.useState({}),[Xe,Ee]=G.default.useState(!0),[$e,_e]=G.default.useState(!1),[Tt,f]=G.default.useState(null),[c,w]=G.default.useState(null),[x,V]=G.default.useState(null),[de,he]=G.default.useState([]),[ye,we]=G.default.useState(!1),[Ve,Me]=G.default.useState(null),[Ye,st]=G.default.useState(!1),[et,je]=G.default.useState(null),[pe,Le]=G.default.useState(null),[It,lt]=G.default.useState(null),[Ze,wt]=G.default.useState(""),[Qe,lr]=G.default.useState(0),[Mt,Bt]=G.default.useState(""),[_r,oe]=G.default.useState(!1),[be,Ie]=G.default.useState(0),Pe=G.default.useRef(null),ct=G.default.useRef({timer:0,latest:null}),Ot=G.default.useRef({token:0,controller:null}),cr=G.default.useRef(null),Et=G.default.useRef(0),mt=G.default.useRef(v),bt=G.default.useRef(t),hn=G.default.useRef({running:!1,attempted:new Set}),De=G.default.useRef(!1),[pn,pr]=G.default.useState(null);cr.current=h,mt.current=v,bt.current=t;let dr=G.default.useCallback(()=>{Ot.current.token+=1,Ot.current.controller?.abort()},[]);G.default.useLayoutEffect(()=>()=>dr(),[h?.record?.id,c,dr]);let ho=`${v.fontSize}:${v.lineHeight}:${v.fontFamily}:${v.fontWeight}:${v.tocWidth}:${v.contentWidth}:${Ze?"img":"plain"}:${be}`,Ut=G.default.useMemo(()=>wi(v,Ze),[v,Ze]),kr=G.default.useMemo(()=>{let N=Ut["--dshr-reader-bg"]||v.customBackground||"#fbf7ee",z=Mt&&Ze?Qb(Mt,N,Number(v.backgroundImageOpacity)||0):N;return{"--dshr-immersive-surface":z,"--dshr-immersive-ink":yi(z).ink}},[Mt,Ze,Ut,v.customBackground,v.backgroundImageOpacity]),xt=G.default.useCallback(async()=>{let N=++o.current;try{let[z,Z]=await Promise.all([ds(),bc()]);e(z),N===o.current&&n(Z)}catch(z){T(z?.message||"\u8BFB\u53D6\u4E66\u67B6\u5931\u8D25\u3002")}finally{a(!1)}},[T]),po=G.default.useCallback(N=>{o.current+=1,n(N)},[]),fr=G.default.useCallback(async N=>{if(!N){he([]);return}try{he(await Cc(N))}catch(z){console.warn("[dsh-reader] annotations unavailable",z),he([])}},[]);G.default.useEffect(()=>{xt()},[xt]),G.default.useEffect(()=>{if(i||h)return;let N=bt.current.filter(fe=>!fe.cover&&["pdf","epub","mobi","azw","azw3"].includes(fe.format)&&!hn.current.attempted.has(fe.id));if(N.length===0)return;let z=hn.current,Z=new AbortController;z.controller=Z,z.running=!0;let Fe=setTimeout(()=>{(async()=>{for(let fe of N){if(Z.signal.aborted)break;if(!z.attempted.has(fe.id))try{let vt=await bo(fe.id);if(!vt||Z.signal.aborted)continue;let _t=await Gh(vt,{signal:Z.signal});if(Z.signal.aborted)break;z.attempted.add(fe.id),(_t.cover||_t.title||_t.author||_t.language)&&(await xo(vt.id,_t),e(Pt=>Pt.map(Wt=>Wt.id===vt.id?{...Wt,..._t}:Wt)))}catch(vt){if(Z.signal.aborted)break;z.attempted.add(fe.id),console.warn("[dsh-reader] cover generation failed",fe.title,vt)}}})().finally(()=>{z.controller===Z&&(z.running=!1)})},500);return()=>{clearTimeout(Fe),Z.abort()}},[i,h]),G.default.useEffect(()=>{Fc(v)},[v]),G.default.useEffect(()=>{if(!h||v.readingMode==="book")return;let N=z=>{if(z.defaultPrevented||z.repeat||z.ctrlKey||z.metaKey||z.altKey||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(z.key)||z.target instanceof Element&&z.target.closest('input, textarea, select, [contenteditable="true"], .dshr-topbar--pdf, .dshr-immersive-controls, .dshr-modal-mask, .dshr-appearance-panel, .dshr-anno-panel, .dshr-ai, .dshr-selection, .dshr-anno-composer, .dshr-pdf-translation-panel'))return;let Z=window.getSelection?.();if(Z&&!Z.isCollapsed)return;let Fe=document.querySelector(".dshr-root .dshr-content")||document.querySelector(".dshr-root .dshr-pdf-scroll");if(!Fe)return;z.preventDefault();let fe=Math.max(160,Math.round(Fe.clientHeight*.82)),vt=z.key==="ArrowRight"||z.key==="ArrowDown";Fe.scrollBy({top:vt?fe:-fe,behavior:"smooth"})};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[h,v.readingMode]),G.default.useEffect(()=>{if(!Ze){Bt("");return}let N=!1,z=new Image;return z.onload=()=>{N||Bt(Jb(z))},z.onerror=()=>{N||Bt("")},z.src=Ze,()=>{N=!0}},[Ze]),G.default.useEffect(()=>{let N=!1,z="";if(!v.backgroundImageKey){wt("");return}return(async()=>{try{let Z=await Oc();if(!Z||N)return;z=URL.createObjectURL(Z),wt(z)}catch{N||wt("")}})(),()=>{N=!0,z&&URL.revokeObjectURL(z)}},[v.backgroundImageKey,Qe]),G.default.useEffect(()=>{if(!c)return;let N=Z=>{Z?.type==="scroll"&&Z.target instanceof Element&&Z.target.closest(".dshr-pdf-translation-panel")||w(null)},z=Z=>{Z.key==="Escape"&&w(null)};return window.addEventListener("resize",N),window.addEventListener("keydown",z),document.addEventListener("scroll",N,!0),()=>{window.removeEventListener("resize",N),window.removeEventListener("keydown",z),document.removeEventListener("scroll",N,!0)}},[c]);let qt=G.default.useCallback(async()=>{let N=ct.current.latest;if(N){ct.current.latest=null;try{await us(N.id,N.progress),e(z=>z.map(Z=>Z.id===N.id?{...Z,progress:N.progress,lastOpenedAt:Date.now()}:Z))}catch{}}},[xt]),Xt=G.default.useCallback((N,z)=>{N&&(Te(z),ct.current.latest={id:N,progress:z},!ct.current.timer&&(ct.current.timer=window.setTimeout(()=>{ct.current.timer=0,qt()},700)))},[qt]);G.default.useEffect(()=>()=>{window.clearTimeout(ct.current.timer),qt()},[qt]);let An=G.default.useCallback(async()=>{p(!0);try{let N=await mc();await xt();let z=[`\u6587\u732E ${N.counts.paper||0}`,`\u4E66\u7C4D ${N.counts.book||0}`];N.counts.document&&z.push(`\u6587\u6863 ${N.counts.document}`),T(N.changed>0?`\u4E66\u5355\u5DF2\u6574\u7406\uFF1A${z.join(" \xB7 ")}`:`\u4E66\u5355\u5DF2\u662F\u6700\u65B0\uFF1A${z.join(" \xB7 ")}`)}catch(N){T(N?.message||"\u81EA\u52A8\u6574\u7406\u5931\u8D25\u3002")}finally{p(!1)}},[xt,T]),fo=G.default.useCallback(async(N,z)=>{let Z=["book","paper","document"],Fe=z||Z[(Z.indexOf(N.category||"document")+1)%Z.length];try{await gc(N.id,Fe),await xt(),T(`\u300A${N.title||"\u6587\u6863"}\u300B\u5DF2\u5F52\u5165\u300C${Xo(Fe)}\u300D\u3002`)}catch(fe){T(fe?.message||"\u4FEE\u6539\u5206\u7C7B\u5931\u8D25\u3002")}},[xt,T]),go=G.default.useCallback(N=>{S(z=>({...z,...N})),Ie(z=>z+1)},[]),zn=G.default.useCallback(()=>{Pe.current?.click()},[]),Vr=G.default.useCallback(async N=>{if(N){if(!String(N.type||"").startsWith("image/")){T("\u8BF7\u9009\u62E9\u56FE\u7247\u6587\u4EF6\uFF08JPG / PNG / WebP\uFF09\u3002");return}oe(!0);try{let z=N;try{let Z=await createImageBitmap(N),Fe=Math.min(1,2400/Math.max(Z.width,Z.height));if(Fe<1){let fe=document.createElement("canvas");fe.width=Math.round(Z.width*Fe),fe.height=Math.round(Z.height*Fe),fe.getContext("2d").drawImage(Z,0,0,fe.width,fe.height);let _t=await new Promise(Pt=>fe.toBlob(Pt,"image/jpeg",.86));_t&&(z=_t)}Z.close?.()}catch{}await Mc(z),S(Z=>({...Z,backgroundImageKey:"reader-background"})),lr(Z=>Z+1),T("\u80CC\u666F\u56FE\u7247\u5DF2\u4FDD\u5B58\uFF0C\u53EF\u8C03\u6574\u900F\u660E\u5EA6\u548C\u6A21\u7CCA\u5EA6\u3002")}catch(z){T(z?.message||"\u80CC\u666F\u56FE\u7247\u4FDD\u5B58\u5931\u8D25\u3002")}finally{oe(!1)}}},[T]),xe=G.default.useCallback(async()=>{try{await Lc(),S(N=>({...N,backgroundImageKey:""})),wt(""),T("\u5DF2\u79FB\u9664\u80CC\u666F\u56FE\u7247\u3002")}catch(N){T(N?.message||"\u79FB\u9664\u80CC\u666F\u56FE\u7247\u5931\u8D25\u3002")}},[T]),A=G.default.useCallback(async(N,z={})=>{if(z.rejected){T("\u6CA1\u6709\u53EF\u8BC6\u522B\u7684\u6587\u6863\u3002\u652F\u6301 PDF / EPUB / MOBI / TXT / Markdown / HTML\u3002");return}if(!N?.length)return;l(!0);let Z=[],Fe=[];for(let fe of N)try{let vt=await Vo(fe);Z.push(vt)}catch(vt){Fe.push(`${fe.name}: ${vt?.message||"\u5BFC\u5165\u5931\u8D25"}`)}await xt(),l(!1),Fe.length>0&&T(Fe[0],4200),Z.length>0&&(T(Z.length===1?"\u5DF2\u52A0\u5165\u4E66\u67B6\u3002":`\u5DF2\u52A0\u5165 ${Z.length} \u4EFD\u6587\u6863\u3002`),At(Z[0]))},[xt,T]),Q=G.default.useCallback(async N=>{O(!0);try{let z=await Xc(N);I(!1),await A([z])}catch(z){T(z?.message||"\u5728\u7EBF\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u94FE\u63A5\u6216\u7A0D\u540E\u91CD\u8BD5\u3002",5200)}finally{O(!1)}},[A,T]),ce=G.default.useCallback(async()=>{if(J(!1),document.fullscreenElement===ue.current)try{await document.exitFullscreen()}catch{}},[]),rt=G.default.useCallback(async()=>{if($){await ce();return}J(!0),Ee(!1)},[$,ce]),gt=G.default.useCallback(async()=>{try{document.fullscreenElement===ue.current?await document.exitFullscreen():ue.current?.requestFullscreen&&await ue.current.requestFullscreen()}catch{T("\u6D4F\u89C8\u5668\u963B\u6B62\u4E86\u5168\u5C4F\uFF1B\u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528\u5F53\u524D\u7A97\u53E3\u7684\u6C89\u6D78\u6A21\u5F0F\u3002",3600)}},[T]);G.default.useEffect(()=>{let N=()=>{ie(document.fullscreenElement===ue.current)};return document.addEventListener("fullscreenchange",N),()=>document.removeEventListener("fullscreenchange",N)},[]),G.default.useEffect(()=>{!h&&$&&ce()},[h,$,ce]),G.default.useEffect(()=>{if(!$||L)return;let N=z=>{z.key==="Escape"&&!z.defaultPrevented&&(z.preventDefault(),ce())};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[$,L,ce]);let He=G.default.useCallback(()=>{Et.current+=1,y(!1);try{localStorage.removeItem(Ui)}catch{}try{sessionStorage.removeItem(Ll)}catch{}pr(null),ct.current.timer&&(window.clearTimeout(ct.current.timer),ct.current.timer=0),qt(),_e(!1),f(null),w(null),V(null),he([]),we(!1),st(!1),Me(null),je(null),Le(null),lt(null);let N=cr.current?.book;if(N?.dispose)try{N.dispose()}catch{}_(null),Te({}),me({index:0,entry:null})},[qt]),At=G.default.useCallback(async(N,{verifiedRecord:z,token:Z}={})=>{let Fe=Z??++Et.current;if(Fe!==Et.current)return!1;y(!0),E(`\u6B63\u5728\u6253\u5F00\u300A${N.title||"\u6587\u6863"}\u300B\u2026`);try{let fe=z??await bo(N.id);if(Fe!==Et.current)return!1;if(!fe?.blob)throw new Error("\u4E66\u67B6\u4E2D\u627E\u4E0D\u5230\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u53EF\u80FD\u5DF2\u88AB\u6E05\u7406\u3002\u8BF7\u91CD\u65B0\u5BFC\u5165\u3002");pr(null);try{localStorage.setItem(Ui,fe.id)}catch{}try{sessionStorage.setItem(Ll,fe.id)}catch{}if((fe.format||Pn(fe.title))==="pdf"){fe.blob.size>24*1024*1024&&E(`\u6B63\u5728\u6253\u5F00\u5927\u578B PDF\u300A${fe.title||N.title||"\u6587\u6863"}\u300B\u2026`);let Ho=fe.blob,jn=fe.progress||{},qi={...fe,blob:null,blobName:fe.blob.name||""};return _({kind:"pdf",record:qi,data:Ho}),Te({page:jn.page||1,pages:jn.pages||0,percent:jn.percent||0}),me({index:0,entry:null}),Ee(!1),we(!1),lt(null),await fr(fe.id),Fe===Et.current&&y(!1),await us(fe.id),await xt(),Fe===Et.current}let{parseBook:_t}=await Promise.resolve().then(()=>(Ol(),Ml)),Pt=await _t(fe.blob,{fileName:fe.title??N.title,mime:fe.blob.type});if(Fe!==Et.current)return Pt.dispose?.(),!1;let Wt={...fe,title:Pt.title||fe.title,author:Pt.author||fe.author,language:Pt.language||fe.language};if((Wt.title!==fe.title||Wt.author!==fe.author||Wt.language!==fe.language)&&(await xo(fe.id,{title:Wt.title,author:Wt.author,language:Wt.language}),await xt()),Fe!==Et.current)return Pt.dispose?.(),!1;let nt=fe.progress||{},Cn=e0(Number(nt.chapter)||0,0,Math.max(0,Pt.chapters.length-1));return _({kind:"flow",record:Wt,book:Pt}),me({index:Cn,entry:{scrollRatio:Number(nt.scrollRatio)||0}}),Te({chapter:Cn,chapters:Pt.chapters.length,percent:Number(nt.percent)||(Pt.chapters.length?(Cn+1)/Pt.chapters.length*100:0)}),Ee(!0),we(!1),Le(null),await fr(fe.id),Fe!==Et.current?!1:(y(!1),Bc(Pt.chapters.slice(0,3).map(Ho=>Ho.blocks.map(jn=>jn.text||"").join(" ")).join(" "))&&!mt.current.autoTranslate&&T("\u68C0\u6D4B\u5230\u5916\u6587\u5185\u5BB9\u3002\u9876\u90E8\u300C\u5B9E\u65F6\u7FFB\u8BD1\u300D\u53EF\u4EE5\u968F\u65F6\u5F00\u542F\u3002",4200),!0)}catch(fe){return Fe!==Et.current||(y(!1),T(fe?.message||"\u6253\u5F00\u6587\u6863\u5931\u8D25\u3002",5e3)),!1}},[xt,fr,T]),ut=bu({currentRef:cr,navigation:Et,openBook:At,refreshBooks:xt,showToast:T});G.default.useEffect(()=>{if(i||h||De.current||bt.current.length===0)return;De.current=!0;let N="";try{N=localStorage.getItem(Ui)||""}catch{}if(!N){pr(null);return}let z=bt.current.find(fe=>fe.id===N);if(!z){pr(null);try{localStorage.removeItem(Ui)}catch{}return}let Z=Number(z.size)>24*1024*1024||Number(z.progress?.pages)>300,Fe=!1;try{Fe=sessionStorage.getItem(Ll)===z.id}catch{}pr(z),!(Z&&!Fe)&&At(z)},[i,h,At]),G.default.useEffect(()=>{let N=()=>{document.visibilityState==="hidden"&&qt()};return document.addEventListener("visibilitychange",N),()=>document.removeEventListener("visibilitychange",N)},[qt]);async function gr(N){if(N.format!=="pdf"){se(N);return}try{let z=(await Xa()).filter(Z=>Z.bookId===N.id).length;se({...N,evidenceCount:z})}catch(z){T(z?.message||"\u8BFB\u53D6\u8BC1\u636E\u5173\u8054\u5931\u8D25\u3002")}}let Yt=G.default.useCallback(async(N=!1)=>{let z=U;if(z)try{cr.current?.record?.id===z.id&&He(),await wc(z.id,{deleteEvidence:N}),se(null),await xt(),T("\u5DF2\u4ECE\u4E66\u67B6\u5220\u9664\u3002")}catch(Z){T(Z?.message||"\u5220\u9664\u5931\u8D25\u3002")}},[He,U,xt,T]),Rt=G.default.useCallback(async()=>{try{He(),await Sc(),await xt(),k(!1),T("\u4E66\u67B6\u5DF2\u6E05\u7A7A\u3002")}catch(N){T(N?.message||"\u6E05\u7A7A\u4E66\u67B6\u5931\u8D25\u3002")}},[He,xt,T]),Bn=G.default.useCallback((N,z)=>{f({id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:String(N||"").slice(0,8e3),context:String(z||"").slice(0,1600)}),_e(!0),we(!1),w(null),V(null)},[]),fn=G.default.useCallback((N,z="web")=>{let Z=String(N||"").trim().slice(0,500);if(!Z)return;let Fe=z==="scholar"?`https://scholar.google.com/scholar?q=${encodeURIComponent(Z)}`:`https://www.google.com/search?q=${encodeURIComponent(Z)}`;window.open(Fe,"_blank","noopener,noreferrer")||T("\u6D4F\u89C8\u5668\u62E6\u622A\u4E86\u65B0\u7A97\u53E3\u3002\u8BF7\u5141\u8BB8\u5F39\u51FA\u7A97\u53E3\uFF0C\u6216\u590D\u5236\u6587\u5B57\u540E\u624B\u52A8\u641C\u7D22\u3002")},[T]),Fo=G.default.useCallback(async N=>{try{await navigator.clipboard.writeText(N),T("\u5DF2\u590D\u5236\u3002")}catch{T("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u3002")}},[T]),gn=G.default.useCallback(N=>{if(dr(),!N?.text?.trim()){w(null);return}w({...N,source:"flow"}),V(null)},[dr]),$n=G.default.useCallback(N=>{if(dr(),!N?.text){w(null);return}w({...N,source:"pdf"}),V(null)},[dr]),Hn=G.default.useCallback(async N=>{let z=N?.text?.trim();if(!z)return;dr();let Z=new AbortController,Fe=Ot.current.token,fe=h?.record?.id;Ot.current.controller=Z;let vt=()=>!Z.signal.aborted&&Fe===Ot.current.token&&cr.current?.record?.id===fe;V({status:"loading"});try{let _t=await yo([{id:"selection",text:z}],{context:N.context||"",title:h?.book?.title||h?.record?.title||"",signal:Z.signal});vt()&&V({status:"done",zh:_t.selection||""})}catch(_t){vt()&&!Xn(_t)&&V({status:"error",error:_t?.message||"\u7FFB\u8BD1\u5931\u8D25\u3002"})}},[h,dr]),Ea=G.default.useCallback(N=>{let z=cr.current?.record?.id;if(!z||!N?.text?.trim())return;let Z=cr.current?.kind==="pdf";je(null),Me({bookId:z,kind:Z?"pdf":"flow",style:"highlight",color:"#f5d76e",width:9,note:"",quote:N.text.trim(),chapterId:Z?void 0:cr.current?.book?.chapters?.[q]?.id,chapterIndex:Z?void 0:q,ranges:Z?void 0:N.ranges,page:Z?N.page:void 0,rects:Z?N.pageRects:void 0}),st(!0),w(null),V(null)},[q]),Un=G.default.useCallback(N=>{N&&(je(N),Me({...N}),st(!0))},[]),zo=G.default.useCallback(N=>{let z=de.find(Z=>Z.id===N);z&&Un(z)},[de,Un]),mn=G.default.useCallback(()=>{st(!1),Me(null),je(null)},[]),Wn=G.default.useCallback(async N=>{if(!(!N||!N.bookId))try{N.id?await Rc(N.id,N):await Ic(N),await fr(N.bookId),mn(),Ie(z=>z+1),T(N.note?.trim()?"\u6279\u6CE8\u5DF2\u4FDD\u5B58\u3002":"\u6807\u8BB0\u5DF2\u4FDD\u5B58\u3002")}catch(z){T(z?.message||"\u4FDD\u5B58\u6279\u6CE8\u5931\u8D25\u3002")}},[mn,fr,T]),Kr=G.default.useCallback(async N=>{if(N?.id)try{await Pc(N.id),await fr(cr.current?.record?.id),mn(),Ie(z=>z+1),T("\u6279\u6CE8\u5DF2\u5220\u9664\u3002")}catch(z){T(z?.message||"\u5220\u9664\u6279\u6CE8\u5931\u8D25\u3002")}},[mn,fr,T]),Aa=G.default.useCallback(N=>{if(!N)return;if(N.kind==="pdf"){lt({id:N.id,page:N.page,token:Date.now()}),we(!1);return}let z=Number.isFinite(N.chapterIndex)?N.chapterIndex:0;me(Z=>Z.index===z?Z:{index:z,entry:{edge:"start"}}),Le({id:N.id,blockId:N.ranges?.[0]?.blockId,token:Date.now()}),we(!1)},[]),bn=G.default.useCallback((N,z={edge:"start"})=>{N===q||N<0||N>=(h?.book?.chapters.length??0)||(Le(null),me({index:N,entry:z}))},[q,h]),Na=G.default.useCallback((N,z)=>{N!==re||h?.kind!=="flow"||(me(Z=>Z.entry===N?{index:Z.index,entry:null}:Z),Xt(h.record.id,ii(q,h.book.chapters.length,z)))},[re,q,h,Xt]);function Wi(N){if(N.button!==0)return;N.preventDefault();let z=N.clientX,Z=Number(mt.current.tocWidth)||260,Fe=document.body.style.cursor,fe=document.body.style.userSelect;document.body.style.cursor="col-resize",document.body.style.userSelect="none",document.body.classList.add("dshr-toc-resizing");let vt=Pt=>{let Wt=Math.max(180,Math.min(520,Math.round(Z+Pt.clientX-z)));S(nt=>({...nt,tocWidth:Wt}))},_t=()=>{window.removeEventListener("pointermove",vt),window.removeEventListener("pointerup",_t),window.removeEventListener("pointercancel",_t),document.body.style.cursor=Fe,document.body.style.userSelect=fe,document.body.classList.remove("dshr-toc-resizing")};window.addEventListener("pointermove",vt),window.addEventListener("pointerup",_t),window.addEventListener("pointercancel",_t)}let Dr=h?.book?.title||h?.record?.title||h?.record?.blob?.name||h?.record?.blobName||"",ji=h?.book?.author||h?.record?.author||"",Yr=h?.kind==="flow"?`\u7B2C ${(q||0)+1} / ${h.book.chapters.length} \u7AE0`:"",Gi=h?h.kind==="pdf"?ne.pages>0?(ne.page||1)/ne.pages*100:0:(q+1)/Math.max(1,h.book.chapters.length)*100:0;function Bo({iconTools:N,textTools:z}={}){let Z=h.kind==="pdf",Fe=(0,K.jsxs)("div",{className:"dshr-topbar__mode",role:"group","aria-label":"\u7FFB\u4E66\u65B9\u5F0F",children:[(0,K.jsx)("button",{type:"button",className:`dshr-topbar__mode-btn${v.readingMode!=="book"?" is-active":""}`,onClick:()=>S(nt=>({...nt,readingMode:"scroll"})),"aria-pressed":v.readingMode!=="book",title:"\u8FDE\u7EED\u6EDA\u52A8\u9605\u8BFB",children:(0,K.jsx)("span",{children:"\u6EDA\u52A8"})}),(0,K.jsx)("button",{type:"button",className:`dshr-topbar__mode-btn${v.readingMode==="book"?" is-active":""}`,onClick:()=>S(nt=>({...nt,readingMode:"book"})),"aria-pressed":v.readingMode==="book",title:"\u6A2A\u7248\u7EB8\u8D28\u4E66\u7FFB\u9875",children:(0,K.jsx)("span",{children:"\u6A2A\u7248"})}),v.readingMode==="book"?(0,K.jsx)("select",{className:"dshr-topbar__animation","aria-label":"\u7FFB\u9875\u52A8\u753B",value:v.bookAnimation||"slide",onChange:nt=>S(Cn=>({...Cn,bookAnimation:nt.target.value})),children:ru.map(nt=>(0,K.jsx)("option",{value:nt.id,children:nt.label},nt.id))}):null]}),fe=(0,K.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon",onClick:()=>{rt()},title:"\u5207\u6362\u5230\u6C89\u6D78\u9605\u8BFB","aria-label":"\u8FDB\u5165\u6C89\u6D78\u6A21\u5F0F",children:(0,K.jsx)(es,{size:16})}),vt=(0,K.jsxs)("button",{type:"button",className:"dshr-switch",role:"switch","aria-checked":v.autoTranslate,onClick:()=>S(nt=>({...nt,autoTranslate:!nt.autoTranslate,...h.kind==="pdf"&&!nt.autoTranslate?{hideTranslations:!1}:{}})),title:"\u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1","aria-label":"\u5B9E\u65F6\u7FFB\u8BD1",children:[(0,K.jsx)("span",{className:"dshr-switch__track"}),(0,K.jsx)("span",{style:{whiteSpace:"nowrap"},children:"\u5B9E\u65F6\u7FFB\u8BD1"})]}),_t=(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${v.hideTranslations?"dshr-btn--outline":""}`,onClick:()=>S(nt=>({...nt,hideTranslations:!nt.hideTranslations})),title:v.hideTranslations?"\u663E\u793A\u4E2D\u6587\u8BD1\u6587":"\u53EA\u770B\u539F\u6587\uFF08\u9690\u85CF\u5DF2\u7FFB\u8BD1\u5185\u5BB9\uFF09","aria-label":v.hideTranslations?"\u663E\u793A\u4E2D\u6587\u8BD1\u6587":"\u53EA\u770B\u539F\u6587\uFF0C\u9690\u85CF\u8BD1\u6587","aria-pressed":v.hideTranslations,children:v.hideTranslations?(0,K.jsx)(cc,{size:16}):(0,K.jsx)(lc,{size:16})}),(0,K.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon",onClick:()=>{F(!0),w(null)},title:"\u5B57\u4F53\u3001\u80CC\u666F\u4E0E\u7559\u767D","aria-label":"\u9605\u8BFB\u5916\u89C2",children:(0,K.jsx)(Go,{size:16})}),(0,K.jsxs)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${ye?"dshr-btn--outline":""}`,onClick:()=>{we(nt=>!nt),_e(!1),w(null)},title:"\u6279\u6CE8\u4E0E\u4FBF\u7B7E","aria-label":`\u6279\u6CE8\u4E0E\u4FBF\u7B7E\uFF0C\u5171 ${de.length} \u6761`,children:[(0,K.jsx)(Ha,{size:16}),de.length>0?(0,K.jsx)("span",{className:"dshr-count-badge",children:de.length>99?"99+":de.length}):null]})]}),Pt=(0,K.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary dshr-btn--sm",onClick:()=>Bn("",""),title:"\u6253\u5F00 AI \u9605\u8BFB\u52A9\u624B",children:[(0,K.jsx)(Rn,{size:14})," AI"]}),Wt=(0,K.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:()=>k(!0),title:"\u9605\u8BFB\u8BBE\u7F6E","aria-label":"\u9605\u8BFB\u8BBE\u7F6E",children:(0,K.jsx)(Da,{size:16})});return(0,K.jsxs)("div",{className:`dshr-topbar${Z?" dshr-topbar--pdf":""}`,style:{position:"relative"},children:[(0,K.jsx)("div",{className:"dshr-progress","aria-hidden":"true",children:(0,K.jsx)("i",{style:{"--p":`${Math.min(100,Gi)}%`}})}),(0,K.jsxs)("div",{className:"dshr-topbar__identity",children:[(0,K.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:He,title:"\u8FD4\u56DE\u4E66\u67B6","aria-label":"\u8FD4\u56DE\u4E66\u67B6",children:(0,K.jsx)(Zl,{size:17})}),(0,K.jsxs)("div",{className:"dshr-topbar__title",children:[(0,K.jsx)("strong",{title:Dr,children:Dr}),(0,K.jsx)("span",{children:[ji,Qr(h.record?.format),Yr].filter(Boolean).join(" \xB7 ")})]})]}),Z?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)("div",{className:"dshr-topbar__tools dshr-topbar__icons",role:"group","aria-label":"\u9605\u8BFB\u5FEB\u6377\u64CD\u4F5C",children:[N,fe,_t,(0,K.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon","aria-label":"\u8BC1\u636E\u5E93",title:"\u5F53\u524D\u8BBA\u6587\u7684\u8BC1\u636E",onClick:()=>ut.show(h.record.id),children:(0,K.jsx)(Wo,{size:16})}),Wt]}),(0,K.jsxs)("div",{className:"dshr-topbar__tools dshr-topbar__labels",children:[z,Fe,vt,Pt]})]}):(0,K.jsxs)("div",{className:"dshr-topbar__tools",children:[(0,K.jsx)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${Xe?"dshr-btn--outline":""}`,onClick:()=>Ee(nt=>!nt),title:"\u76EE\u5F55","aria-label":"\u76EE\u5F55","aria-pressed":Xe,children:(0,K.jsx)(Ji,{size:16})}),Fe,fe,vt,_t,Pt,Wt]})]})}function Nn(N){let z=h.kind==="pdf";return(0,K.jsxs)("div",{className:`dshr-immersive-controls${z?" dshr-immersive-controls--pdf":""}`,role:"group","aria-label":"\u6C89\u6D78\u9605\u8BFB\u63A7\u4EF6",style:z?void 0:{height:qh},children:[z?(0,K.jsx)("span",{className:"dshr-immersive-title",title:Dr,children:Dr}):null,N,(0,K.jsxs)("div",{className:"dshr-immersive-actions",children:[z?null:(0,K.jsxs)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>Ee(Z=>!Z),title:Xe?"\u6536\u8D77\u76EE\u5F55":"\u6253\u5F00\u76EE\u5F55","aria-pressed":Xe,children:[(0,K.jsx)(Ji,{size:15})," \u76EE\u5F55"]}),(0,K.jsxs)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>{F(!0),w(null)},title:"\u9605\u8BFB\u5916\u89C2","aria-label":"\u9605\u8BFB\u5916\u89C2","aria-haspopup":"dialog","aria-expanded":L,autoFocus:!0,children:[(0,K.jsx)(Go,{size:15})," \u5916\u89C2"]}),(0,K.jsxs)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>{gt()},title:te?"\u9000\u51FA\u5168\u5C4F":"\u8FDB\u5165\u5168\u5C4F","aria-label":te?"\u9000\u51FA\u5168\u5C4F":"\u8FDB\u5165\u5168\u5C4F","aria-pressed":te,children:[te?(0,K.jsx)(ic,{size:15}):(0,K.jsx)(es,{size:15}),te?"\u8FD8\u539F":"\u5168\u5C4F"]}),(0,K.jsxs)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>{ce()},title:"\u9000\u51FA\u6C89\u6D78\u6A21\u5F0F\uFF08Esc\uFF09",children:[(0,K.jsx)(Er,{size:15})," \u9000\u51FA\u6C89\u6D78"]})]})]})}let $o=h?(0,K.jsxs)(K.Fragment,{children:[$e?(0,K.jsx)(Fd,{open:$e,onClose:()=>_e(!1),seed:Tt,onGoogle:fn,onToast:T}):null,ye?(0,K.jsx)(lu,{open:ye,annotations:de,book:h.book||h.record,onClose:()=>we(!1),onOpenAnnotation:zo,onJump:Aa,onDelete:N=>{Kr(N)}}):null]}):null;return(0,K.jsx)(Dl,{onReset:He,children:(0,K.jsxs)("div",{ref:ue,className:`dshr-root${$?" is-immersive":""}`,style:{...Ut,...kr,"--dshr-font-size":`${v.fontSize}px`,"--dshr-line-height":String(v.lineHeight),"--dshr-toc-width":`${v.tocWidth}px`},"data-reader-background":v.backgroundPreset,"data-hide-translations":v.hideTranslations?"true":"false","data-reading-mode":v.readingMode||"scroll",children:[(0,K.jsx)("input",{ref:Pe,type:"file",accept:"image/*",className:"dshr-sr-only",tabIndex:-1,onChange:N=>{let z=N.target.files?.[0];N.target.value="",Vr(z)}}),h?(0,K.jsxs)("div",{className:"dshr-reader",children:[!$&&h.kind==="flow"?Bo():null,$&&h.kind==="flow"?Nn():null,(0,K.jsxs)("div",{className:"dshr-body",children:[h.kind==="flow"?(0,K.jsxs)("aside",{className:`dshr-toc${Xe?"":" is-closed"}`,"aria-label":"\u76EE\u5F55",children:[(0,K.jsxs)("div",{className:"dshr-toc__head",children:[(0,K.jsx)("strong",{children:"\u76EE\u5F55"}),(0,K.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost",onClick:()=>Ee(!1),"aria-label":"\u6536\u8D77\u76EE\u5F55",children:(0,K.jsx)(Er,{size:14})})]}),(0,K.jsx)("div",{className:"dshr-toc__list",children:h.book.chapters.map((N,z)=>(0,K.jsx)("button",{type:"button",className:`dshr-toc__item${z===q?" is-active":""}`,onClick:()=>bn(z),title:N.title,children:N.title||`\u7B2C ${z+1} \u7AE0`},N.id||z))}),(0,K.jsx)("div",{className:"dshr-toc__resizer",role:"separator","aria-orientation":"vertical","aria-label":"\u62D6\u52A8\u8C03\u6574\u76EE\u5F55\u5BBD\u5EA6",title:"\u62D6\u52A8\u8C03\u6574\u76EE\u5F55\u5BBD\u5EA6\uFF1B\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4",onPointerDown:Wi,onDoubleClick:()=>S(N=>({...N,tocWidth:260}))})]}):null,h.kind==="pdf"?(0,K.jsx)(Ld,{data:h.data,documentId:h.record.id,fileName:Dr,renderImmersiveToolbar:$?Nn:void 0,renderTopbar:$?void 0:Bo,sidePanels:$o,initialPage:h.record.progress?.page||1,autoTranslate:v.autoTranslate,hideTranslations:v.hideTranslations,paged:v.readingMode==="book",onHideTranslations:()=>S(N=>({...N,hideTranslations:!0})),annotations:de,onOpenAnnotation:zo,focusAnnotation:It,focusEvidence:ut.focus?.blob===h.data&&ut.focus?.token===Et.current?ut.focus:void 0,onEvidenceLocated:ut.located,onReady:({pageCount:N})=>Te(z=>({...z,page:z.page||1,pages:N,percent:N>0?(z.page||1)/N*100:z.percent||0})),onPageChange:N=>{let z=ne.pages||0,Z={...ne,page:N,pages:z,percent:z>0?N/z*100:0};Te(Z),Xt(h.record.id,Z)},onSelection:$n},h.record.id):(0,K.jsx)(dd,{book:h.book,chapterIndex:q,onChapterChange:bn,settings:v,chapterEntry:re,onChapterEntered:Na,onSelection:gn,onProgress:N=>{Te(N),Xt(h.record.id,N)},annotations:de,onOpenAnnotation:zo,focusAnnotation:pe,layoutVersion:ho}),h.kind==="flow"?$o:null]}),(0,K.jsx)(Zd,{enabled:v.readingMode==="book",animation:v.bookAnimation,bookMode:!0,bookFrame:h.kind==="flow",frameTop:$?qh:52,frameLeft:h.kind==="flow"&&Xe?v.tocWidth:0,readerKey:`${h.record.id}:${h.kind}:${q}`,canPrevChapter:h.kind==="flow"&&q>0,canNextChapter:h.kind==="flow"&&q<(h.book?.chapters?.length||1)-1,chapterEntry:re,onChapterEntered:Na,onChapterTurn:(N,z)=>bn(q+N,z)})]}):(0,K.jsx)(Wc,{books:t,collections:r,onCollectionsChange:po,loading:i,resumeBook:pn,onResume:N=>{At(N)},importing:s,organizing:d,categoryFilter:g,onCategoryFilter:u,onAutoOrganize:()=>{An()},onImport:A,onOpen:N=>{At(N)},onDelete:N=>{gr(N)},onCycleCategory:(N,z)=>{fo(N,z)},onSettings:()=>k(!0),onOnlineImport:()=>I(!0),onEvidence:()=>ut.show()}),C?(0,K.jsx)("div",{className:"dshr-modal-mask",style:{background:"color-mix(in srgb, var(--dshr-bg) 76%, transparent)",backdropFilter:"blur(5px)"},children:(0,K.jsxs)("div",{className:"dshr-loading",children:[(0,K.jsx)("div",{className:"dshr-loading__ring"}),(0,K.jsx)("span",{children:P})]})}):null,c&&!$e&&!Ye&&!ut.draft&&!ut.panel?(0,K.jsx)(zd,{selection:c,translation:x,onTranslate:N=>{Hn(N)},onAnnotate:Ea,onEvidence:c.source==="pdf"&&c.evidenceAnchor?()=>ut.createDraft(c,x):void 0,replacingEvidence:ut.replacement?.blob===h?.data,onExplain:N=>Bn(N.text,N.context),onGoogle:fn,onCopy:Fo,onClose:()=>{w(null),V(null)},onRetry:()=>{Hn(c)}}):null,(0,K.jsx)(Ud,{open:R,busy:b,onClose:()=>{b||I(!1)},onSubmit:N=>{Q(N)}}),M?(0,K.jsx)(Bd,{settings:v,onChange:S,onClose:()=>k(!1),onOpenAppearance:()=>{k(!1),F(!0)},onClearLibrary:()=>{Rt()}}):null,L?(0,K.jsx)(au,{open:L,settings:v,backgroundImageUrl:Ze,onChange:go,onPickBackgroundImage:zn,onClearBackgroundImage:()=>{xe()},onClose:()=>F(!1)}):null,U?(0,K.jsx)($d,{book:U,onCancel:()=>se(null),onConfirm:N=>{Yt(N)}}):null,ut.panel?(0,K.jsx)(mu,{evidence:ut,books:t,collections:r}):null,ut.draft?(0,K.jsx)(gu,{evidence:ut},ut.draft.id):null,Ye&&Ve?(0,K.jsx)(pu,{open:Ye,draft:Ve,mode:et?"edit":"create",onClose:mn,onSave:N=>{Wn(N)},onDelete:et?()=>{Kr(et)}:void 0}):null,(0,K.jsx)(Hd,{message:Y})]})})}var Kh=String.raw`
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
.dshr-evidence-dialog textarea, .dshr-evidence-dialog select {
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
`;var Yh=String.raw`
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
`;var uo=require("react/jsx-runtime"),r0="dsh-reader",n0=["slots","layout"],Fl="reader";function o0({size:t=18}){return(0,uo.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,uo.jsx)("path",{d:"M4 5.4A2.4 2.4 0 0 1 6.4 3H20v16.1H6.4A2.4 2.4 0 0 0 4 21.5V5.4Z",stroke:"currentColor",strokeWidth:"1.65",strokeLinejoin:"round"}),(0,uo.jsx)("path",{d:"M4 18.4a2.4 2.4 0 0 1 2.4-2.3H20",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round"}),(0,uo.jsx)("path",{d:"M8.2 7h7.6M8.2 10.2h4.6",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round"}),(0,uo.jsx)("circle",{cx:"17.2",cy:"18.6",r:"2.1",fill:"currentColor",opacity:".9"})]})}function a0(t){t.effect(()=>{let e=document.createElement("style");return e.dataset.dshReader="styles",e.textContent=`${Kh}
${Md}
${Ws}
${Yh}`,document.head.appendChild(e),()=>e.remove()},"dsh-reader: styles"),t.slots.inject("main",function*(){yield t.slots.register({name:"main",key:Fl},Vh)}),t.slots.inject("sidebar.panellist",()=>t.slots.register({name:"sidebar.panellist",id:Fl,order:10,label:()=>"\u9605\u8BFB"},o0))}

return module.exports;
}});

window.__ModuleLoader__.load({ id: "dsh-reader", factory: (require) => {
var module = { exports: {} }; var exports = module.exports;
var qu=Object.create;var ea=Object.defineProperty;var Xu=Object.getOwnPropertyDescriptor;var Vu=Object.getOwnPropertyNames;var Ku=Object.getPrototypeOf,Yu=Object.prototype.hasOwnProperty;var lr=(t,e,r)=>()=>{if(r)throw r[0];try{return t&&(e=t(t=0)),e}catch(n){throw r=[n],n}};var ui=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}},Ys=(t,e)=>{for(var r in e)ea(t,r,{get:e[r],enumerable:!0})},Zs=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Vu(e))!Yu.call(t,o)&&o!==r&&ea(t,o,{get:()=>e[o],enumerable:!(n=Xu(e,o))||n.enumerable});return t};var Mt=(t,e,r)=>(r=t!=null?qu(Ku(t)):{},Zs(e||!t||!t.__esModule?ea(r,"default",{value:t,enumerable:!0}):r,t)),Zu=t=>Zs(ea({},"__esModule",{value:!0}),t);function np(t,e){return sd(t,{i:2},e&&e.out,e&&e.dictionary)}function ld(t,e){return sd(t.subarray(rp(t,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}function ip(t,e){if(e){for(var r="",n=0;n<t.length;n+=16384)r+=String.fromCharCode.apply(null,t.subarray(n,n+16384));return r}else{if(rs)return rs.decode(t);var o=ap(t),a=o.s,r=o.r;return r.length&&Xt(8),a}}function cd(t,e){for(var r={},n=t.length-22;vr(t,n)!=101010256;--n)(!n||t.length-n>65558)&&Xt(13);var o=Vr(t,n+8);if(!o)return{};var a=vr(t,n+16),i=vr(t,n-20)==117853008;if(i){var s=vr(t,n-12);i=vr(t,s)==101075792,i&&(o=vr(t,s+32),a=vr(t,s+48))}for(var l=e&&e.filter,d=0;d<o;++d){var u=lp(t,a,i),g=u[0],f=u[1],p=u[2],_=u[3],k=u[4],x=u[5],T=sp(t,x);a=k,(!l||l({name:_,size:f,originalSize:p,compression:g}))&&(g?g==8?r[_]=np(t.subarray(T,T+f),{out:new cr(p)}):Xt(14,"unknown compression type "+g):r[_]=ns(t,T,T+f))}return r}var cr,so,Xf,ed,td,Vf,rd,nd,od,Kf,ad,Yf,D0,ts,ln,Ye,Co,Io,Ye,Ye,Ye,Ye,id,Ye,Zf,Qf,Qi,Dr,Ji,Jf,ns,ep,Xt,sd,tp,Vr,vr,es,rp,rs,op,ap,sp,lp,cp,os=lr(()=>{cr=Uint8Array,so=Uint16Array,Xf=Int32Array,ed=new cr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),td=new cr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Vf=new cr([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),rd=function(t,e){for(var r=new so(31),n=0;n<31;++n)r[n]=e+=1<<t[n-1];for(var o=new Xf(r[30]),n=1;n<30;++n)for(var a=r[n];a<r[n+1];++a)o[a]=a-r[n]<<5|n;return{b:r,r:o}},nd=rd(ed,2),od=nd.b,Kf=nd.r;od[28]=258,Kf[258]=28;ad=rd(td,0),Yf=ad.b,D0=ad.r,ts=new so(32768);for(Ye=0;Ye<32768;++Ye)ln=(Ye&43690)>>1|(Ye&21845)<<1,ln=(ln&52428)>>2|(ln&13107)<<2,ln=(ln&61680)>>4|(ln&3855)<<4,ts[Ye]=((ln&65280)>>8|(ln&255)<<8)>>1;Co=(function(t,e,r){for(var n=t.length,o=0,a=new so(e);o<n;++o)t[o]&&++a[t[o]-1];var i=new so(e);for(o=1;o<e;++o)i[o]=i[o-1]+a[o-1]<<1;var s;if(r){s=new so(1<<e);var l=15-e;for(o=0;o<n;++o)if(t[o])for(var d=o<<4|t[o],u=e-t[o],g=i[t[o]-1]++<<u,f=g|(1<<u)-1;g<=f;++g)s[ts[g]>>l]=d}else for(s=new so(n),o=0;o<n;++o)t[o]&&(s[o]=ts[i[t[o]-1]++]>>15-t[o]);return s}),Io=new cr(288);for(Ye=0;Ye<144;++Ye)Io[Ye]=8;for(Ye=144;Ye<256;++Ye)Io[Ye]=9;for(Ye=256;Ye<280;++Ye)Io[Ye]=7;for(Ye=280;Ye<288;++Ye)Io[Ye]=8;id=new cr(32);for(Ye=0;Ye<32;++Ye)id[Ye]=5;Zf=Co(Io,9,1),Qf=Co(id,5,1),Qi=function(t){for(var e=t[0],r=1;r<t.length;++r)t[r]>e&&(e=t[r]);return e},Dr=function(t,e,r){var n=e/8|0;return(t[n]|t[n+1]<<8)>>(e&7)&r},Ji=function(t,e){var r=e/8|0;return(t[r]|t[r+1]<<8|t[r+2]<<16)>>(e&7)},Jf=function(t){return(t+7)/8|0},ns=function(t,e,r){return(e==null||e<0)&&(e=0),(r==null||r>t.length)&&(r=t.length),new cr(t.subarray(e,r))},ep=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Xt=function(t,e,r){var n=new Error(e||ep[t]);if(n.code=t,Error.captureStackTrace&&Error.captureStackTrace(n,Xt),!r)throw n;return n},sd=function(t,e,r,n){var o=t.length,a=n?n.length:0;if(!o||e.f&&!e.l)return r||new cr(0);var i=!r,s=i||e.i!=2,l=e.i;i&&(r=new cr(o*3));var d=function(Ue){var h=r.length;if(Ue>h){var c=new cr(Math.max(h*2,Ue));c.set(r),r=c}},u=e.f||0,g=e.p||0,f=e.b||0,p=e.l,_=e.d,k=e.m,x=e.n,T=o*8;do{if(!p){u=Dr(t,g,1);var R=Dr(t,g+1,3);if(g+=3,R)if(R==1)p=Zf,_=Qf,k=9,x=5;else if(R==2){var E=Dr(t,g,31)+257,D=Dr(t,g+10,15)+4,L=E+Dr(t,g+5,31)+1;g+=14;for(var m=new cr(L),N=new cr(19),F=0;F<D;++F)N[Vf[F]]=Dr(t,g+F*3,7);g+=D*3;for(var J=Qi(N),se=(1<<J)-1,ne=Co(N,J,1),F=0;F<L;){var oe=ne[Dr(t,g,se)];g+=oe&15;var A=oe>>4;if(A<16)m[F++]=A;else{var z=0,de=0;for(A==16?(de=3+Dr(t,g,3),g+=2,z=m[F-1]):A==17?(de=3+Dr(t,g,7),g+=3):A==18&&(de=11+Dr(t,g,127),g+=7);de--;)m[F++]=z}}var O=m.subarray(0,E),X=m.subarray(E);k=Qi(O),x=Qi(X),p=Co(O,k,1),_=Co(X,x,1)}else Xt(1);else{var A=Jf(g)+4,P=t[A-4]|t[A-3]<<8,C=A+P;if(C>o){l&&Xt(0);break}s&&d(f+P),r.set(t.subarray(A,C),f),e.b=f+=P,e.p=g=C*8,e.f=u;continue}if(g>T){l&&Xt(0);break}}s&&d(f+131072);for(var re=(1<<k)-1,$=(1<<x)-1,xe=g;;xe=g){var z=p[Ji(t,g)&re],me=z>>4;if(g+=z&15,g>T){l&&Xt(0);break}if(z||Xt(2),me<256)r[f++]=me;else if(me==256){xe=g,p=null;break}else{var Te=me-254;if(me>264){var F=me-257,q=ed[F];Te=Dr(t,g,(1<<q)-1)+od[F],g+=q}var Ge=_[Ji(t,g)&$],Re=Ge>>4;Ge||Xt(3),g+=Ge&15;var X=Yf[Re];if(Re>3){var q=td[Re];X+=Ji(t,g)&(1<<q)-1,g+=q}if(g>T){l&&Xt(0);break}s&&d(f+131072);var Me=f+Te;if(f<X){var $e=a-X,He=Math.min(X,Me);for($e+f<0&&Xt(3);f<He;++f)r[f]=n[$e+f]}for(;f<Me;++f)r[f]=r[f-X]}}e.l=p,e.p=xe,e.b=f,e.f=u,p&&(u=1,e.m=k,e.d=_,e.n=x)}while(!u);return f!=r.length&&i?ns(r,0,f):r.subarray(0,f)},tp=new cr(0),Vr=function(t,e){return t[e]|t[e+1]<<8},vr=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},es=function(t,e){return vr(t,e)+vr(t,e+4)*4294967296},rp=function(t,e){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&Xt(6,"invalid zlib data"),(t[1]>>5&1)==+!e&&Xt(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};rs=typeof TextDecoder<"u"&&new TextDecoder,op=0;try{rs.decode(tp,{stream:!0}),op=1}catch{}ap=function(t){for(var e="",r=0;;){var n=t[r++],o=(n>127)+(n>223)+(n>239);if(r+o>t.length)return{s:e,r:ns(t,r-1)};o?o==3?(n=((n&15)<<18|(t[r++]&63)<<12|(t[r++]&63)<<6|t[r++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):o&1?e+=String.fromCharCode((n&31)<<6|t[r++]&63):e+=String.fromCharCode((n&15)<<12|(t[r++]&63)<<6|t[r++]&63):e+=String.fromCharCode(n)}};sp=function(t,e){return e+30+Vr(t,e+26)+Vr(t,e+28)},lp=function(t,e,r){var n=Vr(t,e+28),o=Vr(t,e+30),a=ip(t.subarray(e+46,e+46+n),!(Vr(t,e+8)&2048)),i=e+46+n,s=cp(t,i,o,r,vr(t,e+20),vr(t,e+24),vr(t,e+42)),l=s[0],d=s[1],u=s[2];return[Vr(t,e+10),l,d,a,i+o+Vr(t,e+32),u]},cp=function(t,e,r,n,o,a,i){var s=o==4294967295,l=a==4294967295,d=i==4294967295,u=e+r,g=s+l+d;if(n&&g){for(;e+4<u;e+=4+Vr(t,e+2))if(Vr(t,e)==1)return[s?es(t,e+4+8*l):o,l?es(t,e+4):a,d?es(t,e+4+8*(l+s)):i,1];n<2&&Xt(13)}return[o,a,i,0]}});function Yt(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return hs(t,e,n)}}function bp(t){return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return fs(t,r)}}function Le(t,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ha;dd&&dd(t,null);let n=e.length;for(;n--;){let o=e[n];if(typeof o=="string"){let a=r(o);a!==o&&(dp(e)||(e[n]=a),o=a)}t[o]=!0}return t}function xp(t){for(let e=0;e<t.length;e++)Fr(t,e)||(t[e]=null);return t}function Kr(t){let e=us(null);for(let[r,n]of xd(t))Fr(t,r)&&(Array.isArray(n)?e[r]=xp(n):n&&typeof n=="object"&&n.constructor===Object?e[r]=Kr(n):e[r]=n);return e}function Oo(t,e){for(;t!==null;){let n=hp(t,e);if(n){if(n.get)return Yt(n.get);if(typeof n.value=="function")return Yt(n.value)}t=up(t)}function r(){return null}return r}function wd(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Cp(),e=pe=>wd(pe);if(e.version="3.3.1",e.removed=[],!t||!t.document||t.document.nodeType!==Lo.document||!t.Element)return e.isSupported=!1,e;let{document:r}=t,n=r,o=n.currentScript,{DocumentFragment:a,HTMLTemplateElement:i,Node:s,Element:l,NodeFilter:d,NamedNodeMap:u=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:g,DOMParser:f,trustedTypes:p}=t,_=l.prototype,k=Oo(_,"cloneNode"),x=Oo(_,"remove"),T=Oo(_,"nextSibling"),R=Oo(_,"childNodes"),A=Oo(_,"parentNode");if(typeof i=="function"){let pe=r.createElement("template");pe.content&&pe.content.ownerDocument&&(r=pe.content.ownerDocument)}let P,C="",{implementation:E,createNodeIterator:D,createDocumentFragment:L,getElementsByTagName:m}=r,{importNode:N}=n,F=bd();e.isSupported=typeof xd=="function"&&typeof A=="function"&&E&&E.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:J,ERB_EXPR:se,TMPLIT_EXPR:ne,DATA_ATTR:oe,ARIA_ATTR:z,IS_SCRIPT_OR_DATA:de,ATTR_WHITESPACE:O,CUSTOM_ELEMENT:X}=md,{IS_ALLOWED_URI:re}=md,$=null,xe=Le({},[...hd,...ss,...ls,...cs,...fd]),me=null,Te=Le({},[...pd,...ds,...gd,...$a]),q=Object.seal(us(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ge=null,Re=null,Me=Object.seal(us(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),$e=!0,He=!0,Ue=!1,h=!0,c=!1,S=!0,v=!1,ee=!1,ue=!1,le=!1,be=!1,Ne=!1,Pe=!0,te=!1,De="user-content-",Ze=!0,qe=!1,Xe={},Oe=null,fe=Le({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Qe=null,lt=Le({},["audio","video","img","source","image","track"]),ct=null,pt=Le({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),er="http://www.w3.org/1998/Math/MathML",wt="http://www.w3.org/2000/svg",Nt="http://www.w3.org/1999/xhtml",mt=Nt,tr=!1,It=null,St=Le({},[er,wt,Nt],as),bt=Le({},["mi","mo","mn","ms","mtext"]),V=Le({},["annotation-xml"]),ie=Le({},["title","style","font","a","script"]),ye=null,he=["application/xhtml+xml","text/html"],gt="text/html",tt=null,Ft=null,nr=r.createElement("form"),cn=function(y){return y instanceof RegExp||y instanceof Function},Br=function(){let y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Ft&&Ft===y)){if((!y||typeof y!="object")&&(y={}),y=Kr(y),ye=he.indexOf(y.PARSER_MEDIA_TYPE)===-1?gt:y.PARSER_MEDIA_TYPE,tt=ye==="application/xhtml+xml"?as:Ha,$=Fr(y,"ALLOWED_TAGS")?Le({},y.ALLOWED_TAGS,tt):xe,me=Fr(y,"ALLOWED_ATTR")?Le({},y.ALLOWED_ATTR,tt):Te,It=Fr(y,"ALLOWED_NAMESPACES")?Le({},y.ALLOWED_NAMESPACES,as):St,ct=Fr(y,"ADD_URI_SAFE_ATTR")?Le(Kr(pt),y.ADD_URI_SAFE_ATTR,tt):pt,Qe=Fr(y,"ADD_DATA_URI_TAGS")?Le(Kr(lt),y.ADD_DATA_URI_TAGS,tt):lt,Oe=Fr(y,"FORBID_CONTENTS")?Le({},y.FORBID_CONTENTS,tt):fe,Ge=Fr(y,"FORBID_TAGS")?Le({},y.FORBID_TAGS,tt):Kr({}),Re=Fr(y,"FORBID_ATTR")?Le({},y.FORBID_ATTR,tt):Kr({}),Xe=Fr(y,"USE_PROFILES")?y.USE_PROFILES:!1,$e=y.ALLOW_ARIA_ATTR!==!1,He=y.ALLOW_DATA_ATTR!==!1,Ue=y.ALLOW_UNKNOWN_PROTOCOLS||!1,h=y.ALLOW_SELF_CLOSE_IN_ATTR!==!1,c=y.SAFE_FOR_TEMPLATES||!1,S=y.SAFE_FOR_XML!==!1,v=y.WHOLE_DOCUMENT||!1,le=y.RETURN_DOM||!1,be=y.RETURN_DOM_FRAGMENT||!1,Ne=y.RETURN_TRUSTED_TYPE||!1,ue=y.FORCE_BODY||!1,Pe=y.SANITIZE_DOM!==!1,te=y.SANITIZE_NAMED_PROPS||!1,Ze=y.KEEP_CONTENT!==!1,qe=y.IN_PLACE||!1,re=y.ALLOWED_URI_REGEXP||vd,mt=y.NAMESPACE||Nt,bt=y.MATHML_TEXT_INTEGRATION_POINTS||bt,V=y.HTML_INTEGRATION_POINTS||V,q=y.CUSTOM_ELEMENT_HANDLING||{},y.CUSTOM_ELEMENT_HANDLING&&cn(y.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(q.tagNameCheck=y.CUSTOM_ELEMENT_HANDLING.tagNameCheck),y.CUSTOM_ELEMENT_HANDLING&&cn(y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(q.attributeNameCheck=y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),y.CUSTOM_ELEMENT_HANDLING&&typeof y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(q.allowCustomizedBuiltInElements=y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),c&&(He=!1),be&&(le=!0),Xe&&($=Le({},fd),me=[],Xe.html===!0&&(Le($,hd),Le(me,pd)),Xe.svg===!0&&(Le($,ss),Le(me,ds),Le(me,$a)),Xe.svgFilters===!0&&(Le($,ls),Le(me,ds),Le(me,$a)),Xe.mathMl===!0&&(Le($,cs),Le(me,gd),Le(me,$a))),y.ADD_TAGS&&(typeof y.ADD_TAGS=="function"?Me.tagCheck=y.ADD_TAGS:($===xe&&($=Kr($)),Le($,y.ADD_TAGS,tt))),y.ADD_ATTR&&(typeof y.ADD_ATTR=="function"?Me.attributeCheck=y.ADD_ATTR:(me===Te&&(me=Kr(me)),Le(me,y.ADD_ATTR,tt))),y.ADD_URI_SAFE_ATTR&&Le(ct,y.ADD_URI_SAFE_ATTR,tt),y.FORBID_CONTENTS&&(Oe===fe&&(Oe=Kr(Oe)),Le(Oe,y.FORBID_CONTENTS,tt)),y.ADD_FORBID_CONTENTS&&(Oe===fe&&(Oe=Kr(Oe)),Le(Oe,y.ADD_FORBID_CONTENTS,tt)),Ze&&($["#text"]=!0),v&&Le($,["html","head","body"]),$.table&&(Le($,["tbody"]),delete Ge.tbody),y.TRUSTED_TYPES_POLICY){if(typeof y.TRUSTED_TYPES_POLICY.createHTML!="function")throw Po('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof y.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Po('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');P=y.TRUSTED_TYPES_POLICY,C=P.createHTML("")}else P===void 0&&(P=Ip(p,o)),P!==null&&typeof C=="string"&&(C=P.createHTML(""));Kt&&Kt(y),Ft=y}},$r=Le({},[...ss,...ls,...vp]),kt=Le({},[...cs,...yp]),Er=function(y){let j=A(y);(!j||!j.tagName)&&(j={namespaceURI:mt,tagName:"template"});let ce=Ha(y.tagName),Je=Ha(j.tagName);return It[y.namespaceURI]?y.namespaceURI===wt?j.namespaceURI===Nt?ce==="svg":j.namespaceURI===er?ce==="svg"&&(Je==="annotation-xml"||bt[Je]):!!$r[ce]:y.namespaceURI===er?j.namespaceURI===Nt?ce==="math":j.namespaceURI===wt?ce==="math"&&V[Je]:!!kt[ce]:y.namespaceURI===Nt?j.namespaceURI===wt&&!V[Je]||j.namespaceURI===er&&!bt[Je]?!1:!kt[ce]&&(ie[ce]||!$r[ce]):!!(ye==="application/xhtml+xml"&&It[y.namespaceURI]):!1},ut=function(y){Ro(e.removed,{element:y});try{A(y).removeChild(y)}catch{x(y)}},Ut=function(y,j){try{Ro(e.removed,{attribute:j.getAttributeNode(y),from:j})}catch{Ro(e.removed,{attribute:null,from:j})}if(j.removeAttribute(y),y==="is")if(le||be)try{ut(j)}catch{}else try{j.setAttribute(y,"")}catch{}},jn=function(y){let j=null,ce=null;if(ue)y="<remove></remove>"+y;else{let Ve=is(y,/^[\r\n\t ]+/);ce=Ve&&Ve[0]}ye==="application/xhtml+xml"&&mt===Nt&&(y='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+y+"</body></html>");let Je=P?P.createHTML(y):y;if(mt===Nt)try{j=new f().parseFromString(Je,ye)}catch{}if(!j||!j.documentElement){j=E.createDocument(mt,"template",null);try{j.documentElement.innerHTML=tr?C:Je}catch{}}let xt=j.body||j.documentElement;return y&&ce&&xt.insertBefore(r.createTextNode(ce),xt.childNodes[0]||null),mt===Nt?m.call(j,v?"html":"body")[0]:v?j.documentElement:xt},xn=function(y){return D.call(y.ownerDocument||y,y,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},ur=function(y){return y instanceof g&&(typeof y.nodeName!="string"||typeof y.textContent!="string"||typeof y.removeChild!="function"||!(y.attributes instanceof u)||typeof y.removeAttribute!="function"||typeof y.setAttribute!="function"||typeof y.namespaceURI!="string"||typeof y.insertBefore!="function"||typeof y.hasChildNodes!="function")},vn=function(y){return typeof s=="function"&&y instanceof s};function or(pe,y,j){Ba(pe,ce=>{ce.call(e,y,j,Ft)})}let yn=function(y){let j=null;if(or(F.beforeSanitizeElements,y,null),ur(y))return ut(y),!0;let ce=tt(y.nodeName);if(or(F.uponSanitizeElement,y,{tagName:ce,allowedTags:$}),S&&y.hasChildNodes()&&!vn(y.firstElementChild)&&Vt(/<[/\w!]/g,y.innerHTML)&&Vt(/<[/\w!]/g,y.textContent)||y.nodeType===Lo.progressingInstruction||S&&y.nodeType===Lo.comment&&Vt(/<[/\w]/g,y.data))return ut(y),!0;if(!(Me.tagCheck instanceof Function&&Me.tagCheck(ce))&&(!$[ce]||Ge[ce])){if(!Ge[ce]&&rn(ce)&&(q.tagNameCheck instanceof RegExp&&Vt(q.tagNameCheck,ce)||q.tagNameCheck instanceof Function&&q.tagNameCheck(ce)))return!1;if(Ze&&!Oe[ce]){let Je=A(y)||y.parentNode,xt=R(y)||y.childNodes;if(xt&&Je){let Ve=xt.length;for(let vt=Ve-1;vt>=0;--vt){let Wt=k(xt[vt],!0);Wt.__removalCount=(y.__removalCount||0)+1,Je.insertBefore(Wt,T(y))}}}return ut(y),!0}return y instanceof l&&!Er(y)||(ce==="noscript"||ce==="noembed"||ce==="noframes")&&Vt(/<\/no(script|embed|frames)/i,y.innerHTML)?(ut(y),!0):(c&&y.nodeType===Lo.text&&(j=y.textContent,Ba([J,se,ne],Je=>{j=Mo(j,Je," ")}),y.textContent!==j&&(Ro(e.removed,{element:y.cloneNode()}),y.textContent=j)),or(F.afterSanitizeElements,y,null),!1)},Ar=function(y,j,ce){if(Pe&&(j==="id"||j==="name")&&(ce in r||ce in nr))return!1;if(!(He&&!Re[j]&&Vt(oe,j))){if(!($e&&Vt(z,j))){if(!(Me.attributeCheck instanceof Function&&Me.attributeCheck(j,y))){if(!me[j]||Re[j]){if(!(rn(y)&&(q.tagNameCheck instanceof RegExp&&Vt(q.tagNameCheck,y)||q.tagNameCheck instanceof Function&&q.tagNameCheck(y))&&(q.attributeNameCheck instanceof RegExp&&Vt(q.attributeNameCheck,j)||q.attributeNameCheck instanceof Function&&q.attributeNameCheck(j,y))||j==="is"&&q.allowCustomizedBuiltInElements&&(q.tagNameCheck instanceof RegExp&&Vt(q.tagNameCheck,ce)||q.tagNameCheck instanceof Function&&q.tagNameCheck(ce))))return!1}else if(!ct[j]){if(!Vt(re,Mo(ce,O,""))){if(!((j==="src"||j==="xlink:href"||j==="href")&&y!=="script"&&gp(ce,"data:")===0&&Qe[y])){if(!(Ue&&!Vt(de,Mo(ce,O,"")))){if(ce)return!1}}}}}}}return!0},rn=function(y){return y!=="annotation-xml"&&is(y,X)},Rt=function(y){or(F.beforeSanitizeAttributes,y,null);let{attributes:j}=y;if(!j||ur(y))return;let ce={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:me,forceKeepAttr:void 0},Je=j.length;for(;Je--;){let xt=j[Je],{name:Ve,namespaceURI:vt,value:Wt}=xt,Nr=tt(Ve),Cr=Wt,_t=Ve==="value"?Cr:mp(Cr);if(ce.attrName=Nr,ce.attrValue=_t,ce.keepAttr=!0,ce.forceKeepAttr=void 0,or(F.uponSanitizeAttribute,y,ce),_t=ce.attrValue,te&&(Nr==="id"||Nr==="name")&&(Ut(Ve,y),_t=De+_t),S&&Vt(/((--!?|])>)|<\/(style|title|textarea)/i,_t)){Ut(Ve,y);continue}if(Nr==="attributename"&&is(_t,"href")){Ut(Ve,y);continue}if(ce.forceKeepAttr)continue;if(!ce.keepAttr){Ut(Ve,y);continue}if(!h&&Vt(/\/>/i,_t)){Ut(Ve,y);continue}c&&Ba([J,se,ne],hr=>{_t=Mo(_t,hr," ")});let nn=tt(y.nodeName);if(!Ar(nn,Nr,_t)){Ut(Ve,y);continue}if(P&&typeof p=="object"&&typeof p.getAttributeType=="function"&&!vt)switch(p.getAttributeType(nn,Nr)){case"TrustedHTML":{_t=P.createHTML(_t);break}case"TrustedScriptURL":{_t=P.createScriptURL(_t);break}}if(_t!==Cr)try{vt?y.setAttributeNS(vt,Ve,_t):y.setAttribute(Ve,_t),ur(y)?ut(y):ud(e.removed)}catch{Ut(Ve,y)}}or(F.afterSanitizeAttributes,y,null)},ar=function pe(y){let j=null,ce=xn(y);for(or(F.beforeSanitizeShadowDOM,y,null);j=ce.nextNode();)or(F.uponSanitizeShadowNode,j,null),yn(j),Rt(j),j.content instanceof a&&pe(j.content);or(F.afterSanitizeShadowDOM,y,null)};return e.sanitize=function(pe){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},j=null,ce=null,Je=null,xt=null;if(tr=!pe,tr&&(pe="<!-->"),typeof pe!="string"&&!vn(pe))if(typeof pe.toString=="function"){if(pe=pe.toString(),typeof pe!="string")throw Po("dirty is not a string, aborting")}else throw Po("toString is not a function");if(!e.isSupported)return pe;if(ee||Br(y),e.removed=[],typeof pe=="string"&&(qe=!1),qe){if(pe.nodeName){let Wt=tt(pe.nodeName);if(!$[Wt]||Ge[Wt])throw Po("root node is forbidden and cannot be sanitized in-place")}}else if(pe instanceof s)j=jn("<!---->"),ce=j.ownerDocument.importNode(pe,!0),ce.nodeType===Lo.element&&ce.nodeName==="BODY"||ce.nodeName==="HTML"?j=ce:j.appendChild(ce);else{if(!le&&!c&&!v&&pe.indexOf("<")===-1)return P&&Ne?P.createHTML(pe):pe;if(j=jn(pe),!j)return le?null:Ne?C:""}j&&ue&&ut(j.firstChild);let Ve=xn(qe?pe:j);for(;Je=Ve.nextNode();)yn(Je),Rt(Je),Je.content instanceof a&&ar(Je.content);if(qe)return pe;if(le){if(be)for(xt=L.call(j.ownerDocument);j.firstChild;)xt.appendChild(j.firstChild);else xt=j;return(me.shadowroot||me.shadowrootmode)&&(xt=N.call(n,xt,!0)),xt}let vt=v?j.outerHTML:j.innerHTML;return v&&$["!doctype"]&&j.ownerDocument&&j.ownerDocument.doctype&&j.ownerDocument.doctype.name&&Vt(yd,j.ownerDocument.doctype.name)&&(vt="<!DOCTYPE "+j.ownerDocument.doctype.name+`>
`+vt),c&&Ba([J,se,ne],Wt=>{vt=Mo(vt,Wt," ")}),P&&Ne?P.createHTML(vt):vt},e.setConfig=function(){let pe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Br(pe),ee=!0},e.clearConfig=function(){Ft=null,ee=!1},e.isValidAttribute=function(pe,y,j){Ft||Br({});let ce=tt(pe),Je=tt(y);return Ar(ce,Je,j)},e.addHook=function(pe,y){typeof y=="function"&&Ro(F[pe],y)},e.removeHook=function(pe,y){if(y!==void 0){let j=fp(F[pe],y);return j===-1?void 0:pp(F[pe],j,1)[0]}return ud(F[pe])},e.removeHooks=function(pe){F[pe]=[]},e.removeAllHooks=function(){F=bd()},e}var xd,dd,dp,up,hp,Kt,yr,us,hs,fs,Ba,fp,ud,Ro,pp,Ha,as,is,Mo,gp,mp,Fr,Vt,Po,hd,ss,ls,vp,cs,yp,fd,pd,ds,gd,$a,wp,kp,_p,Tp,Sp,vd,Ep,Ap,yd,Np,md,Lo,Cp,Ip,bd,Do,kd=lr(()=>{({entries:xd,setPrototypeOf:dd,isFrozen:dp,getPrototypeOf:up,getOwnPropertyDescriptor:hp}=Object),{freeze:Kt,seal:yr,create:us}=Object,{apply:hs,construct:fs}=typeof Reflect<"u"&&Reflect;Kt||(Kt=function(e){return e});yr||(yr=function(e){return e});hs||(hs=function(e,r){for(var n=arguments.length,o=new Array(n>2?n-2:0),a=2;a<n;a++)o[a-2]=arguments[a];return e.apply(r,o)});fs||(fs=function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return new e(...n)});Ba=Yt(Array.prototype.forEach),fp=Yt(Array.prototype.lastIndexOf),ud=Yt(Array.prototype.pop),Ro=Yt(Array.prototype.push),pp=Yt(Array.prototype.splice),Ha=Yt(String.prototype.toLowerCase),as=Yt(String.prototype.toString),is=Yt(String.prototype.match),Mo=Yt(String.prototype.replace),gp=Yt(String.prototype.indexOf),mp=Yt(String.prototype.trim),Fr=Yt(Object.prototype.hasOwnProperty),Vt=Yt(RegExp.prototype.test),Po=bp(TypeError);hd=Kt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),ss=Kt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ls=Kt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),vp=Kt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),cs=Kt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),yp=Kt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),fd=Kt(["#text"]),pd=Kt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),ds=Kt(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),gd=Kt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),$a=Kt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),wp=yr(/\{\{[\w\W]*|[\w\W]*\}\}/gm),kp=yr(/<%[\w\W]*|[\w\W]*%>/gm),_p=yr(/\$\{[\w\W]*/gm),Tp=yr(/^data-[\-\w.\u00B7-\uFFFF]+$/),Sp=yr(/^aria-[\-\w]+$/),vd=yr(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ep=yr(/^(?:\w+script|data):/i),Ap=yr(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),yd=yr(/^html$/i),Np=yr(/^[a-z][.\w]*(-[.\w]+)+$/i),md=Object.freeze({__proto__:null,ARIA_ATTR:Sp,ATTR_WHITESPACE:Ap,CUSTOM_ELEMENT:Np,DATA_ATTR:Tp,DOCTYPE_NAME:yd,ERB_EXPR:kp,IS_ALLOWED_URI:vd,IS_SCRIPT_OR_DATA:Ep,MUSTACHE_EXPR:wp,TMPLIT_EXPR:_p}),Lo={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Cp=function(){return typeof window>"u"?null:window},Ip=function(e,r){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null,o="data-tt-policy-suffix";r&&r.hasAttribute(o)&&(n=r.getAttribute(o));let a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML(i){return i},createScriptURL(i){return i}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},bd=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};Do=wd()});function Sd(){if(On)return On;if(typeof Do?.sanitize=="function"&&Do.isSupported)On=Do;else{let t=typeof window<"u"?window:globalThis.window;if(!t)throw new Error("\u65E0\u6CD5\u6E05\u7406 HTML\uFF1A\u5F53\u524D\u73AF\u5883\u7F3A\u5C11\u6D4F\u89C8\u5668 window\u3002");On=Do(t)}if(!On||typeof On.sanitize!="function")throw new Error("\u65E0\u6CD5\u6E05\u7406 HTML\uFF1A\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 DOMPurify\u3002");return On}function Ua(t){if(!t)return"";try{return Sd().sanitize(String(t),Td)}catch{return""}}function ps(t){if(!t)return"";try{return Sd().sanitize(String(t),Mp)}catch{return""}}function Ln(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function at(t){return String(t??"").replace(/\u00a0/g," ").replace(/[\t\f\v\u2000-\u200b\u2028\u2029]+/g," ").replace(/[ ]*\n[ ]*/g," ").replace(/ {2,}/g," ").trim()}function Fo(t="div"){return document.createElement(t)}function Yr(t){try{return new DOMParser().parseFromString(String(t??""),"text/html")}catch{return null}}function lo(t){try{let e=new DOMParser().parseFromString(String(t??""),"application/xml");return!e||!e.documentElement||e.documentElement.localName?.toLowerCase()==="parsererror"||Zt(e,"parsererror")?null:e}catch{return null}}function dr(t){return String(t?.localName||t?.nodeName||"").toLowerCase()}function At(t,e){let r=[];if(!t)return r;let n=String(e).toLowerCase(),o=a=>{for(let i=a.firstChild;i;i=i.nextSibling)i.nodeType===1&&(dr(i)===n&&r.push(i),o(i))};return o(t),r}function Zt(t,e){if(!t)return null;let r=String(e).toLowerCase(),n=null,o=a=>{for(let i=a.firstChild;i&&!n;i=i.nextSibling)if(i.nodeType===1){if(dr(i)===r){n=i;return}o(i)}};return o(t),n}function et(t,e){if(!t||!e)return null;let r=t.getAttribute?.(e);if(r!=null)return r;let n=String(e).toLowerCase(),o=t.attributes;if(!o)return null;for(let a=0;a<o.length;a+=1){let i=o[a];if(!i)continue;if(String(i.name||"").toLowerCase()===n||!n.includes(":")&&String(i.localName||"").toLowerCase()===n)return i.value}return null}var _d,Rp,Td,Mp,On,Dn=lr(()=>{kd();_d=Object.freeze(["b","strong","i","em","u","s","sub","sup","code","span","a","br","ruby","rt","rp","small","mark"]),Rp=Object.freeze(["table","caption","thead","tbody","tfoot","tr","th","td","colgroup","col"]),Td=Object.freeze({ALLOWED_TAGS:[..._d],ALLOWED_ATTR:["href"],ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!1,KEEP_CONTENT:!0,FORBID_TAGS:["script","style","iframe","frame","frameset","object","embed","applet","form","input","button","select","textarea","meta","link","base","svg","math","template","noscript"],FORBID_ATTR:["style","src","srcset","formaction","xlink:href","onerror","onload","onclick"]}),Mp=Object.freeze({...Td,ALLOWED_TAGS:[..._d,...Rp]}),On=null});function zn(t){return t.nextId()}function Dp(t){if(!t||t.nodeType!==1)return!1;if(t.hasAttribute?.("hidden")||et(t,"aria-hidden")==="true")return!0;let e=et(t,"style")||"";return/display\s*:\s*none|visibility\s*:\s*hidden/i.test(e)}function Fp(t,e){typeof t?.warn=="function"&&t.warn(e)}function ms(t){for(let e of Array.from(t?.children||[])){let r=dr(e);if(Ed.has(r)&&r!=="span"&&r!=="a"||ms(e))return!0}return!1}function Ad(t){let e=Array.from(t.querySelectorAll(Lp));for(let r=e.length-1;r>=0;r-=1){let n=e[r];if(!n.parentNode)continue;let o=t.ownerDocument.createDocumentFragment();for(;n.firstChild;)o.appendChild(n.firstChild);o.appendChild(t.ownerDocument.createElement("br")),n.parentNode.replaceChild(o,n)}return t}function Nd(t){for(let e of At(t,"img"))e.remove();for(let e of At(t,"image"))e.remove()}function Fn(t){let e=[],r=n=>{for(let o of Array.from(n?.children||[])){let a=dr(o);a==="img"||a==="image"?e.push(o):a==="svg"?e.push(...At(o,"image")):a!=="script"&&a!=="style"&&r(o)}};return r(t),e}function bs(t,e){if(!t||typeof e?.resolveLink!="function")return;let r=Array.from(t.getElementsByTagName?.("a")||[]);for(let n of r){let o=n.getAttribute("href");if(n.removeAttribute("href"),n.removeAttribute("data-chapter"),n.removeAttribute("data-anchor"),!o)continue;let a=null;try{a=e.resolveLink(o)}catch{a=null}if(a){if(a.external){a.href&&n.setAttribute("href",a.href);continue}Number.isInteger(a.chapter)&&a.chapter>=0&&(n.setAttribute("data-chapter",String(a.chapter)),a.anchor&&n.setAttribute("data-anchor",String(a.anchor).slice(0,300)))}}}function Cd(t,e){let r=Ua(t.innerHTML);if(!r)return null;let n=Fo("div");n.innerHTML=r,bs(n,e);let o=n.innerHTML.replace(/^(?:\s*<br\s*\/?>\s*)+/i,"").replace(/(?:\s*<br\s*\/?>\s*)+$/i,"");if(!o)return null;let a=at(n.textContent);return a?{html:o,text:a}:null}function Ga(t,e,r,n={}){let o=Ua(r);if(!o)return null;let a=Fo("div");a.innerHTML=o,bs(a,t);let i=a.innerHTML,s=at(a.textContent);return s?{id:zn(t),kind:e,html:i,text:s,...n}:null}function xs(t,e){let r=String(e??"").replace(/\r\n?/g,`
`).replace(/\u00a0/g," ").replace(/^\n+|\n+$/g,"");return r.trim()?{id:zn(t),kind:"code",html:Ln(r),text:r}:null}function vs(t,e,r={}){let n=ps(e);if(!n)return null;let o=Fo("div");if(o.innerHTML=n,!o.querySelector("table"))return null;bs(o,t);let i=o.innerHTML,s=at(o.textContent);return s?{id:zn(t),kind:"table",html:i,text:s,...r}:null}function ys(t,{src:e,alt:r="",caption:n=""}={}){if(!e)return null;let o={id:zn(t),kind:"image",src:e},a=at(r),i=at(n);return a&&(o.alt=a),i&&(o.caption=i),o}function ws(t){return{id:zn(t),kind:"rule"}}function Bn(t,e){let r=[];return t&&Wa(t,e,r),r}function Wa(t,e,r){let n=[],o=()=>{if(n.length===0)return;let a=Fo("div");for(let s of n)a.appendChild(s.cloneNode(!0));let i=at(a.textContent)!==""||Fn(a).length>0;n=[],i&&pn("paragraph",a,e,r)};for(let a of Array.from(t.childNodes||[])){if(a.nodeType===3){String(a.textContent||"").trim()&&n.push(a);continue}if(a.nodeType!==1||Dp(a))continue;let i=dr(a);Pp.has(i)||(Ed.has(i)?(o(),zp(a,i,e,r)):n.push(a))}o()}function zp(t,e,r,n){if(gs.has(e)){pn("heading",t,r,n,{level:Number(e.slice(1)),stripImages:!0,flatten:!1});return}switch(e){case"p":pn("paragraph",t,r,n);return;case"li":case"dt":pn("list-item",t,r,n,{flatten:!0});return;case"dd":pn("paragraph",t,r,n,{flatten:!0});return;case"blockquote":pn("quote",t,r,n,{flatten:!0});return;case"pre":$p(t,r,n);return;case"table":Hp(t,r,n);return;case"hr":n.push(ws(r));return;case"figure":{Bp(t,r,n);return}case"img":case"image":ja(t,r,n,"");return;case"picture":case"svg":{for(let o of Fn(t))ja(o,r,n,"");return}case"ul":case"ol":{for(let o of Array.from(t.children||[]))dr(o)==="li"?pn("list-item",o,r,n,{flatten:!0}):Wa(o,r,n);return}case"dl":{Wa(t,r,n);return}case"figcaption":return;default:Op.has(e)||ms(t)?Wa(t,r,n):pn("paragraph",t,r,n)}}function pn(t,e,r,n,o={}){let a=e.cloneNode(!0),i=Fn(a);if(i.length>0)for(let l of i)l.remove();o.stripImages&&Nd(a),o.flatten!==!1&&Ad(a);let s=Cd(a,r);if(s){let l={id:zn(r),kind:t,html:s.html,text:s.text};o.level&&(l.level=o.level),n.push(l)}if(!o.stripImages&&i.length>0){let l=Fn(e);for(let d of l)ja(d,r,n,"")}}function ja(t,e,r,n){let o=et(t,"src")||et(t,"xlink:href")||et(t,"href");if(!o)return;let a=null;try{a=typeof e?.resolveImage=="function"?e.resolveImage(o):null}catch{a=null}if(!a||!a.src)return;let i=et(t,"alt")||et(t,"title")||a.alt||"",s=ys(e,{src:a.src,alt:i,caption:n||a.caption||""});s&&r.push(s)}function Bp(t,e,r){let n=At(t,"figcaption")[0]||null,o=n?at(n.textContent):"",a=Fn(t);a.length>0&&a.forEach((l,d)=>{ja(l,e,r,d===0?o:"")});let i=t.cloneNode(!0);Nd(i);for(let l of At(i,"figcaption"))l.remove();ms(i)&&Ad(i);let s=Cd(i,e);s&&s.text!==o&&r.push({id:zn(e),kind:"paragraph",html:s.html,text:s.text})}function $p(t,e,r){let n=At(t,"code")[0]||t,o=String(n.textContent||"").replace(/\r\n?/g,`
`);if(!o.trim())return;let a=Ua(n.innerHTML),i=xs(e,o);i&&(a&&(i.html=a),r.push(i))}function Hp(t,e,r){let n=t.cloneNode(!0),o=ps(n.outerHTML);if(!o){Fp(e,"\u5DF2\u8DF3\u8FC7\u4E00\u4E2A\u65E0\u6CD5\u89E3\u6790\u7684\u8868\u683C\u3002");return}let a=vs(e,o);a&&r.push(a)}var gs,Pp,Op,Ed,Lp,zo=lr(()=>{Dn();gs=new Set(["h1","h2","h3","h4","h5","h6"]),Pp=new Set(["script","style","noscript","template","head","title","meta","link","base","iframe","frame","frameset","object","embed","applet","form","input","select","textarea","button","audio","video","source","track","canvas","map","area","math","nav"]),Op=new Set(["div","section","article","main","header","footer","aside","center","details","summary","fieldset","body","html","hgroup","dl"]),Ed=new Set([...gs,"p","div","section","article","main","header","footer","aside","center","details","summary","fieldset","body","html","hgroup","dl","dt","dd","blockquote","pre","table","ul","ol","li","figure","figcaption","hr","address","picture","svg","img","image"]),Lp=[...gs,"p","div","section","article","header","footer","aside","center","details","summary","fieldset","blockquote","ul","ol","li","dl","dt","dd","table","thead","tbody","tfoot","tr","td","th","caption","pre","figure","figcaption","address","hgroup"].join(",")});function qa(t){if(typeof t!="string"||!t)return"";let e=t.split(/[\\/]/).pop()||"",r=/\.([A-Za-z0-9]+)$/.exec(e);return r?r[1].toLowerCase():""}function wr(t){let e=String(t||"").replace(/\\/g,"/"),r=e.lastIndexOf("/");return r>=0?e.slice(r+1):e}function co(t){let e=String(t||"").replace(/\\/g,"/"),r=e.lastIndexOf("/");return r>0?e.slice(0,r):""}function ks(t){let e=[];for(let r of String(t||"").replace(/\\/g,"/").split("/"))if(!(!r||r===".")){if(r===".."){e.pop();continue}e.push(r)}return e.join("/")}function Bo(t){let e=String(t||""),r=e.indexOf("#"),n=r>=0?e.slice(0,r):e,o=r>=0?e.slice(r+1):"";try{o=decodeURIComponent(o)}catch{}let a=n.indexOf("?");return{path:a>=0?n.slice(0,a):n,fragment:o}}function gn(t,e){if(!e)return null;let r=String(e).trim();if(!r||r.startsWith("#")||/^[a-z][a-z0-9+.-]*:/i.test(r)||r.startsWith("//"))return null;let{path:n}=Bo(r);if(!n)return null;let o=n;try{o=decodeURIComponent(n)}catch{}o=o.replace(/\\/g,"/");let a=o.startsWith("/")?o.slice(1):t?`${t}/${o}`:o;return ks(a)||null}function Rd(t){let e=new Map,r=[];for(let[n,o]of Object.entries(t||{})){if(!o||/\/$/.test(n))continue;let a=ks(n);if(!a)continue;let i=a.toLowerCase();e.has(i)||(e.set(i,{name:a,bytes:o}),r.push(a))}return{names:r,get(n){let o=ks(n||"");return o&&e.get(o.toLowerCase())||null},has(n){return!!this.get(n)}}}function $o(t){return Up[qa(t)]||"application/octet-stream"}async function Zr(t){if(!t||typeof t.arrayBuffer!="function")throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u6570\u636E\uFF1A\u8BF7\u9009\u62E9\u4E00\u4E2A\u6709\u6548\u7684\u6587\u6863\u6587\u4EF6\u3002");let e;try{e=await t.arrayBuffer()}catch{throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u6570\u636E\uFF0C\u6587\u4EF6\u53EF\u80FD\u5DF2\u88AB\u79FB\u52A8\u6216\u635F\u574F\u3002")}let r=new Uint8Array(e);if(r.length===0)throw new Error("\u6587\u4EF6\u5185\u5BB9\u4E3A\u7A7A\u3002");return r}function Qr(t=40){let e=[],r=new Set,n=!1;return{warnings:e,warn:a=>{let i=String(a||"").trim();!i||r.has(i)||(r.add(i),e.length<t?e.push(i):n||(n=!0,e.push("\u8FD8\u6709\u66F4\u591A\u89E3\u6790\u8B66\u544A\u672A\u663E\u793A\u3002")))}}}function kr(t,e){if(t instanceof Error&&/[\u4e00-\u9fff]/.test(t.message))return t;let r=t instanceof Error?t.message:String(t??""),n=r?`${e}\uFF1A${r}`:`${e}\u3002`;return new Error(/[。！？]$/.test(n)?n:`${n}\u3002`)}function Ho(t,e){let r=(Array.isArray(e)?e:[]).filter(a=>a&&Number.isInteger(a.chapterIndex)&&a.chapterIndex>=0&&a.chapterIndex<t.length&&a.title);for(let a=0;a<t.length;a+=1){let i=r.find(l=>l.chapterIndex===a),s=t[a].blocks.find(l=>l.kind==="heading"&&l.text);t[a].title=(i?.title||s?.text||`\u7B2C ${a+1} \u7AE0`).slice(0,120)}if(r.length===0)return t.map((a,i)=>({title:a.title,chapterIndex:i,depth:0}));let n=[],o=new Set;for(let a=0;a<t.length;a+=1){let i=r.filter(s=>s.chapterIndex===a);if(i.length===0){let s={title:t[a].title,chapterIndex:a,depth:0},l=`${a}|${s.title}|0`;o.has(l)||(o.add(l),n.push(s));continue}for(let s of i){let l=Number.isInteger(s.depth)&&s.depth>=0?s.depth:0,d=s.anchor?String(s.anchor).slice(0,300):"",u=`${s.chapterIndex}|${s.title}|${l}|${d}`;o.has(u)||(o.add(u),n.push({title:s.title,chapterIndex:s.chapterIndex,depth:l,...d?{anchor:d}:{}}))}}return n}function Hn(t,e="\u672A\u547D\u540D\u6587\u6863"){return wr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||e}function mn(){let t=[];return{urls:t,create(e){let r=URL.createObjectURL(e);return t.push(r),r},add(e){return e&&!t.includes(e)&&t.push(e),e},dispose(){for(;t.length>0;){let e=t.pop();try{URL.revokeObjectURL(e)}catch{}}}}}function bn(t){let e=/^data:([^;,]*)((?:;[^;,]*)*),(.*)$/is.exec(String(t||""));if(!e)return null;let r=e[1]||"application/octet-stream",n=e[2]||"",o=e[3]||"",a=/;base64/i.test(n);try{let i;if(a){let l=o.replace(/\s+/g,"");i=atob(l)}else i=decodeURIComponent(o);let s=new Uint8Array(i.length);for(let l=0;l<i.length;l+=1)s[l]=i.charCodeAt(l)&255;return new Blob([s],{type:r})}catch{return null}}function Id(t){let e=String(t||"").trim().toLowerCase();return!e||/^(utf-?8|utf8)$/.test(e)?"utf-8":/^utf-?16(le)?$/.test(e)?"utf-16le":/^utf-?16be$/.test(e)?"utf-16be":/^(gb2312|gbk|gb18030|cp936|x-gbk)$/.test(e)?"gb18030":/^(big5|big5-hkscs|cp950)$/.test(e)?"big5":/^(shift_jis|sjis|windows-31j|cp932)$/.test(e)?"shift_jis":/^(euc-kr|ks_c_5601-1987|cp949)$/.test(e)?"euc-kr":/^(iso-8859-1|latin1|windows-1252|cp1252)$/.test(e)?"windows-1252":e}function $n(t,e,r=!1){return new TextDecoder(e,{fatal:r}).decode(t)}function jp(t){let e=$n(t.subarray(0,Math.min(t.length,512)),"windows-1252"),r=Wp.exec(e);return r&&(r[1]||r[2])||""}function Jr(t,{defaultEncoding:e="utf-8",sniffDeclaration:r=!0}={}){let n=t instanceof Uint8Array?t:new Uint8Array(t);if(n.length===0)return"";if(n[0]===239&&n[1]===187&&n[2]===191)return $n(n.subarray(3),"utf-8");if(n[0]===255&&n[1]===254)return $n(n.subarray(2),"utf-16le");if(n[0]===254&&n[1]===255)return $n(n.subarray(2),"utf-16be");let o=e||"utf-8";if(r){let a=jp(n);a&&(o=Id(a))}o=Id(o);try{return $n(n,o,!0)}catch{try{return $n(n,"utf-8",!0)}catch{return $n(n,"utf-8",!1)}}}function Xa(t){if(!t)return!1;let e=t.slice(0,4096);if(!e)return!1;let r=0;for(let n=0;n<e.length;n+=1){let o=e.charCodeAt(n);(o===65533||o===0||o<9||o>13&&o<32)&&(r+=1)}return r/e.length>.08}var Up,Wp,Un=lr(()=>{Up={jpg:"image/jpeg",jpeg:"image/jpeg",jpe:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",avif:"image/avif",bmp:"image/bmp",tif:"image/tiff",tiff:"image/tiff",svg:"image/svg+xml",ico:"image/x-icon",jxl:"image/jxl"};Wp=/(?:encoding\s*=\s*["']([A-Za-z0-9._-]+)["'])|(?:charset\s*=\s*["']?([A-Za-z0-9._-]+))/i});function Md(t){return/^(https?:|mailto:|tel:)/i.test(t)}function _s(t){return/^[a-z][a-z0-9+.-]*:/i.test(t)}function qp(t,e){e&&!t.includes(e)&&t.push(e)}async function Pd(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Qr(),a=mn();try{let de=function(c,S){let v=String(c||"").trim();if(!v||Md(v)||v.startsWith("//")||_s(v))return null;let{path:ee,fragment:ue}=Bo(v),le=ee?gn(S,v):null,be=le?se.get(le.toLowerCase()):void 0;return be==null&&le&&(be=ne.get(wr(le).toLowerCase())),be==null?null:{chapterIndex:be,anchor:ue}},i=await Zr(t),s;try{s=cd(i)}catch{throw new Error("EPUB \u538B\u7F29\u5305\u5DF2\u635F\u574F\uFF0C\u65E0\u6CD5\u89E3\u538B\u3002")}let l=Rd(s);if(l.names.length===0)throw new Error("EPUB \u538B\u7F29\u5305\u4E0D\u5305\u542B\u4EFB\u4F55\u6587\u4EF6\u3002");let d=l.get("META-INF/encryption.xml");if(d){let c=Jr(d.bytes);if(/<encrypteddata/i.test(c)&&/application\/(xhtml\+xml|epub\+zip)/i.test(c))throw new Error("\u8BE5 EPUB \u6587\u4EF6\u53D7 DRM \u4FDD\u62A4\uFF0C\u65E0\u6CD5\u6253\u5F00\u3002")}let u=l.get("META-INF/container.xml");if(!u){let c=l.names.find(S=>/container\.xml$/i.test(S));c&&(u=l.get(c))}if(!u)throw new Error("\u7F3A\u5C11 META-INF/container.xml\uFF0C\u4E0D\u662F\u6709\u6548\u7684 EPUB \u6587\u4EF6\u3002");let g=lo(Jr(u.bytes));if(!g)throw new Error("META-INF/container.xml \u683C\u5F0F\u9519\u8BEF\u3002");let f=At(g,"rootfile")[0],p=f?et(f,"full-path"):"";if(!p)throw new Error("container.xml \u4E2D\u6CA1\u6709\u6307\u5B9A OPF \u5185\u5BB9\u6E05\u5355\u3002");let _=l.get(p)||l.get(gn("",p));if(!_)throw new Error(`\u627E\u4E0D\u5230 EPUB \u5185\u5BB9\u6E05\u5355\u6587\u4EF6\uFF1A${p}`);let k=co(_.name),x=lo(Jr(_.bytes));if(!x)throw new Error("EPUB \u5185\u5BB9\u6E05\u5355\uFF08OPF\uFF09\u683C\u5F0F\u9519\u8BEF\u3002");let R=Zt(x,"metadata")||x,A=At(R,"title").map(c=>at(c.textContent)).filter(Boolean),P=[];for(let c of At(R,"creator"))qp(P,at(c.textContent));let C=At(R,"language").map(c=>at(c.textContent)).filter(Boolean),D=At(R,"meta").filter(c=>String(et(c,"name")||"").toLowerCase()==="cover").map(c=>et(c,"content")||"").find(Boolean)||"",L=Zt(x,"manifest");if(!L)throw new Error("OPF \u5185\u5BB9\u6E05\u5355\u7F3A\u5C11 manifest \u5217\u8868\u3002");let m=new Map;for(let c of At(L,"item")){let S=et(c,"id");if(!S||m.has(S))continue;let v=et(c,"href")||"",ee=gn(k,v);m.set(S,{id:S,href:v,path:ee,mediaType:String(et(c,"media-type")||"").toLowerCase(),properties:String(et(c,"properties")||"").toLowerCase()})}let N=Zt(x,"spine");if(!N)throw new Error("OPF \u5185\u5BB9\u6E05\u5355\u7F3A\u5C11 spine \u9605\u8BFB\u987A\u5E8F\u3002");let F=At(N,"itemref");if(F.length===0)throw new Error("EPUB \u7684\u9605\u8BFB\u987A\u5E8F\uFF08spine\uFF09\u4E3A\u7A7A\u3002");let J=[],se=new Map,ne=new Map;for(let c of F){let S=et(c,"idref"),v=S?m.get(S):null;if(!v){o(`\u9605\u8BFB\u987A\u5E8F\u4E2D\u7684\u6761\u76EE\u201C${S||"\u672A\u77E5"}\u201D\u4E0D\u5728\u6E05\u5355\u4E2D\uFF0C\u5DF2\u8DF3\u8FC7\u3002`);continue}if(/\bnav\b/.test(v.properties))continue;if(!v.path){o(`\u7AE0\u8282\u6587\u4EF6\u201C${v.href||v.id}\u201D\u4F4D\u4E8E\u5916\u90E8\u7F51\u7EDC\uFF0C\u5DF2\u8DF3\u8FC7\u3002`);continue}let ee=l.get(v.path);if(!ee){o(`\u627E\u4E0D\u5230\u7AE0\u8282\u6587\u4EF6\uFF1A${v.path}`);continue}let ue=v.mediaType||"",le=Gp.has(ue)||/\.(x?html?|htm)$/i.test(v.path),be=ue.startsWith("image/")||/\.(png|jpe?g|gif|webp|avif|bmp|tiff?|svg)$/i.test(v.path);if(!le&&!be){o(`\u4E0D\u652F\u6301\u7684\u7AE0\u8282\u7C7B\u578B\uFF08${ue||"\u672A\u77E5"}\uFF09\uFF1A${v.path}`);continue}let Ne=J.length;J.push({item:v,entry:ee,isImage:be,chapterIndex:Ne}),se.set(v.path.toLowerCase(),Ne);let Pe=wr(v.path).toLowerCase();ne.has(Pe)||ne.set(Pe,Ne)}if(J.length===0)throw new Error("EPUB \u4E2D\u6CA1\u6709\u627E\u5230\u53EF\u663E\u793A\u7684\u7AE0\u8282\u5185\u5BB9\u3002");let oe=0,z=()=>`b${oe+=1}`,O=[];for(let c of J){let{item:S,entry:v,isImage:ee,chapterIndex:ue}=c;if(ee){let Oe=S.mediaType.startsWith("image/")?S.mediaType:$o(S.path),fe=a.create(new Blob([v.bytes],{type:Oe}));O.push({id:`ch${ue}`,title:"",blocks:[{id:z(),kind:"image",src:fe}]});continue}let le=co(S.path),be=Oe=>{let fe=String(Oe||"").trim();if(!fe)return null;if(/^data:/i.test(fe)){let pt=bn(fe);return pt?{src:a.create(pt)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684\u5185\u5D4C\u56FE\u7247\u3002"),null)}if(/^(https?:)?\/\//i.test(fe))return o("\u5DF2\u8DF3\u8FC7\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\uFF08\u907F\u514D\u8DDF\u8E2A\u4E0E\u9690\u79C1\u6CC4\u9732\uFF09\u3002"),null;if(_s(fe))return null;let Qe=gn(le,fe),lt=Qe?l.get(Qe):null;if(!lt)return o(`\u627E\u4E0D\u5230\u56FE\u7247\u6587\u4EF6\uFF1A${wr(Qe||fe)}`),null;let ct=$o(Qe);return{src:a.create(new Blob([lt.bytes],{type:ct}))}},Ne=Oe=>{let fe=String(Oe||"").trim();if(!fe)return null;if(Md(fe))return{external:!0,href:fe};if(fe.startsWith("//")||_s(fe))return null;let{path:Qe,fragment:lt}=Bo(fe);if(!Qe)return{chapter:ue,anchor:lt};let ct=gn(le,fe),pt=ct?se.get(ct.toLowerCase()):void 0;return pt==null&&ct&&(pt=ne.get(wr(ct).toLowerCase())),pt==null?null:{chapter:pt,anchor:lt}},Pe="";try{Pe=Jr(v.bytes)}catch{o(`\u7B2C ${ue+1} \u7AE0\u7684\u7F16\u7801\u65E0\u6CD5\u8BC6\u522B\uFF0C\u5DF2\u5C3D\u91CF\u6309 UTF-8 \u8BFB\u53D6\u3002`)}let te=lo(Pe),De=te&&(Zt(te,"body")||te.documentElement)||null,Ze=De?null:Yr(Pe),qe=De||Ze?.body||Ze?.documentElement||null,Xe=qe?Bn(qe,{nextId:z,warn:o,chapterIndex:ue,resolveImage:be,resolveLink:Ne}):[];Xe.length===0&&o(`\u7B2C ${ue+1} \u7AE0\u6CA1\u6709\u53EF\u663E\u793A\u7684\u5185\u5BB9\u3002`),O.push({id:`ch${ue}`,title:"",blocks:Xe})}let X=[...m.values()].find(c=>/\bnav\b/.test(c.properties)&&c.path),re=et(N,"toc"),$=re&&m.get(re)||[...m.values()].find(c=>c.mediaType==="application/x-dtbncx+xml"&&c.path)||null,xe=c=>{let S=l.get(c.path);if(!S)return o(`\u627E\u4E0D\u5230 EPUB \u5BFC\u822A\u6587\u4EF6\uFF1A${c.path}`),[];let v=Jr(S.bytes),ee=lo(v)||Yr(v);if(!ee)return o("\u65E0\u6CD5\u89E3\u6790 EPUB \u5BFC\u822A\u76EE\u5F55\u3002"),[];let ue=At(ee,"nav"),le=ue.find(Ze=>String(et(Ze,"type")||et(Ze,"epub:type")||"").toLowerCase().split(/\s+/).includes("toc"))||ue[0]||null;if(!le)return[];let be=Zt(le,"ol")||Zt(le,"ul");if(!be)return[];let Ne=[],Pe=co(c.path),te=se.get(c.path.toLowerCase()),De=(Ze,qe)=>{for(let Xe of Array.from(Ze.children||[])){if(dr(Xe)!=="li")continue;let Oe=null,fe=null;for(let Qe of Array.from(Xe.children||[])){let lt=dr(Qe);!Oe&&(lt==="a"||lt==="span")&&(Oe=Qe),!fe&&(lt==="ol"||lt==="ul")&&(fe=Qe)}if(Oe&&dr(Oe)==="a"){let Qe=at(Oe.textContent).slice(0,200),lt=et(Oe,"href")||"",ct=de(lt,Pe);if(!ct&&lt.startsWith("#")&&te!=null){let{fragment:pt}=Bo(lt);ct={chapterIndex:te,anchor:pt}}Qe&&ct&&Ne.push({title:Qe,chapterIndex:ct.chapterIndex,depth:qe,...ct.anchor?{anchor:ct.anchor}:{}})}fe&&De(fe,qe+1)}};return De(be,0),Ne},me=c=>{let S=l.get(c.path);if(!S)return o(`\u627E\u4E0D\u5230 EPUB NCX \u76EE\u5F55\u6587\u4EF6\uFF1A${c.path}`),[];let v=Jr(S.bytes),ee=lo(v)||Yr(v);if(!ee)return o("\u65E0\u6CD5\u89E3\u6790 EPUB NCX \u76EE\u5F55\u3002"),[];let ue=[],le=co(c.path);for(let be of At(ee,"navpoint")){let Ne=Zt(be,"navlabel"),Pe=Ne?Zt(Ne,"text"):Zt(be,"text"),te=at(Pe?.textContent||"").slice(0,200),De=Array.from(be.children||[]).find(Xe=>dr(Xe)==="content")||Zt(be,"content"),Ze=de(et(De,"src")||"",le);if(!te||!Ze)continue;let qe=0;for(let Xe=be.parentNode;Xe;Xe=Xe.parentNode)dr(Xe)==="navpoint"&&(qe+=1);ue.push({title:te,chapterIndex:Ze.chapterIndex,depth:qe,...Ze.anchor?{anchor:Ze.anchor}:{}})}return ue},Te=[];X&&(Te=xe(X),Te.length===0&&o("EPUB \u5BFC\u822A\u6587\u4EF6\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u5F55\u9879\u3002"));let q=[];Te.length===0&&$&&(q=me($));let Ge=Te.length>0?Te:q;Ge.length===0&&o("\u672A\u627E\u5230 EPUB \u76EE\u5F55\uFF0C\u5DF2\u6309\u7AE0\u8282\u6807\u9898\u751F\u6210\u3002");let Re=Ho(O,Ge),Me="",$e=[...m.values()].find(c=>/\bcover-image\b/.test(c.properties)&&c.path);if($e)Me=$e.path;else if(D&&m.get(D)?.path)Me=m.get(D).path;else{let c=Zt(x,"guide");if(c){let S=At(c,"reference").find(v=>/\bcover\b/.test(String(et(v,"type")||"").toLowerCase()));S&&(Me=gn(k,et(S,"href")||"")||"")}}let He="";if(Me){let c=l.get(Me);if(c){let S=$o(Me);if(S.startsWith("image/"))He=a.create(new Blob([c.bytes],{type:S}));else if(/\.(x?html?|htm)$/i.test(Me)){let v=Yr(Jr(c.bytes)),ee=Fn(v?.body||v?.documentElement||v)[0],ue=ee&&(et(ee,"src")||et(ee,"xlink:href"))||"",le=ue?gn(co(Me),ue):null,be=le?l.get(le):null;be&&(He=a.create(new Blob([be.bytes],{type:$o(le)})))}}}let h={title:A[0]||Hn(r),chapters:O,toc:Re,warnings:n,dispose:()=>a.dispose()};return P.length>0&&(h.author=P.join(", ")),C.length>0&&(h.language=C[0]),He&&(h.cover=He),h}catch(i){throw a.dispose(),kr(i,"\u65E0\u6CD5\u89E3\u6790 EPUB \u6587\u4EF6")}}var Gp,Od=lr(()=>{os();Dn();zo();Un();Gp=new Set(["application/xhtml+xml","text/html","application/xml","text/xml","text/xhtml"])});function Xp(t){return wr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u6863"}async function Uo(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Qr(),a=mn();try{let i=await Zr(t),s=Jr(i),l=Yr(s);if(!l)throw new Error("HTML \u6587\u4EF6\u683C\u5F0F\u9519\u8BEF\uFF0C\u65E0\u6CD5\u89E3\u6790\u3002");let d=l.body||l.documentElement;if(!d)throw new Error("HTML \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let u=0,f=Bn(d,{nextId:()=>`b${u+=1}`,warn:o,resolveImage:A=>{let P=String(A||"").trim();if(!P)return null;if(/^data:/i.test(P)){let C=bn(P);return C?{src:a.create(C)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684\u5185\u5D4C\u56FE\u7247\u3002"),null)}return/^(https?:)?\/\//i.test(P)?(o("\u5DF2\u8DF3\u8FC7\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\uFF08\u907F\u514D\u8DDF\u8E2A\u4E0E\u9690\u79C1\u6CC4\u9732\uFF09\u3002"),null):(o("\u5DF2\u8DF3\u8FC7 HTML \u4E2D\u7684\u672C\u5730\u56FE\u7247\uFF08\u65E0\u6CD5\u5B9A\u4F4D\u56FE\u7247\u6587\u4EF6\uFF09\u3002"),null)},resolveLink:A=>{let P=String(A||"").trim();return P?/^(https?:\/\/|mailto:)/i.test(P)?{external:!0,href:P}:P.startsWith("#")?{chapter:0,anchor:P.slice(1)}:null:null}});if(f.length===0)throw new Error("HTML \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let p=Zt(l,"title"),_=f.find(A=>A.kind==="heading"&&A.text),k=at(p?.textContent||"")||_?.text||Xp(r),x=et(l.documentElement,"lang")||"",T=[];for(let A of At(l,"meta"))if(String(et(A,"name")||"").toLowerCase()==="author"){let P=at(et(A,"content")||"");P&&!T.includes(P)&&T.push(P)}let R={title:k,chapters:[{id:"ch0",title:k,blocks:f}],toc:[{title:k,chapterIndex:0,depth:0}],warnings:n,dispose:()=>a.dispose()};return x&&(R.language=x),T.length>0&&(R.author=T.join(", ")),R}catch(i){throw a.dispose(),kr(i,"\u65E0\u6CD5\u89E3\u6790 HTML \u6587\u4EF6")}}var Ld=lr(()=>{Dn();zo();Un()});function Dd(t){return/[\u3000-\u303f\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uffef\uac00-\ud7af]/.test(t)}function Fd(t){let e="";for(let r of t){let n=String(r).trim();if(!n)continue;if(!e){e=n;continue}let o=e[e.length-1],a=n[0];e+=Dd(o)&&Dd(a)?n:` ${n}`}return e}function Jp(t){let e=String(t||"").trim();if(!e||e.length>Qp)return!1;if(Kp.test(e)||Yp.test(e))return!/[，,。；;]/.test(e);if(Zp.test(e)){let r=e.split(/\s+/).filter(Boolean).length;return!(r>14||/\.$/u.test(e)&&r>3)}return!1}function Ts(t){if(!t||t.length===0)throw new Error("\u6587\u672C\u6587\u4EF6\u5185\u5BB9\u4E3A\u7A7A\u3002");if(t[0]===239&&t[1]===187&&t[2]===191)return{text:new TextDecoder("utf-8").decode(t.subarray(3)),encoding:"utf-8"};if(t[0]===255&&t[1]===254)return{text:new TextDecoder("utf-16le").decode(t.subarray(2)),encoding:"utf-16le"};if(t[0]===254&&t[1]===255)return{text:new TextDecoder("utf-16be").decode(t.subarray(2)),encoding:"utf-16be"};let e=Math.min(t.length,4096),r=0,n=0;for(let a=0;a<e;a+=2)t[a]===0&&(r+=1),a+1<e&&t[a+1]===0&&(n+=1);let o=Math.ceil(e/2);if(o>4&&n/o>.35&&r/o<.05)return{text:new TextDecoder("utf-16le").decode(t),encoding:"utf-16le"};if(o>4&&r/o>.35&&n/o<.05)return{text:new TextDecoder("utf-16be").decode(t),encoding:"utf-16be"};try{return{text:new TextDecoder("utf-8",{fatal:!0}).decode(t),encoding:"utf-8"}}catch{}try{return{text:new TextDecoder("gb18030",{fatal:!0}).decode(t),encoding:"gb18030"}}catch{}return{text:new TextDecoder("utf-8").decode(t),encoding:"utf-8"}}function eg(t){let e=[],r=[],n=()=>{r.length>0&&(e.push(r),r=[])};for(let o of t)String(o).trim()?r.push(o):n();return n(),e}function tg(t){let e=t.map(n=>n.trim()).filter(Boolean);return e.length<2?!1:e.filter(n=>/[。！？!?…"”’」』）)]$/.test(n)).length/e.length>=.5}function rg(t){let e=t.map(o=>String(o)),r=eg(e);if(r.length>1)return r.map(o=>Fd(o)).filter(Boolean);let n=e.map(o=>o.trim()).filter(Boolean);return n.length<=1||tg(n)?n:r.map(o=>Fd(o)).filter(Boolean)}function ng(t,{fallbackTitle:e="\u6B63\u6587"}={}){let n=String(t||"").replace(/\r\n?/g,`
`).replace(/\u0000/g,"").split(`
`),o=[],a={title:"",lines:[],heading:""},i=()=>{(a.heading||a.lines.some(s=>s.trim()))&&o.push(a),a={title:"",lines:[],heading:""}};for(let s of n){if(Jp(s)){i();let l=s.trim();a={title:l,lines:[],heading:l};continue}a.lines.push(s)}return i(),o.length===0?[{title:e,lines:n,heading:""}]:o}function Ss(t,{nextId:e,title:r="\u6B63\u6587"}={}){let n=ng(t,{fallbackTitle:r}),o=i=>i.lines.some(s=>String(s).trim()),a=[];for(let i=0;i<n.length;i+=1){if(o(n[i])){a.push(n[i]);continue}let s=i;for(;s+1<n.length&&!o(n[s+1]);)s+=1;if(s-i+1>=3){i=s;continue}a.push(...n.slice(i,s+1)),i=s}return n=a.length>0?a:n,n.map((i,s)=>{let l=[];i.heading&&l.push({id:e(),kind:"heading",level:1,html:Ln(i.heading),text:at(i.heading)});for(let d of rg(i.lines))l.push({id:e(),kind:"paragraph",html:Ln(d),text:d});return{id:`ch${s}`,title:i.title||r||`\u7B2C ${s+1} \u7AE0`,blocks:l}})}function og(t){return wr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u672C"}async function Es(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Qr();try{let a=await Zr(t),{text:i,encoding:s}=Ts(a);if(Xa(i))throw new Error("\u6587\u672C\u6587\u4EF6\u5305\u542B\u5927\u91CF\u65E0\u6CD5\u8BC6\u522B\u7684\u5B57\u7B26\uFF0C\u53EF\u80FD\u4E0D\u662F\u7EAF\u6587\u672C\u6587\u4EF6\u3002");s==="gb18030"&&o("\u5DF2\u6309 GB18030 \u7F16\u7801\u8BFB\u53D6\u6587\u672C\uFF08\u975E UTF-8\uFF09\u3002");let l=og(r),d=0,g=Ss(i,{nextId:()=>`b${d+=1}`,title:l});if(g.length===0||g.every(p=>p.blocks.length===0))throw new Error("\u6587\u672C\u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");g[0].title||(g[0].title=l);let f=g.map((p,_)=>({title:p.title,chapterIndex:_,depth:0}));return{title:l,chapters:g,toc:f,warnings:n,encoding:s,dispose:()=>{}}}catch(a){throw kr(a,"\u65E0\u6CD5\u89E3\u6790\u6587\u672C\u6587\u4EF6")}}var Vp,Kp,Yp,Zp,Qp,Va=lr(()=>{Dn();Un();Vp="[0-9\uFF10-\uFF19\u96F6\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u767E\u5343\u4E07\u4E24]",Kp=new RegExp(`^\\s*(\u7B2C\\s*${Vp}+\\s*[\u7AE0\u7BC0\u8282\u56DE\u5377\u7BC7])(?:[\\s:\uFF1A\xB7\u3001.\uFF0E\u2014\u2013-].*)?$`),Yp=/^\s*(序章|楔子|引子|前言|序言|后记|後記|尾声|尾聲|终章|終章|番外(?:篇)?)(?:[\s:：·、.．—–-].*)?$/,Zp=/^\s*((?:chapter|part|book|section)\s+(?:[0-9]+|[ivxlcdm]{1,8}|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty))(?:[.:：\s—–-].*)?$/i,Qp=72});function sg(t){let e=String(t||"").trim();return e&&(/^(https?:\/\/|mailto:)/i.test(e)||e.startsWith("#"))?e:""}function As(t){let e=Ln(String(t??"").trim()),r=[],n=o=>{let a=`\0${r.length}\0`;return r.push(o),a};return e=e.replace(/`([^`]+)`/g,(o,a)=>n(`<code>${a}</code>`)),e=e.replace(ag,(o,a,i)=>{let s=sg(i);return s?n(`<a href="${s}">${a}</a>`):a}),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/__([^_]+)__/g,"<strong>$1</strong>").replace(/~~([^~]+)~~/g,"<s>$1</s>").replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g,"$1<em>$2</em>").replace(/(^|[^_])_([^_\n]+)_(?!_)/g,"$1<em>$2</em>"),e=e.replace(/\u0000(\d+)\u0000/g,(o,a)=>r[Number(a)]??""),e}function lg(t){return wr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u6863"}function Wo(t){return String(t).trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(e=>e.trim())}function cg(t){if(!/\|/.test(t))return!1;let e=Wo(t);return e.length>0&&e.every(r=>/^:?-{3,}:?$/.test(r))}function Bd(t,e){return!!e&&t.includes("|")&&cg(e)&&Wo(t).length===Wo(e).length}function zd(t,e){return!!(/^\s{0,3}(#{1,6}\s|>|(?:```|~~~))/.test(t)||/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(t)||/^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/.test(t)||Bd(t,e))}function dg(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Qr(),a=mn(),i=0,s={nextId:()=>`b${i+=1}`,warn:o,resolveLink:x=>{let T=String(x||"").trim();return T?/^(https?:\/\/|mailto:)/i.test(T)?{external:!0,href:T}:T.startsWith("#")?{chapter:0,anchor:T.slice(1)}:null:null}},l=[],d=[];function u(x){let T=String(x??""),R=[];return T=T.replace(ig,(A,P,C)=>{let E=at(P);if(/^data:image\//i.test(C)){let D=bn(C);if(D){let L=ys(s,{src:a.create(D),alt:E});L&&R.push(L)}else o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684 Markdown \u5185\u5D4C\u56FE\u7247\u3002")}else/^https?:/i.test(C)?o("\u5DF2\u8DF3\u8FC7 Markdown \u4E2D\u7684\u5916\u90E8\u56FE\u7247\uFF08\u907F\u514D\u7F51\u7EDC\u8DDF\u8E2A\uFF09\u3002"):o("\u5DF2\u8DF3\u8FC7 Markdown \u4E2D\u7684\u672C\u5730\u56FE\u7247\uFF08\u65E0\u6CD5\u5B9A\u4F4D\u56FE\u7247\u6587\u4EF6\uFF09\u3002");return E?` ${E} `:" "}),{html:As(T),images:R}}function g(x,T,R={}){let{html:A,images:P}=u(T),C=Ga(s,x,A,R);C&&l.push(C);for(let E of P)l.push(E);return!!C}let f=String(t??"").replace(/\r\n?/g,`
`).replace(/\u0000/g,"").split(`
`),p=0;for(;p<f.length;){let x=f[p];if(!x.trim()){p+=1;continue}let T=/^\s*(`{3,}|~{3,})\s*([A-Za-z0-9_+#.-]*)\s*$/.exec(x);if(T){let E=T[1],D=[];p+=1;let L=new RegExp(`^\\s*${E[0]==="`"?"`":"~"}{${E.length},}\\s*$`);for(;p<f.length;){if(L.test(f[p])){p+=1;break}D.push(f[p]),p+=1}let m=xs(s,D.join(`
`));m&&l.push(m);continue}let R=/^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(x);if(R){g("heading",R[2],{level:R[1].length}),p+=1;continue}if(/^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/.test(x)){l.push(ws(s)),p+=1;continue}if(Bd(x,f[p+1])){let E=Wo(x);p+=2;let D=[];for(;p<f.length&&f[p].includes("|")&&f[p].trim();)D.push(Wo(f[p])),p+=1;let L=`<thead><tr>${E.map(F=>`<th>${As(F)}</th>`).join("")}</tr></thead>`,m=D.length>0?`<tbody>${D.map(F=>`<tr>${E.map((J,se)=>`<td>${As(F[se]||"")}</td>`).join("")}</tr>`).join("")}</tbody>`:"",N=vs(s,`<table>${L}${m}</table>`);N&&l.push(N);continue}if(/^\s{0,3}>/.test(x)){let E=[];for(;p<f.length&&/^\s{0,3}>/.test(f[p]);)E.push(f[p].replace(/^\s{0,3}>\s?/,"")),p+=1;let D=[],L=[];for(let N of E){let F=u(N);F.html&&D.push(F.html),L.push(...F.images)}let m=Ga(s,"quote",D.join("<br>"));m&&l.push(m);for(let N of L)l.push(N);continue}if(/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(x)){for(;p<f.length;){let E=/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+(.*)$/.exec(f[p]);if(!E)break;for(g("list-item",E[1]),p+=1;p<f.length&&/^\s{2,}\S/.test(f[p])&&!/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(f[p])&&!zd(f[p],f[p+1]);)p+=1}continue}let A=[];for(;p<f.length&&f[p].trim()&&!zd(f[p],f[p+1]);)A.push(f[p]),p+=1;if(A.length===0){p+=1;continue}let P=[];for(let E of A){let D=/(?: {2,}|\\)$/.test(E),L=u(E.replace(/(?: {2,}|\\)$/,""));L.html&&P.push(D?`${L.html}<br>`:L.html),d.push(...L.images)}let C=Ga(s,"paragraph",P.join(" "));for(C&&l.push(C);d.length>0;)l.push(d.shift())}let k=l.find(x=>x.kind==="heading"&&x.text)?.text||lg(r);if(l.length===0)throw a.dispose(),new Error("Markdown \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");return{title:k,chapters:[{id:"ch0",title:k,blocks:l}],toc:[{title:k,chapterIndex:0,depth:0}],warnings:n,dispose:()=>a.dispose()}}async function jo(t,e={}){try{let r=await Zr(t),{text:n}=Ts(r);return dg(n,e)}catch(r){throw kr(r,"\u65E0\u6CD5\u89E3\u6790 Markdown \u6587\u4EF6")}}var ag,ig,$d=lr(()=>{Dn();zo();Un();Va();ag=/\[([^\]]+)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g,ig=/!\[([^\]]*)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g});var Wd=ui((sx,Ud)=>{"use strict";function en(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function Hd(t,e){for(var r="",n=0,o=-1,a=0,i,s=0;s<=t.length;++s){if(s<t.length)i=t.charCodeAt(s);else{if(i===47)break;i=47}if(i===47){if(!(o===s-1||a===1))if(o!==s-1&&a===2){if(r.length<2||n!==2||r.charCodeAt(r.length-1)!==46||r.charCodeAt(r.length-2)!==46){if(r.length>2){var l=r.lastIndexOf("/");if(l!==r.length-1){l===-1?(r="",n=0):(r=r.slice(0,l),n=r.length-1-r.lastIndexOf("/")),o=s,a=0;continue}}else if(r.length===2||r.length===1){r="",n=0,o=s,a=0;continue}}e&&(r.length>0?r+="/..":r="..",n=2)}else r.length>0?r+="/"+t.slice(o+1,s):r=t.slice(o+1,s),n=s-o-1;o=s,a=0}else i===46&&a!==-1?++a:a=-1}return r}function ug(t,e){var r=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+n:r+t+n:n}var uo={resolve:function(){for(var e="",r=!1,n,o=arguments.length-1;o>=-1&&!r;o--){var a;o>=0?a=arguments[o]:(n===void 0&&(n=process.cwd()),a=n),en(a),a.length!==0&&(e=a+"/"+e,r=a.charCodeAt(0)===47)}return e=Hd(e,!r),r?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(en(e),e.length===0)return".";var r=e.charCodeAt(0)===47,n=e.charCodeAt(e.length-1)===47;return e=Hd(e,!r),e.length===0&&!r&&(e="."),e.length>0&&n&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return en(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,r=0;r<arguments.length;++r){var n=arguments[r];en(n),n.length>0&&(e===void 0?e=n:e+="/"+n)}return e===void 0?".":uo.normalize(e)},relative:function(e,r){if(en(e),en(r),e===r||(e=uo.resolve(e),r=uo.resolve(r),e===r))return"";for(var n=1;n<e.length&&e.charCodeAt(n)===47;++n);for(var o=e.length,a=o-n,i=1;i<r.length&&r.charCodeAt(i)===47;++i);for(var s=r.length,l=s-i,d=a<l?a:l,u=-1,g=0;g<=d;++g){if(g===d){if(l>d){if(r.charCodeAt(i+g)===47)return r.slice(i+g+1);if(g===0)return r.slice(i+g)}else a>d&&(e.charCodeAt(n+g)===47?u=g:g===0&&(u=0));break}var f=e.charCodeAt(n+g),p=r.charCodeAt(i+g);if(f!==p)break;f===47&&(u=g)}var _="";for(g=n+u+1;g<=o;++g)(g===o||e.charCodeAt(g)===47)&&(_.length===0?_+="..":_+="/..");return _.length>0?_+r.slice(i+u):(i+=u,r.charCodeAt(i)===47&&++i,r.slice(i))},_makeLong:function(e){return e},dirname:function(e){if(en(e),e.length===0)return".";for(var r=e.charCodeAt(0),n=r===47,o=-1,a=!0,i=e.length-1;i>=1;--i)if(r=e.charCodeAt(i),r===47){if(!a){o=i;break}}else a=!1;return o===-1?n?"/":".":n&&o===1?"//":e.slice(0,o)},basename:function(e,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');en(e);var n=0,o=-1,a=!0,i;if(r!==void 0&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var s=r.length-1,l=-1;for(i=e.length-1;i>=0;--i){var d=e.charCodeAt(i);if(d===47){if(!a){n=i+1;break}}else l===-1&&(a=!1,l=i+1),s>=0&&(d===r.charCodeAt(s)?--s===-1&&(o=i):(s=-1,o=l))}return n===o?o=l:o===-1&&(o=e.length),e.slice(n,o)}else{for(i=e.length-1;i>=0;--i)if(e.charCodeAt(i)===47){if(!a){n=i+1;break}}else o===-1&&(a=!1,o=i+1);return o===-1?"":e.slice(n,o)}},extname:function(e){en(e);for(var r=-1,n=0,o=-1,a=!0,i=0,s=e.length-1;s>=0;--s){var l=e.charCodeAt(s);if(l===47){if(!a){n=s+1;break}continue}o===-1&&(a=!1,o=s+1),l===46?r===-1?r=s:i!==1&&(i=1):r!==-1&&(i=-1)}return r===-1||o===-1||i===0||i===1&&r===o-1&&r===n+1?"":e.slice(r,o)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return ug("/",e)},parse:function(e){en(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return r;var n=e.charCodeAt(0),o=n===47,a;o?(r.root="/",a=1):a=0;for(var i=-1,s=0,l=-1,d=!0,u=e.length-1,g=0;u>=a;--u){if(n=e.charCodeAt(u),n===47){if(!d){s=u+1;break}continue}l===-1&&(d=!1,l=u+1),n===46?i===-1?i=u:g!==1&&(g=1):i!==-1&&(g=-1)}return i===-1||l===-1||g===0||g===1&&i===l-1&&i===s+1?l!==-1&&(s===0&&o?r.base=r.name=e.slice(1,l):r.base=r.name=e.slice(s,l)):(s===0&&o?(r.name=e.slice(1,i),r.base=e.slice(1,l)):(r.name=e.slice(s,i),r.base=e.slice(s,l)),r.ext=e.slice(i,l)),s>0?r.dir=e.slice(0,s-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};uo.posix=uo;Ud.exports=uo});var eu=ui((lx,Ns)=>{"use strict";var ho=typeof Reflect=="object"?Reflect:null,jd=ho&&typeof ho.apply=="function"?ho.apply:function(e,r,n){return Function.prototype.apply.call(e,r,n)},Ka;ho&&typeof ho.ownKeys=="function"?Ka=ho.ownKeys:Object.getOwnPropertySymbols?Ka=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Ka=function(e){return Object.getOwnPropertyNames(e)};function hg(t){console&&console.warn&&console.warn(t)}var qd=Number.isNaN||function(e){return e!==e};function it(){it.init.call(this)}Ns.exports=it;Ns.exports.once=mg;it.EventEmitter=it;it.prototype._events=void 0;it.prototype._eventsCount=0;it.prototype._maxListeners=void 0;var Gd=10;function Ya(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(it,"defaultMaxListeners",{enumerable:!0,get:function(){return Gd},set:function(t){if(typeof t!="number"||t<0||qd(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");Gd=t}});it.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};it.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||qd(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function Xd(t){return t._maxListeners===void 0?it.defaultMaxListeners:t._maxListeners}it.prototype.getMaxListeners=function(){return Xd(this)};it.prototype.emit=function(e){for(var r=[],n=1;n<arguments.length;n++)r.push(arguments[n]);var o=e==="error",a=this._events;if(a!==void 0)o=o&&a.error===void 0;else if(!o)return!1;if(o){var i;if(r.length>0&&(i=r[0]),i instanceof Error)throw i;var s=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw s.context=i,s}var l=a[e];if(l===void 0)return!1;if(typeof l=="function")jd(l,this,r);else for(var d=l.length,u=Qd(l,d),n=0;n<d;++n)jd(u[n],this,r);return!0};function Vd(t,e,r,n){var o,a,i;if(Ya(r),a=t._events,a===void 0?(a=t._events=Object.create(null),t._eventsCount=0):(a.newListener!==void 0&&(t.emit("newListener",e,r.listener?r.listener:r),a=t._events),i=a[e]),i===void 0)i=a[e]=r,++t._eventsCount;else if(typeof i=="function"?i=a[e]=n?[r,i]:[i,r]:n?i.unshift(r):i.push(r),o=Xd(t),o>0&&i.length>o&&!i.warned){i.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+i.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=t,s.type=e,s.count=i.length,hg(s)}return t}it.prototype.addListener=function(e,r){return Vd(this,e,r,!1)};it.prototype.on=it.prototype.addListener;it.prototype.prependListener=function(e,r){return Vd(this,e,r,!0)};function fg(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Kd(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},o=fg.bind(n);return o.listener=r,n.wrapFn=o,o}it.prototype.once=function(e,r){return Ya(r),this.on(e,Kd(this,e,r)),this};it.prototype.prependOnceListener=function(e,r){return Ya(r),this.prependListener(e,Kd(this,e,r)),this};it.prototype.removeListener=function(e,r){var n,o,a,i,s;if(Ya(r),o=this._events,o===void 0)return this;if(n=o[e],n===void 0)return this;if(n===r||n.listener===r)--this._eventsCount===0?this._events=Object.create(null):(delete o[e],o.removeListener&&this.emit("removeListener",e,n.listener||r));else if(typeof n!="function"){for(a=-1,i=n.length-1;i>=0;i--)if(n[i]===r||n[i].listener===r){s=n[i].listener,a=i;break}if(a<0)return this;a===0?n.shift():pg(n,a),n.length===1&&(o[e]=n[0]),o.removeListener!==void 0&&this.emit("removeListener",e,s||r)}return this};it.prototype.off=it.prototype.removeListener;it.prototype.removeAllListeners=function(e){var r,n,o;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var a=Object.keys(n),i;for(o=0;o<a.length;++o)i=a[o],i!=="removeListener"&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(r=n[e],typeof r=="function")this.removeListener(e,r);else if(r!==void 0)for(o=r.length-1;o>=0;o--)this.removeListener(e,r[o]);return this};function Yd(t,e,r){var n=t._events;if(n===void 0)return[];var o=n[e];return o===void 0?[]:typeof o=="function"?r?[o.listener||o]:[o]:r?gg(o):Qd(o,o.length)}it.prototype.listeners=function(e){return Yd(this,e,!0)};it.prototype.rawListeners=function(e){return Yd(this,e,!1)};it.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):Zd.call(t,e)};it.prototype.listenerCount=Zd;function Zd(t){var e=this._events;if(e!==void 0){var r=e[t];if(typeof r=="function")return 1;if(r!==void 0)return r.length}return 0}it.prototype.eventNames=function(){return this._eventsCount>0?Ka(this._events):[]};function Qd(t,e){for(var r=new Array(e),n=0;n<e;++n)r[n]=t[n];return r}function pg(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function gg(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}function mg(t,e){return new Promise(function(r,n){function o(i){t.removeListener(e,a),n(i)}function a(){typeof t.removeListener=="function"&&t.removeListener("error",o),r([].slice.call(arguments))}Jd(t,e,a,{once:!0}),e!=="error"&&bg(t,o,{once:!0})})}function bg(t,e,r){typeof t.on=="function"&&Jd(t,"error",e,r)}function Jd(t,e,r,n){if(typeof t.on=="function")n.once?t.once(e,r):t.on(e,r);else if(typeof t.addEventListener=="function")t.addEventListener(e,function o(a){n.once&&t.removeEventListener(e,o),r(a)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}});var tu=ui(Za=>{(function(t){t.parser=function(h,c){return new r(h,c)},t.SAXParser=r,t.SAXStream=u,t.createStream=l,t.MAX_BUFFER_LENGTH=64*1024;var e=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];t.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function r(h,c){if(!(this instanceof r))return new r(h,c);var S=this;o(S),S.q=S.c="",S.bufferCheckPosition=t.MAX_BUFFER_LENGTH,S.encoding=null,S.opt=c||{},S.opt.lowercase=S.opt.lowercase||S.opt.lowercasetags,S.looseCase=S.opt.lowercase?"toLowerCase":"toUpperCase",S.opt.maxEntityCount=S.opt.maxEntityCount||512,S.opt.maxEntityDepth=S.opt.maxEntityDepth||4,S.entityCount=S.entityDepth=0,S.tags=[],S.closed=S.closedRoot=S.sawRoot=!1,S.tag=S.error=null,S.strict=!!h,S.noscript=!!(h||S.opt.noscript),S.state=m.BEGIN,S.strictEntities=S.opt.strictEntities,S.ENTITIES=S.strictEntities?Object.create(t.XML_ENTITIES):Object.create(t.ENTITIES),S.attribList=[],S.opt.xmlns&&(S.ns=Object.create(k)),S.opt.unquotedAttributeValues===void 0&&(S.opt.unquotedAttributeValues=!h),S.trackPosition=S.opt.position!==!1,S.trackPosition&&(S.position=S.line=S.column=0),F(S,"onready")}Object.create||(Object.create=function(h){function c(){}c.prototype=h;var S=new c;return S}),Object.keys||(Object.keys=function(h){var c=[];for(var S in h)h.hasOwnProperty(S)&&c.push(S);return c});function n(h){for(var c=Math.max(t.MAX_BUFFER_LENGTH,10),S=0,v=0,ee=e.length;v<ee;v++){var ue=h[e[v]].length;if(ue>c)switch(e[v]){case"textNode":de(h);break;case"cdata":z(h,"oncdata",h.cdata),h.cdata="";break;case"script":z(h,"onscript",h.script),h.script="";break;default:X(h,"Max buffer length exceeded: "+e[v])}S=Math.max(S,ue)}var le=t.MAX_BUFFER_LENGTH-S;h.bufferCheckPosition=le+h.position}function o(h){for(var c=0,S=e.length;c<S;c++)h[e[c]]=""}function a(h){de(h),h.cdata!==""&&(z(h,"oncdata",h.cdata),h.cdata=""),h.script!==""&&(z(h,"onscript",h.script),h.script="")}r.prototype={end:function(){re(this)},write:Ue,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){a(this)}};var i;try{i=require("stream").Stream}catch{i=function(){}}i||(i=function(){});var s=t.EVENTS.filter(function(h){return h!=="error"&&h!=="end"});function l(h,c){return new u(h,c)}function d(h,c){if(h.length>=2){if(h[0]===255&&h[1]===254)return"utf-16le";if(h[0]===254&&h[1]===255)return"utf-16be"}return h.length>=3&&h[0]===239&&h[1]===187&&h[2]===191?"utf8":h.length>=4?h[0]===60&&h[1]===0&&h[2]===63&&h[3]===0?"utf-16le":h[0]===0&&h[1]===60&&h[2]===0&&h[3]===63?"utf-16be":"utf8":c?"utf8":null}function u(h,c){if(!(this instanceof u))return new u(h,c);i.apply(this),this._parser=new r(h,c),this.writable=!0,this.readable=!0;var S=this;this._parser.onend=function(){S.emit("end")},this._parser.onerror=function(v){S.emit("error",v),S._parser.error=null},this._decoder=null,this._decoderBuffer=null,s.forEach(function(v){Object.defineProperty(S,"on"+v,{get:function(){return S._parser["on"+v]},set:function(ee){if(!ee)return S.removeAllListeners(v),S._parser["on"+v]=ee,ee;S.on(v,ee)},enumerable:!0,configurable:!1})})}u.prototype=Object.create(i.prototype,{constructor:{value:u}}),u.prototype._decodeBuffer=function(h,c){if(this._decoderBuffer&&(h=Buffer.concat([this._decoderBuffer,h]),this._decoderBuffer=null),!this._decoder){var S=d(h,c);if(!S)return this._decoderBuffer=h,"";this._parser.encoding=S,this._decoder=new TextDecoder(S)}return this._decoder.decode(h,{stream:!c})},u.prototype.write=function(h){if(typeof Buffer=="function"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(h))h=this._decodeBuffer(h,!1);else if(this._decoderBuffer){var c=this._decodeBuffer(Buffer.alloc(0),!0);c&&(this._parser.write(c),this.emit("data",c))}return this._parser.write(h.toString()),this.emit("data",h),!0},u.prototype.end=function(h){if(h&&h.length&&this.write(h),this._decoderBuffer){var c=this._decodeBuffer(Buffer.alloc(0),!0);c&&(this._parser.write(c),this.emit("data",c))}else if(this._decoder){var S=this._decoder.decode();S&&(this._parser.write(S),this.emit("data",S))}return this._parser.end(),!0},u.prototype.on=function(h,c){var S=this;return!S._parser["on"+h]&&s.indexOf(h)!==-1&&(S._parser["on"+h]=function(){var v=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);v.splice(0,0,h),S.emit.apply(S,v)}),i.prototype.on.call(S,h,c)};var g=/^\[CDATA\[$/i,f=/^DOCTYPE$/i,p="http://www.w3.org/XML/1998/namespace",_="http://www.w3.org/2000/xmlns/",k={xml:p,xmlns:_},x=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,T=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,R=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,A=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function P(h){return h===" "||h===`
`||h==="\r"||h==="	"}function C(h){return h==='"'||h==="'"}function E(h){return h===">"||P(h)}function D(h,c){return h.test(c)}function L(h,c){return!D(h,c)}var m=0;t.STATE={BEGIN:m++,BEGIN_WHITESPACE:m++,TEXT:m++,TEXT_ENTITY:m++,OPEN_WAKA:m++,SGML_DECL:m++,SGML_DECL_QUOTED:m++,DOCTYPE:m++,DOCTYPE_QUOTED:m++,DOCTYPE_DTD:m++,DOCTYPE_DTD_QUOTED:m++,COMMENT_STARTING:m++,COMMENT:m++,COMMENT_ENDING:m++,COMMENT_ENDED:m++,CDATA:m++,CDATA_ENDING:m++,CDATA_ENDING_2:m++,PROC_INST:m++,PROC_INST_BODY:m++,PROC_INST_ENDING:m++,OPEN_TAG:m++,OPEN_TAG_SLASH:m++,ATTRIB:m++,ATTRIB_NAME:m++,ATTRIB_NAME_SAW_WHITE:m++,ATTRIB_VALUE:m++,ATTRIB_VALUE_QUOTED:m++,ATTRIB_VALUE_CLOSED:m++,ATTRIB_VALUE_UNQUOTED:m++,ATTRIB_VALUE_ENTITY_Q:m++,ATTRIB_VALUE_ENTITY_U:m++,CLOSE_TAG:m++,CLOSE_TAG_SAW_WHITE:m++,SCRIPT:m++,SCRIPT_ENDING:m++},t.XML_ENTITIES=Object.assign(Object.create(null),{amp:"&",gt:">",lt:"<",quot:'"',apos:"'"}),t.ENTITIES=Object.assign(Object.create(null),{amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830}),Object.keys(t.ENTITIES).forEach(function(h){var c=t.ENTITIES[h],S=typeof c=="number"?String.fromCharCode(c):c;t.ENTITIES[h]=S});for(var N in t.STATE)t.STATE[t.STATE[N]]=N;m=t.STATE;function F(h,c,S){h[c]&&h[c](S)}function J(h){var c=h&&h.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);return c?c[2]:null}function se(h){return h?h.toLowerCase().replace(/[^a-z0-9]/g,""):null}function ne(h,c){let S=se(h),v=se(c);return!S||!v?!0:v==="utf16"?S==="utf16le"||S==="utf16be":S===v}function oe(h,c){if(!(!h.strict||!h.encoding||!c||c.name!=="xml")){var S=J(c.body);S&&!ne(h.encoding,S)&&$(h,"XML declaration encoding "+S+" does not match detected stream encoding "+h.encoding.toUpperCase())}}function z(h,c,S){h.textNode&&de(h),F(h,c,S)}function de(h){h.textNode=O(h.opt,h.textNode),h.textNode&&F(h,"ontext",h.textNode),h.textNode=""}function O(h,c){return h.trim&&(c=c.trim()),h.normalize&&(c=c.replace(/\s+/g," ")),c}function X(h,c){return de(h),h.trackPosition&&(c+=`
Line: `+h.line+`
Column: `+h.column+`
Char: `+h.c),c=new Error(c),h.error=c,F(h,"onerror",c),h}function re(h){return h.sawRoot&&!h.closedRoot&&$(h,"Unclosed root tag"),h.state!==m.BEGIN&&h.state!==m.BEGIN_WHITESPACE&&h.state!==m.TEXT&&X(h,"Unexpected end"),de(h),h.c="",h.closed=!0,F(h,"onend"),r.call(h,h.strict,h.opt),h}function $(h,c){if(typeof h!="object"||!(h instanceof r))throw new Error("bad call to strictFail");h.strict&&X(h,c)}function xe(h){h.strict||(h.tagName=h.tagName[h.looseCase]());var c=h.tags[h.tags.length-1]||h,S=h.tag={name:h.tagName,attributes:{}};h.opt.xmlns&&(S.ns=c.ns),h.attribList.length=0,z(h,"onopentagstart",S)}function me(h,c){var S=h.indexOf(":"),v=S<0?["",h]:h.split(":"),ee=v[0],ue=v[1];return c&&h==="xmlns"&&(ee="xmlns",ue=""),{prefix:ee,local:ue}}function Te(h){if(h.strict||(h.attribName=h.attribName[h.looseCase]()),h.attribList.indexOf(h.attribName)!==-1||h.tag.attributes.hasOwnProperty(h.attribName)){h.attribName=h.attribValue="";return}if(h.opt.xmlns){var c=me(h.attribName,!0),S=c.prefix,v=c.local;if(S==="xmlns")if(v==="xml"&&h.attribValue!==p)$(h,"xml: prefix must be bound to "+p+`
Actual: `+h.attribValue);else if(v==="xmlns"&&h.attribValue!==_)$(h,"xmlns: prefix must be bound to "+_+`
Actual: `+h.attribValue);else{var ee=h.tag,ue=h.tags[h.tags.length-1]||h;ee.ns===ue.ns&&(ee.ns=Object.create(ue.ns)),ee.ns[v]=h.attribValue}h.attribList.push([h.attribName,h.attribValue])}else h.tag.attributes[h.attribName]=h.attribValue,z(h,"onattribute",{name:h.attribName,value:h.attribValue});h.attribName=h.attribValue=""}function q(h,c){if(h.opt.xmlns){var S=h.tag,v=me(h.tagName);S.prefix=v.prefix,S.local=v.local,S.uri=S.ns[v.prefix]||"",S.prefix&&!S.uri&&($(h,"Unbound namespace prefix: "+JSON.stringify(h.tagName)),S.uri=v.prefix);var ee=h.tags[h.tags.length-1]||h;S.ns&&ee.ns!==S.ns&&Object.keys(S.ns).forEach(function(Oe){z(h,"onopennamespace",{prefix:Oe,uri:S.ns[Oe]})});for(var ue=0,le=h.attribList.length;ue<le;ue++){var be=h.attribList[ue],Ne=be[0],Pe=be[1],te=me(Ne,!0),De=te.prefix,Ze=te.local,qe=De===""?"":S.ns[De]||"",Xe={name:Ne,value:Pe,prefix:De,local:Ze,uri:qe};De&&De!=="xmlns"&&!qe&&($(h,"Unbound namespace prefix: "+JSON.stringify(De)),Xe.uri=De),h.tag.attributes[Ne]=Xe,z(h,"onattribute",Xe)}h.attribList.length=0}h.tag.isSelfClosing=!!c,h.sawRoot=!0,h.tags.push(h.tag),z(h,"onopentag",h.tag),c||(!h.noscript&&h.tagName.toLowerCase()==="script"?h.state=m.SCRIPT:h.state=m.TEXT,h.tag=null,h.tagName=""),h.attribName=h.attribValue="",h.attribList.length=0}function Ge(h){if(!h.tagName){$(h,"Weird empty close tag."),h.textNode+="</>",h.state=m.TEXT;return}if(h.script){if(h.tagName!=="script"){h.script+="</"+h.tagName+">",h.tagName="",h.state=m.SCRIPT;return}z(h,"onscript",h.script),h.script=""}var c=h.tags.length,S=h.tagName;h.strict||(S=S[h.looseCase]());for(var v=S;c--;){var ee=h.tags[c];if(ee.name!==v)$(h,"Unexpected close tag");else break}if(c<0){$(h,"Unmatched closing tag: "+h.tagName),h.textNode+="</"+h.tagName+">",h.state=m.TEXT;return}h.tagName=S;for(var ue=h.tags.length;ue-- >c;){var le=h.tag=h.tags.pop();h.tagName=h.tag.name,z(h,"onclosetag",h.tagName);var be={};for(var Ne in le.ns)be[Ne]=le.ns[Ne];var Pe=h.tags[h.tags.length-1]||h;h.opt.xmlns&&le.ns!==Pe.ns&&Object.keys(le.ns).forEach(function(te){var De=le.ns[te];z(h,"onclosenamespace",{prefix:te,uri:De})})}c===0&&(h.closedRoot=!0),h.tagName=h.attribValue=h.attribName="",h.attribList.length=0,h.state=m.TEXT}function Re(h){var c=h.entity,S=c.toLowerCase(),v,ee="";return h.ENTITIES[c]?h.ENTITIES[c]:h.ENTITIES[S]?h.ENTITIES[S]:(c=S,c.charAt(0)==="#"&&(c.charAt(1)==="x"?(c=c.slice(2),v=parseInt(c,16),ee=v.toString(16)):(c=c.slice(1),v=parseInt(c,10),ee=v.toString(10))),c=c.replace(/^0+/,""),isNaN(v)||ee.toLowerCase()!==c||v<0||v>1114111||!Me(v)?($(h,"Invalid character entity"),"&"+h.entity+";"):String.fromCodePoint(v))}function Me(h){return h===9||h===10||h===13||h>=32&&h<=55295||h>=57344&&h<=65533||h>=65536&&h<=1114111}function $e(h,c){c==="<"?(h.state=m.OPEN_WAKA,h.startTagPosition=h.position):P(c)||($(h,"Non-whitespace before first tag."),h.textNode=c,h.state=m.TEXT)}function He(h,c){var S="";return c<h.length&&(S=h.charAt(c)),S}function Ue(h){var c=this;if(this.error)throw this.error;if(c.closed)return X(c,"Cannot write after close. Assign an onready handler.");if(h===null)return re(c);typeof h=="object"&&(h=h.toString());for(var S=0,v="";v=He(h,S++),c.c=v,!!v;)switch(c.trackPosition&&(c.position++,v===`
`?(c.line++,c.column=0):c.column++),c.state){case m.BEGIN:if(c.state=m.BEGIN_WHITESPACE,v==="\uFEFF")continue;$e(c,v);continue;case m.BEGIN_WHITESPACE:$e(c,v);continue;case m.TEXT:if(c.sawRoot&&!c.closedRoot){for(var ue=S-1;v&&v!=="<"&&v!=="&";)v=He(h,S++),v&&c.trackPosition&&(c.position++,v===`
`?(c.line++,c.column=0):c.column++);c.textNode+=h.substring(ue,S-1)}v==="<"&&!(c.sawRoot&&c.closedRoot&&!c.strict)?(c.state=m.OPEN_WAKA,c.startTagPosition=c.position):(!P(v)&&(!c.sawRoot||c.closedRoot)&&$(c,"Text data outside of root node."),v==="&"?c.state=m.TEXT_ENTITY:c.textNode+=v);continue;case m.SCRIPT:v==="<"?c.state=m.SCRIPT_ENDING:c.script+=v;continue;case m.SCRIPT_ENDING:v==="/"?c.state=m.CLOSE_TAG:(c.script+="<"+v,c.state=m.SCRIPT);continue;case m.OPEN_WAKA:if(v==="!")c.state=m.SGML_DECL,c.sgmlDecl="";else if(!P(v))if(D(x,v))c.state=m.OPEN_TAG,c.tagName=v;else if(v==="/")c.state=m.CLOSE_TAG,c.tagName="";else if(v==="?")c.state=m.PROC_INST,c.procInstName=c.procInstBody="";else{if($(c,"Unencoded <"),c.startTagPosition+1<c.position){var ee=c.position-c.startTagPosition;v=new Array(ee).join(" ")+v}c.textNode+="<"+v,c.state=m.TEXT}continue;case m.SGML_DECL:if(c.sgmlDecl+v==="--"){c.state=m.COMMENT,c.comment="",c.sgmlDecl="";continue}c.doctype&&c.doctype!==!0&&c.sgmlDecl?(c.state=m.DOCTYPE_DTD,c.doctype+="<!"+c.sgmlDecl+v,c.sgmlDecl=""):g.test(c.sgmlDecl+v)?(z(c,"onopencdata"),c.state=m.CDATA,c.sgmlDecl="",c.cdata=""):f.test(c.sgmlDecl+v)?(c.state=m.DOCTYPE,(c.doctype||c.sawRoot)&&$(c,"Inappropriately located doctype declaration"),c.doctype="",c.sgmlDecl=""):v===">"?(z(c,"onsgmldeclaration",c.sgmlDecl),c.sgmlDecl="",c.state=m.TEXT):(C(v)&&(c.state=m.SGML_DECL_QUOTED),c.sgmlDecl+=v);continue;case m.SGML_DECL_QUOTED:v===c.q&&(c.state=m.SGML_DECL,c.q=""),c.sgmlDecl+=v;continue;case m.DOCTYPE:v===">"?(c.state=m.TEXT,z(c,"ondoctype",c.doctype),c.doctype=!0):(c.doctype+=v,v==="["?c.state=m.DOCTYPE_DTD:C(v)&&(c.state=m.DOCTYPE_QUOTED,c.q=v));continue;case m.DOCTYPE_QUOTED:c.doctype+=v,v===c.q&&(c.q="",c.state=m.DOCTYPE);continue;case m.DOCTYPE_DTD:v==="]"?(c.doctype+=v,c.state=m.DOCTYPE):v==="<"?(c.state=m.OPEN_WAKA,c.startTagPosition=c.position):C(v)?(c.doctype+=v,c.state=m.DOCTYPE_DTD_QUOTED,c.q=v):c.doctype+=v;continue;case m.DOCTYPE_DTD_QUOTED:c.doctype+=v,v===c.q&&(c.state=m.DOCTYPE_DTD,c.q="");continue;case m.COMMENT:v==="-"?c.state=m.COMMENT_ENDING:c.comment+=v;continue;case m.COMMENT_ENDING:v==="-"?(c.state=m.COMMENT_ENDED,c.comment=O(c.opt,c.comment),c.comment&&z(c,"oncomment",c.comment),c.comment=""):(c.comment+="-"+v,c.state=m.COMMENT);continue;case m.COMMENT_ENDED:v!==">"?($(c,"Malformed comment"),c.comment+="--"+v,c.state=m.COMMENT):c.doctype&&c.doctype!==!0?c.state=m.DOCTYPE_DTD:c.state=m.TEXT;continue;case m.CDATA:for(var ue=S-1;v&&v!=="]";)v=He(h,S++),v&&c.trackPosition&&(c.position++,v===`
`?(c.line++,c.column=0):c.column++);c.cdata+=h.substring(ue,S-1),v==="]"&&(c.state=m.CDATA_ENDING);continue;case m.CDATA_ENDING:v==="]"?c.state=m.CDATA_ENDING_2:(c.cdata+="]"+v,c.state=m.CDATA);continue;case m.CDATA_ENDING_2:v===">"?(c.cdata&&z(c,"oncdata",c.cdata),z(c,"onclosecdata"),c.cdata="",c.state=m.TEXT):v==="]"?c.cdata+="]":(c.cdata+="]]"+v,c.state=m.CDATA);continue;case m.PROC_INST:v==="?"?c.state=m.PROC_INST_ENDING:P(v)?c.state=m.PROC_INST_BODY:c.procInstName+=v;continue;case m.PROC_INST_BODY:if(!c.procInstBody&&P(v))continue;v==="?"?c.state=m.PROC_INST_ENDING:c.procInstBody+=v;continue;case m.PROC_INST_ENDING:if(v===">"){let Pe={name:c.procInstName,body:c.procInstBody};oe(c,Pe),z(c,"onprocessinginstruction",Pe),c.procInstName=c.procInstBody="",c.state=m.TEXT}else c.procInstBody+="?"+v,c.state=m.PROC_INST_BODY;continue;case m.OPEN_TAG:D(T,v)?c.tagName+=v:(xe(c),v===">"?q(c):v==="/"?c.state=m.OPEN_TAG_SLASH:(P(v)||$(c,"Invalid character in tag name"),c.state=m.ATTRIB));continue;case m.OPEN_TAG_SLASH:v===">"?(q(c,!0),Ge(c)):($(c,"Forward-slash in opening tag not followed by >"),c.state=m.ATTRIB);continue;case m.ATTRIB:if(P(v))continue;v===">"?q(c):v==="/"?c.state=m.OPEN_TAG_SLASH:D(x,v)?(c.attribName=v,c.attribValue="",c.state=m.ATTRIB_NAME):$(c,"Invalid attribute name");continue;case m.ATTRIB_NAME:v==="="?c.state=m.ATTRIB_VALUE:v===">"?($(c,"Attribute without value"),c.attribValue=c.attribName,Te(c),q(c)):P(v)?c.state=m.ATTRIB_NAME_SAW_WHITE:D(T,v)?c.attribName+=v:$(c,"Invalid attribute name");continue;case m.ATTRIB_NAME_SAW_WHITE:if(v==="=")c.state=m.ATTRIB_VALUE;else{if(P(v))continue;$(c,"Attribute without value"),c.tag.attributes[c.attribName]="",c.attribValue="",z(c,"onattribute",{name:c.attribName,value:""}),c.attribName="",v===">"?q(c):D(x,v)?(c.attribName=v,c.state=m.ATTRIB_NAME):($(c,"Invalid attribute name"),c.state=m.ATTRIB)}continue;case m.ATTRIB_VALUE:if(P(v))continue;C(v)?(c.q=v,c.state=m.ATTRIB_VALUE_QUOTED):(c.opt.unquotedAttributeValues||X(c,"Unquoted attribute value"),c.state=m.ATTRIB_VALUE_UNQUOTED,c.attribValue=v);continue;case m.ATTRIB_VALUE_QUOTED:if(v!==c.q){v==="&"?c.state=m.ATTRIB_VALUE_ENTITY_Q:c.attribValue+=v;continue}Te(c),c.q="",c.state=m.ATTRIB_VALUE_CLOSED;continue;case m.ATTRIB_VALUE_CLOSED:P(v)?c.state=m.ATTRIB:v===">"?q(c):v==="/"?c.state=m.OPEN_TAG_SLASH:D(x,v)?($(c,"No whitespace between attributes"),c.attribName=v,c.attribValue="",c.state=m.ATTRIB_NAME):$(c,"Invalid attribute name");continue;case m.ATTRIB_VALUE_UNQUOTED:if(!E(v)){v==="&"?c.state=m.ATTRIB_VALUE_ENTITY_U:c.attribValue+=v;continue}Te(c),v===">"?q(c):c.state=m.ATTRIB;continue;case m.CLOSE_TAG:if(c.tagName)v===">"?Ge(c):D(T,v)?c.tagName+=v:c.script?(c.script+="</"+c.tagName+v,c.tagName="",c.state=m.SCRIPT):(P(v)||$(c,"Invalid tagname in closing tag"),c.state=m.CLOSE_TAG_SAW_WHITE);else{if(P(v))continue;L(x,v)?c.script?(c.script+="</"+v,c.state=m.SCRIPT):$(c,"Invalid tagname in closing tag."):c.tagName=v}continue;case m.CLOSE_TAG_SAW_WHITE:if(P(v))continue;v===">"?Ge(c):$(c,"Invalid characters in closing tag");continue;case m.TEXT_ENTITY:case m.ATTRIB_VALUE_ENTITY_Q:case m.ATTRIB_VALUE_ENTITY_U:var le,be;switch(c.state){case m.TEXT_ENTITY:le=m.TEXT,be="textNode";break;case m.ATTRIB_VALUE_ENTITY_Q:le=m.ATTRIB_VALUE_QUOTED,be="attribValue";break;case m.ATTRIB_VALUE_ENTITY_U:le=m.ATTRIB_VALUE_UNQUOTED,be="attribValue";break}if(v===";"){var Ne=Re(c);c.opt.unparsedEntities&&!Object.values(t.XML_ENTITIES).includes(Ne)?((c.entityCount+=1)>c.opt.maxEntityCount&&X(c,"Parsed entity count exceeds max entity count"),(c.entityDepth+=1)>c.opt.maxEntityDepth&&X(c,"Parsed entity depth exceeds max entity depth"),c.entity="",c.state=le,c.write(Ne),c.entityDepth-=1):(c[be]+=Ne,c.entity="",c.state=le)}else D(c.entity.length?A:R,v)?c.entity+=v:($(c,"Invalid character in entity name"),c[be]+="&"+c.entity+v,c.entity="",c.state=le);continue;default:throw new Error(c,"Unknown state: "+c.state)}return c.position>=c.bufferCheckPosition&&n(c),c}String.fromCodePoint||(function(){var h=String.fromCharCode,c=Math.floor,S=function(){var v=16384,ee=[],ue,le,be=-1,Ne=arguments.length;if(!Ne)return"";for(var Pe="";++be<Ne;){var te=Number(arguments[be]);if(!isFinite(te)||te<0||te>1114111||c(te)!==te)throw RangeError("Invalid code point: "+te);te<=65535?ee.push(te):(te-=65536,ue=(te>>10)+55296,le=te%1024+56320,ee.push(ue,le)),(be+1===Ne||ee.length>v)&&(Pe+=h.apply(null,ee),ee.length=0)}return Pe};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:S,configurable:!0,writable:!0}):String.fromCodePoint=S})()})(typeof Za>"u"?Za.sax={}:Za)});function yg(t){return t.charCodeAt(0)===65279?t.slice(1):t}function wg(t){return t.toLowerCase()}function kg(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===0}function Qa(t,e,r){for(let n of t)e=n(e,r);return e}function fo(t,e,r){let n=Object.create(null);n.value=r,n.writable=!0,n.enumerable=!0,n.configurable=!0,Object.defineProperty(t,e,n)}function _g(t,e){let r={};return typeof e=="object"&&(r=e),new Cs(r).parseStringPromise(t)}async function au(t,e={}){return await _g(t,e)}var po,nu,ou,xg,vg,_r,ru,Cs,iu=lr(()=>{po=Mt(Wd(),1),nu=Mt(eu(),1),ou=Mt(tu(),1),xg=Object.defineProperty,vg=(t,e,r)=>e in t?xg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,_r=(t,e,r)=>vg(t,typeof e!="symbol"?e+"":e,r);ru={.1:{explicitCharkey:!1,trim:!0,normalize:!0,normalizeTags:!1,attrkey:"@",charkey:"#",explicitArray:!1,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!1,validator:null,xmlns:!1,explicitChildren:!1,childkey:"@@",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,emptyTag:""},.2:{explicitCharkey:!1,trim:!1,normalize:!1,normalizeTags:!1,attrkey:"$",charkey:"_",explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!0,validator:null,xmlns:!1,explicitChildren:!1,preserveChildrenOrder:!1,childkey:"$$",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,rootName:"root",xmldec:{version:"1.0",encoding:"UTF-8",standalone:!0},doctype:null,renderOpts:{pretty:!0,indent:"  ",newline:`
`},headless:!1,chunkSize:1e4,emptyTag:"",cdata:!1}};Cs=class extends nu.EventEmitter{constructor(e){super(),_r(this,"options"),_r(this,"remaining",""),_r(this,"saxParser"),_r(this,"resultObject",null),_r(this,"EXPLICIT_CHARKEY"),_r(this,"errThrown",!1),_r(this,"ended",!1),_r(this,"processAsync",()=>{try{if(this.remaining.length<=this.options.chunkSize){let r=this.remaining;this.remaining="",this.saxParser=this.saxParser.write(r),this.saxParser.close()}else{let r=this.remaining.slice(0,this.options.chunkSize);this.remaining=this.remaining.slice(this.options.chunkSize),this.saxParser=this.saxParser.write(r),setTimeout(this.processAsync,0)}}catch(r){this.errThrown||(this.errThrown=!0,this.emit("error",r))}}),_r(this,"assignOrPush",(r,n,o)=>{n in r?(Array.isArray(r[n])||fo(r,n,[r[n]]),r[n].push(o)):this.options.explicitArray?fo(r,n,[o]):fo(r,n,o)}),_r(this,"reset",()=>{this.removeAllListeners(),this.saxParser=ou.default.parser(this.options.strict,{trim:!1,normalize:!1,xmlns:this.options.xmlns}),this.errThrown=!1,this.saxParser.onerror=i=>{this.saxParser.resume(),this.errThrown||(this.errThrown=!0,this.emit("error",i))},this.saxParser.onend=()=>{this.ended||(this.ended=!0,this.emit("end",this.resultObject))},this.ended=!1,this.EXPLICIT_CHARKEY=this.options.explicitCharkey,this.resultObject=null;let r=[],n=this.options.attrkey,o=this.options.charkey;this.saxParser.onopentag=i=>{let s={};s[o]="",this.options.ignoreAttrs||Object.keys(i.attributes).forEach(l=>{!(n in s)&&!this.options.mergeAttrs&&(s[n]={});let d=this.options.attrValueProcessors?Qa(this.options.attrValueProcessors,i.attributes[l],l):i.attributes[l],u=this.options.attrNameProcessors?Qa(this.options.attrNameProcessors,l):l;this.options.mergeAttrs?this.assignOrPush(s,u,d):fo(s[n],u,d)}),s["#name"]=this.options.tagNameProcessors?Qa(this.options.tagNameProcessors,i.name):i.name,this.options.xmlns&&(s[this.options.xmlnskey]={uri:i.uri,local:i.local}),r.push(s)},this.saxParser.onclosetag=()=>{let i=r.pop(),s=i["#name"];(!this.options.explicitChildren||!this.options.preserveChildrenOrder)&&delete i["#name"];let l;i.cdata===!0&&(l=i.cdata,delete i.cdata);let d=r[r.length-1],u="";if(i[o].match(/^\s*$/)&&!l?(u=i[o],delete i[o]):(this.options.trim&&(i[o]=i[o].trim()),this.options.normalize&&(i[o]=i[o].replace(/\s{2,}/g," ").trim()),i[o]=this.options.valueProcessors?Qa(this.options.valueProcessors,i[o],s):i[o],Object.keys(i).length===1&&o in i&&!this.EXPLICIT_CHARKEY&&(i=i[o])),kg(i)&&(typeof this.options.emptyTag=="function"?i=this.options.emptyTag():i=this.options.emptyTag!==""?this.options.emptyTag:u),this.options.validator){let g=`/${r.map(f=>f["#name"]).concat(s).join("/")}`;(()=>{try{i=this.options.validator(g,d&&d[s],i)}catch(f){this.emit("error",f)}})()}if(this.options.explicitChildren&&!this.options.mergeAttrs&&typeof i=="object")if(this.options.preserveChildrenOrder){if(d){d[this.options.childkey]=d[this.options.childkey]||[];let g={};Object.keys(i).forEach(f=>{fo(g,f,i[f])}),d[this.options.childkey].push(g),delete i["#name"],Object.keys(i).length===1&&o in i&&!this.EXPLICIT_CHARKEY&&(i=i[o])}}else{let g={};this.options.attrkey in i&&(g[this.options.attrkey]=i[this.options.attrkey],delete i[this.options.attrkey]),!this.options.charsAsChildren&&this.options.charkey in i&&(g[this.options.charkey]=i[this.options.charkey],delete i[this.options.charkey]),Object.getOwnPropertyNames(i).length>0&&(g[this.options.childkey]=i),i=g}if(r.length>0)this.assignOrPush(d,s,i);else{if(this.options.explicitRoot){let g=i,f={};fo(f,s,g),i=f}this.resultObject=i,this.ended=!0,this.emit("end",this.resultObject)}};let a=i=>{let s=r[r.length-1];if(s&&(s[o]+=i,this.options.explicitChildren&&this.options.preserveChildrenOrder&&this.options.charsAsChildren&&(this.options.includeWhiteChars||i.replace(/\\n/g,"").trim()!==""))){s[this.options.childkey]=s[this.options.childkey]||[];let l={"#name":"__text__"};l[o]=i,this.options.normalize&&(l[o]=l[o].replace(/\s{2,}/g," ").trim()),s[this.options.childkey].push(l)}return s};this.saxParser.ontext=a,this.saxParser.oncdata=i=>{let s=a(i);s&&(s.cdata=!0)}}),_r(this,"parseString",(r,n)=>{n&&typeof n=="function"&&(this.on("end",o=>{this.reset(),n(null,o)}),this.on("error",o=>{this.reset(),n(o)}));try{return r=r.toString(),r.trim()===""?(this.emit("end",null),!0):(r=yg(r),this.options.async?(this.remaining=r,setTimeout(this.processAsync,0),this.saxParser):this.saxParser.write(r).close())}catch(o){if(!this.errThrown&&!this.ended)this.emit("error",o),this.errThrown=!0;else if(this.ended)throw o}}),_r(this,"parseStringPromise",r=>new Promise((n,o)=>{this.parseString(r,(a,i)=>{a?o(a):n(i)})})),this.options={},Object.keys(ru["0.2"]).forEach(r=>{this.options[r]=ru["0.2"][r]}),e&&Object.keys(e).forEach(r=>{this.options[r]=e[r]}),this.options.xmlns&&(this.options.xmlnskey=`${this.options.attrkey}ns`),this.options.normalizeTags&&(this.options.tagNameProcessors||(this.options.tagNameProcessors=[]),this.options.tagNameProcessors.unshift(wg)),this.reset()}}});function su(t){return t.includes("&")?t.replace(/&(#x[\dA-Fa-f]+|#\d+|[a-zA-Z]+);/g,(e,r)=>r.startsWith("#x")?String.fromCodePoint(Number.parseInt(r.slice(2),16)):r.startsWith("#")?String.fromCodePoint(Number.parseInt(r.slice(1),10)):Tg[e]||e):t}function Eg(t){let e=t.slice(0,12),r=Array.from(e).map(n=>n.toString(16).padStart(2,"0")).join("");for(let[n,o]of Object.entries(Sg))if(r.startsWith(n))return o;return"unknown"}function ti(t,e,r,n){return URL.createObjectURL(new Blob([t],{type:e}))}function pu(t){let e="";return e=t.name??"",e}function Bg(t){return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}async function gu(t){return t instanceof Uint8Array?Bg(t):await t.arrayBuffer()}function Jt(t){let e=t.byteLength,r=e===4?"getUint32":e===2?"getUint16":"getUint8";return new DataView(t)[r](0)}function Sr(t,e){let r={};for(let n in t){let[o,a,i]=t[n];r[n]=i==="string"?Go(e.slice(o,o+a)):Jt(e.slice(o,o+a))}return r}function qo(t){let e=t.reduce((o,a)=>o+a.length,0),r=new t[0].constructor(e),n=0;for(let o of t)r.set(o,n),n+=o.length;return r}function Ja(t,e=0){let r=0,n=0;for(let o of t.subarray(e,e+4))if(r=r<<7|(o&127)>>>0,n++,o&128)break;return{value:r,length:n}}function Hg(t){let e=0;for(let r of t.subarray(-4))r&128&&(e=0),e=e<<7|r&127;return e}function mu(t){let e=0;for(;t>0;t=t>>1)(t&1)===1&&e++;return e}function Ug(t){let e=0;for(;(t&1)===0;)t=t>>1,e++;return e}function Wg(t){let e=[];for(let r=0;r<t.length;r++){let n=t[r];if(n===0)e.push(0);else if(n<=8)for(let o of t.subarray(r+1,(r+=n)+1))e.push(o);else if(n<=127)e.push(n);else if(n<=191){let o=n<<8|t[r+++1],a=(o&16383)>>>3,i=(o&7)+3;for(let s=0;s<i;s++)e.push(e[e.length-a])}else e.push(32,n^128)}return Uint8Array.from(e)}function jg(t,e){let r=e(t.huffcdic),{magic:n,offset1:o,offset2:a}=Sr(Lg,r);if(n!=="HUFF")throw new Error("Invalid HUFF record");let i=Array.from({length:256},(u,g)=>o+g*4).map(u=>Jt(r.slice(u,u+4))).map(u=>[u&128,u&31,u>>>8]),s=[[0,0],...Array.from({length:32},(u,g)=>a+g*8).map(u=>[Jt(r.slice(u,u+4)),Jt(r.slice(u+4,u+8))])],l=[];for(let u=1;u<t.numHuffcdic;u++){let g=e(t.huffcdic+u),f=Sr(Dg,g);if(f.magic!=="CDIC")throw new Error("Invalid CDIC record");let p=Math.min(1<<f.codeLength,f.numEntries-l.length),_=g.slice(f.length);for(let k=0;k<p;k++){let x=Jt(_.slice(k*2,k*2+2)),T=Jt(_.slice(x,x+2)),R=T&32767,A=T&32768,P=new Uint8Array(_.slice(x+2,x+2+R));l.push([P,A])}}let d=u=>{let g=new Uint8Array,f=u.byteLength*8;for(let p=0;p<f;){let _=Number(Gg(u,p)),[k,x,T]=i[_>>>24];if(!k){for(;_>>>32-x<s[x][0];)x+=1;T=s[x][1]}if(p+=x,p>f)break;let R=T-(_>>>32-x),[A,P]=l[R];P||(A=d(A),l[R]=[A,!0]),g=qo([g,A])}return g};return d}function Gg(t,e){let r=e>>3,n=e+32,o=n>>3,a=0n;for(let i=r;i<=o;i++)a=a<<8n|BigInt(t[i]??0);return a>>8n-BigInt(n&7)&0xFFFFFFFFn}function qg(t,e){let{magic:r,count:n}=Sr(Pg,t);if(r!=="EXTH")throw new Error("Invalid EXTH header");let o=Ms(e.toString()),a={},i=12;for(let s=0;s<n;s++){let l=Jt(t.slice(i,i+4)),d=Jt(t.slice(i+4,i+8));if(l in du){let[u,g,f]=du[l],p=t.slice(i+8,i+d),_=g==="uint"?Jt(p):o.decode(p);f?(a[u]??(a[u]=[]),a[u].push(_)):a[u]=_}i+=d}return a}function Xg(t){let e=t&1,r=mu(t>>>1);return n=>{for(let o=0;o<r;o++){let a=Hg(n);n=n.subarray(0,-a)}if(e){let o=(n[n.length-1]&3)+1;n=n.subarray(0,-o)}return n}}function Vg(t){let{flags:e,dataStart:r,keyLength:n,keyStart:o}=Sr(zg,t),a=new Uint8Array(t.slice(r));if(e&2){let i=n===16?1024:1040,s=new Uint8Array(t.slice(o,o+n)),l=Math.min(i,a.length);for(let d=0;d<l;d++)a[d]=a[d]^s[d%s.length]}if(e&1)try{return ld(a)}catch(i){console.warn(i),console.warn("Failed to decompress font")}return a}function ei(t,e){let r=e(t),n=Sr(cu,r);if(n.magic!=="INDX")throw new Error("Invalid INDX record");let o=Ms(n.encoding.toString()),a={},i=0;for(let f=0;f<n.numCncx;f++){let p=e(t+n.numRecords+f+1),_=new Uint8Array(p);for(let k=0;k<_.byteLength;){let x=k,{value:T,length:R}=Ja(_,k);k+=R;let A=p.slice(k,k+T);k+=T,a[i+x]=o.decode(A)}i+=65536}let s=r.slice(n.length),l=Sr(Og,s);if(l.magic!=="TAGX")throw new Error("Invalid TAGX section");let d=(l.length-12)/4,u=Array.from({length:d},(f,p)=>new Uint8Array(s.slice(12+p*4,12+p*4+4))),g=[];for(let f=0;f<n.numRecords;f++){let p=e(t+1+f),_=new Uint8Array(p),k=Sr(cu,p);if(k.magic!=="INDX")throw new Error("Invalid INDX record");for(let x=0;x<k.numRecords;x++){let T=k.idxt+4+2*x,R=Jt(p.slice(T,T+2)),A=Jt(p.slice(R,R+1)),P=Go(p.slice(R+1,R+1+A)),C=[],E=R+1+A,D=0,L=E+l.numControlBytes;for(let[N,F,J,se]of u){if(se&1){D++;continue}let ne=E+D,oe=Jt(p.slice(ne,ne+1))&J;if(oe===J)if(mu(J)>1){let{value:z,length:de}=Ja(_,L);C.push([N,0,z,F]),L+=de}else C.push([N,1,0,F]);else C.push([N,oe>>Ug(J),0,F])}let m={};for(let[N,F,J,se]of C){let ne=[];if(F!==0)for(let oe=0;oe<F*se;oe++){let{value:z,length:de}=Ja(_,L);ne.push(z),L+=de}else{let oe=0;for(;oe<J;){let{value:z,length:de}=Ja(_,L);ne.push(z),L+=de,oe+=de}}m[N]=ne}g.push({name:P,tagMap:m})}}return{table:g,cncx:a}}function Kg(t,e){let{table:r,cncx:n}=ei(t,e),o=r.map(({tagMap:i},s)=>({index:s,offset:i[1]?.[0],size:i[2]?.[0],label:n[i[3]?.[0]]??"",headingLevel:i[4]?.[0],pos:i[6],parent:i[21]?.[0],firstChild:i[22]?.[0],lastChild:i[23]?.[0]})),a=i=>(i.firstChild==null||(i.children=o.filter(s=>s.parent===i.index).map(a)),i);return o.filter(i=>i.headingLevel===0).map(a)}function uu(t=0,e=0){return`kindle:pos:fid:${t.toString(32).toUpperCase().padStart(4,"0")}:off:${e.toString(32).toUpperCase().padStart(10,"0")}`}function hu(t){let e=t.match(Zg);if(!e)return"";let[,r,n]=e;return`[${r}="${n}"]`}function Jg(t){let[e,r]=t.match(Qg).slice(1);return{fid:Number.parseInt(e,32),off:Number.parseInt(r,32)}}async function Ps(t,e){let r=new Is(t,e);return await r.innerLoadFile(),await r.innerInit(),r}async function Os(t,e){let r=new Rs(t,e);return await r.innerLoadFile(),await r.innerInit(),r}var Tg,lu,Sg,Ag,Ng,Cg,Ig,Rg,Mg,Pg,cu,Og,Lg,Dg,Fg,zg,$g,Go,Ms,du,Yg,Zg,Qg,fu,em,tm,Qt,ri,rm,nm,Ct,Is,om,am,Tr,Rs,bu=lr(()=>{os();iu();Tg={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};lu={XML:"application/xml",XHTML:"application/xhtml+xml",HTML:"text/html",CSS:"text/css",SVG:"image/svg+xml"},Sg={ffd8ff:"image/jpeg","89504e47":"image/png",47494638:"image/gif","424d":"image/bmp","3c737667":"image/svg+xml","00000018":"video/mp4","00000020":"video/mp4","1a45dfa3":"video/mkv","1f43b675":"video/webm",494433:"audio/mp3",52494646:"audio/wav","4f676753":"audio/ogg","00010000":"font/ttf",74727565:"font/ttf","4f54544f":"font/otf","774f4646":"font/woff","774f4632":"font/woff2","504c":"font/eot"};Ag={1252:"windows-1252",65001:"utf-8"},Ng={1:["ar","ar-SA","ar-IQ","ar-EG","ar-LY","ar-DZ","ar-MA","ar-TN","ar-OM","ar-YE","ar-SY","ar-JO","ar-LB","ar-KW","ar-AE","ar-BH","ar-QA"],2:["bg"],3:["ca"],4:["zh","zh-TW","zh-CN","zh-HK","zh-SG"],5:["cs"],6:["da"],7:["de","de-DE","de-CH","de-AT","de-LU","de-LI"],8:["el"],9:["en","en-US","en-GB","en-AU","en-CA","en-NZ","en-IE","en-ZA","en-JM",null,"en-BZ","en-TT","en-ZW","en-PH"],10:["es","es-ES","es-MX",null,"es-GT","es-CR","es-PA","es-DO","es-VE","es-CO","es-PE","es-AR","es-EC","es-CL","es-UY","es-PY","es-BO","es-SV","es-HN","es-NI","es-PR"],11:["fi"],12:["fr","fr-FR","fr-BE","fr-CA","fr-CH","fr-LU","fr-MC"],13:["he"],14:["hu"],15:["is"],16:["it","it-IT","it-CH"],17:["ja"],18:["ko"],19:["nl","nl-NL","nl-BE"],20:["no","nb","nn"],21:["pl"],22:["pt","pt-BR","pt-PT"],23:["rm"],24:["ro"],25:["ru"],26:["hr",null,"sr"],27:["sk"],28:["sq"],29:["sv","sv-SE","sv-FI"],30:["th"],31:["tr"],32:["ur"],33:["id"],34:["uk"],35:["be"],36:["sl"],37:["et"],38:["lv"],39:["lt"],41:["fa"],42:["vi"],43:["hy"],44:["az"],45:["eu"],46:["hsb"],47:["mk"],48:["st"],49:["ts"],50:["tn"],52:["xh"],53:["zu"],54:["af"],55:["ka"],56:["fo"],57:["hi"],58:["mt"],59:["se"],62:["ms"],63:["kk"],65:["sw"],67:["uz",null,"uz-UZ"],68:["tt"],69:["bn"],70:["pa"],71:["gu"],72:["or"],73:["ta"],74:["te"],75:["kn"],76:["ml"],77:["as"],78:["mr"],79:["sa"],82:["cy","cy-GB"],83:["gl","gl-ES"],87:["kok"],97:["ne"],98:["fy"]},Cg={name:[0,32,"string"],type:[60,4,"string"],creator:[64,4,"string"],numRecords:[76,2,"uint"]},Ig={compression:[0,2,"uint"],numTextRecords:[8,2,"uint"],recordSize:[10,2,"uint"],encryption:[12,2,"uint"]},Rg={magic:[16,4,"string"],length:[20,4,"uint"],type:[24,4,"uint"],encoding:[28,4,"uint"],uid:[32,4,"uint"],version:[36,4,"uint"],titleOffset:[84,4,"uint"],titleLength:[88,4,"uint"],localeRegion:[94,1,"uint"],localeLanguage:[95,1,"uint"],resourceStart:[108,4,"uint"],huffcdic:[112,4,"uint"],numHuffcdic:[116,4,"uint"],exthFlag:[128,4,"uint"],trailingFlags:[240,4,"uint"],indx:[244,4,"uint"]},Mg={resourceStart:[108,4,"uint"],fdst:[192,4,"uint"],numFdst:[196,4,"uint"],frag:[248,4,"uint"],skel:[252,4,"uint"],guide:[260,4,"uint"]},Pg={magic:[0,4,"string"],length:[4,4,"uint"],count:[8,4,"uint"]},cu={magic:[0,4,"string"],length:[4,4,"uint"],type:[8,4,"uint"],idxt:[20,4,"uint"],numRecords:[24,4,"uint"],encoding:[28,4,"uint"],language:[32,4,"uint"],total:[36,4,"uint"],ordt:[40,4,"uint"],ligt:[44,4,"uint"],numLigt:[48,4,"uint"],numCncx:[52,4,"uint"]},Og={magic:[0,4,"string"],length:[4,4,"uint"],numControlBytes:[8,4,"uint"]},Lg={magic:[0,4,"string"],offset1:[8,4,"uint"],offset2:[12,4,"uint"]},Dg={magic:[0,4,"string"],length:[4,4,"uint"],numEntries:[8,4,"uint"],codeLength:[12,4,"uint"]},Fg={magic:[0,4,"string"],numEntries:[8,4,"uint"]},zg={flags:[8,4,"uint"],dataStart:[12,4,"uint"],keyLength:[16,4,"uint"],keyStart:[20,4,"uint"]};$g=new TextDecoder,Go=t=>$g.decode(t);Ms=t=>new TextDecoder(Ag[t]);du={100:["creator","string",!0],101:["publisher","string",!1],103:["description","string",!1],104:["isbn","string",!1],105:["subject","string",!0],106:["date","string",!1],108:["contributor","string",!0],109:["rights","string",!1],110:["subjectCode","string",!0],112:["source","string",!0],113:["asin","string",!1],121:["boundary","uint",!1],122:["fixedLayout","string",!1],125:["numResources","uint",!1],126:["originalResolution","string",!1],127:["zeroGutter","string",!1],128:["zeroMargin","string",!1],129:["coverURI","string",!1],132:["regionMagnification","string",!1],201:["coverOffset","uint",!1],202:["thumbnailOffset","uint",!1],503:["title","string",!1],524:["language","string",!0],527:["pageProgressionDirection","string",!1]};Yg=/<\s*(?:mbp:)?pagebreak[^>]*>/gi;Zg=/\s(id|name|aid)\s*=\s*['"]([^'"]*)['"]/i;Qg=/kindle:pos:fid:(\w+):off:(\w+)/;fu=/kindle:(flow|embed):(\w+)(?:\?mime=(\w+\/[-+.\w]+))?/,em=Object.defineProperty,tm=(t,e,r)=>e in t?em(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Qt=(t,e,r)=>tm(t,typeof e!="symbol"?e+"":e,r),ri=class{constructor(e,r){if(Qt(this,"fileArrayBuffer"),Qt(this,"recordsOffset"),Qt(this,"recordsMagic"),Qt(this,"start",0),Qt(this,"pdbHeader"),Qt(this,"mobiHeader"),Qt(this,"palmdocHeader"),Qt(this,"kf8Header"),Qt(this,"exth"),Qt(this,"isKf8",!1),Qt(this,"resourceStart"),Qt(this,"decoder"),Qt(this,"encoder"),Qt(this,"removeTrailingEntries"),Qt(this,"decompress"),this.fileArrayBuffer=e,this.parsePdbHeader(),this.parseFirstRecord(this.loadRecord(0)),this.resourceStart=this.mobiHeader.resourceStart,!this.isKf8){let n=this.exth.boundary??4294967295;if(n<4294967295){try{this.parseFirstRecord(this.loadRecord(n)),this.start=n,this.isKf8=!0}catch{console.warn("Failed to parse kf8 header.")}r.endsWith(".mobi")&&console.warn(`File "${r}" is a compatible file. Please change the file extension to .azw3 to make it parse correctly.`)}}this.setup()}decode(e){return this.decoder.decode(e)}encode(e){return this.encoder.encode(e)}pdbLoadRecord(e){let[r,n]=this.recordsOffset[e]??[0,0];return this.fileArrayBuffer.slice(r,n)}loadRecord(e){return this.pdbLoadRecord(this.start+e)}loadMagic(e){return this.recordsMagic[this.start+e]}loadTextBuffer(e){return this.decompress(this.removeTrailingEntries(new Uint8Array(this.loadRecord(e+1))))}loadResource(e){let r=this.pdbLoadRecord(this.resourceStart+e),n=Go(r.slice(0,4)),o;return n==="FONT"?o=Vg(r):n==="VIDE"||n==="AUDI"?o=new Uint8Array(r.slice(12)):o=new Uint8Array(r),{type:Eg(o),raw:o}}getNCX(){let e=this.mobiHeader.indx;if(e<4294967295)return Kg(e,this.loadRecord.bind(this))}getMetadata(){let e=this.mobiHeader,r=this.exth;return{identifier:this.mobiHeader.uid.toString(),title:r?.title||e.title,author:r?.creator?.map(su)??[],publisher:r?.publisher??"",language:r?.language?.[0]??e.language,published:r?.date??"",description:r?.description??"",subject:r?.subject?.map(su)??[],rights:r?.rights??"",contributor:r?.contributor??[]}}getCoverImage(){let e=this.exth,r=Number(e.coverOffset??4294967295),n=Number(e.thumbnailOffset??4294967295),o=r<4294967295?r:n<4294967295?n:void 0;if(o)return this.loadResource(o)}parsePdbHeader(){let e=Sr(Cg,this.fileArrayBuffer.slice(0,78));e.name=e.name.replace(/\0.*$/,""),this.pdbHeader=e;let r=this.fileArrayBuffer.slice(78,78+e.numRecords*8),n=Array.from({length:e.numRecords},(o,a)=>Jt(r.slice(a*8,a*8+4)));this.recordsOffset=n.map((o,a)=>[o,n[a+1]]),this.recordsMagic=n.map(o=>Go(this.fileArrayBuffer.slice(o,o+4)))}parseFirstRecord(e){this.palmdocHeader=Sr(Ig,e.slice(0,16));let r=Sr(Rg,e);if(r.magic!=="MOBI")throw new Error("Missing MOBI header");let{titleOffset:n,titleLength:o,localeLanguage:a,localeRegion:i}=r,s=Ng[a.toString()]??[],l={title:Go(e.slice(n,n+o)),language:s[i>>2]??s[0]??"unknown"};this.mobiHeader=Object.assign(r,l),this.kf8Header=r.version>=8?Sr(Mg,e):void 0,this.isKf8=r.version>=8,this.exth=r.exthFlag&64?qg(e.slice(r.length+16),r.encoding):void 0}setup(){this.decoder=Ms(this.mobiHeader.encoding.toString()),this.encoder=new TextEncoder;let e=this.palmdocHeader.compression;if(e===1)this.decompress=n=>n;else if(e===2)this.decompress=Wg;else if(e===17480)this.decompress=jg(this.mobiHeader,this.loadRecord.bind(this));else throw new Error("Unsupported compression");let r=this.mobiHeader.trailingFlags;this.removeTrailingEntries=Xg(r)}},rm=Object.defineProperty,nm=(t,e,r)=>e in t?rm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ct=(t,e,r)=>nm(t,typeof e!="symbol"?e+"":e,r);Is=class{constructor(e,r="./images"){this.file=e,Ct(this,"fileArrayBuffer"),Ct(this,"mobiFile"),Ct(this,"fileName",""),Ct(this,"fdstTable",[]),Ct(this,"fullRawLength",0),Ct(this,"skelTable",[]),Ct(this,"fragTable",[]),Ct(this,"chapters",[]),Ct(this,"toc",[]),Ct(this,"fragmentOffsets",new Map),Ct(this,"fragmentSelectors",new Map),Ct(this,"rawHead",new Uint8Array),Ct(this,"rawTail",new Uint8Array),Ct(this,"lastLoadedHead",-1),Ct(this,"lastLoadedTail",-1),Ct(this,"resourceCache",new Map),Ct(this,"chapterCache",new Map),Ct(this,"idToChapter",new Map),Ct(this,"resourceSaveDir","./images"),this.fileName=pu(e),this.resourceSaveDir=r}getFileInfo(){return{fileName:this.fileName}}getMetadata(){return this.mobiFile.getMetadata()}getCoverImage(){if(this.resourceCache.has("cover"))return this.resourceCache.get("cover");let e=this.mobiFile.getCoverImage(),r="";return e&&(r=ti(e.raw,e.type,"cover",this.resourceSaveDir),this.resourceCache.set("cover",r)),r}getSpine(){return this.chapters}getToc(){return this.toc}async innerLoadFile(){this.fileArrayBuffer=await gu(this.file),this.mobiFile=new ri(this.fileArrayBuffer,this.fileName)}async innerInit(){let e=this.mobiFile.loadRecord.bind(this.mobiFile),r=this.mobiFile.kf8Header,n=this.mobiFile.loadRecord(r.fdst),o=Sr(Fg,n);if(o.magic!=="FDST")throw new Error("Missing FDST record");let a=Array.from({length:o.numEntries},(f,p)=>12+p*8).map(f=>[Jt(n.slice(f,f+4)),Jt(n.slice(f+4,f+8))]);this.fdstTable=a,this.fullRawLength=a[a.length-1][1];let s=ei(r.skel,e).table.map(({name:f,tagMap:p},_)=>({index:_,name:f,numFrag:p[1][0],offset:p[6][0],length:p[6][1]}));this.skelTable=s;let l=ei(r.frag,e),d=l.table.map(({name:f,tagMap:p})=>({insertOffset:Number.parseInt(f),selector:l.cncx[p[2][0]],index:p[4][0],offset:p[6][0],length:p[6][1]}));this.fragTable=d;let u=this.skelTable.reduce((f,p,_)=>{let k=f[f.length-1],x=k?.fragEnd??0,T=x+p.numFrag,R=this.fragTable.slice(x,T),A=p.length+R.reduce((E,D)=>E+D.length,0),P=(k?.totalLength??0)+A,C={id:_.toString(),skel:p,frags:R,fragEnd:T,length:A,totalLength:P};return this.idToChapter.set(_,C),f.push(C),f},[]);this.chapters=u;let g=this.mobiFile.getNCX();if(g){let f=({label:p,pos:_,children:k})=>{let[x,T]=_,R=uu(x,T),A=this.fragmentOffsets.get(x);return A?A.push(T):this.fragmentOffsets.set(x,[T]),{label:p,href:R,children:k?.map(f)}};this.toc=g.map(f)}}getGuide(){let e=this.mobiFile.kf8Header.guide;if(e<4294967295){let r=this.mobiFile.loadRecord.bind(this.mobiFile),{table:n,cncx:o}=ei(e,r);return n.map(({name:a,tagMap:i})=>({label:o[i[1][0]]??"",type:a?.split(/\s/),href:uu(i[6]?.[0]??i[3]?.[0])}))}}loadRaw(e,r){let n=r-this.rawHead.length,o=this.fullRawLength===0?1/0:this.fullRawLength-this.rawTail.length-e;if(n<0||n<o){for(;this.rawHead.length<r;){this.lastLoadedHead++;let i=this.lastLoadedHead,s=this.mobiFile.loadTextBuffer(i);this.rawHead=qo([this.rawHead,s])}return this.rawHead.slice(e,r)}for(;this.fullRawLength-this.rawTail.length>e;){this.lastLoadedTail++;let i=this.mobiFile.palmdocHeader.numTextRecords-1-this.lastLoadedTail,s=this.mobiFile.loadTextBuffer(i);this.rawTail=qo([s,this.rawTail])}let a=this.fullRawLength-this.rawTail.length;return this.rawTail.slice(e-a,r-a)}loadText(e){let{skel:r,frags:n,length:o}=e,a=this.loadRaw(r.offset,r.offset+o),i=a.slice(0,r.length);for(let s of n){let l=s.insertOffset-r.offset,d=r.length+s.offset,u=a.slice(d,d+s.length);i=qo([i.slice(0,l),u,i.slice(l)]);let g=this.fragmentOffsets.get(s.index);if(g)for(let f of g){let p=this.mobiFile.decode(u.buffer).slice(f),_=hu(p);_&&this.cacheFragmentSelector(s.index,f,_)}}return this.mobiFile.decode(i.buffer)}loadChapter(e){let r=Number.parseInt(e);if(Number.isNaN(r))return;if(this.chapterCache.has(r))return this.chapterCache.get(r);let n=this.idToChapter.get(r);if(n){let o=this.replace(this.loadText(n));return this.chapterCache.set(r,o),o}}cacheFragmentSelector(e,r,n){let o=this.fragmentSelectors.get(e);if(o)o.set(r,n);else{let a=new Map;this.fragmentSelectors.set(e,a),a.set(r,n)}}loadFlow(e){if(e<4294967295)return this.loadRaw(this.fdstTable[e][0],this.fdstTable[e][1])}resolveHref(e){if(/^(?!blob|kindle)\w+:/i.test(e))return;let{fid:r,off:n}=Jg(e),o=this.chapters.find(_=>_.frags.some(k=>k.index===r));if(!o)return;let a=o.id,i=this.fragmentSelectors.get(r)?.get(n);if(i)return{id:a,selector:i};let{skel:s,frags:l}=o,d=l.find(_=>_.index===r),u=s.offset+s.length+d.offset,g=this.loadRaw(u,u+d.length),f=this.mobiFile.decode(g.buffer).slice(n),p=hu(f);return this.cacheFragmentSelector(r,n,p),{id:a,selector:p}}replaceResources(e){return e.replace(new RegExp(fu,"gi"),(r,n,o,a)=>{if(this.resourceCache.has(r))return this.resourceCache.get(r);let i=n==="flow"?this.loadFlow(Number.parseInt(o)):this.mobiFile.loadResource(Number.parseInt(o,36)-1).raw,s="";if(a===lu.CSS||a===lu.SVG){let d=this.mobiFile.decode(i?.buffer);s=this.replaceResources(d)}else s=i;let l=ti(s,a,o,this.resourceSaveDir);return this.resourceCache.set(r,l),l})}replace(e){let r=[],o=e.match(/<head[^>]*>([\s\S]*)<\/head>/i)[1].match(/<link[^>]*>/gi)??[];for(let s of o){let l=s.match(/href="([^"]*)"/i)[1],d=s.match(fu)[2],u=this.replaceResources(l);r.push({id:d,href:u})}let a=e.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1];return{html:this.replaceResources(a),css:r}}destroy(){this.resourceCache.forEach(e=>{URL.revokeObjectURL(e)})}},om=Object.defineProperty,am=(t,e,r)=>e in t?om(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Tr=(t,e,r)=>am(t,typeof e!="symbol"?e+"":e,r);Rs=class{constructor(e,r="./images"){this.file=e,Tr(this,"fileArrayBuffer"),Tr(this,"mobiFile"),Tr(this,"fileName",""),Tr(this,"chapters",[]),Tr(this,"idToChapter",new Map),Tr(this,"toc",[]),Tr(this,"resourceSaveDir","./images"),Tr(this,"chapterCache",new Map),Tr(this,"resourceCache",new Map),Tr(this,"recindexReg",/recindex=["']?(\d+)["']?/),Tr(this,"mediarecindexReg",/mediarecindex=["']?(\d+)["']?/),Tr(this,"fileposReg",/filepos=["']?(\d+)["']?/),this.fileName=pu(e),this.resourceSaveDir=r}getFileInfo(){return{fileName:this.fileName}}getSpine(){return this.chapters}loadChapter(e){let r=Number.parseInt(e);if(Number.isNaN(r))return;if(this.chapterCache.has(r))return this.chapterCache.get(r);let n=this.idToChapter.get(r);if(!n)return;let o=this.replace(n.text);return this.chapterCache.set(r,o),o}getToc(){return this.toc}getCoverImage(){if(this.resourceCache.has("cover"))return this.resourceCache.get("cover");let e=this.mobiFile.getCoverImage(),r="";return e&&(r=ti(e.raw,e.type,"cover",this.resourceSaveDir),this.resourceCache.set("cover",r)),r}getMetadata(){return this.mobiFile.getMetadata()}async innerLoadFile(){this.fileArrayBuffer=await gu(this.file),this.mobiFile=new ri(this.fileArrayBuffer,this.fileName)}async innerInit(){let{palmdocHeader:e}=this.mobiFile,r=[];for(let _=0;_<e.numTextRecords;_++)r.push(this.mobiFile.loadTextBuffer(_));let n=qo(r),o=Array.from(n,_=>String.fromCharCode(_)).join(""),a=[],i=new Map,s=0,l=Array.from(o.matchAll(Yg));l.unshift({index:0,input:"",groups:void 0,0:""});for(let _=0;_<l.length;_++){let k=l[_],x=k.index,T=k[0],R=l[_+1]?.index,A=o.slice(x+T.length,R),P=Uint8Array.from(A,D=>D.charCodeAt(0)),C=this.mobiFile.decode(P.buffer),E={id:String(s),text:C,start:x,end:R,size:P.length};a.push(E),i.set(s,E),s++}let d=a[a.length-1].text;a[a.length-1].text=d.slice(0,d.indexOf("</body>"));let u=a[0].text,g=u.indexOf("<body>");a[0].text=u.slice(g+6),this.chapters=a,this.idToChapter=i;let f=u.slice(0,g),p=this.findTocChapter(f);if(p){let _=`<wrapper>${p.text.replace(/filepos=(\d+)/gi,'filepos="$1"')}</wrapper>`,k=await au(_,{preserveChildrenOrder:!0,explicitChildren:!0,childkey:"children"}),x=[];this.parseNavMap(k.wrapper.children,x),this.toc=x}}findTocChapter(e){let r=/<reference.*\/>/g,n=e.match(r),o=/type="(.+?)"/,a=/filepos=(.*)/;if(n)for(let i of n){let s=i.match(o)?.[1].trim(),l=i.match(a)?.[1].trim();if(s==="toc"&&l){let d=Number.parseInt(l,10);return this.chapters.find(g=>g.end>d)}}}parseNavMap(e,r){for(let n of e){let o=n["#name"];if(o==="p"||o==="blockquote"){let a={label:"",href:""};if(n.a){let i=n.a[0],s=i._,l=Number(i.$.filepos);a={label:s,href:`filepos:${l}`},r.push(a)}(n.p||n.blockquote)&&(a.children=[],this.parseNavMap(n.children,a.children))}}}loadResource(e){if(this.resourceCache.has(String(e)))return this.resourceCache.get(String(e));let{type:r,raw:n}=this.mobiFile.loadResource(e-1),o=ti(n,r,String(e),this.resourceSaveDir);return this.resourceCache.set(String(e),o),o}replace(e){return e=e.replace(/<img[^>]*>/g,r=>{let n=r.match(this.recindexReg)[1],o=this.loadResource(Number.parseInt(n));return r.replace(this.recindexReg,`src="${o}"`)}),e=e.replace(/<(video|audio)[^>]*>/g,r=>{let n=r.match(this.recindexReg)[1],o=this.loadResource(Number.parseInt(n));r=r.replace(this.mediarecindexReg,`src="${o}"`);let a=r.match(this.recindexReg)?.[1];if(a){let i=this.loadResource(Number.parseInt(a));r=r.replace(this.recindexReg,`poster="${i}"`)}return r}),e=e.replace(/<a[^>]*>/g,r=>{let n=r.match(this.fileposReg);if(!n)return r;let o=n[1];return r.replace(this.fileposReg,`href="filepos:${o}"`)}),{html:e,css:[]}}resolveHref(e){let r=e.match(/filepos:(\d+)/);if(!r)return;let n=r[1],o=Number(n),a=this.chapters.find(i=>i.end>o);if(a)return{id:a.id,selector:`[id="filepos:${n}"]`}}destroy(){this.resourceCache.forEach(e=>{URL.revokeObjectURL(e)}),this.resourceCache.clear()}}});function ni(t,e,r){let n="";for(let o=0;o<r;o+=1){let a=t[e+o]??0;n+=a>=32&&a<127?String.fromCharCode(a):""}return n}function Xo(t,e){return(t[e]??0)<<8|(t[e+1]??0)}function xu(t,e){return(t[e]??0)*16777216+((t[e+1]??0)<<16|(t[e+2]??0)<<8|(t[e+3]??0))>>>0}function tn(t,e){return(t[e+3]??0)*16777216+((t[e+2]??0)<<16|(t[e+1]??0)<<8|(t[e]??0))>>>0}function sm(t){if(t.length<86)throw new Error("\u6587\u4EF6\u592A\u5C0F\uFF0C\u4E0D\u662F\u6709\u6548\u7684 MOBI/PalmDOC \u6587\u4EF6\u3002");let e=ni(t,60,4).trim(),r=ni(t,64,4).trim(),n=`${e}${r}`;if(n!=="BOOKMOBI"&&n!=="TEXtREAd")throw new Error("\u6587\u4EF6\u4E0D\u662F MOBI/PalmDOC \u683C\u5F0F\uFF08\u7F3A\u5C11 PDB \u6587\u4EF6\u5934\uFF09\u3002");let o=Xo(t,76);if(o<1)throw new Error("MOBI \u8BB0\u5F55\u8868\u4E3A\u7A7A\u3002");if(78+o*8+2>t.length)throw new Error("MOBI \u8BB0\u5F55\u8868\u5DF2\u635F\u574F\u3002");let a=[];for(let k=0;k<o;k+=1){let x=xu(t,78+k*8);if(x<78||x>=t.length)throw new Error("MOBI \u8BB0\u5F55\u504F\u79FB\u65E0\u6548\uFF0C\u6587\u4EF6\u53EF\u80FD\u5DF2\u635F\u574F\u3002");if(a.length>0&&x<a[a.length-1])throw new Error("MOBI \u8BB0\u5F55\u987A\u5E8F\u65E0\u6548\u3002");a.push(x)}let i=a[0];if(i+16>t.length)throw new Error("MOBI \u6587\u4EF6\u5934\u5DF2\u635F\u574F\u3002");let s=Xo(t,i),l=xu(t,i+4),d=Xo(t,i+8),u=Xo(t,i+10),g=Xo(t,i+12);if(g!==0)throw new Error("\u8BE5 MOBI \u6587\u4EF6\u53D7 DRM \u4FDD\u62A4\uFF0C\u65E0\u6CD5\u6253\u5F00\u3002");if(![im,1,wu,Ds].includes(s))throw new Error(`\u4E0D\u652F\u6301\u7684 MOBI \u538B\u7F29\u65B9\u5F0F\uFF08${s}\uFF09\u3002`);let f=0,p=65001,_=!1;return n==="BOOKMOBI"&&ni(t,i+16,4)==="MOBI"&&(f=tn(t,i+36),p=tn(t,i+28)||65001,_=f===8),{pdbType:n,numRecords:o,offsets:a,compression:s,textLength:l,recordCount:d,recordSize:u,encryption:g,version:f,encoding:p,isKf8:_}}function lm(t,e,r){let n=e[r];if(n==null)return null;let o=e[r+1]??t.length;return o<=n?new Uint8Array(0):t.subarray(n,o)}function cm(t){let e=t instanceof Uint8Array?t:new Uint8Array(t),r=[],n=0;for(;n<e.length;){let o=e[n];if(n+=1,o===0)r.push(0);else if(o<=8)for(let a=0;a<o&&n<e.length;a+=1)r.push(e[n]),n+=1;else if(o<=127)r.push(o);else if(o<=191){if(n>=e.length)break;let a=o<<8|e[n];n+=1;let i=a>>3&2047,s=(a&7)+3,l=r.length-i;for(let d=0;d<s;d+=1)r.push(l+d>=0?r[l+d]:0)}else r.push(32),r.push(o^128)}return Uint8Array.from(r)}function dm(t){let e=0;for(let o of t)e+=o.length;let r=new Uint8Array(e),n=0;for(let o of t)r.set(o,n),n+=o.length;return r}function Ls(t,e){let r=[];e&&r.push(e),r.push("utf-8","gb18030","windows-1252");for(let n of r)try{return new TextDecoder(n,{fatal:!0}).decode(t)}catch{}return new TextDecoder("utf-8").decode(t)}function um(t,e){let r=e.recordCount>0?e.recordCount:e.numRecords-1,n=[];for(let a=1;a<=r;a+=1){let i=lm(t,e.offsets,a);if(!i)break;if(e.compression===Ds)throw new Error("\u8BE5 MOBI \u4F7F\u7528 HUFF/CDIC \u538B\u7F29\uFF0C\u5185\u7F6E\u89E3\u6790\u5668\u65E0\u6CD5\u5904\u7406\u3002");n.push(e.compression===wu?cm(i):i)}if(n.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u6587\u672C\u5185\u5BB9\u3002");let o=dm(n);return e.textLength>0&&e.textLength<=o.length&&(o=o.subarray(0,e.textLength)),o}function hm(t,e){let r={title:"",author:"",language:""};if(e.pdbType!=="BOOKMOBI")return r;let n=e.offsets[0],o=ku[e.encoding]||"utf-8",a=tn(t,n+84),i=tn(t,n+88);a>0&&i>0&&n+a+i<=t.length&&(r.title=at(Ls(t.subarray(n+a,n+a+i),o)));let s=tn(t,n+20),l=tn(t,n+128),d=n+16+s;if(l&64&&ni(t,d,4)==="EXTH"&&d+12<=t.length){let u=tn(t,d+4),g=tn(t,d+8),f=Math.min(t.length,d+u,d+12+g*8+4096),p=d+12;for(let _=0;_<g&&p+8<=f;_+=1){let k=tn(t,p),x=tn(t,p+4);if(x<8||p+x>t.length)break;let T=t.subarray(p+8,p+x),R=at(Ls(T,o));k===100&&R&&!r.author?r.author=R:k===503&&R?r.title=R:k===524&&R&&!r.language&&(r.language=R),p+=x}}return r}function vu(t,e){if(!Number.isFinite(e)||e<0)return null;for(let r=0;r<t.length;r+=1){let n=Number(t[r]?.start),o=Number(t[r]?.end);if(Number.isFinite(n)&&Number.isFinite(o)&&e>=n&&e<o)return r}for(let r=0;r<t.length;r+=1){let n=Number(t[r]?.start);if(Number.isFinite(n)&&n>e)return r}return t.length>0?t.length-1:null}function yu(t){let e=String(t||"");return e.startsWith("#")?e.slice(1):""}function fm(t,e,{fileName:r,tracker:n,warn:o}){let a={};try{a=t.getMetadata()||{}}catch{a={}}let i=[];try{i=t.getSpine()||[]}catch{i=[]}if(!Array.isArray(i)||i.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u9605\u8BFB\u987A\u5E8F\u3002");let s=new Map;i.forEach((E,D)=>{E?.id!=null&&s.set(String(E.id),D)});let l=0,d=()=>`b${l+=1}`,u=E=>{let D=String(E||"").trim();if(!D)return null;if(/^blob:/i.test(D))return n.add(D),{src:D};if(/^data:/i.test(D)){let L=bn(D);return L?{src:n.create(L)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684 MOBI \u5185\u5D4C\u56FE\u7247\u3002"),null)}return/^(https?:)?\/\//i.test(D)?(o("\u5DF2\u8DF3\u8FC7 MOBI \u4E2D\u7684\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\u3002"),null):(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u6790\u7684 MOBI \u56FE\u7247\u3002"),null)},g=E=>D=>{let L=String(D||"").trim();if(!L)return null;if(/^(https?:|mailto:)/i.test(L))return{external:!0,href:L};if(L.startsWith("#"))return{chapter:E,anchor:L.slice(1)};if(L.startsWith("//")||/^(?!filepos:|kindle:)[a-z][a-z0-9+.-]*:/i.test(L))return null;try{let N=t.resolveHref(L);if(N?.id!=null){let F=s.get(String(N.id));if(F!=null){let J=yu(N.selector);return J?{chapter:F,anchor:J}:{chapter:F}}}}catch{}let m=/filepos:(\d+)/i.exec(L);if(m){let N=vu(i,Number(m[1]));if(N!=null)return{chapter:N}}return null},f=[];for(let E=0;E<i.length;E+=1){let D="";try{D=t.loadChapter(i[E].id)?.html||""}catch{o(`\u7B2C ${E+1} \u7AE0\u52A0\u8F7D\u5931\u8D25\uFF0C\u5DF2\u8DF3\u8FC7\u8BE5\u7AE0\u5185\u5BB9\u3002`)}let L=[];if(D){let m=Yr(D),N=m?.body||m?.documentElement||null;N&&(L=Bn(N,{nextId:d,warn:o,chapterIndex:E,resolveImage:u,resolveLink:g(E)}))}f.push({id:`ch${E}`,title:"",blocks:L})}let p=[],_=(E,D)=>{if(Array.isArray(E))for(let L of E){if(!L)continue;let m=at(L.label||L.title||"").slice(0,200),N=String(L.href||""),F=null,J="";if(N){try{let se=t.resolveHref(N);if(se?.id!=null){let ne=s.get(String(se.id));ne!=null&&(F=ne,J=yu(se.selector))}}catch{}if(F==null){let se=/filepos:(\d+)/i.exec(N);se&&(F=vu(i,Number(se[1])))}}m&&F!=null&&p.push({title:m,chapterIndex:F,depth:D,...J?{anchor:J}:{}}),_(L.children,D+1)}};try{_(t.getToc?.()||[],0)}catch{o("MOBI \u76EE\u5F55\u8BFB\u53D6\u5931\u8D25\uFF0C\u5DF2\u6309\u7AE0\u8282\u6807\u9898\u751F\u6210\u76EE\u5F55\u3002")}let k=Ho(f,p),x=at(a.title||"")||Hn(r),R=(Array.isArray(a.author)?a.author:[a.author]).map(E=>at(E||"")).filter(Boolean).join(", "),A="";try{let E=t.getCoverImage();E&&(n.add(E),A=E)}catch{}let P={title:x,chapters:f,toc:k};R&&(P.author=R);let C=at(a.language||"");return C&&(P.language=C),A&&(P.cover=A),P}function pm(t){return String(t||"").split(/<\s*(?:mbp:)?pagebreak[^>]*>/gi)}function gm(t,e,{fileName:r,warn:n}){if(e.compression===Ds)throw new Error("\u8BE5 MOBI \u6587\u4EF6\u4F7F\u7528 HUFF/CDIC \u538B\u7F29\uFF0C\u5185\u7F6E\u89E3\u6790\u5668\u65E0\u6CD5\u5904\u7406\u3002");let o=hm(t,e),a=um(t,e),i=mm(e.encoding),s=Ls(a,i),l=o.title||Hn(r),d=0,u=()=>`b${d+=1}`,g=/<\s*(?:html|body|p|div|h[1-6]|br)\b/i.test(s),f;if(g){let k=pm(s),x=new TextEncoder,T=[],R=0;for(let A of k){let P=x.encode(A).length;T.push({start:R,end:R+P}),R+=P}f=[],k.forEach((A,P)=>{if(!A.trim())return;let C=Yr(A),E=C?.body||C?.documentElement||null,D=f.length,L=E?Bn(E,{nextId:u,warn:n,chapterIndex:D,resolveImage:()=>(n("\u5185\u7F6E MOBI \u89E3\u6790\u5668\u65E0\u6CD5\u63D0\u53D6\u56FE\u7247\u8D44\u6E90\u3002"),null),resolveLink:m=>{let N=String(m||"").trim();if(!N)return null;if(/^(https?:|mailto:)/i.test(N))return{external:!0,href:N};if(N.startsWith("#"))return{chapter:D,anchor:N.slice(1)};let F=/filepos:(\d+)/i.exec(N);if(F){let J=Number(F[1]);for(let se=0;se<T.length;se+=1)if(J>=T[se].start&&J<T[se].end){let ne=k.slice(0,se).filter(oe=>oe.trim()).length;return ne<f.length?{chapter:ne}:null}}return null}}):[];f.push({id:`ch${D}`,title:"",blocks:L})})}else f=Ss(s,{nextId:u,title:l});if(!f||f.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let p=Ho(f,[]),_={title:l,chapters:f,toc:p};return o.author&&(_.author=o.author),o.language&&(_.language=o.language),_}function mm(t){return ku[t]||""}async function go(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Qr(),a=mn(),i=null;try{let s=await Zr(t),l=sm(s);if(l.pdbType==="BOOKMOBI"){let u=l.isKf8||/^(azw3?|kf8)$/i.test(String(r).split(".").pop()||"");try{i=u?await Ps(s):await Os(s)}catch{try{i=u?await Os(s):await Ps(s)}catch{i=null}i||o("MOBI \u89E3\u6790\u5E93\u65E0\u6CD5\u6253\u5F00\u8BE5\u6587\u4EF6\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\uFF08\u53EF\u80FD\u7F3A\u5C11\u56FE\u7247\u4E0E\u76EE\u5F55\u4FE1\u606F\uFF09\u3002")}if(i)try{let g=i.getSpine?.()||[];(!Array.isArray(g)||g.length===0)&&(i.destroy?.(),i=null,o("MOBI \u9605\u8BFB\u987A\u5E8F\u4E3A\u7A7A\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\u3002"))}catch{i.destroy?.(),i=null,o("MOBI \u89E3\u6790\u5E93\u8FD4\u56DE\u5F02\u5E38\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\u3002")}}return{...i?fm(i,l,{fileName:r,tracker:a,warn:o}):gm(s,l,{fileName:r,warn:o}),warnings:n,dispose:()=>{try{i?.destroy?.()}catch{}a.dispose()}}}catch(s){try{i?.destroy?.()}catch{}throw a.dispose(),kr(s,"\u65E0\u6CD5\u89E3\u6790 MOBI \u6587\u4EF6")}}var im,wu,Ds,ku,_u=lr(()=>{bu();Dn();zo();Va();Un();im=0,wu=2,Ds=17480,ku={65001:"utf-8",65e3:"utf-7",1250:"windows-1250",1251:"windows-1251",1252:"windows-1252",932:"shift_jis",936:"gb18030",949:"euc-kr",950:"big5"}});var zs={};Ys(zs,{extensionOf:()=>qa,parseBook:()=>wm});function vm(t){let e=t?`\u201C.${t}\u201D`:"\u8BE5\u6587\u4EF6";return new Error(`\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u683C\u5F0F\uFF1A${e}\u3002\u76EE\u524D\u652F\u6301 ${xm}\u3002`)}function Fs(){return new Error("PDF \u6587\u4EF6\u8BF7\u4F7F\u7528 PDF \u9605\u8BFB\u6A21\u5F0F\u6253\u5F00\uFF08PDF \u7531\u72EC\u7ACB\u7684\u9605\u8BFB\u5668\u5904\u7406\uFF09\u3002")}async function ym(t){let e;try{e=new Uint8Array(await t.slice(0,256).arrayBuffer())}catch{return null}if(e.length>=8){if(String.fromCharCode(...e.subarray(0,4))==="%PDF")return"pdf";if(e[0]===80&&e[1]===75)return"epub";let o="";for(let a=60;a<68;a+=1){let i=e[a]??0;o+=i>=32&&i<127?String.fromCharCode(i):" "}if(o==="BOOKMOBI"||o==="TEXtREAd")return"mobi"}let r=new TextDecoder("utf-8").decode(e.subarray(0,Math.min(e.length,200)));return/^\s*(?:<!doctype\s+html|<html|<head|<body)/i.test(r)?"html":Xa(r)?null:"txt"}async function wm(t,e={}){let r=typeof e.fileName=="string"?e.fileName:"",n=typeof e.mime=="string"?e.mime:"",o=qa(r);if(o==="pdf")throw Fs();let a=zr[o]||null;if(!a){let i=n.toLowerCase().split(";")[0].trim();if(i==="application/pdf")throw Fs();a=bm[i]||null}if(!a&&!o){let i=await ym(t);if(i==="pdf")throw Fs();a=i&&zr[i]||null}if(!a)throw vm(o);try{let i=await a.parse(t,{fileName:r,mime:n});return{...i,title:i.title||Hn(r),format:a.format,warnings:Array.isArray(i.warnings)?i.warnings:[]}}catch(i){throw kr(i,"\u65E0\u6CD5\u6253\u5F00\u6587\u6863")}}var zr,bm,xm,Bs=lr(()=>{Od();Ld();$d();_u();Va();Un();zr={epub:{parse:Pd,format:"epub"},mobi:{parse:go,format:"mobi"},prc:{parse:go,format:"mobi"},azw:{parse:go,format:"mobi"},azw3:{parse:go,format:"mobi"},kf8:{parse:go,format:"mobi"},txt:{parse:Es,format:"txt"},text:{parse:Es,format:"txt"},md:{parse:jo,format:"md"},markdown:{parse:jo,format:"md"},mdown:{parse:jo,format:"md"},mkd:{parse:jo,format:"md"},html:{parse:Uo,format:"html"},htm:{parse:Uo,format:"html"},xhtml:{parse:Uo,format:"html"},xht:{parse:Uo,format:"html"}},bm={"application/epub+zip":zr.epub,"application/x-mobipocket-ebook":zr.mobi,"application/x-mobi":zr.mobi,"application/vnd.amazon.ebook":zr.mobi,"text/plain":zr.txt,"text/markdown":zr.md,"text/x-markdown":zr.md,"text/html":zr.html,"application/xhtml+xml":zr.html},xm="EPUB\u3001MOBI/KF8\u3001TXT\u3001Markdown \u548C HTML"});var Lm={};Ys(Lm,{PANEL_ID:()=>js,apply:()=>Om,inject:()=>Mm,name:()=>Rm});module.exports=Zu(Lm);var Yx=require("react");var H=Mt(require("react"),1);var Sn=Mt(require("react"),1);var Fm=require("react"),U=require("react/jsx-runtime");function nt({size:t=18,children:e,viewBox:r="0 0 24 24",fill:n="none",strokeWidth:o=1.7,...a}){return(0,U.jsx)("svg",{width:t,height:t,viewBox:r,fill:n,stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",...a,children:e})}function Qs(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5Z"}),(0,U.jsx)("path",{d:"M4 18.5A2.5 2.5 0 0 1 6.5 16H20"}),(0,U.jsx)("path",{d:"M8 7h8M8 10.5h5"})]})}function hi(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M12 6.5C10.6 5.2 8.7 4.6 6.5 4.6H3v13h3.9c2 0 3.8.6 5.1 1.8 1.3-1.2 3.1-1.8 5.1-1.8H21v-13h-3.5c-2.2 0-4.1.6-5.5 1.9Z"}),(0,U.jsx)("path",{d:"M12 6.5v12.9"})]})}function Js(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M19 12H5"}),(0,U.jsx)("path",{d:"m11 18-6-6 6-6"})]})}function el(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M12 16V4"}),(0,U.jsx)("path",{d:"m7 9 5-5 5 5"}),(0,U.jsx)("path",{d:"M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15"})]})}function fi(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("circle",{cx:"11",cy:"11",r:"7"}),(0,U.jsx)("path",{d:"m20 20-3.6-3.6"})]})}function hn(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"m12 3 1.5 4.2L18 9l-4.5 1.8L12 15l-1.5-4.2L6 9l4.5-1.8L12 3Z"}),(0,U.jsx)("path",{d:"m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"}),(0,U.jsx)("path",{d:"m5 13 .7 1.8L7.5 15.5l-1.8.7L5 18l-.7-1.8L2.5 15.5l1.8-.7L5 13Z"})]})}function Vn(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M4 5h8M8 3v2c0 4.2-1.8 7.2-5 9"}),(0,U.jsx)("path",{d:"M5 10c1.8 2.2 4 3.6 6.8 4.4"}),(0,U.jsx)("path",{d:"m13 20 3.6-9L20 20"}),(0,U.jsx)("path",{d:"M14.6 16.8h4.8"})]})}function gr(t){return(0,U.jsx)(nt,{...t,children:(0,U.jsx)("path",{d:"m6 6 12 12M18 6 6 18"})})}function ta(t){return(0,U.jsx)(nt,{...t,children:(0,U.jsx)("path",{d:"m15 18-6-6 6-6"})})}function ra(t){return(0,U.jsx)(nt,{...t,children:(0,U.jsx)("path",{d:"m9 18 6-6-6-6"})})}function pi(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M8 6h12M8 12h12M8 18h12"}),(0,U.jsx)("path",{d:"M4 6h.01M4 12h.01M4 18h.01"})]})}function na(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("circle",{cx:"12",cy:"12",r:"3.2"}),(0,U.jsx)("path",{d:"M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"})]})}function Kn(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M4 7h16M9 7V5h6v2M7 7l.7 12.2A1.8 1.8 0 0 0 9.5 21h5a1.8 1.8 0 0 0 1.8-1.8L17 7"}),(0,U.jsx)("path",{d:"M10 11v6M14 11v6"})]})}function tl(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),(0,U.jsx)("path",{d:"M5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V5"})]})}function oa(t){return(0,U.jsx)(nt,{...t,children:(0,U.jsx)("path",{d:"M12 5v14M5 12h14"})})}function rl(t){return(0,U.jsx)(nt,{...t,children:(0,U.jsx)("path",{d:"M5 12h14"})})}function nl(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M20 11a8 8 0 1 0-2.3 6.3"}),(0,U.jsx)("path",{d:"M20 4v7h-7"})]})}function ol(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M14 4h6v6M20 4l-9 9"}),(0,U.jsx)("path",{d:"M19 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"})]})}function aa({size:t=18}){return(0,U.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[(0,U.jsx)("path",{fill:"#4285F4",d:"M22.6 12.23c0-.78-.07-1.53-.2-2.25H12v4.26h5.94a5.08 5.08 0 0 1-2.2 3.33v2.77h3.56c2.08-1.92 3.3-4.74 3.3-8.11Z"}),(0,U.jsx)("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.77c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"}),(0,U.jsx)("path",{fill:"#FBBC05",d:"M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"}),(0,U.jsx)("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.2 1.64l3.15-3.15A10.97 10.97 0 0 0 12 1 11 11 0 0 0 2.18 7.06L5.84 9.9C6.71 7.3 9.14 5.38 12 5.38Z"})]})}function ia({size:t=18}){return(0,U.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[(0,U.jsx)("path",{fill:"currentColor",d:"M12 3 1.5 8.5 12 14l8.6-4.5v6.2h1.9V8.5L12 3Z",opacity:".9"}),(0,U.jsx)("path",{fill:"currentColor",d:"M6.2 11.4v4.1c0 2.2 2.6 4 5.8 4s5.8-1.8 5.8-4v-4.1L12 14.4l-5.8-3Z",opacity:".65"})]})}function al(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"m15 4 1 2.2L18.2 7 16 8 15 10.2 14 8l-2.2-1L14 6.2 15 4Z"}),(0,U.jsx)("path",{d:"m5 19 8.5-8.5"}),(0,U.jsx)("path",{d:"m4 14 6 6"})]})}function il(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M20 13 13 20a2 2 0 0 1-2.8 0L3 12.8V3h9.8L20 10.2a2 2 0 0 1 0 2.8Z"}),(0,U.jsx)("circle",{cx:"7.5",cy:"7.5",r:"1.2"})]})}function sa(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"m14 4 6 6-9.5 9.5H5v-5L14 4Z"}),(0,U.jsx)("path",{d:"M12 21h9"}),(0,U.jsx)("path",{d:"M14 6.5 17.5 10"})]})}function la(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M12 3a9 9 0 1 0 0 18h1.2a1.8 1.8 0 0 0 1.3-3l-.6-.7a1.6 1.6 0 0 1 1.2-2.7h1.6A4.3 4.3 0 0 0 21 10.3 7.7 7.7 0 0 0 12 3Z"}),(0,U.jsx)("circle",{cx:"7.5",cy:"11",r:"1"}),(0,U.jsx)("circle",{cx:"10",cy:"7.2",r:"1"}),(0,U.jsx)("circle",{cx:"15",cy:"7.2",r:"1"}),(0,U.jsx)("circle",{cx:"17",cy:"11",r:"1"})]})}function gi(t){return(0,U.jsx)(nt,{...t,children:(0,U.jsx)("path",{d:"M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"})})}function sl(t){return(0,U.jsx)(nt,{...t,children:(0,U.jsx)("path",{d:"M3 8h5V3M21 8h-5V3M3 16h5v5M21 16h-5v5"})})}function ca(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M12 3v12"}),(0,U.jsx)("path",{d:"m7 10 5 5 5-5"}),(0,U.jsx)("path",{d:"M4 18v2h16v-2"})]})}function ll(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"}),(0,U.jsx)("path",{d:"M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"})]})}function cl(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"}),(0,U.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})}function dl(t){return(0,U.jsxs)(nt,{...t,children:[(0,U.jsx)("path",{d:"m3 3 18 18"}),(0,U.jsx)("path",{d:"M10.6 6.1A10.7 10.7 0 0 1 12 6c6 0 9.5 6 9.5 6a16.5 16.5 0 0 1-3.2 3.7"}),(0,U.jsx)("path",{d:"M6.2 6.7C3.9 8.4 2.5 12 2.5 12S6 18 12 18c1.3 0 2.5-.3 3.5-.8"}),(0,U.jsx)("path",{d:"M9.9 9.9a3 3 0 0 0 4.2 4.2"})]})}var Qu="dsh-reader";var Ot="books",jt="annotations",zt="assets",Mr="pdfTranslations",da="reader-background",ul="dsh-reader:settings:v1";var Pt=Object.freeze({settingsVersion:2,autoTranslate:!1,hideTranslations:!1,fontSize:18,lineHeight:1.85,tocWidth:260,readingMode:"scroll",pageAnimation:"slide",bookAnimation:"slide",showToc:!0,aiOpen:!1,theme:"auto",fontFamily:"serif",fontWeight:400,contentWidth:760,brightness:1,backgroundPreset:"paper",customBackground:"#fbf7ee",textTone:"auto",backgroundImageKey:"",backgroundImageOpacity:.26,backgroundImageBlur:0,annotationPanelOpen:!1}),ua=Object.freeze([{id:"book",label:"\u4E66\u7C4D",hint:"EPUB / MOBI / TXT \u4E0E\u4E66\u7C4D\u578B PDF"},{id:"paper",label:"\u6587\u732E",hint:"\u8BBA\u6587\u3001\u62A5\u544A\u3001\u5B66\u672F PDF"},{id:"document",label:"\u6587\u6863",hint:"Markdown / HTML \u7B49\u77ED\u6587\u6863"}]),mi=new Set(ua.map(t=>t.id)),Ju=new Set(["paper","white","sepia","green","night","custom"]),eh=new Set(["serif","sans","kai","system"]),th=new Set(["scroll","book"]),rh=new Set(["slide","fade","push","flip"]),nh=new Set(["slide","cover","flip"]),oh=new Set([400,500,600]),ah=new Set(["auto","dark","light"]);function Bt(){return new Promise((t,e)=>{if(typeof indexedDB>"u"){e(new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 IndexedDB\uFF0C\u65E0\u6CD5\u4FDD\u5B58\u4E66\u67B6\u3002"));return}let r=indexedDB.open(Qu,3);r.onupgradeneeded=()=>{let n=r.result;n.objectStoreNames.contains(Ot)||n.createObjectStore(Ot,{keyPath:"id"}).createIndex("lastOpenedAt","lastOpenedAt"),n.objectStoreNames.contains(jt)||n.createObjectStore(jt,{keyPath:"id"}).createIndex("bookId","bookId"),n.objectStoreNames.contains(zt)||n.createObjectStore(zt,{keyPath:"key"}),n.objectStoreNames.contains(Mr)||n.createObjectStore(Mr,{keyPath:"key"}).createIndex("bookId","bookId")},r.onsuccess=()=>t(r.result),r.onerror=()=>e(r.error??new Error("\u6253\u5F00\u4E66\u67B6\u6570\u636E\u5E93\u5931\u8D25\u3002")),r.onblocked=()=>e(new Error("\u4E66\u67B6\u6570\u636E\u5E93\u88AB\u53E6\u4E00\u4E2A\u9875\u9762\u5360\u7528\uFF0C\u8BF7\u5173\u95ED\u5176\u5B83 DSH \u9875\u9762\u540E\u91CD\u8BD5\u3002"))})}function mr(t){return new Promise((e,r)=>{t.oncomplete=()=>e(),t.onerror=()=>r(t.error??new Error("\u4E66\u67B6\u5199\u5165\u5931\u8D25\u3002")),t.onabort=()=>r(t.error??new Error("\u4E66\u67B6\u5199\u5165\u5DF2\u53D6\u6D88\u3002"))})}function Tn(t){let e=/\.([^./\\]+)$/u.exec(String(t??""));return e?e[1].toLowerCase():""}function Yn(t){switch(t){case"pdf":return"PDF";case"epub":return"EPUB";case"mobi":return"MOBI";case"azw":return"AZW";case"azw3":return"AZW3";case"txt":return"TXT";case"md":return"Markdown";case"html":return"HTML";default:return String(t??"\u6587\u4EF6").toUpperCase()}}function Zn(t){return ua.find(e=>e.id===t)?.label??"\u672A\u5206\u7C7B"}function bi(t){return["pdf","epub","mobi","azw","azw3","txt","md","markdown","html","htm"].includes(Tn(t))}function ih(t){let e=String(t??"");return e.length===0?0:(e.match(/[\u3400-\u9fff\uf900-\ufaff]/gu)??[]).length/e.length}function xi(t={}){let e=String(t.format||Tn(t.title)||"").toLowerCase(),r=`${t.title||""} ${t.author||""}`;return e==="pdf"?/(?:^|\b)(book|novel|textbook|edition|volume|monograph|文集|全集|教材|小说|专著|丛书)(?:\b|$)/iu.test(r)||Number(t.size)>45*1024*1024?"book":"paper":["epub","mobi","azw","azw3","txt"].includes(e)?"book":"document"}async function sh(t){if(!globalThis.crypto?.subtle){let r=2166136261,n=new Uint8Array(t);for(let o=0;o<n.length;o+=1)r^=n[o],r=Math.imul(r,16777619);return(r>>>0).toString(16).padStart(8,"0")}let e=await globalThis.crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(e)].map(r=>r.toString(16).padStart(2,"0")).join("")}async function lh(t){let e=await t.slice(0,Math.min(t.size,1048576)).arrayBuffer();return`${(await sh(e)).slice(0,20)}-${t.size}-${String(t.name).replace(/[^\w.-]+/gu,"_").slice(-48)}`}async function vi(){let t=await Bt();try{let n=t.transaction(Ot,"readonly").objectStore(Ot).index("lastOpenedAt").openCursor(null,"prev"),o=[];return await new Promise((a,i)=>{n.onsuccess=()=>{let s=n.result;if(!s){a();return}let l=s.value;o.push({id:l.id,title:l.title,author:l.author,format:l.format,size:l.size,addedAt:l.addedAt,lastOpenedAt:l.lastOpenedAt,progress:l.progress??null,language:l.language??"",cover:typeof l.cover=="string"?l.cover:"",category:mi.has(l.category)?l.category:xi(l),categoryManual:!!l.categoryManual}),s.continue()},n.onerror=()=>i(n.error)}),o}finally{t.close()}}async function yo(t){let e=await Bt();try{let n=e.transaction(Ot,"readonly").objectStore(Ot).get(t);return await new Promise((o,a)=>{n.onsuccess=()=>o(n.result??null),n.onerror=()=>a(n.error)})}finally{e.close()}}async function hl(t,{title:e,author:r,language:n}={}){if(!bi(t.name))throw new Error(`\u6682\u4E0D\u652F\u6301 .${Tn(t.name)||"\u672A\u77E5"} \u6587\u4EF6\u3002\u8BF7\u9009\u62E9 PDF / EPUB / MOBI / TXT / Markdown / HTML\u3002`);if(t.size>335544320)throw new Error(`\u6587\u4EF6\u8D85\u8FC7 ${Math.round(335544320/1024/1024)} MB\uFF0C\u6D4F\u89C8\u5668\u4E66\u67B6\u65E0\u6CD5\u5BB9\u7EB3\u3002`);let o=await lh(t),a=await yo(o),i=Date.now(),s=a?.id??o,l=Tn(t.name)==="markdown"?"md":Tn(t.name),d={title:String(e??a?.title??t.name.replace(/\.[^.]+$/u,"")).trim()||"\u672A\u547D\u540D\u6587\u6863",author:String(r??a?.author??"").trim(),language:String(n??a?.language??""),format:l,size:t.size},u={id:s,...d,category:a?.category&&mi.has(a.category)?a.category:xi(d),categoryManual:!!a?.categoryManual,cover:typeof a?.cover=="string"?a.cover:"",addedAt:a?.addedAt??i,lastOpenedAt:i,progress:a?.progress??null,blob:t},g=await Bt();try{let f=g.transaction(Ot,"readwrite");return f.objectStore(Ot).put(u),await mr(f),u}catch(f){throw f?.name==="QuotaExceededError"?new Error("\u6D4F\u89C8\u5668\u5B58\u50A8\u7A7A\u95F4\u5DF2\u6EE1\uFF0C\u65E0\u6CD5\u52A0\u5165\u4E66\u67B6\u3002\u8BF7\u5220\u9664\u4E00\u4E9B\u4E66\u540E\u91CD\u8BD5\u3002"):f}finally{g.close()}}async function Qn(t,e){let r=await yo(t);if(!r)return null;let n={...r,...e},o=await Bt();try{let a=o.transaction(Ot,"readwrite");return a.objectStore(Ot).put(n),await mr(a),n}finally{o.close()}}async function fl(t,e,{manual:r=!0}={}){if(!mi.has(e))throw new Error("\u672A\u77E5\u7684\u4E66\u7C4D\u5206\u7C7B\u3002");return Qn(t,{category:e,categoryManual:r})}async function pl(){let t=await vi(),e={book:0,paper:0,document:0},r=0;for(let n of t){if(n.categoryManual){e[n.category]=(e[n.category]||0)+1;continue}let o=xi(n);e[o]=(e[o]||0)+1,o!==n.category&&(await Qn(n.id,{category:o,categoryManual:!1}),r+=1)}return{changed:r,counts:e}}async function yi(t,e){return Qn(t,{lastOpenedAt:Date.now(),...e!==void 0?{progress:e}:{}})}async function gl(t){let e=await Bt();try{let r=e.transaction([Ot,jt,Mr,zt],"readwrite");r.objectStore(Ot).delete(t),r.objectStore(zt).delete(`pdf-translation:${t}`);let n=r.objectStore(Mr).index("bookId").openKeyCursor(IDBKeyRange.only(t));n.onsuccess=()=>{let i=n.result;i&&(r.objectStore(Mr).delete(i.primaryKey),i.continue())};let a=r.objectStore(jt).index("bookId").openKeyCursor(IDBKeyRange.only(t));a.onsuccess=()=>{let i=a.result;i&&(r.objectStore(jt).delete(i.primaryKey),i.continue())},await mr(r)}finally{e.close()}}async function ml(){let t=await Bt();try{let e=t.transaction([Ot,jt,Mr,zt],"readwrite");e.objectStore(Ot).clear(),e.objectStore(jt).clear(),e.objectStore(Mr).clear();let r=e.objectStore(zt).openKeyCursor();r.onsuccess=()=>{let n=r.result;n&&(String(n.key).startsWith("pdf-translation:")&&e.objectStore(zt).delete(n.primaryKey),n.continue())},await mr(e)}finally{t.close()}}async function bl(t){let e=await Bt();try{let r=e.transaction(Mr,"readonly").objectStore(Mr).get(t);return await new Promise((n,o)=>{r.onsuccess=()=>n(r.result||null),r.onerror=()=>o(r.error)})}finally{e.close()}}async function xl(t){let e=await Bt();try{let r=e.transaction([Ot,Mr],"readwrite"),n=r.objectStore(Ot).get(t.bookId);n.onsuccess=()=>{n.result&&r.objectStore(Mr).put({...t,updatedAt:Date.now()})},await mr(r)}finally{e.close()}}async function vl(t){let e=await Bt();try{let r=e.transaction(zt,"readonly").objectStore(zt).get(`pdf-translation:${t}`);return await new Promise((n,o)=>{r.onsuccess=()=>n(r.result?.value||{}),r.onerror=()=>o(r.error)})}finally{e.close()}}async function yl(t,e){let r=await Bt();try{let n=r.transaction([Ot,zt],"readwrite"),o=n.objectStore(Ot).get(t);o.onsuccess=()=>{o.result&&n.objectStore(zt).put({key:`pdf-translation:${t}`,value:e})},await mr(n)}finally{r.close()}}function ch(t="a"){return globalThis.crypto?.randomUUID?`${t}-${crypto.randomUUID()}`:`${t}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}async function wl(t){let e=await Bt();try{let o=e.transaction(jt,"readonly").objectStore(jt).index("bookId").getAll(t);return(await new Promise((i,s)=>{o.onsuccess=()=>i(o.result??[]),o.onerror=()=>s(o.error)})).sort((i,s)=>{let l=Number.isFinite(i.page)?i.page:Number.MAX_SAFE_INTEGER,d=Number.isFinite(s.page)?s.page:Number.MAX_SAFE_INTEGER;if(l!==d)return l-d;let u=Number.isFinite(i.chapterIndex)?i.chapterIndex:Number.MAX_SAFE_INTEGER,g=Number.isFinite(s.chapterIndex)?s.chapterIndex:Number.MAX_SAFE_INTEGER;return u!==g?u-g:(i.createdAt||0)-(s.createdAt||0)})}finally{e.close()}}async function kl(t){let e=Date.now(),r={...t,id:t.id||ch(),createdAt:t.createdAt||e,updatedAt:e};if(!r.bookId)throw new Error("\u6279\u6CE8\u7F3A\u5C11\u4E66\u7C4D\u4FE1\u606F\u3002");if(!r.kind||!r.style)throw new Error("\u6279\u6CE8\u7F3A\u5C11\u7C7B\u578B\u3002");let n=await Bt();try{let o=n.transaction(jt,"readwrite");return o.objectStore(jt).put(r),await mr(o),r}finally{n.close()}}async function _l(t,e){let r=await Bt();try{let n=r.transaction(jt,"readwrite"),o=n.objectStore(jt),a=await new Promise((s,l)=>{let d=o.get(t);d.onsuccess=()=>s(d.result??null),d.onerror=()=>l(d.error)});if(!a)return await mr(n),null;let i={...a,...e,id:a.id,updatedAt:Date.now()};return o.put(i),await mr(n),i}finally{r.close()}}async function Tl(t){let e=await Bt();try{let r=e.transaction(jt,"readwrite");r.objectStore(jt).delete(t),await mr(r)}finally{e.close()}}async function Sl(t){if(!t||!t.size)throw new Error("\u80CC\u666F\u56FE\u7247\u4E3A\u7A7A\u3002");if(t.size>16777216)throw new Error(`\u80CC\u666F\u56FE\u7247\u8D85\u8FC7 ${Math.round(16777216/1024/1024)} MB\uFF0C\u8BF7\u9009\u62E9\u66F4\u5C0F\u7684\u56FE\u7247\u3002`);let e=await Bt();try{let r=e.transaction(zt,"readwrite");return r.objectStore(zt).put({key:da,blob:t,type:t.type||"image/*",size:t.size,updatedAt:Date.now()}),await mr(r),da}finally{e.close()}}async function El(){let t=await Bt();try{let r=t.transaction(zt,"readonly").objectStore(zt).get(da);return(await new Promise((o,a)=>{r.onsuccess=()=>o(r.result??null),r.onerror=()=>a(r.error)}))?.blob??null}finally{t.close()}}async function Al(){let t=await Bt();try{let e=t.transaction(zt,"readwrite");e.objectStore(zt).delete(da),await mr(e)}finally{t.close()}}function _n(t,e,r,n){let o=Number(t);return Number.isFinite(o)?Math.max(e,Math.min(r,o)):n}function dh(t,e){return/^#[0-9a-f]{6}$/iu.test(String(t))?String(t):e}function Nl(){try{let t=localStorage.getItem(ul);if(!t)return{...Pt};let e=JSON.parse(t),n=(Number(e.settingsVersion)||1)>=2&&typeof e.autoTranslate=="boolean"?e.autoTranslate:!1;return{...Pt,...e,settingsVersion:2,autoTranslate:n,hideTranslations:!!e.hideTranslations,fontSize:_n(e.fontSize,13,34,Pt.fontSize),lineHeight:_n(e.lineHeight,1.35,2.4,Pt.lineHeight),tocWidth:_n(e.tocWidth,180,520,Pt.tocWidth),readingMode:e.readingMode==="page"?"book":th.has(e.readingMode)?e.readingMode:Pt.readingMode,pageAnimation:rh.has(e.pageAnimation)?e.pageAnimation:Pt.pageAnimation,bookAnimation:nh.has(e.bookAnimation)?e.bookAnimation:Pt.bookAnimation,fontFamily:eh.has(e.fontFamily)?e.fontFamily:Pt.fontFamily,fontWeight:oh.has(Number(e.fontWeight))?Number(e.fontWeight):Pt.fontWeight,contentWidth:_n(e.contentWidth,520,1600,Pt.contentWidth),brightness:_n(e.brightness,.6,1.2,Pt.brightness),backgroundPreset:Ju.has(e.backgroundPreset)?e.backgroundPreset:Pt.backgroundPreset,customBackground:dh(e.customBackground,Pt.customBackground),textTone:ah.has(e.textTone)?e.textTone:Pt.textTone,backgroundImageKey:typeof e.backgroundImageKey=="string"?e.backgroundImageKey:"",backgroundImageOpacity:_n(e.backgroundImageOpacity,0,.85,Pt.backgroundImageOpacity),backgroundImageBlur:_n(e.backgroundImageBlur,0,12,Pt.backgroundImageBlur),annotationPanelOpen:!!e.annotationPanelOpen}}catch{return{...Pt}}}function Cl(t){try{localStorage.setItem(ul,JSON.stringify(t))}catch{}}function Il(t){let e=Number(t)||0;return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:e<1024*1024*1024?`${(e/1024/1024).toFixed(1)} MB`:`${(e/1024/1024/1024).toFixed(2)} GB`}function wi(t){if(!t)return"";let e=Date.now()-Number(t);return e<6e4?"\u521A\u521A":e<36e5?`${Math.floor(e/6e4)} \u5206\u949F\u524D`:e<864e5?`${Math.floor(e/36e5)} \u5C0F\u65F6\u524D`:e<7*864e5?`${Math.floor(e/864e5)} \u5929\u524D`:new Date(t).toLocaleDateString("zh-CN")}function Rl(t){let e=String(t??"").replace(/\s+/gu,"");if(e.length<40)return!1;let r=ih(e),n=(e.match(/[A-Za-zÀ-ÖØ-öø-ÿ\u0400-\u04ff]/gu)??[]).length/e.length;return r<.18&&n>.45}var Z=require("react/jsx-runtime");function Ml(t){let e=t.progress;return e?typeof e.page=="number"&&typeof e.pages=="number"&&e.pages>0?Math.max(0,Math.min(100,e.page/e.pages*100)):typeof e.percent=="number"?Math.max(0,Math.min(100,e.percent)):typeof e.chapter=="number"&&typeof e.chapters=="number"&&e.chapters>0?Math.max(0,Math.min(100,(e.chapter+1)/e.chapters*100)):0:0}var uh={book:"paper",paper:"document",document:"book"};function hh({book:t,onOpen:e,onDelete:r,onCycleCategory:n}){let o=Ml(t),a=[Yn(t.format),t.author||"",Il(t.size)].filter(Boolean).join(" \xB7 ");return(0,Z.jsxs)("div",{className:"dshr-book",role:"button",tabIndex:0,onClick:()=>e(t),onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),e(t))},children:[(0,Z.jsx)("div",{className:"dshr-book__media",children:t.cover?(0,Z.jsx)("img",{className:"dshr-book__cover",src:t.cover,alt:`${t.title||"\u6587\u6863"}\u5C01\u9762`,loading:"lazy"}):(0,Z.jsx)("div",{className:"dshr-book__spine",children:Yn(t.format)})}),(0,Z.jsxs)("div",{className:"dshr-book__body",children:[(0,Z.jsx)("div",{className:"dshr-book__title",children:t.title||"\u672A\u547D\u540D\u6587\u6863"}),(0,Z.jsx)("div",{className:"dshr-book__meta",children:a}),(0,Z.jsxs)("div",{className:"dshr-book__foot",children:[(0,Z.jsx)("span",{children:t.lastOpenedAt?`\u9605\u8BFB\u4E8E ${wi(t.lastOpenedAt)}`:wi(t.addedAt)}),(0,Z.jsx)("span",{children:o>0?`${Math.round(o)}%`:"\u672A\u5F00\u59CB"})]}),(0,Z.jsx)("div",{className:"dshr-book__progress","aria-hidden":"true",children:(0,Z.jsx)("i",{style:{"--p":`${o}%`}})})]}),(0,Z.jsxs)("div",{className:"dshr-book__badges",children:[(0,Z.jsxs)("button",{type:"button",className:`dshr-book__category is-${t.category||"document"}`,title:`\u5206\u7C7B\uFF1A${Zn(t.category)}${t.categoryManual?"\uFF08\u624B\u52A8\uFF09":"\uFF08\u81EA\u52A8\uFF09"} \xB7 \u70B9\u51FB\u5207\u6362`,onClick:i=>{i.stopPropagation(),n(t)},children:[(0,Z.jsx)(il,{size:11})," ",Zn(t.category)]}),(0,Z.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost dshr-book__delete","aria-label":`\u4ECE\u4E66\u67B6\u5220\u9664 ${t.title||"\u8FD9\u672C\u4E66"}`,title:"\u4ECE\u4E66\u67B6\u5220\u9664",onClick:i=>{i.stopPropagation(),r(t)},children:(0,Z.jsx)(Kn,{size:14})})]})]})}function Pl({books:t,loading:e,resumeBook:r,onResume:n,importing:o,organizing:a,categoryFilter:i,onCategoryFilter:s,onAutoOrganize:l,onImport:d,onOpen:u,onDelete:g,onCycleCategory:f,onSettings:p,onOnlineImport:_}){let k=Sn.default.useRef(null),[x,T]=Sn.default.useState(!1),[R,A]=Sn.default.useState(""),P=Sn.default.useRef(0),C=Sn.default.useMemo(()=>{let m={all:t.length,book:0,paper:0,document:0};for(let N of t)m[N.category]=(m[N.category]||0)+1;return m},[t]),E=Sn.default.useMemo(()=>{let m=R.trim().toLowerCase();return t.filter(N=>i!=="all"&&N.category!==i?!1:m?`${N.title} ${N.author||""}`.toLowerCase().includes(m):!0)},[t,i,R]),D=()=>k.current?.click(),L=m=>{m.preventDefault(),P.current=0,T(!1);let N=[...m.dataTransfer?.files??[]].filter(F=>bi(F.name));if(N.length===0){d([],{rejected:!0});return}d(N)};return(0,Z.jsxs)("div",{className:"dshr-library",children:[(0,Z.jsxs)("div",{className:"dshr-library__inner",children:[(0,Z.jsxs)("header",{className:"dshr-hero",children:[(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("div",{className:"dshr-hero__eyebrow",children:[(0,Z.jsx)(hi,{size:15})," DSH READER \xB7 LIBRARY"]}),(0,Z.jsx)("h1",{children:"\u4F60\u7684\u8DE8\u8BED\u8A00\u9605\u8BFB\u52A9\u624B"}),(0,Z.jsx)("p",{children:"PDF\u3001EPUB\u3001MOBI\u3001TXT \u90FD\u80FD\u5728\u8FD9\u91CC\u6253\u5F00\u3002\u81EA\u52A8\u6574\u7406\u6210\u4E66\u7C4D\u4E0E\u6587\u732E\u4E66\u5355\uFF0C \u8BFB\u5230\u5916\u6587\u65F6\u5B9E\u65F6\u5BF9\u7167\u4E2D\u6587\uFF1B\u9009\u4E2D\u6587\u5B57\u5373\u53EF\u7FFB\u8BD1\u3001\u95EE AI \u6216\u8DF3\u8F6C Google \u641C\u7D22\u3002"})]}),(0,Z.jsxs)("div",{className:"dshr-hero__actions",children:[(0,Z.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:D,disabled:o,children:[o?(0,Z.jsx)("span",{className:"dshr-spinner"}):(0,Z.jsx)(oa,{size:15}),o?"\u6B63\u5728\u52A0\u5165\u4E66\u67B6\u2026":"\u5BFC\u5165\u6587\u6863"]}),(0,Z.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:_,title:"\u4ECE\u53E4\u767B\u5821\u3001Standard Ebooks\u3001arXiv \u7B49\u516C\u5F00\u6765\u6E90\u4E0B\u8F7D\u5E76\u6253\u5F00",children:[(0,Z.jsx)(ca,{size:15})," \u516C\u5F00\u4E66\u5E93\u5BFC\u5165"]}),(0,Z.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:l,disabled:a||t.length===0,title:"\u6309\u6587\u4EF6\u7C7B\u578B\u4E0E\u5143\u6570\u636E\uFF0C\u628A\u4E66\u67B6\u6574\u7406\u6210\u4E66\u7C4D / \u6587\u732E / \u6587\u6863",children:[a?(0,Z.jsx)("span",{className:"dshr-spinner"}):(0,Z.jsx)(al,{size:15}),a?"\u6574\u7406\u4E2D\u2026":"\u4E00\u952E\u6574\u7406"]}),(0,Z.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:p,title:"\u9605\u8BFB\u4E0E\u4E66\u67B6\u8BBE\u7F6E",children:[(0,Z.jsx)(na,{size:15})," \u8BBE\u7F6E"]})]})]}),r?(0,Z.jsxs)("button",{type:"button",className:"dshr-resume",onClick:()=>n(r),children:[(0,Z.jsx)("span",{className:"dshr-resume__mark",children:(0,Z.jsx)(hi,{size:19})}),(0,Z.jsxs)("span",{className:"dshr-resume__body",children:[(0,Z.jsx)("span",{className:"dshr-resume__eyebrow",children:"\u7EE7\u7EED\u4E0A\u6B21\u9605\u8BFB"}),(0,Z.jsx)("strong",{children:r.title||"\u4E0A\u6B21\u6253\u5F00\u7684\u6587\u6863"}),(0,Z.jsxs)("span",{className:"dshr-resume__meta",children:[Yn(r.format),r.progress?.page?` \xB7 \u7B2C ${r.progress.page}${r.progress.pages?` / ${r.progress.pages}`:""} \u9875`:"",` \xB7 ${Math.round(Ml(r))}%`]})]}),(0,Z.jsx)("span",{className:"dshr-resume__arrow",children:"\u2192"})]}):null,(0,Z.jsxs)("section",{className:`dshr-drop${x?" is-over":""}`,onDragEnter:m=>{m.preventDefault(),P.current+=1,T(!0)},onDragOver:m=>m.preventDefault(),onDragLeave:()=>{P.current=Math.max(0,P.current-1),P.current===0&&T(!1)},onDrop:L,"aria-label":"\u62D6\u653E\u6587\u6863\u4EE5\u5BFC\u5165",children:[(0,Z.jsx)("div",{className:"dshr-drop__mark",children:(0,Z.jsx)(el,{size:24})}),(0,Z.jsxs)("div",{className:"dshr-drop__body",children:[(0,Z.jsx)("div",{className:"dshr-drop__title",children:"\u62D6\u4E00\u4EFD\u6587\u732E\u6216\u4E66\u5230\u8FD9\u91CC\uFF0C\u6216\u70B9\u51FB\u5BFC\u5165"}),(0,Z.jsx)("div",{className:"dshr-drop__hint",children:"\u6587\u4EF6\u53EA\u4FDD\u5B58\u5728\u672C\u673A\u6D4F\u89C8\u5668\u4E66\u67B6\u4E2D\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\uFF1B\u7FFB\u8BD1\u4EC5\u53D1\u9001\u5F53\u524D\u9009\u4E2D\u7684\u6BB5\u843D\u3002"}),(0,Z.jsx)("div",{className:"dshr-drop__formats",children:["PDF","EPUB","MOBI","AZW3","TXT","Markdown","HTML"].map(m=>(0,Z.jsx)("span",{className:"dshr-chip",children:m},m))})]}),(0,Z.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:D,disabled:o,children:"\u9009\u62E9\u6587\u4EF6"})]}),(0,Z.jsxs)("div",{className:"dshr-library__bar",children:[(0,Z.jsx)("h2",{children:"\u6211\u7684\u4E66\u67B6"}),(0,Z.jsxs)("div",{className:"dshr-library__search",children:[(0,Z.jsx)(fi,{size:14}),(0,Z.jsx)("input",{type:"search",value:R,onChange:m=>A(m.target.value),placeholder:"\u641C\u7D22\u4E66\u540D\u3001\u4F5C\u8005","aria-label":"\u641C\u7D22\u4E66\u67B6"})]}),(0,Z.jsxs)("span",{children:[E.length," / ",t.length," \u672C \xB7 \u6700\u8FD1\u9605\u8BFB\u4F18\u5148"]})]}),(0,Z.jsxs)("div",{className:"dshr-library__tabs",role:"tablist","aria-label":"\u4E66\u67B6\u5206\u7C7B",children:[(0,Z.jsxs)("button",{type:"button",role:"tab","aria-selected":i==="all",className:`dshr-library__tab${i==="all"?" is-active":""}`,onClick:()=>s("all"),children:["\u5168\u90E8 ",(0,Z.jsx)("span",{children:C.all})]}),ua.map(m=>(0,Z.jsxs)("button",{type:"button",role:"tab","aria-selected":i===m.id,className:`dshr-library__tab${i===m.id?" is-active":""}`,onClick:()=>s(m.id),title:m.hint,children:[m.label," ",(0,Z.jsx)("span",{children:C[m.id]||0})]},m.id)),(0,Z.jsx)("span",{className:"dshr-library__tabs-hint",children:"\u70B9\u5361\u7247\u53F3\u4E0A\u89D2\u5206\u7C7B\u6807\u7B7E\u53EF\u624B\u52A8\u5207\u6362"})]}),e?(0,Z.jsxs)("div",{className:"dshr-loading",style:{minHeight:180},children:[(0,Z.jsx)("div",{className:"dshr-loading__ring"}),(0,Z.jsx)("span",{children:"\u6B63\u5728\u6253\u5F00\u4E66\u67B6\u2026"})]}):E.length===0?(0,Z.jsx)("div",{className:"dshr-empty-books",children:t.length===0?"\u4E66\u67B6\u662F\u7A7A\u7684\u3002\u5BFC\u5165\u7B2C\u4E00\u7BC7\u8BBA\u6587\u3001\u7B2C\u4E00\u672C\u4E66\uFF0C\u6216\u628A\u6587\u4EF6\u62D6\u8FDB\u4E0A\u9762\u7684\u865A\u7EBF\u6846\u3002\u9996\u6B21\u9605\u8BFB\u540E\uFF0C\u8FDB\u5EA6\u4F1A\u81EA\u52A8\u8BB0\u5F55\u5728\u8FD9\u91CC\u3002":R.trim()?`\u6CA1\u6709\u5339\u914D\u300C${R.trim()}\u300D\u7684\u6587\u6863\u3002`:`\u300C${Zn(i)}\u300D\u4E66\u5355\u8FD8\u662F\u7A7A\u7684\u3002\u5BFC\u5165\u6587\u4EF6\uFF0C\u6216\u70B9\u5361\u7247\u4E0A\u7684\u5206\u7C7B\u6807\u7B7E\u628A\u5DF2\u6709\u6587\u6863\u79FB\u8FDB\u6765\u3002`}):(0,Z.jsx)("div",{className:"dshr-books",children:E.map(m=>(0,Z.jsx)(hh,{book:m,onOpen:u,onDelete:g,onCycleCategory:N=>f(N,uh[N.category||"document"])},m.id))}),(0,Z.jsxs)("footer",{className:"dshr-library__foot",children:[(0,Z.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,Z.jsx)(Vn,{size:14})," \u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1"]}),(0,Z.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,Z.jsx)(hn,{size:14})," \u9009\u4E2D\u95EE AI"]}),(0,Z.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,Z.jsx)(fi,{size:14})," Google / \u5B66\u672F\u641C\u7D22"]}),(0,Z.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,Z.jsx)(Qs,{size:14})," \u672C\u5730\u4E66\u67B6 \xB7 \u8FDB\u5EA6\u4E0E\u6279\u6CE8\u81EA\u52A8\u4FDD\u5B58"]})]})]}),(0,Z.jsx)("input",{ref:k,type:"file",multiple:!0,accept:".pdf,.epub,.mobi,.azw,.azw3,.txt,.md,.markdown,.html,.htm,application/pdf,application/epub+zip,text/plain,text/markdown,text/html",className:"dshr-sr-only",tabIndex:-1,onChange:m=>{let N=[...m.target.files??[]];m.target.value="",N.length>0&&d(N)}})]})}var ft=Mt(require("react"),1);var fh=Object.freeze({"content-type":"application/json","x-dsh-reader":"1"}),Wr=class extends Error{constructor(e,r="REQUEST_FAILED",n=0){super(e),this.name="ReaderApiError",this.code=r,this.status=n}};async function Ll(t){let e=null;try{e=await t.json()}catch{}return new Wr(e?.error?.message||e?.message||`\u7FFB\u8BD1\u670D\u52A1\u4E0D\u53EF\u7528\uFF08HTTP ${t.status}\uFF09\u3002`,e?.error?.code||e?.code||"REQUEST_FAILED",t.status)}async function ki(t,e,{signal:r}={}){let n;try{n=await fetch(t,{method:"POST",headers:fh,body:JSON.stringify(e),signal:r,credentials:"same-origin"})}catch(o){throw o?.name==="AbortError"?o:new Wr("\u65E0\u6CD5\u8FDE\u63A5\u5230 DSH \u4E3B\u8FDB\u7A0B\uFF0C\u8BF7\u786E\u8BA4 DSH \u6B63\u5728\u8FD0\u884C\u3002","NETWORK",0)}if(!n.ok)throw await Ll(n);return n}function En(t){return t?.name==="AbortError"}async function Jn(t,e={}){let r=t.map(i=>({id:String(i.id),text:String(i.text??"")})).filter(i=>i.text.trim()!=="");if(r.length===0)return{};let n=await ki("/dsh-reader/ai/translate",{segments:r,context:String(e.context??"").slice(0,1200),title:String(e.title??"").slice(0,300),glossary:String(e.glossary??"").slice(0,4e3),...e.expectedModel?{expectedModel:e.expectedModel}:{}},{signal:e.signal}),o=await n.json().catch(()=>null);if(!o||typeof o!="object"||!Array.isArray(o.translations))throw new Wr("\u7FFB\u8BD1\u670D\u52A1\u8FD4\u56DE\u4E86\u65E0\u6CD5\u8BC6\u522B\u7684\u7ED3\u679C\u3002","BAD_RESPONSE",n.status);let a={};for(let i of o.translations)i&&typeof i.id=="string"&&typeof i.zh=="string"&&i.zh.trim()!==""&&(a[i.id]=i.zh);if(Object.keys(a).length===0)throw new Wr("\u7FFB\u8BD1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u53EF\u7528\u8BD1\u6587\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","EMPTY_TRANSLATION",n.status);return e.includeMetadata?{translations:a,model:o.model,promptVersion:o.promptVersion}:a}async function Dl({signal:t}={}){let e=await fetch("/dsh-reader/ai/status",{signal:t,credentials:"same-origin",headers:{"x-dsh-reader":"1"},cache:"no-store"});if(!e.ok)throw await Ll(e);return e.json()}function Ol(t){let e=t.split(/\r?\n/u).filter(r=>r.startsWith("data:")).map(r=>r.slice(5).trimStart()).join(`
`);if(e==="")return null;try{return JSON.parse(e)}catch{return{type:"delta",text:e}}}async function _i(t,{onDelta:e,onMeta:r}={}){let n=await ki("/dsh-reader/ai/chat",t,{signal:t.signal});if(!n.body)throw new Wr("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u6D41\u5F0F\u54CD\u5E94\u3002","NO_STREAM",n.status);let o=n.body.getReader(),a=new TextDecoder,i="",s=!1,l=null;try{for(;;){let{value:d,done:u}=await o.read();if(u)break;i+=a.decode(d,{stream:!0});let g=i.search(/\r?\n\r?\n/u);for(;g!==-1;){let f=i.slice(0,g),p=i.slice(g).match(/^\r?\n\r?\n/u)?.[0]??`

`;i=i.slice(g+p.length);let _=Ol(f);_&&(_.type==="delta"&&typeof _.text=="string"?e?.(_.text):_.type==="error"?l=new Wr(_.message||"AI \u56DE\u7B54\u5931\u8D25\u3002",_.code||"AI_FAILED"):_.type==="done"?s=!0:r?.(_)),g=i.search(/\r?\n\r?\n/u)}}if(i.trim()!==""){let d=Ol(i);d?.type==="delta"&&typeof d.text=="string"&&e?.(d.text),d?.type==="error"&&(l=new Wr(d.message||"AI \u56DE\u7B54\u5931\u8D25\u3002",d.code||"AI_FAILED")),d?.type==="done"&&(s=!0)}}finally{o.releaseLock?.()}if(l)throw l}async function Fl(t,{signal:e}={}){let r=await ki("/dsh-reader/import/fetch",{url:String(t||"")},{signal:e}),n=await r.blob();if(!n.size)throw new Wr("\u6765\u6E90\u8FD4\u56DE\u4E86\u7A7A\u6587\u4EF6\u3002","EMPTY",0);let o="book",a=r.headers.get("x-dsh-reader-filename");if(a)try{o=decodeURIComponent(a)}catch{o=a}return new File([n],o,{type:n.type||"application/octet-stream"})}var an=Mt(require("react"),1);var Hl=Object.freeze([{id:"yellow",label:"\u9EC4",value:"#f5d76e"},{id:"green",label:"\u7EFF",value:"#8fd18b"},{id:"pink",label:"\u7C89",value:"#f3a6c0"},{id:"blue",label:"\u84DD",value:"#94c9f0"}]),wo=Object.freeze([{id:"thin",label:"\u7EC6",value:4},{id:"medium",label:"\u4E2D",value:9},{id:"wide",label:"\u5BBD",value:16}]),Ul=Object.freeze([{id:"ink",label:"\u58A8",value:"#3f3a33"},{id:"red",label:"\u6731",value:"#c2543f"},{id:"amber",label:"\u8D6D",value:"#a9772b"},{id:"blue",label:"\u84DD",value:"#3f6f97"}]),eo=Object.freeze({highlight:"\u8367\u5149\u7B14",underline:"\u4E0B\u5212\u7EBF",note:"\u4FBF\u7B7E"}),to=Object.freeze([{id:"highlight",label:eo.highlight},{id:"underline",label:eo.underline},{id:"note",label:eo.note}]);function Ti(t){return eo[t]||"\u6807\u6CE8"}var ga="data-anno-block",Wl=".dshr-block__body";function Si(t){return t?t.ownerDocument?t.ownerDocument:t.nodeType===9?t:typeof globalThis<"u"&&globalThis.document?globalThis.document:null:null}function Pr(t,e=0){let r=typeof t=="number"?t:Number(t);return Number.isFinite(r)?Math.trunc(r):e}function Gt(t,e,r){return Math.min(r,Math.max(e,t))}function ha(t,e=5){let r=10**e;return Math.round(t*r)/r}function pa(t){return String(t??"").replace(/\s+/gu," ").trim()}function ph(t){if(!t||t.nodeType!==1)return!1;let e=t.tagName;if(e==="SCRIPT"||e==="STYLE"||e==="NOSCRIPT"||e==="TEXTAREA"||e==="SVG"||e==="CANVAS")return!0;let r=t.classList;return!!(r&&(r.contains("dshr-translation")||r.contains("dshr-anno-ignore"))||typeof t.hasAttribute=="function"&&t.hasAttribute("data-anno-ignore"))}function Ei(t){let e=[],r=[],n=new Map,o=0;if(!t)return{nodes:e,starts:r,positions:n,total:o,text:""};let a=s=>{for(let l=s.firstChild;l;l=l.nextSibling)if(l.nodeType===3){let d=l.nodeValue||"";n.set(l,e.length),e.push(l),r.push(o),o+=d.length}else l.nodeType===1&&!ph(l)&&a(l)};a(t);let i="";for(let s=0;s<e.length;s+=1)i+=e[s].nodeValue||"";return{nodes:e,starts:r,positions:n,total:o,text:i}}function gh(t,e,r){if(!t||!e)return null;let n;try{n=t.createRange();let o=e.nodeType===3?e.nodeValue?e.nodeValue.length:0:e.childNodes?e.childNodes.length:0;return n.setStart(e,Gt(Pr(r),0,o)),n.collapse(!0),n}catch{return null}}function zl(t,e,r,n){if(!r)return 0;if(r.nodeType===3){let o=t.positions.get(r),a=r.nodeValue||"";if(o!==void 0)return t.starts[o]+Gt(Pr(n),0,a.length)}if(r===e||e.contains(r)){let o=Si(e),a=gh(o,r,n);if(!a)return 0;let i=o.createRange();for(let s=0;s<t.nodes.length;s+=1)try{if(i.setStart(t.nodes[s],0),i.collapse(!0),a.compareBoundaryPoints(0,i)<=0)return t.starts[s]}catch{}return t.total}try{return e.compareDocumentPosition(r)&4?t.total:0}catch{return 0}}function Bl(t,e){if(!t.nodes.length)return null;let r=Gt(Pr(e),0,t.total);for(let o=0;o<t.nodes.length;o+=1){let a=t.nodes[o].nodeValue?t.nodes[o].nodeValue.length:0,i=t.starts[o];if(r<i+a)return{node:t.nodes[o],offset:r-i};if(r===i+a&&a>0)return{node:t.nodes[o],offset:a}}let n=t.nodes[t.nodes.length-1];return{node:n,offset:n.nodeValue?n.nodeValue.length:0}}function mh(t,e,r){if(!t)return null;let n=Ei(t);if(!n.nodes.length||n.total===0)return null;let o=Gt(Pr(e),0,n.total),a=Gt(Pr(r),0,n.total);a<o&&([o,a]=[a,o]);let i=Bl(n,o),s=Bl(n,a),l=Si(t);if(!l||!i||!s)return null;try{let d=l.createRange();return d.setStart(i.node,i.offset),d.setEnd(s.node,s.offset),d}catch{return null}}function jl(t){let e=[];if(!t)return e;try{let r=typeof t.getClientRects=="function"?t.getClientRects():null;if(r&&typeof r.length=="number")for(let n=0;n<r.length;n+=1){let o=r[n];o&&e.push(o)}}catch{}if(e.length===0)try{let r=typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():null;r&&(r.width||r.height)&&e.push(r)}catch{}return e}function bh(t){let e=1/0,r=1/0,n=-1/0,o=-1/0;for(let a=0;a<t.length;a+=1){let i=t[a],s=Number(i.width)||0,l=Number(i.height)||0;if(!s&&!l)continue;let d=Number(i.left)||0,u=Number(i.top)||0;e=Math.min(e,d),r=Math.min(r,u),n=Math.max(n,d+s),o=Math.max(o,u+l)}return Number.isFinite(e)?{left:e,top:r,width:n-e,height:o-r,right:n,bottom:o}:{left:0,top:0,width:0,height:0,right:0,bottom:0}}function xh(t,e,r){let n=e,o=r;for(;n<o&&/\s/u.test(t[n]);)n+=1;for(;o>n&&/\s/u.test(t[o-1]);)o-=1;return{start:n,end:o,text:t.slice(n,o)}}function Gl(t,e){if(!t||!e||!e.rangeCount)return null;let r=Si(t);if(!r)return null;let n;try{n=e.getRangeAt(0)}catch{return null}if(!n)return null;try{if(!t.contains(n.commonAncestorContainer))return null}catch{return null}let o=[],a;try{a=t.querySelectorAll(`[${ga}]`)}catch{return null}for(let s=0;s<a.length;s+=1){let l=a[s],d=l.getAttribute(ga);if(!d)continue;let u=l.classList&&l.classList.contains("dshr-block__body")?l:l.querySelector(Wl);if(!u)continue;let g=Ei(u);if(g.total===0)continue;let f;try{f=r.createRange(),f.selectNodeContents(u)}catch{continue}let p=!1,_=!1,k=!1,x=!1;try{p=n.compareBoundaryPoints(3,f)>=0,_=n.compareBoundaryPoints(1,f)<=0,k=n.compareBoundaryPoints(0,f)<0,x=n.compareBoundaryPoints(2,f)>0}catch{continue}if(p||_)continue;let T=k?0:zl(g,u,n.startContainer,n.startOffset),R=x?g.total:zl(g,u,n.endContainer,n.endOffset),A=Gt(Pr(T),0,g.total),P=Gt(Pr(R),0,g.total);if(P<=A)continue;let C=xh(g.text,A,P);C.end<=C.start||o.push({blockId:d,start:C.start,end:C.end,text:C.text})}if(o.length===0)return null;let i="";for(let s=0;s<o.length;s+=1)s>0&&(i+=`
`),i+=o[s].text;return i=i.replace(/\u00a0/gu," ").trim(),i?{text:i,rect:bh(jl(n)),ranges:o}:null}function ql(t,e){if(!t||!e)return[];let r;try{r=e.getBoundingClientRect()}catch{return[]}if(!r)return[];let n=Number(r.width)||0,o=Number(r.height)||0;if(n<=0||o<=0)return[];let a=Number(r.left)||0,i=Number(r.top)||0,s=a+n,l=i+o,d=jl(t);if(d.length===0)return[];let u=[];for(let g=0;g<d.length;g+=1){let f=d[g];if(!f)continue;let p=Number(f.width)||0,_=Number(f.height)||0;if(p<=0||_<=0)continue;let k=Number(f.left)||0,x=Number(f.top)||0,T=Math.max(k,a),R=Math.max(x,i),A=Math.min(k+p,s),P=Math.min(x+_,l);A-T<.5||P-R<.5||u.push({x:ha(Gt((T-a)/n,0,1)),y:ha(Gt((R-i)/o,0,1)),w:ha(Gt((A-T)/n,0,1)),h:ha(Gt((P-R)/o,0,1))})}return u.sort((g,f)=>g.y-f.y||g.x-f.x),u}function vh(t){let e=String(t??""),r="",n=[],o=-1;for(let a=0;a<e.length;a+=1){let i=e[a];if(/\s/u.test(i)){o<0&&r.length>0&&(o=a);continue}o>=0&&(n.push(o),r+=" ",o=-1),n.push(a),r+=i}return{text:r,map:n}}function yh(t,e,r,n,o){let a=t.length,i=r[n];if(i===void 0)return null;let s=n+o<r.length?r[n+o]:a;return s>i?{start:i,end:s}:null}function $l(t,e){if(!t||!e)return null;let r=String(t),n=String(e).trim();if(!n)return null;let o=r.indexOf(n);if(o>=0)return{start:o,end:o+n.length};let a=vh(r),i=pa(n);if(!i)return null;let s=a.text.indexOf(i);if(s>=0){let d=yh(r,a.text,a.map,s,i.length);if(d)return d}let l=Math.min(i.length,48);for(let d=l;d>=12;d-=4){let u=i.slice(0,d),g=a.text.indexOf(u);if(g<0)continue;let f=a.map[g];if(f===void 0)continue;let p=Math.min(r.length,f+i.length);if(p>f)return{start:f,end:p}}return null}function wh(t,e,r){let n=pa(t);if(!n)return!1;let o=[],a=pa(e);a&&o.push(a);let i=pa(r);return i&&i!==a&&o.push(i),o.length===0?!0:o.some(s=>n===s?!0:n.length<8||s.length<8?!1:n.includes(s)||s.includes(n))}function fa(t,e,r){let n=Gt(Pr(e),0,t.index.total),o=Gt(Pr(r),0,t.index.total);if(o<=n)return null;let a=mh(t.body,n,o);return a?{blockId:t.blockId,start:n,end:o,text:t.index.text.slice(n,o),range:a}:null}function kh(t){let e=[];if(!t)return e;let r;try{r=t.querySelectorAll(`[${ga}]`)}catch{return e}for(let n=0;n<r.length;n+=1){let o=r[n],a=o.getAttribute(ga);if(!a)continue;let i=o.classList&&o.classList.contains("dshr-block__body")?o:o.querySelector(Wl);if(!i)continue;let s=Ei(i);s.total!==0&&e.push({blockId:a,body:i,index:s})}return e}function Xl(t,e){let r=[];if(!t||!e)return r;let n=kh(t);if(n.length===0)return r;let o=new Map;for(let s=0;s<n.length;s+=1)o.has(n[s].blockId)||o.set(n[s].blockId,n[s]);let a=typeof e.quote=="string"?e.quote:"",i=Array.isArray(e.ranges)?e.ranges:[];for(let s=0;s<i.length;s+=1){let l=i[s];if(!l||typeof l!="object")continue;let d=o.get(String(l.blockId==null?"":l.blockId));if(!d)continue;let u=Gt(Pr(l.start),0,d.index.total),g=Gt(Pr(l.end),0,d.index.total),f=g>u;if(f){let _=d.index.text.slice(u,g);if(wh(_,l.text,a)){let k=fa(d,u,g);k&&r.push(k);continue}}let p=$l(d.index.text,a||l.text);if(p){let _=fa(d,p.start,p.end);_&&r.push(_);continue}if(f){let _=fa(d,u,g);_&&r.push(_)}}if(r.length===0&&a){let s=a.split(/\n+/u).map(u=>u.trim()).filter(u=>u.length>=2),l=s.length>0?s:[a.trim()],d=new Set;for(let u=0;u<n.length;u+=1){let g=n[u];if(d.has(g.blockId))continue;let f=1/0,p=-1/0;for(let k=0;k<l.length;k+=1){let x=$l(g.index.text,l[k]);x&&(f=Math.min(f,x.start),p=Math.max(p,x.end))}if(!Number.isFinite(f)||p<=f)continue;d.add(g.blockId);let _=fa(g,f,p);_&&r.push(_)}}return r}var qm=require("react"),Tt=require("react/jsx-runtime");function An({size:t=14}){return(0,Tt.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,Tt.jsx)("path",{d:"M9.4 2.6 5.1 6.9l-.7 2.7 2.7-.7 4.4-4.3-2.1-2Z",stroke:"currentColor",strokeWidth:"1.35",strokeLinejoin:"round"}),(0,Tt.jsx)("path",{d:"m4.4 9.6-2.1 2.1c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0l2.1-2.1",stroke:"currentColor",strokeWidth:"1.35",strokeLinecap:"round"}),(0,Tt.jsx)("path",{d:"M3 13.5h7.4",stroke:"currentColor",strokeWidth:"1.35",strokeLinecap:"round",opacity:".55"})]})}function ma({size:t=14}){return(0,Tt.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,Tt.jsx)("path",{d:"M4.2 3v4.6a3.8 3.8 0 0 0 7.6 0V3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,Tt.jsx)("path",{d:"M3.4 13.3c2-.7 4.2-.8 9.2-.2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function fn({size:t=12}){return(0,Tt.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,Tt.jsx)("path",{d:"M3.5 2.7h9v6.2l-3.2 3.4H3.5z",fill:"currentColor",fillOpacity:".9",stroke:"currentColor",strokeWidth:"1",strokeLinejoin:"round"}),(0,Tt.jsx)("path",{d:"M9.3 12.3V9h3.1",stroke:"var(--dshr-anno-paper, #ffffff)",strokeWidth:"1.15",strokeLinejoin:"round"}),(0,Tt.jsx)("path",{d:"M5.4 5.5h5.1M5.4 7.4h3.4",stroke:"var(--dshr-anno-paper, #ffffff)",strokeWidth:"1",strokeLinecap:"round",opacity:".8"})]})}function Vl({size:t=56}){return(0,Tt.jsxs)("svg",{width:t,height:t,viewBox:"0 0 56 56",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,Tt.jsx)("rect",{x:"8.5",y:"9",width:"33",height:"38",rx:"4",stroke:"currentColor",strokeWidth:"1.8",opacity:".55"}),(0,Tt.jsx)("path",{d:"M15 18h20M15 24h20M15 30h13",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",opacity:".42"}),(0,Tt.jsx)("path",{d:"M34 28.5h11.5v9.2l-4.6 5H34z",fill:"currentColor",fillOpacity:".16",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),(0,Tt.jsx)("path",{d:"M40.9 42.7v-5h4.6",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),(0,Tt.jsx)("path",{d:"M36.8 33.6h5.6M36.8 36.4h3.8",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",opacity:".7"})]})}function ba({size:t=13}){return(0,Tt.jsx)("svg",{width:t,height:t,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",focusable:"false",children:(0,Tt.jsx)("path",{d:"m3.4 3.4 7.2 7.2M10.6 3.4 3.4 10.6",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})})}function Kl(t,e,r){let n=Number(t);return Number.isFinite(n)?Math.min(r,Math.max(e,n)):e}function xa(t){let e=Number(t);return .36+(Kl(Number.isFinite(e)?e:9,4,16)-4)/12*.34}function va(t){return(1-Kl(t,.1,.95))*.82}function ya(t){let e=String(t??""),r=2166136261;for(let n=0;n<e.length;n+=1)r^=e.charCodeAt(n),r=Math.imul(r,16777619);return r>>>0}function _h(t,e=0){let r=(Number(t)^Math.imul((Number(e)||0)+1,2654435769))>>>0;return r^=r<<13,r>>>=0,r^=r>>>17,r^=r<<5,r>>>=0,r/4294967296}function wa(t,e){let r=Math.max(4,Number(e)||4),n=u=>_h(t,u)*2-1,o=3.7+n(1)*.5,a=3.1+n(2)*.45,i=3.7+n(3)*.45,s=3.3+n(4)*.55,l=r*.54,d=Math.max(1,r-.6);return[`M0.6 ${o.toFixed(2)}`,`C${(r*.18).toFixed(2)} ${a.toFixed(2)}`,`${(r*.34).toFixed(2)} ${a.toFixed(2)}`,`${l.toFixed(2)} ${i.toFixed(2)}`,`S${(r*.82).toFixed(2)} ${s.toFixed(2)}`,`${d.toFixed(2)} ${(s-.25).toFixed(2)}`].join(" ")}function ka(t){if(!t)return"\u6279\u6CE8";let e=typeof t.note=="string"?t.note.trim():"";if(e)return e.length>34?`${e.slice(0,34)}\u2026`:e;let r=typeof t.quote=="string"?t.quote.trim():"";return r?r.length>34?`${r.slice(0,34)}\u2026`:r:"\u6279\u6CE8"}var Nn=require("react/jsx-runtime");function Th(t,e){let r=Math.min(t.left+t.width,e.left+e.width)-Math.max(t.left,e.left),n=Math.min(t.top+t.height,e.top+e.height)-Math.max(t.top,e.top);if(r<=0||n<=0)return 0;let o=r*n,a=Math.min(t.width*t.height,e.width*e.height);return a>0?o/a:0}function Sh(t){let e=[];if(!t)return e;try{let n=typeof t.getClientRects=="function"?t.getClientRects():null;if(n&&typeof n.length=="number")for(let o=0;o<n.length;o+=1){let a=n[o];if(!a)continue;let i=Number(a.width)||0,s=Number(a.height)||0;i<=0||s<=0||e.push({left:Number(a.left)||0,top:Number(a.top)||0,width:i,height:s})}}catch{}if(e.length===0)try{let n=typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():null;n&&(Number(n.width)||0)>0&&(Number(n.height)||0)>0&&e.push({left:Number(n.left)||0,top:Number(n.top)||0,width:Number(n.width)||0,height:Number(n.height)||0})}catch{}if(e.length<=1)return e;let r=[];for(let n=0;n<e.length;n+=1){let o=e[n],a=!1;for(let i=0;i<r.length;i+=1)if(Th(o,r[i])>.55){a=!0;break}a||r.push(o)}return r}function Eh(t,e){return!t||t.kind&&t.kind!=="flow"?!1:!e||t.chapterId==null?!0:t.chapterId===e}function Ah(t,e){if(t===e)return!0;if(!t||!e||t.length!==e.length)return!1;for(let r=0;r<t.length;r+=1){let n=t[r],o=e[r];if(n.type!==o.type||n.key!==o.key||n.annotationId!==o.annotationId||n.x!==o.x||n.y!==o.y||n.width!==o.width||n.height!==o.height||n.color!==o.color||n.path!==o.path||n.isNote!==o.isNote||n.label!==o.label)return!1}return!0}function Yl({containerRef:t,annotations:e,chapterId:r,onOpenAnnotation:n,layoutVersion:o}){let a=an.default.useRef(null),i=an.default.useRef(0),s=an.default.useRef({annotations:e,chapterId:r,onOpenAnnotation:n});s.current={annotations:e,chapterId:r,onOpenAnnotation:n};let[l,d]=an.default.useState({height:0,marks:[]}),u=an.default.useCallback(()=>{let f=a.current,p=t&&t.current?t.current:null;if(!f||!p)return;let _;try{_=f.getBoundingClientRect()}catch{return}if(!_)return;let{annotations:k,chapterId:x}=s.current,T=Array.isArray(k)?k:[],R=p.clientWidth||_&&p.getBoundingClientRect().width||0,A=0,P=null;try{if(P=p.querySelector(".dshr-content__inner"),!P){for(let D=p.firstElementChild;D;D=D.nextElementSibling)if(!(D===f||D.classList&&D.classList.contains("dshr-anno-layer"))){P=D;break}}}catch{P=null}if(P)try{let D=P.getBoundingClientRect();A=Math.max(0,D.top-_.top+D.height)}catch{A=0}let C=[];for(let D=0;D<T.length;D+=1){let L=T[D];if(!Eh(L,x))continue;let m;try{m=Xl(p,L)}catch{continue}if(!Array.isArray(m)||m.length===0)continue;let N=L.style==="underline"||L.style==="note"?L.style:"highlight",F=L.color||"#f5d76e",J=ya(`${L.id||""}|${L.createdAt||0}`),se=xa(L.width),ne=L.id==null?"":String(L.id),oe=N==="note"||typeof L.note=="string"&&L.note.trim().length>0,z=ka(L),de=null;for(let O=0;O<m.length;O+=1){let X=m[O],re=Sh(X&&X.range);for(let $=0;$<re.length;$+=1){let xe=re[$],me=xe.left-_.left,Te=xe.top-_.top,q=`${ne}:${O}:${$}`;if(de={x:me,y:Te,width:xe.width,height:xe.height},N==="underline"){let Ge=xe.width+2;C.push({type:"underline",key:`u:${q}`,annotationId:ne,x:me-1,y:Te+xe.height-7.2,width:Ge,height:8,color:F,path:wa(J,Ge),isNote:!1,label:z})}else{let Ge=Math.max(3.5,xe.height*se);C.push({type:"band",key:`b:${q}`,annotationId:ne,x:me-1,y:Te+xe.height*va(se),width:xe.width+2,height:Ge,color:F,path:"",isNote:N==="note",label:z})}A=Math.max(A,Te+xe.height+8)}}if(oe&&de){let O=Math.min(Math.max(2,de.x+de.width+3),Math.max(2,R-21));C.push({type:"note",key:`n:${ne}`,annotationId:ne,x:O,y:Math.max(0,de.y-1),width:19,height:19,color:F,path:"",isNote:!0,label:z})}}let E=Math.max(0,Math.ceil(A+8));d(D=>D.height===E&&Ah(D.marks,C)?D:{height:E,marks:C})},[t]),g=an.default.useCallback(()=>{if(typeof window>"u"||i.current)return;let f=()=>{i.current=0,u()};i.current=typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(f):window.setTimeout(f,16)},[u]);return an.default.useEffect(()=>{let f=t&&t.current?t.current:null,p=a.current;if(!f||!p||typeof window>"u")return;let _=[];g(),_.push(window.setTimeout(g,80));let k=null;if(typeof ResizeObserver<"u"){let E=new ResizeObserver(()=>g());try{E.observe(f);let D=p.parentElement;D&&D!==f&&E.observe(D);let L=f.querySelector(".dshr-content__inner");L&&!L.contains(p)&&E.observe(L)}catch{}k=E}let x=null;if(typeof MutationObserver<"u"){x=new MutationObserver(E=>{for(let D=0;D<E.length;D+=1){let L=E[D].target;if(!p.contains(L)){g();return}}});try{x.observe(f,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["class","style","data-rendered"]})}catch{}}let T=()=>g(),R=E=>{p.contains(E.target)||g()};window.addEventListener("resize",T),f.addEventListener("load",R,!0);let A=f.contains(p);A||f.addEventListener("scroll",T,{passive:!0});let P=null,C=typeof document<"u"?document.fonts:null;if(C&&typeof C.ready=="object"&&typeof C.ready.then=="function"&&C.ready.then(()=>g()).catch(()=>{}),C&&typeof C.addEventListener=="function"){P=()=>g();try{C.addEventListener("loadingdone",P)}catch{P=null}}return()=>{for(let E=0;E<_.length;E+=1)window.clearTimeout(_[E]);if(i.current&&(typeof window.cancelAnimationFrame=="function"?window.cancelAnimationFrame(i.current):window.clearTimeout(i.current),i.current=0),k&&k.disconnect(),x&&x.disconnect(),window.removeEventListener("resize",T),f.removeEventListener("load",R,!0),A||f.removeEventListener("scroll",T),C&&P)try{C.removeEventListener("loadingdone",P)}catch{}}},[t,g]),an.default.useEffect(()=>{if(g(),typeof window>"u")return;let f=window.setTimeout(g,40);return()=>window.clearTimeout(f)},[e,r,o,g]),(0,Nn.jsx)("div",{ref:a,className:"dshr-anno-layer",style:l.height>0?{height:`${l.height}px`}:void 0,"data-anno-layer":"flow",children:l.marks.map(f=>{if(f.type==="note")return(0,Nn.jsx)("button",{type:"button",className:"dshr-anno-note-btn",style:{left:`${f.x}px`,top:`${f.y}px`,"--dshr-anno-color":f.color},"data-anno-id":f.annotationId,title:f.label?`\u67E5\u770B\u6279\u6CE8\uFF1A${f.label}`:"\u67E5\u770B\u6279\u6CE8","aria-label":f.label?`\u67E5\u770B\u6279\u6CE8\uFF1A${f.label}`:"\u67E5\u770B\u6279\u6CE8",onMouseDown:p=>p.preventDefault(),onClick:()=>{let p=s.current.onOpenAnnotation;typeof p=="function"&&p(f.annotationId)},children:(0,Nn.jsx)(fn,{size:12})},f.key);if(f.type==="underline"){let p=Math.max(2,Math.round(f.width*100)/100);return(0,Nn.jsx)("svg",{className:"dshr-anno-underline",style:{left:`${f.x}px`,top:`${f.y}px`,width:`${f.width}px`,height:`${f.height}px`,"--dshr-anno-color":f.color},viewBox:`0 0 ${p} 8`,preserveAspectRatio:"none","data-anno-id":f.annotationId,"aria-hidden":"true",focusable:"false",children:(0,Nn.jsx)("path",{d:f.path})},f.key)}return(0,Nn.jsx)("span",{className:`dshr-anno-band${f.isNote?" dshr-anno-band--note":""}`,style:{left:`${f.x}px`,top:`${f.y}px`,width:`${f.width}px`,height:`${f.height}px`,"--dshr-anno-color":f.color},"data-anno-id":f.annotationId,"aria-hidden":"true"},f.key)})})}function ko(t){let e=t.scrollHeight-t.clientHeight;return e>0?Math.max(0,Math.min(1,t.scrollTop/e)):0}function _a(t,e,r){return{chapter:t,chapters:e,scrollRatio:r,percent:(t+r)/e*100}}function Zl(t,e){let r=Math.max(1,e-48-56),n=t.filter(a=>Number.isFinite(a.top)&&a.bottom>a.top).toSorted((a,i)=>a.top-i.top),o=[0];for(let a of n)for(;a.bottom>o.at(-1)+48+r+.5;){let i=o.at(-1),s=a.top-48;o.push(s>i+.5?s:i+r)}return o}function Nh(t,e){let r=0,n=t.length-1;for(;r<n;){let o=Math.ceil((r+n)/2);t[o]<=e+.5?r=o:n=o-1}return r}function Ql(){let t=[0],e=0;return{get page(){return e+1},get pages(){return t.length},get top(){return t[e]},get starts(){return t},replace(r,n){t=r.length?r:[0],e=Nh(t,Math.max(0,n||0))},turn(r){let n=Math.max(0,Math.min(t.length-1,e+Math.sign(r)));return n===e?!1:(e=n,!0)}}}function Jl(t,e){let r=t.getBoundingClientRect(),n=[],o=(s,l)=>{s.height<2||s.width<.1||n.push({top:s.top-r.top+t.scrollTop,bottom:s.bottom-r.top+t.scrollTop,...l})},a=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let s=a.nextNode();s;s=a.nextNode()){if(!s.nodeValue?.trim()||s.parentElement.closest('[aria-hidden="true"],script,style'))continue;let l=document.createRange();l.selectNodeContents(s);for(let d of l.getClientRects())o(d,{node:s})}for(let s of e.querySelectorAll("img,svg,hr,video,canvas"))o(s.getBoundingClientRect(),{element:s,atomic:!0});n.sort((s,l)=>s.top-l.top);let i=[];for(let s of n){let l=i.at(-1),d=l&&Math.min(l.bottom,s.bottom)-Math.max(l.top,s.top);l&&!l.atomic&&!s.atomic&&d>Math.min(l.bottom-l.top,s.bottom-s.top)*.5?l.bottom=Math.max(l.bottom,s.bottom):i.push({...s})}return i}function Ai(t,e,r){let n=e+48,o=t.find(k=>k.bottom>n+.5)||t.at(-1);if(!o)return null;let a=o.element||o.node?.parentElement.closest(".dshr-block__body,.dshr-translation,.dshr-chapter__kicker")||o.node?.parentElement,i=r.getBoundingClientRect(),s=a?.getBoundingClientRect(),l=s?.height?(n-(s.top-i.top+r.scrollTop))/s.height:0;if(!o.node)return{element:a,ratio:l};let d=document.createRange(),u=1,g=o.node.length;for(;u<g;){let k=u+g>>1;d.setStart(o.node,0),d.setEnd(o.node,k);let x=d.getClientRects(),T=x[x.length-1];(T?T.top-i.top+r.scrollTop:-1/0)<o.top-1?u=k+1:g=k}let f=Math.max(0,u-1),p=f,_=document.createTreeWalker(a,NodeFilter.SHOW_TEXT);for(let k=_.nextNode();k&&k!==o.node;k=_.nextNode())p+=k.length;return{node:o.node,offset:f,textOffset:p,element:a,ratio:l}}function ec(t,e,r){if(!t)return r;let n=e.getBoundingClientRect();if(!t.node?.isConnected&&t.element?.isConnected&&Number.isFinite(t.textOffset)){let o=t.textOffset,a=document.createTreeWalker(t.element,NodeFilter.SHOW_TEXT);for(let i=a.nextNode();i;i=a.nextNode()){if(o<i.length){t.node=i,t.offset=o;break}o-=i.length}}if(t.node?.isConnected&&e.contains(t.node)&&t.node.length){let o=document.createRange(),a=Math.min(t.offset,t.node.length-1);o.setStart(t.node,a),o.setEnd(t.node,a+1);let i=o.getBoundingClientRect();if(i.height)return i.top-n.top+e.scrollTop-48}if(t.element?.isConnected&&e.contains(t.element)){let o=t.element.getBoundingClientRect();return o.top-n.top+e.scrollTop+Math.max(0,t.ratio)*o.height-48}return r}var Ie=require("react/jsx-runtime"),Ni=new Set(["heading","paragraph","list-item","quote"]),Ch=6;function Ih(t,e){let r=t.style.scrollBehavior;t.style.scrollBehavior="auto",t.scrollTop=e,t.style.scrollBehavior=r}function Rh(t,e){return`${t.title||""} \xB7 ${e?.title||""}`}var Mh=ft.default.memo(function({block:e}){if(e.kind==="image")return(0,Ie.jsxs)("figure",{children:[e.src?(0,Ie.jsx)("img",{src:e.src,alt:e.alt||"",loading:"lazy",decoding:"async"}):(0,Ie.jsx)("div",{className:"dshr-translation",children:"\u56FE\u7247\u672A\u80FD\u8F7D\u5165"}),e.caption?(0,Ie.jsx)("figcaption",{children:e.caption}):null]});if(e.kind==="table")return(0,Ie.jsx)("div",{dangerouslySetInnerHTML:{__html:e.html||""}});if(e.kind==="code")return(0,Ie.jsx)("pre",{className:"dshr-block__code",children:e.text||""});if(e.kind==="rule")return(0,Ie.jsx)("hr",{});if(e.kind==="heading"){let r=`h${Math.max(1,Math.min(6,e.level||2))}`;return(0,Ie.jsx)(r,{dangerouslySetInnerHTML:{__html:e.html||""}})}return(0,Ie.jsx)("p",{dangerouslySetInnerHTML:{__html:e.html||""}})});function Ph({state:t,onRetry:e}){return t?t.status==="loading"?(0,Ie.jsx)("div",{className:"dshr-translation",children:(0,Ie.jsxs)("span",{className:"dshr-translation__loading",children:[(0,Ie.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u7FFB\u8BD1\u2026"]})}):t.status==="error"?(0,Ie.jsxs)("div",{className:"dshr-translation is-error",children:[(0,Ie.jsx)("p",{children:t.error||"\u8FD9\u6BB5\u7FFB\u8BD1\u5931\u8D25\u4E86\u3002"}),(0,Ie.jsx)("button",{type:"button",className:"dshr-translation__retry",onClick:e,children:"\u91CD\u8BD5"})]}):t.zh?(0,Ie.jsx)("div",{className:"dshr-translation",children:String(t.zh).split(/\n+/u).filter(Boolean).map((r,n)=>(0,Ie.jsx)("p",{children:r},n))}):null:null}function tc({book:t,chapterIndex:e,onChapterChange:r,settings:n,chapterEntry:o,onChapterEntered:a,onSelection:i,onProgress:s,annotations:l=[],onOpenAnnotation:d,focusAnnotation:u,layoutVersion:g=0}){let f=t.chapters[e],p=ft.default.useRef(null),_=ft.default.useRef(null),k=ft.default.useRef(0),x=ft.default.useRef(new Map),T=ft.default.useRef(!1),R=ft.default.useRef(null),A=ft.default.useRef(!0),P=ft.default.useMemo(()=>new Map((f?.blocks??[]).map(O=>[O.id,O])),[f]),[C,E]=ft.default.useState({}),[D,L]=ft.default.useState(!1);ft.default.useEffect(()=>{A.current=!0;let O=new AbortController;return R.current=O,()=>{A.current=!1,O.abort()}},[]);let m=ft.default.useCallback(O=>`${f?.id||"chapter"}:${O.id}`,[f?.id]),N=ft.default.useCallback((O,X)=>{A.current&&E(re=>({...re,[O]:{...re[O]||{},...X}}))},[]),F=ft.default.useCallback(async()=>{if(T.current||x.current.size===0)return;T.current=!0,L(!0);let O=[...x.current.entries()].slice(0,Ch);for(let[re]of O)x.current.delete(re);let X=Rh(t,f);try{let re=await Jn(O.map(([$,xe])=>({id:$,text:xe.text})),{context:X,title:t.title,signal:R.current?.signal});for(let[$]of O)re[$]?N($,{status:"done",zh:re[$],error:void 0}):N($,{status:"error",error:"\u7FFB\u8BD1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u8FD9\u4E00\u6BB5\u3002"})}catch(re){if(!En(re))for(let[$]of O)N($,{status:"error",error:re?.message||"\u7FFB\u8BD1\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002"})}finally{T.current=!1,A.current&&(L(!1),x.current.size>0&&window.setTimeout(()=>{F()},120))}},[t,f,N]),J=ft.default.useCallback((O,{force:X=!1}={})=>{if(!O||!Ni.has(O.kind)||!O.text?.trim())return;let re=m(O),$=C[re];!X&&($?.status==="loading"||$?.status==="done")||(N(re,{status:"loading",error:void 0}),x.current.set(re,{text:O.text.slice(0,4e3)}),F())},[F,m,C,N]),se=ft.default.useCallback(O=>{let X=O.slice(O.indexOf(":")+1),re=P.get(X);re&&J(re,{force:!0})},[P,J]),ne=ft.default.useCallback(()=>{for(let O of f?.blocks??[])Ni.has(O.kind)&&O.text?.trim()&&J(O,{force:C[`${f.id}:${O.id}`]?.status==="error"})},[f,J,C]);ft.default.useEffect(()=>{let O=p.current;if(!O||!n.autoTranslate||typeof IntersectionObserver>"u")return;_.current?.disconnect();let X=new IntersectionObserver(re=>{for(let $ of re){if(!$.isIntersecting)continue;let xe=$.target.getAttribute("data-seg-id"),me=P.get(xe);me&&J(me)}},{root:O,rootMargin:"420px 0px 520px 0px",threshold:.01});for(let re of O.querySelectorAll("[data-seg-id]"))X.observe(re);return _.current=X,()=>X.disconnect()},[P,f?.id,J,n.autoTranslate]),ft.default.useLayoutEffect(()=>{let O=p.current;if(!O||!o||n.readingMode==="book")return;let X=o.edge==="end"?1:Math.max(0,Math.min(1,Number(o.scrollRatio)||0));Ih(O,Math.max(0,O.scrollHeight-O.clientHeight)*X),a?.(o,ko(O))},[o,n.readingMode,a]);let oe=ft.default.useCallback(O=>{let X=p.current;if(!X)return;let re=Gl(X,window.getSelection());if(!re){i?.(null);return}i?.({...re,source:"flow",context:f?.blocks.map($=>$.text||"").join(`
`).slice(0,2400)||""})},[f,i]);ft.default.useEffect(()=>{if(!u?.id)return;let O=p.current,X=O?.dataset.readerNavigation||"0",re=window.setTimeout(()=>{if(!O||O!==p.current||(O.dataset.readerNavigation||"0")!==X)return;let $=u.blockId?O.querySelector(`[data-anno-block="${CSS.escape(u.blockId)}"]`):null;if(!$)return;let xe=new CustomEvent("dshr-flow-navigate",{cancelable:!0,detail:{element:$}});O.dispatchEvent(xe)&&$.scrollIntoView({block:"center",behavior:"smooth"})},120);return()=>window.clearTimeout(re)},[t,e,u]);let z=ft.default.useCallback(()=>{let O=p.current;if(!O)return;let X=Date.now();X-k.current<600||(k.current=X,s?.(_a(e,t.chapters.length,ko(O))))},[t.chapters.length,e,s]),de=ft.default.useCallback(O=>{let X=O.target.closest?.("a");if(!X)return;let re=X.getAttribute("data-chapter");if(re){O.preventDefault();let xe=Number(re);Number.isInteger(xe)&&xe>=0&&xe<t.chapters.length&&r(xe);return}let $=X.getAttribute("href")||"";$&&!$.startsWith("#")&&(O.preventDefault(),window.open($,"_blank","noopener,noreferrer"))},[t.chapters.length,r]);return f?(0,Ie.jsxs)("div",{className:"dshr-content",ref:p,onScroll:z,onMouseUp:oe,onKeyUp:oe,onClick:de,children:[(0,Ie.jsxs)("div",{className:"dshr-content__inner",children:[(0,Ie.jsxs)("article",{className:"dshr-chapter",children:[(0,Ie.jsxs)("div",{className:"dshr-chapter__kicker",children:["\u7B2C ",e+1," / ",t.chapters.length," \u7AE0",n.autoTranslate?" \xB7 \u5B9E\u65F6\u7FFB\u8BD1\u5DF2\u5F00\u542F":""]}),f.blocks.map(O=>{let X=m(O),re=C[X],$=Ni.has(O.kind)&&O.text?.trim();return(0,Ie.jsxs)("div",{className:`dshr-block dshr-block--${O.kind}`,"data-kind":O.kind,"data-seg-id":$?O.id:void 0,"data-anno-block":O.id,children:[(0,Ie.jsx)("div",{className:"dshr-block__body",children:(0,Ie.jsx)(Mh,{block:O})}),$?(0,Ie.jsx)(Ph,{state:re,onRetry:()=>se(X)}):null]},O.id)})]}),(0,Ie.jsxs)("div",{className:"dshr-chapter__nav",children:[(0,Ie.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e<=0,onClick:()=>r(e-1),children:[(0,Ie.jsx)(ta,{size:15})," ",e>0?t.chapters[e-1].title:"\u5DF2\u662F\u7B2C\u4E00\u7AE0"]}),(0,Ie.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:ne,disabled:D,title:"\u7FFB\u8BD1\u672C\u7AE0\u6240\u6709\u6BB5\u843D",children:[D?(0,Ie.jsx)("span",{className:"dshr-spinner"}):(0,Ie.jsx)(Vn,{size:15})," \u7FFB\u8BD1\u672C\u7AE0"]}),(0,Ie.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e>=t.chapters.length-1,onClick:()=>r(e+1),children:[e<t.chapters.length-1?t.chapters[e+1].title:"\u5DF2\u662F\u6700\u540E\u4E00\u7AE0"," ",(0,Ie.jsx)(ra,{size:15})]})]})]}),(0,Ie.jsx)(Yl,{containerRef:p,annotations:l,chapterId:f.id,onOpenAnnotation:d,layoutVersion:g})]}):(0,Ie.jsxs)("div",{className:"dshr-error-panel",children:[(0,Ie.jsx)("h3",{children:"\u8FD9\u4E00\u7AE0\u4E0D\u5B58\u5728"}),(0,Ie.jsx)("p",{children:"\u6587\u6863\u76EE\u5F55\u53EF\u80FD\u4E0D\u5B8C\u6574\uFF0C\u8BF7\u5C1D\u8BD5\u91CD\u65B0\u5BFC\u5165\u3002"})]})}var Eo=Mt(require("react"),1);var Ci="6.5.438-reader3",In="/dsh-reader-assets/",rc;function Oh(){return`${In}pdf.bundle.js?v=${Ci}`}function Lh(){return rc||=import(Oh()).then(t=>{if(!t?.getDocument||!t.GlobalWorkerOptions)throw new Error("PDF \u5F15\u64CE\u8D44\u6E90\u683C\u5F0F\u4E0D\u6B63\u786E");return t.GlobalWorkerOptions.workerSrc=`${In}pdf.worker.mjs?v=${Ci}`,t.GlobalWorkerOptions.rendererSrc=`${In}pdf.renderer.mjs?v=${Ci}`,t}).catch(t=>{throw rc=null,t})}var jr=()=>new DOMException("PDF operation cancelled","AbortError"),Cn=t=>{if(t?.aborted)throw jr()};async function Dh(t,e,{signal:r,onRead:n,onError:o}={}){Cn(r);let a=256*1024,i=new Uint8Array(await e.slice(0,Math.min(a,e.size)).arrayBuffer());Cn(r);let s={bytes:i.length,reads:1,total:e.size};class l extends t.PDFDataRangeTransport{constructor(){super(e.size,i,!0)}aborted=!1;queue=[];active=0;requestDataRange(u,g){this.aborted||r?.aborted||(this.queue.push({begin:u,end:g}),this.pump())}pump(){for(;!this.aborted&&this.active<2&&this.queue.length;){let{begin:u,end:g}=this.queue.shift();this.active++,e.slice(u,g).arrayBuffer().then(f=>{if(this.aborted||r?.aborted)return;let p=new Uint8Array(f);if(p.length!==g-u)throw new Error("PDF \u5206\u6BB5\u8BFB\u53D6\u4E0D\u5B8C\u6574");s.bytes+=p.length,s.reads++,n?.({...s}),this.onDataRange(u,p)}).catch(f=>{this.aborted||r?.aborted||(this.abort(),o?.(f))}).finally(()=>{this.active--,this.pump()})}}abort(){this.aborted=!0,this.queue.length=0}}return n?.({...s}),{range:new l,stats:s,rangeChunkSize:a,disableStream:!0,disableAutoFetch:!0}}async function Ta(t,{signal:e,onProgress:r,onRead:n,onError:o}={}){Cn(e);let a=await Lh();Cn(e);let i,s,l,d,u=!1,g,f,p=new Promise((x,T)=>{f=T});p.catch(()=>{});let _=()=>g||(u=!0,clearTimeout(d),s?.abort(),e?.removeEventListener("abort",k),g=Promise.resolve().then(()=>i?.destroy()).catch(()=>{}).finally(()=>l?.destroy()),g),k=()=>{f(jr()),_()};e?.addEventListener("abort",k,{once:!0});try{if(l=new a.PDFWorker({verbosity:0}),await Promise.race([l.promise,p,new Promise((R,A)=>{d=setTimeout(()=>A(new Error("PDF \u540E\u53F0\u7EBF\u7A0B\u542F\u52A8\u8D85\u65F6\uFF0C\u8BF7\u68C0\u67E5 Host \u7684 Worker \u8D44\u6E90\u4E0E\u5B89\u5168\u7B56\u7565\u3002")),1e4)})]),clearTimeout(d),Cn(e),typeof Worker!="function"||!(l.port instanceof Worker))throw new Error("PDF \u540E\u53F0\u7EBF\u7A0B\u4E0D\u53EF\u7528\uFF0C\u8BF7\u68C0\u67E5 /dsh-reader-assets/pdf.worker.mjs \u548C Host \u7684 Worker \u5B89\u5168\u7B56\u7565\u3002");let x;if(typeof Blob<"u"&&t instanceof Blob?(x=await Dh(a,t,{signal:e,onRead:n,onError:R=>{f(R),o?.(R),_()}}),s=x.range):x={data:(t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)).slice()},Cn(e),u)throw jr();i=a.getDocument({...x,worker:l,cMapUrl:`${In}cmaps/`,cMapPacked:!0,standardFontDataUrl:`${In}standard_fonts/`,wasmUrl:`${In}wasm/`,iccUrl:`${In}iccs/`,isEvalSupported:!1,disableWorkerRendering:!1,verbosity:0}),i.onProgress=r;let T=await Promise.race([i.promise,p]);if(Cn(e),u)throw jr();return{engine:a,pdf:T,close:_,source:x}}catch(x){throw await _(),x}}var Sa=class{constructor(e=48*1024*1024){this.limit=e,this.bytes=0,this.entries=new Map}get(e){let r=this.entries.get(e);return r&&(this.entries.delete(e),this.entries.set(e,r)),r}set(e,r){this.delete(e);let n=r.bitmap.width*r.bitmap.height*4;if(n>this.limit){r.bitmap.close();return}for(this.entries.set(e,{...r,bytes:n}),this.bytes+=n;this.bytes>this.limit;)this.delete(this.entries.keys().next().value)}delete(e){let r=this.entries.get(e);r&&(this.bytes-=r.bytes,r.bitmap.close(),this.entries.delete(e))}clear(){for(let e of this.entries.keys())this.delete(e)}},Ea=class{constructor(e,r,n=20){this.count=e,this.defaultHeight=r,this.gap=n,this.heights=new Map,this.tree=new Float64Array(e+1),this.paddingTop=18}setHeight(e,r){let n=r-(this.heights.get(e)??this.defaultHeight);this.heights.set(e,r);for(let o=e;o<=this.count;o+=o&-o)this.tree[o]+=n}top(e){let r=(e-1)*(this.defaultHeight+this.gap);for(let n=e-1;n>0;n-=n&-n)r+=this.tree[n];return this.paddingTop+r}height(e){return this.heights.get(e)??this.defaultHeight}pageAt(e){let r=1,n=this.count;for(;r<n;){let o=Math.ceil((r+n)/2);this.top(o)<=e?r=o:n=o-1}return r}entryAt(e){let r=this.pageAt(e);return{page:r,top:this.top(r),height:this.height(r)}}};var Fh=/[\u1100-\u11FF\u2E80-\u2EFF\u3000-\u303F\u3040-\u30FF\u3100-\u312F\u3130-\u318F\u3400-\u4DBF\u4E00-\u9FFF\uA960-\uA97F\uAC00-\uD7AF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF]/,nc=/[.。！？!?；;…]$/;function _o(t){return!!t&&Fh.test(t)}function zh(t){return String(t).replace(/\u0000/g,"").replace(/[\t\u00a0\u2000-\u200a\u202f\u205f\u3000]/g," ").replace(/\s+/g," ")}function Aa(t){return typeof t=="number"&&Number.isFinite(t)?t:null}function Bh(t){let e=t&&t.transform;if(!Array.isArray(e)||e.length<6)return null;let r=Aa(e[4]),n=Aa(e[5]);if(r===null||n===null)return null;let o=Aa(t.width),a=Aa(t.height);return{x:r,y:n,width:o===null?null:Math.abs(o),height:a===null||a<=0?null:a}}function $h(t,e){let r=0;for(let n of t)r+=_o(n)?1:.5;return r*(e||10)}function Hh(t){return{text:"",startX:t?t.x:0,endX:t?t.x:0,y:t?t.y:0,height:t&&t.height?t.height:0,hasGeometry:!!t}}function Uh(t,e,r){let n=zh(e);if(!n)return;let o="";if(t.text){let a=t.text[t.text.length-1],i=n[0];if(a===" "||i===" "||t.text.endsWith(" "))o="";else if(_o(a)||_o(i))o="";else if(r&&t.hasGeometry){let s=r.x-t.endX,l=Math.max(t.height||0,r.height||0,1);o=s>l*.18?" ":""}}if(t.text=(t.text+o+n).replace(/^ +/,""),r&&t.hasGeometry){let a=r.width===null?$h(n,r.height||t.height):r.width;t.endX=Math.max(t.endX,r.x+a),t.startX=Math.min(t.startX,r.x),r.height&&(t.height=Math.max(t.height,r.height))}}function Wh(t,e,r){if(!t||r)return!0;if(!e||!t.hasGeometry)return!1;let n=Math.max(t.height||0,e.height||0,1);return Math.abs(e.y-t.y)>n*.58||e.x<t.endX-n*2&&t.endX-t.startX>n}function jh(t,e){let r=t.lastLine;if(!r)return!1;let n=r.height||10,o=e.height||n,a=Math.max(n,o,1),i=r.y-e.y;if(i<-a*1.2||i>a*1.68)return!0;let s=o/n;return!!(s>1.18||s<.84||e.startX-t.leftX>a*1.25||nc.test(r.text)&&i>a*1.35&&r.endX<t.rightX-a*2)}function Gh(t){let e="";for(let r of t){let n=r.text.trim();if(!n)continue;if(!e){e=n;continue}let o=e[e.length-1],a=n[0];o==="-"||_o(o)||_o(a)?e+=n:e+=" "+n}return e}function qh(t){if(t.length<=1400)return[t];let e=[],r=t;for(;r.length>1400;){let n=Math.floor(770.0000000000001),o=Math.min(r.length,1400),a=-1;for(let s=o;s>n;s-=1)if(nc.test(r[s-1])||r[s-1]===`
`){a=s;break}a<=0&&(a=r.lastIndexOf(" ",o),a<n&&(a=o));let i=r.slice(0,a).trim();i&&e.push(i),r=r.slice(a).trim()}return r&&e.push(r),e}function oc(t,{metadata:e=!1}={}){let r=[],n=null,o=!1;if(Array.isArray(t))for(let[l,d]of t.entries()){if(!d||typeof d.str!="string")continue;if(!d.str.trim()){d.hasEOL&&(o=!0);continue}let u=Bh(d);Wh(n,u,o)&&(n=Hh(u),n.itemIndices=[],r.push(n)),Uh(n,d.str,u),n.itemIndices.push(d.__pdfItemIndex??l),o=!!d.hasEOL}let a=[],i=null;for(let l of r)l.text.trim()&&(!i||jh(i,l)?(i={lines:[l],lastLine:l,leftX:l.startX,rightX:l.endX},a.push(i)):(i.lines.push(l),i.lastLine=l,i.leftX=Math.min(i.leftX,l.startX),i.rightX=Math.max(i.rightX,l.endX)));let s=[];for(let l of a){let d=Gh(l.lines);for(let u of qh(d)){let g=u.trim();g&&s.push({src:g,...e?{itemIndices:l.lines.flatMap(f=>f.itemIndices)}:{}})}}return{text:s.map(l=>l.src).join(`

`),segments:s}}function Xh(t,e){let r=(t||[]).filter(d=>typeof d?.str=="string").map((d,u)=>({...d,__pdfItemIndex:u})),n=0;for(let d=0;d<(t||[]).length;d+=1)typeof t[d]?.str=="string"&&(r[n++].__pdfItemIndex=d);if(!e)return r;let o=r.filter(d=>d.str.trim().length>15&&d.width>e*.12),a=o.filter(d=>d.transform?.[4]<e*.3&&d.transform[4]+d.width<e*.53),i=o.filter(d=>d.transform?.[4]>=e*.48);if(a.length<4||i.length<4)return r;let s=[...new Set(o.filter(d=>d.transform?.[4]<e*.4&&d.transform[4]+d.width>e*.6).map(d=>Math.round(d.transform[5])))].sort((d,u)=>u-d),l=d=>{let u=d.transform?.[5]||0,g=s.filter(p=>p>u+3).length*2,f=s.some(p=>Math.abs(p-u)<=3);return[g+(f?1:0),f?0:d.transform?.[4]>=e*.48?2:1,-u,d.transform?.[4]||0]};return r.sort((d,u)=>{let g=l(d),f=l(u);for(let p=0;p<g.length;p+=1)if(g[p]!==f[p])return g[p]-f[p];return d.__pdfItemIndex-u.__pdfItemIndex})}function Ii(t,e,r){let n=oc(Xh(t,r),{metadata:!0});return{text:n.text,segments:n.segments.map((o,a)=>({...o,id:`p${e}-s${a}`,protectedTokens:[...new Set(o.itemIndices.map(i=>t[i]?.str?.trim()).filter(i=>i&&/[∑∫√≈≠≤≥∂∞]/u.test(i)&&!/[A-Za-z]{4}|[\u3400-\u9fff]/u.test(i)))]}))}}var ac=String.raw`
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
`;var ic=String.raw`
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
`;var To=Mt(require("react"),1);var sc="reader-a-1";function Rn(t){return String(t||"").split(/\r?\n/u).map(e=>e.trim()).filter(Boolean).join(`
`).slice(0,4e3)}function Vh(t,e=[]){let r=[...new Set([...e,...t.match(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]|\[\d+(?:\s*[,–—-]\s*\d+)*\]|https?:\/\/[^\s]+|\b10\.\d{4,9}\/[^\s]+/gu)||[]])].filter(a=>a&&t.includes(a)).sort((a,i)=>i.length-a.length),n=[],o=t;for(let a of r){let i=`\u27E6KEEP_${n.length}\u27E7`;o.includes(a)&&(o=o.split(a).join(i),n.push({placeholder:i,token:a}))}return{text:o,restore(a){let i=String(a||"");for(let{placeholder:s,token:l}of n){if(!i.includes(s))throw new Error("\u8BD1\u6587\u9057\u6F0F\u4E86\u516C\u5F0F\u6216\u5F15\u7528\u6807\u8BB0\uFF0C\u8BF7\u91CD\u8BD5\u672C\u6BB5\u3002");i=i.split(s).join(l)}if(/⟦KEEP_\d+⟧/u.test(i))throw new Error("\u8BD1\u6587\u5305\u542B\u65E0\u6CD5\u5BF9\u5E94\u7684\u516C\u5F0F\u6807\u8BB0\uFF0C\u8BF7\u91CD\u8BD5\u672C\u6BB5\u3002");return i}}}async function Kh(t,e){if(!globalThis.crypto?.subtle)return null;let r=new TextEncoder().encode(JSON.stringify([sc,t.documentId,e,"zh-CN",t.model?.provider,t.model?.model,t.model?.promptVersion,Rn(t.glossary)])),n=await crypto.subtle.digest("SHA-256",r);return`${t.documentId}:${Array.from(new Uint8Array(n),o=>o.toString(16).padStart(2,"0")).join("")}`}var Na=class{constructor({translate:e,cache:r,onChange:n=()=>{},onModelChanged:o=()=>{},prefetchDelay:a=700,requestTimeout:i=12e4}){this.translate=e,this.cache=r,this.onChange=n,this.onModelChanged=o,this.prefetchDelay=a,this.requestTimeout=i,this.sources=new Map,this.entries=new Map,this.jobs=new Map,this.preparing=new Map,this.epoch=0,this.sequence=0,this.activePage=1,this.visibleIds=new Set,this.config={},this.disposed=!1}configure(e){if(this.disposed)return;let r={...e,glossary:Rn(e.glossary)},n=JSON.stringify([r.documentId,r.model,r.glossary,sc]),o=n!==this.namespace;if(o){let a=this.config.documentId;this.epoch+=1,this.abortJobs(),a&&a!==r.documentId&&this.sources.clear(),this.entries.clear(),this.preparing.clear(),this.namespace=n,this.cacheIssue=""}if(this.config=r,(!r.enabled||!r.canTranslate)&&this.abortJobs(),r.prefetch===!1)for(let a of[...this.jobs.values()])a.page!==this.activePage&&this.abortJob(a);if(o)for(let[a,i]of this.sources)this.registerPage(a,i);this.emit(),this.pump()}setFocus(e,r=[]){if(!this.disposed){if(e!==this.activePage){this.activePage=e,this.prefetchAfter=Date.now()+this.prefetchDelay,clearTimeout(this.timer),this.timer=null;for(let n of[...this.jobs.values()])n.page!==e&&this.abortJob(n);for(let n of this.sources.keys())if(Math.abs(n-e)>3){this.sources.delete(n);for(let[o,a]of this.entries)a.page===n&&this.entries.delete(o)}}this.visibleIds=new Set(r),this.emit(),this.pump()}}registerPage(e,r){if(this.disposed)return;this.sources.set(e,r);let n=[];for(let[o,a]of(r.segments||[]).entries()){let i=a.id||`p${e}-s${o}`,s=`${e}:${i}`;if(this.entries.get(s)?.src===a.src)continue;let l={...a,id:i,uid:s,index:o,page:e,status:"checking",zh:"",cached:!1};this.entries.set(s,l),n.push(l)}if(n.length){let o=Symbol(),a=this.epoch;this.preparing.set(e,o),Promise.all(n.map(i=>this.prepare(i,a))).finally(()=>{this.preparing.get(e)===o&&(this.preparing.delete(e),this.pump())})}this.emit()}fresh(e,r){return!this.disposed&&r===this.epoch&&this.entries.get(e.uid)===e}async prepare(e,r){try{let n=e.src.replace(/\s/gu,"");if(n&&(n.match(/[\u3400-\u9fff]/gu)||[]).length/n.length>=.55){e.zh=e.src,e.status="done",e.passthrough=!0,this.emit();return}if(e.key=await Kh(this.config,e.src),!this.fresh(e,r))return;let o=e.key&&await this.cache?.get(e.key);if(!this.fresh(e,r))return;typeof o?.zh=="string"&&o.zh.trim()?(e.zh=o.zh,e.cached=!0,e.status="done"):e.status="queued"}catch{if(!this.fresh(e,r))return;e.status="queued",this.cacheIssue="\u672C\u5730\u7F13\u5B58\u6682\u4E0D\u53EF\u7528\uFF0C\u672C\u6B21\u8BD1\u6587\u4ECD\u53EF\u9605\u8BFB\u3002"}this.emit(),this.pump()}abortJob(e){clearTimeout(e.timeout),e.controller.abort(),this.jobs.delete(e.id);for(let r of e.entries)this.entries.get(r.uid)===r&&r.job===e.id&&(r.status="queued")}abortJobs(){clearTimeout(this.timer),this.timer=null;for(let e of[...this.jobs.values()])this.abortJob(e)}pump(){if(!(this.disposed||!this.config.enabled||!this.config.canTranslate||!this.config.documentId))for(;this.jobs.size<2;){let e=[...this.entries.values()].filter(d=>d.page===this.activePage),r=e.some(d=>d.status==="queued"||d.status==="checking"||d.status==="loading"),n=[...this.entries.values()].filter(d=>d.status==="queued"&&!this.preparing.has(d.page)&&(d.page===this.activePage||this.config.prefetch!==!1&&!r&&d.page===this.activePage+1)).sort((d,u)=>d.page-this.activePage-(u.page-this.activePage)||Number(this.visibleIds.has(u.id))-Number(this.visibleIds.has(d.id))||d.index-u.index);if(!n.length)return;let o=n[0];if(o.page!==this.activePage&&Date.now()<(this.prefetchAfter||0)){this.timer||(this.timer=setTimeout(()=>{this.timer=null,this.pump()},this.prefetchAfter-Date.now()));return}let a=[],i=0,s=e.some(d=>d.status==="done")?3:1;for(let d of n){if(d.page!==o.page||a.length>=s||i+d.src.length>3e3&&a.length)break;a.push(d),i+=d.src.length}let l={id:++this.sequence,epoch:this.epoch,controller:new AbortController,page:o.page,entries:a,config:this.config};this.jobs.set(l.id,l);for(let d of a)d.status="loading",d.job=l.id,d.error="";l.timeout=setTimeout(()=>{if(this.jobs.get(l.id)===l){this.abortJob(l);for(let d of a)this.fresh(d,l.epoch)&&(d.status="error",d.error="\u672C\u6BB5\u7FFB\u8BD1\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5\u6216\u7A0D\u540E\u7EE7\u7EED\u3002");this.emit(),this.pump()}},this.requestTimeout),this.emit(),this.run(l)}}async run(e){let r=n=>!e.controller.signal.aborted&&this.fresh(n,e.epoch)&&n.job===e.id;try{let n=this.sources.get(e.page)?.segments||[],o=e.entries.map(d=>Vh(d.src,d.protectedTokens)),a=e.entries[0].index,i=n.slice(Math.max(0,a-1),a+e.entries.length+1).map(d=>d.src);a===0&&this.sources.get(e.page-1)?.segments?.length&&i.unshift(this.sources.get(e.page-1).segments.at(-1).src),a+e.entries.length>=n.length&&this.sources.get(e.page+1)?.segments?.length&&i.push(this.sources.get(e.page+1).segments[0].src);let s=i.join(`
`).slice(0,1200),l=await this.translate(e.entries.map((d,u)=>({id:d.id,text:o[u].text})),{title:e.config.title,context:s,glossary:e.config.glossary,expectedModel:e.config.model,signal:e.controller.signal,includeMetadata:!0});if(l.model&&(l.model.provider!==e.config.model?.provider||l.model.model!==e.config.model?.model)||l.promptVersion&&l.promptVersion!==e.config.model?.promptVersion){let d=new Error("\u9ED8\u8BA4\u6A21\u578B\u5DF2\u53D8\u5316\uFF0C\u8BF7\u5237\u65B0\u7FFB\u8BD1\u670D\u52A1\u3002");throw d.code="MODEL_CHANGED",d}for(let[d,u]of e.entries.entries())if(r(u)){try{let g=l.translations?.[u.id];if(!g?.trim())throw new Error("\u672C\u6BB5\u6CA1\u6709\u8FD4\u56DE\u8BD1\u6587\uFF0C\u8BF7\u91CD\u8BD5\u3002");u.zh=o[d].restore(g),u.status="done",u.cached=!1,u.key&&Promise.resolve(this.cache?.put({key:u.key,bookId:e.config.documentId,zh:u.zh})).catch(()=>{r(u)&&(this.cacheIssue="\u8BD1\u6587\u5DF2\u5B8C\u6210\uFF0C\u4F46\u672C\u5730\u7F13\u5B58\u672A\u80FD\u4FDD\u5B58\u3002",this.emit())})}catch(g){u.status="error",u.error=g.message}this.emit()}}catch(n){for(let o of e.entries)r(o)&&(o.status="error",o.error=n.message||"\u672C\u6BB5\u7FFB\u8BD1\u5931\u8D25\u3002");!e.controller.signal.aborted&&e.epoch===this.epoch&&n.code==="MODEL_CHANGED"&&this.onModelChanged()}finally{clearTimeout(e.timeout),this.jobs.delete(e.id),this.disposed||(this.emit(),this.pump())}}retry(e,r){if(e===this.activePage)for(let n of[...this.jobs.values()])n.page!==e&&this.abortJob(n);for(let n of this.entries.values())if(n.page===e&&(r?n.id===r:n.status==="error")){if(n.status==="loading"||n.status==="checking")continue;n.status="queued",n.error="",n.cached=!1}this.emit(),this.pump()}emit(){if(this.disposed)return;let e={};for(let r of this.entries.values())(e[r.page]||=[]).push({...r});for(let r of Object.values(e))r.sort((n,o)=>n.index-o.index);this.onChange({pages:e,cacheIssue:this.cacheIssue||""})}dispose(){this.disposed=!0,this.abortJobs(),this.sources.clear(),this.entries.clear()}};var we=require("react/jsx-runtime");function lc({page:t,source:e,rows:r=[],activeId:n,originRef:o,translation:a,onActivate:i,onClose:s}){let l=To.default.useRef(null),{preferences:d,updatePreferences:u,paused:g,setPaused:f,modelError:p,refreshModel:_,cacheIssue:k,retry:x}=a,[T,R]=To.default.useState(d.glossary||"");To.default.useEffect(()=>R(d.glossary||""),[d.glossary]);let A=r.filter(L=>L.status==="done").length,P=r.filter(L=>L.status==="error").length,C=r.filter(L=>L.cached).length,E=r.map(L=>L.status).join(",");To.default.useEffect(()=>{if(!d.linked||o.current!=="source")return;let L=l.current,m=[...L?.querySelectorAll("[data-translation-segment]")||[]].find(J=>J.dataset.translationSegment===n);if(!L||!m)return;let N=L.getBoundingClientRect(),F=m.getBoundingClientRect();(F.top<N.top+8||F.bottom>N.bottom-8)&&(L.scrollTop+=F.top-N.top-12)},[t,n,E,d.linked,d.fontSize]);let D=(L,m=!1)=>i(L,{origin:"translation",reveal:m});return(0,we.jsxs)("aside",{className:"dshr-pdf-translation-panel","aria-label":"PDF \u4E2D\u6587\u5BF9\u7167",style:{"--dshr-translation-font-size":`${d.fontSize||16}px`},children:[(0,we.jsxs)("header",{className:"dshr-pdf-translation-header",children:[(0,we.jsxs)("div",{children:[(0,we.jsx)("strong",{children:"\u4E2D\u6587\u5BF9\u7167"}),(0,we.jsxs)("span",{children:["\u7B2C ",t," \u9875 \xB7 ",A,"/",r.length," \u6BB5",C?` \xB7 \u7F13\u5B58 ${C} \u6BB5`:""]})]}),(0,we.jsx)("button",{type:"button","aria-label":"\u5173\u95ED\u8BD1\u6587\u4FA7\u680F",title:"\u5173\u95ED\u8BD1\u6587\u4FA7\u680F",onClick:s,children:"\xD7"})]}),(0,we.jsxs)("div",{className:"dshr-pdf-translation-controls",children:[(0,we.jsx)("button",{type:"button",onClick:()=>f(!g),children:g?"\u7EE7\u7EED\u7FFB\u8BD1":"\u6682\u505C\u7FFB\u8BD1"}),(0,we.jsxs)("label",{children:[(0,we.jsx)("input",{type:"checkbox",checked:d.linked!==!1,onChange:L=>u({linked:L.target.checked})}),"\u6BB5\u843D\u8054\u52A8"]}),(0,we.jsx)("button",{type:"button","aria-label":"\u7F29\u5C0F\u8BD1\u6587\u5B57\u53F7",disabled:d.fontSize<=12,onClick:()=>u({fontSize:Math.max(12,d.fontSize-1)}),children:"A\u2212"}),(0,we.jsx)("span",{className:"dshr-pdf-translation-font",children:d.fontSize||16}),(0,we.jsx)("button",{type:"button","aria-label":"\u653E\u5927\u8BD1\u6587\u5B57\u53F7",disabled:d.fontSize>=24,onClick:()=>u({fontSize:Math.min(24,d.fontSize+1)}),children:"A\uFF0B"})]}),(0,we.jsxs)("div",{className:"dshr-pdf-translation-options",children:[(0,we.jsxs)("label",{children:[(0,we.jsx)("input",{type:"checkbox",checked:!!d.showSource,onChange:L=>u({showSource:L.target.checked})}),"\u663E\u793A\u539F\u6587"]}),(0,we.jsxs)("label",{children:[(0,we.jsx)("input",{type:"checkbox",checked:d.prefetch!==!1,onChange:L=>u({prefetch:L.target.checked})}),"\u9884\u8BD1\u4E0B\u4E00\u9875"]})]}),(0,we.jsxs)("details",{className:"dshr-pdf-glossary",children:[(0,we.jsxs)("summary",{children:["\u6587\u6863\u672F\u8BED\u8868",d.glossary?" \xB7 \u5DF2\u542F\u7528":""]}),(0,we.jsxs)("label",{children:["\u6BCF\u884C\u586B\u5199\u201C\u539F\u8BCD = \u4E2D\u6587\u8BD1\u6CD5\u201D",(0,we.jsx)("textarea",{"aria-label":"\u6587\u6863\u672F\u8BED\u8868",maxLength:4e3,value:T,placeholder:`band gap = \u5E26\u9699
gate = \u6805\u6781`,onChange:L=>R(L.target.value)})]}),(0,we.jsx)("button",{type:"button",disabled:Rn(T)===d.glossary,onClick:()=>u({glossary:Rn(T)}),children:"\u5E94\u7528\u5E76\u66F4\u65B0\u8BD1\u6587"})]}),p&&(!r.length||r.some(L=>L.status!=="done"))&&e?.segments.length!==0?(0,we.jsxs)("div",{className:"dshr-pdf-translation-notice",role:"status",children:[p,(0,we.jsx)("button",{type:"button",onClick:_,children:"\u5237\u65B0\u670D\u52A1"})]}):null,k?(0,we.jsx)("div",{className:"dshr-pdf-translation-notice",role:"status",children:k}):null,g?(0,we.jsx)("div",{className:"dshr-pdf-translation-notice",role:"status",children:"\u5DF2\u6682\u505C\uFF0C\u5DF2\u5B8C\u6210\u7684\u8BD1\u6587\u4ECD\u53EF\u9605\u8BFB\u3002"}):null,(0,we.jsxs)("div",{className:"dshr-pdf-translation-list",ref:l,tabIndex:0,"aria-label":`\u7B2C ${t} \u9875\u8BD1\u6587`,onWheel:()=>{o.current="translation"},children:[e?e.segments.length===0?(0,we.jsx)("p",{className:"dshr-pdf-translation-empty",children:"\u6B64\u9875\u6CA1\u6709\u53EF\u63D0\u53D6\u7684\u6587\u5B57\uFF0C\u53EF\u80FD\u662F\u626B\u63CF\u9875\u6216\u56FE\u7247\u9875\u3002"}):null:(0,we.jsx)("p",{className:"dshr-pdf-translation-empty",children:"\u6B63\u5728\u63D0\u53D6\u5F53\u524D\u9875\u6BB5\u843D\u2026"}),(e?.segments||[]).map(L=>{let m=r.find(N=>N.id===L.id)||{status:"queued"};return(0,we.jsxs)("article",{"data-translation-segment":L.id,"data-status":m.status,className:`dshr-pdf-translation-paragraph${n===L.id&&d.linked!==!1?" is-linked":""}`,onPointerEnter:()=>{d.linked!==!1&&D(L.id)},children:[(0,we.jsxs)("div",{className:"dshr-pdf-translation-paragraph-head",children:[(0,we.jsxs)("span",{children:["\u6BB5\u843D ",Number(L.id.split("-s").at(-1))+1,m.cached?" \xB7 \u7F13\u5B58":""]}),(0,we.jsxs)("div",{children:[(0,we.jsx)("button",{type:"button","aria-label":`\u5B9A\u4F4D\u6BB5\u843D ${L.id}`,onClick:()=>D(L.id,!0),children:"\u5B9A\u4F4D\u539F\u6587"}),m.status==="done"&&!m.passthrough?(0,we.jsx)("button",{type:"button","aria-label":`\u91CD\u65B0\u7FFB\u8BD1\u6BB5\u843D ${L.id}`,onClick:()=>x(t,L.id),children:"\u91CD\u8BD1\u672C\u6BB5"}):null]})]}),d.showSource?(0,we.jsx)("p",{className:"dshr-pdf-translation-original",children:L.src}):null,m.zh?(0,we.jsx)("p",{className:"dshr-pdf-translation-result",children:m.zh}):null,m.status==="done"?null:m.status==="error"?(0,we.jsxs)("div",{className:"dshr-pdf-translation-segment-error",children:[(0,we.jsx)("p",{children:m.error}),(0,we.jsx)("button",{type:"button",onClick:()=>x(t,L.id),children:"\u91CD\u8BD5\u672C\u6BB5"})]}):(0,we.jsx)("p",{className:"dshr-pdf-translation-waiting",role:"status",children:g?"\u7B49\u5F85\u7EE7\u7EED\u7FFB\u8BD1":m.status==="loading"?"\u6B63\u5728\u7FFB\u8BD1\u672C\u6BB5\u2026":m.status==="checking"?"\u6B63\u5728\u8BFB\u53D6\u5DF2\u6709\u8BD1\u6587\u2026":"\u7B49\u5F85\u7FFB\u8BD1\u2026"})]},L.id)})]}),(0,we.jsxs)("footer",{className:"dshr-pdf-translation-footer",children:[(0,we.jsx)("span",{children:"\u60AC\u505C\u5BF9\u7167\u6BB5\u843D\uFF0C\u70B9\u51FB\u201C\u5B9A\u4F4D\u539F\u6587\u201D\u8FD4\u56DE\u51FA\u5904\u3002"}),P?(0,we.jsxs)("button",{type:"button",onClick:()=>x(t),children:["\u91CD\u8BD5\u5931\u8D25\u6BB5\u843D\uFF08",P,"\uFF09"]}):null]})]})}var br=Mt(require("react"),1);var Ri={glossary:"",fontSize:16,prefetch:!0,showSource:!1,linked:!0};function cc({documentId:t,title:e,enabled:r,activePage:n,sources:o,visibleIds:a}){let[i,s]=br.default.useState({documentId:"",pages:{},cacheIssue:""}),[l,d]=br.default.useState({...Ri,documentId:""}),[u,g]=br.default.useState(null),[f,p]=br.default.useState(""),[_,k]=br.default.useState(0),[x,T]=br.default.useState(!1),R=br.default.useRef(null);return br.default.useEffect(()=>{if(!t)return;let A=!0;s({documentId:t,pages:{},cacheIssue:""}),T(!1);let P=new Na({translate:Jn,cache:{get:bl,put:xl},onChange:C=>{A&&s({documentId:t,...C})},onModelChanged:()=>{A&&k(C=>C+1)}});return R.current={documentId:t,controller:P},vl(t).catch(()=>({})).then(C=>{A&&d({...Ri,...C,documentId:t,glossary:Rn(C.glossary),fontSize:Math.max(12,Math.min(24,Number(C.fontSize)||16))})}),()=>{A=!1,P.dispose(),R.current?.controller===P&&(R.current=null)}},[t]),br.default.useEffect(()=>{if(!t)return;let A=new AbortController;p(""),Dl({signal:A.signal}).then(E=>{A.signal.aborted||(g({...E,documentId:t}),E.ready||p("\u7FFB\u8BD1\u6A21\u578B\u672A\u5C31\u7EEA\uFF0C\u8BF7\u5728 DSH \u8BBE\u7F6E\u4E2D\u9009\u62E9\u9ED8\u8BA4\u6A21\u578B\u3002"))}).catch(E=>{A.signal.aborted||(p(E.message||"\u7FFB\u8BD1\u670D\u52A1\u4E0D\u53EF\u7528\u3002"),g({documentId:t,ready:!1}))});let P=()=>{document.visibilityState==="visible"&&k(E=>E+1)},C=setInterval(P,6e4);return document.addEventListener("visibilitychange",P),()=>{A.abort(),clearInterval(C),document.removeEventListener("visibilitychange",P)}},[t,_]),br.default.useEffect(()=>{let A=R.current;if(!(!A||A.documentId!==t||l.documentId!==t||u?.documentId!==t)){A.controller.configure({documentId:t,title:e,enabled:r&&!x,canTranslate:!!u.ready,model:{provider:u.provider||"",model:u.model||"",promptVersion:u.promptVersion||""},glossary:l.glossary,prefetch:l.prefetch}),A.controller.setFocus(n,a);for(let[P,C]of Object.entries(o))Math.abs(Number(P)-n)<=3&&A.controller.registerPage(Number(P),C)}},[t,e,r,x,l.glossary,l.prefetch,l.documentId,u,n,a,o]),br.default.useEffect(()=>{t&&l.documentId===t&&yl(t,l).catch(()=>{})},[t,l]),{...i.documentId===t?i:{pages:{},cacheIssue:""},preferences:l.documentId===t?l:Ri,paused:x,model:u?.documentId===t?u:null,modelError:f,setPaused:T,refreshModel:()=>k(A=>A+1),updatePreferences:A=>d(P=>({...P,...A})),retry:(A,P)=>R.current?.controller.retry(A,P)}}var dc=Mt(require("react"),1);var Mn=require("react/jsx-runtime");function Ca(t){let e=Number(t);return Number.isFinite(e)?Math.min(1,Math.max(0,e)):0}function Yh(t,e){typeof t=="function"&&t(e)}function uc({annotations:t,onOpenAnnotation:e,page:r}){let n=dc.default.useRef(e);n.current=e;let o=Array.isArray(t)?t:[],a=[];for(let i=0;i<o.length;i+=1){let s=o[i];if(!s||!Array.isArray(s.rects)||s.rects.length===0||s.kind&&s.kind!=="pdf"||r!=null&&s.page!=null&&Number(s.page)!==Number(r))continue;let l=s.style==="underline"||s.style==="note"?s.style:"highlight",d=s.color||"#f5d76e",u=s.id==null?"":String(s.id),g=ya(`${u}|${s.createdAt||0}`),f=xa(s.width),p=ka(s),_=l==="note"||typeof s.note=="string"&&s.note.trim().length>0,k=null;for(let x=0;x<s.rects.length;x+=1){let T=s.rects[x];if(!T||typeof T!="object")continue;let R=Ca(T.x),A=Ca(T.y),P=Math.min(Ca(T.w),1-R),C=Math.min(Ca(T.h),1-A);if(!(P>.002)||!(C>.001))continue;k={x:R,y:A,width:P,height:C};let E=`${u}:${x}`;if(l==="underline")a.push((0,Mn.jsx)("svg",{className:"dshr-anno-pdf-underline",style:{left:`${R*100}%`,top:`calc(${(A+C)*100}% - 4px)`,width:`${P*100}%`,height:"5px","--dshr-anno-color":d},viewBox:"0 0 100 6",preserveAspectRatio:"none","data-anno-id":u,"aria-hidden":"true",focusable:"false",children:(0,Mn.jsx)("path",{d:wa(g,100)})},`u:${E}`));else{let D=Math.max(C*f,.004),L=A+C*va(f);a.push((0,Mn.jsx)("span",{className:"dshr-anno-pdf-band",style:{left:`${R*100}%`,top:`${L*100}%`,width:`${P*100}%`,height:`${D*100}%`,"--dshr-anno-color":d},"data-anno-id":u,"aria-hidden":"true"},`b:${E}`))}}if(_&&k){let x=k.x+k.width,T=Math.min(Math.max(.005,x+.004),.972),R=Math.max(.004,k.y);a.push((0,Mn.jsx)("button",{type:"button",className:"dshr-anno-note-btn",style:{left:`${T*100}%`,top:`${R*100}%`,"--dshr-anno-color":d},"data-anno-id":u,title:p?`\u67E5\u770B\u6279\u6CE8\uFF1A${p}`:"\u67E5\u770B\u6279\u6CE8","aria-label":p?`\u67E5\u770B\u6279\u6CE8\uFF1A${p}`:"\u67E5\u770B\u6279\u6CE8",onMouseDown:A=>A.preventDefault(),onClick:()=>Yh(n.current,u),children:(0,Mn.jsx)(fn,{size:12})},`n:${u}`))}}return(0,Mn.jsx)("div",{className:"dshr-anno-pdf-layer","data-anno-layer":"pdf",children:a})}var _e=require("react/jsx-runtime"),vc=ac+ic;var{useCallback:hc,useEffect:Lt,useLayoutEffect:Mi,useMemo:Pi,useRef:ke,useState:Et}=Eo.default,Di=612,Fi=792,Oi=.1,Li=5,fc=1.2,Zh=32,Qh="1000px 0px",Jh=1e7,pc=8192,ef=2,tf=160,rf=600;function Gr(t,e,r){return Math.min(r,Math.max(e,t))}function Ia(t,e,r,n,o=0){let a=t&&Number.isFinite(t.width)&&t.width>0?t.width:Di,i=t&&Number.isFinite(t.height)&&t.height>0?t.height:Fi,s;if((e==="fit"||e==="page")&&n>0){if(s=Math.max(1,Math.floor(n)),e==="page"&&o>0){let u=Math.floor(a/i*Math.max(1,o-36));s=Math.max(1,Math.min(s,u))}}else s=Math.max(1,Math.floor(a*Gr(r,Oi,Li)));let l=s/a,d=Math.max(1,Math.floor(i*l));return{width:s,height:d,pageScale:l}}function So(t,e,r=Jh){let n=e&&Number.isFinite(e.width)&&e.width>0?e.width:Di,o=e&&Number.isFinite(e.height)&&e.height>0?e.height:Fi,a=Math.min(Math.max(globalThis.devicePixelRatio||1,1),2),i=t*a,s=n*o*i*i;s>r&&(i*=Math.sqrt(r/s));let l=Math.max(n,o)*i;return l>pc&&(i*=pc/l),Math.max(Number.EPSILON,i)}function gc(t){let e=t&&t.name;return e==="RenderingCancelledException"||e==="AbortException"||e==="AbortError"||e==="WorkerTaskCancelled"}function mc(t){let e=t&&t.name,r=t&&t.message?String(t.message):String(t||"");return e==="PasswordException"?"\u8BE5 PDF \u5DF2\u52A0\u5BC6\uFF0C\u9700\u8981\u5BC6\u7801\u624D\u80FD\u6253\u5F00\u3002":e==="InvalidPDFException"?"\u6587\u4EF6\u4E0D\u662F\u6709\u6548\u7684 PDF\uFF0C\u6216\u8005\u5DF2\u7ECF\u635F\u574F\u3002":e==="MissingPDFException"?"\u6CA1\u6709\u627E\u5230 PDF \u6570\u636E\u3002":e==="UnexpectedResponseException"?`PDF \u6570\u636E\u8BFB\u53D6\u5931\u8D25${r?`\uFF1A${r}`:"\u3002"} `:/dynamically imported module|Importing a module script failed|Failed to fetch|error loading|Cannot find module/i.test(r)?"PDF \u5F15\u64CE\u52A0\u8F7D\u5931\u8D25\uFF08/dsh-reader-assets/pdf.bundle.js\uFF09\u3002\u8BF7\u786E\u8BA4 Host \u5DF2\u6B63\u786E\u63D0\u4F9B\u9759\u6001\u8D44\u6E90\u540E\u91CD\u8BD5\u3002":r?`PDF \u52A0\u8F7D\u5931\u8D25\uFF1A${r}`:"PDF \u52A0\u8F7D\u5931\u8D25\u3002"}function bc(t){if(!t)return null;let e=t.nodeType===1?t:t.parentElement;if(!e||typeof e.closest!="function")return null;let r=e.closest("[data-page]");if(!r)return null;let n=Number(r.getAttribute("data-page"));return Number.isFinite(n)?n:null}function nf(t){if(!t||t.rangeCount===0)return null;let e=t.getRangeAt(0),r=typeof e.getClientRects=="function"?e.getClientRects():null;if(!r||r.length===0){let s=e.getBoundingClientRect();return s&&(s.width||s.height)?s:null}if(r.length===1)return r[0];let n=1/0,o=1/0,a=-1/0,i=-1/0;for(let s=0;s<r.length;s+=1){let l=r[s];!l||!l.width&&!l.height||(n=Math.min(n,l.left),o=Math.min(o,l.top),a=Math.max(a,l.right),i=Math.max(i,l.bottom))}if(!Number.isFinite(n))return e.getBoundingClientRect();try{return new DOMRect(n,o,Math.max(0,a-n),Math.max(0,i-o))}catch{return e.getBoundingClientRect()}}function xc(t){let e=Zh,r=t.querySelector(".dshr-pdf-content");if(r){let n=getComputedStyle(r),o=Number.parseFloat(n.paddingLeft)||0,a=Number.parseFloat(n.paddingRight)||0;e=o+a}return Math.max(120,t.clientWidth-e)}var of=Eo.default.memo(function({pageNumber:e,dim:r,mode:n,scale:o,viewportWidth:a,viewportHeight:i,rendered:s,active:l=!0,registerPageElement:d,registerFrameElement:u,annotations:g,onOpenAnnotation:f}){let p=Ia(r,n,o,a,i),_=Eo.default.useCallback(x=>d(e,x),[e,d]),k=Eo.default.useCallback(x=>u(e,x),[e,u]);return(0,_e.jsx)("div",{className:"dshr-pdf-page","data-page":e,"data-active":l?"true":"false",style:l?void 0:{display:"none"},ref:_,children:(0,_e.jsx)("div",{className:"dshr-pdf-page-col",style:{width:`${p.width}px`},children:(0,_e.jsxs)("div",{className:"dshr-pdf-frame","data-page":e,"data-rendered":s?"true":"false",style:{width:`${p.width}px`,height:`${p.height}px`,"--total-scale-factor":String(p.pageScale)},ref:k,children:[(0,_e.jsx)("div",{className:"dshr-pdf-placeholder","aria-hidden":"true",children:e}),(0,_e.jsx)("canvas",{className:"dshr-pdf-canvas",width:1,height:1}),(0,_e.jsx)("div",{className:"dshr-pdf-text-layer"}),(0,_e.jsx)(uc,{annotations:g,onOpenAnnotation:f}),(0,_e.jsx)("div",{className:"dshr-pdf-page-loading","aria-hidden":"true",children:(0,_e.jsx)("span",{className:"dshr-pdf-spinner"})})]})})})});function yc({data:t,documentId:e="",fileName:r="",initialPage:n=1,autoTranslate:o=!1,pageTranslations:a,onReady:i,onPageChange:s,onPageText:l,onSelection:d,onRetryTranslation:u,annotations:g=[],onOpenAnnotation:f,focusAnnotation:p,hideTranslations:_=!1,paged:k=!1,onHideTranslations:x}){let T=ke(null);T.current={autoTranslate:o,paged:k,onReady:i,onPageChange:s,onPageText:l,onSelection:d,onRetryTranslation:u,onOpenAnnotation:f};let R=ke(null),A=ke(null),P=ke(new Map),C=ke(new Map),E=ke(new Map),D=ke(new Map),L=ke({width:Di,height:Fi}),m=ke(new Map),N=ke(new Set),F=ke([]),J=ke(new Set),se=ke(null),ne=ke(null),oe=ke(null),z=ke(new Sa),de=ke(0),O=ke(!1),X=ke("fit"),re=ke(1),$=ke(0),xe=ke(0),me=ke(!1),Te=ke(0),q=ke(1),Ge=ke(!!o),Re=ke([]),Me=ke(new Set),$e=ke(0),He=ke(0),Ue=ke(0),h=ke(0),c=ke(null),S=ke(0),v=ke(null),ee=ke(!1),ue=ke(""),le=ke(0),be=ke(!1),Ne=ke(!1),Pe=ke(!1),[te,De]=Et("loading"),[Ze,qe]=Et(null),[Xe,Oe]=Et(null),[fe,Qe]=Et(0),[lt,ct]=Et({}),[pt,er]=Et(null),[wt,Nt]=Et("fit"),[mt,tr]=Et(1),[It,St]=Et(0),[bt,V]=Et(0),[ie,ye]=Et(!1),[he,gt]=Et(Gr(Number.parseInt(n,10)||1,1,999999)),[tt,Ft]=Et({}),[nr,cn]=Et(""),[Br,$r]=Et(!1),[kt,Er]=Et(0),[ut,Ut]=Et({}),[jn,xn]=Et([]),[ur,vn]=Et(null),[or,yn]=Et(!1),Ar=ke(null),rn=ke("source"),Rt=o&&!_&&!or,ar=cc({documentId:e,title:r,enabled:Rt,activePage:he,sources:ut,visibleIds:jn}),pe=ke(!1);pe.current=Rt&&ar.preferences.linked!==!1,Ar.current=ur;let y=Pi(()=>{let b=new Ea(fe,Ia(pt,ie?"page":wt,mt,It,bt).height);for(let[I,B]of Object.entries(lt))b.setHeight(Number(I),Ia(B,ie?"page":wt,mt,It,bt).height);return b.paddingTop=c.current?.paddingTop??18,b},[fe,pt,lt,ie,wt,mt,It,bt]);c.current=y,Mi(()=>{let b=v.current;v.current=null,b&&b.revision===S.current&&!k&&ai(b.anchor)},[y,k]),Lt(()=>{o&&!_&&yn(!1)},[o,_]);function j(b,I){m.current.set(b,I),Ut(B=>B[b]===I?B:Object.fromEntries(Object.entries({...B,[b]:I}).filter(([G])=>Math.abs(Number(G)-q.current)<=3)))}function ce(b,I){return[...b?.querySelectorAll("[data-pdf-segments]")||[]].filter(B=>B.dataset.pdfSegments.split("|").includes(I))}function Je(b,{origin:I="source",reveal:B=!1}={},G=q.current){if(rn.current=I,vn(rt=>rt?.page===G&&rt.id===b?rt:{page:G,id:b}),I==="source"&&G!==q.current&&ir(G),!B)return;let ae=A.current,K=ce(C.current.get(G),b)[0];if(!ae||!K)return;let Ee=K.getBoundingClientRect(),Ke=ae.getBoundingClientRect();(Ee.top<Ke.top+12||Ee.bottom>Ke.bottom-12)&&ae.scrollTo({top:Math.max(0,ae.scrollTop+Ee.top-Ke.top-28),behavior:"auto"})}function xt(){let b=A.current,I=C.current.get(q.current);if(!b||!I)return;let B=b.getBoundingClientRect(),G=new Set;for(let Ee of I.querySelectorAll("[data-pdf-segments]")){let Ke=Ee.getBoundingClientRect();if(Ke.bottom>B.top+4&&Ke.top<B.bottom-4)for(let rt of Ee.dataset.pdfSegments.split("|"))G.add(rt)}let ae=[...G];xn(Ee=>Ee.join("|")===ae.join("|")?Ee:ae);let K=Ar.current;ae.length&&(!K||K.page!==q.current||!G.has(K.id)&&rn.current==="source")&&Je(ae[0])}Lt(()=>{for(let b of C.current.values())for(let I of b.querySelectorAll("[data-pdf-segments]"))pe.current&&Number(b.dataset.page)===ur?.page&&I.dataset.pdfSegments.split("|").includes(ur.id)?I.dataset.pdfLinked="true":delete I.dataset.pdfLinked},[ur,tt,ut,Rt,ar.preferences.linked]),Lt(()=>{if(te!=="ready")return;let b=requestAnimationFrame(xt);return()=>cancelAnimationFrame(b)},[he,te,ut,Rt]),Lt(()=>{if(!e||!Rt||ar.paused||ar.preferences.prefetch===!1||te!=="ready"||!tt[he]||he>=fe)return;let b=!1,I=de.current,B=he+1,G=setTimeout(async()=>{if(!($e.current>0))try{let ae=await ne.current?.getPage(B);if(!ae||b)return;let K=await ae.getTextContent();if(b||I!==de.current)return;j(B,Ii(K.items,B,ae.getViewport({scale:1}).width))}catch{}},850);return()=>{b=!0,clearTimeout(G)}},[e,he,fe,te,Rt,ar.paused,ar.preferences.prefetch,tt]),Ge.current=!!o,X.current=wt,re.current=mt,$.current=It,xe.current=bt,me.current=ie,Te.current=fe,pt&&(L.current=pt);function Ve(b){let I=D.current.get(b);return I||L.current}function vt(b){return Ia(Ve(b),me.current?"page":X.current,re.current,$.current,xe.current)}function Wt(b){return vt(b).pageScale}function Nr(b){let I=E.current.get(b);return I||(I={page:null,token:0,wantRender:!1,rendered:!1,rendering:!1,renderTask:null,textLayer:null,textContent:null,grouped:null,lastRenderScale:null,lastRasterScale:0,textLayerReady:!1},E.current.set(b,I)),I}function Cr(b,I){Ft(B=>{if(I)return B[b]?B:{...B,[b]:!0};if(!B[b])return B;let G={...B};return delete G[b],G})}function _t(b,I,B){if(!(I>0)||!(B>0))return!1;let G=D.current.get(b);return G&&Math.abs(G.width-I)<.05&&Math.abs(G.height-B)<.05?!1:(!v.current&&!T.current?.paged&&(v.current={anchor:dn(),revision:S.current}),D.current.set(b,{width:I,height:B}),ct(ae=>({...ae,[b]:{width:I,height:B}})),hr(),!0)}function nn(){if(T.current?.paged)return;let b=A.current;if(!b)return;let I=b.querySelector(".dshr-pdf-content");I&&c.current&&(c.current.paddingTop=Number.parseFloat(getComputedStyle(I).paddingTop)||0)}function hr(){Ue.current||(Ue.current=requestAnimationFrame(()=>{Ue.current=0,nn()}))}function ir(b){if(!Number.isFinite(b)||b===q.current||(q.current=b,gt(b),rn.current="source",!Pe.current))return;let I=T.current&&T.current.onPageChange;I&&I(b)}function Vo(){if(T.current?.paged||!Pe.current)return;let b=A.current;if(!b)return;let I=c.current;if(!I?.count)return;let B=b.scrollTop+Gr(b.clientHeight*.28,48,240);ir(I.pageAt(B))}function dn(){if(T.current?.paged||!A.current||!c.current?.count)return null;let b=A.current.scrollTop,I=c.current.entryAt(b+1);return{page:I.page,ratio:Gr((b-I.top)/I.height,0,1)}}function ai(b){!b||T.current?.paged||!A.current||!c.current?.count||(A.current.scrollTop=Math.max(0,c.current.top(b.page)+b.ratio*c.current.height(b.page)))}function bo(b){requestAnimationFrame(()=>{requestAnimationFrame(()=>{O.current||b()})})}function un(b){if(!Ge.current||J.current.has(b))return;let I=m.current.get(b);if(!I||(J.current.add(b),!I.text))return;let B=T.current&&T.current.onPageText;B&&B(b,{text:I.text,segments:I.segments.map(G=>({src:G.src}))})}function ii(){N.current.forEach(b=>un(b))}function fr(b,I,B){return!O.current&&B===de.current&&I===b.token&&b.wantRender}async function si(b){let I=ne.current,B=se.current,G=C.current.get(b);if(!I||!B||!G)return;let ae=de.current,K=Nr(b),Ee=K.token+=1;if(K.renderTask){try{K.renderTask.cancel()}catch{}K.renderTask=null}if(K.textLayer){try{K.textLayer.cancel()}catch{}K.textLayer=null}let Ke=G.querySelector("canvas.dshr-pdf-canvas"),rt=G.querySelector(".dshr-pdf-text-layer");if(!(!Ke||!rt)){K.rendering=!0,K.renderFailed=!1;try{let Be=K.page;if(!Be){if(Be=await I.getPage(b),!fr(K,Ee,ae))return;K.page=Be}let ht=Be.getViewport({scale:1}),yt=Ve(b);(Math.abs(ht.width-yt.width)>.05||Math.abs(ht.height-yt.height)>.05)&&_t(b,ht.width,ht.height);let st=vt(b),xo=Ve(b),ci=()=>T.current?.paged?b===q.current:N.current.has(b),di=So(st.pageScale,xo),kn=!K.rendered&&z.current.get(b);kn&&(Ke.width=kn.bitmap.width,Ke.height=kn.bitmap.height,Ke.getContext("2d",{alpha:!1}).drawImage(kn.bitmap,0,0),K.rendered=!0,K.lastRenderScale=kn.scale,K.lastRasterScale=kn.rasterScale,G.dataset.pdfQuality=kn.rasterScale>=di-.002?"full":"preview",R.current&&(R.current.dataset.pdfCacheHits=String((Number(R.current.dataset.pdfCacheHits)||0)+1)),Cr(b,!0));let Gu=K.lastRenderScale===null||Math.abs(K.lastRenderScale-st.pageScale)>=.002,vo=ci()?di:Math.min(So(st.pageScale,xo,2e6),st.pageScale);if(!K.rendered||Gu||K.lastRasterScale<vo-.002){let pr=Math.min(vo,st.pageScale),Qo=!K.rendered&&pr<vo-.002?[pr,vo]:[vo];for(let on=0;on<Qo.length;on++){if(on&&(await new Promise(rr=>setTimeout(rr,32)),!fr(K,Ee,ae)||!ci()))return;let Gn=Qo[on],qn=Be.getViewport({scale:Gn}),Rr=document.createElement("canvas");Rr.width=Math.max(1,Math.floor(qn.width)),Rr.height=Math.max(1,Math.floor(qn.height));try{let rr=Be.render({canvas:Rr,viewport:qn,intent:"display",background:"#ffffff"});rr.onContinue=sr=>setTimeout(()=>{fr(K,Ee,ae)?sr():rr.cancel()},ci()?0:16),K.renderTask=rr;try{await rr.promise}finally{K.renderTask===rr&&(K.renderTask=null)}if(!fr(K,Ee,ae))return;if(R.current){let sr=rr.isWorkerRendering?"pdfWorkerRenders":"pdfMainRenders";R.current.dataset[sr]=String((Number(R.current.dataset[sr])||0)+1),R.current.dataset.pdfRenderer=rr.isWorkerRendering?"worker":"main"}Ke.width=Rr.width,Ke.height=Rr.height;let Xn=Ke.getContext("2d",{alpha:!1});if(!Xn)throw new Error("\u65E0\u6CD5\u521B\u5EFA PDF \u753B\u5E03\u4E0A\u4E0B\u6587");if(Xn.drawImage(Rr,0,0),K.lastRenderScale=st.pageScale,K.lastRasterScale=Gn,K.rendered=!0,G.dataset.pdfQuality=Gn>=di-.002?"full":"preview",Cr(b,!0),typeof createImageBitmap=="function")try{let sr=await createImageBitmap(Rr);if(!fr(K,Ee,ae)){sr.close();return}z.current.set(b,{bitmap:sr,scale:st.pageScale,rasterScale:Gn}),R.current&&(R.current.dataset.pdfCacheBytes=String(z.current.bytes))}catch{}}finally{Rr.width=0,Rr.height=0}}}if(T.current?.paged?b!==q.current:!N.current.has(b))return;try{let pr=K.textContent;if(!pr){if(pr=await Be.getTextContent(),!fr(K,Ee,ae))return;K.textContent=pr}K.grouped||(K.grouped=Ii(pr.items,b,ht.width),j(b,K.grouped)),rt.replaceChildren();let Qo=Be.getViewport({scale:st.pageScale}),on=new B.TextLayer({textContentSource:pr,container:rt,viewport:Qo});K.textLayer=on;try{await on.render()}finally{K.textLayer===on&&(K.textLayer=null)}if(!fr(K,Ee,ae))return;K.textLayerReady=!0;let Gn=on.textDivs||[],qn=new Map,Rr=0;pr.items.forEach((rr,Xn)=>{typeof rr.str=="string"&&qn.set(Xn,Gn[Rr++])});for(let rr of K.grouped.segments)for(let Xn of rr.itemIndices||[]){let sr=qn.get(Xn);if(!sr)continue;let Jo=new Set((sr.dataset.pdfSegments||"").split("|").filter(Boolean));Jo.add(rr.id),sr.dataset.pdfSegments=[...Jo].join("|"),sr.dataset.pdfSegment=[...Jo][0],pe.current&&Ar.current?.page===b&&Jo.has(Ar.current.id)&&(sr.dataset.pdfLinked="true")}xt()}catch(pr){gc(pr)||console.warn("[dsh-reader] PDF \u6587\u672C\u5C42\u6E32\u67D3\u5931\u8D25",pr)}if(!fr(K,Ee,ae))return;N.current.has(b)&&un(b)}catch(Be){gc(Be)||(K.renderFailed=!0,console.warn(`[dsh-reader] \u7B2C ${b} \u9875\u6E32\u67D3\u5931\u8D25`,Be))}finally{K.rendering=!1}}}function Ko(){if(!O.current)for(;$e.current<ef&&Re.current.length>0;){Re.current.sort((Ee,Ke)=>Math.abs(Ee.pageNumber-q.current)-Math.abs(Ke.pageNumber-q.current));let b=Re.current[0],I=E.current.get(q.current);if(b.pageNumber!==q.current&&(!I?.rendered||I.rendering))break;let B=Re.current.shift();Me.current.delete(B.pageNumber);let G=E.current.get(B.pageNumber);if(!G||!G.wantRender||G.rendering||!C.current.has(B.pageNumber))continue;$e.current+=1;let ae=de.current,K=G.token+1;si(B.pageNumber).catch(()=>{}).finally(()=>{if(ae===de.current){if($e.current=Math.max(0,$e.current-1),G.wantRender&&C.current.has(B.pageNumber)){let Ee=vt(B.pageNumber),rt=(T.current?.paged?B.pageNumber===q.current:N.current.has(B.pageNumber))&&G.rendered&&!G.renderFailed&&G.lastRasterScale<So(Ee.pageScale,Ve(B.pageNumber))-.002;(G.token!==K||rt||G.rendered&&Math.abs((G.lastRenderScale||0)-Ee.pageScale)>.002)&&wn(B.pageNumber,{front:!0})}Ko()}})}}function wn(b,{front:I=!1}={}){if(!C.current.has(b))return;let B=Nr(b);if(B.wantRender=!0,I&&b===q.current&&!B.rendered)for(let[ae,K]of E.current)ae!==b&&K.renderTask&&!N.current.has(ae)&&(K.token++,K.renderTask.cancel());if(B.rendering)return;if(Me.current.has(b)){I&&Re.current.sort((ae,K)=>(K.pageNumber===b)-(ae.pageNumber===b));return}if(B.rendered&&B.lastRenderScale!==null){let ae=vt(b);if((B.textLayerReady||(T.current?.paged?b!==q.current:!N.current.has(b)))&&Math.abs(B.lastRenderScale-ae.pageScale)<.002&&B.lastRasterScale>=(b===q.current?So(ae.pageScale,Ve(b)):Math.min(So(ae.pageScale,Ve(b),2e6),ae.pageScale))-.002)return}Me.current.add(b);let G={pageNumber:b};I?Re.current.unshift(G):Re.current.push(G),Ko()}function w(b){let I=E.current.get(b);if(!I)return;if(I.wantRender=!1,I.token+=1,I.renderTask){try{I.renderTask.cancel()}catch{}I.renderTask=null}if(I.textLayer){try{I.textLayer.cancel()}catch{}I.textLayer=null}let B=C.current.get(b);if(B){let G=B.querySelector("canvas.dshr-pdf-canvas");G&&(G.width=0,G.height=0);let ae=B.querySelector(".dshr-pdf-text-layer");ae&&ae.replaceChildren()}if(I.page){try{I.page.cleanup()}catch{}I.page=null}I.textContent=null,I.grouped=null,m.current.delete(b),I.lastRenderScale=null,I.lastRasterScale=0,I.textLayerReady=!1,I.rendered&&(I.rendered=!1,Cr(b,!1)),Re.current.length>0&&(Re.current=Re.current.filter(G=>G.pageNumber!==b)),Me.current.delete(b),E.current.delete(b)}function M(){for(let[b,I]of E.current){if(!I.rendered||!I.wantRender||I.rendering)continue;let B=vt(b);(!I.textLayerReady||I.lastRenderScale===null||Math.abs(I.lastRenderScale-B.pageScale)>.002)&&wn(b)}}function Q(b=tf){He.current&&clearTimeout(He.current),He.current=setTimeout(()=>{He.current=0,M()},b)}function Fe(b){S.current++,v.current=null,b=Gr(Math.round(Number(b)||1),1,Te.current||1);let I=A.current;if(T.current?.paged){ir(b);return}if(!I||!c.current?.count){ir(b);return}let B=c.current.top(b)-10;typeof I.scrollTo=="function"?I.scrollTo({top:Math.max(0,B),behavior:"auto"}):I.scrollTop=Math.max(0,B),ir(b)}function Se(b){let I=A.current;I&&I.scrollBy({top:b*I.clientHeight*.92,behavior:"auto"})}function We(b){!b||T.current?.paged||(v.current={anchor:b,revision:S.current})}function dt(b){let I=dn(),B=X.current==="fit"?Wt(q.current):re.current,G=Gr(B*b,Oi,Li);me.current=!1,ye(!1),X.current="custom",re.current=G,Nt("custom"),tr(G),We(I)}function Hr(){let b=dn();me.current=!1,ye(!1),X.current="fit",Nt("fit"),We(b)}function Ir(){let b=dn(),I=!me.current;me.current=I,ye(I),X.current="fit",Nt("fit"),We(b),hr()}function Ur(){Fe(Math.max(1,q.current-1),"smooth")}Lt(()=>{let b=A.current;if(!b||te!=="ready")return;let I=B=>{(Number(B.detail)||1)>0?Yo():Ur()};return b.addEventListener("dshr-pdf-page-turn",I),()=>b.removeEventListener("dshr-pdf-page-turn",I)},[te,fe,he]);function Yo(){Fe(Math.min(Te.current||1,q.current+1),"smooth")}function Ru(b,I){let B=m.current.get(b);if(!B||!B.text)return;let G=B.text,ae=I.replace(/\s+/g," ").trim(),K=ae?G.indexOf(ae):-1,Ee=rf,Ke=0;if(K>=0){let ht=Math.max(80,Math.floor((Ee-Math.min(ae.length,Ee-160))/2));Ke=Math.max(0,K-ht)}let rt=Math.min(G.length,Ke+Ee);return rt-Ke<Ee&&(Ke=Math.max(0,rt-Ee)),G.slice(Ke,rt).trim()||void 0}function Zo(){if(ue.current="",!ee.current)return;ee.current=!1;let b=T.current&&T.current.onSelection;b&&b(null)}function Gs(){let b=globalThis.getSelection?globalThis.getSelection():null;if(!b||b.isCollapsed||b.rangeCount===0){Zo();return}let B=R.current;if(!B)return;let G=b.getRangeAt(0);if(!B.querySelector(".dshr-pdf-content")?.contains(G.commonAncestorContainer)){Zo();return}let ae=b.toString().replace(/\s+/g," ").trim();if(!ae){Zo();return}let K=bc(G.startContainer)||bc(G.endContainer)||q.current,Ee=nf(b);if(!Ee)return;let Ke=[K,ae,Math.round(Ee.left),Math.round(Ee.top),Math.round(Ee.width),Math.round(Ee.height)].join("|");if(Ke===ue.current)return;ue.current=Ke;let rt={text:ae,page:K,rect:Ee},Be=C.current.get(K);if(Be){let st=ql(G,Be);st.length>0&&(rt.pageRects=st)}let ht=Ru(K,ae);ht&&(rt.context=ht),ee.current=!0;let yt=T.current&&T.current.onSelection;yt&&yt(rt)}let Mu=hc((b,I)=>{I?P.current.set(b,I):P.current.delete(b)},[]),Pu=hc((b,I)=>{if(I){C.current.set(b,I);for(let G of F.current)G.observe(I);let B=E.current.get(b);B&&(B.rendered=!1,B.textLayerReady=!1,B.lastRenderScale=null,Cr(b,!1))}else{let B=C.current.get(b);if(B)for(let G of F.current)G.unobserve(B);N.current.delete(b),w(b),C.current.delete(b)}},[]);function Ou(b){let I=b.target;if(I&&typeof I.closest=="function"&&I.closest('button, a, input, textarea, select, [role="button"]'))return;let B=R.current;B&&typeof B.focus=="function"&&B.focus({preventScroll:!0})}function Lu(b){if(b.defaultPrevented||b.altKey||T.current?.paged)return;let I=b.target;if(I?.closest?.(".dshr-pdf-translation-panel"))return;let B=I&&I.tagName?I.tagName.toLowerCase():"";if(B==="input"||B==="textarea"||B==="select"||I&&I.isContentEditable)return;let G=A.current;if(!(!G||te!=="ready"))switch(b.key){case"PageDown":b.preventDefault(),Se(1);break;case"PageUp":b.preventDefault(),Se(-1);break;case"Home":b.preventDefault(),G.scrollTo({top:0,behavior:"auto"}),ir(1);break;case"End":b.preventDefault(),G.scrollTo({top:G.scrollHeight,behavior:"auto"}),ir(Te.current||1);break;default:break}}function qs(){for(let b of E.current.values()){if(b.token+=1,b.renderTask)try{b.renderTask.cancel()}catch{}if(b.textLayer)try{b.textLayer.cancel()}catch{}if(b.page)try{b.page.cleanup()}catch{}}E.current.clear()}Lt(()=>{let b=!1,I=new AbortController,B;if(de.current+=1,O.current=!1,oe.current?.close(),oe.current=null,ne.current=null,z.current.clear(),R.current){for(let ae of["pdfReadBytes","pdfSourceBytes","pdfRangeReads","pdfCacheHits","pdfCacheBytes","pdfWorkerRenders","pdfMainRenders"])R.current.dataset[ae]="0";delete R.current.dataset.pdfRenderer}qs(),P.current.clear(),C.current.clear(),D.current.clear(),m.current.clear(),N.current.clear(),J.current.clear(),Re.current=[],Me.current.clear(),$e.current=0,v.current=null,S.current++,Ne.current=!1,De("loading"),qe(null),Oe(null),Qe(0),ct({}),er(null),Ft({}),cn(""),$r(!1),gt(1),Ut({}),vn(null),xn([]),q.current=0,Pe.current=!1;let G=typeof Blob<"u"&&t instanceof Blob;if(!G&&!(t instanceof ArrayBuffer)&&!ArrayBuffer.isView(t)||(G?t.size===0:t.byteLength===0)){De("error"),qe("\u6CA1\u6709\u53EF\u663E\u793A\u7684 PDF \u6570\u636E\u3002");return}return(async()=>{try{if(B=await Ta(t,{signal:I.signal,onRead:st=>{!b&&R.current&&(R.current.dataset.pdfReadBytes=String(st.bytes),R.current.dataset.pdfSourceBytes=String(st.total),R.current.dataset.pdfRangeReads=String(st.reads))},onProgress:st=>{!b&&st?.total>0&&Oe(Math.max(1,Math.min(100,Math.round(st.loaded/st.total*100))))},onError:st=>{b||(De("error"),qe(mc(st)))}}),b){B.close();return}oe.current=B;let{engine:ae,pdf:K}=B;se.current=ae,ne.current=K;let Ee=await K.getPage(1);if(b)return;let Ke=Ee.getViewport({scale:1}),rt={width:Ke.width,height:Ke.height};L.current=rt;try{Ee.cleanup()}catch{}let Be=Gr(Number.parseInt(n,10)||1,1,K.numPages),ht=null;if(Be!==1)try{let st=await K.getPage(Be),xo=st.getViewport({scale:1});ht={width:xo.width,height:xo.height},D.current.set(Be,ht),st.cleanup()}catch{}if(b)return;er(rt),ct(ht?{[Be]:ht}:{}),Qe(K.numPages),Te.current=K.numPages,Oe(null),De("ready"),gt(Be),q.current=Be;let yt=T.current&&T.current.onReady;yt&&yt({pageCount:K.numPages})}catch(ae){if(b)return;B?.close(),oe.current=null,ne.current=null,Oe(null),De("error"),qe(mc(ae))}})(),()=>{if(b=!0,I.abort(),O.current=!0,de.current+=1,qs(),B?.close(),oe.current=null,ne.current=null,z.current.clear(),Re.current=[],Me.current.clear(),He.current&&(clearTimeout(He.current),He.current=0),Ue.current&&(cancelAnimationFrame(Ue.current),Ue.current=0),h.current&&(cancelAnimationFrame(h.current),h.current=0),ee.current){ee.current=!1;let ae=T.current&&T.current.onSelection;ae&&ae(null)}}},[t,kt]),Lt(()=>{let b=()=>Gs(),I=()=>Gs(),B=()=>{le.current||(le.current=requestAnimationFrame(()=>{le.current=0;let G=globalThis.getSelection?globalThis.getSelection():null;(!G||G.isCollapsed||G.rangeCount===0)&&Zo()}))};return document.addEventListener("mouseup",b,!0),document.addEventListener("keyup",I,!0),document.addEventListener("selectionchange",B),()=>{document.removeEventListener("mouseup",b,!0),document.removeEventListener("keyup",I,!0),document.removeEventListener("selectionchange",B),le.current&&(cancelAnimationFrame(le.current),le.current=0)}},[]),Mi(()=>{if(te!=="ready")return;let b=A.current;if(!b)return;let I=xc(b);I>0&&($.current=I,St(I)),b.clientHeight>0&&(xe.current=b.clientHeight,V(b.clientHeight))},[te,fe]),Lt(()=>{k&&ye(!0)},[k]),Lt(()=>{if(!k)return;let b=A.current;b&&(b.scrollTop=0)},[k]),Lt(()=>{if(!k||te!=="ready"||fe<=0)return;N.current=new Set([he]),un(he);let b=[he];for(let G=1;G<=2;G+=1)b.push(he+G,he-G);let B=b.filter((G,ae,K)=>G>=1&&G<=fe&&K.indexOf(G)===ae).map((G,ae)=>window.setTimeout(()=>wn(G,{front:ae===0}),ae===0?0:ae===1?30:1e3+(ae-2)*120));return()=>{for(let G of B)window.clearTimeout(G)}},[k,te,he,fe,ie,wt,mt,It,bt]),Lt(()=>{if(!k||te!=="ready")return;let b=A.current;b&&b.dispatchEvent(new CustomEvent("dshr-pdf-page-state",{detail:{page:he,pages:fe}}))},[k,te,he,fe]),Lt(()=>{te==="ready"&&(hr(),Q())},[ie,bt,te]),Lt(()=>{if(te!=="ready")return;let b=A.current;if(!b)return;let I=!1,B=null,G=null,ae=()=>{let rt=xc(b),Be=b.clientHeight,ht=rt>0&&Math.abs(rt-$.current)>=.5,yt=Be>0&&Math.abs(Be-xe.current)>=.5;if(!ht&&!yt)return;let st=ht||yt&&me.current?dn():null;ht&&($.current=rt,St(rt)),yt&&(xe.current=Be,V(Be)),st&&!T.current?.paged&&We(st)},K=()=>{h.current||(S.current++,v.current=null,h.current=requestAnimationFrame(()=>{h.current=0,Vo(),xt()}))},Ee=null;typeof ResizeObserver=="function"&&(Ee=new ResizeObserver(()=>{I||ae()}),Ee.observe(b)),b.addEventListener("scroll",K,{passive:!0}),!k&&typeof IntersectionObserver=="function"&&(B=new IntersectionObserver(Be=>{for(let ht of Be){let yt=Number(ht.target.getAttribute("data-page"));Number.isFinite(yt)&&(ht.isIntersecting?(N.current.add(yt),wn(yt,{front:!0}),un(yt)):N.current.delete(yt))}},{root:b,rootMargin:"0px",threshold:0}),G=new IntersectionObserver(Be=>{for(let ht of Be){let yt=Number(ht.target.getAttribute("data-page"));Number.isFinite(yt)&&(ht.isIntersecting?wn(yt):T.current?.paged||w(yt))}},{root:b,rootMargin:Qh,threshold:0}),F.current=[B,G],bo(()=>{if(!I)for(let Be of C.current.values())B.observe(Be),G.observe(Be)}));let Ke=requestAnimationFrame(()=>{I||(nn(),Vo())});return()=>{I=!0,cancelAnimationFrame(Ke),Ee&&Ee.disconnect(),B&&B.disconnect(),G&&G.disconnect(),F.current=[],b.removeEventListener("scroll",K)}},[te,fe,k]),Lt(()=>{if(te!=="ready"||fe<=0||Ne.current)return;Ne.current=!0;let b=Gr(Number.parseInt(n,10)||1,1,fe),I=setTimeout(()=>{Pe.current=!0,A.current&&(nn(),Fe(b,"auto"))},0);return()=>clearTimeout(I)},[te,fe]);let Xs=ke(k);Mi(()=>{Xs.current!==k&&(Xs.current=k,te==="ready"&&(k?A.current.scrollTop=0:Fe(q.current,"auto")))},[k,te]),Lt(()=>{te==="ready"&&(hr(),Q())},[te,wt,mt,It,lt]),Lt(()=>{te==="ready"&&hr()},[te,_]),Lt(()=>{Ge.current=!!o,o&&te==="ready"&&ii()},[o,te]);let li=Pi(()=>{if(fe<=0)return[];let b=k?2:Math.min(16,Math.max(3,Math.ceil(bt/Math.max(1,Math.min(y.defaultHeight,...y.heights.values())))+1)),I=Math.max(1,he-b),B=Math.min(fe,he+b);return Array.from({length:B-I+1},(G,ae)=>I+ae)},[k,he,fe,y,bt]),Vs=li[0]||1,Ks=li.at(-1)||0,Du=Pi(()=>{let b=new Map;for(let I of g||[]){if(!I||I.kind!=="pdf"||!Number.isFinite(I.page))continue;let B=b.get(I.page)||[];B.push(I),b.set(I.page,B)}return b},[g]);Lt(()=>{if(!p?.page||te!=="ready")return;let b=setTimeout(()=>{Fe(Gr(Number(p.page)||1,1,Te.current||1),"smooth")},80);return()=>clearTimeout(b)},[p,te]);let Fu=(wt==="fit"?Wt(he):mt)<Li-.001,zu=(wt==="fit"?Wt(he):mt)>Oi+.001;function Bu(b){let I=b.currentTarget;cn(String(he)),$r(!0),requestAnimationFrame(()=>{I&&typeof I.select=="function"&&I.select()})}function $u(b){let I=b.target.value.replace(/[^\d]/g,"").slice(0,6);cn(I)}function Hu(){if(be.current){be.current=!1,$r(!1);return}let b=Number.parseInt(nr,10);Number.isFinite(b)&&Te.current>0&&Fe(Gr(b,1,Te.current),"auto"),$r(!1)}function Uu(){Br&&Hu()}function Wu(b){b.key==="Enter"?(b.preventDefault(),b.currentTarget.blur()):b.key==="Escape"&&(b.preventDefault(),be.current=!0,$r(!1),b.currentTarget.blur())}let ju=Br?nr:String(he);return(0,_e.jsxs)("div",{className:"dshr-pdf-root",ref:R,tabIndex:0,"data-dshr-pdf":"",role:"region","aria-label":r?`PDF \u9605\u8BFB\u5668\uFF1A${r}`:"PDF \u9605\u8BFB\u5668",onKeyDown:Lu,children:[te==="ready"?(0,_e.jsxs)("div",{className:"dshr-pdf-toolbar",role:"toolbar","aria-label":"PDF \u9605\u8BFB\u5DE5\u5177\u680F",children:[r?(0,_e.jsx)("span",{className:"dshr-pdf-title",title:r,children:r}):(0,_e.jsx)("span",{className:"dshr-pdf-title"}),(0,_e.jsx)("span",{className:"dshr-pdf-toolbar-spacer"}),(0,_e.jsx)("button",{type:"button",className:"dshr-pdf-tbtn",title:"\u7F29\u5C0F","aria-label":"\u7F29\u5C0F",disabled:!zu,onClick:()=>dt(1/fc),children:"\u2212"}),(0,_e.jsx)("span",{className:"dshr-pdf-zoom-percent","data-scale":ie?"page":wt==="fit"?"fit":mt,title:ie?"\u5F53\u524D\u4E3A\u6574\u9875\u663E\u793A":wt==="fit"?"\u5F53\u524D\u4E3A\u9002\u5408\u5BBD\u5EA6":"\u5F53\u524D\u7F29\u653E\u6BD4\u4F8B",children:ie?"\u6574\u9875":wt==="fit"?"\u9002\u5BBD":`${Math.round(mt*100)}%`}),(0,_e.jsx)("button",{type:"button",className:"dshr-pdf-tbtn",title:"\u653E\u5927","aria-label":"\u653E\u5927",disabled:!Fu,onClick:()=>dt(fc),children:"\uFF0B"}),(0,_e.jsx)("button",{type:"button",className:"dshr-pdf-tbtn dshr-pdf-tbtn-wide","data-active":ie?"true":"false","aria-pressed":ie,title:ie?"\u5F53\u524D\u6574\u9875\u663E\u793A\uFF1B\u70B9\u51FB\u56DE\u5230\u9002\u5408\u5BBD\u5EA6":"\u9002\u5408\u5BBD\u5EA6\uFF1B\u70B9\u51FB\u5207\u6362\u4E3A\u6574\u9875\u663E\u793A",onClick:Ir,children:ie?"\u6574\u9875":"\u9002\u5BBD"}),(0,_e.jsx)("span",{className:"dshr-pdf-toolbar-sep","aria-hidden":"true"}),(0,_e.jsx)("button",{type:"button",className:"dshr-pdf-tbtn",title:"\u4E0A\u4E00\u9875\uFF08PageUp\uFF09","aria-label":"\u4E0A\u4E00\u9875",disabled:he<=1,onClick:Ur,children:"\u2039"}),(0,_e.jsxs)("div",{className:"dshr-pdf-pager",children:[(0,_e.jsx)("input",{className:"dshr-pdf-page-input",inputMode:"numeric","aria-label":"\u9875\u7801",value:ju,onChange:$u,onFocus:Bu,onBlur:Uu,onKeyDown:Wu}),(0,_e.jsxs)("span",{"aria-hidden":"true",children:["/ ",fe]})]}),(0,_e.jsx)("button",{type:"button",className:"dshr-pdf-tbtn",title:"\u4E0B\u4E00\u9875\uFF08PageDown\uFF09","aria-label":"\u4E0B\u4E00\u9875",disabled:he>=fe,onClick:Yo,children:"\u203A"})]}):null,(0,_e.jsxs)("div",{className:"dshr-pdf-workspace",children:[(0,_e.jsx)("div",{className:"dshr-pdf-scroll",ref:A,"data-pdf-page":k?he:void 0,"data-pdf-pages":k?fe:void 0,onMouseDown:Ou,onPointerOver:b=>{if(!pe.current||b.buttons)return;let I=b.target.closest?.("[data-pdf-segment]"),B=Number(I?.closest(".dshr-pdf-frame")?.dataset.page);I&&B&&Je(I.dataset.pdfSegment,{origin:"source"},B)},children:te==="ready"?(0,_e.jsxs)("div",{className:"dshr-pdf-content",children:[!k&&Vs>1?(0,_e.jsx)("div",{className:"dshr-pdf-spacer","aria-hidden":"true",style:{height:y.top(Vs)-y.paddingTop}}):null,li.map(b=>(0,_e.jsx)(of,{pageNumber:b,dim:Ve(b),mode:ie?"page":wt,scale:mt,viewportWidth:It,viewportHeight:bt,active:!k||b===he,rendered:!!tt[b],registerPageElement:Mu,registerFrameElement:Pu,annotations:Du.get(b),onOpenAnnotation:f},b)),!k&&Ks<fe?(0,_e.jsx)("div",{className:"dshr-pdf-spacer","aria-hidden":"true",style:{height:y.top(fe+1)-y.top(Ks+1)}}):null]}):(0,_e.jsx)("div",{className:"dshr-pdf-status",role:te==="error"?"alert":"status",children:te==="error"?(0,_e.jsxs)(_e.Fragment,{children:[(0,_e.jsx)("p",{className:"dshr-pdf-status-title dshr-pdf-status-error",children:"PDF \u52A0\u8F7D\u5931\u8D25"}),(0,_e.jsx)("p",{className:"dshr-pdf-status-detail",children:Ze}),(0,_e.jsx)("button",{type:"button",className:"dshr-pdf-status-retry",onClick:()=>Er(b=>b+1),children:"\u91CD\u65B0\u52A0\u8F7D"})]}):(0,_e.jsxs)(_e.Fragment,{children:[(0,_e.jsx)("span",{className:"dshr-pdf-status-spinner","aria-hidden":"true"}),(0,_e.jsx)("p",{className:"dshr-pdf-status-title",children:"\u6B63\u5728\u52A0\u8F7D PDF\u2026"}),Xe!==null?(0,_e.jsxs)("p",{className:"dshr-pdf-status-progress",children:[Xe,"%"]}):null]})})}),Rt?(0,_e.jsx)(lc,{page:he,source:ut[he],rows:e?ar.pages[he]||[]:(ut[he]?.segments||[]).map((b,I)=>({...b,...a?.[he]?.segments?.[I]||{},status:a?.[he]?.status||"queued",error:a?.[he]?.error})),activeId:ur?.page===he?ur.id:null,originRef:rn,translation:e?ar:{...ar,retry:b=>{J.current.delete(b),u?.(b),un(b)}},onActivate:(b,I)=>Je(b,I,he),onClose:()=>{yn(!0),x?.()}}):null]})]})}yc.displayName="PdfViewer";var wc=yc;var Or=Mt(require("react"),1);var Rb=require("react"),Dt=require("react/jsx-runtime");function Ra(t,e="i"){let r=[],n=String(t??""),o=/(\*\*[^*]+\*\*|__[^_]+__|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/gu,a=0,i=0;for(let s of n.matchAll(o)){s.index>a&&r.push(n.slice(a,s.index));let l=s[0],d=`${e}-${i++}`;if(l.startsWith("**")||l.startsWith("__"))r.push((0,Dt.jsx)("strong",{children:l.slice(2,-2)},d));else if(l.startsWith("`"))r.push((0,Dt.jsx)("code",{children:l.slice(1,-1)},d));else{let u=/^\[([^\]]+)\]\(([^)\s]+)\)$/u.exec(l);u&&/^https?:\/\//iu.test(u[2])?r.push((0,Dt.jsx)("a",{href:u[2],target:"_blank",rel:"noreferrer noopener",children:u[1]},d)):r.push(l)}a=s.index+l.length}return a<n.length&&r.push(n.slice(a)),r}function kc({text:t}){let e=String(t??"").replace(/\r\n/gu,`
`).split(`
`),r=[],n=[],o=[],a=[],i=null,s=0,l=()=>{if(n.length===0)return;let f=n.join(" ");r.push((0,Dt.jsx)("p",{children:Ra(f,`p${s}`)},`p-${s++}`)),n=[]},d=()=>{o.length!==0&&(r.push((0,Dt.jsx)("ul",{children:o.map((f,p)=>(0,Dt.jsx)("li",{children:Ra(f,`l${s}-${p}`)},`li-${s}-${p}`))},`ul-${s++}`)),o=[])},u=()=>{a.length!==0&&(r.push((0,Dt.jsx)("blockquote",{children:a.map((f,p)=>(0,Dt.jsx)("p",{children:Ra(f,`q${s}-${p}`)},`bqp-${s}-${p}`))},`bq-${s++}`)),a=[])},g=()=>{l(),d(),u()};for(let f of e){let p=f.trimEnd();if(p.trim().startsWith("```")){i===null?(g(),i=[]):(r.push((0,Dt.jsx)("pre",{children:(0,Dt.jsx)("code",{children:i.join(`
`)})},`pre-${s++}`)),i=null);continue}if(i!==null){i.push(f);continue}if(p.trim()===""){g();continue}let _=/^(#{1,4})\s+(.*)$/u.exec(p);if(_){g();let A=`h${Math.min(4,_[1].length)}`;r.push((0,Dt.jsx)(A,{children:Ra(_[2],`h${s}`)},`h-${s++}`));continue}let k=/^\s*>\s?(.*)$/u.exec(p);if(k){l(),d(),a.push(k[1]);continue}let x=/^\s*[-*+]\s+(.*)$/u.exec(p);if(x){g(),o.push(x[1]);continue}let T=/^\s*\d+[.)]\s+(.*)$/u.exec(p);if(T){g(),o.push(T[1]);continue}if(/^\s*([-*_])(?:\s*\1){2,}\s*$/u.test(p)){g(),r.push((0,Dt.jsx)("hr",{},`hr-${s++}`));continue}d(),u(),n.push(p)}return i!==null&&r.push((0,Dt.jsx)("pre",{children:(0,Dt.jsx)("code",{children:i.join(`
`)})},`pre-${s++}`)),g(),(0,Dt.jsx)(Dt.Fragment,{children:r})}var ze=require("react/jsx-runtime"),af=["\u5E2E\u6211\u68B3\u7406\u8FD9\u6BB5\u8BDD\u7684\u8BBA\u8BC1\u7ED3\u6784","\u89E3\u91CA\u5176\u4E2D\u7684\u4E13\u4E1A\u672F\u8BED\u548C\u80CC\u666F","\u7FFB\u8BD1\u5E76\u6307\u51FA\u5173\u952E\u8BED\u6CD5","\u8FD9\u6BB5\u548C\u6211\u7684\u7814\u7A76\u95EE\u9898\u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F"];function _c({open:t,onClose:e,seed:r,onGoogle:n,onToast:o}){let[a,i]=Or.default.useState([]),[s,l]=Or.default.useState(""),[d,u]=Or.default.useState(!1),[g,f]=Or.default.useState(""),p=Or.default.useRef(null),_=Or.default.useRef(null),k=r?.id??"",x=r?.text??"",T=r?.context??"",R=Or.default.useCallback(()=>{let E=_.current;E&&requestAnimationFrame(()=>{E.scrollTop=E.scrollHeight})},[]),A=Or.default.useCallback(async(E,{replace:D=!1,history:L}={})=>{let m=String(E??"").trim();if(!m||d)return;p.current?.abort();let N=new AbortController;p.current=N;let F={role:"user",content:m},se=D?[F]:[...L??a,F];i([...se,{role:"assistant",content:""}]),u(!0),f(""),R();let ne="";try{await _i({messages:se.map(oe=>({role:oe.role,content:oe.content})),selection:x,context:T,signal:N.signal},{onDelta:oe=>{ne+=oe,i(z=>{if(z.length===0)return z;let de=[...z],O=de[de.length-1];return O?.role!=="assistant"?z:(de[de.length-1]={...O,content:ne},de)}),R()}}),ne.trim()||(f("AI \u6CA1\u6709\u8FD4\u56DE\u5185\u5BB9\uFF0C\u8BF7\u91CD\u8BD5\u6216\u6362\u4E00\u79CD\u95EE\u6CD5\u3002"),i(oe=>oe.filter((z,de)=>!(de===oe.length-1&&z.role==="assistant"&&!z.content))))}catch(oe){if(En(oe))return;f(oe?.message||"AI \u8BF7\u6C42\u5931\u8D25\u3002"),i(z=>{let de=z[z.length-1];return de?.role==="assistant"&&!de.content?z.slice(0,-1):z})}finally{u(!1)}},[d,T,a,R,x]);if(Or.default.useEffect(()=>{if(!t||!k)return;p.current?.abort(),i([]),f(""),l("");let E="\u8BF7\u89E3\u91CA\u8FD9\u6BB5\u5185\u5BB9\u3002";i([{role:"user",content:E},{role:"assistant",content:""}]),u(!0);let D=new AbortController;p.current=D;let L="";return _i({messages:[{role:"user",content:E}],selection:x,context:T,signal:D.signal},{onDelta:m=>{L+=m,i(N=>{if(N.length===0)return N;let F=[...N],J=F[F.length-1];return J?.role!=="assistant"?N:(F[F.length-1]={...J,content:L},F)}),R()}}).catch(m=>{En(m)||f(m?.message||"AI \u8BF7\u6C42\u5931\u8D25\u3002")}).finally(()=>{u(!1),L.trim()||i(m=>m.filter((N,F)=>!(F===m.length-1&&N.role==="assistant"&&!N.content)))}),()=>D.abort()},[t,k]),Or.default.useEffect(()=>{t||p.current?.abort()},[t]),!t)return null;let P=E=>{E.preventDefault();let D=s.trim();!D||d||(l(""),A(D))},C=E=>{let D=x||a.find(L=>L.role==="user")?.content||"";if(!D.trim()){o?.("\u5148\u5728\u6B63\u6587\u91CC\u9009\u4E2D\u4E00\u6BB5\u6587\u5B57\uFF0C\u518D\u641C\u7D22\u3002");return}n?.(D,E?"scholar":"web")};return(0,ze.jsxs)("aside",{className:"dshr-ai","aria-label":"AI \u9605\u8BFB\u52A9\u624B",children:[(0,ze.jsxs)("div",{className:"dshr-ai__head",children:[(0,ze.jsx)(hn,{size:17}),(0,ze.jsx)("strong",{children:"AI \u9605\u8BFB\u52A9\u624B"}),(0,ze.jsx)("span",{className:"dshr-chip dshr-chip--brand",children:"DSH \u9ED8\u8BA4\u6A21\u578B"}),(0,ze.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:e,"aria-label":"\u5173\u95ED AI \u9762\u677F",title:"\u5173\u95ED",children:(0,ze.jsx)(gr,{size:16})})]}),(0,ze.jsxs)("div",{className:"dshr-ai__body",ref:_,children:[a.length===0?(0,ze.jsxs)("div",{className:"dshr-ai__welcome",children:[(0,ze.jsx)("strong",{children:"\u9009\u4E2D\u6B63\u6587\u4E2D\u7684\u4EFB\u610F\u53E5\u5B50"}),"\uFF0C\u6211\u4F1A\u89E3\u91CA\u542B\u4E49\u3001\u672F\u8BED\u548C\u8BED\u6CD5\uFF1B\u4E5F\u53EF\u4EE5\u76F4\u63A5\u8FFD\u95EE\uFF0C\u6216\u8DF3\u8F6C Google / Google \u5B66\u672F\u7EE7\u7EED\u67E5\u3002",(0,ze.jsx)("div",{className:"dshr-ai__suggestions",children:af.map(E=>(0,ze.jsx)("button",{type:"button",onClick:()=>{A(E)},disabled:d,children:E},E))})]}):a.map((E,D)=>(0,ze.jsxs)("div",{className:`dshr-ai__msg${E.role==="user"?" dshr-ai__msg--user":""}`,children:[(0,ze.jsx)("span",{className:"dshr-ai__role",children:E.role==="user"?"\u4F60":"\u9605\u8BFB\u52A9\u624B"}),E.role==="assistant"?E.content?(0,ze.jsx)(kc,{text:E.content}):d&&D===a.length-1?(0,ze.jsxs)("span",{className:"dshr-translation__loading",children:[(0,ze.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u601D\u8003\u2026"]}):null:E.content]},D)),g?(0,ze.jsxs)("div",{className:"dshr-ai__error",children:[g,(0,ze.jsx)("div",{style:{marginTop:6},children:(0,ze.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>{A(a.find(E=>E.role==="user")?.content||"\u8BF7\u91CD\u65B0\u89E3\u91CA\u8FD9\u6BB5\u5185\u5BB9\u3002",{replace:!0,history:[]})},children:[(0,ze.jsx)(nl,{size:13})," \u91CD\u65B0\u56DE\u7B54"]})})]}):null]}),(0,ze.jsx)("div",{className:"dshr-ai__foot",children:(0,ze.jsxs)("form",{onSubmit:P,children:[(0,ze.jsx)("textarea",{className:"dshr-ai__input",placeholder:"\u8FFD\u95EE\uFF1A\u8FD9\u6BB5\u7684\u8BBA\u8BC1\u6709\u4EC0\u4E48\u95EE\u9898\uFF1F\uFF0F\u672F\u8BED\u662F\u4EC0\u4E48\u610F\u601D\uFF1F",value:s,onChange:E=>l(E.target.value),onKeyDown:E=>{E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),A(s),l(""))},disabled:d,"aria-label":"\u5411 AI \u8FFD\u95EE"}),(0,ze.jsxs)("div",{className:"dshr-ai__actions",children:[(0,ze.jsx)("span",{className:"dshr-ai__hint",children:"Enter \u53D1\u9001 \xB7 Shift+Enter \u6362\u884C"}),(0,ze.jsxs)("div",{style:{display:"flex",gap:5},children:[(0,ze.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>C(!1),title:"\u7528 Google \u641C\u7D22\u9009\u4E2D\u7684\u6587\u5B57",children:[(0,ze.jsx)(aa,{size:13})," Google"]}),(0,ze.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>C(!0),title:"\u7528 Google \u5B66\u672F\u641C\u7D22\u9009\u4E2D\u7684\u6587\u5B57",children:[(0,ze.jsx)(ia,{size:13})," \u5B66\u672F"]}),(0,ze.jsxs)("button",{type:"submit",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:d||!s.trim(),children:[d?(0,ze.jsx)("span",{className:"dshr-spinner"}):(0,ze.jsx)(ol,{size:13})," \u53D1\u9001"]})]})]})]})})]})}var zb=require("react");var je=require("react/jsx-runtime");function Tc({selection:t,translation:e,onTranslate:r,onAnnotate:n,onExplain:o,onGoogle:a,onCopy:i,onClose:s,onRetry:l}){if(!t?.text?.trim())return null;let d=t.rect,g=476/2,f=typeof window<"u"?window.innerWidth:1200,p=typeof window<"u"?window.innerHeight:800,_=d?d.left+d.width/2:f/2,k=Math.max(g+10,Math.min(f-g-10,_)),x=d&&d.top>70?d.top-46:Math.min(p-190,(d?.bottom??0)+10),T=Math.min(p-180,x+42);return(0,je.jsxs)(je.Fragment,{children:[(0,je.jsxs)("div",{className:"dshr-selection",style:{left:k,top:Math.max(8,x)},role:"toolbar","aria-label":"\u9009\u4E2D\u6587\u5B57\u64CD\u4F5C",onMouseDown:R=>R.preventDefault(),children:[(0,je.jsxs)("button",{type:"button",className:"dshr-selection__btn dshr-selection__btn--accent",onClick:()=>r(t),children:[(0,je.jsx)(Vn,{size:14})," \u7FFB\u8BD1"]}),(0,je.jsxs)("button",{type:"button",className:"dshr-selection__btn dshr-selection__btn--mark",onClick:()=>n(t),title:"\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u3001\u4FBF\u7B7E\u6216\u5907\u6CE8",children:[(0,je.jsx)(sa,{size:14})," \u6807\u8BB0"]}),(0,je.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>o(t),children:[(0,je.jsx)(hn,{size:14})," AI \u89E3\u91CA"]}),(0,je.jsx)("span",{className:"dshr-selection__sep"}),(0,je.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>a(t.text,"web"),title:"\u7528 Google \u641C\u7D22",children:[(0,je.jsx)(aa,{size:14})," Google"]}),(0,je.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>a(t.text,"scholar"),title:"\u7528 Google \u5B66\u672F\u641C\u7D22",children:[(0,je.jsx)(ia,{size:14})," \u5B66\u672F"]}),(0,je.jsx)("span",{className:"dshr-selection__sep"}),(0,je.jsx)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>i(t.text),title:"\u590D\u5236\u9009\u4E2D\u6587\u5B57",children:(0,je.jsx)(tl,{size:14})}),(0,je.jsx)("button",{type:"button",className:"dshr-selection__btn",onClick:s,title:"\u5173\u95ED","aria-label":"\u5173\u95ED\u9009\u4E2D\u6587\u5B57\u5DE5\u5177\u680F",children:(0,je.jsx)(gr,{size:13})})]}),e?(0,je.jsxs)("div",{className:"dshr-selection__pop",style:{left:k,top:T},onMouseDown:R=>R.preventDefault(),children:[(0,je.jsxs)("div",{className:"dshr-selection__pop-head",children:[(0,je.jsx)("span",{children:"\u4E2D\u6587\u8BD1\u6587"}),(0,je.jsx)("button",{type:"button",onClick:s,"aria-label":"\u5173\u95ED\u8BD1\u6587",children:(0,je.jsx)(gr,{size:12})})]}),e.status==="loading"?(0,je.jsxs)("span",{className:"dshr-translation__loading",children:[(0,je.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u7FFB\u8BD1\u9009\u4E2D\u5185\u5BB9\u2026"]}):e.status==="error"?(0,je.jsxs)("span",{style:{color:"var(--dshr-error)"},children:[e.error||"\u7FFB\u8BD1\u5931\u8D25\u3002"," ",(0,je.jsx)("button",{type:"button",className:"dshr-translation__retry",onClick:l,children:"\u91CD\u8BD5"})]}):String(e.zh||"").split(/\n+/u).filter(Boolean).map((R,A)=>(0,je.jsx)("p",{style:{margin:A===0?0:"8px 0 0"},children:R},A))]}):null]})}var Ma=Mt(require("react"),1);var ge=require("react/jsx-runtime");function Sc({settings:t,onChange:e,onClose:r,onClearLibrary:n,onOpenAppearance:o}){let[a,i]=Ma.default.useState(!1);Ma.default.useEffect(()=>{let l=d=>{d.key==="Escape"&&r()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[r]);let s=l=>e({...t,...l});return(0,ge.jsx)("div",{className:"dshr-modal-mask",onMouseDown:l=>{l.target===l.currentTarget&&r()},children:(0,ge.jsxs)("div",{className:"dshr-modal",role:"dialog","aria-modal":"true","aria-label":"\u9605\u8BFB\u8BBE\u7F6E",children:[(0,ge.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:12},children:[(0,ge.jsxs)("div",{style:{flex:1},children:[(0,ge.jsx)("h3",{children:"\u9605\u8BFB\u8BBE\u7F6E"}),(0,ge.jsx)("p",{children:"\u8BBE\u7F6E\u53EA\u4FDD\u5B58\u5728\u672C\u673A\uFF0C\u4E0D\u5F71\u54CD DSH \u7684\u5176\u5B83\u63D2\u4EF6\u3002"})]}),(0,ge.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:r,"aria-label":"\u5173\u95ED\u8BBE\u7F6E",children:(0,ge.jsx)(gr,{size:16})})]}),(0,ge.jsxs)("div",{className:"dshr-settings-row",children:[(0,ge.jsxs)("div",{children:[(0,ge.jsx)("div",{className:"dshr-settings-row__title",children:"\u5B57\u4F53\u3001\u80CC\u666F\u4E0E\u5E03\u5C40"}),(0,ge.jsx)("div",{className:"dshr-settings-row__hint",children:"\u5B57\u4F53\u3001\u5B57\u91CD\u3001\u5B57\u53F7\u3001\u884C\u8DDD\u3001\u9605\u8BFB\u5BBD\u5EA6\u3001\u76EE\u5F55\u5BBD\u5EA6\u3001\u4EAE\u5EA6\u3001\u80CC\u666F\u989C\u8272\u4E0E\u81EA\u5B9A\u4E49\u80CC\u666F\u56FE\u7247\u3002"})]}),(0,ge.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:o,children:[(0,ge.jsx)(la,{size:14})," \u6253\u5F00\u5916\u89C2\u9762\u677F"]})]}),(0,ge.jsxs)("div",{className:"dshr-settings-row",children:[(0,ge.jsxs)("div",{children:[(0,ge.jsx)("div",{className:"dshr-settings-row__title",children:"\u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1"}),(0,ge.jsx)("div",{className:"dshr-settings-row__hint",children:"\u6EDA\u52A8\u5230\u5916\u6587\u6BB5\u843D\u540E\u81EA\u52A8\u7FFB\u8BD1\u6210\u4E2D\u6587\uFF0C\u8BD1\u6587\u663E\u793A\u5728\u539F\u6587\u4E0B\u65B9\u3002"})]}),(0,ge.jsxs)("button",{type:"button",className:"dshr-switch",role:"switch","aria-checked":t.autoTranslate,onClick:()=>s({autoTranslate:!t.autoTranslate}),children:[(0,ge.jsx)("span",{className:"dshr-switch__track"}),t.autoTranslate?"\u5F00\u542F":"\u5173\u95ED"]})]}),(0,ge.jsxs)("div",{className:"dshr-settings-row",children:[(0,ge.jsxs)("div",{children:[(0,ge.jsx)("div",{className:"dshr-settings-row__title",children:"\u6B63\u6587\u5B57\u53F7"}),(0,ge.jsxs)("div",{className:"dshr-settings-row__hint",children:[t.fontSize,"px \xB7 \u9002\u5408\u957F\u7BC7\u9605\u8BFB\u7684\u5B57\u53F7"]})]}),(0,ge.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:5},children:[(0,ge.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--outline",onClick:()=>s({fontSize:Math.max(14,t.fontSize-1)}),"aria-label":"\u51CF\u5C0F\u5B57\u53F7",children:(0,ge.jsx)(rl,{size:15})}),(0,ge.jsxs)("span",{className:"dshr-chip",style:{minWidth:46,justifyContent:"center"},children:[t.fontSize,"px"]}),(0,ge.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--outline",onClick:()=>s({fontSize:Math.min(26,t.fontSize+1)}),"aria-label":"\u589E\u5927\u5B57\u53F7",children:(0,ge.jsx)(oa,{size:15})})]})]}),(0,ge.jsxs)("div",{className:"dshr-settings-row",children:[(0,ge.jsxs)("div",{children:[(0,ge.jsx)("div",{className:"dshr-settings-row__title",children:"\u884C\u8DDD"}),(0,ge.jsxs)("div",{className:"dshr-settings-row__hint",children:["\u5F53\u524D ",t.lineHeight.toFixed(2)]})]}),(0,ge.jsx)("input",{type:"range",min:"1.45",max:"2.2",step:"0.05",value:t.lineHeight,onChange:l=>s({lineHeight:Number(l.target.value)}),"aria-label":"\u884C\u8DDD"})]}),(0,ge.jsxs)("div",{className:"dshr-settings-row",children:[(0,ge.jsxs)("div",{children:[(0,ge.jsx)("div",{className:"dshr-settings-row__title",children:"\u7FFB\u8BD1\u4E0E AI"}),(0,ge.jsx)("div",{className:"dshr-settings-row__hint",children:"\u4F7F\u7528 DSH \u5F53\u524D\u9ED8\u8BA4\u6A21\u578B\uFF1B\u7FFB\u8BD1\u53EA\u53D1\u9001\u5F53\u524D\u6BB5\u843D\u6216\u9009\u4E2D\u6587\u5B57\uFF0C\u4E0D\u53D1\u9001\u6574\u672C\u4E66\u3002"})]}),(0,ge.jsx)("span",{className:"dshr-chip dshr-chip--brand",children:"DSH \u9ED8\u8BA4\u6A21\u578B"})]}),(0,ge.jsxs)("div",{className:"dshr-settings-row dshr-settings-row--danger",children:[(0,ge.jsxs)("div",{children:[(0,ge.jsx)("div",{className:"dshr-settings-row__title",children:"\u6E05\u7A7A\u672C\u5730\u4E66\u67B6"}),(0,ge.jsx)("div",{className:"dshr-settings-row__hint",children:"\u5220\u9664\u5DF2\u5BFC\u5165\u7684\u6240\u6709\u6587\u6863\u3001\u6279\u6CE8\u548C\u9605\u8BFB\u8FDB\u5EA6\uFF0C\u65E0\u6CD5\u64A4\u9500\u3002"})]}),a?(0,ge.jsxs)("div",{style:{display:"flex",gap:6},children:[(0,ge.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm",onClick:()=>i(!1),children:"\u53D6\u6D88"}),(0,ge.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--danger",onClick:()=>{n(),i(!1)},children:[(0,ge.jsx)(Kn,{size:13})," \u786E\u8BA4\u6E05\u7A7A"]})]}):(0,ge.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--danger",onClick:()=>i(!0),children:[(0,ge.jsx)(Kn,{size:13})," \u6E05\u7A7A"]})]})]})})}function Ec({book:t,onCancel:e,onConfirm:r}){return Ma.default.useEffect(()=>{let n=o=>{o.key==="Escape"&&e()};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[e]),(0,ge.jsx)("div",{className:"dshr-modal-mask",onMouseDown:n=>{n.target===n.currentTarget&&e()},children:(0,ge.jsxs)("div",{className:"dshr-modal",role:"dialog","aria-modal":"true","aria-label":"\u5220\u9664\u6587\u6863",children:[(0,ge.jsx)("h3",{children:"\u4ECE\u4E66\u67B6\u5220\u9664\uFF1F"}),(0,ge.jsxs)("p",{children:["\u300A",t?.title||"\u672A\u547D\u540D\u6587\u6863","\u300B\u53CA\u5176\u9605\u8BFB\u8FDB\u5EA6\u4F1A\u4ECE\u672C\u673A\u5220\u9664\u3002\u539F\u59CB\u6587\u4EF6\u4E0D\u53D7\u5F71\u54CD\u3002"]}),(0,ge.jsxs)("div",{className:"dshr-modal__actions",children:[(0,ge.jsx)("button",{type:"button",className:"dshr-btn",onClick:e,children:"\u53D6\u6D88"}),(0,ge.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--danger",onClick:r,children:[(0,ge.jsx)(Kn,{size:14})," \u5220\u9664"]})]})]})})}function Ac({message:t}){return t?(0,ge.jsx)("div",{className:"dshr-toast",role:"status",children:t}):null}var ro=Mt(require("react"),1);var ot=require("react/jsx-runtime"),sf=[{label:"Project Gutenberg",hint:"\u4E03\u4E07\u672C\u516C\u7248\u4E66",href:"https://www.gutenberg.org/"},{label:"Standard Ebooks",hint:"\u7CBE\u6821\u516C\u7248\u4E66",href:"https://standardebooks.org/"},{label:"arXiv",hint:"\u5F00\u653E\u83B7\u53D6\u8BBA\u6587",href:"https://arxiv.org/"},{label:"Open Library",hint:"\u5F00\u653E\u56FE\u4E66\u76EE\u5F55",href:"https://openlibrary.org/"},{label:"Internet Archive",hint:"\u516C\u7248\u4E0E\u5F00\u653E\u9986\u85CF",href:"https://archive.org/"},{label:"Wikisource",hint:"\u516C\u7248\u6587\u732E",href:"https://zh.wikisource.org/"}];function Nc({open:t,busy:e,onClose:r,onSubmit:n}){let[o,a]=ro.default.useState(""),[i,s]=ro.default.useState(""),l=ro.default.useRef(null);return ro.default.useEffect(()=>{t&&(s(""),window.setTimeout(()=>l.current?.focus(),30))},[t]),ro.default.useEffect(()=>{if(!t)return;let u=g=>{g.key==="Escape"&&!e&&r()};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[t,e,r]),t?(0,ot.jsx)("div",{className:"dshr-modal-mask",onMouseDown:u=>{u.target===u.currentTarget&&!e&&r()},children:(0,ot.jsxs)("div",{className:"dshr-modal dshr-online-modal",role:"dialog","aria-modal":"true","aria-label":"\u4ECE\u516C\u5F00\u6765\u6E90\u5BFC\u5165",children:[(0,ot.jsxs)("div",{className:"dshr-online-modal__head",children:[(0,ot.jsxs)("div",{children:[(0,ot.jsxs)("h3",{children:[(0,ot.jsx)(ca,{size:17})," \u4ECE\u516C\u5F00\u6765\u6E90\u5BFC\u5165"]}),(0,ot.jsx)("p",{children:"\u7C98\u8D34\u7535\u5B50\u4E66\u6587\u4EF6\u7684\u76F4\u94FE\uFF0C\u4E0B\u8F7D\u540E\u81EA\u52A8\u52A0\u5165\u4E66\u67B6\u5E76\u6253\u5F00\u3002"})]}),(0,ot.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:r,disabled:e,"aria-label":"\u5173\u95ED\u5728\u7EBF\u5BFC\u5165",children:(0,ot.jsx)(gr,{size:16})})]}),(0,ot.jsxs)("div",{className:"dshr-online-modal__notice",children:[(0,ot.jsx)("strong",{children:"\u7248\u6743\u63D0\u793A"}),(0,ot.jsx)("span",{children:"\u4EC5\u652F\u6301\u4F60\u786E\u8BA4\u6709\u6743\u4E0B\u8F7D\u7684\u516C\u5F00\u7248\u6743 / \u5F00\u653E\u83B7\u53D6\u8D44\u6E90\u3002\u672C\u529F\u80FD\u4E0D\u5185\u7F6E Z-Library \u7B49\u7248\u6743\u4E0D\u660E\u7684\u4E66\u6E90\uFF0C\u4E5F\u4E0D\u4F1A\u6293\u53D6\u767B\u5F55\u540E\u7684\u79C1\u5BC6\u9875\u9762\u3002"})]}),(0,ot.jsxs)("form",{className:"dshr-online-modal__form",onSubmit:u=>{u.preventDefault();let g=o.trim();if(!/^https:\/\//iu.test(g)){s("\u8BF7\u8F93\u5165\u4EE5 https:// \u5F00\u5934\u7684\u7535\u5B50\u4E66\u6587\u4EF6\u76F4\u94FE\u3002");return}s(""),n(g)},children:[(0,ot.jsx)("label",{htmlFor:"dshr-online-url",children:"\u6587\u4EF6\u76F4\u94FE"}),(0,ot.jsxs)("div",{className:"dshr-online-modal__input",children:[(0,ot.jsx)(ll,{size:15}),(0,ot.jsx)("input",{ref:l,id:"dshr-online-url",type:"url",value:o,onChange:u=>{a(u.target.value),s("")},placeholder:"https://www.gutenberg.org/ebooks/11.epub3.images",spellCheck:"false",autoComplete:"off",disabled:e})]}),i?(0,ot.jsx)("p",{className:"dshr-online-modal__error",children:i}):null,(0,ot.jsx)("p",{className:"dshr-online-modal__hint",children:"\u652F\u6301 PDF / EPUB / MOBI / AZW3 / TXT / Markdown / HTML \u76F4\u94FE\uFF1B\u5355\u4E2A\u6587\u4EF6\u6700\u5927 120 MB\u3002 \u53E4\u767B\u5821\u3001Standard Ebooks\u3001arXiv\u3001Open Library\u3001Internet Archive \u7B49\u7AD9\u70B9\u53EF\u6B63\u5E38\u4F7F\u7528\u3002"}),(0,ot.jsxs)("div",{className:"dshr-online-modal__actions",children:[(0,ot.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--ghost",onClick:r,disabled:e,children:"\u53D6\u6D88"}),(0,ot.jsx)("button",{type:"submit",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:e||o.trim()==="",children:e?"\u6B63\u5728\u4E0B\u8F7D\u2026":"\u4E0B\u8F7D\u5E76\u6253\u5F00"})]})]}),(0,ot.jsxs)("div",{className:"dshr-online-modal__sources",children:[(0,ot.jsx)("span",{children:"\u53BB\u54EA\u91CC\u627E\u4E66\uFF1F"}),(0,ot.jsx)("div",{className:"dshr-online-modal__source-list",children:sf.map(u=>(0,ot.jsx)("a",{href:u.href,target:"_blank",rel:"noreferrer",title:u.hint,children:u.label},u.label))})]})]})}):null}var xr=Mt(require("react"),1);var $t=class t{static GetDistanceBetweenTwoPoint(e,r){return e===null||r===null?1/0:Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))}static GetSegmentLength(e){return t.GetDistanceBetweenTwoPoint(e[0],e[1])}static GetAngleBetweenTwoLine(e,r){let n=e[0].y-e[1].y,o=r[0].y-r[1].y,a=e[1].x-e[0].x,i=r[1].x-r[0].x;return Math.acos((n*o+a*i)/(Math.sqrt(n*n+a*a)*Math.sqrt(o*o+i*i)))}static PointInRect(e,r){return r===null?null:r.x>=e.left&&r.x<=e.width+e.left&&r.y>=e.top&&r.y<=e.top+e.height?r:null}static GetRotatedPoint(e,r,n){return{x:e.x*Math.cos(n)+e.y*Math.sin(n)+r.x,y:e.y*Math.cos(n)-e.x*Math.sin(n)+r.y}}static LimitPointToCircle(e,r,n){if(t.GetDistanceBetweenTwoPoint(e,n)<=r)return n;let o=e.x,a=e.y,i=n.x,s=n.y,l=Math.sqrt(Math.pow(r,2)*Math.pow(o-i,2)/(Math.pow(o-i,2)+Math.pow(a-s,2)))+o;n.x<0&&(l*=-1);let d=(l-o)*(a-s)/(o-i)+a;return o-i+a===0&&(d=r),{x:l,y:d}}static GetIntersectBetweenTwoSegment(e,r,n){return t.PointInRect(e,t.GetIntersectBeetwenTwoLine(r,n))}static GetIntersectBeetwenTwoLine(e,r){let n=e[0].y-e[1].y,o=r[0].y-r[1].y,a=e[1].x-e[0].x,i=r[1].x-r[0].x,s=e[0].x*e[1].y-e[1].x*e[0].y,l=r[0].x*r[1].y-r[1].x*r[0].y,d=n*l-o*s,u=a*l-i*s,g=-((s*i-l*a)/(n*i-o*a)),f=-((n*l-o*s)/(n*i-o*a));if(isFinite(g)&&isFinite(f))return{x:g,y:f};if(Math.abs(d-u)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(e,r){let n=Math.abs(e.x-r.x),o=Math.abs(e.y-r.y),a=Math.max(n,o),i=[e];function s(l,d,u,g,f){return d>l?l+f*(u/g):d<l?l-f*(u/g):l}for(let l=1;l<=a;l+=1)i.push({x:s(e.x,r.x,n,a,l),y:s(e.y,r.y,o,a,l)});return i}};var Ao=class{constructor(e,r,n,o){this.direction=e;this.corner=r;this.pageWidth=parseInt(n,10),this.pageHeight=parseInt(o,10)}direction;corner;angle;position;rect;topIntersectPoint=null;sideIntersectPoint=null;bottomIntersectPoint=null;pageWidth;pageHeight;calc(e){try{return this.position=this.calcAngleAndPosition(e),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){let e=[],r=!1;return e.push(this.rect.topLeft),e.push(this.topIntersectPoint),this.sideIntersectPoint===null?r=!0:(e.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(r=!1)),e.push(this.bottomIntersectPoint),(r||this.corner==="bottom")&&e.push(this.rect.bottomLeft),e}getBottomClipArea(){let e=[];return e.push(this.topIntersectPoint),this.corner==="top"?e.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&e.push({x:this.pageWidth,y:0}),e.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?$t.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&e.push(this.sideIntersectPoint):this.corner==="top"&&e.push({x:this.pageWidth,y:this.pageHeight}),e.push(this.bottomIntersectPoint),e.push(this.topIntersectPoint),e}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){let e=$t.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?e:Math.PI-e}calcAngleAndPosition(e){let r=e;if(this.updateAngleAndGeometry(r),this.corner==="top"?r=this.checkPositionAtCenterLine(r,{x:0,y:0},{x:0,y:this.pageHeight}):r=this.checkPositionAtCenterLine(r,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(r.x-this.pageWidth)<1&&Math.abs(r.y)<1)throw new Error("Point is too small");return r}updateAngleAndGeometry(e){this.angle=this.calculateAngle(e),this.rect=this.getPageRect(e)}calculateAngle(e){let r=this.pageWidth-e.x+1,n=this.corner==="bottom"?this.pageHeight-e.y:e.y,o=2*Math.acos(r/Math.sqrt(n*n+r*r));n<0&&(o=-o);let a=Math.PI-o;if(!isFinite(o)||a>=0&&a<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(o=-o),o}getPageRect(e){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],e):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],e)}getRectFromBasePoint(e,r){return{topLeft:this.getRotatedPoint(e[0],r),topRight:this.getRotatedPoint(e[1],r),bottomLeft:this.getRotatedPoint(e[2],r),bottomRight:this.getRotatedPoint(e[3],r)}}getRotatedPoint(e,r){return{x:e.x*Math.cos(this.angle)+e.y*Math.sin(this.angle)+r.x,y:e.y*Math.cos(this.angle)-e.x*Math.sin(this.angle)+r.y}}calculateIntersectPoint(e){let r={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=$t.GetIntersectBetweenTwoSegment(r,[e,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=$t.GetIntersectBetweenTwoSegment(r,[e,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=$t.GetIntersectBetweenTwoSegment(r,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=$t.GetIntersectBetweenTwoSegment(r,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=$t.GetIntersectBetweenTwoSegment(r,[e,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=$t.GetIntersectBetweenTwoSegment(r,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(e,r,n){let o=e,a=$t.LimitPointToCircle(r,this.pageWidth,o);o!==a&&(o=a,this.updateAngleAndGeometry(o));let i=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2)),s=this.rect.bottomRight,l=this.rect.topLeft;if(this.corner==="bottom"&&(s=this.rect.topRight,l=this.rect.bottomLeft),s.x<=0){let d=$t.LimitPointToCircle(n,i,l);d!==o&&(o=d,this.updateAngleAndGeometry(o))}return o}getSegmentToShadowLine(){let e=this.getShadowStartPoint(),r=e!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint;return[e,r]}};var zi={slide:250,cover:300,flip:500},cf="cubic-bezier(.25,.1,.25,1)",Cc=t=>`polygon(${t.filter(Boolean).map(e=>`${e.x}px ${e.y}px`).join(",")})`,df=0;function Ic(t,e){let r=t.getBoundingClientRect(),n=e.querySelectorAll(".dshr-block,.dshr-chapter__kicker,.dshr-chapter__nav");return[...n.length?n:e.children].map(o=>{let a=o.getBoundingClientRect();return{element:o,top:a.top-r.top+t.scrollTop,bottom:a.bottom-r.top+t.scrollTop,left:a.left-r.left,width:a.width,height:a.height}})}function Pa(t){let e=[t,...t.querySelectorAll("*")],r=new Map,n=`dshr-snapshot-${++df}-`;for(let o of e){o.id&&(r.set(o.id,n+r.size),o.id=r.get(o.id));for(let a of["data-seg-id","data-anno-block","data-anno-id","autofocus"])o.removeAttribute(a)}if(r.size)for(let o of e)for(let a of[...o.attributes]){if(a.name==="id")continue;let i=a.value.replace(/url\(\s*(['"]?)#([^\s)'";]+)\1\s*\)/g,(s,l,d)=>r.has(d)?`url(#${r.get(d)})`:s);(a.name==="href"||a.name==="xlink:href")&&r.has(i.slice(1))&&(i="#"+r.get(i.slice(1))),i!==a.value&&o.setAttribute(a.name,i)}}function Rc(t,e,r,n,o,a){let i=document.createElement("div");i.className="dshr-turn-page";let s=t.getBoundingClientRect(),l=e.getBoundingClientRect(),d=e.cloneNode(!1);Pa(d),Object.assign(d.style,{position:"absolute",left:`${l.left-s.left}px`,top:"0",width:`${l.width}px`,height:"100%",padding:"0",margin:"0"}),i.append(d);let u=new Map([[e,d]]),g=p=>{if(u.has(p))return u.get(p);let _=p.cloneNode(!1);return Pa(_),g(p.parentElement).append(_),u.set(p,_),_};for(let p of r){if(p.bottom<=n+48||p.top>=n+t.clientHeight-o||!p.height)continue;if(p.height>t.clientHeight*8)throw new Error("Snapshot block exceeds viewport budget");let _=document.createTreeWalker(p.element,4294967295);for(let R=p.element;R;R=_.nextNode())if(a.nodes-=1,R.nodeType===3&&(a.text-=R.length),a.nodes<0||a.text<0)throw new Error("Snapshot exceeds DOM budget");let k=p.element.cloneNode(!0);Pa(k),Object.assign(k.style,{position:"absolute",margin:"0",boxSizing:"border-box",left:`${p.left-(l.left-s.left)}px`,top:`${p.top-n}px`,width:`${p.width}px`,height:`${p.height}px`}),g(p.element.parentElement).append(k);let x=[p.element,...p.element.querySelectorAll("*")],T=[k,...k.querySelectorAll("*")];x.forEach((R,A)=>{R.scrollLeft&&(T[A].scrollLeft=R.scrollLeft),R.tagName==="CANVAS"&&(T[A].width=R.width,T[A].height=R.height,T[A].getContext("2d")?.drawImage(R,0,0))})}let f=t.querySelector(":scope > .dshr-anno-layer");if(f){let p=f.cloneNode(!1);Object.assign(p.style,{top:"0",height:"100%"});for(let _ of f.children){let k=Number.parseFloat(_.style.top),x=Number.parseFloat(_.style.height)||24;if(k+x<=n+48||k>=n+t.clientHeight-o)continue;if(--a.nodes<0)throw new Error("Snapshot marks exceed DOM budget");let T=_.cloneNode(!0);Pa(T),T.style.top=`${k-n}px`,p.append(T)}i.append(p)}for(let[p,_]of[["top",48],["bottom",o]]){let k=document.createElement("div");k.className=`dshr-turn-mask dshr-turn-mask--${p}`,k.style.height=`${_}px`,i.append(k)}return i}function uf(t,e,r){let n=new Ao(0,"bottom",String(Math.round(t)),String(Math.round(e))),o=Math.max(1e-4,Math.min(.9999,r)),a=Math.min(e*.22,t*.28)*Math.sin(Math.PI*o);if(!n.calc({x:t*(1-2*o),y:e-a-.1}))return null;let i=n.getActiveCorner(),s=n.getAngle(),l=n.getFlippingClipArea().filter(Boolean).map(d=>$t.GetRotatedPoint({x:d.x-i.x,y:d.y-i.y},{x:0,y:0},s));return{reveal:Cc(n.getBottomClipArea()),fold:Cc(l),transform:`translate3d(${i.x}px,${i.y}px,0) rotate(${s}rad)`,shadow:n.getShadowStartPoint(),shadowAngle:n.getShadowAngle()+Math.PI*1.5,strength:Math.sin(Math.PI*o)}}function Bi(t,e,r,n,o){let a={nodes:1800,text:64e3};return{page:Rc(t,e,r,n,o,a),budget:a,width:t.clientWidth,height:t.clientHeight}}function Mc({reader:t,scroll:e,stage:r,records:n,from:o,to:a,fromBottom:i,toBottom:s,mode:l,direction:d,departing:u}){let g=Object.hasOwn(zi,l)?l:"slide",f=e.getBoundingClientRect(),p=t.getBoundingClientRect(),_=document.createElement("div");_.className=`dshr-flow-transition is-${g}`,_.dataset.direction=String(d),_.setAttribute("aria-hidden","true"),_.inert=!0,Object.assign(_.style,{left:`${f.left-p.left}px`,top:`${f.top-p.top}px`,width:`${e.clientWidth}px`,height:`${e.clientHeight}px`});let k=window.getComputedStyle(e);for(let F of Array.from(k))F.startsWith("--dshr-")&&_.style.setProperty(F,k.getPropertyValue(F));let x=u??Bi(e,r,n,o,i),T=x.page,R=Rc(e,r,n,a,s,x.budget);T.dataset.turnPage="old",R.dataset.turnPage="new",_.append(T,R);let A=[],P=0,C,E=!1,D,L=()=>{E=!0,cancelAnimationFrame(P),clearTimeout(C);for(let F of A)F.cancel();D?.(),_.remove()},m=(F,J)=>{let se=F.animate(J,{duration:zi[g],easing:cf,fill:"both"});return se.finished.catch(()=>{}),A.push(se),se};try{if(t.append(_),g==="slide")m(T,[{transform:"translateX(0)"},{transform:`translateX(${-d*100}%)`}]),m(R,[{transform:`translateX(${d*100}%)`},{transform:"translateX(0)"}]);else if(g==="cover"){let F=d>0?R:T,J=d>0?T:R;J.dataset.turnRole="stationary",F.dataset.turnRole="moving",J.style.zIndex="0",F.style.zIndex="1",F.classList.add("has-edge-shadow"),m(F,d>0?[{transform:"translateX(100%)"},{transform:"translateX(0)"}]:[{transform:"translateX(0)"},{transform:"translateX(100%)"}])}else{let F=d>0?T:R,J=d>0?R:T;F.style.zIndex="0",J.style.zIndex="1";let se=document.createElement("div");se.className="dshr-turn-fold";let ne=document.createElement("div");ne.className="dshr-turn-fold-shadow",J.append(ne),_.append(se);let oe=m(_,[{opacity:1},{opacity:1}]),z=O=>{let X=d>0?O:1-O;if(X<=0){J.style.clipPath="inset(0 100% 0 0)",se.hidden=!0;return}if(X>=1){J.style.clipPath="none",se.hidden=!0,ne.hidden=!0;return}let re=uf(e.clientWidth,e.clientHeight,X);re&&(se.hidden=!1,ne.hidden=!1,J.style.clipPath=re.reveal,se.style.clipPath=re.fold,se.style.transform=re.transform,re.shadow&&Object.assign(ne.style,{opacity:String(re.strength*.16),transform:`translate3d(${re.shadow.x}px,${re.shadow.y-e.clientHeight}px,0) rotate(${re.shadowAngle}rad)`}))};z(0);let de=()=>{E||(z(oe.effect.getComputedTiming().progress??0),P=requestAnimationFrame(de))};P=requestAnimationFrame(de)}}catch(F){throw L(),F}let N=Promise.all(A.map(F=>F.finished.catch(()=>{})));return{overlay:_,width:e.clientWidth,height:e.clientHeight,cancel:L,async play(){try{await Promise.race([N,new Promise(F=>{D=F,C=setTimeout(F,zi[g]+300)})])}finally{L()}}}}var Ht=require("react/jsx-runtime"),Oc='input, textarea, select, [contenteditable="true"]',Lc=".dshr-modal-mask,.dshr-modal,.dshr-appearance-panel,.dshr-anno-panel,.dshr-ai,.dshr-selection,.dshr-online-modal,.dshr-anno-composer,.dshr-pdf-translation-panel",hf=".dshr-topbar,.dshr-toc,.dshr-paged-controls,"+Lc+","+Oc,ff=()=>window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,Pc=220,oo=null;function Dc({enabled:t,animation:e,bookMode:r=!1,bookFrame:n=!1,pdfMode:o=!1,frameTop:a=52,frameLeft:i=0,leftOffset:s,readerKey:l,canPrevChapter:d,canNextChapter:u,chapterEntry:g,onChapterTurn:f,onChapterEntered:p}){let[_,k]=xr.default.useState({page:1,pages:1}),[x,T]=xr.default.useState({top:48,bottom:56}),[R,A]=xr.default.useState(null),P=xr.default.useRef(null),C=xr.default.useRef(null),E=xr.default.useRef(null),D=xr.default.useRef(0),L=xr.default.useRef(-1/0),m=xr.default.useRef({});if(xr.default.useLayoutEffect(()=>{m.current={canPrevChapter:d,canNextChapter:u,chapterEntry:g,onChapterTurn:f,onChapterEntered:p,animation:e}}),xr.default.useLayoutEffect(()=>{let ne=E.current;if(E.current=null,!t)return;let oe=P.current?.closest(".dshr-reader"),z=oe?.querySelector(".dshr-content,.dshr-pdf-scroll");if(!z)return;let de=z.classList.contains("dshr-pdf-scroll"),O=z.querySelector(".dshr-content__inner"),X=de?null:m.current.chapterEntry,re=X&&ne?.entry===X?ne.snapshot:null,$=X?.edge,xe=X?.direction,me=-1/0,Te=!1,q=Ql(),Ge={scrollBehavior:z.style.scrollBehavior,overflowAnchor:z.style.overflowAnchor};z.style.scrollBehavior="auto",z.style.overflowAnchor="none",z.classList.add("dshr-paged-scroll");let Re=!1,Me=!0,$e=!1,He=0,Ue=0,h=0,c=[],S=null,v=[],ee=null,ue=[],le=!de&&O?document.createElement("div"):null;le&&(le.className="dshr-page-tail",le.setAttribute("aria-hidden","true"),z.append(le));let be=()=>{z.dataset.readerNavigation=String(++D.current)};be(),T({top:48,bottom:56});let Ne=()=>{if(Re)return;z.dataset.readerPage=String(q.page),z.dataset.readerPages=String(q.pages),z.dataset.readerTarget=String(q.top),k(ie=>ie.page===q.page&&ie.pages===q.pages?ie:{page:q.page,pages:q.pages});let V=Pe(q.top);T(ie=>ie.bottom===V?ie:{top:48,bottom:V})},Pe=V=>{let ie=V+z.clientHeight-56,ye=c.find(he=>he.top<ie-.5&&he.bottom>ie+.5&&he.bottom-he.top<=z.clientHeight-48-56&&he.top>V+48);return ye?Math.max(56,z.clientHeight-(ye.top-V)):56},te=()=>{Math.abs(z.scrollTop-q.top)>.5&&(z.scrollTop=q.top)},De=V=>{if(Re||de||Te||!O||!z.clientHeight||!z.clientWidth)return;if($e){Me=!0;return}c=Jl(z,O),ue=Ic(z,O);let ie=Zl(c,z.clientHeight);if(le){let he=z.scrollHeight-le.offsetHeight,gt=Math.max(0,Math.ceil(ie.at(-1)+z.clientHeight-he));le.style.height=gt+"px"}let ye=V;if(ye==null&&($==="start"?ye=ie[0]:$==="end"?ye=ie.at(-1):X?ye=Math.max(0,Math.min(1,Number(X.scrollRatio)||0))*Math.max(0,z.scrollHeight-z.clientHeight):ye=ec(S,z,z.scrollTop)),q.replace(ie,ye),Me=!1,te(),S=Ai(c,q.top,z),Ne(),X){let he=X;X=null,me=performance.now();let gt=re;re=null,gt&&gt.width===z.clientWidth&&gt.height===z.clientHeight&&Oe(q.top,he.direction,gt),m.current.onChapterEntered?.(he,ko(z))}},Ze=V=>{Re||de||Te||(Me=!0,$e&&ee&&(ee.width!==z.clientWidth||ee.height!==z.clientHeight||V?.type==="loadingdone")&&ee.cancel(),!Ue&&(Ue=requestAnimationFrame(()=>{Ue=0,$e||De()})))},qe=()=>{He+=1,ee?.cancel(),ee=null,delete z.dataset.readerTurning,oe.classList.remove("dshr-is-turning"),$e=!1,v.length=0},Xe=()=>O?.animate&&!ff(),Oe=async(V,ie,ye)=>{$e=!0;let he=++He;z.dataset.readerTurning="true";try{Xe()&&(ee=Mc({reader:oe,scroll:z,stage:O,records:ue,from:V,to:q.top,fromBottom:Pe(V),toBottom:Pe(q.top),mode:m.current.animation,direction:ie,departing:ye}),oe.classList.add("dshr-is-turning")),te(),ee&&await ee.play()}catch{}finally{!Re&&he===He&&(ee?.cancel(),ee=null,delete z.dataset.readerTurning,oe.classList.remove("dshr-is-turning"),$e=!1,Me?De():(te(),Ne()),v.length&&Qe(v.shift()))}},fe=V=>{let{canPrevChapter:ie,canNextChapter:ye,onChapterTurn:he}=m.current;if(!he||!(V<0?ie:ye))return;Te=!0,v.length=0,be();let gt={edge:V>0?"start":"end",direction:V};if(Xe())try{E.current={entry:gt,snapshot:Bi(z,O,ue,q.top,Pe(q.top))}}catch{}he(V,gt)},Qe=(V,ie=!1)=>{if(Re||Te)return;if(oo=oe,V=V>0?1:-1,de){z.dispatchEvent(new CustomEvent("dshr-pdf-page-turn",{detail:V}));return}if(X){De();return}if(V===xe&&(ie||$e||performance.now()-me<Pc))return;if(xe=null,$e){v.length<32&&v.push(V);return}if(Me&&De(),Me||$e)return;let ye=q.top;if(!q.turn(V)){fe(V);return}$=null,S=Ai(c,q.top,z),be(),Ne(),Oe(ye,V)};C.current=Qe;let lt=()=>{de||$e||Te||Me||h||(h=requestAnimationFrame(()=>{h=0,!Re&&!$e&&!Te&&!Me&&te()}))},ct=V=>{if(de||!O||(V.preventDefault(),Te))return;qe(),xe=null,$=null,re=null;let ie=V.detail||{},ye=Number(ie.top)||0;ie.ratio!=null&&(ye=Number(ie.ratio)*Math.max(0,z.scrollHeight-z.clientHeight)),ie.element&&O.contains(ie.element)&&(ye=ie.element.getBoundingClientRect().top-z.getBoundingClientRect().top+z.scrollTop-48),be(),S=null,De(Math.max(0,ye))},pt=V=>{if(V.target instanceof Element&&V.target.closest(hf)||V.ctrlKey||V.metaKey||Math.abs(V.deltaY)<8&&Math.abs(V.deltaX)<8)return;V.preventDefault();let ie=performance.now(),ye=ie-L.current;L.current=ie,ye>=Pc&&Qe(V.deltaY>0||V.deltaX>0?1:-1)},er=V=>{if(V.defaultPrevented||V.repeat||V.ctrlKey||V.metaKey||V.altKey||!z.isConnected||V.target instanceof Element&&V.target.closest(Oc+","+Lc))return;let ie=V.target instanceof Element&&V.target.closest(".dshr-root"),ye=V.target instanceof Element&&V.target.closest(".dshr-reader");if(ye&&ye!==oe||ie&&!ie.contains(oe)||!ie&&(oo?.isConnected?oo!==oe:[...document.querySelectorAll(".dshr-reader")].find(Ft=>Ft.getBoundingClientRect().height>0)!==oe))return;let he=window.getSelection?.();if(he&&!he.isCollapsed)return;let gt=["ArrowDown","ArrowRight","PageDown"," "].includes(V.key),tt=["ArrowUp","ArrowLeft","PageUp"].includes(V.key);!gt&&!tt||(V.preventDefault(),Qe(gt?1:-1))},wt=V=>{let{page:ie,pages:ye}=V.detail||{};Number.isFinite(ie)&&ie>=1&&Number.isFinite(ye)&&ye>=1&&k({page:ie,pages:ye})},Nt=V=>{Qe(Number(V.detail)>0?1:-1)},mt=()=>{oo=oe};oe.addEventListener("pointerdown",mt),z.addEventListener("wheel",pt,{passive:!1}),z.addEventListener("scroll",lt,{passive:!0}),z.addEventListener("dshr-flow-navigate",ct),z.addEventListener("dshr-page-turn",Nt),z.addEventListener("dshr-pdf-page-state",wt),window.addEventListener("keydown",er);let tr,It,St,bt=()=>{if(Re)return;let V=z.getBoundingClientRect(),ie=oe.getBoundingClientRect(),ye={right:Math.max(0,ie.right-V.right),center:V.left-ie.left+V.width/2,top:V.top-ie.top+V.height/2,bottom:Math.max(0,ie.bottom-V.bottom)};A(he=>he&&Object.keys(ye).every(gt=>Math.abs(he[gt]-ye[gt])<.5)?he:ye)};if(bt(),typeof ResizeObserver=="function"&&(St=new ResizeObserver(bt),St.observe(z),St.observe(oe)),de){let V=Number(z.dataset.pdfPage),ie=Number(z.dataset.pdfPages);V>0&&ie>0&&k({page:V,pages:ie})}else De(),typeof ResizeObserver=="function"&&(tr=new ResizeObserver(Ze),tr.observe(z),tr.observe(O)),typeof MutationObserver=="function"&&(It=new MutationObserver(Ze),It.observe(O,{subtree:!0,childList:!0,characterData:!0})),O.addEventListener("load",Ze,!0),document.fonts?.addEventListener("loadingdone",Ze),document.fonts?.ready.then(Ze);return()=>{Re=!0,qe(),cancelAnimationFrame(Ue),cancelAnimationFrame(h),tr?.disconnect(),St?.disconnect(),It?.disconnect(),O?.removeEventListener("load",Ze,!0),document.fonts?.removeEventListener("loadingdone",Ze),z.removeEventListener("wheel",pt),z.removeEventListener("scroll",lt),z.removeEventListener("dshr-flow-navigate",ct),z.removeEventListener("dshr-page-turn",Nt),z.removeEventListener("dshr-pdf-page-state",wt),window.removeEventListener("keydown",er),oe.removeEventListener("pointerdown",mt),oo===oe&&(oo=null),z.classList.remove("dshr-paged-scroll"),Object.assign(z.style,Ge);for(let V of["readerPage","readerPages","readerTarget","readerNavigation","readerTurning"])delete z.dataset[V];le?.remove(),C.current=null}},[t,r,l]),!t)return null;let{page:N,pages:F}=_,J=N<=1&&!d,se=N>=F&&!u&&!(o&&F<=1);return(0,Ht.jsxs)("div",{ref:P,className:`dshr-paged-controls${r?" is-book":""}${n?" has-book-frame":""}`,style:{"--dshr-paged-left":`${Math.max(10,Number(s)||10)}px`,...R?{"--dshr-paged-right":`${R.right+12}px`,"--dshr-paged-center":`${R.center}px`,"--dshr-paged-top":`${R.top}px`,"--dshr-paged-bottom":`${R.bottom+14}px`}:{},"--dshr-book-frame-top":`${Math.max(0,Number(a)||0)}px`,"--dshr-book-frame-left":`${Math.max(0,Number(i)||0)}px`,"--dshr-book-top-cover":`${x.top}px`,"--dshr-book-bottom-cover":`${x.bottom}px`},"aria-live":"polite",children:[n?(0,Ht.jsxs)(Ht.Fragment,{children:[(0,Ht.jsx)("div",{className:"dshr-book-mask dshr-book-mask--top","aria-hidden":"true"}),(0,Ht.jsx)("div",{className:"dshr-book-mask dshr-book-mask--bottom","aria-hidden":"true"})]}):null,(0,Ht.jsx)("button",{type:"button",className:"dshr-paged-btn dshr-paged-prev",onClick:ne=>{J||C.current?.(-1,ne.detail>1)},disabled:J,title:"\u4E0A\u4E00\u9875\uFF08\u2190 / \u2191 / PageUp\uFF09","aria-label":"\u4E0A\u4E00\u9875",children:(0,Ht.jsx)(ta,{size:20})}),(0,Ht.jsx)("button",{type:"button",className:"dshr-paged-btn dshr-paged-next",onClick:ne=>{se||C.current?.(1,ne.detail>1)},disabled:se,title:"\u4E0B\u4E00\u9875\uFF08\u2192 / \u2193 / PageDown / \u7A7A\u683C\uFF09","aria-label":"\u4E0B\u4E00\u9875",children:(0,Ht.jsx)(ra,{size:20})}),(0,Ht.jsxs)("div",{className:"dshr-paged-status",title:"\u7FFB\u9875\u8FDB\u5EA6",children:[(0,Ht.jsx)("b",{children:N}),(0,Ht.jsx)("span",{children:"/"}),(0,Ht.jsx)("em",{children:F})]})]})}var sn=Mt(require("react"),1);var Gi=Object.freeze([Object.freeze({id:"serif",label:"\u5B8B\u4F53 / Serif",stack:'"Songti SC", "Noto Serif SC", "Source Han Serif SC", "STSong", "SimSun", "\u5B8B\u4F53", Georgia, "Times New Roman", serif'}),Object.freeze({id:"sans",label:"\u9ED1\u4F53 / Sans",stack:'"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", "Segoe UI", system-ui, -apple-system, sans-serif'}),Object.freeze({id:"kai",label:"\u6977\u4F53 / Kai",stack:'"Kaiti SC", "STKaiti", "KaiTi", "\u6977\u4F53", "Noto Serif SC", "Songti SC", "SimSun", serif'}),Object.freeze({id:"system",label:"\u7CFB\u7EDF\u9ED8\u8BA4",stack:'system-ui, -apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif'})]),qi=Object.freeze([Object.freeze({value:400,label:"\u5E38\u89C4"}),Object.freeze({value:500,label:"\u4E2D\u7B49"}),Object.freeze({value:600,label:"\u52A0\u7C97"})]),T0=Object.freeze([Object.freeze({id:"scroll",label:"\u6EDA\u52A8"}),Object.freeze({id:"book",label:"\u6A2A\u7248"})]),Hc=Object.freeze([Object.freeze({id:"slide",label:"\u6A2A\u5411\u6ED1\u9875",hint:"\u524D\u540E\u4E24\u9875\u8FDE\u7EED\u5E73\u79FB\u8854\u63A5\uFF0C\u4E0D\u6DE1\u51FA\u6B63\u6587"}),Object.freeze({id:"cover",label:"\u4E66\u9875\u8986\u76D6",hint:"\u65B0\u9875\u4ECE\u53F3\u4FA7\u8986\u76D6\u9759\u6B62\u5E95\u9875\uFF0C\u56DE\u7FFB\u65F6\u63ED\u5F00\u5F53\u524D\u9875"}),Object.freeze({id:"flip",label:"3D \u4E66\u9875",hint:"\u4ECE\u53F3\u4E0B\u9875\u89D2\u5411\u4E66\u810A\u6298\u53E0\uFF0C\u5E26\u7EB8\u80CC\u4E0E\u52A8\u6001\u9634\u5F71"})]),Da=Object.freeze([Object.freeze({id:"paper",label:"\u7EB8\u5F20",bg:"#fbf7ee",ink:"#2b2a26",muted:"#736f64",border:"rgba(43, 42, 38, 0.15)",accent:"#9a6b2f"}),Object.freeze({id:"white",label:"\u767D\u8272",bg:"#ffffff",ink:"#1f2328",muted:"#5c6370",border:"rgba(31, 35, 40, 0.13)",accent:"#3f5ce0"}),Object.freeze({id:"sepia",label:"\u7F8A\u76AE\u7EB8",bg:"#f2e6cf",ink:"#453322",muted:"#715f47",border:"rgba(69, 51, 34, 0.18)",accent:"#8f5a24"}),Object.freeze({id:"green",label:"\u62A4\u773C\u7EFF",bg:"#e3efe4",ink:"#263a2b",muted:"#556b5a",border:"rgba(38, 58, 43, 0.17)",accent:"#3d6a47"}),Object.freeze({id:"night",label:"\u591C\u95F4",bg:"#1c1e22",ink:"#e9e6dd",muted:"#a6a29a",border:"rgba(233, 230, 221, 0.16)",accent:"#d2a76b"}),Object.freeze({id:"custom",label:"\u81EA\u5B9A\u4E49"})]),qt=Object.freeze({fontSize:18,lineHeight:1.85,fontFamily:"serif",fontWeight:400,contentWidth:760,tocWidth:260,readingMode:"scroll",pageAnimation:"slide",bookAnimation:"slide",brightness:1,backgroundPreset:"paper",customBackground:"#fbf7ee",textTone:"auto",backgroundImageKey:"",backgroundImageOpacity:.26,backgroundImageBlur:0}),Ce=Object.freeze({fontSize:Object.freeze({min:13,max:34,step:1}),lineHeight:Object.freeze({min:1.35,max:2.4,step:.05}),contentWidth:Object.freeze({min:520,max:1600,step:20}),tocWidth:Object.freeze({min:180,max:520,step:10}),brightness:Object.freeze({min:.6,max:1.2,step:.01}),backgroundImageOpacity:Object.freeze({min:0,max:.8,step:.01}),backgroundImageBlur:Object.freeze({min:0,max:12,step:1})}),No=Object.freeze(qi.map(t=>t.value)),pf=Object.freeze(Da.map(t=>t.id)),gf=new Map(Da.map(t=>[t.id,t])),Fc=new Map(Gi.map(t=>[t.id,t])),mf=Object.freeze(["auto","dark","light"]),Ui=Object.freeze({ink:"#181511",muted:"#6b6559",border:"rgba(32, 29, 24, 0.15)",tone:"dark"}),Wi=Object.freeze({ink:"#f8f5ec",muted:"#b3ada0",border:"rgba(245, 242, 233, 0.18)",tone:"light"}),bf="#8a5a24",xf="#d8b06a",zc=Object.freeze({white:"#ffffff",black:"#000000",red:"#ff0000",lime:"#00ff00",blue:"#0000ff",yellow:"#ffff00",aqua:"#00ffff",cyan:"#00ffff",fuchsia:"#ff00ff",magenta:"#ff00ff",silver:"#c0c0c0",gray:"#808080",grey:"#808080",maroon:"#800000",olive:"#808000",green:"#008000",purple:"#800080",teal:"#008080",navy:"#000080",orange:"#ffa500",pink:"#ffc0cb",brown:"#a52a2a",gold:"#ffd700",beige:"#f5f5dc",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",turquoise:"#40e0d0",salmon:"#fa8072",coral:"#ff7f50",indigo:"#4b0082",violet:"#ee82ee",wheat:"#f5deb3",tan:"#d2b48c",snow:"#fffafa",linen:"#faf0e6"});function ao(t){return Math.max(0,Math.min(255,Math.round(t)))}function vf(t){let e=t.slice(1);if(!/^[0-9a-f]+$/iu.test(e))return null;if(e.length===3||e.length===4){let[r,n,o]=e.slice(0,3).split("").map(a=>Number.parseInt(`${a}${a}`,16));return{r,g:n,b:o}}return e.length===6||e.length===8?{r:Number.parseInt(e.slice(0,2),16),g:Number.parseInt(e.slice(2,4),16),b:Number.parseInt(e.slice(4,6),16)}:null}function yf(t){let e=/^([+-]?(?:\d+\.?\d*|\.\d+))(%?)$/u.exec(t);if(!e)return null;let r=Number(e[1]);return Number.isFinite(r)?(e[2]==="%"&&(r=r/100*255),ao(r)):null}function wf(t){let e=t.replace(/\//gu," ").split(/[\s,]+/u).filter(Boolean);if(e.length<3)return null;let r=e.slice(0,3).map(yf);return r.some(n=>n===null)?null:{r:r[0],g:r[1],b:r[2]}}function $i(t,e,r){let n=r;return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function kf(t){let e=t.replace(/\//gu," ").split(/[\s,]+/u).filter(Boolean);if(e.length<3)return null;let r=Number.parseFloat(e[0]),n=Number.parseFloat(e[1]),o=Number.parseFloat(e[2]);if(![r,n,o].every(Number.isFinite))return null;let a=Math.max(0,Math.min(100,n))/100,i=Math.max(0,Math.min(100,o))/100,s=(r%360+360)%360/360;if(a===0){let u=ao(i*255);return{r:u,g:u,b:u}}let l=i<.5?i*(1+a):i+a-i*a,d=2*i-l;return{r:ao($i(d,l,s+1/3)*255),g:ao($i(d,l,s)*255),b:ao($i(d,l,s-1/3)*255)}}function Oa(t){if(typeof t!="string")return null;let e=t.trim().toLowerCase();if(!e)return null;if(e.startsWith("#"))return vf(e);if(e in zc)return Oa(zc[e]);let r=/^([a-z]+)\((.*)\)$/u.exec(e);if(!r)return null;let n=r[1],o=r[2];return n==="rgb"||n==="rgba"?wf(o):n==="hsl"||n==="hsla"?kf(o):null}function Bc({r:t,g:e,b:r}){return`#${[t,e,r].map(n=>ao(n).toString(16).padStart(2,"0")).join("")}`}function Hi(t){let e=t/255;return e<=.03928?e/12.92:((e+.055)/1.055)**2.4}function $c(t){let e=Oa(t);return e?.2126*Hi(e.r)+.7152*Hi(e.g)+.0722*Hi(e.b):1}function La(t,e){let r=$c(t),n=$c(e),o=Math.max(r,n),a=Math.min(r,n);return(o+.05)/(a+.05)}function Xi(t,e="#ffffff"){let r=Oa(t);if(r)return Bc(r);let n=Oa(e);return n?Bc(n):"#ffffff"}function ji(t){let e=La(Ui.ink,t);return La(Wi.ink,t)>e?{...Wi}:{...Ui}}function Uc(t){let e=ji(t);return{ink:e.ink,muted:e.muted,border:e.border}}function Lr(t,e,r,n){let o=Number(t);return Number.isFinite(o)?Math.max(e,Math.min(r,o)):n}function _f(t){return pf.includes(t)?t:"paper"}function Tf(t){return mf.includes(t)?t:"auto"}function Sf(t){let e=Number(t);if(!Number.isFinite(e))return 400;let r=Math.max(No[0],Math.min(No[No.length-1],e)),n=No[0],o=Number.POSITIVE_INFINITY;for(let a of No){let i=Math.abs(a-r);i<o&&(n=a,o=i)}return n}function Ef(t){return(Fc.get(t)||Fc.get("serif")).stack}function Af(t){return t>=600?700:600}function Vi(t){let e=t&&typeof t=="object"?t:{},r=_f(e.backgroundPreset),n=Xi(e.customBackground,qt.customBackground),o=r==="custom"?null:gf.get(r),a=o?o.bg:n,i=ji(a);o&&(i={ink:o.ink,muted:o.muted,border:o.border});let s=Tf(e.textTone);s==="dark"?i={...Ui}:s==="light"&&(i={...Wi});let l=o?o.accent:ji(a).tone==="light"?xf:bf,d=Sf(e.fontWeight);return{preset:r,bg:a,ink:i.ink,muted:i.muted,border:i.border,accent:l,fontFamily:Ef(e.fontFamily),fontWeight:d,headingWeight:Af(d),width:Lr(e.contentWidth,Ce.contentWidth.min,Ce.contentWidth.max,qt.contentWidth),brightness:Lr(e.brightness,Ce.brightness.min,Ce.brightness.max,qt.brightness),imageOpacity:Lr(e.backgroundImageOpacity,Ce.backgroundImageOpacity.min,Ce.backgroundImageOpacity.max,qt.backgroundImageOpacity),imageBlur:Lr(e.backgroundImageBlur,Ce.backgroundImageBlur.min,Ce.backgroundImageBlur.max,qt.backgroundImageBlur)}}function Nf(t){return`url("${String(t).replace(/[\n\r\f]/gu," ").replace(/\\/gu,"\\\\").replace(/"/gu,'\\"')}")`}function Fa(t,e){let r=Vi(t),n=typeof e=="string"&&e.trim()?Nf(e.trim()):"none";return{"--dshr-reader-bg":r.bg,"--dshr-reader-ink":r.ink,"--dshr-reader-muted":r.muted,"--dshr-reader-border":r.border,"--dshr-reader-accent":r.accent,"--dshr-reader-font":r.fontFamily,"--dshr-reader-weight":String(r.fontWeight),"--dshr-reader-heading-weight":String(r.headingWeight),"--dshr-reader-width":`${r.width}px`,"--dshr-reader-brightness":String(r.brightness),"--dshr-reader-image-opacity":String(r.imageOpacity),"--dshr-reader-image-blur":`${r.imageBlur}px`,"--dshr-reader-image":n}}var Ki=String.raw`
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
`;var W=require("react/jsx-runtime");function io({size:t=15,children:e,viewBox:r="0 0 24 24"}){return(0,W.jsx)("svg",{width:t,height:t,viewBox:r,fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:e})}function Cf(t){return(0,W.jsx)(io,{...t,children:(0,W.jsx)("path",{d:"m6 6 12 12M18 6 6 18"})})}function If(t){return(0,W.jsxs)(io,{...t,children:[(0,W.jsx)("rect",{x:"3",y:"4.5",width:"18",height:"15",rx:"2.4"}),(0,W.jsx)("circle",{cx:"8.4",cy:"9.6",r:"1.5"}),(0,W.jsx)("path",{d:"m4 17 4.6-4.4a1.6 1.6 0 0 1 2.2 0l2.5 2.4 2.1-2a1.6 1.6 0 0 1 2.2 0L20 15.6"})]})}function Rf(t){return(0,W.jsxs)(io,{...t,children:[(0,W.jsx)("path",{d:"M12 16V4"}),(0,W.jsx)("path",{d:"m7 9 5-5 5 5"}),(0,W.jsx)("path",{d:"M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15"})]})}function Mf(t){return(0,W.jsxs)(io,{...t,children:[(0,W.jsx)("path",{d:"M4 7h16M9 7V5h6v2M7 7l.7 12.2A1.8 1.8 0 0 0 9.5 21h5a1.8 1.8 0 0 0 1.8-1.8L17 7"}),(0,W.jsx)("path",{d:"M10 11v6M14 11v6"})]})}function Pf(t){return(0,W.jsxs)(io,{...t,children:[(0,W.jsx)("path",{d:"M20 11a8 8 0 1 0-2.3 6.3"}),(0,W.jsx)("path",{d:"M20 4v7h-7"})]})}function Wc(t){return(0,W.jsx)(io,{...t,children:(0,W.jsx)("path",{d:"m5 12 4.5 4.5L19 7"})})}var Of=Object.freeze([{id:"auto",label:"\u81EA\u52A8"},{id:"dark",label:"\u6DF1\u8272\u5B57"},{id:"light",label:"\u6D45\u8272\u5B57"}]),Lf=Object.freeze(["fontSize","lineHeight","fontFamily","fontWeight","contentWidth","tocWidth","brightness","backgroundPreset","customBackground","textTone","backgroundImageOpacity","backgroundImageBlur"]),Df='button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';function jc({label:t,value:e,options:r,onChange:n}){return(0,W.jsx)("div",{className:"dshr-appearance-segmented",role:"group","aria-label":t,children:r.map(o=>{let a=o.value!==void 0?o.value:o.id;return(0,W.jsx)("button",{type:"button",className:"dshr-appearance-segmented__item","aria-pressed":e===a,onClick:()=>n(a),children:o.label},String(a))})})}function Pn({label:t,valueText:e,min:r,max:n,step:o,value:a,onChange:i,disabled:s,hint:l}){return(0,W.jsxs)("label",{className:`dshr-appearance-slider${s?" is-disabled":""}`,children:[(0,W.jsxs)("span",{className:"dshr-appearance-slider__head",children:[(0,W.jsx)("span",{children:t}),(0,W.jsx)("span",{className:"dshr-appearance-slider__value",children:e})]}),(0,W.jsx)("input",{type:"range",min:r,max:n,step:o,value:a,disabled:s,onChange:d=>i(Number(d.target.value)),"aria-label":t}),l?(0,W.jsx)("span",{className:"dshr-appearance-slider__hint",children:l}):null]})}function Gc({open:t,settings:e,backgroundImageUrl:r,onChange:n,onPickBackgroundImage:o,onClearBackgroundImage:a,onClose:i}){let s=sn.default.useRef(null),l=sn.default.useId(),[d,u]=sn.default.useState(!1),g=Vi(e),f=!!r,p=Xi(e.customBackground,qt.customBackground),_=Uc(p).ink,k=La(g.ink,g.bg),x=Lr(e.fontSize,Ce.fontSize.min,Ce.fontSize.max,qt.fontSize),T=Lr(e.lineHeight,Ce.lineHeight.min,Ce.lineHeight.max,qt.lineHeight),R=!f&&Lf.every(N=>e[N]===qt[N]),A=sn.default.useCallback(N=>{typeof n=="function"&&n({...e,...N})},[n,e]);if(sn.default.useEffect(()=>{if(!t)return;let N=F=>{F.key==="Escape"&&(F.preventDefault(),i?.())};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[t,i]),sn.default.useEffect(()=>{if(!t)return;let N=typeof document<"u"?document.activeElement:null,F=window.requestAnimationFrame(()=>{s.current?.focus({preventScroll:!0})});return()=>{window.cancelAnimationFrame(F),N instanceof HTMLElement&&N.isConnected&&N.focus({preventScroll:!0})}},[t]),sn.default.useEffect(()=>{if(!t){u(!1);return}},[t]),sn.default.useEffect(()=>{if(!d)return;let N=window.setTimeout(()=>u(!1),3200);return()=>window.clearTimeout(N)},[d]),!t)return null;let P=N=>{N.target===N.currentTarget&&i?.()},C=N=>{if(N.key!=="Tab"||!s.current)return;let F=[...s.current.querySelectorAll(Df)].filter(oe=>oe.offsetParent!==null||oe===document.activeElement);if(F.length===0)return;let J=F[0],se=F[F.length-1],ne=document.activeElement;N.shiftKey&&(ne===J||!s.current.contains(ne))?(N.preventDefault(),se.focus()):!N.shiftKey&&ne===se&&(N.preventDefault(),J.focus())},E=()=>{if(!d){u(!0);return}u(!1),f&&a?.(),n?.({...e,...qt})},L={...Fa(e,r),fontSize:`${Math.min(16,Math.max(12,Math.round(x*.8)))}px`,lineHeight:String(T)},m=k>=4.5;return(0,W.jsx)("div",{className:"dshr-appearance-mask",onMouseDown:P,children:(0,W.jsxs)("aside",{className:"dshr-appearance-panel",role:"dialog","aria-modal":"true","aria-labelledby":l,tabIndex:-1,ref:s,onKeyDown:C,children:[(0,W.jsxs)("header",{className:"dshr-appearance-head",children:[(0,W.jsxs)("div",{className:"dshr-appearance-head__text",children:[(0,W.jsx)("strong",{id:l,children:"\u9605\u8BFB\u5916\u89C2"}),(0,W.jsx)("span",{children:"\u8C03\u6574\u6392\u7248\u3001\u5B57\u4F53\u4E0E\u80CC\u666F \xB7 \u4EC5\u4FDD\u5B58\u5728\u672C\u673A"})]}),(0,W.jsx)("button",{type:"button",className:"dshr-appearance-close",onClick:i,"aria-label":"\u5173\u95ED\u5916\u89C2\u8BBE\u7F6E",children:(0,W.jsx)(Cf,{size:16})})]}),(0,W.jsxs)("div",{className:"dshr-appearance-body",children:[(0,W.jsxs)("div",{className:"dshr-appearance-preview",style:L,"aria-hidden":"true",children:[(0,W.jsx)("span",{className:"dshr-appearance-preview__badge",children:"\u5B9E\u65F6\u9884\u89C8"}),(0,W.jsxs)("div",{className:"dshr-appearance-preview__inner",children:[(0,W.jsx)("span",{className:"dshr-appearance-preview__kicker",children:"\u7B2C 1 \u7AE0"}),(0,W.jsx)("p",{className:"dshr-appearance-preview__title",children:"\u5C71\u5C45\u79CB\u669D"}),(0,W.jsx)("p",{className:"dshr-appearance-preview__text",children:"\u7A7A\u5C71\u65B0\u96E8\u540E\uFF0C\u5929\u6C14\u665A\u6765\u79CB\u3002\u660E\u6708\u677E\u95F4\u7167\uFF0C\u6E05\u6CC9\u77F3\u4E0A\u6D41\u3002"}),(0,W.jsx)("p",{className:"dshr-appearance-preview__quote",children:"\u7AF9\u55A7\u5F52\u6D63\u5973\uFF0C\u83B2\u52A8\u4E0B\u6E14\u821F\u3002"})]})]}),(0,W.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-bg`,children:[(0,W.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-bg`,children:"\u80CC\u666F"}),(0,W.jsx)("div",{className:"dshr-appearance-swatches",role:"group","aria-label":"\u80CC\u666F\u9884\u8BBE",children:Da.map(N=>{let F=N.id==="custom"?p:N.bg,J=N.id==="custom"?_:N.ink,se=g.preset===N.id;return(0,W.jsxs)("button",{type:"button",className:`dshr-appearance-swatch${se?" is-active":""}`,"aria-pressed":se,onClick:()=>A({backgroundPreset:N.id}),children:[(0,W.jsx)("span",{className:"dshr-appearance-swatch__chip",style:{background:F,color:J},children:"\u6587"}),(0,W.jsx)("span",{className:"dshr-appearance-swatch__label",children:N.label})]},N.id)})}),(0,W.jsxs)("label",{className:"dshr-appearance-colorrow",children:[(0,W.jsx)("span",{children:"\u81EA\u5B9A\u4E49\u989C\u8272"}),(0,W.jsxs)("span",{className:"dshr-appearance-colorrow__control",children:[(0,W.jsx)("input",{type:"color",className:"dshr-appearance-color",value:p,"aria-label":"\u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272",onChange:N=>A({backgroundPreset:"custom",customBackground:N.target.value})}),(0,W.jsx)("code",{className:"dshr-appearance-colorrow__hex",children:p.toUpperCase()})]})]}),(0,W.jsxs)("div",{className:"dshr-appearance-field",children:[(0,W.jsxs)("div",{className:"dshr-appearance-field__head",children:[(0,W.jsx)("span",{children:"\u6587\u5B57\u8272\u8C03"}),(0,W.jsxs)("span",{className:`dshr-appearance-field__value${m?"":" is-warning"}`,children:["\u5BF9\u6BD4\u5EA6 ",k.toFixed(1),":1"]})]}),(0,W.jsx)(jc,{label:"\u6587\u5B57\u8272\u8C03",value:e.textTone==="dark"||e.textTone==="light"?e.textTone:"auto",options:Of,onChange:N=>A({textTone:N})}),(0,W.jsxs)("p",{className:"dshr-appearance-hint",children:[m?"\u81EA\u52A8\u6A21\u5F0F\u4F1A\u6309\u80CC\u666F\u4EAE\u5EA6\u9009\u62E9\u6DF1\u8272\u6216\u6D45\u8272\u6587\u5B57\u3002":"\u5F53\u524D\u6587\u5B57\u4E0E\u80CC\u666F\u5BF9\u6BD4\u5EA6\u504F\u4F4E\uFF0C\u5EFA\u8BAE\u6539\u9009\u5176\u5B83\u80CC\u666F\u6216\u6587\u5B57\u8272\u8C03\u3002",f?" \u80CC\u666F\u56FE\u7247\u4F1A\u8FDB\u4E00\u6B65\u5F71\u54CD\u5B9E\u9645\u53EF\u8BFB\u6027\u3002":""]})]})]}),(0,W.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-image`,children:[(0,W.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-image`,children:"\u80CC\u666F\u56FE\u7247"}),(0,W.jsxs)("div",{className:"dshr-appearance-image",children:[(0,W.jsx)("span",{className:`dshr-appearance-image__thumb${f?" has-image":""}`,children:f?(0,W.jsx)("img",{src:r,alt:""}):(0,W.jsx)(If,{size:20})}),(0,W.jsxs)("div",{className:"dshr-appearance-image__meta",children:[(0,W.jsx)("strong",{children:f?"\u5DF2\u9009\u62E9\u80CC\u666F\u56FE\u7247":"\u672A\u9009\u62E9\u80CC\u666F\u56FE\u7247"}),(0,W.jsx)("span",{children:"\u4F5C\u4E3A\u6587\u5B57\u4E0B\u65B9\u7684\u886C\u5E95\uFF0C\u4EC5\u4FDD\u5B58\u5728\u672C\u673A\u3002"})]}),(0,W.jsxs)("div",{className:"dshr-appearance-image__actions",children:[(0,W.jsxs)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--soft dshr-appearance-btn--sm",onClick:o,children:[f?(0,W.jsx)(Wc,{size:13}):(0,W.jsx)(Rf,{size:13}),f?"\u66F4\u6362":"\u9009\u62E9\u56FE\u7247"]}),f?(0,W.jsxs)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--ghost dshr-appearance-btn--sm",onClick:a,children:[(0,W.jsx)(Mf,{size:13})," \u79FB\u9664"]}):null]})]}),(0,W.jsx)(Pn,{label:"\u56FE\u7247\u4E0D\u900F\u660E\u5EA6",valueText:`${Math.round(Lr(e.backgroundImageOpacity,Ce.backgroundImageOpacity.min,Ce.backgroundImageOpacity.max,qt.backgroundImageOpacity)*100)}%`,min:Ce.backgroundImageOpacity.min,max:Ce.backgroundImageOpacity.max,step:Ce.backgroundImageOpacity.step,value:Lr(e.backgroundImageOpacity,Ce.backgroundImageOpacity.min,Ce.backgroundImageOpacity.max,qt.backgroundImageOpacity),disabled:!f,onChange:N=>A({backgroundImageOpacity:N})}),(0,W.jsx)(Pn,{label:"\u56FE\u7247\u6A21\u7CCA",valueText:`${Math.round(g.imageBlur)}px`,min:Ce.backgroundImageBlur.min,max:Ce.backgroundImageBlur.max,step:Ce.backgroundImageBlur.step,value:g.imageBlur,disabled:!f,onChange:N=>A({backgroundImageBlur:N})}),(0,W.jsx)(Pn,{label:"\u9605\u8BFB\u4EAE\u5EA6",valueText:`${Math.round(g.brightness*100)}%`,min:Ce.brightness.min,max:Ce.brightness.max,step:Ce.brightness.step,value:g.brightness,onChange:N=>A({brightness:N})}),(0,W.jsx)("p",{className:"dshr-appearance-hint",children:"\u8C03\u4F4E\u4EAE\u5EA6\u53EF\u51CF\u5C11\u591C\u95F4\u5C4F\u5E55\u523A\u6FC0\uFF1B\u53EA\u5F71\u54CD\u6B63\u6587/PDF \u9605\u8BFB\u533A\uFF0C\u4E0D\u5F71\u54CD\u5DE5\u5177\u680F\u4E0E\u6279\u6CE8\u9762\u677F\u3002"})]}),(0,W.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-type`,children:[(0,W.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-type`,children:"\u5B57\u4F53"}),(0,W.jsx)("div",{className:"dshr-appearance-families",role:"group","aria-label":"\u5B57\u4F53",children:Gi.map(N=>(0,W.jsx)("button",{type:"button",className:"dshr-appearance-family",style:{fontFamily:N.stack},"aria-pressed":g.fontFamily===N.stack,onClick:()=>A({fontFamily:N.id}),title:N.label,children:N.label},N.id))}),(0,W.jsxs)("div",{className:"dshr-appearance-field",children:[(0,W.jsx)("div",{className:"dshr-appearance-field__head",children:(0,W.jsx)("span",{children:"\u5B57\u91CD"})}),(0,W.jsx)(jc,{label:"\u5B57\u91CD",value:g.fontWeight,options:qi.map(N=>({value:N.value,label:N.label})),onChange:N=>A({fontWeight:N})})]}),(0,W.jsx)(Pn,{label:"\u5B57\u53F7",valueText:`${x}px`,min:Ce.fontSize.min,max:Ce.fontSize.max,step:Ce.fontSize.step,value:x,onChange:N=>A({fontSize:N})}),(0,W.jsx)(Pn,{label:"\u884C\u9AD8",valueText:T.toFixed(2),min:Ce.lineHeight.min,max:Ce.lineHeight.max,step:Ce.lineHeight.step,value:T,onChange:N=>A({lineHeight:Math.round(N*100)/100})})]}),(0,W.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-layout`,children:[(0,W.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-layout`,children:"\u7248\u5F0F"}),(0,W.jsx)(Pn,{label:"\u9605\u8BFB\u5BBD\u5EA6",valueText:`${Math.round(g.width)}px`,min:Ce.contentWidth.min,max:Ce.contentWidth.max,step:Ce.contentWidth.step,value:g.width,onChange:N=>A({contentWidth:N})}),(0,W.jsx)(Pn,{label:"\u76EE\u5F55\u5BBD\u5EA6",valueText:`${Math.round(Lr(e.tocWidth,Ce.tocWidth.min,Ce.tocWidth.max,qt.tocWidth))}px`,min:Ce.tocWidth.min,max:Ce.tocWidth.max,step:Ce.tocWidth.step,value:Lr(e.tocWidth,Ce.tocWidth.min,Ce.tocWidth.max,qt.tocWidth),onChange:N=>A({tocWidth:N})}),(0,W.jsx)("p",{className:"dshr-appearance-hint",children:"\u63A7\u5236\u6B63\u6587\u6700\u5927\u5BBD\u5EA6\uFF1B\u76EE\u5F55\u5BBD\u5EA6\u53EF\u5728\u8FD9\u91CC\u8C03\uFF0C\u4E5F\u53EF\u4EE5\u62D6\u52A8\u76EE\u5F55\u53F3\u8FB9\u7F18\u3002\u76EE\u5F55\u6807\u9898\u4F1A\u5B8C\u6574\u6362\u884C\u663E\u793A\u3002"})]})]}),(0,W.jsxs)("footer",{className:"dshr-appearance-foot",children:[(0,W.jsxs)("button",{type:"button",className:`dshr-appearance-btn dshr-appearance-btn--ghost${d?" dshr-appearance-btn--danger":""}`,onClick:E,disabled:R&&!d,title:R?"\u5F53\u524D\u5DF2\u662F\u9ED8\u8BA4\u5916\u89C2":"\u6062\u590D\u9ED8\u8BA4\u5916\u89C2",children:[d?(0,W.jsx)(Wc,{size:14}):(0,W.jsx)(Pf,{size:14}),d?"\u786E\u8BA4\u6062\u590D\uFF1F":"\u6062\u590D\u9ED8\u8BA4"]}),(0,W.jsx)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--primary",onClick:i,children:"\u5B8C\u6210"})]})]})})}var za=Mt(require("react"),1);var ve=require("react/jsx-runtime"),Ff={highlight:An,underline:ma,note:fn},zf=[{id:"all",label:"\u5168\u90E8"},...to.map(t=>({id:t.id,label:t.label}))];function Bf(t){let e=Number(t);if(!Number.isFinite(e)||e<=0)return"";try{return new Date(e).toLocaleDateString("zh-CN",{month:"numeric",day:"numeric"})}catch{return""}}function $f(t){let e=new Map,r=t&&Array.isArray(t.chapters)?t.chapters:[];for(let n=0;n<r.length;n+=1){let o=r[n];o&&o.id!=null&&e.set(String(o.id),{index:n,title:o.title||""})}return e}function qc(t){return t?t.kind==="pdf"?!0:t.kind==="flow"?!1:Array.isArray(t.rects)&&!Array.isArray(t.ranges):!1}function Xc(t,e){if(!t)return null;if(t.chapterId!=null){let r=e.get(String(t.chapterId));if(r)return r}if(Number.isInteger(Number(t.chapterIndex))&&Number(t.chapterIndex)>=0){let r=Number(t.chapterIndex),o=(e.size>0?[...e.values()]:[]).find(a=>a.index===r);return{index:r,title:o?o.title:""}}return null}function Hf(t,e,r){let n=(Array.isArray(t)?t:[]).filter(i=>!(!i||r!=="all"&&i.style!==r)),o=new Map;for(let i=0;i<n.length;i+=1){let s=n[i],l=qc(s),d,u,g;if(l){let f=Number(s.page),p=Number.isInteger(f)&&f>0;d=`pdf:${p?f:"unknown"}`,u=p?1e4+f:999999,g=p?`\u7B2C ${f} \u9875`:"PDF \u9875\u9762"}else{let f=Xc(s,e),p=f?f.index:null;d=`flow:${p??"unknown"}`,u=p??99999,g=p==null?"\u6B63\u6587":`\u7B2C ${p+1} \u7AE0${f&&f.title?` \xB7 ${f.title}`:""}`}o.has(d)||o.set(d,{key:d,order:u,title:g,items:[]}),o.get(d).items.push(s)}let a=[...o.values()];a.sort((i,s)=>i.order-s.order);for(let i=0;i<a.length;i+=1)a[i].items.sort((l,d)=>{let u=Array.isArray(l.ranges)&&l.ranges[0]&&l.ranges[0].start||0,g=Array.isArray(d.ranges)&&d.ranges[0]&&d.ranges[0].start||0;return u!==g?u-g:(Number(l.createdAt)||0)-(Number(d.createdAt)||0)});return a}function Uf({hasAny:t,filter:e}){return t?(0,ve.jsxs)("div",{className:"dshr-anno-panel__empty",children:[(0,ve.jsx)("p",{className:"dshr-anno-panel__empty-title",children:"\u6CA1\u6709\u5339\u914D\u7684\u6807\u6CE8"}),(0,ve.jsxs)("p",{className:"dshr-anno-panel__empty-text",children:["\u5F53\u524D\u7B5B\u9009\u662F\u300C",e==="all"?"\u5168\u90E8":Ti(e),"\u300D\uFF0C\u5207\u6362\u7B5B\u9009\u770B\u770B\u5176\u4F59\u6807\u6CE8\u3002"]})]}):(0,ve.jsxs)("div",{className:"dshr-anno-panel__empty",children:[(0,ve.jsx)("span",{className:"dshr-anno-panel__empty-mark","aria-hidden":"true",children:(0,ve.jsx)(Vl,{size:44})}),(0,ve.jsx)("p",{className:"dshr-anno-panel__empty-title",children:"\u8FD8\u6CA1\u6709\u4EFB\u4F55\u6807\u6CE8"}),(0,ve.jsx)("p",{className:"dshr-anno-panel__empty-text",children:"\u5728\u9605\u8BFB\u65F6\u9009\u4E2D\u4E00\u6BB5\u6587\u5B57\uFF0C\u5C31\u53EF\u4EE5\u7528\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u6216\u4FBF\u7B7E\u628A\u5B83\u7559\u5728\u8FD9\u91CC\u3002"}),(0,ve.jsxs)("ol",{className:"dshr-anno-panel__steps",children:[(0,ve.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,ve.jsx)("span",{className:"dshr-anno-panel__step-index",children:"1"})," \u9009\u4E2D\u6B63\u6587\u4E2D\u7684\u4E00\u6BB5\u6587\u5B57"]}),(0,ve.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,ve.jsx)("span",{className:"dshr-anno-panel__step-index",children:"2"})," \u9009\u62E9\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u6216\u4FBF\u7B7E"]}),(0,ve.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,ve.jsx)("span",{className:"dshr-anno-panel__step-index",children:"3"})," \u4E4B\u540E\u56DE\u5230\u8FD9\u91CC\u56DE\u770B\u3001\u8DF3\u8F6C"]})]}),(0,ve.jsx)("p",{className:"dshr-anno-panel__hint",children:"PDF \u9875\u9762\u540C\u6837\u652F\u6301\uFF1A\u9009\u4E2D\u6587\u5B57\u540E\u70B9\u51FB\u300C\u6807\u6CE8\u300D\u5373\u53EF\u3002"})]})}function Vc({open:t,annotations:e,book:r,onClose:n,onOpenAnnotation:o,onJump:a,onDelete:i}){let[s,l]=za.default.useState("all"),d=za.default.useMemo(()=>$f(r),[r]);if(za.default.useEffect(()=>{if(!t||typeof document>"u")return;let k=x=>{x.key!=="Escape"||typeof n!="function"||document.querySelector(".dshr-anno-composer")||(x.preventDefault(),n())};return document.addEventListener("keydown",k,!0),()=>document.removeEventListener("keydown",k,!0)},[n,t]),!t)return null;let u=(Array.isArray(e)?e:[]).filter(Boolean),g={all:u.length};for(let k=0;k<to.length;k+=1){let x=to[k].id;g[x]=u.filter(T=>T.style===x).length}let f=Hf(u,d,s),p=s==="all"?u.length:u.filter(k=>k.style===s).length,_=(k,x)=>{typeof k=="function"&&k(x)};return(0,ve.jsxs)("aside",{className:"dshr-anno-panel","aria-label":"\u6807\u6CE8\u7B14\u8BB0\u9762\u677F",children:[(0,ve.jsxs)("header",{className:"dshr-anno-panel__head",children:[(0,ve.jsxs)("div",{className:"dshr-anno-panel__titles",children:[(0,ve.jsxs)("h3",{className:"dshr-anno-panel__title",children:["\u6807\u6CE8\u7B14\u8BB0",(0,ve.jsx)("span",{className:"dshr-anno-panel__count",children:u.length})]}),(0,ve.jsx)("span",{className:"dshr-anno-panel__sub",children:u.length>0?`${p} \u6761\u6807\u6CE8 \xB7 ${f.length} \u4E2A\u4F4D\u7F6E`:"\u9009\u4E2D\u6587\u5B57\u5373\u53EF\u6DFB\u52A0\u6807\u6CE8"})]}),(0,ve.jsx)("button",{type:"button",className:"dshr-anno-panel__close","aria-label":"\u5173\u95ED\u6807\u6CE8\u9762\u677F",onClick:()=>_(n),children:(0,ve.jsx)(ba,{size:13})})]}),u.length>0?(0,ve.jsx)("div",{className:"dshr-anno-panel__filters",role:"tablist","aria-label":"\u6309\u6837\u5F0F\u7B5B\u9009\u6807\u6CE8",children:zf.map(k=>{let x=s===k.id,T=g[k.id]||0;return(0,ve.jsxs)("button",{type:"button",role:"tab","aria-selected":x,className:`dshr-anno-panel__filter${x?" is-active":""}`,onClick:()=>l(k.id),children:[k.label,k.id==="all"?` ${T}`:T>0?` ${T}`:""]},k.id)})}):null,(0,ve.jsx)("div",{className:"dshr-anno-panel__list",children:f.length===0?(0,ve.jsx)(Uf,{hasAny:u.length>0,filter:s}):f.map(k=>(0,ve.jsxs)("section",{className:"dshr-anno-panel__group",children:[(0,ve.jsxs)("div",{className:"dshr-anno-panel__group-head",children:[(0,ve.jsx)("span",{className:"dshr-anno-panel__group-title",title:k.title,children:k.title}),(0,ve.jsx)("span",{className:"dshr-anno-panel__group-rule"}),(0,ve.jsx)("span",{className:"dshr-anno-panel__group-count",children:k.items.length})]}),k.items.map(x=>{let T=x.style||"highlight",R=Ff[T]||An,A=x.color||"#f5d76e",P=typeof x.quote=="string"?x.quote.trim():"",C=typeof x.note=="string"?x.note.trim():"",E=Xc(x,d),D=qc(x)?Number(x.page)>0?`\u7B2C ${x.page} \u9875`:"PDF":E?`\u7B2C ${E.index+1} \u7AE0`:"\u6B63\u6587",L=Bf(x.updatedAt||x.createdAt);return(0,ve.jsxs)("article",{className:"dshr-anno-item",style:{"--dshr-anno-color":A},"data-anno-id":x.id||void 0,children:[(0,ve.jsxs)("button",{type:"button",className:"dshr-anno-item__main",onClick:()=>_(o,x.id),title:"\u7F16\u8F91\u8FD9\u6761\u6807\u6CE8",children:[(0,ve.jsxs)("div",{className:"dshr-anno-item__meta",children:[(0,ve.jsx)("span",{className:"dshr-anno-item__dot","aria-hidden":"true"}),(0,ve.jsxs)("span",{className:"dshr-anno-item__style",children:[(0,ve.jsx)(R,{size:12})," ",Ti(T)]}),(0,ve.jsx)("span",{className:"dshr-anno-item__sep","aria-hidden":"true",children:"\xB7"}),(0,ve.jsx)("span",{className:"dshr-anno-item__location",children:D}),(0,ve.jsx)("span",{className:"dshr-anno-item__spacer"}),L?(0,ve.jsx)("span",{children:L}):null]}),(0,ve.jsx)("p",{className:"dshr-anno-item__quote",children:P||C||"\uFF08\u672A\u8BB0\u5F55\u9009\u4E2D\u6587\u5B57\uFF09"}),C&&C!==P?(0,ve.jsx)("p",{className:"dshr-anno-item__note",children:C}):null]}),(0,ve.jsxs)("div",{className:"dshr-anno-item__actions",children:[(0,ve.jsx)("button",{type:"button",className:"dshr-anno-item__action dshr-anno-item__action--jump",onClick:()=>_(a,x),title:"\u8DF3\u8F6C\u5230\u8FD9\u6761\u6807\u6CE8\u7684\u4F4D\u7F6E",children:"\u5B9A\u4F4D"}),(0,ve.jsx)("span",{className:"dshr-anno-item__spacer"}),(0,ve.jsx)("button",{type:"button",className:"dshr-anno-item__action dshr-anno-item__action--danger",onClick:()=>_(i,x),title:"\u5220\u9664\u8FD9\u6761\u6807\u6CE8",children:"\u5220\u9664"})]})]},x.id||`${k.key}:${P}`)})]},k.key))})]})}var Xr=Mt(require("react"),1);var Ae=require("react/jsx-runtime"),Kc={highlight:An,underline:ma,note:fn},Wf={highlight:"\u7528\u534A\u900F\u660E\u7684\u8272\u5E26\u8986\u76D6\u9009\u4E2D\u6587\u5B57\uFF0C\u53EF\u8C03\u7B14\u89E6\u7C97\u7EC6\u3002",underline:"\u5728\u9009\u4E2D\u6587\u5B57\u4E0B\u65B9\u753B\u4E00\u6761\u624B\u5199\u5F0F\u4E0B\u5212\u7EBF\u3002",note:"\u5728\u9009\u4E2D\u6587\u5B57\u65C1\u653E\u4E00\u679A\u4FBF\u7B7E\uFF0C\u8BB0\u5F55\u6B64\u523B\u7684\u60F3\u6CD5\u3002"},Yc=2e3,Yi=wo[1].value;function Zi(t){return t==="underline"?Ul:Hl}function Qc(t){return Object.prototype.hasOwnProperty.call(eo,t)?t:"highlight"}function jf(t){let e=Number(t);if(!Number.isFinite(e))return Yi;let r=Yi,n=1/0;for(let o=0;o<wo.length;o+=1){let a=wo[o].value,i=Math.abs(a-e);i<n&&(r=a,n=i)}return r}function Zc(t){let e=t&&typeof t=="object"?t:{},r=Qc(e.style),n=Zi(r),o=n.find(a=>a.value===e.color);return{style:r,color:o?o.value:typeof e.color=="string"&&e.color?e.color:n[0].value,width:jf(e.width),note:typeof e.note=="string"?e.note:"",quote:typeof e.quote=="string"?e.quote:""}}function Gf(t,e){if(!t||typeof t!="object")return`${e}:empty`;let r=typeof t.quote=="string"?t.quote:"";return[e,t.id||"",r,Array.isArray(t.ranges)?t.ranges.length:0,t.page==null?"":t.page,t.chapterId==null?"":t.chapterId].join("|")}function qf(t){return`${Math.round(2+(Number(t)||Yi)*.34)}px`}function Jc({open:t,draft:e,mode:r,onClose:n,onSave:o,onDelete:a}){let i=r==="edit",[s,l]=Xr.default.useState(()=>Zc(e)),d=Xr.default.useRef(""),u=Xr.default.useRef(null);Xr.default.useEffect(()=>{if(!t){d.current="";return}let C=Gf(e,r);d.current!==C&&(d.current=C,l(Zc(e)))},[e,r,t]),Xr.default.useEffect(()=>{if(!t||typeof window>"u")return;let C=window.setTimeout(()=>{let E=u.current;if(E)try{E.focus({preventScroll:!0}),E.setSelectionRange(E.value.length,E.value.length)}catch{}},30);return()=>window.clearTimeout(C)},[t]);let g=Xr.default.useCallback(C=>{l(E=>({...E,...C}))},[]),f=Xr.default.useCallback(C=>{let E=Qc(C);l(D=>{let L=Zi(E),m=L.some(N=>N.value===D.color);return{...D,style:E,color:m?D.color:L[0].value}})},[]),p=Xr.default.useCallback(()=>{if(!s.note.trim()&&!s.quote.trim()&&s.style==="note")return;let E={...e&&typeof e=="object"?e:{},style:s.style,color:s.color,width:s.width,note:s.note,quote:s.quote};typeof o=="function"&&o(E)},[e,o,s]);if(Xr.default.useEffect(()=>{if(!t||typeof document>"u")return;let C=E=>{if(E.key==="Escape"){E.preventDefault(),E.stopImmediatePropagation(),typeof n=="function"&&n();return}E.key==="Enter"&&(E.metaKey||E.ctrlKey)&&(E.preventDefault(),E.stopImmediatePropagation(),p())};return document.addEventListener("keydown",C,!0),()=>document.removeEventListener("keydown",C,!0)},[p,n,t]),!t)return null;let _=Zi(s.style),k=Kc[s.style]||An,x=s.quote.trim(),T=!!(s.note.trim()||x||s.style!=="note"),R=s.style==="note"?"\u4FBF\u7B7E\u5185\u5BB9":"\u5907\u6CE8",A=s.style==="note"?"\u5199\u4E0B\u8FD9\u6BB5\u6587\u5B57\u7ED9\u4F60\u7684\u60F3\u6CD5\u2026":"\u53EF\u9009\uFF1A\u4E3A\u8FD9\u6761\u6807\u6CE8\u5199\u4E00\u6761\u5907\u6CE8\u2026",P=s.style==="underline"?"\u4E0B\u5212\u7EBF\u989C\u8272":s.style==="note"?"\u4FBF\u7B7E\u989C\u8272":"\u8367\u5149\u7B14\u989C\u8272";return(0,Ae.jsx)("div",{className:"dshr-anno-composer-mask",role:"presentation",onMouseDown:C=>{C.target===C.currentTarget&&typeof n=="function"&&n()},children:(0,Ae.jsxs)("div",{className:"dshr-anno-composer",role:"dialog","aria-modal":"true","aria-label":i?"\u7F16\u8F91\u6807\u6CE8":"\u6DFB\u52A0\u6807\u6CE8",onMouseDown:C=>C.stopPropagation(),children:[(0,Ae.jsxs)("header",{className:"dshr-anno-composer__head",children:[(0,Ae.jsxs)("div",{className:"dshr-anno-composer__titles",children:[(0,Ae.jsx)("h3",{className:"dshr-anno-composer__title",children:i?"\u7F16\u8F91\u6807\u6CE8":"\u6DFB\u52A0\u6807\u6CE8"}),(0,Ae.jsx)("span",{className:"dshr-anno-composer__sub",children:Wf[s.style]})]}),(0,Ae.jsx)("button",{type:"button",className:"dshr-anno-composer__close","aria-label":"\u5173\u95ED\u6807\u6CE8\u7F16\u8F91\u5668",onClick:()=>{typeof n=="function"&&n()},children:(0,Ae.jsx)(ba,{size:13})})]}),(0,Ae.jsxs)("div",{className:"dshr-anno-composer__body",children:[(0,Ae.jsx)("div",{className:"dshr-anno-composer__tabs",role:"tablist","aria-label":"\u6807\u6CE8\u6837\u5F0F",children:to.map(C=>{let E=Kc[C.id]||An,D=s.style===C.id;return(0,Ae.jsxs)("button",{type:"button",role:"tab","aria-selected":D,className:`dshr-anno-composer__tab${D?" is-active":""}`,onClick:()=>f(C.id),children:[(0,Ae.jsx)(E,{size:14})," ",C.label]},C.id)})}),(0,Ae.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Ae.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Ae.jsx)("span",{children:P}),(0,Ae.jsx)("em",{children:s.style==="underline"?"\u7EB8\u4E0A\u7684\u58A8\u8272":"\u534A\u900F\u660E\u7B14\u89E6"})]}),(0,Ae.jsx)("div",{className:"dshr-anno-composer__swatches",role:"radiogroup","aria-label":P,children:_.map(C=>{let E=s.color===C.value;return(0,Ae.jsx)("button",{type:"button",role:"radio","aria-checked":E,"aria-label":`${C.label}\u8272`,title:`${C.label}\u8272`,className:`dshr-anno-swatch${E?" is-active":""}`,style:{"--swatch":C.value},onClick:()=>g({color:C.value}),children:C.label},C.id)})})]}),s.style==="highlight"?(0,Ae.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Ae.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Ae.jsx)("span",{children:"\u7B14\u89E6\u7C97\u7EC6"}),(0,Ae.jsx)("em",{children:"\u7EC6 / \u4E2D / \u5BBD"})]}),(0,Ae.jsx)("div",{className:"dshr-anno-composer__widths",role:"radiogroup","aria-label":"\u7B14\u89E6\u7C97\u7EC6",children:wo.map(C=>{let E=s.width===C.value;return(0,Ae.jsxs)("button",{type:"button",role:"radio","aria-checked":E,className:`dshr-anno-width${E?" is-active":""}`,onClick:()=>g({width:C.value}),children:[(0,Ae.jsx)("span",{className:"dshr-anno-width__bar",style:{height:qf(C.value),background:s.color}}),C.label]},C.id)})})]}):null,(0,Ae.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Ae.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Ae.jsx)("span",{children:R}),(0,Ae.jsx)("em",{children:s.style==="note"?"\u53EF\u7559\u7A7A\uFF0C\u4EC5\u6807\u8BB0\u4F4D\u7F6E":"\u53EF\u9009"})]}),(0,Ae.jsx)("textarea",{ref:u,className:"dshr-anno-composer__textarea",value:s.note,maxLength:Yc,placeholder:A,"aria-label":R,onChange:C=>g({note:C.target.value})}),(0,Ae.jsxs)("div",{className:"dshr-anno-composer__counter",children:[s.note.length," / ",Yc]})]}),x?(0,Ae.jsxs)("div",{className:"dshr-anno-composer__quote",style:{"--dshr-anno-color":s.color},children:[(0,Ae.jsx)("span",{className:"dshr-anno-composer__quote-label",children:"\u9009\u4E2D\u6587\u5B57"}),(0,Ae.jsx)("p",{className:"dshr-anno-composer__quote-text",children:x})]}):null,(0,Ae.jsxs)("div",{className:`dshr-anno-composer__preview is-${s.style}`,style:{"--dshr-anno-color":s.color},children:[(0,Ae.jsx)("span",{className:"dshr-anno-composer__preview-label",children:"\u6548\u679C\u9884\u89C8"}),(0,Ae.jsx)("span",{className:"dshr-anno-composer__preview-text",children:x||"\u9009\u4E2D\u7684\u6587\u5B57\u4F1A\u8FD9\u6837\u663E\u793A"})]})]}),(0,Ae.jsxs)("footer",{className:"dshr-anno-composer__foot",children:[i?(0,Ae.jsx)("button",{type:"button",className:"dshr-anno-btn dshr-anno-btn--danger",onClick:()=>{typeof a=="function"&&a(e||{})},children:"\u5220\u9664"}):null,(0,Ae.jsx)("span",{className:"dshr-anno-composer__spacer"}),(0,Ae.jsx)("button",{type:"button",className:"dshr-anno-btn",onClick:()=>{typeof n=="function"&&n()},children:"\u53D6\u6D88"}),(0,Ae.jsx)("button",{type:"button",className:"dshr-anno-btn dshr-anno-btn--primary",disabled:!T,onClick:p,title:"Ctrl / \u2318 + Enter \u4FDD\u5B58",children:i?"\u4FDD\u5B58\u4FEE\u6539":"\u4FDD\u5B58\u6807\u6CE8"})]})]})})}var Tu=360,Su=520;function Eu(t){try{return t.toDataURL("image/jpeg",.84)}catch{return""}}function km(t){let e=Number(t.naturalWidth||t.width)||0,r=Number(t.naturalHeight||t.height)||0;if(!e||!r)return"";let n=Math.min(Tu/e,Su/r,1),o=document.createElement("canvas");o.width=Math.max(1,Math.round(e*n)),o.height=Math.max(1,Math.round(r*n));let a=o.getContext("2d");return a.fillStyle="#fbf7ee",a.fillRect(0,0,o.width,o.height),a.drawImage(t,0,0,o.width,o.height),Eu(o)}function _m(t){return new Promise(e=>{let r=new Image;r.decoding="async",r.onload=()=>e(r),r.onerror=()=>e(null),r.src=t})}async function Tm(t){if(!t||!String(t.type||"").startsWith("image/"))return"";let e=URL.createObjectURL(t);try{let r=await _m(e);return r?km(r):""}finally{URL.revokeObjectURL(e)}}async function Sm(t,e){let r=await Ta(t,{signal:e}),n,o,a=()=>{o?.cancel(),r.close()};e?.addEventListener("abort",a,{once:!0});try{if(e?.aborted)throw jr();let i=await r.pdf.getPage(1);if(e?.aborted)throw jr();let s=i.getViewport({scale:1}),l=Math.min(Tu/s.width,Su/s.height,1.5),d=i.getViewport({scale:l});if(n=document.createElement("canvas"),n.width=Math.max(1,Math.round(d.width)),n.height=Math.max(1,Math.round(d.height)),o=i.render({canvas:n,viewport:d,background:"#ffffff"}),o.onContinue=u=>setTimeout(()=>{e?.aborted?o.cancel():u()},16),await o.promise,e?.aborted)throw jr();return Eu(n)}finally{e?.removeEventListener("abort",a),await r.close(),n&&(n.width=0,n.height=0)}}async function Au(t,{signal:e}={}){if(e?.aborted)throw jr();if(!t?.blob)return{};let r=String(t.format||"").toLowerCase();try{if(r==="pdf"){let n=await Sm(t.blob,e);return n?{cover:n}:{}}if(["epub","mobi","azw","azw3"].includes(r)){let{parseBook:n}=await Promise.resolve().then(()=>(Bs(),zs)),o=/\.[a-z0-9]+$/iu.test(t.title||"")?t.title:`${t.title||"book"}.${r}`,a=await n(t.blob,{fileName:o,mime:t.blob.type});try{let i="";if(a.cover)try{let s=await fetch(a.cover);i=await Tm(await s.blob())}catch{i=""}return{...i?{cover:i}:{},...a.title?{title:a.title}:{},...a.author?{author:a.author}:{},...a.language?{language:a.language}:{}}}finally{a.dispose?.()}}}catch(n){if(e?.aborted)throw jr();console.warn("[dsh-reader] cover generation failed",t.title,n)}return{}}var Y=require("react/jsx-runtime"),oi="dsh-reader:last-book:v1",$s="dsh-reader:session-book:v1";function Hs(t){let e=t/255;return e<=.03928?e/12.92:((e+.055)/1.055)**2.4}function Us(t){let e=/^#?([0-9a-f]{6})$/iu.exec(String(t||"").trim());if(!e)return null;let r=e[1];return{r:parseInt(r.slice(0,2),16),g:parseInt(r.slice(2,4),16),b:parseInt(r.slice(4,6),16)}}function Em(t){let e=Us(t);return e?.2126*Hs(e.r)+.7152*Hs(e.g)+.0722*Hs(e.b):1}function Am(t,e,r){let n=Us(t),o=Us(e);if(!n||!o)return e;let a=Math.max(0,Math.min(1,r));return`#${mo(n.r*a+o.r*(1-a)).slice(1)}${mo(n.g*a+o.g*(1-a)).slice(1)}${mo(n.b*a+o.b*(1-a)).slice(1)}`}function mo(t){return`#${Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0")}`}function Nm(t){let e=document.createElement("canvas");e.width=32,e.height=32;let r=e.getContext("2d",{willReadFrequently:!0});if(!r)return"";r.drawImage(t,0,0,e.width,e.height);let n;try{n=r.getImageData(0,0,e.width,e.height).data}catch{return""}let o=new Map;for(let i=0;i<n.length;i+=4){let s=n[i+3];if(s<40)continue;let l=n[i],d=n[i+1],u=n[i+2],g=`${l>>5}:${d>>5}:${u>>5}`,f=o.get(g);f||(f={count:0,r:0,g:0,b:0},o.set(g,f)),f.count+=s,f.r+=l*s,f.g+=d*s,f.b+=u*s}let a=null;for(let i of o.values())(!a||i.count>a.count)&&(a=i);return a?mo(a.r/a.count)+mo(a.g/a.count).slice(1)+mo(a.b/a.count).slice(1):""}function Cm(t,e,r){return Math.max(e,Math.min(r,t))}var Ws=class extends H.default.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,r){console.error("[dsh-reader]",e,r)}reset=()=>this.setState({error:null});render(){return this.state.error?(0,Y.jsx)("div",{className:"dshr-root",children:(0,Y.jsxs)("div",{className:"dshr-error-panel",children:[(0,Y.jsx)("h3",{children:"\u9605\u8BFB\u5668\u9047\u5230\u4E86\u4E00\u4E2A\u95EE\u9898"}),(0,Y.jsxs)("p",{children:[this.state.error?.message||"\u672A\u77E5\u9519\u8BEF","\u3002\u8FD9\u901A\u5E38\u662F\u6587\u6863\u683C\u5F0F\u6216\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u91CD\u65B0\u6253\u5F00\u6587\u6863\u901A\u5E38\u53EF\u4EE5\u6062\u590D\u3002"]}),(0,Y.jsx)("div",{style:{display:"flex",gap:8,marginTop:14},children:(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:()=>{this.reset(),this.props.onReset?.()},children:"\u8FD4\u56DE\u4E66\u67B6"})})]})}):this.props.children}};function Im(){let[t,e]=H.default.useState(""),r=H.default.useRef(0),n=H.default.useCallback((o,a=2800)=>{window.clearTimeout(r.current),e(String(o)),r.current=window.setTimeout(()=>e(""),a)},[]);return H.default.useEffect(()=>()=>window.clearTimeout(r.current),[]),[t,n]}function Nu(){let[t,e]=H.default.useState([]),[r,n]=H.default.useState(!0),[o,a]=H.default.useState(!1),[i,s]=H.default.useState(!1),[l,d]=H.default.useState("all"),[u,g]=H.default.useState(null),[f,p]=H.default.useState(!1),[_,k]=H.default.useState(""),[x,T]=H.default.useState(Nl),[R,A]=H.default.useState(!1),[P,C]=H.default.useState(!1),[E,D]=H.default.useState(!1),[L,m]=H.default.useState(!1),[N,F]=H.default.useState(!1),[J,se]=H.default.useState(!1),ne=H.default.useRef(null),[oe,z]=H.default.useState(null),[de,O]=Im(),[{index:X,entry:re},$]=H.default.useState({index:0,entry:null}),[xe,me]=H.default.useState({}),[Te,q]=H.default.useState(!0),[Ge,Re]=H.default.useState(!1),[Me,$e]=H.default.useState(null),[He,Ue]=H.default.useState(null),[h,c]=H.default.useState(null),[S,v]=H.default.useState([]),[ee,ue]=H.default.useState(!1),[le,be]=H.default.useState(null),[Ne,Pe]=H.default.useState(!1),[te,De]=H.default.useState(null),[Ze,qe]=H.default.useState(null),[Xe,Oe]=H.default.useState(null),[fe,Qe]=H.default.useState(""),[lt,ct]=H.default.useState(0),[pt,er]=H.default.useState(""),[wt,Nt]=H.default.useState(!1),[mt,tr]=H.default.useState(0),It=H.default.useRef(null),St=H.default.useRef({timer:0,latest:null}),bt=H.default.useRef({token:0,controller:null}),V=H.default.useRef(null),ie=H.default.useRef(x),ye=H.default.useRef(t),he=H.default.useRef({running:!1,attempted:new Set}),gt=H.default.useRef(!1),[tt,Ft]=H.default.useState(null);V.current=u,ie.current=x,ye.current=t;let nr=H.default.useCallback(()=>{bt.current.token+=1,bt.current.controller?.abort()},[]);H.default.useLayoutEffect(()=>()=>nr(),[u?.record?.id,He,nr]);let cn=`${x.fontSize}:${x.lineHeight}:${x.fontFamily}:${x.fontWeight}:${x.tocWidth}:${x.contentWidth}:${fe?"img":"plain"}:${mt}`,Br=H.default.useMemo(()=>Fa(x,fe),[x,fe]),$r=H.default.useMemo(()=>{let w=Br["--dshr-reader-bg"]||x.customBackground||"#fbf7ee",M=pt&&fe?Am(pt,w,Number(x.backgroundImageOpacity)||0):w,Fe=Em(M)*Math.max(.35,Math.min(1.25,Number(x.brightness)||1))<.4?"#f8f5ec":"#17181a";return{"--dshr-immersive-ink":Fe,"--dshr-immersive-chip":`color-mix(in srgb, ${M} 58%, transparent)`,"--dshr-immersive-chip-hover":`color-mix(in srgb, ${M} 82%, transparent)`,"--dshr-immersive-border":`color-mix(in srgb, ${Fe} 32%, transparent)`}},[pt,fe,Br,x.customBackground,x.backgroundImageOpacity,x.brightness]),kt=H.default.useCallback(async()=>{try{e(await vi())}catch(w){O(w?.message||"\u8BFB\u53D6\u4E66\u67B6\u5931\u8D25\u3002")}finally{n(!1)}},[O]),Er=H.default.useCallback(async w=>{if(!w){v([]);return}try{v(await wl(w))}catch(M){console.warn("[dsh-reader] annotations unavailable",M),v([])}},[]);H.default.useEffect(()=>{kt()},[kt]),H.default.useEffect(()=>{if(r||u)return;let w=ye.current.filter(Se=>!Se.cover&&["pdf","epub","mobi","azw","azw3"].includes(Se.format)&&!he.current.attempted.has(Se.id));if(w.length===0)return;let M=he.current,Q=new AbortController;M.controller=Q,M.running=!0;let Fe=setTimeout(()=>{(async()=>{for(let Se of w){if(Q.signal.aborted)break;if(!M.attempted.has(Se.id))try{let We=await yo(Se.id);if(!We||Q.signal.aborted)continue;let dt=await Au(We,{signal:Q.signal});if(Q.signal.aborted)break;M.attempted.add(Se.id),(dt.cover||dt.title||dt.author||dt.language)&&(await Qn(We.id,dt),e(Hr=>Hr.map(Ir=>Ir.id===We.id?{...Ir,...dt}:Ir)))}catch(We){if(Q.signal.aborted)break;M.attempted.add(Se.id),console.warn("[dsh-reader] cover generation failed",Se.title,We)}}})().finally(()=>{M.controller===Q&&(M.running=!1)})},500);return()=>{clearTimeout(Fe),Q.abort()}},[r,u]),H.default.useEffect(()=>{Cl(x)},[x]),H.default.useEffect(()=>{if(!u||x.readingMode==="book")return;let w=M=>{if(M.defaultPrevented||M.repeat||M.ctrlKey||M.metaKey||M.altKey||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(M.key)||M.target instanceof Element&&M.target.closest('input, textarea, select, [contenteditable="true"], .dshr-modal-mask, .dshr-appearance-panel, .dshr-anno-panel, .dshr-ai, .dshr-selection, .dshr-anno-composer, .dshr-pdf-translation-panel'))return;let Q=window.getSelection?.();if(Q&&!Q.isCollapsed)return;let Fe=document.querySelector(".dshr-root .dshr-content")||document.querySelector(".dshr-root .dshr-pdf-scroll");if(!Fe)return;M.preventDefault();let Se=Math.max(160,Math.round(Fe.clientHeight*.82)),We=M.key==="ArrowRight"||M.key==="ArrowDown";Fe.scrollBy({top:We?Se:-Se,behavior:"smooth"})};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[u,x.readingMode]),H.default.useEffect(()=>{if(!fe){er("");return}let w=!1,M=new Image;return M.onload=()=>{w||er(Nm(M))},M.onerror=()=>{w||er("")},M.src=fe,()=>{w=!0}},[fe]),H.default.useEffect(()=>{let w=!1,M="";if(!x.backgroundImageKey){Qe("");return}return(async()=>{try{let Q=await El();if(!Q||w)return;M=URL.createObjectURL(Q),Qe(M)}catch{w||Qe("")}})(),()=>{w=!0,M&&URL.revokeObjectURL(M)}},[x.backgroundImageKey,lt]),H.default.useEffect(()=>{if(!He)return;let w=Q=>{Q?.type==="scroll"&&Q.target instanceof Element&&Q.target.closest(".dshr-pdf-translation-panel")||Ue(null)},M=Q=>{Q.key==="Escape"&&Ue(null)};return window.addEventListener("resize",w),window.addEventListener("keydown",M),document.addEventListener("scroll",w,!0),()=>{window.removeEventListener("resize",w),window.removeEventListener("keydown",M),document.removeEventListener("scroll",w,!0)}},[He]);let ut=H.default.useCallback(async()=>{let w=St.current.latest;if(w){St.current.latest=null;try{await yi(w.id,w.progress),e(M=>M.map(Q=>Q.id===w.id?{...Q,progress:w.progress,lastOpenedAt:Date.now()}:Q))}catch{}}},[kt]),Ut=H.default.useCallback((w,M)=>{w&&(me(M),St.current.latest={id:w,progress:M},!St.current.timer&&(St.current.timer=window.setTimeout(()=>{St.current.timer=0,ut()},700)))},[ut]);H.default.useEffect(()=>()=>{window.clearTimeout(St.current.timer),ut()},[ut]);let jn=H.default.useCallback(async()=>{s(!0);try{let w=await pl();await kt();let M=[`\u6587\u732E ${w.counts.paper||0}`,`\u4E66\u7C4D ${w.counts.book||0}`];w.counts.document&&M.push(`\u6587\u6863 ${w.counts.document}`),O(w.changed>0?`\u4E66\u5355\u5DF2\u6574\u7406\uFF1A${M.join(" \xB7 ")}`:`\u4E66\u5355\u5DF2\u662F\u6700\u65B0\uFF1A${M.join(" \xB7 ")}`)}catch(w){O(w?.message||"\u81EA\u52A8\u6574\u7406\u5931\u8D25\u3002")}finally{s(!1)}},[kt,O]),xn=H.default.useCallback(async(w,M)=>{let Q=["book","paper","document"],Fe=M||Q[(Q.indexOf(w.category||"document")+1)%Q.length];try{await fl(w.id,Fe),await kt(),O(`\u300A${w.title||"\u6587\u6863"}\u300B\u5DF2\u5F52\u5165\u300C${Zn(Fe)}\u300D\u3002`)}catch(Se){O(Se?.message||"\u4FEE\u6539\u5206\u7C7B\u5931\u8D25\u3002")}},[kt,O]),ur=H.default.useCallback(w=>{T(M=>({...M,...w})),tr(M=>M+1)},[]),vn=H.default.useCallback(()=>{It.current?.click()},[]),or=H.default.useCallback(async w=>{if(w){if(!String(w.type||"").startsWith("image/")){O("\u8BF7\u9009\u62E9\u56FE\u7247\u6587\u4EF6\uFF08JPG / PNG / WebP\uFF09\u3002");return}Nt(!0);try{let M=w;try{let Q=await createImageBitmap(w),Fe=Math.min(1,2400/Math.max(Q.width,Q.height));if(Fe<1){let Se=document.createElement("canvas");Se.width=Math.round(Q.width*Fe),Se.height=Math.round(Q.height*Fe),Se.getContext("2d").drawImage(Q,0,0,Se.width,Se.height);let dt=await new Promise(Hr=>Se.toBlob(Hr,"image/jpeg",.86));dt&&(M=dt)}Q.close?.()}catch{}await Sl(M),T(Q=>({...Q,backgroundImageKey:"reader-background"})),ct(Q=>Q+1),O("\u80CC\u666F\u56FE\u7247\u5DF2\u4FDD\u5B58\uFF0C\u53EF\u8C03\u6574\u900F\u660E\u5EA6\u548C\u6A21\u7CCA\u5EA6\u3002")}catch(M){O(M?.message||"\u80CC\u666F\u56FE\u7247\u4FDD\u5B58\u5931\u8D25\u3002")}finally{Nt(!1)}}},[O]),yn=H.default.useCallback(async()=>{try{await Al(),T(w=>({...w,backgroundImageKey:""})),Qe(""),O("\u5DF2\u79FB\u9664\u80CC\u666F\u56FE\u7247\u3002")}catch(w){O(w?.message||"\u79FB\u9664\u80CC\u666F\u56FE\u7247\u5931\u8D25\u3002")}},[O]),Ar=H.default.useCallback(async(w,M={})=>{if(M.rejected){O("\u6CA1\u6709\u53EF\u8BC6\u522B\u7684\u6587\u6863\u3002\u652F\u6301 PDF / EPUB / MOBI / TXT / Markdown / HTML\u3002");return}if(!w?.length)return;a(!0);let Q=[],Fe=[];for(let Se of w)try{let We=await hl(Se);Q.push(We)}catch(We){Fe.push(`${Se.name}: ${We?.message||"\u5BFC\u5165\u5931\u8D25"}`)}await kt(),a(!1),Fe.length>0&&O(Fe[0],4200),Q.length>0&&(O(Q.length===1?"\u5DF2\u52A0\u5165\u4E66\u67B6\u3002":`\u5DF2\u52A0\u5165 ${Q.length} \u4EFD\u6587\u6863\u3002`),j(Q[0]))},[kt,O]),rn=H.default.useCallback(async w=>{D(!0);try{let M=await Fl(w);C(!1),await Ar([M])}catch(M){O(M?.message||"\u5728\u7EBF\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u94FE\u63A5\u6216\u7A0D\u540E\u91CD\u8BD5\u3002",5200)}finally{D(!1)}},[Ar,O]),Rt=H.default.useCallback(async()=>{if(F(!1),document.fullscreenElement===ne.current)try{await document.exitFullscreen()}catch{}},[]),ar=H.default.useCallback(async()=>{if(N){await Rt();return}F(!0),q(!1)},[N,Rt]),pe=H.default.useCallback(async()=>{try{document.fullscreenElement===ne.current?await document.exitFullscreen():ne.current?.requestFullscreen&&await ne.current.requestFullscreen()}catch{O("\u6D4F\u89C8\u5668\u963B\u6B62\u4E86\u5168\u5C4F\uFF1B\u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528\u5F53\u524D\u7A97\u53E3\u7684\u6C89\u6D78\u6A21\u5F0F\u3002",3600)}},[O]);H.default.useEffect(()=>{let w=()=>{se(document.fullscreenElement===ne.current)};return document.addEventListener("fullscreenchange",w),()=>document.removeEventListener("fullscreenchange",w)},[]),H.default.useEffect(()=>{!u&&N&&Rt()},[u,N,Rt]),H.default.useEffect(()=>{if(!N)return;let w=M=>{M.key==="Escape"&&(M.preventDefault(),Rt())};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[N,Rt]);let y=H.default.useCallback(()=>{try{localStorage.removeItem(oi)}catch{}try{sessionStorage.removeItem($s)}catch{}Ft(null),St.current.timer&&(window.clearTimeout(St.current.timer),St.current.timer=0),ut(),Re(!1),$e(null),Ue(null),c(null),v([]),ue(!1),Pe(!1),be(null),De(null),qe(null),Oe(null);let w=V.current?.book;if(w?.dispose)try{w.dispose()}catch{}g(null),me({}),$({index:0,entry:null})},[ut]),j=H.default.useCallback(async w=>{p(!0),k(`\u6B63\u5728\u6253\u5F00\u300A${w.title||"\u6587\u6863"}\u300B\u2026`);try{let M=await yo(w.id);if(!M?.blob)throw new Error("\u4E66\u67B6\u4E2D\u627E\u4E0D\u5230\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u53EF\u80FD\u5DF2\u88AB\u6E05\u7406\u3002\u8BF7\u91CD\u65B0\u5BFC\u5165\u3002");Ft(null);try{localStorage.setItem(oi,M.id)}catch{}try{sessionStorage.setItem($s,M.id)}catch{}if((M.format||Tn(M.title))==="pdf"){M.blob.size>24*1024*1024&&k(`\u6B63\u5728\u6253\u5F00\u5927\u578B PDF\u300A${M.title||w.title||"\u6587\u6863"}\u300B\u2026`);let Ir=M.blob,Ur=M.progress||{},Yo={...M,blob:null,blobName:M.blob.name||""};g({kind:"pdf",record:Yo,data:Ir}),me({page:Ur.page||1,pages:Ur.pages||0,percent:Ur.percent||0}),$({index:0,entry:null}),q(!1),ue(!1),Oe(null),await Er(M.id),p(!1),await yi(M.id),await kt();return}let{parseBook:Fe}=await Promise.resolve().then(()=>(Bs(),zs)),Se=await Fe(M.blob,{fileName:M.title??w.title,mime:M.blob.type}),We={...M,title:Se.title||M.title,author:Se.author||M.author,language:Se.language||M.language};(We.title!==M.title||We.author!==M.author||We.language!==M.language)&&(await Qn(M.id,{title:We.title,author:We.author,language:We.language}),await kt());let dt=M.progress||{},Hr=Cm(Number(dt.chapter)||0,0,Math.max(0,Se.chapters.length-1));g({kind:"flow",record:We,book:Se}),$({index:Hr,entry:{scrollRatio:Number(dt.scrollRatio)||0}}),me({chapter:Hr,chapters:Se.chapters.length,percent:Number(dt.percent)||(Se.chapters.length?(Hr+1)/Se.chapters.length*100:0)}),q(!0),ue(!1),qe(null),await Er(M.id),p(!1),Rl(Se.chapters.slice(0,3).map(Ir=>Ir.blocks.map(Ur=>Ur.text||"").join(" ")).join(" "))&&!ie.current.autoTranslate&&O("\u68C0\u6D4B\u5230\u5916\u6587\u5185\u5BB9\u3002\u9876\u90E8\u300C\u5B9E\u65F6\u7FFB\u8BD1\u300D\u53EF\u4EE5\u968F\u65F6\u5F00\u542F\u3002",4200)}catch(M){p(!1),O(M?.message||"\u6253\u5F00\u6587\u6863\u5931\u8D25\u3002",5e3)}},[kt,Er,O]);H.default.useEffect(()=>{if(r||u||gt.current||ye.current.length===0)return;gt.current=!0;let w="";try{w=localStorage.getItem(oi)||""}catch{}if(!w){Ft(null);return}let M=ye.current.find(Se=>Se.id===w);if(!M){Ft(null);try{localStorage.removeItem(oi)}catch{}return}let Q=Number(M.size)>24*1024*1024||Number(M.progress?.pages)>300,Fe=!1;try{Fe=sessionStorage.getItem($s)===M.id}catch{}Ft(M),!(Q&&!Fe)&&j(M)},[r,u,j]),H.default.useEffect(()=>{let w=()=>{document.visibilityState==="hidden"&&ut()};return document.addEventListener("visibilitychange",w),()=>document.removeEventListener("visibilitychange",w)},[ut]);let ce=H.default.useCallback(async()=>{let w=oe;if(w)try{V.current?.record?.id===w.id&&y(),await gl(w.id),z(null),await kt(),O("\u5DF2\u4ECE\u4E66\u67B6\u5220\u9664\u3002")}catch(M){O(M?.message||"\u5220\u9664\u5931\u8D25\u3002")}},[y,oe,kt,O]),Je=H.default.useCallback(async()=>{try{y(),await ml(),await kt(),A(!1),O("\u4E66\u67B6\u5DF2\u6E05\u7A7A\u3002")}catch(w){O(w?.message||"\u6E05\u7A7A\u4E66\u67B6\u5931\u8D25\u3002")}},[y,kt,O]),xt=H.default.useCallback((w,M)=>{$e({id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:String(w||"").slice(0,8e3),context:String(M||"").slice(0,1600)}),Re(!0),ue(!1),Ue(null),c(null)},[]),Ve=H.default.useCallback((w,M="web")=>{let Q=String(w||"").trim().slice(0,500);if(!Q)return;let Fe=M==="scholar"?`https://scholar.google.com/scholar?q=${encodeURIComponent(Q)}`:`https://www.google.com/search?q=${encodeURIComponent(Q)}`;window.open(Fe,"_blank","noopener,noreferrer")||O("\u6D4F\u89C8\u5668\u62E6\u622A\u4E86\u65B0\u7A97\u53E3\u3002\u8BF7\u5141\u8BB8\u5F39\u51FA\u7A97\u53E3\uFF0C\u6216\u590D\u5236\u6587\u5B57\u540E\u624B\u52A8\u641C\u7D22\u3002")},[O]),vt=H.default.useCallback(async w=>{try{await navigator.clipboard.writeText(w),O("\u5DF2\u590D\u5236\u3002")}catch{O("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u3002")}},[O]),Wt=H.default.useCallback(w=>{if(nr(),!w?.text?.trim()){Ue(null);return}Ue({...w,source:"flow"}),c(null)},[nr]),Nr=H.default.useCallback(w=>{if(nr(),!w?.text){Ue(null);return}Ue({...w,source:"pdf"}),c(null)},[nr]),Cr=H.default.useCallback(async w=>{let M=w?.text?.trim();if(!M)return;nr();let Q=new AbortController,Fe=bt.current.token,Se=u?.record?.id;bt.current.controller=Q;let We=()=>!Q.signal.aborted&&Fe===bt.current.token&&V.current?.record?.id===Se;c({status:"loading"});try{let dt=await Jn([{id:"selection",text:M}],{context:w.context||"",title:u?.book?.title||u?.record?.title||"",signal:Q.signal});We()&&c({status:"done",zh:dt.selection||""})}catch(dt){We()&&!En(dt)&&c({status:"error",error:dt?.message||"\u7FFB\u8BD1\u5931\u8D25\u3002"})}},[u,nr]),_t=H.default.useCallback(w=>{let M=V.current?.record?.id;if(!M||!w?.text?.trim())return;let Q=V.current?.kind==="pdf";De(null),be({bookId:M,kind:Q?"pdf":"flow",style:"highlight",color:"#f5d76e",width:9,note:"",quote:w.text.trim(),chapterId:Q?void 0:V.current?.book?.chapters?.[X]?.id,chapterIndex:Q?void 0:X,ranges:Q?void 0:w.ranges,page:Q?w.page:void 0,rects:Q?w.pageRects:void 0}),Pe(!0),Ue(null),c(null)},[X]),nn=H.default.useCallback(w=>{w&&(De(w),be({...w}),Pe(!0))},[]),hr=H.default.useCallback(w=>{let M=S.find(Q=>Q.id===w);M&&nn(M)},[S,nn]),ir=H.default.useCallback(()=>{Pe(!1),be(null),De(null)},[]),Vo=H.default.useCallback(async w=>{if(!(!w||!w.bookId))try{w.id?await _l(w.id,w):await kl(w),await Er(w.bookId),ir(),tr(M=>M+1),O(w.note?.trim()?"\u6279\u6CE8\u5DF2\u4FDD\u5B58\u3002":"\u6807\u8BB0\u5DF2\u4FDD\u5B58\u3002")}catch(M){O(M?.message||"\u4FDD\u5B58\u6279\u6CE8\u5931\u8D25\u3002")}},[ir,Er,O]),dn=H.default.useCallback(async w=>{if(w?.id)try{await Tl(w.id),await Er(V.current?.record?.id),ir(),tr(M=>M+1),O("\u6279\u6CE8\u5DF2\u5220\u9664\u3002")}catch(M){O(M?.message||"\u5220\u9664\u6279\u6CE8\u5931\u8D25\u3002")}},[ir,Er,O]),ai=H.default.useCallback(w=>{if(!w)return;if(w.kind==="pdf"){Oe({id:w.id,page:w.page,token:Date.now()}),ue(!1);return}let M=Number.isFinite(w.chapterIndex)?w.chapterIndex:0;$(Q=>Q.index===M?Q:{index:M,entry:{edge:"start"}}),qe({id:w.id,blockId:w.ranges?.[0]?.blockId,token:Date.now()}),ue(!1)},[]),bo=H.default.useCallback((w,M={edge:"start"})=>{w===X||w<0||w>=(u?.book?.chapters.length??0)||(qe(null),$({index:w,entry:M}))},[X,u]),un=H.default.useCallback((w,M)=>{w!==re||u?.kind!=="flow"||($(Q=>Q.entry===w?{index:Q.index,entry:null}:Q),Ut(u.record.id,_a(X,u.book.chapters.length,M)))},[re,X,u,Ut]);function ii(w){if(w.button!==0)return;w.preventDefault();let M=w.clientX,Q=Number(ie.current.tocWidth)||260,Fe=document.body.style.cursor,Se=document.body.style.userSelect;document.body.style.cursor="col-resize",document.body.style.userSelect="none",document.body.classList.add("dshr-toc-resizing");let We=Hr=>{let Ir=Math.max(180,Math.min(520,Math.round(Q+Hr.clientX-M)));T(Ur=>({...Ur,tocWidth:Ir}))},dt=()=>{window.removeEventListener("pointermove",We),window.removeEventListener("pointerup",dt),window.removeEventListener("pointercancel",dt),document.body.style.cursor=Fe,document.body.style.userSelect=Se,document.body.classList.remove("dshr-toc-resizing")};window.addEventListener("pointermove",We),window.addEventListener("pointerup",dt),window.addEventListener("pointercancel",dt)}let fr=u?.book?.title||u?.record?.title||u?.record?.blob?.name||u?.record?.blobName||"",si=u?.book?.author||u?.record?.author||"",Ko=u?u.kind==="pdf"?xe.pages?`\u7B2C ${xe.page||1} / ${xe.pages} \u9875`:"PDF \u6587\u6863":`\u7B2C ${(X||0)+1} / ${u.book.chapters.length} \u7AE0`:"",wn=u?u.kind==="pdf"?xe.pages>0?(xe.page||1)/xe.pages*100:0:(X+1)/Math.max(1,u.book.chapters.length)*100:0;return(0,Y.jsx)(Ws,{onReset:y,children:(0,Y.jsxs)("div",{ref:ne,className:`dshr-root${N?" is-immersive":""}`,style:{...Br,...$r,"--dshr-font-size":`${x.fontSize}px`,"--dshr-line-height":String(x.lineHeight),"--dshr-toc-width":`${x.tocWidth}px`},"data-reader-background":x.backgroundPreset,"data-hide-translations":x.hideTranslations?"true":"false","data-reading-mode":x.readingMode||"scroll",children:[(0,Y.jsx)("input",{ref:It,type:"file",accept:"image/*",className:"dshr-sr-only",tabIndex:-1,onChange:w=>{let M=w.target.files?.[0];w.target.value="",or(M)}}),u?(0,Y.jsxs)("div",{className:"dshr-reader",children:[(0,Y.jsxs)("div",{className:"dshr-topbar",style:{position:"relative"},children:[(0,Y.jsx)("div",{className:"dshr-progress","aria-hidden":"true",children:(0,Y.jsx)("i",{style:{"--p":`${Math.min(100,wn)}%`}})}),(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:y,title:"\u8FD4\u56DE\u4E66\u67B6","aria-label":"\u8FD4\u56DE\u4E66\u67B6",children:(0,Y.jsx)(Js,{size:17})}),(0,Y.jsxs)("div",{className:"dshr-topbar__title",children:[(0,Y.jsx)("strong",{title:fr,children:fr}),(0,Y.jsx)("span",{children:[si,Yn(u.record?.format),Ko].filter(Boolean).join(" \xB7 ")})]}),(0,Y.jsxs)("div",{className:"dshr-topbar__tools",children:[u.kind==="flow"?(0,Y.jsx)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${Te?"dshr-btn--outline":""}`,onClick:()=>q(w=>!w),title:"\u76EE\u5F55","aria-label":"\u76EE\u5F55","aria-pressed":Te,children:(0,Y.jsx)(pi,{size:16})}):null,(0,Y.jsxs)("div",{className:"dshr-topbar__mode",role:"group","aria-label":"\u7FFB\u4E66\u65B9\u5F0F",children:[(0,Y.jsx)("button",{type:"button",className:`dshr-topbar__mode-btn${x.readingMode!=="book"?" is-active":""}`,onClick:()=>T(w=>({...w,readingMode:"scroll"})),"aria-pressed":x.readingMode!=="book",title:"\u8FDE\u7EED\u6EDA\u52A8\u9605\u8BFB",children:(0,Y.jsx)("span",{children:"\u6EDA\u52A8"})}),(0,Y.jsx)("button",{type:"button",className:`dshr-topbar__mode-btn${x.readingMode==="book"?" is-active":""}`,onClick:()=>T(w=>({...w,readingMode:"book"})),"aria-pressed":x.readingMode==="book",title:"\u6A2A\u7248\u7EB8\u8D28\u4E66\u7FFB\u9875",children:(0,Y.jsx)("span",{children:"\u6A2A\u7248"})}),x.readingMode==="book"?(0,Y.jsx)("select",{className:"dshr-topbar__animation","aria-label":"\u7FFB\u9875\u52A8\u753B",value:x.bookAnimation||"slide",onChange:w=>T(M=>({...M,bookAnimation:w.target.value})),children:Hc.map(w=>(0,Y.jsx)("option",{value:w.id,children:w.label},w.id))}):null]}),(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon",onClick:()=>{ar()},title:"\u6C89\u6D78\u6A21\u5F0F\uFF08\u9690\u85CF\u5DE5\u5177\u680F\u4E0E\u4FA7\u8FB9\u76EE\u5F55\uFF09","aria-label":"\u8FDB\u5165\u6C89\u6D78\u6A21\u5F0F",children:(0,Y.jsx)(gi,{size:16})}),(0,Y.jsxs)("button",{type:"button",className:"dshr-switch",role:"switch","aria-checked":x.autoTranslate,onClick:()=>T(w=>({...w,autoTranslate:!w.autoTranslate,...u.kind==="pdf"&&!w.autoTranslate?{hideTranslations:!1}:{}})),title:"\u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1",children:[(0,Y.jsx)("span",{className:"dshr-switch__track"}),(0,Y.jsx)("span",{style:{whiteSpace:"nowrap"},children:"\u5B9E\u65F6\u7FFB\u8BD1"})]}),(0,Y.jsx)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${x.hideTranslations?"dshr-btn--outline":""}`,onClick:()=>T(w=>({...w,hideTranslations:!w.hideTranslations})),title:x.hideTranslations?"\u663E\u793A\u4E2D\u6587\u8BD1\u6587":"\u53EA\u770B\u539F\u6587\uFF08\u9690\u85CF\u5DF2\u7FFB\u8BD1\u5185\u5BB9\uFF09","aria-label":x.hideTranslations?"\u663E\u793A\u4E2D\u6587\u8BD1\u6587":"\u53EA\u770B\u539F\u6587\uFF0C\u9690\u85CF\u8BD1\u6587","aria-pressed":x.hideTranslations,children:x.hideTranslations?(0,Y.jsx)(dl,{size:16}):(0,Y.jsx)(cl,{size:16})}),(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon",onClick:()=>{m(!0),Ue(null)},title:"\u5B57\u4F53\u3001\u80CC\u666F\u4E0E\u7559\u767D","aria-label":"\u9605\u8BFB\u5916\u89C2",children:(0,Y.jsx)(la,{size:16})}),(0,Y.jsxs)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${ee?"dshr-btn--outline":""}`,onClick:()=>{ue(w=>!w),Re(!1),Ue(null)},title:"\u6279\u6CE8\u4E0E\u4FBF\u7B7E","aria-label":`\u6279\u6CE8\u4E0E\u4FBF\u7B7E\uFF0C\u5171 ${S.length} \u6761`,children:[(0,Y.jsx)(sa,{size:16}),S.length>0?(0,Y.jsx)("span",{className:"dshr-count-badge",children:S.length>99?"99+":S.length}):null]}),(0,Y.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary dshr-btn--sm",onClick:()=>xt("",""),title:"\u6253\u5F00 AI \u9605\u8BFB\u52A9\u624B",children:[(0,Y.jsx)(hn,{size:14})," AI"]}),(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:()=>A(!0),title:"\u9605\u8BFB\u8BBE\u7F6E","aria-label":"\u9605\u8BFB\u8BBE\u7F6E",children:(0,Y.jsx)(na,{size:16})})]})]}),(0,Y.jsxs)("div",{className:"dshr-body",children:[u.kind==="flow"?(0,Y.jsxs)("aside",{className:`dshr-toc${Te?"":" is-closed"}`,"aria-label":"\u76EE\u5F55",children:[(0,Y.jsxs)("div",{className:"dshr-toc__head",children:[(0,Y.jsx)("strong",{children:"\u76EE\u5F55"}),(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost",onClick:()=>q(!1),"aria-label":"\u6536\u8D77\u76EE\u5F55",children:(0,Y.jsx)(gr,{size:14})})]}),(0,Y.jsx)("div",{className:"dshr-toc__list",children:u.book.chapters.map((w,M)=>(0,Y.jsx)("button",{type:"button",className:`dshr-toc__item${M===X?" is-active":""}`,onClick:()=>bo(M),title:w.title,children:w.title||`\u7B2C ${M+1} \u7AE0`},w.id||M))}),(0,Y.jsx)("div",{className:"dshr-toc__resizer",role:"separator","aria-orientation":"vertical","aria-label":"\u62D6\u52A8\u8C03\u6574\u76EE\u5F55\u5BBD\u5EA6",title:"\u62D6\u52A8\u8C03\u6574\u76EE\u5F55\u5BBD\u5EA6\uFF1B\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4",onPointerDown:ii,onDoubleClick:()=>T(w=>({...w,tocWidth:260}))})]}):null,u.kind==="pdf"?(0,Y.jsx)(wc,{data:u.data,documentId:u.record.id,fileName:fr,initialPage:u.record.progress?.page||1,autoTranslate:x.autoTranslate,hideTranslations:x.hideTranslations,paged:x.readingMode==="book",onHideTranslations:()=>T(w=>({...w,hideTranslations:!0})),annotations:S,onOpenAnnotation:hr,focusAnnotation:Xe,onReady:({pageCount:w})=>me(M=>({...M,page:M.page||1,pages:w,percent:w>0?(M.page||1)/w*100:M.percent||0})),onPageChange:w=>{let M=xe.pages||0,Q={...xe,page:w,pages:M,percent:M>0?w/M*100:0};me(Q),Ut(u.record.id,Q)},onSelection:Nr},u.record.id):(0,Y.jsx)(tc,{book:u.book,chapterIndex:X,onChapterChange:bo,settings:x,chapterEntry:re,onChapterEntered:un,onSelection:Wt,onProgress:w=>{me(w),Ut(u.record.id,w)},annotations:S,onOpenAnnotation:hr,focusAnnotation:Ze,layoutVersion:cn}),Ge?(0,Y.jsx)(_c,{open:Ge,onClose:()=>Re(!1),seed:Me,onGoogle:Ve,onToast:O}):null,ee?(0,Y.jsx)(Vc,{open:ee,annotations:S,book:u.book||u.record,onClose:()=>ue(!1),onOpenAnnotation:hr,onJump:ai,onDelete:w=>{dn(w)}}):null]}),N?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)("div",{className:"dshr-immersive-controls",children:[(0,Y.jsx)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>{pe()},title:J?"\u9000\u51FA\u5168\u5C4F\uFF08Esc\uFF09":"\u8FDB\u5165\u5168\u5C4F","aria-label":J?"\u9000\u51FA\u5168\u5C4F":"\u8FDB\u5165\u5168\u5C4F","aria-pressed":J,children:J?(0,Y.jsx)(sl,{size:15}):(0,Y.jsx)(gi,{size:15})}),(0,Y.jsxs)("button",{type:"button",className:"dshr-immersive-btn dshr-immersive-btn--exit",onClick:()=>{Rt()},title:"\u9000\u51FA\u6C89\u6D78\u6A21\u5F0F\uFF08Esc\uFF09",children:[(0,Y.jsx)(gr,{size:14})," \u9000\u51FA\u6C89\u6D78"]})]}),u.kind==="flow"&&!Te?(0,Y.jsx)("button",{type:"button",className:"dshr-immersive-toc",onClick:()=>q(!0),title:"\u6253\u5F00\u76EE\u5F55","aria-label":"\u6253\u5F00\u76EE\u5F55",children:(0,Y.jsx)(pi,{size:15})}):null]}):null,(0,Y.jsx)(Dc,{enabled:x.readingMode==="book",animation:x.bookAnimation,bookMode:!0,bookFrame:u.kind==="flow",pdfMode:u.kind==="pdf",frameTop:N?0:52,frameLeft:u.kind==="flow"&&Te?x.tocWidth:0,leftOffset:u.kind==="flow"&&Te?x.tocWidth+12:12,readerKey:`${u.record.id}:${u.kind}:${X}`,canPrevChapter:u.kind==="flow"&&X>0,canNextChapter:u.kind==="flow"&&X<(u.book?.chapters?.length||1)-1,chapterEntry:re,onChapterEntered:un,onChapterTurn:(w,M)=>bo(X+w,M)})]}):(0,Y.jsx)(Pl,{books:t,loading:r,resumeBook:tt,onResume:w=>{j(w)},importing:o,organizing:i,categoryFilter:l,onCategoryFilter:d,onAutoOrganize:()=>{jn()},onImport:Ar,onOpen:w=>{j(w)},onDelete:w=>z(w),onCycleCategory:(w,M)=>{xn(w,M)},onSettings:()=>A(!0),onOnlineImport:()=>C(!0)}),f?(0,Y.jsx)("div",{className:"dshr-modal-mask",style:{background:"color-mix(in srgb, var(--dshr-bg) 76%, transparent)",backdropFilter:"blur(5px)"},children:(0,Y.jsxs)("div",{className:"dshr-loading",children:[(0,Y.jsx)("div",{className:"dshr-loading__ring"}),(0,Y.jsx)("span",{children:_})]})}):null,He&&!Ge&&!Ne?(0,Y.jsx)(Tc,{selection:He,translation:h,onTranslate:w=>{Cr(w)},onAnnotate:_t,onExplain:w=>xt(w.text,w.context),onGoogle:Ve,onCopy:vt,onClose:()=>{Ue(null),c(null)},onRetry:()=>{Cr(He)}}):null,(0,Y.jsx)(Nc,{open:P,busy:E,onClose:()=>{E||C(!1)},onSubmit:w=>{rn(w)}}),R?(0,Y.jsx)(Sc,{settings:x,onChange:T,onClose:()=>A(!1),onOpenAppearance:()=>{A(!1),m(!0)},onClearLibrary:()=>{Je()}}):null,L?(0,Y.jsx)(Gc,{open:L,settings:x,backgroundImageUrl:fe,onChange:ur,onPickBackgroundImage:vn,onClearBackgroundImage:()=>{yn()},onClose:()=>m(!1)}):null,oe?(0,Y.jsx)(Ec,{book:oe,onCancel:()=>z(null),onConfirm:()=>{ce()}}):null,Ne&&le?(0,Y.jsx)(Jc,{open:Ne,draft:le,mode:te?"edit":"create",onClose:ir,onSave:w=>{Vo(w)},onDelete:te?()=>{dn(te)}:void 0}):null,(0,Y.jsx)(Ac,{message:de})]})})}var Cu=String.raw`
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
`;var Iu=String.raw`
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
`;var Wn=require("react/jsx-runtime"),Rm="dsh-reader",Mm=["slots","layout"],js="reader";function Pm({size:t=18}){return(0,Wn.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,Wn.jsx)("path",{d:"M4 5.4A2.4 2.4 0 0 1 6.4 3H20v16.1H6.4A2.4 2.4 0 0 0 4 21.5V5.4Z",stroke:"currentColor",strokeWidth:"1.65",strokeLinejoin:"round"}),(0,Wn.jsx)("path",{d:"M4 18.4a2.4 2.4 0 0 1 2.4-2.3H20",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round"}),(0,Wn.jsx)("path",{d:"M8.2 7h7.6M8.2 10.2h4.6",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round"}),(0,Wn.jsx)("circle",{cx:"17.2",cy:"18.6",r:"2.1",fill:"currentColor",opacity:".9"})]})}function Om(t){t.effect(()=>{let e=document.createElement("style");return e.dataset.dshReader="styles",e.textContent=`${Cu}
${vc}
${Ki}
${Iu}`,document.head.appendChild(e),()=>e.remove()},"dsh-reader: styles"),t.slots.inject("main",function*(){yield t.slots.register({name:"main",key:js},Nu)}),t.slots.inject("sidebar.panellist",()=>t.slots.register({name:"sidebar.panellist",id:js,order:10,label:()=>"\u9605\u8BFB"},Pm))}

return module.exports;
}});

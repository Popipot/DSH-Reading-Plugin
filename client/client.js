window.__ModuleLoader__.load({ id: "dsh-reader", factory: (require) => {
var module = { exports: {} }; var exports = module.exports;
var Du=Object.create;var Zo=Object.defineProperty;var Pu=Object.getOwnPropertyDescriptor;var zu=Object.getOwnPropertyNames;var Fu=Object.getPrototypeOf,Bu=Object.prototype.hasOwnProperty;var rr=(t,e,r)=>()=>{if(r)throw r[0];try{return t&&(e=t(t=0)),e}catch(n){throw r=[n],n}};var ss=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}},ji=(t,e)=>{for(var r in e)Zo(t,r,{get:e[r],enumerable:!0})},Gi=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of zu(e))!Bu.call(t,o)&&o!==r&&Zo(t,o,{get:()=>e[o],enumerable:!(n=Pu(e,o))||n.enumerable});return t};var Ct=(t,e,r)=>(r=t!=null?Du(Fu(t)):{},Gi(e||!t||!t.__esModule?Zo(r,"default",{value:t,enumerable:!0}):r,t)),$u=t=>Gi(Zo({},"__esModule",{value:!0}),t);function Hh(t,e){return Yc(t,{i:2},e&&e.out,e&&e.dictionary)}function Zc(t,e){return Yc(t.subarray($h(t,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}function Gh(t,e){if(e){for(var r="",n=0;n<t.length;n+=16384)r+=String.fromCharCode.apply(null,t.subarray(n,n+16384));return r}else{if(Ks)return Ks.decode(t);var o=jh(t),s=o.s,r=o.r;return r.length&&jt(8),s}}function Qc(t,e){for(var r={},n=t.length-22;hr(t,n)!=101010256;--n)(!n||t.length-n>65558)&&jt(13);var o=jr(t,n+8);if(!o)return{};var s=hr(t,n+16),a=hr(t,n-20)==117853008;if(a){var i=hr(t,n-12);a=hr(t,i)==101075792,a&&(o=hr(t,i+32),s=hr(t,i+48))}for(var c=e&&e.filter,d=0;d<o;++d){var u=qh(t,s,a),p=u[0],h=u[1],g=u[2],S=u[3],_=u[4],v=u[5],E=Wh(t,v);s=_,(!c||c({name:S,size:h,originalSize:g,compression:p}))&&(p?p==8?r[S]=Hh(t.subarray(E,E+h),{out:new nr(g)}):jt(14,"unknown compression type "+p):r[S]=Ys(t,E,E+h))}return r}var nr,io,Mh,jc,Gc,Rh,Wc,qc,Vc,Oh,Xc,Lh,Gb,Xs,rn,Ze,Eo,No,Ze,Ze,Ze,Ze,Kc,Ze,Dh,Ph,Ws,Rr,qs,zh,Ys,Fh,jt,Yc,Bh,jr,hr,Vs,$h,Ks,Uh,jh,Wh,qh,Vh,Zs=rr(()=>{nr=Uint8Array,io=Uint16Array,Mh=Int32Array,jc=new nr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Gc=new nr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Rh=new nr([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Wc=function(t,e){for(var r=new io(31),n=0;n<31;++n)r[n]=e+=1<<t[n-1];for(var o=new Mh(r[30]),n=1;n<30;++n)for(var s=r[n];s<r[n+1];++s)o[s]=s-r[n]<<5|n;return{b:r,r:o}},qc=Wc(jc,2),Vc=qc.b,Oh=qc.r;Vc[28]=258,Oh[258]=28;Xc=Wc(Gc,0),Lh=Xc.b,Gb=Xc.r,Xs=new io(32768);for(Ze=0;Ze<32768;++Ze)rn=(Ze&43690)>>1|(Ze&21845)<<1,rn=(rn&52428)>>2|(rn&13107)<<2,rn=(rn&61680)>>4|(rn&3855)<<4,Xs[Ze]=((rn&65280)>>8|(rn&255)<<8)>>1;Eo=(function(t,e,r){for(var n=t.length,o=0,s=new io(e);o<n;++o)t[o]&&++s[t[o]-1];var a=new io(e);for(o=1;o<e;++o)a[o]=a[o-1]+s[o-1]<<1;var i;if(r){i=new io(1<<e);var c=15-e;for(o=0;o<n;++o)if(t[o])for(var d=o<<4|t[o],u=e-t[o],p=a[t[o]-1]++<<u,h=p|(1<<u)-1;p<=h;++p)i[Xs[p]>>c]=d}else for(i=new io(n),o=0;o<n;++o)t[o]&&(i[o]=Xs[a[t[o]-1]++]>>15-t[o]);return i}),No=new nr(288);for(Ze=0;Ze<144;++Ze)No[Ze]=8;for(Ze=144;Ze<256;++Ze)No[Ze]=9;for(Ze=256;Ze<280;++Ze)No[Ze]=7;for(Ze=280;Ze<288;++Ze)No[Ze]=8;Kc=new nr(32);for(Ze=0;Ze<32;++Ze)Kc[Ze]=5;Dh=Eo(No,9,1),Ph=Eo(Kc,5,1),Ws=function(t){for(var e=t[0],r=1;r<t.length;++r)t[r]>e&&(e=t[r]);return e},Rr=function(t,e,r){var n=e/8|0;return(t[n]|t[n+1]<<8)>>(e&7)&r},qs=function(t,e){var r=e/8|0;return(t[r]|t[r+1]<<8|t[r+2]<<16)>>(e&7)},zh=function(t){return(t+7)/8|0},Ys=function(t,e,r){return(e==null||e<0)&&(e=0),(r==null||r>t.length)&&(r=t.length),new nr(t.subarray(e,r))},Fh=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],jt=function(t,e,r){var n=new Error(e||Fh[t]);if(n.code=t,Error.captureStackTrace&&Error.captureStackTrace(n,jt),!r)throw n;return n},Yc=function(t,e,r,n){var o=t.length,s=n?n.length:0;if(!o||e.f&&!e.l)return r||new nr(0);var a=!r,i=a||e.i!=2,c=e.i;a&&(r=new nr(o*3));var d=function(Ve){var f=r.length;if(Ve>f){var l=new nr(Math.max(f*2,Ve));l.set(r),r=l}},u=e.f||0,p=e.p||0,h=e.b||0,g=e.l,S=e.d,_=e.m,v=e.n,E=o*8;do{if(!g){u=Rr(t,p,1);var O=Rr(t,p+1,3);if(p+=3,O)if(O==1)g=Dh,S=Ph,_=9,v=5;else if(O==2){var T=Rr(t,p,31)+257,D=Rr(t,p+10,15)+4,L=T+Rr(t,p+5,31)+1;p+=14;for(var m=new nr(L),A=new nr(19),F=0;F<D;++F)A[Rh[F]]=Rr(t,p+F*3,7);p+=D*3;for(var te=Ws(A),B=(1<<te)-1,le=Eo(A,te,1),F=0;F<L;){var fe=le[Rr(t,p,B)];p+=fe&15;var N=fe>>4;if(N<16)m[F++]=N;else{var V=0,ge=0;for(N==16?(ge=3+Rr(t,p,3),p+=2,V=m[F-1]):N==17?(ge=3+Rr(t,p,7),p+=3):N==18&&(ge=11+Rr(t,p,127),p+=7);ge--;)m[F++]=V}}var q=m.subarray(0,T),z=m.subarray(T);_=Ws(q),v=Ws(z),g=Eo(q,_,1),S=Eo(z,v,1)}else jt(1);else{var N=zh(p)+4,M=t[N-4]|t[N-3]<<8,I=N+M;if(I>o){c&&jt(0);break}i&&d(h+M),r.set(t.subarray(N,I),h),e.b=h+=M,e.p=p=I*8,e.f=u;continue}if(p>E){c&&jt(0);break}}i&&d(h+131072);for(var ce=(1<<_)-1,$=(1<<v)-1,re=p;;re=p){var V=g[qs(t,p)&ce],ne=V>>4;if(p+=V&15,p>E){c&&jt(0);break}if(V||jt(2),ne<256)r[h++]=ne;else if(ne==256){re=p,g=null;break}else{var _e=ne-254;if(ne>264){var F=ne-257,Q=jc[F];_e=Rr(t,p,(1<<Q)-1)+Vc[F],p+=Q}var ze=S[qs(t,p)&$],Be=ze>>4;ze||jt(3),p+=ze&15;var z=Lh[Be];if(Be>3){var Q=Gc[Be];z+=qs(t,p)&(1<<Q)-1,p+=Q}if(p>E){c&&jt(0);break}i&&d(h+131072);var Oe=h+_e;if(h<z){var dt=s-z,Qe=Math.min(z,Oe);for(dt+h<0&&jt(3);h<Qe;++h)r[h]=n[dt+h]}for(;h<Oe;++h)r[h]=r[h-z]}}e.l=g,e.p=re,e.b=h,e.f=u,g&&(u=1,e.m=_,e.d=S,e.n=v)}while(!u);return h!=r.length&&a?Ys(r,0,h):r.subarray(0,h)},Bh=new nr(0),jr=function(t,e){return t[e]|t[e+1]<<8},hr=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},Vs=function(t,e){return hr(t,e)+hr(t,e+4)*4294967296},$h=function(t,e){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&jt(6,"invalid zlib data"),(t[1]>>5&1)==+!e&&jt(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};Ks=typeof TextDecoder<"u"&&new TextDecoder,Uh=0;try{Ks.decode(Bh,{stream:!0}),Uh=1}catch{}jh=function(t){for(var e="",r=0;;){var n=t[r++],o=(n>127)+(n>223)+(n>239);if(r+o>t.length)return{s:e,r:Ys(t,r-1)};o?o==3?(n=((n&15)<<18|(t[r++]&63)<<12|(t[r++]&63)<<6|t[r++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):o&1?e+=String.fromCharCode((n&31)<<6|t[r++]&63):e+=String.fromCharCode((n&15)<<12|(t[r++]&63)<<6|t[r++]&63):e+=String.fromCharCode(n)}};Wh=function(t,e){return e+30+jr(t,e+26)+jr(t,e+28)},qh=function(t,e,r){var n=jr(t,e+28),o=jr(t,e+30),s=Gh(t.subarray(e+46,e+46+n),!(jr(t,e+8)&2048)),a=e+46+n,i=Vh(t,a,o,r,hr(t,e+20),hr(t,e+24),hr(t,e+42)),c=i[0],d=i[1],u=i[2];return[jr(t,e+10),c,d,s,a+o+jr(t,e+32),u]},Vh=function(t,e,r,n,o,s,a){var i=o==4294967295,c=s==4294967295,d=a==4294967295,u=e+r,p=i+c+d;if(n&&p){for(;e+4<u;e+=4+jr(t,e+2))if(jr(t,e)==1)return[i?Vs(t,e+4+8*c):o,c?Vs(t,e+4):s,d?Vs(t,e+4+8*(c+i)):a,1];n<2&&jt(13)}return[o,s,a,0]}});function qt(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return ai(t,e,n)}}function tp(t){return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return si(t,r)}}function Re(t,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Pa;Jc&&Jc(t,null);let n=e.length;for(;n--;){let o=e[n];if(typeof o=="string"){let s=r(o);s!==o&&(Xh(e)||(e[n]=s),o=s)}t[o]=!0}return t}function rp(t){for(let e=0;e<t.length;e++)Or(t,e)||(t[e]=null);return t}function Gr(t){let e=oi(null);for(let[r,n]of id(t))Or(t,r)&&(Array.isArray(n)?e[r]=rp(n):n&&typeof n=="object"&&n.constructor===Object?e[r]=Gr(n):e[r]=n);return e}function Mo(t,e){for(;t!==null;){let n=Yh(t,e);if(n){if(n.get)return qt(n.get);if(typeof n.value=="function")return qt(n.value)}t=Kh(t)}function r(){return null}return r}function dd(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:hp(),e=de=>dd(de);if(e.version="3.3.1",e.removed=[],!t||!t.document||t.document.nodeType!==Ro.document||!t.Element)return e.isSupported=!1,e;let{document:r}=t,n=r,o=n.currentScript,{DocumentFragment:s,HTMLTemplateElement:a,Node:i,Element:c,NodeFilter:d,NamedNodeMap:u=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:p,DOMParser:h,trustedTypes:g}=t,S=c.prototype,_=Mo(S,"cloneNode"),v=Mo(S,"remove"),E=Mo(S,"nextSibling"),O=Mo(S,"childNodes"),N=Mo(S,"parentNode");if(typeof a=="function"){let de=r.createElement("template");de.content&&de.content.ownerDocument&&(r=de.content.ownerDocument)}let M,I="",{implementation:T,createNodeIterator:D,createDocumentFragment:L,getElementsByTagName:m}=r,{importNode:A}=n,F=sd();e.isSupported=typeof id=="function"&&typeof N=="function"&&T&&T.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:te,ERB_EXPR:B,TMPLIT_EXPR:le,DATA_ATTR:fe,ARIA_ATTR:V,IS_SCRIPT_OR_DATA:ge,ATTR_WHITESPACE:q,CUSTOM_ELEMENT:z}=ad,{IS_ALLOWED_URI:ce}=ad,$=null,re=Re({},[...td,...ei,...ti,...ri,...rd]),ne=null,_e=Re({},[...nd,...ni,...od,...Da]),Q=Object.seal(oi(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ze=null,Be=null,Oe=Object.seal(oi(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),dt=!0,Qe=!0,Ve=!1,f=!0,l=!1,k=!0,x=!1,se=!1,he=!1,ie=!1,be=!1,we=!1,Fe=!0,ee=!1,Ge="user-content-",tt=!0,rt=!1,Ue={},De=null,pe=Re({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),je=null,Xe=Re({},["audio","video","img","source","image","track"]),ut=null,X=Re({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),me="http://www.w3.org/1998/Math/MathML",xe="http://www.w3.org/2000/svg",ke="http://www.w3.org/1999/xhtml",$e=ke,Qt=!1,Lt=null,pn=Re({},[me,xe,ke],Qs),pt=Re({},["mi","mo","mn","ms","mtext"]),Jt=Re({},["annotation-xml"]),gt=Re({},["title","style","font","a","script"]),Yt=null,Ce=["application/xhtml+xml","text/html"],nn="text/html",lt=null,yr=null,Dr=r.createElement("form"),Ft=function(y){return y instanceof RegExp||y instanceof Function},on=function(){let y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(yr&&yr===y)){if((!y||typeof y!="object")&&(y={}),y=Gr(y),Yt=Ce.indexOf(y.PARSER_MEDIA_TYPE)===-1?nn:y.PARSER_MEDIA_TYPE,lt=Yt==="application/xhtml+xml"?Qs:Pa,$=Or(y,"ALLOWED_TAGS")?Re({},y.ALLOWED_TAGS,lt):re,ne=Or(y,"ALLOWED_ATTR")?Re({},y.ALLOWED_ATTR,lt):_e,Lt=Or(y,"ALLOWED_NAMESPACES")?Re({},y.ALLOWED_NAMESPACES,Qs):pn,ut=Or(y,"ADD_URI_SAFE_ATTR")?Re(Gr(X),y.ADD_URI_SAFE_ATTR,lt):X,je=Or(y,"ADD_DATA_URI_TAGS")?Re(Gr(Xe),y.ADD_DATA_URI_TAGS,lt):Xe,De=Or(y,"FORBID_CONTENTS")?Re({},y.FORBID_CONTENTS,lt):pe,ze=Or(y,"FORBID_TAGS")?Re({},y.FORBID_TAGS,lt):Gr({}),Be=Or(y,"FORBID_ATTR")?Re({},y.FORBID_ATTR,lt):Gr({}),Ue=Or(y,"USE_PROFILES")?y.USE_PROFILES:!1,dt=y.ALLOW_ARIA_ATTR!==!1,Qe=y.ALLOW_DATA_ATTR!==!1,Ve=y.ALLOW_UNKNOWN_PROTOCOLS||!1,f=y.ALLOW_SELF_CLOSE_IN_ATTR!==!1,l=y.SAFE_FOR_TEMPLATES||!1,k=y.SAFE_FOR_XML!==!1,x=y.WHOLE_DOCUMENT||!1,ie=y.RETURN_DOM||!1,be=y.RETURN_DOM_FRAGMENT||!1,we=y.RETURN_TRUSTED_TYPE||!1,he=y.FORCE_BODY||!1,Fe=y.SANITIZE_DOM!==!1,ee=y.SANITIZE_NAMED_PROPS||!1,tt=y.KEEP_CONTENT!==!1,rt=y.IN_PLACE||!1,ce=y.ALLOWED_URI_REGEXP||ld,$e=y.NAMESPACE||ke,pt=y.MATHML_TEXT_INTEGRATION_POINTS||pt,Jt=y.HTML_INTEGRATION_POINTS||Jt,Q=y.CUSTOM_ELEMENT_HANDLING||{},y.CUSTOM_ELEMENT_HANDLING&&Ft(y.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Q.tagNameCheck=y.CUSTOM_ELEMENT_HANDLING.tagNameCheck),y.CUSTOM_ELEMENT_HANDLING&&Ft(y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Q.attributeNameCheck=y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),y.CUSTOM_ELEMENT_HANDLING&&typeof y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(Q.allowCustomizedBuiltInElements=y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),l&&(Qe=!1),be&&(ie=!0),Ue&&($=Re({},rd),ne=[],Ue.html===!0&&(Re($,td),Re(ne,nd)),Ue.svg===!0&&(Re($,ei),Re(ne,ni),Re(ne,Da)),Ue.svgFilters===!0&&(Re($,ti),Re(ne,ni),Re(ne,Da)),Ue.mathMl===!0&&(Re($,ri),Re(ne,od),Re(ne,Da))),y.ADD_TAGS&&(typeof y.ADD_TAGS=="function"?Oe.tagCheck=y.ADD_TAGS:($===re&&($=Gr($)),Re($,y.ADD_TAGS,lt))),y.ADD_ATTR&&(typeof y.ADD_ATTR=="function"?Oe.attributeCheck=y.ADD_ATTR:(ne===_e&&(ne=Gr(ne)),Re(ne,y.ADD_ATTR,lt))),y.ADD_URI_SAFE_ATTR&&Re(ut,y.ADD_URI_SAFE_ATTR,lt),y.FORBID_CONTENTS&&(De===pe&&(De=Gr(De)),Re(De,y.FORBID_CONTENTS,lt)),y.ADD_FORBID_CONTENTS&&(De===pe&&(De=Gr(De)),Re(De,y.ADD_FORBID_CONTENTS,lt)),tt&&($["#text"]=!0),x&&Re($,["html","head","body"]),$.table&&(Re($,["tbody"]),delete ze.tbody),y.TRUSTED_TYPES_POLICY){if(typeof y.TRUSTED_TYPES_POLICY.createHTML!="function")throw Io('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof y.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Io('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');M=y.TRUSTED_TYPES_POLICY,I=M.createHTML("")}else M===void 0&&(M=pp(g,o)),M!==null&&typeof I=="string"&&(I=M.createHTML(""));Wt&&Wt(y),yr=y}},ar=Re({},[...ei,...ti,...np]),jn=Re({},[...ri,...op]),kt=function(y){let G=N(y);(!G||!G.tagName)&&(G={namespaceURI:$e,tagName:"template"});let oe=Pa(y.tagName),Je=Pa(G.tagName);return Lt[y.namespaceURI]?y.namespaceURI===xe?G.namespaceURI===ke?oe==="svg":G.namespaceURI===me?oe==="svg"&&(Je==="annotation-xml"||pt[Je]):!!ar[oe]:y.namespaceURI===me?G.namespaceURI===ke?oe==="math":G.namespaceURI===xe?oe==="math"&&Jt[Je]:!!jn[oe]:y.namespaceURI===ke?G.namespaceURI===xe&&!Jt[Je]||G.namespaceURI===me&&!pt[Je]?!1:!jn[oe]&&(gt[oe]||!ar[oe]):!!(Yt==="application/xhtml+xml"&&Lt[y.namespaceURI]):!1},bt=function(y){Ao(e.removed,{element:y});try{N(y).removeChild(y)}catch{v(y)}},Et=function(y,G){try{Ao(e.removed,{attribute:G.getAttributeNode(y),from:G})}catch{Ao(e.removed,{attribute:null,from:G})}if(G.removeAttribute(y),y==="is")if(ie||be)try{bt(G)}catch{}else try{G.setAttribute(y,"")}catch{}},gn=function(y){let G=null,oe=null;if(he)y="<remove></remove>"+y;else{let Ke=Js(y,/^[\r\n\t ]+/);oe=Ke&&Ke[0]}Yt==="application/xhtml+xml"&&$e===ke&&(y='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+y+"</body></html>");let Je=M?M.createHTML(y):y;if($e===ke)try{G=new h().parseFromString(Je,Yt)}catch{}if(!G||!G.documentElement){G=T.createDocument($e,"template",null);try{G.documentElement.innerHTML=Qt?I:Je}catch{}}let vt=G.body||G.documentElement;return y&&oe&&vt.insertBefore(r.createTextNode(oe),vt.childNodes[0]||null),$e===ke?m.call(G,x?"html":"body")[0]:x?G.documentElement:vt},mn=function(y){return D.call(y.ownerDocument||y,y,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},sr=function(y){return y instanceof p&&(typeof y.nodeName!="string"||typeof y.textContent!="string"||typeof y.removeChild!="function"||!(y.attributes instanceof u)||typeof y.removeAttribute!="function"||typeof y.setAttribute!="function"||typeof y.namespaceURI!="string"||typeof y.insertBefore!="function"||typeof y.hasChildNodes!="function")},bn=function(y){return typeof i=="function"&&y instanceof i};function er(de,y,G){La(de,oe=>{oe.call(e,y,G,yr)})}let xn=function(y){let G=null;if(er(F.beforeSanitizeElements,y,null),sr(y))return bt(y),!0;let oe=lt(y.nodeName);if(er(F.uponSanitizeElement,y,{tagName:oe,allowedTags:$}),k&&y.hasChildNodes()&&!bn(y.firstElementChild)&&Gt(/<[/\w!]/g,y.innerHTML)&&Gt(/<[/\w!]/g,y.textContent)||y.nodeType===Ro.progressingInstruction||k&&y.nodeType===Ro.comment&&Gt(/<[/\w]/g,y.data))return bt(y),!0;if(!(Oe.tagCheck instanceof Function&&Oe.tagCheck(oe))&&(!$[oe]||ze[oe])){if(!ze[oe]&&wr(oe)&&(Q.tagNameCheck instanceof RegExp&&Gt(Q.tagNameCheck,oe)||Q.tagNameCheck instanceof Function&&Q.tagNameCheck(oe)))return!1;if(tt&&!De[oe]){let Je=N(y)||y.parentNode,vt=O(y)||y.childNodes;if(vt&&Je){let Ke=vt.length;for(let xt=Ke-1;xt>=0;--xt){let Bt=_(vt[xt],!0);Bt.__removalCount=(y.__removalCount||0)+1,Je.insertBefore(Bt,E(y))}}}return bt(y),!0}return y instanceof c&&!kt(y)||(oe==="noscript"||oe==="noembed"||oe==="noframes")&&Gt(/<\/no(script|embed|frames)/i,y.innerHTML)?(bt(y),!0):(l&&y.nodeType===Ro.text&&(G=y.textContent,La([te,B,le],Je=>{G=Co(G,Je," ")}),y.textContent!==G&&(Ao(e.removed,{element:y.cloneNode()}),y.textContent=G)),er(F.afterSanitizeElements,y,null),!1)},Zr=function(y,G,oe){if(Fe&&(G==="id"||G==="name")&&(oe in r||oe in Dr))return!1;if(!(Qe&&!Be[G]&&Gt(fe,G))){if(!(dt&&Gt(V,G))){if(!(Oe.attributeCheck instanceof Function&&Oe.attributeCheck(G,y))){if(!ne[G]||Be[G]){if(!(wr(y)&&(Q.tagNameCheck instanceof RegExp&&Gt(Q.tagNameCheck,y)||Q.tagNameCheck instanceof Function&&Q.tagNameCheck(y))&&(Q.attributeNameCheck instanceof RegExp&&Gt(Q.attributeNameCheck,G)||Q.attributeNameCheck instanceof Function&&Q.attributeNameCheck(G,y))||G==="is"&&Q.allowCustomizedBuiltInElements&&(Q.tagNameCheck instanceof RegExp&&Gt(Q.tagNameCheck,oe)||Q.tagNameCheck instanceof Function&&Q.tagNameCheck(oe))))return!1}else if(!ut[G]){if(!Gt(ce,Co(oe,q,""))){if(!((G==="src"||G==="xlink:href"||G==="href")&&y!=="script"&&Jh(oe,"data:")===0&&je[y])){if(!(Ve&&!Gt(ge,Co(oe,q,"")))){if(oe)return!1}}}}}}}return!0},wr=function(y){return y!=="annotation-xml"&&Js(y,z)},ir=function(y){er(F.beforeSanitizeAttributes,y,null);let{attributes:G}=y;if(!G||sr(y))return;let oe={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ne,forceKeepAttr:void 0},Je=G.length;for(;Je--;){let vt=G[Je],{name:Ke,namespaceURI:xt,value:Bt}=vt,_r=lt(Ke),Pr=Bt,yt=Ke==="value"?Pr:ep(Pr);if(oe.attrName=_r,oe.attrValue=yt,oe.keepAttr=!0,oe.forceKeepAttr=void 0,er(F.uponSanitizeAttribute,y,oe),yt=oe.attrValue,ee&&(_r==="id"||_r==="name")&&(Et(Ke,y),yt=Ge+yt),k&&Gt(/((--!?|])>)|<\/(style|title|textarea)/i,yt)){Et(Ke,y);continue}if(_r==="attributename"&&Js(yt,"href")){Et(Ke,y);continue}if(oe.forceKeepAttr)continue;if(!oe.keepAttr){Et(Ke,y);continue}if(!f&&Gt(/\/>/i,yt)){Et(Ke,y);continue}l&&La([te,B,le],kr=>{yt=Co(yt,kr," ")});let an=lt(y.nodeName);if(!Zr(an,_r,yt)){Et(Ke,y);continue}if(M&&typeof g=="object"&&typeof g.getAttributeType=="function"&&!xt)switch(g.getAttributeType(an,_r)){case"TrustedHTML":{yt=M.createHTML(yt);break}case"TrustedScriptURL":{yt=M.createScriptURL(yt);break}}if(yt!==Pr)try{xt?y.setAttributeNS(xt,Ke,yt):y.setAttribute(Ke,yt),sr(y)?bt(y):ed(e.removed)}catch{Et(Ke,y)}}er(F.afterSanitizeAttributes,y,null)},Nt=function de(y){let G=null,oe=mn(y);for(er(F.beforeSanitizeShadowDOM,y,null);G=oe.nextNode();)er(F.uponSanitizeShadowNode,G,null),xn(G),ir(G),G.content instanceof s&&de(G.content);er(F.afterSanitizeShadowDOM,y,null)};return e.sanitize=function(de){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},G=null,oe=null,Je=null,vt=null;if(Qt=!de,Qt&&(de="<!-->"),typeof de!="string"&&!bn(de))if(typeof de.toString=="function"){if(de=de.toString(),typeof de!="string")throw Io("dirty is not a string, aborting")}else throw Io("toString is not a function");if(!e.isSupported)return de;if(se||on(y),e.removed=[],typeof de=="string"&&(rt=!1),rt){if(de.nodeName){let Bt=lt(de.nodeName);if(!$[Bt]||ze[Bt])throw Io("root node is forbidden and cannot be sanitized in-place")}}else if(de instanceof i)G=gn("<!---->"),oe=G.ownerDocument.importNode(de,!0),oe.nodeType===Ro.element&&oe.nodeName==="BODY"||oe.nodeName==="HTML"?G=oe:G.appendChild(oe);else{if(!ie&&!l&&!x&&de.indexOf("<")===-1)return M&&we?M.createHTML(de):de;if(G=gn(de),!G)return ie?null:we?I:""}G&&he&&bt(G.firstChild);let Ke=mn(rt?de:G);for(;Je=Ke.nextNode();)xn(Je),ir(Je),Je.content instanceof s&&Nt(Je.content);if(rt)return de;if(ie){if(be)for(vt=L.call(G.ownerDocument);G.firstChild;)vt.appendChild(G.firstChild);else vt=G;return(ne.shadowroot||ne.shadowrootmode)&&(vt=A.call(n,vt,!0)),vt}let xt=x?G.outerHTML:G.innerHTML;return x&&$["!doctype"]&&G.ownerDocument&&G.ownerDocument.doctype&&G.ownerDocument.doctype.name&&Gt(cd,G.ownerDocument.doctype.name)&&(xt="<!DOCTYPE "+G.ownerDocument.doctype.name+`>
`+xt),l&&La([te,B,le],Bt=>{xt=Co(xt,Bt," ")}),M&&we?M.createHTML(xt):xt},e.setConfig=function(){let de=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};on(de),se=!0},e.clearConfig=function(){yr=null,se=!1},e.isValidAttribute=function(de,y,G){yr||on({});let oe=lt(de),Je=lt(y);return Zr(oe,Je,G)},e.addHook=function(de,y){typeof y=="function"&&Ao(F[de],y)},e.removeHook=function(de,y){if(y!==void 0){let G=Zh(F[de],y);return G===-1?void 0:Qh(F[de],G,1)[0]}return ed(F[de])},e.removeHooks=function(de){F[de]=[]},e.removeAllHooks=function(){F=sd()},e}var id,Jc,Xh,Kh,Yh,Wt,pr,oi,ai,si,La,Zh,ed,Ao,Qh,Pa,Qs,Js,Co,Jh,ep,Or,Gt,Io,td,ei,ti,np,ri,op,rd,nd,ni,od,Da,ap,sp,ip,lp,cp,ld,dp,up,cd,fp,ad,Ro,hp,pp,sd,Oo,ud=rr(()=>{({entries:id,setPrototypeOf:Jc,isFrozen:Xh,getPrototypeOf:Kh,getOwnPropertyDescriptor:Yh}=Object),{freeze:Wt,seal:pr,create:oi}=Object,{apply:ai,construct:si}=typeof Reflect<"u"&&Reflect;Wt||(Wt=function(e){return e});pr||(pr=function(e){return e});ai||(ai=function(e,r){for(var n=arguments.length,o=new Array(n>2?n-2:0),s=2;s<n;s++)o[s-2]=arguments[s];return e.apply(r,o)});si||(si=function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return new e(...n)});La=qt(Array.prototype.forEach),Zh=qt(Array.prototype.lastIndexOf),ed=qt(Array.prototype.pop),Ao=qt(Array.prototype.push),Qh=qt(Array.prototype.splice),Pa=qt(String.prototype.toLowerCase),Qs=qt(String.prototype.toString),Js=qt(String.prototype.match),Co=qt(String.prototype.replace),Jh=qt(String.prototype.indexOf),ep=qt(String.prototype.trim),Or=qt(Object.prototype.hasOwnProperty),Gt=qt(RegExp.prototype.test),Io=tp(TypeError);td=Wt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),ei=Wt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ti=Wt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),np=Wt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ri=Wt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),op=Wt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),rd=Wt(["#text"]),nd=Wt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),ni=Wt(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),od=Wt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Da=Wt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),ap=pr(/\{\{[\w\W]*|[\w\W]*\}\}/gm),sp=pr(/<%[\w\W]*|[\w\W]*%>/gm),ip=pr(/\$\{[\w\W]*/gm),lp=pr(/^data-[\-\w.\u00B7-\uFFFF]+$/),cp=pr(/^aria-[\-\w]+$/),ld=pr(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),dp=pr(/^(?:\w+script|data):/i),up=pr(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),cd=pr(/^html$/i),fp=pr(/^[a-z][.\w]*(-[.\w]+)+$/i),ad=Object.freeze({__proto__:null,ARIA_ATTR:cp,ATTR_WHITESPACE:up,CUSTOM_ELEMENT:fp,DATA_ATTR:lp,DOCTYPE_NAME:cd,ERB_EXPR:sp,IS_ALLOWED_URI:ld,IS_SCRIPT_OR_DATA:dp,MUSTACHE_EXPR:ap,TMPLIT_EXPR:ip}),Ro={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},hp=function(){return typeof window>"u"?null:window},pp=function(e,r){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null,o="data-tt-policy-suffix";r&&r.hasAttribute(o)&&(n=r.getAttribute(o));let s="dompurify"+(n?"#"+n:"");try{return e.createPolicy(s,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}},sd=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};Oo=dd()});function pd(){if(On)return On;if(typeof Oo?.sanitize=="function"&&Oo.isSupported)On=Oo;else{let t=typeof window<"u"?window:globalThis.window;if(!t)throw new Error("\u65E0\u6CD5\u6E05\u7406 HTML\uFF1A\u5F53\u524D\u73AF\u5883\u7F3A\u5C11\u6D4F\u89C8\u5668 window\u3002");On=Oo(t)}if(!On||typeof On.sanitize!="function")throw new Error("\u65E0\u6CD5\u6E05\u7406 HTML\uFF1A\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 DOMPurify\u3002");return On}function za(t){if(!t)return"";try{return pd().sanitize(String(t),hd)}catch{return""}}function ii(t){if(!t)return"";try{return pd().sanitize(String(t),mp)}catch{return""}}function Ln(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function st(t){return String(t??"").replace(/\u00a0/g," ").replace(/[\t\f\v\u2000-\u200b\u2028\u2029]+/g," ").replace(/[ ]*\n[ ]*/g," ").replace(/ {2,}/g," ").trim()}function Lo(t="div"){return document.createElement(t)}function Wr(t){try{return new DOMParser().parseFromString(String(t??""),"text/html")}catch{return null}}function lo(t){try{let e=new DOMParser().parseFromString(String(t??""),"application/xml");return!e||!e.documentElement||e.documentElement.localName?.toLowerCase()==="parsererror"||Vt(e,"parsererror")?null:e}catch{return null}}function or(t){return String(t?.localName||t?.nodeName||"").toLowerCase()}function St(t,e){let r=[];if(!t)return r;let n=String(e).toLowerCase(),o=s=>{for(let a=s.firstChild;a;a=a.nextSibling)a.nodeType===1&&(or(a)===n&&r.push(a),o(a))};return o(t),r}function Vt(t,e){if(!t)return null;let r=String(e).toLowerCase(),n=null,o=s=>{for(let a=s.firstChild;a&&!n;a=a.nextSibling)if(a.nodeType===1){if(or(a)===r){n=a;return}o(a)}};return o(t),n}function et(t,e){if(!t||!e)return null;let r=t.getAttribute?.(e);if(r!=null)return r;let n=String(e).toLowerCase(),o=t.attributes;if(!o)return null;for(let s=0;s<o.length;s+=1){let a=o[s];if(!a)continue;if(String(a.name||"").toLowerCase()===n||!n.includes(":")&&String(a.localName||"").toLowerCase()===n)return a.value}return null}var fd,gp,hd,mp,On,Dn=rr(()=>{ud();fd=Object.freeze(["b","strong","i","em","u","s","sub","sup","code","span","a","br","ruby","rt","rp","small","mark"]),gp=Object.freeze(["table","caption","thead","tbody","tfoot","tr","th","td","colgroup","col"]),hd=Object.freeze({ALLOWED_TAGS:[...fd],ALLOWED_ATTR:["href"],ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!1,KEEP_CONTENT:!0,FORBID_TAGS:["script","style","iframe","frame","frameset","object","embed","applet","form","input","button","select","textarea","meta","link","base","svg","math","template","noscript"],FORBID_ATTR:["style","src","srcset","formaction","xlink:href","onerror","onload","onclick"]}),mp=Object.freeze({...hd,ALLOWED_TAGS:[...fd,...gp]}),On=null});function zn(t){return t.nextId()}function yp(t){if(!t||t.nodeType!==1)return!1;if(t.hasAttribute?.("hidden")||et(t,"aria-hidden")==="true")return!0;let e=et(t,"style")||"";return/display\s*:\s*none|visibility\s*:\s*hidden/i.test(e)}function wp(t,e){typeof t?.warn=="function"&&t.warn(e)}function ci(t){for(let e of Array.from(t?.children||[])){let r=or(e);if(gd.has(r)&&r!=="span"&&r!=="a"||ci(e))return!0}return!1}function md(t){let e=Array.from(t.querySelectorAll(vp));for(let r=e.length-1;r>=0;r-=1){let n=e[r];if(!n.parentNode)continue;let o=t.ownerDocument.createDocumentFragment();for(;n.firstChild;)o.appendChild(n.firstChild);o.appendChild(t.ownerDocument.createElement("br")),n.parentNode.replaceChild(o,n)}return t}function bd(t){for(let e of St(t,"img"))e.remove();for(let e of St(t,"image"))e.remove()}function Pn(t){let e=[],r=n=>{for(let o of Array.from(n?.children||[])){let s=or(o);s==="img"||s==="image"?e.push(o):s==="svg"?e.push(...St(o,"image")):s!=="script"&&s!=="style"&&r(o)}};return r(t),e}function di(t,e){if(!t||typeof e?.resolveLink!="function")return;let r=Array.from(t.getElementsByTagName?.("a")||[]);for(let n of r){let o=n.getAttribute("href");if(n.removeAttribute("href"),n.removeAttribute("data-chapter"),n.removeAttribute("data-anchor"),!o)continue;let s=null;try{s=e.resolveLink(o)}catch{s=null}if(s){if(s.external){s.href&&n.setAttribute("href",s.href);continue}Number.isInteger(s.chapter)&&s.chapter>=0&&(n.setAttribute("data-chapter",String(s.chapter)),s.anchor&&n.setAttribute("data-anchor",String(s.anchor).slice(0,300)))}}}function xd(t,e){let r=za(t.innerHTML);if(!r)return null;let n=Lo("div");n.innerHTML=r,di(n,e);let o=n.innerHTML.replace(/^(?:\s*<br\s*\/?>\s*)+/i,"").replace(/(?:\s*<br\s*\/?>\s*)+$/i,"");if(!o)return null;let s=st(n.textContent);return s?{html:o,text:s}:null}function $a(t,e,r,n={}){let o=za(r);if(!o)return null;let s=Lo("div");s.innerHTML=o,di(s,t);let a=s.innerHTML,i=st(s.textContent);return i?{id:zn(t),kind:e,html:a,text:i,...n}:null}function ui(t,e){let r=String(e??"").replace(/\r\n?/g,`
`).replace(/\u00a0/g," ").replace(/^\n+|\n+$/g,"");return r.trim()?{id:zn(t),kind:"code",html:Ln(r),text:r}:null}function fi(t,e,r={}){let n=ii(e);if(!n)return null;let o=Lo("div");if(o.innerHTML=n,!o.querySelector("table"))return null;di(o,t);let a=o.innerHTML,i=st(o.textContent);return i?{id:zn(t),kind:"table",html:a,text:i,...r}:null}function hi(t,{src:e,alt:r="",caption:n=""}={}){if(!e)return null;let o={id:zn(t),kind:"image",src:e},s=st(r),a=st(n);return s&&(o.alt=s),a&&(o.caption=a),o}function pi(t){return{id:zn(t),kind:"rule"}}function Fn(t,e){let r=[];return t&&Fa(t,e,r),r}function Fa(t,e,r){let n=[],o=()=>{if(n.length===0)return;let s=Lo("div");for(let i of n)s.appendChild(i.cloneNode(!0));let a=st(s.textContent)!==""||Pn(s).length>0;n=[],a&&dn("paragraph",s,e,r)};for(let s of Array.from(t.childNodes||[])){if(s.nodeType===3){String(s.textContent||"").trim()&&n.push(s);continue}if(s.nodeType!==1||yp(s))continue;let a=or(s);bp.has(a)||(gd.has(a)?(o(),_p(s,a,e,r)):n.push(s))}o()}function _p(t,e,r,n){if(li.has(e)){dn("heading",t,r,n,{level:Number(e.slice(1)),stripImages:!0,flatten:!1});return}switch(e){case"p":dn("paragraph",t,r,n);return;case"li":case"dt":dn("list-item",t,r,n,{flatten:!0});return;case"dd":dn("paragraph",t,r,n,{flatten:!0});return;case"blockquote":dn("quote",t,r,n,{flatten:!0});return;case"pre":Tp(t,r,n);return;case"table":Sp(t,r,n);return;case"hr":n.push(pi(r));return;case"figure":{kp(t,r,n);return}case"img":case"image":Ba(t,r,n,"");return;case"picture":case"svg":{for(let o of Pn(t))Ba(o,r,n,"");return}case"ul":case"ol":{for(let o of Array.from(t.children||[]))or(o)==="li"?dn("list-item",o,r,n,{flatten:!0}):Fa(o,r,n);return}case"dl":{Fa(t,r,n);return}case"figcaption":return;default:xp.has(e)||ci(t)?Fa(t,r,n):dn("paragraph",t,r,n)}}function dn(t,e,r,n,o={}){let s=e.cloneNode(!0),a=Pn(s);if(a.length>0)for(let c of a)c.remove();o.stripImages&&bd(s),o.flatten!==!1&&md(s);let i=xd(s,r);if(i){let c={id:zn(r),kind:t,html:i.html,text:i.text};o.level&&(c.level=o.level),n.push(c)}if(!o.stripImages&&a.length>0){let c=Pn(e);for(let d of c)Ba(d,r,n,"")}}function Ba(t,e,r,n){let o=et(t,"src")||et(t,"xlink:href")||et(t,"href");if(!o)return;let s=null;try{s=typeof e?.resolveImage=="function"?e.resolveImage(o):null}catch{s=null}if(!s||!s.src)return;let a=et(t,"alt")||et(t,"title")||s.alt||"",i=hi(e,{src:s.src,alt:a,caption:n||s.caption||""});i&&r.push(i)}function kp(t,e,r){let n=St(t,"figcaption")[0]||null,o=n?st(n.textContent):"",s=Pn(t);s.length>0&&s.forEach((c,d)=>{Ba(c,e,r,d===0?o:"")});let a=t.cloneNode(!0);bd(a);for(let c of St(a,"figcaption"))c.remove();ci(a)&&md(a);let i=xd(a,e);i&&i.text!==o&&r.push({id:zn(e),kind:"paragraph",html:i.html,text:i.text})}function Tp(t,e,r){let n=St(t,"code")[0]||t,o=String(n.textContent||"").replace(/\r\n?/g,`
`);if(!o.trim())return;let s=za(n.innerHTML),a=ui(e,o);a&&(s&&(a.html=s),r.push(a))}function Sp(t,e,r){let n=t.cloneNode(!0),o=ii(n.outerHTML);if(!o){wp(e,"\u5DF2\u8DF3\u8FC7\u4E00\u4E2A\u65E0\u6CD5\u89E3\u6790\u7684\u8868\u683C\u3002");return}let s=fi(e,o);s&&r.push(s)}var li,bp,xp,gd,vp,Do=rr(()=>{Dn();li=new Set(["h1","h2","h3","h4","h5","h6"]),bp=new Set(["script","style","noscript","template","head","title","meta","link","base","iframe","frame","frameset","object","embed","applet","form","input","select","textarea","button","audio","video","source","track","canvas","map","area","math","nav"]),xp=new Set(["div","section","article","main","header","footer","aside","center","details","summary","fieldset","body","html","hgroup","dl"]),gd=new Set([...li,"p","div","section","article","main","header","footer","aside","center","details","summary","fieldset","body","html","hgroup","dl","dt","dd","blockquote","pre","table","ul","ol","li","figure","figcaption","hr","address","picture","svg","img","image"]),vp=[...li,"p","div","section","article","header","footer","aside","center","details","summary","fieldset","blockquote","ul","ol","li","dl","dt","dd","table","thead","tbody","tfoot","tr","td","th","caption","pre","figure","figcaption","address","hgroup"].join(",")});function Ha(t){if(typeof t!="string"||!t)return"";let e=t.split(/[\\/]/).pop()||"",r=/\.([A-Za-z0-9]+)$/.exec(e);return r?r[1].toLowerCase():""}function gr(t){let e=String(t||"").replace(/\\/g,"/"),r=e.lastIndexOf("/");return r>=0?e.slice(r+1):e}function co(t){let e=String(t||"").replace(/\\/g,"/"),r=e.lastIndexOf("/");return r>0?e.slice(0,r):""}function gi(t){let e=[];for(let r of String(t||"").replace(/\\/g,"/").split("/"))if(!(!r||r===".")){if(r===".."){e.pop();continue}e.push(r)}return e.join("/")}function Po(t){let e=String(t||""),r=e.indexOf("#"),n=r>=0?e.slice(0,r):e,o=r>=0?e.slice(r+1):"";try{o=decodeURIComponent(o)}catch{}let s=n.indexOf("?");return{path:s>=0?n.slice(0,s):n,fragment:o}}function un(t,e){if(!e)return null;let r=String(e).trim();if(!r||r.startsWith("#")||/^[a-z][a-z0-9+.-]*:/i.test(r)||r.startsWith("//"))return null;let{path:n}=Po(r);if(!n)return null;let o=n;try{o=decodeURIComponent(n)}catch{}o=o.replace(/\\/g,"/");let s=o.startsWith("/")?o.slice(1):t?`${t}/${o}`:o;return gi(s)||null}function yd(t){let e=new Map,r=[];for(let[n,o]of Object.entries(t||{})){if(!o||/\/$/.test(n))continue;let s=gi(n);if(!s)continue;let a=s.toLowerCase();e.has(a)||(e.set(a,{name:s,bytes:o}),r.push(s))}return{names:r,get(n){let o=gi(n||"");return o&&e.get(o.toLowerCase())||null},has(n){return!!this.get(n)}}}function zo(t){return Ep[Ha(t)]||"application/octet-stream"}async function qr(t){if(!t||typeof t.arrayBuffer!="function")throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u6570\u636E\uFF1A\u8BF7\u9009\u62E9\u4E00\u4E2A\u6709\u6548\u7684\u6587\u6863\u6587\u4EF6\u3002");let e;try{e=await t.arrayBuffer()}catch{throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u6570\u636E\uFF0C\u6587\u4EF6\u53EF\u80FD\u5DF2\u88AB\u79FB\u52A8\u6216\u635F\u574F\u3002")}let r=new Uint8Array(e);if(r.length===0)throw new Error("\u6587\u4EF6\u5185\u5BB9\u4E3A\u7A7A\u3002");return r}function Vr(t=40){let e=[],r=new Set,n=!1;return{warnings:e,warn:s=>{let a=String(s||"").trim();!a||r.has(a)||(r.add(a),e.length<t?e.push(a):n||(n=!0,e.push("\u8FD8\u6709\u66F4\u591A\u89E3\u6790\u8B66\u544A\u672A\u663E\u793A\u3002")))}}}function mr(t,e){if(t instanceof Error&&/[\u4e00-\u9fff]/.test(t.message))return t;let r=t instanceof Error?t.message:String(t??""),n=r?`${e}\uFF1A${r}`:`${e}\u3002`;return new Error(/[。！？]$/.test(n)?n:`${n}\u3002`)}function Fo(t,e){let r=(Array.isArray(e)?e:[]).filter(s=>s&&Number.isInteger(s.chapterIndex)&&s.chapterIndex>=0&&s.chapterIndex<t.length&&s.title);for(let s=0;s<t.length;s+=1){let a=r.find(c=>c.chapterIndex===s),i=t[s].blocks.find(c=>c.kind==="heading"&&c.text);t[s].title=(a?.title||i?.text||`\u7B2C ${s+1} \u7AE0`).slice(0,120)}if(r.length===0)return t.map((s,a)=>({title:s.title,chapterIndex:a,depth:0}));let n=[],o=new Set;for(let s=0;s<t.length;s+=1){let a=r.filter(i=>i.chapterIndex===s);if(a.length===0){let i={title:t[s].title,chapterIndex:s,depth:0},c=`${s}|${i.title}|0`;o.has(c)||(o.add(c),n.push(i));continue}for(let i of a){let c=Number.isInteger(i.depth)&&i.depth>=0?i.depth:0,d=i.anchor?String(i.anchor).slice(0,300):"",u=`${i.chapterIndex}|${i.title}|${c}|${d}`;o.has(u)||(o.add(u),n.push({title:i.title,chapterIndex:i.chapterIndex,depth:c,...d?{anchor:d}:{}}))}}return n}function $n(t,e="\u672A\u547D\u540D\u6587\u6863"){return gr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||e}function fn(){let t=[];return{urls:t,create(e){let r=URL.createObjectURL(e);return t.push(r),r},add(e){return e&&!t.includes(e)&&t.push(e),e},dispose(){for(;t.length>0;){let e=t.pop();try{URL.revokeObjectURL(e)}catch{}}}}}function hn(t){let e=/^data:([^;,]*)((?:;[^;,]*)*),(.*)$/is.exec(String(t||""));if(!e)return null;let r=e[1]||"application/octet-stream",n=e[2]||"",o=e[3]||"",s=/;base64/i.test(n);try{let a;if(s){let c=o.replace(/\s+/g,"");a=atob(c)}else a=decodeURIComponent(o);let i=new Uint8Array(a.length);for(let c=0;c<a.length;c+=1)i[c]=a.charCodeAt(c)&255;return new Blob([i],{type:r})}catch{return null}}function vd(t){let e=String(t||"").trim().toLowerCase();return!e||/^(utf-?8|utf8)$/.test(e)?"utf-8":/^utf-?16(le)?$/.test(e)?"utf-16le":/^utf-?16be$/.test(e)?"utf-16be":/^(gb2312|gbk|gb18030|cp936|x-gbk)$/.test(e)?"gb18030":/^(big5|big5-hkscs|cp950)$/.test(e)?"big5":/^(shift_jis|sjis|windows-31j|cp932)$/.test(e)?"shift_jis":/^(euc-kr|ks_c_5601-1987|cp949)$/.test(e)?"euc-kr":/^(iso-8859-1|latin1|windows-1252|cp1252)$/.test(e)?"windows-1252":e}function Bn(t,e,r=!1){return new TextDecoder(e,{fatal:r}).decode(t)}function Ap(t){let e=Bn(t.subarray(0,Math.min(t.length,512)),"windows-1252"),r=Np.exec(e);return r&&(r[1]||r[2])||""}function Xr(t,{defaultEncoding:e="utf-8",sniffDeclaration:r=!0}={}){let n=t instanceof Uint8Array?t:new Uint8Array(t);if(n.length===0)return"";if(n[0]===239&&n[1]===187&&n[2]===191)return Bn(n.subarray(3),"utf-8");if(n[0]===255&&n[1]===254)return Bn(n.subarray(2),"utf-16le");if(n[0]===254&&n[1]===255)return Bn(n.subarray(2),"utf-16be");let o=e||"utf-8";if(r){let s=Ap(n);s&&(o=vd(s))}o=vd(o);try{return Bn(n,o,!0)}catch{try{return Bn(n,"utf-8",!0)}catch{return Bn(n,"utf-8",!1)}}}function Ua(t){if(!t)return!1;let e=t.slice(0,4096);if(!e)return!1;let r=0;for(let n=0;n<e.length;n+=1){let o=e.charCodeAt(n);(o===65533||o===0||o<9||o>13&&o<32)&&(r+=1)}return r/e.length>.08}var Ep,Np,Hn=rr(()=>{Ep={jpg:"image/jpeg",jpeg:"image/jpeg",jpe:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",avif:"image/avif",bmp:"image/bmp",tif:"image/tiff",tiff:"image/tiff",svg:"image/svg+xml",ico:"image/x-icon",jxl:"image/jxl"};Np=/(?:encoding\s*=\s*["']([A-Za-z0-9._-]+)["'])|(?:charset\s*=\s*["']?([A-Za-z0-9._-]+))/i});function wd(t){return/^(https?:|mailto:|tel:)/i.test(t)}function mi(t){return/^[a-z][a-z0-9+.-]*:/i.test(t)}function Ip(t,e){e&&!t.includes(e)&&t.push(e)}async function _d(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Vr(),s=fn();try{let ge=function(l,k){let x=String(l||"").trim();if(!x||wd(x)||x.startsWith("//")||mi(x))return null;let{path:se,fragment:he}=Po(x),ie=se?un(k,x):null,be=ie?B.get(ie.toLowerCase()):void 0;return be==null&&ie&&(be=le.get(gr(ie).toLowerCase())),be==null?null:{chapterIndex:be,anchor:he}},a=await qr(t),i;try{i=Qc(a)}catch{throw new Error("EPUB \u538B\u7F29\u5305\u5DF2\u635F\u574F\uFF0C\u65E0\u6CD5\u89E3\u538B\u3002")}let c=yd(i);if(c.names.length===0)throw new Error("EPUB \u538B\u7F29\u5305\u4E0D\u5305\u542B\u4EFB\u4F55\u6587\u4EF6\u3002");let d=c.get("META-INF/encryption.xml");if(d){let l=Xr(d.bytes);if(/<encrypteddata/i.test(l)&&/application\/(xhtml\+xml|epub\+zip)/i.test(l))throw new Error("\u8BE5 EPUB \u6587\u4EF6\u53D7 DRM \u4FDD\u62A4\uFF0C\u65E0\u6CD5\u6253\u5F00\u3002")}let u=c.get("META-INF/container.xml");if(!u){let l=c.names.find(k=>/container\.xml$/i.test(k));l&&(u=c.get(l))}if(!u)throw new Error("\u7F3A\u5C11 META-INF/container.xml\uFF0C\u4E0D\u662F\u6709\u6548\u7684 EPUB \u6587\u4EF6\u3002");let p=lo(Xr(u.bytes));if(!p)throw new Error("META-INF/container.xml \u683C\u5F0F\u9519\u8BEF\u3002");let h=St(p,"rootfile")[0],g=h?et(h,"full-path"):"";if(!g)throw new Error("container.xml \u4E2D\u6CA1\u6709\u6307\u5B9A OPF \u5185\u5BB9\u6E05\u5355\u3002");let S=c.get(g)||c.get(un("",g));if(!S)throw new Error(`\u627E\u4E0D\u5230 EPUB \u5185\u5BB9\u6E05\u5355\u6587\u4EF6\uFF1A${g}`);let _=co(S.name),v=lo(Xr(S.bytes));if(!v)throw new Error("EPUB \u5185\u5BB9\u6E05\u5355\uFF08OPF\uFF09\u683C\u5F0F\u9519\u8BEF\u3002");let O=Vt(v,"metadata")||v,N=St(O,"title").map(l=>st(l.textContent)).filter(Boolean),M=[];for(let l of St(O,"creator"))Ip(M,st(l.textContent));let I=St(O,"language").map(l=>st(l.textContent)).filter(Boolean),D=St(O,"meta").filter(l=>String(et(l,"name")||"").toLowerCase()==="cover").map(l=>et(l,"content")||"").find(Boolean)||"",L=Vt(v,"manifest");if(!L)throw new Error("OPF \u5185\u5BB9\u6E05\u5355\u7F3A\u5C11 manifest \u5217\u8868\u3002");let m=new Map;for(let l of St(L,"item")){let k=et(l,"id");if(!k||m.has(k))continue;let x=et(l,"href")||"",se=un(_,x);m.set(k,{id:k,href:x,path:se,mediaType:String(et(l,"media-type")||"").toLowerCase(),properties:String(et(l,"properties")||"").toLowerCase()})}let A=Vt(v,"spine");if(!A)throw new Error("OPF \u5185\u5BB9\u6E05\u5355\u7F3A\u5C11 spine \u9605\u8BFB\u987A\u5E8F\u3002");let F=St(A,"itemref");if(F.length===0)throw new Error("EPUB \u7684\u9605\u8BFB\u987A\u5E8F\uFF08spine\uFF09\u4E3A\u7A7A\u3002");let te=[],B=new Map,le=new Map;for(let l of F){let k=et(l,"idref"),x=k?m.get(k):null;if(!x){o(`\u9605\u8BFB\u987A\u5E8F\u4E2D\u7684\u6761\u76EE\u201C${k||"\u672A\u77E5"}\u201D\u4E0D\u5728\u6E05\u5355\u4E2D\uFF0C\u5DF2\u8DF3\u8FC7\u3002`);continue}if(/\bnav\b/.test(x.properties))continue;if(!x.path){o(`\u7AE0\u8282\u6587\u4EF6\u201C${x.href||x.id}\u201D\u4F4D\u4E8E\u5916\u90E8\u7F51\u7EDC\uFF0C\u5DF2\u8DF3\u8FC7\u3002`);continue}let se=c.get(x.path);if(!se){o(`\u627E\u4E0D\u5230\u7AE0\u8282\u6587\u4EF6\uFF1A${x.path}`);continue}let he=x.mediaType||"",ie=Cp.has(he)||/\.(x?html?|htm)$/i.test(x.path),be=he.startsWith("image/")||/\.(png|jpe?g|gif|webp|avif|bmp|tiff?|svg)$/i.test(x.path);if(!ie&&!be){o(`\u4E0D\u652F\u6301\u7684\u7AE0\u8282\u7C7B\u578B\uFF08${he||"\u672A\u77E5"}\uFF09\uFF1A${x.path}`);continue}let we=te.length;te.push({item:x,entry:se,isImage:be,chapterIndex:we}),B.set(x.path.toLowerCase(),we);let Fe=gr(x.path).toLowerCase();le.has(Fe)||le.set(Fe,we)}if(te.length===0)throw new Error("EPUB \u4E2D\u6CA1\u6709\u627E\u5230\u53EF\u663E\u793A\u7684\u7AE0\u8282\u5185\u5BB9\u3002");let fe=0,V=()=>`b${fe+=1}`,q=[];for(let l of te){let{item:k,entry:x,isImage:se,chapterIndex:he}=l;if(se){let De=k.mediaType.startsWith("image/")?k.mediaType:zo(k.path),pe=s.create(new Blob([x.bytes],{type:De}));q.push({id:`ch${he}`,title:"",blocks:[{id:V(),kind:"image",src:pe}]});continue}let ie=co(k.path),be=De=>{let pe=String(De||"").trim();if(!pe)return null;if(/^data:/i.test(pe)){let X=hn(pe);return X?{src:s.create(X)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684\u5185\u5D4C\u56FE\u7247\u3002"),null)}if(/^(https?:)?\/\//i.test(pe))return o("\u5DF2\u8DF3\u8FC7\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\uFF08\u907F\u514D\u8DDF\u8E2A\u4E0E\u9690\u79C1\u6CC4\u9732\uFF09\u3002"),null;if(mi(pe))return null;let je=un(ie,pe),Xe=je?c.get(je):null;if(!Xe)return o(`\u627E\u4E0D\u5230\u56FE\u7247\u6587\u4EF6\uFF1A${gr(je||pe)}`),null;let ut=zo(je);return{src:s.create(new Blob([Xe.bytes],{type:ut}))}},we=De=>{let pe=String(De||"").trim();if(!pe)return null;if(wd(pe))return{external:!0,href:pe};if(pe.startsWith("//")||mi(pe))return null;let{path:je,fragment:Xe}=Po(pe);if(!je)return{chapter:he,anchor:Xe};let ut=un(ie,pe),X=ut?B.get(ut.toLowerCase()):void 0;return X==null&&ut&&(X=le.get(gr(ut).toLowerCase())),X==null?null:{chapter:X,anchor:Xe}},Fe="";try{Fe=Xr(x.bytes)}catch{o(`\u7B2C ${he+1} \u7AE0\u7684\u7F16\u7801\u65E0\u6CD5\u8BC6\u522B\uFF0C\u5DF2\u5C3D\u91CF\u6309 UTF-8 \u8BFB\u53D6\u3002`)}let ee=lo(Fe),Ge=ee&&(Vt(ee,"body")||ee.documentElement)||null,tt=Ge?null:Wr(Fe),rt=Ge||tt?.body||tt?.documentElement||null,Ue=rt?Fn(rt,{nextId:V,warn:o,chapterIndex:he,resolveImage:be,resolveLink:we}):[];Ue.length===0&&o(`\u7B2C ${he+1} \u7AE0\u6CA1\u6709\u53EF\u663E\u793A\u7684\u5185\u5BB9\u3002`),q.push({id:`ch${he}`,title:"",blocks:Ue})}let z=[...m.values()].find(l=>/\bnav\b/.test(l.properties)&&l.path),ce=et(A,"toc"),$=ce&&m.get(ce)||[...m.values()].find(l=>l.mediaType==="application/x-dtbncx+xml"&&l.path)||null,re=l=>{let k=c.get(l.path);if(!k)return o(`\u627E\u4E0D\u5230 EPUB \u5BFC\u822A\u6587\u4EF6\uFF1A${l.path}`),[];let x=Xr(k.bytes),se=lo(x)||Wr(x);if(!se)return o("\u65E0\u6CD5\u89E3\u6790 EPUB \u5BFC\u822A\u76EE\u5F55\u3002"),[];let he=St(se,"nav"),ie=he.find(tt=>String(et(tt,"type")||et(tt,"epub:type")||"").toLowerCase().split(/\s+/).includes("toc"))||he[0]||null;if(!ie)return[];let be=Vt(ie,"ol")||Vt(ie,"ul");if(!be)return[];let we=[],Fe=co(l.path),ee=B.get(l.path.toLowerCase()),Ge=(tt,rt)=>{for(let Ue of Array.from(tt.children||[])){if(or(Ue)!=="li")continue;let De=null,pe=null;for(let je of Array.from(Ue.children||[])){let Xe=or(je);!De&&(Xe==="a"||Xe==="span")&&(De=je),!pe&&(Xe==="ol"||Xe==="ul")&&(pe=je)}if(De&&or(De)==="a"){let je=st(De.textContent).slice(0,200),Xe=et(De,"href")||"",ut=ge(Xe,Fe);if(!ut&&Xe.startsWith("#")&&ee!=null){let{fragment:X}=Po(Xe);ut={chapterIndex:ee,anchor:X}}je&&ut&&we.push({title:je,chapterIndex:ut.chapterIndex,depth:rt,...ut.anchor?{anchor:ut.anchor}:{}})}pe&&Ge(pe,rt+1)}};return Ge(be,0),we},ne=l=>{let k=c.get(l.path);if(!k)return o(`\u627E\u4E0D\u5230 EPUB NCX \u76EE\u5F55\u6587\u4EF6\uFF1A${l.path}`),[];let x=Xr(k.bytes),se=lo(x)||Wr(x);if(!se)return o("\u65E0\u6CD5\u89E3\u6790 EPUB NCX \u76EE\u5F55\u3002"),[];let he=[],ie=co(l.path);for(let be of St(se,"navpoint")){let we=Vt(be,"navlabel"),Fe=we?Vt(we,"text"):Vt(be,"text"),ee=st(Fe?.textContent||"").slice(0,200),Ge=Array.from(be.children||[]).find(Ue=>or(Ue)==="content")||Vt(be,"content"),tt=ge(et(Ge,"src")||"",ie);if(!ee||!tt)continue;let rt=0;for(let Ue=be.parentNode;Ue;Ue=Ue.parentNode)or(Ue)==="navpoint"&&(rt+=1);he.push({title:ee,chapterIndex:tt.chapterIndex,depth:rt,...tt.anchor?{anchor:tt.anchor}:{}})}return he},_e=[];z&&(_e=re(z),_e.length===0&&o("EPUB \u5BFC\u822A\u6587\u4EF6\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u5F55\u9879\u3002"));let Q=[];_e.length===0&&$&&(Q=ne($));let ze=_e.length>0?_e:Q;ze.length===0&&o("\u672A\u627E\u5230 EPUB \u76EE\u5F55\uFF0C\u5DF2\u6309\u7AE0\u8282\u6807\u9898\u751F\u6210\u3002");let Be=Fo(q,ze),Oe="",dt=[...m.values()].find(l=>/\bcover-image\b/.test(l.properties)&&l.path);if(dt)Oe=dt.path;else if(D&&m.get(D)?.path)Oe=m.get(D).path;else{let l=Vt(v,"guide");if(l){let k=St(l,"reference").find(x=>/\bcover\b/.test(String(et(x,"type")||"").toLowerCase()));k&&(Oe=un(_,et(k,"href")||"")||"")}}let Qe="";if(Oe){let l=c.get(Oe);if(l){let k=zo(Oe);if(k.startsWith("image/"))Qe=s.create(new Blob([l.bytes],{type:k}));else if(/\.(x?html?|htm)$/i.test(Oe)){let x=Wr(Xr(l.bytes)),se=Pn(x?.body||x?.documentElement||x)[0],he=se&&(et(se,"src")||et(se,"xlink:href"))||"",ie=he?un(co(Oe),he):null,be=ie?c.get(ie):null;be&&(Qe=s.create(new Blob([be.bytes],{type:zo(ie)})))}}}let f={title:N[0]||$n(r),chapters:q,toc:Be,warnings:n,dispose:()=>s.dispose()};return M.length>0&&(f.author=M.join(", ")),I.length>0&&(f.language=I[0]),Qe&&(f.cover=Qe),f}catch(a){throw s.dispose(),mr(a,"\u65E0\u6CD5\u89E3\u6790 EPUB \u6587\u4EF6")}}var Cp,kd=rr(()=>{Zs();Dn();Do();Hn();Cp=new Set(["application/xhtml+xml","text/html","application/xml","text/xml","text/xhtml"])});function Mp(t){return gr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u6863"}async function Bo(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Vr(),s=fn();try{let a=await qr(t),i=Xr(a),c=Wr(i);if(!c)throw new Error("HTML \u6587\u4EF6\u683C\u5F0F\u9519\u8BEF\uFF0C\u65E0\u6CD5\u89E3\u6790\u3002");let d=c.body||c.documentElement;if(!d)throw new Error("HTML \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let u=0,h=Fn(d,{nextId:()=>`b${u+=1}`,warn:o,resolveImage:N=>{let M=String(N||"").trim();if(!M)return null;if(/^data:/i.test(M)){let I=hn(M);return I?{src:s.create(I)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684\u5185\u5D4C\u56FE\u7247\u3002"),null)}return/^(https?:)?\/\//i.test(M)?(o("\u5DF2\u8DF3\u8FC7\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\uFF08\u907F\u514D\u8DDF\u8E2A\u4E0E\u9690\u79C1\u6CC4\u9732\uFF09\u3002"),null):(o("\u5DF2\u8DF3\u8FC7 HTML \u4E2D\u7684\u672C\u5730\u56FE\u7247\uFF08\u65E0\u6CD5\u5B9A\u4F4D\u56FE\u7247\u6587\u4EF6\uFF09\u3002"),null)},resolveLink:N=>{let M=String(N||"").trim();return M?/^(https?:\/\/|mailto:)/i.test(M)?{external:!0,href:M}:M.startsWith("#")?{chapter:0,anchor:M.slice(1)}:null:null}});if(h.length===0)throw new Error("HTML \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let g=Vt(c,"title"),S=h.find(N=>N.kind==="heading"&&N.text),_=st(g?.textContent||"")||S?.text||Mp(r),v=et(c.documentElement,"lang")||"",E=[];for(let N of St(c,"meta"))if(String(et(N,"name")||"").toLowerCase()==="author"){let M=st(et(N,"content")||"");M&&!E.includes(M)&&E.push(M)}let O={title:_,chapters:[{id:"ch0",title:_,blocks:h}],toc:[{title:_,chapterIndex:0,depth:0}],warnings:n,dispose:()=>s.dispose()};return v&&(O.language=v),E.length>0&&(O.author=E.join(", ")),O}catch(a){throw s.dispose(),mr(a,"\u65E0\u6CD5\u89E3\u6790 HTML \u6587\u4EF6")}}var Td=rr(()=>{Dn();Do();Hn()});function Sd(t){return/[\u3000-\u303f\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uffef\uac00-\ud7af]/.test(t)}function Ed(t){let e="";for(let r of t){let n=String(r).trim();if(!n)continue;if(!e){e=n;continue}let o=e[e.length-1],s=n[0];e+=Sd(o)&&Sd(s)?n:` ${n}`}return e}function zp(t){let e=String(t||"").trim();if(!e||e.length>Pp)return!1;if(Op.test(e)||Lp.test(e))return!/[，,。；;]/.test(e);if(Dp.test(e)){let r=e.split(/\s+/).filter(Boolean).length;return!(r>14||/\.$/u.test(e)&&r>3)}return!1}function bi(t){if(!t||t.length===0)throw new Error("\u6587\u672C\u6587\u4EF6\u5185\u5BB9\u4E3A\u7A7A\u3002");if(t[0]===239&&t[1]===187&&t[2]===191)return{text:new TextDecoder("utf-8").decode(t.subarray(3)),encoding:"utf-8"};if(t[0]===255&&t[1]===254)return{text:new TextDecoder("utf-16le").decode(t.subarray(2)),encoding:"utf-16le"};if(t[0]===254&&t[1]===255)return{text:new TextDecoder("utf-16be").decode(t.subarray(2)),encoding:"utf-16be"};let e=Math.min(t.length,4096),r=0,n=0;for(let s=0;s<e;s+=2)t[s]===0&&(r+=1),s+1<e&&t[s+1]===0&&(n+=1);let o=Math.ceil(e/2);if(o>4&&n/o>.35&&r/o<.05)return{text:new TextDecoder("utf-16le").decode(t),encoding:"utf-16le"};if(o>4&&r/o>.35&&n/o<.05)return{text:new TextDecoder("utf-16be").decode(t),encoding:"utf-16be"};try{return{text:new TextDecoder("utf-8",{fatal:!0}).decode(t),encoding:"utf-8"}}catch{}try{return{text:new TextDecoder("gb18030",{fatal:!0}).decode(t),encoding:"gb18030"}}catch{}return{text:new TextDecoder("utf-8").decode(t),encoding:"utf-8"}}function Fp(t){let e=[],r=[],n=()=>{r.length>0&&(e.push(r),r=[])};for(let o of t)String(o).trim()?r.push(o):n();return n(),e}function Bp(t){let e=t.map(n=>n.trim()).filter(Boolean);return e.length<2?!1:e.filter(n=>/[。！？!?…"”’」』）)]$/.test(n)).length/e.length>=.5}function $p(t){let e=t.map(o=>String(o)),r=Fp(e);if(r.length>1)return r.map(o=>Ed(o)).filter(Boolean);let n=e.map(o=>o.trim()).filter(Boolean);return n.length<=1||Bp(n)?n:r.map(o=>Ed(o)).filter(Boolean)}function Hp(t,{fallbackTitle:e="\u6B63\u6587"}={}){let n=String(t||"").replace(/\r\n?/g,`
`).replace(/\u0000/g,"").split(`
`),o=[],s={title:"",lines:[],heading:""},a=()=>{(s.heading||s.lines.some(i=>i.trim()))&&o.push(s),s={title:"",lines:[],heading:""}};for(let i of n){if(zp(i)){a();let c=i.trim();s={title:c,lines:[],heading:c};continue}s.lines.push(i)}return a(),o.length===0?[{title:e,lines:n,heading:""}]:o}function xi(t,{nextId:e,title:r="\u6B63\u6587"}={}){let n=Hp(t,{fallbackTitle:r}),o=a=>a.lines.some(i=>String(i).trim()),s=[];for(let a=0;a<n.length;a+=1){if(o(n[a])){s.push(n[a]);continue}let i=a;for(;i+1<n.length&&!o(n[i+1]);)i+=1;if(i-a+1>=3){a=i;continue}s.push(...n.slice(a,i+1)),a=i}return n=s.length>0?s:n,n.map((a,i)=>{let c=[];a.heading&&c.push({id:e(),kind:"heading",level:1,html:Ln(a.heading),text:st(a.heading)});for(let d of $p(a.lines))c.push({id:e(),kind:"paragraph",html:Ln(d),text:d});return{id:`ch${i}`,title:a.title||r||`\u7B2C ${i+1} \u7AE0`,blocks:c}})}function Up(t){return gr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u672C"}async function vi(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Vr();try{let s=await qr(t),{text:a,encoding:i}=bi(s);if(Ua(a))throw new Error("\u6587\u672C\u6587\u4EF6\u5305\u542B\u5927\u91CF\u65E0\u6CD5\u8BC6\u522B\u7684\u5B57\u7B26\uFF0C\u53EF\u80FD\u4E0D\u662F\u7EAF\u6587\u672C\u6587\u4EF6\u3002");i==="gb18030"&&o("\u5DF2\u6309 GB18030 \u7F16\u7801\u8BFB\u53D6\u6587\u672C\uFF08\u975E UTF-8\uFF09\u3002");let c=Up(r),d=0,p=xi(a,{nextId:()=>`b${d+=1}`,title:c});if(p.length===0||p.every(g=>g.blocks.length===0))throw new Error("\u6587\u672C\u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");p[0].title||(p[0].title=c);let h=p.map((g,S)=>({title:g.title,chapterIndex:S,depth:0}));return{title:c,chapters:p,toc:h,warnings:n,encoding:i,dispose:()=>{}}}catch(s){throw mr(s,"\u65E0\u6CD5\u89E3\u6790\u6587\u672C\u6587\u4EF6")}}var Rp,Op,Lp,Dp,Pp,ja=rr(()=>{Dn();Hn();Rp="[0-9\uFF10-\uFF19\u96F6\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u767E\u5343\u4E07\u4E24]",Op=new RegExp(`^\\s*(\u7B2C\\s*${Rp}+\\s*[\u7AE0\u7BC0\u8282\u56DE\u5377\u7BC7])(?:[\\s:\uFF1A\xB7\u3001.\uFF0E\u2014\u2013-].*)?$`),Lp=/^\s*(序章|楔子|引子|前言|序言|后记|後記|尾声|尾聲|终章|終章|番外(?:篇)?)(?:[\s:：·、.．—–-].*)?$/,Dp=/^\s*((?:chapter|part|book|section)\s+(?:[0-9]+|[ivxlcdm]{1,8}|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty))(?:[.:：\s—–-].*)?$/i,Pp=72});function Wp(t){let e=String(t||"").trim();return e&&(/^(https?:\/\/|mailto:)/i.test(e)||e.startsWith("#"))?e:""}function yi(t){let e=Ln(String(t??"").trim()),r=[],n=o=>{let s=`\0${r.length}\0`;return r.push(o),s};return e=e.replace(/`([^`]+)`/g,(o,s)=>n(`<code>${s}</code>`)),e=e.replace(jp,(o,s,a)=>{let i=Wp(a);return i?n(`<a href="${i}">${s}</a>`):s}),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/__([^_]+)__/g,"<strong>$1</strong>").replace(/~~([^~]+)~~/g,"<s>$1</s>").replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g,"$1<em>$2</em>").replace(/(^|[^_])_([^_\n]+)_(?!_)/g,"$1<em>$2</em>"),e=e.replace(/\u0000(\d+)\u0000/g,(o,s)=>r[Number(s)]??""),e}function qp(t){return gr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u6863"}function $o(t){return String(t).trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(e=>e.trim())}function Vp(t){if(!/\|/.test(t))return!1;let e=$o(t);return e.length>0&&e.every(r=>/^:?-{3,}:?$/.test(r))}function Ad(t,e){return!!e&&t.includes("|")&&Vp(e)&&$o(t).length===$o(e).length}function Nd(t,e){return!!(/^\s{0,3}(#{1,6}\s|>|(?:```|~~~))/.test(t)||/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(t)||/^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/.test(t)||Ad(t,e))}function Xp(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Vr(),s=fn(),a=0,i={nextId:()=>`b${a+=1}`,warn:o,resolveLink:v=>{let E=String(v||"").trim();return E?/^(https?:\/\/|mailto:)/i.test(E)?{external:!0,href:E}:E.startsWith("#")?{chapter:0,anchor:E.slice(1)}:null:null}},c=[],d=[];function u(v){let E=String(v??""),O=[];return E=E.replace(Gp,(N,M,I)=>{let T=st(M);if(/^data:image\//i.test(I)){let D=hn(I);if(D){let L=hi(i,{src:s.create(D),alt:T});L&&O.push(L)}else o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684 Markdown \u5185\u5D4C\u56FE\u7247\u3002")}else/^https?:/i.test(I)?o("\u5DF2\u8DF3\u8FC7 Markdown \u4E2D\u7684\u5916\u90E8\u56FE\u7247\uFF08\u907F\u514D\u7F51\u7EDC\u8DDF\u8E2A\uFF09\u3002"):o("\u5DF2\u8DF3\u8FC7 Markdown \u4E2D\u7684\u672C\u5730\u56FE\u7247\uFF08\u65E0\u6CD5\u5B9A\u4F4D\u56FE\u7247\u6587\u4EF6\uFF09\u3002");return T?` ${T} `:" "}),{html:yi(E),images:O}}function p(v,E,O={}){let{html:N,images:M}=u(E),I=$a(i,v,N,O);I&&c.push(I);for(let T of M)c.push(T);return!!I}let h=String(t??"").replace(/\r\n?/g,`
`).replace(/\u0000/g,"").split(`
`),g=0;for(;g<h.length;){let v=h[g];if(!v.trim()){g+=1;continue}let E=/^\s*(`{3,}|~{3,})\s*([A-Za-z0-9_+#.-]*)\s*$/.exec(v);if(E){let T=E[1],D=[];g+=1;let L=new RegExp(`^\\s*${T[0]==="`"?"`":"~"}{${T.length},}\\s*$`);for(;g<h.length;){if(L.test(h[g])){g+=1;break}D.push(h[g]),g+=1}let m=ui(i,D.join(`
`));m&&c.push(m);continue}let O=/^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(v);if(O){p("heading",O[2],{level:O[1].length}),g+=1;continue}if(/^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/.test(v)){c.push(pi(i)),g+=1;continue}if(Ad(v,h[g+1])){let T=$o(v);g+=2;let D=[];for(;g<h.length&&h[g].includes("|")&&h[g].trim();)D.push($o(h[g])),g+=1;let L=`<thead><tr>${T.map(F=>`<th>${yi(F)}</th>`).join("")}</tr></thead>`,m=D.length>0?`<tbody>${D.map(F=>`<tr>${T.map((te,B)=>`<td>${yi(F[B]||"")}</td>`).join("")}</tr>`).join("")}</tbody>`:"",A=fi(i,`<table>${L}${m}</table>`);A&&c.push(A);continue}if(/^\s{0,3}>/.test(v)){let T=[];for(;g<h.length&&/^\s{0,3}>/.test(h[g]);)T.push(h[g].replace(/^\s{0,3}>\s?/,"")),g+=1;let D=[],L=[];for(let A of T){let F=u(A);F.html&&D.push(F.html),L.push(...F.images)}let m=$a(i,"quote",D.join("<br>"));m&&c.push(m);for(let A of L)c.push(A);continue}if(/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(v)){for(;g<h.length;){let T=/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+(.*)$/.exec(h[g]);if(!T)break;for(p("list-item",T[1]),g+=1;g<h.length&&/^\s{2,}\S/.test(h[g])&&!/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(h[g])&&!Nd(h[g],h[g+1]);)g+=1}continue}let N=[];for(;g<h.length&&h[g].trim()&&!Nd(h[g],h[g+1]);)N.push(h[g]),g+=1;if(N.length===0){g+=1;continue}let M=[];for(let T of N){let D=/(?: {2,}|\\)$/.test(T),L=u(T.replace(/(?: {2,}|\\)$/,""));L.html&&M.push(D?`${L.html}<br>`:L.html),d.push(...L.images)}let I=$a(i,"paragraph",M.join(" "));for(I&&c.push(I);d.length>0;)c.push(d.shift())}let _=c.find(v=>v.kind==="heading"&&v.text)?.text||qp(r);if(c.length===0)throw s.dispose(),new Error("Markdown \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");return{title:_,chapters:[{id:"ch0",title:_,blocks:c}],toc:[{title:_,chapterIndex:0,depth:0}],warnings:n,dispose:()=>s.dispose()}}async function Ho(t,e={}){try{let r=await qr(t),{text:n}=bi(r);return Xp(n,e)}catch(r){throw mr(r,"\u65E0\u6CD5\u89E3\u6790 Markdown \u6587\u4EF6")}}var jp,Gp,Cd=rr(()=>{Dn();Do();Hn();ja();jp=/\[([^\]]+)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g,Gp=/!\[([^\]]*)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g});var Rd=ss((g0,Md)=>{"use strict";function Kr(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function Id(t,e){for(var r="",n=0,o=-1,s=0,a,i=0;i<=t.length;++i){if(i<t.length)a=t.charCodeAt(i);else{if(a===47)break;a=47}if(a===47){if(!(o===i-1||s===1))if(o!==i-1&&s===2){if(r.length<2||n!==2||r.charCodeAt(r.length-1)!==46||r.charCodeAt(r.length-2)!==46){if(r.length>2){var c=r.lastIndexOf("/");if(c!==r.length-1){c===-1?(r="",n=0):(r=r.slice(0,c),n=r.length-1-r.lastIndexOf("/")),o=i,s=0;continue}}else if(r.length===2||r.length===1){r="",n=0,o=i,s=0;continue}}e&&(r.length>0?r+="/..":r="..",n=2)}else r.length>0?r+="/"+t.slice(o+1,i):r=t.slice(o+1,i),n=i-o-1;o=i,s=0}else a===46&&s!==-1?++s:s=-1}return r}function Kp(t,e){var r=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+n:r+t+n:n}var uo={resolve:function(){for(var e="",r=!1,n,o=arguments.length-1;o>=-1&&!r;o--){var s;o>=0?s=arguments[o]:(n===void 0&&(n=process.cwd()),s=n),Kr(s),s.length!==0&&(e=s+"/"+e,r=s.charCodeAt(0)===47)}return e=Id(e,!r),r?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(Kr(e),e.length===0)return".";var r=e.charCodeAt(0)===47,n=e.charCodeAt(e.length-1)===47;return e=Id(e,!r),e.length===0&&!r&&(e="."),e.length>0&&n&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return Kr(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,r=0;r<arguments.length;++r){var n=arguments[r];Kr(n),n.length>0&&(e===void 0?e=n:e+="/"+n)}return e===void 0?".":uo.normalize(e)},relative:function(e,r){if(Kr(e),Kr(r),e===r||(e=uo.resolve(e),r=uo.resolve(r),e===r))return"";for(var n=1;n<e.length&&e.charCodeAt(n)===47;++n);for(var o=e.length,s=o-n,a=1;a<r.length&&r.charCodeAt(a)===47;++a);for(var i=r.length,c=i-a,d=s<c?s:c,u=-1,p=0;p<=d;++p){if(p===d){if(c>d){if(r.charCodeAt(a+p)===47)return r.slice(a+p+1);if(p===0)return r.slice(a+p)}else s>d&&(e.charCodeAt(n+p)===47?u=p:p===0&&(u=0));break}var h=e.charCodeAt(n+p),g=r.charCodeAt(a+p);if(h!==g)break;h===47&&(u=p)}var S="";for(p=n+u+1;p<=o;++p)(p===o||e.charCodeAt(p)===47)&&(S.length===0?S+="..":S+="/..");return S.length>0?S+r.slice(a+u):(a+=u,r.charCodeAt(a)===47&&++a,r.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(Kr(e),e.length===0)return".";for(var r=e.charCodeAt(0),n=r===47,o=-1,s=!0,a=e.length-1;a>=1;--a)if(r=e.charCodeAt(a),r===47){if(!s){o=a;break}}else s=!1;return o===-1?n?"/":".":n&&o===1?"//":e.slice(0,o)},basename:function(e,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');Kr(e);var n=0,o=-1,s=!0,a;if(r!==void 0&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var i=r.length-1,c=-1;for(a=e.length-1;a>=0;--a){var d=e.charCodeAt(a);if(d===47){if(!s){n=a+1;break}}else c===-1&&(s=!1,c=a+1),i>=0&&(d===r.charCodeAt(i)?--i===-1&&(o=a):(i=-1,o=c))}return n===o?o=c:o===-1&&(o=e.length),e.slice(n,o)}else{for(a=e.length-1;a>=0;--a)if(e.charCodeAt(a)===47){if(!s){n=a+1;break}}else o===-1&&(s=!1,o=a+1);return o===-1?"":e.slice(n,o)}},extname:function(e){Kr(e);for(var r=-1,n=0,o=-1,s=!0,a=0,i=e.length-1;i>=0;--i){var c=e.charCodeAt(i);if(c===47){if(!s){n=i+1;break}continue}o===-1&&(s=!1,o=i+1),c===46?r===-1?r=i:a!==1&&(a=1):r!==-1&&(a=-1)}return r===-1||o===-1||a===0||a===1&&r===o-1&&r===n+1?"":e.slice(r,o)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return Kp("/",e)},parse:function(e){Kr(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return r;var n=e.charCodeAt(0),o=n===47,s;o?(r.root="/",s=1):s=0;for(var a=-1,i=0,c=-1,d=!0,u=e.length-1,p=0;u>=s;--u){if(n=e.charCodeAt(u),n===47){if(!d){i=u+1;break}continue}c===-1&&(d=!1,c=u+1),n===46?a===-1?a=u:p!==1&&(p=1):a!==-1&&(p=-1)}return a===-1||c===-1||p===0||p===1&&a===c-1&&a===i+1?c!==-1&&(i===0&&o?r.base=r.name=e.slice(1,c):r.base=r.name=e.slice(i,c)):(i===0&&o?(r.name=e.slice(1,a),r.base=e.slice(1,c)):(r.name=e.slice(i,a),r.base=e.slice(i,c)),r.ext=e.slice(a,c)),i>0?r.dir=e.slice(0,i-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};uo.posix=uo;Md.exports=uo});var jd=ss((m0,wi)=>{"use strict";var fo=typeof Reflect=="object"?Reflect:null,Od=fo&&typeof fo.apply=="function"?fo.apply:function(e,r,n){return Function.prototype.apply.call(e,r,n)},Ga;fo&&typeof fo.ownKeys=="function"?Ga=fo.ownKeys:Object.getOwnPropertySymbols?Ga=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Ga=function(e){return Object.getOwnPropertyNames(e)};function Yp(t){console&&console.warn&&console.warn(t)}var Dd=Number.isNaN||function(e){return e!==e};function it(){it.init.call(this)}wi.exports=it;wi.exports.once=eg;it.EventEmitter=it;it.prototype._events=void 0;it.prototype._eventsCount=0;it.prototype._maxListeners=void 0;var Ld=10;function Wa(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(it,"defaultMaxListeners",{enumerable:!0,get:function(){return Ld},set:function(t){if(typeof t!="number"||t<0||Dd(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");Ld=t}});it.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};it.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||Dd(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function Pd(t){return t._maxListeners===void 0?it.defaultMaxListeners:t._maxListeners}it.prototype.getMaxListeners=function(){return Pd(this)};it.prototype.emit=function(e){for(var r=[],n=1;n<arguments.length;n++)r.push(arguments[n]);var o=e==="error",s=this._events;if(s!==void 0)o=o&&s.error===void 0;else if(!o)return!1;if(o){var a;if(r.length>0&&(a=r[0]),a instanceof Error)throw a;var i=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw i.context=a,i}var c=s[e];if(c===void 0)return!1;if(typeof c=="function")Od(c,this,r);else for(var d=c.length,u=Hd(c,d),n=0;n<d;++n)Od(u[n],this,r);return!0};function zd(t,e,r,n){var o,s,a;if(Wa(r),s=t._events,s===void 0?(s=t._events=Object.create(null),t._eventsCount=0):(s.newListener!==void 0&&(t.emit("newListener",e,r.listener?r.listener:r),s=t._events),a=s[e]),a===void 0)a=s[e]=r,++t._eventsCount;else if(typeof a=="function"?a=s[e]=n?[r,a]:[a,r]:n?a.unshift(r):a.push(r),o=Pd(t),o>0&&a.length>o&&!a.warned){a.warned=!0;var i=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");i.name="MaxListenersExceededWarning",i.emitter=t,i.type=e,i.count=a.length,Yp(i)}return t}it.prototype.addListener=function(e,r){return zd(this,e,r,!1)};it.prototype.on=it.prototype.addListener;it.prototype.prependListener=function(e,r){return zd(this,e,r,!0)};function Zp(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Fd(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},o=Zp.bind(n);return o.listener=r,n.wrapFn=o,o}it.prototype.once=function(e,r){return Wa(r),this.on(e,Fd(this,e,r)),this};it.prototype.prependOnceListener=function(e,r){return Wa(r),this.prependListener(e,Fd(this,e,r)),this};it.prototype.removeListener=function(e,r){var n,o,s,a,i;if(Wa(r),o=this._events,o===void 0)return this;if(n=o[e],n===void 0)return this;if(n===r||n.listener===r)--this._eventsCount===0?this._events=Object.create(null):(delete o[e],o.removeListener&&this.emit("removeListener",e,n.listener||r));else if(typeof n!="function"){for(s=-1,a=n.length-1;a>=0;a--)if(n[a]===r||n[a].listener===r){i=n[a].listener,s=a;break}if(s<0)return this;s===0?n.shift():Qp(n,s),n.length===1&&(o[e]=n[0]),o.removeListener!==void 0&&this.emit("removeListener",e,i||r)}return this};it.prototype.off=it.prototype.removeListener;it.prototype.removeAllListeners=function(e){var r,n,o;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var s=Object.keys(n),a;for(o=0;o<s.length;++o)a=s[o],a!=="removeListener"&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(r=n[e],typeof r=="function")this.removeListener(e,r);else if(r!==void 0)for(o=r.length-1;o>=0;o--)this.removeListener(e,r[o]);return this};function Bd(t,e,r){var n=t._events;if(n===void 0)return[];var o=n[e];return o===void 0?[]:typeof o=="function"?r?[o.listener||o]:[o]:r?Jp(o):Hd(o,o.length)}it.prototype.listeners=function(e){return Bd(this,e,!0)};it.prototype.rawListeners=function(e){return Bd(this,e,!1)};it.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):$d.call(t,e)};it.prototype.listenerCount=$d;function $d(t){var e=this._events;if(e!==void 0){var r=e[t];if(typeof r=="function")return 1;if(r!==void 0)return r.length}return 0}it.prototype.eventNames=function(){return this._eventsCount>0?Ga(this._events):[]};function Hd(t,e){for(var r=new Array(e),n=0;n<e;++n)r[n]=t[n];return r}function Qp(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function Jp(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}function eg(t,e){return new Promise(function(r,n){function o(a){t.removeListener(e,s),n(a)}function s(){typeof t.removeListener=="function"&&t.removeListener("error",o),r([].slice.call(arguments))}Ud(t,e,s,{once:!0}),e!=="error"&&tg(t,o,{once:!0})})}function tg(t,e,r){typeof t.on=="function"&&Ud(t,"error",e,r)}function Ud(t,e,r,n){if(typeof t.on=="function")n.once?t.once(e,r):t.on(e,r);else if(typeof t.addEventListener=="function")t.addEventListener(e,function o(s){n.once&&t.removeEventListener(e,o),r(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}});var Gd=ss(qa=>{(function(t){t.parser=function(f,l){return new r(f,l)},t.SAXParser=r,t.SAXStream=u,t.createStream=c,t.MAX_BUFFER_LENGTH=64*1024;var e=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];t.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function r(f,l){if(!(this instanceof r))return new r(f,l);var k=this;o(k),k.q=k.c="",k.bufferCheckPosition=t.MAX_BUFFER_LENGTH,k.encoding=null,k.opt=l||{},k.opt.lowercase=k.opt.lowercase||k.opt.lowercasetags,k.looseCase=k.opt.lowercase?"toLowerCase":"toUpperCase",k.opt.maxEntityCount=k.opt.maxEntityCount||512,k.opt.maxEntityDepth=k.opt.maxEntityDepth||4,k.entityCount=k.entityDepth=0,k.tags=[],k.closed=k.closedRoot=k.sawRoot=!1,k.tag=k.error=null,k.strict=!!f,k.noscript=!!(f||k.opt.noscript),k.state=m.BEGIN,k.strictEntities=k.opt.strictEntities,k.ENTITIES=k.strictEntities?Object.create(t.XML_ENTITIES):Object.create(t.ENTITIES),k.attribList=[],k.opt.xmlns&&(k.ns=Object.create(_)),k.opt.unquotedAttributeValues===void 0&&(k.opt.unquotedAttributeValues=!f),k.trackPosition=k.opt.position!==!1,k.trackPosition&&(k.position=k.line=k.column=0),F(k,"onready")}Object.create||(Object.create=function(f){function l(){}l.prototype=f;var k=new l;return k}),Object.keys||(Object.keys=function(f){var l=[];for(var k in f)f.hasOwnProperty(k)&&l.push(k);return l});function n(f){for(var l=Math.max(t.MAX_BUFFER_LENGTH,10),k=0,x=0,se=e.length;x<se;x++){var he=f[e[x]].length;if(he>l)switch(e[x]){case"textNode":ge(f);break;case"cdata":V(f,"oncdata",f.cdata),f.cdata="";break;case"script":V(f,"onscript",f.script),f.script="";break;default:z(f,"Max buffer length exceeded: "+e[x])}k=Math.max(k,he)}var ie=t.MAX_BUFFER_LENGTH-k;f.bufferCheckPosition=ie+f.position}function o(f){for(var l=0,k=e.length;l<k;l++)f[e[l]]=""}function s(f){ge(f),f.cdata!==""&&(V(f,"oncdata",f.cdata),f.cdata=""),f.script!==""&&(V(f,"onscript",f.script),f.script="")}r.prototype={end:function(){ce(this)},write:Ve,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){s(this)}};var a;try{a=require("stream").Stream}catch{a=function(){}}a||(a=function(){});var i=t.EVENTS.filter(function(f){return f!=="error"&&f!=="end"});function c(f,l){return new u(f,l)}function d(f,l){if(f.length>=2){if(f[0]===255&&f[1]===254)return"utf-16le";if(f[0]===254&&f[1]===255)return"utf-16be"}return f.length>=3&&f[0]===239&&f[1]===187&&f[2]===191?"utf8":f.length>=4?f[0]===60&&f[1]===0&&f[2]===63&&f[3]===0?"utf-16le":f[0]===0&&f[1]===60&&f[2]===0&&f[3]===63?"utf-16be":"utf8":l?"utf8":null}function u(f,l){if(!(this instanceof u))return new u(f,l);a.apply(this),this._parser=new r(f,l),this.writable=!0,this.readable=!0;var k=this;this._parser.onend=function(){k.emit("end")},this._parser.onerror=function(x){k.emit("error",x),k._parser.error=null},this._decoder=null,this._decoderBuffer=null,i.forEach(function(x){Object.defineProperty(k,"on"+x,{get:function(){return k._parser["on"+x]},set:function(se){if(!se)return k.removeAllListeners(x),k._parser["on"+x]=se,se;k.on(x,se)},enumerable:!0,configurable:!1})})}u.prototype=Object.create(a.prototype,{constructor:{value:u}}),u.prototype._decodeBuffer=function(f,l){if(this._decoderBuffer&&(f=Buffer.concat([this._decoderBuffer,f]),this._decoderBuffer=null),!this._decoder){var k=d(f,l);if(!k)return this._decoderBuffer=f,"";this._parser.encoding=k,this._decoder=new TextDecoder(k)}return this._decoder.decode(f,{stream:!l})},u.prototype.write=function(f){if(typeof Buffer=="function"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(f))f=this._decodeBuffer(f,!1);else if(this._decoderBuffer){var l=this._decodeBuffer(Buffer.alloc(0),!0);l&&(this._parser.write(l),this.emit("data",l))}return this._parser.write(f.toString()),this.emit("data",f),!0},u.prototype.end=function(f){if(f&&f.length&&this.write(f),this._decoderBuffer){var l=this._decodeBuffer(Buffer.alloc(0),!0);l&&(this._parser.write(l),this.emit("data",l))}else if(this._decoder){var k=this._decoder.decode();k&&(this._parser.write(k),this.emit("data",k))}return this._parser.end(),!0},u.prototype.on=function(f,l){var k=this;return!k._parser["on"+f]&&i.indexOf(f)!==-1&&(k._parser["on"+f]=function(){var x=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);x.splice(0,0,f),k.emit.apply(k,x)}),a.prototype.on.call(k,f,l)};var p=/^\[CDATA\[$/i,h=/^DOCTYPE$/i,g="http://www.w3.org/XML/1998/namespace",S="http://www.w3.org/2000/xmlns/",_={xml:g,xmlns:S},v=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,E=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,O=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,N=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function M(f){return f===" "||f===`
`||f==="\r"||f==="	"}function I(f){return f==='"'||f==="'"}function T(f){return f===">"||M(f)}function D(f,l){return f.test(l)}function L(f,l){return!D(f,l)}var m=0;t.STATE={BEGIN:m++,BEGIN_WHITESPACE:m++,TEXT:m++,TEXT_ENTITY:m++,OPEN_WAKA:m++,SGML_DECL:m++,SGML_DECL_QUOTED:m++,DOCTYPE:m++,DOCTYPE_QUOTED:m++,DOCTYPE_DTD:m++,DOCTYPE_DTD_QUOTED:m++,COMMENT_STARTING:m++,COMMENT:m++,COMMENT_ENDING:m++,COMMENT_ENDED:m++,CDATA:m++,CDATA_ENDING:m++,CDATA_ENDING_2:m++,PROC_INST:m++,PROC_INST_BODY:m++,PROC_INST_ENDING:m++,OPEN_TAG:m++,OPEN_TAG_SLASH:m++,ATTRIB:m++,ATTRIB_NAME:m++,ATTRIB_NAME_SAW_WHITE:m++,ATTRIB_VALUE:m++,ATTRIB_VALUE_QUOTED:m++,ATTRIB_VALUE_CLOSED:m++,ATTRIB_VALUE_UNQUOTED:m++,ATTRIB_VALUE_ENTITY_Q:m++,ATTRIB_VALUE_ENTITY_U:m++,CLOSE_TAG:m++,CLOSE_TAG_SAW_WHITE:m++,SCRIPT:m++,SCRIPT_ENDING:m++},t.XML_ENTITIES=Object.assign(Object.create(null),{amp:"&",gt:">",lt:"<",quot:'"',apos:"'"}),t.ENTITIES=Object.assign(Object.create(null),{amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830}),Object.keys(t.ENTITIES).forEach(function(f){var l=t.ENTITIES[f],k=typeof l=="number"?String.fromCharCode(l):l;t.ENTITIES[f]=k});for(var A in t.STATE)t.STATE[t.STATE[A]]=A;m=t.STATE;function F(f,l,k){f[l]&&f[l](k)}function te(f){var l=f&&f.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);return l?l[2]:null}function B(f){return f?f.toLowerCase().replace(/[^a-z0-9]/g,""):null}function le(f,l){let k=B(f),x=B(l);return!k||!x?!0:x==="utf16"?k==="utf16le"||k==="utf16be":k===x}function fe(f,l){if(!(!f.strict||!f.encoding||!l||l.name!=="xml")){var k=te(l.body);k&&!le(f.encoding,k)&&$(f,"XML declaration encoding "+k+" does not match detected stream encoding "+f.encoding.toUpperCase())}}function V(f,l,k){f.textNode&&ge(f),F(f,l,k)}function ge(f){f.textNode=q(f.opt,f.textNode),f.textNode&&F(f,"ontext",f.textNode),f.textNode=""}function q(f,l){return f.trim&&(l=l.trim()),f.normalize&&(l=l.replace(/\s+/g," ")),l}function z(f,l){return ge(f),f.trackPosition&&(l+=`
Line: `+f.line+`
Column: `+f.column+`
Char: `+f.c),l=new Error(l),f.error=l,F(f,"onerror",l),f}function ce(f){return f.sawRoot&&!f.closedRoot&&$(f,"Unclosed root tag"),f.state!==m.BEGIN&&f.state!==m.BEGIN_WHITESPACE&&f.state!==m.TEXT&&z(f,"Unexpected end"),ge(f),f.c="",f.closed=!0,F(f,"onend"),r.call(f,f.strict,f.opt),f}function $(f,l){if(typeof f!="object"||!(f instanceof r))throw new Error("bad call to strictFail");f.strict&&z(f,l)}function re(f){f.strict||(f.tagName=f.tagName[f.looseCase]());var l=f.tags[f.tags.length-1]||f,k=f.tag={name:f.tagName,attributes:{}};f.opt.xmlns&&(k.ns=l.ns),f.attribList.length=0,V(f,"onopentagstart",k)}function ne(f,l){var k=f.indexOf(":"),x=k<0?["",f]:f.split(":"),se=x[0],he=x[1];return l&&f==="xmlns"&&(se="xmlns",he=""),{prefix:se,local:he}}function _e(f){if(f.strict||(f.attribName=f.attribName[f.looseCase]()),f.attribList.indexOf(f.attribName)!==-1||f.tag.attributes.hasOwnProperty(f.attribName)){f.attribName=f.attribValue="";return}if(f.opt.xmlns){var l=ne(f.attribName,!0),k=l.prefix,x=l.local;if(k==="xmlns")if(x==="xml"&&f.attribValue!==g)$(f,"xml: prefix must be bound to "+g+`
Actual: `+f.attribValue);else if(x==="xmlns"&&f.attribValue!==S)$(f,"xmlns: prefix must be bound to "+S+`
Actual: `+f.attribValue);else{var se=f.tag,he=f.tags[f.tags.length-1]||f;se.ns===he.ns&&(se.ns=Object.create(he.ns)),se.ns[x]=f.attribValue}f.attribList.push([f.attribName,f.attribValue])}else f.tag.attributes[f.attribName]=f.attribValue,V(f,"onattribute",{name:f.attribName,value:f.attribValue});f.attribName=f.attribValue=""}function Q(f,l){if(f.opt.xmlns){var k=f.tag,x=ne(f.tagName);k.prefix=x.prefix,k.local=x.local,k.uri=k.ns[x.prefix]||"",k.prefix&&!k.uri&&($(f,"Unbound namespace prefix: "+JSON.stringify(f.tagName)),k.uri=x.prefix);var se=f.tags[f.tags.length-1]||f;k.ns&&se.ns!==k.ns&&Object.keys(k.ns).forEach(function(De){V(f,"onopennamespace",{prefix:De,uri:k.ns[De]})});for(var he=0,ie=f.attribList.length;he<ie;he++){var be=f.attribList[he],we=be[0],Fe=be[1],ee=ne(we,!0),Ge=ee.prefix,tt=ee.local,rt=Ge===""?"":k.ns[Ge]||"",Ue={name:we,value:Fe,prefix:Ge,local:tt,uri:rt};Ge&&Ge!=="xmlns"&&!rt&&($(f,"Unbound namespace prefix: "+JSON.stringify(Ge)),Ue.uri=Ge),f.tag.attributes[we]=Ue,V(f,"onattribute",Ue)}f.attribList.length=0}f.tag.isSelfClosing=!!l,f.sawRoot=!0,f.tags.push(f.tag),V(f,"onopentag",f.tag),l||(!f.noscript&&f.tagName.toLowerCase()==="script"?f.state=m.SCRIPT:f.state=m.TEXT,f.tag=null,f.tagName=""),f.attribName=f.attribValue="",f.attribList.length=0}function ze(f){if(!f.tagName){$(f,"Weird empty close tag."),f.textNode+="</>",f.state=m.TEXT;return}if(f.script){if(f.tagName!=="script"){f.script+="</"+f.tagName+">",f.tagName="",f.state=m.SCRIPT;return}V(f,"onscript",f.script),f.script=""}var l=f.tags.length,k=f.tagName;f.strict||(k=k[f.looseCase]());for(var x=k;l--;){var se=f.tags[l];if(se.name!==x)$(f,"Unexpected close tag");else break}if(l<0){$(f,"Unmatched closing tag: "+f.tagName),f.textNode+="</"+f.tagName+">",f.state=m.TEXT;return}f.tagName=k;for(var he=f.tags.length;he-- >l;){var ie=f.tag=f.tags.pop();f.tagName=f.tag.name,V(f,"onclosetag",f.tagName);var be={};for(var we in ie.ns)be[we]=ie.ns[we];var Fe=f.tags[f.tags.length-1]||f;f.opt.xmlns&&ie.ns!==Fe.ns&&Object.keys(ie.ns).forEach(function(ee){var Ge=ie.ns[ee];V(f,"onclosenamespace",{prefix:ee,uri:Ge})})}l===0&&(f.closedRoot=!0),f.tagName=f.attribValue=f.attribName="",f.attribList.length=0,f.state=m.TEXT}function Be(f){var l=f.entity,k=l.toLowerCase(),x,se="";return f.ENTITIES[l]?f.ENTITIES[l]:f.ENTITIES[k]?f.ENTITIES[k]:(l=k,l.charAt(0)==="#"&&(l.charAt(1)==="x"?(l=l.slice(2),x=parseInt(l,16),se=x.toString(16)):(l=l.slice(1),x=parseInt(l,10),se=x.toString(10))),l=l.replace(/^0+/,""),isNaN(x)||se.toLowerCase()!==l||x<0||x>1114111||!Oe(x)?($(f,"Invalid character entity"),"&"+f.entity+";"):String.fromCodePoint(x))}function Oe(f){return f===9||f===10||f===13||f>=32&&f<=55295||f>=57344&&f<=65533||f>=65536&&f<=1114111}function dt(f,l){l==="<"?(f.state=m.OPEN_WAKA,f.startTagPosition=f.position):M(l)||($(f,"Non-whitespace before first tag."),f.textNode=l,f.state=m.TEXT)}function Qe(f,l){var k="";return l<f.length&&(k=f.charAt(l)),k}function Ve(f){var l=this;if(this.error)throw this.error;if(l.closed)return z(l,"Cannot write after close. Assign an onready handler.");if(f===null)return ce(l);typeof f=="object"&&(f=f.toString());for(var k=0,x="";x=Qe(f,k++),l.c=x,!!x;)switch(l.trackPosition&&(l.position++,x===`
`?(l.line++,l.column=0):l.column++),l.state){case m.BEGIN:if(l.state=m.BEGIN_WHITESPACE,x==="\uFEFF")continue;dt(l,x);continue;case m.BEGIN_WHITESPACE:dt(l,x);continue;case m.TEXT:if(l.sawRoot&&!l.closedRoot){for(var he=k-1;x&&x!=="<"&&x!=="&";)x=Qe(f,k++),x&&l.trackPosition&&(l.position++,x===`
`?(l.line++,l.column=0):l.column++);l.textNode+=f.substring(he,k-1)}x==="<"&&!(l.sawRoot&&l.closedRoot&&!l.strict)?(l.state=m.OPEN_WAKA,l.startTagPosition=l.position):(!M(x)&&(!l.sawRoot||l.closedRoot)&&$(l,"Text data outside of root node."),x==="&"?l.state=m.TEXT_ENTITY:l.textNode+=x);continue;case m.SCRIPT:x==="<"?l.state=m.SCRIPT_ENDING:l.script+=x;continue;case m.SCRIPT_ENDING:x==="/"?l.state=m.CLOSE_TAG:(l.script+="<"+x,l.state=m.SCRIPT);continue;case m.OPEN_WAKA:if(x==="!")l.state=m.SGML_DECL,l.sgmlDecl="";else if(!M(x))if(D(v,x))l.state=m.OPEN_TAG,l.tagName=x;else if(x==="/")l.state=m.CLOSE_TAG,l.tagName="";else if(x==="?")l.state=m.PROC_INST,l.procInstName=l.procInstBody="";else{if($(l,"Unencoded <"),l.startTagPosition+1<l.position){var se=l.position-l.startTagPosition;x=new Array(se).join(" ")+x}l.textNode+="<"+x,l.state=m.TEXT}continue;case m.SGML_DECL:if(l.sgmlDecl+x==="--"){l.state=m.COMMENT,l.comment="",l.sgmlDecl="";continue}l.doctype&&l.doctype!==!0&&l.sgmlDecl?(l.state=m.DOCTYPE_DTD,l.doctype+="<!"+l.sgmlDecl+x,l.sgmlDecl=""):p.test(l.sgmlDecl+x)?(V(l,"onopencdata"),l.state=m.CDATA,l.sgmlDecl="",l.cdata=""):h.test(l.sgmlDecl+x)?(l.state=m.DOCTYPE,(l.doctype||l.sawRoot)&&$(l,"Inappropriately located doctype declaration"),l.doctype="",l.sgmlDecl=""):x===">"?(V(l,"onsgmldeclaration",l.sgmlDecl),l.sgmlDecl="",l.state=m.TEXT):(I(x)&&(l.state=m.SGML_DECL_QUOTED),l.sgmlDecl+=x);continue;case m.SGML_DECL_QUOTED:x===l.q&&(l.state=m.SGML_DECL,l.q=""),l.sgmlDecl+=x;continue;case m.DOCTYPE:x===">"?(l.state=m.TEXT,V(l,"ondoctype",l.doctype),l.doctype=!0):(l.doctype+=x,x==="["?l.state=m.DOCTYPE_DTD:I(x)&&(l.state=m.DOCTYPE_QUOTED,l.q=x));continue;case m.DOCTYPE_QUOTED:l.doctype+=x,x===l.q&&(l.q="",l.state=m.DOCTYPE);continue;case m.DOCTYPE_DTD:x==="]"?(l.doctype+=x,l.state=m.DOCTYPE):x==="<"?(l.state=m.OPEN_WAKA,l.startTagPosition=l.position):I(x)?(l.doctype+=x,l.state=m.DOCTYPE_DTD_QUOTED,l.q=x):l.doctype+=x;continue;case m.DOCTYPE_DTD_QUOTED:l.doctype+=x,x===l.q&&(l.state=m.DOCTYPE_DTD,l.q="");continue;case m.COMMENT:x==="-"?l.state=m.COMMENT_ENDING:l.comment+=x;continue;case m.COMMENT_ENDING:x==="-"?(l.state=m.COMMENT_ENDED,l.comment=q(l.opt,l.comment),l.comment&&V(l,"oncomment",l.comment),l.comment=""):(l.comment+="-"+x,l.state=m.COMMENT);continue;case m.COMMENT_ENDED:x!==">"?($(l,"Malformed comment"),l.comment+="--"+x,l.state=m.COMMENT):l.doctype&&l.doctype!==!0?l.state=m.DOCTYPE_DTD:l.state=m.TEXT;continue;case m.CDATA:for(var he=k-1;x&&x!=="]";)x=Qe(f,k++),x&&l.trackPosition&&(l.position++,x===`
`?(l.line++,l.column=0):l.column++);l.cdata+=f.substring(he,k-1),x==="]"&&(l.state=m.CDATA_ENDING);continue;case m.CDATA_ENDING:x==="]"?l.state=m.CDATA_ENDING_2:(l.cdata+="]"+x,l.state=m.CDATA);continue;case m.CDATA_ENDING_2:x===">"?(l.cdata&&V(l,"oncdata",l.cdata),V(l,"onclosecdata"),l.cdata="",l.state=m.TEXT):x==="]"?l.cdata+="]":(l.cdata+="]]"+x,l.state=m.CDATA);continue;case m.PROC_INST:x==="?"?l.state=m.PROC_INST_ENDING:M(x)?l.state=m.PROC_INST_BODY:l.procInstName+=x;continue;case m.PROC_INST_BODY:if(!l.procInstBody&&M(x))continue;x==="?"?l.state=m.PROC_INST_ENDING:l.procInstBody+=x;continue;case m.PROC_INST_ENDING:if(x===">"){let Fe={name:l.procInstName,body:l.procInstBody};fe(l,Fe),V(l,"onprocessinginstruction",Fe),l.procInstName=l.procInstBody="",l.state=m.TEXT}else l.procInstBody+="?"+x,l.state=m.PROC_INST_BODY;continue;case m.OPEN_TAG:D(E,x)?l.tagName+=x:(re(l),x===">"?Q(l):x==="/"?l.state=m.OPEN_TAG_SLASH:(M(x)||$(l,"Invalid character in tag name"),l.state=m.ATTRIB));continue;case m.OPEN_TAG_SLASH:x===">"?(Q(l,!0),ze(l)):($(l,"Forward-slash in opening tag not followed by >"),l.state=m.ATTRIB);continue;case m.ATTRIB:if(M(x))continue;x===">"?Q(l):x==="/"?l.state=m.OPEN_TAG_SLASH:D(v,x)?(l.attribName=x,l.attribValue="",l.state=m.ATTRIB_NAME):$(l,"Invalid attribute name");continue;case m.ATTRIB_NAME:x==="="?l.state=m.ATTRIB_VALUE:x===">"?($(l,"Attribute without value"),l.attribValue=l.attribName,_e(l),Q(l)):M(x)?l.state=m.ATTRIB_NAME_SAW_WHITE:D(E,x)?l.attribName+=x:$(l,"Invalid attribute name");continue;case m.ATTRIB_NAME_SAW_WHITE:if(x==="=")l.state=m.ATTRIB_VALUE;else{if(M(x))continue;$(l,"Attribute without value"),l.tag.attributes[l.attribName]="",l.attribValue="",V(l,"onattribute",{name:l.attribName,value:""}),l.attribName="",x===">"?Q(l):D(v,x)?(l.attribName=x,l.state=m.ATTRIB_NAME):($(l,"Invalid attribute name"),l.state=m.ATTRIB)}continue;case m.ATTRIB_VALUE:if(M(x))continue;I(x)?(l.q=x,l.state=m.ATTRIB_VALUE_QUOTED):(l.opt.unquotedAttributeValues||z(l,"Unquoted attribute value"),l.state=m.ATTRIB_VALUE_UNQUOTED,l.attribValue=x);continue;case m.ATTRIB_VALUE_QUOTED:if(x!==l.q){x==="&"?l.state=m.ATTRIB_VALUE_ENTITY_Q:l.attribValue+=x;continue}_e(l),l.q="",l.state=m.ATTRIB_VALUE_CLOSED;continue;case m.ATTRIB_VALUE_CLOSED:M(x)?l.state=m.ATTRIB:x===">"?Q(l):x==="/"?l.state=m.OPEN_TAG_SLASH:D(v,x)?($(l,"No whitespace between attributes"),l.attribName=x,l.attribValue="",l.state=m.ATTRIB_NAME):$(l,"Invalid attribute name");continue;case m.ATTRIB_VALUE_UNQUOTED:if(!T(x)){x==="&"?l.state=m.ATTRIB_VALUE_ENTITY_U:l.attribValue+=x;continue}_e(l),x===">"?Q(l):l.state=m.ATTRIB;continue;case m.CLOSE_TAG:if(l.tagName)x===">"?ze(l):D(E,x)?l.tagName+=x:l.script?(l.script+="</"+l.tagName+x,l.tagName="",l.state=m.SCRIPT):(M(x)||$(l,"Invalid tagname in closing tag"),l.state=m.CLOSE_TAG_SAW_WHITE);else{if(M(x))continue;L(v,x)?l.script?(l.script+="</"+x,l.state=m.SCRIPT):$(l,"Invalid tagname in closing tag."):l.tagName=x}continue;case m.CLOSE_TAG_SAW_WHITE:if(M(x))continue;x===">"?ze(l):$(l,"Invalid characters in closing tag");continue;case m.TEXT_ENTITY:case m.ATTRIB_VALUE_ENTITY_Q:case m.ATTRIB_VALUE_ENTITY_U:var ie,be;switch(l.state){case m.TEXT_ENTITY:ie=m.TEXT,be="textNode";break;case m.ATTRIB_VALUE_ENTITY_Q:ie=m.ATTRIB_VALUE_QUOTED,be="attribValue";break;case m.ATTRIB_VALUE_ENTITY_U:ie=m.ATTRIB_VALUE_UNQUOTED,be="attribValue";break}if(x===";"){var we=Be(l);l.opt.unparsedEntities&&!Object.values(t.XML_ENTITIES).includes(we)?((l.entityCount+=1)>l.opt.maxEntityCount&&z(l,"Parsed entity count exceeds max entity count"),(l.entityDepth+=1)>l.opt.maxEntityDepth&&z(l,"Parsed entity depth exceeds max entity depth"),l.entity="",l.state=ie,l.write(we),l.entityDepth-=1):(l[be]+=we,l.entity="",l.state=ie)}else D(l.entity.length?N:O,x)?l.entity+=x:($(l,"Invalid character in entity name"),l[be]+="&"+l.entity+x,l.entity="",l.state=ie);continue;default:throw new Error(l,"Unknown state: "+l.state)}return l.position>=l.bufferCheckPosition&&n(l),l}String.fromCodePoint||(function(){var f=String.fromCharCode,l=Math.floor,k=function(){var x=16384,se=[],he,ie,be=-1,we=arguments.length;if(!we)return"";for(var Fe="";++be<we;){var ee=Number(arguments[be]);if(!isFinite(ee)||ee<0||ee>1114111||l(ee)!==ee)throw RangeError("Invalid code point: "+ee);ee<=65535?se.push(ee):(ee-=65536,he=(ee>>10)+55296,ie=ee%1024+56320,se.push(he,ie)),(be+1===we||se.length>x)&&(Fe+=f.apply(null,se),se.length=0)}return Fe};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:k,configurable:!0,writable:!0}):String.fromCodePoint=k})()})(typeof qa>"u"?qa.sax={}:qa)});function og(t){return t.charCodeAt(0)===65279?t.slice(1):t}function ag(t){return t.toLowerCase()}function sg(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===0}function Va(t,e,r){for(let n of t)e=n(e,r);return e}function ho(t,e,r){let n=Object.create(null);n.value=r,n.writable=!0,n.enumerable=!0,n.configurable=!0,Object.defineProperty(t,e,n)}function ig(t,e){let r={};return typeof e=="object"&&(r=e),new _i(r).parseStringPromise(t)}async function Xd(t,e={}){return await ig(t,e)}var po,qd,Vd,rg,ng,br,Wd,_i,Kd=rr(()=>{po=Ct(Rd(),1),qd=Ct(jd(),1),Vd=Ct(Gd(),1),rg=Object.defineProperty,ng=(t,e,r)=>e in t?rg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,br=(t,e,r)=>ng(t,typeof e!="symbol"?e+"":e,r);Wd={.1:{explicitCharkey:!1,trim:!0,normalize:!0,normalizeTags:!1,attrkey:"@",charkey:"#",explicitArray:!1,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!1,validator:null,xmlns:!1,explicitChildren:!1,childkey:"@@",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,emptyTag:""},.2:{explicitCharkey:!1,trim:!1,normalize:!1,normalizeTags:!1,attrkey:"$",charkey:"_",explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!0,validator:null,xmlns:!1,explicitChildren:!1,preserveChildrenOrder:!1,childkey:"$$",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,rootName:"root",xmldec:{version:"1.0",encoding:"UTF-8",standalone:!0},doctype:null,renderOpts:{pretty:!0,indent:"  ",newline:`
`},headless:!1,chunkSize:1e4,emptyTag:"",cdata:!1}};_i=class extends qd.EventEmitter{constructor(e){super(),br(this,"options"),br(this,"remaining",""),br(this,"saxParser"),br(this,"resultObject",null),br(this,"EXPLICIT_CHARKEY"),br(this,"errThrown",!1),br(this,"ended",!1),br(this,"processAsync",()=>{try{if(this.remaining.length<=this.options.chunkSize){let r=this.remaining;this.remaining="",this.saxParser=this.saxParser.write(r),this.saxParser.close()}else{let r=this.remaining.slice(0,this.options.chunkSize);this.remaining=this.remaining.slice(this.options.chunkSize),this.saxParser=this.saxParser.write(r),setTimeout(this.processAsync,0)}}catch(r){this.errThrown||(this.errThrown=!0,this.emit("error",r))}}),br(this,"assignOrPush",(r,n,o)=>{n in r?(Array.isArray(r[n])||ho(r,n,[r[n]]),r[n].push(o)):this.options.explicitArray?ho(r,n,[o]):ho(r,n,o)}),br(this,"reset",()=>{this.removeAllListeners(),this.saxParser=Vd.default.parser(this.options.strict,{trim:!1,normalize:!1,xmlns:this.options.xmlns}),this.errThrown=!1,this.saxParser.onerror=a=>{this.saxParser.resume(),this.errThrown||(this.errThrown=!0,this.emit("error",a))},this.saxParser.onend=()=>{this.ended||(this.ended=!0,this.emit("end",this.resultObject))},this.ended=!1,this.EXPLICIT_CHARKEY=this.options.explicitCharkey,this.resultObject=null;let r=[],n=this.options.attrkey,o=this.options.charkey;this.saxParser.onopentag=a=>{let i={};i[o]="",this.options.ignoreAttrs||Object.keys(a.attributes).forEach(c=>{!(n in i)&&!this.options.mergeAttrs&&(i[n]={});let d=this.options.attrValueProcessors?Va(this.options.attrValueProcessors,a.attributes[c],c):a.attributes[c],u=this.options.attrNameProcessors?Va(this.options.attrNameProcessors,c):c;this.options.mergeAttrs?this.assignOrPush(i,u,d):ho(i[n],u,d)}),i["#name"]=this.options.tagNameProcessors?Va(this.options.tagNameProcessors,a.name):a.name,this.options.xmlns&&(i[this.options.xmlnskey]={uri:a.uri,local:a.local}),r.push(i)},this.saxParser.onclosetag=()=>{let a=r.pop(),i=a["#name"];(!this.options.explicitChildren||!this.options.preserveChildrenOrder)&&delete a["#name"];let c;a.cdata===!0&&(c=a.cdata,delete a.cdata);let d=r[r.length-1],u="";if(a[o].match(/^\s*$/)&&!c?(u=a[o],delete a[o]):(this.options.trim&&(a[o]=a[o].trim()),this.options.normalize&&(a[o]=a[o].replace(/\s{2,}/g," ").trim()),a[o]=this.options.valueProcessors?Va(this.options.valueProcessors,a[o],i):a[o],Object.keys(a).length===1&&o in a&&!this.EXPLICIT_CHARKEY&&(a=a[o])),sg(a)&&(typeof this.options.emptyTag=="function"?a=this.options.emptyTag():a=this.options.emptyTag!==""?this.options.emptyTag:u),this.options.validator){let p=`/${r.map(h=>h["#name"]).concat(i).join("/")}`;(()=>{try{a=this.options.validator(p,d&&d[i],a)}catch(h){this.emit("error",h)}})()}if(this.options.explicitChildren&&!this.options.mergeAttrs&&typeof a=="object")if(this.options.preserveChildrenOrder){if(d){d[this.options.childkey]=d[this.options.childkey]||[];let p={};Object.keys(a).forEach(h=>{ho(p,h,a[h])}),d[this.options.childkey].push(p),delete a["#name"],Object.keys(a).length===1&&o in a&&!this.EXPLICIT_CHARKEY&&(a=a[o])}}else{let p={};this.options.attrkey in a&&(p[this.options.attrkey]=a[this.options.attrkey],delete a[this.options.attrkey]),!this.options.charsAsChildren&&this.options.charkey in a&&(p[this.options.charkey]=a[this.options.charkey],delete a[this.options.charkey]),Object.getOwnPropertyNames(a).length>0&&(p[this.options.childkey]=a),a=p}if(r.length>0)this.assignOrPush(d,i,a);else{if(this.options.explicitRoot){let p=a,h={};ho(h,i,p),a=h}this.resultObject=a,this.ended=!0,this.emit("end",this.resultObject)}};let s=a=>{let i=r[r.length-1];if(i&&(i[o]+=a,this.options.explicitChildren&&this.options.preserveChildrenOrder&&this.options.charsAsChildren&&(this.options.includeWhiteChars||a.replace(/\\n/g,"").trim()!==""))){i[this.options.childkey]=i[this.options.childkey]||[];let c={"#name":"__text__"};c[o]=a,this.options.normalize&&(c[o]=c[o].replace(/\s{2,}/g," ").trim()),i[this.options.childkey].push(c)}return i};this.saxParser.ontext=s,this.saxParser.oncdata=a=>{let i=s(a);i&&(i.cdata=!0)}}),br(this,"parseString",(r,n)=>{n&&typeof n=="function"&&(this.on("end",o=>{this.reset(),n(null,o)}),this.on("error",o=>{this.reset(),n(o)}));try{return r=r.toString(),r.trim()===""?(this.emit("end",null),!0):(r=og(r),this.options.async?(this.remaining=r,setTimeout(this.processAsync,0),this.saxParser):this.saxParser.write(r).close())}catch(o){if(!this.errThrown&&!this.ended)this.emit("error",o),this.errThrown=!0;else if(this.ended)throw o}}),br(this,"parseStringPromise",r=>new Promise((n,o)=>{this.parseString(r,(s,a)=>{s?o(s):n(a)})})),this.options={},Object.keys(Wd["0.2"]).forEach(r=>{this.options[r]=Wd["0.2"][r]}),e&&Object.keys(e).forEach(r=>{this.options[r]=e[r]}),this.options.xmlns&&(this.options.xmlnskey=`${this.options.attrkey}ns`),this.options.normalizeTags&&(this.options.tagNameProcessors||(this.options.tagNameProcessors=[]),this.options.tagNameProcessors.unshift(ag)),this.reset()}}});function Yd(t){return t.includes("&")?t.replace(/&(#x[\dA-Fa-f]+|#\d+|[a-zA-Z]+);/g,(e,r)=>r.startsWith("#x")?String.fromCodePoint(Number.parseInt(r.slice(2),16)):r.startsWith("#")?String.fromCodePoint(Number.parseInt(r.slice(1),10)):lg[e]||e):t}function dg(t){let e=t.slice(0,12),r=Array.from(e).map(n=>n.toString(16).padStart(2,"0")).join("");for(let[n,o]of Object.entries(cg))if(r.startsWith(n))return o;return"unknown"}function Ya(t,e,r,n){return URL.createObjectURL(new Blob([t],{type:e}))}function nu(t){let e="";return e=t.name??"",e}function kg(t){return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}async function ou(t){return t instanceof Uint8Array?kg(t):await t.arrayBuffer()}function Kt(t){let e=t.byteLength,r=e===4?"getUint32":e===2?"getUint16":"getUint8";return new DataView(t)[r](0)}function vr(t,e){let r={};for(let n in t){let[o,s,a]=t[n];r[n]=a==="string"?Uo(e.slice(o,o+s)):Kt(e.slice(o,o+s))}return r}function jo(t){let e=t.reduce((o,s)=>o+s.length,0),r=new t[0].constructor(e),n=0;for(let o of t)r.set(o,n),n+=o.length;return r}function Xa(t,e=0){let r=0,n=0;for(let o of t.subarray(e,e+4))if(r=r<<7|(o&127)>>>0,n++,o&128)break;return{value:r,length:n}}function Sg(t){let e=0;for(let r of t.subarray(-4))r&128&&(e=0),e=e<<7|r&127;return e}function au(t){let e=0;for(;t>0;t=t>>1)(t&1)===1&&e++;return e}function Eg(t){let e=0;for(;(t&1)===0;)t=t>>1,e++;return e}function Ng(t){let e=[];for(let r=0;r<t.length;r++){let n=t[r];if(n===0)e.push(0);else if(n<=8)for(let o of t.subarray(r+1,(r+=n)+1))e.push(o);else if(n<=127)e.push(n);else if(n<=191){let o=n<<8|t[r+++1],s=(o&16383)>>>3,a=(o&7)+3;for(let i=0;i<a;i++)e.push(e[e.length-s])}else e.push(32,n^128)}return Uint8Array.from(e)}function Ag(t,e){let r=e(t.huffcdic),{magic:n,offset1:o,offset2:s}=vr(vg,r);if(n!=="HUFF")throw new Error("Invalid HUFF record");let a=Array.from({length:256},(u,p)=>o+p*4).map(u=>Kt(r.slice(u,u+4))).map(u=>[u&128,u&31,u>>>8]),i=[[0,0],...Array.from({length:32},(u,p)=>s+p*8).map(u=>[Kt(r.slice(u,u+4)),Kt(r.slice(u+4,u+8))])],c=[];for(let u=1;u<t.numHuffcdic;u++){let p=e(t.huffcdic+u),h=vr(yg,p);if(h.magic!=="CDIC")throw new Error("Invalid CDIC record");let g=Math.min(1<<h.codeLength,h.numEntries-c.length),S=p.slice(h.length);for(let _=0;_<g;_++){let v=Kt(S.slice(_*2,_*2+2)),E=Kt(S.slice(v,v+2)),O=E&32767,N=E&32768,M=new Uint8Array(S.slice(v+2,v+2+O));c.push([M,N])}}let d=u=>{let p=new Uint8Array,h=u.byteLength*8;for(let g=0;g<h;){let S=Number(Cg(u,g)),[_,v,E]=a[S>>>24];if(!_){for(;S>>>32-v<i[v][0];)v+=1;E=i[v][1]}if(g+=v,g>h)break;let O=E-(S>>>32-v),[N,M]=c[O];M||(N=d(N),c[O]=[N,!0]),p=jo([p,N])}return p};return d}function Cg(t,e){let r=e>>3,n=e+32,o=n>>3,s=0n;for(let a=r;a<=o;a++)s=s<<8n|BigInt(t[a]??0);return s>>8n-BigInt(n&7)&0xFFFFFFFFn}function Ig(t,e){let{magic:r,count:n}=vr(bg,t);if(r!=="EXTH")throw new Error("Invalid EXTH header");let o=Si(e.toString()),s={},a=12;for(let i=0;i<n;i++){let c=Kt(t.slice(a,a+4)),d=Kt(t.slice(a+4,a+8));if(c in Jd){let[u,p,h]=Jd[c],g=t.slice(a+8,a+d),S=p==="uint"?Kt(g):o.decode(g);h?(s[u]??(s[u]=[]),s[u].push(S)):s[u]=S}a+=d}return s}function Mg(t){let e=t&1,r=au(t>>>1);return n=>{for(let o=0;o<r;o++){let s=Sg(n);n=n.subarray(0,-s)}if(e){let o=(n[n.length-1]&3)+1;n=n.subarray(0,-o)}return n}}function Rg(t){let{flags:e,dataStart:r,keyLength:n,keyStart:o}=vr(_g,t),s=new Uint8Array(t.slice(r));if(e&2){let a=n===16?1024:1040,i=new Uint8Array(t.slice(o,o+n)),c=Math.min(a,s.length);for(let d=0;d<c;d++)s[d]=s[d]^i[d%i.length]}if(e&1)try{return Zc(s)}catch(a){console.warn(a),console.warn("Failed to decompress font")}return s}function Ka(t,e){let r=e(t),n=vr(Qd,r);if(n.magic!=="INDX")throw new Error("Invalid INDX record");let o=Si(n.encoding.toString()),s={},a=0;for(let h=0;h<n.numCncx;h++){let g=e(t+n.numRecords+h+1),S=new Uint8Array(g);for(let _=0;_<S.byteLength;){let v=_,{value:E,length:O}=Xa(S,_);_+=O;let N=g.slice(_,_+E);_+=E,s[a+v]=o.decode(N)}a+=65536}let i=r.slice(n.length),c=vr(xg,i);if(c.magic!=="TAGX")throw new Error("Invalid TAGX section");let d=(c.length-12)/4,u=Array.from({length:d},(h,g)=>new Uint8Array(i.slice(12+g*4,12+g*4+4))),p=[];for(let h=0;h<n.numRecords;h++){let g=e(t+1+h),S=new Uint8Array(g),_=vr(Qd,g);if(_.magic!=="INDX")throw new Error("Invalid INDX record");for(let v=0;v<_.numRecords;v++){let E=_.idxt+4+2*v,O=Kt(g.slice(E,E+2)),N=Kt(g.slice(O,O+1)),M=Uo(g.slice(O+1,O+1+N)),I=[],T=O+1+N,D=0,L=T+c.numControlBytes;for(let[A,F,te,B]of u){if(B&1){D++;continue}let le=T+D,fe=Kt(g.slice(le,le+1))&te;if(fe===te)if(au(te)>1){let{value:V,length:ge}=Xa(S,L);I.push([A,0,V,F]),L+=ge}else I.push([A,1,0,F]);else I.push([A,fe>>Eg(te),0,F])}let m={};for(let[A,F,te,B]of I){let le=[];if(F!==0)for(let fe=0;fe<F*B;fe++){let{value:V,length:ge}=Xa(S,L);le.push(V),L+=ge}else{let fe=0;for(;fe<te;){let{value:V,length:ge}=Xa(S,L);le.push(V),L+=ge,fe+=ge}}m[A]=le}p.push({name:M,tagMap:m})}}return{table:p,cncx:s}}function Og(t,e){let{table:r,cncx:n}=Ka(t,e),o=r.map(({tagMap:a},i)=>({index:i,offset:a[1]?.[0],size:a[2]?.[0],label:n[a[3]?.[0]]??"",headingLevel:a[4]?.[0],pos:a[6],parent:a[21]?.[0],firstChild:a[22]?.[0],lastChild:a[23]?.[0]})),s=a=>(a.firstChild==null||(a.children=o.filter(i=>i.parent===a.index).map(s)),a);return o.filter(a=>a.headingLevel===0).map(s)}function eu(t=0,e=0){return`kindle:pos:fid:${t.toString(32).toUpperCase().padStart(4,"0")}:off:${e.toString(32).toUpperCase().padStart(10,"0")}`}function tu(t){let e=t.match(Dg);if(!e)return"";let[,r,n]=e;return`[${r}="${n}"]`}function zg(t){let[e,r]=t.match(Pg).slice(1);return{fid:Number.parseInt(e,32),off:Number.parseInt(r,32)}}async function Ei(t,e){let r=new ki(t,e);return await r.innerLoadFile(),await r.innerInit(),r}async function Ni(t,e){let r=new Ti(t,e);return await r.innerLoadFile(),await r.innerInit(),r}var lg,Zd,cg,ug,fg,hg,pg,gg,mg,bg,Qd,xg,vg,yg,wg,_g,Tg,Uo,Si,Jd,Lg,Dg,Pg,ru,Fg,Bg,Xt,Za,$g,Hg,At,ki,Ug,jg,xr,Ti,su=rr(()=>{Zs();Kd();lg={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};Zd={XML:"application/xml",XHTML:"application/xhtml+xml",HTML:"text/html",CSS:"text/css",SVG:"image/svg+xml"},cg={ffd8ff:"image/jpeg","89504e47":"image/png",47494638:"image/gif","424d":"image/bmp","3c737667":"image/svg+xml","00000018":"video/mp4","00000020":"video/mp4","1a45dfa3":"video/mkv","1f43b675":"video/webm",494433:"audio/mp3",52494646:"audio/wav","4f676753":"audio/ogg","00010000":"font/ttf",74727565:"font/ttf","4f54544f":"font/otf","774f4646":"font/woff","774f4632":"font/woff2","504c":"font/eot"};ug={1252:"windows-1252",65001:"utf-8"},fg={1:["ar","ar-SA","ar-IQ","ar-EG","ar-LY","ar-DZ","ar-MA","ar-TN","ar-OM","ar-YE","ar-SY","ar-JO","ar-LB","ar-KW","ar-AE","ar-BH","ar-QA"],2:["bg"],3:["ca"],4:["zh","zh-TW","zh-CN","zh-HK","zh-SG"],5:["cs"],6:["da"],7:["de","de-DE","de-CH","de-AT","de-LU","de-LI"],8:["el"],9:["en","en-US","en-GB","en-AU","en-CA","en-NZ","en-IE","en-ZA","en-JM",null,"en-BZ","en-TT","en-ZW","en-PH"],10:["es","es-ES","es-MX",null,"es-GT","es-CR","es-PA","es-DO","es-VE","es-CO","es-PE","es-AR","es-EC","es-CL","es-UY","es-PY","es-BO","es-SV","es-HN","es-NI","es-PR"],11:["fi"],12:["fr","fr-FR","fr-BE","fr-CA","fr-CH","fr-LU","fr-MC"],13:["he"],14:["hu"],15:["is"],16:["it","it-IT","it-CH"],17:["ja"],18:["ko"],19:["nl","nl-NL","nl-BE"],20:["no","nb","nn"],21:["pl"],22:["pt","pt-BR","pt-PT"],23:["rm"],24:["ro"],25:["ru"],26:["hr",null,"sr"],27:["sk"],28:["sq"],29:["sv","sv-SE","sv-FI"],30:["th"],31:["tr"],32:["ur"],33:["id"],34:["uk"],35:["be"],36:["sl"],37:["et"],38:["lv"],39:["lt"],41:["fa"],42:["vi"],43:["hy"],44:["az"],45:["eu"],46:["hsb"],47:["mk"],48:["st"],49:["ts"],50:["tn"],52:["xh"],53:["zu"],54:["af"],55:["ka"],56:["fo"],57:["hi"],58:["mt"],59:["se"],62:["ms"],63:["kk"],65:["sw"],67:["uz",null,"uz-UZ"],68:["tt"],69:["bn"],70:["pa"],71:["gu"],72:["or"],73:["ta"],74:["te"],75:["kn"],76:["ml"],77:["as"],78:["mr"],79:["sa"],82:["cy","cy-GB"],83:["gl","gl-ES"],87:["kok"],97:["ne"],98:["fy"]},hg={name:[0,32,"string"],type:[60,4,"string"],creator:[64,4,"string"],numRecords:[76,2,"uint"]},pg={compression:[0,2,"uint"],numTextRecords:[8,2,"uint"],recordSize:[10,2,"uint"],encryption:[12,2,"uint"]},gg={magic:[16,4,"string"],length:[20,4,"uint"],type:[24,4,"uint"],encoding:[28,4,"uint"],uid:[32,4,"uint"],version:[36,4,"uint"],titleOffset:[84,4,"uint"],titleLength:[88,4,"uint"],localeRegion:[94,1,"uint"],localeLanguage:[95,1,"uint"],resourceStart:[108,4,"uint"],huffcdic:[112,4,"uint"],numHuffcdic:[116,4,"uint"],exthFlag:[128,4,"uint"],trailingFlags:[240,4,"uint"],indx:[244,4,"uint"]},mg={resourceStart:[108,4,"uint"],fdst:[192,4,"uint"],numFdst:[196,4,"uint"],frag:[248,4,"uint"],skel:[252,4,"uint"],guide:[260,4,"uint"]},bg={magic:[0,4,"string"],length:[4,4,"uint"],count:[8,4,"uint"]},Qd={magic:[0,4,"string"],length:[4,4,"uint"],type:[8,4,"uint"],idxt:[20,4,"uint"],numRecords:[24,4,"uint"],encoding:[28,4,"uint"],language:[32,4,"uint"],total:[36,4,"uint"],ordt:[40,4,"uint"],ligt:[44,4,"uint"],numLigt:[48,4,"uint"],numCncx:[52,4,"uint"]},xg={magic:[0,4,"string"],length:[4,4,"uint"],numControlBytes:[8,4,"uint"]},vg={magic:[0,4,"string"],offset1:[8,4,"uint"],offset2:[12,4,"uint"]},yg={magic:[0,4,"string"],length:[4,4,"uint"],numEntries:[8,4,"uint"],codeLength:[12,4,"uint"]},wg={magic:[0,4,"string"],numEntries:[8,4,"uint"]},_g={flags:[8,4,"uint"],dataStart:[12,4,"uint"],keyLength:[16,4,"uint"],keyStart:[20,4,"uint"]};Tg=new TextDecoder,Uo=t=>Tg.decode(t);Si=t=>new TextDecoder(ug[t]);Jd={100:["creator","string",!0],101:["publisher","string",!1],103:["description","string",!1],104:["isbn","string",!1],105:["subject","string",!0],106:["date","string",!1],108:["contributor","string",!0],109:["rights","string",!1],110:["subjectCode","string",!0],112:["source","string",!0],113:["asin","string",!1],121:["boundary","uint",!1],122:["fixedLayout","string",!1],125:["numResources","uint",!1],126:["originalResolution","string",!1],127:["zeroGutter","string",!1],128:["zeroMargin","string",!1],129:["coverURI","string",!1],132:["regionMagnification","string",!1],201:["coverOffset","uint",!1],202:["thumbnailOffset","uint",!1],503:["title","string",!1],524:["language","string",!0],527:["pageProgressionDirection","string",!1]};Lg=/<\s*(?:mbp:)?pagebreak[^>]*>/gi;Dg=/\s(id|name|aid)\s*=\s*['"]([^'"]*)['"]/i;Pg=/kindle:pos:fid:(\w+):off:(\w+)/;ru=/kindle:(flow|embed):(\w+)(?:\?mime=(\w+\/[-+.\w]+))?/,Fg=Object.defineProperty,Bg=(t,e,r)=>e in t?Fg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Xt=(t,e,r)=>Bg(t,typeof e!="symbol"?e+"":e,r),Za=class{constructor(e,r){if(Xt(this,"fileArrayBuffer"),Xt(this,"recordsOffset"),Xt(this,"recordsMagic"),Xt(this,"start",0),Xt(this,"pdbHeader"),Xt(this,"mobiHeader"),Xt(this,"palmdocHeader"),Xt(this,"kf8Header"),Xt(this,"exth"),Xt(this,"isKf8",!1),Xt(this,"resourceStart"),Xt(this,"decoder"),Xt(this,"encoder"),Xt(this,"removeTrailingEntries"),Xt(this,"decompress"),this.fileArrayBuffer=e,this.parsePdbHeader(),this.parseFirstRecord(this.loadRecord(0)),this.resourceStart=this.mobiHeader.resourceStart,!this.isKf8){let n=this.exth.boundary??4294967295;if(n<4294967295){try{this.parseFirstRecord(this.loadRecord(n)),this.start=n,this.isKf8=!0}catch{console.warn("Failed to parse kf8 header.")}r.endsWith(".mobi")&&console.warn(`File "${r}" is a compatible file. Please change the file extension to .azw3 to make it parse correctly.`)}}this.setup()}decode(e){return this.decoder.decode(e)}encode(e){return this.encoder.encode(e)}pdbLoadRecord(e){let[r,n]=this.recordsOffset[e]??[0,0];return this.fileArrayBuffer.slice(r,n)}loadRecord(e){return this.pdbLoadRecord(this.start+e)}loadMagic(e){return this.recordsMagic[this.start+e]}loadTextBuffer(e){return this.decompress(this.removeTrailingEntries(new Uint8Array(this.loadRecord(e+1))))}loadResource(e){let r=this.pdbLoadRecord(this.resourceStart+e),n=Uo(r.slice(0,4)),o;return n==="FONT"?o=Rg(r):n==="VIDE"||n==="AUDI"?o=new Uint8Array(r.slice(12)):o=new Uint8Array(r),{type:dg(o),raw:o}}getNCX(){let e=this.mobiHeader.indx;if(e<4294967295)return Og(e,this.loadRecord.bind(this))}getMetadata(){let e=this.mobiHeader,r=this.exth;return{identifier:this.mobiHeader.uid.toString(),title:r?.title||e.title,author:r?.creator?.map(Yd)??[],publisher:r?.publisher??"",language:r?.language?.[0]??e.language,published:r?.date??"",description:r?.description??"",subject:r?.subject?.map(Yd)??[],rights:r?.rights??"",contributor:r?.contributor??[]}}getCoverImage(){let e=this.exth,r=Number(e.coverOffset??4294967295),n=Number(e.thumbnailOffset??4294967295),o=r<4294967295?r:n<4294967295?n:void 0;if(o)return this.loadResource(o)}parsePdbHeader(){let e=vr(hg,this.fileArrayBuffer.slice(0,78));e.name=e.name.replace(/\0.*$/,""),this.pdbHeader=e;let r=this.fileArrayBuffer.slice(78,78+e.numRecords*8),n=Array.from({length:e.numRecords},(o,s)=>Kt(r.slice(s*8,s*8+4)));this.recordsOffset=n.map((o,s)=>[o,n[s+1]]),this.recordsMagic=n.map(o=>Uo(this.fileArrayBuffer.slice(o,o+4)))}parseFirstRecord(e){this.palmdocHeader=vr(pg,e.slice(0,16));let r=vr(gg,e);if(r.magic!=="MOBI")throw new Error("Missing MOBI header");let{titleOffset:n,titleLength:o,localeLanguage:s,localeRegion:a}=r,i=fg[s.toString()]??[],c={title:Uo(e.slice(n,n+o)),language:i[a>>2]??i[0]??"unknown"};this.mobiHeader=Object.assign(r,c),this.kf8Header=r.version>=8?vr(mg,e):void 0,this.isKf8=r.version>=8,this.exth=r.exthFlag&64?Ig(e.slice(r.length+16),r.encoding):void 0}setup(){this.decoder=Si(this.mobiHeader.encoding.toString()),this.encoder=new TextEncoder;let e=this.palmdocHeader.compression;if(e===1)this.decompress=n=>n;else if(e===2)this.decompress=Ng;else if(e===17480)this.decompress=Ag(this.mobiHeader,this.loadRecord.bind(this));else throw new Error("Unsupported compression");let r=this.mobiHeader.trailingFlags;this.removeTrailingEntries=Mg(r)}},$g=Object.defineProperty,Hg=(t,e,r)=>e in t?$g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,At=(t,e,r)=>Hg(t,typeof e!="symbol"?e+"":e,r);ki=class{constructor(e,r="./images"){this.file=e,At(this,"fileArrayBuffer"),At(this,"mobiFile"),At(this,"fileName",""),At(this,"fdstTable",[]),At(this,"fullRawLength",0),At(this,"skelTable",[]),At(this,"fragTable",[]),At(this,"chapters",[]),At(this,"toc",[]),At(this,"fragmentOffsets",new Map),At(this,"fragmentSelectors",new Map),At(this,"rawHead",new Uint8Array),At(this,"rawTail",new Uint8Array),At(this,"lastLoadedHead",-1),At(this,"lastLoadedTail",-1),At(this,"resourceCache",new Map),At(this,"chapterCache",new Map),At(this,"idToChapter",new Map),At(this,"resourceSaveDir","./images"),this.fileName=nu(e),this.resourceSaveDir=r}getFileInfo(){return{fileName:this.fileName}}getMetadata(){return this.mobiFile.getMetadata()}getCoverImage(){if(this.resourceCache.has("cover"))return this.resourceCache.get("cover");let e=this.mobiFile.getCoverImage(),r="";return e&&(r=Ya(e.raw,e.type,"cover",this.resourceSaveDir),this.resourceCache.set("cover",r)),r}getSpine(){return this.chapters}getToc(){return this.toc}async innerLoadFile(){this.fileArrayBuffer=await ou(this.file),this.mobiFile=new Za(this.fileArrayBuffer,this.fileName)}async innerInit(){let e=this.mobiFile.loadRecord.bind(this.mobiFile),r=this.mobiFile.kf8Header,n=this.mobiFile.loadRecord(r.fdst),o=vr(wg,n);if(o.magic!=="FDST")throw new Error("Missing FDST record");let s=Array.from({length:o.numEntries},(h,g)=>12+g*8).map(h=>[Kt(n.slice(h,h+4)),Kt(n.slice(h+4,h+8))]);this.fdstTable=s,this.fullRawLength=s[s.length-1][1];let i=Ka(r.skel,e).table.map(({name:h,tagMap:g},S)=>({index:S,name:h,numFrag:g[1][0],offset:g[6][0],length:g[6][1]}));this.skelTable=i;let c=Ka(r.frag,e),d=c.table.map(({name:h,tagMap:g})=>({insertOffset:Number.parseInt(h),selector:c.cncx[g[2][0]],index:g[4][0],offset:g[6][0],length:g[6][1]}));this.fragTable=d;let u=this.skelTable.reduce((h,g,S)=>{let _=h[h.length-1],v=_?.fragEnd??0,E=v+g.numFrag,O=this.fragTable.slice(v,E),N=g.length+O.reduce((T,D)=>T+D.length,0),M=(_?.totalLength??0)+N,I={id:S.toString(),skel:g,frags:O,fragEnd:E,length:N,totalLength:M};return this.idToChapter.set(S,I),h.push(I),h},[]);this.chapters=u;let p=this.mobiFile.getNCX();if(p){let h=({label:g,pos:S,children:_})=>{let[v,E]=S,O=eu(v,E),N=this.fragmentOffsets.get(v);return N?N.push(E):this.fragmentOffsets.set(v,[E]),{label:g,href:O,children:_?.map(h)}};this.toc=p.map(h)}}getGuide(){let e=this.mobiFile.kf8Header.guide;if(e<4294967295){let r=this.mobiFile.loadRecord.bind(this.mobiFile),{table:n,cncx:o}=Ka(e,r);return n.map(({name:s,tagMap:a})=>({label:o[a[1][0]]??"",type:s?.split(/\s/),href:eu(a[6]?.[0]??a[3]?.[0])}))}}loadRaw(e,r){let n=r-this.rawHead.length,o=this.fullRawLength===0?1/0:this.fullRawLength-this.rawTail.length-e;if(n<0||n<o){for(;this.rawHead.length<r;){this.lastLoadedHead++;let a=this.lastLoadedHead,i=this.mobiFile.loadTextBuffer(a);this.rawHead=jo([this.rawHead,i])}return this.rawHead.slice(e,r)}for(;this.fullRawLength-this.rawTail.length>e;){this.lastLoadedTail++;let a=this.mobiFile.palmdocHeader.numTextRecords-1-this.lastLoadedTail,i=this.mobiFile.loadTextBuffer(a);this.rawTail=jo([i,this.rawTail])}let s=this.fullRawLength-this.rawTail.length;return this.rawTail.slice(e-s,r-s)}loadText(e){let{skel:r,frags:n,length:o}=e,s=this.loadRaw(r.offset,r.offset+o),a=s.slice(0,r.length);for(let i of n){let c=i.insertOffset-r.offset,d=r.length+i.offset,u=s.slice(d,d+i.length);a=jo([a.slice(0,c),u,a.slice(c)]);let p=this.fragmentOffsets.get(i.index);if(p)for(let h of p){let g=this.mobiFile.decode(u.buffer).slice(h),S=tu(g);S&&this.cacheFragmentSelector(i.index,h,S)}}return this.mobiFile.decode(a.buffer)}loadChapter(e){let r=Number.parseInt(e);if(Number.isNaN(r))return;if(this.chapterCache.has(r))return this.chapterCache.get(r);let n=this.idToChapter.get(r);if(n){let o=this.replace(this.loadText(n));return this.chapterCache.set(r,o),o}}cacheFragmentSelector(e,r,n){let o=this.fragmentSelectors.get(e);if(o)o.set(r,n);else{let s=new Map;this.fragmentSelectors.set(e,s),s.set(r,n)}}loadFlow(e){if(e<4294967295)return this.loadRaw(this.fdstTable[e][0],this.fdstTable[e][1])}resolveHref(e){if(/^(?!blob|kindle)\w+:/i.test(e))return;let{fid:r,off:n}=zg(e),o=this.chapters.find(S=>S.frags.some(_=>_.index===r));if(!o)return;let s=o.id,a=this.fragmentSelectors.get(r)?.get(n);if(a)return{id:s,selector:a};let{skel:i,frags:c}=o,d=c.find(S=>S.index===r),u=i.offset+i.length+d.offset,p=this.loadRaw(u,u+d.length),h=this.mobiFile.decode(p.buffer).slice(n),g=tu(h);return this.cacheFragmentSelector(r,n,g),{id:s,selector:g}}replaceResources(e){return e.replace(new RegExp(ru,"gi"),(r,n,o,s)=>{if(this.resourceCache.has(r))return this.resourceCache.get(r);let a=n==="flow"?this.loadFlow(Number.parseInt(o)):this.mobiFile.loadResource(Number.parseInt(o,36)-1).raw,i="";if(s===Zd.CSS||s===Zd.SVG){let d=this.mobiFile.decode(a?.buffer);i=this.replaceResources(d)}else i=a;let c=Ya(i,s,o,this.resourceSaveDir);return this.resourceCache.set(r,c),c})}replace(e){let r=[],o=e.match(/<head[^>]*>([\s\S]*)<\/head>/i)[1].match(/<link[^>]*>/gi)??[];for(let i of o){let c=i.match(/href="([^"]*)"/i)[1],d=i.match(ru)[2],u=this.replaceResources(c);r.push({id:d,href:u})}let s=e.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1];return{html:this.replaceResources(s),css:r}}destroy(){this.resourceCache.forEach(e=>{URL.revokeObjectURL(e)})}},Ug=Object.defineProperty,jg=(t,e,r)=>e in t?Ug(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,xr=(t,e,r)=>jg(t,typeof e!="symbol"?e+"":e,r);Ti=class{constructor(e,r="./images"){this.file=e,xr(this,"fileArrayBuffer"),xr(this,"mobiFile"),xr(this,"fileName",""),xr(this,"chapters",[]),xr(this,"idToChapter",new Map),xr(this,"toc",[]),xr(this,"resourceSaveDir","./images"),xr(this,"chapterCache",new Map),xr(this,"resourceCache",new Map),xr(this,"recindexReg",/recindex=["']?(\d+)["']?/),xr(this,"mediarecindexReg",/mediarecindex=["']?(\d+)["']?/),xr(this,"fileposReg",/filepos=["']?(\d+)["']?/),this.fileName=nu(e),this.resourceSaveDir=r}getFileInfo(){return{fileName:this.fileName}}getSpine(){return this.chapters}loadChapter(e){let r=Number.parseInt(e);if(Number.isNaN(r))return;if(this.chapterCache.has(r))return this.chapterCache.get(r);let n=this.idToChapter.get(r);if(!n)return;let o=this.replace(n.text);return this.chapterCache.set(r,o),o}getToc(){return this.toc}getCoverImage(){if(this.resourceCache.has("cover"))return this.resourceCache.get("cover");let e=this.mobiFile.getCoverImage(),r="";return e&&(r=Ya(e.raw,e.type,"cover",this.resourceSaveDir),this.resourceCache.set("cover",r)),r}getMetadata(){return this.mobiFile.getMetadata()}async innerLoadFile(){this.fileArrayBuffer=await ou(this.file),this.mobiFile=new Za(this.fileArrayBuffer,this.fileName)}async innerInit(){let{palmdocHeader:e}=this.mobiFile,r=[];for(let S=0;S<e.numTextRecords;S++)r.push(this.mobiFile.loadTextBuffer(S));let n=jo(r),o=Array.from(n,S=>String.fromCharCode(S)).join(""),s=[],a=new Map,i=0,c=Array.from(o.matchAll(Lg));c.unshift({index:0,input:"",groups:void 0,0:""});for(let S=0;S<c.length;S++){let _=c[S],v=_.index,E=_[0],O=c[S+1]?.index,N=o.slice(v+E.length,O),M=Uint8Array.from(N,D=>D.charCodeAt(0)),I=this.mobiFile.decode(M.buffer),T={id:String(i),text:I,start:v,end:O,size:M.length};s.push(T),a.set(i,T),i++}let d=s[s.length-1].text;s[s.length-1].text=d.slice(0,d.indexOf("</body>"));let u=s[0].text,p=u.indexOf("<body>");s[0].text=u.slice(p+6),this.chapters=s,this.idToChapter=a;let h=u.slice(0,p),g=this.findTocChapter(h);if(g){let S=`<wrapper>${g.text.replace(/filepos=(\d+)/gi,'filepos="$1"')}</wrapper>`,_=await Xd(S,{preserveChildrenOrder:!0,explicitChildren:!0,childkey:"children"}),v=[];this.parseNavMap(_.wrapper.children,v),this.toc=v}}findTocChapter(e){let r=/<reference.*\/>/g,n=e.match(r),o=/type="(.+?)"/,s=/filepos=(.*)/;if(n)for(let a of n){let i=a.match(o)?.[1].trim(),c=a.match(s)?.[1].trim();if(i==="toc"&&c){let d=Number.parseInt(c,10);return this.chapters.find(p=>p.end>d)}}}parseNavMap(e,r){for(let n of e){let o=n["#name"];if(o==="p"||o==="blockquote"){let s={label:"",href:""};if(n.a){let a=n.a[0],i=a._,c=Number(a.$.filepos);s={label:i,href:`filepos:${c}`},r.push(s)}(n.p||n.blockquote)&&(s.children=[],this.parseNavMap(n.children,s.children))}}}loadResource(e){if(this.resourceCache.has(String(e)))return this.resourceCache.get(String(e));let{type:r,raw:n}=this.mobiFile.loadResource(e-1),o=Ya(n,r,String(e),this.resourceSaveDir);return this.resourceCache.set(String(e),o),o}replace(e){return e=e.replace(/<img[^>]*>/g,r=>{let n=r.match(this.recindexReg)[1],o=this.loadResource(Number.parseInt(n));return r.replace(this.recindexReg,`src="${o}"`)}),e=e.replace(/<(video|audio)[^>]*>/g,r=>{let n=r.match(this.recindexReg)[1],o=this.loadResource(Number.parseInt(n));r=r.replace(this.mediarecindexReg,`src="${o}"`);let s=r.match(this.recindexReg)?.[1];if(s){let a=this.loadResource(Number.parseInt(s));r=r.replace(this.recindexReg,`poster="${a}"`)}return r}),e=e.replace(/<a[^>]*>/g,r=>{let n=r.match(this.fileposReg);if(!n)return r;let o=n[1];return r.replace(this.fileposReg,`href="filepos:${o}"`)}),{html:e,css:[]}}resolveHref(e){let r=e.match(/filepos:(\d+)/);if(!r)return;let n=r[1],o=Number(n),s=this.chapters.find(a=>a.end>o);if(s)return{id:s.id,selector:`[id="filepos:${n}"]`}}destroy(){this.resourceCache.forEach(e=>{URL.revokeObjectURL(e)}),this.resourceCache.clear()}}});function Qa(t,e,r){let n="";for(let o=0;o<r;o+=1){let s=t[e+o]??0;n+=s>=32&&s<127?String.fromCharCode(s):""}return n}function Go(t,e){return(t[e]??0)<<8|(t[e+1]??0)}function iu(t,e){return(t[e]??0)*16777216+((t[e+1]??0)<<16|(t[e+2]??0)<<8|(t[e+3]??0))>>>0}function Yr(t,e){return(t[e+3]??0)*16777216+((t[e+2]??0)<<16|(t[e+1]??0)<<8|(t[e]??0))>>>0}function Wg(t){if(t.length<86)throw new Error("\u6587\u4EF6\u592A\u5C0F\uFF0C\u4E0D\u662F\u6709\u6548\u7684 MOBI/PalmDOC \u6587\u4EF6\u3002");let e=Qa(t,60,4).trim(),r=Qa(t,64,4).trim(),n=`${e}${r}`;if(n!=="BOOKMOBI"&&n!=="TEXtREAd")throw new Error("\u6587\u4EF6\u4E0D\u662F MOBI/PalmDOC \u683C\u5F0F\uFF08\u7F3A\u5C11 PDB \u6587\u4EF6\u5934\uFF09\u3002");let o=Go(t,76);if(o<1)throw new Error("MOBI \u8BB0\u5F55\u8868\u4E3A\u7A7A\u3002");if(78+o*8+2>t.length)throw new Error("MOBI \u8BB0\u5F55\u8868\u5DF2\u635F\u574F\u3002");let s=[];for(let _=0;_<o;_+=1){let v=iu(t,78+_*8);if(v<78||v>=t.length)throw new Error("MOBI \u8BB0\u5F55\u504F\u79FB\u65E0\u6548\uFF0C\u6587\u4EF6\u53EF\u80FD\u5DF2\u635F\u574F\u3002");if(s.length>0&&v<s[s.length-1])throw new Error("MOBI \u8BB0\u5F55\u987A\u5E8F\u65E0\u6548\u3002");s.push(v)}let a=s[0];if(a+16>t.length)throw new Error("MOBI \u6587\u4EF6\u5934\u5DF2\u635F\u574F\u3002");let i=Go(t,a),c=iu(t,a+4),d=Go(t,a+8),u=Go(t,a+10),p=Go(t,a+12);if(p!==0)throw new Error("\u8BE5 MOBI \u6587\u4EF6\u53D7 DRM \u4FDD\u62A4\uFF0C\u65E0\u6CD5\u6253\u5F00\u3002");if(![Gg,1,du,Ci].includes(i))throw new Error(`\u4E0D\u652F\u6301\u7684 MOBI \u538B\u7F29\u65B9\u5F0F\uFF08${i}\uFF09\u3002`);let h=0,g=65001,S=!1;return n==="BOOKMOBI"&&Qa(t,a+16,4)==="MOBI"&&(h=Yr(t,a+36),g=Yr(t,a+28)||65001,S=h===8),{pdbType:n,numRecords:o,offsets:s,compression:i,textLength:c,recordCount:d,recordSize:u,encryption:p,version:h,encoding:g,isKf8:S}}function qg(t,e,r){let n=e[r];if(n==null)return null;let o=e[r+1]??t.length;return o<=n?new Uint8Array(0):t.subarray(n,o)}function Vg(t){let e=t instanceof Uint8Array?t:new Uint8Array(t),r=[],n=0;for(;n<e.length;){let o=e[n];if(n+=1,o===0)r.push(0);else if(o<=8)for(let s=0;s<o&&n<e.length;s+=1)r.push(e[n]),n+=1;else if(o<=127)r.push(o);else if(o<=191){if(n>=e.length)break;let s=o<<8|e[n];n+=1;let a=s>>3&2047,i=(s&7)+3,c=r.length-a;for(let d=0;d<i;d+=1)r.push(c+d>=0?r[c+d]:0)}else r.push(32),r.push(o^128)}return Uint8Array.from(r)}function Xg(t){let e=0;for(let o of t)e+=o.length;let r=new Uint8Array(e),n=0;for(let o of t)r.set(o,n),n+=o.length;return r}function Ai(t,e){let r=[];e&&r.push(e),r.push("utf-8","gb18030","windows-1252");for(let n of r)try{return new TextDecoder(n,{fatal:!0}).decode(t)}catch{}return new TextDecoder("utf-8").decode(t)}function Kg(t,e){let r=e.recordCount>0?e.recordCount:e.numRecords-1,n=[];for(let s=1;s<=r;s+=1){let a=qg(t,e.offsets,s);if(!a)break;if(e.compression===Ci)throw new Error("\u8BE5 MOBI \u4F7F\u7528 HUFF/CDIC \u538B\u7F29\uFF0C\u5185\u7F6E\u89E3\u6790\u5668\u65E0\u6CD5\u5904\u7406\u3002");n.push(e.compression===du?Vg(a):a)}if(n.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u6587\u672C\u5185\u5BB9\u3002");let o=Xg(n);return e.textLength>0&&e.textLength<=o.length&&(o=o.subarray(0,e.textLength)),o}function Yg(t,e){let r={title:"",author:"",language:""};if(e.pdbType!=="BOOKMOBI")return r;let n=e.offsets[0],o=uu[e.encoding]||"utf-8",s=Yr(t,n+84),a=Yr(t,n+88);s>0&&a>0&&n+s+a<=t.length&&(r.title=st(Ai(t.subarray(n+s,n+s+a),o)));let i=Yr(t,n+20),c=Yr(t,n+128),d=n+16+i;if(c&64&&Qa(t,d,4)==="EXTH"&&d+12<=t.length){let u=Yr(t,d+4),p=Yr(t,d+8),h=Math.min(t.length,d+u,d+12+p*8+4096),g=d+12;for(let S=0;S<p&&g+8<=h;S+=1){let _=Yr(t,g),v=Yr(t,g+4);if(v<8||g+v>t.length)break;let E=t.subarray(g+8,g+v),O=st(Ai(E,o));_===100&&O&&!r.author?r.author=O:_===503&&O?r.title=O:_===524&&O&&!r.language&&(r.language=O),g+=v}}return r}function lu(t,e){if(!Number.isFinite(e)||e<0)return null;for(let r=0;r<t.length;r+=1){let n=Number(t[r]?.start),o=Number(t[r]?.end);if(Number.isFinite(n)&&Number.isFinite(o)&&e>=n&&e<o)return r}for(let r=0;r<t.length;r+=1){let n=Number(t[r]?.start);if(Number.isFinite(n)&&n>e)return r}return t.length>0?t.length-1:null}function cu(t){let e=String(t||"");return e.startsWith("#")?e.slice(1):""}function Zg(t,e,{fileName:r,tracker:n,warn:o}){let s={};try{s=t.getMetadata()||{}}catch{s={}}let a=[];try{a=t.getSpine()||[]}catch{a=[]}if(!Array.isArray(a)||a.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u9605\u8BFB\u987A\u5E8F\u3002");let i=new Map;a.forEach((T,D)=>{T?.id!=null&&i.set(String(T.id),D)});let c=0,d=()=>`b${c+=1}`,u=T=>{let D=String(T||"").trim();if(!D)return null;if(/^blob:/i.test(D))return n.add(D),{src:D};if(/^data:/i.test(D)){let L=hn(D);return L?{src:n.create(L)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684 MOBI \u5185\u5D4C\u56FE\u7247\u3002"),null)}return/^(https?:)?\/\//i.test(D)?(o("\u5DF2\u8DF3\u8FC7 MOBI \u4E2D\u7684\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\u3002"),null):(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u6790\u7684 MOBI \u56FE\u7247\u3002"),null)},p=T=>D=>{let L=String(D||"").trim();if(!L)return null;if(/^(https?:|mailto:)/i.test(L))return{external:!0,href:L};if(L.startsWith("#"))return{chapter:T,anchor:L.slice(1)};if(L.startsWith("//")||/^(?!filepos:|kindle:)[a-z][a-z0-9+.-]*:/i.test(L))return null;try{let A=t.resolveHref(L);if(A?.id!=null){let F=i.get(String(A.id));if(F!=null){let te=cu(A.selector);return te?{chapter:F,anchor:te}:{chapter:F}}}}catch{}let m=/filepos:(\d+)/i.exec(L);if(m){let A=lu(a,Number(m[1]));if(A!=null)return{chapter:A}}return null},h=[];for(let T=0;T<a.length;T+=1){let D="";try{D=t.loadChapter(a[T].id)?.html||""}catch{o(`\u7B2C ${T+1} \u7AE0\u52A0\u8F7D\u5931\u8D25\uFF0C\u5DF2\u8DF3\u8FC7\u8BE5\u7AE0\u5185\u5BB9\u3002`)}let L=[];if(D){let m=Wr(D),A=m?.body||m?.documentElement||null;A&&(L=Fn(A,{nextId:d,warn:o,chapterIndex:T,resolveImage:u,resolveLink:p(T)}))}h.push({id:`ch${T}`,title:"",blocks:L})}let g=[],S=(T,D)=>{if(Array.isArray(T))for(let L of T){if(!L)continue;let m=st(L.label||L.title||"").slice(0,200),A=String(L.href||""),F=null,te="";if(A){try{let B=t.resolveHref(A);if(B?.id!=null){let le=i.get(String(B.id));le!=null&&(F=le,te=cu(B.selector))}}catch{}if(F==null){let B=/filepos:(\d+)/i.exec(A);B&&(F=lu(a,Number(B[1])))}}m&&F!=null&&g.push({title:m,chapterIndex:F,depth:D,...te?{anchor:te}:{}}),S(L.children,D+1)}};try{S(t.getToc?.()||[],0)}catch{o("MOBI \u76EE\u5F55\u8BFB\u53D6\u5931\u8D25\uFF0C\u5DF2\u6309\u7AE0\u8282\u6807\u9898\u751F\u6210\u76EE\u5F55\u3002")}let _=Fo(h,g),v=st(s.title||"")||$n(r),O=(Array.isArray(s.author)?s.author:[s.author]).map(T=>st(T||"")).filter(Boolean).join(", "),N="";try{let T=t.getCoverImage();T&&(n.add(T),N=T)}catch{}let M={title:v,chapters:h,toc:_};O&&(M.author=O);let I=st(s.language||"");return I&&(M.language=I),N&&(M.cover=N),M}function Qg(t){return String(t||"").split(/<\s*(?:mbp:)?pagebreak[^>]*>/gi)}function Jg(t,e,{fileName:r,warn:n}){if(e.compression===Ci)throw new Error("\u8BE5 MOBI \u6587\u4EF6\u4F7F\u7528 HUFF/CDIC \u538B\u7F29\uFF0C\u5185\u7F6E\u89E3\u6790\u5668\u65E0\u6CD5\u5904\u7406\u3002");let o=Yg(t,e),s=Kg(t,e),a=em(e.encoding),i=Ai(s,a),c=o.title||$n(r),d=0,u=()=>`b${d+=1}`,p=/<\s*(?:html|body|p|div|h[1-6]|br)\b/i.test(i),h;if(p){let _=Qg(i),v=new TextEncoder,E=[],O=0;for(let N of _){let M=v.encode(N).length;E.push({start:O,end:O+M}),O+=M}h=[],_.forEach((N,M)=>{if(!N.trim())return;let I=Wr(N),T=I?.body||I?.documentElement||null,D=h.length,L=T?Fn(T,{nextId:u,warn:n,chapterIndex:D,resolveImage:()=>(n("\u5185\u7F6E MOBI \u89E3\u6790\u5668\u65E0\u6CD5\u63D0\u53D6\u56FE\u7247\u8D44\u6E90\u3002"),null),resolveLink:m=>{let A=String(m||"").trim();if(!A)return null;if(/^(https?:|mailto:)/i.test(A))return{external:!0,href:A};if(A.startsWith("#"))return{chapter:D,anchor:A.slice(1)};let F=/filepos:(\d+)/i.exec(A);if(F){let te=Number(F[1]);for(let B=0;B<E.length;B+=1)if(te>=E[B].start&&te<E[B].end){let le=_.slice(0,B).filter(fe=>fe.trim()).length;return le<h.length?{chapter:le}:null}}return null}}):[];h.push({id:`ch${D}`,title:"",blocks:L})})}else h=xi(i,{nextId:u,title:c});if(!h||h.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let g=Fo(h,[]),S={title:c,chapters:h,toc:g};return o.author&&(S.author=o.author),o.language&&(S.language=o.language),S}function em(t){return uu[t]||""}async function go(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Vr(),s=fn(),a=null;try{let i=await qr(t),c=Wg(i);if(c.pdbType==="BOOKMOBI"){let u=c.isKf8||/^(azw3?|kf8)$/i.test(String(r).split(".").pop()||"");try{a=u?await Ei(i):await Ni(i)}catch{try{a=u?await Ni(i):await Ei(i)}catch{a=null}a||o("MOBI \u89E3\u6790\u5E93\u65E0\u6CD5\u6253\u5F00\u8BE5\u6587\u4EF6\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\uFF08\u53EF\u80FD\u7F3A\u5C11\u56FE\u7247\u4E0E\u76EE\u5F55\u4FE1\u606F\uFF09\u3002")}if(a)try{let p=a.getSpine?.()||[];(!Array.isArray(p)||p.length===0)&&(a.destroy?.(),a=null,o("MOBI \u9605\u8BFB\u987A\u5E8F\u4E3A\u7A7A\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\u3002"))}catch{a.destroy?.(),a=null,o("MOBI \u89E3\u6790\u5E93\u8FD4\u56DE\u5F02\u5E38\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\u3002")}}return{...a?Zg(a,c,{fileName:r,tracker:s,warn:o}):Jg(i,c,{fileName:r,warn:o}),warnings:n,dispose:()=>{try{a?.destroy?.()}catch{}s.dispose()}}}catch(i){try{a?.destroy?.()}catch{}throw s.dispose(),mr(i,"\u65E0\u6CD5\u89E3\u6790 MOBI \u6587\u4EF6")}}var Gg,du,Ci,uu,fu=rr(()=>{su();Dn();Do();ja();Hn();Gg=0,du=2,Ci=17480,uu={65001:"utf-8",65e3:"utf-7",1250:"windows-1250",1251:"windows-1251",1252:"windows-1252",932:"shift_jis",936:"gb18030",949:"euc-kr",950:"big5"}});var Mi={};ji(Mi,{extensionOf:()=>Ha,parseBook:()=>am});function nm(t){let e=t?`\u201C.${t}\u201D`:"\u8BE5\u6587\u4EF6";return new Error(`\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u683C\u5F0F\uFF1A${e}\u3002\u76EE\u524D\u652F\u6301 ${rm}\u3002`)}function Ii(){return new Error("PDF \u6587\u4EF6\u8BF7\u4F7F\u7528 PDF \u9605\u8BFB\u6A21\u5F0F\u6253\u5F00\uFF08PDF \u7531\u72EC\u7ACB\u7684\u9605\u8BFB\u5668\u5904\u7406\uFF09\u3002")}async function om(t){let e;try{e=new Uint8Array(await t.slice(0,256).arrayBuffer())}catch{return null}if(e.length>=8){if(String.fromCharCode(...e.subarray(0,4))==="%PDF")return"pdf";if(e[0]===80&&e[1]===75)return"epub";let o="";for(let s=60;s<68;s+=1){let a=e[s]??0;o+=a>=32&&a<127?String.fromCharCode(a):" "}if(o==="BOOKMOBI"||o==="TEXtREAd")return"mobi"}let r=new TextDecoder("utf-8").decode(e.subarray(0,Math.min(e.length,200)));return/^\s*(?:<!doctype\s+html|<html|<head|<body)/i.test(r)?"html":Ua(r)?null:"txt"}async function am(t,e={}){let r=typeof e.fileName=="string"?e.fileName:"",n=typeof e.mime=="string"?e.mime:"",o=Ha(r);if(o==="pdf")throw Ii();let s=Lr[o]||null;if(!s){let a=n.toLowerCase().split(";")[0].trim();if(a==="application/pdf")throw Ii();s=tm[a]||null}if(!s&&!o){let a=await om(t);if(a==="pdf")throw Ii();s=a&&Lr[a]||null}if(!s)throw nm(o);try{let a=await s.parse(t,{fileName:r,mime:n});return{...a,title:a.title||$n(r),format:s.format,warnings:Array.isArray(a.warnings)?a.warnings:[]}}catch(a){throw mr(a,"\u65E0\u6CD5\u6253\u5F00\u6587\u6863")}}var Lr,tm,rm,Ri=rr(()=>{kd();Td();Cd();fu();ja();Hn();Lr={epub:{parse:_d,format:"epub"},mobi:{parse:go,format:"mobi"},prc:{parse:go,format:"mobi"},azw:{parse:go,format:"mobi"},azw3:{parse:go,format:"mobi"},kf8:{parse:go,format:"mobi"},txt:{parse:vi,format:"txt"},text:{parse:vi,format:"txt"},md:{parse:Ho,format:"md"},markdown:{parse:Ho,format:"md"},mdown:{parse:Ho,format:"md"},mkd:{parse:Ho,format:"md"},html:{parse:Bo,format:"html"},htm:{parse:Bo,format:"html"},xhtml:{parse:Bo,format:"html"},xht:{parse:Bo,format:"html"}},tm={"application/epub+zip":Lr.epub,"application/x-mobipocket-ebook":Lr.mobi,"application/x-mobi":Lr.mobi,"application/vnd.amazon.ebook":Lr.mobi,"text/plain":Lr.txt,"text/markdown":Lr.md,"text/x-markdown":Lr.md,"text/html":Lr.html,"application/xhtml+xml":Lr.html},rm="EPUB\u3001MOBI/KF8\u3001TXT\u3001Markdown \u548C HTML"});var vm={};ji(vm,{PANEL_ID:()=>zi,apply:()=>xm,inject:()=>mm,name:()=>gm});module.exports=$u(vm);var nx=require("react");var H=Ct(require("react"),1);var Tn=Ct(require("react"),1);var wm=require("react"),U=require("react/jsx-runtime");function ot({size:t=18,children:e,viewBox:r="0 0 24 24",fill:n="none",strokeWidth:o=1.7,...s}){return(0,U.jsx)("svg",{width:t,height:t,viewBox:r,fill:n,stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",...s,children:e})}function Wi(t){return(0,U.jsxs)(ot,{...t,children:[(0,U.jsx)("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5Z"}),(0,U.jsx)("path",{d:"M4 18.5A2.5 2.5 0 0 1 6.5 16H20"}),(0,U.jsx)("path",{d:"M8 7h8M8 10.5h5"})]})}function is(t){return(0,U.jsxs)(ot,{...t,children:[(0,U.jsx)("path",{d:"M12 6.5C10.6 5.2 8.7 4.6 6.5 4.6H3v13h3.9c2 0 3.8.6 5.1 1.8 1.3-1.2 3.1-1.8 5.1-1.8H21v-13h-3.5c-2.2 0-4.1.6-5.5 1.9Z"}),(0,U.jsx)("path",{d:"M12 6.5v12.9"})]})}function qi(t){return(0,U.jsxs)(ot,{...t,children:[(0,U.jsx)("path",{d:"M19 12H5"}),(0,U.jsx)("path",{d:"m11 18-6-6 6-6"})]})}function Vi(t){return(0,U.jsxs)(ot,{...t,children:[(0,U.jsx)("path",{d:"M12 16V4"}),(0,U.jsx)("path",{d:"m7 9 5-5 5 5"}),(0,U.jsx)("path",{d:"M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15"})]})}function ls(t){return(0,U.jsxs)(ot,{...t,children:[(0,U.jsx)("circle",{cx:"11",cy:"11",r:"7"}),(0,U.jsx)("path",{d:"m20 20-3.6-3.6"})]})}function ln(t){return(0,U.jsxs)(ot,{...t,children:[(0,U.jsx)("path",{d:"m12 3 1.5 4.2L18 9l-4.5 1.8L12 15l-1.5-4.2L6 9l4.5-1.8L12 3Z"}),(0,U.jsx)("path",{d:"m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"}),(0,U.jsx)("path",{d:"m5 13 .7 1.8L7.5 15.5l-1.8.7L5 18l-.7-1.8L2.5 15.5l1.8-.7L5 13Z"})]})}function Vn(t){return(0,U.jsxs)(ot,{...t,children:[(0,U.jsx)("path",{d:"M4 5h8M8 3v2c0 4.2-1.8 7.2-5 9"}),(0,U.jsx)("path",{d:"M5 10c1.8 2.2 4 3.6 6.8 4.4"}),(0,U.jsx)("path",{d:"m13 20 3.6-9L20 20"}),(0,U.jsx)("path",{d:"M14.6 16.8h4.8"})]})}function dr(t){return(0,U.jsx)(ot,{...t,children:(0,U.jsx)("path",{d:"m6 6 12 12M18 6 6 18"})})}function Qo(t){return(0,U.jsx)(ot,{...t,children:(0,U.jsx)("path",{d:"m15 18-6-6 6-6"})})}function Jo(t){return(0,U.jsx)(ot,{...t,children:(0,U.jsx)("path",{d:"m9 18 6-6-6-6"})})}function cs(t){return(0,U.jsxs)(ot,{...t,children:[(0,U.jsx)("path",{d:"M8 6h12M8 12h12M8 18h12"}),(0,U.jsx)("path",{d:"M4 6h.01M4 12h.01M4 18h.01"})]})}function ea(t){return(0,U.jsxs)(ot,{...t,children:[(0,U.jsx)("circle",{cx:"12",cy:"12",r:"3.2"}),(0,U.jsx)("path",{d:"M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"})]})}function Xn(t){return(0,U.jsxs)(ot,{...t,children:[(0,U.jsx)("path",{d:"M4 7h16M9 7V5h6v2M7 7l.7 12.2A1.8 1.8 0 0 0 9.5 21h5a1.8 1.8 0 0 0 1.8-1.8L17 7"}),(0,U.jsx)("path",{d:"M10 11v6M14 11v6"})]})}function Xi(t){return(0,U.jsxs)(ot,{...t,children:[(0,U.jsx)("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),(0,U.jsx)("path",{d:"M5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V5"})]})}function ta(t){return(0,U.jsx)(ot,{...t,children:(0,U.jsx)("path",{d:"M12 5v14M5 12h14"})})}function Ki(t){return(0,U.jsx)(ot,{...t,children:(0,U.jsx)("path",{d:"M5 12h14"})})}function Yi(t){return(0,U.jsxs)(ot,{...t,children:[(0,U.jsx)("path",{d:"M20 11a8 8 0 1 0-2.3 6.3"}),(0,U.jsx)("path",{d:"M20 4v7h-7"})]})}function Zi(t){return(0,U.jsxs)(ot,{...t,children:[(0,U.jsx)("path",{d:"M14 4h6v6M20 4l-9 9"}),(0,U.jsx)("path",{d:"M19 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"})]})}function ra({size:t=18}){return(0,U.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[(0,U.jsx)("path",{fill:"#4285F4",d:"M22.6 12.23c0-.78-.07-1.53-.2-2.25H12v4.26h5.94a5.08 5.08 0 0 1-2.2 3.33v2.77h3.56c2.08-1.92 3.3-4.74 3.3-8.11Z"}),(0,U.jsx)("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.77c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"}),(0,U.jsx)("path",{fill:"#FBBC05",d:"M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"}),(0,U.jsx)("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.2 1.64l3.15-3.15A10.97 10.97 0 0 0 12 1 11 11 0 0 0 2.18 7.06L5.84 9.9C6.71 7.3 9.14 5.38 12 5.38Z"})]})}function na({size:t=18}){return(0,U.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[(0,U.jsx)("path",{fill:"currentColor",d:"M12 3 1.5 8.5 12 14l8.6-4.5v6.2h1.9V8.5L12 3Z",opacity:".9"}),(0,U.jsx)("path",{fill:"currentColor",d:"M6.2 11.4v4.1c0 2.2 2.6 4 5.8 4s5.8-1.8 5.8-4v-4.1L12 14.4l-5.8-3Z",opacity:".65"})]})}function Qi(t){return(0,U.jsxs)(ot,{...t,children:[(0,U.jsx)("path",{d:"m15 4 1 2.2L18.2 7 16 8 15 10.2 14 8l-2.2-1L14 6.2 15 4Z"}),(0,U.jsx)("path",{d:"m5 19 8.5-8.5"}),(0,U.jsx)("path",{d:"m4 14 6 6"})]})}function Ji(t){return(0,U.jsxs)(ot,{...t,children:[(0,U.jsx)("path",{d:"M20 13 13 20a2 2 0 0 1-2.8 0L3 12.8V3h9.8L20 10.2a2 2 0 0 1 0 2.8Z"}),(0,U.jsx)("circle",{cx:"7.5",cy:"7.5",r:"1.2"})]})}function oa(t){return(0,U.jsxs)(ot,{...t,children:[(0,U.jsx)("path",{d:"m14 4 6 6-9.5 9.5H5v-5L14 4Z"}),(0,U.jsx)("path",{d:"M12 21h9"}),(0,U.jsx)("path",{d:"M14 6.5 17.5 10"})]})}function aa(t){return(0,U.jsxs)(ot,{...t,children:[(0,U.jsx)("path",{d:"M12 3a9 9 0 1 0 0 18h1.2a1.8 1.8 0 0 0 1.3-3l-.6-.7a1.6 1.6 0 0 1 1.2-2.7h1.6A4.3 4.3 0 0 0 21 10.3 7.7 7.7 0 0 0 12 3Z"}),(0,U.jsx)("circle",{cx:"7.5",cy:"11",r:"1"}),(0,U.jsx)("circle",{cx:"10",cy:"7.2",r:"1"}),(0,U.jsx)("circle",{cx:"15",cy:"7.2",r:"1"}),(0,U.jsx)("circle",{cx:"17",cy:"11",r:"1"})]})}function ds(t){return(0,U.jsx)(ot,{...t,children:(0,U.jsx)("path",{d:"M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"})})}function el(t){return(0,U.jsx)(ot,{...t,children:(0,U.jsx)("path",{d:"M3 8h5V3M21 8h-5V3M3 16h5v5M21 16h-5v5"})})}function sa(t){return(0,U.jsxs)(ot,{...t,children:[(0,U.jsx)("path",{d:"M12 3v12"}),(0,U.jsx)("path",{d:"m7 10 5 5 5-5"}),(0,U.jsx)("path",{d:"M4 18v2h16v-2"})]})}function tl(t){return(0,U.jsxs)(ot,{...t,children:[(0,U.jsx)("path",{d:"M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"}),(0,U.jsx)("path",{d:"M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"})]})}function rl(t){return(0,U.jsxs)(ot,{...t,children:[(0,U.jsx)("path",{d:"M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"}),(0,U.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})}function nl(t){return(0,U.jsxs)(ot,{...t,children:[(0,U.jsx)("path",{d:"m3 3 18 18"}),(0,U.jsx)("path",{d:"M10.6 6.1A10.7 10.7 0 0 1 12 6c6 0 9.5 6 9.5 6a16.5 16.5 0 0 1-3.2 3.7"}),(0,U.jsx)("path",{d:"M6.2 6.7C3.9 8.4 2.5 12 2.5 12S6 18 12 18c1.3 0 2.5-.3 3.5-.8"}),(0,U.jsx)("path",{d:"M9.9 9.9a3 3 0 0 0 4.2 4.2"})]})}var Hu="dsh-reader";var Mt="books",$t="annotations",Dt="assets",Ar="pdfTranslations",ia="reader-background",ol="dsh-reader:settings:v1";var It=Object.freeze({settingsVersion:2,autoTranslate:!1,hideTranslations:!1,fontSize:18,lineHeight:1.85,tocWidth:260,readingMode:"scroll",pageAnimation:"slide",bookAnimation:"slide",showToc:!0,aiOpen:!1,theme:"auto",fontFamily:"serif",fontWeight:400,contentWidth:760,brightness:1,backgroundPreset:"paper",customBackground:"#fbf7ee",textTone:"auto",backgroundImageKey:"",backgroundImageOpacity:.26,backgroundImageBlur:0,annotationPanelOpen:!1}),la=Object.freeze([{id:"book",label:"\u4E66\u7C4D",hint:"EPUB / MOBI / TXT \u4E0E\u4E66\u7C4D\u578B PDF"},{id:"paper",label:"\u6587\u732E",hint:"\u8BBA\u6587\u3001\u62A5\u544A\u3001\u5B66\u672F PDF"},{id:"document",label:"\u6587\u6863",hint:"Markdown / HTML \u7B49\u77ED\u6587\u6863"}]),us=new Set(la.map(t=>t.id)),Uu=new Set(["paper","white","sepia","green","night","custom"]),ju=new Set(["serif","sans","kai","system"]),Gu=new Set(["scroll","book"]),Wu=new Set(["slide","fade","push","flip"]),qu=new Set(["slide","cover","flip"]),Vu=new Set([400,500,600]),Xu=new Set(["auto","dark","light"]);function Pt(){return new Promise((t,e)=>{if(typeof indexedDB>"u"){e(new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 IndexedDB\uFF0C\u65E0\u6CD5\u4FDD\u5B58\u4E66\u67B6\u3002"));return}let r=indexedDB.open(Hu,3);r.onupgradeneeded=()=>{let n=r.result;n.objectStoreNames.contains(Mt)||n.createObjectStore(Mt,{keyPath:"id"}).createIndex("lastOpenedAt","lastOpenedAt"),n.objectStoreNames.contains($t)||n.createObjectStore($t,{keyPath:"id"}).createIndex("bookId","bookId"),n.objectStoreNames.contains(Dt)||n.createObjectStore(Dt,{keyPath:"key"}),n.objectStoreNames.contains(Ar)||n.createObjectStore(Ar,{keyPath:"key"}).createIndex("bookId","bookId")},r.onsuccess=()=>t(r.result),r.onerror=()=>e(r.error??new Error("\u6253\u5F00\u4E66\u67B6\u6570\u636E\u5E93\u5931\u8D25\u3002")),r.onblocked=()=>e(new Error("\u4E66\u67B6\u6570\u636E\u5E93\u88AB\u53E6\u4E00\u4E2A\u9875\u9762\u5360\u7528\uFF0C\u8BF7\u5173\u95ED\u5176\u5B83 DSH \u9875\u9762\u540E\u91CD\u8BD5\u3002"))})}function ur(t){return new Promise((e,r)=>{t.oncomplete=()=>e(),t.onerror=()=>r(t.error??new Error("\u4E66\u67B6\u5199\u5165\u5931\u8D25\u3002")),t.onabort=()=>r(t.error??new Error("\u4E66\u67B6\u5199\u5165\u5DF2\u53D6\u6D88\u3002"))})}function kn(t){let e=/\.([^./\\]+)$/u.exec(String(t??""));return e?e[1].toLowerCase():""}function Kn(t){switch(t){case"pdf":return"PDF";case"epub":return"EPUB";case"mobi":return"MOBI";case"azw":return"AZW";case"azw3":return"AZW3";case"txt":return"TXT";case"md":return"Markdown";case"html":return"HTML";default:return String(t??"\u6587\u4EF6").toUpperCase()}}function Yn(t){return la.find(e=>e.id===t)?.label??"\u672A\u5206\u7C7B"}function fs(t){return["pdf","epub","mobi","azw","azw3","txt","md","markdown","html","htm"].includes(kn(t))}function Ku(t){let e=String(t??"");return e.length===0?0:(e.match(/[\u3400-\u9fff\uf900-\ufaff]/gu)??[]).length/e.length}function hs(t={}){let e=String(t.format||kn(t.title)||"").toLowerCase(),r=`${t.title||""} ${t.author||""}`;return e==="pdf"?/(?:^|\b)(book|novel|textbook|edition|volume|monograph|文集|全集|教材|小说|专著|丛书)(?:\b|$)/iu.test(r)||Number(t.size)>45*1024*1024?"book":"paper":["epub","mobi","azw","azw3","txt"].includes(e)?"book":"document"}async function Yu(t){if(!globalThis.crypto?.subtle){let r=2166136261,n=new Uint8Array(t);for(let o=0;o<n.length;o+=1)r^=n[o],r=Math.imul(r,16777619);return(r>>>0).toString(16).padStart(8,"0")}let e=await globalThis.crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(e)].map(r=>r.toString(16).padStart(2,"0")).join("")}async function Zu(t){let e=await t.slice(0,Math.min(t.size,1048576)).arrayBuffer();return`${(await Yu(e)).slice(0,20)}-${t.size}-${String(t.name).replace(/[^\w.-]+/gu,"_").slice(-48)}`}async function ps(){let t=await Pt();try{let n=t.transaction(Mt,"readonly").objectStore(Mt).index("lastOpenedAt").openCursor(null,"prev"),o=[];return await new Promise((s,a)=>{n.onsuccess=()=>{let i=n.result;if(!i){s();return}let c=i.value;o.push({id:c.id,title:c.title,author:c.author,format:c.format,size:c.size,addedAt:c.addedAt,lastOpenedAt:c.lastOpenedAt,progress:c.progress??null,language:c.language??"",cover:typeof c.cover=="string"?c.cover:"",category:us.has(c.category)?c.category:hs(c),categoryManual:!!c.categoryManual}),i.continue()},n.onerror=()=>a(n.error)}),o}finally{t.close()}}async function vo(t){let e=await Pt();try{let n=e.transaction(Mt,"readonly").objectStore(Mt).get(t);return await new Promise((o,s)=>{n.onsuccess=()=>o(n.result??null),n.onerror=()=>s(n.error)})}finally{e.close()}}async function al(t,{title:e,author:r,language:n}={}){if(!fs(t.name))throw new Error(`\u6682\u4E0D\u652F\u6301 .${kn(t.name)||"\u672A\u77E5"} \u6587\u4EF6\u3002\u8BF7\u9009\u62E9 PDF / EPUB / MOBI / TXT / Markdown / HTML\u3002`);if(t.size>335544320)throw new Error(`\u6587\u4EF6\u8D85\u8FC7 ${Math.round(335544320/1024/1024)} MB\uFF0C\u6D4F\u89C8\u5668\u4E66\u67B6\u65E0\u6CD5\u5BB9\u7EB3\u3002`);let o=await Zu(t),s=await vo(o),a=Date.now(),i=s?.id??o,c=kn(t.name)==="markdown"?"md":kn(t.name),d={title:String(e??s?.title??t.name.replace(/\.[^.]+$/u,"")).trim()||"\u672A\u547D\u540D\u6587\u6863",author:String(r??s?.author??"").trim(),language:String(n??s?.language??""),format:c,size:t.size},u={id:i,...d,category:s?.category&&us.has(s.category)?s.category:hs(d),categoryManual:!!s?.categoryManual,cover:typeof s?.cover=="string"?s.cover:"",addedAt:s?.addedAt??a,lastOpenedAt:a,progress:s?.progress??null,blob:t},p=await Pt();try{let h=p.transaction(Mt,"readwrite");return h.objectStore(Mt).put(u),await ur(h),u}catch(h){throw h?.name==="QuotaExceededError"?new Error("\u6D4F\u89C8\u5668\u5B58\u50A8\u7A7A\u95F4\u5DF2\u6EE1\uFF0C\u65E0\u6CD5\u52A0\u5165\u4E66\u67B6\u3002\u8BF7\u5220\u9664\u4E00\u4E9B\u4E66\u540E\u91CD\u8BD5\u3002"):h}finally{p.close()}}async function Zn(t,e){let r=await vo(t);if(!r)return null;let n={...r,...e},o=await Pt();try{let s=o.transaction(Mt,"readwrite");return s.objectStore(Mt).put(n),await ur(s),n}finally{o.close()}}async function sl(t,e,{manual:r=!0}={}){if(!us.has(e))throw new Error("\u672A\u77E5\u7684\u4E66\u7C4D\u5206\u7C7B\u3002");return Zn(t,{category:e,categoryManual:r})}async function il(){let t=await ps(),e={book:0,paper:0,document:0},r=0;for(let n of t){if(n.categoryManual){e[n.category]=(e[n.category]||0)+1;continue}let o=hs(n);e[o]=(e[o]||0)+1,o!==n.category&&(await Zn(n.id,{category:o,categoryManual:!1}),r+=1)}return{changed:r,counts:e}}async function gs(t,e){return Zn(t,{lastOpenedAt:Date.now(),...e!==void 0?{progress:e}:{}})}async function ll(t){let e=await Pt();try{let r=e.transaction([Mt,$t,Ar,Dt],"readwrite");r.objectStore(Mt).delete(t),r.objectStore(Dt).delete(`pdf-translation:${t}`);let n=r.objectStore(Ar).index("bookId").openKeyCursor(IDBKeyRange.only(t));n.onsuccess=()=>{let a=n.result;a&&(r.objectStore(Ar).delete(a.primaryKey),a.continue())};let s=r.objectStore($t).index("bookId").openKeyCursor(IDBKeyRange.only(t));s.onsuccess=()=>{let a=s.result;a&&(r.objectStore($t).delete(a.primaryKey),a.continue())},await ur(r)}finally{e.close()}}async function cl(){let t=await Pt();try{let e=t.transaction([Mt,$t,Ar,Dt],"readwrite");e.objectStore(Mt).clear(),e.objectStore($t).clear(),e.objectStore(Ar).clear();let r=e.objectStore(Dt).openKeyCursor();r.onsuccess=()=>{let n=r.result;n&&(String(n.key).startsWith("pdf-translation:")&&e.objectStore(Dt).delete(n.primaryKey),n.continue())},await ur(e)}finally{t.close()}}async function dl(t){let e=await Pt();try{let r=e.transaction(Ar,"readonly").objectStore(Ar).get(t);return await new Promise((n,o)=>{r.onsuccess=()=>n(r.result||null),r.onerror=()=>o(r.error)})}finally{e.close()}}async function ul(t){let e=await Pt();try{let r=e.transaction([Mt,Ar],"readwrite"),n=r.objectStore(Mt).get(t.bookId);n.onsuccess=()=>{n.result&&r.objectStore(Ar).put({...t,updatedAt:Date.now()})},await ur(r)}finally{e.close()}}async function fl(t){let e=await Pt();try{let r=e.transaction(Dt,"readonly").objectStore(Dt).get(`pdf-translation:${t}`);return await new Promise((n,o)=>{r.onsuccess=()=>n(r.result?.value||{}),r.onerror=()=>o(r.error)})}finally{e.close()}}async function hl(t,e){let r=await Pt();try{let n=r.transaction([Mt,Dt],"readwrite"),o=n.objectStore(Mt).get(t);o.onsuccess=()=>{o.result&&n.objectStore(Dt).put({key:`pdf-translation:${t}`,value:e})},await ur(n)}finally{r.close()}}function Qu(t="a"){return globalThis.crypto?.randomUUID?`${t}-${crypto.randomUUID()}`:`${t}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}async function pl(t){let e=await Pt();try{let o=e.transaction($t,"readonly").objectStore($t).index("bookId").getAll(t);return(await new Promise((a,i)=>{o.onsuccess=()=>a(o.result??[]),o.onerror=()=>i(o.error)})).sort((a,i)=>{let c=Number.isFinite(a.page)?a.page:Number.MAX_SAFE_INTEGER,d=Number.isFinite(i.page)?i.page:Number.MAX_SAFE_INTEGER;if(c!==d)return c-d;let u=Number.isFinite(a.chapterIndex)?a.chapterIndex:Number.MAX_SAFE_INTEGER,p=Number.isFinite(i.chapterIndex)?i.chapterIndex:Number.MAX_SAFE_INTEGER;return u!==p?u-p:(a.createdAt||0)-(i.createdAt||0)})}finally{e.close()}}async function gl(t){let e=Date.now(),r={...t,id:t.id||Qu(),createdAt:t.createdAt||e,updatedAt:e};if(!r.bookId)throw new Error("\u6279\u6CE8\u7F3A\u5C11\u4E66\u7C4D\u4FE1\u606F\u3002");if(!r.kind||!r.style)throw new Error("\u6279\u6CE8\u7F3A\u5C11\u7C7B\u578B\u3002");let n=await Pt();try{let o=n.transaction($t,"readwrite");return o.objectStore($t).put(r),await ur(o),r}finally{n.close()}}async function ml(t,e){let r=await Pt();try{let n=r.transaction($t,"readwrite"),o=n.objectStore($t),s=await new Promise((i,c)=>{let d=o.get(t);d.onsuccess=()=>i(d.result??null),d.onerror=()=>c(d.error)});if(!s)return await ur(n),null;let a={...s,...e,id:s.id,updatedAt:Date.now()};return o.put(a),await ur(n),a}finally{r.close()}}async function bl(t){let e=await Pt();try{let r=e.transaction($t,"readwrite");r.objectStore($t).delete(t),await ur(r)}finally{e.close()}}async function xl(t){if(!t||!t.size)throw new Error("\u80CC\u666F\u56FE\u7247\u4E3A\u7A7A\u3002");if(t.size>16777216)throw new Error(`\u80CC\u666F\u56FE\u7247\u8D85\u8FC7 ${Math.round(16777216/1024/1024)} MB\uFF0C\u8BF7\u9009\u62E9\u66F4\u5C0F\u7684\u56FE\u7247\u3002`);let e=await Pt();try{let r=e.transaction(Dt,"readwrite");return r.objectStore(Dt).put({key:ia,blob:t,type:t.type||"image/*",size:t.size,updatedAt:Date.now()}),await ur(r),ia}finally{e.close()}}async function vl(){let t=await Pt();try{let r=t.transaction(Dt,"readonly").objectStore(Dt).get(ia);return(await new Promise((o,s)=>{r.onsuccess=()=>o(r.result??null),r.onerror=()=>s(r.error)}))?.blob??null}finally{t.close()}}async function yl(){let t=await Pt();try{let e=t.transaction(Dt,"readwrite");e.objectStore(Dt).delete(ia),await ur(e)}finally{t.close()}}function _n(t,e,r,n){let o=Number(t);return Number.isFinite(o)?Math.max(e,Math.min(r,o)):n}function Ju(t,e){return/^#[0-9a-f]{6}$/iu.test(String(t))?String(t):e}function wl(){try{let t=localStorage.getItem(ol);if(!t)return{...It};let e=JSON.parse(t),n=(Number(e.settingsVersion)||1)>=2&&typeof e.autoTranslate=="boolean"?e.autoTranslate:!1;return{...It,...e,settingsVersion:2,autoTranslate:n,hideTranslations:!!e.hideTranslations,fontSize:_n(e.fontSize,13,34,It.fontSize),lineHeight:_n(e.lineHeight,1.35,2.4,It.lineHeight),tocWidth:_n(e.tocWidth,180,520,It.tocWidth),readingMode:e.readingMode==="page"?"book":Gu.has(e.readingMode)?e.readingMode:It.readingMode,pageAnimation:Wu.has(e.pageAnimation)?e.pageAnimation:It.pageAnimation,bookAnimation:qu.has(e.bookAnimation)?e.bookAnimation:It.bookAnimation,fontFamily:ju.has(e.fontFamily)?e.fontFamily:It.fontFamily,fontWeight:Vu.has(Number(e.fontWeight))?Number(e.fontWeight):It.fontWeight,contentWidth:_n(e.contentWidth,520,1600,It.contentWidth),brightness:_n(e.brightness,.6,1.2,It.brightness),backgroundPreset:Uu.has(e.backgroundPreset)?e.backgroundPreset:It.backgroundPreset,customBackground:Ju(e.customBackground,It.customBackground),textTone:Xu.has(e.textTone)?e.textTone:It.textTone,backgroundImageKey:typeof e.backgroundImageKey=="string"?e.backgroundImageKey:"",backgroundImageOpacity:_n(e.backgroundImageOpacity,0,.85,It.backgroundImageOpacity),backgroundImageBlur:_n(e.backgroundImageBlur,0,12,It.backgroundImageBlur),annotationPanelOpen:!!e.annotationPanelOpen}}catch{return{...It}}}function _l(t){try{localStorage.setItem(ol,JSON.stringify(t))}catch{}}function kl(t){let e=Number(t)||0;return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:e<1024*1024*1024?`${(e/1024/1024).toFixed(1)} MB`:`${(e/1024/1024/1024).toFixed(2)} GB`}function ms(t){if(!t)return"";let e=Date.now()-Number(t);return e<6e4?"\u521A\u521A":e<36e5?`${Math.floor(e/6e4)} \u5206\u949F\u524D`:e<864e5?`${Math.floor(e/36e5)} \u5C0F\u65F6\u524D`:e<7*864e5?`${Math.floor(e/864e5)} \u5929\u524D`:new Date(t).toLocaleDateString("zh-CN")}function Tl(t){let e=String(t??"").replace(/\s+/gu,"");if(e.length<40)return!1;let r=Ku(e),n=(e.match(/[A-Za-zÀ-ÖØ-öø-ÿ\u0400-\u04ff]/gu)??[]).length/e.length;return r<.18&&n>.45}var Z=require("react/jsx-runtime");function Sl(t){let e=t.progress;return e?typeof e.page=="number"&&typeof e.pages=="number"&&e.pages>0?Math.max(0,Math.min(100,e.page/e.pages*100)):typeof e.percent=="number"?Math.max(0,Math.min(100,e.percent)):typeof e.chapter=="number"&&typeof e.chapters=="number"&&e.chapters>0?Math.max(0,Math.min(100,(e.chapter+1)/e.chapters*100)):0:0}var ef={book:"paper",paper:"document",document:"book"};function tf({book:t,onOpen:e,onDelete:r,onCycleCategory:n}){let o=Sl(t),s=[Kn(t.format),t.author||"",kl(t.size)].filter(Boolean).join(" \xB7 ");return(0,Z.jsxs)("div",{className:"dshr-book",role:"button",tabIndex:0,onClick:()=>e(t),onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),e(t))},children:[(0,Z.jsx)("div",{className:"dshr-book__media",children:t.cover?(0,Z.jsx)("img",{className:"dshr-book__cover",src:t.cover,alt:`${t.title||"\u6587\u6863"}\u5C01\u9762`,loading:"lazy"}):(0,Z.jsx)("div",{className:"dshr-book__spine",children:Kn(t.format)})}),(0,Z.jsxs)("div",{className:"dshr-book__body",children:[(0,Z.jsx)("div",{className:"dshr-book__title",children:t.title||"\u672A\u547D\u540D\u6587\u6863"}),(0,Z.jsx)("div",{className:"dshr-book__meta",children:s}),(0,Z.jsxs)("div",{className:"dshr-book__foot",children:[(0,Z.jsx)("span",{children:t.lastOpenedAt?`\u9605\u8BFB\u4E8E ${ms(t.lastOpenedAt)}`:ms(t.addedAt)}),(0,Z.jsx)("span",{children:o>0?`${Math.round(o)}%`:"\u672A\u5F00\u59CB"})]}),(0,Z.jsx)("div",{className:"dshr-book__progress","aria-hidden":"true",children:(0,Z.jsx)("i",{style:{"--p":`${o}%`}})})]}),(0,Z.jsxs)("div",{className:"dshr-book__badges",children:[(0,Z.jsxs)("button",{type:"button",className:`dshr-book__category is-${t.category||"document"}`,title:`\u5206\u7C7B\uFF1A${Yn(t.category)}${t.categoryManual?"\uFF08\u624B\u52A8\uFF09":"\uFF08\u81EA\u52A8\uFF09"} \xB7 \u70B9\u51FB\u5207\u6362`,onClick:a=>{a.stopPropagation(),n(t)},children:[(0,Z.jsx)(Ji,{size:11})," ",Yn(t.category)]}),(0,Z.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost dshr-book__delete","aria-label":`\u4ECE\u4E66\u67B6\u5220\u9664 ${t.title||"\u8FD9\u672C\u4E66"}`,title:"\u4ECE\u4E66\u67B6\u5220\u9664",onClick:a=>{a.stopPropagation(),r(t)},children:(0,Z.jsx)(Xn,{size:14})})]})]})}function El({books:t,loading:e,resumeBook:r,onResume:n,importing:o,organizing:s,categoryFilter:a,onCategoryFilter:i,onAutoOrganize:c,onImport:d,onOpen:u,onDelete:p,onCycleCategory:h,onSettings:g,onOnlineImport:S}){let _=Tn.default.useRef(null),[v,E]=Tn.default.useState(!1),[O,N]=Tn.default.useState(""),M=Tn.default.useRef(0),I=Tn.default.useMemo(()=>{let m={all:t.length,book:0,paper:0,document:0};for(let A of t)m[A.category]=(m[A.category]||0)+1;return m},[t]),T=Tn.default.useMemo(()=>{let m=O.trim().toLowerCase();return t.filter(A=>a!=="all"&&A.category!==a?!1:m?`${A.title} ${A.author||""}`.toLowerCase().includes(m):!0)},[t,a,O]),D=()=>_.current?.click(),L=m=>{m.preventDefault(),M.current=0,E(!1);let A=[...m.dataTransfer?.files??[]].filter(F=>fs(F.name));if(A.length===0){d([],{rejected:!0});return}d(A)};return(0,Z.jsxs)("div",{className:"dshr-library",children:[(0,Z.jsxs)("div",{className:"dshr-library__inner",children:[(0,Z.jsxs)("header",{className:"dshr-hero",children:[(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("div",{className:"dshr-hero__eyebrow",children:[(0,Z.jsx)(is,{size:15})," DSH READER \xB7 LIBRARY"]}),(0,Z.jsx)("h1",{children:"\u4F60\u7684\u8DE8\u8BED\u8A00\u9605\u8BFB\u52A9\u624B"}),(0,Z.jsx)("p",{children:"PDF\u3001EPUB\u3001MOBI\u3001TXT \u90FD\u80FD\u5728\u8FD9\u91CC\u6253\u5F00\u3002\u81EA\u52A8\u6574\u7406\u6210\u4E66\u7C4D\u4E0E\u6587\u732E\u4E66\u5355\uFF0C \u8BFB\u5230\u5916\u6587\u65F6\u5B9E\u65F6\u5BF9\u7167\u4E2D\u6587\uFF1B\u9009\u4E2D\u6587\u5B57\u5373\u53EF\u7FFB\u8BD1\u3001\u95EE AI \u6216\u8DF3\u8F6C Google \u641C\u7D22\u3002"})]}),(0,Z.jsxs)("div",{className:"dshr-hero__actions",children:[(0,Z.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:D,disabled:o,children:[o?(0,Z.jsx)("span",{className:"dshr-spinner"}):(0,Z.jsx)(ta,{size:15}),o?"\u6B63\u5728\u52A0\u5165\u4E66\u67B6\u2026":"\u5BFC\u5165\u6587\u6863"]}),(0,Z.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:S,title:"\u4ECE\u53E4\u767B\u5821\u3001Standard Ebooks\u3001arXiv \u7B49\u516C\u5F00\u6765\u6E90\u4E0B\u8F7D\u5E76\u6253\u5F00",children:[(0,Z.jsx)(sa,{size:15})," \u516C\u5F00\u4E66\u5E93\u5BFC\u5165"]}),(0,Z.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:c,disabled:s||t.length===0,title:"\u6309\u6587\u4EF6\u7C7B\u578B\u4E0E\u5143\u6570\u636E\uFF0C\u628A\u4E66\u67B6\u6574\u7406\u6210\u4E66\u7C4D / \u6587\u732E / \u6587\u6863",children:[s?(0,Z.jsx)("span",{className:"dshr-spinner"}):(0,Z.jsx)(Qi,{size:15}),s?"\u6574\u7406\u4E2D\u2026":"\u4E00\u952E\u6574\u7406"]}),(0,Z.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:g,title:"\u9605\u8BFB\u4E0E\u4E66\u67B6\u8BBE\u7F6E",children:[(0,Z.jsx)(ea,{size:15})," \u8BBE\u7F6E"]})]})]}),r?(0,Z.jsxs)("button",{type:"button",className:"dshr-resume",onClick:()=>n(r),children:[(0,Z.jsx)("span",{className:"dshr-resume__mark",children:(0,Z.jsx)(is,{size:19})}),(0,Z.jsxs)("span",{className:"dshr-resume__body",children:[(0,Z.jsx)("span",{className:"dshr-resume__eyebrow",children:"\u7EE7\u7EED\u4E0A\u6B21\u9605\u8BFB"}),(0,Z.jsx)("strong",{children:r.title||"\u4E0A\u6B21\u6253\u5F00\u7684\u6587\u6863"}),(0,Z.jsxs)("span",{className:"dshr-resume__meta",children:[Kn(r.format),r.progress?.page?` \xB7 \u7B2C ${r.progress.page}${r.progress.pages?` / ${r.progress.pages}`:""} \u9875`:"",` \xB7 ${Math.round(Sl(r))}%`]})]}),(0,Z.jsx)("span",{className:"dshr-resume__arrow",children:"\u2192"})]}):null,(0,Z.jsxs)("section",{className:`dshr-drop${v?" is-over":""}`,onDragEnter:m=>{m.preventDefault(),M.current+=1,E(!0)},onDragOver:m=>m.preventDefault(),onDragLeave:()=>{M.current=Math.max(0,M.current-1),M.current===0&&E(!1)},onDrop:L,"aria-label":"\u62D6\u653E\u6587\u6863\u4EE5\u5BFC\u5165",children:[(0,Z.jsx)("div",{className:"dshr-drop__mark",children:(0,Z.jsx)(Vi,{size:24})}),(0,Z.jsxs)("div",{className:"dshr-drop__body",children:[(0,Z.jsx)("div",{className:"dshr-drop__title",children:"\u62D6\u4E00\u4EFD\u6587\u732E\u6216\u4E66\u5230\u8FD9\u91CC\uFF0C\u6216\u70B9\u51FB\u5BFC\u5165"}),(0,Z.jsx)("div",{className:"dshr-drop__hint",children:"\u6587\u4EF6\u53EA\u4FDD\u5B58\u5728\u672C\u673A\u6D4F\u89C8\u5668\u4E66\u67B6\u4E2D\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\uFF1B\u7FFB\u8BD1\u4EC5\u53D1\u9001\u5F53\u524D\u9009\u4E2D\u7684\u6BB5\u843D\u3002"}),(0,Z.jsx)("div",{className:"dshr-drop__formats",children:["PDF","EPUB","MOBI","AZW3","TXT","Markdown","HTML"].map(m=>(0,Z.jsx)("span",{className:"dshr-chip",children:m},m))})]}),(0,Z.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:D,disabled:o,children:"\u9009\u62E9\u6587\u4EF6"})]}),(0,Z.jsxs)("div",{className:"dshr-library__bar",children:[(0,Z.jsx)("h2",{children:"\u6211\u7684\u4E66\u67B6"}),(0,Z.jsxs)("div",{className:"dshr-library__search",children:[(0,Z.jsx)(ls,{size:14}),(0,Z.jsx)("input",{type:"search",value:O,onChange:m=>N(m.target.value),placeholder:"\u641C\u7D22\u4E66\u540D\u3001\u4F5C\u8005","aria-label":"\u641C\u7D22\u4E66\u67B6"})]}),(0,Z.jsxs)("span",{children:[T.length," / ",t.length," \u672C \xB7 \u6700\u8FD1\u9605\u8BFB\u4F18\u5148"]})]}),(0,Z.jsxs)("div",{className:"dshr-library__tabs",role:"tablist","aria-label":"\u4E66\u67B6\u5206\u7C7B",children:[(0,Z.jsxs)("button",{type:"button",role:"tab","aria-selected":a==="all",className:`dshr-library__tab${a==="all"?" is-active":""}`,onClick:()=>i("all"),children:["\u5168\u90E8 ",(0,Z.jsx)("span",{children:I.all})]}),la.map(m=>(0,Z.jsxs)("button",{type:"button",role:"tab","aria-selected":a===m.id,className:`dshr-library__tab${a===m.id?" is-active":""}`,onClick:()=>i(m.id),title:m.hint,children:[m.label," ",(0,Z.jsx)("span",{children:I[m.id]||0})]},m.id)),(0,Z.jsx)("span",{className:"dshr-library__tabs-hint",children:"\u70B9\u5361\u7247\u53F3\u4E0A\u89D2\u5206\u7C7B\u6807\u7B7E\u53EF\u624B\u52A8\u5207\u6362"})]}),e?(0,Z.jsxs)("div",{className:"dshr-loading",style:{minHeight:180},children:[(0,Z.jsx)("div",{className:"dshr-loading__ring"}),(0,Z.jsx)("span",{children:"\u6B63\u5728\u6253\u5F00\u4E66\u67B6\u2026"})]}):T.length===0?(0,Z.jsx)("div",{className:"dshr-empty-books",children:t.length===0?"\u4E66\u67B6\u662F\u7A7A\u7684\u3002\u5BFC\u5165\u7B2C\u4E00\u7BC7\u8BBA\u6587\u3001\u7B2C\u4E00\u672C\u4E66\uFF0C\u6216\u628A\u6587\u4EF6\u62D6\u8FDB\u4E0A\u9762\u7684\u865A\u7EBF\u6846\u3002\u9996\u6B21\u9605\u8BFB\u540E\uFF0C\u8FDB\u5EA6\u4F1A\u81EA\u52A8\u8BB0\u5F55\u5728\u8FD9\u91CC\u3002":O.trim()?`\u6CA1\u6709\u5339\u914D\u300C${O.trim()}\u300D\u7684\u6587\u6863\u3002`:`\u300C${Yn(a)}\u300D\u4E66\u5355\u8FD8\u662F\u7A7A\u7684\u3002\u5BFC\u5165\u6587\u4EF6\uFF0C\u6216\u70B9\u5361\u7247\u4E0A\u7684\u5206\u7C7B\u6807\u7B7E\u628A\u5DF2\u6709\u6587\u6863\u79FB\u8FDB\u6765\u3002`}):(0,Z.jsx)("div",{className:"dshr-books",children:T.map(m=>(0,Z.jsx)(tf,{book:m,onOpen:u,onDelete:p,onCycleCategory:A=>h(A,ef[A.category||"document"])},m.id))}),(0,Z.jsxs)("footer",{className:"dshr-library__foot",children:[(0,Z.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,Z.jsx)(Vn,{size:14})," \u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1"]}),(0,Z.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,Z.jsx)(ln,{size:14})," \u9009\u4E2D\u95EE AI"]}),(0,Z.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,Z.jsx)(ls,{size:14})," Google / \u5B66\u672F\u641C\u7D22"]}),(0,Z.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,Z.jsx)(Wi,{size:14})," \u672C\u5730\u4E66\u67B6 \xB7 \u8FDB\u5EA6\u4E0E\u6279\u6CE8\u81EA\u52A8\u4FDD\u5B58"]})]})]}),(0,Z.jsx)("input",{ref:_,type:"file",multiple:!0,accept:".pdf,.epub,.mobi,.azw,.azw3,.txt,.md,.markdown,.html,.htm,application/pdf,application/epub+zip,text/plain,text/markdown,text/html",className:"dshr-sr-only",tabIndex:-1,onChange:m=>{let A=[...m.target.files??[]];m.target.value="",A.length>0&&d(A)}})]})}var ht=Ct(require("react"),1);var rf=Object.freeze({"content-type":"application/json","x-dsh-reader":"1"}),Br=class extends Error{constructor(e,r="REQUEST_FAILED",n=0){super(e),this.name="ReaderApiError",this.code=r,this.status=n}};async function Al(t){let e=null;try{e=await t.json()}catch{}return new Br(e?.error?.message||e?.message||`\u7FFB\u8BD1\u670D\u52A1\u4E0D\u53EF\u7528\uFF08HTTP ${t.status}\uFF09\u3002`,e?.error?.code||e?.code||"REQUEST_FAILED",t.status)}async function bs(t,e,{signal:r}={}){let n;try{n=await fetch(t,{method:"POST",headers:rf,body:JSON.stringify(e),signal:r,credentials:"same-origin"})}catch(o){throw o?.name==="AbortError"?o:new Br("\u65E0\u6CD5\u8FDE\u63A5\u5230 DSH \u4E3B\u8FDB\u7A0B\uFF0C\u8BF7\u786E\u8BA4 DSH \u6B63\u5728\u8FD0\u884C\u3002","NETWORK",0)}if(!n.ok)throw await Al(n);return n}function Sn(t){return t?.name==="AbortError"}async function Qn(t,e={}){let r=t.map(a=>({id:String(a.id),text:String(a.text??"")})).filter(a=>a.text.trim()!=="");if(r.length===0)return{};let n=await bs("/dsh-reader/ai/translate",{segments:r,context:String(e.context??"").slice(0,1200),title:String(e.title??"").slice(0,300),glossary:String(e.glossary??"").slice(0,4e3),...e.expectedModel?{expectedModel:e.expectedModel}:{}},{signal:e.signal}),o=await n.json().catch(()=>null);if(!o||typeof o!="object"||!Array.isArray(o.translations))throw new Br("\u7FFB\u8BD1\u670D\u52A1\u8FD4\u56DE\u4E86\u65E0\u6CD5\u8BC6\u522B\u7684\u7ED3\u679C\u3002","BAD_RESPONSE",n.status);let s={};for(let a of o.translations)a&&typeof a.id=="string"&&typeof a.zh=="string"&&a.zh.trim()!==""&&(s[a.id]=a.zh);if(Object.keys(s).length===0)throw new Br("\u7FFB\u8BD1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u53EF\u7528\u8BD1\u6587\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","EMPTY_TRANSLATION",n.status);return e.includeMetadata?{translations:s,model:o.model,promptVersion:o.promptVersion}:s}async function Cl({signal:t}={}){let e=await fetch("/dsh-reader/ai/status",{signal:t,credentials:"same-origin",headers:{"x-dsh-reader":"1"},cache:"no-store"});if(!e.ok)throw await Al(e);return e.json()}function Nl(t){let e=t.split(/\r?\n/u).filter(r=>r.startsWith("data:")).map(r=>r.slice(5).trimStart()).join(`
`);if(e==="")return null;try{return JSON.parse(e)}catch{return{type:"delta",text:e}}}async function xs(t,{onDelta:e,onMeta:r}={}){let n=await bs("/dsh-reader/ai/chat",t,{signal:t.signal});if(!n.body)throw new Br("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u6D41\u5F0F\u54CD\u5E94\u3002","NO_STREAM",n.status);let o=n.body.getReader(),s=new TextDecoder,a="",i=!1,c=null;try{for(;;){let{value:d,done:u}=await o.read();if(u)break;a+=s.decode(d,{stream:!0});let p=a.search(/\r?\n\r?\n/u);for(;p!==-1;){let h=a.slice(0,p),g=a.slice(p).match(/^\r?\n\r?\n/u)?.[0]??`

`;a=a.slice(p+g.length);let S=Nl(h);S&&(S.type==="delta"&&typeof S.text=="string"?e?.(S.text):S.type==="error"?c=new Br(S.message||"AI \u56DE\u7B54\u5931\u8D25\u3002",S.code||"AI_FAILED"):S.type==="done"?i=!0:r?.(S)),p=a.search(/\r?\n\r?\n/u)}}if(a.trim()!==""){let d=Nl(a);d?.type==="delta"&&typeof d.text=="string"&&e?.(d.text),d?.type==="error"&&(c=new Br(d.message||"AI \u56DE\u7B54\u5931\u8D25\u3002",d.code||"AI_FAILED")),d?.type==="done"&&(i=!0)}}finally{o.releaseLock?.()}if(c)throw c}async function Il(t,{signal:e}={}){let r=await bs("/dsh-reader/import/fetch",{url:String(t||"")},{signal:e}),n=await r.blob();if(!n.size)throw new Br("\u6765\u6E90\u8FD4\u56DE\u4E86\u7A7A\u6587\u4EF6\u3002","EMPTY",0);let o="book",s=r.headers.get("x-dsh-reader-filename");if(s)try{o=decodeURIComponent(s)}catch{o=s}return new File([n],o,{type:n.type||"application/octet-stream"})}var Jr=Ct(require("react"),1);var Ll=Object.freeze([{id:"yellow",label:"\u9EC4",value:"#f5d76e"},{id:"green",label:"\u7EFF",value:"#8fd18b"},{id:"pink",label:"\u7C89",value:"#f3a6c0"},{id:"blue",label:"\u84DD",value:"#94c9f0"}]),yo=Object.freeze([{id:"thin",label:"\u7EC6",value:4},{id:"medium",label:"\u4E2D",value:9},{id:"wide",label:"\u5BBD",value:16}]),Dl=Object.freeze([{id:"ink",label:"\u58A8",value:"#3f3a33"},{id:"red",label:"\u6731",value:"#c2543f"},{id:"amber",label:"\u8D6D",value:"#a9772b"},{id:"blue",label:"\u84DD",value:"#3f6f97"}]),Jn=Object.freeze({highlight:"\u8367\u5149\u7B14",underline:"\u4E0B\u5212\u7EBF",note:"\u4FBF\u7B7E"}),eo=Object.freeze([{id:"highlight",label:Jn.highlight},{id:"underline",label:Jn.underline},{id:"note",label:Jn.note}]);function vs(t){return Jn[t]||"\u6807\u6CE8"}var fa="data-anno-block",Pl=".dshr-block__body";function ys(t){return t?t.ownerDocument?t.ownerDocument:t.nodeType===9?t:typeof globalThis<"u"&&globalThis.document?globalThis.document:null:null}function Cr(t,e=0){let r=typeof t=="number"?t:Number(t);return Number.isFinite(r)?Math.trunc(r):e}function Ht(t,e,r){return Math.min(r,Math.max(e,t))}function ca(t,e=5){let r=10**e;return Math.round(t*r)/r}function ua(t){return String(t??"").replace(/\s+/gu," ").trim()}function nf(t){if(!t||t.nodeType!==1)return!1;let e=t.tagName;if(e==="SCRIPT"||e==="STYLE"||e==="NOSCRIPT"||e==="TEXTAREA"||e==="SVG"||e==="CANVAS")return!0;let r=t.classList;return!!(r&&(r.contains("dshr-translation")||r.contains("dshr-anno-ignore"))||typeof t.hasAttribute=="function"&&t.hasAttribute("data-anno-ignore"))}function ws(t){let e=[],r=[],n=new Map,o=0;if(!t)return{nodes:e,starts:r,positions:n,total:o,text:""};let s=i=>{for(let c=i.firstChild;c;c=c.nextSibling)if(c.nodeType===3){let d=c.nodeValue||"";n.set(c,e.length),e.push(c),r.push(o),o+=d.length}else c.nodeType===1&&!nf(c)&&s(c)};s(t);let a="";for(let i=0;i<e.length;i+=1)a+=e[i].nodeValue||"";return{nodes:e,starts:r,positions:n,total:o,text:a}}function of(t,e,r){if(!t||!e)return null;let n;try{n=t.createRange();let o=e.nodeType===3?e.nodeValue?e.nodeValue.length:0:e.childNodes?e.childNodes.length:0;return n.setStart(e,Ht(Cr(r),0,o)),n.collapse(!0),n}catch{return null}}function Ml(t,e,r,n){if(!r)return 0;if(r.nodeType===3){let o=t.positions.get(r),s=r.nodeValue||"";if(o!==void 0)return t.starts[o]+Ht(Cr(n),0,s.length)}if(r===e||e.contains(r)){let o=ys(e),s=of(o,r,n);if(!s)return 0;let a=o.createRange();for(let i=0;i<t.nodes.length;i+=1)try{if(a.setStart(t.nodes[i],0),a.collapse(!0),s.compareBoundaryPoints(0,a)<=0)return t.starts[i]}catch{}return t.total}try{return e.compareDocumentPosition(r)&4?t.total:0}catch{return 0}}function Rl(t,e){if(!t.nodes.length)return null;let r=Ht(Cr(e),0,t.total);for(let o=0;o<t.nodes.length;o+=1){let s=t.nodes[o].nodeValue?t.nodes[o].nodeValue.length:0,a=t.starts[o];if(r<a+s)return{node:t.nodes[o],offset:r-a};if(r===a+s&&s>0)return{node:t.nodes[o],offset:s}}let n=t.nodes[t.nodes.length-1];return{node:n,offset:n.nodeValue?n.nodeValue.length:0}}function af(t,e,r){if(!t)return null;let n=ws(t);if(!n.nodes.length||n.total===0)return null;let o=Ht(Cr(e),0,n.total),s=Ht(Cr(r),0,n.total);s<o&&([o,s]=[s,o]);let a=Rl(n,o),i=Rl(n,s),c=ys(t);if(!c||!a||!i)return null;try{let d=c.createRange();return d.setStart(a.node,a.offset),d.setEnd(i.node,i.offset),d}catch{return null}}function zl(t){let e=[];if(!t)return e;try{let r=typeof t.getClientRects=="function"?t.getClientRects():null;if(r&&typeof r.length=="number")for(let n=0;n<r.length;n+=1){let o=r[n];o&&e.push(o)}}catch{}if(e.length===0)try{let r=typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():null;r&&(r.width||r.height)&&e.push(r)}catch{}return e}function sf(t){let e=1/0,r=1/0,n=-1/0,o=-1/0;for(let s=0;s<t.length;s+=1){let a=t[s],i=Number(a.width)||0,c=Number(a.height)||0;if(!i&&!c)continue;let d=Number(a.left)||0,u=Number(a.top)||0;e=Math.min(e,d),r=Math.min(r,u),n=Math.max(n,d+i),o=Math.max(o,u+c)}return Number.isFinite(e)?{left:e,top:r,width:n-e,height:o-r,right:n,bottom:o}:{left:0,top:0,width:0,height:0,right:0,bottom:0}}function lf(t,e,r){let n=e,o=r;for(;n<o&&/\s/u.test(t[n]);)n+=1;for(;o>n&&/\s/u.test(t[o-1]);)o-=1;return{start:n,end:o,text:t.slice(n,o)}}function Fl(t,e){if(!t||!e||!e.rangeCount)return null;let r=ys(t);if(!r)return null;let n;try{n=e.getRangeAt(0)}catch{return null}if(!n)return null;try{if(!t.contains(n.commonAncestorContainer))return null}catch{return null}let o=[],s;try{s=t.querySelectorAll(`[${fa}]`)}catch{return null}for(let i=0;i<s.length;i+=1){let c=s[i],d=c.getAttribute(fa);if(!d)continue;let u=c.classList&&c.classList.contains("dshr-block__body")?c:c.querySelector(Pl);if(!u)continue;let p=ws(u);if(p.total===0)continue;let h;try{h=r.createRange(),h.selectNodeContents(u)}catch{continue}let g=!1,S=!1,_=!1,v=!1;try{g=n.compareBoundaryPoints(3,h)>=0,S=n.compareBoundaryPoints(1,h)<=0,_=n.compareBoundaryPoints(0,h)<0,v=n.compareBoundaryPoints(2,h)>0}catch{continue}if(g||S)continue;let E=_?0:Ml(p,u,n.startContainer,n.startOffset),O=v?p.total:Ml(p,u,n.endContainer,n.endOffset),N=Ht(Cr(E),0,p.total),M=Ht(Cr(O),0,p.total);if(M<=N)continue;let I=lf(p.text,N,M);I.end<=I.start||o.push({blockId:d,start:I.start,end:I.end,text:I.text})}if(o.length===0)return null;let a="";for(let i=0;i<o.length;i+=1)i>0&&(a+=`
`),a+=o[i].text;return a=a.replace(/\u00a0/gu," ").trim(),a?{text:a,rect:sf(zl(n)),ranges:o}:null}function Bl(t,e){if(!t||!e)return[];let r;try{r=e.getBoundingClientRect()}catch{return[]}if(!r)return[];let n=Number(r.width)||0,o=Number(r.height)||0;if(n<=0||o<=0)return[];let s=Number(r.left)||0,a=Number(r.top)||0,i=s+n,c=a+o,d=zl(t);if(d.length===0)return[];let u=[];for(let p=0;p<d.length;p+=1){let h=d[p];if(!h)continue;let g=Number(h.width)||0,S=Number(h.height)||0;if(g<=0||S<=0)continue;let _=Number(h.left)||0,v=Number(h.top)||0,E=Math.max(_,s),O=Math.max(v,a),N=Math.min(_+g,i),M=Math.min(v+S,c);N-E<.5||M-O<.5||u.push({x:ca(Ht((E-s)/n,0,1)),y:ca(Ht((O-a)/o,0,1)),w:ca(Ht((N-E)/n,0,1)),h:ca(Ht((M-O)/o,0,1))})}return u.sort((p,h)=>p.y-h.y||p.x-h.x),u}function cf(t){let e=String(t??""),r="",n=[],o=-1;for(let s=0;s<e.length;s+=1){let a=e[s];if(/\s/u.test(a)){o<0&&r.length>0&&(o=s);continue}o>=0&&(n.push(o),r+=" ",o=-1),n.push(s),r+=a}return{text:r,map:n}}function df(t,e,r,n,o){let s=t.length,a=r[n];if(a===void 0)return null;let i=n+o<r.length?r[n+o]:s;return i>a?{start:a,end:i}:null}function Ol(t,e){if(!t||!e)return null;let r=String(t),n=String(e).trim();if(!n)return null;let o=r.indexOf(n);if(o>=0)return{start:o,end:o+n.length};let s=cf(r),a=ua(n);if(!a)return null;let i=s.text.indexOf(a);if(i>=0){let d=df(r,s.text,s.map,i,a.length);if(d)return d}let c=Math.min(a.length,48);for(let d=c;d>=12;d-=4){let u=a.slice(0,d),p=s.text.indexOf(u);if(p<0)continue;let h=s.map[p];if(h===void 0)continue;let g=Math.min(r.length,h+a.length);if(g>h)return{start:h,end:g}}return null}function uf(t,e,r){let n=ua(t);if(!n)return!1;let o=[],s=ua(e);s&&o.push(s);let a=ua(r);return a&&a!==s&&o.push(a),o.length===0?!0:o.some(i=>n===i?!0:n.length<8||i.length<8?!1:n.includes(i)||i.includes(n))}function da(t,e,r){let n=Ht(Cr(e),0,t.index.total),o=Ht(Cr(r),0,t.index.total);if(o<=n)return null;let s=af(t.body,n,o);return s?{blockId:t.blockId,start:n,end:o,text:t.index.text.slice(n,o),range:s}:null}function ff(t){let e=[];if(!t)return e;let r;try{r=t.querySelectorAll(`[${fa}]`)}catch{return e}for(let n=0;n<r.length;n+=1){let o=r[n],s=o.getAttribute(fa);if(!s)continue;let a=o.classList&&o.classList.contains("dshr-block__body")?o:o.querySelector(Pl);if(!a)continue;let i=ws(a);i.total!==0&&e.push({blockId:s,body:a,index:i})}return e}function $l(t,e){let r=[];if(!t||!e)return r;let n=ff(t);if(n.length===0)return r;let o=new Map;for(let i=0;i<n.length;i+=1)o.has(n[i].blockId)||o.set(n[i].blockId,n[i]);let s=typeof e.quote=="string"?e.quote:"",a=Array.isArray(e.ranges)?e.ranges:[];for(let i=0;i<a.length;i+=1){let c=a[i];if(!c||typeof c!="object")continue;let d=o.get(String(c.blockId==null?"":c.blockId));if(!d)continue;let u=Ht(Cr(c.start),0,d.index.total),p=Ht(Cr(c.end),0,d.index.total),h=p>u;if(h){let S=d.index.text.slice(u,p);if(uf(S,c.text,s)){let _=da(d,u,p);_&&r.push(_);continue}}let g=Ol(d.index.text,s||c.text);if(g){let S=da(d,g.start,g.end);S&&r.push(S);continue}if(h){let S=da(d,u,p);S&&r.push(S)}}if(r.length===0&&s){let i=s.split(/\n+/u).map(u=>u.trim()).filter(u=>u.length>=2),c=i.length>0?i:[s.trim()],d=new Set;for(let u=0;u<n.length;u+=1){let p=n[u];if(d.has(p.blockId))continue;let h=1/0,g=-1/0;for(let _=0;_<c.length;_+=1){let v=Ol(p.index.text,c[_]);v&&(h=Math.min(h,v.start),g=Math.max(g,v.end))}if(!Number.isFinite(h)||g<=h)continue;d.add(p.blockId);let S=da(p,h,g);S&&r.push(S)}}return r}var Im=require("react"),_t=require("react/jsx-runtime");function En({size:t=14}){return(0,_t.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,_t.jsx)("path",{d:"M9.4 2.6 5.1 6.9l-.7 2.7 2.7-.7 4.4-4.3-2.1-2Z",stroke:"currentColor",strokeWidth:"1.35",strokeLinejoin:"round"}),(0,_t.jsx)("path",{d:"m4.4 9.6-2.1 2.1c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0l2.1-2.1",stroke:"currentColor",strokeWidth:"1.35",strokeLinecap:"round"}),(0,_t.jsx)("path",{d:"M3 13.5h7.4",stroke:"currentColor",strokeWidth:"1.35",strokeLinecap:"round",opacity:".55"})]})}function ha({size:t=14}){return(0,_t.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,_t.jsx)("path",{d:"M4.2 3v4.6a3.8 3.8 0 0 0 7.6 0V3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,_t.jsx)("path",{d:"M3.4 13.3c2-.7 4.2-.8 9.2-.2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function cn({size:t=12}){return(0,_t.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,_t.jsx)("path",{d:"M3.5 2.7h9v6.2l-3.2 3.4H3.5z",fill:"currentColor",fillOpacity:".9",stroke:"currentColor",strokeWidth:"1",strokeLinejoin:"round"}),(0,_t.jsx)("path",{d:"M9.3 12.3V9h3.1",stroke:"var(--dshr-anno-paper, #ffffff)",strokeWidth:"1.15",strokeLinejoin:"round"}),(0,_t.jsx)("path",{d:"M5.4 5.5h5.1M5.4 7.4h3.4",stroke:"var(--dshr-anno-paper, #ffffff)",strokeWidth:"1",strokeLinecap:"round",opacity:".8"})]})}function Hl({size:t=56}){return(0,_t.jsxs)("svg",{width:t,height:t,viewBox:"0 0 56 56",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,_t.jsx)("rect",{x:"8.5",y:"9",width:"33",height:"38",rx:"4",stroke:"currentColor",strokeWidth:"1.8",opacity:".55"}),(0,_t.jsx)("path",{d:"M15 18h20M15 24h20M15 30h13",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",opacity:".42"}),(0,_t.jsx)("path",{d:"M34 28.5h11.5v9.2l-4.6 5H34z",fill:"currentColor",fillOpacity:".16",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),(0,_t.jsx)("path",{d:"M40.9 42.7v-5h4.6",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),(0,_t.jsx)("path",{d:"M36.8 33.6h5.6M36.8 36.4h3.8",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",opacity:".7"})]})}function pa({size:t=13}){return(0,_t.jsx)("svg",{width:t,height:t,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",focusable:"false",children:(0,_t.jsx)("path",{d:"m3.4 3.4 7.2 7.2M10.6 3.4 3.4 10.6",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})})}function Ul(t,e,r){let n=Number(t);return Number.isFinite(n)?Math.min(r,Math.max(e,n)):e}function ga(t){let e=Number(t);return .36+(Ul(Number.isFinite(e)?e:9,4,16)-4)/12*.34}function ma(t){return(1-Ul(t,.1,.95))*.82}function ba(t){let e=String(t??""),r=2166136261;for(let n=0;n<e.length;n+=1)r^=e.charCodeAt(n),r=Math.imul(r,16777619);return r>>>0}function hf(t,e=0){let r=(Number(t)^Math.imul((Number(e)||0)+1,2654435769))>>>0;return r^=r<<13,r>>>=0,r^=r>>>17,r^=r<<5,r>>>=0,r/4294967296}function xa(t,e){let r=Math.max(4,Number(e)||4),n=u=>hf(t,u)*2-1,o=3.7+n(1)*.5,s=3.1+n(2)*.45,a=3.7+n(3)*.45,i=3.3+n(4)*.55,c=r*.54,d=Math.max(1,r-.6);return[`M0.6 ${o.toFixed(2)}`,`C${(r*.18).toFixed(2)} ${s.toFixed(2)}`,`${(r*.34).toFixed(2)} ${s.toFixed(2)}`,`${c.toFixed(2)} ${a.toFixed(2)}`,`S${(r*.82).toFixed(2)} ${i.toFixed(2)}`,`${d.toFixed(2)} ${(i-.25).toFixed(2)}`].join(" ")}function va(t){if(!t)return"\u6279\u6CE8";let e=typeof t.note=="string"?t.note.trim():"";if(e)return e.length>34?`${e.slice(0,34)}\u2026`:e;let r=typeof t.quote=="string"?t.quote.trim():"";return r?r.length>34?`${r.slice(0,34)}\u2026`:r:"\u6279\u6CE8"}var Nn=require("react/jsx-runtime");function pf(t,e){let r=Math.min(t.left+t.width,e.left+e.width)-Math.max(t.left,e.left),n=Math.min(t.top+t.height,e.top+e.height)-Math.max(t.top,e.top);if(r<=0||n<=0)return 0;let o=r*n,s=Math.min(t.width*t.height,e.width*e.height);return s>0?o/s:0}function gf(t){let e=[];if(!t)return e;try{let n=typeof t.getClientRects=="function"?t.getClientRects():null;if(n&&typeof n.length=="number")for(let o=0;o<n.length;o+=1){let s=n[o];if(!s)continue;let a=Number(s.width)||0,i=Number(s.height)||0;a<=0||i<=0||e.push({left:Number(s.left)||0,top:Number(s.top)||0,width:a,height:i})}}catch{}if(e.length===0)try{let n=typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():null;n&&(Number(n.width)||0)>0&&(Number(n.height)||0)>0&&e.push({left:Number(n.left)||0,top:Number(n.top)||0,width:Number(n.width)||0,height:Number(n.height)||0})}catch{}if(e.length<=1)return e;let r=[];for(let n=0;n<e.length;n+=1){let o=e[n],s=!1;for(let a=0;a<r.length;a+=1)if(pf(o,r[a])>.55){s=!0;break}s||r.push(o)}return r}function mf(t,e){return!t||t.kind&&t.kind!=="flow"?!1:!e||t.chapterId==null?!0:t.chapterId===e}function bf(t,e){if(t===e)return!0;if(!t||!e||t.length!==e.length)return!1;for(let r=0;r<t.length;r+=1){let n=t[r],o=e[r];if(n.type!==o.type||n.key!==o.key||n.annotationId!==o.annotationId||n.x!==o.x||n.y!==o.y||n.width!==o.width||n.height!==o.height||n.color!==o.color||n.path!==o.path||n.isNote!==o.isNote||n.label!==o.label)return!1}return!0}function jl({containerRef:t,annotations:e,chapterId:r,onOpenAnnotation:n,layoutVersion:o}){let s=Jr.default.useRef(null),a=Jr.default.useRef(0),i=Jr.default.useRef({annotations:e,chapterId:r,onOpenAnnotation:n});i.current={annotations:e,chapterId:r,onOpenAnnotation:n};let[c,d]=Jr.default.useState({height:0,marks:[]}),u=Jr.default.useCallback(()=>{let h=s.current,g=t&&t.current?t.current:null;if(!h||!g)return;let S;try{S=h.getBoundingClientRect()}catch{return}if(!S)return;let{annotations:_,chapterId:v}=i.current,E=Array.isArray(_)?_:[],O=g.clientWidth||S&&g.getBoundingClientRect().width||0,N=0,M=null;try{if(M=g.querySelector(".dshr-content__inner"),!M){for(let D=g.firstElementChild;D;D=D.nextElementSibling)if(!(D===h||D.classList&&D.classList.contains("dshr-anno-layer"))){M=D;break}}}catch{M=null}if(M)try{let D=M.getBoundingClientRect();N=Math.max(0,D.top-S.top+D.height)}catch{N=0}let I=[];for(let D=0;D<E.length;D+=1){let L=E[D];if(!mf(L,v))continue;let m;try{m=$l(g,L)}catch{continue}if(!Array.isArray(m)||m.length===0)continue;let A=L.style==="underline"||L.style==="note"?L.style:"highlight",F=L.color||"#f5d76e",te=ba(`${L.id||""}|${L.createdAt||0}`),B=ga(L.width),le=L.id==null?"":String(L.id),fe=A==="note"||typeof L.note=="string"&&L.note.trim().length>0,V=va(L),ge=null;for(let q=0;q<m.length;q+=1){let z=m[q],ce=gf(z&&z.range);for(let $=0;$<ce.length;$+=1){let re=ce[$],ne=re.left-S.left,_e=re.top-S.top,Q=`${le}:${q}:${$}`;if(ge={x:ne,y:_e,width:re.width,height:re.height},A==="underline"){let ze=re.width+2;I.push({type:"underline",key:`u:${Q}`,annotationId:le,x:ne-1,y:_e+re.height-7.2,width:ze,height:8,color:F,path:xa(te,ze),isNote:!1,label:V})}else{let ze=Math.max(3.5,re.height*B);I.push({type:"band",key:`b:${Q}`,annotationId:le,x:ne-1,y:_e+re.height*ma(B),width:re.width+2,height:ze,color:F,path:"",isNote:A==="note",label:V})}N=Math.max(N,_e+re.height+8)}}if(fe&&ge){let q=Math.min(Math.max(2,ge.x+ge.width+3),Math.max(2,O-21));I.push({type:"note",key:`n:${le}`,annotationId:le,x:q,y:Math.max(0,ge.y-1),width:19,height:19,color:F,path:"",isNote:!0,label:V})}}let T=Math.max(0,Math.ceil(N+8));d(D=>D.height===T&&bf(D.marks,I)?D:{height:T,marks:I})},[t]),p=Jr.default.useCallback(()=>{if(typeof window>"u"||a.current)return;let h=()=>{a.current=0,u()};a.current=typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(h):window.setTimeout(h,16)},[u]);return Jr.default.useEffect(()=>{let h=t&&t.current?t.current:null,g=s.current;if(!h||!g||typeof window>"u")return;let S=[];p(),S.push(window.setTimeout(p,80));let _=null;if(typeof ResizeObserver<"u"){let T=new ResizeObserver(()=>p());try{T.observe(h);let D=g.parentElement;D&&D!==h&&T.observe(D);let L=h.querySelector(".dshr-content__inner");L&&!L.contains(g)&&T.observe(L)}catch{}_=T}let v=null;if(typeof MutationObserver<"u"){v=new MutationObserver(T=>{for(let D=0;D<T.length;D+=1){let L=T[D].target;if(!g.contains(L)){p();return}}});try{v.observe(h,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["class","style","data-rendered"]})}catch{}}let E=()=>p(),O=T=>{g.contains(T.target)||p()};window.addEventListener("resize",E),h.addEventListener("load",O,!0);let N=h.contains(g);N||h.addEventListener("scroll",E,{passive:!0});let M=null,I=typeof document<"u"?document.fonts:null;if(I&&typeof I.ready=="object"&&typeof I.ready.then=="function"&&I.ready.then(()=>p()).catch(()=>{}),I&&typeof I.addEventListener=="function"){M=()=>p();try{I.addEventListener("loadingdone",M)}catch{M=null}}return()=>{for(let T=0;T<S.length;T+=1)window.clearTimeout(S[T]);if(a.current&&(typeof window.cancelAnimationFrame=="function"?window.cancelAnimationFrame(a.current):window.clearTimeout(a.current),a.current=0),_&&_.disconnect(),v&&v.disconnect(),window.removeEventListener("resize",E),h.removeEventListener("load",O,!0),N||h.removeEventListener("scroll",E),I&&M)try{I.removeEventListener("loadingdone",M)}catch{}}},[t,p]),Jr.default.useEffect(()=>{if(p(),typeof window>"u")return;let h=window.setTimeout(p,40);return()=>window.clearTimeout(h)},[e,r,o,p]),(0,Nn.jsx)("div",{ref:s,className:"dshr-anno-layer",style:c.height>0?{height:`${c.height}px`}:void 0,"data-anno-layer":"flow",children:c.marks.map(h=>{if(h.type==="note")return(0,Nn.jsx)("button",{type:"button",className:"dshr-anno-note-btn",style:{left:`${h.x}px`,top:`${h.y}px`,"--dshr-anno-color":h.color},"data-anno-id":h.annotationId,title:h.label?`\u67E5\u770B\u6279\u6CE8\uFF1A${h.label}`:"\u67E5\u770B\u6279\u6CE8","aria-label":h.label?`\u67E5\u770B\u6279\u6CE8\uFF1A${h.label}`:"\u67E5\u770B\u6279\u6CE8",onMouseDown:g=>g.preventDefault(),onClick:()=>{let g=i.current.onOpenAnnotation;typeof g=="function"&&g(h.annotationId)},children:(0,Nn.jsx)(cn,{size:12})},h.key);if(h.type==="underline"){let g=Math.max(2,Math.round(h.width*100)/100);return(0,Nn.jsx)("svg",{className:"dshr-anno-underline",style:{left:`${h.x}px`,top:`${h.y}px`,width:`${h.width}px`,height:`${h.height}px`,"--dshr-anno-color":h.color},viewBox:`0 0 ${g} 8`,preserveAspectRatio:"none","data-anno-id":h.annotationId,"aria-hidden":"true",focusable:"false",children:(0,Nn.jsx)("path",{d:h.path})},h.key)}return(0,Nn.jsx)("span",{className:`dshr-anno-band${h.isNote?" dshr-anno-band--note":""}`,style:{left:`${h.x}px`,top:`${h.y}px`,width:`${h.width}px`,height:`${h.height}px`,"--dshr-anno-color":h.color},"data-anno-id":h.annotationId,"aria-hidden":"true"},h.key)})})}var Me=require("react/jsx-runtime"),_s=new Set(["heading","paragraph","list-item","quote"]),xf=6;function Gl(t,e){let r=t.style.scrollBehavior;t.style.scrollBehavior="auto",t.scrollTop=e,t.style.scrollBehavior=r}function vf(t,e){return`${t.title||""} \xB7 ${e?.title||""}`}var yf=ht.default.memo(function({block:e}){if(e.kind==="image")return(0,Me.jsxs)("figure",{children:[e.src?(0,Me.jsx)("img",{src:e.src,alt:e.alt||"",loading:"lazy",decoding:"async"}):(0,Me.jsx)("div",{className:"dshr-translation",children:"\u56FE\u7247\u672A\u80FD\u8F7D\u5165"}),e.caption?(0,Me.jsx)("figcaption",{children:e.caption}):null]});if(e.kind==="table")return(0,Me.jsx)("div",{dangerouslySetInnerHTML:{__html:e.html||""}});if(e.kind==="code")return(0,Me.jsx)("pre",{className:"dshr-block__code",children:e.text||""});if(e.kind==="rule")return(0,Me.jsx)("hr",{});if(e.kind==="heading"){let r=`h${Math.max(1,Math.min(6,e.level||2))}`;return(0,Me.jsx)(r,{dangerouslySetInnerHTML:{__html:e.html||""}})}return(0,Me.jsx)("p",{dangerouslySetInnerHTML:{__html:e.html||""}})});function wf({state:t,onRetry:e}){return t?t.status==="loading"?(0,Me.jsx)("div",{className:"dshr-translation",children:(0,Me.jsxs)("span",{className:"dshr-translation__loading",children:[(0,Me.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u7FFB\u8BD1\u2026"]})}):t.status==="error"?(0,Me.jsxs)("div",{className:"dshr-translation is-error",children:[(0,Me.jsx)("p",{children:t.error||"\u8FD9\u6BB5\u7FFB\u8BD1\u5931\u8D25\u4E86\u3002"}),(0,Me.jsx)("button",{type:"button",className:"dshr-translation__retry",onClick:e,children:"\u91CD\u8BD5"})]}):t.zh?(0,Me.jsx)("div",{className:"dshr-translation",children:String(t.zh).split(/\n+/u).filter(Boolean).map((r,n)=>(0,Me.jsx)("p",{children:r},n))}):null:null}function Wl({book:t,chapterIndex:e,onChapterChange:r,settings:n,restore:o,onRestored:s,onSelection:a,onProgress:i,annotations:c=[],onOpenAnnotation:d,focusAnnotation:u,layoutVersion:p=0}){let h=t.chapters[e],g=ht.default.useRef(null),S=ht.default.useRef(null),_=ht.default.useRef(null),v=ht.default.useRef(0),E=ht.default.useRef(new Map),O=ht.default.useRef(!1),N=ht.default.useRef(null),M=ht.default.useRef(!0),I=ht.default.useMemo(()=>new Map((h?.blocks??[]).map(z=>[z.id,z])),[h]),[T,D]=ht.default.useState({}),[L,m]=ht.default.useState(!1);ht.default.useEffect(()=>{M.current=!0;let z=new AbortController;return N.current=z,()=>{M.current=!1,z.abort()}},[]);let A=ht.default.useCallback(z=>`${h?.id||"chapter"}:${z.id}`,[h?.id]),F=ht.default.useCallback((z,ce)=>{M.current&&D($=>({...$,[z]:{...$[z]||{},...ce}}))},[]),te=ht.default.useCallback(async()=>{if(O.current||E.current.size===0)return;O.current=!0,m(!0);let z=[...E.current.entries()].slice(0,xf);for(let[$]of z)E.current.delete($);let ce=vf(t,h);try{let $=await Qn(z.map(([re,ne])=>({id:re,text:ne.text})),{context:ce,title:t.title,signal:N.current?.signal});for(let[re]of z)$[re]?F(re,{status:"done",zh:$[re],error:void 0}):F(re,{status:"error",error:"\u7FFB\u8BD1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u8FD9\u4E00\u6BB5\u3002"})}catch($){if(!Sn($))for(let[re]of z)F(re,{status:"error",error:$?.message||"\u7FFB\u8BD1\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002"})}finally{O.current=!1,M.current&&(m(!1),E.current.size>0&&window.setTimeout(()=>{te()},120))}},[t,h,F]),B=ht.default.useCallback((z,{force:ce=!1}={})=>{if(!z||!_s.has(z.kind)||!z.text?.trim())return;let $=A(z),re=T[$];!ce&&(re?.status==="loading"||re?.status==="done")||(F($,{status:"loading",error:void 0}),E.current.set($,{text:z.text.slice(0,4e3)}),te())},[te,A,T,F]),le=ht.default.useCallback(z=>{let ce=z.slice(z.indexOf(":")+1),$=I.get(ce);$&&B($,{force:!0})},[I,B]),fe=ht.default.useCallback(()=>{for(let z of h?.blocks??[])_s.has(z.kind)&&z.text?.trim()&&B(z,{force:T[`${h.id}:${z.id}`]?.status==="error"})},[h,B,T]);ht.default.useEffect(()=>{let z=g.current;if(!z||!n.autoTranslate||typeof IntersectionObserver>"u")return;S.current?.disconnect();let ce=new IntersectionObserver($=>{for(let re of $){if(!re.isIntersecting)continue;let ne=re.target.getAttribute("data-seg-id"),_e=I.get(ne);_e&&B(_e)}},{root:z,rootMargin:"420px 0px 520px 0px",threshold:.01});for(let $ of z.querySelectorAll("[data-seg-id]"))ce.observe($);return S.current=ce,()=>ce.disconnect()},[I,h?.id,B,n.autoTranslate]),ht.default.useLayoutEffect(()=>{let z=g.current;if(!(!z||_.current?.book===t&&_.current?.index===e))if(o&&o.chapter===e){let ce=Math.max(0,Math.min(1,Number(o.scrollRatio)||0)),$=z.dataset.readerNavigation||"0",re=requestAnimationFrame(()=>{if(_.current={book:t,index:e},(z.dataset.readerNavigation||"0")!==$){s?.();return}let ne=new CustomEvent("dshr-flow-navigate",{cancelable:!0,detail:{ratio:ce}});z.dispatchEvent(ne)&&Gl(z,Math.max(0,z.scrollHeight-z.clientHeight)*ce),s?.()});return()=>cancelAnimationFrame(re)}else _.current={book:t,index:e},Gl(z,0)},[t,e]);let V=ht.default.useCallback(z=>{let ce=g.current;if(!ce)return;let $=Fl(ce,window.getSelection());if(!$){a?.(null);return}a?.({...$,source:"flow",context:h?.blocks.map(re=>re.text||"").join(`
`).slice(0,2400)||""})},[h,a]);ht.default.useEffect(()=>{if(!u?.id)return;let z=g.current,ce=z?.dataset.readerNavigation||"0",$=window.setTimeout(()=>{if((z?.dataset.readerNavigation||"0")!==ce)return;let re=u.blockId?g.current?.querySelector(`[data-anno-block="${CSS.escape(u.blockId)}"]`):null;if(!re)return;let ne=new CustomEvent("dshr-flow-navigate",{cancelable:!0,detail:{element:re}});g.current.dispatchEvent(ne)&&re.scrollIntoView({block:"center",behavior:"smooth"})},120);return()=>window.clearTimeout($)},[u]);let ge=ht.default.useCallback(()=>{let z=g.current;if(!z)return;let ce=Date.now();if(ce-v.current<600)return;v.current=ce;let $=z.scrollHeight>z.clientHeight?z.scrollTop/(z.scrollHeight-z.clientHeight):0;i?.({chapter:e,chapters:t.chapters.length,scrollRatio:Math.max(0,Math.min(1,$)),percent:Math.max(0,Math.min(100,(e+Math.max(0,Math.min(1,$)))/t.chapters.length*100))})},[t.chapters.length,e,i]),q=ht.default.useCallback(z=>{let ce=z.target.closest?.("a");if(!ce)return;let $=ce.getAttribute("data-chapter");if($){z.preventDefault();let ne=Number($);Number.isInteger(ne)&&ne>=0&&ne<t.chapters.length&&r(ne);return}let re=ce.getAttribute("href")||"";re&&!re.startsWith("#")&&(z.preventDefault(),window.open(re,"_blank","noopener,noreferrer"))},[t.chapters.length,r]);return h?(0,Me.jsxs)("div",{className:"dshr-content",ref:g,onScroll:ge,onMouseUp:V,onKeyUp:V,onClick:q,children:[(0,Me.jsxs)("div",{className:"dshr-content__inner",children:[(0,Me.jsxs)("article",{className:"dshr-chapter",children:[(0,Me.jsxs)("div",{className:"dshr-chapter__kicker",children:["\u7B2C ",e+1," / ",t.chapters.length," \u7AE0",n.autoTranslate?" \xB7 \u5B9E\u65F6\u7FFB\u8BD1\u5DF2\u5F00\u542F":""]}),h.blocks.map(z=>{let ce=A(z),$=T[ce],re=_s.has(z.kind)&&z.text?.trim();return(0,Me.jsxs)("div",{className:`dshr-block dshr-block--${z.kind}`,"data-kind":z.kind,"data-seg-id":re?z.id:void 0,"data-anno-block":z.id,children:[(0,Me.jsx)("div",{className:"dshr-block__body",children:(0,Me.jsx)(yf,{block:z})}),re?(0,Me.jsx)(wf,{state:$,onRetry:()=>le(ce)}):null]},z.id)})]}),(0,Me.jsxs)("div",{className:"dshr-chapter__nav",children:[(0,Me.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e<=0,onClick:()=>r(e-1),children:[(0,Me.jsx)(Qo,{size:15})," ",e>0?t.chapters[e-1].title:"\u5DF2\u662F\u7B2C\u4E00\u7AE0"]}),(0,Me.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:fe,disabled:L,title:"\u7FFB\u8BD1\u672C\u7AE0\u6240\u6709\u6BB5\u843D",children:[L?(0,Me.jsx)("span",{className:"dshr-spinner"}):(0,Me.jsx)(Vn,{size:15})," \u7FFB\u8BD1\u672C\u7AE0"]}),(0,Me.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e>=t.chapters.length-1,onClick:()=>r(e+1),children:[e<t.chapters.length-1?t.chapters[e+1].title:"\u5DF2\u662F\u6700\u540E\u4E00\u7AE0"," ",(0,Me.jsx)(Jo,{size:15})]})]})]}),(0,Me.jsx)(jl,{containerRef:g,annotations:c,chapterId:h.id,onOpenAnnotation:d,layoutVersion:p})]}):(0,Me.jsxs)("div",{className:"dshr-error-panel",children:[(0,Me.jsx)("h3",{children:"\u8FD9\u4E00\u7AE0\u4E0D\u5B58\u5728"}),(0,Me.jsx)("p",{children:"\u6587\u6863\u76EE\u5F55\u53EF\u80FD\u4E0D\u5B8C\u6574\uFF0C\u8BF7\u5C1D\u8BD5\u91CD\u65B0\u5BFC\u5165\u3002"})]})}var To=Ct(require("react"),1);var ks="6.5.438-reader3",Cn="/dsh-reader-assets/",ql;function _f(){return`${Cn}pdf.bundle.js?v=${ks}`}function kf(){return ql||=import(_f()).then(t=>{if(!t?.getDocument||!t.GlobalWorkerOptions)throw new Error("PDF \u5F15\u64CE\u8D44\u6E90\u683C\u5F0F\u4E0D\u6B63\u786E");return t.GlobalWorkerOptions.workerSrc=`${Cn}pdf.worker.mjs?v=${ks}`,t.GlobalWorkerOptions.rendererSrc=`${Cn}pdf.renderer.mjs?v=${ks}`,t}).catch(t=>{throw ql=null,t})}var $r=()=>new DOMException("PDF operation cancelled","AbortError"),An=t=>{if(t?.aborted)throw $r()};async function Tf(t,e,{signal:r,onRead:n,onError:o}={}){An(r);let s=256*1024,a=new Uint8Array(await e.slice(0,Math.min(s,e.size)).arrayBuffer());An(r);let i={bytes:a.length,reads:1,total:e.size};class c extends t.PDFDataRangeTransport{constructor(){super(e.size,a,!0)}aborted=!1;queue=[];active=0;requestDataRange(u,p){this.aborted||r?.aborted||(this.queue.push({begin:u,end:p}),this.pump())}pump(){for(;!this.aborted&&this.active<2&&this.queue.length;){let{begin:u,end:p}=this.queue.shift();this.active++,e.slice(u,p).arrayBuffer().then(h=>{if(this.aborted||r?.aborted)return;let g=new Uint8Array(h);if(g.length!==p-u)throw new Error("PDF \u5206\u6BB5\u8BFB\u53D6\u4E0D\u5B8C\u6574");i.bytes+=g.length,i.reads++,n?.({...i}),this.onDataRange(u,g)}).catch(h=>{this.aborted||r?.aborted||(this.abort(),o?.(h))}).finally(()=>{this.active--,this.pump()})}}abort(){this.aborted=!0,this.queue.length=0}}return n?.({...i}),{range:new c,stats:i,rangeChunkSize:s,disableStream:!0,disableAutoFetch:!0}}async function ya(t,{signal:e,onProgress:r,onRead:n,onError:o}={}){An(e);let s=await kf();An(e);let a,i,c,d,u=!1,p,h,g=new Promise((v,E)=>{h=E});g.catch(()=>{});let S=()=>p||(u=!0,clearTimeout(d),i?.abort(),e?.removeEventListener("abort",_),p=Promise.resolve().then(()=>a?.destroy()).catch(()=>{}).finally(()=>c?.destroy()),p),_=()=>{h($r()),S()};e?.addEventListener("abort",_,{once:!0});try{if(c=new s.PDFWorker({verbosity:0}),await Promise.race([c.promise,g,new Promise((O,N)=>{d=setTimeout(()=>N(new Error("PDF \u540E\u53F0\u7EBF\u7A0B\u542F\u52A8\u8D85\u65F6\uFF0C\u8BF7\u68C0\u67E5 Host \u7684 Worker \u8D44\u6E90\u4E0E\u5B89\u5168\u7B56\u7565\u3002")),1e4)})]),clearTimeout(d),An(e),typeof Worker!="function"||!(c.port instanceof Worker))throw new Error("PDF \u540E\u53F0\u7EBF\u7A0B\u4E0D\u53EF\u7528\uFF0C\u8BF7\u68C0\u67E5 /dsh-reader-assets/pdf.worker.mjs \u548C Host \u7684 Worker \u5B89\u5168\u7B56\u7565\u3002");let v;if(typeof Blob<"u"&&t instanceof Blob?(v=await Tf(s,t,{signal:e,onRead:n,onError:O=>{h(O),o?.(O),S()}}),i=v.range):v={data:(t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)).slice()},An(e),u)throw $r();a=s.getDocument({...v,worker:c,cMapUrl:`${Cn}cmaps/`,cMapPacked:!0,standardFontDataUrl:`${Cn}standard_fonts/`,wasmUrl:`${Cn}wasm/`,iccUrl:`${Cn}iccs/`,isEvalSupported:!1,disableWorkerRendering:!1,verbosity:0}),a.onProgress=r;let E=await Promise.race([a.promise,g]);if(An(e),u)throw $r();return{engine:s,pdf:E,close:S,source:v}}catch(v){throw await S(),v}}var wa=class{constructor(e=48*1024*1024){this.limit=e,this.bytes=0,this.entries=new Map}get(e){let r=this.entries.get(e);return r&&(this.entries.delete(e),this.entries.set(e,r)),r}set(e,r){this.delete(e);let n=r.bitmap.width*r.bitmap.height*4;if(n>this.limit){r.bitmap.close();return}for(this.entries.set(e,{...r,bytes:n}),this.bytes+=n;this.bytes>this.limit;)this.delete(this.entries.keys().next().value)}delete(e){let r=this.entries.get(e);r&&(this.bytes-=r.bytes,r.bitmap.close(),this.entries.delete(e))}clear(){for(let e of this.entries.keys())this.delete(e)}},_a=class{constructor(e,r,n=20){this.count=e,this.defaultHeight=r,this.gap=n,this.heights=new Map,this.tree=new Float64Array(e+1),this.paddingTop=18}setHeight(e,r){let n=r-(this.heights.get(e)??this.defaultHeight);this.heights.set(e,r);for(let o=e;o<=this.count;o+=o&-o)this.tree[o]+=n}top(e){let r=(e-1)*(this.defaultHeight+this.gap);for(let n=e-1;n>0;n-=n&-n)r+=this.tree[n];return this.paddingTop+r}height(e){return this.heights.get(e)??this.defaultHeight}pageAt(e){let r=1,n=this.count;for(;r<n;){let o=Math.ceil((r+n)/2);this.top(o)<=e?r=o:n=o-1}return r}entryAt(e){let r=this.pageAt(e);return{page:r,top:this.top(r),height:this.height(r)}}};var Sf=/[\u1100-\u11FF\u2E80-\u2EFF\u3000-\u303F\u3040-\u30FF\u3100-\u312F\u3130-\u318F\u3400-\u4DBF\u4E00-\u9FFF\uA960-\uA97F\uAC00-\uD7AF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF]/,Vl=/[.。！？!?；;…]$/;function wo(t){return!!t&&Sf.test(t)}function Ef(t){return String(t).replace(/\u0000/g,"").replace(/[\t\u00a0\u2000-\u200a\u202f\u205f\u3000]/g," ").replace(/\s+/g," ")}function ka(t){return typeof t=="number"&&Number.isFinite(t)?t:null}function Nf(t){let e=t&&t.transform;if(!Array.isArray(e)||e.length<6)return null;let r=ka(e[4]),n=ka(e[5]);if(r===null||n===null)return null;let o=ka(t.width),s=ka(t.height);return{x:r,y:n,width:o===null?null:Math.abs(o),height:s===null||s<=0?null:s}}function Af(t,e){let r=0;for(let n of t)r+=wo(n)?1:.5;return r*(e||10)}function Cf(t){return{text:"",startX:t?t.x:0,endX:t?t.x:0,y:t?t.y:0,height:t&&t.height?t.height:0,hasGeometry:!!t}}function If(t,e,r){let n=Ef(e);if(!n)return;let o="";if(t.text){let s=t.text[t.text.length-1],a=n[0];if(s===" "||a===" "||t.text.endsWith(" "))o="";else if(wo(s)||wo(a))o="";else if(r&&t.hasGeometry){let i=r.x-t.endX,c=Math.max(t.height||0,r.height||0,1);o=i>c*.18?" ":""}}if(t.text=(t.text+o+n).replace(/^ +/,""),r&&t.hasGeometry){let s=r.width===null?Af(n,r.height||t.height):r.width;t.endX=Math.max(t.endX,r.x+s),t.startX=Math.min(t.startX,r.x),r.height&&(t.height=Math.max(t.height,r.height))}}function Mf(t,e,r){if(!t||r)return!0;if(!e||!t.hasGeometry)return!1;let n=Math.max(t.height||0,e.height||0,1);return Math.abs(e.y-t.y)>n*.58||e.x<t.endX-n*2&&t.endX-t.startX>n}function Rf(t,e){let r=t.lastLine;if(!r)return!1;let n=r.height||10,o=e.height||n,s=Math.max(n,o,1),a=r.y-e.y;if(a<-s*1.2||a>s*1.68)return!0;let i=o/n;return!!(i>1.18||i<.84||e.startX-t.leftX>s*1.25||Vl.test(r.text)&&a>s*1.35&&r.endX<t.rightX-s*2)}function Of(t){let e="";for(let r of t){let n=r.text.trim();if(!n)continue;if(!e){e=n;continue}let o=e[e.length-1],s=n[0];o==="-"||wo(o)||wo(s)?e+=n:e+=" "+n}return e}function Lf(t){if(t.length<=1400)return[t];let e=[],r=t;for(;r.length>1400;){let n=Math.floor(770.0000000000001),o=Math.min(r.length,1400),s=-1;for(let i=o;i>n;i-=1)if(Vl.test(r[i-1])||r[i-1]===`
`){s=i;break}s<=0&&(s=r.lastIndexOf(" ",o),s<n&&(s=o));let a=r.slice(0,s).trim();a&&e.push(a),r=r.slice(s).trim()}return r&&e.push(r),e}function Xl(t,{metadata:e=!1}={}){let r=[],n=null,o=!1;if(Array.isArray(t))for(let[c,d]of t.entries()){if(!d||typeof d.str!="string")continue;if(!d.str.trim()){d.hasEOL&&(o=!0);continue}let u=Nf(d);Mf(n,u,o)&&(n=Cf(u),n.itemIndices=[],r.push(n)),If(n,d.str,u),n.itemIndices.push(d.__pdfItemIndex??c),o=!!d.hasEOL}let s=[],a=null;for(let c of r)c.text.trim()&&(!a||Rf(a,c)?(a={lines:[c],lastLine:c,leftX:c.startX,rightX:c.endX},s.push(a)):(a.lines.push(c),a.lastLine=c,a.leftX=Math.min(a.leftX,c.startX),a.rightX=Math.max(a.rightX,c.endX)));let i=[];for(let c of s){let d=Of(c.lines);for(let u of Lf(d)){let p=u.trim();p&&i.push({src:p,...e?{itemIndices:c.lines.flatMap(h=>h.itemIndices)}:{}})}}return{text:i.map(c=>c.src).join(`

`),segments:i}}function Df(t,e){let r=(t||[]).filter(d=>typeof d?.str=="string").map((d,u)=>({...d,__pdfItemIndex:u})),n=0;for(let d=0;d<(t||[]).length;d+=1)typeof t[d]?.str=="string"&&(r[n++].__pdfItemIndex=d);if(!e)return r;let o=r.filter(d=>d.str.trim().length>15&&d.width>e*.12),s=o.filter(d=>d.transform?.[4]<e*.3&&d.transform[4]+d.width<e*.53),a=o.filter(d=>d.transform?.[4]>=e*.48);if(s.length<4||a.length<4)return r;let i=[...new Set(o.filter(d=>d.transform?.[4]<e*.4&&d.transform[4]+d.width>e*.6).map(d=>Math.round(d.transform[5])))].sort((d,u)=>u-d),c=d=>{let u=d.transform?.[5]||0,p=i.filter(g=>g>u+3).length*2,h=i.some(g=>Math.abs(g-u)<=3);return[p+(h?1:0),h?0:d.transform?.[4]>=e*.48?2:1,-u,d.transform?.[4]||0]};return r.sort((d,u)=>{let p=c(d),h=c(u);for(let g=0;g<p.length;g+=1)if(p[g]!==h[g])return p[g]-h[g];return d.__pdfItemIndex-u.__pdfItemIndex})}function Ts(t,e,r){let n=Xl(Df(t,r),{metadata:!0});return{text:n.text,segments:n.segments.map((o,s)=>({...o,id:`p${e}-s${s}`,protectedTokens:[...new Set(o.itemIndices.map(a=>t[a]?.str?.trim()).filter(a=>a&&/[∑∫√≈≠≤≥∂∞]/u.test(a)&&!/[A-Za-z]{4}|[\u3400-\u9fff]/u.test(a)))]}))}}var Kl=String.raw`
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
`;var Yl=String.raw`
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
`;var _o=Ct(require("react"),1);var Zl="reader-a-1";function In(t){return String(t||"").split(/\r?\n/u).map(e=>e.trim()).filter(Boolean).join(`
`).slice(0,4e3)}function Pf(t,e=[]){let r=[...new Set([...e,...t.match(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]|\[\d+(?:\s*[,–—-]\s*\d+)*\]|https?:\/\/[^\s]+|\b10\.\d{4,9}\/[^\s]+/gu)||[]])].filter(s=>s&&t.includes(s)).sort((s,a)=>a.length-s.length),n=[],o=t;for(let s of r){let a=`\u27E6KEEP_${n.length}\u27E7`;o.includes(s)&&(o=o.split(s).join(a),n.push({placeholder:a,token:s}))}return{text:o,restore(s){let a=String(s||"");for(let{placeholder:i,token:c}of n){if(!a.includes(i))throw new Error("\u8BD1\u6587\u9057\u6F0F\u4E86\u516C\u5F0F\u6216\u5F15\u7528\u6807\u8BB0\uFF0C\u8BF7\u91CD\u8BD5\u672C\u6BB5\u3002");a=a.split(i).join(c)}if(/⟦KEEP_\d+⟧/u.test(a))throw new Error("\u8BD1\u6587\u5305\u542B\u65E0\u6CD5\u5BF9\u5E94\u7684\u516C\u5F0F\u6807\u8BB0\uFF0C\u8BF7\u91CD\u8BD5\u672C\u6BB5\u3002");return a}}}async function zf(t,e){if(!globalThis.crypto?.subtle)return null;let r=new TextEncoder().encode(JSON.stringify([Zl,t.documentId,e,"zh-CN",t.model?.provider,t.model?.model,t.model?.promptVersion,In(t.glossary)])),n=await crypto.subtle.digest("SHA-256",r);return`${t.documentId}:${Array.from(new Uint8Array(n),o=>o.toString(16).padStart(2,"0")).join("")}`}var Ta=class{constructor({translate:e,cache:r,onChange:n=()=>{},onModelChanged:o=()=>{},prefetchDelay:s=700,requestTimeout:a=12e4}){this.translate=e,this.cache=r,this.onChange=n,this.onModelChanged=o,this.prefetchDelay=s,this.requestTimeout=a,this.sources=new Map,this.entries=new Map,this.jobs=new Map,this.preparing=new Map,this.epoch=0,this.sequence=0,this.activePage=1,this.visibleIds=new Set,this.config={},this.disposed=!1}configure(e){if(this.disposed)return;let r={...e,glossary:In(e.glossary)},n=JSON.stringify([r.documentId,r.model,r.glossary,Zl]),o=n!==this.namespace;if(o){let s=this.config.documentId;this.epoch+=1,this.abortJobs(),s&&s!==r.documentId&&this.sources.clear(),this.entries.clear(),this.preparing.clear(),this.namespace=n,this.cacheIssue=""}if(this.config=r,(!r.enabled||!r.canTranslate)&&this.abortJobs(),r.prefetch===!1)for(let s of[...this.jobs.values()])s.page!==this.activePage&&this.abortJob(s);if(o)for(let[s,a]of this.sources)this.registerPage(s,a);this.emit(),this.pump()}setFocus(e,r=[]){if(!this.disposed){if(e!==this.activePage){this.activePage=e,this.prefetchAfter=Date.now()+this.prefetchDelay,clearTimeout(this.timer),this.timer=null;for(let n of[...this.jobs.values()])n.page!==e&&this.abortJob(n);for(let n of this.sources.keys())if(Math.abs(n-e)>3){this.sources.delete(n);for(let[o,s]of this.entries)s.page===n&&this.entries.delete(o)}}this.visibleIds=new Set(r),this.emit(),this.pump()}}registerPage(e,r){if(this.disposed)return;this.sources.set(e,r);let n=[];for(let[o,s]of(r.segments||[]).entries()){let a=s.id||`p${e}-s${o}`,i=`${e}:${a}`;if(this.entries.get(i)?.src===s.src)continue;let c={...s,id:a,uid:i,index:o,page:e,status:"checking",zh:"",cached:!1};this.entries.set(i,c),n.push(c)}if(n.length){let o=Symbol(),s=this.epoch;this.preparing.set(e,o),Promise.all(n.map(a=>this.prepare(a,s))).finally(()=>{this.preparing.get(e)===o&&(this.preparing.delete(e),this.pump())})}this.emit()}fresh(e,r){return!this.disposed&&r===this.epoch&&this.entries.get(e.uid)===e}async prepare(e,r){try{let n=e.src.replace(/\s/gu,"");if(n&&(n.match(/[\u3400-\u9fff]/gu)||[]).length/n.length>=.55){e.zh=e.src,e.status="done",e.passthrough=!0,this.emit();return}if(e.key=await zf(this.config,e.src),!this.fresh(e,r))return;let o=e.key&&await this.cache?.get(e.key);if(!this.fresh(e,r))return;typeof o?.zh=="string"&&o.zh.trim()?(e.zh=o.zh,e.cached=!0,e.status="done"):e.status="queued"}catch{if(!this.fresh(e,r))return;e.status="queued",this.cacheIssue="\u672C\u5730\u7F13\u5B58\u6682\u4E0D\u53EF\u7528\uFF0C\u672C\u6B21\u8BD1\u6587\u4ECD\u53EF\u9605\u8BFB\u3002"}this.emit(),this.pump()}abortJob(e){clearTimeout(e.timeout),e.controller.abort(),this.jobs.delete(e.id);for(let r of e.entries)this.entries.get(r.uid)===r&&r.job===e.id&&(r.status="queued")}abortJobs(){clearTimeout(this.timer),this.timer=null;for(let e of[...this.jobs.values()])this.abortJob(e)}pump(){if(!(this.disposed||!this.config.enabled||!this.config.canTranslate||!this.config.documentId))for(;this.jobs.size<2;){let e=[...this.entries.values()].filter(d=>d.page===this.activePage),r=e.some(d=>d.status==="queued"||d.status==="checking"||d.status==="loading"),n=[...this.entries.values()].filter(d=>d.status==="queued"&&!this.preparing.has(d.page)&&(d.page===this.activePage||this.config.prefetch!==!1&&!r&&d.page===this.activePage+1)).sort((d,u)=>d.page-this.activePage-(u.page-this.activePage)||Number(this.visibleIds.has(u.id))-Number(this.visibleIds.has(d.id))||d.index-u.index);if(!n.length)return;let o=n[0];if(o.page!==this.activePage&&Date.now()<(this.prefetchAfter||0)){this.timer||(this.timer=setTimeout(()=>{this.timer=null,this.pump()},this.prefetchAfter-Date.now()));return}let s=[],a=0,i=e.some(d=>d.status==="done")?3:1;for(let d of n){if(d.page!==o.page||s.length>=i||a+d.src.length>3e3&&s.length)break;s.push(d),a+=d.src.length}let c={id:++this.sequence,epoch:this.epoch,controller:new AbortController,page:o.page,entries:s,config:this.config};this.jobs.set(c.id,c);for(let d of s)d.status="loading",d.job=c.id,d.error="";c.timeout=setTimeout(()=>{if(this.jobs.get(c.id)===c){this.abortJob(c);for(let d of s)this.fresh(d,c.epoch)&&(d.status="error",d.error="\u672C\u6BB5\u7FFB\u8BD1\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5\u6216\u7A0D\u540E\u7EE7\u7EED\u3002");this.emit(),this.pump()}},this.requestTimeout),this.emit(),this.run(c)}}async run(e){let r=n=>!e.controller.signal.aborted&&this.fresh(n,e.epoch)&&n.job===e.id;try{let n=this.sources.get(e.page)?.segments||[],o=e.entries.map(d=>Pf(d.src,d.protectedTokens)),s=e.entries[0].index,a=n.slice(Math.max(0,s-1),s+e.entries.length+1).map(d=>d.src);s===0&&this.sources.get(e.page-1)?.segments?.length&&a.unshift(this.sources.get(e.page-1).segments.at(-1).src),s+e.entries.length>=n.length&&this.sources.get(e.page+1)?.segments?.length&&a.push(this.sources.get(e.page+1).segments[0].src);let i=a.join(`
`).slice(0,1200),c=await this.translate(e.entries.map((d,u)=>({id:d.id,text:o[u].text})),{title:e.config.title,context:i,glossary:e.config.glossary,expectedModel:e.config.model,signal:e.controller.signal,includeMetadata:!0});if(c.model&&(c.model.provider!==e.config.model?.provider||c.model.model!==e.config.model?.model)||c.promptVersion&&c.promptVersion!==e.config.model?.promptVersion){let d=new Error("\u9ED8\u8BA4\u6A21\u578B\u5DF2\u53D8\u5316\uFF0C\u8BF7\u5237\u65B0\u7FFB\u8BD1\u670D\u52A1\u3002");throw d.code="MODEL_CHANGED",d}for(let[d,u]of e.entries.entries())if(r(u)){try{let p=c.translations?.[u.id];if(!p?.trim())throw new Error("\u672C\u6BB5\u6CA1\u6709\u8FD4\u56DE\u8BD1\u6587\uFF0C\u8BF7\u91CD\u8BD5\u3002");u.zh=o[d].restore(p),u.status="done",u.cached=!1,u.key&&Promise.resolve(this.cache?.put({key:u.key,bookId:e.config.documentId,zh:u.zh})).catch(()=>{r(u)&&(this.cacheIssue="\u8BD1\u6587\u5DF2\u5B8C\u6210\uFF0C\u4F46\u672C\u5730\u7F13\u5B58\u672A\u80FD\u4FDD\u5B58\u3002",this.emit())})}catch(p){u.status="error",u.error=p.message}this.emit()}}catch(n){for(let o of e.entries)r(o)&&(o.status="error",o.error=n.message||"\u672C\u6BB5\u7FFB\u8BD1\u5931\u8D25\u3002");!e.controller.signal.aborted&&e.epoch===this.epoch&&n.code==="MODEL_CHANGED"&&this.onModelChanged()}finally{clearTimeout(e.timeout),this.jobs.delete(e.id),this.disposed||(this.emit(),this.pump())}}retry(e,r){if(e===this.activePage)for(let n of[...this.jobs.values()])n.page!==e&&this.abortJob(n);for(let n of this.entries.values())if(n.page===e&&(r?n.id===r:n.status==="error")){if(n.status==="loading"||n.status==="checking")continue;n.status="queued",n.error="",n.cached=!1}this.emit(),this.pump()}emit(){if(this.disposed)return;let e={};for(let r of this.entries.values())(e[r.page]||=[]).push({...r});for(let r of Object.values(e))r.sort((n,o)=>n.index-o.index);this.onChange({pages:e,cacheIssue:this.cacheIssue||""})}dispose(){this.disposed=!0,this.abortJobs(),this.sources.clear(),this.entries.clear()}};var ye=require("react/jsx-runtime");function Ql({page:t,source:e,rows:r=[],activeId:n,originRef:o,translation:s,onActivate:a,onClose:i}){let c=_o.default.useRef(null),{preferences:d,updatePreferences:u,paused:p,setPaused:h,modelError:g,refreshModel:S,cacheIssue:_,retry:v}=s,[E,O]=_o.default.useState(d.glossary||"");_o.default.useEffect(()=>O(d.glossary||""),[d.glossary]);let N=r.filter(L=>L.status==="done").length,M=r.filter(L=>L.status==="error").length,I=r.filter(L=>L.cached).length,T=r.map(L=>L.status).join(",");_o.default.useEffect(()=>{if(!d.linked||o.current!=="source")return;let L=c.current,m=[...L?.querySelectorAll("[data-translation-segment]")||[]].find(te=>te.dataset.translationSegment===n);if(!L||!m)return;let A=L.getBoundingClientRect(),F=m.getBoundingClientRect();(F.top<A.top+8||F.bottom>A.bottom-8)&&(L.scrollTop+=F.top-A.top-12)},[t,n,T,d.linked,d.fontSize]);let D=(L,m=!1)=>a(L,{origin:"translation",reveal:m});return(0,ye.jsxs)("aside",{className:"dshr-pdf-translation-panel","aria-label":"PDF \u4E2D\u6587\u5BF9\u7167",style:{"--dshr-translation-font-size":`${d.fontSize||16}px`},children:[(0,ye.jsxs)("header",{className:"dshr-pdf-translation-header",children:[(0,ye.jsxs)("div",{children:[(0,ye.jsx)("strong",{children:"\u4E2D\u6587\u5BF9\u7167"}),(0,ye.jsxs)("span",{children:["\u7B2C ",t," \u9875 \xB7 ",N,"/",r.length," \u6BB5",I?` \xB7 \u7F13\u5B58 ${I} \u6BB5`:""]})]}),(0,ye.jsx)("button",{type:"button","aria-label":"\u5173\u95ED\u8BD1\u6587\u4FA7\u680F",title:"\u5173\u95ED\u8BD1\u6587\u4FA7\u680F",onClick:i,children:"\xD7"})]}),(0,ye.jsxs)("div",{className:"dshr-pdf-translation-controls",children:[(0,ye.jsx)("button",{type:"button",onClick:()=>h(!p),children:p?"\u7EE7\u7EED\u7FFB\u8BD1":"\u6682\u505C\u7FFB\u8BD1"}),(0,ye.jsxs)("label",{children:[(0,ye.jsx)("input",{type:"checkbox",checked:d.linked!==!1,onChange:L=>u({linked:L.target.checked})}),"\u6BB5\u843D\u8054\u52A8"]}),(0,ye.jsx)("button",{type:"button","aria-label":"\u7F29\u5C0F\u8BD1\u6587\u5B57\u53F7",disabled:d.fontSize<=12,onClick:()=>u({fontSize:Math.max(12,d.fontSize-1)}),children:"A\u2212"}),(0,ye.jsx)("span",{className:"dshr-pdf-translation-font",children:d.fontSize||16}),(0,ye.jsx)("button",{type:"button","aria-label":"\u653E\u5927\u8BD1\u6587\u5B57\u53F7",disabled:d.fontSize>=24,onClick:()=>u({fontSize:Math.min(24,d.fontSize+1)}),children:"A\uFF0B"})]}),(0,ye.jsxs)("div",{className:"dshr-pdf-translation-options",children:[(0,ye.jsxs)("label",{children:[(0,ye.jsx)("input",{type:"checkbox",checked:!!d.showSource,onChange:L=>u({showSource:L.target.checked})}),"\u663E\u793A\u539F\u6587"]}),(0,ye.jsxs)("label",{children:[(0,ye.jsx)("input",{type:"checkbox",checked:d.prefetch!==!1,onChange:L=>u({prefetch:L.target.checked})}),"\u9884\u8BD1\u4E0B\u4E00\u9875"]})]}),(0,ye.jsxs)("details",{className:"dshr-pdf-glossary",children:[(0,ye.jsxs)("summary",{children:["\u6587\u6863\u672F\u8BED\u8868",d.glossary?" \xB7 \u5DF2\u542F\u7528":""]}),(0,ye.jsxs)("label",{children:["\u6BCF\u884C\u586B\u5199\u201C\u539F\u8BCD = \u4E2D\u6587\u8BD1\u6CD5\u201D",(0,ye.jsx)("textarea",{"aria-label":"\u6587\u6863\u672F\u8BED\u8868",maxLength:4e3,value:E,placeholder:`band gap = \u5E26\u9699
gate = \u6805\u6781`,onChange:L=>O(L.target.value)})]}),(0,ye.jsx)("button",{type:"button",disabled:In(E)===d.glossary,onClick:()=>u({glossary:In(E)}),children:"\u5E94\u7528\u5E76\u66F4\u65B0\u8BD1\u6587"})]}),g&&(!r.length||r.some(L=>L.status!=="done"))&&e?.segments.length!==0?(0,ye.jsxs)("div",{className:"dshr-pdf-translation-notice",role:"status",children:[g,(0,ye.jsx)("button",{type:"button",onClick:S,children:"\u5237\u65B0\u670D\u52A1"})]}):null,_?(0,ye.jsx)("div",{className:"dshr-pdf-translation-notice",role:"status",children:_}):null,p?(0,ye.jsx)("div",{className:"dshr-pdf-translation-notice",role:"status",children:"\u5DF2\u6682\u505C\uFF0C\u5DF2\u5B8C\u6210\u7684\u8BD1\u6587\u4ECD\u53EF\u9605\u8BFB\u3002"}):null,(0,ye.jsxs)("div",{className:"dshr-pdf-translation-list",ref:c,tabIndex:0,"aria-label":`\u7B2C ${t} \u9875\u8BD1\u6587`,onWheel:()=>{o.current="translation"},children:[e?e.segments.length===0?(0,ye.jsx)("p",{className:"dshr-pdf-translation-empty",children:"\u6B64\u9875\u6CA1\u6709\u53EF\u63D0\u53D6\u7684\u6587\u5B57\uFF0C\u53EF\u80FD\u662F\u626B\u63CF\u9875\u6216\u56FE\u7247\u9875\u3002"}):null:(0,ye.jsx)("p",{className:"dshr-pdf-translation-empty",children:"\u6B63\u5728\u63D0\u53D6\u5F53\u524D\u9875\u6BB5\u843D\u2026"}),(e?.segments||[]).map(L=>{let m=r.find(A=>A.id===L.id)||{status:"queued"};return(0,ye.jsxs)("article",{"data-translation-segment":L.id,"data-status":m.status,className:`dshr-pdf-translation-paragraph${n===L.id&&d.linked!==!1?" is-linked":""}`,onPointerEnter:()=>{d.linked!==!1&&D(L.id)},children:[(0,ye.jsxs)("div",{className:"dshr-pdf-translation-paragraph-head",children:[(0,ye.jsxs)("span",{children:["\u6BB5\u843D ",Number(L.id.split("-s").at(-1))+1,m.cached?" \xB7 \u7F13\u5B58":""]}),(0,ye.jsxs)("div",{children:[(0,ye.jsx)("button",{type:"button","aria-label":`\u5B9A\u4F4D\u6BB5\u843D ${L.id}`,onClick:()=>D(L.id,!0),children:"\u5B9A\u4F4D\u539F\u6587"}),m.status==="done"&&!m.passthrough?(0,ye.jsx)("button",{type:"button","aria-label":`\u91CD\u65B0\u7FFB\u8BD1\u6BB5\u843D ${L.id}`,onClick:()=>v(t,L.id),children:"\u91CD\u8BD1\u672C\u6BB5"}):null]})]}),d.showSource?(0,ye.jsx)("p",{className:"dshr-pdf-translation-original",children:L.src}):null,m.zh?(0,ye.jsx)("p",{className:"dshr-pdf-translation-result",children:m.zh}):null,m.status==="done"?null:m.status==="error"?(0,ye.jsxs)("div",{className:"dshr-pdf-translation-segment-error",children:[(0,ye.jsx)("p",{children:m.error}),(0,ye.jsx)("button",{type:"button",onClick:()=>v(t,L.id),children:"\u91CD\u8BD5\u672C\u6BB5"})]}):(0,ye.jsx)("p",{className:"dshr-pdf-translation-waiting",role:"status",children:p?"\u7B49\u5F85\u7EE7\u7EED\u7FFB\u8BD1":m.status==="loading"?"\u6B63\u5728\u7FFB\u8BD1\u672C\u6BB5\u2026":m.status==="checking"?"\u6B63\u5728\u8BFB\u53D6\u5DF2\u6709\u8BD1\u6587\u2026":"\u7B49\u5F85\u7FFB\u8BD1\u2026"})]},L.id)})]}),(0,ye.jsxs)("footer",{className:"dshr-pdf-translation-footer",children:[(0,ye.jsx)("span",{children:"\u60AC\u505C\u5BF9\u7167\u6BB5\u843D\uFF0C\u70B9\u51FB\u201C\u5B9A\u4F4D\u539F\u6587\u201D\u8FD4\u56DE\u51FA\u5904\u3002"}),M?(0,ye.jsxs)("button",{type:"button",onClick:()=>v(t),children:["\u91CD\u8BD5\u5931\u8D25\u6BB5\u843D\uFF08",M,"\uFF09"]}):null]})]})}var fr=Ct(require("react"),1);var Ss={glossary:"",fontSize:16,prefetch:!0,showSource:!1,linked:!0};function Jl({documentId:t,title:e,enabled:r,activePage:n,sources:o,visibleIds:s}){let[a,i]=fr.default.useState({documentId:"",pages:{},cacheIssue:""}),[c,d]=fr.default.useState({...Ss,documentId:""}),[u,p]=fr.default.useState(null),[h,g]=fr.default.useState(""),[S,_]=fr.default.useState(0),[v,E]=fr.default.useState(!1),O=fr.default.useRef(null);return fr.default.useEffect(()=>{if(!t)return;let N=!0;i({documentId:t,pages:{},cacheIssue:""}),E(!1);let M=new Ta({translate:Qn,cache:{get:dl,put:ul},onChange:I=>{N&&i({documentId:t,...I})},onModelChanged:()=>{N&&_(I=>I+1)}});return O.current={documentId:t,controller:M},fl(t).catch(()=>({})).then(I=>{N&&d({...Ss,...I,documentId:t,glossary:In(I.glossary),fontSize:Math.max(12,Math.min(24,Number(I.fontSize)||16))})}),()=>{N=!1,M.dispose(),O.current?.controller===M&&(O.current=null)}},[t]),fr.default.useEffect(()=>{if(!t)return;let N=new AbortController;g(""),Cl({signal:N.signal}).then(T=>{N.signal.aborted||(p({...T,documentId:t}),T.ready||g("\u7FFB\u8BD1\u6A21\u578B\u672A\u5C31\u7EEA\uFF0C\u8BF7\u5728 DSH \u8BBE\u7F6E\u4E2D\u9009\u62E9\u9ED8\u8BA4\u6A21\u578B\u3002"))}).catch(T=>{N.signal.aborted||(g(T.message||"\u7FFB\u8BD1\u670D\u52A1\u4E0D\u53EF\u7528\u3002"),p({documentId:t,ready:!1}))});let M=()=>{document.visibilityState==="visible"&&_(T=>T+1)},I=setInterval(M,6e4);return document.addEventListener("visibilitychange",M),()=>{N.abort(),clearInterval(I),document.removeEventListener("visibilitychange",M)}},[t,S]),fr.default.useEffect(()=>{let N=O.current;if(!(!N||N.documentId!==t||c.documentId!==t||u?.documentId!==t)){N.controller.configure({documentId:t,title:e,enabled:r&&!v,canTranslate:!!u.ready,model:{provider:u.provider||"",model:u.model||"",promptVersion:u.promptVersion||""},glossary:c.glossary,prefetch:c.prefetch}),N.controller.setFocus(n,s);for(let[M,I]of Object.entries(o))Math.abs(Number(M)-n)<=3&&N.controller.registerPage(Number(M),I)}},[t,e,r,v,c.glossary,c.prefetch,c.documentId,u,n,s,o]),fr.default.useEffect(()=>{t&&c.documentId===t&&hl(t,c).catch(()=>{})},[t,c]),{...a.documentId===t?a:{pages:{},cacheIssue:""},preferences:c.documentId===t?c:Ss,paused:v,model:u?.documentId===t?u:null,modelError:h,setPaused:E,refreshModel:()=>_(N=>N+1),updatePreferences:N=>d(M=>({...M,...N})),retry:(N,M)=>O.current?.controller.retry(N,M)}}var ec=Ct(require("react"),1);var Mn=require("react/jsx-runtime");function Sa(t){let e=Number(t);return Number.isFinite(e)?Math.min(1,Math.max(0,e)):0}function Ff(t,e){typeof t=="function"&&t(e)}function tc({annotations:t,onOpenAnnotation:e,page:r}){let n=ec.default.useRef(e);n.current=e;let o=Array.isArray(t)?t:[],s=[];for(let a=0;a<o.length;a+=1){let i=o[a];if(!i||!Array.isArray(i.rects)||i.rects.length===0||i.kind&&i.kind!=="pdf"||r!=null&&i.page!=null&&Number(i.page)!==Number(r))continue;let c=i.style==="underline"||i.style==="note"?i.style:"highlight",d=i.color||"#f5d76e",u=i.id==null?"":String(i.id),p=ba(`${u}|${i.createdAt||0}`),h=ga(i.width),g=va(i),S=c==="note"||typeof i.note=="string"&&i.note.trim().length>0,_=null;for(let v=0;v<i.rects.length;v+=1){let E=i.rects[v];if(!E||typeof E!="object")continue;let O=Sa(E.x),N=Sa(E.y),M=Math.min(Sa(E.w),1-O),I=Math.min(Sa(E.h),1-N);if(!(M>.002)||!(I>.001))continue;_={x:O,y:N,width:M,height:I};let T=`${u}:${v}`;if(c==="underline")s.push((0,Mn.jsx)("svg",{className:"dshr-anno-pdf-underline",style:{left:`${O*100}%`,top:`calc(${(N+I)*100}% - 4px)`,width:`${M*100}%`,height:"5px","--dshr-anno-color":d},viewBox:"0 0 100 6",preserveAspectRatio:"none","data-anno-id":u,"aria-hidden":"true",focusable:"false",children:(0,Mn.jsx)("path",{d:xa(p,100)})},`u:${T}`));else{let D=Math.max(I*h,.004),L=N+I*ma(h);s.push((0,Mn.jsx)("span",{className:"dshr-anno-pdf-band",style:{left:`${O*100}%`,top:`${L*100}%`,width:`${M*100}%`,height:`${D*100}%`,"--dshr-anno-color":d},"data-anno-id":u,"aria-hidden":"true"},`b:${T}`))}}if(S&&_){let v=_.x+_.width,E=Math.min(Math.max(.005,v+.004),.972),O=Math.max(.004,_.y);s.push((0,Mn.jsx)("button",{type:"button",className:"dshr-anno-note-btn",style:{left:`${E*100}%`,top:`${O*100}%`,"--dshr-anno-color":d},"data-anno-id":u,title:g?`\u67E5\u770B\u6279\u6CE8\uFF1A${g}`:"\u67E5\u770B\u6279\u6CE8","aria-label":g?`\u67E5\u770B\u6279\u6CE8\uFF1A${g}`:"\u67E5\u770B\u6279\u6CE8",onMouseDown:N=>N.preventDefault(),onClick:()=>Ff(n.current,u),children:(0,Mn.jsx)(cn,{size:12})},`n:${u}`))}}return(0,Mn.jsx)("div",{className:"dshr-anno-pdf-layer","data-anno-layer":"pdf",children:s})}var Se=require("react/jsx-runtime"),cc=Kl+Yl;var{useCallback:rc,useEffect:Rt,useLayoutEffect:Es,useMemo:Ns,useRef:Te,useState:Tt}=To.default,Is=612,Ms=792,As=.1,Cs=5,nc=1.2,Bf=32,$f="1000px 0px",Hf=1e7,oc=8192,Uf=2,jf=160,Gf=600;function Hr(t,e,r){return Math.min(r,Math.max(e,t))}function Ea(t,e,r,n,o=0){let s=t&&Number.isFinite(t.width)&&t.width>0?t.width:Is,a=t&&Number.isFinite(t.height)&&t.height>0?t.height:Ms,i;if((e==="fit"||e==="page")&&n>0){if(i=Math.max(1,Math.floor(n)),e==="page"&&o>0){let u=Math.floor(s/a*Math.max(1,o-36));i=Math.max(1,Math.min(i,u))}}else i=Math.max(1,Math.floor(s*Hr(r,As,Cs)));let c=i/s,d=Math.max(1,Math.floor(a*c));return{width:i,height:d,pageScale:c}}function ko(t,e,r=Hf){let n=e&&Number.isFinite(e.width)&&e.width>0?e.width:Is,o=e&&Number.isFinite(e.height)&&e.height>0?e.height:Ms,s=Math.min(Math.max(globalThis.devicePixelRatio||1,1),2),a=t*s,i=n*o*a*a;i>r&&(a*=Math.sqrt(r/i));let c=Math.max(n,o)*a;return c>oc&&(a*=oc/c),Math.max(Number.EPSILON,a)}function ac(t){let e=t&&t.name;return e==="RenderingCancelledException"||e==="AbortException"||e==="AbortError"||e==="WorkerTaskCancelled"}function sc(t){let e=t&&t.name,r=t&&t.message?String(t.message):String(t||"");return e==="PasswordException"?"\u8BE5 PDF \u5DF2\u52A0\u5BC6\uFF0C\u9700\u8981\u5BC6\u7801\u624D\u80FD\u6253\u5F00\u3002":e==="InvalidPDFException"?"\u6587\u4EF6\u4E0D\u662F\u6709\u6548\u7684 PDF\uFF0C\u6216\u8005\u5DF2\u7ECF\u635F\u574F\u3002":e==="MissingPDFException"?"\u6CA1\u6709\u627E\u5230 PDF \u6570\u636E\u3002":e==="UnexpectedResponseException"?`PDF \u6570\u636E\u8BFB\u53D6\u5931\u8D25${r?`\uFF1A${r}`:"\u3002"} `:/dynamically imported module|Importing a module script failed|Failed to fetch|error loading|Cannot find module/i.test(r)?"PDF \u5F15\u64CE\u52A0\u8F7D\u5931\u8D25\uFF08/dsh-reader-assets/pdf.bundle.js\uFF09\u3002\u8BF7\u786E\u8BA4 Host \u5DF2\u6B63\u786E\u63D0\u4F9B\u9759\u6001\u8D44\u6E90\u540E\u91CD\u8BD5\u3002":r?`PDF \u52A0\u8F7D\u5931\u8D25\uFF1A${r}`:"PDF \u52A0\u8F7D\u5931\u8D25\u3002"}function ic(t){if(!t)return null;let e=t.nodeType===1?t:t.parentElement;if(!e||typeof e.closest!="function")return null;let r=e.closest("[data-page]");if(!r)return null;let n=Number(r.getAttribute("data-page"));return Number.isFinite(n)?n:null}function Wf(t){if(!t||t.rangeCount===0)return null;let e=t.getRangeAt(0),r=typeof e.getClientRects=="function"?e.getClientRects():null;if(!r||r.length===0){let i=e.getBoundingClientRect();return i&&(i.width||i.height)?i:null}if(r.length===1)return r[0];let n=1/0,o=1/0,s=-1/0,a=-1/0;for(let i=0;i<r.length;i+=1){let c=r[i];!c||!c.width&&!c.height||(n=Math.min(n,c.left),o=Math.min(o,c.top),s=Math.max(s,c.right),a=Math.max(a,c.bottom))}if(!Number.isFinite(n))return e.getBoundingClientRect();try{return new DOMRect(n,o,Math.max(0,s-n),Math.max(0,a-o))}catch{return e.getBoundingClientRect()}}function lc(t){let e=Bf,r=t.querySelector(".dshr-pdf-content");if(r){let n=getComputedStyle(r),o=Number.parseFloat(n.paddingLeft)||0,s=Number.parseFloat(n.paddingRight)||0;e=o+s}return Math.max(120,t.clientWidth-e)}var qf=To.default.memo(function({pageNumber:e,dim:r,mode:n,scale:o,viewportWidth:s,viewportHeight:a,rendered:i,active:c=!0,registerPageElement:d,registerFrameElement:u,annotations:p,onOpenAnnotation:h}){let g=Ea(r,n,o,s,a),S=To.default.useCallback(v=>d(e,v),[e,d]),_=To.default.useCallback(v=>u(e,v),[e,u]);return(0,Se.jsx)("div",{className:"dshr-pdf-page","data-page":e,"data-active":c?"true":"false",style:c?void 0:{display:"none"},ref:S,children:(0,Se.jsx)("div",{className:"dshr-pdf-page-col",style:{width:`${g.width}px`},children:(0,Se.jsxs)("div",{className:"dshr-pdf-frame","data-page":e,"data-rendered":i?"true":"false",style:{width:`${g.width}px`,height:`${g.height}px`,"--total-scale-factor":String(g.pageScale)},ref:_,children:[(0,Se.jsx)("div",{className:"dshr-pdf-placeholder","aria-hidden":"true",children:e}),(0,Se.jsx)("canvas",{className:"dshr-pdf-canvas",width:1,height:1}),(0,Se.jsx)("div",{className:"dshr-pdf-text-layer"}),(0,Se.jsx)(tc,{annotations:p,onOpenAnnotation:h}),(0,Se.jsx)("div",{className:"dshr-pdf-page-loading","aria-hidden":"true",children:(0,Se.jsx)("span",{className:"dshr-pdf-spinner"})})]})})})});function dc({data:t,documentId:e="",fileName:r="",initialPage:n=1,autoTranslate:o=!1,pageTranslations:s,onReady:a,onPageChange:i,onPageText:c,onSelection:d,onRetryTranslation:u,annotations:p=[],onOpenAnnotation:h,focusAnnotation:g,hideTranslations:S=!1,paged:_=!1,onHideTranslations:v}){let E=Te(null);E.current={autoTranslate:o,paged:_,onReady:a,onPageChange:i,onPageText:c,onSelection:d,onRetryTranslation:u,onOpenAnnotation:h};let O=Te(null),N=Te(null),M=Te(new Map),I=Te(new Map),T=Te(new Map),D=Te(new Map),L=Te({width:Is,height:Ms}),m=Te(new Map),A=Te(new Set),F=Te([]),te=Te(new Set),B=Te(null),le=Te(null),fe=Te(null),V=Te(new wa),ge=Te(0),q=Te(!1),z=Te("fit"),ce=Te(1),$=Te(0),re=Te(0),ne=Te(!1),_e=Te(0),Q=Te(1),ze=Te(!!o),Be=Te([]),Oe=Te(new Set),dt=Te(0),Qe=Te(0),Ve=Te(0),f=Te(0),l=Te(null),k=Te(0),x=Te(null),se=Te(!1),he=Te(""),ie=Te(0),be=Te(!1),we=Te(!1),Fe=Te(!1),[ee,Ge]=Tt("loading"),[tt,rt]=Tt(null),[Ue,De]=Tt(null),[pe,je]=Tt(0),[Xe,ut]=Tt({}),[X,me]=Tt(null),[xe,ke]=Tt("fit"),[$e,Qt]=Tt(1),[Lt,pn]=Tt(0),[pt,Jt]=Tt(0),[gt,Yt]=Tt(!1),[Ce,nn]=Tt(Hr(Number.parseInt(n,10)||1,1,999999)),[lt,yr]=Tt({}),[Dr,Ft]=Tt(""),[on,ar]=Tt(!1),[jn,kt]=Tt(0),[bt,Et]=Tt({}),[gn,mn]=Tt([]),[sr,bn]=Tt(null),[er,xn]=Tt(!1),Zr=Te(null),wr=Te("source"),ir=o&&!S&&!er,Nt=Jl({documentId:e,title:r,enabled:ir,activePage:Ce,sources:bt,visibleIds:gn}),de=Te(!1);de.current=ir&&Nt.preferences.linked!==!1,Zr.current=sr;let y=Ns(()=>{let b=new _a(pe,Ea(X,gt?"page":xe,$e,Lt,pt).height);for(let[C,P]of Object.entries(Xe))b.setHeight(Number(C),Ea(P,gt?"page":xe,$e,Lt,pt).height);return b.paddingTop=l.current?.paddingTop??18,b},[pe,X,Xe,gt,xe,$e,Lt,pt]);l.current=y,Es(()=>{let b=x.current;x.current=null,b&&b.revision===k.current&&!_&&Wo(b.anchor)},[y,_]),Rt(()=>{o&&!S&&xn(!1)},[o,S]);function G(b,C){m.current.set(b,C),Et(P=>P[b]===C?P:Object.fromEntries(Object.entries({...P,[b]:C}).filter(([W])=>Math.abs(Number(W)-Q.current)<=3)))}function oe(b,C){return[...b?.querySelectorAll("[data-pdf-segments]")||[]].filter(P=>P.dataset.pdfSegments.split("|").includes(C))}function Je(b,{origin:C="source",reveal:P=!1}={},W=Q.current){if(wr.current=C,bn(nt=>nt?.page===W&&nt.id===b?nt:{page:W,id:b}),C==="source"&&W!==Q.current&&Tr(W),!P)return;let ae=N.current,K=oe(I.current.get(W),b)[0];if(!ae||!K)return;let Ne=K.getBoundingClientRect(),Ye=ae.getBoundingClientRect();(Ne.top<Ye.top+12||Ne.bottom>Ye.bottom-12)&&ae.scrollTo({top:Math.max(0,ae.scrollTop+Ne.top-Ye.top-28),behavior:"auto"})}function vt(){let b=N.current,C=I.current.get(Q.current);if(!b||!C)return;let P=b.getBoundingClientRect(),W=new Set;for(let Ne of C.querySelectorAll("[data-pdf-segments]")){let Ye=Ne.getBoundingClientRect();if(Ye.bottom>P.top+4&&Ye.top<P.bottom-4)for(let nt of Ne.dataset.pdfSegments.split("|"))W.add(nt)}let ae=[...W];mn(Ne=>Ne.join("|")===ae.join("|")?Ne:ae);let K=Zr.current;ae.length&&(!K||K.page!==Q.current||!W.has(K.id)&&wr.current==="source")&&Je(ae[0])}Rt(()=>{for(let b of I.current.values())for(let C of b.querySelectorAll("[data-pdf-segments]"))de.current&&Number(b.dataset.page)===sr?.page&&C.dataset.pdfSegments.split("|").includes(sr.id)?C.dataset.pdfLinked="true":delete C.dataset.pdfLinked},[sr,lt,bt,ir,Nt.preferences.linked]),Rt(()=>{if(ee!=="ready")return;let b=requestAnimationFrame(vt);return()=>cancelAnimationFrame(b)},[Ce,ee,bt,ir]),Rt(()=>{if(!e||!ir||Nt.paused||Nt.preferences.prefetch===!1||ee!=="ready"||!lt[Ce]||Ce>=pe)return;let b=!1,C=ge.current,P=Ce+1,W=setTimeout(async()=>{if(!(dt.current>0))try{let ae=await le.current?.getPage(P);if(!ae||b)return;let K=await ae.getTextContent();if(b||C!==ge.current)return;G(P,Ts(K.items,P,ae.getViewport({scale:1}).width))}catch{}},850);return()=>{b=!0,clearTimeout(W)}},[e,Ce,pe,ee,ir,Nt.paused,Nt.preferences.prefetch,lt]),ze.current=!!o,z.current=xe,ce.current=$e,$.current=Lt,re.current=pt,ne.current=gt,_e.current=pe,X&&(L.current=X);function Ke(b){let C=D.current.get(b);return C||L.current}function xt(b){return Ea(Ke(b),ne.current?"page":z.current,ce.current,$.current,re.current)}function Bt(b){return xt(b).pageScale}function _r(b){let C=T.current.get(b);return C||(C={page:null,token:0,wantRender:!1,rendered:!1,rendering:!1,renderTask:null,textLayer:null,textContent:null,grouped:null,lastRenderScale:null,lastRasterScale:0,textLayerReady:!1},T.current.set(b,C)),C}function Pr(b,C){yr(P=>{if(C)return P[b]?P:{...P,[b]:!0};if(!P[b])return P;let W={...P};return delete W[b],W})}function yt(b,C,P){if(!(C>0)||!(P>0))return!1;let W=D.current.get(b);return W&&Math.abs(W.width-C)<.05&&Math.abs(W.height-P)<.05?!1:(!x.current&&!E.current?.paged&&(x.current={anchor:vn(),revision:k.current}),D.current.set(b,{width:C,height:P}),ut(ae=>({...ae,[b]:{width:C,height:P}})),kr(),!0)}function an(){if(E.current?.paged)return;let b=N.current;if(!b)return;let C=b.querySelector(".dshr-pdf-content");C&&l.current&&(l.current.paddingTop=Number.parseFloat(getComputedStyle(C).paddingTop)||0)}function kr(){Ve.current||(Ve.current=requestAnimationFrame(()=>{Ve.current=0,an()}))}function Tr(b){if(!Number.isFinite(b)||b===Q.current||(Q.current=b,nn(b),wr.current="source",!Fe.current))return;let C=E.current&&E.current.onPageChange;C&&C(b)}function sn(){if(E.current?.paged||!Fe.current)return;let b=N.current;if(!b)return;let C=l.current;if(!C?.count)return;let P=b.scrollTop+Hr(b.clientHeight*.28,48,240);Tr(C.pageAt(P))}function vn(){if(E.current?.paged||!N.current||!l.current?.count)return null;let b=N.current.scrollTop,C=l.current.entryAt(b+1);return{page:C.page,ratio:Hr((b-C.top)/C.height,0,1)}}function Wo(b){!b||E.current?.paged||!N.current||!l.current?.count||(N.current.scrollTop=Math.max(0,l.current.top(b.page)+b.ratio*l.current.height(b.page)))}function es(b){requestAnimationFrame(()=>{requestAnimationFrame(()=>{q.current||b()})})}function zr(b){if(!ze.current||te.current.has(b))return;let C=m.current.get(b);if(!C||(te.current.add(b),!C.text))return;let P=E.current&&E.current.onPageText;P&&P(b,{text:C.text,segments:C.segments.map(W=>({src:W.src}))})}function ts(){A.current.forEach(b=>zr(b))}function lr(b,C,P){return!q.current&&P===ge.current&&C===b.token&&b.wantRender}async function rs(b){let C=le.current,P=B.current,W=I.current.get(b);if(!C||!P||!W)return;let ae=ge.current,K=_r(b),Ne=K.token+=1;if(K.renderTask){try{K.renderTask.cancel()}catch{}K.renderTask=null}if(K.textLayer){try{K.textLayer.cancel()}catch{}K.textLayer=null}let Ye=W.querySelector("canvas.dshr-pdf-canvas"),nt=W.querySelector(".dshr-pdf-text-layer");if(!(!Ye||!nt)){K.rendering=!0,K.renderFailed=!1;try{let He=K.page;if(!He){if(He=await C.getPage(b),!lr(K,Ne,ae))return;K.page=He}let mt=He.getViewport({scale:1}),wt=Ke(b);(Math.abs(mt.width-wt.width)>.05||Math.abs(mt.height-wt.height)>.05)&&yt(b,mt.width,mt.height);let ct=xt(b),bo=Ke(b),os=()=>E.current?.paged?b===Q.current:A.current.has(b),as=ko(ct.pageScale,bo),wn=!K.rendered&&V.current.get(b);wn&&(Ye.width=wn.bitmap.width,Ye.height=wn.bitmap.height,Ye.getContext("2d",{alpha:!1}).drawImage(wn.bitmap,0,0),K.rendered=!0,K.lastRenderScale=wn.scale,K.lastRasterScale=wn.rasterScale,W.dataset.pdfQuality=wn.rasterScale>=as-.002?"full":"preview",O.current&&(O.current.dataset.pdfCacheHits=String((Number(O.current.dataset.pdfCacheHits)||0)+1)),Pr(b,!0));let Lu=K.lastRenderScale===null||Math.abs(K.lastRenderScale-ct.pageScale)>=.002,xo=os()?as:Math.min(ko(ct.pageScale,bo,2e6),ct.pageScale);if(!K.rendered||Lu||K.lastRasterScale<xo-.002){let cr=Math.min(xo,ct.pageScale),Ko=!K.rendered&&cr<xo-.002?[cr,xo]:[xo];for(let Qr=0;Qr<Ko.length;Qr++){if(Qr&&(await new Promise(Zt=>setTimeout(Zt,32)),!lr(K,Ne,ae)||!os()))return;let Gn=Ko[Qr],Wn=He.getViewport({scale:Gn}),Nr=document.createElement("canvas");Nr.width=Math.max(1,Math.floor(Wn.width)),Nr.height=Math.max(1,Math.floor(Wn.height));try{let Zt=He.render({canvas:Nr,viewport:Wn,intent:"display",background:"#ffffff"});Zt.onContinue=tr=>setTimeout(()=>{lr(K,Ne,ae)?tr():Zt.cancel()},os()?0:16),K.renderTask=Zt;try{await Zt.promise}finally{K.renderTask===Zt&&(K.renderTask=null)}if(!lr(K,Ne,ae))return;if(O.current){let tr=Zt.isWorkerRendering?"pdfWorkerRenders":"pdfMainRenders";O.current.dataset[tr]=String((Number(O.current.dataset[tr])||0)+1),O.current.dataset.pdfRenderer=Zt.isWorkerRendering?"worker":"main"}Ye.width=Nr.width,Ye.height=Nr.height;let qn=Ye.getContext("2d",{alpha:!1});if(!qn)throw new Error("\u65E0\u6CD5\u521B\u5EFA PDF \u753B\u5E03\u4E0A\u4E0B\u6587");if(qn.drawImage(Nr,0,0),K.lastRenderScale=ct.pageScale,K.lastRasterScale=Gn,K.rendered=!0,W.dataset.pdfQuality=Gn>=as-.002?"full":"preview",Pr(b,!0),typeof createImageBitmap=="function")try{let tr=await createImageBitmap(Nr);if(!lr(K,Ne,ae)){tr.close();return}V.current.set(b,{bitmap:tr,scale:ct.pageScale,rasterScale:Gn}),O.current&&(O.current.dataset.pdfCacheBytes=String(V.current.bytes))}catch{}}finally{Nr.width=0,Nr.height=0}}}if(E.current?.paged?b!==Q.current:!A.current.has(b))return;try{let cr=K.textContent;if(!cr){if(cr=await He.getTextContent(),!lr(K,Ne,ae))return;K.textContent=cr}K.grouped||(K.grouped=Ts(cr.items,b,mt.width),G(b,K.grouped)),nt.replaceChildren();let Ko=He.getViewport({scale:ct.pageScale}),Qr=new P.TextLayer({textContentSource:cr,container:nt,viewport:Ko});K.textLayer=Qr;try{await Qr.render()}finally{K.textLayer===Qr&&(K.textLayer=null)}if(!lr(K,Ne,ae))return;K.textLayerReady=!0;let Gn=Qr.textDivs||[],Wn=new Map,Nr=0;cr.items.forEach((Zt,qn)=>{typeof Zt.str=="string"&&Wn.set(qn,Gn[Nr++])});for(let Zt of K.grouped.segments)for(let qn of Zt.itemIndices||[]){let tr=Wn.get(qn);if(!tr)continue;let Yo=new Set((tr.dataset.pdfSegments||"").split("|").filter(Boolean));Yo.add(Zt.id),tr.dataset.pdfSegments=[...Yo].join("|"),tr.dataset.pdfSegment=[...Yo][0],de.current&&Zr.current?.page===b&&Yo.has(Zr.current.id)&&(tr.dataset.pdfLinked="true")}vt()}catch(cr){ac(cr)||console.warn("[dsh-reader] PDF \u6587\u672C\u5C42\u6E32\u67D3\u5931\u8D25",cr)}if(!lr(K,Ne,ae))return;A.current.has(b)&&zr(b)}catch(He){ac(He)||(K.renderFailed=!0,console.warn(`[dsh-reader] \u7B2C ${b} \u9875\u6E32\u67D3\u5931\u8D25`,He))}finally{K.rendering=!1}}}function qo(){if(!q.current)for(;dt.current<Uf&&Be.current.length>0;){Be.current.sort((Ne,Ye)=>Math.abs(Ne.pageNumber-Q.current)-Math.abs(Ye.pageNumber-Q.current));let b=Be.current[0],C=T.current.get(Q.current);if(b.pageNumber!==Q.current&&(!C?.rendered||C.rendering))break;let P=Be.current.shift();Oe.current.delete(P.pageNumber);let W=T.current.get(P.pageNumber);if(!W||!W.wantRender||W.rendering||!I.current.has(P.pageNumber))continue;dt.current+=1;let ae=ge.current,K=W.token+1;rs(P.pageNumber).catch(()=>{}).finally(()=>{if(ae===ge.current){if(dt.current=Math.max(0,dt.current-1),W.wantRender&&I.current.has(P.pageNumber)){let Ne=xt(P.pageNumber),nt=(E.current?.paged?P.pageNumber===Q.current:A.current.has(P.pageNumber))&&W.rendered&&!W.renderFailed&&W.lastRasterScale<ko(Ne.pageScale,Ke(P.pageNumber))-.002;(W.token!==K||nt||W.rendered&&Math.abs((W.lastRenderScale||0)-Ne.pageScale)>.002)&&yn(P.pageNumber,{front:!0})}qo()}})}}function yn(b,{front:C=!1}={}){if(!I.current.has(b))return;let P=_r(b);if(P.wantRender=!0,C&&b===Q.current&&!P.rendered)for(let[ae,K]of T.current)ae!==b&&K.renderTask&&!A.current.has(ae)&&(K.token++,K.renderTask.cancel());if(P.rendering)return;if(Oe.current.has(b)){C&&Be.current.sort((ae,K)=>(K.pageNumber===b)-(ae.pageNumber===b));return}if(P.rendered&&P.lastRenderScale!==null){let ae=xt(b);if((P.textLayerReady||(E.current?.paged?b!==Q.current:!A.current.has(b)))&&Math.abs(P.lastRenderScale-ae.pageScale)<.002&&P.lastRasterScale>=(b===Q.current?ko(ae.pageScale,Ke(b)):Math.min(ko(ae.pageScale,Ke(b),2e6),ae.pageScale))-.002)return}Oe.current.add(b);let W={pageNumber:b};C?Be.current.unshift(W):Be.current.push(W),qo()}function w(b){let C=T.current.get(b);if(!C)return;if(C.wantRender=!1,C.token+=1,C.renderTask){try{C.renderTask.cancel()}catch{}C.renderTask=null}if(C.textLayer){try{C.textLayer.cancel()}catch{}C.textLayer=null}let P=I.current.get(b);if(P){let W=P.querySelector("canvas.dshr-pdf-canvas");W&&(W.width=0,W.height=0);let ae=P.querySelector(".dshr-pdf-text-layer");ae&&ae.replaceChildren()}if(C.page){try{C.page.cleanup()}catch{}C.page=null}C.textContent=null,C.grouped=null,m.current.delete(b),C.lastRenderScale=null,C.lastRasterScale=0,C.textLayerReady=!1,C.rendered&&(C.rendered=!1,Pr(b,!1)),Be.current.length>0&&(Be.current=Be.current.filter(W=>W.pageNumber!==b)),Oe.current.delete(b),T.current.delete(b)}function R(){for(let[b,C]of T.current){if(!C.rendered||!C.wantRender||C.rendering)continue;let P=xt(b);(!C.textLayerReady||C.lastRenderScale===null||Math.abs(C.lastRenderScale-P.pageScale)>.002)&&yn(b)}}function J(b=jf){Qe.current&&clearTimeout(Qe.current),Qe.current=setTimeout(()=>{Qe.current=0,R()},b)}function Le(b){k.current++,x.current=null,b=Hr(Math.round(Number(b)||1),1,_e.current||1);let C=N.current;if(E.current?.paged){Tr(b);return}if(!C||!l.current?.count){Tr(b);return}let P=l.current.top(b)-10;typeof C.scrollTo=="function"?C.scrollTo({top:Math.max(0,P),behavior:"auto"}):C.scrollTop=Math.max(0,P),Tr(b)}function Ee(b){let C=N.current;C&&C.scrollBy({top:b*C.clientHeight*.92,behavior:"auto"})}function We(b){!b||E.current?.paged||(x.current={anchor:b,revision:k.current})}function ft(b){let C=vn(),P=z.current==="fit"?Bt(Q.current):ce.current,W=Hr(P*b,As,Cs);ne.current=!1,Yt(!1),z.current="custom",ce.current=W,ke("custom"),Qt(W),We(C)}function Sr(){let b=vn();ne.current=!1,Yt(!1),z.current="fit",ke("fit"),We(b)}function Er(){let b=vn(),C=!ne.current;ne.current=C,Yt(C),z.current="fit",ke("fit"),We(b),kr()}function Fr(){Le(Math.max(1,Q.current-1),"smooth")}Rt(()=>{let b=N.current;if(!b||ee!=="ready")return;let C=P=>{(Number(P.detail)||1)>0?Vo():Fr()};return b.addEventListener("dshr-pdf-page-turn",C),()=>b.removeEventListener("dshr-pdf-page-turn",C)},[ee,pe,Ce]);function Vo(){Le(Math.min(_e.current||1,Q.current+1),"smooth")}function yu(b,C){let P=m.current.get(b);if(!P||!P.text)return;let W=P.text,ae=C.replace(/\s+/g," ").trim(),K=ae?W.indexOf(ae):-1,Ne=Gf,Ye=0;if(K>=0){let mt=Math.max(80,Math.floor((Ne-Math.min(ae.length,Ne-160))/2));Ye=Math.max(0,K-mt)}let nt=Math.min(W.length,Ye+Ne);return nt-Ye<Ne&&(Ye=Math.max(0,nt-Ne)),W.slice(Ye,nt).trim()||void 0}function Xo(){if(he.current="",!se.current)return;se.current=!1;let b=E.current&&E.current.onSelection;b&&b(null)}function Fi(){let b=globalThis.getSelection?globalThis.getSelection():null;if(!b||b.isCollapsed||b.rangeCount===0){Xo();return}let P=O.current;if(!P)return;let W=b.getRangeAt(0);if(!P.querySelector(".dshr-pdf-content")?.contains(W.commonAncestorContainer)){Xo();return}let ae=b.toString().replace(/\s+/g," ").trim();if(!ae){Xo();return}let K=ic(W.startContainer)||ic(W.endContainer)||Q.current,Ne=Wf(b);if(!Ne)return;let Ye=[K,ae,Math.round(Ne.left),Math.round(Ne.top),Math.round(Ne.width),Math.round(Ne.height)].join("|");if(Ye===he.current)return;he.current=Ye;let nt={text:ae,page:K,rect:Ne},He=I.current.get(K);if(He){let ct=Bl(W,He);ct.length>0&&(nt.pageRects=ct)}let mt=yu(K,ae);mt&&(nt.context=mt),se.current=!0;let wt=E.current&&E.current.onSelection;wt&&wt(nt)}let wu=rc((b,C)=>{C?M.current.set(b,C):M.current.delete(b)},[]),_u=rc((b,C)=>{if(C){I.current.set(b,C);for(let W of F.current)W.observe(C);let P=T.current.get(b);P&&(P.rendered=!1,P.textLayerReady=!1,P.lastRenderScale=null,Pr(b,!1))}else{let P=I.current.get(b);if(P)for(let W of F.current)W.unobserve(P);A.current.delete(b),w(b),I.current.delete(b)}},[]);function ku(b){let C=b.target;if(C&&typeof C.closest=="function"&&C.closest('button, a, input, textarea, select, [role="button"]'))return;let P=O.current;P&&typeof P.focus=="function"&&P.focus({preventScroll:!0})}function Tu(b){if(b.defaultPrevented||b.altKey||E.current?.paged)return;let C=b.target;if(C?.closest?.(".dshr-pdf-translation-panel"))return;let P=C&&C.tagName?C.tagName.toLowerCase():"";if(P==="input"||P==="textarea"||P==="select"||C&&C.isContentEditable)return;let W=N.current;if(!(!W||ee!=="ready"))switch(b.key){case"PageDown":b.preventDefault(),Ee(1);break;case"PageUp":b.preventDefault(),Ee(-1);break;case"Home":b.preventDefault(),W.scrollTo({top:0,behavior:"auto"}),Tr(1);break;case"End":b.preventDefault(),W.scrollTo({top:W.scrollHeight,behavior:"auto"}),Tr(_e.current||1);break;default:break}}function Bi(){for(let b of T.current.values()){if(b.token+=1,b.renderTask)try{b.renderTask.cancel()}catch{}if(b.textLayer)try{b.textLayer.cancel()}catch{}if(b.page)try{b.page.cleanup()}catch{}}T.current.clear()}Rt(()=>{let b=!1,C=new AbortController,P;if(ge.current+=1,q.current=!1,fe.current?.close(),fe.current=null,le.current=null,V.current.clear(),O.current){for(let ae of["pdfReadBytes","pdfSourceBytes","pdfRangeReads","pdfCacheHits","pdfCacheBytes","pdfWorkerRenders","pdfMainRenders"])O.current.dataset[ae]="0";delete O.current.dataset.pdfRenderer}Bi(),M.current.clear(),I.current.clear(),D.current.clear(),m.current.clear(),A.current.clear(),te.current.clear(),Be.current=[],Oe.current.clear(),dt.current=0,x.current=null,k.current++,we.current=!1,Ge("loading"),rt(null),De(null),je(0),ut({}),me(null),yr({}),Ft(""),ar(!1),nn(1),Et({}),bn(null),mn([]),Q.current=0,Fe.current=!1;let W=typeof Blob<"u"&&t instanceof Blob;if(!W&&!(t instanceof ArrayBuffer)&&!ArrayBuffer.isView(t)||(W?t.size===0:t.byteLength===0)){Ge("error"),rt("\u6CA1\u6709\u53EF\u663E\u793A\u7684 PDF \u6570\u636E\u3002");return}return(async()=>{try{if(P=await ya(t,{signal:C.signal,onRead:ct=>{!b&&O.current&&(O.current.dataset.pdfReadBytes=String(ct.bytes),O.current.dataset.pdfSourceBytes=String(ct.total),O.current.dataset.pdfRangeReads=String(ct.reads))},onProgress:ct=>{!b&&ct?.total>0&&De(Math.max(1,Math.min(100,Math.round(ct.loaded/ct.total*100))))},onError:ct=>{b||(Ge("error"),rt(sc(ct)))}}),b){P.close();return}fe.current=P;let{engine:ae,pdf:K}=P;B.current=ae,le.current=K;let Ne=await K.getPage(1);if(b)return;let Ye=Ne.getViewport({scale:1}),nt={width:Ye.width,height:Ye.height};L.current=nt;try{Ne.cleanup()}catch{}let He=Hr(Number.parseInt(n,10)||1,1,K.numPages),mt=null;if(He!==1)try{let ct=await K.getPage(He),bo=ct.getViewport({scale:1});mt={width:bo.width,height:bo.height},D.current.set(He,mt),ct.cleanup()}catch{}if(b)return;me(nt),ut(mt?{[He]:mt}:{}),je(K.numPages),_e.current=K.numPages,De(null),Ge("ready"),nn(He),Q.current=He;let wt=E.current&&E.current.onReady;wt&&wt({pageCount:K.numPages})}catch(ae){if(b)return;P?.close(),fe.current=null,le.current=null,De(null),Ge("error"),rt(sc(ae))}})(),()=>{if(b=!0,C.abort(),q.current=!0,ge.current+=1,Bi(),P?.close(),fe.current=null,le.current=null,V.current.clear(),Be.current=[],Oe.current.clear(),Qe.current&&(clearTimeout(Qe.current),Qe.current=0),Ve.current&&(cancelAnimationFrame(Ve.current),Ve.current=0),f.current&&(cancelAnimationFrame(f.current),f.current=0),se.current){se.current=!1;let ae=E.current&&E.current.onSelection;ae&&ae(null)}}},[t,jn]),Rt(()=>{let b=()=>Fi(),C=()=>Fi(),P=()=>{ie.current||(ie.current=requestAnimationFrame(()=>{ie.current=0;let W=globalThis.getSelection?globalThis.getSelection():null;(!W||W.isCollapsed||W.rangeCount===0)&&Xo()}))};return document.addEventListener("mouseup",b,!0),document.addEventListener("keyup",C,!0),document.addEventListener("selectionchange",P),()=>{document.removeEventListener("mouseup",b,!0),document.removeEventListener("keyup",C,!0),document.removeEventListener("selectionchange",P),ie.current&&(cancelAnimationFrame(ie.current),ie.current=0)}},[]),Es(()=>{if(ee!=="ready")return;let b=N.current;if(!b)return;let C=lc(b);C>0&&($.current=C,pn(C)),b.clientHeight>0&&(re.current=b.clientHeight,Jt(b.clientHeight))},[ee,pe]),Rt(()=>{_&&Yt(!0)},[_]),Rt(()=>{if(!_)return;let b=N.current;b&&(b.scrollTop=0)},[_]),Rt(()=>{if(!_||ee!=="ready"||pe<=0)return;A.current=new Set([Ce]),zr(Ce);let b=[Ce];for(let W=1;W<=2;W+=1)b.push(Ce+W,Ce-W);let P=b.filter((W,ae,K)=>W>=1&&W<=pe&&K.indexOf(W)===ae).map((W,ae)=>window.setTimeout(()=>yn(W,{front:ae===0}),ae===0?0:ae===1?30:1e3+(ae-2)*120));return()=>{for(let W of P)window.clearTimeout(W)}},[_,ee,Ce,pe,gt,xe,$e,Lt,pt]),Rt(()=>{if(!_||ee!=="ready")return;let b=N.current;b&&b.dispatchEvent(new CustomEvent("dshr-pdf-page-state",{detail:{page:Ce,pages:pe}}))},[_,ee,Ce,pe]),Rt(()=>{ee==="ready"&&(kr(),J())},[gt,pt,ee]),Rt(()=>{if(ee!=="ready")return;let b=N.current;if(!b)return;let C=!1,P=null,W=null,ae=()=>{let nt=lc(b),He=b.clientHeight,mt=nt>0&&Math.abs(nt-$.current)>=.5,wt=He>0&&Math.abs(He-re.current)>=.5;if(!mt&&!wt)return;let ct=mt||wt&&ne.current?vn():null;mt&&($.current=nt,pn(nt)),wt&&(re.current=He,Jt(He)),ct&&!E.current?.paged&&We(ct)},K=()=>{f.current||(k.current++,x.current=null,f.current=requestAnimationFrame(()=>{f.current=0,sn(),vt()}))},Ne=null;typeof ResizeObserver=="function"&&(Ne=new ResizeObserver(()=>{C||ae()}),Ne.observe(b)),b.addEventListener("scroll",K,{passive:!0}),!_&&typeof IntersectionObserver=="function"&&(P=new IntersectionObserver(He=>{for(let mt of He){let wt=Number(mt.target.getAttribute("data-page"));Number.isFinite(wt)&&(mt.isIntersecting?(A.current.add(wt),yn(wt,{front:!0}),zr(wt)):A.current.delete(wt))}},{root:b,rootMargin:"0px",threshold:0}),W=new IntersectionObserver(He=>{for(let mt of He){let wt=Number(mt.target.getAttribute("data-page"));Number.isFinite(wt)&&(mt.isIntersecting?yn(wt):E.current?.paged||w(wt))}},{root:b,rootMargin:$f,threshold:0}),F.current=[P,W],es(()=>{if(!C)for(let He of I.current.values())P.observe(He),W.observe(He)}));let Ye=requestAnimationFrame(()=>{C||(an(),sn())});return()=>{C=!0,cancelAnimationFrame(Ye),Ne&&Ne.disconnect(),P&&P.disconnect(),W&&W.disconnect(),F.current=[],b.removeEventListener("scroll",K)}},[ee,pe,_]),Rt(()=>{if(ee!=="ready"||pe<=0||we.current)return;we.current=!0;let b=Hr(Number.parseInt(n,10)||1,1,pe),C=setTimeout(()=>{Fe.current=!0,N.current&&(an(),Le(b,"auto"))},0);return()=>clearTimeout(C)},[ee,pe]);let $i=Te(_);Es(()=>{$i.current!==_&&($i.current=_,ee==="ready"&&(_?N.current.scrollTop=0:Le(Q.current,"auto")))},[_,ee]),Rt(()=>{ee==="ready"&&(kr(),J())},[ee,xe,$e,Lt,Xe]),Rt(()=>{ee==="ready"&&kr()},[ee,S]),Rt(()=>{ze.current=!!o,o&&ee==="ready"&&ts()},[o,ee]);let ns=Ns(()=>{if(pe<=0)return[];let b=_?2:Math.min(16,Math.max(3,Math.ceil(pt/Math.max(1,Math.min(y.defaultHeight,...y.heights.values())))+1)),C=Math.max(1,Ce-b),P=Math.min(pe,Ce+b);return Array.from({length:P-C+1},(W,ae)=>C+ae)},[_,Ce,pe,y,pt]),Hi=ns[0]||1,Ui=ns.at(-1)||0,Su=Ns(()=>{let b=new Map;for(let C of p||[]){if(!C||C.kind!=="pdf"||!Number.isFinite(C.page))continue;let P=b.get(C.page)||[];P.push(C),b.set(C.page,P)}return b},[p]);Rt(()=>{if(!g?.page||ee!=="ready")return;let b=setTimeout(()=>{Le(Hr(Number(g.page)||1,1,_e.current||1),"smooth")},80);return()=>clearTimeout(b)},[g,ee]);let Eu=(xe==="fit"?Bt(Ce):$e)<Cs-.001,Nu=(xe==="fit"?Bt(Ce):$e)>As+.001;function Au(b){let C=b.currentTarget;Ft(String(Ce)),ar(!0),requestAnimationFrame(()=>{C&&typeof C.select=="function"&&C.select()})}function Cu(b){let C=b.target.value.replace(/[^\d]/g,"").slice(0,6);Ft(C)}function Iu(){if(be.current){be.current=!1,ar(!1);return}let b=Number.parseInt(Dr,10);Number.isFinite(b)&&_e.current>0&&Le(Hr(b,1,_e.current),"auto"),ar(!1)}function Mu(){on&&Iu()}function Ru(b){b.key==="Enter"?(b.preventDefault(),b.currentTarget.blur()):b.key==="Escape"&&(b.preventDefault(),be.current=!0,ar(!1),b.currentTarget.blur())}let Ou=on?Dr:String(Ce);return(0,Se.jsxs)("div",{className:"dshr-pdf-root",ref:O,tabIndex:0,"data-dshr-pdf":"",role:"region","aria-label":r?`PDF \u9605\u8BFB\u5668\uFF1A${r}`:"PDF \u9605\u8BFB\u5668",onKeyDown:Tu,children:[ee==="ready"?(0,Se.jsxs)("div",{className:"dshr-pdf-toolbar",role:"toolbar","aria-label":"PDF \u9605\u8BFB\u5DE5\u5177\u680F",children:[r?(0,Se.jsx)("span",{className:"dshr-pdf-title",title:r,children:r}):(0,Se.jsx)("span",{className:"dshr-pdf-title"}),(0,Se.jsx)("span",{className:"dshr-pdf-toolbar-spacer"}),(0,Se.jsx)("button",{type:"button",className:"dshr-pdf-tbtn",title:"\u7F29\u5C0F","aria-label":"\u7F29\u5C0F",disabled:!Nu,onClick:()=>ft(1/nc),children:"\u2212"}),(0,Se.jsx)("span",{className:"dshr-pdf-zoom-percent","data-scale":gt?"page":xe==="fit"?"fit":$e,title:gt?"\u5F53\u524D\u4E3A\u6574\u9875\u663E\u793A":xe==="fit"?"\u5F53\u524D\u4E3A\u9002\u5408\u5BBD\u5EA6":"\u5F53\u524D\u7F29\u653E\u6BD4\u4F8B",children:gt?"\u6574\u9875":xe==="fit"?"\u9002\u5BBD":`${Math.round($e*100)}%`}),(0,Se.jsx)("button",{type:"button",className:"dshr-pdf-tbtn",title:"\u653E\u5927","aria-label":"\u653E\u5927",disabled:!Eu,onClick:()=>ft(nc),children:"\uFF0B"}),(0,Se.jsx)("button",{type:"button",className:"dshr-pdf-tbtn dshr-pdf-tbtn-wide","data-active":gt?"true":"false","aria-pressed":gt,title:gt?"\u5F53\u524D\u6574\u9875\u663E\u793A\uFF1B\u70B9\u51FB\u56DE\u5230\u9002\u5408\u5BBD\u5EA6":"\u9002\u5408\u5BBD\u5EA6\uFF1B\u70B9\u51FB\u5207\u6362\u4E3A\u6574\u9875\u663E\u793A",onClick:Er,children:gt?"\u6574\u9875":"\u9002\u5BBD"}),(0,Se.jsx)("span",{className:"dshr-pdf-toolbar-sep","aria-hidden":"true"}),(0,Se.jsx)("button",{type:"button",className:"dshr-pdf-tbtn",title:"\u4E0A\u4E00\u9875\uFF08PageUp\uFF09","aria-label":"\u4E0A\u4E00\u9875",disabled:Ce<=1,onClick:Fr,children:"\u2039"}),(0,Se.jsxs)("div",{className:"dshr-pdf-pager",children:[(0,Se.jsx)("input",{className:"dshr-pdf-page-input",inputMode:"numeric","aria-label":"\u9875\u7801",value:Ou,onChange:Cu,onFocus:Au,onBlur:Mu,onKeyDown:Ru}),(0,Se.jsxs)("span",{"aria-hidden":"true",children:["/ ",pe]})]}),(0,Se.jsx)("button",{type:"button",className:"dshr-pdf-tbtn",title:"\u4E0B\u4E00\u9875\uFF08PageDown\uFF09","aria-label":"\u4E0B\u4E00\u9875",disabled:Ce>=pe,onClick:Vo,children:"\u203A"})]}):null,(0,Se.jsxs)("div",{className:"dshr-pdf-workspace",children:[(0,Se.jsx)("div",{className:"dshr-pdf-scroll",ref:N,"data-pdf-page":_?Ce:void 0,"data-pdf-pages":_?pe:void 0,onMouseDown:ku,onPointerOver:b=>{if(!de.current||b.buttons)return;let C=b.target.closest?.("[data-pdf-segment]"),P=Number(C?.closest(".dshr-pdf-frame")?.dataset.page);C&&P&&Je(C.dataset.pdfSegment,{origin:"source"},P)},children:ee==="ready"?(0,Se.jsxs)("div",{className:"dshr-pdf-content",children:[!_&&Hi>1?(0,Se.jsx)("div",{className:"dshr-pdf-spacer","aria-hidden":"true",style:{height:y.top(Hi)-y.paddingTop}}):null,ns.map(b=>(0,Se.jsx)(qf,{pageNumber:b,dim:Ke(b),mode:gt?"page":xe,scale:$e,viewportWidth:Lt,viewportHeight:pt,active:!_||b===Ce,rendered:!!lt[b],registerPageElement:wu,registerFrameElement:_u,annotations:Su.get(b),onOpenAnnotation:h},b)),!_&&Ui<pe?(0,Se.jsx)("div",{className:"dshr-pdf-spacer","aria-hidden":"true",style:{height:y.top(pe+1)-y.top(Ui+1)}}):null]}):(0,Se.jsx)("div",{className:"dshr-pdf-status",role:ee==="error"?"alert":"status",children:ee==="error"?(0,Se.jsxs)(Se.Fragment,{children:[(0,Se.jsx)("p",{className:"dshr-pdf-status-title dshr-pdf-status-error",children:"PDF \u52A0\u8F7D\u5931\u8D25"}),(0,Se.jsx)("p",{className:"dshr-pdf-status-detail",children:tt}),(0,Se.jsx)("button",{type:"button",className:"dshr-pdf-status-retry",onClick:()=>kt(b=>b+1),children:"\u91CD\u65B0\u52A0\u8F7D"})]}):(0,Se.jsxs)(Se.Fragment,{children:[(0,Se.jsx)("span",{className:"dshr-pdf-status-spinner","aria-hidden":"true"}),(0,Se.jsx)("p",{className:"dshr-pdf-status-title",children:"\u6B63\u5728\u52A0\u8F7D PDF\u2026"}),Ue!==null?(0,Se.jsxs)("p",{className:"dshr-pdf-status-progress",children:[Ue,"%"]}):null]})})}),ir?(0,Se.jsx)(Ql,{page:Ce,source:bt[Ce],rows:e?Nt.pages[Ce]||[]:(bt[Ce]?.segments||[]).map((b,C)=>({...b,...s?.[Ce]?.segments?.[C]||{},status:s?.[Ce]?.status||"queued",error:s?.[Ce]?.error})),activeId:sr?.page===Ce?sr.id:null,originRef:wr,translation:e?Nt:{...Nt,retry:b=>{te.current.delete(b),u?.(b),zr(b)}},onActivate:(b,C)=>Je(b,C,Ce),onClose:()=>{xn(!0),v?.()}}):null]})]})}dc.displayName="PdfViewer";var uc=dc;var Ir=Ct(require("react"),1);var hb=require("react"),Ot=require("react/jsx-runtime");function Na(t,e="i"){let r=[],n=String(t??""),o=/(\*\*[^*]+\*\*|__[^_]+__|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/gu,s=0,a=0;for(let i of n.matchAll(o)){i.index>s&&r.push(n.slice(s,i.index));let c=i[0],d=`${e}-${a++}`;if(c.startsWith("**")||c.startsWith("__"))r.push((0,Ot.jsx)("strong",{children:c.slice(2,-2)},d));else if(c.startsWith("`"))r.push((0,Ot.jsx)("code",{children:c.slice(1,-1)},d));else{let u=/^\[([^\]]+)\]\(([^)\s]+)\)$/u.exec(c);u&&/^https?:\/\//iu.test(u[2])?r.push((0,Ot.jsx)("a",{href:u[2],target:"_blank",rel:"noreferrer noopener",children:u[1]},d)):r.push(c)}s=i.index+c.length}return s<n.length&&r.push(n.slice(s)),r}function fc({text:t}){let e=String(t??"").replace(/\r\n/gu,`
`).split(`
`),r=[],n=[],o=[],s=[],a=null,i=0,c=()=>{if(n.length===0)return;let h=n.join(" ");r.push((0,Ot.jsx)("p",{children:Na(h,`p${i}`)},`p-${i++}`)),n=[]},d=()=>{o.length!==0&&(r.push((0,Ot.jsx)("ul",{children:o.map((h,g)=>(0,Ot.jsx)("li",{children:Na(h,`l${i}-${g}`)},`li-${i}-${g}`))},`ul-${i++}`)),o=[])},u=()=>{s.length!==0&&(r.push((0,Ot.jsx)("blockquote",{children:s.map((h,g)=>(0,Ot.jsx)("p",{children:Na(h,`q${i}-${g}`)},`bqp-${i}-${g}`))},`bq-${i++}`)),s=[])},p=()=>{c(),d(),u()};for(let h of e){let g=h.trimEnd();if(g.trim().startsWith("```")){a===null?(p(),a=[]):(r.push((0,Ot.jsx)("pre",{children:(0,Ot.jsx)("code",{children:a.join(`
`)})},`pre-${i++}`)),a=null);continue}if(a!==null){a.push(h);continue}if(g.trim()===""){p();continue}let S=/^(#{1,4})\s+(.*)$/u.exec(g);if(S){p();let N=`h${Math.min(4,S[1].length)}`;r.push((0,Ot.jsx)(N,{children:Na(S[2],`h${i}`)},`h-${i++}`));continue}let _=/^\s*>\s?(.*)$/u.exec(g);if(_){c(),d(),s.push(_[1]);continue}let v=/^\s*[-*+]\s+(.*)$/u.exec(g);if(v){p(),o.push(v[1]);continue}let E=/^\s*\d+[.)]\s+(.*)$/u.exec(g);if(E){p(),o.push(E[1]);continue}if(/^\s*([-*_])(?:\s*\1){2,}\s*$/u.test(g)){p(),r.push((0,Ot.jsx)("hr",{},`hr-${i++}`));continue}d(),u(),n.push(g)}return a!==null&&r.push((0,Ot.jsx)("pre",{children:(0,Ot.jsx)("code",{children:a.join(`
`)})},`pre-${i++}`)),p(),(0,Ot.jsx)(Ot.Fragment,{children:r})}var Pe=require("react/jsx-runtime"),Vf=["\u5E2E\u6211\u68B3\u7406\u8FD9\u6BB5\u8BDD\u7684\u8BBA\u8BC1\u7ED3\u6784","\u89E3\u91CA\u5176\u4E2D\u7684\u4E13\u4E1A\u672F\u8BED\u548C\u80CC\u666F","\u7FFB\u8BD1\u5E76\u6307\u51FA\u5173\u952E\u8BED\u6CD5","\u8FD9\u6BB5\u548C\u6211\u7684\u7814\u7A76\u95EE\u9898\u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F"];function hc({open:t,onClose:e,seed:r,onGoogle:n,onToast:o}){let[s,a]=Ir.default.useState([]),[i,c]=Ir.default.useState(""),[d,u]=Ir.default.useState(!1),[p,h]=Ir.default.useState(""),g=Ir.default.useRef(null),S=Ir.default.useRef(null),_=r?.id??"",v=r?.text??"",E=r?.context??"",O=Ir.default.useCallback(()=>{let T=S.current;T&&requestAnimationFrame(()=>{T.scrollTop=T.scrollHeight})},[]),N=Ir.default.useCallback(async(T,{replace:D=!1,history:L}={})=>{let m=String(T??"").trim();if(!m||d)return;g.current?.abort();let A=new AbortController;g.current=A;let F={role:"user",content:m},B=D?[F]:[...L??s,F];a([...B,{role:"assistant",content:""}]),u(!0),h(""),O();let le="";try{await xs({messages:B.map(fe=>({role:fe.role,content:fe.content})),selection:v,context:E,signal:A.signal},{onDelta:fe=>{le+=fe,a(V=>{if(V.length===0)return V;let ge=[...V],q=ge[ge.length-1];return q?.role!=="assistant"?V:(ge[ge.length-1]={...q,content:le},ge)}),O()}}),le.trim()||(h("AI \u6CA1\u6709\u8FD4\u56DE\u5185\u5BB9\uFF0C\u8BF7\u91CD\u8BD5\u6216\u6362\u4E00\u79CD\u95EE\u6CD5\u3002"),a(fe=>fe.filter((V,ge)=>!(ge===fe.length-1&&V.role==="assistant"&&!V.content))))}catch(fe){if(Sn(fe))return;h(fe?.message||"AI \u8BF7\u6C42\u5931\u8D25\u3002"),a(V=>{let ge=V[V.length-1];return ge?.role==="assistant"&&!ge.content?V.slice(0,-1):V})}finally{u(!1)}},[d,E,s,O,v]);if(Ir.default.useEffect(()=>{if(!t||!_)return;g.current?.abort(),a([]),h(""),c("");let T="\u8BF7\u89E3\u91CA\u8FD9\u6BB5\u5185\u5BB9\u3002";a([{role:"user",content:T},{role:"assistant",content:""}]),u(!0);let D=new AbortController;g.current=D;let L="";return xs({messages:[{role:"user",content:T}],selection:v,context:E,signal:D.signal},{onDelta:m=>{L+=m,a(A=>{if(A.length===0)return A;let F=[...A],te=F[F.length-1];return te?.role!=="assistant"?A:(F[F.length-1]={...te,content:L},F)}),O()}}).catch(m=>{Sn(m)||h(m?.message||"AI \u8BF7\u6C42\u5931\u8D25\u3002")}).finally(()=>{u(!1),L.trim()||a(m=>m.filter((A,F)=>!(F===m.length-1&&A.role==="assistant"&&!A.content)))}),()=>D.abort()},[t,_]),Ir.default.useEffect(()=>{t||g.current?.abort()},[t]),!t)return null;let M=T=>{T.preventDefault();let D=i.trim();!D||d||(c(""),N(D))},I=T=>{let D=v||s.find(L=>L.role==="user")?.content||"";if(!D.trim()){o?.("\u5148\u5728\u6B63\u6587\u91CC\u9009\u4E2D\u4E00\u6BB5\u6587\u5B57\uFF0C\u518D\u641C\u7D22\u3002");return}n?.(D,T?"scholar":"web")};return(0,Pe.jsxs)("aside",{className:"dshr-ai","aria-label":"AI \u9605\u8BFB\u52A9\u624B",children:[(0,Pe.jsxs)("div",{className:"dshr-ai__head",children:[(0,Pe.jsx)(ln,{size:17}),(0,Pe.jsx)("strong",{children:"AI \u9605\u8BFB\u52A9\u624B"}),(0,Pe.jsx)("span",{className:"dshr-chip dshr-chip--brand",children:"DSH \u9ED8\u8BA4\u6A21\u578B"}),(0,Pe.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:e,"aria-label":"\u5173\u95ED AI \u9762\u677F",title:"\u5173\u95ED",children:(0,Pe.jsx)(dr,{size:16})})]}),(0,Pe.jsxs)("div",{className:"dshr-ai__body",ref:S,children:[s.length===0?(0,Pe.jsxs)("div",{className:"dshr-ai__welcome",children:[(0,Pe.jsx)("strong",{children:"\u9009\u4E2D\u6B63\u6587\u4E2D\u7684\u4EFB\u610F\u53E5\u5B50"}),"\uFF0C\u6211\u4F1A\u89E3\u91CA\u542B\u4E49\u3001\u672F\u8BED\u548C\u8BED\u6CD5\uFF1B\u4E5F\u53EF\u4EE5\u76F4\u63A5\u8FFD\u95EE\uFF0C\u6216\u8DF3\u8F6C Google / Google \u5B66\u672F\u7EE7\u7EED\u67E5\u3002",(0,Pe.jsx)("div",{className:"dshr-ai__suggestions",children:Vf.map(T=>(0,Pe.jsx)("button",{type:"button",onClick:()=>{N(T)},disabled:d,children:T},T))})]}):s.map((T,D)=>(0,Pe.jsxs)("div",{className:`dshr-ai__msg${T.role==="user"?" dshr-ai__msg--user":""}`,children:[(0,Pe.jsx)("span",{className:"dshr-ai__role",children:T.role==="user"?"\u4F60":"\u9605\u8BFB\u52A9\u624B"}),T.role==="assistant"?T.content?(0,Pe.jsx)(fc,{text:T.content}):d&&D===s.length-1?(0,Pe.jsxs)("span",{className:"dshr-translation__loading",children:[(0,Pe.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u601D\u8003\u2026"]}):null:T.content]},D)),p?(0,Pe.jsxs)("div",{className:"dshr-ai__error",children:[p,(0,Pe.jsx)("div",{style:{marginTop:6},children:(0,Pe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>{N(s.find(T=>T.role==="user")?.content||"\u8BF7\u91CD\u65B0\u89E3\u91CA\u8FD9\u6BB5\u5185\u5BB9\u3002",{replace:!0,history:[]})},children:[(0,Pe.jsx)(Yi,{size:13})," \u91CD\u65B0\u56DE\u7B54"]})})]}):null]}),(0,Pe.jsx)("div",{className:"dshr-ai__foot",children:(0,Pe.jsxs)("form",{onSubmit:M,children:[(0,Pe.jsx)("textarea",{className:"dshr-ai__input",placeholder:"\u8FFD\u95EE\uFF1A\u8FD9\u6BB5\u7684\u8BBA\u8BC1\u6709\u4EC0\u4E48\u95EE\u9898\uFF1F\uFF0F\u672F\u8BED\u662F\u4EC0\u4E48\u610F\u601D\uFF1F",value:i,onChange:T=>c(T.target.value),onKeyDown:T=>{T.key==="Enter"&&!T.shiftKey&&(T.preventDefault(),N(i),c(""))},disabled:d,"aria-label":"\u5411 AI \u8FFD\u95EE"}),(0,Pe.jsxs)("div",{className:"dshr-ai__actions",children:[(0,Pe.jsx)("span",{className:"dshr-ai__hint",children:"Enter \u53D1\u9001 \xB7 Shift+Enter \u6362\u884C"}),(0,Pe.jsxs)("div",{style:{display:"flex",gap:5},children:[(0,Pe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>I(!1),title:"\u7528 Google \u641C\u7D22\u9009\u4E2D\u7684\u6587\u5B57",children:[(0,Pe.jsx)(ra,{size:13})," Google"]}),(0,Pe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>I(!0),title:"\u7528 Google \u5B66\u672F\u641C\u7D22\u9009\u4E2D\u7684\u6587\u5B57",children:[(0,Pe.jsx)(na,{size:13})," \u5B66\u672F"]}),(0,Pe.jsxs)("button",{type:"submit",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:d||!i.trim(),children:[d?(0,Pe.jsx)("span",{className:"dshr-spinner"}):(0,Pe.jsx)(Zi,{size:13})," \u53D1\u9001"]})]})]})]})})]})}var yb=require("react");var qe=require("react/jsx-runtime");function pc({selection:t,translation:e,onTranslate:r,onAnnotate:n,onExplain:o,onGoogle:s,onCopy:a,onClose:i,onRetry:c}){if(!t?.text?.trim())return null;let d=t.rect,p=476/2,h=typeof window<"u"?window.innerWidth:1200,g=typeof window<"u"?window.innerHeight:800,S=d?d.left+d.width/2:h/2,_=Math.max(p+10,Math.min(h-p-10,S)),v=d&&d.top>70?d.top-46:Math.min(g-190,(d?.bottom??0)+10),E=Math.min(g-180,v+42);return(0,qe.jsxs)(qe.Fragment,{children:[(0,qe.jsxs)("div",{className:"dshr-selection",style:{left:_,top:Math.max(8,v)},role:"toolbar","aria-label":"\u9009\u4E2D\u6587\u5B57\u64CD\u4F5C",onMouseDown:O=>O.preventDefault(),children:[(0,qe.jsxs)("button",{type:"button",className:"dshr-selection__btn dshr-selection__btn--accent",onClick:()=>r(t),children:[(0,qe.jsx)(Vn,{size:14})," \u7FFB\u8BD1"]}),(0,qe.jsxs)("button",{type:"button",className:"dshr-selection__btn dshr-selection__btn--mark",onClick:()=>n(t),title:"\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u3001\u4FBF\u7B7E\u6216\u5907\u6CE8",children:[(0,qe.jsx)(oa,{size:14})," \u6807\u8BB0"]}),(0,qe.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>o(t),children:[(0,qe.jsx)(ln,{size:14})," AI \u89E3\u91CA"]}),(0,qe.jsx)("span",{className:"dshr-selection__sep"}),(0,qe.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>s(t.text,"web"),title:"\u7528 Google \u641C\u7D22",children:[(0,qe.jsx)(ra,{size:14})," Google"]}),(0,qe.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>s(t.text,"scholar"),title:"\u7528 Google \u5B66\u672F\u641C\u7D22",children:[(0,qe.jsx)(na,{size:14})," \u5B66\u672F"]}),(0,qe.jsx)("span",{className:"dshr-selection__sep"}),(0,qe.jsx)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>a(t.text),title:"\u590D\u5236\u9009\u4E2D\u6587\u5B57",children:(0,qe.jsx)(Xi,{size:14})}),(0,qe.jsx)("button",{type:"button",className:"dshr-selection__btn",onClick:i,title:"\u5173\u95ED","aria-label":"\u5173\u95ED\u9009\u4E2D\u6587\u5B57\u5DE5\u5177\u680F",children:(0,qe.jsx)(dr,{size:13})})]}),e?(0,qe.jsxs)("div",{className:"dshr-selection__pop",style:{left:_,top:E},onMouseDown:O=>O.preventDefault(),children:[(0,qe.jsxs)("div",{className:"dshr-selection__pop-head",children:[(0,qe.jsx)("span",{children:"\u4E2D\u6587\u8BD1\u6587"}),(0,qe.jsx)("button",{type:"button",onClick:i,"aria-label":"\u5173\u95ED\u8BD1\u6587",children:(0,qe.jsx)(dr,{size:12})})]}),e.status==="loading"?(0,qe.jsxs)("span",{className:"dshr-translation__loading",children:[(0,qe.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u7FFB\u8BD1\u9009\u4E2D\u5185\u5BB9\u2026"]}):e.status==="error"?(0,qe.jsxs)("span",{style:{color:"var(--dshr-error)"},children:[e.error||"\u7FFB\u8BD1\u5931\u8D25\u3002"," ",(0,qe.jsx)("button",{type:"button",className:"dshr-translation__retry",onClick:c,children:"\u91CD\u8BD5"})]}):String(e.zh||"").split(/\n+/u).filter(Boolean).map((O,N)=>(0,qe.jsx)("p",{style:{margin:N===0?0:"8px 0 0"},children:O},N))]}):null]})}var Aa=Ct(require("react"),1);var ue=require("react/jsx-runtime");function gc({settings:t,onChange:e,onClose:r,onClearLibrary:n,onOpenAppearance:o}){let[s,a]=Aa.default.useState(!1);Aa.default.useEffect(()=>{let c=d=>{d.key==="Escape"&&r()};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[r]);let i=c=>e({...t,...c});return(0,ue.jsx)("div",{className:"dshr-modal-mask",onMouseDown:c=>{c.target===c.currentTarget&&r()},children:(0,ue.jsxs)("div",{className:"dshr-modal",role:"dialog","aria-modal":"true","aria-label":"\u9605\u8BFB\u8BBE\u7F6E",children:[(0,ue.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:12},children:[(0,ue.jsxs)("div",{style:{flex:1},children:[(0,ue.jsx)("h3",{children:"\u9605\u8BFB\u8BBE\u7F6E"}),(0,ue.jsx)("p",{children:"\u8BBE\u7F6E\u53EA\u4FDD\u5B58\u5728\u672C\u673A\uFF0C\u4E0D\u5F71\u54CD DSH \u7684\u5176\u5B83\u63D2\u4EF6\u3002"})]}),(0,ue.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:r,"aria-label":"\u5173\u95ED\u8BBE\u7F6E",children:(0,ue.jsx)(dr,{size:16})})]}),(0,ue.jsxs)("div",{className:"dshr-settings-row",children:[(0,ue.jsxs)("div",{children:[(0,ue.jsx)("div",{className:"dshr-settings-row__title",children:"\u5B57\u4F53\u3001\u80CC\u666F\u4E0E\u5E03\u5C40"}),(0,ue.jsx)("div",{className:"dshr-settings-row__hint",children:"\u5B57\u4F53\u3001\u5B57\u91CD\u3001\u5B57\u53F7\u3001\u884C\u8DDD\u3001\u9605\u8BFB\u5BBD\u5EA6\u3001\u76EE\u5F55\u5BBD\u5EA6\u3001\u4EAE\u5EA6\u3001\u80CC\u666F\u989C\u8272\u4E0E\u81EA\u5B9A\u4E49\u80CC\u666F\u56FE\u7247\u3002"})]}),(0,ue.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:o,children:[(0,ue.jsx)(aa,{size:14})," \u6253\u5F00\u5916\u89C2\u9762\u677F"]})]}),(0,ue.jsxs)("div",{className:"dshr-settings-row",children:[(0,ue.jsxs)("div",{children:[(0,ue.jsx)("div",{className:"dshr-settings-row__title",children:"\u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1"}),(0,ue.jsx)("div",{className:"dshr-settings-row__hint",children:"\u6EDA\u52A8\u5230\u5916\u6587\u6BB5\u843D\u540E\u81EA\u52A8\u7FFB\u8BD1\u6210\u4E2D\u6587\uFF0C\u8BD1\u6587\u663E\u793A\u5728\u539F\u6587\u4E0B\u65B9\u3002"})]}),(0,ue.jsxs)("button",{type:"button",className:"dshr-switch",role:"switch","aria-checked":t.autoTranslate,onClick:()=>i({autoTranslate:!t.autoTranslate}),children:[(0,ue.jsx)("span",{className:"dshr-switch__track"}),t.autoTranslate?"\u5F00\u542F":"\u5173\u95ED"]})]}),(0,ue.jsxs)("div",{className:"dshr-settings-row",children:[(0,ue.jsxs)("div",{children:[(0,ue.jsx)("div",{className:"dshr-settings-row__title",children:"\u6B63\u6587\u5B57\u53F7"}),(0,ue.jsxs)("div",{className:"dshr-settings-row__hint",children:[t.fontSize,"px \xB7 \u9002\u5408\u957F\u7BC7\u9605\u8BFB\u7684\u5B57\u53F7"]})]}),(0,ue.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:5},children:[(0,ue.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--outline",onClick:()=>i({fontSize:Math.max(14,t.fontSize-1)}),"aria-label":"\u51CF\u5C0F\u5B57\u53F7",children:(0,ue.jsx)(Ki,{size:15})}),(0,ue.jsxs)("span",{className:"dshr-chip",style:{minWidth:46,justifyContent:"center"},children:[t.fontSize,"px"]}),(0,ue.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--outline",onClick:()=>i({fontSize:Math.min(26,t.fontSize+1)}),"aria-label":"\u589E\u5927\u5B57\u53F7",children:(0,ue.jsx)(ta,{size:15})})]})]}),(0,ue.jsxs)("div",{className:"dshr-settings-row",children:[(0,ue.jsxs)("div",{children:[(0,ue.jsx)("div",{className:"dshr-settings-row__title",children:"\u884C\u8DDD"}),(0,ue.jsxs)("div",{className:"dshr-settings-row__hint",children:["\u5F53\u524D ",t.lineHeight.toFixed(2)]})]}),(0,ue.jsx)("input",{type:"range",min:"1.45",max:"2.2",step:"0.05",value:t.lineHeight,onChange:c=>i({lineHeight:Number(c.target.value)}),"aria-label":"\u884C\u8DDD"})]}),(0,ue.jsxs)("div",{className:"dshr-settings-row",children:[(0,ue.jsxs)("div",{children:[(0,ue.jsx)("div",{className:"dshr-settings-row__title",children:"\u7FFB\u8BD1\u4E0E AI"}),(0,ue.jsx)("div",{className:"dshr-settings-row__hint",children:"\u4F7F\u7528 DSH \u5F53\u524D\u9ED8\u8BA4\u6A21\u578B\uFF1B\u7FFB\u8BD1\u53EA\u53D1\u9001\u5F53\u524D\u6BB5\u843D\u6216\u9009\u4E2D\u6587\u5B57\uFF0C\u4E0D\u53D1\u9001\u6574\u672C\u4E66\u3002"})]}),(0,ue.jsx)("span",{className:"dshr-chip dshr-chip--brand",children:"DSH \u9ED8\u8BA4\u6A21\u578B"})]}),(0,ue.jsxs)("div",{className:"dshr-settings-row dshr-settings-row--danger",children:[(0,ue.jsxs)("div",{children:[(0,ue.jsx)("div",{className:"dshr-settings-row__title",children:"\u6E05\u7A7A\u672C\u5730\u4E66\u67B6"}),(0,ue.jsx)("div",{className:"dshr-settings-row__hint",children:"\u5220\u9664\u5DF2\u5BFC\u5165\u7684\u6240\u6709\u6587\u6863\u3001\u6279\u6CE8\u548C\u9605\u8BFB\u8FDB\u5EA6\uFF0C\u65E0\u6CD5\u64A4\u9500\u3002"})]}),s?(0,ue.jsxs)("div",{style:{display:"flex",gap:6},children:[(0,ue.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm",onClick:()=>a(!1),children:"\u53D6\u6D88"}),(0,ue.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--danger",onClick:()=>{n(),a(!1)},children:[(0,ue.jsx)(Xn,{size:13})," \u786E\u8BA4\u6E05\u7A7A"]})]}):(0,ue.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--danger",onClick:()=>a(!0),children:[(0,ue.jsx)(Xn,{size:13})," \u6E05\u7A7A"]})]})]})})}function mc({book:t,onCancel:e,onConfirm:r}){return Aa.default.useEffect(()=>{let n=o=>{o.key==="Escape"&&e()};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[e]),(0,ue.jsx)("div",{className:"dshr-modal-mask",onMouseDown:n=>{n.target===n.currentTarget&&e()},children:(0,ue.jsxs)("div",{className:"dshr-modal",role:"dialog","aria-modal":"true","aria-label":"\u5220\u9664\u6587\u6863",children:[(0,ue.jsx)("h3",{children:"\u4ECE\u4E66\u67B6\u5220\u9664\uFF1F"}),(0,ue.jsxs)("p",{children:["\u300A",t?.title||"\u672A\u547D\u540D\u6587\u6863","\u300B\u53CA\u5176\u9605\u8BFB\u8FDB\u5EA6\u4F1A\u4ECE\u672C\u673A\u5220\u9664\u3002\u539F\u59CB\u6587\u4EF6\u4E0D\u53D7\u5F71\u54CD\u3002"]}),(0,ue.jsxs)("div",{className:"dshr-modal__actions",children:[(0,ue.jsx)("button",{type:"button",className:"dshr-btn",onClick:e,children:"\u53D6\u6D88"}),(0,ue.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--danger",onClick:r,children:[(0,ue.jsx)(Xn,{size:14})," \u5220\u9664"]})]})]})})}function bc({message:t}){return t?(0,ue.jsx)("div",{className:"dshr-toast",role:"status",children:t}):null}var to=Ct(require("react"),1);var at=require("react/jsx-runtime"),Xf=[{label:"Project Gutenberg",hint:"\u4E03\u4E07\u672C\u516C\u7248\u4E66",href:"https://www.gutenberg.org/"},{label:"Standard Ebooks",hint:"\u7CBE\u6821\u516C\u7248\u4E66",href:"https://standardebooks.org/"},{label:"arXiv",hint:"\u5F00\u653E\u83B7\u53D6\u8BBA\u6587",href:"https://arxiv.org/"},{label:"Open Library",hint:"\u5F00\u653E\u56FE\u4E66\u76EE\u5F55",href:"https://openlibrary.org/"},{label:"Internet Archive",hint:"\u516C\u7248\u4E0E\u5F00\u653E\u9986\u85CF",href:"https://archive.org/"},{label:"Wikisource",hint:"\u516C\u7248\u6587\u732E",href:"https://zh.wikisource.org/"}];function xc({open:t,busy:e,onClose:r,onSubmit:n}){let[o,s]=to.default.useState(""),[a,i]=to.default.useState(""),c=to.default.useRef(null);return to.default.useEffect(()=>{t&&(i(""),window.setTimeout(()=>c.current?.focus(),30))},[t]),to.default.useEffect(()=>{if(!t)return;let u=p=>{p.key==="Escape"&&!e&&r()};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[t,e,r]),t?(0,at.jsx)("div",{className:"dshr-modal-mask",onMouseDown:u=>{u.target===u.currentTarget&&!e&&r()},children:(0,at.jsxs)("div",{className:"dshr-modal dshr-online-modal",role:"dialog","aria-modal":"true","aria-label":"\u4ECE\u516C\u5F00\u6765\u6E90\u5BFC\u5165",children:[(0,at.jsxs)("div",{className:"dshr-online-modal__head",children:[(0,at.jsxs)("div",{children:[(0,at.jsxs)("h3",{children:[(0,at.jsx)(sa,{size:17})," \u4ECE\u516C\u5F00\u6765\u6E90\u5BFC\u5165"]}),(0,at.jsx)("p",{children:"\u7C98\u8D34\u7535\u5B50\u4E66\u6587\u4EF6\u7684\u76F4\u94FE\uFF0C\u4E0B\u8F7D\u540E\u81EA\u52A8\u52A0\u5165\u4E66\u67B6\u5E76\u6253\u5F00\u3002"})]}),(0,at.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:r,disabled:e,"aria-label":"\u5173\u95ED\u5728\u7EBF\u5BFC\u5165",children:(0,at.jsx)(dr,{size:16})})]}),(0,at.jsxs)("div",{className:"dshr-online-modal__notice",children:[(0,at.jsx)("strong",{children:"\u7248\u6743\u63D0\u793A"}),(0,at.jsx)("span",{children:"\u4EC5\u652F\u6301\u4F60\u786E\u8BA4\u6709\u6743\u4E0B\u8F7D\u7684\u516C\u5F00\u7248\u6743 / \u5F00\u653E\u83B7\u53D6\u8D44\u6E90\u3002\u672C\u529F\u80FD\u4E0D\u5185\u7F6E Z-Library \u7B49\u7248\u6743\u4E0D\u660E\u7684\u4E66\u6E90\uFF0C\u4E5F\u4E0D\u4F1A\u6293\u53D6\u767B\u5F55\u540E\u7684\u79C1\u5BC6\u9875\u9762\u3002"})]}),(0,at.jsxs)("form",{className:"dshr-online-modal__form",onSubmit:u=>{u.preventDefault();let p=o.trim();if(!/^https:\/\//iu.test(p)){i("\u8BF7\u8F93\u5165\u4EE5 https:// \u5F00\u5934\u7684\u7535\u5B50\u4E66\u6587\u4EF6\u76F4\u94FE\u3002");return}i(""),n(p)},children:[(0,at.jsx)("label",{htmlFor:"dshr-online-url",children:"\u6587\u4EF6\u76F4\u94FE"}),(0,at.jsxs)("div",{className:"dshr-online-modal__input",children:[(0,at.jsx)(tl,{size:15}),(0,at.jsx)("input",{ref:c,id:"dshr-online-url",type:"url",value:o,onChange:u=>{s(u.target.value),i("")},placeholder:"https://www.gutenberg.org/ebooks/11.epub3.images",spellCheck:"false",autoComplete:"off",disabled:e})]}),a?(0,at.jsx)("p",{className:"dshr-online-modal__error",children:a}):null,(0,at.jsx)("p",{className:"dshr-online-modal__hint",children:"\u652F\u6301 PDF / EPUB / MOBI / AZW3 / TXT / Markdown / HTML \u76F4\u94FE\uFF1B\u5355\u4E2A\u6587\u4EF6\u6700\u5927 120 MB\u3002 \u53E4\u767B\u5821\u3001Standard Ebooks\u3001arXiv\u3001Open Library\u3001Internet Archive \u7B49\u7AD9\u70B9\u53EF\u6B63\u5E38\u4F7F\u7528\u3002"}),(0,at.jsxs)("div",{className:"dshr-online-modal__actions",children:[(0,at.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--ghost",onClick:r,disabled:e,children:"\u53D6\u6D88"}),(0,at.jsx)("button",{type:"submit",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:e||o.trim()==="",children:e?"\u6B63\u5728\u4E0B\u8F7D\u2026":"\u4E0B\u8F7D\u5E76\u6253\u5F00"})]})]}),(0,at.jsxs)("div",{className:"dshr-online-modal__sources",children:[(0,at.jsx)("span",{children:"\u53BB\u54EA\u91CC\u627E\u4E66\uFF1F"}),(0,at.jsx)("div",{className:"dshr-online-modal__source-list",children:Xf.map(u=>(0,at.jsx)("a",{href:u.href,target:"_blank",rel:"noreferrer",title:u.hint,children:u.label},u.label))})]})]})}):null}var en=Ct(require("react"),1);function vc(t,e){let r=Math.max(1,e-48-56),n=t.filter(s=>Number.isFinite(s.top)&&s.bottom>s.top).toSorted((s,a)=>s.top-a.top),o=[0];for(let s of n)for(;s.bottom>o.at(-1)+48+r+.5;){let a=o.at(-1),i=s.top-48;o.push(i>a+.5?i:a+r)}return o}function Kf(t,e){let r=0,n=t.length-1;for(;r<n;){let o=Math.ceil((r+n)/2);t[o]<=e+.5?r=o:n=o-1}return r}function yc(){let t=[0],e=0;return{get page(){return e+1},get pages(){return t.length},get top(){return t[e]},get starts(){return t},replace(r,n){t=r.length?r:[0],e=Kf(t,Math.max(0,n||0))},turn(r){let n=Math.max(0,Math.min(t.length-1,e+Math.sign(r)));return n===e?!1:(e=n,!0)}}}function wc(t,e){let r=t.getBoundingClientRect(),n=[],o=(i,c)=>{i.height<2||i.width<.1||n.push({top:i.top-r.top+t.scrollTop,bottom:i.bottom-r.top+t.scrollTop,...c})},s=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let i=s.nextNode();i;i=s.nextNode()){if(!i.nodeValue?.trim()||i.parentElement.closest('[aria-hidden="true"],script,style'))continue;let c=document.createRange();c.selectNodeContents(i);for(let d of c.getClientRects())o(d,{node:i})}for(let i of e.querySelectorAll("img,svg,hr,video,canvas"))o(i.getBoundingClientRect(),{element:i,atomic:!0});n.sort((i,c)=>i.top-c.top);let a=[];for(let i of n){let c=a.at(-1),d=c&&Math.min(c.bottom,i.bottom)-Math.max(c.top,i.top);c&&!c.atomic&&!i.atomic&&d>Math.min(c.bottom-c.top,i.bottom-i.top)*.5?c.bottom=Math.max(c.bottom,i.bottom):a.push({...i})}return a}function Rs(t,e,r){let n=e+48,o=t.find(_=>_.bottom>n+.5)||t.at(-1);if(!o)return null;let s=o.element||o.node?.parentElement.closest(".dshr-block__body,.dshr-translation,.dshr-chapter__kicker")||o.node?.parentElement,a=r.getBoundingClientRect(),i=s?.getBoundingClientRect(),c=i?.height?(n-(i.top-a.top+r.scrollTop))/i.height:0;if(!o.node)return{element:s,ratio:c};let d=document.createRange(),u=1,p=o.node.length;for(;u<p;){let _=u+p>>1;d.setStart(o.node,0),d.setEnd(o.node,_);let v=d.getClientRects(),E=v[v.length-1];(E?E.top-a.top+r.scrollTop:-1/0)<o.top-1?u=_+1:p=_}let h=Math.max(0,u-1),g=h,S=document.createTreeWalker(s,NodeFilter.SHOW_TEXT);for(let _=S.nextNode();_&&_!==o.node;_=S.nextNode())g+=_.length;return{node:o.node,offset:h,textOffset:g,element:s,ratio:c}}function _c(t,e,r){if(!t)return r;let n=e.getBoundingClientRect();if(!t.node?.isConnected&&t.element?.isConnected&&Number.isFinite(t.textOffset)){let o=t.textOffset,s=document.createTreeWalker(t.element,NodeFilter.SHOW_TEXT);for(let a=s.nextNode();a;a=s.nextNode()){if(o<a.length){t.node=a,t.offset=o;break}o-=a.length}}if(t.node?.isConnected&&e.contains(t.node)&&t.node.length){let o=document.createRange(),s=Math.min(t.offset,t.node.length-1);o.setStart(t.node,s),o.setEnd(t.node,s+1);let a=o.getBoundingClientRect();if(a.height)return a.top-n.top+e.scrollTop-48}if(t.element?.isConnected&&e.contains(t.element)){let o=t.element.getBoundingClientRect();return o.top-n.top+e.scrollTop+Math.max(0,t.ratio)*o.height-48}return r}var zt=require("react/jsx-runtime"),kc='input, textarea, select, [contenteditable="true"]',Tc=".dshr-modal-mask,.dshr-modal,.dshr-appearance-panel,.dshr-anno-panel,.dshr-ai,.dshr-selection,.dshr-online-modal,.dshr-anno-composer,.dshr-pdf-translation-panel",Yf=".dshr-topbar,.dshr-toc,.dshr-paged-controls,"+Tc+","+kc,Zf=()=>window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,oo=null;function Sc({enabled:t,animation:e,bookMode:r=!1,bookFrame:n=!1,pdfMode:o=!1,frameTop:s=52,frameLeft:a=0,leftOffset:i,readerKey:c,canPrevChapter:d,canNextChapter:u,onPrevChapter:p,onNextChapter:h}){let[g,S]=en.default.useState({page:1,pages:1}),[_,v]=en.default.useState(!1),[E,O]=en.default.useState({top:48,bottom:56}),[N,M]=en.default.useState(null),I=en.default.useRef(null),T=en.default.useRef(null),D=en.default.useRef({});if(D.current={canPrevChapter:d,canNextChapter:u,onPrevChapter:p,onNextChapter:h,animation:e},en.default.useEffect(()=>{if(!t)return;let te=I.current?.closest(".dshr-reader"),B=te?.querySelector(".dshr-content,.dshr-pdf-scroll");if(!B)return;let le=B.classList.contains("dshr-pdf-scroll"),fe=B.querySelector(".dshr-content__inner"),V=yc(),ge={scrollBehavior:B.style.scrollBehavior,overflowAnchor:B.style.overflowAnchor};B.style.scrollBehavior="auto",B.style.overflowAnchor="none",B.classList.add("dshr-paged-scroll");let q=!1,z=!0,ce=!1,$=0,re=0,ne=0,_e=0,Q=0,ze=-1/0,Be=[],Oe=null,dt=[],Qe=new Set,Ve=!le&&fe?document.createElement("div"):null;Ve&&(Ve.className="dshr-page-tail",Ve.setAttribute("aria-hidden","true"),B.append(Ve)),B.dataset.readerNavigation="0",v(!1),O({top:48,bottom:56});let f=()=>{if(q)return;B.dataset.readerPage=String(V.page),B.dataset.readerPages=String(V.pages),B.dataset.readerTarget=String(V.top),S(ke=>ke.page===V.page&&ke.pages===V.pages?ke:{page:V.page,pages:V.pages});let X=V.top+B.clientHeight-56,me=Be.find(ke=>ke.top<X-.5&&ke.bottom>X+.5&&ke.bottom-ke.top<=B.clientHeight-48-56&&ke.top>V.top+48),xe=me?Math.max(56,B.clientHeight-(me.top-V.top)):56;O(ke=>ke.bottom===xe?ke:{top:48,bottom:xe})},l=()=>{Math.abs(B.scrollTop-V.top)>.5&&(B.scrollTop=V.top)},k=X=>{if(q||le||!fe||!B.clientHeight||!B.clientWidth)return;if(ce){z=!0;return}let me=X??_c(Oe,B,B.scrollTop);Be=wc(B,fe);let xe=vc(Be,B.clientHeight);if(Ve){let ke=B.scrollHeight-Ve.offsetHeight,$e=Math.max(0,Math.ceil(xe.at(-1)+B.clientHeight-ke));Ve.style.height=$e+"px"}V.replace(xe,me),z=!1,l(),Oe=Rs(Be,V.top,B),f()},x=()=>{q||le||(z=!0,!re&&(re=requestAnimationFrame(()=>{re=0,ce||k()})))},se=()=>{$+=1;for(let X of Qe)X.cancel();Qe.clear(),ce=!1,dt.length=0},he=()=>{Q=0,clearTimeout(_e),v(!1)},ie=X=>{if(X<0)he(),D.current.canPrevChapter&&D.current.onPrevChapter?.();else if(D.current.canNextChapter){let me=Date.now();Q&&me-Q<=700?(he(),D.current.onNextChapter?.()):(Q=me,v(!0),clearTimeout(_e),_e=setTimeout(he,850))}},be=async(X,me,xe)=>{if(q||xe!==$)return!1;let ke=fe.animate(X,{duration:me,easing:"cubic-bezier(.2,.8,.2,1)",fill:"both"});Qe.add(ke);let $e;try{await Promise.race([ke.finished,new Promise(Qt=>{$e=setTimeout(Qt,me+300)})])}catch{return!1}finally{clearTimeout($e),Qe.delete(ke),ke.cancel()}return!q&&xe===$},we=async X=>{if(q)return;if(oo=te,X=X>0?1:-1,le){B.dispatchEvent(new CustomEvent("dshr-pdf-page-turn",{detail:X}));return}if(ce){dt.length<32&&dt.push(X);return}if(z&&k(),!V.turn(X)){ie(X);return}he(),Oe=Rs(Be,V.top,B),B.dataset.readerNavigation=String(Number(B.dataset.readerNavigation||0)+1),f(),ce=!0;let me=++$;try{if(fe?.animate&&!Zf()){let xe=D.current.animation,ke=X>0?-92:92,$e=xe==="flip"?[{transform:"perspective(1500px) rotateY(0deg)",opacity:1},{transform:"perspective(1500px) rotateY("+X*-60+"deg)",opacity:.03}]:[{transform:"translateX(0)",opacity:1},{transform:"translateX("+(xe==="cover"?ke*.63:ke)+"%)",opacity:.03}];if(!await be($e,180,me))return;l();let Qt=xe==="flip"?[{transform:"perspective(1500px) rotateY("+X*60+"deg)",opacity:.03},{transform:"perspective(1500px) rotateY(0deg)",opacity:1}]:[{transform:"translateX("+-ke+"%)",opacity:.03},{transform:"translateX(0)",opacity:1}];await be(Qt,260,me)}else l()}catch{}finally{!q&&me===$&&(ce=!1,z?k():(l(),f()),dt.length&&we(dt.shift()))}};T.current=we;let Fe=()=>{le||ce||ne||(ne=requestAnimationFrame(()=>{ne=0,!q&&!ce&&l()}))},ee=X=>{if(le||!fe)return;X.preventDefault(),se();let me=X.detail||{},xe=Number(me.top)||0;me.ratio!=null&&(xe=Number(me.ratio)*Math.max(0,B.scrollHeight-B.clientHeight)),me.element&&fe.contains(me.element)&&(xe=me.element.getBoundingClientRect().top-B.getBoundingClientRect().top+B.scrollTop-48),B.dataset.readerNavigation=String(Number(B.dataset.readerNavigation||0)+1),Oe=null,k(Math.max(0,xe))},Ge=X=>{if(X.target instanceof Element&&X.target.closest(Yf)||X.ctrlKey||X.metaKey||Math.abs(X.deltaY)<8&&Math.abs(X.deltaX)<8)return;X.preventDefault();let me=performance.now(),xe=me-ze;ze=me,xe>=220&&we(X.deltaY>0||X.deltaX>0?1:-1)},tt=X=>{if(X.defaultPrevented||X.repeat||X.ctrlKey||X.metaKey||X.altKey||!B.isConnected||X.target instanceof Element&&X.target.closest(kc+","+Tc))return;let me=X.target instanceof Element&&X.target.closest(".dshr-root"),xe=X.target instanceof Element&&X.target.closest(".dshr-reader");if(xe&&xe!==te||me&&!me.contains(te)||!me&&(oo?.isConnected?oo!==te:[...document.querySelectorAll(".dshr-reader")].find(Lt=>Lt.getBoundingClientRect().height>0)!==te))return;let ke=window.getSelection?.();if(ke&&!ke.isCollapsed)return;let $e=["ArrowDown","ArrowRight","PageDown"," "].includes(X.key),Qt=["ArrowUp","ArrowLeft","PageUp"].includes(X.key);!$e&&!Qt||(X.preventDefault(),we($e?1:-1))},rt=X=>{let{page:me,pages:xe}=X.detail||{};Number.isFinite(me)&&me>=1&&Number.isFinite(xe)&&xe>=1&&S({page:me,pages:xe})},Ue=X=>{we(Number(X.detail)>0?1:-1)},De=()=>{oo=te};te.addEventListener("pointerdown",De),B.addEventListener("wheel",Ge,{passive:!1}),B.addEventListener("scroll",Fe,{passive:!0}),B.addEventListener("dshr-flow-navigate",ee),B.addEventListener("dshr-page-turn",Ue),B.addEventListener("dshr-pdf-page-state",rt),window.addEventListener("keydown",tt);let pe,je,Xe,ut=()=>{if(q)return;let X=B.getBoundingClientRect(),me=te.getBoundingClientRect(),xe={right:Math.max(0,me.right-X.right),center:X.left-me.left+X.width/2,top:X.top-me.top+X.height/2,bottom:Math.max(0,me.bottom-X.bottom)};M(ke=>ke&&Object.keys(xe).every($e=>Math.abs(ke[$e]-xe[$e])<.5)?ke:xe)};if(ut(),typeof ResizeObserver=="function"&&(Xe=new ResizeObserver(ut),Xe.observe(B),Xe.observe(te)),le){let X=Number(B.dataset.pdfPage),me=Number(B.dataset.pdfPages);X>0&&me>0&&S({page:X,pages:me})}else k(B.scrollTop),typeof ResizeObserver=="function"&&(pe=new ResizeObserver(x),pe.observe(B),pe.observe(fe)),typeof MutationObserver=="function"&&(je=new MutationObserver(x),je.observe(fe,{subtree:!0,childList:!0,characterData:!0})),fe.addEventListener("load",x,!0),document.fonts?.addEventListener("loadingdone",x),document.fonts?.ready.then(x);return()=>{q=!0,se(),clearTimeout(_e),cancelAnimationFrame(re),cancelAnimationFrame(ne),pe?.disconnect(),Xe?.disconnect(),je?.disconnect(),fe?.removeEventListener("load",x,!0),document.fonts?.removeEventListener("loadingdone",x),B.removeEventListener("wheel",Ge),B.removeEventListener("scroll",Fe),B.removeEventListener("dshr-flow-navigate",ee),B.removeEventListener("dshr-page-turn",Ue),B.removeEventListener("dshr-pdf-page-state",rt),window.removeEventListener("keydown",tt),te.removeEventListener("pointerdown",De),oo===te&&(oo=null),B.classList.remove("dshr-paged-scroll"),Object.assign(B.style,ge);for(let X of["readerPage","readerPages","readerTarget","readerNavigation"])delete B.dataset[X];Ve?.remove(),T.current=null}},[t,r,c]),!t)return null;let{page:L,pages:m}=g,A=L<=1&&!d,F=L>=m&&!u&&!(o&&m<=1);return(0,zt.jsxs)("div",{ref:I,className:`dshr-paged-controls${r?" is-book":""}${n?" has-book-frame":""}`,style:{"--dshr-paged-left":`${Math.max(10,Number(i)||10)}px`,...N?{"--dshr-paged-right":`${N.right+12}px`,"--dshr-paged-center":`${N.center}px`,"--dshr-paged-top":`${N.top}px`,"--dshr-paged-bottom":`${N.bottom+14}px`}:{},"--dshr-book-frame-top":`${Math.max(0,Number(s)||0)}px`,"--dshr-book-frame-left":`${Math.max(0,Number(a)||0)}px`,"--dshr-book-top-cover":`${E.top}px`,"--dshr-book-bottom-cover":`${E.bottom}px`},"aria-live":"polite",children:[n?(0,zt.jsxs)(zt.Fragment,{children:[(0,zt.jsx)("div",{className:"dshr-book-mask dshr-book-mask--top","aria-hidden":"true"}),(0,zt.jsx)("div",{className:"dshr-book-mask dshr-book-mask--bottom","aria-hidden":"true"})]}):null,(0,zt.jsx)("button",{type:"button",className:"dshr-paged-btn dshr-paged-prev",onClick:()=>{A||T.current?.(-1)},disabled:A,title:"\u4E0A\u4E00\u9875\uFF08\u2190 / \u2191 / PageUp\uFF09","aria-label":"\u4E0A\u4E00\u9875",children:(0,zt.jsx)(Qo,{size:20})}),(0,zt.jsx)("button",{type:"button",className:"dshr-paged-btn dshr-paged-next",onClick:()=>{F||T.current?.(1)},disabled:F,title:"\u4E0B\u4E00\u9875\uFF08\u2192 / \u2193 / PageDown / \u7A7A\u683C\uFF09","aria-label":"\u4E0B\u4E00\u9875",children:(0,zt.jsx)(Jo,{size:20})}),_?(0,zt.jsx)("div",{className:"dshr-paged-hint",role:"status",children:"\u518D\u6309\u4E00\u6B21\u8FDB\u5165\u4E0B\u4E00\u7AE0"}):null,(0,zt.jsxs)("div",{className:"dshr-paged-status",title:"\u7FFB\u9875\u8FDB\u5EA6",children:[(0,zt.jsx)("b",{children:L}),(0,zt.jsx)("span",{children:"/"}),(0,zt.jsx)("em",{children:m})]})]})}var tn=Ct(require("react"),1);var Fs=Object.freeze([Object.freeze({id:"serif",label:"\u5B8B\u4F53 / Serif",stack:'"Songti SC", "Noto Serif SC", "Source Han Serif SC", "STSong", "SimSun", "\u5B8B\u4F53", Georgia, "Times New Roman", serif'}),Object.freeze({id:"sans",label:"\u9ED1\u4F53 / Sans",stack:'"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", "Segoe UI", system-ui, -apple-system, sans-serif'}),Object.freeze({id:"kai",label:"\u6977\u4F53 / Kai",stack:'"Kaiti SC", "STKaiti", "KaiTi", "\u6977\u4F53", "Noto Serif SC", "Songti SC", "SimSun", serif'}),Object.freeze({id:"system",label:"\u7CFB\u7EDF\u9ED8\u8BA4",stack:'system-ui, -apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif'})]),Bs=Object.freeze([Object.freeze({value:400,label:"\u5E38\u89C4"}),Object.freeze({value:500,label:"\u4E2D\u7B49"}),Object.freeze({value:600,label:"\u52A0\u7C97"})]),Rb=Object.freeze([Object.freeze({id:"scroll",label:"\u6EDA\u52A8"}),Object.freeze({id:"book",label:"\u6A2A\u7248"})]),Ic=Object.freeze([Object.freeze({id:"slide",label:"\u6A2A\u5411\u6ED1\u9875",hint:"\u6574\u9875\u5411\u5DE6\u6ED1\u51FA\uFF0C\u4E0B\u4E00\u9875\u4ECE\u53F3\u4FA7\u6ED1\u5165"}),Object.freeze({id:"cover",label:"\u4E66\u9875\u8986\u76D6",hint:"\u50CF\u7FFB\u8FC7\u4E00\u5F20\u4E66\u9875\uFF0C\u65E7\u9875\u8BA9\u51FA\u65B0\u7684\u9605\u8BFB\u9762"}),Object.freeze({id:"flip",label:"3D \u4E66\u9875",hint:"\u7ED5\u4E66\u810A\u900F\u89C6\u7FFB\u9875\uFF0C\u6700\u63A5\u8FD1\u5B9E\u4F53\u4E66\u624B\u611F"})]),Ma=Object.freeze([Object.freeze({id:"paper",label:"\u7EB8\u5F20",bg:"#fbf7ee",ink:"#2b2a26",muted:"#736f64",border:"rgba(43, 42, 38, 0.15)",accent:"#9a6b2f"}),Object.freeze({id:"white",label:"\u767D\u8272",bg:"#ffffff",ink:"#1f2328",muted:"#5c6370",border:"rgba(31, 35, 40, 0.13)",accent:"#3f5ce0"}),Object.freeze({id:"sepia",label:"\u7F8A\u76AE\u7EB8",bg:"#f2e6cf",ink:"#453322",muted:"#715f47",border:"rgba(69, 51, 34, 0.18)",accent:"#8f5a24"}),Object.freeze({id:"green",label:"\u62A4\u773C\u7EFF",bg:"#e3efe4",ink:"#263a2b",muted:"#556b5a",border:"rgba(38, 58, 43, 0.17)",accent:"#3d6a47"}),Object.freeze({id:"night",label:"\u591C\u95F4",bg:"#1c1e22",ink:"#e9e6dd",muted:"#a6a29a",border:"rgba(233, 230, 221, 0.16)",accent:"#d2a76b"}),Object.freeze({id:"custom",label:"\u81EA\u5B9A\u4E49"})]),Ut=Object.freeze({fontSize:18,lineHeight:1.85,fontFamily:"serif",fontWeight:400,contentWidth:760,tocWidth:260,readingMode:"scroll",pageAnimation:"slide",bookAnimation:"slide",brightness:1,backgroundPreset:"paper",customBackground:"#fbf7ee",textTone:"auto",backgroundImageKey:"",backgroundImageOpacity:.26,backgroundImageBlur:0}),Ie=Object.freeze({fontSize:Object.freeze({min:13,max:34,step:1}),lineHeight:Object.freeze({min:1.35,max:2.4,step:.05}),contentWidth:Object.freeze({min:520,max:1600,step:20}),tocWidth:Object.freeze({min:180,max:520,step:10}),brightness:Object.freeze({min:.6,max:1.2,step:.01}),backgroundImageOpacity:Object.freeze({min:0,max:.8,step:.01}),backgroundImageBlur:Object.freeze({min:0,max:12,step:1})}),So=Object.freeze(Bs.map(t=>t.value)),Qf=Object.freeze(Ma.map(t=>t.id)),Jf=new Map(Ma.map(t=>[t.id,t])),Ec=new Map(Fs.map(t=>[t.id,t])),eh=Object.freeze(["auto","dark","light"]),Ds=Object.freeze({ink:"#181511",muted:"#6b6559",border:"rgba(32, 29, 24, 0.15)",tone:"dark"}),Ps=Object.freeze({ink:"#f8f5ec",muted:"#b3ada0",border:"rgba(245, 242, 233, 0.18)",tone:"light"}),th="#8a5a24",rh="#d8b06a",Nc=Object.freeze({white:"#ffffff",black:"#000000",red:"#ff0000",lime:"#00ff00",blue:"#0000ff",yellow:"#ffff00",aqua:"#00ffff",cyan:"#00ffff",fuchsia:"#ff00ff",magenta:"#ff00ff",silver:"#c0c0c0",gray:"#808080",grey:"#808080",maroon:"#800000",olive:"#808000",green:"#008000",purple:"#800080",teal:"#008080",navy:"#000080",orange:"#ffa500",pink:"#ffc0cb",brown:"#a52a2a",gold:"#ffd700",beige:"#f5f5dc",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",turquoise:"#40e0d0",salmon:"#fa8072",coral:"#ff7f50",indigo:"#4b0082",violet:"#ee82ee",wheat:"#f5deb3",tan:"#d2b48c",snow:"#fffafa",linen:"#faf0e6"});function ao(t){return Math.max(0,Math.min(255,Math.round(t)))}function nh(t){let e=t.slice(1);if(!/^[0-9a-f]+$/iu.test(e))return null;if(e.length===3||e.length===4){let[r,n,o]=e.slice(0,3).split("").map(s=>Number.parseInt(`${s}${s}`,16));return{r,g:n,b:o}}return e.length===6||e.length===8?{r:Number.parseInt(e.slice(0,2),16),g:Number.parseInt(e.slice(2,4),16),b:Number.parseInt(e.slice(4,6),16)}:null}function oh(t){let e=/^([+-]?(?:\d+\.?\d*|\.\d+))(%?)$/u.exec(t);if(!e)return null;let r=Number(e[1]);return Number.isFinite(r)?(e[2]==="%"&&(r=r/100*255),ao(r)):null}function ah(t){let e=t.replace(/\//gu," ").split(/[\s,]+/u).filter(Boolean);if(e.length<3)return null;let r=e.slice(0,3).map(oh);return r.some(n=>n===null)?null:{r:r[0],g:r[1],b:r[2]}}function Os(t,e,r){let n=r;return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function sh(t){let e=t.replace(/\//gu," ").split(/[\s,]+/u).filter(Boolean);if(e.length<3)return null;let r=Number.parseFloat(e[0]),n=Number.parseFloat(e[1]),o=Number.parseFloat(e[2]);if(![r,n,o].every(Number.isFinite))return null;let s=Math.max(0,Math.min(100,n))/100,a=Math.max(0,Math.min(100,o))/100,i=(r%360+360)%360/360;if(s===0){let u=ao(a*255);return{r:u,g:u,b:u}}let c=a<.5?a*(1+s):a+s-a*s,d=2*a-c;return{r:ao(Os(d,c,i+1/3)*255),g:ao(Os(d,c,i)*255),b:ao(Os(d,c,i-1/3)*255)}}function Ca(t){if(typeof t!="string")return null;let e=t.trim().toLowerCase();if(!e)return null;if(e.startsWith("#"))return nh(e);if(e in Nc)return Ca(Nc[e]);let r=/^([a-z]+)\((.*)\)$/u.exec(e);if(!r)return null;let n=r[1],o=r[2];return n==="rgb"||n==="rgba"?ah(o):n==="hsl"||n==="hsla"?sh(o):null}function Ac({r:t,g:e,b:r}){return`#${[t,e,r].map(n=>ao(n).toString(16).padStart(2,"0")).join("")}`}function Ls(t){let e=t/255;return e<=.03928?e/12.92:((e+.055)/1.055)**2.4}function Cc(t){let e=Ca(t);return e?.2126*Ls(e.r)+.7152*Ls(e.g)+.0722*Ls(e.b):1}function Ia(t,e){let r=Cc(t),n=Cc(e),o=Math.max(r,n),s=Math.min(r,n);return(o+.05)/(s+.05)}function $s(t,e="#ffffff"){let r=Ca(t);if(r)return Ac(r);let n=Ca(e);return n?Ac(n):"#ffffff"}function zs(t){let e=Ia(Ds.ink,t);return Ia(Ps.ink,t)>e?{...Ps}:{...Ds}}function Mc(t){let e=zs(t);return{ink:e.ink,muted:e.muted,border:e.border}}function Mr(t,e,r,n){let o=Number(t);return Number.isFinite(o)?Math.max(e,Math.min(r,o)):n}function ih(t){return Qf.includes(t)?t:"paper"}function lh(t){return eh.includes(t)?t:"auto"}function ch(t){let e=Number(t);if(!Number.isFinite(e))return 400;let r=Math.max(So[0],Math.min(So[So.length-1],e)),n=So[0],o=Number.POSITIVE_INFINITY;for(let s of So){let a=Math.abs(s-r);a<o&&(n=s,o=a)}return n}function dh(t){return(Ec.get(t)||Ec.get("serif")).stack}function uh(t){return t>=600?700:600}function Hs(t){let e=t&&typeof t=="object"?t:{},r=ih(e.backgroundPreset),n=$s(e.customBackground,Ut.customBackground),o=r==="custom"?null:Jf.get(r),s=o?o.bg:n,a=zs(s);o&&(a={ink:o.ink,muted:o.muted,border:o.border});let i=lh(e.textTone);i==="dark"?a={...Ds}:i==="light"&&(a={...Ps});let c=o?o.accent:zs(s).tone==="light"?rh:th,d=ch(e.fontWeight);return{preset:r,bg:s,ink:a.ink,muted:a.muted,border:a.border,accent:c,fontFamily:dh(e.fontFamily),fontWeight:d,headingWeight:uh(d),width:Mr(e.contentWidth,Ie.contentWidth.min,Ie.contentWidth.max,Ut.contentWidth),brightness:Mr(e.brightness,Ie.brightness.min,Ie.brightness.max,Ut.brightness),imageOpacity:Mr(e.backgroundImageOpacity,Ie.backgroundImageOpacity.min,Ie.backgroundImageOpacity.max,Ut.backgroundImageOpacity),imageBlur:Mr(e.backgroundImageBlur,Ie.backgroundImageBlur.min,Ie.backgroundImageBlur.max,Ut.backgroundImageBlur)}}function fh(t){return`url("${String(t).replace(/[\n\r\f]/gu," ").replace(/\\/gu,"\\\\").replace(/"/gu,'\\"')}")`}function Ra(t,e){let r=Hs(t),n=typeof e=="string"&&e.trim()?fh(e.trim()):"none";return{"--dshr-reader-bg":r.bg,"--dshr-reader-ink":r.ink,"--dshr-reader-muted":r.muted,"--dshr-reader-border":r.border,"--dshr-reader-accent":r.accent,"--dshr-reader-font":r.fontFamily,"--dshr-reader-weight":String(r.fontWeight),"--dshr-reader-heading-weight":String(r.headingWeight),"--dshr-reader-width":`${r.width}px`,"--dshr-reader-brightness":String(r.brightness),"--dshr-reader-image-opacity":String(r.imageOpacity),"--dshr-reader-image-blur":`${r.imageBlur}px`,"--dshr-reader-image":n}}var Us=String.raw`
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

.dshr-content .dshr-spinner {
  border-color: color-mix(in srgb, var(--dshr-reader-ink, #2b2a26) 18%, transparent);
  border-top-color: var(--dshr-reader-accent, #9a6b2f);
}

.dshr-content .dshr-btn {
  color: var(--dshr-reader-muted, #736f64);
}

.dshr-content .dshr-btn:hover {
  background: color-mix(in srgb, var(--dshr-reader-ink, #2b2a26) 8%, transparent);
  color: var(--dshr-reader-ink, #2b2a26);
}

.dshr-content .dshr-btn--outline {
  background: color-mix(in srgb, var(--dshr-reader-bg, #fbf7ee) 52%, transparent);
  border-color: var(--dshr-reader-border, rgba(43, 42, 38, 0.15));
}

.dshr-content .dshr-btn--outline:hover {
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
`;var j=require("react/jsx-runtime");function so({size:t=15,children:e,viewBox:r="0 0 24 24"}){return(0,j.jsx)("svg",{width:t,height:t,viewBox:r,fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:e})}function hh(t){return(0,j.jsx)(so,{...t,children:(0,j.jsx)("path",{d:"m6 6 12 12M18 6 6 18"})})}function ph(t){return(0,j.jsxs)(so,{...t,children:[(0,j.jsx)("rect",{x:"3",y:"4.5",width:"18",height:"15",rx:"2.4"}),(0,j.jsx)("circle",{cx:"8.4",cy:"9.6",r:"1.5"}),(0,j.jsx)("path",{d:"m4 17 4.6-4.4a1.6 1.6 0 0 1 2.2 0l2.5 2.4 2.1-2a1.6 1.6 0 0 1 2.2 0L20 15.6"})]})}function gh(t){return(0,j.jsxs)(so,{...t,children:[(0,j.jsx)("path",{d:"M12 16V4"}),(0,j.jsx)("path",{d:"m7 9 5-5 5 5"}),(0,j.jsx)("path",{d:"M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15"})]})}function mh(t){return(0,j.jsxs)(so,{...t,children:[(0,j.jsx)("path",{d:"M4 7h16M9 7V5h6v2M7 7l.7 12.2A1.8 1.8 0 0 0 9.5 21h5a1.8 1.8 0 0 0 1.8-1.8L17 7"}),(0,j.jsx)("path",{d:"M10 11v6M14 11v6"})]})}function bh(t){return(0,j.jsxs)(so,{...t,children:[(0,j.jsx)("path",{d:"M20 11a8 8 0 1 0-2.3 6.3"}),(0,j.jsx)("path",{d:"M20 4v7h-7"})]})}function Rc(t){return(0,j.jsx)(so,{...t,children:(0,j.jsx)("path",{d:"m5 12 4.5 4.5L19 7"})})}var xh=Object.freeze([{id:"auto",label:"\u81EA\u52A8"},{id:"dark",label:"\u6DF1\u8272\u5B57"},{id:"light",label:"\u6D45\u8272\u5B57"}]),vh=Object.freeze(["fontSize","lineHeight","fontFamily","fontWeight","contentWidth","tocWidth","brightness","backgroundPreset","customBackground","textTone","backgroundImageOpacity","backgroundImageBlur"]),yh='button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';function Oc({label:t,value:e,options:r,onChange:n}){return(0,j.jsx)("div",{className:"dshr-appearance-segmented",role:"group","aria-label":t,children:r.map(o=>{let s=o.value!==void 0?o.value:o.id;return(0,j.jsx)("button",{type:"button",className:"dshr-appearance-segmented__item","aria-pressed":e===s,onClick:()=>n(s),children:o.label},String(s))})})}function Rn({label:t,valueText:e,min:r,max:n,step:o,value:s,onChange:a,disabled:i,hint:c}){return(0,j.jsxs)("label",{className:`dshr-appearance-slider${i?" is-disabled":""}`,children:[(0,j.jsxs)("span",{className:"dshr-appearance-slider__head",children:[(0,j.jsx)("span",{children:t}),(0,j.jsx)("span",{className:"dshr-appearance-slider__value",children:e})]}),(0,j.jsx)("input",{type:"range",min:r,max:n,step:o,value:s,disabled:i,onChange:d=>a(Number(d.target.value)),"aria-label":t}),c?(0,j.jsx)("span",{className:"dshr-appearance-slider__hint",children:c}):null]})}function Lc({open:t,settings:e,backgroundImageUrl:r,onChange:n,onPickBackgroundImage:o,onClearBackgroundImage:s,onClose:a}){let i=tn.default.useRef(null),c=tn.default.useId(),[d,u]=tn.default.useState(!1),p=Hs(e),h=!!r,g=$s(e.customBackground,Ut.customBackground),S=Mc(g).ink,_=Ia(p.ink,p.bg),v=Mr(e.fontSize,Ie.fontSize.min,Ie.fontSize.max,Ut.fontSize),E=Mr(e.lineHeight,Ie.lineHeight.min,Ie.lineHeight.max,Ut.lineHeight),O=!h&&vh.every(A=>e[A]===Ut[A]),N=tn.default.useCallback(A=>{typeof n=="function"&&n({...e,...A})},[n,e]);if(tn.default.useEffect(()=>{if(!t)return;let A=F=>{F.key==="Escape"&&(F.preventDefault(),a?.())};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[t,a]),tn.default.useEffect(()=>{if(!t)return;let A=typeof document<"u"?document.activeElement:null,F=window.requestAnimationFrame(()=>{i.current?.focus({preventScroll:!0})});return()=>{window.cancelAnimationFrame(F),A instanceof HTMLElement&&A.isConnected&&A.focus({preventScroll:!0})}},[t]),tn.default.useEffect(()=>{if(!t){u(!1);return}},[t]),tn.default.useEffect(()=>{if(!d)return;let A=window.setTimeout(()=>u(!1),3200);return()=>window.clearTimeout(A)},[d]),!t)return null;let M=A=>{A.target===A.currentTarget&&a?.()},I=A=>{if(A.key!=="Tab"||!i.current)return;let F=[...i.current.querySelectorAll(yh)].filter(fe=>fe.offsetParent!==null||fe===document.activeElement);if(F.length===0)return;let te=F[0],B=F[F.length-1],le=document.activeElement;A.shiftKey&&(le===te||!i.current.contains(le))?(A.preventDefault(),B.focus()):!A.shiftKey&&le===B&&(A.preventDefault(),te.focus())},T=()=>{if(!d){u(!0);return}u(!1),h&&s?.(),n?.({...e,...Ut})},L={...Ra(e,r),fontSize:`${Math.min(16,Math.max(12,Math.round(v*.8)))}px`,lineHeight:String(E)},m=_>=4.5;return(0,j.jsx)("div",{className:"dshr-appearance-mask",onMouseDown:M,children:(0,j.jsxs)("aside",{className:"dshr-appearance-panel",role:"dialog","aria-modal":"true","aria-labelledby":c,tabIndex:-1,ref:i,onKeyDown:I,children:[(0,j.jsxs)("header",{className:"dshr-appearance-head",children:[(0,j.jsxs)("div",{className:"dshr-appearance-head__text",children:[(0,j.jsx)("strong",{id:c,children:"\u9605\u8BFB\u5916\u89C2"}),(0,j.jsx)("span",{children:"\u8C03\u6574\u6392\u7248\u3001\u5B57\u4F53\u4E0E\u80CC\u666F \xB7 \u4EC5\u4FDD\u5B58\u5728\u672C\u673A"})]}),(0,j.jsx)("button",{type:"button",className:"dshr-appearance-close",onClick:a,"aria-label":"\u5173\u95ED\u5916\u89C2\u8BBE\u7F6E",children:(0,j.jsx)(hh,{size:16})})]}),(0,j.jsxs)("div",{className:"dshr-appearance-body",children:[(0,j.jsxs)("div",{className:"dshr-appearance-preview",style:L,"aria-hidden":"true",children:[(0,j.jsx)("span",{className:"dshr-appearance-preview__badge",children:"\u5B9E\u65F6\u9884\u89C8"}),(0,j.jsxs)("div",{className:"dshr-appearance-preview__inner",children:[(0,j.jsx)("span",{className:"dshr-appearance-preview__kicker",children:"\u7B2C 1 \u7AE0"}),(0,j.jsx)("p",{className:"dshr-appearance-preview__title",children:"\u5C71\u5C45\u79CB\u669D"}),(0,j.jsx)("p",{className:"dshr-appearance-preview__text",children:"\u7A7A\u5C71\u65B0\u96E8\u540E\uFF0C\u5929\u6C14\u665A\u6765\u79CB\u3002\u660E\u6708\u677E\u95F4\u7167\uFF0C\u6E05\u6CC9\u77F3\u4E0A\u6D41\u3002"}),(0,j.jsx)("p",{className:"dshr-appearance-preview__quote",children:"\u7AF9\u55A7\u5F52\u6D63\u5973\uFF0C\u83B2\u52A8\u4E0B\u6E14\u821F\u3002"})]})]}),(0,j.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${c}-bg`,children:[(0,j.jsx)("h4",{className:"dshr-appearance-section__title",id:`${c}-bg`,children:"\u80CC\u666F"}),(0,j.jsx)("div",{className:"dshr-appearance-swatches",role:"group","aria-label":"\u80CC\u666F\u9884\u8BBE",children:Ma.map(A=>{let F=A.id==="custom"?g:A.bg,te=A.id==="custom"?S:A.ink,B=p.preset===A.id;return(0,j.jsxs)("button",{type:"button",className:`dshr-appearance-swatch${B?" is-active":""}`,"aria-pressed":B,onClick:()=>N({backgroundPreset:A.id}),children:[(0,j.jsx)("span",{className:"dshr-appearance-swatch__chip",style:{background:F,color:te},children:"\u6587"}),(0,j.jsx)("span",{className:"dshr-appearance-swatch__label",children:A.label})]},A.id)})}),(0,j.jsxs)("label",{className:"dshr-appearance-colorrow",children:[(0,j.jsx)("span",{children:"\u81EA\u5B9A\u4E49\u989C\u8272"}),(0,j.jsxs)("span",{className:"dshr-appearance-colorrow__control",children:[(0,j.jsx)("input",{type:"color",className:"dshr-appearance-color",value:g,"aria-label":"\u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272",onChange:A=>N({backgroundPreset:"custom",customBackground:A.target.value})}),(0,j.jsx)("code",{className:"dshr-appearance-colorrow__hex",children:g.toUpperCase()})]})]}),(0,j.jsxs)("div",{className:"dshr-appearance-field",children:[(0,j.jsxs)("div",{className:"dshr-appearance-field__head",children:[(0,j.jsx)("span",{children:"\u6587\u5B57\u8272\u8C03"}),(0,j.jsxs)("span",{className:`dshr-appearance-field__value${m?"":" is-warning"}`,children:["\u5BF9\u6BD4\u5EA6 ",_.toFixed(1),":1"]})]}),(0,j.jsx)(Oc,{label:"\u6587\u5B57\u8272\u8C03",value:e.textTone==="dark"||e.textTone==="light"?e.textTone:"auto",options:xh,onChange:A=>N({textTone:A})}),(0,j.jsxs)("p",{className:"dshr-appearance-hint",children:[m?"\u81EA\u52A8\u6A21\u5F0F\u4F1A\u6309\u80CC\u666F\u4EAE\u5EA6\u9009\u62E9\u6DF1\u8272\u6216\u6D45\u8272\u6587\u5B57\u3002":"\u5F53\u524D\u6587\u5B57\u4E0E\u80CC\u666F\u5BF9\u6BD4\u5EA6\u504F\u4F4E\uFF0C\u5EFA\u8BAE\u6539\u9009\u5176\u5B83\u80CC\u666F\u6216\u6587\u5B57\u8272\u8C03\u3002",h?" \u80CC\u666F\u56FE\u7247\u4F1A\u8FDB\u4E00\u6B65\u5F71\u54CD\u5B9E\u9645\u53EF\u8BFB\u6027\u3002":""]})]})]}),(0,j.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${c}-image`,children:[(0,j.jsx)("h4",{className:"dshr-appearance-section__title",id:`${c}-image`,children:"\u80CC\u666F\u56FE\u7247"}),(0,j.jsxs)("div",{className:"dshr-appearance-image",children:[(0,j.jsx)("span",{className:`dshr-appearance-image__thumb${h?" has-image":""}`,children:h?(0,j.jsx)("img",{src:r,alt:""}):(0,j.jsx)(ph,{size:20})}),(0,j.jsxs)("div",{className:"dshr-appearance-image__meta",children:[(0,j.jsx)("strong",{children:h?"\u5DF2\u9009\u62E9\u80CC\u666F\u56FE\u7247":"\u672A\u9009\u62E9\u80CC\u666F\u56FE\u7247"}),(0,j.jsx)("span",{children:"\u4F5C\u4E3A\u6587\u5B57\u4E0B\u65B9\u7684\u886C\u5E95\uFF0C\u4EC5\u4FDD\u5B58\u5728\u672C\u673A\u3002"})]}),(0,j.jsxs)("div",{className:"dshr-appearance-image__actions",children:[(0,j.jsxs)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--soft dshr-appearance-btn--sm",onClick:o,children:[h?(0,j.jsx)(Rc,{size:13}):(0,j.jsx)(gh,{size:13}),h?"\u66F4\u6362":"\u9009\u62E9\u56FE\u7247"]}),h?(0,j.jsxs)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--ghost dshr-appearance-btn--sm",onClick:s,children:[(0,j.jsx)(mh,{size:13})," \u79FB\u9664"]}):null]})]}),(0,j.jsx)(Rn,{label:"\u56FE\u7247\u4E0D\u900F\u660E\u5EA6",valueText:`${Math.round(Mr(e.backgroundImageOpacity,Ie.backgroundImageOpacity.min,Ie.backgroundImageOpacity.max,Ut.backgroundImageOpacity)*100)}%`,min:Ie.backgroundImageOpacity.min,max:Ie.backgroundImageOpacity.max,step:Ie.backgroundImageOpacity.step,value:Mr(e.backgroundImageOpacity,Ie.backgroundImageOpacity.min,Ie.backgroundImageOpacity.max,Ut.backgroundImageOpacity),disabled:!h,onChange:A=>N({backgroundImageOpacity:A})}),(0,j.jsx)(Rn,{label:"\u56FE\u7247\u6A21\u7CCA",valueText:`${Math.round(p.imageBlur)}px`,min:Ie.backgroundImageBlur.min,max:Ie.backgroundImageBlur.max,step:Ie.backgroundImageBlur.step,value:p.imageBlur,disabled:!h,onChange:A=>N({backgroundImageBlur:A})}),(0,j.jsx)(Rn,{label:"\u9605\u8BFB\u4EAE\u5EA6",valueText:`${Math.round(p.brightness*100)}%`,min:Ie.brightness.min,max:Ie.brightness.max,step:Ie.brightness.step,value:p.brightness,onChange:A=>N({brightness:A})}),(0,j.jsx)("p",{className:"dshr-appearance-hint",children:"\u8C03\u4F4E\u4EAE\u5EA6\u53EF\u51CF\u5C11\u591C\u95F4\u5C4F\u5E55\u523A\u6FC0\uFF1B\u53EA\u5F71\u54CD\u6B63\u6587/PDF \u9605\u8BFB\u533A\uFF0C\u4E0D\u5F71\u54CD\u5DE5\u5177\u680F\u4E0E\u6279\u6CE8\u9762\u677F\u3002"})]}),(0,j.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${c}-type`,children:[(0,j.jsx)("h4",{className:"dshr-appearance-section__title",id:`${c}-type`,children:"\u5B57\u4F53"}),(0,j.jsx)("div",{className:"dshr-appearance-families",role:"group","aria-label":"\u5B57\u4F53",children:Fs.map(A=>(0,j.jsx)("button",{type:"button",className:"dshr-appearance-family",style:{fontFamily:A.stack},"aria-pressed":p.fontFamily===A.stack,onClick:()=>N({fontFamily:A.id}),title:A.label,children:A.label},A.id))}),(0,j.jsxs)("div",{className:"dshr-appearance-field",children:[(0,j.jsx)("div",{className:"dshr-appearance-field__head",children:(0,j.jsx)("span",{children:"\u5B57\u91CD"})}),(0,j.jsx)(Oc,{label:"\u5B57\u91CD",value:p.fontWeight,options:Bs.map(A=>({value:A.value,label:A.label})),onChange:A=>N({fontWeight:A})})]}),(0,j.jsx)(Rn,{label:"\u5B57\u53F7",valueText:`${v}px`,min:Ie.fontSize.min,max:Ie.fontSize.max,step:Ie.fontSize.step,value:v,onChange:A=>N({fontSize:A})}),(0,j.jsx)(Rn,{label:"\u884C\u9AD8",valueText:E.toFixed(2),min:Ie.lineHeight.min,max:Ie.lineHeight.max,step:Ie.lineHeight.step,value:E,onChange:A=>N({lineHeight:Math.round(A*100)/100})})]}),(0,j.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${c}-layout`,children:[(0,j.jsx)("h4",{className:"dshr-appearance-section__title",id:`${c}-layout`,children:"\u7248\u5F0F"}),(0,j.jsx)(Rn,{label:"\u9605\u8BFB\u5BBD\u5EA6",valueText:`${Math.round(p.width)}px`,min:Ie.contentWidth.min,max:Ie.contentWidth.max,step:Ie.contentWidth.step,value:p.width,onChange:A=>N({contentWidth:A})}),(0,j.jsx)(Rn,{label:"\u76EE\u5F55\u5BBD\u5EA6",valueText:`${Math.round(Mr(e.tocWidth,Ie.tocWidth.min,Ie.tocWidth.max,Ut.tocWidth))}px`,min:Ie.tocWidth.min,max:Ie.tocWidth.max,step:Ie.tocWidth.step,value:Mr(e.tocWidth,Ie.tocWidth.min,Ie.tocWidth.max,Ut.tocWidth),onChange:A=>N({tocWidth:A})}),(0,j.jsx)("p",{className:"dshr-appearance-hint",children:"\u63A7\u5236\u6B63\u6587\u6700\u5927\u5BBD\u5EA6\uFF1B\u76EE\u5F55\u5BBD\u5EA6\u53EF\u5728\u8FD9\u91CC\u8C03\uFF0C\u4E5F\u53EF\u4EE5\u62D6\u52A8\u76EE\u5F55\u53F3\u8FB9\u7F18\u3002\u76EE\u5F55\u6807\u9898\u4F1A\u5B8C\u6574\u6362\u884C\u663E\u793A\u3002"})]})]}),(0,j.jsxs)("footer",{className:"dshr-appearance-foot",children:[(0,j.jsxs)("button",{type:"button",className:`dshr-appearance-btn dshr-appearance-btn--ghost${d?" dshr-appearance-btn--danger":""}`,onClick:T,disabled:O&&!d,title:O?"\u5F53\u524D\u5DF2\u662F\u9ED8\u8BA4\u5916\u89C2":"\u6062\u590D\u9ED8\u8BA4\u5916\u89C2",children:[d?(0,j.jsx)(Rc,{size:14}):(0,j.jsx)(bh,{size:14}),d?"\u786E\u8BA4\u6062\u590D\uFF1F":"\u6062\u590D\u9ED8\u8BA4"]}),(0,j.jsx)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--primary",onClick:a,children:"\u5B8C\u6210"})]})]})})}var Oa=Ct(require("react"),1);var ve=require("react/jsx-runtime"),wh={highlight:En,underline:ha,note:cn},_h=[{id:"all",label:"\u5168\u90E8"},...eo.map(t=>({id:t.id,label:t.label}))];function kh(t){let e=Number(t);if(!Number.isFinite(e)||e<=0)return"";try{return new Date(e).toLocaleDateString("zh-CN",{month:"numeric",day:"numeric"})}catch{return""}}function Th(t){let e=new Map,r=t&&Array.isArray(t.chapters)?t.chapters:[];for(let n=0;n<r.length;n+=1){let o=r[n];o&&o.id!=null&&e.set(String(o.id),{index:n,title:o.title||""})}return e}function Dc(t){return t?t.kind==="pdf"?!0:t.kind==="flow"?!1:Array.isArray(t.rects)&&!Array.isArray(t.ranges):!1}function Pc(t,e){if(!t)return null;if(t.chapterId!=null){let r=e.get(String(t.chapterId));if(r)return r}if(Number.isInteger(Number(t.chapterIndex))&&Number(t.chapterIndex)>=0){let r=Number(t.chapterIndex),o=(e.size>0?[...e.values()]:[]).find(s=>s.index===r);return{index:r,title:o?o.title:""}}return null}function Sh(t,e,r){let n=(Array.isArray(t)?t:[]).filter(a=>!(!a||r!=="all"&&a.style!==r)),o=new Map;for(let a=0;a<n.length;a+=1){let i=n[a],c=Dc(i),d,u,p;if(c){let h=Number(i.page),g=Number.isInteger(h)&&h>0;d=`pdf:${g?h:"unknown"}`,u=g?1e4+h:999999,p=g?`\u7B2C ${h} \u9875`:"PDF \u9875\u9762"}else{let h=Pc(i,e),g=h?h.index:null;d=`flow:${g??"unknown"}`,u=g??99999,p=g==null?"\u6B63\u6587":`\u7B2C ${g+1} \u7AE0${h&&h.title?` \xB7 ${h.title}`:""}`}o.has(d)||o.set(d,{key:d,order:u,title:p,items:[]}),o.get(d).items.push(i)}let s=[...o.values()];s.sort((a,i)=>a.order-i.order);for(let a=0;a<s.length;a+=1)s[a].items.sort((c,d)=>{let u=Array.isArray(c.ranges)&&c.ranges[0]&&c.ranges[0].start||0,p=Array.isArray(d.ranges)&&d.ranges[0]&&d.ranges[0].start||0;return u!==p?u-p:(Number(c.createdAt)||0)-(Number(d.createdAt)||0)});return s}function Eh({hasAny:t,filter:e}){return t?(0,ve.jsxs)("div",{className:"dshr-anno-panel__empty",children:[(0,ve.jsx)("p",{className:"dshr-anno-panel__empty-title",children:"\u6CA1\u6709\u5339\u914D\u7684\u6807\u6CE8"}),(0,ve.jsxs)("p",{className:"dshr-anno-panel__empty-text",children:["\u5F53\u524D\u7B5B\u9009\u662F\u300C",e==="all"?"\u5168\u90E8":vs(e),"\u300D\uFF0C\u5207\u6362\u7B5B\u9009\u770B\u770B\u5176\u4F59\u6807\u6CE8\u3002"]})]}):(0,ve.jsxs)("div",{className:"dshr-anno-panel__empty",children:[(0,ve.jsx)("span",{className:"dshr-anno-panel__empty-mark","aria-hidden":"true",children:(0,ve.jsx)(Hl,{size:44})}),(0,ve.jsx)("p",{className:"dshr-anno-panel__empty-title",children:"\u8FD8\u6CA1\u6709\u4EFB\u4F55\u6807\u6CE8"}),(0,ve.jsx)("p",{className:"dshr-anno-panel__empty-text",children:"\u5728\u9605\u8BFB\u65F6\u9009\u4E2D\u4E00\u6BB5\u6587\u5B57\uFF0C\u5C31\u53EF\u4EE5\u7528\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u6216\u4FBF\u7B7E\u628A\u5B83\u7559\u5728\u8FD9\u91CC\u3002"}),(0,ve.jsxs)("ol",{className:"dshr-anno-panel__steps",children:[(0,ve.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,ve.jsx)("span",{className:"dshr-anno-panel__step-index",children:"1"})," \u9009\u4E2D\u6B63\u6587\u4E2D\u7684\u4E00\u6BB5\u6587\u5B57"]}),(0,ve.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,ve.jsx)("span",{className:"dshr-anno-panel__step-index",children:"2"})," \u9009\u62E9\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u6216\u4FBF\u7B7E"]}),(0,ve.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,ve.jsx)("span",{className:"dshr-anno-panel__step-index",children:"3"})," \u4E4B\u540E\u56DE\u5230\u8FD9\u91CC\u56DE\u770B\u3001\u8DF3\u8F6C"]})]}),(0,ve.jsx)("p",{className:"dshr-anno-panel__hint",children:"PDF \u9875\u9762\u540C\u6837\u652F\u6301\uFF1A\u9009\u4E2D\u6587\u5B57\u540E\u70B9\u51FB\u300C\u6807\u6CE8\u300D\u5373\u53EF\u3002"})]})}function zc({open:t,annotations:e,book:r,onClose:n,onOpenAnnotation:o,onJump:s,onDelete:a}){let[i,c]=Oa.default.useState("all"),d=Oa.default.useMemo(()=>Th(r),[r]);if(Oa.default.useEffect(()=>{if(!t||typeof document>"u")return;let _=v=>{v.key!=="Escape"||typeof n!="function"||document.querySelector(".dshr-anno-composer")||(v.preventDefault(),n())};return document.addEventListener("keydown",_,!0),()=>document.removeEventListener("keydown",_,!0)},[n,t]),!t)return null;let u=(Array.isArray(e)?e:[]).filter(Boolean),p={all:u.length};for(let _=0;_<eo.length;_+=1){let v=eo[_].id;p[v]=u.filter(E=>E.style===v).length}let h=Sh(u,d,i),g=i==="all"?u.length:u.filter(_=>_.style===i).length,S=(_,v)=>{typeof _=="function"&&_(v)};return(0,ve.jsxs)("aside",{className:"dshr-anno-panel","aria-label":"\u6807\u6CE8\u7B14\u8BB0\u9762\u677F",children:[(0,ve.jsxs)("header",{className:"dshr-anno-panel__head",children:[(0,ve.jsxs)("div",{className:"dshr-anno-panel__titles",children:[(0,ve.jsxs)("h3",{className:"dshr-anno-panel__title",children:["\u6807\u6CE8\u7B14\u8BB0",(0,ve.jsx)("span",{className:"dshr-anno-panel__count",children:u.length})]}),(0,ve.jsx)("span",{className:"dshr-anno-panel__sub",children:u.length>0?`${g} \u6761\u6807\u6CE8 \xB7 ${h.length} \u4E2A\u4F4D\u7F6E`:"\u9009\u4E2D\u6587\u5B57\u5373\u53EF\u6DFB\u52A0\u6807\u6CE8"})]}),(0,ve.jsx)("button",{type:"button",className:"dshr-anno-panel__close","aria-label":"\u5173\u95ED\u6807\u6CE8\u9762\u677F",onClick:()=>S(n),children:(0,ve.jsx)(pa,{size:13})})]}),u.length>0?(0,ve.jsx)("div",{className:"dshr-anno-panel__filters",role:"tablist","aria-label":"\u6309\u6837\u5F0F\u7B5B\u9009\u6807\u6CE8",children:_h.map(_=>{let v=i===_.id,E=p[_.id]||0;return(0,ve.jsxs)("button",{type:"button",role:"tab","aria-selected":v,className:`dshr-anno-panel__filter${v?" is-active":""}`,onClick:()=>c(_.id),children:[_.label,_.id==="all"?` ${E}`:E>0?` ${E}`:""]},_.id)})}):null,(0,ve.jsx)("div",{className:"dshr-anno-panel__list",children:h.length===0?(0,ve.jsx)(Eh,{hasAny:u.length>0,filter:i}):h.map(_=>(0,ve.jsxs)("section",{className:"dshr-anno-panel__group",children:[(0,ve.jsxs)("div",{className:"dshr-anno-panel__group-head",children:[(0,ve.jsx)("span",{className:"dshr-anno-panel__group-title",title:_.title,children:_.title}),(0,ve.jsx)("span",{className:"dshr-anno-panel__group-rule"}),(0,ve.jsx)("span",{className:"dshr-anno-panel__group-count",children:_.items.length})]}),_.items.map(v=>{let E=v.style||"highlight",O=wh[E]||En,N=v.color||"#f5d76e",M=typeof v.quote=="string"?v.quote.trim():"",I=typeof v.note=="string"?v.note.trim():"",T=Pc(v,d),D=Dc(v)?Number(v.page)>0?`\u7B2C ${v.page} \u9875`:"PDF":T?`\u7B2C ${T.index+1} \u7AE0`:"\u6B63\u6587",L=kh(v.updatedAt||v.createdAt);return(0,ve.jsxs)("article",{className:"dshr-anno-item",style:{"--dshr-anno-color":N},"data-anno-id":v.id||void 0,children:[(0,ve.jsxs)("button",{type:"button",className:"dshr-anno-item__main",onClick:()=>S(o,v.id),title:"\u7F16\u8F91\u8FD9\u6761\u6807\u6CE8",children:[(0,ve.jsxs)("div",{className:"dshr-anno-item__meta",children:[(0,ve.jsx)("span",{className:"dshr-anno-item__dot","aria-hidden":"true"}),(0,ve.jsxs)("span",{className:"dshr-anno-item__style",children:[(0,ve.jsx)(O,{size:12})," ",vs(E)]}),(0,ve.jsx)("span",{className:"dshr-anno-item__sep","aria-hidden":"true",children:"\xB7"}),(0,ve.jsx)("span",{className:"dshr-anno-item__location",children:D}),(0,ve.jsx)("span",{className:"dshr-anno-item__spacer"}),L?(0,ve.jsx)("span",{children:L}):null]}),(0,ve.jsx)("p",{className:"dshr-anno-item__quote",children:M||I||"\uFF08\u672A\u8BB0\u5F55\u9009\u4E2D\u6587\u5B57\uFF09"}),I&&I!==M?(0,ve.jsx)("p",{className:"dshr-anno-item__note",children:I}):null]}),(0,ve.jsxs)("div",{className:"dshr-anno-item__actions",children:[(0,ve.jsx)("button",{type:"button",className:"dshr-anno-item__action dshr-anno-item__action--jump",onClick:()=>S(s,v),title:"\u8DF3\u8F6C\u5230\u8FD9\u6761\u6807\u6CE8\u7684\u4F4D\u7F6E",children:"\u5B9A\u4F4D"}),(0,ve.jsx)("span",{className:"dshr-anno-item__spacer"}),(0,ve.jsx)("button",{type:"button",className:"dshr-anno-item__action dshr-anno-item__action--danger",onClick:()=>S(a,v),title:"\u5220\u9664\u8FD9\u6761\u6807\u6CE8",children:"\u5220\u9664"})]})]},v.id||`${_.key}:${M}`)})]},_.key))})]})}var Ur=Ct(require("react"),1);var Ae=require("react/jsx-runtime"),Fc={highlight:En,underline:ha,note:cn},Nh={highlight:"\u7528\u534A\u900F\u660E\u7684\u8272\u5E26\u8986\u76D6\u9009\u4E2D\u6587\u5B57\uFF0C\u53EF\u8C03\u7B14\u89E6\u7C97\u7EC6\u3002",underline:"\u5728\u9009\u4E2D\u6587\u5B57\u4E0B\u65B9\u753B\u4E00\u6761\u624B\u5199\u5F0F\u4E0B\u5212\u7EBF\u3002",note:"\u5728\u9009\u4E2D\u6587\u5B57\u65C1\u653E\u4E00\u679A\u4FBF\u7B7E\uFF0C\u8BB0\u5F55\u6B64\u523B\u7684\u60F3\u6CD5\u3002"},Bc=2e3,js=yo[1].value;function Gs(t){return t==="underline"?Dl:Ll}function Hc(t){return Object.prototype.hasOwnProperty.call(Jn,t)?t:"highlight"}function Ah(t){let e=Number(t);if(!Number.isFinite(e))return js;let r=js,n=1/0;for(let o=0;o<yo.length;o+=1){let s=yo[o].value,a=Math.abs(s-e);a<n&&(r=s,n=a)}return r}function $c(t){let e=t&&typeof t=="object"?t:{},r=Hc(e.style),n=Gs(r),o=n.find(s=>s.value===e.color);return{style:r,color:o?o.value:typeof e.color=="string"&&e.color?e.color:n[0].value,width:Ah(e.width),note:typeof e.note=="string"?e.note:"",quote:typeof e.quote=="string"?e.quote:""}}function Ch(t,e){if(!t||typeof t!="object")return`${e}:empty`;let r=typeof t.quote=="string"?t.quote:"";return[e,t.id||"",r,Array.isArray(t.ranges)?t.ranges.length:0,t.page==null?"":t.page,t.chapterId==null?"":t.chapterId].join("|")}function Ih(t){return`${Math.round(2+(Number(t)||js)*.34)}px`}function Uc({open:t,draft:e,mode:r,onClose:n,onSave:o,onDelete:s}){let a=r==="edit",[i,c]=Ur.default.useState(()=>$c(e)),d=Ur.default.useRef(""),u=Ur.default.useRef(null);Ur.default.useEffect(()=>{if(!t){d.current="";return}let I=Ch(e,r);d.current!==I&&(d.current=I,c($c(e)))},[e,r,t]),Ur.default.useEffect(()=>{if(!t||typeof window>"u")return;let I=window.setTimeout(()=>{let T=u.current;if(T)try{T.focus({preventScroll:!0}),T.setSelectionRange(T.value.length,T.value.length)}catch{}},30);return()=>window.clearTimeout(I)},[t]);let p=Ur.default.useCallback(I=>{c(T=>({...T,...I}))},[]),h=Ur.default.useCallback(I=>{let T=Hc(I);c(D=>{let L=Gs(T),m=L.some(A=>A.value===D.color);return{...D,style:T,color:m?D.color:L[0].value}})},[]),g=Ur.default.useCallback(()=>{if(!i.note.trim()&&!i.quote.trim()&&i.style==="note")return;let T={...e&&typeof e=="object"?e:{},style:i.style,color:i.color,width:i.width,note:i.note,quote:i.quote};typeof o=="function"&&o(T)},[e,o,i]);if(Ur.default.useEffect(()=>{if(!t||typeof document>"u")return;let I=T=>{if(T.key==="Escape"){T.preventDefault(),T.stopImmediatePropagation(),typeof n=="function"&&n();return}T.key==="Enter"&&(T.metaKey||T.ctrlKey)&&(T.preventDefault(),T.stopImmediatePropagation(),g())};return document.addEventListener("keydown",I,!0),()=>document.removeEventListener("keydown",I,!0)},[g,n,t]),!t)return null;let S=Gs(i.style),_=Fc[i.style]||En,v=i.quote.trim(),E=!!(i.note.trim()||v||i.style!=="note"),O=i.style==="note"?"\u4FBF\u7B7E\u5185\u5BB9":"\u5907\u6CE8",N=i.style==="note"?"\u5199\u4E0B\u8FD9\u6BB5\u6587\u5B57\u7ED9\u4F60\u7684\u60F3\u6CD5\u2026":"\u53EF\u9009\uFF1A\u4E3A\u8FD9\u6761\u6807\u6CE8\u5199\u4E00\u6761\u5907\u6CE8\u2026",M=i.style==="underline"?"\u4E0B\u5212\u7EBF\u989C\u8272":i.style==="note"?"\u4FBF\u7B7E\u989C\u8272":"\u8367\u5149\u7B14\u989C\u8272";return(0,Ae.jsx)("div",{className:"dshr-anno-composer-mask",role:"presentation",onMouseDown:I=>{I.target===I.currentTarget&&typeof n=="function"&&n()},children:(0,Ae.jsxs)("div",{className:"dshr-anno-composer",role:"dialog","aria-modal":"true","aria-label":a?"\u7F16\u8F91\u6807\u6CE8":"\u6DFB\u52A0\u6807\u6CE8",onMouseDown:I=>I.stopPropagation(),children:[(0,Ae.jsxs)("header",{className:"dshr-anno-composer__head",children:[(0,Ae.jsxs)("div",{className:"dshr-anno-composer__titles",children:[(0,Ae.jsx)("h3",{className:"dshr-anno-composer__title",children:a?"\u7F16\u8F91\u6807\u6CE8":"\u6DFB\u52A0\u6807\u6CE8"}),(0,Ae.jsx)("span",{className:"dshr-anno-composer__sub",children:Nh[i.style]})]}),(0,Ae.jsx)("button",{type:"button",className:"dshr-anno-composer__close","aria-label":"\u5173\u95ED\u6807\u6CE8\u7F16\u8F91\u5668",onClick:()=>{typeof n=="function"&&n()},children:(0,Ae.jsx)(pa,{size:13})})]}),(0,Ae.jsxs)("div",{className:"dshr-anno-composer__body",children:[(0,Ae.jsx)("div",{className:"dshr-anno-composer__tabs",role:"tablist","aria-label":"\u6807\u6CE8\u6837\u5F0F",children:eo.map(I=>{let T=Fc[I.id]||En,D=i.style===I.id;return(0,Ae.jsxs)("button",{type:"button",role:"tab","aria-selected":D,className:`dshr-anno-composer__tab${D?" is-active":""}`,onClick:()=>h(I.id),children:[(0,Ae.jsx)(T,{size:14})," ",I.label]},I.id)})}),(0,Ae.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Ae.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Ae.jsx)("span",{children:M}),(0,Ae.jsx)("em",{children:i.style==="underline"?"\u7EB8\u4E0A\u7684\u58A8\u8272":"\u534A\u900F\u660E\u7B14\u89E6"})]}),(0,Ae.jsx)("div",{className:"dshr-anno-composer__swatches",role:"radiogroup","aria-label":M,children:S.map(I=>{let T=i.color===I.value;return(0,Ae.jsx)("button",{type:"button",role:"radio","aria-checked":T,"aria-label":`${I.label}\u8272`,title:`${I.label}\u8272`,className:`dshr-anno-swatch${T?" is-active":""}`,style:{"--swatch":I.value},onClick:()=>p({color:I.value}),children:I.label},I.id)})})]}),i.style==="highlight"?(0,Ae.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Ae.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Ae.jsx)("span",{children:"\u7B14\u89E6\u7C97\u7EC6"}),(0,Ae.jsx)("em",{children:"\u7EC6 / \u4E2D / \u5BBD"})]}),(0,Ae.jsx)("div",{className:"dshr-anno-composer__widths",role:"radiogroup","aria-label":"\u7B14\u89E6\u7C97\u7EC6",children:yo.map(I=>{let T=i.width===I.value;return(0,Ae.jsxs)("button",{type:"button",role:"radio","aria-checked":T,className:`dshr-anno-width${T?" is-active":""}`,onClick:()=>p({width:I.value}),children:[(0,Ae.jsx)("span",{className:"dshr-anno-width__bar",style:{height:Ih(I.value),background:i.color}}),I.label]},I.id)})})]}):null,(0,Ae.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Ae.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Ae.jsx)("span",{children:O}),(0,Ae.jsx)("em",{children:i.style==="note"?"\u53EF\u7559\u7A7A\uFF0C\u4EC5\u6807\u8BB0\u4F4D\u7F6E":"\u53EF\u9009"})]}),(0,Ae.jsx)("textarea",{ref:u,className:"dshr-anno-composer__textarea",value:i.note,maxLength:Bc,placeholder:N,"aria-label":O,onChange:I=>p({note:I.target.value})}),(0,Ae.jsxs)("div",{className:"dshr-anno-composer__counter",children:[i.note.length," / ",Bc]})]}),v?(0,Ae.jsxs)("div",{className:"dshr-anno-composer__quote",style:{"--dshr-anno-color":i.color},children:[(0,Ae.jsx)("span",{className:"dshr-anno-composer__quote-label",children:"\u9009\u4E2D\u6587\u5B57"}),(0,Ae.jsx)("p",{className:"dshr-anno-composer__quote-text",children:v})]}):null,(0,Ae.jsxs)("div",{className:`dshr-anno-composer__preview is-${i.style}`,style:{"--dshr-anno-color":i.color},children:[(0,Ae.jsx)("span",{className:"dshr-anno-composer__preview-label",children:"\u6548\u679C\u9884\u89C8"}),(0,Ae.jsx)("span",{className:"dshr-anno-composer__preview-text",children:v||"\u9009\u4E2D\u7684\u6587\u5B57\u4F1A\u8FD9\u6837\u663E\u793A"})]})]}),(0,Ae.jsxs)("footer",{className:"dshr-anno-composer__foot",children:[a?(0,Ae.jsx)("button",{type:"button",className:"dshr-anno-btn dshr-anno-btn--danger",onClick:()=>{typeof s=="function"&&s(e||{})},children:"\u5220\u9664"}):null,(0,Ae.jsx)("span",{className:"dshr-anno-composer__spacer"}),(0,Ae.jsx)("button",{type:"button",className:"dshr-anno-btn",onClick:()=>{typeof n=="function"&&n()},children:"\u53D6\u6D88"}),(0,Ae.jsx)("button",{type:"button",className:"dshr-anno-btn dshr-anno-btn--primary",disabled:!E,onClick:g,title:"Ctrl / \u2318 + Enter \u4FDD\u5B58",children:a?"\u4FDD\u5B58\u4FEE\u6539":"\u4FDD\u5B58\u6807\u6CE8"})]})]})})}var hu=360,pu=520;function gu(t){try{return t.toDataURL("image/jpeg",.84)}catch{return""}}function sm(t){let e=Number(t.naturalWidth||t.width)||0,r=Number(t.naturalHeight||t.height)||0;if(!e||!r)return"";let n=Math.min(hu/e,pu/r,1),o=document.createElement("canvas");o.width=Math.max(1,Math.round(e*n)),o.height=Math.max(1,Math.round(r*n));let s=o.getContext("2d");return s.fillStyle="#fbf7ee",s.fillRect(0,0,o.width,o.height),s.drawImage(t,0,0,o.width,o.height),gu(o)}function im(t){return new Promise(e=>{let r=new Image;r.decoding="async",r.onload=()=>e(r),r.onerror=()=>e(null),r.src=t})}async function lm(t){if(!t||!String(t.type||"").startsWith("image/"))return"";let e=URL.createObjectURL(t);try{let r=await im(e);return r?sm(r):""}finally{URL.revokeObjectURL(e)}}async function cm(t,e){let r=await ya(t,{signal:e}),n,o,s=()=>{o?.cancel(),r.close()};e?.addEventListener("abort",s,{once:!0});try{if(e?.aborted)throw $r();let a=await r.pdf.getPage(1);if(e?.aborted)throw $r();let i=a.getViewport({scale:1}),c=Math.min(hu/i.width,pu/i.height,1.5),d=a.getViewport({scale:c});if(n=document.createElement("canvas"),n.width=Math.max(1,Math.round(d.width)),n.height=Math.max(1,Math.round(d.height)),o=a.render({canvas:n,viewport:d,background:"#ffffff"}),o.onContinue=u=>setTimeout(()=>{e?.aborted?o.cancel():u()},16),await o.promise,e?.aborted)throw $r();return gu(n)}finally{e?.removeEventListener("abort",s),await r.close(),n&&(n.width=0,n.height=0)}}async function mu(t,{signal:e}={}){if(e?.aborted)throw $r();if(!t?.blob)return{};let r=String(t.format||"").toLowerCase();try{if(r==="pdf"){let n=await cm(t.blob,e);return n?{cover:n}:{}}if(["epub","mobi","azw","azw3"].includes(r)){let{parseBook:n}=await Promise.resolve().then(()=>(Ri(),Mi)),o=/\.[a-z0-9]+$/iu.test(t.title||"")?t.title:`${t.title||"book"}.${r}`,s=await n(t.blob,{fileName:o,mime:t.blob.type});try{let a="";if(s.cover)try{let i=await fetch(s.cover);a=await lm(await i.blob())}catch{a=""}return{...a?{cover:a}:{},...s.title?{title:s.title}:{},...s.author?{author:s.author}:{},...s.language?{language:s.language}:{}}}finally{s.dispose?.()}}}catch(n){if(e?.aborted)throw $r();console.warn("[dsh-reader] cover generation failed",t.title,n)}return{}}var Y=require("react/jsx-runtime"),Ja="dsh-reader:last-book:v1",Oi="dsh-reader:session-book:v1";function Li(t){let e=t/255;return e<=.03928?e/12.92:((e+.055)/1.055)**2.4}function Di(t){let e=/^#?([0-9a-f]{6})$/iu.exec(String(t||"").trim());if(!e)return null;let r=e[1];return{r:parseInt(r.slice(0,2),16),g:parseInt(r.slice(2,4),16),b:parseInt(r.slice(4,6),16)}}function dm(t){let e=Di(t);return e?.2126*Li(e.r)+.7152*Li(e.g)+.0722*Li(e.b):1}function um(t,e,r){let n=Di(t),o=Di(e);if(!n||!o)return e;let s=Math.max(0,Math.min(1,r));return`#${mo(n.r*s+o.r*(1-s)).slice(1)}${mo(n.g*s+o.g*(1-s)).slice(1)}${mo(n.b*s+o.b*(1-s)).slice(1)}`}function mo(t){return`#${Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0")}`}function fm(t){let e=document.createElement("canvas");e.width=32,e.height=32;let r=e.getContext("2d",{willReadFrequently:!0});if(!r)return"";r.drawImage(t,0,0,e.width,e.height);let n;try{n=r.getImageData(0,0,e.width,e.height).data}catch{return""}let o=new Map;for(let a=0;a<n.length;a+=4){let i=n[a+3];if(i<40)continue;let c=n[a],d=n[a+1],u=n[a+2],p=`${c>>5}:${d>>5}:${u>>5}`,h=o.get(p);h||(h={count:0,r:0,g:0,b:0},o.set(p,h)),h.count+=i,h.r+=c*i,h.g+=d*i,h.b+=u*i}let s=null;for(let a of o.values())(!s||a.count>s.count)&&(s=a);return s?mo(s.r/s.count)+mo(s.g/s.count).slice(1)+mo(s.b/s.count).slice(1):""}function hm(t,e,r){return Math.max(e,Math.min(r,t))}var Pi=class extends H.default.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,r){console.error("[dsh-reader]",e,r)}reset=()=>this.setState({error:null});render(){return this.state.error?(0,Y.jsx)("div",{className:"dshr-root",children:(0,Y.jsxs)("div",{className:"dshr-error-panel",children:[(0,Y.jsx)("h3",{children:"\u9605\u8BFB\u5668\u9047\u5230\u4E86\u4E00\u4E2A\u95EE\u9898"}),(0,Y.jsxs)("p",{children:[this.state.error?.message||"\u672A\u77E5\u9519\u8BEF","\u3002\u8FD9\u901A\u5E38\u662F\u6587\u6863\u683C\u5F0F\u6216\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u91CD\u65B0\u6253\u5F00\u6587\u6863\u901A\u5E38\u53EF\u4EE5\u6062\u590D\u3002"]}),(0,Y.jsx)("div",{style:{display:"flex",gap:8,marginTop:14},children:(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:()=>{this.reset(),this.props.onReset?.()},children:"\u8FD4\u56DE\u4E66\u67B6"})})]})}):this.props.children}};function pm(){let[t,e]=H.default.useState(""),r=H.default.useRef(0),n=H.default.useCallback((o,s=2800)=>{window.clearTimeout(r.current),e(String(o)),r.current=window.setTimeout(()=>e(""),s)},[]);return H.default.useEffect(()=>()=>window.clearTimeout(r.current),[]),[t,n]}function bu(){let[t,e]=H.default.useState([]),[r,n]=H.default.useState(!0),[o,s]=H.default.useState(!1),[a,i]=H.default.useState(!1),[c,d]=H.default.useState("all"),[u,p]=H.default.useState(null),[h,g]=H.default.useState(!1),[S,_]=H.default.useState(""),[v,E]=H.default.useState(wl),[O,N]=H.default.useState(!1),[M,I]=H.default.useState(!1),[T,D]=H.default.useState(!1),[L,m]=H.default.useState(!1),[A,F]=H.default.useState(!1),[te,B]=H.default.useState(!1),le=H.default.useRef(null),[fe,V]=H.default.useState(null),[ge,q]=pm(),[z,ce]=H.default.useState(0),[$,re]=H.default.useState(null),[ne,_e]=H.default.useState({}),[Q,ze]=H.default.useState(!0),[Be,Oe]=H.default.useState(!1),[dt,Qe]=H.default.useState(null),[Ve,f]=H.default.useState(null),[l,k]=H.default.useState(null),[x,se]=H.default.useState([]),[he,ie]=H.default.useState(!1),[be,we]=H.default.useState(null),[Fe,ee]=H.default.useState(!1),[Ge,tt]=H.default.useState(null),[rt,Ue]=H.default.useState(null),[De,pe]=H.default.useState(null),[je,Xe]=H.default.useState(""),[ut,X]=H.default.useState(0),[me,xe]=H.default.useState(""),[ke,$e]=H.default.useState(!1),[Qt,Lt]=H.default.useState(0),pn=H.default.useRef(null),pt=H.default.useRef({timer:0,latest:null}),Jt=H.default.useRef({token:0,controller:null}),gt=H.default.useRef(null),Yt=H.default.useRef(v),Ce=H.default.useRef(t),nn=H.default.useRef({running:!1,attempted:new Set}),lt=H.default.useRef(!1),[yr,Dr]=H.default.useState(null);gt.current=u,Yt.current=v,Ce.current=t;let Ft=H.default.useCallback(()=>{Jt.current.token+=1,Jt.current.controller?.abort()},[]);H.default.useLayoutEffect(()=>()=>Ft(),[u?.record?.id,Ve,Ft]);let on=`${v.fontSize}:${v.lineHeight}:${v.fontFamily}:${v.fontWeight}:${v.tocWidth}:${v.contentWidth}:${je?"img":"plain"}:${Qt}`,ar=H.default.useMemo(()=>Ra(v,je),[v,je]),jn=H.default.useMemo(()=>{let w=ar["--dshr-reader-bg"]||v.customBackground||"#fbf7ee",R=me&&je?um(me,w,Number(v.backgroundImageOpacity)||0):w,Le=dm(R)*Math.max(.35,Math.min(1.25,Number(v.brightness)||1))<.4?"#f8f5ec":"#17181a";return{"--dshr-immersive-ink":Le,"--dshr-immersive-chip":`color-mix(in srgb, ${R} 58%, transparent)`,"--dshr-immersive-chip-hover":`color-mix(in srgb, ${R} 82%, transparent)`,"--dshr-immersive-border":`color-mix(in srgb, ${Le} 32%, transparent)`}},[me,je,ar,v.customBackground,v.backgroundImageOpacity,v.brightness]),kt=H.default.useCallback(async()=>{try{e(await ps())}catch(w){q(w?.message||"\u8BFB\u53D6\u4E66\u67B6\u5931\u8D25\u3002")}finally{n(!1)}},[q]),bt=H.default.useCallback(async w=>{if(!w){se([]);return}try{se(await pl(w))}catch(R){console.warn("[dsh-reader] annotations unavailable",R),se([])}},[]);H.default.useEffect(()=>{kt()},[kt]),H.default.useEffect(()=>{if(r||u)return;let w=Ce.current.filter(Ee=>!Ee.cover&&["pdf","epub","mobi","azw","azw3"].includes(Ee.format)&&!nn.current.attempted.has(Ee.id));if(w.length===0)return;let R=nn.current,J=new AbortController;R.controller=J,R.running=!0;let Le=setTimeout(()=>{(async()=>{for(let Ee of w){if(J.signal.aborted)break;if(!R.attempted.has(Ee.id))try{let We=await vo(Ee.id);if(!We||J.signal.aborted)continue;let ft=await mu(We,{signal:J.signal});if(J.signal.aborted)break;R.attempted.add(Ee.id),(ft.cover||ft.title||ft.author||ft.language)&&(await Zn(We.id,ft),e(Sr=>Sr.map(Er=>Er.id===We.id?{...Er,...ft}:Er)))}catch(We){if(J.signal.aborted)break;R.attempted.add(Ee.id),console.warn("[dsh-reader] cover generation failed",Ee.title,We)}}})().finally(()=>{R.controller===J&&(R.running=!1)})},500);return()=>{clearTimeout(Le),J.abort()}},[r,u]),H.default.useEffect(()=>{_l(v)},[v]),H.default.useEffect(()=>{if(!u||v.readingMode==="book")return;let w=R=>{if(R.defaultPrevented||R.repeat||R.ctrlKey||R.metaKey||R.altKey||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(R.key)||R.target instanceof Element&&R.target.closest('input, textarea, select, [contenteditable="true"], .dshr-modal-mask, .dshr-appearance-panel, .dshr-anno-panel, .dshr-ai, .dshr-selection, .dshr-anno-composer, .dshr-pdf-translation-panel'))return;let J=window.getSelection?.();if(J&&!J.isCollapsed)return;let Le=document.querySelector(".dshr-root .dshr-content")||document.querySelector(".dshr-root .dshr-pdf-scroll");if(!Le)return;R.preventDefault();let Ee=Math.max(160,Math.round(Le.clientHeight*.82)),We=R.key==="ArrowRight"||R.key==="ArrowDown";Le.scrollBy({top:We?Ee:-Ee,behavior:"smooth"})};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[u,v.readingMode]),H.default.useEffect(()=>{if(!je){xe("");return}let w=!1,R=new Image;return R.onload=()=>{w||xe(fm(R))},R.onerror=()=>{w||xe("")},R.src=je,()=>{w=!0}},[je]),H.default.useEffect(()=>{let w=!1,R="";if(!v.backgroundImageKey){Xe("");return}return(async()=>{try{let J=await vl();if(!J||w)return;R=URL.createObjectURL(J),Xe(R)}catch{w||Xe("")}})(),()=>{w=!0,R&&URL.revokeObjectURL(R)}},[v.backgroundImageKey,ut]),H.default.useEffect(()=>{if(!Ve)return;let w=J=>{J?.type==="scroll"&&J.target instanceof Element&&J.target.closest(".dshr-pdf-translation-panel")||f(null)},R=J=>{J.key==="Escape"&&f(null)};return window.addEventListener("resize",w),window.addEventListener("keydown",R),document.addEventListener("scroll",w,!0),()=>{window.removeEventListener("resize",w),window.removeEventListener("keydown",R),document.removeEventListener("scroll",w,!0)}},[Ve]);let Et=H.default.useCallback(async()=>{let w=pt.current.latest;if(w){pt.current.latest=null;try{await gs(w.id,w.progress),e(R=>R.map(J=>J.id===w.id?{...J,progress:w.progress,lastOpenedAt:Date.now()}:J))}catch{}}},[kt]),gn=H.default.useCallback((w,R)=>{w&&(_e(R),pt.current.latest={id:w,progress:R},!pt.current.timer&&(pt.current.timer=window.setTimeout(()=>{pt.current.timer=0,Et()},700)))},[Et]);H.default.useEffect(()=>()=>{window.clearTimeout(pt.current.timer),Et()},[Et]);let mn=H.default.useCallback(async()=>{i(!0);try{let w=await il();await kt();let R=[`\u6587\u732E ${w.counts.paper||0}`,`\u4E66\u7C4D ${w.counts.book||0}`];w.counts.document&&R.push(`\u6587\u6863 ${w.counts.document}`),q(w.changed>0?`\u4E66\u5355\u5DF2\u6574\u7406\uFF1A${R.join(" \xB7 ")}`:`\u4E66\u5355\u5DF2\u662F\u6700\u65B0\uFF1A${R.join(" \xB7 ")}`)}catch(w){q(w?.message||"\u81EA\u52A8\u6574\u7406\u5931\u8D25\u3002")}finally{i(!1)}},[kt,q]),sr=H.default.useCallback(async(w,R)=>{let J=["book","paper","document"],Le=R||J[(J.indexOf(w.category||"document")+1)%J.length];try{await sl(w.id,Le),await kt(),q(`\u300A${w.title||"\u6587\u6863"}\u300B\u5DF2\u5F52\u5165\u300C${Yn(Le)}\u300D\u3002`)}catch(Ee){q(Ee?.message||"\u4FEE\u6539\u5206\u7C7B\u5931\u8D25\u3002")}},[kt,q]),bn=H.default.useCallback(w=>{E(R=>({...R,...w})),Lt(R=>R+1)},[]),er=H.default.useCallback(()=>{pn.current?.click()},[]),xn=H.default.useCallback(async w=>{if(w){if(!String(w.type||"").startsWith("image/")){q("\u8BF7\u9009\u62E9\u56FE\u7247\u6587\u4EF6\uFF08JPG / PNG / WebP\uFF09\u3002");return}$e(!0);try{let R=w;try{let J=await createImageBitmap(w),Le=Math.min(1,2400/Math.max(J.width,J.height));if(Le<1){let Ee=document.createElement("canvas");Ee.width=Math.round(J.width*Le),Ee.height=Math.round(J.height*Le),Ee.getContext("2d").drawImage(J,0,0,Ee.width,Ee.height);let ft=await new Promise(Sr=>Ee.toBlob(Sr,"image/jpeg",.86));ft&&(R=ft)}J.close?.()}catch{}await xl(R),E(J=>({...J,backgroundImageKey:"reader-background"})),X(J=>J+1),q("\u80CC\u666F\u56FE\u7247\u5DF2\u4FDD\u5B58\uFF0C\u53EF\u8C03\u6574\u900F\u660E\u5EA6\u548C\u6A21\u7CCA\u5EA6\u3002")}catch(R){q(R?.message||"\u80CC\u666F\u56FE\u7247\u4FDD\u5B58\u5931\u8D25\u3002")}finally{$e(!1)}}},[q]),Zr=H.default.useCallback(async()=>{try{await yl(),E(w=>({...w,backgroundImageKey:""})),Xe(""),q("\u5DF2\u79FB\u9664\u80CC\u666F\u56FE\u7247\u3002")}catch(w){q(w?.message||"\u79FB\u9664\u80CC\u666F\u56FE\u7247\u5931\u8D25\u3002")}},[q]),wr=H.default.useCallback(async(w,R={})=>{if(R.rejected){q("\u6CA1\u6709\u53EF\u8BC6\u522B\u7684\u6587\u6863\u3002\u652F\u6301 PDF / EPUB / MOBI / TXT / Markdown / HTML\u3002");return}if(!w?.length)return;s(!0);let J=[],Le=[];for(let Ee of w)try{let We=await al(Ee);J.push(We)}catch(We){Le.push(`${Ee.name}: ${We?.message||"\u5BFC\u5165\u5931\u8D25"}`)}await kt(),s(!1),Le.length>0&&q(Le[0],4200),J.length>0&&(q(J.length===1?"\u5DF2\u52A0\u5165\u4E66\u67B6\u3002":`\u5DF2\u52A0\u5165 ${J.length} \u4EFD\u6587\u6863\u3002`),oe(J[0]))},[kt,q]),ir=H.default.useCallback(async w=>{D(!0);try{let R=await Il(w);I(!1),await wr([R])}catch(R){q(R?.message||"\u5728\u7EBF\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u94FE\u63A5\u6216\u7A0D\u540E\u91CD\u8BD5\u3002",5200)}finally{D(!1)}},[wr,q]),Nt=H.default.useCallback(async()=>{if(F(!1),document.fullscreenElement===le.current)try{await document.exitFullscreen()}catch{}},[]),de=H.default.useCallback(async()=>{if(A){await Nt();return}F(!0),ze(!1)},[A,Nt]),y=H.default.useCallback(async()=>{try{document.fullscreenElement===le.current?await document.exitFullscreen():le.current?.requestFullscreen&&await le.current.requestFullscreen()}catch{q("\u6D4F\u89C8\u5668\u963B\u6B62\u4E86\u5168\u5C4F\uFF1B\u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528\u5F53\u524D\u7A97\u53E3\u7684\u6C89\u6D78\u6A21\u5F0F\u3002",3600)}},[q]);H.default.useEffect(()=>{let w=()=>{B(document.fullscreenElement===le.current)};return document.addEventListener("fullscreenchange",w),()=>document.removeEventListener("fullscreenchange",w)},[]),H.default.useEffect(()=>{!u&&A&&Nt()},[u,A,Nt]),H.default.useEffect(()=>{if(!A)return;let w=R=>{R.key==="Escape"&&(R.preventDefault(),Nt())};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[A,Nt]);let G=H.default.useCallback(()=>{try{localStorage.removeItem(Ja)}catch{}try{sessionStorage.removeItem(Oi)}catch{}Dr(null),pt.current.timer&&(window.clearTimeout(pt.current.timer),pt.current.timer=0),Et(),Oe(!1),Qe(null),f(null),k(null),se([]),ie(!1),ee(!1),we(null),tt(null),Ue(null),pe(null);let w=gt.current?.book;if(w?.dispose)try{w.dispose()}catch{}p(null),_e({}),re(null),ce(0)},[Et]),oe=H.default.useCallback(async w=>{g(!0),_(`\u6B63\u5728\u6253\u5F00\u300A${w.title||"\u6587\u6863"}\u300B\u2026`);try{let R=await vo(w.id);if(!R?.blob)throw new Error("\u4E66\u67B6\u4E2D\u627E\u4E0D\u5230\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u53EF\u80FD\u5DF2\u88AB\u6E05\u7406\u3002\u8BF7\u91CD\u65B0\u5BFC\u5165\u3002");Dr(null);try{localStorage.setItem(Ja,R.id)}catch{}try{sessionStorage.setItem(Oi,R.id)}catch{}if((R.format||kn(R.title))==="pdf"){R.blob.size>24*1024*1024&&_(`\u6B63\u5728\u6253\u5F00\u5927\u578B PDF\u300A${R.title||w.title||"\u6587\u6863"}\u300B\u2026`);let Er=R.blob,Fr=R.progress||{},Vo={...R,blob:null,blobName:R.blob.name||""};p({kind:"pdf",record:Vo,data:Er}),_e({page:Fr.page||1,pages:Fr.pages||0,percent:Fr.percent||0}),ce(0),re(null),ze(!1),ie(!1),pe(null),await bt(R.id),g(!1),await gs(R.id),await kt();return}let{parseBook:Le}=await Promise.resolve().then(()=>(Ri(),Mi)),Ee=await Le(R.blob,{fileName:R.title??w.title,mime:R.blob.type}),We={...R,title:Ee.title||R.title,author:Ee.author||R.author,language:Ee.language||R.language};(We.title!==R.title||We.author!==R.author||We.language!==R.language)&&(await Zn(R.id,{title:We.title,author:We.author,language:We.language}),await kt());let ft=R.progress||{},Sr=hm(Number(ft.chapter)||0,0,Math.max(0,Ee.chapters.length-1));p({kind:"flow",record:We,book:Ee}),ce(Sr),re({chapter:Sr,scrollRatio:Number(ft.scrollRatio)||0}),_e({chapter:Sr,chapters:Ee.chapters.length,percent:Number(ft.percent)||(Ee.chapters.length?(Sr+1)/Ee.chapters.length*100:0)}),ze(!0),ie(!1),Ue(null),await bt(R.id),g(!1),Tl(Ee.chapters.slice(0,3).map(Er=>Er.blocks.map(Fr=>Fr.text||"").join(" ")).join(" "))&&!Yt.current.autoTranslate&&q("\u68C0\u6D4B\u5230\u5916\u6587\u5185\u5BB9\u3002\u9876\u90E8\u300C\u5B9E\u65F6\u7FFB\u8BD1\u300D\u53EF\u4EE5\u968F\u65F6\u5F00\u542F\u3002",4200)}catch(R){g(!1),q(R?.message||"\u6253\u5F00\u6587\u6863\u5931\u8D25\u3002",5e3)}},[kt,bt,q]);H.default.useEffect(()=>{if(r||u||lt.current||Ce.current.length===0)return;lt.current=!0;let w="";try{w=localStorage.getItem(Ja)||""}catch{}if(!w){Dr(null);return}let R=Ce.current.find(Ee=>Ee.id===w);if(!R){Dr(null);try{localStorage.removeItem(Ja)}catch{}return}let J=Number(R.size)>24*1024*1024||Number(R.progress?.pages)>300,Le=!1;try{Le=sessionStorage.getItem(Oi)===R.id}catch{}Dr(R),!(J&&!Le)&&oe(R)},[r,u,oe]),H.default.useEffect(()=>{let w=()=>{document.visibilityState==="hidden"&&Et()};return document.addEventListener("visibilitychange",w),()=>document.removeEventListener("visibilitychange",w)},[Et]);let Je=H.default.useCallback(async()=>{let w=fe;if(w)try{gt.current?.record?.id===w.id&&G(),await ll(w.id),V(null),await kt(),q("\u5DF2\u4ECE\u4E66\u67B6\u5220\u9664\u3002")}catch(R){q(R?.message||"\u5220\u9664\u5931\u8D25\u3002")}},[G,fe,kt,q]),vt=H.default.useCallback(async()=>{try{G(),await cl(),await kt(),N(!1),q("\u4E66\u67B6\u5DF2\u6E05\u7A7A\u3002")}catch(w){q(w?.message||"\u6E05\u7A7A\u4E66\u67B6\u5931\u8D25\u3002")}},[G,kt,q]),Ke=H.default.useCallback((w,R)=>{Qe({id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:String(w||"").slice(0,8e3),context:String(R||"").slice(0,1600)}),Oe(!0),ie(!1),f(null),k(null)},[]),xt=H.default.useCallback((w,R="web")=>{let J=String(w||"").trim().slice(0,500);if(!J)return;let Le=R==="scholar"?`https://scholar.google.com/scholar?q=${encodeURIComponent(J)}`:`https://www.google.com/search?q=${encodeURIComponent(J)}`;window.open(Le,"_blank","noopener,noreferrer")||q("\u6D4F\u89C8\u5668\u62E6\u622A\u4E86\u65B0\u7A97\u53E3\u3002\u8BF7\u5141\u8BB8\u5F39\u51FA\u7A97\u53E3\uFF0C\u6216\u590D\u5236\u6587\u5B57\u540E\u624B\u52A8\u641C\u7D22\u3002")},[q]),Bt=H.default.useCallback(async w=>{try{await navigator.clipboard.writeText(w),q("\u5DF2\u590D\u5236\u3002")}catch{q("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u3002")}},[q]),_r=H.default.useCallback(w=>{if(Ft(),!w?.text?.trim()){f(null);return}f({...w,source:"flow"}),k(null)},[Ft]),Pr=H.default.useCallback(w=>{if(Ft(),!w?.text){f(null);return}f({...w,source:"pdf"}),k(null)},[Ft]),yt=H.default.useCallback(async w=>{let R=w?.text?.trim();if(!R)return;Ft();let J=new AbortController,Le=Jt.current.token,Ee=u?.record?.id;Jt.current.controller=J;let We=()=>!J.signal.aborted&&Le===Jt.current.token&&gt.current?.record?.id===Ee;k({status:"loading"});try{let ft=await Qn([{id:"selection",text:R}],{context:w.context||"",title:u?.book?.title||u?.record?.title||"",signal:J.signal});We()&&k({status:"done",zh:ft.selection||""})}catch(ft){We()&&!Sn(ft)&&k({status:"error",error:ft?.message||"\u7FFB\u8BD1\u5931\u8D25\u3002"})}},[u,Ft]),an=H.default.useCallback(w=>{let R=gt.current?.record?.id;if(!R||!w?.text?.trim())return;let J=gt.current?.kind==="pdf";tt(null),we({bookId:R,kind:J?"pdf":"flow",style:"highlight",color:"#f5d76e",width:9,note:"",quote:w.text.trim(),chapterId:J?void 0:gt.current?.book?.chapters?.[z]?.id,chapterIndex:J?void 0:z,ranges:J?void 0:w.ranges,page:J?w.page:void 0,rects:J?w.pageRects:void 0}),ee(!0),f(null),k(null)},[z]),kr=H.default.useCallback(w=>{w&&(tt(w),we({...w}),ee(!0))},[]),Tr=H.default.useCallback(w=>{let R=x.find(J=>J.id===w);R&&kr(R)},[x,kr]),sn=H.default.useCallback(()=>{ee(!1),we(null),tt(null)},[]),vn=H.default.useCallback(async w=>{if(!(!w||!w.bookId))try{w.id?await ml(w.id,w):await gl(w),await bt(w.bookId),sn(),Lt(R=>R+1),q(w.note?.trim()?"\u6279\u6CE8\u5DF2\u4FDD\u5B58\u3002":"\u6807\u8BB0\u5DF2\u4FDD\u5B58\u3002")}catch(R){q(R?.message||"\u4FDD\u5B58\u6279\u6CE8\u5931\u8D25\u3002")}},[sn,bt,q]),Wo=H.default.useCallback(async w=>{if(w?.id)try{await bl(w.id),await bt(gt.current?.record?.id),sn(),Lt(R=>R+1),q("\u6279\u6CE8\u5DF2\u5220\u9664\u3002")}catch(R){q(R?.message||"\u5220\u9664\u6279\u6CE8\u5931\u8D25\u3002")}},[sn,bt,q]),es=H.default.useCallback(w=>{if(!w)return;if(w.kind==="pdf"){pe({id:w.id,page:w.page,token:Date.now()}),ie(!1);return}let R=Number.isFinite(w.chapterIndex)?w.chapterIndex:0;ce(R),re(null),Ue({id:w.id,blockId:w.ranges?.[0]?.blockId,token:Date.now()}),ie(!1)},[]),zr=H.default.useCallback(w=>{ce(w),re(null)},[]);function ts(w){if(w.button!==0)return;w.preventDefault();let R=w.clientX,J=Number(Yt.current.tocWidth)||260,Le=document.body.style.cursor,Ee=document.body.style.userSelect;document.body.style.cursor="col-resize",document.body.style.userSelect="none",document.body.classList.add("dshr-toc-resizing");let We=Sr=>{let Er=Math.max(180,Math.min(520,Math.round(J+Sr.clientX-R)));E(Fr=>({...Fr,tocWidth:Er}))},ft=()=>{window.removeEventListener("pointermove",We),window.removeEventListener("pointerup",ft),window.removeEventListener("pointercancel",ft),document.body.style.cursor=Le,document.body.style.userSelect=Ee,document.body.classList.remove("dshr-toc-resizing")};window.addEventListener("pointermove",We),window.addEventListener("pointerup",ft),window.addEventListener("pointercancel",ft)}let lr=u?.book?.title||u?.record?.title||u?.record?.blob?.name||u?.record?.blobName||"",rs=u?.book?.author||u?.record?.author||"",qo=u?u.kind==="pdf"?ne.pages?`\u7B2C ${ne.page||1} / ${ne.pages} \u9875`:"PDF \u6587\u6863":`\u7B2C ${(z||0)+1} / ${u.book.chapters.length} \u7AE0`:"",yn=u?u.kind==="pdf"?ne.pages>0?(ne.page||1)/ne.pages*100:0:(z+1)/Math.max(1,u.book.chapters.length)*100:0;return(0,Y.jsx)(Pi,{onReset:G,children:(0,Y.jsxs)("div",{ref:le,className:`dshr-root${A?" is-immersive":""}`,style:{...ar,...jn,"--dshr-font-size":`${v.fontSize}px`,"--dshr-line-height":String(v.lineHeight),"--dshr-toc-width":`${v.tocWidth}px`},"data-reader-background":v.backgroundPreset,"data-hide-translations":v.hideTranslations?"true":"false","data-reading-mode":v.readingMode||"scroll",children:[(0,Y.jsx)("input",{ref:pn,type:"file",accept:"image/*",className:"dshr-sr-only",tabIndex:-1,onChange:w=>{let R=w.target.files?.[0];w.target.value="",xn(R)}}),u?(0,Y.jsxs)("div",{className:"dshr-reader",children:[(0,Y.jsxs)("div",{className:"dshr-topbar",style:{position:"relative"},children:[(0,Y.jsx)("div",{className:"dshr-progress","aria-hidden":"true",children:(0,Y.jsx)("i",{style:{"--p":`${Math.min(100,yn)}%`}})}),(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:G,title:"\u8FD4\u56DE\u4E66\u67B6","aria-label":"\u8FD4\u56DE\u4E66\u67B6",children:(0,Y.jsx)(qi,{size:17})}),(0,Y.jsxs)("div",{className:"dshr-topbar__title",children:[(0,Y.jsx)("strong",{title:lr,children:lr}),(0,Y.jsx)("span",{children:[rs,Kn(u.record?.format),qo].filter(Boolean).join(" \xB7 ")})]}),(0,Y.jsxs)("div",{className:"dshr-topbar__tools",children:[u.kind==="flow"?(0,Y.jsx)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${Q?"dshr-btn--outline":""}`,onClick:()=>ze(w=>!w),title:"\u76EE\u5F55","aria-label":"\u76EE\u5F55","aria-pressed":Q,children:(0,Y.jsx)(cs,{size:16})}):null,(0,Y.jsxs)("div",{className:"dshr-topbar__mode",role:"group","aria-label":"\u7FFB\u4E66\u65B9\u5F0F",children:[(0,Y.jsx)("button",{type:"button",className:`dshr-topbar__mode-btn${v.readingMode!=="book"?" is-active":""}`,onClick:()=>E(w=>({...w,readingMode:"scroll"})),"aria-pressed":v.readingMode!=="book",title:"\u8FDE\u7EED\u6EDA\u52A8\u9605\u8BFB",children:(0,Y.jsx)("span",{children:"\u6EDA\u52A8"})}),(0,Y.jsx)("button",{type:"button",className:`dshr-topbar__mode-btn${v.readingMode==="book"?" is-active":""}`,onClick:()=>E(w=>({...w,readingMode:"book"})),"aria-pressed":v.readingMode==="book",title:"\u6A2A\u7248\u7EB8\u8D28\u4E66\u7FFB\u9875",children:(0,Y.jsx)("span",{children:"\u6A2A\u7248"})}),v.readingMode==="book"?(0,Y.jsx)("select",{className:"dshr-topbar__animation","aria-label":"\u7FFB\u9875\u52A8\u753B",value:v.bookAnimation||"slide",onChange:w=>E(R=>({...R,bookAnimation:w.target.value})),children:Ic.map(w=>(0,Y.jsx)("option",{value:w.id,children:w.label},w.id))}):null]}),(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon",onClick:()=>{de()},title:"\u6C89\u6D78\u6A21\u5F0F\uFF08\u9690\u85CF\u5DE5\u5177\u680F\u4E0E\u4FA7\u8FB9\u76EE\u5F55\uFF09","aria-label":"\u8FDB\u5165\u6C89\u6D78\u6A21\u5F0F",children:(0,Y.jsx)(ds,{size:16})}),(0,Y.jsxs)("button",{type:"button",className:"dshr-switch",role:"switch","aria-checked":v.autoTranslate,onClick:()=>E(w=>({...w,autoTranslate:!w.autoTranslate,...u.kind==="pdf"&&!w.autoTranslate?{hideTranslations:!1}:{}})),title:"\u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1",children:[(0,Y.jsx)("span",{className:"dshr-switch__track"}),(0,Y.jsx)("span",{style:{whiteSpace:"nowrap"},children:"\u5B9E\u65F6\u7FFB\u8BD1"})]}),(0,Y.jsx)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${v.hideTranslations?"dshr-btn--outline":""}`,onClick:()=>E(w=>({...w,hideTranslations:!w.hideTranslations})),title:v.hideTranslations?"\u663E\u793A\u4E2D\u6587\u8BD1\u6587":"\u53EA\u770B\u539F\u6587\uFF08\u9690\u85CF\u5DF2\u7FFB\u8BD1\u5185\u5BB9\uFF09","aria-label":v.hideTranslations?"\u663E\u793A\u4E2D\u6587\u8BD1\u6587":"\u53EA\u770B\u539F\u6587\uFF0C\u9690\u85CF\u8BD1\u6587","aria-pressed":v.hideTranslations,children:v.hideTranslations?(0,Y.jsx)(nl,{size:16}):(0,Y.jsx)(rl,{size:16})}),(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon",onClick:()=>{m(!0),f(null)},title:"\u5B57\u4F53\u3001\u80CC\u666F\u4E0E\u7559\u767D","aria-label":"\u9605\u8BFB\u5916\u89C2",children:(0,Y.jsx)(aa,{size:16})}),(0,Y.jsxs)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${he?"dshr-btn--outline":""}`,onClick:()=>{ie(w=>!w),Oe(!1),f(null)},title:"\u6279\u6CE8\u4E0E\u4FBF\u7B7E","aria-label":`\u6279\u6CE8\u4E0E\u4FBF\u7B7E\uFF0C\u5171 ${x.length} \u6761`,children:[(0,Y.jsx)(oa,{size:16}),x.length>0?(0,Y.jsx)("span",{className:"dshr-count-badge",children:x.length>99?"99+":x.length}):null]}),(0,Y.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary dshr-btn--sm",onClick:()=>Ke("",""),title:"\u6253\u5F00 AI \u9605\u8BFB\u52A9\u624B",children:[(0,Y.jsx)(ln,{size:14})," AI"]}),(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:()=>N(!0),title:"\u9605\u8BFB\u8BBE\u7F6E","aria-label":"\u9605\u8BFB\u8BBE\u7F6E",children:(0,Y.jsx)(ea,{size:16})})]})]}),(0,Y.jsxs)("div",{className:"dshr-body",children:[u.kind==="flow"?(0,Y.jsxs)("aside",{className:`dshr-toc${Q?"":" is-closed"}`,"aria-label":"\u76EE\u5F55",children:[(0,Y.jsxs)("div",{className:"dshr-toc__head",children:[(0,Y.jsx)("strong",{children:"\u76EE\u5F55"}),(0,Y.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost",onClick:()=>ze(!1),"aria-label":"\u6536\u8D77\u76EE\u5F55",children:(0,Y.jsx)(dr,{size:14})})]}),(0,Y.jsx)("div",{className:"dshr-toc__list",children:u.book.chapters.map((w,R)=>(0,Y.jsx)("button",{type:"button",className:`dshr-toc__item${R===z?" is-active":""}`,onClick:()=>zr(R),title:w.title,children:w.title||`\u7B2C ${R+1} \u7AE0`},w.id||R))}),(0,Y.jsx)("div",{className:"dshr-toc__resizer",role:"separator","aria-orientation":"vertical","aria-label":"\u62D6\u52A8\u8C03\u6574\u76EE\u5F55\u5BBD\u5EA6",title:"\u62D6\u52A8\u8C03\u6574\u76EE\u5F55\u5BBD\u5EA6\uFF1B\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4",onPointerDown:ts,onDoubleClick:()=>E(w=>({...w,tocWidth:260}))})]}):null,u.kind==="pdf"?(0,Y.jsx)(uc,{data:u.data,documentId:u.record.id,fileName:lr,initialPage:u.record.progress?.page||1,autoTranslate:v.autoTranslate,hideTranslations:v.hideTranslations,paged:v.readingMode==="book",onHideTranslations:()=>E(w=>({...w,hideTranslations:!0})),annotations:x,onOpenAnnotation:Tr,focusAnnotation:De,onReady:({pageCount:w})=>_e(R=>({...R,page:R.page||1,pages:w,percent:w>0?(R.page||1)/w*100:R.percent||0})),onPageChange:w=>{let R=ne.pages||0,J={...ne,page:w,pages:R,percent:R>0?w/R*100:0};_e(J),gn(u.record.id,J)},onSelection:Pr},u.record.id):(0,Y.jsx)(Wl,{book:u.book,chapterIndex:z,onChapterChange:zr,settings:v,restore:$,onRestored:()=>re(null),onSelection:_r,onProgress:w=>{_e(w),gn(u.record.id,w)},annotations:x,onOpenAnnotation:Tr,focusAnnotation:rt,layoutVersion:on}),Be?(0,Y.jsx)(hc,{open:Be,onClose:()=>Oe(!1),seed:dt,onGoogle:xt,onToast:q}):null,he?(0,Y.jsx)(zc,{open:he,annotations:x,book:u.book||u.record,onClose:()=>ie(!1),onOpenAnnotation:Tr,onJump:es,onDelete:w=>{Wo(w)}}):null]}),A?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)("div",{className:"dshr-immersive-controls",children:[(0,Y.jsx)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>{y()},title:te?"\u9000\u51FA\u5168\u5C4F\uFF08Esc\uFF09":"\u8FDB\u5165\u5168\u5C4F","aria-label":te?"\u9000\u51FA\u5168\u5C4F":"\u8FDB\u5165\u5168\u5C4F","aria-pressed":te,children:te?(0,Y.jsx)(el,{size:15}):(0,Y.jsx)(ds,{size:15})}),(0,Y.jsxs)("button",{type:"button",className:"dshr-immersive-btn dshr-immersive-btn--exit",onClick:()=>{Nt()},title:"\u9000\u51FA\u6C89\u6D78\u6A21\u5F0F\uFF08Esc\uFF09",children:[(0,Y.jsx)(dr,{size:14})," \u9000\u51FA\u6C89\u6D78"]})]}),u.kind==="flow"&&!Q?(0,Y.jsx)("button",{type:"button",className:"dshr-immersive-toc",onClick:()=>ze(!0),title:"\u6253\u5F00\u76EE\u5F55","aria-label":"\u6253\u5F00\u76EE\u5F55",children:(0,Y.jsx)(cs,{size:15})}):null]}):null,(0,Y.jsx)(Sc,{enabled:v.readingMode==="book",animation:v.bookAnimation,bookMode:!0,bookFrame:u.kind==="flow",pdfMode:u.kind==="pdf",frameTop:A?0:52,frameLeft:u.kind==="flow"&&Q?v.tocWidth:0,leftOffset:u.kind==="flow"&&Q?v.tocWidth+12:12,readerKey:`${u.record.id}:${u.kind}:${z}`,canPrevChapter:u.kind==="flow"&&z>0,canNextChapter:u.kind==="flow"&&z<(u.book?.chapters?.length||1)-1,onPrevChapter:()=>zr(Math.max(0,z-1)),onNextChapter:()=>zr(Math.min((u.book?.chapters?.length||1)-1,z+1))})]}):(0,Y.jsx)(El,{books:t,loading:r,resumeBook:yr,onResume:w=>{oe(w)},importing:o,organizing:a,categoryFilter:c,onCategoryFilter:d,onAutoOrganize:()=>{mn()},onImport:wr,onOpen:w=>{oe(w)},onDelete:w=>V(w),onCycleCategory:(w,R)=>{sr(w,R)},onSettings:()=>N(!0),onOnlineImport:()=>I(!0)}),h?(0,Y.jsx)("div",{className:"dshr-modal-mask",style:{background:"color-mix(in srgb, var(--dshr-bg) 76%, transparent)",backdropFilter:"blur(5px)"},children:(0,Y.jsxs)("div",{className:"dshr-loading",children:[(0,Y.jsx)("div",{className:"dshr-loading__ring"}),(0,Y.jsx)("span",{children:S})]})}):null,Ve&&!Be&&!Fe?(0,Y.jsx)(pc,{selection:Ve,translation:l,onTranslate:w=>{yt(w)},onAnnotate:an,onExplain:w=>Ke(w.text,w.context),onGoogle:xt,onCopy:Bt,onClose:()=>{f(null),k(null)},onRetry:()=>{yt(Ve)}}):null,(0,Y.jsx)(xc,{open:M,busy:T,onClose:()=>{T||I(!1)},onSubmit:w=>{ir(w)}}),O?(0,Y.jsx)(gc,{settings:v,onChange:E,onClose:()=>N(!1),onOpenAppearance:()=>{N(!1),m(!0)},onClearLibrary:()=>{vt()}}):null,L?(0,Y.jsx)(Lc,{open:L,settings:v,backgroundImageUrl:je,onChange:bn,onPickBackgroundImage:er,onClearBackgroundImage:()=>{Zr()},onClose:()=>m(!1)}):null,fe?(0,Y.jsx)(mc,{book:fe,onCancel:()=>V(null),onConfirm:()=>{Je()}}):null,Fe&&be?(0,Y.jsx)(Uc,{open:Fe,draft:be,mode:Ge?"edit":"create",onClose:sn,onSave:w=>{vn(w)},onDelete:Ge?()=>{Wo(Ge)}:void 0}):null,(0,Y.jsx)(bc,{message:ge})]})})}var xu=String.raw`
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
`;var vu=String.raw`
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
`;var Un=require("react/jsx-runtime"),gm="dsh-reader",mm=["slots","layout"],zi="reader";function bm({size:t=18}){return(0,Un.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,Un.jsx)("path",{d:"M4 5.4A2.4 2.4 0 0 1 6.4 3H20v16.1H6.4A2.4 2.4 0 0 0 4 21.5V5.4Z",stroke:"currentColor",strokeWidth:"1.65",strokeLinejoin:"round"}),(0,Un.jsx)("path",{d:"M4 18.4a2.4 2.4 0 0 1 2.4-2.3H20",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round"}),(0,Un.jsx)("path",{d:"M8.2 7h7.6M8.2 10.2h4.6",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round"}),(0,Un.jsx)("circle",{cx:"17.2",cy:"18.6",r:"2.1",fill:"currentColor",opacity:".9"})]})}function xm(t){t.effect(()=>{let e=document.createElement("style");return e.dataset.dshReader="styles",e.textContent=`${xu}
${cc}
${Us}
${vu}`,document.head.appendChild(e),()=>e.remove()},"dsh-reader: styles"),t.slots.inject("main",function*(){yield t.slots.register({name:"main",key:zi},bu)}),t.slots.inject("sidebar.panellist",()=>t.slots.register({name:"sidebar.panellist",id:zi,order:10,label:()=>"\u9605\u8BFB"},bm))}

return module.exports;
}});

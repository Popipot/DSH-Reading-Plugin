window.__ModuleLoader__.load({ id: "dsh-reader", factory: (require) => {
var module = { exports: {} }; var exports = module.exports;
var Tp=Object.create;var Xa=Object.defineProperty;var Ep=Object.getOwnPropertyDescriptor;var Np=Object.getOwnPropertyNames;var Ap=Object.getPrototypeOf,Cp=Object.prototype.hasOwnProperty;var vr=(t,e,r)=>()=>{if(r)throw r[0];try{return t&&(e=t(t=0)),e}catch(n){throw r=[n],n}};var hs=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}},lc=(t,e)=>{for(var r in e)Xa(t,r,{get:e[r],enumerable:!0})},cc=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Np(e))!Cp.call(t,o)&&o!==r&&Xa(t,o,{get:()=>e[o],enumerable:!(n=Ep(e,o))||n.enumerable});return t};var Lt=(t,e,r)=>(r=t!=null?Tp(Ap(t)):{},cc(e||!t||!t.__esModule?Xa(r,"default",{value:t,enumerable:!0}):r,t)),Ip=t=>cc(Xa({},"__esModule",{value:!0}),t);function Gg(t,e){return Wu(t,{i:2},e&&e.out,e&&e.dictionary)}function ju(t,e){return Wu(t.subarray(jg(t,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}function Vg(t,e){if(e){for(var r="",n=0;n<t.length;n+=16384)r+=String.fromCharCode.apply(null,t.subarray(n,n+16384));return r}else{if(pl)return pl.decode(t);var o=Xg(t),a=o.s,r=o.r;return r.length&&ar(8),a}}function Gu(t,e){for(var r={},n=t.length-22;Rr(t,n)!=101010256;--n)(!n||t.length-n>65558)&&ar(13);var o=cn(t,n+8);if(!o)return{};var a=Rr(t,n+16),i=Rr(t,n-20)==117853008;if(i){var s=Rr(t,n-12);i=Rr(t,s)==101075792,i&&(o=Rr(t,s+32),a=Rr(t,s+48))}for(var l=e&&e.filter,c=0;c<o;++c){var h=Yg(t,a,i),p=h[0],u=h[1],g=h[2],w=h[3],m=h[4],_=h[5],y=Kg(t,_);a=m,(!l||l({name:w,size:u,originalSize:g,compression:p}))&&(p?p==8?r[w]=Gg(t.subarray(y,y+u),{out:new wr(g)}):ar(14,"unknown compression type "+p):r[w]=fl(t,y,y+u))}return r}var wr,Fo,Lg,Du,Fu,Dg,zu,Bu,$u,Fg,Hu,zg,Xv,hl,An,lt,xa,va,lt,lt,lt,lt,Uu,lt,Bg,$g,cl,Xr,dl,Hg,fl,Ug,ar,Wu,Wg,cn,Rr,ul,jg,pl,qg,Xg,Kg,Yg,Zg,gl=vr(()=>{wr=Uint8Array,Fo=Uint16Array,Lg=Int32Array,Du=new wr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Fu=new wr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Dg=new wr([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),zu=function(t,e){for(var r=new Fo(31),n=0;n<31;++n)r[n]=e+=1<<t[n-1];for(var o=new Lg(r[30]),n=1;n<30;++n)for(var a=r[n];a<r[n+1];++a)o[a]=a-r[n]<<5|n;return{b:r,r:o}},Bu=zu(Du,2),$u=Bu.b,Fg=Bu.r;$u[28]=258,Fg[258]=28;Hu=zu(Fu,0),zg=Hu.b,Xv=Hu.r,hl=new Fo(32768);for(lt=0;lt<32768;++lt)An=(lt&43690)>>1|(lt&21845)<<1,An=(An&52428)>>2|(An&13107)<<2,An=(An&61680)>>4|(An&3855)<<4,hl[lt]=((An&65280)>>8|(An&255)<<8)>>1;xa=(function(t,e,r){for(var n=t.length,o=0,a=new Fo(e);o<n;++o)t[o]&&++a[t[o]-1];var i=new Fo(e);for(o=1;o<e;++o)i[o]=i[o-1]+a[o-1]<<1;var s;if(r){s=new Fo(1<<e);var l=15-e;for(o=0;o<n;++o)if(t[o])for(var c=o<<4|t[o],h=e-t[o],p=i[t[o]-1]++<<h,u=p|(1<<h)-1;p<=u;++p)s[hl[p]>>l]=c}else for(s=new Fo(n),o=0;o<n;++o)t[o]&&(s[o]=hl[i[t[o]-1]++]>>15-t[o]);return s}),va=new wr(288);for(lt=0;lt<144;++lt)va[lt]=8;for(lt=144;lt<256;++lt)va[lt]=9;for(lt=256;lt<280;++lt)va[lt]=7;for(lt=280;lt<288;++lt)va[lt]=8;Uu=new wr(32);for(lt=0;lt<32;++lt)Uu[lt]=5;Bg=xa(va,9,1),$g=xa(Uu,5,1),cl=function(t){for(var e=t[0],r=1;r<t.length;++r)t[r]>e&&(e=t[r]);return e},Xr=function(t,e,r){var n=e/8|0;return(t[n]|t[n+1]<<8)>>(e&7)&r},dl=function(t,e){var r=e/8|0;return(t[r]|t[r+1]<<8|t[r+2]<<16)>>(e&7)},Hg=function(t){return(t+7)/8|0},fl=function(t,e,r){return(e==null||e<0)&&(e=0),(r==null||r>t.length)&&(r=t.length),new wr(t.subarray(e,r))},Ug=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ar=function(t,e,r){var n=new Error(e||Ug[t]);if(n.code=t,Error.captureStackTrace&&Error.captureStackTrace(n,ar),!r)throw n;return n},Wu=function(t,e,r,n){var o=t.length,a=n?n.length:0;if(!o||e.f&&!e.l)return r||new wr(0);var i=!r,s=i||e.i!=2,l=e.i;i&&(r=new wr(o*3));var c=function(Te){var f=r.length;if(Te>f){var d=new wr(Math.max(f*2,Te));d.set(r),r=d}},h=e.f||0,p=e.p||0,u=e.b||0,g=e.l,w=e.d,m=e.m,_=e.n,y=o*8;do{if(!g){h=Xr(t,p,1);var k=Xr(t,p+1,3);if(p+=3,k)if(k==1)g=Bg,w=$g,m=9,_=5;else if(k==2){var T=Xr(t,p,31)+257,M=Xr(t,p+10,15)+4,R=T+Xr(t,p+5,31)+1;p+=14;for(var v=new wr(R),O=new wr(19),L=0;L<M;++L)O[Dg[L]]=Xr(t,p+L*3,7);p+=M*3;for(var F=cl(O),U=(1<<F)-1,J=xa(O,F,1),L=0;L<R;){var Y=J[Xr(t,p,U)];p+=Y&15;var N=Y>>4;if(N<16)v[L++]=N;else{var ae=0,fe=0;for(N==16?(fe=3+Xr(t,p,3),p+=2,ae=v[L-1]):N==17?(fe=3+Xr(t,p,7),p+=3):N==18&&(fe=11+Xr(t,p,127),p+=7);fe--;)v[L++]=ae}}var q=v.subarray(0,T),se=v.subarray(T);m=cl(q),_=cl(se),g=xa(q,m,1),w=xa(se,_,1)}else ar(1);else{var N=Hg(p)+4,A=t[N-4]|t[N-3]<<8,E=N+A;if(E>o){l&&ar(0);break}s&&c(u+A),r.set(t.subarray(N,E),u),e.b=u+=A,e.p=p=E*8,e.f=h;continue}if(p>y){l&&ar(0);break}}s&&c(u+131072);for(var de=(1<<m)-1,P=(1<<_)-1,$=p;;$=p){var ae=g[dl(t,p)&de],B=ae>>4;if(p+=ae&15,p>y){l&&ar(0);break}if(ae||ar(2),B<256)r[u++]=B;else if(B==256){$=p,g=null;break}else{var ie=B-254;if(B>264){var L=B-257,ee=Du[L];ie=Xr(t,p,(1<<ee)-1)+$u[L],p+=ee}var Ie=w[dl(t,p)&P],Xe=Ie>>4;Ie||ar(3),p+=Ie&15;var se=zg[Xe];if(Xe>3){var ee=Fu[Xe];se+=dl(t,p)&(1<<ee)-1,p+=ee}if(p>y){l&&ar(0);break}s&&c(u+131072);var Re=u+ie;if(u<se){var Fe=a-se,Pe=Math.min(se,Re);for(Fe+u<0&&ar(3);u<Pe;++u)r[u]=n[Fe+u]}for(;u<Re;++u)r[u]=r[u-se]}}e.l=g,e.p=$,e.b=u,e.f=h,g&&(h=1,e.m=m,e.d=w,e.n=_)}while(!h);return u!=r.length&&i?fl(r,0,u):r.subarray(0,u)},Wg=new wr(0),cn=function(t,e){return t[e]|t[e+1]<<8},Rr=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},ul=function(t,e){return Rr(t,e)+Rr(t,e+4)*4294967296},jg=function(t,e){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&ar(6,"invalid zlib data"),(t[1]>>5&1)==+!e&&ar(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};pl=typeof TextDecoder<"u"&&new TextDecoder,qg=0;try{pl.decode(Wg,{stream:!0}),qg=1}catch{}Xg=function(t){for(var e="",r=0;;){var n=t[r++],o=(n>127)+(n>223)+(n>239);if(r+o>t.length)return{s:e,r:fl(t,r-1)};o?o==3?(n=((n&15)<<18|(t[r++]&63)<<12|(t[r++]&63)<<6|t[r++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):o&1?e+=String.fromCharCode((n&31)<<6|t[r++]&63):e+=String.fromCharCode((n&15)<<12|(t[r++]&63)<<6|t[r++]&63):e+=String.fromCharCode(n)}};Kg=function(t,e){return e+30+cn(t,e+26)+cn(t,e+28)},Yg=function(t,e,r){var n=cn(t,e+28),o=cn(t,e+30),a=Vg(t.subarray(e+46,e+46+n),!(cn(t,e+8)&2048)),i=e+46+n,s=Zg(t,i,o,r,Rr(t,e+20),Rr(t,e+24),Rr(t,e+42)),l=s[0],c=s[1],h=s[2];return[cn(t,e+10),l,c,a,i+o+cn(t,e+32),h]},Zg=function(t,e,r,n,o,a,i){var s=o==4294967295,l=a==4294967295,c=i==4294967295,h=e+r,p=s+l+c;if(n&&p){for(;e+4<h;e+=4+cn(t,e+2))if(cn(t,e)==1)return[s?ul(t,e+4+8*l):o,l?ul(t,e+4):a,c?ul(t,e+4+8*(l+s)):i,1];n<2&&ar(13)}return[o,a,i,0]}});function lr(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return _l(t,e,n)}}function am(t){return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return Sl(t,r)}}function qe(t,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Hi;qu&&qu(t,null);let n=e.length;for(;n--;){let o=e[n];if(typeof o=="string"){let a=r(o);a!==o&&(Qg(e)||(e[n]=a),o=a)}t[o]=!0}return t}function im(t){for(let e=0;e<t.length;e++)Vr(t,e)||(t[e]=null);return t}function dn(t){let e=kl(null);for(let[r,n]of eh(t))Vr(t,r)&&(Array.isArray(n)?e[r]=im(n):n&&typeof n=="object"&&n.constructor===Object?e[r]=dn(n):e[r]=n);return e}function _a(t,e){for(;t!==null;){let n=em(t,e);if(n){if(n.get)return lr(n.get);if(typeof n.value=="function")return lr(n.value)}t=Jg(t)}function r(){return null}return r}function nh(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:bm(),e=xe=>nh(xe);if(e.version="3.3.1",e.removed=[],!t||!t.document||t.document.nodeType!==Sa.document||!t.Element)return e.isSupported=!1,e;let{document:r}=t,n=r,o=n.currentScript,{DocumentFragment:a,HTMLTemplateElement:i,Node:s,Element:l,NodeFilter:c,NamedNodeMap:h=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:p,DOMParser:u,trustedTypes:g}=t,w=l.prototype,m=_a(w,"cloneNode"),_=_a(w,"remove"),y=_a(w,"nextSibling"),k=_a(w,"childNodes"),N=_a(w,"parentNode");if(typeof i=="function"){let xe=r.createElement("template");xe.content&&xe.content.ownerDocument&&(r=xe.content.ownerDocument)}let A,E="",{implementation:T,createNodeIterator:M,createDocumentFragment:R,getElementsByTagName:v}=r,{importNode:O}=n,L=Ju();e.isSupported=typeof eh=="function"&&typeof N=="function"&&T&&T.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:F,ERB_EXPR:U,TMPLIT_EXPR:J,DATA_ATTR:Y,ARIA_ATTR:ae,IS_SCRIPT_OR_DATA:fe,ATTR_WHITESPACE:q,CUSTOM_ELEMENT:se}=Qu,{IS_ALLOWED_URI:de}=Qu,P=null,$=qe({},[...Vu,...xl,...vl,...yl,...Ku]),B=null,ie=qe({},[...Yu,...wl,...Zu,...$i]),ee=Object.seal(kl(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ie=null,Xe=null,Re=Object.seal(kl(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),Fe=!0,Pe=!0,Te=!1,f=!0,d=!1,S=!0,b=!1,re=!1,ne=!1,ue=!1,ge=!1,ke=!1,$e=!0,Ee=!1,dt="user-content-",tt=!0,rt=!1,Ve={},je=null,he=qe({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),xt=null,vt=qe({},["audio","video","img","source","image","track"]),yt=null,Rt=qe({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Mt="http://www.w3.org/1998/Math/MathML",Ge="http://www.w3.org/2000/svg",Xt="http://www.w3.org/1999/xhtml",Yt=Xt,hr=!1,le=null,ye=qe({},[Mt,Ge,Xt],ml),we=qe({},["mi","mo","mn","ms","mtext"]),Qe=qe({},["annotation-xml"]),nt=qe({},["title","style","font","a","script"]),_r=null,Bt=["application/xhtml+xml","text/html"],Yr="text/html",He=null,Pt=null,$t=r.createElement("form"),Sr=function(I){return I instanceof RegExp||I instanceof Function},ze=function(){let I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Pt&&Pt===I)){if((!I||typeof I!="object")&&(I={}),I=dn(I),_r=Bt.indexOf(I.PARSER_MEDIA_TYPE)===-1?Yr:I.PARSER_MEDIA_TYPE,He=_r==="application/xhtml+xml"?ml:Hi,P=Vr(I,"ALLOWED_TAGS")?qe({},I.ALLOWED_TAGS,He):$,B=Vr(I,"ALLOWED_ATTR")?qe({},I.ALLOWED_ATTR,He):ie,le=Vr(I,"ALLOWED_NAMESPACES")?qe({},I.ALLOWED_NAMESPACES,ml):ye,yt=Vr(I,"ADD_URI_SAFE_ATTR")?qe(dn(Rt),I.ADD_URI_SAFE_ATTR,He):Rt,xt=Vr(I,"ADD_DATA_URI_TAGS")?qe(dn(vt),I.ADD_DATA_URI_TAGS,He):vt,je=Vr(I,"FORBID_CONTENTS")?qe({},I.FORBID_CONTENTS,He):he,Ie=Vr(I,"FORBID_TAGS")?qe({},I.FORBID_TAGS,He):dn({}),Xe=Vr(I,"FORBID_ATTR")?qe({},I.FORBID_ATTR,He):dn({}),Ve=Vr(I,"USE_PROFILES")?I.USE_PROFILES:!1,Fe=I.ALLOW_ARIA_ATTR!==!1,Pe=I.ALLOW_DATA_ATTR!==!1,Te=I.ALLOW_UNKNOWN_PROTOCOLS||!1,f=I.ALLOW_SELF_CLOSE_IN_ATTR!==!1,d=I.SAFE_FOR_TEMPLATES||!1,S=I.SAFE_FOR_XML!==!1,b=I.WHOLE_DOCUMENT||!1,ue=I.RETURN_DOM||!1,ge=I.RETURN_DOM_FRAGMENT||!1,ke=I.RETURN_TRUSTED_TYPE||!1,ne=I.FORCE_BODY||!1,$e=I.SANITIZE_DOM!==!1,Ee=I.SANITIZE_NAMED_PROPS||!1,tt=I.KEEP_CONTENT!==!1,rt=I.IN_PLACE||!1,de=I.ALLOWED_URI_REGEXP||th,Yt=I.NAMESPACE||Xt,we=I.MATHML_TEXT_INTEGRATION_POINTS||we,Qe=I.HTML_INTEGRATION_POINTS||Qe,ee=I.CUSTOM_ELEMENT_HANDLING||{},I.CUSTOM_ELEMENT_HANDLING&&Sr(I.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(ee.tagNameCheck=I.CUSTOM_ELEMENT_HANDLING.tagNameCheck),I.CUSTOM_ELEMENT_HANDLING&&Sr(I.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(ee.attributeNameCheck=I.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),I.CUSTOM_ELEMENT_HANDLING&&typeof I.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(ee.allowCustomizedBuiltInElements=I.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),d&&(Pe=!1),ge&&(ue=!0),Ve&&(P=qe({},Ku),B=[],Ve.html===!0&&(qe(P,Vu),qe(B,Yu)),Ve.svg===!0&&(qe(P,xl),qe(B,wl),qe(B,$i)),Ve.svgFilters===!0&&(qe(P,vl),qe(B,wl),qe(B,$i)),Ve.mathMl===!0&&(qe(P,yl),qe(B,Zu),qe(B,$i))),I.ADD_TAGS&&(typeof I.ADD_TAGS=="function"?Re.tagCheck=I.ADD_TAGS:(P===$&&(P=dn(P)),qe(P,I.ADD_TAGS,He))),I.ADD_ATTR&&(typeof I.ADD_ATTR=="function"?Re.attributeCheck=I.ADD_ATTR:(B===ie&&(B=dn(B)),qe(B,I.ADD_ATTR,He))),I.ADD_URI_SAFE_ATTR&&qe(yt,I.ADD_URI_SAFE_ATTR,He),I.FORBID_CONTENTS&&(je===he&&(je=dn(je)),qe(je,I.FORBID_CONTENTS,He)),I.ADD_FORBID_CONTENTS&&(je===he&&(je=dn(je)),qe(je,I.ADD_FORBID_CONTENTS,He)),tt&&(P["#text"]=!0),b&&qe(P,["html","head","body"]),P.table&&(qe(P,["tbody"]),delete Ie.tbody),I.TRUSTED_TYPES_POLICY){if(typeof I.TRUSTED_TYPES_POLICY.createHTML!="function")throw ka('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof I.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ka('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');A=I.TRUSTED_TYPES_POLICY,E=A.createHTML("")}else A===void 0&&(A=xm(g,o)),A!==null&&typeof E=="string"&&(E=A.createHTML(""));sr&&sr(I),Pt=I}},bn=qe({},[...xl,...vl,...sm]),xn=qe({},[...yl,...lm]),Zr=function(I){let te=N(I);(!te||!te.tagName)&&(te={namespaceURI:Yt,tagName:"template"});let me=Hi(I.tagName),at=Hi(te.tagName);return le[I.namespaceURI]?I.namespaceURI===Ge?te.namespaceURI===Xt?me==="svg":te.namespaceURI===Mt?me==="svg"&&(at==="annotation-xml"||we[at]):!!bn[me]:I.namespaceURI===Mt?te.namespaceURI===Xt?me==="math":te.namespaceURI===Ge?me==="math"&&Qe[at]:!!xn[me]:I.namespaceURI===Xt?te.namespaceURI===Ge&&!Qe[at]||te.namespaceURI===Mt&&!we[at]?!1:!xn[me]&&(nt[me]||!bn[me]):!!(_r==="application/xhtml+xml"&&le[I.namespaceURI]):!1},Ot=function(I){ya(e.removed,{element:I});try{N(I).removeChild(I)}catch{_(I)}},mr=function(I,te){try{ya(e.removed,{attribute:te.getAttributeNode(I),from:te})}catch{ya(e.removed,{attribute:null,from:te})}if(te.removeAttribute(I),I==="is")if(ue||ge)try{Ot(te)}catch{}else try{te.setAttribute(I,"")}catch{}},vn=function(I){let te=null,me=null;if(ne)I="<remove></remove>"+I;else{let it=bl(I,/^[\r\n\t ]+/);me=it&&it[0]}_r==="application/xhtml+xml"&&Yt===Xt&&(I='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+I+"</body></html>");let at=A?A.createHTML(I):I;if(Yt===Xt)try{te=new u().parseFromString(at,_r)}catch{}if(!te||!te.documentElement){te=T.createDocument(Yt,"template",null);try{te.documentElement.innerHTML=hr?E:at}catch{}}let ut=te.body||te.documentElement;return I&&me&&ut.insertBefore(r.createTextNode(me),ut.childNodes[0]||null),Yt===Xt?v.call(te,b?"html":"body")[0]:b?te.documentElement:ut},Qr=function(I){return M.call(I.ownerDocument||I,I,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},Ct=function(I){return I instanceof p&&(typeof I.nodeName!="string"||typeof I.textContent!="string"||typeof I.removeChild!="function"||!(I.attributes instanceof h)||typeof I.removeAttribute!="function"||typeof I.setAttribute!="function"||typeof I.namespaceURI!="string"||typeof I.insertBefore!="function"||typeof I.hasChildNodes!="function")},Wn=function(I){return typeof s=="function"&&I instanceof s};function It(xe,I,te){Bi(xe,me=>{me.call(e,I,te,Pt)})}let pr=function(I){let te=null;if(It(L.beforeSanitizeElements,I,null),Ct(I))return Ot(I),!0;let me=He(I.nodeName);if(It(L.uponSanitizeElement,I,{tagName:me,allowedTags:P}),S&&I.hasChildNodes()&&!Wn(I.firstElementChild)&&ir(/<[/\w!]/g,I.innerHTML)&&ir(/<[/\w!]/g,I.textContent)||I.nodeType===Sa.progressingInstruction||S&&I.nodeType===Sa.comment&&ir(/<[/\w]/g,I.data))return Ot(I),!0;if(!(Re.tagCheck instanceof Function&&Re.tagCheck(me))&&(!P[me]||Ie[me])){if(!Ie[me]&&xo(me)&&(ee.tagNameCheck instanceof RegExp&&ir(ee.tagNameCheck,me)||ee.tagNameCheck instanceof Function&&ee.tagNameCheck(me)))return!1;if(tt&&!je[me]){let at=N(I)||I.parentNode,ut=k(I)||I.childNodes;if(ut&&at){let it=ut.length;for(let wt=it-1;wt>=0;--wt){let Ut=m(ut[wt],!0);Ut.__removalCount=(I.__removalCount||0)+1,at.insertBefore(Ut,y(I))}}}return Ot(I),!0}return I instanceof l&&!Zr(I)||(me==="noscript"||me==="noembed"||me==="noframes")&&ir(/<\/no(script|embed|frames)/i,I.innerHTML)?(Ot(I),!0):(d&&I.nodeType===Sa.text&&(te=I.textContent,Bi([F,U,J],at=>{te=wa(te,at," ")}),I.textContent!==te&&(ya(e.removed,{element:I.cloneNode()}),I.textContent=te)),It(L.afterSanitizeElements,I,null),!1)},zr=function(I,te,me){if($e&&(te==="id"||te==="name")&&(me in r||me in $t))return!1;if(!(Pe&&!Xe[te]&&ir(Y,te))){if(!(Fe&&ir(ae,te))){if(!(Re.attributeCheck instanceof Function&&Re.attributeCheck(te,I))){if(!B[te]||Xe[te]){if(!(xo(I)&&(ee.tagNameCheck instanceof RegExp&&ir(ee.tagNameCheck,I)||ee.tagNameCheck instanceof Function&&ee.tagNameCheck(I))&&(ee.attributeNameCheck instanceof RegExp&&ir(ee.attributeNameCheck,te)||ee.attributeNameCheck instanceof Function&&ee.attributeNameCheck(te,I))||te==="is"&&ee.allowCustomizedBuiltInElements&&(ee.tagNameCheck instanceof RegExp&&ir(ee.tagNameCheck,me)||ee.tagNameCheck instanceof Function&&ee.tagNameCheck(me))))return!1}else if(!yt[te]){if(!ir(de,wa(me,q,""))){if(!((te==="src"||te==="xlink:href"||te==="href")&&I!=="script"&&nm(me,"data:")===0&&xt[I])){if(!(Te&&!ir(fe,wa(me,q,"")))){if(me)return!1}}}}}}}return!0},xo=function(I){return I!=="annotation-xml"&&bl(I,se)},vo=function(I){It(L.beforeSanitizeAttributes,I,null);let{attributes:te}=I;if(!te||Ct(I))return;let me={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:B,forceKeepAttr:void 0},at=te.length;for(;at--;){let ut=te[at],{name:it,namespaceURI:wt,value:Ut}=ut,Qt=He(it),At=Ut,ht=it==="value"?At:om(At);if(me.attrName=Qt,me.attrValue=ht,me.keepAttr=!0,me.forceKeepAttr=void 0,It(L.uponSanitizeAttribute,I,me),ht=me.attrValue,Ee&&(Qt==="id"||Qt==="name")&&(mr(it,I),ht=dt+ht),S&&ir(/((--!?|])>)|<\/(style|title|textarea)/i,ht)){mr(it,I);continue}if(Qt==="attributename"&&bl(ht,"href")){mr(it,I);continue}if(me.forceKeepAttr)continue;if(!me.keepAttr){mr(it,I);continue}if(!f&&ir(/\/>/i,ht)){mr(it,I);continue}d&&Bi([F,U,J],wo=>{ht=wa(ht,wo," ")});let jn=He(I.nodeName);if(!zr(jn,Qt,ht)){mr(it,I);continue}if(A&&typeof g=="object"&&typeof g.getAttributeType=="function"&&!wt)switch(g.getAttributeType(jn,Qt)){case"TrustedHTML":{ht=A.createHTML(ht);break}case"TrustedScriptURL":{ht=A.createScriptURL(ht);break}}if(ht!==At)try{wt?I.setAttributeNS(wt,it,ht):I.setAttribute(it,ht),Ct(I)?Ot(I):Xu(e.removed)}catch{mr(it,I)}}It(L.afterSanitizeAttributes,I,null)},yo=function xe(I){let te=null,me=Qr(I);for(It(L.beforeSanitizeShadowDOM,I,null);te=me.nextNode();)It(L.uponSanitizeShadowNode,te,null),pr(te),vo(te),te.content instanceof a&&xe(te.content);It(L.afterSanitizeShadowDOM,I,null)};return e.sanitize=function(xe){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},te=null,me=null,at=null,ut=null;if(hr=!xe,hr&&(xe="<!-->"),typeof xe!="string"&&!Wn(xe))if(typeof xe.toString=="function"){if(xe=xe.toString(),typeof xe!="string")throw ka("dirty is not a string, aborting")}else throw ka("toString is not a function");if(!e.isSupported)return xe;if(re||ze(I),e.removed=[],typeof xe=="string"&&(rt=!1),rt){if(xe.nodeName){let Ut=He(xe.nodeName);if(!P[Ut]||Ie[Ut])throw ka("root node is forbidden and cannot be sanitized in-place")}}else if(xe instanceof s)te=vn("<!---->"),me=te.ownerDocument.importNode(xe,!0),me.nodeType===Sa.element&&me.nodeName==="BODY"||me.nodeName==="HTML"?te=me:te.appendChild(me);else{if(!ue&&!d&&!b&&xe.indexOf("<")===-1)return A&&ke?A.createHTML(xe):xe;if(te=vn(xe),!te)return ue?null:ke?E:""}te&&ne&&Ot(te.firstChild);let it=Qr(rt?xe:te);for(;at=it.nextNode();)pr(at),vo(at),at.content instanceof a&&yo(at.content);if(rt)return xe;if(ue){if(ge)for(ut=R.call(te.ownerDocument);te.firstChild;)ut.appendChild(te.firstChild);else ut=te;return(B.shadowroot||B.shadowrootmode)&&(ut=O.call(n,ut,!0)),ut}let wt=b?te.outerHTML:te.innerHTML;return b&&P["!doctype"]&&te.ownerDocument&&te.ownerDocument.doctype&&te.ownerDocument.doctype.name&&ir(rh,te.ownerDocument.doctype.name)&&(wt="<!DOCTYPE "+te.ownerDocument.doctype.name+`>
`+wt),d&&Bi([F,U,J],Ut=>{wt=wa(wt,Ut," ")}),A&&ke?A.createHTML(wt):wt},e.setConfig=function(){let xe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ze(xe),re=!0},e.clearConfig=function(){Pt=null,re=!1},e.isValidAttribute=function(xe,I,te){Pt||ze({});let me=He(xe),at=He(I);return zr(me,at,te)},e.addHook=function(xe,I){typeof I=="function"&&ya(L[xe],I)},e.removeHook=function(xe,I){if(I!==void 0){let te=tm(L[xe],I);return te===-1?void 0:rm(L[xe],te,1)[0]}return Xu(L[xe])},e.removeHooks=function(xe){L[xe]=[]},e.removeAllHooks=function(){L=Ju()},e}var eh,qu,Qg,Jg,em,sr,Mr,kl,_l,Sl,Bi,tm,Xu,ya,rm,Hi,ml,bl,wa,nm,om,Vr,ir,ka,Vu,xl,vl,sm,yl,lm,Ku,Yu,wl,Zu,$i,cm,dm,um,hm,pm,th,fm,gm,rh,mm,Qu,Sa,bm,xm,Ju,Ta,oh=vr(()=>{({entries:eh,setPrototypeOf:qu,isFrozen:Qg,getPrototypeOf:Jg,getOwnPropertyDescriptor:em}=Object),{freeze:sr,seal:Mr,create:kl}=Object,{apply:_l,construct:Sl}=typeof Reflect<"u"&&Reflect;sr||(sr=function(e){return e});Mr||(Mr=function(e){return e});_l||(_l=function(e,r){for(var n=arguments.length,o=new Array(n>2?n-2:0),a=2;a<n;a++)o[a-2]=arguments[a];return e.apply(r,o)});Sl||(Sl=function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return new e(...n)});Bi=lr(Array.prototype.forEach),tm=lr(Array.prototype.lastIndexOf),Xu=lr(Array.prototype.pop),ya=lr(Array.prototype.push),rm=lr(Array.prototype.splice),Hi=lr(String.prototype.toLowerCase),ml=lr(String.prototype.toString),bl=lr(String.prototype.match),wa=lr(String.prototype.replace),nm=lr(String.prototype.indexOf),om=lr(String.prototype.trim),Vr=lr(Object.prototype.hasOwnProperty),ir=lr(RegExp.prototype.test),ka=am(TypeError);Vu=sr(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),xl=sr(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),vl=sr(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),sm=sr(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),yl=sr(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),lm=sr(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ku=sr(["#text"]),Yu=sr(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),wl=sr(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Zu=sr(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),$i=sr(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),cm=Mr(/\{\{[\w\W]*|[\w\W]*\}\}/gm),dm=Mr(/<%[\w\W]*|[\w\W]*%>/gm),um=Mr(/\$\{[\w\W]*/gm),hm=Mr(/^data-[\-\w.\u00B7-\uFFFF]+$/),pm=Mr(/^aria-[\-\w]+$/),th=Mr(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),fm=Mr(/^(?:\w+script|data):/i),gm=Mr(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),rh=Mr(/^html$/i),mm=Mr(/^[a-z][.\w]*(-[.\w]+)+$/i),Qu=Object.freeze({__proto__:null,ARIA_ATTR:pm,ATTR_WHITESPACE:gm,CUSTOM_ELEMENT:mm,DATA_ATTR:hm,DOCTYPE_NAME:rh,ERB_EXPR:dm,IS_ALLOWED_URI:th,IS_SCRIPT_OR_DATA:fm,MUSTACHE_EXPR:cm,TMPLIT_EXPR:um}),Sa={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},bm=function(){return typeof window>"u"?null:window},xm=function(e,r){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null,o="data-tt-policy-suffix";r&&r.hasAttribute(o)&&(n=r.getAttribute(o));let a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML(i){return i},createScriptURL(i){return i}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},Ju=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};Ta=nh()});function sh(){if(so)return so;if(typeof Ta?.sanitize=="function"&&Ta.isSupported)so=Ta;else{let t=typeof window<"u"?window:globalThis.window;if(!t)throw new Error("\u65E0\u6CD5\u6E05\u7406 HTML\uFF1A\u5F53\u524D\u73AF\u5883\u7F3A\u5C11\u6D4F\u89C8\u5668 window\u3002");so=Ta(t)}if(!so||typeof so.sanitize!="function")throw new Error("\u65E0\u6CD5\u6E05\u7406 HTML\uFF1A\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 DOMPurify\u3002");return so}function Ui(t){if(!t)return"";try{return sh().sanitize(String(t),ih)}catch{return""}}function Tl(t){if(!t)return"";try{return sh().sanitize(String(t),ym)}catch{return""}}function lo(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function mt(t){return String(t??"").replace(/\u00a0/g," ").replace(/[\t\f\v\u2000-\u200b\u2028\u2029]+/g," ").replace(/[ ]*\n[ ]*/g," ").replace(/ {2,}/g," ").trim()}function Ea(t="div"){return document.createElement(t)}function un(t){try{return new DOMParser().parseFromString(String(t??""),"text/html")}catch{return null}}function zo(t){try{let e=new DOMParser().parseFromString(String(t??""),"application/xml");return!e||!e.documentElement||e.documentElement.localName?.toLowerCase()==="parsererror"||cr(e,"parsererror")?null:e}catch{return null}}function kr(t){return String(t?.localName||t?.nodeName||"").toLowerCase()}function Ht(t,e){let r=[];if(!t)return r;let n=String(e).toLowerCase(),o=a=>{for(let i=a.firstChild;i;i=i.nextSibling)i.nodeType===1&&(kr(i)===n&&r.push(i),o(i))};return o(t),r}function cr(t,e){if(!t)return null;let r=String(e).toLowerCase(),n=null,o=a=>{for(let i=a.firstChild;i&&!n;i=i.nextSibling)if(i.nodeType===1){if(kr(i)===r){n=i;return}o(i)}};return o(t),n}function ct(t,e){if(!t||!e)return null;let r=t.getAttribute?.(e);if(r!=null)return r;let n=String(e).toLowerCase(),o=t.attributes;if(!o)return null;for(let a=0;a<o.length;a+=1){let i=o[a];if(!i)continue;if(String(i.name||"").toLowerCase()===n||!n.includes(":")&&String(i.localName||"").toLowerCase()===n)return i.value}return null}var ah,vm,ih,ym,so,co=vr(()=>{oh();ah=Object.freeze(["b","strong","i","em","u","s","sub","sup","code","span","a","br","ruby","rt","rp","small","mark"]),vm=Object.freeze(["table","caption","thead","tbody","tfoot","tr","th","td","colgroup","col"]),ih=Object.freeze({ALLOWED_TAGS:[...ah],ALLOWED_ATTR:["href"],ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!1,KEEP_CONTENT:!0,FORBID_TAGS:["script","style","iframe","frame","frameset","object","embed","applet","form","input","button","select","textarea","meta","link","base","svg","math","template","noscript"],FORBID_ATTR:["style","src","srcset","formaction","xlink:href","onerror","onload","onclick"]}),ym=Object.freeze({...ih,ALLOWED_TAGS:[...ah,...vm]}),so=null});function ho(t){return t.nextId()}function Sm(t){if(!t||t.nodeType!==1)return!1;if(t.hasAttribute?.("hidden")||ct(t,"aria-hidden")==="true")return!0;let e=ct(t,"style")||"";return/display\s*:\s*none|visibility\s*:\s*hidden/i.test(e)}function Tm(t,e){typeof t?.warn=="function"&&t.warn(e)}function Nl(t){for(let e of Array.from(t?.children||[])){let r=kr(e);if(lh.has(r)&&r!=="span"&&r!=="a"||Nl(e))return!0}return!1}function ch(t){let e=Array.from(t.querySelectorAll(_m));for(let r=e.length-1;r>=0;r-=1){let n=e[r];if(!n.parentNode)continue;let o=t.ownerDocument.createDocumentFragment();for(;n.firstChild;)o.appendChild(n.firstChild);o.appendChild(t.ownerDocument.createElement("br")),n.parentNode.replaceChild(o,n)}return t}function dh(t){for(let e of Ht(t,"img"))e.remove();for(let e of Ht(t,"image"))e.remove()}function uo(t){let e=[],r=n=>{for(let o of Array.from(n?.children||[])){let a=kr(o);a==="img"||a==="image"?e.push(o):a==="svg"?e.push(...Ht(o,"image")):a!=="script"&&a!=="style"&&r(o)}};return r(t),e}function Al(t,e){if(!t||typeof e?.resolveLink!="function")return;let r=Array.from(t.getElementsByTagName?.("a")||[]);for(let n of r){let o=n.getAttribute("href");if(n.removeAttribute("href"),n.removeAttribute("data-chapter"),n.removeAttribute("data-anchor"),!o)continue;let a=null;try{a=e.resolveLink(o)}catch{a=null}if(a){if(a.external){a.href&&n.setAttribute("href",a.href);continue}Number.isInteger(a.chapter)&&a.chapter>=0&&(n.setAttribute("data-chapter",String(a.chapter)),a.anchor&&n.setAttribute("data-anchor",String(a.anchor).slice(0,300)))}}}function uh(t,e){let r=Ui(t.innerHTML);if(!r)return null;let n=Ea("div");n.innerHTML=r,Al(n,e);let o=n.innerHTML.replace(/^(?:\s*<br\s*\/?>\s*)+/i,"").replace(/(?:\s*<br\s*\/?>\s*)+$/i,"");if(!o)return null;let a=mt(n.textContent);return a?{html:o,text:a}:null}function Gi(t,e,r,n={}){let o=Ui(r);if(!o)return null;let a=Ea("div");a.innerHTML=o,Al(a,t);let i=a.innerHTML,s=mt(a.textContent);return s?{id:ho(t),kind:e,html:i,text:s,...n}:null}function Cl(t,e){let r=String(e??"").replace(/\r\n?/g,`
`).replace(/\u00a0/g," ").replace(/^\n+|\n+$/g,"");return r.trim()?{id:ho(t),kind:"code",html:lo(r),text:r}:null}function Il(t,e,r={}){let n=Tl(e);if(!n)return null;let o=Ea("div");if(o.innerHTML=n,!o.querySelector("table"))return null;Al(o,t);let i=o.innerHTML,s=mt(o.textContent);return s?{id:ho(t),kind:"table",html:i,text:s,...r}:null}function Rl(t,{src:e,alt:r="",caption:n=""}={}){if(!e)return null;let o={id:ho(t),kind:"image",src:e},a=mt(r),i=mt(n);return a&&(o.alt=a),i&&(o.caption=i),o}function Ml(t){return{id:ho(t),kind:"rule"}}function po(t,e){let r=[];return t&&Wi(t,e,r),r}function Wi(t,e,r){let n=[],o=()=>{if(n.length===0)return;let a=Ea("div");for(let s of n)a.appendChild(s.cloneNode(!0));let i=mt(a.textContent)!==""||uo(a).length>0;n=[],i&&Bn("paragraph",a,e,r)};for(let a of Array.from(t.childNodes||[])){if(a.nodeType===3){String(a.textContent||"").trim()&&n.push(a);continue}if(a.nodeType!==1||Sm(a))continue;let i=kr(a);wm.has(i)||(lh.has(i)?(o(),Em(a,i,e,r)):n.push(a))}o()}function Em(t,e,r,n){if(El.has(e)){Bn("heading",t,r,n,{level:Number(e.slice(1)),stripImages:!0,flatten:!1});return}switch(e){case"p":Bn("paragraph",t,r,n);return;case"li":case"dt":Bn("list-item",t,r,n,{flatten:!0});return;case"dd":Bn("paragraph",t,r,n,{flatten:!0});return;case"blockquote":Bn("quote",t,r,n,{flatten:!0});return;case"pre":Am(t,r,n);return;case"table":Cm(t,r,n);return;case"hr":n.push(Ml(r));return;case"figure":{Nm(t,r,n);return}case"img":case"image":ji(t,r,n,"");return;case"picture":case"svg":{for(let o of uo(t))ji(o,r,n,"");return}case"ul":case"ol":{for(let o of Array.from(t.children||[]))kr(o)==="li"?Bn("list-item",o,r,n,{flatten:!0}):Wi(o,r,n);return}case"dl":{Wi(t,r,n);return}case"figcaption":return;default:km.has(e)||Nl(t)?Wi(t,r,n):Bn("paragraph",t,r,n)}}function Bn(t,e,r,n,o={}){let a=e.cloneNode(!0),i=uo(a);if(i.length>0)for(let l of i)l.remove();o.stripImages&&dh(a),o.flatten!==!1&&ch(a);let s=uh(a,r);if(s){let l={id:ho(r),kind:t,html:s.html,text:s.text};o.level&&(l.level=o.level),n.push(l)}if(!o.stripImages&&i.length>0){let l=uo(e);for(let c of l)ji(c,r,n,"")}}function ji(t,e,r,n){let o=ct(t,"src")||ct(t,"xlink:href")||ct(t,"href");if(!o)return;let a=null;try{a=typeof e?.resolveImage=="function"?e.resolveImage(o):null}catch{a=null}if(!a||!a.src)return;let i=ct(t,"alt")||ct(t,"title")||a.alt||"",s=Rl(e,{src:a.src,alt:i,caption:n||a.caption||""});s&&r.push(s)}function Nm(t,e,r){let n=Ht(t,"figcaption")[0]||null,o=n?mt(n.textContent):"",a=uo(t);a.length>0&&a.forEach((l,c)=>{ji(l,e,r,c===0?o:"")});let i=t.cloneNode(!0);dh(i);for(let l of Ht(i,"figcaption"))l.remove();Nl(i)&&ch(i);let s=uh(i,e);s&&s.text!==o&&r.push({id:ho(e),kind:"paragraph",html:s.html,text:s.text})}function Am(t,e,r){let n=Ht(t,"code")[0]||t,o=String(n.textContent||"").replace(/\r\n?/g,`
`);if(!o.trim())return;let a=Ui(n.innerHTML),i=Cl(e,o);i&&(a&&(i.html=a),r.push(i))}function Cm(t,e,r){let n=t.cloneNode(!0),o=Tl(n.outerHTML);if(!o){Tm(e,"\u5DF2\u8DF3\u8FC7\u4E00\u4E2A\u65E0\u6CD5\u89E3\u6790\u7684\u8868\u683C\u3002");return}let a=Il(e,o);a&&r.push(a)}var El,wm,km,lh,_m,Na=vr(()=>{co();El=new Set(["h1","h2","h3","h4","h5","h6"]),wm=new Set(["script","style","noscript","template","head","title","meta","link","base","iframe","frame","frameset","object","embed","applet","form","input","select","textarea","button","audio","video","source","track","canvas","map","area","math","nav"]),km=new Set(["div","section","article","main","header","footer","aside","center","details","summary","fieldset","body","html","hgroup","dl"]),lh=new Set([...El,"p","div","section","article","main","header","footer","aside","center","details","summary","fieldset","body","html","hgroup","dl","dt","dd","blockquote","pre","table","ul","ol","li","figure","figcaption","hr","address","picture","svg","img","image"]),_m=[...El,"p","div","section","article","header","footer","aside","center","details","summary","fieldset","blockquote","ul","ol","li","dl","dt","dd","table","thead","tbody","tfoot","tr","td","th","caption","pre","figure","figcaption","address","hgroup"].join(",")});function qi(t){if(typeof t!="string"||!t)return"";let e=t.split(/[\\/]/).pop()||"",r=/\.([A-Za-z0-9]+)$/.exec(e);return r?r[1].toLowerCase():""}function Pr(t){let e=String(t||"").replace(/\\/g,"/"),r=e.lastIndexOf("/");return r>=0?e.slice(r+1):e}function Bo(t){let e=String(t||"").replace(/\\/g,"/"),r=e.lastIndexOf("/");return r>0?e.slice(0,r):""}function Pl(t){let e=[];for(let r of String(t||"").replace(/\\/g,"/").split("/"))if(!(!r||r===".")){if(r===".."){e.pop();continue}e.push(r)}return e.join("/")}function Aa(t){let e=String(t||""),r=e.indexOf("#"),n=r>=0?e.slice(0,r):e,o=r>=0?e.slice(r+1):"";try{o=decodeURIComponent(o)}catch{}let a=n.indexOf("?");return{path:a>=0?n.slice(0,a):n,fragment:o}}function $n(t,e){if(!e)return null;let r=String(e).trim();if(!r||r.startsWith("#")||/^[a-z][a-z0-9+.-]*:/i.test(r)||r.startsWith("//"))return null;let{path:n}=Aa(r);if(!n)return null;let o=n;try{o=decodeURIComponent(n)}catch{}o=o.replace(/\\/g,"/");let a=o.startsWith("/")?o.slice(1):t?`${t}/${o}`:o;return Pl(a)||null}function ph(t){let e=new Map,r=[];for(let[n,o]of Object.entries(t||{})){if(!o||/\/$/.test(n))continue;let a=Pl(n);if(!a)continue;let i=a.toLowerCase();e.has(i)||(e.set(i,{name:a,bytes:o}),r.push(a))}return{names:r,get(n){let o=Pl(n||"");return o&&e.get(o.toLowerCase())||null},has(n){return!!this.get(n)}}}function Ca(t){return Im[qi(t)]||"application/octet-stream"}async function hn(t){if(!t||typeof t.arrayBuffer!="function")throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u6570\u636E\uFF1A\u8BF7\u9009\u62E9\u4E00\u4E2A\u6709\u6548\u7684\u6587\u6863\u6587\u4EF6\u3002");let e;try{e=await t.arrayBuffer()}catch{throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u6570\u636E\uFF0C\u6587\u4EF6\u53EF\u80FD\u5DF2\u88AB\u79FB\u52A8\u6216\u635F\u574F\u3002")}let r=new Uint8Array(e);if(r.length===0)throw new Error("\u6587\u4EF6\u5185\u5BB9\u4E3A\u7A7A\u3002");return r}function pn(t=40){let e=[],r=new Set,n=!1;return{warnings:e,warn:a=>{let i=String(a||"").trim();!i||r.has(i)||(r.add(i),e.length<t?e.push(i):n||(n=!0,e.push("\u8FD8\u6709\u66F4\u591A\u89E3\u6790\u8B66\u544A\u672A\u663E\u793A\u3002")))}}}function Or(t,e){if(t instanceof Error&&/[\u4e00-\u9fff]/.test(t.message))return t;let r=t instanceof Error?t.message:String(t??""),n=r?`${e}\uFF1A${r}`:`${e}\u3002`;return new Error(/[。！？]$/.test(n)?n:`${n}\u3002`)}function Ia(t,e){let r=(Array.isArray(e)?e:[]).filter(a=>a&&Number.isInteger(a.chapterIndex)&&a.chapterIndex>=0&&a.chapterIndex<t.length&&a.title);for(let a=0;a<t.length;a+=1){let i=r.find(l=>l.chapterIndex===a),s=t[a].blocks.find(l=>l.kind==="heading"&&l.text);t[a].title=(i?.title||s?.text||`\u7B2C ${a+1} \u7AE0`).slice(0,120)}if(r.length===0)return t.map((a,i)=>({title:a.title,chapterIndex:i,depth:0}));let n=[],o=new Set;for(let a=0;a<t.length;a+=1){let i=r.filter(s=>s.chapterIndex===a);if(i.length===0){let s={title:t[a].title,chapterIndex:a,depth:0},l=`${a}|${s.title}|0`;o.has(l)||(o.add(l),n.push(s));continue}for(let s of i){let l=Number.isInteger(s.depth)&&s.depth>=0?s.depth:0,c=s.anchor?String(s.anchor).slice(0,300):"",h=`${s.chapterIndex}|${s.title}|${l}|${c}`;o.has(h)||(o.add(h),n.push({title:s.title,chapterIndex:s.chapterIndex,depth:l,...c?{anchor:c}:{}}))}}return n}function go(t,e="\u672A\u547D\u540D\u6587\u6863"){return Pr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||e}function Hn(){let t=[];return{urls:t,create(e){let r=URL.createObjectURL(e);return t.push(r),r},add(e){return e&&!t.includes(e)&&t.push(e),e},dispose(){for(;t.length>0;){let e=t.pop();try{URL.revokeObjectURL(e)}catch{}}}}}function Un(t){let e=/^data:([^;,]*)((?:;[^;,]*)*),(.*)$/is.exec(String(t||""));if(!e)return null;let r=e[1]||"application/octet-stream",n=e[2]||"",o=e[3]||"",a=/;base64/i.test(n);try{let i;if(a){let l=o.replace(/\s+/g,"");i=atob(l)}else i=decodeURIComponent(o);let s=new Uint8Array(i.length);for(let l=0;l<i.length;l+=1)s[l]=i.charCodeAt(l)&255;return new Blob([s],{type:r})}catch{return null}}function hh(t){let e=String(t||"").trim().toLowerCase();return!e||/^(utf-?8|utf8)$/.test(e)?"utf-8":/^utf-?16(le)?$/.test(e)?"utf-16le":/^utf-?16be$/.test(e)?"utf-16be":/^(gb2312|gbk|gb18030|cp936|x-gbk)$/.test(e)?"gb18030":/^(big5|big5-hkscs|cp950)$/.test(e)?"big5":/^(shift_jis|sjis|windows-31j|cp932)$/.test(e)?"shift_jis":/^(euc-kr|ks_c_5601-1987|cp949)$/.test(e)?"euc-kr":/^(iso-8859-1|latin1|windows-1252|cp1252)$/.test(e)?"windows-1252":e}function fo(t,e,r=!1){return new TextDecoder(e,{fatal:r}).decode(t)}function Mm(t){let e=fo(t.subarray(0,Math.min(t.length,512)),"windows-1252"),r=Rm.exec(e);return r&&(r[1]||r[2])||""}function fn(t,{defaultEncoding:e="utf-8",sniffDeclaration:r=!0}={}){let n=t instanceof Uint8Array?t:new Uint8Array(t);if(n.length===0)return"";if(n[0]===239&&n[1]===187&&n[2]===191)return fo(n.subarray(3),"utf-8");if(n[0]===255&&n[1]===254)return fo(n.subarray(2),"utf-16le");if(n[0]===254&&n[1]===255)return fo(n.subarray(2),"utf-16be");let o=e||"utf-8";if(r){let a=Mm(n);a&&(o=hh(a))}o=hh(o);try{return fo(n,o,!0)}catch{try{return fo(n,"utf-8",!0)}catch{return fo(n,"utf-8",!1)}}}function Xi(t){if(!t)return!1;let e=t.slice(0,4096);if(!e)return!1;let r=0;for(let n=0;n<e.length;n+=1){let o=e.charCodeAt(n);(o===65533||o===0||o<9||o>13&&o<32)&&(r+=1)}return r/e.length>.08}var Im,Rm,mo=vr(()=>{Im={jpg:"image/jpeg",jpeg:"image/jpeg",jpe:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",avif:"image/avif",bmp:"image/bmp",tif:"image/tiff",tiff:"image/tiff",svg:"image/svg+xml",ico:"image/x-icon",jxl:"image/jxl"};Rm=/(?:encoding\s*=\s*["']([A-Za-z0-9._-]+)["'])|(?:charset\s*=\s*["']?([A-Za-z0-9._-]+))/i});function fh(t){return/^(https?:|mailto:|tel:)/i.test(t)}function Ol(t){return/^[a-z][a-z0-9+.-]*:/i.test(t)}function Om(t,e){e&&!t.includes(e)&&t.push(e)}async function gh(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=pn(),a=Hn();try{let fe=function(d,S){let b=String(d||"").trim();if(!b||fh(b)||b.startsWith("//")||Ol(b))return null;let{path:re,fragment:ne}=Aa(b),ue=re?$n(S,b):null,ge=ue?U.get(ue.toLowerCase()):void 0;return ge==null&&ue&&(ge=J.get(Pr(ue).toLowerCase())),ge==null?null:{chapterIndex:ge,anchor:ne}},i=await hn(t),s;try{s=Gu(i)}catch{throw new Error("EPUB \u538B\u7F29\u5305\u5DF2\u635F\u574F\uFF0C\u65E0\u6CD5\u89E3\u538B\u3002")}let l=ph(s);if(l.names.length===0)throw new Error("EPUB \u538B\u7F29\u5305\u4E0D\u5305\u542B\u4EFB\u4F55\u6587\u4EF6\u3002");let c=l.get("META-INF/encryption.xml");if(c){let d=fn(c.bytes);if(/<encrypteddata/i.test(d)&&/application\/(xhtml\+xml|epub\+zip)/i.test(d))throw new Error("\u8BE5 EPUB \u6587\u4EF6\u53D7 DRM \u4FDD\u62A4\uFF0C\u65E0\u6CD5\u6253\u5F00\u3002")}let h=l.get("META-INF/container.xml");if(!h){let d=l.names.find(S=>/container\.xml$/i.test(S));d&&(h=l.get(d))}if(!h)throw new Error("\u7F3A\u5C11 META-INF/container.xml\uFF0C\u4E0D\u662F\u6709\u6548\u7684 EPUB \u6587\u4EF6\u3002");let p=zo(fn(h.bytes));if(!p)throw new Error("META-INF/container.xml \u683C\u5F0F\u9519\u8BEF\u3002");let u=Ht(p,"rootfile")[0],g=u?ct(u,"full-path"):"";if(!g)throw new Error("container.xml \u4E2D\u6CA1\u6709\u6307\u5B9A OPF \u5185\u5BB9\u6E05\u5355\u3002");let w=l.get(g)||l.get($n("",g));if(!w)throw new Error(`\u627E\u4E0D\u5230 EPUB \u5185\u5BB9\u6E05\u5355\u6587\u4EF6\uFF1A${g}`);let m=Bo(w.name),_=zo(fn(w.bytes));if(!_)throw new Error("EPUB \u5185\u5BB9\u6E05\u5355\uFF08OPF\uFF09\u683C\u5F0F\u9519\u8BEF\u3002");let k=cr(_,"metadata")||_,N=Ht(k,"title").map(d=>mt(d.textContent)).filter(Boolean),A=[];for(let d of Ht(k,"creator"))Om(A,mt(d.textContent));let E=Ht(k,"language").map(d=>mt(d.textContent)).filter(Boolean),M=Ht(k,"meta").filter(d=>String(ct(d,"name")||"").toLowerCase()==="cover").map(d=>ct(d,"content")||"").find(Boolean)||"",R=cr(_,"manifest");if(!R)throw new Error("OPF \u5185\u5BB9\u6E05\u5355\u7F3A\u5C11 manifest \u5217\u8868\u3002");let v=new Map;for(let d of Ht(R,"item")){let S=ct(d,"id");if(!S||v.has(S))continue;let b=ct(d,"href")||"",re=$n(m,b);v.set(S,{id:S,href:b,path:re,mediaType:String(ct(d,"media-type")||"").toLowerCase(),properties:String(ct(d,"properties")||"").toLowerCase()})}let O=cr(_,"spine");if(!O)throw new Error("OPF \u5185\u5BB9\u6E05\u5355\u7F3A\u5C11 spine \u9605\u8BFB\u987A\u5E8F\u3002");let L=Ht(O,"itemref");if(L.length===0)throw new Error("EPUB \u7684\u9605\u8BFB\u987A\u5E8F\uFF08spine\uFF09\u4E3A\u7A7A\u3002");let F=[],U=new Map,J=new Map;for(let d of L){let S=ct(d,"idref"),b=S?v.get(S):null;if(!b){o(`\u9605\u8BFB\u987A\u5E8F\u4E2D\u7684\u6761\u76EE\u201C${S||"\u672A\u77E5"}\u201D\u4E0D\u5728\u6E05\u5355\u4E2D\uFF0C\u5DF2\u8DF3\u8FC7\u3002`);continue}if(/\bnav\b/.test(b.properties))continue;if(!b.path){o(`\u7AE0\u8282\u6587\u4EF6\u201C${b.href||b.id}\u201D\u4F4D\u4E8E\u5916\u90E8\u7F51\u7EDC\uFF0C\u5DF2\u8DF3\u8FC7\u3002`);continue}let re=l.get(b.path);if(!re){o(`\u627E\u4E0D\u5230\u7AE0\u8282\u6587\u4EF6\uFF1A${b.path}`);continue}let ne=b.mediaType||"",ue=Pm.has(ne)||/\.(x?html?|htm)$/i.test(b.path),ge=ne.startsWith("image/")||/\.(png|jpe?g|gif|webp|avif|bmp|tiff?|svg)$/i.test(b.path);if(!ue&&!ge){o(`\u4E0D\u652F\u6301\u7684\u7AE0\u8282\u7C7B\u578B\uFF08${ne||"\u672A\u77E5"}\uFF09\uFF1A${b.path}`);continue}let ke=F.length;F.push({item:b,entry:re,isImage:ge,chapterIndex:ke}),U.set(b.path.toLowerCase(),ke);let $e=Pr(b.path).toLowerCase();J.has($e)||J.set($e,ke)}if(F.length===0)throw new Error("EPUB \u4E2D\u6CA1\u6709\u627E\u5230\u53EF\u663E\u793A\u7684\u7AE0\u8282\u5185\u5BB9\u3002");let Y=0,ae=()=>`b${Y+=1}`,q=[];for(let d of F){let{item:S,entry:b,isImage:re,chapterIndex:ne}=d;if(re){let je=S.mediaType.startsWith("image/")?S.mediaType:Ca(S.path),he=a.create(new Blob([b.bytes],{type:je}));q.push({id:`ch${ne}`,title:"",blocks:[{id:ae(),kind:"image",src:he}]});continue}let ue=Bo(S.path),ge=je=>{let he=String(je||"").trim();if(!he)return null;if(/^data:/i.test(he)){let Rt=Un(he);return Rt?{src:a.create(Rt)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684\u5185\u5D4C\u56FE\u7247\u3002"),null)}if(/^(https?:)?\/\//i.test(he))return o("\u5DF2\u8DF3\u8FC7\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\uFF08\u907F\u514D\u8DDF\u8E2A\u4E0E\u9690\u79C1\u6CC4\u9732\uFF09\u3002"),null;if(Ol(he))return null;let xt=$n(ue,he),vt=xt?l.get(xt):null;if(!vt)return o(`\u627E\u4E0D\u5230\u56FE\u7247\u6587\u4EF6\uFF1A${Pr(xt||he)}`),null;let yt=Ca(xt);return{src:a.create(new Blob([vt.bytes],{type:yt}))}},ke=je=>{let he=String(je||"").trim();if(!he)return null;if(fh(he))return{external:!0,href:he};if(he.startsWith("//")||Ol(he))return null;let{path:xt,fragment:vt}=Aa(he);if(!xt)return{chapter:ne,anchor:vt};let yt=$n(ue,he),Rt=yt?U.get(yt.toLowerCase()):void 0;return Rt==null&&yt&&(Rt=J.get(Pr(yt).toLowerCase())),Rt==null?null:{chapter:Rt,anchor:vt}},$e="";try{$e=fn(b.bytes)}catch{o(`\u7B2C ${ne+1} \u7AE0\u7684\u7F16\u7801\u65E0\u6CD5\u8BC6\u522B\uFF0C\u5DF2\u5C3D\u91CF\u6309 UTF-8 \u8BFB\u53D6\u3002`)}let Ee=zo($e),dt=Ee&&(cr(Ee,"body")||Ee.documentElement)||null,tt=dt?null:un($e),rt=dt||tt?.body||tt?.documentElement||null,Ve=rt?po(rt,{nextId:ae,warn:o,chapterIndex:ne,resolveImage:ge,resolveLink:ke}):[];Ve.length===0&&o(`\u7B2C ${ne+1} \u7AE0\u6CA1\u6709\u53EF\u663E\u793A\u7684\u5185\u5BB9\u3002`),q.push({id:`ch${ne}`,title:"",blocks:Ve})}let se=[...v.values()].find(d=>/\bnav\b/.test(d.properties)&&d.path),de=ct(O,"toc"),P=de&&v.get(de)||[...v.values()].find(d=>d.mediaType==="application/x-dtbncx+xml"&&d.path)||null,$=d=>{let S=l.get(d.path);if(!S)return o(`\u627E\u4E0D\u5230 EPUB \u5BFC\u822A\u6587\u4EF6\uFF1A${d.path}`),[];let b=fn(S.bytes),re=zo(b)||un(b);if(!re)return o("\u65E0\u6CD5\u89E3\u6790 EPUB \u5BFC\u822A\u76EE\u5F55\u3002"),[];let ne=Ht(re,"nav"),ue=ne.find(tt=>String(ct(tt,"type")||ct(tt,"epub:type")||"").toLowerCase().split(/\s+/).includes("toc"))||ne[0]||null;if(!ue)return[];let ge=cr(ue,"ol")||cr(ue,"ul");if(!ge)return[];let ke=[],$e=Bo(d.path),Ee=U.get(d.path.toLowerCase()),dt=(tt,rt)=>{for(let Ve of Array.from(tt.children||[])){if(kr(Ve)!=="li")continue;let je=null,he=null;for(let xt of Array.from(Ve.children||[])){let vt=kr(xt);!je&&(vt==="a"||vt==="span")&&(je=xt),!he&&(vt==="ol"||vt==="ul")&&(he=xt)}if(je&&kr(je)==="a"){let xt=mt(je.textContent).slice(0,200),vt=ct(je,"href")||"",yt=fe(vt,$e);if(!yt&&vt.startsWith("#")&&Ee!=null){let{fragment:Rt}=Aa(vt);yt={chapterIndex:Ee,anchor:Rt}}xt&&yt&&ke.push({title:xt,chapterIndex:yt.chapterIndex,depth:rt,...yt.anchor?{anchor:yt.anchor}:{}})}he&&dt(he,rt+1)}};return dt(ge,0),ke},B=d=>{let S=l.get(d.path);if(!S)return o(`\u627E\u4E0D\u5230 EPUB NCX \u76EE\u5F55\u6587\u4EF6\uFF1A${d.path}`),[];let b=fn(S.bytes),re=zo(b)||un(b);if(!re)return o("\u65E0\u6CD5\u89E3\u6790 EPUB NCX \u76EE\u5F55\u3002"),[];let ne=[],ue=Bo(d.path);for(let ge of Ht(re,"navpoint")){let ke=cr(ge,"navlabel"),$e=ke?cr(ke,"text"):cr(ge,"text"),Ee=mt($e?.textContent||"").slice(0,200),dt=Array.from(ge.children||[]).find(Ve=>kr(Ve)==="content")||cr(ge,"content"),tt=fe(ct(dt,"src")||"",ue);if(!Ee||!tt)continue;let rt=0;for(let Ve=ge.parentNode;Ve;Ve=Ve.parentNode)kr(Ve)==="navpoint"&&(rt+=1);ne.push({title:Ee,chapterIndex:tt.chapterIndex,depth:rt,...tt.anchor?{anchor:tt.anchor}:{}})}return ne},ie=[];se&&(ie=$(se),ie.length===0&&o("EPUB \u5BFC\u822A\u6587\u4EF6\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u5F55\u9879\u3002"));let ee=[];ie.length===0&&P&&(ee=B(P));let Ie=ie.length>0?ie:ee;Ie.length===0&&o("\u672A\u627E\u5230 EPUB \u76EE\u5F55\uFF0C\u5DF2\u6309\u7AE0\u8282\u6807\u9898\u751F\u6210\u3002");let Xe=Ia(q,Ie),Re="",Fe=[...v.values()].find(d=>/\bcover-image\b/.test(d.properties)&&d.path);if(Fe)Re=Fe.path;else if(M&&v.get(M)?.path)Re=v.get(M).path;else{let d=cr(_,"guide");if(d){let S=Ht(d,"reference").find(b=>/\bcover\b/.test(String(ct(b,"type")||"").toLowerCase()));S&&(Re=$n(m,ct(S,"href")||"")||"")}}let Pe="";if(Re){let d=l.get(Re);if(d){let S=Ca(Re);if(S.startsWith("image/"))Pe=a.create(new Blob([d.bytes],{type:S}));else if(/\.(x?html?|htm)$/i.test(Re)){let b=un(fn(d.bytes)),re=uo(b?.body||b?.documentElement||b)[0],ne=re&&(ct(re,"src")||ct(re,"xlink:href"))||"",ue=ne?$n(Bo(Re),ne):null,ge=ue?l.get(ue):null;ge&&(Pe=a.create(new Blob([ge.bytes],{type:Ca(ue)})))}}}let f={title:N[0]||go(r),chapters:q,toc:Xe,warnings:n,dispose:()=>a.dispose()};return A.length>0&&(f.author=A.join(", ")),E.length>0&&(f.language=E[0]),Pe&&(f.cover=Pe),f}catch(i){throw a.dispose(),Or(i,"\u65E0\u6CD5\u89E3\u6790 EPUB \u6587\u4EF6")}}var Pm,mh=vr(()=>{gl();co();Na();mo();Pm=new Set(["application/xhtml+xml","text/html","application/xml","text/xml","text/xhtml"])});function Lm(t){return Pr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u6863"}async function Ra(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=pn(),a=Hn();try{let i=await hn(t),s=fn(i),l=un(s);if(!l)throw new Error("HTML \u6587\u4EF6\u683C\u5F0F\u9519\u8BEF\uFF0C\u65E0\u6CD5\u89E3\u6790\u3002");let c=l.body||l.documentElement;if(!c)throw new Error("HTML \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let h=0,u=po(c,{nextId:()=>`b${h+=1}`,warn:o,resolveImage:N=>{let A=String(N||"").trim();if(!A)return null;if(/^data:/i.test(A)){let E=Un(A);return E?{src:a.create(E)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684\u5185\u5D4C\u56FE\u7247\u3002"),null)}return/^(https?:)?\/\//i.test(A)?(o("\u5DF2\u8DF3\u8FC7\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\uFF08\u907F\u514D\u8DDF\u8E2A\u4E0E\u9690\u79C1\u6CC4\u9732\uFF09\u3002"),null):(o("\u5DF2\u8DF3\u8FC7 HTML \u4E2D\u7684\u672C\u5730\u56FE\u7247\uFF08\u65E0\u6CD5\u5B9A\u4F4D\u56FE\u7247\u6587\u4EF6\uFF09\u3002"),null)},resolveLink:N=>{let A=String(N||"").trim();return A?/^(https?:\/\/|mailto:)/i.test(A)?{external:!0,href:A}:A.startsWith("#")?{chapter:0,anchor:A.slice(1)}:null:null}});if(u.length===0)throw new Error("HTML \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let g=cr(l,"title"),w=u.find(N=>N.kind==="heading"&&N.text),m=mt(g?.textContent||"")||w?.text||Lm(r),_=ct(l.documentElement,"lang")||"",y=[];for(let N of Ht(l,"meta"))if(String(ct(N,"name")||"").toLowerCase()==="author"){let A=mt(ct(N,"content")||"");A&&!y.includes(A)&&y.push(A)}let k={title:m,chapters:[{id:"ch0",title:m,blocks:u}],toc:[{title:m,chapterIndex:0,depth:0}],warnings:n,dispose:()=>a.dispose()};return _&&(k.language=_),y.length>0&&(k.author=y.join(", ")),k}catch(i){throw a.dispose(),Or(i,"\u65E0\u6CD5\u89E3\u6790 HTML \u6587\u4EF6")}}var bh=vr(()=>{co();Na();mo()});function xh(t){return/[\u3000-\u303f\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uffef\uac00-\ud7af]/.test(t)}function vh(t){let e="";for(let r of t){let n=String(r).trim();if(!n)continue;if(!e){e=n;continue}let o=e[e.length-1],a=n[0];e+=xh(o)&&xh(a)?n:` ${n}`}return e}function Hm(t){let e=String(t||"").trim();if(!e||e.length>$m)return!1;if(Fm.test(e)||zm.test(e))return!/[，,。；;]/.test(e);if(Bm.test(e)){let r=e.split(/\s+/).filter(Boolean).length;return!(r>14||/\.$/u.test(e)&&r>3)}return!1}function Ll(t){if(!t||t.length===0)throw new Error("\u6587\u672C\u6587\u4EF6\u5185\u5BB9\u4E3A\u7A7A\u3002");if(t[0]===239&&t[1]===187&&t[2]===191)return{text:new TextDecoder("utf-8").decode(t.subarray(3)),encoding:"utf-8"};if(t[0]===255&&t[1]===254)return{text:new TextDecoder("utf-16le").decode(t.subarray(2)),encoding:"utf-16le"};if(t[0]===254&&t[1]===255)return{text:new TextDecoder("utf-16be").decode(t.subarray(2)),encoding:"utf-16be"};let e=Math.min(t.length,4096),r=0,n=0;for(let a=0;a<e;a+=2)t[a]===0&&(r+=1),a+1<e&&t[a+1]===0&&(n+=1);let o=Math.ceil(e/2);if(o>4&&n/o>.35&&r/o<.05)return{text:new TextDecoder("utf-16le").decode(t),encoding:"utf-16le"};if(o>4&&r/o>.35&&n/o<.05)return{text:new TextDecoder("utf-16be").decode(t),encoding:"utf-16be"};try{return{text:new TextDecoder("utf-8",{fatal:!0}).decode(t),encoding:"utf-8"}}catch{}try{return{text:new TextDecoder("gb18030",{fatal:!0}).decode(t),encoding:"gb18030"}}catch{}return{text:new TextDecoder("utf-8").decode(t),encoding:"utf-8"}}function Um(t){let e=[],r=[],n=()=>{r.length>0&&(e.push(r),r=[])};for(let o of t)String(o).trim()?r.push(o):n();return n(),e}function Wm(t){let e=t.map(n=>n.trim()).filter(Boolean);return e.length<2?!1:e.filter(n=>/[。！？!?…"”’」』）)]$/.test(n)).length/e.length>=.5}function jm(t){let e=t.map(o=>String(o)),r=Um(e);if(r.length>1)return r.map(o=>vh(o)).filter(Boolean);let n=e.map(o=>o.trim()).filter(Boolean);return n.length<=1||Wm(n)?n:r.map(o=>vh(o)).filter(Boolean)}function Gm(t,{fallbackTitle:e="\u6B63\u6587"}={}){let n=String(t||"").replace(/\r\n?/g,`
`).replace(/\u0000/g,"").split(`
`),o=[],a={title:"",lines:[],heading:""},i=()=>{(a.heading||a.lines.some(s=>s.trim()))&&o.push(a),a={title:"",lines:[],heading:""}};for(let s of n){if(Hm(s)){i();let l=s.trim();a={title:l,lines:[],heading:l};continue}a.lines.push(s)}return i(),o.length===0?[{title:e,lines:n,heading:""}]:o}function Dl(t,{nextId:e,title:r="\u6B63\u6587"}={}){let n=Gm(t,{fallbackTitle:r}),o=i=>i.lines.some(s=>String(s).trim()),a=[];for(let i=0;i<n.length;i+=1){if(o(n[i])){a.push(n[i]);continue}let s=i;for(;s+1<n.length&&!o(n[s+1]);)s+=1;if(s-i+1>=3){i=s;continue}a.push(...n.slice(i,s+1)),i=s}return n=a.length>0?a:n,n.map((i,s)=>{let l=[];i.heading&&l.push({id:e(),kind:"heading",level:1,html:lo(i.heading),text:mt(i.heading)});for(let c of jm(i.lines))l.push({id:e(),kind:"paragraph",html:lo(c),text:c});return{id:`ch${s}`,title:i.title||r||`\u7B2C ${s+1} \u7AE0`,blocks:l}})}function qm(t){return Pr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u672C"}async function Fl(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=pn();try{let a=await hn(t),{text:i,encoding:s}=Ll(a);if(Xi(i))throw new Error("\u6587\u672C\u6587\u4EF6\u5305\u542B\u5927\u91CF\u65E0\u6CD5\u8BC6\u522B\u7684\u5B57\u7B26\uFF0C\u53EF\u80FD\u4E0D\u662F\u7EAF\u6587\u672C\u6587\u4EF6\u3002");s==="gb18030"&&o("\u5DF2\u6309 GB18030 \u7F16\u7801\u8BFB\u53D6\u6587\u672C\uFF08\u975E UTF-8\uFF09\u3002");let l=qm(r),c=0,p=Dl(i,{nextId:()=>`b${c+=1}`,title:l});if(p.length===0||p.every(g=>g.blocks.length===0))throw new Error("\u6587\u672C\u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");p[0].title||(p[0].title=l);let u=p.map((g,w)=>({title:g.title,chapterIndex:w,depth:0}));return{title:l,chapters:p,toc:u,warnings:n,encoding:s,dispose:()=>{}}}catch(a){throw Or(a,"\u65E0\u6CD5\u89E3\u6790\u6587\u672C\u6587\u4EF6")}}var Dm,Fm,zm,Bm,$m,Vi=vr(()=>{co();mo();Dm="[0-9\uFF10-\uFF19\u96F6\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u767E\u5343\u4E07\u4E24]",Fm=new RegExp(`^\\s*(\u7B2C\\s*${Dm}+\\s*[\u7AE0\u7BC0\u8282\u56DE\u5377\u7BC7])(?:[\\s:\uFF1A\xB7\u3001.\uFF0E\u2014\u2013-].*)?$`),zm=/^\s*(序章|楔子|引子|前言|序言|后记|後記|尾声|尾聲|终章|終章|番外(?:篇)?)(?:[\s:：·、.．—–-].*)?$/,Bm=/^\s*((?:chapter|part|book|section)\s+(?:[0-9]+|[ivxlcdm]{1,8}|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty))(?:[.:：\s—–-].*)?$/i,$m=72});function Km(t){let e=String(t||"").trim();return e&&(/^(https?:\/\/|mailto:)/i.test(e)||e.startsWith("#"))?e:""}function zl(t){let e=lo(String(t??"").trim()),r=[],n=o=>{let a=`\0${r.length}\0`;return r.push(o),a};return e=e.replace(/`([^`]+)`/g,(o,a)=>n(`<code>${a}</code>`)),e=e.replace(Xm,(o,a,i)=>{let s=Km(i);return s?n(`<a href="${s}">${a}</a>`):a}),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/__([^_]+)__/g,"<strong>$1</strong>").replace(/~~([^~]+)~~/g,"<s>$1</s>").replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g,"$1<em>$2</em>").replace(/(^|[^_])_([^_\n]+)_(?!_)/g,"$1<em>$2</em>"),e=e.replace(/\u0000(\d+)\u0000/g,(o,a)=>r[Number(a)]??""),e}function Ym(t){return Pr(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u6863"}function Ma(t){return String(t).trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(e=>e.trim())}function Zm(t){if(!/\|/.test(t))return!1;let e=Ma(t);return e.length>0&&e.every(r=>/^:?-{3,}:?$/.test(r))}function wh(t,e){return!!e&&t.includes("|")&&Zm(e)&&Ma(t).length===Ma(e).length}function yh(t,e){return!!(/^\s{0,3}(#{1,6}\s|>|(?:```|~~~))/.test(t)||/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(t)||/^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/.test(t)||wh(t,e))}function Qm(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=pn(),a=Hn(),i=0,s={nextId:()=>`b${i+=1}`,warn:o,resolveLink:_=>{let y=String(_||"").trim();return y?/^(https?:\/\/|mailto:)/i.test(y)?{external:!0,href:y}:y.startsWith("#")?{chapter:0,anchor:y.slice(1)}:null:null}},l=[],c=[];function h(_){let y=String(_??""),k=[];return y=y.replace(Vm,(N,A,E)=>{let T=mt(A);if(/^data:image\//i.test(E)){let M=Un(E);if(M){let R=Rl(s,{src:a.create(M),alt:T});R&&k.push(R)}else o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684 Markdown \u5185\u5D4C\u56FE\u7247\u3002")}else/^https?:/i.test(E)?o("\u5DF2\u8DF3\u8FC7 Markdown \u4E2D\u7684\u5916\u90E8\u56FE\u7247\uFF08\u907F\u514D\u7F51\u7EDC\u8DDF\u8E2A\uFF09\u3002"):o("\u5DF2\u8DF3\u8FC7 Markdown \u4E2D\u7684\u672C\u5730\u56FE\u7247\uFF08\u65E0\u6CD5\u5B9A\u4F4D\u56FE\u7247\u6587\u4EF6\uFF09\u3002");return T?` ${T} `:" "}),{html:zl(y),images:k}}function p(_,y,k={}){let{html:N,images:A}=h(y),E=Gi(s,_,N,k);E&&l.push(E);for(let T of A)l.push(T);return!!E}let u=String(t??"").replace(/\r\n?/g,`
`).replace(/\u0000/g,"").split(`
`),g=0;for(;g<u.length;){let _=u[g];if(!_.trim()){g+=1;continue}let y=/^\s*(`{3,}|~{3,})\s*([A-Za-z0-9_+#.-]*)\s*$/.exec(_);if(y){let T=y[1],M=[];g+=1;let R=new RegExp(`^\\s*${T[0]==="`"?"`":"~"}{${T.length},}\\s*$`);for(;g<u.length;){if(R.test(u[g])){g+=1;break}M.push(u[g]),g+=1}let v=Cl(s,M.join(`
`));v&&l.push(v);continue}let k=/^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(_);if(k){p("heading",k[2],{level:k[1].length}),g+=1;continue}if(/^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/.test(_)){l.push(Ml(s)),g+=1;continue}if(wh(_,u[g+1])){let T=Ma(_);g+=2;let M=[];for(;g<u.length&&u[g].includes("|")&&u[g].trim();)M.push(Ma(u[g])),g+=1;let R=`<thead><tr>${T.map(L=>`<th>${zl(L)}</th>`).join("")}</tr></thead>`,v=M.length>0?`<tbody>${M.map(L=>`<tr>${T.map((F,U)=>`<td>${zl(L[U]||"")}</td>`).join("")}</tr>`).join("")}</tbody>`:"",O=Il(s,`<table>${R}${v}</table>`);O&&l.push(O);continue}if(/^\s{0,3}>/.test(_)){let T=[];for(;g<u.length&&/^\s{0,3}>/.test(u[g]);)T.push(u[g].replace(/^\s{0,3}>\s?/,"")),g+=1;let M=[],R=[];for(let O of T){let L=h(O);L.html&&M.push(L.html),R.push(...L.images)}let v=Gi(s,"quote",M.join("<br>"));v&&l.push(v);for(let O of R)l.push(O);continue}if(/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(_)){for(;g<u.length;){let T=/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+(.*)$/.exec(u[g]);if(!T)break;for(p("list-item",T[1]),g+=1;g<u.length&&/^\s{2,}\S/.test(u[g])&&!/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(u[g])&&!yh(u[g],u[g+1]);)g+=1}continue}let N=[];for(;g<u.length&&u[g].trim()&&!yh(u[g],u[g+1]);)N.push(u[g]),g+=1;if(N.length===0){g+=1;continue}let A=[];for(let T of N){let M=/(?: {2,}|\\)$/.test(T),R=h(T.replace(/(?: {2,}|\\)$/,""));R.html&&A.push(M?`${R.html}<br>`:R.html),c.push(...R.images)}let E=Gi(s,"paragraph",A.join(" "));for(E&&l.push(E);c.length>0;)l.push(c.shift())}let m=l.find(_=>_.kind==="heading"&&_.text)?.text||Ym(r);if(l.length===0)throw a.dispose(),new Error("Markdown \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");return{title:m,chapters:[{id:"ch0",title:m,blocks:l}],toc:[{title:m,chapterIndex:0,depth:0}],warnings:n,dispose:()=>a.dispose()}}async function Pa(t,e={}){try{let r=await hn(t),{text:n}=Ll(r);return Qm(n,e)}catch(r){throw Or(r,"\u65E0\u6CD5\u89E3\u6790 Markdown \u6587\u4EF6")}}var Xm,Vm,kh=vr(()=>{co();Na();mo();Vi();Xm=/\[([^\]]+)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g,Vm=/!\[([^\]]*)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g});var Th=hs((x1,Sh)=>{"use strict";function gn(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function _h(t,e){for(var r="",n=0,o=-1,a=0,i,s=0;s<=t.length;++s){if(s<t.length)i=t.charCodeAt(s);else{if(i===47)break;i=47}if(i===47){if(!(o===s-1||a===1))if(o!==s-1&&a===2){if(r.length<2||n!==2||r.charCodeAt(r.length-1)!==46||r.charCodeAt(r.length-2)!==46){if(r.length>2){var l=r.lastIndexOf("/");if(l!==r.length-1){l===-1?(r="",n=0):(r=r.slice(0,l),n=r.length-1-r.lastIndexOf("/")),o=s,a=0;continue}}else if(r.length===2||r.length===1){r="",n=0,o=s,a=0;continue}}e&&(r.length>0?r+="/..":r="..",n=2)}else r.length>0?r+="/"+t.slice(o+1,s):r=t.slice(o+1,s),n=s-o-1;o=s,a=0}else i===46&&a!==-1?++a:a=-1}return r}function Jm(t,e){var r=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+n:r+t+n:n}var $o={resolve:function(){for(var e="",r=!1,n,o=arguments.length-1;o>=-1&&!r;o--){var a;o>=0?a=arguments[o]:(n===void 0&&(n=process.cwd()),a=n),gn(a),a.length!==0&&(e=a+"/"+e,r=a.charCodeAt(0)===47)}return e=_h(e,!r),r?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(gn(e),e.length===0)return".";var r=e.charCodeAt(0)===47,n=e.charCodeAt(e.length-1)===47;return e=_h(e,!r),e.length===0&&!r&&(e="."),e.length>0&&n&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return gn(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,r=0;r<arguments.length;++r){var n=arguments[r];gn(n),n.length>0&&(e===void 0?e=n:e+="/"+n)}return e===void 0?".":$o.normalize(e)},relative:function(e,r){if(gn(e),gn(r),e===r||(e=$o.resolve(e),r=$o.resolve(r),e===r))return"";for(var n=1;n<e.length&&e.charCodeAt(n)===47;++n);for(var o=e.length,a=o-n,i=1;i<r.length&&r.charCodeAt(i)===47;++i);for(var s=r.length,l=s-i,c=a<l?a:l,h=-1,p=0;p<=c;++p){if(p===c){if(l>c){if(r.charCodeAt(i+p)===47)return r.slice(i+p+1);if(p===0)return r.slice(i+p)}else a>c&&(e.charCodeAt(n+p)===47?h=p:p===0&&(h=0));break}var u=e.charCodeAt(n+p),g=r.charCodeAt(i+p);if(u!==g)break;u===47&&(h=p)}var w="";for(p=n+h+1;p<=o;++p)(p===o||e.charCodeAt(p)===47)&&(w.length===0?w+="..":w+="/..");return w.length>0?w+r.slice(i+h):(i+=h,r.charCodeAt(i)===47&&++i,r.slice(i))},_makeLong:function(e){return e},dirname:function(e){if(gn(e),e.length===0)return".";for(var r=e.charCodeAt(0),n=r===47,o=-1,a=!0,i=e.length-1;i>=1;--i)if(r=e.charCodeAt(i),r===47){if(!a){o=i;break}}else a=!1;return o===-1?n?"/":".":n&&o===1?"//":e.slice(0,o)},basename:function(e,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');gn(e);var n=0,o=-1,a=!0,i;if(r!==void 0&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var s=r.length-1,l=-1;for(i=e.length-1;i>=0;--i){var c=e.charCodeAt(i);if(c===47){if(!a){n=i+1;break}}else l===-1&&(a=!1,l=i+1),s>=0&&(c===r.charCodeAt(s)?--s===-1&&(o=i):(s=-1,o=l))}return n===o?o=l:o===-1&&(o=e.length),e.slice(n,o)}else{for(i=e.length-1;i>=0;--i)if(e.charCodeAt(i)===47){if(!a){n=i+1;break}}else o===-1&&(a=!1,o=i+1);return o===-1?"":e.slice(n,o)}},extname:function(e){gn(e);for(var r=-1,n=0,o=-1,a=!0,i=0,s=e.length-1;s>=0;--s){var l=e.charCodeAt(s);if(l===47){if(!a){n=s+1;break}continue}o===-1&&(a=!1,o=s+1),l===46?r===-1?r=s:i!==1&&(i=1):r!==-1&&(i=-1)}return r===-1||o===-1||i===0||i===1&&r===o-1&&r===n+1?"":e.slice(r,o)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return Jm("/",e)},parse:function(e){gn(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return r;var n=e.charCodeAt(0),o=n===47,a;o?(r.root="/",a=1):a=0;for(var i=-1,s=0,l=-1,c=!0,h=e.length-1,p=0;h>=a;--h){if(n=e.charCodeAt(h),n===47){if(!c){s=h+1;break}continue}l===-1&&(c=!1,l=h+1),n===46?i===-1?i=h:p!==1&&(p=1):i!==-1&&(p=-1)}return i===-1||l===-1||p===0||p===1&&i===l-1&&i===s+1?l!==-1&&(s===0&&o?r.base=r.name=e.slice(1,l):r.base=r.name=e.slice(s,l)):(s===0&&o?(r.name=e.slice(1,i),r.base=e.slice(1,l)):(r.name=e.slice(s,i),r.base=e.slice(s,l)),r.ext=e.slice(i,l)),s>0?r.dir=e.slice(0,s-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};$o.posix=$o;Sh.exports=$o});var Dh=hs((v1,Bl)=>{"use strict";var Ho=typeof Reflect=="object"?Reflect:null,Eh=Ho&&typeof Ho.apply=="function"?Ho.apply:function(e,r,n){return Function.prototype.apply.call(e,r,n)},Ki;Ho&&typeof Ho.ownKeys=="function"?Ki=Ho.ownKeys:Object.getOwnPropertySymbols?Ki=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Ki=function(e){return Object.getOwnPropertyNames(e)};function eb(t){console&&console.warn&&console.warn(t)}var Ah=Number.isNaN||function(e){return e!==e};function bt(){bt.init.call(this)}Bl.exports=bt;Bl.exports.once=ob;bt.EventEmitter=bt;bt.prototype._events=void 0;bt.prototype._eventsCount=0;bt.prototype._maxListeners=void 0;var Nh=10;function Yi(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(bt,"defaultMaxListeners",{enumerable:!0,get:function(){return Nh},set:function(t){if(typeof t!="number"||t<0||Ah(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");Nh=t}});bt.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};bt.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||Ah(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function Ch(t){return t._maxListeners===void 0?bt.defaultMaxListeners:t._maxListeners}bt.prototype.getMaxListeners=function(){return Ch(this)};bt.prototype.emit=function(e){for(var r=[],n=1;n<arguments.length;n++)r.push(arguments[n]);var o=e==="error",a=this._events;if(a!==void 0)o=o&&a.error===void 0;else if(!o)return!1;if(o){var i;if(r.length>0&&(i=r[0]),i instanceof Error)throw i;var s=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw s.context=i,s}var l=a[e];if(l===void 0)return!1;if(typeof l=="function")Eh(l,this,r);else for(var c=l.length,h=Oh(l,c),n=0;n<c;++n)Eh(h[n],this,r);return!0};function Ih(t,e,r,n){var o,a,i;if(Yi(r),a=t._events,a===void 0?(a=t._events=Object.create(null),t._eventsCount=0):(a.newListener!==void 0&&(t.emit("newListener",e,r.listener?r.listener:r),a=t._events),i=a[e]),i===void 0)i=a[e]=r,++t._eventsCount;else if(typeof i=="function"?i=a[e]=n?[r,i]:[i,r]:n?i.unshift(r):i.push(r),o=Ch(t),o>0&&i.length>o&&!i.warned){i.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+i.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=t,s.type=e,s.count=i.length,eb(s)}return t}bt.prototype.addListener=function(e,r){return Ih(this,e,r,!1)};bt.prototype.on=bt.prototype.addListener;bt.prototype.prependListener=function(e,r){return Ih(this,e,r,!0)};function tb(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Rh(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},o=tb.bind(n);return o.listener=r,n.wrapFn=o,o}bt.prototype.once=function(e,r){return Yi(r),this.on(e,Rh(this,e,r)),this};bt.prototype.prependOnceListener=function(e,r){return Yi(r),this.prependListener(e,Rh(this,e,r)),this};bt.prototype.removeListener=function(e,r){var n,o,a,i,s;if(Yi(r),o=this._events,o===void 0)return this;if(n=o[e],n===void 0)return this;if(n===r||n.listener===r)--this._eventsCount===0?this._events=Object.create(null):(delete o[e],o.removeListener&&this.emit("removeListener",e,n.listener||r));else if(typeof n!="function"){for(a=-1,i=n.length-1;i>=0;i--)if(n[i]===r||n[i].listener===r){s=n[i].listener,a=i;break}if(a<0)return this;a===0?n.shift():rb(n,a),n.length===1&&(o[e]=n[0]),o.removeListener!==void 0&&this.emit("removeListener",e,s||r)}return this};bt.prototype.off=bt.prototype.removeListener;bt.prototype.removeAllListeners=function(e){var r,n,o;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var a=Object.keys(n),i;for(o=0;o<a.length;++o)i=a[o],i!=="removeListener"&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(r=n[e],typeof r=="function")this.removeListener(e,r);else if(r!==void 0)for(o=r.length-1;o>=0;o--)this.removeListener(e,r[o]);return this};function Mh(t,e,r){var n=t._events;if(n===void 0)return[];var o=n[e];return o===void 0?[]:typeof o=="function"?r?[o.listener||o]:[o]:r?nb(o):Oh(o,o.length)}bt.prototype.listeners=function(e){return Mh(this,e,!0)};bt.prototype.rawListeners=function(e){return Mh(this,e,!1)};bt.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):Ph.call(t,e)};bt.prototype.listenerCount=Ph;function Ph(t){var e=this._events;if(e!==void 0){var r=e[t];if(typeof r=="function")return 1;if(r!==void 0)return r.length}return 0}bt.prototype.eventNames=function(){return this._eventsCount>0?Ki(this._events):[]};function Oh(t,e){for(var r=new Array(e),n=0;n<e;++n)r[n]=t[n];return r}function rb(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function nb(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}function ob(t,e){return new Promise(function(r,n){function o(i){t.removeListener(e,a),n(i)}function a(){typeof t.removeListener=="function"&&t.removeListener("error",o),r([].slice.call(arguments))}Lh(t,e,a,{once:!0}),e!=="error"&&ab(t,o,{once:!0})})}function ab(t,e,r){typeof t.on=="function"&&Lh(t,"error",e,r)}function Lh(t,e,r,n){if(typeof t.on=="function")n.once?t.once(e,r):t.on(e,r);else if(typeof t.addEventListener=="function")t.addEventListener(e,function o(a){n.once&&t.removeEventListener(e,o),r(a)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}});var Fh=hs(Zi=>{(function(t){t.parser=function(f,d){return new r(f,d)},t.SAXParser=r,t.SAXStream=h,t.createStream=l,t.MAX_BUFFER_LENGTH=64*1024;var e=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];t.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function r(f,d){if(!(this instanceof r))return new r(f,d);var S=this;o(S),S.q=S.c="",S.bufferCheckPosition=t.MAX_BUFFER_LENGTH,S.encoding=null,S.opt=d||{},S.opt.lowercase=S.opt.lowercase||S.opt.lowercasetags,S.looseCase=S.opt.lowercase?"toLowerCase":"toUpperCase",S.opt.maxEntityCount=S.opt.maxEntityCount||512,S.opt.maxEntityDepth=S.opt.maxEntityDepth||4,S.entityCount=S.entityDepth=0,S.tags=[],S.closed=S.closedRoot=S.sawRoot=!1,S.tag=S.error=null,S.strict=!!f,S.noscript=!!(f||S.opt.noscript),S.state=v.BEGIN,S.strictEntities=S.opt.strictEntities,S.ENTITIES=S.strictEntities?Object.create(t.XML_ENTITIES):Object.create(t.ENTITIES),S.attribList=[],S.opt.xmlns&&(S.ns=Object.create(m)),S.opt.unquotedAttributeValues===void 0&&(S.opt.unquotedAttributeValues=!f),S.trackPosition=S.opt.position!==!1,S.trackPosition&&(S.position=S.line=S.column=0),L(S,"onready")}Object.create||(Object.create=function(f){function d(){}d.prototype=f;var S=new d;return S}),Object.keys||(Object.keys=function(f){var d=[];for(var S in f)f.hasOwnProperty(S)&&d.push(S);return d});function n(f){for(var d=Math.max(t.MAX_BUFFER_LENGTH,10),S=0,b=0,re=e.length;b<re;b++){var ne=f[e[b]].length;if(ne>d)switch(e[b]){case"textNode":fe(f);break;case"cdata":ae(f,"oncdata",f.cdata),f.cdata="";break;case"script":ae(f,"onscript",f.script),f.script="";break;default:se(f,"Max buffer length exceeded: "+e[b])}S=Math.max(S,ne)}var ue=t.MAX_BUFFER_LENGTH-S;f.bufferCheckPosition=ue+f.position}function o(f){for(var d=0,S=e.length;d<S;d++)f[e[d]]=""}function a(f){fe(f),f.cdata!==""&&(ae(f,"oncdata",f.cdata),f.cdata=""),f.script!==""&&(ae(f,"onscript",f.script),f.script="")}r.prototype={end:function(){de(this)},write:Te,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){a(this)}};var i;try{i=require("stream").Stream}catch{i=function(){}}i||(i=function(){});var s=t.EVENTS.filter(function(f){return f!=="error"&&f!=="end"});function l(f,d){return new h(f,d)}function c(f,d){if(f.length>=2){if(f[0]===255&&f[1]===254)return"utf-16le";if(f[0]===254&&f[1]===255)return"utf-16be"}return f.length>=3&&f[0]===239&&f[1]===187&&f[2]===191?"utf8":f.length>=4?f[0]===60&&f[1]===0&&f[2]===63&&f[3]===0?"utf-16le":f[0]===0&&f[1]===60&&f[2]===0&&f[3]===63?"utf-16be":"utf8":d?"utf8":null}function h(f,d){if(!(this instanceof h))return new h(f,d);i.apply(this),this._parser=new r(f,d),this.writable=!0,this.readable=!0;var S=this;this._parser.onend=function(){S.emit("end")},this._parser.onerror=function(b){S.emit("error",b),S._parser.error=null},this._decoder=null,this._decoderBuffer=null,s.forEach(function(b){Object.defineProperty(S,"on"+b,{get:function(){return S._parser["on"+b]},set:function(re){if(!re)return S.removeAllListeners(b),S._parser["on"+b]=re,re;S.on(b,re)},enumerable:!0,configurable:!1})})}h.prototype=Object.create(i.prototype,{constructor:{value:h}}),h.prototype._decodeBuffer=function(f,d){if(this._decoderBuffer&&(f=Buffer.concat([this._decoderBuffer,f]),this._decoderBuffer=null),!this._decoder){var S=c(f,d);if(!S)return this._decoderBuffer=f,"";this._parser.encoding=S,this._decoder=new TextDecoder(S)}return this._decoder.decode(f,{stream:!d})},h.prototype.write=function(f){if(typeof Buffer=="function"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(f))f=this._decodeBuffer(f,!1);else if(this._decoderBuffer){var d=this._decodeBuffer(Buffer.alloc(0),!0);d&&(this._parser.write(d),this.emit("data",d))}return this._parser.write(f.toString()),this.emit("data",f),!0},h.prototype.end=function(f){if(f&&f.length&&this.write(f),this._decoderBuffer){var d=this._decodeBuffer(Buffer.alloc(0),!0);d&&(this._parser.write(d),this.emit("data",d))}else if(this._decoder){var S=this._decoder.decode();S&&(this._parser.write(S),this.emit("data",S))}return this._parser.end(),!0},h.prototype.on=function(f,d){var S=this;return!S._parser["on"+f]&&s.indexOf(f)!==-1&&(S._parser["on"+f]=function(){var b=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);b.splice(0,0,f),S.emit.apply(S,b)}),i.prototype.on.call(S,f,d)};var p=/^\[CDATA\[$/i,u=/^DOCTYPE$/i,g="http://www.w3.org/XML/1998/namespace",w="http://www.w3.org/2000/xmlns/",m={xml:g,xmlns:w},_=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,y=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,k=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,N=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function A(f){return f===" "||f===`
`||f==="\r"||f==="	"}function E(f){return f==='"'||f==="'"}function T(f){return f===">"||A(f)}function M(f,d){return f.test(d)}function R(f,d){return!M(f,d)}var v=0;t.STATE={BEGIN:v++,BEGIN_WHITESPACE:v++,TEXT:v++,TEXT_ENTITY:v++,OPEN_WAKA:v++,SGML_DECL:v++,SGML_DECL_QUOTED:v++,DOCTYPE:v++,DOCTYPE_QUOTED:v++,DOCTYPE_DTD:v++,DOCTYPE_DTD_QUOTED:v++,COMMENT_STARTING:v++,COMMENT:v++,COMMENT_ENDING:v++,COMMENT_ENDED:v++,CDATA:v++,CDATA_ENDING:v++,CDATA_ENDING_2:v++,PROC_INST:v++,PROC_INST_BODY:v++,PROC_INST_ENDING:v++,OPEN_TAG:v++,OPEN_TAG_SLASH:v++,ATTRIB:v++,ATTRIB_NAME:v++,ATTRIB_NAME_SAW_WHITE:v++,ATTRIB_VALUE:v++,ATTRIB_VALUE_QUOTED:v++,ATTRIB_VALUE_CLOSED:v++,ATTRIB_VALUE_UNQUOTED:v++,ATTRIB_VALUE_ENTITY_Q:v++,ATTRIB_VALUE_ENTITY_U:v++,CLOSE_TAG:v++,CLOSE_TAG_SAW_WHITE:v++,SCRIPT:v++,SCRIPT_ENDING:v++},t.XML_ENTITIES=Object.assign(Object.create(null),{amp:"&",gt:">",lt:"<",quot:'"',apos:"'"}),t.ENTITIES=Object.assign(Object.create(null),{amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830}),Object.keys(t.ENTITIES).forEach(function(f){var d=t.ENTITIES[f],S=typeof d=="number"?String.fromCharCode(d):d;t.ENTITIES[f]=S});for(var O in t.STATE)t.STATE[t.STATE[O]]=O;v=t.STATE;function L(f,d,S){f[d]&&f[d](S)}function F(f){var d=f&&f.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);return d?d[2]:null}function U(f){return f?f.toLowerCase().replace(/[^a-z0-9]/g,""):null}function J(f,d){let S=U(f),b=U(d);return!S||!b?!0:b==="utf16"?S==="utf16le"||S==="utf16be":S===b}function Y(f,d){if(!(!f.strict||!f.encoding||!d||d.name!=="xml")){var S=F(d.body);S&&!J(f.encoding,S)&&P(f,"XML declaration encoding "+S+" does not match detected stream encoding "+f.encoding.toUpperCase())}}function ae(f,d,S){f.textNode&&fe(f),L(f,d,S)}function fe(f){f.textNode=q(f.opt,f.textNode),f.textNode&&L(f,"ontext",f.textNode),f.textNode=""}function q(f,d){return f.trim&&(d=d.trim()),f.normalize&&(d=d.replace(/\s+/g," ")),d}function se(f,d){return fe(f),f.trackPosition&&(d+=`
Line: `+f.line+`
Column: `+f.column+`
Char: `+f.c),d=new Error(d),f.error=d,L(f,"onerror",d),f}function de(f){return f.sawRoot&&!f.closedRoot&&P(f,"Unclosed root tag"),f.state!==v.BEGIN&&f.state!==v.BEGIN_WHITESPACE&&f.state!==v.TEXT&&se(f,"Unexpected end"),fe(f),f.c="",f.closed=!0,L(f,"onend"),r.call(f,f.strict,f.opt),f}function P(f,d){if(typeof f!="object"||!(f instanceof r))throw new Error("bad call to strictFail");f.strict&&se(f,d)}function $(f){f.strict||(f.tagName=f.tagName[f.looseCase]());var d=f.tags[f.tags.length-1]||f,S=f.tag={name:f.tagName,attributes:{}};f.opt.xmlns&&(S.ns=d.ns),f.attribList.length=0,ae(f,"onopentagstart",S)}function B(f,d){var S=f.indexOf(":"),b=S<0?["",f]:f.split(":"),re=b[0],ne=b[1];return d&&f==="xmlns"&&(re="xmlns",ne=""),{prefix:re,local:ne}}function ie(f){if(f.strict||(f.attribName=f.attribName[f.looseCase]()),f.attribList.indexOf(f.attribName)!==-1||f.tag.attributes.hasOwnProperty(f.attribName)){f.attribName=f.attribValue="";return}if(f.opt.xmlns){var d=B(f.attribName,!0),S=d.prefix,b=d.local;if(S==="xmlns")if(b==="xml"&&f.attribValue!==g)P(f,"xml: prefix must be bound to "+g+`
Actual: `+f.attribValue);else if(b==="xmlns"&&f.attribValue!==w)P(f,"xmlns: prefix must be bound to "+w+`
Actual: `+f.attribValue);else{var re=f.tag,ne=f.tags[f.tags.length-1]||f;re.ns===ne.ns&&(re.ns=Object.create(ne.ns)),re.ns[b]=f.attribValue}f.attribList.push([f.attribName,f.attribValue])}else f.tag.attributes[f.attribName]=f.attribValue,ae(f,"onattribute",{name:f.attribName,value:f.attribValue});f.attribName=f.attribValue=""}function ee(f,d){if(f.opt.xmlns){var S=f.tag,b=B(f.tagName);S.prefix=b.prefix,S.local=b.local,S.uri=S.ns[b.prefix]||"",S.prefix&&!S.uri&&(P(f,"Unbound namespace prefix: "+JSON.stringify(f.tagName)),S.uri=b.prefix);var re=f.tags[f.tags.length-1]||f;S.ns&&re.ns!==S.ns&&Object.keys(S.ns).forEach(function(je){ae(f,"onopennamespace",{prefix:je,uri:S.ns[je]})});for(var ne=0,ue=f.attribList.length;ne<ue;ne++){var ge=f.attribList[ne],ke=ge[0],$e=ge[1],Ee=B(ke,!0),dt=Ee.prefix,tt=Ee.local,rt=dt===""?"":S.ns[dt]||"",Ve={name:ke,value:$e,prefix:dt,local:tt,uri:rt};dt&&dt!=="xmlns"&&!rt&&(P(f,"Unbound namespace prefix: "+JSON.stringify(dt)),Ve.uri=dt),f.tag.attributes[ke]=Ve,ae(f,"onattribute",Ve)}f.attribList.length=0}f.tag.isSelfClosing=!!d,f.sawRoot=!0,f.tags.push(f.tag),ae(f,"onopentag",f.tag),d||(!f.noscript&&f.tagName.toLowerCase()==="script"?f.state=v.SCRIPT:f.state=v.TEXT,f.tag=null,f.tagName=""),f.attribName=f.attribValue="",f.attribList.length=0}function Ie(f){if(!f.tagName){P(f,"Weird empty close tag."),f.textNode+="</>",f.state=v.TEXT;return}if(f.script){if(f.tagName!=="script"){f.script+="</"+f.tagName+">",f.tagName="",f.state=v.SCRIPT;return}ae(f,"onscript",f.script),f.script=""}var d=f.tags.length,S=f.tagName;f.strict||(S=S[f.looseCase]());for(var b=S;d--;){var re=f.tags[d];if(re.name!==b)P(f,"Unexpected close tag");else break}if(d<0){P(f,"Unmatched closing tag: "+f.tagName),f.textNode+="</"+f.tagName+">",f.state=v.TEXT;return}f.tagName=S;for(var ne=f.tags.length;ne-- >d;){var ue=f.tag=f.tags.pop();f.tagName=f.tag.name,ae(f,"onclosetag",f.tagName);var ge={};for(var ke in ue.ns)ge[ke]=ue.ns[ke];var $e=f.tags[f.tags.length-1]||f;f.opt.xmlns&&ue.ns!==$e.ns&&Object.keys(ue.ns).forEach(function(Ee){var dt=ue.ns[Ee];ae(f,"onclosenamespace",{prefix:Ee,uri:dt})})}d===0&&(f.closedRoot=!0),f.tagName=f.attribValue=f.attribName="",f.attribList.length=0,f.state=v.TEXT}function Xe(f){var d=f.entity,S=d.toLowerCase(),b,re="";return f.ENTITIES[d]?f.ENTITIES[d]:f.ENTITIES[S]?f.ENTITIES[S]:(d=S,d.charAt(0)==="#"&&(d.charAt(1)==="x"?(d=d.slice(2),b=parseInt(d,16),re=b.toString(16)):(d=d.slice(1),b=parseInt(d,10),re=b.toString(10))),d=d.replace(/^0+/,""),isNaN(b)||re.toLowerCase()!==d||b<0||b>1114111||!Re(b)?(P(f,"Invalid character entity"),"&"+f.entity+";"):String.fromCodePoint(b))}function Re(f){return f===9||f===10||f===13||f>=32&&f<=55295||f>=57344&&f<=65533||f>=65536&&f<=1114111}function Fe(f,d){d==="<"?(f.state=v.OPEN_WAKA,f.startTagPosition=f.position):A(d)||(P(f,"Non-whitespace before first tag."),f.textNode=d,f.state=v.TEXT)}function Pe(f,d){var S="";return d<f.length&&(S=f.charAt(d)),S}function Te(f){var d=this;if(this.error)throw this.error;if(d.closed)return se(d,"Cannot write after close. Assign an onready handler.");if(f===null)return de(d);typeof f=="object"&&(f=f.toString());for(var S=0,b="";b=Pe(f,S++),d.c=b,!!b;)switch(d.trackPosition&&(d.position++,b===`
`?(d.line++,d.column=0):d.column++),d.state){case v.BEGIN:if(d.state=v.BEGIN_WHITESPACE,b==="\uFEFF")continue;Fe(d,b);continue;case v.BEGIN_WHITESPACE:Fe(d,b);continue;case v.TEXT:if(d.sawRoot&&!d.closedRoot){for(var ne=S-1;b&&b!=="<"&&b!=="&";)b=Pe(f,S++),b&&d.trackPosition&&(d.position++,b===`
`?(d.line++,d.column=0):d.column++);d.textNode+=f.substring(ne,S-1)}b==="<"&&!(d.sawRoot&&d.closedRoot&&!d.strict)?(d.state=v.OPEN_WAKA,d.startTagPosition=d.position):(!A(b)&&(!d.sawRoot||d.closedRoot)&&P(d,"Text data outside of root node."),b==="&"?d.state=v.TEXT_ENTITY:d.textNode+=b);continue;case v.SCRIPT:b==="<"?d.state=v.SCRIPT_ENDING:d.script+=b;continue;case v.SCRIPT_ENDING:b==="/"?d.state=v.CLOSE_TAG:(d.script+="<"+b,d.state=v.SCRIPT);continue;case v.OPEN_WAKA:if(b==="!")d.state=v.SGML_DECL,d.sgmlDecl="";else if(!A(b))if(M(_,b))d.state=v.OPEN_TAG,d.tagName=b;else if(b==="/")d.state=v.CLOSE_TAG,d.tagName="";else if(b==="?")d.state=v.PROC_INST,d.procInstName=d.procInstBody="";else{if(P(d,"Unencoded <"),d.startTagPosition+1<d.position){var re=d.position-d.startTagPosition;b=new Array(re).join(" ")+b}d.textNode+="<"+b,d.state=v.TEXT}continue;case v.SGML_DECL:if(d.sgmlDecl+b==="--"){d.state=v.COMMENT,d.comment="",d.sgmlDecl="";continue}d.doctype&&d.doctype!==!0&&d.sgmlDecl?(d.state=v.DOCTYPE_DTD,d.doctype+="<!"+d.sgmlDecl+b,d.sgmlDecl=""):p.test(d.sgmlDecl+b)?(ae(d,"onopencdata"),d.state=v.CDATA,d.sgmlDecl="",d.cdata=""):u.test(d.sgmlDecl+b)?(d.state=v.DOCTYPE,(d.doctype||d.sawRoot)&&P(d,"Inappropriately located doctype declaration"),d.doctype="",d.sgmlDecl=""):b===">"?(ae(d,"onsgmldeclaration",d.sgmlDecl),d.sgmlDecl="",d.state=v.TEXT):(E(b)&&(d.state=v.SGML_DECL_QUOTED),d.sgmlDecl+=b);continue;case v.SGML_DECL_QUOTED:b===d.q&&(d.state=v.SGML_DECL,d.q=""),d.sgmlDecl+=b;continue;case v.DOCTYPE:b===">"?(d.state=v.TEXT,ae(d,"ondoctype",d.doctype),d.doctype=!0):(d.doctype+=b,b==="["?d.state=v.DOCTYPE_DTD:E(b)&&(d.state=v.DOCTYPE_QUOTED,d.q=b));continue;case v.DOCTYPE_QUOTED:d.doctype+=b,b===d.q&&(d.q="",d.state=v.DOCTYPE);continue;case v.DOCTYPE_DTD:b==="]"?(d.doctype+=b,d.state=v.DOCTYPE):b==="<"?(d.state=v.OPEN_WAKA,d.startTagPosition=d.position):E(b)?(d.doctype+=b,d.state=v.DOCTYPE_DTD_QUOTED,d.q=b):d.doctype+=b;continue;case v.DOCTYPE_DTD_QUOTED:d.doctype+=b,b===d.q&&(d.state=v.DOCTYPE_DTD,d.q="");continue;case v.COMMENT:b==="-"?d.state=v.COMMENT_ENDING:d.comment+=b;continue;case v.COMMENT_ENDING:b==="-"?(d.state=v.COMMENT_ENDED,d.comment=q(d.opt,d.comment),d.comment&&ae(d,"oncomment",d.comment),d.comment=""):(d.comment+="-"+b,d.state=v.COMMENT);continue;case v.COMMENT_ENDED:b!==">"?(P(d,"Malformed comment"),d.comment+="--"+b,d.state=v.COMMENT):d.doctype&&d.doctype!==!0?d.state=v.DOCTYPE_DTD:d.state=v.TEXT;continue;case v.CDATA:for(var ne=S-1;b&&b!=="]";)b=Pe(f,S++),b&&d.trackPosition&&(d.position++,b===`
`?(d.line++,d.column=0):d.column++);d.cdata+=f.substring(ne,S-1),b==="]"&&(d.state=v.CDATA_ENDING);continue;case v.CDATA_ENDING:b==="]"?d.state=v.CDATA_ENDING_2:(d.cdata+="]"+b,d.state=v.CDATA);continue;case v.CDATA_ENDING_2:b===">"?(d.cdata&&ae(d,"oncdata",d.cdata),ae(d,"onclosecdata"),d.cdata="",d.state=v.TEXT):b==="]"?d.cdata+="]":(d.cdata+="]]"+b,d.state=v.CDATA);continue;case v.PROC_INST:b==="?"?d.state=v.PROC_INST_ENDING:A(b)?d.state=v.PROC_INST_BODY:d.procInstName+=b;continue;case v.PROC_INST_BODY:if(!d.procInstBody&&A(b))continue;b==="?"?d.state=v.PROC_INST_ENDING:d.procInstBody+=b;continue;case v.PROC_INST_ENDING:if(b===">"){let $e={name:d.procInstName,body:d.procInstBody};Y(d,$e),ae(d,"onprocessinginstruction",$e),d.procInstName=d.procInstBody="",d.state=v.TEXT}else d.procInstBody+="?"+b,d.state=v.PROC_INST_BODY;continue;case v.OPEN_TAG:M(y,b)?d.tagName+=b:($(d),b===">"?ee(d):b==="/"?d.state=v.OPEN_TAG_SLASH:(A(b)||P(d,"Invalid character in tag name"),d.state=v.ATTRIB));continue;case v.OPEN_TAG_SLASH:b===">"?(ee(d,!0),Ie(d)):(P(d,"Forward-slash in opening tag not followed by >"),d.state=v.ATTRIB);continue;case v.ATTRIB:if(A(b))continue;b===">"?ee(d):b==="/"?d.state=v.OPEN_TAG_SLASH:M(_,b)?(d.attribName=b,d.attribValue="",d.state=v.ATTRIB_NAME):P(d,"Invalid attribute name");continue;case v.ATTRIB_NAME:b==="="?d.state=v.ATTRIB_VALUE:b===">"?(P(d,"Attribute without value"),d.attribValue=d.attribName,ie(d),ee(d)):A(b)?d.state=v.ATTRIB_NAME_SAW_WHITE:M(y,b)?d.attribName+=b:P(d,"Invalid attribute name");continue;case v.ATTRIB_NAME_SAW_WHITE:if(b==="=")d.state=v.ATTRIB_VALUE;else{if(A(b))continue;P(d,"Attribute without value"),d.tag.attributes[d.attribName]="",d.attribValue="",ae(d,"onattribute",{name:d.attribName,value:""}),d.attribName="",b===">"?ee(d):M(_,b)?(d.attribName=b,d.state=v.ATTRIB_NAME):(P(d,"Invalid attribute name"),d.state=v.ATTRIB)}continue;case v.ATTRIB_VALUE:if(A(b))continue;E(b)?(d.q=b,d.state=v.ATTRIB_VALUE_QUOTED):(d.opt.unquotedAttributeValues||se(d,"Unquoted attribute value"),d.state=v.ATTRIB_VALUE_UNQUOTED,d.attribValue=b);continue;case v.ATTRIB_VALUE_QUOTED:if(b!==d.q){b==="&"?d.state=v.ATTRIB_VALUE_ENTITY_Q:d.attribValue+=b;continue}ie(d),d.q="",d.state=v.ATTRIB_VALUE_CLOSED;continue;case v.ATTRIB_VALUE_CLOSED:A(b)?d.state=v.ATTRIB:b===">"?ee(d):b==="/"?d.state=v.OPEN_TAG_SLASH:M(_,b)?(P(d,"No whitespace between attributes"),d.attribName=b,d.attribValue="",d.state=v.ATTRIB_NAME):P(d,"Invalid attribute name");continue;case v.ATTRIB_VALUE_UNQUOTED:if(!T(b)){b==="&"?d.state=v.ATTRIB_VALUE_ENTITY_U:d.attribValue+=b;continue}ie(d),b===">"?ee(d):d.state=v.ATTRIB;continue;case v.CLOSE_TAG:if(d.tagName)b===">"?Ie(d):M(y,b)?d.tagName+=b:d.script?(d.script+="</"+d.tagName+b,d.tagName="",d.state=v.SCRIPT):(A(b)||P(d,"Invalid tagname in closing tag"),d.state=v.CLOSE_TAG_SAW_WHITE);else{if(A(b))continue;R(_,b)?d.script?(d.script+="</"+b,d.state=v.SCRIPT):P(d,"Invalid tagname in closing tag."):d.tagName=b}continue;case v.CLOSE_TAG_SAW_WHITE:if(A(b))continue;b===">"?Ie(d):P(d,"Invalid characters in closing tag");continue;case v.TEXT_ENTITY:case v.ATTRIB_VALUE_ENTITY_Q:case v.ATTRIB_VALUE_ENTITY_U:var ue,ge;switch(d.state){case v.TEXT_ENTITY:ue=v.TEXT,ge="textNode";break;case v.ATTRIB_VALUE_ENTITY_Q:ue=v.ATTRIB_VALUE_QUOTED,ge="attribValue";break;case v.ATTRIB_VALUE_ENTITY_U:ue=v.ATTRIB_VALUE_UNQUOTED,ge="attribValue";break}if(b===";"){var ke=Xe(d);d.opt.unparsedEntities&&!Object.values(t.XML_ENTITIES).includes(ke)?((d.entityCount+=1)>d.opt.maxEntityCount&&se(d,"Parsed entity count exceeds max entity count"),(d.entityDepth+=1)>d.opt.maxEntityDepth&&se(d,"Parsed entity depth exceeds max entity depth"),d.entity="",d.state=ue,d.write(ke),d.entityDepth-=1):(d[ge]+=ke,d.entity="",d.state=ue)}else M(d.entity.length?N:k,b)?d.entity+=b:(P(d,"Invalid character in entity name"),d[ge]+="&"+d.entity+b,d.entity="",d.state=ue);continue;default:throw new Error(d,"Unknown state: "+d.state)}return d.position>=d.bufferCheckPosition&&n(d),d}String.fromCodePoint||(function(){var f=String.fromCharCode,d=Math.floor,S=function(){var b=16384,re=[],ne,ue,ge=-1,ke=arguments.length;if(!ke)return"";for(var $e="";++ge<ke;){var Ee=Number(arguments[ge]);if(!isFinite(Ee)||Ee<0||Ee>1114111||d(Ee)!==Ee)throw RangeError("Invalid code point: "+Ee);Ee<=65535?re.push(Ee):(Ee-=65536,ne=(Ee>>10)+55296,ue=Ee%1024+56320,re.push(ne,ue)),(ge+1===ke||re.length>b)&&($e+=f.apply(null,re),re.length=0)}return $e};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:S,configurable:!0,writable:!0}):String.fromCodePoint=S})()})(typeof Zi>"u"?Zi.sax={}:Zi)});function lb(t){return t.charCodeAt(0)===65279?t.slice(1):t}function cb(t){return t.toLowerCase()}function db(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===0}function Qi(t,e,r){for(let n of t)e=n(e,r);return e}function Uo(t,e,r){let n=Object.create(null);n.value=r,n.writable=!0,n.enumerable=!0,n.configurable=!0,Object.defineProperty(t,e,n)}function ub(t,e){let r={};return typeof e=="object"&&(r=e),new $l(r).parseStringPromise(t)}async function Hh(t,e={}){return await ub(t,e)}var Wo,Bh,$h,ib,sb,Lr,zh,$l,Uh=vr(()=>{Wo=Lt(Th(),1),Bh=Lt(Dh(),1),$h=Lt(Fh(),1),ib=Object.defineProperty,sb=(t,e,r)=>e in t?ib(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Lr=(t,e,r)=>sb(t,typeof e!="symbol"?e+"":e,r);zh={.1:{explicitCharkey:!1,trim:!0,normalize:!0,normalizeTags:!1,attrkey:"@",charkey:"#",explicitArray:!1,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!1,validator:null,xmlns:!1,explicitChildren:!1,childkey:"@@",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,emptyTag:""},.2:{explicitCharkey:!1,trim:!1,normalize:!1,normalizeTags:!1,attrkey:"$",charkey:"_",explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!0,validator:null,xmlns:!1,explicitChildren:!1,preserveChildrenOrder:!1,childkey:"$$",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,rootName:"root",xmldec:{version:"1.0",encoding:"UTF-8",standalone:!0},doctype:null,renderOpts:{pretty:!0,indent:"  ",newline:`
`},headless:!1,chunkSize:1e4,emptyTag:"",cdata:!1}};$l=class extends Bh.EventEmitter{constructor(e){super(),Lr(this,"options"),Lr(this,"remaining",""),Lr(this,"saxParser"),Lr(this,"resultObject",null),Lr(this,"EXPLICIT_CHARKEY"),Lr(this,"errThrown",!1),Lr(this,"ended",!1),Lr(this,"processAsync",()=>{try{if(this.remaining.length<=this.options.chunkSize){let r=this.remaining;this.remaining="",this.saxParser=this.saxParser.write(r),this.saxParser.close()}else{let r=this.remaining.slice(0,this.options.chunkSize);this.remaining=this.remaining.slice(this.options.chunkSize),this.saxParser=this.saxParser.write(r),setTimeout(this.processAsync,0)}}catch(r){this.errThrown||(this.errThrown=!0,this.emit("error",r))}}),Lr(this,"assignOrPush",(r,n,o)=>{n in r?(Array.isArray(r[n])||Uo(r,n,[r[n]]),r[n].push(o)):this.options.explicitArray?Uo(r,n,[o]):Uo(r,n,o)}),Lr(this,"reset",()=>{this.removeAllListeners(),this.saxParser=$h.default.parser(this.options.strict,{trim:!1,normalize:!1,xmlns:this.options.xmlns}),this.errThrown=!1,this.saxParser.onerror=i=>{this.saxParser.resume(),this.errThrown||(this.errThrown=!0,this.emit("error",i))},this.saxParser.onend=()=>{this.ended||(this.ended=!0,this.emit("end",this.resultObject))},this.ended=!1,this.EXPLICIT_CHARKEY=this.options.explicitCharkey,this.resultObject=null;let r=[],n=this.options.attrkey,o=this.options.charkey;this.saxParser.onopentag=i=>{let s={};s[o]="",this.options.ignoreAttrs||Object.keys(i.attributes).forEach(l=>{!(n in s)&&!this.options.mergeAttrs&&(s[n]={});let c=this.options.attrValueProcessors?Qi(this.options.attrValueProcessors,i.attributes[l],l):i.attributes[l],h=this.options.attrNameProcessors?Qi(this.options.attrNameProcessors,l):l;this.options.mergeAttrs?this.assignOrPush(s,h,c):Uo(s[n],h,c)}),s["#name"]=this.options.tagNameProcessors?Qi(this.options.tagNameProcessors,i.name):i.name,this.options.xmlns&&(s[this.options.xmlnskey]={uri:i.uri,local:i.local}),r.push(s)},this.saxParser.onclosetag=()=>{let i=r.pop(),s=i["#name"];(!this.options.explicitChildren||!this.options.preserveChildrenOrder)&&delete i["#name"];let l;i.cdata===!0&&(l=i.cdata,delete i.cdata);let c=r[r.length-1],h="";if(i[o].match(/^\s*$/)&&!l?(h=i[o],delete i[o]):(this.options.trim&&(i[o]=i[o].trim()),this.options.normalize&&(i[o]=i[o].replace(/\s{2,}/g," ").trim()),i[o]=this.options.valueProcessors?Qi(this.options.valueProcessors,i[o],s):i[o],Object.keys(i).length===1&&o in i&&!this.EXPLICIT_CHARKEY&&(i=i[o])),db(i)&&(typeof this.options.emptyTag=="function"?i=this.options.emptyTag():i=this.options.emptyTag!==""?this.options.emptyTag:h),this.options.validator){let p=`/${r.map(u=>u["#name"]).concat(s).join("/")}`;(()=>{try{i=this.options.validator(p,c&&c[s],i)}catch(u){this.emit("error",u)}})()}if(this.options.explicitChildren&&!this.options.mergeAttrs&&typeof i=="object")if(this.options.preserveChildrenOrder){if(c){c[this.options.childkey]=c[this.options.childkey]||[];let p={};Object.keys(i).forEach(u=>{Uo(p,u,i[u])}),c[this.options.childkey].push(p),delete i["#name"],Object.keys(i).length===1&&o in i&&!this.EXPLICIT_CHARKEY&&(i=i[o])}}else{let p={};this.options.attrkey in i&&(p[this.options.attrkey]=i[this.options.attrkey],delete i[this.options.attrkey]),!this.options.charsAsChildren&&this.options.charkey in i&&(p[this.options.charkey]=i[this.options.charkey],delete i[this.options.charkey]),Object.getOwnPropertyNames(i).length>0&&(p[this.options.childkey]=i),i=p}if(r.length>0)this.assignOrPush(c,s,i);else{if(this.options.explicitRoot){let p=i,u={};Uo(u,s,p),i=u}this.resultObject=i,this.ended=!0,this.emit("end",this.resultObject)}};let a=i=>{let s=r[r.length-1];if(s&&(s[o]+=i,this.options.explicitChildren&&this.options.preserveChildrenOrder&&this.options.charsAsChildren&&(this.options.includeWhiteChars||i.replace(/\\n/g,"").trim()!==""))){s[this.options.childkey]=s[this.options.childkey]||[];let l={"#name":"__text__"};l[o]=i,this.options.normalize&&(l[o]=l[o].replace(/\s{2,}/g," ").trim()),s[this.options.childkey].push(l)}return s};this.saxParser.ontext=a,this.saxParser.oncdata=i=>{let s=a(i);s&&(s.cdata=!0)}}),Lr(this,"parseString",(r,n)=>{n&&typeof n=="function"&&(this.on("end",o=>{this.reset(),n(null,o)}),this.on("error",o=>{this.reset(),n(o)}));try{return r=r.toString(),r.trim()===""?(this.emit("end",null),!0):(r=lb(r),this.options.async?(this.remaining=r,setTimeout(this.processAsync,0),this.saxParser):this.saxParser.write(r).close())}catch(o){if(!this.errThrown&&!this.ended)this.emit("error",o),this.errThrown=!0;else if(this.ended)throw o}}),Lr(this,"parseStringPromise",r=>new Promise((n,o)=>{this.parseString(r,(a,i)=>{a?o(a):n(i)})})),this.options={},Object.keys(zh["0.2"]).forEach(r=>{this.options[r]=zh["0.2"][r]}),e&&Object.keys(e).forEach(r=>{this.options[r]=e[r]}),this.options.xmlns&&(this.options.xmlnskey=`${this.options.attrkey}ns`),this.options.normalizeTags&&(this.options.tagNameProcessors||(this.options.tagNameProcessors=[]),this.options.tagNameProcessors.unshift(cb)),this.reset()}}});function Wh(t){return t.includes("&")?t.replace(/&(#x[\dA-Fa-f]+|#\d+|[a-zA-Z]+);/g,(e,r)=>r.startsWith("#x")?String.fromCodePoint(Number.parseInt(r.slice(2),16)):r.startsWith("#")?String.fromCodePoint(Number.parseInt(r.slice(1),10)):hb[e]||e):t}function fb(t){let e=t.slice(0,12),r=Array.from(e).map(n=>n.toString(16).padStart(2,"0")).join("");for(let[n,o]of Object.entries(pb))if(r.startsWith(n))return o;return"unknown"}function ts(t,e,r,n){return URL.createObjectURL(new Blob([t],{type:e}))}function Yh(t){let e="";return e=t.name??"",e}function Nb(t){return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}async function Zh(t){return t instanceof Uint8Array?Nb(t):await t.arrayBuffer()}function ur(t){let e=t.byteLength,r=e===4?"getUint32":e===2?"getUint16":"getUint8";return new DataView(t)[r](0)}function Fr(t,e){let r={};for(let n in t){let[o,a,i]=t[n];r[n]=i==="string"?Oa(e.slice(o,o+a)):ur(e.slice(o,o+a))}return r}function La(t){let e=t.reduce((o,a)=>o+a.length,0),r=new t[0].constructor(e),n=0;for(let o of t)r.set(o,n),n+=o.length;return r}function Ji(t,e=0){let r=0,n=0;for(let o of t.subarray(e,e+4))if(r=r<<7|(o&127)>>>0,n++,o&128)break;return{value:r,length:n}}function Cb(t){let e=0;for(let r of t.subarray(-4))r&128&&(e=0),e=e<<7|r&127;return e}function Qh(t){let e=0;for(;t>0;t=t>>1)(t&1)===1&&e++;return e}function Ib(t){let e=0;for(;(t&1)===0;)t=t>>1,e++;return e}function Rb(t){let e=[];for(let r=0;r<t.length;r++){let n=t[r];if(n===0)e.push(0);else if(n<=8)for(let o of t.subarray(r+1,(r+=n)+1))e.push(o);else if(n<=127)e.push(n);else if(n<=191){let o=n<<8|t[r+++1],a=(o&16383)>>>3,i=(o&7)+3;for(let s=0;s<i;s++)e.push(e[e.length-a])}else e.push(32,n^128)}return Uint8Array.from(e)}function Mb(t,e){let r=e(t.huffcdic),{magic:n,offset1:o,offset2:a}=Fr(_b,r);if(n!=="HUFF")throw new Error("Invalid HUFF record");let i=Array.from({length:256},(h,p)=>o+p*4).map(h=>ur(r.slice(h,h+4))).map(h=>[h&128,h&31,h>>>8]),s=[[0,0],...Array.from({length:32},(h,p)=>a+p*8).map(h=>[ur(r.slice(h,h+4)),ur(r.slice(h+4,h+8))])],l=[];for(let h=1;h<t.numHuffcdic;h++){let p=e(t.huffcdic+h),u=Fr(Sb,p);if(u.magic!=="CDIC")throw new Error("Invalid CDIC record");let g=Math.min(1<<u.codeLength,u.numEntries-l.length),w=p.slice(u.length);for(let m=0;m<g;m++){let _=ur(w.slice(m*2,m*2+2)),y=ur(w.slice(_,_+2)),k=y&32767,N=y&32768,A=new Uint8Array(w.slice(_+2,_+2+k));l.push([A,N])}}let c=h=>{let p=new Uint8Array,u=h.byteLength*8;for(let g=0;g<u;){let w=Number(Pb(h,g)),[m,_,y]=i[w>>>24];if(!m){for(;w>>>32-_<s[_][0];)_+=1;y=s[_][1]}if(g+=_,g>u)break;let k=y-(w>>>32-_),[N,A]=l[k];A||(N=c(N),l[k]=[N,!0]),p=La([p,N])}return p};return c}function Pb(t,e){let r=e>>3,n=e+32,o=n>>3,a=0n;for(let i=r;i<=o;i++)a=a<<8n|BigInt(t[i]??0);return a>>8n-BigInt(n&7)&0xFFFFFFFFn}function Ob(t,e){let{magic:r,count:n}=Fr(wb,t);if(r!=="EXTH")throw new Error("Invalid EXTH header");let o=Wl(e.toString()),a={},i=12;for(let s=0;s<n;s++){let l=ur(t.slice(i,i+4)),c=ur(t.slice(i+4,i+8));if(l in qh){let[h,p,u]=qh[l],g=t.slice(i+8,i+c),w=p==="uint"?ur(g):o.decode(g);u?(a[h]??(a[h]=[]),a[h].push(w)):a[h]=w}i+=c}return a}function Lb(t){let e=t&1,r=Qh(t>>>1);return n=>{for(let o=0;o<r;o++){let a=Cb(n);n=n.subarray(0,-a)}if(e){let o=(n[n.length-1]&3)+1;n=n.subarray(0,-o)}return n}}function Db(t){let{flags:e,dataStart:r,keyLength:n,keyStart:o}=Fr(Eb,t),a=new Uint8Array(t.slice(r));if(e&2){let i=n===16?1024:1040,s=new Uint8Array(t.slice(o,o+n)),l=Math.min(i,a.length);for(let c=0;c<l;c++)a[c]=a[c]^s[c%s.length]}if(e&1)try{return ju(a)}catch(i){console.warn(i),console.warn("Failed to decompress font")}return a}function es(t,e){let r=e(t),n=Fr(Gh,r);if(n.magic!=="INDX")throw new Error("Invalid INDX record");let o=Wl(n.encoding.toString()),a={},i=0;for(let u=0;u<n.numCncx;u++){let g=e(t+n.numRecords+u+1),w=new Uint8Array(g);for(let m=0;m<w.byteLength;){let _=m,{value:y,length:k}=Ji(w,m);m+=k;let N=g.slice(m,m+y);m+=y,a[i+_]=o.decode(N)}i+=65536}let s=r.slice(n.length),l=Fr(kb,s);if(l.magic!=="TAGX")throw new Error("Invalid TAGX section");let c=(l.length-12)/4,h=Array.from({length:c},(u,g)=>new Uint8Array(s.slice(12+g*4,12+g*4+4))),p=[];for(let u=0;u<n.numRecords;u++){let g=e(t+1+u),w=new Uint8Array(g),m=Fr(Gh,g);if(m.magic!=="INDX")throw new Error("Invalid INDX record");for(let _=0;_<m.numRecords;_++){let y=m.idxt+4+2*_,k=ur(g.slice(y,y+2)),N=ur(g.slice(k,k+1)),A=Oa(g.slice(k+1,k+1+N)),E=[],T=k+1+N,M=0,R=T+l.numControlBytes;for(let[O,L,F,U]of h){if(U&1){M++;continue}let J=T+M,Y=ur(g.slice(J,J+1))&F;if(Y===F)if(Qh(F)>1){let{value:ae,length:fe}=Ji(w,R);E.push([O,0,ae,L]),R+=fe}else E.push([O,1,0,L]);else E.push([O,Y>>Ib(F),0,L])}let v={};for(let[O,L,F,U]of E){let J=[];if(L!==0)for(let Y=0;Y<L*U;Y++){let{value:ae,length:fe}=Ji(w,R);J.push(ae),R+=fe}else{let Y=0;for(;Y<F;){let{value:ae,length:fe}=Ji(w,R);J.push(ae),R+=fe,Y+=fe}}v[O]=J}p.push({name:A,tagMap:v})}}return{table:p,cncx:a}}function Fb(t,e){let{table:r,cncx:n}=es(t,e),o=r.map(({tagMap:i},s)=>({index:s,offset:i[1]?.[0],size:i[2]?.[0],label:n[i[3]?.[0]]??"",headingLevel:i[4]?.[0],pos:i[6],parent:i[21]?.[0],firstChild:i[22]?.[0],lastChild:i[23]?.[0]})),a=i=>(i.firstChild==null||(i.children=o.filter(s=>s.parent===i.index).map(a)),i);return o.filter(i=>i.headingLevel===0).map(a)}function Xh(t=0,e=0){return`kindle:pos:fid:${t.toString(32).toUpperCase().padStart(4,"0")}:off:${e.toString(32).toUpperCase().padStart(10,"0")}`}function Vh(t){let e=t.match(Bb);if(!e)return"";let[,r,n]=e;return`[${r}="${n}"]`}function Hb(t){let[e,r]=t.match($b).slice(1);return{fid:Number.parseInt(e,32),off:Number.parseInt(r,32)}}async function jl(t,e){let r=new Hl(t,e);return await r.innerLoadFile(),await r.innerInit(),r}async function Gl(t,e){let r=new Ul(t,e);return await r.innerLoadFile(),await r.innerInit(),r}var hb,jh,pb,gb,mb,bb,xb,vb,yb,wb,Gh,kb,_b,Sb,Tb,Eb,Ab,Oa,Wl,qh,zb,Bb,$b,Kh,Ub,Wb,dr,rs,jb,Gb,qt,Hl,qb,Xb,Dr,Ul,Jh=vr(()=>{gl();Uh();hb={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};jh={XML:"application/xml",XHTML:"application/xhtml+xml",HTML:"text/html",CSS:"text/css",SVG:"image/svg+xml"},pb={ffd8ff:"image/jpeg","89504e47":"image/png",47494638:"image/gif","424d":"image/bmp","3c737667":"image/svg+xml","00000018":"video/mp4","00000020":"video/mp4","1a45dfa3":"video/mkv","1f43b675":"video/webm",494433:"audio/mp3",52494646:"audio/wav","4f676753":"audio/ogg","00010000":"font/ttf",74727565:"font/ttf","4f54544f":"font/otf","774f4646":"font/woff","774f4632":"font/woff2","504c":"font/eot"};gb={1252:"windows-1252",65001:"utf-8"},mb={1:["ar","ar-SA","ar-IQ","ar-EG","ar-LY","ar-DZ","ar-MA","ar-TN","ar-OM","ar-YE","ar-SY","ar-JO","ar-LB","ar-KW","ar-AE","ar-BH","ar-QA"],2:["bg"],3:["ca"],4:["zh","zh-TW","zh-CN","zh-HK","zh-SG"],5:["cs"],6:["da"],7:["de","de-DE","de-CH","de-AT","de-LU","de-LI"],8:["el"],9:["en","en-US","en-GB","en-AU","en-CA","en-NZ","en-IE","en-ZA","en-JM",null,"en-BZ","en-TT","en-ZW","en-PH"],10:["es","es-ES","es-MX",null,"es-GT","es-CR","es-PA","es-DO","es-VE","es-CO","es-PE","es-AR","es-EC","es-CL","es-UY","es-PY","es-BO","es-SV","es-HN","es-NI","es-PR"],11:["fi"],12:["fr","fr-FR","fr-BE","fr-CA","fr-CH","fr-LU","fr-MC"],13:["he"],14:["hu"],15:["is"],16:["it","it-IT","it-CH"],17:["ja"],18:["ko"],19:["nl","nl-NL","nl-BE"],20:["no","nb","nn"],21:["pl"],22:["pt","pt-BR","pt-PT"],23:["rm"],24:["ro"],25:["ru"],26:["hr",null,"sr"],27:["sk"],28:["sq"],29:["sv","sv-SE","sv-FI"],30:["th"],31:["tr"],32:["ur"],33:["id"],34:["uk"],35:["be"],36:["sl"],37:["et"],38:["lv"],39:["lt"],41:["fa"],42:["vi"],43:["hy"],44:["az"],45:["eu"],46:["hsb"],47:["mk"],48:["st"],49:["ts"],50:["tn"],52:["xh"],53:["zu"],54:["af"],55:["ka"],56:["fo"],57:["hi"],58:["mt"],59:["se"],62:["ms"],63:["kk"],65:["sw"],67:["uz",null,"uz-UZ"],68:["tt"],69:["bn"],70:["pa"],71:["gu"],72:["or"],73:["ta"],74:["te"],75:["kn"],76:["ml"],77:["as"],78:["mr"],79:["sa"],82:["cy","cy-GB"],83:["gl","gl-ES"],87:["kok"],97:["ne"],98:["fy"]},bb={name:[0,32,"string"],type:[60,4,"string"],creator:[64,4,"string"],numRecords:[76,2,"uint"]},xb={compression:[0,2,"uint"],numTextRecords:[8,2,"uint"],recordSize:[10,2,"uint"],encryption:[12,2,"uint"]},vb={magic:[16,4,"string"],length:[20,4,"uint"],type:[24,4,"uint"],encoding:[28,4,"uint"],uid:[32,4,"uint"],version:[36,4,"uint"],titleOffset:[84,4,"uint"],titleLength:[88,4,"uint"],localeRegion:[94,1,"uint"],localeLanguage:[95,1,"uint"],resourceStart:[108,4,"uint"],huffcdic:[112,4,"uint"],numHuffcdic:[116,4,"uint"],exthFlag:[128,4,"uint"],trailingFlags:[240,4,"uint"],indx:[244,4,"uint"]},yb={resourceStart:[108,4,"uint"],fdst:[192,4,"uint"],numFdst:[196,4,"uint"],frag:[248,4,"uint"],skel:[252,4,"uint"],guide:[260,4,"uint"]},wb={magic:[0,4,"string"],length:[4,4,"uint"],count:[8,4,"uint"]},Gh={magic:[0,4,"string"],length:[4,4,"uint"],type:[8,4,"uint"],idxt:[20,4,"uint"],numRecords:[24,4,"uint"],encoding:[28,4,"uint"],language:[32,4,"uint"],total:[36,4,"uint"],ordt:[40,4,"uint"],ligt:[44,4,"uint"],numLigt:[48,4,"uint"],numCncx:[52,4,"uint"]},kb={magic:[0,4,"string"],length:[4,4,"uint"],numControlBytes:[8,4,"uint"]},_b={magic:[0,4,"string"],offset1:[8,4,"uint"],offset2:[12,4,"uint"]},Sb={magic:[0,4,"string"],length:[4,4,"uint"],numEntries:[8,4,"uint"],codeLength:[12,4,"uint"]},Tb={magic:[0,4,"string"],numEntries:[8,4,"uint"]},Eb={flags:[8,4,"uint"],dataStart:[12,4,"uint"],keyLength:[16,4,"uint"],keyStart:[20,4,"uint"]};Ab=new TextDecoder,Oa=t=>Ab.decode(t);Wl=t=>new TextDecoder(gb[t]);qh={100:["creator","string",!0],101:["publisher","string",!1],103:["description","string",!1],104:["isbn","string",!1],105:["subject","string",!0],106:["date","string",!1],108:["contributor","string",!0],109:["rights","string",!1],110:["subjectCode","string",!0],112:["source","string",!0],113:["asin","string",!1],121:["boundary","uint",!1],122:["fixedLayout","string",!1],125:["numResources","uint",!1],126:["originalResolution","string",!1],127:["zeroGutter","string",!1],128:["zeroMargin","string",!1],129:["coverURI","string",!1],132:["regionMagnification","string",!1],201:["coverOffset","uint",!1],202:["thumbnailOffset","uint",!1],503:["title","string",!1],524:["language","string",!0],527:["pageProgressionDirection","string",!1]};zb=/<\s*(?:mbp:)?pagebreak[^>]*>/gi;Bb=/\s(id|name|aid)\s*=\s*['"]([^'"]*)['"]/i;$b=/kindle:pos:fid:(\w+):off:(\w+)/;Kh=/kindle:(flow|embed):(\w+)(?:\?mime=(\w+\/[-+.\w]+))?/,Ub=Object.defineProperty,Wb=(t,e,r)=>e in t?Ub(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,dr=(t,e,r)=>Wb(t,typeof e!="symbol"?e+"":e,r),rs=class{constructor(e,r){if(dr(this,"fileArrayBuffer"),dr(this,"recordsOffset"),dr(this,"recordsMagic"),dr(this,"start",0),dr(this,"pdbHeader"),dr(this,"mobiHeader"),dr(this,"palmdocHeader"),dr(this,"kf8Header"),dr(this,"exth"),dr(this,"isKf8",!1),dr(this,"resourceStart"),dr(this,"decoder"),dr(this,"encoder"),dr(this,"removeTrailingEntries"),dr(this,"decompress"),this.fileArrayBuffer=e,this.parsePdbHeader(),this.parseFirstRecord(this.loadRecord(0)),this.resourceStart=this.mobiHeader.resourceStart,!this.isKf8){let n=this.exth.boundary??4294967295;if(n<4294967295){try{this.parseFirstRecord(this.loadRecord(n)),this.start=n,this.isKf8=!0}catch{console.warn("Failed to parse kf8 header.")}r.endsWith(".mobi")&&console.warn(`File "${r}" is a compatible file. Please change the file extension to .azw3 to make it parse correctly.`)}}this.setup()}decode(e){return this.decoder.decode(e)}encode(e){return this.encoder.encode(e)}pdbLoadRecord(e){let[r,n]=this.recordsOffset[e]??[0,0];return this.fileArrayBuffer.slice(r,n)}loadRecord(e){return this.pdbLoadRecord(this.start+e)}loadMagic(e){return this.recordsMagic[this.start+e]}loadTextBuffer(e){return this.decompress(this.removeTrailingEntries(new Uint8Array(this.loadRecord(e+1))))}loadResource(e){let r=this.pdbLoadRecord(this.resourceStart+e),n=Oa(r.slice(0,4)),o;return n==="FONT"?o=Db(r):n==="VIDE"||n==="AUDI"?o=new Uint8Array(r.slice(12)):o=new Uint8Array(r),{type:fb(o),raw:o}}getNCX(){let e=this.mobiHeader.indx;if(e<4294967295)return Fb(e,this.loadRecord.bind(this))}getMetadata(){let e=this.mobiHeader,r=this.exth;return{identifier:this.mobiHeader.uid.toString(),title:r?.title||e.title,author:r?.creator?.map(Wh)??[],publisher:r?.publisher??"",language:r?.language?.[0]??e.language,published:r?.date??"",description:r?.description??"",subject:r?.subject?.map(Wh)??[],rights:r?.rights??"",contributor:r?.contributor??[]}}getCoverImage(){let e=this.exth,r=Number(e.coverOffset??4294967295),n=Number(e.thumbnailOffset??4294967295),o=r<4294967295?r:n<4294967295?n:void 0;if(o)return this.loadResource(o)}parsePdbHeader(){let e=Fr(bb,this.fileArrayBuffer.slice(0,78));e.name=e.name.replace(/\0.*$/,""),this.pdbHeader=e;let r=this.fileArrayBuffer.slice(78,78+e.numRecords*8),n=Array.from({length:e.numRecords},(o,a)=>ur(r.slice(a*8,a*8+4)));this.recordsOffset=n.map((o,a)=>[o,n[a+1]]),this.recordsMagic=n.map(o=>Oa(this.fileArrayBuffer.slice(o,o+4)))}parseFirstRecord(e){this.palmdocHeader=Fr(xb,e.slice(0,16));let r=Fr(vb,e);if(r.magic!=="MOBI")throw new Error("Missing MOBI header");let{titleOffset:n,titleLength:o,localeLanguage:a,localeRegion:i}=r,s=mb[a.toString()]??[],l={title:Oa(e.slice(n,n+o)),language:s[i>>2]??s[0]??"unknown"};this.mobiHeader=Object.assign(r,l),this.kf8Header=r.version>=8?Fr(yb,e):void 0,this.isKf8=r.version>=8,this.exth=r.exthFlag&64?Ob(e.slice(r.length+16),r.encoding):void 0}setup(){this.decoder=Wl(this.mobiHeader.encoding.toString()),this.encoder=new TextEncoder;let e=this.palmdocHeader.compression;if(e===1)this.decompress=n=>n;else if(e===2)this.decompress=Rb;else if(e===17480)this.decompress=Mb(this.mobiHeader,this.loadRecord.bind(this));else throw new Error("Unsupported compression");let r=this.mobiHeader.trailingFlags;this.removeTrailingEntries=Lb(r)}},jb=Object.defineProperty,Gb=(t,e,r)=>e in t?jb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,qt=(t,e,r)=>Gb(t,typeof e!="symbol"?e+"":e,r);Hl=class{constructor(e,r="./images"){this.file=e,qt(this,"fileArrayBuffer"),qt(this,"mobiFile"),qt(this,"fileName",""),qt(this,"fdstTable",[]),qt(this,"fullRawLength",0),qt(this,"skelTable",[]),qt(this,"fragTable",[]),qt(this,"chapters",[]),qt(this,"toc",[]),qt(this,"fragmentOffsets",new Map),qt(this,"fragmentSelectors",new Map),qt(this,"rawHead",new Uint8Array),qt(this,"rawTail",new Uint8Array),qt(this,"lastLoadedHead",-1),qt(this,"lastLoadedTail",-1),qt(this,"resourceCache",new Map),qt(this,"chapterCache",new Map),qt(this,"idToChapter",new Map),qt(this,"resourceSaveDir","./images"),this.fileName=Yh(e),this.resourceSaveDir=r}getFileInfo(){return{fileName:this.fileName}}getMetadata(){return this.mobiFile.getMetadata()}getCoverImage(){if(this.resourceCache.has("cover"))return this.resourceCache.get("cover");let e=this.mobiFile.getCoverImage(),r="";return e&&(r=ts(e.raw,e.type,"cover",this.resourceSaveDir),this.resourceCache.set("cover",r)),r}getSpine(){return this.chapters}getToc(){return this.toc}async innerLoadFile(){this.fileArrayBuffer=await Zh(this.file),this.mobiFile=new rs(this.fileArrayBuffer,this.fileName)}async innerInit(){let e=this.mobiFile.loadRecord.bind(this.mobiFile),r=this.mobiFile.kf8Header,n=this.mobiFile.loadRecord(r.fdst),o=Fr(Tb,n);if(o.magic!=="FDST")throw new Error("Missing FDST record");let a=Array.from({length:o.numEntries},(u,g)=>12+g*8).map(u=>[ur(n.slice(u,u+4)),ur(n.slice(u+4,u+8))]);this.fdstTable=a,this.fullRawLength=a[a.length-1][1];let s=es(r.skel,e).table.map(({name:u,tagMap:g},w)=>({index:w,name:u,numFrag:g[1][0],offset:g[6][0],length:g[6][1]}));this.skelTable=s;let l=es(r.frag,e),c=l.table.map(({name:u,tagMap:g})=>({insertOffset:Number.parseInt(u),selector:l.cncx[g[2][0]],index:g[4][0],offset:g[6][0],length:g[6][1]}));this.fragTable=c;let h=this.skelTable.reduce((u,g,w)=>{let m=u[u.length-1],_=m?.fragEnd??0,y=_+g.numFrag,k=this.fragTable.slice(_,y),N=g.length+k.reduce((T,M)=>T+M.length,0),A=(m?.totalLength??0)+N,E={id:w.toString(),skel:g,frags:k,fragEnd:y,length:N,totalLength:A};return this.idToChapter.set(w,E),u.push(E),u},[]);this.chapters=h;let p=this.mobiFile.getNCX();if(p){let u=({label:g,pos:w,children:m})=>{let[_,y]=w,k=Xh(_,y),N=this.fragmentOffsets.get(_);return N?N.push(y):this.fragmentOffsets.set(_,[y]),{label:g,href:k,children:m?.map(u)}};this.toc=p.map(u)}}getGuide(){let e=this.mobiFile.kf8Header.guide;if(e<4294967295){let r=this.mobiFile.loadRecord.bind(this.mobiFile),{table:n,cncx:o}=es(e,r);return n.map(({name:a,tagMap:i})=>({label:o[i[1][0]]??"",type:a?.split(/\s/),href:Xh(i[6]?.[0]??i[3]?.[0])}))}}loadRaw(e,r){let n=r-this.rawHead.length,o=this.fullRawLength===0?1/0:this.fullRawLength-this.rawTail.length-e;if(n<0||n<o){for(;this.rawHead.length<r;){this.lastLoadedHead++;let i=this.lastLoadedHead,s=this.mobiFile.loadTextBuffer(i);this.rawHead=La([this.rawHead,s])}return this.rawHead.slice(e,r)}for(;this.fullRawLength-this.rawTail.length>e;){this.lastLoadedTail++;let i=this.mobiFile.palmdocHeader.numTextRecords-1-this.lastLoadedTail,s=this.mobiFile.loadTextBuffer(i);this.rawTail=La([s,this.rawTail])}let a=this.fullRawLength-this.rawTail.length;return this.rawTail.slice(e-a,r-a)}loadText(e){let{skel:r,frags:n,length:o}=e,a=this.loadRaw(r.offset,r.offset+o),i=a.slice(0,r.length);for(let s of n){let l=s.insertOffset-r.offset,c=r.length+s.offset,h=a.slice(c,c+s.length);i=La([i.slice(0,l),h,i.slice(l)]);let p=this.fragmentOffsets.get(s.index);if(p)for(let u of p){let g=this.mobiFile.decode(h.buffer).slice(u),w=Vh(g);w&&this.cacheFragmentSelector(s.index,u,w)}}return this.mobiFile.decode(i.buffer)}loadChapter(e){let r=Number.parseInt(e);if(Number.isNaN(r))return;if(this.chapterCache.has(r))return this.chapterCache.get(r);let n=this.idToChapter.get(r);if(n){let o=this.replace(this.loadText(n));return this.chapterCache.set(r,o),o}}cacheFragmentSelector(e,r,n){let o=this.fragmentSelectors.get(e);if(o)o.set(r,n);else{let a=new Map;this.fragmentSelectors.set(e,a),a.set(r,n)}}loadFlow(e){if(e<4294967295)return this.loadRaw(this.fdstTable[e][0],this.fdstTable[e][1])}resolveHref(e){if(/^(?!blob|kindle)\w+:/i.test(e))return;let{fid:r,off:n}=Hb(e),o=this.chapters.find(w=>w.frags.some(m=>m.index===r));if(!o)return;let a=o.id,i=this.fragmentSelectors.get(r)?.get(n);if(i)return{id:a,selector:i};let{skel:s,frags:l}=o,c=l.find(w=>w.index===r),h=s.offset+s.length+c.offset,p=this.loadRaw(h,h+c.length),u=this.mobiFile.decode(p.buffer).slice(n),g=Vh(u);return this.cacheFragmentSelector(r,n,g),{id:a,selector:g}}replaceResources(e){return e.replace(new RegExp(Kh,"gi"),(r,n,o,a)=>{if(this.resourceCache.has(r))return this.resourceCache.get(r);let i=n==="flow"?this.loadFlow(Number.parseInt(o)):this.mobiFile.loadResource(Number.parseInt(o,36)-1).raw,s="";if(a===jh.CSS||a===jh.SVG){let c=this.mobiFile.decode(i?.buffer);s=this.replaceResources(c)}else s=i;let l=ts(s,a,o,this.resourceSaveDir);return this.resourceCache.set(r,l),l})}replace(e){let r=[],o=e.match(/<head[^>]*>([\s\S]*)<\/head>/i)[1].match(/<link[^>]*>/gi)??[];for(let s of o){let l=s.match(/href="([^"]*)"/i)[1],c=s.match(Kh)[2],h=this.replaceResources(l);r.push({id:c,href:h})}let a=e.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1];return{html:this.replaceResources(a),css:r}}destroy(){this.resourceCache.forEach(e=>{URL.revokeObjectURL(e)})}},qb=Object.defineProperty,Xb=(t,e,r)=>e in t?qb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Dr=(t,e,r)=>Xb(t,typeof e!="symbol"?e+"":e,r);Ul=class{constructor(e,r="./images"){this.file=e,Dr(this,"fileArrayBuffer"),Dr(this,"mobiFile"),Dr(this,"fileName",""),Dr(this,"chapters",[]),Dr(this,"idToChapter",new Map),Dr(this,"toc",[]),Dr(this,"resourceSaveDir","./images"),Dr(this,"chapterCache",new Map),Dr(this,"resourceCache",new Map),Dr(this,"recindexReg",/recindex=["']?(\d+)["']?/),Dr(this,"mediarecindexReg",/mediarecindex=["']?(\d+)["']?/),Dr(this,"fileposReg",/filepos=["']?(\d+)["']?/),this.fileName=Yh(e),this.resourceSaveDir=r}getFileInfo(){return{fileName:this.fileName}}getSpine(){return this.chapters}loadChapter(e){let r=Number.parseInt(e);if(Number.isNaN(r))return;if(this.chapterCache.has(r))return this.chapterCache.get(r);let n=this.idToChapter.get(r);if(!n)return;let o=this.replace(n.text);return this.chapterCache.set(r,o),o}getToc(){return this.toc}getCoverImage(){if(this.resourceCache.has("cover"))return this.resourceCache.get("cover");let e=this.mobiFile.getCoverImage(),r="";return e&&(r=ts(e.raw,e.type,"cover",this.resourceSaveDir),this.resourceCache.set("cover",r)),r}getMetadata(){return this.mobiFile.getMetadata()}async innerLoadFile(){this.fileArrayBuffer=await Zh(this.file),this.mobiFile=new rs(this.fileArrayBuffer,this.fileName)}async innerInit(){let{palmdocHeader:e}=this.mobiFile,r=[];for(let w=0;w<e.numTextRecords;w++)r.push(this.mobiFile.loadTextBuffer(w));let n=La(r),o=Array.from(n,w=>String.fromCharCode(w)).join(""),a=[],i=new Map,s=0,l=Array.from(o.matchAll(zb));l.unshift({index:0,input:"",groups:void 0,0:""});for(let w=0;w<l.length;w++){let m=l[w],_=m.index,y=m[0],k=l[w+1]?.index,N=o.slice(_+y.length,k),A=Uint8Array.from(N,M=>M.charCodeAt(0)),E=this.mobiFile.decode(A.buffer),T={id:String(s),text:E,start:_,end:k,size:A.length};a.push(T),i.set(s,T),s++}let c=a[a.length-1].text;a[a.length-1].text=c.slice(0,c.indexOf("</body>"));let h=a[0].text,p=h.indexOf("<body>");a[0].text=h.slice(p+6),this.chapters=a,this.idToChapter=i;let u=h.slice(0,p),g=this.findTocChapter(u);if(g){let w=`<wrapper>${g.text.replace(/filepos=(\d+)/gi,'filepos="$1"')}</wrapper>`,m=await Hh(w,{preserveChildrenOrder:!0,explicitChildren:!0,childkey:"children"}),_=[];this.parseNavMap(m.wrapper.children,_),this.toc=_}}findTocChapter(e){let r=/<reference.*\/>/g,n=e.match(r),o=/type="(.+?)"/,a=/filepos=(.*)/;if(n)for(let i of n){let s=i.match(o)?.[1].trim(),l=i.match(a)?.[1].trim();if(s==="toc"&&l){let c=Number.parseInt(l,10);return this.chapters.find(p=>p.end>c)}}}parseNavMap(e,r){for(let n of e){let o=n["#name"];if(o==="p"||o==="blockquote"){let a={label:"",href:""};if(n.a){let i=n.a[0],s=i._,l=Number(i.$.filepos);a={label:s,href:`filepos:${l}`},r.push(a)}(n.p||n.blockquote)&&(a.children=[],this.parseNavMap(n.children,a.children))}}}loadResource(e){if(this.resourceCache.has(String(e)))return this.resourceCache.get(String(e));let{type:r,raw:n}=this.mobiFile.loadResource(e-1),o=ts(n,r,String(e),this.resourceSaveDir);return this.resourceCache.set(String(e),o),o}replace(e){return e=e.replace(/<img[^>]*>/g,r=>{let n=r.match(this.recindexReg)[1],o=this.loadResource(Number.parseInt(n));return r.replace(this.recindexReg,`src="${o}"`)}),e=e.replace(/<(video|audio)[^>]*>/g,r=>{let n=r.match(this.recindexReg)[1],o=this.loadResource(Number.parseInt(n));r=r.replace(this.mediarecindexReg,`src="${o}"`);let a=r.match(this.recindexReg)?.[1];if(a){let i=this.loadResource(Number.parseInt(a));r=r.replace(this.recindexReg,`poster="${i}"`)}return r}),e=e.replace(/<a[^>]*>/g,r=>{let n=r.match(this.fileposReg);if(!n)return r;let o=n[1];return r.replace(this.fileposReg,`href="filepos:${o}"`)}),{html:e,css:[]}}resolveHref(e){let r=e.match(/filepos:(\d+)/);if(!r)return;let n=r[1],o=Number(n),a=this.chapters.find(i=>i.end>o);if(a)return{id:a.id,selector:`[id="filepos:${n}"]`}}destroy(){this.resourceCache.forEach(e=>{URL.revokeObjectURL(e)}),this.resourceCache.clear()}}});function ns(t,e,r){let n="";for(let o=0;o<r;o+=1){let a=t[e+o]??0;n+=a>=32&&a<127?String.fromCharCode(a):""}return n}function Da(t,e){return(t[e]??0)<<8|(t[e+1]??0)}function ep(t,e){return(t[e]??0)*16777216+((t[e+1]??0)<<16|(t[e+2]??0)<<8|(t[e+3]??0))>>>0}function mn(t,e){return(t[e+3]??0)*16777216+((t[e+2]??0)<<16|(t[e+1]??0)<<8|(t[e]??0))>>>0}function Kb(t){if(t.length<86)throw new Error("\u6587\u4EF6\u592A\u5C0F\uFF0C\u4E0D\u662F\u6709\u6548\u7684 MOBI/PalmDOC \u6587\u4EF6\u3002");let e=ns(t,60,4).trim(),r=ns(t,64,4).trim(),n=`${e}${r}`;if(n!=="BOOKMOBI"&&n!=="TEXtREAd")throw new Error("\u6587\u4EF6\u4E0D\u662F MOBI/PalmDOC \u683C\u5F0F\uFF08\u7F3A\u5C11 PDB \u6587\u4EF6\u5934\uFF09\u3002");let o=Da(t,76);if(o<1)throw new Error("MOBI \u8BB0\u5F55\u8868\u4E3A\u7A7A\u3002");if(78+o*8+2>t.length)throw new Error("MOBI \u8BB0\u5F55\u8868\u5DF2\u635F\u574F\u3002");let a=[];for(let m=0;m<o;m+=1){let _=ep(t,78+m*8);if(_<78||_>=t.length)throw new Error("MOBI \u8BB0\u5F55\u504F\u79FB\u65E0\u6548\uFF0C\u6587\u4EF6\u53EF\u80FD\u5DF2\u635F\u574F\u3002");if(a.length>0&&_<a[a.length-1])throw new Error("MOBI \u8BB0\u5F55\u987A\u5E8F\u65E0\u6548\u3002");a.push(_)}let i=a[0];if(i+16>t.length)throw new Error("MOBI \u6587\u4EF6\u5934\u5DF2\u635F\u574F\u3002");let s=Da(t,i),l=ep(t,i+4),c=Da(t,i+8),h=Da(t,i+10),p=Da(t,i+12);if(p!==0)throw new Error("\u8BE5 MOBI \u6587\u4EF6\u53D7 DRM \u4FDD\u62A4\uFF0C\u65E0\u6CD5\u6253\u5F00\u3002");if(![Vb,1,np,Xl].includes(s))throw new Error(`\u4E0D\u652F\u6301\u7684 MOBI \u538B\u7F29\u65B9\u5F0F\uFF08${s}\uFF09\u3002`);let u=0,g=65001,w=!1;return n==="BOOKMOBI"&&ns(t,i+16,4)==="MOBI"&&(u=mn(t,i+36),g=mn(t,i+28)||65001,w=u===8),{pdbType:n,numRecords:o,offsets:a,compression:s,textLength:l,recordCount:c,recordSize:h,encryption:p,version:u,encoding:g,isKf8:w}}function Yb(t,e,r){let n=e[r];if(n==null)return null;let o=e[r+1]??t.length;return o<=n?new Uint8Array(0):t.subarray(n,o)}function Zb(t){let e=t instanceof Uint8Array?t:new Uint8Array(t),r=[],n=0;for(;n<e.length;){let o=e[n];if(n+=1,o===0)r.push(0);else if(o<=8)for(let a=0;a<o&&n<e.length;a+=1)r.push(e[n]),n+=1;else if(o<=127)r.push(o);else if(o<=191){if(n>=e.length)break;let a=o<<8|e[n];n+=1;let i=a>>3&2047,s=(a&7)+3,l=r.length-i;for(let c=0;c<s;c+=1)r.push(l+c>=0?r[l+c]:0)}else r.push(32),r.push(o^128)}return Uint8Array.from(r)}function Qb(t){let e=0;for(let o of t)e+=o.length;let r=new Uint8Array(e),n=0;for(let o of t)r.set(o,n),n+=o.length;return r}function ql(t,e){let r=[];e&&r.push(e),r.push("utf-8","gb18030","windows-1252");for(let n of r)try{return new TextDecoder(n,{fatal:!0}).decode(t)}catch{}return new TextDecoder("utf-8").decode(t)}function Jb(t,e){let r=e.recordCount>0?e.recordCount:e.numRecords-1,n=[];for(let a=1;a<=r;a+=1){let i=Yb(t,e.offsets,a);if(!i)break;if(e.compression===Xl)throw new Error("\u8BE5 MOBI \u4F7F\u7528 HUFF/CDIC \u538B\u7F29\uFF0C\u5185\u7F6E\u89E3\u6790\u5668\u65E0\u6CD5\u5904\u7406\u3002");n.push(e.compression===np?Zb(i):i)}if(n.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u6587\u672C\u5185\u5BB9\u3002");let o=Qb(n);return e.textLength>0&&e.textLength<=o.length&&(o=o.subarray(0,e.textLength)),o}function e0(t,e){let r={title:"",author:"",language:""};if(e.pdbType!=="BOOKMOBI")return r;let n=e.offsets[0],o=op[e.encoding]||"utf-8",a=mn(t,n+84),i=mn(t,n+88);a>0&&i>0&&n+a+i<=t.length&&(r.title=mt(ql(t.subarray(n+a,n+a+i),o)));let s=mn(t,n+20),l=mn(t,n+128),c=n+16+s;if(l&64&&ns(t,c,4)==="EXTH"&&c+12<=t.length){let h=mn(t,c+4),p=mn(t,c+8),u=Math.min(t.length,c+h,c+12+p*8+4096),g=c+12;for(let w=0;w<p&&g+8<=u;w+=1){let m=mn(t,g),_=mn(t,g+4);if(_<8||g+_>t.length)break;let y=t.subarray(g+8,g+_),k=mt(ql(y,o));m===100&&k&&!r.author?r.author=k:m===503&&k?r.title=k:m===524&&k&&!r.language&&(r.language=k),g+=_}}return r}function tp(t,e){if(!Number.isFinite(e)||e<0)return null;for(let r=0;r<t.length;r+=1){let n=Number(t[r]?.start),o=Number(t[r]?.end);if(Number.isFinite(n)&&Number.isFinite(o)&&e>=n&&e<o)return r}for(let r=0;r<t.length;r+=1){let n=Number(t[r]?.start);if(Number.isFinite(n)&&n>e)return r}return t.length>0?t.length-1:null}function rp(t){let e=String(t||"");return e.startsWith("#")?e.slice(1):""}function t0(t,e,{fileName:r,tracker:n,warn:o}){let a={};try{a=t.getMetadata()||{}}catch{a={}}let i=[];try{i=t.getSpine()||[]}catch{i=[]}if(!Array.isArray(i)||i.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u9605\u8BFB\u987A\u5E8F\u3002");let s=new Map;i.forEach((T,M)=>{T?.id!=null&&s.set(String(T.id),M)});let l=0,c=()=>`b${l+=1}`,h=T=>{let M=String(T||"").trim();if(!M)return null;if(/^blob:/i.test(M))return n.add(M),{src:M};if(/^data:/i.test(M)){let R=Un(M);return R?{src:n.create(R)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684 MOBI \u5185\u5D4C\u56FE\u7247\u3002"),null)}return/^(https?:)?\/\//i.test(M)?(o("\u5DF2\u8DF3\u8FC7 MOBI \u4E2D\u7684\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\u3002"),null):(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u6790\u7684 MOBI \u56FE\u7247\u3002"),null)},p=T=>M=>{let R=String(M||"").trim();if(!R)return null;if(/^(https?:|mailto:)/i.test(R))return{external:!0,href:R};if(R.startsWith("#"))return{chapter:T,anchor:R.slice(1)};if(R.startsWith("//")||/^(?!filepos:|kindle:)[a-z][a-z0-9+.-]*:/i.test(R))return null;try{let O=t.resolveHref(R);if(O?.id!=null){let L=s.get(String(O.id));if(L!=null){let F=rp(O.selector);return F?{chapter:L,anchor:F}:{chapter:L}}}}catch{}let v=/filepos:(\d+)/i.exec(R);if(v){let O=tp(i,Number(v[1]));if(O!=null)return{chapter:O}}return null},u=[];for(let T=0;T<i.length;T+=1){let M="";try{M=t.loadChapter(i[T].id)?.html||""}catch{o(`\u7B2C ${T+1} \u7AE0\u52A0\u8F7D\u5931\u8D25\uFF0C\u5DF2\u8DF3\u8FC7\u8BE5\u7AE0\u5185\u5BB9\u3002`)}let R=[];if(M){let v=un(M),O=v?.body||v?.documentElement||null;O&&(R=po(O,{nextId:c,warn:o,chapterIndex:T,resolveImage:h,resolveLink:p(T)}))}u.push({id:`ch${T}`,title:"",blocks:R})}let g=[],w=(T,M)=>{if(Array.isArray(T))for(let R of T){if(!R)continue;let v=mt(R.label||R.title||"").slice(0,200),O=String(R.href||""),L=null,F="";if(O){try{let U=t.resolveHref(O);if(U?.id!=null){let J=s.get(String(U.id));J!=null&&(L=J,F=rp(U.selector))}}catch{}if(L==null){let U=/filepos:(\d+)/i.exec(O);U&&(L=tp(i,Number(U[1])))}}v&&L!=null&&g.push({title:v,chapterIndex:L,depth:M,...F?{anchor:F}:{}}),w(R.children,M+1)}};try{w(t.getToc?.()||[],0)}catch{o("MOBI \u76EE\u5F55\u8BFB\u53D6\u5931\u8D25\uFF0C\u5DF2\u6309\u7AE0\u8282\u6807\u9898\u751F\u6210\u76EE\u5F55\u3002")}let m=Ia(u,g),_=mt(a.title||"")||go(r),k=(Array.isArray(a.author)?a.author:[a.author]).map(T=>mt(T||"")).filter(Boolean).join(", "),N="";try{let T=t.getCoverImage();T&&(n.add(T),N=T)}catch{}let A={title:_,chapters:u,toc:m};k&&(A.author=k);let E=mt(a.language||"");return E&&(A.language=E),N&&(A.cover=N),A}function r0(t){return String(t||"").split(/<\s*(?:mbp:)?pagebreak[^>]*>/gi)}function n0(t,e,{fileName:r,warn:n}){if(e.compression===Xl)throw new Error("\u8BE5 MOBI \u6587\u4EF6\u4F7F\u7528 HUFF/CDIC \u538B\u7F29\uFF0C\u5185\u7F6E\u89E3\u6790\u5668\u65E0\u6CD5\u5904\u7406\u3002");let o=e0(t,e),a=Jb(t,e),i=o0(e.encoding),s=ql(a,i),l=o.title||go(r),c=0,h=()=>`b${c+=1}`,p=/<\s*(?:html|body|p|div|h[1-6]|br)\b/i.test(s),u;if(p){let m=r0(s),_=new TextEncoder,y=[],k=0;for(let N of m){let A=_.encode(N).length;y.push({start:k,end:k+A}),k+=A}u=[],m.forEach((N,A)=>{if(!N.trim())return;let E=un(N),T=E?.body||E?.documentElement||null,M=u.length,R=T?po(T,{nextId:h,warn:n,chapterIndex:M,resolveImage:()=>(n("\u5185\u7F6E MOBI \u89E3\u6790\u5668\u65E0\u6CD5\u63D0\u53D6\u56FE\u7247\u8D44\u6E90\u3002"),null),resolveLink:v=>{let O=String(v||"").trim();if(!O)return null;if(/^(https?:|mailto:)/i.test(O))return{external:!0,href:O};if(O.startsWith("#"))return{chapter:M,anchor:O.slice(1)};let L=/filepos:(\d+)/i.exec(O);if(L){let F=Number(L[1]);for(let U=0;U<y.length;U+=1)if(F>=y[U].start&&F<y[U].end){let J=m.slice(0,U).filter(Y=>Y.trim()).length;return J<u.length?{chapter:J}:null}}return null}}):[];u.push({id:`ch${M}`,title:"",blocks:R})})}else u=Dl(s,{nextId:h,title:l});if(!u||u.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let g=Ia(u,[]),w={title:l,chapters:u,toc:g};return o.author&&(w.author=o.author),o.language&&(w.language=o.language),w}function o0(t){return op[t]||""}async function jo(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=pn(),a=Hn(),i=null;try{let s=await hn(t),l=Kb(s);if(l.pdbType==="BOOKMOBI"){let h=l.isKf8||/^(azw3?|kf8)$/i.test(String(r).split(".").pop()||"");try{i=h?await jl(s):await Gl(s)}catch{try{i=h?await Gl(s):await jl(s)}catch{i=null}i||o("MOBI \u89E3\u6790\u5E93\u65E0\u6CD5\u6253\u5F00\u8BE5\u6587\u4EF6\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\uFF08\u53EF\u80FD\u7F3A\u5C11\u56FE\u7247\u4E0E\u76EE\u5F55\u4FE1\u606F\uFF09\u3002")}if(i)try{let p=i.getSpine?.()||[];(!Array.isArray(p)||p.length===0)&&(i.destroy?.(),i=null,o("MOBI \u9605\u8BFB\u987A\u5E8F\u4E3A\u7A7A\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\u3002"))}catch{i.destroy?.(),i=null,o("MOBI \u89E3\u6790\u5E93\u8FD4\u56DE\u5F02\u5E38\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\u3002")}}return{...i?t0(i,l,{fileName:r,tracker:a,warn:o}):n0(s,l,{fileName:r,warn:o}),warnings:n,dispose:()=>{try{i?.destroy?.()}catch{}a.dispose()}}}catch(s){try{i?.destroy?.()}catch{}throw a.dispose(),Or(s,"\u65E0\u6CD5\u89E3\u6790 MOBI \u6587\u4EF6")}}var Vb,np,Xl,op,ap=vr(()=>{Jh();co();Na();Vi();mo();Vb=0,np=2,Xl=17480,op={65001:"utf-8",65e3:"utf-7",1250:"windows-1250",1251:"windows-1251",1252:"windows-1252",932:"shift_jis",936:"gb18030",949:"euc-kr",950:"big5"}});var Kl={};lc(Kl,{extensionOf:()=>qi,parseBook:()=>c0});function s0(t){let e=t?`\u201C.${t}\u201D`:"\u8BE5\u6587\u4EF6";return new Error(`\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u683C\u5F0F\uFF1A${e}\u3002\u76EE\u524D\u652F\u6301 ${i0}\u3002`)}function Vl(){return new Error("PDF \u6587\u4EF6\u8BF7\u4F7F\u7528 PDF \u9605\u8BFB\u6A21\u5F0F\u6253\u5F00\uFF08PDF \u7531\u72EC\u7ACB\u7684\u9605\u8BFB\u5668\u5904\u7406\uFF09\u3002")}async function l0(t){let e;try{e=new Uint8Array(await t.slice(0,256).arrayBuffer())}catch{return null}if(e.length>=8){if(String.fromCharCode(...e.subarray(0,4))==="%PDF")return"pdf";if(e[0]===80&&e[1]===75)return"epub";let o="";for(let a=60;a<68;a+=1){let i=e[a]??0;o+=i>=32&&i<127?String.fromCharCode(i):" "}if(o==="BOOKMOBI"||o==="TEXtREAd")return"mobi"}let r=new TextDecoder("utf-8").decode(e.subarray(0,Math.min(e.length,200)));return/^\s*(?:<!doctype\s+html|<html|<head|<body)/i.test(r)?"html":Xi(r)?null:"txt"}async function c0(t,e={}){let r=typeof e.fileName=="string"?e.fileName:"",n=typeof e.mime=="string"?e.mime:"",o=qi(r);if(o==="pdf")throw Vl();let a=Kr[o]||null;if(!a){let i=n.toLowerCase().split(";")[0].trim();if(i==="application/pdf")throw Vl();a=a0[i]||null}if(!a&&!o){let i=await l0(t);if(i==="pdf")throw Vl();a=i&&Kr[i]||null}if(!a)throw s0(o);try{let i=await a.parse(t,{fileName:r,mime:n});return{...i,title:i.title||go(r),format:a.format,warnings:Array.isArray(i.warnings)?i.warnings:[]}}catch(i){throw Or(i,"\u65E0\u6CD5\u6253\u5F00\u6587\u6863")}}var Kr,a0,i0,Yl=vr(()=>{mh();bh();kh();ap();Vi();mo();Kr={epub:{parse:gh,format:"epub"},mobi:{parse:jo,format:"mobi"},prc:{parse:jo,format:"mobi"},azw:{parse:jo,format:"mobi"},azw3:{parse:jo,format:"mobi"},kf8:{parse:jo,format:"mobi"},txt:{parse:Fl,format:"txt"},text:{parse:Fl,format:"txt"},md:{parse:Pa,format:"md"},markdown:{parse:Pa,format:"md"},mdown:{parse:Pa,format:"md"},mkd:{parse:Pa,format:"md"},html:{parse:Ra,format:"html"},htm:{parse:Ra,format:"html"},xhtml:{parse:Ra,format:"html"},xht:{parse:Ra,format:"html"}},a0={"application/epub+zip":Kr.epub,"application/x-mobipocket-ebook":Kr.mobi,"application/x-mobi":Kr.mobi,"application/vnd.amazon.ebook":Kr.mobi,"text/plain":Kr.txt,"text/markdown":Kr.md,"text/x-markdown":Kr.md,"text/html":Kr.html,"application/xhtml+xml":Kr.html},i0="EPUB\u3001MOBI/KF8\u3001TXT\u3001Markdown \u548C HTML"});var k0={};lc(k0,{PANEL_ID:()=>Jl,apply:()=>w0,inject:()=>v0,name:()=>x0});module.exports=Ip(k0);var dy=require("react");var V=Lt(require("react"),1);var gr=Lt(require("react"),1);var S0=require("react"),X=require("react/jsx-runtime");function st({size:t=18,children:e,viewBox:r="0 0 24 24",fill:n="none",strokeWidth:o=1.7,...a}){return(0,X.jsx)("svg",{width:t,height:t,viewBox:r,fill:n,stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",...a,children:e})}function dc(t){return(0,X.jsxs)(st,{...t,children:[(0,X.jsx)("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5Z"}),(0,X.jsx)("path",{d:"M4 18.5A2.5 2.5 0 0 1 6.5 16H20"}),(0,X.jsx)("path",{d:"M8 7h8M8 10.5h5"})]})}function Qo(t){return(0,X.jsxs)(st,{...t,children:[(0,X.jsx)("path",{d:"M12 6.5C10.6 5.2 8.7 4.6 6.5 4.6H3v13h3.9c2 0 3.8.6 5.1 1.8 1.3-1.2 3.1-1.8 5.1-1.8H21v-13h-3.5c-2.2 0-4.1.6-5.5 1.9Z"}),(0,X.jsx)("path",{d:"M12 6.5v12.9"})]})}function uc(t){return(0,X.jsxs)(st,{...t,children:[(0,X.jsx)("path",{d:"M19 12H5"}),(0,X.jsx)("path",{d:"m11 18-6-6 6-6"})]})}function hc(t){return(0,X.jsxs)(st,{...t,children:[(0,X.jsx)("path",{d:"M12 16V4"}),(0,X.jsx)("path",{d:"m7 9 5-5 5 5"}),(0,X.jsx)("path",{d:"M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15"})]})}function Jo(t){return(0,X.jsxs)(st,{...t,children:[(0,X.jsx)("circle",{cx:"11",cy:"11",r:"7"}),(0,X.jsx)("path",{d:"m20 20-3.6-3.6"})]})}function Ln(t){return(0,X.jsxs)(st,{...t,children:[(0,X.jsx)("path",{d:"m12 3 1.5 4.2L18 9l-4.5 1.8L12 15l-1.5-4.2L6 9l4.5-1.8L12 3Z"}),(0,X.jsx)("path",{d:"m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"}),(0,X.jsx)("path",{d:"m5 13 .7 1.8L7.5 15.5l-1.8.7L5 18l-.7-1.8L2.5 15.5l1.8-.7L5 13Z"})]})}function So(t){return(0,X.jsxs)(st,{...t,children:[(0,X.jsx)("path",{d:"M4 5h8M8 3v2c0 4.2-1.8 7.2-5 9"}),(0,X.jsx)("path",{d:"M5 10c1.8 2.2 4 3.6 6.8 4.4"}),(0,X.jsx)("path",{d:"m13 20 3.6-9L20 20"}),(0,X.jsx)("path",{d:"M14.6 16.8h4.8"})]})}function Nr(t){return(0,X.jsx)(st,{...t,children:(0,X.jsx)("path",{d:"m6 6 12 12M18 6 6 18"})})}function Va(t){return(0,X.jsx)(st,{...t,children:(0,X.jsx)("path",{d:"m15 18-6-6 6-6"})})}function Ka(t){return(0,X.jsx)(st,{...t,children:(0,X.jsx)("path",{d:"m9 18 6-6-6-6"})})}function pc(t){return(0,X.jsx)(st,{...t,children:(0,X.jsx)("path",{d:"m6 9 6 6 6-6"})})}function ps(t){return(0,X.jsxs)(st,{...t,children:[(0,X.jsx)("path",{d:"M8 6h12M8 12h12M8 18h12"}),(0,X.jsx)("path",{d:"M4 6h.01M4 12h.01M4 18h.01"})]})}function Ya(t){return(0,X.jsxs)(st,{...t,children:[(0,X.jsx)("circle",{cx:"12",cy:"12",r:"3.2"}),(0,X.jsx)("path",{d:"M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"})]})}function kn(t){return(0,X.jsxs)(st,{...t,children:[(0,X.jsx)("path",{d:"M4 7h16M9 7V5h6v2M7 7l.7 12.2A1.8 1.8 0 0 0 9.5 21h5a1.8 1.8 0 0 0 1.8-1.8L17 7"}),(0,X.jsx)("path",{d:"M10 11v6M14 11v6"})]})}function fc(t){return(0,X.jsxs)(st,{...t,children:[(0,X.jsx)("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),(0,X.jsx)("path",{d:"M5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V5"})]})}function _n(t){return(0,X.jsx)(st,{...t,children:(0,X.jsx)("path",{d:"M12 5v14M5 12h14"})})}function Za(t){return(0,X.jsx)(st,{...t,children:(0,X.jsx)("path",{d:"M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"})})}function Qa(t){return(0,X.jsx)(st,{...t,children:(0,X.jsx)("path",{d:"M5 12h14"})})}function gc(t){return(0,X.jsxs)(st,{...t,children:[(0,X.jsx)("path",{d:"M20 11a8 8 0 1 0-2.3 6.3"}),(0,X.jsx)("path",{d:"M20 4v7h-7"})]})}function mc(t){return(0,X.jsxs)(st,{...t,children:[(0,X.jsx)("path",{d:"M14 4h6v6M20 4l-9 9"}),(0,X.jsx)("path",{d:"M19 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"})]})}function Ja({size:t=18}){return(0,X.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[(0,X.jsx)("path",{fill:"#4285F4",d:"M22.6 12.23c0-.78-.07-1.53-.2-2.25H12v4.26h5.94a5.08 5.08 0 0 1-2.2 3.33v2.77h3.56c2.08-1.92 3.3-4.74 3.3-8.11Z"}),(0,X.jsx)("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.77c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"}),(0,X.jsx)("path",{fill:"#FBBC05",d:"M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"}),(0,X.jsx)("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.2 1.64l3.15-3.15A10.97 10.97 0 0 0 12 1 11 11 0 0 0 2.18 7.06L5.84 9.9C6.71 7.3 9.14 5.38 12 5.38Z"})]})}function ei({size:t=18}){return(0,X.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[(0,X.jsx)("path",{fill:"currentColor",d:"M12 3 1.5 8.5 12 14l8.6-4.5v6.2h1.9V8.5L12 3Z",opacity:".9"}),(0,X.jsx)("path",{fill:"currentColor",d:"M6.2 11.4v4.1c0 2.2 2.6 4 5.8 4s5.8-1.8 5.8-4v-4.1L12 14.4l-5.8-3Z",opacity:".65"})]})}function bc(t){return(0,X.jsx)(st,{...t,children:(0,X.jsx)("path",{d:"m5 12 4.5 4.5L19 7"})})}function xc(t){return(0,X.jsxs)(st,{...t,children:[(0,X.jsx)("path",{d:"m15 4 1 2.2L18.2 7 16 8 15 10.2 14 8l-2.2-1L14 6.2 15 4Z"}),(0,X.jsx)("path",{d:"m5 19 8.5-8.5"}),(0,X.jsx)("path",{d:"m4 14 6 6"})]})}function vc(t){return(0,X.jsxs)(st,{...t,children:[(0,X.jsx)("path",{d:"M20 13 13 20a2 2 0 0 1-2.8 0L3 12.8V3h9.8L20 10.2a2 2 0 0 1 0 2.8Z"}),(0,X.jsx)("circle",{cx:"7.5",cy:"7.5",r:"1.2"})]})}function ti(t){return(0,X.jsxs)(st,{...t,children:[(0,X.jsx)("path",{d:"m14 4 6 6-9.5 9.5H5v-5L14 4Z"}),(0,X.jsx)("path",{d:"M12 21h9"}),(0,X.jsx)("path",{d:"M14 6.5 17.5 10"})]})}function ea(t){return(0,X.jsxs)(st,{...t,children:[(0,X.jsx)("path",{d:"M12 3a9 9 0 1 0 0 18h1.2a1.8 1.8 0 0 0 1.3-3l-.6-.7a1.6 1.6 0 0 1 1.2-2.7h1.6A4.3 4.3 0 0 0 21 10.3 7.7 7.7 0 0 0 12 3Z"}),(0,X.jsx)("circle",{cx:"7.5",cy:"11",r:"1"}),(0,X.jsx)("circle",{cx:"10",cy:"7.2",r:"1"}),(0,X.jsx)("circle",{cx:"15",cy:"7.2",r:"1"}),(0,X.jsx)("circle",{cx:"17",cy:"11",r:"1"})]})}function fs(t){return(0,X.jsx)(st,{...t,children:(0,X.jsx)("path",{d:"M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"})})}function yc(t){return(0,X.jsx)(st,{...t,children:(0,X.jsx)("path",{d:"M3 8h5V3M21 8h-5V3M3 16h5v5M21 16h-5v5"})})}function ri(t){return(0,X.jsxs)(st,{...t,children:[(0,X.jsx)("path",{d:"M12 3v12"}),(0,X.jsx)("path",{d:"m7 10 5 5 5-5"}),(0,X.jsx)("path",{d:"M4 18v2h16v-2"})]})}function wc(t){return(0,X.jsxs)(st,{...t,children:[(0,X.jsx)("path",{d:"M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"}),(0,X.jsx)("path",{d:"M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"})]})}function kc(t){return(0,X.jsxs)(st,{...t,children:[(0,X.jsx)("path",{d:"M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"}),(0,X.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})}function _c(t){return(0,X.jsxs)(st,{...t,children:[(0,X.jsx)("path",{d:"m3 3 18 18"}),(0,X.jsx)("path",{d:"M10.6 6.1A10.7 10.7 0 0 1 12 6c6 0 9.5 6 9.5 6a16.5 16.5 0 0 1-3.2 3.7"}),(0,X.jsx)("path",{d:"M6.2 6.7C3.9 8.4 2.5 12 2.5 12S6 18 12 18c1.3 0 2.5-.3 3.5-.8"}),(0,X.jsx)("path",{d:"M9.9 9.9a3 3 0 0 0 4.2 4.2"})]})}var gs=new WeakMap,Sc=Promise.resolve();function Sn(t){return Number.isSafeInteger(t?.bytes)&&t.bytes>0&&typeof t.sha256=="string"&&/^[a-f0-9]{64}$/.test(t.sha256)}function ms(t,e){return Sn(t)&&Sn(e)&&t.bytes===e.bytes&&t.sha256===e.sha256}function ni(t){if(!t?.size||t.size>320*1024*1024)return Promise.reject(new Error("\u8BF7\u9009\u62E9 320 MiB \u4EE5\u5185\u7684 PDF\u3002"));let e=gs.get(t);if(e)return e;let r=Sc.then(async()=>{if(!globalThis.crypto?.subtle)throw new Error("\u6B64\u73AF\u5883\u65E0\u6CD5\u6838\u9A8C SHA-256 \u6587\u4EF6\u6458\u8981\u3002");let n=await t.arrayBuffer(),o=new Uint8Array(await crypto.subtle.digest("SHA-256",n));return{bytes:t.size,sha256:[...o].map(a=>a.toString(16).padStart(2,"0")).join("")}});return Sc=r.catch(()=>{}),gs.set(t,r),r.catch(()=>{gs.delete(t)}),r}function oi(t={},e){let r=new Set,n=Array.isArray(t.groups)?t.groups:[];return{question:String(t.question??"").trim().slice(0,1e3),synthesis:String(t.synthesis??"").trim().slice(0,2e4),groups:n.map(o=>({id:o.id,name:String(o.name??"").trim().slice(0,80),comparison:String(o.comparison??"").trim().slice(0,1e4),ids:(o.ids??[]).filter(a=>!e.has(a)||r.has(a)?!1:(r.add(a),!0))}))}}function ai(t,e=[]){let r=new Map(t.map(o=>[o.id,o])),n=e.map(o=>({id:o.id,name:o.name,comparison:o.comparison,rows:o.ids.flatMap(a=>{let i=r.get(a);return r.delete(a),i?[i]:[]})}));return n.push({id:"",name:"\u672A\u5206\u7EC4",rows:[...r.values()]}),n}function Tn(t,e){let r=e?.citationConfirmed?e:t;return{title:r.title||e?.title||"\u9898\u540D\u5F85\u786E\u8BA4",author:r.author||!e?.citationConfirmed&&e?.author||"",year:r.year||"",doi:r.doi||"",printLabel:t.printLabel||"",page:t.anchor?.page}}var Rp="dsh-reader",Mp=3,_t="books",rr="annotations",Ze="assets",Hr="pdfTranslations",ii="reader-background",si="book-collection:",bs="pdf-evidence:",Nc="dsh-reader:settings:v1",Tc=320*1024*1024,Ec=16*1024*1024,Vt=Object.freeze({settingsVersion:2,autoTranslate:!1,hideTranslations:!1,fontSize:18,lineHeight:1.85,tocWidth:260,readingMode:"scroll",pageAnimation:"slide",bookAnimation:"slide",showToc:!0,aiOpen:!1,theme:"auto",fontFamily:"serif",fontWeight:400,contentWidth:760,brightness:1,backgroundPreset:"paper",customBackground:"#fbf7ee",textTone:"auto",backgroundImageKey:"",backgroundImageOpacity:.26,backgroundImageBlur:0,annotationPanelOpen:!1}),ta=Object.freeze([{id:"book",label:"\u4E66\u7C4D",hint:"EPUB / MOBI / TXT \u4E0E\u4E66\u7C4D\u578B PDF"},{id:"paper",label:"\u6587\u732E",hint:"\u8BBA\u6587\u3001\u62A5\u544A\u3001\u5B66\u672F PDF"},{id:"document",label:"\u6587\u6863",hint:"Markdown / HTML \u7B49\u77ED\u6587\u6863"}]),xs=new Set(ta.map(t=>t.id)),Pp=new Set(["paper","white","sepia","green","night","custom"]),Op=new Set(["serif","sans","kai","system"]),Lp=new Set(["scroll","book"]),Dp=new Set(["slide","fade","push","flip"]),Fp=new Set(["slide","cover","flip"]),zp=new Set([400,500,600]),Bp=new Set(["auto","dark","light"]);function St(){return new Promise((t,e)=>{if(typeof indexedDB>"u"){e(new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 IndexedDB\uFF0C\u65E0\u6CD5\u4FDD\u5B58\u4E66\u67B6\u3002"));return}let r=indexedDB.open(Rp,Mp);r.onupgradeneeded=()=>{let n=r.result;n.objectStoreNames.contains(_t)||n.createObjectStore(_t,{keyPath:"id"}).createIndex("lastOpenedAt","lastOpenedAt"),n.objectStoreNames.contains(rr)||n.createObjectStore(rr,{keyPath:"id"}).createIndex("bookId","bookId"),n.objectStoreNames.contains(Ze)||n.createObjectStore(Ze,{keyPath:"key"}),n.objectStoreNames.contains(Hr)||n.createObjectStore(Hr,{keyPath:"key"}).createIndex("bookId","bookId")},r.onsuccess=()=>t(r.result),r.onerror=()=>e(r.error??new Error("\u6253\u5F00\u4E66\u67B6\u6570\u636E\u5E93\u5931\u8D25\u3002")),r.onblocked=()=>e(new Error("\u4E66\u67B6\u6570\u636E\u5E93\u88AB\u53E6\u4E00\u4E2A\u9875\u9762\u5360\u7528\uFF0C\u8BF7\u5173\u95ED\u5176\u5B83 DSH \u9875\u9762\u540E\u91CD\u8BD5\u3002"))})}function jt(t){return new Promise((e,r)=>{t.oncomplete=()=>e(),t.onerror=()=>r(t.error??new Error("\u4E66\u67B6\u5199\u5165\u5931\u8D25\u3002")),t.onabort=()=>r(t.error??new Error("\u4E66\u67B6\u5199\u5165\u5DF2\u53D6\u6D88\u3002"))})}function Fn(t){return new Promise((e,r)=>{t.onsuccess=()=>e(t.result),t.onerror=()=>r(t.error)})}var ra=()=>IDBKeyRange.bound(si,`${si}\uFFFF`),vs=t=>`${si}${t}`,na=()=>IDBKeyRange.bound(bs,`${bs}\uFFFF`),ys=t=>bs+t;function Dn(t){let e=/\.([^./\\]+)$/u.exec(String(t??""));return e?e[1].toLowerCase():""}function nn(t){switch(t){case"pdf":return"PDF";case"epub":return"EPUB";case"mobi":return"MOBI";case"azw":return"AZW";case"azw3":return"AZW3";case"txt":return"TXT";case"md":return"Markdown";case"html":return"HTML";default:return String(t??"\u6587\u4EF6").toUpperCase()}}function oa(t){return ta.find(e=>e.id===t)?.label??"\u672A\u5206\u7C7B"}function ws(t){return["pdf","epub","mobi","azw","azw3","txt","md","markdown","html","htm"].includes(Dn(t))}function $p(t){let e=String(t??"");return e.length===0?0:(e.match(/[\u3400-\u9fff\uf900-\ufaff]/gu)??[]).length/e.length}function ks(t={}){let e=String(t.format||Dn(t.title)||"").toLowerCase(),r=`${t.title||""} ${t.author||""}`;return e==="pdf"?/(?:^|\b)(book|novel|textbook|edition|volume|monograph|文集|全集|教材|小说|专著|丛书)(?:\b|$)/iu.test(r)||Number(t.size)>45*1024*1024?"book":"paper":["epub","mobi","azw","azw3","txt"].includes(e)?"book":"document"}async function Hp(t){if(!globalThis.crypto?.subtle){let r=2166136261,n=new Uint8Array(t);for(let o=0;o<n.length;o+=1)r^=n[o],r=Math.imul(r,16777619);return(r>>>0).toString(16).padStart(8,"0")}let e=await globalThis.crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(e)].map(r=>r.toString(16).padStart(2,"0")).join("")}async function Up(t){let e=await t.slice(0,Math.min(t.size,1048576)).arrayBuffer();return`${(await Hp(e)).slice(0,20)}-${t.size}-${String(t.name).replace(/[^\w.-]+/gu,"_").slice(-48)}`}async function _s(){let t=await St();try{let n=t.transaction(_t,"readonly").objectStore(_t).index("lastOpenedAt").openCursor(null,"prev"),o=[];return await new Promise((a,i)=>{n.onsuccess=()=>{let s=n.result;if(!s){a();return}let l=s.value;o.push({id:l.id,title:l.title,author:l.author,year:l.year??"",doi:l.doi??"",citationConfirmed:!!l.citationConfirmed,format:l.format,size:l.size,addedAt:l.addedAt,lastOpenedAt:l.lastOpenedAt,progress:l.progress??null,language:l.language??"",cover:typeof l.cover=="string"?l.cover:"",category:xs.has(l.category)?l.category:ks(l),categoryManual:!!l.categoryManual}),s.continue()},n.onerror=()=>i(n.error)}),o}finally{t.close()}}async function aa(t){let e=await St();try{let n=e.transaction(_t,"readonly").objectStore(_t).get(t);return await new Promise((o,a)=>{n.onsuccess=()=>o(n.result??null),n.onerror=()=>a(n.error)})}finally{e.close()}}async function ia(t,{title:e,author:r,language:n,fingerprint:o}={}){if(!ws(t.name))throw new Error(`\u6682\u4E0D\u652F\u6301 .${Dn(t.name)||"\u672A\u77E5"} \u6587\u4EF6\u3002\u8BF7\u9009\u62E9 PDF / EPUB / MOBI / TXT / Markdown / HTML\u3002`);if(t.size>Tc)throw new Error(`\u6587\u4EF6\u8D85\u8FC7 ${Math.round(Tc/1024/1024)} MB\uFF0C\u6D4F\u89C8\u5668\u4E66\u67B6\u65E0\u6CD5\u5BB9\u7EB3\u3002`);if(o&&(!Sn(o)||o.bytes!==t.size||Dn(t.name)!=="pdf"))throw new Error("PDF \u6587\u4EF6\u6458\u8981\u65E0\u6548\u3002");let a=o?`pdf-sha256-${o.sha256}-${o.bytes}`:await Up(t),i=Date.now(),s=await St();try{let l=s.transaction(_t,"readwrite"),c=jt(l);c.catch(()=>{});let h=l.objectStore(_t),p=await Fn(h.get(a)),u=p?.id??a,g=Dn(t.name)==="markdown"?"md":Dn(t.name),w={title:String((p?.citationConfirmed?p.title:e)??p?.title??t.name.replace(/\.[^.]+$/u,"")).trim()||"\u672A\u547D\u540D\u6587\u6863",author:String((p?.citationConfirmed?p.author:r)??p?.author??"").trim(),language:String(n??p?.language??"").trim(),format:g,size:t.size},m={id:u,...w,...p?.citationConfirmed?{citationConfirmed:!0,year:p.year,doi:p.doi}:{},category:p?.category&&xs.has(p.category)?p.category:ks(w),categoryManual:!!p?.categoryManual,cover:typeof p?.cover=="string"?p.cover:"",addedAt:p?.addedAt??i,lastOpenedAt:i,progress:p?.progress??null,fileRevision:ci(),blob:t};return h.put(m),await c,m}catch(l){throw l?.name==="QuotaExceededError"?new Error("\u6D4F\u89C8\u5668\u5B58\u50A8\u7A7A\u95F4\u5DF2\u6EE1\uFF0C\u65E0\u6CD5\u52A0\u5165\u4E66\u67B6\u3002\u8BF7\u5220\u9664\u4E00\u4E9B\u4E66\u540E\u91CD\u8BD5\u3002"):l}finally{s.close()}}async function To(t,e,{preserveCitation:r=!1}={}){let n=await St();try{let o=n.transaction(_t,"readwrite"),a=o.objectStore(_t),i=a.get(t),s=null;return i.onsuccess=()=>{if(!i.result)return;let l=i.result,c=r&&l.citationConfirmed?{title:l.title,author:l.author}:{};s={...l,...e,...c,..."blob"in e?{fileRevision:ci()}:{}},a.put(s)},await jt(o),s}finally{n.close()}}async function Ac(t,{title:e,author:r,year:n,doi:o}){let a={title:String(e??"").trim(),author:String(r??"").trim(),year:String(n??"").trim(),doi:String(o??"").trim().replace(/^https?:\/\/(?:dx\.)?doi\.org\//iu,"")};if(!a.title||a.title.length>300||a.author.length>500)throw new Error("\u8BF7\u8F93\u5165\u6709\u6548\u7684\u9898\u540D\u548C\u4F5C\u8005\u3002");if(a.year&&!/^[1-9]\d{3}$/u.test(a.year))throw new Error("\u5E74\u4EFD\u987B\u4E3A\u56DB\u4F4D\u6570\u5B57\u3002");if(a.doi&&(a.doi.length>400||!/^10\.\d{4,}\/\S+$/u.test(a.doi)))throw new Error("\u8BF7\u8F93\u5165\u6709\u6548\u7684 DOI\u3002");let i=await St();try{let s=i.transaction([_t,Ze],"readwrite"),l=jt(s);l.catch(()=>{});let c=s.objectStore(_t),h=await Fn(c.get(t));if(h?.format!=="pdf")throw new Error("\u627E\u4E0D\u5230\u8FD9\u4EFD PDF\u3002");c.put({...h,...a,citationConfirmed:!0});let p=s.objectStore(Ze).openCursor(na());return p.onsuccess=()=>{let u=p.result;u&&(u.value.value.bookId===t&&u.update({...u.value,value:{...u.value.value,...a}}),u.continue())},await l,{...a,citationConfirmed:!0}}finally{i.close()}}async function Cc(t,e,{manual:r=!0}={}){if(!xs.has(e))throw new Error("\u672A\u77E5\u7684\u4E66\u7C4D\u5206\u7C7B\u3002");return To(t,{category:e,categoryManual:r})}async function Ic(){let t=await _s(),e={book:0,paper:0,document:0},r=0;for(let n of t){if(n.categoryManual){e[n.category]=(e[n.category]||0)+1;continue}let o=ks(n);e[o]=(e[o]||0)+1,o!==n.category&&(await To(n.id,{category:o,categoryManual:!1}),r+=1)}return{changed:r,counts:e}}async function Ss(t,e){return To(t,{lastOpenedAt:Date.now(),...e!==void 0?{progress:e}:{}})}async function Rc(){let t=await St();try{let e=t.transaction(Ze,"readonly").objectStore(Ze);return(await Fn(e.getAll(ra()))).sort((n,o)=>n.createdAt-o.createdAt)}finally{t.close()}}async function Mc({id:t,name:e,add:r=[],remove:n=[]}){let o=e==null?void 0:String(e).trim();if((o!==void 0||!t)&&(!o||o.length>60))throw new Error("\u4E66\u5355\u540D\u79F0\u987B\u4E3A 1\u201360 \u4E2A\u5B57\u7B26\u3002");let a=await St();try{let i=a.transaction([Ze,_t],"readwrite"),s=i.objectStore(Ze),l=i.objectStore(_t),c=[...new Set(r)],h=jt(i);h.catch(()=>{});let[p,u]=await Promise.all([Fn(s.getAll(ra())),Promise.all(c.map(k=>Fn(l.getKey(k))))]),g=p.find(k=>k.id===t);if(t&&!g)throw new Error("\u8FD9\u4E2A\u4E66\u5355\u5DF2\u88AB\u5220\u9664\u3002");let w=o??g.name;if(p.some(k=>k.id!==t&&k.name.toLowerCase()===w.toLowerCase()))throw new Error("\u5DF2\u6709\u540C\u540D\u4E66\u5355\uFF0C\u8BF7\u6362\u4E00\u4E2A\u540D\u79F0\u3002");if(u.some(k=>k===void 0))throw new Error("\u90E8\u5206\u9009\u4E2D\u7684\u4E66\u5DF2\u4ECE\u4E66\u67B6\u5220\u9664\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u3002");let m=new Set(n),_=t??ci("collection"),y={id:_,key:vs(_),name:w,bookIds:[...new Set([...g?.bookIds??[],...u])].filter(k=>!m.has(k)),createdAt:g?.createdAt??Date.now(),...g?.research?{research:g.research,researchRevision:g.researchRevision}:{}};return s.put(y),await h,y}finally{a.close()}}async function Pc(t,e){let r=await St();try{let n=r.transaction(Ze,"readwrite"),o=jt(n);o.catch(()=>{});let a=n.objectStore(Ze),[i,s]=await Promise.all([Fn(a.get(vs(t.id))),Fn(a.getAll(na()))]);if(!i)throw new Error("\u8BE5\u4E13\u9898\u5DF2\u5220\u9664\u3002");if((i.researchRevision??0)!==(t.researchRevision??0))throw new Error("\u8BE5\u4E13\u9898\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u540E\u7F16\u8F91\u3002");let l=new Set(s.filter(p=>p.value.topicIds?.includes(t.id)).map(p=>p.value.id)),c=oi(e,l);if(c.groups.some(p=>!p.name))throw new Error("\u8BF7\u586B\u5199\u5206\u7EC4\u540D\u79F0\u3002");let h={...i,research:c,researchRevision:(i.researchRevision??0)+1};return a.put(h),await o,h}finally{r.close()}}function Ts(t,e,r){let n=t.openCursor(ra());n.onsuccess=()=>{let o=n.result;if(!o)return;let a=o.value;if((!r||r.has(a.id))&&a.research?.groups.some(i=>i.ids.some(s=>e.has(s)))){let i=a.research.groups.map(s=>({...s,ids:s.ids.filter(l=>!e.has(l))}));o.update({...a,research:{...a.research,groups:i},researchRevision:(a.researchRevision??0)+1})}o.continue()}}async function Oc(t){let e=await St();try{let r=e.transaction(Ze,"readwrite"),n=r.objectStore(Ze);n.delete(vs(t)),Lc(n,t),await jt(r)}finally{e.close()}}function Lc(t,e){let r=t.openCursor(na());r.onsuccess=()=>{let n=r.result;if(!n)return;let o=n.value,a=o.value.topicIds||[],i=e?a.filter(s=>s!==e):[];i.length!==a.length&&n.update({...o,value:{...o.value,topicIds:i}}),n.continue()}}async function Dc(t,{deleteEvidence:e=!1}={}){let r=await St();try{let n=r.transaction([_t,rr,Hr,Ze],"readwrite");n.objectStore(_t).delete(t),n.objectStore(Ze).delete(`pdf-translation:${t}`);let o=n.objectStore(Ze),a=new Set;if(e){let h=o.openCursor(na());h.onsuccess=()=>{let p=h.result;if(!p){a.size&&Ts(o,a);return}p.value.value.bookId===t&&(a.add(p.value.value.id),p.delete()),p.continue()}}let i=o.openCursor(ra());i.onsuccess=()=>{let h=i.result;if(!h)return;let p=h.value;p.bookIds.includes(t)&&h.update({...p,bookIds:p.bookIds.filter(u=>u!==t)}),h.continue()};let s=n.objectStore(Hr).index("bookId").openKeyCursor(IDBKeyRange.only(t));s.onsuccess=()=>{let h=s.result;h&&(n.objectStore(Hr).delete(h.primaryKey),h.continue())};let c=n.objectStore(rr).index("bookId").openKeyCursor(IDBKeyRange.only(t));c.onsuccess=()=>{let h=c.result;h&&(n.objectStore(rr).delete(h.primaryKey),h.continue())},await jt(n)}finally{r.close()}}async function li(){let t=await St();try{return(await Fn(t.transaction(Ze,"readonly").objectStore(Ze).getAll(na()))).map(r=>r.value).sort((r,n)=>n.createdAt-r.createdAt||n.id.localeCompare(r.id))}finally{t.close()}}async function Fc(t){let e=await St();try{let r=e.transaction([_t,Ze],"readwrite"),n=jt(r),o=r.objectStore(Ze),a=r.objectStore(_t).get(t.bookId);a.onsuccess=()=>{if(!a.result?.blob||(a.result.fileRevision??null)!==t.fileRevision){r.abort();return}let i=ys(t.id),s=o.get(i);s.onsuccess=()=>{s.result||o.add({key:i,value:t})}},await n}finally{e.close()}}async function Eo(t,e,r){let n=await St();try{let o=n.transaction([Ze,_t],"readwrite"),a=o.objectStore(Ze),i=ys(t),s=a.get(i),l=null,c=(h={})=>{let p=s.result?.value;!p||r&&p.sourceRevision!==r||(l={...p,...e,...h,updatedAt:Date.now()},a.put({key:i,value:l}))};return s.onsuccess=()=>{if(e.topicIds){let p=a.getAll(ra());p.onsuccess=()=>{let u=new Set(p.result.map(m=>m.id)),g=[...new Set(e.topicIds)].filter(m=>u.has(m));c({topicIds:g});let w=new Set((s.result?.value.topicIds??[]).filter(m=>!g.includes(m)));l&&w.size&&Ts(a,new Set([t]),w)};return}if(!e.bookId){c();return}let h=o.objectStore(_t).get(e.bookId);h.onsuccess=()=>{h.result?.blob&&(h.result.fileRevision??null)===e.fileRevision&&c()}},await jt(o),l}finally{n.close()}}async function zc(t){let e=await St();try{let r=e.transaction(Ze,"readwrite"),n=r.objectStore(Ze);n.delete(ys(t)),Ts(n,new Set([t])),await jt(r)}finally{e.close()}}async function Bc(){let t=await St();try{let e=t.transaction([_t,rr,Hr,Ze],"readwrite");e.objectStore(_t).clear(),e.objectStore(rr).clear(),e.objectStore(Hr).clear();let r=e.objectStore(Ze);Lc(r);let n=r.openKeyCursor();n.onsuccess=()=>{let o=n.result;if(o){let a=String(o.key);(a.startsWith("pdf-translation:")||a.startsWith(si))&&r.delete(o.primaryKey),o.continue()}},await jt(e)}finally{t.close()}}async function $c(t){let e=await St();try{let r=e.transaction(Hr,"readonly").objectStore(Hr).get(t);return await new Promise((n,o)=>{r.onsuccess=()=>n(r.result||null),r.onerror=()=>o(r.error)})}finally{e.close()}}async function Hc(t){let e=await St();try{let r=e.transaction([_t,Hr],"readwrite"),n=r.objectStore(_t).get(t.bookId);n.onsuccess=()=>{n.result&&r.objectStore(Hr).put({...t,updatedAt:Date.now()})},await jt(r)}finally{e.close()}}async function Uc(t){let e=await St();try{let r=e.transaction(Ze,"readonly").objectStore(Ze).get(`pdf-translation:${t}`);return await new Promise((n,o)=>{r.onsuccess=()=>n(r.result?.value||{}),r.onerror=()=>o(r.error)})}finally{e.close()}}async function Wc(t,e){let r=await St();try{let n=r.transaction([_t,Ze],"readwrite"),o=n.objectStore(_t).get(t);o.onsuccess=()=>{o.result&&n.objectStore(Ze).put({key:`pdf-translation:${t}`,value:e})},await jt(n)}finally{r.close()}}function ci(t="a"){return globalThis.crypto?.randomUUID?`${t}-${crypto.randomUUID()}`:`${t}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}async function jc(t){let e=await St();try{let o=e.transaction(rr,"readonly").objectStore(rr).index("bookId").getAll(t);return(await new Promise((i,s)=>{o.onsuccess=()=>i(o.result??[]),o.onerror=()=>s(o.error)})).sort((i,s)=>{let l=Number.isFinite(i.page)?i.page:Number.MAX_SAFE_INTEGER,c=Number.isFinite(s.page)?s.page:Number.MAX_SAFE_INTEGER;if(l!==c)return l-c;let h=Number.isFinite(i.chapterIndex)?i.chapterIndex:Number.MAX_SAFE_INTEGER,p=Number.isFinite(s.chapterIndex)?s.chapterIndex:Number.MAX_SAFE_INTEGER;return h!==p?h-p:(i.createdAt||0)-(s.createdAt||0)})}finally{e.close()}}async function Gc(t){let e=Date.now(),r={...t,id:t.id||ci(),createdAt:t.createdAt||e,updatedAt:e};if(!r.bookId)throw new Error("\u6279\u6CE8\u7F3A\u5C11\u4E66\u7C4D\u4FE1\u606F\u3002");if(!r.kind||!r.style)throw new Error("\u6279\u6CE8\u7F3A\u5C11\u7C7B\u578B\u3002");let n=await St();try{let o=n.transaction(rr,"readwrite");return o.objectStore(rr).put(r),await jt(o),r}finally{n.close()}}async function qc(t,e){let r=await St();try{let n=r.transaction(rr,"readwrite"),o=n.objectStore(rr),a=await new Promise((s,l)=>{let c=o.get(t);c.onsuccess=()=>s(c.result??null),c.onerror=()=>l(c.error)});if(!a)return await jt(n),null;let i={...a,...e,id:a.id,updatedAt:Date.now()};return o.put(i),await jt(n),i}finally{r.close()}}async function Xc(t){let e=await St();try{let r=e.transaction(rr,"readwrite");r.objectStore(rr).delete(t),await jt(r)}finally{e.close()}}async function Vc(t){if(!t||!t.size)throw new Error("\u80CC\u666F\u56FE\u7247\u4E3A\u7A7A\u3002");if(t.size>Ec)throw new Error(`\u80CC\u666F\u56FE\u7247\u8D85\u8FC7 ${Math.round(Ec/1024/1024)} MB\uFF0C\u8BF7\u9009\u62E9\u66F4\u5C0F\u7684\u56FE\u7247\u3002`);let e=await St();try{let r=e.transaction(Ze,"readwrite");return r.objectStore(Ze).put({key:ii,blob:t,type:t.type||"image/*",size:t.size,updatedAt:Date.now()}),await jt(r),ii}finally{e.close()}}async function Kc(){let t=await St();try{let r=t.transaction(Ze,"readonly").objectStore(Ze).get(ii);return(await new Promise((o,a)=>{r.onsuccess=()=>o(r.result??null),r.onerror=()=>a(r.error)}))?.blob??null}finally{t.close()}}async function Yc(){let t=await St();try{let e=t.transaction(Ze,"readwrite");e.objectStore(Ze).delete(ii),await jt(e)}finally{t.close()}}function Yn(t,e,r,n){let o=Number(t);return Number.isFinite(o)?Math.max(e,Math.min(r,o)):n}function Wp(t,e){return/^#[0-9a-f]{6}$/iu.test(String(t))?String(t):e}function Zc(){try{let t=localStorage.getItem(Nc);if(!t)return{...Vt};let e=JSON.parse(t),n=(Number(e.settingsVersion)||1)>=2&&typeof e.autoTranslate=="boolean"?e.autoTranslate:!1;return{...Vt,...e,settingsVersion:2,autoTranslate:n,hideTranslations:!!e.hideTranslations,fontSize:Yn(e.fontSize,13,34,Vt.fontSize),lineHeight:Yn(e.lineHeight,1.35,2.4,Vt.lineHeight),tocWidth:Yn(e.tocWidth,180,520,Vt.tocWidth),readingMode:e.readingMode==="page"?"book":Lp.has(e.readingMode)?e.readingMode:Vt.readingMode,pageAnimation:Dp.has(e.pageAnimation)?e.pageAnimation:Vt.pageAnimation,bookAnimation:Fp.has(e.bookAnimation)?e.bookAnimation:Vt.bookAnimation,fontFamily:Op.has(e.fontFamily)?e.fontFamily:Vt.fontFamily,fontWeight:zp.has(Number(e.fontWeight))?Number(e.fontWeight):Vt.fontWeight,contentWidth:Yn(e.contentWidth,520,1600,Vt.contentWidth),brightness:Yn(e.brightness,.6,1.2,Vt.brightness),backgroundPreset:Pp.has(e.backgroundPreset)?e.backgroundPreset:Vt.backgroundPreset,customBackground:Wp(e.customBackground,Vt.customBackground),textTone:Bp.has(e.textTone)?e.textTone:Vt.textTone,backgroundImageKey:typeof e.backgroundImageKey=="string"?e.backgroundImageKey:"",backgroundImageOpacity:Yn(e.backgroundImageOpacity,0,.85,Vt.backgroundImageOpacity),backgroundImageBlur:Yn(e.backgroundImageBlur,0,12,Vt.backgroundImageBlur),annotationPanelOpen:!!e.annotationPanelOpen}}catch{return{...Vt}}}function Qc(t){try{localStorage.setItem(Nc,JSON.stringify(t))}catch{}}function Jc(t){let e=Number(t)||0;return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:e<1024*1024*1024?`${(e/1024/1024).toFixed(1)} MB`:`${(e/1024/1024/1024).toFixed(2)} GB`}function Es(t){if(!t)return"";let e=Date.now()-Number(t);return e<6e4?"\u521A\u521A":e<36e5?`${Math.floor(e/6e4)} \u5206\u949F\u524D`:e<864e5?`${Math.floor(e/36e5)} \u5C0F\u65F6\u524D`:e<7*864e5?`${Math.floor(e/864e5)} \u5929\u524D`:new Date(t).toLocaleDateString("zh-CN")}function ed(t){let e=String(t??"").replace(/\s+/gu,"");if(e.length<40)return!1;let r=$p(e),n=(e.match(/[A-Za-zÀ-ÖØ-öø-ÿ\u0400-\u04ff]/gu)??[]).length/e.length;return r<.18&&n>.45}var fr=Lt(require("react"),1);var ve=require("react/jsx-runtime"),Ar=t=>t.title||"\u672A\u547D\u540D\u6587\u6863";function Ns(t,e){return`${t.title||""} ${t.author||""}`.toLowerCase().includes(e)}function jp({book:t}){let[e,r]=fr.default.useState(!1);return t.cover&&!e?(0,ve.jsx)("img",{src:t.cover,alt:"",loading:"lazy",decoding:"async",onError:()=>r(!0)}):(0,ve.jsx)("span",{className:"dshr-collection__spine",children:nn(t.format)})}function td({folder:t,expanded:e,onToggle:r,onOpen:n,onRead:o}){let a=fr.default.useId(),i=fr.default.useId();return(0,ve.jsxs)("article",{className:"dshr-collection","data-collection-id":t.id,children:[(0,ve.jsxs)("button",{type:"button",className:"dshr-collection__open","aria-label":`\u6253\u5F00\u4E66\u5355 ${t.name}`,"aria-describedby":i,onClick:n,children:[(0,ve.jsxs)("span",{className:"dshr-collection__top",children:[(0,ve.jsx)("span",{className:"dshr-collection__icon",children:(0,ve.jsx)(Za,{size:17})}),(0,ve.jsxs)("span",{className:"dshr-collection__heading",children:[(0,ve.jsx)("strong",{title:t.name,children:t.name}),(0,ve.jsxs)("small",{id:i,children:[t.system?"\u9ED8\u8BA4\u5206\u7C7B":"\u81EA\u5EFA\u4E66\u5355"," \xB7 ",t.books.length," \u672C"]})]}),(0,ve.jsx)(Ka,{size:16})]}),t.books.length?(0,ve.jsx)("span",{className:"dshr-collection__covers",children:t.books.slice(0,4).map(s=>(0,ve.jsxs)("span",{className:"dshr-collection__sample",children:[(0,ve.jsx)("span",{className:"dshr-collection__cover",children:(0,ve.jsx)(jp,{book:s},s.cover)}),(0,ve.jsx)("span",{className:"dshr-collection__title",title:Ar(s),children:Ar(s)})]},s.id))}):(0,ve.jsx)("span",{className:"dshr-collection__empty",children:"\u6682\u672A\u6536\u5F55\u4E66\u7C4D"})]}),t.books.length>0&&(0,ve.jsxs)("button",{type:"button",className:"dshr-collection__peek",onClick:r,"aria-expanded":e,"aria-controls":a,children:[e?"\u6536\u8D77\u4E66\u540D":`\u9884\u89C8\u5168\u90E8 ${t.books.length} \u672C`," ",(0,ve.jsx)(pc,{size:13})]}),t.books.length>0&&(0,ve.jsx)("ul",{className:"dshr-collection__preview",id:a,hidden:!e,"aria-label":`${t.name}\u4E66\u540D\u6E05\u5355`,children:e&&t.books.map(s=>(0,ve.jsx)("li",{children:(0,ve.jsxs)("button",{type:"button",onClick:()=>o(s),children:[(0,ve.jsx)("span",{children:Ar(s)}),(0,ve.jsx)("small",{children:nn(s.format)})]})},s.id))})]})}function rd({action:t,books:e,collections:r,onClose:n,onCreate:o,onSave:a,onDelete:i}){let s=fr.default.useRef(null),l=fr.default.useRef(!1),[c,h]=fr.default.useState(!1),[p,u]=fr.default.useState(""),[g,w]=fr.default.useState(t.collection?.name??""),[m,_]=fr.default.useState(""),y=t.collection?.bookIds??[],[k,N]=fr.default.useState(()=>new Set(t.bookIds??y)),[A,E]=fr.default.useState(""),T=fr.default.useId(),M=t.kind==="add",R=t.kind==="delete",v=M?"\u52A0\u5165\u4E66\u5355":R?"\u5220\u9664\u4E66\u5355":t.collection?"\u7F16\u8F91\u4E66\u5355":"\u65B0\u5EFA\u4E66\u5355",O=m.trim().toLowerCase(),L=!M&&!R?e.filter(U=>Ns(U,O)):[];fr.default.useLayoutEffect(()=>{let U=s.current;return U.showModal(),()=>U.close()},[]);async function F(U){if(U.preventDefault(),!l.current){l.current=!0,h(!0),u("");try{R?await i(t.collection.id):M?await a({id:A,add:t.bookIds}):await a({id:t.collection?.id,name:g,add:[...k].filter(J=>!y.includes(J)),remove:y.filter(J=>!k.has(J))}),n()}catch(J){u(J?.message||"\u4E66\u5355\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002")}finally{l.current=!1,h(!1)}}}return(0,ve.jsx)("dialog",{ref:s,className:"dshr-modal dshr-collection-dialog","aria-labelledby":T,onCancel:U=>{U.preventDefault(),l.current||n()},children:(0,ve.jsxs)("form",{onSubmit:F,children:[(0,ve.jsx)("h3",{id:T,children:v}),R?(0,ve.jsxs)("p",{children:["\u5220\u9664\u300C",t.collection.name,"\u300D\u540E\uFF0C\u91CC\u9762\u7684\u4E66\u4ECD\u53EF\u5728\u5168\u90E8\u6587\u6863\u4E2D\u6253\u5F00\uFF0C\u8FDB\u5EA6\u4E0E\u6279\u6CE8\u4F1A\u4FDD\u7559\u3002"]}):M?(0,ve.jsxs)("label",{className:"dshr-collection-dialog__field",children:[(0,ve.jsxs)("span",{children:["\u5C06 ",t.bookIds.length," \u672C\u4E66\u52A0\u5165"]}),(0,ve.jsxs)("select",{value:A,onChange:U=>E(U.target.value),disabled:c,required:!0,children:[(0,ve.jsx)("option",{value:"",children:"\u9009\u62E9\u81EA\u5EFA\u4E66\u5355"}),r.map(U=>(0,ve.jsxs)("option",{value:U.id,children:[U.name," \xB7 ",U.bookIds.length," \u672C"]},U.id))]})]}):(0,ve.jsxs)(ve.Fragment,{children:[(0,ve.jsxs)("label",{className:"dshr-collection-dialog__field",children:[(0,ve.jsx)("span",{children:"\u4E66\u5355\u540D\u79F0"}),(0,ve.jsx)("input",{value:g,onChange:U=>w(U.target.value),placeholder:"\u4F8B\u5982\uFF1A\u8BBA\u6587\u5F85\u8BFB",maxLength:60,disabled:c,required:!0})]}),(0,ve.jsxs)("div",{className:"dshr-collection-dialog__listbar",children:[(0,ve.jsx)("strong",{children:"\u6536\u5F55\u4E66\u7C4D"}),(0,ve.jsxs)("span",{children:[k.size," \u672C\u5DF2\u9009"]})]}),e.length>0&&(0,ve.jsxs)("label",{className:"dshr-library__search dshr-collection-dialog__search",children:[(0,ve.jsx)(Jo,{size:14}),(0,ve.jsx)("input",{type:"search",placeholder:"\u641C\u7D22\u4E66\u540D\u3001\u4F5C\u8005","aria-label":"\u641C\u7D22\u53EF\u52A0\u5165\u7684\u4E66\u7C4D",value:m,onChange:U=>_(U.target.value)})]}),L.length?(0,ve.jsx)("div",{className:"dshr-collection-dialog__choices",children:L.map(U=>(0,ve.jsxs)("label",{children:[(0,ve.jsx)("input",{type:"checkbox",checked:k.has(U.id),disabled:c,onChange:J=>{let Y=J.target.checked;N(ae=>{let fe=new Set(ae);return Y?fe.add(U.id):fe.delete(U.id),fe})}}),(0,ve.jsxs)("span",{children:[Ar(U),(0,ve.jsx)("small",{children:[nn(U.format),U.author].filter(Boolean).join(" \xB7 ")})]})]},U.id))}):(0,ve.jsx)("p",{children:e.length?"\u6CA1\u6709\u5339\u914D\u7684\u4E66\u7C4D\u3002":"\u53EF\u4EE5\u5148\u521B\u5EFA\u7A7A\u4E66\u5355\uFF0C\u5BFC\u5165\u4E66\u7C4D\u540E\u518D\u52A0\u5165\u3002"})]}),p&&(0,ve.jsx)("p",{className:"dshr-collection-dialog__error",role:"alert",children:p}),(0,ve.jsxs)("div",{className:"dshr-modal__actions dshr-collection-dialog__actions",children:[M&&(0,ve.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:c,onClick:()=>o(t.bookIds),children:[(0,ve.jsx)(_n,{size:15})," \u65B0\u5EFA\u4E66\u5355"]}),(0,ve.jsx)("button",{type:"button",className:"dshr-btn",disabled:c,onClick:n,children:"\u53D6\u6D88"}),(0,ve.jsxs)("button",{type:"submit",className:`dshr-btn ${R?"dshr-btn--danger":"dshr-btn--primary"}`,disabled:c||(M?!A:!R&&!g.trim()),children:[R&&(0,ve.jsx)(kn,{size:14}),c?"\u6B63\u5728\u4FDD\u5B58\u2026":R?"\u5220\u9664\u4E66\u5355":M?"\u52A0\u5165":"\u4FDD\u5B58\u4E66\u5355"]})]})]})})}var j=require("react/jsx-runtime");function nd(t){let e=t.progress;return e?typeof e.page=="number"&&typeof e.pages=="number"&&e.pages>0?Math.max(0,Math.min(100,e.page/e.pages*100)):typeof e.percent=="number"?Math.max(0,Math.min(100,e.percent)):typeof e.chapter=="number"&&typeof e.chapters=="number"&&e.chapters>0?Math.max(0,Math.min(100,(e.chapter+1)/e.chapters*100)):0:0}var Gp={book:"paper",paper:"document",document:"book"};function qp({book:t,onOpen:e,onDelete:r,onCycleCategory:n,onAdd:o,onRemove:a,onEditCitation:i,selection:s,onToggle:l}){let c=nd(t),h=[nn(t.format),t.author||"",Jc(t.size)].filter(Boolean).join(" \xB7 ");return(0,j.jsxs)("article",{className:`dshr-book-card${s?" is-selecting":""}${s?.has(t.id)?" is-selected":""}`,children:[(0,j.jsxs)("button",{type:"button",className:"dshr-book","aria-pressed":s?s.has(t.id):void 0,"aria-label":s?`\u9009\u62E9 ${Ar(t)}`:`\u6253\u5F00 ${Ar(t)}`,onClick:()=>s?l(t.id):e(t),children:[(0,j.jsx)("span",{className:"dshr-book__media",children:t.cover?(0,j.jsx)("img",{className:"dshr-book__cover",src:t.cover,alt:"",loading:"lazy",decoding:"async"}):(0,j.jsx)("span",{className:"dshr-book__spine",children:nn(t.format)})}),(0,j.jsxs)("span",{className:"dshr-book__body",children:[(0,j.jsx)("span",{className:"dshr-book__title",children:Ar(t)}),(0,j.jsx)("span",{className:"dshr-book__meta",children:h}),(0,j.jsxs)("span",{className:"dshr-book__foot",children:[(0,j.jsx)("span",{children:t.lastOpenedAt?`\u9605\u8BFB\u4E8E ${Es(t.lastOpenedAt)}`:Es(t.addedAt)}),(0,j.jsx)("span",{children:c>0?`${Math.round(c)}%`:"\u672A\u5F00\u59CB"})]}),(0,j.jsx)("span",{className:"dshr-book__progress","aria-hidden":"true",children:(0,j.jsx)("i",{style:{"--p":`${c}%`}})})]}),s&&(0,j.jsx)("span",{className:"dshr-book__selected","aria-hidden":"true",children:s.has(t.id)&&(0,j.jsx)(bc,{size:14})})]}),!s&&(0,j.jsxs)("div",{className:"dshr-book__badges",children:[(0,j.jsxs)("button",{type:"button",className:`dshr-book__category is-${t.category||"document"}`,title:`\u9ED8\u8BA4\u5206\u7C7B\uFF1A${oa(t.category)}${t.categoryManual?"\uFF08\u624B\u52A8\uFF09":"\uFF08\u81EA\u52A8\uFF09"} \xB7 \u70B9\u51FB\u5207\u6362`,onClick:()=>n(t),children:[(0,j.jsx)(vc,{size:11})," ",oa(t.category)]}),t.format==="pdf"&&i?(0,j.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--ghost","aria-label":`\u7F16\u8F91\u8BBA\u6587\u51FA\u5904 ${Ar(t)}`,onClick:()=>i(t),children:"\u51FA\u5904"}):null,(0,j.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--ghost dshr-book__add","aria-label":`\u5C06 ${Ar(t)} \u52A0\u5165\u4E66\u5355`,onClick:()=>o([t.id]),children:[(0,j.jsx)(_n,{size:13})," \u52A0\u5165\u4E66\u5355"]}),a?(0,j.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost","aria-label":`\u4ECE\u6B64\u4E66\u5355\u79FB\u51FA ${Ar(t)}`,title:"\u4ECE\u6B64\u4E66\u5355\u79FB\u51FA",onClick:()=>a([t.id]),children:(0,j.jsx)(Qa,{size:14})}):(0,j.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost dshr-book__delete","aria-label":`\u4ECE\u4E66\u67B6\u5220\u9664 ${Ar(t)}`,title:"\u4ECE\u4E66\u67B6\u5220\u9664",onClick:()=>r(t),children:(0,j.jsx)(kn,{size:14})})]})]})}function od({books:t,collections:e,onCollectionsChange:r,loading:n,resumeBook:o,onResume:a,importing:i,organizing:s,categoryFilter:l,onCategoryFilter:c,onAutoOrganize:h,onImport:p,onOpen:u,onDelete:g,onCycleCategory:w,onSettings:m,onOnlineImport:_,onEvidence:y,onEditCitation:k}){let N=gr.default.useRef(null),[A,E]=gr.default.useState(!1),[T,M]=gr.default.useState(""),[R,v]=gr.default.useState(null),[O,L]=gr.default.useState(null),[F,U]=gr.default.useState(null),[J,Y]=gr.default.useState(""),ae=gr.default.useRef(0),fe=gr.default.useRef(null),q=gr.default.useRef(null),se=gr.default.useRef(!1),de=gr.default.useMemo(()=>{let S=new Map(t.map(ne=>[ne.id,ne])),b=new Map(ta.map(ne=>[ne.id,[]])),re=[...t].sort((ne,ue)=>ne.addedAt-ue.addedAt);for(let ne of re)b.get(ne.category)?.push(ne);return[...e.map(ne=>({...ne,books:ne.bookIds.map(ue=>S.get(ue)).filter(Boolean)})),...ta.map(ne=>({id:ne.id,name:ne.label,system:!0,books:b.get(ne.id)}))]},[t,e]),P=de.find(S=>S.id===l),$=P?.books??t,B=T.trim().toLowerCase(),ie=B?$.filter(S=>Ns(S,B)):$,ee=O?$.filter(S=>O.has(S.id)).map(S=>S.id):[];gr.default.useLayoutEffect(()=>{se.current&&(se.current=!1,q.current?.focus({preventScroll:!0}))},[l]);function Ie(S){se.current=!0,c(S),M(""),L(null),v(null),Y(""),fe.current?.scrollTo({top:0})}let Xe=(S=[])=>U({kind:"edit",bookIds:S}),Re=S=>e.length?U({kind:"add",bookIds:S}):Xe(S);async function Fe(S){let b=await Mc(S);return r(re=>re.some(ne=>ne.id===b.id)?re.map(ne=>ne.id===b.id?b:ne):[...re,b]),b}async function Pe(S){try{await Fe({id:P.id,remove:S}),L(null),Y(`\u5DF2\u4ECE\u300C${P.name}\u300D\u79FB\u51FA ${S.length} \u672C\u3002`)}catch(b){Y(b?.message||"\u79FB\u51FA\u4E66\u5355\u5931\u8D25\u3002")}}async function Te(S){await Oc(S),r(b=>b.filter(re=>re.id!==S)),l===S&&Ie("all"),Y("\u4E66\u5355\u5DF2\u5220\u9664\u3002")}let f=()=>N.current?.click(),d=S=>{S.preventDefault(),ae.current=0,E(!1);let b=[...S.dataTransfer?.files??[]].filter(re=>ws(re.name));if(b.length===0){p([],{rejected:!0});return}p(b)};return(0,j.jsxs)("div",{className:"dshr-library",ref:fe,children:[(0,j.jsxs)("div",{className:"dshr-library__inner",children:[(0,j.jsxs)("header",{className:"dshr-hero",children:[(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:"dshr-hero__eyebrow",children:[(0,j.jsx)(Qo,{size:15})," DSH READER \xB7 LIBRARY"]}),(0,j.jsx)("h1",{children:"\u6211\u7684\u4E66\u67B6"}),(0,j.jsx)("p",{children:"\u7528\u4E66\u5355\u6574\u7406\u4E66\u7C4D\u3001\u8BBA\u6587\u548C\u9605\u8BFB\u8D44\u6599\u3002"})]}),(0,j.jsxs)("div",{className:"dshr-hero__actions",children:[(0,j.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:f,disabled:i,children:[i?(0,j.jsx)("span",{className:"dshr-spinner"}):(0,j.jsx)(_n,{size:15}),i?"\u6B63\u5728\u52A0\u5165\u4E66\u67B6\u2026":"\u5BFC\u5165\u6587\u6863"]}),(0,j.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:_,title:"\u4ECE\u53E4\u767B\u5821\u3001Standard Ebooks\u3001arXiv \u7B49\u516C\u5F00\u6765\u6E90\u4E0B\u8F7D\u5E76\u6253\u5F00",children:[(0,j.jsx)(ri,{size:15})," \u516C\u5F00\u4E66\u5E93\u5BFC\u5165"]}),(0,j.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:h,disabled:s||t.length===0,title:"\u6309\u6587\u4EF6\u7C7B\u578B\u4E0E\u5143\u6570\u636E\uFF0C\u628A\u4E66\u67B6\u6574\u7406\u6210\u4E66\u7C4D / \u6587\u732E / \u6587\u6863",children:[s?(0,j.jsx)("span",{className:"dshr-spinner"}):(0,j.jsx)(xc,{size:15}),s?"\u6574\u7406\u4E2D\u2026":"\u4E00\u952E\u6574\u7406"]}),(0,j.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:m,title:"\u9605\u8BFB\u4E0E\u4E66\u67B6\u8BBE\u7F6E",children:[(0,j.jsx)(Ya,{size:15})," \u8BBE\u7F6E"]}),(0,j.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>y(),children:"\u8BC1\u636E\u5E93"})]})]}),o?(0,j.jsxs)("button",{type:"button",className:"dshr-resume",onClick:()=>a(o),children:[(0,j.jsx)("span",{className:"dshr-resume__mark",children:(0,j.jsx)(Qo,{size:19})}),(0,j.jsxs)("span",{className:"dshr-resume__body",children:[(0,j.jsx)("span",{className:"dshr-resume__eyebrow",children:"\u7EE7\u7EED\u4E0A\u6B21\u9605\u8BFB"}),(0,j.jsx)("strong",{children:o.title||"\u4E0A\u6B21\u6253\u5F00\u7684\u6587\u6863"}),(0,j.jsxs)("span",{className:"dshr-resume__meta",children:[nn(o.format),o.progress?.page?` \xB7 \u7B2C ${o.progress.page}${o.progress.pages?` / ${o.progress.pages}`:""} \u9875`:"",` \xB7 ${Math.round(nd(o))}%`]})]}),(0,j.jsx)("span",{className:"dshr-resume__arrow",children:"\u2192"})]}):null,!P&&!n&&(0,j.jsxs)("section",{className:"dshr-collections","aria-label":"\u4E66\u5355\u6587\u4EF6\u5939",children:[(0,j.jsxs)("div",{className:"dshr-collections__bar",children:[(0,j.jsx)("h2",{ref:q,tabIndex:-1,children:"\u4E66\u5355\u6587\u4EF6\u5939"}),(0,j.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>Xe(),children:[(0,j.jsx)(_n,{size:15})," \u65B0\u5EFA\u4E66\u5355"]})]}),(0,j.jsx)("div",{className:"dshr-collections__grid",children:de.map(S=>(0,j.jsx)(td,{folder:S,expanded:R===S.id,onToggle:()=>v(b=>b===S.id?null:S.id),onOpen:()=>Ie(S.id),onRead:u},S.id))})]}),!P&&(0,j.jsxs)("section",{className:`dshr-drop${t.length?" is-compact":""}${A?" is-over":""}`,onDragEnter:S=>{S.preventDefault(),ae.current+=1,E(!0)},onDragOver:S=>S.preventDefault(),onDragLeave:()=>{ae.current=Math.max(0,ae.current-1),ae.current===0&&E(!1)},onDrop:d,"aria-label":"\u62D6\u653E\u6587\u6863\u4EE5\u5BFC\u5165",children:[(0,j.jsx)("div",{className:"dshr-drop__mark",children:(0,j.jsx)(hc,{size:24})}),(0,j.jsxs)("div",{className:"dshr-drop__body",children:[(0,j.jsx)("div",{className:"dshr-drop__title",children:"\u62D6\u4E00\u4EFD\u6587\u732E\u6216\u4E66\u5230\u8FD9\u91CC\uFF0C\u6216\u70B9\u51FB\u5BFC\u5165"}),(0,j.jsx)("div",{className:"dshr-drop__hint",children:"\u6587\u4EF6\u53EA\u4FDD\u5B58\u5728\u672C\u673A\u6D4F\u89C8\u5668\u4E66\u67B6\u4E2D\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\uFF1B\u7FFB\u8BD1\u4EC5\u53D1\u9001\u5F53\u524D\u9009\u4E2D\u7684\u6BB5\u843D\u3002"}),!t.length&&(0,j.jsx)("div",{className:"dshr-drop__formats",children:["PDF","EPUB","MOBI","AZW3","TXT","Markdown","HTML"].map(S=>(0,j.jsx)("span",{className:"dshr-chip",children:S},S))})]}),(0,j.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:f,disabled:i,children:"\u9009\u62E9\u6587\u4EF6"})]}),P&&(0,j.jsxs)("div",{className:"dshr-collection-context",children:[(0,j.jsxs)("nav",{"aria-label":"\u4E66\u67B6\u4F4D\u7F6E",children:[(0,j.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--ghost",onClick:()=>Ie("all"),children:[(0,j.jsx)(Va,{size:15})," \u8FD4\u56DE\u4E66\u67B6"]}),(0,j.jsxs)("span",{ref:q,tabIndex:-1,"aria-current":"page",children:[(0,j.jsx)(Za,{size:16})," ",P.name]})]}),!P.system&&(0,j.jsxs)("div",{className:"dshr-collection-context__actions",children:[(0,j.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>y(P.id),children:"\u4E13\u9898\u4E0E\u8BC1\u636E"}),(0,j.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>U({kind:"edit",collection:P}),children:"\u7F16\u8F91\u4E66\u5355"}),(0,j.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--ghost",onClick:()=>U({kind:"delete",collection:P}),children:[(0,j.jsx)(kn,{size:15})," \u5220\u9664\u4E66\u5355"]})]})]}),(0,j.jsxs)("div",{className:"dshr-library__bar",children:[(0,j.jsx)("h2",{children:P?"\u4E66\u5355\u5185\u5BB9":"\u5168\u90E8\u6587\u6863"}),(0,j.jsxs)("div",{className:"dshr-library__search",children:[(0,j.jsx)(Jo,{size:14}),(0,j.jsx)("input",{type:"search",value:T,onChange:S=>M(S.target.value),placeholder:P?"\u641C\u7D22\u6B64\u4E66\u5355":"\u641C\u7D22\u4E66\u540D\u3001\u4F5C\u8005","aria-label":P?"\u641C\u7D22\u6B64\u4E66\u5355":"\u641C\u7D22\u4E66\u67B6"})]}),(0,j.jsxs)("span",{children:[ie.length," / ",$.length," \u672C"]}),$.length>0&&(0,j.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline","aria-pressed":!!O,onClick:()=>L(S=>S?null:new Set),children:O?"\u9000\u51FA\u591A\u9009":"\u591A\u9009"})]}),(0,j.jsx)("div",{className:"dshr-library__notice",role:"status",children:J}),O&&(0,j.jsxs)("div",{className:"dshr-collection-selection","aria-label":"\u6279\u91CF\u4E66\u5355\u64CD\u4F5C",children:[(0,j.jsxs)("span",{children:["\u5DF2\u9009 ",ee.length," \u672C"]}),(0,j.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",disabled:!ie.length,onClick:()=>L(S=>new Set([...S,...ie.map(b=>b.id)])),children:"\u5168\u9009\u5F53\u524D\u7ED3\u679C"}),(0,j.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:!ee.length,onClick:()=>Re(ee),children:"\u52A0\u5165\u4E66\u5355"}),P&&!P.system&&(0,j.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",disabled:!ee.length,onClick:()=>{Pe(ee)},children:"\u4ECE\u6B64\u4E66\u5355\u79FB\u51FA"})]}),n?(0,j.jsxs)("div",{className:"dshr-loading",style:{minHeight:180},children:[(0,j.jsx)("div",{className:"dshr-loading__ring"}),(0,j.jsx)("span",{children:"\u6B63\u5728\u6253\u5F00\u4E66\u67B6\u2026"})]}):ie.length===0?(0,j.jsxs)("div",{className:"dshr-empty-books",children:[B?`\u6CA1\u6709\u5339\u914D\u300C${T.trim()}\u300D\u7684\u6587\u6863\u3002`:P?`\u300C${P.name}\u300D\u8FD8\u6CA1\u6709\u4E66\u3002`:"\u5BFC\u5165\u6587\u6863\u540E\uFF0C\u5C31\u53EF\u4EE5\u628A\u5B83\u4EEC\u52A0\u5165\u4E66\u5355\u3002",P&&!P.system&&!B&&(0,j.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>U({kind:"edit",collection:P}),children:[(0,j.jsx)(_n,{size:15})," \u6DFB\u52A0\u4E66\u7C4D"]})]}):(0,j.jsx)("div",{className:"dshr-books",children:ie.map(S=>(0,j.jsx)(qp,{book:S,onOpen:u,onDelete:g,onEditCitation:k,onCycleCategory:b=>w(b,Gp[b.category||"document"]),onAdd:Re,onRemove:P&&!P.system?Pe:void 0,selection:O,onToggle:b=>L(re=>{let ne=new Set(re);return ne.has(b)?ne.delete(b):ne.add(b),ne})},S.id))}),(0,j.jsxs)("footer",{className:"dshr-library__foot",children:[(0,j.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,j.jsx)(So,{size:14})," \u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1"]}),(0,j.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,j.jsx)(Ln,{size:14})," \u9009\u4E2D\u95EE AI"]}),(0,j.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,j.jsx)(Jo,{size:14})," Google / \u5B66\u672F\u641C\u7D22"]}),(0,j.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,j.jsx)(dc,{size:14})," \u672C\u5730\u4E66\u67B6 \xB7 \u8FDB\u5EA6\u4E0E\u6279\u6CE8\u81EA\u52A8\u4FDD\u5B58"]})]})]}),F&&(0,j.jsx)(rd,{action:F,books:t,collections:e,onClose:()=>U(null),onCreate:Xe,onDelete:Te,onSave:async S=>{let b=await Fe(S);L(null),Y(F.kind==="add"?`\u5DF2\u52A0\u5165\u300C${b.name}\u300D\u3002`:`\u5DF2\u4FDD\u5B58\u300C${b.name}\u300D\u3002`)}},`${F.kind}:${F.collection?.id||""}`),(0,j.jsx)("input",{ref:N,type:"file",multiple:!0,accept:".pdf,.epub,.mobi,.azw,.azw3,.txt,.md,.markdown,.html,.htm,application/pdf,application/epub+zip,text/plain,text/markdown,text/html",className:"dshr-sr-only",tabIndex:-1,onChange:S=>{let b=[...S.target.files??[]];S.target.value="",b.length>0&&p(b)}})]})}var Nt=Lt(require("react"),1);var Xp=Object.freeze({"content-type":"application/json","x-dsh-reader":"1"}),on=class extends Error{constructor(e,r="REQUEST_FAILED",n=0){super(e),this.name="ReaderApiError",this.code=r,this.status=n}};async function id(t){let e=null;try{e=await t.json()}catch{}return new on(e?.error?.message||e?.message||`\u7FFB\u8BD1\u670D\u52A1\u4E0D\u53EF\u7528\uFF08HTTP ${t.status}\uFF09\u3002`,e?.error?.code||e?.code||"REQUEST_FAILED",t.status)}async function As(t,e,{signal:r}={}){let n;try{n=await fetch(t,{method:"POST",headers:Xp,body:JSON.stringify(e),signal:r,credentials:"same-origin"})}catch(o){throw o?.name==="AbortError"?o:new on("\u65E0\u6CD5\u8FDE\u63A5\u5230 DSH \u4E3B\u8FDB\u7A0B\uFF0C\u8BF7\u786E\u8BA4 DSH \u6B63\u5728\u8FD0\u884C\u3002","NETWORK",0)}if(!n.ok)throw await id(n);return n}function Zn(t){return t?.name==="AbortError"}async function No(t,e={}){let r=t.map(i=>({id:String(i.id),text:String(i.text??"")})).filter(i=>i.text.trim()!=="");if(r.length===0)return{};let n=await As("/dsh-reader/ai/translate",{segments:r,context:String(e.context??"").slice(0,1200),title:String(e.title??"").slice(0,300),glossary:String(e.glossary??"").slice(0,4e3),...e.expectedModel?{expectedModel:e.expectedModel}:{}},{signal:e.signal}),o=await n.json().catch(()=>null);if(!o||typeof o!="object"||!Array.isArray(o.translations))throw new on("\u7FFB\u8BD1\u670D\u52A1\u8FD4\u56DE\u4E86\u65E0\u6CD5\u8BC6\u522B\u7684\u7ED3\u679C\u3002","BAD_RESPONSE",n.status);let a={};for(let i of o.translations)i&&typeof i.id=="string"&&typeof i.zh=="string"&&i.zh.trim()!==""&&(a[i.id]=i.zh);if(Object.keys(a).length===0)throw new on("\u7FFB\u8BD1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u53EF\u7528\u8BD1\u6587\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","EMPTY_TRANSLATION",n.status);return e.includeMetadata?{translations:a,model:o.model,promptVersion:o.promptVersion}:a}async function sd({signal:t}={}){let e=await fetch("/dsh-reader/ai/status",{signal:t,credentials:"same-origin",headers:{"x-dsh-reader":"1"},cache:"no-store"});if(!e.ok)throw await id(e);return e.json()}function ad(t){let e=t.split(/\r?\n/u).filter(r=>r.startsWith("data:")).map(r=>r.slice(5).trimStart()).join(`
`);if(e==="")return null;try{return JSON.parse(e)}catch{return{type:"delta",text:e}}}async function Cs(t,{onDelta:e,onMeta:r}={}){let n=await As("/dsh-reader/ai/chat",t,{signal:t.signal});if(!n.body)throw new on("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u6D41\u5F0F\u54CD\u5E94\u3002","NO_STREAM",n.status);let o=n.body.getReader(),a=new TextDecoder,i="",s=!1,l=null;try{for(;;){let{value:c,done:h}=await o.read();if(h)break;i+=a.decode(c,{stream:!0});let p=i.search(/\r?\n\r?\n/u);for(;p!==-1;){let u=i.slice(0,p),g=i.slice(p).match(/^\r?\n\r?\n/u)?.[0]??`

`;i=i.slice(p+g.length);let w=ad(u);w&&(w.type==="delta"&&typeof w.text=="string"?e?.(w.text):w.type==="error"?l=new on(w.message||"AI \u56DE\u7B54\u5931\u8D25\u3002",w.code||"AI_FAILED"):w.type==="done"?s=!0:r?.(w)),p=i.search(/\r?\n\r?\n/u)}}if(i.trim()!==""){let c=ad(i);c?.type==="delta"&&typeof c.text=="string"&&e?.(c.text),c?.type==="error"&&(l=new on(c.message||"AI \u56DE\u7B54\u5931\u8D25\u3002",c.code||"AI_FAILED")),c?.type==="done"&&(s=!0)}}finally{o.releaseLock?.()}if(l)throw l}async function ld(t,{signal:e}={}){let r=await As("/dsh-reader/import/fetch",{url:String(t||"")},{signal:e}),n=await r.blob();if(!n.size)throw new on("\u6765\u6E90\u8FD4\u56DE\u4E86\u7A7A\u6587\u4EF6\u3002","EMPTY",0);let o="book",a=r.headers.get("x-dsh-reader-filename");if(a)try{o=decodeURIComponent(a)}catch{o=a}return new File([n],o,{type:n.type||"application/octet-stream"})}var En=Lt(require("react"),1);var hd=Object.freeze([{id:"yellow",label:"\u9EC4",value:"#f5d76e"},{id:"green",label:"\u7EFF",value:"#8fd18b"},{id:"pink",label:"\u7C89",value:"#f3a6c0"},{id:"blue",label:"\u84DD",value:"#94c9f0"}]),sa=Object.freeze([{id:"thin",label:"\u7EC6",value:4},{id:"medium",label:"\u4E2D",value:9},{id:"wide",label:"\u5BBD",value:16}]),pd=Object.freeze([{id:"ink",label:"\u58A8",value:"#3f3a33"},{id:"red",label:"\u6731",value:"#c2543f"},{id:"amber",label:"\u8D6D",value:"#a9772b"},{id:"blue",label:"\u84DD",value:"#3f6f97"}]),Ao=Object.freeze({highlight:"\u8367\u5149\u7B14",underline:"\u4E0B\u5212\u7EBF",note:"\u4FBF\u7B7E"}),Co=Object.freeze([{id:"highlight",label:Ao.highlight},{id:"underline",label:Ao.underline},{id:"note",label:Ao.note}]);function Is(t){return Ao[t]||"\u6807\u6CE8"}var pi="data-anno-block",fd=".dshr-block__body";function Rs(t){return t?t.ownerDocument?t.ownerDocument:t.nodeType===9?t:typeof globalThis<"u"&&globalThis.document?globalThis.document:null:null}function Ur(t,e=0){let r=typeof t=="number"?t:Number(t);return Number.isFinite(r)?Math.trunc(r):e}function nr(t,e,r){return Math.min(r,Math.max(e,t))}function di(t,e=5){let r=10**e;return Math.round(t*r)/r}function hi(t){return String(t??"").replace(/\s+/gu," ").trim()}function Vp(t){if(!t||t.nodeType!==1)return!1;let e=t.tagName;if(e==="SCRIPT"||e==="STYLE"||e==="NOSCRIPT"||e==="TEXTAREA"||e==="SVG"||e==="CANVAS")return!0;let r=t.classList;return!!(r&&(r.contains("dshr-translation")||r.contains("dshr-anno-ignore"))||typeof t.hasAttribute=="function"&&t.hasAttribute("data-anno-ignore"))}function Ms(t){let e=[],r=[],n=new Map,o=0;if(!t)return{nodes:e,starts:r,positions:n,total:o,text:""};let a=s=>{for(let l=s.firstChild;l;l=l.nextSibling)if(l.nodeType===3){let c=l.nodeValue||"";n.set(l,e.length),e.push(l),r.push(o),o+=c.length}else l.nodeType===1&&!Vp(l)&&a(l)};a(t);let i="";for(let s=0;s<e.length;s+=1)i+=e[s].nodeValue||"";return{nodes:e,starts:r,positions:n,total:o,text:i}}function Kp(t,e,r){if(!t||!e)return null;let n;try{n=t.createRange();let o=e.nodeType===3?e.nodeValue?e.nodeValue.length:0:e.childNodes?e.childNodes.length:0;return n.setStart(e,nr(Ur(r),0,o)),n.collapse(!0),n}catch{return null}}function cd(t,e,r,n){if(!r)return 0;if(r.nodeType===3){let o=t.positions.get(r),a=r.nodeValue||"";if(o!==void 0)return t.starts[o]+nr(Ur(n),0,a.length)}if(r===e||e.contains(r)){let o=Rs(e),a=Kp(o,r,n);if(!a)return 0;let i=o.createRange();for(let s=0;s<t.nodes.length;s+=1)try{if(i.setStart(t.nodes[s],0),i.collapse(!0),a.compareBoundaryPoints(0,i)<=0)return t.starts[s]}catch{}return t.total}try{return e.compareDocumentPosition(r)&4?t.total:0}catch{return 0}}function dd(t,e){if(!t.nodes.length)return null;let r=nr(Ur(e),0,t.total);for(let o=0;o<t.nodes.length;o+=1){let a=t.nodes[o].nodeValue?t.nodes[o].nodeValue.length:0,i=t.starts[o];if(r<i+a)return{node:t.nodes[o],offset:r-i};if(r===i+a&&a>0)return{node:t.nodes[o],offset:a}}let n=t.nodes[t.nodes.length-1];return{node:n,offset:n.nodeValue?n.nodeValue.length:0}}function Yp(t,e,r){if(!t)return null;let n=Ms(t);if(!n.nodes.length||n.total===0)return null;let o=nr(Ur(e),0,n.total),a=nr(Ur(r),0,n.total);a<o&&([o,a]=[a,o]);let i=dd(n,o),s=dd(n,a),l=Rs(t);if(!l||!i||!s)return null;try{let c=l.createRange();return c.setStart(i.node,i.offset),c.setEnd(s.node,s.offset),c}catch{return null}}function gd(t){let e=[];if(!t)return e;try{let r=typeof t.getClientRects=="function"?t.getClientRects():null;if(r&&typeof r.length=="number")for(let n=0;n<r.length;n+=1){let o=r[n];o&&e.push(o)}}catch{}if(e.length===0)try{let r=typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():null;r&&(r.width||r.height)&&e.push(r)}catch{}return e}function Zp(t){let e=1/0,r=1/0,n=-1/0,o=-1/0;for(let a=0;a<t.length;a+=1){let i=t[a],s=Number(i.width)||0,l=Number(i.height)||0;if(!s&&!l)continue;let c=Number(i.left)||0,h=Number(i.top)||0;e=Math.min(e,c),r=Math.min(r,h),n=Math.max(n,c+s),o=Math.max(o,h+l)}return Number.isFinite(e)?{left:e,top:r,width:n-e,height:o-r,right:n,bottom:o}:{left:0,top:0,width:0,height:0,right:0,bottom:0}}function Qp(t,e,r){let n=e,o=r;for(;n<o&&/\s/u.test(t[n]);)n+=1;for(;o>n&&/\s/u.test(t[o-1]);)o-=1;return{start:n,end:o,text:t.slice(n,o)}}function md(t,e){if(!t||!e||!e.rangeCount)return null;let r=Rs(t);if(!r)return null;let n;try{n=e.getRangeAt(0)}catch{return null}if(!n)return null;try{if(!t.contains(n.commonAncestorContainer))return null}catch{return null}let o=[],a;try{a=t.querySelectorAll(`[${pi}]`)}catch{return null}for(let s=0;s<a.length;s+=1){let l=a[s],c=l.getAttribute(pi);if(!c)continue;let h=l.classList&&l.classList.contains("dshr-block__body")?l:l.querySelector(fd);if(!h)continue;let p=Ms(h);if(p.total===0)continue;let u;try{u=r.createRange(),u.selectNodeContents(h)}catch{continue}let g=!1,w=!1,m=!1,_=!1;try{g=n.compareBoundaryPoints(3,u)>=0,w=n.compareBoundaryPoints(1,u)<=0,m=n.compareBoundaryPoints(0,u)<0,_=n.compareBoundaryPoints(2,u)>0}catch{continue}if(g||w)continue;let y=m?0:cd(p,h,n.startContainer,n.startOffset),k=_?p.total:cd(p,h,n.endContainer,n.endOffset),N=nr(Ur(y),0,p.total),A=nr(Ur(k),0,p.total);if(A<=N)continue;let E=Qp(p.text,N,A);E.end<=E.start||o.push({blockId:c,start:E.start,end:E.end,text:E.text})}if(o.length===0)return null;let i="";for(let s=0;s<o.length;s+=1)s>0&&(i+=`
`),i+=o[s].text;return i=i.replace(/\u00a0/gu," ").trim(),i?{text:i,rect:Zp(gd(n)),ranges:o}:null}function la(t,e){if(!t||!e)return[];let r;try{r=e.getBoundingClientRect()}catch{return[]}if(!r)return[];let n=Number(r.width)||0,o=Number(r.height)||0;if(n<=0||o<=0)return[];let a=Number(r.left)||0,i=Number(r.top)||0,s=a+n,l=i+o,c=gd(t);if(c.length===0)return[];let h=[];for(let p=0;p<c.length;p+=1){let u=c[p];if(!u)continue;let g=Number(u.width)||0,w=Number(u.height)||0;if(g<=0||w<=0)continue;let m=Number(u.left)||0,_=Number(u.top)||0,y=Math.max(m,a),k=Math.max(_,i),N=Math.min(m+g,s),A=Math.min(_+w,l);N-y<.5||A-k<.5||h.push({x:di(nr((y-a)/n,0,1)),y:di(nr((k-i)/o,0,1)),w:di(nr((N-y)/n,0,1)),h:di(nr((A-k)/o,0,1))})}return h.sort((p,u)=>p.y-u.y||p.x-u.x),h}function Jp(t){let e=String(t??""),r="",n=[],o=-1;for(let a=0;a<e.length;a+=1){let i=e[a];if(/\s/u.test(i)){o<0&&r.length>0&&(o=a);continue}o>=0&&(n.push(o),r+=" ",o=-1),n.push(a),r+=i}return{text:r,map:n}}function ef(t,e,r,n,o){let a=t.length,i=r[n];if(i===void 0)return null;let s=n+o<r.length?r[n+o]:a;return s>i?{start:i,end:s}:null}function ud(t,e){if(!t||!e)return null;let r=String(t),n=String(e).trim();if(!n)return null;let o=r.indexOf(n);if(o>=0)return{start:o,end:o+n.length};let a=Jp(r),i=hi(n);if(!i)return null;let s=a.text.indexOf(i);if(s>=0){let c=ef(r,a.text,a.map,s,i.length);if(c)return c}let l=Math.min(i.length,48);for(let c=l;c>=12;c-=4){let h=i.slice(0,c),p=a.text.indexOf(h);if(p<0)continue;let u=a.map[p];if(u===void 0)continue;let g=Math.min(r.length,u+i.length);if(g>u)return{start:u,end:g}}return null}function tf(t,e,r){let n=hi(t);if(!n)return!1;let o=[],a=hi(e);a&&o.push(a);let i=hi(r);return i&&i!==a&&o.push(i),o.length===0?!0:o.some(s=>n===s?!0:n.length<8||s.length<8?!1:n.includes(s)||s.includes(n))}function ui(t,e,r){let n=nr(Ur(e),0,t.index.total),o=nr(Ur(r),0,t.index.total);if(o<=n)return null;let a=Yp(t.body,n,o);return a?{blockId:t.blockId,start:n,end:o,text:t.index.text.slice(n,o),range:a}:null}function rf(t){let e=[];if(!t)return e;let r;try{r=t.querySelectorAll(`[${pi}]`)}catch{return e}for(let n=0;n<r.length;n+=1){let o=r[n],a=o.getAttribute(pi);if(!a)continue;let i=o.classList&&o.classList.contains("dshr-block__body")?o:o.querySelector(fd);if(!i)continue;let s=Ms(i);s.total!==0&&e.push({blockId:a,body:i,index:s})}return e}function bd(t,e){let r=[];if(!t||!e)return r;let n=rf(t);if(n.length===0)return r;let o=new Map;for(let s=0;s<n.length;s+=1)o.has(n[s].blockId)||o.set(n[s].blockId,n[s]);let a=typeof e.quote=="string"?e.quote:"",i=Array.isArray(e.ranges)?e.ranges:[];for(let s=0;s<i.length;s+=1){let l=i[s];if(!l||typeof l!="object")continue;let c=o.get(String(l.blockId==null?"":l.blockId));if(!c)continue;let h=nr(Ur(l.start),0,c.index.total),p=nr(Ur(l.end),0,c.index.total),u=p>h;if(u){let w=c.index.text.slice(h,p);if(tf(w,l.text,a)){let m=ui(c,h,p);m&&r.push(m);continue}}let g=ud(c.index.text,a||l.text);if(g){let w=ui(c,g.start,g.end);w&&r.push(w);continue}if(u){let w=ui(c,h,p);w&&r.push(w)}}if(r.length===0&&a){let s=a.split(/\n+/u).map(h=>h.trim()).filter(h=>h.length>=2),l=s.length>0?s:[a.trim()],c=new Set;for(let h=0;h<n.length;h+=1){let p=n[h];if(c.has(p.blockId))continue;let u=1/0,g=-1/0;for(let m=0;m<l.length;m+=1){let _=ud(p.index.text,l[m]);_&&(u=Math.min(u,_.start),g=Math.max(g,_.end))}if(!Number.isFinite(u)||g<=u)continue;c.add(p.blockId);let w=ui(p,u,g);w&&r.push(w)}}return r}var H0=require("react"),Dt=require("react/jsx-runtime");function Qn({size:t=14}){return(0,Dt.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,Dt.jsx)("path",{d:"M9.4 2.6 5.1 6.9l-.7 2.7 2.7-.7 4.4-4.3-2.1-2Z",stroke:"currentColor",strokeWidth:"1.35",strokeLinejoin:"round"}),(0,Dt.jsx)("path",{d:"m4.4 9.6-2.1 2.1c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0l2.1-2.1",stroke:"currentColor",strokeWidth:"1.35",strokeLinecap:"round"}),(0,Dt.jsx)("path",{d:"M3 13.5h7.4",stroke:"currentColor",strokeWidth:"1.35",strokeLinecap:"round",opacity:".55"})]})}function fi({size:t=14}){return(0,Dt.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,Dt.jsx)("path",{d:"M4.2 3v4.6a3.8 3.8 0 0 0 7.6 0V3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,Dt.jsx)("path",{d:"M3.4 13.3c2-.7 4.2-.8 9.2-.2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function zn({size:t=12}){return(0,Dt.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,Dt.jsx)("path",{d:"M3.5 2.7h9v6.2l-3.2 3.4H3.5z",fill:"currentColor",fillOpacity:".9",stroke:"currentColor",strokeWidth:"1",strokeLinejoin:"round"}),(0,Dt.jsx)("path",{d:"M9.3 12.3V9h3.1",stroke:"var(--dshr-anno-paper, #ffffff)",strokeWidth:"1.15",strokeLinejoin:"round"}),(0,Dt.jsx)("path",{d:"M5.4 5.5h5.1M5.4 7.4h3.4",stroke:"var(--dshr-anno-paper, #ffffff)",strokeWidth:"1",strokeLinecap:"round",opacity:".8"})]})}function xd({size:t=56}){return(0,Dt.jsxs)("svg",{width:t,height:t,viewBox:"0 0 56 56",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,Dt.jsx)("rect",{x:"8.5",y:"9",width:"33",height:"38",rx:"4",stroke:"currentColor",strokeWidth:"1.8",opacity:".55"}),(0,Dt.jsx)("path",{d:"M15 18h20M15 24h20M15 30h13",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",opacity:".42"}),(0,Dt.jsx)("path",{d:"M34 28.5h11.5v9.2l-4.6 5H34z",fill:"currentColor",fillOpacity:".16",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),(0,Dt.jsx)("path",{d:"M40.9 42.7v-5h4.6",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),(0,Dt.jsx)("path",{d:"M36.8 33.6h5.6M36.8 36.4h3.8",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",opacity:".7"})]})}function gi({size:t=13}){return(0,Dt.jsx)("svg",{width:t,height:t,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",focusable:"false",children:(0,Dt.jsx)("path",{d:"m3.4 3.4 7.2 7.2M10.6 3.4 3.4 10.6",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})})}function vd(t,e,r){let n=Number(t);return Number.isFinite(n)?Math.min(r,Math.max(e,n)):e}function mi(t){let e=Number(t);return .36+(vd(Number.isFinite(e)?e:9,4,16)-4)/12*.34}function bi(t){return(1-vd(t,.1,.95))*.82}function xi(t){let e=String(t??""),r=2166136261;for(let n=0;n<e.length;n+=1)r^=e.charCodeAt(n),r=Math.imul(r,16777619);return r>>>0}function nf(t,e=0){let r=(Number(t)^Math.imul((Number(e)||0)+1,2654435769))>>>0;return r^=r<<13,r>>>=0,r^=r>>>17,r^=r<<5,r>>>=0,r/4294967296}function vi(t,e){let r=Math.max(4,Number(e)||4),n=h=>nf(t,h)*2-1,o=3.7+n(1)*.5,a=3.1+n(2)*.45,i=3.7+n(3)*.45,s=3.3+n(4)*.55,l=r*.54,c=Math.max(1,r-.6);return[`M0.6 ${o.toFixed(2)}`,`C${(r*.18).toFixed(2)} ${a.toFixed(2)}`,`${(r*.34).toFixed(2)} ${a.toFixed(2)}`,`${l.toFixed(2)} ${i.toFixed(2)}`,`S${(r*.82).toFixed(2)} ${s.toFixed(2)}`,`${c.toFixed(2)} ${(s-.25).toFixed(2)}`].join(" ")}function yi(t){if(!t)return"\u6279\u6CE8";let e=typeof t.note=="string"?t.note.trim():"";if(e)return e.length>34?`${e.slice(0,34)}\u2026`:e;let r=typeof t.quote=="string"?t.quote.trim():"";return r?r.length>34?`${r.slice(0,34)}\u2026`:r:"\u6279\u6CE8"}var Jn=require("react/jsx-runtime");function of(t,e){let r=Math.min(t.left+t.width,e.left+e.width)-Math.max(t.left,e.left),n=Math.min(t.top+t.height,e.top+e.height)-Math.max(t.top,e.top);if(r<=0||n<=0)return 0;let o=r*n,a=Math.min(t.width*t.height,e.width*e.height);return a>0?o/a:0}function af(t){let e=[];if(!t)return e;try{let n=typeof t.getClientRects=="function"?t.getClientRects():null;if(n&&typeof n.length=="number")for(let o=0;o<n.length;o+=1){let a=n[o];if(!a)continue;let i=Number(a.width)||0,s=Number(a.height)||0;i<=0||s<=0||e.push({left:Number(a.left)||0,top:Number(a.top)||0,width:i,height:s})}}catch{}if(e.length===0)try{let n=typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():null;n&&(Number(n.width)||0)>0&&(Number(n.height)||0)>0&&e.push({left:Number(n.left)||0,top:Number(n.top)||0,width:Number(n.width)||0,height:Number(n.height)||0})}catch{}if(e.length<=1)return e;let r=[];for(let n=0;n<e.length;n+=1){let o=e[n],a=!1;for(let i=0;i<r.length;i+=1)if(of(o,r[i])>.55){a=!0;break}a||r.push(o)}return r}function sf(t,e){return!t||t.kind&&t.kind!=="flow"?!1:!e||t.chapterId==null?!0:t.chapterId===e}function lf(t,e){if(t===e)return!0;if(!t||!e||t.length!==e.length)return!1;for(let r=0;r<t.length;r+=1){let n=t[r],o=e[r];if(n.type!==o.type||n.key!==o.key||n.annotationId!==o.annotationId||n.x!==o.x||n.y!==o.y||n.width!==o.width||n.height!==o.height||n.color!==o.color||n.path!==o.path||n.isNote!==o.isNote||n.label!==o.label)return!1}return!0}function yd({containerRef:t,annotations:e,chapterId:r,onOpenAnnotation:n,layoutVersion:o}){let a=En.default.useRef(null),i=En.default.useRef(0),s=En.default.useRef({annotations:e,chapterId:r,onOpenAnnotation:n});s.current={annotations:e,chapterId:r,onOpenAnnotation:n};let[l,c]=En.default.useState({height:0,marks:[]}),h=En.default.useCallback(()=>{let u=a.current,g=t&&t.current?t.current:null;if(!u||!g)return;let w;try{w=u.getBoundingClientRect()}catch{return}if(!w)return;let{annotations:m,chapterId:_}=s.current,y=Array.isArray(m)?m:[],k=g.clientWidth||w&&g.getBoundingClientRect().width||0,N=0,A=null;try{if(A=g.querySelector(".dshr-content__inner"),!A){for(let M=g.firstElementChild;M;M=M.nextElementSibling)if(!(M===u||M.classList&&M.classList.contains("dshr-anno-layer"))){A=M;break}}}catch{A=null}if(A)try{let M=A.getBoundingClientRect();N=Math.max(0,M.top-w.top+M.height)}catch{N=0}let E=[];for(let M=0;M<y.length;M+=1){let R=y[M];if(!sf(R,_))continue;let v;try{v=bd(g,R)}catch{continue}if(!Array.isArray(v)||v.length===0)continue;let O=R.style==="underline"||R.style==="note"?R.style:"highlight",L=R.color||"#f5d76e",F=xi(`${R.id||""}|${R.createdAt||0}`),U=mi(R.width),J=R.id==null?"":String(R.id),Y=O==="note"||typeof R.note=="string"&&R.note.trim().length>0,ae=yi(R),fe=null;for(let q=0;q<v.length;q+=1){let se=v[q],de=af(se&&se.range);for(let P=0;P<de.length;P+=1){let $=de[P],B=$.left-w.left,ie=$.top-w.top,ee=`${J}:${q}:${P}`;if(fe={x:B,y:ie,width:$.width,height:$.height},O==="underline"){let Ie=$.width+2;E.push({type:"underline",key:`u:${ee}`,annotationId:J,x:B-1,y:ie+$.height-7.2,width:Ie,height:8,color:L,path:vi(F,Ie),isNote:!1,label:ae})}else{let Ie=Math.max(3.5,$.height*U);E.push({type:"band",key:`b:${ee}`,annotationId:J,x:B-1,y:ie+$.height*bi(U),width:$.width+2,height:Ie,color:L,path:"",isNote:O==="note",label:ae})}N=Math.max(N,ie+$.height+8)}}if(Y&&fe){let q=Math.min(Math.max(2,fe.x+fe.width+3),Math.max(2,k-21));E.push({type:"note",key:`n:${J}`,annotationId:J,x:q,y:Math.max(0,fe.y-1),width:19,height:19,color:L,path:"",isNote:!0,label:ae})}}let T=Math.max(0,Math.ceil(N+8));c(M=>M.height===T&&lf(M.marks,E)?M:{height:T,marks:E})},[t]),p=En.default.useCallback(()=>{if(typeof window>"u"||i.current)return;let u=()=>{i.current=0,h()};i.current=typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(u):window.setTimeout(u,16)},[h]);return En.default.useEffect(()=>{let u=t&&t.current?t.current:null,g=a.current;if(!u||!g||typeof window>"u")return;let w=[];p(),w.push(window.setTimeout(p,80));let m=null;if(typeof ResizeObserver<"u"){let T=new ResizeObserver(()=>p());try{T.observe(u);let M=g.parentElement;M&&M!==u&&T.observe(M);let R=u.querySelector(".dshr-content__inner");R&&!R.contains(g)&&T.observe(R)}catch{}m=T}let _=null;if(typeof MutationObserver<"u"){_=new MutationObserver(T=>{for(let M=0;M<T.length;M+=1){let R=T[M].target;if(!g.contains(R)){p();return}}});try{_.observe(u,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["class","style","data-rendered"]})}catch{}}let y=()=>p(),k=T=>{g.contains(T.target)||p()};window.addEventListener("resize",y),u.addEventListener("load",k,!0);let N=u.contains(g);N||u.addEventListener("scroll",y,{passive:!0});let A=null,E=typeof document<"u"?document.fonts:null;if(E&&typeof E.ready=="object"&&typeof E.ready.then=="function"&&E.ready.then(()=>p()).catch(()=>{}),E&&typeof E.addEventListener=="function"){A=()=>p();try{E.addEventListener("loadingdone",A)}catch{A=null}}return()=>{for(let T=0;T<w.length;T+=1)window.clearTimeout(w[T]);if(i.current&&(typeof window.cancelAnimationFrame=="function"?window.cancelAnimationFrame(i.current):window.clearTimeout(i.current),i.current=0),m&&m.disconnect(),_&&_.disconnect(),window.removeEventListener("resize",y),u.removeEventListener("load",k,!0),N||u.removeEventListener("scroll",y),E&&A)try{E.removeEventListener("loadingdone",A)}catch{}}},[t,p]),En.default.useEffect(()=>{if(p(),typeof window>"u")return;let u=window.setTimeout(p,40);return()=>window.clearTimeout(u)},[e,r,o,p]),(0,Jn.jsx)("div",{ref:a,className:"dshr-anno-layer",style:l.height>0?{height:`${l.height}px`}:void 0,"data-anno-layer":"flow",children:l.marks.map(u=>{if(u.type==="note")return(0,Jn.jsx)("button",{type:"button",className:"dshr-anno-note-btn",style:{left:`${u.x}px`,top:`${u.y}px`,"--dshr-anno-color":u.color},"data-anno-id":u.annotationId,title:u.label?`\u67E5\u770B\u6279\u6CE8\uFF1A${u.label}`:"\u67E5\u770B\u6279\u6CE8","aria-label":u.label?`\u67E5\u770B\u6279\u6CE8\uFF1A${u.label}`:"\u67E5\u770B\u6279\u6CE8",onMouseDown:g=>g.preventDefault(),onClick:()=>{let g=s.current.onOpenAnnotation;typeof g=="function"&&g(u.annotationId)},children:(0,Jn.jsx)(zn,{size:12})},u.key);if(u.type==="underline"){let g=Math.max(2,Math.round(u.width*100)/100);return(0,Jn.jsx)("svg",{className:"dshr-anno-underline",style:{left:`${u.x}px`,top:`${u.y}px`,width:`${u.width}px`,height:`${u.height}px`,"--dshr-anno-color":u.color},viewBox:`0 0 ${g} 8`,preserveAspectRatio:"none","data-anno-id":u.annotationId,"aria-hidden":"true",focusable:"false",children:(0,Jn.jsx)("path",{d:u.path})},u.key)}return(0,Jn.jsx)("span",{className:`dshr-anno-band${u.isNote?" dshr-anno-band--note":""}`,style:{left:`${u.x}px`,top:`${u.y}px`,width:`${u.width}px`,height:`${u.height}px`,"--dshr-anno-color":u.color},"data-anno-id":u.annotationId,"aria-hidden":"true"},u.key)})})}function ca(t){let e=t.scrollHeight-t.clientHeight;return e>0?Math.max(0,Math.min(1,t.scrollTop/e)):0}function wi(t,e,r){return{chapter:t,chapters:e,scrollRatio:r,percent:(t+r)/e*100}}function wd(t,e){let r=Math.max(1,e-48-56),n=t.filter(a=>Number.isFinite(a.top)&&a.bottom>a.top).toSorted((a,i)=>a.top-i.top),o=[0];for(let a of n)for(;a.bottom>o.at(-1)+48+r+.5;){let i=o.at(-1),s=a.top-48;o.push(s>i+.5?s:i+r)}return o}function cf(t,e){let r=0,n=t.length-1;for(;r<n;){let o=Math.ceil((r+n)/2);t[o]<=e+.5?r=o:n=o-1}return r}function kd(){let t=[0],e=0;return{get page(){return e+1},get pages(){return t.length},get top(){return t[e]},get starts(){return t},replace(r,n){t=r.length?r:[0],e=cf(t,Math.max(0,n||0))},turn(r){let n=Math.max(0,Math.min(t.length-1,e+Math.sign(r)));return n===e?!1:(e=n,!0)}}}function _d(t,e){let r=t.getBoundingClientRect(),n=[],o=(s,l)=>{s.height<2||s.width<.1||n.push({top:s.top-r.top+t.scrollTop,bottom:s.bottom-r.top+t.scrollTop,...l})},a=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let s=a.nextNode();s;s=a.nextNode()){if(!s.nodeValue?.trim()||s.parentElement.closest('[aria-hidden="true"],script,style'))continue;let l=document.createRange();l.selectNodeContents(s);for(let c of l.getClientRects())o(c,{node:s})}for(let s of e.querySelectorAll("img,svg,hr,video,canvas"))o(s.getBoundingClientRect(),{element:s,atomic:!0});n.sort((s,l)=>s.top-l.top);let i=[];for(let s of n){let l=i.at(-1),c=l&&Math.min(l.bottom,s.bottom)-Math.max(l.top,s.top);l&&!l.atomic&&!s.atomic&&c>Math.min(l.bottom-l.top,s.bottom-s.top)*.5?l.bottom=Math.max(l.bottom,s.bottom):i.push({...s})}return i}function Ps(t,e,r){let n=e+48,o=t.find(m=>m.bottom>n+.5)||t.at(-1);if(!o)return null;let a=o.element||o.node?.parentElement.closest(".dshr-block__body,.dshr-translation,.dshr-chapter__kicker")||o.node?.parentElement,i=r.getBoundingClientRect(),s=a?.getBoundingClientRect(),l=s?.height?(n-(s.top-i.top+r.scrollTop))/s.height:0;if(!o.node)return{element:a,ratio:l};let c=document.createRange(),h=1,p=o.node.length;for(;h<p;){let m=h+p>>1;c.setStart(o.node,0),c.setEnd(o.node,m);let _=c.getClientRects(),y=_[_.length-1];(y?y.top-i.top+r.scrollTop:-1/0)<o.top-1?h=m+1:p=m}let u=Math.max(0,h-1),g=u,w=document.createTreeWalker(a,NodeFilter.SHOW_TEXT);for(let m=w.nextNode();m&&m!==o.node;m=w.nextNode())g+=m.length;return{node:o.node,offset:u,textOffset:g,element:a,ratio:l}}function Sd(t,e,r){if(!t)return r;let n=e.getBoundingClientRect();if(!t.node?.isConnected&&t.element?.isConnected&&Number.isFinite(t.textOffset)){let o=t.textOffset,a=document.createTreeWalker(t.element,NodeFilter.SHOW_TEXT);for(let i=a.nextNode();i;i=a.nextNode()){if(o<i.length){t.node=i,t.offset=o;break}o-=i.length}}if(t.node?.isConnected&&e.contains(t.node)&&t.node.length){let o=document.createRange(),a=Math.min(t.offset,t.node.length-1);o.setStart(t.node,a),o.setEnd(t.node,a+1);let i=o.getBoundingClientRect();if(i.height)return i.top-n.top+e.scrollTop-48}if(t.element?.isConnected&&e.contains(t.element)){let o=t.element.getBoundingClientRect();return o.top-n.top+e.scrollTop+Math.max(0,t.ratio)*o.height-48}return r}var We=require("react/jsx-runtime"),Os=new Set(["heading","paragraph","list-item","quote"]),df=6;function uf(t,e){let r=t.style.scrollBehavior;t.style.scrollBehavior="auto",t.scrollTop=e,t.style.scrollBehavior=r}function hf(t,e){return`${t.title||""} \xB7 ${e?.title||""}`}var pf=Nt.default.memo(function({block:e}){if(e.kind==="image")return(0,We.jsxs)("figure",{children:[e.src?(0,We.jsx)("img",{src:e.src,alt:e.alt||"",loading:"lazy",decoding:"async"}):(0,We.jsx)("div",{className:"dshr-translation",children:"\u56FE\u7247\u672A\u80FD\u8F7D\u5165"}),e.caption?(0,We.jsx)("figcaption",{children:e.caption}):null]});if(e.kind==="table")return(0,We.jsx)("div",{dangerouslySetInnerHTML:{__html:e.html||""}});if(e.kind==="code")return(0,We.jsx)("pre",{className:"dshr-block__code",children:e.text||""});if(e.kind==="rule")return(0,We.jsx)("hr",{});if(e.kind==="heading"){let r=`h${Math.max(1,Math.min(6,e.level||2))}`;return(0,We.jsx)(r,{dangerouslySetInnerHTML:{__html:e.html||""}})}return(0,We.jsx)("p",{dangerouslySetInnerHTML:{__html:e.html||""}})});function ff({state:t,onRetry:e}){return t?t.status==="loading"?(0,We.jsx)("div",{className:"dshr-translation",children:(0,We.jsxs)("span",{className:"dshr-translation__loading",children:[(0,We.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u7FFB\u8BD1\u2026"]})}):t.status==="error"?(0,We.jsxs)("div",{className:"dshr-translation is-error",children:[(0,We.jsx)("p",{children:t.error||"\u8FD9\u6BB5\u7FFB\u8BD1\u5931\u8D25\u4E86\u3002"}),(0,We.jsx)("button",{type:"button",className:"dshr-translation__retry",onClick:e,children:"\u91CD\u8BD5"})]}):t.zh?(0,We.jsx)("div",{className:"dshr-translation",children:String(t.zh).split(/\n+/u).filter(Boolean).map((r,n)=>(0,We.jsx)("p",{children:r},n))}):null:null}function Td({book:t,chapterIndex:e,onChapterChange:r,settings:n,chapterEntry:o,onChapterEntered:a,onSelection:i,onProgress:s,annotations:l=[],onOpenAnnotation:c,focusAnnotation:h,layoutVersion:p=0}){let u=t.chapters[e],g=Nt.default.useRef(null),w=Nt.default.useRef(null),m=Nt.default.useRef(0),_=Nt.default.useRef(new Map),y=Nt.default.useRef(!1),k=Nt.default.useRef(null),N=Nt.default.useRef(!0),A=Nt.default.useMemo(()=>new Map((u?.blocks??[]).map(q=>[q.id,q])),[u]),[E,T]=Nt.default.useState({}),[M,R]=Nt.default.useState(!1);Nt.default.useEffect(()=>{N.current=!0;let q=new AbortController;return k.current=q,()=>{N.current=!1,q.abort()}},[]);let v=Nt.default.useCallback(q=>`${u?.id||"chapter"}:${q.id}`,[u?.id]),O=Nt.default.useCallback((q,se)=>{N.current&&T(de=>({...de,[q]:{...de[q]||{},...se}}))},[]),L=Nt.default.useCallback(async()=>{if(y.current||_.current.size===0)return;y.current=!0,R(!0);let q=[..._.current.entries()].slice(0,df);for(let[de]of q)_.current.delete(de);let se=hf(t,u);try{let de=await No(q.map(([P,$])=>({id:P,text:$.text})),{context:se,title:t.title,signal:k.current?.signal});for(let[P]of q)de[P]?O(P,{status:"done",zh:de[P],error:void 0}):O(P,{status:"error",error:"\u7FFB\u8BD1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u8FD9\u4E00\u6BB5\u3002"})}catch(de){if(!Zn(de))for(let[P]of q)O(P,{status:"error",error:de?.message||"\u7FFB\u8BD1\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002"})}finally{y.current=!1,N.current&&(R(!1),_.current.size>0&&window.setTimeout(()=>{L()},120))}},[t,u,O]),F=Nt.default.useCallback((q,{force:se=!1}={})=>{if(!q||!Os.has(q.kind)||!q.text?.trim())return;let de=v(q),P=E[de];!se&&(P?.status==="loading"||P?.status==="done")||(O(de,{status:"loading",error:void 0}),_.current.set(de,{text:q.text.slice(0,4e3)}),L())},[L,v,E,O]),U=Nt.default.useCallback(q=>{let se=q.slice(q.indexOf(":")+1),de=A.get(se);de&&F(de,{force:!0})},[A,F]),J=Nt.default.useCallback(()=>{for(let q of u?.blocks??[])Os.has(q.kind)&&q.text?.trim()&&F(q,{force:E[`${u.id}:${q.id}`]?.status==="error"})},[u,F,E]);Nt.default.useEffect(()=>{let q=g.current;if(!q||!n.autoTranslate||typeof IntersectionObserver>"u")return;w.current?.disconnect();let se=new IntersectionObserver(de=>{for(let P of de){if(!P.isIntersecting)continue;let $=P.target.getAttribute("data-seg-id"),B=A.get($);B&&F(B)}},{root:q,rootMargin:"420px 0px 520px 0px",threshold:.01});for(let de of q.querySelectorAll("[data-seg-id]"))se.observe(de);return w.current=se,()=>se.disconnect()},[A,u?.id,F,n.autoTranslate]),Nt.default.useLayoutEffect(()=>{let q=g.current;if(!q||!o||n.readingMode==="book")return;let se=o.edge==="end"?1:Math.max(0,Math.min(1,Number(o.scrollRatio)||0));uf(q,Math.max(0,q.scrollHeight-q.clientHeight)*se),a?.(o,ca(q))},[o,n.readingMode,a]);let Y=Nt.default.useCallback(q=>{let se=g.current;if(!se)return;let de=md(se,window.getSelection());if(!de){i?.(null);return}i?.({...de,source:"flow",context:u?.blocks.map(P=>P.text||"").join(`
`).slice(0,2400)||""})},[u,i]);Nt.default.useEffect(()=>{if(!h?.id)return;let q=g.current,se=q?.dataset.readerNavigation||"0",de=window.setTimeout(()=>{if(!q||q!==g.current||(q.dataset.readerNavigation||"0")!==se)return;let P=h.blockId?q.querySelector(`[data-anno-block="${CSS.escape(h.blockId)}"]`):null;if(!P)return;let $=new CustomEvent("dshr-flow-navigate",{cancelable:!0,detail:{element:P}});q.dispatchEvent($)&&P.scrollIntoView({block:"center",behavior:"smooth"})},120);return()=>window.clearTimeout(de)},[t,e,h]);let ae=Nt.default.useCallback(()=>{let q=g.current;if(!q)return;let se=Date.now();se-m.current<600||(m.current=se,s?.(wi(e,t.chapters.length,ca(q))))},[t.chapters.length,e,s]),fe=Nt.default.useCallback(q=>{let se=q.target.closest?.("a");if(!se)return;let de=se.getAttribute("data-chapter");if(de){q.preventDefault();let $=Number(de);Number.isInteger($)&&$>=0&&$<t.chapters.length&&r($);return}let P=se.getAttribute("href")||"";P&&!P.startsWith("#")&&(q.preventDefault(),window.open(P,"_blank","noopener,noreferrer"))},[t.chapters.length,r]);return u?(0,We.jsxs)("div",{className:"dshr-content",ref:g,role:"region","aria-label":"\u6B63\u6587\u9605\u8BFB\u533A",tabIndex:n.readingMode==="book"?0:void 0,onScroll:ae,onMouseUp:Y,onKeyUp:Y,onClick:fe,children:[(0,We.jsxs)("div",{className:"dshr-content__inner",children:[(0,We.jsxs)("article",{className:"dshr-chapter",children:[(0,We.jsxs)("div",{className:"dshr-chapter__kicker",children:["\u7B2C ",e+1," / ",t.chapters.length," \u7AE0",n.autoTranslate?" \xB7 \u5B9E\u65F6\u7FFB\u8BD1\u5DF2\u5F00\u542F":""]}),u.blocks.map(q=>{let se=v(q),de=E[se],P=Os.has(q.kind)&&q.text?.trim();return(0,We.jsxs)("div",{className:`dshr-block dshr-block--${q.kind}`,"data-kind":q.kind,"data-seg-id":P?q.id:void 0,"data-anno-block":q.id,children:[(0,We.jsx)("div",{className:"dshr-block__body",children:(0,We.jsx)(pf,{block:q})}),P?(0,We.jsx)(ff,{state:de,onRetry:()=>U(se)}):null]},q.id)})]}),(0,We.jsxs)("div",{className:"dshr-chapter__nav",children:[(0,We.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e<=0,onClick:()=>r(e-1),children:[(0,We.jsx)(Va,{size:15})," ",e>0?t.chapters[e-1].title:"\u5DF2\u662F\u7B2C\u4E00\u7AE0"]}),(0,We.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:J,disabled:M,title:"\u7FFB\u8BD1\u672C\u7AE0\u6240\u6709\u6BB5\u843D",children:[M?(0,We.jsx)("span",{className:"dshr-spinner"}):(0,We.jsx)(So,{size:15})," \u7FFB\u8BD1\u672C\u7AE0"]}),(0,We.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e>=t.chapters.length-1,onClick:()=>r(e+1),children:[e<t.chapters.length-1?t.chapters[e+1].title:"\u5DF2\u662F\u6700\u540E\u4E00\u7AE0"," ",(0,We.jsx)(Ka,{size:15})]})]})]}),(0,We.jsx)(yd,{containerRef:g,annotations:l,chapterId:u.id,onOpenAnnotation:c,layoutVersion:p})]}):(0,We.jsxs)("div",{className:"dshr-error-panel",children:[(0,We.jsx)("h3",{children:"\u8FD9\u4E00\u7AE0\u4E0D\u5B58\u5728"}),(0,We.jsx)("p",{children:"\u6587\u6863\u76EE\u5F55\u53EF\u80FD\u4E0D\u5B8C\u6574\uFF0C\u8BF7\u5C1D\u8BD5\u91CD\u65B0\u5BFC\u5165\u3002"})]})}var fa=Lt(require("react"),1);var Ls="6.5.438-reader4",to="/dsh-reader-assets/",Ed;function gf(){return`${to}pdf.bundle.js?v=${Ls}`}function mf(){return Ed||=import(gf()).then(t=>{if(!t?.getDocument||!t.GlobalWorkerOptions)throw new Error("PDF \u5F15\u64CE\u8D44\u6E90\u683C\u5F0F\u4E0D\u6B63\u786E");return t.GlobalWorkerOptions.workerSrc=`${to}pdf.worker.mjs?v=${Ls}`,t.GlobalWorkerOptions.rendererSrc=`${to}pdf.renderer.mjs?v=${Ls}`,t}).catch(t=>{throw Ed=null,t})}var an=()=>new DOMException("PDF operation cancelled","AbortError"),eo=t=>{if(t?.aborted)throw an()};async function bf(t,e,{signal:r,onRead:n,onError:o}={}){eo(r);let a=256*1024,i=new Uint8Array(await e.slice(0,Math.min(a,e.size)).arrayBuffer());eo(r);let s={bytes:i.length,reads:1,total:e.size};class l extends t.PDFDataRangeTransport{constructor(){super(e.size,i,!0)}aborted=!1;queue=[];active=0;requestDataRange(h,p){this.aborted||r?.aborted||(this.queue.push({begin:h,end:p}),this.pump())}pump(){for(;!this.aborted&&this.active<2&&this.queue.length;){let{begin:h,end:p}=this.queue.shift();this.active++,e.slice(h,p).arrayBuffer().then(u=>{if(this.aborted||r?.aborted)return;let g=new Uint8Array(u);if(g.length!==p-h)throw new Error("PDF \u5206\u6BB5\u8BFB\u53D6\u4E0D\u5B8C\u6574");s.bytes+=g.length,s.reads++,n?.({...s}),this.onDataRange(h,g)}).catch(u=>{this.aborted||r?.aborted||(this.abort(),o?.(u))}).finally(()=>{this.active--,this.pump()})}}abort(){this.aborted=!0,this.queue.length=0}}return n?.({...s}),{range:new l,stats:s,rangeChunkSize:a,disableStream:!0,disableAutoFetch:!0}}async function ki(t,{signal:e,onProgress:r,onRead:n,onError:o}={}){eo(e);let a=await mf();eo(e);let i,s,l,c,h=!1,p,u,g=new Promise((_,y)=>{u=y});g.catch(()=>{});let w=()=>p||(h=!0,clearTimeout(c),s?.abort(),e?.removeEventListener("abort",m),p=Promise.resolve().then(()=>i?.destroy()).catch(()=>{}).finally(()=>l?.destroy()),p),m=()=>{u(an()),w()};e?.addEventListener("abort",m,{once:!0});try{if(l=new a.PDFWorker({verbosity:0}),await Promise.race([l.promise,g,new Promise((k,N)=>{c=setTimeout(()=>N(new Error("PDF \u540E\u53F0\u7EBF\u7A0B\u542F\u52A8\u8D85\u65F6\uFF0C\u8BF7\u68C0\u67E5 Host \u7684 Worker \u8D44\u6E90\u4E0E\u5B89\u5168\u7B56\u7565\u3002")),1e4)})]),clearTimeout(c),eo(e),typeof Worker!="function"||!(l.port instanceof Worker))throw new Error("PDF \u540E\u53F0\u7EBF\u7A0B\u4E0D\u53EF\u7528\uFF0C\u8BF7\u68C0\u67E5 /dsh-reader-assets/pdf.worker.mjs \u548C Host \u7684 Worker \u5B89\u5168\u7B56\u7565\u3002");let _;if(typeof Blob<"u"&&t instanceof Blob?(_=await bf(a,t,{signal:e,onRead:n,onError:k=>{u(k),o?.(k),w()}}),s=_.range):_={data:(t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)).slice()},eo(e),h)throw an();i=a.getDocument({..._,worker:l,cMapUrl:`${to}cmaps/`,cMapPacked:!0,standardFontDataUrl:`${to}standard_fonts/`,wasmUrl:`${to}wasm/`,iccUrl:`${to}iccs/`,isEvalSupported:!1,disableWorkerRendering:!1,verbosity:0}),i.onProgress=r;let y=await Promise.race([i.promise,g]);if(eo(e),h)throw an();return{engine:a,pdf:y,close:w,source:_}}catch(_){throw await w(),_}}var _i=class{constructor(e=48*1024*1024){this.limit=e,this.bytes=0,this.entries=new Map}get(e){let r=this.entries.get(e);return r&&(this.entries.delete(e),this.entries.set(e,r)),r}set(e,r){this.delete(e);let n=r.bitmap.width*r.bitmap.height*4;if(n>this.limit){r.bitmap.close();return}for(this.entries.set(e,{...r,bytes:n}),this.bytes+=n;this.bytes>this.limit;)this.delete(this.entries.keys().next().value)}delete(e){let r=this.entries.get(e);r&&(this.bytes-=r.bytes,r.bitmap.close(),this.entries.delete(e))}clear(){for(let e of this.entries.keys())this.delete(e)}},Si=class{constructor(e,r,n=20){this.count=e,this.defaultHeight=r,this.gap=n,this.heights=new Map,this.tree=new Float64Array(e+1),this.paddingTop=18}setHeight(e,r){let n=r-(this.heights.get(e)??this.defaultHeight);this.heights.set(e,r);for(let o=e;o<=this.count;o+=o&-o)this.tree[o]+=n}top(e){let r=(e-1)*(this.defaultHeight+this.gap);for(let n=e-1;n>0;n-=n&-n)r+=this.tree[n];return this.paddingTop+r}height(e){return this.heights.get(e)??this.defaultHeight}pageAt(e){let r=1,n=this.count;for(;r<n;){let o=Math.ceil((r+n)/2);this.top(o)<=e?r=o:n=o-1}return r}entryAt(e){let r=this.pageAt(e);return{page:r,top:this.top(r),height:this.height(r)}}};var xf=/[\u1100-\u11FF\u2E80-\u2EFF\u3000-\u303F\u3040-\u30FF\u3100-\u312F\u3130-\u318F\u3400-\u4DBF\u4E00-\u9FFF\uA960-\uA97F\uAC00-\uD7AF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF]/,Ad=/[.。！？!?；;…]$/,vf="0123456789+\u2212-",Nd="\u2070\xB9\xB2\xB3\u2074\u2075\u2076\u2077\u2078\u2079\u207A\u207B\u207B";var yf=/[\u0000-\u0008\u000b\u000c\u000e-\u001f\ufffd]/u;function ua(t){return!!t&&xf.test(t)}function wf(t){return String(t).replace(/\u0000/g,"").replace(/[\t\u00a0\u2000-\u200a\u202f\u205f\u3000]/g," ").replace(/\s+/g," ")}function Ti(t){return typeof t=="number"&&Number.isFinite(t)?t:null}function da(t){let e=t&&t.transform;if(!Array.isArray(e)||e.length<6)return null;let r=Ti(e[4]),n=Ti(e[5]);if(r===null||n===null)return null;let o=Ti(t.width),a=Ti(t.height);return{x:r,y:n,width:o===null?null:Math.abs(o),height:a===null||a<=0?null:a}}function kf(t,e){let r=0;for(let n of t)r+=ua(n)?1:.5;return r*(e||10)}function _f(t){return{text:"",startX:t?t.x:0,endX:t?t.x:0,y:t?t.y:0,height:t&&t.height?t.height:0,hasGeometry:!!t}}function Sf(t,e,r){let n=wf(e);if(!n)return;if(r?.height&&t.hasGeometry&&t.height&&/^[+−-]?\d*$/.test(n)){let a=t.text.codePointAt(t.text.length-2),i=a>=119808&&a<=120779,s=/^[0-9]+$/.test(n)&&t.text&&Nd.includes(t.text.at(-1)),l=(r.y-t.y)/t.height,c=(r.x-t.endX)/t.height;(i||s)&&r.height<=t.height*.85&&l>=.18&&l<=.58&&c>=-.2&&c<=.18&&(n=[...n].map(h=>Nd[vf.indexOf(h)]).join(""))}let o="";if(t.text){let a=t.text[t.text.length-1],i=n[0];if(a===" "||i===" "||t.text.endsWith(" "))o="";else if(ua(a)||ua(i))o="";else if(r&&t.hasGeometry){let s=r.x-t.endX,l=Math.max(t.height||0,r.height||0,1);o=s>l*.18?" ":""}}if(t.text=(t.text+o+n).replace(/^ +/,""),r&&t.hasGeometry){let a=r.width===null?kf(n,r.height||t.height):r.width;t.endX=Math.max(t.endX,r.x+a),t.startX=Math.min(t.startX,r.x),r.height&&(t.height=Math.max(t.height,r.height))}}function Tf(t,e,r){if(!t||r)return!0;if(!e||!t.hasGeometry)return!1;let n=Math.max(t.height||0,e.height||0,1);return Math.abs(e.y-t.y)>n*.58||e.x<t.endX-n*2&&t.endX-t.startX>n}function Ef(t,e){let r=t.lastLine;if(!r)return!1;let n=r.height||10,o=e.height||n,a=Math.max(n,o,1),i=r.y-e.y;if(i<-a*1.2||i>a*1.68)return!0;let s=o/n;return!!(s>1.18||s<.84||e.startX-t.leftX>a*1.25||Ad.test(r.text)&&i>a*1.35&&r.endX<t.rightX-a*2)}function Nf(t){let e="";for(let r of t){let n=r.text.trim();if(!n)continue;if(!e){e=n;continue}let o=e[e.length-1],a=n[0];o==="-"||ua(o)||ua(a)?e+=n:e+=" "+n}return e}function Af(t){if(t.length<=1400)return[t];let e=[],r=t;for(;r.length>1400;){let n=Math.floor(770.0000000000001),o=Math.min(r.length,1400),a=-1;for(let s=o;s>n;s-=1)if(Ad.test(r[s-1])||r[s-1]===`
`){a=s;break}a<=0&&(a=r.lastIndexOf(" ",o),a<n&&(a=o));let i=r.slice(0,a).trim();i&&e.push(i),r=r.slice(a).trim()}return r&&e.push(r),e}function Cd(t,{metadata:e=!1}={}){let r=[],n=null,o=!1;if(Array.isArray(t))for(let[l,c]of t.entries()){if(!c||typeof c.str!="string")continue;if(!c.str.trim()){c.hasEOL&&(o=!0);continue}let h=da(c);Tf(n,h,o)&&(n=_f(h),n.itemIndices=[],r.push(n)),Sf(n,c.str,h),n.itemIndices.push(c.__pdfItemIndex??l),o=!!c.hasEOL}let a=[],i=null;for(let l of r)l.text.trim()&&(!i||Ef(i,l)?(i={lines:[l],lastLine:l,leftX:l.startX,rightX:l.endX},a.push(i)):(i.lines.push(l),i.lastLine=l,i.leftX=Math.min(i.leftX,l.startX),i.rightX=Math.max(i.rightX,l.endX)));let s=[];for(let l of a){let c=Nf(l.lines);for(let h of Af(c)){let p=h.trim();p&&s.push({src:p,...e?{itemIndices:l.lines.flatMap(u=>u.itemIndices)}:{}})}}return{text:s.map(l=>l.src).join(`

`),segments:s}}function Cf(t,e){let r=(t||[]).filter(u=>typeof u?.str=="string").map((u,g)=>({...u,__pdfItemIndex:g})),n=0;for(let u=0;u<(t||[]).length;u+=1)typeof t[u]?.str=="string"&&(r[n++].__pdfItemIndex=u);if(!e)return r;let o=r.filter(u=>u.str.trim().length>15&&u.width>e*.12),a=o.filter(u=>u.transform?.[4]<e*.3&&u.transform[4]+u.width<e*.5),i=o.filter(u=>u.transform?.[4]>=e*.49&&u.transform[4]<e*.66);if(a.length<4||i.length<4)return r;let s=r.filter(u=>u.str.trim()&&u.transform?.[4]<e*.48&&u.transform[4]+u.width>e*.52),c=i.filter(u=>{let g=u.transform[5],w=Math.max(2,(u.height||10)*.55);return a.some(m=>Math.abs(m.transform[5]-g)<w)&&!s.some(m=>Math.abs(m.transform[5]-g)<w)}).map(u=>u.transform[4]).sort((u,g)=>u-g);if(!c.some((u,g)=>c[g+3]-u<e*.02))return r;let h=[...new Set(o.filter(u=>u.transform?.[4]<e*.4&&u.transform[4]+u.width>e*.6).map(u=>Math.round(u.transform[5])))].sort((u,g)=>g-u),p=u=>{let g=u.transform?.[5]||0,w=h.filter(_=>_>g+3).length*2,m=h.some(_=>Math.abs(_-g)<=3);return[w+(m?1:0),m?0:u.transform?.[4]>=e*.48?2:1]};return r.sort((u,g)=>{let w=p(u),m=p(g);for(let _=0;_<w.length;_+=1)if(w[_]!==m[_])return w[_]-m[_];return u.__pdfItemIndex-g.__pdfItemIndex})}function If(t){for(let e=1;e+1<t.length;e++){let r=t[e];if(r.str!=="\u221A")continue;let n=t[e-1],o=t[e+1],a=t[e+2];if(n.str!=="1"||!/^[A-Za-z]$/u.test(o.str))continue;let i=da(n),s=da(r),l=da(o);if(!i?.height||!s?.width||!l?.height||!l.width||!i.width)continue;let c=i.x+i.width/2,h=(i.y-l.y)/l.height;if(s.y>=i.y||s.y<=l.y||h<.8||h>1.8||c<s.x||c>l.x+l.width||Math.abs(l.x-s.x-s.width)>l.height*.25||(r.str="/\u221A",!a||!/^[A-Za-z0-9]$/u.test(a.str)))continue;let p=da(a);p?.height&&p.height<=l.height*.85&&p.y<l.y-l.height*.1&&p.y>l.y-l.height*.55&&Math.abs(p.x-l.x-l.width)<=l.height*.18&&(a.str="_"+a.str)}}function Ds(t,e,r){let n=Cf(t,r);If(n);let o=Cd(n,{metadata:!0});return{text:o.text,segments:o.segments.map((a,i)=>{let s=a.itemIndices.map(u=>t[u]?.str?.trim()||""),l=(a.src.match(/(?:\b[Oo]|[𝑂𝒪ΩΘ])\s*\((?:[^()\n]|\([^()\n]{1,40}\)){1,120}\)/gu)||[]).filter(u=>/[\u{1d400}-\u{1d7ff}⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻+×/]|\(\s*[A-Z]\s*\)/u.test(u)),c=a.src.match(/(?<![\p{L}\p{N}.])\d+(?:[.,]\d+)?(?:\s*[-–—]\s*\d+(?:[.,]\d+)?)?\s*×(?!\s*\d)/gu)||[],h=a.src.match(/\b1\/√[A-Za-z](?:_[A-Za-z0-9])?(?![\p{L}\p{N}_])/gu)||[],p=s.filter(u=>/[∑∫√≈≠≤≥∂∞]/u.test(u)&&!/[A-Za-z]{4}|[\u3400-\u9fff]/u.test(u));return{...a,id:`p${e}-s${i}`,protectedTokens:[...new Set([...l,...c,...h,...p])],...s.some(u=>yf.test(u))?{sourceNeedsReview:!0}:{}}})}}var Id=String.raw`
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
`;var Rd=String.raw`
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
`;var ha=Lt(require("react"),1);var Md="reader-a-2";function ro(t){return String(t||"").split(/\r?\n/u).map(e=>e.trim()).filter(Boolean).join(`
`).slice(0,4e3)}function Rf(t,e=[]){let r=[...new Set([...e,...t.match(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]|\[\d+(?:\s*[,–—-]\s*\d+)*\]|https?:\/\/[^\s]+|\b10\.\d{4,9}\/[^\s]+/gu)||[]])].filter(a=>a&&t.includes(a)).sort((a,i)=>i.length-a.length),n=[],o=t;for(let a of r){let i=`\u27E6KEEP_${n.length}\u27E7`,s=o.split(a);s.length!==1&&(o=s.join(i),n.push({placeholder:i,token:a,count:s.length-1}))}return{text:o,restore(a){let i=String(a||"");for(let{placeholder:s,token:l,count:c}of n){let h=i.split(s);if(h.length-1!==c)throw new Error("\u8BD1\u6587\u9057\u6F0F\u6216\u91CD\u590D\u4E86\u516C\u5F0F\u6216\u5F15\u7528\u6807\u8BB0\uFF0C\u8BF7\u91CD\u8BD5\u672C\u6BB5\u3002");i=h.join(l)}if(/⟦KEEP_\d+⟧/u.test(i))throw new Error("\u8BD1\u6587\u5305\u542B\u65E0\u6CD5\u5BF9\u5E94\u7684\u516C\u5F0F\u6807\u8BB0\uFF0C\u8BF7\u91CD\u8BD5\u672C\u6BB5\u3002");return i}}}async function Mf(t,e){if(!globalThis.crypto?.subtle)return null;let r=new TextEncoder().encode(JSON.stringify([Md,t.documentId,e,"zh-CN",t.model?.provider,t.model?.model,t.model?.promptVersion,ro(t.glossary)])),n=await crypto.subtle.digest("SHA-256",r);return`${t.documentId}:${Array.from(new Uint8Array(n),o=>o.toString(16).padStart(2,"0")).join("")}`}var Ei=class{constructor({translate:e,cache:r,onChange:n=()=>{},onModelChanged:o=()=>{},prefetchDelay:a=700,requestTimeout:i=12e4}){this.translate=e,this.cache=r,this.onChange=n,this.onModelChanged=o,this.prefetchDelay=a,this.requestTimeout=i,this.sources=new Map,this.entries=new Map,this.jobs=new Map,this.preparing=new Map,this.epoch=0,this.sequence=0,this.activePage=1,this.visibleIds=new Set,this.config={},this.disposed=!1}configure(e){if(this.disposed)return;let r={...e,glossary:ro(e.glossary)},n=JSON.stringify([r.documentId,r.model,r.glossary,Md]),o=n!==this.namespace;if(o){let a=this.config.documentId;this.epoch+=1,this.abortJobs(),a&&a!==r.documentId&&this.sources.clear(),this.entries.clear(),this.preparing.clear(),this.namespace=n,this.cacheIssue=""}if(this.config=r,(!r.enabled||!r.canTranslate)&&this.abortJobs(),r.prefetch===!1)for(let a of[...this.jobs.values()])a.page!==this.activePage&&this.abortJob(a);if(o)for(let[a,i]of this.sources)this.registerPage(a,i);this.emit(),this.pump()}setFocus(e,r=[]){if(!this.disposed){if(e!==this.activePage){this.activePage=e,this.prefetchAfter=Date.now()+this.prefetchDelay,clearTimeout(this.timer),this.timer=null;for(let n of[...this.jobs.values()])n.page!==e&&this.abortJob(n);for(let n of this.sources.keys())if(Math.abs(n-e)>3){this.sources.delete(n);for(let[o,a]of this.entries)a.page===n&&this.entries.delete(o)}}this.visibleIds=new Set(r),this.emit(),this.pump()}}registerPage(e,r){if(this.disposed)return;this.sources.set(e,r);let n=[];for(let[o,a]of(r.segments||[]).entries()){let i=a.id||`p${e}-s${o}`,s=`${e}:${i}`,l=this.entries.get(s);if(l?.src===a.src&&l.sourceNeedsReview===a.sourceNeedsReview)continue;let c={...a,id:i,uid:s,index:o,page:e,status:"checking",zh:"",cached:!1};this.entries.set(s,c),a.sourceNeedsReview?c.status="source-review":n.push(c)}if(n.length){let o=Symbol(),a=this.epoch;this.preparing.set(e,o),Promise.all(n.map(i=>this.prepare(i,a))).finally(()=>{this.preparing.get(e)===o&&(this.preparing.delete(e),this.pump())})}this.emit()}fresh(e,r){return!this.disposed&&r===this.epoch&&this.entries.get(e.uid)===e}async prepare(e,r){try{let n=e.src.replace(/\s/gu,"");if(n&&(n.match(/[\u3400-\u9fff]/gu)||[]).length/n.length>=.55){e.zh=e.src,e.status="done",e.passthrough=!0,this.emit();return}if(e.key=await Mf(this.config,e.src),!this.fresh(e,r))return;let o=e.key&&await this.cache?.get(e.key);if(!this.fresh(e,r))return;typeof o?.zh=="string"&&o.zh.trim()?(e.zh=o.zh,e.cached=!0,e.status="done"):e.status="queued"}catch{if(!this.fresh(e,r))return;e.status="queued",this.cacheIssue="\u672C\u5730\u7F13\u5B58\u6682\u4E0D\u53EF\u7528\uFF0C\u672C\u6B21\u8BD1\u6587\u4ECD\u53EF\u9605\u8BFB\u3002"}this.emit(),this.pump()}abortJob(e){clearTimeout(e.timeout),e.controller.abort(),this.jobs.delete(e.id);for(let r of e.entries)this.entries.get(r.uid)===r&&r.job===e.id&&(r.status="queued")}abortJobs(){clearTimeout(this.timer),this.timer=null;for(let e of[...this.jobs.values()])this.abortJob(e)}pump(){if(!(this.disposed||!this.config.enabled||!this.config.canTranslate||!this.config.documentId))for(;this.jobs.size<2;){let e=[...this.entries.values()].filter(c=>c.page===this.activePage),r=e.some(c=>c.status==="queued"||c.status==="checking"||c.status==="loading"),n=[...this.entries.values()].filter(c=>c.status==="queued"&&!this.preparing.has(c.page)&&(c.page===this.activePage||this.config.prefetch!==!1&&!r&&c.page===this.activePage+1)).sort((c,h)=>c.page-this.activePage-(h.page-this.activePage)||Number(this.visibleIds.has(h.id))-Number(this.visibleIds.has(c.id))||c.index-h.index);if(!n.length)return;let o=n[0];if(o.page!==this.activePage&&Date.now()<(this.prefetchAfter||0)){this.timer||(this.timer=setTimeout(()=>{this.timer=null,this.pump()},this.prefetchAfter-Date.now()));return}let a=[],i=0,s=e.some(c=>c.status==="done")?3:1;for(let c of n){if(c.page!==o.page||a.length>=s||i+c.src.length>3e3&&a.length)break;a.push(c),i+=c.src.length}let l={id:++this.sequence,epoch:this.epoch,controller:new AbortController,page:o.page,entries:a,config:this.config};this.jobs.set(l.id,l);for(let c of a)c.status="loading",c.job=l.id,c.error="";l.timeout=setTimeout(()=>{if(this.jobs.get(l.id)===l){this.abortJob(l);for(let c of a)this.fresh(c,l.epoch)&&(c.status="error",c.error="\u672C\u6BB5\u7FFB\u8BD1\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5\u6216\u7A0D\u540E\u7EE7\u7EED\u3002");this.emit(),this.pump()}},this.requestTimeout),this.emit(),this.run(l)}}async run(e){let r=n=>!e.controller.signal.aborted&&this.fresh(n,e.epoch)&&n.job===e.id;try{let n=this.sources.get(e.page)?.segments||[],o=e.entries.map(c=>Rf(c.src,c.protectedTokens)),a=e.entries[0].index,i=n.slice(Math.max(0,a-1),a+e.entries.length+1);a===0&&i.unshift(this.sources.get(e.page-1)?.segments?.at(-1)),a+e.entries.length>=n.length&&i.push(this.sources.get(e.page+1)?.segments?.[0]);let s=i.filter(c=>c&&!c.sourceNeedsReview).map(c=>c.src).join(`
`).slice(0,1200),l=await this.translate(e.entries.map((c,h)=>({id:c.id,text:o[h].text})),{title:e.config.title,context:s,glossary:e.config.glossary,expectedModel:e.config.model,signal:e.controller.signal,includeMetadata:!0});if(l.model&&(l.model.provider!==e.config.model?.provider||l.model.model!==e.config.model?.model)||l.promptVersion&&l.promptVersion!==e.config.model?.promptVersion){let c=new Error("\u9ED8\u8BA4\u6A21\u578B\u5DF2\u53D8\u5316\uFF0C\u8BF7\u5237\u65B0\u7FFB\u8BD1\u670D\u52A1\u3002");throw c.code="MODEL_CHANGED",c}for(let[c,h]of e.entries.entries())if(r(h)){try{let p=l.translations?.[h.id];if(!p?.trim())throw new Error("\u672C\u6BB5\u6CA1\u6709\u8FD4\u56DE\u8BD1\u6587\uFF0C\u8BF7\u91CD\u8BD5\u3002");h.zh=o[c].restore(p),h.status="done",h.cached=!1,h.key&&Promise.resolve(this.cache?.put({key:h.key,bookId:e.config.documentId,zh:h.zh})).catch(()=>{r(h)&&(this.cacheIssue="\u8BD1\u6587\u5DF2\u5B8C\u6210\uFF0C\u4F46\u672C\u5730\u7F13\u5B58\u672A\u80FD\u4FDD\u5B58\u3002",this.emit())})}catch(p){h.status="error",h.error=p.message}this.emit()}}catch(n){for(let o of e.entries)r(o)&&(o.status="error",o.error=n.message||"\u672C\u6BB5\u7FFB\u8BD1\u5931\u8D25\u3002");!e.controller.signal.aborted&&e.epoch===this.epoch&&n.code==="MODEL_CHANGED"&&this.onModelChanged()}finally{clearTimeout(e.timeout),this.jobs.delete(e.id),this.disposed||(this.emit(),this.pump())}}retry(e,r){if(e===this.activePage)for(let n of[...this.jobs.values()])n.page!==e&&this.abortJob(n);for(let n of this.entries.values())if(n.page===e&&(r?n.id===r:n.status==="error")){if(n.status==="loading"||n.status==="checking"||n.sourceNeedsReview)continue;n.status="queued",n.error="",n.cached=!1}this.emit(),this.pump()}emit(){if(this.disposed)return;let e={};for(let r of this.entries.values())(e[r.page]||=[]).push({...r});for(let r of Object.values(e))r.sort((n,o)=>n.index-o.index);this.onChange({pages:e,cacheIssue:this.cacheIssue||""})}dispose(){this.disposed=!0,this.abortJobs(),this.sources.clear(),this.entries.clear()}};var Ae=require("react/jsx-runtime");function Pd({page:t,source:e,rows:r=[],activeId:n,originRef:o,translation:a,onActivate:i,onClose:s}){let l=ha.default.useRef(null),{preferences:c,updatePreferences:h,paused:p,setPaused:u,modelError:g,refreshModel:w,cacheIssue:m,retry:_}=a,[y,k]=ha.default.useState(c.glossary||"");ha.default.useEffect(()=>k(c.glossary||""),[c.glossary]);let N=r.filter(R=>R.status==="done").length,A=r.filter(R=>R.status==="error").length,E=r.filter(R=>R.cached).length,T=r.map(R=>R.status).join(",");ha.default.useEffect(()=>{if(!c.linked||o.current!=="source")return;let R=l.current,v=[...R?.querySelectorAll("[data-translation-segment]")||[]].find(F=>F.dataset.translationSegment===n);if(!R||!v)return;let O=R.getBoundingClientRect(),L=v.getBoundingClientRect();(L.top<O.top+8||L.bottom>O.bottom-8)&&(R.scrollTop+=L.top-O.top-12)},[t,n,T,c.linked,c.fontSize]);let M=(R,v=!1)=>i(R,{origin:"translation",reveal:v});return(0,Ae.jsxs)("aside",{className:"dshr-pdf-translation-panel","aria-label":"PDF \u4E2D\u6587\u5BF9\u7167",style:{"--dshr-translation-font-size":`${c.fontSize||16}px`},children:[(0,Ae.jsxs)("header",{className:"dshr-pdf-translation-header",children:[(0,Ae.jsxs)("div",{children:[(0,Ae.jsx)("strong",{children:"\u4E2D\u6587\u5BF9\u7167"}),(0,Ae.jsxs)("span",{children:["\u7B2C ",t," \u9875 \xB7 ",N,"/",r.length," \u6BB5",E?` \xB7 \u7F13\u5B58 ${E} \u6BB5`:""]})]}),(0,Ae.jsx)("button",{type:"button","aria-label":"\u5173\u95ED\u8BD1\u6587\u4FA7\u680F",title:"\u5173\u95ED\u8BD1\u6587\u4FA7\u680F",onClick:s,children:"\xD7"})]}),(0,Ae.jsxs)("div",{className:"dshr-pdf-translation-controls",children:[(0,Ae.jsx)("button",{type:"button",onClick:()=>u(!p),children:p?"\u7EE7\u7EED\u7FFB\u8BD1":"\u6682\u505C\u7FFB\u8BD1"}),(0,Ae.jsxs)("label",{children:[(0,Ae.jsx)("input",{type:"checkbox",checked:c.linked!==!1,onChange:R=>h({linked:R.target.checked})}),"\u6BB5\u843D\u8054\u52A8"]}),(0,Ae.jsx)("button",{type:"button","aria-label":"\u7F29\u5C0F\u8BD1\u6587\u5B57\u53F7",disabled:c.fontSize<=12,onClick:()=>h({fontSize:Math.max(12,c.fontSize-1)}),children:"A\u2212"}),(0,Ae.jsx)("span",{className:"dshr-pdf-translation-font",children:c.fontSize||16}),(0,Ae.jsx)("button",{type:"button","aria-label":"\u653E\u5927\u8BD1\u6587\u5B57\u53F7",disabled:c.fontSize>=24,onClick:()=>h({fontSize:Math.min(24,c.fontSize+1)}),children:"A\uFF0B"})]}),(0,Ae.jsxs)("div",{className:"dshr-pdf-translation-options",children:[(0,Ae.jsxs)("label",{children:[(0,Ae.jsx)("input",{type:"checkbox",checked:!!c.showSource,onChange:R=>h({showSource:R.target.checked})}),"\u663E\u793A\u539F\u6587"]}),(0,Ae.jsxs)("label",{children:[(0,Ae.jsx)("input",{type:"checkbox",checked:c.prefetch!==!1,onChange:R=>h({prefetch:R.target.checked})}),"\u9884\u8BD1\u4E0B\u4E00\u9875"]})]}),(0,Ae.jsxs)("details",{className:"dshr-pdf-glossary",children:[(0,Ae.jsxs)("summary",{children:["\u6587\u6863\u672F\u8BED\u8868",c.glossary?" \xB7 \u5DF2\u542F\u7528":""]}),(0,Ae.jsxs)("label",{children:["\u6BCF\u884C\u586B\u5199\u201C\u539F\u8BCD = \u4E2D\u6587\u8BD1\u6CD5\u201D",(0,Ae.jsx)("textarea",{"aria-label":"\u6587\u6863\u672F\u8BED\u8868",maxLength:4e3,value:y,placeholder:`band gap = \u5E26\u9699
gate = \u6805\u6781`,onChange:R=>k(R.target.value)})]}),(0,Ae.jsx)("button",{type:"button",disabled:ro(y)===c.glossary,onClick:()=>h({glossary:ro(y)}),children:"\u5E94\u7528\u5E76\u66F4\u65B0\u8BD1\u6587"})]}),g&&(!r.length||r.some(R=>R.status!=="done"))&&e?.segments.length!==0?(0,Ae.jsxs)("div",{className:"dshr-pdf-translation-notice",role:"status",children:[g,(0,Ae.jsx)("button",{type:"button",onClick:w,children:"\u5237\u65B0\u670D\u52A1"})]}):null,m?(0,Ae.jsx)("div",{className:"dshr-pdf-translation-notice",role:"status",children:m}):null,p?(0,Ae.jsx)("div",{className:"dshr-pdf-translation-notice",role:"status",children:"\u5DF2\u6682\u505C\uFF0C\u5DF2\u5B8C\u6210\u7684\u8BD1\u6587\u4ECD\u53EF\u9605\u8BFB\u3002"}):null,(0,Ae.jsxs)("div",{className:"dshr-pdf-translation-list",ref:l,tabIndex:0,"aria-label":`\u7B2C ${t} \u9875\u8BD1\u6587`,onWheel:()=>{o.current="translation"},children:[e?e.segments.length===0?(0,Ae.jsx)("p",{className:"dshr-pdf-translation-empty",children:"\u6B64\u9875\u6CA1\u6709\u53EF\u63D0\u53D6\u7684\u6587\u5B57\uFF0C\u53EF\u80FD\u662F\u626B\u63CF\u9875\u6216\u56FE\u7247\u9875\u3002"}):null:(0,Ae.jsx)("p",{className:"dshr-pdf-translation-empty",children:"\u6B63\u5728\u63D0\u53D6\u5F53\u524D\u9875\u6BB5\u843D\u2026"}),(e?.segments||[]).map(R=>{let v=R.sourceNeedsReview?{status:"source-review"}:r.find(O=>O.id===R.id)||{status:"queued"};return(0,Ae.jsxs)("article",{"data-translation-segment":R.id,"data-status":v.status,className:`dshr-pdf-translation-paragraph${n===R.id&&c.linked!==!1?" is-linked":""}`,onPointerEnter:()=>{c.linked!==!1&&M(R.id)},children:[(0,Ae.jsxs)("div",{className:"dshr-pdf-translation-paragraph-head",children:[(0,Ae.jsxs)("span",{children:["\u6BB5\u843D ",Number(R.id.split("-s").at(-1))+1,v.cached?" \xB7 \u7F13\u5B58":""]}),(0,Ae.jsxs)("div",{children:[(0,Ae.jsx)("button",{type:"button","aria-label":`\u5B9A\u4F4D\u6BB5\u843D ${R.id}`,onClick:()=>M(R.id,!0),children:"\u5B9A\u4F4D\u539F\u6587"}),v.status==="done"&&!v.passthrough?(0,Ae.jsx)("button",{type:"button","aria-label":`\u91CD\u65B0\u7FFB\u8BD1\u6BB5\u843D ${R.id}`,onClick:()=>_(t,R.id),children:"\u91CD\u8BD1\u672C\u6BB5"}):null]})]}),c.showSource?(0,Ae.jsx)("p",{className:"dshr-pdf-translation-original",children:R.src}):null,v.zh?(0,Ae.jsx)("p",{className:"dshr-pdf-translation-result",children:v.zh}):null,v.status==="done"?null:v.status==="source-review"?(0,Ae.jsx)("p",{className:"dshr-pdf-translation-waiting",role:"status",children:"\u672C\u6BB5\u542B\u65E0\u6CD5\u786E\u8BA4\u7684 PDF \u5B57\u7B26\u3002\u8BF7\u9009\u62E9\u201C\u5B9A\u4F4D\u539F\u6587\u201D\uFF0C\u5728\u9875\u9762\u56FE\u50CF\u4E0A\u6838\u5BF9\u3002"}):v.status==="error"?(0,Ae.jsxs)("div",{className:"dshr-pdf-translation-segment-error",children:[(0,Ae.jsx)("p",{children:v.error}),(0,Ae.jsx)("button",{type:"button",onClick:()=>_(t,R.id),children:"\u91CD\u8BD5\u672C\u6BB5"})]}):(0,Ae.jsx)("p",{className:"dshr-pdf-translation-waiting",role:"status",children:p?"\u7B49\u5F85\u7EE7\u7EED\u7FFB\u8BD1":v.status==="loading"?"\u6B63\u5728\u7FFB\u8BD1\u672C\u6BB5\u2026":v.status==="checking"?"\u6B63\u5728\u8BFB\u53D6\u5DF2\u6709\u8BD1\u6587\u2026":"\u7B49\u5F85\u7FFB\u8BD1\u2026"})]},R.id)})]}),(0,Ae.jsxs)("footer",{className:"dshr-pdf-translation-footer",children:[(0,Ae.jsx)("span",{children:"\u60AC\u505C\u5BF9\u7167\u6BB5\u843D\uFF0C\u70B9\u51FB\u201C\u5B9A\u4F4D\u539F\u6587\u201D\u8FD4\u56DE\u51FA\u5904\u3002"}),A?(0,Ae.jsxs)("button",{type:"button",onClick:()=>_(t),children:["\u91CD\u8BD5\u5931\u8D25\u6BB5\u843D\uFF08",A,"\uFF09"]}):null]})]})}var Cr=Lt(require("react"),1);var Fs={glossary:"",fontSize:16,prefetch:!0,showSource:!1,linked:!0};function Od({documentId:t,title:e,enabled:r,activePage:n,sources:o,visibleIds:a}){let[i,s]=Cr.default.useState({documentId:"",pages:{},cacheIssue:""}),[l,c]=Cr.default.useState({...Fs,documentId:""}),[h,p]=Cr.default.useState(null),[u,g]=Cr.default.useState(""),[w,m]=Cr.default.useState(0),[_,y]=Cr.default.useState(!1),k=Cr.default.useRef(null);return Cr.default.useEffect(()=>{if(!t)return;let N=!0;s({documentId:t,pages:{},cacheIssue:""}),y(!1);let A=new Ei({translate:No,cache:{get:$c,put:Hc},onChange:E=>{N&&s({documentId:t,...E})},onModelChanged:()=>{N&&m(E=>E+1)}});return k.current={documentId:t,controller:A},Uc(t).catch(()=>({})).then(E=>{N&&c({...Fs,...E,documentId:t,glossary:ro(E.glossary),fontSize:Math.max(12,Math.min(24,Number(E.fontSize)||16))})}),()=>{N=!1,A.dispose(),k.current?.controller===A&&(k.current=null)}},[t]),Cr.default.useEffect(()=>{if(!t)return;let N=new AbortController;g(""),sd({signal:N.signal}).then(T=>{N.signal.aborted||(p({...T,documentId:t}),T.ready||g("\u7FFB\u8BD1\u6A21\u578B\u672A\u5C31\u7EEA\uFF0C\u8BF7\u5728 DSH \u8BBE\u7F6E\u4E2D\u9009\u62E9\u9ED8\u8BA4\u6A21\u578B\u3002"))}).catch(T=>{N.signal.aborted||(g(T.message||"\u7FFB\u8BD1\u670D\u52A1\u4E0D\u53EF\u7528\u3002"),p({documentId:t,ready:!1}))});let A=()=>{document.visibilityState==="visible"&&m(T=>T+1)},E=setInterval(A,6e4);return document.addEventListener("visibilitychange",A),()=>{N.abort(),clearInterval(E),document.removeEventListener("visibilitychange",A)}},[t,w]),Cr.default.useEffect(()=>{let N=k.current;if(!(!N||N.documentId!==t||l.documentId!==t||h?.documentId!==t)){N.controller.configure({documentId:t,title:e,enabled:r&&!_,canTranslate:!!h.ready,model:{provider:h.provider||"",model:h.model||"",promptVersion:h.promptVersion||""},glossary:l.glossary,prefetch:l.prefetch}),N.controller.setFocus(n,a);for(let[A,E]of Object.entries(o))Math.abs(Number(A)-n)<=3&&N.controller.registerPage(Number(A),E)}},[t,e,r,_,l.glossary,l.prefetch,l.documentId,h,n,a,o]),Cr.default.useEffect(()=>{t&&l.documentId===t&&Wc(t,l).catch(()=>{})},[t,l]),{...i.documentId===t?i:{pages:{},cacheIssue:""},preferences:l.documentId===t?l:Fs,paused:_,model:h?.documentId===t?h:null,modelError:u,setPaused:y,refreshModel:()=>m(N=>N+1),updatePreferences:N=>c(A=>({...A,...N})),retry:(N,A)=>k.current?.controller.retry(N,A)}}var Ld=Lt(require("react"),1);var no=require("react/jsx-runtime");function Ni(t){let e=Number(t);return Number.isFinite(e)?Math.min(1,Math.max(0,e)):0}function Pf(t,e){typeof t=="function"&&t(e)}function Dd({annotations:t,onOpenAnnotation:e,page:r}){let n=Ld.default.useRef(e);n.current=e;let o=Array.isArray(t)?t:[],a=[];for(let i=0;i<o.length;i+=1){let s=o[i];if(!s||!Array.isArray(s.rects)||s.rects.length===0||s.kind&&s.kind!=="pdf"||r!=null&&s.page!=null&&Number(s.page)!==Number(r))continue;let l=s.style==="underline"||s.style==="note"?s.style:"highlight",c=s.color||"#f5d76e",h=s.id==null?"":String(s.id),p=xi(`${h}|${s.createdAt||0}`),u=mi(s.width),g=yi(s),w=l==="note"||typeof s.note=="string"&&s.note.trim().length>0,m=null;for(let _=0;_<s.rects.length;_+=1){let y=s.rects[_];if(!y||typeof y!="object")continue;let k=Ni(y.x),N=Ni(y.y),A=Math.min(Ni(y.w),1-k),E=Math.min(Ni(y.h),1-N);if(!(A>.002)||!(E>.001))continue;m={x:k,y:N,width:A,height:E};let T=`${h}:${_}`;if(l==="underline")a.push((0,no.jsx)("svg",{className:"dshr-anno-pdf-underline",style:{left:`${k*100}%`,top:`calc(${(N+E)*100}% - 4px)`,width:`${A*100}%`,height:"5px","--dshr-anno-color":c},viewBox:"0 0 100 6",preserveAspectRatio:"none","data-anno-id":h,"aria-hidden":"true",focusable:"false",children:(0,no.jsx)("path",{d:vi(p,100)})},`u:${T}`));else{let M=Math.max(E*u,.004),R=N+E*bi(u);a.push((0,no.jsx)("span",{className:"dshr-anno-pdf-band",style:{left:`${k*100}%`,top:`${R*100}%`,width:`${A*100}%`,height:`${M*100}%`,"--dshr-anno-color":c},"data-anno-id":h,"aria-hidden":"true"},`b:${T}`))}}if(w&&m){let _=m.x+m.width,y=Math.min(Math.max(.005,_+.004),.972),k=Math.max(.004,m.y);a.push((0,no.jsx)("button",{type:"button",className:"dshr-anno-note-btn",style:{left:`${y*100}%`,top:`${k*100}%`,"--dshr-anno-color":c},"data-anno-id":h,title:g?`\u67E5\u770B\u6279\u6CE8\uFF1A${g}`:"\u67E5\u770B\u6279\u6CE8","aria-label":g?`\u67E5\u770B\u6279\u6CE8\uFF1A${g}`:"\u67E5\u770B\u6279\u6CE8",onMouseDown:N=>N.preventDefault(),onClick:()=>Pf(n.current,h),children:(0,no.jsx)(zn,{size:12})},`n:${h}`))}}return(0,no.jsx)("div",{className:"dshr-anno-pdf-layer","data-anno-layer":"pdf",children:a})}var Fd=t=>String(t??"").replace(/\s+/gu," ").trim();function zd(t,e,r,n){if(!e?.contains(t.startContainer)||!e.contains(t.endContainer))return null;let o=t.cloneRange();o.selectNodeContents(e),o.setEnd(t.startContainer,t.startOffset);let a=o.toString().length,i=a+t.toString().length,s=i>a&&Bd(e,a,i),l=s?la(s,r):[];return Ai(l)?{version:1,page:n,start:a,end:i,rects:l}:null}function Ai(t){return Array.isArray(t)&&t.length>0&&t.every(e=>e&&[e.x,e.y,e.w,e.h].every(Number.isFinite)&&e.x>=0&&e.y>=0&&e.w>0&&e.h>0&&e.x+e.w<=1.0001&&e.y+e.h<=1.0001)}function Of(t,e){return!Ai(t)||!Ai(e)||t.length!==e.length?!1:t.every((r,n)=>{let o=e[n],a=r.x+r.w/2,i=r.y+r.h/2,s=o.x+o.w/2,l=o.y+o.h/2;return Math.abs(a-s)<=Math.min(.012,r.w/3)&&Math.abs(i-l)<=Math.min(.012,r.h/3)})}function Bd(t,e,r){let n=t.ownerDocument,o=n.createTreeWalker(t,4),a=0,i=null,s=0;for(let l=o.nextNode();l;l=o.nextNode()){let c=a+l.length;if(!i&&e<c&&(i=l,s=e-a),i&&r<=c){let h=n.createRange();return h.setStart(i,s),h.setEnd(l,r-a),h}a=c}return null}function Lf(t){let e=t.cloneContents();for(let r of e.querySelectorAll("br"))r.replaceWith(`
`);return Fd(e.textContent)}function $d(t,e,r){if(!r||t?.version!==1||t.page!==Number(r.dataset.page)||!Number.isSafeInteger(t.start)||!Number.isSafeInteger(t.end)||t.start<0||t.end<=t.start||!Ai(t.rects))return null;let n=r.querySelector(".dshr-pdf-text-layer"),o=n&&Bd(n,t.start,t.end);if(!o)return null;let a=Lf(o);if(!a||a!==Fd(e))return null;let i=la(o,r);return Of(t.rects,i)?i:null}var _e=require("react/jsx-runtime"),Vd=Id+Rd;var{useCallback:Hd,useEffect:Gt,useLayoutEffect:zs,useMemo:Bs,useRef:Ce,useState:Ft}=fa.default,Ws=612,js=792,$s=.1,Hs=5,Ud=1.2,Df=32,Ff="1000px 0px",zf=1e7,Wd=8192,Bf=2,Us=128,$f=160,Hf=600;function Wr(t,e,r){return Math.min(r,Math.max(e,t))}function Uf(t){if(t.items.length<=Us)return t;let e=0,r=!1;return new ReadableStream({async pull(n){if(await new Promise(a=>setTimeout(a,0)),r)return;let o=Math.min(e+Us,t.items.length);n.enqueue({items:t.items.slice(e,o),styles:e===0?t.styles:void 0,lang:t.lang}),e=o,e===t.items.length&&n.close()},cancel(){r=!0}})}function Ci(t,e,r,n,o=0){let a=t&&Number.isFinite(t.width)&&t.width>0?t.width:Ws,i=t&&Number.isFinite(t.height)&&t.height>0?t.height:js,s;if((e==="fit"||e==="page")&&n>0){if(s=Math.max(1,Math.floor(n)),e==="page"&&o>0){let h=Math.floor(a/i*Math.max(1,o-36));s=Math.max(1,Math.min(s,h))}}else s=Math.max(1,Math.floor(a*Wr(r,$s,Hs)));let l=s/a,c=Math.max(1,Math.floor(i*l));return{width:s,height:c,pageScale:l}}function pa(t,e,r=zf){let n=e&&Number.isFinite(e.width)&&e.width>0?e.width:Ws,o=e&&Number.isFinite(e.height)&&e.height>0?e.height:js,a=Math.min(Math.max(globalThis.devicePixelRatio||1,1),2),i=t*a,s=n*o*i*i;s>r&&(i*=Math.sqrt(r/s));let l=Math.max(n,o)*i;return l>Wd&&(i*=Wd/l),Math.max(Number.EPSILON,i)}function jd(t){let e=t&&t.name;return e==="RenderingCancelledException"||e==="AbortException"||e==="AbortError"||e==="WorkerTaskCancelled"}function Gd(t){let e=t&&t.name,r=t&&t.message?String(t.message):String(t||"");return e==="PasswordException"?"\u8BE5 PDF \u5DF2\u52A0\u5BC6\uFF0C\u9700\u8981\u5BC6\u7801\u624D\u80FD\u6253\u5F00\u3002":e==="InvalidPDFException"?"\u6587\u4EF6\u4E0D\u662F\u6709\u6548\u7684 PDF\uFF0C\u6216\u8005\u5DF2\u7ECF\u635F\u574F\u3002":e==="MissingPDFException"?"\u6CA1\u6709\u627E\u5230 PDF \u6570\u636E\u3002":e==="UnexpectedResponseException"?`PDF \u6570\u636E\u8BFB\u53D6\u5931\u8D25${r?`\uFF1A${r}`:"\u3002"} `:/dynamically imported module|Importing a module script failed|Failed to fetch|error loading|Cannot find module/i.test(r)?"PDF \u5F15\u64CE\u52A0\u8F7D\u5931\u8D25\uFF08/dsh-reader-assets/pdf.bundle.js\uFF09\u3002\u8BF7\u786E\u8BA4 Host \u5DF2\u6B63\u786E\u63D0\u4F9B\u9759\u6001\u8D44\u6E90\u540E\u91CD\u8BD5\u3002":r?`PDF \u52A0\u8F7D\u5931\u8D25\uFF1A${r}`:"PDF \u52A0\u8F7D\u5931\u8D25\u3002"}function qd(t){if(!t)return null;let e=t.nodeType===1?t:t.parentElement;if(!e||typeof e.closest!="function")return null;let r=e.closest("[data-page]");if(!r)return null;let n=Number(r.getAttribute("data-page"));return Number.isFinite(n)?n:null}function Wf(t){if(!t||t.rangeCount===0)return null;let e=t.getRangeAt(0),r=typeof e.getClientRects=="function"?e.getClientRects():null;if(!r||r.length===0){let s=e.getBoundingClientRect();return s&&(s.width||s.height)?s:null}if(r.length===1)return r[0];let n=1/0,o=1/0,a=-1/0,i=-1/0;for(let s=0;s<r.length;s+=1){let l=r[s];!l||!l.width&&!l.height||(n=Math.min(n,l.left),o=Math.min(o,l.top),a=Math.max(a,l.right),i=Math.max(i,l.bottom))}if(!Number.isFinite(n))return e.getBoundingClientRect();try{return new DOMRect(n,o,Math.max(0,a-n),Math.max(0,i-o))}catch{return e.getBoundingClientRect()}}function Xd(t){let e=Df,r=t.querySelector(".dshr-pdf-content");if(r){let n=getComputedStyle(r),o=Number.parseFloat(n.paddingLeft)||0,a=Number.parseFloat(n.paddingRight)||0;e=o+a}return Math.max(120,t.clientWidth-e)}var jf=fa.default.memo(function({pageNumber:e,dim:r,mode:n,scale:o,viewportWidth:a,viewportHeight:i,rendered:s,active:l=!0,registerPageElement:c,registerFrameElement:h,annotations:p,onOpenAnnotation:u,evidenceRects:g}){let w=Ci(r,n,o,a,i),m=fa.default.useCallback(y=>c(e,y),[e,c]),_=fa.default.useCallback(y=>h(e,y),[e,h]);return(0,_e.jsx)("div",{className:"dshr-pdf-page","data-page":e,"data-active":l?"true":"false",style:l?void 0:{display:"none"},ref:m,children:(0,_e.jsx)("div",{className:"dshr-pdf-page-col",style:{width:`${w.width}px`},children:(0,_e.jsxs)("div",{className:"dshr-pdf-frame","data-page":e,"data-rendered":s?"true":"false",style:{width:`${w.width}px`,height:`${w.height}px`,"--total-scale-factor":String(w.pageScale)},ref:_,children:[(0,_e.jsx)("div",{className:"dshr-pdf-placeholder","aria-hidden":"true",children:e}),(0,_e.jsx)("canvas",{className:"dshr-pdf-canvas",width:1,height:1}),(0,_e.jsx)("div",{className:"dshr-pdf-text-layer"}),(0,_e.jsx)(Dd,{annotations:p,onOpenAnnotation:u}),g?(0,_e.jsx)("div",{className:"dshr-pdf-evidence-mark","aria-hidden":"true",children:g.map((y,k)=>(0,_e.jsx)("i",{style:{left:`${y.x*100}%`,top:`${y.y*100}%`,width:`${y.w*100}%`,height:`${y.h*100}%`}},k))}):null,(0,_e.jsx)("div",{className:"dshr-pdf-page-loading","aria-hidden":"true",children:(0,_e.jsx)("span",{className:"dshr-pdf-spinner"})})]})})})});function Kd({data:t,documentId:e="",fileName:r="",renderImmersiveToolbar:n,renderTopbar:o,sidePanels:a,initialPage:i=1,autoTranslate:s=!1,pageTranslations:l,onReady:c,onPageChange:h,onPageText:p,onSelection:u,onRetryTranslation:g,annotations:w=[],onOpenAnnotation:m,focusAnnotation:_,focusEvidence:y,onEvidenceLocated:k,hideTranslations:N=!1,paged:A=!1,onHideTranslations:E}){let T=Ce(null);T.current={autoTranslate:s,paged:A,onReady:c,onPageChange:h,onPageText:p,onSelection:u,onRetryTranslation:g,onOpenAnnotation:m};let M=Ce(null),R=Ce(null),v=Ce(new Map),O=Ce(new Map),L=Ce(new Map),F=Ce(new Map),U=Ce({width:Ws,height:js}),J=Ce(new Map),Y=Ce(new Set),ae=Ce([]),fe=Ce(new Set),q=Ce(null),se=Ce(null),de=Ce(null),P=Ce(null),$=Ce(new _i),B=Ce(0),ie=Ce(!1),ee=Ce("fit"),Ie=Ce(1),Xe=Ce(0),Re=Ce(0),Fe=Ce(!1),Pe=Ce(0),Te=Ce(1),f=Ce(!!s),d=Ce([]),S=Ce(new Set),b=Ce(0),re=Ce(0),ne=Ce(0),ue=Ce(0),ge=Ce(null),ke=Ce(0),$e=Ce(null),Ee=Ce(!1),dt=Ce(""),tt=Ce(0),rt=Ce(!1),Ve=Ce(!1),je=Ce(!1),[he,xt]=Ft("loading"),[vt,yt]=Ft(null),[Rt,Mt]=Ft(null),[Ge,Xt]=Ft(0),[Yt,hr]=Ft({}),[le,ye]=Ft(null),[we,Qe]=Ft("fit"),[nt,_r]=Ft(1),[Bt,Yr]=Ft(0),[He,Pt]=Ft(0),[$t,Sr]=Ft(!1),[ze,bn]=Ft(Wr(Number.parseInt(i,10)||1,1,999999)),[xn,Zr]=Ft({}),[Ot,mr]=Ft(""),[vn,Qr]=Ft(!1),[Ct,Wn]=Ft(0),[It,pr]=Ft({}),[zr,xo]=Ft(null),[vo,yo]=Ft([]),[xe,I]=Ft(null),[te,me]=Ft(!1),at=Ce(null),ut=Ce("source"),it=s&&!N&&!te,wt=Od({documentId:e,title:r,enabled:it,activePage:ze,sources:It,visibleIds:vo}),Ut=Ce(null);Ut.current=wt.pages;let Qt=Ce(!1);Qt.current=it;let At=Ce(!1);At.current=it&&wt.preferences.linked!==!1,at.current=xe;let ht=Bs(()=>{let x=new Si(Ge,Ci(le,$t?"page":we,nt,Bt,He).height);for(let[D,H]of Object.entries(Yt))x.setHeight(Number(D),Ci(H,$t?"page":we,nt,Bt,He).height);return x.paddingTop=ge.current?.paddingTop??18,x},[Ge,le,Yt,$t,we,nt,Bt,He]);ge.current=ht,zs(()=>{let x=$e.current;$e.current=null,x&&x.revision===ke.current&&!A&&Ba(x.anchor)},[ht,A]),Gt(()=>{s&&!N&&me(!1)},[s,N]);function jn(x,D){J.current.set(x,D),pr(H=>H[x]===D?H:Object.fromEntries(Object.entries({...H,[x]:D}).filter(([G])=>Math.abs(Number(G)-Te.current)<=3)))}function wo(x,D){return[...x?.querySelectorAll("[data-pdf-segments]")||[]].filter(H=>H.dataset.pdfSegments.split("|").includes(D))}function qo(x,{origin:D="source",reveal:H=!1}={},G=Te.current){if(ut.current=D,I(Ue=>Ue?.page===G&&Ue.id===x?Ue:{page:G,id:x}),D==="source"&&G!==Te.current&&Br(G),!H)return;let ce=R.current,oe=wo(O.current.get(G),x)[0];if(!ce||!oe)return;let Ne=oe.getBoundingClientRect(),Je=ce.getBoundingClientRect();(Ne.top<Je.top+12||Ne.bottom>Je.bottom-12)&&ce.scrollTo({top:Math.max(0,ce.scrollTop+Ne.top-Je.top-28),behavior:"auto"})}function Xo(){if(!Qt.current)return;let x=R.current,D=O.current.get(Te.current);if(!x||!D)return;let H=x.getBoundingClientRect(),G=new Set;for(let Ne of D.querySelectorAll("[data-pdf-segments]")){let Je=Ne.getBoundingClientRect();if(Je.bottom>H.top+4&&Je.top<H.bottom-4)for(let Ue of Ne.dataset.pdfSegments.split("|"))G.add(Ue)}let ce=[...G];yo(Ne=>Ne.join("|")===ce.join("|")?Ne:ce);let oe=at.current;ce.length&&(!oe||oe.page!==Te.current||!G.has(oe.id)&&ut.current==="source")&&qo(ce[0])}Gt(()=>{for(let x of O.current.values())for(let D of x.querySelectorAll("[data-pdf-segments]"))At.current&&Number(x.dataset.page)===xe?.page&&D.dataset.pdfSegments.split("|").includes(xe.id)?D.dataset.pdfLinked="true":delete D.dataset.pdfLinked},[xe,xn,It,it,wt.preferences.linked]),Gt(()=>{if(he!=="ready")return;let x=requestAnimationFrame(Xo);return()=>cancelAnimationFrame(x)},[ze,he,It,it]),Gt(()=>{if(!e||!it||wt.paused||wt.preferences.prefetch===!1||he!=="ready"||!xn[ze]||ze>=Ge)return;let x=!1,D=B.current,H=ze+1,G=setTimeout(async()=>{if(!(b.current>0))try{let ce=await se.current?.getPage(H);if(!ce||x)return;let oe=await ce.getTextContent();if(x||D!==B.current)return;jn(H,Ds(oe.items,H,ce.getViewport({scale:1}).width))}catch{}},850);return()=>{x=!0,clearTimeout(G)}},[e,ze,Ge,he,it,wt.paused,wt.preferences.prefetch,xn]),f.current=!!s,ee.current=we,Ie.current=nt,Xe.current=Bt,Re.current=He,Fe.current=$t,Pe.current=Ge,le&&(U.current=le);function Jr(x){let D=F.current.get(x);return D||U.current}function Cn(x){return Ci(Jr(x),Fe.current?"page":ee.current,Ie.current,Xe.current,Re.current)}function ko(x){return Cn(x).pageScale}function Fa(x){let D=L.current.get(x);return D||(D={page:null,token:0,wantRender:!1,rendered:!1,rendering:!1,renderTask:null,textLayer:null,textContent:null,grouped:null,lastRenderScale:null,lastRasterScale:0,textLayerReady:!1},L.current.set(x,D)),D}function _o(x,D){Zr(H=>{if(D)return H[x]?H:{...H,[x]:!0};if(!H[x])return H;let G={...H};return delete G[x],G})}function za(x,D,H){if(!(D>0)||!(H>0))return!1;let G=F.current.get(x);return G&&Math.abs(G.width-D)<.05&&Math.abs(G.height-H)<.05?!1:(!$e.current&&!T.current?.paged&&($e.current={anchor:Gn(),revision:ke.current}),F.current.set(x,{width:D,height:H}),hr(ce=>({...ce,[x]:{width:D,height:H}})),In(),!0)}function Vo(){if(T.current?.paged)return;let x=R.current;if(!x)return;let D=x.querySelector(".dshr-pdf-content");D&&ge.current&&(ge.current.paddingTop=Number.parseFloat(getComputedStyle(D).paddingTop)||0)}function In(){ne.current||(ne.current=requestAnimationFrame(()=>{ne.current=0,Vo()}))}function Br(x){if(!Number.isFinite(x)||x===Te.current||(T.current?.paged&&L.current.get(Te.current)?.textLayer?.cancel(),Te.current=x,bn(x),ut.current="source",!je.current))return;let D=T.current&&T.current.onPageChange;D&&D(x)}function Rn(){if(T.current?.paged||!je.current)return;let x=R.current;if(!x)return;let D=ge.current;if(!D?.count)return;let H=x.scrollTop+Wr(x.clientHeight*.28,48,240);Br(D.pageAt(H))}function Gn(){if(T.current?.paged||!R.current||!ge.current?.count)return null;let x=R.current.scrollTop,D=ge.current.entryAt(x+1);return{page:D.page,ratio:Wr((x-D.top)/D.height,0,1)}}function Ba(x){!x||T.current?.paged||!R.current||!ge.current?.count||(R.current.scrollTop=Math.max(0,ge.current.top(x.page)+x.ratio*ge.current.height(x.page)))}function as(x){requestAnimationFrame(()=>{requestAnimationFrame(()=>{ie.current||x()})})}function yn(x){if(!f.current||fe.current.has(x))return;let D=J.current.get(x);if(!D||(fe.current.add(x),!D.text))return;let H=T.current&&T.current.onPageText;H&&H(x,{text:D.text,segments:D.segments.map(G=>({src:G.src}))})}function $a(){Y.current.forEach(x=>yn(x))}function en(x,D,H){return!ie.current&&H===B.current&&D===x.token&&x.wantRender}async function qn(x){let D=se.current,H=q.current,G=O.current.get(x);if(!D||!H||!G)return;let ce=B.current,oe=Fa(x),Ne=oe.token+=1;if(oe.renderTask){try{oe.renderTask.cancel()}catch{}oe.renderTask=null}if(oe.textLayer){try{oe.textLayer.cancel()}catch{}oe.textLayer=null}let Je=G.querySelector("canvas.dshr-pdf-canvas"),Ue=G.querySelector(".dshr-pdf-text-layer");if(!(!Je||!Ue)){oe.rendering=!0,oe.renderFailed=!1;try{let Be=oe.page;if(!Be){if(Be=await D.getPage(x),!en(oe,Ne,ce))return;oe.page=Be}let pt=Be.getViewport({scale:1}),Et=Jr(x);(Math.abs(pt.width-Et.width)>.05||Math.abs(pt.height-Et.height)>.05)&&za(x,pt.width,pt.height);let Ke=Cn(x),Tr=Jr(x),br=()=>T.current?.paged?x===Te.current:Y.current.has(x),tn=pa(Ke.pageScale,Tr),xr=!oe.rendered&&$.current.get(x);xr&&(Je.width=xr.bitmap.width,Je.height=xr.bitmap.height,Je.getContext("2d",{alpha:!1}).drawImage(xr.bitmap,0,0),oe.rendered=!0,oe.lastRenderScale=xr.scale,oe.lastRasterScale=xr.rasterScale,G.dataset.pdfQuality=xr.rasterScale>=tn-.002?"full":"preview",M.current&&(M.current.dataset.pdfCacheHits=String((Number(M.current.dataset.pdfCacheHits)||0)+1)),_o(x,!0));let ds=oe.lastRenderScale===null||Math.abs(oe.lastRenderScale-Ke.pageScale)>=.002,Pn=br()?tn:Math.min(pa(Ke.pageScale,Tr,2e6),Ke.pageScale);if(!oe.rendered||ds||oe.lastRasterScale<Pn-.002){let Zt=Math.min(Pn,Ke.pageScale),Wt=!oe.rendered&&Zt<Pn-.002?[Zt,Pn]:[Pn];for(let Kn=0;Kn<Wt.length;Kn++){if(Kn&&(await new Promise(Er=>setTimeout(Er,32)),!en(oe,Ne,ce)||!br()))return;let rn=Wt[Kn],On=Be.getViewport({scale:rn}),$r=document.createElement("canvas");$r.width=Math.max(1,Math.floor(On.width)),$r.height=Math.max(1,Math.floor(On.height));try{let Er=Be.render({canvas:$r,viewport:On,intent:"display",background:"#ffffff"});Er.onContinue=tr=>setTimeout(()=>{en(oe,Ne,ce)?tr():Er.cancel()},br()?0:16),oe.renderTask=Er;try{await Er.promise}finally{oe.renderTask===Er&&(oe.renderTask=null)}if(!en(oe,Ne,ce))return;if(M.current){let tr=Er.isWorkerRendering?"pdfWorkerRenders":"pdfMainRenders";M.current.dataset[tr]=String((Number(M.current.dataset[tr])||0)+1),M.current.dataset.pdfRenderer=Er.isWorkerRendering?"worker":"main"}Je.width=$r.width,Je.height=$r.height;let Ga=Je.getContext("2d",{alpha:!1});if(!Ga)throw new Error("\u65E0\u6CD5\u521B\u5EFA PDF \u753B\u5E03\u4E0A\u4E0B\u6587");if(Ga.drawImage($r,0,0),oe.lastRenderScale=Ke.pageScale,oe.lastRasterScale=rn,oe.rendered=!0,G.dataset.pdfQuality=rn>=tn-.002?"full":"preview",_o(x,!0),typeof createImageBitmap=="function")try{let tr=await createImageBitmap($r);if(!en(oe,Ne,ce)){tr.close();return}$.current.set(x,{bitmap:tr,scale:Ke.pageScale,rasterScale:rn}),M.current&&(M.current.dataset.pdfCacheBytes=String($.current.bytes))}catch{}}finally{$r.width=0,$r.height=0}}}if(T.current?.paged?x!==Te.current:!Y.current.has(x))return;try{let Zt=oe.textContent;if(!Zt){if(Zt=await Be.getTextContent(),!en(oe,Ne,ce))return;oe.textContent=Zt}if(!br())return;oe.grouped||(oe.grouped=Ds(Zt.items,x,pt.width),jn(x,oe.grouped));let Wt=Be.getViewport({scale:Ke.pageScale}),Kn=Zt.items.length>Us,rn=Kn?Ue.cloneNode(!1):Ue;rn.replaceChildren();let On=new H.TextLayer({textContentSource:Uf(Zt),container:rn,viewport:Wt});oe.textLayer=On;try{await On.render()}finally{oe.textLayer===On&&(oe.textLayer=null)}if(!en(oe,Ne,ce)||!br())return;if(Kn){let tr=document.createDocumentFragment();for(;rn.firstChild;)tr.append(rn.firstChild);Ue.style.cssText=rn.style.cssText,Ue.replaceChildren(tr)}oe.textLayerReady=!0;let $r=On.textDivs||[],Er=new Map,Ga=0;Zt.items.forEach((tr,us)=>{typeof tr.str=="string"&&Er.set(us,$r[Ga++])});for(let tr of oe.grouped.segments)for(let us of tr.itemIndices||[]){let Zo=Er.get(us);if(!Zo)continue;let qa=new Set((Zo.dataset.pdfSegments||"").split("|").filter(Boolean));qa.add(tr.id),Zo.dataset.pdfSegments=[...qa].join("|"),Zo.dataset.pdfSegment=[...qa][0],At.current&&at.current?.page===x&&qa.has(at.current.id)&&(Zo.dataset.pdfLinked="true")}Xo()}catch(Zt){jd(Zt)||console.warn("[dsh-reader] PDF \u6587\u672C\u5C42\u6E32\u67D3\u5931\u8D25",Zt)}if(!en(oe,Ne,ce))return;Y.current.has(x)&&yn(x)}catch(Be){jd(Be)||(oe.renderFailed=!0,console.warn(`[dsh-reader] \u7B2C ${x} \u9875\u6E32\u67D3\u5931\u8D25`,Be))}finally{oe.rendering=!1}}}function Ha(){if(!ie.current)for(;b.current<Bf&&d.current.length>0;){d.current.sort((Ne,Je)=>Math.abs(Ne.pageNumber-Te.current)-Math.abs(Je.pageNumber-Te.current));let x=d.current[0],D=L.current.get(Te.current);if(x.pageNumber!==Te.current&&(!D?.rendered||D.rendering))break;let H=d.current.shift();S.current.delete(H.pageNumber);let G=L.current.get(H.pageNumber);if(!G||!G.wantRender||G.rendering||!O.current.has(H.pageNumber))continue;b.current+=1;let ce=B.current,oe=G.token+1;qn(H.pageNumber).catch(()=>{}).finally(()=>{if(ce===B.current){if(b.current=Math.max(0,b.current-1),G.wantRender&&O.current.has(H.pageNumber)){let Ne=Cn(H.pageNumber),Ue=(T.current?.paged?H.pageNumber===Te.current:Y.current.has(H.pageNumber))&&G.rendered&&!G.renderFailed&&G.lastRasterScale<pa(Ne.pageScale,Jr(H.pageNumber))-.002;(G.token!==oe||Ue||G.rendered&&Math.abs((G.lastRenderScale||0)-Ne.pageScale)>.002)&&Xn(H.pageNumber,{front:!0})}Ha()}})}}function Xn(x,{front:D=!1}={}){if(!O.current.has(x))return;let H=Fa(x);if(H.wantRender=!0,D&&x===Te.current&&!H.rendered)for(let[ce,oe]of L.current)ce!==x&&oe.renderTask&&!Y.current.has(ce)&&(oe.token++,oe.renderTask.cancel());if(H.rendering)return;if(S.current.has(x)){D&&d.current.sort((ce,oe)=>(oe.pageNumber===x)-(ce.pageNumber===x));return}if(H.rendered&&H.lastRenderScale!==null){let ce=Cn(x);if((H.textLayerReady||(T.current?.paged?x!==Te.current:!Y.current.has(x)))&&Math.abs(H.lastRenderScale-ce.pageScale)<.002&&H.lastRasterScale>=(x===Te.current?pa(ce.pageScale,Jr(x)):Math.min(pa(ce.pageScale,Jr(x),2e6),ce.pageScale))-.002)return}S.current.add(x);let G={pageNumber:x};D?d.current.unshift(G):d.current.push(G),Ha()}function Ua(x){let D=L.current.get(x);if(!D)return;if(D.wantRender=!1,D.token+=1,D.renderTask){try{D.renderTask.cancel()}catch{}D.renderTask=null}if(D.textLayer){try{D.textLayer.cancel()}catch{}D.textLayer=null}let H=O.current.get(x);if(H){let G=H.querySelector("canvas.dshr-pdf-canvas");G&&(G.width=0,G.height=0);let ce=H.querySelector(".dshr-pdf-text-layer");ce&&ce.replaceChildren()}if(D.page){try{D.page.cleanup()}catch{}D.page=null}D.textContent=null,D.grouped=null,J.current.delete(x),D.lastRenderScale=null,D.lastRasterScale=0,D.textLayerReady=!1,D.rendered&&(D.rendered=!1,_o(x,!1)),d.current.length>0&&(d.current=d.current.filter(G=>G.pageNumber!==x)),S.current.delete(x),L.current.delete(x)}function Wa(){for(let[x,D]of L.current){if(!D.rendered||!D.wantRender||D.rendering)continue;let H=Cn(x);(!D.textLayerReady||D.lastRenderScale===null||Math.abs(D.lastRenderScale-H.pageScale)>.002)&&Xn(x)}}function Ko(x=$f){re.current&&clearTimeout(re.current),re.current=setTimeout(()=>{re.current=0,Wa()},x)}function wn(x){ke.current++,$e.current=null,x=Wr(Math.round(Number(x)||1),1,Pe.current||1);let D=R.current;if(T.current?.paged){Br(x);return}if(!D||!ge.current?.count){Br(x);return}let H=ge.current.top(x)-10;typeof D.scrollTo=="function"?D.scrollTo({top:Math.max(0,H),behavior:"auto"}):D.scrollTop=Math.max(0,H),Br(x)}function C(x){let D=R.current;D&&D.scrollBy({top:x*D.clientHeight*.92,behavior:"auto"})}function z(x){!x||T.current?.paged||($e.current={anchor:x,revision:ke.current})}function Q(x){let D=Gn(),H=ee.current==="fit"?ko(Te.current):Ie.current,G=Wr(H*x,$s,Hs);Fe.current=!1,Sr(!1),ee.current="custom",Ie.current=G,Qe("custom"),_r(G),z(D)}function Oe(){let x=Gn();Fe.current=!1,Sr(!1),ee.current="fit",Qe("fit"),z(x)}function pe(){let x=Gn(),D=!Fe.current;Fe.current=D,Sr(D),ee.current="fit",Qe("fit"),z(x),In()}Gt(()=>{let x=R.current;if(!x||he!=="ready")return;let D=H=>{let G=H.detail<0?-1:1,ce=Wr(Te.current+G,1,Pe.current);ce!==Te.current&&wn(ce)};return x.addEventListener("dshr-pdf-page-turn",D),()=>x.removeEventListener("dshr-pdf-page-turn",D)},[he,Ge,ze]);function Tt(x,D){let H=J.current.get(x);if(!H||!H.text)return;let G=H.text,ce=D.replace(/\s+/g," ").trim(),oe=ce?G.indexOf(ce):-1,Ne=Hf,Je=0;if(oe>=0){let pt=Math.max(80,Math.floor((Ne-Math.min(ce.length,Ne-160))/2));Je=Math.max(0,oe-pt)}let Ue=Math.min(G.length,Je+Ne);return Ue-Je<Ne&&(Je=Math.max(0,Ue-Ne)),G.slice(Je,Ue).trim()||void 0}function ft(){if(dt.current="",!Ee.current)return;Ee.current=!1;let x=T.current&&T.current.onSelection;x&&x(null)}function kt(){let x=globalThis.getSelection?globalThis.getSelection():null;if(!x||x.isCollapsed||x.rangeCount===0){ft();return}let H=M.current;if(!H)return;let G=x.getRangeAt(0);if(!H.querySelector(".dshr-pdf-content")?.contains(G.commonAncestorContainer)){ft();return}let ce=x.toString().replace(/\s+/g," ").trim();if(!ce){ft();return}let oe=qd(G.startContainer)||qd(G.endContainer)||Te.current,Ne=Wf(x);if(!Ne)return;let Je=[oe,ce,Math.round(Ne.left),Math.round(Ne.top),Math.round(Ne.width),Math.round(Ne.height)].join("|");if(Je===dt.current)return;dt.current=Je;let Ue={text:ce,page:oe,rect:Ne},Be=O.current.get(oe);if(Be){let Ke=la(G,Be);Ke.length>0&&(Ue.pageRects=Ke);let Tr=Be.querySelector(".dshr-pdf-text-layer");if(Ue.evidenceAnchor=zd(G,Tr,Be,oe),Ue.evidenceAnchor){let br=se.current;!de.current&&br?.getPageLabels&&(de.current=br.getPageLabels().catch(()=>null)),Ue.printLabelRequest=de.current?.then(Wt=>Wt?.[oe-1]||"");let tn=Wt=>(Wt.nodeType===1?Wt:Wt.parentElement)?.closest("[data-pdf-segments]")?.dataset.pdfSegments.split("|")||[],xr=tn(G.endContainer),ds=tn(G.startContainer),Pn=Wt=>String(Wt??"").replace(/\s+/gu,""),Zt=Ut.current?.[oe]?.find(Wt=>Wt.status==="done"&&Wt.zh?.trim()&&!Wt.sourceNeedsReview&&ds.includes(Wt.id)&&xr.includes(Wt.id)&&Pn(Wt.src).includes(Pn(ce)));Zt&&(Ue.paragraphTranslation={scope:"paragraph",text:Zt.zh,source:Zt.src})}}let pt=Tt(oe,ce);pt&&(Ue.context=pt),Ee.current=!0;let Et=T.current&&T.current.onSelection;Et&&Et(Ue)}let Jt=Hd((x,D)=>{D?v.current.set(x,D):v.current.delete(x)},[]),ot=Hd((x,D)=>{if(D){O.current.set(x,D);for(let G of ae.current)G.observe(D);let H=L.current.get(x);H&&(H.rendered=!1,H.textLayerReady=!1,H.lastRenderScale=null,_o(x,!1))}else{let H=O.current.get(x);if(H)for(let G of ae.current)G.unobserve(H);Y.current.delete(x),Ua(x),O.current.delete(x)}},[]);function Vn(x){let D=x.target;if(D&&typeof D.closest=="function"&&D.closest('button, a, input, textarea, select, [role="button"]'))return;let H=M.current;H&&typeof H.focus=="function"&&H.focus({preventScroll:!0})}function Yo(x){if(x.defaultPrevented||x.altKey||T.current?.paged)return;let D=x.target;if(D?.closest?.(".dshr-pdf-translation-panel, .dshr-topbar--pdf, .dshr-immersive-controls, .dshr-ai, .dshr-anno-panel"))return;let H=D&&D.tagName?D.tagName.toLowerCase():"";if(H==="input"||H==="textarea"||H==="select"||D&&D.isContentEditable)return;let G=R.current;if(!(!G||he!=="ready"))switch(x.key){case"PageDown":x.preventDefault(),C(1);break;case"PageUp":x.preventDefault(),C(-1);break;case"Home":x.preventDefault(),G.scrollTo({top:0,behavior:"auto"}),Br(1);break;case"End":x.preventDefault(),G.scrollTo({top:G.scrollHeight,behavior:"auto"}),Br(Pe.current||1);break;default:break}}function Mn(){for(let x of L.current.values()){if(x.token+=1,x.renderTask)try{x.renderTask.cancel()}catch{}if(x.textLayer)try{x.textLayer.cancel()}catch{}if(x.page)try{x.page.cleanup()}catch{}}L.current.clear()}Gt(()=>{let x=!1,D=new AbortController,H;if(B.current+=1,ie.current=!1,P.current?.close(),P.current=null,se.current=null,$.current.clear(),M.current){for(let ce of["pdfReadBytes","pdfSourceBytes","pdfRangeReads","pdfCacheHits","pdfCacheBytes","pdfWorkerRenders","pdfMainRenders"])M.current.dataset[ce]="0";delete M.current.dataset.pdfRenderer}Mn(),v.current.clear(),O.current.clear(),F.current.clear(),J.current.clear(),Y.current.clear(),fe.current.clear(),d.current=[],S.current.clear(),b.current=0,$e.current=null,ke.current++,Ve.current=!1,de.current=null,xt("loading"),yt(null),Mt(null),Xt(0),hr({}),ye(null),Zr({}),mr(""),Qr(!1),bn(1),pr({}),I(null),yo([]),Te.current=0,je.current=!1;let G=typeof Blob<"u"&&t instanceof Blob;if(!G&&!(t instanceof ArrayBuffer)&&!ArrayBuffer.isView(t)||(G?t.size===0:t.byteLength===0)){xt("error"),yt("\u6CA1\u6709\u53EF\u663E\u793A\u7684 PDF \u6570\u636E\u3002");return}return(async()=>{try{if(H=await ki(t,{signal:D.signal,onRead:Ke=>{!x&&M.current&&(M.current.dataset.pdfReadBytes=String(Ke.bytes),M.current.dataset.pdfSourceBytes=String(Ke.total),M.current.dataset.pdfRangeReads=String(Ke.reads))},onProgress:Ke=>{!x&&Ke?.total>0&&Mt(Math.max(1,Math.min(100,Math.round(Ke.loaded/Ke.total*100))))},onError:Ke=>{x||(xt("error"),yt(Gd(Ke)))}}),x){H.close();return}P.current=H;let{engine:ce,pdf:oe}=H;q.current=ce,se.current=oe;let Ne=await oe.getPage(1);if(x)return;let Je=Ne.getViewport({scale:1}),Ue={width:Je.width,height:Je.height};U.current=Ue;try{Ne.cleanup()}catch{}let Be=Wr(Number.parseInt(i,10)||1,1,oe.numPages),pt=null;if(Be!==1)try{let Ke=await oe.getPage(Be),Tr=Ke.getViewport({scale:1});pt={width:Tr.width,height:Tr.height},F.current.set(Be,pt),Ke.cleanup()}catch{}if(x)return;ye(Ue),hr(pt?{[Be]:pt}:{}),Xt(oe.numPages),Pe.current=oe.numPages,Mt(null),xt("ready"),bn(Be),Te.current=Be;let Et=T.current&&T.current.onReady;Et&&Et({pageCount:oe.numPages})}catch(ce){if(x)return;H?.close(),P.current=null,se.current=null,Mt(null),xt("error"),yt(Gd(ce))}})(),()=>{if(x=!0,D.abort(),ie.current=!0,B.current+=1,Mn(),H?.close(),P.current=null,se.current=null,$.current.clear(),d.current=[],S.current.clear(),re.current&&(clearTimeout(re.current),re.current=0),ne.current&&(cancelAnimationFrame(ne.current),ne.current=0),ue.current&&(cancelAnimationFrame(ue.current),ue.current=0),Ee.current){Ee.current=!1;let ce=T.current&&T.current.onSelection;ce&&ce(null)}}},[t,Ct]),Gt(()=>{let x=()=>kt(),D=()=>kt(),H=()=>{tt.current||(tt.current=requestAnimationFrame(()=>{tt.current=0;let G=globalThis.getSelection?globalThis.getSelection():null;(!G||G.isCollapsed||G.rangeCount===0)&&ft()}))};return document.addEventListener("mouseup",x,!0),document.addEventListener("keyup",D,!0),document.addEventListener("selectionchange",H),()=>{document.removeEventListener("mouseup",x,!0),document.removeEventListener("keyup",D,!0),document.removeEventListener("selectionchange",H),tt.current&&(cancelAnimationFrame(tt.current),tt.current=0)}},[]),zs(()=>{if(he!=="ready")return;let x=R.current;if(!x)return;let D=Xd(x);D>0&&(Xe.current=D,Yr(D)),x.clientHeight>0&&(Re.current=x.clientHeight,Pt(x.clientHeight))},[he,Ge,A]),Gt(()=>{A&&Sr(!0)},[A]),Gt(()=>{if(!A)return;let x=R.current;x&&(x.scrollTop=0)},[A]),Gt(()=>{if(!A||he!=="ready"||Ge<=0)return;Y.current=new Set([ze]),yn(ze);let x=[ze];for(let G=1;G<=2;G+=1)x.push(ze+G,ze-G);let H=x.filter((G,ce,oe)=>G>=1&&G<=Ge&&oe.indexOf(G)===ce).map((G,ce)=>window.setTimeout(()=>Xn(G,{front:ce===0}),ce===0?0:ce===1?30:1e3+(ce-2)*120));return()=>{for(let G of H)window.clearTimeout(G)}},[A,he,ze,Ge,$t,we,nt,Bt,He]),Gt(()=>{if(!A||he!=="ready")return;let x=R.current;x&&x.dispatchEvent(new CustomEvent("dshr-pdf-page-state",{detail:{page:ze,pages:Ge}}))},[A,he,ze,Ge]),Gt(()=>{he==="ready"&&(In(),Ko())},[$t,He,he]),Gt(()=>{if(he!=="ready")return;let x=R.current;if(!x)return;let D=!1,H=null,G=null,ce=()=>{let Ue=Xd(x),Be=x.clientHeight,pt=Ue>0&&Math.abs(Ue-Xe.current)>=.5,Et=Be>0&&Math.abs(Be-Re.current)>=.5;if(!pt&&!Et)return;let Ke=pt||Et&&Fe.current?Gn():null;pt&&(Xe.current=Ue,Yr(Ue)),Et&&(Re.current=Be,Pt(Be)),Ke&&!T.current?.paged&&z(Ke)},oe=()=>{ue.current||(ke.current++,$e.current=null,ue.current=requestAnimationFrame(()=>{ue.current=0,Rn(),Xo()}))},Ne=null;typeof ResizeObserver=="function"&&(Ne=new ResizeObserver(()=>{D||ce()}),Ne.observe(x)),x.addEventListener("scroll",oe,{passive:!0}),!A&&typeof IntersectionObserver=="function"&&(H=new IntersectionObserver(Be=>{for(let pt of Be){let Et=Number(pt.target.getAttribute("data-page"));Number.isFinite(Et)&&(pt.isIntersecting?(Y.current.add(Et),Xn(Et,{front:!0}),yn(Et)):Y.current.delete(Et))}},{root:x,rootMargin:"0px",threshold:0}),G=new IntersectionObserver(Be=>{for(let pt of Be){let Et=Number(pt.target.getAttribute("data-page"));Number.isFinite(Et)&&(pt.isIntersecting?Xn(Et):T.current?.paged||Ua(Et))}},{root:x,rootMargin:Ff,threshold:0}),ae.current=[H,G],as(()=>{if(!D)for(let Be of O.current.values())H.observe(Be),G.observe(Be)}));let Je=requestAnimationFrame(()=>{D||(Vo(),Rn())});return()=>{D=!0,cancelAnimationFrame(Je),Ne&&Ne.disconnect(),H&&H.disconnect(),G&&G.disconnect(),ae.current=[],x.removeEventListener("scroll",oe)}},[he,Ge,A]),Gt(()=>{if(he!=="ready"||Ge<=0||Ve.current)return;Ve.current=!0;let x=Wr(Number.parseInt(i,10)||1,1,Ge),D=setTimeout(()=>{je.current=!0,R.current&&(Vo(),wn(x,"auto"))},0);return()=>clearTimeout(D)},[he,Ge]);let ja=Ce(A);zs(()=>{ja.current!==A&&(ja.current=A,he==="ready"&&(A?R.current.scrollTop=0:wn(Te.current,"auto")))},[A,he]),Gt(()=>{he==="ready"&&(In(),Ko())},[he,we,nt,Bt,Yt]),Gt(()=>{he==="ready"&&In()},[he,N]),Gt(()=>{f.current=!!s,s&&he==="ready"&&$a()},[s,he]);let is=Bs(()=>{if(Ge<=0)return[];let x=A?2:Math.min(16,Math.max(3,Math.ceil(He/Math.max(1,Math.min(ht.defaultHeight,...ht.heights.values())))+1)),D=Math.max(1,ze-x),H=Math.min(Ge,ze+x);return Array.from({length:H-D+1},(G,ce)=>D+ce)},[A,ze,Ge,ht,He]),ec=is[0]||1,tc=is.at(-1)||0,gp=Bs(()=>{let x=new Map;for(let D of w||[]){if(!D||D.kind!=="pdf"||!Number.isFinite(D.page))continue;let H=x.get(D.page)||[];H.push(D),x.set(D.page,H)}return x},[w]);Gt(()=>{if(!_?.page||he!=="ready")return;let x=setTimeout(()=>{wn(Wr(Number(_.page)||1,1,Pe.current||1),"smooth")},80);return()=>clearTimeout(x)},[_,he]),Gt(()=>{if(!y)return;let{anchor:x,quote:D,token:H}=y,G=Ue=>k?.(H,Ue);if(he==="error"){G("unavailable");return}if(he!=="ready")return;let ce=x?.page;if(!Number.isInteger(ce)||ce<1||ce>Pe.current){G("unavailable");return}wn(ce);let oe=performance.now()+6e3,Ne,Je=()=>{if(Te.current!==ce){G("cancelled");return}let Ue=L.current.get(ce),Be=O.current.get(ce);if(Ue?.textLayerReady&&!Ue.textLayer&&Be?.isConnected){let pt=$d(x,D,Be);if(!pt){G("page");return}let Et=R.current,Ke=Et.getBoundingClientRect(),Tr=Be.getBoundingClientRect(),br=pt[0],tn=Tr.left+(br.x+br.w/2)*Tr.width,xr=Tr.top+(br.y+br.h/2)*Tr.height;Et.scrollBy({left:tn<Ke.left||tn>Ke.right?tn-(Ke.left+Ke.width/2):0,top:xr<Ke.top||xr>Ke.bottom?xr-(Ke.top+Ke.height/2):0,behavior:"auto"}),xo({token:H,page:ce,rects:pt}),G("exact");return}if(performance.now()>=oe){G("page");return}Ne=requestAnimationFrame(Je)};return Ne=requestAnimationFrame(Je),()=>cancelAnimationFrame(Ne)},[y,he]);let mp=(we==="fit"?ko(ze):nt)<Hs-.001,bp=(we==="fit"?ko(ze):nt)>$s+.001;function xp(x){let D=x.currentTarget;mr(String(ze)),Qr(!0),requestAnimationFrame(()=>{D&&typeof D.select=="function"&&D.select()})}function vp(x){let D=x.target.value.replace(/[^\d]/g,"").slice(0,6);mr(D)}function yp(){if(rt.current){rt.current=!1,Qr(!1);return}let x=Number.parseInt(Ot,10);Number.isFinite(x)&&Pe.current>0&&wn(Wr(x,1,Pe.current),"auto"),Qr(!1)}function wp(){vn&&yp()}function kp(x){x.key==="Enter"?(x.preventDefault(),x.currentTarget.blur()):x.key==="Escape"&&(x.preventDefault(),rt.current=!0,Qr(!1),x.currentTarget.blur())}let _p=vn?Ot:String(ze),ss=n?"dshr-immersive-btn":"dshr-pdf-tbtn",ls=n||o,rc=`${Math.round((ls?ko(ze):nt)*100)}%`,nc=(0,_e.jsx)("button",{type:"button",className:ss,title:"\u7F29\u5C0F","aria-label":"\u7F29\u5C0F",disabled:!bp,onClick:()=>Q(1/Ud),children:"\u2212"}),oc=(0,_e.jsx)("span",{className:"dshr-pdf-zoom-percent","data-scale":$t?"page":we==="fit"?"fit":nt,title:$t?"\u5F53\u524D\u4E3A\u6574\u9875\u663E\u793A":we==="fit"?"\u5F53\u524D\u4E3A\u9002\u5408\u5BBD\u5EA6":"\u5F53\u524D\u7F29\u653E\u6BD4\u4F8B",children:ls?rc:$t?"\u6574\u9875":we==="fit"?"\u9002\u5BBD":rc}),ac=(0,_e.jsx)("button",{type:"button",className:ss,title:"\u653E\u5927","aria-label":"\u653E\u5927",disabled:!mp,onClick:()=>Q(Ud),children:"\uFF0B"}),ic=(0,_e.jsx)("button",{type:"button",className:`${ss} dshr-pdf-tbtn-wide`,"data-active":$t?"true":"false","aria-pressed":$t,title:$t?"\u5F53\u524D\u6574\u9875\u663E\u793A\uFF1B\u70B9\u51FB\u56DE\u5230\u9002\u5408\u5BBD\u5EA6":"\u70B9\u51FB\u5207\u6362\u4E3A\u6574\u9875\u663E\u793A\uFF1B\u518D\u6B21\u70B9\u51FB\u56DE\u5230\u9002\u5408\u5BBD\u5EA6",onClick:pe,children:ls||$t?"\u6574\u9875":"\u9002\u5BBD"}),sc=(0,_e.jsxs)("div",{className:"dshr-pdf-pager",children:[(0,_e.jsx)("input",{className:"dshr-pdf-page-input",inputMode:"numeric","aria-label":"\u9875\u7801",value:_p,onChange:vp,onFocus:xp,onBlur:wp,onKeyDown:kp}),(0,_e.jsxs)("span",{"aria-hidden":"true",children:["/ ",Ge]})]}),cs=he==="ready"?(0,_e.jsxs)(_e.Fragment,{children:[(0,_e.jsxs)("div",{className:"dshr-pdf-tool-group",role:"group","aria-label":"PDF \u7F29\u653E",children:[nc,oc,ac,ic]}),n?null:(0,_e.jsx)("span",{className:"dshr-pdf-toolbar-sep","aria-hidden":"true"}),sc]}):null,Sp=o&&he==="ready"?{iconTools:(0,_e.jsxs)("div",{className:"dshr-pdf-tool-group",role:"group","aria-label":"PDF \u7F29\u653E",children:[nc,oc,ac]}),textTools:(0,_e.jsxs)("div",{className:"dshr-pdf-tool-group",role:"group","aria-label":"PDF \u9875\u7801\u4E0E\u89C6\u56FE",children:[sc,ic]})}:void 0;return(0,_e.jsxs)("div",{className:"dshr-pdf-root",ref:M,tabIndex:0,"data-dshr-pdf":"",role:"region","aria-label":r?`PDF \u9605\u8BFB\u5668\uFF1A${r}`:"PDF \u9605\u8BFB\u5668",onKeyDown:Yo,children:[o?o(Sp):n?n(cs):cs&&(0,_e.jsxs)("div",{className:"dshr-pdf-toolbar",role:"toolbar","aria-label":"PDF \u9605\u8BFB\u5DE5\u5177\u680F",children:[(0,_e.jsx)("span",{className:"dshr-pdf-title",title:r||void 0,children:r}),(0,_e.jsx)("span",{className:"dshr-pdf-toolbar-spacer"}),cs]}),(0,_e.jsxs)("div",{className:"dshr-pdf-body",children:[(0,_e.jsx)("div",{className:"dshr-pdf-area",children:(0,_e.jsxs)("div",{className:"dshr-pdf-workspace",children:[(0,_e.jsx)("div",{className:"dshr-pdf-scroll",ref:R,"data-pdf-page":A?ze:void 0,"data-pdf-pages":A?Ge:void 0,onMouseDown:Vn,onPointerOver:x=>{if(!At.current||x.buttons)return;let D=x.target.closest?.("[data-pdf-segment]"),H=Number(D?.closest(".dshr-pdf-frame")?.dataset.page);D&&H&&qo(D.dataset.pdfSegment,{origin:"source"},H)},children:he==="ready"?(0,_e.jsxs)("div",{className:"dshr-pdf-content",children:[!A&&ec>1?(0,_e.jsx)("div",{className:"dshr-pdf-spacer","aria-hidden":"true",style:{height:ht.top(ec)-ht.paddingTop}}):null,is.map(x=>(0,_e.jsx)(jf,{pageNumber:x,dim:Jr(x),mode:$t?"page":we,scale:nt,viewportWidth:Bt,viewportHeight:He,active:!A||x===ze,rendered:!!xn[x],registerPageElement:Jt,registerFrameElement:ot,annotations:gp.get(x),onOpenAnnotation:m,evidenceRects:zr?.token===y?.token&&zr?.page===x?zr.rects:void 0},x)),!A&&tc<Ge?(0,_e.jsx)("div",{className:"dshr-pdf-spacer","aria-hidden":"true",style:{height:ht.top(Ge+1)-ht.top(tc+1)}}):null]}):(0,_e.jsx)("div",{className:"dshr-pdf-status",role:he==="error"?"alert":"status",children:he==="error"?(0,_e.jsxs)(_e.Fragment,{children:[(0,_e.jsx)("p",{className:"dshr-pdf-status-title dshr-pdf-status-error",children:"PDF \u52A0\u8F7D\u5931\u8D25"}),(0,_e.jsx)("p",{className:"dshr-pdf-status-detail",children:vt}),(0,_e.jsx)("button",{type:"button",className:"dshr-pdf-status-retry",onClick:()=>Wn(x=>x+1),children:"\u91CD\u65B0\u52A0\u8F7D"})]}):(0,_e.jsxs)(_e.Fragment,{children:[(0,_e.jsx)("span",{className:"dshr-pdf-status-spinner","aria-hidden":"true"}),(0,_e.jsx)("p",{className:"dshr-pdf-status-title",children:"\u6B63\u5728\u52A0\u8F7D PDF\u2026"}),Rt!==null?(0,_e.jsxs)("p",{className:"dshr-pdf-status-progress",children:[Rt,"%"]}):null]})})}),it?(0,_e.jsx)(Pd,{page:ze,source:It[ze],rows:e?wt.pages[ze]||[]:(It[ze]?.segments||[]).map((x,D)=>({...x,...l?.[ze]?.segments?.[D]||{},status:l?.[ze]?.status||"queued",error:l?.[ze]?.error})),activeId:xe?.page===ze?xe.id:null,originRef:ut,translation:e?wt:{...wt,retry:x=>{fe.current.delete(x),g?.(x),yn(x)}},onActivate:(x,D)=>qo(x,D,ze),onClose:()=>{me(!0),E?.()}}):null]})}),a]})]})}Kd.displayName="PdfViewer";var Yd=Kd;var jr=Lt(require("react"),1);var Cx=require("react"),Kt=require("react/jsx-runtime");function Ii(t,e="i"){let r=[],n=String(t??""),o=/(\*\*[^*]+\*\*|__[^_]+__|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/gu,a=0,i=0;for(let s of n.matchAll(o)){s.index>a&&r.push(n.slice(a,s.index));let l=s[0],c=`${e}-${i++}`;if(l.startsWith("**")||l.startsWith("__"))r.push((0,Kt.jsx)("strong",{children:l.slice(2,-2)},c));else if(l.startsWith("`"))r.push((0,Kt.jsx)("code",{children:l.slice(1,-1)},c));else{let h=/^\[([^\]]+)\]\(([^)\s]+)\)$/u.exec(l);h&&/^https?:\/\//iu.test(h[2])?r.push((0,Kt.jsx)("a",{href:h[2],target:"_blank",rel:"noreferrer noopener",children:h[1]},c)):r.push(l)}a=s.index+l.length}return a<n.length&&r.push(n.slice(a)),r}function Zd({text:t}){let e=String(t??"").replace(/\r\n/gu,`
`).split(`
`),r=[],n=[],o=[],a=[],i=null,s=0,l=()=>{if(n.length===0)return;let u=n.join(" ");r.push((0,Kt.jsx)("p",{children:Ii(u,`p${s}`)},`p-${s++}`)),n=[]},c=()=>{o.length!==0&&(r.push((0,Kt.jsx)("ul",{children:o.map((u,g)=>(0,Kt.jsx)("li",{children:Ii(u,`l${s}-${g}`)},`li-${s}-${g}`))},`ul-${s++}`)),o=[])},h=()=>{a.length!==0&&(r.push((0,Kt.jsx)("blockquote",{children:a.map((u,g)=>(0,Kt.jsx)("p",{children:Ii(u,`q${s}-${g}`)},`bqp-${s}-${g}`))},`bq-${s++}`)),a=[])},p=()=>{l(),c(),h()};for(let u of e){let g=u.trimEnd();if(g.trim().startsWith("```")){i===null?(p(),i=[]):(r.push((0,Kt.jsx)("pre",{children:(0,Kt.jsx)("code",{children:i.join(`
`)})},`pre-${s++}`)),i=null);continue}if(i!==null){i.push(u);continue}if(g.trim()===""){p();continue}let w=/^(#{1,4})\s+(.*)$/u.exec(g);if(w){p();let N=`h${Math.min(4,w[1].length)}`;r.push((0,Kt.jsx)(N,{children:Ii(w[2],`h${s}`)},`h-${s++}`));continue}let m=/^\s*>\s?(.*)$/u.exec(g);if(m){l(),c(),a.push(m[1]);continue}let _=/^\s*[-*+]\s+(.*)$/u.exec(g);if(_){p(),o.push(_[1]);continue}let y=/^\s*\d+[.)]\s+(.*)$/u.exec(g);if(y){p(),o.push(y[1]);continue}if(/^\s*([-*_])(?:\s*\1){2,}\s*$/u.test(g)){p(),r.push((0,Kt.jsx)("hr",{},`hr-${s++}`));continue}c(),h(),n.push(g)}return i!==null&&r.push((0,Kt.jsx)("pre",{children:(0,Kt.jsx)("code",{children:i.join(`
`)})},`pre-${s++}`)),p(),(0,Kt.jsx)(Kt.Fragment,{children:r})}var Ye=require("react/jsx-runtime"),Gf=["\u5E2E\u6211\u68B3\u7406\u8FD9\u6BB5\u8BDD\u7684\u8BBA\u8BC1\u7ED3\u6784","\u89E3\u91CA\u5176\u4E2D\u7684\u4E13\u4E1A\u672F\u8BED\u548C\u80CC\u666F","\u7FFB\u8BD1\u5E76\u6307\u51FA\u5173\u952E\u8BED\u6CD5","\u8FD9\u6BB5\u548C\u6211\u7684\u7814\u7A76\u95EE\u9898\u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F"];function Qd({open:t,onClose:e,seed:r,onGoogle:n,onToast:o}){let[a,i]=jr.default.useState([]),[s,l]=jr.default.useState(""),[c,h]=jr.default.useState(!1),[p,u]=jr.default.useState(""),g=jr.default.useRef(null),w=jr.default.useRef(null),m=r?.id??"",_=r?.text??"",y=r?.context??"",k=jr.default.useCallback(()=>{let T=w.current;T&&requestAnimationFrame(()=>{T.scrollTop=T.scrollHeight})},[]),N=jr.default.useCallback(async(T,{replace:M=!1,history:R}={})=>{let v=String(T??"").trim();if(!v||c)return;g.current?.abort();let O=new AbortController;g.current=O;let L={role:"user",content:v},U=M?[L]:[...R??a,L];i([...U,{role:"assistant",content:""}]),h(!0),u(""),k();let J="";try{await Cs({messages:U.map(Y=>({role:Y.role,content:Y.content})),selection:_,context:y,signal:O.signal},{onDelta:Y=>{J+=Y,i(ae=>{if(ae.length===0)return ae;let fe=[...ae],q=fe[fe.length-1];return q?.role!=="assistant"?ae:(fe[fe.length-1]={...q,content:J},fe)}),k()}}),J.trim()||(u("AI \u6CA1\u6709\u8FD4\u56DE\u5185\u5BB9\uFF0C\u8BF7\u91CD\u8BD5\u6216\u6362\u4E00\u79CD\u95EE\u6CD5\u3002"),i(Y=>Y.filter((ae,fe)=>!(fe===Y.length-1&&ae.role==="assistant"&&!ae.content))))}catch(Y){if(Zn(Y))return;u(Y?.message||"AI \u8BF7\u6C42\u5931\u8D25\u3002"),i(ae=>{let fe=ae[ae.length-1];return fe?.role==="assistant"&&!fe.content?ae.slice(0,-1):ae})}finally{h(!1)}},[c,y,a,k,_]);if(jr.default.useEffect(()=>{if(!t||!m)return;g.current?.abort(),i([]),u(""),l("");let T="\u8BF7\u89E3\u91CA\u8FD9\u6BB5\u5185\u5BB9\u3002";i([{role:"user",content:T},{role:"assistant",content:""}]),h(!0);let M=new AbortController;g.current=M;let R="";return Cs({messages:[{role:"user",content:T}],selection:_,context:y,signal:M.signal},{onDelta:v=>{R+=v,i(O=>{if(O.length===0)return O;let L=[...O],F=L[L.length-1];return F?.role!=="assistant"?O:(L[L.length-1]={...F,content:R},L)}),k()}}).catch(v=>{Zn(v)||u(v?.message||"AI \u8BF7\u6C42\u5931\u8D25\u3002")}).finally(()=>{h(!1),R.trim()||i(v=>v.filter((O,L)=>!(L===v.length-1&&O.role==="assistant"&&!O.content)))}),()=>M.abort()},[t,m]),jr.default.useEffect(()=>{t||g.current?.abort()},[t]),!t)return null;let A=T=>{T.preventDefault();let M=s.trim();!M||c||(l(""),N(M))},E=T=>{let M=_||a.find(R=>R.role==="user")?.content||"";if(!M.trim()){o?.("\u5148\u5728\u6B63\u6587\u91CC\u9009\u4E2D\u4E00\u6BB5\u6587\u5B57\uFF0C\u518D\u641C\u7D22\u3002");return}n?.(M,T?"scholar":"web")};return(0,Ye.jsxs)("aside",{className:"dshr-ai","aria-label":"AI \u9605\u8BFB\u52A9\u624B",children:[(0,Ye.jsxs)("div",{className:"dshr-ai__head",children:[(0,Ye.jsx)(Ln,{size:17}),(0,Ye.jsx)("strong",{children:"AI \u9605\u8BFB\u52A9\u624B"}),(0,Ye.jsx)("span",{className:"dshr-chip dshr-chip--brand",children:"DSH \u9ED8\u8BA4\u6A21\u578B"}),(0,Ye.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:e,"aria-label":"\u5173\u95ED AI \u9762\u677F",title:"\u5173\u95ED",children:(0,Ye.jsx)(Nr,{size:16})})]}),(0,Ye.jsxs)("div",{className:"dshr-ai__body",ref:w,children:[a.length===0?(0,Ye.jsxs)("div",{className:"dshr-ai__welcome",children:[(0,Ye.jsx)("strong",{children:"\u9009\u4E2D\u6B63\u6587\u4E2D\u7684\u4EFB\u610F\u53E5\u5B50"}),"\uFF0C\u6211\u4F1A\u89E3\u91CA\u542B\u4E49\u3001\u672F\u8BED\u548C\u8BED\u6CD5\uFF1B\u4E5F\u53EF\u4EE5\u76F4\u63A5\u8FFD\u95EE\uFF0C\u6216\u8DF3\u8F6C Google / Google \u5B66\u672F\u7EE7\u7EED\u67E5\u3002",(0,Ye.jsx)("div",{className:"dshr-ai__suggestions",children:Gf.map(T=>(0,Ye.jsx)("button",{type:"button",onClick:()=>{N(T)},disabled:c,children:T},T))})]}):a.map((T,M)=>(0,Ye.jsxs)("div",{className:`dshr-ai__msg${T.role==="user"?" dshr-ai__msg--user":""}`,children:[(0,Ye.jsx)("span",{className:"dshr-ai__role",children:T.role==="user"?"\u4F60":"\u9605\u8BFB\u52A9\u624B"}),T.role==="assistant"?T.content?(0,Ye.jsx)(Zd,{text:T.content}):c&&M===a.length-1?(0,Ye.jsxs)("span",{className:"dshr-translation__loading",children:[(0,Ye.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u601D\u8003\u2026"]}):null:T.content]},M)),p?(0,Ye.jsxs)("div",{className:"dshr-ai__error",children:[p,(0,Ye.jsx)("div",{style:{marginTop:6},children:(0,Ye.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>{N(a.find(T=>T.role==="user")?.content||"\u8BF7\u91CD\u65B0\u89E3\u91CA\u8FD9\u6BB5\u5185\u5BB9\u3002",{replace:!0,history:[]})},children:[(0,Ye.jsx)(gc,{size:13})," \u91CD\u65B0\u56DE\u7B54"]})})]}):null]}),(0,Ye.jsx)("div",{className:"dshr-ai__foot",children:(0,Ye.jsxs)("form",{onSubmit:A,children:[(0,Ye.jsx)("textarea",{className:"dshr-ai__input",placeholder:"\u8FFD\u95EE\uFF1A\u8FD9\u6BB5\u7684\u8BBA\u8BC1\u6709\u4EC0\u4E48\u95EE\u9898\uFF1F\uFF0F\u672F\u8BED\u662F\u4EC0\u4E48\u610F\u601D\uFF1F",value:s,onChange:T=>l(T.target.value),onKeyDown:T=>{T.key==="Enter"&&!T.shiftKey&&(T.preventDefault(),N(s),l(""))},disabled:c,"aria-label":"\u5411 AI \u8FFD\u95EE"}),(0,Ye.jsxs)("div",{className:"dshr-ai__actions",children:[(0,Ye.jsx)("span",{className:"dshr-ai__hint",children:"Enter \u53D1\u9001 \xB7 Shift+Enter \u6362\u884C"}),(0,Ye.jsxs)("div",{style:{display:"flex",gap:5},children:[(0,Ye.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>E(!1),title:"\u7528 Google \u641C\u7D22\u9009\u4E2D\u7684\u6587\u5B57",children:[(0,Ye.jsx)(Ja,{size:13})," Google"]}),(0,Ye.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>E(!0),title:"\u7528 Google \u5B66\u672F\u641C\u7D22\u9009\u4E2D\u7684\u6587\u5B57",children:[(0,Ye.jsx)(ei,{size:13})," \u5B66\u672F"]}),(0,Ye.jsxs)("button",{type:"submit",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:c||!s.trim(),children:[c?(0,Ye.jsx)("span",{className:"dshr-spinner"}):(0,Ye.jsx)(mc,{size:13})," \u53D1\u9001"]})]})]})]})})]})}var Dx=require("react");var et=require("react/jsx-runtime");function Jd({selection:t,translation:e,onTranslate:r,onAnnotate:n,onExplain:o,onGoogle:a,onCopy:i,onClose:s,onRetry:l,onEvidence:c,replacingEvidence:h}){if(!t?.text?.trim())return null;let p=t.rect,u=typeof window<"u"?window.innerWidth:1200,g=Math.min(c?560:476,Math.max(1,u-20)),w=g/2,m=typeof window<"u"?window.innerHeight:800,_=p?p.left+p.width/2:u/2,y=Math.max(w+10,Math.min(u-w-10,_)),k=p&&p.top>70?p.top-46:Math.min(m-190,(p?.bottom??0)+10),N=Math.min(m-180,k+42);return(0,et.jsxs)(et.Fragment,{children:[(0,et.jsxs)("div",{className:"dshr-selection",style:{left:y,top:Math.max(8,k),maxWidth:g},role:"toolbar","aria-label":"\u9009\u4E2D\u6587\u5B57\u64CD\u4F5C",onMouseDown:A=>A.preventDefault(),children:[(0,et.jsxs)("button",{type:"button",className:"dshr-selection__btn dshr-selection__btn--accent",onClick:()=>r(t),children:[(0,et.jsx)(So,{size:14})," \u7FFB\u8BD1"]}),(0,et.jsxs)("button",{type:"button",className:"dshr-selection__btn dshr-selection__btn--mark",onClick:()=>n(t),title:"\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u3001\u4FBF\u7B7E\u6216\u5907\u6CE8",children:[(0,et.jsx)(ti,{size:14})," \u6807\u8BB0"]}),c?(0,et.jsx)("button",{type:"button",className:"dshr-selection__btn dshr-selection__btn--accent",onClick:c,children:h?"\u91CD\u65B0\u5173\u8054\u6B64\u9009\u533A":"\u4FDD\u5B58\u8BC1\u636E"}):null,(0,et.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>o(t),children:[(0,et.jsx)(Ln,{size:14})," AI \u89E3\u91CA"]}),(0,et.jsx)("span",{className:"dshr-selection__sep"}),(0,et.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>a(t.text,"web"),title:"\u7528 Google \u641C\u7D22",children:[(0,et.jsx)(Ja,{size:14})," Google"]}),(0,et.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>a(t.text,"scholar"),title:"\u7528 Google \u5B66\u672F\u641C\u7D22",children:[(0,et.jsx)(ei,{size:14})," \u5B66\u672F"]}),(0,et.jsx)("span",{className:"dshr-selection__sep"}),(0,et.jsx)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>i(t.text),title:"\u590D\u5236\u9009\u4E2D\u6587\u5B57",children:(0,et.jsx)(fc,{size:14})}),(0,et.jsx)("button",{type:"button",className:"dshr-selection__btn",onClick:s,title:"\u5173\u95ED","aria-label":"\u5173\u95ED\u9009\u4E2D\u6587\u5B57\u5DE5\u5177\u680F",children:(0,et.jsx)(Nr,{size:13})})]}),e?(0,et.jsxs)("div",{className:"dshr-selection__pop",style:{left:y,top:N},onMouseDown:A=>A.preventDefault(),children:[(0,et.jsxs)("div",{className:"dshr-selection__pop-head",children:[(0,et.jsx)("span",{children:"\u4E2D\u6587\u8BD1\u6587"}),(0,et.jsx)("button",{type:"button",onClick:s,"aria-label":"\u5173\u95ED\u8BD1\u6587",children:(0,et.jsx)(Nr,{size:12})})]}),e.status==="loading"?(0,et.jsxs)("span",{className:"dshr-translation__loading",children:[(0,et.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u7FFB\u8BD1\u9009\u4E2D\u5185\u5BB9\u2026"]}):e.status==="error"?(0,et.jsxs)("span",{style:{color:"var(--dshr-error)"},children:[e.error||"\u7FFB\u8BD1\u5931\u8D25\u3002"," ",(0,et.jsx)("button",{type:"button",className:"dshr-translation__retry",onClick:l,children:"\u91CD\u8BD5"})]}):String(e.zh||"").split(/\n+/u).filter(Boolean).map((A,E)=>(0,et.jsx)("p",{style:{margin:E===0?0:"8px 0 0"},children:A},E))]}):null]})}var ga=Lt(require("react"),1);var be=require("react/jsx-runtime");function eu({settings:t,onChange:e,onClose:r,onClearLibrary:n,onOpenAppearance:o}){let[a,i]=ga.default.useState(!1);ga.default.useEffect(()=>{let l=c=>{c.key==="Escape"&&r()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[r]);let s=l=>e({...t,...l});return(0,be.jsx)("div",{className:"dshr-modal-mask",onMouseDown:l=>{l.target===l.currentTarget&&r()},children:(0,be.jsxs)("div",{className:"dshr-modal",role:"dialog","aria-modal":"true","aria-label":"\u9605\u8BFB\u8BBE\u7F6E",children:[(0,be.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:12},children:[(0,be.jsxs)("div",{style:{flex:1},children:[(0,be.jsx)("h3",{children:"\u9605\u8BFB\u8BBE\u7F6E"}),(0,be.jsx)("p",{children:"\u8BBE\u7F6E\u53EA\u4FDD\u5B58\u5728\u672C\u673A\uFF0C\u4E0D\u5F71\u54CD DSH \u7684\u5176\u5B83\u63D2\u4EF6\u3002"})]}),(0,be.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:r,"aria-label":"\u5173\u95ED\u8BBE\u7F6E",children:(0,be.jsx)(Nr,{size:16})})]}),(0,be.jsxs)("div",{className:"dshr-settings-row",children:[(0,be.jsxs)("div",{children:[(0,be.jsx)("div",{className:"dshr-settings-row__title",children:"\u5B57\u4F53\u3001\u80CC\u666F\u4E0E\u5E03\u5C40"}),(0,be.jsx)("div",{className:"dshr-settings-row__hint",children:"\u5B57\u4F53\u3001\u5B57\u91CD\u3001\u5B57\u53F7\u3001\u884C\u8DDD\u3001\u9605\u8BFB\u5BBD\u5EA6\u3001\u76EE\u5F55\u5BBD\u5EA6\u3001\u4EAE\u5EA6\u3001\u80CC\u666F\u989C\u8272\u4E0E\u81EA\u5B9A\u4E49\u80CC\u666F\u56FE\u7247\u3002"})]}),(0,be.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:o,children:[(0,be.jsx)(ea,{size:14})," \u6253\u5F00\u5916\u89C2\u9762\u677F"]})]}),(0,be.jsxs)("div",{className:"dshr-settings-row",children:[(0,be.jsxs)("div",{children:[(0,be.jsx)("div",{className:"dshr-settings-row__title",children:"\u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1"}),(0,be.jsx)("div",{className:"dshr-settings-row__hint",children:"\u6EDA\u52A8\u5230\u5916\u6587\u6BB5\u843D\u540E\u81EA\u52A8\u7FFB\u8BD1\u6210\u4E2D\u6587\uFF0C\u8BD1\u6587\u663E\u793A\u5728\u539F\u6587\u4E0B\u65B9\u3002"})]}),(0,be.jsxs)("button",{type:"button",className:"dshr-switch",role:"switch","aria-checked":t.autoTranslate,onClick:()=>s({autoTranslate:!t.autoTranslate}),children:[(0,be.jsx)("span",{className:"dshr-switch__track"}),t.autoTranslate?"\u5F00\u542F":"\u5173\u95ED"]})]}),(0,be.jsxs)("div",{className:"dshr-settings-row",children:[(0,be.jsxs)("div",{children:[(0,be.jsx)("div",{className:"dshr-settings-row__title",children:"\u6B63\u6587\u5B57\u53F7"}),(0,be.jsxs)("div",{className:"dshr-settings-row__hint",children:[t.fontSize,"px \xB7 \u9002\u5408\u957F\u7BC7\u9605\u8BFB\u7684\u5B57\u53F7"]})]}),(0,be.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:5},children:[(0,be.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--outline",onClick:()=>s({fontSize:Math.max(14,t.fontSize-1)}),"aria-label":"\u51CF\u5C0F\u5B57\u53F7",children:(0,be.jsx)(Qa,{size:15})}),(0,be.jsxs)("span",{className:"dshr-chip",style:{minWidth:46,justifyContent:"center"},children:[t.fontSize,"px"]}),(0,be.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--outline",onClick:()=>s({fontSize:Math.min(26,t.fontSize+1)}),"aria-label":"\u589E\u5927\u5B57\u53F7",children:(0,be.jsx)(_n,{size:15})})]})]}),(0,be.jsxs)("div",{className:"dshr-settings-row",children:[(0,be.jsxs)("div",{children:[(0,be.jsx)("div",{className:"dshr-settings-row__title",children:"\u884C\u8DDD"}),(0,be.jsxs)("div",{className:"dshr-settings-row__hint",children:["\u5F53\u524D ",t.lineHeight.toFixed(2)]})]}),(0,be.jsx)("input",{type:"range",min:"1.45",max:"2.2",step:"0.05",value:t.lineHeight,onChange:l=>s({lineHeight:Number(l.target.value)}),"aria-label":"\u884C\u8DDD"})]}),(0,be.jsxs)("div",{className:"dshr-settings-row",children:[(0,be.jsxs)("div",{children:[(0,be.jsx)("div",{className:"dshr-settings-row__title",children:"\u7FFB\u8BD1\u4E0E AI"}),(0,be.jsx)("div",{className:"dshr-settings-row__hint",children:"\u4F7F\u7528 DSH \u5F53\u524D\u9ED8\u8BA4\u6A21\u578B\uFF1B\u7FFB\u8BD1\u53EA\u53D1\u9001\u5F53\u524D\u6BB5\u843D\u6216\u9009\u4E2D\u6587\u5B57\uFF0C\u4E0D\u53D1\u9001\u6574\u672C\u4E66\u3002"})]}),(0,be.jsx)("span",{className:"dshr-chip dshr-chip--brand",children:"DSH \u9ED8\u8BA4\u6A21\u578B"})]}),(0,be.jsxs)("div",{className:"dshr-settings-row dshr-settings-row--danger",children:[(0,be.jsxs)("div",{children:[(0,be.jsx)("div",{className:"dshr-settings-row__title",children:"\u6E05\u7A7A\u672C\u5730\u4E66\u67B6"}),(0,be.jsx)("div",{className:"dshr-settings-row__hint",children:"\u5220\u9664\u5DF2\u5BFC\u5165\u7684\u6240\u6709\u6587\u6863\u3001\u4E66\u5355\u3001\u6279\u6CE8\u548C\u9605\u8BFB\u8FDB\u5EA6\u3002\u5DF2\u4FDD\u5B58\u7684\u8BC1\u636E\u4FDD\u7559\u5E76\u6807\u4E3A\u539F\u6587\u7F3A\u5931\u3002"})]}),a?(0,be.jsxs)("div",{style:{display:"flex",gap:6},children:[(0,be.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm",onClick:()=>i(!1),children:"\u53D6\u6D88"}),(0,be.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--danger",onClick:()=>{n(),i(!1)},children:[(0,be.jsx)(kn,{size:13})," \u786E\u8BA4\u6E05\u7A7A"]})]}):(0,be.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--danger",onClick:()=>i(!0),children:[(0,be.jsx)(kn,{size:13})," \u6E05\u7A7A"]})]})]})})}function tu({book:t,onCancel:e,onConfirm:r}){let[n,o]=ga.default.useState(!1),a=t?.evidenceCount>0;return ga.default.useEffect(()=>{let i=s=>{s.key==="Escape"&&e()};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[e]),(0,be.jsx)("div",{className:"dshr-modal-mask",onMouseDown:i=>{i.target===i.currentTarget&&e()},children:(0,be.jsxs)("div",{className:"dshr-modal",role:"dialog","aria-modal":"true","aria-label":"\u5220\u9664\u6587\u6863",children:[(0,be.jsx)("h3",{children:"\u4ECE\u4E66\u67B6\u5220\u9664\uFF1F"}),(0,be.jsxs)("p",{children:["\u300A",t?.title||"\u672A\u547D\u540D\u6587\u6863","\u300B\u53CA\u5176\u9605\u8BFB\u8FDB\u5EA6\u4F1A\u4ECE\u672C\u673A\u5220\u9664\u3002\u539F\u59CB\u6587\u4EF6\u4E0D\u53D7\u5F71\u54CD\u3002"]}),a?(0,be.jsxs)("p",{children:["\u5173\u8054\u4E86 ",t.evidenceCount," \u6761\u8BC1\u636E\u3002\u4FDD\u7559\u540E\u53EF\u67E5\u770B\u548C\u5BFC\u51FA\uFF0C\u539F\u6587\u4F1A\u6807\u8BB0\u4E3A\u7F3A\u5931\u3002"]}):null,(0,be.jsxs)("div",{className:"dshr-modal__actions",children:[(0,be.jsx)("button",{type:"button",className:"dshr-btn",onClick:e,children:"\u53D6\u6D88"}),a?(0,be.jsxs)(be.Fragment,{children:[(0,be.jsx)("button",{type:"button",className:"dshr-btn",onClick:()=>r(!1),children:"\u5220\u9664\u539F\u6587\u5E76\u4FDD\u7559\u8BC1\u636E"}),(0,be.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--danger",onClick:()=>n?r(!0):o(!0),children:n?"\u786E\u8BA4\u540C\u65F6\u5220\u9664\u8BC1\u636E":"\u4E00\u5E76\u5220\u9664\u8BC1\u636E"})]}):(0,be.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--danger",onClick:()=>r(!1),children:[(0,be.jsx)(kn,{size:14})," \u5220\u9664"]})]})]})})}function ru({message:t}){return t?(0,be.jsx)("div",{className:"dshr-toast",role:"status",children:t}):null}var Io=Lt(require("react"),1);var gt=require("react/jsx-runtime"),qf=[{label:"Project Gutenberg",hint:"\u4E03\u4E07\u672C\u516C\u7248\u4E66",href:"https://www.gutenberg.org/"},{label:"Standard Ebooks",hint:"\u7CBE\u6821\u516C\u7248\u4E66",href:"https://standardebooks.org/"},{label:"arXiv",hint:"\u5F00\u653E\u83B7\u53D6\u8BBA\u6587",href:"https://arxiv.org/"},{label:"Open Library",hint:"\u5F00\u653E\u56FE\u4E66\u76EE\u5F55",href:"https://openlibrary.org/"},{label:"Internet Archive",hint:"\u516C\u7248\u4E0E\u5F00\u653E\u9986\u85CF",href:"https://archive.org/"},{label:"Wikisource",hint:"\u516C\u7248\u6587\u732E",href:"https://zh.wikisource.org/"}];function nu({open:t,busy:e,onClose:r,onSubmit:n}){let[o,a]=Io.default.useState(""),[i,s]=Io.default.useState(""),l=Io.default.useRef(null);return Io.default.useEffect(()=>{t&&(s(""),window.setTimeout(()=>l.current?.focus(),30))},[t]),Io.default.useEffect(()=>{if(!t)return;let h=p=>{p.key==="Escape"&&!e&&r()};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[t,e,r]),t?(0,gt.jsx)("div",{className:"dshr-modal-mask",onMouseDown:h=>{h.target===h.currentTarget&&!e&&r()},children:(0,gt.jsxs)("div",{className:"dshr-modal dshr-online-modal",role:"dialog","aria-modal":"true","aria-label":"\u4ECE\u516C\u5F00\u6765\u6E90\u5BFC\u5165",children:[(0,gt.jsxs)("div",{className:"dshr-online-modal__head",children:[(0,gt.jsxs)("div",{children:[(0,gt.jsxs)("h3",{children:[(0,gt.jsx)(ri,{size:17})," \u4ECE\u516C\u5F00\u6765\u6E90\u5BFC\u5165"]}),(0,gt.jsx)("p",{children:"\u7C98\u8D34\u7535\u5B50\u4E66\u6587\u4EF6\u7684\u76F4\u94FE\uFF0C\u4E0B\u8F7D\u540E\u81EA\u52A8\u52A0\u5165\u4E66\u67B6\u5E76\u6253\u5F00\u3002"})]}),(0,gt.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:r,disabled:e,"aria-label":"\u5173\u95ED\u5728\u7EBF\u5BFC\u5165",children:(0,gt.jsx)(Nr,{size:16})})]}),(0,gt.jsxs)("div",{className:"dshr-online-modal__notice",children:[(0,gt.jsx)("strong",{children:"\u7248\u6743\u63D0\u793A"}),(0,gt.jsx)("span",{children:"\u4EC5\u652F\u6301\u4F60\u786E\u8BA4\u6709\u6743\u4E0B\u8F7D\u7684\u516C\u5F00\u7248\u6743 / \u5F00\u653E\u83B7\u53D6\u8D44\u6E90\u3002\u672C\u529F\u80FD\u4E0D\u5185\u7F6E Z-Library \u7B49\u7248\u6743\u4E0D\u660E\u7684\u4E66\u6E90\uFF0C\u4E5F\u4E0D\u4F1A\u6293\u53D6\u767B\u5F55\u540E\u7684\u79C1\u5BC6\u9875\u9762\u3002"})]}),(0,gt.jsxs)("form",{className:"dshr-online-modal__form",onSubmit:h=>{h.preventDefault();let p=o.trim();if(!/^https:\/\//iu.test(p)){s("\u8BF7\u8F93\u5165\u4EE5 https:// \u5F00\u5934\u7684\u7535\u5B50\u4E66\u6587\u4EF6\u76F4\u94FE\u3002");return}s(""),n(p)},children:[(0,gt.jsx)("label",{htmlFor:"dshr-online-url",children:"\u6587\u4EF6\u76F4\u94FE"}),(0,gt.jsxs)("div",{className:"dshr-online-modal__input",children:[(0,gt.jsx)(wc,{size:15}),(0,gt.jsx)("input",{ref:l,id:"dshr-online-url",type:"url",value:o,onChange:h=>{a(h.target.value),s("")},placeholder:"https://www.gutenberg.org/ebooks/11.epub3.images",spellCheck:"false",autoComplete:"off",disabled:e})]}),i?(0,gt.jsx)("p",{className:"dshr-online-modal__error",children:i}):null,(0,gt.jsx)("p",{className:"dshr-online-modal__hint",children:"\u652F\u6301 PDF / EPUB / MOBI / AZW3 / TXT / Markdown / HTML \u76F4\u94FE\uFF1B\u5355\u4E2A\u6587\u4EF6\u6700\u5927 120 MB\u3002 \u53E4\u767B\u5821\u3001Standard Ebooks\u3001arXiv\u3001Open Library\u3001Internet Archive \u7B49\u7AD9\u70B9\u53EF\u6B63\u5E38\u4F7F\u7528\u3002"}),(0,gt.jsxs)("div",{className:"dshr-online-modal__actions",children:[(0,gt.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--ghost",onClick:r,disabled:e,children:"\u53D6\u6D88"}),(0,gt.jsx)("button",{type:"submit",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:e||o.trim()==="",children:e?"\u6B63\u5728\u4E0B\u8F7D\u2026":"\u4E0B\u8F7D\u5E76\u6253\u5F00"})]})]}),(0,gt.jsxs)("div",{className:"dshr-online-modal__sources",children:[(0,gt.jsx)("span",{children:"\u53BB\u54EA\u91CC\u627E\u4E66\uFF1F"}),(0,gt.jsx)("div",{className:"dshr-online-modal__source-list",children:qf.map(h=>(0,gt.jsx)("a",{href:h.href,target:"_blank",rel:"noreferrer",title:h.hint,children:h.label},h.label))})]})]})}):null}var Ir=Lt(require("react"),1);var er=class t{static GetDistanceBetweenTwoPoint(e,r){return e===null||r===null?1/0:Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))}static GetSegmentLength(e){return t.GetDistanceBetweenTwoPoint(e[0],e[1])}static GetAngleBetweenTwoLine(e,r){let n=e[0].y-e[1].y,o=r[0].y-r[1].y,a=e[1].x-e[0].x,i=r[1].x-r[0].x;return Math.acos((n*o+a*i)/(Math.sqrt(n*n+a*a)*Math.sqrt(o*o+i*i)))}static PointInRect(e,r){return r===null?null:r.x>=e.left&&r.x<=e.width+e.left&&r.y>=e.top&&r.y<=e.top+e.height?r:null}static GetRotatedPoint(e,r,n){return{x:e.x*Math.cos(n)+e.y*Math.sin(n)+r.x,y:e.y*Math.cos(n)-e.x*Math.sin(n)+r.y}}static LimitPointToCircle(e,r,n){if(t.GetDistanceBetweenTwoPoint(e,n)<=r)return n;let o=e.x,a=e.y,i=n.x,s=n.y,l=Math.sqrt(Math.pow(r,2)*Math.pow(o-i,2)/(Math.pow(o-i,2)+Math.pow(a-s,2)))+o;n.x<0&&(l*=-1);let c=(l-o)*(a-s)/(o-i)+a;return o-i+a===0&&(c=r),{x:l,y:c}}static GetIntersectBetweenTwoSegment(e,r,n){return t.PointInRect(e,t.GetIntersectBeetwenTwoLine(r,n))}static GetIntersectBeetwenTwoLine(e,r){let n=e[0].y-e[1].y,o=r[0].y-r[1].y,a=e[1].x-e[0].x,i=r[1].x-r[0].x,s=e[0].x*e[1].y-e[1].x*e[0].y,l=r[0].x*r[1].y-r[1].x*r[0].y,c=n*l-o*s,h=a*l-i*s,p=-((s*i-l*a)/(n*i-o*a)),u=-((n*l-o*s)/(n*i-o*a));if(isFinite(p)&&isFinite(u))return{x:p,y:u};if(Math.abs(c-h)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(e,r){let n=Math.abs(e.x-r.x),o=Math.abs(e.y-r.y),a=Math.max(n,o),i=[e];function s(l,c,h,p,u){return c>l?l+u*(h/p):c<l?l-u*(h/p):l}for(let l=1;l<=a;l+=1)i.push({x:s(e.x,r.x,n,a,l),y:s(e.y,r.y,o,a,l)});return i}};var ma=class{constructor(e,r,n,o){this.direction=e;this.corner=r;this.pageWidth=parseInt(n,10),this.pageHeight=parseInt(o,10)}direction;corner;angle;position;rect;topIntersectPoint=null;sideIntersectPoint=null;bottomIntersectPoint=null;pageWidth;pageHeight;calc(e){try{return this.position=this.calcAngleAndPosition(e),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){let e=[],r=!1;return e.push(this.rect.topLeft),e.push(this.topIntersectPoint),this.sideIntersectPoint===null?r=!0:(e.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(r=!1)),e.push(this.bottomIntersectPoint),(r||this.corner==="bottom")&&e.push(this.rect.bottomLeft),e}getBottomClipArea(){let e=[];return e.push(this.topIntersectPoint),this.corner==="top"?e.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&e.push({x:this.pageWidth,y:0}),e.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?er.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&e.push(this.sideIntersectPoint):this.corner==="top"&&e.push({x:this.pageWidth,y:this.pageHeight}),e.push(this.bottomIntersectPoint),e.push(this.topIntersectPoint),e}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){let e=er.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?e:Math.PI-e}calcAngleAndPosition(e){let r=e;if(this.updateAngleAndGeometry(r),this.corner==="top"?r=this.checkPositionAtCenterLine(r,{x:0,y:0},{x:0,y:this.pageHeight}):r=this.checkPositionAtCenterLine(r,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(r.x-this.pageWidth)<1&&Math.abs(r.y)<1)throw new Error("Point is too small");return r}updateAngleAndGeometry(e){this.angle=this.calculateAngle(e),this.rect=this.getPageRect(e)}calculateAngle(e){let r=this.pageWidth-e.x+1,n=this.corner==="bottom"?this.pageHeight-e.y:e.y,o=2*Math.acos(r/Math.sqrt(n*n+r*r));n<0&&(o=-o);let a=Math.PI-o;if(!isFinite(o)||a>=0&&a<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(o=-o),o}getPageRect(e){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],e):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],e)}getRectFromBasePoint(e,r){return{topLeft:this.getRotatedPoint(e[0],r),topRight:this.getRotatedPoint(e[1],r),bottomLeft:this.getRotatedPoint(e[2],r),bottomRight:this.getRotatedPoint(e[3],r)}}getRotatedPoint(e,r){return{x:e.x*Math.cos(this.angle)+e.y*Math.sin(this.angle)+r.x,y:e.y*Math.cos(this.angle)-e.x*Math.sin(this.angle)+r.y}}calculateIntersectPoint(e){let r={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=er.GetIntersectBetweenTwoSegment(r,[e,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=er.GetIntersectBetweenTwoSegment(r,[e,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=er.GetIntersectBetweenTwoSegment(r,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=er.GetIntersectBetweenTwoSegment(r,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=er.GetIntersectBetweenTwoSegment(r,[e,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=er.GetIntersectBetweenTwoSegment(r,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(e,r,n){let o=e,a=er.LimitPointToCircle(r,this.pageWidth,o);o!==a&&(o=a,this.updateAngleAndGeometry(o));let i=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2)),s=this.rect.bottomRight,l=this.rect.topLeft;if(this.corner==="bottom"&&(s=this.rect.topRight,l=this.rect.bottomLeft),s.x<=0){let c=er.LimitPointToCircle(n,i,l);c!==o&&(o=c,this.updateAngleAndGeometry(o))}return o}getSegmentToShadowLine(){let e=this.getShadowStartPoint(),r=e!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint;return[e,r]}};var Gs={slide:250,cover:300,flip:500},Vf="cubic-bezier(.25,.1,.25,1)",ou=t=>`polygon(${t.filter(Boolean).map(e=>`${e.x}px ${e.y}px`).join(",")})`,Kf=0;function au(t,e){let r=t.getBoundingClientRect(),n=e.querySelectorAll(".dshr-block,.dshr-chapter__kicker,.dshr-chapter__nav");return[...n.length?n:e.children].map(o=>{let a=o.getBoundingClientRect();return{element:o,top:a.top-r.top+t.scrollTop,bottom:a.bottom-r.top+t.scrollTop,left:a.left-r.left,width:a.width,height:a.height}})}function Ri(t){let e=[t,...t.querySelectorAll("*")],r=new Map,n=`dshr-snapshot-${++Kf}-`;for(let o of e){o.id&&(r.set(o.id,n+r.size),o.id=r.get(o.id));for(let a of["data-seg-id","data-anno-block","data-anno-id","autofocus"])o.removeAttribute(a)}if(r.size)for(let o of e)for(let a of[...o.attributes]){if(a.name==="id")continue;let i=a.value.replace(/url\(\s*(['"]?)#([^\s)'";]+)\1\s*\)/g,(s,l,c)=>r.has(c)?`url(#${r.get(c)})`:s);(a.name==="href"||a.name==="xlink:href")&&r.has(i.slice(1))&&(i="#"+r.get(i.slice(1))),i!==a.value&&o.setAttribute(a.name,i)}}function iu(t,e,r,n,o,a){let i=document.createElement("div");i.className="dshr-turn-page";let s=t.getBoundingClientRect(),l=e.getBoundingClientRect(),c=e.cloneNode(!1);Ri(c),Object.assign(c.style,{position:"absolute",left:`${l.left-s.left}px`,top:"0",width:`${l.width}px`,height:"100%",padding:"0",margin:"0"}),i.append(c);let h=new Map([[e,c]]),p=g=>{if(h.has(g))return h.get(g);let w=g.cloneNode(!1);return Ri(w),p(g.parentElement).append(w),h.set(g,w),w};for(let g of r){if(g.bottom<=n+48||g.top>=n+t.clientHeight-o||!g.height)continue;if(g.height>t.clientHeight*8)throw new Error("Snapshot block exceeds viewport budget");let w=document.createTreeWalker(g.element,4294967295);for(let k=g.element;k;k=w.nextNode())if(a.nodes-=1,k.nodeType===3&&(a.text-=k.length),a.nodes<0||a.text<0)throw new Error("Snapshot exceeds DOM budget");let m=g.element.cloneNode(!0);Ri(m),Object.assign(m.style,{position:"absolute",margin:"0",boxSizing:"border-box",left:`${g.left-(l.left-s.left)}px`,top:`${g.top-n}px`,width:`${g.width}px`,height:`${g.height}px`}),p(g.element.parentElement).append(m);let _=[g.element,...g.element.querySelectorAll("*")],y=[m,...m.querySelectorAll("*")];_.forEach((k,N)=>{k.scrollLeft&&(y[N].scrollLeft=k.scrollLeft),k.tagName==="CANVAS"&&(y[N].width=k.width,y[N].height=k.height,y[N].getContext("2d")?.drawImage(k,0,0))})}let u=t.querySelector(":scope > .dshr-anno-layer");if(u){let g=u.cloneNode(!1);Object.assign(g.style,{top:"0",height:"100%"});for(let w of u.children){let m=Number.parseFloat(w.style.top),_=Number.parseFloat(w.style.height)||24;if(m+_<=n+48||m>=n+t.clientHeight-o)continue;if(--a.nodes<0)throw new Error("Snapshot marks exceed DOM budget");let y=w.cloneNode(!0);Ri(y),y.style.top=`${m-n}px`,g.append(y)}i.append(g)}for(let[g,w]of[["top",48],["bottom",o]]){let m=document.createElement("div");m.className=`dshr-turn-mask dshr-turn-mask--${g}`,m.style.height=`${w}px`,i.append(m)}return i}function Yf(t,e,r){let n=new ma(0,"bottom",String(Math.round(t)),String(Math.round(e))),o=Math.max(1e-4,Math.min(.9999,r)),a=Math.min(e*.22,t*.28)*Math.sin(Math.PI*o);if(!n.calc({x:t*(1-2*o),y:e-a-.1}))return null;let i=n.getActiveCorner(),s=n.getAngle(),l=n.getFlippingClipArea().filter(Boolean).map(c=>er.GetRotatedPoint({x:c.x-i.x,y:c.y-i.y},{x:0,y:0},s));return{reveal:ou(n.getBottomClipArea()),fold:ou(l),transform:`translate3d(${i.x}px,${i.y}px,0) rotate(${s}rad)`,shadow:n.getShadowStartPoint(),shadowAngle:n.getShadowAngle()+Math.PI*1.5,strength:Math.sin(Math.PI*o)}}function qs(t,e,r,n,o){let a={nodes:1800,text:64e3};return{page:iu(t,e,r,n,o,a),budget:a,width:t.clientWidth,height:t.clientHeight}}function su({reader:t,scroll:e,stage:r,records:n,from:o,to:a,fromBottom:i,toBottom:s,mode:l,direction:c,departing:h}){let p=Object.hasOwn(Gs,l)?l:"slide",u=e.getBoundingClientRect(),g=t.getBoundingClientRect(),w=document.createElement("div");w.className=`dshr-flow-transition is-${p}`,w.dataset.direction=String(c),w.setAttribute("aria-hidden","true"),w.inert=!0,Object.assign(w.style,{left:`${u.left-g.left}px`,top:`${u.top-g.top}px`,width:`${e.clientWidth}px`,height:`${e.clientHeight}px`});let m=window.getComputedStyle(e);for(let L of Array.from(m))L.startsWith("--dshr-")&&w.style.setProperty(L,m.getPropertyValue(L));let _=h??qs(e,r,n,o,i),y=_.page,k=iu(e,r,n,a,s,_.budget);y.dataset.turnPage="old",k.dataset.turnPage="new",w.append(y,k);let N=[],A=0,E,T=!1,M,R=()=>{T=!0,cancelAnimationFrame(A),clearTimeout(E);for(let L of N)L.cancel();M?.(),w.remove()},v=(L,F)=>{let U=L.animate(F,{duration:Gs[p],easing:Vf,fill:"both"});return U.finished.catch(()=>{}),N.push(U),U};try{if(t.append(w),p==="slide")v(y,[{transform:"translateX(0)"},{transform:`translateX(${-c*100}%)`}]),v(k,[{transform:`translateX(${c*100}%)`},{transform:"translateX(0)"}]);else if(p==="cover"){let L=c>0?k:y,F=c>0?y:k;F.dataset.turnRole="stationary",L.dataset.turnRole="moving",F.style.zIndex="0",L.style.zIndex="1",L.classList.add("has-edge-shadow"),v(L,c>0?[{transform:"translateX(100%)"},{transform:"translateX(0)"}]:[{transform:"translateX(0)"},{transform:"translateX(100%)"}])}else{let L=c>0?y:k,F=c>0?k:y;L.style.zIndex="0",F.style.zIndex="1";let U=document.createElement("div");U.className="dshr-turn-fold";let J=document.createElement("div");J.className="dshr-turn-fold-shadow",F.append(J),w.append(U);let Y=v(w,[{opacity:1},{opacity:1}]),ae=q=>{let se=c>0?q:1-q;if(se<=0){F.style.clipPath="inset(0 100% 0 0)",U.hidden=!0;return}if(se>=1){F.style.clipPath="none",U.hidden=!0,J.hidden=!0;return}let de=Yf(e.clientWidth,e.clientHeight,se);de&&(U.hidden=!1,J.hidden=!1,F.style.clipPath=de.reveal,U.style.clipPath=de.fold,U.style.transform=de.transform,de.shadow&&Object.assign(J.style,{opacity:String(de.strength*.16),transform:`translate3d(${de.shadow.x}px,${de.shadow.y-e.clientHeight}px,0) rotate(${de.shadowAngle}rad)`}))};ae(0);let fe=()=>{T||(ae(Y.effect.getComputedTiming().progress??0),A=requestAnimationFrame(fe))};A=requestAnimationFrame(fe)}}catch(L){throw R(),L}let O=Promise.all(N.map(L=>L.finished.catch(()=>{})));return{overlay:w,width:e.clientWidth,height:e.clientHeight,cancel:R,async play(){try{await Promise.race([O,new Promise(L=>{M=L,E=setTimeout(L,Gs[p]+300)})])}finally{R()}}}}var Zf='a,button,input,select,textarea,img,video,[role="button"],[contenteditable="true"],.dshr-pdf-frame';function Xs(t){let e=window.getSelection?.();return e&&!e.isCollapsed&&(t.contains(e.anchorNode)||t.contains(e.focusNode))}function lu({scroll:t,reader:e,stage:r,hint:n,canTurn:o,turn:a}){let i=null,s="",l=()=>Xs(t),c=k=>{let{target:N,clientX:A,clientY:E}=k;if(!(N instanceof Element)||N.closest(Zf)||r?.contains(N))return null;let T=t.getBoundingClientRect(),M=T.left+t.clientLeft,R=M+t.clientWidth,v=T.top+t.clientTop+12,O=t.clientHeight-24;if(E<v||E>=v+O)return null;let L=Math.max(24,Math.min(64,t.clientWidth*.06)),F=A>=M&&A<M+L?-1:A<R&&A>=R-L?1:0;if(!F||!o(F))return null;let U=r||t.querySelector('.dshr-pdf-page[data-active="true"] .dshr-pdf-frame');if(!U)return null;let J=U.getBoundingClientRect();if(J.right<=M||J.left>=R)return null;let Y=Math.min(L,F<0?J.left-M:R-J.right);return Y<24||(F<0?A>=M+Y:A<R-Y)?null:{direction:F,left:F<0?M:R-Y,top:v,width:Y,height:O}},h=()=>{s&&(s="",n.hidden=!0,delete t.dataset.pageGutterHover)},p=()=>{i=null,h()},u=k=>Math.hypot(k.clientX-i.x,k.clientY-i.y)>6,y={pointerdown:k=>{if(i=null,k.button!==0||!k.isPrimary||k.ctrlKey||k.metaKey||k.altKey||k.shiftKey||l())return;let N=c(k);N&&(i={id:k.pointerId,direction:N.direction,x:k.clientX,y:k.clientY,time:k.timeStamp,released:!1})},pointermove:k=>{let N=c(k);if(i&&(k.pointerId!==i.id||u(k)||N?.direction!==i.direction)&&(i=null),!N||k.buttons||k.pointerType!=="mouse"||l()){h();return}let A=e.getBoundingClientRect(),E=N.left-A.left,T=N.top-A.top,M=[E,T,N.width,N.height].join(":");M!==s&&(s=M,Object.assign(n.style,{left:E+"px",top:T+"px",width:N.width+"px",height:N.height+"px"}),n.hidden=!1,t.dataset.pageGutterHover="true")},pointerup:k=>{if(!i||k.pointerId!==i.id||u(k)||k.timeStamp-i.time>500||l()||c(k)?.direction!==i.direction){i=null;return}i.released=!0},click:k=>{let N=i;i=null,!(!N?.released||k.timeStamp-N.time>600||k.defaultPrevented||l()||c(k)?.direction!==N.direction)&&a(N.direction,k.detail>1)},selectstart:k=>{i&&k.preventDefault()},pointerleave:()=>{i?.released||(i=null),h()},pointercancel:p,contextmenu:p,scroll:h};for(let[k,N]of Object.entries(y))t.addEventListener(k,N);return{hide:h,dispose(){for(let[k,N]of Object.entries(y))t.removeEventListener(k,N);p()}}}var yr=require("react/jsx-runtime"),du='input, textarea, select, [contenteditable="true"]',uu=".dshr-modal-mask,.dshr-modal,.dshr-appearance-panel,.dshr-anno-panel,.dshr-ai,.dshr-selection,.dshr-online-modal,.dshr-anno-composer,.dshr-pdf-translation-panel",Qf=".dshr-topbar,.dshr-immersive-controls,.dshr-toc,.dshr-paged-controls,"+uu+","+du,Jf=()=>window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,cu=220,Mo=null;function hu({enabled:t,animation:e,bookMode:r=!1,bookFrame:n=!1,frameTop:o=52,frameLeft:a=0,readerKey:i,canPrevChapter:s,canNextChapter:l,chapterEntry:c,onChapterTurn:h,onChapterEntered:p}){let[u,g]=Ir.default.useState({page:1,pages:1}),[w,m]=Ir.default.useState({top:48,bottom:56}),[_,y]=Ir.default.useState(null),k=Ir.default.useRef(null),N=Ir.default.useRef(null),A=Ir.default.useRef(null),E=Ir.default.useRef(0),T=Ir.default.useRef(-1/0),M=Ir.default.useRef({});if(Ir.default.useLayoutEffect(()=>{M.current={canPrevChapter:s,canNextChapter:l,chapterEntry:c,onChapterTurn:h,onChapterEntered:p,animation:e}}),Ir.default.useLayoutEffect(()=>{let O=A.current;if(A.current=null,!t)return;let L=k.current?.closest(".dshr-reader"),F=L?.querySelector(".dshr-content,.dshr-pdf-scroll");if(!F)return;let U=F.classList.contains("dshr-pdf-scroll"),J=F.querySelector(".dshr-content__inner"),Y=U?null:M.current.chapterEntry,ae=Y&&O?.entry===Y?O.snapshot:null,fe=Y?.edge,q=Y?.direction,se=-1/0,de=!1,P=kd(),$={scrollBehavior:F.style.scrollBehavior,overflowAnchor:F.style.overflowAnchor};F.style.scrollBehavior="auto",F.style.overflowAnchor="none",F.classList.add("dshr-paged-scroll");let B=!1,ie=!0,ee=!1,Ie=0,Xe=0,Re=0,Fe=[],Pe=null,Te=[],f=null,d=[],S=!U&&J?document.createElement("div"):null;S&&(S.className="dshr-page-tail",S.setAttribute("aria-hidden","true"),F.append(S));let b=()=>{F.dataset.readerNavigation=String(++E.current)};b(),m({top:48,bottom:56});let re=()=>{if(B)return;F.dataset.readerPage=String(P.page),F.dataset.readerPages=String(P.pages),F.dataset.readerTarget=String(P.top),g(ye=>ye.page===P.page&&ye.pages===P.pages?ye:{page:P.page,pages:P.pages});let le=ne(P.top);m(ye=>ye.bottom===le?ye:{top:48,bottom:le})},ne=le=>{let ye=le+F.clientHeight-56,we=Fe.find(Qe=>Qe.top<ye-.5&&Qe.bottom>ye+.5&&Qe.bottom-Qe.top<=F.clientHeight-48-56&&Qe.top>le+48);return we?Math.max(56,F.clientHeight-(we.top-le)):56},ue=()=>{Math.abs(F.scrollTop-P.top)>.5&&(F.scrollTop=P.top)},ge=le=>{if(B||U||de||!J||!F.clientHeight||!F.clientWidth)return;if(ee){ie=!0;return}Fe=_d(F,J),d=au(F,J);let ye=wd(Fe,F.clientHeight);if(S){let Qe=F.scrollHeight-S.offsetHeight,nt=Math.max(0,Math.ceil(ye.at(-1)+F.clientHeight-Qe));S.style.height=nt+"px"}let we=le;if(we==null&&(fe==="start"?we=ye[0]:fe==="end"?we=ye.at(-1):Y?we=Math.max(0,Math.min(1,Number(Y.scrollRatio)||0))*Math.max(0,F.scrollHeight-F.clientHeight):we=Sd(Pe,F,F.scrollTop)),P.replace(ye,we),ie=!1,ue(),Pe=Ps(Fe,P.top,F),re(),Y){let Qe=Y;Y=null,se=performance.now();let nt=ae;ae=null,nt&&nt.width===F.clientWidth&&nt.height===F.clientHeight&&dt(P.top,Qe.direction,nt),M.current.onChapterEntered?.(Qe,ca(F))}},ke=le=>{B||U||de||(ie=!0,ee&&f&&(f.width!==F.clientWidth||f.height!==F.clientHeight||le?.type==="loadingdone")&&f.cancel(),!Xe&&(Xe=requestAnimationFrame(()=>{Xe=0,ee||ge()})))},$e=()=>{Ie+=1,f?.cancel(),f=null,delete F.dataset.readerTurning,L.classList.remove("dshr-is-turning"),ee=!1,Te.length=0},Ee=()=>J?.animate&&!Jf(),dt=async(le,ye,we)=>{ee=!0;let Qe=++Ie;F.dataset.readerTurning="true";try{Ee()&&(f=su({reader:L,scroll:F,stage:J,records:d,from:le,to:P.top,fromBottom:ne(le),toBottom:ne(P.top),mode:M.current.animation,direction:ye,departing:we}),L.classList.add("dshr-is-turning")),ue(),f&&await f.play()}catch{}finally{!B&&Qe===Ie&&(f?.cancel(),f=null,delete F.dataset.readerTurning,L.classList.remove("dshr-is-turning"),ee=!1,ie?ge():(ue(),re()),Te.length&&rt(Te.shift()))}},tt=le=>{let{canPrevChapter:ye,canNextChapter:we,onChapterTurn:Qe}=M.current;if(!Qe||!(le<0?ye:we))return;de=!0,Te.length=0,b();let nt={edge:le>0?"start":"end",direction:le};if(Ee())try{A.current={entry:nt,snapshot:qs(F,J,d,P.top,ne(P.top))}}catch{}Qe(le,nt)},rt=(le,ye=!1)=>{if(B||de)return;if(Mo=L,le=le>0?1:-1,U){F.dispatchEvent(new CustomEvent("dshr-pdf-page-turn",{detail:le}));return}if(Y){ge();return}if(le===q&&(ye||ee||performance.now()-se<cu))return;if(q=null,ee){Te.length<32&&Te.push(le);return}if(ie&&ge(),ie||ee)return;let we=P.top;if(!P.turn(le)){tt(le);return}fe=null,Pe=Ps(Fe,P.top,F),b(),re(),dt(we,le)},Ve=lu({scroll:F,reader:L,stage:J,hint:N.current,turn:rt,canTurn:le=>{if(U){let ye=Number(F.dataset.pdfPage);return le<0?ye>1:ye>0&&ye<Number(F.dataset.pdfPages)}return le<0?P.page>1||M.current.canPrevChapter:P.page<P.pages||M.current.canNextChapter}}),je=()=>{U||ee||de||ie||Re||(Re=requestAnimationFrame(()=>{Re=0,!B&&!ee&&!de&&!ie&&ue()}))},he=le=>{if(U||!J||(le.preventDefault(),de))return;$e(),q=null,fe=null,ae=null;let ye=le.detail||{},we=Number(ye.top)||0;ye.ratio!=null&&(we=Number(ye.ratio)*Math.max(0,F.scrollHeight-F.clientHeight)),ye.element&&J.contains(ye.element)&&(we=ye.element.getBoundingClientRect().top-F.getBoundingClientRect().top+F.scrollTop-48),b(),Pe=null,ge(Math.max(0,we))},xt=le=>{if(le.target instanceof Element&&le.target.closest(Qf)||le.ctrlKey||le.metaKey||Math.abs(le.deltaY)<8&&Math.abs(le.deltaX)<8)return;le.preventDefault();let ye=performance.now(),we=ye-T.current;T.current=ye,we>=cu&&rt(le.deltaY>0||le.deltaX>0?1:-1)},vt=le=>{if(le.defaultPrevented||le.repeat||le.ctrlKey||le.metaKey||le.altKey||!F.isConnected||le.target instanceof Element&&le.target.closest(du+","+uu+",.dshr-topbar--pdf,.dshr-immersive-controls"))return;let ye=le.target instanceof Element&&le.target.closest(".dshr-root"),we=le.target instanceof Element&&le.target.closest(".dshr-reader");if(we&&we!==L||ye&&!ye.contains(L)||!ye&&(Mo?.isConnected?Mo!==L:[...document.querySelectorAll(".dshr-reader")].find(_r=>_r.getBoundingClientRect().height>0)!==L)||Xs(F))return;let Qe=["ArrowDown","ArrowRight","PageDown"," "].includes(le.key),nt=["ArrowUp","ArrowLeft","PageUp"].includes(le.key);!Qe&&!nt||(le.preventDefault(),rt(Qe?1:-1))},yt=le=>{Ve.hide();let{page:ye,pages:we}=le.detail||{};Number.isFinite(ye)&&ye>=1&&Number.isFinite(we)&&we>=1&&g({page:ye,pages:we})},Rt=le=>{rt(Number(le.detail)>0?1:-1)},Mt=()=>{Mo=L};L.addEventListener("pointerdown",Mt),F.addEventListener("wheel",xt,{passive:!1}),F.addEventListener("scroll",je,{passive:!0}),F.addEventListener("dshr-flow-navigate",he),F.addEventListener("dshr-page-turn",Rt),F.addEventListener("dshr-pdf-page-state",yt),window.addEventListener("keydown",vt);let Ge,Xt,Yt,hr=()=>{if(B)return;Ve.hide();let le=F.getBoundingClientRect(),ye=L.getBoundingClientRect(),we={center:le.left-ye.left+le.width/2,bottom:Math.max(0,ye.bottom-le.bottom)};y(Qe=>Qe&&Object.keys(we).every(nt=>Math.abs(Qe[nt]-we[nt])<.5)?Qe:we)};if(hr(),typeof ResizeObserver=="function"&&(Yt=new ResizeObserver(hr),Yt.observe(F),Yt.observe(L)),U){let le=Number(F.dataset.pdfPage),ye=Number(F.dataset.pdfPages);le>0&&ye>0&&g({page:le,pages:ye})}else ge(),typeof ResizeObserver=="function"&&(Ge=new ResizeObserver(ke),Ge.observe(F),Ge.observe(J)),typeof MutationObserver=="function"&&(Xt=new MutationObserver(ke),Xt.observe(J,{subtree:!0,childList:!0,characterData:!0})),J.addEventListener("load",ke,!0),document.fonts?.addEventListener("loadingdone",ke),document.fonts?.ready.then(ke);return()=>{B=!0,$e(),cancelAnimationFrame(Xe),cancelAnimationFrame(Re),Ge?.disconnect(),Yt?.disconnect(),Xt?.disconnect(),J?.removeEventListener("load",ke,!0),document.fonts?.removeEventListener("loadingdone",ke),F.removeEventListener("wheel",xt),F.removeEventListener("scroll",je),F.removeEventListener("dshr-flow-navigate",he),F.removeEventListener("dshr-page-turn",Rt),F.removeEventListener("dshr-pdf-page-state",yt),window.removeEventListener("keydown",vt),L.removeEventListener("pointerdown",Mt),Mo===L&&(Mo=null),F.classList.remove("dshr-paged-scroll"),Object.assign(F.style,$);for(let le of["readerPage","readerPages","readerTarget","readerNavigation","readerTurning"])delete F.dataset[le];S?.remove(),Ve.dispose()}},[t,r,i]),!t)return null;let{page:R,pages:v}=u;return(0,yr.jsxs)("div",{ref:k,className:`dshr-paged-controls${r?" is-book":""}${n?" has-book-frame":""}`,style:{..._?{"--dshr-paged-center":`${_.center}px`,"--dshr-paged-bottom":`${_.bottom+14}px`}:{},"--dshr-book-frame-top":`${Math.max(0,Number(o)||0)}px`,"--dshr-book-frame-left":`${Math.max(0,Number(a)||0)}px`,"--dshr-book-top-cover":`${w.top}px`,"--dshr-book-bottom-cover":`${w.bottom}px`},"aria-live":"polite",children:[n?(0,yr.jsxs)(yr.Fragment,{children:[(0,yr.jsx)("div",{className:"dshr-book-mask dshr-book-mask--top","aria-hidden":"true"}),(0,yr.jsx)("div",{className:"dshr-book-mask dshr-book-mask--bottom","aria-hidden":"true"})]}):null,(0,yr.jsx)("div",{ref:N,className:"dshr-page-gutter-hint",hidden:!0,"aria-hidden":"true"}),(0,yr.jsxs)("div",{className:"dshr-paged-status",title:"\u70B9\u51FB\u5DE6\u53F3\u7559\u767D\u6216\u6309\u65B9\u5411\u952E\u7FFB\u9875",children:[(0,yr.jsx)("b",{children:R}),(0,yr.jsx)("span",{children:"/"}),(0,yr.jsx)("em",{children:v})]})]})}var Nn=Lt(require("react"),1);var Js=Object.freeze([Object.freeze({id:"serif",label:"\u5B8B\u4F53 / Serif",stack:'"Songti SC", "Noto Serif SC", "Source Han Serif SC", "STSong", "SimSun", "\u5B8B\u4F53", Georgia, "Times New Roman", serif'}),Object.freeze({id:"sans",label:"\u9ED1\u4F53 / Sans",stack:'"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", "Segoe UI", system-ui, -apple-system, sans-serif'}),Object.freeze({id:"kai",label:"\u6977\u4F53 / Kai",stack:'"Kaiti SC", "STKaiti", "KaiTi", "\u6977\u4F53", "Noto Serif SC", "Songti SC", "SimSun", serif'}),Object.freeze({id:"system",label:"\u7CFB\u7EDF\u9ED8\u8BA4",stack:'system-ui, -apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif'})]),el=Object.freeze([Object.freeze({value:400,label:"\u5E38\u89C4"}),Object.freeze({value:500,label:"\u4E2D\u7B49"}),Object.freeze({value:600,label:"\u52A0\u7C97"})]),_v=Object.freeze([Object.freeze({id:"scroll",label:"\u6EDA\u52A8"}),Object.freeze({id:"book",label:"\u6A2A\u7248"})]),bu=Object.freeze([Object.freeze({id:"slide",label:"\u6A2A\u5411\u6ED1\u9875",hint:"\u524D\u540E\u4E24\u9875\u8FDE\u7EED\u5E73\u79FB\u8854\u63A5\uFF0C\u4E0D\u6DE1\u51FA\u6B63\u6587"}),Object.freeze({id:"cover",label:"\u4E66\u9875\u8986\u76D6",hint:"\u65B0\u9875\u4ECE\u53F3\u4FA7\u8986\u76D6\u9759\u6B62\u5E95\u9875\uFF0C\u56DE\u7FFB\u65F6\u63ED\u5F00\u5F53\u524D\u9875"}),Object.freeze({id:"flip",label:"3D \u4E66\u9875",hint:"\u4ECE\u53F3\u4E0B\u9875\u89D2\u5411\u4E66\u810A\u6298\u53E0\uFF0C\u5E26\u7EB8\u80CC\u4E0E\u52A8\u6001\u9634\u5F71"})]),Oi=Object.freeze([Object.freeze({id:"paper",label:"\u7EB8\u5F20",bg:"#fbf7ee",ink:"#2b2a26",muted:"#736f64",border:"rgba(43, 42, 38, 0.15)",accent:"#9a6b2f"}),Object.freeze({id:"white",label:"\u767D\u8272",bg:"#ffffff",ink:"#1f2328",muted:"#5c6370",border:"rgba(31, 35, 40, 0.13)",accent:"#3f5ce0"}),Object.freeze({id:"sepia",label:"\u7F8A\u76AE\u7EB8",bg:"#f2e6cf",ink:"#453322",muted:"#715f47",border:"rgba(69, 51, 34, 0.18)",accent:"#8f5a24"}),Object.freeze({id:"green",label:"\u62A4\u773C\u7EFF",bg:"#e3efe4",ink:"#263a2b",muted:"#556b5a",border:"rgba(38, 58, 43, 0.17)",accent:"#3d6a47"}),Object.freeze({id:"night",label:"\u591C\u95F4",bg:"#1c1e22",ink:"#e9e6dd",muted:"#a6a29a",border:"rgba(233, 230, 221, 0.16)",accent:"#d2a76b"}),Object.freeze({id:"custom",label:"\u81EA\u5B9A\u4E49"})]),or=Object.freeze({fontSize:18,lineHeight:1.85,fontFamily:"serif",fontWeight:400,contentWidth:760,tocWidth:260,readingMode:"scroll",pageAnimation:"slide",bookAnimation:"slide",brightness:1,backgroundPreset:"paper",customBackground:"#fbf7ee",textTone:"auto",backgroundImageKey:"",backgroundImageOpacity:.26,backgroundImageBlur:0}),Le=Object.freeze({fontSize:Object.freeze({min:13,max:34,step:1}),lineHeight:Object.freeze({min:1.35,max:2.4,step:.05}),contentWidth:Object.freeze({min:520,max:1600,step:20}),tocWidth:Object.freeze({min:180,max:520,step:10}),brightness:Object.freeze({min:.6,max:1.2,step:.01}),backgroundImageOpacity:Object.freeze({min:0,max:.8,step:.01}),backgroundImageBlur:Object.freeze({min:0,max:12,step:1})}),ba=Object.freeze(el.map(t=>t.value)),eg=Object.freeze(Oi.map(t=>t.id)),tg=new Map(Oi.map(t=>[t.id,t])),pu=new Map(Js.map(t=>[t.id,t])),rg=Object.freeze(["auto","dark","light"]),Ys=Object.freeze({ink:"#181511",muted:"#6b6559",border:"rgba(32, 29, 24, 0.15)",tone:"dark"}),Zs=Object.freeze({ink:"#f8f5ec",muted:"#b3ada0",border:"rgba(245, 242, 233, 0.18)",tone:"light"}),ng="#8a5a24",og="#d8b06a",fu=Object.freeze({white:"#ffffff",black:"#000000",red:"#ff0000",lime:"#00ff00",blue:"#0000ff",yellow:"#ffff00",aqua:"#00ffff",cyan:"#00ffff",fuchsia:"#ff00ff",magenta:"#ff00ff",silver:"#c0c0c0",gray:"#808080",grey:"#808080",maroon:"#800000",olive:"#808000",green:"#008000",purple:"#800080",teal:"#008080",navy:"#000080",orange:"#ffa500",pink:"#ffc0cb",brown:"#a52a2a",gold:"#ffd700",beige:"#f5f5dc",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",turquoise:"#40e0d0",salmon:"#fa8072",coral:"#ff7f50",indigo:"#4b0082",violet:"#ee82ee",wheat:"#f5deb3",tan:"#d2b48c",snow:"#fffafa",linen:"#faf0e6"});function Po(t){return Math.max(0,Math.min(255,Math.round(t)))}function ag(t){let e=t.slice(1);if(!/^[0-9a-f]+$/iu.test(e))return null;if(e.length===3||e.length===4){let[r,n,o]=e.slice(0,3).split("").map(a=>Number.parseInt(`${a}${a}`,16));return{r,g:n,b:o}}return e.length===6||e.length===8?{r:Number.parseInt(e.slice(0,2),16),g:Number.parseInt(e.slice(2,4),16),b:Number.parseInt(e.slice(4,6),16)}:null}function ig(t){let e=/^([+-]?(?:\d+\.?\d*|\.\d+))(%?)$/u.exec(t);if(!e)return null;let r=Number(e[1]);return Number.isFinite(r)?(e[2]==="%"&&(r=r/100*255),Po(r)):null}function sg(t){let e=t.replace(/\//gu," ").split(/[\s,]+/u).filter(Boolean);if(e.length<3)return null;let r=e.slice(0,3).map(ig);return r.some(n=>n===null)?null:{r:r[0],g:r[1],b:r[2]}}function Vs(t,e,r){let n=r;return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function lg(t){let e=t.replace(/\//gu," ").split(/[\s,]+/u).filter(Boolean);if(e.length<3)return null;let r=Number.parseFloat(e[0]),n=Number.parseFloat(e[1]),o=Number.parseFloat(e[2]);if(![r,n,o].every(Number.isFinite))return null;let a=Math.max(0,Math.min(100,n))/100,i=Math.max(0,Math.min(100,o))/100,s=(r%360+360)%360/360;if(a===0){let h=Po(i*255);return{r:h,g:h,b:h}}let l=i<.5?i*(1+a):i+a-i*a,c=2*i-l;return{r:Po(Vs(c,l,s+1/3)*255),g:Po(Vs(c,l,s)*255),b:Po(Vs(c,l,s-1/3)*255)}}function Mi(t){if(typeof t!="string")return null;let e=t.trim().toLowerCase();if(!e)return null;if(e.startsWith("#"))return ag(e);if(e in fu)return Mi(fu[e]);let r=/^([a-z]+)\((.*)\)$/u.exec(e);if(!r)return null;let n=r[1],o=r[2];return n==="rgb"||n==="rgba"?sg(o):n==="hsl"||n==="hsla"?lg(o):null}function gu({r:t,g:e,b:r}){return`#${[t,e,r].map(n=>Po(n).toString(16).padStart(2,"0")).join("")}`}function Ks(t){let e=t/255;return e<=.03928?e/12.92:((e+.055)/1.055)**2.4}function mu(t){let e=Mi(t);return e?.2126*Ks(e.r)+.7152*Ks(e.g)+.0722*Ks(e.b):1}function Pi(t,e){let r=mu(t),n=mu(e),o=Math.max(r,n),a=Math.min(r,n);return(o+.05)/(a+.05)}function tl(t,e="#ffffff"){let r=Mi(t);if(r)return gu(r);let n=Mi(e);return n?gu(n):"#ffffff"}function Qs(t){let e=Pi(Ys.ink,t);return Pi(Zs.ink,t)>e?{...Zs}:{...Ys}}function Li(t){let e=Qs(t);return{ink:e.ink,muted:e.muted,border:e.border}}function Gr(t,e,r,n){let o=Number(t);return Number.isFinite(o)?Math.max(e,Math.min(r,o)):n}function cg(t){return eg.includes(t)?t:"paper"}function dg(t){return rg.includes(t)?t:"auto"}function ug(t){let e=Number(t);if(!Number.isFinite(e))return 400;let r=Math.max(ba[0],Math.min(ba[ba.length-1],e)),n=ba[0],o=Number.POSITIVE_INFINITY;for(let a of ba){let i=Math.abs(a-r);i<o&&(n=a,o=i)}return n}function hg(t){return(pu.get(t)||pu.get("serif")).stack}function pg(t){return t>=600?700:600}function rl(t){let e=t&&typeof t=="object"?t:{},r=cg(e.backgroundPreset),n=tl(e.customBackground,or.customBackground),o=r==="custom"?null:tg.get(r),a=o?o.bg:n,i=Qs(a);o&&(i={ink:o.ink,muted:o.muted,border:o.border});let s=dg(e.textTone);s==="dark"?i={...Ys}:s==="light"&&(i={...Zs});let l=o?o.accent:Qs(a).tone==="light"?og:ng,c=ug(e.fontWeight);return{preset:r,bg:a,ink:i.ink,muted:i.muted,border:i.border,accent:l,fontFamily:hg(e.fontFamily),fontWeight:c,headingWeight:pg(c),width:Gr(e.contentWidth,Le.contentWidth.min,Le.contentWidth.max,or.contentWidth),brightness:Gr(e.brightness,Le.brightness.min,Le.brightness.max,or.brightness),imageOpacity:Gr(e.backgroundImageOpacity,Le.backgroundImageOpacity.min,Le.backgroundImageOpacity.max,or.backgroundImageOpacity),imageBlur:Gr(e.backgroundImageBlur,Le.backgroundImageBlur.min,Le.backgroundImageBlur.max,or.backgroundImageBlur)}}function fg(t){return`url("${String(t).replace(/[\n\r\f]/gu," ").replace(/\\/gu,"\\\\").replace(/"/gu,'\\"')}")`}function Di(t,e){let r=rl(t),n=typeof e=="string"&&e.trim()?fg(e.trim()):"none";return{"--dshr-reader-bg":r.bg,"--dshr-reader-ink":r.ink,"--dshr-reader-muted":r.muted,"--dshr-reader-border":r.border,"--dshr-reader-accent":r.accent,"--dshr-reader-font":r.fontFamily,"--dshr-reader-weight":String(r.fontWeight),"--dshr-reader-heading-weight":String(r.headingWeight),"--dshr-reader-width":`${r.width}px`,"--dshr-reader-brightness":String(r.brightness),"--dshr-reader-image-opacity":String(r.imageOpacity),"--dshr-reader-image-blur":`${r.imageBlur}px`,"--dshr-reader-image":n}}var nl=String.raw`
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
`;var K=require("react/jsx-runtime");function Oo({size:t=15,children:e,viewBox:r="0 0 24 24"}){return(0,K.jsx)("svg",{width:t,height:t,viewBox:r,fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:e})}function gg(t){return(0,K.jsx)(Oo,{...t,children:(0,K.jsx)("path",{d:"m6 6 12 12M18 6 6 18"})})}function mg(t){return(0,K.jsxs)(Oo,{...t,children:[(0,K.jsx)("rect",{x:"3",y:"4.5",width:"18",height:"15",rx:"2.4"}),(0,K.jsx)("circle",{cx:"8.4",cy:"9.6",r:"1.5"}),(0,K.jsx)("path",{d:"m4 17 4.6-4.4a1.6 1.6 0 0 1 2.2 0l2.5 2.4 2.1-2a1.6 1.6 0 0 1 2.2 0L20 15.6"})]})}function bg(t){return(0,K.jsxs)(Oo,{...t,children:[(0,K.jsx)("path",{d:"M12 16V4"}),(0,K.jsx)("path",{d:"m7 9 5-5 5 5"}),(0,K.jsx)("path",{d:"M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15"})]})}function xg(t){return(0,K.jsxs)(Oo,{...t,children:[(0,K.jsx)("path",{d:"M4 7h16M9 7V5h6v2M7 7l.7 12.2A1.8 1.8 0 0 0 9.5 21h5a1.8 1.8 0 0 0 1.8-1.8L17 7"}),(0,K.jsx)("path",{d:"M10 11v6M14 11v6"})]})}function vg(t){return(0,K.jsxs)(Oo,{...t,children:[(0,K.jsx)("path",{d:"M20 11a8 8 0 1 0-2.3 6.3"}),(0,K.jsx)("path",{d:"M20 4v7h-7"})]})}function xu(t){return(0,K.jsx)(Oo,{...t,children:(0,K.jsx)("path",{d:"m5 12 4.5 4.5L19 7"})})}var yg=Object.freeze([{id:"auto",label:"\u81EA\u52A8"},{id:"dark",label:"\u6DF1\u8272\u5B57"},{id:"light",label:"\u6D45\u8272\u5B57"}]),wg=Object.freeze(["fontSize","lineHeight","fontFamily","fontWeight","contentWidth","tocWidth","brightness","backgroundPreset","customBackground","textTone","backgroundImageOpacity","backgroundImageBlur"]),kg='button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';function vu({label:t,value:e,options:r,onChange:n}){return(0,K.jsx)("div",{className:"dshr-appearance-segmented",role:"group","aria-label":t,children:r.map(o=>{let a=o.value!==void 0?o.value:o.id;return(0,K.jsx)("button",{type:"button",className:"dshr-appearance-segmented__item","aria-pressed":e===a,onClick:()=>n(a),children:o.label},String(a))})})}function oo({label:t,valueText:e,min:r,max:n,step:o,value:a,onChange:i,disabled:s,hint:l}){return(0,K.jsxs)("label",{className:`dshr-appearance-slider${s?" is-disabled":""}`,children:[(0,K.jsxs)("span",{className:"dshr-appearance-slider__head",children:[(0,K.jsx)("span",{children:t}),(0,K.jsx)("span",{className:"dshr-appearance-slider__value",children:e})]}),(0,K.jsx)("input",{type:"range",min:r,max:n,step:o,value:a,disabled:s,onChange:c=>i(Number(c.target.value)),"aria-label":t}),l?(0,K.jsx)("span",{className:"dshr-appearance-slider__hint",children:l}):null]})}function yu({open:t,settings:e,backgroundImageUrl:r,onChange:n,onPickBackgroundImage:o,onClearBackgroundImage:a,onClose:i}){let s=Nn.default.useRef(null),l=Nn.default.useId(),[c,h]=Nn.default.useState(!1),p=rl(e),u=!!r,g=tl(e.customBackground,or.customBackground),w=Li(g).ink,m=Pi(p.ink,p.bg),_=Gr(e.fontSize,Le.fontSize.min,Le.fontSize.max,or.fontSize),y=Gr(e.lineHeight,Le.lineHeight.min,Le.lineHeight.max,or.lineHeight),k=!u&&wg.every(O=>e[O]===or[O]),N=Nn.default.useCallback(O=>{typeof n=="function"&&n({...e,...O})},[n,e]);if(Nn.default.useEffect(()=>{if(!t)return;let O=L=>{L.key==="Escape"&&(L.preventDefault(),i?.())};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[t,i]),Nn.default.useEffect(()=>{if(!t)return;let O=typeof document<"u"?document.activeElement:null,L=window.requestAnimationFrame(()=>{s.current?.focus({preventScroll:!0})});return()=>{window.cancelAnimationFrame(L),O instanceof HTMLElement&&O.isConnected&&O.focus({preventScroll:!0})}},[t]),Nn.default.useEffect(()=>{if(!t){h(!1);return}},[t]),Nn.default.useEffect(()=>{if(!c)return;let O=window.setTimeout(()=>h(!1),3200);return()=>window.clearTimeout(O)},[c]),!t)return null;let A=O=>{O.target===O.currentTarget&&i?.()},E=O=>{if(O.key!=="Tab"||!s.current)return;let L=[...s.current.querySelectorAll(kg)].filter(Y=>Y.offsetParent!==null||Y===document.activeElement);if(L.length===0)return;let F=L[0],U=L[L.length-1],J=document.activeElement;O.shiftKey&&(J===F||!s.current.contains(J))?(O.preventDefault(),U.focus()):!O.shiftKey&&J===U&&(O.preventDefault(),F.focus())},T=()=>{if(!c){h(!0);return}h(!1),u&&a?.(),n?.({...e,...or})},R={...Di(e,r),fontSize:`${Math.min(16,Math.max(12,Math.round(_*.8)))}px`,lineHeight:String(y)},v=m>=4.5;return(0,K.jsx)("div",{className:"dshr-appearance-mask",onMouseDown:A,children:(0,K.jsxs)("aside",{className:"dshr-appearance-panel",role:"dialog","aria-modal":"true","aria-labelledby":l,tabIndex:-1,ref:s,onKeyDown:E,children:[(0,K.jsxs)("header",{className:"dshr-appearance-head",children:[(0,K.jsxs)("div",{className:"dshr-appearance-head__text",children:[(0,K.jsx)("strong",{id:l,children:"\u9605\u8BFB\u5916\u89C2"}),(0,K.jsx)("span",{children:"\u8C03\u6574\u6392\u7248\u3001\u5B57\u4F53\u4E0E\u80CC\u666F \xB7 \u4EC5\u4FDD\u5B58\u5728\u672C\u673A"})]}),(0,K.jsx)("button",{type:"button",className:"dshr-appearance-close",onClick:i,"aria-label":"\u5173\u95ED\u5916\u89C2\u8BBE\u7F6E",children:(0,K.jsx)(gg,{size:16})})]}),(0,K.jsxs)("div",{className:"dshr-appearance-body",children:[(0,K.jsxs)("div",{className:"dshr-appearance-preview",style:R,"aria-hidden":"true",children:[(0,K.jsx)("span",{className:"dshr-appearance-preview__badge",children:"\u5B9E\u65F6\u9884\u89C8"}),(0,K.jsxs)("div",{className:"dshr-appearance-preview__inner",children:[(0,K.jsx)("span",{className:"dshr-appearance-preview__kicker",children:"\u7B2C 1 \u7AE0"}),(0,K.jsx)("p",{className:"dshr-appearance-preview__title",children:"\u5C71\u5C45\u79CB\u669D"}),(0,K.jsx)("p",{className:"dshr-appearance-preview__text",children:"\u7A7A\u5C71\u65B0\u96E8\u540E\uFF0C\u5929\u6C14\u665A\u6765\u79CB\u3002\u660E\u6708\u677E\u95F4\u7167\uFF0C\u6E05\u6CC9\u77F3\u4E0A\u6D41\u3002"}),(0,K.jsx)("p",{className:"dshr-appearance-preview__quote",children:"\u7AF9\u55A7\u5F52\u6D63\u5973\uFF0C\u83B2\u52A8\u4E0B\u6E14\u821F\u3002"})]})]}),(0,K.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-bg`,children:[(0,K.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-bg`,children:"\u80CC\u666F"}),(0,K.jsx)("div",{className:"dshr-appearance-swatches",role:"group","aria-label":"\u80CC\u666F\u9884\u8BBE",children:Oi.map(O=>{let L=O.id==="custom"?g:O.bg,F=O.id==="custom"?w:O.ink,U=p.preset===O.id;return(0,K.jsxs)("button",{type:"button",className:`dshr-appearance-swatch${U?" is-active":""}`,"aria-pressed":U,onClick:()=>N({backgroundPreset:O.id}),children:[(0,K.jsx)("span",{className:"dshr-appearance-swatch__chip",style:{background:L,color:F},children:"\u6587"}),(0,K.jsx)("span",{className:"dshr-appearance-swatch__label",children:O.label})]},O.id)})}),(0,K.jsxs)("label",{className:"dshr-appearance-colorrow",children:[(0,K.jsx)("span",{children:"\u81EA\u5B9A\u4E49\u989C\u8272"}),(0,K.jsxs)("span",{className:"dshr-appearance-colorrow__control",children:[(0,K.jsx)("input",{type:"color",className:"dshr-appearance-color",value:g,"aria-label":"\u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272",onChange:O=>N({backgroundPreset:"custom",customBackground:O.target.value})}),(0,K.jsx)("code",{className:"dshr-appearance-colorrow__hex",children:g.toUpperCase()})]})]}),(0,K.jsxs)("div",{className:"dshr-appearance-field",children:[(0,K.jsxs)("div",{className:"dshr-appearance-field__head",children:[(0,K.jsx)("span",{children:"\u6587\u5B57\u8272\u8C03"}),(0,K.jsxs)("span",{className:`dshr-appearance-field__value${v?"":" is-warning"}`,children:["\u5BF9\u6BD4\u5EA6 ",m.toFixed(1),":1"]})]}),(0,K.jsx)(vu,{label:"\u6587\u5B57\u8272\u8C03",value:e.textTone==="dark"||e.textTone==="light"?e.textTone:"auto",options:yg,onChange:O=>N({textTone:O})}),(0,K.jsxs)("p",{className:"dshr-appearance-hint",children:[v?"\u81EA\u52A8\u6A21\u5F0F\u4F1A\u6309\u80CC\u666F\u4EAE\u5EA6\u9009\u62E9\u6DF1\u8272\u6216\u6D45\u8272\u6587\u5B57\u3002":"\u5F53\u524D\u6587\u5B57\u4E0E\u80CC\u666F\u5BF9\u6BD4\u5EA6\u504F\u4F4E\uFF0C\u5EFA\u8BAE\u6539\u9009\u5176\u5B83\u80CC\u666F\u6216\u6587\u5B57\u8272\u8C03\u3002",u?" \u80CC\u666F\u56FE\u7247\u4F1A\u8FDB\u4E00\u6B65\u5F71\u54CD\u5B9E\u9645\u53EF\u8BFB\u6027\u3002":""]})]})]}),(0,K.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-image`,children:[(0,K.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-image`,children:"\u80CC\u666F\u56FE\u7247"}),(0,K.jsxs)("div",{className:"dshr-appearance-image",children:[(0,K.jsx)("span",{className:`dshr-appearance-image__thumb${u?" has-image":""}`,children:u?(0,K.jsx)("img",{src:r,alt:""}):(0,K.jsx)(mg,{size:20})}),(0,K.jsxs)("div",{className:"dshr-appearance-image__meta",children:[(0,K.jsx)("strong",{children:u?"\u5DF2\u9009\u62E9\u80CC\u666F\u56FE\u7247":"\u672A\u9009\u62E9\u80CC\u666F\u56FE\u7247"}),(0,K.jsx)("span",{children:"\u4F5C\u4E3A\u6587\u5B57\u4E0B\u65B9\u7684\u886C\u5E95\uFF0C\u4EC5\u4FDD\u5B58\u5728\u672C\u673A\u3002"})]}),(0,K.jsxs)("div",{className:"dshr-appearance-image__actions",children:[(0,K.jsxs)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--soft dshr-appearance-btn--sm",onClick:o,children:[u?(0,K.jsx)(xu,{size:13}):(0,K.jsx)(bg,{size:13}),u?"\u66F4\u6362":"\u9009\u62E9\u56FE\u7247"]}),u?(0,K.jsxs)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--ghost dshr-appearance-btn--sm",onClick:a,children:[(0,K.jsx)(xg,{size:13})," \u79FB\u9664"]}):null]})]}),(0,K.jsx)(oo,{label:"\u56FE\u7247\u4E0D\u900F\u660E\u5EA6",valueText:`${Math.round(Gr(e.backgroundImageOpacity,Le.backgroundImageOpacity.min,Le.backgroundImageOpacity.max,or.backgroundImageOpacity)*100)}%`,min:Le.backgroundImageOpacity.min,max:Le.backgroundImageOpacity.max,step:Le.backgroundImageOpacity.step,value:Gr(e.backgroundImageOpacity,Le.backgroundImageOpacity.min,Le.backgroundImageOpacity.max,or.backgroundImageOpacity),disabled:!u,onChange:O=>N({backgroundImageOpacity:O})}),(0,K.jsx)(oo,{label:"\u56FE\u7247\u6A21\u7CCA",valueText:`${Math.round(p.imageBlur)}px`,min:Le.backgroundImageBlur.min,max:Le.backgroundImageBlur.max,step:Le.backgroundImageBlur.step,value:p.imageBlur,disabled:!u,onChange:O=>N({backgroundImageBlur:O})}),(0,K.jsx)(oo,{label:"\u9605\u8BFB\u4EAE\u5EA6",valueText:`${Math.round(p.brightness*100)}%`,min:Le.brightness.min,max:Le.brightness.max,step:Le.brightness.step,value:p.brightness,onChange:O=>N({brightness:O})}),(0,K.jsx)("p",{className:"dshr-appearance-hint",children:"\u8C03\u4F4E\u4EAE\u5EA6\u53EF\u51CF\u5C11\u591C\u95F4\u5C4F\u5E55\u523A\u6FC0\uFF1B\u53EA\u5F71\u54CD\u6B63\u6587/PDF \u9605\u8BFB\u533A\uFF0C\u4E0D\u5F71\u54CD\u5DE5\u5177\u680F\u4E0E\u6279\u6CE8\u9762\u677F\u3002"})]}),(0,K.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-type`,children:[(0,K.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-type`,children:"\u5B57\u4F53"}),(0,K.jsx)("div",{className:"dshr-appearance-families",role:"group","aria-label":"\u5B57\u4F53",children:Js.map(O=>(0,K.jsx)("button",{type:"button",className:"dshr-appearance-family",style:{fontFamily:O.stack},"aria-pressed":p.fontFamily===O.stack,onClick:()=>N({fontFamily:O.id}),title:O.label,children:O.label},O.id))}),(0,K.jsxs)("div",{className:"dshr-appearance-field",children:[(0,K.jsx)("div",{className:"dshr-appearance-field__head",children:(0,K.jsx)("span",{children:"\u5B57\u91CD"})}),(0,K.jsx)(vu,{label:"\u5B57\u91CD",value:p.fontWeight,options:el.map(O=>({value:O.value,label:O.label})),onChange:O=>N({fontWeight:O})})]}),(0,K.jsx)(oo,{label:"\u5B57\u53F7",valueText:`${_}px`,min:Le.fontSize.min,max:Le.fontSize.max,step:Le.fontSize.step,value:_,onChange:O=>N({fontSize:O})}),(0,K.jsx)(oo,{label:"\u884C\u9AD8",valueText:y.toFixed(2),min:Le.lineHeight.min,max:Le.lineHeight.max,step:Le.lineHeight.step,value:y,onChange:O=>N({lineHeight:Math.round(O*100)/100})})]}),(0,K.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-layout`,children:[(0,K.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-layout`,children:"\u7248\u5F0F"}),(0,K.jsx)(oo,{label:"\u9605\u8BFB\u5BBD\u5EA6",valueText:`${Math.round(p.width)}px`,min:Le.contentWidth.min,max:Le.contentWidth.max,step:Le.contentWidth.step,value:p.width,onChange:O=>N({contentWidth:O})}),(0,K.jsx)(oo,{label:"\u76EE\u5F55\u5BBD\u5EA6",valueText:`${Math.round(Gr(e.tocWidth,Le.tocWidth.min,Le.tocWidth.max,or.tocWidth))}px`,min:Le.tocWidth.min,max:Le.tocWidth.max,step:Le.tocWidth.step,value:Gr(e.tocWidth,Le.tocWidth.min,Le.tocWidth.max,or.tocWidth),onChange:O=>N({tocWidth:O})}),(0,K.jsx)("p",{className:"dshr-appearance-hint",children:"\u63A7\u5236\u6B63\u6587\u6700\u5927\u5BBD\u5EA6\uFF1B\u76EE\u5F55\u5BBD\u5EA6\u53EF\u5728\u8FD9\u91CC\u8C03\uFF0C\u4E5F\u53EF\u4EE5\u62D6\u52A8\u76EE\u5F55\u53F3\u8FB9\u7F18\u3002\u76EE\u5F55\u6807\u9898\u4F1A\u5B8C\u6574\u6362\u884C\u663E\u793A\u3002"})]})]}),(0,K.jsxs)("footer",{className:"dshr-appearance-foot",children:[(0,K.jsxs)("button",{type:"button",className:`dshr-appearance-btn dshr-appearance-btn--ghost${c?" dshr-appearance-btn--danger":""}`,onClick:T,disabled:k&&!c,title:k?"\u5F53\u524D\u5DF2\u662F\u9ED8\u8BA4\u5916\u89C2":"\u6062\u590D\u9ED8\u8BA4\u5916\u89C2",children:[c?(0,K.jsx)(xu,{size:14}):(0,K.jsx)(vg,{size:14}),c?"\u786E\u8BA4\u6062\u590D\uFF1F":"\u6062\u590D\u9ED8\u8BA4"]}),(0,K.jsx)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--primary",onClick:i,children:"\u5B8C\u6210"})]})]})})}var Fi=Lt(require("react"),1);var Se=require("react/jsx-runtime"),_g={highlight:Qn,underline:fi,note:zn},Sg=[{id:"all",label:"\u5168\u90E8"},...Co.map(t=>({id:t.id,label:t.label}))];function Tg(t){let e=Number(t);if(!Number.isFinite(e)||e<=0)return"";try{return new Date(e).toLocaleDateString("zh-CN",{month:"numeric",day:"numeric"})}catch{return""}}function Eg(t){let e=new Map,r=t&&Array.isArray(t.chapters)?t.chapters:[];for(let n=0;n<r.length;n+=1){let o=r[n];o&&o.id!=null&&e.set(String(o.id),{index:n,title:o.title||""})}return e}function wu(t){return t?t.kind==="pdf"?!0:t.kind==="flow"?!1:Array.isArray(t.rects)&&!Array.isArray(t.ranges):!1}function ku(t,e){if(!t)return null;if(t.chapterId!=null){let r=e.get(String(t.chapterId));if(r)return r}if(Number.isInteger(Number(t.chapterIndex))&&Number(t.chapterIndex)>=0){let r=Number(t.chapterIndex),o=(e.size>0?[...e.values()]:[]).find(a=>a.index===r);return{index:r,title:o?o.title:""}}return null}function Ng(t,e,r){let n=(Array.isArray(t)?t:[]).filter(i=>!(!i||r!=="all"&&i.style!==r)),o=new Map;for(let i=0;i<n.length;i+=1){let s=n[i],l=wu(s),c,h,p;if(l){let u=Number(s.page),g=Number.isInteger(u)&&u>0;c=`pdf:${g?u:"unknown"}`,h=g?1e4+u:999999,p=g?`\u7B2C ${u} \u9875`:"PDF \u9875\u9762"}else{let u=ku(s,e),g=u?u.index:null;c=`flow:${g??"unknown"}`,h=g??99999,p=g==null?"\u6B63\u6587":`\u7B2C ${g+1} \u7AE0${u&&u.title?` \xB7 ${u.title}`:""}`}o.has(c)||o.set(c,{key:c,order:h,title:p,items:[]}),o.get(c).items.push(s)}let a=[...o.values()];a.sort((i,s)=>i.order-s.order);for(let i=0;i<a.length;i+=1)a[i].items.sort((l,c)=>{let h=Array.isArray(l.ranges)&&l.ranges[0]&&l.ranges[0].start||0,p=Array.isArray(c.ranges)&&c.ranges[0]&&c.ranges[0].start||0;return h!==p?h-p:(Number(l.createdAt)||0)-(Number(c.createdAt)||0)});return a}function Ag({hasAny:t,filter:e}){return t?(0,Se.jsxs)("div",{className:"dshr-anno-panel__empty",children:[(0,Se.jsx)("p",{className:"dshr-anno-panel__empty-title",children:"\u6CA1\u6709\u5339\u914D\u7684\u6807\u6CE8"}),(0,Se.jsxs)("p",{className:"dshr-anno-panel__empty-text",children:["\u5F53\u524D\u7B5B\u9009\u662F\u300C",e==="all"?"\u5168\u90E8":Is(e),"\u300D\uFF0C\u5207\u6362\u7B5B\u9009\u770B\u770B\u5176\u4F59\u6807\u6CE8\u3002"]})]}):(0,Se.jsxs)("div",{className:"dshr-anno-panel__empty",children:[(0,Se.jsx)("span",{className:"dshr-anno-panel__empty-mark","aria-hidden":"true",children:(0,Se.jsx)(xd,{size:44})}),(0,Se.jsx)("p",{className:"dshr-anno-panel__empty-title",children:"\u8FD8\u6CA1\u6709\u4EFB\u4F55\u6807\u6CE8"}),(0,Se.jsx)("p",{className:"dshr-anno-panel__empty-text",children:"\u5728\u9605\u8BFB\u65F6\u9009\u4E2D\u4E00\u6BB5\u6587\u5B57\uFF0C\u5C31\u53EF\u4EE5\u7528\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u6216\u4FBF\u7B7E\u628A\u5B83\u7559\u5728\u8FD9\u91CC\u3002"}),(0,Se.jsxs)("ol",{className:"dshr-anno-panel__steps",children:[(0,Se.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,Se.jsx)("span",{className:"dshr-anno-panel__step-index",children:"1"})," \u9009\u4E2D\u6B63\u6587\u4E2D\u7684\u4E00\u6BB5\u6587\u5B57"]}),(0,Se.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,Se.jsx)("span",{className:"dshr-anno-panel__step-index",children:"2"})," \u9009\u62E9\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u6216\u4FBF\u7B7E"]}),(0,Se.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,Se.jsx)("span",{className:"dshr-anno-panel__step-index",children:"3"})," \u4E4B\u540E\u56DE\u5230\u8FD9\u91CC\u56DE\u770B\u3001\u8DF3\u8F6C"]})]}),(0,Se.jsx)("p",{className:"dshr-anno-panel__hint",children:"PDF \u9875\u9762\u540C\u6837\u652F\u6301\uFF1A\u9009\u4E2D\u6587\u5B57\u540E\u70B9\u51FB\u300C\u6807\u6CE8\u300D\u5373\u53EF\u3002"})]})}function _u({open:t,annotations:e,book:r,onClose:n,onOpenAnnotation:o,onJump:a,onDelete:i}){let[s,l]=Fi.default.useState("all"),c=Fi.default.useMemo(()=>Eg(r),[r]);if(Fi.default.useEffect(()=>{if(!t||typeof document>"u")return;let m=_=>{_.key!=="Escape"||typeof n!="function"||document.querySelector(".dshr-anno-composer")||(_.preventDefault(),n())};return document.addEventListener("keydown",m,!0),()=>document.removeEventListener("keydown",m,!0)},[n,t]),!t)return null;let h=(Array.isArray(e)?e:[]).filter(Boolean),p={all:h.length};for(let m=0;m<Co.length;m+=1){let _=Co[m].id;p[_]=h.filter(y=>y.style===_).length}let u=Ng(h,c,s),g=s==="all"?h.length:h.filter(m=>m.style===s).length,w=(m,_)=>{typeof m=="function"&&m(_)};return(0,Se.jsxs)("aside",{className:"dshr-anno-panel","aria-label":"\u6807\u6CE8\u7B14\u8BB0\u9762\u677F",children:[(0,Se.jsxs)("header",{className:"dshr-anno-panel__head",children:[(0,Se.jsxs)("div",{className:"dshr-anno-panel__titles",children:[(0,Se.jsxs)("h3",{className:"dshr-anno-panel__title",children:["\u6807\u6CE8\u7B14\u8BB0",(0,Se.jsx)("span",{className:"dshr-anno-panel__count",children:h.length})]}),(0,Se.jsx)("span",{className:"dshr-anno-panel__sub",children:h.length>0?`${g} \u6761\u6807\u6CE8 \xB7 ${u.length} \u4E2A\u4F4D\u7F6E`:"\u9009\u4E2D\u6587\u5B57\u5373\u53EF\u6DFB\u52A0\u6807\u6CE8"})]}),(0,Se.jsx)("button",{type:"button",className:"dshr-anno-panel__close","aria-label":"\u5173\u95ED\u6807\u6CE8\u9762\u677F",onClick:()=>w(n),children:(0,Se.jsx)(gi,{size:13})})]}),h.length>0?(0,Se.jsx)("div",{className:"dshr-anno-panel__filters",role:"tablist","aria-label":"\u6309\u6837\u5F0F\u7B5B\u9009\u6807\u6CE8",children:Sg.map(m=>{let _=s===m.id,y=p[m.id]||0;return(0,Se.jsxs)("button",{type:"button",role:"tab","aria-selected":_,className:`dshr-anno-panel__filter${_?" is-active":""}`,onClick:()=>l(m.id),children:[m.label,m.id==="all"?` ${y}`:y>0?` ${y}`:""]},m.id)})}):null,(0,Se.jsx)("div",{className:"dshr-anno-panel__list",children:u.length===0?(0,Se.jsx)(Ag,{hasAny:h.length>0,filter:s}):u.map(m=>(0,Se.jsxs)("section",{className:"dshr-anno-panel__group",children:[(0,Se.jsxs)("div",{className:"dshr-anno-panel__group-head",children:[(0,Se.jsx)("span",{className:"dshr-anno-panel__group-title",title:m.title,children:m.title}),(0,Se.jsx)("span",{className:"dshr-anno-panel__group-rule"}),(0,Se.jsx)("span",{className:"dshr-anno-panel__group-count",children:m.items.length})]}),m.items.map(_=>{let y=_.style||"highlight",k=_g[y]||Qn,N=_.color||"#f5d76e",A=typeof _.quote=="string"?_.quote.trim():"",E=typeof _.note=="string"?_.note.trim():"",T=ku(_,c),M=wu(_)?Number(_.page)>0?`\u7B2C ${_.page} \u9875`:"PDF":T?`\u7B2C ${T.index+1} \u7AE0`:"\u6B63\u6587",R=Tg(_.updatedAt||_.createdAt);return(0,Se.jsxs)("article",{className:"dshr-anno-item",style:{"--dshr-anno-color":N},"data-anno-id":_.id||void 0,children:[(0,Se.jsxs)("button",{type:"button",className:"dshr-anno-item__main",onClick:()=>w(o,_.id),title:"\u7F16\u8F91\u8FD9\u6761\u6807\u6CE8",children:[(0,Se.jsxs)("div",{className:"dshr-anno-item__meta",children:[(0,Se.jsx)("span",{className:"dshr-anno-item__dot","aria-hidden":"true"}),(0,Se.jsxs)("span",{className:"dshr-anno-item__style",children:[(0,Se.jsx)(k,{size:12})," ",Is(y)]}),(0,Se.jsx)("span",{className:"dshr-anno-item__sep","aria-hidden":"true",children:"\xB7"}),(0,Se.jsx)("span",{className:"dshr-anno-item__location",children:M}),(0,Se.jsx)("span",{className:"dshr-anno-item__spacer"}),R?(0,Se.jsx)("span",{children:R}):null]}),(0,Se.jsx)("p",{className:"dshr-anno-item__quote",children:A||E||"\uFF08\u672A\u8BB0\u5F55\u9009\u4E2D\u6587\u5B57\uFF09"}),E&&E!==A?(0,Se.jsx)("p",{className:"dshr-anno-item__note",children:E}):null]}),(0,Se.jsxs)("div",{className:"dshr-anno-item__actions",children:[(0,Se.jsx)("button",{type:"button",className:"dshr-anno-item__action dshr-anno-item__action--jump",onClick:()=>w(a,_),title:"\u8DF3\u8F6C\u5230\u8FD9\u6761\u6807\u6CE8\u7684\u4F4D\u7F6E",children:"\u5B9A\u4F4D"}),(0,Se.jsx)("span",{className:"dshr-anno-item__spacer"}),(0,Se.jsx)("button",{type:"button",className:"dshr-anno-item__action dshr-anno-item__action--danger",onClick:()=>w(i,_),title:"\u5220\u9664\u8FD9\u6761\u6807\u6CE8",children:"\u5220\u9664"})]})]},_.id||`${m.key}:${A}`)})]},m.key))})]})}var ln=Lt(require("react"),1);var Me=require("react/jsx-runtime"),Su={highlight:Qn,underline:fi,note:zn},Cg={highlight:"\u7528\u534A\u900F\u660E\u7684\u8272\u5E26\u8986\u76D6\u9009\u4E2D\u6587\u5B57\uFF0C\u53EF\u8C03\u7B14\u89E6\u7C97\u7EC6\u3002",underline:"\u5728\u9009\u4E2D\u6587\u5B57\u4E0B\u65B9\u753B\u4E00\u6761\u624B\u5199\u5F0F\u4E0B\u5212\u7EBF\u3002",note:"\u5728\u9009\u4E2D\u6587\u5B57\u65C1\u653E\u4E00\u679A\u4FBF\u7B7E\uFF0C\u8BB0\u5F55\u6B64\u523B\u7684\u60F3\u6CD5\u3002"},Tu=2e3,ol=sa[1].value;function al(t){return t==="underline"?pd:hd}function Nu(t){return Object.prototype.hasOwnProperty.call(Ao,t)?t:"highlight"}function Ig(t){let e=Number(t);if(!Number.isFinite(e))return ol;let r=ol,n=1/0;for(let o=0;o<sa.length;o+=1){let a=sa[o].value,i=Math.abs(a-e);i<n&&(r=a,n=i)}return r}function Eu(t){let e=t&&typeof t=="object"?t:{},r=Nu(e.style),n=al(r),o=n.find(a=>a.value===e.color);return{style:r,color:o?o.value:typeof e.color=="string"&&e.color?e.color:n[0].value,width:Ig(e.width),note:typeof e.note=="string"?e.note:"",quote:typeof e.quote=="string"?e.quote:""}}function Rg(t,e){if(!t||typeof t!="object")return`${e}:empty`;let r=typeof t.quote=="string"?t.quote:"";return[e,t.id||"",r,Array.isArray(t.ranges)?t.ranges.length:0,t.page==null?"":t.page,t.chapterId==null?"":t.chapterId].join("|")}function Mg(t){return`${Math.round(2+(Number(t)||ol)*.34)}px`}function Au({open:t,draft:e,mode:r,onClose:n,onSave:o,onDelete:a}){let i=r==="edit",[s,l]=ln.default.useState(()=>Eu(e)),c=ln.default.useRef(""),h=ln.default.useRef(null);ln.default.useEffect(()=>{if(!t){c.current="";return}let E=Rg(e,r);c.current!==E&&(c.current=E,l(Eu(e)))},[e,r,t]),ln.default.useEffect(()=>{if(!t||typeof window>"u")return;let E=window.setTimeout(()=>{let T=h.current;if(T)try{T.focus({preventScroll:!0}),T.setSelectionRange(T.value.length,T.value.length)}catch{}},30);return()=>window.clearTimeout(E)},[t]);let p=ln.default.useCallback(E=>{l(T=>({...T,...E}))},[]),u=ln.default.useCallback(E=>{let T=Nu(E);l(M=>{let R=al(T),v=R.some(O=>O.value===M.color);return{...M,style:T,color:v?M.color:R[0].value}})},[]),g=ln.default.useCallback(()=>{if(!s.note.trim()&&!s.quote.trim()&&s.style==="note")return;let T={...e&&typeof e=="object"?e:{},style:s.style,color:s.color,width:s.width,note:s.note,quote:s.quote};typeof o=="function"&&o(T)},[e,o,s]);if(ln.default.useEffect(()=>{if(!t||typeof document>"u")return;let E=T=>{if(T.key==="Escape"){T.preventDefault(),T.stopImmediatePropagation(),typeof n=="function"&&n();return}T.key==="Enter"&&(T.metaKey||T.ctrlKey)&&(T.preventDefault(),T.stopImmediatePropagation(),g())};return document.addEventListener("keydown",E,!0),()=>document.removeEventListener("keydown",E,!0)},[g,n,t]),!t)return null;let w=al(s.style),m=Su[s.style]||Qn,_=s.quote.trim(),y=!!(s.note.trim()||_||s.style!=="note"),k=s.style==="note"?"\u4FBF\u7B7E\u5185\u5BB9":"\u5907\u6CE8",N=s.style==="note"?"\u5199\u4E0B\u8FD9\u6BB5\u6587\u5B57\u7ED9\u4F60\u7684\u60F3\u6CD5\u2026":"\u53EF\u9009\uFF1A\u4E3A\u8FD9\u6761\u6807\u6CE8\u5199\u4E00\u6761\u5907\u6CE8\u2026",A=s.style==="underline"?"\u4E0B\u5212\u7EBF\u989C\u8272":s.style==="note"?"\u4FBF\u7B7E\u989C\u8272":"\u8367\u5149\u7B14\u989C\u8272";return(0,Me.jsx)("div",{className:"dshr-anno-composer-mask",role:"presentation",onMouseDown:E=>{E.target===E.currentTarget&&typeof n=="function"&&n()},children:(0,Me.jsxs)("div",{className:"dshr-anno-composer",role:"dialog","aria-modal":"true","aria-label":i?"\u7F16\u8F91\u6807\u6CE8":"\u6DFB\u52A0\u6807\u6CE8",onMouseDown:E=>E.stopPropagation(),children:[(0,Me.jsxs)("header",{className:"dshr-anno-composer__head",children:[(0,Me.jsxs)("div",{className:"dshr-anno-composer__titles",children:[(0,Me.jsx)("h3",{className:"dshr-anno-composer__title",children:i?"\u7F16\u8F91\u6807\u6CE8":"\u6DFB\u52A0\u6807\u6CE8"}),(0,Me.jsx)("span",{className:"dshr-anno-composer__sub",children:Cg[s.style]})]}),(0,Me.jsx)("button",{type:"button",className:"dshr-anno-composer__close","aria-label":"\u5173\u95ED\u6807\u6CE8\u7F16\u8F91\u5668",onClick:()=>{typeof n=="function"&&n()},children:(0,Me.jsx)(gi,{size:13})})]}),(0,Me.jsxs)("div",{className:"dshr-anno-composer__body",children:[(0,Me.jsx)("div",{className:"dshr-anno-composer__tabs",role:"tablist","aria-label":"\u6807\u6CE8\u6837\u5F0F",children:Co.map(E=>{let T=Su[E.id]||Qn,M=s.style===E.id;return(0,Me.jsxs)("button",{type:"button",role:"tab","aria-selected":M,className:`dshr-anno-composer__tab${M?" is-active":""}`,onClick:()=>u(E.id),children:[(0,Me.jsx)(T,{size:14})," ",E.label]},E.id)})}),(0,Me.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Me.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Me.jsx)("span",{children:A}),(0,Me.jsx)("em",{children:s.style==="underline"?"\u7EB8\u4E0A\u7684\u58A8\u8272":"\u534A\u900F\u660E\u7B14\u89E6"})]}),(0,Me.jsx)("div",{className:"dshr-anno-composer__swatches",role:"radiogroup","aria-label":A,children:w.map(E=>{let T=s.color===E.value;return(0,Me.jsx)("button",{type:"button",role:"radio","aria-checked":T,"aria-label":`${E.label}\u8272`,title:`${E.label}\u8272`,className:`dshr-anno-swatch${T?" is-active":""}`,style:{"--swatch":E.value},onClick:()=>p({color:E.value}),children:E.label},E.id)})})]}),s.style==="highlight"?(0,Me.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Me.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Me.jsx)("span",{children:"\u7B14\u89E6\u7C97\u7EC6"}),(0,Me.jsx)("em",{children:"\u7EC6 / \u4E2D / \u5BBD"})]}),(0,Me.jsx)("div",{className:"dshr-anno-composer__widths",role:"radiogroup","aria-label":"\u7B14\u89E6\u7C97\u7EC6",children:sa.map(E=>{let T=s.width===E.value;return(0,Me.jsxs)("button",{type:"button",role:"radio","aria-checked":T,className:`dshr-anno-width${T?" is-active":""}`,onClick:()=>p({width:E.value}),children:[(0,Me.jsx)("span",{className:"dshr-anno-width__bar",style:{height:Mg(E.value),background:s.color}}),E.label]},E.id)})})]}):null,(0,Me.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Me.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Me.jsx)("span",{children:k}),(0,Me.jsx)("em",{children:s.style==="note"?"\u53EF\u7559\u7A7A\uFF0C\u4EC5\u6807\u8BB0\u4F4D\u7F6E":"\u53EF\u9009"})]}),(0,Me.jsx)("textarea",{ref:h,className:"dshr-anno-composer__textarea",value:s.note,maxLength:Tu,placeholder:N,"aria-label":k,onChange:E=>p({note:E.target.value})}),(0,Me.jsxs)("div",{className:"dshr-anno-composer__counter",children:[s.note.length," / ",Tu]})]}),_?(0,Me.jsxs)("div",{className:"dshr-anno-composer__quote",style:{"--dshr-anno-color":s.color},children:[(0,Me.jsx)("span",{className:"dshr-anno-composer__quote-label",children:"\u9009\u4E2D\u6587\u5B57"}),(0,Me.jsx)("p",{className:"dshr-anno-composer__quote-text",children:_})]}):null,(0,Me.jsxs)("div",{className:`dshr-anno-composer__preview is-${s.style}`,style:{"--dshr-anno-color":s.color},children:[(0,Me.jsx)("span",{className:"dshr-anno-composer__preview-label",children:"\u6548\u679C\u9884\u89C8"}),(0,Me.jsx)("span",{className:"dshr-anno-composer__preview-text",children:_||"\u9009\u4E2D\u7684\u6587\u5B57\u4F1A\u8FD9\u6837\u663E\u793A"})]})]}),(0,Me.jsxs)("footer",{className:"dshr-anno-composer__foot",children:[i?(0,Me.jsx)("button",{type:"button",className:"dshr-anno-btn dshr-anno-btn--danger",onClick:()=>{typeof a=="function"&&a(e||{})},children:"\u5220\u9664"}):null,(0,Me.jsx)("span",{className:"dshr-anno-composer__spacer"}),(0,Me.jsx)("button",{type:"button",className:"dshr-anno-btn",onClick:()=>{typeof n=="function"&&n()},children:"\u53D6\u6D88"}),(0,Me.jsx)("button",{type:"button",className:"dshr-anno-btn dshr-anno-btn--primary",disabled:!y,onClick:g,title:"Ctrl / \u2318 + Enter \u4FDD\u5B58",children:i?"\u4FDD\u5B58\u4FEE\u6539":"\u4FDD\u5B58\u6807\u6CE8"})]})]})})}var zt=Lt(require("react"),1);var Do={selection:"\u9009\u533A\u8BD1\u6587",paragraph:"\u6240\u5C5E\u6BB5\u843D\u8BD1\u6587"};function Cu(t){return String(t??"").replace(/[!-/:-@[-\x60{-~]/gu,e=>"\\"+e)}var ao=t=>Cu(String(t??"").replace(/\s+/gu," ").trim()),Lo=t=>String(t??"").split(/\r\n?|\n/u).map(e=>"> "+Cu(e).replace(/^[ \t]+/u,r=>r.replace(/[ \t]/gu,n=>n==="	"?"&#9;":"&#32;"))).join(`
`);function il({sections:t,books:e,topic:r}){let n=[r?"# "+ao(r.name):"# \u9605\u8BFB\u8BC1\u636E"];r&&(n.push(`## \u7814\u7A76\u95EE\u9898

`+(r.research?.question?Lo(r.research.question):"\u672A\u586B\u5199")),n.push(`## \u4EBA\u5DE5\u7EFC\u5408

`+(r.research?.synthesis?Lo(r.research.synthesis):"\u672A\u586B\u5199")));let o=0;for(let a of t)if(a.rows.length){r&&(n.push("## "+ao(a.name)),a.comparison&&n.push(`**\u672C\u7EC4\u6BD4\u8F83**

`+Lo(a.comparison)));for(let i of a.rows){let s=Tn(i,e.get(i.bookId));n.push("### "+ ++o+". "+ao(s.title),["- PDF \u7269\u7406\u9875\u7801 "+(Number.isSafeInteger(s.page)&&s.page>0?s.page:"\u5F85\u786E\u8BA4"),"- \u5370\u5237\u9875\u6807 "+(ao(s.printLabel)||"\u672A\u63D0\u4F9B"),"- \u4F5C\u8005 "+(ao(s.author)||"\u672A\u63D0\u4F9B"),"- \u5E74\u4EFD "+(ao(s.year)||"\u672A\u63D0\u4F9B"),"- DOI "+(ao(s.doi)||"\u672A\u63D0\u4F9B")].join(`
`)),n.push(`**\u539F\u6587**

`+Lo(i.quote)),i.translation&&n.push("**"+(Do[i.translation.scope]||"\u8BD1\u6587")+`**

`+Lo(i.translation.text)),i.note&&n.push(`**\u5907\u6CE8**

`+Lo(i.note))}}return n.join(`

`)+`
`}function sl(t,e){let r=URL.createObjectURL(new Blob([t],{type:"text/markdown;charset=utf-8"}));try{let n=document.createElement("a");n.href=r,n.download=e,n.click()}finally{setTimeout(()=>URL.revokeObjectURL(r),1e3)}}var io=Lt(require("react"),1);var De=require("react/jsx-runtime");function Iu({book:t,close:e,save:r}){let[n,o]=io.default.useState({title:t.title||"",author:t.author||"",year:t.year||"",doi:t.doi||""}),[a,i]=io.default.useState(!1),[s,l]=io.default.useState("");async function c(h){if(h.preventDefault(),!a){i(!0),l("");try{await r(t.id,n),e()}catch(p){l(p.message||"\u51FA\u5904\u4FDD\u5B58\u5931\u8D25\u3002")}finally{i(!1)}}}return(0,De.jsx)("div",{className:"dshr-modal-mask",children:(0,De.jsxs)("form",{className:"dshr-modal dshr-evidence-dialog",role:"dialog","aria-modal":"true","aria-label":"\u8BBA\u6587\u51FA\u5904",onSubmit:c,onKeyDown:h=>{h.key==="Escape"&&!a&&e()},children:[(0,De.jsx)("h3",{children:"\u8BBA\u6587\u51FA\u5904"}),(0,De.jsx)("p",{children:"\u53EF\u6838\u5BF9\u9898\u540D\uFF0C\u5E76\u8865\u5F55\u5DF2\u786E\u8BA4\u7684\u4F5C\u8005\u3001\u5E74\u4EFD\u548C DOI\u3002"}),[["title","\u9898\u540D",300,"\u5FC5\u586B"],["author","\u4F5C\u8005",500,"\u672A\u63D0\u4F9B"],["year","\u5E74\u4EFD",4,"\u672A\u63D0\u4F9B"],["doi","DOI",400,"\u672A\u63D0\u4F9B"]].map(([h,p,u,g])=>(0,De.jsxs)("label",{children:[p,(0,De.jsx)("input",{type:"text",autoFocus:h==="title",required:h==="title",inputMode:h==="year"?"numeric":void 0,maxLength:u,placeholder:g,value:n[h],onChange:w=>o(m=>({...m,[h]:w.target.value}))})]},h)),s?(0,De.jsx)("p",{role:"alert",children:s}):null,(0,De.jsxs)("div",{className:"dshr-modal__actions",children:[(0,De.jsx)("button",{type:"button",className:"dshr-btn",onClick:e,disabled:a,children:"\u53D6\u6D88"}),(0,De.jsx)("button",{type:"submit",className:"dshr-btn dshr-btn--primary",disabled:a,children:"\u4FDD\u5B58\u51FA\u5904"})]})]})})}function zi(t,e,r){let n=[...t],o=e+r;return[n[e],n[o]]=[n[o],n[e]],n}function Ru({topic:t,rows:e,books:r,save:n,close:o}){let[a,i]=io.default.useState(()=>oi(t.research,new Set(e.map(y=>y.id)))),[s,l]=io.default.useState(""),[c,h]=io.default.useState(!1),p=new Map(a.groups.flatMap(y=>y.ids.map(k=>[k,y.id]))),u=new Map(e.map(y=>[y.id,y]));function g(y){i(k=>({...k,groups:y(k.groups)}))}function w(y,k){g(N=>N.map((A,E)=>E===y?{...A,...k}:A))}function m(y,k){g(N=>N.map(A=>({...A,ids:A.id===k?[...A.ids,y]:A.ids.filter(E=>E!==y)})))}async function _(y){if(y.preventDefault(),!c){l(""),h(!0);try{await n(t,a),o()}catch(k){l(k.message||"\u4E13\u9898\u4FDD\u5B58\u5931\u8D25\u3002")}finally{h(!1)}}}return(0,De.jsxs)("form",{className:"dshr-topic-form",onSubmit:_,children:[(0,De.jsxs)("label",{children:["\u7814\u7A76\u95EE\u9898",(0,De.jsx)("textarea",{value:a.question,maxLength:1e3,onChange:y=>i({...a,question:y.target.value})})]}),(0,De.jsxs)("label",{children:["\u4EBA\u5DE5\u7EFC\u5408",(0,De.jsx)("textarea",{value:a.synthesis,maxLength:2e4,onChange:y=>i({...a,synthesis:y.target.value})})]}),a.groups.map((y,k)=>(0,De.jsxs)("fieldset",{children:[(0,De.jsxs)("legend",{children:["\u5206\u7EC4 ",k+1]}),(0,De.jsxs)("label",{children:["\u5206\u7EC4\u540D\u79F0",(0,De.jsx)("input",{value:y.name,maxLength:80,required:!0,onChange:N=>w(k,{name:N.target.value})})]}),(0,De.jsxs)("label",{children:["\u672C\u7EC4\u6BD4\u8F83",(0,De.jsx)("textarea",{value:y.comparison||"",maxLength:1e4,onChange:N=>w(k,{comparison:N.target.value})})]}),(0,De.jsxs)("div",{className:"dshr-evidence-actions",children:[(0,De.jsx)("button",{type:"button",className:"dshr-btn",disabled:k===0,onClick:()=>g(N=>zi(N,k,-1)),children:"\u4E0A\u79FB\u5206\u7EC4"}),(0,De.jsx)("button",{type:"button",className:"dshr-btn",disabled:k===a.groups.length-1,onClick:()=>g(N=>zi(N,k,1)),children:"\u4E0B\u79FB\u5206\u7EC4"}),(0,De.jsx)("button",{type:"button",className:"dshr-btn",onClick:()=>g(N=>N.filter(A=>A.id!==y.id)),children:"\u79FB\u9664\u5206\u7EC4"})]}),(0,De.jsx)("ol",{children:y.ids.filter(N=>u.has(N)).map((N,A)=>{let E=u.get(N);return(0,De.jsxs)("li",{children:[Tn(E,r.get(E.bookId)).title," \xB7 ",E.quote.slice(0,48),(0,De.jsx)("button",{type:"button",className:"dshr-btn",disabled:A===0,onClick:()=>w(k,{ids:zi(y.ids,A,-1)}),children:"\u4E0A\u79FB\u8BC1\u636E"}),(0,De.jsx)("button",{type:"button",className:"dshr-btn",disabled:A===y.ids.length-1,onClick:()=>w(k,{ids:zi(y.ids,A,1)}),children:"\u4E0B\u79FB\u8BC1\u636E"})]},N)})})]},y.id)),(0,De.jsx)("button",{type:"button",className:"dshr-btn",onClick:()=>g(y=>[...y,{id:crypto.randomUUID(),name:"",ids:[]}]),children:"\u65B0\u5EFA\u5206\u7EC4"}),e.length&&a.groups.length?(0,De.jsxs)("fieldset",{children:[(0,De.jsx)("legend",{children:"\u8BC1\u636E\u5F52\u7EC4"}),e.map(y=>(0,De.jsxs)("label",{"data-topic-record":y.id,children:[Tn(y,r.get(y.bookId)).title," \xB7 ",y.quote.slice(0,65),(0,De.jsxs)("select",{value:p.get(y.id)||"",onChange:k=>m(y.id,k.target.value),children:[(0,De.jsx)("option",{value:"",children:"\u672A\u5206\u7EC4"}),a.groups.map((k,N)=>(0,De.jsx)("option",{value:k.id,children:k.name||"\u5206\u7EC4 "+(N+1)},k.id))]})]},y.id))]}):null,s?(0,De.jsx)("p",{role:"alert",children:s}):null,(0,De.jsxs)("div",{className:"dshr-modal__actions",children:[(0,De.jsx)("button",{type:"button",className:"dshr-btn",onClick:o,disabled:c,children:"\u53D6\u6D88\u7F16\u8F91\u4E13\u9898"}),(0,De.jsx)("button",{type:"submit",className:"dshr-btn dshr-btn--primary",disabled:c,children:"\u4FDD\u5B58\u4E13\u9898"})]})]})}var W=require("react/jsx-runtime");function Mu({title:t,close:e,children:r}){return zt.default.useEffect(()=>{let n=o=>{o.key==="Escape"&&(o.preventDefault(),e())};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[e]),(0,W.jsx)("div",{className:"dshr-modal-mask",onMouseDown:n=>{n.target===n.currentTarget&&e()},children:(0,W.jsxs)("div",{className:"dshr-modal dshr-evidence-dialog",role:"dialog","aria-modal":"true","aria-label":t,children:[(0,W.jsx)("h3",{children:t}),r]})})}function Pu({evidence:t}){let{draft:e,busy:r,problem:n}=t,[o,a]=zt.default.useState(e.note),[i,s]=zt.default.useState(e.translation?"0":""),[l,c]=zt.default.useState(""),h=zt.default.useRef(!1);zt.default.useEffect(()=>{let u=!0;return e.printLabelRequest?.then(g=>{u&&!h.current&&c(g.slice(0,80))}),()=>{u=!1}},[e.printLabelRequest]);let p=i===""?null:e.options[Number(i)];return(0,W.jsxs)(Mu,{title:e.old?"\u786E\u8BA4\u91CD\u65B0\u5173\u8054\u8BC1\u636E":"\u4FDD\u5B58\u8BC1\u636E",close:t.closeDraft,children:[(0,W.jsxs)("p",{children:[e.source.title," \xB7 PDF \u7B2C ",e.source.anchor.page," \u9875"]}),e.old?(0,W.jsx)("p",{children:"\u672C\u6B21\u4F1A\u7528\u65B0\u9009\u533A\u66F4\u65B0\u8BC1\u636E\u539F\u6587\u548C\u51FA\u5904\u3002"}):null,(0,W.jsx)("blockquote",{children:e.source.quote}),(0,W.jsxs)("label",{children:["\u5370\u5237\u9875\u6807\uFF08\u53EF\u9009\uFF09",(0,W.jsx)("input",{value:l,maxLength:80,placeholder:"\u672A\u63D0\u4F9B",onChange:u=>{h.current=!0,c(u.target.value)}})]}),(0,W.jsxs)("label",{children:["\u5907\u6CE8\uFF08\u53EF\u9009\uFF09",(0,W.jsx)("textarea",{value:o,maxLength:2e4,onChange:u=>a(u.target.value)})]}),e.options.length?(0,W.jsxs)("label",{children:["\u8BD1\u6587\u5FEB\u7167",(0,W.jsxs)("select",{value:i,onChange:u=>s(u.target.value),children:[(0,W.jsx)("option",{value:"",children:"\u6682\u4E0D\u9644\u8BD1\u6587"}),e.options.map((u,g)=>(0,W.jsx)("option",{value:g,children:Do[u.scope]},u.scope))]})]}):(0,W.jsx)("p",{children:"\u53EF\u5148\u4FDD\u5B58\u539F\u6587\uFF0C\u4E4B\u540E\u8865\u5145\u8BD1\u6587\u3002"}),p?(0,W.jsx)("blockquote",{children:p.text}):null,n?(0,W.jsx)("p",{role:"alert",children:n}):null,(0,W.jsxs)("div",{className:"dshr-modal__actions",children:[(0,W.jsx)("button",{type:"button",className:"dshr-btn",disabled:r,onClick:t.closeDraft,children:"\u53D6\u6D88"}),(0,W.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--primary",disabled:r,onClick:()=>t.saveDraft({note:o,translation:p,printLabel:l}),children:e.old?"\u786E\u8BA4\u66F4\u65B0\u51FA\u5904":"\u4FDD\u5B58\u8BC1\u636E"})]})]})}function Pg({record:t,evidence:e,book:r,collections:n,selected:o,onSelect:a,exportOne:i}){let s=!r,l=Tn(t,r),[c,h]=zt.default.useState(null),[p,u]=zt.default.useState(!1),g=zt.default.useRef(null),w=Sn(t.identity),m=s?"\u539F\u6587\u7F3A\u5931":w?"\u53D6\u8BC1\u7248\u672C\u5DF2\u8BB0\u5F55":t.identityError?"\u6838\u9A8C\u5931\u8D25":"\u6587\u4EF6\u8EAB\u4EFD\u5F85\u786E\u8BA4";function _(y){h(k=>({...k,...y}))}return(0,W.jsxs)("article",{className:"dshr-evidence-card","data-evidence-id":t.id,"data-evidence-state":m,children:[(0,W.jsxs)("strong",{children:[l.title," \xB7 ",l.page?`PDF \u7269\u7406\u9875 ${l.page}`:"PDF \u9875\u7801\u5F85\u786E\u8BA4"]}),(0,W.jsxs)("p",{children:["\u5370\u5237\u9875\u6807 ",l.printLabel||"\u672A\u63D0\u4F9B"," \xB7 \u4F5C\u8005 ",l.author||"\u672A\u63D0\u4F9B"," \xB7 \u5E74\u4EFD ",l.year||"\u672A\u63D0\u4F9B"," \xB7 DOI ",l.doi||"\u672A\u63D0\u4F9B"]}),(0,W.jsxs)("label",{className:"dshr-evidence-checkbox",children:[(0,W.jsx)("input",{type:"checkbox",checked:o,onChange:y=>a(t,y.target.checked)}),"\u9009\u5165\u5BFC\u51FA"]}),(0,W.jsxs)("p",{children:[m," \xB7 ",new Date(t.createdAt).toLocaleString()]}),(0,W.jsx)("blockquote",{children:t.quote}),t.translation?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)("strong",{children:Do[t.translation.scope]}),(0,W.jsx)("blockquote",{children:t.translation.text})]}):(0,W.jsx)("p",{children:"\u6682\u65E0\u8BD1\u6587\u5FEB\u7167"}),t.note?(0,W.jsx)("p",{className:"dshr-evidence-note",children:t.note}):null,t.identityError&&!w&&!s?(0,W.jsx)("p",{children:t.identityError}):null,(0,W.jsxs)("div",{className:"dshr-evidence-actions",children:[(0,W.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e.busy||s||!w,onClick:()=>e.jump(t),children:"\u56DE\u5230\u539F\u6587"}),!w&&!s?(0,W.jsx)("button",{type:"button",className:"dshr-btn",disabled:e.busy,onClick:()=>e.retry(t),children:"\u91CD\u8BD5\u6838\u9A8C"}):null,(0,W.jsx)("button",{type:"button",className:"dshr-btn",disabled:e.busy,onClick:()=>g.current.click(),children:"\u91CD\u65B0\u5173\u8054 PDF"}),(0,W.jsx)("input",{ref:g,hidden:!0,type:"file",accept:".pdf,application/pdf",onChange:y=>{let k=y.currentTarget.files[0];y.currentTarget.value="",k&&e.pickFile(t,k)}}),e.mismatch?.record.id===t.id?(0,W.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e.busy,onClick:e.reselect,children:"\u6253\u5F00\u8BE5\u7248\u672C\u91CD\u65B0\u9009\u533A"}):null,(0,W.jsx)("button",{type:"button",className:"dshr-btn",onClick:()=>i(t),children:"\u5BFC\u51FA\u8BC1\u636E"}),(0,W.jsx)("button",{type:"button",className:"dshr-btn",disabled:e.busy,onClick:()=>h({note:t.note||"",text:t.translation?.text||"",scope:t.translation?.scope||"selection",topicIds:t.topicIds||[],printLabel:t.printLabel||""}),children:"\u7F16\u8F91\u8BC1\u636E"}),(0,W.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--danger",disabled:e.busy,onClick:()=>u(!0),children:"\u5220\u9664\u8BC1\u636E"})]}),p?(0,W.jsxs)("div",{className:"dshr-evidence-actions",children:[(0,W.jsx)("p",{children:"\u8FD9\u4F1A\u5220\u9664\u8BC1\u636E\u5E76\u79FB\u9664\u76F8\u5173\u4E66\u5355\u4E2D\u7684\u5F15\u7528\u3002"}),(0,W.jsx)("button",{type:"button",className:"dshr-btn",onClick:()=>u(!1),children:"\u53D6\u6D88\u5220\u9664"}),(0,W.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--danger",disabled:e.busy,onClick:()=>{u(!1),e.remove(t)},children:"\u786E\u8BA4\u5220\u9664\u8BC1\u636E"})]}):null,c?(0,W.jsxs)("form",{onSubmit:y=>{y.preventDefault();let k=c.text.trim()?{scope:c.scope,text:c.text.trim(),source:c.scope==="selection"?t.quote:t.translation?.scope==="paragraph"?t.translation.source:""}:null;e.edit(t,{note:c.note,translation:k,topicIds:c.topicIds,printLabel:c.printLabel.trim()}),h(null)},children:[(0,W.jsxs)("label",{children:["\u7F16\u8F91\u5370\u5237\u9875\u6807",(0,W.jsx)("input",{value:c.printLabel,maxLength:80,placeholder:"\u672A\u63D0\u4F9B",onChange:y=>_({printLabel:y.target.value})})]}),(0,W.jsxs)("label",{children:["\u7F16\u8F91\u5907\u6CE8",(0,W.jsx)("textarea",{value:c.note,maxLength:2e4,onChange:y=>_({note:y.target.value})})]}),(0,W.jsxs)("label",{children:["\u5DF2\u6838\u5BF9\u7684\u8BD1\u6587",(0,W.jsx)("textarea",{value:c.text,maxLength:4e4,onChange:y=>_({text:y.target.value})})]}),(0,W.jsxs)("label",{children:["\u8BD1\u6587\u8986\u76D6\u8303\u56F4",(0,W.jsxs)("select",{value:c.scope,onChange:y=>_({scope:y.target.value}),children:[(0,W.jsx)("option",{value:"selection",children:Do.selection}),t.translation?.scope==="paragraph"?(0,W.jsx)("option",{value:"paragraph",children:Do.paragraph}):null]})]}),n.length?(0,W.jsxs)("fieldset",{children:[(0,W.jsx)("legend",{children:"\u4E66\u5355\u4E2D\u7684\u8BC1\u636E\u5F15\u7528"}),n.map(y=>(0,W.jsxs)("label",{className:"dshr-evidence-checkbox",children:[(0,W.jsx)("input",{type:"checkbox",checked:c.topicIds.includes(y.id),onChange:k=>_({topicIds:k.target.checked?[...c.topicIds,y.id]:c.topicIds.filter(N=>N!==y.id)})}),y.name]},y.id))]}):null,(0,W.jsxs)("div",{className:"dshr-modal__actions",children:[(0,W.jsx)("button",{type:"button",className:"dshr-btn",onClick:()=>h(null),children:"\u53D6\u6D88\u7F16\u8F91"}),(0,W.jsx)("button",{type:"submit",className:"dshr-btn dshr-btn--primary",disabled:e.busy,children:"\u786E\u8BA4\u4FDD\u5B58\u4FEE\u6539"})]})]}):null]})}function Ou({evidence:t,books:e,collections:r,saveResearch:n}){let[o,a]=zt.default.useState(t.panel.topicId||""),[i,s]=zt.default.useState(!1),[l,c]=zt.default.useState(""),[h,p]=zt.default.useState(!1),[u,g]=zt.default.useState(()=>new Set),[w,m]=zt.default.useState(null),[_,y]=zt.default.useState(""),[k,N]=zt.default.useState(0),A=t.panel.bookId,E=zt.default.useMemo(()=>new Map(e.map($=>[$.id,$])),[e]),T=r.find($=>$.id===o),M=zt.default.useMemo(()=>t.rows.filter($=>!o||$.topicIds?.includes(o)),[t.rows,o]),R=zt.default.useMemo(()=>{let $=new Map;for(let B of M)$.set(B.bookId,Tn(B,E.get(B.bookId)).title);return[...$].sort((B,ie)=>B[1].localeCompare(ie[1]))},[M,E]),v=l||(!T&&!i?A:""),O=v?M.filter($=>$.bookId===v):M,L=ai(O,T?.research?.groups),F=M.filter($=>u.has($.id)),U=40,J=Math.max(0,Math.ceil(O.length/U)-1),Y=Math.min(k,J),ae=0;function fe($){a($),c(""),N(0),g(new Set),y("")}function q($,B){g(ie=>{let ee=new Set(ie);return B?ee.add($.id):ee.delete($.id),ee})}function se($,B){y(""),m({sections:ai($,T?.research?.groups),topic:T,count:$.length,scopeName:B})}function de(){try{sl(il({...w,books:E}),w.topic?"\u4E13\u9898\u5BF9\u7167\u7B14\u8BB0.md":"\u9605\u8BFB\u8BC1\u636E.md"),m(null),y("\u5DF2\u5C06 Markdown \u4EA4\u7ED9\u6D4F\u89C8\u5668\u4FDD\u5B58\u3002")}catch($){y($?.message||"\u65E0\u6CD5\u4FDD\u5B58 Markdown\uFF0C\u8BF7\u91CD\u8BD5\u3002")}}function P($){try{sl(il({sections:ai([$]),books:E}),"\u8BC1\u636E-"+$.id+".md"),y("\u5DF2\u5C06 Markdown \u4EA4\u7ED9\u6D4F\u89C8\u5668\u4FDD\u5B58\u3002")}catch(B){y(B?.message||"\u65E0\u6CD5\u4FDD\u5B58 Markdown\uFF0C\u8BF7\u91CD\u8BD5\u3002")}}return(0,W.jsxs)(Mu,{title:"\u8BC1\u636E\u5E93",close:t.closePanel,children:[h&&T?(0,W.jsx)(Ru,{topic:T,rows:M,books:E,save:n,close:()=>p(!1)}):w?(0,W.jsxs)("section",{"aria-label":"Markdown \u5BFC\u51FA\u8303\u56F4",children:[(0,W.jsx)("h4",{children:"\u786E\u8BA4\u5BFC\u51FA\u8303\u56F4"}),(0,W.jsxs)("p",{children:[w.scopeName," \xB7 ",w.count," \u6761\u8BC1\u636E"]}),w.sections.filter($=>$.rows.length).map($=>(0,W.jsxs)("div",{children:[w.topic?(0,W.jsx)("strong",{children:$.name}):null,(0,W.jsx)("ol",{children:$.rows.map(B=>{let ie=Tn(B,E.get(B.bookId));return(0,W.jsxs)("li",{children:[ie.title," \xB7 PDF \u7269\u7406\u9875 ",ie.page||"\u5F85\u786E\u8BA4"]},B.id)})})]},$.id)),_?(0,W.jsx)("p",{role:"alert",children:_}):null,(0,W.jsxs)("div",{className:"dshr-evidence-actions",children:[(0,W.jsx)("button",{type:"button",className:"dshr-btn",onClick:()=>m(null),children:"\u53D6\u6D88\u5BFC\u51FA"}),(0,W.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:de,children:"\u786E\u8BA4\u5BFC\u51FA Markdown"})]})]}):(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)("div",{className:"dshr-evidence-actions",children:[A&&!T?(0,W.jsx)("button",{type:"button",className:"dshr-btn","aria-pressed":i,onClick:()=>{s($=>!$),N(0)},children:i?"\u67E5\u770B\u5F53\u524D\u8BBA\u6587":"\u67E5\u770B\u5168\u90E8\u8BC1\u636E"}):null,r.length?(0,W.jsxs)("label",{children:["\u6309\u4E66\u5355\u67E5\u770B",(0,W.jsxs)("select",{value:T?.id||"",onChange:$=>fe($.target.value),children:[(0,W.jsx)("option",{value:"",children:"\u6240\u6709\u4E66\u5355"}),r.map($=>(0,W.jsx)("option",{value:$.id,children:$.name},$.id))]})]}):null,T?(0,W.jsxs)("label",{children:["\u6309\u8BBA\u6587\u7B5B\u9009",(0,W.jsxs)("select",{value:l,onChange:$=>{c($.target.value),N(0)},children:[(0,W.jsx)("option",{value:"",children:"\u5168\u90E8\u8BBA\u6587"}),R.map(([$,B])=>(0,W.jsx)("option",{value:$,children:B},$))]})]}):null,(0,W.jsxs)("span",{role:"status",children:[O.length," \u6761\u8BC1\u636E"]})]}),T?(0,W.jsxs)("section",{className:"dshr-topic-summary",children:[(0,W.jsx)("h4",{children:T.name}),(0,W.jsxs)("p",{children:[(0,W.jsx)("strong",{children:"\u7814\u7A76\u95EE\u9898"})," ",T.research?.question||"\u672A\u586B\u5199"]}),(0,W.jsxs)("p",{children:[(0,W.jsx)("strong",{children:"\u4EBA\u5DE5\u7EFC\u5408"})," ",T.research?.synthesis||"\u672A\u586B\u5199"]}),(0,W.jsxs)("div",{className:"dshr-evidence-actions",children:[(0,W.jsx)("button",{type:"button",className:"dshr-btn",disabled:t.busy,onClick:()=>p(!0),children:"\u7F16\u8F91\u4E13\u9898"}),(0,W.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:t.busy||!M.length,onClick:()=>se(M,"\u6574\u4E13\u9898"),children:"\u5BFC\u51FA\u6574\u4E13\u9898"})]})]}):null,(0,W.jsxs)("div",{className:"dshr-evidence-actions",children:[(0,W.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:t.busy||!F.length,onClick:()=>se(F,"\u6240\u9009\u8BC1\u636E"),children:"\u5BFC\u51FA\u6240\u9009\u8BC1\u636E"}),F.length?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)("span",{children:["\u5DF2\u9009 ",F.length," \u6761"]}),(0,W.jsx)("button",{type:"button",className:"dshr-btn",onClick:()=>g(new Set),children:"\u6E05\u7A7A\u9009\u62E9"})]}):null]}),_?(0,W.jsx)("p",{role:"status",children:_}):null,t.problem?(0,W.jsx)("p",{role:"alert",children:t.problem}):null,O.length?L.map($=>{let B=Y*U,ie=$.rows.slice(Math.max(0,B-ae),Math.max(0,B+U-ae));return ae+=$.rows.length,ie.length?(0,W.jsxs)("section",{"data-evidence-group":$.name,children:[T?(0,W.jsx)("h4",{children:$.name}):null,$.comparison?(0,W.jsx)("p",{className:"dshr-evidence-note",children:$.comparison}):null,ie.map(ee=>(0,W.jsx)(Pg,{record:ee,evidence:t,collections:r,book:E.get(ee.bookId),exportOne:P,selected:u.has(ee.id),onSelect:q},ee.id))]},$.id):null}):(0,W.jsx)("p",{children:"\u5F53\u524D\u8303\u56F4\u6CA1\u6709\u8BC1\u636E\u3002\u53EF\u4ECE PDF \u4FDD\u5B58\u8BC1\u636E\uFF0C\u518D\u5C06\u5B83\u52A0\u5165\u4E66\u5355\u3002"}),J?(0,W.jsxs)("div",{className:"dshr-evidence-actions","aria-label":"\u8BC1\u636E\u5217\u8868\u5206\u9875",children:[(0,W.jsx)("button",{type:"button",className:"dshr-btn",disabled:Y===0,onClick:()=>N(Y-1),children:"\u4E0A\u4E00\u6279"}),(0,W.jsxs)("span",{children:[Y+1," / ",J+1]}),(0,W.jsx)("button",{type:"button",className:"dshr-btn",disabled:Y===J,onClick:()=>N(Y+1),children:"\u4E0B\u4E00\u6279"})]}):null]}),(0,W.jsx)("div",{className:"dshr-modal__actions",children:(0,W.jsx)("button",{type:"button",className:"dshr-btn",disabled:t.busy,onClick:t.closePanel,children:"\u5173\u95ED\u8BC1\u636E\u5E93"})})]})}var qr=Lt(require("react"),1);var ll=()=>crypto.randomUUID(),Og=({record:t,anchor:e,quote:r})=>({bookId:t.id,title:t.title,author:t.author,year:t.year||"",doi:t.doi||"",fileRevision:t.fileRevision??null,anchor:e,quote:r,sourceRevision:ll()});function Lu({currentRef:t,navigation:e,openBook:r,refreshBooks:n,showToast:o}){let[a,i]=qr.default.useState([]),[s,l]=qr.default.useState(null),[c,h]=qr.default.useState(null),[p,u]=qr.default.useState(null),[g,w]=qr.default.useState(!1),[m,_]=qr.default.useState(""),[y,k]=qr.default.useState(null),[N,A]=qr.default.useState(null),E=qr.default.useRef(!1),T=qr.default.useRef(0);async function M(){let P=++T.current,$=await li();P===T.current&&i($)}async function R(P){if(!E.current){E.current=!0,w(!0),_("");try{await P()}catch($){_($?.message||"\u8BC1\u636E\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002")}finally{E.current=!1,w(!1)}}}function v(P="",$=""){l({bookId:P,topicId:$}),k(null),R(M)}async function O(P,$){let B=await ni($);await Eo(P.id,{identity:B,identityError:""},P.sourceRevision),await M()}function L(P,$){let B=t.current;if(B?.kind!=="pdf"||!P.evidenceAnchor)return;let ie=N?.blob===B.data?N.record:null,ee=[$?.status==="done"&&$.zh?.trim()?{scope:"selection",text:$.zh,source:P.text}:null,P.paragraphTranslation].filter(Boolean);_(""),h({id:ie?.id||ll(),old:ie,blob:B.data,source:Og({record:B.record,anchor:P.evidenceAnchor,quote:P.text}),options:ee,note:ie?.note||"",translation:ee[0]||null,printLabelRequest:P.printLabelRequest})}function F({note:P,translation:$,printLabel:B}){c&&R(async()=>{let{old:ie,blob:ee,source:Ie,id:Xe}=c,Re={...Ie,note:P,translation:$,printLabel:B.trim().slice(0,80),identity:null,identityError:""},Fe=ie?await Eo(Xe,Re,ie.sourceRevision):{id:Xe,...Re,topicIds:[],createdAt:Date.now(),updatedAt:Date.now()};if(!Fe)throw new Error("\u8BC1\u636E\u6216\u539F\u6587\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u540E\u91CD\u8BD5\u3002");ie||await Fc(Fe),h(null),A(null),l({bookId:Ie.bookId}),++T.current,i(Pe=>[Fe,...Pe.filter(Te=>Te.id!==Fe.id)]),o("\u8BC1\u636E\u5DF2\u4FDD\u5B58\u3002"),O(Fe,ee).catch(async Pe=>{try{await Eo(Xe,{identityError:Pe?.message||"\u6587\u4EF6\u6838\u9A8C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002"},Ie.sourceRevision),await M()}catch{}})})}async function U(P){let $=await aa(P.bookId);if(!$?.blob)throw new Error("\u539F\u6587\u7F3A\u5931\u3002\u8BF7\u9009\u62E9 PDF \u91CD\u65B0\u5173\u8054\u3002");if($.format!=="pdf")throw new Error("\u5F53\u524D\u5173\u8054\u4E0D\u662F PDF\uFF0C\u8BF7\u91CD\u65B0\u5173\u8054\u3002");return $}function J(P){R(async()=>{let $=await U(P);if(($.fileRevision??null)!==P.fileRevision)throw new Error("\u53D6\u8BC1\u65F6\u7684\u7248\u672C\u5C1A\u672A\u786E\u8BA4\uFF0C\u5F53\u524D\u6587\u4EF6\u5DF2\u66F4\u65B0\u3002\u8BF7\u9009\u62E9\u6587\u4EF6\u540E\u91CD\u65B0\u9009\u533A\u3002");await O(P,$.blob)})}function Y(P){if(E.current)return;let $=++e.current;u(null),R(async()=>{if(!Sn(P.identity))throw new Error("\u6587\u4EF6\u8EAB\u4EFD\u5F85\u786E\u8BA4\uFF0C\u6838\u9A8C\u5B8C\u6210\u540E\u53EF\u5B9A\u4F4D\u3002");let B=await U(P),ie=t.current,ee=ie?.kind==="pdf"&&ie.record.id===B.id&&ie.record.fileRevision===B.fileRevision?ie.data:B.blob,Ie=await ni(ee);if($===e.current){if(!ms(P.identity,Ie))throw new Error("\u6587\u4EF6\u7248\u672C\u4E0D\u4E00\u81F4\u3002\u8BF7\u9009\u62E9\u6B63\u786E\u539F\u6587\uFF0C\u6216\u91CD\u65B0\u9009\u533A\u786E\u8BA4\u51FA\u5904\u3002");ee!==t.current?.data&&!await r(B,{verifiedRecord:B,token:$})||$===e.current&&(l(null),u({token:$,blob:ee,anchor:P.anchor,quote:P.quote}))}})}function ae(P,$){P===e.current&&($==="exact"&&o("\u5DF2\u7CBE\u786E\u5B9A\u4F4D\u539F\u6587\u3002"),$==="page"&&o("\u4EC5\u5B9A\u4F4D\u5230 PDF \u9875\u3002\u8BF7\u6838\u5BF9\u539F\u6587\u540E\u91CD\u65B0\u9009\u533A\u3002",4500),$==="unavailable"&&o("\u65E0\u6CD5\u786E\u8BA4\u6709\u6548\u9875\u7801\uFF0C\u8BF7\u91CD\u65B0\u6838\u5BF9\u539F\u6587\u3002",4500))}function fe(P,$){R(async()=>{if(k(null),!/\.pdf$/i.test($.name)||!(await $.slice(0,1024).text()).includes("%PDF-"))throw new Error("\u8BF7\u9009\u62E9\u6709\u6548\u7684 PDF \u6587\u4EF6\u3002");let B=await ni($);if(!ms(P.identity,B)){k({record:P,file:$,identity:B}),_(Sn(P.identity)?"\u6240\u9009\u6587\u4EF6\u4E0E\u53D6\u8BC1\u7248\u672C\u4E0D\u540C\u3002\u53EF\u6362\u4E00\u4E2A\u6587\u4EF6\uFF0C\u6216\u6253\u5F00\u8BE5\u7248\u672C\u91CD\u65B0\u9009\u62E9\u539F\u6587\u3002":"\u539F\u7248\u672C\u5F85\u786E\u8BA4\u3002\u82E5\u65E0\u6CD5\u6838\u9A8C\u539F\u6587\u4EF6\uFF0C\u8BF7\u5728\u6240\u9009 PDF \u91CD\u65B0\u9009\u62E9\u539F\u6587\u3002");return}let ie=await ia($,{fingerprint:B});if(!await Eo(P.id,{bookId:ie.id,fileRevision:ie.fileRevision,sourceRevision:ll(),identityError:""},P.sourceRevision))throw new Error("\u8BC1\u636E\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u540E\u91CD\u8BD5\u3002");l({bookId:ie.id}),await n(),await M(),o("\u5DF2\u786E\u8BA4\u540C\u4E00\u6587\u4EF6\u5E76\u91CD\u65B0\u5173\u8054\u3002")})}function q(){if(!y||E.current)return;let P=++e.current;R(async()=>{let{record:$,file:B,identity:ie}=y,ee=await ia(B,{fingerprint:ie});P!==e.current||!await r(ee,{verifiedRecord:ee,token:P})||(A({record:$,blob:ee.blob}),k(null),l(null),o("\u8BF7\u9009\u62E9\u8BE5\u7248\u672C\u7684\u5BF9\u5E94\u539F\u6587\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u91CD\u65B0\u5173\u8054\u6B64\u9009\u533A\u300D\u3002",5e3))})}function se(P,$){R(async()=>{if(!await Eo(P.id,$,P.sourceRevision))throw new Error("\u8BC1\u636E\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u540E\u91CD\u8BD5\u3002");await Promise.all([M(),$.topicIds?n():void 0]),o("\u8BC1\u636E\u5DF2\u66F4\u65B0\u3002")})}function de(P){R(async()=>{await zc(P.id),await Promise.all([M(),n()]),o("\u8BC1\u636E\u5DF2\u5220\u9664\uFF0C\u76F8\u5173\u4E66\u5355\u5F15\u7528\u5DF2\u79FB\u9664\u3002")})}return{rows:a,panel:s,draft:c,focus:p,busy:g,problem:m,mismatch:y,replacement:N,refresh:M,show:v,retry:J,jump:Y,located:ae,createDraft:L,saveDraft:F,pickFile:fe,reselect:q,edit:se,remove:de,closePanel:()=>{E.current||(l(null),k(null),_(""))},closeDraft:()=>{E.current||(h(null),_(""))}}}var ip=360,sp=520;function lp(t){try{return t.toDataURL("image/jpeg",.84)}catch{return""}}function d0(t){let e=Number(t.naturalWidth||t.width)||0,r=Number(t.naturalHeight||t.height)||0;if(!e||!r)return"";let n=Math.min(ip/e,sp/r,1),o=document.createElement("canvas");o.width=Math.max(1,Math.round(e*n)),o.height=Math.max(1,Math.round(r*n));let a=o.getContext("2d");return a.fillStyle="#fbf7ee",a.fillRect(0,0,o.width,o.height),a.drawImage(t,0,0,o.width,o.height),lp(o)}function u0(t){return new Promise(e=>{let r=new Image;r.decoding="async",r.onload=()=>e(r),r.onerror=()=>e(null),r.src=t})}async function h0(t){if(!t||!String(t.type||"").startsWith("image/"))return"";let e=URL.createObjectURL(t);try{let r=await u0(e);return r?d0(r):""}finally{URL.revokeObjectURL(e)}}async function p0(t,e){let r=await ki(t,{signal:e}),n,o,a=()=>{o?.cancel(),r.close()};e?.addEventListener("abort",a,{once:!0});try{if(e?.aborted)throw an();let i=await r.pdf.getPage(1);if(e?.aborted)throw an();let s=i.getViewport({scale:1}),l=Math.min(ip/s.width,sp/s.height,1.5),c=i.getViewport({scale:l});if(n=document.createElement("canvas"),n.width=Math.max(1,Math.round(c.width)),n.height=Math.max(1,Math.round(c.height)),o=i.render({canvas:n,viewport:c,background:"#ffffff"}),o.onContinue=h=>setTimeout(()=>{e?.aborted?o.cancel():h()},16),await o.promise,e?.aborted)throw an();return lp(n)}finally{e?.removeEventListener("abort",a),await r.close(),n&&(n.width=0,n.height=0)}}async function cp(t,{signal:e}={}){if(e?.aborted)throw an();if(!t?.blob)return{};let r=String(t.format||"").toLowerCase();try{if(r==="pdf"){let n=await p0(t.blob,e);return n?{cover:n}:{}}if(["epub","mobi","azw","azw3"].includes(r)){let{parseBook:n}=await Promise.resolve().then(()=>(Yl(),Kl)),o=/\.[a-z0-9]+$/iu.test(t.title||"")?t.title:`${t.title||"book"}.${r}`,a=await n(t.blob,{fileName:o,mime:t.blob.type});try{let i="";if(a.cover)try{let s=await fetch(a.cover);i=await h0(await s.blob())}catch{i=""}return{...i?{cover:i}:{},...a.title?{title:a.title}:{},...a.author?{author:a.author}:{},...a.language?{language:a.language}:{}}}finally{a.dispose?.()}}}catch(n){if(e?.aborted)throw an();console.warn("[dsh-reader] cover generation failed",t.title,n)}return{}}var Z=require("react/jsx-runtime"),os="dsh-reader:last-book:v1",Zl="dsh-reader:session-book:v1",dp=44;function up(t){let e=/^#?([0-9a-f]{6})$/iu.exec(String(t||"").trim());if(!e)return null;let r=e[1];return{r:parseInt(r.slice(0,2),16),g:parseInt(r.slice(2,4),16),b:parseInt(r.slice(4,6),16)}}function f0(t,e,r){let n=up(t),o=up(e);if(!n||!o)return e;let a=Math.max(0,Math.min(1,r));return`#${Go(n.r*a+o.r*(1-a)).slice(1)}${Go(n.g*a+o.g*(1-a)).slice(1)}${Go(n.b*a+o.b*(1-a)).slice(1)}`}function Go(t){return`#${Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0")}`}function g0(t){let e=document.createElement("canvas");e.width=32,e.height=32;let r=e.getContext("2d",{willReadFrequently:!0});if(!r)return"";r.drawImage(t,0,0,e.width,e.height);let n;try{n=r.getImageData(0,0,e.width,e.height).data}catch{return""}let o=new Map;for(let i=0;i<n.length;i+=4){let s=n[i+3];if(s<40)continue;let l=n[i],c=n[i+1],h=n[i+2],p=`${l>>5}:${c>>5}:${h>>5}`,u=o.get(p);u||(u={count:0,r:0,g:0,b:0},o.set(p,u)),u.count+=s,u.r+=l*s,u.g+=c*s,u.b+=h*s}let a=null;for(let i of o.values())(!a||i.count>a.count)&&(a=i);return a?Go(a.r/a.count)+Go(a.g/a.count).slice(1)+Go(a.b/a.count).slice(1):""}function m0(t,e,r){return Math.max(e,Math.min(r,t))}var Ql=class extends V.default.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,r){console.error("[dsh-reader]",e,r)}reset=()=>this.setState({error:null});render(){return this.state.error?(0,Z.jsx)("div",{className:"dshr-root",children:(0,Z.jsxs)("div",{className:"dshr-error-panel",children:[(0,Z.jsx)("h3",{children:"\u9605\u8BFB\u5668\u9047\u5230\u4E86\u4E00\u4E2A\u95EE\u9898"}),(0,Z.jsxs)("p",{children:[this.state.error?.message||"\u672A\u77E5\u9519\u8BEF","\u3002\u8FD9\u901A\u5E38\u662F\u6587\u6863\u683C\u5F0F\u6216\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u91CD\u65B0\u6253\u5F00\u6587\u6863\u901A\u5E38\u53EF\u4EE5\u6062\u590D\u3002"]}),(0,Z.jsx)("div",{style:{display:"flex",gap:8,marginTop:14},children:(0,Z.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:()=>{this.reset(),this.props.onReset?.()},children:"\u8FD4\u56DE\u4E66\u67B6"})})]})}):this.props.children}};function b0(){let[t,e]=V.default.useState(""),r=V.default.useRef(0),n=V.default.useCallback((o,a=2800)=>{window.clearTimeout(r.current),e(String(o)),r.current=window.setTimeout(()=>e(""),a)},[]);return V.default.useEffect(()=>()=>window.clearTimeout(r.current),[]),[t,n]}function hp(){let[t,e]=V.default.useState([]),[r,n]=V.default.useState([]),[o,a]=V.default.useState(null),i=V.default.useRef(0),[s,l]=V.default.useState(!0),[c,h]=V.default.useState(!1),[p,u]=V.default.useState(!1),[g,w]=V.default.useState("all"),[m,_]=V.default.useState(null),[y,k]=V.default.useState(!1),[N,A]=V.default.useState(""),[E,T]=V.default.useState(Zc),[M,R]=V.default.useState(!1),[v,O]=V.default.useState(!1),[L,F]=V.default.useState(!1),[U,J]=V.default.useState(!1),[Y,ae]=V.default.useState(!1),[fe,q]=V.default.useState(!1),se=V.default.useRef(null),[de,P]=V.default.useState(null),[$,B]=b0(),[{index:ie,entry:ee},Ie]=V.default.useState({index:0,entry:null}),[Xe,Re]=V.default.useState({}),[Fe,Pe]=V.default.useState(!0),[Te,f]=V.default.useState(!1),[d,S]=V.default.useState(null),[b,re]=V.default.useState(null),[ne,ue]=V.default.useState(null),[ge,ke]=V.default.useState([]),[$e,Ee]=V.default.useState(!1),[dt,tt]=V.default.useState(null),[rt,Ve]=V.default.useState(!1),[je,he]=V.default.useState(null),[xt,vt]=V.default.useState(null),[yt,Rt]=V.default.useState(null),[Mt,Ge]=V.default.useState(""),[Xt,Yt]=V.default.useState(0),[hr,le]=V.default.useState(""),[ye,we]=V.default.useState(!1),[Qe,nt]=V.default.useState(0),_r=V.default.useRef(null),Bt=V.default.useRef({timer:0,latest:null}),Yr=V.default.useRef({token:0,controller:null}),He=V.default.useRef(null),Pt=V.default.useRef(0),$t=V.default.useRef(E),Sr=V.default.useRef(t),ze=V.default.useRef({running:!1,attempted:new Set}),bn=V.default.useRef(!1),[xn,Zr]=V.default.useState(null);He.current=m,$t.current=E,Sr.current=t;let Ot=V.default.useCallback(()=>{Yr.current.token+=1,Yr.current.controller?.abort()},[]);V.default.useLayoutEffect(()=>()=>Ot(),[m?.record?.id,b,Ot]);let mr=`${E.fontSize}:${E.lineHeight}:${E.fontFamily}:${E.fontWeight}:${E.tocWidth}:${E.contentWidth}:${Mt?"img":"plain"}:${Qe}`,vn=V.default.useMemo(()=>Di(E,Mt),[E,Mt]),Qr=V.default.useMemo(()=>{let C=vn["--dshr-reader-bg"]||E.customBackground||"#fbf7ee",z=hr&&Mt?f0(hr,C,Number(E.backgroundImageOpacity)||0):C;return{"--dshr-immersive-surface":z,"--dshr-immersive-ink":Li(z).ink}},[hr,Mt,vn,E.customBackground,E.backgroundImageOpacity]),Ct=V.default.useCallback(async()=>{let C=++i.current;try{let[z,Q]=await Promise.all([_s(),Rc()]);e(z),C===i.current&&n(Q)}catch(z){B(z?.message||"\u8BFB\u53D6\u4E66\u67B6\u5931\u8D25\u3002")}finally{l(!1)}},[B]),Wn=V.default.useCallback(C=>{i.current+=1,n(C)},[]),It=V.default.useCallback(async C=>{if(!C){ke([]);return}try{ke(await jc(C))}catch(z){console.warn("[dsh-reader] annotations unavailable",z),ke([])}},[]);V.default.useEffect(()=>{Ct()},[Ct]),V.default.useEffect(()=>{if(s||m)return;let C=Sr.current.filter(pe=>!pe.cover&&["pdf","epub","mobi","azw","azw3"].includes(pe.format)&&!ze.current.attempted.has(pe.id));if(C.length===0)return;let z=ze.current,Q=new AbortController;z.controller=Q,z.running=!0;let Oe=setTimeout(()=>{(async()=>{for(let pe of C){if(Q.signal.aborted)break;if(!z.attempted.has(pe.id))try{let Tt=await aa(pe.id);if(!Tt||Q.signal.aborted)continue;let ft=await cp(Tt,{signal:Q.signal});if(Q.signal.aborted)break;if(z.attempted.add(pe.id),ft.cover||ft.title||ft.author||ft.language){let kt=await To(Tt.id,ft,{preserveCitation:!0});kt&&e(Jt=>Jt.map(ot=>ot.id===Tt.id?{...ot,title:kt.title,author:kt.author,cover:kt.cover,language:kt.language}:ot))}}catch(Tt){if(Q.signal.aborted)break;z.attempted.add(pe.id),console.warn("[dsh-reader] cover generation failed",pe.title,Tt)}}})().finally(()=>{z.controller===Q&&(z.running=!1)})},500);return()=>{clearTimeout(Oe),Q.abort()}},[s,m]),V.default.useEffect(()=>{Qc(E)},[E]),V.default.useEffect(()=>{if(!m||E.readingMode==="book")return;let C=z=>{if(z.defaultPrevented||z.repeat||z.ctrlKey||z.metaKey||z.altKey||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(z.key)||z.target instanceof Element&&z.target.closest('input, textarea, select, [contenteditable="true"], .dshr-topbar--pdf, .dshr-immersive-controls, .dshr-modal-mask, .dshr-appearance-panel, .dshr-anno-panel, .dshr-ai, .dshr-selection, .dshr-anno-composer, .dshr-pdf-translation-panel'))return;let Q=window.getSelection?.();if(Q&&!Q.isCollapsed)return;let Oe=document.querySelector(".dshr-root .dshr-content")||document.querySelector(".dshr-root .dshr-pdf-scroll");if(!Oe)return;z.preventDefault();let pe=Math.max(160,Math.round(Oe.clientHeight*.82)),Tt=z.key==="ArrowRight"||z.key==="ArrowDown";Oe.scrollBy({top:Tt?pe:-pe,behavior:"smooth"})};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[m,E.readingMode]),V.default.useEffect(()=>{if(!Mt){le("");return}let C=!1,z=new Image;return z.onload=()=>{C||le(g0(z))},z.onerror=()=>{C||le("")},z.src=Mt,()=>{C=!0}},[Mt]),V.default.useEffect(()=>{let C=!1,z="";if(!E.backgroundImageKey){Ge("");return}return(async()=>{try{let Q=await Kc();if(!Q||C)return;z=URL.createObjectURL(Q),Ge(z)}catch{C||Ge("")}})(),()=>{C=!0,z&&URL.revokeObjectURL(z)}},[E.backgroundImageKey,Xt]),V.default.useEffect(()=>{if(!b)return;let C=Q=>{Q?.type==="scroll"&&Q.target instanceof Element&&Q.target.closest(".dshr-pdf-translation-panel")||re(null)},z=Q=>{Q.key==="Escape"&&re(null)};return window.addEventListener("resize",C),window.addEventListener("keydown",z),document.addEventListener("scroll",C,!0),()=>{window.removeEventListener("resize",C),window.removeEventListener("keydown",z),document.removeEventListener("scroll",C,!0)}},[b]);let pr=V.default.useCallback(async()=>{let C=Bt.current.latest;if(C){Bt.current.latest=null;try{await Ss(C.id,C.progress),e(z=>z.map(Q=>Q.id===C.id?{...Q,progress:C.progress,lastOpenedAt:Date.now()}:Q))}catch{}}},[Ct]),zr=V.default.useCallback((C,z)=>{C&&(Re(z),Bt.current.latest={id:C,progress:z},!Bt.current.timer&&(Bt.current.timer=window.setTimeout(()=>{Bt.current.timer=0,pr()},700)))},[pr]);V.default.useEffect(()=>()=>{window.clearTimeout(Bt.current.timer),pr()},[pr]);let xo=V.default.useCallback(async()=>{u(!0);try{let C=await Ic();await Ct();let z=[`\u6587\u732E ${C.counts.paper||0}`,`\u4E66\u7C4D ${C.counts.book||0}`];C.counts.document&&z.push(`\u6587\u6863 ${C.counts.document}`),B(C.changed>0?`\u4E66\u5355\u5DF2\u6574\u7406\uFF1A${z.join(" \xB7 ")}`:`\u4E66\u5355\u5DF2\u662F\u6700\u65B0\uFF1A${z.join(" \xB7 ")}`)}catch(C){B(C?.message||"\u81EA\u52A8\u6574\u7406\u5931\u8D25\u3002")}finally{u(!1)}},[Ct,B]),vo=V.default.useCallback(async(C,z)=>{let Q=["book","paper","document"],Oe=z||Q[(Q.indexOf(C.category||"document")+1)%Q.length];try{await Cc(C.id,Oe),await Ct(),B(`\u300A${C.title||"\u6587\u6863"}\u300B\u5DF2\u5F52\u5165\u300C${oa(Oe)}\u300D\u3002`)}catch(pe){B(pe?.message||"\u4FEE\u6539\u5206\u7C7B\u5931\u8D25\u3002")}},[Ct,B]),yo=V.default.useCallback(C=>{T(z=>({...z,...C})),nt(z=>z+1)},[]),xe=V.default.useCallback(()=>{_r.current?.click()},[]),I=V.default.useCallback(async C=>{if(C){if(!String(C.type||"").startsWith("image/")){B("\u8BF7\u9009\u62E9\u56FE\u7247\u6587\u4EF6\uFF08JPG / PNG / WebP\uFF09\u3002");return}we(!0);try{let z=C;try{let Q=await createImageBitmap(C),Oe=Math.min(1,2400/Math.max(Q.width,Q.height));if(Oe<1){let pe=document.createElement("canvas");pe.width=Math.round(Q.width*Oe),pe.height=Math.round(Q.height*Oe),pe.getContext("2d").drawImage(Q,0,0,pe.width,pe.height);let ft=await new Promise(kt=>pe.toBlob(kt,"image/jpeg",.86));ft&&(z=ft)}Q.close?.()}catch{}await Vc(z),T(Q=>({...Q,backgroundImageKey:"reader-background"})),Yt(Q=>Q+1),B("\u80CC\u666F\u56FE\u7247\u5DF2\u4FDD\u5B58\uFF0C\u53EF\u8C03\u6574\u900F\u660E\u5EA6\u548C\u6A21\u7CCA\u5EA6\u3002")}catch(z){B(z?.message||"\u80CC\u666F\u56FE\u7247\u4FDD\u5B58\u5931\u8D25\u3002")}finally{we(!1)}}},[B]),te=V.default.useCallback(async()=>{try{await Yc(),T(C=>({...C,backgroundImageKey:""})),Ge(""),B("\u5DF2\u79FB\u9664\u80CC\u666F\u56FE\u7247\u3002")}catch(C){B(C?.message||"\u79FB\u9664\u80CC\u666F\u56FE\u7247\u5931\u8D25\u3002")}},[B]),me=V.default.useCallback(async(C,z={})=>{if(z.rejected){B("\u6CA1\u6709\u53EF\u8BC6\u522B\u7684\u6587\u6863\u3002\u652F\u6301 PDF / EPUB / MOBI / TXT / Markdown / HTML\u3002");return}if(!C?.length)return;h(!0);let Q=[],Oe=[];for(let pe of C)try{let Tt=await ia(pe);Q.push(Tt)}catch(Tt){Oe.push(`${pe.name}: ${Tt?.message||"\u5BFC\u5165\u5931\u8D25"}`)}await Ct(),h(!1),Oe.length>0&&B(Oe[0],4200),Q.length>0&&(B(Q.length===1?"\u5DF2\u52A0\u5165\u4E66\u67B6\u3002":`\u5DF2\u52A0\u5165 ${Q.length} \u4EFD\u6587\u6863\u3002`),Qt(Q[0]))},[Ct,B]),at=V.default.useCallback(async C=>{F(!0);try{let z=await ld(C);O(!1),await me([z])}catch(z){B(z?.message||"\u5728\u7EBF\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u94FE\u63A5\u6216\u7A0D\u540E\u91CD\u8BD5\u3002",5200)}finally{F(!1)}},[me,B]),ut=V.default.useCallback(async()=>{if(ae(!1),document.fullscreenElement===se.current)try{await document.exitFullscreen()}catch{}},[]),it=V.default.useCallback(async()=>{if(Y){await ut();return}ae(!0),Pe(!1)},[Y,ut]),wt=V.default.useCallback(async()=>{try{document.fullscreenElement===se.current?await document.exitFullscreen():se.current?.requestFullscreen&&await se.current.requestFullscreen()}catch{B("\u6D4F\u89C8\u5668\u963B\u6B62\u4E86\u5168\u5C4F\uFF1B\u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528\u5F53\u524D\u7A97\u53E3\u7684\u6C89\u6D78\u6A21\u5F0F\u3002",3600)}},[B]);V.default.useEffect(()=>{let C=()=>{q(document.fullscreenElement===se.current)};return document.addEventListener("fullscreenchange",C),()=>document.removeEventListener("fullscreenchange",C)},[]),V.default.useEffect(()=>{!m&&Y&&ut()},[m,Y,ut]),V.default.useEffect(()=>{if(!Y||U)return;let C=z=>{z.key==="Escape"&&!z.defaultPrevented&&(z.preventDefault(),ut())};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[Y,U,ut]);let Ut=V.default.useCallback(()=>{Pt.current+=1,k(!1);try{localStorage.removeItem(os)}catch{}try{sessionStorage.removeItem(Zl)}catch{}Zr(null),Bt.current.timer&&(window.clearTimeout(Bt.current.timer),Bt.current.timer=0),pr(),f(!1),S(null),re(null),ue(null),ke([]),Ee(!1),Ve(!1),tt(null),he(null),vt(null),Rt(null);let C=He.current?.book;if(C?.dispose)try{C.dispose()}catch{}_(null),Re({}),Ie({index:0,entry:null})},[pr]),Qt=V.default.useCallback(async(C,{verifiedRecord:z,token:Q}={})=>{let Oe=Q??++Pt.current;if(Oe!==Pt.current)return!1;k(!0),A(`\u6B63\u5728\u6253\u5F00\u300A${C.title||"\u6587\u6863"}\u300B\u2026`);try{let pe=z??await aa(C.id);if(Oe!==Pt.current)return!1;if(!pe?.blob)throw new Error("\u4E66\u67B6\u4E2D\u627E\u4E0D\u5230\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u53EF\u80FD\u5DF2\u88AB\u6E05\u7406\u3002\u8BF7\u91CD\u65B0\u5BFC\u5165\u3002");Zr(null);try{localStorage.setItem(os,pe.id)}catch{}try{sessionStorage.setItem(Zl,pe.id)}catch{}if((pe.format||Dn(pe.title))==="pdf"){pe.blob.size>24*1024*1024&&A(`\u6B63\u5728\u6253\u5F00\u5927\u578B PDF\u300A${pe.title||C.title||"\u6587\u6863"}\u300B\u2026`);let Yo=pe.blob,Mn=pe.progress||{},ja={...pe,blob:null,blobName:pe.blob.name||""};return _({kind:"pdf",record:ja,data:Yo}),Re({page:Mn.page||1,pages:Mn.pages||0,percent:Mn.percent||0}),Ie({index:0,entry:null}),Pe(!1),Ee(!1),Rt(null),await It(pe.id),Oe===Pt.current&&k(!1),await Ss(pe.id),await Ct(),Oe===Pt.current}let{parseBook:ft}=await Promise.resolve().then(()=>(Yl(),Kl)),kt=await ft(pe.blob,{fileName:pe.title??C.title,mime:pe.blob.type});if(Oe!==Pt.current)return kt.dispose?.(),!1;let Jt={...pe,title:kt.title||pe.title,author:kt.author||pe.author,language:kt.language||pe.language};if((Jt.title!==pe.title||Jt.author!==pe.author||Jt.language!==pe.language)&&(await To(pe.id,{title:Jt.title,author:Jt.author,language:Jt.language}),await Ct()),Oe!==Pt.current)return kt.dispose?.(),!1;let ot=pe.progress||{},Vn=m0(Number(ot.chapter)||0,0,Math.max(0,kt.chapters.length-1));return _({kind:"flow",record:Jt,book:kt}),Ie({index:Vn,entry:{scrollRatio:Number(ot.scrollRatio)||0}}),Re({chapter:Vn,chapters:kt.chapters.length,percent:Number(ot.percent)||(kt.chapters.length?(Vn+1)/kt.chapters.length*100:0)}),Pe(!0),Ee(!1),vt(null),await It(pe.id),Oe!==Pt.current?!1:(k(!1),ed(kt.chapters.slice(0,3).map(Yo=>Yo.blocks.map(Mn=>Mn.text||"").join(" ")).join(" "))&&!$t.current.autoTranslate&&B("\u68C0\u6D4B\u5230\u5916\u6587\u5185\u5BB9\u3002\u9876\u90E8\u300C\u5B9E\u65F6\u7FFB\u8BD1\u300D\u53EF\u4EE5\u968F\u65F6\u5F00\u542F\u3002",4200),!0)}catch(pe){return Oe!==Pt.current||(k(!1),B(pe?.message||"\u6253\u5F00\u6587\u6863\u5931\u8D25\u3002",5e3)),!1}},[Ct,It,B]),At=Lu({currentRef:He,navigation:Pt,openBook:Qt,refreshBooks:Ct,showToast:B});async function ht(C,z){let Q=await Ac(C,z);e(Oe=>Oe.map(pe=>pe.id===C?{...pe,...Q}:pe)),B("\u8BBA\u6587\u51FA\u5904\u5DF2\u4FDD\u5B58\u3002")}async function jn(C,z){let Q=await Pc(C,z);Wn(Oe=>Oe.map(pe=>pe.id===Q.id?Q:pe)),B("\u4E13\u9898\u5DF2\u4FDD\u5B58\u3002")}V.default.useEffect(()=>{if(s||m||bn.current||Sr.current.length===0)return;bn.current=!0;let C="";try{C=localStorage.getItem(os)||""}catch{}if(!C){Zr(null);return}let z=Sr.current.find(pe=>pe.id===C);if(!z){Zr(null);try{localStorage.removeItem(os)}catch{}return}let Q=Number(z.size)>24*1024*1024||Number(z.progress?.pages)>300,Oe=!1;try{Oe=sessionStorage.getItem(Zl)===z.id}catch{}Zr(z),!(Q&&!Oe)&&Qt(z)},[s,m,Qt]),V.default.useEffect(()=>{let C=()=>{document.visibilityState==="hidden"&&pr()};return document.addEventListener("visibilitychange",C),()=>document.removeEventListener("visibilitychange",C)},[pr]);async function wo(C){if(C.format!=="pdf"){P(C);return}try{let z=(await li()).filter(Q=>Q.bookId===C.id).length;P({...C,evidenceCount:z})}catch(z){B(z?.message||"\u8BFB\u53D6\u8BC1\u636E\u5173\u8054\u5931\u8D25\u3002")}}let qo=V.default.useCallback(async(C=!1)=>{let z=de;if(z)try{He.current?.record?.id===z.id&&Ut(),await Dc(z.id,{deleteEvidence:C}),P(null),await Ct(),B("\u5DF2\u4ECE\u4E66\u67B6\u5220\u9664\u3002")}catch(Q){B(Q?.message||"\u5220\u9664\u5931\u8D25\u3002")}},[Ut,de,Ct,B]),Xo=V.default.useCallback(async()=>{try{Ut(),await Bc(),await Ct(),R(!1),B("\u4E66\u67B6\u5DF2\u6E05\u7A7A\u3002")}catch(C){B(C?.message||"\u6E05\u7A7A\u4E66\u67B6\u5931\u8D25\u3002")}},[Ut,Ct,B]),Jr=V.default.useCallback((C,z)=>{S({id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:String(C||"").slice(0,8e3),context:String(z||"").slice(0,1600)}),f(!0),Ee(!1),re(null),ue(null)},[]),Cn=V.default.useCallback((C,z="web")=>{let Q=String(C||"").trim().slice(0,500);if(!Q)return;let Oe=z==="scholar"?`https://scholar.google.com/scholar?q=${encodeURIComponent(Q)}`:`https://www.google.com/search?q=${encodeURIComponent(Q)}`;window.open(Oe,"_blank","noopener,noreferrer")||B("\u6D4F\u89C8\u5668\u62E6\u622A\u4E86\u65B0\u7A97\u53E3\u3002\u8BF7\u5141\u8BB8\u5F39\u51FA\u7A97\u53E3\uFF0C\u6216\u590D\u5236\u6587\u5B57\u540E\u624B\u52A8\u641C\u7D22\u3002")},[B]),ko=V.default.useCallback(async C=>{try{await navigator.clipboard.writeText(C),B("\u5DF2\u590D\u5236\u3002")}catch{B("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u3002")}},[B]),Fa=V.default.useCallback(C=>{if(Ot(),!C?.text?.trim()){re(null);return}re({...C,source:"flow"}),ue(null)},[Ot]),_o=V.default.useCallback(C=>{if(Ot(),!C?.text){re(null);return}re({...C,source:"pdf"}),ue(null)},[Ot]),za=V.default.useCallback(async C=>{let z=C?.text?.trim();if(!z)return;Ot();let Q=new AbortController,Oe=Yr.current.token,pe=m?.record?.id;Yr.current.controller=Q;let Tt=()=>!Q.signal.aborted&&Oe===Yr.current.token&&He.current?.record?.id===pe;ue({status:"loading"});try{let ft=await No([{id:"selection",text:z}],{context:C.context||"",title:m?.book?.title||m?.record?.title||"",signal:Q.signal});Tt()&&ue({status:"done",zh:ft.selection||""})}catch(ft){Tt()&&!Zn(ft)&&ue({status:"error",error:ft?.message||"\u7FFB\u8BD1\u5931\u8D25\u3002"})}},[m,Ot]),Vo=V.default.useCallback(C=>{let z=He.current?.record?.id;if(!z||!C?.text?.trim())return;let Q=He.current?.kind==="pdf";he(null),tt({bookId:z,kind:Q?"pdf":"flow",style:"highlight",color:"#f5d76e",width:9,note:"",quote:C.text.trim(),chapterId:Q?void 0:He.current?.book?.chapters?.[ie]?.id,chapterIndex:Q?void 0:ie,ranges:Q?void 0:C.ranges,page:Q?C.page:void 0,rects:Q?C.pageRects:void 0}),Ve(!0),re(null),ue(null)},[ie]),In=V.default.useCallback(C=>{C&&(he(C),tt({...C}),Ve(!0))},[]),Br=V.default.useCallback(C=>{let z=ge.find(Q=>Q.id===C);z&&In(z)},[ge,In]),Rn=V.default.useCallback(()=>{Ve(!1),tt(null),he(null)},[]),Gn=V.default.useCallback(async C=>{if(!(!C||!C.bookId))try{C.id?await qc(C.id,C):await Gc(C),await It(C.bookId),Rn(),nt(z=>z+1),B(C.note?.trim()?"\u6279\u6CE8\u5DF2\u4FDD\u5B58\u3002":"\u6807\u8BB0\u5DF2\u4FDD\u5B58\u3002")}catch(z){B(z?.message||"\u4FDD\u5B58\u6279\u6CE8\u5931\u8D25\u3002")}},[Rn,It,B]),Ba=V.default.useCallback(async C=>{if(C?.id)try{await Xc(C.id),await It(He.current?.record?.id),Rn(),nt(z=>z+1),B("\u6279\u6CE8\u5DF2\u5220\u9664\u3002")}catch(z){B(z?.message||"\u5220\u9664\u6279\u6CE8\u5931\u8D25\u3002")}},[Rn,It,B]),as=V.default.useCallback(C=>{if(!C)return;if(C.kind==="pdf"){Rt({id:C.id,page:C.page,token:Date.now()}),Ee(!1);return}let z=Number.isFinite(C.chapterIndex)?C.chapterIndex:0;Ie(Q=>Q.index===z?Q:{index:z,entry:{edge:"start"}}),vt({id:C.id,blockId:C.ranges?.[0]?.blockId,token:Date.now()}),Ee(!1)},[]),yn=V.default.useCallback((C,z={edge:"start"})=>{C===ie||C<0||C>=(m?.book?.chapters.length??0)||(vt(null),Ie({index:C,entry:z}))},[ie,m]),$a=V.default.useCallback((C,z)=>{C!==ee||m?.kind!=="flow"||(Ie(Q=>Q.entry===C?{index:Q.index,entry:null}:Q),zr(m.record.id,wi(ie,m.book.chapters.length,z)))},[ee,ie,m,zr]);function en(C){if(C.button!==0)return;C.preventDefault();let z=C.clientX,Q=Number($t.current.tocWidth)||260,Oe=document.body.style.cursor,pe=document.body.style.userSelect;document.body.style.cursor="col-resize",document.body.style.userSelect="none",document.body.classList.add("dshr-toc-resizing");let Tt=kt=>{let Jt=Math.max(180,Math.min(520,Math.round(Q+kt.clientX-z)));T(ot=>({...ot,tocWidth:Jt}))},ft=()=>{window.removeEventListener("pointermove",Tt),window.removeEventListener("pointerup",ft),window.removeEventListener("pointercancel",ft),document.body.style.cursor=Oe,document.body.style.userSelect=pe,document.body.classList.remove("dshr-toc-resizing")};window.addEventListener("pointermove",Tt),window.addEventListener("pointerup",ft),window.addEventListener("pointercancel",ft)}let qn=m?.book?.title||m?.record?.title||m?.record?.blob?.name||m?.record?.blobName||"",Ha=m?.book?.author||m?.record?.author||"",Xn=m?.kind==="flow"?`\u7B2C ${(ie||0)+1} / ${m.book.chapters.length} \u7AE0`:"",Ua=m?m.kind==="pdf"?Xe.pages>0?(Xe.page||1)/Xe.pages*100:0:(ie+1)/Math.max(1,m.book.chapters.length)*100:0;function Wa({iconTools:C,textTools:z}={}){let Q=m.kind==="pdf",Oe=(0,Z.jsxs)("div",{className:"dshr-topbar__mode",role:"group","aria-label":"\u7FFB\u4E66\u65B9\u5F0F",children:[(0,Z.jsx)("button",{type:"button",className:`dshr-topbar__mode-btn${E.readingMode!=="book"?" is-active":""}`,onClick:()=>T(ot=>({...ot,readingMode:"scroll"})),"aria-pressed":E.readingMode!=="book",title:"\u8FDE\u7EED\u6EDA\u52A8\u9605\u8BFB",children:(0,Z.jsx)("span",{children:"\u6EDA\u52A8"})}),(0,Z.jsx)("button",{type:"button",className:`dshr-topbar__mode-btn${E.readingMode==="book"?" is-active":""}`,onClick:()=>T(ot=>({...ot,readingMode:"book"})),"aria-pressed":E.readingMode==="book",title:"\u6A2A\u7248\u7EB8\u8D28\u4E66\u7FFB\u9875",children:(0,Z.jsx)("span",{children:"\u6A2A\u7248"})}),E.readingMode==="book"?(0,Z.jsx)("select",{className:"dshr-topbar__animation","aria-label":"\u7FFB\u9875\u52A8\u753B",value:E.bookAnimation||"slide",onChange:ot=>T(Vn=>({...Vn,bookAnimation:ot.target.value})),children:bu.map(ot=>(0,Z.jsx)("option",{value:ot.id,children:ot.label},ot.id))}):null]}),pe=(0,Z.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon",onClick:()=>{it()},title:"\u5207\u6362\u5230\u6C89\u6D78\u9605\u8BFB","aria-label":"\u8FDB\u5165\u6C89\u6D78\u6A21\u5F0F",children:(0,Z.jsx)(fs,{size:16})}),Tt=(0,Z.jsxs)("button",{type:"button",className:"dshr-switch",role:"switch","aria-checked":E.autoTranslate,onClick:()=>T(ot=>({...ot,autoTranslate:!ot.autoTranslate,...m.kind==="pdf"&&!ot.autoTranslate?{hideTranslations:!1}:{}})),title:"\u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1","aria-label":"\u5B9E\u65F6\u7FFB\u8BD1",children:[(0,Z.jsx)("span",{className:"dshr-switch__track"}),(0,Z.jsx)("span",{style:{whiteSpace:"nowrap"},children:"\u5B9E\u65F6\u7FFB\u8BD1"})]}),ft=(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${E.hideTranslations?"dshr-btn--outline":""}`,onClick:()=>T(ot=>({...ot,hideTranslations:!ot.hideTranslations})),title:E.hideTranslations?"\u663E\u793A\u4E2D\u6587\u8BD1\u6587":"\u53EA\u770B\u539F\u6587\uFF08\u9690\u85CF\u5DF2\u7FFB\u8BD1\u5185\u5BB9\uFF09","aria-label":E.hideTranslations?"\u663E\u793A\u4E2D\u6587\u8BD1\u6587":"\u53EA\u770B\u539F\u6587\uFF0C\u9690\u85CF\u8BD1\u6587","aria-pressed":E.hideTranslations,children:E.hideTranslations?(0,Z.jsx)(_c,{size:16}):(0,Z.jsx)(kc,{size:16})}),(0,Z.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon",onClick:()=>{J(!0),re(null)},title:"\u5B57\u4F53\u3001\u80CC\u666F\u4E0E\u7559\u767D","aria-label":"\u9605\u8BFB\u5916\u89C2",children:(0,Z.jsx)(ea,{size:16})}),(0,Z.jsxs)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${$e?"dshr-btn--outline":""}`,onClick:()=>{Ee(ot=>!ot),f(!1),re(null)},title:"\u6279\u6CE8\u4E0E\u4FBF\u7B7E","aria-label":`\u6279\u6CE8\u4E0E\u4FBF\u7B7E\uFF0C\u5171 ${ge.length} \u6761`,children:[(0,Z.jsx)(ti,{size:16}),ge.length>0?(0,Z.jsx)("span",{className:"dshr-count-badge",children:ge.length>99?"99+":ge.length}):null]})]}),kt=(0,Z.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary dshr-btn--sm",onClick:()=>Jr("",""),title:"\u6253\u5F00 AI \u9605\u8BFB\u52A9\u624B",children:[(0,Z.jsx)(Ln,{size:14})," AI"]}),Jt=(0,Z.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:()=>R(!0),title:"\u9605\u8BFB\u8BBE\u7F6E","aria-label":"\u9605\u8BFB\u8BBE\u7F6E",children:(0,Z.jsx)(Ya,{size:16})});return(0,Z.jsxs)("div",{className:`dshr-topbar${Q?" dshr-topbar--pdf":""}`,style:{position:"relative"},children:[(0,Z.jsx)("div",{className:"dshr-progress","aria-hidden":"true",children:(0,Z.jsx)("i",{style:{"--p":`${Math.min(100,Ua)}%`}})}),(0,Z.jsxs)("div",{className:"dshr-topbar__identity",children:[(0,Z.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:Ut,title:"\u8FD4\u56DE\u4E66\u67B6","aria-label":"\u8FD4\u56DE\u4E66\u67B6",children:(0,Z.jsx)(uc,{size:17})}),(0,Z.jsxs)("div",{className:"dshr-topbar__title",children:[(0,Z.jsx)("strong",{title:qn,children:qn}),(0,Z.jsx)("span",{children:[Ha,nn(m.record?.format),Xn].filter(Boolean).join(" \xB7 ")})]})]}),Q?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("div",{className:"dshr-topbar__tools dshr-topbar__icons",role:"group","aria-label":"\u9605\u8BFB\u5FEB\u6377\u64CD\u4F5C",children:[C,pe,ft,(0,Z.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon","aria-label":"\u8BC1\u636E\u5E93",title:"\u5F53\u524D\u8BBA\u6587\u7684\u8BC1\u636E",onClick:()=>At.show(m.record.id),children:(0,Z.jsx)(Qo,{size:16})}),Jt]}),(0,Z.jsxs)("div",{className:"dshr-topbar__tools dshr-topbar__labels",children:[z,Oe,Tt,kt]})]}):(0,Z.jsxs)("div",{className:"dshr-topbar__tools",children:[(0,Z.jsx)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${Fe?"dshr-btn--outline":""}`,onClick:()=>Pe(ot=>!ot),title:"\u76EE\u5F55","aria-label":"\u76EE\u5F55","aria-pressed":Fe,children:(0,Z.jsx)(ps,{size:16})}),Oe,pe,Tt,ft,kt,Jt]})]})}function Ko(C){let z=m.kind==="pdf";return(0,Z.jsxs)("div",{className:`dshr-immersive-controls${z?" dshr-immersive-controls--pdf":""}`,role:"group","aria-label":"\u6C89\u6D78\u9605\u8BFB\u63A7\u4EF6",style:z?void 0:{height:dp},children:[z?(0,Z.jsx)("span",{className:"dshr-immersive-title",title:qn,children:qn}):null,C,(0,Z.jsxs)("div",{className:"dshr-immersive-actions",children:[z?null:(0,Z.jsxs)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>Pe(Q=>!Q),title:Fe?"\u6536\u8D77\u76EE\u5F55":"\u6253\u5F00\u76EE\u5F55","aria-pressed":Fe,children:[(0,Z.jsx)(ps,{size:15})," \u76EE\u5F55"]}),(0,Z.jsxs)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>{J(!0),re(null)},title:"\u9605\u8BFB\u5916\u89C2","aria-label":"\u9605\u8BFB\u5916\u89C2","aria-haspopup":"dialog","aria-expanded":U,autoFocus:!0,children:[(0,Z.jsx)(ea,{size:15})," \u5916\u89C2"]}),(0,Z.jsxs)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>{wt()},title:fe?"\u9000\u51FA\u5168\u5C4F":"\u8FDB\u5165\u5168\u5C4F","aria-label":fe?"\u9000\u51FA\u5168\u5C4F":"\u8FDB\u5165\u5168\u5C4F","aria-pressed":fe,children:[fe?(0,Z.jsx)(yc,{size:15}):(0,Z.jsx)(fs,{size:15}),fe?"\u8FD8\u539F":"\u5168\u5C4F"]}),(0,Z.jsxs)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>{ut()},title:"\u9000\u51FA\u6C89\u6D78\u6A21\u5F0F\uFF08Esc\uFF09",children:[(0,Z.jsx)(Nr,{size:15})," \u9000\u51FA\u6C89\u6D78"]})]})]})}let wn=m?(0,Z.jsxs)(Z.Fragment,{children:[Te?(0,Z.jsx)(Qd,{open:Te,onClose:()=>f(!1),seed:d,onGoogle:Cn,onToast:B}):null,$e?(0,Z.jsx)(_u,{open:$e,annotations:ge,book:m.book||m.record,onClose:()=>Ee(!1),onOpenAnnotation:Br,onJump:as,onDelete:C=>{Ba(C)}}):null]}):null;return(0,Z.jsx)(Ql,{onReset:Ut,children:(0,Z.jsxs)("div",{ref:se,className:`dshr-root${Y?" is-immersive":""}`,style:{...vn,...Qr,"--dshr-font-size":`${E.fontSize}px`,"--dshr-line-height":String(E.lineHeight),"--dshr-toc-width":`${E.tocWidth}px`},"data-reader-background":E.backgroundPreset,"data-hide-translations":E.hideTranslations?"true":"false","data-reading-mode":E.readingMode||"scroll",children:[(0,Z.jsx)("input",{ref:_r,type:"file",accept:"image/*",className:"dshr-sr-only",tabIndex:-1,onChange:C=>{let z=C.target.files?.[0];C.target.value="",I(z)}}),m?(0,Z.jsxs)("div",{className:"dshr-reader",children:[!Y&&m.kind==="flow"?Wa():null,Y&&m.kind==="flow"?Ko():null,(0,Z.jsxs)("div",{className:"dshr-body",children:[m.kind==="flow"?(0,Z.jsxs)("aside",{className:`dshr-toc${Fe?"":" is-closed"}`,"aria-label":"\u76EE\u5F55",children:[(0,Z.jsxs)("div",{className:"dshr-toc__head",children:[(0,Z.jsx)("strong",{children:"\u76EE\u5F55"}),(0,Z.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost",onClick:()=>Pe(!1),"aria-label":"\u6536\u8D77\u76EE\u5F55",children:(0,Z.jsx)(Nr,{size:14})})]}),(0,Z.jsx)("div",{className:"dshr-toc__list",children:m.book.chapters.map((C,z)=>(0,Z.jsx)("button",{type:"button",className:`dshr-toc__item${z===ie?" is-active":""}`,onClick:()=>yn(z),title:C.title,children:C.title||`\u7B2C ${z+1} \u7AE0`},C.id||z))}),(0,Z.jsx)("div",{className:"dshr-toc__resizer",role:"separator","aria-orientation":"vertical","aria-label":"\u62D6\u52A8\u8C03\u6574\u76EE\u5F55\u5BBD\u5EA6",title:"\u62D6\u52A8\u8C03\u6574\u76EE\u5F55\u5BBD\u5EA6\uFF1B\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4",onPointerDown:en,onDoubleClick:()=>T(C=>({...C,tocWidth:260}))})]}):null,m.kind==="pdf"?(0,Z.jsx)(Yd,{data:m.data,documentId:m.record.id,fileName:qn,renderImmersiveToolbar:Y?Ko:void 0,renderTopbar:Y?void 0:Wa,sidePanels:wn,initialPage:m.record.progress?.page||1,autoTranslate:E.autoTranslate,hideTranslations:E.hideTranslations,paged:E.readingMode==="book",onHideTranslations:()=>T(C=>({...C,hideTranslations:!0})),annotations:ge,onOpenAnnotation:Br,focusAnnotation:yt,focusEvidence:At.focus?.blob===m.data&&At.focus?.token===Pt.current?At.focus:void 0,onEvidenceLocated:At.located,onReady:({pageCount:C})=>Re(z=>({...z,page:z.page||1,pages:C,percent:C>0?(z.page||1)/C*100:z.percent||0})),onPageChange:C=>{let z=Xe.pages||0,Q={...Xe,page:C,pages:z,percent:z>0?C/z*100:0};Re(Q),zr(m.record.id,Q)},onSelection:_o},m.record.id):(0,Z.jsx)(Td,{book:m.book,chapterIndex:ie,onChapterChange:yn,settings:E,chapterEntry:ee,onChapterEntered:$a,onSelection:Fa,onProgress:C=>{Re(C),zr(m.record.id,C)},annotations:ge,onOpenAnnotation:Br,focusAnnotation:xt,layoutVersion:mr}),m.kind==="flow"?wn:null]}),(0,Z.jsx)(hu,{enabled:E.readingMode==="book",animation:E.bookAnimation,bookMode:!0,bookFrame:m.kind==="flow",frameTop:Y?dp:52,frameLeft:m.kind==="flow"&&Fe?E.tocWidth:0,readerKey:`${m.record.id}:${m.kind}:${ie}`,canPrevChapter:m.kind==="flow"&&ie>0,canNextChapter:m.kind==="flow"&&ie<(m.book?.chapters?.length||1)-1,chapterEntry:ee,onChapterEntered:$a,onChapterTurn:(C,z)=>yn(ie+C,z)})]}):(0,Z.jsx)(od,{books:t,collections:r,onCollectionsChange:Wn,loading:s,resumeBook:xn,onResume:C=>{Qt(C)},importing:c,organizing:p,categoryFilter:g,onCategoryFilter:w,onAutoOrganize:()=>{xo()},onImport:me,onOpen:C=>{Qt(C)},onDelete:C=>{wo(C)},onCycleCategory:(C,z)=>{vo(C,z)},onSettings:()=>R(!0),onOnlineImport:()=>O(!0),onEvidence:C=>At.show("",C),onEditCitation:a}),y?(0,Z.jsx)("div",{className:"dshr-modal-mask",style:{background:"color-mix(in srgb, var(--dshr-bg) 76%, transparent)",backdropFilter:"blur(5px)"},children:(0,Z.jsxs)("div",{className:"dshr-loading",children:[(0,Z.jsx)("div",{className:"dshr-loading__ring"}),(0,Z.jsx)("span",{children:N})]})}):null,b&&!Te&&!rt&&!At.draft&&!At.panel?(0,Z.jsx)(Jd,{selection:b,translation:ne,onTranslate:C=>{za(C)},onAnnotate:Vo,onEvidence:b.source==="pdf"&&b.evidenceAnchor?()=>At.createDraft(b,ne):void 0,replacingEvidence:At.replacement?.blob===m?.data,onExplain:C=>Jr(C.text,C.context),onGoogle:Cn,onCopy:ko,onClose:()=>{re(null),ue(null)},onRetry:()=>{za(b)}}):null,(0,Z.jsx)(nu,{open:v,busy:L,onClose:()=>{L||O(!1)},onSubmit:C=>{at(C)}}),M?(0,Z.jsx)(eu,{settings:E,onChange:T,onClose:()=>R(!1),onOpenAppearance:()=>{R(!1),J(!0)},onClearLibrary:()=>{Xo()}}):null,U?(0,Z.jsx)(yu,{open:U,settings:E,backgroundImageUrl:Mt,onChange:yo,onPickBackgroundImage:xe,onClearBackgroundImage:()=>{te()},onClose:()=>J(!1)}):null,de?(0,Z.jsx)(tu,{book:de,onCancel:()=>P(null),onConfirm:C=>{qo(C)}}):null,o?(0,Z.jsx)(Iu,{book:o,close:()=>a(null),save:ht},o.id):null,At.panel?(0,Z.jsx)(Ou,{evidence:At,books:t,collections:r,saveResearch:jn}):null,At.draft?(0,Z.jsx)(Pu,{evidence:At},At.draft.id):null,rt&&dt?(0,Z.jsx)(Au,{open:rt,draft:dt,mode:je?"edit":"create",onClose:Rn,onSave:C=>{Gn(C)},onDelete:je?()=>{Ba(je)}:void 0}):null,(0,Z.jsx)(ru,{message:$})]})})}var pp=String.raw`
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
`;var fp=String.raw`
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
`;var bo=require("react/jsx-runtime"),x0="dsh-reader",v0=["slots","layout"],Jl="reader";function y0({size:t=18}){return(0,bo.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,bo.jsx)("path",{d:"M4 5.4A2.4 2.4 0 0 1 6.4 3H20v16.1H6.4A2.4 2.4 0 0 0 4 21.5V5.4Z",stroke:"currentColor",strokeWidth:"1.65",strokeLinejoin:"round"}),(0,bo.jsx)("path",{d:"M4 18.4a2.4 2.4 0 0 1 2.4-2.3H20",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round"}),(0,bo.jsx)("path",{d:"M8.2 7h7.6M8.2 10.2h4.6",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round"}),(0,bo.jsx)("circle",{cx:"17.2",cy:"18.6",r:"2.1",fill:"currentColor",opacity:".9"})]})}function w0(t){t.effect(()=>{let e=document.createElement("style");return e.dataset.dshReader="styles",e.textContent=`${pp}
${Vd}
${nl}
${fp}`,document.head.appendChild(e),()=>e.remove()},"dsh-reader: styles"),t.slots.inject("main",function*(){yield t.slots.register({name:"main",key:Jl},hp)}),t.slots.inject("sidebar.panellist",()=>t.slots.register({name:"sidebar.panellist",id:Jl,order:10,label:()=>"\u9605\u8BFB"},y0))}

return module.exports;
}});

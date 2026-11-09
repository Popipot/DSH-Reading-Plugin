window.__ModuleLoader__.load({ id: "dsh-reader", factory: (require) => {
var module = { exports: {} }; var exports = module.exports;
var Nu=Object.create;var fa=Object.defineProperty;var Cu=Object.getOwnPropertyDescriptor;var Iu=Object.getOwnPropertyNames;var Ru=Object.getPrototypeOf,Mu=Object.prototype.hasOwnProperty;var mr=(t,e,r)=>()=>{if(r)throw r[0];try{return t&&(e=t(t=0)),e}catch(n){throw r=[n],n}};var Ri=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}},kl=(t,e)=>{for(var r in e)fa(t,r,{get:e[r],enumerable:!0})},Tl=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Iu(e))!Mu.call(t,o)&&o!==r&&fa(t,o,{get:()=>e[o],enumerable:!(n=Cu(e,o))||n.enumerable});return t};var Mt=(t,e,r)=>(r=t!=null?Nu(Ru(t)):{},Tl(e||!t||!t.__esModule?fa(r,"default",{value:t,enumerable:!0}):r,t)),Pu=t=>Tl(fa({},"__esModule",{value:!0}),t);function Wf(t,e){return Wd(t,{i:2},e&&e.out,e&&e.dictionary)}function jd(t,e){return Wd(t.subarray(Uf(t,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}function qf(t,e){if(e){for(var r="",n=0;n<t.length;n+=16384)r+=String.fromCharCode.apply(null,t.subarray(n,n+16384));return r}else{if(Es)return Es.decode(t);var o=Gf(t),i=o.s,r=o.r;return r.length&&Zt(8),i}}function Gd(t,e){for(var r={},n=t.length-22;Sr(t,n)!=101010256;--n)(!n||t.length-n>65558)&&Zt(13);var o=Kr(t,n+8);if(!o)return{};var i=Sr(t,n+16),a=Sr(t,n-20)==117853008;if(a){var s=Sr(t,n-12);a=Sr(t,s)==101075792,a&&(o=Sr(t,s+32),i=Sr(t,s+48))}for(var l=e&&e.filter,d=0;d<o;++d){var f=Vf(t,i,a),g=f[0],u=f[1],p=f[2],_=f[3],N=f[4],y=f[5],P=Xf(t,y);i=N,(!l||l({name:_,size:u,originalSize:p,compression:g}))&&(g?g==8?r[_]=Wf(t.subarray(P,P+u),{out:new xr(p)}):Zt(14,"unknown compression type "+g):r[_]=As(t,P,P+u))}return r}var xr,po,Pf,Dd,Fd,Of,zd,Bd,$d,Lf,Hd,Df,Ex,Ss,un,Qe,Wo,jo,Qe,Qe,Qe,Qe,Ud,Qe,Ff,zf,_s,$r,ks,Bf,As,$f,Zt,Wd,Hf,Kr,Sr,Ts,Uf,Es,jf,Gf,Xf,Vf,Kf,Ns=mr(()=>{xr=Uint8Array,po=Uint16Array,Pf=Int32Array,Dd=new xr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Fd=new xr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Of=new xr([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),zd=function(t,e){for(var r=new po(31),n=0;n<31;++n)r[n]=e+=1<<t[n-1];for(var o=new Pf(r[30]),n=1;n<30;++n)for(var i=r[n];i<r[n+1];++i)o[i]=i-r[n]<<5|n;return{b:r,r:o}},Bd=zd(Dd,2),$d=Bd.b,Lf=Bd.r;$d[28]=258,Lf[258]=28;Hd=zd(Fd,0),Df=Hd.b,Ex=Hd.r,Ss=new po(32768);for(Qe=0;Qe<32768;++Qe)un=(Qe&43690)>>1|(Qe&21845)<<1,un=(un&52428)>>2|(un&13107)<<2,un=(un&61680)>>4|(un&3855)<<4,Ss[Qe]=((un&65280)>>8|(un&255)<<8)>>1;Wo=(function(t,e,r){for(var n=t.length,o=0,i=new po(e);o<n;++o)t[o]&&++i[t[o]-1];var a=new po(e);for(o=1;o<e;++o)a[o]=a[o-1]+i[o-1]<<1;var s;if(r){s=new po(1<<e);var l=15-e;for(o=0;o<n;++o)if(t[o])for(var d=o<<4|t[o],f=e-t[o],g=a[t[o]-1]++<<f,u=g|(1<<f)-1;g<=u;++g)s[Ss[g]>>l]=d}else for(s=new po(n),o=0;o<n;++o)t[o]&&(s[o]=Ss[a[t[o]-1]++]>>15-t[o]);return s}),jo=new xr(288);for(Qe=0;Qe<144;++Qe)jo[Qe]=8;for(Qe=144;Qe<256;++Qe)jo[Qe]=9;for(Qe=256;Qe<280;++Qe)jo[Qe]=7;for(Qe=280;Qe<288;++Qe)jo[Qe]=8;Ud=new xr(32);for(Qe=0;Qe<32;++Qe)Ud[Qe]=5;Ff=Wo(jo,9,1),zf=Wo(Ud,5,1),_s=function(t){for(var e=t[0],r=1;r<t.length;++r)t[r]>e&&(e=t[r]);return e},$r=function(t,e,r){var n=e/8|0;return(t[n]|t[n+1]<<8)>>(e&7)&r},ks=function(t,e){var r=e/8|0;return(t[r]|t[r+1]<<8|t[r+2]<<16)>>(e&7)},Bf=function(t){return(t+7)/8|0},As=function(t,e,r){return(e==null||e<0)&&(e=0),(r==null||r>t.length)&&(r=t.length),new xr(t.subarray(e,r))},$f=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Zt=function(t,e,r){var n=new Error(e||$f[t]);if(n.code=t,Error.captureStackTrace&&Error.captureStackTrace(n,Zt),!r)throw n;return n},Wd=function(t,e,r,n){var o=t.length,i=n?n.length:0;if(!o||e.f&&!e.l)return r||new xr(0);var a=!r,s=a||e.i!=2,l=e.i;a&&(r=new xr(o*3));var d=function(ft){var h=r.length;if(ft>h){var c=new xr(Math.max(h*2,ft));c.set(r),r=c}},f=e.f||0,g=e.p||0,u=e.b||0,p=e.l,_=e.d,N=e.m,y=e.n,P=o*8;do{if(!p){f=$r(t,g,1);var w=$r(t,g+1,3);if(g+=3,w)if(w==1)p=Ff,_=zf,N=9,y=5;else if(w==2){var E=$r(t,g,31)+257,D=$r(t,g+10,15)+4,I=E+$r(t,g+5,31)+1;g+=14;for(var b=new xr(I),F=new xr(19),L=0;L<D;++L)F[Of[L]]=$r(t,g+L*3,7);g+=D*3;for(var z=_s(F),B=(1<<z)-1,Y=Wo(F,z,1),L=0;L<I;){var ne=Y[$r(t,g,B)];g+=ne&15;var v=ne>>4;if(v<16)b[L++]=v;else{var re=0,oe=0;for(v==16?(oe=3+$r(t,g,3),g+=2,re=b[L-1]):v==17?(oe=3+$r(t,g,7),g+=3):v==18&&(oe=11+$r(t,g,127),g+=7);oe--;)b[L++]=re}}var U=b.subarray(0,E),K=b.subarray(E);N=_s(U),y=_s(K),p=Wo(U,N,1),_=Wo(K,y,1)}else Zt(1);else{var v=Bf(g)+4,S=t[v-4]|t[v-3]<<8,C=v+S;if(C>o){l&&Zt(0);break}s&&d(u+S),r.set(t.subarray(v,C),u),e.b=u+=S,e.p=g=C*8,e.f=f;continue}if(g>P){l&&Zt(0);break}}s&&d(u+131072);for(var te=(1<<N)-1,O=(1<<y)-1,ue=g;;ue=g){var re=p[ks(t,g)&te],fe=re>>4;if(g+=re&15,g>P){l&&Zt(0);break}if(re||Zt(2),fe<256)r[u++]=fe;else if(fe==256){ue=g,p=null;break}else{var Te=fe-254;if(fe>264){var L=fe-257,ie=Dd[L];Te=$r(t,g,(1<<ie)-1)+$d[L],g+=ie}var Ae=_[ks(t,g)&O],Ue=Ae>>4;Ae||Zt(3),g+=Ae&15;var K=Df[Ue];if(Ue>3){var ie=Fd[Ue];K+=ks(t,g)&(1<<ie)-1,g+=ie}if(g>P){l&&Zt(0);break}s&&d(u+131072);var ge=u+Te;if(u<K){var ut=i-K,Oe=Math.min(K,ge);for(ut+u<0&&Zt(3);u<Oe;++u)r[u]=n[ut+u]}for(;u<ge;++u)r[u]=r[u-K]}}e.l=p,e.p=ue,e.b=u,e.f=f,p&&(f=1,e.m=N,e.d=_,e.n=y)}while(!f);return u!=r.length&&a?As(r,0,u):r.subarray(0,u)},Hf=new xr(0),Kr=function(t,e){return t[e]|t[e+1]<<8},Sr=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},Ts=function(t,e){return Sr(t,e)+Sr(t,e+4)*4294967296},Uf=function(t,e){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&Zt(6,"invalid zlib data"),(t[1]>>5&1)==+!e&&Zt(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};Es=typeof TextDecoder<"u"&&new TextDecoder,jf=0;try{Es.decode(Hf,{stream:!0}),jf=1}catch{}Gf=function(t){for(var e="",r=0;;){var n=t[r++],o=(n>127)+(n>223)+(n>239);if(r+o>t.length)return{s:e,r:As(t,r-1)};o?o==3?(n=((n&15)<<18|(t[r++]&63)<<12|(t[r++]&63)<<6|t[r++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):o&1?e+=String.fromCharCode((n&31)<<6|t[r++]&63):e+=String.fromCharCode((n&15)<<12|(t[r++]&63)<<6|t[r++]&63):e+=String.fromCharCode(n)}};Xf=function(t,e){return e+30+Kr(t,e+26)+Kr(t,e+28)},Vf=function(t,e,r){var n=Kr(t,e+28),o=Kr(t,e+30),i=qf(t.subarray(e+46,e+46+n),!(Kr(t,e+8)&2048)),a=e+46+n,s=Kf(t,a,o,r,Sr(t,e+20),Sr(t,e+24),Sr(t,e+42)),l=s[0],d=s[1],f=s[2];return[Kr(t,e+10),l,d,i,a+o+Kr(t,e+32),f]},Kf=function(t,e,r,n,o,i,a){var s=o==4294967295,l=i==4294967295,d=a==4294967295,f=e+r,g=s+l+d;if(n&&g){for(;e+4<f;e+=4+Kr(t,e+2))if(Kr(t,e)==1)return[s?Ts(t,e+4+8*l):o,l?Ts(t,e+4):i,d?Ts(t,e+4+8*(l+s)):a,1];n<2&&Zt(13)}return[o,i,a,0]}});function er(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return Ds(t,e,n)}}function ng(t){return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return Fs(t,r)}}function Be(t,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ni;qd&&qd(t,null);let n=e.length;for(;n--;){let o=e[n];if(typeof o=="string"){let i=r(o);i!==o&&(Yf(e)||(e[n]=i),o=i)}t[o]=!0}return t}function og(t){for(let e=0;e<t.length;e++)Hr(t,e)||(t[e]=null);return t}function Yr(t){let e=Ls(null);for(let[r,n]of eh(t))Hr(t,r)&&(Array.isArray(n)?e[r]=og(n):n&&typeof n=="object"&&n.constructor===Object?e[r]=Yr(n):e[r]=n);return e}function Vo(t,e){for(;t!==null;){let n=Qf(t,e);if(n){if(n.get)return er(n.get);if(typeof n.value=="function")return er(n.value)}t=Zf(t)}function r(){return null}return r}function nh(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:gg(),e=he=>nh(he);if(e.version="3.3.1",e.removed=[],!t||!t.document||t.document.nodeType!==Ko.document||!t.Element)return e.isSupported=!1,e;let{document:r}=t,n=r,o=n.currentScript,{DocumentFragment:i,HTMLTemplateElement:a,Node:s,Element:l,NodeFilter:d,NamedNodeMap:f=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:g,DOMParser:u,trustedTypes:p}=t,_=l.prototype,N=Vo(_,"cloneNode"),y=Vo(_,"remove"),P=Vo(_,"nextSibling"),w=Vo(_,"childNodes"),v=Vo(_,"parentNode");if(typeof a=="function"){let he=r.createElement("template");he.content&&he.content.ownerDocument&&(r=he.content.ownerDocument)}let S,C="",{implementation:E,createNodeIterator:D,createDocumentFragment:I,getElementsByTagName:b}=r,{importNode:F}=n,L=Jd();e.isSupported=typeof eh=="function"&&typeof v=="function"&&E&&E.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:z,ERB_EXPR:B,TMPLIT_EXPR:Y,DATA_ATTR:ne,ARIA_ATTR:re,IS_SCRIPT_OR_DATA:oe,ATTR_WHITESPACE:U,CUSTOM_ELEMENT:K}=Qd,{IS_ALLOWED_URI:te}=Qd,O=null,ue=Be({},[...Vd,...Rs,...Ms,...Ps,...Kd]),fe=null,Te=Be({},[...Yd,...Os,...Zd,...ri]),ie=Object.seal(Ls(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ae=null,Ue=null,ge=Object.seal(Ls(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),ut=!0,Oe=!0,ft=!1,h=!0,c=!1,k=!0,x=!1,J=!1,se=!1,ce=!1,xe=!1,ye=!1,$e=!0,Me=!1,Je="user-content-",et=!0,pe=!1,ze={},je=null,Le=Be({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),vt=null,at=Be({},["audio","video","img","source","image","track"]),ve=null,wt=Be({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),hr="http://www.w3.org/1998/Math/MathML",Wt="http://www.w3.org/2000/svg",kt="http://www.w3.org/1999/xhtml",Ot=kt,Et=!1,ee=null,de=Be({},[hr,Wt,kt],Cs),Re=Be({},["mi","mo","mn","ms","mtext"]),De=Be({},["annotation-xml"]),tt=Be({},["title","style","font","a","script"]),_t=null,ur=["application/xhtml+xml","text/html"],At="text/html",it=null,Ne=null,pn=r.createElement("form"),nn=function(T){return T instanceof RegExp||T instanceof Function},yr=function(){let T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Ne&&Ne===T)){if((!T||typeof T!="object")&&(T={}),T=Yr(T),_t=ur.indexOf(T.PARSER_MEDIA_TYPE)===-1?At:T.PARSER_MEDIA_TYPE,it=_t==="application/xhtml+xml"?Cs:ni,O=Hr(T,"ALLOWED_TAGS")?Be({},T.ALLOWED_TAGS,it):ue,fe=Hr(T,"ALLOWED_ATTR")?Be({},T.ALLOWED_ATTR,it):Te,ee=Hr(T,"ALLOWED_NAMESPACES")?Be({},T.ALLOWED_NAMESPACES,Cs):de,ve=Hr(T,"ADD_URI_SAFE_ATTR")?Be(Yr(wt),T.ADD_URI_SAFE_ATTR,it):wt,vt=Hr(T,"ADD_DATA_URI_TAGS")?Be(Yr(at),T.ADD_DATA_URI_TAGS,it):at,je=Hr(T,"FORBID_CONTENTS")?Be({},T.FORBID_CONTENTS,it):Le,Ae=Hr(T,"FORBID_TAGS")?Be({},T.FORBID_TAGS,it):Yr({}),Ue=Hr(T,"FORBID_ATTR")?Be({},T.FORBID_ATTR,it):Yr({}),ze=Hr(T,"USE_PROFILES")?T.USE_PROFILES:!1,ut=T.ALLOW_ARIA_ATTR!==!1,Oe=T.ALLOW_DATA_ATTR!==!1,ft=T.ALLOW_UNKNOWN_PROTOCOLS||!1,h=T.ALLOW_SELF_CLOSE_IN_ATTR!==!1,c=T.SAFE_FOR_TEMPLATES||!1,k=T.SAFE_FOR_XML!==!1,x=T.WHOLE_DOCUMENT||!1,ce=T.RETURN_DOM||!1,xe=T.RETURN_DOM_FRAGMENT||!1,ye=T.RETURN_TRUSTED_TYPE||!1,se=T.FORCE_BODY||!1,$e=T.SANITIZE_DOM!==!1,Me=T.SANITIZE_NAMED_PROPS||!1,et=T.KEEP_CONTENT!==!1,pe=T.IN_PLACE||!1,te=T.ALLOWED_URI_REGEXP||th,Ot=T.NAMESPACE||kt,Re=T.MATHML_TEXT_INTEGRATION_POINTS||Re,De=T.HTML_INTEGRATION_POINTS||De,ie=T.CUSTOM_ELEMENT_HANDLING||{},T.CUSTOM_ELEMENT_HANDLING&&nn(T.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(ie.tagNameCheck=T.CUSTOM_ELEMENT_HANDLING.tagNameCheck),T.CUSTOM_ELEMENT_HANDLING&&nn(T.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(ie.attributeNameCheck=T.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),T.CUSTOM_ELEMENT_HANDLING&&typeof T.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(ie.allowCustomizedBuiltInElements=T.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),c&&(Oe=!1),xe&&(ce=!0),ze&&(O=Be({},Kd),fe=[],ze.html===!0&&(Be(O,Vd),Be(fe,Yd)),ze.svg===!0&&(Be(O,Rs),Be(fe,Os),Be(fe,ri)),ze.svgFilters===!0&&(Be(O,Ms),Be(fe,Os),Be(fe,ri)),ze.mathMl===!0&&(Be(O,Ps),Be(fe,Zd),Be(fe,ri))),T.ADD_TAGS&&(typeof T.ADD_TAGS=="function"?ge.tagCheck=T.ADD_TAGS:(O===ue&&(O=Yr(O)),Be(O,T.ADD_TAGS,it))),T.ADD_ATTR&&(typeof T.ADD_ATTR=="function"?ge.attributeCheck=T.ADD_ATTR:(fe===Te&&(fe=Yr(fe)),Be(fe,T.ADD_ATTR,it))),T.ADD_URI_SAFE_ATTR&&Be(ve,T.ADD_URI_SAFE_ATTR,it),T.FORBID_CONTENTS&&(je===Le&&(je=Yr(je)),Be(je,T.FORBID_CONTENTS,it)),T.ADD_FORBID_CONTENTS&&(je===Le&&(je=Yr(je)),Be(je,T.ADD_FORBID_CONTENTS,it)),et&&(O["#text"]=!0),x&&Be(O,["html","head","body"]),O.table&&(Be(O,["tbody"]),delete Ae.tbody),T.TRUSTED_TYPES_POLICY){if(typeof T.TRUSTED_TYPES_POLICY.createHTML!="function")throw Xo('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof T.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Xo('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');S=T.TRUSTED_TYPES_POLICY,C=S.createHTML("")}else S===void 0&&(S=mg(p,o)),S!==null&&typeof C=="string"&&(C=S.createHTML(""));Jt&&Jt(T),Ne=T}},or=Be({},[...Rs,...Ms,...ag]),fn=Be({},[...Ps,...ig]),gn=function(T){let W=v(T);(!W||!W.tagName)&&(W={namespaceURI:Ot,tagName:"template"});let le=ni(T.tagName),Ke=ni(W.tagName);return ee[T.namespaceURI]?T.namespaceURI===Wt?W.namespaceURI===kt?le==="svg":W.namespaceURI===hr?le==="svg"&&(Ke==="annotation-xml"||Re[Ke]):!!or[le]:T.namespaceURI===hr?W.namespaceURI===kt?le==="math":W.namespaceURI===Wt?le==="math"&&De[Ke]:!!fn[le]:T.namespaceURI===kt?W.namespaceURI===Wt&&!De[Ke]||W.namespaceURI===hr&&!Re[Ke]?!1:!fn[le]&&(tt[le]||!or[le]):!!(_t==="application/xhtml+xml"&&ee[T.namespaceURI]):!1},Lt=function(T){Go(e.removed,{element:T});try{v(T).removeChild(T)}catch{y(T)}},gt=function(T,W){try{Go(e.removed,{attribute:W.getAttributeNode(T),from:W})}catch{Go(e.removed,{attribute:null,from:W})}if(W.removeAttribute(T),T==="is")if(ce||xe)try{Lt(W)}catch{}else try{W.setAttribute(T,"")}catch{}},Jn=function(T){let W=null,le=null;if(se)T="<remove></remove>"+T;else{let st=Is(T,/^[\r\n\t ]+/);le=st&&st[0]}_t==="application/xhtml+xml"&&Ot===kt&&(T='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+T+"</body></html>");let Ke=S?S.createHTML(T):T;if(Ot===kt)try{W=new u().parseFromString(Ke,_t)}catch{}if(!W||!W.documentElement){W=E.createDocument(Ot,"template",null);try{W.documentElement.innerHTML=Et?C:Ke}catch{}}let Ge=W.body||W.documentElement;return T&&le&&Ge.insertBefore(r.createTextNode(le),Ge.childNodes[0]||null),Ot===kt?b.call(W,x?"html":"body")[0]:x?W.documentElement:Ge},Ht=function(T){return D.call(T.ownerDocument||T,T,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},jt=function(T){return T instanceof g&&(typeof T.nodeName!="string"||typeof T.textContent!="string"||typeof T.removeChild!="function"||!(T.attributes instanceof f)||typeof T.removeAttribute!="function"||typeof T.setAttribute!="function"||typeof T.namespaceURI!="string"||typeof T.insertBefore!="function"||typeof T.hasChildNodes!="function")},on=function(T){return typeof s=="function"&&T instanceof s};function ar(he,T,W){ti(he,le=>{le.call(e,T,W,Ne)})}let Mr=function(T){let W=null;if(ar(L.beforeSanitizeElements,T,null),jt(T))return Lt(T),!0;let le=it(T.nodeName);if(ar(L.uponSanitizeElement,T,{tagName:le,allowedTags:O}),k&&T.hasChildNodes()&&!on(T.firstElementChild)&&Qt(/<[/\w!]/g,T.innerHTML)&&Qt(/<[/\w!]/g,T.textContent)||T.nodeType===Ko.progressingInstruction||k&&T.nodeType===Ko.comment&&Qt(/<[/\w]/g,T.data))return Lt(T),!0;if(!(ge.tagCheck instanceof Function&&ge.tagCheck(le))&&(!O[le]||Ae[le])){if(!Ae[le]&&eo(le)&&(ie.tagNameCheck instanceof RegExp&&Qt(ie.tagNameCheck,le)||ie.tagNameCheck instanceof Function&&ie.tagNameCheck(le)))return!1;if(et&&!je[le]){let Ke=v(T)||T.parentNode,Ge=w(T)||T.childNodes;if(Ge&&Ke){let st=Ge.length;for(let Dt=st-1;Dt>=0;--Dt){let Gt=N(Ge[Dt],!0);Gt.__removalCount=(T.__removalCount||0)+1,Ke.insertBefore(Gt,P(T))}}}return Lt(T),!0}return T instanceof l&&!gn(T)||(le==="noscript"||le==="noembed"||le==="noframes")&&Qt(/<\/no(script|embed|frames)/i,T.innerHTML)?(Lt(T),!0):(c&&T.nodeType===Ko.text&&(W=T.textContent,ti([z,B,Y],Ke=>{W=qo(W,Ke," ")}),T.textContent!==W&&(Go(e.removed,{element:T.cloneNode()}),T.textContent=W)),ar(L.afterSanitizeElements,T,null),!1)},En=function(T,W,le){if($e&&(W==="id"||W==="name")&&(le in r||le in pn))return!1;if(!(Oe&&!Ue[W]&&Qt(ne,W))){if(!(ut&&Qt(re,W))){if(!(ge.attributeCheck instanceof Function&&ge.attributeCheck(W,T))){if(!fe[W]||Ue[W]){if(!(eo(T)&&(ie.tagNameCheck instanceof RegExp&&Qt(ie.tagNameCheck,T)||ie.tagNameCheck instanceof Function&&ie.tagNameCheck(T))&&(ie.attributeNameCheck instanceof RegExp&&Qt(ie.attributeNameCheck,W)||ie.attributeNameCheck instanceof Function&&ie.attributeNameCheck(W,T))||W==="is"&&ie.allowCustomizedBuiltInElements&&(ie.tagNameCheck instanceof RegExp&&Qt(ie.tagNameCheck,le)||ie.tagNameCheck instanceof Function&&ie.tagNameCheck(le))))return!1}else if(!ve[W]){if(!Qt(te,qo(le,U,""))){if(!((W==="src"||W==="xlink:href"||W==="href")&&T!=="script"&&tg(le,"data:")===0&&vt[T])){if(!(ft&&!Qt(oe,qo(le,U,"")))){if(le)return!1}}}}}}}return!0},eo=function(T){return T!=="annotation-xml"&&Is(T,K)},An=function(T){ar(L.beforeSanitizeAttributes,T,null);let{attributes:W}=T;if(!W||jt(T))return;let le={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:fe,forceKeepAttr:void 0},Ke=W.length;for(;Ke--;){let Ge=W[Ke],{name:st,namespaceURI:Dt,value:Gt}=Ge,pr=it(st),ir=Gt,mt=st==="value"?ir:rg(ir);if(le.attrName=pr,le.attrValue=mt,le.keepAttr=!0,le.forceKeepAttr=void 0,ar(L.uponSanitizeAttribute,T,le),mt=le.attrValue,Me&&(pr==="id"||pr==="name")&&(gt(st,T),mt=Je+mt),k&&Qt(/((--!?|])>)|<\/(style|title|textarea)/i,mt)){gt(st,T);continue}if(pr==="attributename"&&Is(mt,"href")){gt(st,T);continue}if(le.forceKeepAttr)continue;if(!le.keepAttr){gt(st,T);continue}if(!h&&Qt(/\/>/i,mt)){gt(st,T);continue}c&&ti([z,B,Y],Nn=>{mt=qo(mt,Nn," ")});let an=it(T.nodeName);if(!En(an,pr,mt)){gt(st,T);continue}if(S&&typeof p=="object"&&typeof p.getAttributeType=="function"&&!Dt)switch(p.getAttributeType(an,pr)){case"TrustedHTML":{mt=S.createHTML(mt);break}case"TrustedScriptURL":{mt=S.createScriptURL(mt);break}}if(mt!==ir)try{Dt?T.setAttributeNS(Dt,st,mt):T.setAttribute(st,mt),jt(T)?Lt(T):Xd(e.removed)}catch{gt(st,T)}}ar(L.afterSanitizeAttributes,T,null)},mn=function he(T){let W=null,le=Ht(T);for(ar(L.beforeSanitizeShadowDOM,T,null);W=le.nextNode();)ar(L.uponSanitizeShadowNode,W,null),Mr(W),An(W),W.content instanceof i&&he(W.content);ar(L.afterSanitizeShadowDOM,T,null)};return e.sanitize=function(he){let T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},W=null,le=null,Ke=null,Ge=null;if(Et=!he,Et&&(he="<!-->"),typeof he!="string"&&!on(he))if(typeof he.toString=="function"){if(he=he.toString(),typeof he!="string")throw Xo("dirty is not a string, aborting")}else throw Xo("toString is not a function");if(!e.isSupported)return he;if(J||yr(T),e.removed=[],typeof he=="string"&&(pe=!1),pe){if(he.nodeName){let Gt=it(he.nodeName);if(!O[Gt]||Ae[Gt])throw Xo("root node is forbidden and cannot be sanitized in-place")}}else if(he instanceof s)W=Jn("<!---->"),le=W.ownerDocument.importNode(he,!0),le.nodeType===Ko.element&&le.nodeName==="BODY"||le.nodeName==="HTML"?W=le:W.appendChild(le);else{if(!ce&&!c&&!x&&he.indexOf("<")===-1)return S&&ye?S.createHTML(he):he;if(W=Jn(he),!W)return ce?null:ye?C:""}W&&se&&Lt(W.firstChild);let st=Ht(pe?he:W);for(;Ke=st.nextNode();)Mr(Ke),An(Ke),Ke.content instanceof i&&mn(Ke.content);if(pe)return he;if(ce){if(xe)for(Ge=I.call(W.ownerDocument);W.firstChild;)Ge.appendChild(W.firstChild);else Ge=W;return(fe.shadowroot||fe.shadowrootmode)&&(Ge=F.call(n,Ge,!0)),Ge}let Dt=x?W.outerHTML:W.innerHTML;return x&&O["!doctype"]&&W.ownerDocument&&W.ownerDocument.doctype&&W.ownerDocument.doctype.name&&Qt(rh,W.ownerDocument.doctype.name)&&(Dt="<!DOCTYPE "+W.ownerDocument.doctype.name+`>
`+Dt),c&&ti([z,B,Y],Gt=>{Dt=qo(Dt,Gt," ")}),S&&ye?S.createHTML(Dt):Dt},e.setConfig=function(){let he=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};yr(he),J=!0},e.clearConfig=function(){Ne=null,J=!1},e.isValidAttribute=function(he,T,W){Ne||yr({});let le=it(he),Ke=it(T);return En(le,Ke,W)},e.addHook=function(he,T){typeof T=="function"&&Go(L[he],T)},e.removeHook=function(he,T){if(T!==void 0){let W=Jf(L[he],T);return W===-1?void 0:eg(L[he],W,1)[0]}return Xd(L[he])},e.removeHooks=function(he){L[he]=[]},e.removeAllHooks=function(){L=Jd()},e}var eh,qd,Yf,Zf,Qf,Jt,Er,Ls,Ds,Fs,ti,Jf,Xd,Go,eg,ni,Cs,Is,qo,tg,rg,Hr,Qt,Xo,Vd,Rs,Ms,ag,Ps,ig,Kd,Yd,Os,Zd,ri,sg,lg,cg,dg,hg,th,ug,pg,rh,fg,Qd,Ko,gg,mg,Jd,Yo,oh=mr(()=>{({entries:eh,setPrototypeOf:qd,isFrozen:Yf,getPrototypeOf:Zf,getOwnPropertyDescriptor:Qf}=Object),{freeze:Jt,seal:Er,create:Ls}=Object,{apply:Ds,construct:Fs}=typeof Reflect<"u"&&Reflect;Jt||(Jt=function(e){return e});Er||(Er=function(e){return e});Ds||(Ds=function(e,r){for(var n=arguments.length,o=new Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];return e.apply(r,o)});Fs||(Fs=function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return new e(...n)});ti=er(Array.prototype.forEach),Jf=er(Array.prototype.lastIndexOf),Xd=er(Array.prototype.pop),Go=er(Array.prototype.push),eg=er(Array.prototype.splice),ni=er(String.prototype.toLowerCase),Cs=er(String.prototype.toString),Is=er(String.prototype.match),qo=er(String.prototype.replace),tg=er(String.prototype.indexOf),rg=er(String.prototype.trim),Hr=er(Object.prototype.hasOwnProperty),Qt=er(RegExp.prototype.test),Xo=ng(TypeError);Vd=Jt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Rs=Jt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ms=Jt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ag=Jt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ps=Jt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),ig=Jt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Kd=Jt(["#text"]),Yd=Jt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Os=Jt(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Zd=Jt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ri=Jt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),sg=Er(/\{\{[\w\W]*|[\w\W]*\}\}/gm),lg=Er(/<%[\w\W]*|[\w\W]*%>/gm),cg=Er(/\$\{[\w\W]*/gm),dg=Er(/^data-[\-\w.\u00B7-\uFFFF]+$/),hg=Er(/^aria-[\-\w]+$/),th=Er(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ug=Er(/^(?:\w+script|data):/i),pg=Er(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),rh=Er(/^html$/i),fg=Er(/^[a-z][.\w]*(-[.\w]+)+$/i),Qd=Object.freeze({__proto__:null,ARIA_ATTR:hg,ATTR_WHITESPACE:pg,CUSTOM_ELEMENT:fg,DATA_ATTR:dg,DOCTYPE_NAME:rh,ERB_EXPR:lg,IS_ALLOWED_URI:th,IS_SCRIPT_OR_DATA:ug,MUSTACHE_EXPR:sg,TMPLIT_EXPR:cg}),Ko={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},gg=function(){return typeof window>"u"?null:window},mg=function(e,r){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null,o="data-tt-policy-suffix";r&&r.hasAttribute(o)&&(n=r.getAttribute(o));let i="dompurify"+(n?"#"+n:"");try{return e.createPolicy(i,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},Jd=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};Yo=nh()});function sh(){if(Wn)return Wn;if(typeof Yo?.sanitize=="function"&&Yo.isSupported)Wn=Yo;else{let t=typeof window<"u"?window:globalThis.window;if(!t)throw new Error("\u65E0\u6CD5\u6E05\u7406 HTML\uFF1A\u5F53\u524D\u73AF\u5883\u7F3A\u5C11\u6D4F\u89C8\u5668 window\u3002");Wn=Yo(t)}if(!Wn||typeof Wn.sanitize!="function")throw new Error("\u65E0\u6CD5\u6E05\u7406 HTML\uFF1A\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 DOMPurify\u3002");return Wn}function oi(t){if(!t)return"";try{return sh().sanitize(String(t),ih)}catch{return""}}function zs(t){if(!t)return"";try{return sh().sanitize(String(t),xg)}catch{return""}}function jn(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function dt(t){return String(t??"").replace(/\u00a0/g," ").replace(/[\t\f\v\u2000-\u200b\u2028\u2029]+/g," ").replace(/[ ]*\n[ ]*/g," ").replace(/ {2,}/g," ").trim()}function Zo(t="div"){return document.createElement(t)}function Zr(t){try{return new DOMParser().parseFromString(String(t??""),"text/html")}catch{return null}}function fo(t){try{let e=new DOMParser().parseFromString(String(t??""),"application/xml");return!e||!e.documentElement||e.documentElement.localName?.toLowerCase()==="parsererror"||tr(e,"parsererror")?null:e}catch{return null}}function vr(t){return String(t?.localName||t?.nodeName||"").toLowerCase()}function Rt(t,e){let r=[];if(!t)return r;let n=String(e).toLowerCase(),o=i=>{for(let a=i.firstChild;a;a=a.nextSibling)a.nodeType===1&&(vr(a)===n&&r.push(a),o(a))};return o(t),r}function tr(t,e){if(!t)return null;let r=String(e).toLowerCase(),n=null,o=i=>{for(let a=i.firstChild;a&&!n;a=a.nextSibling)if(a.nodeType===1){if(vr(a)===r){n=a;return}o(a)}};return o(t),n}function ot(t,e){if(!t||!e)return null;let r=t.getAttribute?.(e);if(r!=null)return r;let n=String(e).toLowerCase(),o=t.attributes;if(!o)return null;for(let i=0;i<o.length;i+=1){let a=o[i];if(!a)continue;if(String(a.name||"").toLowerCase()===n||!n.includes(":")&&String(a.localName||"").toLowerCase()===n)return a.value}return null}var ah,bg,ih,xg,Wn,Gn=mr(()=>{oh();ah=Object.freeze(["b","strong","i","em","u","s","sub","sup","code","span","a","br","ruby","rt","rp","small","mark"]),bg=Object.freeze(["table","caption","thead","tbody","tfoot","tr","th","td","colgroup","col"]),ih=Object.freeze({ALLOWED_TAGS:[...ah],ALLOWED_ATTR:["href"],ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!1,KEEP_CONTENT:!0,FORBID_TAGS:["script","style","iframe","frame","frameset","object","embed","applet","form","input","button","select","textarea","meta","link","base","svg","math","template","noscript"],FORBID_ATTR:["style","src","srcset","formaction","xlink:href","onerror","onload","onclick"]}),xg=Object.freeze({...ih,ALLOWED_TAGS:[...ah,...bg]}),Wn=null});function Xn(t){return t.nextId()}function _g(t){if(!t||t.nodeType!==1)return!1;if(t.hasAttribute?.("hidden")||ot(t,"aria-hidden")==="true")return!0;let e=ot(t,"style")||"";return/display\s*:\s*none|visibility\s*:\s*hidden/i.test(e)}function kg(t,e){typeof t?.warn=="function"&&t.warn(e)}function $s(t){for(let e of Array.from(t?.children||[])){let r=vr(e);if(lh.has(r)&&r!=="span"&&r!=="a"||$s(e))return!0}return!1}function ch(t){let e=Array.from(t.querySelectorAll(wg));for(let r=e.length-1;r>=0;r-=1){let n=e[r];if(!n.parentNode)continue;let o=t.ownerDocument.createDocumentFragment();for(;n.firstChild;)o.appendChild(n.firstChild);o.appendChild(t.ownerDocument.createElement("br")),n.parentNode.replaceChild(o,n)}return t}function dh(t){for(let e of Rt(t,"img"))e.remove();for(let e of Rt(t,"image"))e.remove()}function qn(t){let e=[],r=n=>{for(let o of Array.from(n?.children||[])){let i=vr(o);i==="img"||i==="image"?e.push(o):i==="svg"?e.push(...Rt(o,"image")):i!=="script"&&i!=="style"&&r(o)}};return r(t),e}function Hs(t,e){if(!t||typeof e?.resolveLink!="function")return;let r=Array.from(t.getElementsByTagName?.("a")||[]);for(let n of r){let o=n.getAttribute("href");if(n.removeAttribute("href"),n.removeAttribute("data-chapter"),n.removeAttribute("data-anchor"),!o)continue;let i=null;try{i=e.resolveLink(o)}catch{i=null}if(i){if(i.external){i.href&&n.setAttribute("href",i.href);continue}Number.isInteger(i.chapter)&&i.chapter>=0&&(n.setAttribute("data-chapter",String(i.chapter)),i.anchor&&n.setAttribute("data-anchor",String(i.anchor).slice(0,300)))}}}function hh(t,e){let r=oi(t.innerHTML);if(!r)return null;let n=Zo("div");n.innerHTML=r,Hs(n,e);let o=n.innerHTML.replace(/^(?:\s*<br\s*\/?>\s*)+/i,"").replace(/(?:\s*<br\s*\/?>\s*)+$/i,"");if(!o)return null;let i=dt(n.textContent);return i?{html:o,text:i}:null}function si(t,e,r,n={}){let o=oi(r);if(!o)return null;let i=Zo("div");i.innerHTML=o,Hs(i,t);let a=i.innerHTML,s=dt(i.textContent);return s?{id:Xn(t),kind:e,html:a,text:s,...n}:null}function Us(t,e){let r=String(e??"").replace(/\r\n?/g,`
`).replace(/\u00a0/g," ").replace(/^\n+|\n+$/g,"");return r.trim()?{id:Xn(t),kind:"code",html:jn(r),text:r}:null}function Ws(t,e,r={}){let n=zs(e);if(!n)return null;let o=Zo("div");if(o.innerHTML=n,!o.querySelector("table"))return null;Hs(o,t);let a=o.innerHTML,s=dt(o.textContent);return s?{id:Xn(t),kind:"table",html:a,text:s,...r}:null}function js(t,{src:e,alt:r="",caption:n=""}={}){if(!e)return null;let o={id:Xn(t),kind:"image",src:e},i=dt(r),a=dt(n);return i&&(o.alt=i),a&&(o.caption=a),o}function Gs(t){return{id:Xn(t),kind:"rule"}}function Vn(t,e){let r=[];return t&&ai(t,e,r),r}function ai(t,e,r){let n=[],o=()=>{if(n.length===0)return;let i=Zo("div");for(let s of n)i.appendChild(s.cloneNode(!0));let a=dt(i.textContent)!==""||qn(i).length>0;n=[],a&&_n("paragraph",i,e,r)};for(let i of Array.from(t.childNodes||[])){if(i.nodeType===3){String(i.textContent||"").trim()&&n.push(i);continue}if(i.nodeType!==1||_g(i))continue;let a=vr(i);vg.has(a)||(lh.has(a)?(o(),Tg(i,a,e,r)):n.push(i))}o()}function Tg(t,e,r,n){if(Bs.has(e)){_n("heading",t,r,n,{level:Number(e.slice(1)),stripImages:!0,flatten:!1});return}switch(e){case"p":_n("paragraph",t,r,n);return;case"li":case"dt":_n("list-item",t,r,n,{flatten:!0});return;case"dd":_n("paragraph",t,r,n,{flatten:!0});return;case"blockquote":_n("quote",t,r,n,{flatten:!0});return;case"pre":Eg(t,r,n);return;case"table":Ag(t,r,n);return;case"hr":n.push(Gs(r));return;case"figure":{Sg(t,r,n);return}case"img":case"image":ii(t,r,n,"");return;case"picture":case"svg":{for(let o of qn(t))ii(o,r,n,"");return}case"ul":case"ol":{for(let o of Array.from(t.children||[]))vr(o)==="li"?_n("list-item",o,r,n,{flatten:!0}):ai(o,r,n);return}case"dl":{ai(t,r,n);return}case"figcaption":return;default:yg.has(e)||$s(t)?ai(t,r,n):_n("paragraph",t,r,n)}}function _n(t,e,r,n,o={}){let i=e.cloneNode(!0),a=qn(i);if(a.length>0)for(let l of a)l.remove();o.stripImages&&dh(i),o.flatten!==!1&&ch(i);let s=hh(i,r);if(s){let l={id:Xn(r),kind:t,html:s.html,text:s.text};o.level&&(l.level=o.level),n.push(l)}if(!o.stripImages&&a.length>0){let l=qn(e);for(let d of l)ii(d,r,n,"")}}function ii(t,e,r,n){let o=ot(t,"src")||ot(t,"xlink:href")||ot(t,"href");if(!o)return;let i=null;try{i=typeof e?.resolveImage=="function"?e.resolveImage(o):null}catch{i=null}if(!i||!i.src)return;let a=ot(t,"alt")||ot(t,"title")||i.alt||"",s=js(e,{src:i.src,alt:a,caption:n||i.caption||""});s&&r.push(s)}function Sg(t,e,r){let n=Rt(t,"figcaption")[0]||null,o=n?dt(n.textContent):"",i=qn(t);i.length>0&&i.forEach((l,d)=>{ii(l,e,r,d===0?o:"")});let a=t.cloneNode(!0);dh(a);for(let l of Rt(a,"figcaption"))l.remove();$s(a)&&ch(a);let s=hh(a,e);s&&s.text!==o&&r.push({id:Xn(e),kind:"paragraph",html:s.html,text:s.text})}function Eg(t,e,r){let n=Rt(t,"code")[0]||t,o=String(n.textContent||"").replace(/\r\n?/g,`
`);if(!o.trim())return;let i=oi(n.innerHTML),a=Us(e,o);a&&(i&&(a.html=i),r.push(a))}function Ag(t,e,r){let n=t.cloneNode(!0),o=zs(n.outerHTML);if(!o){kg(e,"\u5DF2\u8DF3\u8FC7\u4E00\u4E2A\u65E0\u6CD5\u89E3\u6790\u7684\u8868\u683C\u3002");return}let i=Ws(e,o);i&&r.push(i)}var Bs,vg,yg,lh,wg,Qo=mr(()=>{Gn();Bs=new Set(["h1","h2","h3","h4","h5","h6"]),vg=new Set(["script","style","noscript","template","head","title","meta","link","base","iframe","frame","frameset","object","embed","applet","form","input","select","textarea","button","audio","video","source","track","canvas","map","area","math","nav"]),yg=new Set(["div","section","article","main","header","footer","aside","center","details","summary","fieldset","body","html","hgroup","dl"]),lh=new Set([...Bs,"p","div","section","article","main","header","footer","aside","center","details","summary","fieldset","body","html","hgroup","dl","dt","dd","blockquote","pre","table","ul","ol","li","figure","figcaption","hr","address","picture","svg","img","image"]),wg=[...Bs,"p","div","section","article","header","footer","aside","center","details","summary","fieldset","blockquote","ul","ol","li","dl","dt","dd","table","thead","tbody","tfoot","tr","td","th","caption","pre","figure","figcaption","address","hgroup"].join(",")});function li(t){if(typeof t!="string"||!t)return"";let e=t.split(/[\\/]/).pop()||"",r=/\.([A-Za-z0-9]+)$/.exec(e);return r?r[1].toLowerCase():""}function Ar(t){let e=String(t||"").replace(/\\/g,"/"),r=e.lastIndexOf("/");return r>=0?e.slice(r+1):e}function go(t){let e=String(t||"").replace(/\\/g,"/"),r=e.lastIndexOf("/");return r>0?e.slice(0,r):""}function qs(t){let e=[];for(let r of String(t||"").replace(/\\/g,"/").split("/"))if(!(!r||r===".")){if(r===".."){e.pop();continue}e.push(r)}return e.join("/")}function Jo(t){let e=String(t||""),r=e.indexOf("#"),n=r>=0?e.slice(0,r):e,o=r>=0?e.slice(r+1):"";try{o=decodeURIComponent(o)}catch{}let i=n.indexOf("?");return{path:i>=0?n.slice(0,i):n,fragment:o}}function kn(t,e){if(!e)return null;let r=String(e).trim();if(!r||r.startsWith("#")||/^[a-z][a-z0-9+.-]*:/i.test(r)||r.startsWith("//"))return null;let{path:n}=Jo(r);if(!n)return null;let o=n;try{o=decodeURIComponent(n)}catch{}o=o.replace(/\\/g,"/");let i=o.startsWith("/")?o.slice(1):t?`${t}/${o}`:o;return qs(i)||null}function ph(t){let e=new Map,r=[];for(let[n,o]of Object.entries(t||{})){if(!o||/\/$/.test(n))continue;let i=qs(n);if(!i)continue;let a=i.toLowerCase();e.has(a)||(e.set(a,{name:i,bytes:o}),r.push(i))}return{names:r,get(n){let o=qs(n||"");return o&&e.get(o.toLowerCase())||null},has(n){return!!this.get(n)}}}function ea(t){return Ng[li(t)]||"application/octet-stream"}async function Qr(t){if(!t||typeof t.arrayBuffer!="function")throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u6570\u636E\uFF1A\u8BF7\u9009\u62E9\u4E00\u4E2A\u6709\u6548\u7684\u6587\u6863\u6587\u4EF6\u3002");let e;try{e=await t.arrayBuffer()}catch{throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u6570\u636E\uFF0C\u6587\u4EF6\u53EF\u80FD\u5DF2\u88AB\u79FB\u52A8\u6216\u635F\u574F\u3002")}let r=new Uint8Array(e);if(r.length===0)throw new Error("\u6587\u4EF6\u5185\u5BB9\u4E3A\u7A7A\u3002");return r}function Jr(t=40){let e=[],r=new Set,n=!1;return{warnings:e,warn:i=>{let a=String(i||"").trim();!a||r.has(a)||(r.add(a),e.length<t?e.push(a):n||(n=!0,e.push("\u8FD8\u6709\u66F4\u591A\u89E3\u6790\u8B66\u544A\u672A\u663E\u793A\u3002")))}}}function Nr(t,e){if(t instanceof Error&&/[\u4e00-\u9fff]/.test(t.message))return t;let r=t instanceof Error?t.message:String(t??""),n=r?`${e}\uFF1A${r}`:`${e}\u3002`;return new Error(/[。！？]$/.test(n)?n:`${n}\u3002`)}function ta(t,e){let r=(Array.isArray(e)?e:[]).filter(i=>i&&Number.isInteger(i.chapterIndex)&&i.chapterIndex>=0&&i.chapterIndex<t.length&&i.title);for(let i=0;i<t.length;i+=1){let a=r.find(l=>l.chapterIndex===i),s=t[i].blocks.find(l=>l.kind==="heading"&&l.text);t[i].title=(a?.title||s?.text||`\u7B2C ${i+1} \u7AE0`).slice(0,120)}if(r.length===0)return t.map((i,a)=>({title:i.title,chapterIndex:a,depth:0}));let n=[],o=new Set;for(let i=0;i<t.length;i+=1){let a=r.filter(s=>s.chapterIndex===i);if(a.length===0){let s={title:t[i].title,chapterIndex:i,depth:0},l=`${i}|${s.title}|0`;o.has(l)||(o.add(l),n.push(s));continue}for(let s of a){let l=Number.isInteger(s.depth)&&s.depth>=0?s.depth:0,d=s.anchor?String(s.anchor).slice(0,300):"",f=`${s.chapterIndex}|${s.title}|${l}|${d}`;o.has(f)||(o.add(f),n.push({title:s.title,chapterIndex:s.chapterIndex,depth:l,...d?{anchor:d}:{}}))}}return n}function Yn(t,e="\u672A\u547D\u540D\u6587\u6863"){return Ar(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||e}function Tn(){let t=[];return{urls:t,create(e){let r=URL.createObjectURL(e);return t.push(r),r},add(e){return e&&!t.includes(e)&&t.push(e),e},dispose(){for(;t.length>0;){let e=t.pop();try{URL.revokeObjectURL(e)}catch{}}}}}function Sn(t){let e=/^data:([^;,]*)((?:;[^;,]*)*),(.*)$/is.exec(String(t||""));if(!e)return null;let r=e[1]||"application/octet-stream",n=e[2]||"",o=e[3]||"",i=/;base64/i.test(n);try{let a;if(i){let l=o.replace(/\s+/g,"");a=atob(l)}else a=decodeURIComponent(o);let s=new Uint8Array(a.length);for(let l=0;l<a.length;l+=1)s[l]=a.charCodeAt(l)&255;return new Blob([s],{type:r})}catch{return null}}function uh(t){let e=String(t||"").trim().toLowerCase();return!e||/^(utf-?8|utf8)$/.test(e)?"utf-8":/^utf-?16(le)?$/.test(e)?"utf-16le":/^utf-?16be$/.test(e)?"utf-16be":/^(gb2312|gbk|gb18030|cp936|x-gbk)$/.test(e)?"gb18030":/^(big5|big5-hkscs|cp950)$/.test(e)?"big5":/^(shift_jis|sjis|windows-31j|cp932)$/.test(e)?"shift_jis":/^(euc-kr|ks_c_5601-1987|cp949)$/.test(e)?"euc-kr":/^(iso-8859-1|latin1|windows-1252|cp1252)$/.test(e)?"windows-1252":e}function Kn(t,e,r=!1){return new TextDecoder(e,{fatal:r}).decode(t)}function Ig(t){let e=Kn(t.subarray(0,Math.min(t.length,512)),"windows-1252"),r=Cg.exec(e);return r&&(r[1]||r[2])||""}function en(t,{defaultEncoding:e="utf-8",sniffDeclaration:r=!0}={}){let n=t instanceof Uint8Array?t:new Uint8Array(t);if(n.length===0)return"";if(n[0]===239&&n[1]===187&&n[2]===191)return Kn(n.subarray(3),"utf-8");if(n[0]===255&&n[1]===254)return Kn(n.subarray(2),"utf-16le");if(n[0]===254&&n[1]===255)return Kn(n.subarray(2),"utf-16be");let o=e||"utf-8";if(r){let i=Ig(n);i&&(o=uh(i))}o=uh(o);try{return Kn(n,o,!0)}catch{try{return Kn(n,"utf-8",!0)}catch{return Kn(n,"utf-8",!1)}}}function ci(t){if(!t)return!1;let e=t.slice(0,4096);if(!e)return!1;let r=0;for(let n=0;n<e.length;n+=1){let o=e.charCodeAt(n);(o===65533||o===0||o<9||o>13&&o<32)&&(r+=1)}return r/e.length>.08}var Ng,Cg,Zn=mr(()=>{Ng={jpg:"image/jpeg",jpeg:"image/jpeg",jpe:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",avif:"image/avif",bmp:"image/bmp",tif:"image/tiff",tiff:"image/tiff",svg:"image/svg+xml",ico:"image/x-icon",jxl:"image/jxl"};Cg=/(?:encoding\s*=\s*["']([A-Za-z0-9._-]+)["'])|(?:charset\s*=\s*["']?([A-Za-z0-9._-]+))/i});function fh(t){return/^(https?:|mailto:|tel:)/i.test(t)}function Xs(t){return/^[a-z][a-z0-9+.-]*:/i.test(t)}function Mg(t,e){e&&!t.includes(e)&&t.push(e)}async function gh(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Jr(),i=Tn();try{let oe=function(c,k){let x=String(c||"").trim();if(!x||fh(x)||x.startsWith("//")||Xs(x))return null;let{path:J,fragment:se}=Jo(x),ce=J?kn(k,x):null,xe=ce?B.get(ce.toLowerCase()):void 0;return xe==null&&ce&&(xe=Y.get(Ar(ce).toLowerCase())),xe==null?null:{chapterIndex:xe,anchor:se}},a=await Qr(t),s;try{s=Gd(a)}catch{throw new Error("EPUB \u538B\u7F29\u5305\u5DF2\u635F\u574F\uFF0C\u65E0\u6CD5\u89E3\u538B\u3002")}let l=ph(s);if(l.names.length===0)throw new Error("EPUB \u538B\u7F29\u5305\u4E0D\u5305\u542B\u4EFB\u4F55\u6587\u4EF6\u3002");let d=l.get("META-INF/encryption.xml");if(d){let c=en(d.bytes);if(/<encrypteddata/i.test(c)&&/application\/(xhtml\+xml|epub\+zip)/i.test(c))throw new Error("\u8BE5 EPUB \u6587\u4EF6\u53D7 DRM \u4FDD\u62A4\uFF0C\u65E0\u6CD5\u6253\u5F00\u3002")}let f=l.get("META-INF/container.xml");if(!f){let c=l.names.find(k=>/container\.xml$/i.test(k));c&&(f=l.get(c))}if(!f)throw new Error("\u7F3A\u5C11 META-INF/container.xml\uFF0C\u4E0D\u662F\u6709\u6548\u7684 EPUB \u6587\u4EF6\u3002");let g=fo(en(f.bytes));if(!g)throw new Error("META-INF/container.xml \u683C\u5F0F\u9519\u8BEF\u3002");let u=Rt(g,"rootfile")[0],p=u?ot(u,"full-path"):"";if(!p)throw new Error("container.xml \u4E2D\u6CA1\u6709\u6307\u5B9A OPF \u5185\u5BB9\u6E05\u5355\u3002");let _=l.get(p)||l.get(kn("",p));if(!_)throw new Error(`\u627E\u4E0D\u5230 EPUB \u5185\u5BB9\u6E05\u5355\u6587\u4EF6\uFF1A${p}`);let N=go(_.name),y=fo(en(_.bytes));if(!y)throw new Error("EPUB \u5185\u5BB9\u6E05\u5355\uFF08OPF\uFF09\u683C\u5F0F\u9519\u8BEF\u3002");let w=tr(y,"metadata")||y,v=Rt(w,"title").map(c=>dt(c.textContent)).filter(Boolean),S=[];for(let c of Rt(w,"creator"))Mg(S,dt(c.textContent));let C=Rt(w,"language").map(c=>dt(c.textContent)).filter(Boolean),D=Rt(w,"meta").filter(c=>String(ot(c,"name")||"").toLowerCase()==="cover").map(c=>ot(c,"content")||"").find(Boolean)||"",I=tr(y,"manifest");if(!I)throw new Error("OPF \u5185\u5BB9\u6E05\u5355\u7F3A\u5C11 manifest \u5217\u8868\u3002");let b=new Map;for(let c of Rt(I,"item")){let k=ot(c,"id");if(!k||b.has(k))continue;let x=ot(c,"href")||"",J=kn(N,x);b.set(k,{id:k,href:x,path:J,mediaType:String(ot(c,"media-type")||"").toLowerCase(),properties:String(ot(c,"properties")||"").toLowerCase()})}let F=tr(y,"spine");if(!F)throw new Error("OPF \u5185\u5BB9\u6E05\u5355\u7F3A\u5C11 spine \u9605\u8BFB\u987A\u5E8F\u3002");let L=Rt(F,"itemref");if(L.length===0)throw new Error("EPUB \u7684\u9605\u8BFB\u987A\u5E8F\uFF08spine\uFF09\u4E3A\u7A7A\u3002");let z=[],B=new Map,Y=new Map;for(let c of L){let k=ot(c,"idref"),x=k?b.get(k):null;if(!x){o(`\u9605\u8BFB\u987A\u5E8F\u4E2D\u7684\u6761\u76EE\u201C${k||"\u672A\u77E5"}\u201D\u4E0D\u5728\u6E05\u5355\u4E2D\uFF0C\u5DF2\u8DF3\u8FC7\u3002`);continue}if(/\bnav\b/.test(x.properties))continue;if(!x.path){o(`\u7AE0\u8282\u6587\u4EF6\u201C${x.href||x.id}\u201D\u4F4D\u4E8E\u5916\u90E8\u7F51\u7EDC\uFF0C\u5DF2\u8DF3\u8FC7\u3002`);continue}let J=l.get(x.path);if(!J){o(`\u627E\u4E0D\u5230\u7AE0\u8282\u6587\u4EF6\uFF1A${x.path}`);continue}let se=x.mediaType||"",ce=Rg.has(se)||/\.(x?html?|htm)$/i.test(x.path),xe=se.startsWith("image/")||/\.(png|jpe?g|gif|webp|avif|bmp|tiff?|svg)$/i.test(x.path);if(!ce&&!xe){o(`\u4E0D\u652F\u6301\u7684\u7AE0\u8282\u7C7B\u578B\uFF08${se||"\u672A\u77E5"}\uFF09\uFF1A${x.path}`);continue}let ye=z.length;z.push({item:x,entry:J,isImage:xe,chapterIndex:ye}),B.set(x.path.toLowerCase(),ye);let $e=Ar(x.path).toLowerCase();Y.has($e)||Y.set($e,ye)}if(z.length===0)throw new Error("EPUB \u4E2D\u6CA1\u6709\u627E\u5230\u53EF\u663E\u793A\u7684\u7AE0\u8282\u5185\u5BB9\u3002");let ne=0,re=()=>`b${ne+=1}`,U=[];for(let c of z){let{item:k,entry:x,isImage:J,chapterIndex:se}=c;if(J){let je=k.mediaType.startsWith("image/")?k.mediaType:ea(k.path),Le=i.create(new Blob([x.bytes],{type:je}));U.push({id:`ch${se}`,title:"",blocks:[{id:re(),kind:"image",src:Le}]});continue}let ce=go(k.path),xe=je=>{let Le=String(je||"").trim();if(!Le)return null;if(/^data:/i.test(Le)){let wt=Sn(Le);return wt?{src:i.create(wt)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684\u5185\u5D4C\u56FE\u7247\u3002"),null)}if(/^(https?:)?\/\//i.test(Le))return o("\u5DF2\u8DF3\u8FC7\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\uFF08\u907F\u514D\u8DDF\u8E2A\u4E0E\u9690\u79C1\u6CC4\u9732\uFF09\u3002"),null;if(Xs(Le))return null;let vt=kn(ce,Le),at=vt?l.get(vt):null;if(!at)return o(`\u627E\u4E0D\u5230\u56FE\u7247\u6587\u4EF6\uFF1A${Ar(vt||Le)}`),null;let ve=ea(vt);return{src:i.create(new Blob([at.bytes],{type:ve}))}},ye=je=>{let Le=String(je||"").trim();if(!Le)return null;if(fh(Le))return{external:!0,href:Le};if(Le.startsWith("//")||Xs(Le))return null;let{path:vt,fragment:at}=Jo(Le);if(!vt)return{chapter:se,anchor:at};let ve=kn(ce,Le),wt=ve?B.get(ve.toLowerCase()):void 0;return wt==null&&ve&&(wt=Y.get(Ar(ve).toLowerCase())),wt==null?null:{chapter:wt,anchor:at}},$e="";try{$e=en(x.bytes)}catch{o(`\u7B2C ${se+1} \u7AE0\u7684\u7F16\u7801\u65E0\u6CD5\u8BC6\u522B\uFF0C\u5DF2\u5C3D\u91CF\u6309 UTF-8 \u8BFB\u53D6\u3002`)}let Me=fo($e),Je=Me&&(tr(Me,"body")||Me.documentElement)||null,et=Je?null:Zr($e),pe=Je||et?.body||et?.documentElement||null,ze=pe?Vn(pe,{nextId:re,warn:o,chapterIndex:se,resolveImage:xe,resolveLink:ye}):[];ze.length===0&&o(`\u7B2C ${se+1} \u7AE0\u6CA1\u6709\u53EF\u663E\u793A\u7684\u5185\u5BB9\u3002`),U.push({id:`ch${se}`,title:"",blocks:ze})}let K=[...b.values()].find(c=>/\bnav\b/.test(c.properties)&&c.path),te=ot(F,"toc"),O=te&&b.get(te)||[...b.values()].find(c=>c.mediaType==="application/x-dtbncx+xml"&&c.path)||null,ue=c=>{let k=l.get(c.path);if(!k)return o(`\u627E\u4E0D\u5230 EPUB \u5BFC\u822A\u6587\u4EF6\uFF1A${c.path}`),[];let x=en(k.bytes),J=fo(x)||Zr(x);if(!J)return o("\u65E0\u6CD5\u89E3\u6790 EPUB \u5BFC\u822A\u76EE\u5F55\u3002"),[];let se=Rt(J,"nav"),ce=se.find(et=>String(ot(et,"type")||ot(et,"epub:type")||"").toLowerCase().split(/\s+/).includes("toc"))||se[0]||null;if(!ce)return[];let xe=tr(ce,"ol")||tr(ce,"ul");if(!xe)return[];let ye=[],$e=go(c.path),Me=B.get(c.path.toLowerCase()),Je=(et,pe)=>{for(let ze of Array.from(et.children||[])){if(vr(ze)!=="li")continue;let je=null,Le=null;for(let vt of Array.from(ze.children||[])){let at=vr(vt);!je&&(at==="a"||at==="span")&&(je=vt),!Le&&(at==="ol"||at==="ul")&&(Le=vt)}if(je&&vr(je)==="a"){let vt=dt(je.textContent).slice(0,200),at=ot(je,"href")||"",ve=oe(at,$e);if(!ve&&at.startsWith("#")&&Me!=null){let{fragment:wt}=Jo(at);ve={chapterIndex:Me,anchor:wt}}vt&&ve&&ye.push({title:vt,chapterIndex:ve.chapterIndex,depth:pe,...ve.anchor?{anchor:ve.anchor}:{}})}Le&&Je(Le,pe+1)}};return Je(xe,0),ye},fe=c=>{let k=l.get(c.path);if(!k)return o(`\u627E\u4E0D\u5230 EPUB NCX \u76EE\u5F55\u6587\u4EF6\uFF1A${c.path}`),[];let x=en(k.bytes),J=fo(x)||Zr(x);if(!J)return o("\u65E0\u6CD5\u89E3\u6790 EPUB NCX \u76EE\u5F55\u3002"),[];let se=[],ce=go(c.path);for(let xe of Rt(J,"navpoint")){let ye=tr(xe,"navlabel"),$e=ye?tr(ye,"text"):tr(xe,"text"),Me=dt($e?.textContent||"").slice(0,200),Je=Array.from(xe.children||[]).find(ze=>vr(ze)==="content")||tr(xe,"content"),et=oe(ot(Je,"src")||"",ce);if(!Me||!et)continue;let pe=0;for(let ze=xe.parentNode;ze;ze=ze.parentNode)vr(ze)==="navpoint"&&(pe+=1);se.push({title:Me,chapterIndex:et.chapterIndex,depth:pe,...et.anchor?{anchor:et.anchor}:{}})}return se},Te=[];K&&(Te=ue(K),Te.length===0&&o("EPUB \u5BFC\u822A\u6587\u4EF6\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u5F55\u9879\u3002"));let ie=[];Te.length===0&&O&&(ie=fe(O));let Ae=Te.length>0?Te:ie;Ae.length===0&&o("\u672A\u627E\u5230 EPUB \u76EE\u5F55\uFF0C\u5DF2\u6309\u7AE0\u8282\u6807\u9898\u751F\u6210\u3002");let Ue=ta(U,Ae),ge="",ut=[...b.values()].find(c=>/\bcover-image\b/.test(c.properties)&&c.path);if(ut)ge=ut.path;else if(D&&b.get(D)?.path)ge=b.get(D).path;else{let c=tr(y,"guide");if(c){let k=Rt(c,"reference").find(x=>/\bcover\b/.test(String(ot(x,"type")||"").toLowerCase()));k&&(ge=kn(N,ot(k,"href")||"")||"")}}let Oe="";if(ge){let c=l.get(ge);if(c){let k=ea(ge);if(k.startsWith("image/"))Oe=i.create(new Blob([c.bytes],{type:k}));else if(/\.(x?html?|htm)$/i.test(ge)){let x=Zr(en(c.bytes)),J=qn(x?.body||x?.documentElement||x)[0],se=J&&(ot(J,"src")||ot(J,"xlink:href"))||"",ce=se?kn(go(ge),se):null,xe=ce?l.get(ce):null;xe&&(Oe=i.create(new Blob([xe.bytes],{type:ea(ce)})))}}}let h={title:v[0]||Yn(r),chapters:U,toc:Ue,warnings:n,dispose:()=>i.dispose()};return S.length>0&&(h.author=S.join(", ")),C.length>0&&(h.language=C[0]),Oe&&(h.cover=Oe),h}catch(a){throw i.dispose(),Nr(a,"\u65E0\u6CD5\u89E3\u6790 EPUB \u6587\u4EF6")}}var Rg,mh=mr(()=>{Ns();Gn();Qo();Zn();Rg=new Set(["application/xhtml+xml","text/html","application/xml","text/xml","text/xhtml"])});function Pg(t){return Ar(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u6863"}async function ra(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Jr(),i=Tn();try{let a=await Qr(t),s=en(a),l=Zr(s);if(!l)throw new Error("HTML \u6587\u4EF6\u683C\u5F0F\u9519\u8BEF\uFF0C\u65E0\u6CD5\u89E3\u6790\u3002");let d=l.body||l.documentElement;if(!d)throw new Error("HTML \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let f=0,u=Vn(d,{nextId:()=>`b${f+=1}`,warn:o,resolveImage:v=>{let S=String(v||"").trim();if(!S)return null;if(/^data:/i.test(S)){let C=Sn(S);return C?{src:i.create(C)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684\u5185\u5D4C\u56FE\u7247\u3002"),null)}return/^(https?:)?\/\//i.test(S)?(o("\u5DF2\u8DF3\u8FC7\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\uFF08\u907F\u514D\u8DDF\u8E2A\u4E0E\u9690\u79C1\u6CC4\u9732\uFF09\u3002"),null):(o("\u5DF2\u8DF3\u8FC7 HTML \u4E2D\u7684\u672C\u5730\u56FE\u7247\uFF08\u65E0\u6CD5\u5B9A\u4F4D\u56FE\u7247\u6587\u4EF6\uFF09\u3002"),null)},resolveLink:v=>{let S=String(v||"").trim();return S?/^(https?:\/\/|mailto:)/i.test(S)?{external:!0,href:S}:S.startsWith("#")?{chapter:0,anchor:S.slice(1)}:null:null}});if(u.length===0)throw new Error("HTML \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let p=tr(l,"title"),_=u.find(v=>v.kind==="heading"&&v.text),N=dt(p?.textContent||"")||_?.text||Pg(r),y=ot(l.documentElement,"lang")||"",P=[];for(let v of Rt(l,"meta"))if(String(ot(v,"name")||"").toLowerCase()==="author"){let S=dt(ot(v,"content")||"");S&&!P.includes(S)&&P.push(S)}let w={title:N,chapters:[{id:"ch0",title:N,blocks:u}],toc:[{title:N,chapterIndex:0,depth:0}],warnings:n,dispose:()=>i.dispose()};return y&&(w.language=y),P.length>0&&(w.author=P.join(", ")),w}catch(a){throw i.dispose(),Nr(a,"\u65E0\u6CD5\u89E3\u6790 HTML \u6587\u4EF6")}}var bh=mr(()=>{Gn();Qo();Zn()});function xh(t){return/[\u3000-\u303f\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uffef\uac00-\ud7af]/.test(t)}function vh(t){let e="";for(let r of t){let n=String(r).trim();if(!n)continue;if(!e){e=n;continue}let o=e[e.length-1],i=n[0];e+=xh(o)&&xh(i)?n:` ${n}`}return e}function Bg(t){let e=String(t||"").trim();if(!e||e.length>zg)return!1;if(Lg.test(e)||Dg.test(e))return!/[，,。；;]/.test(e);if(Fg.test(e)){let r=e.split(/\s+/).filter(Boolean).length;return!(r>14||/\.$/u.test(e)&&r>3)}return!1}function Vs(t){if(!t||t.length===0)throw new Error("\u6587\u672C\u6587\u4EF6\u5185\u5BB9\u4E3A\u7A7A\u3002");if(t[0]===239&&t[1]===187&&t[2]===191)return{text:new TextDecoder("utf-8").decode(t.subarray(3)),encoding:"utf-8"};if(t[0]===255&&t[1]===254)return{text:new TextDecoder("utf-16le").decode(t.subarray(2)),encoding:"utf-16le"};if(t[0]===254&&t[1]===255)return{text:new TextDecoder("utf-16be").decode(t.subarray(2)),encoding:"utf-16be"};let e=Math.min(t.length,4096),r=0,n=0;for(let i=0;i<e;i+=2)t[i]===0&&(r+=1),i+1<e&&t[i+1]===0&&(n+=1);let o=Math.ceil(e/2);if(o>4&&n/o>.35&&r/o<.05)return{text:new TextDecoder("utf-16le").decode(t),encoding:"utf-16le"};if(o>4&&r/o>.35&&n/o<.05)return{text:new TextDecoder("utf-16be").decode(t),encoding:"utf-16be"};try{return{text:new TextDecoder("utf-8",{fatal:!0}).decode(t),encoding:"utf-8"}}catch{}try{return{text:new TextDecoder("gb18030",{fatal:!0}).decode(t),encoding:"gb18030"}}catch{}return{text:new TextDecoder("utf-8").decode(t),encoding:"utf-8"}}function $g(t){let e=[],r=[],n=()=>{r.length>0&&(e.push(r),r=[])};for(let o of t)String(o).trim()?r.push(o):n();return n(),e}function Hg(t){let e=t.map(n=>n.trim()).filter(Boolean);return e.length<2?!1:e.filter(n=>/[。！？!?…"”’」』）)]$/.test(n)).length/e.length>=.5}function Ug(t){let e=t.map(o=>String(o)),r=$g(e);if(r.length>1)return r.map(o=>vh(o)).filter(Boolean);let n=e.map(o=>o.trim()).filter(Boolean);return n.length<=1||Hg(n)?n:r.map(o=>vh(o)).filter(Boolean)}function Wg(t,{fallbackTitle:e="\u6B63\u6587"}={}){let n=String(t||"").replace(/\r\n?/g,`
`).replace(/\u0000/g,"").split(`
`),o=[],i={title:"",lines:[],heading:""},a=()=>{(i.heading||i.lines.some(s=>s.trim()))&&o.push(i),i={title:"",lines:[],heading:""}};for(let s of n){if(Bg(s)){a();let l=s.trim();i={title:l,lines:[],heading:l};continue}i.lines.push(s)}return a(),o.length===0?[{title:e,lines:n,heading:""}]:o}function Ks(t,{nextId:e,title:r="\u6B63\u6587"}={}){let n=Wg(t,{fallbackTitle:r}),o=a=>a.lines.some(s=>String(s).trim()),i=[];for(let a=0;a<n.length;a+=1){if(o(n[a])){i.push(n[a]);continue}let s=a;for(;s+1<n.length&&!o(n[s+1]);)s+=1;if(s-a+1>=3){a=s;continue}i.push(...n.slice(a,s+1)),a=s}return n=i.length>0?i:n,n.map((a,s)=>{let l=[];a.heading&&l.push({id:e(),kind:"heading",level:1,html:jn(a.heading),text:dt(a.heading)});for(let d of Ug(a.lines))l.push({id:e(),kind:"paragraph",html:jn(d),text:d});return{id:`ch${s}`,title:a.title||r||`\u7B2C ${s+1} \u7AE0`,blocks:l}})}function jg(t){return Ar(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u672C"}async function Ys(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Jr();try{let i=await Qr(t),{text:a,encoding:s}=Vs(i);if(ci(a))throw new Error("\u6587\u672C\u6587\u4EF6\u5305\u542B\u5927\u91CF\u65E0\u6CD5\u8BC6\u522B\u7684\u5B57\u7B26\uFF0C\u53EF\u80FD\u4E0D\u662F\u7EAF\u6587\u672C\u6587\u4EF6\u3002");s==="gb18030"&&o("\u5DF2\u6309 GB18030 \u7F16\u7801\u8BFB\u53D6\u6587\u672C\uFF08\u975E UTF-8\uFF09\u3002");let l=jg(r),d=0,g=Ks(a,{nextId:()=>`b${d+=1}`,title:l});if(g.length===0||g.every(p=>p.blocks.length===0))throw new Error("\u6587\u672C\u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");g[0].title||(g[0].title=l);let u=g.map((p,_)=>({title:p.title,chapterIndex:_,depth:0}));return{title:l,chapters:g,toc:u,warnings:n,encoding:s,dispose:()=>{}}}catch(i){throw Nr(i,"\u65E0\u6CD5\u89E3\u6790\u6587\u672C\u6587\u4EF6")}}var Og,Lg,Dg,Fg,zg,di=mr(()=>{Gn();Zn();Og="[0-9\uFF10-\uFF19\u96F6\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u767E\u5343\u4E07\u4E24]",Lg=new RegExp(`^\\s*(\u7B2C\\s*${Og}+\\s*[\u7AE0\u7BC0\u8282\u56DE\u5377\u7BC7])(?:[\\s:\uFF1A\xB7\u3001.\uFF0E\u2014\u2013-].*)?$`),Dg=/^\s*(序章|楔子|引子|前言|序言|后记|後記|尾声|尾聲|终章|終章|番外(?:篇)?)(?:[\s:：·、.．—–-].*)?$/,Fg=/^\s*((?:chapter|part|book|section)\s+(?:[0-9]+|[ivxlcdm]{1,8}|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty))(?:[.:：\s—–-].*)?$/i,zg=72});function Xg(t){let e=String(t||"").trim();return e&&(/^(https?:\/\/|mailto:)/i.test(e)||e.startsWith("#"))?e:""}function Zs(t){let e=jn(String(t??"").trim()),r=[],n=o=>{let i=`\0${r.length}\0`;return r.push(o),i};return e=e.replace(/`([^`]+)`/g,(o,i)=>n(`<code>${i}</code>`)),e=e.replace(Gg,(o,i,a)=>{let s=Xg(a);return s?n(`<a href="${s}">${i}</a>`):i}),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/__([^_]+)__/g,"<strong>$1</strong>").replace(/~~([^~]+)~~/g,"<s>$1</s>").replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g,"$1<em>$2</em>").replace(/(^|[^_])_([^_\n]+)_(?!_)/g,"$1<em>$2</em>"),e=e.replace(/\u0000(\d+)\u0000/g,(o,i)=>r[Number(i)]??""),e}function Vg(t){return Ar(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u6863"}function na(t){return String(t).trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(e=>e.trim())}function Kg(t){if(!/\|/.test(t))return!1;let e=na(t);return e.length>0&&e.every(r=>/^:?-{3,}:?$/.test(r))}function wh(t,e){return!!e&&t.includes("|")&&Kg(e)&&na(t).length===na(e).length}function yh(t,e){return!!(/^\s{0,3}(#{1,6}\s|>|(?:```|~~~))/.test(t)||/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(t)||/^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/.test(t)||wh(t,e))}function Yg(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Jr(),i=Tn(),a=0,s={nextId:()=>`b${a+=1}`,warn:o,resolveLink:y=>{let P=String(y||"").trim();return P?/^(https?:\/\/|mailto:)/i.test(P)?{external:!0,href:P}:P.startsWith("#")?{chapter:0,anchor:P.slice(1)}:null:null}},l=[],d=[];function f(y){let P=String(y??""),w=[];return P=P.replace(qg,(v,S,C)=>{let E=dt(S);if(/^data:image\//i.test(C)){let D=Sn(C);if(D){let I=js(s,{src:i.create(D),alt:E});I&&w.push(I)}else o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684 Markdown \u5185\u5D4C\u56FE\u7247\u3002")}else/^https?:/i.test(C)?o("\u5DF2\u8DF3\u8FC7 Markdown \u4E2D\u7684\u5916\u90E8\u56FE\u7247\uFF08\u907F\u514D\u7F51\u7EDC\u8DDF\u8E2A\uFF09\u3002"):o("\u5DF2\u8DF3\u8FC7 Markdown \u4E2D\u7684\u672C\u5730\u56FE\u7247\uFF08\u65E0\u6CD5\u5B9A\u4F4D\u56FE\u7247\u6587\u4EF6\uFF09\u3002");return E?` ${E} `:" "}),{html:Zs(P),images:w}}function g(y,P,w={}){let{html:v,images:S}=f(P),C=si(s,y,v,w);C&&l.push(C);for(let E of S)l.push(E);return!!C}let u=String(t??"").replace(/\r\n?/g,`
`).replace(/\u0000/g,"").split(`
`),p=0;for(;p<u.length;){let y=u[p];if(!y.trim()){p+=1;continue}let P=/^\s*(`{3,}|~{3,})\s*([A-Za-z0-9_+#.-]*)\s*$/.exec(y);if(P){let E=P[1],D=[];p+=1;let I=new RegExp(`^\\s*${E[0]==="`"?"`":"~"}{${E.length},}\\s*$`);for(;p<u.length;){if(I.test(u[p])){p+=1;break}D.push(u[p]),p+=1}let b=Us(s,D.join(`
`));b&&l.push(b);continue}let w=/^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(y);if(w){g("heading",w[2],{level:w[1].length}),p+=1;continue}if(/^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/.test(y)){l.push(Gs(s)),p+=1;continue}if(wh(y,u[p+1])){let E=na(y);p+=2;let D=[];for(;p<u.length&&u[p].includes("|")&&u[p].trim();)D.push(na(u[p])),p+=1;let I=`<thead><tr>${E.map(L=>`<th>${Zs(L)}</th>`).join("")}</tr></thead>`,b=D.length>0?`<tbody>${D.map(L=>`<tr>${E.map((z,B)=>`<td>${Zs(L[B]||"")}</td>`).join("")}</tr>`).join("")}</tbody>`:"",F=Ws(s,`<table>${I}${b}</table>`);F&&l.push(F);continue}if(/^\s{0,3}>/.test(y)){let E=[];for(;p<u.length&&/^\s{0,3}>/.test(u[p]);)E.push(u[p].replace(/^\s{0,3}>\s?/,"")),p+=1;let D=[],I=[];for(let F of E){let L=f(F);L.html&&D.push(L.html),I.push(...L.images)}let b=si(s,"quote",D.join("<br>"));b&&l.push(b);for(let F of I)l.push(F);continue}if(/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(y)){for(;p<u.length;){let E=/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+(.*)$/.exec(u[p]);if(!E)break;for(g("list-item",E[1]),p+=1;p<u.length&&/^\s{2,}\S/.test(u[p])&&!/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(u[p])&&!yh(u[p],u[p+1]);)p+=1}continue}let v=[];for(;p<u.length&&u[p].trim()&&!yh(u[p],u[p+1]);)v.push(u[p]),p+=1;if(v.length===0){p+=1;continue}let S=[];for(let E of v){let D=/(?: {2,}|\\)$/.test(E),I=f(E.replace(/(?: {2,}|\\)$/,""));I.html&&S.push(D?`${I.html}<br>`:I.html),d.push(...I.images)}let C=si(s,"paragraph",S.join(" "));for(C&&l.push(C);d.length>0;)l.push(d.shift())}let N=l.find(y=>y.kind==="heading"&&y.text)?.text||Vg(r);if(l.length===0)throw i.dispose(),new Error("Markdown \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");return{title:N,chapters:[{id:"ch0",title:N,blocks:l}],toc:[{title:N,chapterIndex:0,depth:0}],warnings:n,dispose:()=>i.dispose()}}async function oa(t,e={}){try{let r=await Qr(t),{text:n}=Vs(r);return Yg(n,e)}catch(r){throw Nr(r,"\u65E0\u6CD5\u89E3\u6790 Markdown \u6587\u4EF6")}}var Gg,qg,_h=mr(()=>{Gn();Qo();Zn();di();Gg=/\[([^\]]+)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g,qg=/!\[([^\]]*)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g});var Sh=Ri((Zx,Th)=>{"use strict";function tn(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function kh(t,e){for(var r="",n=0,o=-1,i=0,a,s=0;s<=t.length;++s){if(s<t.length)a=t.charCodeAt(s);else{if(a===47)break;a=47}if(a===47){if(!(o===s-1||i===1))if(o!==s-1&&i===2){if(r.length<2||n!==2||r.charCodeAt(r.length-1)!==46||r.charCodeAt(r.length-2)!==46){if(r.length>2){var l=r.lastIndexOf("/");if(l!==r.length-1){l===-1?(r="",n=0):(r=r.slice(0,l),n=r.length-1-r.lastIndexOf("/")),o=s,i=0;continue}}else if(r.length===2||r.length===1){r="",n=0,o=s,i=0;continue}}e&&(r.length>0?r+="/..":r="..",n=2)}else r.length>0?r+="/"+t.slice(o+1,s):r=t.slice(o+1,s),n=s-o-1;o=s,i=0}else a===46&&i!==-1?++i:i=-1}return r}function Zg(t,e){var r=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+n:r+t+n:n}var mo={resolve:function(){for(var e="",r=!1,n,o=arguments.length-1;o>=-1&&!r;o--){var i;o>=0?i=arguments[o]:(n===void 0&&(n=process.cwd()),i=n),tn(i),i.length!==0&&(e=i+"/"+e,r=i.charCodeAt(0)===47)}return e=kh(e,!r),r?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(tn(e),e.length===0)return".";var r=e.charCodeAt(0)===47,n=e.charCodeAt(e.length-1)===47;return e=kh(e,!r),e.length===0&&!r&&(e="."),e.length>0&&n&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return tn(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,r=0;r<arguments.length;++r){var n=arguments[r];tn(n),n.length>0&&(e===void 0?e=n:e+="/"+n)}return e===void 0?".":mo.normalize(e)},relative:function(e,r){if(tn(e),tn(r),e===r||(e=mo.resolve(e),r=mo.resolve(r),e===r))return"";for(var n=1;n<e.length&&e.charCodeAt(n)===47;++n);for(var o=e.length,i=o-n,a=1;a<r.length&&r.charCodeAt(a)===47;++a);for(var s=r.length,l=s-a,d=i<l?i:l,f=-1,g=0;g<=d;++g){if(g===d){if(l>d){if(r.charCodeAt(a+g)===47)return r.slice(a+g+1);if(g===0)return r.slice(a+g)}else i>d&&(e.charCodeAt(n+g)===47?f=g:g===0&&(f=0));break}var u=e.charCodeAt(n+g),p=r.charCodeAt(a+g);if(u!==p)break;u===47&&(f=g)}var _="";for(g=n+f+1;g<=o;++g)(g===o||e.charCodeAt(g)===47)&&(_.length===0?_+="..":_+="/..");return _.length>0?_+r.slice(a+f):(a+=f,r.charCodeAt(a)===47&&++a,r.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(tn(e),e.length===0)return".";for(var r=e.charCodeAt(0),n=r===47,o=-1,i=!0,a=e.length-1;a>=1;--a)if(r=e.charCodeAt(a),r===47){if(!i){o=a;break}}else i=!1;return o===-1?n?"/":".":n&&o===1?"//":e.slice(0,o)},basename:function(e,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');tn(e);var n=0,o=-1,i=!0,a;if(r!==void 0&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var s=r.length-1,l=-1;for(a=e.length-1;a>=0;--a){var d=e.charCodeAt(a);if(d===47){if(!i){n=a+1;break}}else l===-1&&(i=!1,l=a+1),s>=0&&(d===r.charCodeAt(s)?--s===-1&&(o=a):(s=-1,o=l))}return n===o?o=l:o===-1&&(o=e.length),e.slice(n,o)}else{for(a=e.length-1;a>=0;--a)if(e.charCodeAt(a)===47){if(!i){n=a+1;break}}else o===-1&&(i=!1,o=a+1);return o===-1?"":e.slice(n,o)}},extname:function(e){tn(e);for(var r=-1,n=0,o=-1,i=!0,a=0,s=e.length-1;s>=0;--s){var l=e.charCodeAt(s);if(l===47){if(!i){n=s+1;break}continue}o===-1&&(i=!1,o=s+1),l===46?r===-1?r=s:a!==1&&(a=1):r!==-1&&(a=-1)}return r===-1||o===-1||a===0||a===1&&r===o-1&&r===n+1?"":e.slice(r,o)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return Zg("/",e)},parse:function(e){tn(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return r;var n=e.charCodeAt(0),o=n===47,i;o?(r.root="/",i=1):i=0;for(var a=-1,s=0,l=-1,d=!0,f=e.length-1,g=0;f>=i;--f){if(n=e.charCodeAt(f),n===47){if(!d){s=f+1;break}continue}l===-1&&(d=!1,l=f+1),n===46?a===-1?a=f:g!==1&&(g=1):a!==-1&&(g=-1)}return a===-1||l===-1||g===0||g===1&&a===l-1&&a===s+1?l!==-1&&(s===0&&o?r.base=r.name=e.slice(1,l):r.base=r.name=e.slice(s,l)):(s===0&&o?(r.name=e.slice(1,a),r.base=e.slice(1,l)):(r.name=e.slice(s,a),r.base=e.slice(s,l)),r.ext=e.slice(a,l)),s>0?r.dir=e.slice(0,s-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};mo.posix=mo;Th.exports=mo});var Dh=Ri((Qx,Qs)=>{"use strict";var bo=typeof Reflect=="object"?Reflect:null,Eh=bo&&typeof bo.apply=="function"?bo.apply:function(e,r,n){return Function.prototype.apply.call(e,r,n)},hi;bo&&typeof bo.ownKeys=="function"?hi=bo.ownKeys:Object.getOwnPropertySymbols?hi=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:hi=function(e){return Object.getOwnPropertyNames(e)};function Qg(t){console&&console.warn&&console.warn(t)}var Nh=Number.isNaN||function(e){return e!==e};function ht(){ht.init.call(this)}Qs.exports=ht;Qs.exports.once=rm;ht.EventEmitter=ht;ht.prototype._events=void 0;ht.prototype._eventsCount=0;ht.prototype._maxListeners=void 0;var Ah=10;function ui(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(ht,"defaultMaxListeners",{enumerable:!0,get:function(){return Ah},set:function(t){if(typeof t!="number"||t<0||Nh(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");Ah=t}});ht.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};ht.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||Nh(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function Ch(t){return t._maxListeners===void 0?ht.defaultMaxListeners:t._maxListeners}ht.prototype.getMaxListeners=function(){return Ch(this)};ht.prototype.emit=function(e){for(var r=[],n=1;n<arguments.length;n++)r.push(arguments[n]);var o=e==="error",i=this._events;if(i!==void 0)o=o&&i.error===void 0;else if(!o)return!1;if(o){var a;if(r.length>0&&(a=r[0]),a instanceof Error)throw a;var s=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var l=i[e];if(l===void 0)return!1;if(typeof l=="function")Eh(l,this,r);else for(var d=l.length,f=Oh(l,d),n=0;n<d;++n)Eh(f[n],this,r);return!0};function Ih(t,e,r,n){var o,i,a;if(ui(r),i=t._events,i===void 0?(i=t._events=Object.create(null),t._eventsCount=0):(i.newListener!==void 0&&(t.emit("newListener",e,r.listener?r.listener:r),i=t._events),a=i[e]),a===void 0)a=i[e]=r,++t._eventsCount;else if(typeof a=="function"?a=i[e]=n?[r,a]:[a,r]:n?a.unshift(r):a.push(r),o=Ch(t),o>0&&a.length>o&&!a.warned){a.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=t,s.type=e,s.count=a.length,Qg(s)}return t}ht.prototype.addListener=function(e,r){return Ih(this,e,r,!1)};ht.prototype.on=ht.prototype.addListener;ht.prototype.prependListener=function(e,r){return Ih(this,e,r,!0)};function Jg(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Rh(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},o=Jg.bind(n);return o.listener=r,n.wrapFn=o,o}ht.prototype.once=function(e,r){return ui(r),this.on(e,Rh(this,e,r)),this};ht.prototype.prependOnceListener=function(e,r){return ui(r),this.prependListener(e,Rh(this,e,r)),this};ht.prototype.removeListener=function(e,r){var n,o,i,a,s;if(ui(r),o=this._events,o===void 0)return this;if(n=o[e],n===void 0)return this;if(n===r||n.listener===r)--this._eventsCount===0?this._events=Object.create(null):(delete o[e],o.removeListener&&this.emit("removeListener",e,n.listener||r));else if(typeof n!="function"){for(i=-1,a=n.length-1;a>=0;a--)if(n[a]===r||n[a].listener===r){s=n[a].listener,i=a;break}if(i<0)return this;i===0?n.shift():em(n,i),n.length===1&&(o[e]=n[0]),o.removeListener!==void 0&&this.emit("removeListener",e,s||r)}return this};ht.prototype.off=ht.prototype.removeListener;ht.prototype.removeAllListeners=function(e){var r,n,o;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var i=Object.keys(n),a;for(o=0;o<i.length;++o)a=i[o],a!=="removeListener"&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(r=n[e],typeof r=="function")this.removeListener(e,r);else if(r!==void 0)for(o=r.length-1;o>=0;o--)this.removeListener(e,r[o]);return this};function Mh(t,e,r){var n=t._events;if(n===void 0)return[];var o=n[e];return o===void 0?[]:typeof o=="function"?r?[o.listener||o]:[o]:r?tm(o):Oh(o,o.length)}ht.prototype.listeners=function(e){return Mh(this,e,!0)};ht.prototype.rawListeners=function(e){return Mh(this,e,!1)};ht.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):Ph.call(t,e)};ht.prototype.listenerCount=Ph;function Ph(t){var e=this._events;if(e!==void 0){var r=e[t];if(typeof r=="function")return 1;if(r!==void 0)return r.length}return 0}ht.prototype.eventNames=function(){return this._eventsCount>0?hi(this._events):[]};function Oh(t,e){for(var r=new Array(e),n=0;n<e;++n)r[n]=t[n];return r}function em(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function tm(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}function rm(t,e){return new Promise(function(r,n){function o(a){t.removeListener(e,i),n(a)}function i(){typeof t.removeListener=="function"&&t.removeListener("error",o),r([].slice.call(arguments))}Lh(t,e,i,{once:!0}),e!=="error"&&nm(t,o,{once:!0})})}function nm(t,e,r){typeof t.on=="function"&&Lh(t,"error",e,r)}function Lh(t,e,r,n){if(typeof t.on=="function")n.once?t.once(e,r):t.on(e,r);else if(typeof t.addEventListener=="function")t.addEventListener(e,function o(i){n.once&&t.removeEventListener(e,o),r(i)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}});var Fh=Ri(pi=>{(function(t){t.parser=function(h,c){return new r(h,c)},t.SAXParser=r,t.SAXStream=f,t.createStream=l,t.MAX_BUFFER_LENGTH=64*1024;var e=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];t.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function r(h,c){if(!(this instanceof r))return new r(h,c);var k=this;o(k),k.q=k.c="",k.bufferCheckPosition=t.MAX_BUFFER_LENGTH,k.encoding=null,k.opt=c||{},k.opt.lowercase=k.opt.lowercase||k.opt.lowercasetags,k.looseCase=k.opt.lowercase?"toLowerCase":"toUpperCase",k.opt.maxEntityCount=k.opt.maxEntityCount||512,k.opt.maxEntityDepth=k.opt.maxEntityDepth||4,k.entityCount=k.entityDepth=0,k.tags=[],k.closed=k.closedRoot=k.sawRoot=!1,k.tag=k.error=null,k.strict=!!h,k.noscript=!!(h||k.opt.noscript),k.state=b.BEGIN,k.strictEntities=k.opt.strictEntities,k.ENTITIES=k.strictEntities?Object.create(t.XML_ENTITIES):Object.create(t.ENTITIES),k.attribList=[],k.opt.xmlns&&(k.ns=Object.create(N)),k.opt.unquotedAttributeValues===void 0&&(k.opt.unquotedAttributeValues=!h),k.trackPosition=k.opt.position!==!1,k.trackPosition&&(k.position=k.line=k.column=0),L(k,"onready")}Object.create||(Object.create=function(h){function c(){}c.prototype=h;var k=new c;return k}),Object.keys||(Object.keys=function(h){var c=[];for(var k in h)h.hasOwnProperty(k)&&c.push(k);return c});function n(h){for(var c=Math.max(t.MAX_BUFFER_LENGTH,10),k=0,x=0,J=e.length;x<J;x++){var se=h[e[x]].length;if(se>c)switch(e[x]){case"textNode":oe(h);break;case"cdata":re(h,"oncdata",h.cdata),h.cdata="";break;case"script":re(h,"onscript",h.script),h.script="";break;default:K(h,"Max buffer length exceeded: "+e[x])}k=Math.max(k,se)}var ce=t.MAX_BUFFER_LENGTH-k;h.bufferCheckPosition=ce+h.position}function o(h){for(var c=0,k=e.length;c<k;c++)h[e[c]]=""}function i(h){oe(h),h.cdata!==""&&(re(h,"oncdata",h.cdata),h.cdata=""),h.script!==""&&(re(h,"onscript",h.script),h.script="")}r.prototype={end:function(){te(this)},write:ft,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){i(this)}};var a;try{a=require("stream").Stream}catch{a=function(){}}a||(a=function(){});var s=t.EVENTS.filter(function(h){return h!=="error"&&h!=="end"});function l(h,c){return new f(h,c)}function d(h,c){if(h.length>=2){if(h[0]===255&&h[1]===254)return"utf-16le";if(h[0]===254&&h[1]===255)return"utf-16be"}return h.length>=3&&h[0]===239&&h[1]===187&&h[2]===191?"utf8":h.length>=4?h[0]===60&&h[1]===0&&h[2]===63&&h[3]===0?"utf-16le":h[0]===0&&h[1]===60&&h[2]===0&&h[3]===63?"utf-16be":"utf8":c?"utf8":null}function f(h,c){if(!(this instanceof f))return new f(h,c);a.apply(this),this._parser=new r(h,c),this.writable=!0,this.readable=!0;var k=this;this._parser.onend=function(){k.emit("end")},this._parser.onerror=function(x){k.emit("error",x),k._parser.error=null},this._decoder=null,this._decoderBuffer=null,s.forEach(function(x){Object.defineProperty(k,"on"+x,{get:function(){return k._parser["on"+x]},set:function(J){if(!J)return k.removeAllListeners(x),k._parser["on"+x]=J,J;k.on(x,J)},enumerable:!0,configurable:!1})})}f.prototype=Object.create(a.prototype,{constructor:{value:f}}),f.prototype._decodeBuffer=function(h,c){if(this._decoderBuffer&&(h=Buffer.concat([this._decoderBuffer,h]),this._decoderBuffer=null),!this._decoder){var k=d(h,c);if(!k)return this._decoderBuffer=h,"";this._parser.encoding=k,this._decoder=new TextDecoder(k)}return this._decoder.decode(h,{stream:!c})},f.prototype.write=function(h){if(typeof Buffer=="function"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(h))h=this._decodeBuffer(h,!1);else if(this._decoderBuffer){var c=this._decodeBuffer(Buffer.alloc(0),!0);c&&(this._parser.write(c),this.emit("data",c))}return this._parser.write(h.toString()),this.emit("data",h),!0},f.prototype.end=function(h){if(h&&h.length&&this.write(h),this._decoderBuffer){var c=this._decodeBuffer(Buffer.alloc(0),!0);c&&(this._parser.write(c),this.emit("data",c))}else if(this._decoder){var k=this._decoder.decode();k&&(this._parser.write(k),this.emit("data",k))}return this._parser.end(),!0},f.prototype.on=function(h,c){var k=this;return!k._parser["on"+h]&&s.indexOf(h)!==-1&&(k._parser["on"+h]=function(){var x=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);x.splice(0,0,h),k.emit.apply(k,x)}),a.prototype.on.call(k,h,c)};var g=/^\[CDATA\[$/i,u=/^DOCTYPE$/i,p="http://www.w3.org/XML/1998/namespace",_="http://www.w3.org/2000/xmlns/",N={xml:p,xmlns:_},y=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,P=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,w=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,v=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function S(h){return h===" "||h===`
`||h==="\r"||h==="	"}function C(h){return h==='"'||h==="'"}function E(h){return h===">"||S(h)}function D(h,c){return h.test(c)}function I(h,c){return!D(h,c)}var b=0;t.STATE={BEGIN:b++,BEGIN_WHITESPACE:b++,TEXT:b++,TEXT_ENTITY:b++,OPEN_WAKA:b++,SGML_DECL:b++,SGML_DECL_QUOTED:b++,DOCTYPE:b++,DOCTYPE_QUOTED:b++,DOCTYPE_DTD:b++,DOCTYPE_DTD_QUOTED:b++,COMMENT_STARTING:b++,COMMENT:b++,COMMENT_ENDING:b++,COMMENT_ENDED:b++,CDATA:b++,CDATA_ENDING:b++,CDATA_ENDING_2:b++,PROC_INST:b++,PROC_INST_BODY:b++,PROC_INST_ENDING:b++,OPEN_TAG:b++,OPEN_TAG_SLASH:b++,ATTRIB:b++,ATTRIB_NAME:b++,ATTRIB_NAME_SAW_WHITE:b++,ATTRIB_VALUE:b++,ATTRIB_VALUE_QUOTED:b++,ATTRIB_VALUE_CLOSED:b++,ATTRIB_VALUE_UNQUOTED:b++,ATTRIB_VALUE_ENTITY_Q:b++,ATTRIB_VALUE_ENTITY_U:b++,CLOSE_TAG:b++,CLOSE_TAG_SAW_WHITE:b++,SCRIPT:b++,SCRIPT_ENDING:b++},t.XML_ENTITIES=Object.assign(Object.create(null),{amp:"&",gt:">",lt:"<",quot:'"',apos:"'"}),t.ENTITIES=Object.assign(Object.create(null),{amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830}),Object.keys(t.ENTITIES).forEach(function(h){var c=t.ENTITIES[h],k=typeof c=="number"?String.fromCharCode(c):c;t.ENTITIES[h]=k});for(var F in t.STATE)t.STATE[t.STATE[F]]=F;b=t.STATE;function L(h,c,k){h[c]&&h[c](k)}function z(h){var c=h&&h.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);return c?c[2]:null}function B(h){return h?h.toLowerCase().replace(/[^a-z0-9]/g,""):null}function Y(h,c){let k=B(h),x=B(c);return!k||!x?!0:x==="utf16"?k==="utf16le"||k==="utf16be":k===x}function ne(h,c){if(!(!h.strict||!h.encoding||!c||c.name!=="xml")){var k=z(c.body);k&&!Y(h.encoding,k)&&O(h,"XML declaration encoding "+k+" does not match detected stream encoding "+h.encoding.toUpperCase())}}function re(h,c,k){h.textNode&&oe(h),L(h,c,k)}function oe(h){h.textNode=U(h.opt,h.textNode),h.textNode&&L(h,"ontext",h.textNode),h.textNode=""}function U(h,c){return h.trim&&(c=c.trim()),h.normalize&&(c=c.replace(/\s+/g," ")),c}function K(h,c){return oe(h),h.trackPosition&&(c+=`
Line: `+h.line+`
Column: `+h.column+`
Char: `+h.c),c=new Error(c),h.error=c,L(h,"onerror",c),h}function te(h){return h.sawRoot&&!h.closedRoot&&O(h,"Unclosed root tag"),h.state!==b.BEGIN&&h.state!==b.BEGIN_WHITESPACE&&h.state!==b.TEXT&&K(h,"Unexpected end"),oe(h),h.c="",h.closed=!0,L(h,"onend"),r.call(h,h.strict,h.opt),h}function O(h,c){if(typeof h!="object"||!(h instanceof r))throw new Error("bad call to strictFail");h.strict&&K(h,c)}function ue(h){h.strict||(h.tagName=h.tagName[h.looseCase]());var c=h.tags[h.tags.length-1]||h,k=h.tag={name:h.tagName,attributes:{}};h.opt.xmlns&&(k.ns=c.ns),h.attribList.length=0,re(h,"onopentagstart",k)}function fe(h,c){var k=h.indexOf(":"),x=k<0?["",h]:h.split(":"),J=x[0],se=x[1];return c&&h==="xmlns"&&(J="xmlns",se=""),{prefix:J,local:se}}function Te(h){if(h.strict||(h.attribName=h.attribName[h.looseCase]()),h.attribList.indexOf(h.attribName)!==-1||h.tag.attributes.hasOwnProperty(h.attribName)){h.attribName=h.attribValue="";return}if(h.opt.xmlns){var c=fe(h.attribName,!0),k=c.prefix,x=c.local;if(k==="xmlns")if(x==="xml"&&h.attribValue!==p)O(h,"xml: prefix must be bound to "+p+`
Actual: `+h.attribValue);else if(x==="xmlns"&&h.attribValue!==_)O(h,"xmlns: prefix must be bound to "+_+`
Actual: `+h.attribValue);else{var J=h.tag,se=h.tags[h.tags.length-1]||h;J.ns===se.ns&&(J.ns=Object.create(se.ns)),J.ns[x]=h.attribValue}h.attribList.push([h.attribName,h.attribValue])}else h.tag.attributes[h.attribName]=h.attribValue,re(h,"onattribute",{name:h.attribName,value:h.attribValue});h.attribName=h.attribValue=""}function ie(h,c){if(h.opt.xmlns){var k=h.tag,x=fe(h.tagName);k.prefix=x.prefix,k.local=x.local,k.uri=k.ns[x.prefix]||"",k.prefix&&!k.uri&&(O(h,"Unbound namespace prefix: "+JSON.stringify(h.tagName)),k.uri=x.prefix);var J=h.tags[h.tags.length-1]||h;k.ns&&J.ns!==k.ns&&Object.keys(k.ns).forEach(function(je){re(h,"onopennamespace",{prefix:je,uri:k.ns[je]})});for(var se=0,ce=h.attribList.length;se<ce;se++){var xe=h.attribList[se],ye=xe[0],$e=xe[1],Me=fe(ye,!0),Je=Me.prefix,et=Me.local,pe=Je===""?"":k.ns[Je]||"",ze={name:ye,value:$e,prefix:Je,local:et,uri:pe};Je&&Je!=="xmlns"&&!pe&&(O(h,"Unbound namespace prefix: "+JSON.stringify(Je)),ze.uri=Je),h.tag.attributes[ye]=ze,re(h,"onattribute",ze)}h.attribList.length=0}h.tag.isSelfClosing=!!c,h.sawRoot=!0,h.tags.push(h.tag),re(h,"onopentag",h.tag),c||(!h.noscript&&h.tagName.toLowerCase()==="script"?h.state=b.SCRIPT:h.state=b.TEXT,h.tag=null,h.tagName=""),h.attribName=h.attribValue="",h.attribList.length=0}function Ae(h){if(!h.tagName){O(h,"Weird empty close tag."),h.textNode+="</>",h.state=b.TEXT;return}if(h.script){if(h.tagName!=="script"){h.script+="</"+h.tagName+">",h.tagName="",h.state=b.SCRIPT;return}re(h,"onscript",h.script),h.script=""}var c=h.tags.length,k=h.tagName;h.strict||(k=k[h.looseCase]());for(var x=k;c--;){var J=h.tags[c];if(J.name!==x)O(h,"Unexpected close tag");else break}if(c<0){O(h,"Unmatched closing tag: "+h.tagName),h.textNode+="</"+h.tagName+">",h.state=b.TEXT;return}h.tagName=k;for(var se=h.tags.length;se-- >c;){var ce=h.tag=h.tags.pop();h.tagName=h.tag.name,re(h,"onclosetag",h.tagName);var xe={};for(var ye in ce.ns)xe[ye]=ce.ns[ye];var $e=h.tags[h.tags.length-1]||h;h.opt.xmlns&&ce.ns!==$e.ns&&Object.keys(ce.ns).forEach(function(Me){var Je=ce.ns[Me];re(h,"onclosenamespace",{prefix:Me,uri:Je})})}c===0&&(h.closedRoot=!0),h.tagName=h.attribValue=h.attribName="",h.attribList.length=0,h.state=b.TEXT}function Ue(h){var c=h.entity,k=c.toLowerCase(),x,J="";return h.ENTITIES[c]?h.ENTITIES[c]:h.ENTITIES[k]?h.ENTITIES[k]:(c=k,c.charAt(0)==="#"&&(c.charAt(1)==="x"?(c=c.slice(2),x=parseInt(c,16),J=x.toString(16)):(c=c.slice(1),x=parseInt(c,10),J=x.toString(10))),c=c.replace(/^0+/,""),isNaN(x)||J.toLowerCase()!==c||x<0||x>1114111||!ge(x)?(O(h,"Invalid character entity"),"&"+h.entity+";"):String.fromCodePoint(x))}function ge(h){return h===9||h===10||h===13||h>=32&&h<=55295||h>=57344&&h<=65533||h>=65536&&h<=1114111}function ut(h,c){c==="<"?(h.state=b.OPEN_WAKA,h.startTagPosition=h.position):S(c)||(O(h,"Non-whitespace before first tag."),h.textNode=c,h.state=b.TEXT)}function Oe(h,c){var k="";return c<h.length&&(k=h.charAt(c)),k}function ft(h){var c=this;if(this.error)throw this.error;if(c.closed)return K(c,"Cannot write after close. Assign an onready handler.");if(h===null)return te(c);typeof h=="object"&&(h=h.toString());for(var k=0,x="";x=Oe(h,k++),c.c=x,!!x;)switch(c.trackPosition&&(c.position++,x===`
`?(c.line++,c.column=0):c.column++),c.state){case b.BEGIN:if(c.state=b.BEGIN_WHITESPACE,x==="\uFEFF")continue;ut(c,x);continue;case b.BEGIN_WHITESPACE:ut(c,x);continue;case b.TEXT:if(c.sawRoot&&!c.closedRoot){for(var se=k-1;x&&x!=="<"&&x!=="&";)x=Oe(h,k++),x&&c.trackPosition&&(c.position++,x===`
`?(c.line++,c.column=0):c.column++);c.textNode+=h.substring(se,k-1)}x==="<"&&!(c.sawRoot&&c.closedRoot&&!c.strict)?(c.state=b.OPEN_WAKA,c.startTagPosition=c.position):(!S(x)&&(!c.sawRoot||c.closedRoot)&&O(c,"Text data outside of root node."),x==="&"?c.state=b.TEXT_ENTITY:c.textNode+=x);continue;case b.SCRIPT:x==="<"?c.state=b.SCRIPT_ENDING:c.script+=x;continue;case b.SCRIPT_ENDING:x==="/"?c.state=b.CLOSE_TAG:(c.script+="<"+x,c.state=b.SCRIPT);continue;case b.OPEN_WAKA:if(x==="!")c.state=b.SGML_DECL,c.sgmlDecl="";else if(!S(x))if(D(y,x))c.state=b.OPEN_TAG,c.tagName=x;else if(x==="/")c.state=b.CLOSE_TAG,c.tagName="";else if(x==="?")c.state=b.PROC_INST,c.procInstName=c.procInstBody="";else{if(O(c,"Unencoded <"),c.startTagPosition+1<c.position){var J=c.position-c.startTagPosition;x=new Array(J).join(" ")+x}c.textNode+="<"+x,c.state=b.TEXT}continue;case b.SGML_DECL:if(c.sgmlDecl+x==="--"){c.state=b.COMMENT,c.comment="",c.sgmlDecl="";continue}c.doctype&&c.doctype!==!0&&c.sgmlDecl?(c.state=b.DOCTYPE_DTD,c.doctype+="<!"+c.sgmlDecl+x,c.sgmlDecl=""):g.test(c.sgmlDecl+x)?(re(c,"onopencdata"),c.state=b.CDATA,c.sgmlDecl="",c.cdata=""):u.test(c.sgmlDecl+x)?(c.state=b.DOCTYPE,(c.doctype||c.sawRoot)&&O(c,"Inappropriately located doctype declaration"),c.doctype="",c.sgmlDecl=""):x===">"?(re(c,"onsgmldeclaration",c.sgmlDecl),c.sgmlDecl="",c.state=b.TEXT):(C(x)&&(c.state=b.SGML_DECL_QUOTED),c.sgmlDecl+=x);continue;case b.SGML_DECL_QUOTED:x===c.q&&(c.state=b.SGML_DECL,c.q=""),c.sgmlDecl+=x;continue;case b.DOCTYPE:x===">"?(c.state=b.TEXT,re(c,"ondoctype",c.doctype),c.doctype=!0):(c.doctype+=x,x==="["?c.state=b.DOCTYPE_DTD:C(x)&&(c.state=b.DOCTYPE_QUOTED,c.q=x));continue;case b.DOCTYPE_QUOTED:c.doctype+=x,x===c.q&&(c.q="",c.state=b.DOCTYPE);continue;case b.DOCTYPE_DTD:x==="]"?(c.doctype+=x,c.state=b.DOCTYPE):x==="<"?(c.state=b.OPEN_WAKA,c.startTagPosition=c.position):C(x)?(c.doctype+=x,c.state=b.DOCTYPE_DTD_QUOTED,c.q=x):c.doctype+=x;continue;case b.DOCTYPE_DTD_QUOTED:c.doctype+=x,x===c.q&&(c.state=b.DOCTYPE_DTD,c.q="");continue;case b.COMMENT:x==="-"?c.state=b.COMMENT_ENDING:c.comment+=x;continue;case b.COMMENT_ENDING:x==="-"?(c.state=b.COMMENT_ENDED,c.comment=U(c.opt,c.comment),c.comment&&re(c,"oncomment",c.comment),c.comment=""):(c.comment+="-"+x,c.state=b.COMMENT);continue;case b.COMMENT_ENDED:x!==">"?(O(c,"Malformed comment"),c.comment+="--"+x,c.state=b.COMMENT):c.doctype&&c.doctype!==!0?c.state=b.DOCTYPE_DTD:c.state=b.TEXT;continue;case b.CDATA:for(var se=k-1;x&&x!=="]";)x=Oe(h,k++),x&&c.trackPosition&&(c.position++,x===`
`?(c.line++,c.column=0):c.column++);c.cdata+=h.substring(se,k-1),x==="]"&&(c.state=b.CDATA_ENDING);continue;case b.CDATA_ENDING:x==="]"?c.state=b.CDATA_ENDING_2:(c.cdata+="]"+x,c.state=b.CDATA);continue;case b.CDATA_ENDING_2:x===">"?(c.cdata&&re(c,"oncdata",c.cdata),re(c,"onclosecdata"),c.cdata="",c.state=b.TEXT):x==="]"?c.cdata+="]":(c.cdata+="]]"+x,c.state=b.CDATA);continue;case b.PROC_INST:x==="?"?c.state=b.PROC_INST_ENDING:S(x)?c.state=b.PROC_INST_BODY:c.procInstName+=x;continue;case b.PROC_INST_BODY:if(!c.procInstBody&&S(x))continue;x==="?"?c.state=b.PROC_INST_ENDING:c.procInstBody+=x;continue;case b.PROC_INST_ENDING:if(x===">"){let $e={name:c.procInstName,body:c.procInstBody};ne(c,$e),re(c,"onprocessinginstruction",$e),c.procInstName=c.procInstBody="",c.state=b.TEXT}else c.procInstBody+="?"+x,c.state=b.PROC_INST_BODY;continue;case b.OPEN_TAG:D(P,x)?c.tagName+=x:(ue(c),x===">"?ie(c):x==="/"?c.state=b.OPEN_TAG_SLASH:(S(x)||O(c,"Invalid character in tag name"),c.state=b.ATTRIB));continue;case b.OPEN_TAG_SLASH:x===">"?(ie(c,!0),Ae(c)):(O(c,"Forward-slash in opening tag not followed by >"),c.state=b.ATTRIB);continue;case b.ATTRIB:if(S(x))continue;x===">"?ie(c):x==="/"?c.state=b.OPEN_TAG_SLASH:D(y,x)?(c.attribName=x,c.attribValue="",c.state=b.ATTRIB_NAME):O(c,"Invalid attribute name");continue;case b.ATTRIB_NAME:x==="="?c.state=b.ATTRIB_VALUE:x===">"?(O(c,"Attribute without value"),c.attribValue=c.attribName,Te(c),ie(c)):S(x)?c.state=b.ATTRIB_NAME_SAW_WHITE:D(P,x)?c.attribName+=x:O(c,"Invalid attribute name");continue;case b.ATTRIB_NAME_SAW_WHITE:if(x==="=")c.state=b.ATTRIB_VALUE;else{if(S(x))continue;O(c,"Attribute without value"),c.tag.attributes[c.attribName]="",c.attribValue="",re(c,"onattribute",{name:c.attribName,value:""}),c.attribName="",x===">"?ie(c):D(y,x)?(c.attribName=x,c.state=b.ATTRIB_NAME):(O(c,"Invalid attribute name"),c.state=b.ATTRIB)}continue;case b.ATTRIB_VALUE:if(S(x))continue;C(x)?(c.q=x,c.state=b.ATTRIB_VALUE_QUOTED):(c.opt.unquotedAttributeValues||K(c,"Unquoted attribute value"),c.state=b.ATTRIB_VALUE_UNQUOTED,c.attribValue=x);continue;case b.ATTRIB_VALUE_QUOTED:if(x!==c.q){x==="&"?c.state=b.ATTRIB_VALUE_ENTITY_Q:c.attribValue+=x;continue}Te(c),c.q="",c.state=b.ATTRIB_VALUE_CLOSED;continue;case b.ATTRIB_VALUE_CLOSED:S(x)?c.state=b.ATTRIB:x===">"?ie(c):x==="/"?c.state=b.OPEN_TAG_SLASH:D(y,x)?(O(c,"No whitespace between attributes"),c.attribName=x,c.attribValue="",c.state=b.ATTRIB_NAME):O(c,"Invalid attribute name");continue;case b.ATTRIB_VALUE_UNQUOTED:if(!E(x)){x==="&"?c.state=b.ATTRIB_VALUE_ENTITY_U:c.attribValue+=x;continue}Te(c),x===">"?ie(c):c.state=b.ATTRIB;continue;case b.CLOSE_TAG:if(c.tagName)x===">"?Ae(c):D(P,x)?c.tagName+=x:c.script?(c.script+="</"+c.tagName+x,c.tagName="",c.state=b.SCRIPT):(S(x)||O(c,"Invalid tagname in closing tag"),c.state=b.CLOSE_TAG_SAW_WHITE);else{if(S(x))continue;I(y,x)?c.script?(c.script+="</"+x,c.state=b.SCRIPT):O(c,"Invalid tagname in closing tag."):c.tagName=x}continue;case b.CLOSE_TAG_SAW_WHITE:if(S(x))continue;x===">"?Ae(c):O(c,"Invalid characters in closing tag");continue;case b.TEXT_ENTITY:case b.ATTRIB_VALUE_ENTITY_Q:case b.ATTRIB_VALUE_ENTITY_U:var ce,xe;switch(c.state){case b.TEXT_ENTITY:ce=b.TEXT,xe="textNode";break;case b.ATTRIB_VALUE_ENTITY_Q:ce=b.ATTRIB_VALUE_QUOTED,xe="attribValue";break;case b.ATTRIB_VALUE_ENTITY_U:ce=b.ATTRIB_VALUE_UNQUOTED,xe="attribValue";break}if(x===";"){var ye=Ue(c);c.opt.unparsedEntities&&!Object.values(t.XML_ENTITIES).includes(ye)?((c.entityCount+=1)>c.opt.maxEntityCount&&K(c,"Parsed entity count exceeds max entity count"),(c.entityDepth+=1)>c.opt.maxEntityDepth&&K(c,"Parsed entity depth exceeds max entity depth"),c.entity="",c.state=ce,c.write(ye),c.entityDepth-=1):(c[xe]+=ye,c.entity="",c.state=ce)}else D(c.entity.length?v:w,x)?c.entity+=x:(O(c,"Invalid character in entity name"),c[xe]+="&"+c.entity+x,c.entity="",c.state=ce);continue;default:throw new Error(c,"Unknown state: "+c.state)}return c.position>=c.bufferCheckPosition&&n(c),c}String.fromCodePoint||(function(){var h=String.fromCharCode,c=Math.floor,k=function(){var x=16384,J=[],se,ce,xe=-1,ye=arguments.length;if(!ye)return"";for(var $e="";++xe<ye;){var Me=Number(arguments[xe]);if(!isFinite(Me)||Me<0||Me>1114111||c(Me)!==Me)throw RangeError("Invalid code point: "+Me);Me<=65535?J.push(Me):(Me-=65536,se=(Me>>10)+55296,ce=Me%1024+56320,J.push(se,ce)),(xe+1===ye||J.length>x)&&($e+=h.apply(null,J),J.length=0)}return $e};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:k,configurable:!0,writable:!0}):String.fromCodePoint=k})()})(typeof pi>"u"?pi.sax={}:pi)});function im(t){return t.charCodeAt(0)===65279?t.slice(1):t}function sm(t){return t.toLowerCase()}function lm(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===0}function fi(t,e,r){for(let n of t)e=n(e,r);return e}function xo(t,e,r){let n=Object.create(null);n.value=r,n.writable=!0,n.enumerable=!0,n.configurable=!0,Object.defineProperty(t,e,n)}function cm(t,e){let r={};return typeof e=="object"&&(r=e),new Js(r).parseStringPromise(t)}async function Hh(t,e={}){return await cm(t,e)}var vo,Bh,$h,om,am,Cr,zh,Js,Uh=mr(()=>{vo=Mt(Sh(),1),Bh=Mt(Dh(),1),$h=Mt(Fh(),1),om=Object.defineProperty,am=(t,e,r)=>e in t?om(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Cr=(t,e,r)=>am(t,typeof e!="symbol"?e+"":e,r);zh={.1:{explicitCharkey:!1,trim:!0,normalize:!0,normalizeTags:!1,attrkey:"@",charkey:"#",explicitArray:!1,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!1,validator:null,xmlns:!1,explicitChildren:!1,childkey:"@@",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,emptyTag:""},.2:{explicitCharkey:!1,trim:!1,normalize:!1,normalizeTags:!1,attrkey:"$",charkey:"_",explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!0,validator:null,xmlns:!1,explicitChildren:!1,preserveChildrenOrder:!1,childkey:"$$",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,rootName:"root",xmldec:{version:"1.0",encoding:"UTF-8",standalone:!0},doctype:null,renderOpts:{pretty:!0,indent:"  ",newline:`
`},headless:!1,chunkSize:1e4,emptyTag:"",cdata:!1}};Js=class extends Bh.EventEmitter{constructor(e){super(),Cr(this,"options"),Cr(this,"remaining",""),Cr(this,"saxParser"),Cr(this,"resultObject",null),Cr(this,"EXPLICIT_CHARKEY"),Cr(this,"errThrown",!1),Cr(this,"ended",!1),Cr(this,"processAsync",()=>{try{if(this.remaining.length<=this.options.chunkSize){let r=this.remaining;this.remaining="",this.saxParser=this.saxParser.write(r),this.saxParser.close()}else{let r=this.remaining.slice(0,this.options.chunkSize);this.remaining=this.remaining.slice(this.options.chunkSize),this.saxParser=this.saxParser.write(r),setTimeout(this.processAsync,0)}}catch(r){this.errThrown||(this.errThrown=!0,this.emit("error",r))}}),Cr(this,"assignOrPush",(r,n,o)=>{n in r?(Array.isArray(r[n])||xo(r,n,[r[n]]),r[n].push(o)):this.options.explicitArray?xo(r,n,[o]):xo(r,n,o)}),Cr(this,"reset",()=>{this.removeAllListeners(),this.saxParser=$h.default.parser(this.options.strict,{trim:!1,normalize:!1,xmlns:this.options.xmlns}),this.errThrown=!1,this.saxParser.onerror=a=>{this.saxParser.resume(),this.errThrown||(this.errThrown=!0,this.emit("error",a))},this.saxParser.onend=()=>{this.ended||(this.ended=!0,this.emit("end",this.resultObject))},this.ended=!1,this.EXPLICIT_CHARKEY=this.options.explicitCharkey,this.resultObject=null;let r=[],n=this.options.attrkey,o=this.options.charkey;this.saxParser.onopentag=a=>{let s={};s[o]="",this.options.ignoreAttrs||Object.keys(a.attributes).forEach(l=>{!(n in s)&&!this.options.mergeAttrs&&(s[n]={});let d=this.options.attrValueProcessors?fi(this.options.attrValueProcessors,a.attributes[l],l):a.attributes[l],f=this.options.attrNameProcessors?fi(this.options.attrNameProcessors,l):l;this.options.mergeAttrs?this.assignOrPush(s,f,d):xo(s[n],f,d)}),s["#name"]=this.options.tagNameProcessors?fi(this.options.tagNameProcessors,a.name):a.name,this.options.xmlns&&(s[this.options.xmlnskey]={uri:a.uri,local:a.local}),r.push(s)},this.saxParser.onclosetag=()=>{let a=r.pop(),s=a["#name"];(!this.options.explicitChildren||!this.options.preserveChildrenOrder)&&delete a["#name"];let l;a.cdata===!0&&(l=a.cdata,delete a.cdata);let d=r[r.length-1],f="";if(a[o].match(/^\s*$/)&&!l?(f=a[o],delete a[o]):(this.options.trim&&(a[o]=a[o].trim()),this.options.normalize&&(a[o]=a[o].replace(/\s{2,}/g," ").trim()),a[o]=this.options.valueProcessors?fi(this.options.valueProcessors,a[o],s):a[o],Object.keys(a).length===1&&o in a&&!this.EXPLICIT_CHARKEY&&(a=a[o])),lm(a)&&(typeof this.options.emptyTag=="function"?a=this.options.emptyTag():a=this.options.emptyTag!==""?this.options.emptyTag:f),this.options.validator){let g=`/${r.map(u=>u["#name"]).concat(s).join("/")}`;(()=>{try{a=this.options.validator(g,d&&d[s],a)}catch(u){this.emit("error",u)}})()}if(this.options.explicitChildren&&!this.options.mergeAttrs&&typeof a=="object")if(this.options.preserveChildrenOrder){if(d){d[this.options.childkey]=d[this.options.childkey]||[];let g={};Object.keys(a).forEach(u=>{xo(g,u,a[u])}),d[this.options.childkey].push(g),delete a["#name"],Object.keys(a).length===1&&o in a&&!this.EXPLICIT_CHARKEY&&(a=a[o])}}else{let g={};this.options.attrkey in a&&(g[this.options.attrkey]=a[this.options.attrkey],delete a[this.options.attrkey]),!this.options.charsAsChildren&&this.options.charkey in a&&(g[this.options.charkey]=a[this.options.charkey],delete a[this.options.charkey]),Object.getOwnPropertyNames(a).length>0&&(g[this.options.childkey]=a),a=g}if(r.length>0)this.assignOrPush(d,s,a);else{if(this.options.explicitRoot){let g=a,u={};xo(u,s,g),a=u}this.resultObject=a,this.ended=!0,this.emit("end",this.resultObject)}};let i=a=>{let s=r[r.length-1];if(s&&(s[o]+=a,this.options.explicitChildren&&this.options.preserveChildrenOrder&&this.options.charsAsChildren&&(this.options.includeWhiteChars||a.replace(/\\n/g,"").trim()!==""))){s[this.options.childkey]=s[this.options.childkey]||[];let l={"#name":"__text__"};l[o]=a,this.options.normalize&&(l[o]=l[o].replace(/\s{2,}/g," ").trim()),s[this.options.childkey].push(l)}return s};this.saxParser.ontext=i,this.saxParser.oncdata=a=>{let s=i(a);s&&(s.cdata=!0)}}),Cr(this,"parseString",(r,n)=>{n&&typeof n=="function"&&(this.on("end",o=>{this.reset(),n(null,o)}),this.on("error",o=>{this.reset(),n(o)}));try{return r=r.toString(),r.trim()===""?(this.emit("end",null),!0):(r=im(r),this.options.async?(this.remaining=r,setTimeout(this.processAsync,0),this.saxParser):this.saxParser.write(r).close())}catch(o){if(!this.errThrown&&!this.ended)this.emit("error",o),this.errThrown=!0;else if(this.ended)throw o}}),Cr(this,"parseStringPromise",r=>new Promise((n,o)=>{this.parseString(r,(i,a)=>{i?o(i):n(a)})})),this.options={},Object.keys(zh["0.2"]).forEach(r=>{this.options[r]=zh["0.2"][r]}),e&&Object.keys(e).forEach(r=>{this.options[r]=e[r]}),this.options.xmlns&&(this.options.xmlnskey=`${this.options.attrkey}ns`),this.options.normalizeTags&&(this.options.tagNameProcessors||(this.options.tagNameProcessors=[]),this.options.tagNameProcessors.unshift(sm)),this.reset()}}});function Wh(t){return t.includes("&")?t.replace(/&(#x[\dA-Fa-f]+|#\d+|[a-zA-Z]+);/g,(e,r)=>r.startsWith("#x")?String.fromCodePoint(Number.parseInt(r.slice(2),16)):r.startsWith("#")?String.fromCodePoint(Number.parseInt(r.slice(1),10)):dm[e]||e):t}function um(t){let e=t.slice(0,12),r=Array.from(e).map(n=>n.toString(16).padStart(2,"0")).join("");for(let[n,o]of Object.entries(hm))if(r.startsWith(n))return o;return"unknown"}function bi(t,e,r,n){return URL.createObjectURL(new Blob([t],{type:e}))}function Yh(t){let e="";return e=t.name??"",e}function Sm(t){return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}async function Zh(t){return t instanceof Uint8Array?Sm(t):await t.arrayBuffer()}function nr(t){let e=t.byteLength,r=e===4?"getUint32":e===2?"getUint16":"getUint8";return new DataView(t)[r](0)}function Rr(t,e){let r={};for(let n in t){let[o,i,a]=t[n];r[n]=a==="string"?aa(e.slice(o,o+i)):nr(e.slice(o,o+i))}return r}function ia(t){let e=t.reduce((o,i)=>o+i.length,0),r=new t[0].constructor(e),n=0;for(let o of t)r.set(o,n),n+=o.length;return r}function gi(t,e=0){let r=0,n=0;for(let o of t.subarray(e,e+4))if(r=r<<7|(o&127)>>>0,n++,o&128)break;return{value:r,length:n}}function Am(t){let e=0;for(let r of t.subarray(-4))r&128&&(e=0),e=e<<7|r&127;return e}function Qh(t){let e=0;for(;t>0;t=t>>1)(t&1)===1&&e++;return e}function Nm(t){let e=0;for(;(t&1)===0;)t=t>>1,e++;return e}function Cm(t){let e=[];for(let r=0;r<t.length;r++){let n=t[r];if(n===0)e.push(0);else if(n<=8)for(let o of t.subarray(r+1,(r+=n)+1))e.push(o);else if(n<=127)e.push(n);else if(n<=191){let o=n<<8|t[r+++1],i=(o&16383)>>>3,a=(o&7)+3;for(let s=0;s<a;s++)e.push(e[e.length-i])}else e.push(32,n^128)}return Uint8Array.from(e)}function Im(t,e){let r=e(t.huffcdic),{magic:n,offset1:o,offset2:i}=Rr(wm,r);if(n!=="HUFF")throw new Error("Invalid HUFF record");let a=Array.from({length:256},(f,g)=>o+g*4).map(f=>nr(r.slice(f,f+4))).map(f=>[f&128,f&31,f>>>8]),s=[[0,0],...Array.from({length:32},(f,g)=>i+g*8).map(f=>[nr(r.slice(f,f+4)),nr(r.slice(f+4,f+8))])],l=[];for(let f=1;f<t.numHuffcdic;f++){let g=e(t.huffcdic+f),u=Rr(_m,g);if(u.magic!=="CDIC")throw new Error("Invalid CDIC record");let p=Math.min(1<<u.codeLength,u.numEntries-l.length),_=g.slice(u.length);for(let N=0;N<p;N++){let y=nr(_.slice(N*2,N*2+2)),P=nr(_.slice(y,y+2)),w=P&32767,v=P&32768,S=new Uint8Array(_.slice(y+2,y+2+w));l.push([S,v])}}let d=f=>{let g=new Uint8Array,u=f.byteLength*8;for(let p=0;p<u;){let _=Number(Rm(f,p)),[N,y,P]=a[_>>>24];if(!N){for(;_>>>32-y<s[y][0];)y+=1;P=s[y][1]}if(p+=y,p>u)break;let w=P-(_>>>32-y),[v,S]=l[w];S||(v=d(v),l[w]=[v,!0]),g=ia([g,v])}return g};return d}function Rm(t,e){let r=e>>3,n=e+32,o=n>>3,i=0n;for(let a=r;a<=o;a++)i=i<<8n|BigInt(t[a]??0);return i>>8n-BigInt(n&7)&0xFFFFFFFFn}function Mm(t,e){let{magic:r,count:n}=Rr(vm,t);if(r!=="EXTH")throw new Error("Invalid EXTH header");let o=rl(e.toString()),i={},a=12;for(let s=0;s<n;s++){let l=nr(t.slice(a,a+4)),d=nr(t.slice(a+4,a+8));if(l in qh){let[f,g,u]=qh[l],p=t.slice(a+8,a+d),_=g==="uint"?nr(p):o.decode(p);u?(i[f]??(i[f]=[]),i[f].push(_)):i[f]=_}a+=d}return i}function Pm(t){let e=t&1,r=Qh(t>>>1);return n=>{for(let o=0;o<r;o++){let i=Am(n);n=n.subarray(0,-i)}if(e){let o=(n[n.length-1]&3)+1;n=n.subarray(0,-o)}return n}}function Om(t){let{flags:e,dataStart:r,keyLength:n,keyStart:o}=Rr(Tm,t),i=new Uint8Array(t.slice(r));if(e&2){let a=n===16?1024:1040,s=new Uint8Array(t.slice(o,o+n)),l=Math.min(a,i.length);for(let d=0;d<l;d++)i[d]=i[d]^s[d%s.length]}if(e&1)try{return jd(i)}catch(a){console.warn(a),console.warn("Failed to decompress font")}return i}function mi(t,e){let r=e(t),n=Rr(Gh,r);if(n.magic!=="INDX")throw new Error("Invalid INDX record");let o=rl(n.encoding.toString()),i={},a=0;for(let u=0;u<n.numCncx;u++){let p=e(t+n.numRecords+u+1),_=new Uint8Array(p);for(let N=0;N<_.byteLength;){let y=N,{value:P,length:w}=gi(_,N);N+=w;let v=p.slice(N,N+P);N+=P,i[a+y]=o.decode(v)}a+=65536}let s=r.slice(n.length),l=Rr(ym,s);if(l.magic!=="TAGX")throw new Error("Invalid TAGX section");let d=(l.length-12)/4,f=Array.from({length:d},(u,p)=>new Uint8Array(s.slice(12+p*4,12+p*4+4))),g=[];for(let u=0;u<n.numRecords;u++){let p=e(t+1+u),_=new Uint8Array(p),N=Rr(Gh,p);if(N.magic!=="INDX")throw new Error("Invalid INDX record");for(let y=0;y<N.numRecords;y++){let P=N.idxt+4+2*y,w=nr(p.slice(P,P+2)),v=nr(p.slice(w,w+1)),S=aa(p.slice(w+1,w+1+v)),C=[],E=w+1+v,D=0,I=E+l.numControlBytes;for(let[F,L,z,B]of f){if(B&1){D++;continue}let Y=E+D,ne=nr(p.slice(Y,Y+1))&z;if(ne===z)if(Qh(z)>1){let{value:re,length:oe}=gi(_,I);C.push([F,0,re,L]),I+=oe}else C.push([F,1,0,L]);else C.push([F,ne>>Nm(z),0,L])}let b={};for(let[F,L,z,B]of C){let Y=[];if(L!==0)for(let ne=0;ne<L*B;ne++){let{value:re,length:oe}=gi(_,I);Y.push(re),I+=oe}else{let ne=0;for(;ne<z;){let{value:re,length:oe}=gi(_,I);Y.push(re),I+=oe,ne+=oe}}b[F]=Y}g.push({name:S,tagMap:b})}}return{table:g,cncx:i}}function Lm(t,e){let{table:r,cncx:n}=mi(t,e),o=r.map(({tagMap:a},s)=>({index:s,offset:a[1]?.[0],size:a[2]?.[0],label:n[a[3]?.[0]]??"",headingLevel:a[4]?.[0],pos:a[6],parent:a[21]?.[0],firstChild:a[22]?.[0],lastChild:a[23]?.[0]})),i=a=>(a.firstChild==null||(a.children=o.filter(s=>s.parent===a.index).map(i)),a);return o.filter(a=>a.headingLevel===0).map(i)}function Xh(t=0,e=0){return`kindle:pos:fid:${t.toString(32).toUpperCase().padStart(4,"0")}:off:${e.toString(32).toUpperCase().padStart(10,"0")}`}function Vh(t){let e=t.match(Fm);if(!e)return"";let[,r,n]=e;return`[${r}="${n}"]`}function Bm(t){let[e,r]=t.match(zm).slice(1);return{fid:Number.parseInt(e,32),off:Number.parseInt(r,32)}}async function nl(t,e){let r=new el(t,e);return await r.innerLoadFile(),await r.innerInit(),r}async function ol(t,e){let r=new tl(t,e);return await r.innerLoadFile(),await r.innerInit(),r}var dm,jh,hm,pm,fm,gm,mm,bm,xm,vm,Gh,ym,wm,_m,km,Tm,Em,aa,rl,qh,Dm,Fm,zm,Kh,$m,Hm,rr,xi,Um,Wm,Pt,el,jm,Gm,Ir,tl,Jh=mr(()=>{Ns();Uh();dm={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};jh={XML:"application/xml",XHTML:"application/xhtml+xml",HTML:"text/html",CSS:"text/css",SVG:"image/svg+xml"},hm={ffd8ff:"image/jpeg","89504e47":"image/png",47494638:"image/gif","424d":"image/bmp","3c737667":"image/svg+xml","00000018":"video/mp4","00000020":"video/mp4","1a45dfa3":"video/mkv","1f43b675":"video/webm",494433:"audio/mp3",52494646:"audio/wav","4f676753":"audio/ogg","00010000":"font/ttf",74727565:"font/ttf","4f54544f":"font/otf","774f4646":"font/woff","774f4632":"font/woff2","504c":"font/eot"};pm={1252:"windows-1252",65001:"utf-8"},fm={1:["ar","ar-SA","ar-IQ","ar-EG","ar-LY","ar-DZ","ar-MA","ar-TN","ar-OM","ar-YE","ar-SY","ar-JO","ar-LB","ar-KW","ar-AE","ar-BH","ar-QA"],2:["bg"],3:["ca"],4:["zh","zh-TW","zh-CN","zh-HK","zh-SG"],5:["cs"],6:["da"],7:["de","de-DE","de-CH","de-AT","de-LU","de-LI"],8:["el"],9:["en","en-US","en-GB","en-AU","en-CA","en-NZ","en-IE","en-ZA","en-JM",null,"en-BZ","en-TT","en-ZW","en-PH"],10:["es","es-ES","es-MX",null,"es-GT","es-CR","es-PA","es-DO","es-VE","es-CO","es-PE","es-AR","es-EC","es-CL","es-UY","es-PY","es-BO","es-SV","es-HN","es-NI","es-PR"],11:["fi"],12:["fr","fr-FR","fr-BE","fr-CA","fr-CH","fr-LU","fr-MC"],13:["he"],14:["hu"],15:["is"],16:["it","it-IT","it-CH"],17:["ja"],18:["ko"],19:["nl","nl-NL","nl-BE"],20:["no","nb","nn"],21:["pl"],22:["pt","pt-BR","pt-PT"],23:["rm"],24:["ro"],25:["ru"],26:["hr",null,"sr"],27:["sk"],28:["sq"],29:["sv","sv-SE","sv-FI"],30:["th"],31:["tr"],32:["ur"],33:["id"],34:["uk"],35:["be"],36:["sl"],37:["et"],38:["lv"],39:["lt"],41:["fa"],42:["vi"],43:["hy"],44:["az"],45:["eu"],46:["hsb"],47:["mk"],48:["st"],49:["ts"],50:["tn"],52:["xh"],53:["zu"],54:["af"],55:["ka"],56:["fo"],57:["hi"],58:["mt"],59:["se"],62:["ms"],63:["kk"],65:["sw"],67:["uz",null,"uz-UZ"],68:["tt"],69:["bn"],70:["pa"],71:["gu"],72:["or"],73:["ta"],74:["te"],75:["kn"],76:["ml"],77:["as"],78:["mr"],79:["sa"],82:["cy","cy-GB"],83:["gl","gl-ES"],87:["kok"],97:["ne"],98:["fy"]},gm={name:[0,32,"string"],type:[60,4,"string"],creator:[64,4,"string"],numRecords:[76,2,"uint"]},mm={compression:[0,2,"uint"],numTextRecords:[8,2,"uint"],recordSize:[10,2,"uint"],encryption:[12,2,"uint"]},bm={magic:[16,4,"string"],length:[20,4,"uint"],type:[24,4,"uint"],encoding:[28,4,"uint"],uid:[32,4,"uint"],version:[36,4,"uint"],titleOffset:[84,4,"uint"],titleLength:[88,4,"uint"],localeRegion:[94,1,"uint"],localeLanguage:[95,1,"uint"],resourceStart:[108,4,"uint"],huffcdic:[112,4,"uint"],numHuffcdic:[116,4,"uint"],exthFlag:[128,4,"uint"],trailingFlags:[240,4,"uint"],indx:[244,4,"uint"]},xm={resourceStart:[108,4,"uint"],fdst:[192,4,"uint"],numFdst:[196,4,"uint"],frag:[248,4,"uint"],skel:[252,4,"uint"],guide:[260,4,"uint"]},vm={magic:[0,4,"string"],length:[4,4,"uint"],count:[8,4,"uint"]},Gh={magic:[0,4,"string"],length:[4,4,"uint"],type:[8,4,"uint"],idxt:[20,4,"uint"],numRecords:[24,4,"uint"],encoding:[28,4,"uint"],language:[32,4,"uint"],total:[36,4,"uint"],ordt:[40,4,"uint"],ligt:[44,4,"uint"],numLigt:[48,4,"uint"],numCncx:[52,4,"uint"]},ym={magic:[0,4,"string"],length:[4,4,"uint"],numControlBytes:[8,4,"uint"]},wm={magic:[0,4,"string"],offset1:[8,4,"uint"],offset2:[12,4,"uint"]},_m={magic:[0,4,"string"],length:[4,4,"uint"],numEntries:[8,4,"uint"],codeLength:[12,4,"uint"]},km={magic:[0,4,"string"],numEntries:[8,4,"uint"]},Tm={flags:[8,4,"uint"],dataStart:[12,4,"uint"],keyLength:[16,4,"uint"],keyStart:[20,4,"uint"]};Em=new TextDecoder,aa=t=>Em.decode(t);rl=t=>new TextDecoder(pm[t]);qh={100:["creator","string",!0],101:["publisher","string",!1],103:["description","string",!1],104:["isbn","string",!1],105:["subject","string",!0],106:["date","string",!1],108:["contributor","string",!0],109:["rights","string",!1],110:["subjectCode","string",!0],112:["source","string",!0],113:["asin","string",!1],121:["boundary","uint",!1],122:["fixedLayout","string",!1],125:["numResources","uint",!1],126:["originalResolution","string",!1],127:["zeroGutter","string",!1],128:["zeroMargin","string",!1],129:["coverURI","string",!1],132:["regionMagnification","string",!1],201:["coverOffset","uint",!1],202:["thumbnailOffset","uint",!1],503:["title","string",!1],524:["language","string",!0],527:["pageProgressionDirection","string",!1]};Dm=/<\s*(?:mbp:)?pagebreak[^>]*>/gi;Fm=/\s(id|name|aid)\s*=\s*['"]([^'"]*)['"]/i;zm=/kindle:pos:fid:(\w+):off:(\w+)/;Kh=/kindle:(flow|embed):(\w+)(?:\?mime=(\w+\/[-+.\w]+))?/,$m=Object.defineProperty,Hm=(t,e,r)=>e in t?$m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,rr=(t,e,r)=>Hm(t,typeof e!="symbol"?e+"":e,r),xi=class{constructor(e,r){if(rr(this,"fileArrayBuffer"),rr(this,"recordsOffset"),rr(this,"recordsMagic"),rr(this,"start",0),rr(this,"pdbHeader"),rr(this,"mobiHeader"),rr(this,"palmdocHeader"),rr(this,"kf8Header"),rr(this,"exth"),rr(this,"isKf8",!1),rr(this,"resourceStart"),rr(this,"decoder"),rr(this,"encoder"),rr(this,"removeTrailingEntries"),rr(this,"decompress"),this.fileArrayBuffer=e,this.parsePdbHeader(),this.parseFirstRecord(this.loadRecord(0)),this.resourceStart=this.mobiHeader.resourceStart,!this.isKf8){let n=this.exth.boundary??4294967295;if(n<4294967295){try{this.parseFirstRecord(this.loadRecord(n)),this.start=n,this.isKf8=!0}catch{console.warn("Failed to parse kf8 header.")}r.endsWith(".mobi")&&console.warn(`File "${r}" is a compatible file. Please change the file extension to .azw3 to make it parse correctly.`)}}this.setup()}decode(e){return this.decoder.decode(e)}encode(e){return this.encoder.encode(e)}pdbLoadRecord(e){let[r,n]=this.recordsOffset[e]??[0,0];return this.fileArrayBuffer.slice(r,n)}loadRecord(e){return this.pdbLoadRecord(this.start+e)}loadMagic(e){return this.recordsMagic[this.start+e]}loadTextBuffer(e){return this.decompress(this.removeTrailingEntries(new Uint8Array(this.loadRecord(e+1))))}loadResource(e){let r=this.pdbLoadRecord(this.resourceStart+e),n=aa(r.slice(0,4)),o;return n==="FONT"?o=Om(r):n==="VIDE"||n==="AUDI"?o=new Uint8Array(r.slice(12)):o=new Uint8Array(r),{type:um(o),raw:o}}getNCX(){let e=this.mobiHeader.indx;if(e<4294967295)return Lm(e,this.loadRecord.bind(this))}getMetadata(){let e=this.mobiHeader,r=this.exth;return{identifier:this.mobiHeader.uid.toString(),title:r?.title||e.title,author:r?.creator?.map(Wh)??[],publisher:r?.publisher??"",language:r?.language?.[0]??e.language,published:r?.date??"",description:r?.description??"",subject:r?.subject?.map(Wh)??[],rights:r?.rights??"",contributor:r?.contributor??[]}}getCoverImage(){let e=this.exth,r=Number(e.coverOffset??4294967295),n=Number(e.thumbnailOffset??4294967295),o=r<4294967295?r:n<4294967295?n:void 0;if(o)return this.loadResource(o)}parsePdbHeader(){let e=Rr(gm,this.fileArrayBuffer.slice(0,78));e.name=e.name.replace(/\0.*$/,""),this.pdbHeader=e;let r=this.fileArrayBuffer.slice(78,78+e.numRecords*8),n=Array.from({length:e.numRecords},(o,i)=>nr(r.slice(i*8,i*8+4)));this.recordsOffset=n.map((o,i)=>[o,n[i+1]]),this.recordsMagic=n.map(o=>aa(this.fileArrayBuffer.slice(o,o+4)))}parseFirstRecord(e){this.palmdocHeader=Rr(mm,e.slice(0,16));let r=Rr(bm,e);if(r.magic!=="MOBI")throw new Error("Missing MOBI header");let{titleOffset:n,titleLength:o,localeLanguage:i,localeRegion:a}=r,s=fm[i.toString()]??[],l={title:aa(e.slice(n,n+o)),language:s[a>>2]??s[0]??"unknown"};this.mobiHeader=Object.assign(r,l),this.kf8Header=r.version>=8?Rr(xm,e):void 0,this.isKf8=r.version>=8,this.exth=r.exthFlag&64?Mm(e.slice(r.length+16),r.encoding):void 0}setup(){this.decoder=rl(this.mobiHeader.encoding.toString()),this.encoder=new TextEncoder;let e=this.palmdocHeader.compression;if(e===1)this.decompress=n=>n;else if(e===2)this.decompress=Cm;else if(e===17480)this.decompress=Im(this.mobiHeader,this.loadRecord.bind(this));else throw new Error("Unsupported compression");let r=this.mobiHeader.trailingFlags;this.removeTrailingEntries=Pm(r)}},Um=Object.defineProperty,Wm=(t,e,r)=>e in t?Um(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Pt=(t,e,r)=>Wm(t,typeof e!="symbol"?e+"":e,r);el=class{constructor(e,r="./images"){this.file=e,Pt(this,"fileArrayBuffer"),Pt(this,"mobiFile"),Pt(this,"fileName",""),Pt(this,"fdstTable",[]),Pt(this,"fullRawLength",0),Pt(this,"skelTable",[]),Pt(this,"fragTable",[]),Pt(this,"chapters",[]),Pt(this,"toc",[]),Pt(this,"fragmentOffsets",new Map),Pt(this,"fragmentSelectors",new Map),Pt(this,"rawHead",new Uint8Array),Pt(this,"rawTail",new Uint8Array),Pt(this,"lastLoadedHead",-1),Pt(this,"lastLoadedTail",-1),Pt(this,"resourceCache",new Map),Pt(this,"chapterCache",new Map),Pt(this,"idToChapter",new Map),Pt(this,"resourceSaveDir","./images"),this.fileName=Yh(e),this.resourceSaveDir=r}getFileInfo(){return{fileName:this.fileName}}getMetadata(){return this.mobiFile.getMetadata()}getCoverImage(){if(this.resourceCache.has("cover"))return this.resourceCache.get("cover");let e=this.mobiFile.getCoverImage(),r="";return e&&(r=bi(e.raw,e.type,"cover",this.resourceSaveDir),this.resourceCache.set("cover",r)),r}getSpine(){return this.chapters}getToc(){return this.toc}async innerLoadFile(){this.fileArrayBuffer=await Zh(this.file),this.mobiFile=new xi(this.fileArrayBuffer,this.fileName)}async innerInit(){let e=this.mobiFile.loadRecord.bind(this.mobiFile),r=this.mobiFile.kf8Header,n=this.mobiFile.loadRecord(r.fdst),o=Rr(km,n);if(o.magic!=="FDST")throw new Error("Missing FDST record");let i=Array.from({length:o.numEntries},(u,p)=>12+p*8).map(u=>[nr(n.slice(u,u+4)),nr(n.slice(u+4,u+8))]);this.fdstTable=i,this.fullRawLength=i[i.length-1][1];let s=mi(r.skel,e).table.map(({name:u,tagMap:p},_)=>({index:_,name:u,numFrag:p[1][0],offset:p[6][0],length:p[6][1]}));this.skelTable=s;let l=mi(r.frag,e),d=l.table.map(({name:u,tagMap:p})=>({insertOffset:Number.parseInt(u),selector:l.cncx[p[2][0]],index:p[4][0],offset:p[6][0],length:p[6][1]}));this.fragTable=d;let f=this.skelTable.reduce((u,p,_)=>{let N=u[u.length-1],y=N?.fragEnd??0,P=y+p.numFrag,w=this.fragTable.slice(y,P),v=p.length+w.reduce((E,D)=>E+D.length,0),S=(N?.totalLength??0)+v,C={id:_.toString(),skel:p,frags:w,fragEnd:P,length:v,totalLength:S};return this.idToChapter.set(_,C),u.push(C),u},[]);this.chapters=f;let g=this.mobiFile.getNCX();if(g){let u=({label:p,pos:_,children:N})=>{let[y,P]=_,w=Xh(y,P),v=this.fragmentOffsets.get(y);return v?v.push(P):this.fragmentOffsets.set(y,[P]),{label:p,href:w,children:N?.map(u)}};this.toc=g.map(u)}}getGuide(){let e=this.mobiFile.kf8Header.guide;if(e<4294967295){let r=this.mobiFile.loadRecord.bind(this.mobiFile),{table:n,cncx:o}=mi(e,r);return n.map(({name:i,tagMap:a})=>({label:o[a[1][0]]??"",type:i?.split(/\s/),href:Xh(a[6]?.[0]??a[3]?.[0])}))}}loadRaw(e,r){let n=r-this.rawHead.length,o=this.fullRawLength===0?1/0:this.fullRawLength-this.rawTail.length-e;if(n<0||n<o){for(;this.rawHead.length<r;){this.lastLoadedHead++;let a=this.lastLoadedHead,s=this.mobiFile.loadTextBuffer(a);this.rawHead=ia([this.rawHead,s])}return this.rawHead.slice(e,r)}for(;this.fullRawLength-this.rawTail.length>e;){this.lastLoadedTail++;let a=this.mobiFile.palmdocHeader.numTextRecords-1-this.lastLoadedTail,s=this.mobiFile.loadTextBuffer(a);this.rawTail=ia([s,this.rawTail])}let i=this.fullRawLength-this.rawTail.length;return this.rawTail.slice(e-i,r-i)}loadText(e){let{skel:r,frags:n,length:o}=e,i=this.loadRaw(r.offset,r.offset+o),a=i.slice(0,r.length);for(let s of n){let l=s.insertOffset-r.offset,d=r.length+s.offset,f=i.slice(d,d+s.length);a=ia([a.slice(0,l),f,a.slice(l)]);let g=this.fragmentOffsets.get(s.index);if(g)for(let u of g){let p=this.mobiFile.decode(f.buffer).slice(u),_=Vh(p);_&&this.cacheFragmentSelector(s.index,u,_)}}return this.mobiFile.decode(a.buffer)}loadChapter(e){let r=Number.parseInt(e);if(Number.isNaN(r))return;if(this.chapterCache.has(r))return this.chapterCache.get(r);let n=this.idToChapter.get(r);if(n){let o=this.replace(this.loadText(n));return this.chapterCache.set(r,o),o}}cacheFragmentSelector(e,r,n){let o=this.fragmentSelectors.get(e);if(o)o.set(r,n);else{let i=new Map;this.fragmentSelectors.set(e,i),i.set(r,n)}}loadFlow(e){if(e<4294967295)return this.loadRaw(this.fdstTable[e][0],this.fdstTable[e][1])}resolveHref(e){if(/^(?!blob|kindle)\w+:/i.test(e))return;let{fid:r,off:n}=Bm(e),o=this.chapters.find(_=>_.frags.some(N=>N.index===r));if(!o)return;let i=o.id,a=this.fragmentSelectors.get(r)?.get(n);if(a)return{id:i,selector:a};let{skel:s,frags:l}=o,d=l.find(_=>_.index===r),f=s.offset+s.length+d.offset,g=this.loadRaw(f,f+d.length),u=this.mobiFile.decode(g.buffer).slice(n),p=Vh(u);return this.cacheFragmentSelector(r,n,p),{id:i,selector:p}}replaceResources(e){return e.replace(new RegExp(Kh,"gi"),(r,n,o,i)=>{if(this.resourceCache.has(r))return this.resourceCache.get(r);let a=n==="flow"?this.loadFlow(Number.parseInt(o)):this.mobiFile.loadResource(Number.parseInt(o,36)-1).raw,s="";if(i===jh.CSS||i===jh.SVG){let d=this.mobiFile.decode(a?.buffer);s=this.replaceResources(d)}else s=a;let l=bi(s,i,o,this.resourceSaveDir);return this.resourceCache.set(r,l),l})}replace(e){let r=[],o=e.match(/<head[^>]*>([\s\S]*)<\/head>/i)[1].match(/<link[^>]*>/gi)??[];for(let s of o){let l=s.match(/href="([^"]*)"/i)[1],d=s.match(Kh)[2],f=this.replaceResources(l);r.push({id:d,href:f})}let i=e.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1];return{html:this.replaceResources(i),css:r}}destroy(){this.resourceCache.forEach(e=>{URL.revokeObjectURL(e)})}},jm=Object.defineProperty,Gm=(t,e,r)=>e in t?jm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ir=(t,e,r)=>Gm(t,typeof e!="symbol"?e+"":e,r);tl=class{constructor(e,r="./images"){this.file=e,Ir(this,"fileArrayBuffer"),Ir(this,"mobiFile"),Ir(this,"fileName",""),Ir(this,"chapters",[]),Ir(this,"idToChapter",new Map),Ir(this,"toc",[]),Ir(this,"resourceSaveDir","./images"),Ir(this,"chapterCache",new Map),Ir(this,"resourceCache",new Map),Ir(this,"recindexReg",/recindex=["']?(\d+)["']?/),Ir(this,"mediarecindexReg",/mediarecindex=["']?(\d+)["']?/),Ir(this,"fileposReg",/filepos=["']?(\d+)["']?/),this.fileName=Yh(e),this.resourceSaveDir=r}getFileInfo(){return{fileName:this.fileName}}getSpine(){return this.chapters}loadChapter(e){let r=Number.parseInt(e);if(Number.isNaN(r))return;if(this.chapterCache.has(r))return this.chapterCache.get(r);let n=this.idToChapter.get(r);if(!n)return;let o=this.replace(n.text);return this.chapterCache.set(r,o),o}getToc(){return this.toc}getCoverImage(){if(this.resourceCache.has("cover"))return this.resourceCache.get("cover");let e=this.mobiFile.getCoverImage(),r="";return e&&(r=bi(e.raw,e.type,"cover",this.resourceSaveDir),this.resourceCache.set("cover",r)),r}getMetadata(){return this.mobiFile.getMetadata()}async innerLoadFile(){this.fileArrayBuffer=await Zh(this.file),this.mobiFile=new xi(this.fileArrayBuffer,this.fileName)}async innerInit(){let{palmdocHeader:e}=this.mobiFile,r=[];for(let _=0;_<e.numTextRecords;_++)r.push(this.mobiFile.loadTextBuffer(_));let n=ia(r),o=Array.from(n,_=>String.fromCharCode(_)).join(""),i=[],a=new Map,s=0,l=Array.from(o.matchAll(Dm));l.unshift({index:0,input:"",groups:void 0,0:""});for(let _=0;_<l.length;_++){let N=l[_],y=N.index,P=N[0],w=l[_+1]?.index,v=o.slice(y+P.length,w),S=Uint8Array.from(v,D=>D.charCodeAt(0)),C=this.mobiFile.decode(S.buffer),E={id:String(s),text:C,start:y,end:w,size:S.length};i.push(E),a.set(s,E),s++}let d=i[i.length-1].text;i[i.length-1].text=d.slice(0,d.indexOf("</body>"));let f=i[0].text,g=f.indexOf("<body>");i[0].text=f.slice(g+6),this.chapters=i,this.idToChapter=a;let u=f.slice(0,g),p=this.findTocChapter(u);if(p){let _=`<wrapper>${p.text.replace(/filepos=(\d+)/gi,'filepos="$1"')}</wrapper>`,N=await Hh(_,{preserveChildrenOrder:!0,explicitChildren:!0,childkey:"children"}),y=[];this.parseNavMap(N.wrapper.children,y),this.toc=y}}findTocChapter(e){let r=/<reference.*\/>/g,n=e.match(r),o=/type="(.+?)"/,i=/filepos=(.*)/;if(n)for(let a of n){let s=a.match(o)?.[1].trim(),l=a.match(i)?.[1].trim();if(s==="toc"&&l){let d=Number.parseInt(l,10);return this.chapters.find(g=>g.end>d)}}}parseNavMap(e,r){for(let n of e){let o=n["#name"];if(o==="p"||o==="blockquote"){let i={label:"",href:""};if(n.a){let a=n.a[0],s=a._,l=Number(a.$.filepos);i={label:s,href:`filepos:${l}`},r.push(i)}(n.p||n.blockquote)&&(i.children=[],this.parseNavMap(n.children,i.children))}}}loadResource(e){if(this.resourceCache.has(String(e)))return this.resourceCache.get(String(e));let{type:r,raw:n}=this.mobiFile.loadResource(e-1),o=bi(n,r,String(e),this.resourceSaveDir);return this.resourceCache.set(String(e),o),o}replace(e){return e=e.replace(/<img[^>]*>/g,r=>{let n=r.match(this.recindexReg)[1],o=this.loadResource(Number.parseInt(n));return r.replace(this.recindexReg,`src="${o}"`)}),e=e.replace(/<(video|audio)[^>]*>/g,r=>{let n=r.match(this.recindexReg)[1],o=this.loadResource(Number.parseInt(n));r=r.replace(this.mediarecindexReg,`src="${o}"`);let i=r.match(this.recindexReg)?.[1];if(i){let a=this.loadResource(Number.parseInt(i));r=r.replace(this.recindexReg,`poster="${a}"`)}return r}),e=e.replace(/<a[^>]*>/g,r=>{let n=r.match(this.fileposReg);if(!n)return r;let o=n[1];return r.replace(this.fileposReg,`href="filepos:${o}"`)}),{html:e,css:[]}}resolveHref(e){let r=e.match(/filepos:(\d+)/);if(!r)return;let n=r[1],o=Number(n),i=this.chapters.find(a=>a.end>o);if(i)return{id:i.id,selector:`[id="filepos:${n}"]`}}destroy(){this.resourceCache.forEach(e=>{URL.revokeObjectURL(e)}),this.resourceCache.clear()}}});function vi(t,e,r){let n="";for(let o=0;o<r;o+=1){let i=t[e+o]??0;n+=i>=32&&i<127?String.fromCharCode(i):""}return n}function sa(t,e){return(t[e]??0)<<8|(t[e+1]??0)}function eu(t,e){return(t[e]??0)*16777216+((t[e+1]??0)<<16|(t[e+2]??0)<<8|(t[e+3]??0))>>>0}function rn(t,e){return(t[e+3]??0)*16777216+((t[e+2]??0)<<16|(t[e+1]??0)<<8|(t[e]??0))>>>0}function Xm(t){if(t.length<86)throw new Error("\u6587\u4EF6\u592A\u5C0F\uFF0C\u4E0D\u662F\u6709\u6548\u7684 MOBI/PalmDOC \u6587\u4EF6\u3002");let e=vi(t,60,4).trim(),r=vi(t,64,4).trim(),n=`${e}${r}`;if(n!=="BOOKMOBI"&&n!=="TEXtREAd")throw new Error("\u6587\u4EF6\u4E0D\u662F MOBI/PalmDOC \u683C\u5F0F\uFF08\u7F3A\u5C11 PDB \u6587\u4EF6\u5934\uFF09\u3002");let o=sa(t,76);if(o<1)throw new Error("MOBI \u8BB0\u5F55\u8868\u4E3A\u7A7A\u3002");if(78+o*8+2>t.length)throw new Error("MOBI \u8BB0\u5F55\u8868\u5DF2\u635F\u574F\u3002");let i=[];for(let N=0;N<o;N+=1){let y=eu(t,78+N*8);if(y<78||y>=t.length)throw new Error("MOBI \u8BB0\u5F55\u504F\u79FB\u65E0\u6548\uFF0C\u6587\u4EF6\u53EF\u80FD\u5DF2\u635F\u574F\u3002");if(i.length>0&&y<i[i.length-1])throw new Error("MOBI \u8BB0\u5F55\u987A\u5E8F\u65E0\u6548\u3002");i.push(y)}let a=i[0];if(a+16>t.length)throw new Error("MOBI \u6587\u4EF6\u5934\u5DF2\u635F\u574F\u3002");let s=sa(t,a),l=eu(t,a+4),d=sa(t,a+8),f=sa(t,a+10),g=sa(t,a+12);if(g!==0)throw new Error("\u8BE5 MOBI \u6587\u4EF6\u53D7 DRM \u4FDD\u62A4\uFF0C\u65E0\u6CD5\u6253\u5F00\u3002");if(![qm,1,nu,il].includes(s))throw new Error(`\u4E0D\u652F\u6301\u7684 MOBI \u538B\u7F29\u65B9\u5F0F\uFF08${s}\uFF09\u3002`);let u=0,p=65001,_=!1;return n==="BOOKMOBI"&&vi(t,a+16,4)==="MOBI"&&(u=rn(t,a+36),p=rn(t,a+28)||65001,_=u===8),{pdbType:n,numRecords:o,offsets:i,compression:s,textLength:l,recordCount:d,recordSize:f,encryption:g,version:u,encoding:p,isKf8:_}}function Vm(t,e,r){let n=e[r];if(n==null)return null;let o=e[r+1]??t.length;return o<=n?new Uint8Array(0):t.subarray(n,o)}function Km(t){let e=t instanceof Uint8Array?t:new Uint8Array(t),r=[],n=0;for(;n<e.length;){let o=e[n];if(n+=1,o===0)r.push(0);else if(o<=8)for(let i=0;i<o&&n<e.length;i+=1)r.push(e[n]),n+=1;else if(o<=127)r.push(o);else if(o<=191){if(n>=e.length)break;let i=o<<8|e[n];n+=1;let a=i>>3&2047,s=(i&7)+3,l=r.length-a;for(let d=0;d<s;d+=1)r.push(l+d>=0?r[l+d]:0)}else r.push(32),r.push(o^128)}return Uint8Array.from(r)}function Ym(t){let e=0;for(let o of t)e+=o.length;let r=new Uint8Array(e),n=0;for(let o of t)r.set(o,n),n+=o.length;return r}function al(t,e){let r=[];e&&r.push(e),r.push("utf-8","gb18030","windows-1252");for(let n of r)try{return new TextDecoder(n,{fatal:!0}).decode(t)}catch{}return new TextDecoder("utf-8").decode(t)}function Zm(t,e){let r=e.recordCount>0?e.recordCount:e.numRecords-1,n=[];for(let i=1;i<=r;i+=1){let a=Vm(t,e.offsets,i);if(!a)break;if(e.compression===il)throw new Error("\u8BE5 MOBI \u4F7F\u7528 HUFF/CDIC \u538B\u7F29\uFF0C\u5185\u7F6E\u89E3\u6790\u5668\u65E0\u6CD5\u5904\u7406\u3002");n.push(e.compression===nu?Km(a):a)}if(n.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u6587\u672C\u5185\u5BB9\u3002");let o=Ym(n);return e.textLength>0&&e.textLength<=o.length&&(o=o.subarray(0,e.textLength)),o}function Qm(t,e){let r={title:"",author:"",language:""};if(e.pdbType!=="BOOKMOBI")return r;let n=e.offsets[0],o=ou[e.encoding]||"utf-8",i=rn(t,n+84),a=rn(t,n+88);i>0&&a>0&&n+i+a<=t.length&&(r.title=dt(al(t.subarray(n+i,n+i+a),o)));let s=rn(t,n+20),l=rn(t,n+128),d=n+16+s;if(l&64&&vi(t,d,4)==="EXTH"&&d+12<=t.length){let f=rn(t,d+4),g=rn(t,d+8),u=Math.min(t.length,d+f,d+12+g*8+4096),p=d+12;for(let _=0;_<g&&p+8<=u;_+=1){let N=rn(t,p),y=rn(t,p+4);if(y<8||p+y>t.length)break;let P=t.subarray(p+8,p+y),w=dt(al(P,o));N===100&&w&&!r.author?r.author=w:N===503&&w?r.title=w:N===524&&w&&!r.language&&(r.language=w),p+=y}}return r}function tu(t,e){if(!Number.isFinite(e)||e<0)return null;for(let r=0;r<t.length;r+=1){let n=Number(t[r]?.start),o=Number(t[r]?.end);if(Number.isFinite(n)&&Number.isFinite(o)&&e>=n&&e<o)return r}for(let r=0;r<t.length;r+=1){let n=Number(t[r]?.start);if(Number.isFinite(n)&&n>e)return r}return t.length>0?t.length-1:null}function ru(t){let e=String(t||"");return e.startsWith("#")?e.slice(1):""}function Jm(t,e,{fileName:r,tracker:n,warn:o}){let i={};try{i=t.getMetadata()||{}}catch{i={}}let a=[];try{a=t.getSpine()||[]}catch{a=[]}if(!Array.isArray(a)||a.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u9605\u8BFB\u987A\u5E8F\u3002");let s=new Map;a.forEach((E,D)=>{E?.id!=null&&s.set(String(E.id),D)});let l=0,d=()=>`b${l+=1}`,f=E=>{let D=String(E||"").trim();if(!D)return null;if(/^blob:/i.test(D))return n.add(D),{src:D};if(/^data:/i.test(D)){let I=Sn(D);return I?{src:n.create(I)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684 MOBI \u5185\u5D4C\u56FE\u7247\u3002"),null)}return/^(https?:)?\/\//i.test(D)?(o("\u5DF2\u8DF3\u8FC7 MOBI \u4E2D\u7684\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\u3002"),null):(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u6790\u7684 MOBI \u56FE\u7247\u3002"),null)},g=E=>D=>{let I=String(D||"").trim();if(!I)return null;if(/^(https?:|mailto:)/i.test(I))return{external:!0,href:I};if(I.startsWith("#"))return{chapter:E,anchor:I.slice(1)};if(I.startsWith("//")||/^(?!filepos:|kindle:)[a-z][a-z0-9+.-]*:/i.test(I))return null;try{let F=t.resolveHref(I);if(F?.id!=null){let L=s.get(String(F.id));if(L!=null){let z=ru(F.selector);return z?{chapter:L,anchor:z}:{chapter:L}}}}catch{}let b=/filepos:(\d+)/i.exec(I);if(b){let F=tu(a,Number(b[1]));if(F!=null)return{chapter:F}}return null},u=[];for(let E=0;E<a.length;E+=1){let D="";try{D=t.loadChapter(a[E].id)?.html||""}catch{o(`\u7B2C ${E+1} \u7AE0\u52A0\u8F7D\u5931\u8D25\uFF0C\u5DF2\u8DF3\u8FC7\u8BE5\u7AE0\u5185\u5BB9\u3002`)}let I=[];if(D){let b=Zr(D),F=b?.body||b?.documentElement||null;F&&(I=Vn(F,{nextId:d,warn:o,chapterIndex:E,resolveImage:f,resolveLink:g(E)}))}u.push({id:`ch${E}`,title:"",blocks:I})}let p=[],_=(E,D)=>{if(Array.isArray(E))for(let I of E){if(!I)continue;let b=dt(I.label||I.title||"").slice(0,200),F=String(I.href||""),L=null,z="";if(F){try{let B=t.resolveHref(F);if(B?.id!=null){let Y=s.get(String(B.id));Y!=null&&(L=Y,z=ru(B.selector))}}catch{}if(L==null){let B=/filepos:(\d+)/i.exec(F);B&&(L=tu(a,Number(B[1])))}}b&&L!=null&&p.push({title:b,chapterIndex:L,depth:D,...z?{anchor:z}:{}}),_(I.children,D+1)}};try{_(t.getToc?.()||[],0)}catch{o("MOBI \u76EE\u5F55\u8BFB\u53D6\u5931\u8D25\uFF0C\u5DF2\u6309\u7AE0\u8282\u6807\u9898\u751F\u6210\u76EE\u5F55\u3002")}let N=ta(u,p),y=dt(i.title||"")||Yn(r),w=(Array.isArray(i.author)?i.author:[i.author]).map(E=>dt(E||"")).filter(Boolean).join(", "),v="";try{let E=t.getCoverImage();E&&(n.add(E),v=E)}catch{}let S={title:y,chapters:u,toc:N};w&&(S.author=w);let C=dt(i.language||"");return C&&(S.language=C),v&&(S.cover=v),S}function eb(t){return String(t||"").split(/<\s*(?:mbp:)?pagebreak[^>]*>/gi)}function tb(t,e,{fileName:r,warn:n}){if(e.compression===il)throw new Error("\u8BE5 MOBI \u6587\u4EF6\u4F7F\u7528 HUFF/CDIC \u538B\u7F29\uFF0C\u5185\u7F6E\u89E3\u6790\u5668\u65E0\u6CD5\u5904\u7406\u3002");let o=Qm(t,e),i=Zm(t,e),a=rb(e.encoding),s=al(i,a),l=o.title||Yn(r),d=0,f=()=>`b${d+=1}`,g=/<\s*(?:html|body|p|div|h[1-6]|br)\b/i.test(s),u;if(g){let N=eb(s),y=new TextEncoder,P=[],w=0;for(let v of N){let S=y.encode(v).length;P.push({start:w,end:w+S}),w+=S}u=[],N.forEach((v,S)=>{if(!v.trim())return;let C=Zr(v),E=C?.body||C?.documentElement||null,D=u.length,I=E?Vn(E,{nextId:f,warn:n,chapterIndex:D,resolveImage:()=>(n("\u5185\u7F6E MOBI \u89E3\u6790\u5668\u65E0\u6CD5\u63D0\u53D6\u56FE\u7247\u8D44\u6E90\u3002"),null),resolveLink:b=>{let F=String(b||"").trim();if(!F)return null;if(/^(https?:|mailto:)/i.test(F))return{external:!0,href:F};if(F.startsWith("#"))return{chapter:D,anchor:F.slice(1)};let L=/filepos:(\d+)/i.exec(F);if(L){let z=Number(L[1]);for(let B=0;B<P.length;B+=1)if(z>=P[B].start&&z<P[B].end){let Y=N.slice(0,B).filter(ne=>ne.trim()).length;return Y<u.length?{chapter:Y}:null}}return null}}):[];u.push({id:`ch${D}`,title:"",blocks:I})})}else u=Ks(s,{nextId:f,title:l});if(!u||u.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let p=ta(u,[]),_={title:l,chapters:u,toc:p};return o.author&&(_.author=o.author),o.language&&(_.language=o.language),_}function rb(t){return ou[t]||""}async function yo(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Jr(),i=Tn(),a=null;try{let s=await Qr(t),l=Xm(s);if(l.pdbType==="BOOKMOBI"){let f=l.isKf8||/^(azw3?|kf8)$/i.test(String(r).split(".").pop()||"");try{a=f?await nl(s):await ol(s)}catch{try{a=f?await ol(s):await nl(s)}catch{a=null}a||o("MOBI \u89E3\u6790\u5E93\u65E0\u6CD5\u6253\u5F00\u8BE5\u6587\u4EF6\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\uFF08\u53EF\u80FD\u7F3A\u5C11\u56FE\u7247\u4E0E\u76EE\u5F55\u4FE1\u606F\uFF09\u3002")}if(a)try{let g=a.getSpine?.()||[];(!Array.isArray(g)||g.length===0)&&(a.destroy?.(),a=null,o("MOBI \u9605\u8BFB\u987A\u5E8F\u4E3A\u7A7A\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\u3002"))}catch{a.destroy?.(),a=null,o("MOBI \u89E3\u6790\u5E93\u8FD4\u56DE\u5F02\u5E38\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\u3002")}}return{...a?Jm(a,l,{fileName:r,tracker:i,warn:o}):tb(s,l,{fileName:r,warn:o}),warnings:n,dispose:()=>{try{a?.destroy?.()}catch{}i.dispose()}}}catch(s){try{a?.destroy?.()}catch{}throw i.dispose(),Nr(s,"\u65E0\u6CD5\u89E3\u6790 MOBI \u6587\u4EF6")}}var qm,nu,il,ou,au=mr(()=>{Jh();Gn();Qo();di();Zn();qm=0,nu=2,il=17480,ou={65001:"utf-8",65e3:"utf-7",1250:"windows-1250",1251:"windows-1251",1252:"windows-1252",932:"shift_jis",936:"gb18030",949:"euc-kr",950:"big5"}});var ll={};kl(ll,{extensionOf:()=>li,parseBook:()=>sb});function ab(t){let e=t?`\u201C.${t}\u201D`:"\u8BE5\u6587\u4EF6";return new Error(`\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u683C\u5F0F\uFF1A${e}\u3002\u76EE\u524D\u652F\u6301 ${ob}\u3002`)}function sl(){return new Error("PDF \u6587\u4EF6\u8BF7\u4F7F\u7528 PDF \u9605\u8BFB\u6A21\u5F0F\u6253\u5F00\uFF08PDF \u7531\u72EC\u7ACB\u7684\u9605\u8BFB\u5668\u5904\u7406\uFF09\u3002")}async function ib(t){let e;try{e=new Uint8Array(await t.slice(0,256).arrayBuffer())}catch{return null}if(e.length>=8){if(String.fromCharCode(...e.subarray(0,4))==="%PDF")return"pdf";if(e[0]===80&&e[1]===75)return"epub";let o="";for(let i=60;i<68;i+=1){let a=e[i]??0;o+=a>=32&&a<127?String.fromCharCode(a):" "}if(o==="BOOKMOBI"||o==="TEXtREAd")return"mobi"}let r=new TextDecoder("utf-8").decode(e.subarray(0,Math.min(e.length,200)));return/^\s*(?:<!doctype\s+html|<html|<head|<body)/i.test(r)?"html":ci(r)?null:"txt"}async function sb(t,e={}){let r=typeof e.fileName=="string"?e.fileName:"",n=typeof e.mime=="string"?e.mime:"",o=li(r);if(o==="pdf")throw sl();let i=Ur[o]||null;if(!i){let a=n.toLowerCase().split(";")[0].trim();if(a==="application/pdf")throw sl();i=nb[a]||null}if(!i&&!o){let a=await ib(t);if(a==="pdf")throw sl();i=a&&Ur[a]||null}if(!i)throw ab(o);try{let a=await i.parse(t,{fileName:r,mime:n});return{...a,title:a.title||Yn(r),format:i.format,warnings:Array.isArray(a.warnings)?a.warnings:[]}}catch(a){throw Nr(a,"\u65E0\u6CD5\u6253\u5F00\u6587\u6863")}}var Ur,nb,ob,cl=mr(()=>{mh();bh();_h();au();di();Zn();Ur={epub:{parse:gh,format:"epub"},mobi:{parse:yo,format:"mobi"},prc:{parse:yo,format:"mobi"},azw:{parse:yo,format:"mobi"},azw3:{parse:yo,format:"mobi"},kf8:{parse:yo,format:"mobi"},txt:{parse:Ys,format:"txt"},text:{parse:Ys,format:"txt"},md:{parse:oa,format:"md"},markdown:{parse:oa,format:"md"},mdown:{parse:oa,format:"md"},mkd:{parse:oa,format:"md"},html:{parse:ra,format:"html"},htm:{parse:ra,format:"html"},xhtml:{parse:ra,format:"html"},xht:{parse:ra,format:"html"}},nb={"application/epub+zip":Ur.epub,"application/x-mobipocket-ebook":Ur.mobi,"application/x-mobi":Ur.mobi,"application/vnd.amazon.ebook":Ur.mobi,"text/plain":Ur.txt,"text/markdown":Ur.md,"text/x-markdown":Ur.md,"text/html":Ur.html,"application/xhtml+xml":Ur.html},ob="EPUB\u3001MOBI/KF8\u3001TXT\u3001Markdown \u548C HTML"});var yb={};kl(yb,{PANEL_ID:()=>ul,apply:()=>vb,inject:()=>bb,name:()=>mb});module.exports=Pu(yb);var $v=require("react");var G=Mt(require("react"),1);var dr=Mt(require("react"),1);var _b=require("react"),j=require("react/jsx-runtime");function Ze({size:t=18,children:e,viewBox:r="0 0 24 24",fill:n="none",strokeWidth:o=1.7,...i}){return(0,j.jsx)("svg",{width:t,height:t,viewBox:r,fill:n,stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",...i,children:e})}function Sl(t){return(0,j.jsxs)(Ze,{...t,children:[(0,j.jsx)("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5Z"}),(0,j.jsx)("path",{d:"M4 18.5A2.5 2.5 0 0 1 6.5 16H20"}),(0,j.jsx)("path",{d:"M8 7h8M8 10.5h5"})]})}function Mi(t){return(0,j.jsxs)(Ze,{...t,children:[(0,j.jsx)("path",{d:"M12 6.5C10.6 5.2 8.7 4.6 6.5 4.6H3v13h3.9c2 0 3.8.6 5.1 1.8 1.3-1.2 3.1-1.8 5.1-1.8H21v-13h-3.5c-2.2 0-4.1.6-5.5 1.9Z"}),(0,j.jsx)("path",{d:"M12 6.5v12.9"})]})}function El(t){return(0,j.jsxs)(Ze,{...t,children:[(0,j.jsx)("path",{d:"M19 12H5"}),(0,j.jsx)("path",{d:"m11 18-6-6 6-6"})]})}function Al(t){return(0,j.jsxs)(Ze,{...t,children:[(0,j.jsx)("path",{d:"M12 16V4"}),(0,j.jsx)("path",{d:"m7 9 5-5 5 5"}),(0,j.jsx)("path",{d:"M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15"})]})}function Io(t){return(0,j.jsxs)(Ze,{...t,children:[(0,j.jsx)("circle",{cx:"11",cy:"11",r:"7"}),(0,j.jsx)("path",{d:"m20 20-3.6-3.6"})]})}function yn(t){return(0,j.jsxs)(Ze,{...t,children:[(0,j.jsx)("path",{d:"m12 3 1.5 4.2L18 9l-4.5 1.8L12 15l-1.5-4.2L6 9l4.5-1.8L12 3Z"}),(0,j.jsx)("path",{d:"m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"}),(0,j.jsx)("path",{d:"m5 13 .7 1.8L7.5 15.5l-1.8.7L5 18l-.7-1.8L2.5 15.5l1.8-.7L5 13Z"})]})}function ro(t){return(0,j.jsxs)(Ze,{...t,children:[(0,j.jsx)("path",{d:"M4 5h8M8 3v2c0 4.2-1.8 7.2-5 9"}),(0,j.jsx)("path",{d:"M5 10c1.8 2.2 4 3.6 6.8 4.4"}),(0,j.jsx)("path",{d:"m13 20 3.6-9L20 20"}),(0,j.jsx)("path",{d:"M14.6 16.8h4.8"})]})}function _r(t){return(0,j.jsx)(Ze,{...t,children:(0,j.jsx)("path",{d:"m6 6 12 12M18 6 6 18"})})}function ga(t){return(0,j.jsx)(Ze,{...t,children:(0,j.jsx)("path",{d:"m15 18-6-6 6-6"})})}function ma(t){return(0,j.jsx)(Ze,{...t,children:(0,j.jsx)("path",{d:"m9 18 6-6-6-6"})})}function Nl(t){return(0,j.jsx)(Ze,{...t,children:(0,j.jsx)("path",{d:"m6 9 6 6 6-6"})})}function Pi(t){return(0,j.jsxs)(Ze,{...t,children:[(0,j.jsx)("path",{d:"M8 6h12M8 12h12M8 18h12"}),(0,j.jsx)("path",{d:"M4 6h.01M4 12h.01M4 18h.01"})]})}function ba(t){return(0,j.jsxs)(Ze,{...t,children:[(0,j.jsx)("circle",{cx:"12",cy:"12",r:"3.2"}),(0,j.jsx)("path",{d:"M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"})]})}function ln(t){return(0,j.jsxs)(Ze,{...t,children:[(0,j.jsx)("path",{d:"M4 7h16M9 7V5h6v2M7 7l.7 12.2A1.8 1.8 0 0 0 9.5 21h5a1.8 1.8 0 0 0 1.8-1.8L17 7"}),(0,j.jsx)("path",{d:"M10 11v6M14 11v6"})]})}function Cl(t){return(0,j.jsxs)(Ze,{...t,children:[(0,j.jsx)("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),(0,j.jsx)("path",{d:"M5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V5"})]})}function cn(t){return(0,j.jsx)(Ze,{...t,children:(0,j.jsx)("path",{d:"M12 5v14M5 12h14"})})}function xa(t){return(0,j.jsx)(Ze,{...t,children:(0,j.jsx)("path",{d:"M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"})})}function va(t){return(0,j.jsx)(Ze,{...t,children:(0,j.jsx)("path",{d:"M5 12h14"})})}function Il(t){return(0,j.jsxs)(Ze,{...t,children:[(0,j.jsx)("path",{d:"M20 11a8 8 0 1 0-2.3 6.3"}),(0,j.jsx)("path",{d:"M20 4v7h-7"})]})}function Rl(t){return(0,j.jsxs)(Ze,{...t,children:[(0,j.jsx)("path",{d:"M14 4h6v6M20 4l-9 9"}),(0,j.jsx)("path",{d:"M19 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"})]})}function ya({size:t=18}){return(0,j.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[(0,j.jsx)("path",{fill:"#4285F4",d:"M22.6 12.23c0-.78-.07-1.53-.2-2.25H12v4.26h5.94a5.08 5.08 0 0 1-2.2 3.33v2.77h3.56c2.08-1.92 3.3-4.74 3.3-8.11Z"}),(0,j.jsx)("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.77c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"}),(0,j.jsx)("path",{fill:"#FBBC05",d:"M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"}),(0,j.jsx)("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.2 1.64l3.15-3.15A10.97 10.97 0 0 0 12 1 11 11 0 0 0 2.18 7.06L5.84 9.9C6.71 7.3 9.14 5.38 12 5.38Z"})]})}function wa({size:t=18}){return(0,j.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[(0,j.jsx)("path",{fill:"currentColor",d:"M12 3 1.5 8.5 12 14l8.6-4.5v6.2h1.9V8.5L12 3Z",opacity:".9"}),(0,j.jsx)("path",{fill:"currentColor",d:"M6.2 11.4v4.1c0 2.2 2.6 4 5.8 4s5.8-1.8 5.8-4v-4.1L12 14.4l-5.8-3Z",opacity:".65"})]})}function Ml(t){return(0,j.jsx)(Ze,{...t,children:(0,j.jsx)("path",{d:"m5 12 4.5 4.5L19 7"})})}function Pl(t){return(0,j.jsxs)(Ze,{...t,children:[(0,j.jsx)("path",{d:"m15 4 1 2.2L18.2 7 16 8 15 10.2 14 8l-2.2-1L14 6.2 15 4Z"}),(0,j.jsx)("path",{d:"m5 19 8.5-8.5"}),(0,j.jsx)("path",{d:"m4 14 6 6"})]})}function Ol(t){return(0,j.jsxs)(Ze,{...t,children:[(0,j.jsx)("path",{d:"M20 13 13 20a2 2 0 0 1-2.8 0L3 12.8V3h9.8L20 10.2a2 2 0 0 1 0 2.8Z"}),(0,j.jsx)("circle",{cx:"7.5",cy:"7.5",r:"1.2"})]})}function _a(t){return(0,j.jsxs)(Ze,{...t,children:[(0,j.jsx)("path",{d:"m14 4 6 6-9.5 9.5H5v-5L14 4Z"}),(0,j.jsx)("path",{d:"M12 21h9"}),(0,j.jsx)("path",{d:"M14 6.5 17.5 10"})]})}function Ro(t){return(0,j.jsxs)(Ze,{...t,children:[(0,j.jsx)("path",{d:"M12 3a9 9 0 1 0 0 18h1.2a1.8 1.8 0 0 0 1.3-3l-.6-.7a1.6 1.6 0 0 1 1.2-2.7h1.6A4.3 4.3 0 0 0 21 10.3 7.7 7.7 0 0 0 12 3Z"}),(0,j.jsx)("circle",{cx:"7.5",cy:"11",r:"1"}),(0,j.jsx)("circle",{cx:"10",cy:"7.2",r:"1"}),(0,j.jsx)("circle",{cx:"15",cy:"7.2",r:"1"}),(0,j.jsx)("circle",{cx:"17",cy:"11",r:"1"})]})}function Oi(t){return(0,j.jsx)(Ze,{...t,children:(0,j.jsx)("path",{d:"M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"})})}function Ll(t){return(0,j.jsx)(Ze,{...t,children:(0,j.jsx)("path",{d:"M3 8h5V3M21 8h-5V3M3 16h5v5M21 16h-5v5"})})}function ka(t){return(0,j.jsxs)(Ze,{...t,children:[(0,j.jsx)("path",{d:"M12 3v12"}),(0,j.jsx)("path",{d:"m7 10 5 5 5-5"}),(0,j.jsx)("path",{d:"M4 18v2h16v-2"})]})}function Dl(t){return(0,j.jsxs)(Ze,{...t,children:[(0,j.jsx)("path",{d:"M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"}),(0,j.jsx)("path",{d:"M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"})]})}function Fl(t){return(0,j.jsxs)(Ze,{...t,children:[(0,j.jsx)("path",{d:"M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"}),(0,j.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})}function zl(t){return(0,j.jsxs)(Ze,{...t,children:[(0,j.jsx)("path",{d:"m3 3 18 18"}),(0,j.jsx)("path",{d:"M10.6 6.1A10.7 10.7 0 0 1 12 6c6 0 9.5 6 9.5 6a16.5 16.5 0 0 1-3.2 3.7"}),(0,j.jsx)("path",{d:"M6.2 6.7C3.9 8.4 2.5 12 2.5 12S6 18 12 18c1.3 0 2.5-.3 3.5-.8"}),(0,j.jsx)("path",{d:"M9.9 9.9a3 3 0 0 0 4.2 4.2"})]})}var Ou="dsh-reader";var Nt="books",Vt="annotations",yt="assets",Or="pdfTranslations",Ta="reader-background",Sa="book-collection:",Bl="dsh-reader:settings:v1";var Ft=Object.freeze({settingsVersion:2,autoTranslate:!1,hideTranslations:!1,fontSize:18,lineHeight:1.85,tocWidth:260,readingMode:"scroll",pageAnimation:"slide",bookAnimation:"slide",showToc:!0,aiOpen:!1,theme:"auto",fontFamily:"serif",fontWeight:400,contentWidth:760,brightness:1,backgroundPreset:"paper",customBackground:"#fbf7ee",textTone:"auto",backgroundImageKey:"",backgroundImageOpacity:.26,backgroundImageBlur:0,annotationPanelOpen:!1}),Mo=Object.freeze([{id:"book",label:"\u4E66\u7C4D",hint:"EPUB / MOBI / TXT \u4E0E\u4E66\u7C4D\u578B PDF"},{id:"paper",label:"\u6587\u732E",hint:"\u8BBA\u6587\u3001\u62A5\u544A\u3001\u5B66\u672F PDF"},{id:"document",label:"\u6587\u6863",hint:"Markdown / HTML \u7B49\u77ED\u6587\u6863"}]),Di=new Set(Mo.map(t=>t.id)),Lu=new Set(["paper","white","sepia","green","night","custom"]),Du=new Set(["serif","sans","kai","system"]),Fu=new Set(["scroll","book"]),zu=new Set(["slide","fade","push","flip"]),Bu=new Set(["slide","cover","flip"]),$u=new Set([400,500,600]),Hu=new Set(["auto","dark","light"]);function Ct(){return new Promise((t,e)=>{if(typeof indexedDB>"u"){e(new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 IndexedDB\uFF0C\u65E0\u6CD5\u4FDD\u5B58\u4E66\u67B6\u3002"));return}let r=indexedDB.open(Ou,3);r.onupgradeneeded=()=>{let n=r.result;n.objectStoreNames.contains(Nt)||n.createObjectStore(Nt,{keyPath:"id"}).createIndex("lastOpenedAt","lastOpenedAt"),n.objectStoreNames.contains(Vt)||n.createObjectStore(Vt,{keyPath:"id"}).createIndex("bookId","bookId"),n.objectStoreNames.contains(yt)||n.createObjectStore(yt,{keyPath:"key"}),n.objectStoreNames.contains(Or)||n.createObjectStore(Or,{keyPath:"key"}).createIndex("bookId","bookId")},r.onsuccess=()=>t(r.result),r.onerror=()=>e(r.error??new Error("\u6253\u5F00\u4E66\u67B6\u6570\u636E\u5E93\u5931\u8D25\u3002")),r.onblocked=()=>e(new Error("\u4E66\u67B6\u6570\u636E\u5E93\u88AB\u53E6\u4E00\u4E2A\u9875\u9762\u5360\u7528\uFF0C\u8BF7\u5173\u95ED\u5176\u5B83 DSH \u9875\u9762\u540E\u91CD\u8BD5\u3002"))})}function lr(t){return new Promise((e,r)=>{t.oncomplete=()=>e(),t.onerror=()=>r(t.error??new Error("\u4E66\u67B6\u5199\u5165\u5931\u8D25\u3002")),t.onabort=()=>r(t.error??new Error("\u4E66\u67B6\u5199\u5165\u5DF2\u53D6\u6D88\u3002"))})}function Li(t){return new Promise((e,r)=>{t.onsuccess=()=>e(t.result),t.onerror=()=>r(t.error)})}var Fi=()=>IDBKeyRange.bound(Sa,`${Sa}\uFFFF`),$l=t=>`${Sa}${t}`;function On(t){let e=/\.([^./\\]+)$/u.exec(String(t??""));return e?e[1].toLowerCase():""}function jr(t){switch(t){case"pdf":return"PDF";case"epub":return"EPUB";case"mobi":return"MOBI";case"azw":return"AZW";case"azw3":return"AZW3";case"txt":return"TXT";case"md":return"Markdown";case"html":return"HTML";default:return String(t??"\u6587\u4EF6").toUpperCase()}}function Po(t){return Mo.find(e=>e.id===t)?.label??"\u672A\u5206\u7C7B"}function zi(t){return["pdf","epub","mobi","azw","azw3","txt","md","markdown","html","htm"].includes(On(t))}function Uu(t){let e=String(t??"");return e.length===0?0:(e.match(/[\u3400-\u9fff\uf900-\ufaff]/gu)??[]).length/e.length}function Bi(t={}){let e=String(t.format||On(t.title)||"").toLowerCase(),r=`${t.title||""} ${t.author||""}`;return e==="pdf"?/(?:^|\b)(book|novel|textbook|edition|volume|monograph|文集|全集|教材|小说|专著|丛书)(?:\b|$)/iu.test(r)||Number(t.size)>45*1024*1024?"book":"paper":["epub","mobi","azw","azw3","txt"].includes(e)?"book":"document"}async function Wu(t){if(!globalThis.crypto?.subtle){let r=2166136261,n=new Uint8Array(t);for(let o=0;o<n.length;o+=1)r^=n[o],r=Math.imul(r,16777619);return(r>>>0).toString(16).padStart(8,"0")}let e=await globalThis.crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(e)].map(r=>r.toString(16).padStart(2,"0")).join("")}async function ju(t){let e=await t.slice(0,Math.min(t.size,1048576)).arrayBuffer();return`${(await Wu(e)).slice(0,20)}-${t.size}-${String(t.name).replace(/[^\w.-]+/gu,"_").slice(-48)}`}async function $i(){let t=await Ct();try{let n=t.transaction(Nt,"readonly").objectStore(Nt).index("lastOpenedAt").openCursor(null,"prev"),o=[];return await new Promise((i,a)=>{n.onsuccess=()=>{let s=n.result;if(!s){i();return}let l=s.value;o.push({id:l.id,title:l.title,author:l.author,format:l.format,size:l.size,addedAt:l.addedAt,lastOpenedAt:l.lastOpenedAt,progress:l.progress??null,language:l.language??"",cover:typeof l.cover=="string"?l.cover:"",category:Di.has(l.category)?l.category:Bi(l),categoryManual:!!l.categoryManual}),s.continue()},n.onerror=()=>a(n.error)}),o}finally{t.close()}}async function Ea(t){let e=await Ct();try{let n=e.transaction(Nt,"readonly").objectStore(Nt).get(t);return await new Promise((o,i)=>{n.onsuccess=()=>o(n.result??null),n.onerror=()=>i(n.error)})}finally{e.close()}}async function Hl(t,{title:e,author:r,language:n}={}){if(!zi(t.name))throw new Error(`\u6682\u4E0D\u652F\u6301 .${On(t.name)||"\u672A\u77E5"} \u6587\u4EF6\u3002\u8BF7\u9009\u62E9 PDF / EPUB / MOBI / TXT / Markdown / HTML\u3002`);if(t.size>335544320)throw new Error(`\u6587\u4EF6\u8D85\u8FC7 ${Math.round(335544320/1024/1024)} MB\uFF0C\u6D4F\u89C8\u5668\u4E66\u67B6\u65E0\u6CD5\u5BB9\u7EB3\u3002`);let o=await ju(t),i=await Ea(o),a=Date.now(),s=i?.id??o,l=On(t.name)==="markdown"?"md":On(t.name),d={title:String(e??i?.title??t.name.replace(/\.[^.]+$/u,"")).trim()||"\u672A\u547D\u540D\u6587\u6863",author:String(r??i?.author??"").trim(),language:String(n??i?.language??""),format:l,size:t.size},f={id:s,...d,category:i?.category&&Di.has(i.category)?i.category:Bi(d),categoryManual:!!i?.categoryManual,cover:typeof i?.cover=="string"?i.cover:"",addedAt:i?.addedAt??a,lastOpenedAt:a,progress:i?.progress??null,blob:t},g=await Ct();try{let u=g.transaction(Nt,"readwrite");return u.objectStore(Nt).put(f),await lr(u),f}catch(u){throw u?.name==="QuotaExceededError"?new Error("\u6D4F\u89C8\u5668\u5B58\u50A8\u7A7A\u95F4\u5DF2\u6EE1\uFF0C\u65E0\u6CD5\u52A0\u5165\u4E66\u67B6\u3002\u8BF7\u5220\u9664\u4E00\u4E9B\u4E66\u540E\u91CD\u8BD5\u3002"):u}finally{g.close()}}async function no(t,e){let r=await Ct();try{let n=r.transaction(Nt,"readwrite"),o=n.objectStore(Nt),i=o.get(t),a=null;return i.onsuccess=()=>{i.result&&(a={...i.result,...e},o.put(a))},await lr(n),a}finally{r.close()}}async function Ul(t,e,{manual:r=!0}={}){if(!Di.has(e))throw new Error("\u672A\u77E5\u7684\u4E66\u7C4D\u5206\u7C7B\u3002");return no(t,{category:e,categoryManual:r})}async function Wl(){let t=await $i(),e={book:0,paper:0,document:0},r=0;for(let n of t){if(n.categoryManual){e[n.category]=(e[n.category]||0)+1;continue}let o=Bi(n);e[o]=(e[o]||0)+1,o!==n.category&&(await no(n.id,{category:o,categoryManual:!1}),r+=1)}return{changed:r,counts:e}}async function Hi(t,e){return no(t,{lastOpenedAt:Date.now(),...e!==void 0?{progress:e}:{}})}async function jl(){let t=await Ct();try{let e=t.transaction(yt,"readonly").objectStore(yt);return(await Li(e.getAll(Fi()))).sort((n,o)=>n.createdAt-o.createdAt)}finally{t.close()}}async function Gl({id:t,name:e,add:r=[],remove:n=[]}){let o=e==null?void 0:String(e).trim();if((o!==void 0||!t)&&(!o||o.length>60))throw new Error("\u4E66\u5355\u540D\u79F0\u987B\u4E3A 1\u201360 \u4E2A\u5B57\u7B26\u3002");let i=await Ct();try{let a=i.transaction([yt,Nt],"readwrite"),s=a.objectStore(yt),l=a.objectStore(Nt),d=[...new Set(r)],f=lr(a);f.catch(()=>{});let[g,u]=await Promise.all([Li(s.getAll(Fi())),Promise.all(d.map(w=>Li(l.getKey(w))))]),p=g.find(w=>w.id===t);if(t&&!p)throw new Error("\u8FD9\u4E2A\u4E66\u5355\u5DF2\u88AB\u5220\u9664\u3002");let _=o??p.name;if(g.some(w=>w.id!==t&&w.name.toLowerCase()===_.toLowerCase()))throw new Error("\u5DF2\u6709\u540C\u540D\u4E66\u5355\uFF0C\u8BF7\u6362\u4E00\u4E2A\u540D\u79F0\u3002");if(u.some(w=>w===void 0))throw new Error("\u90E8\u5206\u9009\u4E2D\u7684\u4E66\u5DF2\u4ECE\u4E66\u67B6\u5220\u9664\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u3002");let N=new Set(n),y=t??Jl("collection"),P={id:y,key:$l(y),name:_,bookIds:[...new Set([...p?.bookIds??[],...u])].filter(w=>!N.has(w)),createdAt:p?.createdAt??Date.now()};return s.put(P),await f,P}finally{i.close()}}async function ql(t){let e=await Ct();try{let r=e.transaction(yt,"readwrite");r.objectStore(yt).delete($l(t)),await lr(r)}finally{e.close()}}async function Xl(t){let e=await Ct();try{let r=e.transaction([Nt,Vt,Or,yt],"readwrite");r.objectStore(Nt).delete(t),r.objectStore(yt).delete(`pdf-translation:${t}`);let n=r.objectStore(yt).openCursor(Fi());n.onsuccess=()=>{let s=n.result;if(!s)return;let l=s.value;l.bookIds.includes(t)&&s.update({...l,bookIds:l.bookIds.filter(d=>d!==t)}),s.continue()};let o=r.objectStore(Or).index("bookId").openKeyCursor(IDBKeyRange.only(t));o.onsuccess=()=>{let s=o.result;s&&(r.objectStore(Or).delete(s.primaryKey),s.continue())};let a=r.objectStore(Vt).index("bookId").openKeyCursor(IDBKeyRange.only(t));a.onsuccess=()=>{let s=a.result;s&&(r.objectStore(Vt).delete(s.primaryKey),s.continue())},await lr(r)}finally{e.close()}}async function Vl(){let t=await Ct();try{let e=t.transaction([Nt,Vt,Or,yt],"readwrite");e.objectStore(Nt).clear(),e.objectStore(Vt).clear(),e.objectStore(Or).clear();let r=e.objectStore(yt).openKeyCursor();r.onsuccess=()=>{let n=r.result;if(n){let o=String(n.key);(o.startsWith("pdf-translation:")||o.startsWith(Sa))&&e.objectStore(yt).delete(n.primaryKey),n.continue()}},await lr(e)}finally{t.close()}}async function Kl(t){let e=await Ct();try{let r=e.transaction(Or,"readonly").objectStore(Or).get(t);return await new Promise((n,o)=>{r.onsuccess=()=>n(r.result||null),r.onerror=()=>o(r.error)})}finally{e.close()}}async function Yl(t){let e=await Ct();try{let r=e.transaction([Nt,Or],"readwrite"),n=r.objectStore(Nt).get(t.bookId);n.onsuccess=()=>{n.result&&r.objectStore(Or).put({...t,updatedAt:Date.now()})},await lr(r)}finally{e.close()}}async function Zl(t){let e=await Ct();try{let r=e.transaction(yt,"readonly").objectStore(yt).get(`pdf-translation:${t}`);return await new Promise((n,o)=>{r.onsuccess=()=>n(r.result?.value||{}),r.onerror=()=>o(r.error)})}finally{e.close()}}async function Ql(t,e){let r=await Ct();try{let n=r.transaction([Nt,yt],"readwrite"),o=n.objectStore(Nt).get(t);o.onsuccess=()=>{o.result&&n.objectStore(yt).put({key:`pdf-translation:${t}`,value:e})},await lr(n)}finally{r.close()}}function Jl(t="a"){return globalThis.crypto?.randomUUID?`${t}-${crypto.randomUUID()}`:`${t}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}async function ec(t){let e=await Ct();try{let o=e.transaction(Vt,"readonly").objectStore(Vt).index("bookId").getAll(t);return(await new Promise((a,s)=>{o.onsuccess=()=>a(o.result??[]),o.onerror=()=>s(o.error)})).sort((a,s)=>{let l=Number.isFinite(a.page)?a.page:Number.MAX_SAFE_INTEGER,d=Number.isFinite(s.page)?s.page:Number.MAX_SAFE_INTEGER;if(l!==d)return l-d;let f=Number.isFinite(a.chapterIndex)?a.chapterIndex:Number.MAX_SAFE_INTEGER,g=Number.isFinite(s.chapterIndex)?s.chapterIndex:Number.MAX_SAFE_INTEGER;return f!==g?f-g:(a.createdAt||0)-(s.createdAt||0)})}finally{e.close()}}async function tc(t){let e=Date.now(),r={...t,id:t.id||Jl(),createdAt:t.createdAt||e,updatedAt:e};if(!r.bookId)throw new Error("\u6279\u6CE8\u7F3A\u5C11\u4E66\u7C4D\u4FE1\u606F\u3002");if(!r.kind||!r.style)throw new Error("\u6279\u6CE8\u7F3A\u5C11\u7C7B\u578B\u3002");let n=await Ct();try{let o=n.transaction(Vt,"readwrite");return o.objectStore(Vt).put(r),await lr(o),r}finally{n.close()}}async function rc(t,e){let r=await Ct();try{let n=r.transaction(Vt,"readwrite"),o=n.objectStore(Vt),i=await new Promise((s,l)=>{let d=o.get(t);d.onsuccess=()=>s(d.result??null),d.onerror=()=>l(d.error)});if(!i)return await lr(n),null;let a={...i,...e,id:i.id,updatedAt:Date.now()};return o.put(a),await lr(n),a}finally{r.close()}}async function nc(t){let e=await Ct();try{let r=e.transaction(Vt,"readwrite");r.objectStore(Vt).delete(t),await lr(r)}finally{e.close()}}async function oc(t){if(!t||!t.size)throw new Error("\u80CC\u666F\u56FE\u7247\u4E3A\u7A7A\u3002");if(t.size>16777216)throw new Error(`\u80CC\u666F\u56FE\u7247\u8D85\u8FC7 ${Math.round(16777216/1024/1024)} MB\uFF0C\u8BF7\u9009\u62E9\u66F4\u5C0F\u7684\u56FE\u7247\u3002`);let e=await Ct();try{let r=e.transaction(yt,"readwrite");return r.objectStore(yt).put({key:Ta,blob:t,type:t.type||"image/*",size:t.size,updatedAt:Date.now()}),await lr(r),Ta}finally{e.close()}}async function ac(){let t=await Ct();try{let r=t.transaction(yt,"readonly").objectStore(yt).get(Ta);return(await new Promise((o,i)=>{r.onsuccess=()=>o(r.result??null),r.onerror=()=>i(r.error)}))?.blob??null}finally{t.close()}}async function ic(){let t=await Ct();try{let e=t.transaction(yt,"readwrite");e.objectStore(yt).delete(Ta),await lr(e)}finally{t.close()}}function Pn(t,e,r,n){let o=Number(t);return Number.isFinite(o)?Math.max(e,Math.min(r,o)):n}function Gu(t,e){return/^#[0-9a-f]{6}$/iu.test(String(t))?String(t):e}function sc(){try{let t=localStorage.getItem(Bl);if(!t)return{...Ft};let e=JSON.parse(t),n=(Number(e.settingsVersion)||1)>=2&&typeof e.autoTranslate=="boolean"?e.autoTranslate:!1;return{...Ft,...e,settingsVersion:2,autoTranslate:n,hideTranslations:!!e.hideTranslations,fontSize:Pn(e.fontSize,13,34,Ft.fontSize),lineHeight:Pn(e.lineHeight,1.35,2.4,Ft.lineHeight),tocWidth:Pn(e.tocWidth,180,520,Ft.tocWidth),readingMode:e.readingMode==="page"?"book":Fu.has(e.readingMode)?e.readingMode:Ft.readingMode,pageAnimation:zu.has(e.pageAnimation)?e.pageAnimation:Ft.pageAnimation,bookAnimation:Bu.has(e.bookAnimation)?e.bookAnimation:Ft.bookAnimation,fontFamily:Du.has(e.fontFamily)?e.fontFamily:Ft.fontFamily,fontWeight:$u.has(Number(e.fontWeight))?Number(e.fontWeight):Ft.fontWeight,contentWidth:Pn(e.contentWidth,520,1600,Ft.contentWidth),brightness:Pn(e.brightness,.6,1.2,Ft.brightness),backgroundPreset:Lu.has(e.backgroundPreset)?e.backgroundPreset:Ft.backgroundPreset,customBackground:Gu(e.customBackground,Ft.customBackground),textTone:Hu.has(e.textTone)?e.textTone:Ft.textTone,backgroundImageKey:typeof e.backgroundImageKey=="string"?e.backgroundImageKey:"",backgroundImageOpacity:Pn(e.backgroundImageOpacity,0,.85,Ft.backgroundImageOpacity),backgroundImageBlur:Pn(e.backgroundImageBlur,0,12,Ft.backgroundImageBlur),annotationPanelOpen:!!e.annotationPanelOpen}}catch{return{...Ft}}}function lc(t){try{localStorage.setItem(Bl,JSON.stringify(t))}catch{}}function cc(t){let e=Number(t)||0;return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:e<1024*1024*1024?`${(e/1024/1024).toFixed(1)} MB`:`${(e/1024/1024/1024).toFixed(2)} GB`}function Ui(t){if(!t)return"";let e=Date.now()-Number(t);return e<6e4?"\u521A\u521A":e<36e5?`${Math.floor(e/6e4)} \u5206\u949F\u524D`:e<864e5?`${Math.floor(e/36e5)} \u5C0F\u65F6\u524D`:e<7*864e5?`${Math.floor(e/864e5)} \u5929\u524D`:new Date(t).toLocaleDateString("zh-CN")}function dc(t){let e=String(t??"").replace(/\s+/gu,"");if(e.length<40)return!1;let r=Uu(e),n=(e.match(/[A-Za-zÀ-ÖØ-öø-ÿ\u0400-\u04ff]/gu)??[]).length/e.length;return r<.18&&n>.45}var cr=Mt(require("react"),1);var be=require("react/jsx-runtime"),Lr=t=>t.title||"\u672A\u547D\u540D\u6587\u6863";function Wi(t,e){return`${t.title||""} ${t.author||""}`.toLowerCase().includes(e)}function qu({book:t}){let[e,r]=cr.default.useState(!1);return t.cover&&!e?(0,be.jsx)("img",{src:t.cover,alt:"",loading:"lazy",decoding:"async",onError:()=>r(!0)}):(0,be.jsx)("span",{className:"dshr-collection__spine",children:jr(t.format)})}function hc({folder:t,expanded:e,onToggle:r,onOpen:n,onRead:o}){let i=cr.default.useId(),a=cr.default.useId();return(0,be.jsxs)("article",{className:"dshr-collection","data-collection-id":t.id,children:[(0,be.jsxs)("button",{type:"button",className:"dshr-collection__open","aria-label":`\u6253\u5F00\u4E66\u5355 ${t.name}`,"aria-describedby":a,onClick:n,children:[(0,be.jsxs)("span",{className:"dshr-collection__top",children:[(0,be.jsx)("span",{className:"dshr-collection__icon",children:(0,be.jsx)(xa,{size:17})}),(0,be.jsxs)("span",{className:"dshr-collection__heading",children:[(0,be.jsx)("strong",{title:t.name,children:t.name}),(0,be.jsxs)("small",{id:a,children:[t.system?"\u9ED8\u8BA4\u5206\u7C7B":"\u81EA\u5EFA\u4E66\u5355"," \xB7 ",t.books.length," \u672C"]})]}),(0,be.jsx)(ma,{size:16})]}),t.books.length?(0,be.jsx)("span",{className:"dshr-collection__covers",children:t.books.slice(0,4).map(s=>(0,be.jsxs)("span",{className:"dshr-collection__sample",children:[(0,be.jsx)("span",{className:"dshr-collection__cover",children:(0,be.jsx)(qu,{book:s},s.cover)}),(0,be.jsx)("span",{className:"dshr-collection__title",title:Lr(s),children:Lr(s)})]},s.id))}):(0,be.jsx)("span",{className:"dshr-collection__empty",children:"\u6682\u672A\u6536\u5F55\u4E66\u7C4D"})]}),t.books.length>0&&(0,be.jsxs)("button",{type:"button",className:"dshr-collection__peek",onClick:r,"aria-expanded":e,"aria-controls":i,children:[e?"\u6536\u8D77\u4E66\u540D":`\u9884\u89C8\u5168\u90E8 ${t.books.length} \u672C`," ",(0,be.jsx)(Nl,{size:13})]}),t.books.length>0&&(0,be.jsx)("ul",{className:"dshr-collection__preview",id:i,hidden:!e,"aria-label":`${t.name}\u4E66\u540D\u6E05\u5355`,children:e&&t.books.map(s=>(0,be.jsx)("li",{children:(0,be.jsxs)("button",{type:"button",onClick:()=>o(s),children:[(0,be.jsx)("span",{children:Lr(s)}),(0,be.jsx)("small",{children:jr(s.format)})]})},s.id))})]})}function uc({action:t,books:e,collections:r,onClose:n,onCreate:o,onSave:i,onDelete:a}){let s=cr.default.useRef(null),l=cr.default.useRef(!1),[d,f]=cr.default.useState(!1),[g,u]=cr.default.useState(""),[p,_]=cr.default.useState(t.collection?.name??""),[N,y]=cr.default.useState(""),P=t.collection?.bookIds??[],[w,v]=cr.default.useState(()=>new Set(t.bookIds??P)),[S,C]=cr.default.useState(""),E=cr.default.useId(),D=t.kind==="add",I=t.kind==="delete",b=D?"\u52A0\u5165\u4E66\u5355":I?"\u5220\u9664\u4E66\u5355":t.collection?"\u7F16\u8F91\u4E66\u5355":"\u65B0\u5EFA\u4E66\u5355",F=N.trim().toLowerCase(),L=!D&&!I?e.filter(B=>Wi(B,F)):[];cr.default.useLayoutEffect(()=>{let B=s.current;return B.showModal(),()=>B.close()},[]);async function z(B){if(B.preventDefault(),!l.current){l.current=!0,f(!0),u("");try{I?await a(t.collection.id):D?await i({id:S,add:t.bookIds}):await i({id:t.collection?.id,name:p,add:[...w].filter(Y=>!P.includes(Y)),remove:P.filter(Y=>!w.has(Y))}),n()}catch(Y){u(Y?.message||"\u4E66\u5355\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002")}finally{l.current=!1,f(!1)}}}return(0,be.jsx)("dialog",{ref:s,className:"dshr-modal dshr-collection-dialog","aria-labelledby":E,onCancel:B=>{B.preventDefault(),l.current||n()},children:(0,be.jsxs)("form",{onSubmit:z,children:[(0,be.jsx)("h3",{id:E,children:b}),I?(0,be.jsxs)("p",{children:["\u5220\u9664\u300C",t.collection.name,"\u300D\u540E\uFF0C\u91CC\u9762\u7684\u4E66\u4ECD\u53EF\u5728\u5168\u90E8\u6587\u6863\u4E2D\u6253\u5F00\uFF0C\u8FDB\u5EA6\u4E0E\u6279\u6CE8\u4F1A\u4FDD\u7559\u3002"]}):D?(0,be.jsxs)("label",{className:"dshr-collection-dialog__field",children:[(0,be.jsxs)("span",{children:["\u5C06 ",t.bookIds.length," \u672C\u4E66\u52A0\u5165"]}),(0,be.jsxs)("select",{value:S,onChange:B=>C(B.target.value),disabled:d,required:!0,children:[(0,be.jsx)("option",{value:"",children:"\u9009\u62E9\u81EA\u5EFA\u4E66\u5355"}),r.map(B=>(0,be.jsxs)("option",{value:B.id,children:[B.name," \xB7 ",B.bookIds.length," \u672C"]},B.id))]})]}):(0,be.jsxs)(be.Fragment,{children:[(0,be.jsxs)("label",{className:"dshr-collection-dialog__field",children:[(0,be.jsx)("span",{children:"\u4E66\u5355\u540D\u79F0"}),(0,be.jsx)("input",{value:p,onChange:B=>_(B.target.value),placeholder:"\u4F8B\u5982\uFF1A\u8BBA\u6587\u5F85\u8BFB",maxLength:60,disabled:d,required:!0})]}),(0,be.jsxs)("div",{className:"dshr-collection-dialog__listbar",children:[(0,be.jsx)("strong",{children:"\u6536\u5F55\u4E66\u7C4D"}),(0,be.jsxs)("span",{children:[w.size," \u672C\u5DF2\u9009"]})]}),e.length>0&&(0,be.jsxs)("label",{className:"dshr-library__search dshr-collection-dialog__search",children:[(0,be.jsx)(Io,{size:14}),(0,be.jsx)("input",{type:"search",placeholder:"\u641C\u7D22\u4E66\u540D\u3001\u4F5C\u8005","aria-label":"\u641C\u7D22\u53EF\u52A0\u5165\u7684\u4E66\u7C4D",value:N,onChange:B=>y(B.target.value)})]}),L.length?(0,be.jsx)("div",{className:"dshr-collection-dialog__choices",children:L.map(B=>(0,be.jsxs)("label",{children:[(0,be.jsx)("input",{type:"checkbox",checked:w.has(B.id),disabled:d,onChange:Y=>{let ne=Y.target.checked;v(re=>{let oe=new Set(re);return ne?oe.add(B.id):oe.delete(B.id),oe})}}),(0,be.jsxs)("span",{children:[Lr(B),(0,be.jsx)("small",{children:[jr(B.format),B.author].filter(Boolean).join(" \xB7 ")})]})]},B.id))}):(0,be.jsx)("p",{children:e.length?"\u6CA1\u6709\u5339\u914D\u7684\u4E66\u7C4D\u3002":"\u53EF\u4EE5\u5148\u521B\u5EFA\u7A7A\u4E66\u5355\uFF0C\u5BFC\u5165\u4E66\u7C4D\u540E\u518D\u52A0\u5165\u3002"})]}),g&&(0,be.jsx)("p",{className:"dshr-collection-dialog__error",role:"alert",children:g}),(0,be.jsxs)("div",{className:"dshr-modal__actions dshr-collection-dialog__actions",children:[D&&(0,be.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:d,onClick:()=>o(t.bookIds),children:[(0,be.jsx)(cn,{size:15})," \u65B0\u5EFA\u4E66\u5355"]}),(0,be.jsx)("button",{type:"button",className:"dshr-btn",disabled:d,onClick:n,children:"\u53D6\u6D88"}),(0,be.jsxs)("button",{type:"submit",className:`dshr-btn ${I?"dshr-btn--danger":"dshr-btn--primary"}`,disabled:d||(D?!S:!I&&!p.trim()),children:[I&&(0,be.jsx)(ln,{size:14}),d?"\u6B63\u5728\u4FDD\u5B58\u2026":I?"\u5220\u9664\u4E66\u5355":D?"\u52A0\u5165":"\u4FDD\u5B58\u4E66\u5355"]})]})]})})}var H=require("react/jsx-runtime");function pc(t){let e=t.progress;return e?typeof e.page=="number"&&typeof e.pages=="number"&&e.pages>0?Math.max(0,Math.min(100,e.page/e.pages*100)):typeof e.percent=="number"?Math.max(0,Math.min(100,e.percent)):typeof e.chapter=="number"&&typeof e.chapters=="number"&&e.chapters>0?Math.max(0,Math.min(100,(e.chapter+1)/e.chapters*100)):0:0}var Xu={book:"paper",paper:"document",document:"book"};function Vu({book:t,onOpen:e,onDelete:r,onCycleCategory:n,onAdd:o,onRemove:i,selection:a,onToggle:s}){let l=pc(t),d=[jr(t.format),t.author||"",cc(t.size)].filter(Boolean).join(" \xB7 ");return(0,H.jsxs)("article",{className:`dshr-book-card${a?" is-selecting":""}${a?.has(t.id)?" is-selected":""}`,children:[(0,H.jsxs)("button",{type:"button",className:"dshr-book","aria-pressed":a?a.has(t.id):void 0,"aria-label":a?`\u9009\u62E9 ${Lr(t)}`:`\u6253\u5F00 ${Lr(t)}`,onClick:()=>a?s(t.id):e(t),children:[(0,H.jsx)("span",{className:"dshr-book__media",children:t.cover?(0,H.jsx)("img",{className:"dshr-book__cover",src:t.cover,alt:"",loading:"lazy",decoding:"async"}):(0,H.jsx)("span",{className:"dshr-book__spine",children:jr(t.format)})}),(0,H.jsxs)("span",{className:"dshr-book__body",children:[(0,H.jsx)("span",{className:"dshr-book__title",children:Lr(t)}),(0,H.jsx)("span",{className:"dshr-book__meta",children:d}),(0,H.jsxs)("span",{className:"dshr-book__foot",children:[(0,H.jsx)("span",{children:t.lastOpenedAt?`\u9605\u8BFB\u4E8E ${Ui(t.lastOpenedAt)}`:Ui(t.addedAt)}),(0,H.jsx)("span",{children:l>0?`${Math.round(l)}%`:"\u672A\u5F00\u59CB"})]}),(0,H.jsx)("span",{className:"dshr-book__progress","aria-hidden":"true",children:(0,H.jsx)("i",{style:{"--p":`${l}%`}})})]}),a&&(0,H.jsx)("span",{className:"dshr-book__selected","aria-hidden":"true",children:a.has(t.id)&&(0,H.jsx)(Ml,{size:14})})]}),!a&&(0,H.jsxs)("div",{className:"dshr-book__badges",children:[(0,H.jsxs)("button",{type:"button",className:`dshr-book__category is-${t.category||"document"}`,title:`\u9ED8\u8BA4\u5206\u7C7B\uFF1A${Po(t.category)}${t.categoryManual?"\uFF08\u624B\u52A8\uFF09":"\uFF08\u81EA\u52A8\uFF09"} \xB7 \u70B9\u51FB\u5207\u6362`,onClick:()=>n(t),children:[(0,H.jsx)(Ol,{size:11})," ",Po(t.category)]}),(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--ghost dshr-book__add","aria-label":`\u5C06 ${Lr(t)} \u52A0\u5165\u4E66\u5355`,onClick:()=>o([t.id]),children:[(0,H.jsx)(cn,{size:13})," \u52A0\u5165\u4E66\u5355"]}),i?(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost","aria-label":`\u4ECE\u6B64\u4E66\u5355\u79FB\u51FA ${Lr(t)}`,title:"\u4ECE\u6B64\u4E66\u5355\u79FB\u51FA",onClick:()=>i([t.id]),children:(0,H.jsx)(va,{size:14})}):(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost dshr-book__delete","aria-label":`\u4ECE\u4E66\u67B6\u5220\u9664 ${Lr(t)}`,title:"\u4ECE\u4E66\u67B6\u5220\u9664",onClick:()=>r(t),children:(0,H.jsx)(ln,{size:14})})]})]})}function fc({books:t,collections:e,onCollectionsChange:r,loading:n,resumeBook:o,onResume:i,importing:a,organizing:s,categoryFilter:l,onCategoryFilter:d,onAutoOrganize:f,onImport:g,onOpen:u,onDelete:p,onCycleCategory:_,onSettings:N,onOnlineImport:y}){let P=dr.default.useRef(null),[w,v]=dr.default.useState(!1),[S,C]=dr.default.useState(""),[E,D]=dr.default.useState(null),[I,b]=dr.default.useState(null),[F,L]=dr.default.useState(null),[z,B]=dr.default.useState(""),Y=dr.default.useRef(0),ne=dr.default.useRef(null),re=dr.default.useRef(null),oe=dr.default.useRef(!1),U=dr.default.useMemo(()=>{let h=new Map(t.map(x=>[x.id,x])),c=new Map(Mo.map(x=>[x.id,[]])),k=[...t].sort((x,J)=>x.addedAt-J.addedAt);for(let x of k)c.get(x.category)?.push(x);return[...e.map(x=>({...x,books:x.bookIds.map(J=>h.get(J)).filter(Boolean)})),...Mo.map(x=>({id:x.id,name:x.label,system:!0,books:c.get(x.id)}))]},[t,e]),K=U.find(h=>h.id===l),te=K?.books??t,O=S.trim().toLowerCase(),ue=O?te.filter(h=>Wi(h,O)):te,fe=I?te.filter(h=>I.has(h.id)).map(h=>h.id):[];dr.default.useLayoutEffect(()=>{oe.current&&(oe.current=!1,re.current?.focus({preventScroll:!0}))},[l]);function Te(h){oe.current=!0,d(h),C(""),b(null),D(null),B(""),ne.current?.scrollTo({top:0})}let ie=(h=[])=>L({kind:"edit",bookIds:h}),Ae=h=>e.length?L({kind:"add",bookIds:h}):ie(h);async function Ue(h){let c=await Gl(h);return r(k=>k.some(x=>x.id===c.id)?k.map(x=>x.id===c.id?c:x):[...k,c]),c}async function ge(h){try{await Ue({id:K.id,remove:h}),b(null),B(`\u5DF2\u4ECE\u300C${K.name}\u300D\u79FB\u51FA ${h.length} \u672C\u3002`)}catch(c){B(c?.message||"\u79FB\u51FA\u4E66\u5355\u5931\u8D25\u3002")}}async function ut(h){await ql(h),r(c=>c.filter(k=>k.id!==h)),l===h&&Te("all"),B("\u4E66\u5355\u5DF2\u5220\u9664\u3002")}let Oe=()=>P.current?.click(),ft=h=>{h.preventDefault(),Y.current=0,v(!1);let c=[...h.dataTransfer?.files??[]].filter(k=>zi(k.name));if(c.length===0){g([],{rejected:!0});return}g(c)};return(0,H.jsxs)("div",{className:"dshr-library",ref:ne,children:[(0,H.jsxs)("div",{className:"dshr-library__inner",children:[(0,H.jsxs)("header",{className:"dshr-hero",children:[(0,H.jsxs)("div",{children:[(0,H.jsxs)("div",{className:"dshr-hero__eyebrow",children:[(0,H.jsx)(Mi,{size:15})," DSH READER \xB7 LIBRARY"]}),(0,H.jsx)("h1",{children:"\u6211\u7684\u4E66\u67B6"}),(0,H.jsx)("p",{children:"\u7528\u4E66\u5355\u6574\u7406\u4E66\u7C4D\u3001\u8BBA\u6587\u548C\u9605\u8BFB\u8D44\u6599\u3002"})]}),(0,H.jsxs)("div",{className:"dshr-hero__actions",children:[(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:Oe,disabled:a,children:[a?(0,H.jsx)("span",{className:"dshr-spinner"}):(0,H.jsx)(cn,{size:15}),a?"\u6B63\u5728\u52A0\u5165\u4E66\u67B6\u2026":"\u5BFC\u5165\u6587\u6863"]}),(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:y,title:"\u4ECE\u53E4\u767B\u5821\u3001Standard Ebooks\u3001arXiv \u7B49\u516C\u5F00\u6765\u6E90\u4E0B\u8F7D\u5E76\u6253\u5F00",children:[(0,H.jsx)(ka,{size:15})," \u516C\u5F00\u4E66\u5E93\u5BFC\u5165"]}),(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:f,disabled:s||t.length===0,title:"\u6309\u6587\u4EF6\u7C7B\u578B\u4E0E\u5143\u6570\u636E\uFF0C\u628A\u4E66\u67B6\u6574\u7406\u6210\u4E66\u7C4D / \u6587\u732E / \u6587\u6863",children:[s?(0,H.jsx)("span",{className:"dshr-spinner"}):(0,H.jsx)(Pl,{size:15}),s?"\u6574\u7406\u4E2D\u2026":"\u4E00\u952E\u6574\u7406"]}),(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:N,title:"\u9605\u8BFB\u4E0E\u4E66\u67B6\u8BBE\u7F6E",children:[(0,H.jsx)(ba,{size:15})," \u8BBE\u7F6E"]})]})]}),o?(0,H.jsxs)("button",{type:"button",className:"dshr-resume",onClick:()=>i(o),children:[(0,H.jsx)("span",{className:"dshr-resume__mark",children:(0,H.jsx)(Mi,{size:19})}),(0,H.jsxs)("span",{className:"dshr-resume__body",children:[(0,H.jsx)("span",{className:"dshr-resume__eyebrow",children:"\u7EE7\u7EED\u4E0A\u6B21\u9605\u8BFB"}),(0,H.jsx)("strong",{children:o.title||"\u4E0A\u6B21\u6253\u5F00\u7684\u6587\u6863"}),(0,H.jsxs)("span",{className:"dshr-resume__meta",children:[jr(o.format),o.progress?.page?` \xB7 \u7B2C ${o.progress.page}${o.progress.pages?` / ${o.progress.pages}`:""} \u9875`:"",` \xB7 ${Math.round(pc(o))}%`]})]}),(0,H.jsx)("span",{className:"dshr-resume__arrow",children:"\u2192"})]}):null,!K&&!n&&(0,H.jsxs)("section",{className:"dshr-collections","aria-label":"\u4E66\u5355\u6587\u4EF6\u5939",children:[(0,H.jsxs)("div",{className:"dshr-collections__bar",children:[(0,H.jsx)("h2",{ref:re,tabIndex:-1,children:"\u4E66\u5355\u6587\u4EF6\u5939"}),(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>ie(),children:[(0,H.jsx)(cn,{size:15})," \u65B0\u5EFA\u4E66\u5355"]})]}),(0,H.jsx)("div",{className:"dshr-collections__grid",children:U.map(h=>(0,H.jsx)(hc,{folder:h,expanded:E===h.id,onToggle:()=>D(c=>c===h.id?null:h.id),onOpen:()=>Te(h.id),onRead:u},h.id))})]}),!K&&(0,H.jsxs)("section",{className:`dshr-drop${t.length?" is-compact":""}${w?" is-over":""}`,onDragEnter:h=>{h.preventDefault(),Y.current+=1,v(!0)},onDragOver:h=>h.preventDefault(),onDragLeave:()=>{Y.current=Math.max(0,Y.current-1),Y.current===0&&v(!1)},onDrop:ft,"aria-label":"\u62D6\u653E\u6587\u6863\u4EE5\u5BFC\u5165",children:[(0,H.jsx)("div",{className:"dshr-drop__mark",children:(0,H.jsx)(Al,{size:24})}),(0,H.jsxs)("div",{className:"dshr-drop__body",children:[(0,H.jsx)("div",{className:"dshr-drop__title",children:"\u62D6\u4E00\u4EFD\u6587\u732E\u6216\u4E66\u5230\u8FD9\u91CC\uFF0C\u6216\u70B9\u51FB\u5BFC\u5165"}),(0,H.jsx)("div",{className:"dshr-drop__hint",children:"\u6587\u4EF6\u53EA\u4FDD\u5B58\u5728\u672C\u673A\u6D4F\u89C8\u5668\u4E66\u67B6\u4E2D\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\uFF1B\u7FFB\u8BD1\u4EC5\u53D1\u9001\u5F53\u524D\u9009\u4E2D\u7684\u6BB5\u843D\u3002"}),!t.length&&(0,H.jsx)("div",{className:"dshr-drop__formats",children:["PDF","EPUB","MOBI","AZW3","TXT","Markdown","HTML"].map(h=>(0,H.jsx)("span",{className:"dshr-chip",children:h},h))})]}),(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:Oe,disabled:a,children:"\u9009\u62E9\u6587\u4EF6"})]}),K&&(0,H.jsxs)("div",{className:"dshr-collection-context",children:[(0,H.jsxs)("nav",{"aria-label":"\u4E66\u67B6\u4F4D\u7F6E",children:[(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--ghost",onClick:()=>Te("all"),children:[(0,H.jsx)(ga,{size:15})," \u8FD4\u56DE\u4E66\u67B6"]}),(0,H.jsxs)("span",{ref:re,tabIndex:-1,"aria-current":"page",children:[(0,H.jsx)(xa,{size:16})," ",K.name]})]}),!K.system&&(0,H.jsxs)("div",{className:"dshr-collection-context__actions",children:[(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>L({kind:"edit",collection:K}),children:"\u7F16\u8F91\u4E66\u5355"}),(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--ghost",onClick:()=>L({kind:"delete",collection:K}),children:[(0,H.jsx)(ln,{size:15})," \u5220\u9664\u4E66\u5355"]})]})]}),(0,H.jsxs)("div",{className:"dshr-library__bar",children:[(0,H.jsx)("h2",{children:K?"\u4E66\u5355\u5185\u5BB9":"\u5168\u90E8\u6587\u6863"}),(0,H.jsxs)("div",{className:"dshr-library__search",children:[(0,H.jsx)(Io,{size:14}),(0,H.jsx)("input",{type:"search",value:S,onChange:h=>C(h.target.value),placeholder:K?"\u641C\u7D22\u6B64\u4E66\u5355":"\u641C\u7D22\u4E66\u540D\u3001\u4F5C\u8005","aria-label":K?"\u641C\u7D22\u6B64\u4E66\u5355":"\u641C\u7D22\u4E66\u67B6"})]}),(0,H.jsxs)("span",{children:[ue.length," / ",te.length," \u672C"]}),te.length>0&&(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline","aria-pressed":!!I,onClick:()=>b(h=>h?null:new Set),children:I?"\u9000\u51FA\u591A\u9009":"\u591A\u9009"})]}),(0,H.jsx)("div",{className:"dshr-library__notice",role:"status",children:z}),I&&(0,H.jsxs)("div",{className:"dshr-collection-selection","aria-label":"\u6279\u91CF\u4E66\u5355\u64CD\u4F5C",children:[(0,H.jsxs)("span",{children:["\u5DF2\u9009 ",fe.length," \u672C"]}),(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",disabled:!ue.length,onClick:()=>b(h=>new Set([...h,...ue.map(c=>c.id)])),children:"\u5168\u9009\u5F53\u524D\u7ED3\u679C"}),(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:!fe.length,onClick:()=>Ae(fe),children:"\u52A0\u5165\u4E66\u5355"}),K&&!K.system&&(0,H.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",disabled:!fe.length,onClick:()=>{ge(fe)},children:"\u4ECE\u6B64\u4E66\u5355\u79FB\u51FA"})]}),n?(0,H.jsxs)("div",{className:"dshr-loading",style:{minHeight:180},children:[(0,H.jsx)("div",{className:"dshr-loading__ring"}),(0,H.jsx)("span",{children:"\u6B63\u5728\u6253\u5F00\u4E66\u67B6\u2026"})]}):ue.length===0?(0,H.jsxs)("div",{className:"dshr-empty-books",children:[O?`\u6CA1\u6709\u5339\u914D\u300C${S.trim()}\u300D\u7684\u6587\u6863\u3002`:K?`\u300C${K.name}\u300D\u8FD8\u6CA1\u6709\u4E66\u3002`:"\u5BFC\u5165\u6587\u6863\u540E\uFF0C\u5C31\u53EF\u4EE5\u628A\u5B83\u4EEC\u52A0\u5165\u4E66\u5355\u3002",K&&!K.system&&!O&&(0,H.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>L({kind:"edit",collection:K}),children:[(0,H.jsx)(cn,{size:15})," \u6DFB\u52A0\u4E66\u7C4D"]})]}):(0,H.jsx)("div",{className:"dshr-books",children:ue.map(h=>(0,H.jsx)(Vu,{book:h,onOpen:u,onDelete:p,onCycleCategory:c=>_(c,Xu[c.category||"document"]),onAdd:Ae,onRemove:K&&!K.system?ge:void 0,selection:I,onToggle:c=>b(k=>{let x=new Set(k);return x.has(c)?x.delete(c):x.add(c),x})},h.id))}),(0,H.jsxs)("footer",{className:"dshr-library__foot",children:[(0,H.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,H.jsx)(ro,{size:14})," \u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1"]}),(0,H.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,H.jsx)(yn,{size:14})," \u9009\u4E2D\u95EE AI"]}),(0,H.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,H.jsx)(Io,{size:14})," Google / \u5B66\u672F\u641C\u7D22"]}),(0,H.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,H.jsx)(Sl,{size:14})," \u672C\u5730\u4E66\u67B6 \xB7 \u8FDB\u5EA6\u4E0E\u6279\u6CE8\u81EA\u52A8\u4FDD\u5B58"]})]})]}),F&&(0,H.jsx)(uc,{action:F,books:t,collections:e,onClose:()=>L(null),onCreate:ie,onDelete:ut,onSave:async h=>{let c=await Ue(h);b(null),B(F.kind==="add"?`\u5DF2\u52A0\u5165\u300C${c.name}\u300D\u3002`:`\u5DF2\u4FDD\u5B58\u300C${c.name}\u300D\u3002`)}},`${F.kind}:${F.collection?.id||""}`),(0,H.jsx)("input",{ref:P,type:"file",multiple:!0,accept:".pdf,.epub,.mobi,.azw,.azw3,.txt,.md,.markdown,.html,.htm,application/pdf,application/epub+zip,text/plain,text/markdown,text/html",className:"dshr-sr-only",tabIndex:-1,onChange:h=>{let c=[...h.target.files??[]];h.target.value="",c.length>0&&g(c)}})]})}var xt=Mt(require("react"),1);var Ku=Object.freeze({"content-type":"application/json","x-dsh-reader":"1"}),Gr=class extends Error{constructor(e,r="REQUEST_FAILED",n=0){super(e),this.name="ReaderApiError",this.code=r,this.status=n}};async function mc(t){let e=null;try{e=await t.json()}catch{}return new Gr(e?.error?.message||e?.message||`\u7FFB\u8BD1\u670D\u52A1\u4E0D\u53EF\u7528\uFF08HTTP ${t.status}\uFF09\u3002`,e?.error?.code||e?.code||"REQUEST_FAILED",t.status)}async function ji(t,e,{signal:r}={}){let n;try{n=await fetch(t,{method:"POST",headers:Ku,body:JSON.stringify(e),signal:r,credentials:"same-origin"})}catch(o){throw o?.name==="AbortError"?o:new Gr("\u65E0\u6CD5\u8FDE\u63A5\u5230 DSH \u4E3B\u8FDB\u7A0B\uFF0C\u8BF7\u786E\u8BA4 DSH \u6B63\u5728\u8FD0\u884C\u3002","NETWORK",0)}if(!n.ok)throw await mc(n);return n}function Ln(t){return t?.name==="AbortError"}async function oo(t,e={}){let r=t.map(a=>({id:String(a.id),text:String(a.text??"")})).filter(a=>a.text.trim()!=="");if(r.length===0)return{};let n=await ji("/dsh-reader/ai/translate",{segments:r,context:String(e.context??"").slice(0,1200),title:String(e.title??"").slice(0,300),glossary:String(e.glossary??"").slice(0,4e3),...e.expectedModel?{expectedModel:e.expectedModel}:{}},{signal:e.signal}),o=await n.json().catch(()=>null);if(!o||typeof o!="object"||!Array.isArray(o.translations))throw new Gr("\u7FFB\u8BD1\u670D\u52A1\u8FD4\u56DE\u4E86\u65E0\u6CD5\u8BC6\u522B\u7684\u7ED3\u679C\u3002","BAD_RESPONSE",n.status);let i={};for(let a of o.translations)a&&typeof a.id=="string"&&typeof a.zh=="string"&&a.zh.trim()!==""&&(i[a.id]=a.zh);if(Object.keys(i).length===0)throw new Gr("\u7FFB\u8BD1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u53EF\u7528\u8BD1\u6587\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","EMPTY_TRANSLATION",n.status);return e.includeMetadata?{translations:i,model:o.model,promptVersion:o.promptVersion}:i}async function bc({signal:t}={}){let e=await fetch("/dsh-reader/ai/status",{signal:t,credentials:"same-origin",headers:{"x-dsh-reader":"1"},cache:"no-store"});if(!e.ok)throw await mc(e);return e.json()}function gc(t){let e=t.split(/\r?\n/u).filter(r=>r.startsWith("data:")).map(r=>r.slice(5).trimStart()).join(`
`);if(e==="")return null;try{return JSON.parse(e)}catch{return{type:"delta",text:e}}}async function Gi(t,{onDelta:e,onMeta:r}={}){let n=await ji("/dsh-reader/ai/chat",t,{signal:t.signal});if(!n.body)throw new Gr("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u6D41\u5F0F\u54CD\u5E94\u3002","NO_STREAM",n.status);let o=n.body.getReader(),i=new TextDecoder,a="",s=!1,l=null;try{for(;;){let{value:d,done:f}=await o.read();if(f)break;a+=i.decode(d,{stream:!0});let g=a.search(/\r?\n\r?\n/u);for(;g!==-1;){let u=a.slice(0,g),p=a.slice(g).match(/^\r?\n\r?\n/u)?.[0]??`

`;a=a.slice(g+p.length);let _=gc(u);_&&(_.type==="delta"&&typeof _.text=="string"?e?.(_.text):_.type==="error"?l=new Gr(_.message||"AI \u56DE\u7B54\u5931\u8D25\u3002",_.code||"AI_FAILED"):_.type==="done"?s=!0:r?.(_)),g=a.search(/\r?\n\r?\n/u)}}if(a.trim()!==""){let d=gc(a);d?.type==="delta"&&typeof d.text=="string"&&e?.(d.text),d?.type==="error"&&(l=new Gr(d.message||"AI \u56DE\u7B54\u5931\u8D25\u3002",d.code||"AI_FAILED")),d?.type==="done"&&(s=!0)}}finally{o.releaseLock?.()}if(l)throw l}async function xc(t,{signal:e}={}){let r=await ji("/dsh-reader/import/fetch",{url:String(t||"")},{signal:e}),n=await r.blob();if(!n.size)throw new Gr("\u6765\u6E90\u8FD4\u56DE\u4E86\u7A7A\u6587\u4EF6\u3002","EMPTY",0);let o="book",i=r.headers.get("x-dsh-reader-filename");if(i)try{o=decodeURIComponent(i)}catch{o=i}return new File([n],o,{type:n.type||"application/octet-stream"})}var dn=Mt(require("react"),1);var _c=Object.freeze([{id:"yellow",label:"\u9EC4",value:"#f5d76e"},{id:"green",label:"\u7EFF",value:"#8fd18b"},{id:"pink",label:"\u7C89",value:"#f3a6c0"},{id:"blue",label:"\u84DD",value:"#94c9f0"}]),Oo=Object.freeze([{id:"thin",label:"\u7EC6",value:4},{id:"medium",label:"\u4E2D",value:9},{id:"wide",label:"\u5BBD",value:16}]),kc=Object.freeze([{id:"ink",label:"\u58A8",value:"#3f3a33"},{id:"red",label:"\u6731",value:"#c2543f"},{id:"amber",label:"\u8D6D",value:"#a9772b"},{id:"blue",label:"\u84DD",value:"#3f6f97"}]),ao=Object.freeze({highlight:"\u8367\u5149\u7B14",underline:"\u4E0B\u5212\u7EBF",note:"\u4FBF\u7B7E"}),io=Object.freeze([{id:"highlight",label:ao.highlight},{id:"underline",label:ao.underline},{id:"note",label:ao.note}]);function qi(t){return ao[t]||"\u6807\u6CE8"}var Ia="data-anno-block",Tc=".dshr-block__body";function Xi(t){return t?t.ownerDocument?t.ownerDocument:t.nodeType===9?t:typeof globalThis<"u"&&globalThis.document?globalThis.document:null:null}function Dr(t,e=0){let r=typeof t=="number"?t:Number(t);return Number.isFinite(r)?Math.trunc(r):e}function Kt(t,e,r){return Math.min(r,Math.max(e,t))}function Aa(t,e=5){let r=10**e;return Math.round(t*r)/r}function Ca(t){return String(t??"").replace(/\s+/gu," ").trim()}function Yu(t){if(!t||t.nodeType!==1)return!1;let e=t.tagName;if(e==="SCRIPT"||e==="STYLE"||e==="NOSCRIPT"||e==="TEXTAREA"||e==="SVG"||e==="CANVAS")return!0;let r=t.classList;return!!(r&&(r.contains("dshr-translation")||r.contains("dshr-anno-ignore"))||typeof t.hasAttribute=="function"&&t.hasAttribute("data-anno-ignore"))}function Vi(t){let e=[],r=[],n=new Map,o=0;if(!t)return{nodes:e,starts:r,positions:n,total:o,text:""};let i=s=>{for(let l=s.firstChild;l;l=l.nextSibling)if(l.nodeType===3){let d=l.nodeValue||"";n.set(l,e.length),e.push(l),r.push(o),o+=d.length}else l.nodeType===1&&!Yu(l)&&i(l)};i(t);let a="";for(let s=0;s<e.length;s+=1)a+=e[s].nodeValue||"";return{nodes:e,starts:r,positions:n,total:o,text:a}}function Zu(t,e,r){if(!t||!e)return null;let n;try{n=t.createRange();let o=e.nodeType===3?e.nodeValue?e.nodeValue.length:0:e.childNodes?e.childNodes.length:0;return n.setStart(e,Kt(Dr(r),0,o)),n.collapse(!0),n}catch{return null}}function vc(t,e,r,n){if(!r)return 0;if(r.nodeType===3){let o=t.positions.get(r),i=r.nodeValue||"";if(o!==void 0)return t.starts[o]+Kt(Dr(n),0,i.length)}if(r===e||e.contains(r)){let o=Xi(e),i=Zu(o,r,n);if(!i)return 0;let a=o.createRange();for(let s=0;s<t.nodes.length;s+=1)try{if(a.setStart(t.nodes[s],0),a.collapse(!0),i.compareBoundaryPoints(0,a)<=0)return t.starts[s]}catch{}return t.total}try{return e.compareDocumentPosition(r)&4?t.total:0}catch{return 0}}function yc(t,e){if(!t.nodes.length)return null;let r=Kt(Dr(e),0,t.total);for(let o=0;o<t.nodes.length;o+=1){let i=t.nodes[o].nodeValue?t.nodes[o].nodeValue.length:0,a=t.starts[o];if(r<a+i)return{node:t.nodes[o],offset:r-a};if(r===a+i&&i>0)return{node:t.nodes[o],offset:i}}let n=t.nodes[t.nodes.length-1];return{node:n,offset:n.nodeValue?n.nodeValue.length:0}}function Qu(t,e,r){if(!t)return null;let n=Vi(t);if(!n.nodes.length||n.total===0)return null;let o=Kt(Dr(e),0,n.total),i=Kt(Dr(r),0,n.total);i<o&&([o,i]=[i,o]);let a=yc(n,o),s=yc(n,i),l=Xi(t);if(!l||!a||!s)return null;try{let d=l.createRange();return d.setStart(a.node,a.offset),d.setEnd(s.node,s.offset),d}catch{return null}}function Sc(t){let e=[];if(!t)return e;try{let r=typeof t.getClientRects=="function"?t.getClientRects():null;if(r&&typeof r.length=="number")for(let n=0;n<r.length;n+=1){let o=r[n];o&&e.push(o)}}catch{}if(e.length===0)try{let r=typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():null;r&&(r.width||r.height)&&e.push(r)}catch{}return e}function Ju(t){let e=1/0,r=1/0,n=-1/0,o=-1/0;for(let i=0;i<t.length;i+=1){let a=t[i],s=Number(a.width)||0,l=Number(a.height)||0;if(!s&&!l)continue;let d=Number(a.left)||0,f=Number(a.top)||0;e=Math.min(e,d),r=Math.min(r,f),n=Math.max(n,d+s),o=Math.max(o,f+l)}return Number.isFinite(e)?{left:e,top:r,width:n-e,height:o-r,right:n,bottom:o}:{left:0,top:0,width:0,height:0,right:0,bottom:0}}function ep(t,e,r){let n=e,o=r;for(;n<o&&/\s/u.test(t[n]);)n+=1;for(;o>n&&/\s/u.test(t[o-1]);)o-=1;return{start:n,end:o,text:t.slice(n,o)}}function Ec(t,e){if(!t||!e||!e.rangeCount)return null;let r=Xi(t);if(!r)return null;let n;try{n=e.getRangeAt(0)}catch{return null}if(!n)return null;try{if(!t.contains(n.commonAncestorContainer))return null}catch{return null}let o=[],i;try{i=t.querySelectorAll(`[${Ia}]`)}catch{return null}for(let s=0;s<i.length;s+=1){let l=i[s],d=l.getAttribute(Ia);if(!d)continue;let f=l.classList&&l.classList.contains("dshr-block__body")?l:l.querySelector(Tc);if(!f)continue;let g=Vi(f);if(g.total===0)continue;let u;try{u=r.createRange(),u.selectNodeContents(f)}catch{continue}let p=!1,_=!1,N=!1,y=!1;try{p=n.compareBoundaryPoints(3,u)>=0,_=n.compareBoundaryPoints(1,u)<=0,N=n.compareBoundaryPoints(0,u)<0,y=n.compareBoundaryPoints(2,u)>0}catch{continue}if(p||_)continue;let P=N?0:vc(g,f,n.startContainer,n.startOffset),w=y?g.total:vc(g,f,n.endContainer,n.endOffset),v=Kt(Dr(P),0,g.total),S=Kt(Dr(w),0,g.total);if(S<=v)continue;let C=ep(g.text,v,S);C.end<=C.start||o.push({blockId:d,start:C.start,end:C.end,text:C.text})}if(o.length===0)return null;let a="";for(let s=0;s<o.length;s+=1)s>0&&(a+=`
`),a+=o[s].text;return a=a.replace(/\u00a0/gu," ").trim(),a?{text:a,rect:Ju(Sc(n)),ranges:o}:null}function Ac(t,e){if(!t||!e)return[];let r;try{r=e.getBoundingClientRect()}catch{return[]}if(!r)return[];let n=Number(r.width)||0,o=Number(r.height)||0;if(n<=0||o<=0)return[];let i=Number(r.left)||0,a=Number(r.top)||0,s=i+n,l=a+o,d=Sc(t);if(d.length===0)return[];let f=[];for(let g=0;g<d.length;g+=1){let u=d[g];if(!u)continue;let p=Number(u.width)||0,_=Number(u.height)||0;if(p<=0||_<=0)continue;let N=Number(u.left)||0,y=Number(u.top)||0,P=Math.max(N,i),w=Math.max(y,a),v=Math.min(N+p,s),S=Math.min(y+_,l);v-P<.5||S-w<.5||f.push({x:Aa(Kt((P-i)/n,0,1)),y:Aa(Kt((w-a)/o,0,1)),w:Aa(Kt((v-P)/n,0,1)),h:Aa(Kt((S-w)/o,0,1))})}return f.sort((g,u)=>g.y-u.y||g.x-u.x),f}function tp(t){let e=String(t??""),r="",n=[],o=-1;for(let i=0;i<e.length;i+=1){let a=e[i];if(/\s/u.test(a)){o<0&&r.length>0&&(o=i);continue}o>=0&&(n.push(o),r+=" ",o=-1),n.push(i),r+=a}return{text:r,map:n}}function rp(t,e,r,n,o){let i=t.length,a=r[n];if(a===void 0)return null;let s=n+o<r.length?r[n+o]:i;return s>a?{start:a,end:s}:null}function wc(t,e){if(!t||!e)return null;let r=String(t),n=String(e).trim();if(!n)return null;let o=r.indexOf(n);if(o>=0)return{start:o,end:o+n.length};let i=tp(r),a=Ca(n);if(!a)return null;let s=i.text.indexOf(a);if(s>=0){let d=rp(r,i.text,i.map,s,a.length);if(d)return d}let l=Math.min(a.length,48);for(let d=l;d>=12;d-=4){let f=a.slice(0,d),g=i.text.indexOf(f);if(g<0)continue;let u=i.map[g];if(u===void 0)continue;let p=Math.min(r.length,u+a.length);if(p>u)return{start:u,end:p}}return null}function np(t,e,r){let n=Ca(t);if(!n)return!1;let o=[],i=Ca(e);i&&o.push(i);let a=Ca(r);return a&&a!==i&&o.push(a),o.length===0?!0:o.some(s=>n===s?!0:n.length<8||s.length<8?!1:n.includes(s)||s.includes(n))}function Na(t,e,r){let n=Kt(Dr(e),0,t.index.total),o=Kt(Dr(r),0,t.index.total);if(o<=n)return null;let i=Qu(t.body,n,o);return i?{blockId:t.blockId,start:n,end:o,text:t.index.text.slice(n,o),range:i}:null}function op(t){let e=[];if(!t)return e;let r;try{r=t.querySelectorAll(`[${Ia}]`)}catch{return e}for(let n=0;n<r.length;n+=1){let o=r[n],i=o.getAttribute(Ia);if(!i)continue;let a=o.classList&&o.classList.contains("dshr-block__body")?o:o.querySelector(Tc);if(!a)continue;let s=Vi(a);s.total!==0&&e.push({blockId:i,body:a,index:s})}return e}function Nc(t,e){let r=[];if(!t||!e)return r;let n=op(t);if(n.length===0)return r;let o=new Map;for(let s=0;s<n.length;s+=1)o.has(n[s].blockId)||o.set(n[s].blockId,n[s]);let i=typeof e.quote=="string"?e.quote:"",a=Array.isArray(e.ranges)?e.ranges:[];for(let s=0;s<a.length;s+=1){let l=a[s];if(!l||typeof l!="object")continue;let d=o.get(String(l.blockId==null?"":l.blockId));if(!d)continue;let f=Kt(Dr(l.start),0,d.index.total),g=Kt(Dr(l.end),0,d.index.total),u=g>f;if(u){let _=d.index.text.slice(f,g);if(np(_,l.text,i)){let N=Na(d,f,g);N&&r.push(N);continue}}let p=wc(d.index.text,i||l.text);if(p){let _=Na(d,p.start,p.end);_&&r.push(_);continue}if(u){let _=Na(d,f,g);_&&r.push(_)}}if(r.length===0&&i){let s=i.split(/\n+/u).map(f=>f.trim()).filter(f=>f.length>=2),l=s.length>0?s:[i.trim()],d=new Set;for(let f=0;f<n.length;f+=1){let g=n[f];if(d.has(g.blockId))continue;let u=1/0,p=-1/0;for(let N=0;N<l.length;N+=1){let y=wc(g.index.text,l[N]);y&&(u=Math.min(u,y.start),p=Math.max(p,y.end))}if(!Number.isFinite(u)||p<=u)continue;d.add(g.blockId);let _=Na(g,u,p);_&&r.push(_)}}return r}var Lb=require("react"),St=require("react/jsx-runtime");function Dn({size:t=14}){return(0,St.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,St.jsx)("path",{d:"M9.4 2.6 5.1 6.9l-.7 2.7 2.7-.7 4.4-4.3-2.1-2Z",stroke:"currentColor",strokeWidth:"1.35",strokeLinejoin:"round"}),(0,St.jsx)("path",{d:"m4.4 9.6-2.1 2.1c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0l2.1-2.1",stroke:"currentColor",strokeWidth:"1.35",strokeLinecap:"round"}),(0,St.jsx)("path",{d:"M3 13.5h7.4",stroke:"currentColor",strokeWidth:"1.35",strokeLinecap:"round",opacity:".55"})]})}function Ra({size:t=14}){return(0,St.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,St.jsx)("path",{d:"M4.2 3v4.6a3.8 3.8 0 0 0 7.6 0V3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,St.jsx)("path",{d:"M3.4 13.3c2-.7 4.2-.8 9.2-.2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function wn({size:t=12}){return(0,St.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,St.jsx)("path",{d:"M3.5 2.7h9v6.2l-3.2 3.4H3.5z",fill:"currentColor",fillOpacity:".9",stroke:"currentColor",strokeWidth:"1",strokeLinejoin:"round"}),(0,St.jsx)("path",{d:"M9.3 12.3V9h3.1",stroke:"var(--dshr-anno-paper, #ffffff)",strokeWidth:"1.15",strokeLinejoin:"round"}),(0,St.jsx)("path",{d:"M5.4 5.5h5.1M5.4 7.4h3.4",stroke:"var(--dshr-anno-paper, #ffffff)",strokeWidth:"1",strokeLinecap:"round",opacity:".8"})]})}function Cc({size:t=56}){return(0,St.jsxs)("svg",{width:t,height:t,viewBox:"0 0 56 56",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,St.jsx)("rect",{x:"8.5",y:"9",width:"33",height:"38",rx:"4",stroke:"currentColor",strokeWidth:"1.8",opacity:".55"}),(0,St.jsx)("path",{d:"M15 18h20M15 24h20M15 30h13",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",opacity:".42"}),(0,St.jsx)("path",{d:"M34 28.5h11.5v9.2l-4.6 5H34z",fill:"currentColor",fillOpacity:".16",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),(0,St.jsx)("path",{d:"M40.9 42.7v-5h4.6",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),(0,St.jsx)("path",{d:"M36.8 33.6h5.6M36.8 36.4h3.8",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",opacity:".7"})]})}function Ma({size:t=13}){return(0,St.jsx)("svg",{width:t,height:t,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",focusable:"false",children:(0,St.jsx)("path",{d:"m3.4 3.4 7.2 7.2M10.6 3.4 3.4 10.6",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})})}function Ic(t,e,r){let n=Number(t);return Number.isFinite(n)?Math.min(r,Math.max(e,n)):e}function Pa(t){let e=Number(t);return .36+(Ic(Number.isFinite(e)?e:9,4,16)-4)/12*.34}function Oa(t){return(1-Ic(t,.1,.95))*.82}function La(t){let e=String(t??""),r=2166136261;for(let n=0;n<e.length;n+=1)r^=e.charCodeAt(n),r=Math.imul(r,16777619);return r>>>0}function ap(t,e=0){let r=(Number(t)^Math.imul((Number(e)||0)+1,2654435769))>>>0;return r^=r<<13,r>>>=0,r^=r>>>17,r^=r<<5,r>>>=0,r/4294967296}function Da(t,e){let r=Math.max(4,Number(e)||4),n=f=>ap(t,f)*2-1,o=3.7+n(1)*.5,i=3.1+n(2)*.45,a=3.7+n(3)*.45,s=3.3+n(4)*.55,l=r*.54,d=Math.max(1,r-.6);return[`M0.6 ${o.toFixed(2)}`,`C${(r*.18).toFixed(2)} ${i.toFixed(2)}`,`${(r*.34).toFixed(2)} ${i.toFixed(2)}`,`${l.toFixed(2)} ${a.toFixed(2)}`,`S${(r*.82).toFixed(2)} ${s.toFixed(2)}`,`${d.toFixed(2)} ${(s-.25).toFixed(2)}`].join(" ")}function Fa(t){if(!t)return"\u6279\u6CE8";let e=typeof t.note=="string"?t.note.trim():"";if(e)return e.length>34?`${e.slice(0,34)}\u2026`:e;let r=typeof t.quote=="string"?t.quote.trim():"";return r?r.length>34?`${r.slice(0,34)}\u2026`:r:"\u6279\u6CE8"}var Fn=require("react/jsx-runtime");function ip(t,e){let r=Math.min(t.left+t.width,e.left+e.width)-Math.max(t.left,e.left),n=Math.min(t.top+t.height,e.top+e.height)-Math.max(t.top,e.top);if(r<=0||n<=0)return 0;let o=r*n,i=Math.min(t.width*t.height,e.width*e.height);return i>0?o/i:0}function sp(t){let e=[];if(!t)return e;try{let n=typeof t.getClientRects=="function"?t.getClientRects():null;if(n&&typeof n.length=="number")for(let o=0;o<n.length;o+=1){let i=n[o];if(!i)continue;let a=Number(i.width)||0,s=Number(i.height)||0;a<=0||s<=0||e.push({left:Number(i.left)||0,top:Number(i.top)||0,width:a,height:s})}}catch{}if(e.length===0)try{let n=typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():null;n&&(Number(n.width)||0)>0&&(Number(n.height)||0)>0&&e.push({left:Number(n.left)||0,top:Number(n.top)||0,width:Number(n.width)||0,height:Number(n.height)||0})}catch{}if(e.length<=1)return e;let r=[];for(let n=0;n<e.length;n+=1){let o=e[n],i=!1;for(let a=0;a<r.length;a+=1)if(ip(o,r[a])>.55){i=!0;break}i||r.push(o)}return r}function lp(t,e){return!t||t.kind&&t.kind!=="flow"?!1:!e||t.chapterId==null?!0:t.chapterId===e}function cp(t,e){if(t===e)return!0;if(!t||!e||t.length!==e.length)return!1;for(let r=0;r<t.length;r+=1){let n=t[r],o=e[r];if(n.type!==o.type||n.key!==o.key||n.annotationId!==o.annotationId||n.x!==o.x||n.y!==o.y||n.width!==o.width||n.height!==o.height||n.color!==o.color||n.path!==o.path||n.isNote!==o.isNote||n.label!==o.label)return!1}return!0}function Rc({containerRef:t,annotations:e,chapterId:r,onOpenAnnotation:n,layoutVersion:o}){let i=dn.default.useRef(null),a=dn.default.useRef(0),s=dn.default.useRef({annotations:e,chapterId:r,onOpenAnnotation:n});s.current={annotations:e,chapterId:r,onOpenAnnotation:n};let[l,d]=dn.default.useState({height:0,marks:[]}),f=dn.default.useCallback(()=>{let u=i.current,p=t&&t.current?t.current:null;if(!u||!p)return;let _;try{_=u.getBoundingClientRect()}catch{return}if(!_)return;let{annotations:N,chapterId:y}=s.current,P=Array.isArray(N)?N:[],w=p.clientWidth||_&&p.getBoundingClientRect().width||0,v=0,S=null;try{if(S=p.querySelector(".dshr-content__inner"),!S){for(let D=p.firstElementChild;D;D=D.nextElementSibling)if(!(D===u||D.classList&&D.classList.contains("dshr-anno-layer"))){S=D;break}}}catch{S=null}if(S)try{let D=S.getBoundingClientRect();v=Math.max(0,D.top-_.top+D.height)}catch{v=0}let C=[];for(let D=0;D<P.length;D+=1){let I=P[D];if(!lp(I,y))continue;let b;try{b=Nc(p,I)}catch{continue}if(!Array.isArray(b)||b.length===0)continue;let F=I.style==="underline"||I.style==="note"?I.style:"highlight",L=I.color||"#f5d76e",z=La(`${I.id||""}|${I.createdAt||0}`),B=Pa(I.width),Y=I.id==null?"":String(I.id),ne=F==="note"||typeof I.note=="string"&&I.note.trim().length>0,re=Fa(I),oe=null;for(let U=0;U<b.length;U+=1){let K=b[U],te=sp(K&&K.range);for(let O=0;O<te.length;O+=1){let ue=te[O],fe=ue.left-_.left,Te=ue.top-_.top,ie=`${Y}:${U}:${O}`;if(oe={x:fe,y:Te,width:ue.width,height:ue.height},F==="underline"){let Ae=ue.width+2;C.push({type:"underline",key:`u:${ie}`,annotationId:Y,x:fe-1,y:Te+ue.height-7.2,width:Ae,height:8,color:L,path:Da(z,Ae),isNote:!1,label:re})}else{let Ae=Math.max(3.5,ue.height*B);C.push({type:"band",key:`b:${ie}`,annotationId:Y,x:fe-1,y:Te+ue.height*Oa(B),width:ue.width+2,height:Ae,color:L,path:"",isNote:F==="note",label:re})}v=Math.max(v,Te+ue.height+8)}}if(ne&&oe){let U=Math.min(Math.max(2,oe.x+oe.width+3),Math.max(2,w-21));C.push({type:"note",key:`n:${Y}`,annotationId:Y,x:U,y:Math.max(0,oe.y-1),width:19,height:19,color:L,path:"",isNote:!0,label:re})}}let E=Math.max(0,Math.ceil(v+8));d(D=>D.height===E&&cp(D.marks,C)?D:{height:E,marks:C})},[t]),g=dn.default.useCallback(()=>{if(typeof window>"u"||a.current)return;let u=()=>{a.current=0,f()};a.current=typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(u):window.setTimeout(u,16)},[f]);return dn.default.useEffect(()=>{let u=t&&t.current?t.current:null,p=i.current;if(!u||!p||typeof window>"u")return;let _=[];g(),_.push(window.setTimeout(g,80));let N=null;if(typeof ResizeObserver<"u"){let E=new ResizeObserver(()=>g());try{E.observe(u);let D=p.parentElement;D&&D!==u&&E.observe(D);let I=u.querySelector(".dshr-content__inner");I&&!I.contains(p)&&E.observe(I)}catch{}N=E}let y=null;if(typeof MutationObserver<"u"){y=new MutationObserver(E=>{for(let D=0;D<E.length;D+=1){let I=E[D].target;if(!p.contains(I)){g();return}}});try{y.observe(u,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["class","style","data-rendered"]})}catch{}}let P=()=>g(),w=E=>{p.contains(E.target)||g()};window.addEventListener("resize",P),u.addEventListener("load",w,!0);let v=u.contains(p);v||u.addEventListener("scroll",P,{passive:!0});let S=null,C=typeof document<"u"?document.fonts:null;if(C&&typeof C.ready=="object"&&typeof C.ready.then=="function"&&C.ready.then(()=>g()).catch(()=>{}),C&&typeof C.addEventListener=="function"){S=()=>g();try{C.addEventListener("loadingdone",S)}catch{S=null}}return()=>{for(let E=0;E<_.length;E+=1)window.clearTimeout(_[E]);if(a.current&&(typeof window.cancelAnimationFrame=="function"?window.cancelAnimationFrame(a.current):window.clearTimeout(a.current),a.current=0),N&&N.disconnect(),y&&y.disconnect(),window.removeEventListener("resize",P),u.removeEventListener("load",w,!0),v||u.removeEventListener("scroll",P),C&&S)try{C.removeEventListener("loadingdone",S)}catch{}}},[t,g]),dn.default.useEffect(()=>{if(g(),typeof window>"u")return;let u=window.setTimeout(g,40);return()=>window.clearTimeout(u)},[e,r,o,g]),(0,Fn.jsx)("div",{ref:i,className:"dshr-anno-layer",style:l.height>0?{height:`${l.height}px`}:void 0,"data-anno-layer":"flow",children:l.marks.map(u=>{if(u.type==="note")return(0,Fn.jsx)("button",{type:"button",className:"dshr-anno-note-btn",style:{left:`${u.x}px`,top:`${u.y}px`,"--dshr-anno-color":u.color},"data-anno-id":u.annotationId,title:u.label?`\u67E5\u770B\u6279\u6CE8\uFF1A${u.label}`:"\u67E5\u770B\u6279\u6CE8","aria-label":u.label?`\u67E5\u770B\u6279\u6CE8\uFF1A${u.label}`:"\u67E5\u770B\u6279\u6CE8",onMouseDown:p=>p.preventDefault(),onClick:()=>{let p=s.current.onOpenAnnotation;typeof p=="function"&&p(u.annotationId)},children:(0,Fn.jsx)(wn,{size:12})},u.key);if(u.type==="underline"){let p=Math.max(2,Math.round(u.width*100)/100);return(0,Fn.jsx)("svg",{className:"dshr-anno-underline",style:{left:`${u.x}px`,top:`${u.y}px`,width:`${u.width}px`,height:`${u.height}px`,"--dshr-anno-color":u.color},viewBox:`0 0 ${p} 8`,preserveAspectRatio:"none","data-anno-id":u.annotationId,"aria-hidden":"true",focusable:"false",children:(0,Fn.jsx)("path",{d:u.path})},u.key)}return(0,Fn.jsx)("span",{className:`dshr-anno-band${u.isNote?" dshr-anno-band--note":""}`,style:{left:`${u.x}px`,top:`${u.y}px`,width:`${u.width}px`,height:`${u.height}px`,"--dshr-anno-color":u.color},"data-anno-id":u.annotationId,"aria-hidden":"true"},u.key)})})}function Lo(t){let e=t.scrollHeight-t.clientHeight;return e>0?Math.max(0,Math.min(1,t.scrollTop/e)):0}function za(t,e,r){return{chapter:t,chapters:e,scrollRatio:r,percent:(t+r)/e*100}}function Mc(t,e){let r=Math.max(1,e-48-56),n=t.filter(i=>Number.isFinite(i.top)&&i.bottom>i.top).toSorted((i,a)=>i.top-a.top),o=[0];for(let i of n)for(;i.bottom>o.at(-1)+48+r+.5;){let a=o.at(-1),s=i.top-48;o.push(s>a+.5?s:a+r)}return o}function dp(t,e){let r=0,n=t.length-1;for(;r<n;){let o=Math.ceil((r+n)/2);t[o]<=e+.5?r=o:n=o-1}return r}function Pc(){let t=[0],e=0;return{get page(){return e+1},get pages(){return t.length},get top(){return t[e]},get starts(){return t},replace(r,n){t=r.length?r:[0],e=dp(t,Math.max(0,n||0))},turn(r){let n=Math.max(0,Math.min(t.length-1,e+Math.sign(r)));return n===e?!1:(e=n,!0)}}}function Oc(t,e){let r=t.getBoundingClientRect(),n=[],o=(s,l)=>{s.height<2||s.width<.1||n.push({top:s.top-r.top+t.scrollTop,bottom:s.bottom-r.top+t.scrollTop,...l})},i=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let s=i.nextNode();s;s=i.nextNode()){if(!s.nodeValue?.trim()||s.parentElement.closest('[aria-hidden="true"],script,style'))continue;let l=document.createRange();l.selectNodeContents(s);for(let d of l.getClientRects())o(d,{node:s})}for(let s of e.querySelectorAll("img,svg,hr,video,canvas"))o(s.getBoundingClientRect(),{element:s,atomic:!0});n.sort((s,l)=>s.top-l.top);let a=[];for(let s of n){let l=a.at(-1),d=l&&Math.min(l.bottom,s.bottom)-Math.max(l.top,s.top);l&&!l.atomic&&!s.atomic&&d>Math.min(l.bottom-l.top,s.bottom-s.top)*.5?l.bottom=Math.max(l.bottom,s.bottom):a.push({...s})}return a}function Ki(t,e,r){let n=e+48,o=t.find(N=>N.bottom>n+.5)||t.at(-1);if(!o)return null;let i=o.element||o.node?.parentElement.closest(".dshr-block__body,.dshr-translation,.dshr-chapter__kicker")||o.node?.parentElement,a=r.getBoundingClientRect(),s=i?.getBoundingClientRect(),l=s?.height?(n-(s.top-a.top+r.scrollTop))/s.height:0;if(!o.node)return{element:i,ratio:l};let d=document.createRange(),f=1,g=o.node.length;for(;f<g;){let N=f+g>>1;d.setStart(o.node,0),d.setEnd(o.node,N);let y=d.getClientRects(),P=y[y.length-1];(P?P.top-a.top+r.scrollTop:-1/0)<o.top-1?f=N+1:g=N}let u=Math.max(0,f-1),p=u,_=document.createTreeWalker(i,NodeFilter.SHOW_TEXT);for(let N=_.nextNode();N&&N!==o.node;N=_.nextNode())p+=N.length;return{node:o.node,offset:u,textOffset:p,element:i,ratio:l}}function Lc(t,e,r){if(!t)return r;let n=e.getBoundingClientRect();if(!t.node?.isConnected&&t.element?.isConnected&&Number.isFinite(t.textOffset)){let o=t.textOffset,i=document.createTreeWalker(t.element,NodeFilter.SHOW_TEXT);for(let a=i.nextNode();a;a=i.nextNode()){if(o<a.length){t.node=a,t.offset=o;break}o-=a.length}}if(t.node?.isConnected&&e.contains(t.node)&&t.node.length){let o=document.createRange(),i=Math.min(t.offset,t.node.length-1);o.setStart(t.node,i),o.setEnd(t.node,i+1);let a=o.getBoundingClientRect();if(a.height)return a.top-n.top+e.scrollTop-48}if(t.element?.isConnected&&e.contains(t.element)){let o=t.element.getBoundingClientRect();return o.top-n.top+e.scrollTop+Math.max(0,t.ratio)*o.height-48}return r}var Fe=require("react/jsx-runtime"),Yi=new Set(["heading","paragraph","list-item","quote"]),hp=6;function up(t,e){let r=t.style.scrollBehavior;t.style.scrollBehavior="auto",t.scrollTop=e,t.style.scrollBehavior=r}function pp(t,e){return`${t.title||""} \xB7 ${e?.title||""}`}var fp=xt.default.memo(function({block:e}){if(e.kind==="image")return(0,Fe.jsxs)("figure",{children:[e.src?(0,Fe.jsx)("img",{src:e.src,alt:e.alt||"",loading:"lazy",decoding:"async"}):(0,Fe.jsx)("div",{className:"dshr-translation",children:"\u56FE\u7247\u672A\u80FD\u8F7D\u5165"}),e.caption?(0,Fe.jsx)("figcaption",{children:e.caption}):null]});if(e.kind==="table")return(0,Fe.jsx)("div",{dangerouslySetInnerHTML:{__html:e.html||""}});if(e.kind==="code")return(0,Fe.jsx)("pre",{className:"dshr-block__code",children:e.text||""});if(e.kind==="rule")return(0,Fe.jsx)("hr",{});if(e.kind==="heading"){let r=`h${Math.max(1,Math.min(6,e.level||2))}`;return(0,Fe.jsx)(r,{dangerouslySetInnerHTML:{__html:e.html||""}})}return(0,Fe.jsx)("p",{dangerouslySetInnerHTML:{__html:e.html||""}})});function gp({state:t,onRetry:e}){return t?t.status==="loading"?(0,Fe.jsx)("div",{className:"dshr-translation",children:(0,Fe.jsxs)("span",{className:"dshr-translation__loading",children:[(0,Fe.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u7FFB\u8BD1\u2026"]})}):t.status==="error"?(0,Fe.jsxs)("div",{className:"dshr-translation is-error",children:[(0,Fe.jsx)("p",{children:t.error||"\u8FD9\u6BB5\u7FFB\u8BD1\u5931\u8D25\u4E86\u3002"}),(0,Fe.jsx)("button",{type:"button",className:"dshr-translation__retry",onClick:e,children:"\u91CD\u8BD5"})]}):t.zh?(0,Fe.jsx)("div",{className:"dshr-translation",children:String(t.zh).split(/\n+/u).filter(Boolean).map((r,n)=>(0,Fe.jsx)("p",{children:r},n))}):null:null}function Dc({book:t,chapterIndex:e,onChapterChange:r,settings:n,chapterEntry:o,onChapterEntered:i,onSelection:a,onProgress:s,annotations:l=[],onOpenAnnotation:d,focusAnnotation:f,layoutVersion:g=0}){let u=t.chapters[e],p=xt.default.useRef(null),_=xt.default.useRef(null),N=xt.default.useRef(0),y=xt.default.useRef(new Map),P=xt.default.useRef(!1),w=xt.default.useRef(null),v=xt.default.useRef(!0),S=xt.default.useMemo(()=>new Map((u?.blocks??[]).map(U=>[U.id,U])),[u]),[C,E]=xt.default.useState({}),[D,I]=xt.default.useState(!1);xt.default.useEffect(()=>{v.current=!0;let U=new AbortController;return w.current=U,()=>{v.current=!1,U.abort()}},[]);let b=xt.default.useCallback(U=>`${u?.id||"chapter"}:${U.id}`,[u?.id]),F=xt.default.useCallback((U,K)=>{v.current&&E(te=>({...te,[U]:{...te[U]||{},...K}}))},[]),L=xt.default.useCallback(async()=>{if(P.current||y.current.size===0)return;P.current=!0,I(!0);let U=[...y.current.entries()].slice(0,hp);for(let[te]of U)y.current.delete(te);let K=pp(t,u);try{let te=await oo(U.map(([O,ue])=>({id:O,text:ue.text})),{context:K,title:t.title,signal:w.current?.signal});for(let[O]of U)te[O]?F(O,{status:"done",zh:te[O],error:void 0}):F(O,{status:"error",error:"\u7FFB\u8BD1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u8FD9\u4E00\u6BB5\u3002"})}catch(te){if(!Ln(te))for(let[O]of U)F(O,{status:"error",error:te?.message||"\u7FFB\u8BD1\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002"})}finally{P.current=!1,v.current&&(I(!1),y.current.size>0&&window.setTimeout(()=>{L()},120))}},[t,u,F]),z=xt.default.useCallback((U,{force:K=!1}={})=>{if(!U||!Yi.has(U.kind)||!U.text?.trim())return;let te=b(U),O=C[te];!K&&(O?.status==="loading"||O?.status==="done")||(F(te,{status:"loading",error:void 0}),y.current.set(te,{text:U.text.slice(0,4e3)}),L())},[L,b,C,F]),B=xt.default.useCallback(U=>{let K=U.slice(U.indexOf(":")+1),te=S.get(K);te&&z(te,{force:!0})},[S,z]),Y=xt.default.useCallback(()=>{for(let U of u?.blocks??[])Yi.has(U.kind)&&U.text?.trim()&&z(U,{force:C[`${u.id}:${U.id}`]?.status==="error"})},[u,z,C]);xt.default.useEffect(()=>{let U=p.current;if(!U||!n.autoTranslate||typeof IntersectionObserver>"u")return;_.current?.disconnect();let K=new IntersectionObserver(te=>{for(let O of te){if(!O.isIntersecting)continue;let ue=O.target.getAttribute("data-seg-id"),fe=S.get(ue);fe&&z(fe)}},{root:U,rootMargin:"420px 0px 520px 0px",threshold:.01});for(let te of U.querySelectorAll("[data-seg-id]"))K.observe(te);return _.current=K,()=>K.disconnect()},[S,u?.id,z,n.autoTranslate]),xt.default.useLayoutEffect(()=>{let U=p.current;if(!U||!o||n.readingMode==="book")return;let K=o.edge==="end"?1:Math.max(0,Math.min(1,Number(o.scrollRatio)||0));up(U,Math.max(0,U.scrollHeight-U.clientHeight)*K),i?.(o,Lo(U))},[o,n.readingMode,i]);let ne=xt.default.useCallback(U=>{let K=p.current;if(!K)return;let te=Ec(K,window.getSelection());if(!te){a?.(null);return}a?.({...te,source:"flow",context:u?.blocks.map(O=>O.text||"").join(`
`).slice(0,2400)||""})},[u,a]);xt.default.useEffect(()=>{if(!f?.id)return;let U=p.current,K=U?.dataset.readerNavigation||"0",te=window.setTimeout(()=>{if(!U||U!==p.current||(U.dataset.readerNavigation||"0")!==K)return;let O=f.blockId?U.querySelector(`[data-anno-block="${CSS.escape(f.blockId)}"]`):null;if(!O)return;let ue=new CustomEvent("dshr-flow-navigate",{cancelable:!0,detail:{element:O}});U.dispatchEvent(ue)&&O.scrollIntoView({block:"center",behavior:"smooth"})},120);return()=>window.clearTimeout(te)},[t,e,f]);let re=xt.default.useCallback(()=>{let U=p.current;if(!U)return;let K=Date.now();K-N.current<600||(N.current=K,s?.(za(e,t.chapters.length,Lo(U))))},[t.chapters.length,e,s]),oe=xt.default.useCallback(U=>{let K=U.target.closest?.("a");if(!K)return;let te=K.getAttribute("data-chapter");if(te){U.preventDefault();let ue=Number(te);Number.isInteger(ue)&&ue>=0&&ue<t.chapters.length&&r(ue);return}let O=K.getAttribute("href")||"";O&&!O.startsWith("#")&&(U.preventDefault(),window.open(O,"_blank","noopener,noreferrer"))},[t.chapters.length,r]);return u?(0,Fe.jsxs)("div",{className:"dshr-content",ref:p,role:"region","aria-label":"\u6B63\u6587\u9605\u8BFB\u533A",tabIndex:n.readingMode==="book"?0:void 0,onScroll:re,onMouseUp:ne,onKeyUp:ne,onClick:oe,children:[(0,Fe.jsxs)("div",{className:"dshr-content__inner",children:[(0,Fe.jsxs)("article",{className:"dshr-chapter",children:[(0,Fe.jsxs)("div",{className:"dshr-chapter__kicker",children:["\u7B2C ",e+1," / ",t.chapters.length," \u7AE0",n.autoTranslate?" \xB7 \u5B9E\u65F6\u7FFB\u8BD1\u5DF2\u5F00\u542F":""]}),u.blocks.map(U=>{let K=b(U),te=C[K],O=Yi.has(U.kind)&&U.text?.trim();return(0,Fe.jsxs)("div",{className:`dshr-block dshr-block--${U.kind}`,"data-kind":U.kind,"data-seg-id":O?U.id:void 0,"data-anno-block":U.id,children:[(0,Fe.jsx)("div",{className:"dshr-block__body",children:(0,Fe.jsx)(fp,{block:U})}),O?(0,Fe.jsx)(gp,{state:te,onRetry:()=>B(K)}):null]},U.id)})]}),(0,Fe.jsxs)("div",{className:"dshr-chapter__nav",children:[(0,Fe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e<=0,onClick:()=>r(e-1),children:[(0,Fe.jsx)(ga,{size:15})," ",e>0?t.chapters[e-1].title:"\u5DF2\u662F\u7B2C\u4E00\u7AE0"]}),(0,Fe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:Y,disabled:D,title:"\u7FFB\u8BD1\u672C\u7AE0\u6240\u6709\u6BB5\u843D",children:[D?(0,Fe.jsx)("span",{className:"dshr-spinner"}):(0,Fe.jsx)(ro,{size:15})," \u7FFB\u8BD1\u672C\u7AE0"]}),(0,Fe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e>=t.chapters.length-1,onClick:()=>r(e+1),children:[e<t.chapters.length-1?t.chapters[e+1].title:"\u5DF2\u662F\u6700\u540E\u4E00\u7AE0"," ",(0,Fe.jsx)(ma,{size:15})]})]})]}),(0,Fe.jsx)(Rc,{containerRef:p,annotations:l,chapterId:u.id,onOpenAnnotation:d,layoutVersion:g})]}):(0,Fe.jsxs)("div",{className:"dshr-error-panel",children:[(0,Fe.jsx)("h3",{children:"\u8FD9\u4E00\u7AE0\u4E0D\u5B58\u5728"}),(0,Fe.jsx)("p",{children:"\u6587\u6863\u76EE\u5F55\u53EF\u80FD\u4E0D\u5B8C\u6574\uFF0C\u8BF7\u5C1D\u8BD5\u91CD\u65B0\u5BFC\u5165\u3002"})]})}var $o=Mt(require("react"),1);var Zi="6.5.438-reader4",Bn="/dsh-reader-assets/",Fc;function mp(){return`${Bn}pdf.bundle.js?v=${Zi}`}function bp(){return Fc||=import(mp()).then(t=>{if(!t?.getDocument||!t.GlobalWorkerOptions)throw new Error("PDF \u5F15\u64CE\u8D44\u6E90\u683C\u5F0F\u4E0D\u6B63\u786E");return t.GlobalWorkerOptions.workerSrc=`${Bn}pdf.worker.mjs?v=${Zi}`,t.GlobalWorkerOptions.rendererSrc=`${Bn}pdf.renderer.mjs?v=${Zi}`,t}).catch(t=>{throw Fc=null,t})}var qr=()=>new DOMException("PDF operation cancelled","AbortError"),zn=t=>{if(t?.aborted)throw qr()};async function xp(t,e,{signal:r,onRead:n,onError:o}={}){zn(r);let i=256*1024,a=new Uint8Array(await e.slice(0,Math.min(i,e.size)).arrayBuffer());zn(r);let s={bytes:a.length,reads:1,total:e.size};class l extends t.PDFDataRangeTransport{constructor(){super(e.size,a,!0)}aborted=!1;queue=[];active=0;requestDataRange(f,g){this.aborted||r?.aborted||(this.queue.push({begin:f,end:g}),this.pump())}pump(){for(;!this.aborted&&this.active<2&&this.queue.length;){let{begin:f,end:g}=this.queue.shift();this.active++,e.slice(f,g).arrayBuffer().then(u=>{if(this.aborted||r?.aborted)return;let p=new Uint8Array(u);if(p.length!==g-f)throw new Error("PDF \u5206\u6BB5\u8BFB\u53D6\u4E0D\u5B8C\u6574");s.bytes+=p.length,s.reads++,n?.({...s}),this.onDataRange(f,p)}).catch(u=>{this.aborted||r?.aborted||(this.abort(),o?.(u))}).finally(()=>{this.active--,this.pump()})}}abort(){this.aborted=!0,this.queue.length=0}}return n?.({...s}),{range:new l,stats:s,rangeChunkSize:i,disableStream:!0,disableAutoFetch:!0}}async function Ba(t,{signal:e,onProgress:r,onRead:n,onError:o}={}){zn(e);let i=await bp();zn(e);let a,s,l,d,f=!1,g,u,p=new Promise((y,P)=>{u=P});p.catch(()=>{});let _=()=>g||(f=!0,clearTimeout(d),s?.abort(),e?.removeEventListener("abort",N),g=Promise.resolve().then(()=>a?.destroy()).catch(()=>{}).finally(()=>l?.destroy()),g),N=()=>{u(qr()),_()};e?.addEventListener("abort",N,{once:!0});try{if(l=new i.PDFWorker({verbosity:0}),await Promise.race([l.promise,p,new Promise((w,v)=>{d=setTimeout(()=>v(new Error("PDF \u540E\u53F0\u7EBF\u7A0B\u542F\u52A8\u8D85\u65F6\uFF0C\u8BF7\u68C0\u67E5 Host \u7684 Worker \u8D44\u6E90\u4E0E\u5B89\u5168\u7B56\u7565\u3002")),1e4)})]),clearTimeout(d),zn(e),typeof Worker!="function"||!(l.port instanceof Worker))throw new Error("PDF \u540E\u53F0\u7EBF\u7A0B\u4E0D\u53EF\u7528\uFF0C\u8BF7\u68C0\u67E5 /dsh-reader-assets/pdf.worker.mjs \u548C Host \u7684 Worker \u5B89\u5168\u7B56\u7565\u3002");let y;if(typeof Blob<"u"&&t instanceof Blob?(y=await xp(i,t,{signal:e,onRead:n,onError:w=>{u(w),o?.(w),_()}}),s=y.range):y={data:(t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)).slice()},zn(e),f)throw qr();a=i.getDocument({...y,worker:l,cMapUrl:`${Bn}cmaps/`,cMapPacked:!0,standardFontDataUrl:`${Bn}standard_fonts/`,wasmUrl:`${Bn}wasm/`,iccUrl:`${Bn}iccs/`,isEvalSupported:!1,disableWorkerRendering:!1,verbosity:0}),a.onProgress=r;let P=await Promise.race([a.promise,p]);if(zn(e),f)throw qr();return{engine:i,pdf:P,close:_,source:y}}catch(y){throw await _(),y}}var $a=class{constructor(e=48*1024*1024){this.limit=e,this.bytes=0,this.entries=new Map}get(e){let r=this.entries.get(e);return r&&(this.entries.delete(e),this.entries.set(e,r)),r}set(e,r){this.delete(e);let n=r.bitmap.width*r.bitmap.height*4;if(n>this.limit){r.bitmap.close();return}for(this.entries.set(e,{...r,bytes:n}),this.bytes+=n;this.bytes>this.limit;)this.delete(this.entries.keys().next().value)}delete(e){let r=this.entries.get(e);r&&(this.bytes-=r.bytes,r.bitmap.close(),this.entries.delete(e))}clear(){for(let e of this.entries.keys())this.delete(e)}},Ha=class{constructor(e,r,n=20){this.count=e,this.defaultHeight=r,this.gap=n,this.heights=new Map,this.tree=new Float64Array(e+1),this.paddingTop=18}setHeight(e,r){let n=r-(this.heights.get(e)??this.defaultHeight);this.heights.set(e,r);for(let o=e;o<=this.count;o+=o&-o)this.tree[o]+=n}top(e){let r=(e-1)*(this.defaultHeight+this.gap);for(let n=e-1;n>0;n-=n&-n)r+=this.tree[n];return this.paddingTop+r}height(e){return this.heights.get(e)??this.defaultHeight}pageAt(e){let r=1,n=this.count;for(;r<n;){let o=Math.ceil((r+n)/2);this.top(o)<=e?r=o:n=o-1}return r}entryAt(e){let r=this.pageAt(e);return{page:r,top:this.top(r),height:this.height(r)}}};var vp=/[\u1100-\u11FF\u2E80-\u2EFF\u3000-\u303F\u3040-\u30FF\u3100-\u312F\u3130-\u318F\u3400-\u4DBF\u4E00-\u9FFF\uA960-\uA97F\uAC00-\uD7AF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF]/,Bc=/[.。！？!?；;…]$/,yp="0123456789+\u2212-",zc="\u2070\xB9\xB2\xB3\u2074\u2075\u2076\u2077\u2078\u2079\u207A\u207B\u207B";var wp=/[\u0000-\u0008\u000b\u000c\u000e-\u001f\ufffd]/u;function Fo(t){return!!t&&vp.test(t)}function _p(t){return String(t).replace(/\u0000/g,"").replace(/[\t\u00a0\u2000-\u200a\u202f\u205f\u3000]/g," ").replace(/\s+/g," ")}function Ua(t){return typeof t=="number"&&Number.isFinite(t)?t:null}function Do(t){let e=t&&t.transform;if(!Array.isArray(e)||e.length<6)return null;let r=Ua(e[4]),n=Ua(e[5]);if(r===null||n===null)return null;let o=Ua(t.width),i=Ua(t.height);return{x:r,y:n,width:o===null?null:Math.abs(o),height:i===null||i<=0?null:i}}function kp(t,e){let r=0;for(let n of t)r+=Fo(n)?1:.5;return r*(e||10)}function Tp(t){return{text:"",startX:t?t.x:0,endX:t?t.x:0,y:t?t.y:0,height:t&&t.height?t.height:0,hasGeometry:!!t}}function Sp(t,e,r){let n=_p(e);if(!n)return;if(r?.height&&t.hasGeometry&&t.height&&/^[+−-]?\d*$/.test(n)){let i=t.text.codePointAt(t.text.length-2),a=i>=119808&&i<=120779,s=/^[0-9]+$/.test(n)&&t.text&&zc.includes(t.text.at(-1)),l=(r.y-t.y)/t.height,d=(r.x-t.endX)/t.height;(a||s)&&r.height<=t.height*.85&&l>=.18&&l<=.58&&d>=-.2&&d<=.18&&(n=[...n].map(f=>zc[yp.indexOf(f)]).join(""))}let o="";if(t.text){let i=t.text[t.text.length-1],a=n[0];if(i===" "||a===" "||t.text.endsWith(" "))o="";else if(Fo(i)||Fo(a))o="";else if(r&&t.hasGeometry){let s=r.x-t.endX,l=Math.max(t.height||0,r.height||0,1);o=s>l*.18?" ":""}}if(t.text=(t.text+o+n).replace(/^ +/,""),r&&t.hasGeometry){let i=r.width===null?kp(n,r.height||t.height):r.width;t.endX=Math.max(t.endX,r.x+i),t.startX=Math.min(t.startX,r.x),r.height&&(t.height=Math.max(t.height,r.height))}}function Ep(t,e,r){if(!t||r)return!0;if(!e||!t.hasGeometry)return!1;let n=Math.max(t.height||0,e.height||0,1);return Math.abs(e.y-t.y)>n*.58||e.x<t.endX-n*2&&t.endX-t.startX>n}function Ap(t,e){let r=t.lastLine;if(!r)return!1;let n=r.height||10,o=e.height||n,i=Math.max(n,o,1),a=r.y-e.y;if(a<-i*1.2||a>i*1.68)return!0;let s=o/n;return!!(s>1.18||s<.84||e.startX-t.leftX>i*1.25||Bc.test(r.text)&&a>i*1.35&&r.endX<t.rightX-i*2)}function Np(t){let e="";for(let r of t){let n=r.text.trim();if(!n)continue;if(!e){e=n;continue}let o=e[e.length-1],i=n[0];o==="-"||Fo(o)||Fo(i)?e+=n:e+=" "+n}return e}function Cp(t){if(t.length<=1400)return[t];let e=[],r=t;for(;r.length>1400;){let n=Math.floor(770.0000000000001),o=Math.min(r.length,1400),i=-1;for(let s=o;s>n;s-=1)if(Bc.test(r[s-1])||r[s-1]===`
`){i=s;break}i<=0&&(i=r.lastIndexOf(" ",o),i<n&&(i=o));let a=r.slice(0,i).trim();a&&e.push(a),r=r.slice(i).trim()}return r&&e.push(r),e}function $c(t,{metadata:e=!1}={}){let r=[],n=null,o=!1;if(Array.isArray(t))for(let[l,d]of t.entries()){if(!d||typeof d.str!="string")continue;if(!d.str.trim()){d.hasEOL&&(o=!0);continue}let f=Do(d);Ep(n,f,o)&&(n=Tp(f),n.itemIndices=[],r.push(n)),Sp(n,d.str,f),n.itemIndices.push(d.__pdfItemIndex??l),o=!!d.hasEOL}let i=[],a=null;for(let l of r)l.text.trim()&&(!a||Ap(a,l)?(a={lines:[l],lastLine:l,leftX:l.startX,rightX:l.endX},i.push(a)):(a.lines.push(l),a.lastLine=l,a.leftX=Math.min(a.leftX,l.startX),a.rightX=Math.max(a.rightX,l.endX)));let s=[];for(let l of i){let d=Np(l.lines);for(let f of Cp(d)){let g=f.trim();g&&s.push({src:g,...e?{itemIndices:l.lines.flatMap(u=>u.itemIndices)}:{}})}}return{text:s.map(l=>l.src).join(`

`),segments:s}}function Ip(t,e){let r=(t||[]).filter(u=>typeof u?.str=="string").map((u,p)=>({...u,__pdfItemIndex:p})),n=0;for(let u=0;u<(t||[]).length;u+=1)typeof t[u]?.str=="string"&&(r[n++].__pdfItemIndex=u);if(!e)return r;let o=r.filter(u=>u.str.trim().length>15&&u.width>e*.12),i=o.filter(u=>u.transform?.[4]<e*.3&&u.transform[4]+u.width<e*.5),a=o.filter(u=>u.transform?.[4]>=e*.49&&u.transform[4]<e*.66);if(i.length<4||a.length<4)return r;let s=r.filter(u=>u.str.trim()&&u.transform?.[4]<e*.48&&u.transform[4]+u.width>e*.52),d=a.filter(u=>{let p=u.transform[5],_=Math.max(2,(u.height||10)*.55);return i.some(N=>Math.abs(N.transform[5]-p)<_)&&!s.some(N=>Math.abs(N.transform[5]-p)<_)}).map(u=>u.transform[4]).sort((u,p)=>u-p);if(!d.some((u,p)=>d[p+3]-u<e*.02))return r;let f=[...new Set(o.filter(u=>u.transform?.[4]<e*.4&&u.transform[4]+u.width>e*.6).map(u=>Math.round(u.transform[5])))].sort((u,p)=>p-u),g=u=>{let p=u.transform?.[5]||0,_=f.filter(y=>y>p+3).length*2,N=f.some(y=>Math.abs(y-p)<=3);return[_+(N?1:0),N?0:u.transform?.[4]>=e*.48?2:1]};return r.sort((u,p)=>{let _=g(u),N=g(p);for(let y=0;y<_.length;y+=1)if(_[y]!==N[y])return _[y]-N[y];return u.__pdfItemIndex-p.__pdfItemIndex})}function Rp(t){for(let e=1;e+1<t.length;e++){let r=t[e];if(r.str!=="\u221A")continue;let n=t[e-1],o=t[e+1],i=t[e+2];if(n.str!=="1"||!/^[A-Za-z]$/u.test(o.str))continue;let a=Do(n),s=Do(r),l=Do(o);if(!a?.height||!s?.width||!l?.height||!l.width||!a.width)continue;let d=a.x+a.width/2,f=(a.y-l.y)/l.height;if(s.y>=a.y||s.y<=l.y||f<.8||f>1.8||d<s.x||d>l.x+l.width||Math.abs(l.x-s.x-s.width)>l.height*.25||(r.str="/\u221A",!i||!/^[A-Za-z0-9]$/u.test(i.str)))continue;let g=Do(i);g?.height&&g.height<=l.height*.85&&g.y<l.y-l.height*.1&&g.y>l.y-l.height*.55&&Math.abs(g.x-l.x-l.width)<=l.height*.18&&(i.str="_"+i.str)}}function Qi(t,e,r){let n=Ip(t,r);Rp(n);let o=$c(n,{metadata:!0});return{text:o.text,segments:o.segments.map((i,a)=>{let s=i.itemIndices.map(u=>t[u]?.str?.trim()||""),l=(i.src.match(/(?:\b[Oo]|[𝑂𝒪ΩΘ])\s*\((?:[^()\n]|\([^()\n]{1,40}\)){1,120}\)/gu)||[]).filter(u=>/[\u{1d400}-\u{1d7ff}⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻+×/]|\(\s*[A-Z]\s*\)/u.test(u)),d=i.src.match(/(?<![\p{L}\p{N}.])\d+(?:[.,]\d+)?(?:\s*[-–—]\s*\d+(?:[.,]\d+)?)?\s*×(?!\s*\d)/gu)||[],f=i.src.match(/\b1\/√[A-Za-z](?:_[A-Za-z0-9])?(?![\p{L}\p{N}_])/gu)||[],g=s.filter(u=>/[∑∫√≈≠≤≥∂∞]/u.test(u)&&!/[A-Za-z]{4}|[\u3400-\u9fff]/u.test(u));return{...i,id:`p${e}-s${a}`,protectedTokens:[...new Set([...l,...d,...f,...g])],...s.some(u=>wp.test(u))?{sourceNeedsReview:!0}:{}}})}}var Hc=String.raw`
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
`;var Uc=String.raw`
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
`;var zo=Mt(require("react"),1);var Wc="reader-a-2";function $n(t){return String(t||"").split(/\r?\n/u).map(e=>e.trim()).filter(Boolean).join(`
`).slice(0,4e3)}function Mp(t,e=[]){let r=[...new Set([...e,...t.match(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]|\[\d+(?:\s*[,–—-]\s*\d+)*\]|https?:\/\/[^\s]+|\b10\.\d{4,9}\/[^\s]+/gu)||[]])].filter(i=>i&&t.includes(i)).sort((i,a)=>a.length-i.length),n=[],o=t;for(let i of r){let a=`\u27E6KEEP_${n.length}\u27E7`,s=o.split(i);s.length!==1&&(o=s.join(a),n.push({placeholder:a,token:i,count:s.length-1}))}return{text:o,restore(i){let a=String(i||"");for(let{placeholder:s,token:l,count:d}of n){let f=a.split(s);if(f.length-1!==d)throw new Error("\u8BD1\u6587\u9057\u6F0F\u6216\u91CD\u590D\u4E86\u516C\u5F0F\u6216\u5F15\u7528\u6807\u8BB0\uFF0C\u8BF7\u91CD\u8BD5\u672C\u6BB5\u3002");a=f.join(l)}if(/⟦KEEP_\d+⟧/u.test(a))throw new Error("\u8BD1\u6587\u5305\u542B\u65E0\u6CD5\u5BF9\u5E94\u7684\u516C\u5F0F\u6807\u8BB0\uFF0C\u8BF7\u91CD\u8BD5\u672C\u6BB5\u3002");return a}}}async function Pp(t,e){if(!globalThis.crypto?.subtle)return null;let r=new TextEncoder().encode(JSON.stringify([Wc,t.documentId,e,"zh-CN",t.model?.provider,t.model?.model,t.model?.promptVersion,$n(t.glossary)])),n=await crypto.subtle.digest("SHA-256",r);return`${t.documentId}:${Array.from(new Uint8Array(n),o=>o.toString(16).padStart(2,"0")).join("")}`}var Wa=class{constructor({translate:e,cache:r,onChange:n=()=>{},onModelChanged:o=()=>{},prefetchDelay:i=700,requestTimeout:a=12e4}){this.translate=e,this.cache=r,this.onChange=n,this.onModelChanged=o,this.prefetchDelay=i,this.requestTimeout=a,this.sources=new Map,this.entries=new Map,this.jobs=new Map,this.preparing=new Map,this.epoch=0,this.sequence=0,this.activePage=1,this.visibleIds=new Set,this.config={},this.disposed=!1}configure(e){if(this.disposed)return;let r={...e,glossary:$n(e.glossary)},n=JSON.stringify([r.documentId,r.model,r.glossary,Wc]),o=n!==this.namespace;if(o){let i=this.config.documentId;this.epoch+=1,this.abortJobs(),i&&i!==r.documentId&&this.sources.clear(),this.entries.clear(),this.preparing.clear(),this.namespace=n,this.cacheIssue=""}if(this.config=r,(!r.enabled||!r.canTranslate)&&this.abortJobs(),r.prefetch===!1)for(let i of[...this.jobs.values()])i.page!==this.activePage&&this.abortJob(i);if(o)for(let[i,a]of this.sources)this.registerPage(i,a);this.emit(),this.pump()}setFocus(e,r=[]){if(!this.disposed){if(e!==this.activePage){this.activePage=e,this.prefetchAfter=Date.now()+this.prefetchDelay,clearTimeout(this.timer),this.timer=null;for(let n of[...this.jobs.values()])n.page!==e&&this.abortJob(n);for(let n of this.sources.keys())if(Math.abs(n-e)>3){this.sources.delete(n);for(let[o,i]of this.entries)i.page===n&&this.entries.delete(o)}}this.visibleIds=new Set(r),this.emit(),this.pump()}}registerPage(e,r){if(this.disposed)return;this.sources.set(e,r);let n=[];for(let[o,i]of(r.segments||[]).entries()){let a=i.id||`p${e}-s${o}`,s=`${e}:${a}`,l=this.entries.get(s);if(l?.src===i.src&&l.sourceNeedsReview===i.sourceNeedsReview)continue;let d={...i,id:a,uid:s,index:o,page:e,status:"checking",zh:"",cached:!1};this.entries.set(s,d),i.sourceNeedsReview?d.status="source-review":n.push(d)}if(n.length){let o=Symbol(),i=this.epoch;this.preparing.set(e,o),Promise.all(n.map(a=>this.prepare(a,i))).finally(()=>{this.preparing.get(e)===o&&(this.preparing.delete(e),this.pump())})}this.emit()}fresh(e,r){return!this.disposed&&r===this.epoch&&this.entries.get(e.uid)===e}async prepare(e,r){try{let n=e.src.replace(/\s/gu,"");if(n&&(n.match(/[\u3400-\u9fff]/gu)||[]).length/n.length>=.55){e.zh=e.src,e.status="done",e.passthrough=!0,this.emit();return}if(e.key=await Pp(this.config,e.src),!this.fresh(e,r))return;let o=e.key&&await this.cache?.get(e.key);if(!this.fresh(e,r))return;typeof o?.zh=="string"&&o.zh.trim()?(e.zh=o.zh,e.cached=!0,e.status="done"):e.status="queued"}catch{if(!this.fresh(e,r))return;e.status="queued",this.cacheIssue="\u672C\u5730\u7F13\u5B58\u6682\u4E0D\u53EF\u7528\uFF0C\u672C\u6B21\u8BD1\u6587\u4ECD\u53EF\u9605\u8BFB\u3002"}this.emit(),this.pump()}abortJob(e){clearTimeout(e.timeout),e.controller.abort(),this.jobs.delete(e.id);for(let r of e.entries)this.entries.get(r.uid)===r&&r.job===e.id&&(r.status="queued")}abortJobs(){clearTimeout(this.timer),this.timer=null;for(let e of[...this.jobs.values()])this.abortJob(e)}pump(){if(!(this.disposed||!this.config.enabled||!this.config.canTranslate||!this.config.documentId))for(;this.jobs.size<2;){let e=[...this.entries.values()].filter(d=>d.page===this.activePage),r=e.some(d=>d.status==="queued"||d.status==="checking"||d.status==="loading"),n=[...this.entries.values()].filter(d=>d.status==="queued"&&!this.preparing.has(d.page)&&(d.page===this.activePage||this.config.prefetch!==!1&&!r&&d.page===this.activePage+1)).sort((d,f)=>d.page-this.activePage-(f.page-this.activePage)||Number(this.visibleIds.has(f.id))-Number(this.visibleIds.has(d.id))||d.index-f.index);if(!n.length)return;let o=n[0];if(o.page!==this.activePage&&Date.now()<(this.prefetchAfter||0)){this.timer||(this.timer=setTimeout(()=>{this.timer=null,this.pump()},this.prefetchAfter-Date.now()));return}let i=[],a=0,s=e.some(d=>d.status==="done")?3:1;for(let d of n){if(d.page!==o.page||i.length>=s||a+d.src.length>3e3&&i.length)break;i.push(d),a+=d.src.length}let l={id:++this.sequence,epoch:this.epoch,controller:new AbortController,page:o.page,entries:i,config:this.config};this.jobs.set(l.id,l);for(let d of i)d.status="loading",d.job=l.id,d.error="";l.timeout=setTimeout(()=>{if(this.jobs.get(l.id)===l){this.abortJob(l);for(let d of i)this.fresh(d,l.epoch)&&(d.status="error",d.error="\u672C\u6BB5\u7FFB\u8BD1\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5\u6216\u7A0D\u540E\u7EE7\u7EED\u3002");this.emit(),this.pump()}},this.requestTimeout),this.emit(),this.run(l)}}async run(e){let r=n=>!e.controller.signal.aborted&&this.fresh(n,e.epoch)&&n.job===e.id;try{let n=this.sources.get(e.page)?.segments||[],o=e.entries.map(d=>Mp(d.src,d.protectedTokens)),i=e.entries[0].index,a=n.slice(Math.max(0,i-1),i+e.entries.length+1);i===0&&a.unshift(this.sources.get(e.page-1)?.segments?.at(-1)),i+e.entries.length>=n.length&&a.push(this.sources.get(e.page+1)?.segments?.[0]);let s=a.filter(d=>d&&!d.sourceNeedsReview).map(d=>d.src).join(`
`).slice(0,1200),l=await this.translate(e.entries.map((d,f)=>({id:d.id,text:o[f].text})),{title:e.config.title,context:s,glossary:e.config.glossary,expectedModel:e.config.model,signal:e.controller.signal,includeMetadata:!0});if(l.model&&(l.model.provider!==e.config.model?.provider||l.model.model!==e.config.model?.model)||l.promptVersion&&l.promptVersion!==e.config.model?.promptVersion){let d=new Error("\u9ED8\u8BA4\u6A21\u578B\u5DF2\u53D8\u5316\uFF0C\u8BF7\u5237\u65B0\u7FFB\u8BD1\u670D\u52A1\u3002");throw d.code="MODEL_CHANGED",d}for(let[d,f]of e.entries.entries())if(r(f)){try{let g=l.translations?.[f.id];if(!g?.trim())throw new Error("\u672C\u6BB5\u6CA1\u6709\u8FD4\u56DE\u8BD1\u6587\uFF0C\u8BF7\u91CD\u8BD5\u3002");f.zh=o[d].restore(g),f.status="done",f.cached=!1,f.key&&Promise.resolve(this.cache?.put({key:f.key,bookId:e.config.documentId,zh:f.zh})).catch(()=>{r(f)&&(this.cacheIssue="\u8BD1\u6587\u5DF2\u5B8C\u6210\uFF0C\u4F46\u672C\u5730\u7F13\u5B58\u672A\u80FD\u4FDD\u5B58\u3002",this.emit())})}catch(g){f.status="error",f.error=g.message}this.emit()}}catch(n){for(let o of e.entries)r(o)&&(o.status="error",o.error=n.message||"\u672C\u6BB5\u7FFB\u8BD1\u5931\u8D25\u3002");!e.controller.signal.aborted&&e.epoch===this.epoch&&n.code==="MODEL_CHANGED"&&this.onModelChanged()}finally{clearTimeout(e.timeout),this.jobs.delete(e.id),this.disposed||(this.emit(),this.pump())}}retry(e,r){if(e===this.activePage)for(let n of[...this.jobs.values()])n.page!==e&&this.abortJob(n);for(let n of this.entries.values())if(n.page===e&&(r?n.id===r:n.status==="error")){if(n.status==="loading"||n.status==="checking"||n.sourceNeedsReview)continue;n.status="queued",n.error="",n.cached=!1}this.emit(),this.pump()}emit(){if(this.disposed)return;let e={};for(let r of this.entries.values())(e[r.page]||=[]).push({...r});for(let r of Object.values(e))r.sort((n,o)=>n.index-o.index);this.onChange({pages:e,cacheIssue:this.cacheIssue||""})}dispose(){this.disposed=!0,this.abortJobs(),this.sources.clear(),this.entries.clear()}};var ke=require("react/jsx-runtime");function jc({page:t,source:e,rows:r=[],activeId:n,originRef:o,translation:i,onActivate:a,onClose:s}){let l=zo.default.useRef(null),{preferences:d,updatePreferences:f,paused:g,setPaused:u,modelError:p,refreshModel:_,cacheIssue:N,retry:y}=i,[P,w]=zo.default.useState(d.glossary||"");zo.default.useEffect(()=>w(d.glossary||""),[d.glossary]);let v=r.filter(I=>I.status==="done").length,S=r.filter(I=>I.status==="error").length,C=r.filter(I=>I.cached).length,E=r.map(I=>I.status).join(",");zo.default.useEffect(()=>{if(!d.linked||o.current!=="source")return;let I=l.current,b=[...I?.querySelectorAll("[data-translation-segment]")||[]].find(z=>z.dataset.translationSegment===n);if(!I||!b)return;let F=I.getBoundingClientRect(),L=b.getBoundingClientRect();(L.top<F.top+8||L.bottom>F.bottom-8)&&(I.scrollTop+=L.top-F.top-12)},[t,n,E,d.linked,d.fontSize]);let D=(I,b=!1)=>a(I,{origin:"translation",reveal:b});return(0,ke.jsxs)("aside",{className:"dshr-pdf-translation-panel","aria-label":"PDF \u4E2D\u6587\u5BF9\u7167",style:{"--dshr-translation-font-size":`${d.fontSize||16}px`},children:[(0,ke.jsxs)("header",{className:"dshr-pdf-translation-header",children:[(0,ke.jsxs)("div",{children:[(0,ke.jsx)("strong",{children:"\u4E2D\u6587\u5BF9\u7167"}),(0,ke.jsxs)("span",{children:["\u7B2C ",t," \u9875 \xB7 ",v,"/",r.length," \u6BB5",C?` \xB7 \u7F13\u5B58 ${C} \u6BB5`:""]})]}),(0,ke.jsx)("button",{type:"button","aria-label":"\u5173\u95ED\u8BD1\u6587\u4FA7\u680F",title:"\u5173\u95ED\u8BD1\u6587\u4FA7\u680F",onClick:s,children:"\xD7"})]}),(0,ke.jsxs)("div",{className:"dshr-pdf-translation-controls",children:[(0,ke.jsx)("button",{type:"button",onClick:()=>u(!g),children:g?"\u7EE7\u7EED\u7FFB\u8BD1":"\u6682\u505C\u7FFB\u8BD1"}),(0,ke.jsxs)("label",{children:[(0,ke.jsx)("input",{type:"checkbox",checked:d.linked!==!1,onChange:I=>f({linked:I.target.checked})}),"\u6BB5\u843D\u8054\u52A8"]}),(0,ke.jsx)("button",{type:"button","aria-label":"\u7F29\u5C0F\u8BD1\u6587\u5B57\u53F7",disabled:d.fontSize<=12,onClick:()=>f({fontSize:Math.max(12,d.fontSize-1)}),children:"A\u2212"}),(0,ke.jsx)("span",{className:"dshr-pdf-translation-font",children:d.fontSize||16}),(0,ke.jsx)("button",{type:"button","aria-label":"\u653E\u5927\u8BD1\u6587\u5B57\u53F7",disabled:d.fontSize>=24,onClick:()=>f({fontSize:Math.min(24,d.fontSize+1)}),children:"A\uFF0B"})]}),(0,ke.jsxs)("div",{className:"dshr-pdf-translation-options",children:[(0,ke.jsxs)("label",{children:[(0,ke.jsx)("input",{type:"checkbox",checked:!!d.showSource,onChange:I=>f({showSource:I.target.checked})}),"\u663E\u793A\u539F\u6587"]}),(0,ke.jsxs)("label",{children:[(0,ke.jsx)("input",{type:"checkbox",checked:d.prefetch!==!1,onChange:I=>f({prefetch:I.target.checked})}),"\u9884\u8BD1\u4E0B\u4E00\u9875"]})]}),(0,ke.jsxs)("details",{className:"dshr-pdf-glossary",children:[(0,ke.jsxs)("summary",{children:["\u6587\u6863\u672F\u8BED\u8868",d.glossary?" \xB7 \u5DF2\u542F\u7528":""]}),(0,ke.jsxs)("label",{children:["\u6BCF\u884C\u586B\u5199\u201C\u539F\u8BCD = \u4E2D\u6587\u8BD1\u6CD5\u201D",(0,ke.jsx)("textarea",{"aria-label":"\u6587\u6863\u672F\u8BED\u8868",maxLength:4e3,value:P,placeholder:`band gap = \u5E26\u9699
gate = \u6805\u6781`,onChange:I=>w(I.target.value)})]}),(0,ke.jsx)("button",{type:"button",disabled:$n(P)===d.glossary,onClick:()=>f({glossary:$n(P)}),children:"\u5E94\u7528\u5E76\u66F4\u65B0\u8BD1\u6587"})]}),p&&(!r.length||r.some(I=>I.status!=="done"))&&e?.segments.length!==0?(0,ke.jsxs)("div",{className:"dshr-pdf-translation-notice",role:"status",children:[p,(0,ke.jsx)("button",{type:"button",onClick:_,children:"\u5237\u65B0\u670D\u52A1"})]}):null,N?(0,ke.jsx)("div",{className:"dshr-pdf-translation-notice",role:"status",children:N}):null,g?(0,ke.jsx)("div",{className:"dshr-pdf-translation-notice",role:"status",children:"\u5DF2\u6682\u505C\uFF0C\u5DF2\u5B8C\u6210\u7684\u8BD1\u6587\u4ECD\u53EF\u9605\u8BFB\u3002"}):null,(0,ke.jsxs)("div",{className:"dshr-pdf-translation-list",ref:l,tabIndex:0,"aria-label":`\u7B2C ${t} \u9875\u8BD1\u6587`,onWheel:()=>{o.current="translation"},children:[e?e.segments.length===0?(0,ke.jsx)("p",{className:"dshr-pdf-translation-empty",children:"\u6B64\u9875\u6CA1\u6709\u53EF\u63D0\u53D6\u7684\u6587\u5B57\uFF0C\u53EF\u80FD\u662F\u626B\u63CF\u9875\u6216\u56FE\u7247\u9875\u3002"}):null:(0,ke.jsx)("p",{className:"dshr-pdf-translation-empty",children:"\u6B63\u5728\u63D0\u53D6\u5F53\u524D\u9875\u6BB5\u843D\u2026"}),(e?.segments||[]).map(I=>{let b=I.sourceNeedsReview?{status:"source-review"}:r.find(F=>F.id===I.id)||{status:"queued"};return(0,ke.jsxs)("article",{"data-translation-segment":I.id,"data-status":b.status,className:`dshr-pdf-translation-paragraph${n===I.id&&d.linked!==!1?" is-linked":""}`,onPointerEnter:()=>{d.linked!==!1&&D(I.id)},children:[(0,ke.jsxs)("div",{className:"dshr-pdf-translation-paragraph-head",children:[(0,ke.jsxs)("span",{children:["\u6BB5\u843D ",Number(I.id.split("-s").at(-1))+1,b.cached?" \xB7 \u7F13\u5B58":""]}),(0,ke.jsxs)("div",{children:[(0,ke.jsx)("button",{type:"button","aria-label":`\u5B9A\u4F4D\u6BB5\u843D ${I.id}`,onClick:()=>D(I.id,!0),children:"\u5B9A\u4F4D\u539F\u6587"}),b.status==="done"&&!b.passthrough?(0,ke.jsx)("button",{type:"button","aria-label":`\u91CD\u65B0\u7FFB\u8BD1\u6BB5\u843D ${I.id}`,onClick:()=>y(t,I.id),children:"\u91CD\u8BD1\u672C\u6BB5"}):null]})]}),d.showSource?(0,ke.jsx)("p",{className:"dshr-pdf-translation-original",children:I.src}):null,b.zh?(0,ke.jsx)("p",{className:"dshr-pdf-translation-result",children:b.zh}):null,b.status==="done"?null:b.status==="source-review"?(0,ke.jsx)("p",{className:"dshr-pdf-translation-waiting",role:"status",children:"\u672C\u6BB5\u542B\u65E0\u6CD5\u786E\u8BA4\u7684 PDF \u5B57\u7B26\u3002\u8BF7\u9009\u62E9\u201C\u5B9A\u4F4D\u539F\u6587\u201D\uFF0C\u5728\u9875\u9762\u56FE\u50CF\u4E0A\u6838\u5BF9\u3002"}):b.status==="error"?(0,ke.jsxs)("div",{className:"dshr-pdf-translation-segment-error",children:[(0,ke.jsx)("p",{children:b.error}),(0,ke.jsx)("button",{type:"button",onClick:()=>y(t,I.id),children:"\u91CD\u8BD5\u672C\u6BB5"})]}):(0,ke.jsx)("p",{className:"dshr-pdf-translation-waiting",role:"status",children:g?"\u7B49\u5F85\u7EE7\u7EED\u7FFB\u8BD1":b.status==="loading"?"\u6B63\u5728\u7FFB\u8BD1\u672C\u6BB5\u2026":b.status==="checking"?"\u6B63\u5728\u8BFB\u53D6\u5DF2\u6709\u8BD1\u6587\u2026":"\u7B49\u5F85\u7FFB\u8BD1\u2026"})]},I.id)})]}),(0,ke.jsxs)("footer",{className:"dshr-pdf-translation-footer",children:[(0,ke.jsx)("span",{children:"\u60AC\u505C\u5BF9\u7167\u6BB5\u843D\uFF0C\u70B9\u51FB\u201C\u5B9A\u4F4D\u539F\u6587\u201D\u8FD4\u56DE\u51FA\u5904\u3002"}),S?(0,ke.jsxs)("button",{type:"button",onClick:()=>y(t),children:["\u91CD\u8BD5\u5931\u8D25\u6BB5\u843D\uFF08",S,"\uFF09"]}):null]})]})}var kr=Mt(require("react"),1);var Ji={glossary:"",fontSize:16,prefetch:!0,showSource:!1,linked:!0};function Gc({documentId:t,title:e,enabled:r,activePage:n,sources:o,visibleIds:i}){let[a,s]=kr.default.useState({documentId:"",pages:{},cacheIssue:""}),[l,d]=kr.default.useState({...Ji,documentId:""}),[f,g]=kr.default.useState(null),[u,p]=kr.default.useState(""),[_,N]=kr.default.useState(0),[y,P]=kr.default.useState(!1),w=kr.default.useRef(null);return kr.default.useEffect(()=>{if(!t)return;let v=!0;s({documentId:t,pages:{},cacheIssue:""}),P(!1);let S=new Wa({translate:oo,cache:{get:Kl,put:Yl},onChange:C=>{v&&s({documentId:t,...C})},onModelChanged:()=>{v&&N(C=>C+1)}});return w.current={documentId:t,controller:S},Zl(t).catch(()=>({})).then(C=>{v&&d({...Ji,...C,documentId:t,glossary:$n(C.glossary),fontSize:Math.max(12,Math.min(24,Number(C.fontSize)||16))})}),()=>{v=!1,S.dispose(),w.current?.controller===S&&(w.current=null)}},[t]),kr.default.useEffect(()=>{if(!t)return;let v=new AbortController;p(""),bc({signal:v.signal}).then(E=>{v.signal.aborted||(g({...E,documentId:t}),E.ready||p("\u7FFB\u8BD1\u6A21\u578B\u672A\u5C31\u7EEA\uFF0C\u8BF7\u5728 DSH \u8BBE\u7F6E\u4E2D\u9009\u62E9\u9ED8\u8BA4\u6A21\u578B\u3002"))}).catch(E=>{v.signal.aborted||(p(E.message||"\u7FFB\u8BD1\u670D\u52A1\u4E0D\u53EF\u7528\u3002"),g({documentId:t,ready:!1}))});let S=()=>{document.visibilityState==="visible"&&N(E=>E+1)},C=setInterval(S,6e4);return document.addEventListener("visibilitychange",S),()=>{v.abort(),clearInterval(C),document.removeEventListener("visibilitychange",S)}},[t,_]),kr.default.useEffect(()=>{let v=w.current;if(!(!v||v.documentId!==t||l.documentId!==t||f?.documentId!==t)){v.controller.configure({documentId:t,title:e,enabled:r&&!y,canTranslate:!!f.ready,model:{provider:f.provider||"",model:f.model||"",promptVersion:f.promptVersion||""},glossary:l.glossary,prefetch:l.prefetch}),v.controller.setFocus(n,i);for(let[S,C]of Object.entries(o))Math.abs(Number(S)-n)<=3&&v.controller.registerPage(Number(S),C)}},[t,e,r,y,l.glossary,l.prefetch,l.documentId,f,n,i,o]),kr.default.useEffect(()=>{t&&l.documentId===t&&Ql(t,l).catch(()=>{})},[t,l]),{...a.documentId===t?a:{pages:{},cacheIssue:""},preferences:l.documentId===t?l:Ji,paused:y,model:f?.documentId===t?f:null,modelError:u,setPaused:P,refreshModel:()=>N(v=>v+1),updatePreferences:v=>d(S=>({...S,...v})),retry:(v,S)=>w.current?.controller.retry(v,S)}}var qc=Mt(require("react"),1);var Hn=require("react/jsx-runtime");function ja(t){let e=Number(t);return Number.isFinite(e)?Math.min(1,Math.max(0,e)):0}function Op(t,e){typeof t=="function"&&t(e)}function Xc({annotations:t,onOpenAnnotation:e,page:r}){let n=qc.default.useRef(e);n.current=e;let o=Array.isArray(t)?t:[],i=[];for(let a=0;a<o.length;a+=1){let s=o[a];if(!s||!Array.isArray(s.rects)||s.rects.length===0||s.kind&&s.kind!=="pdf"||r!=null&&s.page!=null&&Number(s.page)!==Number(r))continue;let l=s.style==="underline"||s.style==="note"?s.style:"highlight",d=s.color||"#f5d76e",f=s.id==null?"":String(s.id),g=La(`${f}|${s.createdAt||0}`),u=Pa(s.width),p=Fa(s),_=l==="note"||typeof s.note=="string"&&s.note.trim().length>0,N=null;for(let y=0;y<s.rects.length;y+=1){let P=s.rects[y];if(!P||typeof P!="object")continue;let w=ja(P.x),v=ja(P.y),S=Math.min(ja(P.w),1-w),C=Math.min(ja(P.h),1-v);if(!(S>.002)||!(C>.001))continue;N={x:w,y:v,width:S,height:C};let E=`${f}:${y}`;if(l==="underline")i.push((0,Hn.jsx)("svg",{className:"dshr-anno-pdf-underline",style:{left:`${w*100}%`,top:`calc(${(v+C)*100}% - 4px)`,width:`${S*100}%`,height:"5px","--dshr-anno-color":d},viewBox:"0 0 100 6",preserveAspectRatio:"none","data-anno-id":f,"aria-hidden":"true",focusable:"false",children:(0,Hn.jsx)("path",{d:Da(g,100)})},`u:${E}`));else{let D=Math.max(C*u,.004),I=v+C*Oa(u);i.push((0,Hn.jsx)("span",{className:"dshr-anno-pdf-band",style:{left:`${w*100}%`,top:`${I*100}%`,width:`${S*100}%`,height:`${D*100}%`,"--dshr-anno-color":d},"data-anno-id":f,"aria-hidden":"true"},`b:${E}`))}}if(_&&N){let y=N.x+N.width,P=Math.min(Math.max(.005,y+.004),.972),w=Math.max(.004,N.y);i.push((0,Hn.jsx)("button",{type:"button",className:"dshr-anno-note-btn",style:{left:`${P*100}%`,top:`${w*100}%`,"--dshr-anno-color":d},"data-anno-id":f,title:p?`\u67E5\u770B\u6279\u6CE8\uFF1A${p}`:"\u67E5\u770B\u6279\u6CE8","aria-label":p?`\u67E5\u770B\u6279\u6CE8\uFF1A${p}`:"\u67E5\u770B\u6279\u6CE8",onMouseDown:v=>v.preventDefault(),onClick:()=>Op(n.current,f),children:(0,Hn.jsx)(wn,{size:12})},`n:${f}`))}}return(0,Hn.jsx)("div",{className:"dshr-anno-pdf-layer","data-anno-layer":"pdf",children:i})}var _e=require("react/jsx-runtime"),td=Hc+Uc;var{useCallback:Vc,useEffect:zt,useLayoutEffect:es,useMemo:ts,useRef:Se,useState:It}=$o.default,as=612,is=792,rs=.1,ns=5,Kc=1.2,Lp=32,Dp="1000px 0px",Fp=1e7,Yc=8192,zp=2,os=128,Bp=160,$p=600;function Fr(t,e,r){return Math.min(r,Math.max(e,t))}function Hp(t){if(t.items.length<=os)return t;let e=0,r=!1;return new ReadableStream({async pull(n){if(await new Promise(i=>setTimeout(i,0)),r)return;let o=Math.min(e+os,t.items.length);n.enqueue({items:t.items.slice(e,o),styles:e===0?t.styles:void 0,lang:t.lang}),e=o,e===t.items.length&&n.close()},cancel(){r=!0}})}function Ga(t,e,r,n,o=0){let i=t&&Number.isFinite(t.width)&&t.width>0?t.width:as,a=t&&Number.isFinite(t.height)&&t.height>0?t.height:is,s;if((e==="fit"||e==="page")&&n>0){if(s=Math.max(1,Math.floor(n)),e==="page"&&o>0){let f=Math.floor(i/a*Math.max(1,o-36));s=Math.max(1,Math.min(s,f))}}else s=Math.max(1,Math.floor(i*Fr(r,rs,ns)));let l=s/i,d=Math.max(1,Math.floor(a*l));return{width:s,height:d,pageScale:l}}function Bo(t,e,r=Fp){let n=e&&Number.isFinite(e.width)&&e.width>0?e.width:as,o=e&&Number.isFinite(e.height)&&e.height>0?e.height:is,i=Math.min(Math.max(globalThis.devicePixelRatio||1,1),2),a=t*i,s=n*o*a*a;s>r&&(a*=Math.sqrt(r/s));let l=Math.max(n,o)*a;return l>Yc&&(a*=Yc/l),Math.max(Number.EPSILON,a)}function Zc(t){let e=t&&t.name;return e==="RenderingCancelledException"||e==="AbortException"||e==="AbortError"||e==="WorkerTaskCancelled"}function Qc(t){let e=t&&t.name,r=t&&t.message?String(t.message):String(t||"");return e==="PasswordException"?"\u8BE5 PDF \u5DF2\u52A0\u5BC6\uFF0C\u9700\u8981\u5BC6\u7801\u624D\u80FD\u6253\u5F00\u3002":e==="InvalidPDFException"?"\u6587\u4EF6\u4E0D\u662F\u6709\u6548\u7684 PDF\uFF0C\u6216\u8005\u5DF2\u7ECF\u635F\u574F\u3002":e==="MissingPDFException"?"\u6CA1\u6709\u627E\u5230 PDF \u6570\u636E\u3002":e==="UnexpectedResponseException"?`PDF \u6570\u636E\u8BFB\u53D6\u5931\u8D25${r?`\uFF1A${r}`:"\u3002"} `:/dynamically imported module|Importing a module script failed|Failed to fetch|error loading|Cannot find module/i.test(r)?"PDF \u5F15\u64CE\u52A0\u8F7D\u5931\u8D25\uFF08/dsh-reader-assets/pdf.bundle.js\uFF09\u3002\u8BF7\u786E\u8BA4 Host \u5DF2\u6B63\u786E\u63D0\u4F9B\u9759\u6001\u8D44\u6E90\u540E\u91CD\u8BD5\u3002":r?`PDF \u52A0\u8F7D\u5931\u8D25\uFF1A${r}`:"PDF \u52A0\u8F7D\u5931\u8D25\u3002"}function Jc(t){if(!t)return null;let e=t.nodeType===1?t:t.parentElement;if(!e||typeof e.closest!="function")return null;let r=e.closest("[data-page]");if(!r)return null;let n=Number(r.getAttribute("data-page"));return Number.isFinite(n)?n:null}function Up(t){if(!t||t.rangeCount===0)return null;let e=t.getRangeAt(0),r=typeof e.getClientRects=="function"?e.getClientRects():null;if(!r||r.length===0){let s=e.getBoundingClientRect();return s&&(s.width||s.height)?s:null}if(r.length===1)return r[0];let n=1/0,o=1/0,i=-1/0,a=-1/0;for(let s=0;s<r.length;s+=1){let l=r[s];!l||!l.width&&!l.height||(n=Math.min(n,l.left),o=Math.min(o,l.top),i=Math.max(i,l.right),a=Math.max(a,l.bottom))}if(!Number.isFinite(n))return e.getBoundingClientRect();try{return new DOMRect(n,o,Math.max(0,i-n),Math.max(0,a-o))}catch{return e.getBoundingClientRect()}}function ed(t){let e=Lp,r=t.querySelector(".dshr-pdf-content");if(r){let n=getComputedStyle(r),o=Number.parseFloat(n.paddingLeft)||0,i=Number.parseFloat(n.paddingRight)||0;e=o+i}return Math.max(120,t.clientWidth-e)}var Wp=$o.default.memo(function({pageNumber:e,dim:r,mode:n,scale:o,viewportWidth:i,viewportHeight:a,rendered:s,active:l=!0,registerPageElement:d,registerFrameElement:f,annotations:g,onOpenAnnotation:u}){let p=Ga(r,n,o,i,a),_=$o.default.useCallback(y=>d(e,y),[e,d]),N=$o.default.useCallback(y=>f(e,y),[e,f]);return(0,_e.jsx)("div",{className:"dshr-pdf-page","data-page":e,"data-active":l?"true":"false",style:l?void 0:{display:"none"},ref:_,children:(0,_e.jsx)("div",{className:"dshr-pdf-page-col",style:{width:`${p.width}px`},children:(0,_e.jsxs)("div",{className:"dshr-pdf-frame","data-page":e,"data-rendered":s?"true":"false",style:{width:`${p.width}px`,height:`${p.height}px`,"--total-scale-factor":String(p.pageScale)},ref:N,children:[(0,_e.jsx)("div",{className:"dshr-pdf-placeholder","aria-hidden":"true",children:e}),(0,_e.jsx)("canvas",{className:"dshr-pdf-canvas",width:1,height:1}),(0,_e.jsx)("div",{className:"dshr-pdf-text-layer"}),(0,_e.jsx)(Xc,{annotations:g,onOpenAnnotation:u}),(0,_e.jsx)("div",{className:"dshr-pdf-page-loading","aria-hidden":"true",children:(0,_e.jsx)("span",{className:"dshr-pdf-spinner"})})]})})})});function rd({data:t,documentId:e="",fileName:r="",renderImmersiveToolbar:n,renderTopbar:o,sidePanels:i,initialPage:a=1,autoTranslate:s=!1,pageTranslations:l,onReady:d,onPageChange:f,onPageText:g,onSelection:u,onRetryTranslation:p,annotations:_=[],onOpenAnnotation:N,focusAnnotation:y,hideTranslations:P=!1,paged:w=!1,onHideTranslations:v}){let S=Se(null);S.current={autoTranslate:s,paged:w,onReady:d,onPageChange:f,onPageText:g,onSelection:u,onRetryTranslation:p,onOpenAnnotation:N};let C=Se(null),E=Se(null),D=Se(new Map),I=Se(new Map),b=Se(new Map),F=Se(new Map),L=Se({width:as,height:is}),z=Se(new Map),B=Se(new Set),Y=Se([]),ne=Se(new Set),re=Se(null),oe=Se(null),U=Se(null),K=Se(new $a),te=Se(0),O=Se(!1),ue=Se("fit"),fe=Se(1),Te=Se(0),ie=Se(0),Ae=Se(!1),Ue=Se(0),ge=Se(1),ut=Se(!!s),Oe=Se([]),ft=Se(new Set),h=Se(0),c=Se(0),k=Se(0),x=Se(0),J=Se(null),se=Se(0),ce=Se(null),xe=Se(!1),ye=Se(""),$e=Se(0),Me=Se(!1),Je=Se(!1),et=Se(!1),[pe,ze]=It("loading"),[je,Le]=It(null),[vt,at]=It(null),[ve,wt]=It(0),[hr,Wt]=It({}),[kt,Ot]=It(null),[Et,ee]=It("fit"),[de,Re]=It(1),[De,tt]=It(0),[_t,ur]=It(0),[At,it]=It(!1),[Ne,pn]=It(Fr(Number.parseInt(a,10)||1,1,999999)),[nn,yr]=It({}),[or,fn]=It(""),[gn,Lt]=It(!1),[gt,Jn]=It(0),[Ht,jt]=It({}),[on,ar]=It([]),[Mr,En]=It(null),[eo,An]=It(!1),mn=Se(null),he=Se("source"),T=s&&!P&&!eo,W=Gc({documentId:e,title:r,enabled:T,activePage:Ne,sources:Ht,visibleIds:on}),le=Se(!1);le.current=T;let Ke=Se(!1);Ke.current=T&&W.preferences.linked!==!1,mn.current=Mr;let Ge=ts(()=>{let m=new Ha(ve,Ga(kt,At?"page":Et,de,De,_t).height);for(let[R,$]of Object.entries(hr))m.setHeight(Number(R),Ga($,At?"page":Et,de,De,_t).height);return m.paddingTop=J.current?.paddingTop??18,m},[ve,kt,hr,At,Et,de,De,_t]);J.current=Ge,es(()=>{let m=ce.current;ce.current=null,m&&m.revision===se.current&&!w&&_i(m.anchor)},[Ge,w]),zt(()=>{s&&!P&&An(!1)},[s,P]);function st(m,R){z.current.set(m,R),jt($=>$[m]===R?$:Object.fromEntries(Object.entries({...$,[m]:R}).filter(([X])=>Math.abs(Number(X)-ge.current)<=3)))}function Dt(m,R){return[...m?.querySelectorAll("[data-pdf-segments]")||[]].filter($=>$.dataset.pdfSegments.split("|").includes(R))}function Gt(m,{origin:R="source",reveal:$=!1}={},X=ge.current){if(he.current=R,En(nt=>nt?.page===X&&nt.id===m?nt:{page:X,id:m}),R==="source"&&X!==ge.current&&fr(X),!$)return;let ae=E.current,Q=Dt(I.current.get(X),m)[0];if(!ae||!Q)return;let Ce=Q.getBoundingClientRect(),Ye=ae.getBoundingClientRect();(Ce.top<Ye.top+12||Ce.bottom>Ye.bottom-12)&&ae.scrollTo({top:Math.max(0,ae.scrollTop+Ce.top-Ye.top-28),behavior:"auto"})}function pr(){if(!le.current)return;let m=E.current,R=I.current.get(ge.current);if(!m||!R)return;let $=m.getBoundingClientRect(),X=new Set;for(let Ce of R.querySelectorAll("[data-pdf-segments]")){let Ye=Ce.getBoundingClientRect();if(Ye.bottom>$.top+4&&Ye.top<$.bottom-4)for(let nt of Ce.dataset.pdfSegments.split("|"))X.add(nt)}let ae=[...X];ar(Ce=>Ce.join("|")===ae.join("|")?Ce:ae);let Q=mn.current;ae.length&&(!Q||Q.page!==ge.current||!X.has(Q.id)&&he.current==="source")&&Gt(ae[0])}zt(()=>{for(let m of I.current.values())for(let R of m.querySelectorAll("[data-pdf-segments]"))Ke.current&&Number(m.dataset.page)===Mr?.page&&R.dataset.pdfSegments.split("|").includes(Mr.id)?R.dataset.pdfLinked="true":delete R.dataset.pdfLinked},[Mr,nn,Ht,T,W.preferences.linked]),zt(()=>{if(pe!=="ready")return;let m=requestAnimationFrame(pr);return()=>cancelAnimationFrame(m)},[Ne,pe,Ht,T]),zt(()=>{if(!e||!T||W.paused||W.preferences.prefetch===!1||pe!=="ready"||!nn[Ne]||Ne>=ve)return;let m=!1,R=te.current,$=Ne+1,X=setTimeout(async()=>{if(!(h.current>0))try{let ae=await oe.current?.getPage($);if(!ae||m)return;let Q=await ae.getTextContent();if(m||R!==te.current)return;st($,Qi(Q.items,$,ae.getViewport({scale:1}).width))}catch{}},850);return()=>{m=!0,clearTimeout(X)}},[e,Ne,ve,pe,T,W.paused,W.preferences.prefetch,nn]),ut.current=!!s,ue.current=Et,fe.current=de,Te.current=De,ie.current=_t,Ae.current=At,Ue.current=ve,kt&&(L.current=kt);function ir(m){let R=F.current.get(m);return R||L.current}function mt(m){return Ga(ir(m),Ae.current?"page":ue.current,fe.current,Te.current,ie.current)}function an(m){return mt(m).pageScale}function Nn(m){let R=b.current.get(m);return R||(R={page:null,token:0,wantRender:!1,rendered:!1,rendering:!1,renderTask:null,textLayer:null,textContent:null,grouped:null,lastRenderScale:null,lastRasterScale:0,textLayerReady:!1},b.current.set(m,R)),R}function Cn(m,R){yr($=>{if(R)return $[m]?$:{...$,[m]:!0};if(!$[m])return $;let X={...$};return delete X[m],X})}function wi(m,R,$){if(!(R>0)||!($>0))return!1;let X=F.current.get(m);return X&&Math.abs(X.width-R)<.05&&Math.abs(X.height-$)<.05?!1:(!ce.current&&!S.current?.paged&&(ce.current={anchor:bn(),revision:se.current}),F.current.set(m,{width:R,height:$}),Wt(ae=>({...ae,[m]:{width:R,height:$}})),sn(),!0)}function to(){if(S.current?.paged)return;let m=E.current;if(!m)return;let R=m.querySelector(".dshr-pdf-content");R&&J.current&&(J.current.paddingTop=Number.parseFloat(getComputedStyle(R).paddingTop)||0)}function sn(){k.current||(k.current=requestAnimationFrame(()=>{k.current=0,to()}))}function fr(m){if(!Number.isFinite(m)||m===ge.current||(S.current?.paged&&b.current.get(ge.current)?.textLayer?.cancel(),ge.current=m,pn(m),he.current="source",!et.current))return;let R=S.current&&S.current.onPageChange;R&&R(m)}function la(){if(S.current?.paged||!et.current)return;let m=E.current;if(!m)return;let R=J.current;if(!R?.count)return;let $=m.scrollTop+Fr(m.clientHeight*.28,48,240);fr(R.pageAt($))}function bn(){if(S.current?.paged||!E.current||!J.current?.count)return null;let m=E.current.scrollTop,R=J.current.entryAt(m+1);return{page:R.page,ratio:Fr((m-R.top)/R.height,0,1)}}function _i(m){!m||S.current?.paged||!E.current||!J.current?.count||(E.current.scrollTop=Math.max(0,J.current.top(m.page)+m.ratio*J.current.height(m.page)))}function _o(m){requestAnimationFrame(()=>{requestAnimationFrame(()=>{O.current||m()})})}function xn(m){if(!ut.current||ne.current.has(m))return;let R=z.current.get(m);if(!R||(ne.current.add(m),!R.text))return;let $=S.current&&S.current.onPageText;$&&$(m,{text:R.text,segments:R.segments.map(X=>({src:X.src}))})}function ki(){B.current.forEach(m=>xn(m))}function sr(m,R,$){return!O.current&&$===te.current&&R===m.token&&m.wantRender}async function Ti(m){let R=oe.current,$=re.current,X=I.current.get(m);if(!R||!$||!X)return;let ae=te.current,Q=Nn(m),Ce=Q.token+=1;if(Q.renderTask){try{Q.renderTask.cancel()}catch{}Q.renderTask=null}if(Q.textLayer){try{Q.textLayer.cancel()}catch{}Q.textLayer=null}let Ye=X.querySelector("canvas.dshr-pdf-canvas"),nt=X.querySelector(".dshr-pdf-text-layer");if(!(!Ye||!nt)){Q.rendering=!0,Q.renderFailed=!1;try{let We=Q.page;if(!We){if(We=await R.getPage(m),!sr(Q,Ce,ae))return;Q.page=We}let bt=We.getViewport({scale:1}),Tt=ir(m);(Math.abs(bt.width-Tt.width)>.05||Math.abs(bt.height-Tt.height)>.05)&&wi(m,bt.width,bt.height);let pt=mt(m),Eo=ir(m),Ao=()=>S.current?.paged?m===ge.current:B.current.has(m),Ci=Bo(pt.pageScale,Eo),Rn=!Q.rendered&&K.current.get(m);Rn&&(Ye.width=Rn.bitmap.width,Ye.height=Rn.bitmap.height,Ye.getContext("2d",{alpha:!1}).drawImage(Rn.bitmap,0,0),Q.rendered=!0,Q.lastRenderScale=Rn.scale,Q.lastRasterScale=Rn.rasterScale,X.dataset.pdfQuality=Rn.rasterScale>=Ci-.002?"full":"preview",C.current&&(C.current.dataset.pdfCacheHits=String((Number(C.current.dataset.pdfCacheHits)||0)+1)),Cn(m,!0));let Au=Q.lastRenderScale===null||Math.abs(Q.lastRenderScale-pt.pageScale)>=.002,No=Ao()?Ci:Math.min(Bo(pt.pageScale,Eo,2e6),pt.pageScale);if(!Q.rendered||Au||Q.lastRasterScale<No-.002){let gr=Math.min(No,pt.pageScale),ha=!Q.rendered&&gr<No-.002?[gr,No]:[No];for(let Mn=0;Mn<ha.length;Mn++){if(Mn&&(await new Promise(wr=>setTimeout(wr,32)),!sr(Q,Ce,ae)||!Ao()))return;let Wr=ha[Mn],vn=We.getViewport({scale:Wr}),Pr=document.createElement("canvas");Pr.width=Math.max(1,Math.floor(vn.width)),Pr.height=Math.max(1,Math.floor(vn.height));try{let wr=We.render({canvas:Pr,viewport:vn,intent:"display",background:"#ffffff"});wr.onContinue=Xt=>setTimeout(()=>{sr(Q,Ce,ae)?Xt():wr.cancel()},Ao()?0:16),Q.renderTask=wr;try{await wr.promise}finally{Q.renderTask===wr&&(Q.renderTask=null)}if(!sr(Q,Ce,ae))return;if(C.current){let Xt=wr.isWorkerRendering?"pdfWorkerRenders":"pdfMainRenders";C.current.dataset[Xt]=String((Number(C.current.dataset[Xt])||0)+1),C.current.dataset.pdfRenderer=wr.isWorkerRendering?"worker":"main"}Ye.width=Pr.width,Ye.height=Pr.height;let ua=Ye.getContext("2d",{alpha:!1});if(!ua)throw new Error("\u65E0\u6CD5\u521B\u5EFA PDF \u753B\u5E03\u4E0A\u4E0B\u6587");if(ua.drawImage(Pr,0,0),Q.lastRenderScale=pt.pageScale,Q.lastRasterScale=Wr,Q.rendered=!0,X.dataset.pdfQuality=Wr>=Ci-.002?"full":"preview",Cn(m,!0),typeof createImageBitmap=="function")try{let Xt=await createImageBitmap(Pr);if(!sr(Q,Ce,ae)){Xt.close();return}K.current.set(m,{bitmap:Xt,scale:pt.pageScale,rasterScale:Wr}),C.current&&(C.current.dataset.pdfCacheBytes=String(K.current.bytes))}catch{}}finally{Pr.width=0,Pr.height=0}}}if(S.current?.paged?m!==ge.current:!B.current.has(m))return;try{let gr=Q.textContent;if(!gr){if(gr=await We.getTextContent(),!sr(Q,Ce,ae))return;Q.textContent=gr}if(!Ao())return;Q.grouped||(Q.grouped=Qi(gr.items,m,bt.width),st(m,Q.grouped));let ha=We.getViewport({scale:pt.pageScale}),Mn=gr.items.length>os,Wr=Mn?nt.cloneNode(!1):nt;Wr.replaceChildren();let vn=new $.TextLayer({textContentSource:Hp(gr),container:Wr,viewport:ha});Q.textLayer=vn;try{await vn.render()}finally{Q.textLayer===vn&&(Q.textLayer=null)}if(!sr(Q,Ce,ae)||!Ao())return;if(Mn){let Xt=document.createDocumentFragment();for(;Wr.firstChild;)Xt.append(Wr.firstChild);nt.style.cssText=Wr.style.cssText,nt.replaceChildren(Xt)}Q.textLayerReady=!0;let Pr=vn.textDivs||[],wr=new Map,ua=0;gr.items.forEach((Xt,Ii)=>{typeof Xt.str=="string"&&wr.set(Ii,Pr[ua++])});for(let Xt of Q.grouped.segments)for(let Ii of Xt.itemIndices||[]){let Co=wr.get(Ii);if(!Co)continue;let pa=new Set((Co.dataset.pdfSegments||"").split("|").filter(Boolean));pa.add(Xt.id),Co.dataset.pdfSegments=[...pa].join("|"),Co.dataset.pdfSegment=[...pa][0],Ke.current&&mn.current?.page===m&&pa.has(mn.current.id)&&(Co.dataset.pdfLinked="true")}pr()}catch(gr){Zc(gr)||console.warn("[dsh-reader] PDF \u6587\u672C\u5C42\u6E32\u67D3\u5931\u8D25",gr)}if(!sr(Q,Ce,ae))return;B.current.has(m)&&xn(m)}catch(We){Zc(We)||(Q.renderFailed=!0,console.warn(`[dsh-reader] \u7B2C ${m} \u9875\u6E32\u67D3\u5931\u8D25`,We))}finally{Q.rendering=!1}}}function ca(){if(!O.current)for(;h.current<zp&&Oe.current.length>0;){Oe.current.sort((Ce,Ye)=>Math.abs(Ce.pageNumber-ge.current)-Math.abs(Ye.pageNumber-ge.current));let m=Oe.current[0],R=b.current.get(ge.current);if(m.pageNumber!==ge.current&&(!R?.rendered||R.rendering))break;let $=Oe.current.shift();ft.current.delete($.pageNumber);let X=b.current.get($.pageNumber);if(!X||!X.wantRender||X.rendering||!I.current.has($.pageNumber))continue;h.current+=1;let ae=te.current,Q=X.token+1;Ti($.pageNumber).catch(()=>{}).finally(()=>{if(ae===te.current){if(h.current=Math.max(0,h.current-1),X.wantRender&&I.current.has($.pageNumber)){let Ce=mt($.pageNumber),nt=(S.current?.paged?$.pageNumber===ge.current:B.current.has($.pageNumber))&&X.rendered&&!X.renderFailed&&X.lastRasterScale<Bo(Ce.pageScale,ir($.pageNumber))-.002;(X.token!==Q||nt||X.rendered&&Math.abs((X.lastRenderScale||0)-Ce.pageScale)>.002)&&In($.pageNumber,{front:!0})}ca()}})}}function In(m,{front:R=!1}={}){if(!I.current.has(m))return;let $=Nn(m);if($.wantRender=!0,R&&m===ge.current&&!$.rendered)for(let[ae,Q]of b.current)ae!==m&&Q.renderTask&&!B.current.has(ae)&&(Q.token++,Q.renderTask.cancel());if($.rendering)return;if(ft.current.has(m)){R&&Oe.current.sort((ae,Q)=>(Q.pageNumber===m)-(ae.pageNumber===m));return}if($.rendered&&$.lastRenderScale!==null){let ae=mt(m);if(($.textLayerReady||(S.current?.paged?m!==ge.current:!B.current.has(m)))&&Math.abs($.lastRenderScale-ae.pageScale)<.002&&$.lastRasterScale>=(m===ge.current?Bo(ae.pageScale,ir(m)):Math.min(Bo(ae.pageScale,ir(m),2e6),ae.pageScale))-.002)return}ft.current.add(m);let X={pageNumber:m};R?Oe.current.unshift(X):Oe.current.push(X),ca()}function ko(m){let R=b.current.get(m);if(!R)return;if(R.wantRender=!1,R.token+=1,R.renderTask){try{R.renderTask.cancel()}catch{}R.renderTask=null}if(R.textLayer){try{R.textLayer.cancel()}catch{}R.textLayer=null}let $=I.current.get(m);if($){let X=$.querySelector("canvas.dshr-pdf-canvas");X&&(X.width=0,X.height=0);let ae=$.querySelector(".dshr-pdf-text-layer");ae&&ae.replaceChildren()}if(R.page){try{R.page.cleanup()}catch{}R.page=null}R.textContent=null,R.grouped=null,z.current.delete(m),R.lastRenderScale=null,R.lastRasterScale=0,R.textLayerReady=!1,R.rendered&&(R.rendered=!1,Cn(m,!1)),Oe.current.length>0&&(Oe.current=Oe.current.filter(X=>X.pageNumber!==m)),ft.current.delete(m),b.current.delete(m)}function da(){for(let[m,R]of b.current){if(!R.rendered||!R.wantRender||R.rendering)continue;let $=mt(m);(!R.textLayerReady||R.lastRenderScale===null||Math.abs(R.lastRenderScale-$.pageScale)>.002)&&In(m)}}function To(m=Bp){c.current&&clearTimeout(c.current),c.current=setTimeout(()=>{c.current=0,da()},m)}function A(m){se.current++,ce.current=null,m=Fr(Math.round(Number(m)||1),1,Ue.current||1);let R=E.current;if(S.current?.paged){fr(m);return}if(!R||!J.current?.count){fr(m);return}let $=J.current.top(m)-10;typeof R.scrollTo=="function"?R.scrollTo({top:Math.max(0,$),behavior:"auto"}):R.scrollTop=Math.max(0,$),fr(m)}function M(m){let R=E.current;R&&R.scrollBy({top:m*R.clientHeight*.92,behavior:"auto"})}function Z(m){!m||S.current?.paged||(ce.current={anchor:m,revision:se.current})}function qe(m){let R=bn(),$=ue.current==="fit"?an(ge.current):fe.current,X=Fr($*m,rs,ns);Ae.current=!1,it(!1),ue.current="custom",fe.current=X,ee("custom"),Re(X),Z(R)}function Ee(){let m=bn();Ae.current=!1,it(!1),ue.current="fit",ee("fit"),Z(m)}function Xe(){let m=bn(),R=!Ae.current;Ae.current=R,it(R),ue.current="fit",ee("fit"),Z(m),sn()}zt(()=>{let m=E.current;if(!m||pe!=="ready")return;let R=$=>{let X=$.detail<0?-1:1,ae=Fr(ge.current+X,1,Ue.current);ae!==ge.current&&A(ae)};return m.addEventListener("dshr-pdf-page-turn",R),()=>m.removeEventListener("dshr-pdf-page-turn",R)},[pe,ve,Ne]);function lt(m,R){let $=z.current.get(m);if(!$||!$.text)return;let X=$.text,ae=R.replace(/\s+/g," ").trim(),Q=ae?X.indexOf(ae):-1,Ce=$p,Ye=0;if(Q>=0){let bt=Math.max(80,Math.floor((Ce-Math.min(ae.length,Ce-160))/2));Ye=Math.max(0,Q-bt)}let nt=Math.min(X.length,Ye+Ce);return nt-Ye<Ce&&(Ye=Math.max(0,nt-Ce)),X.slice(Ye,nt).trim()||void 0}function $t(){if(ye.current="",!xe.current)return;xe.current=!1;let m=S.current&&S.current.onSelection;m&&m(null)}function qt(){let m=globalThis.getSelection?globalThis.getSelection():null;if(!m||m.isCollapsed||m.rangeCount===0){$t();return}let $=C.current;if(!$)return;let X=m.getRangeAt(0);if(!$.querySelector(".dshr-pdf-content")?.contains(X.commonAncestorContainer)){$t();return}let ae=m.toString().replace(/\s+/g," ").trim();if(!ae){$t();return}let Q=Jc(X.startContainer)||Jc(X.endContainer)||ge.current,Ce=Up(m);if(!Ce)return;let Ye=[Q,ae,Math.round(Ce.left),Math.round(Ce.top),Math.round(Ce.width),Math.round(Ce.height)].join("|");if(Ye===ye.current)return;ye.current=Ye;let nt={text:ae,page:Q,rect:Ce},We=I.current.get(Q);if(We){let pt=Ac(X,We);pt.length>0&&(nt.pageRects=pt)}let bt=lt(Q,ae);bt&&(nt.context=bt),xe.current=!0;let Tt=S.current&&S.current.onSelection;Tt&&Tt(nt)}let rt=Vc((m,R)=>{R?D.current.set(m,R):D.current.delete(m)},[]),So=Vc((m,R)=>{if(R){I.current.set(m,R);for(let X of Y.current)X.observe(R);let $=b.current.get(m);$&&($.rendered=!1,$.textLayerReady=!1,$.lastRenderScale=null,Cn(m,!1))}else{let $=I.current.get(m);if($)for(let X of Y.current)X.unobserve($);B.current.delete(m),ko(m),I.current.delete(m)}},[]);function gu(m){let R=m.target;if(R&&typeof R.closest=="function"&&R.closest('button, a, input, textarea, select, [role="button"]'))return;let $=C.current;$&&typeof $.focus=="function"&&$.focus({preventScroll:!0})}function mu(m){if(m.defaultPrevented||m.altKey||S.current?.paged)return;let R=m.target;if(R?.closest?.(".dshr-pdf-translation-panel, .dshr-topbar--pdf, .dshr-immersive-controls, .dshr-ai, .dshr-anno-panel"))return;let $=R&&R.tagName?R.tagName.toLowerCase():"";if($==="input"||$==="textarea"||$==="select"||R&&R.isContentEditable)return;let X=E.current;if(!(!X||pe!=="ready"))switch(m.key){case"PageDown":m.preventDefault(),M(1);break;case"PageUp":m.preventDefault(),M(-1);break;case"Home":m.preventDefault(),X.scrollTo({top:0,behavior:"auto"}),fr(1);break;case"End":m.preventDefault(),X.scrollTo({top:X.scrollHeight,behavior:"auto"}),fr(Ue.current||1);break;default:break}}function pl(){for(let m of b.current.values()){if(m.token+=1,m.renderTask)try{m.renderTask.cancel()}catch{}if(m.textLayer)try{m.textLayer.cancel()}catch{}if(m.page)try{m.page.cleanup()}catch{}}b.current.clear()}zt(()=>{let m=!1,R=new AbortController,$;if(te.current+=1,O.current=!1,U.current?.close(),U.current=null,oe.current=null,K.current.clear(),C.current){for(let ae of["pdfReadBytes","pdfSourceBytes","pdfRangeReads","pdfCacheHits","pdfCacheBytes","pdfWorkerRenders","pdfMainRenders"])C.current.dataset[ae]="0";delete C.current.dataset.pdfRenderer}pl(),D.current.clear(),I.current.clear(),F.current.clear(),z.current.clear(),B.current.clear(),ne.current.clear(),Oe.current=[],ft.current.clear(),h.current=0,ce.current=null,se.current++,Je.current=!1,ze("loading"),Le(null),at(null),wt(0),Wt({}),Ot(null),yr({}),fn(""),Lt(!1),pn(1),jt({}),En(null),ar([]),ge.current=0,et.current=!1;let X=typeof Blob<"u"&&t instanceof Blob;if(!X&&!(t instanceof ArrayBuffer)&&!ArrayBuffer.isView(t)||(X?t.size===0:t.byteLength===0)){ze("error"),Le("\u6CA1\u6709\u53EF\u663E\u793A\u7684 PDF \u6570\u636E\u3002");return}return(async()=>{try{if($=await Ba(t,{signal:R.signal,onRead:pt=>{!m&&C.current&&(C.current.dataset.pdfReadBytes=String(pt.bytes),C.current.dataset.pdfSourceBytes=String(pt.total),C.current.dataset.pdfRangeReads=String(pt.reads))},onProgress:pt=>{!m&&pt?.total>0&&at(Math.max(1,Math.min(100,Math.round(pt.loaded/pt.total*100))))},onError:pt=>{m||(ze("error"),Le(Qc(pt)))}}),m){$.close();return}U.current=$;let{engine:ae,pdf:Q}=$;re.current=ae,oe.current=Q;let Ce=await Q.getPage(1);if(m)return;let Ye=Ce.getViewport({scale:1}),nt={width:Ye.width,height:Ye.height};L.current=nt;try{Ce.cleanup()}catch{}let We=Fr(Number.parseInt(a,10)||1,1,Q.numPages),bt=null;if(We!==1)try{let pt=await Q.getPage(We),Eo=pt.getViewport({scale:1});bt={width:Eo.width,height:Eo.height},F.current.set(We,bt),pt.cleanup()}catch{}if(m)return;Ot(nt),Wt(bt?{[We]:bt}:{}),wt(Q.numPages),Ue.current=Q.numPages,at(null),ze("ready"),pn(We),ge.current=We;let Tt=S.current&&S.current.onReady;Tt&&Tt({pageCount:Q.numPages})}catch(ae){if(m)return;$?.close(),U.current=null,oe.current=null,at(null),ze("error"),Le(Qc(ae))}})(),()=>{if(m=!0,R.abort(),O.current=!0,te.current+=1,pl(),$?.close(),U.current=null,oe.current=null,K.current.clear(),Oe.current=[],ft.current.clear(),c.current&&(clearTimeout(c.current),c.current=0),k.current&&(cancelAnimationFrame(k.current),k.current=0),x.current&&(cancelAnimationFrame(x.current),x.current=0),xe.current){xe.current=!1;let ae=S.current&&S.current.onSelection;ae&&ae(null)}}},[t,gt]),zt(()=>{let m=()=>qt(),R=()=>qt(),$=()=>{$e.current||($e.current=requestAnimationFrame(()=>{$e.current=0;let X=globalThis.getSelection?globalThis.getSelection():null;(!X||X.isCollapsed||X.rangeCount===0)&&$t()}))};return document.addEventListener("mouseup",m,!0),document.addEventListener("keyup",R,!0),document.addEventListener("selectionchange",$),()=>{document.removeEventListener("mouseup",m,!0),document.removeEventListener("keyup",R,!0),document.removeEventListener("selectionchange",$),$e.current&&(cancelAnimationFrame($e.current),$e.current=0)}},[]),es(()=>{if(pe!=="ready")return;let m=E.current;if(!m)return;let R=ed(m);R>0&&(Te.current=R,tt(R)),m.clientHeight>0&&(ie.current=m.clientHeight,ur(m.clientHeight))},[pe,ve,w]),zt(()=>{w&&it(!0)},[w]),zt(()=>{if(!w)return;let m=E.current;m&&(m.scrollTop=0)},[w]),zt(()=>{if(!w||pe!=="ready"||ve<=0)return;B.current=new Set([Ne]),xn(Ne);let m=[Ne];for(let X=1;X<=2;X+=1)m.push(Ne+X,Ne-X);let $=m.filter((X,ae,Q)=>X>=1&&X<=ve&&Q.indexOf(X)===ae).map((X,ae)=>window.setTimeout(()=>In(X,{front:ae===0}),ae===0?0:ae===1?30:1e3+(ae-2)*120));return()=>{for(let X of $)window.clearTimeout(X)}},[w,pe,Ne,ve,At,Et,de,De,_t]),zt(()=>{if(!w||pe!=="ready")return;let m=E.current;m&&m.dispatchEvent(new CustomEvent("dshr-pdf-page-state",{detail:{page:Ne,pages:ve}}))},[w,pe,Ne,ve]),zt(()=>{pe==="ready"&&(sn(),To())},[At,_t,pe]),zt(()=>{if(pe!=="ready")return;let m=E.current;if(!m)return;let R=!1,$=null,X=null,ae=()=>{let nt=ed(m),We=m.clientHeight,bt=nt>0&&Math.abs(nt-Te.current)>=.5,Tt=We>0&&Math.abs(We-ie.current)>=.5;if(!bt&&!Tt)return;let pt=bt||Tt&&Ae.current?bn():null;bt&&(Te.current=nt,tt(nt)),Tt&&(ie.current=We,ur(We)),pt&&!S.current?.paged&&Z(pt)},Q=()=>{x.current||(se.current++,ce.current=null,x.current=requestAnimationFrame(()=>{x.current=0,la(),pr()}))},Ce=null;typeof ResizeObserver=="function"&&(Ce=new ResizeObserver(()=>{R||ae()}),Ce.observe(m)),m.addEventListener("scroll",Q,{passive:!0}),!w&&typeof IntersectionObserver=="function"&&($=new IntersectionObserver(We=>{for(let bt of We){let Tt=Number(bt.target.getAttribute("data-page"));Number.isFinite(Tt)&&(bt.isIntersecting?(B.current.add(Tt),In(Tt,{front:!0}),xn(Tt)):B.current.delete(Tt))}},{root:m,rootMargin:"0px",threshold:0}),X=new IntersectionObserver(We=>{for(let bt of We){let Tt=Number(bt.target.getAttribute("data-page"));Number.isFinite(Tt)&&(bt.isIntersecting?In(Tt):S.current?.paged||ko(Tt))}},{root:m,rootMargin:Dp,threshold:0}),Y.current=[$,X],_o(()=>{if(!R)for(let We of I.current.values())$.observe(We),X.observe(We)}));let Ye=requestAnimationFrame(()=>{R||(to(),la())});return()=>{R=!0,cancelAnimationFrame(Ye),Ce&&Ce.disconnect(),$&&$.disconnect(),X&&X.disconnect(),Y.current=[],m.removeEventListener("scroll",Q)}},[pe,ve,w]),zt(()=>{if(pe!=="ready"||ve<=0||Je.current)return;Je.current=!0;let m=Fr(Number.parseInt(a,10)||1,1,ve),R=setTimeout(()=>{et.current=!0,E.current&&(to(),A(m,"auto"))},0);return()=>clearTimeout(R)},[pe,ve]);let fl=Se(w);es(()=>{fl.current!==w&&(fl.current=w,pe==="ready"&&(w?E.current.scrollTop=0:A(ge.current,"auto")))},[w,pe]),zt(()=>{pe==="ready"&&(sn(),To())},[pe,Et,de,De,hr]),zt(()=>{pe==="ready"&&sn()},[pe,P]),zt(()=>{ut.current=!!s,s&&pe==="ready"&&ki()},[s,pe]);let Si=ts(()=>{if(ve<=0)return[];let m=w?2:Math.min(16,Math.max(3,Math.ceil(_t/Math.max(1,Math.min(Ge.defaultHeight,...Ge.heights.values())))+1)),R=Math.max(1,Ne-m),$=Math.min(ve,Ne+m);return Array.from({length:$-R+1},(X,ae)=>R+ae)},[w,Ne,ve,Ge,_t]),gl=Si[0]||1,ml=Si.at(-1)||0,bu=ts(()=>{let m=new Map;for(let R of _||[]){if(!R||R.kind!=="pdf"||!Number.isFinite(R.page))continue;let $=m.get(R.page)||[];$.push(R),m.set(R.page,$)}return m},[_]);zt(()=>{if(!y?.page||pe!=="ready")return;let m=setTimeout(()=>{A(Fr(Number(y.page)||1,1,Ue.current||1),"smooth")},80);return()=>clearTimeout(m)},[y,pe]);let xu=(Et==="fit"?an(Ne):de)<ns-.001,vu=(Et==="fit"?an(Ne):de)>rs+.001;function yu(m){let R=m.currentTarget;fn(String(Ne)),Lt(!0),requestAnimationFrame(()=>{R&&typeof R.select=="function"&&R.select()})}function wu(m){let R=m.target.value.replace(/[^\d]/g,"").slice(0,6);fn(R)}function _u(){if(Me.current){Me.current=!1,Lt(!1);return}let m=Number.parseInt(or,10);Number.isFinite(m)&&Ue.current>0&&A(Fr(m,1,Ue.current),"auto"),Lt(!1)}function ku(){gn&&_u()}function Tu(m){m.key==="Enter"?(m.preventDefault(),m.currentTarget.blur()):m.key==="Escape"&&(m.preventDefault(),Me.current=!0,Lt(!1),m.currentTarget.blur())}let Su=gn?or:String(Ne),Ei=n?"dshr-immersive-btn":"dshr-pdf-tbtn",Ai=n||o,bl=`${Math.round((Ai?an(Ne):de)*100)}%`,xl=(0,_e.jsx)("button",{type:"button",className:Ei,title:"\u7F29\u5C0F","aria-label":"\u7F29\u5C0F",disabled:!vu,onClick:()=>qe(1/Kc),children:"\u2212"}),vl=(0,_e.jsx)("span",{className:"dshr-pdf-zoom-percent","data-scale":At?"page":Et==="fit"?"fit":de,title:At?"\u5F53\u524D\u4E3A\u6574\u9875\u663E\u793A":Et==="fit"?"\u5F53\u524D\u4E3A\u9002\u5408\u5BBD\u5EA6":"\u5F53\u524D\u7F29\u653E\u6BD4\u4F8B",children:Ai?bl:At?"\u6574\u9875":Et==="fit"?"\u9002\u5BBD":bl}),yl=(0,_e.jsx)("button",{type:"button",className:Ei,title:"\u653E\u5927","aria-label":"\u653E\u5927",disabled:!xu,onClick:()=>qe(Kc),children:"\uFF0B"}),wl=(0,_e.jsx)("button",{type:"button",className:`${Ei} dshr-pdf-tbtn-wide`,"data-active":At?"true":"false","aria-pressed":At,title:At?"\u5F53\u524D\u6574\u9875\u663E\u793A\uFF1B\u70B9\u51FB\u56DE\u5230\u9002\u5408\u5BBD\u5EA6":"\u70B9\u51FB\u5207\u6362\u4E3A\u6574\u9875\u663E\u793A\uFF1B\u518D\u6B21\u70B9\u51FB\u56DE\u5230\u9002\u5408\u5BBD\u5EA6",onClick:Xe,children:Ai||At?"\u6574\u9875":"\u9002\u5BBD"}),_l=(0,_e.jsxs)("div",{className:"dshr-pdf-pager",children:[(0,_e.jsx)("input",{className:"dshr-pdf-page-input",inputMode:"numeric","aria-label":"\u9875\u7801",value:Su,onChange:wu,onFocus:yu,onBlur:ku,onKeyDown:Tu}),(0,_e.jsxs)("span",{"aria-hidden":"true",children:["/ ",ve]})]}),Ni=pe==="ready"?(0,_e.jsxs)(_e.Fragment,{children:[(0,_e.jsxs)("div",{className:"dshr-pdf-tool-group",role:"group","aria-label":"PDF \u7F29\u653E",children:[xl,vl,yl,wl]}),n?null:(0,_e.jsx)("span",{className:"dshr-pdf-toolbar-sep","aria-hidden":"true"}),_l]}):null,Eu=o&&pe==="ready"?{iconTools:(0,_e.jsxs)("div",{className:"dshr-pdf-tool-group",role:"group","aria-label":"PDF \u7F29\u653E",children:[xl,vl,yl]}),textTools:(0,_e.jsxs)("div",{className:"dshr-pdf-tool-group",role:"group","aria-label":"PDF \u9875\u7801\u4E0E\u89C6\u56FE",children:[_l,wl]})}:void 0;return(0,_e.jsxs)("div",{className:"dshr-pdf-root",ref:C,tabIndex:0,"data-dshr-pdf":"",role:"region","aria-label":r?`PDF \u9605\u8BFB\u5668\uFF1A${r}`:"PDF \u9605\u8BFB\u5668",onKeyDown:mu,children:[o?o(Eu):n?n(Ni):Ni&&(0,_e.jsxs)("div",{className:"dshr-pdf-toolbar",role:"toolbar","aria-label":"PDF \u9605\u8BFB\u5DE5\u5177\u680F",children:[(0,_e.jsx)("span",{className:"dshr-pdf-title",title:r||void 0,children:r}),(0,_e.jsx)("span",{className:"dshr-pdf-toolbar-spacer"}),Ni]}),(0,_e.jsxs)("div",{className:"dshr-pdf-body",children:[(0,_e.jsx)("div",{className:"dshr-pdf-area",children:(0,_e.jsxs)("div",{className:"dshr-pdf-workspace",children:[(0,_e.jsx)("div",{className:"dshr-pdf-scroll",ref:E,"data-pdf-page":w?Ne:void 0,"data-pdf-pages":w?ve:void 0,onMouseDown:gu,onPointerOver:m=>{if(!Ke.current||m.buttons)return;let R=m.target.closest?.("[data-pdf-segment]"),$=Number(R?.closest(".dshr-pdf-frame")?.dataset.page);R&&$&&Gt(R.dataset.pdfSegment,{origin:"source"},$)},children:pe==="ready"?(0,_e.jsxs)("div",{className:"dshr-pdf-content",children:[!w&&gl>1?(0,_e.jsx)("div",{className:"dshr-pdf-spacer","aria-hidden":"true",style:{height:Ge.top(gl)-Ge.paddingTop}}):null,Si.map(m=>(0,_e.jsx)(Wp,{pageNumber:m,dim:ir(m),mode:At?"page":Et,scale:de,viewportWidth:De,viewportHeight:_t,active:!w||m===Ne,rendered:!!nn[m],registerPageElement:rt,registerFrameElement:So,annotations:bu.get(m),onOpenAnnotation:N},m)),!w&&ml<ve?(0,_e.jsx)("div",{className:"dshr-pdf-spacer","aria-hidden":"true",style:{height:Ge.top(ve+1)-Ge.top(ml+1)}}):null]}):(0,_e.jsx)("div",{className:"dshr-pdf-status",role:pe==="error"?"alert":"status",children:pe==="error"?(0,_e.jsxs)(_e.Fragment,{children:[(0,_e.jsx)("p",{className:"dshr-pdf-status-title dshr-pdf-status-error",children:"PDF \u52A0\u8F7D\u5931\u8D25"}),(0,_e.jsx)("p",{className:"dshr-pdf-status-detail",children:je}),(0,_e.jsx)("button",{type:"button",className:"dshr-pdf-status-retry",onClick:()=>Jn(m=>m+1),children:"\u91CD\u65B0\u52A0\u8F7D"})]}):(0,_e.jsxs)(_e.Fragment,{children:[(0,_e.jsx)("span",{className:"dshr-pdf-status-spinner","aria-hidden":"true"}),(0,_e.jsx)("p",{className:"dshr-pdf-status-title",children:"\u6B63\u5728\u52A0\u8F7D PDF\u2026"}),vt!==null?(0,_e.jsxs)("p",{className:"dshr-pdf-status-progress",children:[vt,"%"]}):null]})})}),T?(0,_e.jsx)(jc,{page:Ne,source:Ht[Ne],rows:e?W.pages[Ne]||[]:(Ht[Ne]?.segments||[]).map((m,R)=>({...m,...l?.[Ne]?.segments?.[R]||{},status:l?.[Ne]?.status||"queued",error:l?.[Ne]?.error})),activeId:Mr?.page===Ne?Mr.id:null,originRef:he,translation:e?W:{...W,retry:m=>{ne.current.delete(m),p?.(m),xn(m)}},onActivate:(m,R)=>Gt(m,R,Ne),onClose:()=>{An(!0),v?.()}}):null]})}),i]})]})}rd.displayName="PdfViewer";var nd=rd;var zr=Mt(require("react"),1);var y0=require("react"),Bt=require("react/jsx-runtime");function qa(t,e="i"){let r=[],n=String(t??""),o=/(\*\*[^*]+\*\*|__[^_]+__|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/gu,i=0,a=0;for(let s of n.matchAll(o)){s.index>i&&r.push(n.slice(i,s.index));let l=s[0],d=`${e}-${a++}`;if(l.startsWith("**")||l.startsWith("__"))r.push((0,Bt.jsx)("strong",{children:l.slice(2,-2)},d));else if(l.startsWith("`"))r.push((0,Bt.jsx)("code",{children:l.slice(1,-1)},d));else{let f=/^\[([^\]]+)\]\(([^)\s]+)\)$/u.exec(l);f&&/^https?:\/\//iu.test(f[2])?r.push((0,Bt.jsx)("a",{href:f[2],target:"_blank",rel:"noreferrer noopener",children:f[1]},d)):r.push(l)}i=s.index+l.length}return i<n.length&&r.push(n.slice(i)),r}function od({text:t}){let e=String(t??"").replace(/\r\n/gu,`
`).split(`
`),r=[],n=[],o=[],i=[],a=null,s=0,l=()=>{if(n.length===0)return;let u=n.join(" ");r.push((0,Bt.jsx)("p",{children:qa(u,`p${s}`)},`p-${s++}`)),n=[]},d=()=>{o.length!==0&&(r.push((0,Bt.jsx)("ul",{children:o.map((u,p)=>(0,Bt.jsx)("li",{children:qa(u,`l${s}-${p}`)},`li-${s}-${p}`))},`ul-${s++}`)),o=[])},f=()=>{i.length!==0&&(r.push((0,Bt.jsx)("blockquote",{children:i.map((u,p)=>(0,Bt.jsx)("p",{children:qa(u,`q${s}-${p}`)},`bqp-${s}-${p}`))},`bq-${s++}`)),i=[])},g=()=>{l(),d(),f()};for(let u of e){let p=u.trimEnd();if(p.trim().startsWith("```")){a===null?(g(),a=[]):(r.push((0,Bt.jsx)("pre",{children:(0,Bt.jsx)("code",{children:a.join(`
`)})},`pre-${s++}`)),a=null);continue}if(a!==null){a.push(u);continue}if(p.trim()===""){g();continue}let _=/^(#{1,4})\s+(.*)$/u.exec(p);if(_){g();let v=`h${Math.min(4,_[1].length)}`;r.push((0,Bt.jsx)(v,{children:qa(_[2],`h${s}`)},`h-${s++}`));continue}let N=/^\s*>\s?(.*)$/u.exec(p);if(N){l(),d(),i.push(N[1]);continue}let y=/^\s*[-*+]\s+(.*)$/u.exec(p);if(y){g(),o.push(y[1]);continue}let P=/^\s*\d+[.)]\s+(.*)$/u.exec(p);if(P){g(),o.push(P[1]);continue}if(/^\s*([-*_])(?:\s*\1){2,}\s*$/u.test(p)){g(),r.push((0,Bt.jsx)("hr",{},`hr-${s++}`));continue}d(),f(),n.push(p)}return a!==null&&r.push((0,Bt.jsx)("pre",{children:(0,Bt.jsx)("code",{children:a.join(`
`)})},`pre-${s++}`)),g(),(0,Bt.jsx)(Bt.Fragment,{children:r})}var He=require("react/jsx-runtime"),jp=["\u5E2E\u6211\u68B3\u7406\u8FD9\u6BB5\u8BDD\u7684\u8BBA\u8BC1\u7ED3\u6784","\u89E3\u91CA\u5176\u4E2D\u7684\u4E13\u4E1A\u672F\u8BED\u548C\u80CC\u666F","\u7FFB\u8BD1\u5E76\u6307\u51FA\u5173\u952E\u8BED\u6CD5","\u8FD9\u6BB5\u548C\u6211\u7684\u7814\u7A76\u95EE\u9898\u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F"];function ad({open:t,onClose:e,seed:r,onGoogle:n,onToast:o}){let[i,a]=zr.default.useState([]),[s,l]=zr.default.useState(""),[d,f]=zr.default.useState(!1),[g,u]=zr.default.useState(""),p=zr.default.useRef(null),_=zr.default.useRef(null),N=r?.id??"",y=r?.text??"",P=r?.context??"",w=zr.default.useCallback(()=>{let E=_.current;E&&requestAnimationFrame(()=>{E.scrollTop=E.scrollHeight})},[]),v=zr.default.useCallback(async(E,{replace:D=!1,history:I}={})=>{let b=String(E??"").trim();if(!b||d)return;p.current?.abort();let F=new AbortController;p.current=F;let L={role:"user",content:b},B=D?[L]:[...I??i,L];a([...B,{role:"assistant",content:""}]),f(!0),u(""),w();let Y="";try{await Gi({messages:B.map(ne=>({role:ne.role,content:ne.content})),selection:y,context:P,signal:F.signal},{onDelta:ne=>{Y+=ne,a(re=>{if(re.length===0)return re;let oe=[...re],U=oe[oe.length-1];return U?.role!=="assistant"?re:(oe[oe.length-1]={...U,content:Y},oe)}),w()}}),Y.trim()||(u("AI \u6CA1\u6709\u8FD4\u56DE\u5185\u5BB9\uFF0C\u8BF7\u91CD\u8BD5\u6216\u6362\u4E00\u79CD\u95EE\u6CD5\u3002"),a(ne=>ne.filter((re,oe)=>!(oe===ne.length-1&&re.role==="assistant"&&!re.content))))}catch(ne){if(Ln(ne))return;u(ne?.message||"AI \u8BF7\u6C42\u5931\u8D25\u3002"),a(re=>{let oe=re[re.length-1];return oe?.role==="assistant"&&!oe.content?re.slice(0,-1):re})}finally{f(!1)}},[d,P,i,w,y]);if(zr.default.useEffect(()=>{if(!t||!N)return;p.current?.abort(),a([]),u(""),l("");let E="\u8BF7\u89E3\u91CA\u8FD9\u6BB5\u5185\u5BB9\u3002";a([{role:"user",content:E},{role:"assistant",content:""}]),f(!0);let D=new AbortController;p.current=D;let I="";return Gi({messages:[{role:"user",content:E}],selection:y,context:P,signal:D.signal},{onDelta:b=>{I+=b,a(F=>{if(F.length===0)return F;let L=[...F],z=L[L.length-1];return z?.role!=="assistant"?F:(L[L.length-1]={...z,content:I},L)}),w()}}).catch(b=>{Ln(b)||u(b?.message||"AI \u8BF7\u6C42\u5931\u8D25\u3002")}).finally(()=>{f(!1),I.trim()||a(b=>b.filter((F,L)=>!(L===b.length-1&&F.role==="assistant"&&!F.content)))}),()=>D.abort()},[t,N]),zr.default.useEffect(()=>{t||p.current?.abort()},[t]),!t)return null;let S=E=>{E.preventDefault();let D=s.trim();!D||d||(l(""),v(D))},C=E=>{let D=y||i.find(I=>I.role==="user")?.content||"";if(!D.trim()){o?.("\u5148\u5728\u6B63\u6587\u91CC\u9009\u4E2D\u4E00\u6BB5\u6587\u5B57\uFF0C\u518D\u641C\u7D22\u3002");return}n?.(D,E?"scholar":"web")};return(0,He.jsxs)("aside",{className:"dshr-ai","aria-label":"AI \u9605\u8BFB\u52A9\u624B",children:[(0,He.jsxs)("div",{className:"dshr-ai__head",children:[(0,He.jsx)(yn,{size:17}),(0,He.jsx)("strong",{children:"AI \u9605\u8BFB\u52A9\u624B"}),(0,He.jsx)("span",{className:"dshr-chip dshr-chip--brand",children:"DSH \u9ED8\u8BA4\u6A21\u578B"}),(0,He.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:e,"aria-label":"\u5173\u95ED AI \u9762\u677F",title:"\u5173\u95ED",children:(0,He.jsx)(_r,{size:16})})]}),(0,He.jsxs)("div",{className:"dshr-ai__body",ref:_,children:[i.length===0?(0,He.jsxs)("div",{className:"dshr-ai__welcome",children:[(0,He.jsx)("strong",{children:"\u9009\u4E2D\u6B63\u6587\u4E2D\u7684\u4EFB\u610F\u53E5\u5B50"}),"\uFF0C\u6211\u4F1A\u89E3\u91CA\u542B\u4E49\u3001\u672F\u8BED\u548C\u8BED\u6CD5\uFF1B\u4E5F\u53EF\u4EE5\u76F4\u63A5\u8FFD\u95EE\uFF0C\u6216\u8DF3\u8F6C Google / Google \u5B66\u672F\u7EE7\u7EED\u67E5\u3002",(0,He.jsx)("div",{className:"dshr-ai__suggestions",children:jp.map(E=>(0,He.jsx)("button",{type:"button",onClick:()=>{v(E)},disabled:d,children:E},E))})]}):i.map((E,D)=>(0,He.jsxs)("div",{className:`dshr-ai__msg${E.role==="user"?" dshr-ai__msg--user":""}`,children:[(0,He.jsx)("span",{className:"dshr-ai__role",children:E.role==="user"?"\u4F60":"\u9605\u8BFB\u52A9\u624B"}),E.role==="assistant"?E.content?(0,He.jsx)(od,{text:E.content}):d&&D===i.length-1?(0,He.jsxs)("span",{className:"dshr-translation__loading",children:[(0,He.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u601D\u8003\u2026"]}):null:E.content]},D)),g?(0,He.jsxs)("div",{className:"dshr-ai__error",children:[g,(0,He.jsx)("div",{style:{marginTop:6},children:(0,He.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>{v(i.find(E=>E.role==="user")?.content||"\u8BF7\u91CD\u65B0\u89E3\u91CA\u8FD9\u6BB5\u5185\u5BB9\u3002",{replace:!0,history:[]})},children:[(0,He.jsx)(Il,{size:13})," \u91CD\u65B0\u56DE\u7B54"]})})]}):null]}),(0,He.jsx)("div",{className:"dshr-ai__foot",children:(0,He.jsxs)("form",{onSubmit:S,children:[(0,He.jsx)("textarea",{className:"dshr-ai__input",placeholder:"\u8FFD\u95EE\uFF1A\u8FD9\u6BB5\u7684\u8BBA\u8BC1\u6709\u4EC0\u4E48\u95EE\u9898\uFF1F\uFF0F\u672F\u8BED\u662F\u4EC0\u4E48\u610F\u601D\uFF1F",value:s,onChange:E=>l(E.target.value),onKeyDown:E=>{E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),v(s),l(""))},disabled:d,"aria-label":"\u5411 AI \u8FFD\u95EE"}),(0,He.jsxs)("div",{className:"dshr-ai__actions",children:[(0,He.jsx)("span",{className:"dshr-ai__hint",children:"Enter \u53D1\u9001 \xB7 Shift+Enter \u6362\u884C"}),(0,He.jsxs)("div",{style:{display:"flex",gap:5},children:[(0,He.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>C(!1),title:"\u7528 Google \u641C\u7D22\u9009\u4E2D\u7684\u6587\u5B57",children:[(0,He.jsx)(ya,{size:13})," Google"]}),(0,He.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>C(!0),title:"\u7528 Google \u5B66\u672F\u641C\u7D22\u9009\u4E2D\u7684\u6587\u5B57",children:[(0,He.jsx)(wa,{size:13})," \u5B66\u672F"]}),(0,He.jsxs)("button",{type:"submit",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:d||!s.trim(),children:[d?(0,He.jsx)("span",{className:"dshr-spinner"}):(0,He.jsx)(Rl,{size:13})," \u53D1\u9001"]})]})]})]})})]})}var A0=require("react");var Ve=require("react/jsx-runtime");function id({selection:t,translation:e,onTranslate:r,onAnnotate:n,onExplain:o,onGoogle:i,onCopy:a,onClose:s,onRetry:l}){if(!t?.text?.trim())return null;let d=t.rect,g=476/2,u=typeof window<"u"?window.innerWidth:1200,p=typeof window<"u"?window.innerHeight:800,_=d?d.left+d.width/2:u/2,N=Math.max(g+10,Math.min(u-g-10,_)),y=d&&d.top>70?d.top-46:Math.min(p-190,(d?.bottom??0)+10),P=Math.min(p-180,y+42);return(0,Ve.jsxs)(Ve.Fragment,{children:[(0,Ve.jsxs)("div",{className:"dshr-selection",style:{left:N,top:Math.max(8,y)},role:"toolbar","aria-label":"\u9009\u4E2D\u6587\u5B57\u64CD\u4F5C",onMouseDown:w=>w.preventDefault(),children:[(0,Ve.jsxs)("button",{type:"button",className:"dshr-selection__btn dshr-selection__btn--accent",onClick:()=>r(t),children:[(0,Ve.jsx)(ro,{size:14})," \u7FFB\u8BD1"]}),(0,Ve.jsxs)("button",{type:"button",className:"dshr-selection__btn dshr-selection__btn--mark",onClick:()=>n(t),title:"\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u3001\u4FBF\u7B7E\u6216\u5907\u6CE8",children:[(0,Ve.jsx)(_a,{size:14})," \u6807\u8BB0"]}),(0,Ve.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>o(t),children:[(0,Ve.jsx)(yn,{size:14})," AI \u89E3\u91CA"]}),(0,Ve.jsx)("span",{className:"dshr-selection__sep"}),(0,Ve.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>i(t.text,"web"),title:"\u7528 Google \u641C\u7D22",children:[(0,Ve.jsx)(ya,{size:14})," Google"]}),(0,Ve.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>i(t.text,"scholar"),title:"\u7528 Google \u5B66\u672F\u641C\u7D22",children:[(0,Ve.jsx)(wa,{size:14})," \u5B66\u672F"]}),(0,Ve.jsx)("span",{className:"dshr-selection__sep"}),(0,Ve.jsx)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>a(t.text),title:"\u590D\u5236\u9009\u4E2D\u6587\u5B57",children:(0,Ve.jsx)(Cl,{size:14})}),(0,Ve.jsx)("button",{type:"button",className:"dshr-selection__btn",onClick:s,title:"\u5173\u95ED","aria-label":"\u5173\u95ED\u9009\u4E2D\u6587\u5B57\u5DE5\u5177\u680F",children:(0,Ve.jsx)(_r,{size:13})})]}),e?(0,Ve.jsxs)("div",{className:"dshr-selection__pop",style:{left:N,top:P},onMouseDown:w=>w.preventDefault(),children:[(0,Ve.jsxs)("div",{className:"dshr-selection__pop-head",children:[(0,Ve.jsx)("span",{children:"\u4E2D\u6587\u8BD1\u6587"}),(0,Ve.jsx)("button",{type:"button",onClick:s,"aria-label":"\u5173\u95ED\u8BD1\u6587",children:(0,Ve.jsx)(_r,{size:12})})]}),e.status==="loading"?(0,Ve.jsxs)("span",{className:"dshr-translation__loading",children:[(0,Ve.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u7FFB\u8BD1\u9009\u4E2D\u5185\u5BB9\u2026"]}):e.status==="error"?(0,Ve.jsxs)("span",{style:{color:"var(--dshr-error)"},children:[e.error||"\u7FFB\u8BD1\u5931\u8D25\u3002"," ",(0,Ve.jsx)("button",{type:"button",className:"dshr-translation__retry",onClick:l,children:"\u91CD\u8BD5"})]}):String(e.zh||"").split(/\n+/u).filter(Boolean).map((w,v)=>(0,Ve.jsx)("p",{style:{margin:v===0?0:"8px 0 0"},children:w},v))]}):null]})}var Xa=Mt(require("react"),1);var me=require("react/jsx-runtime");function sd({settings:t,onChange:e,onClose:r,onClearLibrary:n,onOpenAppearance:o}){let[i,a]=Xa.default.useState(!1);Xa.default.useEffect(()=>{let l=d=>{d.key==="Escape"&&r()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[r]);let s=l=>e({...t,...l});return(0,me.jsx)("div",{className:"dshr-modal-mask",onMouseDown:l=>{l.target===l.currentTarget&&r()},children:(0,me.jsxs)("div",{className:"dshr-modal",role:"dialog","aria-modal":"true","aria-label":"\u9605\u8BFB\u8BBE\u7F6E",children:[(0,me.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:12},children:[(0,me.jsxs)("div",{style:{flex:1},children:[(0,me.jsx)("h3",{children:"\u9605\u8BFB\u8BBE\u7F6E"}),(0,me.jsx)("p",{children:"\u8BBE\u7F6E\u53EA\u4FDD\u5B58\u5728\u672C\u673A\uFF0C\u4E0D\u5F71\u54CD DSH \u7684\u5176\u5B83\u63D2\u4EF6\u3002"})]}),(0,me.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:r,"aria-label":"\u5173\u95ED\u8BBE\u7F6E",children:(0,me.jsx)(_r,{size:16})})]}),(0,me.jsxs)("div",{className:"dshr-settings-row",children:[(0,me.jsxs)("div",{children:[(0,me.jsx)("div",{className:"dshr-settings-row__title",children:"\u5B57\u4F53\u3001\u80CC\u666F\u4E0E\u5E03\u5C40"}),(0,me.jsx)("div",{className:"dshr-settings-row__hint",children:"\u5B57\u4F53\u3001\u5B57\u91CD\u3001\u5B57\u53F7\u3001\u884C\u8DDD\u3001\u9605\u8BFB\u5BBD\u5EA6\u3001\u76EE\u5F55\u5BBD\u5EA6\u3001\u4EAE\u5EA6\u3001\u80CC\u666F\u989C\u8272\u4E0E\u81EA\u5B9A\u4E49\u80CC\u666F\u56FE\u7247\u3002"})]}),(0,me.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:o,children:[(0,me.jsx)(Ro,{size:14})," \u6253\u5F00\u5916\u89C2\u9762\u677F"]})]}),(0,me.jsxs)("div",{className:"dshr-settings-row",children:[(0,me.jsxs)("div",{children:[(0,me.jsx)("div",{className:"dshr-settings-row__title",children:"\u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1"}),(0,me.jsx)("div",{className:"dshr-settings-row__hint",children:"\u6EDA\u52A8\u5230\u5916\u6587\u6BB5\u843D\u540E\u81EA\u52A8\u7FFB\u8BD1\u6210\u4E2D\u6587\uFF0C\u8BD1\u6587\u663E\u793A\u5728\u539F\u6587\u4E0B\u65B9\u3002"})]}),(0,me.jsxs)("button",{type:"button",className:"dshr-switch",role:"switch","aria-checked":t.autoTranslate,onClick:()=>s({autoTranslate:!t.autoTranslate}),children:[(0,me.jsx)("span",{className:"dshr-switch__track"}),t.autoTranslate?"\u5F00\u542F":"\u5173\u95ED"]})]}),(0,me.jsxs)("div",{className:"dshr-settings-row",children:[(0,me.jsxs)("div",{children:[(0,me.jsx)("div",{className:"dshr-settings-row__title",children:"\u6B63\u6587\u5B57\u53F7"}),(0,me.jsxs)("div",{className:"dshr-settings-row__hint",children:[t.fontSize,"px \xB7 \u9002\u5408\u957F\u7BC7\u9605\u8BFB\u7684\u5B57\u53F7"]})]}),(0,me.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:5},children:[(0,me.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--outline",onClick:()=>s({fontSize:Math.max(14,t.fontSize-1)}),"aria-label":"\u51CF\u5C0F\u5B57\u53F7",children:(0,me.jsx)(va,{size:15})}),(0,me.jsxs)("span",{className:"dshr-chip",style:{minWidth:46,justifyContent:"center"},children:[t.fontSize,"px"]}),(0,me.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--outline",onClick:()=>s({fontSize:Math.min(26,t.fontSize+1)}),"aria-label":"\u589E\u5927\u5B57\u53F7",children:(0,me.jsx)(cn,{size:15})})]})]}),(0,me.jsxs)("div",{className:"dshr-settings-row",children:[(0,me.jsxs)("div",{children:[(0,me.jsx)("div",{className:"dshr-settings-row__title",children:"\u884C\u8DDD"}),(0,me.jsxs)("div",{className:"dshr-settings-row__hint",children:["\u5F53\u524D ",t.lineHeight.toFixed(2)]})]}),(0,me.jsx)("input",{type:"range",min:"1.45",max:"2.2",step:"0.05",value:t.lineHeight,onChange:l=>s({lineHeight:Number(l.target.value)}),"aria-label":"\u884C\u8DDD"})]}),(0,me.jsxs)("div",{className:"dshr-settings-row",children:[(0,me.jsxs)("div",{children:[(0,me.jsx)("div",{className:"dshr-settings-row__title",children:"\u7FFB\u8BD1\u4E0E AI"}),(0,me.jsx)("div",{className:"dshr-settings-row__hint",children:"\u4F7F\u7528 DSH \u5F53\u524D\u9ED8\u8BA4\u6A21\u578B\uFF1B\u7FFB\u8BD1\u53EA\u53D1\u9001\u5F53\u524D\u6BB5\u843D\u6216\u9009\u4E2D\u6587\u5B57\uFF0C\u4E0D\u53D1\u9001\u6574\u672C\u4E66\u3002"})]}),(0,me.jsx)("span",{className:"dshr-chip dshr-chip--brand",children:"DSH \u9ED8\u8BA4\u6A21\u578B"})]}),(0,me.jsxs)("div",{className:"dshr-settings-row dshr-settings-row--danger",children:[(0,me.jsxs)("div",{children:[(0,me.jsx)("div",{className:"dshr-settings-row__title",children:"\u6E05\u7A7A\u672C\u5730\u4E66\u67B6"}),(0,me.jsx)("div",{className:"dshr-settings-row__hint",children:"\u5220\u9664\u5DF2\u5BFC\u5165\u7684\u6240\u6709\u6587\u6863\u3001\u4E66\u5355\u3001\u6279\u6CE8\u548C\u9605\u8BFB\u8FDB\u5EA6\uFF0C\u65E0\u6CD5\u64A4\u9500\u3002"})]}),i?(0,me.jsxs)("div",{style:{display:"flex",gap:6},children:[(0,me.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm",onClick:()=>a(!1),children:"\u53D6\u6D88"}),(0,me.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--danger",onClick:()=>{n(),a(!1)},children:[(0,me.jsx)(ln,{size:13})," \u786E\u8BA4\u6E05\u7A7A"]})]}):(0,me.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--danger",onClick:()=>a(!0),children:[(0,me.jsx)(ln,{size:13})," \u6E05\u7A7A"]})]})]})})}function ld({book:t,onCancel:e,onConfirm:r}){return Xa.default.useEffect(()=>{let n=o=>{o.key==="Escape"&&e()};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[e]),(0,me.jsx)("div",{className:"dshr-modal-mask",onMouseDown:n=>{n.target===n.currentTarget&&e()},children:(0,me.jsxs)("div",{className:"dshr-modal",role:"dialog","aria-modal":"true","aria-label":"\u5220\u9664\u6587\u6863",children:[(0,me.jsx)("h3",{children:"\u4ECE\u4E66\u67B6\u5220\u9664\uFF1F"}),(0,me.jsxs)("p",{children:["\u300A",t?.title||"\u672A\u547D\u540D\u6587\u6863","\u300B\u53CA\u5176\u9605\u8BFB\u8FDB\u5EA6\u4F1A\u4ECE\u672C\u673A\u5220\u9664\u3002\u539F\u59CB\u6587\u4EF6\u4E0D\u53D7\u5F71\u54CD\u3002"]}),(0,me.jsxs)("div",{className:"dshr-modal__actions",children:[(0,me.jsx)("button",{type:"button",className:"dshr-btn",onClick:e,children:"\u53D6\u6D88"}),(0,me.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--danger",onClick:r,children:[(0,me.jsx)(ln,{size:14})," \u5220\u9664"]})]})]})})}function cd({message:t}){return t?(0,me.jsx)("div",{className:"dshr-toast",role:"status",children:t}):null}var so=Mt(require("react"),1);var ct=require("react/jsx-runtime"),Gp=[{label:"Project Gutenberg",hint:"\u4E03\u4E07\u672C\u516C\u7248\u4E66",href:"https://www.gutenberg.org/"},{label:"Standard Ebooks",hint:"\u7CBE\u6821\u516C\u7248\u4E66",href:"https://standardebooks.org/"},{label:"arXiv",hint:"\u5F00\u653E\u83B7\u53D6\u8BBA\u6587",href:"https://arxiv.org/"},{label:"Open Library",hint:"\u5F00\u653E\u56FE\u4E66\u76EE\u5F55",href:"https://openlibrary.org/"},{label:"Internet Archive",hint:"\u516C\u7248\u4E0E\u5F00\u653E\u9986\u85CF",href:"https://archive.org/"},{label:"Wikisource",hint:"\u516C\u7248\u6587\u732E",href:"https://zh.wikisource.org/"}];function dd({open:t,busy:e,onClose:r,onSubmit:n}){let[o,i]=so.default.useState(""),[a,s]=so.default.useState(""),l=so.default.useRef(null);return so.default.useEffect(()=>{t&&(s(""),window.setTimeout(()=>l.current?.focus(),30))},[t]),so.default.useEffect(()=>{if(!t)return;let f=g=>{g.key==="Escape"&&!e&&r()};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[t,e,r]),t?(0,ct.jsx)("div",{className:"dshr-modal-mask",onMouseDown:f=>{f.target===f.currentTarget&&!e&&r()},children:(0,ct.jsxs)("div",{className:"dshr-modal dshr-online-modal",role:"dialog","aria-modal":"true","aria-label":"\u4ECE\u516C\u5F00\u6765\u6E90\u5BFC\u5165",children:[(0,ct.jsxs)("div",{className:"dshr-online-modal__head",children:[(0,ct.jsxs)("div",{children:[(0,ct.jsxs)("h3",{children:[(0,ct.jsx)(ka,{size:17})," \u4ECE\u516C\u5F00\u6765\u6E90\u5BFC\u5165"]}),(0,ct.jsx)("p",{children:"\u7C98\u8D34\u7535\u5B50\u4E66\u6587\u4EF6\u7684\u76F4\u94FE\uFF0C\u4E0B\u8F7D\u540E\u81EA\u52A8\u52A0\u5165\u4E66\u67B6\u5E76\u6253\u5F00\u3002"})]}),(0,ct.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:r,disabled:e,"aria-label":"\u5173\u95ED\u5728\u7EBF\u5BFC\u5165",children:(0,ct.jsx)(_r,{size:16})})]}),(0,ct.jsxs)("div",{className:"dshr-online-modal__notice",children:[(0,ct.jsx)("strong",{children:"\u7248\u6743\u63D0\u793A"}),(0,ct.jsx)("span",{children:"\u4EC5\u652F\u6301\u4F60\u786E\u8BA4\u6709\u6743\u4E0B\u8F7D\u7684\u516C\u5F00\u7248\u6743 / \u5F00\u653E\u83B7\u53D6\u8D44\u6E90\u3002\u672C\u529F\u80FD\u4E0D\u5185\u7F6E Z-Library \u7B49\u7248\u6743\u4E0D\u660E\u7684\u4E66\u6E90\uFF0C\u4E5F\u4E0D\u4F1A\u6293\u53D6\u767B\u5F55\u540E\u7684\u79C1\u5BC6\u9875\u9762\u3002"})]}),(0,ct.jsxs)("form",{className:"dshr-online-modal__form",onSubmit:f=>{f.preventDefault();let g=o.trim();if(!/^https:\/\//iu.test(g)){s("\u8BF7\u8F93\u5165\u4EE5 https:// \u5F00\u5934\u7684\u7535\u5B50\u4E66\u6587\u4EF6\u76F4\u94FE\u3002");return}s(""),n(g)},children:[(0,ct.jsx)("label",{htmlFor:"dshr-online-url",children:"\u6587\u4EF6\u76F4\u94FE"}),(0,ct.jsxs)("div",{className:"dshr-online-modal__input",children:[(0,ct.jsx)(Dl,{size:15}),(0,ct.jsx)("input",{ref:l,id:"dshr-online-url",type:"url",value:o,onChange:f=>{i(f.target.value),s("")},placeholder:"https://www.gutenberg.org/ebooks/11.epub3.images",spellCheck:"false",autoComplete:"off",disabled:e})]}),a?(0,ct.jsx)("p",{className:"dshr-online-modal__error",children:a}):null,(0,ct.jsx)("p",{className:"dshr-online-modal__hint",children:"\u652F\u6301 PDF / EPUB / MOBI / AZW3 / TXT / Markdown / HTML \u76F4\u94FE\uFF1B\u5355\u4E2A\u6587\u4EF6\u6700\u5927 120 MB\u3002 \u53E4\u767B\u5821\u3001Standard Ebooks\u3001arXiv\u3001Open Library\u3001Internet Archive \u7B49\u7AD9\u70B9\u53EF\u6B63\u5E38\u4F7F\u7528\u3002"}),(0,ct.jsxs)("div",{className:"dshr-online-modal__actions",children:[(0,ct.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--ghost",onClick:r,disabled:e,children:"\u53D6\u6D88"}),(0,ct.jsx)("button",{type:"submit",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:e||o.trim()==="",children:e?"\u6B63\u5728\u4E0B\u8F7D\u2026":"\u4E0B\u8F7D\u5E76\u6253\u5F00"})]})]}),(0,ct.jsxs)("div",{className:"dshr-online-modal__sources",children:[(0,ct.jsx)("span",{children:"\u53BB\u54EA\u91CC\u627E\u4E66\uFF1F"}),(0,ct.jsx)("div",{className:"dshr-online-modal__source-list",children:Gp.map(f=>(0,ct.jsx)("a",{href:f.href,target:"_blank",rel:"noreferrer",title:f.hint,children:f.label},f.label))})]})]})}):null}var Tr=Mt(require("react"),1);var Ut=class t{static GetDistanceBetweenTwoPoint(e,r){return e===null||r===null?1/0:Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))}static GetSegmentLength(e){return t.GetDistanceBetweenTwoPoint(e[0],e[1])}static GetAngleBetweenTwoLine(e,r){let n=e[0].y-e[1].y,o=r[0].y-r[1].y,i=e[1].x-e[0].x,a=r[1].x-r[0].x;return Math.acos((n*o+i*a)/(Math.sqrt(n*n+i*i)*Math.sqrt(o*o+a*a)))}static PointInRect(e,r){return r===null?null:r.x>=e.left&&r.x<=e.width+e.left&&r.y>=e.top&&r.y<=e.top+e.height?r:null}static GetRotatedPoint(e,r,n){return{x:e.x*Math.cos(n)+e.y*Math.sin(n)+r.x,y:e.y*Math.cos(n)-e.x*Math.sin(n)+r.y}}static LimitPointToCircle(e,r,n){if(t.GetDistanceBetweenTwoPoint(e,n)<=r)return n;let o=e.x,i=e.y,a=n.x,s=n.y,l=Math.sqrt(Math.pow(r,2)*Math.pow(o-a,2)/(Math.pow(o-a,2)+Math.pow(i-s,2)))+o;n.x<0&&(l*=-1);let d=(l-o)*(i-s)/(o-a)+i;return o-a+i===0&&(d=r),{x:l,y:d}}static GetIntersectBetweenTwoSegment(e,r,n){return t.PointInRect(e,t.GetIntersectBeetwenTwoLine(r,n))}static GetIntersectBeetwenTwoLine(e,r){let n=e[0].y-e[1].y,o=r[0].y-r[1].y,i=e[1].x-e[0].x,a=r[1].x-r[0].x,s=e[0].x*e[1].y-e[1].x*e[0].y,l=r[0].x*r[1].y-r[1].x*r[0].y,d=n*l-o*s,f=i*l-a*s,g=-((s*a-l*i)/(n*a-o*i)),u=-((n*l-o*s)/(n*a-o*i));if(isFinite(g)&&isFinite(u))return{x:g,y:u};if(Math.abs(d-f)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(e,r){let n=Math.abs(e.x-r.x),o=Math.abs(e.y-r.y),i=Math.max(n,o),a=[e];function s(l,d,f,g,u){return d>l?l+u*(f/g):d<l?l-u*(f/g):l}for(let l=1;l<=i;l+=1)a.push({x:s(e.x,r.x,n,i,l),y:s(e.y,r.y,o,i,l)});return a}};var Ho=class{constructor(e,r,n,o){this.direction=e;this.corner=r;this.pageWidth=parseInt(n,10),this.pageHeight=parseInt(o,10)}direction;corner;angle;position;rect;topIntersectPoint=null;sideIntersectPoint=null;bottomIntersectPoint=null;pageWidth;pageHeight;calc(e){try{return this.position=this.calcAngleAndPosition(e),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){let e=[],r=!1;return e.push(this.rect.topLeft),e.push(this.topIntersectPoint),this.sideIntersectPoint===null?r=!0:(e.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(r=!1)),e.push(this.bottomIntersectPoint),(r||this.corner==="bottom")&&e.push(this.rect.bottomLeft),e}getBottomClipArea(){let e=[];return e.push(this.topIntersectPoint),this.corner==="top"?e.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&e.push({x:this.pageWidth,y:0}),e.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?Ut.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&e.push(this.sideIntersectPoint):this.corner==="top"&&e.push({x:this.pageWidth,y:this.pageHeight}),e.push(this.bottomIntersectPoint),e.push(this.topIntersectPoint),e}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){let e=Ut.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?e:Math.PI-e}calcAngleAndPosition(e){let r=e;if(this.updateAngleAndGeometry(r),this.corner==="top"?r=this.checkPositionAtCenterLine(r,{x:0,y:0},{x:0,y:this.pageHeight}):r=this.checkPositionAtCenterLine(r,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(r.x-this.pageWidth)<1&&Math.abs(r.y)<1)throw new Error("Point is too small");return r}updateAngleAndGeometry(e){this.angle=this.calculateAngle(e),this.rect=this.getPageRect(e)}calculateAngle(e){let r=this.pageWidth-e.x+1,n=this.corner==="bottom"?this.pageHeight-e.y:e.y,o=2*Math.acos(r/Math.sqrt(n*n+r*r));n<0&&(o=-o);let i=Math.PI-o;if(!isFinite(o)||i>=0&&i<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(o=-o),o}getPageRect(e){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],e):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],e)}getRectFromBasePoint(e,r){return{topLeft:this.getRotatedPoint(e[0],r),topRight:this.getRotatedPoint(e[1],r),bottomLeft:this.getRotatedPoint(e[2],r),bottomRight:this.getRotatedPoint(e[3],r)}}getRotatedPoint(e,r){return{x:e.x*Math.cos(this.angle)+e.y*Math.sin(this.angle)+r.x,y:e.y*Math.cos(this.angle)-e.x*Math.sin(this.angle)+r.y}}calculateIntersectPoint(e){let r={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=Ut.GetIntersectBetweenTwoSegment(r,[e,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=Ut.GetIntersectBetweenTwoSegment(r,[e,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=Ut.GetIntersectBetweenTwoSegment(r,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=Ut.GetIntersectBetweenTwoSegment(r,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=Ut.GetIntersectBetweenTwoSegment(r,[e,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=Ut.GetIntersectBetweenTwoSegment(r,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(e,r,n){let o=e,i=Ut.LimitPointToCircle(r,this.pageWidth,o);o!==i&&(o=i,this.updateAngleAndGeometry(o));let a=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2)),s=this.rect.bottomRight,l=this.rect.topLeft;if(this.corner==="bottom"&&(s=this.rect.topRight,l=this.rect.bottomLeft),s.x<=0){let d=Ut.LimitPointToCircle(n,a,l);d!==o&&(o=d,this.updateAngleAndGeometry(o))}return o}getSegmentToShadowLine(){let e=this.getShadowStartPoint(),r=e!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint;return[e,r]}};var ss={slide:250,cover:300,flip:500},Xp="cubic-bezier(.25,.1,.25,1)",hd=t=>`polygon(${t.filter(Boolean).map(e=>`${e.x}px ${e.y}px`).join(",")})`,Vp=0;function ud(t,e){let r=t.getBoundingClientRect(),n=e.querySelectorAll(".dshr-block,.dshr-chapter__kicker,.dshr-chapter__nav");return[...n.length?n:e.children].map(o=>{let i=o.getBoundingClientRect();return{element:o,top:i.top-r.top+t.scrollTop,bottom:i.bottom-r.top+t.scrollTop,left:i.left-r.left,width:i.width,height:i.height}})}function Va(t){let e=[t,...t.querySelectorAll("*")],r=new Map,n=`dshr-snapshot-${++Vp}-`;for(let o of e){o.id&&(r.set(o.id,n+r.size),o.id=r.get(o.id));for(let i of["data-seg-id","data-anno-block","data-anno-id","autofocus"])o.removeAttribute(i)}if(r.size)for(let o of e)for(let i of[...o.attributes]){if(i.name==="id")continue;let a=i.value.replace(/url\(\s*(['"]?)#([^\s)'";]+)\1\s*\)/g,(s,l,d)=>r.has(d)?`url(#${r.get(d)})`:s);(i.name==="href"||i.name==="xlink:href")&&r.has(a.slice(1))&&(a="#"+r.get(a.slice(1))),a!==i.value&&o.setAttribute(i.name,a)}}function pd(t,e,r,n,o,i){let a=document.createElement("div");a.className="dshr-turn-page";let s=t.getBoundingClientRect(),l=e.getBoundingClientRect(),d=e.cloneNode(!1);Va(d),Object.assign(d.style,{position:"absolute",left:`${l.left-s.left}px`,top:"0",width:`${l.width}px`,height:"100%",padding:"0",margin:"0"}),a.append(d);let f=new Map([[e,d]]),g=p=>{if(f.has(p))return f.get(p);let _=p.cloneNode(!1);return Va(_),g(p.parentElement).append(_),f.set(p,_),_};for(let p of r){if(p.bottom<=n+48||p.top>=n+t.clientHeight-o||!p.height)continue;if(p.height>t.clientHeight*8)throw new Error("Snapshot block exceeds viewport budget");let _=document.createTreeWalker(p.element,4294967295);for(let w=p.element;w;w=_.nextNode())if(i.nodes-=1,w.nodeType===3&&(i.text-=w.length),i.nodes<0||i.text<0)throw new Error("Snapshot exceeds DOM budget");let N=p.element.cloneNode(!0);Va(N),Object.assign(N.style,{position:"absolute",margin:"0",boxSizing:"border-box",left:`${p.left-(l.left-s.left)}px`,top:`${p.top-n}px`,width:`${p.width}px`,height:`${p.height}px`}),g(p.element.parentElement).append(N);let y=[p.element,...p.element.querySelectorAll("*")],P=[N,...N.querySelectorAll("*")];y.forEach((w,v)=>{w.scrollLeft&&(P[v].scrollLeft=w.scrollLeft),w.tagName==="CANVAS"&&(P[v].width=w.width,P[v].height=w.height,P[v].getContext("2d")?.drawImage(w,0,0))})}let u=t.querySelector(":scope > .dshr-anno-layer");if(u){let p=u.cloneNode(!1);Object.assign(p.style,{top:"0",height:"100%"});for(let _ of u.children){let N=Number.parseFloat(_.style.top),y=Number.parseFloat(_.style.height)||24;if(N+y<=n+48||N>=n+t.clientHeight-o)continue;if(--i.nodes<0)throw new Error("Snapshot marks exceed DOM budget");let P=_.cloneNode(!0);Va(P),P.style.top=`${N-n}px`,p.append(P)}a.append(p)}for(let[p,_]of[["top",48],["bottom",o]]){let N=document.createElement("div");N.className=`dshr-turn-mask dshr-turn-mask--${p}`,N.style.height=`${_}px`,a.append(N)}return a}function Kp(t,e,r){let n=new Ho(0,"bottom",String(Math.round(t)),String(Math.round(e))),o=Math.max(1e-4,Math.min(.9999,r)),i=Math.min(e*.22,t*.28)*Math.sin(Math.PI*o);if(!n.calc({x:t*(1-2*o),y:e-i-.1}))return null;let a=n.getActiveCorner(),s=n.getAngle(),l=n.getFlippingClipArea().filter(Boolean).map(d=>Ut.GetRotatedPoint({x:d.x-a.x,y:d.y-a.y},{x:0,y:0},s));return{reveal:hd(n.getBottomClipArea()),fold:hd(l),transform:`translate3d(${a.x}px,${a.y}px,0) rotate(${s}rad)`,shadow:n.getShadowStartPoint(),shadowAngle:n.getShadowAngle()+Math.PI*1.5,strength:Math.sin(Math.PI*o)}}function ls(t,e,r,n,o){let i={nodes:1800,text:64e3};return{page:pd(t,e,r,n,o,i),budget:i,width:t.clientWidth,height:t.clientHeight}}function fd({reader:t,scroll:e,stage:r,records:n,from:o,to:i,fromBottom:a,toBottom:s,mode:l,direction:d,departing:f}){let g=Object.hasOwn(ss,l)?l:"slide",u=e.getBoundingClientRect(),p=t.getBoundingClientRect(),_=document.createElement("div");_.className=`dshr-flow-transition is-${g}`,_.dataset.direction=String(d),_.setAttribute("aria-hidden","true"),_.inert=!0,Object.assign(_.style,{left:`${u.left-p.left}px`,top:`${u.top-p.top}px`,width:`${e.clientWidth}px`,height:`${e.clientHeight}px`});let N=window.getComputedStyle(e);for(let L of Array.from(N))L.startsWith("--dshr-")&&_.style.setProperty(L,N.getPropertyValue(L));let y=f??ls(e,r,n,o,a),P=y.page,w=pd(e,r,n,i,s,y.budget);P.dataset.turnPage="old",w.dataset.turnPage="new",_.append(P,w);let v=[],S=0,C,E=!1,D,I=()=>{E=!0,cancelAnimationFrame(S),clearTimeout(C);for(let L of v)L.cancel();D?.(),_.remove()},b=(L,z)=>{let B=L.animate(z,{duration:ss[g],easing:Xp,fill:"both"});return B.finished.catch(()=>{}),v.push(B),B};try{if(t.append(_),g==="slide")b(P,[{transform:"translateX(0)"},{transform:`translateX(${-d*100}%)`}]),b(w,[{transform:`translateX(${d*100}%)`},{transform:"translateX(0)"}]);else if(g==="cover"){let L=d>0?w:P,z=d>0?P:w;z.dataset.turnRole="stationary",L.dataset.turnRole="moving",z.style.zIndex="0",L.style.zIndex="1",L.classList.add("has-edge-shadow"),b(L,d>0?[{transform:"translateX(100%)"},{transform:"translateX(0)"}]:[{transform:"translateX(0)"},{transform:"translateX(100%)"}])}else{let L=d>0?P:w,z=d>0?w:P;L.style.zIndex="0",z.style.zIndex="1";let B=document.createElement("div");B.className="dshr-turn-fold";let Y=document.createElement("div");Y.className="dshr-turn-fold-shadow",z.append(Y),_.append(B);let ne=b(_,[{opacity:1},{opacity:1}]),re=U=>{let K=d>0?U:1-U;if(K<=0){z.style.clipPath="inset(0 100% 0 0)",B.hidden=!0;return}if(K>=1){z.style.clipPath="none",B.hidden=!0,Y.hidden=!0;return}let te=Kp(e.clientWidth,e.clientHeight,K);te&&(B.hidden=!1,Y.hidden=!1,z.style.clipPath=te.reveal,B.style.clipPath=te.fold,B.style.transform=te.transform,te.shadow&&Object.assign(Y.style,{opacity:String(te.strength*.16),transform:`translate3d(${te.shadow.x}px,${te.shadow.y-e.clientHeight}px,0) rotate(${te.shadowAngle}rad)`}))};re(0);let oe=()=>{E||(re(ne.effect.getComputedTiming().progress??0),S=requestAnimationFrame(oe))};S=requestAnimationFrame(oe)}}catch(L){throw I(),L}let F=Promise.all(v.map(L=>L.finished.catch(()=>{})));return{overlay:_,width:e.clientWidth,height:e.clientHeight,cancel:I,async play(){try{await Promise.race([F,new Promise(L=>{D=L,C=setTimeout(L,ss[g]+300)})])}finally{I()}}}}var Yp='a,button,input,select,textarea,img,video,[role="button"],[contenteditable="true"],.dshr-pdf-frame';function cs(t){let e=window.getSelection?.();return e&&!e.isCollapsed&&(t.contains(e.anchorNode)||t.contains(e.focusNode))}function gd({scroll:t,reader:e,stage:r,hint:n,canTurn:o,turn:i}){let a=null,s="",l=()=>cs(t),d=w=>{let{target:v,clientX:S,clientY:C}=w;if(!(v instanceof Element)||v.closest(Yp)||r?.contains(v))return null;let E=t.getBoundingClientRect(),D=E.left+t.clientLeft,I=D+t.clientWidth,b=E.top+t.clientTop+12,F=t.clientHeight-24;if(C<b||C>=b+F)return null;let L=Math.max(24,Math.min(64,t.clientWidth*.06)),z=S>=D&&S<D+L?-1:S<I&&S>=I-L?1:0;if(!z||!o(z))return null;let B=r||t.querySelector('.dshr-pdf-page[data-active="true"] .dshr-pdf-frame');if(!B)return null;let Y=B.getBoundingClientRect();if(Y.right<=D||Y.left>=I)return null;let ne=Math.min(L,z<0?Y.left-D:I-Y.right);return ne<24||(z<0?S>=D+ne:S<I-ne)?null:{direction:z,left:z<0?D:I-ne,top:b,width:ne,height:F}},f=()=>{s&&(s="",n.hidden=!0,delete t.dataset.pageGutterHover)},g=()=>{a=null,f()},u=w=>Math.hypot(w.clientX-a.x,w.clientY-a.y)>6,P={pointerdown:w=>{if(a=null,w.button!==0||!w.isPrimary||w.ctrlKey||w.metaKey||w.altKey||w.shiftKey||l())return;let v=d(w);v&&(a={id:w.pointerId,direction:v.direction,x:w.clientX,y:w.clientY,time:w.timeStamp,released:!1})},pointermove:w=>{let v=d(w);if(a&&(w.pointerId!==a.id||u(w)||v?.direction!==a.direction)&&(a=null),!v||w.buttons||w.pointerType!=="mouse"||l()){f();return}let S=e.getBoundingClientRect(),C=v.left-S.left,E=v.top-S.top,D=[C,E,v.width,v.height].join(":");D!==s&&(s=D,Object.assign(n.style,{left:C+"px",top:E+"px",width:v.width+"px",height:v.height+"px"}),n.hidden=!1,t.dataset.pageGutterHover="true")},pointerup:w=>{if(!a||w.pointerId!==a.id||u(w)||w.timeStamp-a.time>500||l()||d(w)?.direction!==a.direction){a=null;return}a.released=!0},click:w=>{let v=a;a=null,!(!v?.released||w.timeStamp-v.time>600||w.defaultPrevented||l()||d(w)?.direction!==v.direction)&&i(v.direction,w.detail>1)},selectstart:w=>{a&&w.preventDefault()},pointerleave:()=>{a?.released||(a=null),f()},pointercancel:g,contextmenu:g,scroll:f};for(let[w,v]of Object.entries(P))t.addEventListener(w,v);return{hide:f,dispose(){for(let[w,v]of Object.entries(P))t.removeEventListener(w,v);g()}}}var br=require("react/jsx-runtime"),bd='input, textarea, select, [contenteditable="true"]',xd=".dshr-modal-mask,.dshr-modal,.dshr-appearance-panel,.dshr-anno-panel,.dshr-ai,.dshr-selection,.dshr-online-modal,.dshr-anno-composer,.dshr-pdf-translation-panel",Zp=".dshr-topbar,.dshr-immersive-controls,.dshr-toc,.dshr-paged-controls,"+xd+","+bd,Qp=()=>window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,md=220,co=null;function vd({enabled:t,animation:e,bookMode:r=!1,bookFrame:n=!1,frameTop:o=52,frameLeft:i=0,readerKey:a,canPrevChapter:s,canNextChapter:l,chapterEntry:d,onChapterTurn:f,onChapterEntered:g}){let[u,p]=Tr.default.useState({page:1,pages:1}),[_,N]=Tr.default.useState({top:48,bottom:56}),[y,P]=Tr.default.useState(null),w=Tr.default.useRef(null),v=Tr.default.useRef(null),S=Tr.default.useRef(null),C=Tr.default.useRef(0),E=Tr.default.useRef(-1/0),D=Tr.default.useRef({});if(Tr.default.useLayoutEffect(()=>{D.current={canPrevChapter:s,canNextChapter:l,chapterEntry:d,onChapterTurn:f,onChapterEntered:g,animation:e}}),Tr.default.useLayoutEffect(()=>{let F=S.current;if(S.current=null,!t)return;let L=w.current?.closest(".dshr-reader"),z=L?.querySelector(".dshr-content,.dshr-pdf-scroll");if(!z)return;let B=z.classList.contains("dshr-pdf-scroll"),Y=z.querySelector(".dshr-content__inner"),ne=B?null:D.current.chapterEntry,re=ne&&F?.entry===ne?F.snapshot:null,oe=ne?.edge,U=ne?.direction,K=-1/0,te=!1,O=Pc(),ue={scrollBehavior:z.style.scrollBehavior,overflowAnchor:z.style.overflowAnchor};z.style.scrollBehavior="auto",z.style.overflowAnchor="none",z.classList.add("dshr-paged-scroll");let fe=!1,Te=!0,ie=!1,Ae=0,Ue=0,ge=0,ut=[],Oe=null,ft=[],h=null,c=[],k=!B&&Y?document.createElement("div"):null;k&&(k.className="dshr-page-tail",k.setAttribute("aria-hidden","true"),z.append(k));let x=()=>{z.dataset.readerNavigation=String(++C.current)};x(),N({top:48,bottom:56});let J=()=>{if(fe)return;z.dataset.readerPage=String(O.page),z.dataset.readerPages=String(O.pages),z.dataset.readerTarget=String(O.top),p(de=>de.page===O.page&&de.pages===O.pages?de:{page:O.page,pages:O.pages});let ee=se(O.top);N(de=>de.bottom===ee?de:{top:48,bottom:ee})},se=ee=>{let de=ee+z.clientHeight-56,Re=ut.find(De=>De.top<de-.5&&De.bottom>de+.5&&De.bottom-De.top<=z.clientHeight-48-56&&De.top>ee+48);return Re?Math.max(56,z.clientHeight-(Re.top-ee)):56},ce=()=>{Math.abs(z.scrollTop-O.top)>.5&&(z.scrollTop=O.top)},xe=ee=>{if(fe||B||te||!Y||!z.clientHeight||!z.clientWidth)return;if(ie){Te=!0;return}ut=Oc(z,Y),c=ud(z,Y);let de=Mc(ut,z.clientHeight);if(k){let De=z.scrollHeight-k.offsetHeight,tt=Math.max(0,Math.ceil(de.at(-1)+z.clientHeight-De));k.style.height=tt+"px"}let Re=ee;if(Re==null&&(oe==="start"?Re=de[0]:oe==="end"?Re=de.at(-1):ne?Re=Math.max(0,Math.min(1,Number(ne.scrollRatio)||0))*Math.max(0,z.scrollHeight-z.clientHeight):Re=Lc(Oe,z,z.scrollTop)),O.replace(de,Re),Te=!1,ce(),Oe=Ki(ut,O.top,z),J(),ne){let De=ne;ne=null,K=performance.now();let tt=re;re=null,tt&&tt.width===z.clientWidth&&tt.height===z.clientHeight&&Je(O.top,De.direction,tt),D.current.onChapterEntered?.(De,Lo(z))}},ye=ee=>{fe||B||te||(Te=!0,ie&&h&&(h.width!==z.clientWidth||h.height!==z.clientHeight||ee?.type==="loadingdone")&&h.cancel(),!Ue&&(Ue=requestAnimationFrame(()=>{Ue=0,ie||xe()})))},$e=()=>{Ae+=1,h?.cancel(),h=null,delete z.dataset.readerTurning,L.classList.remove("dshr-is-turning"),ie=!1,ft.length=0},Me=()=>Y?.animate&&!Qp(),Je=async(ee,de,Re)=>{ie=!0;let De=++Ae;z.dataset.readerTurning="true";try{Me()&&(h=fd({reader:L,scroll:z,stage:Y,records:c,from:ee,to:O.top,fromBottom:se(ee),toBottom:se(O.top),mode:D.current.animation,direction:de,departing:Re}),L.classList.add("dshr-is-turning")),ce(),h&&await h.play()}catch{}finally{!fe&&De===Ae&&(h?.cancel(),h=null,delete z.dataset.readerTurning,L.classList.remove("dshr-is-turning"),ie=!1,Te?xe():(ce(),J()),ft.length&&pe(ft.shift()))}},et=ee=>{let{canPrevChapter:de,canNextChapter:Re,onChapterTurn:De}=D.current;if(!De||!(ee<0?de:Re))return;te=!0,ft.length=0,x();let tt={edge:ee>0?"start":"end",direction:ee};if(Me())try{S.current={entry:tt,snapshot:ls(z,Y,c,O.top,se(O.top))}}catch{}De(ee,tt)},pe=(ee,de=!1)=>{if(fe||te)return;if(co=L,ee=ee>0?1:-1,B){z.dispatchEvent(new CustomEvent("dshr-pdf-page-turn",{detail:ee}));return}if(ne){xe();return}if(ee===U&&(de||ie||performance.now()-K<md))return;if(U=null,ie){ft.length<32&&ft.push(ee);return}if(Te&&xe(),Te||ie)return;let Re=O.top;if(!O.turn(ee)){et(ee);return}oe=null,Oe=Ki(ut,O.top,z),x(),J(),Je(Re,ee)},ze=gd({scroll:z,reader:L,stage:Y,hint:v.current,turn:pe,canTurn:ee=>{if(B){let de=Number(z.dataset.pdfPage);return ee<0?de>1:de>0&&de<Number(z.dataset.pdfPages)}return ee<0?O.page>1||D.current.canPrevChapter:O.page<O.pages||D.current.canNextChapter}}),je=()=>{B||ie||te||Te||ge||(ge=requestAnimationFrame(()=>{ge=0,!fe&&!ie&&!te&&!Te&&ce()}))},Le=ee=>{if(B||!Y||(ee.preventDefault(),te))return;$e(),U=null,oe=null,re=null;let de=ee.detail||{},Re=Number(de.top)||0;de.ratio!=null&&(Re=Number(de.ratio)*Math.max(0,z.scrollHeight-z.clientHeight)),de.element&&Y.contains(de.element)&&(Re=de.element.getBoundingClientRect().top-z.getBoundingClientRect().top+z.scrollTop-48),x(),Oe=null,xe(Math.max(0,Re))},vt=ee=>{if(ee.target instanceof Element&&ee.target.closest(Zp)||ee.ctrlKey||ee.metaKey||Math.abs(ee.deltaY)<8&&Math.abs(ee.deltaX)<8)return;ee.preventDefault();let de=performance.now(),Re=de-E.current;E.current=de,Re>=md&&pe(ee.deltaY>0||ee.deltaX>0?1:-1)},at=ee=>{if(ee.defaultPrevented||ee.repeat||ee.ctrlKey||ee.metaKey||ee.altKey||!z.isConnected||ee.target instanceof Element&&ee.target.closest(bd+","+xd+",.dshr-topbar--pdf,.dshr-immersive-controls"))return;let de=ee.target instanceof Element&&ee.target.closest(".dshr-root"),Re=ee.target instanceof Element&&ee.target.closest(".dshr-reader");if(Re&&Re!==L||de&&!de.contains(L)||!de&&(co?.isConnected?co!==L:[...document.querySelectorAll(".dshr-reader")].find(_t=>_t.getBoundingClientRect().height>0)!==L)||cs(z))return;let De=["ArrowDown","ArrowRight","PageDown"," "].includes(ee.key),tt=["ArrowUp","ArrowLeft","PageUp"].includes(ee.key);!De&&!tt||(ee.preventDefault(),pe(De?1:-1))},ve=ee=>{ze.hide();let{page:de,pages:Re}=ee.detail||{};Number.isFinite(de)&&de>=1&&Number.isFinite(Re)&&Re>=1&&p({page:de,pages:Re})},wt=ee=>{pe(Number(ee.detail)>0?1:-1)},hr=()=>{co=L};L.addEventListener("pointerdown",hr),z.addEventListener("wheel",vt,{passive:!1}),z.addEventListener("scroll",je,{passive:!0}),z.addEventListener("dshr-flow-navigate",Le),z.addEventListener("dshr-page-turn",wt),z.addEventListener("dshr-pdf-page-state",ve),window.addEventListener("keydown",at);let Wt,kt,Ot,Et=()=>{if(fe)return;ze.hide();let ee=z.getBoundingClientRect(),de=L.getBoundingClientRect(),Re={center:ee.left-de.left+ee.width/2,bottom:Math.max(0,de.bottom-ee.bottom)};P(De=>De&&Object.keys(Re).every(tt=>Math.abs(De[tt]-Re[tt])<.5)?De:Re)};if(Et(),typeof ResizeObserver=="function"&&(Ot=new ResizeObserver(Et),Ot.observe(z),Ot.observe(L)),B){let ee=Number(z.dataset.pdfPage),de=Number(z.dataset.pdfPages);ee>0&&de>0&&p({page:ee,pages:de})}else xe(),typeof ResizeObserver=="function"&&(Wt=new ResizeObserver(ye),Wt.observe(z),Wt.observe(Y)),typeof MutationObserver=="function"&&(kt=new MutationObserver(ye),kt.observe(Y,{subtree:!0,childList:!0,characterData:!0})),Y.addEventListener("load",ye,!0),document.fonts?.addEventListener("loadingdone",ye),document.fonts?.ready.then(ye);return()=>{fe=!0,$e(),cancelAnimationFrame(Ue),cancelAnimationFrame(ge),Wt?.disconnect(),Ot?.disconnect(),kt?.disconnect(),Y?.removeEventListener("load",ye,!0),document.fonts?.removeEventListener("loadingdone",ye),z.removeEventListener("wheel",vt),z.removeEventListener("scroll",je),z.removeEventListener("dshr-flow-navigate",Le),z.removeEventListener("dshr-page-turn",wt),z.removeEventListener("dshr-pdf-page-state",ve),window.removeEventListener("keydown",at),L.removeEventListener("pointerdown",hr),co===L&&(co=null),z.classList.remove("dshr-paged-scroll"),Object.assign(z.style,ue);for(let ee of["readerPage","readerPages","readerTarget","readerNavigation","readerTurning"])delete z.dataset[ee];k?.remove(),ze.dispose()}},[t,r,a]),!t)return null;let{page:I,pages:b}=u;return(0,br.jsxs)("div",{ref:w,className:`dshr-paged-controls${r?" is-book":""}${n?" has-book-frame":""}`,style:{...y?{"--dshr-paged-center":`${y.center}px`,"--dshr-paged-bottom":`${y.bottom+14}px`}:{},"--dshr-book-frame-top":`${Math.max(0,Number(o)||0)}px`,"--dshr-book-frame-left":`${Math.max(0,Number(i)||0)}px`,"--dshr-book-top-cover":`${_.top}px`,"--dshr-book-bottom-cover":`${_.bottom}px`},"aria-live":"polite",children:[n?(0,br.jsxs)(br.Fragment,{children:[(0,br.jsx)("div",{className:"dshr-book-mask dshr-book-mask--top","aria-hidden":"true"}),(0,br.jsx)("div",{className:"dshr-book-mask dshr-book-mask--bottom","aria-hidden":"true"})]}):null,(0,br.jsx)("div",{ref:v,className:"dshr-page-gutter-hint",hidden:!0,"aria-hidden":"true"}),(0,br.jsxs)("div",{className:"dshr-paged-status",title:"\u70B9\u51FB\u5DE6\u53F3\u7559\u767D\u6216\u6309\u65B9\u5411\u952E\u7FFB\u9875",children:[(0,br.jsx)("b",{children:I}),(0,br.jsx)("span",{children:"/"}),(0,br.jsx)("em",{children:b})]})]})}var hn=Mt(require("react"),1);var gs=Object.freeze([Object.freeze({id:"serif",label:"\u5B8B\u4F53 / Serif",stack:'"Songti SC", "Noto Serif SC", "Source Han Serif SC", "STSong", "SimSun", "\u5B8B\u4F53", Georgia, "Times New Roman", serif'}),Object.freeze({id:"sans",label:"\u9ED1\u4F53 / Sans",stack:'"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", "Segoe UI", system-ui, -apple-system, sans-serif'}),Object.freeze({id:"kai",label:"\u6977\u4F53 / Kai",stack:'"Kaiti SC", "STKaiti", "KaiTi", "\u6977\u4F53", "Noto Serif SC", "Songti SC", "SimSun", serif'}),Object.freeze({id:"system",label:"\u7CFB\u7EDF\u9ED8\u8BA4",stack:'system-ui, -apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif'})]),ms=Object.freeze([Object.freeze({value:400,label:"\u5E38\u89C4"}),Object.freeze({value:500,label:"\u4E2D\u7B49"}),Object.freeze({value:600,label:"\u52A0\u7C97"})]),fx=Object.freeze([Object.freeze({id:"scroll",label:"\u6EDA\u52A8"}),Object.freeze({id:"book",label:"\u6A2A\u7248"})]),Td=Object.freeze([Object.freeze({id:"slide",label:"\u6A2A\u5411\u6ED1\u9875",hint:"\u524D\u540E\u4E24\u9875\u8FDE\u7EED\u5E73\u79FB\u8854\u63A5\uFF0C\u4E0D\u6DE1\u51FA\u6B63\u6587"}),Object.freeze({id:"cover",label:"\u4E66\u9875\u8986\u76D6",hint:"\u65B0\u9875\u4ECE\u53F3\u4FA7\u8986\u76D6\u9759\u6B62\u5E95\u9875\uFF0C\u56DE\u7FFB\u65F6\u63ED\u5F00\u5F53\u524D\u9875"}),Object.freeze({id:"flip",label:"3D \u4E66\u9875",hint:"\u4ECE\u53F3\u4E0B\u9875\u89D2\u5411\u4E66\u810A\u6298\u53E0\uFF0C\u5E26\u7EB8\u80CC\u4E0E\u52A8\u6001\u9634\u5F71"})]),Za=Object.freeze([Object.freeze({id:"paper",label:"\u7EB8\u5F20",bg:"#fbf7ee",ink:"#2b2a26",muted:"#736f64",border:"rgba(43, 42, 38, 0.15)",accent:"#9a6b2f"}),Object.freeze({id:"white",label:"\u767D\u8272",bg:"#ffffff",ink:"#1f2328",muted:"#5c6370",border:"rgba(31, 35, 40, 0.13)",accent:"#3f5ce0"}),Object.freeze({id:"sepia",label:"\u7F8A\u76AE\u7EB8",bg:"#f2e6cf",ink:"#453322",muted:"#715f47",border:"rgba(69, 51, 34, 0.18)",accent:"#8f5a24"}),Object.freeze({id:"green",label:"\u62A4\u773C\u7EFF",bg:"#e3efe4",ink:"#263a2b",muted:"#556b5a",border:"rgba(38, 58, 43, 0.17)",accent:"#3d6a47"}),Object.freeze({id:"night",label:"\u591C\u95F4",bg:"#1c1e22",ink:"#e9e6dd",muted:"#a6a29a",border:"rgba(233, 230, 221, 0.16)",accent:"#d2a76b"}),Object.freeze({id:"custom",label:"\u81EA\u5B9A\u4E49"})]),Yt=Object.freeze({fontSize:18,lineHeight:1.85,fontFamily:"serif",fontWeight:400,contentWidth:760,tocWidth:260,readingMode:"scroll",pageAnimation:"slide",bookAnimation:"slide",brightness:1,backgroundPreset:"paper",customBackground:"#fbf7ee",textTone:"auto",backgroundImageKey:"",backgroundImageOpacity:.26,backgroundImageBlur:0}),Pe=Object.freeze({fontSize:Object.freeze({min:13,max:34,step:1}),lineHeight:Object.freeze({min:1.35,max:2.4,step:.05}),contentWidth:Object.freeze({min:520,max:1600,step:20}),tocWidth:Object.freeze({min:180,max:520,step:10}),brightness:Object.freeze({min:.6,max:1.2,step:.01}),backgroundImageOpacity:Object.freeze({min:0,max:.8,step:.01}),backgroundImageBlur:Object.freeze({min:0,max:12,step:1})}),Uo=Object.freeze(ms.map(t=>t.value)),Jp=Object.freeze(Za.map(t=>t.id)),ef=new Map(Za.map(t=>[t.id,t])),yd=new Map(gs.map(t=>[t.id,t])),tf=Object.freeze(["auto","dark","light"]),us=Object.freeze({ink:"#181511",muted:"#6b6559",border:"rgba(32, 29, 24, 0.15)",tone:"dark"}),ps=Object.freeze({ink:"#f8f5ec",muted:"#b3ada0",border:"rgba(245, 242, 233, 0.18)",tone:"light"}),rf="#8a5a24",nf="#d8b06a",wd=Object.freeze({white:"#ffffff",black:"#000000",red:"#ff0000",lime:"#00ff00",blue:"#0000ff",yellow:"#ffff00",aqua:"#00ffff",cyan:"#00ffff",fuchsia:"#ff00ff",magenta:"#ff00ff",silver:"#c0c0c0",gray:"#808080",grey:"#808080",maroon:"#800000",olive:"#808000",green:"#008000",purple:"#800080",teal:"#008080",navy:"#000080",orange:"#ffa500",pink:"#ffc0cb",brown:"#a52a2a",gold:"#ffd700",beige:"#f5f5dc",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",turquoise:"#40e0d0",salmon:"#fa8072",coral:"#ff7f50",indigo:"#4b0082",violet:"#ee82ee",wheat:"#f5deb3",tan:"#d2b48c",snow:"#fffafa",linen:"#faf0e6"});function ho(t){return Math.max(0,Math.min(255,Math.round(t)))}function of(t){let e=t.slice(1);if(!/^[0-9a-f]+$/iu.test(e))return null;if(e.length===3||e.length===4){let[r,n,o]=e.slice(0,3).split("").map(i=>Number.parseInt(`${i}${i}`,16));return{r,g:n,b:o}}return e.length===6||e.length===8?{r:Number.parseInt(e.slice(0,2),16),g:Number.parseInt(e.slice(2,4),16),b:Number.parseInt(e.slice(4,6),16)}:null}function af(t){let e=/^([+-]?(?:\d+\.?\d*|\.\d+))(%?)$/u.exec(t);if(!e)return null;let r=Number(e[1]);return Number.isFinite(r)?(e[2]==="%"&&(r=r/100*255),ho(r)):null}function sf(t){let e=t.replace(/\//gu," ").split(/[\s,]+/u).filter(Boolean);if(e.length<3)return null;let r=e.slice(0,3).map(af);return r.some(n=>n===null)?null:{r:r[0],g:r[1],b:r[2]}}function ds(t,e,r){let n=r;return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function lf(t){let e=t.replace(/\//gu," ").split(/[\s,]+/u).filter(Boolean);if(e.length<3)return null;let r=Number.parseFloat(e[0]),n=Number.parseFloat(e[1]),o=Number.parseFloat(e[2]);if(![r,n,o].every(Number.isFinite))return null;let i=Math.max(0,Math.min(100,n))/100,a=Math.max(0,Math.min(100,o))/100,s=(r%360+360)%360/360;if(i===0){let f=ho(a*255);return{r:f,g:f,b:f}}let l=a<.5?a*(1+i):a+i-a*i,d=2*a-l;return{r:ho(ds(d,l,s+1/3)*255),g:ho(ds(d,l,s)*255),b:ho(ds(d,l,s-1/3)*255)}}function Ka(t){if(typeof t!="string")return null;let e=t.trim().toLowerCase();if(!e)return null;if(e.startsWith("#"))return of(e);if(e in wd)return Ka(wd[e]);let r=/^([a-z]+)\((.*)\)$/u.exec(e);if(!r)return null;let n=r[1],o=r[2];return n==="rgb"||n==="rgba"?sf(o):n==="hsl"||n==="hsla"?lf(o):null}function _d({r:t,g:e,b:r}){return`#${[t,e,r].map(n=>ho(n).toString(16).padStart(2,"0")).join("")}`}function hs(t){let e=t/255;return e<=.03928?e/12.92:((e+.055)/1.055)**2.4}function kd(t){let e=Ka(t);return e?.2126*hs(e.r)+.7152*hs(e.g)+.0722*hs(e.b):1}function Ya(t,e){let r=kd(t),n=kd(e),o=Math.max(r,n),i=Math.min(r,n);return(o+.05)/(i+.05)}function bs(t,e="#ffffff"){let r=Ka(t);if(r)return _d(r);let n=Ka(e);return n?_d(n):"#ffffff"}function fs(t){let e=Ya(us.ink,t);return Ya(ps.ink,t)>e?{...ps}:{...us}}function Qa(t){let e=fs(t);return{ink:e.ink,muted:e.muted,border:e.border}}function Br(t,e,r,n){let o=Number(t);return Number.isFinite(o)?Math.max(e,Math.min(r,o)):n}function cf(t){return Jp.includes(t)?t:"paper"}function df(t){return tf.includes(t)?t:"auto"}function hf(t){let e=Number(t);if(!Number.isFinite(e))return 400;let r=Math.max(Uo[0],Math.min(Uo[Uo.length-1],e)),n=Uo[0],o=Number.POSITIVE_INFINITY;for(let i of Uo){let a=Math.abs(i-r);a<o&&(n=i,o=a)}return n}function uf(t){return(yd.get(t)||yd.get("serif")).stack}function pf(t){return t>=600?700:600}function xs(t){let e=t&&typeof t=="object"?t:{},r=cf(e.backgroundPreset),n=bs(e.customBackground,Yt.customBackground),o=r==="custom"?null:ef.get(r),i=o?o.bg:n,a=fs(i);o&&(a={ink:o.ink,muted:o.muted,border:o.border});let s=df(e.textTone);s==="dark"?a={...us}:s==="light"&&(a={...ps});let l=o?o.accent:fs(i).tone==="light"?nf:rf,d=hf(e.fontWeight);return{preset:r,bg:i,ink:a.ink,muted:a.muted,border:a.border,accent:l,fontFamily:uf(e.fontFamily),fontWeight:d,headingWeight:pf(d),width:Br(e.contentWidth,Pe.contentWidth.min,Pe.contentWidth.max,Yt.contentWidth),brightness:Br(e.brightness,Pe.brightness.min,Pe.brightness.max,Yt.brightness),imageOpacity:Br(e.backgroundImageOpacity,Pe.backgroundImageOpacity.min,Pe.backgroundImageOpacity.max,Yt.backgroundImageOpacity),imageBlur:Br(e.backgroundImageBlur,Pe.backgroundImageBlur.min,Pe.backgroundImageBlur.max,Yt.backgroundImageBlur)}}function ff(t){return`url("${String(t).replace(/[\n\r\f]/gu," ").replace(/\\/gu,"\\\\").replace(/"/gu,'\\"')}")`}function Ja(t,e){let r=xs(t),n=typeof e=="string"&&e.trim()?ff(e.trim()):"none";return{"--dshr-reader-bg":r.bg,"--dshr-reader-ink":r.ink,"--dshr-reader-muted":r.muted,"--dshr-reader-border":r.border,"--dshr-reader-accent":r.accent,"--dshr-reader-font":r.fontFamily,"--dshr-reader-weight":String(r.fontWeight),"--dshr-reader-heading-weight":String(r.headingWeight),"--dshr-reader-width":`${r.width}px`,"--dshr-reader-brightness":String(r.brightness),"--dshr-reader-image-opacity":String(r.imageOpacity),"--dshr-reader-image-blur":`${r.imageBlur}px`,"--dshr-reader-image":n}}var vs=String.raw`
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
`;var q=require("react/jsx-runtime");function uo({size:t=15,children:e,viewBox:r="0 0 24 24"}){return(0,q.jsx)("svg",{width:t,height:t,viewBox:r,fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:e})}function gf(t){return(0,q.jsx)(uo,{...t,children:(0,q.jsx)("path",{d:"m6 6 12 12M18 6 6 18"})})}function mf(t){return(0,q.jsxs)(uo,{...t,children:[(0,q.jsx)("rect",{x:"3",y:"4.5",width:"18",height:"15",rx:"2.4"}),(0,q.jsx)("circle",{cx:"8.4",cy:"9.6",r:"1.5"}),(0,q.jsx)("path",{d:"m4 17 4.6-4.4a1.6 1.6 0 0 1 2.2 0l2.5 2.4 2.1-2a1.6 1.6 0 0 1 2.2 0L20 15.6"})]})}function bf(t){return(0,q.jsxs)(uo,{...t,children:[(0,q.jsx)("path",{d:"M12 16V4"}),(0,q.jsx)("path",{d:"m7 9 5-5 5 5"}),(0,q.jsx)("path",{d:"M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15"})]})}function xf(t){return(0,q.jsxs)(uo,{...t,children:[(0,q.jsx)("path",{d:"M4 7h16M9 7V5h6v2M7 7l.7 12.2A1.8 1.8 0 0 0 9.5 21h5a1.8 1.8 0 0 0 1.8-1.8L17 7"}),(0,q.jsx)("path",{d:"M10 11v6M14 11v6"})]})}function vf(t){return(0,q.jsxs)(uo,{...t,children:[(0,q.jsx)("path",{d:"M20 11a8 8 0 1 0-2.3 6.3"}),(0,q.jsx)("path",{d:"M20 4v7h-7"})]})}function Sd(t){return(0,q.jsx)(uo,{...t,children:(0,q.jsx)("path",{d:"m5 12 4.5 4.5L19 7"})})}var yf=Object.freeze([{id:"auto",label:"\u81EA\u52A8"},{id:"dark",label:"\u6DF1\u8272\u5B57"},{id:"light",label:"\u6D45\u8272\u5B57"}]),wf=Object.freeze(["fontSize","lineHeight","fontFamily","fontWeight","contentWidth","tocWidth","brightness","backgroundPreset","customBackground","textTone","backgroundImageOpacity","backgroundImageBlur"]),_f='button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';function Ed({label:t,value:e,options:r,onChange:n}){return(0,q.jsx)("div",{className:"dshr-appearance-segmented",role:"group","aria-label":t,children:r.map(o=>{let i=o.value!==void 0?o.value:o.id;return(0,q.jsx)("button",{type:"button",className:"dshr-appearance-segmented__item","aria-pressed":e===i,onClick:()=>n(i),children:o.label},String(i))})})}function Un({label:t,valueText:e,min:r,max:n,step:o,value:i,onChange:a,disabled:s,hint:l}){return(0,q.jsxs)("label",{className:`dshr-appearance-slider${s?" is-disabled":""}`,children:[(0,q.jsxs)("span",{className:"dshr-appearance-slider__head",children:[(0,q.jsx)("span",{children:t}),(0,q.jsx)("span",{className:"dshr-appearance-slider__value",children:e})]}),(0,q.jsx)("input",{type:"range",min:r,max:n,step:o,value:i,disabled:s,onChange:d=>a(Number(d.target.value)),"aria-label":t}),l?(0,q.jsx)("span",{className:"dshr-appearance-slider__hint",children:l}):null]})}function Ad({open:t,settings:e,backgroundImageUrl:r,onChange:n,onPickBackgroundImage:o,onClearBackgroundImage:i,onClose:a}){let s=hn.default.useRef(null),l=hn.default.useId(),[d,f]=hn.default.useState(!1),g=xs(e),u=!!r,p=bs(e.customBackground,Yt.customBackground),_=Qa(p).ink,N=Ya(g.ink,g.bg),y=Br(e.fontSize,Pe.fontSize.min,Pe.fontSize.max,Yt.fontSize),P=Br(e.lineHeight,Pe.lineHeight.min,Pe.lineHeight.max,Yt.lineHeight),w=!u&&wf.every(F=>e[F]===Yt[F]),v=hn.default.useCallback(F=>{typeof n=="function"&&n({...e,...F})},[n,e]);if(hn.default.useEffect(()=>{if(!t)return;let F=L=>{L.key==="Escape"&&(L.preventDefault(),a?.())};return window.addEventListener("keydown",F),()=>window.removeEventListener("keydown",F)},[t,a]),hn.default.useEffect(()=>{if(!t)return;let F=typeof document<"u"?document.activeElement:null,L=window.requestAnimationFrame(()=>{s.current?.focus({preventScroll:!0})});return()=>{window.cancelAnimationFrame(L),F instanceof HTMLElement&&F.isConnected&&F.focus({preventScroll:!0})}},[t]),hn.default.useEffect(()=>{if(!t){f(!1);return}},[t]),hn.default.useEffect(()=>{if(!d)return;let F=window.setTimeout(()=>f(!1),3200);return()=>window.clearTimeout(F)},[d]),!t)return null;let S=F=>{F.target===F.currentTarget&&a?.()},C=F=>{if(F.key!=="Tab"||!s.current)return;let L=[...s.current.querySelectorAll(_f)].filter(ne=>ne.offsetParent!==null||ne===document.activeElement);if(L.length===0)return;let z=L[0],B=L[L.length-1],Y=document.activeElement;F.shiftKey&&(Y===z||!s.current.contains(Y))?(F.preventDefault(),B.focus()):!F.shiftKey&&Y===B&&(F.preventDefault(),z.focus())},E=()=>{if(!d){f(!0);return}f(!1),u&&i?.(),n?.({...e,...Yt})},I={...Ja(e,r),fontSize:`${Math.min(16,Math.max(12,Math.round(y*.8)))}px`,lineHeight:String(P)},b=N>=4.5;return(0,q.jsx)("div",{className:"dshr-appearance-mask",onMouseDown:S,children:(0,q.jsxs)("aside",{className:"dshr-appearance-panel",role:"dialog","aria-modal":"true","aria-labelledby":l,tabIndex:-1,ref:s,onKeyDown:C,children:[(0,q.jsxs)("header",{className:"dshr-appearance-head",children:[(0,q.jsxs)("div",{className:"dshr-appearance-head__text",children:[(0,q.jsx)("strong",{id:l,children:"\u9605\u8BFB\u5916\u89C2"}),(0,q.jsx)("span",{children:"\u8C03\u6574\u6392\u7248\u3001\u5B57\u4F53\u4E0E\u80CC\u666F \xB7 \u4EC5\u4FDD\u5B58\u5728\u672C\u673A"})]}),(0,q.jsx)("button",{type:"button",className:"dshr-appearance-close",onClick:a,"aria-label":"\u5173\u95ED\u5916\u89C2\u8BBE\u7F6E",children:(0,q.jsx)(gf,{size:16})})]}),(0,q.jsxs)("div",{className:"dshr-appearance-body",children:[(0,q.jsxs)("div",{className:"dshr-appearance-preview",style:I,"aria-hidden":"true",children:[(0,q.jsx)("span",{className:"dshr-appearance-preview__badge",children:"\u5B9E\u65F6\u9884\u89C8"}),(0,q.jsxs)("div",{className:"dshr-appearance-preview__inner",children:[(0,q.jsx)("span",{className:"dshr-appearance-preview__kicker",children:"\u7B2C 1 \u7AE0"}),(0,q.jsx)("p",{className:"dshr-appearance-preview__title",children:"\u5C71\u5C45\u79CB\u669D"}),(0,q.jsx)("p",{className:"dshr-appearance-preview__text",children:"\u7A7A\u5C71\u65B0\u96E8\u540E\uFF0C\u5929\u6C14\u665A\u6765\u79CB\u3002\u660E\u6708\u677E\u95F4\u7167\uFF0C\u6E05\u6CC9\u77F3\u4E0A\u6D41\u3002"}),(0,q.jsx)("p",{className:"dshr-appearance-preview__quote",children:"\u7AF9\u55A7\u5F52\u6D63\u5973\uFF0C\u83B2\u52A8\u4E0B\u6E14\u821F\u3002"})]})]}),(0,q.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-bg`,children:[(0,q.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-bg`,children:"\u80CC\u666F"}),(0,q.jsx)("div",{className:"dshr-appearance-swatches",role:"group","aria-label":"\u80CC\u666F\u9884\u8BBE",children:Za.map(F=>{let L=F.id==="custom"?p:F.bg,z=F.id==="custom"?_:F.ink,B=g.preset===F.id;return(0,q.jsxs)("button",{type:"button",className:`dshr-appearance-swatch${B?" is-active":""}`,"aria-pressed":B,onClick:()=>v({backgroundPreset:F.id}),children:[(0,q.jsx)("span",{className:"dshr-appearance-swatch__chip",style:{background:L,color:z},children:"\u6587"}),(0,q.jsx)("span",{className:"dshr-appearance-swatch__label",children:F.label})]},F.id)})}),(0,q.jsxs)("label",{className:"dshr-appearance-colorrow",children:[(0,q.jsx)("span",{children:"\u81EA\u5B9A\u4E49\u989C\u8272"}),(0,q.jsxs)("span",{className:"dshr-appearance-colorrow__control",children:[(0,q.jsx)("input",{type:"color",className:"dshr-appearance-color",value:p,"aria-label":"\u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272",onChange:F=>v({backgroundPreset:"custom",customBackground:F.target.value})}),(0,q.jsx)("code",{className:"dshr-appearance-colorrow__hex",children:p.toUpperCase()})]})]}),(0,q.jsxs)("div",{className:"dshr-appearance-field",children:[(0,q.jsxs)("div",{className:"dshr-appearance-field__head",children:[(0,q.jsx)("span",{children:"\u6587\u5B57\u8272\u8C03"}),(0,q.jsxs)("span",{className:`dshr-appearance-field__value${b?"":" is-warning"}`,children:["\u5BF9\u6BD4\u5EA6 ",N.toFixed(1),":1"]})]}),(0,q.jsx)(Ed,{label:"\u6587\u5B57\u8272\u8C03",value:e.textTone==="dark"||e.textTone==="light"?e.textTone:"auto",options:yf,onChange:F=>v({textTone:F})}),(0,q.jsxs)("p",{className:"dshr-appearance-hint",children:[b?"\u81EA\u52A8\u6A21\u5F0F\u4F1A\u6309\u80CC\u666F\u4EAE\u5EA6\u9009\u62E9\u6DF1\u8272\u6216\u6D45\u8272\u6587\u5B57\u3002":"\u5F53\u524D\u6587\u5B57\u4E0E\u80CC\u666F\u5BF9\u6BD4\u5EA6\u504F\u4F4E\uFF0C\u5EFA\u8BAE\u6539\u9009\u5176\u5B83\u80CC\u666F\u6216\u6587\u5B57\u8272\u8C03\u3002",u?" \u80CC\u666F\u56FE\u7247\u4F1A\u8FDB\u4E00\u6B65\u5F71\u54CD\u5B9E\u9645\u53EF\u8BFB\u6027\u3002":""]})]})]}),(0,q.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-image`,children:[(0,q.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-image`,children:"\u80CC\u666F\u56FE\u7247"}),(0,q.jsxs)("div",{className:"dshr-appearance-image",children:[(0,q.jsx)("span",{className:`dshr-appearance-image__thumb${u?" has-image":""}`,children:u?(0,q.jsx)("img",{src:r,alt:""}):(0,q.jsx)(mf,{size:20})}),(0,q.jsxs)("div",{className:"dshr-appearance-image__meta",children:[(0,q.jsx)("strong",{children:u?"\u5DF2\u9009\u62E9\u80CC\u666F\u56FE\u7247":"\u672A\u9009\u62E9\u80CC\u666F\u56FE\u7247"}),(0,q.jsx)("span",{children:"\u4F5C\u4E3A\u6587\u5B57\u4E0B\u65B9\u7684\u886C\u5E95\uFF0C\u4EC5\u4FDD\u5B58\u5728\u672C\u673A\u3002"})]}),(0,q.jsxs)("div",{className:"dshr-appearance-image__actions",children:[(0,q.jsxs)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--soft dshr-appearance-btn--sm",onClick:o,children:[u?(0,q.jsx)(Sd,{size:13}):(0,q.jsx)(bf,{size:13}),u?"\u66F4\u6362":"\u9009\u62E9\u56FE\u7247"]}),u?(0,q.jsxs)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--ghost dshr-appearance-btn--sm",onClick:i,children:[(0,q.jsx)(xf,{size:13})," \u79FB\u9664"]}):null]})]}),(0,q.jsx)(Un,{label:"\u56FE\u7247\u4E0D\u900F\u660E\u5EA6",valueText:`${Math.round(Br(e.backgroundImageOpacity,Pe.backgroundImageOpacity.min,Pe.backgroundImageOpacity.max,Yt.backgroundImageOpacity)*100)}%`,min:Pe.backgroundImageOpacity.min,max:Pe.backgroundImageOpacity.max,step:Pe.backgroundImageOpacity.step,value:Br(e.backgroundImageOpacity,Pe.backgroundImageOpacity.min,Pe.backgroundImageOpacity.max,Yt.backgroundImageOpacity),disabled:!u,onChange:F=>v({backgroundImageOpacity:F})}),(0,q.jsx)(Un,{label:"\u56FE\u7247\u6A21\u7CCA",valueText:`${Math.round(g.imageBlur)}px`,min:Pe.backgroundImageBlur.min,max:Pe.backgroundImageBlur.max,step:Pe.backgroundImageBlur.step,value:g.imageBlur,disabled:!u,onChange:F=>v({backgroundImageBlur:F})}),(0,q.jsx)(Un,{label:"\u9605\u8BFB\u4EAE\u5EA6",valueText:`${Math.round(g.brightness*100)}%`,min:Pe.brightness.min,max:Pe.brightness.max,step:Pe.brightness.step,value:g.brightness,onChange:F=>v({brightness:F})}),(0,q.jsx)("p",{className:"dshr-appearance-hint",children:"\u8C03\u4F4E\u4EAE\u5EA6\u53EF\u51CF\u5C11\u591C\u95F4\u5C4F\u5E55\u523A\u6FC0\uFF1B\u53EA\u5F71\u54CD\u6B63\u6587/PDF \u9605\u8BFB\u533A\uFF0C\u4E0D\u5F71\u54CD\u5DE5\u5177\u680F\u4E0E\u6279\u6CE8\u9762\u677F\u3002"})]}),(0,q.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-type`,children:[(0,q.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-type`,children:"\u5B57\u4F53"}),(0,q.jsx)("div",{className:"dshr-appearance-families",role:"group","aria-label":"\u5B57\u4F53",children:gs.map(F=>(0,q.jsx)("button",{type:"button",className:"dshr-appearance-family",style:{fontFamily:F.stack},"aria-pressed":g.fontFamily===F.stack,onClick:()=>v({fontFamily:F.id}),title:F.label,children:F.label},F.id))}),(0,q.jsxs)("div",{className:"dshr-appearance-field",children:[(0,q.jsx)("div",{className:"dshr-appearance-field__head",children:(0,q.jsx)("span",{children:"\u5B57\u91CD"})}),(0,q.jsx)(Ed,{label:"\u5B57\u91CD",value:g.fontWeight,options:ms.map(F=>({value:F.value,label:F.label})),onChange:F=>v({fontWeight:F})})]}),(0,q.jsx)(Un,{label:"\u5B57\u53F7",valueText:`${y}px`,min:Pe.fontSize.min,max:Pe.fontSize.max,step:Pe.fontSize.step,value:y,onChange:F=>v({fontSize:F})}),(0,q.jsx)(Un,{label:"\u884C\u9AD8",valueText:P.toFixed(2),min:Pe.lineHeight.min,max:Pe.lineHeight.max,step:Pe.lineHeight.step,value:P,onChange:F=>v({lineHeight:Math.round(F*100)/100})})]}),(0,q.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-layout`,children:[(0,q.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-layout`,children:"\u7248\u5F0F"}),(0,q.jsx)(Un,{label:"\u9605\u8BFB\u5BBD\u5EA6",valueText:`${Math.round(g.width)}px`,min:Pe.contentWidth.min,max:Pe.contentWidth.max,step:Pe.contentWidth.step,value:g.width,onChange:F=>v({contentWidth:F})}),(0,q.jsx)(Un,{label:"\u76EE\u5F55\u5BBD\u5EA6",valueText:`${Math.round(Br(e.tocWidth,Pe.tocWidth.min,Pe.tocWidth.max,Yt.tocWidth))}px`,min:Pe.tocWidth.min,max:Pe.tocWidth.max,step:Pe.tocWidth.step,value:Br(e.tocWidth,Pe.tocWidth.min,Pe.tocWidth.max,Yt.tocWidth),onChange:F=>v({tocWidth:F})}),(0,q.jsx)("p",{className:"dshr-appearance-hint",children:"\u63A7\u5236\u6B63\u6587\u6700\u5927\u5BBD\u5EA6\uFF1B\u76EE\u5F55\u5BBD\u5EA6\u53EF\u5728\u8FD9\u91CC\u8C03\uFF0C\u4E5F\u53EF\u4EE5\u62D6\u52A8\u76EE\u5F55\u53F3\u8FB9\u7F18\u3002\u76EE\u5F55\u6807\u9898\u4F1A\u5B8C\u6574\u6362\u884C\u663E\u793A\u3002"})]})]}),(0,q.jsxs)("footer",{className:"dshr-appearance-foot",children:[(0,q.jsxs)("button",{type:"button",className:`dshr-appearance-btn dshr-appearance-btn--ghost${d?" dshr-appearance-btn--danger":""}`,onClick:E,disabled:w&&!d,title:w?"\u5F53\u524D\u5DF2\u662F\u9ED8\u8BA4\u5916\u89C2":"\u6062\u590D\u9ED8\u8BA4\u5916\u89C2",children:[d?(0,q.jsx)(Sd,{size:14}):(0,q.jsx)(vf,{size:14}),d?"\u786E\u8BA4\u6062\u590D\uFF1F":"\u6062\u590D\u9ED8\u8BA4"]}),(0,q.jsx)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--primary",onClick:a,children:"\u5B8C\u6210"})]})]})})}var ei=Mt(require("react"),1);var we=require("react/jsx-runtime"),kf={highlight:Dn,underline:Ra,note:wn},Tf=[{id:"all",label:"\u5168\u90E8"},...io.map(t=>({id:t.id,label:t.label}))];function Sf(t){let e=Number(t);if(!Number.isFinite(e)||e<=0)return"";try{return new Date(e).toLocaleDateString("zh-CN",{month:"numeric",day:"numeric"})}catch{return""}}function Ef(t){let e=new Map,r=t&&Array.isArray(t.chapters)?t.chapters:[];for(let n=0;n<r.length;n+=1){let o=r[n];o&&o.id!=null&&e.set(String(o.id),{index:n,title:o.title||""})}return e}function Nd(t){return t?t.kind==="pdf"?!0:t.kind==="flow"?!1:Array.isArray(t.rects)&&!Array.isArray(t.ranges):!1}function Cd(t,e){if(!t)return null;if(t.chapterId!=null){let r=e.get(String(t.chapterId));if(r)return r}if(Number.isInteger(Number(t.chapterIndex))&&Number(t.chapterIndex)>=0){let r=Number(t.chapterIndex),o=(e.size>0?[...e.values()]:[]).find(i=>i.index===r);return{index:r,title:o?o.title:""}}return null}function Af(t,e,r){let n=(Array.isArray(t)?t:[]).filter(a=>!(!a||r!=="all"&&a.style!==r)),o=new Map;for(let a=0;a<n.length;a+=1){let s=n[a],l=Nd(s),d,f,g;if(l){let u=Number(s.page),p=Number.isInteger(u)&&u>0;d=`pdf:${p?u:"unknown"}`,f=p?1e4+u:999999,g=p?`\u7B2C ${u} \u9875`:"PDF \u9875\u9762"}else{let u=Cd(s,e),p=u?u.index:null;d=`flow:${p??"unknown"}`,f=p??99999,g=p==null?"\u6B63\u6587":`\u7B2C ${p+1} \u7AE0${u&&u.title?` \xB7 ${u.title}`:""}`}o.has(d)||o.set(d,{key:d,order:f,title:g,items:[]}),o.get(d).items.push(s)}let i=[...o.values()];i.sort((a,s)=>a.order-s.order);for(let a=0;a<i.length;a+=1)i[a].items.sort((l,d)=>{let f=Array.isArray(l.ranges)&&l.ranges[0]&&l.ranges[0].start||0,g=Array.isArray(d.ranges)&&d.ranges[0]&&d.ranges[0].start||0;return f!==g?f-g:(Number(l.createdAt)||0)-(Number(d.createdAt)||0)});return i}function Nf({hasAny:t,filter:e}){return t?(0,we.jsxs)("div",{className:"dshr-anno-panel__empty",children:[(0,we.jsx)("p",{className:"dshr-anno-panel__empty-title",children:"\u6CA1\u6709\u5339\u914D\u7684\u6807\u6CE8"}),(0,we.jsxs)("p",{className:"dshr-anno-panel__empty-text",children:["\u5F53\u524D\u7B5B\u9009\u662F\u300C",e==="all"?"\u5168\u90E8":qi(e),"\u300D\uFF0C\u5207\u6362\u7B5B\u9009\u770B\u770B\u5176\u4F59\u6807\u6CE8\u3002"]})]}):(0,we.jsxs)("div",{className:"dshr-anno-panel__empty",children:[(0,we.jsx)("span",{className:"dshr-anno-panel__empty-mark","aria-hidden":"true",children:(0,we.jsx)(Cc,{size:44})}),(0,we.jsx)("p",{className:"dshr-anno-panel__empty-title",children:"\u8FD8\u6CA1\u6709\u4EFB\u4F55\u6807\u6CE8"}),(0,we.jsx)("p",{className:"dshr-anno-panel__empty-text",children:"\u5728\u9605\u8BFB\u65F6\u9009\u4E2D\u4E00\u6BB5\u6587\u5B57\uFF0C\u5C31\u53EF\u4EE5\u7528\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u6216\u4FBF\u7B7E\u628A\u5B83\u7559\u5728\u8FD9\u91CC\u3002"}),(0,we.jsxs)("ol",{className:"dshr-anno-panel__steps",children:[(0,we.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,we.jsx)("span",{className:"dshr-anno-panel__step-index",children:"1"})," \u9009\u4E2D\u6B63\u6587\u4E2D\u7684\u4E00\u6BB5\u6587\u5B57"]}),(0,we.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,we.jsx)("span",{className:"dshr-anno-panel__step-index",children:"2"})," \u9009\u62E9\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u6216\u4FBF\u7B7E"]}),(0,we.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,we.jsx)("span",{className:"dshr-anno-panel__step-index",children:"3"})," \u4E4B\u540E\u56DE\u5230\u8FD9\u91CC\u56DE\u770B\u3001\u8DF3\u8F6C"]})]}),(0,we.jsx)("p",{className:"dshr-anno-panel__hint",children:"PDF \u9875\u9762\u540C\u6837\u652F\u6301\uFF1A\u9009\u4E2D\u6587\u5B57\u540E\u70B9\u51FB\u300C\u6807\u6CE8\u300D\u5373\u53EF\u3002"})]})}function Id({open:t,annotations:e,book:r,onClose:n,onOpenAnnotation:o,onJump:i,onDelete:a}){let[s,l]=ei.default.useState("all"),d=ei.default.useMemo(()=>Ef(r),[r]);if(ei.default.useEffect(()=>{if(!t||typeof document>"u")return;let N=y=>{y.key!=="Escape"||typeof n!="function"||document.querySelector(".dshr-anno-composer")||(y.preventDefault(),n())};return document.addEventListener("keydown",N,!0),()=>document.removeEventListener("keydown",N,!0)},[n,t]),!t)return null;let f=(Array.isArray(e)?e:[]).filter(Boolean),g={all:f.length};for(let N=0;N<io.length;N+=1){let y=io[N].id;g[y]=f.filter(P=>P.style===y).length}let u=Af(f,d,s),p=s==="all"?f.length:f.filter(N=>N.style===s).length,_=(N,y)=>{typeof N=="function"&&N(y)};return(0,we.jsxs)("aside",{className:"dshr-anno-panel","aria-label":"\u6807\u6CE8\u7B14\u8BB0\u9762\u677F",children:[(0,we.jsxs)("header",{className:"dshr-anno-panel__head",children:[(0,we.jsxs)("div",{className:"dshr-anno-panel__titles",children:[(0,we.jsxs)("h3",{className:"dshr-anno-panel__title",children:["\u6807\u6CE8\u7B14\u8BB0",(0,we.jsx)("span",{className:"dshr-anno-panel__count",children:f.length})]}),(0,we.jsx)("span",{className:"dshr-anno-panel__sub",children:f.length>0?`${p} \u6761\u6807\u6CE8 \xB7 ${u.length} \u4E2A\u4F4D\u7F6E`:"\u9009\u4E2D\u6587\u5B57\u5373\u53EF\u6DFB\u52A0\u6807\u6CE8"})]}),(0,we.jsx)("button",{type:"button",className:"dshr-anno-panel__close","aria-label":"\u5173\u95ED\u6807\u6CE8\u9762\u677F",onClick:()=>_(n),children:(0,we.jsx)(Ma,{size:13})})]}),f.length>0?(0,we.jsx)("div",{className:"dshr-anno-panel__filters",role:"tablist","aria-label":"\u6309\u6837\u5F0F\u7B5B\u9009\u6807\u6CE8",children:Tf.map(N=>{let y=s===N.id,P=g[N.id]||0;return(0,we.jsxs)("button",{type:"button",role:"tab","aria-selected":y,className:`dshr-anno-panel__filter${y?" is-active":""}`,onClick:()=>l(N.id),children:[N.label,N.id==="all"?` ${P}`:P>0?` ${P}`:""]},N.id)})}):null,(0,we.jsx)("div",{className:"dshr-anno-panel__list",children:u.length===0?(0,we.jsx)(Nf,{hasAny:f.length>0,filter:s}):u.map(N=>(0,we.jsxs)("section",{className:"dshr-anno-panel__group",children:[(0,we.jsxs)("div",{className:"dshr-anno-panel__group-head",children:[(0,we.jsx)("span",{className:"dshr-anno-panel__group-title",title:N.title,children:N.title}),(0,we.jsx)("span",{className:"dshr-anno-panel__group-rule"}),(0,we.jsx)("span",{className:"dshr-anno-panel__group-count",children:N.items.length})]}),N.items.map(y=>{let P=y.style||"highlight",w=kf[P]||Dn,v=y.color||"#f5d76e",S=typeof y.quote=="string"?y.quote.trim():"",C=typeof y.note=="string"?y.note.trim():"",E=Cd(y,d),D=Nd(y)?Number(y.page)>0?`\u7B2C ${y.page} \u9875`:"PDF":E?`\u7B2C ${E.index+1} \u7AE0`:"\u6B63\u6587",I=Sf(y.updatedAt||y.createdAt);return(0,we.jsxs)("article",{className:"dshr-anno-item",style:{"--dshr-anno-color":v},"data-anno-id":y.id||void 0,children:[(0,we.jsxs)("button",{type:"button",className:"dshr-anno-item__main",onClick:()=>_(o,y.id),title:"\u7F16\u8F91\u8FD9\u6761\u6807\u6CE8",children:[(0,we.jsxs)("div",{className:"dshr-anno-item__meta",children:[(0,we.jsx)("span",{className:"dshr-anno-item__dot","aria-hidden":"true"}),(0,we.jsxs)("span",{className:"dshr-anno-item__style",children:[(0,we.jsx)(w,{size:12})," ",qi(P)]}),(0,we.jsx)("span",{className:"dshr-anno-item__sep","aria-hidden":"true",children:"\xB7"}),(0,we.jsx)("span",{className:"dshr-anno-item__location",children:D}),(0,we.jsx)("span",{className:"dshr-anno-item__spacer"}),I?(0,we.jsx)("span",{children:I}):null]}),(0,we.jsx)("p",{className:"dshr-anno-item__quote",children:S||C||"\uFF08\u672A\u8BB0\u5F55\u9009\u4E2D\u6587\u5B57\uFF09"}),C&&C!==S?(0,we.jsx)("p",{className:"dshr-anno-item__note",children:C}):null]}),(0,we.jsxs)("div",{className:"dshr-anno-item__actions",children:[(0,we.jsx)("button",{type:"button",className:"dshr-anno-item__action dshr-anno-item__action--jump",onClick:()=>_(i,y),title:"\u8DF3\u8F6C\u5230\u8FD9\u6761\u6807\u6CE8\u7684\u4F4D\u7F6E",children:"\u5B9A\u4F4D"}),(0,we.jsx)("span",{className:"dshr-anno-item__spacer"}),(0,we.jsx)("button",{type:"button",className:"dshr-anno-item__action dshr-anno-item__action--danger",onClick:()=>_(a,y),title:"\u5220\u9664\u8FD9\u6761\u6807\u6CE8",children:"\u5220\u9664"})]})]},y.id||`${N.key}:${S}`)})]},N.key))})]})}var Vr=Mt(require("react"),1);var Ie=require("react/jsx-runtime"),Rd={highlight:Dn,underline:Ra,note:wn},Cf={highlight:"\u7528\u534A\u900F\u660E\u7684\u8272\u5E26\u8986\u76D6\u9009\u4E2D\u6587\u5B57\uFF0C\u53EF\u8C03\u7B14\u89E6\u7C97\u7EC6\u3002",underline:"\u5728\u9009\u4E2D\u6587\u5B57\u4E0B\u65B9\u753B\u4E00\u6761\u624B\u5199\u5F0F\u4E0B\u5212\u7EBF\u3002",note:"\u5728\u9009\u4E2D\u6587\u5B57\u65C1\u653E\u4E00\u679A\u4FBF\u7B7E\uFF0C\u8BB0\u5F55\u6B64\u523B\u7684\u60F3\u6CD5\u3002"},Md=2e3,ys=Oo[1].value;function ws(t){return t==="underline"?kc:_c}function Od(t){return Object.prototype.hasOwnProperty.call(ao,t)?t:"highlight"}function If(t){let e=Number(t);if(!Number.isFinite(e))return ys;let r=ys,n=1/0;for(let o=0;o<Oo.length;o+=1){let i=Oo[o].value,a=Math.abs(i-e);a<n&&(r=i,n=a)}return r}function Pd(t){let e=t&&typeof t=="object"?t:{},r=Od(e.style),n=ws(r),o=n.find(i=>i.value===e.color);return{style:r,color:o?o.value:typeof e.color=="string"&&e.color?e.color:n[0].value,width:If(e.width),note:typeof e.note=="string"?e.note:"",quote:typeof e.quote=="string"?e.quote:""}}function Rf(t,e){if(!t||typeof t!="object")return`${e}:empty`;let r=typeof t.quote=="string"?t.quote:"";return[e,t.id||"",r,Array.isArray(t.ranges)?t.ranges.length:0,t.page==null?"":t.page,t.chapterId==null?"":t.chapterId].join("|")}function Mf(t){return`${Math.round(2+(Number(t)||ys)*.34)}px`}function Ld({open:t,draft:e,mode:r,onClose:n,onSave:o,onDelete:i}){let a=r==="edit",[s,l]=Vr.default.useState(()=>Pd(e)),d=Vr.default.useRef(""),f=Vr.default.useRef(null);Vr.default.useEffect(()=>{if(!t){d.current="";return}let C=Rf(e,r);d.current!==C&&(d.current=C,l(Pd(e)))},[e,r,t]),Vr.default.useEffect(()=>{if(!t||typeof window>"u")return;let C=window.setTimeout(()=>{let E=f.current;if(E)try{E.focus({preventScroll:!0}),E.setSelectionRange(E.value.length,E.value.length)}catch{}},30);return()=>window.clearTimeout(C)},[t]);let g=Vr.default.useCallback(C=>{l(E=>({...E,...C}))},[]),u=Vr.default.useCallback(C=>{let E=Od(C);l(D=>{let I=ws(E),b=I.some(F=>F.value===D.color);return{...D,style:E,color:b?D.color:I[0].value}})},[]),p=Vr.default.useCallback(()=>{if(!s.note.trim()&&!s.quote.trim()&&s.style==="note")return;let E={...e&&typeof e=="object"?e:{},style:s.style,color:s.color,width:s.width,note:s.note,quote:s.quote};typeof o=="function"&&o(E)},[e,o,s]);if(Vr.default.useEffect(()=>{if(!t||typeof document>"u")return;let C=E=>{if(E.key==="Escape"){E.preventDefault(),E.stopImmediatePropagation(),typeof n=="function"&&n();return}E.key==="Enter"&&(E.metaKey||E.ctrlKey)&&(E.preventDefault(),E.stopImmediatePropagation(),p())};return document.addEventListener("keydown",C,!0),()=>document.removeEventListener("keydown",C,!0)},[p,n,t]),!t)return null;let _=ws(s.style),N=Rd[s.style]||Dn,y=s.quote.trim(),P=!!(s.note.trim()||y||s.style!=="note"),w=s.style==="note"?"\u4FBF\u7B7E\u5185\u5BB9":"\u5907\u6CE8",v=s.style==="note"?"\u5199\u4E0B\u8FD9\u6BB5\u6587\u5B57\u7ED9\u4F60\u7684\u60F3\u6CD5\u2026":"\u53EF\u9009\uFF1A\u4E3A\u8FD9\u6761\u6807\u6CE8\u5199\u4E00\u6761\u5907\u6CE8\u2026",S=s.style==="underline"?"\u4E0B\u5212\u7EBF\u989C\u8272":s.style==="note"?"\u4FBF\u7B7E\u989C\u8272":"\u8367\u5149\u7B14\u989C\u8272";return(0,Ie.jsx)("div",{className:"dshr-anno-composer-mask",role:"presentation",onMouseDown:C=>{C.target===C.currentTarget&&typeof n=="function"&&n()},children:(0,Ie.jsxs)("div",{className:"dshr-anno-composer",role:"dialog","aria-modal":"true","aria-label":a?"\u7F16\u8F91\u6807\u6CE8":"\u6DFB\u52A0\u6807\u6CE8",onMouseDown:C=>C.stopPropagation(),children:[(0,Ie.jsxs)("header",{className:"dshr-anno-composer__head",children:[(0,Ie.jsxs)("div",{className:"dshr-anno-composer__titles",children:[(0,Ie.jsx)("h3",{className:"dshr-anno-composer__title",children:a?"\u7F16\u8F91\u6807\u6CE8":"\u6DFB\u52A0\u6807\u6CE8"}),(0,Ie.jsx)("span",{className:"dshr-anno-composer__sub",children:Cf[s.style]})]}),(0,Ie.jsx)("button",{type:"button",className:"dshr-anno-composer__close","aria-label":"\u5173\u95ED\u6807\u6CE8\u7F16\u8F91\u5668",onClick:()=>{typeof n=="function"&&n()},children:(0,Ie.jsx)(Ma,{size:13})})]}),(0,Ie.jsxs)("div",{className:"dshr-anno-composer__body",children:[(0,Ie.jsx)("div",{className:"dshr-anno-composer__tabs",role:"tablist","aria-label":"\u6807\u6CE8\u6837\u5F0F",children:io.map(C=>{let E=Rd[C.id]||Dn,D=s.style===C.id;return(0,Ie.jsxs)("button",{type:"button",role:"tab","aria-selected":D,className:`dshr-anno-composer__tab${D?" is-active":""}`,onClick:()=>u(C.id),children:[(0,Ie.jsx)(E,{size:14})," ",C.label]},C.id)})}),(0,Ie.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Ie.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Ie.jsx)("span",{children:S}),(0,Ie.jsx)("em",{children:s.style==="underline"?"\u7EB8\u4E0A\u7684\u58A8\u8272":"\u534A\u900F\u660E\u7B14\u89E6"})]}),(0,Ie.jsx)("div",{className:"dshr-anno-composer__swatches",role:"radiogroup","aria-label":S,children:_.map(C=>{let E=s.color===C.value;return(0,Ie.jsx)("button",{type:"button",role:"radio","aria-checked":E,"aria-label":`${C.label}\u8272`,title:`${C.label}\u8272`,className:`dshr-anno-swatch${E?" is-active":""}`,style:{"--swatch":C.value},onClick:()=>g({color:C.value}),children:C.label},C.id)})})]}),s.style==="highlight"?(0,Ie.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Ie.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Ie.jsx)("span",{children:"\u7B14\u89E6\u7C97\u7EC6"}),(0,Ie.jsx)("em",{children:"\u7EC6 / \u4E2D / \u5BBD"})]}),(0,Ie.jsx)("div",{className:"dshr-anno-composer__widths",role:"radiogroup","aria-label":"\u7B14\u89E6\u7C97\u7EC6",children:Oo.map(C=>{let E=s.width===C.value;return(0,Ie.jsxs)("button",{type:"button",role:"radio","aria-checked":E,className:`dshr-anno-width${E?" is-active":""}`,onClick:()=>g({width:C.value}),children:[(0,Ie.jsx)("span",{className:"dshr-anno-width__bar",style:{height:Mf(C.value),background:s.color}}),C.label]},C.id)})})]}):null,(0,Ie.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Ie.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Ie.jsx)("span",{children:w}),(0,Ie.jsx)("em",{children:s.style==="note"?"\u53EF\u7559\u7A7A\uFF0C\u4EC5\u6807\u8BB0\u4F4D\u7F6E":"\u53EF\u9009"})]}),(0,Ie.jsx)("textarea",{ref:f,className:"dshr-anno-composer__textarea",value:s.note,maxLength:Md,placeholder:v,"aria-label":w,onChange:C=>g({note:C.target.value})}),(0,Ie.jsxs)("div",{className:"dshr-anno-composer__counter",children:[s.note.length," / ",Md]})]}),y?(0,Ie.jsxs)("div",{className:"dshr-anno-composer__quote",style:{"--dshr-anno-color":s.color},children:[(0,Ie.jsx)("span",{className:"dshr-anno-composer__quote-label",children:"\u9009\u4E2D\u6587\u5B57"}),(0,Ie.jsx)("p",{className:"dshr-anno-composer__quote-text",children:y})]}):null,(0,Ie.jsxs)("div",{className:`dshr-anno-composer__preview is-${s.style}`,style:{"--dshr-anno-color":s.color},children:[(0,Ie.jsx)("span",{className:"dshr-anno-composer__preview-label",children:"\u6548\u679C\u9884\u89C8"}),(0,Ie.jsx)("span",{className:"dshr-anno-composer__preview-text",children:y||"\u9009\u4E2D\u7684\u6587\u5B57\u4F1A\u8FD9\u6837\u663E\u793A"})]})]}),(0,Ie.jsxs)("footer",{className:"dshr-anno-composer__foot",children:[a?(0,Ie.jsx)("button",{type:"button",className:"dshr-anno-btn dshr-anno-btn--danger",onClick:()=>{typeof i=="function"&&i(e||{})},children:"\u5220\u9664"}):null,(0,Ie.jsx)("span",{className:"dshr-anno-composer__spacer"}),(0,Ie.jsx)("button",{type:"button",className:"dshr-anno-btn",onClick:()=>{typeof n=="function"&&n()},children:"\u53D6\u6D88"}),(0,Ie.jsx)("button",{type:"button",className:"dshr-anno-btn dshr-anno-btn--primary",disabled:!P,onClick:p,title:"Ctrl / \u2318 + Enter \u4FDD\u5B58",children:a?"\u4FDD\u5B58\u4FEE\u6539":"\u4FDD\u5B58\u6807\u6CE8"})]})]})})}var iu=360,su=520;function lu(t){try{return t.toDataURL("image/jpeg",.84)}catch{return""}}function lb(t){let e=Number(t.naturalWidth||t.width)||0,r=Number(t.naturalHeight||t.height)||0;if(!e||!r)return"";let n=Math.min(iu/e,su/r,1),o=document.createElement("canvas");o.width=Math.max(1,Math.round(e*n)),o.height=Math.max(1,Math.round(r*n));let i=o.getContext("2d");return i.fillStyle="#fbf7ee",i.fillRect(0,0,o.width,o.height),i.drawImage(t,0,0,o.width,o.height),lu(o)}function cb(t){return new Promise(e=>{let r=new Image;r.decoding="async",r.onload=()=>e(r),r.onerror=()=>e(null),r.src=t})}async function db(t){if(!t||!String(t.type||"").startsWith("image/"))return"";let e=URL.createObjectURL(t);try{let r=await cb(e);return r?lb(r):""}finally{URL.revokeObjectURL(e)}}async function hb(t,e){let r=await Ba(t,{signal:e}),n,o,i=()=>{o?.cancel(),r.close()};e?.addEventListener("abort",i,{once:!0});try{if(e?.aborted)throw qr();let a=await r.pdf.getPage(1);if(e?.aborted)throw qr();let s=a.getViewport({scale:1}),l=Math.min(iu/s.width,su/s.height,1.5),d=a.getViewport({scale:l});if(n=document.createElement("canvas"),n.width=Math.max(1,Math.round(d.width)),n.height=Math.max(1,Math.round(d.height)),o=a.render({canvas:n,viewport:d,background:"#ffffff"}),o.onContinue=f=>setTimeout(()=>{e?.aborted?o.cancel():f()},16),await o.promise,e?.aborted)throw qr();return lu(n)}finally{e?.removeEventListener("abort",i),await r.close(),n&&(n.width=0,n.height=0)}}async function cu(t,{signal:e}={}){if(e?.aborted)throw qr();if(!t?.blob)return{};let r=String(t.format||"").toLowerCase();try{if(r==="pdf"){let n=await hb(t.blob,e);return n?{cover:n}:{}}if(["epub","mobi","azw","azw3"].includes(r)){let{parseBook:n}=await Promise.resolve().then(()=>(cl(),ll)),o=/\.[a-z0-9]+$/iu.test(t.title||"")?t.title:`${t.title||"book"}.${r}`,i=await n(t.blob,{fileName:o,mime:t.blob.type});try{let a="";if(i.cover)try{let s=await fetch(i.cover);a=await db(await s.blob())}catch{a=""}return{...a?{cover:a}:{},...i.title?{title:i.title}:{},...i.author?{author:i.author}:{},...i.language?{language:i.language}:{}}}finally{i.dispose?.()}}}catch(n){if(e?.aborted)throw qr();console.warn("[dsh-reader] cover generation failed",t.title,n)}return{}}var V=require("react/jsx-runtime"),yi="dsh-reader:last-book:v1",dl="dsh-reader:session-book:v1",du=44;function hu(t){let e=/^#?([0-9a-f]{6})$/iu.exec(String(t||"").trim());if(!e)return null;let r=e[1];return{r:parseInt(r.slice(0,2),16),g:parseInt(r.slice(2,4),16),b:parseInt(r.slice(4,6),16)}}function ub(t,e,r){let n=hu(t),o=hu(e);if(!n||!o)return e;let i=Math.max(0,Math.min(1,r));return`#${wo(n.r*i+o.r*(1-i)).slice(1)}${wo(n.g*i+o.g*(1-i)).slice(1)}${wo(n.b*i+o.b*(1-i)).slice(1)}`}function wo(t){return`#${Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0")}`}function pb(t){let e=document.createElement("canvas");e.width=32,e.height=32;let r=e.getContext("2d",{willReadFrequently:!0});if(!r)return"";r.drawImage(t,0,0,e.width,e.height);let n;try{n=r.getImageData(0,0,e.width,e.height).data}catch{return""}let o=new Map;for(let a=0;a<n.length;a+=4){let s=n[a+3];if(s<40)continue;let l=n[a],d=n[a+1],f=n[a+2],g=`${l>>5}:${d>>5}:${f>>5}`,u=o.get(g);u||(u={count:0,r:0,g:0,b:0},o.set(g,u)),u.count+=s,u.r+=l*s,u.g+=d*s,u.b+=f*s}let i=null;for(let a of o.values())(!i||a.count>i.count)&&(i=a);return i?wo(i.r/i.count)+wo(i.g/i.count).slice(1)+wo(i.b/i.count).slice(1):""}function fb(t,e,r){return Math.max(e,Math.min(r,t))}var hl=class extends G.default.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,r){console.error("[dsh-reader]",e,r)}reset=()=>this.setState({error:null});render(){return this.state.error?(0,V.jsx)("div",{className:"dshr-root",children:(0,V.jsxs)("div",{className:"dshr-error-panel",children:[(0,V.jsx)("h3",{children:"\u9605\u8BFB\u5668\u9047\u5230\u4E86\u4E00\u4E2A\u95EE\u9898"}),(0,V.jsxs)("p",{children:[this.state.error?.message||"\u672A\u77E5\u9519\u8BEF","\u3002\u8FD9\u901A\u5E38\u662F\u6587\u6863\u683C\u5F0F\u6216\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u91CD\u65B0\u6253\u5F00\u6587\u6863\u901A\u5E38\u53EF\u4EE5\u6062\u590D\u3002"]}),(0,V.jsx)("div",{style:{display:"flex",gap:8,marginTop:14},children:(0,V.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:()=>{this.reset(),this.props.onReset?.()},children:"\u8FD4\u56DE\u4E66\u67B6"})})]})}):this.props.children}};function gb(){let[t,e]=G.default.useState(""),r=G.default.useRef(0),n=G.default.useCallback((o,i=2800)=>{window.clearTimeout(r.current),e(String(o)),r.current=window.setTimeout(()=>e(""),i)},[]);return G.default.useEffect(()=>()=>window.clearTimeout(r.current),[]),[t,n]}function uu(){let[t,e]=G.default.useState([]),[r,n]=G.default.useState([]),o=G.default.useRef(0),[i,a]=G.default.useState(!0),[s,l]=G.default.useState(!1),[d,f]=G.default.useState(!1),[g,u]=G.default.useState("all"),[p,_]=G.default.useState(null),[N,y]=G.default.useState(!1),[P,w]=G.default.useState(""),[v,S]=G.default.useState(sc),[C,E]=G.default.useState(!1),[D,I]=G.default.useState(!1),[b,F]=G.default.useState(!1),[L,z]=G.default.useState(!1),[B,Y]=G.default.useState(!1),[ne,re]=G.default.useState(!1),oe=G.default.useRef(null),[U,K]=G.default.useState(null),[te,O]=gb(),[{index:ue,entry:fe},Te]=G.default.useState({index:0,entry:null}),[ie,Ae]=G.default.useState({}),[Ue,ge]=G.default.useState(!0),[ut,Oe]=G.default.useState(!1),[ft,h]=G.default.useState(null),[c,k]=G.default.useState(null),[x,J]=G.default.useState(null),[se,ce]=G.default.useState([]),[xe,ye]=G.default.useState(!1),[$e,Me]=G.default.useState(null),[Je,et]=G.default.useState(!1),[pe,ze]=G.default.useState(null),[je,Le]=G.default.useState(null),[vt,at]=G.default.useState(null),[ve,wt]=G.default.useState(""),[hr,Wt]=G.default.useState(0),[kt,Ot]=G.default.useState(""),[Et,ee]=G.default.useState(!1),[de,Re]=G.default.useState(0),De=G.default.useRef(null),tt=G.default.useRef({timer:0,latest:null}),_t=G.default.useRef({token:0,controller:null}),ur=G.default.useRef(null),At=G.default.useRef(v),it=G.default.useRef(t),Ne=G.default.useRef({running:!1,attempted:new Set}),pn=G.default.useRef(!1),[nn,yr]=G.default.useState(null);ur.current=p,At.current=v,it.current=t;let or=G.default.useCallback(()=>{_t.current.token+=1,_t.current.controller?.abort()},[]);G.default.useLayoutEffect(()=>()=>or(),[p?.record?.id,c,or]);let fn=`${v.fontSize}:${v.lineHeight}:${v.fontFamily}:${v.fontWeight}:${v.tocWidth}:${v.contentWidth}:${ve?"img":"plain"}:${de}`,gn=G.default.useMemo(()=>Ja(v,ve),[v,ve]),Lt=G.default.useMemo(()=>{let A=gn["--dshr-reader-bg"]||v.customBackground||"#fbf7ee",M=kt&&ve?ub(kt,A,Number(v.backgroundImageOpacity)||0):A;return{"--dshr-immersive-surface":M,"--dshr-immersive-ink":Qa(M).ink}},[kt,ve,gn,v.customBackground,v.backgroundImageOpacity]),gt=G.default.useCallback(async()=>{let A=++o.current;try{let[M,Z]=await Promise.all([$i(),jl()]);e(M),A===o.current&&n(Z)}catch(M){O(M?.message||"\u8BFB\u53D6\u4E66\u67B6\u5931\u8D25\u3002")}finally{a(!1)}},[O]),Jn=G.default.useCallback(A=>{o.current+=1,n(A)},[]),Ht=G.default.useCallback(async A=>{if(!A){ce([]);return}try{ce(await ec(A))}catch(M){console.warn("[dsh-reader] annotations unavailable",M),ce([])}},[]);G.default.useEffect(()=>{gt()},[gt]),G.default.useEffect(()=>{if(i||p)return;let A=it.current.filter(Ee=>!Ee.cover&&["pdf","epub","mobi","azw","azw3"].includes(Ee.format)&&!Ne.current.attempted.has(Ee.id));if(A.length===0)return;let M=Ne.current,Z=new AbortController;M.controller=Z,M.running=!0;let qe=setTimeout(()=>{(async()=>{for(let Ee of A){if(Z.signal.aborted)break;if(!M.attempted.has(Ee.id))try{let Xe=await Ea(Ee.id);if(!Xe||Z.signal.aborted)continue;let lt=await cu(Xe,{signal:Z.signal});if(Z.signal.aborted)break;M.attempted.add(Ee.id),(lt.cover||lt.title||lt.author||lt.language)&&(await no(Xe.id,lt),e($t=>$t.map(qt=>qt.id===Xe.id?{...qt,...lt}:qt)))}catch(Xe){if(Z.signal.aborted)break;M.attempted.add(Ee.id),console.warn("[dsh-reader] cover generation failed",Ee.title,Xe)}}})().finally(()=>{M.controller===Z&&(M.running=!1)})},500);return()=>{clearTimeout(qe),Z.abort()}},[i,p]),G.default.useEffect(()=>{lc(v)},[v]),G.default.useEffect(()=>{if(!p||v.readingMode==="book")return;let A=M=>{if(M.defaultPrevented||M.repeat||M.ctrlKey||M.metaKey||M.altKey||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(M.key)||M.target instanceof Element&&M.target.closest('input, textarea, select, [contenteditable="true"], .dshr-topbar--pdf, .dshr-immersive-controls, .dshr-modal-mask, .dshr-appearance-panel, .dshr-anno-panel, .dshr-ai, .dshr-selection, .dshr-anno-composer, .dshr-pdf-translation-panel'))return;let Z=window.getSelection?.();if(Z&&!Z.isCollapsed)return;let qe=document.querySelector(".dshr-root .dshr-content")||document.querySelector(".dshr-root .dshr-pdf-scroll");if(!qe)return;M.preventDefault();let Ee=Math.max(160,Math.round(qe.clientHeight*.82)),Xe=M.key==="ArrowRight"||M.key==="ArrowDown";qe.scrollBy({top:Xe?Ee:-Ee,behavior:"smooth"})};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[p,v.readingMode]),G.default.useEffect(()=>{if(!ve){Ot("");return}let A=!1,M=new Image;return M.onload=()=>{A||Ot(pb(M))},M.onerror=()=>{A||Ot("")},M.src=ve,()=>{A=!0}},[ve]),G.default.useEffect(()=>{let A=!1,M="";if(!v.backgroundImageKey){wt("");return}return(async()=>{try{let Z=await ac();if(!Z||A)return;M=URL.createObjectURL(Z),wt(M)}catch{A||wt("")}})(),()=>{A=!0,M&&URL.revokeObjectURL(M)}},[v.backgroundImageKey,hr]),G.default.useEffect(()=>{if(!c)return;let A=Z=>{Z?.type==="scroll"&&Z.target instanceof Element&&Z.target.closest(".dshr-pdf-translation-panel")||k(null)},M=Z=>{Z.key==="Escape"&&k(null)};return window.addEventListener("resize",A),window.addEventListener("keydown",M),document.addEventListener("scroll",A,!0),()=>{window.removeEventListener("resize",A),window.removeEventListener("keydown",M),document.removeEventListener("scroll",A,!0)}},[c]);let jt=G.default.useCallback(async()=>{let A=tt.current.latest;if(A){tt.current.latest=null;try{await Hi(A.id,A.progress),e(M=>M.map(Z=>Z.id===A.id?{...Z,progress:A.progress,lastOpenedAt:Date.now()}:Z))}catch{}}},[gt]),on=G.default.useCallback((A,M)=>{A&&(Ae(M),tt.current.latest={id:A,progress:M},!tt.current.timer&&(tt.current.timer=window.setTimeout(()=>{tt.current.timer=0,jt()},700)))},[jt]);G.default.useEffect(()=>()=>{window.clearTimeout(tt.current.timer),jt()},[jt]);let ar=G.default.useCallback(async()=>{f(!0);try{let A=await Wl();await gt();let M=[`\u6587\u732E ${A.counts.paper||0}`,`\u4E66\u7C4D ${A.counts.book||0}`];A.counts.document&&M.push(`\u6587\u6863 ${A.counts.document}`),O(A.changed>0?`\u4E66\u5355\u5DF2\u6574\u7406\uFF1A${M.join(" \xB7 ")}`:`\u4E66\u5355\u5DF2\u662F\u6700\u65B0\uFF1A${M.join(" \xB7 ")}`)}catch(A){O(A?.message||"\u81EA\u52A8\u6574\u7406\u5931\u8D25\u3002")}finally{f(!1)}},[gt,O]),Mr=G.default.useCallback(async(A,M)=>{let Z=["book","paper","document"],qe=M||Z[(Z.indexOf(A.category||"document")+1)%Z.length];try{await Ul(A.id,qe),await gt(),O(`\u300A${A.title||"\u6587\u6863"}\u300B\u5DF2\u5F52\u5165\u300C${Po(qe)}\u300D\u3002`)}catch(Ee){O(Ee?.message||"\u4FEE\u6539\u5206\u7C7B\u5931\u8D25\u3002")}},[gt,O]),En=G.default.useCallback(A=>{S(M=>({...M,...A})),Re(M=>M+1)},[]),eo=G.default.useCallback(()=>{De.current?.click()},[]),An=G.default.useCallback(async A=>{if(A){if(!String(A.type||"").startsWith("image/")){O("\u8BF7\u9009\u62E9\u56FE\u7247\u6587\u4EF6\uFF08JPG / PNG / WebP\uFF09\u3002");return}ee(!0);try{let M=A;try{let Z=await createImageBitmap(A),qe=Math.min(1,2400/Math.max(Z.width,Z.height));if(qe<1){let Ee=document.createElement("canvas");Ee.width=Math.round(Z.width*qe),Ee.height=Math.round(Z.height*qe),Ee.getContext("2d").drawImage(Z,0,0,Ee.width,Ee.height);let lt=await new Promise($t=>Ee.toBlob($t,"image/jpeg",.86));lt&&(M=lt)}Z.close?.()}catch{}await oc(M),S(Z=>({...Z,backgroundImageKey:"reader-background"})),Wt(Z=>Z+1),O("\u80CC\u666F\u56FE\u7247\u5DF2\u4FDD\u5B58\uFF0C\u53EF\u8C03\u6574\u900F\u660E\u5EA6\u548C\u6A21\u7CCA\u5EA6\u3002")}catch(M){O(M?.message||"\u80CC\u666F\u56FE\u7247\u4FDD\u5B58\u5931\u8D25\u3002")}finally{ee(!1)}}},[O]),mn=G.default.useCallback(async()=>{try{await ic(),S(A=>({...A,backgroundImageKey:""})),wt(""),O("\u5DF2\u79FB\u9664\u80CC\u666F\u56FE\u7247\u3002")}catch(A){O(A?.message||"\u79FB\u9664\u80CC\u666F\u56FE\u7247\u5931\u8D25\u3002")}},[O]),he=G.default.useCallback(async(A,M={})=>{if(M.rejected){O("\u6CA1\u6709\u53EF\u8BC6\u522B\u7684\u6587\u6863\u3002\u652F\u6301 PDF / EPUB / MOBI / TXT / Markdown / HTML\u3002");return}if(!A?.length)return;l(!0);let Z=[],qe=[];for(let Ee of A)try{let Xe=await Hl(Ee);Z.push(Xe)}catch(Xe){qe.push(`${Ee.name}: ${Xe?.message||"\u5BFC\u5165\u5931\u8D25"}`)}await gt(),l(!1),qe.length>0&&O(qe[0],4200),Z.length>0&&(O(Z.length===1?"\u5DF2\u52A0\u5165\u4E66\u67B6\u3002":`\u5DF2\u52A0\u5165 ${Z.length} \u4EFD\u6587\u6863\u3002`),st(Z[0]))},[gt,O]),T=G.default.useCallback(async A=>{F(!0);try{let M=await xc(A);I(!1),await he([M])}catch(M){O(M?.message||"\u5728\u7EBF\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u94FE\u63A5\u6216\u7A0D\u540E\u91CD\u8BD5\u3002",5200)}finally{F(!1)}},[he,O]),W=G.default.useCallback(async()=>{if(Y(!1),document.fullscreenElement===oe.current)try{await document.exitFullscreen()}catch{}},[]),le=G.default.useCallback(async()=>{if(B){await W();return}Y(!0),ge(!1)},[B,W]),Ke=G.default.useCallback(async()=>{try{document.fullscreenElement===oe.current?await document.exitFullscreen():oe.current?.requestFullscreen&&await oe.current.requestFullscreen()}catch{O("\u6D4F\u89C8\u5668\u963B\u6B62\u4E86\u5168\u5C4F\uFF1B\u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528\u5F53\u524D\u7A97\u53E3\u7684\u6C89\u6D78\u6A21\u5F0F\u3002",3600)}},[O]);G.default.useEffect(()=>{let A=()=>{re(document.fullscreenElement===oe.current)};return document.addEventListener("fullscreenchange",A),()=>document.removeEventListener("fullscreenchange",A)},[]),G.default.useEffect(()=>{!p&&B&&W()},[p,B,W]),G.default.useEffect(()=>{if(!B||L)return;let A=M=>{M.key==="Escape"&&!M.defaultPrevented&&(M.preventDefault(),W())};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[B,L,W]);let Ge=G.default.useCallback(()=>{try{localStorage.removeItem(yi)}catch{}try{sessionStorage.removeItem(dl)}catch{}yr(null),tt.current.timer&&(window.clearTimeout(tt.current.timer),tt.current.timer=0),jt(),Oe(!1),h(null),k(null),J(null),ce([]),ye(!1),et(!1),Me(null),ze(null),Le(null),at(null);let A=ur.current?.book;if(A?.dispose)try{A.dispose()}catch{}_(null),Ae({}),Te({index:0,entry:null})},[jt]),st=G.default.useCallback(async A=>{y(!0),w(`\u6B63\u5728\u6253\u5F00\u300A${A.title||"\u6587\u6863"}\u300B\u2026`);try{let M=await Ea(A.id);if(!M?.blob)throw new Error("\u4E66\u67B6\u4E2D\u627E\u4E0D\u5230\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u53EF\u80FD\u5DF2\u88AB\u6E05\u7406\u3002\u8BF7\u91CD\u65B0\u5BFC\u5165\u3002");yr(null);try{localStorage.setItem(yi,M.id)}catch{}try{sessionStorage.setItem(dl,M.id)}catch{}if((M.format||On(M.title))==="pdf"){M.blob.size>24*1024*1024&&w(`\u6B63\u5728\u6253\u5F00\u5927\u578B PDF\u300A${M.title||A.title||"\u6587\u6863"}\u300B\u2026`);let qt=M.blob,rt=M.progress||{},So={...M,blob:null,blobName:M.blob.name||""};_({kind:"pdf",record:So,data:qt}),Ae({page:rt.page||1,pages:rt.pages||0,percent:rt.percent||0}),Te({index:0,entry:null}),ge(!1),ye(!1),at(null),await Ht(M.id),y(!1),await Hi(M.id),await gt();return}let{parseBook:qe}=await Promise.resolve().then(()=>(cl(),ll)),Ee=await qe(M.blob,{fileName:M.title??A.title,mime:M.blob.type}),Xe={...M,title:Ee.title||M.title,author:Ee.author||M.author,language:Ee.language||M.language};(Xe.title!==M.title||Xe.author!==M.author||Xe.language!==M.language)&&(await no(M.id,{title:Xe.title,author:Xe.author,language:Xe.language}),await gt());let lt=M.progress||{},$t=fb(Number(lt.chapter)||0,0,Math.max(0,Ee.chapters.length-1));_({kind:"flow",record:Xe,book:Ee}),Te({index:$t,entry:{scrollRatio:Number(lt.scrollRatio)||0}}),Ae({chapter:$t,chapters:Ee.chapters.length,percent:Number(lt.percent)||(Ee.chapters.length?($t+1)/Ee.chapters.length*100:0)}),ge(!0),ye(!1),Le(null),await Ht(M.id),y(!1),dc(Ee.chapters.slice(0,3).map(qt=>qt.blocks.map(rt=>rt.text||"").join(" ")).join(" "))&&!At.current.autoTranslate&&O("\u68C0\u6D4B\u5230\u5916\u6587\u5185\u5BB9\u3002\u9876\u90E8\u300C\u5B9E\u65F6\u7FFB\u8BD1\u300D\u53EF\u4EE5\u968F\u65F6\u5F00\u542F\u3002",4200)}catch(M){y(!1),O(M?.message||"\u6253\u5F00\u6587\u6863\u5931\u8D25\u3002",5e3)}},[gt,Ht,O]);G.default.useEffect(()=>{if(i||p||pn.current||it.current.length===0)return;pn.current=!0;let A="";try{A=localStorage.getItem(yi)||""}catch{}if(!A){yr(null);return}let M=it.current.find(Ee=>Ee.id===A);if(!M){yr(null);try{localStorage.removeItem(yi)}catch{}return}let Z=Number(M.size)>24*1024*1024||Number(M.progress?.pages)>300,qe=!1;try{qe=sessionStorage.getItem(dl)===M.id}catch{}yr(M),!(Z&&!qe)&&st(M)},[i,p,st]),G.default.useEffect(()=>{let A=()=>{document.visibilityState==="hidden"&&jt()};return document.addEventListener("visibilitychange",A),()=>document.removeEventListener("visibilitychange",A)},[jt]);let Dt=G.default.useCallback(async()=>{let A=U;if(A)try{ur.current?.record?.id===A.id&&Ge(),await Xl(A.id),K(null),await gt(),O("\u5DF2\u4ECE\u4E66\u67B6\u5220\u9664\u3002")}catch(M){O(M?.message||"\u5220\u9664\u5931\u8D25\u3002")}},[Ge,U,gt,O]),Gt=G.default.useCallback(async()=>{try{Ge(),await Vl(),await gt(),E(!1),O("\u4E66\u67B6\u5DF2\u6E05\u7A7A\u3002")}catch(A){O(A?.message||"\u6E05\u7A7A\u4E66\u67B6\u5931\u8D25\u3002")}},[Ge,gt,O]),pr=G.default.useCallback((A,M)=>{h({id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:String(A||"").slice(0,8e3),context:String(M||"").slice(0,1600)}),Oe(!0),ye(!1),k(null),J(null)},[]),ir=G.default.useCallback((A,M="web")=>{let Z=String(A||"").trim().slice(0,500);if(!Z)return;let qe=M==="scholar"?`https://scholar.google.com/scholar?q=${encodeURIComponent(Z)}`:`https://www.google.com/search?q=${encodeURIComponent(Z)}`;window.open(qe,"_blank","noopener,noreferrer")||O("\u6D4F\u89C8\u5668\u62E6\u622A\u4E86\u65B0\u7A97\u53E3\u3002\u8BF7\u5141\u8BB8\u5F39\u51FA\u7A97\u53E3\uFF0C\u6216\u590D\u5236\u6587\u5B57\u540E\u624B\u52A8\u641C\u7D22\u3002")},[O]),mt=G.default.useCallback(async A=>{try{await navigator.clipboard.writeText(A),O("\u5DF2\u590D\u5236\u3002")}catch{O("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u3002")}},[O]),an=G.default.useCallback(A=>{if(or(),!A?.text?.trim()){k(null);return}k({...A,source:"flow"}),J(null)},[or]),Nn=G.default.useCallback(A=>{if(or(),!A?.text){k(null);return}k({...A,source:"pdf"}),J(null)},[or]),Cn=G.default.useCallback(async A=>{let M=A?.text?.trim();if(!M)return;or();let Z=new AbortController,qe=_t.current.token,Ee=p?.record?.id;_t.current.controller=Z;let Xe=()=>!Z.signal.aborted&&qe===_t.current.token&&ur.current?.record?.id===Ee;J({status:"loading"});try{let lt=await oo([{id:"selection",text:M}],{context:A.context||"",title:p?.book?.title||p?.record?.title||"",signal:Z.signal});Xe()&&J({status:"done",zh:lt.selection||""})}catch(lt){Xe()&&!Ln(lt)&&J({status:"error",error:lt?.message||"\u7FFB\u8BD1\u5931\u8D25\u3002"})}},[p,or]),wi=G.default.useCallback(A=>{let M=ur.current?.record?.id;if(!M||!A?.text?.trim())return;let Z=ur.current?.kind==="pdf";ze(null),Me({bookId:M,kind:Z?"pdf":"flow",style:"highlight",color:"#f5d76e",width:9,note:"",quote:A.text.trim(),chapterId:Z?void 0:ur.current?.book?.chapters?.[ue]?.id,chapterIndex:Z?void 0:ue,ranges:Z?void 0:A.ranges,page:Z?A.page:void 0,rects:Z?A.pageRects:void 0}),et(!0),k(null),J(null)},[ue]),to=G.default.useCallback(A=>{A&&(ze(A),Me({...A}),et(!0))},[]),sn=G.default.useCallback(A=>{let M=se.find(Z=>Z.id===A);M&&to(M)},[se,to]),fr=G.default.useCallback(()=>{et(!1),Me(null),ze(null)},[]),la=G.default.useCallback(async A=>{if(!(!A||!A.bookId))try{A.id?await rc(A.id,A):await tc(A),await Ht(A.bookId),fr(),Re(M=>M+1),O(A.note?.trim()?"\u6279\u6CE8\u5DF2\u4FDD\u5B58\u3002":"\u6807\u8BB0\u5DF2\u4FDD\u5B58\u3002")}catch(M){O(M?.message||"\u4FDD\u5B58\u6279\u6CE8\u5931\u8D25\u3002")}},[fr,Ht,O]),bn=G.default.useCallback(async A=>{if(A?.id)try{await nc(A.id),await Ht(ur.current?.record?.id),fr(),Re(M=>M+1),O("\u6279\u6CE8\u5DF2\u5220\u9664\u3002")}catch(M){O(M?.message||"\u5220\u9664\u6279\u6CE8\u5931\u8D25\u3002")}},[fr,Ht,O]),_i=G.default.useCallback(A=>{if(!A)return;if(A.kind==="pdf"){at({id:A.id,page:A.page,token:Date.now()}),ye(!1);return}let M=Number.isFinite(A.chapterIndex)?A.chapterIndex:0;Te(Z=>Z.index===M?Z:{index:M,entry:{edge:"start"}}),Le({id:A.id,blockId:A.ranges?.[0]?.blockId,token:Date.now()}),ye(!1)},[]),_o=G.default.useCallback((A,M={edge:"start"})=>{A===ue||A<0||A>=(p?.book?.chapters.length??0)||(Le(null),Te({index:A,entry:M}))},[ue,p]),xn=G.default.useCallback((A,M)=>{A!==fe||p?.kind!=="flow"||(Te(Z=>Z.entry===A?{index:Z.index,entry:null}:Z),on(p.record.id,za(ue,p.book.chapters.length,M)))},[fe,ue,p,on]);function ki(A){if(A.button!==0)return;A.preventDefault();let M=A.clientX,Z=Number(At.current.tocWidth)||260,qe=document.body.style.cursor,Ee=document.body.style.userSelect;document.body.style.cursor="col-resize",document.body.style.userSelect="none",document.body.classList.add("dshr-toc-resizing");let Xe=$t=>{let qt=Math.max(180,Math.min(520,Math.round(Z+$t.clientX-M)));S(rt=>({...rt,tocWidth:qt}))},lt=()=>{window.removeEventListener("pointermove",Xe),window.removeEventListener("pointerup",lt),window.removeEventListener("pointercancel",lt),document.body.style.cursor=qe,document.body.style.userSelect=Ee,document.body.classList.remove("dshr-toc-resizing")};window.addEventListener("pointermove",Xe),window.addEventListener("pointerup",lt),window.addEventListener("pointercancel",lt)}let sr=p?.book?.title||p?.record?.title||p?.record?.blob?.name||p?.record?.blobName||"",Ti=p?.book?.author||p?.record?.author||"",ca=p?.kind==="flow"?`\u7B2C ${(ue||0)+1} / ${p.book.chapters.length} \u7AE0`:"",In=p?p.kind==="pdf"?ie.pages>0?(ie.page||1)/ie.pages*100:0:(ue+1)/Math.max(1,p.book.chapters.length)*100:0;function ko({iconTools:A,textTools:M}={}){let Z=p.kind==="pdf",qe=(0,V.jsxs)("div",{className:"dshr-topbar__mode",role:"group","aria-label":"\u7FFB\u4E66\u65B9\u5F0F",children:[(0,V.jsx)("button",{type:"button",className:`dshr-topbar__mode-btn${v.readingMode!=="book"?" is-active":""}`,onClick:()=>S(rt=>({...rt,readingMode:"scroll"})),"aria-pressed":v.readingMode!=="book",title:"\u8FDE\u7EED\u6EDA\u52A8\u9605\u8BFB",children:(0,V.jsx)("span",{children:"\u6EDA\u52A8"})}),(0,V.jsx)("button",{type:"button",className:`dshr-topbar__mode-btn${v.readingMode==="book"?" is-active":""}`,onClick:()=>S(rt=>({...rt,readingMode:"book"})),"aria-pressed":v.readingMode==="book",title:"\u6A2A\u7248\u7EB8\u8D28\u4E66\u7FFB\u9875",children:(0,V.jsx)("span",{children:"\u6A2A\u7248"})}),v.readingMode==="book"?(0,V.jsx)("select",{className:"dshr-topbar__animation","aria-label":"\u7FFB\u9875\u52A8\u753B",value:v.bookAnimation||"slide",onChange:rt=>S(So=>({...So,bookAnimation:rt.target.value})),children:Td.map(rt=>(0,V.jsx)("option",{value:rt.id,children:rt.label},rt.id))}):null]}),Ee=(0,V.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon",onClick:()=>{le()},title:"\u5207\u6362\u5230\u6C89\u6D78\u9605\u8BFB","aria-label":"\u8FDB\u5165\u6C89\u6D78\u6A21\u5F0F",children:(0,V.jsx)(Oi,{size:16})}),Xe=(0,V.jsxs)("button",{type:"button",className:"dshr-switch",role:"switch","aria-checked":v.autoTranslate,onClick:()=>S(rt=>({...rt,autoTranslate:!rt.autoTranslate,...p.kind==="pdf"&&!rt.autoTranslate?{hideTranslations:!1}:{}})),title:"\u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1","aria-label":"\u5B9E\u65F6\u7FFB\u8BD1",children:[(0,V.jsx)("span",{className:"dshr-switch__track"}),(0,V.jsx)("span",{style:{whiteSpace:"nowrap"},children:"\u5B9E\u65F6\u7FFB\u8BD1"})]}),lt=(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${v.hideTranslations?"dshr-btn--outline":""}`,onClick:()=>S(rt=>({...rt,hideTranslations:!rt.hideTranslations})),title:v.hideTranslations?"\u663E\u793A\u4E2D\u6587\u8BD1\u6587":"\u53EA\u770B\u539F\u6587\uFF08\u9690\u85CF\u5DF2\u7FFB\u8BD1\u5185\u5BB9\uFF09","aria-label":v.hideTranslations?"\u663E\u793A\u4E2D\u6587\u8BD1\u6587":"\u53EA\u770B\u539F\u6587\uFF0C\u9690\u85CF\u8BD1\u6587","aria-pressed":v.hideTranslations,children:v.hideTranslations?(0,V.jsx)(zl,{size:16}):(0,V.jsx)(Fl,{size:16})}),(0,V.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon",onClick:()=>{z(!0),k(null)},title:"\u5B57\u4F53\u3001\u80CC\u666F\u4E0E\u7559\u767D","aria-label":"\u9605\u8BFB\u5916\u89C2",children:(0,V.jsx)(Ro,{size:16})}),(0,V.jsxs)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${xe?"dshr-btn--outline":""}`,onClick:()=>{ye(rt=>!rt),Oe(!1),k(null)},title:"\u6279\u6CE8\u4E0E\u4FBF\u7B7E","aria-label":`\u6279\u6CE8\u4E0E\u4FBF\u7B7E\uFF0C\u5171 ${se.length} \u6761`,children:[(0,V.jsx)(_a,{size:16}),se.length>0?(0,V.jsx)("span",{className:"dshr-count-badge",children:se.length>99?"99+":se.length}):null]})]}),$t=(0,V.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary dshr-btn--sm",onClick:()=>pr("",""),title:"\u6253\u5F00 AI \u9605\u8BFB\u52A9\u624B",children:[(0,V.jsx)(yn,{size:14})," AI"]}),qt=(0,V.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:()=>E(!0),title:"\u9605\u8BFB\u8BBE\u7F6E","aria-label":"\u9605\u8BFB\u8BBE\u7F6E",children:(0,V.jsx)(ba,{size:16})});return(0,V.jsxs)("div",{className:`dshr-topbar${Z?" dshr-topbar--pdf":""}`,style:{position:"relative"},children:[(0,V.jsx)("div",{className:"dshr-progress","aria-hidden":"true",children:(0,V.jsx)("i",{style:{"--p":`${Math.min(100,In)}%`}})}),(0,V.jsxs)("div",{className:"dshr-topbar__identity",children:[(0,V.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:Ge,title:"\u8FD4\u56DE\u4E66\u67B6","aria-label":"\u8FD4\u56DE\u4E66\u67B6",children:(0,V.jsx)(El,{size:17})}),(0,V.jsxs)("div",{className:"dshr-topbar__title",children:[(0,V.jsx)("strong",{title:sr,children:sr}),(0,V.jsx)("span",{children:[Ti,jr(p.record?.format),ca].filter(Boolean).join(" \xB7 ")})]})]}),Z?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)("div",{className:"dshr-topbar__tools dshr-topbar__icons",role:"group","aria-label":"\u9605\u8BFB\u5FEB\u6377\u64CD\u4F5C",children:[A,Ee,lt,qt]}),(0,V.jsxs)("div",{className:"dshr-topbar__tools dshr-topbar__labels",children:[M,qe,Xe,$t]})]}):(0,V.jsxs)("div",{className:"dshr-topbar__tools",children:[(0,V.jsx)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${Ue?"dshr-btn--outline":""}`,onClick:()=>ge(rt=>!rt),title:"\u76EE\u5F55","aria-label":"\u76EE\u5F55","aria-pressed":Ue,children:(0,V.jsx)(Pi,{size:16})}),qe,Ee,Xe,lt,$t,qt]})]})}function da(A){let M=p.kind==="pdf";return(0,V.jsxs)("div",{className:`dshr-immersive-controls${M?" dshr-immersive-controls--pdf":""}`,role:"group","aria-label":"\u6C89\u6D78\u9605\u8BFB\u63A7\u4EF6",style:M?void 0:{height:du},children:[M?(0,V.jsx)("span",{className:"dshr-immersive-title",title:sr,children:sr}):null,A,(0,V.jsxs)("div",{className:"dshr-immersive-actions",children:[M?null:(0,V.jsxs)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>ge(Z=>!Z),title:Ue?"\u6536\u8D77\u76EE\u5F55":"\u6253\u5F00\u76EE\u5F55","aria-pressed":Ue,children:[(0,V.jsx)(Pi,{size:15})," \u76EE\u5F55"]}),(0,V.jsxs)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>{z(!0),k(null)},title:"\u9605\u8BFB\u5916\u89C2","aria-label":"\u9605\u8BFB\u5916\u89C2","aria-haspopup":"dialog","aria-expanded":L,autoFocus:!0,children:[(0,V.jsx)(Ro,{size:15})," \u5916\u89C2"]}),(0,V.jsxs)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>{Ke()},title:ne?"\u9000\u51FA\u5168\u5C4F":"\u8FDB\u5165\u5168\u5C4F","aria-label":ne?"\u9000\u51FA\u5168\u5C4F":"\u8FDB\u5165\u5168\u5C4F","aria-pressed":ne,children:[ne?(0,V.jsx)(Ll,{size:15}):(0,V.jsx)(Oi,{size:15}),ne?"\u8FD8\u539F":"\u5168\u5C4F"]}),(0,V.jsxs)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>{W()},title:"\u9000\u51FA\u6C89\u6D78\u6A21\u5F0F\uFF08Esc\uFF09",children:[(0,V.jsx)(_r,{size:15})," \u9000\u51FA\u6C89\u6D78"]})]})]})}let To=p?(0,V.jsxs)(V.Fragment,{children:[ut?(0,V.jsx)(ad,{open:ut,onClose:()=>Oe(!1),seed:ft,onGoogle:ir,onToast:O}):null,xe?(0,V.jsx)(Id,{open:xe,annotations:se,book:p.book||p.record,onClose:()=>ye(!1),onOpenAnnotation:sn,onJump:_i,onDelete:A=>{bn(A)}}):null]}):null;return(0,V.jsx)(hl,{onReset:Ge,children:(0,V.jsxs)("div",{ref:oe,className:`dshr-root${B?" is-immersive":""}`,style:{...gn,...Lt,"--dshr-font-size":`${v.fontSize}px`,"--dshr-line-height":String(v.lineHeight),"--dshr-toc-width":`${v.tocWidth}px`},"data-reader-background":v.backgroundPreset,"data-hide-translations":v.hideTranslations?"true":"false","data-reading-mode":v.readingMode||"scroll",children:[(0,V.jsx)("input",{ref:De,type:"file",accept:"image/*",className:"dshr-sr-only",tabIndex:-1,onChange:A=>{let M=A.target.files?.[0];A.target.value="",An(M)}}),p?(0,V.jsxs)("div",{className:"dshr-reader",children:[!B&&p.kind==="flow"?ko():null,B&&p.kind==="flow"?da():null,(0,V.jsxs)("div",{className:"dshr-body",children:[p.kind==="flow"?(0,V.jsxs)("aside",{className:`dshr-toc${Ue?"":" is-closed"}`,"aria-label":"\u76EE\u5F55",children:[(0,V.jsxs)("div",{className:"dshr-toc__head",children:[(0,V.jsx)("strong",{children:"\u76EE\u5F55"}),(0,V.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost",onClick:()=>ge(!1),"aria-label":"\u6536\u8D77\u76EE\u5F55",children:(0,V.jsx)(_r,{size:14})})]}),(0,V.jsx)("div",{className:"dshr-toc__list",children:p.book.chapters.map((A,M)=>(0,V.jsx)("button",{type:"button",className:`dshr-toc__item${M===ue?" is-active":""}`,onClick:()=>_o(M),title:A.title,children:A.title||`\u7B2C ${M+1} \u7AE0`},A.id||M))}),(0,V.jsx)("div",{className:"dshr-toc__resizer",role:"separator","aria-orientation":"vertical","aria-label":"\u62D6\u52A8\u8C03\u6574\u76EE\u5F55\u5BBD\u5EA6",title:"\u62D6\u52A8\u8C03\u6574\u76EE\u5F55\u5BBD\u5EA6\uFF1B\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4",onPointerDown:ki,onDoubleClick:()=>S(A=>({...A,tocWidth:260}))})]}):null,p.kind==="pdf"?(0,V.jsx)(nd,{data:p.data,documentId:p.record.id,fileName:sr,renderImmersiveToolbar:B?da:void 0,renderTopbar:B?void 0:ko,sidePanels:To,initialPage:p.record.progress?.page||1,autoTranslate:v.autoTranslate,hideTranslations:v.hideTranslations,paged:v.readingMode==="book",onHideTranslations:()=>S(A=>({...A,hideTranslations:!0})),annotations:se,onOpenAnnotation:sn,focusAnnotation:vt,onReady:({pageCount:A})=>Ae(M=>({...M,page:M.page||1,pages:A,percent:A>0?(M.page||1)/A*100:M.percent||0})),onPageChange:A=>{let M=ie.pages||0,Z={...ie,page:A,pages:M,percent:M>0?A/M*100:0};Ae(Z),on(p.record.id,Z)},onSelection:Nn},p.record.id):(0,V.jsx)(Dc,{book:p.book,chapterIndex:ue,onChapterChange:_o,settings:v,chapterEntry:fe,onChapterEntered:xn,onSelection:an,onProgress:A=>{Ae(A),on(p.record.id,A)},annotations:se,onOpenAnnotation:sn,focusAnnotation:je,layoutVersion:fn}),p.kind==="flow"?To:null]}),(0,V.jsx)(vd,{enabled:v.readingMode==="book",animation:v.bookAnimation,bookMode:!0,bookFrame:p.kind==="flow",frameTop:B?du:52,frameLeft:p.kind==="flow"&&Ue?v.tocWidth:0,readerKey:`${p.record.id}:${p.kind}:${ue}`,canPrevChapter:p.kind==="flow"&&ue>0,canNextChapter:p.kind==="flow"&&ue<(p.book?.chapters?.length||1)-1,chapterEntry:fe,onChapterEntered:xn,onChapterTurn:(A,M)=>_o(ue+A,M)})]}):(0,V.jsx)(fc,{books:t,collections:r,onCollectionsChange:Jn,loading:i,resumeBook:nn,onResume:A=>{st(A)},importing:s,organizing:d,categoryFilter:g,onCategoryFilter:u,onAutoOrganize:()=>{ar()},onImport:he,onOpen:A=>{st(A)},onDelete:A=>K(A),onCycleCategory:(A,M)=>{Mr(A,M)},onSettings:()=>E(!0),onOnlineImport:()=>I(!0)}),N?(0,V.jsx)("div",{className:"dshr-modal-mask",style:{background:"color-mix(in srgb, var(--dshr-bg) 76%, transparent)",backdropFilter:"blur(5px)"},children:(0,V.jsxs)("div",{className:"dshr-loading",children:[(0,V.jsx)("div",{className:"dshr-loading__ring"}),(0,V.jsx)("span",{children:P})]})}):null,c&&!ut&&!Je?(0,V.jsx)(id,{selection:c,translation:x,onTranslate:A=>{Cn(A)},onAnnotate:wi,onExplain:A=>pr(A.text,A.context),onGoogle:ir,onCopy:mt,onClose:()=>{k(null),J(null)},onRetry:()=>{Cn(c)}}):null,(0,V.jsx)(dd,{open:D,busy:b,onClose:()=>{b||I(!1)},onSubmit:A=>{T(A)}}),C?(0,V.jsx)(sd,{settings:v,onChange:S,onClose:()=>E(!1),onOpenAppearance:()=>{E(!1),z(!0)},onClearLibrary:()=>{Gt()}}):null,L?(0,V.jsx)(Ad,{open:L,settings:v,backgroundImageUrl:ve,onChange:En,onPickBackgroundImage:eo,onClearBackgroundImage:()=>{mn()},onClose:()=>z(!1)}):null,U?(0,V.jsx)(ld,{book:U,onCancel:()=>K(null),onConfirm:()=>{Dt()}}):null,Je&&$e?(0,V.jsx)(Ld,{open:Je,draft:$e,mode:pe?"edit":"create",onClose:fr,onSave:A=>{la(A)},onDelete:pe?()=>{bn(pe)}:void 0}):null,(0,V.jsx)(cd,{message:te})]})})}var pu=String.raw`
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
`;var fu=String.raw`
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
`;var Qn=require("react/jsx-runtime"),mb="dsh-reader",bb=["slots","layout"],ul="reader";function xb({size:t=18}){return(0,Qn.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,Qn.jsx)("path",{d:"M4 5.4A2.4 2.4 0 0 1 6.4 3H20v16.1H6.4A2.4 2.4 0 0 0 4 21.5V5.4Z",stroke:"currentColor",strokeWidth:"1.65",strokeLinejoin:"round"}),(0,Qn.jsx)("path",{d:"M4 18.4a2.4 2.4 0 0 1 2.4-2.3H20",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round"}),(0,Qn.jsx)("path",{d:"M8.2 7h7.6M8.2 10.2h4.6",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round"}),(0,Qn.jsx)("circle",{cx:"17.2",cy:"18.6",r:"2.1",fill:"currentColor",opacity:".9"})]})}function vb(t){t.effect(()=>{let e=document.createElement("style");return e.dataset.dshReader="styles",e.textContent=`${pu}
${td}
${vs}
${fu}`,document.head.appendChild(e),()=>e.remove()},"dsh-reader: styles"),t.slots.inject("main",function*(){yield t.slots.register({name:"main",key:ul},uu)}),t.slots.inject("sidebar.panellist",()=>t.slots.register({name:"sidebar.panellist",id:ul,order:10,label:()=>"\u9605\u8BFB"},xb))}

return module.exports;
}});

window.__ModuleLoader__.load({ id: "dsh-reader", factory: (require) => {
var module = { exports: {} }; var exports = module.exports;
var Iu=Object.create;var ba=Object.defineProperty;var Ru=Object.getOwnPropertyDescriptor;var Mu=Object.getOwnPropertyNames;var Pu=Object.getPrototypeOf,Ou=Object.prototype.hasOwnProperty;var br=(t,e,r)=>()=>{if(r)throw r[0];try{return t&&(e=t(t=0)),e}catch(n){throw r=[n],n}};var Ri=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}},Tl=(t,e)=>{for(var r in e)ba(t,r,{get:e[r],enumerable:!0})},Sl=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Mu(e))!Ou.call(t,o)&&o!==r&&ba(t,o,{get:()=>e[o],enumerable:!(n=Ru(e,o))||n.enumerable});return t};var Rt=(t,e,r)=>(r=t!=null?Iu(Pu(t)):{},Sl(e||!t||!t.__esModule?ba(r,"default",{value:t,enumerable:!0}):r,t)),Lu=t=>Sl(ba({},"__esModule",{value:!0}),t);function jf(t,e){return Wd(t,{i:2},e&&e.out,e&&e.dictionary)}function jd(t,e){return Wd(t.subarray(Wf(t,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}function Xf(t,e){if(e){for(var r="",n=0;n<t.length;n+=16384)r+=String.fromCharCode.apply(null,t.subarray(n,n+16384));return r}else{if(Ss)return Ss.decode(t);var o=qf(t),a=o.s,r=o.r;return r.length&&Kt(8),a}}function Gd(t,e){for(var r={},n=t.length-22;Sr(t,n)!=101010256;--n)(!n||t.length-n>65558)&&Kt(13);var o=Kr(t,n+8);if(!o)return{};var a=Sr(t,n+16),i=Sr(t,n-20)==117853008;if(i){var s=Sr(t,n-12);i=Sr(t,s)==101075792,i&&(o=Sr(t,s+32),a=Sr(t,s+48))}for(var l=e&&e.filter,d=0;d<o;++d){var f=Kf(t,a,i),g=f[0],u=f[1],p=f[2],y=f[3],E=f[4],v=f[5],P=Vf(t,v);a=E,(!l||l({name:y,size:u,originalSize:p,compression:g}))&&(g?g==8?r[y]=jf(t.subarray(P,P+u),{out:new xr(p)}):Kt(14,"unknown compression type "+g):r[y]=Es(t,P,P+u))}return r}var xr,mo,Of,Dd,Fd,Lf,zd,Bd,$d,Df,Hd,Ff,Ex,Ts,un,ot,qo,Xo,ot,ot,ot,ot,Ud,ot,zf,Bf,ws,Br,_s,$f,Es,Hf,Kt,Wd,Uf,Kr,Sr,ks,Wf,Ss,Gf,qf,Vf,Kf,Yf,As=br(()=>{xr=Uint8Array,mo=Uint16Array,Of=Int32Array,Dd=new xr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Fd=new xr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Lf=new xr([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),zd=function(t,e){for(var r=new mo(31),n=0;n<31;++n)r[n]=e+=1<<t[n-1];for(var o=new Of(r[30]),n=1;n<30;++n)for(var a=r[n];a<r[n+1];++a)o[a]=a-r[n]<<5|n;return{b:r,r:o}},Bd=zd(Dd,2),$d=Bd.b,Df=Bd.r;$d[28]=258,Df[258]=28;Hd=zd(Fd,0),Ff=Hd.b,Ex=Hd.r,Ts=new mo(32768);for(ot=0;ot<32768;++ot)un=(ot&43690)>>1|(ot&21845)<<1,un=(un&52428)>>2|(un&13107)<<2,un=(un&61680)>>4|(un&3855)<<4,Ts[ot]=((un&65280)>>8|(un&255)<<8)>>1;qo=(function(t,e,r){for(var n=t.length,o=0,a=new mo(e);o<n;++o)t[o]&&++a[t[o]-1];var i=new mo(e);for(o=1;o<e;++o)i[o]=i[o-1]+a[o-1]<<1;var s;if(r){s=new mo(1<<e);var l=15-e;for(o=0;o<n;++o)if(t[o])for(var d=o<<4|t[o],f=e-t[o],g=i[t[o]-1]++<<f,u=g|(1<<f)-1;g<=u;++g)s[Ts[g]>>l]=d}else for(s=new mo(n),o=0;o<n;++o)t[o]&&(s[o]=Ts[i[t[o]-1]++]>>15-t[o]);return s}),Xo=new xr(288);for(ot=0;ot<144;++ot)Xo[ot]=8;for(ot=144;ot<256;++ot)Xo[ot]=9;for(ot=256;ot<280;++ot)Xo[ot]=7;for(ot=280;ot<288;++ot)Xo[ot]=8;Ud=new xr(32);for(ot=0;ot<32;++ot)Ud[ot]=5;zf=qo(Xo,9,1),Bf=qo(Ud,5,1),ws=function(t){for(var e=t[0],r=1;r<t.length;++r)t[r]>e&&(e=t[r]);return e},Br=function(t,e,r){var n=e/8|0;return(t[n]|t[n+1]<<8)>>(e&7)&r},_s=function(t,e){var r=e/8|0;return(t[r]|t[r+1]<<8|t[r+2]<<16)>>(e&7)},$f=function(t){return(t+7)/8|0},Es=function(t,e,r){return(e==null||e<0)&&(e=0),(r==null||r>t.length)&&(r=t.length),new xr(t.subarray(e,r))},Hf=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Kt=function(t,e,r){var n=new Error(e||Hf[t]);if(n.code=t,Error.captureStackTrace&&Error.captureStackTrace(n,Kt),!r)throw n;return n},Wd=function(t,e,r,n){var o=t.length,a=n?n.length:0;if(!o||e.f&&!e.l)return r||new xr(0);var i=!r,s=i||e.i!=2,l=e.i;i&&(r=new xr(o*3));var d=function(vt){var h=r.length;if(vt>h){var c=new xr(Math.max(h*2,vt));c.set(r),r=c}},f=e.f||0,g=e.p||0,u=e.b||0,p=e.l,y=e.d,E=e.m,v=e.n,P=o*8;do{if(!p){f=Br(t,g,1);var N=Br(t,g+1,3);if(g+=3,N)if(N==1)p=zf,y=Bf,E=9,v=5;else if(N==2){var S=Br(t,g,31)+257,L=Br(t,g+10,15)+4,I=S+Br(t,g+5,31)+1;g+=14;for(var b=new xr(I),O=new xr(19),D=0;D<L;++D)O[Lf[D]]=Br(t,g+D*3,7);g+=L*3;for(var ee=ws(O),$=(1<<ee)-1,re=qo(O,ee,1),D=0;D<I;){var ae=re[Br(t,g,$)];g+=ae&15;var w=ae>>4;if(w<16)b[D++]=w;else{var z=0,oe=0;for(w==16?(oe=3+Br(t,g,3),g+=2,z=b[D-1]):w==17?(oe=3+Br(t,g,7),g+=3):w==18&&(oe=11+Br(t,g,127),g+=7);oe--;)b[D++]=z}}var H=b.subarray(0,S),q=b.subarray(S);E=ws(H),v=ws(q),p=qo(H,E,1),y=qo(q,v,1)}else Kt(1);else{var w=$f(g)+4,A=t[w-4]|t[w-3]<<8,C=w+A;if(C>o){l&&Kt(0);break}s&&d(u+A),r.set(t.subarray(w,C),u),e.b=u+=A,e.p=g=C*8,e.f=f;continue}if(g>P){l&&Kt(0);break}}s&&d(u+131072);for(var ne=(1<<E)-1,F=(1<<v)-1,de=g;;de=g){var z=p[_s(t,g)&ne],be=z>>4;if(g+=z&15,g>P){l&&Kt(0);break}if(z||Kt(2),be<256)r[u++]=be;else if(be==256){de=g,p=null;break}else{var Ae=be-254;if(be>264){var D=be-257,te=Dd[D];Ae=Br(t,g,(1<<te)-1)+$d[D],g+=te}var Me=y[_s(t,g)&F],Oe=Me>>4;Me||Kt(3),g+=Me&15;var q=Ff[Oe];if(Oe>3){var te=Fd[Oe];q+=_s(t,g)&(1<<te)-1,g+=te}if(g>P){l&&Kt(0);break}s&&d(u+131072);var he=u+Ae;if(u<q){var Xe=a-q,Le=Math.min(q,he);for(Xe+u<0&&Kt(3);u<Le;++u)r[u]=n[Xe+u]}for(;u<he;++u)r[u]=r[u-q]}}e.l=p,e.p=de,e.b=u,e.f=f,p&&(f=1,e.m=E,e.d=y,e.n=v)}while(!f);return u!=r.length&&i?Es(r,0,u):r.subarray(0,u)},Uf=new xr(0),Kr=function(t,e){return t[e]|t[e+1]<<8},Sr=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},ks=function(t,e){return Sr(t,e)+Sr(t,e+4)*4294967296},Wf=function(t,e){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&Kt(6,"invalid zlib data"),(t[1]>>5&1)==+!e&&Kt(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};Ss=typeof TextDecoder<"u"&&new TextDecoder,Gf=0;try{Ss.decode(Uf,{stream:!0}),Gf=1}catch{}qf=function(t){for(var e="",r=0;;){var n=t[r++],o=(n>127)+(n>223)+(n>239);if(r+o>t.length)return{s:e,r:Es(t,r-1)};o?o==3?(n=((n&15)<<18|(t[r++]&63)<<12|(t[r++]&63)<<6|t[r++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):o&1?e+=String.fromCharCode((n&31)<<6|t[r++]&63):e+=String.fromCharCode((n&15)<<12|(t[r++]&63)<<6|t[r++]&63):e+=String.fromCharCode(n)}};Vf=function(t,e){return e+30+Kr(t,e+26)+Kr(t,e+28)},Kf=function(t,e,r){var n=Kr(t,e+28),o=Kr(t,e+30),a=Xf(t.subarray(e+46,e+46+n),!(Kr(t,e+8)&2048)),i=e+46+n,s=Yf(t,i,o,r,Sr(t,e+20),Sr(t,e+24),Sr(t,e+42)),l=s[0],d=s[1],f=s[2];return[Kr(t,e+10),l,d,a,i+o+Kr(t,e+32),f]},Yf=function(t,e,r,n,o,a,i){var s=o==4294967295,l=a==4294967295,d=i==4294967295,f=e+r,g=s+l+d;if(n&&g){for(;e+4<f;e+=4+Kr(t,e+2))if(Kr(t,e)==1)return[s?ks(t,e+4+8*l):o,l?ks(t,e+4):a,d?ks(t,e+4+8*(l+s)):i,1];n<2&&Kt(13)}return[o,a,i,0]}});function Qt(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return Ls(t,e,n)}}function og(t){return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return Ds(t,r)}}function Be(t,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:oi;qd&&qd(t,null);let n=e.length;for(;n--;){let o=e[n];if(typeof o=="string"){let a=r(o);a!==o&&(Zf(e)||(e[n]=a),o=a)}t[o]=!0}return t}function ag(t){for(let e=0;e<t.length;e++)$r(t,e)||(t[e]=null);return t}function Yr(t){let e=Os(null);for(let[r,n]of eh(t))$r(t,r)&&(Array.isArray(n)?e[r]=ag(n):n&&typeof n=="object"&&n.constructor===Object?e[r]=Yr(n):e[r]=n);return e}function Zo(t,e){for(;t!==null;){let n=Jf(t,e);if(n){if(n.get)return Qt(n.get);if(typeof n.value=="function")return Qt(n.value)}t=Qf(t)}function r(){return null}return r}function nh(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:mg(),e=ue=>nh(ue);if(e.version="3.3.1",e.removed=[],!t||!t.document||t.document.nodeType!==Qo.document||!t.Element)return e.isSupported=!1,e;let{document:r}=t,n=r,o=n.currentScript,{DocumentFragment:a,HTMLTemplateElement:i,Node:s,Element:l,NodeFilter:d,NamedNodeMap:f=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:g,DOMParser:u,trustedTypes:p}=t,y=l.prototype,E=Zo(y,"cloneNode"),v=Zo(y,"remove"),P=Zo(y,"nextSibling"),N=Zo(y,"childNodes"),w=Zo(y,"parentNode");if(typeof i=="function"){let ue=r.createElement("template");ue.content&&ue.content.ownerDocument&&(r=ue.content.ownerDocument)}let A,C="",{implementation:S,createNodeIterator:L,createDocumentFragment:I,getElementsByTagName:b}=r,{importNode:O}=n,D=Jd();e.isSupported=typeof eh=="function"&&typeof w=="function"&&S&&S.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:ee,ERB_EXPR:$,TMPLIT_EXPR:re,DATA_ATTR:ae,ARIA_ATTR:z,IS_SCRIPT_OR_DATA:oe,ATTR_WHITESPACE:H,CUSTOM_ELEMENT:q}=Qd,{IS_ALLOWED_URI:ne}=Qd,F=null,de=Be({},[...Vd,...Is,...Rs,...Ms,...Kd]),be=null,Ae=Be({},[...Yd,...Ps,...Zd,...ni]),te=Object.seal(Os(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Me=null,Oe=null,he=Object.seal(Os(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),Xe=!0,Le=!0,vt=!1,h=!0,c=!1,k=!0,x=!1,Y=!1,se=!1,ie=!1,xe=!1,ke=!1,Fe=!0,Ce=!1,Ge="user-content-",Ue=!0,ge=!1,$e={},Ve=null,ze=Be({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),pt=null,st=Be({},["audio","video","img","source","image","track"]),ve=null,wt=Be({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),hr="http://www.w3.org/1998/Math/MathML",ur="http://www.w3.org/2000/svg",Tt="http://www.w3.org/1999/xhtml",zt=Tt,_t=!1,rr=null,Et=Be({},[hr,ur,Tt],Ns),pr=Be({},["mi","mo","mn","ms","mtext"]),Q=Be({},["annotation-xml"]),pe=Be({},["title","style","font","a","script"]),we=null,He=["application/xhtml+xml","text/html"],We="text/html",et=null,Te=null,pn=r.createElement("form"),nn=function(_){return _ instanceof RegExp||_ instanceof Function},yr=function(){let _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Te&&Te===_)){if((!_||typeof _!="object")&&(_={}),_=Yr(_),we=He.indexOf(_.PARSER_MEDIA_TYPE)===-1?We:_.PARSER_MEDIA_TYPE,et=we==="application/xhtml+xml"?Ns:oi,F=$r(_,"ALLOWED_TAGS")?Be({},_.ALLOWED_TAGS,et):de,be=$r(_,"ALLOWED_ATTR")?Be({},_.ALLOWED_ATTR,et):Ae,rr=$r(_,"ALLOWED_NAMESPACES")?Be({},_.ALLOWED_NAMESPACES,Ns):Et,ve=$r(_,"ADD_URI_SAFE_ATTR")?Be(Yr(wt),_.ADD_URI_SAFE_ATTR,et):wt,pt=$r(_,"ADD_DATA_URI_TAGS")?Be(Yr(st),_.ADD_DATA_URI_TAGS,et):st,Ve=$r(_,"FORBID_CONTENTS")?Be({},_.FORBID_CONTENTS,et):ze,Me=$r(_,"FORBID_TAGS")?Be({},_.FORBID_TAGS,et):Yr({}),Oe=$r(_,"FORBID_ATTR")?Be({},_.FORBID_ATTR,et):Yr({}),$e=$r(_,"USE_PROFILES")?_.USE_PROFILES:!1,Xe=_.ALLOW_ARIA_ATTR!==!1,Le=_.ALLOW_DATA_ATTR!==!1,vt=_.ALLOW_UNKNOWN_PROTOCOLS||!1,h=_.ALLOW_SELF_CLOSE_IN_ATTR!==!1,c=_.SAFE_FOR_TEMPLATES||!1,k=_.SAFE_FOR_XML!==!1,x=_.WHOLE_DOCUMENT||!1,ie=_.RETURN_DOM||!1,xe=_.RETURN_DOM_FRAGMENT||!1,ke=_.RETURN_TRUSTED_TYPE||!1,se=_.FORCE_BODY||!1,Fe=_.SANITIZE_DOM!==!1,Ce=_.SANITIZE_NAMED_PROPS||!1,Ue=_.KEEP_CONTENT!==!1,ge=_.IN_PLACE||!1,ne=_.ALLOWED_URI_REGEXP||th,zt=_.NAMESPACE||Tt,pr=_.MATHML_TEXT_INTEGRATION_POINTS||pr,Q=_.HTML_INTEGRATION_POINTS||Q,te=_.CUSTOM_ELEMENT_HANDLING||{},_.CUSTOM_ELEMENT_HANDLING&&nn(_.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(te.tagNameCheck=_.CUSTOM_ELEMENT_HANDLING.tagNameCheck),_.CUSTOM_ELEMENT_HANDLING&&nn(_.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(te.attributeNameCheck=_.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),_.CUSTOM_ELEMENT_HANDLING&&typeof _.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(te.allowCustomizedBuiltInElements=_.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),c&&(Le=!1),xe&&(ie=!0),$e&&(F=Be({},Kd),be=[],$e.html===!0&&(Be(F,Vd),Be(be,Yd)),$e.svg===!0&&(Be(F,Is),Be(be,Ps),Be(be,ni)),$e.svgFilters===!0&&(Be(F,Rs),Be(be,Ps),Be(be,ni)),$e.mathMl===!0&&(Be(F,Ms),Be(be,Zd),Be(be,ni))),_.ADD_TAGS&&(typeof _.ADD_TAGS=="function"?he.tagCheck=_.ADD_TAGS:(F===de&&(F=Yr(F)),Be(F,_.ADD_TAGS,et))),_.ADD_ATTR&&(typeof _.ADD_ATTR=="function"?he.attributeCheck=_.ADD_ATTR:(be===Ae&&(be=Yr(be)),Be(be,_.ADD_ATTR,et))),_.ADD_URI_SAFE_ATTR&&Be(ve,_.ADD_URI_SAFE_ATTR,et),_.FORBID_CONTENTS&&(Ve===ze&&(Ve=Yr(Ve)),Be(Ve,_.FORBID_CONTENTS,et)),_.ADD_FORBID_CONTENTS&&(Ve===ze&&(Ve=Yr(Ve)),Be(Ve,_.ADD_FORBID_CONTENTS,et)),Ue&&(F["#text"]=!0),x&&Be(F,["html","head","body"]),F.table&&(Be(F,["tbody"]),delete Me.tbody),_.TRUSTED_TYPES_POLICY){if(typeof _.TRUSTED_TYPES_POLICY.createHTML!="function")throw Yo('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof _.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Yo('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');A=_.TRUSTED_TYPES_POLICY,C=A.createHTML("")}else A===void 0&&(A=bg(p,o)),A!==null&&typeof C=="string"&&(C=A.createHTML(""));Zt&&Zt(_),Te=_}},nr=Be({},[...Is,...Rs,...ig]),fn=Be({},[...Ms,...sg]),gn=function(_){let W=w(_);(!W||!W.tagName)&&(W={namespaceURI:zt,tagName:"template"});let ce=oi(_.tagName),tt=oi(W.tagName);return rr[_.namespaceURI]?_.namespaceURI===ur?W.namespaceURI===Tt?ce==="svg":W.namespaceURI===hr?ce==="svg"&&(tt==="annotation-xml"||pr[tt]):!!nr[ce]:_.namespaceURI===hr?W.namespaceURI===Tt?ce==="math":W.namespaceURI===ur?ce==="math"&&Q[tt]:!!fn[ce]:_.namespaceURI===Tt?W.namespaceURI===ur&&!Q[tt]||W.namespaceURI===hr&&!pr[tt]?!1:!fn[ce]&&(pe[ce]||!nr[ce]):!!(we==="application/xhtml+xml"&&rr[_.namespaceURI]):!1},Pt=function(_){Vo(e.removed,{element:_});try{w(_).removeChild(_)}catch{v(_)}},gt=function(_,W){try{Vo(e.removed,{attribute:W.getAttributeNode(_),from:W})}catch{Vo(e.removed,{attribute:null,from:W})}if(W.removeAttribute(_),_==="is")if(ie||xe)try{Pt(W)}catch{}else try{W.setAttribute(_,"")}catch{}},Jn=function(_){let W=null,ce=null;if(se)_="<remove></remove>"+_;else{let lt=Cs(_,/^[\r\n\t ]+/);ce=lt&&lt[0]}we==="application/xhtml+xml"&&zt===Tt&&(_='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+_+"</body></html>");let tt=A?A.createHTML(_):_;if(zt===Tt)try{W=new u().parseFromString(tt,we)}catch{}if(!W||!W.documentElement){W=S.createDocument(zt,"template",null);try{W.documentElement.innerHTML=_t?C:tt}catch{}}let Ke=W.body||W.documentElement;return _&&ce&&Ke.insertBefore(r.createTextNode(ce),Ke.childNodes[0]||null),zt===Tt?b.call(W,x?"html":"body")[0]:x?W.documentElement:Ke},Bt=function(_){return L.call(_.ownerDocument||_,_,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},Ut=function(_){return _ instanceof g&&(typeof _.nodeName!="string"||typeof _.textContent!="string"||typeof _.removeChild!="function"||!(_.attributes instanceof f)||typeof _.removeAttribute!="function"||typeof _.setAttribute!="function"||typeof _.namespaceURI!="string"||typeof _.insertBefore!="function"||typeof _.hasChildNodes!="function")},on=function(_){return typeof s=="function"&&_ instanceof s};function or(ue,_,W){ri(ue,ce=>{ce.call(e,_,W,Te)})}let Mr=function(_){let W=null;if(or(D.beforeSanitizeElements,_,null),Ut(_))return Pt(_),!0;let ce=et(_.nodeName);if(or(D.uponSanitizeElement,_,{tagName:ce,allowedTags:F}),k&&_.hasChildNodes()&&!on(_.firstElementChild)&&Yt(/<[/\w!]/g,_.innerHTML)&&Yt(/<[/\w!]/g,_.textContent)||_.nodeType===Qo.progressingInstruction||k&&_.nodeType===Qo.comment&&Yt(/<[/\w]/g,_.data))return Pt(_),!0;if(!(he.tagCheck instanceof Function&&he.tagCheck(ce))&&(!F[ce]||Me[ce])){if(!Me[ce]&&eo(ce)&&(te.tagNameCheck instanceof RegExp&&Yt(te.tagNameCheck,ce)||te.tagNameCheck instanceof Function&&te.tagNameCheck(ce)))return!1;if(Ue&&!Ve[ce]){let tt=w(_)||_.parentNode,Ke=N(_)||_.childNodes;if(Ke&&tt){let lt=Ke.length;for(let Ot=lt-1;Ot>=0;--Ot){let Wt=E(Ke[Ot],!0);Wt.__removalCount=(_.__removalCount||0)+1,tt.insertBefore(Wt,P(_))}}}return Pt(_),!0}return _ instanceof l&&!gn(_)||(ce==="noscript"||ce==="noembed"||ce==="noframes")&&Yt(/<\/no(script|embed|frames)/i,_.innerHTML)?(Pt(_),!0):(c&&_.nodeType===Qo.text&&(W=_.textContent,ri([ee,$,re],tt=>{W=Ko(W,tt," ")}),_.textContent!==W&&(Vo(e.removed,{element:_.cloneNode()}),_.textContent=W)),or(D.afterSanitizeElements,_,null),!1)},En=function(_,W,ce){if(Fe&&(W==="id"||W==="name")&&(ce in r||ce in pn))return!1;if(!(Le&&!Oe[W]&&Yt(ae,W))){if(!(Xe&&Yt(z,W))){if(!(he.attributeCheck instanceof Function&&he.attributeCheck(W,_))){if(!be[W]||Oe[W]){if(!(eo(_)&&(te.tagNameCheck instanceof RegExp&&Yt(te.tagNameCheck,_)||te.tagNameCheck instanceof Function&&te.tagNameCheck(_))&&(te.attributeNameCheck instanceof RegExp&&Yt(te.attributeNameCheck,W)||te.attributeNameCheck instanceof Function&&te.attributeNameCheck(W,_))||W==="is"&&te.allowCustomizedBuiltInElements&&(te.tagNameCheck instanceof RegExp&&Yt(te.tagNameCheck,ce)||te.tagNameCheck instanceof Function&&te.tagNameCheck(ce))))return!1}else if(!ve[W]){if(!Yt(ne,Ko(ce,H,""))){if(!((W==="src"||W==="xlink:href"||W==="href")&&_!=="script"&&rg(ce,"data:")===0&&pt[_])){if(!(vt&&!Yt(oe,Ko(ce,H,"")))){if(ce)return!1}}}}}}}return!0},eo=function(_){return _!=="annotation-xml"&&Cs(_,q)},An=function(_){or(D.beforeSanitizeAttributes,_,null);let{attributes:W}=_;if(!W||Ut(_))return;let ce={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:be,forceKeepAttr:void 0},tt=W.length;for(;tt--;){let Ke=W[tt],{name:lt,namespaceURI:Ot,value:Wt}=Ke,fr=et(lt),ar=Wt,mt=lt==="value"?ar:ng(ar);if(ce.attrName=fr,ce.attrValue=mt,ce.keepAttr=!0,ce.forceKeepAttr=void 0,or(D.uponSanitizeAttribute,_,ce),mt=ce.attrValue,Ce&&(fr==="id"||fr==="name")&&(gt(lt,_),mt=Ge+mt),k&&Yt(/((--!?|])>)|<\/(style|title|textarea)/i,mt)){gt(lt,_);continue}if(fr==="attributename"&&Cs(mt,"href")){gt(lt,_);continue}if(ce.forceKeepAttr)continue;if(!ce.keepAttr){gt(lt,_);continue}if(!h&&Yt(/\/>/i,mt)){gt(lt,_);continue}c&&ri([ee,$,re],Nn=>{mt=Ko(mt,Nn," ")});let an=et(_.nodeName);if(!En(an,fr,mt)){gt(lt,_);continue}if(A&&typeof p=="object"&&typeof p.getAttributeType=="function"&&!Ot)switch(p.getAttributeType(an,fr)){case"TrustedHTML":{mt=A.createHTML(mt);break}case"TrustedScriptURL":{mt=A.createScriptURL(mt);break}}if(mt!==ar)try{Ot?_.setAttributeNS(Ot,lt,mt):_.setAttribute(lt,mt),Ut(_)?Pt(_):Xd(e.removed)}catch{gt(lt,_)}}or(D.afterSanitizeAttributes,_,null)},mn=function ue(_){let W=null,ce=Bt(_);for(or(D.beforeSanitizeShadowDOM,_,null);W=ce.nextNode();)or(D.uponSanitizeShadowNode,W,null),Mr(W),An(W),W.content instanceof a&&ue(W.content);or(D.afterSanitizeShadowDOM,_,null)};return e.sanitize=function(ue){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},W=null,ce=null,tt=null,Ke=null;if(_t=!ue,_t&&(ue="<!-->"),typeof ue!="string"&&!on(ue))if(typeof ue.toString=="function"){if(ue=ue.toString(),typeof ue!="string")throw Yo("dirty is not a string, aborting")}else throw Yo("toString is not a function");if(!e.isSupported)return ue;if(Y||yr(_),e.removed=[],typeof ue=="string"&&(ge=!1),ge){if(ue.nodeName){let Wt=et(ue.nodeName);if(!F[Wt]||Me[Wt])throw Yo("root node is forbidden and cannot be sanitized in-place")}}else if(ue instanceof s)W=Jn("<!---->"),ce=W.ownerDocument.importNode(ue,!0),ce.nodeType===Qo.element&&ce.nodeName==="BODY"||ce.nodeName==="HTML"?W=ce:W.appendChild(ce);else{if(!ie&&!c&&!x&&ue.indexOf("<")===-1)return A&&ke?A.createHTML(ue):ue;if(W=Jn(ue),!W)return ie?null:ke?C:""}W&&se&&Pt(W.firstChild);let lt=Bt(ge?ue:W);for(;tt=lt.nextNode();)Mr(tt),An(tt),tt.content instanceof a&&mn(tt.content);if(ge)return ue;if(ie){if(xe)for(Ke=I.call(W.ownerDocument);W.firstChild;)Ke.appendChild(W.firstChild);else Ke=W;return(be.shadowroot||be.shadowrootmode)&&(Ke=O.call(n,Ke,!0)),Ke}let Ot=x?W.outerHTML:W.innerHTML;return x&&F["!doctype"]&&W.ownerDocument&&W.ownerDocument.doctype&&W.ownerDocument.doctype.name&&Yt(rh,W.ownerDocument.doctype.name)&&(Ot="<!DOCTYPE "+W.ownerDocument.doctype.name+`>
`+Ot),c&&ri([ee,$,re],Wt=>{Ot=Ko(Ot,Wt," ")}),A&&ke?A.createHTML(Ot):Ot},e.setConfig=function(){let ue=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};yr(ue),Y=!0},e.clearConfig=function(){Te=null,Y=!1},e.isValidAttribute=function(ue,_,W){Te||yr({});let ce=et(ue),tt=et(_);return En(ce,tt,W)},e.addHook=function(ue,_){typeof _=="function"&&Vo(D[ue],_)},e.removeHook=function(ue,_){if(_!==void 0){let W=eg(D[ue],_);return W===-1?void 0:tg(D[ue],W,1)[0]}return Xd(D[ue])},e.removeHooks=function(ue){D[ue]=[]},e.removeAllHooks=function(){D=Jd()},e}var eh,qd,Zf,Qf,Jf,Zt,Er,Os,Ls,Ds,ri,eg,Xd,Vo,tg,oi,Ns,Cs,Ko,rg,ng,$r,Yt,Yo,Vd,Is,Rs,ig,Ms,sg,Kd,Yd,Ps,Zd,ni,lg,cg,dg,hg,ug,th,pg,fg,rh,gg,Qd,Qo,mg,bg,Jd,Jo,oh=br(()=>{({entries:eh,setPrototypeOf:qd,isFrozen:Zf,getPrototypeOf:Qf,getOwnPropertyDescriptor:Jf}=Object),{freeze:Zt,seal:Er,create:Os}=Object,{apply:Ls,construct:Ds}=typeof Reflect<"u"&&Reflect;Zt||(Zt=function(e){return e});Er||(Er=function(e){return e});Ls||(Ls=function(e,r){for(var n=arguments.length,o=new Array(n>2?n-2:0),a=2;a<n;a++)o[a-2]=arguments[a];return e.apply(r,o)});Ds||(Ds=function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return new e(...n)});ri=Qt(Array.prototype.forEach),eg=Qt(Array.prototype.lastIndexOf),Xd=Qt(Array.prototype.pop),Vo=Qt(Array.prototype.push),tg=Qt(Array.prototype.splice),oi=Qt(String.prototype.toLowerCase),Ns=Qt(String.prototype.toString),Cs=Qt(String.prototype.match),Ko=Qt(String.prototype.replace),rg=Qt(String.prototype.indexOf),ng=Qt(String.prototype.trim),$r=Qt(Object.prototype.hasOwnProperty),Yt=Qt(RegExp.prototype.test),Yo=og(TypeError);Vd=Zt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Is=Zt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Rs=Zt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ig=Zt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ms=Zt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),sg=Zt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Kd=Zt(["#text"]),Yd=Zt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Ps=Zt(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Zd=Zt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ni=Zt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),lg=Er(/\{\{[\w\W]*|[\w\W]*\}\}/gm),cg=Er(/<%[\w\W]*|[\w\W]*%>/gm),dg=Er(/\$\{[\w\W]*/gm),hg=Er(/^data-[\-\w.\u00B7-\uFFFF]+$/),ug=Er(/^aria-[\-\w]+$/),th=Er(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),pg=Er(/^(?:\w+script|data):/i),fg=Er(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),rh=Er(/^html$/i),gg=Er(/^[a-z][.\w]*(-[.\w]+)+$/i),Qd=Object.freeze({__proto__:null,ARIA_ATTR:ug,ATTR_WHITESPACE:fg,CUSTOM_ELEMENT:gg,DATA_ATTR:hg,DOCTYPE_NAME:rh,ERB_EXPR:cg,IS_ALLOWED_URI:th,IS_SCRIPT_OR_DATA:pg,MUSTACHE_EXPR:lg,TMPLIT_EXPR:dg}),Qo={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},mg=function(){return typeof window>"u"?null:window},bg=function(e,r){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null,o="data-tt-policy-suffix";r&&r.hasAttribute(o)&&(n=r.getAttribute(o));let a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML(i){return i},createScriptURL(i){return i}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},Jd=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};Jo=nh()});function sh(){if(Wn)return Wn;if(typeof Jo?.sanitize=="function"&&Jo.isSupported)Wn=Jo;else{let t=typeof window<"u"?window:globalThis.window;if(!t)throw new Error("\u65E0\u6CD5\u6E05\u7406 HTML\uFF1A\u5F53\u524D\u73AF\u5883\u7F3A\u5C11\u6D4F\u89C8\u5668 window\u3002");Wn=Jo(t)}if(!Wn||typeof Wn.sanitize!="function")throw new Error("\u65E0\u6CD5\u6E05\u7406 HTML\uFF1A\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 DOMPurify\u3002");return Wn}function ai(t){if(!t)return"";try{return sh().sanitize(String(t),ih)}catch{return""}}function Fs(t){if(!t)return"";try{return sh().sanitize(String(t),vg)}catch{return""}}function jn(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ht(t){return String(t??"").replace(/\u00a0/g," ").replace(/[\t\f\v\u2000-\u200b\u2028\u2029]+/g," ").replace(/[ ]*\n[ ]*/g," ").replace(/ {2,}/g," ").trim()}function ea(t="div"){return document.createElement(t)}function Zr(t){try{return new DOMParser().parseFromString(String(t??""),"text/html")}catch{return null}}function bo(t){try{let e=new DOMParser().parseFromString(String(t??""),"application/xml");return!e||!e.documentElement||e.documentElement.localName?.toLowerCase()==="parsererror"||Jt(e,"parsererror")?null:e}catch{return null}}function vr(t){return String(t?.localName||t?.nodeName||"").toLowerCase()}function It(t,e){let r=[];if(!t)return r;let n=String(e).toLowerCase(),o=a=>{for(let i=a.firstChild;i;i=i.nextSibling)i.nodeType===1&&(vr(i)===n&&r.push(i),o(i))};return o(t),r}function Jt(t,e){if(!t)return null;let r=String(e).toLowerCase(),n=null,o=a=>{for(let i=a.firstChild;i&&!n;i=i.nextSibling)if(i.nodeType===1){if(vr(i)===r){n=i;return}o(i)}};return o(t),n}function it(t,e){if(!t||!e)return null;let r=t.getAttribute?.(e);if(r!=null)return r;let n=String(e).toLowerCase(),o=t.attributes;if(!o)return null;for(let a=0;a<o.length;a+=1){let i=o[a];if(!i)continue;if(String(i.name||"").toLowerCase()===n||!n.includes(":")&&String(i.localName||"").toLowerCase()===n)return i.value}return null}var ah,xg,ih,vg,Wn,Gn=br(()=>{oh();ah=Object.freeze(["b","strong","i","em","u","s","sub","sup","code","span","a","br","ruby","rt","rp","small","mark"]),xg=Object.freeze(["table","caption","thead","tbody","tfoot","tr","th","td","colgroup","col"]),ih=Object.freeze({ALLOWED_TAGS:[...ah],ALLOWED_ATTR:["href"],ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!1,KEEP_CONTENT:!0,FORBID_TAGS:["script","style","iframe","frame","frameset","object","embed","applet","form","input","button","select","textarea","meta","link","base","svg","math","template","noscript"],FORBID_ATTR:["style","src","srcset","formaction","xlink:href","onerror","onload","onclick"]}),vg=Object.freeze({...ih,ALLOWED_TAGS:[...ah,...xg]}),Wn=null});function Xn(t){return t.nextId()}function kg(t){if(!t||t.nodeType!==1)return!1;if(t.hasAttribute?.("hidden")||it(t,"aria-hidden")==="true")return!0;let e=it(t,"style")||"";return/display\s*:\s*none|visibility\s*:\s*hidden/i.test(e)}function Tg(t,e){typeof t?.warn=="function"&&t.warn(e)}function Bs(t){for(let e of Array.from(t?.children||[])){let r=vr(e);if(lh.has(r)&&r!=="span"&&r!=="a"||Bs(e))return!0}return!1}function ch(t){let e=Array.from(t.querySelectorAll(_g));for(let r=e.length-1;r>=0;r-=1){let n=e[r];if(!n.parentNode)continue;let o=t.ownerDocument.createDocumentFragment();for(;n.firstChild;)o.appendChild(n.firstChild);o.appendChild(t.ownerDocument.createElement("br")),n.parentNode.replaceChild(o,n)}return t}function dh(t){for(let e of It(t,"img"))e.remove();for(let e of It(t,"image"))e.remove()}function qn(t){let e=[],r=n=>{for(let o of Array.from(n?.children||[])){let a=vr(o);a==="img"||a==="image"?e.push(o):a==="svg"?e.push(...It(o,"image")):a!=="script"&&a!=="style"&&r(o)}};return r(t),e}function $s(t,e){if(!t||typeof e?.resolveLink!="function")return;let r=Array.from(t.getElementsByTagName?.("a")||[]);for(let n of r){let o=n.getAttribute("href");if(n.removeAttribute("href"),n.removeAttribute("data-chapter"),n.removeAttribute("data-anchor"),!o)continue;let a=null;try{a=e.resolveLink(o)}catch{a=null}if(a){if(a.external){a.href&&n.setAttribute("href",a.href);continue}Number.isInteger(a.chapter)&&a.chapter>=0&&(n.setAttribute("data-chapter",String(a.chapter)),a.anchor&&n.setAttribute("data-anchor",String(a.anchor).slice(0,300)))}}}function hh(t,e){let r=ai(t.innerHTML);if(!r)return null;let n=ea("div");n.innerHTML=r,$s(n,e);let o=n.innerHTML.replace(/^(?:\s*<br\s*\/?>\s*)+/i,"").replace(/(?:\s*<br\s*\/?>\s*)+$/i,"");if(!o)return null;let a=ht(n.textContent);return a?{html:o,text:a}:null}function li(t,e,r,n={}){let o=ai(r);if(!o)return null;let a=ea("div");a.innerHTML=o,$s(a,t);let i=a.innerHTML,s=ht(a.textContent);return s?{id:Xn(t),kind:e,html:i,text:s,...n}:null}function Hs(t,e){let r=String(e??"").replace(/\r\n?/g,`
`).replace(/\u00a0/g," ").replace(/^\n+|\n+$/g,"");return r.trim()?{id:Xn(t),kind:"code",html:jn(r),text:r}:null}function Us(t,e,r={}){let n=Fs(e);if(!n)return null;let o=ea("div");if(o.innerHTML=n,!o.querySelector("table"))return null;$s(o,t);let i=o.innerHTML,s=ht(o.textContent);return s?{id:Xn(t),kind:"table",html:i,text:s,...r}:null}function Ws(t,{src:e,alt:r="",caption:n=""}={}){if(!e)return null;let o={id:Xn(t),kind:"image",src:e},a=ht(r),i=ht(n);return a&&(o.alt=a),i&&(o.caption=i),o}function js(t){return{id:Xn(t),kind:"rule"}}function Vn(t,e){let r=[];return t&&ii(t,e,r),r}function ii(t,e,r){let n=[],o=()=>{if(n.length===0)return;let a=ea("div");for(let s of n)a.appendChild(s.cloneNode(!0));let i=ht(a.textContent)!==""||qn(a).length>0;n=[],i&&_n("paragraph",a,e,r)};for(let a of Array.from(t.childNodes||[])){if(a.nodeType===3){String(a.textContent||"").trim()&&n.push(a);continue}if(a.nodeType!==1||kg(a))continue;let i=vr(a);yg.has(i)||(lh.has(i)?(o(),Sg(a,i,e,r)):n.push(a))}o()}function Sg(t,e,r,n){if(zs.has(e)){_n("heading",t,r,n,{level:Number(e.slice(1)),stripImages:!0,flatten:!1});return}switch(e){case"p":_n("paragraph",t,r,n);return;case"li":case"dt":_n("list-item",t,r,n,{flatten:!0});return;case"dd":_n("paragraph",t,r,n,{flatten:!0});return;case"blockquote":_n("quote",t,r,n,{flatten:!0});return;case"pre":Ag(t,r,n);return;case"table":Ng(t,r,n);return;case"hr":n.push(js(r));return;case"figure":{Eg(t,r,n);return}case"img":case"image":si(t,r,n,"");return;case"picture":case"svg":{for(let o of qn(t))si(o,r,n,"");return}case"ul":case"ol":{for(let o of Array.from(t.children||[]))vr(o)==="li"?_n("list-item",o,r,n,{flatten:!0}):ii(o,r,n);return}case"dl":{ii(t,r,n);return}case"figcaption":return;default:wg.has(e)||Bs(t)?ii(t,r,n):_n("paragraph",t,r,n)}}function _n(t,e,r,n,o={}){let a=e.cloneNode(!0),i=qn(a);if(i.length>0)for(let l of i)l.remove();o.stripImages&&dh(a),o.flatten!==!1&&ch(a);let s=hh(a,r);if(s){let l={id:Xn(r),kind:t,html:s.html,text:s.text};o.level&&(l.level=o.level),n.push(l)}if(!o.stripImages&&i.length>0){let l=qn(e);for(let d of l)si(d,r,n,"")}}function si(t,e,r,n){let o=it(t,"src")||it(t,"xlink:href")||it(t,"href");if(!o)return;let a=null;try{a=typeof e?.resolveImage=="function"?e.resolveImage(o):null}catch{a=null}if(!a||!a.src)return;let i=it(t,"alt")||it(t,"title")||a.alt||"",s=Ws(e,{src:a.src,alt:i,caption:n||a.caption||""});s&&r.push(s)}function Eg(t,e,r){let n=It(t,"figcaption")[0]||null,o=n?ht(n.textContent):"",a=qn(t);a.length>0&&a.forEach((l,d)=>{si(l,e,r,d===0?o:"")});let i=t.cloneNode(!0);dh(i);for(let l of It(i,"figcaption"))l.remove();Bs(i)&&ch(i);let s=hh(i,e);s&&s.text!==o&&r.push({id:Xn(e),kind:"paragraph",html:s.html,text:s.text})}function Ag(t,e,r){let n=It(t,"code")[0]||t,o=String(n.textContent||"").replace(/\r\n?/g,`
`);if(!o.trim())return;let a=ai(n.innerHTML),i=Hs(e,o);i&&(a&&(i.html=a),r.push(i))}function Ng(t,e,r){let n=t.cloneNode(!0),o=Fs(n.outerHTML);if(!o){Tg(e,"\u5DF2\u8DF3\u8FC7\u4E00\u4E2A\u65E0\u6CD5\u89E3\u6790\u7684\u8868\u683C\u3002");return}let a=Us(e,o);a&&r.push(a)}var zs,yg,wg,lh,_g,ta=br(()=>{Gn();zs=new Set(["h1","h2","h3","h4","h5","h6"]),yg=new Set(["script","style","noscript","template","head","title","meta","link","base","iframe","frame","frameset","object","embed","applet","form","input","select","textarea","button","audio","video","source","track","canvas","map","area","math","nav"]),wg=new Set(["div","section","article","main","header","footer","aside","center","details","summary","fieldset","body","html","hgroup","dl"]),lh=new Set([...zs,"p","div","section","article","main","header","footer","aside","center","details","summary","fieldset","body","html","hgroup","dl","dt","dd","blockquote","pre","table","ul","ol","li","figure","figcaption","hr","address","picture","svg","img","image"]),_g=[...zs,"p","div","section","article","header","footer","aside","center","details","summary","fieldset","blockquote","ul","ol","li","dl","dt","dd","table","thead","tbody","tfoot","tr","td","th","caption","pre","figure","figcaption","address","hgroup"].join(",")});function ci(t){if(typeof t!="string"||!t)return"";let e=t.split(/[\\/]/).pop()||"",r=/\.([A-Za-z0-9]+)$/.exec(e);return r?r[1].toLowerCase():""}function Ar(t){let e=String(t||"").replace(/\\/g,"/"),r=e.lastIndexOf("/");return r>=0?e.slice(r+1):e}function xo(t){let e=String(t||"").replace(/\\/g,"/"),r=e.lastIndexOf("/");return r>0?e.slice(0,r):""}function Gs(t){let e=[];for(let r of String(t||"").replace(/\\/g,"/").split("/"))if(!(!r||r===".")){if(r===".."){e.pop();continue}e.push(r)}return e.join("/")}function ra(t){let e=String(t||""),r=e.indexOf("#"),n=r>=0?e.slice(0,r):e,o=r>=0?e.slice(r+1):"";try{o=decodeURIComponent(o)}catch{}let a=n.indexOf("?");return{path:a>=0?n.slice(0,a):n,fragment:o}}function kn(t,e){if(!e)return null;let r=String(e).trim();if(!r||r.startsWith("#")||/^[a-z][a-z0-9+.-]*:/i.test(r)||r.startsWith("//"))return null;let{path:n}=ra(r);if(!n)return null;let o=n;try{o=decodeURIComponent(n)}catch{}o=o.replace(/\\/g,"/");let a=o.startsWith("/")?o.slice(1):t?`${t}/${o}`:o;return Gs(a)||null}function ph(t){let e=new Map,r=[];for(let[n,o]of Object.entries(t||{})){if(!o||/\/$/.test(n))continue;let a=Gs(n);if(!a)continue;let i=a.toLowerCase();e.has(i)||(e.set(i,{name:a,bytes:o}),r.push(a))}return{names:r,get(n){let o=Gs(n||"");return o&&e.get(o.toLowerCase())||null},has(n){return!!this.get(n)}}}function na(t){return Cg[ci(t)]||"application/octet-stream"}async function Qr(t){if(!t||typeof t.arrayBuffer!="function")throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u6570\u636E\uFF1A\u8BF7\u9009\u62E9\u4E00\u4E2A\u6709\u6548\u7684\u6587\u6863\u6587\u4EF6\u3002");let e;try{e=await t.arrayBuffer()}catch{throw new Error("\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u6570\u636E\uFF0C\u6587\u4EF6\u53EF\u80FD\u5DF2\u88AB\u79FB\u52A8\u6216\u635F\u574F\u3002")}let r=new Uint8Array(e);if(r.length===0)throw new Error("\u6587\u4EF6\u5185\u5BB9\u4E3A\u7A7A\u3002");return r}function Jr(t=40){let e=[],r=new Set,n=!1;return{warnings:e,warn:a=>{let i=String(a||"").trim();!i||r.has(i)||(r.add(i),e.length<t?e.push(i):n||(n=!0,e.push("\u8FD8\u6709\u66F4\u591A\u89E3\u6790\u8B66\u544A\u672A\u663E\u793A\u3002")))}}}function Nr(t,e){if(t instanceof Error&&/[\u4e00-\u9fff]/.test(t.message))return t;let r=t instanceof Error?t.message:String(t??""),n=r?`${e}\uFF1A${r}`:`${e}\u3002`;return new Error(/[。！？]$/.test(n)?n:`${n}\u3002`)}function oa(t,e){let r=(Array.isArray(e)?e:[]).filter(a=>a&&Number.isInteger(a.chapterIndex)&&a.chapterIndex>=0&&a.chapterIndex<t.length&&a.title);for(let a=0;a<t.length;a+=1){let i=r.find(l=>l.chapterIndex===a),s=t[a].blocks.find(l=>l.kind==="heading"&&l.text);t[a].title=(i?.title||s?.text||`\u7B2C ${a+1} \u7AE0`).slice(0,120)}if(r.length===0)return t.map((a,i)=>({title:a.title,chapterIndex:i,depth:0}));let n=[],o=new Set;for(let a=0;a<t.length;a+=1){let i=r.filter(s=>s.chapterIndex===a);if(i.length===0){let s={title:t[a].title,chapterIndex:a,depth:0},l=`${a}|${s.title}|0`;o.has(l)||(o.add(l),n.push(s));continue}for(let s of i){let l=Number.isInteger(s.depth)&&s.depth>=0?s.depth:0,d=s.anchor?String(s.anchor).slice(0,300):"",f=`${s.chapterIndex}|${s.title}|${l}|${d}`;o.has(f)||(o.add(f),n.push({title:s.title,chapterIndex:s.chapterIndex,depth:l,...d?{anchor:d}:{}}))}}return n}function Yn(t,e="\u672A\u547D\u540D\u6587\u6863"){return Ar(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||e}function Tn(){let t=[];return{urls:t,create(e){let r=URL.createObjectURL(e);return t.push(r),r},add(e){return e&&!t.includes(e)&&t.push(e),e},dispose(){for(;t.length>0;){let e=t.pop();try{URL.revokeObjectURL(e)}catch{}}}}}function Sn(t){let e=/^data:([^;,]*)((?:;[^;,]*)*),(.*)$/is.exec(String(t||""));if(!e)return null;let r=e[1]||"application/octet-stream",n=e[2]||"",o=e[3]||"",a=/;base64/i.test(n);try{let i;if(a){let l=o.replace(/\s+/g,"");i=atob(l)}else i=decodeURIComponent(o);let s=new Uint8Array(i.length);for(let l=0;l<i.length;l+=1)s[l]=i.charCodeAt(l)&255;return new Blob([s],{type:r})}catch{return null}}function uh(t){let e=String(t||"").trim().toLowerCase();return!e||/^(utf-?8|utf8)$/.test(e)?"utf-8":/^utf-?16(le)?$/.test(e)?"utf-16le":/^utf-?16be$/.test(e)?"utf-16be":/^(gb2312|gbk|gb18030|cp936|x-gbk)$/.test(e)?"gb18030":/^(big5|big5-hkscs|cp950)$/.test(e)?"big5":/^(shift_jis|sjis|windows-31j|cp932)$/.test(e)?"shift_jis":/^(euc-kr|ks_c_5601-1987|cp949)$/.test(e)?"euc-kr":/^(iso-8859-1|latin1|windows-1252|cp1252)$/.test(e)?"windows-1252":e}function Kn(t,e,r=!1){return new TextDecoder(e,{fatal:r}).decode(t)}function Rg(t){let e=Kn(t.subarray(0,Math.min(t.length,512)),"windows-1252"),r=Ig.exec(e);return r&&(r[1]||r[2])||""}function en(t,{defaultEncoding:e="utf-8",sniffDeclaration:r=!0}={}){let n=t instanceof Uint8Array?t:new Uint8Array(t);if(n.length===0)return"";if(n[0]===239&&n[1]===187&&n[2]===191)return Kn(n.subarray(3),"utf-8");if(n[0]===255&&n[1]===254)return Kn(n.subarray(2),"utf-16le");if(n[0]===254&&n[1]===255)return Kn(n.subarray(2),"utf-16be");let o=e||"utf-8";if(r){let a=Rg(n);a&&(o=uh(a))}o=uh(o);try{return Kn(n,o,!0)}catch{try{return Kn(n,"utf-8",!0)}catch{return Kn(n,"utf-8",!1)}}}function di(t){if(!t)return!1;let e=t.slice(0,4096);if(!e)return!1;let r=0;for(let n=0;n<e.length;n+=1){let o=e.charCodeAt(n);(o===65533||o===0||o<9||o>13&&o<32)&&(r+=1)}return r/e.length>.08}var Cg,Ig,Zn=br(()=>{Cg={jpg:"image/jpeg",jpeg:"image/jpeg",jpe:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",avif:"image/avif",bmp:"image/bmp",tif:"image/tiff",tiff:"image/tiff",svg:"image/svg+xml",ico:"image/x-icon",jxl:"image/jxl"};Ig=/(?:encoding\s*=\s*["']([A-Za-z0-9._-]+)["'])|(?:charset\s*=\s*["']?([A-Za-z0-9._-]+))/i});function fh(t){return/^(https?:|mailto:|tel:)/i.test(t)}function qs(t){return/^[a-z][a-z0-9+.-]*:/i.test(t)}function Pg(t,e){e&&!t.includes(e)&&t.push(e)}async function gh(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Jr(),a=Tn();try{let oe=function(c,k){let x=String(c||"").trim();if(!x||fh(x)||x.startsWith("//")||qs(x))return null;let{path:Y,fragment:se}=ra(x),ie=Y?kn(k,x):null,xe=ie?$.get(ie.toLowerCase()):void 0;return xe==null&&ie&&(xe=re.get(Ar(ie).toLowerCase())),xe==null?null:{chapterIndex:xe,anchor:se}},i=await Qr(t),s;try{s=Gd(i)}catch{throw new Error("EPUB \u538B\u7F29\u5305\u5DF2\u635F\u574F\uFF0C\u65E0\u6CD5\u89E3\u538B\u3002")}let l=ph(s);if(l.names.length===0)throw new Error("EPUB \u538B\u7F29\u5305\u4E0D\u5305\u542B\u4EFB\u4F55\u6587\u4EF6\u3002");let d=l.get("META-INF/encryption.xml");if(d){let c=en(d.bytes);if(/<encrypteddata/i.test(c)&&/application\/(xhtml\+xml|epub\+zip)/i.test(c))throw new Error("\u8BE5 EPUB \u6587\u4EF6\u53D7 DRM \u4FDD\u62A4\uFF0C\u65E0\u6CD5\u6253\u5F00\u3002")}let f=l.get("META-INF/container.xml");if(!f){let c=l.names.find(k=>/container\.xml$/i.test(k));c&&(f=l.get(c))}if(!f)throw new Error("\u7F3A\u5C11 META-INF/container.xml\uFF0C\u4E0D\u662F\u6709\u6548\u7684 EPUB \u6587\u4EF6\u3002");let g=bo(en(f.bytes));if(!g)throw new Error("META-INF/container.xml \u683C\u5F0F\u9519\u8BEF\u3002");let u=It(g,"rootfile")[0],p=u?it(u,"full-path"):"";if(!p)throw new Error("container.xml \u4E2D\u6CA1\u6709\u6307\u5B9A OPF \u5185\u5BB9\u6E05\u5355\u3002");let y=l.get(p)||l.get(kn("",p));if(!y)throw new Error(`\u627E\u4E0D\u5230 EPUB \u5185\u5BB9\u6E05\u5355\u6587\u4EF6\uFF1A${p}`);let E=xo(y.name),v=bo(en(y.bytes));if(!v)throw new Error("EPUB \u5185\u5BB9\u6E05\u5355\uFF08OPF\uFF09\u683C\u5F0F\u9519\u8BEF\u3002");let N=Jt(v,"metadata")||v,w=It(N,"title").map(c=>ht(c.textContent)).filter(Boolean),A=[];for(let c of It(N,"creator"))Pg(A,ht(c.textContent));let C=It(N,"language").map(c=>ht(c.textContent)).filter(Boolean),L=It(N,"meta").filter(c=>String(it(c,"name")||"").toLowerCase()==="cover").map(c=>it(c,"content")||"").find(Boolean)||"",I=Jt(v,"manifest");if(!I)throw new Error("OPF \u5185\u5BB9\u6E05\u5355\u7F3A\u5C11 manifest \u5217\u8868\u3002");let b=new Map;for(let c of It(I,"item")){let k=it(c,"id");if(!k||b.has(k))continue;let x=it(c,"href")||"",Y=kn(E,x);b.set(k,{id:k,href:x,path:Y,mediaType:String(it(c,"media-type")||"").toLowerCase(),properties:String(it(c,"properties")||"").toLowerCase()})}let O=Jt(v,"spine");if(!O)throw new Error("OPF \u5185\u5BB9\u6E05\u5355\u7F3A\u5C11 spine \u9605\u8BFB\u987A\u5E8F\u3002");let D=It(O,"itemref");if(D.length===0)throw new Error("EPUB \u7684\u9605\u8BFB\u987A\u5E8F\uFF08spine\uFF09\u4E3A\u7A7A\u3002");let ee=[],$=new Map,re=new Map;for(let c of D){let k=it(c,"idref"),x=k?b.get(k):null;if(!x){o(`\u9605\u8BFB\u987A\u5E8F\u4E2D\u7684\u6761\u76EE\u201C${k||"\u672A\u77E5"}\u201D\u4E0D\u5728\u6E05\u5355\u4E2D\uFF0C\u5DF2\u8DF3\u8FC7\u3002`);continue}if(/\bnav\b/.test(x.properties))continue;if(!x.path){o(`\u7AE0\u8282\u6587\u4EF6\u201C${x.href||x.id}\u201D\u4F4D\u4E8E\u5916\u90E8\u7F51\u7EDC\uFF0C\u5DF2\u8DF3\u8FC7\u3002`);continue}let Y=l.get(x.path);if(!Y){o(`\u627E\u4E0D\u5230\u7AE0\u8282\u6587\u4EF6\uFF1A${x.path}`);continue}let se=x.mediaType||"",ie=Mg.has(se)||/\.(x?html?|htm)$/i.test(x.path),xe=se.startsWith("image/")||/\.(png|jpe?g|gif|webp|avif|bmp|tiff?|svg)$/i.test(x.path);if(!ie&&!xe){o(`\u4E0D\u652F\u6301\u7684\u7AE0\u8282\u7C7B\u578B\uFF08${se||"\u672A\u77E5"}\uFF09\uFF1A${x.path}`);continue}let ke=ee.length;ee.push({item:x,entry:Y,isImage:xe,chapterIndex:ke}),$.set(x.path.toLowerCase(),ke);let Fe=Ar(x.path).toLowerCase();re.has(Fe)||re.set(Fe,ke)}if(ee.length===0)throw new Error("EPUB \u4E2D\u6CA1\u6709\u627E\u5230\u53EF\u663E\u793A\u7684\u7AE0\u8282\u5185\u5BB9\u3002");let ae=0,z=()=>`b${ae+=1}`,H=[];for(let c of ee){let{item:k,entry:x,isImage:Y,chapterIndex:se}=c;if(Y){let Ve=k.mediaType.startsWith("image/")?k.mediaType:na(k.path),ze=a.create(new Blob([x.bytes],{type:Ve}));H.push({id:`ch${se}`,title:"",blocks:[{id:z(),kind:"image",src:ze}]});continue}let ie=xo(k.path),xe=Ve=>{let ze=String(Ve||"").trim();if(!ze)return null;if(/^data:/i.test(ze)){let wt=Sn(ze);return wt?{src:a.create(wt)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684\u5185\u5D4C\u56FE\u7247\u3002"),null)}if(/^(https?:)?\/\//i.test(ze))return o("\u5DF2\u8DF3\u8FC7\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\uFF08\u907F\u514D\u8DDF\u8E2A\u4E0E\u9690\u79C1\u6CC4\u9732\uFF09\u3002"),null;if(qs(ze))return null;let pt=kn(ie,ze),st=pt?l.get(pt):null;if(!st)return o(`\u627E\u4E0D\u5230\u56FE\u7247\u6587\u4EF6\uFF1A${Ar(pt||ze)}`),null;let ve=na(pt);return{src:a.create(new Blob([st.bytes],{type:ve}))}},ke=Ve=>{let ze=String(Ve||"").trim();if(!ze)return null;if(fh(ze))return{external:!0,href:ze};if(ze.startsWith("//")||qs(ze))return null;let{path:pt,fragment:st}=ra(ze);if(!pt)return{chapter:se,anchor:st};let ve=kn(ie,ze),wt=ve?$.get(ve.toLowerCase()):void 0;return wt==null&&ve&&(wt=re.get(Ar(ve).toLowerCase())),wt==null?null:{chapter:wt,anchor:st}},Fe="";try{Fe=en(x.bytes)}catch{o(`\u7B2C ${se+1} \u7AE0\u7684\u7F16\u7801\u65E0\u6CD5\u8BC6\u522B\uFF0C\u5DF2\u5C3D\u91CF\u6309 UTF-8 \u8BFB\u53D6\u3002`)}let Ce=bo(Fe),Ge=Ce&&(Jt(Ce,"body")||Ce.documentElement)||null,Ue=Ge?null:Zr(Fe),ge=Ge||Ue?.body||Ue?.documentElement||null,$e=ge?Vn(ge,{nextId:z,warn:o,chapterIndex:se,resolveImage:xe,resolveLink:ke}):[];$e.length===0&&o(`\u7B2C ${se+1} \u7AE0\u6CA1\u6709\u53EF\u663E\u793A\u7684\u5185\u5BB9\u3002`),H.push({id:`ch${se}`,title:"",blocks:$e})}let q=[...b.values()].find(c=>/\bnav\b/.test(c.properties)&&c.path),ne=it(O,"toc"),F=ne&&b.get(ne)||[...b.values()].find(c=>c.mediaType==="application/x-dtbncx+xml"&&c.path)||null,de=c=>{let k=l.get(c.path);if(!k)return o(`\u627E\u4E0D\u5230 EPUB \u5BFC\u822A\u6587\u4EF6\uFF1A${c.path}`),[];let x=en(k.bytes),Y=bo(x)||Zr(x);if(!Y)return o("\u65E0\u6CD5\u89E3\u6790 EPUB \u5BFC\u822A\u76EE\u5F55\u3002"),[];let se=It(Y,"nav"),ie=se.find(Ue=>String(it(Ue,"type")||it(Ue,"epub:type")||"").toLowerCase().split(/\s+/).includes("toc"))||se[0]||null;if(!ie)return[];let xe=Jt(ie,"ol")||Jt(ie,"ul");if(!xe)return[];let ke=[],Fe=xo(c.path),Ce=$.get(c.path.toLowerCase()),Ge=(Ue,ge)=>{for(let $e of Array.from(Ue.children||[])){if(vr($e)!=="li")continue;let Ve=null,ze=null;for(let pt of Array.from($e.children||[])){let st=vr(pt);!Ve&&(st==="a"||st==="span")&&(Ve=pt),!ze&&(st==="ol"||st==="ul")&&(ze=pt)}if(Ve&&vr(Ve)==="a"){let pt=ht(Ve.textContent).slice(0,200),st=it(Ve,"href")||"",ve=oe(st,Fe);if(!ve&&st.startsWith("#")&&Ce!=null){let{fragment:wt}=ra(st);ve={chapterIndex:Ce,anchor:wt}}pt&&ve&&ke.push({title:pt,chapterIndex:ve.chapterIndex,depth:ge,...ve.anchor?{anchor:ve.anchor}:{}})}ze&&Ge(ze,ge+1)}};return Ge(xe,0),ke},be=c=>{let k=l.get(c.path);if(!k)return o(`\u627E\u4E0D\u5230 EPUB NCX \u76EE\u5F55\u6587\u4EF6\uFF1A${c.path}`),[];let x=en(k.bytes),Y=bo(x)||Zr(x);if(!Y)return o("\u65E0\u6CD5\u89E3\u6790 EPUB NCX \u76EE\u5F55\u3002"),[];let se=[],ie=xo(c.path);for(let xe of It(Y,"navpoint")){let ke=Jt(xe,"navlabel"),Fe=ke?Jt(ke,"text"):Jt(xe,"text"),Ce=ht(Fe?.textContent||"").slice(0,200),Ge=Array.from(xe.children||[]).find($e=>vr($e)==="content")||Jt(xe,"content"),Ue=oe(it(Ge,"src")||"",ie);if(!Ce||!Ue)continue;let ge=0;for(let $e=xe.parentNode;$e;$e=$e.parentNode)vr($e)==="navpoint"&&(ge+=1);se.push({title:Ce,chapterIndex:Ue.chapterIndex,depth:ge,...Ue.anchor?{anchor:Ue.anchor}:{}})}return se},Ae=[];q&&(Ae=de(q),Ae.length===0&&o("EPUB \u5BFC\u822A\u6587\u4EF6\u6CA1\u6709\u53EF\u7528\u7684\u76EE\u5F55\u9879\u3002"));let te=[];Ae.length===0&&F&&(te=be(F));let Me=Ae.length>0?Ae:te;Me.length===0&&o("\u672A\u627E\u5230 EPUB \u76EE\u5F55\uFF0C\u5DF2\u6309\u7AE0\u8282\u6807\u9898\u751F\u6210\u3002");let Oe=oa(H,Me),he="",Xe=[...b.values()].find(c=>/\bcover-image\b/.test(c.properties)&&c.path);if(Xe)he=Xe.path;else if(L&&b.get(L)?.path)he=b.get(L).path;else{let c=Jt(v,"guide");if(c){let k=It(c,"reference").find(x=>/\bcover\b/.test(String(it(x,"type")||"").toLowerCase()));k&&(he=kn(E,it(k,"href")||"")||"")}}let Le="";if(he){let c=l.get(he);if(c){let k=na(he);if(k.startsWith("image/"))Le=a.create(new Blob([c.bytes],{type:k}));else if(/\.(x?html?|htm)$/i.test(he)){let x=Zr(en(c.bytes)),Y=qn(x?.body||x?.documentElement||x)[0],se=Y&&(it(Y,"src")||it(Y,"xlink:href"))||"",ie=se?kn(xo(he),se):null,xe=ie?l.get(ie):null;xe&&(Le=a.create(new Blob([xe.bytes],{type:na(ie)})))}}}let h={title:w[0]||Yn(r),chapters:H,toc:Oe,warnings:n,dispose:()=>a.dispose()};return A.length>0&&(h.author=A.join(", ")),C.length>0&&(h.language=C[0]),Le&&(h.cover=Le),h}catch(i){throw a.dispose(),Nr(i,"\u65E0\u6CD5\u89E3\u6790 EPUB \u6587\u4EF6")}}var Mg,mh=br(()=>{As();Gn();ta();Zn();Mg=new Set(["application/xhtml+xml","text/html","application/xml","text/xml","text/xhtml"])});function Og(t){return Ar(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u6863"}async function aa(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Jr(),a=Tn();try{let i=await Qr(t),s=en(i),l=Zr(s);if(!l)throw new Error("HTML \u6587\u4EF6\u683C\u5F0F\u9519\u8BEF\uFF0C\u65E0\u6CD5\u89E3\u6790\u3002");let d=l.body||l.documentElement;if(!d)throw new Error("HTML \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let f=0,u=Vn(d,{nextId:()=>`b${f+=1}`,warn:o,resolveImage:w=>{let A=String(w||"").trim();if(!A)return null;if(/^data:/i.test(A)){let C=Sn(A);return C?{src:a.create(C)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684\u5185\u5D4C\u56FE\u7247\u3002"),null)}return/^(https?:)?\/\//i.test(A)?(o("\u5DF2\u8DF3\u8FC7\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\uFF08\u907F\u514D\u8DDF\u8E2A\u4E0E\u9690\u79C1\u6CC4\u9732\uFF09\u3002"),null):(o("\u5DF2\u8DF3\u8FC7 HTML \u4E2D\u7684\u672C\u5730\u56FE\u7247\uFF08\u65E0\u6CD5\u5B9A\u4F4D\u56FE\u7247\u6587\u4EF6\uFF09\u3002"),null)},resolveLink:w=>{let A=String(w||"").trim();return A?/^(https?:\/\/|mailto:)/i.test(A)?{external:!0,href:A}:A.startsWith("#")?{chapter:0,anchor:A.slice(1)}:null:null}});if(u.length===0)throw new Error("HTML \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let p=Jt(l,"title"),y=u.find(w=>w.kind==="heading"&&w.text),E=ht(p?.textContent||"")||y?.text||Og(r),v=it(l.documentElement,"lang")||"",P=[];for(let w of It(l,"meta"))if(String(it(w,"name")||"").toLowerCase()==="author"){let A=ht(it(w,"content")||"");A&&!P.includes(A)&&P.push(A)}let N={title:E,chapters:[{id:"ch0",title:E,blocks:u}],toc:[{title:E,chapterIndex:0,depth:0}],warnings:n,dispose:()=>a.dispose()};return v&&(N.language=v),P.length>0&&(N.author=P.join(", ")),N}catch(i){throw a.dispose(),Nr(i,"\u65E0\u6CD5\u89E3\u6790 HTML \u6587\u4EF6")}}var bh=br(()=>{Gn();ta();Zn()});function xh(t){return/[\u3000-\u303f\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uffef\uac00-\ud7af]/.test(t)}function vh(t){let e="";for(let r of t){let n=String(r).trim();if(!n)continue;if(!e){e=n;continue}let o=e[e.length-1],a=n[0];e+=xh(o)&&xh(a)?n:` ${n}`}return e}function $g(t){let e=String(t||"").trim();if(!e||e.length>Bg)return!1;if(Dg.test(e)||Fg.test(e))return!/[，,。；;]/.test(e);if(zg.test(e)){let r=e.split(/\s+/).filter(Boolean).length;return!(r>14||/\.$/u.test(e)&&r>3)}return!1}function Xs(t){if(!t||t.length===0)throw new Error("\u6587\u672C\u6587\u4EF6\u5185\u5BB9\u4E3A\u7A7A\u3002");if(t[0]===239&&t[1]===187&&t[2]===191)return{text:new TextDecoder("utf-8").decode(t.subarray(3)),encoding:"utf-8"};if(t[0]===255&&t[1]===254)return{text:new TextDecoder("utf-16le").decode(t.subarray(2)),encoding:"utf-16le"};if(t[0]===254&&t[1]===255)return{text:new TextDecoder("utf-16be").decode(t.subarray(2)),encoding:"utf-16be"};let e=Math.min(t.length,4096),r=0,n=0;for(let a=0;a<e;a+=2)t[a]===0&&(r+=1),a+1<e&&t[a+1]===0&&(n+=1);let o=Math.ceil(e/2);if(o>4&&n/o>.35&&r/o<.05)return{text:new TextDecoder("utf-16le").decode(t),encoding:"utf-16le"};if(o>4&&r/o>.35&&n/o<.05)return{text:new TextDecoder("utf-16be").decode(t),encoding:"utf-16be"};try{return{text:new TextDecoder("utf-8",{fatal:!0}).decode(t),encoding:"utf-8"}}catch{}try{return{text:new TextDecoder("gb18030",{fatal:!0}).decode(t),encoding:"gb18030"}}catch{}return{text:new TextDecoder("utf-8").decode(t),encoding:"utf-8"}}function Hg(t){let e=[],r=[],n=()=>{r.length>0&&(e.push(r),r=[])};for(let o of t)String(o).trim()?r.push(o):n();return n(),e}function Ug(t){let e=t.map(n=>n.trim()).filter(Boolean);return e.length<2?!1:e.filter(n=>/[。！？!?…"”’」』）)]$/.test(n)).length/e.length>=.5}function Wg(t){let e=t.map(o=>String(o)),r=Hg(e);if(r.length>1)return r.map(o=>vh(o)).filter(Boolean);let n=e.map(o=>o.trim()).filter(Boolean);return n.length<=1||Ug(n)?n:r.map(o=>vh(o)).filter(Boolean)}function jg(t,{fallbackTitle:e="\u6B63\u6587"}={}){let n=String(t||"").replace(/\r\n?/g,`
`).replace(/\u0000/g,"").split(`
`),o=[],a={title:"",lines:[],heading:""},i=()=>{(a.heading||a.lines.some(s=>s.trim()))&&o.push(a),a={title:"",lines:[],heading:""}};for(let s of n){if($g(s)){i();let l=s.trim();a={title:l,lines:[],heading:l};continue}a.lines.push(s)}return i(),o.length===0?[{title:e,lines:n,heading:""}]:o}function Vs(t,{nextId:e,title:r="\u6B63\u6587"}={}){let n=jg(t,{fallbackTitle:r}),o=i=>i.lines.some(s=>String(s).trim()),a=[];for(let i=0;i<n.length;i+=1){if(o(n[i])){a.push(n[i]);continue}let s=i;for(;s+1<n.length&&!o(n[s+1]);)s+=1;if(s-i+1>=3){i=s;continue}a.push(...n.slice(i,s+1)),i=s}return n=a.length>0?a:n,n.map((i,s)=>{let l=[];i.heading&&l.push({id:e(),kind:"heading",level:1,html:jn(i.heading),text:ht(i.heading)});for(let d of Wg(i.lines))l.push({id:e(),kind:"paragraph",html:jn(d),text:d});return{id:`ch${s}`,title:i.title||r||`\u7B2C ${s+1} \u7AE0`,blocks:l}})}function Gg(t){return Ar(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u672C"}async function Ks(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Jr();try{let a=await Qr(t),{text:i,encoding:s}=Xs(a);if(di(i))throw new Error("\u6587\u672C\u6587\u4EF6\u5305\u542B\u5927\u91CF\u65E0\u6CD5\u8BC6\u522B\u7684\u5B57\u7B26\uFF0C\u53EF\u80FD\u4E0D\u662F\u7EAF\u6587\u672C\u6587\u4EF6\u3002");s==="gb18030"&&o("\u5DF2\u6309 GB18030 \u7F16\u7801\u8BFB\u53D6\u6587\u672C\uFF08\u975E UTF-8\uFF09\u3002");let l=Gg(r),d=0,g=Vs(i,{nextId:()=>`b${d+=1}`,title:l});if(g.length===0||g.every(p=>p.blocks.length===0))throw new Error("\u6587\u672C\u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");g[0].title||(g[0].title=l);let u=g.map((p,y)=>({title:p.title,chapterIndex:y,depth:0}));return{title:l,chapters:g,toc:u,warnings:n,encoding:s,dispose:()=>{}}}catch(a){throw Nr(a,"\u65E0\u6CD5\u89E3\u6790\u6587\u672C\u6587\u4EF6")}}var Lg,Dg,Fg,zg,Bg,hi=br(()=>{Gn();Zn();Lg="[0-9\uFF10-\uFF19\u96F6\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u767E\u5343\u4E07\u4E24]",Dg=new RegExp(`^\\s*(\u7B2C\\s*${Lg}+\\s*[\u7AE0\u7BC0\u8282\u56DE\u5377\u7BC7])(?:[\\s:\uFF1A\xB7\u3001.\uFF0E\u2014\u2013-].*)?$`),Fg=/^\s*(序章|楔子|引子|前言|序言|后记|後記|尾声|尾聲|终章|終章|番外(?:篇)?)(?:[\s:：·、.．—–-].*)?$/,zg=/^\s*((?:chapter|part|book|section)\s+(?:[0-9]+|[ivxlcdm]{1,8}|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty))(?:[.:：\s—–-].*)?$/i,Bg=72});function Vg(t){let e=String(t||"").trim();return e&&(/^(https?:\/\/|mailto:)/i.test(e)||e.startsWith("#"))?e:""}function Ys(t){let e=jn(String(t??"").trim()),r=[],n=o=>{let a=`\0${r.length}\0`;return r.push(o),a};return e=e.replace(/`([^`]+)`/g,(o,a)=>n(`<code>${a}</code>`)),e=e.replace(qg,(o,a,i)=>{let s=Vg(i);return s?n(`<a href="${s}">${a}</a>`):a}),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/__([^_]+)__/g,"<strong>$1</strong>").replace(/~~([^~]+)~~/g,"<s>$1</s>").replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g,"$1<em>$2</em>").replace(/(^|[^_])_([^_\n]+)_(?!_)/g,"$1<em>$2</em>"),e=e.replace(/\u0000(\d+)\u0000/g,(o,a)=>r[Number(a)]??""),e}function Kg(t){return Ar(String(t||"")).replace(/\.[A-Za-z0-9]+$/,"")||"\u672A\u547D\u540D\u6587\u6863"}function ia(t){return String(t).trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(e=>e.trim())}function Yg(t){if(!/\|/.test(t))return!1;let e=ia(t);return e.length>0&&e.every(r=>/^:?-{3,}:?$/.test(r))}function wh(t,e){return!!e&&t.includes("|")&&Yg(e)&&ia(t).length===ia(e).length}function yh(t,e){return!!(/^\s{0,3}(#{1,6}\s|>|(?:```|~~~))/.test(t)||/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(t)||/^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/.test(t)||wh(t,e))}function Zg(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Jr(),a=Tn(),i=0,s={nextId:()=>`b${i+=1}`,warn:o,resolveLink:v=>{let P=String(v||"").trim();return P?/^(https?:\/\/|mailto:)/i.test(P)?{external:!0,href:P}:P.startsWith("#")?{chapter:0,anchor:P.slice(1)}:null:null}},l=[],d=[];function f(v){let P=String(v??""),N=[];return P=P.replace(Xg,(w,A,C)=>{let S=ht(A);if(/^data:image\//i.test(C)){let L=Sn(C);if(L){let I=Ws(s,{src:a.create(L),alt:S});I&&N.push(I)}else o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684 Markdown \u5185\u5D4C\u56FE\u7247\u3002")}else/^https?:/i.test(C)?o("\u5DF2\u8DF3\u8FC7 Markdown \u4E2D\u7684\u5916\u90E8\u56FE\u7247\uFF08\u907F\u514D\u7F51\u7EDC\u8DDF\u8E2A\uFF09\u3002"):o("\u5DF2\u8DF3\u8FC7 Markdown \u4E2D\u7684\u672C\u5730\u56FE\u7247\uFF08\u65E0\u6CD5\u5B9A\u4F4D\u56FE\u7247\u6587\u4EF6\uFF09\u3002");return S?` ${S} `:" "}),{html:Ys(P),images:N}}function g(v,P,N={}){let{html:w,images:A}=f(P),C=li(s,v,w,N);C&&l.push(C);for(let S of A)l.push(S);return!!C}let u=String(t??"").replace(/\r\n?/g,`
`).replace(/\u0000/g,"").split(`
`),p=0;for(;p<u.length;){let v=u[p];if(!v.trim()){p+=1;continue}let P=/^\s*(`{3,}|~{3,})\s*([A-Za-z0-9_+#.-]*)\s*$/.exec(v);if(P){let S=P[1],L=[];p+=1;let I=new RegExp(`^\\s*${S[0]==="`"?"`":"~"}{${S.length},}\\s*$`);for(;p<u.length;){if(I.test(u[p])){p+=1;break}L.push(u[p]),p+=1}let b=Hs(s,L.join(`
`));b&&l.push(b);continue}let N=/^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(v);if(N){g("heading",N[2],{level:N[1].length}),p+=1;continue}if(/^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/.test(v)){l.push(js(s)),p+=1;continue}if(wh(v,u[p+1])){let S=ia(v);p+=2;let L=[];for(;p<u.length&&u[p].includes("|")&&u[p].trim();)L.push(ia(u[p])),p+=1;let I=`<thead><tr>${S.map(D=>`<th>${Ys(D)}</th>`).join("")}</tr></thead>`,b=L.length>0?`<tbody>${L.map(D=>`<tr>${S.map((ee,$)=>`<td>${Ys(D[$]||"")}</td>`).join("")}</tr>`).join("")}</tbody>`:"",O=Us(s,`<table>${I}${b}</table>`);O&&l.push(O);continue}if(/^\s{0,3}>/.test(v)){let S=[];for(;p<u.length&&/^\s{0,3}>/.test(u[p]);)S.push(u[p].replace(/^\s{0,3}>\s?/,"")),p+=1;let L=[],I=[];for(let O of S){let D=f(O);D.html&&L.push(D.html),I.push(...D.images)}let b=li(s,"quote",L.join("<br>"));b&&l.push(b);for(let O of I)l.push(O);continue}if(/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(v)){for(;p<u.length;){let S=/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+(.*)$/.exec(u[p]);if(!S)break;for(g("list-item",S[1]),p+=1;p<u.length&&/^\s{2,}\S/.test(u[p])&&!/^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/.test(u[p])&&!yh(u[p],u[p+1]);)p+=1}continue}let w=[];for(;p<u.length&&u[p].trim()&&!yh(u[p],u[p+1]);)w.push(u[p]),p+=1;if(w.length===0){p+=1;continue}let A=[];for(let S of w){let L=/(?: {2,}|\\)$/.test(S),I=f(S.replace(/(?: {2,}|\\)$/,""));I.html&&A.push(L?`${I.html}<br>`:I.html),d.push(...I.images)}let C=li(s,"paragraph",A.join(" "));for(C&&l.push(C);d.length>0;)l.push(d.shift())}let E=l.find(v=>v.kind==="heading"&&v.text)?.text||Kg(r);if(l.length===0)throw a.dispose(),new Error("Markdown \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");return{title:E,chapters:[{id:"ch0",title:E,blocks:l}],toc:[{title:E,chapterIndex:0,depth:0}],warnings:n,dispose:()=>a.dispose()}}async function sa(t,e={}){try{let r=await Qr(t),{text:n}=Xs(r);return Zg(n,e)}catch(r){throw Nr(r,"\u65E0\u6CD5\u89E3\u6790 Markdown \u6587\u4EF6")}}var qg,Xg,_h=br(()=>{Gn();ta();Zn();hi();qg=/\[([^\]]+)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g,Xg=/!\[([^\]]*)\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g});var Sh=Ri((Zx,Th)=>{"use strict";function tn(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function kh(t,e){for(var r="",n=0,o=-1,a=0,i,s=0;s<=t.length;++s){if(s<t.length)i=t.charCodeAt(s);else{if(i===47)break;i=47}if(i===47){if(!(o===s-1||a===1))if(o!==s-1&&a===2){if(r.length<2||n!==2||r.charCodeAt(r.length-1)!==46||r.charCodeAt(r.length-2)!==46){if(r.length>2){var l=r.lastIndexOf("/");if(l!==r.length-1){l===-1?(r="",n=0):(r=r.slice(0,l),n=r.length-1-r.lastIndexOf("/")),o=s,a=0;continue}}else if(r.length===2||r.length===1){r="",n=0,o=s,a=0;continue}}e&&(r.length>0?r+="/..":r="..",n=2)}else r.length>0?r+="/"+t.slice(o+1,s):r=t.slice(o+1,s),n=s-o-1;o=s,a=0}else i===46&&a!==-1?++a:a=-1}return r}function Qg(t,e){var r=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+n:r+t+n:n}var vo={resolve:function(){for(var e="",r=!1,n,o=arguments.length-1;o>=-1&&!r;o--){var a;o>=0?a=arguments[o]:(n===void 0&&(n=process.cwd()),a=n),tn(a),a.length!==0&&(e=a+"/"+e,r=a.charCodeAt(0)===47)}return e=kh(e,!r),r?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(tn(e),e.length===0)return".";var r=e.charCodeAt(0)===47,n=e.charCodeAt(e.length-1)===47;return e=kh(e,!r),e.length===0&&!r&&(e="."),e.length>0&&n&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return tn(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,r=0;r<arguments.length;++r){var n=arguments[r];tn(n),n.length>0&&(e===void 0?e=n:e+="/"+n)}return e===void 0?".":vo.normalize(e)},relative:function(e,r){if(tn(e),tn(r),e===r||(e=vo.resolve(e),r=vo.resolve(r),e===r))return"";for(var n=1;n<e.length&&e.charCodeAt(n)===47;++n);for(var o=e.length,a=o-n,i=1;i<r.length&&r.charCodeAt(i)===47;++i);for(var s=r.length,l=s-i,d=a<l?a:l,f=-1,g=0;g<=d;++g){if(g===d){if(l>d){if(r.charCodeAt(i+g)===47)return r.slice(i+g+1);if(g===0)return r.slice(i+g)}else a>d&&(e.charCodeAt(n+g)===47?f=g:g===0&&(f=0));break}var u=e.charCodeAt(n+g),p=r.charCodeAt(i+g);if(u!==p)break;u===47&&(f=g)}var y="";for(g=n+f+1;g<=o;++g)(g===o||e.charCodeAt(g)===47)&&(y.length===0?y+="..":y+="/..");return y.length>0?y+r.slice(i+f):(i+=f,r.charCodeAt(i)===47&&++i,r.slice(i))},_makeLong:function(e){return e},dirname:function(e){if(tn(e),e.length===0)return".";for(var r=e.charCodeAt(0),n=r===47,o=-1,a=!0,i=e.length-1;i>=1;--i)if(r=e.charCodeAt(i),r===47){if(!a){o=i;break}}else a=!1;return o===-1?n?"/":".":n&&o===1?"//":e.slice(0,o)},basename:function(e,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');tn(e);var n=0,o=-1,a=!0,i;if(r!==void 0&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var s=r.length-1,l=-1;for(i=e.length-1;i>=0;--i){var d=e.charCodeAt(i);if(d===47){if(!a){n=i+1;break}}else l===-1&&(a=!1,l=i+1),s>=0&&(d===r.charCodeAt(s)?--s===-1&&(o=i):(s=-1,o=l))}return n===o?o=l:o===-1&&(o=e.length),e.slice(n,o)}else{for(i=e.length-1;i>=0;--i)if(e.charCodeAt(i)===47){if(!a){n=i+1;break}}else o===-1&&(a=!1,o=i+1);return o===-1?"":e.slice(n,o)}},extname:function(e){tn(e);for(var r=-1,n=0,o=-1,a=!0,i=0,s=e.length-1;s>=0;--s){var l=e.charCodeAt(s);if(l===47){if(!a){n=s+1;break}continue}o===-1&&(a=!1,o=s+1),l===46?r===-1?r=s:i!==1&&(i=1):r!==-1&&(i=-1)}return r===-1||o===-1||i===0||i===1&&r===o-1&&r===n+1?"":e.slice(r,o)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return Qg("/",e)},parse:function(e){tn(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return r;var n=e.charCodeAt(0),o=n===47,a;o?(r.root="/",a=1):a=0;for(var i=-1,s=0,l=-1,d=!0,f=e.length-1,g=0;f>=a;--f){if(n=e.charCodeAt(f),n===47){if(!d){s=f+1;break}continue}l===-1&&(d=!1,l=f+1),n===46?i===-1?i=f:g!==1&&(g=1):i!==-1&&(g=-1)}return i===-1||l===-1||g===0||g===1&&i===l-1&&i===s+1?l!==-1&&(s===0&&o?r.base=r.name=e.slice(1,l):r.base=r.name=e.slice(s,l)):(s===0&&o?(r.name=e.slice(1,i),r.base=e.slice(1,l)):(r.name=e.slice(s,i),r.base=e.slice(s,l)),r.ext=e.slice(i,l)),s>0?r.dir=e.slice(0,s-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};vo.posix=vo;Th.exports=vo});var Dh=Ri((Qx,Zs)=>{"use strict";var yo=typeof Reflect=="object"?Reflect:null,Eh=yo&&typeof yo.apply=="function"?yo.apply:function(e,r,n){return Function.prototype.apply.call(e,r,n)},ui;yo&&typeof yo.ownKeys=="function"?ui=yo.ownKeys:Object.getOwnPropertySymbols?ui=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:ui=function(e){return Object.getOwnPropertyNames(e)};function Jg(t){console&&console.warn&&console.warn(t)}var Nh=Number.isNaN||function(e){return e!==e};function ut(){ut.init.call(this)}Zs.exports=ut;Zs.exports.once=nm;ut.EventEmitter=ut;ut.prototype._events=void 0;ut.prototype._eventsCount=0;ut.prototype._maxListeners=void 0;var Ah=10;function pi(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(ut,"defaultMaxListeners",{enumerable:!0,get:function(){return Ah},set:function(t){if(typeof t!="number"||t<0||Nh(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");Ah=t}});ut.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};ut.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||Nh(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function Ch(t){return t._maxListeners===void 0?ut.defaultMaxListeners:t._maxListeners}ut.prototype.getMaxListeners=function(){return Ch(this)};ut.prototype.emit=function(e){for(var r=[],n=1;n<arguments.length;n++)r.push(arguments[n]);var o=e==="error",a=this._events;if(a!==void 0)o=o&&a.error===void 0;else if(!o)return!1;if(o){var i;if(r.length>0&&(i=r[0]),i instanceof Error)throw i;var s=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw s.context=i,s}var l=a[e];if(l===void 0)return!1;if(typeof l=="function")Eh(l,this,r);else for(var d=l.length,f=Oh(l,d),n=0;n<d;++n)Eh(f[n],this,r);return!0};function Ih(t,e,r,n){var o,a,i;if(pi(r),a=t._events,a===void 0?(a=t._events=Object.create(null),t._eventsCount=0):(a.newListener!==void 0&&(t.emit("newListener",e,r.listener?r.listener:r),a=t._events),i=a[e]),i===void 0)i=a[e]=r,++t._eventsCount;else if(typeof i=="function"?i=a[e]=n?[r,i]:[i,r]:n?i.unshift(r):i.push(r),o=Ch(t),o>0&&i.length>o&&!i.warned){i.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+i.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=t,s.type=e,s.count=i.length,Jg(s)}return t}ut.prototype.addListener=function(e,r){return Ih(this,e,r,!1)};ut.prototype.on=ut.prototype.addListener;ut.prototype.prependListener=function(e,r){return Ih(this,e,r,!0)};function em(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Rh(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},o=em.bind(n);return o.listener=r,n.wrapFn=o,o}ut.prototype.once=function(e,r){return pi(r),this.on(e,Rh(this,e,r)),this};ut.prototype.prependOnceListener=function(e,r){return pi(r),this.prependListener(e,Rh(this,e,r)),this};ut.prototype.removeListener=function(e,r){var n,o,a,i,s;if(pi(r),o=this._events,o===void 0)return this;if(n=o[e],n===void 0)return this;if(n===r||n.listener===r)--this._eventsCount===0?this._events=Object.create(null):(delete o[e],o.removeListener&&this.emit("removeListener",e,n.listener||r));else if(typeof n!="function"){for(a=-1,i=n.length-1;i>=0;i--)if(n[i]===r||n[i].listener===r){s=n[i].listener,a=i;break}if(a<0)return this;a===0?n.shift():tm(n,a),n.length===1&&(o[e]=n[0]),o.removeListener!==void 0&&this.emit("removeListener",e,s||r)}return this};ut.prototype.off=ut.prototype.removeListener;ut.prototype.removeAllListeners=function(e){var r,n,o;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var a=Object.keys(n),i;for(o=0;o<a.length;++o)i=a[o],i!=="removeListener"&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(r=n[e],typeof r=="function")this.removeListener(e,r);else if(r!==void 0)for(o=r.length-1;o>=0;o--)this.removeListener(e,r[o]);return this};function Mh(t,e,r){var n=t._events;if(n===void 0)return[];var o=n[e];return o===void 0?[]:typeof o=="function"?r?[o.listener||o]:[o]:r?rm(o):Oh(o,o.length)}ut.prototype.listeners=function(e){return Mh(this,e,!0)};ut.prototype.rawListeners=function(e){return Mh(this,e,!1)};ut.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):Ph.call(t,e)};ut.prototype.listenerCount=Ph;function Ph(t){var e=this._events;if(e!==void 0){var r=e[t];if(typeof r=="function")return 1;if(r!==void 0)return r.length}return 0}ut.prototype.eventNames=function(){return this._eventsCount>0?ui(this._events):[]};function Oh(t,e){for(var r=new Array(e),n=0;n<e;++n)r[n]=t[n];return r}function tm(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function rm(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}function nm(t,e){return new Promise(function(r,n){function o(i){t.removeListener(e,a),n(i)}function a(){typeof t.removeListener=="function"&&t.removeListener("error",o),r([].slice.call(arguments))}Lh(t,e,a,{once:!0}),e!=="error"&&om(t,o,{once:!0})})}function om(t,e,r){typeof t.on=="function"&&Lh(t,"error",e,r)}function Lh(t,e,r,n){if(typeof t.on=="function")n.once?t.once(e,r):t.on(e,r);else if(typeof t.addEventListener=="function")t.addEventListener(e,function o(a){n.once&&t.removeEventListener(e,o),r(a)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}});var Fh=Ri(fi=>{(function(t){t.parser=function(h,c){return new r(h,c)},t.SAXParser=r,t.SAXStream=f,t.createStream=l,t.MAX_BUFFER_LENGTH=64*1024;var e=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];t.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function r(h,c){if(!(this instanceof r))return new r(h,c);var k=this;o(k),k.q=k.c="",k.bufferCheckPosition=t.MAX_BUFFER_LENGTH,k.encoding=null,k.opt=c||{},k.opt.lowercase=k.opt.lowercase||k.opt.lowercasetags,k.looseCase=k.opt.lowercase?"toLowerCase":"toUpperCase",k.opt.maxEntityCount=k.opt.maxEntityCount||512,k.opt.maxEntityDepth=k.opt.maxEntityDepth||4,k.entityCount=k.entityDepth=0,k.tags=[],k.closed=k.closedRoot=k.sawRoot=!1,k.tag=k.error=null,k.strict=!!h,k.noscript=!!(h||k.opt.noscript),k.state=b.BEGIN,k.strictEntities=k.opt.strictEntities,k.ENTITIES=k.strictEntities?Object.create(t.XML_ENTITIES):Object.create(t.ENTITIES),k.attribList=[],k.opt.xmlns&&(k.ns=Object.create(E)),k.opt.unquotedAttributeValues===void 0&&(k.opt.unquotedAttributeValues=!h),k.trackPosition=k.opt.position!==!1,k.trackPosition&&(k.position=k.line=k.column=0),D(k,"onready")}Object.create||(Object.create=function(h){function c(){}c.prototype=h;var k=new c;return k}),Object.keys||(Object.keys=function(h){var c=[];for(var k in h)h.hasOwnProperty(k)&&c.push(k);return c});function n(h){for(var c=Math.max(t.MAX_BUFFER_LENGTH,10),k=0,x=0,Y=e.length;x<Y;x++){var se=h[e[x]].length;if(se>c)switch(e[x]){case"textNode":oe(h);break;case"cdata":z(h,"oncdata",h.cdata),h.cdata="";break;case"script":z(h,"onscript",h.script),h.script="";break;default:q(h,"Max buffer length exceeded: "+e[x])}k=Math.max(k,se)}var ie=t.MAX_BUFFER_LENGTH-k;h.bufferCheckPosition=ie+h.position}function o(h){for(var c=0,k=e.length;c<k;c++)h[e[c]]=""}function a(h){oe(h),h.cdata!==""&&(z(h,"oncdata",h.cdata),h.cdata=""),h.script!==""&&(z(h,"onscript",h.script),h.script="")}r.prototype={end:function(){ne(this)},write:vt,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){a(this)}};var i;try{i=require("stream").Stream}catch{i=function(){}}i||(i=function(){});var s=t.EVENTS.filter(function(h){return h!=="error"&&h!=="end"});function l(h,c){return new f(h,c)}function d(h,c){if(h.length>=2){if(h[0]===255&&h[1]===254)return"utf-16le";if(h[0]===254&&h[1]===255)return"utf-16be"}return h.length>=3&&h[0]===239&&h[1]===187&&h[2]===191?"utf8":h.length>=4?h[0]===60&&h[1]===0&&h[2]===63&&h[3]===0?"utf-16le":h[0]===0&&h[1]===60&&h[2]===0&&h[3]===63?"utf-16be":"utf8":c?"utf8":null}function f(h,c){if(!(this instanceof f))return new f(h,c);i.apply(this),this._parser=new r(h,c),this.writable=!0,this.readable=!0;var k=this;this._parser.onend=function(){k.emit("end")},this._parser.onerror=function(x){k.emit("error",x),k._parser.error=null},this._decoder=null,this._decoderBuffer=null,s.forEach(function(x){Object.defineProperty(k,"on"+x,{get:function(){return k._parser["on"+x]},set:function(Y){if(!Y)return k.removeAllListeners(x),k._parser["on"+x]=Y,Y;k.on(x,Y)},enumerable:!0,configurable:!1})})}f.prototype=Object.create(i.prototype,{constructor:{value:f}}),f.prototype._decodeBuffer=function(h,c){if(this._decoderBuffer&&(h=Buffer.concat([this._decoderBuffer,h]),this._decoderBuffer=null),!this._decoder){var k=d(h,c);if(!k)return this._decoderBuffer=h,"";this._parser.encoding=k,this._decoder=new TextDecoder(k)}return this._decoder.decode(h,{stream:!c})},f.prototype.write=function(h){if(typeof Buffer=="function"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(h))h=this._decodeBuffer(h,!1);else if(this._decoderBuffer){var c=this._decodeBuffer(Buffer.alloc(0),!0);c&&(this._parser.write(c),this.emit("data",c))}return this._parser.write(h.toString()),this.emit("data",h),!0},f.prototype.end=function(h){if(h&&h.length&&this.write(h),this._decoderBuffer){var c=this._decodeBuffer(Buffer.alloc(0),!0);c&&(this._parser.write(c),this.emit("data",c))}else if(this._decoder){var k=this._decoder.decode();k&&(this._parser.write(k),this.emit("data",k))}return this._parser.end(),!0},f.prototype.on=function(h,c){var k=this;return!k._parser["on"+h]&&s.indexOf(h)!==-1&&(k._parser["on"+h]=function(){var x=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);x.splice(0,0,h),k.emit.apply(k,x)}),i.prototype.on.call(k,h,c)};var g=/^\[CDATA\[$/i,u=/^DOCTYPE$/i,p="http://www.w3.org/XML/1998/namespace",y="http://www.w3.org/2000/xmlns/",E={xml:p,xmlns:y},v=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,P=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,N=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,w=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function A(h){return h===" "||h===`
`||h==="\r"||h==="	"}function C(h){return h==='"'||h==="'"}function S(h){return h===">"||A(h)}function L(h,c){return h.test(c)}function I(h,c){return!L(h,c)}var b=0;t.STATE={BEGIN:b++,BEGIN_WHITESPACE:b++,TEXT:b++,TEXT_ENTITY:b++,OPEN_WAKA:b++,SGML_DECL:b++,SGML_DECL_QUOTED:b++,DOCTYPE:b++,DOCTYPE_QUOTED:b++,DOCTYPE_DTD:b++,DOCTYPE_DTD_QUOTED:b++,COMMENT_STARTING:b++,COMMENT:b++,COMMENT_ENDING:b++,COMMENT_ENDED:b++,CDATA:b++,CDATA_ENDING:b++,CDATA_ENDING_2:b++,PROC_INST:b++,PROC_INST_BODY:b++,PROC_INST_ENDING:b++,OPEN_TAG:b++,OPEN_TAG_SLASH:b++,ATTRIB:b++,ATTRIB_NAME:b++,ATTRIB_NAME_SAW_WHITE:b++,ATTRIB_VALUE:b++,ATTRIB_VALUE_QUOTED:b++,ATTRIB_VALUE_CLOSED:b++,ATTRIB_VALUE_UNQUOTED:b++,ATTRIB_VALUE_ENTITY_Q:b++,ATTRIB_VALUE_ENTITY_U:b++,CLOSE_TAG:b++,CLOSE_TAG_SAW_WHITE:b++,SCRIPT:b++,SCRIPT_ENDING:b++},t.XML_ENTITIES=Object.assign(Object.create(null),{amp:"&",gt:">",lt:"<",quot:'"',apos:"'"}),t.ENTITIES=Object.assign(Object.create(null),{amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830}),Object.keys(t.ENTITIES).forEach(function(h){var c=t.ENTITIES[h],k=typeof c=="number"?String.fromCharCode(c):c;t.ENTITIES[h]=k});for(var O in t.STATE)t.STATE[t.STATE[O]]=O;b=t.STATE;function D(h,c,k){h[c]&&h[c](k)}function ee(h){var c=h&&h.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);return c?c[2]:null}function $(h){return h?h.toLowerCase().replace(/[^a-z0-9]/g,""):null}function re(h,c){let k=$(h),x=$(c);return!k||!x?!0:x==="utf16"?k==="utf16le"||k==="utf16be":k===x}function ae(h,c){if(!(!h.strict||!h.encoding||!c||c.name!=="xml")){var k=ee(c.body);k&&!re(h.encoding,k)&&F(h,"XML declaration encoding "+k+" does not match detected stream encoding "+h.encoding.toUpperCase())}}function z(h,c,k){h.textNode&&oe(h),D(h,c,k)}function oe(h){h.textNode=H(h.opt,h.textNode),h.textNode&&D(h,"ontext",h.textNode),h.textNode=""}function H(h,c){return h.trim&&(c=c.trim()),h.normalize&&(c=c.replace(/\s+/g," ")),c}function q(h,c){return oe(h),h.trackPosition&&(c+=`
Line: `+h.line+`
Column: `+h.column+`
Char: `+h.c),c=new Error(c),h.error=c,D(h,"onerror",c),h}function ne(h){return h.sawRoot&&!h.closedRoot&&F(h,"Unclosed root tag"),h.state!==b.BEGIN&&h.state!==b.BEGIN_WHITESPACE&&h.state!==b.TEXT&&q(h,"Unexpected end"),oe(h),h.c="",h.closed=!0,D(h,"onend"),r.call(h,h.strict,h.opt),h}function F(h,c){if(typeof h!="object"||!(h instanceof r))throw new Error("bad call to strictFail");h.strict&&q(h,c)}function de(h){h.strict||(h.tagName=h.tagName[h.looseCase]());var c=h.tags[h.tags.length-1]||h,k=h.tag={name:h.tagName,attributes:{}};h.opt.xmlns&&(k.ns=c.ns),h.attribList.length=0,z(h,"onopentagstart",k)}function be(h,c){var k=h.indexOf(":"),x=k<0?["",h]:h.split(":"),Y=x[0],se=x[1];return c&&h==="xmlns"&&(Y="xmlns",se=""),{prefix:Y,local:se}}function Ae(h){if(h.strict||(h.attribName=h.attribName[h.looseCase]()),h.attribList.indexOf(h.attribName)!==-1||h.tag.attributes.hasOwnProperty(h.attribName)){h.attribName=h.attribValue="";return}if(h.opt.xmlns){var c=be(h.attribName,!0),k=c.prefix,x=c.local;if(k==="xmlns")if(x==="xml"&&h.attribValue!==p)F(h,"xml: prefix must be bound to "+p+`
Actual: `+h.attribValue);else if(x==="xmlns"&&h.attribValue!==y)F(h,"xmlns: prefix must be bound to "+y+`
Actual: `+h.attribValue);else{var Y=h.tag,se=h.tags[h.tags.length-1]||h;Y.ns===se.ns&&(Y.ns=Object.create(se.ns)),Y.ns[x]=h.attribValue}h.attribList.push([h.attribName,h.attribValue])}else h.tag.attributes[h.attribName]=h.attribValue,z(h,"onattribute",{name:h.attribName,value:h.attribValue});h.attribName=h.attribValue=""}function te(h,c){if(h.opt.xmlns){var k=h.tag,x=be(h.tagName);k.prefix=x.prefix,k.local=x.local,k.uri=k.ns[x.prefix]||"",k.prefix&&!k.uri&&(F(h,"Unbound namespace prefix: "+JSON.stringify(h.tagName)),k.uri=x.prefix);var Y=h.tags[h.tags.length-1]||h;k.ns&&Y.ns!==k.ns&&Object.keys(k.ns).forEach(function(Ve){z(h,"onopennamespace",{prefix:Ve,uri:k.ns[Ve]})});for(var se=0,ie=h.attribList.length;se<ie;se++){var xe=h.attribList[se],ke=xe[0],Fe=xe[1],Ce=be(ke,!0),Ge=Ce.prefix,Ue=Ce.local,ge=Ge===""?"":k.ns[Ge]||"",$e={name:ke,value:Fe,prefix:Ge,local:Ue,uri:ge};Ge&&Ge!=="xmlns"&&!ge&&(F(h,"Unbound namespace prefix: "+JSON.stringify(Ge)),$e.uri=Ge),h.tag.attributes[ke]=$e,z(h,"onattribute",$e)}h.attribList.length=0}h.tag.isSelfClosing=!!c,h.sawRoot=!0,h.tags.push(h.tag),z(h,"onopentag",h.tag),c||(!h.noscript&&h.tagName.toLowerCase()==="script"?h.state=b.SCRIPT:h.state=b.TEXT,h.tag=null,h.tagName=""),h.attribName=h.attribValue="",h.attribList.length=0}function Me(h){if(!h.tagName){F(h,"Weird empty close tag."),h.textNode+="</>",h.state=b.TEXT;return}if(h.script){if(h.tagName!=="script"){h.script+="</"+h.tagName+">",h.tagName="",h.state=b.SCRIPT;return}z(h,"onscript",h.script),h.script=""}var c=h.tags.length,k=h.tagName;h.strict||(k=k[h.looseCase]());for(var x=k;c--;){var Y=h.tags[c];if(Y.name!==x)F(h,"Unexpected close tag");else break}if(c<0){F(h,"Unmatched closing tag: "+h.tagName),h.textNode+="</"+h.tagName+">",h.state=b.TEXT;return}h.tagName=k;for(var se=h.tags.length;se-- >c;){var ie=h.tag=h.tags.pop();h.tagName=h.tag.name,z(h,"onclosetag",h.tagName);var xe={};for(var ke in ie.ns)xe[ke]=ie.ns[ke];var Fe=h.tags[h.tags.length-1]||h;h.opt.xmlns&&ie.ns!==Fe.ns&&Object.keys(ie.ns).forEach(function(Ce){var Ge=ie.ns[Ce];z(h,"onclosenamespace",{prefix:Ce,uri:Ge})})}c===0&&(h.closedRoot=!0),h.tagName=h.attribValue=h.attribName="",h.attribList.length=0,h.state=b.TEXT}function Oe(h){var c=h.entity,k=c.toLowerCase(),x,Y="";return h.ENTITIES[c]?h.ENTITIES[c]:h.ENTITIES[k]?h.ENTITIES[k]:(c=k,c.charAt(0)==="#"&&(c.charAt(1)==="x"?(c=c.slice(2),x=parseInt(c,16),Y=x.toString(16)):(c=c.slice(1),x=parseInt(c,10),Y=x.toString(10))),c=c.replace(/^0+/,""),isNaN(x)||Y.toLowerCase()!==c||x<0||x>1114111||!he(x)?(F(h,"Invalid character entity"),"&"+h.entity+";"):String.fromCodePoint(x))}function he(h){return h===9||h===10||h===13||h>=32&&h<=55295||h>=57344&&h<=65533||h>=65536&&h<=1114111}function Xe(h,c){c==="<"?(h.state=b.OPEN_WAKA,h.startTagPosition=h.position):A(c)||(F(h,"Non-whitespace before first tag."),h.textNode=c,h.state=b.TEXT)}function Le(h,c){var k="";return c<h.length&&(k=h.charAt(c)),k}function vt(h){var c=this;if(this.error)throw this.error;if(c.closed)return q(c,"Cannot write after close. Assign an onready handler.");if(h===null)return ne(c);typeof h=="object"&&(h=h.toString());for(var k=0,x="";x=Le(h,k++),c.c=x,!!x;)switch(c.trackPosition&&(c.position++,x===`
`?(c.line++,c.column=0):c.column++),c.state){case b.BEGIN:if(c.state=b.BEGIN_WHITESPACE,x==="\uFEFF")continue;Xe(c,x);continue;case b.BEGIN_WHITESPACE:Xe(c,x);continue;case b.TEXT:if(c.sawRoot&&!c.closedRoot){for(var se=k-1;x&&x!=="<"&&x!=="&";)x=Le(h,k++),x&&c.trackPosition&&(c.position++,x===`
`?(c.line++,c.column=0):c.column++);c.textNode+=h.substring(se,k-1)}x==="<"&&!(c.sawRoot&&c.closedRoot&&!c.strict)?(c.state=b.OPEN_WAKA,c.startTagPosition=c.position):(!A(x)&&(!c.sawRoot||c.closedRoot)&&F(c,"Text data outside of root node."),x==="&"?c.state=b.TEXT_ENTITY:c.textNode+=x);continue;case b.SCRIPT:x==="<"?c.state=b.SCRIPT_ENDING:c.script+=x;continue;case b.SCRIPT_ENDING:x==="/"?c.state=b.CLOSE_TAG:(c.script+="<"+x,c.state=b.SCRIPT);continue;case b.OPEN_WAKA:if(x==="!")c.state=b.SGML_DECL,c.sgmlDecl="";else if(!A(x))if(L(v,x))c.state=b.OPEN_TAG,c.tagName=x;else if(x==="/")c.state=b.CLOSE_TAG,c.tagName="";else if(x==="?")c.state=b.PROC_INST,c.procInstName=c.procInstBody="";else{if(F(c,"Unencoded <"),c.startTagPosition+1<c.position){var Y=c.position-c.startTagPosition;x=new Array(Y).join(" ")+x}c.textNode+="<"+x,c.state=b.TEXT}continue;case b.SGML_DECL:if(c.sgmlDecl+x==="--"){c.state=b.COMMENT,c.comment="",c.sgmlDecl="";continue}c.doctype&&c.doctype!==!0&&c.sgmlDecl?(c.state=b.DOCTYPE_DTD,c.doctype+="<!"+c.sgmlDecl+x,c.sgmlDecl=""):g.test(c.sgmlDecl+x)?(z(c,"onopencdata"),c.state=b.CDATA,c.sgmlDecl="",c.cdata=""):u.test(c.sgmlDecl+x)?(c.state=b.DOCTYPE,(c.doctype||c.sawRoot)&&F(c,"Inappropriately located doctype declaration"),c.doctype="",c.sgmlDecl=""):x===">"?(z(c,"onsgmldeclaration",c.sgmlDecl),c.sgmlDecl="",c.state=b.TEXT):(C(x)&&(c.state=b.SGML_DECL_QUOTED),c.sgmlDecl+=x);continue;case b.SGML_DECL_QUOTED:x===c.q&&(c.state=b.SGML_DECL,c.q=""),c.sgmlDecl+=x;continue;case b.DOCTYPE:x===">"?(c.state=b.TEXT,z(c,"ondoctype",c.doctype),c.doctype=!0):(c.doctype+=x,x==="["?c.state=b.DOCTYPE_DTD:C(x)&&(c.state=b.DOCTYPE_QUOTED,c.q=x));continue;case b.DOCTYPE_QUOTED:c.doctype+=x,x===c.q&&(c.q="",c.state=b.DOCTYPE);continue;case b.DOCTYPE_DTD:x==="]"?(c.doctype+=x,c.state=b.DOCTYPE):x==="<"?(c.state=b.OPEN_WAKA,c.startTagPosition=c.position):C(x)?(c.doctype+=x,c.state=b.DOCTYPE_DTD_QUOTED,c.q=x):c.doctype+=x;continue;case b.DOCTYPE_DTD_QUOTED:c.doctype+=x,x===c.q&&(c.state=b.DOCTYPE_DTD,c.q="");continue;case b.COMMENT:x==="-"?c.state=b.COMMENT_ENDING:c.comment+=x;continue;case b.COMMENT_ENDING:x==="-"?(c.state=b.COMMENT_ENDED,c.comment=H(c.opt,c.comment),c.comment&&z(c,"oncomment",c.comment),c.comment=""):(c.comment+="-"+x,c.state=b.COMMENT);continue;case b.COMMENT_ENDED:x!==">"?(F(c,"Malformed comment"),c.comment+="--"+x,c.state=b.COMMENT):c.doctype&&c.doctype!==!0?c.state=b.DOCTYPE_DTD:c.state=b.TEXT;continue;case b.CDATA:for(var se=k-1;x&&x!=="]";)x=Le(h,k++),x&&c.trackPosition&&(c.position++,x===`
`?(c.line++,c.column=0):c.column++);c.cdata+=h.substring(se,k-1),x==="]"&&(c.state=b.CDATA_ENDING);continue;case b.CDATA_ENDING:x==="]"?c.state=b.CDATA_ENDING_2:(c.cdata+="]"+x,c.state=b.CDATA);continue;case b.CDATA_ENDING_2:x===">"?(c.cdata&&z(c,"oncdata",c.cdata),z(c,"onclosecdata"),c.cdata="",c.state=b.TEXT):x==="]"?c.cdata+="]":(c.cdata+="]]"+x,c.state=b.CDATA);continue;case b.PROC_INST:x==="?"?c.state=b.PROC_INST_ENDING:A(x)?c.state=b.PROC_INST_BODY:c.procInstName+=x;continue;case b.PROC_INST_BODY:if(!c.procInstBody&&A(x))continue;x==="?"?c.state=b.PROC_INST_ENDING:c.procInstBody+=x;continue;case b.PROC_INST_ENDING:if(x===">"){let Fe={name:c.procInstName,body:c.procInstBody};ae(c,Fe),z(c,"onprocessinginstruction",Fe),c.procInstName=c.procInstBody="",c.state=b.TEXT}else c.procInstBody+="?"+x,c.state=b.PROC_INST_BODY;continue;case b.OPEN_TAG:L(P,x)?c.tagName+=x:(de(c),x===">"?te(c):x==="/"?c.state=b.OPEN_TAG_SLASH:(A(x)||F(c,"Invalid character in tag name"),c.state=b.ATTRIB));continue;case b.OPEN_TAG_SLASH:x===">"?(te(c,!0),Me(c)):(F(c,"Forward-slash in opening tag not followed by >"),c.state=b.ATTRIB);continue;case b.ATTRIB:if(A(x))continue;x===">"?te(c):x==="/"?c.state=b.OPEN_TAG_SLASH:L(v,x)?(c.attribName=x,c.attribValue="",c.state=b.ATTRIB_NAME):F(c,"Invalid attribute name");continue;case b.ATTRIB_NAME:x==="="?c.state=b.ATTRIB_VALUE:x===">"?(F(c,"Attribute without value"),c.attribValue=c.attribName,Ae(c),te(c)):A(x)?c.state=b.ATTRIB_NAME_SAW_WHITE:L(P,x)?c.attribName+=x:F(c,"Invalid attribute name");continue;case b.ATTRIB_NAME_SAW_WHITE:if(x==="=")c.state=b.ATTRIB_VALUE;else{if(A(x))continue;F(c,"Attribute without value"),c.tag.attributes[c.attribName]="",c.attribValue="",z(c,"onattribute",{name:c.attribName,value:""}),c.attribName="",x===">"?te(c):L(v,x)?(c.attribName=x,c.state=b.ATTRIB_NAME):(F(c,"Invalid attribute name"),c.state=b.ATTRIB)}continue;case b.ATTRIB_VALUE:if(A(x))continue;C(x)?(c.q=x,c.state=b.ATTRIB_VALUE_QUOTED):(c.opt.unquotedAttributeValues||q(c,"Unquoted attribute value"),c.state=b.ATTRIB_VALUE_UNQUOTED,c.attribValue=x);continue;case b.ATTRIB_VALUE_QUOTED:if(x!==c.q){x==="&"?c.state=b.ATTRIB_VALUE_ENTITY_Q:c.attribValue+=x;continue}Ae(c),c.q="",c.state=b.ATTRIB_VALUE_CLOSED;continue;case b.ATTRIB_VALUE_CLOSED:A(x)?c.state=b.ATTRIB:x===">"?te(c):x==="/"?c.state=b.OPEN_TAG_SLASH:L(v,x)?(F(c,"No whitespace between attributes"),c.attribName=x,c.attribValue="",c.state=b.ATTRIB_NAME):F(c,"Invalid attribute name");continue;case b.ATTRIB_VALUE_UNQUOTED:if(!S(x)){x==="&"?c.state=b.ATTRIB_VALUE_ENTITY_U:c.attribValue+=x;continue}Ae(c),x===">"?te(c):c.state=b.ATTRIB;continue;case b.CLOSE_TAG:if(c.tagName)x===">"?Me(c):L(P,x)?c.tagName+=x:c.script?(c.script+="</"+c.tagName+x,c.tagName="",c.state=b.SCRIPT):(A(x)||F(c,"Invalid tagname in closing tag"),c.state=b.CLOSE_TAG_SAW_WHITE);else{if(A(x))continue;I(v,x)?c.script?(c.script+="</"+x,c.state=b.SCRIPT):F(c,"Invalid tagname in closing tag."):c.tagName=x}continue;case b.CLOSE_TAG_SAW_WHITE:if(A(x))continue;x===">"?Me(c):F(c,"Invalid characters in closing tag");continue;case b.TEXT_ENTITY:case b.ATTRIB_VALUE_ENTITY_Q:case b.ATTRIB_VALUE_ENTITY_U:var ie,xe;switch(c.state){case b.TEXT_ENTITY:ie=b.TEXT,xe="textNode";break;case b.ATTRIB_VALUE_ENTITY_Q:ie=b.ATTRIB_VALUE_QUOTED,xe="attribValue";break;case b.ATTRIB_VALUE_ENTITY_U:ie=b.ATTRIB_VALUE_UNQUOTED,xe="attribValue";break}if(x===";"){var ke=Oe(c);c.opt.unparsedEntities&&!Object.values(t.XML_ENTITIES).includes(ke)?((c.entityCount+=1)>c.opt.maxEntityCount&&q(c,"Parsed entity count exceeds max entity count"),(c.entityDepth+=1)>c.opt.maxEntityDepth&&q(c,"Parsed entity depth exceeds max entity depth"),c.entity="",c.state=ie,c.write(ke),c.entityDepth-=1):(c[xe]+=ke,c.entity="",c.state=ie)}else L(c.entity.length?w:N,x)?c.entity+=x:(F(c,"Invalid character in entity name"),c[xe]+="&"+c.entity+x,c.entity="",c.state=ie);continue;default:throw new Error(c,"Unknown state: "+c.state)}return c.position>=c.bufferCheckPosition&&n(c),c}String.fromCodePoint||(function(){var h=String.fromCharCode,c=Math.floor,k=function(){var x=16384,Y=[],se,ie,xe=-1,ke=arguments.length;if(!ke)return"";for(var Fe="";++xe<ke;){var Ce=Number(arguments[xe]);if(!isFinite(Ce)||Ce<0||Ce>1114111||c(Ce)!==Ce)throw RangeError("Invalid code point: "+Ce);Ce<=65535?Y.push(Ce):(Ce-=65536,se=(Ce>>10)+55296,ie=Ce%1024+56320,Y.push(se,ie)),(xe+1===ke||Y.length>x)&&(Fe+=h.apply(null,Y),Y.length=0)}return Fe};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:k,configurable:!0,writable:!0}):String.fromCodePoint=k})()})(typeof fi>"u"?fi.sax={}:fi)});function sm(t){return t.charCodeAt(0)===65279?t.slice(1):t}function lm(t){return t.toLowerCase()}function cm(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===0}function gi(t,e,r){for(let n of t)e=n(e,r);return e}function wo(t,e,r){let n=Object.create(null);n.value=r,n.writable=!0,n.enumerable=!0,n.configurable=!0,Object.defineProperty(t,e,n)}function dm(t,e){let r={};return typeof e=="object"&&(r=e),new Qs(r).parseStringPromise(t)}async function Hh(t,e={}){return await dm(t,e)}var _o,Bh,$h,am,im,Cr,zh,Qs,Uh=br(()=>{_o=Rt(Sh(),1),Bh=Rt(Dh(),1),$h=Rt(Fh(),1),am=Object.defineProperty,im=(t,e,r)=>e in t?am(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Cr=(t,e,r)=>im(t,typeof e!="symbol"?e+"":e,r);zh={.1:{explicitCharkey:!1,trim:!0,normalize:!0,normalizeTags:!1,attrkey:"@",charkey:"#",explicitArray:!1,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!1,validator:null,xmlns:!1,explicitChildren:!1,childkey:"@@",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,emptyTag:""},.2:{explicitCharkey:!1,trim:!1,normalize:!1,normalizeTags:!1,attrkey:"$",charkey:"_",explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!0,validator:null,xmlns:!1,explicitChildren:!1,preserveChildrenOrder:!1,childkey:"$$",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,rootName:"root",xmldec:{version:"1.0",encoding:"UTF-8",standalone:!0},doctype:null,renderOpts:{pretty:!0,indent:"  ",newline:`
`},headless:!1,chunkSize:1e4,emptyTag:"",cdata:!1}};Qs=class extends Bh.EventEmitter{constructor(e){super(),Cr(this,"options"),Cr(this,"remaining",""),Cr(this,"saxParser"),Cr(this,"resultObject",null),Cr(this,"EXPLICIT_CHARKEY"),Cr(this,"errThrown",!1),Cr(this,"ended",!1),Cr(this,"processAsync",()=>{try{if(this.remaining.length<=this.options.chunkSize){let r=this.remaining;this.remaining="",this.saxParser=this.saxParser.write(r),this.saxParser.close()}else{let r=this.remaining.slice(0,this.options.chunkSize);this.remaining=this.remaining.slice(this.options.chunkSize),this.saxParser=this.saxParser.write(r),setTimeout(this.processAsync,0)}}catch(r){this.errThrown||(this.errThrown=!0,this.emit("error",r))}}),Cr(this,"assignOrPush",(r,n,o)=>{n in r?(Array.isArray(r[n])||wo(r,n,[r[n]]),r[n].push(o)):this.options.explicitArray?wo(r,n,[o]):wo(r,n,o)}),Cr(this,"reset",()=>{this.removeAllListeners(),this.saxParser=$h.default.parser(this.options.strict,{trim:!1,normalize:!1,xmlns:this.options.xmlns}),this.errThrown=!1,this.saxParser.onerror=i=>{this.saxParser.resume(),this.errThrown||(this.errThrown=!0,this.emit("error",i))},this.saxParser.onend=()=>{this.ended||(this.ended=!0,this.emit("end",this.resultObject))},this.ended=!1,this.EXPLICIT_CHARKEY=this.options.explicitCharkey,this.resultObject=null;let r=[],n=this.options.attrkey,o=this.options.charkey;this.saxParser.onopentag=i=>{let s={};s[o]="",this.options.ignoreAttrs||Object.keys(i.attributes).forEach(l=>{!(n in s)&&!this.options.mergeAttrs&&(s[n]={});let d=this.options.attrValueProcessors?gi(this.options.attrValueProcessors,i.attributes[l],l):i.attributes[l],f=this.options.attrNameProcessors?gi(this.options.attrNameProcessors,l):l;this.options.mergeAttrs?this.assignOrPush(s,f,d):wo(s[n],f,d)}),s["#name"]=this.options.tagNameProcessors?gi(this.options.tagNameProcessors,i.name):i.name,this.options.xmlns&&(s[this.options.xmlnskey]={uri:i.uri,local:i.local}),r.push(s)},this.saxParser.onclosetag=()=>{let i=r.pop(),s=i["#name"];(!this.options.explicitChildren||!this.options.preserveChildrenOrder)&&delete i["#name"];let l;i.cdata===!0&&(l=i.cdata,delete i.cdata);let d=r[r.length-1],f="";if(i[o].match(/^\s*$/)&&!l?(f=i[o],delete i[o]):(this.options.trim&&(i[o]=i[o].trim()),this.options.normalize&&(i[o]=i[o].replace(/\s{2,}/g," ").trim()),i[o]=this.options.valueProcessors?gi(this.options.valueProcessors,i[o],s):i[o],Object.keys(i).length===1&&o in i&&!this.EXPLICIT_CHARKEY&&(i=i[o])),cm(i)&&(typeof this.options.emptyTag=="function"?i=this.options.emptyTag():i=this.options.emptyTag!==""?this.options.emptyTag:f),this.options.validator){let g=`/${r.map(u=>u["#name"]).concat(s).join("/")}`;(()=>{try{i=this.options.validator(g,d&&d[s],i)}catch(u){this.emit("error",u)}})()}if(this.options.explicitChildren&&!this.options.mergeAttrs&&typeof i=="object")if(this.options.preserveChildrenOrder){if(d){d[this.options.childkey]=d[this.options.childkey]||[];let g={};Object.keys(i).forEach(u=>{wo(g,u,i[u])}),d[this.options.childkey].push(g),delete i["#name"],Object.keys(i).length===1&&o in i&&!this.EXPLICIT_CHARKEY&&(i=i[o])}}else{let g={};this.options.attrkey in i&&(g[this.options.attrkey]=i[this.options.attrkey],delete i[this.options.attrkey]),!this.options.charsAsChildren&&this.options.charkey in i&&(g[this.options.charkey]=i[this.options.charkey],delete i[this.options.charkey]),Object.getOwnPropertyNames(i).length>0&&(g[this.options.childkey]=i),i=g}if(r.length>0)this.assignOrPush(d,s,i);else{if(this.options.explicitRoot){let g=i,u={};wo(u,s,g),i=u}this.resultObject=i,this.ended=!0,this.emit("end",this.resultObject)}};let a=i=>{let s=r[r.length-1];if(s&&(s[o]+=i,this.options.explicitChildren&&this.options.preserveChildrenOrder&&this.options.charsAsChildren&&(this.options.includeWhiteChars||i.replace(/\\n/g,"").trim()!==""))){s[this.options.childkey]=s[this.options.childkey]||[];let l={"#name":"__text__"};l[o]=i,this.options.normalize&&(l[o]=l[o].replace(/\s{2,}/g," ").trim()),s[this.options.childkey].push(l)}return s};this.saxParser.ontext=a,this.saxParser.oncdata=i=>{let s=a(i);s&&(s.cdata=!0)}}),Cr(this,"parseString",(r,n)=>{n&&typeof n=="function"&&(this.on("end",o=>{this.reset(),n(null,o)}),this.on("error",o=>{this.reset(),n(o)}));try{return r=r.toString(),r.trim()===""?(this.emit("end",null),!0):(r=sm(r),this.options.async?(this.remaining=r,setTimeout(this.processAsync,0),this.saxParser):this.saxParser.write(r).close())}catch(o){if(!this.errThrown&&!this.ended)this.emit("error",o),this.errThrown=!0;else if(this.ended)throw o}}),Cr(this,"parseStringPromise",r=>new Promise((n,o)=>{this.parseString(r,(a,i)=>{a?o(a):n(i)})})),this.options={},Object.keys(zh["0.2"]).forEach(r=>{this.options[r]=zh["0.2"][r]}),e&&Object.keys(e).forEach(r=>{this.options[r]=e[r]}),this.options.xmlns&&(this.options.xmlnskey=`${this.options.attrkey}ns`),this.options.normalizeTags&&(this.options.tagNameProcessors||(this.options.tagNameProcessors=[]),this.options.tagNameProcessors.unshift(lm)),this.reset()}}});function Wh(t){return t.includes("&")?t.replace(/&(#x[\dA-Fa-f]+|#\d+|[a-zA-Z]+);/g,(e,r)=>r.startsWith("#x")?String.fromCodePoint(Number.parseInt(r.slice(2),16)):r.startsWith("#")?String.fromCodePoint(Number.parseInt(r.slice(1),10)):hm[e]||e):t}function pm(t){let e=t.slice(0,12),r=Array.from(e).map(n=>n.toString(16).padStart(2,"0")).join("");for(let[n,o]of Object.entries(um))if(r.startsWith(n))return o;return"unknown"}function xi(t,e,r,n){return URL.createObjectURL(new Blob([t],{type:e}))}function Yh(t){let e="";return e=t.name??"",e}function Em(t){return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}async function Zh(t){return t instanceof Uint8Array?Em(t):await t.arrayBuffer()}function tr(t){let e=t.byteLength,r=e===4?"getUint32":e===2?"getUint16":"getUint8";return new DataView(t)[r](0)}function Rr(t,e){let r={};for(let n in t){let[o,a,i]=t[n];r[n]=i==="string"?la(e.slice(o,o+a)):tr(e.slice(o,o+a))}return r}function ca(t){let e=t.reduce((o,a)=>o+a.length,0),r=new t[0].constructor(e),n=0;for(let o of t)r.set(o,n),n+=o.length;return r}function mi(t,e=0){let r=0,n=0;for(let o of t.subarray(e,e+4))if(r=r<<7|(o&127)>>>0,n++,o&128)break;return{value:r,length:n}}function Nm(t){let e=0;for(let r of t.subarray(-4))r&128&&(e=0),e=e<<7|r&127;return e}function Qh(t){let e=0;for(;t>0;t=t>>1)(t&1)===1&&e++;return e}function Cm(t){let e=0;for(;(t&1)===0;)t=t>>1,e++;return e}function Im(t){let e=[];for(let r=0;r<t.length;r++){let n=t[r];if(n===0)e.push(0);else if(n<=8)for(let o of t.subarray(r+1,(r+=n)+1))e.push(o);else if(n<=127)e.push(n);else if(n<=191){let o=n<<8|t[r+++1],a=(o&16383)>>>3,i=(o&7)+3;for(let s=0;s<i;s++)e.push(e[e.length-a])}else e.push(32,n^128)}return Uint8Array.from(e)}function Rm(t,e){let r=e(t.huffcdic),{magic:n,offset1:o,offset2:a}=Rr(_m,r);if(n!=="HUFF")throw new Error("Invalid HUFF record");let i=Array.from({length:256},(f,g)=>o+g*4).map(f=>tr(r.slice(f,f+4))).map(f=>[f&128,f&31,f>>>8]),s=[[0,0],...Array.from({length:32},(f,g)=>a+g*8).map(f=>[tr(r.slice(f,f+4)),tr(r.slice(f+4,f+8))])],l=[];for(let f=1;f<t.numHuffcdic;f++){let g=e(t.huffcdic+f),u=Rr(km,g);if(u.magic!=="CDIC")throw new Error("Invalid CDIC record");let p=Math.min(1<<u.codeLength,u.numEntries-l.length),y=g.slice(u.length);for(let E=0;E<p;E++){let v=tr(y.slice(E*2,E*2+2)),P=tr(y.slice(v,v+2)),N=P&32767,w=P&32768,A=new Uint8Array(y.slice(v+2,v+2+N));l.push([A,w])}}let d=f=>{let g=new Uint8Array,u=f.byteLength*8;for(let p=0;p<u;){let y=Number(Mm(f,p)),[E,v,P]=i[y>>>24];if(!E){for(;y>>>32-v<s[v][0];)v+=1;P=s[v][1]}if(p+=v,p>u)break;let N=P-(y>>>32-v),[w,A]=l[N];A||(w=d(w),l[N]=[w,!0]),g=ca([g,w])}return g};return d}function Mm(t,e){let r=e>>3,n=e+32,o=n>>3,a=0n;for(let i=r;i<=o;i++)a=a<<8n|BigInt(t[i]??0);return a>>8n-BigInt(n&7)&0xFFFFFFFFn}function Pm(t,e){let{magic:r,count:n}=Rr(ym,t);if(r!=="EXTH")throw new Error("Invalid EXTH header");let o=tl(e.toString()),a={},i=12;for(let s=0;s<n;s++){let l=tr(t.slice(i,i+4)),d=tr(t.slice(i+4,i+8));if(l in qh){let[f,g,u]=qh[l],p=t.slice(i+8,i+d),y=g==="uint"?tr(p):o.decode(p);u?(a[f]??(a[f]=[]),a[f].push(y)):a[f]=y}i+=d}return a}function Om(t){let e=t&1,r=Qh(t>>>1);return n=>{for(let o=0;o<r;o++){let a=Nm(n);n=n.subarray(0,-a)}if(e){let o=(n[n.length-1]&3)+1;n=n.subarray(0,-o)}return n}}function Lm(t){let{flags:e,dataStart:r,keyLength:n,keyStart:o}=Rr(Sm,t),a=new Uint8Array(t.slice(r));if(e&2){let i=n===16?1024:1040,s=new Uint8Array(t.slice(o,o+n)),l=Math.min(i,a.length);for(let d=0;d<l;d++)a[d]=a[d]^s[d%s.length]}if(e&1)try{return jd(a)}catch(i){console.warn(i),console.warn("Failed to decompress font")}return a}function bi(t,e){let r=e(t),n=Rr(Gh,r);if(n.magic!=="INDX")throw new Error("Invalid INDX record");let o=tl(n.encoding.toString()),a={},i=0;for(let u=0;u<n.numCncx;u++){let p=e(t+n.numRecords+u+1),y=new Uint8Array(p);for(let E=0;E<y.byteLength;){let v=E,{value:P,length:N}=mi(y,E);E+=N;let w=p.slice(E,E+P);E+=P,a[i+v]=o.decode(w)}i+=65536}let s=r.slice(n.length),l=Rr(wm,s);if(l.magic!=="TAGX")throw new Error("Invalid TAGX section");let d=(l.length-12)/4,f=Array.from({length:d},(u,p)=>new Uint8Array(s.slice(12+p*4,12+p*4+4))),g=[];for(let u=0;u<n.numRecords;u++){let p=e(t+1+u),y=new Uint8Array(p),E=Rr(Gh,p);if(E.magic!=="INDX")throw new Error("Invalid INDX record");for(let v=0;v<E.numRecords;v++){let P=E.idxt+4+2*v,N=tr(p.slice(P,P+2)),w=tr(p.slice(N,N+1)),A=la(p.slice(N+1,N+1+w)),C=[],S=N+1+w,L=0,I=S+l.numControlBytes;for(let[O,D,ee,$]of f){if($&1){L++;continue}let re=S+L,ae=tr(p.slice(re,re+1))&ee;if(ae===ee)if(Qh(ee)>1){let{value:z,length:oe}=mi(y,I);C.push([O,0,z,D]),I+=oe}else C.push([O,1,0,D]);else C.push([O,ae>>Cm(ee),0,D])}let b={};for(let[O,D,ee,$]of C){let re=[];if(D!==0)for(let ae=0;ae<D*$;ae++){let{value:z,length:oe}=mi(y,I);re.push(z),I+=oe}else{let ae=0;for(;ae<ee;){let{value:z,length:oe}=mi(y,I);re.push(z),I+=oe,ae+=oe}}b[O]=re}g.push({name:A,tagMap:b})}}return{table:g,cncx:a}}function Dm(t,e){let{table:r,cncx:n}=bi(t,e),o=r.map(({tagMap:i},s)=>({index:s,offset:i[1]?.[0],size:i[2]?.[0],label:n[i[3]?.[0]]??"",headingLevel:i[4]?.[0],pos:i[6],parent:i[21]?.[0],firstChild:i[22]?.[0],lastChild:i[23]?.[0]})),a=i=>(i.firstChild==null||(i.children=o.filter(s=>s.parent===i.index).map(a)),i);return o.filter(i=>i.headingLevel===0).map(a)}function Xh(t=0,e=0){return`kindle:pos:fid:${t.toString(32).toUpperCase().padStart(4,"0")}:off:${e.toString(32).toUpperCase().padStart(10,"0")}`}function Vh(t){let e=t.match(zm);if(!e)return"";let[,r,n]=e;return`[${r}="${n}"]`}function $m(t){let[e,r]=t.match(Bm).slice(1);return{fid:Number.parseInt(e,32),off:Number.parseInt(r,32)}}async function rl(t,e){let r=new Js(t,e);return await r.innerLoadFile(),await r.innerInit(),r}async function nl(t,e){let r=new el(t,e);return await r.innerLoadFile(),await r.innerInit(),r}var hm,jh,um,fm,gm,mm,bm,xm,vm,ym,Gh,wm,_m,km,Tm,Sm,Am,la,tl,qh,Fm,zm,Bm,Kh,Hm,Um,er,vi,Wm,jm,Mt,Js,Gm,qm,Ir,el,Jh=br(()=>{As();Uh();hm={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};jh={XML:"application/xml",XHTML:"application/xhtml+xml",HTML:"text/html",CSS:"text/css",SVG:"image/svg+xml"},um={ffd8ff:"image/jpeg","89504e47":"image/png",47494638:"image/gif","424d":"image/bmp","3c737667":"image/svg+xml","00000018":"video/mp4","00000020":"video/mp4","1a45dfa3":"video/mkv","1f43b675":"video/webm",494433:"audio/mp3",52494646:"audio/wav","4f676753":"audio/ogg","00010000":"font/ttf",74727565:"font/ttf","4f54544f":"font/otf","774f4646":"font/woff","774f4632":"font/woff2","504c":"font/eot"};fm={1252:"windows-1252",65001:"utf-8"},gm={1:["ar","ar-SA","ar-IQ","ar-EG","ar-LY","ar-DZ","ar-MA","ar-TN","ar-OM","ar-YE","ar-SY","ar-JO","ar-LB","ar-KW","ar-AE","ar-BH","ar-QA"],2:["bg"],3:["ca"],4:["zh","zh-TW","zh-CN","zh-HK","zh-SG"],5:["cs"],6:["da"],7:["de","de-DE","de-CH","de-AT","de-LU","de-LI"],8:["el"],9:["en","en-US","en-GB","en-AU","en-CA","en-NZ","en-IE","en-ZA","en-JM",null,"en-BZ","en-TT","en-ZW","en-PH"],10:["es","es-ES","es-MX",null,"es-GT","es-CR","es-PA","es-DO","es-VE","es-CO","es-PE","es-AR","es-EC","es-CL","es-UY","es-PY","es-BO","es-SV","es-HN","es-NI","es-PR"],11:["fi"],12:["fr","fr-FR","fr-BE","fr-CA","fr-CH","fr-LU","fr-MC"],13:["he"],14:["hu"],15:["is"],16:["it","it-IT","it-CH"],17:["ja"],18:["ko"],19:["nl","nl-NL","nl-BE"],20:["no","nb","nn"],21:["pl"],22:["pt","pt-BR","pt-PT"],23:["rm"],24:["ro"],25:["ru"],26:["hr",null,"sr"],27:["sk"],28:["sq"],29:["sv","sv-SE","sv-FI"],30:["th"],31:["tr"],32:["ur"],33:["id"],34:["uk"],35:["be"],36:["sl"],37:["et"],38:["lv"],39:["lt"],41:["fa"],42:["vi"],43:["hy"],44:["az"],45:["eu"],46:["hsb"],47:["mk"],48:["st"],49:["ts"],50:["tn"],52:["xh"],53:["zu"],54:["af"],55:["ka"],56:["fo"],57:["hi"],58:["mt"],59:["se"],62:["ms"],63:["kk"],65:["sw"],67:["uz",null,"uz-UZ"],68:["tt"],69:["bn"],70:["pa"],71:["gu"],72:["or"],73:["ta"],74:["te"],75:["kn"],76:["ml"],77:["as"],78:["mr"],79:["sa"],82:["cy","cy-GB"],83:["gl","gl-ES"],87:["kok"],97:["ne"],98:["fy"]},mm={name:[0,32,"string"],type:[60,4,"string"],creator:[64,4,"string"],numRecords:[76,2,"uint"]},bm={compression:[0,2,"uint"],numTextRecords:[8,2,"uint"],recordSize:[10,2,"uint"],encryption:[12,2,"uint"]},xm={magic:[16,4,"string"],length:[20,4,"uint"],type:[24,4,"uint"],encoding:[28,4,"uint"],uid:[32,4,"uint"],version:[36,4,"uint"],titleOffset:[84,4,"uint"],titleLength:[88,4,"uint"],localeRegion:[94,1,"uint"],localeLanguage:[95,1,"uint"],resourceStart:[108,4,"uint"],huffcdic:[112,4,"uint"],numHuffcdic:[116,4,"uint"],exthFlag:[128,4,"uint"],trailingFlags:[240,4,"uint"],indx:[244,4,"uint"]},vm={resourceStart:[108,4,"uint"],fdst:[192,4,"uint"],numFdst:[196,4,"uint"],frag:[248,4,"uint"],skel:[252,4,"uint"],guide:[260,4,"uint"]},ym={magic:[0,4,"string"],length:[4,4,"uint"],count:[8,4,"uint"]},Gh={magic:[0,4,"string"],length:[4,4,"uint"],type:[8,4,"uint"],idxt:[20,4,"uint"],numRecords:[24,4,"uint"],encoding:[28,4,"uint"],language:[32,4,"uint"],total:[36,4,"uint"],ordt:[40,4,"uint"],ligt:[44,4,"uint"],numLigt:[48,4,"uint"],numCncx:[52,4,"uint"]},wm={magic:[0,4,"string"],length:[4,4,"uint"],numControlBytes:[8,4,"uint"]},_m={magic:[0,4,"string"],offset1:[8,4,"uint"],offset2:[12,4,"uint"]},km={magic:[0,4,"string"],length:[4,4,"uint"],numEntries:[8,4,"uint"],codeLength:[12,4,"uint"]},Tm={magic:[0,4,"string"],numEntries:[8,4,"uint"]},Sm={flags:[8,4,"uint"],dataStart:[12,4,"uint"],keyLength:[16,4,"uint"],keyStart:[20,4,"uint"]};Am=new TextDecoder,la=t=>Am.decode(t);tl=t=>new TextDecoder(fm[t]);qh={100:["creator","string",!0],101:["publisher","string",!1],103:["description","string",!1],104:["isbn","string",!1],105:["subject","string",!0],106:["date","string",!1],108:["contributor","string",!0],109:["rights","string",!1],110:["subjectCode","string",!0],112:["source","string",!0],113:["asin","string",!1],121:["boundary","uint",!1],122:["fixedLayout","string",!1],125:["numResources","uint",!1],126:["originalResolution","string",!1],127:["zeroGutter","string",!1],128:["zeroMargin","string",!1],129:["coverURI","string",!1],132:["regionMagnification","string",!1],201:["coverOffset","uint",!1],202:["thumbnailOffset","uint",!1],503:["title","string",!1],524:["language","string",!0],527:["pageProgressionDirection","string",!1]};Fm=/<\s*(?:mbp:)?pagebreak[^>]*>/gi;zm=/\s(id|name|aid)\s*=\s*['"]([^'"]*)['"]/i;Bm=/kindle:pos:fid:(\w+):off:(\w+)/;Kh=/kindle:(flow|embed):(\w+)(?:\?mime=(\w+\/[-+.\w]+))?/,Hm=Object.defineProperty,Um=(t,e,r)=>e in t?Hm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,er=(t,e,r)=>Um(t,typeof e!="symbol"?e+"":e,r),vi=class{constructor(e,r){if(er(this,"fileArrayBuffer"),er(this,"recordsOffset"),er(this,"recordsMagic"),er(this,"start",0),er(this,"pdbHeader"),er(this,"mobiHeader"),er(this,"palmdocHeader"),er(this,"kf8Header"),er(this,"exth"),er(this,"isKf8",!1),er(this,"resourceStart"),er(this,"decoder"),er(this,"encoder"),er(this,"removeTrailingEntries"),er(this,"decompress"),this.fileArrayBuffer=e,this.parsePdbHeader(),this.parseFirstRecord(this.loadRecord(0)),this.resourceStart=this.mobiHeader.resourceStart,!this.isKf8){let n=this.exth.boundary??4294967295;if(n<4294967295){try{this.parseFirstRecord(this.loadRecord(n)),this.start=n,this.isKf8=!0}catch{console.warn("Failed to parse kf8 header.")}r.endsWith(".mobi")&&console.warn(`File "${r}" is a compatible file. Please change the file extension to .azw3 to make it parse correctly.`)}}this.setup()}decode(e){return this.decoder.decode(e)}encode(e){return this.encoder.encode(e)}pdbLoadRecord(e){let[r,n]=this.recordsOffset[e]??[0,0];return this.fileArrayBuffer.slice(r,n)}loadRecord(e){return this.pdbLoadRecord(this.start+e)}loadMagic(e){return this.recordsMagic[this.start+e]}loadTextBuffer(e){return this.decompress(this.removeTrailingEntries(new Uint8Array(this.loadRecord(e+1))))}loadResource(e){let r=this.pdbLoadRecord(this.resourceStart+e),n=la(r.slice(0,4)),o;return n==="FONT"?o=Lm(r):n==="VIDE"||n==="AUDI"?o=new Uint8Array(r.slice(12)):o=new Uint8Array(r),{type:pm(o),raw:o}}getNCX(){let e=this.mobiHeader.indx;if(e<4294967295)return Dm(e,this.loadRecord.bind(this))}getMetadata(){let e=this.mobiHeader,r=this.exth;return{identifier:this.mobiHeader.uid.toString(),title:r?.title||e.title,author:r?.creator?.map(Wh)??[],publisher:r?.publisher??"",language:r?.language?.[0]??e.language,published:r?.date??"",description:r?.description??"",subject:r?.subject?.map(Wh)??[],rights:r?.rights??"",contributor:r?.contributor??[]}}getCoverImage(){let e=this.exth,r=Number(e.coverOffset??4294967295),n=Number(e.thumbnailOffset??4294967295),o=r<4294967295?r:n<4294967295?n:void 0;if(o)return this.loadResource(o)}parsePdbHeader(){let e=Rr(mm,this.fileArrayBuffer.slice(0,78));e.name=e.name.replace(/\0.*$/,""),this.pdbHeader=e;let r=this.fileArrayBuffer.slice(78,78+e.numRecords*8),n=Array.from({length:e.numRecords},(o,a)=>tr(r.slice(a*8,a*8+4)));this.recordsOffset=n.map((o,a)=>[o,n[a+1]]),this.recordsMagic=n.map(o=>la(this.fileArrayBuffer.slice(o,o+4)))}parseFirstRecord(e){this.palmdocHeader=Rr(bm,e.slice(0,16));let r=Rr(xm,e);if(r.magic!=="MOBI")throw new Error("Missing MOBI header");let{titleOffset:n,titleLength:o,localeLanguage:a,localeRegion:i}=r,s=gm[a.toString()]??[],l={title:la(e.slice(n,n+o)),language:s[i>>2]??s[0]??"unknown"};this.mobiHeader=Object.assign(r,l),this.kf8Header=r.version>=8?Rr(vm,e):void 0,this.isKf8=r.version>=8,this.exth=r.exthFlag&64?Pm(e.slice(r.length+16),r.encoding):void 0}setup(){this.decoder=tl(this.mobiHeader.encoding.toString()),this.encoder=new TextEncoder;let e=this.palmdocHeader.compression;if(e===1)this.decompress=n=>n;else if(e===2)this.decompress=Im;else if(e===17480)this.decompress=Rm(this.mobiHeader,this.loadRecord.bind(this));else throw new Error("Unsupported compression");let r=this.mobiHeader.trailingFlags;this.removeTrailingEntries=Om(r)}},Wm=Object.defineProperty,jm=(t,e,r)=>e in t?Wm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Mt=(t,e,r)=>jm(t,typeof e!="symbol"?e+"":e,r);Js=class{constructor(e,r="./images"){this.file=e,Mt(this,"fileArrayBuffer"),Mt(this,"mobiFile"),Mt(this,"fileName",""),Mt(this,"fdstTable",[]),Mt(this,"fullRawLength",0),Mt(this,"skelTable",[]),Mt(this,"fragTable",[]),Mt(this,"chapters",[]),Mt(this,"toc",[]),Mt(this,"fragmentOffsets",new Map),Mt(this,"fragmentSelectors",new Map),Mt(this,"rawHead",new Uint8Array),Mt(this,"rawTail",new Uint8Array),Mt(this,"lastLoadedHead",-1),Mt(this,"lastLoadedTail",-1),Mt(this,"resourceCache",new Map),Mt(this,"chapterCache",new Map),Mt(this,"idToChapter",new Map),Mt(this,"resourceSaveDir","./images"),this.fileName=Yh(e),this.resourceSaveDir=r}getFileInfo(){return{fileName:this.fileName}}getMetadata(){return this.mobiFile.getMetadata()}getCoverImage(){if(this.resourceCache.has("cover"))return this.resourceCache.get("cover");let e=this.mobiFile.getCoverImage(),r="";return e&&(r=xi(e.raw,e.type,"cover",this.resourceSaveDir),this.resourceCache.set("cover",r)),r}getSpine(){return this.chapters}getToc(){return this.toc}async innerLoadFile(){this.fileArrayBuffer=await Zh(this.file),this.mobiFile=new vi(this.fileArrayBuffer,this.fileName)}async innerInit(){let e=this.mobiFile.loadRecord.bind(this.mobiFile),r=this.mobiFile.kf8Header,n=this.mobiFile.loadRecord(r.fdst),o=Rr(Tm,n);if(o.magic!=="FDST")throw new Error("Missing FDST record");let a=Array.from({length:o.numEntries},(u,p)=>12+p*8).map(u=>[tr(n.slice(u,u+4)),tr(n.slice(u+4,u+8))]);this.fdstTable=a,this.fullRawLength=a[a.length-1][1];let s=bi(r.skel,e).table.map(({name:u,tagMap:p},y)=>({index:y,name:u,numFrag:p[1][0],offset:p[6][0],length:p[6][1]}));this.skelTable=s;let l=bi(r.frag,e),d=l.table.map(({name:u,tagMap:p})=>({insertOffset:Number.parseInt(u),selector:l.cncx[p[2][0]],index:p[4][0],offset:p[6][0],length:p[6][1]}));this.fragTable=d;let f=this.skelTable.reduce((u,p,y)=>{let E=u[u.length-1],v=E?.fragEnd??0,P=v+p.numFrag,N=this.fragTable.slice(v,P),w=p.length+N.reduce((S,L)=>S+L.length,0),A=(E?.totalLength??0)+w,C={id:y.toString(),skel:p,frags:N,fragEnd:P,length:w,totalLength:A};return this.idToChapter.set(y,C),u.push(C),u},[]);this.chapters=f;let g=this.mobiFile.getNCX();if(g){let u=({label:p,pos:y,children:E})=>{let[v,P]=y,N=Xh(v,P),w=this.fragmentOffsets.get(v);return w?w.push(P):this.fragmentOffsets.set(v,[P]),{label:p,href:N,children:E?.map(u)}};this.toc=g.map(u)}}getGuide(){let e=this.mobiFile.kf8Header.guide;if(e<4294967295){let r=this.mobiFile.loadRecord.bind(this.mobiFile),{table:n,cncx:o}=bi(e,r);return n.map(({name:a,tagMap:i})=>({label:o[i[1][0]]??"",type:a?.split(/\s/),href:Xh(i[6]?.[0]??i[3]?.[0])}))}}loadRaw(e,r){let n=r-this.rawHead.length,o=this.fullRawLength===0?1/0:this.fullRawLength-this.rawTail.length-e;if(n<0||n<o){for(;this.rawHead.length<r;){this.lastLoadedHead++;let i=this.lastLoadedHead,s=this.mobiFile.loadTextBuffer(i);this.rawHead=ca([this.rawHead,s])}return this.rawHead.slice(e,r)}for(;this.fullRawLength-this.rawTail.length>e;){this.lastLoadedTail++;let i=this.mobiFile.palmdocHeader.numTextRecords-1-this.lastLoadedTail,s=this.mobiFile.loadTextBuffer(i);this.rawTail=ca([s,this.rawTail])}let a=this.fullRawLength-this.rawTail.length;return this.rawTail.slice(e-a,r-a)}loadText(e){let{skel:r,frags:n,length:o}=e,a=this.loadRaw(r.offset,r.offset+o),i=a.slice(0,r.length);for(let s of n){let l=s.insertOffset-r.offset,d=r.length+s.offset,f=a.slice(d,d+s.length);i=ca([i.slice(0,l),f,i.slice(l)]);let g=this.fragmentOffsets.get(s.index);if(g)for(let u of g){let p=this.mobiFile.decode(f.buffer).slice(u),y=Vh(p);y&&this.cacheFragmentSelector(s.index,u,y)}}return this.mobiFile.decode(i.buffer)}loadChapter(e){let r=Number.parseInt(e);if(Number.isNaN(r))return;if(this.chapterCache.has(r))return this.chapterCache.get(r);let n=this.idToChapter.get(r);if(n){let o=this.replace(this.loadText(n));return this.chapterCache.set(r,o),o}}cacheFragmentSelector(e,r,n){let o=this.fragmentSelectors.get(e);if(o)o.set(r,n);else{let a=new Map;this.fragmentSelectors.set(e,a),a.set(r,n)}}loadFlow(e){if(e<4294967295)return this.loadRaw(this.fdstTable[e][0],this.fdstTable[e][1])}resolveHref(e){if(/^(?!blob|kindle)\w+:/i.test(e))return;let{fid:r,off:n}=$m(e),o=this.chapters.find(y=>y.frags.some(E=>E.index===r));if(!o)return;let a=o.id,i=this.fragmentSelectors.get(r)?.get(n);if(i)return{id:a,selector:i};let{skel:s,frags:l}=o,d=l.find(y=>y.index===r),f=s.offset+s.length+d.offset,g=this.loadRaw(f,f+d.length),u=this.mobiFile.decode(g.buffer).slice(n),p=Vh(u);return this.cacheFragmentSelector(r,n,p),{id:a,selector:p}}replaceResources(e){return e.replace(new RegExp(Kh,"gi"),(r,n,o,a)=>{if(this.resourceCache.has(r))return this.resourceCache.get(r);let i=n==="flow"?this.loadFlow(Number.parseInt(o)):this.mobiFile.loadResource(Number.parseInt(o,36)-1).raw,s="";if(a===jh.CSS||a===jh.SVG){let d=this.mobiFile.decode(i?.buffer);s=this.replaceResources(d)}else s=i;let l=xi(s,a,o,this.resourceSaveDir);return this.resourceCache.set(r,l),l})}replace(e){let r=[],o=e.match(/<head[^>]*>([\s\S]*)<\/head>/i)[1].match(/<link[^>]*>/gi)??[];for(let s of o){let l=s.match(/href="([^"]*)"/i)[1],d=s.match(Kh)[2],f=this.replaceResources(l);r.push({id:d,href:f})}let a=e.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1];return{html:this.replaceResources(a),css:r}}destroy(){this.resourceCache.forEach(e=>{URL.revokeObjectURL(e)})}},Gm=Object.defineProperty,qm=(t,e,r)=>e in t?Gm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ir=(t,e,r)=>qm(t,typeof e!="symbol"?e+"":e,r);el=class{constructor(e,r="./images"){this.file=e,Ir(this,"fileArrayBuffer"),Ir(this,"mobiFile"),Ir(this,"fileName",""),Ir(this,"chapters",[]),Ir(this,"idToChapter",new Map),Ir(this,"toc",[]),Ir(this,"resourceSaveDir","./images"),Ir(this,"chapterCache",new Map),Ir(this,"resourceCache",new Map),Ir(this,"recindexReg",/recindex=["']?(\d+)["']?/),Ir(this,"mediarecindexReg",/mediarecindex=["']?(\d+)["']?/),Ir(this,"fileposReg",/filepos=["']?(\d+)["']?/),this.fileName=Yh(e),this.resourceSaveDir=r}getFileInfo(){return{fileName:this.fileName}}getSpine(){return this.chapters}loadChapter(e){let r=Number.parseInt(e);if(Number.isNaN(r))return;if(this.chapterCache.has(r))return this.chapterCache.get(r);let n=this.idToChapter.get(r);if(!n)return;let o=this.replace(n.text);return this.chapterCache.set(r,o),o}getToc(){return this.toc}getCoverImage(){if(this.resourceCache.has("cover"))return this.resourceCache.get("cover");let e=this.mobiFile.getCoverImage(),r="";return e&&(r=xi(e.raw,e.type,"cover",this.resourceSaveDir),this.resourceCache.set("cover",r)),r}getMetadata(){return this.mobiFile.getMetadata()}async innerLoadFile(){this.fileArrayBuffer=await Zh(this.file),this.mobiFile=new vi(this.fileArrayBuffer,this.fileName)}async innerInit(){let{palmdocHeader:e}=this.mobiFile,r=[];for(let y=0;y<e.numTextRecords;y++)r.push(this.mobiFile.loadTextBuffer(y));let n=ca(r),o=Array.from(n,y=>String.fromCharCode(y)).join(""),a=[],i=new Map,s=0,l=Array.from(o.matchAll(Fm));l.unshift({index:0,input:"",groups:void 0,0:""});for(let y=0;y<l.length;y++){let E=l[y],v=E.index,P=E[0],N=l[y+1]?.index,w=o.slice(v+P.length,N),A=Uint8Array.from(w,L=>L.charCodeAt(0)),C=this.mobiFile.decode(A.buffer),S={id:String(s),text:C,start:v,end:N,size:A.length};a.push(S),i.set(s,S),s++}let d=a[a.length-1].text;a[a.length-1].text=d.slice(0,d.indexOf("</body>"));let f=a[0].text,g=f.indexOf("<body>");a[0].text=f.slice(g+6),this.chapters=a,this.idToChapter=i;let u=f.slice(0,g),p=this.findTocChapter(u);if(p){let y=`<wrapper>${p.text.replace(/filepos=(\d+)/gi,'filepos="$1"')}</wrapper>`,E=await Hh(y,{preserveChildrenOrder:!0,explicitChildren:!0,childkey:"children"}),v=[];this.parseNavMap(E.wrapper.children,v),this.toc=v}}findTocChapter(e){let r=/<reference.*\/>/g,n=e.match(r),o=/type="(.+?)"/,a=/filepos=(.*)/;if(n)for(let i of n){let s=i.match(o)?.[1].trim(),l=i.match(a)?.[1].trim();if(s==="toc"&&l){let d=Number.parseInt(l,10);return this.chapters.find(g=>g.end>d)}}}parseNavMap(e,r){for(let n of e){let o=n["#name"];if(o==="p"||o==="blockquote"){let a={label:"",href:""};if(n.a){let i=n.a[0],s=i._,l=Number(i.$.filepos);a={label:s,href:`filepos:${l}`},r.push(a)}(n.p||n.blockquote)&&(a.children=[],this.parseNavMap(n.children,a.children))}}}loadResource(e){if(this.resourceCache.has(String(e)))return this.resourceCache.get(String(e));let{type:r,raw:n}=this.mobiFile.loadResource(e-1),o=xi(n,r,String(e),this.resourceSaveDir);return this.resourceCache.set(String(e),o),o}replace(e){return e=e.replace(/<img[^>]*>/g,r=>{let n=r.match(this.recindexReg)[1],o=this.loadResource(Number.parseInt(n));return r.replace(this.recindexReg,`src="${o}"`)}),e=e.replace(/<(video|audio)[^>]*>/g,r=>{let n=r.match(this.recindexReg)[1],o=this.loadResource(Number.parseInt(n));r=r.replace(this.mediarecindexReg,`src="${o}"`);let a=r.match(this.recindexReg)?.[1];if(a){let i=this.loadResource(Number.parseInt(a));r=r.replace(this.recindexReg,`poster="${i}"`)}return r}),e=e.replace(/<a[^>]*>/g,r=>{let n=r.match(this.fileposReg);if(!n)return r;let o=n[1];return r.replace(this.fileposReg,`href="filepos:${o}"`)}),{html:e,css:[]}}resolveHref(e){let r=e.match(/filepos:(\d+)/);if(!r)return;let n=r[1],o=Number(n),a=this.chapters.find(i=>i.end>o);if(a)return{id:a.id,selector:`[id="filepos:${n}"]`}}destroy(){this.resourceCache.forEach(e=>{URL.revokeObjectURL(e)}),this.resourceCache.clear()}}});function yi(t,e,r){let n="";for(let o=0;o<r;o+=1){let a=t[e+o]??0;n+=a>=32&&a<127?String.fromCharCode(a):""}return n}function da(t,e){return(t[e]??0)<<8|(t[e+1]??0)}function eu(t,e){return(t[e]??0)*16777216+((t[e+1]??0)<<16|(t[e+2]??0)<<8|(t[e+3]??0))>>>0}function rn(t,e){return(t[e+3]??0)*16777216+((t[e+2]??0)<<16|(t[e+1]??0)<<8|(t[e]??0))>>>0}function Vm(t){if(t.length<86)throw new Error("\u6587\u4EF6\u592A\u5C0F\uFF0C\u4E0D\u662F\u6709\u6548\u7684 MOBI/PalmDOC \u6587\u4EF6\u3002");let e=yi(t,60,4).trim(),r=yi(t,64,4).trim(),n=`${e}${r}`;if(n!=="BOOKMOBI"&&n!=="TEXtREAd")throw new Error("\u6587\u4EF6\u4E0D\u662F MOBI/PalmDOC \u683C\u5F0F\uFF08\u7F3A\u5C11 PDB \u6587\u4EF6\u5934\uFF09\u3002");let o=da(t,76);if(o<1)throw new Error("MOBI \u8BB0\u5F55\u8868\u4E3A\u7A7A\u3002");if(78+o*8+2>t.length)throw new Error("MOBI \u8BB0\u5F55\u8868\u5DF2\u635F\u574F\u3002");let a=[];for(let E=0;E<o;E+=1){let v=eu(t,78+E*8);if(v<78||v>=t.length)throw new Error("MOBI \u8BB0\u5F55\u504F\u79FB\u65E0\u6548\uFF0C\u6587\u4EF6\u53EF\u80FD\u5DF2\u635F\u574F\u3002");if(a.length>0&&v<a[a.length-1])throw new Error("MOBI \u8BB0\u5F55\u987A\u5E8F\u65E0\u6548\u3002");a.push(v)}let i=a[0];if(i+16>t.length)throw new Error("MOBI \u6587\u4EF6\u5934\u5DF2\u635F\u574F\u3002");let s=da(t,i),l=eu(t,i+4),d=da(t,i+8),f=da(t,i+10),g=da(t,i+12);if(g!==0)throw new Error("\u8BE5 MOBI \u6587\u4EF6\u53D7 DRM \u4FDD\u62A4\uFF0C\u65E0\u6CD5\u6253\u5F00\u3002");if(![Xm,1,nu,al].includes(s))throw new Error(`\u4E0D\u652F\u6301\u7684 MOBI \u538B\u7F29\u65B9\u5F0F\uFF08${s}\uFF09\u3002`);let u=0,p=65001,y=!1;return n==="BOOKMOBI"&&yi(t,i+16,4)==="MOBI"&&(u=rn(t,i+36),p=rn(t,i+28)||65001,y=u===8),{pdbType:n,numRecords:o,offsets:a,compression:s,textLength:l,recordCount:d,recordSize:f,encryption:g,version:u,encoding:p,isKf8:y}}function Km(t,e,r){let n=e[r];if(n==null)return null;let o=e[r+1]??t.length;return o<=n?new Uint8Array(0):t.subarray(n,o)}function Ym(t){let e=t instanceof Uint8Array?t:new Uint8Array(t),r=[],n=0;for(;n<e.length;){let o=e[n];if(n+=1,o===0)r.push(0);else if(o<=8)for(let a=0;a<o&&n<e.length;a+=1)r.push(e[n]),n+=1;else if(o<=127)r.push(o);else if(o<=191){if(n>=e.length)break;let a=o<<8|e[n];n+=1;let i=a>>3&2047,s=(a&7)+3,l=r.length-i;for(let d=0;d<s;d+=1)r.push(l+d>=0?r[l+d]:0)}else r.push(32),r.push(o^128)}return Uint8Array.from(r)}function Zm(t){let e=0;for(let o of t)e+=o.length;let r=new Uint8Array(e),n=0;for(let o of t)r.set(o,n),n+=o.length;return r}function ol(t,e){let r=[];e&&r.push(e),r.push("utf-8","gb18030","windows-1252");for(let n of r)try{return new TextDecoder(n,{fatal:!0}).decode(t)}catch{}return new TextDecoder("utf-8").decode(t)}function Qm(t,e){let r=e.recordCount>0?e.recordCount:e.numRecords-1,n=[];for(let a=1;a<=r;a+=1){let i=Km(t,e.offsets,a);if(!i)break;if(e.compression===al)throw new Error("\u8BE5 MOBI \u4F7F\u7528 HUFF/CDIC \u538B\u7F29\uFF0C\u5185\u7F6E\u89E3\u6790\u5668\u65E0\u6CD5\u5904\u7406\u3002");n.push(e.compression===nu?Ym(i):i)}if(n.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u6587\u672C\u5185\u5BB9\u3002");let o=Zm(n);return e.textLength>0&&e.textLength<=o.length&&(o=o.subarray(0,e.textLength)),o}function Jm(t,e){let r={title:"",author:"",language:""};if(e.pdbType!=="BOOKMOBI")return r;let n=e.offsets[0],o=ou[e.encoding]||"utf-8",a=rn(t,n+84),i=rn(t,n+88);a>0&&i>0&&n+a+i<=t.length&&(r.title=ht(ol(t.subarray(n+a,n+a+i),o)));let s=rn(t,n+20),l=rn(t,n+128),d=n+16+s;if(l&64&&yi(t,d,4)==="EXTH"&&d+12<=t.length){let f=rn(t,d+4),g=rn(t,d+8),u=Math.min(t.length,d+f,d+12+g*8+4096),p=d+12;for(let y=0;y<g&&p+8<=u;y+=1){let E=rn(t,p),v=rn(t,p+4);if(v<8||p+v>t.length)break;let P=t.subarray(p+8,p+v),N=ht(ol(P,o));E===100&&N&&!r.author?r.author=N:E===503&&N?r.title=N:E===524&&N&&!r.language&&(r.language=N),p+=v}}return r}function tu(t,e){if(!Number.isFinite(e)||e<0)return null;for(let r=0;r<t.length;r+=1){let n=Number(t[r]?.start),o=Number(t[r]?.end);if(Number.isFinite(n)&&Number.isFinite(o)&&e>=n&&e<o)return r}for(let r=0;r<t.length;r+=1){let n=Number(t[r]?.start);if(Number.isFinite(n)&&n>e)return r}return t.length>0?t.length-1:null}function ru(t){let e=String(t||"");return e.startsWith("#")?e.slice(1):""}function eb(t,e,{fileName:r,tracker:n,warn:o}){let a={};try{a=t.getMetadata()||{}}catch{a={}}let i=[];try{i=t.getSpine()||[]}catch{i=[]}if(!Array.isArray(i)||i.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u9605\u8BFB\u987A\u5E8F\u3002");let s=new Map;i.forEach((S,L)=>{S?.id!=null&&s.set(String(S.id),L)});let l=0,d=()=>`b${l+=1}`,f=S=>{let L=String(S||"").trim();if(!L)return null;if(/^blob:/i.test(L))return n.add(L),{src:L};if(/^data:/i.test(L)){let I=Sn(L);return I?{src:n.create(I)}:(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u7801\u7684 MOBI \u5185\u5D4C\u56FE\u7247\u3002"),null)}return/^(https?:)?\/\//i.test(L)?(o("\u5DF2\u8DF3\u8FC7 MOBI \u4E2D\u7684\u5916\u90E8\u7F51\u7EDC\u56FE\u7247\u3002"),null):(o("\u5DF2\u8DF3\u8FC7\u4E00\u5F20\u65E0\u6CD5\u89E3\u6790\u7684 MOBI \u56FE\u7247\u3002"),null)},g=S=>L=>{let I=String(L||"").trim();if(!I)return null;if(/^(https?:|mailto:)/i.test(I))return{external:!0,href:I};if(I.startsWith("#"))return{chapter:S,anchor:I.slice(1)};if(I.startsWith("//")||/^(?!filepos:|kindle:)[a-z][a-z0-9+.-]*:/i.test(I))return null;try{let O=t.resolveHref(I);if(O?.id!=null){let D=s.get(String(O.id));if(D!=null){let ee=ru(O.selector);return ee?{chapter:D,anchor:ee}:{chapter:D}}}}catch{}let b=/filepos:(\d+)/i.exec(I);if(b){let O=tu(i,Number(b[1]));if(O!=null)return{chapter:O}}return null},u=[];for(let S=0;S<i.length;S+=1){let L="";try{L=t.loadChapter(i[S].id)?.html||""}catch{o(`\u7B2C ${S+1} \u7AE0\u52A0\u8F7D\u5931\u8D25\uFF0C\u5DF2\u8DF3\u8FC7\u8BE5\u7AE0\u5185\u5BB9\u3002`)}let I=[];if(L){let b=Zr(L),O=b?.body||b?.documentElement||null;O&&(I=Vn(O,{nextId:d,warn:o,chapterIndex:S,resolveImage:f,resolveLink:g(S)}))}u.push({id:`ch${S}`,title:"",blocks:I})}let p=[],y=(S,L)=>{if(Array.isArray(S))for(let I of S){if(!I)continue;let b=ht(I.label||I.title||"").slice(0,200),O=String(I.href||""),D=null,ee="";if(O){try{let $=t.resolveHref(O);if($?.id!=null){let re=s.get(String($.id));re!=null&&(D=re,ee=ru($.selector))}}catch{}if(D==null){let $=/filepos:(\d+)/i.exec(O);$&&(D=tu(i,Number($[1])))}}b&&D!=null&&p.push({title:b,chapterIndex:D,depth:L,...ee?{anchor:ee}:{}}),y(I.children,L+1)}};try{y(t.getToc?.()||[],0)}catch{o("MOBI \u76EE\u5F55\u8BFB\u53D6\u5931\u8D25\uFF0C\u5DF2\u6309\u7AE0\u8282\u6807\u9898\u751F\u6210\u76EE\u5F55\u3002")}let E=oa(u,p),v=ht(a.title||"")||Yn(r),N=(Array.isArray(a.author)?a.author:[a.author]).map(S=>ht(S||"")).filter(Boolean).join(", "),w="";try{let S=t.getCoverImage();S&&(n.add(S),w=S)}catch{}let A={title:v,chapters:u,toc:E};N&&(A.author=N);let C=ht(a.language||"");return C&&(A.language=C),w&&(A.cover=w),A}function tb(t){return String(t||"").split(/<\s*(?:mbp:)?pagebreak[^>]*>/gi)}function rb(t,e,{fileName:r,warn:n}){if(e.compression===al)throw new Error("\u8BE5 MOBI \u6587\u4EF6\u4F7F\u7528 HUFF/CDIC \u538B\u7F29\uFF0C\u5185\u7F6E\u89E3\u6790\u5668\u65E0\u6CD5\u5904\u7406\u3002");let o=Jm(t,e),a=Qm(t,e),i=nb(e.encoding),s=ol(a,i),l=o.title||Yn(r),d=0,f=()=>`b${d+=1}`,g=/<\s*(?:html|body|p|div|h[1-6]|br)\b/i.test(s),u;if(g){let E=tb(s),v=new TextEncoder,P=[],N=0;for(let w of E){let A=v.encode(w).length;P.push({start:N,end:N+A}),N+=A}u=[],E.forEach((w,A)=>{if(!w.trim())return;let C=Zr(w),S=C?.body||C?.documentElement||null,L=u.length,I=S?Vn(S,{nextId:f,warn:n,chapterIndex:L,resolveImage:()=>(n("\u5185\u7F6E MOBI \u89E3\u6790\u5668\u65E0\u6CD5\u63D0\u53D6\u56FE\u7247\u8D44\u6E90\u3002"),null),resolveLink:b=>{let O=String(b||"").trim();if(!O)return null;if(/^(https?:|mailto:)/i.test(O))return{external:!0,href:O};if(O.startsWith("#"))return{chapter:L,anchor:O.slice(1)};let D=/filepos:(\d+)/i.exec(O);if(D){let ee=Number(D[1]);for(let $=0;$<P.length;$+=1)if(ee>=P[$].start&&ee<P[$].end){let re=E.slice(0,$).filter(ae=>ae.trim()).length;return re<u.length?{chapter:re}:null}}return null}}):[];u.push({id:`ch${L}`,title:"",blocks:I})})}else u=Vs(s,{nextId:f,title:l});if(!u||u.length===0)throw new Error("MOBI \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9\u3002");let p=oa(u,[]),y={title:l,chapters:u,toc:p};return o.author&&(y.author=o.author),o.language&&(y.language=o.language),y}function nb(t){return ou[t]||""}async function ko(t,e={}){let{fileName:r=""}=e,{warnings:n,warn:o}=Jr(),a=Tn(),i=null;try{let s=await Qr(t),l=Vm(s);if(l.pdbType==="BOOKMOBI"){let f=l.isKf8||/^(azw3?|kf8)$/i.test(String(r).split(".").pop()||"");try{i=f?await rl(s):await nl(s)}catch{try{i=f?await nl(s):await rl(s)}catch{i=null}i||o("MOBI \u89E3\u6790\u5E93\u65E0\u6CD5\u6253\u5F00\u8BE5\u6587\u4EF6\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\uFF08\u53EF\u80FD\u7F3A\u5C11\u56FE\u7247\u4E0E\u76EE\u5F55\u4FE1\u606F\uFF09\u3002")}if(i)try{let g=i.getSpine?.()||[];(!Array.isArray(g)||g.length===0)&&(i.destroy?.(),i=null,o("MOBI \u9605\u8BFB\u987A\u5E8F\u4E3A\u7A7A\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\u3002"))}catch{i.destroy?.(),i=null,o("MOBI \u89E3\u6790\u5E93\u8FD4\u56DE\u5F02\u5E38\uFF0C\u5DF2\u56DE\u9000\u5230\u5185\u7F6E\u89E3\u6790\u5668\u3002")}}return{...i?eb(i,l,{fileName:r,tracker:a,warn:o}):rb(s,l,{fileName:r,warn:o}),warnings:n,dispose:()=>{try{i?.destroy?.()}catch{}a.dispose()}}}catch(s){try{i?.destroy?.()}catch{}throw a.dispose(),Nr(s,"\u65E0\u6CD5\u89E3\u6790 MOBI \u6587\u4EF6")}}var Xm,nu,al,ou,au=br(()=>{Jh();Gn();ta();hi();Zn();Xm=0,nu=2,al=17480,ou={65001:"utf-8",65e3:"utf-7",1250:"windows-1250",1251:"windows-1251",1252:"windows-1252",932:"shift_jis",936:"gb18030",949:"euc-kr",950:"big5"}});var sl={};Tl(sl,{extensionOf:()=>ci,parseBook:()=>lb});function ib(t){let e=t?`\u201C.${t}\u201D`:"\u8BE5\u6587\u4EF6";return new Error(`\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u683C\u5F0F\uFF1A${e}\u3002\u76EE\u524D\u652F\u6301 ${ab}\u3002`)}function il(){return new Error("PDF \u6587\u4EF6\u8BF7\u4F7F\u7528 PDF \u9605\u8BFB\u6A21\u5F0F\u6253\u5F00\uFF08PDF \u7531\u72EC\u7ACB\u7684\u9605\u8BFB\u5668\u5904\u7406\uFF09\u3002")}async function sb(t){let e;try{e=new Uint8Array(await t.slice(0,256).arrayBuffer())}catch{return null}if(e.length>=8){if(String.fromCharCode(...e.subarray(0,4))==="%PDF")return"pdf";if(e[0]===80&&e[1]===75)return"epub";let o="";for(let a=60;a<68;a+=1){let i=e[a]??0;o+=i>=32&&i<127?String.fromCharCode(i):" "}if(o==="BOOKMOBI"||o==="TEXtREAd")return"mobi"}let r=new TextDecoder("utf-8").decode(e.subarray(0,Math.min(e.length,200)));return/^\s*(?:<!doctype\s+html|<html|<head|<body)/i.test(r)?"html":di(r)?null:"txt"}async function lb(t,e={}){let r=typeof e.fileName=="string"?e.fileName:"",n=typeof e.mime=="string"?e.mime:"",o=ci(r);if(o==="pdf")throw il();let a=Hr[o]||null;if(!a){let i=n.toLowerCase().split(";")[0].trim();if(i==="application/pdf")throw il();a=ob[i]||null}if(!a&&!o){let i=await sb(t);if(i==="pdf")throw il();a=i&&Hr[i]||null}if(!a)throw ib(o);try{let i=await a.parse(t,{fileName:r,mime:n});return{...i,title:i.title||Yn(r),format:a.format,warnings:Array.isArray(i.warnings)?i.warnings:[]}}catch(i){throw Nr(i,"\u65E0\u6CD5\u6253\u5F00\u6587\u6863")}}var Hr,ob,ab,ll=br(()=>{mh();bh();_h();au();hi();Zn();Hr={epub:{parse:gh,format:"epub"},mobi:{parse:ko,format:"mobi"},prc:{parse:ko,format:"mobi"},azw:{parse:ko,format:"mobi"},azw3:{parse:ko,format:"mobi"},kf8:{parse:ko,format:"mobi"},txt:{parse:Ks,format:"txt"},text:{parse:Ks,format:"txt"},md:{parse:sa,format:"md"},markdown:{parse:sa,format:"md"},mdown:{parse:sa,format:"md"},mkd:{parse:sa,format:"md"},html:{parse:aa,format:"html"},htm:{parse:aa,format:"html"},xhtml:{parse:aa,format:"html"},xht:{parse:aa,format:"html"}},ob={"application/epub+zip":Hr.epub,"application/x-mobipocket-ebook":Hr.mobi,"application/x-mobi":Hr.mobi,"application/vnd.amazon.ebook":Hr.mobi,"text/plain":Hr.txt,"text/markdown":Hr.md,"text/x-markdown":Hr.md,"text/html":Hr.html,"application/xhtml+xml":Hr.html},ab="EPUB\u3001MOBI/KF8\u3001TXT\u3001Markdown \u548C HTML"});var wb={};Tl(wb,{PANEL_ID:()=>hl,apply:()=>yb,inject:()=>xb,name:()=>bb});module.exports=Lu(wb);var $v=require("react");var G=Rt(require("react"),1);var dr=Rt(require("react"),1);var kb=require("react"),j=require("react/jsx-runtime");function nt({size:t=18,children:e,viewBox:r="0 0 24 24",fill:n="none",strokeWidth:o=1.7,...a}){return(0,j.jsx)("svg",{width:t,height:t,viewBox:r,fill:n,stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",...a,children:e})}function El(t){return(0,j.jsxs)(nt,{...t,children:[(0,j.jsx)("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5Z"}),(0,j.jsx)("path",{d:"M4 18.5A2.5 2.5 0 0 1 6.5 16H20"}),(0,j.jsx)("path",{d:"M8 7h8M8 10.5h5"})]})}function Mi(t){return(0,j.jsxs)(nt,{...t,children:[(0,j.jsx)("path",{d:"M12 6.5C10.6 5.2 8.7 4.6 6.5 4.6H3v13h3.9c2 0 3.8.6 5.1 1.8 1.3-1.2 3.1-1.8 5.1-1.8H21v-13h-3.5c-2.2 0-4.1.6-5.5 1.9Z"}),(0,j.jsx)("path",{d:"M12 6.5v12.9"})]})}function Al(t){return(0,j.jsxs)(nt,{...t,children:[(0,j.jsx)("path",{d:"M19 12H5"}),(0,j.jsx)("path",{d:"m11 18-6-6 6-6"})]})}function Nl(t){return(0,j.jsxs)(nt,{...t,children:[(0,j.jsx)("path",{d:"M12 16V4"}),(0,j.jsx)("path",{d:"m7 9 5-5 5 5"}),(0,j.jsx)("path",{d:"M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15"})]})}function Po(t){return(0,j.jsxs)(nt,{...t,children:[(0,j.jsx)("circle",{cx:"11",cy:"11",r:"7"}),(0,j.jsx)("path",{d:"m20 20-3.6-3.6"})]})}function yn(t){return(0,j.jsxs)(nt,{...t,children:[(0,j.jsx)("path",{d:"m12 3 1.5 4.2L18 9l-4.5 1.8L12 15l-1.5-4.2L6 9l4.5-1.8L12 3Z"}),(0,j.jsx)("path",{d:"m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"}),(0,j.jsx)("path",{d:"m5 13 .7 1.8L7.5 15.5l-1.8.7L5 18l-.7-1.8L2.5 15.5l1.8-.7L5 13Z"})]})}function no(t){return(0,j.jsxs)(nt,{...t,children:[(0,j.jsx)("path",{d:"M4 5h8M8 3v2c0 4.2-1.8 7.2-5 9"}),(0,j.jsx)("path",{d:"M5 10c1.8 2.2 4 3.6 6.8 4.4"}),(0,j.jsx)("path",{d:"m13 20 3.6-9L20 20"}),(0,j.jsx)("path",{d:"M14.6 16.8h4.8"})]})}function _r(t){return(0,j.jsx)(nt,{...t,children:(0,j.jsx)("path",{d:"m6 6 12 12M18 6 6 18"})})}function oo(t){return(0,j.jsx)(nt,{...t,children:(0,j.jsx)("path",{d:"m15 18-6-6 6-6"})})}function ao(t){return(0,j.jsx)(nt,{...t,children:(0,j.jsx)("path",{d:"m9 18 6-6-6-6"})})}function Cl(t){return(0,j.jsx)(nt,{...t,children:(0,j.jsx)("path",{d:"m6 9 6 6 6-6"})})}function Pi(t){return(0,j.jsxs)(nt,{...t,children:[(0,j.jsx)("path",{d:"M8 6h12M8 12h12M8 18h12"}),(0,j.jsx)("path",{d:"M4 6h.01M4 12h.01M4 18h.01"})]})}function xa(t){return(0,j.jsxs)(nt,{...t,children:[(0,j.jsx)("circle",{cx:"12",cy:"12",r:"3.2"}),(0,j.jsx)("path",{d:"M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"})]})}function ln(t){return(0,j.jsxs)(nt,{...t,children:[(0,j.jsx)("path",{d:"M4 7h16M9 7V5h6v2M7 7l.7 12.2A1.8 1.8 0 0 0 9.5 21h5a1.8 1.8 0 0 0 1.8-1.8L17 7"}),(0,j.jsx)("path",{d:"M10 11v6M14 11v6"})]})}function Il(t){return(0,j.jsxs)(nt,{...t,children:[(0,j.jsx)("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),(0,j.jsx)("path",{d:"M5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V5"})]})}function cn(t){return(0,j.jsx)(nt,{...t,children:(0,j.jsx)("path",{d:"M12 5v14M5 12h14"})})}function va(t){return(0,j.jsx)(nt,{...t,children:(0,j.jsx)("path",{d:"M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"})})}function ya(t){return(0,j.jsx)(nt,{...t,children:(0,j.jsx)("path",{d:"M5 12h14"})})}function Rl(t){return(0,j.jsxs)(nt,{...t,children:[(0,j.jsx)("path",{d:"M20 11a8 8 0 1 0-2.3 6.3"}),(0,j.jsx)("path",{d:"M20 4v7h-7"})]})}function Ml(t){return(0,j.jsxs)(nt,{...t,children:[(0,j.jsx)("path",{d:"M14 4h6v6M20 4l-9 9"}),(0,j.jsx)("path",{d:"M19 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"})]})}function wa({size:t=18}){return(0,j.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[(0,j.jsx)("path",{fill:"#4285F4",d:"M22.6 12.23c0-.78-.07-1.53-.2-2.25H12v4.26h5.94a5.08 5.08 0 0 1-2.2 3.33v2.77h3.56c2.08-1.92 3.3-4.74 3.3-8.11Z"}),(0,j.jsx)("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.77c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"}),(0,j.jsx)("path",{fill:"#FBBC05",d:"M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"}),(0,j.jsx)("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.2 1.64l3.15-3.15A10.97 10.97 0 0 0 12 1 11 11 0 0 0 2.18 7.06L5.84 9.9C6.71 7.3 9.14 5.38 12 5.38Z"})]})}function _a({size:t=18}){return(0,j.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[(0,j.jsx)("path",{fill:"currentColor",d:"M12 3 1.5 8.5 12 14l8.6-4.5v6.2h1.9V8.5L12 3Z",opacity:".9"}),(0,j.jsx)("path",{fill:"currentColor",d:"M6.2 11.4v4.1c0 2.2 2.6 4 5.8 4s5.8-1.8 5.8-4v-4.1L12 14.4l-5.8-3Z",opacity:".65"})]})}function Pl(t){return(0,j.jsx)(nt,{...t,children:(0,j.jsx)("path",{d:"m5 12 4.5 4.5L19 7"})})}function Ol(t){return(0,j.jsxs)(nt,{...t,children:[(0,j.jsx)("path",{d:"m15 4 1 2.2L18.2 7 16 8 15 10.2 14 8l-2.2-1L14 6.2 15 4Z"}),(0,j.jsx)("path",{d:"m5 19 8.5-8.5"}),(0,j.jsx)("path",{d:"m4 14 6 6"})]})}function Ll(t){return(0,j.jsxs)(nt,{...t,children:[(0,j.jsx)("path",{d:"M20 13 13 20a2 2 0 0 1-2.8 0L3 12.8V3h9.8L20 10.2a2 2 0 0 1 0 2.8Z"}),(0,j.jsx)("circle",{cx:"7.5",cy:"7.5",r:"1.2"})]})}function ka(t){return(0,j.jsxs)(nt,{...t,children:[(0,j.jsx)("path",{d:"m14 4 6 6-9.5 9.5H5v-5L14 4Z"}),(0,j.jsx)("path",{d:"M12 21h9"}),(0,j.jsx)("path",{d:"M14 6.5 17.5 10"})]})}function Oo(t){return(0,j.jsxs)(nt,{...t,children:[(0,j.jsx)("path",{d:"M12 3a9 9 0 1 0 0 18h1.2a1.8 1.8 0 0 0 1.3-3l-.6-.7a1.6 1.6 0 0 1 1.2-2.7h1.6A4.3 4.3 0 0 0 21 10.3 7.7 7.7 0 0 0 12 3Z"}),(0,j.jsx)("circle",{cx:"7.5",cy:"11",r:"1"}),(0,j.jsx)("circle",{cx:"10",cy:"7.2",r:"1"}),(0,j.jsx)("circle",{cx:"15",cy:"7.2",r:"1"}),(0,j.jsx)("circle",{cx:"17",cy:"11",r:"1"})]})}function Oi(t){return(0,j.jsx)(nt,{...t,children:(0,j.jsx)("path",{d:"M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"})})}function Dl(t){return(0,j.jsx)(nt,{...t,children:(0,j.jsx)("path",{d:"M3 8h5V3M21 8h-5V3M3 16h5v5M21 16h-5v5"})})}function Ta(t){return(0,j.jsxs)(nt,{...t,children:[(0,j.jsx)("path",{d:"M12 3v12"}),(0,j.jsx)("path",{d:"m7 10 5 5 5-5"}),(0,j.jsx)("path",{d:"M4 18v2h16v-2"})]})}function Fl(t){return(0,j.jsxs)(nt,{...t,children:[(0,j.jsx)("path",{d:"M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"}),(0,j.jsx)("path",{d:"M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"})]})}function zl(t){return(0,j.jsxs)(nt,{...t,children:[(0,j.jsx)("path",{d:"M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"}),(0,j.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})}function Bl(t){return(0,j.jsxs)(nt,{...t,children:[(0,j.jsx)("path",{d:"m3 3 18 18"}),(0,j.jsx)("path",{d:"M10.6 6.1A10.7 10.7 0 0 1 12 6c6 0 9.5 6 9.5 6a16.5 16.5 0 0 1-3.2 3.7"}),(0,j.jsx)("path",{d:"M6.2 6.7C3.9 8.4 2.5 12 2.5 12S6 18 12 18c1.3 0 2.5-.3 3.5-.8"}),(0,j.jsx)("path",{d:"M9.9 9.9a3 3 0 0 0 4.2 4.2"})]})}var Du="dsh-reader";var At="books",qt="annotations",yt="assets",Or="pdfTranslations",Sa="reader-background",Ea="book-collection:",$l="dsh-reader:settings:v1";var Lt=Object.freeze({settingsVersion:2,autoTranslate:!1,hideTranslations:!1,fontSize:18,lineHeight:1.85,tocWidth:260,readingMode:"scroll",pageAnimation:"slide",bookAnimation:"slide",showToc:!0,aiOpen:!1,theme:"auto",fontFamily:"serif",fontWeight:400,contentWidth:760,brightness:1,backgroundPreset:"paper",customBackground:"#fbf7ee",textTone:"auto",backgroundImageKey:"",backgroundImageOpacity:.26,backgroundImageBlur:0,annotationPanelOpen:!1}),Lo=Object.freeze([{id:"book",label:"\u4E66\u7C4D",hint:"EPUB / MOBI / TXT \u4E0E\u4E66\u7C4D\u578B PDF"},{id:"paper",label:"\u6587\u732E",hint:"\u8BBA\u6587\u3001\u62A5\u544A\u3001\u5B66\u672F PDF"},{id:"document",label:"\u6587\u6863",hint:"Markdown / HTML \u7B49\u77ED\u6587\u6863"}]),Di=new Set(Lo.map(t=>t.id)),Fu=new Set(["paper","white","sepia","green","night","custom"]),zu=new Set(["serif","sans","kai","system"]),Bu=new Set(["scroll","book"]),$u=new Set(["slide","fade","push","flip"]),Hu=new Set(["slide","cover","flip"]),Uu=new Set([400,500,600]),Wu=new Set(["auto","dark","light"]);function Nt(){return new Promise((t,e)=>{if(typeof indexedDB>"u"){e(new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 IndexedDB\uFF0C\u65E0\u6CD5\u4FDD\u5B58\u4E66\u67B6\u3002"));return}let r=indexedDB.open(Du,3);r.onupgradeneeded=()=>{let n=r.result;n.objectStoreNames.contains(At)||n.createObjectStore(At,{keyPath:"id"}).createIndex("lastOpenedAt","lastOpenedAt"),n.objectStoreNames.contains(qt)||n.createObjectStore(qt,{keyPath:"id"}).createIndex("bookId","bookId"),n.objectStoreNames.contains(yt)||n.createObjectStore(yt,{keyPath:"key"}),n.objectStoreNames.contains(Or)||n.createObjectStore(Or,{keyPath:"key"}).createIndex("bookId","bookId")},r.onsuccess=()=>t(r.result),r.onerror=()=>e(r.error??new Error("\u6253\u5F00\u4E66\u67B6\u6570\u636E\u5E93\u5931\u8D25\u3002")),r.onblocked=()=>e(new Error("\u4E66\u67B6\u6570\u636E\u5E93\u88AB\u53E6\u4E00\u4E2A\u9875\u9762\u5360\u7528\uFF0C\u8BF7\u5173\u95ED\u5176\u5B83 DSH \u9875\u9762\u540E\u91CD\u8BD5\u3002"))})}function lr(t){return new Promise((e,r)=>{t.oncomplete=()=>e(),t.onerror=()=>r(t.error??new Error("\u4E66\u67B6\u5199\u5165\u5931\u8D25\u3002")),t.onabort=()=>r(t.error??new Error("\u4E66\u67B6\u5199\u5165\u5DF2\u53D6\u6D88\u3002"))})}function Li(t){return new Promise((e,r)=>{t.onsuccess=()=>e(t.result),t.onerror=()=>r(t.error)})}var Fi=()=>IDBKeyRange.bound(Ea,`${Ea}\uFFFF`),Hl=t=>`${Ea}${t}`;function On(t){let e=/\.([^./\\]+)$/u.exec(String(t??""));return e?e[1].toLowerCase():""}function Wr(t){switch(t){case"pdf":return"PDF";case"epub":return"EPUB";case"mobi":return"MOBI";case"azw":return"AZW";case"azw3":return"AZW3";case"txt":return"TXT";case"md":return"Markdown";case"html":return"HTML";default:return String(t??"\u6587\u4EF6").toUpperCase()}}function Do(t){return Lo.find(e=>e.id===t)?.label??"\u672A\u5206\u7C7B"}function zi(t){return["pdf","epub","mobi","azw","azw3","txt","md","markdown","html","htm"].includes(On(t))}function ju(t){let e=String(t??"");return e.length===0?0:(e.match(/[\u3400-\u9fff\uf900-\ufaff]/gu)??[]).length/e.length}function Bi(t={}){let e=String(t.format||On(t.title)||"").toLowerCase(),r=`${t.title||""} ${t.author||""}`;return e==="pdf"?/(?:^|\b)(book|novel|textbook|edition|volume|monograph|文集|全集|教材|小说|专著|丛书)(?:\b|$)/iu.test(r)||Number(t.size)>45*1024*1024?"book":"paper":["epub","mobi","azw","azw3","txt"].includes(e)?"book":"document"}async function Gu(t){if(!globalThis.crypto?.subtle){let r=2166136261,n=new Uint8Array(t);for(let o=0;o<n.length;o+=1)r^=n[o],r=Math.imul(r,16777619);return(r>>>0).toString(16).padStart(8,"0")}let e=await globalThis.crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(e)].map(r=>r.toString(16).padStart(2,"0")).join("")}async function qu(t){let e=await t.slice(0,Math.min(t.size,1048576)).arrayBuffer();return`${(await Gu(e)).slice(0,20)}-${t.size}-${String(t.name).replace(/[^\w.-]+/gu,"_").slice(-48)}`}async function $i(){let t=await Nt();try{let n=t.transaction(At,"readonly").objectStore(At).index("lastOpenedAt").openCursor(null,"prev"),o=[];return await new Promise((a,i)=>{n.onsuccess=()=>{let s=n.result;if(!s){a();return}let l=s.value;o.push({id:l.id,title:l.title,author:l.author,format:l.format,size:l.size,addedAt:l.addedAt,lastOpenedAt:l.lastOpenedAt,progress:l.progress??null,language:l.language??"",cover:typeof l.cover=="string"?l.cover:"",category:Di.has(l.category)?l.category:Bi(l),categoryManual:!!l.categoryManual}),s.continue()},n.onerror=()=>i(n.error)}),o}finally{t.close()}}async function Aa(t){let e=await Nt();try{let n=e.transaction(At,"readonly").objectStore(At).get(t);return await new Promise((o,a)=>{n.onsuccess=()=>o(n.result??null),n.onerror=()=>a(n.error)})}finally{e.close()}}async function Ul(t,{title:e,author:r,language:n}={}){if(!zi(t.name))throw new Error(`\u6682\u4E0D\u652F\u6301 .${On(t.name)||"\u672A\u77E5"} \u6587\u4EF6\u3002\u8BF7\u9009\u62E9 PDF / EPUB / MOBI / TXT / Markdown / HTML\u3002`);if(t.size>335544320)throw new Error(`\u6587\u4EF6\u8D85\u8FC7 ${Math.round(335544320/1024/1024)} MB\uFF0C\u6D4F\u89C8\u5668\u4E66\u67B6\u65E0\u6CD5\u5BB9\u7EB3\u3002`);let o=await qu(t),a=await Aa(o),i=Date.now(),s=a?.id??o,l=On(t.name)==="markdown"?"md":On(t.name),d={title:String(e??a?.title??t.name.replace(/\.[^.]+$/u,"")).trim()||"\u672A\u547D\u540D\u6587\u6863",author:String(r??a?.author??"").trim(),language:String(n??a?.language??""),format:l,size:t.size},f={id:s,...d,category:a?.category&&Di.has(a.category)?a.category:Bi(d),categoryManual:!!a?.categoryManual,cover:typeof a?.cover=="string"?a.cover:"",addedAt:a?.addedAt??i,lastOpenedAt:i,progress:a?.progress??null,blob:t},g=await Nt();try{let u=g.transaction(At,"readwrite");return u.objectStore(At).put(f),await lr(u),f}catch(u){throw u?.name==="QuotaExceededError"?new Error("\u6D4F\u89C8\u5668\u5B58\u50A8\u7A7A\u95F4\u5DF2\u6EE1\uFF0C\u65E0\u6CD5\u52A0\u5165\u4E66\u67B6\u3002\u8BF7\u5220\u9664\u4E00\u4E9B\u4E66\u540E\u91CD\u8BD5\u3002"):u}finally{g.close()}}async function io(t,e){let r=await Nt();try{let n=r.transaction(At,"readwrite"),o=n.objectStore(At),a=o.get(t),i=null;return a.onsuccess=()=>{a.result&&(i={...a.result,...e},o.put(i))},await lr(n),i}finally{r.close()}}async function Wl(t,e,{manual:r=!0}={}){if(!Di.has(e))throw new Error("\u672A\u77E5\u7684\u4E66\u7C4D\u5206\u7C7B\u3002");return io(t,{category:e,categoryManual:r})}async function jl(){let t=await $i(),e={book:0,paper:0,document:0},r=0;for(let n of t){if(n.categoryManual){e[n.category]=(e[n.category]||0)+1;continue}let o=Bi(n);e[o]=(e[o]||0)+1,o!==n.category&&(await io(n.id,{category:o,categoryManual:!1}),r+=1)}return{changed:r,counts:e}}async function Hi(t,e){return io(t,{lastOpenedAt:Date.now(),...e!==void 0?{progress:e}:{}})}async function Gl(){let t=await Nt();try{let e=t.transaction(yt,"readonly").objectStore(yt);return(await Li(e.getAll(Fi()))).sort((n,o)=>n.createdAt-o.createdAt)}finally{t.close()}}async function ql({id:t,name:e,add:r=[],remove:n=[]}){let o=e==null?void 0:String(e).trim();if((o!==void 0||!t)&&(!o||o.length>60))throw new Error("\u4E66\u5355\u540D\u79F0\u987B\u4E3A 1\u201360 \u4E2A\u5B57\u7B26\u3002");let a=await Nt();try{let i=a.transaction([yt,At],"readwrite"),s=i.objectStore(yt),l=i.objectStore(At),d=[...new Set(r)],f=lr(i);f.catch(()=>{});let[g,u]=await Promise.all([Li(s.getAll(Fi())),Promise.all(d.map(N=>Li(l.getKey(N))))]),p=g.find(N=>N.id===t);if(t&&!p)throw new Error("\u8FD9\u4E2A\u4E66\u5355\u5DF2\u88AB\u5220\u9664\u3002");let y=o??p.name;if(g.some(N=>N.id!==t&&N.name.toLowerCase()===y.toLowerCase()))throw new Error("\u5DF2\u6709\u540C\u540D\u4E66\u5355\uFF0C\u8BF7\u6362\u4E00\u4E2A\u540D\u79F0\u3002");if(u.some(N=>N===void 0))throw new Error("\u90E8\u5206\u9009\u4E2D\u7684\u4E66\u5DF2\u4ECE\u4E66\u67B6\u5220\u9664\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u3002");let E=new Set(n),v=t??ec("collection"),P={id:v,key:Hl(v),name:y,bookIds:[...new Set([...p?.bookIds??[],...u])].filter(N=>!E.has(N)),createdAt:p?.createdAt??Date.now()};return s.put(P),await f,P}finally{a.close()}}async function Xl(t){let e=await Nt();try{let r=e.transaction(yt,"readwrite");r.objectStore(yt).delete(Hl(t)),await lr(r)}finally{e.close()}}async function Vl(t){let e=await Nt();try{let r=e.transaction([At,qt,Or,yt],"readwrite");r.objectStore(At).delete(t),r.objectStore(yt).delete(`pdf-translation:${t}`);let n=r.objectStore(yt).openCursor(Fi());n.onsuccess=()=>{let s=n.result;if(!s)return;let l=s.value;l.bookIds.includes(t)&&s.update({...l,bookIds:l.bookIds.filter(d=>d!==t)}),s.continue()};let o=r.objectStore(Or).index("bookId").openKeyCursor(IDBKeyRange.only(t));o.onsuccess=()=>{let s=o.result;s&&(r.objectStore(Or).delete(s.primaryKey),s.continue())};let i=r.objectStore(qt).index("bookId").openKeyCursor(IDBKeyRange.only(t));i.onsuccess=()=>{let s=i.result;s&&(r.objectStore(qt).delete(s.primaryKey),s.continue())},await lr(r)}finally{e.close()}}async function Kl(){let t=await Nt();try{let e=t.transaction([At,qt,Or,yt],"readwrite");e.objectStore(At).clear(),e.objectStore(qt).clear(),e.objectStore(Or).clear();let r=e.objectStore(yt).openKeyCursor();r.onsuccess=()=>{let n=r.result;if(n){let o=String(n.key);(o.startsWith("pdf-translation:")||o.startsWith(Ea))&&e.objectStore(yt).delete(n.primaryKey),n.continue()}},await lr(e)}finally{t.close()}}async function Yl(t){let e=await Nt();try{let r=e.transaction(Or,"readonly").objectStore(Or).get(t);return await new Promise((n,o)=>{r.onsuccess=()=>n(r.result||null),r.onerror=()=>o(r.error)})}finally{e.close()}}async function Zl(t){let e=await Nt();try{let r=e.transaction([At,Or],"readwrite"),n=r.objectStore(At).get(t.bookId);n.onsuccess=()=>{n.result&&r.objectStore(Or).put({...t,updatedAt:Date.now()})},await lr(r)}finally{e.close()}}async function Ql(t){let e=await Nt();try{let r=e.transaction(yt,"readonly").objectStore(yt).get(`pdf-translation:${t}`);return await new Promise((n,o)=>{r.onsuccess=()=>n(r.result?.value||{}),r.onerror=()=>o(r.error)})}finally{e.close()}}async function Jl(t,e){let r=await Nt();try{let n=r.transaction([At,yt],"readwrite"),o=n.objectStore(At).get(t);o.onsuccess=()=>{o.result&&n.objectStore(yt).put({key:`pdf-translation:${t}`,value:e})},await lr(n)}finally{r.close()}}function ec(t="a"){return globalThis.crypto?.randomUUID?`${t}-${crypto.randomUUID()}`:`${t}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}async function tc(t){let e=await Nt();try{let o=e.transaction(qt,"readonly").objectStore(qt).index("bookId").getAll(t);return(await new Promise((i,s)=>{o.onsuccess=()=>i(o.result??[]),o.onerror=()=>s(o.error)})).sort((i,s)=>{let l=Number.isFinite(i.page)?i.page:Number.MAX_SAFE_INTEGER,d=Number.isFinite(s.page)?s.page:Number.MAX_SAFE_INTEGER;if(l!==d)return l-d;let f=Number.isFinite(i.chapterIndex)?i.chapterIndex:Number.MAX_SAFE_INTEGER,g=Number.isFinite(s.chapterIndex)?s.chapterIndex:Number.MAX_SAFE_INTEGER;return f!==g?f-g:(i.createdAt||0)-(s.createdAt||0)})}finally{e.close()}}async function rc(t){let e=Date.now(),r={...t,id:t.id||ec(),createdAt:t.createdAt||e,updatedAt:e};if(!r.bookId)throw new Error("\u6279\u6CE8\u7F3A\u5C11\u4E66\u7C4D\u4FE1\u606F\u3002");if(!r.kind||!r.style)throw new Error("\u6279\u6CE8\u7F3A\u5C11\u7C7B\u578B\u3002");let n=await Nt();try{let o=n.transaction(qt,"readwrite");return o.objectStore(qt).put(r),await lr(o),r}finally{n.close()}}async function nc(t,e){let r=await Nt();try{let n=r.transaction(qt,"readwrite"),o=n.objectStore(qt),a=await new Promise((s,l)=>{let d=o.get(t);d.onsuccess=()=>s(d.result??null),d.onerror=()=>l(d.error)});if(!a)return await lr(n),null;let i={...a,...e,id:a.id,updatedAt:Date.now()};return o.put(i),await lr(n),i}finally{r.close()}}async function oc(t){let e=await Nt();try{let r=e.transaction(qt,"readwrite");r.objectStore(qt).delete(t),await lr(r)}finally{e.close()}}async function ac(t){if(!t||!t.size)throw new Error("\u80CC\u666F\u56FE\u7247\u4E3A\u7A7A\u3002");if(t.size>16777216)throw new Error(`\u80CC\u666F\u56FE\u7247\u8D85\u8FC7 ${Math.round(16777216/1024/1024)} MB\uFF0C\u8BF7\u9009\u62E9\u66F4\u5C0F\u7684\u56FE\u7247\u3002`);let e=await Nt();try{let r=e.transaction(yt,"readwrite");return r.objectStore(yt).put({key:Sa,blob:t,type:t.type||"image/*",size:t.size,updatedAt:Date.now()}),await lr(r),Sa}finally{e.close()}}async function ic(){let t=await Nt();try{let r=t.transaction(yt,"readonly").objectStore(yt).get(Sa);return(await new Promise((o,a)=>{r.onsuccess=()=>o(r.result??null),r.onerror=()=>a(r.error)}))?.blob??null}finally{t.close()}}async function sc(){let t=await Nt();try{let e=t.transaction(yt,"readwrite");e.objectStore(yt).delete(Sa),await lr(e)}finally{t.close()}}function Pn(t,e,r,n){let o=Number(t);return Number.isFinite(o)?Math.max(e,Math.min(r,o)):n}function Xu(t,e){return/^#[0-9a-f]{6}$/iu.test(String(t))?String(t):e}function lc(){try{let t=localStorage.getItem($l);if(!t)return{...Lt};let e=JSON.parse(t),n=(Number(e.settingsVersion)||1)>=2&&typeof e.autoTranslate=="boolean"?e.autoTranslate:!1;return{...Lt,...e,settingsVersion:2,autoTranslate:n,hideTranslations:!!e.hideTranslations,fontSize:Pn(e.fontSize,13,34,Lt.fontSize),lineHeight:Pn(e.lineHeight,1.35,2.4,Lt.lineHeight),tocWidth:Pn(e.tocWidth,180,520,Lt.tocWidth),readingMode:e.readingMode==="page"?"book":Bu.has(e.readingMode)?e.readingMode:Lt.readingMode,pageAnimation:$u.has(e.pageAnimation)?e.pageAnimation:Lt.pageAnimation,bookAnimation:Hu.has(e.bookAnimation)?e.bookAnimation:Lt.bookAnimation,fontFamily:zu.has(e.fontFamily)?e.fontFamily:Lt.fontFamily,fontWeight:Uu.has(Number(e.fontWeight))?Number(e.fontWeight):Lt.fontWeight,contentWidth:Pn(e.contentWidth,520,1600,Lt.contentWidth),brightness:Pn(e.brightness,.6,1.2,Lt.brightness),backgroundPreset:Fu.has(e.backgroundPreset)?e.backgroundPreset:Lt.backgroundPreset,customBackground:Xu(e.customBackground,Lt.customBackground),textTone:Wu.has(e.textTone)?e.textTone:Lt.textTone,backgroundImageKey:typeof e.backgroundImageKey=="string"?e.backgroundImageKey:"",backgroundImageOpacity:Pn(e.backgroundImageOpacity,0,.85,Lt.backgroundImageOpacity),backgroundImageBlur:Pn(e.backgroundImageBlur,0,12,Lt.backgroundImageBlur),annotationPanelOpen:!!e.annotationPanelOpen}}catch{return{...Lt}}}function cc(t){try{localStorage.setItem($l,JSON.stringify(t))}catch{}}function dc(t){let e=Number(t)||0;return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:e<1024*1024*1024?`${(e/1024/1024).toFixed(1)} MB`:`${(e/1024/1024/1024).toFixed(2)} GB`}function Ui(t){if(!t)return"";let e=Date.now()-Number(t);return e<6e4?"\u521A\u521A":e<36e5?`${Math.floor(e/6e4)} \u5206\u949F\u524D`:e<864e5?`${Math.floor(e/36e5)} \u5C0F\u65F6\u524D`:e<7*864e5?`${Math.floor(e/864e5)} \u5929\u524D`:new Date(t).toLocaleDateString("zh-CN")}function hc(t){let e=String(t??"").replace(/\s+/gu,"");if(e.length<40)return!1;let r=ju(e),n=(e.match(/[A-Za-zÀ-ÖØ-öø-ÿ\u0400-\u04ff]/gu)??[]).length/e.length;return r<.18&&n>.45}var cr=Rt(require("react"),1);var me=require("react/jsx-runtime"),Lr=t=>t.title||"\u672A\u547D\u540D\u6587\u6863";function Wi(t,e){return`${t.title||""} ${t.author||""}`.toLowerCase().includes(e)}function Vu({book:t}){let[e,r]=cr.default.useState(!1);return t.cover&&!e?(0,me.jsx)("img",{src:t.cover,alt:"",loading:"lazy",decoding:"async",onError:()=>r(!0)}):(0,me.jsx)("span",{className:"dshr-collection__spine",children:Wr(t.format)})}function uc({folder:t,expanded:e,onToggle:r,onOpen:n,onRead:o}){let a=cr.default.useId(),i=cr.default.useId();return(0,me.jsxs)("article",{className:"dshr-collection","data-collection-id":t.id,children:[(0,me.jsxs)("button",{type:"button",className:"dshr-collection__open","aria-label":`\u6253\u5F00\u4E66\u5355 ${t.name}`,"aria-describedby":i,onClick:n,children:[(0,me.jsxs)("span",{className:"dshr-collection__top",children:[(0,me.jsx)("span",{className:"dshr-collection__icon",children:(0,me.jsx)(va,{size:17})}),(0,me.jsxs)("span",{className:"dshr-collection__heading",children:[(0,me.jsx)("strong",{title:t.name,children:t.name}),(0,me.jsxs)("small",{id:i,children:[t.system?"\u9ED8\u8BA4\u5206\u7C7B":"\u81EA\u5EFA\u4E66\u5355"," \xB7 ",t.books.length," \u672C"]})]}),(0,me.jsx)(ao,{size:16})]}),t.books.length?(0,me.jsx)("span",{className:"dshr-collection__covers",children:t.books.slice(0,4).map(s=>(0,me.jsxs)("span",{className:"dshr-collection__sample",children:[(0,me.jsx)("span",{className:"dshr-collection__cover",children:(0,me.jsx)(Vu,{book:s},s.cover)}),(0,me.jsx)("span",{className:"dshr-collection__title",title:Lr(s),children:Lr(s)})]},s.id))}):(0,me.jsx)("span",{className:"dshr-collection__empty",children:"\u6682\u672A\u6536\u5F55\u4E66\u7C4D"})]}),t.books.length>0&&(0,me.jsxs)("button",{type:"button",className:"dshr-collection__peek",onClick:r,"aria-expanded":e,"aria-controls":a,children:[e?"\u6536\u8D77\u4E66\u540D":`\u9884\u89C8\u5168\u90E8 ${t.books.length} \u672C`," ",(0,me.jsx)(Cl,{size:13})]}),t.books.length>0&&(0,me.jsx)("ul",{className:"dshr-collection__preview",id:a,hidden:!e,"aria-label":`${t.name}\u4E66\u540D\u6E05\u5355`,children:e&&t.books.map(s=>(0,me.jsx)("li",{children:(0,me.jsxs)("button",{type:"button",onClick:()=>o(s),children:[(0,me.jsx)("span",{children:Lr(s)}),(0,me.jsx)("small",{children:Wr(s.format)})]})},s.id))})]})}function pc({action:t,books:e,collections:r,onClose:n,onCreate:o,onSave:a,onDelete:i}){let s=cr.default.useRef(null),l=cr.default.useRef(!1),[d,f]=cr.default.useState(!1),[g,u]=cr.default.useState(""),[p,y]=cr.default.useState(t.collection?.name??""),[E,v]=cr.default.useState(""),P=t.collection?.bookIds??[],[N,w]=cr.default.useState(()=>new Set(t.bookIds??P)),[A,C]=cr.default.useState(""),S=cr.default.useId(),L=t.kind==="add",I=t.kind==="delete",b=L?"\u52A0\u5165\u4E66\u5355":I?"\u5220\u9664\u4E66\u5355":t.collection?"\u7F16\u8F91\u4E66\u5355":"\u65B0\u5EFA\u4E66\u5355",O=E.trim().toLowerCase(),D=!L&&!I?e.filter($=>Wi($,O)):[];cr.default.useLayoutEffect(()=>{let $=s.current;return $.showModal(),()=>$.close()},[]);async function ee($){if($.preventDefault(),!l.current){l.current=!0,f(!0),u("");try{I?await i(t.collection.id):L?await a({id:A,add:t.bookIds}):await a({id:t.collection?.id,name:p,add:[...N].filter(re=>!P.includes(re)),remove:P.filter(re=>!N.has(re))}),n()}catch(re){u(re?.message||"\u4E66\u5355\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002")}finally{l.current=!1,f(!1)}}}return(0,me.jsx)("dialog",{ref:s,className:"dshr-modal dshr-collection-dialog","aria-labelledby":S,onCancel:$=>{$.preventDefault(),l.current||n()},children:(0,me.jsxs)("form",{onSubmit:ee,children:[(0,me.jsx)("h3",{id:S,children:b}),I?(0,me.jsxs)("p",{children:["\u5220\u9664\u300C",t.collection.name,"\u300D\u540E\uFF0C\u91CC\u9762\u7684\u4E66\u4ECD\u53EF\u5728\u5168\u90E8\u6587\u6863\u4E2D\u6253\u5F00\uFF0C\u8FDB\u5EA6\u4E0E\u6279\u6CE8\u4F1A\u4FDD\u7559\u3002"]}):L?(0,me.jsxs)("label",{className:"dshr-collection-dialog__field",children:[(0,me.jsxs)("span",{children:["\u5C06 ",t.bookIds.length," \u672C\u4E66\u52A0\u5165"]}),(0,me.jsxs)("select",{value:A,onChange:$=>C($.target.value),disabled:d,required:!0,children:[(0,me.jsx)("option",{value:"",children:"\u9009\u62E9\u81EA\u5EFA\u4E66\u5355"}),r.map($=>(0,me.jsxs)("option",{value:$.id,children:[$.name," \xB7 ",$.bookIds.length," \u672C"]},$.id))]})]}):(0,me.jsxs)(me.Fragment,{children:[(0,me.jsxs)("label",{className:"dshr-collection-dialog__field",children:[(0,me.jsx)("span",{children:"\u4E66\u5355\u540D\u79F0"}),(0,me.jsx)("input",{value:p,onChange:$=>y($.target.value),placeholder:"\u4F8B\u5982\uFF1A\u8BBA\u6587\u5F85\u8BFB",maxLength:60,disabled:d,required:!0})]}),(0,me.jsxs)("div",{className:"dshr-collection-dialog__listbar",children:[(0,me.jsx)("strong",{children:"\u6536\u5F55\u4E66\u7C4D"}),(0,me.jsxs)("span",{children:[N.size," \u672C\u5DF2\u9009"]})]}),e.length>0&&(0,me.jsxs)("label",{className:"dshr-library__search dshr-collection-dialog__search",children:[(0,me.jsx)(Po,{size:14}),(0,me.jsx)("input",{type:"search",placeholder:"\u641C\u7D22\u4E66\u540D\u3001\u4F5C\u8005","aria-label":"\u641C\u7D22\u53EF\u52A0\u5165\u7684\u4E66\u7C4D",value:E,onChange:$=>v($.target.value)})]}),D.length?(0,me.jsx)("div",{className:"dshr-collection-dialog__choices",children:D.map($=>(0,me.jsxs)("label",{children:[(0,me.jsx)("input",{type:"checkbox",checked:N.has($.id),disabled:d,onChange:re=>{let ae=re.target.checked;w(z=>{let oe=new Set(z);return ae?oe.add($.id):oe.delete($.id),oe})}}),(0,me.jsxs)("span",{children:[Lr($),(0,me.jsx)("small",{children:[Wr($.format),$.author].filter(Boolean).join(" \xB7 ")})]})]},$.id))}):(0,me.jsx)("p",{children:e.length?"\u6CA1\u6709\u5339\u914D\u7684\u4E66\u7C4D\u3002":"\u53EF\u4EE5\u5148\u521B\u5EFA\u7A7A\u4E66\u5355\uFF0C\u5BFC\u5165\u4E66\u7C4D\u540E\u518D\u52A0\u5165\u3002"})]}),g&&(0,me.jsx)("p",{className:"dshr-collection-dialog__error",role:"alert",children:g}),(0,me.jsxs)("div",{className:"dshr-modal__actions dshr-collection-dialog__actions",children:[L&&(0,me.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:d,onClick:()=>o(t.bookIds),children:[(0,me.jsx)(cn,{size:15})," \u65B0\u5EFA\u4E66\u5355"]}),(0,me.jsx)("button",{type:"button",className:"dshr-btn",disabled:d,onClick:n,children:"\u53D6\u6D88"}),(0,me.jsxs)("button",{type:"submit",className:`dshr-btn ${I?"dshr-btn--danger":"dshr-btn--primary"}`,disabled:d||(L?!A:!I&&!p.trim()),children:[I&&(0,me.jsx)(ln,{size:14}),d?"\u6B63\u5728\u4FDD\u5B58\u2026":I?"\u5220\u9664\u4E66\u5355":L?"\u52A0\u5165":"\u4FDD\u5B58\u4E66\u5355"]})]})]})})}var U=require("react/jsx-runtime");function fc(t){let e=t.progress;return e?typeof e.page=="number"&&typeof e.pages=="number"&&e.pages>0?Math.max(0,Math.min(100,e.page/e.pages*100)):typeof e.percent=="number"?Math.max(0,Math.min(100,e.percent)):typeof e.chapter=="number"&&typeof e.chapters=="number"&&e.chapters>0?Math.max(0,Math.min(100,(e.chapter+1)/e.chapters*100)):0:0}var Ku={book:"paper",paper:"document",document:"book"};function Yu({book:t,onOpen:e,onDelete:r,onCycleCategory:n,onAdd:o,onRemove:a,selection:i,onToggle:s}){let l=fc(t),d=[Wr(t.format),t.author||"",dc(t.size)].filter(Boolean).join(" \xB7 ");return(0,U.jsxs)("article",{className:`dshr-book-card${i?" is-selecting":""}${i?.has(t.id)?" is-selected":""}`,children:[(0,U.jsxs)("button",{type:"button",className:"dshr-book","aria-pressed":i?i.has(t.id):void 0,"aria-label":i?`\u9009\u62E9 ${Lr(t)}`:`\u6253\u5F00 ${Lr(t)}`,onClick:()=>i?s(t.id):e(t),children:[(0,U.jsx)("span",{className:"dshr-book__media",children:t.cover?(0,U.jsx)("img",{className:"dshr-book__cover",src:t.cover,alt:"",loading:"lazy",decoding:"async"}):(0,U.jsx)("span",{className:"dshr-book__spine",children:Wr(t.format)})}),(0,U.jsxs)("span",{className:"dshr-book__body",children:[(0,U.jsx)("span",{className:"dshr-book__title",children:Lr(t)}),(0,U.jsx)("span",{className:"dshr-book__meta",children:d}),(0,U.jsxs)("span",{className:"dshr-book__foot",children:[(0,U.jsx)("span",{children:t.lastOpenedAt?`\u9605\u8BFB\u4E8E ${Ui(t.lastOpenedAt)}`:Ui(t.addedAt)}),(0,U.jsx)("span",{children:l>0?`${Math.round(l)}%`:"\u672A\u5F00\u59CB"})]}),(0,U.jsx)("span",{className:"dshr-book__progress","aria-hidden":"true",children:(0,U.jsx)("i",{style:{"--p":`${l}%`}})})]}),i&&(0,U.jsx)("span",{className:"dshr-book__selected","aria-hidden":"true",children:i.has(t.id)&&(0,U.jsx)(Pl,{size:14})})]}),!i&&(0,U.jsxs)("div",{className:"dshr-book__badges",children:[(0,U.jsxs)("button",{type:"button",className:`dshr-book__category is-${t.category||"document"}`,title:`\u9ED8\u8BA4\u5206\u7C7B\uFF1A${Do(t.category)}${t.categoryManual?"\uFF08\u624B\u52A8\uFF09":"\uFF08\u81EA\u52A8\uFF09"} \xB7 \u70B9\u51FB\u5207\u6362`,onClick:()=>n(t),children:[(0,U.jsx)(Ll,{size:11})," ",Do(t.category)]}),(0,U.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--ghost dshr-book__add","aria-label":`\u5C06 ${Lr(t)} \u52A0\u5165\u4E66\u5355`,onClick:()=>o([t.id]),children:[(0,U.jsx)(cn,{size:13})," \u52A0\u5165\u4E66\u5355"]}),a?(0,U.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost","aria-label":`\u4ECE\u6B64\u4E66\u5355\u79FB\u51FA ${Lr(t)}`,title:"\u4ECE\u6B64\u4E66\u5355\u79FB\u51FA",onClick:()=>a([t.id]),children:(0,U.jsx)(ya,{size:14})}):(0,U.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost dshr-book__delete","aria-label":`\u4ECE\u4E66\u67B6\u5220\u9664 ${Lr(t)}`,title:"\u4ECE\u4E66\u67B6\u5220\u9664",onClick:()=>r(t),children:(0,U.jsx)(ln,{size:14})})]})]})}function gc({books:t,collections:e,onCollectionsChange:r,loading:n,resumeBook:o,onResume:a,importing:i,organizing:s,categoryFilter:l,onCategoryFilter:d,onAutoOrganize:f,onImport:g,onOpen:u,onDelete:p,onCycleCategory:y,onSettings:E,onOnlineImport:v}){let P=dr.default.useRef(null),[N,w]=dr.default.useState(!1),[A,C]=dr.default.useState(""),[S,L]=dr.default.useState(null),[I,b]=dr.default.useState(null),[O,D]=dr.default.useState(null),[ee,$]=dr.default.useState(""),re=dr.default.useRef(0),ae=dr.default.useRef(null),z=dr.default.useRef(null),oe=dr.default.useRef(!1),H=dr.default.useMemo(()=>{let h=new Map(t.map(x=>[x.id,x])),c=new Map(Lo.map(x=>[x.id,[]])),k=[...t].sort((x,Y)=>x.addedAt-Y.addedAt);for(let x of k)c.get(x.category)?.push(x);return[...e.map(x=>({...x,books:x.bookIds.map(Y=>h.get(Y)).filter(Boolean)})),...Lo.map(x=>({id:x.id,name:x.label,system:!0,books:c.get(x.id)}))]},[t,e]),q=H.find(h=>h.id===l),ne=q?.books??t,F=A.trim().toLowerCase(),de=F?ne.filter(h=>Wi(h,F)):ne,be=I?ne.filter(h=>I.has(h.id)).map(h=>h.id):[];dr.default.useLayoutEffect(()=>{oe.current&&(oe.current=!1,z.current?.focus({preventScroll:!0}))},[l]);function Ae(h){oe.current=!0,d(h),C(""),b(null),L(null),$(""),ae.current?.scrollTo({top:0})}let te=(h=[])=>D({kind:"edit",bookIds:h}),Me=h=>e.length?D({kind:"add",bookIds:h}):te(h);async function Oe(h){let c=await ql(h);return r(k=>k.some(x=>x.id===c.id)?k.map(x=>x.id===c.id?c:x):[...k,c]),c}async function he(h){try{await Oe({id:q.id,remove:h}),b(null),$(`\u5DF2\u4ECE\u300C${q.name}\u300D\u79FB\u51FA ${h.length} \u672C\u3002`)}catch(c){$(c?.message||"\u79FB\u51FA\u4E66\u5355\u5931\u8D25\u3002")}}async function Xe(h){await Xl(h),r(c=>c.filter(k=>k.id!==h)),l===h&&Ae("all"),$("\u4E66\u5355\u5DF2\u5220\u9664\u3002")}let Le=()=>P.current?.click(),vt=h=>{h.preventDefault(),re.current=0,w(!1);let c=[...h.dataTransfer?.files??[]].filter(k=>zi(k.name));if(c.length===0){g([],{rejected:!0});return}g(c)};return(0,U.jsxs)("div",{className:"dshr-library",ref:ae,children:[(0,U.jsxs)("div",{className:"dshr-library__inner",children:[(0,U.jsxs)("header",{className:"dshr-hero",children:[(0,U.jsxs)("div",{children:[(0,U.jsxs)("div",{className:"dshr-hero__eyebrow",children:[(0,U.jsx)(Mi,{size:15})," DSH READER \xB7 LIBRARY"]}),(0,U.jsx)("h1",{children:"\u6211\u7684\u4E66\u67B6"}),(0,U.jsx)("p",{children:"\u7528\u4E66\u5355\u6574\u7406\u4E66\u7C4D\u3001\u8BBA\u6587\u548C\u9605\u8BFB\u8D44\u6599\u3002"})]}),(0,U.jsxs)("div",{className:"dshr-hero__actions",children:[(0,U.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:Le,disabled:i,children:[i?(0,U.jsx)("span",{className:"dshr-spinner"}):(0,U.jsx)(cn,{size:15}),i?"\u6B63\u5728\u52A0\u5165\u4E66\u67B6\u2026":"\u5BFC\u5165\u6587\u6863"]}),(0,U.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:v,title:"\u4ECE\u53E4\u767B\u5821\u3001Standard Ebooks\u3001arXiv \u7B49\u516C\u5F00\u6765\u6E90\u4E0B\u8F7D\u5E76\u6253\u5F00",children:[(0,U.jsx)(Ta,{size:15})," \u516C\u5F00\u4E66\u5E93\u5BFC\u5165"]}),(0,U.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:f,disabled:s||t.length===0,title:"\u6309\u6587\u4EF6\u7C7B\u578B\u4E0E\u5143\u6570\u636E\uFF0C\u628A\u4E66\u67B6\u6574\u7406\u6210\u4E66\u7C4D / \u6587\u732E / \u6587\u6863",children:[s?(0,U.jsx)("span",{className:"dshr-spinner"}):(0,U.jsx)(Ol,{size:15}),s?"\u6574\u7406\u4E2D\u2026":"\u4E00\u952E\u6574\u7406"]}),(0,U.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:E,title:"\u9605\u8BFB\u4E0E\u4E66\u67B6\u8BBE\u7F6E",children:[(0,U.jsx)(xa,{size:15})," \u8BBE\u7F6E"]})]})]}),o?(0,U.jsxs)("button",{type:"button",className:"dshr-resume",onClick:()=>a(o),children:[(0,U.jsx)("span",{className:"dshr-resume__mark",children:(0,U.jsx)(Mi,{size:19})}),(0,U.jsxs)("span",{className:"dshr-resume__body",children:[(0,U.jsx)("span",{className:"dshr-resume__eyebrow",children:"\u7EE7\u7EED\u4E0A\u6B21\u9605\u8BFB"}),(0,U.jsx)("strong",{children:o.title||"\u4E0A\u6B21\u6253\u5F00\u7684\u6587\u6863"}),(0,U.jsxs)("span",{className:"dshr-resume__meta",children:[Wr(o.format),o.progress?.page?` \xB7 \u7B2C ${o.progress.page}${o.progress.pages?` / ${o.progress.pages}`:""} \u9875`:"",` \xB7 ${Math.round(fc(o))}%`]})]}),(0,U.jsx)("span",{className:"dshr-resume__arrow",children:"\u2192"})]}):null,!q&&!n&&(0,U.jsxs)("section",{className:"dshr-collections","aria-label":"\u4E66\u5355\u6587\u4EF6\u5939",children:[(0,U.jsxs)("div",{className:"dshr-collections__bar",children:[(0,U.jsx)("h2",{ref:z,tabIndex:-1,children:"\u4E66\u5355\u6587\u4EF6\u5939"}),(0,U.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>te(),children:[(0,U.jsx)(cn,{size:15})," \u65B0\u5EFA\u4E66\u5355"]})]}),(0,U.jsx)("div",{className:"dshr-collections__grid",children:H.map(h=>(0,U.jsx)(uc,{folder:h,expanded:S===h.id,onToggle:()=>L(c=>c===h.id?null:h.id),onOpen:()=>Ae(h.id),onRead:u},h.id))})]}),!q&&(0,U.jsxs)("section",{className:`dshr-drop${t.length?" is-compact":""}${N?" is-over":""}`,onDragEnter:h=>{h.preventDefault(),re.current+=1,w(!0)},onDragOver:h=>h.preventDefault(),onDragLeave:()=>{re.current=Math.max(0,re.current-1),re.current===0&&w(!1)},onDrop:vt,"aria-label":"\u62D6\u653E\u6587\u6863\u4EE5\u5BFC\u5165",children:[(0,U.jsx)("div",{className:"dshr-drop__mark",children:(0,U.jsx)(Nl,{size:24})}),(0,U.jsxs)("div",{className:"dshr-drop__body",children:[(0,U.jsx)("div",{className:"dshr-drop__title",children:"\u62D6\u4E00\u4EFD\u6587\u732E\u6216\u4E66\u5230\u8FD9\u91CC\uFF0C\u6216\u70B9\u51FB\u5BFC\u5165"}),(0,U.jsx)("div",{className:"dshr-drop__hint",children:"\u6587\u4EF6\u53EA\u4FDD\u5B58\u5728\u672C\u673A\u6D4F\u89C8\u5668\u4E66\u67B6\u4E2D\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\uFF1B\u7FFB\u8BD1\u4EC5\u53D1\u9001\u5F53\u524D\u9009\u4E2D\u7684\u6BB5\u843D\u3002"}),!t.length&&(0,U.jsx)("div",{className:"dshr-drop__formats",children:["PDF","EPUB","MOBI","AZW3","TXT","Markdown","HTML"].map(h=>(0,U.jsx)("span",{className:"dshr-chip",children:h},h))})]}),(0,U.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:Le,disabled:i,children:"\u9009\u62E9\u6587\u4EF6"})]}),q&&(0,U.jsxs)("div",{className:"dshr-collection-context",children:[(0,U.jsxs)("nav",{"aria-label":"\u4E66\u67B6\u4F4D\u7F6E",children:[(0,U.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--ghost",onClick:()=>Ae("all"),children:[(0,U.jsx)(oo,{size:15})," \u8FD4\u56DE\u4E66\u67B6"]}),(0,U.jsxs)("span",{ref:z,tabIndex:-1,"aria-current":"page",children:[(0,U.jsx)(va,{size:16})," ",q.name]})]}),!q.system&&(0,U.jsxs)("div",{className:"dshr-collection-context__actions",children:[(0,U.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>D({kind:"edit",collection:q}),children:"\u7F16\u8F91\u4E66\u5355"}),(0,U.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--ghost",onClick:()=>D({kind:"delete",collection:q}),children:[(0,U.jsx)(ln,{size:15})," \u5220\u9664\u4E66\u5355"]})]})]}),(0,U.jsxs)("div",{className:"dshr-library__bar",children:[(0,U.jsx)("h2",{children:q?"\u4E66\u5355\u5185\u5BB9":"\u5168\u90E8\u6587\u6863"}),(0,U.jsxs)("div",{className:"dshr-library__search",children:[(0,U.jsx)(Po,{size:14}),(0,U.jsx)("input",{type:"search",value:A,onChange:h=>C(h.target.value),placeholder:q?"\u641C\u7D22\u6B64\u4E66\u5355":"\u641C\u7D22\u4E66\u540D\u3001\u4F5C\u8005","aria-label":q?"\u641C\u7D22\u6B64\u4E66\u5355":"\u641C\u7D22\u4E66\u67B6"})]}),(0,U.jsxs)("span",{children:[de.length," / ",ne.length," \u672C"]}),ne.length>0&&(0,U.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--outline","aria-pressed":!!I,onClick:()=>b(h=>h?null:new Set),children:I?"\u9000\u51FA\u591A\u9009":"\u591A\u9009"})]}),(0,U.jsx)("div",{className:"dshr-library__notice",role:"status",children:ee}),I&&(0,U.jsxs)("div",{className:"dshr-collection-selection","aria-label":"\u6279\u91CF\u4E66\u5355\u64CD\u4F5C",children:[(0,U.jsxs)("span",{children:["\u5DF2\u9009 ",be.length," \u672C"]}),(0,U.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",disabled:!de.length,onClick:()=>b(h=>new Set([...h,...de.map(c=>c.id)])),children:"\u5168\u9009\u5F53\u524D\u7ED3\u679C"}),(0,U.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:!be.length,onClick:()=>Me(be),children:"\u52A0\u5165\u4E66\u5355"}),q&&!q.system&&(0,U.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",disabled:!be.length,onClick:()=>{he(be)},children:"\u4ECE\u6B64\u4E66\u5355\u79FB\u51FA"})]}),n?(0,U.jsxs)("div",{className:"dshr-loading",style:{minHeight:180},children:[(0,U.jsx)("div",{className:"dshr-loading__ring"}),(0,U.jsx)("span",{children:"\u6B63\u5728\u6253\u5F00\u4E66\u67B6\u2026"})]}):de.length===0?(0,U.jsxs)("div",{className:"dshr-empty-books",children:[F?`\u6CA1\u6709\u5339\u914D\u300C${A.trim()}\u300D\u7684\u6587\u6863\u3002`:q?`\u300C${q.name}\u300D\u8FD8\u6CA1\u6709\u4E66\u3002`:"\u5BFC\u5165\u6587\u6863\u540E\uFF0C\u5C31\u53EF\u4EE5\u628A\u5B83\u4EEC\u52A0\u5165\u4E66\u5355\u3002",q&&!q.system&&!F&&(0,U.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",onClick:()=>D({kind:"edit",collection:q}),children:[(0,U.jsx)(cn,{size:15})," \u6DFB\u52A0\u4E66\u7C4D"]})]}):(0,U.jsx)("div",{className:"dshr-books",children:de.map(h=>(0,U.jsx)(Yu,{book:h,onOpen:u,onDelete:p,onCycleCategory:c=>y(c,Ku[c.category||"document"]),onAdd:Me,onRemove:q&&!q.system?he:void 0,selection:I,onToggle:c=>b(k=>{let x=new Set(k);return x.has(c)?x.delete(c):x.add(c),x})},h.id))}),(0,U.jsxs)("footer",{className:"dshr-library__foot",children:[(0,U.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,U.jsx)(no,{size:14})," \u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1"]}),(0,U.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,U.jsx)(yn,{size:14})," \u9009\u4E2D\u95EE AI"]}),(0,U.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,U.jsx)(Po,{size:14})," Google / \u5B66\u672F\u641C\u7D22"]}),(0,U.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[(0,U.jsx)(El,{size:14})," \u672C\u5730\u4E66\u67B6 \xB7 \u8FDB\u5EA6\u4E0E\u6279\u6CE8\u81EA\u52A8\u4FDD\u5B58"]})]})]}),O&&(0,U.jsx)(pc,{action:O,books:t,collections:e,onClose:()=>D(null),onCreate:te,onDelete:Xe,onSave:async h=>{let c=await Oe(h);b(null),$(O.kind==="add"?`\u5DF2\u52A0\u5165\u300C${c.name}\u300D\u3002`:`\u5DF2\u4FDD\u5B58\u300C${c.name}\u300D\u3002`)}},`${O.kind}:${O.collection?.id||""}`),(0,U.jsx)("input",{ref:P,type:"file",multiple:!0,accept:".pdf,.epub,.mobi,.azw,.azw3,.txt,.md,.markdown,.html,.htm,application/pdf,application/epub+zip,text/plain,text/markdown,text/html",className:"dshr-sr-only",tabIndex:-1,onChange:h=>{let c=[...h.target.files??[]];h.target.value="",c.length>0&&g(c)}})]})}var xt=Rt(require("react"),1);var Zu=Object.freeze({"content-type":"application/json","x-dsh-reader":"1"}),jr=class extends Error{constructor(e,r="REQUEST_FAILED",n=0){super(e),this.name="ReaderApiError",this.code=r,this.status=n}};async function bc(t){let e=null;try{e=await t.json()}catch{}return new jr(e?.error?.message||e?.message||`\u7FFB\u8BD1\u670D\u52A1\u4E0D\u53EF\u7528\uFF08HTTP ${t.status}\uFF09\u3002`,e?.error?.code||e?.code||"REQUEST_FAILED",t.status)}async function ji(t,e,{signal:r}={}){let n;try{n=await fetch(t,{method:"POST",headers:Zu,body:JSON.stringify(e),signal:r,credentials:"same-origin"})}catch(o){throw o?.name==="AbortError"?o:new jr("\u65E0\u6CD5\u8FDE\u63A5\u5230 DSH \u4E3B\u8FDB\u7A0B\uFF0C\u8BF7\u786E\u8BA4 DSH \u6B63\u5728\u8FD0\u884C\u3002","NETWORK",0)}if(!n.ok)throw await bc(n);return n}function Ln(t){return t?.name==="AbortError"}async function so(t,e={}){let r=t.map(i=>({id:String(i.id),text:String(i.text??"")})).filter(i=>i.text.trim()!=="");if(r.length===0)return{};let n=await ji("/dsh-reader/ai/translate",{segments:r,context:String(e.context??"").slice(0,1200),title:String(e.title??"").slice(0,300),glossary:String(e.glossary??"").slice(0,4e3),...e.expectedModel?{expectedModel:e.expectedModel}:{}},{signal:e.signal}),o=await n.json().catch(()=>null);if(!o||typeof o!="object"||!Array.isArray(o.translations))throw new jr("\u7FFB\u8BD1\u670D\u52A1\u8FD4\u56DE\u4E86\u65E0\u6CD5\u8BC6\u522B\u7684\u7ED3\u679C\u3002","BAD_RESPONSE",n.status);let a={};for(let i of o.translations)i&&typeof i.id=="string"&&typeof i.zh=="string"&&i.zh.trim()!==""&&(a[i.id]=i.zh);if(Object.keys(a).length===0)throw new jr("\u7FFB\u8BD1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u53EF\u7528\u8BD1\u6587\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","EMPTY_TRANSLATION",n.status);return e.includeMetadata?{translations:a,model:o.model,promptVersion:o.promptVersion}:a}async function xc({signal:t}={}){let e=await fetch("/dsh-reader/ai/status",{signal:t,credentials:"same-origin",headers:{"x-dsh-reader":"1"},cache:"no-store"});if(!e.ok)throw await bc(e);return e.json()}function mc(t){let e=t.split(/\r?\n/u).filter(r=>r.startsWith("data:")).map(r=>r.slice(5).trimStart()).join(`
`);if(e==="")return null;try{return JSON.parse(e)}catch{return{type:"delta",text:e}}}async function Gi(t,{onDelta:e,onMeta:r}={}){let n=await ji("/dsh-reader/ai/chat",t,{signal:t.signal});if(!n.body)throw new jr("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u6D41\u5F0F\u54CD\u5E94\u3002","NO_STREAM",n.status);let o=n.body.getReader(),a=new TextDecoder,i="",s=!1,l=null;try{for(;;){let{value:d,done:f}=await o.read();if(f)break;i+=a.decode(d,{stream:!0});let g=i.search(/\r?\n\r?\n/u);for(;g!==-1;){let u=i.slice(0,g),p=i.slice(g).match(/^\r?\n\r?\n/u)?.[0]??`

`;i=i.slice(g+p.length);let y=mc(u);y&&(y.type==="delta"&&typeof y.text=="string"?e?.(y.text):y.type==="error"?l=new jr(y.message||"AI \u56DE\u7B54\u5931\u8D25\u3002",y.code||"AI_FAILED"):y.type==="done"?s=!0:r?.(y)),g=i.search(/\r?\n\r?\n/u)}}if(i.trim()!==""){let d=mc(i);d?.type==="delta"&&typeof d.text=="string"&&e?.(d.text),d?.type==="error"&&(l=new jr(d.message||"AI \u56DE\u7B54\u5931\u8D25\u3002",d.code||"AI_FAILED")),d?.type==="done"&&(s=!0)}}finally{o.releaseLock?.()}if(l)throw l}async function vc(t,{signal:e}={}){let r=await ji("/dsh-reader/import/fetch",{url:String(t||"")},{signal:e}),n=await r.blob();if(!n.size)throw new jr("\u6765\u6E90\u8FD4\u56DE\u4E86\u7A7A\u6587\u4EF6\u3002","EMPTY",0);let o="book",a=r.headers.get("x-dsh-reader-filename");if(a)try{o=decodeURIComponent(a)}catch{o=a}return new File([n],o,{type:n.type||"application/octet-stream"})}var dn=Rt(require("react"),1);var kc=Object.freeze([{id:"yellow",label:"\u9EC4",value:"#f5d76e"},{id:"green",label:"\u7EFF",value:"#8fd18b"},{id:"pink",label:"\u7C89",value:"#f3a6c0"},{id:"blue",label:"\u84DD",value:"#94c9f0"}]),Fo=Object.freeze([{id:"thin",label:"\u7EC6",value:4},{id:"medium",label:"\u4E2D",value:9},{id:"wide",label:"\u5BBD",value:16}]),Tc=Object.freeze([{id:"ink",label:"\u58A8",value:"#3f3a33"},{id:"red",label:"\u6731",value:"#c2543f"},{id:"amber",label:"\u8D6D",value:"#a9772b"},{id:"blue",label:"\u84DD",value:"#3f6f97"}]),lo=Object.freeze({highlight:"\u8367\u5149\u7B14",underline:"\u4E0B\u5212\u7EBF",note:"\u4FBF\u7B7E"}),co=Object.freeze([{id:"highlight",label:lo.highlight},{id:"underline",label:lo.underline},{id:"note",label:lo.note}]);function qi(t){return lo[t]||"\u6807\u6CE8"}var Ra="data-anno-block",Sc=".dshr-block__body";function Xi(t){return t?t.ownerDocument?t.ownerDocument:t.nodeType===9?t:typeof globalThis<"u"&&globalThis.document?globalThis.document:null:null}function Dr(t,e=0){let r=typeof t=="number"?t:Number(t);return Number.isFinite(r)?Math.trunc(r):e}function Xt(t,e,r){return Math.min(r,Math.max(e,t))}function Na(t,e=5){let r=10**e;return Math.round(t*r)/r}function Ia(t){return String(t??"").replace(/\s+/gu," ").trim()}function Qu(t){if(!t||t.nodeType!==1)return!1;let e=t.tagName;if(e==="SCRIPT"||e==="STYLE"||e==="NOSCRIPT"||e==="TEXTAREA"||e==="SVG"||e==="CANVAS")return!0;let r=t.classList;return!!(r&&(r.contains("dshr-translation")||r.contains("dshr-anno-ignore"))||typeof t.hasAttribute=="function"&&t.hasAttribute("data-anno-ignore"))}function Vi(t){let e=[],r=[],n=new Map,o=0;if(!t)return{nodes:e,starts:r,positions:n,total:o,text:""};let a=s=>{for(let l=s.firstChild;l;l=l.nextSibling)if(l.nodeType===3){let d=l.nodeValue||"";n.set(l,e.length),e.push(l),r.push(o),o+=d.length}else l.nodeType===1&&!Qu(l)&&a(l)};a(t);let i="";for(let s=0;s<e.length;s+=1)i+=e[s].nodeValue||"";return{nodes:e,starts:r,positions:n,total:o,text:i}}function Ju(t,e,r){if(!t||!e)return null;let n;try{n=t.createRange();let o=e.nodeType===3?e.nodeValue?e.nodeValue.length:0:e.childNodes?e.childNodes.length:0;return n.setStart(e,Xt(Dr(r),0,o)),n.collapse(!0),n}catch{return null}}function yc(t,e,r,n){if(!r)return 0;if(r.nodeType===3){let o=t.positions.get(r),a=r.nodeValue||"";if(o!==void 0)return t.starts[o]+Xt(Dr(n),0,a.length)}if(r===e||e.contains(r)){let o=Xi(e),a=Ju(o,r,n);if(!a)return 0;let i=o.createRange();for(let s=0;s<t.nodes.length;s+=1)try{if(i.setStart(t.nodes[s],0),i.collapse(!0),a.compareBoundaryPoints(0,i)<=0)return t.starts[s]}catch{}return t.total}try{return e.compareDocumentPosition(r)&4?t.total:0}catch{return 0}}function wc(t,e){if(!t.nodes.length)return null;let r=Xt(Dr(e),0,t.total);for(let o=0;o<t.nodes.length;o+=1){let a=t.nodes[o].nodeValue?t.nodes[o].nodeValue.length:0,i=t.starts[o];if(r<i+a)return{node:t.nodes[o],offset:r-i};if(r===i+a&&a>0)return{node:t.nodes[o],offset:a}}let n=t.nodes[t.nodes.length-1];return{node:n,offset:n.nodeValue?n.nodeValue.length:0}}function ep(t,e,r){if(!t)return null;let n=Vi(t);if(!n.nodes.length||n.total===0)return null;let o=Xt(Dr(e),0,n.total),a=Xt(Dr(r),0,n.total);a<o&&([o,a]=[a,o]);let i=wc(n,o),s=wc(n,a),l=Xi(t);if(!l||!i||!s)return null;try{let d=l.createRange();return d.setStart(i.node,i.offset),d.setEnd(s.node,s.offset),d}catch{return null}}function Ec(t){let e=[];if(!t)return e;try{let r=typeof t.getClientRects=="function"?t.getClientRects():null;if(r&&typeof r.length=="number")for(let n=0;n<r.length;n+=1){let o=r[n];o&&e.push(o)}}catch{}if(e.length===0)try{let r=typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():null;r&&(r.width||r.height)&&e.push(r)}catch{}return e}function tp(t){let e=1/0,r=1/0,n=-1/0,o=-1/0;for(let a=0;a<t.length;a+=1){let i=t[a],s=Number(i.width)||0,l=Number(i.height)||0;if(!s&&!l)continue;let d=Number(i.left)||0,f=Number(i.top)||0;e=Math.min(e,d),r=Math.min(r,f),n=Math.max(n,d+s),o=Math.max(o,f+l)}return Number.isFinite(e)?{left:e,top:r,width:n-e,height:o-r,right:n,bottom:o}:{left:0,top:0,width:0,height:0,right:0,bottom:0}}function rp(t,e,r){let n=e,o=r;for(;n<o&&/\s/u.test(t[n]);)n+=1;for(;o>n&&/\s/u.test(t[o-1]);)o-=1;return{start:n,end:o,text:t.slice(n,o)}}function Ac(t,e){if(!t||!e||!e.rangeCount)return null;let r=Xi(t);if(!r)return null;let n;try{n=e.getRangeAt(0)}catch{return null}if(!n)return null;try{if(!t.contains(n.commonAncestorContainer))return null}catch{return null}let o=[],a;try{a=t.querySelectorAll(`[${Ra}]`)}catch{return null}for(let s=0;s<a.length;s+=1){let l=a[s],d=l.getAttribute(Ra);if(!d)continue;let f=l.classList&&l.classList.contains("dshr-block__body")?l:l.querySelector(Sc);if(!f)continue;let g=Vi(f);if(g.total===0)continue;let u;try{u=r.createRange(),u.selectNodeContents(f)}catch{continue}let p=!1,y=!1,E=!1,v=!1;try{p=n.compareBoundaryPoints(3,u)>=0,y=n.compareBoundaryPoints(1,u)<=0,E=n.compareBoundaryPoints(0,u)<0,v=n.compareBoundaryPoints(2,u)>0}catch{continue}if(p||y)continue;let P=E?0:yc(g,f,n.startContainer,n.startOffset),N=v?g.total:yc(g,f,n.endContainer,n.endOffset),w=Xt(Dr(P),0,g.total),A=Xt(Dr(N),0,g.total);if(A<=w)continue;let C=rp(g.text,w,A);C.end<=C.start||o.push({blockId:d,start:C.start,end:C.end,text:C.text})}if(o.length===0)return null;let i="";for(let s=0;s<o.length;s+=1)s>0&&(i+=`
`),i+=o[s].text;return i=i.replace(/\u00a0/gu," ").trim(),i?{text:i,rect:tp(Ec(n)),ranges:o}:null}function Nc(t,e){if(!t||!e)return[];let r;try{r=e.getBoundingClientRect()}catch{return[]}if(!r)return[];let n=Number(r.width)||0,o=Number(r.height)||0;if(n<=0||o<=0)return[];let a=Number(r.left)||0,i=Number(r.top)||0,s=a+n,l=i+o,d=Ec(t);if(d.length===0)return[];let f=[];for(let g=0;g<d.length;g+=1){let u=d[g];if(!u)continue;let p=Number(u.width)||0,y=Number(u.height)||0;if(p<=0||y<=0)continue;let E=Number(u.left)||0,v=Number(u.top)||0,P=Math.max(E,a),N=Math.max(v,i),w=Math.min(E+p,s),A=Math.min(v+y,l);w-P<.5||A-N<.5||f.push({x:Na(Xt((P-a)/n,0,1)),y:Na(Xt((N-i)/o,0,1)),w:Na(Xt((w-P)/n,0,1)),h:Na(Xt((A-N)/o,0,1))})}return f.sort((g,u)=>g.y-u.y||g.x-u.x),f}function np(t){let e=String(t??""),r="",n=[],o=-1;for(let a=0;a<e.length;a+=1){let i=e[a];if(/\s/u.test(i)){o<0&&r.length>0&&(o=a);continue}o>=0&&(n.push(o),r+=" ",o=-1),n.push(a),r+=i}return{text:r,map:n}}function op(t,e,r,n,o){let a=t.length,i=r[n];if(i===void 0)return null;let s=n+o<r.length?r[n+o]:a;return s>i?{start:i,end:s}:null}function _c(t,e){if(!t||!e)return null;let r=String(t),n=String(e).trim();if(!n)return null;let o=r.indexOf(n);if(o>=0)return{start:o,end:o+n.length};let a=np(r),i=Ia(n);if(!i)return null;let s=a.text.indexOf(i);if(s>=0){let d=op(r,a.text,a.map,s,i.length);if(d)return d}let l=Math.min(i.length,48);for(let d=l;d>=12;d-=4){let f=i.slice(0,d),g=a.text.indexOf(f);if(g<0)continue;let u=a.map[g];if(u===void 0)continue;let p=Math.min(r.length,u+i.length);if(p>u)return{start:u,end:p}}return null}function ap(t,e,r){let n=Ia(t);if(!n)return!1;let o=[],a=Ia(e);a&&o.push(a);let i=Ia(r);return i&&i!==a&&o.push(i),o.length===0?!0:o.some(s=>n===s?!0:n.length<8||s.length<8?!1:n.includes(s)||s.includes(n))}function Ca(t,e,r){let n=Xt(Dr(e),0,t.index.total),o=Xt(Dr(r),0,t.index.total);if(o<=n)return null;let a=ep(t.body,n,o);return a?{blockId:t.blockId,start:n,end:o,text:t.index.text.slice(n,o),range:a}:null}function ip(t){let e=[];if(!t)return e;let r;try{r=t.querySelectorAll(`[${Ra}]`)}catch{return e}for(let n=0;n<r.length;n+=1){let o=r[n],a=o.getAttribute(Ra);if(!a)continue;let i=o.classList&&o.classList.contains("dshr-block__body")?o:o.querySelector(Sc);if(!i)continue;let s=Vi(i);s.total!==0&&e.push({blockId:a,body:i,index:s})}return e}function Cc(t,e){let r=[];if(!t||!e)return r;let n=ip(t);if(n.length===0)return r;let o=new Map;for(let s=0;s<n.length;s+=1)o.has(n[s].blockId)||o.set(n[s].blockId,n[s]);let a=typeof e.quote=="string"?e.quote:"",i=Array.isArray(e.ranges)?e.ranges:[];for(let s=0;s<i.length;s+=1){let l=i[s];if(!l||typeof l!="object")continue;let d=o.get(String(l.blockId==null?"":l.blockId));if(!d)continue;let f=Xt(Dr(l.start),0,d.index.total),g=Xt(Dr(l.end),0,d.index.total),u=g>f;if(u){let y=d.index.text.slice(f,g);if(ap(y,l.text,a)){let E=Ca(d,f,g);E&&r.push(E);continue}}let p=_c(d.index.text,a||l.text);if(p){let y=Ca(d,p.start,p.end);y&&r.push(y);continue}if(u){let y=Ca(d,f,g);y&&r.push(y)}}if(r.length===0&&a){let s=a.split(/\n+/u).map(f=>f.trim()).filter(f=>f.length>=2),l=s.length>0?s:[a.trim()],d=new Set;for(let f=0;f<n.length;f+=1){let g=n[f];if(d.has(g.blockId))continue;let u=1/0,p=-1/0;for(let E=0;E<l.length;E+=1){let v=_c(g.index.text,l[E]);v&&(u=Math.min(u,v.start),p=Math.max(p,v.end))}if(!Number.isFinite(u)||p<=u)continue;d.add(g.blockId);let y=Ca(g,u,p);y&&r.push(y)}}return r}var Db=require("react"),St=require("react/jsx-runtime");function Dn({size:t=14}){return(0,St.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,St.jsx)("path",{d:"M9.4 2.6 5.1 6.9l-.7 2.7 2.7-.7 4.4-4.3-2.1-2Z",stroke:"currentColor",strokeWidth:"1.35",strokeLinejoin:"round"}),(0,St.jsx)("path",{d:"m4.4 9.6-2.1 2.1c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0l2.1-2.1",stroke:"currentColor",strokeWidth:"1.35",strokeLinecap:"round"}),(0,St.jsx)("path",{d:"M3 13.5h7.4",stroke:"currentColor",strokeWidth:"1.35",strokeLinecap:"round",opacity:".55"})]})}function Ma({size:t=14}){return(0,St.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,St.jsx)("path",{d:"M4.2 3v4.6a3.8 3.8 0 0 0 7.6 0V3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,St.jsx)("path",{d:"M3.4 13.3c2-.7 4.2-.8 9.2-.2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function wn({size:t=12}){return(0,St.jsxs)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,St.jsx)("path",{d:"M3.5 2.7h9v6.2l-3.2 3.4H3.5z",fill:"currentColor",fillOpacity:".9",stroke:"currentColor",strokeWidth:"1",strokeLinejoin:"round"}),(0,St.jsx)("path",{d:"M9.3 12.3V9h3.1",stroke:"var(--dshr-anno-paper, #ffffff)",strokeWidth:"1.15",strokeLinejoin:"round"}),(0,St.jsx)("path",{d:"M5.4 5.5h5.1M5.4 7.4h3.4",stroke:"var(--dshr-anno-paper, #ffffff)",strokeWidth:"1",strokeLinecap:"round",opacity:".8"})]})}function Ic({size:t=56}){return(0,St.jsxs)("svg",{width:t,height:t,viewBox:"0 0 56 56",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,St.jsx)("rect",{x:"8.5",y:"9",width:"33",height:"38",rx:"4",stroke:"currentColor",strokeWidth:"1.8",opacity:".55"}),(0,St.jsx)("path",{d:"M15 18h20M15 24h20M15 30h13",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",opacity:".42"}),(0,St.jsx)("path",{d:"M34 28.5h11.5v9.2l-4.6 5H34z",fill:"currentColor",fillOpacity:".16",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),(0,St.jsx)("path",{d:"M40.9 42.7v-5h4.6",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),(0,St.jsx)("path",{d:"M36.8 33.6h5.6M36.8 36.4h3.8",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",opacity:".7"})]})}function Pa({size:t=13}){return(0,St.jsx)("svg",{width:t,height:t,viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",focusable:"false",children:(0,St.jsx)("path",{d:"m3.4 3.4 7.2 7.2M10.6 3.4 3.4 10.6",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})})}function Rc(t,e,r){let n=Number(t);return Number.isFinite(n)?Math.min(r,Math.max(e,n)):e}function Oa(t){let e=Number(t);return .36+(Rc(Number.isFinite(e)?e:9,4,16)-4)/12*.34}function La(t){return(1-Rc(t,.1,.95))*.82}function Da(t){let e=String(t??""),r=2166136261;for(let n=0;n<e.length;n+=1)r^=e.charCodeAt(n),r=Math.imul(r,16777619);return r>>>0}function sp(t,e=0){let r=(Number(t)^Math.imul((Number(e)||0)+1,2654435769))>>>0;return r^=r<<13,r>>>=0,r^=r>>>17,r^=r<<5,r>>>=0,r/4294967296}function Fa(t,e){let r=Math.max(4,Number(e)||4),n=f=>sp(t,f)*2-1,o=3.7+n(1)*.5,a=3.1+n(2)*.45,i=3.7+n(3)*.45,s=3.3+n(4)*.55,l=r*.54,d=Math.max(1,r-.6);return[`M0.6 ${o.toFixed(2)}`,`C${(r*.18).toFixed(2)} ${a.toFixed(2)}`,`${(r*.34).toFixed(2)} ${a.toFixed(2)}`,`${l.toFixed(2)} ${i.toFixed(2)}`,`S${(r*.82).toFixed(2)} ${s.toFixed(2)}`,`${d.toFixed(2)} ${(s-.25).toFixed(2)}`].join(" ")}function za(t){if(!t)return"\u6279\u6CE8";let e=typeof t.note=="string"?t.note.trim():"";if(e)return e.length>34?`${e.slice(0,34)}\u2026`:e;let r=typeof t.quote=="string"?t.quote.trim():"";return r?r.length>34?`${r.slice(0,34)}\u2026`:r:"\u6279\u6CE8"}var Fn=require("react/jsx-runtime");function lp(t,e){let r=Math.min(t.left+t.width,e.left+e.width)-Math.max(t.left,e.left),n=Math.min(t.top+t.height,e.top+e.height)-Math.max(t.top,e.top);if(r<=0||n<=0)return 0;let o=r*n,a=Math.min(t.width*t.height,e.width*e.height);return a>0?o/a:0}function cp(t){let e=[];if(!t)return e;try{let n=typeof t.getClientRects=="function"?t.getClientRects():null;if(n&&typeof n.length=="number")for(let o=0;o<n.length;o+=1){let a=n[o];if(!a)continue;let i=Number(a.width)||0,s=Number(a.height)||0;i<=0||s<=0||e.push({left:Number(a.left)||0,top:Number(a.top)||0,width:i,height:s})}}catch{}if(e.length===0)try{let n=typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():null;n&&(Number(n.width)||0)>0&&(Number(n.height)||0)>0&&e.push({left:Number(n.left)||0,top:Number(n.top)||0,width:Number(n.width)||0,height:Number(n.height)||0})}catch{}if(e.length<=1)return e;let r=[];for(let n=0;n<e.length;n+=1){let o=e[n],a=!1;for(let i=0;i<r.length;i+=1)if(lp(o,r[i])>.55){a=!0;break}a||r.push(o)}return r}function dp(t,e){return!t||t.kind&&t.kind!=="flow"?!1:!e||t.chapterId==null?!0:t.chapterId===e}function hp(t,e){if(t===e)return!0;if(!t||!e||t.length!==e.length)return!1;for(let r=0;r<t.length;r+=1){let n=t[r],o=e[r];if(n.type!==o.type||n.key!==o.key||n.annotationId!==o.annotationId||n.x!==o.x||n.y!==o.y||n.width!==o.width||n.height!==o.height||n.color!==o.color||n.path!==o.path||n.isNote!==o.isNote||n.label!==o.label)return!1}return!0}function Mc({containerRef:t,annotations:e,chapterId:r,onOpenAnnotation:n,layoutVersion:o}){let a=dn.default.useRef(null),i=dn.default.useRef(0),s=dn.default.useRef({annotations:e,chapterId:r,onOpenAnnotation:n});s.current={annotations:e,chapterId:r,onOpenAnnotation:n};let[l,d]=dn.default.useState({height:0,marks:[]}),f=dn.default.useCallback(()=>{let u=a.current,p=t&&t.current?t.current:null;if(!u||!p)return;let y;try{y=u.getBoundingClientRect()}catch{return}if(!y)return;let{annotations:E,chapterId:v}=s.current,P=Array.isArray(E)?E:[],N=p.clientWidth||y&&p.getBoundingClientRect().width||0,w=0,A=null;try{if(A=p.querySelector(".dshr-content__inner"),!A){for(let L=p.firstElementChild;L;L=L.nextElementSibling)if(!(L===u||L.classList&&L.classList.contains("dshr-anno-layer"))){A=L;break}}}catch{A=null}if(A)try{let L=A.getBoundingClientRect();w=Math.max(0,L.top-y.top+L.height)}catch{w=0}let C=[];for(let L=0;L<P.length;L+=1){let I=P[L];if(!dp(I,v))continue;let b;try{b=Cc(p,I)}catch{continue}if(!Array.isArray(b)||b.length===0)continue;let O=I.style==="underline"||I.style==="note"?I.style:"highlight",D=I.color||"#f5d76e",ee=Da(`${I.id||""}|${I.createdAt||0}`),$=Oa(I.width),re=I.id==null?"":String(I.id),ae=O==="note"||typeof I.note=="string"&&I.note.trim().length>0,z=za(I),oe=null;for(let H=0;H<b.length;H+=1){let q=b[H],ne=cp(q&&q.range);for(let F=0;F<ne.length;F+=1){let de=ne[F],be=de.left-y.left,Ae=de.top-y.top,te=`${re}:${H}:${F}`;if(oe={x:be,y:Ae,width:de.width,height:de.height},O==="underline"){let Me=de.width+2;C.push({type:"underline",key:`u:${te}`,annotationId:re,x:be-1,y:Ae+de.height-7.2,width:Me,height:8,color:D,path:Fa(ee,Me),isNote:!1,label:z})}else{let Me=Math.max(3.5,de.height*$);C.push({type:"band",key:`b:${te}`,annotationId:re,x:be-1,y:Ae+de.height*La($),width:de.width+2,height:Me,color:D,path:"",isNote:O==="note",label:z})}w=Math.max(w,Ae+de.height+8)}}if(ae&&oe){let H=Math.min(Math.max(2,oe.x+oe.width+3),Math.max(2,N-21));C.push({type:"note",key:`n:${re}`,annotationId:re,x:H,y:Math.max(0,oe.y-1),width:19,height:19,color:D,path:"",isNote:!0,label:z})}}let S=Math.max(0,Math.ceil(w+8));d(L=>L.height===S&&hp(L.marks,C)?L:{height:S,marks:C})},[t]),g=dn.default.useCallback(()=>{if(typeof window>"u"||i.current)return;let u=()=>{i.current=0,f()};i.current=typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(u):window.setTimeout(u,16)},[f]);return dn.default.useEffect(()=>{let u=t&&t.current?t.current:null,p=a.current;if(!u||!p||typeof window>"u")return;let y=[];g(),y.push(window.setTimeout(g,80));let E=null;if(typeof ResizeObserver<"u"){let S=new ResizeObserver(()=>g());try{S.observe(u);let L=p.parentElement;L&&L!==u&&S.observe(L);let I=u.querySelector(".dshr-content__inner");I&&!I.contains(p)&&S.observe(I)}catch{}E=S}let v=null;if(typeof MutationObserver<"u"){v=new MutationObserver(S=>{for(let L=0;L<S.length;L+=1){let I=S[L].target;if(!p.contains(I)){g();return}}});try{v.observe(u,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["class","style","data-rendered"]})}catch{}}let P=()=>g(),N=S=>{p.contains(S.target)||g()};window.addEventListener("resize",P),u.addEventListener("load",N,!0);let w=u.contains(p);w||u.addEventListener("scroll",P,{passive:!0});let A=null,C=typeof document<"u"?document.fonts:null;if(C&&typeof C.ready=="object"&&typeof C.ready.then=="function"&&C.ready.then(()=>g()).catch(()=>{}),C&&typeof C.addEventListener=="function"){A=()=>g();try{C.addEventListener("loadingdone",A)}catch{A=null}}return()=>{for(let S=0;S<y.length;S+=1)window.clearTimeout(y[S]);if(i.current&&(typeof window.cancelAnimationFrame=="function"?window.cancelAnimationFrame(i.current):window.clearTimeout(i.current),i.current=0),E&&E.disconnect(),v&&v.disconnect(),window.removeEventListener("resize",P),u.removeEventListener("load",N,!0),w||u.removeEventListener("scroll",P),C&&A)try{C.removeEventListener("loadingdone",A)}catch{}}},[t,g]),dn.default.useEffect(()=>{if(g(),typeof window>"u")return;let u=window.setTimeout(g,40);return()=>window.clearTimeout(u)},[e,r,o,g]),(0,Fn.jsx)("div",{ref:a,className:"dshr-anno-layer",style:l.height>0?{height:`${l.height}px`}:void 0,"data-anno-layer":"flow",children:l.marks.map(u=>{if(u.type==="note")return(0,Fn.jsx)("button",{type:"button",className:"dshr-anno-note-btn",style:{left:`${u.x}px`,top:`${u.y}px`,"--dshr-anno-color":u.color},"data-anno-id":u.annotationId,title:u.label?`\u67E5\u770B\u6279\u6CE8\uFF1A${u.label}`:"\u67E5\u770B\u6279\u6CE8","aria-label":u.label?`\u67E5\u770B\u6279\u6CE8\uFF1A${u.label}`:"\u67E5\u770B\u6279\u6CE8",onMouseDown:p=>p.preventDefault(),onClick:()=>{let p=s.current.onOpenAnnotation;typeof p=="function"&&p(u.annotationId)},children:(0,Fn.jsx)(wn,{size:12})},u.key);if(u.type==="underline"){let p=Math.max(2,Math.round(u.width*100)/100);return(0,Fn.jsx)("svg",{className:"dshr-anno-underline",style:{left:`${u.x}px`,top:`${u.y}px`,width:`${u.width}px`,height:`${u.height}px`,"--dshr-anno-color":u.color},viewBox:`0 0 ${p} 8`,preserveAspectRatio:"none","data-anno-id":u.annotationId,"aria-hidden":"true",focusable:"false",children:(0,Fn.jsx)("path",{d:u.path})},u.key)}return(0,Fn.jsx)("span",{className:`dshr-anno-band${u.isNote?" dshr-anno-band--note":""}`,style:{left:`${u.x}px`,top:`${u.y}px`,width:`${u.width}px`,height:`${u.height}px`,"--dshr-anno-color":u.color},"data-anno-id":u.annotationId,"aria-hidden":"true"},u.key)})})}function zo(t){let e=t.scrollHeight-t.clientHeight;return e>0?Math.max(0,Math.min(1,t.scrollTop/e)):0}function Ba(t,e,r){return{chapter:t,chapters:e,scrollRatio:r,percent:(t+r)/e*100}}function Pc(t,e){let r=Math.max(1,e-48-56),n=t.filter(a=>Number.isFinite(a.top)&&a.bottom>a.top).toSorted((a,i)=>a.top-i.top),o=[0];for(let a of n)for(;a.bottom>o.at(-1)+48+r+.5;){let i=o.at(-1),s=a.top-48;o.push(s>i+.5?s:i+r)}return o}function up(t,e){let r=0,n=t.length-1;for(;r<n;){let o=Math.ceil((r+n)/2);t[o]<=e+.5?r=o:n=o-1}return r}function Oc(){let t=[0],e=0;return{get page(){return e+1},get pages(){return t.length},get top(){return t[e]},get starts(){return t},replace(r,n){t=r.length?r:[0],e=up(t,Math.max(0,n||0))},turn(r){let n=Math.max(0,Math.min(t.length-1,e+Math.sign(r)));return n===e?!1:(e=n,!0)}}}function Lc(t,e){let r=t.getBoundingClientRect(),n=[],o=(s,l)=>{s.height<2||s.width<.1||n.push({top:s.top-r.top+t.scrollTop,bottom:s.bottom-r.top+t.scrollTop,...l})},a=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let s=a.nextNode();s;s=a.nextNode()){if(!s.nodeValue?.trim()||s.parentElement.closest('[aria-hidden="true"],script,style'))continue;let l=document.createRange();l.selectNodeContents(s);for(let d of l.getClientRects())o(d,{node:s})}for(let s of e.querySelectorAll("img,svg,hr,video,canvas"))o(s.getBoundingClientRect(),{element:s,atomic:!0});n.sort((s,l)=>s.top-l.top);let i=[];for(let s of n){let l=i.at(-1),d=l&&Math.min(l.bottom,s.bottom)-Math.max(l.top,s.top);l&&!l.atomic&&!s.atomic&&d>Math.min(l.bottom-l.top,s.bottom-s.top)*.5?l.bottom=Math.max(l.bottom,s.bottom):i.push({...s})}return i}function Ki(t,e,r){let n=e+48,o=t.find(E=>E.bottom>n+.5)||t.at(-1);if(!o)return null;let a=o.element||o.node?.parentElement.closest(".dshr-block__body,.dshr-translation,.dshr-chapter__kicker")||o.node?.parentElement,i=r.getBoundingClientRect(),s=a?.getBoundingClientRect(),l=s?.height?(n-(s.top-i.top+r.scrollTop))/s.height:0;if(!o.node)return{element:a,ratio:l};let d=document.createRange(),f=1,g=o.node.length;for(;f<g;){let E=f+g>>1;d.setStart(o.node,0),d.setEnd(o.node,E);let v=d.getClientRects(),P=v[v.length-1];(P?P.top-i.top+r.scrollTop:-1/0)<o.top-1?f=E+1:g=E}let u=Math.max(0,f-1),p=u,y=document.createTreeWalker(a,NodeFilter.SHOW_TEXT);for(let E=y.nextNode();E&&E!==o.node;E=y.nextNode())p+=E.length;return{node:o.node,offset:u,textOffset:p,element:a,ratio:l}}function Dc(t,e,r){if(!t)return r;let n=e.getBoundingClientRect();if(!t.node?.isConnected&&t.element?.isConnected&&Number.isFinite(t.textOffset)){let o=t.textOffset,a=document.createTreeWalker(t.element,NodeFilter.SHOW_TEXT);for(let i=a.nextNode();i;i=a.nextNode()){if(o<i.length){t.node=i,t.offset=o;break}o-=i.length}}if(t.node?.isConnected&&e.contains(t.node)&&t.node.length){let o=document.createRange(),a=Math.min(t.offset,t.node.length-1);o.setStart(t.node,a),o.setEnd(t.node,a+1);let i=o.getBoundingClientRect();if(i.height)return i.top-n.top+e.scrollTop-48}if(t.element?.isConnected&&e.contains(t.element)){let o=t.element.getBoundingClientRect();return o.top-n.top+e.scrollTop+Math.max(0,t.ratio)*o.height-48}return r}var De=require("react/jsx-runtime"),Yi=new Set(["heading","paragraph","list-item","quote"]),pp=6;function fp(t,e){let r=t.style.scrollBehavior;t.style.scrollBehavior="auto",t.scrollTop=e,t.style.scrollBehavior=r}function gp(t,e){return`${t.title||""} \xB7 ${e?.title||""}`}var mp=xt.default.memo(function({block:e}){if(e.kind==="image")return(0,De.jsxs)("figure",{children:[e.src?(0,De.jsx)("img",{src:e.src,alt:e.alt||"",loading:"lazy",decoding:"async"}):(0,De.jsx)("div",{className:"dshr-translation",children:"\u56FE\u7247\u672A\u80FD\u8F7D\u5165"}),e.caption?(0,De.jsx)("figcaption",{children:e.caption}):null]});if(e.kind==="table")return(0,De.jsx)("div",{dangerouslySetInnerHTML:{__html:e.html||""}});if(e.kind==="code")return(0,De.jsx)("pre",{className:"dshr-block__code",children:e.text||""});if(e.kind==="rule")return(0,De.jsx)("hr",{});if(e.kind==="heading"){let r=`h${Math.max(1,Math.min(6,e.level||2))}`;return(0,De.jsx)(r,{dangerouslySetInnerHTML:{__html:e.html||""}})}return(0,De.jsx)("p",{dangerouslySetInnerHTML:{__html:e.html||""}})});function bp({state:t,onRetry:e}){return t?t.status==="loading"?(0,De.jsx)("div",{className:"dshr-translation",children:(0,De.jsxs)("span",{className:"dshr-translation__loading",children:[(0,De.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u7FFB\u8BD1\u2026"]})}):t.status==="error"?(0,De.jsxs)("div",{className:"dshr-translation is-error",children:[(0,De.jsx)("p",{children:t.error||"\u8FD9\u6BB5\u7FFB\u8BD1\u5931\u8D25\u4E86\u3002"}),(0,De.jsx)("button",{type:"button",className:"dshr-translation__retry",onClick:e,children:"\u91CD\u8BD5"})]}):t.zh?(0,De.jsx)("div",{className:"dshr-translation",children:String(t.zh).split(/\n+/u).filter(Boolean).map((r,n)=>(0,De.jsx)("p",{children:r},n))}):null:null}function Fc({book:t,chapterIndex:e,onChapterChange:r,settings:n,chapterEntry:o,onChapterEntered:a,onSelection:i,onProgress:s,annotations:l=[],onOpenAnnotation:d,focusAnnotation:f,layoutVersion:g=0}){let u=t.chapters[e],p=xt.default.useRef(null),y=xt.default.useRef(null),E=xt.default.useRef(0),v=xt.default.useRef(new Map),P=xt.default.useRef(!1),N=xt.default.useRef(null),w=xt.default.useRef(!0),A=xt.default.useMemo(()=>new Map((u?.blocks??[]).map(H=>[H.id,H])),[u]),[C,S]=xt.default.useState({}),[L,I]=xt.default.useState(!1);xt.default.useEffect(()=>{w.current=!0;let H=new AbortController;return N.current=H,()=>{w.current=!1,H.abort()}},[]);let b=xt.default.useCallback(H=>`${u?.id||"chapter"}:${H.id}`,[u?.id]),O=xt.default.useCallback((H,q)=>{w.current&&S(ne=>({...ne,[H]:{...ne[H]||{},...q}}))},[]),D=xt.default.useCallback(async()=>{if(P.current||v.current.size===0)return;P.current=!0,I(!0);let H=[...v.current.entries()].slice(0,pp);for(let[ne]of H)v.current.delete(ne);let q=gp(t,u);try{let ne=await so(H.map(([F,de])=>({id:F,text:de.text})),{context:q,title:t.title,signal:N.current?.signal});for(let[F]of H)ne[F]?O(F,{status:"done",zh:ne[F],error:void 0}):O(F,{status:"error",error:"\u7FFB\u8BD1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u8FD9\u4E00\u6BB5\u3002"})}catch(ne){if(!Ln(ne))for(let[F]of H)O(F,{status:"error",error:ne?.message||"\u7FFB\u8BD1\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002"})}finally{P.current=!1,w.current&&(I(!1),v.current.size>0&&window.setTimeout(()=>{D()},120))}},[t,u,O]),ee=xt.default.useCallback((H,{force:q=!1}={})=>{if(!H||!Yi.has(H.kind)||!H.text?.trim())return;let ne=b(H),F=C[ne];!q&&(F?.status==="loading"||F?.status==="done")||(O(ne,{status:"loading",error:void 0}),v.current.set(ne,{text:H.text.slice(0,4e3)}),D())},[D,b,C,O]),$=xt.default.useCallback(H=>{let q=H.slice(H.indexOf(":")+1),ne=A.get(q);ne&&ee(ne,{force:!0})},[A,ee]),re=xt.default.useCallback(()=>{for(let H of u?.blocks??[])Yi.has(H.kind)&&H.text?.trim()&&ee(H,{force:C[`${u.id}:${H.id}`]?.status==="error"})},[u,ee,C]);xt.default.useEffect(()=>{let H=p.current;if(!H||!n.autoTranslate||typeof IntersectionObserver>"u")return;y.current?.disconnect();let q=new IntersectionObserver(ne=>{for(let F of ne){if(!F.isIntersecting)continue;let de=F.target.getAttribute("data-seg-id"),be=A.get(de);be&&ee(be)}},{root:H,rootMargin:"420px 0px 520px 0px",threshold:.01});for(let ne of H.querySelectorAll("[data-seg-id]"))q.observe(ne);return y.current=q,()=>q.disconnect()},[A,u?.id,ee,n.autoTranslate]),xt.default.useLayoutEffect(()=>{let H=p.current;if(!H||!o||n.readingMode==="book")return;let q=o.edge==="end"?1:Math.max(0,Math.min(1,Number(o.scrollRatio)||0));fp(H,Math.max(0,H.scrollHeight-H.clientHeight)*q),a?.(o,zo(H))},[o,n.readingMode,a]);let ae=xt.default.useCallback(H=>{let q=p.current;if(!q)return;let ne=Ac(q,window.getSelection());if(!ne){i?.(null);return}i?.({...ne,source:"flow",context:u?.blocks.map(F=>F.text||"").join(`
`).slice(0,2400)||""})},[u,i]);xt.default.useEffect(()=>{if(!f?.id)return;let H=p.current,q=H?.dataset.readerNavigation||"0",ne=window.setTimeout(()=>{if(!H||H!==p.current||(H.dataset.readerNavigation||"0")!==q)return;let F=f.blockId?H.querySelector(`[data-anno-block="${CSS.escape(f.blockId)}"]`):null;if(!F)return;let de=new CustomEvent("dshr-flow-navigate",{cancelable:!0,detail:{element:F}});H.dispatchEvent(de)&&F.scrollIntoView({block:"center",behavior:"smooth"})},120);return()=>window.clearTimeout(ne)},[t,e,f]);let z=xt.default.useCallback(()=>{let H=p.current;if(!H)return;let q=Date.now();q-E.current<600||(E.current=q,s?.(Ba(e,t.chapters.length,zo(H))))},[t.chapters.length,e,s]),oe=xt.default.useCallback(H=>{let q=H.target.closest?.("a");if(!q)return;let ne=q.getAttribute("data-chapter");if(ne){H.preventDefault();let de=Number(ne);Number.isInteger(de)&&de>=0&&de<t.chapters.length&&r(de);return}let F=q.getAttribute("href")||"";F&&!F.startsWith("#")&&(H.preventDefault(),window.open(F,"_blank","noopener,noreferrer"))},[t.chapters.length,r]);return u?(0,De.jsxs)("div",{className:"dshr-content",ref:p,onScroll:z,onMouseUp:ae,onKeyUp:ae,onClick:oe,children:[(0,De.jsxs)("div",{className:"dshr-content__inner",children:[(0,De.jsxs)("article",{className:"dshr-chapter",children:[(0,De.jsxs)("div",{className:"dshr-chapter__kicker",children:["\u7B2C ",e+1," / ",t.chapters.length," \u7AE0",n.autoTranslate?" \xB7 \u5B9E\u65F6\u7FFB\u8BD1\u5DF2\u5F00\u542F":""]}),u.blocks.map(H=>{let q=b(H),ne=C[q],F=Yi.has(H.kind)&&H.text?.trim();return(0,De.jsxs)("div",{className:`dshr-block dshr-block--${H.kind}`,"data-kind":H.kind,"data-seg-id":F?H.id:void 0,"data-anno-block":H.id,children:[(0,De.jsx)("div",{className:"dshr-block__body",children:(0,De.jsx)(mp,{block:H})}),F?(0,De.jsx)(bp,{state:ne,onRetry:()=>$(q)}):null]},H.id)})]}),(0,De.jsxs)("div",{className:"dshr-chapter__nav",children:[(0,De.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e<=0,onClick:()=>r(e-1),children:[(0,De.jsx)(oo,{size:15})," ",e>0?t.chapters[e-1].title:"\u5DF2\u662F\u7B2C\u4E00\u7AE0"]}),(0,De.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:re,disabled:L,title:"\u7FFB\u8BD1\u672C\u7AE0\u6240\u6709\u6BB5\u843D",children:[L?(0,De.jsx)("span",{className:"dshr-spinner"}):(0,De.jsx)(no,{size:15})," \u7FFB\u8BD1\u672C\u7AE0"]}),(0,De.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--outline",disabled:e>=t.chapters.length-1,onClick:()=>r(e+1),children:[e<t.chapters.length-1?t.chapters[e+1].title:"\u5DF2\u662F\u6700\u540E\u4E00\u7AE0"," ",(0,De.jsx)(ao,{size:15})]})]})]}),(0,De.jsx)(Mc,{containerRef:p,annotations:l,chapterId:u.id,onOpenAnnotation:d,layoutVersion:g})]}):(0,De.jsxs)("div",{className:"dshr-error-panel",children:[(0,De.jsx)("h3",{children:"\u8FD9\u4E00\u7AE0\u4E0D\u5B58\u5728"}),(0,De.jsx)("p",{children:"\u6587\u6863\u76EE\u5F55\u53EF\u80FD\u4E0D\u5B8C\u6574\uFF0C\u8BF7\u5C1D\u8BD5\u91CD\u65B0\u5BFC\u5165\u3002"})]})}var Wo=Rt(require("react"),1);var Zi="6.5.438-reader4",Bn="/dsh-reader-assets/",zc;function xp(){return`${Bn}pdf.bundle.js?v=${Zi}`}function vp(){return zc||=import(xp()).then(t=>{if(!t?.getDocument||!t.GlobalWorkerOptions)throw new Error("PDF \u5F15\u64CE\u8D44\u6E90\u683C\u5F0F\u4E0D\u6B63\u786E");return t.GlobalWorkerOptions.workerSrc=`${Bn}pdf.worker.mjs?v=${Zi}`,t.GlobalWorkerOptions.rendererSrc=`${Bn}pdf.renderer.mjs?v=${Zi}`,t}).catch(t=>{throw zc=null,t})}var Gr=()=>new DOMException("PDF operation cancelled","AbortError"),zn=t=>{if(t?.aborted)throw Gr()};async function yp(t,e,{signal:r,onRead:n,onError:o}={}){zn(r);let a=256*1024,i=new Uint8Array(await e.slice(0,Math.min(a,e.size)).arrayBuffer());zn(r);let s={bytes:i.length,reads:1,total:e.size};class l extends t.PDFDataRangeTransport{constructor(){super(e.size,i,!0)}aborted=!1;queue=[];active=0;requestDataRange(f,g){this.aborted||r?.aborted||(this.queue.push({begin:f,end:g}),this.pump())}pump(){for(;!this.aborted&&this.active<2&&this.queue.length;){let{begin:f,end:g}=this.queue.shift();this.active++,e.slice(f,g).arrayBuffer().then(u=>{if(this.aborted||r?.aborted)return;let p=new Uint8Array(u);if(p.length!==g-f)throw new Error("PDF \u5206\u6BB5\u8BFB\u53D6\u4E0D\u5B8C\u6574");s.bytes+=p.length,s.reads++,n?.({...s}),this.onDataRange(f,p)}).catch(u=>{this.aborted||r?.aborted||(this.abort(),o?.(u))}).finally(()=>{this.active--,this.pump()})}}abort(){this.aborted=!0,this.queue.length=0}}return n?.({...s}),{range:new l,stats:s,rangeChunkSize:a,disableStream:!0,disableAutoFetch:!0}}async function $a(t,{signal:e,onProgress:r,onRead:n,onError:o}={}){zn(e);let a=await vp();zn(e);let i,s,l,d,f=!1,g,u,p=new Promise((v,P)=>{u=P});p.catch(()=>{});let y=()=>g||(f=!0,clearTimeout(d),s?.abort(),e?.removeEventListener("abort",E),g=Promise.resolve().then(()=>i?.destroy()).catch(()=>{}).finally(()=>l?.destroy()),g),E=()=>{u(Gr()),y()};e?.addEventListener("abort",E,{once:!0});try{if(l=new a.PDFWorker({verbosity:0}),await Promise.race([l.promise,p,new Promise((N,w)=>{d=setTimeout(()=>w(new Error("PDF \u540E\u53F0\u7EBF\u7A0B\u542F\u52A8\u8D85\u65F6\uFF0C\u8BF7\u68C0\u67E5 Host \u7684 Worker \u8D44\u6E90\u4E0E\u5B89\u5168\u7B56\u7565\u3002")),1e4)})]),clearTimeout(d),zn(e),typeof Worker!="function"||!(l.port instanceof Worker))throw new Error("PDF \u540E\u53F0\u7EBF\u7A0B\u4E0D\u53EF\u7528\uFF0C\u8BF7\u68C0\u67E5 /dsh-reader-assets/pdf.worker.mjs \u548C Host \u7684 Worker \u5B89\u5168\u7B56\u7565\u3002");let v;if(typeof Blob<"u"&&t instanceof Blob?(v=await yp(a,t,{signal:e,onRead:n,onError:N=>{u(N),o?.(N),y()}}),s=v.range):v={data:(t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)).slice()},zn(e),f)throw Gr();i=a.getDocument({...v,worker:l,cMapUrl:`${Bn}cmaps/`,cMapPacked:!0,standardFontDataUrl:`${Bn}standard_fonts/`,wasmUrl:`${Bn}wasm/`,iccUrl:`${Bn}iccs/`,isEvalSupported:!1,disableWorkerRendering:!1,verbosity:0}),i.onProgress=r;let P=await Promise.race([i.promise,p]);if(zn(e),f)throw Gr();return{engine:a,pdf:P,close:y,source:v}}catch(v){throw await y(),v}}var Ha=class{constructor(e=48*1024*1024){this.limit=e,this.bytes=0,this.entries=new Map}get(e){let r=this.entries.get(e);return r&&(this.entries.delete(e),this.entries.set(e,r)),r}set(e,r){this.delete(e);let n=r.bitmap.width*r.bitmap.height*4;if(n>this.limit){r.bitmap.close();return}for(this.entries.set(e,{...r,bytes:n}),this.bytes+=n;this.bytes>this.limit;)this.delete(this.entries.keys().next().value)}delete(e){let r=this.entries.get(e);r&&(this.bytes-=r.bytes,r.bitmap.close(),this.entries.delete(e))}clear(){for(let e of this.entries.keys())this.delete(e)}},Ua=class{constructor(e,r,n=20){this.count=e,this.defaultHeight=r,this.gap=n,this.heights=new Map,this.tree=new Float64Array(e+1),this.paddingTop=18}setHeight(e,r){let n=r-(this.heights.get(e)??this.defaultHeight);this.heights.set(e,r);for(let o=e;o<=this.count;o+=o&-o)this.tree[o]+=n}top(e){let r=(e-1)*(this.defaultHeight+this.gap);for(let n=e-1;n>0;n-=n&-n)r+=this.tree[n];return this.paddingTop+r}height(e){return this.heights.get(e)??this.defaultHeight}pageAt(e){let r=1,n=this.count;for(;r<n;){let o=Math.ceil((r+n)/2);this.top(o)<=e?r=o:n=o-1}return r}entryAt(e){let r=this.pageAt(e);return{page:r,top:this.top(r),height:this.height(r)}}};var wp=/[\u1100-\u11FF\u2E80-\u2EFF\u3000-\u303F\u3040-\u30FF\u3100-\u312F\u3130-\u318F\u3400-\u4DBF\u4E00-\u9FFF\uA960-\uA97F\uAC00-\uD7AF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF]/,$c=/[.。！？!?；;…]$/,_p="0123456789+\u2212-",Bc="\u2070\xB9\xB2\xB3\u2074\u2075\u2076\u2077\u2078\u2079\u207A\u207B\u207B";var kp=/[\u0000-\u0008\u000b\u000c\u000e-\u001f\ufffd]/u;function $o(t){return!!t&&wp.test(t)}function Tp(t){return String(t).replace(/\u0000/g,"").replace(/[\t\u00a0\u2000-\u200a\u202f\u205f\u3000]/g," ").replace(/\s+/g," ")}function Wa(t){return typeof t=="number"&&Number.isFinite(t)?t:null}function Bo(t){let e=t&&t.transform;if(!Array.isArray(e)||e.length<6)return null;let r=Wa(e[4]),n=Wa(e[5]);if(r===null||n===null)return null;let o=Wa(t.width),a=Wa(t.height);return{x:r,y:n,width:o===null?null:Math.abs(o),height:a===null||a<=0?null:a}}function Sp(t,e){let r=0;for(let n of t)r+=$o(n)?1:.5;return r*(e||10)}function Ep(t){return{text:"",startX:t?t.x:0,endX:t?t.x:0,y:t?t.y:0,height:t&&t.height?t.height:0,hasGeometry:!!t}}function Ap(t,e,r){let n=Tp(e);if(!n)return;if(r?.height&&t.hasGeometry&&t.height&&/^[+−-]?\d*$/.test(n)){let a=t.text.codePointAt(t.text.length-2),i=a>=119808&&a<=120779,s=/^[0-9]+$/.test(n)&&t.text&&Bc.includes(t.text.at(-1)),l=(r.y-t.y)/t.height,d=(r.x-t.endX)/t.height;(i||s)&&r.height<=t.height*.85&&l>=.18&&l<=.58&&d>=-.2&&d<=.18&&(n=[...n].map(f=>Bc[_p.indexOf(f)]).join(""))}let o="";if(t.text){let a=t.text[t.text.length-1],i=n[0];if(a===" "||i===" "||t.text.endsWith(" "))o="";else if($o(a)||$o(i))o="";else if(r&&t.hasGeometry){let s=r.x-t.endX,l=Math.max(t.height||0,r.height||0,1);o=s>l*.18?" ":""}}if(t.text=(t.text+o+n).replace(/^ +/,""),r&&t.hasGeometry){let a=r.width===null?Sp(n,r.height||t.height):r.width;t.endX=Math.max(t.endX,r.x+a),t.startX=Math.min(t.startX,r.x),r.height&&(t.height=Math.max(t.height,r.height))}}function Np(t,e,r){if(!t||r)return!0;if(!e||!t.hasGeometry)return!1;let n=Math.max(t.height||0,e.height||0,1);return Math.abs(e.y-t.y)>n*.58||e.x<t.endX-n*2&&t.endX-t.startX>n}function Cp(t,e){let r=t.lastLine;if(!r)return!1;let n=r.height||10,o=e.height||n,a=Math.max(n,o,1),i=r.y-e.y;if(i<-a*1.2||i>a*1.68)return!0;let s=o/n;return!!(s>1.18||s<.84||e.startX-t.leftX>a*1.25||$c.test(r.text)&&i>a*1.35&&r.endX<t.rightX-a*2)}function Ip(t){let e="";for(let r of t){let n=r.text.trim();if(!n)continue;if(!e){e=n;continue}let o=e[e.length-1],a=n[0];o==="-"||$o(o)||$o(a)?e+=n:e+=" "+n}return e}function Rp(t){if(t.length<=1400)return[t];let e=[],r=t;for(;r.length>1400;){let n=Math.floor(770.0000000000001),o=Math.min(r.length,1400),a=-1;for(let s=o;s>n;s-=1)if($c.test(r[s-1])||r[s-1]===`
`){a=s;break}a<=0&&(a=r.lastIndexOf(" ",o),a<n&&(a=o));let i=r.slice(0,a).trim();i&&e.push(i),r=r.slice(a).trim()}return r&&e.push(r),e}function Hc(t,{metadata:e=!1}={}){let r=[],n=null,o=!1;if(Array.isArray(t))for(let[l,d]of t.entries()){if(!d||typeof d.str!="string")continue;if(!d.str.trim()){d.hasEOL&&(o=!0);continue}let f=Bo(d);Np(n,f,o)&&(n=Ep(f),n.itemIndices=[],r.push(n)),Ap(n,d.str,f),n.itemIndices.push(d.__pdfItemIndex??l),o=!!d.hasEOL}let a=[],i=null;for(let l of r)l.text.trim()&&(!i||Cp(i,l)?(i={lines:[l],lastLine:l,leftX:l.startX,rightX:l.endX},a.push(i)):(i.lines.push(l),i.lastLine=l,i.leftX=Math.min(i.leftX,l.startX),i.rightX=Math.max(i.rightX,l.endX)));let s=[];for(let l of a){let d=Ip(l.lines);for(let f of Rp(d)){let g=f.trim();g&&s.push({src:g,...e?{itemIndices:l.lines.flatMap(u=>u.itemIndices)}:{}})}}return{text:s.map(l=>l.src).join(`

`),segments:s}}function Mp(t,e){let r=(t||[]).filter(u=>typeof u?.str=="string").map((u,p)=>({...u,__pdfItemIndex:p})),n=0;for(let u=0;u<(t||[]).length;u+=1)typeof t[u]?.str=="string"&&(r[n++].__pdfItemIndex=u);if(!e)return r;let o=r.filter(u=>u.str.trim().length>15&&u.width>e*.12),a=o.filter(u=>u.transform?.[4]<e*.3&&u.transform[4]+u.width<e*.5),i=o.filter(u=>u.transform?.[4]>=e*.49&&u.transform[4]<e*.66);if(a.length<4||i.length<4)return r;let s=r.filter(u=>u.str.trim()&&u.transform?.[4]<e*.48&&u.transform[4]+u.width>e*.52),d=i.filter(u=>{let p=u.transform[5],y=Math.max(2,(u.height||10)*.55);return a.some(E=>Math.abs(E.transform[5]-p)<y)&&!s.some(E=>Math.abs(E.transform[5]-p)<y)}).map(u=>u.transform[4]).sort((u,p)=>u-p);if(!d.some((u,p)=>d[p+3]-u<e*.02))return r;let f=[...new Set(o.filter(u=>u.transform?.[4]<e*.4&&u.transform[4]+u.width>e*.6).map(u=>Math.round(u.transform[5])))].sort((u,p)=>p-u),g=u=>{let p=u.transform?.[5]||0,y=f.filter(v=>v>p+3).length*2,E=f.some(v=>Math.abs(v-p)<=3);return[y+(E?1:0),E?0:u.transform?.[4]>=e*.48?2:1]};return r.sort((u,p)=>{let y=g(u),E=g(p);for(let v=0;v<y.length;v+=1)if(y[v]!==E[v])return y[v]-E[v];return u.__pdfItemIndex-p.__pdfItemIndex})}function Pp(t){for(let e=1;e+1<t.length;e++){let r=t[e];if(r.str!=="\u221A")continue;let n=t[e-1],o=t[e+1],a=t[e+2];if(n.str!=="1"||!/^[A-Za-z]$/u.test(o.str))continue;let i=Bo(n),s=Bo(r),l=Bo(o);if(!i?.height||!s?.width||!l?.height||!l.width||!i.width)continue;let d=i.x+i.width/2,f=(i.y-l.y)/l.height;if(s.y>=i.y||s.y<=l.y||f<.8||f>1.8||d<s.x||d>l.x+l.width||Math.abs(l.x-s.x-s.width)>l.height*.25||(r.str="/\u221A",!a||!/^[A-Za-z0-9]$/u.test(a.str)))continue;let g=Bo(a);g?.height&&g.height<=l.height*.85&&g.y<l.y-l.height*.1&&g.y>l.y-l.height*.55&&Math.abs(g.x-l.x-l.width)<=l.height*.18&&(a.str="_"+a.str)}}function Qi(t,e,r){let n=Mp(t,r);Pp(n);let o=Hc(n,{metadata:!0});return{text:o.text,segments:o.segments.map((a,i)=>{let s=a.itemIndices.map(u=>t[u]?.str?.trim()||""),l=(a.src.match(/(?:\b[Oo]|[𝑂𝒪ΩΘ])\s*\((?:[^()\n]|\([^()\n]{1,40}\)){1,120}\)/gu)||[]).filter(u=>/[\u{1d400}-\u{1d7ff}⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻+×/]|\(\s*[A-Z]\s*\)/u.test(u)),d=a.src.match(/(?<![\p{L}\p{N}.])\d+(?:[.,]\d+)?(?:\s*[-–—]\s*\d+(?:[.,]\d+)?)?\s*×(?!\s*\d)/gu)||[],f=a.src.match(/\b1\/√[A-Za-z](?:_[A-Za-z0-9])?(?![\p{L}\p{N}_])/gu)||[],g=s.filter(u=>/[∑∫√≈≠≤≥∂∞]/u.test(u)&&!/[A-Za-z]{4}|[\u3400-\u9fff]/u.test(u));return{...a,id:`p${e}-s${i}`,protectedTokens:[...new Set([...l,...d,...f,...g])],...s.some(u=>kp.test(u))?{sourceNeedsReview:!0}:{}}})}}var Uc=String.raw`
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
`;var Wc=String.raw`
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
`;var Ho=Rt(require("react"),1);var jc="reader-a-2";function $n(t){return String(t||"").split(/\r?\n/u).map(e=>e.trim()).filter(Boolean).join(`
`).slice(0,4e3)}function Op(t,e=[]){let r=[...new Set([...e,...t.match(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]|\[\d+(?:\s*[,–—-]\s*\d+)*\]|https?:\/\/[^\s]+|\b10\.\d{4,9}\/[^\s]+/gu)||[]])].filter(a=>a&&t.includes(a)).sort((a,i)=>i.length-a.length),n=[],o=t;for(let a of r){let i=`\u27E6KEEP_${n.length}\u27E7`,s=o.split(a);s.length!==1&&(o=s.join(i),n.push({placeholder:i,token:a,count:s.length-1}))}return{text:o,restore(a){let i=String(a||"");for(let{placeholder:s,token:l,count:d}of n){let f=i.split(s);if(f.length-1!==d)throw new Error("\u8BD1\u6587\u9057\u6F0F\u6216\u91CD\u590D\u4E86\u516C\u5F0F\u6216\u5F15\u7528\u6807\u8BB0\uFF0C\u8BF7\u91CD\u8BD5\u672C\u6BB5\u3002");i=f.join(l)}if(/⟦KEEP_\d+⟧/u.test(i))throw new Error("\u8BD1\u6587\u5305\u542B\u65E0\u6CD5\u5BF9\u5E94\u7684\u516C\u5F0F\u6807\u8BB0\uFF0C\u8BF7\u91CD\u8BD5\u672C\u6BB5\u3002");return i}}}async function Lp(t,e){if(!globalThis.crypto?.subtle)return null;let r=new TextEncoder().encode(JSON.stringify([jc,t.documentId,e,"zh-CN",t.model?.provider,t.model?.model,t.model?.promptVersion,$n(t.glossary)])),n=await crypto.subtle.digest("SHA-256",r);return`${t.documentId}:${Array.from(new Uint8Array(n),o=>o.toString(16).padStart(2,"0")).join("")}`}var ja=class{constructor({translate:e,cache:r,onChange:n=()=>{},onModelChanged:o=()=>{},prefetchDelay:a=700,requestTimeout:i=12e4}){this.translate=e,this.cache=r,this.onChange=n,this.onModelChanged=o,this.prefetchDelay=a,this.requestTimeout=i,this.sources=new Map,this.entries=new Map,this.jobs=new Map,this.preparing=new Map,this.epoch=0,this.sequence=0,this.activePage=1,this.visibleIds=new Set,this.config={},this.disposed=!1}configure(e){if(this.disposed)return;let r={...e,glossary:$n(e.glossary)},n=JSON.stringify([r.documentId,r.model,r.glossary,jc]),o=n!==this.namespace;if(o){let a=this.config.documentId;this.epoch+=1,this.abortJobs(),a&&a!==r.documentId&&this.sources.clear(),this.entries.clear(),this.preparing.clear(),this.namespace=n,this.cacheIssue=""}if(this.config=r,(!r.enabled||!r.canTranslate)&&this.abortJobs(),r.prefetch===!1)for(let a of[...this.jobs.values()])a.page!==this.activePage&&this.abortJob(a);if(o)for(let[a,i]of this.sources)this.registerPage(a,i);this.emit(),this.pump()}setFocus(e,r=[]){if(!this.disposed){if(e!==this.activePage){this.activePage=e,this.prefetchAfter=Date.now()+this.prefetchDelay,clearTimeout(this.timer),this.timer=null;for(let n of[...this.jobs.values()])n.page!==e&&this.abortJob(n);for(let n of this.sources.keys())if(Math.abs(n-e)>3){this.sources.delete(n);for(let[o,a]of this.entries)a.page===n&&this.entries.delete(o)}}this.visibleIds=new Set(r),this.emit(),this.pump()}}registerPage(e,r){if(this.disposed)return;this.sources.set(e,r);let n=[];for(let[o,a]of(r.segments||[]).entries()){let i=a.id||`p${e}-s${o}`,s=`${e}:${i}`,l=this.entries.get(s);if(l?.src===a.src&&l.sourceNeedsReview===a.sourceNeedsReview)continue;let d={...a,id:i,uid:s,index:o,page:e,status:"checking",zh:"",cached:!1};this.entries.set(s,d),a.sourceNeedsReview?d.status="source-review":n.push(d)}if(n.length){let o=Symbol(),a=this.epoch;this.preparing.set(e,o),Promise.all(n.map(i=>this.prepare(i,a))).finally(()=>{this.preparing.get(e)===o&&(this.preparing.delete(e),this.pump())})}this.emit()}fresh(e,r){return!this.disposed&&r===this.epoch&&this.entries.get(e.uid)===e}async prepare(e,r){try{let n=e.src.replace(/\s/gu,"");if(n&&(n.match(/[\u3400-\u9fff]/gu)||[]).length/n.length>=.55){e.zh=e.src,e.status="done",e.passthrough=!0,this.emit();return}if(e.key=await Lp(this.config,e.src),!this.fresh(e,r))return;let o=e.key&&await this.cache?.get(e.key);if(!this.fresh(e,r))return;typeof o?.zh=="string"&&o.zh.trim()?(e.zh=o.zh,e.cached=!0,e.status="done"):e.status="queued"}catch{if(!this.fresh(e,r))return;e.status="queued",this.cacheIssue="\u672C\u5730\u7F13\u5B58\u6682\u4E0D\u53EF\u7528\uFF0C\u672C\u6B21\u8BD1\u6587\u4ECD\u53EF\u9605\u8BFB\u3002"}this.emit(),this.pump()}abortJob(e){clearTimeout(e.timeout),e.controller.abort(),this.jobs.delete(e.id);for(let r of e.entries)this.entries.get(r.uid)===r&&r.job===e.id&&(r.status="queued")}abortJobs(){clearTimeout(this.timer),this.timer=null;for(let e of[...this.jobs.values()])this.abortJob(e)}pump(){if(!(this.disposed||!this.config.enabled||!this.config.canTranslate||!this.config.documentId))for(;this.jobs.size<2;){let e=[...this.entries.values()].filter(d=>d.page===this.activePage),r=e.some(d=>d.status==="queued"||d.status==="checking"||d.status==="loading"),n=[...this.entries.values()].filter(d=>d.status==="queued"&&!this.preparing.has(d.page)&&(d.page===this.activePage||this.config.prefetch!==!1&&!r&&d.page===this.activePage+1)).sort((d,f)=>d.page-this.activePage-(f.page-this.activePage)||Number(this.visibleIds.has(f.id))-Number(this.visibleIds.has(d.id))||d.index-f.index);if(!n.length)return;let o=n[0];if(o.page!==this.activePage&&Date.now()<(this.prefetchAfter||0)){this.timer||(this.timer=setTimeout(()=>{this.timer=null,this.pump()},this.prefetchAfter-Date.now()));return}let a=[],i=0,s=e.some(d=>d.status==="done")?3:1;for(let d of n){if(d.page!==o.page||a.length>=s||i+d.src.length>3e3&&a.length)break;a.push(d),i+=d.src.length}let l={id:++this.sequence,epoch:this.epoch,controller:new AbortController,page:o.page,entries:a,config:this.config};this.jobs.set(l.id,l);for(let d of a)d.status="loading",d.job=l.id,d.error="";l.timeout=setTimeout(()=>{if(this.jobs.get(l.id)===l){this.abortJob(l);for(let d of a)this.fresh(d,l.epoch)&&(d.status="error",d.error="\u672C\u6BB5\u7FFB\u8BD1\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5\u6216\u7A0D\u540E\u7EE7\u7EED\u3002");this.emit(),this.pump()}},this.requestTimeout),this.emit(),this.run(l)}}async run(e){let r=n=>!e.controller.signal.aborted&&this.fresh(n,e.epoch)&&n.job===e.id;try{let n=this.sources.get(e.page)?.segments||[],o=e.entries.map(d=>Op(d.src,d.protectedTokens)),a=e.entries[0].index,i=n.slice(Math.max(0,a-1),a+e.entries.length+1);a===0&&i.unshift(this.sources.get(e.page-1)?.segments?.at(-1)),a+e.entries.length>=n.length&&i.push(this.sources.get(e.page+1)?.segments?.[0]);let s=i.filter(d=>d&&!d.sourceNeedsReview).map(d=>d.src).join(`
`).slice(0,1200),l=await this.translate(e.entries.map((d,f)=>({id:d.id,text:o[f].text})),{title:e.config.title,context:s,glossary:e.config.glossary,expectedModel:e.config.model,signal:e.controller.signal,includeMetadata:!0});if(l.model&&(l.model.provider!==e.config.model?.provider||l.model.model!==e.config.model?.model)||l.promptVersion&&l.promptVersion!==e.config.model?.promptVersion){let d=new Error("\u9ED8\u8BA4\u6A21\u578B\u5DF2\u53D8\u5316\uFF0C\u8BF7\u5237\u65B0\u7FFB\u8BD1\u670D\u52A1\u3002");throw d.code="MODEL_CHANGED",d}for(let[d,f]of e.entries.entries())if(r(f)){try{let g=l.translations?.[f.id];if(!g?.trim())throw new Error("\u672C\u6BB5\u6CA1\u6709\u8FD4\u56DE\u8BD1\u6587\uFF0C\u8BF7\u91CD\u8BD5\u3002");f.zh=o[d].restore(g),f.status="done",f.cached=!1,f.key&&Promise.resolve(this.cache?.put({key:f.key,bookId:e.config.documentId,zh:f.zh})).catch(()=>{r(f)&&(this.cacheIssue="\u8BD1\u6587\u5DF2\u5B8C\u6210\uFF0C\u4F46\u672C\u5730\u7F13\u5B58\u672A\u80FD\u4FDD\u5B58\u3002",this.emit())})}catch(g){f.status="error",f.error=g.message}this.emit()}}catch(n){for(let o of e.entries)r(o)&&(o.status="error",o.error=n.message||"\u672C\u6BB5\u7FFB\u8BD1\u5931\u8D25\u3002");!e.controller.signal.aborted&&e.epoch===this.epoch&&n.code==="MODEL_CHANGED"&&this.onModelChanged()}finally{clearTimeout(e.timeout),this.jobs.delete(e.id),this.disposed||(this.emit(),this.pump())}}retry(e,r){if(e===this.activePage)for(let n of[...this.jobs.values()])n.page!==e&&this.abortJob(n);for(let n of this.entries.values())if(n.page===e&&(r?n.id===r:n.status==="error")){if(n.status==="loading"||n.status==="checking"||n.sourceNeedsReview)continue;n.status="queued",n.error="",n.cached=!1}this.emit(),this.pump()}emit(){if(this.disposed)return;let e={};for(let r of this.entries.values())(e[r.page]||=[]).push({...r});for(let r of Object.values(e))r.sort((n,o)=>n.index-o.index);this.onChange({pages:e,cacheIssue:this.cacheIssue||""})}dispose(){this.disposed=!0,this.abortJobs(),this.sources.clear(),this.entries.clear()}};var Se=require("react/jsx-runtime");function Gc({page:t,source:e,rows:r=[],activeId:n,originRef:o,translation:a,onActivate:i,onClose:s}){let l=Ho.default.useRef(null),{preferences:d,updatePreferences:f,paused:g,setPaused:u,modelError:p,refreshModel:y,cacheIssue:E,retry:v}=a,[P,N]=Ho.default.useState(d.glossary||"");Ho.default.useEffect(()=>N(d.glossary||""),[d.glossary]);let w=r.filter(I=>I.status==="done").length,A=r.filter(I=>I.status==="error").length,C=r.filter(I=>I.cached).length,S=r.map(I=>I.status).join(",");Ho.default.useEffect(()=>{if(!d.linked||o.current!=="source")return;let I=l.current,b=[...I?.querySelectorAll("[data-translation-segment]")||[]].find(ee=>ee.dataset.translationSegment===n);if(!I||!b)return;let O=I.getBoundingClientRect(),D=b.getBoundingClientRect();(D.top<O.top+8||D.bottom>O.bottom-8)&&(I.scrollTop+=D.top-O.top-12)},[t,n,S,d.linked,d.fontSize]);let L=(I,b=!1)=>i(I,{origin:"translation",reveal:b});return(0,Se.jsxs)("aside",{className:"dshr-pdf-translation-panel","aria-label":"PDF \u4E2D\u6587\u5BF9\u7167",style:{"--dshr-translation-font-size":`${d.fontSize||16}px`},children:[(0,Se.jsxs)("header",{className:"dshr-pdf-translation-header",children:[(0,Se.jsxs)("div",{children:[(0,Se.jsx)("strong",{children:"\u4E2D\u6587\u5BF9\u7167"}),(0,Se.jsxs)("span",{children:["\u7B2C ",t," \u9875 \xB7 ",w,"/",r.length," \u6BB5",C?` \xB7 \u7F13\u5B58 ${C} \u6BB5`:""]})]}),(0,Se.jsx)("button",{type:"button","aria-label":"\u5173\u95ED\u8BD1\u6587\u4FA7\u680F",title:"\u5173\u95ED\u8BD1\u6587\u4FA7\u680F",onClick:s,children:"\xD7"})]}),(0,Se.jsxs)("div",{className:"dshr-pdf-translation-controls",children:[(0,Se.jsx)("button",{type:"button",onClick:()=>u(!g),children:g?"\u7EE7\u7EED\u7FFB\u8BD1":"\u6682\u505C\u7FFB\u8BD1"}),(0,Se.jsxs)("label",{children:[(0,Se.jsx)("input",{type:"checkbox",checked:d.linked!==!1,onChange:I=>f({linked:I.target.checked})}),"\u6BB5\u843D\u8054\u52A8"]}),(0,Se.jsx)("button",{type:"button","aria-label":"\u7F29\u5C0F\u8BD1\u6587\u5B57\u53F7",disabled:d.fontSize<=12,onClick:()=>f({fontSize:Math.max(12,d.fontSize-1)}),children:"A\u2212"}),(0,Se.jsx)("span",{className:"dshr-pdf-translation-font",children:d.fontSize||16}),(0,Se.jsx)("button",{type:"button","aria-label":"\u653E\u5927\u8BD1\u6587\u5B57\u53F7",disabled:d.fontSize>=24,onClick:()=>f({fontSize:Math.min(24,d.fontSize+1)}),children:"A\uFF0B"})]}),(0,Se.jsxs)("div",{className:"dshr-pdf-translation-options",children:[(0,Se.jsxs)("label",{children:[(0,Se.jsx)("input",{type:"checkbox",checked:!!d.showSource,onChange:I=>f({showSource:I.target.checked})}),"\u663E\u793A\u539F\u6587"]}),(0,Se.jsxs)("label",{children:[(0,Se.jsx)("input",{type:"checkbox",checked:d.prefetch!==!1,onChange:I=>f({prefetch:I.target.checked})}),"\u9884\u8BD1\u4E0B\u4E00\u9875"]})]}),(0,Se.jsxs)("details",{className:"dshr-pdf-glossary",children:[(0,Se.jsxs)("summary",{children:["\u6587\u6863\u672F\u8BED\u8868",d.glossary?" \xB7 \u5DF2\u542F\u7528":""]}),(0,Se.jsxs)("label",{children:["\u6BCF\u884C\u586B\u5199\u201C\u539F\u8BCD = \u4E2D\u6587\u8BD1\u6CD5\u201D",(0,Se.jsx)("textarea",{"aria-label":"\u6587\u6863\u672F\u8BED\u8868",maxLength:4e3,value:P,placeholder:`band gap = \u5E26\u9699
gate = \u6805\u6781`,onChange:I=>N(I.target.value)})]}),(0,Se.jsx)("button",{type:"button",disabled:$n(P)===d.glossary,onClick:()=>f({glossary:$n(P)}),children:"\u5E94\u7528\u5E76\u66F4\u65B0\u8BD1\u6587"})]}),p&&(!r.length||r.some(I=>I.status!=="done"))&&e?.segments.length!==0?(0,Se.jsxs)("div",{className:"dshr-pdf-translation-notice",role:"status",children:[p,(0,Se.jsx)("button",{type:"button",onClick:y,children:"\u5237\u65B0\u670D\u52A1"})]}):null,E?(0,Se.jsx)("div",{className:"dshr-pdf-translation-notice",role:"status",children:E}):null,g?(0,Se.jsx)("div",{className:"dshr-pdf-translation-notice",role:"status",children:"\u5DF2\u6682\u505C\uFF0C\u5DF2\u5B8C\u6210\u7684\u8BD1\u6587\u4ECD\u53EF\u9605\u8BFB\u3002"}):null,(0,Se.jsxs)("div",{className:"dshr-pdf-translation-list",ref:l,tabIndex:0,"aria-label":`\u7B2C ${t} \u9875\u8BD1\u6587`,onWheel:()=>{o.current="translation"},children:[e?e.segments.length===0?(0,Se.jsx)("p",{className:"dshr-pdf-translation-empty",children:"\u6B64\u9875\u6CA1\u6709\u53EF\u63D0\u53D6\u7684\u6587\u5B57\uFF0C\u53EF\u80FD\u662F\u626B\u63CF\u9875\u6216\u56FE\u7247\u9875\u3002"}):null:(0,Se.jsx)("p",{className:"dshr-pdf-translation-empty",children:"\u6B63\u5728\u63D0\u53D6\u5F53\u524D\u9875\u6BB5\u843D\u2026"}),(e?.segments||[]).map(I=>{let b=I.sourceNeedsReview?{status:"source-review"}:r.find(O=>O.id===I.id)||{status:"queued"};return(0,Se.jsxs)("article",{"data-translation-segment":I.id,"data-status":b.status,className:`dshr-pdf-translation-paragraph${n===I.id&&d.linked!==!1?" is-linked":""}`,onPointerEnter:()=>{d.linked!==!1&&L(I.id)},children:[(0,Se.jsxs)("div",{className:"dshr-pdf-translation-paragraph-head",children:[(0,Se.jsxs)("span",{children:["\u6BB5\u843D ",Number(I.id.split("-s").at(-1))+1,b.cached?" \xB7 \u7F13\u5B58":""]}),(0,Se.jsxs)("div",{children:[(0,Se.jsx)("button",{type:"button","aria-label":`\u5B9A\u4F4D\u6BB5\u843D ${I.id}`,onClick:()=>L(I.id,!0),children:"\u5B9A\u4F4D\u539F\u6587"}),b.status==="done"&&!b.passthrough?(0,Se.jsx)("button",{type:"button","aria-label":`\u91CD\u65B0\u7FFB\u8BD1\u6BB5\u843D ${I.id}`,onClick:()=>v(t,I.id),children:"\u91CD\u8BD1\u672C\u6BB5"}):null]})]}),d.showSource?(0,Se.jsx)("p",{className:"dshr-pdf-translation-original",children:I.src}):null,b.zh?(0,Se.jsx)("p",{className:"dshr-pdf-translation-result",children:b.zh}):null,b.status==="done"?null:b.status==="source-review"?(0,Se.jsx)("p",{className:"dshr-pdf-translation-waiting",role:"status",children:"\u672C\u6BB5\u542B\u65E0\u6CD5\u786E\u8BA4\u7684 PDF \u5B57\u7B26\u3002\u8BF7\u9009\u62E9\u201C\u5B9A\u4F4D\u539F\u6587\u201D\uFF0C\u5728\u9875\u9762\u56FE\u50CF\u4E0A\u6838\u5BF9\u3002"}):b.status==="error"?(0,Se.jsxs)("div",{className:"dshr-pdf-translation-segment-error",children:[(0,Se.jsx)("p",{children:b.error}),(0,Se.jsx)("button",{type:"button",onClick:()=>v(t,I.id),children:"\u91CD\u8BD5\u672C\u6BB5"})]}):(0,Se.jsx)("p",{className:"dshr-pdf-translation-waiting",role:"status",children:g?"\u7B49\u5F85\u7EE7\u7EED\u7FFB\u8BD1":b.status==="loading"?"\u6B63\u5728\u7FFB\u8BD1\u672C\u6BB5\u2026":b.status==="checking"?"\u6B63\u5728\u8BFB\u53D6\u5DF2\u6709\u8BD1\u6587\u2026":"\u7B49\u5F85\u7FFB\u8BD1\u2026"})]},I.id)})]}),(0,Se.jsxs)("footer",{className:"dshr-pdf-translation-footer",children:[(0,Se.jsx)("span",{children:"\u60AC\u505C\u5BF9\u7167\u6BB5\u843D\uFF0C\u70B9\u51FB\u201C\u5B9A\u4F4D\u539F\u6587\u201D\u8FD4\u56DE\u51FA\u5904\u3002"}),A?(0,Se.jsxs)("button",{type:"button",onClick:()=>v(t),children:["\u91CD\u8BD5\u5931\u8D25\u6BB5\u843D\uFF08",A,"\uFF09"]}):null]})]})}var kr=Rt(require("react"),1);var Ji={glossary:"",fontSize:16,prefetch:!0,showSource:!1,linked:!0};function qc({documentId:t,title:e,enabled:r,activePage:n,sources:o,visibleIds:a}){let[i,s]=kr.default.useState({documentId:"",pages:{},cacheIssue:""}),[l,d]=kr.default.useState({...Ji,documentId:""}),[f,g]=kr.default.useState(null),[u,p]=kr.default.useState(""),[y,E]=kr.default.useState(0),[v,P]=kr.default.useState(!1),N=kr.default.useRef(null);return kr.default.useEffect(()=>{if(!t)return;let w=!0;s({documentId:t,pages:{},cacheIssue:""}),P(!1);let A=new ja({translate:so,cache:{get:Yl,put:Zl},onChange:C=>{w&&s({documentId:t,...C})},onModelChanged:()=>{w&&E(C=>C+1)}});return N.current={documentId:t,controller:A},Ql(t).catch(()=>({})).then(C=>{w&&d({...Ji,...C,documentId:t,glossary:$n(C.glossary),fontSize:Math.max(12,Math.min(24,Number(C.fontSize)||16))})}),()=>{w=!1,A.dispose(),N.current?.controller===A&&(N.current=null)}},[t]),kr.default.useEffect(()=>{if(!t)return;let w=new AbortController;p(""),xc({signal:w.signal}).then(S=>{w.signal.aborted||(g({...S,documentId:t}),S.ready||p("\u7FFB\u8BD1\u6A21\u578B\u672A\u5C31\u7EEA\uFF0C\u8BF7\u5728 DSH \u8BBE\u7F6E\u4E2D\u9009\u62E9\u9ED8\u8BA4\u6A21\u578B\u3002"))}).catch(S=>{w.signal.aborted||(p(S.message||"\u7FFB\u8BD1\u670D\u52A1\u4E0D\u53EF\u7528\u3002"),g({documentId:t,ready:!1}))});let A=()=>{document.visibilityState==="visible"&&E(S=>S+1)},C=setInterval(A,6e4);return document.addEventListener("visibilitychange",A),()=>{w.abort(),clearInterval(C),document.removeEventListener("visibilitychange",A)}},[t,y]),kr.default.useEffect(()=>{let w=N.current;if(!(!w||w.documentId!==t||l.documentId!==t||f?.documentId!==t)){w.controller.configure({documentId:t,title:e,enabled:r&&!v,canTranslate:!!f.ready,model:{provider:f.provider||"",model:f.model||"",promptVersion:f.promptVersion||""},glossary:l.glossary,prefetch:l.prefetch}),w.controller.setFocus(n,a);for(let[A,C]of Object.entries(o))Math.abs(Number(A)-n)<=3&&w.controller.registerPage(Number(A),C)}},[t,e,r,v,l.glossary,l.prefetch,l.documentId,f,n,a,o]),kr.default.useEffect(()=>{t&&l.documentId===t&&Jl(t,l).catch(()=>{})},[t,l]),{...i.documentId===t?i:{pages:{},cacheIssue:""},preferences:l.documentId===t?l:Ji,paused:v,model:f?.documentId===t?f:null,modelError:u,setPaused:P,refreshModel:()=>E(w=>w+1),updatePreferences:w=>d(A=>({...A,...w})),retry:(w,A)=>N.current?.controller.retry(w,A)}}var Xc=Rt(require("react"),1);var Hn=require("react/jsx-runtime");function Ga(t){let e=Number(t);return Number.isFinite(e)?Math.min(1,Math.max(0,e)):0}function Dp(t,e){typeof t=="function"&&t(e)}function Vc({annotations:t,onOpenAnnotation:e,page:r}){let n=Xc.default.useRef(e);n.current=e;let o=Array.isArray(t)?t:[],a=[];for(let i=0;i<o.length;i+=1){let s=o[i];if(!s||!Array.isArray(s.rects)||s.rects.length===0||s.kind&&s.kind!=="pdf"||r!=null&&s.page!=null&&Number(s.page)!==Number(r))continue;let l=s.style==="underline"||s.style==="note"?s.style:"highlight",d=s.color||"#f5d76e",f=s.id==null?"":String(s.id),g=Da(`${f}|${s.createdAt||0}`),u=Oa(s.width),p=za(s),y=l==="note"||typeof s.note=="string"&&s.note.trim().length>0,E=null;for(let v=0;v<s.rects.length;v+=1){let P=s.rects[v];if(!P||typeof P!="object")continue;let N=Ga(P.x),w=Ga(P.y),A=Math.min(Ga(P.w),1-N),C=Math.min(Ga(P.h),1-w);if(!(A>.002)||!(C>.001))continue;E={x:N,y:w,width:A,height:C};let S=`${f}:${v}`;if(l==="underline")a.push((0,Hn.jsx)("svg",{className:"dshr-anno-pdf-underline",style:{left:`${N*100}%`,top:`calc(${(w+C)*100}% - 4px)`,width:`${A*100}%`,height:"5px","--dshr-anno-color":d},viewBox:"0 0 100 6",preserveAspectRatio:"none","data-anno-id":f,"aria-hidden":"true",focusable:"false",children:(0,Hn.jsx)("path",{d:Fa(g,100)})},`u:${S}`));else{let L=Math.max(C*u,.004),I=w+C*La(u);a.push((0,Hn.jsx)("span",{className:"dshr-anno-pdf-band",style:{left:`${N*100}%`,top:`${I*100}%`,width:`${A*100}%`,height:`${L*100}%`,"--dshr-anno-color":d},"data-anno-id":f,"aria-hidden":"true"},`b:${S}`))}}if(y&&E){let v=E.x+E.width,P=Math.min(Math.max(.005,v+.004),.972),N=Math.max(.004,E.y);a.push((0,Hn.jsx)("button",{type:"button",className:"dshr-anno-note-btn",style:{left:`${P*100}%`,top:`${N*100}%`,"--dshr-anno-color":d},"data-anno-id":f,title:p?`\u67E5\u770B\u6279\u6CE8\uFF1A${p}`:"\u67E5\u770B\u6279\u6CE8","aria-label":p?`\u67E5\u770B\u6279\u6CE8\uFF1A${p}`:"\u67E5\u770B\u6279\u6CE8",onMouseDown:w=>w.preventDefault(),onClick:()=>Dp(n.current,f),children:(0,Hn.jsx)(wn,{size:12})},`n:${f}`))}}return(0,Hn.jsx)("div",{className:"dshr-anno-pdf-layer","data-anno-layer":"pdf",children:a})}var ye=require("react/jsx-runtime"),rd=Uc+Wc;var{useCallback:Kc,useEffect:Dt,useLayoutEffect:es,useMemo:ts,useRef:Ee,useState:Ct}=Wo.default,as=612,is=792,rs=.1,ns=5,Yc=1.2,Fp=32,zp="1000px 0px",Bp=1e7,Zc=8192,$p=2,os=128,Hp=160,Up=600;function qr(t,e,r){return Math.min(r,Math.max(e,t))}function Wp(t){if(t.items.length<=os)return t;let e=0,r=!1;return new ReadableStream({async pull(n){if(await new Promise(a=>setTimeout(a,0)),r)return;let o=Math.min(e+os,t.items.length);n.enqueue({items:t.items.slice(e,o),styles:e===0?t.styles:void 0,lang:t.lang}),e=o,e===t.items.length&&n.close()},cancel(){r=!0}})}function qa(t,e,r,n,o=0){let a=t&&Number.isFinite(t.width)&&t.width>0?t.width:as,i=t&&Number.isFinite(t.height)&&t.height>0?t.height:is,s;if((e==="fit"||e==="page")&&n>0){if(s=Math.max(1,Math.floor(n)),e==="page"&&o>0){let f=Math.floor(a/i*Math.max(1,o-36));s=Math.max(1,Math.min(s,f))}}else s=Math.max(1,Math.floor(a*qr(r,rs,ns)));let l=s/a,d=Math.max(1,Math.floor(i*l));return{width:s,height:d,pageScale:l}}function Uo(t,e,r=Bp){let n=e&&Number.isFinite(e.width)&&e.width>0?e.width:as,o=e&&Number.isFinite(e.height)&&e.height>0?e.height:is,a=Math.min(Math.max(globalThis.devicePixelRatio||1,1),2),i=t*a,s=n*o*i*i;s>r&&(i*=Math.sqrt(r/s));let l=Math.max(n,o)*i;return l>Zc&&(i*=Zc/l),Math.max(Number.EPSILON,i)}function Qc(t){let e=t&&t.name;return e==="RenderingCancelledException"||e==="AbortException"||e==="AbortError"||e==="WorkerTaskCancelled"}function Jc(t){let e=t&&t.name,r=t&&t.message?String(t.message):String(t||"");return e==="PasswordException"?"\u8BE5 PDF \u5DF2\u52A0\u5BC6\uFF0C\u9700\u8981\u5BC6\u7801\u624D\u80FD\u6253\u5F00\u3002":e==="InvalidPDFException"?"\u6587\u4EF6\u4E0D\u662F\u6709\u6548\u7684 PDF\uFF0C\u6216\u8005\u5DF2\u7ECF\u635F\u574F\u3002":e==="MissingPDFException"?"\u6CA1\u6709\u627E\u5230 PDF \u6570\u636E\u3002":e==="UnexpectedResponseException"?`PDF \u6570\u636E\u8BFB\u53D6\u5931\u8D25${r?`\uFF1A${r}`:"\u3002"} `:/dynamically imported module|Importing a module script failed|Failed to fetch|error loading|Cannot find module/i.test(r)?"PDF \u5F15\u64CE\u52A0\u8F7D\u5931\u8D25\uFF08/dsh-reader-assets/pdf.bundle.js\uFF09\u3002\u8BF7\u786E\u8BA4 Host \u5DF2\u6B63\u786E\u63D0\u4F9B\u9759\u6001\u8D44\u6E90\u540E\u91CD\u8BD5\u3002":r?`PDF \u52A0\u8F7D\u5931\u8D25\uFF1A${r}`:"PDF \u52A0\u8F7D\u5931\u8D25\u3002"}function ed(t){if(!t)return null;let e=t.nodeType===1?t:t.parentElement;if(!e||typeof e.closest!="function")return null;let r=e.closest("[data-page]");if(!r)return null;let n=Number(r.getAttribute("data-page"));return Number.isFinite(n)?n:null}function jp(t){if(!t||t.rangeCount===0)return null;let e=t.getRangeAt(0),r=typeof e.getClientRects=="function"?e.getClientRects():null;if(!r||r.length===0){let s=e.getBoundingClientRect();return s&&(s.width||s.height)?s:null}if(r.length===1)return r[0];let n=1/0,o=1/0,a=-1/0,i=-1/0;for(let s=0;s<r.length;s+=1){let l=r[s];!l||!l.width&&!l.height||(n=Math.min(n,l.left),o=Math.min(o,l.top),a=Math.max(a,l.right),i=Math.max(i,l.bottom))}if(!Number.isFinite(n))return e.getBoundingClientRect();try{return new DOMRect(n,o,Math.max(0,a-n),Math.max(0,i-o))}catch{return e.getBoundingClientRect()}}function td(t){let e=Fp,r=t.querySelector(".dshr-pdf-content");if(r){let n=getComputedStyle(r),o=Number.parseFloat(n.paddingLeft)||0,a=Number.parseFloat(n.paddingRight)||0;e=o+a}return Math.max(120,t.clientWidth-e)}var Gp=Wo.default.memo(function({pageNumber:e,dim:r,mode:n,scale:o,viewportWidth:a,viewportHeight:i,rendered:s,active:l=!0,registerPageElement:d,registerFrameElement:f,annotations:g,onOpenAnnotation:u}){let p=qa(r,n,o,a,i),y=Wo.default.useCallback(v=>d(e,v),[e,d]),E=Wo.default.useCallback(v=>f(e,v),[e,f]);return(0,ye.jsx)("div",{className:"dshr-pdf-page","data-page":e,"data-active":l?"true":"false",style:l?void 0:{display:"none"},ref:y,children:(0,ye.jsx)("div",{className:"dshr-pdf-page-col",style:{width:`${p.width}px`},children:(0,ye.jsxs)("div",{className:"dshr-pdf-frame","data-page":e,"data-rendered":s?"true":"false",style:{width:`${p.width}px`,height:`${p.height}px`,"--total-scale-factor":String(p.pageScale)},ref:E,children:[(0,ye.jsx)("div",{className:"dshr-pdf-placeholder","aria-hidden":"true",children:e}),(0,ye.jsx)("canvas",{className:"dshr-pdf-canvas",width:1,height:1}),(0,ye.jsx)("div",{className:"dshr-pdf-text-layer"}),(0,ye.jsx)(Vc,{annotations:g,onOpenAnnotation:u}),(0,ye.jsx)("div",{className:"dshr-pdf-page-loading","aria-hidden":"true",children:(0,ye.jsx)("span",{className:"dshr-pdf-spinner"})})]})})})});function nd({data:t,documentId:e="",fileName:r="",renderImmersiveToolbar:n,renderTopbar:o,sidePanels:a,initialPage:i=1,autoTranslate:s=!1,pageTranslations:l,onReady:d,onPageChange:f,onPageText:g,onSelection:u,onRetryTranslation:p,annotations:y=[],onOpenAnnotation:E,focusAnnotation:v,hideTranslations:P=!1,paged:N=!1,onHideTranslations:w}){let A=Ee(null);A.current={autoTranslate:s,paged:N,onReady:d,onPageChange:f,onPageText:g,onSelection:u,onRetryTranslation:p,onOpenAnnotation:E};let C=Ee(null),S=Ee(null),L=Ee(new Map),I=Ee(new Map),b=Ee(new Map),O=Ee(new Map),D=Ee({width:as,height:is}),ee=Ee(new Map),$=Ee(new Set),re=Ee([]),ae=Ee(new Set),z=Ee(null),oe=Ee(null),H=Ee(null),q=Ee(new Ha),ne=Ee(0),F=Ee(!1),de=Ee("fit"),be=Ee(1),Ae=Ee(0),te=Ee(0),Me=Ee(!1),Oe=Ee(0),he=Ee(1),Xe=Ee(!!s),Le=Ee([]),vt=Ee(new Set),h=Ee(0),c=Ee(0),k=Ee(0),x=Ee(0),Y=Ee(null),se=Ee(0),ie=Ee(null),xe=Ee(!1),ke=Ee(""),Fe=Ee(0),Ce=Ee(!1),Ge=Ee(!1),Ue=Ee(!1),[ge,$e]=Ct("loading"),[Ve,ze]=Ct(null),[pt,st]=Ct(null),[ve,wt]=Ct(0),[hr,ur]=Ct({}),[Tt,zt]=Ct(null),[_t,rr]=Ct("fit"),[Et,pr]=Ct(1),[Q,pe]=Ct(0),[we,He]=Ct(0),[We,et]=Ct(!1),[Te,pn]=Ct(qr(Number.parseInt(i,10)||1,1,999999)),[nn,yr]=Ct({}),[nr,fn]=Ct(""),[gn,Pt]=Ct(!1),[gt,Jn]=Ct(0),[Bt,Ut]=Ct({}),[on,or]=Ct([]),[Mr,En]=Ct(null),[eo,An]=Ct(!1),mn=Ee(null),ue=Ee("source"),_=s&&!P&&!eo,W=qc({documentId:e,title:r,enabled:_,activePage:Te,sources:Bt,visibleIds:on}),ce=Ee(!1);ce.current=_;let tt=Ee(!1);tt.current=_&&W.preferences.linked!==!1,mn.current=Mr;let Ke=ts(()=>{let m=new Ua(ve,qa(Tt,We?"page":_t,Et,Q,we).height);for(let[R,B]of Object.entries(hr))m.setHeight(Number(R),qa(B,We?"page":_t,Et,Q,we).height);return m.paddingTop=Y.current?.paddingTop??18,m},[ve,Tt,hr,We,_t,Et,Q,we]);Y.current=Ke,es(()=>{let m=ie.current;ie.current=null,m&&m.revision===se.current&&!N&&ki(m.anchor)},[Ke,N]),Dt(()=>{s&&!P&&An(!1)},[s,P]);function lt(m,R){ee.current.set(m,R),Ut(B=>B[m]===R?B:Object.fromEntries(Object.entries({...B,[m]:R}).filter(([V])=>Math.abs(Number(V)-he.current)<=3)))}function Ot(m,R){return[...m?.querySelectorAll("[data-pdf-segments]")||[]].filter(B=>B.dataset.pdfSegments.split("|").includes(R))}function Wt(m,{origin:R="source",reveal:B=!1}={},V=he.current){if(ue.current=R,En(at=>at?.page===V&&at.id===m?at:{page:V,id:m}),R==="source"&&V!==he.current&&gr(V),!B)return;let le=S.current,J=Ot(I.current.get(V),m)[0];if(!le||!J)return;let Ie=J.getBoundingClientRect(),rt=le.getBoundingClientRect();(Ie.top<rt.top+12||Ie.bottom>rt.bottom-12)&&le.scrollTo({top:Math.max(0,le.scrollTop+Ie.top-rt.top-28),behavior:"auto"})}function fr(){if(!ce.current)return;let m=S.current,R=I.current.get(he.current);if(!m||!R)return;let B=m.getBoundingClientRect(),V=new Set;for(let Ie of R.querySelectorAll("[data-pdf-segments]")){let rt=Ie.getBoundingClientRect();if(rt.bottom>B.top+4&&rt.top<B.bottom-4)for(let at of Ie.dataset.pdfSegments.split("|"))V.add(at)}let le=[...V];or(Ie=>Ie.join("|")===le.join("|")?Ie:le);let J=mn.current;le.length&&(!J||J.page!==he.current||!V.has(J.id)&&ue.current==="source")&&Wt(le[0])}Dt(()=>{for(let m of I.current.values())for(let R of m.querySelectorAll("[data-pdf-segments]"))tt.current&&Number(m.dataset.page)===Mr?.page&&R.dataset.pdfSegments.split("|").includes(Mr.id)?R.dataset.pdfLinked="true":delete R.dataset.pdfLinked},[Mr,nn,Bt,_,W.preferences.linked]),Dt(()=>{if(ge!=="ready")return;let m=requestAnimationFrame(fr);return()=>cancelAnimationFrame(m)},[Te,ge,Bt,_]),Dt(()=>{if(!e||!_||W.paused||W.preferences.prefetch===!1||ge!=="ready"||!nn[Te]||Te>=ve)return;let m=!1,R=ne.current,B=Te+1,V=setTimeout(async()=>{if(!(h.current>0))try{let le=await oe.current?.getPage(B);if(!le||m)return;let J=await le.getTextContent();if(m||R!==ne.current)return;lt(B,Qi(J.items,B,le.getViewport({scale:1}).width))}catch{}},850);return()=>{m=!0,clearTimeout(V)}},[e,Te,ve,ge,_,W.paused,W.preferences.prefetch,nn]),Xe.current=!!s,de.current=_t,be.current=Et,Ae.current=Q,te.current=we,Me.current=We,Oe.current=ve,Tt&&(D.current=Tt);function ar(m){let R=O.current.get(m);return R||D.current}function mt(m){return qa(ar(m),Me.current?"page":de.current,be.current,Ae.current,te.current)}function an(m){return mt(m).pageScale}function Nn(m){let R=b.current.get(m);return R||(R={page:null,token:0,wantRender:!1,rendered:!1,rendering:!1,renderTask:null,textLayer:null,textContent:null,grouped:null,lastRenderScale:null,lastRasterScale:0,textLayerReady:!1},b.current.set(m,R)),R}function Cn(m,R){yr(B=>{if(R)return B[m]?B:{...B,[m]:!0};if(!B[m])return B;let V={...B};return delete V[m],V})}function _i(m,R,B){if(!(R>0)||!(B>0))return!1;let V=O.current.get(m);return V&&Math.abs(V.width-R)<.05&&Math.abs(V.height-B)<.05?!1:(!ie.current&&!A.current?.paged&&(ie.current={anchor:bn(),revision:se.current}),O.current.set(m,{width:R,height:B}),ur(le=>({...le,[m]:{width:R,height:B}})),sn(),!0)}function to(){if(A.current?.paged)return;let m=S.current;if(!m)return;let R=m.querySelector(".dshr-pdf-content");R&&Y.current&&(Y.current.paddingTop=Number.parseFloat(getComputedStyle(R).paddingTop)||0)}function sn(){k.current||(k.current=requestAnimationFrame(()=>{k.current=0,to()}))}function gr(m){if(!Number.isFinite(m)||m===he.current||(A.current?.paged&&b.current.get(he.current)?.textLayer?.cancel(),he.current=m,pn(m),ue.current="source",!Ue.current))return;let R=A.current&&A.current.onPageChange;R&&R(m)}function ha(){if(A.current?.paged||!Ue.current)return;let m=S.current;if(!m)return;let R=Y.current;if(!R?.count)return;let B=m.scrollTop+qr(m.clientHeight*.28,48,240);gr(R.pageAt(B))}function bn(){if(A.current?.paged||!S.current||!Y.current?.count)return null;let m=S.current.scrollTop,R=Y.current.entryAt(m+1);return{page:R.page,ratio:qr((m-R.top)/R.height,0,1)}}function ki(m){!m||A.current?.paged||!S.current||!Y.current?.count||(S.current.scrollTop=Math.max(0,Y.current.top(m.page)+m.ratio*Y.current.height(m.page)))}function So(m){requestAnimationFrame(()=>{requestAnimationFrame(()=>{F.current||m()})})}function xn(m){if(!Xe.current||ae.current.has(m))return;let R=ee.current.get(m);if(!R||(ae.current.add(m),!R.text))return;let B=A.current&&A.current.onPageText;B&&B(m,{text:R.text,segments:R.segments.map(V=>({src:V.src}))})}function Ti(){$.current.forEach(m=>xn(m))}function ir(m,R,B){return!F.current&&B===ne.current&&R===m.token&&m.wantRender}async function Si(m){let R=oe.current,B=z.current,V=I.current.get(m);if(!R||!B||!V)return;let le=ne.current,J=Nn(m),Ie=J.token+=1;if(J.renderTask){try{J.renderTask.cancel()}catch{}J.renderTask=null}if(J.textLayer){try{J.textLayer.cancel()}catch{}J.textLayer=null}let rt=V.querySelector("canvas.dshr-pdf-canvas"),at=V.querySelector(".dshr-pdf-text-layer");if(!(!rt||!at)){J.rendering=!0,J.renderFailed=!1;try{let qe=J.page;if(!qe){if(qe=await R.getPage(m),!ir(J,Ie,le))return;J.page=qe}let bt=qe.getViewport({scale:1}),kt=ar(m);(Math.abs(bt.width-kt.width)>.05||Math.abs(bt.height-kt.height)>.05)&&_i(m,bt.width,bt.height);let ft=mt(m),Co=ar(m),Io=()=>A.current?.paged?m===he.current:$.current.has(m),Ci=Uo(ft.pageScale,Co),Rn=!J.rendered&&q.current.get(m);Rn&&(rt.width=Rn.bitmap.width,rt.height=Rn.bitmap.height,rt.getContext("2d",{alpha:!1}).drawImage(Rn.bitmap,0,0),J.rendered=!0,J.lastRenderScale=Rn.scale,J.lastRasterScale=Rn.rasterScale,V.dataset.pdfQuality=Rn.rasterScale>=Ci-.002?"full":"preview",C.current&&(C.current.dataset.pdfCacheHits=String((Number(C.current.dataset.pdfCacheHits)||0)+1)),Cn(m,!0));let Cu=J.lastRenderScale===null||Math.abs(J.lastRenderScale-ft.pageScale)>=.002,Ro=Io()?Ci:Math.min(Uo(ft.pageScale,Co,2e6),ft.pageScale);if(!J.rendered||Cu||J.lastRasterScale<Ro-.002){let mr=Math.min(Ro,ft.pageScale),fa=!J.rendered&&mr<Ro-.002?[mr,Ro]:[Ro];for(let Mn=0;Mn<fa.length;Mn++){if(Mn&&(await new Promise(wr=>setTimeout(wr,32)),!ir(J,Ie,le)||!Io()))return;let Ur=fa[Mn],vn=qe.getViewport({scale:Ur}),Pr=document.createElement("canvas");Pr.width=Math.max(1,Math.floor(vn.width)),Pr.height=Math.max(1,Math.floor(vn.height));try{let wr=qe.render({canvas:Pr,viewport:vn,intent:"display",background:"#ffffff"});wr.onContinue=Gt=>setTimeout(()=>{ir(J,Ie,le)?Gt():wr.cancel()},Io()?0:16),J.renderTask=wr;try{await wr.promise}finally{J.renderTask===wr&&(J.renderTask=null)}if(!ir(J,Ie,le))return;if(C.current){let Gt=wr.isWorkerRendering?"pdfWorkerRenders":"pdfMainRenders";C.current.dataset[Gt]=String((Number(C.current.dataset[Gt])||0)+1),C.current.dataset.pdfRenderer=wr.isWorkerRendering?"worker":"main"}rt.width=Pr.width,rt.height=Pr.height;let ga=rt.getContext("2d",{alpha:!1});if(!ga)throw new Error("\u65E0\u6CD5\u521B\u5EFA PDF \u753B\u5E03\u4E0A\u4E0B\u6587");if(ga.drawImage(Pr,0,0),J.lastRenderScale=ft.pageScale,J.lastRasterScale=Ur,J.rendered=!0,V.dataset.pdfQuality=Ur>=Ci-.002?"full":"preview",Cn(m,!0),typeof createImageBitmap=="function")try{let Gt=await createImageBitmap(Pr);if(!ir(J,Ie,le)){Gt.close();return}q.current.set(m,{bitmap:Gt,scale:ft.pageScale,rasterScale:Ur}),C.current&&(C.current.dataset.pdfCacheBytes=String(q.current.bytes))}catch{}}finally{Pr.width=0,Pr.height=0}}}if(A.current?.paged?m!==he.current:!$.current.has(m))return;try{let mr=J.textContent;if(!mr){if(mr=await qe.getTextContent(),!ir(J,Ie,le))return;J.textContent=mr}if(!Io())return;J.grouped||(J.grouped=Qi(mr.items,m,bt.width),lt(m,J.grouped));let fa=qe.getViewport({scale:ft.pageScale}),Mn=mr.items.length>os,Ur=Mn?at.cloneNode(!1):at;Ur.replaceChildren();let vn=new B.TextLayer({textContentSource:Wp(mr),container:Ur,viewport:fa});J.textLayer=vn;try{await vn.render()}finally{J.textLayer===vn&&(J.textLayer=null)}if(!ir(J,Ie,le)||!Io())return;if(Mn){let Gt=document.createDocumentFragment();for(;Ur.firstChild;)Gt.append(Ur.firstChild);at.style.cssText=Ur.style.cssText,at.replaceChildren(Gt)}J.textLayerReady=!0;let Pr=vn.textDivs||[],wr=new Map,ga=0;mr.items.forEach((Gt,Ii)=>{typeof Gt.str=="string"&&wr.set(Ii,Pr[ga++])});for(let Gt of J.grouped.segments)for(let Ii of Gt.itemIndices||[]){let Mo=wr.get(Ii);if(!Mo)continue;let ma=new Set((Mo.dataset.pdfSegments||"").split("|").filter(Boolean));ma.add(Gt.id),Mo.dataset.pdfSegments=[...ma].join("|"),Mo.dataset.pdfSegment=[...ma][0],tt.current&&mn.current?.page===m&&ma.has(mn.current.id)&&(Mo.dataset.pdfLinked="true")}fr()}catch(mr){Qc(mr)||console.warn("[dsh-reader] PDF \u6587\u672C\u5C42\u6E32\u67D3\u5931\u8D25",mr)}if(!ir(J,Ie,le))return;$.current.has(m)&&xn(m)}catch(qe){Qc(qe)||(J.renderFailed=!0,console.warn(`[dsh-reader] \u7B2C ${m} \u9875\u6E32\u67D3\u5931\u8D25`,qe))}finally{J.rendering=!1}}}function ua(){if(!F.current)for(;h.current<$p&&Le.current.length>0;){Le.current.sort((Ie,rt)=>Math.abs(Ie.pageNumber-he.current)-Math.abs(rt.pageNumber-he.current));let m=Le.current[0],R=b.current.get(he.current);if(m.pageNumber!==he.current&&(!R?.rendered||R.rendering))break;let B=Le.current.shift();vt.current.delete(B.pageNumber);let V=b.current.get(B.pageNumber);if(!V||!V.wantRender||V.rendering||!I.current.has(B.pageNumber))continue;h.current+=1;let le=ne.current,J=V.token+1;Si(B.pageNumber).catch(()=>{}).finally(()=>{if(le===ne.current){if(h.current=Math.max(0,h.current-1),V.wantRender&&I.current.has(B.pageNumber)){let Ie=mt(B.pageNumber),at=(A.current?.paged?B.pageNumber===he.current:$.current.has(B.pageNumber))&&V.rendered&&!V.renderFailed&&V.lastRasterScale<Uo(Ie.pageScale,ar(B.pageNumber))-.002;(V.token!==J||at||V.rendered&&Math.abs((V.lastRenderScale||0)-Ie.pageScale)>.002)&&In(B.pageNumber,{front:!0})}ua()}})}}function In(m,{front:R=!1}={}){if(!I.current.has(m))return;let B=Nn(m);if(B.wantRender=!0,R&&m===he.current&&!B.rendered)for(let[le,J]of b.current)le!==m&&J.renderTask&&!$.current.has(le)&&(J.token++,J.renderTask.cancel());if(B.rendering)return;if(vt.current.has(m)){R&&Le.current.sort((le,J)=>(J.pageNumber===m)-(le.pageNumber===m));return}if(B.rendered&&B.lastRenderScale!==null){let le=mt(m);if((B.textLayerReady||(A.current?.paged?m!==he.current:!$.current.has(m)))&&Math.abs(B.lastRenderScale-le.pageScale)<.002&&B.lastRasterScale>=(m===he.current?Uo(le.pageScale,ar(m)):Math.min(Uo(le.pageScale,ar(m),2e6),le.pageScale))-.002)return}vt.current.add(m);let V={pageNumber:m};R?Le.current.unshift(V):Le.current.push(V),ua()}function Eo(m){let R=b.current.get(m);if(!R)return;if(R.wantRender=!1,R.token+=1,R.renderTask){try{R.renderTask.cancel()}catch{}R.renderTask=null}if(R.textLayer){try{R.textLayer.cancel()}catch{}R.textLayer=null}let B=I.current.get(m);if(B){let V=B.querySelector("canvas.dshr-pdf-canvas");V&&(V.width=0,V.height=0);let le=B.querySelector(".dshr-pdf-text-layer");le&&le.replaceChildren()}if(R.page){try{R.page.cleanup()}catch{}R.page=null}R.textContent=null,R.grouped=null,ee.current.delete(m),R.lastRenderScale=null,R.lastRasterScale=0,R.textLayerReady=!1,R.rendered&&(R.rendered=!1,Cn(m,!1)),Le.current.length>0&&(Le.current=Le.current.filter(V=>V.pageNumber!==m)),vt.current.delete(m),b.current.delete(m)}function pa(){for(let[m,R]of b.current){if(!R.rendered||!R.wantRender||R.rendering)continue;let B=mt(m);(!R.textLayerReady||R.lastRenderScale===null||Math.abs(R.lastRenderScale-B.pageScale)>.002)&&In(m)}}function Ao(m=Hp){c.current&&clearTimeout(c.current),c.current=setTimeout(()=>{c.current=0,pa()},m)}function T(m){se.current++,ie.current=null,m=qr(Math.round(Number(m)||1),1,Oe.current||1);let R=S.current;if(A.current?.paged){gr(m);return}if(!R||!Y.current?.count){gr(m);return}let B=Y.current.top(m)-10;typeof R.scrollTo=="function"?R.scrollTo({top:Math.max(0,B),behavior:"auto"}):R.scrollTop=Math.max(0,B),gr(m)}function M(m){let R=S.current;R&&R.scrollBy({top:m*R.clientHeight*.92,behavior:"auto"})}function Z(m){!m||A.current?.paged||(ie.current={anchor:m,revision:se.current})}function Ye(m){let R=bn(),B=de.current==="fit"?an(he.current):be.current,V=qr(B*m,rs,ns);Me.current=!1,et(!1),de.current="custom",be.current=V,rr("custom"),pr(V),Z(R)}function Ne(){let m=bn();Me.current=!1,et(!1),de.current="fit",rr("fit"),Z(m)}function Qe(){let m=bn(),R=!Me.current;Me.current=R,et(R),de.current="fit",rr("fit"),Z(m),sn()}function ct(){T(Math.max(1,he.current-1),"smooth")}Dt(()=>{let m=S.current;if(!m||ge!=="ready")return;let R=B=>{(Number(B.detail)||1)>0?jt():ct()};return m.addEventListener("dshr-pdf-page-turn",R),()=>m.removeEventListener("dshr-pdf-page-turn",R)},[ge,ve,Te]);function jt(){T(Math.min(Oe.current||1,he.current+1),"smooth")}function sr(m,R){let B=ee.current.get(m);if(!B||!B.text)return;let V=B.text,le=R.replace(/\s+/g," ").trim(),J=le?V.indexOf(le):-1,Ie=Up,rt=0;if(J>=0){let bt=Math.max(80,Math.floor((Ie-Math.min(le.length,Ie-160))/2));rt=Math.max(0,J-bt)}let at=Math.min(V.length,rt+Ie);return at-rt<Ie&&(rt=Math.max(0,at-Ie)),V.slice(rt,at).trim()||void 0}function Ze(){if(ke.current="",!xe.current)return;xe.current=!1;let m=A.current&&A.current.onSelection;m&&m(null)}function ro(){let m=globalThis.getSelection?globalThis.getSelection():null;if(!m||m.isCollapsed||m.rangeCount===0){Ze();return}let B=C.current;if(!B)return;let V=m.getRangeAt(0);if(!B.querySelector(".dshr-pdf-content")?.contains(V.commonAncestorContainer)){Ze();return}let le=m.toString().replace(/\s+/g," ").trim();if(!le){Ze();return}let J=ed(V.startContainer)||ed(V.endContainer)||he.current,Ie=jp(m);if(!Ie)return;let rt=[J,le,Math.round(Ie.left),Math.round(Ie.top),Math.round(Ie.width),Math.round(Ie.height)].join("|");if(rt===ke.current)return;ke.current=rt;let at={text:le,page:J,rect:Ie},qe=I.current.get(J);if(qe){let ft=Nc(V,qe);ft.length>0&&(at.pageRects=ft)}let bt=sr(J,le);bt&&(at.context=bt),xe.current=!0;let kt=A.current&&A.current.onSelection;kt&&kt(at)}let gu=Kc((m,R)=>{R?L.current.set(m,R):L.current.delete(m)},[]),mu=Kc((m,R)=>{if(R){I.current.set(m,R);for(let V of re.current)V.observe(R);let B=b.current.get(m);B&&(B.rendered=!1,B.textLayerReady=!1,B.lastRenderScale=null,Cn(m,!1))}else{let B=I.current.get(m);if(B)for(let V of re.current)V.unobserve(B);$.current.delete(m),Eo(m),I.current.delete(m)}},[]);function bu(m){let R=m.target;if(R&&typeof R.closest=="function"&&R.closest('button, a, input, textarea, select, [role="button"]'))return;let B=C.current;B&&typeof B.focus=="function"&&B.focus({preventScroll:!0})}function xu(m){if(m.defaultPrevented||m.altKey||A.current?.paged)return;let R=m.target;if(R?.closest?.(".dshr-pdf-translation-panel, .dshr-topbar--pdf, .dshr-immersive-controls, .dshr-ai, .dshr-anno-panel"))return;let B=R&&R.tagName?R.tagName.toLowerCase():"";if(B==="input"||B==="textarea"||B==="select"||R&&R.isContentEditable)return;let V=S.current;if(!(!V||ge!=="ready"))switch(m.key){case"PageDown":m.preventDefault(),M(1);break;case"PageUp":m.preventDefault(),M(-1);break;case"Home":m.preventDefault(),V.scrollTo({top:0,behavior:"auto"}),gr(1);break;case"End":m.preventDefault(),V.scrollTo({top:V.scrollHeight,behavior:"auto"}),gr(Oe.current||1);break;default:break}}function ul(){for(let m of b.current.values()){if(m.token+=1,m.renderTask)try{m.renderTask.cancel()}catch{}if(m.textLayer)try{m.textLayer.cancel()}catch{}if(m.page)try{m.page.cleanup()}catch{}}b.current.clear()}Dt(()=>{let m=!1,R=new AbortController,B;if(ne.current+=1,F.current=!1,H.current?.close(),H.current=null,oe.current=null,q.current.clear(),C.current){for(let le of["pdfReadBytes","pdfSourceBytes","pdfRangeReads","pdfCacheHits","pdfCacheBytes","pdfWorkerRenders","pdfMainRenders"])C.current.dataset[le]="0";delete C.current.dataset.pdfRenderer}ul(),L.current.clear(),I.current.clear(),O.current.clear(),ee.current.clear(),$.current.clear(),ae.current.clear(),Le.current=[],vt.current.clear(),h.current=0,ie.current=null,se.current++,Ge.current=!1,$e("loading"),ze(null),st(null),wt(0),ur({}),zt(null),yr({}),fn(""),Pt(!1),pn(1),Ut({}),En(null),or([]),he.current=0,Ue.current=!1;let V=typeof Blob<"u"&&t instanceof Blob;if(!V&&!(t instanceof ArrayBuffer)&&!ArrayBuffer.isView(t)||(V?t.size===0:t.byteLength===0)){$e("error"),ze("\u6CA1\u6709\u53EF\u663E\u793A\u7684 PDF \u6570\u636E\u3002");return}return(async()=>{try{if(B=await $a(t,{signal:R.signal,onRead:ft=>{!m&&C.current&&(C.current.dataset.pdfReadBytes=String(ft.bytes),C.current.dataset.pdfSourceBytes=String(ft.total),C.current.dataset.pdfRangeReads=String(ft.reads))},onProgress:ft=>{!m&&ft?.total>0&&st(Math.max(1,Math.min(100,Math.round(ft.loaded/ft.total*100))))},onError:ft=>{m||($e("error"),ze(Jc(ft)))}}),m){B.close();return}H.current=B;let{engine:le,pdf:J}=B;z.current=le,oe.current=J;let Ie=await J.getPage(1);if(m)return;let rt=Ie.getViewport({scale:1}),at={width:rt.width,height:rt.height};D.current=at;try{Ie.cleanup()}catch{}let qe=qr(Number.parseInt(i,10)||1,1,J.numPages),bt=null;if(qe!==1)try{let ft=await J.getPage(qe),Co=ft.getViewport({scale:1});bt={width:Co.width,height:Co.height},O.current.set(qe,bt),ft.cleanup()}catch{}if(m)return;zt(at),ur(bt?{[qe]:bt}:{}),wt(J.numPages),Oe.current=J.numPages,st(null),$e("ready"),pn(qe),he.current=qe;let kt=A.current&&A.current.onReady;kt&&kt({pageCount:J.numPages})}catch(le){if(m)return;B?.close(),H.current=null,oe.current=null,st(null),$e("error"),ze(Jc(le))}})(),()=>{if(m=!0,R.abort(),F.current=!0,ne.current+=1,ul(),B?.close(),H.current=null,oe.current=null,q.current.clear(),Le.current=[],vt.current.clear(),c.current&&(clearTimeout(c.current),c.current=0),k.current&&(cancelAnimationFrame(k.current),k.current=0),x.current&&(cancelAnimationFrame(x.current),x.current=0),xe.current){xe.current=!1;let le=A.current&&A.current.onSelection;le&&le(null)}}},[t,gt]),Dt(()=>{let m=()=>ro(),R=()=>ro(),B=()=>{Fe.current||(Fe.current=requestAnimationFrame(()=>{Fe.current=0;let V=globalThis.getSelection?globalThis.getSelection():null;(!V||V.isCollapsed||V.rangeCount===0)&&Ze()}))};return document.addEventListener("mouseup",m,!0),document.addEventListener("keyup",R,!0),document.addEventListener("selectionchange",B),()=>{document.removeEventListener("mouseup",m,!0),document.removeEventListener("keyup",R,!0),document.removeEventListener("selectionchange",B),Fe.current&&(cancelAnimationFrame(Fe.current),Fe.current=0)}},[]),es(()=>{if(ge!=="ready")return;let m=S.current;if(!m)return;let R=td(m);R>0&&(Ae.current=R,pe(R)),m.clientHeight>0&&(te.current=m.clientHeight,He(m.clientHeight))},[ge,ve]),Dt(()=>{N&&et(!0)},[N]),Dt(()=>{if(!N)return;let m=S.current;m&&(m.scrollTop=0)},[N]),Dt(()=>{if(!N||ge!=="ready"||ve<=0)return;$.current=new Set([Te]),xn(Te);let m=[Te];for(let V=1;V<=2;V+=1)m.push(Te+V,Te-V);let B=m.filter((V,le,J)=>V>=1&&V<=ve&&J.indexOf(V)===le).map((V,le)=>window.setTimeout(()=>In(V,{front:le===0}),le===0?0:le===1?30:1e3+(le-2)*120));return()=>{for(let V of B)window.clearTimeout(V)}},[N,ge,Te,ve,We,_t,Et,Q,we]),Dt(()=>{if(!N||ge!=="ready")return;let m=S.current;m&&m.dispatchEvent(new CustomEvent("dshr-pdf-page-state",{detail:{page:Te,pages:ve}}))},[N,ge,Te,ve]),Dt(()=>{ge==="ready"&&(sn(),Ao())},[We,we,ge]),Dt(()=>{if(ge!=="ready")return;let m=S.current;if(!m)return;let R=!1,B=null,V=null,le=()=>{let at=td(m),qe=m.clientHeight,bt=at>0&&Math.abs(at-Ae.current)>=.5,kt=qe>0&&Math.abs(qe-te.current)>=.5;if(!bt&&!kt)return;let ft=bt||kt&&Me.current?bn():null;bt&&(Ae.current=at,pe(at)),kt&&(te.current=qe,He(qe)),ft&&!A.current?.paged&&Z(ft)},J=()=>{x.current||(se.current++,ie.current=null,x.current=requestAnimationFrame(()=>{x.current=0,ha(),fr()}))},Ie=null;typeof ResizeObserver=="function"&&(Ie=new ResizeObserver(()=>{R||le()}),Ie.observe(m)),m.addEventListener("scroll",J,{passive:!0}),!N&&typeof IntersectionObserver=="function"&&(B=new IntersectionObserver(qe=>{for(let bt of qe){let kt=Number(bt.target.getAttribute("data-page"));Number.isFinite(kt)&&(bt.isIntersecting?($.current.add(kt),In(kt,{front:!0}),xn(kt)):$.current.delete(kt))}},{root:m,rootMargin:"0px",threshold:0}),V=new IntersectionObserver(qe=>{for(let bt of qe){let kt=Number(bt.target.getAttribute("data-page"));Number.isFinite(kt)&&(bt.isIntersecting?In(kt):A.current?.paged||Eo(kt))}},{root:m,rootMargin:zp,threshold:0}),re.current=[B,V],So(()=>{if(!R)for(let qe of I.current.values())B.observe(qe),V.observe(qe)}));let rt=requestAnimationFrame(()=>{R||(to(),ha())});return()=>{R=!0,cancelAnimationFrame(rt),Ie&&Ie.disconnect(),B&&B.disconnect(),V&&V.disconnect(),re.current=[],m.removeEventListener("scroll",J)}},[ge,ve,N]),Dt(()=>{if(ge!=="ready"||ve<=0||Ge.current)return;Ge.current=!0;let m=qr(Number.parseInt(i,10)||1,1,ve),R=setTimeout(()=>{Ue.current=!0,S.current&&(to(),T(m,"auto"))},0);return()=>clearTimeout(R)},[ge,ve]);let pl=Ee(N);es(()=>{pl.current!==N&&(pl.current=N,ge==="ready"&&(N?S.current.scrollTop=0:T(he.current,"auto")))},[N,ge]),Dt(()=>{ge==="ready"&&(sn(),Ao())},[ge,_t,Et,Q,hr]),Dt(()=>{ge==="ready"&&sn()},[ge,P]),Dt(()=>{Xe.current=!!s,s&&ge==="ready"&&Ti()},[s,ge]);let Ei=ts(()=>{if(ve<=0)return[];let m=N?2:Math.min(16,Math.max(3,Math.ceil(we/Math.max(1,Math.min(Ke.defaultHeight,...Ke.heights.values())))+1)),R=Math.max(1,Te-m),B=Math.min(ve,Te+m);return Array.from({length:B-R+1},(V,le)=>R+le)},[N,Te,ve,Ke,we]),fl=Ei[0]||1,gl=Ei.at(-1)||0,vu=ts(()=>{let m=new Map;for(let R of y||[]){if(!R||R.kind!=="pdf"||!Number.isFinite(R.page))continue;let B=m.get(R.page)||[];B.push(R),m.set(R.page,B)}return m},[y]);Dt(()=>{if(!v?.page||ge!=="ready")return;let m=setTimeout(()=>{T(qr(Number(v.page)||1,1,Oe.current||1),"smooth")},80);return()=>clearTimeout(m)},[v,ge]);let yu=(_t==="fit"?an(Te):Et)<ns-.001,wu=(_t==="fit"?an(Te):Et)>rs+.001;function _u(m){let R=m.currentTarget;fn(String(Te)),Pt(!0),requestAnimationFrame(()=>{R&&typeof R.select=="function"&&R.select()})}function ku(m){let R=m.target.value.replace(/[^\d]/g,"").slice(0,6);fn(R)}function Tu(){if(Ce.current){Ce.current=!1,Pt(!1);return}let m=Number.parseInt(nr,10);Number.isFinite(m)&&Oe.current>0&&T(qr(m,1,Oe.current),"auto"),Pt(!1)}function Su(){gn&&Tu()}function Eu(m){m.key==="Enter"?(m.preventDefault(),m.currentTarget.blur()):m.key==="Escape"&&(m.preventDefault(),Ce.current=!0,Pt(!1),m.currentTarget.blur())}let Au=gn?nr:String(Te),No=n?"dshr-immersive-btn":"dshr-pdf-tbtn",Ai=n||o,ml=`${Math.round((Ai?an(Te):Et)*100)}%`,bl=(0,ye.jsx)("button",{type:"button",className:No,title:"\u7F29\u5C0F","aria-label":"\u7F29\u5C0F",disabled:!wu,onClick:()=>Ye(1/Yc),children:"\u2212"}),xl=(0,ye.jsx)("span",{className:"dshr-pdf-zoom-percent","data-scale":We?"page":_t==="fit"?"fit":Et,title:We?"\u5F53\u524D\u4E3A\u6574\u9875\u663E\u793A":_t==="fit"?"\u5F53\u524D\u4E3A\u9002\u5408\u5BBD\u5EA6":"\u5F53\u524D\u7F29\u653E\u6BD4\u4F8B",children:Ai?ml:We?"\u6574\u9875":_t==="fit"?"\u9002\u5BBD":ml}),vl=(0,ye.jsx)("button",{type:"button",className:No,title:"\u653E\u5927","aria-label":"\u653E\u5927",disabled:!yu,onClick:()=>Ye(Yc),children:"\uFF0B"}),yl=(0,ye.jsx)("button",{type:"button",className:`${No} dshr-pdf-tbtn-wide`,"data-active":We?"true":"false","aria-pressed":We,title:We?"\u5F53\u524D\u6574\u9875\u663E\u793A\uFF1B\u70B9\u51FB\u56DE\u5230\u9002\u5408\u5BBD\u5EA6":"\u70B9\u51FB\u5207\u6362\u4E3A\u6574\u9875\u663E\u793A\uFF1B\u518D\u6B21\u70B9\u51FB\u56DE\u5230\u9002\u5408\u5BBD\u5EA6",onClick:Qe,children:Ai||We?"\u6574\u9875":"\u9002\u5BBD"}),wl=(0,ye.jsx)("button",{type:"button",className:No,title:"\u4E0A\u4E00\u9875\uFF08PageUp\uFF09","aria-label":"\u4E0A\u4E00\u9875",disabled:Te<=1,onClick:ct,children:"\u2039"}),_l=(0,ye.jsxs)("div",{className:"dshr-pdf-pager",children:[(0,ye.jsx)("input",{className:"dshr-pdf-page-input",inputMode:"numeric","aria-label":"\u9875\u7801",value:Au,onChange:ku,onFocus:_u,onBlur:Su,onKeyDown:Eu}),(0,ye.jsxs)("span",{"aria-hidden":"true",children:["/ ",ve]})]}),kl=(0,ye.jsx)("button",{type:"button",className:No,title:"\u4E0B\u4E00\u9875\uFF08PageDown\uFF09","aria-label":"\u4E0B\u4E00\u9875",disabled:Te>=ve,onClick:jt,children:"\u203A"}),Ni=ge==="ready"?(0,ye.jsxs)(ye.Fragment,{children:[(0,ye.jsxs)("div",{className:"dshr-pdf-tool-group",role:"group","aria-label":"PDF \u7F29\u653E",children:[bl,xl,vl,yl]}),n?null:(0,ye.jsx)("span",{className:"dshr-pdf-toolbar-sep","aria-hidden":"true"}),(0,ye.jsxs)("div",{className:"dshr-pdf-tool-group",role:"group","aria-label":"PDF \u7FFB\u9875",children:[wl,_l,kl]})]}):null,Nu=o&&ge==="ready"?{iconTools:(0,ye.jsxs)(ye.Fragment,{children:[(0,ye.jsxs)("div",{className:"dshr-pdf-tool-group",role:"group","aria-label":"PDF \u7FFB\u9875",children:[wl,kl]}),(0,ye.jsxs)("div",{className:"dshr-pdf-tool-group",role:"group","aria-label":"PDF \u7F29\u653E",children:[bl,vl]})]}),textTools:(0,ye.jsxs)("div",{className:"dshr-pdf-tool-group",role:"group","aria-label":"PDF \u9875\u7801\u4E0E\u89C6\u56FE",children:[_l,xl,yl]})}:void 0;return(0,ye.jsxs)("div",{className:"dshr-pdf-root",ref:C,tabIndex:0,"data-dshr-pdf":"",role:"region","aria-label":r?`PDF \u9605\u8BFB\u5668\uFF1A${r}`:"PDF \u9605\u8BFB\u5668",onKeyDown:xu,children:[o?o(Nu):n?n(Ni):Ni&&(0,ye.jsxs)("div",{className:"dshr-pdf-toolbar",role:"toolbar","aria-label":"PDF \u9605\u8BFB\u5DE5\u5177\u680F",children:[(0,ye.jsx)("span",{className:"dshr-pdf-title",title:r||void 0,children:r}),(0,ye.jsx)("span",{className:"dshr-pdf-toolbar-spacer"}),Ni]}),(0,ye.jsxs)("div",{className:"dshr-pdf-body",children:[(0,ye.jsx)("div",{className:"dshr-pdf-area",children:(0,ye.jsxs)("div",{className:"dshr-pdf-workspace",children:[(0,ye.jsx)("div",{className:"dshr-pdf-scroll",ref:S,"data-pdf-page":N?Te:void 0,"data-pdf-pages":N?ve:void 0,onMouseDown:bu,onPointerOver:m=>{if(!tt.current||m.buttons)return;let R=m.target.closest?.("[data-pdf-segment]"),B=Number(R?.closest(".dshr-pdf-frame")?.dataset.page);R&&B&&Wt(R.dataset.pdfSegment,{origin:"source"},B)},children:ge==="ready"?(0,ye.jsxs)("div",{className:"dshr-pdf-content",children:[!N&&fl>1?(0,ye.jsx)("div",{className:"dshr-pdf-spacer","aria-hidden":"true",style:{height:Ke.top(fl)-Ke.paddingTop}}):null,Ei.map(m=>(0,ye.jsx)(Gp,{pageNumber:m,dim:ar(m),mode:We?"page":_t,scale:Et,viewportWidth:Q,viewportHeight:we,active:!N||m===Te,rendered:!!nn[m],registerPageElement:gu,registerFrameElement:mu,annotations:vu.get(m),onOpenAnnotation:E},m)),!N&&gl<ve?(0,ye.jsx)("div",{className:"dshr-pdf-spacer","aria-hidden":"true",style:{height:Ke.top(ve+1)-Ke.top(gl+1)}}):null]}):(0,ye.jsx)("div",{className:"dshr-pdf-status",role:ge==="error"?"alert":"status",children:ge==="error"?(0,ye.jsxs)(ye.Fragment,{children:[(0,ye.jsx)("p",{className:"dshr-pdf-status-title dshr-pdf-status-error",children:"PDF \u52A0\u8F7D\u5931\u8D25"}),(0,ye.jsx)("p",{className:"dshr-pdf-status-detail",children:Ve}),(0,ye.jsx)("button",{type:"button",className:"dshr-pdf-status-retry",onClick:()=>Jn(m=>m+1),children:"\u91CD\u65B0\u52A0\u8F7D"})]}):(0,ye.jsxs)(ye.Fragment,{children:[(0,ye.jsx)("span",{className:"dshr-pdf-status-spinner","aria-hidden":"true"}),(0,ye.jsx)("p",{className:"dshr-pdf-status-title",children:"\u6B63\u5728\u52A0\u8F7D PDF\u2026"}),pt!==null?(0,ye.jsxs)("p",{className:"dshr-pdf-status-progress",children:[pt,"%"]}):null]})})}),_?(0,ye.jsx)(Gc,{page:Te,source:Bt[Te],rows:e?W.pages[Te]||[]:(Bt[Te]?.segments||[]).map((m,R)=>({...m,...l?.[Te]?.segments?.[R]||{},status:l?.[Te]?.status||"queued",error:l?.[Te]?.error})),activeId:Mr?.page===Te?Mr.id:null,originRef:ue,translation:e?W:{...W,retry:m=>{ae.current.delete(m),p?.(m),xn(m)}},onActivate:(m,R)=>Wt(m,R,Te),onClose:()=>{An(!0),w?.()}}):null]})}),a]})]})}nd.displayName="PdfViewer";var od=nd;var Fr=Rt(require("react"),1);var w0=require("react"),Ft=require("react/jsx-runtime");function Xa(t,e="i"){let r=[],n=String(t??""),o=/(\*\*[^*]+\*\*|__[^_]+__|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/gu,a=0,i=0;for(let s of n.matchAll(o)){s.index>a&&r.push(n.slice(a,s.index));let l=s[0],d=`${e}-${i++}`;if(l.startsWith("**")||l.startsWith("__"))r.push((0,Ft.jsx)("strong",{children:l.slice(2,-2)},d));else if(l.startsWith("`"))r.push((0,Ft.jsx)("code",{children:l.slice(1,-1)},d));else{let f=/^\[([^\]]+)\]\(([^)\s]+)\)$/u.exec(l);f&&/^https?:\/\//iu.test(f[2])?r.push((0,Ft.jsx)("a",{href:f[2],target:"_blank",rel:"noreferrer noopener",children:f[1]},d)):r.push(l)}a=s.index+l.length}return a<n.length&&r.push(n.slice(a)),r}function ad({text:t}){let e=String(t??"").replace(/\r\n/gu,`
`).split(`
`),r=[],n=[],o=[],a=[],i=null,s=0,l=()=>{if(n.length===0)return;let u=n.join(" ");r.push((0,Ft.jsx)("p",{children:Xa(u,`p${s}`)},`p-${s++}`)),n=[]},d=()=>{o.length!==0&&(r.push((0,Ft.jsx)("ul",{children:o.map((u,p)=>(0,Ft.jsx)("li",{children:Xa(u,`l${s}-${p}`)},`li-${s}-${p}`))},`ul-${s++}`)),o=[])},f=()=>{a.length!==0&&(r.push((0,Ft.jsx)("blockquote",{children:a.map((u,p)=>(0,Ft.jsx)("p",{children:Xa(u,`q${s}-${p}`)},`bqp-${s}-${p}`))},`bq-${s++}`)),a=[])},g=()=>{l(),d(),f()};for(let u of e){let p=u.trimEnd();if(p.trim().startsWith("```")){i===null?(g(),i=[]):(r.push((0,Ft.jsx)("pre",{children:(0,Ft.jsx)("code",{children:i.join(`
`)})},`pre-${s++}`)),i=null);continue}if(i!==null){i.push(u);continue}if(p.trim()===""){g();continue}let y=/^(#{1,4})\s+(.*)$/u.exec(p);if(y){g();let w=`h${Math.min(4,y[1].length)}`;r.push((0,Ft.jsx)(w,{children:Xa(y[2],`h${s}`)},`h-${s++}`));continue}let E=/^\s*>\s?(.*)$/u.exec(p);if(E){l(),d(),a.push(E[1]);continue}let v=/^\s*[-*+]\s+(.*)$/u.exec(p);if(v){g(),o.push(v[1]);continue}let P=/^\s*\d+[.)]\s+(.*)$/u.exec(p);if(P){g(),o.push(P[1]);continue}if(/^\s*([-*_])(?:\s*\1){2,}\s*$/u.test(p)){g(),r.push((0,Ft.jsx)("hr",{},`hr-${s++}`));continue}d(),f(),n.push(p)}return i!==null&&r.push((0,Ft.jsx)("pre",{children:(0,Ft.jsx)("code",{children:i.join(`
`)})},`pre-${s++}`)),g(),(0,Ft.jsx)(Ft.Fragment,{children:r})}var je=require("react/jsx-runtime"),qp=["\u5E2E\u6211\u68B3\u7406\u8FD9\u6BB5\u8BDD\u7684\u8BBA\u8BC1\u7ED3\u6784","\u89E3\u91CA\u5176\u4E2D\u7684\u4E13\u4E1A\u672F\u8BED\u548C\u80CC\u666F","\u7FFB\u8BD1\u5E76\u6307\u51FA\u5173\u952E\u8BED\u6CD5","\u8FD9\u6BB5\u548C\u6211\u7684\u7814\u7A76\u95EE\u9898\u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F"];function id({open:t,onClose:e,seed:r,onGoogle:n,onToast:o}){let[a,i]=Fr.default.useState([]),[s,l]=Fr.default.useState(""),[d,f]=Fr.default.useState(!1),[g,u]=Fr.default.useState(""),p=Fr.default.useRef(null),y=Fr.default.useRef(null),E=r?.id??"",v=r?.text??"",P=r?.context??"",N=Fr.default.useCallback(()=>{let S=y.current;S&&requestAnimationFrame(()=>{S.scrollTop=S.scrollHeight})},[]),w=Fr.default.useCallback(async(S,{replace:L=!1,history:I}={})=>{let b=String(S??"").trim();if(!b||d)return;p.current?.abort();let O=new AbortController;p.current=O;let D={role:"user",content:b},$=L?[D]:[...I??a,D];i([...$,{role:"assistant",content:""}]),f(!0),u(""),N();let re="";try{await Gi({messages:$.map(ae=>({role:ae.role,content:ae.content})),selection:v,context:P,signal:O.signal},{onDelta:ae=>{re+=ae,i(z=>{if(z.length===0)return z;let oe=[...z],H=oe[oe.length-1];return H?.role!=="assistant"?z:(oe[oe.length-1]={...H,content:re},oe)}),N()}}),re.trim()||(u("AI \u6CA1\u6709\u8FD4\u56DE\u5185\u5BB9\uFF0C\u8BF7\u91CD\u8BD5\u6216\u6362\u4E00\u79CD\u95EE\u6CD5\u3002"),i(ae=>ae.filter((z,oe)=>!(oe===ae.length-1&&z.role==="assistant"&&!z.content))))}catch(ae){if(Ln(ae))return;u(ae?.message||"AI \u8BF7\u6C42\u5931\u8D25\u3002"),i(z=>{let oe=z[z.length-1];return oe?.role==="assistant"&&!oe.content?z.slice(0,-1):z})}finally{f(!1)}},[d,P,a,N,v]);if(Fr.default.useEffect(()=>{if(!t||!E)return;p.current?.abort(),i([]),u(""),l("");let S="\u8BF7\u89E3\u91CA\u8FD9\u6BB5\u5185\u5BB9\u3002";i([{role:"user",content:S},{role:"assistant",content:""}]),f(!0);let L=new AbortController;p.current=L;let I="";return Gi({messages:[{role:"user",content:S}],selection:v,context:P,signal:L.signal},{onDelta:b=>{I+=b,i(O=>{if(O.length===0)return O;let D=[...O],ee=D[D.length-1];return ee?.role!=="assistant"?O:(D[D.length-1]={...ee,content:I},D)}),N()}}).catch(b=>{Ln(b)||u(b?.message||"AI \u8BF7\u6C42\u5931\u8D25\u3002")}).finally(()=>{f(!1),I.trim()||i(b=>b.filter((O,D)=>!(D===b.length-1&&O.role==="assistant"&&!O.content)))}),()=>L.abort()},[t,E]),Fr.default.useEffect(()=>{t||p.current?.abort()},[t]),!t)return null;let A=S=>{S.preventDefault();let L=s.trim();!L||d||(l(""),w(L))},C=S=>{let L=v||a.find(I=>I.role==="user")?.content||"";if(!L.trim()){o?.("\u5148\u5728\u6B63\u6587\u91CC\u9009\u4E2D\u4E00\u6BB5\u6587\u5B57\uFF0C\u518D\u641C\u7D22\u3002");return}n?.(L,S?"scholar":"web")};return(0,je.jsxs)("aside",{className:"dshr-ai","aria-label":"AI \u9605\u8BFB\u52A9\u624B",children:[(0,je.jsxs)("div",{className:"dshr-ai__head",children:[(0,je.jsx)(yn,{size:17}),(0,je.jsx)("strong",{children:"AI \u9605\u8BFB\u52A9\u624B"}),(0,je.jsx)("span",{className:"dshr-chip dshr-chip--brand",children:"DSH \u9ED8\u8BA4\u6A21\u578B"}),(0,je.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:e,"aria-label":"\u5173\u95ED AI \u9762\u677F",title:"\u5173\u95ED",children:(0,je.jsx)(_r,{size:16})})]}),(0,je.jsxs)("div",{className:"dshr-ai__body",ref:y,children:[a.length===0?(0,je.jsxs)("div",{className:"dshr-ai__welcome",children:[(0,je.jsx)("strong",{children:"\u9009\u4E2D\u6B63\u6587\u4E2D\u7684\u4EFB\u610F\u53E5\u5B50"}),"\uFF0C\u6211\u4F1A\u89E3\u91CA\u542B\u4E49\u3001\u672F\u8BED\u548C\u8BED\u6CD5\uFF1B\u4E5F\u53EF\u4EE5\u76F4\u63A5\u8FFD\u95EE\uFF0C\u6216\u8DF3\u8F6C Google / Google \u5B66\u672F\u7EE7\u7EED\u67E5\u3002",(0,je.jsx)("div",{className:"dshr-ai__suggestions",children:qp.map(S=>(0,je.jsx)("button",{type:"button",onClick:()=>{w(S)},disabled:d,children:S},S))})]}):a.map((S,L)=>(0,je.jsxs)("div",{className:`dshr-ai__msg${S.role==="user"?" dshr-ai__msg--user":""}`,children:[(0,je.jsx)("span",{className:"dshr-ai__role",children:S.role==="user"?"\u4F60":"\u9605\u8BFB\u52A9\u624B"}),S.role==="assistant"?S.content?(0,je.jsx)(ad,{text:S.content}):d&&L===a.length-1?(0,je.jsxs)("span",{className:"dshr-translation__loading",children:[(0,je.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u601D\u8003\u2026"]}):null:S.content]},L)),g?(0,je.jsxs)("div",{className:"dshr-ai__error",children:[g,(0,je.jsx)("div",{style:{marginTop:6},children:(0,je.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>{w(a.find(S=>S.role==="user")?.content||"\u8BF7\u91CD\u65B0\u89E3\u91CA\u8FD9\u6BB5\u5185\u5BB9\u3002",{replace:!0,history:[]})},children:[(0,je.jsx)(Rl,{size:13})," \u91CD\u65B0\u56DE\u7B54"]})})]}):null]}),(0,je.jsx)("div",{className:"dshr-ai__foot",children:(0,je.jsxs)("form",{onSubmit:A,children:[(0,je.jsx)("textarea",{className:"dshr-ai__input",placeholder:"\u8FFD\u95EE\uFF1A\u8FD9\u6BB5\u7684\u8BBA\u8BC1\u6709\u4EC0\u4E48\u95EE\u9898\uFF1F\uFF0F\u672F\u8BED\u662F\u4EC0\u4E48\u610F\u601D\uFF1F",value:s,onChange:S=>l(S.target.value),onKeyDown:S=>{S.key==="Enter"&&!S.shiftKey&&(S.preventDefault(),w(s),l(""))},disabled:d,"aria-label":"\u5411 AI \u8FFD\u95EE"}),(0,je.jsxs)("div",{className:"dshr-ai__actions",children:[(0,je.jsx)("span",{className:"dshr-ai__hint",children:"Enter \u53D1\u9001 \xB7 Shift+Enter \u6362\u884C"}),(0,je.jsxs)("div",{style:{display:"flex",gap:5},children:[(0,je.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>C(!1),title:"\u7528 Google \u641C\u7D22\u9009\u4E2D\u7684\u6587\u5B57",children:[(0,je.jsx)(wa,{size:13})," Google"]}),(0,je.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:()=>C(!0),title:"\u7528 Google \u5B66\u672F\u641C\u7D22\u9009\u4E2D\u7684\u6587\u5B57",children:[(0,je.jsx)(_a,{size:13})," \u5B66\u672F"]}),(0,je.jsxs)("button",{type:"submit",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:d||!s.trim(),children:[d?(0,je.jsx)("span",{className:"dshr-spinner"}):(0,je.jsx)(Ml,{size:13})," \u53D1\u9001"]})]})]})]})})]})}var N0=require("react");var Je=require("react/jsx-runtime");function sd({selection:t,translation:e,onTranslate:r,onAnnotate:n,onExplain:o,onGoogle:a,onCopy:i,onClose:s,onRetry:l}){if(!t?.text?.trim())return null;let d=t.rect,g=476/2,u=typeof window<"u"?window.innerWidth:1200,p=typeof window<"u"?window.innerHeight:800,y=d?d.left+d.width/2:u/2,E=Math.max(g+10,Math.min(u-g-10,y)),v=d&&d.top>70?d.top-46:Math.min(p-190,(d?.bottom??0)+10),P=Math.min(p-180,v+42);return(0,Je.jsxs)(Je.Fragment,{children:[(0,Je.jsxs)("div",{className:"dshr-selection",style:{left:E,top:Math.max(8,v)},role:"toolbar","aria-label":"\u9009\u4E2D\u6587\u5B57\u64CD\u4F5C",onMouseDown:N=>N.preventDefault(),children:[(0,Je.jsxs)("button",{type:"button",className:"dshr-selection__btn dshr-selection__btn--accent",onClick:()=>r(t),children:[(0,Je.jsx)(no,{size:14})," \u7FFB\u8BD1"]}),(0,Je.jsxs)("button",{type:"button",className:"dshr-selection__btn dshr-selection__btn--mark",onClick:()=>n(t),title:"\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u3001\u4FBF\u7B7E\u6216\u5907\u6CE8",children:[(0,Je.jsx)(ka,{size:14})," \u6807\u8BB0"]}),(0,Je.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>o(t),children:[(0,Je.jsx)(yn,{size:14})," AI \u89E3\u91CA"]}),(0,Je.jsx)("span",{className:"dshr-selection__sep"}),(0,Je.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>a(t.text,"web"),title:"\u7528 Google \u641C\u7D22",children:[(0,Je.jsx)(wa,{size:14})," Google"]}),(0,Je.jsxs)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>a(t.text,"scholar"),title:"\u7528 Google \u5B66\u672F\u641C\u7D22",children:[(0,Je.jsx)(_a,{size:14})," \u5B66\u672F"]}),(0,Je.jsx)("span",{className:"dshr-selection__sep"}),(0,Je.jsx)("button",{type:"button",className:"dshr-selection__btn",onClick:()=>i(t.text),title:"\u590D\u5236\u9009\u4E2D\u6587\u5B57",children:(0,Je.jsx)(Il,{size:14})}),(0,Je.jsx)("button",{type:"button",className:"dshr-selection__btn",onClick:s,title:"\u5173\u95ED","aria-label":"\u5173\u95ED\u9009\u4E2D\u6587\u5B57\u5DE5\u5177\u680F",children:(0,Je.jsx)(_r,{size:13})})]}),e?(0,Je.jsxs)("div",{className:"dshr-selection__pop",style:{left:E,top:P},onMouseDown:N=>N.preventDefault(),children:[(0,Je.jsxs)("div",{className:"dshr-selection__pop-head",children:[(0,Je.jsx)("span",{children:"\u4E2D\u6587\u8BD1\u6587"}),(0,Je.jsx)("button",{type:"button",onClick:s,"aria-label":"\u5173\u95ED\u8BD1\u6587",children:(0,Je.jsx)(_r,{size:12})})]}),e.status==="loading"?(0,Je.jsxs)("span",{className:"dshr-translation__loading",children:[(0,Je.jsx)("span",{className:"dshr-spinner"})," \u6B63\u5728\u7FFB\u8BD1\u9009\u4E2D\u5185\u5BB9\u2026"]}):e.status==="error"?(0,Je.jsxs)("span",{style:{color:"var(--dshr-error)"},children:[e.error||"\u7FFB\u8BD1\u5931\u8D25\u3002"," ",(0,Je.jsx)("button",{type:"button",className:"dshr-translation__retry",onClick:l,children:"\u91CD\u8BD5"})]}):String(e.zh||"").split(/\n+/u).filter(Boolean).map((N,w)=>(0,Je.jsx)("p",{style:{margin:w===0?0:"8px 0 0"},children:N},w))]}):null]})}var Va=Rt(require("react"),1);var fe=require("react/jsx-runtime");function ld({settings:t,onChange:e,onClose:r,onClearLibrary:n,onOpenAppearance:o}){let[a,i]=Va.default.useState(!1);Va.default.useEffect(()=>{let l=d=>{d.key==="Escape"&&r()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[r]);let s=l=>e({...t,...l});return(0,fe.jsx)("div",{className:"dshr-modal-mask",onMouseDown:l=>{l.target===l.currentTarget&&r()},children:(0,fe.jsxs)("div",{className:"dshr-modal",role:"dialog","aria-modal":"true","aria-label":"\u9605\u8BFB\u8BBE\u7F6E",children:[(0,fe.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:12},children:[(0,fe.jsxs)("div",{style:{flex:1},children:[(0,fe.jsx)("h3",{children:"\u9605\u8BFB\u8BBE\u7F6E"}),(0,fe.jsx)("p",{children:"\u8BBE\u7F6E\u53EA\u4FDD\u5B58\u5728\u672C\u673A\uFF0C\u4E0D\u5F71\u54CD DSH \u7684\u5176\u5B83\u63D2\u4EF6\u3002"})]}),(0,fe.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:r,"aria-label":"\u5173\u95ED\u8BBE\u7F6E",children:(0,fe.jsx)(_r,{size:16})})]}),(0,fe.jsxs)("div",{className:"dshr-settings-row",children:[(0,fe.jsxs)("div",{children:[(0,fe.jsx)("div",{className:"dshr-settings-row__title",children:"\u5B57\u4F53\u3001\u80CC\u666F\u4E0E\u5E03\u5C40"}),(0,fe.jsx)("div",{className:"dshr-settings-row__hint",children:"\u5B57\u4F53\u3001\u5B57\u91CD\u3001\u5B57\u53F7\u3001\u884C\u8DDD\u3001\u9605\u8BFB\u5BBD\u5EA6\u3001\u76EE\u5F55\u5BBD\u5EA6\u3001\u4EAE\u5EA6\u3001\u80CC\u666F\u989C\u8272\u4E0E\u81EA\u5B9A\u4E49\u80CC\u666F\u56FE\u7247\u3002"})]}),(0,fe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--outline",onClick:o,children:[(0,fe.jsx)(Oo,{size:14})," \u6253\u5F00\u5916\u89C2\u9762\u677F"]})]}),(0,fe.jsxs)("div",{className:"dshr-settings-row",children:[(0,fe.jsxs)("div",{children:[(0,fe.jsx)("div",{className:"dshr-settings-row__title",children:"\u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1"}),(0,fe.jsx)("div",{className:"dshr-settings-row__hint",children:"\u6EDA\u52A8\u5230\u5916\u6587\u6BB5\u843D\u540E\u81EA\u52A8\u7FFB\u8BD1\u6210\u4E2D\u6587\uFF0C\u8BD1\u6587\u663E\u793A\u5728\u539F\u6587\u4E0B\u65B9\u3002"})]}),(0,fe.jsxs)("button",{type:"button",className:"dshr-switch",role:"switch","aria-checked":t.autoTranslate,onClick:()=>s({autoTranslate:!t.autoTranslate}),children:[(0,fe.jsx)("span",{className:"dshr-switch__track"}),t.autoTranslate?"\u5F00\u542F":"\u5173\u95ED"]})]}),(0,fe.jsxs)("div",{className:"dshr-settings-row",children:[(0,fe.jsxs)("div",{children:[(0,fe.jsx)("div",{className:"dshr-settings-row__title",children:"\u6B63\u6587\u5B57\u53F7"}),(0,fe.jsxs)("div",{className:"dshr-settings-row__hint",children:[t.fontSize,"px \xB7 \u9002\u5408\u957F\u7BC7\u9605\u8BFB\u7684\u5B57\u53F7"]})]}),(0,fe.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:5},children:[(0,fe.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--outline",onClick:()=>s({fontSize:Math.max(14,t.fontSize-1)}),"aria-label":"\u51CF\u5C0F\u5B57\u53F7",children:(0,fe.jsx)(ya,{size:15})}),(0,fe.jsxs)("span",{className:"dshr-chip",style:{minWidth:46,justifyContent:"center"},children:[t.fontSize,"px"]}),(0,fe.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--outline",onClick:()=>s({fontSize:Math.min(26,t.fontSize+1)}),"aria-label":"\u589E\u5927\u5B57\u53F7",children:(0,fe.jsx)(cn,{size:15})})]})]}),(0,fe.jsxs)("div",{className:"dshr-settings-row",children:[(0,fe.jsxs)("div",{children:[(0,fe.jsx)("div",{className:"dshr-settings-row__title",children:"\u884C\u8DDD"}),(0,fe.jsxs)("div",{className:"dshr-settings-row__hint",children:["\u5F53\u524D ",t.lineHeight.toFixed(2)]})]}),(0,fe.jsx)("input",{type:"range",min:"1.45",max:"2.2",step:"0.05",value:t.lineHeight,onChange:l=>s({lineHeight:Number(l.target.value)}),"aria-label":"\u884C\u8DDD"})]}),(0,fe.jsxs)("div",{className:"dshr-settings-row",children:[(0,fe.jsxs)("div",{children:[(0,fe.jsx)("div",{className:"dshr-settings-row__title",children:"\u7FFB\u8BD1\u4E0E AI"}),(0,fe.jsx)("div",{className:"dshr-settings-row__hint",children:"\u4F7F\u7528 DSH \u5F53\u524D\u9ED8\u8BA4\u6A21\u578B\uFF1B\u7FFB\u8BD1\u53EA\u53D1\u9001\u5F53\u524D\u6BB5\u843D\u6216\u9009\u4E2D\u6587\u5B57\uFF0C\u4E0D\u53D1\u9001\u6574\u672C\u4E66\u3002"})]}),(0,fe.jsx)("span",{className:"dshr-chip dshr-chip--brand",children:"DSH \u9ED8\u8BA4\u6A21\u578B"})]}),(0,fe.jsxs)("div",{className:"dshr-settings-row dshr-settings-row--danger",children:[(0,fe.jsxs)("div",{children:[(0,fe.jsx)("div",{className:"dshr-settings-row__title",children:"\u6E05\u7A7A\u672C\u5730\u4E66\u67B6"}),(0,fe.jsx)("div",{className:"dshr-settings-row__hint",children:"\u5220\u9664\u5DF2\u5BFC\u5165\u7684\u6240\u6709\u6587\u6863\u3001\u4E66\u5355\u3001\u6279\u6CE8\u548C\u9605\u8BFB\u8FDB\u5EA6\uFF0C\u65E0\u6CD5\u64A4\u9500\u3002"})]}),a?(0,fe.jsxs)("div",{style:{display:"flex",gap:6},children:[(0,fe.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm",onClick:()=>i(!1),children:"\u53D6\u6D88"}),(0,fe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--danger",onClick:()=>{n(),i(!1)},children:[(0,fe.jsx)(ln,{size:13})," \u786E\u8BA4\u6E05\u7A7A"]})]}):(0,fe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--danger",onClick:()=>i(!0),children:[(0,fe.jsx)(ln,{size:13})," \u6E05\u7A7A"]})]})]})})}function cd({book:t,onCancel:e,onConfirm:r}){return Va.default.useEffect(()=>{let n=o=>{o.key==="Escape"&&e()};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[e]),(0,fe.jsx)("div",{className:"dshr-modal-mask",onMouseDown:n=>{n.target===n.currentTarget&&e()},children:(0,fe.jsxs)("div",{className:"dshr-modal",role:"dialog","aria-modal":"true","aria-label":"\u5220\u9664\u6587\u6863",children:[(0,fe.jsx)("h3",{children:"\u4ECE\u4E66\u67B6\u5220\u9664\uFF1F"}),(0,fe.jsxs)("p",{children:["\u300A",t?.title||"\u672A\u547D\u540D\u6587\u6863","\u300B\u53CA\u5176\u9605\u8BFB\u8FDB\u5EA6\u4F1A\u4ECE\u672C\u673A\u5220\u9664\u3002\u539F\u59CB\u6587\u4EF6\u4E0D\u53D7\u5F71\u54CD\u3002"]}),(0,fe.jsxs)("div",{className:"dshr-modal__actions",children:[(0,fe.jsx)("button",{type:"button",className:"dshr-btn",onClick:e,children:"\u53D6\u6D88"}),(0,fe.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--danger",onClick:r,children:[(0,fe.jsx)(ln,{size:14})," \u5220\u9664"]})]})]})})}function dd({message:t}){return t?(0,fe.jsx)("div",{className:"dshr-toast",role:"status",children:t}):null}var ho=Rt(require("react"),1);var dt=require("react/jsx-runtime"),Xp=[{label:"Project Gutenberg",hint:"\u4E03\u4E07\u672C\u516C\u7248\u4E66",href:"https://www.gutenberg.org/"},{label:"Standard Ebooks",hint:"\u7CBE\u6821\u516C\u7248\u4E66",href:"https://standardebooks.org/"},{label:"arXiv",hint:"\u5F00\u653E\u83B7\u53D6\u8BBA\u6587",href:"https://arxiv.org/"},{label:"Open Library",hint:"\u5F00\u653E\u56FE\u4E66\u76EE\u5F55",href:"https://openlibrary.org/"},{label:"Internet Archive",hint:"\u516C\u7248\u4E0E\u5F00\u653E\u9986\u85CF",href:"https://archive.org/"},{label:"Wikisource",hint:"\u516C\u7248\u6587\u732E",href:"https://zh.wikisource.org/"}];function hd({open:t,busy:e,onClose:r,onSubmit:n}){let[o,a]=ho.default.useState(""),[i,s]=ho.default.useState(""),l=ho.default.useRef(null);return ho.default.useEffect(()=>{t&&(s(""),window.setTimeout(()=>l.current?.focus(),30))},[t]),ho.default.useEffect(()=>{if(!t)return;let f=g=>{g.key==="Escape"&&!e&&r()};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[t,e,r]),t?(0,dt.jsx)("div",{className:"dshr-modal-mask",onMouseDown:f=>{f.target===f.currentTarget&&!e&&r()},children:(0,dt.jsxs)("div",{className:"dshr-modal dshr-online-modal",role:"dialog","aria-modal":"true","aria-label":"\u4ECE\u516C\u5F00\u6765\u6E90\u5BFC\u5165",children:[(0,dt.jsxs)("div",{className:"dshr-online-modal__head",children:[(0,dt.jsxs)("div",{children:[(0,dt.jsxs)("h3",{children:[(0,dt.jsx)(Ta,{size:17})," \u4ECE\u516C\u5F00\u6765\u6E90\u5BFC\u5165"]}),(0,dt.jsx)("p",{children:"\u7C98\u8D34\u7535\u5B50\u4E66\u6587\u4EF6\u7684\u76F4\u94FE\uFF0C\u4E0B\u8F7D\u540E\u81EA\u52A8\u52A0\u5165\u4E66\u67B6\u5E76\u6253\u5F00\u3002"})]}),(0,dt.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:r,disabled:e,"aria-label":"\u5173\u95ED\u5728\u7EBF\u5BFC\u5165",children:(0,dt.jsx)(_r,{size:16})})]}),(0,dt.jsxs)("div",{className:"dshr-online-modal__notice",children:[(0,dt.jsx)("strong",{children:"\u7248\u6743\u63D0\u793A"}),(0,dt.jsx)("span",{children:"\u4EC5\u652F\u6301\u4F60\u786E\u8BA4\u6709\u6743\u4E0B\u8F7D\u7684\u516C\u5F00\u7248\u6743 / \u5F00\u653E\u83B7\u53D6\u8D44\u6E90\u3002\u672C\u529F\u80FD\u4E0D\u5185\u7F6E Z-Library \u7B49\u7248\u6743\u4E0D\u660E\u7684\u4E66\u6E90\uFF0C\u4E5F\u4E0D\u4F1A\u6293\u53D6\u767B\u5F55\u540E\u7684\u79C1\u5BC6\u9875\u9762\u3002"})]}),(0,dt.jsxs)("form",{className:"dshr-online-modal__form",onSubmit:f=>{f.preventDefault();let g=o.trim();if(!/^https:\/\//iu.test(g)){s("\u8BF7\u8F93\u5165\u4EE5 https:// \u5F00\u5934\u7684\u7535\u5B50\u4E66\u6587\u4EF6\u76F4\u94FE\u3002");return}s(""),n(g)},children:[(0,dt.jsx)("label",{htmlFor:"dshr-online-url",children:"\u6587\u4EF6\u76F4\u94FE"}),(0,dt.jsxs)("div",{className:"dshr-online-modal__input",children:[(0,dt.jsx)(Fl,{size:15}),(0,dt.jsx)("input",{ref:l,id:"dshr-online-url",type:"url",value:o,onChange:f=>{a(f.target.value),s("")},placeholder:"https://www.gutenberg.org/ebooks/11.epub3.images",spellCheck:"false",autoComplete:"off",disabled:e})]}),i?(0,dt.jsx)("p",{className:"dshr-online-modal__error",children:i}):null,(0,dt.jsx)("p",{className:"dshr-online-modal__hint",children:"\u652F\u6301 PDF / EPUB / MOBI / AZW3 / TXT / Markdown / HTML \u76F4\u94FE\uFF1B\u5355\u4E2A\u6587\u4EF6\u6700\u5927 120 MB\u3002 \u53E4\u767B\u5821\u3001Standard Ebooks\u3001arXiv\u3001Open Library\u3001Internet Archive \u7B49\u7AD9\u70B9\u53EF\u6B63\u5E38\u4F7F\u7528\u3002"}),(0,dt.jsxs)("div",{className:"dshr-online-modal__actions",children:[(0,dt.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--sm dshr-btn--ghost",onClick:r,disabled:e,children:"\u53D6\u6D88"}),(0,dt.jsx)("button",{type:"submit",className:"dshr-btn dshr-btn--sm dshr-btn--primary",disabled:e||o.trim()==="",children:e?"\u6B63\u5728\u4E0B\u8F7D\u2026":"\u4E0B\u8F7D\u5E76\u6253\u5F00"})]})]}),(0,dt.jsxs)("div",{className:"dshr-online-modal__sources",children:[(0,dt.jsx)("span",{children:"\u53BB\u54EA\u91CC\u627E\u4E66\uFF1F"}),(0,dt.jsx)("div",{className:"dshr-online-modal__source-list",children:Xp.map(f=>(0,dt.jsx)("a",{href:f.href,target:"_blank",rel:"noreferrer",title:f.hint,children:f.label},f.label))})]})]})}):null}var Tr=Rt(require("react"),1);var $t=class t{static GetDistanceBetweenTwoPoint(e,r){return e===null||r===null?1/0:Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))}static GetSegmentLength(e){return t.GetDistanceBetweenTwoPoint(e[0],e[1])}static GetAngleBetweenTwoLine(e,r){let n=e[0].y-e[1].y,o=r[0].y-r[1].y,a=e[1].x-e[0].x,i=r[1].x-r[0].x;return Math.acos((n*o+a*i)/(Math.sqrt(n*n+a*a)*Math.sqrt(o*o+i*i)))}static PointInRect(e,r){return r===null?null:r.x>=e.left&&r.x<=e.width+e.left&&r.y>=e.top&&r.y<=e.top+e.height?r:null}static GetRotatedPoint(e,r,n){return{x:e.x*Math.cos(n)+e.y*Math.sin(n)+r.x,y:e.y*Math.cos(n)-e.x*Math.sin(n)+r.y}}static LimitPointToCircle(e,r,n){if(t.GetDistanceBetweenTwoPoint(e,n)<=r)return n;let o=e.x,a=e.y,i=n.x,s=n.y,l=Math.sqrt(Math.pow(r,2)*Math.pow(o-i,2)/(Math.pow(o-i,2)+Math.pow(a-s,2)))+o;n.x<0&&(l*=-1);let d=(l-o)*(a-s)/(o-i)+a;return o-i+a===0&&(d=r),{x:l,y:d}}static GetIntersectBetweenTwoSegment(e,r,n){return t.PointInRect(e,t.GetIntersectBeetwenTwoLine(r,n))}static GetIntersectBeetwenTwoLine(e,r){let n=e[0].y-e[1].y,o=r[0].y-r[1].y,a=e[1].x-e[0].x,i=r[1].x-r[0].x,s=e[0].x*e[1].y-e[1].x*e[0].y,l=r[0].x*r[1].y-r[1].x*r[0].y,d=n*l-o*s,f=a*l-i*s,g=-((s*i-l*a)/(n*i-o*a)),u=-((n*l-o*s)/(n*i-o*a));if(isFinite(g)&&isFinite(u))return{x:g,y:u};if(Math.abs(d-f)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(e,r){let n=Math.abs(e.x-r.x),o=Math.abs(e.y-r.y),a=Math.max(n,o),i=[e];function s(l,d,f,g,u){return d>l?l+u*(f/g):d<l?l-u*(f/g):l}for(let l=1;l<=a;l+=1)i.push({x:s(e.x,r.x,n,a,l),y:s(e.y,r.y,o,a,l)});return i}};var jo=class{constructor(e,r,n,o){this.direction=e;this.corner=r;this.pageWidth=parseInt(n,10),this.pageHeight=parseInt(o,10)}direction;corner;angle;position;rect;topIntersectPoint=null;sideIntersectPoint=null;bottomIntersectPoint=null;pageWidth;pageHeight;calc(e){try{return this.position=this.calcAngleAndPosition(e),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){let e=[],r=!1;return e.push(this.rect.topLeft),e.push(this.topIntersectPoint),this.sideIntersectPoint===null?r=!0:(e.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(r=!1)),e.push(this.bottomIntersectPoint),(r||this.corner==="bottom")&&e.push(this.rect.bottomLeft),e}getBottomClipArea(){let e=[];return e.push(this.topIntersectPoint),this.corner==="top"?e.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&e.push({x:this.pageWidth,y:0}),e.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?$t.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&e.push(this.sideIntersectPoint):this.corner==="top"&&e.push({x:this.pageWidth,y:this.pageHeight}),e.push(this.bottomIntersectPoint),e.push(this.topIntersectPoint),e}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){let e=$t.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?e:Math.PI-e}calcAngleAndPosition(e){let r=e;if(this.updateAngleAndGeometry(r),this.corner==="top"?r=this.checkPositionAtCenterLine(r,{x:0,y:0},{x:0,y:this.pageHeight}):r=this.checkPositionAtCenterLine(r,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(r.x-this.pageWidth)<1&&Math.abs(r.y)<1)throw new Error("Point is too small");return r}updateAngleAndGeometry(e){this.angle=this.calculateAngle(e),this.rect=this.getPageRect(e)}calculateAngle(e){let r=this.pageWidth-e.x+1,n=this.corner==="bottom"?this.pageHeight-e.y:e.y,o=2*Math.acos(r/Math.sqrt(n*n+r*r));n<0&&(o=-o);let a=Math.PI-o;if(!isFinite(o)||a>=0&&a<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(o=-o),o}getPageRect(e){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],e):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],e)}getRectFromBasePoint(e,r){return{topLeft:this.getRotatedPoint(e[0],r),topRight:this.getRotatedPoint(e[1],r),bottomLeft:this.getRotatedPoint(e[2],r),bottomRight:this.getRotatedPoint(e[3],r)}}getRotatedPoint(e,r){return{x:e.x*Math.cos(this.angle)+e.y*Math.sin(this.angle)+r.x,y:e.y*Math.cos(this.angle)-e.x*Math.sin(this.angle)+r.y}}calculateIntersectPoint(e){let r={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=$t.GetIntersectBetweenTwoSegment(r,[e,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=$t.GetIntersectBetweenTwoSegment(r,[e,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=$t.GetIntersectBetweenTwoSegment(r,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=$t.GetIntersectBetweenTwoSegment(r,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=$t.GetIntersectBetweenTwoSegment(r,[e,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=$t.GetIntersectBetweenTwoSegment(r,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(e,r,n){let o=e,a=$t.LimitPointToCircle(r,this.pageWidth,o);o!==a&&(o=a,this.updateAngleAndGeometry(o));let i=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2)),s=this.rect.bottomRight,l=this.rect.topLeft;if(this.corner==="bottom"&&(s=this.rect.topRight,l=this.rect.bottomLeft),s.x<=0){let d=$t.LimitPointToCircle(n,i,l);d!==o&&(o=d,this.updateAngleAndGeometry(o))}return o}getSegmentToShadowLine(){let e=this.getShadowStartPoint(),r=e!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint;return[e,r]}};var ss={slide:250,cover:300,flip:500},Kp="cubic-bezier(.25,.1,.25,1)",ud=t=>`polygon(${t.filter(Boolean).map(e=>`${e.x}px ${e.y}px`).join(",")})`,Yp=0;function pd(t,e){let r=t.getBoundingClientRect(),n=e.querySelectorAll(".dshr-block,.dshr-chapter__kicker,.dshr-chapter__nav");return[...n.length?n:e.children].map(o=>{let a=o.getBoundingClientRect();return{element:o,top:a.top-r.top+t.scrollTop,bottom:a.bottom-r.top+t.scrollTop,left:a.left-r.left,width:a.width,height:a.height}})}function Ka(t){let e=[t,...t.querySelectorAll("*")],r=new Map,n=`dshr-snapshot-${++Yp}-`;for(let o of e){o.id&&(r.set(o.id,n+r.size),o.id=r.get(o.id));for(let a of["data-seg-id","data-anno-block","data-anno-id","autofocus"])o.removeAttribute(a)}if(r.size)for(let o of e)for(let a of[...o.attributes]){if(a.name==="id")continue;let i=a.value.replace(/url\(\s*(['"]?)#([^\s)'";]+)\1\s*\)/g,(s,l,d)=>r.has(d)?`url(#${r.get(d)})`:s);(a.name==="href"||a.name==="xlink:href")&&r.has(i.slice(1))&&(i="#"+r.get(i.slice(1))),i!==a.value&&o.setAttribute(a.name,i)}}function fd(t,e,r,n,o,a){let i=document.createElement("div");i.className="dshr-turn-page";let s=t.getBoundingClientRect(),l=e.getBoundingClientRect(),d=e.cloneNode(!1);Ka(d),Object.assign(d.style,{position:"absolute",left:`${l.left-s.left}px`,top:"0",width:`${l.width}px`,height:"100%",padding:"0",margin:"0"}),i.append(d);let f=new Map([[e,d]]),g=p=>{if(f.has(p))return f.get(p);let y=p.cloneNode(!1);return Ka(y),g(p.parentElement).append(y),f.set(p,y),y};for(let p of r){if(p.bottom<=n+48||p.top>=n+t.clientHeight-o||!p.height)continue;if(p.height>t.clientHeight*8)throw new Error("Snapshot block exceeds viewport budget");let y=document.createTreeWalker(p.element,4294967295);for(let N=p.element;N;N=y.nextNode())if(a.nodes-=1,N.nodeType===3&&(a.text-=N.length),a.nodes<0||a.text<0)throw new Error("Snapshot exceeds DOM budget");let E=p.element.cloneNode(!0);Ka(E),Object.assign(E.style,{position:"absolute",margin:"0",boxSizing:"border-box",left:`${p.left-(l.left-s.left)}px`,top:`${p.top-n}px`,width:`${p.width}px`,height:`${p.height}px`}),g(p.element.parentElement).append(E);let v=[p.element,...p.element.querySelectorAll("*")],P=[E,...E.querySelectorAll("*")];v.forEach((N,w)=>{N.scrollLeft&&(P[w].scrollLeft=N.scrollLeft),N.tagName==="CANVAS"&&(P[w].width=N.width,P[w].height=N.height,P[w].getContext("2d")?.drawImage(N,0,0))})}let u=t.querySelector(":scope > .dshr-anno-layer");if(u){let p=u.cloneNode(!1);Object.assign(p.style,{top:"0",height:"100%"});for(let y of u.children){let E=Number.parseFloat(y.style.top),v=Number.parseFloat(y.style.height)||24;if(E+v<=n+48||E>=n+t.clientHeight-o)continue;if(--a.nodes<0)throw new Error("Snapshot marks exceed DOM budget");let P=y.cloneNode(!0);Ka(P),P.style.top=`${E-n}px`,p.append(P)}i.append(p)}for(let[p,y]of[["top",48],["bottom",o]]){let E=document.createElement("div");E.className=`dshr-turn-mask dshr-turn-mask--${p}`,E.style.height=`${y}px`,i.append(E)}return i}function Zp(t,e,r){let n=new jo(0,"bottom",String(Math.round(t)),String(Math.round(e))),o=Math.max(1e-4,Math.min(.9999,r)),a=Math.min(e*.22,t*.28)*Math.sin(Math.PI*o);if(!n.calc({x:t*(1-2*o),y:e-a-.1}))return null;let i=n.getActiveCorner(),s=n.getAngle(),l=n.getFlippingClipArea().filter(Boolean).map(d=>$t.GetRotatedPoint({x:d.x-i.x,y:d.y-i.y},{x:0,y:0},s));return{reveal:ud(n.getBottomClipArea()),fold:ud(l),transform:`translate3d(${i.x}px,${i.y}px,0) rotate(${s}rad)`,shadow:n.getShadowStartPoint(),shadowAngle:n.getShadowAngle()+Math.PI*1.5,strength:Math.sin(Math.PI*o)}}function ls(t,e,r,n,o){let a={nodes:1800,text:64e3};return{page:fd(t,e,r,n,o,a),budget:a,width:t.clientWidth,height:t.clientHeight}}function gd({reader:t,scroll:e,stage:r,records:n,from:o,to:a,fromBottom:i,toBottom:s,mode:l,direction:d,departing:f}){let g=Object.hasOwn(ss,l)?l:"slide",u=e.getBoundingClientRect(),p=t.getBoundingClientRect(),y=document.createElement("div");y.className=`dshr-flow-transition is-${g}`,y.dataset.direction=String(d),y.setAttribute("aria-hidden","true"),y.inert=!0,Object.assign(y.style,{left:`${u.left-p.left}px`,top:`${u.top-p.top}px`,width:`${e.clientWidth}px`,height:`${e.clientHeight}px`});let E=window.getComputedStyle(e);for(let D of Array.from(E))D.startsWith("--dshr-")&&y.style.setProperty(D,E.getPropertyValue(D));let v=f??ls(e,r,n,o,i),P=v.page,N=fd(e,r,n,a,s,v.budget);P.dataset.turnPage="old",N.dataset.turnPage="new",y.append(P,N);let w=[],A=0,C,S=!1,L,I=()=>{S=!0,cancelAnimationFrame(A),clearTimeout(C);for(let D of w)D.cancel();L?.(),y.remove()},b=(D,ee)=>{let $=D.animate(ee,{duration:ss[g],easing:Kp,fill:"both"});return $.finished.catch(()=>{}),w.push($),$};try{if(t.append(y),g==="slide")b(P,[{transform:"translateX(0)"},{transform:`translateX(${-d*100}%)`}]),b(N,[{transform:`translateX(${d*100}%)`},{transform:"translateX(0)"}]);else if(g==="cover"){let D=d>0?N:P,ee=d>0?P:N;ee.dataset.turnRole="stationary",D.dataset.turnRole="moving",ee.style.zIndex="0",D.style.zIndex="1",D.classList.add("has-edge-shadow"),b(D,d>0?[{transform:"translateX(100%)"},{transform:"translateX(0)"}]:[{transform:"translateX(0)"},{transform:"translateX(100%)"}])}else{let D=d>0?P:N,ee=d>0?N:P;D.style.zIndex="0",ee.style.zIndex="1";let $=document.createElement("div");$.className="dshr-turn-fold";let re=document.createElement("div");re.className="dshr-turn-fold-shadow",ee.append(re),y.append($);let ae=b(y,[{opacity:1},{opacity:1}]),z=H=>{let q=d>0?H:1-H;if(q<=0){ee.style.clipPath="inset(0 100% 0 0)",$.hidden=!0;return}if(q>=1){ee.style.clipPath="none",$.hidden=!0,re.hidden=!0;return}let ne=Zp(e.clientWidth,e.clientHeight,q);ne&&($.hidden=!1,re.hidden=!1,ee.style.clipPath=ne.reveal,$.style.clipPath=ne.fold,$.style.transform=ne.transform,ne.shadow&&Object.assign(re.style,{opacity:String(ne.strength*.16),transform:`translate3d(${ne.shadow.x}px,${ne.shadow.y-e.clientHeight}px,0) rotate(${ne.shadowAngle}rad)`}))};z(0);let oe=()=>{S||(z(ae.effect.getComputedTiming().progress??0),A=requestAnimationFrame(oe))};A=requestAnimationFrame(oe)}}catch(D){throw I(),D}let O=Promise.all(w.map(D=>D.finished.catch(()=>{})));return{overlay:y,width:e.clientWidth,height:e.clientHeight,cancel:I,async play(){try{await Promise.race([O,new Promise(D=>{L=D,C=setTimeout(D,ss[g]+300)})])}finally{I()}}}}var Ht=require("react/jsx-runtime"),bd='input, textarea, select, [contenteditable="true"]',xd=".dshr-modal-mask,.dshr-modal,.dshr-appearance-panel,.dshr-anno-panel,.dshr-ai,.dshr-selection,.dshr-online-modal,.dshr-anno-composer,.dshr-pdf-translation-panel",Qp=".dshr-topbar,.dshr-immersive-controls,.dshr-toc,.dshr-paged-controls,"+xd+","+bd,Jp=()=>window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,md=220,po=null;function vd({enabled:t,animation:e,bookMode:r=!1,bookFrame:n=!1,pdfMode:o=!1,frameTop:a=52,frameLeft:i=0,leftOffset:s,readerKey:l,canPrevChapter:d,canNextChapter:f,chapterEntry:g,onChapterTurn:u,onChapterEntered:p}){let[y,E]=Tr.default.useState({page:1,pages:1}),[v,P]=Tr.default.useState({top:48,bottom:56}),[N,w]=Tr.default.useState(null),A=Tr.default.useRef(null),C=Tr.default.useRef(null),S=Tr.default.useRef(null),L=Tr.default.useRef(0),I=Tr.default.useRef(-1/0),b=Tr.default.useRef({});if(Tr.default.useLayoutEffect(()=>{b.current={canPrevChapter:d,canNextChapter:f,chapterEntry:g,onChapterTurn:u,onChapterEntered:p,animation:e}}),Tr.default.useLayoutEffect(()=>{let re=S.current;if(S.current=null,!t)return;let ae=A.current?.closest(".dshr-reader"),z=ae?.querySelector(".dshr-content,.dshr-pdf-scroll");if(!z)return;let oe=z.classList.contains("dshr-pdf-scroll"),H=z.querySelector(".dshr-content__inner"),q=oe?null:b.current.chapterEntry,ne=q&&re?.entry===q?re.snapshot:null,F=q?.edge,de=q?.direction,be=-1/0,Ae=!1,te=Oc(),Me={scrollBehavior:z.style.scrollBehavior,overflowAnchor:z.style.overflowAnchor};z.style.scrollBehavior="auto",z.style.overflowAnchor="none",z.classList.add("dshr-paged-scroll");let Oe=!1,he=!0,Xe=!1,Le=0,vt=0,h=0,c=[],k=null,x=[],Y=null,se=[],ie=!oe&&H?document.createElement("div"):null;ie&&(ie.className="dshr-page-tail",ie.setAttribute("aria-hidden","true"),z.append(ie));let xe=()=>{z.dataset.readerNavigation=String(++L.current)};xe(),P({top:48,bottom:56});let ke=()=>{if(Oe)return;z.dataset.readerPage=String(te.page),z.dataset.readerPages=String(te.pages),z.dataset.readerTarget=String(te.top),E(pe=>pe.page===te.page&&pe.pages===te.pages?pe:{page:te.page,pages:te.pages});let Q=Fe(te.top);P(pe=>pe.bottom===Q?pe:{top:48,bottom:Q})},Fe=Q=>{let pe=Q+z.clientHeight-56,we=c.find(He=>He.top<pe-.5&&He.bottom>pe+.5&&He.bottom-He.top<=z.clientHeight-48-56&&He.top>Q+48);return we?Math.max(56,z.clientHeight-(we.top-Q)):56},Ce=()=>{Math.abs(z.scrollTop-te.top)>.5&&(z.scrollTop=te.top)},Ge=Q=>{if(Oe||oe||Ae||!H||!z.clientHeight||!z.clientWidth)return;if(Xe){he=!0;return}c=Lc(z,H),se=pd(z,H);let pe=Pc(c,z.clientHeight);if(ie){let He=z.scrollHeight-ie.offsetHeight,We=Math.max(0,Math.ceil(pe.at(-1)+z.clientHeight-He));ie.style.height=We+"px"}let we=Q;if(we==null&&(F==="start"?we=pe[0]:F==="end"?we=pe.at(-1):q?we=Math.max(0,Math.min(1,Number(q.scrollRatio)||0))*Math.max(0,z.scrollHeight-z.clientHeight):we=Dc(k,z,z.scrollTop)),te.replace(pe,we),he=!1,Ce(),k=Ki(c,te.top,z),ke(),q){let He=q;q=null,be=performance.now();let We=ne;ne=null,We&&We.width===z.clientWidth&&We.height===z.clientHeight&&Ve(te.top,He.direction,We),b.current.onChapterEntered?.(He,zo(z))}},Ue=Q=>{Oe||oe||Ae||(he=!0,Xe&&Y&&(Y.width!==z.clientWidth||Y.height!==z.clientHeight||Q?.type==="loadingdone")&&Y.cancel(),!vt&&(vt=requestAnimationFrame(()=>{vt=0,Xe||Ge()})))},ge=()=>{Le+=1,Y?.cancel(),Y=null,delete z.dataset.readerTurning,ae.classList.remove("dshr-is-turning"),Xe=!1,x.length=0},$e=()=>H?.animate&&!Jp(),Ve=async(Q,pe,we)=>{Xe=!0;let He=++Le;z.dataset.readerTurning="true";try{$e()&&(Y=gd({reader:ae,scroll:z,stage:H,records:se,from:Q,to:te.top,fromBottom:Fe(Q),toBottom:Fe(te.top),mode:b.current.animation,direction:pe,departing:we}),ae.classList.add("dshr-is-turning")),Ce(),Y&&await Y.play()}catch{}finally{!Oe&&He===Le&&(Y?.cancel(),Y=null,delete z.dataset.readerTurning,ae.classList.remove("dshr-is-turning"),Xe=!1,he?Ge():(Ce(),ke()),x.length&&pt(x.shift()))}},ze=Q=>{let{canPrevChapter:pe,canNextChapter:we,onChapterTurn:He}=b.current;if(!He||!(Q<0?pe:we))return;Ae=!0,x.length=0,xe();let We={edge:Q>0?"start":"end",direction:Q};if($e())try{S.current={entry:We,snapshot:ls(z,H,se,te.top,Fe(te.top))}}catch{}He(Q,We)},pt=(Q,pe=!1)=>{if(Oe||Ae)return;if(po=ae,Q=Q>0?1:-1,oe){z.dispatchEvent(new CustomEvent("dshr-pdf-page-turn",{detail:Q}));return}if(q){Ge();return}if(Q===de&&(pe||Xe||performance.now()-be<md))return;if(de=null,Xe){x.length<32&&x.push(Q);return}if(he&&Ge(),he||Xe)return;let we=te.top;if(!te.turn(Q)){ze(Q);return}F=null,k=Ki(c,te.top,z),xe(),ke(),Ve(we,Q)};C.current=pt;let st=()=>{oe||Xe||Ae||he||h||(h=requestAnimationFrame(()=>{h=0,!Oe&&!Xe&&!Ae&&!he&&Ce()}))},ve=Q=>{if(oe||!H||(Q.preventDefault(),Ae))return;ge(),de=null,F=null,ne=null;let pe=Q.detail||{},we=Number(pe.top)||0;pe.ratio!=null&&(we=Number(pe.ratio)*Math.max(0,z.scrollHeight-z.clientHeight)),pe.element&&H.contains(pe.element)&&(we=pe.element.getBoundingClientRect().top-z.getBoundingClientRect().top+z.scrollTop-48),xe(),k=null,Ge(Math.max(0,we))},wt=Q=>{if(Q.target instanceof Element&&Q.target.closest(Qp)||Q.ctrlKey||Q.metaKey||Math.abs(Q.deltaY)<8&&Math.abs(Q.deltaX)<8)return;Q.preventDefault();let pe=performance.now(),we=pe-I.current;I.current=pe,we>=md&&pt(Q.deltaY>0||Q.deltaX>0?1:-1)},hr=Q=>{if(Q.defaultPrevented||Q.repeat||Q.ctrlKey||Q.metaKey||Q.altKey||!z.isConnected||Q.target instanceof Element&&Q.target.closest(bd+","+xd+",.dshr-topbar--pdf,.dshr-immersive-controls"))return;let pe=Q.target instanceof Element&&Q.target.closest(".dshr-root"),we=Q.target instanceof Element&&Q.target.closest(".dshr-reader");if(we&&we!==ae||pe&&!pe.contains(ae)||!pe&&(po?.isConnected?po!==ae:[...document.querySelectorAll(".dshr-reader")].find(Te=>Te.getBoundingClientRect().height>0)!==ae))return;let He=window.getSelection?.();if(He&&!He.isCollapsed)return;let We=["ArrowDown","ArrowRight","PageDown"," "].includes(Q.key),et=["ArrowUp","ArrowLeft","PageUp"].includes(Q.key);!We&&!et||(Q.preventDefault(),pt(We?1:-1))},ur=Q=>{let{page:pe,pages:we}=Q.detail||{};Number.isFinite(pe)&&pe>=1&&Number.isFinite(we)&&we>=1&&E({page:pe,pages:we})},Tt=Q=>{pt(Number(Q.detail)>0?1:-1)},zt=()=>{po=ae};ae.addEventListener("pointerdown",zt),z.addEventListener("wheel",wt,{passive:!1}),z.addEventListener("scroll",st,{passive:!0}),z.addEventListener("dshr-flow-navigate",ve),z.addEventListener("dshr-page-turn",Tt),z.addEventListener("dshr-pdf-page-state",ur),window.addEventListener("keydown",hr);let _t,rr,Et,pr=()=>{if(Oe)return;let Q=z.getBoundingClientRect(),pe=ae.getBoundingClientRect(),we={right:Math.max(0,pe.right-Q.right),center:Q.left-pe.left+Q.width/2,top:Q.top-pe.top+Q.height/2,bottom:Math.max(0,pe.bottom-Q.bottom)};w(He=>He&&Object.keys(we).every(We=>Math.abs(He[We]-we[We])<.5)?He:we)};if(pr(),typeof ResizeObserver=="function"&&(Et=new ResizeObserver(pr),Et.observe(z),Et.observe(ae)),oe){let Q=Number(z.dataset.pdfPage),pe=Number(z.dataset.pdfPages);Q>0&&pe>0&&E({page:Q,pages:pe})}else Ge(),typeof ResizeObserver=="function"&&(_t=new ResizeObserver(Ue),_t.observe(z),_t.observe(H)),typeof MutationObserver=="function"&&(rr=new MutationObserver(Ue),rr.observe(H,{subtree:!0,childList:!0,characterData:!0})),H.addEventListener("load",Ue,!0),document.fonts?.addEventListener("loadingdone",Ue),document.fonts?.ready.then(Ue);return()=>{Oe=!0,ge(),cancelAnimationFrame(vt),cancelAnimationFrame(h),_t?.disconnect(),Et?.disconnect(),rr?.disconnect(),H?.removeEventListener("load",Ue,!0),document.fonts?.removeEventListener("loadingdone",Ue),z.removeEventListener("wheel",wt),z.removeEventListener("scroll",st),z.removeEventListener("dshr-flow-navigate",ve),z.removeEventListener("dshr-page-turn",Tt),z.removeEventListener("dshr-pdf-page-state",ur),window.removeEventListener("keydown",hr),ae.removeEventListener("pointerdown",zt),po===ae&&(po=null),z.classList.remove("dshr-paged-scroll"),Object.assign(z.style,Me);for(let Q of["readerPage","readerPages","readerTarget","readerNavigation","readerTurning"])delete z.dataset[Q];ie?.remove(),C.current=null}},[t,r,l]),!t)return null;let{page:O,pages:D}=y,ee=O<=1&&!d,$=O>=D&&!f&&!(o&&D<=1);return(0,Ht.jsxs)("div",{ref:A,className:`dshr-paged-controls${r?" is-book":""}${n?" has-book-frame":""}`,style:{"--dshr-paged-left":`${Math.max(10,Number(s)||10)}px`,...N?{"--dshr-paged-right":`${N.right+12}px`,"--dshr-paged-center":`${N.center}px`,"--dshr-paged-top":`${N.top}px`,"--dshr-paged-bottom":`${N.bottom+14}px`}:{},"--dshr-book-frame-top":`${Math.max(0,Number(a)||0)}px`,"--dshr-book-frame-left":`${Math.max(0,Number(i)||0)}px`,"--dshr-book-top-cover":`${v.top}px`,"--dshr-book-bottom-cover":`${v.bottom}px`},"aria-live":"polite",children:[n?(0,Ht.jsxs)(Ht.Fragment,{children:[(0,Ht.jsx)("div",{className:"dshr-book-mask dshr-book-mask--top","aria-hidden":"true"}),(0,Ht.jsx)("div",{className:"dshr-book-mask dshr-book-mask--bottom","aria-hidden":"true"})]}):null,(0,Ht.jsx)("button",{type:"button",className:"dshr-paged-btn dshr-paged-prev",onClick:re=>{ee||C.current?.(-1,re.detail>1)},disabled:ee,title:"\u4E0A\u4E00\u9875\uFF08\u2190 / \u2191 / PageUp\uFF09","aria-label":"\u4E0A\u4E00\u9875",children:(0,Ht.jsx)(oo,{size:20})}),(0,Ht.jsx)("button",{type:"button",className:"dshr-paged-btn dshr-paged-next",onClick:re=>{$||C.current?.(1,re.detail>1)},disabled:$,title:"\u4E0B\u4E00\u9875\uFF08\u2192 / \u2193 / PageDown / \u7A7A\u683C\uFF09","aria-label":"\u4E0B\u4E00\u9875",children:(0,Ht.jsx)(ao,{size:20})}),(0,Ht.jsxs)("div",{className:"dshr-paged-status",title:"\u7FFB\u9875\u8FDB\u5EA6",children:[(0,Ht.jsx)("b",{children:O}),(0,Ht.jsx)("span",{children:"/"}),(0,Ht.jsx)("em",{children:D})]})]})}var hn=Rt(require("react"),1);var fs=Object.freeze([Object.freeze({id:"serif",label:"\u5B8B\u4F53 / Serif",stack:'"Songti SC", "Noto Serif SC", "Source Han Serif SC", "STSong", "SimSun", "\u5B8B\u4F53", Georgia, "Times New Roman", serif'}),Object.freeze({id:"sans",label:"\u9ED1\u4F53 / Sans",stack:'"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", "Segoe UI", system-ui, -apple-system, sans-serif'}),Object.freeze({id:"kai",label:"\u6977\u4F53 / Kai",stack:'"Kaiti SC", "STKaiti", "KaiTi", "\u6977\u4F53", "Noto Serif SC", "Songti SC", "SimSun", serif'}),Object.freeze({id:"system",label:"\u7CFB\u7EDF\u9ED8\u8BA4",stack:'system-ui, -apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif'})]),gs=Object.freeze([Object.freeze({value:400,label:"\u5E38\u89C4"}),Object.freeze({value:500,label:"\u4E2D\u7B49"}),Object.freeze({value:600,label:"\u52A0\u7C97"})]),fx=Object.freeze([Object.freeze({id:"scroll",label:"\u6EDA\u52A8"}),Object.freeze({id:"book",label:"\u6A2A\u7248"})]),Td=Object.freeze([Object.freeze({id:"slide",label:"\u6A2A\u5411\u6ED1\u9875",hint:"\u524D\u540E\u4E24\u9875\u8FDE\u7EED\u5E73\u79FB\u8854\u63A5\uFF0C\u4E0D\u6DE1\u51FA\u6B63\u6587"}),Object.freeze({id:"cover",label:"\u4E66\u9875\u8986\u76D6",hint:"\u65B0\u9875\u4ECE\u53F3\u4FA7\u8986\u76D6\u9759\u6B62\u5E95\u9875\uFF0C\u56DE\u7FFB\u65F6\u63ED\u5F00\u5F53\u524D\u9875"}),Object.freeze({id:"flip",label:"3D \u4E66\u9875",hint:"\u4ECE\u53F3\u4E0B\u9875\u89D2\u5411\u4E66\u810A\u6298\u53E0\uFF0C\u5E26\u7EB8\u80CC\u4E0E\u52A8\u6001\u9634\u5F71"})]),Qa=Object.freeze([Object.freeze({id:"paper",label:"\u7EB8\u5F20",bg:"#fbf7ee",ink:"#2b2a26",muted:"#736f64",border:"rgba(43, 42, 38, 0.15)",accent:"#9a6b2f"}),Object.freeze({id:"white",label:"\u767D\u8272",bg:"#ffffff",ink:"#1f2328",muted:"#5c6370",border:"rgba(31, 35, 40, 0.13)",accent:"#3f5ce0"}),Object.freeze({id:"sepia",label:"\u7F8A\u76AE\u7EB8",bg:"#f2e6cf",ink:"#453322",muted:"#715f47",border:"rgba(69, 51, 34, 0.18)",accent:"#8f5a24"}),Object.freeze({id:"green",label:"\u62A4\u773C\u7EFF",bg:"#e3efe4",ink:"#263a2b",muted:"#556b5a",border:"rgba(38, 58, 43, 0.17)",accent:"#3d6a47"}),Object.freeze({id:"night",label:"\u591C\u95F4",bg:"#1c1e22",ink:"#e9e6dd",muted:"#a6a29a",border:"rgba(233, 230, 221, 0.16)",accent:"#d2a76b"}),Object.freeze({id:"custom",label:"\u81EA\u5B9A\u4E49"})]),Vt=Object.freeze({fontSize:18,lineHeight:1.85,fontFamily:"serif",fontWeight:400,contentWidth:760,tocWidth:260,readingMode:"scroll",pageAnimation:"slide",bookAnimation:"slide",brightness:1,backgroundPreset:"paper",customBackground:"#fbf7ee",textTone:"auto",backgroundImageKey:"",backgroundImageOpacity:.26,backgroundImageBlur:0}),Pe=Object.freeze({fontSize:Object.freeze({min:13,max:34,step:1}),lineHeight:Object.freeze({min:1.35,max:2.4,step:.05}),contentWidth:Object.freeze({min:520,max:1600,step:20}),tocWidth:Object.freeze({min:180,max:520,step:10}),brightness:Object.freeze({min:.6,max:1.2,step:.01}),backgroundImageOpacity:Object.freeze({min:0,max:.8,step:.01}),backgroundImageBlur:Object.freeze({min:0,max:12,step:1})}),Go=Object.freeze(gs.map(t=>t.value)),ef=Object.freeze(Qa.map(t=>t.id)),tf=new Map(Qa.map(t=>[t.id,t])),yd=new Map(fs.map(t=>[t.id,t])),rf=Object.freeze(["auto","dark","light"]),hs=Object.freeze({ink:"#181511",muted:"#6b6559",border:"rgba(32, 29, 24, 0.15)",tone:"dark"}),us=Object.freeze({ink:"#f8f5ec",muted:"#b3ada0",border:"rgba(245, 242, 233, 0.18)",tone:"light"}),nf="#8a5a24",of="#d8b06a",wd=Object.freeze({white:"#ffffff",black:"#000000",red:"#ff0000",lime:"#00ff00",blue:"#0000ff",yellow:"#ffff00",aqua:"#00ffff",cyan:"#00ffff",fuchsia:"#ff00ff",magenta:"#ff00ff",silver:"#c0c0c0",gray:"#808080",grey:"#808080",maroon:"#800000",olive:"#808000",green:"#008000",purple:"#800080",teal:"#008080",navy:"#000080",orange:"#ffa500",pink:"#ffc0cb",brown:"#a52a2a",gold:"#ffd700",beige:"#f5f5dc",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",turquoise:"#40e0d0",salmon:"#fa8072",coral:"#ff7f50",indigo:"#4b0082",violet:"#ee82ee",wheat:"#f5deb3",tan:"#d2b48c",snow:"#fffafa",linen:"#faf0e6"});function fo(t){return Math.max(0,Math.min(255,Math.round(t)))}function af(t){let e=t.slice(1);if(!/^[0-9a-f]+$/iu.test(e))return null;if(e.length===3||e.length===4){let[r,n,o]=e.slice(0,3).split("").map(a=>Number.parseInt(`${a}${a}`,16));return{r,g:n,b:o}}return e.length===6||e.length===8?{r:Number.parseInt(e.slice(0,2),16),g:Number.parseInt(e.slice(2,4),16),b:Number.parseInt(e.slice(4,6),16)}:null}function sf(t){let e=/^([+-]?(?:\d+\.?\d*|\.\d+))(%?)$/u.exec(t);if(!e)return null;let r=Number(e[1]);return Number.isFinite(r)?(e[2]==="%"&&(r=r/100*255),fo(r)):null}function lf(t){let e=t.replace(/\//gu," ").split(/[\s,]+/u).filter(Boolean);if(e.length<3)return null;let r=e.slice(0,3).map(sf);return r.some(n=>n===null)?null:{r:r[0],g:r[1],b:r[2]}}function cs(t,e,r){let n=r;return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function cf(t){let e=t.replace(/\//gu," ").split(/[\s,]+/u).filter(Boolean);if(e.length<3)return null;let r=Number.parseFloat(e[0]),n=Number.parseFloat(e[1]),o=Number.parseFloat(e[2]);if(![r,n,o].every(Number.isFinite))return null;let a=Math.max(0,Math.min(100,n))/100,i=Math.max(0,Math.min(100,o))/100,s=(r%360+360)%360/360;if(a===0){let f=fo(i*255);return{r:f,g:f,b:f}}let l=i<.5?i*(1+a):i+a-i*a,d=2*i-l;return{r:fo(cs(d,l,s+1/3)*255),g:fo(cs(d,l,s)*255),b:fo(cs(d,l,s-1/3)*255)}}function Ya(t){if(typeof t!="string")return null;let e=t.trim().toLowerCase();if(!e)return null;if(e.startsWith("#"))return af(e);if(e in wd)return Ya(wd[e]);let r=/^([a-z]+)\((.*)\)$/u.exec(e);if(!r)return null;let n=r[1],o=r[2];return n==="rgb"||n==="rgba"?lf(o):n==="hsl"||n==="hsla"?cf(o):null}function _d({r:t,g:e,b:r}){return`#${[t,e,r].map(n=>fo(n).toString(16).padStart(2,"0")).join("")}`}function ds(t){let e=t/255;return e<=.03928?e/12.92:((e+.055)/1.055)**2.4}function kd(t){let e=Ya(t);return e?.2126*ds(e.r)+.7152*ds(e.g)+.0722*ds(e.b):1}function Za(t,e){let r=kd(t),n=kd(e),o=Math.max(r,n),a=Math.min(r,n);return(o+.05)/(a+.05)}function ms(t,e="#ffffff"){let r=Ya(t);if(r)return _d(r);let n=Ya(e);return n?_d(n):"#ffffff"}function ps(t){let e=Za(hs.ink,t);return Za(us.ink,t)>e?{...us}:{...hs}}function Ja(t){let e=ps(t);return{ink:e.ink,muted:e.muted,border:e.border}}function zr(t,e,r,n){let o=Number(t);return Number.isFinite(o)?Math.max(e,Math.min(r,o)):n}function df(t){return ef.includes(t)?t:"paper"}function hf(t){return rf.includes(t)?t:"auto"}function uf(t){let e=Number(t);if(!Number.isFinite(e))return 400;let r=Math.max(Go[0],Math.min(Go[Go.length-1],e)),n=Go[0],o=Number.POSITIVE_INFINITY;for(let a of Go){let i=Math.abs(a-r);i<o&&(n=a,o=i)}return n}function pf(t){return(yd.get(t)||yd.get("serif")).stack}function ff(t){return t>=600?700:600}function bs(t){let e=t&&typeof t=="object"?t:{},r=df(e.backgroundPreset),n=ms(e.customBackground,Vt.customBackground),o=r==="custom"?null:tf.get(r),a=o?o.bg:n,i=ps(a);o&&(i={ink:o.ink,muted:o.muted,border:o.border});let s=hf(e.textTone);s==="dark"?i={...hs}:s==="light"&&(i={...us});let l=o?o.accent:ps(a).tone==="light"?of:nf,d=uf(e.fontWeight);return{preset:r,bg:a,ink:i.ink,muted:i.muted,border:i.border,accent:l,fontFamily:pf(e.fontFamily),fontWeight:d,headingWeight:ff(d),width:zr(e.contentWidth,Pe.contentWidth.min,Pe.contentWidth.max,Vt.contentWidth),brightness:zr(e.brightness,Pe.brightness.min,Pe.brightness.max,Vt.brightness),imageOpacity:zr(e.backgroundImageOpacity,Pe.backgroundImageOpacity.min,Pe.backgroundImageOpacity.max,Vt.backgroundImageOpacity),imageBlur:zr(e.backgroundImageBlur,Pe.backgroundImageBlur.min,Pe.backgroundImageBlur.max,Vt.backgroundImageBlur)}}function gf(t){return`url("${String(t).replace(/[\n\r\f]/gu," ").replace(/\\/gu,"\\\\").replace(/"/gu,'\\"')}")`}function ei(t,e){let r=bs(t),n=typeof e=="string"&&e.trim()?gf(e.trim()):"none";return{"--dshr-reader-bg":r.bg,"--dshr-reader-ink":r.ink,"--dshr-reader-muted":r.muted,"--dshr-reader-border":r.border,"--dshr-reader-accent":r.accent,"--dshr-reader-font":r.fontFamily,"--dshr-reader-weight":String(r.fontWeight),"--dshr-reader-heading-weight":String(r.headingWeight),"--dshr-reader-width":`${r.width}px`,"--dshr-reader-brightness":String(r.brightness),"--dshr-reader-image-opacity":String(r.imageOpacity),"--dshr-reader-image-blur":`${r.imageBlur}px`,"--dshr-reader-image":n}}var xs=String.raw`
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
`;var X=require("react/jsx-runtime");function go({size:t=15,children:e,viewBox:r="0 0 24 24"}){return(0,X.jsx)("svg",{width:t,height:t,viewBox:r,fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:e})}function mf(t){return(0,X.jsx)(go,{...t,children:(0,X.jsx)("path",{d:"m6 6 12 12M18 6 6 18"})})}function bf(t){return(0,X.jsxs)(go,{...t,children:[(0,X.jsx)("rect",{x:"3",y:"4.5",width:"18",height:"15",rx:"2.4"}),(0,X.jsx)("circle",{cx:"8.4",cy:"9.6",r:"1.5"}),(0,X.jsx)("path",{d:"m4 17 4.6-4.4a1.6 1.6 0 0 1 2.2 0l2.5 2.4 2.1-2a1.6 1.6 0 0 1 2.2 0L20 15.6"})]})}function xf(t){return(0,X.jsxs)(go,{...t,children:[(0,X.jsx)("path",{d:"M12 16V4"}),(0,X.jsx)("path",{d:"m7 9 5-5 5 5"}),(0,X.jsx)("path",{d:"M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15"})]})}function vf(t){return(0,X.jsxs)(go,{...t,children:[(0,X.jsx)("path",{d:"M4 7h16M9 7V5h6v2M7 7l.7 12.2A1.8 1.8 0 0 0 9.5 21h5a1.8 1.8 0 0 0 1.8-1.8L17 7"}),(0,X.jsx)("path",{d:"M10 11v6M14 11v6"})]})}function yf(t){return(0,X.jsxs)(go,{...t,children:[(0,X.jsx)("path",{d:"M20 11a8 8 0 1 0-2.3 6.3"}),(0,X.jsx)("path",{d:"M20 4v7h-7"})]})}function Sd(t){return(0,X.jsx)(go,{...t,children:(0,X.jsx)("path",{d:"m5 12 4.5 4.5L19 7"})})}var wf=Object.freeze([{id:"auto",label:"\u81EA\u52A8"},{id:"dark",label:"\u6DF1\u8272\u5B57"},{id:"light",label:"\u6D45\u8272\u5B57"}]),_f=Object.freeze(["fontSize","lineHeight","fontFamily","fontWeight","contentWidth","tocWidth","brightness","backgroundPreset","customBackground","textTone","backgroundImageOpacity","backgroundImageBlur"]),kf='button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';function Ed({label:t,value:e,options:r,onChange:n}){return(0,X.jsx)("div",{className:"dshr-appearance-segmented",role:"group","aria-label":t,children:r.map(o=>{let a=o.value!==void 0?o.value:o.id;return(0,X.jsx)("button",{type:"button",className:"dshr-appearance-segmented__item","aria-pressed":e===a,onClick:()=>n(a),children:o.label},String(a))})})}function Un({label:t,valueText:e,min:r,max:n,step:o,value:a,onChange:i,disabled:s,hint:l}){return(0,X.jsxs)("label",{className:`dshr-appearance-slider${s?" is-disabled":""}`,children:[(0,X.jsxs)("span",{className:"dshr-appearance-slider__head",children:[(0,X.jsx)("span",{children:t}),(0,X.jsx)("span",{className:"dshr-appearance-slider__value",children:e})]}),(0,X.jsx)("input",{type:"range",min:r,max:n,step:o,value:a,disabled:s,onChange:d=>i(Number(d.target.value)),"aria-label":t}),l?(0,X.jsx)("span",{className:"dshr-appearance-slider__hint",children:l}):null]})}function Ad({open:t,settings:e,backgroundImageUrl:r,onChange:n,onPickBackgroundImage:o,onClearBackgroundImage:a,onClose:i}){let s=hn.default.useRef(null),l=hn.default.useId(),[d,f]=hn.default.useState(!1),g=bs(e),u=!!r,p=ms(e.customBackground,Vt.customBackground),y=Ja(p).ink,E=Za(g.ink,g.bg),v=zr(e.fontSize,Pe.fontSize.min,Pe.fontSize.max,Vt.fontSize),P=zr(e.lineHeight,Pe.lineHeight.min,Pe.lineHeight.max,Vt.lineHeight),N=!u&&_f.every(O=>e[O]===Vt[O]),w=hn.default.useCallback(O=>{typeof n=="function"&&n({...e,...O})},[n,e]);if(hn.default.useEffect(()=>{if(!t)return;let O=D=>{D.key==="Escape"&&(D.preventDefault(),i?.())};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[t,i]),hn.default.useEffect(()=>{if(!t)return;let O=typeof document<"u"?document.activeElement:null,D=window.requestAnimationFrame(()=>{s.current?.focus({preventScroll:!0})});return()=>{window.cancelAnimationFrame(D),O instanceof HTMLElement&&O.isConnected&&O.focus({preventScroll:!0})}},[t]),hn.default.useEffect(()=>{if(!t){f(!1);return}},[t]),hn.default.useEffect(()=>{if(!d)return;let O=window.setTimeout(()=>f(!1),3200);return()=>window.clearTimeout(O)},[d]),!t)return null;let A=O=>{O.target===O.currentTarget&&i?.()},C=O=>{if(O.key!=="Tab"||!s.current)return;let D=[...s.current.querySelectorAll(kf)].filter(ae=>ae.offsetParent!==null||ae===document.activeElement);if(D.length===0)return;let ee=D[0],$=D[D.length-1],re=document.activeElement;O.shiftKey&&(re===ee||!s.current.contains(re))?(O.preventDefault(),$.focus()):!O.shiftKey&&re===$&&(O.preventDefault(),ee.focus())},S=()=>{if(!d){f(!0);return}f(!1),u&&a?.(),n?.({...e,...Vt})},I={...ei(e,r),fontSize:`${Math.min(16,Math.max(12,Math.round(v*.8)))}px`,lineHeight:String(P)},b=E>=4.5;return(0,X.jsx)("div",{className:"dshr-appearance-mask",onMouseDown:A,children:(0,X.jsxs)("aside",{className:"dshr-appearance-panel",role:"dialog","aria-modal":"true","aria-labelledby":l,tabIndex:-1,ref:s,onKeyDown:C,children:[(0,X.jsxs)("header",{className:"dshr-appearance-head",children:[(0,X.jsxs)("div",{className:"dshr-appearance-head__text",children:[(0,X.jsx)("strong",{id:l,children:"\u9605\u8BFB\u5916\u89C2"}),(0,X.jsx)("span",{children:"\u8C03\u6574\u6392\u7248\u3001\u5B57\u4F53\u4E0E\u80CC\u666F \xB7 \u4EC5\u4FDD\u5B58\u5728\u672C\u673A"})]}),(0,X.jsx)("button",{type:"button",className:"dshr-appearance-close",onClick:i,"aria-label":"\u5173\u95ED\u5916\u89C2\u8BBE\u7F6E",children:(0,X.jsx)(mf,{size:16})})]}),(0,X.jsxs)("div",{className:"dshr-appearance-body",children:[(0,X.jsxs)("div",{className:"dshr-appearance-preview",style:I,"aria-hidden":"true",children:[(0,X.jsx)("span",{className:"dshr-appearance-preview__badge",children:"\u5B9E\u65F6\u9884\u89C8"}),(0,X.jsxs)("div",{className:"dshr-appearance-preview__inner",children:[(0,X.jsx)("span",{className:"dshr-appearance-preview__kicker",children:"\u7B2C 1 \u7AE0"}),(0,X.jsx)("p",{className:"dshr-appearance-preview__title",children:"\u5C71\u5C45\u79CB\u669D"}),(0,X.jsx)("p",{className:"dshr-appearance-preview__text",children:"\u7A7A\u5C71\u65B0\u96E8\u540E\uFF0C\u5929\u6C14\u665A\u6765\u79CB\u3002\u660E\u6708\u677E\u95F4\u7167\uFF0C\u6E05\u6CC9\u77F3\u4E0A\u6D41\u3002"}),(0,X.jsx)("p",{className:"dshr-appearance-preview__quote",children:"\u7AF9\u55A7\u5F52\u6D63\u5973\uFF0C\u83B2\u52A8\u4E0B\u6E14\u821F\u3002"})]})]}),(0,X.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-bg`,children:[(0,X.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-bg`,children:"\u80CC\u666F"}),(0,X.jsx)("div",{className:"dshr-appearance-swatches",role:"group","aria-label":"\u80CC\u666F\u9884\u8BBE",children:Qa.map(O=>{let D=O.id==="custom"?p:O.bg,ee=O.id==="custom"?y:O.ink,$=g.preset===O.id;return(0,X.jsxs)("button",{type:"button",className:`dshr-appearance-swatch${$?" is-active":""}`,"aria-pressed":$,onClick:()=>w({backgroundPreset:O.id}),children:[(0,X.jsx)("span",{className:"dshr-appearance-swatch__chip",style:{background:D,color:ee},children:"\u6587"}),(0,X.jsx)("span",{className:"dshr-appearance-swatch__label",children:O.label})]},O.id)})}),(0,X.jsxs)("label",{className:"dshr-appearance-colorrow",children:[(0,X.jsx)("span",{children:"\u81EA\u5B9A\u4E49\u989C\u8272"}),(0,X.jsxs)("span",{className:"dshr-appearance-colorrow__control",children:[(0,X.jsx)("input",{type:"color",className:"dshr-appearance-color",value:p,"aria-label":"\u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272",onChange:O=>w({backgroundPreset:"custom",customBackground:O.target.value})}),(0,X.jsx)("code",{className:"dshr-appearance-colorrow__hex",children:p.toUpperCase()})]})]}),(0,X.jsxs)("div",{className:"dshr-appearance-field",children:[(0,X.jsxs)("div",{className:"dshr-appearance-field__head",children:[(0,X.jsx)("span",{children:"\u6587\u5B57\u8272\u8C03"}),(0,X.jsxs)("span",{className:`dshr-appearance-field__value${b?"":" is-warning"}`,children:["\u5BF9\u6BD4\u5EA6 ",E.toFixed(1),":1"]})]}),(0,X.jsx)(Ed,{label:"\u6587\u5B57\u8272\u8C03",value:e.textTone==="dark"||e.textTone==="light"?e.textTone:"auto",options:wf,onChange:O=>w({textTone:O})}),(0,X.jsxs)("p",{className:"dshr-appearance-hint",children:[b?"\u81EA\u52A8\u6A21\u5F0F\u4F1A\u6309\u80CC\u666F\u4EAE\u5EA6\u9009\u62E9\u6DF1\u8272\u6216\u6D45\u8272\u6587\u5B57\u3002":"\u5F53\u524D\u6587\u5B57\u4E0E\u80CC\u666F\u5BF9\u6BD4\u5EA6\u504F\u4F4E\uFF0C\u5EFA\u8BAE\u6539\u9009\u5176\u5B83\u80CC\u666F\u6216\u6587\u5B57\u8272\u8C03\u3002",u?" \u80CC\u666F\u56FE\u7247\u4F1A\u8FDB\u4E00\u6B65\u5F71\u54CD\u5B9E\u9645\u53EF\u8BFB\u6027\u3002":""]})]})]}),(0,X.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-image`,children:[(0,X.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-image`,children:"\u80CC\u666F\u56FE\u7247"}),(0,X.jsxs)("div",{className:"dshr-appearance-image",children:[(0,X.jsx)("span",{className:`dshr-appearance-image__thumb${u?" has-image":""}`,children:u?(0,X.jsx)("img",{src:r,alt:""}):(0,X.jsx)(bf,{size:20})}),(0,X.jsxs)("div",{className:"dshr-appearance-image__meta",children:[(0,X.jsx)("strong",{children:u?"\u5DF2\u9009\u62E9\u80CC\u666F\u56FE\u7247":"\u672A\u9009\u62E9\u80CC\u666F\u56FE\u7247"}),(0,X.jsx)("span",{children:"\u4F5C\u4E3A\u6587\u5B57\u4E0B\u65B9\u7684\u886C\u5E95\uFF0C\u4EC5\u4FDD\u5B58\u5728\u672C\u673A\u3002"})]}),(0,X.jsxs)("div",{className:"dshr-appearance-image__actions",children:[(0,X.jsxs)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--soft dshr-appearance-btn--sm",onClick:o,children:[u?(0,X.jsx)(Sd,{size:13}):(0,X.jsx)(xf,{size:13}),u?"\u66F4\u6362":"\u9009\u62E9\u56FE\u7247"]}),u?(0,X.jsxs)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--ghost dshr-appearance-btn--sm",onClick:a,children:[(0,X.jsx)(vf,{size:13})," \u79FB\u9664"]}):null]})]}),(0,X.jsx)(Un,{label:"\u56FE\u7247\u4E0D\u900F\u660E\u5EA6",valueText:`${Math.round(zr(e.backgroundImageOpacity,Pe.backgroundImageOpacity.min,Pe.backgroundImageOpacity.max,Vt.backgroundImageOpacity)*100)}%`,min:Pe.backgroundImageOpacity.min,max:Pe.backgroundImageOpacity.max,step:Pe.backgroundImageOpacity.step,value:zr(e.backgroundImageOpacity,Pe.backgroundImageOpacity.min,Pe.backgroundImageOpacity.max,Vt.backgroundImageOpacity),disabled:!u,onChange:O=>w({backgroundImageOpacity:O})}),(0,X.jsx)(Un,{label:"\u56FE\u7247\u6A21\u7CCA",valueText:`${Math.round(g.imageBlur)}px`,min:Pe.backgroundImageBlur.min,max:Pe.backgroundImageBlur.max,step:Pe.backgroundImageBlur.step,value:g.imageBlur,disabled:!u,onChange:O=>w({backgroundImageBlur:O})}),(0,X.jsx)(Un,{label:"\u9605\u8BFB\u4EAE\u5EA6",valueText:`${Math.round(g.brightness*100)}%`,min:Pe.brightness.min,max:Pe.brightness.max,step:Pe.brightness.step,value:g.brightness,onChange:O=>w({brightness:O})}),(0,X.jsx)("p",{className:"dshr-appearance-hint",children:"\u8C03\u4F4E\u4EAE\u5EA6\u53EF\u51CF\u5C11\u591C\u95F4\u5C4F\u5E55\u523A\u6FC0\uFF1B\u53EA\u5F71\u54CD\u6B63\u6587/PDF \u9605\u8BFB\u533A\uFF0C\u4E0D\u5F71\u54CD\u5DE5\u5177\u680F\u4E0E\u6279\u6CE8\u9762\u677F\u3002"})]}),(0,X.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-type`,children:[(0,X.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-type`,children:"\u5B57\u4F53"}),(0,X.jsx)("div",{className:"dshr-appearance-families",role:"group","aria-label":"\u5B57\u4F53",children:fs.map(O=>(0,X.jsx)("button",{type:"button",className:"dshr-appearance-family",style:{fontFamily:O.stack},"aria-pressed":g.fontFamily===O.stack,onClick:()=>w({fontFamily:O.id}),title:O.label,children:O.label},O.id))}),(0,X.jsxs)("div",{className:"dshr-appearance-field",children:[(0,X.jsx)("div",{className:"dshr-appearance-field__head",children:(0,X.jsx)("span",{children:"\u5B57\u91CD"})}),(0,X.jsx)(Ed,{label:"\u5B57\u91CD",value:g.fontWeight,options:gs.map(O=>({value:O.value,label:O.label})),onChange:O=>w({fontWeight:O})})]}),(0,X.jsx)(Un,{label:"\u5B57\u53F7",valueText:`${v}px`,min:Pe.fontSize.min,max:Pe.fontSize.max,step:Pe.fontSize.step,value:v,onChange:O=>w({fontSize:O})}),(0,X.jsx)(Un,{label:"\u884C\u9AD8",valueText:P.toFixed(2),min:Pe.lineHeight.min,max:Pe.lineHeight.max,step:Pe.lineHeight.step,value:P,onChange:O=>w({lineHeight:Math.round(O*100)/100})})]}),(0,X.jsxs)("section",{className:"dshr-appearance-section","aria-labelledby":`${l}-layout`,children:[(0,X.jsx)("h4",{className:"dshr-appearance-section__title",id:`${l}-layout`,children:"\u7248\u5F0F"}),(0,X.jsx)(Un,{label:"\u9605\u8BFB\u5BBD\u5EA6",valueText:`${Math.round(g.width)}px`,min:Pe.contentWidth.min,max:Pe.contentWidth.max,step:Pe.contentWidth.step,value:g.width,onChange:O=>w({contentWidth:O})}),(0,X.jsx)(Un,{label:"\u76EE\u5F55\u5BBD\u5EA6",valueText:`${Math.round(zr(e.tocWidth,Pe.tocWidth.min,Pe.tocWidth.max,Vt.tocWidth))}px`,min:Pe.tocWidth.min,max:Pe.tocWidth.max,step:Pe.tocWidth.step,value:zr(e.tocWidth,Pe.tocWidth.min,Pe.tocWidth.max,Vt.tocWidth),onChange:O=>w({tocWidth:O})}),(0,X.jsx)("p",{className:"dshr-appearance-hint",children:"\u63A7\u5236\u6B63\u6587\u6700\u5927\u5BBD\u5EA6\uFF1B\u76EE\u5F55\u5BBD\u5EA6\u53EF\u5728\u8FD9\u91CC\u8C03\uFF0C\u4E5F\u53EF\u4EE5\u62D6\u52A8\u76EE\u5F55\u53F3\u8FB9\u7F18\u3002\u76EE\u5F55\u6807\u9898\u4F1A\u5B8C\u6574\u6362\u884C\u663E\u793A\u3002"})]})]}),(0,X.jsxs)("footer",{className:"dshr-appearance-foot",children:[(0,X.jsxs)("button",{type:"button",className:`dshr-appearance-btn dshr-appearance-btn--ghost${d?" dshr-appearance-btn--danger":""}`,onClick:S,disabled:N&&!d,title:N?"\u5F53\u524D\u5DF2\u662F\u9ED8\u8BA4\u5916\u89C2":"\u6062\u590D\u9ED8\u8BA4\u5916\u89C2",children:[d?(0,X.jsx)(Sd,{size:14}):(0,X.jsx)(yf,{size:14}),d?"\u786E\u8BA4\u6062\u590D\uFF1F":"\u6062\u590D\u9ED8\u8BA4"]}),(0,X.jsx)("button",{type:"button",className:"dshr-appearance-btn dshr-appearance-btn--primary",onClick:i,children:"\u5B8C\u6210"})]})]})})}var ti=Rt(require("react"),1);var _e=require("react/jsx-runtime"),Tf={highlight:Dn,underline:Ma,note:wn},Sf=[{id:"all",label:"\u5168\u90E8"},...co.map(t=>({id:t.id,label:t.label}))];function Ef(t){let e=Number(t);if(!Number.isFinite(e)||e<=0)return"";try{return new Date(e).toLocaleDateString("zh-CN",{month:"numeric",day:"numeric"})}catch{return""}}function Af(t){let e=new Map,r=t&&Array.isArray(t.chapters)?t.chapters:[];for(let n=0;n<r.length;n+=1){let o=r[n];o&&o.id!=null&&e.set(String(o.id),{index:n,title:o.title||""})}return e}function Nd(t){return t?t.kind==="pdf"?!0:t.kind==="flow"?!1:Array.isArray(t.rects)&&!Array.isArray(t.ranges):!1}function Cd(t,e){if(!t)return null;if(t.chapterId!=null){let r=e.get(String(t.chapterId));if(r)return r}if(Number.isInteger(Number(t.chapterIndex))&&Number(t.chapterIndex)>=0){let r=Number(t.chapterIndex),o=(e.size>0?[...e.values()]:[]).find(a=>a.index===r);return{index:r,title:o?o.title:""}}return null}function Nf(t,e,r){let n=(Array.isArray(t)?t:[]).filter(i=>!(!i||r!=="all"&&i.style!==r)),o=new Map;for(let i=0;i<n.length;i+=1){let s=n[i],l=Nd(s),d,f,g;if(l){let u=Number(s.page),p=Number.isInteger(u)&&u>0;d=`pdf:${p?u:"unknown"}`,f=p?1e4+u:999999,g=p?`\u7B2C ${u} \u9875`:"PDF \u9875\u9762"}else{let u=Cd(s,e),p=u?u.index:null;d=`flow:${p??"unknown"}`,f=p??99999,g=p==null?"\u6B63\u6587":`\u7B2C ${p+1} \u7AE0${u&&u.title?` \xB7 ${u.title}`:""}`}o.has(d)||o.set(d,{key:d,order:f,title:g,items:[]}),o.get(d).items.push(s)}let a=[...o.values()];a.sort((i,s)=>i.order-s.order);for(let i=0;i<a.length;i+=1)a[i].items.sort((l,d)=>{let f=Array.isArray(l.ranges)&&l.ranges[0]&&l.ranges[0].start||0,g=Array.isArray(d.ranges)&&d.ranges[0]&&d.ranges[0].start||0;return f!==g?f-g:(Number(l.createdAt)||0)-(Number(d.createdAt)||0)});return a}function Cf({hasAny:t,filter:e}){return t?(0,_e.jsxs)("div",{className:"dshr-anno-panel__empty",children:[(0,_e.jsx)("p",{className:"dshr-anno-panel__empty-title",children:"\u6CA1\u6709\u5339\u914D\u7684\u6807\u6CE8"}),(0,_e.jsxs)("p",{className:"dshr-anno-panel__empty-text",children:["\u5F53\u524D\u7B5B\u9009\u662F\u300C",e==="all"?"\u5168\u90E8":qi(e),"\u300D\uFF0C\u5207\u6362\u7B5B\u9009\u770B\u770B\u5176\u4F59\u6807\u6CE8\u3002"]})]}):(0,_e.jsxs)("div",{className:"dshr-anno-panel__empty",children:[(0,_e.jsx)("span",{className:"dshr-anno-panel__empty-mark","aria-hidden":"true",children:(0,_e.jsx)(Ic,{size:44})}),(0,_e.jsx)("p",{className:"dshr-anno-panel__empty-title",children:"\u8FD8\u6CA1\u6709\u4EFB\u4F55\u6807\u6CE8"}),(0,_e.jsx)("p",{className:"dshr-anno-panel__empty-text",children:"\u5728\u9605\u8BFB\u65F6\u9009\u4E2D\u4E00\u6BB5\u6587\u5B57\uFF0C\u5C31\u53EF\u4EE5\u7528\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u6216\u4FBF\u7B7E\u628A\u5B83\u7559\u5728\u8FD9\u91CC\u3002"}),(0,_e.jsxs)("ol",{className:"dshr-anno-panel__steps",children:[(0,_e.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,_e.jsx)("span",{className:"dshr-anno-panel__step-index",children:"1"})," \u9009\u4E2D\u6B63\u6587\u4E2D\u7684\u4E00\u6BB5\u6587\u5B57"]}),(0,_e.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,_e.jsx)("span",{className:"dshr-anno-panel__step-index",children:"2"})," \u9009\u62E9\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u6216\u4FBF\u7B7E"]}),(0,_e.jsxs)("li",{className:"dshr-anno-panel__step",children:[(0,_e.jsx)("span",{className:"dshr-anno-panel__step-index",children:"3"})," \u4E4B\u540E\u56DE\u5230\u8FD9\u91CC\u56DE\u770B\u3001\u8DF3\u8F6C"]})]}),(0,_e.jsx)("p",{className:"dshr-anno-panel__hint",children:"PDF \u9875\u9762\u540C\u6837\u652F\u6301\uFF1A\u9009\u4E2D\u6587\u5B57\u540E\u70B9\u51FB\u300C\u6807\u6CE8\u300D\u5373\u53EF\u3002"})]})}function Id({open:t,annotations:e,book:r,onClose:n,onOpenAnnotation:o,onJump:a,onDelete:i}){let[s,l]=ti.default.useState("all"),d=ti.default.useMemo(()=>Af(r),[r]);if(ti.default.useEffect(()=>{if(!t||typeof document>"u")return;let E=v=>{v.key!=="Escape"||typeof n!="function"||document.querySelector(".dshr-anno-composer")||(v.preventDefault(),n())};return document.addEventListener("keydown",E,!0),()=>document.removeEventListener("keydown",E,!0)},[n,t]),!t)return null;let f=(Array.isArray(e)?e:[]).filter(Boolean),g={all:f.length};for(let E=0;E<co.length;E+=1){let v=co[E].id;g[v]=f.filter(P=>P.style===v).length}let u=Nf(f,d,s),p=s==="all"?f.length:f.filter(E=>E.style===s).length,y=(E,v)=>{typeof E=="function"&&E(v)};return(0,_e.jsxs)("aside",{className:"dshr-anno-panel","aria-label":"\u6807\u6CE8\u7B14\u8BB0\u9762\u677F",children:[(0,_e.jsxs)("header",{className:"dshr-anno-panel__head",children:[(0,_e.jsxs)("div",{className:"dshr-anno-panel__titles",children:[(0,_e.jsxs)("h3",{className:"dshr-anno-panel__title",children:["\u6807\u6CE8\u7B14\u8BB0",(0,_e.jsx)("span",{className:"dshr-anno-panel__count",children:f.length})]}),(0,_e.jsx)("span",{className:"dshr-anno-panel__sub",children:f.length>0?`${p} \u6761\u6807\u6CE8 \xB7 ${u.length} \u4E2A\u4F4D\u7F6E`:"\u9009\u4E2D\u6587\u5B57\u5373\u53EF\u6DFB\u52A0\u6807\u6CE8"})]}),(0,_e.jsx)("button",{type:"button",className:"dshr-anno-panel__close","aria-label":"\u5173\u95ED\u6807\u6CE8\u9762\u677F",onClick:()=>y(n),children:(0,_e.jsx)(Pa,{size:13})})]}),f.length>0?(0,_e.jsx)("div",{className:"dshr-anno-panel__filters",role:"tablist","aria-label":"\u6309\u6837\u5F0F\u7B5B\u9009\u6807\u6CE8",children:Sf.map(E=>{let v=s===E.id,P=g[E.id]||0;return(0,_e.jsxs)("button",{type:"button",role:"tab","aria-selected":v,className:`dshr-anno-panel__filter${v?" is-active":""}`,onClick:()=>l(E.id),children:[E.label,E.id==="all"?` ${P}`:P>0?` ${P}`:""]},E.id)})}):null,(0,_e.jsx)("div",{className:"dshr-anno-panel__list",children:u.length===0?(0,_e.jsx)(Cf,{hasAny:f.length>0,filter:s}):u.map(E=>(0,_e.jsxs)("section",{className:"dshr-anno-panel__group",children:[(0,_e.jsxs)("div",{className:"dshr-anno-panel__group-head",children:[(0,_e.jsx)("span",{className:"dshr-anno-panel__group-title",title:E.title,children:E.title}),(0,_e.jsx)("span",{className:"dshr-anno-panel__group-rule"}),(0,_e.jsx)("span",{className:"dshr-anno-panel__group-count",children:E.items.length})]}),E.items.map(v=>{let P=v.style||"highlight",N=Tf[P]||Dn,w=v.color||"#f5d76e",A=typeof v.quote=="string"?v.quote.trim():"",C=typeof v.note=="string"?v.note.trim():"",S=Cd(v,d),L=Nd(v)?Number(v.page)>0?`\u7B2C ${v.page} \u9875`:"PDF":S?`\u7B2C ${S.index+1} \u7AE0`:"\u6B63\u6587",I=Ef(v.updatedAt||v.createdAt);return(0,_e.jsxs)("article",{className:"dshr-anno-item",style:{"--dshr-anno-color":w},"data-anno-id":v.id||void 0,children:[(0,_e.jsxs)("button",{type:"button",className:"dshr-anno-item__main",onClick:()=>y(o,v.id),title:"\u7F16\u8F91\u8FD9\u6761\u6807\u6CE8",children:[(0,_e.jsxs)("div",{className:"dshr-anno-item__meta",children:[(0,_e.jsx)("span",{className:"dshr-anno-item__dot","aria-hidden":"true"}),(0,_e.jsxs)("span",{className:"dshr-anno-item__style",children:[(0,_e.jsx)(N,{size:12})," ",qi(P)]}),(0,_e.jsx)("span",{className:"dshr-anno-item__sep","aria-hidden":"true",children:"\xB7"}),(0,_e.jsx)("span",{className:"dshr-anno-item__location",children:L}),(0,_e.jsx)("span",{className:"dshr-anno-item__spacer"}),I?(0,_e.jsx)("span",{children:I}):null]}),(0,_e.jsx)("p",{className:"dshr-anno-item__quote",children:A||C||"\uFF08\u672A\u8BB0\u5F55\u9009\u4E2D\u6587\u5B57\uFF09"}),C&&C!==A?(0,_e.jsx)("p",{className:"dshr-anno-item__note",children:C}):null]}),(0,_e.jsxs)("div",{className:"dshr-anno-item__actions",children:[(0,_e.jsx)("button",{type:"button",className:"dshr-anno-item__action dshr-anno-item__action--jump",onClick:()=>y(a,v),title:"\u8DF3\u8F6C\u5230\u8FD9\u6761\u6807\u6CE8\u7684\u4F4D\u7F6E",children:"\u5B9A\u4F4D"}),(0,_e.jsx)("span",{className:"dshr-anno-item__spacer"}),(0,_e.jsx)("button",{type:"button",className:"dshr-anno-item__action dshr-anno-item__action--danger",onClick:()=>y(i,v),title:"\u5220\u9664\u8FD9\u6761\u6807\u6CE8",children:"\u5220\u9664"})]})]},v.id||`${E.key}:${A}`)})]},E.key))})]})}var Vr=Rt(require("react"),1);var Re=require("react/jsx-runtime"),Rd={highlight:Dn,underline:Ma,note:wn},If={highlight:"\u7528\u534A\u900F\u660E\u7684\u8272\u5E26\u8986\u76D6\u9009\u4E2D\u6587\u5B57\uFF0C\u53EF\u8C03\u7B14\u89E6\u7C97\u7EC6\u3002",underline:"\u5728\u9009\u4E2D\u6587\u5B57\u4E0B\u65B9\u753B\u4E00\u6761\u624B\u5199\u5F0F\u4E0B\u5212\u7EBF\u3002",note:"\u5728\u9009\u4E2D\u6587\u5B57\u65C1\u653E\u4E00\u679A\u4FBF\u7B7E\uFF0C\u8BB0\u5F55\u6B64\u523B\u7684\u60F3\u6CD5\u3002"},Md=2e3,vs=Fo[1].value;function ys(t){return t==="underline"?Tc:kc}function Od(t){return Object.prototype.hasOwnProperty.call(lo,t)?t:"highlight"}function Rf(t){let e=Number(t);if(!Number.isFinite(e))return vs;let r=vs,n=1/0;for(let o=0;o<Fo.length;o+=1){let a=Fo[o].value,i=Math.abs(a-e);i<n&&(r=a,n=i)}return r}function Pd(t){let e=t&&typeof t=="object"?t:{},r=Od(e.style),n=ys(r),o=n.find(a=>a.value===e.color);return{style:r,color:o?o.value:typeof e.color=="string"&&e.color?e.color:n[0].value,width:Rf(e.width),note:typeof e.note=="string"?e.note:"",quote:typeof e.quote=="string"?e.quote:""}}function Mf(t,e){if(!t||typeof t!="object")return`${e}:empty`;let r=typeof t.quote=="string"?t.quote:"";return[e,t.id||"",r,Array.isArray(t.ranges)?t.ranges.length:0,t.page==null?"":t.page,t.chapterId==null?"":t.chapterId].join("|")}function Pf(t){return`${Math.round(2+(Number(t)||vs)*.34)}px`}function Ld({open:t,draft:e,mode:r,onClose:n,onSave:o,onDelete:a}){let i=r==="edit",[s,l]=Vr.default.useState(()=>Pd(e)),d=Vr.default.useRef(""),f=Vr.default.useRef(null);Vr.default.useEffect(()=>{if(!t){d.current="";return}let C=Mf(e,r);d.current!==C&&(d.current=C,l(Pd(e)))},[e,r,t]),Vr.default.useEffect(()=>{if(!t||typeof window>"u")return;let C=window.setTimeout(()=>{let S=f.current;if(S)try{S.focus({preventScroll:!0}),S.setSelectionRange(S.value.length,S.value.length)}catch{}},30);return()=>window.clearTimeout(C)},[t]);let g=Vr.default.useCallback(C=>{l(S=>({...S,...C}))},[]),u=Vr.default.useCallback(C=>{let S=Od(C);l(L=>{let I=ys(S),b=I.some(O=>O.value===L.color);return{...L,style:S,color:b?L.color:I[0].value}})},[]),p=Vr.default.useCallback(()=>{if(!s.note.trim()&&!s.quote.trim()&&s.style==="note")return;let S={...e&&typeof e=="object"?e:{},style:s.style,color:s.color,width:s.width,note:s.note,quote:s.quote};typeof o=="function"&&o(S)},[e,o,s]);if(Vr.default.useEffect(()=>{if(!t||typeof document>"u")return;let C=S=>{if(S.key==="Escape"){S.preventDefault(),S.stopImmediatePropagation(),typeof n=="function"&&n();return}S.key==="Enter"&&(S.metaKey||S.ctrlKey)&&(S.preventDefault(),S.stopImmediatePropagation(),p())};return document.addEventListener("keydown",C,!0),()=>document.removeEventListener("keydown",C,!0)},[p,n,t]),!t)return null;let y=ys(s.style),E=Rd[s.style]||Dn,v=s.quote.trim(),P=!!(s.note.trim()||v||s.style!=="note"),N=s.style==="note"?"\u4FBF\u7B7E\u5185\u5BB9":"\u5907\u6CE8",w=s.style==="note"?"\u5199\u4E0B\u8FD9\u6BB5\u6587\u5B57\u7ED9\u4F60\u7684\u60F3\u6CD5\u2026":"\u53EF\u9009\uFF1A\u4E3A\u8FD9\u6761\u6807\u6CE8\u5199\u4E00\u6761\u5907\u6CE8\u2026",A=s.style==="underline"?"\u4E0B\u5212\u7EBF\u989C\u8272":s.style==="note"?"\u4FBF\u7B7E\u989C\u8272":"\u8367\u5149\u7B14\u989C\u8272";return(0,Re.jsx)("div",{className:"dshr-anno-composer-mask",role:"presentation",onMouseDown:C=>{C.target===C.currentTarget&&typeof n=="function"&&n()},children:(0,Re.jsxs)("div",{className:"dshr-anno-composer",role:"dialog","aria-modal":"true","aria-label":i?"\u7F16\u8F91\u6807\u6CE8":"\u6DFB\u52A0\u6807\u6CE8",onMouseDown:C=>C.stopPropagation(),children:[(0,Re.jsxs)("header",{className:"dshr-anno-composer__head",children:[(0,Re.jsxs)("div",{className:"dshr-anno-composer__titles",children:[(0,Re.jsx)("h3",{className:"dshr-anno-composer__title",children:i?"\u7F16\u8F91\u6807\u6CE8":"\u6DFB\u52A0\u6807\u6CE8"}),(0,Re.jsx)("span",{className:"dshr-anno-composer__sub",children:If[s.style]})]}),(0,Re.jsx)("button",{type:"button",className:"dshr-anno-composer__close","aria-label":"\u5173\u95ED\u6807\u6CE8\u7F16\u8F91\u5668",onClick:()=>{typeof n=="function"&&n()},children:(0,Re.jsx)(Pa,{size:13})})]}),(0,Re.jsxs)("div",{className:"dshr-anno-composer__body",children:[(0,Re.jsx)("div",{className:"dshr-anno-composer__tabs",role:"tablist","aria-label":"\u6807\u6CE8\u6837\u5F0F",children:co.map(C=>{let S=Rd[C.id]||Dn,L=s.style===C.id;return(0,Re.jsxs)("button",{type:"button",role:"tab","aria-selected":L,className:`dshr-anno-composer__tab${L?" is-active":""}`,onClick:()=>u(C.id),children:[(0,Re.jsx)(S,{size:14})," ",C.label]},C.id)})}),(0,Re.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Re.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Re.jsx)("span",{children:A}),(0,Re.jsx)("em",{children:s.style==="underline"?"\u7EB8\u4E0A\u7684\u58A8\u8272":"\u534A\u900F\u660E\u7B14\u89E6"})]}),(0,Re.jsx)("div",{className:"dshr-anno-composer__swatches",role:"radiogroup","aria-label":A,children:y.map(C=>{let S=s.color===C.value;return(0,Re.jsx)("button",{type:"button",role:"radio","aria-checked":S,"aria-label":`${C.label}\u8272`,title:`${C.label}\u8272`,className:`dshr-anno-swatch${S?" is-active":""}`,style:{"--swatch":C.value},onClick:()=>g({color:C.value}),children:C.label},C.id)})})]}),s.style==="highlight"?(0,Re.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Re.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Re.jsx)("span",{children:"\u7B14\u89E6\u7C97\u7EC6"}),(0,Re.jsx)("em",{children:"\u7EC6 / \u4E2D / \u5BBD"})]}),(0,Re.jsx)("div",{className:"dshr-anno-composer__widths",role:"radiogroup","aria-label":"\u7B14\u89E6\u7C97\u7EC6",children:Fo.map(C=>{let S=s.width===C.value;return(0,Re.jsxs)("button",{type:"button",role:"radio","aria-checked":S,className:`dshr-anno-width${S?" is-active":""}`,onClick:()=>g({width:C.value}),children:[(0,Re.jsx)("span",{className:"dshr-anno-width__bar",style:{height:Pf(C.value),background:s.color}}),C.label]},C.id)})})]}):null,(0,Re.jsxs)("div",{className:"dshr-anno-composer__field",children:[(0,Re.jsxs)("div",{className:"dshr-anno-composer__label",children:[(0,Re.jsx)("span",{children:N}),(0,Re.jsx)("em",{children:s.style==="note"?"\u53EF\u7559\u7A7A\uFF0C\u4EC5\u6807\u8BB0\u4F4D\u7F6E":"\u53EF\u9009"})]}),(0,Re.jsx)("textarea",{ref:f,className:"dshr-anno-composer__textarea",value:s.note,maxLength:Md,placeholder:w,"aria-label":N,onChange:C=>g({note:C.target.value})}),(0,Re.jsxs)("div",{className:"dshr-anno-composer__counter",children:[s.note.length," / ",Md]})]}),v?(0,Re.jsxs)("div",{className:"dshr-anno-composer__quote",style:{"--dshr-anno-color":s.color},children:[(0,Re.jsx)("span",{className:"dshr-anno-composer__quote-label",children:"\u9009\u4E2D\u6587\u5B57"}),(0,Re.jsx)("p",{className:"dshr-anno-composer__quote-text",children:v})]}):null,(0,Re.jsxs)("div",{className:`dshr-anno-composer__preview is-${s.style}`,style:{"--dshr-anno-color":s.color},children:[(0,Re.jsx)("span",{className:"dshr-anno-composer__preview-label",children:"\u6548\u679C\u9884\u89C8"}),(0,Re.jsx)("span",{className:"dshr-anno-composer__preview-text",children:v||"\u9009\u4E2D\u7684\u6587\u5B57\u4F1A\u8FD9\u6837\u663E\u793A"})]})]}),(0,Re.jsxs)("footer",{className:"dshr-anno-composer__foot",children:[i?(0,Re.jsx)("button",{type:"button",className:"dshr-anno-btn dshr-anno-btn--danger",onClick:()=>{typeof a=="function"&&a(e||{})},children:"\u5220\u9664"}):null,(0,Re.jsx)("span",{className:"dshr-anno-composer__spacer"}),(0,Re.jsx)("button",{type:"button",className:"dshr-anno-btn",onClick:()=>{typeof n=="function"&&n()},children:"\u53D6\u6D88"}),(0,Re.jsx)("button",{type:"button",className:"dshr-anno-btn dshr-anno-btn--primary",disabled:!P,onClick:p,title:"Ctrl / \u2318 + Enter \u4FDD\u5B58",children:i?"\u4FDD\u5B58\u4FEE\u6539":"\u4FDD\u5B58\u6807\u6CE8"})]})]})})}var iu=360,su=520;function lu(t){try{return t.toDataURL("image/jpeg",.84)}catch{return""}}function cb(t){let e=Number(t.naturalWidth||t.width)||0,r=Number(t.naturalHeight||t.height)||0;if(!e||!r)return"";let n=Math.min(iu/e,su/r,1),o=document.createElement("canvas");o.width=Math.max(1,Math.round(e*n)),o.height=Math.max(1,Math.round(r*n));let a=o.getContext("2d");return a.fillStyle="#fbf7ee",a.fillRect(0,0,o.width,o.height),a.drawImage(t,0,0,o.width,o.height),lu(o)}function db(t){return new Promise(e=>{let r=new Image;r.decoding="async",r.onload=()=>e(r),r.onerror=()=>e(null),r.src=t})}async function hb(t){if(!t||!String(t.type||"").startsWith("image/"))return"";let e=URL.createObjectURL(t);try{let r=await db(e);return r?cb(r):""}finally{URL.revokeObjectURL(e)}}async function ub(t,e){let r=await $a(t,{signal:e}),n,o,a=()=>{o?.cancel(),r.close()};e?.addEventListener("abort",a,{once:!0});try{if(e?.aborted)throw Gr();let i=await r.pdf.getPage(1);if(e?.aborted)throw Gr();let s=i.getViewport({scale:1}),l=Math.min(iu/s.width,su/s.height,1.5),d=i.getViewport({scale:l});if(n=document.createElement("canvas"),n.width=Math.max(1,Math.round(d.width)),n.height=Math.max(1,Math.round(d.height)),o=i.render({canvas:n,viewport:d,background:"#ffffff"}),o.onContinue=f=>setTimeout(()=>{e?.aborted?o.cancel():f()},16),await o.promise,e?.aborted)throw Gr();return lu(n)}finally{e?.removeEventListener("abort",a),await r.close(),n&&(n.width=0,n.height=0)}}async function cu(t,{signal:e}={}){if(e?.aborted)throw Gr();if(!t?.blob)return{};let r=String(t.format||"").toLowerCase();try{if(r==="pdf"){let n=await ub(t.blob,e);return n?{cover:n}:{}}if(["epub","mobi","azw","azw3"].includes(r)){let{parseBook:n}=await Promise.resolve().then(()=>(ll(),sl)),o=/\.[a-z0-9]+$/iu.test(t.title||"")?t.title:`${t.title||"book"}.${r}`,a=await n(t.blob,{fileName:o,mime:t.blob.type});try{let i="";if(a.cover)try{let s=await fetch(a.cover);i=await hb(await s.blob())}catch{i=""}return{...i?{cover:i}:{},...a.title?{title:a.title}:{},...a.author?{author:a.author}:{},...a.language?{language:a.language}:{}}}finally{a.dispose?.()}}}catch(n){if(e?.aborted)throw Gr();console.warn("[dsh-reader] cover generation failed",t.title,n)}return{}}var K=require("react/jsx-runtime"),wi="dsh-reader:last-book:v1",cl="dsh-reader:session-book:v1",du=44;function hu(t){let e=/^#?([0-9a-f]{6})$/iu.exec(String(t||"").trim());if(!e)return null;let r=e[1];return{r:parseInt(r.slice(0,2),16),g:parseInt(r.slice(2,4),16),b:parseInt(r.slice(4,6),16)}}function pb(t,e,r){let n=hu(t),o=hu(e);if(!n||!o)return e;let a=Math.max(0,Math.min(1,r));return`#${To(n.r*a+o.r*(1-a)).slice(1)}${To(n.g*a+o.g*(1-a)).slice(1)}${To(n.b*a+o.b*(1-a)).slice(1)}`}function To(t){return`#${Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0")}`}function fb(t){let e=document.createElement("canvas");e.width=32,e.height=32;let r=e.getContext("2d",{willReadFrequently:!0});if(!r)return"";r.drawImage(t,0,0,e.width,e.height);let n;try{n=r.getImageData(0,0,e.width,e.height).data}catch{return""}let o=new Map;for(let i=0;i<n.length;i+=4){let s=n[i+3];if(s<40)continue;let l=n[i],d=n[i+1],f=n[i+2],g=`${l>>5}:${d>>5}:${f>>5}`,u=o.get(g);u||(u={count:0,r:0,g:0,b:0},o.set(g,u)),u.count+=s,u.r+=l*s,u.g+=d*s,u.b+=f*s}let a=null;for(let i of o.values())(!a||i.count>a.count)&&(a=i);return a?To(a.r/a.count)+To(a.g/a.count).slice(1)+To(a.b/a.count).slice(1):""}function gb(t,e,r){return Math.max(e,Math.min(r,t))}var dl=class extends G.default.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,r){console.error("[dsh-reader]",e,r)}reset=()=>this.setState({error:null});render(){return this.state.error?(0,K.jsx)("div",{className:"dshr-root",children:(0,K.jsxs)("div",{className:"dshr-error-panel",children:[(0,K.jsx)("h3",{children:"\u9605\u8BFB\u5668\u9047\u5230\u4E86\u4E00\u4E2A\u95EE\u9898"}),(0,K.jsxs)("p",{children:[this.state.error?.message||"\u672A\u77E5\u9519\u8BEF","\u3002\u8FD9\u901A\u5E38\u662F\u6587\u6863\u683C\u5F0F\u6216\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u91CD\u65B0\u6253\u5F00\u6587\u6863\u901A\u5E38\u53EF\u4EE5\u6062\u590D\u3002"]}),(0,K.jsx)("div",{style:{display:"flex",gap:8,marginTop:14},children:(0,K.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--primary",onClick:()=>{this.reset(),this.props.onReset?.()},children:"\u8FD4\u56DE\u4E66\u67B6"})})]})}):this.props.children}};function mb(){let[t,e]=G.default.useState(""),r=G.default.useRef(0),n=G.default.useCallback((o,a=2800)=>{window.clearTimeout(r.current),e(String(o)),r.current=window.setTimeout(()=>e(""),a)},[]);return G.default.useEffect(()=>()=>window.clearTimeout(r.current),[]),[t,n]}function uu(){let[t,e]=G.default.useState([]),[r,n]=G.default.useState([]),o=G.default.useRef(0),[a,i]=G.default.useState(!0),[s,l]=G.default.useState(!1),[d,f]=G.default.useState(!1),[g,u]=G.default.useState("all"),[p,y]=G.default.useState(null),[E,v]=G.default.useState(!1),[P,N]=G.default.useState(""),[w,A]=G.default.useState(lc),[C,S]=G.default.useState(!1),[L,I]=G.default.useState(!1),[b,O]=G.default.useState(!1),[D,ee]=G.default.useState(!1),[$,re]=G.default.useState(!1),[ae,z]=G.default.useState(!1),oe=G.default.useRef(null),[H,q]=G.default.useState(null),[ne,F]=mb(),[{index:de,entry:be},Ae]=G.default.useState({index:0,entry:null}),[te,Me]=G.default.useState({}),[Oe,he]=G.default.useState(!0),[Xe,Le]=G.default.useState(!1),[vt,h]=G.default.useState(null),[c,k]=G.default.useState(null),[x,Y]=G.default.useState(null),[se,ie]=G.default.useState([]),[xe,ke]=G.default.useState(!1),[Fe,Ce]=G.default.useState(null),[Ge,Ue]=G.default.useState(!1),[ge,$e]=G.default.useState(null),[Ve,ze]=G.default.useState(null),[pt,st]=G.default.useState(null),[ve,wt]=G.default.useState(""),[hr,ur]=G.default.useState(0),[Tt,zt]=G.default.useState(""),[_t,rr]=G.default.useState(!1),[Et,pr]=G.default.useState(0),Q=G.default.useRef(null),pe=G.default.useRef({timer:0,latest:null}),we=G.default.useRef({token:0,controller:null}),He=G.default.useRef(null),We=G.default.useRef(w),et=G.default.useRef(t),Te=G.default.useRef({running:!1,attempted:new Set}),pn=G.default.useRef(!1),[nn,yr]=G.default.useState(null);He.current=p,We.current=w,et.current=t;let nr=G.default.useCallback(()=>{we.current.token+=1,we.current.controller?.abort()},[]);G.default.useLayoutEffect(()=>()=>nr(),[p?.record?.id,c,nr]);let fn=`${w.fontSize}:${w.lineHeight}:${w.fontFamily}:${w.fontWeight}:${w.tocWidth}:${w.contentWidth}:${ve?"img":"plain"}:${Et}`,gn=G.default.useMemo(()=>ei(w,ve),[w,ve]),Pt=G.default.useMemo(()=>{let T=gn["--dshr-reader-bg"]||w.customBackground||"#fbf7ee",M=Tt&&ve?pb(Tt,T,Number(w.backgroundImageOpacity)||0):T;return{"--dshr-immersive-surface":M,"--dshr-immersive-ink":Ja(M).ink}},[Tt,ve,gn,w.customBackground,w.backgroundImageOpacity]),gt=G.default.useCallback(async()=>{let T=++o.current;try{let[M,Z]=await Promise.all([$i(),Gl()]);e(M),T===o.current&&n(Z)}catch(M){F(M?.message||"\u8BFB\u53D6\u4E66\u67B6\u5931\u8D25\u3002")}finally{i(!1)}},[F]),Jn=G.default.useCallback(T=>{o.current+=1,n(T)},[]),Bt=G.default.useCallback(async T=>{if(!T){ie([]);return}try{ie(await tc(T))}catch(M){console.warn("[dsh-reader] annotations unavailable",M),ie([])}},[]);G.default.useEffect(()=>{gt()},[gt]),G.default.useEffect(()=>{if(a||p)return;let T=et.current.filter(Ne=>!Ne.cover&&["pdf","epub","mobi","azw","azw3"].includes(Ne.format)&&!Te.current.attempted.has(Ne.id));if(T.length===0)return;let M=Te.current,Z=new AbortController;M.controller=Z,M.running=!0;let Ye=setTimeout(()=>{(async()=>{for(let Ne of T){if(Z.signal.aborted)break;if(!M.attempted.has(Ne.id))try{let Qe=await Aa(Ne.id);if(!Qe||Z.signal.aborted)continue;let ct=await cu(Qe,{signal:Z.signal});if(Z.signal.aborted)break;M.attempted.add(Ne.id),(ct.cover||ct.title||ct.author||ct.language)&&(await io(Qe.id,ct),e(jt=>jt.map(sr=>sr.id===Qe.id?{...sr,...ct}:sr)))}catch(Qe){if(Z.signal.aborted)break;M.attempted.add(Ne.id),console.warn("[dsh-reader] cover generation failed",Ne.title,Qe)}}})().finally(()=>{M.controller===Z&&(M.running=!1)})},500);return()=>{clearTimeout(Ye),Z.abort()}},[a,p]),G.default.useEffect(()=>{cc(w)},[w]),G.default.useEffect(()=>{if(!p||w.readingMode==="book")return;let T=M=>{if(M.defaultPrevented||M.repeat||M.ctrlKey||M.metaKey||M.altKey||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(M.key)||M.target instanceof Element&&M.target.closest('input, textarea, select, [contenteditable="true"], .dshr-topbar--pdf, .dshr-immersive-controls, .dshr-modal-mask, .dshr-appearance-panel, .dshr-anno-panel, .dshr-ai, .dshr-selection, .dshr-anno-composer, .dshr-pdf-translation-panel'))return;let Z=window.getSelection?.();if(Z&&!Z.isCollapsed)return;let Ye=document.querySelector(".dshr-root .dshr-content")||document.querySelector(".dshr-root .dshr-pdf-scroll");if(!Ye)return;M.preventDefault();let Ne=Math.max(160,Math.round(Ye.clientHeight*.82)),Qe=M.key==="ArrowRight"||M.key==="ArrowDown";Ye.scrollBy({top:Qe?Ne:-Ne,behavior:"smooth"})};return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[p,w.readingMode]),G.default.useEffect(()=>{if(!ve){zt("");return}let T=!1,M=new Image;return M.onload=()=>{T||zt(fb(M))},M.onerror=()=>{T||zt("")},M.src=ve,()=>{T=!0}},[ve]),G.default.useEffect(()=>{let T=!1,M="";if(!w.backgroundImageKey){wt("");return}return(async()=>{try{let Z=await ic();if(!Z||T)return;M=URL.createObjectURL(Z),wt(M)}catch{T||wt("")}})(),()=>{T=!0,M&&URL.revokeObjectURL(M)}},[w.backgroundImageKey,hr]),G.default.useEffect(()=>{if(!c)return;let T=Z=>{Z?.type==="scroll"&&Z.target instanceof Element&&Z.target.closest(".dshr-pdf-translation-panel")||k(null)},M=Z=>{Z.key==="Escape"&&k(null)};return window.addEventListener("resize",T),window.addEventListener("keydown",M),document.addEventListener("scroll",T,!0),()=>{window.removeEventListener("resize",T),window.removeEventListener("keydown",M),document.removeEventListener("scroll",T,!0)}},[c]);let Ut=G.default.useCallback(async()=>{let T=pe.current.latest;if(T){pe.current.latest=null;try{await Hi(T.id,T.progress),e(M=>M.map(Z=>Z.id===T.id?{...Z,progress:T.progress,lastOpenedAt:Date.now()}:Z))}catch{}}},[gt]),on=G.default.useCallback((T,M)=>{T&&(Me(M),pe.current.latest={id:T,progress:M},!pe.current.timer&&(pe.current.timer=window.setTimeout(()=>{pe.current.timer=0,Ut()},700)))},[Ut]);G.default.useEffect(()=>()=>{window.clearTimeout(pe.current.timer),Ut()},[Ut]);let or=G.default.useCallback(async()=>{f(!0);try{let T=await jl();await gt();let M=[`\u6587\u732E ${T.counts.paper||0}`,`\u4E66\u7C4D ${T.counts.book||0}`];T.counts.document&&M.push(`\u6587\u6863 ${T.counts.document}`),F(T.changed>0?`\u4E66\u5355\u5DF2\u6574\u7406\uFF1A${M.join(" \xB7 ")}`:`\u4E66\u5355\u5DF2\u662F\u6700\u65B0\uFF1A${M.join(" \xB7 ")}`)}catch(T){F(T?.message||"\u81EA\u52A8\u6574\u7406\u5931\u8D25\u3002")}finally{f(!1)}},[gt,F]),Mr=G.default.useCallback(async(T,M)=>{let Z=["book","paper","document"],Ye=M||Z[(Z.indexOf(T.category||"document")+1)%Z.length];try{await Wl(T.id,Ye),await gt(),F(`\u300A${T.title||"\u6587\u6863"}\u300B\u5DF2\u5F52\u5165\u300C${Do(Ye)}\u300D\u3002`)}catch(Ne){F(Ne?.message||"\u4FEE\u6539\u5206\u7C7B\u5931\u8D25\u3002")}},[gt,F]),En=G.default.useCallback(T=>{A(M=>({...M,...T})),pr(M=>M+1)},[]),eo=G.default.useCallback(()=>{Q.current?.click()},[]),An=G.default.useCallback(async T=>{if(T){if(!String(T.type||"").startsWith("image/")){F("\u8BF7\u9009\u62E9\u56FE\u7247\u6587\u4EF6\uFF08JPG / PNG / WebP\uFF09\u3002");return}rr(!0);try{let M=T;try{let Z=await createImageBitmap(T),Ye=Math.min(1,2400/Math.max(Z.width,Z.height));if(Ye<1){let Ne=document.createElement("canvas");Ne.width=Math.round(Z.width*Ye),Ne.height=Math.round(Z.height*Ye),Ne.getContext("2d").drawImage(Z,0,0,Ne.width,Ne.height);let ct=await new Promise(jt=>Ne.toBlob(jt,"image/jpeg",.86));ct&&(M=ct)}Z.close?.()}catch{}await ac(M),A(Z=>({...Z,backgroundImageKey:"reader-background"})),ur(Z=>Z+1),F("\u80CC\u666F\u56FE\u7247\u5DF2\u4FDD\u5B58\uFF0C\u53EF\u8C03\u6574\u900F\u660E\u5EA6\u548C\u6A21\u7CCA\u5EA6\u3002")}catch(M){F(M?.message||"\u80CC\u666F\u56FE\u7247\u4FDD\u5B58\u5931\u8D25\u3002")}finally{rr(!1)}}},[F]),mn=G.default.useCallback(async()=>{try{await sc(),A(T=>({...T,backgroundImageKey:""})),wt(""),F("\u5DF2\u79FB\u9664\u80CC\u666F\u56FE\u7247\u3002")}catch(T){F(T?.message||"\u79FB\u9664\u80CC\u666F\u56FE\u7247\u5931\u8D25\u3002")}},[F]),ue=G.default.useCallback(async(T,M={})=>{if(M.rejected){F("\u6CA1\u6709\u53EF\u8BC6\u522B\u7684\u6587\u6863\u3002\u652F\u6301 PDF / EPUB / MOBI / TXT / Markdown / HTML\u3002");return}if(!T?.length)return;l(!0);let Z=[],Ye=[];for(let Ne of T)try{let Qe=await Ul(Ne);Z.push(Qe)}catch(Qe){Ye.push(`${Ne.name}: ${Qe?.message||"\u5BFC\u5165\u5931\u8D25"}`)}await gt(),l(!1),Ye.length>0&&F(Ye[0],4200),Z.length>0&&(F(Z.length===1?"\u5DF2\u52A0\u5165\u4E66\u67B6\u3002":`\u5DF2\u52A0\u5165 ${Z.length} \u4EFD\u6587\u6863\u3002`),lt(Z[0]))},[gt,F]),_=G.default.useCallback(async T=>{O(!0);try{let M=await vc(T);I(!1),await ue([M])}catch(M){F(M?.message||"\u5728\u7EBF\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u94FE\u63A5\u6216\u7A0D\u540E\u91CD\u8BD5\u3002",5200)}finally{O(!1)}},[ue,F]),W=G.default.useCallback(async()=>{if(re(!1),document.fullscreenElement===oe.current)try{await document.exitFullscreen()}catch{}},[]),ce=G.default.useCallback(async()=>{if($){await W();return}re(!0),he(!1)},[$,W]),tt=G.default.useCallback(async()=>{try{document.fullscreenElement===oe.current?await document.exitFullscreen():oe.current?.requestFullscreen&&await oe.current.requestFullscreen()}catch{F("\u6D4F\u89C8\u5668\u963B\u6B62\u4E86\u5168\u5C4F\uFF1B\u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528\u5F53\u524D\u7A97\u53E3\u7684\u6C89\u6D78\u6A21\u5F0F\u3002",3600)}},[F]);G.default.useEffect(()=>{let T=()=>{z(document.fullscreenElement===oe.current)};return document.addEventListener("fullscreenchange",T),()=>document.removeEventListener("fullscreenchange",T)},[]),G.default.useEffect(()=>{!p&&$&&W()},[p,$,W]),G.default.useEffect(()=>{if(!$||D)return;let T=M=>{M.key==="Escape"&&!M.defaultPrevented&&(M.preventDefault(),W())};return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[$,D,W]);let Ke=G.default.useCallback(()=>{try{localStorage.removeItem(wi)}catch{}try{sessionStorage.removeItem(cl)}catch{}yr(null),pe.current.timer&&(window.clearTimeout(pe.current.timer),pe.current.timer=0),Ut(),Le(!1),h(null),k(null),Y(null),ie([]),ke(!1),Ue(!1),Ce(null),$e(null),ze(null),st(null);let T=He.current?.book;if(T?.dispose)try{T.dispose()}catch{}y(null),Me({}),Ae({index:0,entry:null})},[Ut]),lt=G.default.useCallback(async T=>{v(!0),N(`\u6B63\u5728\u6253\u5F00\u300A${T.title||"\u6587\u6863"}\u300B\u2026`);try{let M=await Aa(T.id);if(!M?.blob)throw new Error("\u4E66\u67B6\u4E2D\u627E\u4E0D\u5230\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u53EF\u80FD\u5DF2\u88AB\u6E05\u7406\u3002\u8BF7\u91CD\u65B0\u5BFC\u5165\u3002");yr(null);try{localStorage.setItem(wi,M.id)}catch{}try{sessionStorage.setItem(cl,M.id)}catch{}if((M.format||On(M.title))==="pdf"){M.blob.size>24*1024*1024&&N(`\u6B63\u5728\u6253\u5F00\u5927\u578B PDF\u300A${M.title||T.title||"\u6587\u6863"}\u300B\u2026`);let sr=M.blob,Ze=M.progress||{},ro={...M,blob:null,blobName:M.blob.name||""};y({kind:"pdf",record:ro,data:sr}),Me({page:Ze.page||1,pages:Ze.pages||0,percent:Ze.percent||0}),Ae({index:0,entry:null}),he(!1),ke(!1),st(null),await Bt(M.id),v(!1),await Hi(M.id),await gt();return}let{parseBook:Ye}=await Promise.resolve().then(()=>(ll(),sl)),Ne=await Ye(M.blob,{fileName:M.title??T.title,mime:M.blob.type}),Qe={...M,title:Ne.title||M.title,author:Ne.author||M.author,language:Ne.language||M.language};(Qe.title!==M.title||Qe.author!==M.author||Qe.language!==M.language)&&(await io(M.id,{title:Qe.title,author:Qe.author,language:Qe.language}),await gt());let ct=M.progress||{},jt=gb(Number(ct.chapter)||0,0,Math.max(0,Ne.chapters.length-1));y({kind:"flow",record:Qe,book:Ne}),Ae({index:jt,entry:{scrollRatio:Number(ct.scrollRatio)||0}}),Me({chapter:jt,chapters:Ne.chapters.length,percent:Number(ct.percent)||(Ne.chapters.length?(jt+1)/Ne.chapters.length*100:0)}),he(!0),ke(!1),ze(null),await Bt(M.id),v(!1),hc(Ne.chapters.slice(0,3).map(sr=>sr.blocks.map(Ze=>Ze.text||"").join(" ")).join(" "))&&!We.current.autoTranslate&&F("\u68C0\u6D4B\u5230\u5916\u6587\u5185\u5BB9\u3002\u9876\u90E8\u300C\u5B9E\u65F6\u7FFB\u8BD1\u300D\u53EF\u4EE5\u968F\u65F6\u5F00\u542F\u3002",4200)}catch(M){v(!1),F(M?.message||"\u6253\u5F00\u6587\u6863\u5931\u8D25\u3002",5e3)}},[gt,Bt,F]);G.default.useEffect(()=>{if(a||p||pn.current||et.current.length===0)return;pn.current=!0;let T="";try{T=localStorage.getItem(wi)||""}catch{}if(!T){yr(null);return}let M=et.current.find(Ne=>Ne.id===T);if(!M){yr(null);try{localStorage.removeItem(wi)}catch{}return}let Z=Number(M.size)>24*1024*1024||Number(M.progress?.pages)>300,Ye=!1;try{Ye=sessionStorage.getItem(cl)===M.id}catch{}yr(M),!(Z&&!Ye)&&lt(M)},[a,p,lt]),G.default.useEffect(()=>{let T=()=>{document.visibilityState==="hidden"&&Ut()};return document.addEventListener("visibilitychange",T),()=>document.removeEventListener("visibilitychange",T)},[Ut]);let Ot=G.default.useCallback(async()=>{let T=H;if(T)try{He.current?.record?.id===T.id&&Ke(),await Vl(T.id),q(null),await gt(),F("\u5DF2\u4ECE\u4E66\u67B6\u5220\u9664\u3002")}catch(M){F(M?.message||"\u5220\u9664\u5931\u8D25\u3002")}},[Ke,H,gt,F]),Wt=G.default.useCallback(async()=>{try{Ke(),await Kl(),await gt(),S(!1),F("\u4E66\u67B6\u5DF2\u6E05\u7A7A\u3002")}catch(T){F(T?.message||"\u6E05\u7A7A\u4E66\u67B6\u5931\u8D25\u3002")}},[Ke,gt,F]),fr=G.default.useCallback((T,M)=>{h({id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:String(T||"").slice(0,8e3),context:String(M||"").slice(0,1600)}),Le(!0),ke(!1),k(null),Y(null)},[]),ar=G.default.useCallback((T,M="web")=>{let Z=String(T||"").trim().slice(0,500);if(!Z)return;let Ye=M==="scholar"?`https://scholar.google.com/scholar?q=${encodeURIComponent(Z)}`:`https://www.google.com/search?q=${encodeURIComponent(Z)}`;window.open(Ye,"_blank","noopener,noreferrer")||F("\u6D4F\u89C8\u5668\u62E6\u622A\u4E86\u65B0\u7A97\u53E3\u3002\u8BF7\u5141\u8BB8\u5F39\u51FA\u7A97\u53E3\uFF0C\u6216\u590D\u5236\u6587\u5B57\u540E\u624B\u52A8\u641C\u7D22\u3002")},[F]),mt=G.default.useCallback(async T=>{try{await navigator.clipboard.writeText(T),F("\u5DF2\u590D\u5236\u3002")}catch{F("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u3002")}},[F]),an=G.default.useCallback(T=>{if(nr(),!T?.text?.trim()){k(null);return}k({...T,source:"flow"}),Y(null)},[nr]),Nn=G.default.useCallback(T=>{if(nr(),!T?.text){k(null);return}k({...T,source:"pdf"}),Y(null)},[nr]),Cn=G.default.useCallback(async T=>{let M=T?.text?.trim();if(!M)return;nr();let Z=new AbortController,Ye=we.current.token,Ne=p?.record?.id;we.current.controller=Z;let Qe=()=>!Z.signal.aborted&&Ye===we.current.token&&He.current?.record?.id===Ne;Y({status:"loading"});try{let ct=await so([{id:"selection",text:M}],{context:T.context||"",title:p?.book?.title||p?.record?.title||"",signal:Z.signal});Qe()&&Y({status:"done",zh:ct.selection||""})}catch(ct){Qe()&&!Ln(ct)&&Y({status:"error",error:ct?.message||"\u7FFB\u8BD1\u5931\u8D25\u3002"})}},[p,nr]),_i=G.default.useCallback(T=>{let M=He.current?.record?.id;if(!M||!T?.text?.trim())return;let Z=He.current?.kind==="pdf";$e(null),Ce({bookId:M,kind:Z?"pdf":"flow",style:"highlight",color:"#f5d76e",width:9,note:"",quote:T.text.trim(),chapterId:Z?void 0:He.current?.book?.chapters?.[de]?.id,chapterIndex:Z?void 0:de,ranges:Z?void 0:T.ranges,page:Z?T.page:void 0,rects:Z?T.pageRects:void 0}),Ue(!0),k(null),Y(null)},[de]),to=G.default.useCallback(T=>{T&&($e(T),Ce({...T}),Ue(!0))},[]),sn=G.default.useCallback(T=>{let M=se.find(Z=>Z.id===T);M&&to(M)},[se,to]),gr=G.default.useCallback(()=>{Ue(!1),Ce(null),$e(null)},[]),ha=G.default.useCallback(async T=>{if(!(!T||!T.bookId))try{T.id?await nc(T.id,T):await rc(T),await Bt(T.bookId),gr(),pr(M=>M+1),F(T.note?.trim()?"\u6279\u6CE8\u5DF2\u4FDD\u5B58\u3002":"\u6807\u8BB0\u5DF2\u4FDD\u5B58\u3002")}catch(M){F(M?.message||"\u4FDD\u5B58\u6279\u6CE8\u5931\u8D25\u3002")}},[gr,Bt,F]),bn=G.default.useCallback(async T=>{if(T?.id)try{await oc(T.id),await Bt(He.current?.record?.id),gr(),pr(M=>M+1),F("\u6279\u6CE8\u5DF2\u5220\u9664\u3002")}catch(M){F(M?.message||"\u5220\u9664\u6279\u6CE8\u5931\u8D25\u3002")}},[gr,Bt,F]),ki=G.default.useCallback(T=>{if(!T)return;if(T.kind==="pdf"){st({id:T.id,page:T.page,token:Date.now()}),ke(!1);return}let M=Number.isFinite(T.chapterIndex)?T.chapterIndex:0;Ae(Z=>Z.index===M?Z:{index:M,entry:{edge:"start"}}),ze({id:T.id,blockId:T.ranges?.[0]?.blockId,token:Date.now()}),ke(!1)},[]),So=G.default.useCallback((T,M={edge:"start"})=>{T===de||T<0||T>=(p?.book?.chapters.length??0)||(ze(null),Ae({index:T,entry:M}))},[de,p]),xn=G.default.useCallback((T,M)=>{T!==be||p?.kind!=="flow"||(Ae(Z=>Z.entry===T?{index:Z.index,entry:null}:Z),on(p.record.id,Ba(de,p.book.chapters.length,M)))},[be,de,p,on]);function Ti(T){if(T.button!==0)return;T.preventDefault();let M=T.clientX,Z=Number(We.current.tocWidth)||260,Ye=document.body.style.cursor,Ne=document.body.style.userSelect;document.body.style.cursor="col-resize",document.body.style.userSelect="none",document.body.classList.add("dshr-toc-resizing");let Qe=jt=>{let sr=Math.max(180,Math.min(520,Math.round(Z+jt.clientX-M)));A(Ze=>({...Ze,tocWidth:sr}))},ct=()=>{window.removeEventListener("pointermove",Qe),window.removeEventListener("pointerup",ct),window.removeEventListener("pointercancel",ct),document.body.style.cursor=Ye,document.body.style.userSelect=Ne,document.body.classList.remove("dshr-toc-resizing")};window.addEventListener("pointermove",Qe),window.addEventListener("pointerup",ct),window.addEventListener("pointercancel",ct)}let ir=p?.book?.title||p?.record?.title||p?.record?.blob?.name||p?.record?.blobName||"",Si=p?.book?.author||p?.record?.author||"",ua=p?.kind==="flow"?`\u7B2C ${(de||0)+1} / ${p.book.chapters.length} \u7AE0`:"",In=p?p.kind==="pdf"?te.pages>0?(te.page||1)/te.pages*100:0:(de+1)/Math.max(1,p.book.chapters.length)*100:0;function Eo({iconTools:T,textTools:M}={}){let Z=p.kind==="pdf",Ye=(0,K.jsxs)("div",{className:"dshr-topbar__mode",role:"group","aria-label":"\u7FFB\u4E66\u65B9\u5F0F",children:[(0,K.jsx)("button",{type:"button",className:`dshr-topbar__mode-btn${w.readingMode!=="book"?" is-active":""}`,onClick:()=>A(Ze=>({...Ze,readingMode:"scroll"})),"aria-pressed":w.readingMode!=="book",title:"\u8FDE\u7EED\u6EDA\u52A8\u9605\u8BFB",children:(0,K.jsx)("span",{children:"\u6EDA\u52A8"})}),(0,K.jsx)("button",{type:"button",className:`dshr-topbar__mode-btn${w.readingMode==="book"?" is-active":""}`,onClick:()=>A(Ze=>({...Ze,readingMode:"book"})),"aria-pressed":w.readingMode==="book",title:"\u6A2A\u7248\u7EB8\u8D28\u4E66\u7FFB\u9875",children:(0,K.jsx)("span",{children:"\u6A2A\u7248"})}),w.readingMode==="book"?(0,K.jsx)("select",{className:"dshr-topbar__animation","aria-label":"\u7FFB\u9875\u52A8\u753B",value:w.bookAnimation||"slide",onChange:Ze=>A(ro=>({...ro,bookAnimation:Ze.target.value})),children:Td.map(Ze=>(0,K.jsx)("option",{value:Ze.id,children:Ze.label},Ze.id))}):null]}),Ne=(0,K.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon",onClick:()=>{ce()},title:"\u5207\u6362\u5230\u6C89\u6D78\u9605\u8BFB","aria-label":"\u8FDB\u5165\u6C89\u6D78\u6A21\u5F0F",children:(0,K.jsx)(Oi,{size:16})}),Qe=(0,K.jsxs)("button",{type:"button",className:"dshr-switch",role:"switch","aria-checked":w.autoTranslate,onClick:()=>A(Ze=>({...Ze,autoTranslate:!Ze.autoTranslate,...p.kind==="pdf"&&!Ze.autoTranslate?{hideTranslations:!1}:{}})),title:"\u5B9E\u65F6\u5BF9\u7167\u7FFB\u8BD1","aria-label":"\u5B9E\u65F6\u7FFB\u8BD1",children:[(0,K.jsx)("span",{className:"dshr-switch__track"}),(0,K.jsx)("span",{style:{whiteSpace:"nowrap"},children:"\u5B9E\u65F6\u7FFB\u8BD1"})]}),ct=(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${w.hideTranslations?"dshr-btn--outline":""}`,onClick:()=>A(Ze=>({...Ze,hideTranslations:!Ze.hideTranslations})),title:w.hideTranslations?"\u663E\u793A\u4E2D\u6587\u8BD1\u6587":"\u53EA\u770B\u539F\u6587\uFF08\u9690\u85CF\u5DF2\u7FFB\u8BD1\u5185\u5BB9\uFF09","aria-label":w.hideTranslations?"\u663E\u793A\u4E2D\u6587\u8BD1\u6587":"\u53EA\u770B\u539F\u6587\uFF0C\u9690\u85CF\u8BD1\u6587","aria-pressed":w.hideTranslations,children:w.hideTranslations?(0,K.jsx)(Bl,{size:16}):(0,K.jsx)(zl,{size:16})}),(0,K.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon",onClick:()=>{ee(!0),k(null)},title:"\u5B57\u4F53\u3001\u80CC\u666F\u4E0E\u7559\u767D","aria-label":"\u9605\u8BFB\u5916\u89C2",children:(0,K.jsx)(Oo,{size:16})}),(0,K.jsxs)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${xe?"dshr-btn--outline":""}`,onClick:()=>{ke(Ze=>!Ze),Le(!1),k(null)},title:"\u6279\u6CE8\u4E0E\u4FBF\u7B7E","aria-label":`\u6279\u6CE8\u4E0E\u4FBF\u7B7E\uFF0C\u5171 ${se.length} \u6761`,children:[(0,K.jsx)(ka,{size:16}),se.length>0?(0,K.jsx)("span",{className:"dshr-count-badge",children:se.length>99?"99+":se.length}):null]})]}),jt=(0,K.jsxs)("button",{type:"button",className:"dshr-btn dshr-btn--primary dshr-btn--sm",onClick:()=>fr("",""),title:"\u6253\u5F00 AI \u9605\u8BFB\u52A9\u624B",children:[(0,K.jsx)(yn,{size:14})," AI"]}),sr=(0,K.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:()=>S(!0),title:"\u9605\u8BFB\u8BBE\u7F6E","aria-label":"\u9605\u8BFB\u8BBE\u7F6E",children:(0,K.jsx)(xa,{size:16})});return(0,K.jsxs)("div",{className:`dshr-topbar${Z?" dshr-topbar--pdf":""}`,style:{position:"relative"},children:[(0,K.jsx)("div",{className:"dshr-progress","aria-hidden":"true",children:(0,K.jsx)("i",{style:{"--p":`${Math.min(100,In)}%`}})}),(0,K.jsxs)("div",{className:"dshr-topbar__identity",children:[(0,K.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--ghost",onClick:Ke,title:"\u8FD4\u56DE\u4E66\u67B6","aria-label":"\u8FD4\u56DE\u4E66\u67B6",children:(0,K.jsx)(Al,{size:17})}),(0,K.jsxs)("div",{className:"dshr-topbar__title",children:[(0,K.jsx)("strong",{title:ir,children:ir}),(0,K.jsx)("span",{children:[Si,Wr(p.record?.format),ua].filter(Boolean).join(" \xB7 ")})]})]}),Z?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)("div",{className:"dshr-topbar__tools dshr-topbar__icons",role:"group","aria-label":"\u9605\u8BFB\u5FEB\u6377\u64CD\u4F5C",children:[T,Ne,ct,sr]}),(0,K.jsxs)("div",{className:"dshr-topbar__tools dshr-topbar__labels",children:[M,Ye,Qe,jt]})]}):(0,K.jsxs)("div",{className:"dshr-topbar__tools",children:[(0,K.jsx)("button",{type:"button",className:`dshr-btn dshr-btn--icon ${Oe?"dshr-btn--outline":""}`,onClick:()=>he(Ze=>!Ze),title:"\u76EE\u5F55","aria-label":"\u76EE\u5F55","aria-pressed":Oe,children:(0,K.jsx)(Pi,{size:16})}),Ye,Ne,Qe,ct,jt,sr]})]})}function pa(T){let M=p.kind==="pdf";return(0,K.jsxs)("div",{className:`dshr-immersive-controls${M?" dshr-immersive-controls--pdf":""}`,role:"group","aria-label":"\u6C89\u6D78\u9605\u8BFB\u63A7\u4EF6",style:M?void 0:{height:du},children:[M?(0,K.jsx)("span",{className:"dshr-immersive-title",title:ir,children:ir}):null,T,(0,K.jsxs)("div",{className:"dshr-immersive-actions",children:[M?null:(0,K.jsxs)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>he(Z=>!Z),title:Oe?"\u6536\u8D77\u76EE\u5F55":"\u6253\u5F00\u76EE\u5F55","aria-pressed":Oe,children:[(0,K.jsx)(Pi,{size:15})," \u76EE\u5F55"]}),(0,K.jsxs)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>{ee(!0),k(null)},title:"\u9605\u8BFB\u5916\u89C2","aria-label":"\u9605\u8BFB\u5916\u89C2","aria-haspopup":"dialog","aria-expanded":D,autoFocus:!0,children:[(0,K.jsx)(Oo,{size:15})," \u5916\u89C2"]}),(0,K.jsxs)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>{tt()},title:ae?"\u9000\u51FA\u5168\u5C4F":"\u8FDB\u5165\u5168\u5C4F","aria-label":ae?"\u9000\u51FA\u5168\u5C4F":"\u8FDB\u5165\u5168\u5C4F","aria-pressed":ae,children:[ae?(0,K.jsx)(Dl,{size:15}):(0,K.jsx)(Oi,{size:15}),ae?"\u8FD8\u539F":"\u5168\u5C4F"]}),(0,K.jsxs)("button",{type:"button",className:"dshr-immersive-btn",onClick:()=>{W()},title:"\u9000\u51FA\u6C89\u6D78\u6A21\u5F0F\uFF08Esc\uFF09",children:[(0,K.jsx)(_r,{size:15})," \u9000\u51FA\u6C89\u6D78"]})]})]})}let Ao=p?(0,K.jsxs)(K.Fragment,{children:[Xe?(0,K.jsx)(id,{open:Xe,onClose:()=>Le(!1),seed:vt,onGoogle:ar,onToast:F}):null,xe?(0,K.jsx)(Id,{open:xe,annotations:se,book:p.book||p.record,onClose:()=>ke(!1),onOpenAnnotation:sn,onJump:ki,onDelete:T=>{bn(T)}}):null]}):null;return(0,K.jsx)(dl,{onReset:Ke,children:(0,K.jsxs)("div",{ref:oe,className:`dshr-root${$?" is-immersive":""}`,style:{...gn,...Pt,"--dshr-font-size":`${w.fontSize}px`,"--dshr-line-height":String(w.lineHeight),"--dshr-toc-width":`${w.tocWidth}px`},"data-reader-background":w.backgroundPreset,"data-hide-translations":w.hideTranslations?"true":"false","data-reading-mode":w.readingMode||"scroll",children:[(0,K.jsx)("input",{ref:Q,type:"file",accept:"image/*",className:"dshr-sr-only",tabIndex:-1,onChange:T=>{let M=T.target.files?.[0];T.target.value="",An(M)}}),p?(0,K.jsxs)("div",{className:"dshr-reader",children:[!$&&p.kind==="flow"?Eo():null,$&&p.kind==="flow"?pa():null,(0,K.jsxs)("div",{className:"dshr-body",children:[p.kind==="flow"?(0,K.jsxs)("aside",{className:`dshr-toc${Oe?"":" is-closed"}`,"aria-label":"\u76EE\u5F55",children:[(0,K.jsxs)("div",{className:"dshr-toc__head",children:[(0,K.jsx)("strong",{children:"\u76EE\u5F55"}),(0,K.jsx)("button",{type:"button",className:"dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost",onClick:()=>he(!1),"aria-label":"\u6536\u8D77\u76EE\u5F55",children:(0,K.jsx)(_r,{size:14})})]}),(0,K.jsx)("div",{className:"dshr-toc__list",children:p.book.chapters.map((T,M)=>(0,K.jsx)("button",{type:"button",className:`dshr-toc__item${M===de?" is-active":""}`,onClick:()=>So(M),title:T.title,children:T.title||`\u7B2C ${M+1} \u7AE0`},T.id||M))}),(0,K.jsx)("div",{className:"dshr-toc__resizer",role:"separator","aria-orientation":"vertical","aria-label":"\u62D6\u52A8\u8C03\u6574\u76EE\u5F55\u5BBD\u5EA6",title:"\u62D6\u52A8\u8C03\u6574\u76EE\u5F55\u5BBD\u5EA6\uFF1B\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4",onPointerDown:Ti,onDoubleClick:()=>A(T=>({...T,tocWidth:260}))})]}):null,p.kind==="pdf"?(0,K.jsx)(od,{data:p.data,documentId:p.record.id,fileName:ir,renderImmersiveToolbar:$?pa:void 0,renderTopbar:$?void 0:Eo,sidePanels:Ao,initialPage:p.record.progress?.page||1,autoTranslate:w.autoTranslate,hideTranslations:w.hideTranslations,paged:w.readingMode==="book",onHideTranslations:()=>A(T=>({...T,hideTranslations:!0})),annotations:se,onOpenAnnotation:sn,focusAnnotation:pt,onReady:({pageCount:T})=>Me(M=>({...M,page:M.page||1,pages:T,percent:T>0?(M.page||1)/T*100:M.percent||0})),onPageChange:T=>{let M=te.pages||0,Z={...te,page:T,pages:M,percent:M>0?T/M*100:0};Me(Z),on(p.record.id,Z)},onSelection:Nn},p.record.id):(0,K.jsx)(Fc,{book:p.book,chapterIndex:de,onChapterChange:So,settings:w,chapterEntry:be,onChapterEntered:xn,onSelection:an,onProgress:T=>{Me(T),on(p.record.id,T)},annotations:se,onOpenAnnotation:sn,focusAnnotation:Ve,layoutVersion:fn}),p.kind==="flow"?Ao:null]}),(0,K.jsx)(vd,{enabled:w.readingMode==="book",animation:w.bookAnimation,bookMode:!0,bookFrame:p.kind==="flow",pdfMode:p.kind==="pdf",frameTop:$?du:52,frameLeft:p.kind==="flow"&&Oe?w.tocWidth:0,leftOffset:p.kind==="flow"&&Oe?w.tocWidth+12:12,readerKey:`${p.record.id}:${p.kind}:${de}`,canPrevChapter:p.kind==="flow"&&de>0,canNextChapter:p.kind==="flow"&&de<(p.book?.chapters?.length||1)-1,chapterEntry:be,onChapterEntered:xn,onChapterTurn:(T,M)=>So(de+T,M)})]}):(0,K.jsx)(gc,{books:t,collections:r,onCollectionsChange:Jn,loading:a,resumeBook:nn,onResume:T=>{lt(T)},importing:s,organizing:d,categoryFilter:g,onCategoryFilter:u,onAutoOrganize:()=>{or()},onImport:ue,onOpen:T=>{lt(T)},onDelete:T=>q(T),onCycleCategory:(T,M)=>{Mr(T,M)},onSettings:()=>S(!0),onOnlineImport:()=>I(!0)}),E?(0,K.jsx)("div",{className:"dshr-modal-mask",style:{background:"color-mix(in srgb, var(--dshr-bg) 76%, transparent)",backdropFilter:"blur(5px)"},children:(0,K.jsxs)("div",{className:"dshr-loading",children:[(0,K.jsx)("div",{className:"dshr-loading__ring"}),(0,K.jsx)("span",{children:P})]})}):null,c&&!Xe&&!Ge?(0,K.jsx)(sd,{selection:c,translation:x,onTranslate:T=>{Cn(T)},onAnnotate:_i,onExplain:T=>fr(T.text,T.context),onGoogle:ar,onCopy:mt,onClose:()=>{k(null),Y(null)},onRetry:()=>{Cn(c)}}):null,(0,K.jsx)(hd,{open:L,busy:b,onClose:()=>{b||I(!1)},onSubmit:T=>{_(T)}}),C?(0,K.jsx)(ld,{settings:w,onChange:A,onClose:()=>S(!1),onOpenAppearance:()=>{S(!1),ee(!0)},onClearLibrary:()=>{Wt()}}):null,D?(0,K.jsx)(Ad,{open:D,settings:w,backgroundImageUrl:ve,onChange:En,onPickBackgroundImage:eo,onClearBackgroundImage:()=>{mn()},onClose:()=>ee(!1)}):null,H?(0,K.jsx)(cd,{book:H,onCancel:()=>q(null),onConfirm:()=>{Ot()}}):null,Ge&&Fe?(0,K.jsx)(Ld,{open:Ge,draft:Fe,mode:ge?"edit":"create",onClose:gr,onSave:T=>{ha(T)},onDelete:ge?()=>{bn(ge)}:void 0}):null,(0,K.jsx)(dd,{message:ne})]})})}var pu=String.raw`
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
`;var Qn=require("react/jsx-runtime"),bb="dsh-reader",xb=["slots","layout"],hl="reader";function vb({size:t=18}){return(0,Qn.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,Qn.jsx)("path",{d:"M4 5.4A2.4 2.4 0 0 1 6.4 3H20v16.1H6.4A2.4 2.4 0 0 0 4 21.5V5.4Z",stroke:"currentColor",strokeWidth:"1.65",strokeLinejoin:"round"}),(0,Qn.jsx)("path",{d:"M4 18.4a2.4 2.4 0 0 1 2.4-2.3H20",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round"}),(0,Qn.jsx)("path",{d:"M8.2 7h7.6M8.2 10.2h4.6",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round"}),(0,Qn.jsx)("circle",{cx:"17.2",cy:"18.6",r:"2.1",fill:"currentColor",opacity:".9"})]})}function yb(t){t.effect(()=>{let e=document.createElement("style");return e.dataset.dshReader="styles",e.textContent=`${pu}
${rd}
${xs}
${fu}`,document.head.appendChild(e),()=>e.remove()},"dsh-reader: styles"),t.slots.inject("main",function*(){yield t.slots.register({name:"main",key:hl},uu)}),t.slots.inject("sidebar.panellist",()=>t.slots.register({name:"sidebar.panellist",id:hl,order:10,label:()=>"\u9605\u8BFB"},vb))}

return module.exports;
}});

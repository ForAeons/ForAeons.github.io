"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[212],{212:function(e,t,r){r.d(t,{default:function(){return f}});var n=r(5601),i=r.n(n),o=r(2265);let l=e=>{var t;let{filePath:r}=e,n=(null===(t=r.split("\\").pop())||void 0===t?void 0:t.split("/").pop())||"",i=r.split(n).shift(),o=r.split(".").pop();return{path:i,filename:n.substring(0,n.lastIndexOf("."))||n,extension:o||""}},a=function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],{filename:i,path:o,extension:a}=l({filePath:e});if(!["JPG","JPEG","WEBP","PNG","AVIF","GIF"].includes(a.toUpperCase()))return e;let s=a;["JPG","JPEG","PNG","GIF"].includes(a.toUpperCase())&&(s="WEBP");let u=o;"/"!=(null==u?void 0:u.substr(-1))&&(u+="/");let d=e.includes("_next/static/media");r&&(u=r.endsWith("/")&&u&&u.startsWith("/")?r+u.slice(1):r.endsWith("/")||!u||u.startsWith("/")?r+u:r+"/"+u);let c="".concat(d?r?r+"/":"":u).concat("nextImageExportOptimizer","/").concat(i,"-opt-").concat(t,".").concat(s.toUpperCase());return n||"/"===c.charAt(0)||(c="/"+c),c},s=e=>{let{src:t,width:r,basePath:n}=e;return a(t.replace(/^(https?|ftp):\/\//,"").replace(/[/\\:*?"<>|#%]/g,"_").replace(/[\x00-\x1F\x7F]/g,"").trim(),r,n,!0)},u=e=>{let{src:t,width:r,basePath:n}=e,i="object"==typeof t,o=i?t.src:t,l=i&&t.width||void 0;if(i&&l&&r>l){let e=[640,750,828,1080,1200,1920,2048,3840,16,32,48,64,96,128,256,384],t=null;for(let r=0;r<e.length;r++)Number(e[r])>=l&&(null===t||Number(e[r])<t)&&(t=Number(e[r]));if(null!==t)return a(o,t,n)}return o.startsWith("http")?s({src:o,width:r,basePath:n}):a(o,r,n)},d=e=>{let{src:t}=e,r="object"==typeof t?t.src:t;return r.startsWith("http")||"/"===r.charAt(0)||(r="/"+r),r},c=(0,o.forwardRef)((e,t)=>{let{src:r,priority:n=!1,loading:l,className:c,width:f,height:p,onLoad:g,unoptimized:m,placeholder:h="blur",basePath:b="",alt:y="",blurDataURL:v,style:_,onError:w,...j}=e,[x,S]=(0,o.useState)(!1),P=(0,o.useMemo)(()=>{if(v)return v;let e="object"==typeof r?r.src:r;return!0===m?e:e.startsWith("http")?s({src:e,width:10,basePath:b}):a(e,10,b)},[v,r,m,b]),C="object"==typeof r?r.src.endsWith(".svg"):r.endsWith(".svg"),[E,O]=(0,o.useState)(!1),I="blur"===h&&!C&&P&&P.startsWith("/")&&!E?{backgroundSize:(null==_?void 0:_.objectFit)||"cover",backgroundPosition:(null==_?void 0:_.objectPosition)||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("'.concat(P,'")')}:void 0,z="object"==typeof r,M=z?r.src:r;return b&&!z&&M.startsWith("/")&&(M=b+M),!b||z||M.startsWith("/")||(M=b+"/"+M),o.createElement(i(),{ref:t,alt:y,...j,...f&&{width:f},...p&&{height:p},...l&&{loading:l},...c&&{className:c},...g&&{onLoad:g},...h&&{placeholder:I||E?"empty":h},...m&&{unoptimized:m},...n&&{priority:n},...C&&{unoptimized:!0},style:{..._,...I},loader:x||!0===m?d:e=>u({src:r,width:e.width,basePath:b}),blurDataURL:P,onError:e=>{S(!0),O(!0),w&&w(e)},onLoad:e=>{0===e.target.naturalWidth&&S(!0),O(!0),g&&g(e)},src:z?r:M})});c.displayName="ExportedImage";var f=c},8173:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let n=r(9920),i=r(1452),o=r(7437),l=i._(r(2265)),a=n._(r(4887)),s=n._(r(8321)),u=r(497),d=r(7103),c=r(3938);r(2301);let f=r(291),p=n._(r(1241)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,r,n,i,o,l){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function h(e){let[t,r]=l.version.split(".",2),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:a,width:s,decoding:u,className:d,style:c,fetchPriority:f,placeholder:p,loading:g,unoptimized:b,fill:y,onLoadRef:v,onLoadingCompleteRef:_,setBlurComplete:w,setShowAltText:j,sizesInput:x,onLoad:S,onError:P,...C}=e;return(0,o.jsx)("img",{...C,...h(f),loading:g,width:s,height:a,decoding:u,"data-nimg":y?"fill":"1",className:d,style:c,sizes:i,srcSet:n,src:r,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(P&&(e.src=e.src),e.complete&&m(e,p,v,_,w,b,x))},[r,p,v,_,w,P,b,x,t]),onLoad:e=>{m(e.currentTarget,p,v,_,w,b,x)},onError:e=>{j(!0),"empty"!==p&&w(!0),P&&P(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,n),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let v=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(f.RouterContext),n=(0,l.useContext)(c.ImageConfigContext),i=(0,l.useMemo)(()=>{let e=g||n||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:a,onLoadingComplete:s}=e,m=(0,l.useRef)(a);(0,l.useEffect)(()=>{m.current=a},[a]);let h=(0,l.useRef)(s);(0,l.useEffect)(()=>{h.current=s},[s]);let[v,_]=(0,l.useState)(!1),[w,j]=(0,l.useState)(!1),{props:x,meta:S}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:v,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{...x,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:_,setShowAltText:j,sizesInput:e.sizes,ref:t}),S.priority?(0,o.jsx)(y,{isAppRouter:!r,imgAttributes:x}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2901:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(9920)._(r(2265)).default.createContext({})},687:function(e,t){function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},497:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(2301);let n=r(1564),i=r(7103);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,s,u,{src:d,sizes:c,unoptimized:f=!1,priority:p=!1,loading:g,className:m,quality:h,width:b,height:y,fill:v=!1,style:_,overrideSrc:w,onLoad:j,onLoadingComplete:x,placeholder:S="empty",blurDataURL:P,fetchPriority:C,layout:E,objectFit:O,objectPosition:I,lazyBoundary:z,lazyRoot:M,...k}=e,{imgConf:A,showAltText:R,blurComplete:W,defaultLoader:G}=t,N=A||i.imageConfigDefault;if("allSizes"in N)a=N;else{let e=[...N.deviceSizes,...N.imageSizes].sort((e,t)=>e-t),t=N.deviceSizes.sort((e,t)=>e-t);a={...N,allSizes:e,deviceSizes:t}}if(void 0===G)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let D=k.loader||G;delete k.loader,delete k.srcSet;let F="__next_img_default"in D;if(F){if("custom"===a.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:r,...n}=t;return e(n)}}if(E){"fill"===E&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!c&&(c=t)}let U="",L=l(b),B=l(y);if("object"==typeof(r=d)&&(o(r)||void 0!==r.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,P=P||e.blurDataURL,U=e.src,!v){if(L||B){if(L&&!B){let t=L/e.width;B=Math.round(e.height*t)}else if(!L&&B){let t=B/e.height;L=Math.round(e.width*t)}}else L=e.width,B=e.height}}let T=!p&&("lazy"===g||void 0===g);(!(d="string"==typeof d?d:U)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,T=!1),a.unoptimized&&(f=!0),F&&d.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(C="high");let J=l(h),V=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:I}:{},R?{}:{color:"transparent"},_),H=W||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:L,heightInt:B,blurWidth:s,blurHeight:u,blurDataURL:P||"",objectFit:V.objectFit})+'")':'url("'+S+'")',q=H?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},$=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:l,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,l),d=s.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:s.map((e,n)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:a({config:t,src:r,quality:o,width:s[d]})}}({config:a,src:d,unoptimized:f,width:L,quality:J,sizes:c,loader:D});return{props:{...k,loading:T?"lazy":g,fetchPriority:C,width:L,height:B,decoding:"async",className:m,style:{...V,...q},sizes:$.sizes,srcSet:$.srcSet,src:w||$.src},meta:{unoptimized:f,priority:p,placeholder:S,fill:v}}}},8321:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return m},defaultHead:function(){return c}});let n=r(9920),i=r(1452),o=r(7437),l=i._(r(2265)),a=n._(r(5960)),s=r(2901),u=r(6590),d=r(687);function c(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(2301);let p=["name","httpEquiv","charSet","itemProp"];function g(e,t){let{inAmpMode:r}=t;return e.reduce(f,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,l=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){l=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!l)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,l.useContext)(s.AmpStateContext),n=(0,l.useContext)(u.HeadManagerContext);return(0,o.jsx)(a.default,{reduceComponentsToState:g,headManager:n,inAmpMode:(0,d.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1564:function(e,t){function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:l}=e,a=n?40*n:t,s=i?40*i:r,u=a&&s?"viewBox='0 0 "+a+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},3938:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let n=r(9920)._(r(2265)),i=r(7103),o=n.default.createContext(i.imageConfigDefault)},7103:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},5601:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return a}});let n=r(9920),i=r(497),o=r(8173),l=n._(r(1241));function a(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=o.Image},1241:function(e,t){function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},5960:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(2265),i="undefined"==typeof window,o=i?()=>{}:n.useLayoutEffect,l=i?()=>{}:n.useEffect;function a(e){let{headManager:t,reduceComponentsToState:r}=e;function a(){if(t&&t.mountedInstances){let i=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}if(i){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),a()}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}}}]);
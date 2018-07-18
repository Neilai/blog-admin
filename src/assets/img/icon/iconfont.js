(function(window){var svgSprite='<svg><symbol id="icon-huiyuanbiaoqian" viewBox="0 0 1024 1024"><path d="M748.8 499.2c12.8-12.8 12.8-32 0-44.8l-272-272c-12.8-12.8-32-12.8-44.8 0L99.2 512l64 252.8 252.8 64 332.8-329.6zM521.6 137.6l272 272c38.4 38.4 38.4 99.2 0 134.4L448 889.6c-6.4 6.4-19.2 9.6-32 9.6l-288-73.6c-12.8-3.2-19.2-12.8-22.4-22.4L32 512c-3.2-9.6 0-22.4 9.6-32L387.2 137.6c35.2-38.4 96-38.4 134.4 0z m121.6 44.8c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0l272 272c38.4 38.4 38.4 99.2 0 134.4L598.4 905.6c-12.8 12.8-32 12.8-44.8 0-12.8-12.8-12.8-32 0-44.8l361.6-361.6c12.8-12.8 12.8-32 0-44.8l-272-272z m-416 518.4c12.8 12.8 32 12.8 44.8 0 12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 35.2 0 44.8z"  ></path></symbol><symbol id="icon-huiyuannan" viewBox="0 0 1024 1024"><path d="M800 640h-576c-89.6 0-160 70.4-160 160v64c0 54.4 41.6 96 96 96h704c54.4 0 96-41.6 96-96v-64c0-89.6-70.4-160-160-160z m96 224c0 19.2-12.8 32-32 32h-704c-19.2 0-32-12.8-32-32v-64c0-54.4 41.6-96 96-96h576c54.4 0 96 41.6 96 96v64zM288 352c0 124.8 99.2 224 224 224s224-99.2 224-224c19.2 0 32-12.8 32-32v-64c0-19.2-12.8-32-32-32v-32c0-70.4-57.6-128-128-128h-192c-70.4 0-128 57.6-128 128v32c-19.2 0-32 12.8-32 32v64c0 19.2 12.8 32 32 32z m64-160c0-35.2 28.8-64 64-64h192c35.2 0 64 28.8 64 64v160c0 89.6-70.4 160-160 160s-160-70.4-160-160v-160z"  ></path></symbol><symbol id="icon-quanbu" viewBox="0 0 1024 1024"><path d="M512 131.2l-345.6 188.8 345.6 169.6 345.6-169.6-345.6-188.8z m16-64l416 224c22.4 12.8 22.4 44.8 0 57.6l-416 208c-9.6 3.2-19.2 3.2-28.8 0l-416-208c-22.4-12.8-22.4-44.8 0-57.6l416-224c6.4-3.2 19.2-3.2 28.8 0z m-419.2 416l403.2 198.4 403.2-198.4c16-6.4 35.2 0 41.6 16 6.4 16 0 35.2-16 41.6l-428.8 214.4-428.8-214.4c-16-6.4-22.4-25.6-16-41.6 9.6-16 28.8-22.4 41.6-16z m0 192l403.2 198.4 403.2-198.4c16-6.4 35.2 0 41.6 16 6.4 16 0 35.2-16 41.6l-428.8 214.4-428.8-214.4c-16-6.4-22.4-25.6-16-41.6 9.6-16 28.8-22.4 41.6-16z"  ></path></symbol><symbol id="icon-zaixianzhidao" viewBox="0 0 1024 1024"><path d="M854.4 758.4c-6.4 6.4-12.8 9.6-22.4 9.6h-576c-19.2 0-32 12.8-32 32v64c0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6h576c19.2 0 32 12.8 32 32s-12.8 32-32 32h-576c-54.4 0-96-41.6-96-96v-704c0-54.4 41.6-96 96-96h512c54.4 0 96 41.6 96 96v576c0 9.6-3.2 16-9.6 22.4z m-54.4-54.4v-544c0-19.2-12.8-32-32-32h-512c-19.2 0-32 12.8-32 32v550.4c9.6-3.2 19.2-6.4 32-6.4h544z m-384-448h192c35.2 0 64 28.8 64 64v64c0 35.2-28.8 64-64 64h-192c-35.2 0-64-28.8-64-64v-64c0-35.2 28.8-64 64-64z m0 64v64h192v-64h-192z"  ></path></symbol><symbol id="icon-tuichu" viewBox="0 0 1024 1024"><path d="M195.2 195.2c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8-73.6 70.4-115.2 169.6-115.2 272 0 211.2 172.8 384 384 384s384-172.8 384-384c0-108.8-44.8-211.2-124.8-281.6-12.8-12.8-12.8-32-3.2-44.8 12.8-12.8 32-12.8 44.8-3.2 92.8 83.2 144 201.6 144 329.6 0 246.4-201.6 448-448 448s-448-201.6-448-448c6.4-121.6 54.4-233.6 137.6-316.8z m316.8-131.2c19.2 0 32 12.8 32 32v384c0 19.2-12.8 32-32 32s-32-12.8-32-32v-384c0-19.2 12.8-32 32-32z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)
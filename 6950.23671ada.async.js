"use strict";(self.webpackChunk_ant_design_charts_site=self.webpackChunk_ant_design_charts_site||[]).push([[6950],{56637:function(t,e,n){n.d(e,{$:function(){return _}});var r=n(67294),o=n(1413),a=n(4942),l=n(91),c=n(94184),i=n.n(c),u=function(t){var e=t.prefixCls,n=t.icon,o=t.title,a=t.items,l=void 0===a?[]:a,c=t.style,u=t.className;return r.createElement("div",{className:i()("".concat(e,"-column"),u),style:c},(o||n)&&r.createElement("h2",null,n&&r.createElement("span",{className:"".concat(e,"-column-icon")},n),o),l.map((function(t,n){var o=t.LinkComponent||"a";return r.createElement("div",{className:i()("".concat(e,"-item"),t.className),style:t.style,key:n},r.createElement(o,{href:t.url,to:"string"!=typeof o?t.url:void 0,target:t.openExternal?"_blank":void 0,rel:t.openExternal?"noopener noreferrer":void 0},t.icon&&r.createElement("span",{className:"".concat(e,"-item-icon")},t.icon),t.title),t.description&&r.createElement(r.Fragment,null,r.createElement("span",{className:"".concat(e,"-item-separator")},"-"),r.createElement("span",{className:"".concat(e,"-item-description")},t.description)))})))},s=["prefixCls","className","style","bottom","columns","maxColumnsPerRow","backgroundColor","columnLayout","theme"],m=function(t){var e=t.prefixCls,n=void 0===e?"rc-footer":e,c=t.className,m=t.style,f=t.bottom,p=t.columns,d=t.maxColumnsPerRow,h=t.backgroundColor,b=t.columnLayout,g=t.theme,y=void 0===g?"dark":g,v=(0,l.Z)(t,s),E=i()("".concat(n),c,(0,a.Z)({},"".concat(n,"-").concat(y),!!y)),Z="number"==typeof d&&d>0;return r.createElement("footer",(0,o.Z)((0,o.Z)({},v),{},{className:E,style:(0,o.Z)((0,o.Z)({},m),{},{backgroundColor:h})}),r.createElement("section",{className:"".concat(n,"-container")},p&&p.length>0&&r.createElement("section",{className:"".concat(n,"-columns"),style:{justifyContent:b,flexWrap:Z?"wrap":void 0}},p.map((function(t,e){var a=t.title,l=t.icon,c=t.style,i=t.className,s=t.items,m=void 0===s?[]:s,f=(0,o.Z)({},c);return Z&&(f.flex="0 0 ".concat(100/(d+1)+.1,"%")),r.createElement(u,{key:e,prefixCls:n,title:a,icon:l,items:m,style:f,className:i})})))),f&&r.createElement("section",{className:"".concat(n,"-bottom")},r.createElement("div",{className:"".concat(n,"-bottom-container")},f)))},f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7zm247.7 497h-59.9l-75.1 50.4-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-.1-8.1c0-.6-.2-14.7-2.3-29.1-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2-12.9-.7c-.8 0-19.6-.9-41.4 10.6-35.7 19-51.7 56.4-58.7 84.4-18.4 73.1-44.6 123.9-55.7 145.6-3.3 6.4-5.3 10.2-6.2 12.8-1.8 4.9-.8 9.8 2.8 13 10.5 9.5 38.2-2.9 38.5-3 .6-.3 1.3-.6 2.2-1 13.9-6.3 55.1-25 69.8-84.5h56.7c.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4-3.7 7-7.3 14-10.7 20.8-21.3 42.2-43.4 85.8-126.3 153.6-3.6 2.8-7 8-4.8 13.7 2.4 6.3 9.3 9.1 24.6 9.1 5.4 0 11.8-.3 19.4-1 49.9-4.4 100.8-18 135.1-87.6 17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c.8-1.9 19-46.3 5.1-95.9l-.5-1.8-108.1-123-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z"}}]},name:"zhihu",theme:"outlined"},p=n(84089),d=function(t,e){return r.createElement(p.Z,(0,o.Z)((0,o.Z)({},t),{},{ref:e,icon:f}))};d.displayName="ZhihuOutlined";var h=r.forwardRef(d),b=n(1210),g=n(25035),y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M457.3 543c-68.1-17.7-145 16.2-174.6 76.2-30.1 61.2-1 129.1 67.8 151.3 71.2 23 155.2-12.2 184.4-78.3 28.7-64.6-7.2-131-77.6-149.2zm-52 156.2c-13.8 22.1-43.5 31.7-65.8 21.6-22-10-28.5-35.7-14.6-57.2 13.7-21.4 42.3-31 64.4-21.7 22.4 9.5 29.6 35 16 57.3zm45.5-58.5c-5 8.6-16.1 12.7-24.7 9.1-8.5-3.5-11.2-13.1-6.4-21.5 5-8.4 15.6-12.4 24.1-9.1 8.7 3.2 11.8 12.9 7 21.5zm334.5-197.2c15 4.8 31-3.4 35.9-18.3 11.8-36.6 4.4-78.4-23.2-109a111.39 111.39 0 00-106-34.3 28.45 28.45 0 00-21.9 33.8 28.39 28.39 0 0033.8 21.8c18.4-3.9 38.3 1.8 51.9 16.7a54.2 54.2 0 0111.3 53.3 28.45 28.45 0 0018.2 36zm99.8-206c-56.7-62.9-140.4-86.9-217.7-70.5a32.98 32.98 0 00-25.4 39.3 33.12 33.12 0 0039.3 25.5c55-11.7 114.4 5.4 154.8 50.1 40.3 44.7 51.2 105.7 34 159.1-5.6 17.4 3.9 36 21.3 41.7 17.4 5.6 36-3.9 41.6-21.2v-.1c24.1-75.4 8.9-161.1-47.9-223.9zM729 499c-12.2-3.6-20.5-6.1-14.1-22.1 13.8-34.7 15.2-64.7.3-86-28-40.1-104.8-37.9-192.8-1.1 0 0-27.6 12.1-20.6-9.8 13.5-43.5 11.5-79.9-9.6-101-47.7-47.8-174.6 1.8-283.5 110.6C127.3 471.1 80 557.5 80 632.2 80 775.1 263.2 862 442.5 862c235 0 391.3-136.5 391.3-245 0-65.5-55.2-102.6-104.8-118zM443 810.8c-143 14.1-266.5-50.5-275.8-144.5-9.3-93.9 99.2-181.5 242.2-195.6 143-14.2 266.5 50.5 275.8 144.4C694.4 709 586 796.6 443 810.8z"}}]},name:"weibo",theme:"outlined"},v=function(t,e){return r.createElement(p.Z,(0,o.Z)((0,o.Z)({},t),{},{ref:e,icon:y}))};v.displayName="WeiboOutlined";var E=r.forwardRef(v),Z=n(32180),x=n(85956),w="WF9nALVmIy4PTMBRe1VJ",j="T5jVEjrxEK00xQCP4yeQ",k="GxlXNkYLrEMMFl3TuIlt";function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}var N=["columns","bottom","theme","language","isDynamicFooter","rootDomain","className"];function z(){return z=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},z.apply(this,arguments)}function C(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===S(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function O(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var _=function(t){var e=t.columns,n=t.bottom,o=t.theme,a=void 0===o?"dark":o,l=(t.language,t.isDynamicFooter),c=t.rootDomain,u=void 0===c?"":c,s=t.className,f=O(t,N),p=(0,x.bU)().id;return r.createElement(m,z({maxColumnsPerRow:5,theme:a,columns:e||[{title:"Resources",items:[{title:"Ant Design",url:"https://ant.design",openExternal:!0},{title:"Ant Design Mobile",url:"https://mobile.ant.design",openExternal:!0},{title:"Umi",description:r.createElement(x._H,{id:"React 应用开发框架"}),url:"https://umijs.org",openExternal:!0},{title:"Dumi",description:r.createElement(x._H,{id:"组件/文档研发工具"}),url:"https://d.umijs.org",openExternal:!0},{title:"ahooks",description:r.createElement(x._H,{id:"React Hooks 库"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:r.createElement(x._H,{id:"国内镜像"}),url:"https://antv.antgroup.com/"}]},{title:r.createElement(x._H,{id:"社区"}),items:[{icon:r.createElement(h,{style:{color:"#0084ff"}}),title:r.createElement(x._H,{id:"体验科技专栏"}),url:"http://zhuanlan.zhihu.com/xtech",openExternal:!0},{icon:r.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",alt:"seeconf"}),title:"SEE Conf",description:r.createElement(x._H,{id:"蚂蚁体验科技大会"}),url:"https://seeconf.antfin.com/",openExternal:!0}]},{title:r.createElement(x._H,{id:"帮助"}),items:[{icon:r.createElement(b.Z,null),title:"GitHub",url:"https://github.com/antvis",openExternal:!0},{icon:r.createElement(g.Z,null),title:r.createElement(x._H,{id:"StackOverflow"}),url:"http://stackoverflow.com/questions/tagged/antv",openExternal:!0}]},{icon:r.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",alt:"more products"}),title:"更多产品",items:[{icon:r.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",alt:"Ant Design"}),title:"Ant Design",url:"https://ant.design",description:"企业级 UI 设计语言",openExternal:!0},{icon:r.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",alt:"yuque"}),title:"语雀",url:"https://yuque.com",description:"知识创作与分享工具",openExternal:!0},{icon:r.createElement("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/v2%24rh7lqpu/82f338dd-b0a6-41bc-9a86-58aaa9df217b.png",alt:"Egg"}),title:"Egg",url:"https://eggjs.org",description:"企业级 Node 开发框架",openExternal:!0},{icon:r.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",alt:"kitchen"}),title:"Kitchen",description:"Sketch 工具集",url:"https://kitchen.alipay.com",openExternal:!0},{icon:r.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",alt:"xtech"}),title:"蚂蚁体验科技",url:"https://xtech.antfin.com/",openExternal:!0}]}],className:i()(w,s,C({},k,l)),bottom:n||r.createElement(r.Fragment,null,r.createElement("div",{className:j},r.createElement("div",null,r.createElement("a",{href:"https://weibo.com/antv2017",target:"_blank",rel:"noopener noreferrer"},r.createElement(E,null)),r.createElement("a",{href:"https://zhuanlan.zhihu.com/aiux-antv",target:"_blank",rel:"noopener noreferrer"},r.createElement(h,null)),r.createElement("a",{href:"https://github.com/antvis",target:"_blank",rel:"noopener noreferrer"},r.createElement(b.Z,null)),r.createElement("a",{href:"".concat(u,"/").concat(p,"/about")},r.createElement(x._H,{id:"关于我们"}))),r.createElement("div",null,"© ",(new Date).getFullYear()," Made with ❤ by"," ",r.createElement("a",{href:"https://xtech.antfin.com/"},"AntV"))))},(0,Z.Z)(f,["githubUrl"])))}},50927:function(t,e,n){n.d(e,{ZY:function(){return s},ic:function(){return f},km:function(){return u},oM:function(){return p},tF:function(){return m}});var r=n(67294),o=n(16423),a=n(85956);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,l,c=[],i=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(c.push(r.value),c.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{if(!i&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var u=function(){var t=c((0,r.useState)(!1),2),e=t[0],n=t[1];return(0,r.useEffect)((function(){window.location.host.includes("gitee.io")&&window.location.host.includes("antv")&&n(!0)}),[]),[e]},s=function(){document.body.scrollTop=document.documentElement.scrollTop=0},m=function(){var t=c((0,r.useState)([]),2),e=t[0],n=t[1];return(0,r.useEffect)((function(){var t=document.querySelectorAll("aside .ant-menu-item a"),e=document.querySelector("aside .ant-menu-item-selected a"),r=Array.from(t).findIndex((function(t){return t===e})),o=r-1>=0?t[r-1]:void 0,a=r+1<t.length?t[r+1]:void 0,l=o?{slug:o.getAttribute("href")||void 0,title:o.textContent||void 0}:void 0,c=a?{slug:a.getAttribute("href")||void 0,title:a.textContent||void 0}:void 0;n([l,c])}),[]),e};function f(t){return p(t,(0,a.bU)().id)}function p(t,e){return"object"===l(t)?(0,o.Z)(t,[e]):t}},60337:function(t,e,n){var r=n(27449),o=n(935),a=n(68573),l=n(62281);e.Z=function(t,e){return e=(0,r.Z)(e,t),null==(t=(0,a.Z)(t,e))||delete t[(0,l.Z)((0,o.Z)(e))]}},68573:function(t,e,n){var r=n(13317),o=n(47855);e.Z=function(t,e){return e.length<2?t:(0,r.Z)(t,(0,o.Z)(e,0,-1))}},935:function(t,e){e.Z=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}},43836:function(t,e,n){var r=n(74073),o=n(69162),a=n(21018),l=n(27771);e.Z=function(t,e){return((0,l.Z)(t)?r.Z:a.Z)(t,(0,o.Z)(e,3))}},32180:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(74073),o=n(38225),a=n(60337),l=n(27449),c=n(31899),i=n(37514);var u=function(t){return(0,i.Z)(t)?void 0:t},s=n(41417),m=n(4403),f=(0,s.Z)((function(t,e){var n={};if(null==t)return n;var i=!1;e=(0,r.Z)(e,(function(e){return e=(0,l.Z)(e,t),i||(i=e.length>1),e})),(0,c.Z)(t,(0,m.Z)(t),n),i&&(n=(0,o.Z)(n,7,u));for(var s=e.length;s--;)(0,a.Z)(n,e[s]);return n}))}}]);
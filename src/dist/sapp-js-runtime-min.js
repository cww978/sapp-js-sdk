!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.sapp=t():e.sapp=t()}(self,(function(){return(()=>{"use strict";var e={d:(t,n)=>{for(var c in n)e.o(n,c)&&!e.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:n[c]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};return((e,t,n)=>{n.d(t,{default:()=>m});const c={version:"1.2.11",ready:function(e){window.plus?setTimeout((function(){e()}),0):document.addEventListener("plusready",(function(){e()}),!1)}},r=e=>({code:0,data:e||"",msg:"执行成功"}),i=e=>({code:-1,data:null,msg:e||"执行失败"});function a(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}function o(e){return null==e?String(e):"object"}function s(e){return null!=e&&e===e.window}function u(e){return"object"===o(e)}function f(e){return u(e)&&!s(e)&&Object.getPrototypeOf(e)===Object.prototype}function l(e,t,n){e.dispatchEvent(new a(t,{detail:n,bubbles:!0,cancelable:!0}))}function w(e,t,n){e&&(""!==n&&f(n=n||{})&&(n=JSON.stringify(n||{}).replace(/\'/g,"\\u0027").replace(/\\/g,"\\u005c")),e.evalJS("typeof sapp!=='undefined'&&sapp.core.receive('"+t+"','"+n+"')"))}const d={type:o,isWindow:s,isObject:u,isPlainObject:f,trigger:l,registerService:function(e,t){window.addEventListener(e,(async e=>{const n=e.detail?e.detail.success:"",c=e.detail?e.detail.fail:"",r=e.detail?e.detail:{},i=plus.webview.getTopWebview();try{const e=await t(r);n&&w(i,n,e)}catch(e){c&&w(i,c,e)}}))},dispatch:function(e,t={}){const n={},{success:c,fail:r}=t;n.success=function(t){window.removeEventListener(e+"-success",n.success),"function"==typeof c&&c(t.detail)},n.fail=function(t){window.removeEventListener(e+"-fail",n.fail),"function"==typeof r&&r(t.detail)},window.addEventListener(e+"-success",n.success),window.addEventListener(e+"-fail",n.fail),w(plus.webview.getLaunchWebview(),e,{success:e+"-success",fail:e+"-fail",params:t})},receive:function(e,t){if(e){try{t&&(t=JSON.parse(t))}catch(e){console.error(e)}l(document,e,t)}},fire:w};function y(){return new Promise((async(e,t)=>{try{ViewService.reload(),e(r())}catch(e){t(i())}}))}const p={logOut:y,reload:y,refresh:function(){return new Promise((async(e,t)=>{try{ViewService.refresh(),e(r())}catch(e){t(i())}}))},getAuthorization:function(){return new Promise(((e,t)=>{try{const t=TokenService.getToken();e(r(t))}catch(e){t(i("token获取失败"))}}))},getLocation:function(){return new Promise((async(e,t)=>{try{const t=await LocationService.getLocation();e(r(t))}catch(e){t(i(e))}}))},chooseImage:function({params:e}){return new Promise((async(t,n)=>{try{const n=await FileService.chooseImage(e);t(r(n))}catch(e){n(i(e))}}))},checkVersion:function(){return new Promise((async(e,t)=>{try{VersionService.checkVersion(),e(r())}catch(e){t(i())}}))},setStatusBarStyle:function({params:e}){return new Promise((async(t,n)=>{try{ViewService.setStatusBarStyle(e),t(r())}catch(e){n(i())}}))},setStatusBarBackground:function({params:e}){return new Promise((async(t,n)=>{try{ViewService.setStatusBarBackground(e),t(r())}catch(e){n(i())}}))},showSafearea:function({params:e}){return new Promise((async(t,n)=>{try{ViewService.showSafearea(e),t(r())}catch(e){n(i())}}))},hideSafearea:function(){return new Promise((async(e,t)=>{try{ViewService.hideSafearea(),e(r())}catch(e){t(i())}}))},getStatusbarHeight:function(){return new Promise((async(e,t)=>{try{const t=await ViewService.getStatusbarHeight();e(r(t))}catch(e){t(i())}}))},getSafeAreaHeight:function(){return new Promise((async(e,t)=>{try{const t=await ViewService.getSafeAreaHeight();e(r(t))}catch(e){t(i())}}))},getSystemInfo:function(){return new Promise((async(e,t)=>{try{const t=await SystemService.getSystemInfo();e(r(t))}catch(e){t(i())}}))},cacheSetItem:function({params:e}){return new Promise((async(t,n)=>{try{await CacheService.setItem(e),t(r())}catch(e){n(i())}}))},cacheGetItem:function({params:e}){return new Promise((async(t,n)=>{try{const n=await CacheService.getItem(e);t(r(n))}catch(e){n(i())}}))},cacheClear:function(){return new Promise((async(e,t)=>{try{await CacheService.clear(),e(r())}catch(e){t(i())}}))}};!function(){for(let e in p)d.registerService(e,p[e])}(),void 0===window.sapp&&(window.sapp={...c,core:d,service:p}),console.info("sapp-js-runtime: ",c.version);const m={...c,core:d,service:p}})(0,t,e),t.default})()}));
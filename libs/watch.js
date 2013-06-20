// Watch.JS
(function(g){"object"===typeof exports?module.exports=g():"function"===typeof define&&define.amd?define(g):(window.WatchJS=g(),window.watch=window.WatchJS.watch,window.unwatch=window.WatchJS.unwatch,window.callWatchers=window.WatchJS.callWatchers)})(function(){var g={noMore:!1},k=[],p=function(a){var b={};return a&&"[object Function]"==b.toString.call(a)},j=function(a){return"[object Array]"===Object.prototype.toString.call(a)},r=function(a){if(null==a||"object"!=typeof a)return a;var b=a.constructor(),
d;for(d in a)b[d]=a[d];return b},s=function(a,b,d){try{Object.defineProperty(a,b,{enumerable:!1,configurable:!0,writable:!1,value:d})}catch(c){a[b]=d}},q=function(a,b,d,c){if(!("string"==typeof a||!(a instanceof Object)&&!j(a))){var e=[];if(j(a))for(var f=0;f<a.length;f++)e.push(f);else for(f in a)e.push(f);m(a,e,b,d,c)}},m=function(a,b,d,c,e){if(!("string"==typeof a||!(a instanceof Object)&&!j(a)))for(var f in b)n(a,b[f],d,c,e)},n=function(a,b,d,c,e){if(!("string"==typeof a||!(a instanceof Object)&&
!j(a))&&!p(a[b])){if(null!=a[b]&&(void 0===c||0<c))void 0!==c&&c--,q(a[b],d,c);a:{var f=a[b];t(a,b);a.watchers||s(a,"watchers",{});a.watchers[b]||(a.watchers[b]=[]);for(var h in a.watchers[b])if(a.watchers[b][h]===d)break a;a.watchers[b].push(d);h=function(){return f};var u=function(c){var e=f;f=c;a[b]&&q(a[b],d);t(a,b);!g.noMore&&JSON.stringify(e)!==JSON.stringify(c)&&(l(a,b,"set",c,e),g.noMore=!1)};try{Object.defineProperty(a,b,{get:h,set:u,enumerable:!0,configurable:!0})}catch(m){try{Object.prototype.__defineGetter__.call(a,
b,h),Object.prototype.__defineSetter__.call(a,b,u)}catch(n){throw Error("Browser Not Supported");}}}e&&k.push({obj:a,prop:b,actual:r(a[b]),watcher:d,level:c})}},y=function(a,b){if(!(a instanceof String||!(a instanceof Object)&&!j(a))){var d=[];if(j(a))for(var c=0;c<a.length;c++)d.push(c);else for(c in a)d.push(c);v(a,d,b)}},v=function(a,b,d){for(var c in b)w(a,b[c],d)},l=function(a,b,d,c,e){if(b)for(var f in a.watchers[b])0===f%1&&a.watchers[b][f].call(a,b,d,c||a[b],e);else for(b in a)l(a,
b,d,c,e)},x="pop push reverse shift sort slice unshift".split(" "),z=function(a,b,d,c){s(a[b],c,function(){var e=d.apply(a[b],arguments);n(a,a[b]);"slice"!==c&&l(a,b,c,arguments);return e})},t=function(a,b){if(a[b]&&!(a[b]instanceof String)&&j(a[b]))for(var d=x.length,c;d--;)c=x[d],z(a,b,a[b][c],c)},w=function(a,b,d){for(var c in a.watchers[b])a.watchers[b][c]==d&&a.watchers[b].splice(c,1);for(var e in k)c=k[e],c.obj==a&&(c.prop==b&&c.watcher==d)&&k.splice(e,1)};setInterval(function(){for(var a in k){var b=
k[a],d;d=b.obj[b.prop];var c=b.actual,e=[],f=[];if("string"!=typeof d&&"string"!=typeof c&&!j(d)&&!j(c)){var h=void 0;for(h in d)c[h]||e.push(h);h=void 0;for(h in c)d[h]||f.push(h)}d={added:e,removed:f};if(d.added.length||d.removed.length){if(d.added.length)for(var g in b.obj.watchers[b.prop])m(b.obj[b.prop],d.added,b.obj.watchers[b.prop][g],b.level-1,!0);l(b.obj,b.prop,"differentattr",d,b.actual)}b.actual=r(b.obj[b.prop])}},50);g.watch=function(){p(arguments[1])?q.apply(this,arguments):j(arguments[1])?
m.apply(this,arguments):n.apply(this,arguments)};g.unwatch=function(){p(arguments[1])?y.apply(this,arguments):j(arguments[1])?v.apply(this,arguments):w.apply(this,arguments)};g.callWatchers=l;return g});
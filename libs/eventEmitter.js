// EventEmitter for Browsers:
("function"===typeof define&&function(a){define("EventEmitter",a)}||function(a){window.EventEmitter=a()})(function(){function a(){}a.prototype.on=function(e,a){this.hasOwnProperty("_handlers")||(this._handlers={});var b=this._handlers;b.hasOwnProperty(e)||(b[e]=[]);b[e].push(a)};a.prototype.addListener=a.prototype.on;a.prototype.once=function(a,c){function b(){this.off(a,c);this.off(a,b)}this.on(a,c);this.on(a,b)};a.prototype.emit=function(a){if(this.hasOwnProperty("_handlers")){var c=this._handlers;
if(c.hasOwnProperty(a))for(var c=c[a],b=Array.prototype.slice.call(arguments,1),d=0,f=c.length;d<f;d++)c[d]&&c[d].apply(this,b)}};a.prototype.off=function(a,c){if(this.hasOwnProperty("_handlers")){var b=this._handlers;if(b.hasOwnProperty(a)){var b=b[a],d=b.indexOf(c);if(!(0>d)&&(b[d]=!1,d===b.length-1))for(;0<=d&&!b[d];)b.length--,d--}}};a.prototype.removeListener=a.prototype.off;return a});
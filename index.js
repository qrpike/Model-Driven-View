// Generated by CoffeeScript 1.6.1
/*

	Model Driven View / Data Driven Template(s)
	
	This is to help front end developers, define views with objects and templates
	and the view automatically re-render that view if the data inside of it changes.
	
	There are probably a few out there that do this, but this class uses Request Animation Frame
	to re-render all changes on a animation frame, so changing 5 attributes at once, wont trigger
	5 renders, it will trigger a render on the next animation frame. This speeds up rendering and 
	cuts back on un-needed renders dramatically.
	
	Created by: Quinton Pike
	Email: qrpike@gmail.com
*/var _this=this,__hasProp={}.hasOwnProperty,__extends=function(e,t){function r(){this.constructor=e}for(var n in t)__hasProp.call(t,n)&&(e[n]=t[n]);r.prototype=t.prototype;e.prototype=new r;e.__super__=t.prototype;return e};window.ModelDrivenView=function(e){function t(e,n,r,i){var s=this;this.dataObject=e;this.template=n;this.container=r;this.options=i!=null?i:{};this.render=function(){return t.prototype.render.apply(s,arguments)};this.getHTML=function(e){e==null&&(e=!0);return t.prototype.getHTML.apply(s,arguments)};this.reRender=function(){return t.prototype.reRender.apply(s,arguments)};this.createWatcher=function(){return t.prototype.createWatcher.apply(s,arguments)};this.autoRender=this.options.autoRender||!0;this.append=this.options.appendOnInitialRender||!0;this.renderOnInit=this.options.renderOnInit||!0;this.el=null;this.autoRender&&this.createWatcher();this.renderOnInit&&this.render();this.needToRender=!1}__extends(t,e);t.prototype.createWatcher=function(){var e=this;return WatchJS.watch(this.dataObject,function(){return e.needToRender=!0})};t.prototype.reRender=function(){var e;if(this.needToRender){e=this.container.find(this.el);this.el=this.getHTML();e.replaceWith(this.el);this.emit("render",{el:this.el,rerender:!0});this.needToRender=!1}return window.requestAnimFrame(this.reRender)};t.prototype.getHTML=function(e){e==null&&(e=!0);return e?$(this.template(this.dataObject)):this.template(this.dataObject)};t.prototype.render=function(){this.el=this.getHTML();this.append?this.container.append(this.el):this.container.html(this.el);this.emit("render",{el:this.el,rerender:!1});return this.reRender()};return t}(window.EventEmitter);
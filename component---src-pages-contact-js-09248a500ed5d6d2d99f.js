(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"Cuy+":function(t,e,n){"use strict";n.r(e);n("VRzm");var r=n("o0o1"),a=n.n(r),o=(n("ls82"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("f3/d"),n("91GP"),n("q1tI")),i=n.n(o),u=n("Bl7J"),l=n("vrFN"),c=n("vOnD"),s=n("SN50");function f(t,e,n,r,a,o,i){try{var u=t[o](i),l=u.value}catch(c){return void n(c)}u.done?e(l):Promise.resolve(l).then(r,a)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){f(o,r,a,i,u,"next",t)}function u(t){f(o,r,a,i,u,"throw",t)}i(void 0)}))}}function m(){var t=L(["\n  margin: 0 auto;\n  width: 100%;\n"]);return m=function(){return t},t}function p(){var t=L(["\n  max-width: 300px;\n  margin:auto;\n"]);return p=function(){return t},t}function y(){var t=L(["\n  width: 100%;\n  align-items: center;\n  margin: auto;\n"]);return y=function(){return t},t}function d(){var t=L(["\n  font-size: smaller;\n"]);return d=function(){return t},t}function v(){var t=L(["\n  margin: 0 20px;\n  text-align: start;\n  font-weight: bold;\n  font-size: small;\n"]);return v=function(){return t},t}function g(){var t=L([""]);return g=function(){return t},t}function w(){var t=L([""]);return w=function(){return t},t}function E(){var t=L(["\n  \n"]);return E=function(){return t},t}function b(){var t=L(["\n  display: grid;\n  \n"]);return b=function(){return t},t}function x(){var t=L(["\n  margin: 170px 0 10px;\n"]);return x=function(){return t},t}function S(){var t=L(["\n  margin: 0 40px;\n  display: grid;\n\n  grid-template-columns: 1fr 1fr;\n"]);return S=function(){return t},t}function L(t,e){return e||(e=t.slice(0)),t.raw=e,t}var j=c.a.div(S()),O=c.a.h1(x()),N=c.a.div(b()),T=c.a.div(E()),_=c.a.div(w()),k=c.a.h4(g()),P=c.a.p(v()),C=c.a.p(d()),F=c.a.div(y()),G=c.a.div(p()),V=c.a.div(m());e.default=function(){var t=Object(o.useState)({name:"",email:"",subject:"",mapleSyrup:"",message:""}),e=t[0],n=t[1],r=Object(o.useState)(!1),c=r[0],f=r[1],m=Object(o.useState)([]),p=m[0],y=m[1];function d(t){var r,a=t.target.value;"number"===t.target.type&&(a=parseInt(t.target.value)),n(Object.assign(Object.assign({},e),{},((r={})[t.target.name]=a,r)))}function v(){return(v=h(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,message:e.message,subject:e.subject})},fetch("https://www.jamesanderegg.com/snoc_form",r).then((function(t){200===t.status?(y([]),n({name:"",email:"",subject:"",mapleSyrup:"",message:""}),f(!0)):n({name:"",email:"",subject:"",mapleSyrup:"",message:""})}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var g=function(t){t.preventDefault();var n=[];Object.keys(e).map((function(t){"mapleSyrup"!==t?""===e[t]&&n.push(t):""!==e[t]&&n.push(t)})),0!==n.length?y(n):(y(n),function(t){v.apply(this,arguments)}(e))};return i.a.createElement(u.a,null,i.a.createElement(l.a,{title:"Contact"}),i.a.createElement(O,null,"Contact us"),i.a.createElement(j,null,i.a.createElement(N,null,i.a.createElement(T,null,i.a.createElement(k,null,"Class List:"),i.a.createElement(_,null,i.a.createElement(P,null,'The Natural Order Process". The Yoga Sutras of Patanjali'),i.a.createElement(C,null," ","- Classes will resume Monday on February 1, 2021 at 7:30 pm MTN.")),i.a.createElement(_,null,i.a.createElement(P,null,'"Practice of the Way" by Vitvan.'),i.a.createElement(C,null," ","- Begins Sunday on January 31st at 11:30 am MTN.")),i.a.createElement(_,null,i.a.createElement(P,null,'"Steps in Self-Unfoldment" by Vitvan.'),i.a.createElement(C,null," ","- Begins Sunday on February 7th at 9:30 am MTN.")),i.a.createElement(_,null,i.a.createElement(P,null,'"A Treatise of Faith" by Vitvan.'),i.a.createElement(C,null," ","- Presented every Wednesday at 7:30 pm MTN."))),i.a.createElement(F,null,i.a.createElement(G,null,i.a.createElement("a",{href:"https://www.paypal.com/paypalme/SNOofColorado"},i.a.createElement(s.a,{filename:"paypal.png"}))))),i.a.createElement(V,null,i.a.createElement("form",{onSubmit:function(t){return g(t)},style:{alignContent:"center",textAlign:"center",margin:"auto"}},i.a.createElement("h4",null,"Send us an email"),i.a.createElement("input",{type:"text",name:"name",id:"name",value:e.name,placeholder:"Enter your name",style:{width:"100%"},onChange:d}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Enter your email",value:e.email,style:{width:"100%"},onChange:d}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("input",{type:"text",name:"subject",id:"subject",placeholder:"Enter the subject",value:e.subject,style:{width:"100%"},onChange:d}),i.a.createElement("br",null),i.a.createElement("input",{type:"mapleSyrup",name:"mapleSyrup",id:"mapleSyrup",value:e.mapleSyrup,onChange:d,className:"mapleSyrup"}),i.a.createElement("br",null),i.a.createElement("textarea",{name:"message",id:"message",placeholder:"Type your Message here. If inquiring about a class, please include the title of the class in your message. ",rows:"10",value:e.message,style:{width:"100%"},onChange:d}),i.a.createElement("br",null),i.a.createElement("button",{className:"submit-button",type:"submit"},"Send")),c?i.a.createElement("h4",null,"Thank you, your message has been sent!"):null,0!==p.length?p.map((function(t,e){return i.a.createElement("p",{key:e},"Please fill in the ",t," field.")})):null)))}},ls82:function(t,e,n){n("rGqo"),n("yt8O"),n("a1Th"),n("h7Nl"),n("VRzm"),n("Btvt"),n("/SS/"),n("f3/d"),n("8+KV"),n("hHhE"),n("rE2o"),n("ioFf");var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function u(t,e,n,r){var a=e&&e.prototype instanceof s?e:s,o=Object.create(a.prototype),i=new x(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var u=w(i,n);if(u){if(u===c)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===c)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,i),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=u;var c={};function s(){}function f(){}function h(){}var m={};m[a]=function(){return this};var p=Object.getPrototypeOf,y=p&&p(p(S([])));y&&y!==e&&n.call(y,a)&&(m=y);var d=h.prototype=s.prototype=Object.create(m);function v(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var r;this._invoke=function(a,o){function i(){return new e((function(r,i){!function r(a,o,i,u){var c=l(t[a],t,o);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,u)}))}u(c.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return c;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,c;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,c):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,c)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=d.constructor=h,h.constructor=f,h[i]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(d),t},t.awrap=function(t){return{__await:t}},v(g.prototype),g.prototype[o]=function(){return this},t.AsyncIterator=g,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new g(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},v(d),d[i]="Generator",d[a]=function(){return this},d.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(u&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,c):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),c},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),b(n),c}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;b(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),c}},t}(t.exports);try{regeneratorRuntime=r}catch(a){Function("r","regeneratorRuntime = r")(r)}},o0o1:function(t,e,n){t.exports=n("ls82")}}]);
//# sourceMappingURL=component---src-pages-contact-js-09248a500ed5d6d2d99f.js.map
/**
 * @license text 2.0.15 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/text/LICENSE
 */

define("text",["module"],function(e){"use strict";function t(e,t){return void 0===e||""===e?t:e}function n(e,n,r,i){if(n===i)return!0;if(e===r){if("http"===e)return t(n,"80")===t(i,"80");if("https"===e)return t(n,"443")===t(i,"443")}return!1}var r,i,o,a,s,c=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],l=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,d=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,u="undefined"!=typeof location&&location.href,f=u&&location.protocol&&location.protocol.replace(/\:/,""),p=u&&location.hostname,v=u&&(location.port||void 0),m={},h=e.config&&e.config()||{};return r={version:"2.0.15",strip:function(e){if(e){e=e.replace(l,"");var t=e.match(d);t&&(e=t[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:h.createXhr||function(){var e,t,n;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(t=0;3>t;t+=1){n=c[t];try{e=new ActiveXObject(n)}catch(r){}if(e){c=[n];break}}return e},parseName:function(e){var t,n,r,i=!1,o=e.lastIndexOf("."),a=0===e.indexOf("./")||0===e.indexOf("../");return-1!==o&&(!a||o>1)?(t=e.substring(0,o),n=e.substring(o+1)):t=e,r=n||t,o=r.indexOf("!"),-1!==o&&(i="strip"===r.substring(o+1),r=r.substring(0,o),n?n=r:t=r),{moduleName:t,ext:n,strip:i}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,t,i,o){var a,s,c,l=r.xdRegExp.exec(e);return l?(a=l[2],s=l[3],s=s.split(":"),c=s[1],s=s[0],!(a&&a!==t||s&&s.toLowerCase()!==i.toLowerCase()||(c||s)&&!n(a,c,t,o))):!0},finishLoad:function(e,t,n,i){n=t?r.strip(n):n,h.isBuild&&(m[e]=n),i(n)},load:function(e,t,n,i){if(i&&i.isBuild&&!i.inlineText)return void n();h.isBuild=i&&i.isBuild;var o=r.parseName(e),a=o.moduleName+(o.ext?"."+o.ext:""),s=t.toUrl(a),c=h.useXhr||r.useXhr;return 0===s.indexOf("empty:")?void n():void(!u||c(s,f,p,v)?r.get(s,function(t){r.finishLoad(e,o.strip,t,n)},function(e){n.error&&n.error(e)}):t([a],function(e){r.finishLoad(o.moduleName+"."+o.ext,o.strip,e,n)}))},write:function(e,t,n,i){if(m.hasOwnProperty(t)){var o=r.jsEscape(m[t]);n.asModule(e+"!"+t,"define(function () { return '"+o+"';});\n")}},writeFile:function(e,t,n,i,o){var a=r.parseName(t),s=a.ext?"."+a.ext:"",c=a.moduleName+s,l=n.toUrl(a.moduleName+s)+".js";r.load(c,n,function(t){var n=function(e){return i(l,e)};n.asModule=function(e,t){return i.asModule(e,l,t)},r.write(e,c,n,o)},o)}},"node"===h.env||!h.env&&"undefined"!=typeof process&&process.versions&&process.versions.node&&!process.versions["node-webkit"]&&!process.versions["atom-shell"]?(i=require.nodeRequire("fs"),r.get=function(e,t,n){try{var r=i.readFileSync(e,"utf8");"\ufeff"===r[0]&&(r=r.substring(1)),t(r)}catch(o){n&&n(o)}}):"xhr"===h.env||!h.env&&r.createXhr()?r.get=function(e,t,n,i){var o,a=r.createXhr();if(a.open("GET",e,!0),i)for(o in i)i.hasOwnProperty(o)&&a.setRequestHeader(o.toLowerCase(),i[o]);h.onXhr&&h.onXhr(a,e),a.onreadystatechange=function(r){var i,o;4===a.readyState&&(i=a.status||0,i>399&&600>i?(o=new Error(e+" HTTP status: "+i),o.xhr=a,n&&n(o)):t(a.responseText),h.onXhrComplete&&h.onXhrComplete(a,e))},a.send(null)}:"rhino"===h.env||!h.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java?r.get=function(e,t){var n,r,i="utf-8",o=new java.io.File(e),a=java.lang.System.getProperty("line.separator"),s=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(o),i)),c="";try{for(n=new java.lang.StringBuffer,r=s.readLine(),r&&r.length()&&65279===r.charAt(0)&&(r=r.substring(1)),null!==r&&n.append(r);null!==(r=s.readLine());)n.append(a),n.append(r);c=String(n.toString())}finally{s.close()}t(c)}:("xpconnect"===h.env||!h.env&&"undefined"!=typeof Components&&Components.classes&&Components.interfaces)&&(o=Components.classes,a=Components.interfaces,Components.utils["import"]("resource://gre/modules/FileUtils.jsm"),s="@mozilla.org/windows-registry-key;1"in o,r.get=function(e,t){var n,r,i,c={};s&&(e=e.replace(/\//g,"\\")),i=new FileUtils.File(e);try{n=o["@mozilla.org/network/file-input-stream;1"].createInstance(a.nsIFileInputStream),n.init(i,1,0,!1),r=o["@mozilla.org/intl/converter-input-stream;1"].createInstance(a.nsIConverterInputStream),r.init(n,"utf-8",n.available(),a.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),r.readString(n.available(),c),r.close(),n.close(),t(c.value)}catch(l){throw new Error((i&&i.path||"")+": "+l)}}),r}),define("text!../components/header.tpl",[],function(){return'<div class="header">\r\n	<h1>忆阑珊</h1>\r\n	<div class="protrait">\r\n		<img src="../images/protrait.jpg" alt="头像">\r\n	</div>\r\n</div>'}),define("header",["text","zepto","underscore","text!../components/header.tpl"],function(e,t,n,r){var i=function(){this.init()};return i.prototype.init=function(){this.render(r)},i.prototype.render=function(e){var e=n.template(e)({person:{name:"Han MeiMei"}});t("header").html(e)},{headRender:i}}),define("text!../components/list.tpl",[],function(){return'<% _.each(data.data.data, function (item) { %>\r\n    <div class="list">\r\n        <a class="book" href="<%= item.url %>">\r\n            <div class="listCover">\r\n                <!-- <div class="serial ser_{{item.serial}}" v-if="serial" >{{item.serial}}</div> -->\r\n                <img src="<%= item.coverUrl %>" alt="封面">\r\n            </div>\r\n            <div class="listCon">\r\n                <h2><%= item.title %></h2>\r\n                <span class="price"><%= item.price %> 元起</span>\r\n                <span class="wantNum"><%= item.num %>人想看</span>\r\n                <h3>导演：<%= item.director %></h3>\r\n                <h4>主演：<%= item.starring %></h4>\r\n            </div>\r\n        </a>\r\n\r\n        <% if(data.data.inf == \'index-list\'){ %>\r\n                <%if(!item.iLike){ %>\r\n                    <div class="iLike"></div>\r\n                <% } else {%>\r\n                    <div class="iLike active"></div>\r\n                <% } %>\r\n        <% } %>\r\n\r\n        <% if(data.data.inf == \'rank\'){ %>\r\n            <div class="sort">\r\n                <span><%= item.sort %></span>\r\n            </div>\r\n        <% } %>\r\n        <!-- <div class="bookType">\r\n            <a v-for="i in type | limitBy 2" href="{{item.cate_url}}">{{i}}</a>\r\n        </div> -->\r\n    </div>\r\n<% }) %>'}),define("index-list",["underscore","zepto","text!../components/list.tpl"],function(e,t,n){var r=function(e,t,n,r){this.ele=e,this.url=t,this.data=n||"",this.type=r||"get",this.init()};return r.prototype.init=function(){t(document).on("click",".iLike",function(){console.log(2),console.log(this),t(this).toggleClass("active")}),this.fetch()},r.prototype.fetch=function(){var e=this;t.ajax({url:e.url,data:e.data,type:this.type,dataType:"json",success:function(t){var n=t;1===n.success&&e.render(n)},error:function(){}})},r.prototype.render=function(t){var r=t,i=n;console.log(2),console.log(r);var i=e.template(i,{variable:"data"})({data:r});this.ele.html(i)},r}),define("detail",["zepto","header","index-list"],function(e,t,n){new t.headRender;var r=!1,i=function(){r?(r=!1,e(".detail-content .content-main").css("max-height","132px"),e("#content-arrow").css({transform:"rotate(360deg)"}),e(".content-main p").addClass("active")):(r=!0,e(".detail-content .content-main").css("max-height","none"),e("#content-arrow").css({transform:"rotate(180deg)"}),e(".content-main p").removeClass("active"))};e(".arrow-icon,.content-main").on("click",i),e(".titleNav .goback").on("tap",function(){location.href=history.go(-1)});var o="../../data/detail.json",a=e(".other-movies");new n(a,o)});
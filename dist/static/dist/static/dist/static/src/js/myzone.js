/**
 * @license text 2.0.15 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/text/LICENSE
 */

define("text",["module"],function(e){"use strict";function n(e,n){return void 0===e||""===e?n:e}function t(e,t,r,a){if(t===a)return!0;if(e===r){if("http"===e)return n(t,"80")===n(a,"80");if("https"===e)return n(t,"443")===n(a,"443")}return!1}var r,a,i,s,o,l=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],c=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,u=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,f="undefined"!=typeof location&&location.href,p=f&&location.protocol&&location.protocol.replace(/\:/,""),d=f&&location.hostname,m=f&&(location.port||void 0),v={},h=e.config&&e.config()||{};return r={version:"2.0.15",strip:function(e){if(e){e=e.replace(c,"");var n=e.match(u);n&&(e=n[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:h.createXhr||function(){var e,n,t;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(n=0;3>n;n+=1){t=l[n];try{e=new ActiveXObject(t)}catch(r){}if(e){l=[t];break}}return e},parseName:function(e){var n,t,r,a=!1,i=e.lastIndexOf("."),s=0===e.indexOf("./")||0===e.indexOf("../");return-1!==i&&(!s||i>1)?(n=e.substring(0,i),t=e.substring(i+1)):n=e,r=t||n,i=r.indexOf("!"),-1!==i&&(a="strip"===r.substring(i+1),r=r.substring(0,i),t?t=r:n=r),{moduleName:n,ext:t,strip:a}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,n,a,i){var s,o,l,c=r.xdRegExp.exec(e);return c?(s=c[2],o=c[3],o=o.split(":"),l=o[1],o=o[0],!(s&&s!==n||o&&o.toLowerCase()!==a.toLowerCase()||(l||o)&&!t(s,l,n,i))):!0},finishLoad:function(e,n,t,a){t=n?r.strip(t):t,h.isBuild&&(v[e]=t),a(t)},load:function(e,n,t,a){if(a&&a.isBuild&&!a.inlineText)return void t();h.isBuild=a&&a.isBuild;var i=r.parseName(e),s=i.moduleName+(i.ext?"."+i.ext:""),o=n.toUrl(s),l=h.useXhr||r.useXhr;return 0===o.indexOf("empty:")?void t():void(!f||l(o,p,d,m)?r.get(o,function(n){r.finishLoad(e,i.strip,n,t)},function(e){t.error&&t.error(e)}):n([s],function(e){r.finishLoad(i.moduleName+"."+i.ext,i.strip,e,t)}))},write:function(e,n,t,a){if(v.hasOwnProperty(n)){var i=r.jsEscape(v[n]);t.asModule(e+"!"+n,"define(function () { return '"+i+"';});\n")}},writeFile:function(e,n,t,a,i){var s=r.parseName(n),o=s.ext?"."+s.ext:"",l=s.moduleName+o,c=t.toUrl(s.moduleName+o)+".js";r.load(l,t,function(n){var t=function(e){return a(c,e)};t.asModule=function(e,n){return a.asModule(e,c,n)},r.write(e,l,t,i)},i)}},"node"===h.env||!h.env&&"undefined"!=typeof process&&process.versions&&process.versions.node&&!process.versions["node-webkit"]&&!process.versions["atom-shell"]?(a=require.nodeRequire("fs"),r.get=function(e,n,t){try{var r=a.readFileSync(e,"utf8");"\ufeff"===r[0]&&(r=r.substring(1)),n(r)}catch(i){t&&t(i)}}):"xhr"===h.env||!h.env&&r.createXhr()?r.get=function(e,n,t,a){var i,s=r.createXhr();if(s.open("GET",e,!0),a)for(i in a)a.hasOwnProperty(i)&&s.setRequestHeader(i.toLowerCase(),a[i]);h.onXhr&&h.onXhr(s,e),s.onreadystatechange=function(r){var a,i;4===s.readyState&&(a=s.status||0,a>399&&600>a?(i=new Error(e+" HTTP status: "+a),i.xhr=s,t&&t(i)):n(s.responseText),h.onXhrComplete&&h.onXhrComplete(s,e))},s.send(null)}:"rhino"===h.env||!h.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java?r.get=function(e,n){var t,r,a="utf-8",i=new java.io.File(e),s=java.lang.System.getProperty("line.separator"),o=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(i),a)),l="";try{for(t=new java.lang.StringBuffer,r=o.readLine(),r&&r.length()&&65279===r.charAt(0)&&(r=r.substring(1)),null!==r&&t.append(r);null!==(r=o.readLine());)t.append(s),t.append(r);l=String(t.toString())}finally{o.close()}n(l)}:("xpconnect"===h.env||!h.env&&"undefined"!=typeof Components&&Components.classes&&Components.interfaces)&&(i=Components.classes,s=Components.interfaces,Components.utils["import"]("resource://gre/modules/FileUtils.jsm"),o="@mozilla.org/windows-registry-key;1"in i,r.get=function(e,n){var t,r,a,l={};o&&(e=e.replace(/\//g,"\\")),a=new FileUtils.File(e);try{t=i["@mozilla.org/network/file-input-stream;1"].createInstance(s.nsIFileInputStream),t.init(a,1,0,!1),r=i["@mozilla.org/intl/converter-input-stream;1"].createInstance(s.nsIConverterInputStream),r.init(t,"utf-8",t.available(),s.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),r.readString(t.available(),l),r.close(),t.close(),n(l.value)}catch(c){throw new Error((a&&a.path||"")+": "+c)}}),r}),define("text!../components/footer-nav.tpl",[],function(){return'	<div class="footer-nav">\r\n		<% if(data.data === \'movies\'){ %>\r\n		<a class="movies" href="../html/index.html">\r\n			<i class="icon active"></i>\r\n			<span class="active">电影</span>\r\n		</a>\r\n		<a class="sort" href="../html/rank.html"><i class="icon"></i><span>榜单</span></a>\r\n		<a class="mine" href="../html/myzone.html"><i class="icon"></i><span>我的</span></a>\r\n		<% } else if(data.data === \'sort\') { %>\r\n			<a class="movies" href="../html/index.html">\r\n				<i class="icon"></i>\r\n				<span>电影</span>\r\n			</a>\r\n			<a class="sort" href="../html/rank.html"><i class="icon active"></i><span class="active">榜单</span></a>\r\n			<a class="mine" href="../html/myzone.html"><i class="icon"></i><span>我的</span></a>\r\n		<% } else if(data.data === \'myzone\') { %>\r\n			<a class="movies" href="../html/index.html">\r\n				<i class="icon"></i>\r\n				<span>电影</span>\r\n			</a>\r\n			<a class="sort" href="../html/rank.html"><i class="icon"></i><span>榜单</span></a>\r\n			<a class="mine" href="../html/myzone.html"><i class="icon active"></i><span class="active">我的</span></a>\r\n		<% } %>\r\n	</div>\r\n'}),define("footer-nav",["zepto","underscore","text!../components/footer-nav.tpl"],function(e,n,t){var r=function(n){this.ele=e("body"),this.menu=n||"movies",this.init()};return r.prototype.init=function(){this.render()},r.prototype.render=function(){var e=t;e=n.template(e,{variable:"data"})({data:this.menu}),this.ele.append(e)},r}),define("myzone",["zepto","footer-nav"],function(e,n){new n("myzone")});
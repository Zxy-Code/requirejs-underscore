/**
 * @license text 2.0.15 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/text/LICENSE
 */

define("text", ["module"], function(e) { "use strict";

    function n(e, n) {
        return void 0 === e || "" === e ? n : e }

    function t(e, t, r, i) {
        if (t === i) return !0;
        if (e === r) {
            if ("http" === e) return n(t, "80") === n(i, "80");
            if ("https" === e) return n(t, "443") === n(i, "443") }
        return !1 }
    var r, i, a, s, o, l = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
        c = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        d = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        p = "undefined" != typeof location && location.href,
        u = p && location.protocol && location.protocol.replace(/\:/, ""),
        f = p && location.hostname,
        m = p && (location.port || void 0),
        v = {},
        h = e.config && e.config() || {};
    return r = { version: "2.0.15", strip: function(e) {
            if (e) { e = e.replace(c, "");
                var n = e.match(d);
                n && (e = n[1]) } else e = "";
            return e }, jsEscape: function(e) {
            return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029") }, createXhr: h.createXhr || function() {
            var e, n, t;
            if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
            if ("undefined" != typeof ActiveXObject)
                for (n = 0; 3 > n; n += 1) { t = l[n];
                    try { e = new ActiveXObject(t) } catch (r) {}
                    if (e) { l = [t];
                        break } }
            return e }, parseName: function(e) {
            var n, t, r, i = !1,
                a = e.lastIndexOf("."),
                s = 0 === e.indexOf("./") || 0 === e.indexOf("../");
            return -1 !== a && (!s || a > 1) ? (n = e.substring(0, a), t = e.substring(a + 1)) : n = e, r = t || n, a = r.indexOf("!"), -1 !== a && (i = "strip" === r.substring(a + 1), r = r.substring(0, a), t ? t = r : n = r), { moduleName: n, ext: t, strip: i } }, xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/, useXhr: function(e, n, i, a) {
            var s, o, l, c = r.xdRegExp.exec(e);
            return c ? (s = c[2], o = c[3], o = o.split(":"), l = o[1], o = o[0], !(s && s !== n || o && o.toLowerCase() !== i.toLowerCase() || (l || o) && !t(s, l, n, a))) : !0 }, finishLoad: function(e, n, t, i) { t = n ? r.strip(t) : t, h.isBuild && (v[e] = t), i(t) }, load: function(e, n, t, i) {
            if (i && i.isBuild && !i.inlineText) return void t();
            h.isBuild = i && i.isBuild;
            var a = r.parseName(e),
                s = a.moduleName + (a.ext ? "." + a.ext : ""),
                o = n.toUrl(s),
                l = h.useXhr || r.useXhr;
            return 0 === o.indexOf("empty:") ? void t() : void(!p || l(o, u, f, m) ? r.get(o, function(n) { r.finishLoad(e, a.strip, n, t) }, function(e) { t.error && t.error(e) }) : n([s], function(e) { r.finishLoad(a.moduleName + "." + a.ext, a.strip, e, t) })) }, write: function(e, n, t, i) {
            if (v.hasOwnProperty(n)) {
                var a = r.jsEscape(v[n]);
                t.asModule(e + "!" + n, "define(function () { return '" + a + "';});\n") } }, writeFile: function(e, n, t, i, a) {
            var s = r.parseName(n),
                o = s.ext ? "." + s.ext : "",
                l = s.moduleName + o,
                c = t.toUrl(s.moduleName + o) + ".js";
            r.load(l, t, function(n) {
                var t = function(e) {
                    return i(c, e) };
                t.asModule = function(e, n) {
                    return i.asModule(e, c, n) }, r.write(e, l, t, a) }, a) } }, "node" === h.env || !h.env && "undefined" != typeof process && process.versions && process.versions.node && !process.versions["node-webkit"] && !process.versions["atom-shell"] ? (i = require.nodeRequire("fs"), r.get = function(e, n, t) {
        try {
            var r = i.readFileSync(e, "utf8"); "\ufeff" === r[0] && (r = r.substring(1)), n(r) } catch (a) { t && t(a) } }) : "xhr" === h.env || !h.env && r.createXhr() ? r.get = function(e, n, t, i) {
        var a, s = r.createXhr();
        if (s.open("GET", e, !0), i)
            for (a in i) i.hasOwnProperty(a) && s.setRequestHeader(a.toLowerCase(), i[a]);
        h.onXhr && h.onXhr(s, e), s.onreadystatechange = function(r) {
            var i, a;
            4 === s.readyState && (i = s.status || 0, i > 399 && 600 > i ? (a = new Error(e + " HTTP status: " + i), a.xhr = s, t && t(a)) : n(s.responseText), h.onXhrComplete && h.onXhrComplete(s, e)) }, s.send(null) } : "rhino" === h.env || !h.env && "undefined" != typeof Packages && "undefined" != typeof java ? r.get = function(e, n) {
        var t, r, i = "utf-8",
            a = new java.io.File(e),
            s = java.lang.System.getProperty("line.separator"),
            o = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(a), i)),
            l = "";
        try {
            for (t = new java.lang.StringBuffer, r = o.readLine(), r && r.length() && 65279 === r.charAt(0) && (r = r.substring(1)), null !== r && t.append(r); null !== (r = o.readLine());) t.append(s), t.append(r);
            l = String(t.toString()) } finally { o.close() }
        n(l) } : ("xpconnect" === h.env || !h.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (a = Components.classes, s = Components.interfaces, Components.utils["import"]("resource://gre/modules/FileUtils.jsm"), o = "@mozilla.org/windows-registry-key;1" in a, r.get = function(e, n) {
        var t, r, i, l = {};
        o && (e = e.replace(/\//g, "\\")), i = new FileUtils.File(e);
        try { t = a["@mozilla.org/network/file-input-stream;1"].createInstance(s.nsIFileInputStream), t.init(i, 1, 0, !1), r = a["@mozilla.org/intl/converter-input-stream;1"].createInstance(s.nsIConverterInputStream), r.init(t, "utf-8", t.available(), s.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), r.readString(t.available(), l), r.close(), t.close(), n(l.value) } catch (c) {
            throw new Error((i && i.path || "") + ": " + c) } }), r }), define("text!../components/header.tpl", [], function() {
    return '<div class="header">\r\n	<h1>忆阑珊</h1>\r\n	<div class="protrait">\r\n		<img src="../images/protrait.jpg" alt="头像">\r\n	</div>\r\n</div>' }), define("header", ["text", "zepto", "underscore", "text!../components/header.tpl"], function(e, n, t, r) {
    var i = function() { this.init() };
    return i.prototype.init = function() { this.render(r) }, i.prototype.render = function(e) {
        var e = t.template(e)({ person: { name: "Han MeiMei" } });
        n("header").html(e) }, { headRender: i } }), define("text!../components/footer-nav.tpl", [], function() {
    return '	<div class="footer-nav">\r\n		<% if(data.data === \'movies\'){ %>\r\n		<a class="movies" href="../html/index.html">\r\n			<i class="icon active"></i>\r\n			<span class="active">电影</span>\r\n		</a>\r\n		<a class="sort" href="../html/rank.html"><i class="icon"></i><span>榜单</span></a>\r\n		<a class="mine" href="../html/myzone.html"><i class="icon"></i><span>我的</span></a>\r\n		<% } else if(data.data === \'sort\') { %>\r\n			<a class="movies" href="../html/index.html">\r\n				<i class="icon"></i>\r\n				<span>电影</span>\r\n			</a>\r\n			<a class="sort" href="../html/rank.html"><i class="icon active"></i><span class="active">榜单</span></a>\r\n			<a class="mine" href="../html/myzone.html"><i class="icon"></i><span>我的</span></a>\r\n		<% } else if(data.data === \'myzone\') { %>\r\n			<a class="movies" href="../html/index.html">\r\n				<i class="icon"></i>\r\n				<span>电影</span>\r\n			</a>\r\n			<a class="sort" href="../html/rank.html"><i class="icon"></i><span>榜单</span></a>\r\n			<a class="mine" href="../html/myzone.html"><i class="icon active"></i><span class="active">我的</span></a>\r\n		<% } %>\r\n	</div>\r\n' }), define("footer-nav", ["zepto", "underscore", "text!../components/footer-nav.tpl"], function(e, n, t) {
    var r = function(n) { this.ele = e("body"), this.menu = n || "movies", this.init() };
    return r.prototype.init = function() { this.render() }, r.prototype.render = function() {
        var e = t;
        e = n.template(e, { variable: "data" })({ data: this.menu }), this.ele.append(e) }, r }), define("text!../components/list.tpl", [], function() {
    return '<% _.each(data.data.data, function (item) { %>\r\n    <div class="list">\r\n        <a class="book" href="<%= item.url %>">\r\n            <div class="listCover">\r\n                <!-- <div class="serial ser_{{item.serial}}" v-if="serial" >{{item.serial}}</div> -->\r\n                <img src="<%= item.coverUrl %>" alt="封面">\r\n            </div>\r\n            <div class="listCon">\r\n                <h2><%= item.title %></h2>\r\n                <span class="price"><%= item.price %> 元起</span>\r\n                <span class="wantNum"><%= item.num %>人想看</span>\r\n                <h3>导演：<%= item.director %></h3>\r\n                <h4>主演：<%= item.starring %></h4>\r\n            </div>\r\n        </a>\r\n\r\n        <% if(data.data.inf == \'index-list\'){ %>\r\n                <%if(!item.iLike){ %>\r\n                    <div class="iLike"></div>\r\n                <% } else {%>\r\n                    <div class="iLike active"></div>\r\n                <% } %>\r\n        <% } %>\r\n\r\n        <% if(data.data.inf == \'rank\'){ %>\r\n            <div class="sort">\r\n                <span><%= item.sort %></span>\r\n            </div>\r\n        <% } %>\r\n        <!-- <div class="bookType">\r\n            <a v-for="i in type | limitBy 2" href="{{item.cate_url}}">{{i}}</a>\r\n        </div> -->\r\n    </div>\r\n<% }) %>' }), define("index-list", ["underscore", "zepto", "text!../components/list.tpl"], function(e, n, t) {
    var r = function(e, n, t, r) { this.ele = e, this.url = n, this.data = t || "", this.type = r || "get", this.init() };
    return r.prototype.init = function() { n(document).on("click", ".iLike", function() { console.log(2), console.log(this), n(this).toggleClass("active") }), this.fetch() }, r.prototype.fetch = function() {
        var e = this;
        n.ajax({ url: e.url, data: e.data, type: this.type, dataType: "json", success: function(n) {
                var t = n;
                1 === t.success && e.render(t) }, error: function() {} }) }, r.prototype.render = function(n) {
        var r = n,
            i = t;
        console.log(2), console.log(r);
        var i = e.template(i, { variable: "data" })({ data: r });
        this.ele.html(i) }, r }), define("rank", ["zepto", "header", "footer-nav", "index-list"], function(e, n, t, r) { new n.headRender;
    var i = e(".content"),
        a = "../../data/rank.json";
    new r(i, a), new t("sort") });

(function(e){function t(t){for(var a,r,o=t[0],c=t[1],d=t[2],u=0,l=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&l.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==s[o]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},s={app:0},i=[];function o(e){return c.p+"js/"+({OrderList:"OrderList","addaddress~changeaddress":"addaddress~changeaddress",addaddress:"addaddress",changeaddress:"changeaddress",address:"address",category:"category",detail:"detail",login:"login",my:"my",order:"order",register:"register",shopcar:"shopcar",theme:"theme"}[e]||e)+"."+{OrderList:"7e7e9ab4","addaddress~changeaddress":"95a47e09",addaddress:"de89f604",changeaddress:"d1497c96",address:"41270d7c",category:"892911f7",detail:"23e09a5f",login:"49255bf2",my:"9b8e1db8",order:"e9df64be",register:"7e310496",shopcar:"9db4400b",theme:"0d3926d6"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={OrderList:1,"addaddress~changeaddress":1,addaddress:1,changeaddress:1,address:1,category:1,detail:1,login:1,my:1,order:1,register:1,shopcar:1,theme:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({OrderList:"OrderList","addaddress~changeaddress":"addaddress~changeaddress",addaddress:"addaddress",changeaddress:"changeaddress",address:"address",category:"category",detail:"detail",login:"login",my:"my",order:"order",register:"register",shopcar:"shopcar",theme:"theme"}[e]||e)+"."+{OrderList:"9fabd923","addaddress~changeaddress":"d84a459d",addaddress:"22c58941",changeaddress:"22c58941",address:"150bcce8",category:"8b4b480e",detail:"b9c2b055",login:"2c32ef4d",my:"13968656",order:"9cdf2ac9",register:"6fe682b9",shopcar:"40b0f29b",theme:"df883065"}[e]+".css",s=c.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var d=i[o],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===a||u===s))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){d=l[o],u=d.getAttribute("data-href");if(u===a||u===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=i);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(e);var l=new Error;d=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}s[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/shop/",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0f94":function(e,t,n){"use strict";var a=n("f7b7"),r=n.n(a);r.a},"2e90":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"list"},e._l(e.listArray,(function(t){return n("li",{key:t.productId,staticClass:"list-item",on:{click:function(n){return e.handleClick(t.productId)}}},[n("img",{attrs:{src:[t.image?""+e.publicPath+t.image:e.publicPath+"product-rice@1.png"]}}),n("div",{staticClass:"product-info"},[n("p",{staticClass:"name"},[e._v(e._s(t.title))]),n("p",{staticClass:"price"},[e._v("￥"+e._s(t.price))])])])})),0)},r=[],s={name:"list",data:function(){return{publicPath:"/shop/"}},props:{listArray:{type:Array,default:function(){return[]}}},methods:{handleClick:function(e){this.$emit("clickProduct",e)}}},i=s,o=(n("9e8b"),n("2877")),c=Object(o["a"])(i,a,r,!1,null,"3f75176a",null);t["a"]=c.exports},"3a5e":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"spinner"},[n("div",{staticClass:"double-bounce1"}),n("div",{staticClass:"double-bounce2"})])}],s={name:"loading"},i=s,o=(n("53a2"),n("2877")),c=Object(o["a"])(i,a,r,!1,null,null,null);t["a"]=c.exports},"53a2":function(e,t,n){"use strict";var a=n("a6e4"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("66b9");var a=n("b650"),r=(n("4d48"),n("d1e1")),s=(n("81e6"),n("9ffb")),i=(n("e7e5"),n("d399")),o=(n("e17f"),n("2241")),c=(n("7844"),n("5596")),d=(n("4b0a"),n("2bb1")),u=(n("66cf"),n("343b")),l=(n("8a58"),n("e41f")),f=(n("5f5f"),n("f253")),h=(n("da3c"),n("0b33")),p=(n("bda7"),n("5e46")),m=(n("acb7"),n("67bb9")),b=(n("869a"),n("6869")),g=(n("5246"),n("6b41")),v=(n("be7f"),n("565f")),y=(n("c194"),n("7744")),C=(n("0653"),n("34e9")),k=(n("ab71"),n("58e6")),_=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},w=[],j=(n("f307"),n("2877")),P={},L=Object(j["a"])(P,O,w,!1,null,"f773c68c",null),x=L.exports,T=n("8c4f"),A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("header",[n("van-row",[n("van-col",{staticClass:"col",attrs:{span:"8",offset:"8"}},[e._v("小商铺")]),n("van-col",{staticClass:"col",attrs:{span:"4",offset:"4"}},[n("span",{staticClass:"iconfont icon-dot",on:{click:e.goLogin}},[e._v("")])])],1)],1),n("van-pull-refresh",{attrs:{"success-text":"刷新成功"},on:{refresh:e.onRefresh},model:{value:e.isRefreshing,callback:function(t){e.isRefreshing=t},expression:"isRefreshing"}},[n("section",{staticClass:"banner"},[n("van-swipe",{staticClass:"banner-wrap",attrs:{loop:!0}},e._l(e.banner,(function(t,a){return n("van-swipe-item",{key:a,staticClass:"banner-item",on:{click:function(n){return e.goDetail(t.productId)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:""+e.publicPath+t.image,expression:"`${publicPath}${item.image}`"}]})])})),1)],1),n("section",{staticClass:"topic"},[n("h2",{staticClass:"topic-head"},[e._v("精选主题")]),n("ul",{staticClass:"topic-list"},e._l(e.theme,(function(t){return n("li",{key:t.id,staticClass:"list-item",on:{click:function(n){return e.goTheme(t.theme)}}},[n("img",{attrs:{src:""+e.publicPath+t.image}})])})),0)]),n("section",{staticClass:"new-product"},[n("h2",{staticClass:"new-head"},[e._v("新品上市")]),n("List",{attrs:{listArray:e.newProduct},on:{clickProduct:e.goDetail}})],1)]),n("Loading",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}]}),n("Tab")],1)},E=[],$=n("2e90"),S=n("8654"),D=n("3a5e"),N=n("d225"),R=n("b0b4"),B=n("308d"),I=n("6bb5"),M=n("4e2b"),z=n("a75b"),F=function(e){function t(){return Object(N["a"])(this,t),Object(B["a"])(this,Object(I["a"])(t).call(this))}return Object(M["a"])(t,e),Object(R["a"])(t,[{key:"getAll",value:function(){return this.getAxios({url:"/product/home"})}}]),t}(z["a"]),K=F,U=n("93ad"),q=new U["a"],J=new K,V={name:"home",data:function(){return{publicPath:"/shop/",banner:null,newProduct:null,theme:null,isLoading:!0,isRefreshing:!1}},components:{List:$["a"],Tab:S["a"],Loading:D["a"]},methods:{goLogin:function(){this.$router.push({name:"login"})},getData:function(){var e=this;J.getAll().then((function(t){e.banner=t.data.banner,e.newProduct=t.data.newProduct,e.theme=t.data.theme,e.isLoading=!1,e.isRefreshing=!1}))},getVerify:function(){var e=this;q.verifyToken().catch((function(){e.$router.push({name:"login"})}))},goDetail:function(e){this.$router.push({name:"detail",params:{id:e}})},goTheme:function(e){this.$router.push({name:"theme",params:{theme:e}})},onRefresh:function(){this.getData()}},created:function(){this.getVerify(),this.getData()}},G=V,H=(n("0f94"),Object(j["a"])(G,A,E,!1,null,"1cdbc94e",null)),Q=H.exports;_["a"].use(T["a"]);var W=new T["a"]({routes:[{path:"/",name:"home",component:Q},{path:"/detail/:id",name:"detail",component:function(){return n.e("detail").then(n.bind(null,"c84b"))}},{path:"/category",name:"category",component:function(){return n.e("category").then(n.bind(null,"4886"))}},{path:"/shopcar",name:"shopcar",component:function(){return n.e("shopcar").then(n.bind(null,"c4b4"))}},{path:"/my",name:"my",component:function(){return n.e("my").then(n.bind(null,"4c41"))}},{path:"/theme/:theme",name:"theme",component:function(){return n.e("theme").then(n.bind(null,"de93"))}},{path:"/addresses",name:"addresses",component:function(){return n.e("address").then(n.bind(null,"0df7"))}},{path:"/order",name:"order",component:function(){return n.e("order").then(n.bind(null,"cf2a"))}},{path:"/addaddress",name:"addaddress",component:function(){return Promise.all([n.e("addaddress~changeaddress"),n.e("addaddress")]).then(n.bind(null,"2d3d"))}},{path:"/change",name:"changeaddress",component:function(){return Promise.all([n.e("addaddress~changeaddress"),n.e("changeaddress")]).then(n.bind(null,"681d"))}},{path:"/register",name:"register",component:function(){return n.e("register").then(n.bind(null,"73cf"))}},{path:"/login",name:"login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/orderlist",name:"orderlist",component:function(){return n.e("OrderList").then(n.bind(null,"bf4b"))}}],scrollBehavior:function(){return{x:0,y:0}}}),X=n("2f62");_["a"].use(X["a"]);var Y=new X["a"].Store({state:{num:1},mutations:{add:function(e){e.num++},reduce:function(e){e.num--}},actions:{}});n("8190"),n("8076");_["a"].use(a["a"]).use(r["a"]).use(s["a"]).use(i["a"]).use(o["a"]).use(c["a"]).use(d["a"]).use(u["a"]).use(l["a"]).use(f["a"]).use(h["a"]).use(p["a"]).use(m["a"]).use(b["a"]).use(g["a"]).use(v["a"]).use(y["a"]).use(C["a"]).use(k["a"]),_["a"].config.productionTip=!1,new _["a"]({router:W,store:Y,render:function(e){return e(x)}}).$mount("#app")},8076:function(e,t,n){},8190:function(e,t,n){},"84ba":function(e,t,n){"use strict";var a=n("f165"),r=n.n(a);r.a},8654:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{attrs:{id:"nav"}},[n("router-link",{staticClass:"nav-item",attrs:{to:"/",tag:"li"}},[n("span",{staticClass:"iconfont icon-common"},[e._v("")]),n("span",{staticClass:"title"},[e._v("首页")])]),n("router-link",{staticClass:"nav-item",attrs:{to:"/category",tag:"li"}},[n("span",{staticClass:"iconfont icon-common"},[e._v("")]),n("span",{staticClass:"title"},[e._v("分类")])]),n("router-link",{staticClass:"nav-item",attrs:{to:"/shopcar",tag:"li"}},[n("span",{staticClass:"iconfont icon-common"},[e._v("")]),n("span",{staticClass:"title"},[e._v("购物车")])]),n("router-link",{staticClass:"nav-item",attrs:{to:"/my",tag:"li"}},[n("span",{staticClass:"iconfont icon-common"},[e._v("")]),n("span",{staticClass:"title"},[e._v("我的")])])],1)},r=[],s={name:"tab"},i=s,o=(n("84ba"),n("2877")),c=Object(o["a"])(i,a,r,!1,null,"ff14df8c",null);t["a"]=c.exports},"93ad":function(e,t,n){"use strict";var a=n("d225"),r=n("b0b4"),s=n("308d"),i=n("6bb5"),o=n("4e2b"),c=n("a75b"),d=function(e){function t(){return Object(a["a"])(this,t),Object(s["a"])(this,Object(i["a"])(t).call(this))}return Object(o["a"])(t,e),Object(r["a"])(t,[{key:"getLogin",value:function(e,t){return this.getAxios({url:"/user/token",method:"POST",data:{username:e,password:t}})}},{key:"verifyToken",value:function(){return this.getAxios({url:"/user/token/verify"})}}]),t}(c["a"]);t["a"]=d},"9e8b":function(e,t,n){"use strict";var a=n("ef6b"),r=n.n(a);r.a},a6e4:function(e,t,n){},a75b:function(e,t,n){"use strict";n("e7e5");var a=n("d399"),r=n("d225"),s=n("b0b4"),i=n("bc3a"),o=n.n(i),c=n("27ae"),d=function(){function e(){Object(r["a"])(this,e),this.tokenKey="token"}return Object(s["a"])(e,[{key:"getAxios",value:function(t){var n=t.url,r=t.method,s=void 0===r?"GET":r,i=t.data,c=this.getTokenFromLocal(),d=this.encodeToken(c);return new Promise((function(t,r){o()({url:e.baseUrl+n,method:s,data:i,headers:{"Content-Type":"application/json",Authorization:"Basic ".concat(d)}}).then((function(e){t(e.data)})).catch((function(e){Object(a["a"])(e.response.data),r(e)}))}))}},{key:"getTokenFromLocal",value:function(){return localStorage.getItem(this.tokenKey)}},{key:"encodeToken",value:function(e){return c["Base64"].encode(e+":")}}]),e}();d.baseUrl="/v2",t["a"]=d},ae05:function(e,t,n){},ef6b:function(e,t,n){},f165:function(e,t,n){},f307:function(e,t,n){"use strict";var a=n("ae05"),r=n.n(a);r.a},f7b7:function(e,t,n){}});
//# sourceMappingURL=app.ebda1781.js.map
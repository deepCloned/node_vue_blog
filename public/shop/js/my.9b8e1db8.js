(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["my"],{"1af4":function(t,s,a){},"21f8":function(t,s,a){"use strict";var n=a("1af4"),c=a.n(n);c.a},"4c41":function(t,s,a){"use strict";a.r(s);var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"my"},[a("nav-bar",{attrs:{title:"我的"},on:{onLeft:t.goBack}}),a("div",{staticClass:"user-info"},[a("div",{staticClass:"user-avatar"}),a("div",{staticClass:"username"},[t._v(t._s(t.username))])]),a("div",{staticClass:"order",on:{click:t.goOrder}},[t._m(0),a("span",{staticClass:"iconfont icon-right"},[t._v("")])]),a("ul",{staticClass:"info"},[a("li",{staticClass:"item",on:{click:t.goAddress}},[t._m(1),a("span",{staticClass:"iconfont icon-right"},[t._v("")])]),t._m(2)]),a("Tab")],1)},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"left"},[a("span",{staticClass:"iconfont icon-order"},[t._v("")]),a("span",{staticClass:"order-all"},[t._v("我的订单")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"left"},[a("span",{staticClass:"iconfont icon-common"},[t._v("")]),a("span",{staticClass:"item-name"},[t._v("我的地址")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"item"},[a("div",{staticClass:"left"},[a("span",{staticClass:"iconfont icon-common"},[t._v("")]),a("span",{staticClass:"item-name"},[t._v("关于")])]),a("span",{staticClass:"iconfont icon-right"},[t._v("")])])}],i=a("8654"),e=a("d000"),o={name:"my",data:function(){return{username:localStorage.getItem("username")}},components:{Tab:i["a"],NavBar:e["a"]},methods:{goBack:function(){this.$router.go(-1)},goOrder:function(){this.$router.push({name:"orderlist"})},goAddress:function(){this.$router.push({name:"addresses"})}}},r=o,l=(a("c655"),a("2877")),f=Object(l["a"])(r,n,c,!1,null,"3650498e",null);s["default"]=f.exports},c655:function(t,s,a){"use strict";var n=a("cac8"),c=a.n(n);c.a},cac8:function(t,s,a){},d000:function(t,s,a){"use strict";var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"nav-bar"},[a("header",[a("van-row",[a("van-col",{staticClass:"col",attrs:{span:"3"}},[a("span",{staticClass:"iconfont icon-arrow",on:{click:t.handleClick}},[t._v("")])]),a("van-col",{staticClass:"col",attrs:{span:"8",offset:"5"}},[t._v(t._s(t.title))]),a("van-col",{staticClass:"col",attrs:{span:"4",offset:"4"}},[a("span",{staticClass:"iconfont icon-dot"},[t._v("")])])],1)],1)])},c=[],i={name:"navbar",props:{title:{type:String,default:"小商铺"}},methods:{handleClick:function(){this.$emit("onLeft")}}},e=i,o=(a("21f8"),a("2877")),r=Object(o["a"])(e,n,c,!1,null,"4664ac92",null);s["a"]=r.exports}}]);
//# sourceMappingURL=my.9b8e1db8.js.map
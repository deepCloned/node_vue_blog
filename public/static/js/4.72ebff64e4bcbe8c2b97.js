webpackJsonp([4],{T3Ij:function(t,e){},hgXc:function(t,e){},lk5E:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("B7ZF"),c=a("Dd8w"),n=a.n(c),i=a("NYxO"),r=a("oAV5"),o={name:"About",data:function(){return{active:"active"}},computed:n()({},Object(i.c)(["username","mySelectState"])),methods:n()({},Object(i.b)(["changeMySelectState"]),{toWrite:Object(r.d)(function(){this.$router.push("/my/write")},1e3),toCllection:Object(r.d)(function(){this.$router.push("/my/collection")},1e3)})},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"about"},[a("header",[a("img",{attrs:{src:"",alt:""}}),t._v(" "),a("span",{staticClass:"name"},[t._v(t._s(t.username))])]),t._v(" "),a("div",{staticClass:"list-wrap"},[a("ul",{staticClass:"nav"},[a("li",{staticClass:"item",class:["my"===t.mySelectState?"active":""],on:{click:t.toWrite}},[a("span",[t._v("我写的文章")])]),t._v(" "),a("li",{staticClass:"item",class:["like"===t.mySelectState?"active":""],on:{click:t.toCllection}},[a("span",[t._v("我喜欢的文章")])])]),t._v(" "),a("transition",{attrs:{duration:300,mode:"out-in","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[a("router-view")],1)],1)])},staticRenderFns:[]};var u=a("VU/8")(o,l,!1,function(t){a("T3Ij")},"data-v-19b0bd30",null).exports,d={name:"My",components:{Header:s.a,About:u}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"my"},[e("section",{staticClass:"header"},[e("Header")],1),this._v(" "),e("About")],1)},staticRenderFns:[]};var m=a("VU/8")(d,v,!1,function(t){a("hgXc")},"data-v-33c3a4af",null);e.default=m.exports}});
//# sourceMappingURL=4.72ebff64e4bcbe8c2b97.js.map
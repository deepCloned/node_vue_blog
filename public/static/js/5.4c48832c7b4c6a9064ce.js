webpackJsonp([5],{fkfe:function(e,a){},vdVF:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("Dd8w"),s=t.n(n),c=t("6PdC"),o=t("zL8q"),i=t("mtWM"),r=t.n(i),l=t("T452"),u=t("NYxO"),d={name:"Login",data:function(){return{account:"",password:"",cancelBlock:!1}},computed:s()({},Object(u.c)(["isLogin","username","token"])),methods:s()({},Object(u.b)(["changeToken","changeUsername","changeLoginState"]),{clearAccountValue:function(){this.account=""},clearPasswordValue:function(){this.password=""},getLogin:function(){var e=this,a=c.c.getType(this.account),t=r.a.CancelToken.source();r()({url:l.a.baseUrl,method:"POST",data:{account:this.account,password:this.password,type:a}},{cancelToken:t.token}).then(function(a){Object(o.Message)({message:"登录成功",type:"success"});var t=a.data.token,n=a.data.username;localStorage.setItem("username",n),localStorage.setItem("token",t),e.changeToken(t),e.changeUsername(n),e.changeLoginState(!0),e.$router.push({name:"Home"})}),t.cancel()}})},p={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"login"},[t("header",[e._v("欢迎登录")]),e._v(" "),t("ul",{staticClass:"input-box"},[t("li",{staticClass:"item username"},[t("span",{staticClass:"iconfont"},[e._v("")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],attrs:{type:"text",placeholder:"用户名/邮箱"},domProps:{value:e.account},on:{input:function(a){a.target.composing||(e.account=a.target.value)}}}),e._v(" "),t("span",{staticClass:"iconfont cancel",on:{click:e.clearAccountValue}},[e._v("\n      \n      ")])]),e._v(" "),t("li",{staticClass:"item password"},[t("span",{staticClass:"iconfont"},[e._v("")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}}),e._v(" "),t("span",{staticClass:"iconfont cancel",on:{click:e.clearPasswordValue}},[e._v("")])])]),e._v(" "),t("div",{staticClass:"submit",on:{click:e.getLogin}},[e._v("登录")])])},staticRenderFns:[]};var m=t("VU/8")(d,p,!1,function(e){t("fkfe")},"data-v-6a473522",null);a.default=m.exports}});
//# sourceMappingURL=5.4c48832c7b4c6a9064ce.js.map
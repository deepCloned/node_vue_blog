webpackJsonp([4],{PmIv:function(s,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=a("6PdC"),n=a("zL8q"),o={name:"Register",data:function(){return{username:"",email:"",password:"",confirmPassword:"",cancelBlock:!1}},methods:{clearUsernameValue:function(){this.username=""},clearEmailValue:function(){this.email=""},clearPasswordValue:function(){this.password=""},clearConfirmPasswordValue:function(){this.confirmPassword=""},getRegister:function(){var s=this;t.c.checkUsername(this.username)&&t.c.checkEmail(this.email)&&t.c.checkPassword(this.password)&&t.c.checkPassword(this.confirmPassword)&&t.c.checkConfirmPassword(this.password,this.confirmPassword)&&this.postAxios("v1/user/register",{username:this.username,email:this.email,password:this.password,confirmPassword:this.confirmPassword}).then(function(e){console.log(e),200===e.status&&0===e.data.errorCode&&(Object(n.Message)({message:e.data.message,type:"success"}),s.$router.push({name:"Login"}))})}}},i={render:function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("section",{staticClass:"register"},[a("header",[s._v("欢迎注册")]),s._v(" "),a("ul",{staticClass:"input-box"},[a("li",{staticClass:"item username"},[a("span",{staticClass:"iconfont"},[s._v("")]),s._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:s.username,expression:"username"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:s.username},on:{input:function(e){e.target.composing||(s.username=e.target.value)}}}),s._v(" "),a("span",{staticClass:"iconfont cancel",on:{click:s.clearUsernameValue}},[s._v("\n      \n      ")])]),s._v(" "),a("li",{staticClass:"item email"},[a("span",{staticClass:"iconfont"},[s._v("")]),s._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:s.email,expression:"email"}],attrs:{type:"text",placeholder:"邮箱"},domProps:{value:s.email},on:{input:function(e){e.target.composing||(s.email=e.target.value)}}}),s._v(" "),a("span",{staticClass:"iconfont cancel",on:{click:s.clearEmailValue}},[s._v("\n      \n      ")])]),s._v(" "),a("li",{staticClass:"item password"},[a("span",{staticClass:"iconfont"},[s._v("")]),s._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:s.password},on:{input:function(e){e.target.composing||(s.password=e.target.value)}}}),s._v(" "),a("span",{staticClass:"iconfont cancel",on:{click:s.clearPasswordValue}},[s._v("\n      \n      ")])]),s._v(" "),a("li",{staticClass:"item confirmPassword"},[a("span",{staticClass:"iconfont"},[s._v("")]),s._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:s.confirmPassword,expression:"confirmPassword"}],attrs:{type:"password",placeholder:"确认密码"},domProps:{value:s.confirmPassword},on:{input:function(e){e.target.composing||(s.confirmPassword=e.target.value)}}}),s._v(" "),a("span",{staticClass:"iconfont cancel",on:{click:s.clearConfirmPasswordValue}},[s._v("\n      \n      ")])])]),s._v(" "),a("div",{staticClass:"submit",on:{click:s.getRegister}},[s._v("注册")])])},staticRenderFns:[]};var r=a("VU/8")(o,i,!1,function(s){a("jZAy")},"data-v-eea630ba",null);e.default=r.exports},jZAy:function(s,e){}});
//# sourceMappingURL=4.3972a89d4f8433e23440.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"0b36":function(a,t,e){"use strict";var s=e("6071"),r=e.n(s);r.a},6071:function(a,t,e){},a55b:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("section",{staticClass:"login"},[a._m(0),e("div",{staticClass:"login-box"},[e("van-cell-group",[e("van-field",{attrs:{label:"用户名",placeholder:"请输入用户名",required:"","error-message":a.usernameError},model:{value:a.username,callback:function(t){a.username=t},expression:"username"}}),e("van-field",{attrs:{type:"password",label:"密码",placeholder:"请输入密码",required:"","error-message":a.passwordError},model:{value:a.password,callback:function(t){a.password=t},expression:"password"}})],1),e("van-button",{staticClass:"submit",attrs:{loading:a.loading,type:"primary",size:"large","loading-text":"登录中..."},on:{click:a.handleSubmit}},[a._v("\n      登录\n    ")]),e("router-link",{staticClass:"go-register",attrs:{to:"/register",tag:"div"}},[a._v("没有账号？立即注册")])],1)])},r=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"logo"},[s("div",{staticClass:"logo-img"},[s("img",{attrs:{src:e("cf05"),alt:"logo"}})]),s("p",{staticClass:"title"},[a._v("小商铺")])])}],n=e("93ad"),o=e("c546"),i=new n["a"],l=new o["a"],V={name:"login",data:function(){return{username:"",password:"",usernameError:"",passwordError:"",loading:!1}},methods:{handleSubmit:function(){var a=this;this.validate(),this.canSubmit&&(this.loading=!0,i.getLogin(this.username,this.password).then((function(t){a.loading=!1,a.$toast("登录成功"),a.$router.push({name:"home"}),localStorage.setItem("token",t.token),localStorage.setItem("username",t.username)})).catch((function(){a.loading=!1})))},validate:function(){this.usernameError=l.validateUsername(this.username),this.passwordError=l.validatePassword(this.password),this.usernameError||this.passwordError||(this.canSubmit=!0)}}},A=V,d=(e("0b36"),e("2877")),u=Object(d["a"])(A,s,r,!1,null,"0814ee47",null);t["default"]=u.exports},c546:function(a,t,e){"use strict";var s=e("d225"),r=e("b0b4"),n=function(){function a(){Object(s["a"])(this,a),this.usernameReg=/[A-Za-z0-9_\-\u4e00-\u9fa5]{6,32}/,this.emailReg=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,this.passwordReg=/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,16}$/,this.usernameNotNull="用户名不能为空",this.usernameNotLegal="用户名不得少于6个字符",this.passwordNotNull="密码不能为空",this.passwordNotLegal="密码包含数字、字母、符号中的两种，不少于8位"}return Object(r["a"])(a,[{key:"validateUsername",value:function(a){return a?this.usernameReg.test(a)?"":this.usernameNotLegal:this.usernameNotNull}},{key:"validatePassword",value:function(a){return a?this.passwordReg.test(a)?"":this.passwordNotLegal:this.passwordNotNull}}]),a}();t["a"]=n},cf05:function(a,t){a.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=login.49255bf2.js.map
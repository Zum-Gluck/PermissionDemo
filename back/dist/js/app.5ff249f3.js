(function(){"use strict";var e={9658:function(e,t,n){var r={};n.r(r),n.d(r,{getRoleList:function(){return H},getUserInfo:function(){return q},login:function(){return V},updateRole:function(){return z}});var o=n(7195),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},["login"!==e.$route.name?t("nav",[t("router-link",{attrs:{to:"/home"}},[e._v("首页")]),e._v(" | "),t("router-link",{attrs:{to:"/permission"}},[e._v("权限")]),t("el-button",{staticStyle:{margin:"0 30px 0 100px",cursor:"pointer"},attrs:{type:"danger",size:"mini"},on:{click:e.logout}},[e._v("退出登陆")]),t("span",[e._v("欢迎～"+e._s(e.userInfo.username))])],1):e._e(),t("router-view")],1)},i=[],s=(n(7658),n(408)),l={computed:{...(0,s.Se)(["userInfo"])},methods:{logout(){this.$store.dispatch("logout"),this.$router.push("/login")}}},u=l,c=n(1001),f=(0,c.Z)(u,a,i,!1,null,null,null),m=f.exports,p=n(2241),d=function(){var e=this,t=e._self._c;return t("el-card",{staticClass:"container"},[t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[t("PerDiv",{attrs:{path:"首页/表单/活动名称",type:"input",value:e.form.name,label:"活动名称"}},[t("el-form-item",{attrs:{label:"活动名称"}},[t("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),t("PerDiv",{attrs:{path:"首页/表单/活动区域",type:"select",value:e.form.region,label:"活动区域"}},[t("el-form-item",{attrs:{label:"活动区域"}},[t("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[t("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1),t("el-form-item",{attrs:{label:"活动时间"}},[t("el-col",{attrs:{span:11}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),t("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),t("el-col",{attrs:{span:11}},[t("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),t("el-form-item",{attrs:{label:"即时配送"}},[t("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),t("el-form-item",{attrs:{label:"活动性质"}},[t("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[t("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),t("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),t("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),t("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),t("el-form-item",{attrs:{label:"特殊资源"}},[t("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[t("el-radio",{attrs:{label:"线上品牌商赞助"}}),t("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),t("el-form-item",{attrs:{label:"活动形式"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),t("el-button",[e._v("取消")])],1)],1)],1)},h=[],v=function(){var e=this,t=e._self._c;return e.per.show?t("div",[e.per.write?e._t("default"):["input"===e.type?[t("el-form-item",{attrs:{label:e.label}},[t("el-input",{attrs:{value:e.value,disabled:""}})],1)]:"select"===e.type?[t("el-form-item",{attrs:{label:"活动区域"}},[t("el-select",{attrs:{value:e.value,disabled:"",placeholder:"请选择活动区域"}},[t("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)]:[t("span",[e._v(e._s(e.value||"无权限"))])]]],2):e._e()},g=[],b={name:"PerDiv",props:{path:{type:String,default:"",validator:function(e){return e.length>0}},type:{type:String,default:""},value:{type:[String,Number],default:null},label:{type:String,default:""}},components:{},data(){return{per:{show:!1,write:!1}}},computed:{...(0,s.Se)({userInfo:"userInfo"})},watch:{userInfo:function(e){this.per=this.getPermissionByPath(this.path)}},created(){},mounted(){},methods:{getPermissionByPath(e){if(!e.length)return{show:!1,write:!1};const t=this.userInfo.permission;if("*"===t)return{show:!0,write:!0};const n=JSON.parse(t),r=e.split("/"),o=r.reduce(((e,t)=>e[t]),n);return o||{show:!1,write:!1}}}},y=b,_=(0,c.Z)(y,v,g,!1,null,"9c9894a4",null),S=_.exports,w={name:"HomeVue",components:{PerDiv:S},data(){return{form:{name:"名字",region:"shanghai",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},ipt:123}},methods:{onSubmit(){console.log("submit!")}}},k=w,E=(0,c.Z)(k,d,h,!1,null,"14148776",null),x=E.exports,P=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,autocomplete:"on","label-position":"left"}},[t("div",{staticClass:"title-container"},[t("h3",{staticClass:"title"},[e._v("登录")])]),t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),t("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin.apply(null,arguments)}}},[e._v(" 登 录 ")]),t("div",{staticStyle:{position:"relative"}},[t("div",{staticClass:"tips"},[t("span",[e._v("Username : admin")]),t("span",[e._v("Password : 123456")]),t("span",{staticClass:"ml"},[e._v("该账号默认拥有全部权限")])]),t("div",{staticClass:"tips"},[t("span",{staticStyle:{"margin-right":"18px"}},[e._v("Username : editor")]),t("span",[e._v("Password : 123456")]),t("span",{staticClass:"ml"},[e._v("该账号默认拥有部分读写权限")])]),t("div",{staticClass:"tips"},[t("span",{staticStyle:{"margin-right":"18px"}},[e._v("Username : staff")]),t("span",{staticStyle:{"margin-left":"11px"}},[e._v("Password : 123456")]),t("span",{staticClass:"ml"},[e._v("该账号默认拥有部分只读权限")])])])],1)],1)},O=[],I={components:{},name:"LoginVue",data(){return{loginForm:{username:"admin",password:"123456"}}},watch:{},created(){},mounted(){},destroyed(){},methods:{...(0,s.nv)({login:"login"}),handleLogin(){this.login(this.loginForm).then((e=>{this.$router.push("/home"),this.$message.success("登陆成功")})).catch((e=>{this.$message.error(e.message||"登录时出现了未知的错误"),console.log("登录时出现了错误",e)}))}}},C=I,T=(0,c.Z)(C,P,O,!1,null,"da0640fe",null),N=T.exports;o["default"].use(p.ZP);const F=[{path:"/",redirect:"/login"},{path:"/login",name:"login",component:N},{path:"/home",name:"home",component:x},{path:"/permission",name:"permission",component:()=>n.e(15).then(n.bind(n,8015))}],$=()=>new p.ZP({mode:"hash",scrollBehavior:()=>({y:0}),routes:F}),j=$();function U(){const e=$();p.ZP.matcher=e.matcher}var A=j,L=n(306);const R="Admin-Token";function Z(){return localStorage.getItem(R)}function B(e){return localStorage.setItem(R,e)}function D(){return localStorage.removeItem(R)}console.log({VUE_APP_BASE_URL:"http://114.132.65.106",NODE_ENV:"production",BASE_URL:"/"});const M=L.Z.create({baseURL:"http://114.132.65.106",timeout:5e3});M.interceptors.request.use((async e=>{const t=J.getters.token;return t&&(e.headers["token"]=Z()),e}),(e=>(console.log(e),Promise.reject(e)))),M.interceptors.response.use((e=>e.data),(e=>(401===e.response.status&&(D(),A.push("/login")),Promise.reject(e.response.data))));var K=M;const V=e=>K.post("login",e),q=()=>K.get("userinfo"),H=()=>K.get("role/list"),z=e=>K.post("role/update",e);o["default"].use(s.ZP);var J=new s.ZP.Store({state:{userInfo:{},token:Z()},getters:{userInfo:e=>e.userInfo,token:e=>e.token},mutations:{SET_USERINFO(e,t){e.userInfo=t},SET_TOKEN(e,t){e.token=t},SET_PERMISSION(e,t){e.userInfo.permission=t}},actions:{login({commit:e},t){return new Promise(((n,r)=>{V(t).then((t=>{const{token:r,...o}=t.data;e("SET_USERINFO",o),e("SET_TOKEN",r),B(r),n()})).catch((e=>{r(e)}))}))},logout({commit:e}){D(),e("SET_USERINFO",null),e("SET_TOKEN",""),U()},getUserInfo({commit:e}){q().then((t=>{e("SET_USERINFO",t.data)}))},setPermission({commit:e},t){e("SET_PERMISSION",t)}},modules:{}}),G=n(5114),Q=n.n(G),W=r;A.beforeEach((async(e,t,n)=>{const r=Z();r?(await J.dispatch("getUserInfo"),n()):"/login"!==e.path?n("login"):n()})),o["default"].config.productionTip=!1,o["default"].use(Q()),o["default"].prototype.$api=W,new o["default"]({router:A,store:J,render:e=>e(m)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var s=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".39b55d32.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".5d09cdcf.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="front:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var s,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var f=u[c];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+a){s=f;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[o];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,a.parentNode&&a.parentNode.removeChild(a),o(l)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return o();e(r,s,null,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={15:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),s=new Error,l=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],s=r[1],l=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var c=l(n)}for(t&&t(r);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkfront"]=self["webpackChunkfront"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9658)}));r=n.O(r)})();
//# sourceMappingURL=app.5ff249f3.js.map
webpackJsonp([6],{140:function(e,n){},178:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",[e._v("\n    "+e._s(e.$t("message.msg"))+"\n    "),t("select",{ref:"lang",on:{change:function(n){e.change()}}},[t("option",{attrs:{value:"1"}},[e._v("\n        中文\n      ")]),e._v(" "),t("option",{attrs:{value:"2"}},[e._v("\n        English\n      ")])])]),e._v(" "),t("p")])},staticRenderFns:[]}},37:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"message",function(){return a});var a={msg:"hello world"}},38:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"message",function(){return a});var a={msg:"你好,世界"}},44:function(e,n,t){function a(e){t(140)}var o=t(0)(t(80),t(178),a,null,null);e.exports=o.exports},72:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),o=t(44),s=t.n(o),u=t(42);a.default.use(u.a),a.default.config.productionTip=!1;var r=new u.a({locale:"zh_CN",messages:{zh_CN:t(38),en_US:t(37)}});new a.default({el:"#app",template:"<App/>",i18n:r,components:{App:s.a}})},80:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"app",data:function(){return{}},mounted:function(){},components:{},methods:{change:function(){var e=this.$refs.lang.value;this.$i18n.locale="1"===e?"zh_CN":"2"===e?"en_US":"zh_CN"}}}}},[72]);
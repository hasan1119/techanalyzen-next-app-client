(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8711],{9715:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reset",function(){return n(2092)}])},2092:function(e,s,n){"use strict";n.r(s),n.d(s,{STEPS:function(){return N},default:function(){return w}});var r=n(5893),t=n(9008),a=n.n(t),o=n(1163),i=n(7294),c=n(9473),l=n(3152),u=n(3928),d=n(6042),m=n(9396),h=n(8193),p=n(607),f=n(7474),x=function(e){var s=e.userInfo,n=e.setUserInfo,t=e.error,a=e.setError,l=e.loading,u=(e.setLoading,function(e){var r=(0,d.Z)({},s);a({});var o=e.target.name,i=e.target.value.trim();r[o]=i,n(r),"password"!==o&&"confirmPassword"!==o||(clearTimeout(E.current),E.current=setTimeout((function(){"password"===o&&(function(e){var s=[],n=!0;return e?(e.length<8&&(s.push("Password must contains 8 characters"),n=!1),/[a-z]/.test(e)||(s.push("1 lowercase"),n=!1),/[A-Z]/.test(e)||(s.push("1 uppercase"),n=!1),/\d/.test(e)||(s.push("a number"),n=!1),/[~`!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/.test(e)||(s.push("a special character"),n=!1),s.length?a((0,m.Z)((0,d.Z)({},t),{password:s.join(", ")+"!"})):a((0,m.Z)((0,d.Z)({},t),{password:""})),n):(s.push("Password is required!"),n=!1,a((0,m.Z)((0,d.Z)({},t),{password:s.join(", ")})),n)}(i)&&a((0,m.Z)((0,d.Z)({},t),{password:""})));"confirmPassword"===o&&(s.password!==i?a((0,m.Z)((0,d.Z)({},t),{confirmPassword:"Password does't match"})):a((0,m.Z)((0,d.Z)({},t),{confirmPassword:""})))}),800))}),x=(0,i.useState)(!1),j=x[0],v=x[1],g=(0,i.useState)(!1),N=g[0],w=g[1],P=(0,i.useRef)(),E=(0,i.useRef)(),O=(0,i.useRef)(),_=(0,c.I0)(),I=(0,o.useRouter)(),Z=function(e){"password"===e?(P.current.type=j?"password":"text",v(!j)):(w(!N),O.current.type=N?"password":"text")};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s.password!==s.confirmPassword?a((0,m.Z)((0,d.Z)({},t),{confirmPassword:"Password doesn't match"})):t.password||t.confirmPassword?console.log("something went wrong!"):f.Z.post("/auth/v1/passwordResetAndLogin",s).then((function(e){var s=e.data;"success"===s.status&&(_((0,p.x4)(s.user)),I.push("/dashboard"))})).catch((function(e){console.log(e)}))},className:"w-100",children:[(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h2",{children:"\u09b0\u09bf\u09b8\u09c7\u099f \u09aa\u09be\u09b8\u0993\u09df\u09be\u09b0\u09cd\u09a1"})}),(0,r.jsxs)("div",{className:"form_group mt_3",children:[(0,r.jsx)("label",{children:"\u09aa\u09be\u09b8\u0993\u09df\u09be\u09b0\u09cd\u09a1"}),(0,r.jsx)("div",{className:"input_container",children:(0,r.jsxs)("div",{className:"input",children:[(0,r.jsx)("input",{type:"password",ref:P,placeholder:"\u09a8\u09a4\u09c1\u09a8 \u09aa\u09be\u09b8\u0993\u09df\u09be\u09b0\u09cd\u09a1 \u09a6\u09bf\u09a8",name:"password",className:"input",value:s.password,onChange:u}),j?(0,r.jsx)("div",{className:"toggle_pass",onClick:function(){return Z("password")},children:(0,r.jsx)(h.I0d,{})}):(0,r.jsx)("div",{className:"toggle_pass",onClick:function(){return Z("password")},children:(0,r.jsx)(h.Zju,{})})]})}),t.password&&(0,r.jsx)("div",{className:"errorMsg",children:t.password})]}),(0,r.jsxs)("div",{className:"form_group mt_3",children:[(0,r.jsx)("label",{children:"\u0995\u09a8\u09ab\u09be\u09b0\u09cd\u09ae \u09aa\u09be\u09b8\u0993\u09df\u09be\u09b0\u09cd\u09a1"}),(0,r.jsx)("div",{className:"input_container",children:(0,r.jsxs)("div",{className:"input",children:[(0,r.jsx)("input",{type:"password",ref:O,placeholder:"\u09aa\u09c1\u09a8\u09b0\u09be\u09df \u09a8\u09a4\u09c1\u09a8 \u09aa\u09be\u09b8\u0993\u09df\u09be\u09b0\u09cd\u09a1 \u09a6\u09bf\u09a8",name:"confirmPassword",className:"input",value:s.confirmPassword,onChange:u}),N?(0,r.jsx)("div",{className:"toggle_pass",onClick:function(){return Z("confirmPassword")},children:(0,r.jsx)(h.I0d,{})}):(0,r.jsx)("div",{className:"toggle_pass",onClick:function(){return Z("confirmPassword")},children:(0,r.jsx)(h.Zju,{})})]})}),t.confirmPassword&&(0,r.jsx)("div",{className:"errorMsg",children:t.confirmPassword})]}),(0,r.jsx)("button",{type:"submit",className:"common_btn",children:l?(0,r.jsx)("div",{className:"d-flex justify-content-center",children:(0,r.jsx)("div",{className:"spinner-border",role:"status",children:(0,r.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):"\u09aa\u09be\u09b8\u0993\u09df\u09be\u09b0\u09cd\u09a1 \u09b0\u09bf\u09b8\u09c7\u099f & \u09b2\u0997\u09bf\u09a8"})]})})},j=n(3589),v=function(e){var s=e.userInfo,n=e.setUserInfo,t=e.error,a=e.setError,l=e.loading,u=e.setLoading,h=e.setStep,p=((0,c.I0)(),(0,i.useRef)()),x=((0,o.useRouter)(),(0,i.useRef)());return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),"INVALID"!==s.type?(u(!0),a({}),f.Z.post("/auth/v1/reset",s).then((function(e){e.data;a({}),h(N.OTPFORM)})).catch((function(e){var s=e.response,n=s&&s.data;n&&n.message?a({phoneOrEmail:n.message}):n&&"waiting"===n.status&&(x.current=n.duration,console.log(x.current),p.current=setInterval((function(){x.current<1?(clearInterval(p.current),a({})):(x.current=x.current-1,a((0,m.Z)((0,d.Z)({},t),{phoneOrEmail:"Please wait ".concat(x.current," seconds")})))}),1e3))})).finally((function(){return u(!1)}))):console.log("invalid",s)},className:"w-100",children:[(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h2",{children:"\u09b0\u09bf\u09b8\u09c7\u099f \u09aa\u09be\u09b8\u0993\u09df\u09be\u09b0\u09cd\u09a1"})}),(0,r.jsxs)("div",{className:"form_group mt_3",children:[(0,r.jsx)("label",{children:"\u09ae\u09cb\u09ac\u09be\u0987\u09b2 \u0985\u09a5\u09ac\u09be \u0987-\u09ae\u09c7\u0987\u09b2"}),(0,r.jsx)("div",{className:"input_container",children:(0,r.jsx)("div",{className:"input",children:(0,r.jsx)("input",{type:"text",placeholder:"\u0986\u09aa\u09a8\u09be\u09b0 \u09ae\u09cb\u09ac\u09be\u0987\u09b2 \u09a8\u09ae\u09cd\u09ac\u09b0 \u0985\u09a5\u09ac\u09be \u0987-\u09ae\u09c7\u0987\u09b2 \u09a6\u09bf\u09a8",onChange:function(e){var r=e.target.value.trim(),o=function(e){var s=function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}(e),n=(0,j.A)(e);return s?"EMAIL":n?"PHONE":"INVALID"}(r);if(n((0,m.Z)((0,d.Z)({},s),{type:o,phoneOrEmail:r})),!r)return a({});clearTimeout(p.current),p.current=setTimeout((function(){a("INVALID"===o?(0,m.Z)((0,d.Z)({},t),{phoneOrEmail:"\u0986\u09aa\u09a8\u09be\u09b0 \u0987\u09ae\u09c7\u0987\u09b2/\u09ab\u09cb\u09a8 \u09b8\u09a0\u09bf\u0995 \u09a8\u09df"}):{})}),800)},value:s.phoneOrEmail,name:"phoneOrEmail"})})}),t.phoneOrEmail&&(0,r.jsx)("div",{className:"errorMsg",children:t.phoneOrEmail})]}),(0,r.jsx)("button",{type:"submit",className:"common_btn",children:l?(0,r.jsx)("div",{className:"d-flex justify-content-center",children:(0,r.jsx)("div",{className:"spinner-border",role:"status",children:(0,r.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):"\u098f\u0997\u09bf\u09df\u09c7 \u09af\u09be\u09a8"})]})})},g=function(e){var s=e.userInfo,n=e.setUserInfo,t=e.error,a=e.setError,l=e.loading,u=e.setLoading,m=e.setStep,p=((0,c.I0)(),(0,o.useRouter)(),(0,i.useState)("")),x=(p[0],p[1],(0,i.useState)(60)),j=x[0],v=x[1],g=(0,i.useRef)();return(0,i.useEffect)((function(){g.current=setInterval((function(){v((function(e){return e-1}))}),1e3)}),[]),(0,i.useEffect)((function(){j<=0&&clearInterval(g.current)}),[j]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a({}),f.Z.post("/auth/v1/verifyResetOTP",s).then((function(e){"OK"===e.data.status&&m(N.CREATEPASSWORD)})).catch((function(e){var s=e.response,n=s&&s.data;a({OTP:n.message})}))},className:"w-100",action:"index.html",children:[(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h2",{children:"\u09b0\u09bf\u09b8\u09c7\u099f \u09aa\u09be\u09b8\u0993\u09df\u09be\u09b0\u09cd\u09a1"})}),(0,r.jsxs)("div",{className:"form_group mt_3",children:[(0,r.jsx)("label",{children:"PHONE"===s.type?"\u09ae\u09cb\u09ac\u09be\u0987\u09b2\u09c7 \u09aa\u09be\u09a0\u09be\u09a8\u09cb \u09ea \u09a1\u09bf\u099c\u09bf\u099f\u09c7\u09b0 \u0995\u09cb\u09a1\u099f\u09bf \u09b2\u09bf\u0996\u09c1\u09a8":" \u0987-\u09ae\u09c7\u0987\u09b2\u09c7 \u09aa\u09be\u09a0\u09be\u09a8\u09cb \u09ea \u09a1\u09bf\u099c\u09bf\u099f\u09c7\u09b0 \u0995\u09cb\u09a1\u099f\u09bf \u09b2\u09bf\u0996\u09c1\u09a8"}),(0,r.jsx)("div",{className:"input_container",children:(0,r.jsx)("div",{className:"input",children:(0,r.jsx)("input",{maxLength:"4",placeholder:"\u098f\u0996\u09be\u09a8\u09c7 \u0995\u09cb\u09a1 \u09a6\u09bf\u09a8",className:"input",value:s.OTP,onChange:function(e){var r=(0,d.Z)({},s);a({});var t=e.target.name,o=e.target.value.trim();r[t]=o,n(r)},type:"text",name:"OTP"})})}),t.OTP&&(0,r.jsx)("div",{className:"errorMsg",children:t.OTP||""})]}),(0,r.jsx)("button",{type:"submit",className:"common_btn",children:l?(0,r.jsx)("div",{className:"d-flex justify-content-center",children:(0,r.jsx)("div",{className:"spinner-border",role:"status",children:(0,r.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):"\u098f\u0997\u09bf\u09df\u09c7 \u09af\u09be\u09a8"}),(0,r.jsxs)("div",{className:"resend_otp",children:[(0,r.jsx)("p",{children:"\u0995\u09cb\u09a8\u09cb \u0995\u09cb\u09a1 \u09aa\u09be\u09a8\u09a8\u09bf?"}),j>0?(0,r.jsxs)("p",{children:["\u0986\u09ac\u09be\u09b0 \u0985\u09a8\u09c1\u09b0\u09cb\u09a7 \u099c\u09be\u09a8\u09be\u09a4\u09c7 \u0985\u09aa\u09c7\u0995\u09cd\u09b7\u09be \u0995\u09b0\u09c1\u09a8",(0,r.jsxs)("span",{children:[" ",j," \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1"]})]}):(0,r.jsx)("button",{onClick:function(e){v(60),g.current=setInterval((function(){v((function(e){return e-1}))}),1e3),a({}),f.Z.post("/auth/v1/reset",s).then((function(e){e.data;a({})})).catch((function(e){var s=e.response,n=s&&s.data;n&&n.message?a({phoneOrEmail:message}):console.log(n)})).finally((function(){return u(!1)}))},type:"button",className:"resend_btn",children:"\u09aa\u09c1\u09a8\u09b0\u09be\u09df OTP \u09aa\u09be\u09a0\u09be\u09a8"})]}),(0,r.jsxs)("div",{className:"forget_number wrong_number_box",children:[(0,r.jsx)("p",{children:"PHONE"===s.type?"\u09ae\u09cb\u09ac\u09be\u0987\u09b2 \u09a8\u09be\u09ae\u09cd\u09ac\u09be\u09b0 \u09ad\u09c1\u09b2 \u09b9\u09df\u09a8\u09bf \u09a4\u09cb?":"\u0987-\u09ae\u09c7\u0987\u09b2 \u09ad\u09c1\u09b2 \u09b9\u09df\u09a8\u09bf \u09a4\u09cb?"}),(0,r.jsxs)("div",{className:"edit_number",children:[(0,r.jsx)("span",{className:"info",children:s.phoneOrEmail}),(0,r.jsxs)("span",{onClick:function(){m("EmailOrPhone")},style:{cursor:"pointer",color:"#e91e63"},children:[(0,r.jsx)(h.QML,{}),"\u09aa\u09b0\u09bf\u09ac\u09b0\u09cd\u09a4\u09a8 \u0995\u09b0\u09c1\u09a8"]})]})]})]})})},N={EMAILORPHONE:"EmailOrPhone",OTPFORM:"OTPForm",CREATEPASSWORD:"CreatePassword"},w=function(){var e=(0,o.useRouter)(),s=(0,c.v9)((function(e){return e.user})).user,n=(void 0===s?{}:s)._id,t=(0,i.useState)(N.EMAILORPHONE),d=t[0],m=t[1],h=(0,i.useState)({phoneOrEmail:"",type:"INVALID",password:"",confirmPassword:"",OTP:""}),p=h[0],f=h[1],j=(0,i.useState)({phoneOrEmail:"",password:"",confirmPassword:""}),w=j[0],P=j[1],E=(0,i.useState)(!1),O=E[0],_=E[1];if(!n)return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:"Reset | Techanalyzen"})}),(0,r.jsx)(l.Z,{}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"login_container",children:[(0,r.jsx)("div",{className:"img",children:(0,r.jsx)("img",{src:"/assets/images/auth/reset-password.png"})}),(0,r.jsxs)("div",{className:"login-content login-form",children:[d===N.EMAILORPHONE&&(0,r.jsx)(v,{userInfo:p,setUserInfo:f,error:w,setError:P,loading:O,setLoading:_,setStep:m}),d===N.OTPFORM&&(0,r.jsx)(g,{userInfo:p,setUserInfo:f,error:w,setError:P,loading:O,setLoading:_,setStep:m}),d===N.CREATEPASSWORD&&(0,r.jsx)(x,{userInfo:p,setUserInfo:f,error:w,setError:P,loading:O,setLoading:_,setStep:m})]})]})}),(0,r.jsx)(u.Z,{})]});e.push("/")}},3589:function(e,s,n){"use strict";function r(e){return/^01[0-9]{9}$/.test(e)}function t(e){return!!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}n.d(s,{A:function(){return r},o:function(){return t}})},9008:function(e,s,n){e.exports=n(5443)}},function(e){e.O(0,[4617,2332,9774,2888,179],(function(){return s=9715,e(e.s=s);var s}));var s=e.O();_N_E=s}]);
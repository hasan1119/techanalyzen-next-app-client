(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3459],{545:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return s(3021)}])},3021:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return N}});var r=s(5893),i=s(9008),t=s.n(i),a=s(1163),l=s(7294),o=s(9473),c=s(3152),d=s(3928),u=s(6042),m=s(9396),h=s(8193),x=s(607),v=s(7474),p=function(e){var n=e.error,s=e.setError,i=(e.loading,e.setLoading),t=e.userInfo,c=function(e,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=a.removeId,o=a.type;e.preventDefault(),console.log("called",t),t.username&&t.password&&(i(!0),v.Z.post("/auth/v1/login?clear=".concat(r||"","&removeId=").concat(l||""),t).then((function(e){var r=e.data;if("removed"!==r.status)return j((0,x.x4)(r.user)),s({username:"",password:"",limit:null}),f.push("/");r.status="device-limit-reached",s((0,m.Z)((0,u.Z)({},n),{limit:r})),o===r.type&&_(!0)})).catch((function(e){var r=e.response,i=(void 0===r?{}:r).data;"device-limit-reached"===i.status?(console.log("line 65",i),s((0,m.Z)((0,u.Z)({},n),{limit:i}))):(console.log("line 68",i),s((0,m.Z)((0,u.Z)({},n,i),{limit:null})))})).finally((function(){i(!1)})))},d=n.limit,p=(null===d||void 0===d?void 0:d.user).loggedInSession,j=(0,o.I0)(),f=(0,a.useRouter)(),g=(0,l.useState)(!1),N=g[0],_=g[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("table",{className:"table",children:[(0,r.jsx)("thead",{style:{fontSize:"18px",padding:"15px",textAlign:"center"},children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"SN"}),(0,r.jsx)("th",{children:"Device"}),(0,r.jsx)("th",{children:"IP"}),(0,r.jsx)("th",{children:"Date"}),(0,r.jsx)("th",{children:"Action"})]})}),(0,r.jsx)("tbody",{children:null===p||void 0===p?void 0:p.map((function(e,n){var s=e._id,i=e.date,t=e.device,a=t.type,l=t.name,o=t.details;return(0,r.jsxs)("tr",{style:{fontSize:"18px",padding:"15px",marginBottom:"20px"},children:[(0,r.jsx)("td",{children:n+1}),(0,r.jsxs)("td",{children:[l," - ","(".concat(a,")")]}),(0,r.jsx)("td",{children:o.ip}),(0,r.jsx)("td",{children:new Date(i).toLocaleString()}),(0,r.jsxs)("td",{children:[(0,r.jsx)("button",{onClick:function(e){return c(e,void 0,{removeId:s,type:a})},className:"reached_remove_btn ",children:"Remove"}),a===(null===d||void 0===d?void 0:d.type)?(0,r.jsx)("button",{onClick:function(e){return c(e,s)},className:"reached_login_btn",children:"Remove & Login"}):""]})]},s)}))})]}),(0,r.jsxs)("div",{className:"d-flex",children:[(0,r.jsx)("button",{onClick:function(e){return c(e,"all")},className:"common_btn me-4",children:"Remove All & login"}),N?(0,r.jsx)("button",{onClick:function(e){return c(e)},className:"common_btn login_btn",children:"Login now"}):(0,r.jsx)("button",{title:"Please remove one of ".concat(null===d||void 0===d?void 0:d.type," device first !"),disabled:!0,className:"common_btn login_btn",children:"Login now"})]})]}),(0,r.jsxs)("p",{className:"reached_error",children:[(0,r.jsx)(h.ocf,{})," Please logout from one of desktop device first !"]})]})},j=s(1664),f=s.n(j),g=function(e){var n=e.userInfo,s=e.setUserInfo,i=e.error,t=e.setError,c=e.loading,d=e.setLoading,p=function(e){var r=(0,u.Z)({},n);t({}),r[e.target.name]="remember"===e.target.name?e.target.checked:e.target.value,s(r)},j=(0,o.I0)(),g=(0,l.useState)(!1),N=g[0],_=g[1],w=(0,l.useRef)(),b=(0,a.useRouter)(),y=function(e){"password"===e&&(w.current.type=N?"password":"text",_(!N))};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var s=(0,u.Z)({},i);n.username?s.username="":s.username="Email/ Phone / Username is required!",n.password?s.password="":s.password="Password is required!",t(s),n.username&&n.password&&(t({username:"",password:"",limit:null}),d(!0),v.Z.post("/auth/v1/login",n).then((function(e){var n=e.data,s=b.query.redirect;s&&b.push(s),j((0,x.x4)(n.user)),t({username:"",password:"",limit:null})})).catch((function(e){var n=e.response,s=(void 0===n?{}:n).data;"device-limit-reached"===s.status?(console.log("line 65",s),t((0,m.Z)((0,u.Z)({},i),{limit:s}))):(console.log("line 68",s),t((0,m.Z)((0,u.Z)({},i,s),{limit:null})))})).finally((function(){d(!1)})))},className:"w-100",action:"index.html",children:[(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h2",{children:"\u09b2\u0997\u0987\u09a8"})}),(0,r.jsxs)("div",{className:"form_group mt_3",children:[(0,r.jsx)("label",{children:"\u09ae\u09cb\u09ac\u09be\u0987\u09b2 \u0985\u09a5\u09ac\u09be \u0987-\u09ae\u09c7\u0987\u09b2"}),(0,r.jsx)("div",{className:"input_container",children:(0,r.jsx)("div",{className:"input",children:(0,r.jsx)("input",{type:"email",placeholder:"\u0986\u09aa\u09a8\u09be\u09b0 \u09ae\u09cb\u09ac\u09be\u0987\u09b2 \u0985\u09a5\u09ac\u09be \u0987-\u09ae\u09c7\u0987\u09b2 \u09a6\u09bf\u09a8",onChange:p,value:n.username,name:"username"})})}),i.username&&(0,r.jsx)("div",{className:"errorMsg",children:i.username})]}),(0,r.jsxs)("div",{className:"form_group mt_3",children:[(0,r.jsx)("label",{children:"\u09aa\u09be\u09b8\u0993\u09df\u09be\u09b0\u09cd\u09a1"}),(0,r.jsx)("div",{className:"input_container",children:(0,r.jsxs)("div",{className:"input",children:[(0,r.jsx)("input",{type:"password",placeholder:"\u0986\u09aa\u09a8\u09be\u09b0 \u09aa\u09be\u09b8\u0993\u09df\u09be\u09b0\u09cd\u09a1 \u09a6\u09bf\u09a8",name:"password",className:"input",onChange:p,value:n.password,ref:w}),N?(0,r.jsx)("div",{className:"toggle_pass",onClick:function(){return y("password")},children:(0,r.jsx)(h.I0d,{})}):(0,r.jsx)("div",{className:"toggle_pass",onClick:function(){return y("password")},children:(0,r.jsx)(h.Zju,{})})]})}),i.password&&(0,r.jsx)("div",{className:"errorMsg",children:i.password}),(0,r.jsx)(f(),{className:"forgot_password",href:"/reset",children:(0,r.jsx)("a",{children:"\u09aa\u09be\u09b8\u0993\u09df\u09be\u09b0\u09cd\u09a1 \u09ad\u09c1\u09b2\u09c7 \u0997\u09c7\u099b\u09c7\u09a8?"})})]}),(0,r.jsx)("button",{type:"submit",className:"common_btn",children:c?(0,r.jsx)("div",{className:"d-flex justify-content-center",children:(0,r.jsx)("div",{className:"spinner-border",role:"status",children:(0,r.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):"\u09b2\u0997\u09bf\u09a8 \u0995\u09b0\u09c1\u09a8"}),(0,r.jsxs)("p",{className:"w-100 jump_to d-flex align-items-center justify-content-center",children:["New user?"," ",(0,r.jsx)(f(),{href:"/register",children:(0,r.jsx)("a",{children:"Register now"})})]})]})})},N=function(){var e,n=(0,a.useRouter)(),s=(0,o.v9)((function(e){return e.user})).user,i=void 0===s?{}:s,u=(0,l.useState)({username:"",password:""}),m=u[0],h=u[1],x=(0,l.useState)({username:"",password:"",limit:null}),v=x[0],j=x[1],f=(0,l.useState)(!1),N=f[0],_=f[1];return(0,l.useEffect)((function(){i._id&&n.push("/dashboard")}),[i]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t(),{children:(0,r.jsx)("title",{children:"Sign In | Techanalyzen"})}),(0,r.jsx)(c.Z,{}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"login_container",children:[(0,r.jsx)("div",{className:"img",children:(0,r.jsx)("img",{src:"/assets/images/auth/login.png"})}),"device-limit-reached"===(null===v||void 0===v||null===(e=v.limit)||void 0===e?void 0:e.status)?(0,r.jsx)(p,{userInfo:m,setUserInfo:h,error:v,setError:j,loading:N,setLoading:_}):(0,r.jsx)("div",{className:"login-content login-form",children:(0,r.jsx)(g,{userInfo:m,setUserInfo:h,error:v,setError:j,loading:N,setLoading:_})})]})}),(0,r.jsx)(d.Z,{})]})}},9008:function(e,n,s){e.exports=s(5443)}},function(e){e.O(0,[4617,2332,9774,2888,179],(function(){return n=545,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
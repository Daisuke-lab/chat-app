(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{68:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n(20),s=n.n(r),o=n(15),i=n(6),u=(n(48),n(3)),l="LOGIN_SUCCESS",p="LOGIN_FAIL",j="LOAD_USER_SUCCESS",d="LOAD_USER_FAIL",b="AUTHENTICATED_SUCCESS",h="AUTHENTICATED_FAIL",m="AUTHENTICATED_SUCCESS",O="AUTHENTICATED_FAIL",f="AUTHENTICATED_SUCCESS",x="AUTHENTICATED_FAIL",v="LOG_OUT",g="SIGNUP_SUCCESS",y="SIGNUP_FAIL",w="ACTIVATION_SUCCESS",S="ACTIVATION_FAIL",N={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:null,user:null};var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case l:return localStorage.setItem("access",a.access),Object(u.a)(Object(u.a)({},e),{},{isAuthenticated:!0,access:a.access,refresh:a.refresh});case p:case y:case v:return localStorage.getItem("access")&&localStorage.removeItem("access"),Object(u.a)(Object(u.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null});case j:return Object(u.a)(Object(u.a)({},e),{},{user:a.user});case d:return Object(u.a)(Object(u.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null});case b:return Object(u.a)(Object(u.a)({},e),{},{user:a});case h:return Object(u.a)(Object(u.a)({},e),{},{user:null});case g:return Object(u.a)(Object(u.a)({},e),{},{isAuthenticated:!1});case m:case O:case f:case x:case S:case w:return Object(u.a)({},e);default:return e}},_=Object(o.combineReducers)({reducer:A}),C=n(5),k=n(4);function T(e){e.isTrusted}var I=function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{class:"jumbotron mt-5",children:[Object(a.jsx)("h1",{class:"display-4",children:"Welcome"}),Object(a.jsx)("p",{class:"lead",children:"This is authentication system."}),Object(a.jsx)("hr",{class:"my-4"}),Object(a.jsx)("p",{children:"Click the login button"}),Object(a.jsx)(C.b,{class:"btn btn-primary btn-lg",to:"/login",role:"button",onClick:T,children:"Login"})]})})},E=n(14),D=n(10),U=n(7),L=n.n(U),P=n(16),R=n(17),q=n.n(R),F=function(){return function(){var e=Object(P.a)(L.a.mark((function e(t){var n,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=15;break}return console.log("load_user::","JWT ".concat(localStorage.getItem("access"))),n={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},e.prev=3,e.next=6,q.a.get("".concat("http://localhost:8000","/auth/users/me/"),n);case 6:a=e.sent,t({type:j,payload:a.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t({type:d});case 13:e.next=17;break;case 15:console.log("no access"),t({type:d});case 17:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},J=Object(i.b)((function(e){return{isAuthenticated:e.reducer.isAuthenticated}}),(function(e){return{login:function(t,n){return e(function(e,t){return function(){var n=Object(P.a)(L.a.mark((function n(a){var c,r,s;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={headers:{"Content-Type":"application/json"}},r=JSON.stringify({email:e,password:t}),n.prev=2,n.next=5,q.a.post("".concat("http://localhost:8000","/auth/jwt/create/"),r,c);case 5:s=n.sent,a({type:l,payload:s.data}),a(F()),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),a({type:p});case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))}}}))((function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(D.a)(t,2),r=n[0],s=n[1],o=r.email,i=r.password,l=function(e){return s(Object(u.a)(Object(u.a)({},r),{},Object(E.a)({},e.target.name,e.target.value)))};return e.isAuthenticated?Object(a.jsx)(k.a,{to:"/:chatID/"}):Object(a.jsxs)("div",{className:"eontainer mt-5",children:[Object(a.jsx)("h1",{children:"Sign in"}),Object(a.jsx)("p1",{children:"Sign into your Account"}),Object(a.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),e.login(o,i)}(t)},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"email",placeholder:"Email",name:"email",value:o,onChange:function(e){return l(e)},required:!0})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"password",placeholder:"Password",name:"password",value:i,onChange:function(e){return l(e)},required:!0})}),Object(a.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Login"})]}),Object(a.jsxs)("p",{className:"mt-3",children:["Don't have an account? ",Object(a.jsx)(C.b,{to:"/signup",children:"Sign up"})]}),Object(a.jsxs)("p",{className:"mt-3",children:["Forget your password? ",Object(a.jsx)(C.b,{to:"/reset_password",children:"Reset Password"})]})]})})),H=Object(i.b)((function(e){return{isAuthenticated:e.reducer.isAuthenticated}}),(function(e){return{signup:function(t,n,a,c){return e(function(e,t,n,a){return function(){var c=Object(P.a)(L.a.mark((function c(r){var s,o,i;return L.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s={headers:{"Content-Type":"application/json"}},o=JSON.stringify({name:e,email:t,password:n,re_password:a}),c.prev=2,c.next=5,q.a.post("".concat("http://localhost:8000","/auth/users/"),o,s);case 5:i=c.sent,r({type:g,payload:i.data}),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(2),r({type:y});case 12:case"end":return c.stop()}}),c,null,[[2,9]])})));return function(e){return c.apply(this,arguments)}}()}(t,n,a,c))}}}))((function(e){var t=Object(c.useState)(!1),n=Object(D.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)({name:"",email:"",password:"",re_password:""}),i=Object(D.a)(o,2),l=i[0],p=i[1],j=l.name,d=l.email,b=l.password,h=l.re_password,m=function(e){return p(Object(u.a)(Object(u.a)({},l),{},Object(E.a)({},e.target.name,e.target.value)))};return e.isAuthenticated||r?Object(a.jsx)(k.a,{to:"/"}):Object(a.jsxs)("div",{className:"eontainer mt-5",children:[Object(a.jsx)("h1",{children:"Sign up"}),Object(a.jsx)("p1",{children:"Create your Account"}),Object(a.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),console.log(j,d,b,h),e.signup(j,d,b,h),s(!0)}(t)},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"name",placeholder:"name",name:"name",value:j,onChange:function(e){return m(e)},required:!0})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"email",placeholder:"Email*",name:"email",value:d,onChange:function(e){return m(e)},required:!0})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"password",placeholder:"Password*",name:"password",value:b,onChange:function(e){return m(e)},required:!0})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"password",placeholder:"Confirm Password*",name:"re_password",value:h,onChange:function(e){return m(e)},required:!0})}),Object(a.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Sign up"})]}),Object(a.jsxs)("p",{className:"mt-3",children:["Already have an account? ",Object(a.jsx)(C.b,{to:"/login",children:"Log in"})]})]})})),W=Object(i.b)((function(e,t){return{isAuthenticated:e.reducer.isAuthenticated,uid:t.match.params.uid,token:t.match.params.token}}),(function(e){return{verify:function(t,n){return e(function(e,t){return function(){var n=Object(P.a)(L.a.mark((function n(a){var c,r,s;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={headers:{"Content-Type":"application/json"}},r=JSON.stringify({uid:e,token:t}),n.prev=2,n.next=5,q.a.post("".concat("http://localhost:8000","/auth/users/activation/"),r,c);case 5:s=n.sent,a({type:w,payload:s.data}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),a({type:S});case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))}}}))((function(e){var t=Object(c.useState)(!1),n=Object(D.a)(t,2),r=n[0],s=n[1];return r?Object(a.jsx)(k.a,{to:"/"}):Object(a.jsx)("div",{className:"eontainer mt-5",children:Object(a.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",style:{marginTop:"200px"},children:[Object(a.jsx)("h1",{children:"Verify your account:"}),Object(a.jsx)("button",{onClick:function(t){e.verify(e.uid,e.token),s(!0)},style:{marginTop:"50px"},type:"button",className:"btn btn-primary",children:"Verify"})]})})})),G=Object(i.b)(null,(function(e){return{reset_password:function(t){return e(function(e){return function(){var t=Object(P.a)(L.a.mark((function t(n){var a,c,r;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={headers:{"Content-Type":"application/json"}},c=JSON.stringify({email:e}),t.prev=2,t.next=5,q.a.post("".concat("http://localhost:8000","/auth/users/reset_password/"),c,a);case 5:r=t.sent,console.log("PASSWORD_RESET"),n({type:m,payload:r.data}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),n({type:O});case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=Object(c.useState)(!1),n=Object(D.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)({email:""}),i=Object(D.a)(o,2),l=i[0],p=i[1],j=l.email;return r?Object(a.jsx)(k.a,{to:"/"}):Object(a.jsxs)("div",{className:"eontainer mt-5",children:[Object(a.jsx)("h1",{children:"Request Password Reset"}),Object(a.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),e.reset_password(j),s(!0)}(t)},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"email",placeholder:"Email",name:"email",value:j,onChange:function(e){return function(e){return p(Object(u.a)(Object(u.a)({},l),{},Object(E.a)({},e.target.name,e.target.value)))}(e)},required:!0})}),Object(a.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Reset Password"})]})]})})),V=Object(i.b)((function(e,t){return{uid:t.match.params.uid,token:t.match.params.token}}),(function(e){return{reset_password_confirm:function(t,n,a,c){return e(function(e,t,n,a){return function(){var c=Object(P.a)(L.a.mark((function c(r){var s,o;return L.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s={headers:{"Content-Type":"application/json"}},o=JSON.stringify({uid:e,token:t,new_password:n,re_new_password:a}),console.log("PASSWORD_RESET_CONFIRM"),c.prev=3,c.next=6,q.a.post("".concat("http://localhost:8000","/auth/users/reset_password_confirm/"),o,s);case 6:r({type:f}),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(3),r({type:x});case 12:case"end":return c.stop()}}),c,null,[[3,9]])})));return function(e){return c.apply(this,arguments)}}()}(t,n,a,c))}}}))((function(e){var t=Object(c.useState)(!1),n=Object(D.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)({new_password:"",re_new_password:""}),i=Object(D.a)(o,2),l=i[0],p=i[1];console.log("token::",e.token);var j=l.new_password,d=l.re_new_password,b=function(e){return p(Object(u.a)(Object(u.a)({},l),{},Object(E.a)({},e.target.name,e.target.value)))};return r?Object(a.jsx)(k.a,{to:"/"}):Object(a.jsxs)("div",{className:"eontainer mt-5",children:[Object(a.jsx)("h1",{children:"Request Password Reset"}),Object(a.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault();var n=e.uid,a=e.token;e.reset_password_confirm(n,a,j,d),s(!0)}(t)},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"password",placeholder:"New Pasword",name:"new_password",value:j,onChange:function(e){return b(e)},required:!0})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"password",placeholder:"Confirm New Password",name:"re_new_password",value:d,onChange:function(e){return b(e)},required:!0})}),Object(a.jsx)("button",{className:"btn btn-primary",type:"submit",children:"PasswordResetConfirm"})]})]})})),M=Object(i.b)((function(e){return{isAuthenticated:e.reducer.isAuthenticated}}),(function(e){return{logout:function(){return e((function(e){e({type:v})}))}}}))((function(e){return Object(a.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(a.jsx)(C.b,{class:"navbar-brand",to:"/",children:"Auth System"}),Object(a.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{class:"navbar-toggler-icon"})}),Object(a.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(a.jsxs)("ul",{class:"navbar-nav",children:[Object(a.jsx)("li",{class:"nav-item active",children:Object(a.jsxs)(C.b,{class:"nav-link",to:"/",children:["Home",Object(a.jsx)("span",{class:"sr-only",children:"(current)"})]})}),e.isAuthenticated?Object(a.jsx)("li",{class:"nav-item active",children:Object(a.jsxs)(C.b,{class:"nav-link",to:"/",onClick:e.logout,children:["Logout",Object(a.jsx)("span",{class:"sr-only",children:"(current)"})]})}):Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)("li",{class:"nav-item active",children:Object(a.jsx)(C.b,{class:"nav-link",to:"/login",children:"Login"})}),Object(a.jsx)("li",{class:"nav-item active",children:Object(a.jsx)(C.b,{class:"nav-link",to:"/signup",children:"Signup"})})]})]})})]})})),z=Object(i.b)(null,(function(e){return{checkAuthenticated:function(){return e(function(){var e=Object(P.a)(L.a.mark((function e(t){var n,a,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=15;break}return n={headers:{"Content-Type":"application/json",Accept:"application/json"}},a=JSON.stringify({token:localStorage.getItem("access")}),e.prev=3,e.next=6,q.a.post("".concat("http://localhost:8000","/auth/jwt/verify/"),a,n);case 6:c=e.sent,t("token_not_valid"!==c?{type:b}:{type:h}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t({type:h});case 13:e.next=16;break;case 15:t({type:h});case 16:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}())},load_user:function(){return e(F())}}}))((function(e){return Object(c.useEffect)((function(){e.checkAuthenticated(),e.load_user()}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)(M,{}),e.children]})})),B=function(){return Object(a.jsx)("div",{children:"SidePanel"})},K=function(){return Object(a.jsx)("div",{children:"Profile"})},Q=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(B,{}),Object(a.jsx)(K,{}),"Chat"]})},X=function(){return Object(a.jsx)(C.a,{children:Object(a.jsx)(z,{children:Object(a.jsxs)(k.d,{children:[Object(a.jsx)(k.b,{exact:!0,path:"/",component:I}),Object(a.jsx)(k.b,{exact:!0,path:"/login",component:J}),Object(a.jsx)(k.b,{exact:!0,path:"/signup",component:H}),Object(a.jsx)(k.b,{exact:!0,path:"/reset_password",component:G}),Object(a.jsx)(k.b,{exact:!0,path:"/password/reset/confirm/:uid/:token",component:V}),Object(a.jsx)(k.b,{exact:!0,path:"/activate/:uid/:token",component:W}),Object(a.jsx)(k.b,{exact:!0,path:"/:chatID/",component:Q})]})})})},Y=n(37),Z=[n(38).a],$=Object(o.createStore)(_,{},Object(Y.composeWithDevTools)(o.applyMiddleware.apply(void 0,Z))),ee=Object(a.jsx)(i.a,{store:$,children:Object(a.jsx)(X,{})});s.a.render(ee,document.getElementById("app"))}},[[68,1,2]]]);
//# sourceMappingURL=main.5b822014.chunk.js.map
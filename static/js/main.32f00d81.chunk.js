(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{80:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),r=n(25),o=n.n(r),i=n(15),l=n(4),u=(n(60),n(2)),j="LOGIN_SUCCESS",d="LOGIN_FAIL",p="LOAD_USER_SUCCESS",b="LOAD_USER_FAIL",h="AUTHENTICATED_SUCCESS",m="AUTHENTICATED_FAIL",f="AUTHENTICATED_SUCCESS",O="AUTHENTICATED_FAIL",g="AUTHENTICATED_SUCCESS",v="AUTHENTICATED_FAIL",x="LOG_OUT",y="SIGNUP_SUCCESS",w="SIGNUP_FAIL",k="ACTIVATION_SUCCESS",S="ACTIVATION_FAIL",N={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:null,user:localStorage.getItem("name")};var C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case j:return localStorage.setItem("access",a.access),Object(u.a)(Object(u.a)({},e),{},{isAuthenticated:!0,access:a.access,refresh:a.refresh});case d:case w:case x:return localStorage.getItem("access")&&(localStorage.removeItem("access"),localStorage.removeItem("refresh")),Object(u.a)(Object(u.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null});case p:return Object(u.a)(Object(u.a)({},e),{},{user:a.name});case b:return Object(u.a)(Object(u.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null});case h:return Object(u.a)(Object(u.a)({},e),{},{user:a});case m:return Object(u.a)(Object(u.a)({},e),{},{user:null});case y:return Object(u.a)(Object(u.a)({},e),{},{isAuthenticated:!1});case f:case O:case g:case v:case S:case k:return Object(u.a)({},e);default:return e}},_=Object(i.combineReducers)({reducer:C}),A=n(6),T=n(5),I=n(9),E=n.n(I),R=n(16),M=n(17),U=n.n(M),D=function(){return function(){var e=Object(R.a)(E.a.mark((function e(t){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=15;break}return console.log("load_user::","JWT ".concat(localStorage.getItem("access"))),n={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},e.prev=3,e.next=6,U.a.get("".concat("http://localhost:8000","/auth/users/me/"),n);case 6:a=e.sent,t({type:p,payload:a.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t({type:b});case 13:e.next=17;break;case 15:console.log("no access"),t({type:b});case 17:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},L=function(){return function(){var e=Object(R.a)(E.a.mark((function e(t){var n,a,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=15;break}return n={headers:{"Content-Type":"application/json",Accept:"application/json"}},a=JSON.stringify({token:localStorage.getItem("access")}),e.prev=3,e.next=6,U.a.post("".concat("http://localhost:8000","/auth/jwt/verify/"),a,n);case 6:s=e.sent,t("token_not_valid"!==s?{type:h}:{type:m}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t({type:m});case 13:e.next=16;break;case 15:t({type:m});case 16:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},P=Object(l.b)((function(e){return{isAuthenticated:e.reducer.isAuthenticated}}),(function(e){return{logout:function(){return e((function(e){e({type:x})}))}}}))((function(e){return Object(a.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(a.jsx)(A.b,{class:"navbar-brand",to:"/",children:"Auth System"}),Object(a.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{class:"navbar-toggler-icon"})}),Object(a.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(a.jsxs)("ul",{class:"navbar-nav",children:[Object(a.jsx)("li",{class:"nav-item active",children:Object(a.jsxs)(A.b,{class:"nav-link",to:"/",children:["Home",Object(a.jsx)("span",{class:"sr-only",children:"(current)"})]})}),e.isAuthenticated?Object(a.jsx)("li",{class:"nav-item active",children:Object(a.jsxs)(A.b,{class:"nav-link",to:"/",onClick:e.logout,children:["Logout",Object(a.jsx)("span",{class:"sr-only",children:"(current)"})]})}):Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)("li",{class:"nav-item active",children:Object(a.jsx)(A.b,{class:"nav-link",to:"/login",children:"Login"})}),Object(a.jsx)("li",{class:"nav-item active",children:Object(a.jsx)(A.b,{class:"nav-link",to:"/signup",children:"Signup"})})]})]})})]})}));function F(e){e.isTrusted}var J=function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(P,{}),Object(a.jsxs)("div",{class:"jumbotron mt-5",children:[Object(a.jsx)("h1",{class:"display-4",children:"Welcome"}),Object(a.jsx)("p",{class:"lead",children:"This is authentication system."}),Object(a.jsx)("hr",{class:"my-4"}),Object(a.jsx)("p",{children:"Click the login button"}),Object(a.jsx)(A.b,{class:"btn btn-primary btn-lg",to:"/login",role:"button",onClick:F,children:"Sign in"})]})]})},q=n(13),H=n(7),W=Object(l.b)((function(e){return{isAuthenticated:e.reducer.isAuthenticated}}),(function(e){return{login:function(t,n){return e(function(e,t){return function(){var n=Object(R.a)(E.a.mark((function n(a){var s,c,r;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s={headers:{"Content-Type":"application/json"}},c=JSON.stringify({email:e,password:t}),n.prev=2,n.next=5,U.a.post("".concat("http://localhost:8000","/auth/jwt/create/"),c,s);case 5:r=n.sent,a({type:j,payload:r.data}),a(D()),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),a({type:d});case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))}}}))((function(e){var t=Object(s.useState)({email:"",password:""}),n=Object(H.a)(t,2),c=n[0],r=n[1],o=c.email,i=c.password,l=function(e){return r(Object(u.a)(Object(u.a)({},c),{},Object(q.a)({},e.target.name,e.target.value)))};return e.isAuthenticated?Object(a.jsx)(T.a,{to:"/chat/test/"}):Object(a.jsxs)("div",{className:"eontainer mt-5",children:[Object(a.jsx)(P,{}),Object(a.jsx)("h1",{children:"Sign in"}),Object(a.jsx)("p1",{children:"Sign into your Account"}),Object(a.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),e.login(o,i)}(t)},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"email",placeholder:"Email",name:"email",value:o,onChange:function(e){return l(e)},required:!0})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"password",placeholder:"Password",name:"password",value:i,onChange:function(e){return l(e)},required:!0})}),Object(a.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Login"})]}),Object(a.jsxs)("p",{className:"mt-3",children:["Don't have an account? ",Object(a.jsx)(A.b,{to:"/signup",children:"Sign up"})]}),Object(a.jsxs)("p",{className:"mt-3",children:["Forget your password? ",Object(a.jsx)(A.b,{to:"/reset_password",children:"Reset Password"})]})]})})),G=Object(l.b)((function(e){return{isAuthenticated:e.reducer.isAuthenticated}}),(function(e){return{signup:function(t,n,a,s){return e(function(e,t,n,a){return function(){var s=Object(R.a)(E.a.mark((function s(c){var r,o,i;return E.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return r={headers:{"Content-Type":"application/json"}},o=JSON.stringify({name:e,email:t,password:n,re_password:a}),s.prev=2,s.next=5,U.a.post("".concat("http://localhost:8000","/auth/users/"),o,r);case 5:i=s.sent,c({type:y,payload:i.data}),localStorage.setItem("name",e),s.next=13;break;case 10:s.prev=10,s.t0=s.catch(2),c({type:w});case 13:case"end":return s.stop()}}),s,null,[[2,10]])})));return function(e){return s.apply(this,arguments)}}()}(t,n,a,s))}}}))((function(e){var t=Object(s.useState)(!1),n=Object(H.a)(t,2),c=n[0],r=n[1],o=Object(s.useState)({name:"",email:"",password:"",re_password:""}),i=Object(H.a)(o,2),l=i[0],j=i[1],d=l.name,p=l.email,b=l.password,h=l.re_password,m=function(e){return j(Object(u.a)(Object(u.a)({},l),{},Object(q.a)({},e.target.name,e.target.value)))};return e.isAuthenticated||c?Object(a.jsx)(T.a,{to:"/"}):Object(a.jsxs)("div",{className:"eontainer mt-5",children:[Object(a.jsx)(P,{}),Object(a.jsx)("h1",{children:"Sign up"}),Object(a.jsx)("p1",{children:"Create your Account"}),Object(a.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),console.log(d,p,b,h),e.signup(d,p,b,h),r(!0)}(t)},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"name",placeholder:"name",name:"name",value:d,onChange:function(e){return m(e)},required:!0})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"email",placeholder:"Email*",name:"email",value:p,onChange:function(e){return m(e)},required:!0})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"password",placeholder:"Password*",name:"password",value:b,onChange:function(e){return m(e)},required:!0})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"password",placeholder:"Confirm Password*",name:"re_password",value:h,onChange:function(e){return m(e)},required:!0})}),Object(a.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Sign up"})]}),Object(a.jsxs)("p",{className:"mt-3",children:["Already have an account? ",Object(a.jsx)(A.b,{to:"/login",children:"Log in"})]})]})})),V=Object(l.b)((function(e,t){return{isAuthenticated:e.reducer.isAuthenticated,uid:t.match.params.uid,token:t.match.params.token}}),(function(e){return{verify:function(t,n){return e(function(e,t){return function(){var n=Object(R.a)(E.a.mark((function n(a){var s,c,r;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s={headers:{"Content-Type":"application/json"}},c=JSON.stringify({uid:e,token:t}),n.prev=2,n.next=5,U.a.post("".concat("http://localhost:8000","/auth/users/activation/"),c,s);case 5:r=n.sent,a({type:k,payload:r.data}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),a({type:S});case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))}}}))((function(e){var t=Object(s.useState)(!1),n=Object(H.a)(t,2),c=n[0],r=n[1];return c?Object(a.jsx)(T.a,{to:"/"}):Object(a.jsx)("div",{className:"eontainer mt-5",children:Object(a.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",style:{marginTop:"200px"},children:[Object(a.jsx)("h1",{children:"Verify your account:"}),Object(a.jsx)("button",{onClick:function(t){e.verify(e.uid,e.token),r(!0)},style:{marginTop:"50px"},type:"button",className:"btn btn-primary",children:"Verify"})]})})})),z=Object(l.b)(null,(function(e){return{reset_password:function(t){return e(function(e){return function(){var t=Object(R.a)(E.a.mark((function t(n){var a,s,c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={headers:{"Content-Type":"application/json"}},s=JSON.stringify({email:e}),t.prev=2,t.next=5,U.a.post("".concat("http://localhost:8000","/auth/users/reset_password/"),s,a);case 5:c=t.sent,console.log("PASSWORD_RESET"),n({type:f,payload:c.data}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),n({type:O});case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=Object(s.useState)(!1),n=Object(H.a)(t,2),c=n[0],r=n[1],o=Object(s.useState)({email:""}),i=Object(H.a)(o,2),l=i[0],j=i[1],d=l.email;return c?Object(a.jsx)(T.a,{to:"/"}):Object(a.jsxs)("div",{className:"eontainer mt-5",children:[Object(a.jsx)(P,{}),Object(a.jsx)("h1",{children:"Request Password Reset"}),Object(a.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),e.reset_password(d),r(!0)}(t)},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"email",placeholder:"Email",name:"email",value:d,onChange:function(e){return function(e){return j(Object(u.a)(Object(u.a)({},l),{},Object(q.a)({},e.target.name,e.target.value)))}(e)},required:!0})}),Object(a.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Reset Password"})]})]})})),B=Object(l.b)((function(e,t){return{uid:t.match.params.uid,token:t.match.params.token}}),(function(e){return{reset_password_confirm:function(t,n,a,s){return e(function(e,t,n,a){return function(){var s=Object(R.a)(E.a.mark((function s(c){var r,o;return E.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return r={headers:{"Content-Type":"application/json"}},o=JSON.stringify({uid:e,token:t,new_password:n,re_new_password:a}),console.log("PASSWORD_RESET_CONFIRM"),s.prev=3,s.next=6,U.a.post("".concat("http://localhost:8000","/auth/users/reset_password_confirm/"),o,r);case 6:c({type:g}),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(3),c({type:v});case 12:case"end":return s.stop()}}),s,null,[[3,9]])})));return function(e){return s.apply(this,arguments)}}()}(t,n,a,s))}}}))((function(e){var t=Object(s.useState)(!1),n=Object(H.a)(t,2),c=n[0],r=n[1],o=Object(s.useState)({new_password:"",re_new_password:""}),i=Object(H.a)(o,2),l=i[0],j=i[1];console.log("token::",e.token);var d=l.new_password,p=l.re_new_password,b=function(e){return j(Object(u.a)(Object(u.a)({},l),{},Object(q.a)({},e.target.name,e.target.value)))};return c?Object(a.jsx)(T.a,{to:"/"}):Object(a.jsxs)("div",{className:"eontainer mt-5",children:[Object(a.jsx)(P,{}),Object(a.jsx)("h1",{children:"Request Password Reset"}),Object(a.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault();var n=e.uid,a=e.token;e.reset_password_confirm(n,a,d,p),r(!0)}(t)},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"password",placeholder:"New Pasword",name:"new_password",value:d,onChange:function(e){return b(e)},required:!0})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{className:"from-control",type:"password",placeholder:"Confirm New Password",name:"re_new_password",value:p,onChange:function(e){return b(e)},required:!0})}),Object(a.jsx)("button",{className:"btn btn-primary",type:"submit",children:"PasswordResetConfirm"})]})]})})),K=Object(l.b)(null,(function(e){return{checkAuthenticated:function(){return e(L())},load_user:function(){return e(D())}}}))((function(e){return Object(s.useEffect)((function(){e.checkAuthenticated(),e.load_user()}),[]),Object(a.jsx)("div",{children:e.children})})),Q=n(50),X=n(20),Y=n(18),Z=n(23),$=n(29),ee=n(28),te=n(87),ne=(n(80),c.a.Component,n(83),Object(l.b)((function(e){return{username:e.reducer.user}}),null)((function(e){return Object(a.jsxs)("div",{className:"contact-profile",children:[Object(a.jsx)("img",{src:"http://emilcarlsson.se/assets/harveyspecter.png",alt:""}),Object(a.jsx)("p",{children:e.username}),Object(a.jsxs)("div",{className:"social-media",children:[Object(a.jsx)("i",{className:"fa fa-facebook","aria-hidden":"true"}),Object(a.jsx)("i",{className:"fa fa-twitter","aria-hidden":"true"}),Object(a.jsx)("i",{className:"fa fa-instagram","aria-hidden":"true"})]})]})}))),ae=function(){function e(){Object(X.a)(this,e),this.callbacks={},this.socketRef=null}return Object(Y.a)(e,null,[{key:"getInstance",value:function(){return e.instace||(e.instance=new e),e.instance}}]),Object(Y.a)(e,[{key:"connect",value:function(){var e=this;this.socketRef=new WebSocket("ws://localhost:8000/ws/chat/test/"),this.socketRef.onopen=function(){console.log("open")},this.socketNewMessage(JSON.stringify({command:"messages"})),this.socketRef.onmessage=function(t){e.socketNewMessage(t.data)},this.socketRef.onclose=function(){console.log("close"),e.connect()},this.socketRef.onerror=function(e){console.log("error in Websocket::",e.message)}}},{key:"socketNewMessage",value:function(e){var t=JSON.parse(e),n=t.command;console.log("Parsedata in Websocket::",t),0!==Object.keys(this.callbacks).length&&("messages"===n&&this.callbacks[n](t.messages),"new_message"===n&&this.callbacks[n](t.message))}},{key:"fetchMessages",value:function(e){this.sendMessage({command:"fetch_messages",username:e})}},{key:"newChatMessage",value:function(e){console.log("newChatMessage::",e),this.sendMessage({command:"new_message",from:e.from,message:e.content})}},{key:"addCallbacks",value:function(e,t){this.callbacks.messages=e,this.callbacks.new_message=t}},{key:"sendMessage",value:function(e){console.log("data in sendMessage",e);try{this.socketRef.send(JSON.stringify(Object(u.a)({},e)))}catch(t){console.log(t.message)}}},{key:"state",value:function(){return this.socketRef.readyState}}]),e}();ae.instance=null;var se=ae.getInstance();n(84);se.connect();var ce=function(e){Object($.a)(n,e);var t=Object(ee.a)(n);function n(e){var s;return Object(X.a)(this,n),(s=t.call(this,e)).renderMessages=function(e){var t=s.props.username;return e.map((function(e){return Object(a.jsxs)("li",{className:e.author===t?"sent":"replies",children:[Object(a.jsx)("img",{src:"http://emilcarlsson.se/assets/mikeross.png"}),Object(a.jsxs)("p",{children:[e.content,Object(a.jsx)("br",{}),Object(a.jsx)("small",{children:e.timestamp.substring(0,16)})]})]},e.id)}))},s.messageChangeHandler=function(e){s.setState({message:e.target.value})},s.sendMessageHandler=function(e){e.preventDefault(),console.log("username::",s.props.username);var t={from:s.props.username,content:s.state.message};t.content&&(console.log(t.content),se.newChatMessage(t),s.setState({message:""}))},s.state={messages:[],message:""},s.waitForSocketConnection((function(){se.addCallbacks(s.setMessage.bind(Object(Z.a)(s)),s.addMessage.bind(Object(Z.a)(s))),se.fetchMessages(s.props.username)})),s}return Object(Y.a)(n,[{key:"waitForSocketConnection",value:function(e){var t=this;setTimeout((function(){if(1===se.state())return console.log("connection is secure"),void e();console.log("waiting for connection ...."),t.waitForSocketConnection(e)}),100)}},{key:"setMessage",value:function(e){this.setState({messages:e.reverse()})}},{key:"addMessage",value:function(e){this.setState({messages:[].concat(Object(Q.a)(this.state.messages),[e[0]])})}},{key:"render",value:function(){var e=this.state.messages;return Object(a.jsx)("div",{id:"frame",children:Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)(ne,{}),Object(a.jsx)("div",{className:"messages",children:Object(a.jsx)("ul",{id:"chat-log",children:e&&this.renderMessages(e)})}),Object(a.jsx)("div",{className:"message-input",children:Object(a.jsx)("form",{onSubmit:this.sendMessageHandler,children:Object(a.jsxs)("div",{className:"wrap",children:[Object(a.jsx)("input",{onChange:this.messageChangeHandler,value:this.state.message,id:"chat-message-input",type:"text",placeholder:"Write your message..."}),Object(a.jsx)("i",{className:"fa fa-paperclip attachment","aria-hidden":"true"}),Object(a.jsx)("button",{id:"chat-message-submit",className:"submit",children:Object(a.jsx)("i",{className:"fa fa-paper-plane","aria-hidden":"true"})})]})})})]})})}}]),n}(c.a.Component),re=Object(l.b)((function(e){return{username:e.reducer.user}}),null)(ce),oe=Object(l.b)(null,(function(e){return{checkAuthenticated:function(){return e(L)}}}))((function(e){return Object(s.useEffect)((function(){e.checkAuthenticated()})),Object(a.jsx)(A.a,{children:Object(a.jsx)(T.d,{children:Object(a.jsxs)(K,{children:[Object(a.jsx)(T.b,{exact:!0,path:"/",component:J}),Object(a.jsx)(T.b,{exact:!0,path:"/login",component:W}),Object(a.jsx)(T.b,{exact:!0,path:"/signup",component:G}),Object(a.jsx)(T.b,{exact:!0,path:"/reset_password",component:z}),Object(a.jsx)(T.b,{exact:!0,path:"/password/reset/confirm/:uid/:token",component:B}),Object(a.jsx)(T.b,{exact:!0,path:"/activate/:uid/:token",component:V}),Object(a.jsx)(T.b,{exact:!0,path:"/chat/test/",component:re})]})})})})),ie=n(48),le=[n(49).a],ue=Object(i.createStore)(_,{},Object(ie.composeWithDevTools)(i.applyMiddleware.apply(void 0,le))),je=Object(a.jsx)(l.a,{store:ue,children:Object(a.jsx)(oe,{})});o.a.render(je,document.getElementById("app"))}},[[85,1,2]]]);
//# sourceMappingURL=main.32f00d81.chunk.js.map
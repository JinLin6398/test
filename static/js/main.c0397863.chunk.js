(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{42:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(34),i=n.n(a),s=(n(42),n(21)),o=n(22),d=n(9),u=n(10),l=n(11),b=n(12),j=n(4),h=n(2),x=n(0),p=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:["Balance: ",this.props.accountBalance]})}}]),n}(c.Component),O=p,m=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{src:"https://picsum.photos/200/200",alt:"bank"}),Object(x.jsx)("h1",{children:"Bank of React"}),Object(x.jsx)(j.b,{to:"/userProfile",children:"User Profile"}),Object(x.jsx)("br",{}),Object(x.jsx)(j.b,{to:"/login",children:"Login"}),Object(x.jsx)("br",{}),Object(x.jsx)(j.b,{to:"/credits",children:"Credits"}),Object(x.jsx)("br",{}),Object(x.jsx)(j.b,{to:"/debits",children:"Debits"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(O,{accountBalance:this.props.accountBalance})]})}}]),n}(c.Component),f=m,g=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"User Profile"}),Object(x.jsxs)("div",{children:["Username: ",this.props.userName]}),Object(x.jsxs)("div",{children:["Member Since: ",this.props.memberSince]}),Object(x.jsx)("br",{}),Object(x.jsx)(j.b,{to:"/",style:{textDecoration:"none",color:"#4189bf"},children:"Return to Home"})]})}}]),n}(c.Component),y=g,v=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).handleChange=function(e){var t=Object(o.a)({},c.state.user);t.userName=e.target.value,c.setState({user:t})},c.handleSubmit=function(e){e.preventDefault(),c.props.mockLogIn(c.state.user),c.setState({redirect:!0})},c.state={user:{userName:c.props.user.userName,password:""},redirect:!1},c}return Object(u.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(x.jsx)(h.a,{to:"/userProfile"}):Object(x.jsxs)("div",{style:{textAlign:"center",fontFamily:"Ariel, sans-serif"},children:[Object(x.jsx)("h1",{children:"Login"}),Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsxs)("div",{style:{marginBottom:"10px"},children:[Object(x.jsx)("label",{style:{fontWeight:"bold",marginRight:"10px",width:"120px",whiteSpace:"nowrap"},children:"User Name"}),Object(x.jsx)("input",{type:"text",name:"userName",defaultValue:this.props.user.userName,onChange:this.handleChange})]}),Object(x.jsxs)("div",{style:{marginBottom:"10px"},children:[Object(x.jsx)("label",{style:{fontWeight:"bold",marginRight:"10px",width:"120px",whiteSpace:"nowrap"},children:"Password"}),Object(x.jsx)("input",{type:"password",name:"password"})]}),Object(x.jsx)("button",{style:B,children:"Log In"})]}),Object(x.jsx)("br",{}),Object(x.jsx)(j.b,{to:"/",style:{textDecoration:"none",color:"#4189bf"},children:"Return to Home"})]})}}]),n}(c.Component),B={padding:"10px 20px",borderRadius:"5px",border:"none",backgroundColor:"#4189bf",color:"white",cursor:"pointer",width:"100%",maxWidth:"300px"},S=v,C=n(14),w=n(37),D=n.n(w),k={backgroundColor:"#4189bf",color:"white",padding:"10px",border:"1px solid #ddd"},A={padding:"10px",border:"1px solid #ddd",textAlign:"center"},L={padding:"10px",margin:"0 5px",borderRadius:"5px",border:"1px solid #ccc"},N={padding:"10px 20px",borderRadius:"5px",border:"none",backgroundColor:"#4189bf",color:"white",cursor:"pointer"},F=function(e){var t=Object(c.useState)([]),n=Object(C.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(""),o=Object(C.a)(i,2),d=o[0],u=o[1],l=Object(c.useState)(""),b=Object(C.a)(l,2),h=b[0],p=b[1];Object(c.useEffect)((function(){D.a.get("https://johnnylaicode.github.io/api/credits.json").then((function(e){return a(e.data)})).catch((function(e){return console.error("Error fetching credits:",e)}))}),[]);return Object(x.jsxs)("div",{style:{textAlign:"center",fontFamily:"Ariel, sans-serif"},children:[Object(x.jsxs)("h1",{children:[" Account Balance: $",e.accountBalance.toFixed(2)," "]}),Object(x.jsxs)("table",{style:{margin:"20px auto",borderCollapse:"collapse",width:"80%"},children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{style:k,children:"Description"}),Object(x.jsx)("th",{style:k,children:"Amount"}),Object(x.jsx)("th",{style:k,children:"Date"})]})}),Object(x.jsx)("tbody",{children:r.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{style:A,children:e.description}),Object(x.jsxs)("td",{style:A,children:["$",e.amount.toFixed(2)]}),Object(x.jsx)("td",{style:A,children:new Date(e.date).toLocaleDateString()})]},t)}))})]}),Object(x.jsx)("h2",{children:"Add a New Credit"}),Object(x.jsxs)("div",{style:{marginBottom:"20px"},children:[Object(x.jsx)("input",{type:"text",value:d,onChange:function(e){return u(e.target.value)},placeholder:"Description",style:L}),Object(x.jsx)("input",{type:"number",value:h,onChange:function(e){return p(e.target.value)},placeholder:"Amount",style:L}),Object(x.jsx)("button",{onClick:function(){if(d&&h){var t={description:d,amount:parseFloat(h),date:(new Date).toISOString()};a([].concat(Object(s.a)(r),[t])),e.updateBalance(e.accountBalance+t.amount),u(""),p("")}},style:N,children:"Add Credit"})]}),Object(x.jsx)(j.b,{to:"/",style:{textDecoration:"none",color:"#4189bf"},children:"Return to Home"})]})},R={backgroundColor:"#4189bf",color:"white",padding:"10px",border:"1px solid #ddd"},U={padding:"10px",border:"1px solid #ddd",textAlign:"center"},I={padding:"10px",margin:"0 5px",borderRadius:"5px",border:"1px solid #ccc"},P={padding:"10px 20px",borderRadius:"5px",border:"none",backgroundColor:"#4189bf",color:"white",cursor:"pointer"},E=function(e){var t=Object(c.useState)(""),n=Object(C.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(""),s=Object(C.a)(i,2),o=s[0],d=s[1];return Object(x.jsxs)("div",{style:{textAlign:"center",fontFamily:"Ariel, sans-serif"},children:[Object(x.jsxs)("h1",{children:[" Account Balance: $",e.accountBalance.toFixed(2)," "]}),Object(x.jsxs)("table",{style:{margin:"20px auto",borderCollapse:"collapse",width:"80%"},children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{style:R,children:"Description"}),Object(x.jsx)("th",{style:R,children:"Amount"}),Object(x.jsx)("th",{style:R,children:"Date"})]})}),Object(x.jsx)("tbody",{children:e.debits.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{style:U,children:e.description}),Object(x.jsxs)("td",{style:U,children:["$",e.amount.toFixed(2)]}),Object(x.jsx)("td",{style:U,children:new Date(e.date).toLocaleDateString()})]},t)}))})]}),Object(x.jsx)("h2",{children:"Add a New Credit"}),Object(x.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={id:Math.random().toString(36).substr(2,9),description:r,amount:parseFloat(o),date:(new Date).toISOString()};e.addDebit(n),e.updateBalance(e.accountBalance-n.amount),a(""),d("")},children:[Object(x.jsx)("input",{type:"text",name:"description",placeholder:"Description",value:r,onChange:function(e){return a(e.target.value)},style:I,required:!0}),Object(x.jsx)("input",{type:"number",name:"amount",placeholder:"Amount",value:o,onChange:function(e){return d(e.target.value)},style:I,required:!0}),Object(x.jsx)("button",{type:"submit",style:P,children:"Add Debit"})]}),Object(x.jsx)("br",{}),Object(x.jsx)(j.b,{to:"/",children:"Return to Home"})]})},H=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).mockLogIn=function(t){var n=Object(o.a)({},e.state.currentUser);n.userName=t.userName,e.setState({currentUser:n})},e.updateBalance=function(t){e.setState({accountBalance:t})},e.addDebit=function(t){e.setState((function(e){return{debitList:[].concat(Object(s.a)(e.debitList),[t]),accountBalance:e.accountBalance-t.amount}}))},e.state={accountBalance:1234567.89,creditList:[],debitList:[],currentUser:{userName:"Joe Smith",memberSince:"11/22/99"}},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://johnnylaicode.github.io/api/debits.json").then((function(e){return e.json()})).then((function(t){e.setState({debitList:t});var n=t.reduce((function(e,t){return e+t.amount}),0);e.setState((function(e){return{accountBalance:e.accountBalance-n}}))})).catch((function(e){return console.error("Error fetching debits:",e)}))}},{key:"render",value:function(){var e=this;return Object(x.jsx)(j.a,{basename:"/bank-of-react-starter-code",children:Object(x.jsxs)("div",{children:[Object(x.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(x.jsx)(f,{accountBalance:e.state.accountBalance})}}),Object(x.jsx)(h.b,{exact:!0,path:"/userProfile",render:function(){return Object(x.jsx)(y,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),Object(x.jsx)(h.b,{exact:!0,path:"/login",render:function(){return Object(x.jsx)(S,{user:e.state.currentUser,mockLogIn:e.mockLogIn})}}),Object(x.jsx)(h.b,{exact:!0,path:"/credits",render:function(){return Object(x.jsx)(F,{credits:e.state.creditList,accountBalance:e.state.accountBalance,updateBalance:e.updateBalance})}}),Object(x.jsx)(h.b,{exact:!0,path:"/debits",render:function(){return Object(x.jsx)(E,{debits:e.state.debitList,addDebit:e.addDebit,accountBalance:e.state.accountBalance,updateBalance:e.updateBalance})}})]})})}}]),n}(c.Component),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(H,{})}),document.getElementById("root")),M()}},[[70,1,2]]]);
//# sourceMappingURL=main.c0397863.chunk.js.map
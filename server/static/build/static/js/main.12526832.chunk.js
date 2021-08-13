(this.webpackJsonpjweather=this.webpackJsonpjweather||[]).push([[0],{158:function(e,t,a){},159:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(11),s=a.n(c),r=a(7),o=a(202),l=a(199),j=a(224),d=a(60),b=a(58),m=a.n(b),h=a(205),u=a(13),O=a(204),x=a(2),p=Object(l.a)((function(e){return Object(j.a)({button:Object(r.a)({color:"white",margin:e.spacing(1),marginTop:e.spacing(3),width:"15vw"},e.breakpoints.down("md"),{width:"50vw"}),buttonGrid:Object(r.a)({justifyContent:"center"},e.breakpoints.up("md"),{justifyContent:"flex-start"})})})),g=function(e){var t=p();return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(o.a,{item:!0,container:!0,className:t.buttonGrid,children:Object(x.jsx)(O.a,{type:e.type,onClick:e.click,startIcon:e.icon,size:"large",className:t.button,variant:"contained",color:"secondary",children:Object(x.jsx)(d.a,{children:e.text})})})})},v=i.a.memo(g),f=Object(l.a)((function(e){return Object(j.a)({root:{padding:"5vh"},coverImage:Object(r.a)({width:"100%",height:"100%"},e.breakpoints.down("md"),{display:"none"}),subHeading:Object(r.a)({fontSize:"1.5em",fontFamily:"sans-serif",color:"rgba(0,0,0,0.7)"},e.breakpoints.down("md"),{textAlign:"justify"}),heading:Object(r.a)({fontSize:"6em",color:e.palette.primary.main},e.breakpoints.down("md"),{textAlign:"center",fontSize:"4em",marginTop:e.spacing(2)}),button:Object(r.a)({color:"white",margin:e.spacing(1),marginTop:e.spacing(3),width:"15vw"},e.breakpoints.down("md"),{width:"50vw"}),buttonGrid:Object(r.a)({justifyContent:"center"},e.breakpoints.up("md"),{justifyContent:"flex-start"}),divide:{background:e.palette.primary.main,height:"0.7vh",marginTop:e.spacing(5)}})})),y=function(){var e=f(),t=Object(u.f)(),a=i.a.useRef(t.push).current,n=i.a.useCallback((function(){a("weather")}),[a]);return Object(x.jsxs)(o.a,{container:!0,className:e.root,children:[Object(x.jsx)(o.a,{item:!0,xs:12,lg:6,children:Object(x.jsx)("img",{alt:"home-page-cover",className:e.coverImage,src:"./images/home_cover.svg"})}),Object(x.jsxs)(o.a,{item:!0,lg:5,children:[Object(x.jsx)(d.a,{variant:"h1",className:e.heading,children:"One-Touch weather"}),Object(x.jsx)(d.a,{variant:"body1",className:e.subHeading,children:"Get detailed weather updates of 2,00,000+ cities in few clicks. Plan your day with our weather reports  and prepare for anything"}),Object(x.jsx)(v,{text:"checkout",icon:Object(x.jsx)(m.a,{}),click:n}),Object(x.jsx)(h.a,{className:e.divide})]})]})},w=i.a.memo(y),k=a(218),N=a(112),C=(a(136),Object(N.a)({palette:{primary:{main:"#206A5D"},secondary:{main:"#F58634"},lightGreen:{main:"#81B214"},lightYellow:{main:"#F58634"}},typography:{fontFamily:["Hammersmith One","sans-serif"].join(",")}})),S=a(111),T=a(14),L=a(20),F=a(4),I=a(29),B=a(222),G=a(206),W=a(207),A=a(208),P=a(210),H=a(209),D=a(99),z=a.n(D),J=a(100),M=a.n(J),R=a(101),q=a.n(R),Y=a(211),E=a(212),_=a(213),Q=a(79),U=a.n(Q),V=a(80),$=a.n(V),K=a(59),X=a.n(K),Z=240,ee=Object(l.a)((function(e){return Object(j.a)({root:{display:"flex",marginBottom:"10vh"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(Z,"px)"),marginLeft:Z,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:Object(r.a)({marginRight:e.spacing(5),color:e.palette.primary.main,display:"none"},e.breakpoints.down("md"),{display:"block"}),hide:{display:"none"},drawer:{width:Z,flexShrink:0},drawerPaper:{width:Z},drawerHeader:Object(L.a)(Object(L.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},title:{color:e.palette.primary.main,flexGrow:2},rlinks:Object(r.a)({marginRight:e.spacing(2),color:e.palette.primary.main,display:"block"},e.breakpoints.down("md"),{display:"none"})})})),te=function(){var e=ee(),t=Object(I.a)(),a=i.a.useState(!1),n=Object(T.a)(a,2),c=n[0],s=n[1],o=Object(u.f)(),l=i.a.useRef(o.push).current,j=i.a.useCallback((function(e){l(e.currentTarget.name)}),[l]),b=i.a.useCallback((function(e){l(e)}),[l]);return Object(x.jsxs)("header",{className:e.root,children:[Object(x.jsx)(G.a,{}),Object(x.jsx)(W.a,{position:"fixed",className:Object(F.a)(e.appBar,Object(r.a)({},e.appBarShift,c)),elevation:0,color:"transparent",children:Object(x.jsxs)(A.a,{children:[Object(x.jsx)(H.a,{color:"inherit","aria-label":"open drawer",onClick:function(){s(!0)},edge:"start",className:Object(F.a)(e.menuButton,c&&e.hide),style:{color:t.palette.primary.main},children:Object(x.jsx)(z.a,{fontSize:"large"})}),Object(x.jsx)(d.a,{variant:"h4",noWrap:!0,className:e.title,children:"J-Weather"}),Object(x.jsx)(H.a,{edge:"end",name:"home",onClick:j,className:e.rlinks,color:"inherit","aria-label":"menu",children:Object(x.jsx)(U.a,{})}),Object(x.jsx)(H.a,{edge:"end",name:"weather",onClick:j,className:e.rlinks,color:"inherit","aria-label":"menu",children:Object(x.jsx)(m.a,{})}),Object(x.jsx)(H.a,{edge:"end",name:"about",onClick:j,className:e.rlinks,color:"inherit","aria-label":"menu",children:Object(x.jsx)($.a,{})}),Object(x.jsx)(H.a,{edge:"end",name:"contact",onClick:j,className:e.rlinks,color:"inherit","aria-label":"menu",children:Object(x.jsx)(X.a,{})})]})}),Object(x.jsxs)(B.a,{className:e.drawer,variant:"persistent",anchor:"left",open:c,classes:{paper:e.drawerPaper},children:[Object(x.jsx)("div",{className:e.drawerHeader,children:Object(x.jsx)(H.a,{onClick:function(){s(!1)},children:"ltr"===t.direction?Object(x.jsx)(M.a,{}):Object(x.jsx)(q.a,{})})}),Object(x.jsx)(h.a,{}),Object(x.jsxs)(P.a,{children:[Object(x.jsxs)(Y.a,{button:!0,onClick:function(){b("home")},children:[Object(x.jsx)(E.a,{children:Object(x.jsx)(U.a,{})}),Object(x.jsx)(_.a,{primary:"Home"})]}),Object(x.jsxs)(Y.a,{button:!0,onClick:function(){b("weather")},children:[Object(x.jsx)(E.a,{children:Object(x.jsx)(m.a,{})}),Object(x.jsx)(_.a,{primary:"Weather"})]}),Object(x.jsxs)(Y.a,{button:!0,onClick:function(){b("about")},children:[Object(x.jsx)(E.a,{children:Object(x.jsx)($.a,{})}),Object(x.jsx)(_.a,{primary:"About"})]}),Object(x.jsxs)(Y.a,{button:!0,onClick:function(){b("contact")},children:[Object(x.jsx)(E.a,{children:Object(x.jsx)(X.a,{})}),Object(x.jsx)(_.a,{primary:"Contact"})]})]})]})]})},ae=i.a.memo(te),ne=Object(l.a)((function(e){return Object(j.a)({root:{padding:"5vw"},coverImage:{width:"100%",height:"100%",marginBottom:"5vh"},title:Object(r.a)({marginTop:"5vh"},e.breakpoints.down("md"),{textAlign:"center"}),subHeading:{color:"rgba(0,0,0,0.7)",fontFamily:"sans-serif",textAlign:"justify"},textGrid:Object(r.a)({marginLeft:"5vw"},e.breakpoints.down("md"),{marginLeft:"0vw"}),buttonGrid:Object(r.a)({justifyContent:"center"},e.breakpoints.up("md"),{justifyContent:"flex-start"}),button:Object(r.a)({color:"white",margin:e.spacing(1),marginTop:e.spacing(3),width:"15vw"},e.breakpoints.down("md"),{width:"50vw"}),coverImageMob:Object(r.a)({width:"100%",height:"100%",display:"none",marginTop:"-10vh"},e.breakpoints.down("md"),{display:"block"})})})),ie=function(){var e=ne(),t=Object(u.f)(),a=i.a.useRef(t.push).current,n=i.a.useCallback((function(){a("contact")}),[a]);return Object(x.jsxs)(o.a,{container:!0,className:e.root,children:[Object(x.jsx)(o.a,{item:!0,lg:6,children:Object(x.jsx)("img",{className:e.coverImage,src:"./images/about_cover.svg",alt:"about-page-cover"})}),Object(x.jsxs)(o.a,{item:!0,lg:5,className:e.textGrid,children:[Object(x.jsx)(d.a,{variant:"h4",className:e.title,children:"About us"}),Object(x.jsx)(d.a,{variant:"h6",className:e.subHeading,children:"J-Weather built using open weather api. We help you to get detailed weather reports of about 2,00,000+ cities up-to-date."}),Object(x.jsx)(v,{text:"say hello!",icon:Object(x.jsx)(X.a,{}),click:n})]})]})},ce=i.a.memo(ie),se=a(12),re=a.n(se),oe=a(22),le=a(72),je=a(215),de=a(225),be=a(226),me=a(216),he=a(103),ue=a.n(he),Oe=a(102),xe=a.n(Oe),pe=a(219),ge=a(104),ve=a.n(ge),fe=a(217),ye=a(70),we=a.n(ye),ke=a(223),Ne=a(220);function Ce(e){return Object(x.jsx)(Ne.a,Object(L.a)({elevation:6,variant:"filled"},e))}var Se=Object(l.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function Te(e){var t=Se(),a=i.a.useState(!1),n=Object(T.a)(a,2),c=n[0],s=n[1];i.a.useEffect((function(){s(e.open)}),[e.open]);var r=function(t,a){"clickaway"!==a&&(s(!1),void 0!==(null===e||void 0===e?void 0:e.cb)&&(null===e||void 0===e||e.cb()))};return Object(x.jsx)("div",{className:t.root,children:Object(x.jsx)(ke.a,{open:c,autoHideDuration:6e3,onClose:r,children:Object(x.jsx)(Ce,{onClose:r,severity:e.type,children:e.message})})})}var Le=i.a.memo(Te),Fe=Object(l.a)((function(e){return Object(j.a)({root:{padding:"5vw"},coverImage:Object(r.a)({width:"85%",height:"85%",marginBottom:"5vh"},e.breakpoints.down("md"),{display:"none"}),title:Object(r.a)({},e.breakpoints.down("md"),{textAlign:"center"}),formLabel:{fontFamily:"sans-serif"},formBase:{},formInput:{},formGrid:Object(r.a)({},e.breakpoints.down("md"),{width:"101.5vw"})})})),Ie={required:{value:!0,message:"Please enter your name"},maxLength:{value:25,message:"Your name is too long"},minLength:{value:3,message:"Your name is too short"}},Be={required:{value:!0,message:"Let us know your email"},maxLength:{value:255,message:"Your email is too long"},pattern:{value:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,message:"Please enter a valid email"}},Ge={required:{value:!0,message:"Please don't leave empty message"},minLength:{value:5,message:"Message is too short"}},We=function(){var e,t,a,n=Fe(),c=Object(le.a)(),s=c.handleSubmit,r=c.register,l=c.formState.errors,j=i.a.useState({type:"success",message:"",open:!1}),b=Object(T.a)(j,2),m=b[0],h=b[1],u=function(){var e=Object(oe.a)(re.a.mark((function e(t){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,we.a.post("/message/save",{fullName:t.fullName,email:t.email,message:t.message});case 3:h({open:!0,message:"Message is sent!",type:"success"}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),h({open:!0,message:"Something went wrong!",type:"error"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),O=i.a.useCallback((function(){h({open:!1,message:"",type:void 0})}),[]);return Object(x.jsxs)(o.a,{container:!0,className:n.root,children:[Object(x.jsx)(o.a,{item:!0,lg:7,children:Object(x.jsx)("img",{src:"./images/contact_us.svg",alt:"contact-us",className:n.coverImage})}),Object(x.jsx)(o.a,{item:!0,container:!0,lg:5,children:Object(x.jsx)("form",{onSubmit:s(u),className:n.formBase,noValidate:!0,autoComplete:"off",children:Object(x.jsxs)(o.a,{container:!0,item:!0,xs:12,className:n.formGrid,spacing:3,children:[Object(x.jsx)(o.a,{item:!0,xs:12,children:Object(x.jsx)(d.a,{className:n.title,variant:"h4",children:"Contact Us"})}),Object(x.jsx)(o.a,{item:!0,xs:12,children:Object(x.jsxs)(je.a,{variant:"outlined",fullWidth:!0,children:[Object(x.jsx)(de.a,{htmlFor:"fullName",children:"Name"}),Object(x.jsx)(be.a,Object(L.a)(Object(L.a)({error:void 0!==l.fullName},r("fullName",Ie)),{},{type:"email",fullWidth:!0,startAdornment:Object(x.jsx)(me.a,{position:"start",children:Object(x.jsx)(xe.a,{})}),id:"fullName",label:"Name",placeholder:"John Doe"})),Object(x.jsx)(fe.a,{id:"full-helper-text",children:null===(e=l.fullName)||void 0===e?void 0:e.message})]})}),Object(x.jsx)(o.a,{item:!0,xs:12,children:Object(x.jsxs)(je.a,{variant:"outlined",fullWidth:!0,children:[Object(x.jsx)(de.a,{className:n.formLabel,htmlFor:"email",children:"Email"}),Object(x.jsx)(be.a,Object(L.a)(Object(L.a)({},r("email",Be)),{},{startAdornment:Object(x.jsx)(me.a,{position:"start",children:Object(x.jsx)(ue.a,{})}),error:void 0!==l.email,id:"email",placeholder:"johndoe@example.com",label:"email"})),Object(x.jsx)(fe.a,{id:"email-helper-text",children:null===(t=l.email)||void 0===t?void 0:t.message})]})}),Object(x.jsx)(o.a,{item:!0,xs:12,children:Object(x.jsx)(pe.a,Object(L.a)(Object(L.a)({},r("message",Ge)),{},{id:"message",label:"message",multiline:!0,rows:4,variant:"outlined",fullWidth:!0,error:void 0!==l.message,helperText:null===(a=l.message)||void 0===a?void 0:a.message}))}),Object(x.jsx)(o.a,{item:!0,xs:12,style:{marginTop:"-5vh"},children:Object(x.jsx)(v,{type:"submit",text:"message",icon:Object(x.jsx)(ve.a,{})})})]})})}),Object(x.jsx)(o.a,{item:!0,xs:12,children:Object(x.jsx)(Le,{cb:O,message:null===m||void 0===m?void 0:m.message,type:null===m||void 0===m?void 0:m.type,open:null===m||void 0===m?void 0:m.open})})]})},Ae=i.a.memo(We),Pe=a(106),He=a.n(Pe),De=a(54),ze=a(71),Je=Object(ze.b)({name:"weather",initialState:{city:"",data:null},reducers:{setQueryCity:function(e,t){e.city=t.payload},setWeatherData:function(e,t){e.data=t.payload}}}),Me=Je.actions,Re=Me.setQueryCity,qe=Me.setWeatherData,Ye=Je.reducer,Ee=a(107),_e=a.n(Ee),Qe=a(160),Ue=a(108),Ve=a.n(Ue),$e=a(109),Ke=a.n($e),Xe=a(110),Ze=a.n(Xe),et=Object(l.a)((function(e){return Object(j.a)({root:Object(r.a)({padding:"3vw",paddingTop:"2vw"},e.breakpoints.down("md"),{padding:"3vh"}),coverImage:Object(r.a)({width:"50%",height:"50%",opacity:"90%",marginTop:"7vh"},e.breakpoints.down("md"),{width:"75%",height:"75%"}),buttonGrid:Object(r.a)({display:"flex",marginTop:e.spacing(-2)},e.breakpoints.down("md"),{justifyContent:"flex-start",marginTop:e.spacing(-1)}),title:{textAlign:"center"},dataContainer:{textAlign:"center"}})})),tt={required:{value:!0,message:"Please enter your city"},minLength:{value:2,message:"City name is too short"}},at=function(){var e,t=et(),a=Object(De.b)(),n=i.a.useState(!1),c=Object(T.a)(n,2),s=c[0],r=c[1],l=(Object(De.c)((function(e){return e.weather.city})),Object(De.c)((function(e){return e.weather.data}))),j=Object(le.a)(),b=j.handleSubmit,m=j.register,h=j.formState.errors,u=function(){var e=Object(oe.a)(re.a.mark((function e(t){var n;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(Re(t.city)),e.prev=1,e.next=4,we.a.get("/weather?city=".concat(t.city));case 4:n=e.sent,a(qe(n.data)),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.response.data),a(qe(null)),r(!0);case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(o.a,{container:!0,className:t.root,children:[Object(x.jsx)(o.a,{item:!0,xs:12,children:Object(x.jsx)(d.a,{variant:"h4",className:t.title,children:"Let's know about your city"})}),Object(x.jsx)(o.a,{item:!0,xs:12,children:Object(x.jsx)("form",{onSubmit:b(u),children:Object(x.jsxs)(o.a,{container:!0,item:!0,xs:12,spacing:2,children:[Object(x.jsx)(o.a,{item:!0,xs:12,lg:10,children:Object(x.jsx)(pe.a,Object(L.a)(Object(L.a)({error:void 0!==h.city,helperText:null===(e=h.city)||void 0===e?void 0:e.message},m("city",tt)),{},{fullWidth:!0,variant:"outlined",type:"text",placeholder:"eg. Mumbai",name:"city"}))}),Object(x.jsx)(o.a,{item:!0,xs:12,container:!0,lg:2,className:t.buttonGrid,alignItems:"stretch",children:Object(x.jsx)(v,{type:"submit",text:"search",icon:Object(x.jsx)(He.a,{})})})]})})}),null===l?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(o.a,{item:!0,xs:12,container:!0,justifyContent:"center",children:Object(x.jsx)("img",{src:"./images/city.svg",alt:"city",className:t.coverImage})}),Object(x.jsx)(o.a,{item:!0,xs:12,children:Object(x.jsx)(Le,{open:s,message:"City not found",type:"error"})})]}):Object(x.jsxs)(o.a,{item:!0,xs:12,container:!0,spacing:2,style:{margin:0},children:[Object(x.jsx)(o.a,{item:!0,xs:12,className:t.dataContainer,children:Object(x.jsx)(d.a,{variant:"h4",children:"".concat(null===l||void 0===l?void 0:l.weather.slice(0,1).toUpperCase()).concat(null===l||void 0===l?void 0:l.weather.slice(1))})}),Object(x.jsx)(o.a,{item:!0,xs:12,lg:6,className:t.dataContainer,children:Object(x.jsxs)(Qe.a,{elevation:2,children:[Object(x.jsxs)(d.a,{variant:"h4",children:[null===l||void 0===l?void 0:l.temp,"\u2103"]}),Object(x.jsx)(_e.a,{}),Object(x.jsx)(d.a,{variant:"body1",children:"Temperature"})]})}),Object(x.jsx)(o.a,{item:!0,xs:12,lg:6,className:t.dataContainer,children:Object(x.jsxs)(Qe.a,{elevation:2,children:[Object(x.jsxs)(d.a,{variant:"h4",children:[null===l||void 0===l?void 0:l.humidity,"%"]}),Object(x.jsx)(Ve.a,{}),Object(x.jsx)(d.a,{variant:"body1",children:"Humidity"})]})}),Object(x.jsx)(o.a,{item:!0,xs:12,lg:6,className:t.dataContainer,children:Object(x.jsxs)(Qe.a,{elevation:2,children:[Object(x.jsxs)(d.a,{variant:"h4",children:[null===l||void 0===l?void 0:l.pressure,"Pa"]}),Object(x.jsx)(Ke.a,{}),Object(x.jsx)(d.a,{variant:"body1",children:"Pressure"})]})}),Object(x.jsx)(o.a,{item:!0,xs:12,lg:6,className:t.dataContainer,children:Object(x.jsxs)(Qe.a,{elevation:2,children:[Object(x.jsxs)(d.a,{variant:"h4",children:[null===l||void 0===l?void 0:l.wind,"m/s"]}),Object(x.jsx)(Ze.a,{}),Object(x.jsx)(d.a,{variant:"body1",children:"Wind speed"})]})})]})]})},nt=i.a.memo(at),it=Object(ze.a)({reducer:{weather:Ye}}),ct=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(De.a,{store:it,children:Object(x.jsx)(k.a,{theme:C,children:Object(x.jsxs)(S.a,{children:[Object(x.jsx)(ae,{}),Object(x.jsxs)(u.c,{children:[Object(x.jsx)(u.a,{exact:!0,path:"/home",children:Object(x.jsx)(w,{})}),Object(x.jsx)(u.a,{exact:!0,path:"/",children:Object(x.jsx)(w,{})}),Object(x.jsx)(u.a,{exact:!0,path:"/about",children:Object(x.jsx)(ce,{})}),Object(x.jsx)(u.a,{exact:!0,path:"/contact",children:Object(x.jsx)(Ae,{})}),Object(x.jsx)(u.a,{exact:!0,path:"/weather",children:Object(x.jsx)(nt,{})})]})]})})})})};var st=function(){return Object(x.jsx)(ct,{})},rt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,228)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))};a(158);s.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(st,{})}),document.getElementById("root")),rt()}},[[159,1,2]]]);
//# sourceMappingURL=main.12526832.chunk.js.map
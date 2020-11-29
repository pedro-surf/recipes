(this.webpackJsonprecipes=this.webpackJsonprecipes||[]).push([[0],{117:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(0),c=n.n(a),i=n(10),o=n(23),s=n(42),l=n(17),u=n(77),d=n(80),j=n(22),b=n(7),h=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},g=function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})).slice(0,5)},O=function(){for(var e="",t="abcdefghijklmnopqrstuvwxyz";e.length<1;)e+=t[Math.floor(Math.random()*t.length)];return e},f="auth/LOGIN_REQUEST",p="auth/LOGOUT_REQUEST",m="auth/RECOVERY_REQUEST",x="auth/DECREMENT_TIMER",v={loggedIn:!1,jwtToken:null,recoveryTimer:0,invalidCredentials:!1,emptyPassword:!1},y=function(e){return function(t){return t({type:f,credentials:e})}},w=function(){return function(e){return e({type:p})}},k=function(e){return function(t){return t({type:m,credentials:e})}},R=function(){return function(e){return setTimeout((function(){e({type:x})}),1e3)}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:var n=h(t.credentials.email),r=t.credentials.password.length>0;return Object(b.a)(Object(b.a)({},e),{},{loggedIn:n&&r,invalidCredentials:!n,emptyPassword:!r,jwtToken:n&&r?"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6IjkxY2RiY2UyLTlkYjktNDgzNS04MDg2LThlMDBiNDhjYjE3OCIsImlhdCI6MTYwNjM1Njk3NywiZXhwIjoxNjA2MzYwNTc3fQ.6Ykhb1-IuwYYjKYOLf5cV3QrhxYcMgwD2u2DidNMADU":""});case p:return Object(b.a)(Object(b.a)({},e),{},{loggedIn:!1,jwtToken:null});case m:return h(t.credentials.email)?(R(),Object(b.a)(Object(b.a)({},e),{},{invalidCredentials:!1,recoveryTimer:60})):Object(b.a)(Object(b.a)({},e),{},{invalidCredentials:!0});case x:return Object(b.a)(Object(b.a)({},e),{},{recoveryTimer:e.recoveryTimer-1});default:return e}},T=n(39),C=n(15),F="meals/FETCH_MEALS",S="meals/ADD_MEAL",I="meals/DELETE_MEAL",A="meals/DELETE_ALL_MEALS",E="meals/SET_MEALS",L="meals/FILTER_MEALS",P={isFetching:!1,items:[]},D=function(e){return function(t){var n=Object(b.a)(Object(b.a)({},e),{},{strMeal:e.strMeal.slice(0,1).toUpperCase()+e.strMeal.slice(1)});t({type:S,payload:n}),C.b.success("Recipe added successfully")}},N=function(e){return function(t){t({type:I,id:e}),C.b.error("Recipe removed successfully")}},W=function(){return function(e){e({type:A})}},U=function(e){return function(t){t({type:E,payload:e}),C.b.info("Fetched successfully.")}},_=function(e){var t=e.filter,n=e.search;return function(e){C.b.info("Filtering recipes...");var r="str".concat(t.slice(0,1).toUpperCase()+t.slice(1));console.log(t,r),e({type:L,filter:r,search:n})}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(b.a)(Object(b.a)({},e),{},{isFetching:!e.isFetching});case E:return Object(b.a)(Object(b.a)({},e),{},{isFetching:!1,items:e.items.length>0?Object(T.a)(new Set([].concat(Object(T.a)(e.items),Object(T.a)(t.payload)).sort((function(e,t){return e.strMeal>t.strMeal?1:-1})))):Object(T.a)(t.payload)});case S:var n=Object(b.a)(Object(b.a)({},t.payload),{},{idMeal:g(),strMealThumb:"https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg"});return Object(b.a)(Object(b.a)({},e),{},{isFetching:!1,items:e.items.length>0?[].concat(Object(T.a)(e.items),[n]).sort((function(e,t){return e.strMeal>t.strMeal?1:-1})):[n]});case I:return Object(b.a)(Object(b.a)({},e),{},{isFetching:!1,items:Object(T.a)(e.items.filter((function(e){return e.idMeal!==t.id})))});case L:return Object(b.a)(Object(b.a)({},e),{},{items:Object(T.a)(e.items.filter((function(e){return e[t.filter].toLowerCase().includes(t.search.toLowerCase())})))});case A:return{isFetching:!1,items:[]};default:return e}},z="settings/SET_LANGUAGE",G="settings/SET_DARK_MODE",J={language:"en",darkMode:!1},V=function(e){return function(t){return t({type:z,language:e})}},H=function(e){return function(t){return t({type:G,darkMode:e})}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(b.a)(Object(b.a)({},e),{},{language:t.language});case G:return Object(b.a)(Object(b.a)({},e),{},{darkMode:t.darkMode});default:return e}},Z=function(e){return Object(l.c)({router:Object(s.b)(e),auth:M,meals:Y,settings:Q})},q=j.a(),B=[d.a,Object(u.a)(q)],K=l.d.apply(void 0,[l.a.apply(void 0,B)].concat([])),X=Object(l.e)(Z(q),{},K),$=n(12),ee=n(26),te=n(16),ne=n(20),re=n(21),ae=n(67),ce={btnGreen:{backgroundColor:"rgb(40, 167, 69)",color:"white",padding:"6px 16px"},btnOrange:{backgroundColor:"#ffc107 ",color:"black",padding:"6px 16px"},recipesGrid:{maxWidth:"100%",marginTop:"2em"}};function ie(){var e=Object(ne.a)(["\n    display: flex;\n    justify-content: space-around;\n    align-tems: center;\n    padding: 10px;\n    text-decoration: none;\n    ","\n"]);return ie=function(){return e},e}function oe(){var e=Object(ne.a)(["\n    font-weight: bold;\n"]);return oe=function(){return e},e}function se(){var e=Object(ne.a)(["\n    justify-content: space-between;\n    align-items: center;\n    text-align: center;\n"]);return se=function(){return e},e}function le(){var e=Object(ne.a)(["\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    @media (min-width: 400px) {\n        padding-left: 1.8em;\n        flex-direction: row;\n      }\n    justify-content: center;\n    text-align: center;\n    align-items: center;\n    margin-top: .45em;\n"]);return le=function(){return e},e}function ue(){var e=Object(ne.a)(["\n    @media (max-width: 400px) {\n        padding: .2em;\n    }\n"]);return ue=function(){return e},e}function de(){var e=Object(ne.a)(["\n    padding: .2em;\n    @media (max-width: 400px) {\n        width: 95%;\n      }\n"]);return de=function(){return e},e}function je(){var e=Object(ne.a)(["\n    padding: .5em;\n"]);return je=function(){return e},e}function be(){var e=Object(ne.a)(["\n    margin-top: 1em;\n    justify-content: space-between;\n    padding: 0 3em;\n"]);return be=function(){return e},e}function he(){var e=Object(ne.a)(["\n    display: flex;\n    flex-direction: column;\n    margin: 5px;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n"]);return he=function(){return e},e}function ge(){var e=Object(ne.a)(["\n    margin: 5px;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n"]);return ge=function(){return e},e}function Oe(){var e=Object(ne.a)(["\n    font-size: 23px; \n    font-family: monospace;"]);return Oe=function(){return e},e}function fe(){var e=Object(ne.a)(["\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    max-height: 40vh;\n"]);return fe=function(){return e},e}function pe(){var e=Object(ne.a)(["\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    margin-top: 1.3em;\n"]);return pe=function(){return e},e}function me(){var e=Object(ne.a)(["\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n"]);return me=function(){return e},e}function xe(){var e=Object(ne.a)(["\n    text-decoration: none;\n    font-size: 22px;\n    color: black;\n    padding: 0 0.5em;\n    @media (max-width: 400px) {\n        font-size: 11px;\n        font-weight: bold;\n      }\n    ","\n"]);return xe=function(){return e},e}var ve=Object(re.a)(ae.a)(xe(),(function(e){return e.darkMode&&"color: white;\n    &:hover {\n        color: red;\n    }"})),ye=re.a.div(me()),we=re.a.div(pe()),ke=re.a.div(fe()),Re=re.a.p(Oe()),Me=re.a.form(ge()),Te=re.a.form(he()),Ce=(re.a.div(be()),re.a.div(je())),Fe=re.a.div(de()),Se=re.a.div(ue()),Ie=re.a.div(le()),Ae=re.a.div(se()),Ee=re.a.span(oe()),Le=re.a.header(ie(),(function(e){return e.darkMode&&"background-color: black;"})),Pe=n(150),De=n(172),Ne=n(157),We=n(158),Ue=n(87),_e=n.n(Ue),Ye=Object(o.c)((function(e){var t=e.auth,n=t.loggedIn,r=t.recoveryTimer;return{jwtToken:t.jwtToken,loggedIn:n,recoveryTimer:r,invalidCredentials:t.invalidCredentials,emptyPassword:t.emptyPassword}}),(function(e){return Object(l.b)({login:y,recoverPassword:k,changePage:function(){return Object(te.d)("/recipes")},logout:w},e)}))((function(e){var t=c.a.useState(""),n=Object(ee.a)(t,2),a=n[0],i=n[1],o=c.a.useState(""),s=Object(ee.a)(o,2),l=s[0],u=s[1];return Object(r.jsxs)(ye,{children:[Object(r.jsx)("h1",{children:"Welcome to my Recipes App!"}),Object(r.jsx)(r.Fragment,{children:!e.loggedIn&&Object(r.jsx)(Pe.a,{in:!e.loggedIn,children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"Authentication"}),Object(r.jsxs)(Te,{onSubmit:function(e){return e.preventDefault()},children:[Object(r.jsx)(Ce,{children:Object(r.jsx)(De.a,{InputProps:{startAdornment:Object(r.jsx)(Ne.a,{position:"start",children:Object(r.jsx)(_e.a,{})})},error:e.invalidCredentials,helperText:e.invalidCredentials&&"Invalid e-mail address",type:"email",onChange:function(e){return i(e.target.value)},value:a,label:"E-mail",variant:"outlined"})}),Object(r.jsx)(Ce,{children:Object(r.jsx)(De.a,{error:e.emptyPassword,helperText:e.emptyPassword&&"Password can't be empty",type:"password",onChange:function(e){return u(e.target.value)},value:l,label:"Password",variant:"outlined"})}),Object(r.jsx)(Ce,{children:Object(r.jsx)(We.a,{color:"primary",variant:"contained",onClick:function(){return e.login({email:a,password:l})},children:"Login to Account"})}),Object(r.jsx)(Ce,{children:Object(r.jsx)(We.a,{color:"secondary",variant:"outlined",onClick:function(){return e.recoverPassword({email:a,password:l})},children:"Lost Password"})})]})]})})}),e.recoveryTimer&&e.recoveryTimer>0&&!e.loggedIn?Object(r.jsxs)("p",{children:["Wait ",e.recoveryTimer," seconds before trying again"]}):"",Object(r.jsx)("div",{children:e.loggedIn&&Object(r.jsx)(Pe.a,{appear:e.loggedIn,in:e.loggedIn,timeout:1200,children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"Logged in successfully."}),Object(r.jsx)(Ce,{children:Object(r.jsx)(We.a,{color:"primary",variant:"outlined",onClick:function(){return e.changePage()},children:"Go to Recipes"})}),Object(r.jsx)(Ce,{children:Object(r.jsx)(We.a,{color:"secondary",variant:"outlined",onClick:function(){return e.logout()},children:"Log out"})})]})})})]})})),ze=n(88),Ge=n.n(ze),Je=function(){return Object(r.jsxs)(ye,{children:[Object(r.jsx)("h2",{children:"About this app"}),Object(r.jsx)(Re,{children:"This project was developed for a job test."}),Object(r.jsx)(Re,{children:"It uses React-Redux and Material-UI, and might be used as boilerplate for SPA projects in general."}),Object(r.jsx)(Re,{children:"Built from scratch in a dozen hours."}),Object(r.jsx)(Re,{style:{color:"green",marginTop:"1.2em"},children:Object(r.jsxs)("a",{href:"https://github.com/pedro-surf",rel:"noopener noreferrer",target:"_blank",children:[Object(r.jsx)(Ge.a,{})," @pedro-surf"]})}),Object(r.jsx)(Re,{children:"Nov, 2020"})]})},Ve=n(71),He=n.n(Ve),Qe=n(89),Ze=n(159),qe=n(160),Be=n(161),Ke=n(90),Xe=n.n(Ke),$e={en:{addRecipe:"Add Recipe",fetchRandomRecipes:"Fetch Random Recipes",filterRecipes:"Filter Recipes",removeAll:"Remove All",settings:"Settings",lang:"Language",home:"Home",about:"About",recipes:"Recipes",hideForm:"Hide Form",hideFilter:"Hide Filter"},es:{addRecipe:"Agregar Receta",fetchRandomRecipes:"Obtener recetas aleart\xf3rias",filterRecipes:"Filtrar Recetas",removeAll:"Remover Todas",settings:"Preferencias",lang:"Idioma",home:"P\xe1gina Inicial",about:"Acerca de",recipes:"Recetas",hideForm:"Ocultar Formul\xe1rio",hideFilter:"Ocultar Filtro"},pt:{addRecipe:"Adicionar Receita",fetchRandomRecipes:"Obter receitas aleart\xf3rias",filterRecipes:"Filtrar Receitas",removeAll:"Remover Todas",settings:"Prefer\xeancias",lang:"Idioma",home:"P\xe1gina Inicial",about:"Sobre",recipes:"Receitas",hideForm:"Ocultar Formul\xe1rio",hideFilter:"Ocultar Filtro"}},et=Object(o.c)((function(e){var t=e.settings,n=t.language,r=t.darkMode,a=e.meals;return{isFetching:a.isFetching,items:a.items,language:n,darkMode:r}}),(function(e){return Object(l.b)({addRecipe:D,removeRecipe:N,deleteAllRecipes:W,changePage:function(e){return Object(te.d)(e)},setRecipes:U,filterRecipes:_},e)}))((function(e){var t=c.a.useState(!1),n=Object(ee.a)(t,2),a=n[0],i=n[1],o=c.a.useState(!1),s=Object(ee.a)(o,2),l=s[0],u=s[1],d=function(){var t=Object(Qe.a)(He.a.mark((function t(){var n,r,a,c,i;return He.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return C.b.info("Loading..."),n=O(),t.next=4,fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=".concat(n));case 4:return r=t.sent,t.next=7,r.json();case 7:if(a=t.sent,(c=a.meals)&&0!==c.length){t.next=11;break}return t.abrupt("return",C.b.error("No meals with random letter ".concat(n.toUpperCase(),"! Try to fetch again."),{timer:3e3}));case 11:if(!(c.length>5)){t.next=14;break}return i=c.slice(0,5),t.abrupt("return",e.setRecipes(i));case 14:e.setRecipes(c);case 15:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.jsxs)(ke,{children:[Object(r.jsx)("h2",{style:{marginBottom:".3em"},children:$e[e.language].recipes}),Object(r.jsx)(Ze.a,{children:Object(r.jsx)(Xe.a,{}),color:"secondary",badgeContent:e.items.length,showZero:!0,overlap:"circle"}),Object(r.jsxs)(qe.a,{justify:"center",container:!0,children:[Object(r.jsx)(qe.a,{item:!0,xs:12,md:a&&l?7:8,children:Object(r.jsx)(Tt,{onFetch:d,deleteAll:e.deleteAllRecipes,viewForm:a,viewFilter:l,setViewForm:i,setViewFilter:u,showLengthyActions:e.items.length>0,i18n:e.language})}),a&&Object(r.jsx)(Be.a,{in:a,timeout:1200,children:Object(r.jsx)(qe.a,{xs:12,md:3,children:Object(r.jsx)(Ae,{children:Object(r.jsx)(ct,{close:function(){return i(!1)},addRecipe:e.addRecipe})})})}),l&&e.items.length>0&&Object(r.jsx)(Pe.a,{in:l,timeout:1200,children:Object(r.jsx)(qe.a,{xs:12,md:2,children:Object(r.jsx)(Ae,{children:Object(r.jsx)(At,{onSubmit:e.filterRecipes})})})})]}),Object(r.jsx)(it,{darkMode:e.darkMode,data:e.items,removeRecipe:e.removeRecipe})]})}));function tt(e){var t=e.language,n=e.darkMode,a=["home","settings","about","recipes"].map((function(e){return Object(r.jsx)(ve,{darkMode:n,to:"/".concat(e),children:$e[t][e]},e)}));return Object(r.jsx)(Le,{darkMode:n,children:a})}var nt=n(36),rt=n(162),at={strMeal:"",strInstructions:"",strCategory:"",strArea:"",strTags:""},ct=function(e){var t=c.a.useState(at),n=Object(ee.a)(t,2),a=n[0],i=n[1],o=function(e){return i(Object(b.a)(Object(b.a)({},a),{},Object(nt.a)({},e.target.name,e.target.value)))},s=Object.keys(at).map((function(e,t){return t<1&&Object(r.jsx)(De.a,{fullWidth:!0,style:{margin:"0 .5em"},value:a[e],name:e,label:e.substr(3),onChange:o},e)})),l=Object.keys(at).map((function(e,t){return t>0&&Object(r.jsx)(De.a,{multiline:1===t,style:{margin:"0 .1em"},value:a[e],name:e,label:e.substr(3),onChange:o},e)}));return Object(r.jsxs)(rt.a,{children:[Object(r.jsx)(Ee,{children:"Send your own recipe."}),Object(r.jsxs)(Me,{onSubmit:function(e){return e.preventDefault()},children:[Object(r.jsx)("div",{children:s}),Object(r.jsx)("div",{children:l}),Object(r.jsx)(We.a,{fullWidth:!0,variant:"outlined",style:{marginTop:"1.3em"},color:"secondary",onClick:function(){return function(){if(Object.keys(a).some((function(e){return!a[e]||0===a[e].length})))return C.b.error("Please fill all fields");e.addRecipe(a),i(at),e.close()}()},children:"Add Recipe"})]})]})},it=function(e){var t=e.data,n=e.removeRecipe,a=e.darkMode;return t&&0!==t.length?Object(r.jsx)(qe.a,{style:Object(b.a)(Object(b.a)({},ce.recipesGrid),{},{backgroundColor:a?"#002884":"white"}),container:!0,justify:"center",spacing:2,children:t.map((function(e,t){return Object(r.jsx)(qe.a,{item:!0,children:Object(r.jsx)(Mt,{removeRecipe:n,data:e})},t)}))}):Object(r.jsx)(we,{children:"No recipes!"})},ot=n(163),st=n(4),lt=n(55),ut=n(164),dt=n(165),jt=n(175),bt=n(166),ht=n(167),gt=n(168),Ot=n(169),ft=n(170),pt=n(64),mt=n(91),xt=n.n(mt),vt=n(93),yt=n.n(vt),wt=n(92),kt=n.n(wt),Rt=Object(ot.a)((function(e){return{root:{width:344,minHeight:360,height:"100%"},expandedCard:{width:344,minHeight:370},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:pt.a[500]},cardTitle:{fontSize:"14px"}}}));var Mt=function(e){var t=e.data,n=e.removeRecipe,a=Rt(),i=c.a.useState(!1),o=Object(ee.a)(i,2),s=o[0],l=o[1],u=c.a.useMemo((function(){return t.strInstructions.split("\r\n").map((function(e){return Object(r.jsx)(lt.a,{paragraph:!0,children:e})}))}),[t.strInstructions]);return Object(r.jsx)(Pe.a,{in:!0,timeout:1500,children:Object(r.jsx)(Se,{children:Object(r.jsxs)(ut.a,{className:s?a.expandedCard:a.root,children:[Object(r.jsx)(dt.a,{avatar:Object(r.jsx)(jt.a,{"aria-label":"recipe",className:a.avatar,children:t.strMeal.substr(0,1).toUpperCase()}),title:t.strMeal,titleTypographyProps:{variant:t.strMeal.length>20?"h7":"h6"},subheader:t.strTags?t.strTags.replace(",",", "):"(No tags)"}),t.strMealThumb&&Object(r.jsx)(bt.a,{className:a.media,image:t.strMealThumb,title:t.strMeal}),Object(r.jsxs)(ht.a,{children:[Object(r.jsxs)(lt.a,{variant:"body1",color:"textSecondary",component:"p",children:["Origin: ",t.strArea]}),Object(r.jsx)(lt.a,{variant:"body2",color:"textSecondary",component:"p",children:t.strCategory})]}),Object(r.jsxs)(gt.a,{disableSpacing:!0,children:[Object(r.jsx)(Ot.a,{onClick:function(){return navigator.clipboard.writeText(t.strInstructions),void C.b.success("Recipe method copied to clipboard!")},"aria-label":"share",children:Object(r.jsx)(xt.a,{})}),Object(r.jsx)(Ot.a,{onClick:function(){return n(t.id||t.idMeal)},children:Object(r.jsx)(kt.a,{})}),Object(r.jsx)(Ot.a,{className:Object(st.a)(a.expand,Object(nt.a)({},a.expandOpen,s)),onClick:function(){l(!s)},"aria-expanded":s,"aria-label":"show more",children:Object(r.jsx)(yt.a,{})})]}),Object(r.jsx)(ft.a,{in:s,timeout:"auto",unmountOnExit:!0,children:Object(r.jsxs)(ht.a,{children:[Object(r.jsx)(lt.a,{paragraph:!0,children:"Method:"}),u]})})]})})})};function Tt(e){var t=e.i18n,n=e.onFetch,a=e.deleteAll,c=e.setViewForm,i=e.viewForm,o=e.viewFilter,s=e.setViewFilter,l=e.showLengthyActions;return Object(r.jsxs)(Ie,{children:[Object(r.jsx)(Fe,{children:Object(r.jsx)(We.a,{fullWidth:!0,onClick:function(){return n()},variant:"contained",color:"primary",children:$e[t].fetchRandomRecipes})}),Object(r.jsx)(Fe,{children:Object(r.jsx)(We.a,{fullWidth:!0,onClick:function(){return c(!i)},style:ce.btnGreen,children:i?$e[t].hideForm:$e[t].addRecipe})}),l&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Fe,{children:Object(r.jsx)(We.a,{fullWidth:!0,onClick:function(){return s(!o)},style:ce.btnOrange,children:o?$e[t].hideFilter:$e[t].filterRecipes})}),Object(r.jsx)(Fe,{children:Object(r.jsx)(We.a,{fullWidth:!0,onClick:function(){return a()},variant:"contained",color:"secondary",children:$e[t].removeAll})})]})]})}var Ct=n(171),Ft=n(176),St={filter:"meal",search:""},It=["meal","instructions","category","area","tags"],At=function(e){var t=e.onSubmit,n=c.a.useState(St),a=Object(ee.a)(n,2),i=a[0],o=a[1],s=function(e){return o(Object(b.a)(Object(b.a)({},i),{},Object(nt.a)({},e.target.name,e.target.value)))};return Object(r.jsxs)(rt.a,{children:[Object(r.jsx)(Ee,{children:"Filter Results"}),Object(r.jsxs)(Me,{onSubmit:function(e){return e.preventDefault()},children:[Object(r.jsx)(De.a,{fullWidth:!0,value:i.search,name:"search",color:"primary",label:"Search",onChange:s}),Object(r.jsx)(Ct.a,{color:"primary",fullWidth:!0,onChange:s,name:"filter",value:i.filter,children:It.map((function(e){return Object(r.jsx)(Ft.a,{value:e,children:e})}))}),Object(r.jsx)("div",{children:Object(r.jsx)(We.a,{fullWidth:!0,variant:"outlined",style:{marginTop:"1.3em"},color:"primary",onClick:function(){return 0===i.filter.length?C.b.error("Select a filter"):0===i.search.length?C.b.error("Search is empty!"):void t(i)},children:"Ok"})})]})]})},Et=n(156),Lt=n(174),Pt=Object(o.c)((function(e){var t=e.settings;return{darkMode:t.darkMode,language:t.language}}),(function(e){return Object(l.b)({setDarkMode:H,setLanguage:V},e)}))((function(e){return Object(r.jsxs)(rt.a,{children:[Object(r.jsxs)("h3",{children:[" ",$e[e.language].settings]}),Object(r.jsxs)(Me,{onSubmit:function(e){return e.preventDefault()},children:[Object(r.jsxs)(Et.a,{fullWidth:!0,children:[Object(r.jsx)(Lt.a,{id:"languageSelect",children:$e[e.language].lang}),Object(r.jsx)(Ct.a,{labelId:"languageSelect",color:"primary",fullWidth:!0,onChange:function(t){return e.setLanguage(t.target.value)},name:"filter",value:e.language,children:["en","es","pt"].map((function(e){return Object(r.jsx)(Ft.a,{value:e,children:e},e)}))})]}),Object(r.jsxs)(Et.a,{fullWidth:!0,style:{marginTop:"1.5em"},children:[Object(r.jsx)(Lt.a,{id:"darkModeSelect",children:"Dark Mode"}),Object(r.jsxs)(Ct.a,{id:"darkModeSelect",color:"primary",fullWidth:!0,onChange:function(t){return e.setDarkMode(t.target.value)},name:"filter",value:e.darkMode,children:[Object(r.jsx)(Ft.a,{value:1,children:"On"}),Object(r.jsx)(Ft.a,{value:0,children:"Off"})]})]})]})]})})),Dt=(n(115),Object(o.c)((function(e){var t=e.settings;return{language:t.language,darkMode:t.darkMode}}),(function(e){return Object(l.b)({},e)}))((function(e){var t=e.language,n=e.darkMode;return Object(r.jsxs)(ye,{children:[Object(r.jsx)(tt,{darkMode:n,language:t}),Object(r.jsx)(C.a,{autoClose:2400,closeOnClick:!0}),Object(r.jsx)("main",{children:Object(r.jsxs)($.c,{children:[Object(r.jsx)($.a,{exact:!0,path:"/home",children:Object(r.jsx)(Ye,{})}),Object(r.jsx)($.a,{exact:!0,path:"/about",children:Object(r.jsx)(Je,{})}),Object(r.jsx)($.a,{exact:!0,path:"/settings",children:Object(r.jsx)(Pt,{})}),Object(r.jsx)($.a,{exact:!0,path:"/recipes",children:Object(r.jsx)(et,{})}),Object(r.jsx)($.a,{children:Object(r.jsx)(ye,{children:"Page not found"})})]})})]})}))),Nt=(n(116),n(117),document.querySelector("#root"));Object(i.render)(Object(r.jsx)(o.a,{store:X,children:Object(r.jsx)(s.a,{history:q,children:Object(r.jsx)(Dt,{})})}),Nt)}},[[118,1,2]]]);
//# sourceMappingURL=main.c4a91a38.chunk.js.map
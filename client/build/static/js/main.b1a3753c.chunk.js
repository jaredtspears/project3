(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){},123:function(e,t,a){},125:function(e,t,a){},127:function(e,t,a){},129:function(e,t,a){},269:function(e,t,a){},271:function(e,t,a){},273:function(e,t,a){},275:function(e,t,a){},277:function(e,t,a){},280:function(e,t,a){},282:function(e,t,a){},285:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(82),c=a.n(r),o=(a(93),a(4)),i=a(5),s=a(7),m=a(6),u=a(8),d=a(288),p=a(287),E=a(286),h=(a(95),function(){return l.a.createElement("div",{className:"nav nav-tabs navContainer"},l.a.createElement("ul",{className:"nav nav-tabs"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(E.a,{to:"/",className:"/"===window.location.pathname?"nav-link active":"nav-link"},"Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(E.a,{to:"/profile",className:"/profile"===window.location.pathname?"nav-link active":"nav-link"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(E.a,{to:"/collectionsPg",className:"/collectionsPg"===window.location.pathname?"nav-link active":"nav-link"},"Collections")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(E.a,{to:"/aboutUs",className:"/aboutUs"===window.location.pathname?"nav-link active":"nav-link"},"About Us")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(E.a,{to:"/contact",className:"/contact"===window.location.pathname?"nav-link active":"nav-link"},"Contact"))))}),g=(a(99),a(50)),f=function(){console.log("logout"),sessionStorage.clear()},v=function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=function(e){console.log(e)};return l.a.createElement("div",null,l.a.createElement("div",{className:"card border-success mb-3 text-center"},l.a.createElement("div",{className:"card-header bg-transparent border-success"},l.a.createElement("h1",null,"Trophy Case")),l.a.createElement("div",{className:"card-body text-success"},l.a.createElement("h5",{className:"card-title"},"Who We Are:"),l.a.createElement("p",{className:"card-text"},' Our Telos is to compile user collections! We want your hobbies and pastimes to be conveniently accessible for you. That said, we pride ourselves in providing top-tier data storage and an inviting user experience that will display your "Trophy Case" of collections in all their glory!')),l.a.createElement("div",{className:"card-footer"},l.a.createElement(g.GoogleLogin,{className:"btn",clientId:"954580373008-teabf1ael8s16gqpriuf257i298gr2fv.apps.googleusercontent.com",onSuccess:e,onFailure:e,onClick:this.props.toggleLoggedIn,uxMode:"redirect",redirectUri:"https://tc-trophy-case.herokuapp.com/profile"}),l.a.createElement(g.GoogleLogout,{className:"btn",buttonText:"Logout",onLogoutSuccess:f}))))}}]),t}(n.Component),b=(a(101),function(){return l.a.createElement("footer",{className:"page-footer font-small blue pt-4"},l.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2018 Copyright TrophyCase"))});a(103);var N=function(){return l.a.createElement("div",{className:"carouselContainer"},l.a.createElement("div",{className:"row blog"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{id:"blogCarousel",className:"carousel slide","data-ride":"carousel"},l.a.createElement("ol",{className:"carousel-indicators"},l.a.createElement("li",{"data-target":"#blogCarousel","data-slide-to":"0",className:"active"}),l.a.createElement("li",{"data-target":"#blogCarousel","data-slide-to":"1"})),l.a.createElement("div",{className:"carousel-inner"},l.a.createElement("div",{className:"carousel-item active"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"carouselImg col-md-3"},l.a.createElement("img",{src:"https://www.denverpost.com/wp-content/uploads/2016/05/20100924__20100925_D12_FE25IOGARAGEp1.jpg",alt:"Coins"})),l.a.createElement("div",{className:"carouselImg col-md-3"},l.a.createElement("img",{src:"https://www.telegraph.co.uk/content/dam/technology/2017/12/08/f0carf_trans_NvBQzQNjv4Bqx5egiJ9MQyAqq6uO2mksLQE0DV1F1xkRVV3-RtCrx1o.jpg",alt:"Beanie Babies"})),l.a.createElement("div",{className:"carouselImg col-md-3"},l.a.createElement("img",{src:"https://p1.liveauctioneers.com/525/24890/9073696_1_x.jpg?version=1&width=512&format=pjpg&auto=webp&quality=50",alt:"Civil War Memorabilia"})),l.a.createElement("div",{className:"carouselImg col-md-3"},l.a.createElement("img",{src:"https://i2.wp.com/www.buffaloscoop.com/wp-content/uploads/2018/07/Sports-Cards.jpg?w=556",alt:"Sports Cards"})))),l.a.createElement("div",{className:"carousel-item"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("img",{src:"http://placehold.it/250x250",alt:"item1"})),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("img",{src:"http://placehold.it/250x250",alt:"item2"})),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("img",{src:"http://placehold.it/250x250",alt:"item3"})),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("img",{src:"http://placehold.it/250x250",alt:"item4"})))))))))};var y=function(e){return l.a.createElement("div",null,l.a.createElement(N,null),l.a.createElement(v,{toggleLoggedIn:e.toggleLoggedIn}),l.a.createElement(b,null))},C=a(21),w=a(12),x=a(10),j=a.n(x),k={createItem:function(e){j.a.post("/api/item",e)},getAllItems:function(){return j.a.get("/api/items")},getItemById:function(e){return j.a.get("/api/items/"+e)},updateItem:function(e,t){return j.a.put("/api/item/"+e,t)},deleteItem:function(e){return j.a.delete("/api/item"+e)},createCollection:function(e){return j.a.post("/api/collections",e)},getAllCollections:function(){return j.a.get("/api/collections")},getCollectionById:function(e){return j.a.get("/api/collections/"+e)},updateCollection:function(e,t){return j.a.put("/api/collections/"+e,t)},deleteCollection:function(e){return j.a.delete("/api/collections/"+e)},createUser:function(e){return j.a.post("/api/users",e)},getAllUsers:function(){return j.a.get("/api/users")},getUserById:function(e){return j.a.get("/api/users/"+e)},updateUser:function(e,t){return j.a.put("/api/users/"+e,t)},deleteUser:function(e){return j.a.delete("/api/users/"+e)}},O=w.b.div({enter:{y:0,opacity:1,delay:300,transition:{y:{type:"spring",stiffness:1200,damping:35},default:{duration:300}}},exit:{y:50,opacity:0,transition:{duration:150}}}),S=w.b.div({enter:{opacity:1},exit:{opacity:0}}),D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={isVisible:!1,case:[],itemName:"",user:"",itemDiscription:""},a.loadTrophyCase=function(){k.getAllCollections().then(function(e){return a.setState({case:e.data})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(C.a)({},n,l))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.itemName&&a.state.user&&k.saveCollection({itemName:a.state.itemName,user:a.state.user,itemDiscription:"",date:new Date(Date.now())}).then(function(e){return a.loadTrophyCase()}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.loadTrophyCase(),this.setState({isVisible:!this.state.isVisible})}},{key:"render",value:function(){var e=this.state.isVisible;return l.a.createElement(w.a,null,e&&[l.a.createElement(S,{key:"shade",className:"shade"}),l.a.createElement(O,{key:"modalz",className:"modalz"},l.a.createElement("p",null,"Discribe what you are adding:"),l.a.createElement("form",{action:"/"},l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text",id:"itemName"},"Item Name:")),l.a.createElement("input",{type:"text",className:"form-control","aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:this.state.itemName,onChange:this.handleInputChange,name:"itemName",placeholder:"Name of Item (required)"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"itemDiscription"},"Item Description(200 character limit): "),l.a.createElement("textarea",{className:"form-control",id:"itemDiscription",rows:"3",value:this.state.itemDiscription,onChange:this.handleInputChange,name:"story",placeholder:"Tell us about the history of this item (required)"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"collectionRoute"},"Which Collection:"),l.a.createElement("select",{className:"form-control",id:"collectionRoute"},l.a.createElement("option",null," ",this.state.case[1]," "),l.a.createElement("option",null,"collection B "),l.a.createElement("option",null,"collection C "))),l.a.createElement("hr",null),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleFormControlFile1"},"Import file:"),l.a.createElement("input",{type:"file",className:"form-control-file",id:"file"})),l.a.createElement("button",{type:"submit",className:"btn btn-inverted",to:"/collectionsPg",onClick:this.handleFormSubmit},"Update")))])}}]),t}(l.a.Component),I=(a(123),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={add:!1},a.modalRendering=function(){if(a.state.add)return l.a.createElement(D,null)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return e.setState({add:!0})}},"Add"),this.modalRendering())}}]),t}(n.Component));a(125);function _(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function B(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function A(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var F=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={googleId:"Dantesting",userData:{}},a.loadTrophyCase=function(){k.getUserById(a.state.googleId).then(function(e){return a.setState({userData:e.data})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(C.a)({},n,l))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.name&&a.state.user&&k.saveCollection({name:a.state.name,story:a.state.story,user:a.state.user,items:[],date:new Date(Date.now())}).then(function(e){return a.loadTrophyCase()}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.loadTrophyCase()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("form",null,l.a.createElement(_,{value:this.state.name,onChange:this.handleInputChange,name:"name",placeholder:"Collection Name (required)"}),l.a.createElement(_,{value:this.state.user,onChange:this.handleInputChange,name:"user",placeholder:"user (required)"}),l.a.createElement(B,{value:this.state.story,onChange:this.handleInputChange,name:"story",placeholder:"What is it (required)"}),l.a.createElement(A,{disabled:!(this.state.user&&this.state.name),onClick:this.handleFormSubmit},"Submit")),l.a.createElement("br",null)),l.a.createElement("hr",null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"collectionContainer"},l.a.createElement("table",{className:"table collectionContainer"},l.a.createElement("thead",{className:"thead-light"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"User Collections"))),this.state.case.length?l.a.createElement("tbody",null,this.state.case.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("div",{key:e._id},l.a.createElement("a",{href:"/collection/"+e._id},l.a.createElement("strong",null,e.name," Shelf")))),l.a.createElement("td",null,"added item will go here"),l.a.createElement("td",null,"added item will go here"),l.a.createElement("td",null,"added item will go here"),l.a.createElement("td",null,"added item will go here"))})):l.a.createElement("tbody",null,"No Results to Display ")))),l.a.createElement(I,null),l.a.createElement(b,null))}}]),t}(n.Component),T=(a(127),w.b.div({enter:{y:0,opacity:1,delay:300,transition:{y:{type:"spring",stiffness:1200,damping:35},default:{duration:300}}},exit:{y:50,opacity:0,transition:{duration:150}}})),V=w.b.div({enter:{opacity:1},exit:{opacity:0}}),L=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={isVisible:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({isVisible:!this.state.isVisible})}},{key:"render",value:function(){var e=this.state.isVisible;return l.a.createElement(w.a,null,e&&[l.a.createElement(V,{key:"shade",className:"shade"}),l.a.createElement(T,{key:"modalz",className:"modalz"},l.a.createElement("p",null,"Profile Settings"),l.a.createElement("form",{action:"/"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"New Email address:"),l.a.createElement("input",{type:"email",className:"form-control",id:"newEmail"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"pwd"},"New Password:"),l.a.createElement("input",{type:"password",className:"form-control",id:"newPwd"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"collectorStatus"},"Collector Status:"),l.a.createElement("select",{className:"form-control",id:"exampleFormControlSelect1"},l.a.createElement("option",null," Vanilla Collector"),l.a.createElement("option",null,"Horder Wants to be Organized"),l.a.createElement("option",null,"Family History Collector"),l.a.createElement("option",null,"Collector with Bragging Rights"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"bio"},"Your Bio: "),l.a.createElement("textarea",{className:"form-control",id:"bio",rows:"3"})),l.a.createElement("button",{type:"submit",className:"btn btn-default"},"Update Profile")))])}}]),t}(l.a.Component),P=w.b.div({enter:{y:0,opacity:1,delay:300,transition:{y:{type:"spring",stiffness:1200,damping:35},default:{duration:300}}},exit:{y:50,opacity:0,transition:{duration:150}}}),M=w.b.div({enter:{opacity:1},exit:{opacity:0}}),R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={isVisible:!1},a.loadTrophyCase=function(){k.getAllCollections().then(function(e){return a.setState({case:e.data})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(C.a)({},n,l))},a.handleFormSubmit=function(e){e.preventDefault(),console.log("submit request recieved"),a.state.name&&k.saveCollection({name:a.state.name,story:a.state.story,user:a.state.user,items:[],date:new Date(Date.now())}).then(function(e){console.log(e),a.loadTrophyCase()}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({isVisible:!this.state.isVisible})}},{key:"render",value:function(){var e=this.state.isVisible;return l.a.createElement(w.a,null,e&&[l.a.createElement(M,{key:"shade",className:"shade"}),l.a.createElement(P,{key:"modalz",className:"modalz"},l.a.createElement("p",null,"Insert collection name and a short story explaining the items therin:"),l.a.createElement("form",{action:"/collectionsPg"},l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text",id:"collectionName"},"Name:")),l.a.createElement("input",{type:"text",className:"form-control","aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:this.state.name,onChange:this.handleInputChange,name:"name",placeholder:"Collection Name (required)"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"collectionStory"},"Collection's Story: "),l.a.createElement("textarea",{className:"form-control",id:"collectionStory",rows:"3"})),l.a.createElement("button",{type:"submit",className:"btn btn-default",onClick:this.handleFormSubmit},"Compile Collection")))])}}]),t}(l.a.Component),G=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={profileSetting:!1,collectionModal:!1},a.modalRendering=function(){return a.state.profileSetting?l.a.createElement(L,null):a.state.collectionModal?l.a.createElement(R,null):void 0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this,a=(new Date).getHours();return e=a<12?"morning":a>=12&&a<17?"afternoon":"evening",l.a.createElement("div",{className:"avatarCard"},l.a.createElement("div",null,l.a.createElement("img",{className:"card-img-top",src:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/330px-Spongebob-squarepants.svg.png",alt:"Card cap"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Good ","".concat(e),", ","".concat("SpongeBob"),"!"),l.a.createElement("p",{className:"card-text"}),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t.setState({profileSetting:!0,collectionModal:!1})}},"Profile Settings"))),this.modalRendering())}}]),t}(n.Component),U=(a(129),a(83)),q={labels:["Shoe Collection","Whiskey Collection","Art Collection","Hat Collection","DVD Collection","Spice Rack Collection","Gaming Collection"],datasets:[{label:"Year 1 Trophy Case Items Added",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"Year 2 Trophy Case Items Added",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Your Collections Data:"),l.a.createElement(U.a,{data:q}))}}]),t}(n.Component);var H=function(){return l.a.createElement("div",{className:"profileCard"},l.a.createElement("div",{className:"card-header"},l.a.createElement("strong",null,"Profile Overview")),l.a.createElement("div",{className:"card-body"},l.a.createElement(W,null)))},z=(a(269),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={collectionModal:!1},a.modalRendering=function(){if(a.state.collectionModal)return l.a.createElement(R,null)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"profileCard userCollections"},l.a.createElement("div",{className:"card-header"},l.a.createElement("strong",null,"Your Collections"),l.a.createElement("button",{className:"collection-btn",onClick:function(){return e.setState({collectionModal:!0})}},"+ New Collection")),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Light card title"),l.a.createElement("p",{className:"card-text"},"Collections Here")),this.modalRendering())}}]),t}(n.Component));a(271);var Y=function(){return l.a.createElement("div",{className:"mainContainer"},l.a.createElement("div",{className:"row"},l.a.createElement(H,null),l.a.createElement(G,null)),l.a.createElement(z,null))},J=(a(273),a(85)),Q=a.n(J),Z=(a(275),a(51)),$=a.n(Z),K=a(52),X=a.n(K),ee=a(53),te=a.n(ee),ae=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).componentDidMount=function(){a.rellax=new Q.a(".rellax")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"rellax SVG","data-rellax-speed":"-2","data-rellax-percentage":".1"},l.a.createElement("img",{src:$.a,alt:"trophy1"}))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"rellax SVG"},l.a.createElement("img",{src:te.a,alt:"trophy3"}))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"rellax SVG","data-rellax-speed":"-5","data-rellax-percentage":".21"},l.a.createElement("img",{src:X.a,alt:"trophy2"}))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"rellax SVG","data-rellax-speed":"-9","data-rellax-percentage":".5"},l.a.createElement("img",{src:$.a,alt:"trophy1"}))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"rellax SVG","data-rellax-speed":"-4","data-rellax-percentage":"0.2"},l.a.createElement("img",{src:te.a,alt:"trophy1"}))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"rellax SVG","data-rellax-speed":"-10","data-rellax-percentage":".5"},l.a.createElement("img",{src:X.a,alt:"trophy2"})))))}}]),t}(n.Component);var ne=function(){return l.a.createElement("div",{className:"mainContainer"},l.a.createElement(ae,{className:"SVG"}),l.a.createElement(Y,{className:"profile"}),l.a.createElement("br",null),l.a.createElement(b,null))};a(277);var le=function(){return l.a.createElement("section",{className:"team"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-10 col-md-offset-1"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("h1",{className:"description"},l.a.createElement("strong",null,"MEET THE ALLSTARS")),l.a.createElement("h4",{className:"aboutTitles"},"Front End Developers - Website Design and Effects"),l.a.createElement("div",{className:"row pt-md"},l.a.createElement("br",null),l.a.createElement("div",{className:"col-lg-3 col-md-3 col-sm-4 col-xs-12 profile1"},l.a.createElement("div",{className:"img-box"},l.a.createElement("img",{src:"https://avatars3.githubusercontent.com/u/25070320?s=460&v=4",className:"img-responsive aboutPic",alt:"JB"}),l.a.createElement("ul",{className:"overlay"},l.a.createElement("a",{href:"https://github.com/CodeBreaker1023"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-github"}))),l.a.createElement("a",{href:"https://www.linkedin.com/in/jeremy-brown-26b2754b/"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-linkedin"}))))),l.a.createElement("h1",{className:"name"},"Jeremy Brown"),l.a.createElement("p",null,"Don't ask him about Bitcoin")),l.a.createElement("div",{className:"col-lg-3 col-md-3 col-sm-4 col-xs-12 profile2"},l.a.createElement("div",{className:"img-box"},l.a.createElement("img",{src:"https://avatars0.githubusercontent.com/u/41157206?s=460&v=4",className:"img-responsive aboutPic",alt:"JS"}),l.a.createElement("ul",{className:"overlay"},l.a.createElement("a",{href:"https://github.com/jaredtspears"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-github"}))),l.a.createElement("a",{href:"https://www.linkedin.com/in/jared-spears-ha1f-deaf"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-linkedin"}))))),l.a.createElement("h1",{className:"name"},"Jared Spears"),l.a.createElement("p",null,"DBZ anyone?"))),l.a.createElement("h4",{className:"aboutTitles"},"Back End - Website Functionality and Databases"),l.a.createElement("div",{className:"row pt-md"},l.a.createElement("div",{className:"col-lg-3 col-md-3 col-sm-4 col-xs-12 profile1"},l.a.createElement("div",{className:"img-box"},l.a.createElement("img",{src:"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10247812_10202330084999010_4361321945622106678_n.jpg?_nc_cat=103&_nc_ht=scontent-iad3-1.xx&oh=c5b7b4aa92574f546afa3f2b02e1b749&oe=5CCE6DDF",className:"img-responsive aboutPic",alt:"TL"}),l.a.createElement("ul",{className:"overlay"},l.a.createElement("a",{href:"https://github.com/tblane88"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-github"}))),l.a.createElement("a",{href:"https://www.linkedin.com/in/taylor-lane-21425954/"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-linkedin"}))))),l.a.createElement("h1",{className:"name"},"Taylor Lane"),l.a.createElement("p",null,"He'll talk your ear off")),l.a.createElement("div",{className:"col-lg-3 col-md-3 col-sm-4 col-xs-12 profile2"},l.a.createElement("div",{className:"img-box"},l.a.createElement("img",{src:"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10394615_10205475263540302_3209673496825721256_n.jpg?_nc_cat=111&_nc_ht=scontent-iad3-1.xx&oh=a9fbb4dad3d49d8edffaa392fc43c5e8&oe=5CD79E2C",className:"img-responsive aboutPic",alt:"DD"}),l.a.createElement("ul",{className:"overlay"},l.a.createElement("a",{href:"https://github.com/diloretodg"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-github"}))),l.a.createElement("a",{href:"https://www.linkedin.com/in/daniel-diloreto-a627ab167/"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-linkedin"}))))),l.a.createElement("h1",{className:"name"},"Dan DiLoreto"),l.a.createElement("p",null,"Blacks out after two beers"))),l.a.createElement("h4",{className:"aboutTitles"},"Project Manager/Floater"),l.a.createElement("div",{className:"row pt-md"},l.a.createElement("div",{className:"col-lg-3 col-md-3 col-sm-4 col-xs-12 profile1"},l.a.createElement("div",{className:"img-box"},l.a.createElement("img",{src:"https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/49077849_10157072338089515_6324799866933346304_n.jpg?_nc_cat=103&_nc_ht=scontent-atl3-1.xx&oh=e8f6332efb26914d2e6ed2fdfbdd6280&oe=5C8D6AE3",className:"img-responsive aboutPic",alt:"PR"}),l.a.createElement("ul",{className:"overlay"},l.a.createElement("a",{href:"https://github.com/PReijerkerk"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-github"}))),l.a.createElement("a",{href:"https://www.linkedin.com/in/peter-reijerkerk-13a51a102/"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-linkedin"}))))),l.a.createElement("h2",{className:"name"},"Peter Reijerkerk"),l.a.createElement("p",null,"World's Okayest Dad"))))))))};var re=function(){return l.a.createElement("div",null,l.a.createElement(le,null))};a(280);var ce=function(){return l.a.createElement("div",{className:"container contact-form"},l.a.createElement("div",{className:"contact-image"},l.a.createElement("img",{src:"http://corrupteddevelopment.com/wp-content/uploads/2011/10/3d-email-icon-e1318315864246.jpg",alt:"rocket_contact"})),l.a.createElement("form",{method:"post"},l.a.createElement("h3",null,l.a.createElement("strong",null,"Drop Us a Message")),l.a.createElement("h4",null,"We would love to hear from you"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"txtName",className:"form-control",placeholder:"Your Name *",value:""})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"txtEmail",className:"form-control",placeholder:"Your Email *",value:""})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"txtPhone",className:"form-control",placeholder:"Subject",value:""})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",name:"btnSubmit",className:"btnContact",value:"Send Message"}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{name:"txtMsg",className:"form-control",id:"textarea",placeholder:"Your Message *"}))))))};var oe=function(){return l.a.createElement("div",null,l.a.createElement(ce,null),l.a.createElement(b,null))},ie=(a(282),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).loggedInRendering=function(){if(a.state.isLoggedIn)return l.a.createElement(h,null)},a.toggleLoggedIn=function(){a.setState({isLoggedIn:!a.state.isLoggedIn})},a.state={isLoggedIn:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(d.a,null,l.a.createElement("div",{className:"mainContainer"},this.loggedInRendering(),l.a.createElement(p.a,{exact:!0,path:"/",render:function(t){return l.a.createElement(y,Object.assign({},t,{toggleLoggedIn:e.toggleLoggedIn}))}}),l.a.createElement(p.a,{exact:!0,path:"/profile",component:ne}),l.a.createElement(p.a,{exact:!0,path:"/collectionsPg",component:F}),l.a.createElement(p.a,{exact:!0,path:"/aboutUs",component:re}),l.a.createElement(p.a,{exact:!0,path:"/contact",component:oe})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},51:function(e,t,a){e.exports=a.p+"static/media/trophy1.54725220.svg"},52:function(e,t,a){e.exports=a.p+"static/media/trophy2.213d77df.svg"},53:function(e,t,a){e.exports=a.p+"static/media/trophy3.b5b5f521.svg"},88:function(e,t,a){e.exports=a(285)},93:function(e,t,a){},95:function(e,t,a){},99:function(e,t,a){}},[[88,2,1]]]);
//# sourceMappingURL=main.b1a3753c.chunk.js.map
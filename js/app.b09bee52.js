(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-03c0e019":"10e791d2","chunk-16026a5c":"09ec817a","chunk-377f793f":"e42291f8","chunk-2d0b6959":"8b78a815","chunk-2d238097":"d006f3a5","chunk-77ac3333":"dfa148f9"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-03c0e019":1,"chunk-16026a5c":1,"chunk-377f793f":1,"chunk-77ac3333":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-03c0e019":"2df2f13f","chunk-16026a5c":"1d3e5175","chunk-377f793f":"c4db423b","chunk-2d0b6959":"31d6cfe0","chunk-2d238097":"31d6cfe0","chunk-77ac3333":"8edddbe4"}[t]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[t],p.parentNode.removeChild(p),n(i)},p.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/DevWebEComerce/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=(n("d3b7"),n("bc3a")),a=n.n(o),i={},s=a.a.create(i);s.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),s.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=s,window.axios=s,Object.defineProperties(t.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},r["default"].use(Plugin);Plugin;var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("notifications",{attrs:{group:"addToCart",position:"bottom right"}}),n("notifications",{attrs:{group:"UserSave",position:"top center"}}),n("v-app-bar",{attrs:{app:"",color:"deep-purple",dark:""}},[n("v-toolbar-title",[n("v-btn",{attrs:{text:"","x-large":""},on:{click:function(e){return t.$router.push({name:"home"})}}},[t._v("SHOPLATE")])],1),n("v-spacer"),n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":200,"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{small:"",text:""}},r),[n("v-icon",{attrs:{small:""}},[t._v("mdi-account")]),t._v(" "+t._s(t.isLogged?"olá "+t.userName:"faça seu login")+" ")],1)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t.isLogged?n("logged-menu",{on:{"close-menu":function(e){t.menu=!1}}}):n("login-menu",{on:{"close-menu":function(e){t.menu=!1}}})],1),n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":400,"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-badge",{attrs:{color:"green",left:"",overlap:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t.shoppingCartCount>0?n("span",[t._v(t._s(t.shoppingCartCount))]):t._e()]},proxy:!0}],null,!0)},[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.cartMenu=!0}}},r),[n("v-icon",[t._v("mdi-cart")])],1)],1)]}}]),model:{value:t.cartMenu,callback:function(e){t.cartMenu=e},expression:"cartMenu"}},[n("cart-menu",{on:{"close-menu":function(e){t.cartMenu=!1}}})],1)],1),n("v-content",[n("router-view")],1)],1)},u=[],l=(n("b0c0"),n("ac1f"),n("1276"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-container",[n("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.userForm.username,callback:function(e){t.$set(t.userForm,"username",e)},expression:"userForm.username"}}),n("v-text-field",{attrs:{"append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",rules:[function(t){return!!t||"Campo requerido"}],type:t.showPassword?"text":"password",label:"Password"},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.userForm.password,callback:function(e){t.$set(t.userForm,"password",e)},expression:"userForm.password"}}),n("v-btn",{attrs:{color:"primary",small:"",text:""},on:{click:function(e){return t.$router.push({name:"registerUser"})}}},[t._v("Cliente novo? Cadastrar")])],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{dark:t.valid,disabled:!t.valid,color:"teal"},on:{click:function(e){return t.login()}}},[t._v("Entrar")]),n("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.closeMenu()}}},[t._v("Cancelar")])],1)],1)}),d=[],p={name:"LoginMenu",data:function(){return{emailRules:[function(t){return!!t||"E-mail é requerido"},function(t){return/.+@.+/.test(t)||"E-mail deve ser valido"}],valid:!1,userForm:{username:"",password:""},showPassword:!1}},methods:{closeMenu:function(){this.$emit("close-menu")},login:function(){this.$store.dispatch("loginUser",this.userForm),this.closeMenu()}}},m=p,f=n("2877"),h=n("6544"),v=n.n(h),g=n("8336"),b=n("b0af"),C=n("99d9"),k=n("a523"),_=n("4bd4"),y=n("2fa4"),w=n("8654"),I=Object(f["a"])(m,l,d,!1,null,null,null),x=I.exports;v()(I,{VBtn:g["a"],VCard:b["a"],VCardActions:C["a"],VContainer:k["a"],VForm:_["a"],VSpacer:y["a"],VTextField:w["a"]});var V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-dialog",{attrs:{"max-width":"300",persistent:""},model:{value:t.myProducts,callback:function(e){t.myProducts=e},expression:"myProducts"}},[n("v-card",[n("v-toolbar",{staticClass:"title",attrs:{color:"purple darken-1",dark:""}},[n("v-toolbar-title",[t._v("Olá "+t._s(t.userInfo.name.split(" ")[0]))])],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"error"},on:{click:function(e){t.myProducts=!1}}},[t._v("fechar")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"300",persistent:""},model:{value:t.openContact,callback:function(e){t.openContact=e},expression:"openContact"}},[n("v-card",[n("v-toolbar",{staticClass:"title",attrs:{color:"purple darken-1",dark:""}},[n("v-toolbar-title",[t._v("Entre em contato.")])],1),n("v-container",[n("v-text-field",{attrs:{label:"Titulo"}}),n("v-textarea",{attrs:{label:"Mensagem",solo:""}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.openContact=!1}}},[t._v("enviar")]),n("v-btn",{attrs:{color:"error"},on:{click:function(e){t.openContact=!1}}},[t._v("fechar")])],1)],1)],1),n("v-card",[n("v-toolbar",{attrs:{color:"green darken-1",dark:""}},[n("v-toolbar-title",[t._v("Olá "+t._s(t.userInfo.name.split(" ")[0]))])],1),n("v-container",[n("v-row",{staticClass:"pa-2"},[n("v-btn",{attrs:{block:"",color:"purple lighten-3"},on:{click:function(e){return t.$router.push({name:"editUser"})}}},[t._v("Editar meu cadastro")])],1),n("v-row",{staticClass:"pa-2"},[n("v-btn",{attrs:{block:"",color:"purple lighten-3"},on:{click:t.openMyProducts}},[t._v("Compras efetivadas")])],1),n("v-row",{staticClass:"pa-2"},[n("v-btn",{attrs:{block:"",color:"purple lighten-3"},on:{click:function(e){t.openContact=!0}}},[t._v("Contato")])],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.logout()}}},[t._v("Sair")])],1)],1)],1)},L=[],P={name:"LoginMenu",data:function(){return{myProducts:!1,openContact:!1}},methods:{logout:function(){this.$store.dispatch("logout"),this.$emit("close-menu")},openMyProducts:function(){this.myProducts=!0,this.getProductList()},getProductList:function(){this.axios.get("https://shielded-oasis-78348.herokuapp.com/public/api/purchase/clients/id=".concat(this.userInfo.id)).then((function(t){console.log(t.data)}))}},computed:{userInfo:function(){return this.$store.state.userInfo},ordersList:function(){return["compra1","compra2"]}}},S=P,T=n("169a"),$=n("0fd9"),M=n("a844"),E=n("71d9"),O=n("2a7f"),j=Object(f["a"])(S,V,L,!1,null,null,null),F=j.exports;v()(j,{VBtn:g["a"],VCard:b["a"],VCardActions:C["a"],VContainer:k["a"],VDialog:T["a"],VRow:$["a"],VSpacer:y["a"],VTextField:w["a"],VTextarea:M["a"],VToolbar:E["a"],VToolbarTitle:O["a"]});var U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-toolbar",{attrs:{color:"green darken-1",dark:""}},[n("v-toolbar-title",[n("v-icon",[t._v("mdi-cart")]),t._v(" Carrinho ")],1)],1),n("cart-list-itens"),n("v-card-actions",[n("v-btn",{attrs:{disabled:t.shoppingCart.length<1,block:"",color:"primary"},on:{click:t.goToFinish}},[t._v(" Fechar Pedido ")])],1)],1)},A=[],q=n("cb71"),Q={name:"CartMenu",components:{CartListItens:q["a"]},data:function(){return{}},methods:{goToFinish:function(){this.$emit("close-menu"),this.$router.push({name:"orderFinish"})}},computed:{shoppingCart:function(){return this.$store.state.shoppingCart}}},B=Q,N=n("132d"),R=Object(f["a"])(B,U,A,!1,null,null,null),D=R.exports;v()(R,{VBtn:g["a"],VCard:b["a"],VCardActions:C["a"],VIcon:N["a"],VToolbar:E["a"],VToolbarTitle:O["a"]});var H={name:"App",components:{LoginMenu:x,LoggedMenu:F,CartMenu:D},data:function(){return{menu:!1,cartMenu:!1}},computed:{isLogged:function(){return this.$store.state.isLogged},userName:function(){return this.$store.state.userInfo.name.split(" ")[0]},shoppingCartCount:function(){return this.$store.state.shoppingCart.length}}},J=H,K=(n("928e"),n("7496")),W=n("40dc"),z=n("4ca6"),G=n("a75b"),X=n("e449"),Y=Object(f["a"])(J,c,u,!1,null,"0c2a1d2d",null),Z=Y.exports;v()(Y,{VApp:K["a"],VAppBar:W["a"],VBadge:z["a"],VBtn:g["a"],VContent:G["a"],VIcon:N["a"],VMenu:X["a"],VSpacer:y["a"],VToolbarTitle:O["a"]});var tt=n("8c4f");r["default"].use(tt["a"]);var et=[{path:"/",alias:"/home",name:"home",component:function(){return n.e("chunk-77ac3333").then(n.bind(null,"bb51"))}},{path:"/registerUser",alias:"/registerUser",name:"registerUser",component:function(){return Promise.all([n.e("chunk-377f793f"),n.e("chunk-2d0b6959")]).then(n.bind(null,"1e7f"))}},{path:"/editUser",alias:"/editUser",name:"editUser",component:function(){return Promise.all([n.e("chunk-377f793f"),n.e("chunk-2d238097")]).then(n.bind(null,"fe57"))}},{path:"/orderFinish",name:"orderFinish",component:function(){return n.e("chunk-16026a5c").then(n.bind(null,"59f2"))}},{path:"/administration",name:"administration",component:function(){return n.e("chunk-03c0e019").then(n.bind(null,"e86e"))}}],nt=new tt["a"]({routes:et}),rt=nt,ot=(n("99af"),n("4de4"),n("7db0"),n("96cf"),n("284c")),at=n("2f62"),it=n("51f5"),st=n.n(it),ct=n("d9bd");r["default"].use(at["a"]);var ut=new at["a"].Store({state:{isLogged:!1,userInfo:{name:"",email:"",phoneNumber:"",cpf:"",address:{cep:"",neighborhood:"",city:"",street:"",uf:"",complement:""}},shoppingCart:[]},mutations:{changeIsLogged:function(t,e){t.isLogged=e},changeUserInfo:function(t,e){t.userInfo=e},addToShoppingCartList:function(t,e){t.shoppingCart=[].concat(Object(ot["a"])(t.shoppingCart),[e])},addQtdShoppingCartItem:function(t,e){t.shoppingCart[e].qtd++},removeQtdShoppingCartItem:function(t,e){t.shoppingCart[e].qtd--},removeItemFromListShoppingCart:function(t,e){t.shoppingCart=t.shoppingCart.filter((function(t,n){return n!==e}))}},actions:{changeIsLogged:function(t,e){t.commit("changeIsLogged",e)},changeUserInfo:function(t,e){t.commit("changeUserInfo",e)},loginUser:function(t,e){var n,r,o=this;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.username,r=e.password,n&&r){t.next=4;break}return t.next=4,regeneratorRuntime.awrap(Promise.reject(new Error("usuário ou senha incorretos.")));case 4:return t.next=6,regeneratorRuntime.awrap(a.a.post("https://shielded-oasis-78348.herokuapp.com/public/api/clients/login",{email:n,password:r}).then((function(t){if(200===t.data.data.code){var e=t.data.data.user;o.dispatch("changeUserInfo",{id:e.id,name:e.nome,email:e.email,phoneNumber:e.phone,cpf:e.cpf,address:{cep:e.cep,neighborhood:"",city:"",street:"",uf:"",complement:e.adress_complement}}),o.dispatch("changeIsLogged",!0)}})).catch((function(){return Object(ct["b"])("erro no login")})));case 6:case"end":return t.stop()}}))},addToShoppingCartList:function(t,e){if(!t.state.shoppingCart.find((function(t){return t.item.id===e.item.id}))){var n={qtd:e.qtd,item:e.item};t.commit("addToShoppingCartList",n)}},addQtdShoppingCartItem:function(t,e){var n=st()(t.state.shoppingCart,(function(t){return t.item.id===e}));-1!==n&&t.commit("addQtdShoppingCartItem",n)},removeQtdShoppingCartItem:function(t,e){var n=st()(t.state.shoppingCart,(function(t){return t.item.id===e}));-1!==n&&(t.state.shoppingCart[n].qtd<=1?t.commit("removeItemFromListShoppingCart",n):t.commit("removeQtdShoppingCartItem",n))},logout:function(t){t.commit("changeIsLogged",!1),t.commit("changeUserInfo",{name:"",email:"",phoneNumber:"",address:{cep:"",neighborhood:"",city:"",street:"",uf:"",complement:""}})}}}),lt=n("f309");r["default"].use(lt["a"]);var dt=new lt["a"]({}),pt=n("ee98"),mt=n.n(pt);r["default"].use(mt.a),r["default"].config.productionTip=!1,new r["default"]({router:rt,store:ut,vuetify:dt,render:function(t){return t(Z)}}).$mount("#app")},"928e":function(t,e,n){"use strict";var r=n("da02"),o=n.n(r);o.a},cb71:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{attrs:{subheader:"","two-line":"",color:"grey lighten-2"}},t._l(t.shoppingCart,(function(e,r){return n("v-list-item",{key:r},[n("v-list-item-avatar",[n("v-img",{attrs:{src:e.item.img}})],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.item.title))]),n("v-list-item-subtitle",[t._v(t._s(e.item.description))])],1),n("v-list-item-action",{staticStyle:{display:"inline-block"}},[n("v-btn",{attrs:{icon:"",small:""},on:{click:function(n){return t.reduceQtdInItem(e.item.id)}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-minus")])],1),t._v(" "+t._s(e.qtd||"")+" "),n("v-btn",{attrs:{icon:"",small:""},on:{click:function(n){return t.addQtdInItem(e.item.id)}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-plus")])],1)],1)],1)})),1)},o=[],a={name:"CartMenu",data:function(){return{}},computed:{shoppingCart:function(){return this.$store.state.shoppingCart}},methods:{addQtdInItem:function(t){this.$store.dispatch("addQtdShoppingCartItem",t)},reduceQtdInItem:function(t){this.$store.dispatch("removeQtdShoppingCartItem",t)}}},i=a,s=n("2877"),c=n("6544"),u=n.n(c),l=n("8336"),d=n("132d"),p=n("adda"),m=n("8860"),f=n("da13"),h=n("1800"),v=n("8270"),g=n("5d23"),b=Object(s["a"])(i,r,o,!1,null,"7274964f",null);e["a"]=b.exports;u()(b,{VBtn:l["a"],VIcon:d["a"],VImg:p["a"],VList:m["a"],VListItem:f["a"],VListItemAction:h["a"],VListItemAvatar:v["a"],VListItemContent:g["a"],VListItemSubtitle:g["b"],VListItemTitle:g["c"]})},da02:function(t,e,n){}});
//# sourceMappingURL=app.b09bee52.js.map
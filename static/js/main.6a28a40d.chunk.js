(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{2:function(e,t,r){e.exports={carts:"App_carts__306Gh",content:"App_content__1TyVD",contentInner:"App_contentInner__1ICl3",searchBlock:"App_searchBlock__bWZbx",searchButton:"App_searchButton__3tnNx",itemsEmpty:"App_itemsEmpty__X7huz",itemsTitle:"App_itemsTitle__3mGd8",itemsText:"App_itemsText__3QxfC",cartEmptyButton:"App_cartEmptyButton__1De_H"}},24:function(e,t,r){e.exports={card:"Card_card__XxX1y",favourite:"Card_favourite__2rz0G"}},41:function(e,t,r){},43:function(e,t,r){},5:function(e,t,r){e.exports={overlay:"Drawer_overlay__1tI1H",drawer:"Drawer_drawer__3k9li",cartTop:"Drawer_cartTop__1J12C",cartItems:"Drawer_cartItems__3K_Y9",cartItem:"Drawer_cartItem__OI5EJ",cartEmptyTop:"Drawer_cartEmptyTop__1gaq_",cartEmptyTitle:"Drawer_cartEmptyTitle__uUBP1",cartEmptyText:"Drawer_cartEmptyText__2AdyR",cartEmptyButton:"Drawer_cartEmptyButton__3Niht",overlayVisible:"Drawer_overlayVisible__BIe7Z",removeBtn:"Drawer_removeBtn__2lWnE",cartTotalBlock:"Drawer_cartTotalBlock__3nj4T",cartTotalButton:"Drawer_cartTotalButton__25Z7Q",orderButton:"Drawer_orderButton__3IxBf"}},72:function(e,t,r){"use strict";r.r(t);var a=r(1),c=r.n(a),n=r(33),s=r.n(n),i=(r(41),r(12)),o=r(9),l=r.n(o),d=r(14),b=r(6),j=(r(43),r(11)),u=Object(a.createContext)({}),m=r(0),p=function(e){var t=Object(a.useContext)(u).totalPrice;return Object(m.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(m.jsx)(j.b,{to:"/",children:Object(m.jsxs)("div",{className:"d-flex align-center cu-p",children:[Object(m.jsx)("img",{width:40,height:40,src:"img/logo.png",alt:"logo"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{className:"text-uppercase",children:"React Sneakers"}),Object(m.jsx)("p",{children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(m.jsxs)("ul",{className:"d-flex",children:[Object(m.jsxs)("li",{className:"mr-30 cu-p",onClick:e.openCart,children:[Object(m.jsx)("img",{width:18,height:17,src:"img/cart.svg",alt:"cart"}),Object(m.jsxs)("span",{children:[t," \u0440\u0443\u0431."]})]}),Object(m.jsx)(j.b,{to:"/favourites",children:Object(m.jsx)("li",{className:"mr-15",children:Object(m.jsx)("img",{width:20,height:20,src:"img/likes.svg",alt:"favourites"})})}),Object(m.jsx)(j.b,{to:"/orders",children:Object(m.jsx)("li",{children:Object(m.jsx)("img",{width:20,height:20,src:"img/me.svg",alt:"me"})})})]})]})},h=r(5),x=r.n(h),O=function(e){var t=e.imageSrc,r=e.alt,c=e.title,n=e.price,s=e.id,i=Object(a.useContext)(u).onDeleteFromCart;return Object(m.jsxs)("div",{className:x.a.cartItem+" d-flex align-center pt-20 pb-30",children:[Object(m.jsx)("img",{className:"mr-20 ml-20",width:70,src:t,alt:r}),Object(m.jsxs)("div",{className:"mr-20",children:[Object(m.jsx)("p",{className:"mb-5",children:c}),Object(m.jsxs)("b",{children:[n," \u0440\u0443\u0431."]})]}),Object(m.jsx)("img",{id:s,onClick:function(e){return i(s)},className:x.a.removeBtn+" mt-10",src:"img/btn-removed.svg",alt:""})]})},f=function(e){var t=e.title,r=e.text,c=e.image,n=e.manageOrders,s=Object(a.useContext)(u).setIsCartOpened;return Object(m.jsxs)("div",{className:x.a.cartEmptyTop,children:[Object(m.jsx)("div",{children:Object(m.jsxs)("h2",{className:"d-flex justify-between mb-30 align-center",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Object(m.jsx)("img",{onClick:function(){return s(!1)},className:x.a.removeBtn+" mt-10",src:"img/btn-removed.svg",alt:""})]})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:c,alt:"empty!"}),Object(m.jsx)("div",{className:x.a.cartEmptyTitle,children:t}),Object(m.jsx)("div",{className:x.a.cartEmptyText,children:r}),Object(m.jsxs)("button",{onClick:function(){return n()},className:x.a.cartEmptyButton+" mt-25",children:[Object(m.jsx)("img",{src:"img/cart-total-button.svg",alt:"Go back"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})]})},v=r(4),g=r.n(v),k=function(e){var t=e.opened,r=Object(a.useContext)(u),c=r.sneakersCartItems,n=r.totalPrice,s=r.setIsCartOpened,i=r.setSneakersCartItems,o=r.onDeleteWholeCart,j=r.updateSneakers,p=c.map((function(e){return Object(m.jsx)(O,{imageSrc:e.imageSrc,alt:e.alt,title:e.title,price:e.price,id:e.itemId},e.id)})),h=Object(a.useState)(!1),v=Object(b.a)(h,2),k=v[0],_=v[1],N=Object(a.useState)(),y=Object(b.a)(N,2),C=y[0],w=y[1],I=Object(a.useState)(!1),T=Object(b.a)(I,2),S=T[0],B=T[1],E=function(){var e=Object(d.a)(l.a.mark((function e(){var t,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,B(!0),e.next=4,g.a.post("https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/orders",{item:c});case 4:for(t=e.sent,r=t.data,w(r.id),_(!0),i([]),a=0;a<c.length;a++)o(c[a].itemId,c.length);j(),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),alert("Can not make an order! :("),console.error(e.t0);case 17:B(!1);case 18:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),A=function(){s(!1),_(!1)};return Object(m.jsx)("div",{className:"".concat(x.a.overlay," ").concat(t?x.a.overlayVisible:""),children:Object(m.jsx)("div",{className:x.a.drawer,children:p.length>0?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:x.a.cartTop,children:[Object(m.jsxs)("h2",{className:"d-flex justify-between mb-30 align-center",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Object(m.jsx)("img",{onClick:function(){return A()},className:x.a.removeBtn+" mt-10",src:"img/btn-removed.svg",alt:""})]}),Object(m.jsx)("div",{className:x.a.cartItems,children:p})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("ul",{className:x.a.cartTotalBlock,children:[Object(m.jsxs)("li",{className:"d-flex mb-20",children:[Object(m.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(m.jsx)("div",{}),Object(m.jsxs)("b",{children:[n," \u0440\u0443\u0431."]})]}),Object(m.jsxs)("li",{className:"d-flex mb-20",children:[Object(m.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(m.jsx)("div",{}),Object(m.jsxs)("b",{children:[Math.round(.05*n)," \u0440\u0443\u0431."]})]})]}),Object(m.jsx)("div",{children:Object(m.jsxs)("button",{disabled:S,onClick:E,className:x.a.cartTotalButton+" mt-25",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437",Object(m.jsx)("img",{src:"img/cart-total-button.svg",alt:"Buy"})]})})]})]}):Object(m.jsx)(f,{manageOrders:A,title:k?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",text:k?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(C," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437.",image:k?"img/cart-complete.png":"img/cart-empty.png"})})})},_=r(2),N=r.n(_),y=r(13),C=r(24),w=r.n(C),I=r(36),T=function(){return Object(m.jsxs)(I.a,{speed:2,width:150,height:187,viewBox:"0 0 150 187",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(m.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"150",height:"90"}),Object(m.jsx)("rect",{x:"0",y:"106",rx:"10",ry:"10",width:"150",height:"15"}),Object(m.jsx)("rect",{x:"0",y:"125",rx:"10",ry:"10",width:"93",height:"15"}),Object(m.jsx)("rect",{x:"0",y:"162",rx:"10",ry:"10",width:"80",height:"24"}),Object(m.jsx)("rect",{x:"118",y:"154",rx:"10",ry:"10",width:"32",height:"32"})]})},S=function(e){var t=e.imageSrc,r=e.alt,c=e.title,n=e.price,s=e.id,i=e.inCart,o=e.inFavourite,l=e.isItemAdded,d=e.isLoading,b=Object(a.useContext)(u),j=b.onAddToCart,p=b.onDeleteFromCart,h=b.onAddToFavourites,x=b.onDeleteFromFavourite,O=b.sneakersCartItems,f=b.favourites;return Object(m.jsx)("div",{className:w.a.card,children:d?Object(m.jsx)(T,{}):Object(m.jsxs)(m.Fragment,{children:[l&&Object(m.jsx)("div",{className:w.a.favourite,children:Object(m.jsx)("img",{onClick:function(){l(s,f)?x(s):h({imageSrc:t,alt:r,title:c,price:n,id:s,inCart:i,inFavourite:!0})},src:l(s,f)?"img/button-liked.svg":"img/button-like.svg",alt:"favourite"})}),Object(m.jsx)("img",{width:133,height:112,src:t,alt:r}),Object(m.jsx)("h5",{children:c}),Object(m.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(m.jsxs)("div",{className:"d-flex flex-column",children:[Object(m.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(m.jsxs)("b",{children:[n," \u0440\u0443\u0431."]})]}),l&&Object(m.jsx)("img",{className:"cu-p",onClick:function(){l(s,O)?p(s):j({imageSrc:t,alt:r,title:c,price:n,id:s,inCart:!0,inFavourite:o})},src:l(s,O)?"img/button-added.svg":"img/button-add.svg",alt:"add"})]})]})})},B=function(e){var t=e.searchInput,r=e.setSearchInput,c=Object(a.useContext)(u),n=c.sneakersItems,s=c.isItemAdded,o=c.isLoading;return Object(m.jsxs)("div",{className:"".concat(N.a.content," p-40"),children:[Object(m.jsxs)("div",{className:"".concat(N.a.contentInner," justify-between align-center mb-40"),children:[t?Object(m.jsxs)("h1",{children:["\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0430\u043c: ",t]}):Object(m.jsx)("h1",{children:"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(m.jsxs)("div",{className:N.a.searchBlock,children:[Object(m.jsx)("img",{src:"img/search.svg",alt:"Search"}),Object(m.jsx)("input",{onChange:function(e){return r(e.target.value)},value:t,placeholder:"\u041f\u043e\u0438\u0441\u043a..."}),t&&Object(m.jsx)("img",{onClick:function(){return r("")},className:N.a.searchButton,src:"img/btn-remove.svg",alt:""})]})]}),Object(m.jsx)("div",{className:N.a.carts,children:function(){var e=n.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}));return(o?Object(i.a)(Array(8)):e).map((function(e,t){return Object(m.jsx)(S,Object(y.a)(Object(y.a)({isLoading:o},e),{},{isItemAdded:s}),t)}))}()})]})},E=r(3),A=function(){var e=Object(a.useContext)(u),t=e.favourites,r=e.isItemAdded,c=e.isLoading,n=(c?Object(i.a)(Array(8)):t).map((function(e,t){return Object(m.jsx)(S,Object(y.a)(Object(y.a)({},e),{},{id:c?t:e.itemId,isItemAdded:r,isLoading:c}),t)}));return Object(m.jsx)("div",{children:t.length>0?Object(m.jsxs)("div",{className:"".concat(N.a.content," p-40"),children:[Object(m.jsx)("div",{className:"".concat(N.a.contentInner," justify-between align-center mb-40"),children:Object(m.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(m.jsx)("div",{className:N.a.carts,children:n})]}):Object(m.jsxs)("div",{className:N.a.itemsEmpty,children:[Object(m.jsx)("img",{width:70,height:70,src:"img/favourites-empty.png",className:"mb-25",alt:"Empty!"}),Object(m.jsx)("div",{className:N.a.itemsTitle,children:"\u0417\u0430\u043a\u043b\u0430\u0434\u043e\u043a \u043d\u0435\u0442 :("}),Object(m.jsx)("div",{className:N.a.itemsText,children:"\u0412\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u043b\u0438 \u0432 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"}),Object(m.jsx)(j.b,{to:"../",children:Object(m.jsxs)("button",{className:N.a.cartEmptyButton,children:[Object(m.jsx)("img",{src:"img/cart-total-button.svg",alt:"Go back"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})})]})})},D=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),r=t[0],c=t[1],n=Object(a.useState)(!0),s=Object(b.a)(n,2),o=s[0],u=s[1];Object(a.useEffect)((function(){Object(d.a)(l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.prev=1,e.next=4,g.a.get("https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/orders");case 4:t=e.sent,r=t.data,c(r.reduce((function(e,t){return[].concat(Object(i.a)(e),Object(i.a)(t.item))}),[])),u(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),alert("Could not download your orders :("),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))()}),[]);var p=(o?Object(i.a)(Array(8)):r).map((function(e,t){return Object(m.jsx)(S,Object(y.a)(Object(y.a)({},e),{},{isLoading:o}),t)}));return Object(m.jsx)("div",{children:r.length>0?Object(m.jsxs)("div",{className:"".concat(N.a.content," p-40"),children:[Object(m.jsx)("div",{className:"".concat(N.a.contentInner," justify-between align-center mb-40"),children:Object(m.jsx)("h1",{children:"\u041c\u043e\u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0438"})}),Object(m.jsx)("div",{className:N.a.carts,children:p})]}):Object(m.jsxs)("div",{className:N.a.itemsEmpty,children:[Object(m.jsx)("img",{src:"img/orders-empty.png",className:"mb-25",alt:"Empty!"}),Object(m.jsx)("div",{className:N.a.itemsTitle,children:"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"}),Object(m.jsxs)("div",{className:N.a.itemsText,children:["\u0412\u044b \u043d\u0438\u0449\u0435\u0431\u0440\u043e\u0434? ",Object(m.jsx)("br",{})," \u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u0437\u0430\u043a\u0430\u0437."]}),Object(m.jsx)(j.b,{to:"../",children:Object(m.jsxs)("button",{className:N.a.cartEmptyButton,children:[Object(m.jsx)("img",{src:"img/cart-total-button.svg",alt:"Go back"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})})]})})};var F=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),r=t[0],c=t[1],n=Object(a.useState)([]),s=Object(b.a)(n,2),o=s[0],j=s[1],h=Object(a.useState)([]),x=Object(b.a)(h,2),O=x[0],f=x[1],v=Object(a.useState)(!1),_=Object(b.a)(v,2),N=_[0],y=_[1],C=Object(a.useState)(!0),w=Object(b.a)(C,2),I=w[0],T=w[1],S=Object(a.useState)(""),F=Object(b.a)(S,2),L=F[0],P=F[1];function G(){try{g.a.get("https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/items").then((function(e){return c(e.data)}))}catch(e){alert("Could not download sneakers from server. Please wait for couple seconds and refresh the page. Thx ;)"),console.error(e)}}Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t,r,a,n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(!0),e.next=4,Promise.all([g.a.get("https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/items"),g.a.get("https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/cart"),g.a.get("https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/favourites")]);case 4:t=e.sent,r=Object(b.a)(t,3),a=r[0],n=r[1],s=r[2],T(!1),j(n.data),f(s.data),c(a.data),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),alert("Could not render! Sorry I am just indian programmer"),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var W=function(){var e=Object(d.a)(l.a.mark((function e(t){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.post("https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/favourites",{imageSrc:t.imageSrc,alt:t.alt,title:t.title,price:t.price,inCart:t.inCart,inFavourite:t.inFavourite,itemId:t.id});case 3:r=e.sent,a=r.data,g.a.put("https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/items/".concat(t.id),{inFavourite:!0}).then((function(){return G()})),f((function(e){return[].concat(Object(i.a)(e),[a])})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("Can not download favourite sneakers!"),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(d.a)(l.a.mark((function e(t){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.post("https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/cart",{imageSrc:t.imageSrc,alt:t.alt,title:t.title,price:t.price,inCart:t.inCart,inFavourite:t.inFavourite,itemId:t.id});case 3:r=e.sent,a=r.data,g.a.put("https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/items/".concat(t.id),{inCart:!0}).then((function(){return G()})),j((function(e){return[].concat(Object(i.a)(e),[a])})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("Could not put the sneakers to the cart!"),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),V=o.reduce((function(e,t){return t.price+e}),0);return Object(m.jsx)(u.Provider,{value:{isItemAdded:function(e,t){return t.some((function(t){return Number(t.itemId)===Number(e)}))},sneakersItems:r,favourites:O,sneakersCartItems:o,setSneakersCartItems:j,totalPrice:V,onAddToCart:J,onDeleteFromCart:function(e){try{if(r.some((function(t){return Number(t.id)===Number(e)}))){var t=o.find((function(t){return Number(t.itemId)===Number(r.find((function(t){return t.id===e})).id)}));g.a.delete("https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/cart/".concat(t.id)),g.a.put("https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/items/".concat(e),{inCart:!1}).then((function(){return G()})),j(o.filter((function(t){return Number(t.itemId)!==Number(e)})))}}catch(a){alert("Sorry, could not delete from cart. Wait for couple of seconds and refresh the page. Thx ;)"),console.log(a)}},onAddToFavourites:W,onDeleteFromFavourite:function(e){try{if(r.some((function(t){return Number(t.id)===Number(e)}))){var t=O.find((function(t){return Number(t.itemId)===Number(r.find((function(t){return t.id===e})).id)}));g.a.delete("https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/favourites/".concat(t.id)),g.a.put("https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/items/".concat(e),{inFavourite:!1}).then((function(){return G()})),f(O.filter((function(t){return Number(t.itemId)!==Number(e)})))}}catch(a){alert("Sorry, could not delete from favourite. Wait for couple of seconds and refresh the page. Thx ;)"),console.error(a)}},onDeleteWholeCart:function(e,t){var a,c=o.find((function(t){return Number(t.itemId)===Number(r.find((function(t){return t.id===e})).id)}));g.a.delete("https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/cart/".concat(c.id)),a=1e3,new Promise((function(e){return setTimeout(e,a)})),g.a.put("https://61589fed5167ba00174bbb8e.mockapi.io/api/sneakers/items/".concat(e),{inCart:!1})},setIsCartOpened:y,updateSneakers:G,isLoading:I},children:Object(m.jsxs)("div",{className:"wrapper clear",children:[Object(m.jsx)("div",{children:Object(m.jsx)(k,{opened:N})}),Object(m.jsx)(p,{openCart:function(){return y(!0)}}),Object(m.jsx)(E.a,{path:"/",exact:!0,render:function(){return Object(m.jsx)(B,{searchInput:L,setSearchInput:P})}}),Object(m.jsx)(E.a,{path:"/favourites",exact:!0,render:function(){return Object(m.jsx)(A,{})}}),Object(m.jsx)(E.a,{path:"/orders",exact:!0,render:function(){return Object(m.jsx)(D,{})}})]})})};r(71);s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(j.a,{children:Object(m.jsx)(F,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.6a28a40d.chunk.js.map
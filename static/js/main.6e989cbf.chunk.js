(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{15:function(e,t,n){e.exports={item:"Contacts_item__2Gmj9",button:"Contacts_button__3zKln"}},16:function(e,t,n){e.exports={section:"Section_section__2aN0g",title:"Section_title__2oIwe"}},17:function(e,t,n){e.exports={input:"Filter_input__3K0YO",label:"Filter_label__23XmH"}},23:function(e,t,n){e.exports={app:"App_app__1tA9O"}},25:function(e,t,n){},30:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(11),i=n.n(o),s=(n(30),n(5)),u=n(20),l=n(8),b=n(3),j=n(21),d=n.n(j),m=n(4),O=n(22),f=n.n(O),p=n(6),h=n(2),_={addContact:Object(b.b)("contact/add"),deleteContact:Object(b.b)("contact/delete"),changeFilter:Object(b.b)("contact/changeFilter")},x=Object(b.c)([],(a={},Object(p.a)(a,_.addContact,(function(e,t){var n=t.payload;return e.some((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?(alert("".concat(n.name," is already in contacts.")),Object(l.a)(e)):[].concat(Object(l.a)(e),[n])})),Object(p.a)(a,_.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),v=Object(b.c)("",Object(p.a)({},_.changeFilter,(function(e,t){return t.payload}))),g=Object(h.b)({items:x,filter:v}),C=[].concat(Object(l.a)(Object(b.d)({serializableCheck:{ignoredActions:[m.a,m.f,m.b,m.c,m.d,m.e]}})),[d.a]),N={key:"contacts",storage:f.a,blacklist:["filter"]},y=Object(b.a)({reducer:{contacts:Object(m.g)(N,g)},middleware:C,devTools:!1}),k={store:y,persistor:Object(m.h)(y)},w=n(23),F=n.n(w),A=n(18),I=n(9),S=n.n(I),D=n(24),U=n.n(D),z=n(1),L=Object(s.b)(null,(function(e){return{addUser:function(t){return e(_.addContact(t))}}}))((function(e){var t=e.addUser,n=Object(c.useState)(""),a=Object(A.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),s=Object(A.a)(i,2),u=s[0],l=s[1],b=function(e){var t=e.target,n=t.value;switch(t.name){case"name":o(n);break;case"number":l(n);break;default:return}};return Object(z.jsxs)("form",{className:S.a.form,onSubmit:function(e){e.preventDefault(),t({name:r,number:u,id:U.a.generate()}),o(""),l("")},children:[Object(z.jsxs)("label",{children:["Name:",Object(z.jsx)("input",{type:"text",name:"name",className:S.a.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:b,value:r})]}),Object(z.jsxs)("label",{children:["Number:",Object(z.jsx)("input",{type:"tel",name:"number",className:S.a.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:b,value:u})]}),Object(z.jsx)("button",{type:"submit",className:S.a.btn,children:"Add contact"})]})})),J=n(15),Z=n.n(J),q=function(e){var t=e.name,n=e.id,a=e.number,c=e.onRemoveUser;return Object(z.jsxs)("li",{className:Z.a.item,children:[Object(z.jsxs)("span",{children:[t,": "]}),a,Object(z.jsx)("button",{type:"button",className:Z.a.button,onClick:function(){return c(n)},children:"Delete"})]})},B=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},E=Object(s.b)((function(e){var t=e.contacts,n=t.items,a=t.filter;return{contacts:B(n,a)}}),(function(e){return{removeUser:function(t){return e(_.deleteContact(t))}}}))((function(e){var t=e.contacts,n=e.removeUser;return Object(z.jsx)(z.Fragment,{children:t.length>0&&Object(z.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(z.jsx)(q,{id:t,name:a,number:c,onRemoveUser:function(){return n(t)}},t)}))})})})),G=n(16),K=n.n(G),M=function(e){var t=e.children,n=e.title;return Object(z.jsxs)("div",{className:K.a.section,children:[Object(z.jsx)("h2",{className:K.a.title,children:n.toUpperCase()}),t]})},R=n(17),Y=n.n(R),H=Object(s.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{setFilter:function(t){return e(_.changeFilter(t.target.value))}}}))((function(e){var t=e.filter,n=e.setFilter;return Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)("label",{className:Y.a.label,children:["Find contacts by name:",Object(z.jsx)("input",{type:"text",name:"filter",className:Y.a.input,onChange:n,value:t})]})})})),P=n(25),T=n.n(P),W=function(e){var t=e.children;return Object(z.jsx)("div",{className:T.a.Container,children:t})},X=function(){return Object(z.jsx)("div",{className:F.a.app,children:Object(z.jsxs)(W,{children:[Object(z.jsx)(M,{title:"Phonebook",children:Object(z.jsx)(L,{})}),Object(z.jsxs)(M,{title:"Contacts",children:[Object(z.jsx)(H,{}),Object(z.jsx)(E,{})]})]})})};i.a.render(Object(z.jsx)(r.a.StrictMode,{children:Object(z.jsx)(s.a,{store:k.store,children:Object(z.jsx)(u.a,{loading:null,persistor:k.persistor,children:Object(z.jsx)(X,{})})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={form:"DataInput_form__1El21",number:"DataInput_number__2m9S-",name:"DataInput_name__2_neu DataInput_number__2m9S-",btn:"DataInput_btn__3YWIG"}}},[[49,1,2]]]);
//# sourceMappingURL=main.6e989cbf.chunk.js.map
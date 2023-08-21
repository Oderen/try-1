"use strict";(self.webpackChunkprojects=self.webpackChunkprojects||[]).push([[876],{7876:function(e,n,t){t.r(n),t.d(n,{default:function(){return O}});var a=t(9434),o=t(2791),s=t(9793),r=function(e){return e.contacts.items},c=function(e){return e.filter},i=function(e){return e.contacts.error},l=function(e){return e.contacts.isLoading},u=t(5067),_="Phonebook_contactsForm__1BLnC",h="Phonebook_contactsForm__field__zKZHK",d="Phonebook_contactsFrom__label__6m7+Z",m="Phonebook_contactsForm__input__s1u4R",f="Phonebook_contactsForm__svg__v-V-u",p="Phonebook_contacts__button__Hsbqf",b="Phonebook_findContacts__label__rc+Fi",v="Phonebook_findContacts__input__Zu91z",x="Phonebook_findContacts__icon__VB18q",j="Phonebook_ContactList__8ZDx6",N="Phonebook_ContactList__item__wzGRi",g="Phonebook_Contact__QVZN8",C="Phonebook_Contact__title__5Rn86",k="Phonebook_Contact__text__jzTr7",P="Phonebook_Contact__deleteButton__pgBXY",y=t(184);function w(e){var n=e.contacts,t=e.onDelete;return(0,y.jsx)(y.Fragment,{children:n.sort((function(e,n){return n.id-e.id})).map((function(e,n){var a=e._id,o=e.name,s=e.phone;return(0,y.jsxs)("li",{className:N,children:[(0,y.jsxs)("h3",{className:C,children:["Contact ",n+1]}),(0,y.jsxs)("div",{className:g,children:[(0,y.jsxs)("p",{className:k,children:[(0,y.jsx)("span",{style:{fontWeight:700},children:"Name: "}),o]}),(0,y.jsxs)("p",{className:k,children:[(0,y.jsx)("span",{style:{fontWeight:700},children:"Phone:"})," ",s]}),(0,y.jsx)("button",{className:P,type:"button",onClick:function(){return t(a)},children:"Delete"})]})]},a)}))})}function F(e){var n=e.contacts,t=e.onDelete;return(0,y.jsx)("ul",{className:j,children:(0,y.jsx)(w,{contacts:n,onDelete:t},n.id)})}var Z=t(9439),A=t(1686),z=t.n(A),D=t(828),q=function(e,n){var t=(0,o.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem(e)))&&void 0!==t?t:n})),a=(0,Z.Z)(t,2),s=a[0],r=a[1];return(0,o.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(s))}),[e,s]),[s,r]},L=function(e){var n=e.sendDataToApp,t=(0,a.v9)(r),o=q("name",""),s=(0,Z.Z)(o,2),c=s[0],i=s[1],l=q("number",""),u=(0,Z.Z)(l,2),b=u[0],v=u[1],x=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"name":i(a);break;case"number":v(a);break;default:return}},j=function(e){var n=e.toLowerCase();return t.some((function(e){return e.name.toLowerCase()===n}))},N=function(){i(""),v("")};return(0,y.jsxs)("form",{className:_,onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements,a=t.name,o=t.number;if(j(a.value))return e.currentTarget.reset(),void z().Notify.failure("".concat(a.value," is already in contacts"));n({name:a.value,phone:o.value}),N()},children:[(0,y.jsx)("div",{className:h,children:(0,y.jsxs)("label",{className:d,children:["Name",(0,y.jsx)("input",{className:m,type:"text",name:"name",value:c,pattern:"^[a-zA-Z\\s]+$",placeholder:"Rosie Simpson",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:x,required:!0}),(0,y.jsx)(D.Bmn,{className:f})]})}),(0,y.jsx)("div",{className:h,children:(0,y.jsxs)("label",{className:d,children:["Number",(0,y.jsx)("input",{className:m,type:"tel",name:"number",value:b,pattern:"^[+]?[0-9\\s]+$",placeholder:"+123 456 789",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:x,required:!0}),(0,y.jsx)(D.MdO,{className:f})]})}),(0,y.jsx)("button",{className:p,type:"submit",children:"Add contact"})]})},B=function(e){var n=e.changeFilter,t=(0,a.v9)((function(e){return e.filter}));return(0,y.jsx)("div",{className:h,children:(0,y.jsxs)("label",{className:b,children:["Find contacts by name",(0,y.jsx)("input",{className:v,type:"text",name:"filter",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:n,required:!0}),(0,y.jsx)(D.Yfv,{className:x})]})})},S="PhonebookPage_contatcsContainer__7JPDY",T="PhonebookPage_contacts__U2wKh",J="PhonebookPage_contacts__title__qqkne",K="PhonebookPage_noContacts__urU5E",R="PhonebookPage_noContacts__text__F1v1q",O=function(){var e=(0,o.useRef)(!0),n=(0,a.I0)(),t=(0,a.v9)(r),_=(0,a.v9)(c),h=(0,a.v9)(i),d=(0,a.v9)(l);(0,o.useEffect)((function(){e.current?e.current=!1:n((0,s.yF)())}),[n]);var m=_.toLowerCase(),f=t.filter((function(e){return e.name.toLowerCase().includes(m)}));return(0,y.jsxs)("div",{className:S,children:[(0,y.jsx)("h1",{className:J,children:"Phonebook"}),(0,y.jsx)(L,{sendDataToApp:function(e){n((0,s.uK)(e))}}),h&&(0,y.jsx)("h1",{children:"Ops, something went wrong"}),d&&(0,y.jsx)(u.Z,{}),t.length>0&&!h&&!d&&(0,y.jsxs)("div",{className:T,children:[(0,y.jsx)("h2",{className:J,children:"Contacts"}),(0,y.jsx)(B,{changeFilter:function(e){var t=e.currentTarget.value;n({type:"filter/filter",payload:t})}}),(0,y.jsx)(F,{contacts:f,onDelete:function(e){n((0,s.GK)(e))}})]}),!d&&t.length<1&&!h&&(0,y.jsxs)("div",{className:T,children:[(0,y.jsx)("h2",{className:J,children:"Contacts"}),(0,y.jsx)("div",{className:K,children:(0,y.jsx)("p",{className:R,children:"There are no contacts yet"})})]})]})}}}]);
//# sourceMappingURL=876.f6717549.chunk.js.map
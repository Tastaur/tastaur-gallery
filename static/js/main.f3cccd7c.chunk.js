(this["webpackJsonptastaur-gallery"]=this["webpackJsonptastaur-gallery"]||[]).push([[0],{112:function(e,t,a){e.exports=a.p+"static/media/garbage.e5a81464.png"},141:function(e,t,a){e.exports=a(251)},146:function(e,t,a){},147:function(e,t,a){},20:function(e,t,a){e.exports={container:"BodyItem_container__3g-oa",title:"BodyItem_title__3jc6h",img:"BodyItem_img__1Kn30",texarea:"BodyItem_texarea__L9uh4",button:"BodyItem_button__1YIuX"}},251:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(49),c=a.n(o);a(146),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(147);var l=a(10),i=a(6),m=a(114),s=a(31),u="gallery/ADD-POST",d={image:[{id:0,comment:"Hello, this my first post",src:"https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}],idNumber:1,showImage:void 0},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(s.a)({},e,{idNumber:Number(e.idNumber+1),image:[].concat(Object(m.a)(e.image),[{id:e.idNumber,comment:t.comment,src:t.src}])});case"gallery/DELETE_POST":return Object(s.a)({},e,{image:e.image.filter((function(e){return e.id!==t.id}))});case"gallery/EDIT_COMMENT":return Object(s.a)({},e,{image:e.image.map((function(e){return t.id===e.id?Object(s.a)({},e,{comment:t.comment}):e}))});case"gallery/SHOW_IMAGE":return Object(s.a)({},e,{showImage:e.image.filter((function(e){return e.id===t.id}))});default:return e}},f=a(108),g=a(83),p=a(110),E=a.n(p),b=Object(i.b)({gallery:_,form:f.a}),h={key:"root",storage:E.a},y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,N=Object(g.a)(h,b),v=Object(i.d)(N,y()),O=Object(g.b)(v);window.store=v;var C,j=v,w=a(7),I=a(26),x=a(73),F=a.n(x),M=function(e){return r.a.createElement("div",{className:F.a.header},r.a.createElement("h2",{className:F.a.title}," Tastaur's Gallery"))},S=a(74),U=a.n(S),k=function(e){return r.a.createElement("div",{className:U.a.footer},r.a.createElement("h4",{className:U.a.title}," From Tastaur with love  \xa9"))},B=a(75),T=a.n(B),P=a(76),D=a.n(P),H=a(30),L=a(20),A=a.n(L),G=function(e){var t=Object(n.useState)(e.comment),a=Object(H.a)(t,2),o=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement("textarea",{className:A.a.texarea,value:o,onChange:function(e){var t=e.target.value;c(t)},onBlur:function(){e.editComment(e.id,o),e.setEditMode(!1)}}))},W=Object(l.b)((function(e){return{}}),{editComment:function(e,t){return{type:"gallery/EDIT_COMMENT",id:e,comment:t}}})(G),J=a(112),X=a.n(J),q=function(e){var t=Object(n.useState)(!1),a=Object(H.a)(t,2),o=a[0],c=a[1];return r.a.createElement("div",{className:A.a.container},r.a.createElement(I.b,{to:"/id".concat(e.id)},r.a.createElement("img",{onClick:function(){e.showImage(e.id)},src:e.src,className:A.a.img,alt:"\nif you see this message, then something went wrong"})),o||0===e.comment.length?r.a.createElement(W,{comment:e.comment,setEditMode:c,id:e.id}):r.a.createElement("p",{className:A.a.title,onClick:function(){c(!0)}},e.comment),r.a.createElement("div",{className:A.a.buttonContainer},r.a.createElement("img",{alt:"delete button",className:A.a.button,src:X.a,onClick:function(){e.deletePost(e.id)}})))},Q=function(e){var t=e.gallery.image.map((function(t){return r.a.createElement(q,{deletePost:e.deletePost,showImage:e.showImage,key:t.id,id:t.id,comment:t.comment,src:t.src})}));return r.a.createElement("div",{className:D.a.container},0===e.gallery.image.length?r.a.createElement("h2",{className:D.a.errorMessages},"Oops! No more photo"):t)},Y=Object(l.b)((function(e){return{gallery:e.gallery}}),{showImage:function(e){return{type:"gallery/SHOW_IMAGE",id:e}},deletePost:function(e){return{type:"gallery/DELETE_POST",id:e}}})(Q),Z=function(e){return r.a.createElement("div",{className:T.a.body},r.a.createElement("h3",{className:T.a.title}," App with perfect image"),r.a.createElement(Y,null))},z=a(9),R=a.n(z),V=a(106),K=a(107),$=a(115),ee=a(54),te=a.n(ee),ae=function(e){return function(t){var a=t.input,n=t.meta,o=Object($.a)(t,["input","meta"]),c=n.touched&&n.error;return r.a.createElement("div",{className:te.a.formControl+" "+(c?te.a.error:"")},r.a.createElement(e,Object.assign({},a,o)),r.a.createElement("div",{className:te.a.errorContainer},c&&r.a.createElement("span",null," ",n.error," ")))}},ne=ae("textarea"),re=ae("input"),oe=function(e){if(!e)return"Field is required"},ce=(C=2,function(e){if(e&&e.length<C)return"Min length is ".concat(C," symbol")}),le=Object(K.a)({form:"formUpload"})((function(e){var t=e.handleSubmit,a=e.closeForm;return r.a.createElement("form",{onSubmit:t,className:R.a.form},r.a.createElement("div",{className:R.a.item},r.a.createElement("label",{className:R.a.label}," Enter url picture"),r.a.createElement(V.a,{className:R.a.input,component:re,type:"text",validate:oe,name:"src",placeholder:"Src"})),r.a.createElement("div",{className:R.a.item},r.a.createElement("label",{className:R.a.label}," Enter your comment"),r.a.createElement(V.a,{component:ne,validate:[oe,ce],name:"comment",placeholder:"Comment",className:R.a.textarea,type:"text"})),r.a.createElement("div",{className:R.a.buttonContainer},r.a.createElement("button",{type:"submit",className:R.a.button},"Upload"),r.a.createElement("button",{onClick:a,className:R.a.button}," Close")))})),ie=a(51),me=Object(l.b)((function(e){return{state:e}}),{addPost:function(e,t){return{type:u,src:e,comment:t}}})((function(e){var t=Object(n.useState)(!1),a=Object(H.a)(t,2),o=a[0],c=a[1];return r.a.createElement("div",{className:R.a.uploadContainer},r.a.createElement("h2",{className:R.a.title},"You can upload new picture"),o?r.a.createElement(le,{closeForm:function(){c(!1)},onSubmit:function(t,a){e.addPost(t.src,t.comment),a(Object(ie.a)("formUpload"))}}):r.a.createElement("button",{className:R.a.button,onClick:function(){return c(!0)}},"Upload new picture"))})),se=a(82),ue=a.n(se),de=function(e){return r.a.createElement("div",{onClick:function(t){"IMG"!==t.target.tagName&&e.history.goBack()},className:ue.a.container},e.gallery.showImage?r.a.createElement("img",{src:e.gallery.showImage[0].src,className:ue.a.img,alt:""}):r.a.createElement(w.a,{to:"/"}))},_e=Object(i.c)(Object(l.b)((function(e){return{gallery:e.gallery}}),{}),w.f)(de),fe=a(113),ge=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(M,null),r.a.createElement(Z,null),r.a.createElement(me,null),r.a.createElement(k,null),r.a.createElement(w.b,{path:"/id:id?",render:function(){return r.a.createElement(_e,null)}})))},pe=function(e){return r.a.createElement(I.a,null,r.a.createElement(l.a,{store:j},r.a.createElement(fe.a,{loading:null,persistor:O},r.a.createElement(ge,null))))};c.a.render(r.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,t,a){e.exports={error:"FormsControl_error__zC0ju",formControl:"FormsControl_formControl__2aXFM",errorContainer:"FormsControl_errorContainer__OhTDI"}},73:function(e,t,a){e.exports={header:"Header_header__UkIpa",title:"Header_title__3CVSq"}},74:function(e,t,a){e.exports={footer:"Footer_footer__13mzJ",title:"Footer_title__1M8pG"}},75:function(e,t,a){e.exports={body:"Body_body___fZLh",title:"Body_title__2Sl7v"}},76:function(e,t,a){e.exports={container:"BodyContainer_container__1He3P",errorMessages:"BodyContainer_errorMessages__sf56y"}},82:function(e,t,a){e.exports={container:"item_container__LkAnZ",img:"item_img__33I1w"}},9:function(e,t,a){e.exports={uploadContainer:"UploadForm_uploadContainer__114H0",input:"UploadForm_input__Nvlbj",textarea:"UploadForm_textarea__2IFE7",label:"UploadForm_label__2M1j7",form:"UploadForm_form__Pp6aY",item:"UploadForm_item__AQjU8",title:"UploadForm_title__2aOL3",button:"UploadForm_button__3gLZR",buttonContainer:"UploadForm_buttonContainer__3sC-Q"}}},[[141,1,2]]]);
//# sourceMappingURL=main.f3cccd7c.chunk.js.map
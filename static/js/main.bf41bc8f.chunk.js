(this["webpackJsonptastaur-gallery"]=this["webpackJsonptastaur-gallery"]||[]).push([[0],{110:function(e,t,a){e.exports=a.p+"static/media/garbage.e5a81464.png"},138:function(e,t,a){e.exports=a(246)},143:function(e,t,a){},144:function(e,t,a){},20:function(e,t,a){e.exports={container:"BodyItem_container__3g-oa",title:"BodyItem_title__3jc6h",img:"BodyItem_img__1Kn30",texarea:"BodyItem_texarea__L9uh4",button:"BodyItem_button__1YIuX"}},246:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(49),c=a.n(o);a(143),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(144);var l=a(10),i=a(6),m=a(111),s=a(31),u="gallery/ADD-POST",d={image:[{id:0,comment:"Hello, this my first post",src:"https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}],idNumber:1,showImage:void 0},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(s.a)({},e,{idNumber:Number(e.idNumber+1),image:[].concat(Object(m.a)(e.image),[{id:e.idNumber,comment:t.comment,src:t.src}])});case"gallery/DELETE_POST":return Object(s.a)({},e,{image:e.image.filter((function(e){return e.id!==t.id}))});case"gallery/EDIT_COMMENT":return Object(s.a)({},e,{image:e.image.map((function(e){return t.id===e.id?Object(s.a)({},e,{comment:t.comment}):e}))});case"gallery/SHOW_IMAGE":return Object(s.a)({},e,{showImage:e.image.filter((function(e){return e.id===t.id}))});default:return e}},f=a(107),E=Object(i.b)({gallery:_,form:f.a}),p=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,g=Object(i.d)(E,p());window.store=g;var b,h=g,y=a(7),N=a(26),v=a(73),O=a.n(v),C=function(e){return r.a.createElement("div",{className:O.a.header},r.a.createElement("h2",{className:O.a.title}," Tastaur's Gallery"))},w=a(74),j=a.n(w),I=function(e){return r.a.createElement("div",{className:j.a.footer},r.a.createElement("h4",{className:j.a.title}," From Tastaur with love  \xa9"))},x=a(75),F=a.n(x),M=a(76),S=a.n(M),U=a(30),k=a(20),B=a.n(k),T=function(e){var t=Object(n.useState)(e.comment),a=Object(U.a)(t,2),o=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement("textarea",{className:B.a.texarea,value:o,onChange:function(e){var t=e.target.value;c(t)},onBlur:function(){e.editComment(e.id,o),e.setEditMode(!1)}}))},P=Object(l.b)((function(e){return{}}),{editComment:function(e,t){return{type:"gallery/EDIT_COMMENT",id:e,comment:t}}})(T),D=a(110),H=a.n(D),L=function(e){var t=Object(n.useState)(!1),a=Object(U.a)(t,2),o=a[0],c=a[1];return r.a.createElement("div",{className:B.a.container},r.a.createElement(N.b,{to:"/id".concat(e.id)},r.a.createElement("img",{onClick:function(){e.showImage(e.id)},src:e.src,className:B.a.img,alt:"\nif you see this message, then something went wrong"})),o?r.a.createElement(P,{comment:e.comment,setEditMode:c,id:e.id}):r.a.createElement("p",{className:B.a.title,onClick:function(){c(!0)}},e.comment),r.a.createElement("div",{className:B.a.buttonContainer},r.a.createElement("img",{alt:"delete button",className:B.a.button,src:H.a,onClick:function(){e.deletePost(e.id)}})))},A=function(e){var t=e.gallery.image.map((function(t){return r.a.createElement(L,{deletePost:e.deletePost,showImage:e.showImage,key:t.id,id:t.id,comment:t.comment,src:t.src})}));return r.a.createElement("div",{className:S.a.container},0===e.gallery.image.length?r.a.createElement("h2",{className:S.a.errorMessages},"Oops! No more photo"):t)},G=Object(l.b)((function(e){return{gallery:e.gallery}}),{showImage:function(e){return{type:"gallery/SHOW_IMAGE",id:e}},deletePost:function(e){return{type:"gallery/DELETE_POST",id:e}}})(A),W=function(e){return r.a.createElement("div",{className:F.a.body},r.a.createElement("h3",{className:F.a.title}," App with perfect image"),r.a.createElement(G,null))},J=a(9),X=a.n(J),q=a(105),Q=a(106),Y=a(112),Z=a(54),z=a.n(Z),R=function(e){return function(t){var a=t.input,n=t.meta,o=Object(Y.a)(t,["input","meta"]),c=n.touched&&n.error;return r.a.createElement("div",{className:z.a.formControl+" "+(c?z.a.error:"")},r.a.createElement(e,Object.assign({},a,o)),r.a.createElement("div",{className:z.a.errorContainer},c&&r.a.createElement("span",null," ",n.error," ")))}},V=R("textarea"),K=R("input"),$=function(e){if(!e)return"Field is required"},ee=(b=2,function(e){if(e&&e.length<b)return"Min length is ".concat(b," symbol")}),te=Object(Q.a)({form:"formUpload"})((function(e){var t=e.handleSubmit,a=e.closeForm;return r.a.createElement("form",{onSubmit:t,className:X.a.form},r.a.createElement("div",{className:X.a.item},r.a.createElement("label",{className:X.a.label}," Enter url picture"),r.a.createElement(q.a,{className:X.a.input,component:K,type:"text",validate:$,name:"src",placeholder:"Src"})),r.a.createElement("div",{className:X.a.item},r.a.createElement("label",{className:X.a.label}," Enter your comment"),r.a.createElement(q.a,{component:V,validate:[$,ee],name:"comment",placeholder:"Comment",className:X.a.textarea,type:"text"})),r.a.createElement("div",{className:X.a.buttonContainer},r.a.createElement("button",{type:"submit",className:X.a.button},"Upload"),r.a.createElement("button",{onClick:a,className:X.a.button}," Close")))})),ae=a(51),ne=Object(l.b)((function(e){return{state:e}}),{addPost:function(e,t){return{type:u,src:e,comment:t}}})((function(e){var t=Object(n.useState)(!1),a=Object(U.a)(t,2),o=a[0],c=a[1];return r.a.createElement("div",{className:X.a.uploadContainer},r.a.createElement("h2",{className:X.a.title},"You can upload new picture"),o?r.a.createElement(te,{closeForm:function(){c(!1)},onSubmit:function(t,a){e.addPost(t.src,t.comment),a(Object(ae.a)("formUpload"))}}):r.a.createElement("button",{className:X.a.button,onClick:function(){return c(!0)}},"Download new picture"))})),re=a(82),oe=a.n(re),ce=function(e){return r.a.createElement("div",{onClick:function(t){"IMG"!==t.target.tagName&&e.history.goBack()},className:oe.a.container},e.gallery.showImage?r.a.createElement("img",{src:e.gallery.showImage[0].src,className:oe.a.img,alt:""}):r.a.createElement(y.a,{to:"/"}))},le=Object(i.c)(Object(l.b)((function(e){return{gallery:e.gallery}}),{}),y.f)(ce),ie=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(C,null),r.a.createElement(W,null),r.a.createElement(ne,null),r.a.createElement(I,null),r.a.createElement(y.b,{path:"/id:id?",render:function(){return r.a.createElement(le,null)}})))},me=function(e){return r.a.createElement(N.a,null,r.a.createElement(l.a,{store:h},r.a.createElement(ie,null)))};c.a.render(r.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,t,a){e.exports={error:"FormsControl_error__zC0ju",formControl:"FormsControl_formControl__2aXFM",errorContainer:"FormsControl_errorContainer__OhTDI"}},73:function(e,t,a){e.exports={header:"Header_header__UkIpa",title:"Header_title__3CVSq"}},74:function(e,t,a){e.exports={footer:"Footer_footer__13mzJ",title:"Footer_title__1M8pG"}},75:function(e,t,a){e.exports={body:"Body_body___fZLh",title:"Body_title__2Sl7v"}},76:function(e,t,a){e.exports={container:"BodyContainer_container__1He3P",errorMessages:"BodyContainer_errorMessages__sf56y"}},82:function(e,t,a){e.exports={container:"item_container__LkAnZ",img:"item_img__33I1w"}},9:function(e,t,a){e.exports={uploadContainer:"UploadForm_uploadContainer__114H0",input:"UploadForm_input__Nvlbj",textarea:"UploadForm_textarea__2IFE7",label:"UploadForm_label__2M1j7",form:"UploadForm_form__Pp6aY",item:"UploadForm_item__AQjU8",title:"UploadForm_title__2aOL3",button:"UploadForm_button__3gLZR",buttonContainer:"UploadForm_buttonContainer__3sC-Q"}}},[[138,1,2]]]);
//# sourceMappingURL=main.bf41bc8f.chunk.js.map
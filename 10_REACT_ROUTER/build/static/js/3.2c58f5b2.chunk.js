(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{47:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},48:function(e,t,c){e.exports={comments:"Comments_comments__iZX-v"}},49:function(e,t,c){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},50:function(e,t,c){e.exports={item:"CommentItem_item__24mbD"}},51:function(e,t,c){e.exports={comments:"CommentsList_comments__valp0"}},53:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(2),o=c(8),a=c(47),r=c.n(a),m=c(0),j=function(e){return Object(m.jsxs)("figure",{className:r.a.quote,children:[Object(m.jsx)("p",{children:e.text}),Object(m.jsx)("figcaption",{children:e.author})]})},i=c(22),d=c(48),l=c.n(d),u=c(49),b=c.n(u),x=c(20),O=c(21),h=c(14),f=function(e){Object(s.h)(),Object(s.k)();var t=Object(n.useRef)(),c=e.onAddedComment,o=e.quoteId,a=Object(x.a)(O.a),r=a.sendRequest,j=a.status,i=a.error;Object(n.useEffect)((function(){"completed"!==j||i||(t.current.value="",c())}),[j,i,c]);var d=function(e){e.preventDefault();var c=t.current.value;r({commentData:{text:c},quoteId:o})};return Object(m.jsxs)("form",{className:b.a.form,onSubmit:d,children:["pending"===j&&Object(m.jsx)("div",{className:"centered",children:Object(m.jsx)(h.a,{})}),Object(m.jsxs)("div",{className:b.a.control,onSubmit:d,children:[Object(m.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(m.jsx)("textarea",{required:!0,id:"comment",rows:"5",ref:t})]}),Object(m.jsx)("div",{className:b.a.actions,children:Object(m.jsx)("button",{className:"btn",children:"Add Comment"})})]})},p=c(50),_=c.n(p),N=function(e){return Object(m.jsx)("li",{className:_.a.item,children:Object(m.jsx)("p",{children:e.text})})},v=c(51),C=c.n(v),g=function(e){return Object(m.jsx)("ul",{className:C.a.comments,children:e.comments.map((function(e){return Object(m.jsx)(N,{text:e.text},e.id)}))})},q=function(){var e,t=Object(s.j)(),c=Object(n.useState)(!1),o=Object(i.a)(c,2),a=o[0],r=o[1],j=t.quoteId,d=Object(x.a)(O.c),u=d.sendRequest,b=d.status,p=d.data;Object(n.useEffect)((function(){u(j)}),[j]),console.log(b),"pending"===b&&(e=Object(m.jsx)("div",{className:"centered",children:Object(m.jsx)(h.a,{})})),"completed"===b&&p.length>0&&(e=Object(m.jsx)(g,{comments:p})),"completed"!==b||p||0!==p.length||(e=Object(m.jsx)("p",{className:"centered",children:"No Comments were added yet!"}));var _=Object(n.useCallback)((function(){u(j)}),[u,j]);return Object(m.jsxs)("section",{className:l.a.comments,children:[Object(m.jsx)("h2",{children:"User Comments"}),!a&&Object(m.jsx)("button",{className:"btn",onClick:function(){r(!0)},children:"Add a Comment"}),a&&Object(m.jsx)(f,{quoteId:j,onAddedComment:_}),e]})};t.default=function(){var e=Object(s.j)(),t=Object(s.k)(),c=e.quoteId,a=Object(x.a)(O.e,!0),r=a.sendRequest,i=a.status,d=a.data,l=a.error;return Object(n.useEffect)((function(){r(c)}),[r,c]),"pending"===i?Object(m.jsx)("div",{className:"centered",children:Object(m.jsx)(h.a,{})}):l?Object(m.jsx)("p",{className:"centered focused",children:l}):d.text?(console.log(t),Object(m.jsxs)(n.Fragment,{children:[Object(m.jsx)(j,{text:d.text,author:d.author}),Object(m.jsx)(s.c,{path:"".concat(t.path),exact:!0,children:Object(m.jsx)("div",{className:"centered",children:Object(m.jsx)(o.b,{className:"btn--flat",to:"".concat(t.url,"/comments"),children:"Load Comments"})})}),Object(m.jsx)(s.c,{path:"".concat(t.path,"/comments"),children:Object(m.jsx)(q,{})})]})):Object(m.jsx)("p",{children:"No quote found!"})}}}]);
//# sourceMappingURL=3.2c58f5b2.chunk.js.map
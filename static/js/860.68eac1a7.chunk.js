"use strict";(self.webpackChunkredux_test=self.webpackChunkredux_test||[]).push([[860],{9059:function(n,e,o){o.d(e,{Z:function(){return s}});var i=o(2007),r=o.n(i),a=o(5985),s=function(){var n=function(n){var e=n.info;a.Am.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})};return n.propTypes={info:r().string.isRequired},{addToast:n}}},9860:function(n,e,o){o.r(e),o.d(e,{default:function(){return k}});var i,r,a,s,t,d,l=o(9434),p=o(8724),u=o(1087),m=o(5705),c=o(1724),x=o(9059),g=o(168),h=o(6444),b=(0,h.ZP)(m.l0)(i||(i=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 560px;\n  margin: 0 auto;\n  gap: 16px;\n  color: red;\n  padding: 24px 0;\n"]))),f=(0,h.ZP)(m.gN)(r||(r=(0,g.Z)(["\n  padding: 4px 12px;\n  width: 100%;\n  border-radius: 8px;\n  outline: none;\n  border: none;\n  box-sizing: border-box;\n\n  position: relative;\n"]))),v=(0,h.ZP)(m.Bc)(a||(a=(0,g.Z)(["\n  font-size: 10px;\n  position: absolute;\n"]))),w=h.ZP.button(s||(s=(0,g.Z)(["\n  padding: 8px 12px;\n  border-radius: 8px;\n  color: var(--button-color);\n  background-color: var(--text-color);\n  border: none;\n  cursor: pointer;\n"]))),Z=h.ZP.div(t||(t=(0,g.Z)(["\n  position: relative;\n"]))),j=h.ZP.a(d||(d=(0,g.Z)(["\n  margin: 0 auto;\n  text-decoration: none;\n  color: var(--text-color);\n  font-size: 12px;\n  padding: 4px 8px;\n"]))),P=o(184),q=c.Ry().shape({name:c.Z_().required("Login name required").min(4,"Login name is too short").max(32,"Login name is too long"),password:c.Z_().required("Password required").min(4,"Password is too short, min 4 digits").max(32,"Password is too long, max 32 digits"),email:c.Z_().required("E-mail required").min(4,"E-mail is too short").max(32,"E-mail is too long")}),y={name:"",password:"",email:""},k=function(){var n=(0,l.I0)(),e=(0,x.Z)().addToast;return(0,P.jsx)(m.J9,{initialValues:y,validationSchema:q,onSubmit:function(o,i){var r=i.resetForm,a=o.name,s=o.email,t=o.password;n((0,p.z2)({name:a,email:s,password:t})),r(),e({info:"".concat(a.toUpperCase()," welcome to the app")})},children:function(n){var e=n.isSubmitting;return(0,P.jsxs)(b,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(f,{label:"Login",type:"text",name:"name",required:!0,placeholder:"input your login"}),(0,P.jsx)(v,{name:"name",component:"div"})]}),(0,P.jsxs)(Z,{children:[(0,P.jsx)(f,{label:"Password",name:"password",type:"password",required:!0,placeholder:"input your password"}),(0,P.jsx)(v,{name:"password",component:"div"})]}),(0,P.jsxs)(Z,{children:[(0,P.jsx)(f,{label:"E-mail",name:"email",type:"email",required:!0,placeholder:"input your e-mail"}),(0,P.jsx)(v,{name:"email",component:"div"})]}),(0,P.jsx)(w,{type:"submit",disabled:e,children:"Sign up"}),(0,P.jsx)(j,{as:u.rU,to:"/login",children:"Go Back"})]})}})}}}]);
//# sourceMappingURL=860.68eac1a7.chunk.js.map
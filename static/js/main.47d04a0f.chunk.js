(this.webpackJsonpcouter=this.webpackJsonpcouter||[]).push([[0],[,,function(e,a,n){e.exports={counter_wrapper:"Display_counter_wrapper__2b6ux",simple_number:"Display_simple_number__3T_kI",end_number:"Display_end_number__2GoAj",error:"Display_error__5keDu",help_message:"Display_help_message__1L9Cb"}},,,function(e,a,n){e.exports={button_wrapper:"Button_button_wrapper__5jH1p",button:"Button_button__1vtEv",disabled:"Button_disabled__KXQmA"}},function(e,a,n){e.exports={number:"Input_number__1Z4QO",input:"Input_input__37-So",error:"Input_error__3zDPf"}},,,function(e,a,n){e.exports={main_container:"Counter_main_container__2lVPW index_counter_wrapper__27AU6",button_wrapper:"Counter_button_wrapper__uflA9 index_btn_counter_wrapper__22DcX"}},,,function(e,a,n){e.exports={main_container:"CounterSettings_main_container__3hRtG index_counter_wrapper__27AU6",button_wrapper:"CounterSettings_button_wrapper__2t_c7 index_btn_counter_wrapper__22DcX"}},,,function(e,a,n){e.exports={counter_wrapper:"SettingsDisplay_counter_wrapper__15hN1"}},function(e,a,n){e.exports=n(29)},,,,,function(e,a,n){},function(e,a,n){},,,,,,,function(e,a,n){"use strict";n.r(a);var t,r=n(0),u=n.n(r),c=n(7),l=n.n(c),o=(n(21),n(22),n(2)),i=n.n(o),s=function(e){var a=e.maxNum,n=e.currentValue,t=e.helpMessage,r=t.includes("incorrect")?"".concat(i.a.error," ").concat(i.a.simple_number):"".concat(i.a.help_message," ").concat(i.a.simple_number),c=n===a?"".concat(i.a.end_number," ").concat(i.a.simple_number):i.a.simple_number;return u.a.createElement("div",{className:i.a.counter_wrapper},0!==t.length?u.a.createElement("p",{className:r},t):u.a.createElement("span",{className:c},n))},m=n(5),_=n.n(m),p=function(e){return u.a.createElement("div",{className:_.a.button_wrapper},u.a.createElement("button",{className:e.disabled?"".concat(_.a.disabled," ").concat(_.a.button):_.a.button,onClick:e.callback,disabled:e.disabled},e.title))},E=n(9),b=n.n(E),V=n(3);!function(e){e.INCREASE_NUMBER="Counter/INCREASE_NUMBER",e.RESET_NUMBER="Counter/RESET_NUMBER",e.SET_VALUE="Counter/SET_VALUE",e.SET_MAX_VALUE="Counter/SET_MAX_VALUE",e.SET_MIN_VALUE="Counter/SET_MIN_VALUE"}(t||(t={}));var d=function(){var e=Object(V.b)(),a=Object(V.c)((function(e){return e.counter}));return u.a.createElement("div",{className:b.a.main_container},u.a.createElement(s,{currentValue:a.currentValue,helpMessage:a.helpMessage,maxNum:a.maxValue}),u.a.createElement("div",{className:b.a.button_wrapper},u.a.createElement(p,{callback:function(){return e({type:t.INCREASE_NUMBER})},title:"start",disabled:!(!a.helpMessage&&a.currentValue!==a.maxValue)}),u.a.createElement(p,{callback:function(){return e({type:t.RESET_NUMBER})},title:"reset",disabled:!(!a.helpMessage&&a.currentValue!==a.minValue)})))},v=n(15),g=n.n(v),h=n(6),N=n.n(h),f=function(e){var a=e.value,n=e.callback,t=e.className,r=e.label;return u.a.createElement("div",{className:N.a.number},u.a.createElement("label",null,r,u.a.createElement("input",{type:"number",value:a,onChange:function(e){return n(+e.currentTarget.value)},className:t?"".concat(N.a.error," ").concat(N.a.input):N.a.input})))},M=function(e){var a=e.maxNum,n=e.minNum,t=e.helpMessage,r=e.changeMaxValue,c=e.changeMinValue;return u.a.createElement("div",{className:g.a.counter_wrapper},u.a.createElement(f,{value:a,callback:r,className:t,label:"max value:"}),u.a.createElement(f,{value:n,callback:c,className:t,label:"min value:"}))},x=n(12),w=n.n(x),S=function(){var e=Object(V.b)(),a=Object(V.c)((function(e){return e.counter})),n={min:a.minValue,max:a.maxValue};Object(r.useEffect)((function(){!function(e,a){var n=JSON.stringify(a);localStorage.setItem(e,n)}("start value",{min:n.min,max:n.max})}),[a.minValue,a.maxValue]);return u.a.createElement("div",{className:w.a.main_container},u.a.createElement(M,{maxNum:a.maxValue,minNum:a.minValue,helpMessage:a.helpMessage.includes("incorrect"),changeMaxValue:function(a){return e(function(e){return{type:t.SET_MAX_VALUE,payload:{inputValue:e}}}(a))},changeMinValue:function(a){return e(function(e){return{type:t.SET_MIN_VALUE,payload:{inputValue:e}}}(a))}}),u.a.createElement("div",{className:w.a.button_wrapper},u.a.createElement(p,{callback:function(){return e({type:t.SET_VALUE})},title:"set",disabled:0===a.helpMessage.length||a.helpMessage.includes("incorrect")})))},A=function(){return u.a.createElement("div",{className:"App"},u.a.createElement(S,null),u.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=n(4),y=n(1),O={minValue:0,maxValue:5,currentValue:0,helpMessage:""},j=Object(U.b)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case t.RESET_NUMBER:return Object(y.a)(Object(y.a)({},e),{},{currentValue:e.minValue});case t.INCREASE_NUMBER:return Object(y.a)(Object(y.a)({},e),{},{currentValue:e.currentValue+1});case t.SET_MAX_VALUE:var n=Object(y.a)({},e),r=a.payload.inputValue;return r<=n.minValue||n.minValue<0?(n.helpMessage="incorrect value",n.maxValue=r):(n.helpMessage="enter values and press 'set'",n.maxValue=r),n;case t.SET_MIN_VALUE:var u=Object(y.a)({},e),c=a.payload.inputValue;return c>=u.maxValue||c<0?(u.helpMessage="incorrect value",u.minValue=c):(u.helpMessage="enter values and press 'set'",u.minValue=c),u;case t.SET_VALUE:return Object(y.a)(Object(y.a)({},e),{},{currentValue:e.currentValue=e.minValue,helpMessage:e.helpMessage=""});default:var l=function(e,a){var n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a},o=l("start value",{min:e.minValue,max:e.maxValue});return Object(y.a)(Object(y.a)({},e),{},{maxValue:o.max,minValue:o.min,currentValue:o.min})}}}),T=Object(U.c)(j);window.store=T,l.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(V.a,{store:T},u.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.47d04a0f.chunk.js.map
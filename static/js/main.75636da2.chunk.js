(this.webpackJsonpcouter=this.webpackJsonpcouter||[]).push([[0],[,,,function(e,a,n){e.exports={counter_wrapper:"Display_counter_wrapper__2b6ux",simple_number:"Display_simple_number__3T_kI",end_number:"Display_end_number__2GoAj",error:"Display_error__5keDu",help_message:"Display_help_message__1L9Cb"}},,function(e,a,n){e.exports={button_wrapper:"Button_button_wrapper__5jH1p",button:"Button_button__1vtEv",disabled:"Button_disabled__KXQmA"}},function(e,a,n){e.exports={number:"Input_number__1Z4QO",input:"Input_input__37-So",error:"Input_error__3zDPf"}},,,function(e,a,n){e.exports={main_container:"Counter_main_container__2lVPW index_counter_wrapper__27AU6",button_wrapper:"Counter_button_wrapper__uflA9 index_btn_counter_wrapper__22DcX"}},,,function(e,a,n){e.exports={main_container:"CounterSettings_main_container__3hRtG index_counter_wrapper__27AU6",button_wrapper:"CounterSettings_button_wrapper__2t_c7 index_btn_counter_wrapper__22DcX"}},,,function(e,a,n){e.exports={counter_wrapper:"SettingsDisplay_counter_wrapper__15hN1"}},function(e,a,n){e.exports=n(29)},,,,,function(e,a,n){},function(e,a,n){},,,,,,,function(e,a,n){"use strict";n.r(a);var t,r=n(0),u=n.n(r),c=n(7),l=n.n(c),o=(n(21),n(22),n(3)),s=n.n(o),i=function(e){var a=e.maxNum,n=e.currentValue,t=e.helpMessage,r=t.includes("incorrect")?"".concat(s.a.error," ").concat(s.a.simple_number):"".concat(s.a.help_message," ").concat(s.a.simple_number),c=n===a?"".concat(s.a.end_number," ").concat(s.a.simple_number):s.a.simple_number;return u.a.createElement("div",{className:s.a.counter_wrapper},0!==t.length?u.a.createElement("p",{className:r},t):u.a.createElement("span",{className:c},n))},m=n(5),_=n.n(m),p=u.a.memo((function(e){return console.log("Button Component rerender"),u.a.createElement("div",{className:_.a.button_wrapper},u.a.createElement("button",{className:e.disabled?"".concat(_.a.disabled," ").concat(_.a.button):_.a.button,onClick:e.callback,disabled:e.disabled},e.title))})),b=n(9),E=n.n(b),d=n(2);!function(e){e.INCREASE_NUMBER="Counter/INCREASE_NUMBER",e.RESET_NUMBER="Counter/RESET_NUMBER",e.SET_VALUE="Counter/SET_VALUE",e.SET_MAX_VALUE="Counter/SET_MAX_VALUE",e.SET_MIN_VALUE="Counter/SET_MIN_VALUE"}(t||(t={}));var V=u.a.memo((function(){console.log("Counter DisplayComponent rerender");var e=Object(d.b)(),a=Object(d.c)((function(e){return e.counter})),n=Object(r.useCallback)((function(){return e({type:t.INCREASE_NUMBER})}),[e]),c=Object(r.useCallback)((function(){return e({type:t.RESET_NUMBER})}),[e]);return u.a.createElement("div",{className:E.a.main_container},u.a.createElement(i,{currentValue:a.currentValue,helpMessage:a.helpMessage,maxNum:a.maxValue}),u.a.createElement("div",{className:E.a.button_wrapper},u.a.createElement(p,{callback:n,title:"start",disabled:!(!a.helpMessage&&a.currentValue!==a.maxValue)}),u.a.createElement(p,{callback:c,title:"reset",disabled:!(!a.helpMessage&&a.currentValue!==a.minValue)})))})),g=n(15),v=n.n(g),f=n(6),h=n.n(f),N=u.a.memo((function(e){var a=e.value,n=e.callback,t=e.className,r=e.label;return console.log("Input Component rerender"),u.a.createElement("div",{className:h.a.number},u.a.createElement("label",null,r,u.a.createElement("input",{type:"number",value:a,onChange:function(e){return n(+e.currentTarget.value)},className:t?"".concat(h.a.error," ").concat(h.a.input):h.a.input})))})),M=u.a.memo((function(e){var a=e.maxNum,n=e.minNum,t=e.helpMessage,r=e.changeMaxValue,c=e.changeMinValue;return u.a.createElement("div",{className:v.a.counter_wrapper},u.a.createElement(N,{value:a,callback:r,className:t,label:"max value:"}),u.a.createElement(N,{value:n,callback:c,className:t,label:"min value:"}))})),x=n(12),w=n.n(x),S=u.a.memo((function(){console.log("Counter Configurations rerender");var e=function(){var e=Object(d.b)();return function(a){return e(a)}}(),a=Object(d.c)((function(e){return e.counter})),n={min:a.minValue,max:a.maxValue};Object(r.useEffect)((function(){!function(e,a){var n=JSON.stringify(a);localStorage.setItem(e,n)}("start value",{min:n.min,max:n.max})}),[a.minValue,a.maxValue]);var c=Object(r.useCallback)((function(){return e({type:t.SET_VALUE})}),[e]),l=Object(r.useCallback)((function(a){return e(function(e){return{type:t.SET_MAX_VALUE,payload:{inputValue:e}}}(a))}),[e]),o=Object(r.useCallback)((function(a){return e(function(e){return{type:t.SET_MIN_VALUE,payload:{inputValue:e}}}(a))}),[e]);return u.a.createElement("div",{className:w.a.main_container},u.a.createElement(M,{maxNum:a.maxValue,minNum:a.minValue,helpMessage:a.helpMessage.includes("incorrect"),changeMaxValue:l,changeMinValue:o}),u.a.createElement("div",{className:w.a.button_wrapper},u.a.createElement(p,{callback:c,title:"set",disabled:0===a.helpMessage.length||a.helpMessage.includes("incorrect")})))})),C=function(){return u.a.createElement("div",{className:"App"},u.a.createElement(S,null),u.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=n(4),O=n(1),j={minValue:0,maxValue:5,currentValue:0,helpMessage:""},U=Object(A.b)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case t.RESET_NUMBER:return Object(O.a)(Object(O.a)({},e),{},{currentValue:e.minValue});case t.INCREASE_NUMBER:return Object(O.a)(Object(O.a)({},e),{},{currentValue:e.currentValue+1});case t.SET_MAX_VALUE:var n=Object(O.a)({},e),r=a.payload.inputValue;return r<=n.minValue||n.minValue<0?(n.helpMessage="incorrect value",n.maxValue=r):(n.helpMessage="enter values and press 'set'",n.maxValue=r),n;case t.SET_MIN_VALUE:var u=Object(O.a)({},e),c=a.payload.inputValue;return c>=u.maxValue||c<0?(u.helpMessage="incorrect value",u.minValue=c):(u.helpMessage="enter values and press 'set'",u.minValue=c),u;case t.SET_VALUE:return Object(O.a)(Object(O.a)({},e),{},{currentValue:e.currentValue=e.minValue,helpMessage:e.helpMessage=""});default:var l=function(e,a){var n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a},o=l("start value",{min:e.minValue,max:e.maxValue});return Object(O.a)(Object(O.a)({},e),{},{maxValue:o.max,minValue:o.min,currentValue:o.min})}}}),y=Object(A.c)(U);window.store=y,l.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(d.a,{store:y},u.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.75636da2.chunk.js.map
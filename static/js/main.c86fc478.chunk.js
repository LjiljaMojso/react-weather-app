(this["webpackJsonpthe-ultimate-api-challenge-weather-app-react"]=this["webpackJsonpthe-ultimate-api-challenge-weather-app-react"]||[]).push([[0],{11:function(e,t,a){e.exports={card:"CurrentDay_card__LpomE",cardInner:"CurrentDay_cardInner__6uC6s",gradient:"CurrentDay_gradient__1LWog",img:"CurrentDay_img__1KF6h",weekday:"CurrentDay_weekday___fuKU"}},14:function(e,t,a){e.exports={heading:"Header_heading__-qPFq",light:"Header_light__2hFSc"}},15:function(e,t,a){e.exports={input:"Form_input__3nwG7",button:"Form_button__3tL0C"}},16:function(e,t,a){e.exports={card:"Forecast_card__1EeVb",box:"Forecast_box__QQF7T"}},27:function(e,t,a){e.exports={error:"Error_error__oqmmr"}},28:function(e,t,a){e.exports={box:"Loader_box__1qZ_N"}},29:function(e,t,a){e.exports={weekday:"UpcomingDaysForecastItem_weekday__MQv1z"}},30:function(e,t,a){e.exports={weekList:"UpcomingDaysForecast_weekList__1IZZ0"}},31:function(e,t,a){e.exports={box:"Page_box__4f40k"}},37:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(26),s=a.n(c),i=(a(36),a(37),a(14)),o=a.n(i),u=a(0),l=function(){return Object(u.jsxs)("h1",{className:o.a.heading,children:[Object(u.jsx)("span",{className:o.a.light,children:"Weather"})," Forecast"]})},d=a(9),b=a(15),m=a.n(b),j=function(e){var t=e.submitSearch,a=Object(n.useState)(""),r=Object(d.a)(a,2),c=r[0],s=r[1],i=function(e){e.preventDefault(),c&&""!==c&&t(c)};return Object(u.jsxs)("form",{onSubmit:i,children:[Object(u.jsx)("input",{"aria-label":"location",type:"text",className:"".concat(m.a.input," form-control"),placeholder:"Search for location",required:!0,value:c,onChange:function(e){return s(e.target.value)}}),Object(u.jsx)("button",{type:"submit",className:m.a.button,onClick:i,children:"SEARCH"})]})},h=a(27),p=a.n(h),x=function(e){var t=e.message;return Object(u.jsx)("div",{className:"".concat(p.a.error," alert position-absolute"),role:"alert",children:t})},f=a(28),w=a.n(f),O=function(){return Object(u.jsx)("div",{className:w.a.box,children:Object(u.jsxs)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"54px",height:"60px",viewBox:"0 0 24 30",children:[Object(u.jsx)("rect",{x:"0",y:"0",width:"3",height:"10",fill:"#333",children:Object(u.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0",dur:"0.6s",repeatCount:"indefinite"})}),Object(u.jsx)("rect",{x:"10",y:"0",width:"3",height:"10",fill:"#333",children:Object(u.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0.2s",dur:"0.6s",repeatCount:"indefinite"})}),Object(u.jsx)("rect",{x:"20",y:"0",width:"3",height:"10",fill:"#333",children:Object(u.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0.4s",dur:"0.6s",repeatCount:"indefinite"})})]})})},g=a(4),v=a(61),y=a(62),_=a(63),A=a(11),N=a.n(A),D=function(e){var t=e.weekday,a=e.date,n=e.location,r=e.temperature,c=e.weatherIcon,s=e.weatherDescription;return Object(u.jsxs)("div",{className:"d-flex",children:[Object(u.jsx)("div",{className:N.a.img}),Object(u.jsx)("div",{className:N.a.gradient}),Object(u.jsxs)("div",{className:"".concat(N.a.cardInner," d-flex flex-column justify-content-between pt-3 pb-2 pl-2"),children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"font-weight-bold mb-1",children:t}),Object(u.jsx)("p",{className:"mb-0",children:a}),Object(u.jsxs)("p",{className:"d-flex align-items-baseline font-weight-lighter mb-1",children:[Object(u.jsx)("img",{width:"10",hight:"15",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABHCAAAAABgu0sfAAAAAnRSTlMAAHaTzTgAAAKXSURBVHgBldQDtyNLFMXx/eln4RljW89vbNtzbdtW8p/qpHWq+6ZyfwvtrrNLKnPi3XQVmP9yQU25PUfO8lMF7F+gYP2iGlijVOWkdtFD3crLQ6r55VFS5LRKVYls35JxZY2awyo4QaRyVgU/1T+6I895Iu9U6iaRxzJOEtGutnEeKK+WQg0s4JwIfWHN2jI6cBSwCcybRhSE85fqVoBXyjk8Ss3MJTNC2Z/3AxVlDuyQ+VOZOeBWenZKqTaMSakYwPbWGJFK78N7HVtE1pSaBH6Kh/a6El9x1vfnSmFKid+BDknTgLlJh1JPcG74lQFLSmwB7cq5j2OWR312vVDsALAhYwK4rdgl4D+9BY4o1g/slwWs5i/aNQU0nAZL3gsLqnh3BuR57r1QFd6d1/JcAg6aMvxPXslzEThsPql6n/TI86hQ2Ezhjsd/YVEfgQOKjQLyAFv5i26dA54pdgpYktGb31vOAjfirs7He1G+riJd9Yt5wG5nz5W6av8Rf/8Q+EeJIZxZxQYx0+V7oF+OnYrLRFZfX738ZJ4apUaS+bhiN+kJjLWyhXzWdKP0Pyk7f8aznNvAPeVcW6Fm66lyDuSqPIwjz7598lSAu/ldZUwBj239dlsvh/OTUnfDu/Kov/w2gM9qYD+ODP9OWfaHMtqAlcbZt8vSXW+Y/Vd5zuE0yj6sgmlgSD5/3C2cA7tmf6AST3DKH/jZzbb/RuHs4cEZtSGtbmAxnN3A+TuY3fgDJ5zdmAd6Cw3/ElwVP4eyWy+BnXD2Qtrn5uq+An7L//dhnD2gH5i12YNwLioyHGcP+hfH1hi0DHRK2jHjHi6tnn1HTXoPzNTK+l3NIjaiph2hTnswSuSR9gI/e9iN4noP6uOVyn0DXHepivCQVPgAAAAASUVORK5CYII=",alt:"location pin icon",className:"mr-1"}),Object(u.jsx)("span",{children:n})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:c,alt:"",width:"45"}),Object(u.jsx)("h2",{className:"font-weight-bold mb-1",children:Object(u.jsx)("span",{children:r})}),Object(u.jsx)("h5",{className:"font-weight-lighter",children:s})]})]})]})},k=function(e){var t=e.name,a=e.value,n=e.unit;return Object(u.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(u.jsx)("p",{className:"mb-0 font-weight-bolder text-uppercase",children:t}),Object(u.jsxs)("p",{className:"mb-0",children:[a," ",n]})]})},S=function(e){var t=e.forecast;return Object(u.jsx)("div",{className:"mt-4 mt-md-2",children:Object(u.jsx)("div",{className:"d-flex flex-column mb-2",children:t.map((function(e){return Object(n.createElement)(k,Object(g.a)(Object(g.a)({},e),{},{key:e.name}))}))})})},F=a(29),L=a.n(F),T=function(e){var t=e.weekday,a=e.temperature,n=e.imgUrl;return Object(u.jsxs)("li",{className:"".concat(L.a.weekday," d-flex flex-column justify-content-center align-items-center p-2"),children:[Object(u.jsx)("img",{className:"mb-2",width:"30",src:"".concat("https://www.metaweather.com/static/","img/weather/").concat(n,".svg"),alt:""}),Object(u.jsx)("span",{children:t}),Object(u.jsx)("span",{children:a})]})},C=a(30),E=a.n(C),H=function(e){var t=e.days;return Object(u.jsx)("ul",{className:"".concat(E.a.weekList," d-flex justify-content-between p-0"),children:t.map((function(e){return Object(n.createElement)(T,Object(g.a)(Object(g.a)({},e),{},{key:e.weekday}))}))})},V=a(16),I=a.n(V),K=function(e){var t=e.forecast;return Object(u.jsx)(v.a,{className:I.a.box,children:Object(u.jsxs)(y.a,{children:[Object(u.jsx)(_.a,{xs:12,md:4,children:Object(u.jsx)("div",{className:I.a.card,children:Object(u.jsx)(D,Object(g.a)({},t.currentDay))})}),Object(u.jsxs)(_.a,{xs:12,md:8,className:"d-flex flex-column justify-content-between",children:[Object(u.jsx)(S,{forecast:t.currentDayDetails}),Object(u.jsx)(H,{days:t.upcamingDays})]})]})})},P=a(5),Q=a.n(P),q=a(12),M=a(17),R=a.n(M),W=a(10),B=a.n(W),U=function(e,t){return{weekday:B()(e.applicable_date).format("dddd"),date:B()(e.applicable_date).format("MMMM Do"),location:t,temperature:Math.round(e.the_temp),weatherIcon:"'https://www.metaweather.com/static/img/weather/".concat(e.weather_state_abbr,".svg"),weatherDescription:e.weather_state_name}},Z=function(e){return[{name:"predictability",value:e.predictability,unit:"%"},{name:"humidity",value:e.humidity,unit:"%"},{name:"wind",value:Math.round(e.wind_speed),unit:"km/h"},{name:"air pressure",value:e.air_pressure,unit:"mb"},{name:"max temp",value:Math.round(e.max_temp),unit:"\xb0C"},{name:"min temp",value:Math.round(e.min_temp),unit:"\xb0C"}]},Y=function(e){return e.slice(1).map((function(e){return{imgUrl:e.weather_state_abbr,temperature:Math.round(e.max_temp),weekday:(t=e.applicable_date,B()(t).format("dddd").substring(0,3))};var t}))},J="".concat("https://the-ultimate-api-challenge.herokuapp.com","/").concat("https://www.metaweather.com/api/location"),z=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(d.a)(c,2),i=s[0],o=s[1],u=Object(n.useState)(null),l=Object(d.a)(u,2),b=l[0],m=l[1],j=function(){var e=Object(q.a)(Q.a.mark((function e(t){var a,n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R()("".concat(J,"/search"),{params:{query:t}});case 2:if(a=e.sent,(n=a.data)&&0!==n.lenght){e.next=8;break}return r("There is no such location"),o(!1),e.abrupt("return");case 8:return console.log(n),e.abrupt("return",n[0]);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(q.a)(Q.a.mark((function e(t){var a,n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R()("".concat(J,"/").concat(t));case 2:if(a=e.sent,(n=a.data)&&0!==n.lenght){e.next=8;break}return r("Something went wrong"),o(!1),e.abrupt("return");case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=U(e.consolidated_weather[0],e.title),a=Z(e.consolidated_weather[0]),n=Y(e.consolidated_weather);m({currentDay:t,currentDayDetails:a,upcamingDays:n}),o(!1)};return{isError:a,isLoading:i,forecast:b,submitRequest:function(){var e=Object(q.a)(Q.a.mark((function e(t){var a,n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),r(!1),e.next=4,j(t);case 4:if(null===(a=e.sent)||void 0===a?void 0:a.woeid){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,h(a.woeid);case 9:if(n=e.sent){e.next=12;break}return e.abrupt("return");case 12:p(n),console.log(n);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},G=a(31),X=a.n(G),$=function(){var e=z(),t=e.isError,a=e.isLoading,r=e.forecast,c=e.submitRequest;return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(l,{}),!r&&Object(u.jsxs)("div",{className:"".concat(X.a.box," position-relative"),children:[!a&&Object(u.jsx)(j,{submitSearch:function(e){c(e)}}),t&&Object(u.jsx)(x,{message:t}),a&&Object(u.jsx)(O,{})]}),r&&Object(u.jsx)(K,{forecast:r})]})};var ee=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)($,{})})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(ee,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.c86fc478.chunk.js.map
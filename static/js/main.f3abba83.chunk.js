(this.webpackJsonpmatrioshtsdat=this.webpackJsonpmatrioshtsdat||[]).push([[0],{14:function(e,t,a){},8:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(3),u=a(1),i=a(6),r=a(5),h=a(0),c=a.n(h),d=a(4),s=a.n(d),m=(a(14),function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={value:""},l.handleChange=l.handleChange.bind(Object(u.a)(l)),l.handleSubmit=l.handleSubmit.bind(Object(u.a)(l)),l}return Object(l.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){alert("A name was submitted: "+this.state.value),e.preventDefault()}},{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("label",null,"Name:",c.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange})),c.a.createElement("input",{type:"submit",value:"Submit"}))}}]),a}(c.a.Component));var o=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={value:"Texto de entrada en area de texto "},l.handleChange=l.handleChange.bind(Object(u.a)(l)),l.handleSubmit=l.handleSubmit.bind(Object(u.a)(l)),l}return Object(l.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){document.getElementById("salida").value=this.state.value+"\nahora est\xe1 en area de texto de salida.",e.preventDefault()}},{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange}),c.a.createElement("div",null,c.a.createElement("input",{type:"submit",value:"Submit"})))}}]),a}(c.a.Component);s.a.render(c.a.createElement(m,null),document.getElementById("root1")),s.a.render(c.a.createElement(o,null),document.getElementById("root2"))}},[[8,1,2]]]);
//# sourceMappingURL=main.f3abba83.chunk.js.map
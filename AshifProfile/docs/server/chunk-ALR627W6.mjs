import './polyfills.server.mjs';
import{A as w,B as M,C as E,F as O,L as D,a as s,b as c,c as g,d as f,e as C,f as k,g as _,h as u,i,j as o,k as p,l as y,m as h,n as d,o as r,p as S,q as l,x as P,z as b}from"./chunk-OWD4YSBL.mjs";var T=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=s({type:t,selectors:[["app-header"]],standalone:!0,features:[l],decls:21,vars:0,consts:[[1,"nameColor"],[1,"links"],["target","_blank","href","https://linkedin.com/in/mohd-ashif-khan-5648a8194"],["src","assets/links/linkdein.png","alt",""],[1,"hidden-label"],["target","_blank","href","mailto:ashifkhansanchay@gmail.com"],["src","assets/links/email.png","alt",""],["target","_blank","href","assets/documents/Mohd Ashif Khan CV.pdf","download","Mohd Ashif Khan CV.pdf"],["src","assets/links/download.png","alt",""]],template:function(e,a){e&1&&(i(0,"h1"),r(1,"Hello ! I'm "),i(2,"span",0),r(3,"Mohd Ashif Khan."),o()(),i(4,"p"),r(5,"I am a dedicated .NET ERP Software Developer with nearly two years of experience delivering scalable and efficient ERP solutions. I excel in team collaboration, continuous learning, and leveraging the latest technologies to drive operational excellence and support business growth."),o(),i(6,"div",1)(7,"a",2),p(8,"img",3),i(9,"div",4),r(10,"linkedin"),o()(),i(11,"a",5),p(12,"img",6),i(13,"div",4),r(14,"email"),o()(),i(15,"a",7),p(16,"img",8),i(17,"div",4),r(18,"Download "),p(19,"br"),r(20," Resume"),o()()())},styles:['.links[_ngcontent-%COMP%]{display:flex;margin:25px;align-items:center}.nameColor[_ngcontent-%COMP%]{color:#9dc4df}a[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-decoration:none;position:relative;width:100px;margin:.25rem 1rem}a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px}a[_ngcontent-%COMP%]:before{content:"";opacity:0;transition:all .5s;position:absolute;background:radial-gradient(#223640 40%,transparent 70%);top:-25px;left:-25px;height:150px;width:150px;border-radius:100%;z-index:-5}a[_ngcontent-%COMP%]   div.hidden-label[_ngcontent-%COMP%]{opacity:0;transition:all .2s;color:#fff;font-size:.85rem}a[_ngcontent-%COMP%]:focus:before, a[_ngcontent-%COMP%]:focus   div.hidden-label[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover:before, a[_ngcontent-%COMP%]:hover   div.hidden-label[_ngcontent-%COMP%]{opacity:1}']})}}return t})();var A=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=s({type:t,selectors:[["app-experiance"]],standalone:!0,features:[l],decls:11,vars:0,consts:[[1,"dark-section"],[1,"jobs"],[1,"job"]],template:function(e,a){e&1&&(i(0,"section",0)(1,"h2"),r(2,"Experience"),o(),i(3,"div",1)(4,"div",2)(5,"h3"),r(6,"Junior Software Developer"),o(),i(7,"h4"),r(8,"Sanchay Tech Private Limited"),o(),i(9,"p"),r(10,"Improved software efficiency and system stability by troubleshooting complex .NET framework issues, developed secure and scalable solutions adhering to industry best practices, estimated timelines and tracked progress using Scrum methodology, and mentored junior developers to enhance their technical skills and foster a culture of continuous learning."),o()()()())}})}}return t})();function H(t,v){if(t&1){let n=y();i(0,"div",2),h("mousedown",function(){let a=c(n).index,x=d();return g(x.startDragging(a))})("mouseup",function(){c(n);let a=d();return g(a.stopDragging())}),r(1),o()}if(t&2){let n=v.$implicit,e=v.index,a=d();_("left",a.skillPositions[e][0])("top",a.skillPositions[e][1])("transform",a.skillPositions[e][2]),u("dragging",a.currentlyDragging!=null),f(),S(" ",n,`
`)}}var j=(()=>{class t{constructor(){this.skills=["ASP.NET MVC","ASP.NET Core","Web API Development","C#","JavaScript","HTML","CSS","Angular","Entity Framework","SQL Server","ERP Software"],this.skillPositions=[]}ngOnInit(){for(let n=0;n<this.skills.length;n++){let e=[n*(90/this.skills.length)+"%",(n+1)%3*33+"%",this.getRandomRotation()];this.skillPositions.push(e)}}getRandomRotation(){return`rotate(${Math.random()*30-15}deg)`}startDragging(n){this.currentlyDragging=n,console.log("start dragging")}mouseMove(n){console.log("mouse move"),this.currentlyDragging!==void 0&&(this.skillPositions[this.currentlyDragging][0]=n.pageX-70+"px",this.skillPositions[this.currentlyDragging][1]=n.pageY-30+"px",this.mouseX=n.pageX-70,this.mouseY=n.pageY-30)}stopDragging(){this.currentlyDragging=void 0}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=s({type:t,selectors:[["app-skills"]],standalone:!0,features:[l],decls:2,vars:3,consts:[[1,"skill-wrapper",3,"mousemove"],["class","skill",3,"left","top","transform","dragging","mousedown","mouseup",4,"ngFor","ngForOf"],[1,"skill",3,"mousedown","mouseup"]],template:function(e,a){e&1&&(i(0,"div",0),h("mousemove",function(N){return a.mouseMove(N)}),C(1,H,2,9,"div",1),o()),e&2&&(u("dragging",a.currentlyDragging!==void 0),f(),k("ngForOf",a.skills))},dependencies:[w,b],styles:[".skill-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:200px;margin:20px}.skill-wrapper.dragging[_ngcontent-%COMP%]{cursor:grabbing}.skill[_ngcontent-%COMP%]{position:absolute;background-color:#fff;color:#000;font-size:16px;border-radius:5px;min-width:80px;padding:4px;text-align:center;width:fit-content;display:block;cursor:grab;box-shadow:1px 1px #0000004d}.skill[_ngcontent-%COMP%]   .dragging[_ngcontent-%COMP%]{position:fixed}"]})}}return t})();var F=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=s({type:t,selectors:[["app-project"]],standalone:!0,features:[l],decls:15,vars:0,consts:[[1,"dark-section"],[1,"project"]],template:function(e,a){e&1&&(i(0,"section",0)(1,"h2"),r(2,"Projects"),o(),i(3,"div",1)(4,"div")(5,"h3"),r(6,"ShamaEduErp (2024 -present)"),o(),i(7,"p"),r(8,"Currently working on a School ERP software featuring a multi-tenant architecture to support multiple schools on a single platform with secure and isolated data management. The project utilizes JWT (JSON Web Tokens) for authentication, ensuring robust security across the application. The frontend is being developed using Angular for an interactive and responsive interface, while the backend is powered by .NET Core API for scalable and efficient handling of complex educational workflows. This solution aims to provide seamless integration, enhanced user experience, and adaptability for diverse educational needs."),o()()(),i(9,"div",1)(10,"div")(11,"h3"),r(12,"MY Portfolio (2024)"),o(),i(13,"p"),r(14,"Created an interactive Skills Management component in Angular, where users can drag and drop skills to customize their layout. Implemented dynamic positioning and random rotation of skills using Angular's built-in directives and event handling. Utilized mouse events to enable real-time drag-and-drop functionality, enhancing user experience. The project demonstrates expertise in building customizable UI components with Angular, handling state management, and implementing interactive features like drag-and-drop."),o()()()())},styles:[".project[_ngcontent-%COMP%]{display:flex}.project[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50%;object-fit:cover}"]})}}return t})();var R=(()=>{class t{constructor(){this.title="AshifProfile"}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=s({type:t,selectors:[["app-root"]],standalone:!0,features:[l],decls:5,vars:0,template:function(e,a){e&1&&(p(0,"app-skills"),i(1,"main"),p(2,"app-header")(3,"app-experiance")(4,"app-project"),o())},dependencies:[T,A,j,F],styles:["main[_ngcontent-%COMP%]{width:90%;margin:auto;color:#fff}"]})}}return t})();var I=[];var V={providers:[D(I),E()]};var J={providers:[O()]},z=P(V,J);var Y=()=>M(R,z),ce=Y;export{ce as a};
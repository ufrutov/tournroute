(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[129],{3773:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/city",function(){return c(8537)}])},8537:function(h,b,a){"use strict";a.r(b),a.d(b,{default:function(){return x}});var i=a(603),j=a(5893),k=a(7294),c=a(1664),l=a.n(c),d=a(9008),m=a.n(d),e=a(5675),n=a.n(e),o=a(1163),p=a(5922),q=a(2285),r=a(8394),s=a(7297),f=a(2125);function g(){var a=(0,s.Z)(["\n	min-height: 50vh;\n	display: flex;\n	align-items: center;\n	z-index: 1;\n"]);return g=function(){return a},a}var t=f.ZP.div.withConfig({componentId:"sc-f79257d0-0"})(g()),u=a(487),v=a(5141),w=a(3216),x=function(){var f=(0,o.useRouter)(),b=(0,i.Z)(k.useState(),2),a=b[0],s=b[1],c=(0,i.Z)(k.useState([]),2),d=c[0],x=c[1],e=(0,i.Z)(k.useState(!1),2),g=e[0],y=e[1],h=Array.from({length:12},function(b,a){return a+1});return k.useEffect(function(){if(f.isReady){var a=f.query.id;a&&p.Z.getEntry("city",a).then(function(a){s(a),p.Z.getData("place",0,{city:a.sys.id}).then(function(a){x(a.items),y(!0)})})}},[f.isReady]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(m(),{children:[(0,j.jsx)("title",{children:"TourAndRoute"}),(0,j.jsx)("meta",{name:"description",content:"TourAndRoute cities"}),(0,j.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,j.jsx)(v.Z,{}),(0,j.jsxs)("main",{children:[(0,j.jsx)(q.j,{children:a&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:"container position-absolute pt-4",children:[(0,j.jsx)("h1",{children:a.name}),(0,j.jsx)("h4",{children:a.country.name})]}),(0,j.jsx)(n(),{src:a.galleryCollection.items[0].url,loader:function(a){return a.src},layout:"fill"})]})}),(0,j.jsx)(r.W,{className:"container py-5",children:(0,j.jsx)("div",{className:"row g-4",children:g?d.length>0?d.map(function(a){return(0,j.jsx)(l(),{href:"place?id=".concat(a.sys.id),children:(0,j.jsx)(w.sF,{className:"col-lg-3 col-md-4 col-6",children:(0,j.jsxs)("div",{children:[(0,j.jsxs)(w.PY,{className:"p-4",children:[(0,j.jsx)("h2",{children:a.name}),(0,j.jsx)("p",{children:(0,j.jsx)("strong",{children:a.city.name})})]}),(0,j.jsx)(n(),{src:a.galleryCollection.items[0].url,loader:function(a){return a.src},layout:"fill"})]})})},a.sys.id)}):(0,j.jsx)(t,{children:(0,j.jsx)("h2",{className:"text-center",children:"No places here..."})}):h.map(function(a){return(0,j.jsx)(w.sF,{className:"col-lg-3 col-md-4 col-6",empty:!0,children:(0,j.jsx)("div",{children:(0,j.jsxs)(w.PY,{className:"p-4",children:[(0,j.jsx)(w.YK,{className:"p-3 mb-2"}),(0,j.jsx)(w.YK,{className:"p-2"})]})})},a)})})})]}),(0,j.jsx)(u.Z,{})]})}},487:function(d,b,a){"use strict";var e=a(5893);a(7294);var c=a(1664),f=a.n(c);b.Z=function(){return(0,e.jsx)("nav",{className:"navbar-dark bg-dark",children:(0,e.jsxs)("div",{className:"container py-5",children:[(0,e.jsxs)("div",{className:"row mb-4",children:[(0,e.jsx)("div",{className:"col-md-3 col-6",children:(0,e.jsx)(f(),{href:"/",children:(0,e.jsx)("a",{className:"navbar-brand",children:"TourAndRoute"})})}),(0,e.jsx)("div",{className:"col",children:(0,e.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[(0,e.jsx)("li",{className:"nav-item",children:(0,e.jsx)(f(),{href:"/",children:(0,e.jsx)("a",{className:"nav-link",children:"Legal"})})}),(0,e.jsx)("li",{className:"nav-item",children:(0,e.jsx)(f(),{href:"/",children:(0,e.jsx)("a",{className:"nav-link",children:"Privacy Policy"})})}),(0,e.jsx)("li",{className:"nav-item",children:(0,e.jsx)(f(),{href:"/",children:(0,e.jsx)("a",{className:"nav-link",children:"About Us"})})})]})}),(0,e.jsx)("div",{className:"col",children:"Column"})]}),(0,e.jsx)("p",{className:"navbar-brand fs-6",children:(0,e.jsx)("small",{children:"TourAndRoute \xa9 2022"})})]})})}},5141:function(d,b,a){"use strict";var e=a(5893);a(7294);var c=a(1664),f=a.n(c);b.Z=function(){return(0,e.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:(0,e.jsx)("div",{className:"container",children:(0,e.jsx)(f(),{href:"/",children:(0,e.jsx)("a",{className:"navbar-brand",children:"TourAndRoute"})})})})}},2285:function(e,b,a){"use strict";a.d(b,{j:function(){return g}});var f=a(7297),c=a(2125);function d(){var a=(0,f.Z)(["\n	position: relative;\n	min-height: 150px;\n\n	.container {\n		left: 50%;\n		transform: translateX(-50%);\n		z-index: 1;\n		color: #fff;\n	}\n\n	& > span {\n		min-height: 400px !important;\n	}\n\n	& img {\n		object-fit: cover;\n	}\n"]);return d=function(){return a},a}var g=c.ZP.div.withConfig({componentId:"sc-b4e71744-0"})(d())},8394:function(f,c,a){"use strict";a.d(c,{W:function(){return h},n:function(){return i}});var g=a(7297),b=a(2125);function d(){var a=(0,g.Z)(["\n	min-height: 100vh;\n"]);return d=function(){return a},a}function e(){var a=(0,g.Z)(["\n	position: relative;\n	background-color: #ffffff;\n"]);return e=function(){return a},a}var h=b.ZP.div.withConfig({componentId:"sc-29c5056d-0"})(d()),i=b.ZP.div.withConfig({componentId:"sc-29c5056d-1"})(e())},3216:function(j,d,b){"use strict";b.d(d,{sF:function(){return l},YK:function(){return n},PY:function(){return m}});var k=b(7297),a=b(2125),c="768px";function e(){var a=(0,k.Z)(["\n	display: block;\n	min-height: ","px;\n	cursor: pointer;\n\n	@media (min-width: ",") {\n		min-height: ","px;\n	}\n\n	& > div {\n		position: relative;\n		height: 100%;\n\n		background-color: ",";\n	}\n\n	& img {\n		object-fit: cover;\n		transition: transform 1s;\n	}\n\n	&:hover img {\n		transform: scale(1.15);\n	}\n"]);return e=function(){return a},a}function f(){var a=(0,k.Z)(["\n	position: absolute;\n	left: 0;\n	bottom: 0;\n	width: 100%;\n	z-index: 1;\n	color: #ffffff;\n	background: linear-gradient(\n		0deg,\n		rgba(0, 0, 0, 0.5) 0%,\n		rgba(0, 0, 0, 0.3) 35%,\n		rgba(0, 0, 0, 0) 100%\n	);\n\n	& > h2 {\n		font-weight: 600;\n		margin-bottom: 0.1rem;\n\n		@media (max-width: ",") {\n			font-size: 1.25rem;\n		}\n	}\n\n	& > p {\n		margin: 0;\n	}\n"]);return f=function(){return a},a}function g(){var a=(0,k.Z)(["\n  0% { background-color: #dfdcdc; }\n  50% { background-color: #f3f3f3; }\n  100% { background-color: #dfdcdc; }\n"]);return g=function(){return a},a}function h(){var a=(0,k.Z)(["\n	border-radius: 6px;\n	animation: "," 4s infinite;\n"]);return h=function(){return a},a}var l=a.ZP.a.withConfig({componentId:"sc-d555459c-0"})(e(),function(b){var a=b.minHeight;return(void 0===a?[240,300]:a)[0]},c,function(b){var a=b.minHeight;return(void 0===a?[240,300]:a)[1]},function(a){return a.empty?"#f3f3f3":"#ffffff"}),m=a.ZP.div.withConfig({componentId:"sc-d555459c-1"})(f(),c),i=(0,a.F4)(g()),n=a.ZP.div.withConfig({componentId:"sc-d555459c-2"})(h(),i)},5922:function(d,b,a){"use strict";a.d(b,{Z:function(){return i}});var e=a(7568),f=a(1438),c=a(4051),g=a.n(c),h={name:"TourAndRoute",spaceID:"4ldhsh3zxfur",deliverTOKEN:"muZKwjJvwP5jz8Raxs0Adwb2pQ2PYBZ3zrFVIwMxgok",previewTOKEN:"mD_9aMvi0YF-tFKFlzBOOxcEvfu8_Yyb3q42vty2dcQ"},i=function(){function a(){(0,f.Z)(this,a)}return a.getData=function(a,b,c){return(0,e.Z)(g().mark(function d(){var e,f,i,j,k,l,m,n,o;return g().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:e=32,f="",i="",a||(a="country"),b||(b=0),c&&c.hasOwnProperty("country")&&(i='where: { country: { sys: { id: "'.concat(c.country,'" } } }')),c&&c.hasOwnProperty("city")&&(i='where: { city: { sys: { id: "'.concat(c.city,'" } } }')),j="{ ".concat(a,"Collection(limit: ").concat(e," skip: ").concat(b," ").concat(i,") { total, items { name, country { name, sys { id } }, galleryCollection { items { title, url } }, coordinates { lat, lon }, description { json }, sys { id } } } }"),k="{ ".concat(a,"Collection(limit: ").concat(e," skip: ").concat(b," ").concat(i,") { total, items { name, schedule { json }, description { json }, galleryCollection { items { title, url } }, sys { id }, city { name, sys { id }, country { name, sys { id } } }, coordinates { lat, lon } } } }"),l="{ ".concat(a,"Collection { items { name, galleryCollection { total, items { title, url, sys { id } } }, sys { id } } } }"),m="{ ".concat(a,"Collection(limit: ").concat(e," skip: ").concat(b," ").concat(i,") { total, items { name, description { json }, placesCollection { items { name, schedule { json }, description { json }, sys { id }, coordinates { lat, lon } } }, sys { id }, city { name, coordinates { lat, lon }, sys { id }, country { name, sys { id } } } } } }"),d.t0=a,d.next="country"===d.t0?14:"city"===d.t0?16:"place"===d.t0?18:"route"===d.t0?20:22;break;case 14:return f=l,d.abrupt("break",22);case 16:return f=j,d.abrupt("break",22);case 18:return f=k,d.abrupt("break",22);case 20:return f=m,d.abrupt("break",22);case 22:if(0!==f.length){d.next=24;break}return d.abrupt("return",[]);case 24:return d.next=26,window.fetch("https://graphql.contentful.com/content/v1/spaces/".concat(h.spaceID,"/"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(h.deliverTOKEN)},body:JSON.stringify({query:f})});case 26:return n=d.sent,d.next=29,n.json();case 29:return o=d.sent,d.abrupt("return",o.data["".concat(a,"Collection")]);case 31:case"end":return d.stop()}},d)}))()},a.getCollection=function(a,b){return(0,e.Z)(g().mark(function c(){var d,e,f;return g().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!b){c.next=11;break}return d="{ ".concat(a,'Collection(where: { country: { sys: { id: "').concat(b,'" } } } ) { items { name, country { name, sys { id } }, galleryCollection { items { title, url } }, coordinates { lat, lon }, description { json }, sys { id } } } }'),c.next=4,window.fetch("https://graphql.contentful.com/content/v1/spaces/".concat(h.spaceID,"/"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(h.deliverTOKEN)},body:JSON.stringify({query:d})});case 4:return e=c.sent,c.next=7,e.json();case 7:return f=c.sent,c.abrupt("return",f.data["".concat(a,"Collection")]);case 11:return c.abrupt("return",null);case 12:case"end":return c.stop()}},c)}))()},a.getEntry=function(a,b){return(0,e.Z)(g().mark(function c(){var d,e,f,i;return g().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!b){c.next=12;break}return d={city:"{ name, country { name, sys { id } }, galleryCollection { items { title, url } }, coordinates { lat, lon }, description { json }, sys { id } }",place:"{ name, city { name, country { name, sys { id } }, sys { id } }, galleryCollection { items { title, url } }, coordinates { lat, lon }, description { json }, schedule { json }, sys { id } }"},e="{ ".concat(a,'(id: "').concat(b,'") ').concat(d[a]," }"),c.next=5,window.fetch("https://graphql.contentful.com/content/v1/spaces/".concat(h.spaceID,"/"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(h.deliverTOKEN)},body:JSON.stringify({query:e})});case 5:return f=c.sent,c.next=8,f.json();case 8:return i=c.sent,c.abrupt("return",i.data[a]);case 12:return c.abrupt("return",null);case 13:case"end":return c.stop()}},c)}))()},a.getAsset=function(a){return(0,e.Z)(g().mark(function b(){var c,d,e;return g().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(!a){b.next=11;break}return c='{ asset(id: "'.concat(a,'") { title, description, url } }'),b.next=4,window.fetch("https://graphql.contentful.com/content/v1/spaces/".concat(h.spaceID,"/"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(h.deliverTOKEN)},body:JSON.stringify({query:c})});case 4:return d=b.sent,b.next=7,d.json();case 7:return e=b.sent,b.abrupt("return",e.data);case 11:return b.abrupt("return",null);case 12:case"end":return b.stop()}},b)}))()},a}()},1163:function(a,c,b){a.exports=b(387)}},function(a){a.O(0,[935,774,888,179],function(){var b;return a(a.s=3773)}),_N_E=a.O()}])
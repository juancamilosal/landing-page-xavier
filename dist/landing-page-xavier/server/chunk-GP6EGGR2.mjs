import './polyfills.server.mjs';
import{A as _,H as B,J as P,K as H,L as q,M as z,P as W,V as U,a as L,b as M,c as g,d as T,e as I,f as j,g as D,h as A,i as N,j as O,k as v,l as f,m as F,n as d,o as l,p as k,q as G,r as E,s as R,t as V,u as C,v as b,w as e,x as t,y as a,z as i}from"./chunk-CUUG5TQN.mjs";function w(r){return Array.isArray(r)?r:[r]}var y;try{y=typeof Intl<"u"&&Intl.v8BreakIterator}catch{y=!1}var Q=(()=>{let n=class n{constructor(o){this._platformId=o,this.isBrowser=this._platformId?H(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||y)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};n.\u0275fac=function(s){return new(s||n)(f(k))},n.\u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"});let r=n;return r})();var $=new Set,h,oe=(()=>{let n=class n{constructor(o,s){this._platform=o,this._nonce=s,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):de}matchMedia(o){return(this._platform.WEBKIT||this._platform.BLINK)&&se(o,this._nonce),this._matchMedia(o)}};n.\u0275fac=function(s){return new(s||n)(f(Q),f(G,8))},n.\u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"});let r=n;return r})();function se(r,n){if(!$.has(r))try{h||(h=document.createElement("style"),n&&(h.nonce=n),h.setAttribute("type","text/css"),document.head.appendChild(h)),h.sheet&&(h.sheet.insertRule(`@media ${r} {body{ }}`,0),$.add(r))}catch(S){console.error(S)}}function de(r){return{matches:r==="all"||r==="",media:r,addListener:()=>{},removeListener:()=>{}}}var Z=(()=>{let n=class n{constructor(o,s){this._mediaMatcher=o,this._zone=s,this._queries=new Map,this._destroySubject=new M}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(o){return X(w(o)).some(m=>this._registerQuery(m).mql.matches)}observe(o){let m=X(w(o)).map(p=>this._registerQuery(p).observable),c=T(m);return c=I(c.pipe(D(1)),c.pipe(A(1),j(0))),c.pipe(g(p=>{let u={matches:!1,breakpoints:{}};return p.forEach(({matches:x,query:ie})=>{u.matches=u.matches||x,u.breakpoints[ie]=x}),u}))}_registerQuery(o){if(this._queries.has(o))return this._queries.get(o);let s=this._mediaMatcher.matchMedia(o),c={observable:new L(p=>{let u=x=>this._zone.run(()=>p.next(x));return s.addListener(u),()=>{s.removeListener(u)}}).pipe(N(s),g(({matches:p})=>({query:o,matches:p})),O(this._destroySubject)),mql:s};return this._queries.set(o,c),c}};n.\u0275fac=function(s){return new(s||n)(f(oe),f(V))},n.\u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"});let r=n;return r})();function X(r){return r.map(n=>n.split(",")).reduce((n,S)=>n.concat(S)).map(n=>n.trim())}function me(r,n){r&1&&(e(0,"section",2)(1,"div",22)(2,"div",23)(3,"h1",24),i(4,"ASEGURA TU PATRIMONIO EN LOS ESTADOS UNIDOS"),t(),e(5,"p",25),i(6,"Tu inversi\xF3n en bienes ra\xEDces, comienza con los 40 minutos que le dediques a este webinar gratuito"),t()(),e(7,"div",26),a(8,"img",27),t()(),e(9,"div")(10,"div",26)(11,"form",28)(12,"div",29),a(13,"input",30),e(14,"label",31),i(15,"Nombre y Apellido"),t()(),e(16,"div")(17,"div",29),a(18,"input",32),e(19,"label",31),i(20,"Email"),t()(),e(21,"div",29),a(22,"input",33),e(23,"label",31),i(24,"Tel\xE9fono"),t()()(),e(25,"div",34)(26,"div",29)(27,"div",35)(28,"select",36)(29,"option",37),i(30,"Pa\xEDs"),t(),e(31,"option",38),i(32,"Opci\xF3n 1"),t(),e(33,"option",39),i(34,"Opci\xF3n 2"),t(),e(35,"option",40),i(36,"Opci\xF3n 3"),t()()()(),e(37,"div",29)(38,"div",35)(39,"select",36)(40,"option",37),i(41,"Ciudad"),t(),e(42,"option",38),i(43,"Opci\xF3n 1"),t(),e(44,"option",39),i(45,"Opci\xF3n 2"),t(),e(46,"option",40),i(47,"Opci\xF3n 3"),t()()()()(),e(48,"div",41)(49,"button",42),i(50,"Registrarme"),t()()()()()())}function ce(r,n){r&1&&(e(0,"section",3)(1,"div",43)(2,"div",13)(3,"h1",44),i(4,"Asegura tu patrimonio en los Estados Unidos "),t(),e(5,"p",25),i(6,"Tu inversi\xF3n en bienes ra\xEDces, comienza con los 40 minutos que le dediques a este webinar gratuito"),t()(),e(7,"div",45)(8,"div",46)(9,"form",47)(10,"div",29),a(11,"input",30),e(12,"label",31),i(13,"Nombre y Apellido"),t()(),e(14,"div")(15,"div",29),a(16,"input",32),e(17,"label",31),i(18,"Email"),t()(),e(19,"div",29),a(20,"input",33),e(21,"label",31),i(22,"Tel\xE9fono"),t()()(),e(23,"div",34)(24,"div",29)(25,"div",35)(26,"select",48)(27,"option",37),i(28,"Pa\xEDs"),t(),e(29,"option",38),i(30,"Opci\xF3n 1"),t(),e(31,"option",39),i(32,"Opci\xF3n 2"),t(),e(33,"option",40),i(34,"Opci\xF3n 3"),t()()()(),e(35,"div",29)(36,"div",35)(37,"select",48)(38,"option",37),i(39,"Ciudad"),t(),e(40,"option",38),i(41,"Opci\xF3n 1"),t(),e(42,"option",39),i(43,"Opci\xF3n 2"),t(),e(44,"option",40),i(45,"Opci\xF3n 3"),t()()()()(),e(46,"div",41)(47,"button",42),i(48,"Registrarme"),t()()()()()(),e(49,"div",49),a(50,"img",50),t()())}var Y=(()=>{let n=class n{constructor(o){this.breakpointObserver=o,this.countries=["Pa\xEDs 1","Pa\xEDs 2","Pa\xEDs 3"],this.cities=["Ciudad 1","Ciudad 2","Ciudad 3"],this.mostrarSeccion=!1}ngOnInit(){this.mostrarSeccion=window.innerWidth>767,window.addEventListener("resize",()=>{this.mostrarSeccion=window.innerWidth>767})}};n.\u0275fac=function(s){return new(s||n)(R(Z))},n.\u0275cmp=F({type:n,selectors:[["app-root"]],standalone:!0,features:[_],decls:140,vars:2,consts:[[1,"flex","justify-start","h-20","items-center"],["src","assets/img/LOGO%20SEGUNDARIO.png",1,"w-40","h-20"],[1,"bg-[#4a546a]","w-full","p-2","pb-10"],[1,"bg-[#4a546a]","w-full","p-2","pb-10","flex","justify-evenly"],[1,"container-2","flex","flex-col","justify-around","items-center","text-center","bg-opacity-100","sm:flex-row"],[1,"text-[#b9dd71]","text-3xl"],[1,"text-white"],[1,"mt-5","sm:mt-0","sm:ml-5"],[1,"md:flex"],[1,"md:w-1/2","flex","w-auto","pr-3","py-5","my-5","mx-8","border-1","rounded-2xl","border-white","shadow-gray-400","shadow-md"],[1,"flex","my-5","mx-3"],[1,"relative","box-content","flex","items-center","justify-center","overflow-hidden","rounded-full","size-20","bg-blue-700"],[1,"flex","items-center","justify-center","font-semibold","text-white","text-sm"],[1,"flex","flex-col"],[1,"relative"],[1,"flex","items-center","justify-start","gap-0.5"],["width","24","height","24","viewBox","0 0 24 24","fill","#E2E8F0","stroke","#E2E8F0","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round","xmlns","http://www.w3.org/2000/svg",1,"fill-amber-300","stroke-amber-300"],["d","M12 3L14.781 8.59516L21 9.4979L16.5 13.8507L17.562 20L12 17.0952L6.438 20L7.5 13.8507L3 9.4979L9.219 8.59516L12 3Z"],[1,"text-start"],[1,"leading-6"],[1,"flex","justify-center","h-20","items-center"],["src","assets/img/LOGO%20PRINCIPAL.png",1,"w-60","h-20"],[1,"flex","flex-col","justify-center","text-center","text-2xl"],[1,"z-1"],[1,"my-2","text-[#b9dd71]"],[1,"text-[#dadbdc]"],[1,"flex","justify-center"],["src","assets/img/32641e95-057a-4c90-ad89-2483f7df5ff3.jpg",1,"w-48","h-96","my-6","rounded-md","shadow-gray-950","shadow-md"],[1,"bg-white","w-96","p-5","rounded-2xl","mx-2","md:w-1/2","shadow-gray-950","shadow-md"],[1,"relative","z-0","w-full","mb-5","group"],["type","text","placeholder"," ","required","",1,"block","pt-3","pb-2","px-0","w-full","text-sm","text-gray-900","bg-transparent","border-0","border-b-2","border-gray-300","appearance-none","dark:text-[#4a546a]","dark:border-gray-600","dark:focus:border-blue-500","focus:outline-none","focus:ring-0","focus:border-blue-600","peer"],[1,"peer-focus:font-medium","absolute","text-sm","text-[#4a546a]","dark:text-[#4a546a]","duration-300","transform","-translate-y-6","scale-90","top-2","-z-10","origin-[0]","peer-focus:start-1","rtl:peer-focus:translate-x-1/4","peer-focus:text-[#b9dd71]","peer-focus:dark:text-[#b9dd71]","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-90","peer-focus:-translate-y-6"],["type","email","placeholder"," ","required","",1,"block","pt-3","pb-2","px-0","w-full","text-sm","text-gray-900","bg-transparent","border-0","border-b-2","border-gray-300","appearance-none","dark:text-[#4a546a]","dark:border-gray-600","dark:focus:border-blue-500","focus:outline-none","focus:ring-0","focus:border-blue-600","peer"],["type","number","placeholder"," ","required","",1,"block","pt-3","pb-2","px-0","w-full","text-sm","text-gray-900","bg-transparent","border-0","border-b-2","border-gray-300","appearance-none","dark:text-[#4a546a]","dark:border-gray-600","dark:focus:border-blue-500","focus:outline-none","focus:ring-0","focus:border-blue-600","peer"],[1,"grid","grid-cols-2","gap-6"],[1,"select-container"],[1,"text-left","w-full","rounded","p-2"],["value",""],["value","opcion1"],["value","opcion2"],["value","opcion3"],[1,"grid","justify-center"],["type","submit",1,"button-send","w-full","text-[#b9dd71]","bg-[#4a546a]","hover:bg-[#b9dd71]","hover:text-[#4a546a]","focus:ring-4","focus:outline-none","font-extrabold","rounded-lg","px-5","py-2.5","text-center","dark:bg-[#4a546a]","text-2xl"],[1,"flex","flex-col","text-3xl"],[1,"my-2","text-[#b9dd71]","text-4xl"],[1,"flex","justify-center","my-5"],[1,"flex","justify-center","w-full"],[1,"text-start","bg-white","md:w-1/2","p-5","rounded-2xl","mx-2","shadow-gray-950","shadow-md"],[1,"text-left","w-full","rounded","p-2","text-sm"],[1,"flex","justify-start","w-1/4","h-100","mx-5"],["src","assets/img/32641e95-057a-4c90-ad89-2483f7df5ff3.jpg",1,"my-6","rounded-md","shadow-gray-950","shadow-md",2,"max-width","100%","height","auto","object-fit","cover"]],template:function(s,m){s&1&&(e(0,"header")(1,"div",0),a(2,"img",1),t()(),C(3,me,51,0,"section",2)(4,ce,51,0,"section",3),e(5,"section")(6,"div",4)(7,"div")(8,"h1",5),i(9,"7 A\xD1OS"),t(),e(10,"p",6),i(11," De experiencia en bienes ra\xEDces"),t()(),e(12,"div",7)(13,"h1",5),i(14,"41 MILLONES USD"),t(),e(15,"p",6),i(16,"Vendidos en propiedad en los \xFAltimos dos a\xF1os "),t()(),e(17,"div",7)(18,"h1",5),i(19,"52% ROI"),t(),e(20,"p",6),i(21,"Un retorno de inversi\xF3n aproximado"),t()()()(),e(22,"section")(23,"div",8)(24,"div",9)(25,"div",10)(26,"div",11)(27,"span",12),i(28,"Aa"),t()()(),e(29,"div",13)(30,"div",14)(31,"div",15)(32,"div",14),d(),e(33,"svg",16),a(34,"path",17),t()(),l(),e(35,"div",14),d(),e(36,"svg",16),a(37,"path",17),t()(),l(),e(38,"div",14),d(),e(39,"svg",16),a(40,"path",17),t()(),l(),e(41,"div",14),d(),e(42,"svg",16),a(43,"path",17),t()(),l(),e(44,"div",14),d(),e(45,"svg",16),a(46,"path",17),t()()()(),l(),e(47,"div",18)(48,"p",19),i(49,'"Ellos no solo nos ayudan a levantar las rentas de la casa que ya ten\xEDamos sino que tiempo despu\xE9s decidimos invertir en una segunda propiedad, la que ellos nos recomendaron , y nos comenz\xF3 a ir tan que invertimos en otra m\xE1s igualita"'),t(),e(50,"strong"),i(51,"Francisco Sevilla"),t()()()(),e(52,"div",9)(53,"div",10)(54,"div",11)(55,"span",12),i(56,"Aa"),t()()(),e(57,"div",13)(58,"div",14)(59,"div",15)(60,"div",14),d(),e(61,"svg",16),a(62,"path",17),t()(),l(),e(63,"div",14),d(),e(64,"svg",16),a(65,"path",17),t()(),l(),e(66,"div",14),d(),e(67,"svg",16),a(68,"path",17),t()(),l(),e(69,"div",14),d(),e(70,"svg",16),a(71,"path",17),t()(),l(),e(72,"div",14),d(),e(73,"svg",16),a(74,"path",17),t()()()(),l(),e(75,"div",18)(76,"p",19),i(77,'"Son muy anal\xEDticos y profesionales a la hora de ofrecerte una propiedad para inversi\xF3n, saben lo que hacen"'),t(),e(78,"strong"),i(79,"Diego Gutierrez"),t()()()()(),e(80,"div",8)(81,"div",9)(82,"div",10)(83,"div",11)(84,"span",12),i(85,"Aa"),t()()(),e(86,"div",13)(87,"div",14)(88,"div",15)(89,"div",14),d(),e(90,"svg",16),a(91,"path",17),t()(),l(),e(92,"div",14),d(),e(93,"svg",16),a(94,"path",17),t()(),l(),e(95,"div",14),d(),e(96,"svg",16),a(97,"path",17),t()(),l(),e(98,"div",14),d(),e(99,"svg",16),a(100,"path",17),t()(),l(),e(101,"div",14),d(),e(102,"svg",16),a(103,"path",17),t()()()(),l(),e(104,"div",18)(105,"p",19),i(106,'"Yo ten\xEDa la intenci\xF3n de invertir en una casa en los Estados Unidos para poder proteger mi dinero y hacerlo crecer. Xavier nos ayud\xF3 a seleccionar la mejor opci\xF3n y nos gui\xF3 durante todo el proceso"'),t(),e(107,"strong"),i(108,"Mariola G\xF3mez"),t()()()(),e(109,"div",9)(110,"div",10)(111,"div",11)(112,"span",12),i(113,"Aa"),t()()(),e(114,"div",13)(115,"div",14)(116,"div",15)(117,"div",14),d(),e(118,"svg",16),a(119,"path",17),t()(),l(),e(120,"div",14),d(),e(121,"svg",16),a(122,"path",17),t()(),l(),e(123,"div",14),d(),e(124,"svg",16),a(125,"path",17),t()(),l(),e(126,"div",14),d(),e(127,"svg",16),a(128,"path",17),t()(),l(),e(129,"div",14),d(),e(130,"svg",16),a(131,"path",17),t()()()(),l(),e(132,"div",18)(133,"p",19),i(134,'"Mi experiencia ha sido maravillosa , siempre ha estado al pendiente de cada detalle y de todas las dudas que me fueron" surgiendo en todo el proceso. Si decidiera comprar otra casa, definitivamente lo volver\xEDa a hacer con \xE9l"'),t(),e(135,"strong"),i(136,"Marytere Sevilla "),t()()()()()(),e(137,"footer")(138,"div",20),a(139,"img",21),t()()),s&2&&(E(3),b(3,m.mostrarSeccion?-1:3),E(),b(4,m.mostrarSeccion?4:-1))},dependencies:[P]});let r=n;return r})();var J=[];var ee={providers:[U(J),z()]};var pe={providers:[W()]},te=B(ee,pe);var ue=()=>q(Y,te),He=ue;export{He as a};
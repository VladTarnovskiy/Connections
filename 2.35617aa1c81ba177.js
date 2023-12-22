"use strict";(self.webpackChunkconnections=self.webpackChunkconnections||[]).push([[2],{5002:(Jt,A,l)=>{l.r(A),l.d(A,{ConnectionsModule:()=>kt});var t=l(9468),a=l(3830);const v=(0,a.ZF)("groups"),I=(0,a.P1)(v,e=>e.groupsData),U=(0,a.P1)(v,e=>e.isLoading),N=(0,a.P1)(v,e=>e.timer),$=(0,a.P1)(v,e=>e.isActive),q=(0,a.P1)(v,e=>e.isCreateGroupModal),T=(0,a.P1)(v,e=>e.removeGroupData);var u=l(416),c=l(95),y=l(2490),p=l(6814);let Z=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-refresh-but"]],inputs:{active:"active"},decls:5,vars:1,consts:[["fill","#3b82f6","width","800px","height","800px","stroke","#3b82f6","viewBox","0 0 24 24","id","update","data-name","Flat Line","xmlns","http://www.w3.org/2000/svg",1,"icon","flat-line","w-6","h-6",3,"ngClass"],["id","primary","d","M4,12A8,8,0,0,1,18.93,8",2,"fill","none","stroke-linecap","round","stroke-linejoin","round","stroke-width","2"],["id","primary-2","data-name","primary","d","M20,12A8,8,0,0,1,5.07,16",2,"fill","none","stroke-linecap","round","stroke-linejoin","round","stroke-width","2"],["id","primary-3","data-name","primary","points","14 8 19 8 19 3",2,"fill","none","stroke-linecap","round","stroke-linejoin","round","stroke-width","2"],["id","primary-4","data-name","primary","points","10 16 5 16 5 21",2,"fill","none","stroke-linecap","round","stroke-linejoin","round","stroke-width","2"]],template:function(i,o){1&i&&(t.O4$(),t.TgZ(0,"svg",0),t._UZ(1,"path",1)(2,"path",2)(3,"polyline",3)(4,"polyline",4),t.qZA()),2&i&&t.Q6J("ngClass",o.active?"opacity-100":"opacity-50")},dependencies:[p.mk]})}return e})();const F=["*"];let x=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-modal"]],ngContentSelectors:F,decls:2,vars:0,consts:[[1,"fixed","left-0","top-0","w-full","h-full","backdrop-blur-sm","flex","justify-center","items-center"]],template:function(i,o){1&i&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())}})}return e})();var b=l(9129),g=l(5509);function M(e,r){if(1&e){const s=t.EpF();t.TgZ(0,"button",3),t.NdJ("click",function(){t.CHM(s);const o=t.oxw();return t.KtG(o.addRemoveGroupModal())}),t._UZ(1,"img",4),t.qZA()}}let Q=(()=>{class e{constructor(s,i){this.store=s,this.router=i,this.authData$=this.store.select(b.$I),this.removeButFlag=!1}addRemoveGroupModal(){this.removeButFlag=!0,setTimeout(()=>{this.removeButFlag=!1}),this.store.dispatch(u.p0({removeGroupData:{isRemoveGroupModal:!0,groupID:this.groupData.id}}))}getGroupDialog(){this.removeButFlag||this.router.navigate([`/group/${this.groupData.id}`])}ngOnInit(){this.subscription=this.authData$.subscribe(s=>{this.authData=s})}ngOnDestroy(){this.subscription.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(a.yh),t.Y36(g.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-group"]],inputs:{groupData:"groupData"},decls:4,vars:3,consts:[[1,"groups__item","rounded","min-h-4","w-full","mb-2","p-1","flex","justify-between","items-center",3,"ngClass","click"],[1,"group__title","overflow-hidden"],["class","ml-2",3,"click",4,"ngIf"],[1,"ml-2",3,"click"],["src","assets/cross.svg","alt","cross",1,"h-6","w-6"]],template:function(i,o){1&i&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return o.getGroupDialog()}),t.TgZ(1,"div",1),t._uU(2),t.qZA(),t.YNc(3,M,2,0,"button",2),t.qZA()),2&i&&(t.Q6J("ngClass",o.authData&&o.authData.uid===o.groupData.createdBy?"bg-base_blue/20":"bg-gray-200"),t.xp6(2),t.Oqu(o.groupData.name),t.xp6(1),t.Q6J("ngIf",o.authData&&o.authData.uid===o.groupData.createdBy))},dependencies:[p.mk,p.O5]})}return e})();var O=l(520);function P(e,r){1&e&&(t.TgZ(0,"div",11),t._uU(1," please enter a username "),t.qZA())}function j(e,r){1&e&&(t.TgZ(0,"div",11),t._uU(1," username should contains less then 30 symbols "),t.qZA())}function Y(e,r){if(1&e&&(t.TgZ(0,"div",11),t._uU(1),t.qZA()),2&e){const s=t.oxw();t.xp6(1),t.hij(" ",null==s.name.errors?null:s.name.errors.forbiddenUsername.value," ")}}let L=(()=>{class e{constructor(s){this.store=s,this.authData$=this.store.select(b.$I),this.name=new c.NI("",[c.kI.required,c.kI.maxLength(30),(0,O.y)()])}closeModal(){this.store.dispatch(u.N_({isCreateGroupModal:!1}))}createGroup(){const s=this.name.getRawValue();"VALID"===this.name.status&&this.authData&&(this.store.dispatch(u.jQ({name:s,userID:this.authData.uid})),this.closeModal())}ngOnInit(){this.subscription=this.authData$.subscribe(s=>{this.authData=s})}ngOnDestroy(){this.subscription.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(a.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-group-form"]],decls:18,vars:5,consts:[[1,"form","flex","flex-col","justify-center","px-6","py-12","lg:px-4","bg-white","rounded-lg","w-[500px]","mt-[-50%]"],[1,"text-center","text-2xl","font-bold","leading-9","tracking-tight","text-base_green"],[1,"mt-10"],[1,"form__item","mb-4","relative"],["for","name"],["id","name","type","text",1,"text-md","mt-1","block","w-full","rounded-md","border-0","bg-base_white","p-1","text-gray-900","shadow-sm","ring-1","ring-inset","outline-none","ring-gray-300","placeholder:text-gray-400","focus:ring-1","focus:ring-inset","focus:ring-base_blue",3,"formControl"],[1,"mr-auto"],["class","invalid__message w-fit",4,"ngIf"],[1,"mt-8","flex","justify-between"],["type","submit",1,"mt-2","w-full","basis-2/5","rounded-md","bg-base_blue","p-2","px-3","text-sm","font-semibold","leading-6","text-white","shadow-sm","transition","delay-75","ease-in-out",3,"ngClass","click"],["type","submit",1,"mt-2","w-full","basis-2/5","rounded-md","bg-base_blue","p-2","px-3","text-sm","font-semibold","leading-6","text-white","shadow-sm","transition","delay-75","ease-in-out","hover:cursor-pointer","active:scale-[95%]",3,"click"],[1,"invalid__message","w-fit"]],template:function(i,o){1&i&&(t.TgZ(0,"section",0)(1,"h2",1),t._uU(2," Create group "),t.qZA(),t.TgZ(3,"div",2)(4,"div")(5,"div",3)(6,"label",4),t._uU(7,"Group name:"),t.qZA(),t._UZ(8,"input",5),t.TgZ(9,"div",6),t.YNc(10,P,2,0,"div",7),t.YNc(11,j,2,0,"div",7),t.YNc(12,Y,2,1,"div",7),t.qZA()(),t.TgZ(13,"div",8)(14,"button",9),t.NdJ("click",function(){return o.createGroup()}),t._uU(15," Create "),t.qZA(),t.TgZ(16,"button",10),t.NdJ("click",function(){return o.closeModal()}),t._uU(17," Cancel "),t.qZA()()()()()),2&i&&(t.xp6(8),t.Q6J("formControl",o.name),t.xp6(2),t.Q6J("ngIf",null==o.name.errors?null:o.name.errors.required),t.xp6(1),t.Q6J("ngIf",null==o.name.errors?null:o.name.errors.maxlength),t.xp6(1),t.Q6J("ngIf",null==o.name.errors?null:o.name.errors.forbiddenUsername),t.xp6(2),t.Q6J("ngClass","VALID"===o.name.status?"opacity-100 hover:cursor-pointer active:scale-[95%]":"opacity-50 hover:cursor-auto active:scale-100"))},dependencies:[p.mk,p.O5,c.Fj,c.JJ,c.oH]})}return e})(),w=(()=>{class e{constructor(s){this.store=s}removeGroup(){this.store.dispatch(u.XX({groupID:this.groupID})),this.closeModal()}closeModal(){this.store.dispatch(u.p0({removeGroupData:null}))}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(a.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-group-remove"]],inputs:{groupID:"groupID"},decls:9,vars:0,consts:[[1,"form","flex","flex-col","justify-center","px-6","py-12","lg:px-4","bg-white","rounded-lg","w-[500px]","mt-[-50%]"],[1,"text-center","text-2xl","font-bold","leading-9","tracking-tight","text-base_green"],[1,"mt-10"],[1,"mt-8","flex","justify-between"],["type","submit",1,"mt-2","w-full","basis-2/5","rounded-md","bg-base_blue","p-2","px-3","text-sm","font-semibold","leading-6","text-white","shadow-sm","transition","delay-75","ease-in-out","opacity-100","hover:cursor-pointer","active:scale-[95%]",3,"click"],["type","submit",1,"mt-2","w-full","basis-2/5","rounded-md","bg-base_blue","p-2","px-3","text-sm","font-semibold","leading-6","text-white","shadow-sm","transition","delay-75","ease-in-out","hover:cursor-pointer","active:scale-[95%]",3,"click"]],template:function(i,o){1&i&&(t.TgZ(0,"section",0)(1,"h2",1),t._uU(2," Are you sure that you want to delete group? "),t.qZA(),t.TgZ(3,"div",2)(4,"div",3)(5,"button",4),t.NdJ("click",function(){return o.removeGroup()}),t._uU(6," Delete "),t.qZA(),t.TgZ(7,"button",5),t.NdJ("click",function(){return o.closeModal()}),t._uU(8," Cancel "),t.qZA()()()())}})}return e})();function R(e,r){if(1&e&&(t.TgZ(0,"div",13),t._uU(1),t.qZA()),2&e){const s=t.oxw();t.xp6(1),t.AsE(" 00:",s.timer<10?"0":"","",s.timer," ")}}function S(e,r){1&e&&t._UZ(0,"app-group",14),2&e&&t.Q6J("groupData",r.$implicit)}function V(e,r){1&e&&(t.TgZ(0,"div")(1,"app-modal"),t._UZ(2,"app-group-form"),t.qZA()())}function X(e,r){if(1&e&&(t.TgZ(0,"div")(1,"app-modal"),t._UZ(2,"app-group-remove",15),t.qZA()()),2&e){const s=r.ngIf;t.xp6(2),t.Q6J("groupID",s.groupID)}}let B=(()=>{class e{constructor(s){this.store=s,this.isLoading$=this.store.select(U),this.timer$=this.store.select(N),this.isActive$=this.store.select($),this.groupsData$=this.store.select(I),this.isCreateGroupModal$=this.store.select(q),this.removeGroupData$=this.store.select(T),this.isActive=!0,this.timer=0,this.searchValue=new c.NI("")}updateGroups(){if(this.isActive){this.searchValue.setValue(""),this.store.dispatch(u.xc()),this.store.dispatch(u.Ze({isActive:!1})),this.store.dispatch(u.B9({timer:59}));const s=setInterval(()=>{this.timer-=1,this.store.dispatch(u.B9({timer:this.timer})),0===this.timer&&(this.store.dispatch(u.Ze({isActive:!0})),clearInterval(s))},1e3)}}createGroup(){this.store.dispatch(u.N_({isCreateGroupModal:!0}))}findGroups(){const s=this.searchValue.getRawValue();if(this.groupsData){const i=this.groupsData.filter(o=>o.name.includes(s));this.filteredGroupData=i}}ngOnInit(){this.subscription=this.timer$.subscribe(o=>{this.timer=o});const s=this.isActive$.subscribe(o=>{this.isActive=o}),i=this.groupsData$.subscribe(o=>{this.groupsData=o,this.filteredGroupData=o});this.subscription.add(s),this.subscription.add(i)}ngOnDestroy(){this.subscription.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(a.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-groups"]],decls:21,vars:13,consts:[[1,"connections_title","flex","justify-between","items-center","mb-4","min-h-[40px]"],[1,"justify-start","items-center","flex-row","md:flex"],[1,"justify-start","items-center","flex"],[1,"connections__name","text-2xl","mr-2"],[1,"connections__update","mr-2","hover:cursor-pointer",3,"click"],[3,"active"],["class","connections__timer mr-4",4,"ngIf"],[1,"py-1","mr-2"],["type","search","placeholder","Search group",1,"text-md","block","min-w-[120px]","max-w-[250px]","w-full","rounded-md","border-0","p-1","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","dark:ring-transparent","placeholder:text-gray-400","outline-none",3,"formControl","input"],[1,"ml-2","self-start",3,"click"],[1,"groups__container","max-h-[82vh]","overflow-y-scroll",3,"ngClass"],[3,"groupData",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"connections__timer","mr-4"],[3,"groupData"],[3,"groupID"]],template:function(i,o){1&i&&(t.TgZ(0,"div")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3),t._uU(5,"Groups"),t.qZA(),t.TgZ(6,"button",4),t.NdJ("click",function(){return o.updateGroups()}),t._UZ(7,"app-refresh-but",5),t.qZA(),t.YNc(8,R,2,2,"div",6),t.qZA(),t.TgZ(9,"div",7)(10,"input",8),t.NdJ("input",function(){return o.findGroups()}),t.qZA()()(),t.TgZ(11,"button",9),t.NdJ("click",function(){return o.createGroup()}),t.TgZ(12,"app-button"),t._uU(13,"Create"),t.qZA()()(),t.TgZ(14,"div",10),t.ALo(15,"async"),t.YNc(16,S,1,1,"app-group",11),t.qZA()(),t.YNc(17,V,3,0,"div",12),t.ALo(18,"async"),t.YNc(19,X,3,1,"div",12),t.ALo(20,"async")),2&i&&(t.xp6(7),t.Q6J("active",o.isActive),t.xp6(1),t.Q6J("ngIf",!o.isActive),t.xp6(2),t.Q6J("formControl",o.searchValue),t.xp6(4),t.Q6J("ngClass",t.lcZ(15,7,o.isLoading$)?"opacity-50":"opacity-100"),t.xp6(2),t.Q6J("ngForOf",o.filteredGroupData),t.xp6(1),t.Q6J("ngIf",t.lcZ(18,9,o.isCreateGroupModal$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(20,11,o.removeGroupData$)))},dependencies:[y.r,p.mk,p.sg,p.O5,c.Fj,c.JJ,Z,x,c.oH,Q,L,w,p.Ov]})}return e})();const D=(0,a.ZF)("people"),G=(0,a.P1)(D,e=>e.peopleData),E=(0,a.P1)(D,e=>e.isLoading),H=(0,a.P1)(D,e=>e.timer),z=(0,a.P1)(D,e=>e.isActive),K=(0,a.P1)(D,e=>e.conversationsData);var f=l(1336),m=l(459);function W(e,r){1&e&&(t.TgZ(0,"div",4),t._uU(1," In chat"),t.TgZ(2,"span",5),t._uU(3,"\u25cf"),t.qZA()())}function tt(e,r){1&e&&(t.TgZ(0,"div",6),t._uU(1," No chat"),t.TgZ(2,"span",7),t._uU(3,"\u25cf"),t.qZA()())}let et=(()=>{class e{constructor(s,i){this.store=s,this.router=i,this.conversationsData$=this.store.select(K)}getConversation(){localStorage.setItem("conversationNameConnections",JSON.stringify(this.personData.name)),this.personData.conversationID&&this.conversationsData?this.conversationsData.forEach(s=>{s.companionID===this.personData.uid&&this.router.navigate([`/conversation/${s.id}`])}):this.store.dispatch(m.a7({companion:this.personData.uid}))}ngOnInit(){this.subscription=this.conversationsData$.subscribe(s=>{this.conversationsData=s})}ngOnDestroy(){this.subscription.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(a.yh),t.Y36(g.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-person"]],inputs:{personData:"personData"},decls:6,vars:4,consts:[[1,"groups__item","rounded","min-h-4","w-full","mb-2","p-1","flex","justify-between","items-center",3,"ngClass","click"],[1,"group__title","overflow-hidden"],["class","ml-2",4,"ngIf","ngIfElse"],["haveNotChat",""],[1,"ml-2"],[1,"ml-2","text-green-500"],[1,"min-w-max","ml-2"],[1,"ml-2","text-gray-400"]],template:function(i,o){if(1&i&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return o.getConversation()}),t.TgZ(1,"div",1),t._uU(2),t.qZA(),t.YNc(3,W,4,0,"div",2),t.YNc(4,tt,4,0,"ng-template",null,3,t.W1O),t.qZA()),2&i){const n=t.MAs(5);t.Q6J("ngClass",o.personData.conversationID?"bg-base_blue/20":"bg-gray-200"),t.xp6(2),t.Oqu(o.personData.name),t.xp6(1),t.Q6J("ngIf",o.personData.conversationID)("ngIfElse",n)}},dependencies:[p.mk,p.O5]})}return e})();function st(e,r){if(1&e&&(t.TgZ(0,"div",11),t._uU(1),t.qZA()),2&e){const s=t.oxw();t.xp6(1),t.AsE(" 00:",s.timer<10?"0":"","",s.timer," ")}}function ot(e,r){1&e&&t._UZ(0,"app-person",12),2&e&&t.Q6J("personData",r.$implicit)}let it=(()=>{class e{constructor(s){this.store=s,this.timer$=this.store.select(H),this.isActive$=this.store.select(z),this.isLoading$=this.store.select(E),this.peopleData$=this.store.select(G),this.searchValue=new c.NI(""),this.isActive=!0,this.timer=0}updatePeople(){if(this.isActive){this.searchValue.setValue(""),this.store.dispatch(f.eS()),this.store.dispatch(f.Ze({isActive:!1})),this.store.dispatch(f.wC({timer:59}));const s=setInterval(()=>{this.timer-=1,this.store.dispatch(f.wC({timer:this.timer})),0===this.timer&&(this.store.dispatch(f.Ze({isActive:!0})),clearInterval(s))},1e3)}}findPeople(){const s=this.searchValue.getRawValue();if(this.peopleData){const i=this.peopleData.filter(o=>o.name.includes(s));this.filteredPeopleData=i}}ngOnInit(){this.subscription=this.timer$.subscribe(o=>{this.timer=o});const s=this.isActive$.subscribe(o=>{this.isActive=o}),i=this.peopleData$.subscribe(o=>{this.peopleData=o,this.filteredPeopleData=o});this.subscription.add(s),this.subscription.add(i)}ngOnDestroy(){this.subscription.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(a.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-people"]],decls:14,vars:7,consts:[[1,"people_title","flex","justify-between","items-center","mb-4","min-h-[40px]"],[1,"justify-start","items-center","flex-row","md:flex"],[1,"justify-start","items-center","flex"],[1,"people__name","text-2xl","mr-2"],[1,"people__update","mr-2","hover:cursor-pointer",3,"click"],[3,"active"],["class","people__timer mr-4",4,"ngIf"],[1,"py-1","mr-2"],["type","search","placeholder","Search person",1,"text-md","block","min-w-[120px]","max-w-[250px]","w-full","rounded-md","border-0","p-1","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","dark:ring-transparent","placeholder:text-gray-400","outline-none",3,"formControl","input"],[1,"people__container","max-h-[82vh]","overflow-y-scroll",3,"ngClass"],[3,"personData",4,"ngFor","ngForOf"],[1,"people__timer","mr-4"],[3,"personData"]],template:function(i,o){1&i&&(t.TgZ(0,"div")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3),t._uU(5,"People"),t.qZA(),t.TgZ(6,"button",4),t.NdJ("click",function(){return o.updatePeople()}),t._UZ(7,"app-refresh-but",5),t.qZA(),t.YNc(8,st,2,2,"div",6),t.qZA(),t.TgZ(9,"div",7)(10,"input",8),t.NdJ("input",function(){return o.findPeople()}),t.qZA()()()(),t.TgZ(11,"div",9),t.ALo(12,"async"),t.YNc(13,ot,1,1,"app-person",10),t.qZA()()),2&i&&(t.xp6(7),t.Q6J("active",o.isActive),t.xp6(1),t.Q6J("ngIf",!o.isActive),t.xp6(2),t.Q6J("formControl",o.searchValue),t.xp6(1),t.Q6J("ngClass",t.lcZ(12,5,o.isLoading$)?"opacity-50":"opacity-100"),t.xp6(2),t.Q6J("ngForOf",o.filteredPeopleData))},dependencies:[p.mk,p.sg,p.O5,c.Fj,c.JJ,Z,c.oH,et,p.Ov]})}return e})(),nt=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-connections"]],decls:6,vars:0,consts:[[1,"connections","flex-column","justify-between","sm:flex"],[1,"connections__item","mb-6","sm:mb-0","sm:w-[50%]"],[1,"w-[1px]","bg-gray-200","mx-3","hidden","sm:block"],[1,"connections__item","sm:w-[50%]"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-groups"),t.qZA(),t._UZ(3,"div",2),t.TgZ(4,"div",3),t._UZ(5,"app-people"),t.qZA()())},dependencies:[B,it]})}return e})();var at=l(6208),k=l(7398);const _=(0,a.ZF)("conversation"),rt=((0,a.P1)(_,e=>e.conversationID),(0,a.P1)(_,e=>e.conversationData)),ct=(0,a.P1)(_,e=>e.isLoading),pt=(0,a.P1)(_,e=>e.timer),lt=(0,a.P1)(_,e=>e.isActive),ut=(0,a.P1)(_,e=>e.isRemoveConversationModal);function mt(e,r){if(1&e&&(t.TgZ(0,"div",2),t._UZ(1,"img",3),t.TgZ(2,"div",4)(3,"div",5)(4,"div",6),t._uU(5),t.qZA(),t.TgZ(6,"div",6),t._uU(7),t.ALo(8,"date"),t.qZA()(),t.TgZ(9,"div",7),t._uU(10),t.qZA(),t._UZ(11,"div",8),t.qZA()()),2&e){const s=t.oxw();t.xp6(5),t.Oqu(s.getUserName()),t.xp6(2),t.hij(" ",t.xi3(8,3,s.messageData.createdAt,"short")," "),t.xp6(3),t.Oqu(s.messageData.message)}}function ht(e,r){if(1&e&&(t.TgZ(0,"div",9)(1,"div",10)(2,"div",5)(3,"div",6),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"div",6),t._uU(7),t.qZA()(),t.TgZ(8,"div",11),t._uU(9),t.qZA(),t._UZ(10,"div",12),t.qZA(),t._UZ(11,"img",13),t.qZA()),2&e){const s=t.oxw();t.xp6(4),t.hij(" ",t.xi3(5,3,s.messageData.createdAt,"short")," "),t.xp6(3),t.Oqu(s.getUserName()),t.xp6(2),t.hij(" ",s.messageData.message," ")}}let J=(()=>{class e{constructor(s){this.store=s,this.peopleData$=this.store.select(G),this.authData$=this.store.select(b.$I)}getUserName(){return this.peopleData&&this.peopleData.find(i=>i.uid===this.messageData.authorID)?.name||"Unknown user"}ngOnInit(){this.subscription=this.peopleData$.subscribe(i=>{this.peopleData=i});const s=this.authData$.subscribe(i=>{this.authData=i});this.subscription.add(s)}ngOnDestroy(){this.subscription.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(a.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-message"]],inputs:{messageData:"messageData"},decls:3,vars:2,consts:[["class","relative message flex flex-row mb-3 self-start bg-gray-200 rounded-lg p-2 mr-32",4,"ngIf","ngIfElse"],["myMessage",""],[1,"relative","message","flex","flex-row","mb-3","self-start","bg-gray-200","rounded-lg","p-2","mr-32"],["src","assets/profile-conv.svg","alt","profile",1,"w-8","h-8","mr-1"],[1,"message__des","flex-row","justify-start","w-full"],[1,"flex","w-full","justify-between"],[1,"message__name","text-black"],[1,"message__text","mr-auto"],[1,"dialog","absolute","-left-[15px]","bottom-2","border-[5px]","border-transparent","border-r-[10px]","border-r-gray-200"],[1,"message","relative","flex","flex-row","mb-3","self-end","bg-base_blue/20","rounded-lg","p-2","ml-32"],[1,"message__des","flex-row","justify-end","w-full"],[1,"message__text","ml-auto","w-fit"],[1,"dialog","absolute","-right-[15px]","bottom-2","border-[5px]","border-transparent","border-l-[10px]","border-l-base_blue/20"],["src","assets/profile-conv.svg","alt","profile",1,"w-8","h-8","ml-1"]],template:function(i,o){if(1&i&&(t.YNc(0,mt,12,6,"div",0),t.YNc(1,ht,12,6,"ng-template",null,1,t.W1O)),2&i){const n=t.MAs(2);t.Q6J("ngIf",(null==o.authData?null:o.authData.uid)!==o.messageData.authorID)("ngIfElse",n)}},dependencies:[p.O5,p.uU]})}return e})(),dt=(()=>{class e{constructor(s){this.store=s}removeConversation(){this.store.dispatch(m.v4({conversationID:this.conversationID})),this.store.dispatch(f.zG({conversationID:this.conversationID})),this.closeModal()}closeModal(){this.store.dispatch(m.jD({isRemoveConversationModal:!1}))}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(a.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-conversation-remove"]],inputs:{conversationID:"conversationID"},decls:9,vars:0,consts:[[1,"form","flex","flex-col","justify-center","px-6","py-12","lg:px-4","bg-white","rounded-lg","w-[500px]","mt-[-50%]"],[1,"text-center","text-2xl","font-bold","leading-9","tracking-tight","text-base_green"],[1,"mt-10"],[1,"mt-8","flex","justify-between"],["type","submit",1,"mt-2","w-full","basis-2/5","rounded-md","bg-base_blue","p-2","px-3","text-sm","font-semibold","leading-6","text-white","shadow-sm","transition","delay-75","ease-in-out","opacity-100","hover:cursor-pointer","active:scale-[95%]",3,"click"],["type","submit",1,"mt-2","w-full","basis-2/5","rounded-md","bg-base_blue","p-2","px-3","text-sm","font-semibold","leading-6","text-white","shadow-sm","transition","delay-75","ease-in-out","hover:cursor-pointer","active:scale-[95%]",3,"click"]],template:function(i,o){1&i&&(t.TgZ(0,"section",0)(1,"h2",1),t._uU(2," Are you sure that you want to delete conversation? "),t.qZA(),t.TgZ(3,"div",2)(4,"div",3)(5,"button",4),t.NdJ("click",function(){return o.removeConversation()}),t._uU(6," Delete "),t.qZA(),t.TgZ(7,"button",5),t.NdJ("click",function(){return o.closeModal()}),t._uU(8," Cancel "),t.qZA()()()())}})}return e})();function gt(e,r){if(1&e&&(t.TgZ(0,"div",18),t._uU(1),t.qZA()),2&e){const s=t.oxw();t.xp6(1),t.AsE(" 00:",s.timer<10?"0":"","",s.timer," ")}}function vt(e,r){1&e&&(t.TgZ(0,"div",19),t._uU(1," No messages. "),t.qZA())}function ft(e,r){1&e&&t._UZ(0,"app-message",20),2&e&&t.Q6J("messageData",r.$implicit)}function _t(e,r){if(1&e&&(t.TgZ(0,"div")(1,"app-modal"),t._UZ(2,"app-conversation-remove",21),t.qZA()()),2&e){const s=t.oxw();t.xp6(2),t.Q6J("conversationID",s.conversationID)}}let bt=(()=>{class e{constructor(s,i){this.store=s,this.isLoading$=this.store.select(ct),this.isActive$=this.store.select(lt),this.isRemoveModal$=this.store.select(ut),this.timer$=this.store.select(pt),this.conversationData$=this.store.select(rt),this.authData$=this.store.select(b.$I),this.isActive=!0,this.timer=0,this.message=new c.NI("",[c.kI.required]),this.conversationName="Conversation",i.params.pipe((0,k.U)(o=>o.conversationID)).subscribe(o=>{this.conversationID=o})}updateConversation(){if(this.isActive){this.store.dispatch(this.conversationData.length?m.D7({conversationID:this.conversationID,science:this.conversationData[this.conversationData.length-1].createdAt}):m.MY({conversationID:this.conversationID})),this.store.dispatch(m.Ze({isActive:!1})),this.store.dispatch(m.ky({timer:59}));const s=setInterval(()=>{this.timer-=1,this.store.dispatch(m.ky({timer:this.timer})),0===this.timer&&(this.store.dispatch(m.Ze({isActive:!0})),clearInterval(s))},1e3)}}deleteConversation(){this.store.dispatch(m.jD({isRemoveConversationModal:!0}))}sentMessage(){if(this.authData&&this.message.valid){const s=this.message.getRawValue();this.store.dispatch(m.FW({messageData:{conversationID:this.conversationID,message:s,authorID:this.authData.uid}})),this.message.setValue("")}}getConversationName(){const s=localStorage.getItem("conversationNameConnections");if(s){const i=JSON.parse(s);this.conversationName=i}return this.conversationName}ngOnInit(){this.store.dispatch(m.MY({conversationID:this.conversationID})),this.subscription=this.timer$.subscribe(n=>{this.timer=n});const s=this.isActive$.subscribe(n=>{this.isActive=n}),i=this.authData$.subscribe(n=>{this.authData=n}),o=this.conversationData$.subscribe(n=>{n&&(this.conversationData=n)});this.subscription.add(s),this.subscription.add(i),this.subscription.add(o)}ngOnDestroy(){this.subscription.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(a.yh),t.Y36(g.gz))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-conversation"]],decls:26,vars:17,consts:[[1,"connections_title","flex","justify-between","items-center","mb-4"],[1,"flex","justify-start","items-center"],["routerLink","",1,"hover:cursor-pointer","active:scale-[95%]","mr-2"],["src","assets/arrow-sm-left.svg","alt","Go to main page",1,"w-10","h-10"],["src","assets/conversation.svg","alt","Go to main page",1,"w-12","h-12","mr-1"],[1,"connections__name","text-2xl","mr-4"],[1,"connections__update","mr-2","hover:cursor-pointer",3,"click"],[3,"active"],["class","connections__timer",4,"ngIf"],[3,"click"],[1,"conversation","flex","flex-col","pb-16",3,"ngClass"],["class","m-auto mt-[250px]",4,"ngIf"],[3,"messageData",4,"ngFor","ngForOf"],[1,"message__add","flex","py-2","px-6","fixed","bottom-0","left-0","w-full","bg-white","dark:bg-blue-200"],["type","text","placeholder","Enter message",1,"border-2","border-base_blue","dark:border-none","flex-grow","placeholder:text-gray-500","p-1","rounded-lg","outline-none",3,"formControl","keyup.enter"],[3,"ngClass","click"],["src","assets/sent.svg","alt","arrow",1,"w-10","h-10"],[4,"ngIf"],[1,"connections__timer"],[1,"m-auto","mt-[250px]"],[3,"messageData"],[3,"conversationID"]],template:function(i,o){if(1&i&&(t.TgZ(0,"div")(1,"div",0)(2,"div",1)(3,"a",2),t._UZ(4,"img",3),t.qZA(),t._UZ(5,"img",4),t.TgZ(6,"div",5),t._uU(7),t.qZA(),t.TgZ(8,"button",6),t.NdJ("click",function(){return o.updateConversation()}),t._UZ(9,"app-refresh-but",7),t.qZA(),t.YNc(10,gt,2,2,"div",8),t.qZA(),t.TgZ(11,"button",9),t.NdJ("click",function(){return o.deleteConversation()}),t.TgZ(12,"app-button"),t._uU(13,"Delete"),t.qZA()()(),t.TgZ(14,"div",10),t.ALo(15,"async"),t.YNc(16,vt,2,0,"div",11),t.ALo(17,"async"),t.YNc(18,ft,1,1,"app-message",12),t.ALo(19,"async"),t.qZA(),t.TgZ(20,"div",13)(21,"input",14),t.NdJ("keyup.enter",function(){return o.sentMessage()}),t.qZA(),t.TgZ(22,"button",15),t.NdJ("click",function(){return o.sentMessage()}),t._UZ(23,"img",16),t.qZA()()(),t.YNc(24,_t,3,1,"div",17),t.ALo(25,"async")),2&i){let n;t.xp6(7),t.hij(" ",o.getConversationName()," "),t.xp6(2),t.Q6J("active",o.isActive),t.xp6(1),t.Q6J("ngIf",!o.isActive),t.xp6(4),t.Q6J("ngClass",t.lcZ(15,9,o.isLoading$)?"opacity-50":"opacity-100"),t.xp6(2),t.Q6J("ngIf",0===(null==(n=t.lcZ(17,11,o.conversationData$))?null:n.length)),t.xp6(2),t.Q6J("ngForOf",t.lcZ(19,13,o.conversationData$)),t.xp6(3),t.Q6J("formControl",o.message),t.xp6(1),t.Q6J("ngClass",null!=o.message.errors&&o.message.errors.required?"opacity-50":"opacity-100"),t.xp6(2),t.Q6J("ngIf",t.lcZ(25,15,o.isRemoveModal$))}},dependencies:[y.r,p.mk,p.sg,p.O5,c.Fj,c.JJ,g.rH,Z,x,c.oH,J,dt,p.Ov]})}return e})();var d=l(6774);const C=(0,a.ZF)("groupDialog"),Dt=(0,a.P1)(C,e=>e.groupData),Zt=(0,a.P1)(C,e=>e.isLoading),xt=(0,a.P1)(C,e=>e.timer),Ct=(0,a.P1)(C,e=>e.isActive);function yt(e,r){if(1&e&&(t.TgZ(0,"div",18),t._uU(1),t.qZA()),2&e){const s=t.oxw();t.xp6(1),t.AsE(" 00:",s.timer<10?"0":"","",s.timer," ")}}function At(e,r){if(1&e){const s=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){t.CHM(s);const o=t.oxw();return t.KtG(o.deleteGroupDialog())}),t.TgZ(1,"app-button"),t._uU(2,"Delete"),t.qZA()()}}function It(e,r){1&e&&(t.TgZ(0,"div",20),t._uU(1," No messages. "),t.qZA())}function Tt(e,r){1&e&&t._UZ(0,"app-message",21),2&e&&t.Q6J("messageData",r.$implicit)}function wt(e,r){if(1&e&&(t.TgZ(0,"div")(1,"app-modal"),t._UZ(2,"app-group-remove",22),t.qZA()()),2&e){const s=t.oxw();t.xp6(2),t.Q6J("groupID",s.groupID)}}const Gt=[{path:"",component:nt},{path:"group/create",component:x},{path:"conversation/:conversationID",component:bt},{path:"group/:groupID",component:(()=>{class e{constructor(s,i){this.store=s,this.isLoading$=this.store.select(Zt),this.isActive$=this.store.select(Ct),this.isRemoveGroupModal$=this.store.select(T),this.timer$=this.store.select(xt),this.groupDialogData$=this.store.select(Dt),this.authData$=this.store.select(b.$I),this.groupsData$=this.store.select(I),this.isActive=!0,this.timer=0,this.message=new c.NI("",[c.kI.required]),this.groupName="Group Dialog",i.params.pipe((0,k.U)(o=>o.groupID)).subscribe(o=>{this.groupID=o})}updateGroupDialog(){if(this.isActive){this.store.dispatch(this.groupDialogData.length?d.ek({groupID:this.groupID,science:this.groupDialogData[this.groupDialogData.length-1].createdAt}):d.DK({groupID:this.groupID})),this.store.dispatch(d.Ze({isActive:!1})),this.store.dispatch(d.Gh({timer:59}));const s=setInterval(()=>{this.timer-=1,this.store.dispatch(d.Gh({timer:this.timer})),0===this.timer&&(this.store.dispatch(d.Ze({isActive:!0})),clearInterval(s))},1e3)}}deleteGroupDialog(){this.store.dispatch(u.p0({removeGroupData:{isRemoveGroupModal:!0,groupID:this.groupID}}))}sentMessage(){if(this.authData&&this.message.valid){const s=this.message.getRawValue();this.store.dispatch(d.$({messageData:{groupID:this.groupID,message:s,authorID:this.authData.uid}})),this.message.setValue("")}}isDeleteButActive(){if(this.authData&&this.groupsData){const s=this.groupsData.find(i=>i.id===this.groupID);if(s)return s.createdBy===this.authData.uid}return!1}getGroupName(){if(this.groupsData){const s=this.groupsData?.find(i=>i.id===this.groupID);s&&(this.groupName=s.name)}return this.groupName}ngOnInit(){this.store.dispatch(d.DK({groupID:this.groupID})),this.subscription=this.timer$.subscribe(h=>{this.timer=h});const s=this.isActive$.subscribe(h=>{this.isActive=h}),i=this.authData$.subscribe(h=>{this.authData=h}),o=this.groupsData$.subscribe(h=>{this.groupsData=h}),n=this.groupDialogData$.subscribe(h=>{this.groupDialogData=h});this.subscription.add(s),this.subscription.add(i),this.subscription.add(o),this.subscription.add(n)}ngOnDestroy(){this.subscription.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(a.yh),t.Y36(g.gz))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-group-dialog"]],decls:24,vars:18,consts:[[1,"groups_title","flex","justify-between","items-center","mb-4"],[1,"flex","justify-start","items-center"],["routerLink","",1,"hover:cursor-pointer","active:scale-[95%]","mr-2"],["src","assets/arrow-sm-left.svg","alt","Go to main page",1,"w-10","h-10"],["src","assets/group.svg","alt","Go to main page",1,"w-12","h-12","mr-1"],[1,"groups__name","text-2xl","mr-4"],[1,"groups__update","mr-2","hover:cursor-pointer",3,"click"],[3,"active"],["class","groups__timer",4,"ngIf"],[3,"click",4,"ngIf"],[1,"conversation","flex","flex-col","pb-16",3,"ngClass"],["class","m-auto mt-[250px]",4,"ngIf"],[3,"messageData",4,"ngFor","ngForOf"],[1,"message__add","flex","py-2","px-6","fixed","bottom-0","left-0","w-full","bg-white","dark:bg-blue-200"],["type","text","placeholder","Enter message",1,"border-2","border-base_blue","dark:border-none","flex-grow","placeholder:text-gray-500","p-1","rounded-lg","outline-none",3,"formControl","keyup.enter"],[3,"ngClass","click"],["src","assets/sent.svg","alt","arrow",1,"w-10","h-10"],[4,"ngIf"],[1,"groups__timer"],[3,"click"],[1,"m-auto","mt-[250px]"],[3,"messageData"],[3,"groupID"]],template:function(i,o){if(1&i&&(t.TgZ(0,"div")(1,"div",0)(2,"div",1)(3,"a",2),t._UZ(4,"img",3),t.qZA(),t._UZ(5,"img",4),t.TgZ(6,"div",5),t._uU(7),t.qZA(),t.TgZ(8,"button",6),t.NdJ("click",function(){return o.updateGroupDialog()}),t._UZ(9,"app-refresh-but",7),t.qZA(),t.YNc(10,yt,2,2,"div",8),t.qZA(),t.YNc(11,At,3,0,"button",9),t.qZA(),t.TgZ(12,"div",10),t.ALo(13,"async"),t.YNc(14,It,2,0,"div",11),t.ALo(15,"async"),t.YNc(16,Tt,1,1,"app-message",12),t.ALo(17,"async"),t.qZA(),t.TgZ(18,"div",13)(19,"input",14),t.NdJ("keyup.enter",function(){return o.sentMessage()}),t.qZA(),t.TgZ(20,"button",15),t.NdJ("click",function(){return o.sentMessage()}),t._UZ(21,"img",16),t.qZA()()(),t.YNc(22,wt,3,1,"div",17),t.ALo(23,"async")),2&i){let n;t.xp6(7),t.Oqu(o.getGroupName()),t.xp6(2),t.Q6J("active",o.isActive),t.xp6(1),t.Q6J("ngIf",!o.isActive),t.xp6(1),t.Q6J("ngIf",o.isDeleteButActive()),t.xp6(1),t.Q6J("ngClass",t.lcZ(13,10,o.isLoading$)?"opacity-50":"opacity-100"),t.xp6(2),t.Q6J("ngIf",0===(null==(n=t.lcZ(15,12,o.groupDialogData$))?null:n.length)),t.xp6(2),t.Q6J("ngForOf",t.lcZ(17,14,o.groupDialogData$)),t.xp6(3),t.Q6J("formControl",o.message),t.xp6(1),t.Q6J("ngClass",null!=o.message.errors&&o.message.errors.required?"opacity-50":"opacity-100"),t.xp6(2),t.Q6J("ngIf",t.lcZ(23,16,o.isRemoveGroupModal$))}},dependencies:[y.r,p.mk,p.sg,p.O5,c.Fj,c.JJ,g.rH,Z,x,c.oH,w,J,p.Ov]})}return e})()}];let kt=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#s=this.\u0275inj=t.cJS({imports:[at.m,c.UX,g.Bz.forChild(Gt)]})}return e})()}}]);
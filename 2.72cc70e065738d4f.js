"use strict";(self.webpackChunkconnections=self.webpackChunkconnections||[]).push([[2],{5002:(wt,A,l)=>{l.r(A),l.d(A,{ConnectionsModule:()=>Tt});var t=l(9468),a=l(3830);const v=(0,a.ZF)("groups"),T=(0,a.P1)(v,e=>e.groupsData),U=(0,a.P1)(v,e=>e.isLoading),$=(0,a.P1)(v,e=>e.timer),N=(0,a.P1)(v,e=>e.isActive),q=(0,a.P1)(v,e=>e.isCreateGroupModal),w=(0,a.P1)(v,e=>e.removeGroupData);var u=l(416),r=l(95),x=l(2490),c=l(6814);let Z=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-refresh-but"]],inputs:{active:"active"},decls:5,vars:1,consts:[["fill","#3b82f6","width","800px","height","800px","stroke","#3b82f6","viewBox","0 0 24 24","id","update","data-name","Flat Line","xmlns","http://www.w3.org/2000/svg",1,"icon","flat-line","w-6","h-6",3,"ngClass"],["id","primary","d","M4,12A8,8,0,0,1,18.93,8",2,"fill","none","stroke-linecap","round","stroke-linejoin","round","stroke-width","2"],["id","primary-2","data-name","primary","d","M20,12A8,8,0,0,1,5.07,16",2,"fill","none","stroke-linecap","round","stroke-linejoin","round","stroke-width","2"],["id","primary-3","data-name","primary","points","14 8 19 8 19 3",2,"fill","none","stroke-linecap","round","stroke-linejoin","round","stroke-width","2"],["id","primary-4","data-name","primary","points","10 16 5 16 5 21",2,"fill","none","stroke-linecap","round","stroke-linejoin","round","stroke-width","2"]],template:function(i,s){1&i&&(t.O4$(),t.TgZ(0,"svg",0),t._UZ(1,"path",1)(2,"path",2)(3,"polyline",3)(4,"polyline",4),t.qZA()),2&i&&t.Q6J("ngClass",s.active?"opacity-100":"opacity-50")},dependencies:[c.mk]})}return e})();const F=["*"];let C=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-modal"]],ngContentSelectors:F,decls:2,vars:0,consts:[[1,"fixed","left-0","top-0","w-full","h-full","backdrop-blur-sm","flex","justify-center","items-center"]],template:function(i,s){1&i&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())}})}return e})();var _=l(9129),d=l(5509);function M(e,p){if(1&e){const o=t.EpF();t.TgZ(0,"button",3),t.NdJ("click",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.addRemoveGroupModal())}),t._uU(1," \u2716 "),t.qZA()}}let O=(()=>{class e{constructor(o,i){this.store=o,this.router=i,this.authData$=this.store.select(_.$I),this.removeButFlag=!1}addRemoveGroupModal(){this.removeButFlag=!0,setTimeout(()=>{this.removeButFlag=!1}),this.store.dispatch(u.p0({removeGroupData:{isRemoveGroupModal:!0,groupID:this.groupData.id}}))}getGroupDialog(){this.removeButFlag||this.router.navigate([`/group/${this.groupData.id}`])}ngOnInit(){this.subscription=this.authData$.subscribe(o=>{this.authData=o})}ngOnDestroy(){this.subscription.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(a.yh),t.Y36(d.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-group"]],inputs:{groupData:"groupData"},decls:4,vars:3,consts:[[1,"groups__item","rounded","min-h-4","w-full","mb-2","p-1","flex","justify-between","items-center",3,"ngClass","click"],[1,"group__title","overflow-hidden"],["class","ml-2",3,"click",4,"ngIf"],[1,"ml-2",3,"click"]],template:function(i,s){1&i&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return s.getGroupDialog()}),t.TgZ(1,"div",1),t._uU(2),t.qZA(),t.YNc(3,M,2,0,"button",2),t.qZA()),2&i&&(t.Q6J("ngClass",s.authData&&s.authData.uid===s.groupData.createdBy?"bg-base_blue/20":"bg-gray-200"),t.xp6(2),t.Oqu(s.groupData.name),t.xp6(1),t.Q6J("ngIf",s.authData&&s.authData.uid===s.groupData.createdBy))},dependencies:[c.mk,c.O5]})}return e})();var P=l(520);function Q(e,p){1&e&&(t.TgZ(0,"div",11),t._uU(1," please enter a username "),t.qZA())}function j(e,p){1&e&&(t.TgZ(0,"div",11),t._uU(1," username should contains less then 30 symbols "),t.qZA())}function L(e,p){if(1&e&&(t.TgZ(0,"div",11),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.hij(" ",null==o.name.errors?null:o.name.errors.forbiddenUsername.value," ")}}let Y=(()=>{class e{constructor(o){this.store=o,this.authData$=this.store.select(_.$I),this.name=new r.NI("",[r.kI.required,r.kI.maxLength(30),(0,P.y)()])}closeModal(){this.store.dispatch(u.N_({isCreateGroupModal:!1}))}createGroup(){const o=this.name.getRawValue();"VALID"===this.name.status&&this.authData&&(this.store.dispatch(u.jQ({name:o,userID:this.authData.uid})),this.closeModal())}ngOnInit(){this.subscription=this.authData$.subscribe(o=>{this.authData=o})}ngOnDestroy(){this.subscription.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(a.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-group-form"]],decls:18,vars:5,consts:[[1,"form","flex","flex-col","justify-center","px-6","py-12","lg:px-4","bg-white","rounded-lg","w-[500px]","mt-[-50%]"],[1,"text-center","text-2xl","font-bold","leading-9","tracking-tight","text-base_green"],[1,"mt-10"],[1,"form__item","mb-3"],["for","name"],["id","name","type","text",1,"text-md","mt-1","block","w-full","rounded-md","border-0","bg-base_white","p-1","text-gray-900","shadow-sm","ring-1","ring-inset","outline-none","ring-gray-300","placeholder:text-gray-400","focus:ring-1","focus:ring-inset","focus:ring-base_blue",3,"formControl"],[1,"mr-auto"],["class","invalid__message w-fit",4,"ngIf"],[1,"mt-8","flex","justify-between"],["type","submit",1,"mt-2","w-full","basis-2/5","rounded-md","bg-base_blue","p-2","px-3","text-sm","font-semibold","leading-6","text-white","shadow-sm","transition","delay-75","ease-in-out",3,"ngClass","click"],["type","submit",1,"mt-2","w-full","basis-2/5","rounded-md","bg-base_blue","p-2","px-3","text-sm","font-semibold","leading-6","text-white","shadow-sm","transition","delay-75","ease-in-out","hover:cursor-pointer","active:scale-[95%]",3,"click"],[1,"invalid__message","w-fit"]],template:function(i,s){1&i&&(t.TgZ(0,"section",0)(1,"h2",1),t._uU(2," Create group "),t.qZA(),t.TgZ(3,"div",2)(4,"div")(5,"div",3)(6,"label",4),t._uU(7,"Group name:"),t.qZA(),t._UZ(8,"input",5),t.TgZ(9,"div",6),t.YNc(10,Q,2,0,"div",7),t.YNc(11,j,2,0,"div",7),t.YNc(12,L,2,1,"div",7),t.qZA()(),t.TgZ(13,"div",8)(14,"button",9),t.NdJ("click",function(){return s.createGroup()}),t._uU(15," Create "),t.qZA(),t.TgZ(16,"button",10),t.NdJ("click",function(){return s.closeModal()}),t._uU(17," Cancel "),t.qZA()()()()()),2&i&&(t.xp6(8),t.Q6J("formControl",s.name),t.xp6(2),t.Q6J("ngIf",null==s.name.errors?null:s.name.errors.required),t.xp6(1),t.Q6J("ngIf",null==s.name.errors?null:s.name.errors.maxlength),t.xp6(1),t.Q6J("ngIf",null==s.name.errors?null:s.name.errors.forbiddenUsername),t.xp6(2),t.Q6J("ngClass","VALID"===s.name.status?"opacity-100 hover:cursor-pointer active:scale-[95%]":"opacity-50 hover:cursor-auto active:scale-100"))},dependencies:[c.mk,c.O5,r.Fj,r.JJ,r.oH],styles:[".ng-invalid[_ngcontent-%COMP%]:not(form){border-left:2px solid #ef4444}.ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%]{border-left:2px solid #42a948}.invalid__message[_ngcontent-%COMP%]{left:0;bottom:-.25rem;color:#ef4444}"]})}return e})(),I=(()=>{class e{constructor(o){this.store=o}removeGroup(){this.store.dispatch(u.XX({groupID:this.groupID})),this.closeModal()}closeModal(){this.store.dispatch(u.p0({removeGroupData:null}))}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(a.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-group-remove"]],inputs:{groupID:"groupID"},decls:9,vars:0,consts:[[1,"form","flex","flex-col","justify-center","px-6","py-12","lg:px-4","bg-white","rounded-lg","w-[500px]","mt-[-50%]"],[1,"text-center","text-2xl","font-bold","leading-9","tracking-tight","text-base_green"],[1,"mt-10"],[1,"mt-8","flex","justify-between"],["type","submit",1,"mt-2","w-full","basis-2/5","rounded-md","bg-base_blue","p-2","px-3","text-sm","font-semibold","leading-6","text-white","shadow-sm","transition","delay-75","ease-in-out","opacity-100","hover:cursor-pointer","active:scale-[95%]",3,"click"],["type","submit",1,"mt-2","w-full","basis-2/5","rounded-md","bg-base_blue","p-2","px-3","text-sm","font-semibold","leading-6","text-white","shadow-sm","transition","delay-75","ease-in-out","hover:cursor-pointer","active:scale-[95%]",3,"click"]],template:function(i,s){1&i&&(t.TgZ(0,"section",0)(1,"h2",1),t._uU(2," Are you sure that you want to delete group? "),t.qZA(),t.TgZ(3,"div",2)(4,"div",3)(5,"button",4),t.NdJ("click",function(){return s.removeGroup()}),t._uU(6," Delete "),t.qZA(),t.TgZ(7,"button",5),t.NdJ("click",function(){return s.closeModal()}),t._uU(8," Cancel "),t.qZA()()()())}})}return e})();function R(e,p){1&e&&t._UZ(0,"app-group",12),2&e&&t.Q6J("groupData",p.$implicit)}function S(e,p){1&e&&(t.TgZ(0,"div")(1,"app-modal"),t._UZ(2,"app-group-form"),t.qZA()())}function V(e,p){if(1&e&&(t.TgZ(0,"div")(1,"app-modal"),t._UZ(2,"app-group-remove",13),t.qZA()()),2&e){const o=p.ngIf;t.xp6(2),t.Q6J("groupID",o.groupID)}}let X=(()=>{class e{constructor(o){this.store=o,this.isLoading$=this.store.select(U),this.timer$=this.store.select($),this.isActive$=this.store.select(N),this.groupsData$=this.store.select(T),this.isCreateGroupModal$=this.store.select(q),this.removeGroupData$=this.store.select(w),this.isActive=!0,this.timer=0,this.searchValue=new r.NI("")}updateGroups(){if(this.isActive){this.searchValue.setValue(""),this.store.dispatch(u.xc()),this.store.dispatch(u.Ze({isActive:!1})),this.store.dispatch(u.B9({timer:59}));const o=setInterval(()=>{this.timer-=1,this.store.dispatch(u.B9({timer:this.timer})),0===this.timer&&(this.store.dispatch(u.Ze({isActive:!0})),clearInterval(o))},1e3)}}createGroup(){this.store.dispatch(u.N_({isCreateGroupModal:!0}))}findGroups(){const o=this.searchValue.getRawValue();if(this.groupsData){const i=this.groupsData.filter(s=>s.name.includes(o));this.filteredGroupData=i}}ngOnInit(){this.subscription=this.timer$.subscribe(s=>{this.timer=s});const o=this.isActive$.subscribe(s=>{this.isActive=s}),i=this.groupsData$.subscribe(s=>{this.groupsData=s,this.filteredGroupData=s});this.subscription.add(o),this.subscription.add(i)}ngOnDestroy(){this.subscription.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(a.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-groups"]],decls:21,vars:14,consts:[[1,"connections_title","flex","justify-between","items-center","mb-4","min-h-[40px]"],[1,"flex","justify-start","items-center","flex-wrap"],[1,"connections__name","text-3xl","mr-2"],[1,"connections__update","mr-2","hover:cursor-pointer",3,"click"],[3,"active"],[1,"connections__timer","mr-4"],[1,"py-1","mr-2"],["type","search","placeholder","Search group",1,"text-md","block","min-w-[120px]","max-w-[250px]","w-full","rounded-md","border-0","bg-base_white","p-1","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","outline-none",3,"formControl","input"],[3,"click"],[1,"groups__container","max-h-[82vh]","overflow-y-scroll",3,"ngClass"],[3,"groupData",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"groupData"],[3,"groupID"]],template:function(i,s){1&i&&(t.TgZ(0,"div")(1,"div",0)(2,"div",1)(3,"div",2),t._uU(4,"Groups"),t.qZA(),t.TgZ(5,"button",3),t.NdJ("click",function(){return s.updateGroups()}),t._UZ(6,"app-refresh-but",4),t.qZA(),t.TgZ(7,"div",5),t._uU(8),t.qZA(),t.TgZ(9,"div",6)(10,"input",7),t.NdJ("input",function(){return s.findGroups()}),t.qZA()()(),t.TgZ(11,"button",8),t.NdJ("click",function(){return s.createGroup()}),t.TgZ(12,"app-button"),t._uU(13,"Create"),t.qZA()()(),t.TgZ(14,"div",9),t.ALo(15,"async"),t.YNc(16,R,1,1,"app-group",10),t.qZA()(),t.YNc(17,S,3,0,"div",11),t.ALo(18,"async"),t.YNc(19,V,3,1,"div",11),t.ALo(20,"async")),2&i&&(t.xp6(6),t.Q6J("active",s.isActive),t.xp6(2),t.AsE(" 00:",s.timer<10?"0":"","",s.timer," "),t.xp6(2),t.Q6J("formControl",s.searchValue),t.xp6(4),t.Q6J("ngClass",t.lcZ(15,8,s.isLoading$)?"opacity-50":"opacity-100"),t.xp6(2),t.Q6J("ngForOf",s.filteredGroupData),t.xp6(1),t.Q6J("ngIf",t.lcZ(18,10,s.isCreateGroupModal$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(20,12,s.removeGroupData$)))},dependencies:[x.r,c.mk,c.sg,c.O5,r.Fj,r.JJ,Z,C,r.oH,O,Y,I,c.Ov]})}return e})();const b=(0,a.ZF)("people"),G=(0,a.P1)(b,e=>e.peopleData),B=(0,a.P1)(b,e=>e.isLoading),E=(0,a.P1)(b,e=>e.timer),H=(0,a.P1)(b,e=>e.isActive),K=(0,a.P1)(b,e=>e.conversationsData);var D=l(1336),m=l(459);function z(e,p){1&e&&(t.TgZ(0,"div",4),t._uU(1," Have chat"),t.TgZ(2,"span",5),t._uU(3,"\u25cf"),t.qZA()())}function W(e,p){1&e&&(t.TgZ(0,"div",6),t._uU(1," Have not chat"),t.TgZ(2,"span",7),t._uU(3,"\u25cf"),t.qZA()())}let tt=(()=>{class e{constructor(o,i){this.store=o,this.router=i,this.conversationsData$=this.store.select(K)}getConversation(){localStorage.setItem("conversationName",JSON.stringify(this.personData.name)),this.personData.haveConversationID&&this.conversationsData?this.conversationsData.forEach(o=>{o.companionID===this.personData.uid&&this.router.navigate([`/conversation/${o.id}`])}):this.store.dispatch(m.a7({companion:this.personData.uid}))}ngOnInit(){this.subscription=this.conversationsData$.subscribe(o=>{this.conversationsData=o})}ngOnDestroy(){this.subscription.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(a.yh),t.Y36(d.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-person"]],inputs:{personData:"personData"},decls:6,vars:4,consts:[[1,"groups__item","rounded","min-h-4","w-full","mb-2","p-1","flex","justify-between","items-center",3,"ngClass","click"],[1,"group__title","overflow-hidden"],["class","ml-2",4,"ngIf","ngIfElse"],["haveNotChat",""],[1,"ml-2"],[1,"ml-2","text-green-500"],[1,"min-w-max","ml-2"],[1,"ml-2","text-gray-400"]],template:function(i,s){if(1&i&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return s.getConversation()}),t.TgZ(1,"div",1),t._uU(2),t.qZA(),t.YNc(3,z,4,0,"div",2),t.YNc(4,W,4,0,"ng-template",null,3,t.W1O),t.qZA()),2&i){const n=t.MAs(5);t.Q6J("ngClass",s.personData.haveConversationID?"bg-base_blue/20":"bg-gray-200"),t.xp6(2),t.Oqu(s.personData.name),t.xp6(1),t.Q6J("ngIf",s.personData.haveConversationID)("ngIfElse",n)}},dependencies:[c.mk,c.O5]})}return e})();function et(e,p){1&e&&t._UZ(0,"app-person",9),2&e&&t.Q6J("personData",p.$implicit)}let st=(()=>{class e{constructor(o){this.store=o,this.timer$=this.store.select(E),this.isActive$=this.store.select(H),this.isLoading$=this.store.select(B),this.peopleData$=this.store.select(G),this.searchValue=new r.NI(""),this.isActive=!0,this.timer=0}updatePeople(){if(this.isActive){this.searchValue.setValue(""),this.store.dispatch(D.eS()),this.store.dispatch(D.Ze({isActive:!1})),this.store.dispatch(D.wC({timer:59}));const o=setInterval(()=>{this.timer-=1,this.store.dispatch(D.wC({timer:this.timer})),0===this.timer&&(this.store.dispatch(D.Ze({isActive:!0})),clearInterval(o))},1e3)}}findPeople(){const o=this.searchValue.getRawValue();if(this.peopleData){const i=this.peopleData.filter(s=>s.name.includes(o));this.filteredPeopleData=i}}ngOnInit(){this.subscription=this.timer$.subscribe(s=>{this.timer=s});const o=this.isActive$.subscribe(s=>{this.isActive=s}),i=this.peopleData$.subscribe(s=>{this.peopleData=s,this.filteredPeopleData=s});this.subscription.add(o),this.subscription.add(i)}ngOnDestroy(){this.subscription.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(a.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-people"]],decls:13,vars:8,consts:[[1,"people_title","flex","justify-start","items-center","mb-4","min-h-[40px]","flex-wrap"],[1,"people__name","text-3xl","mr-2"],[1,"people__update","mr-2","hover:cursor-pointer",3,"click"],[3,"active"],[1,"people__timer","mr-4"],[1,"py-1","mr-2"],["type","search","placeholder","Search person",1,"text-md","block","min-w-[120px]","max-w-[250px]","w-full","rounded-md","border-0","bg-base_white","p-1","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","outline-none",3,"formControl","input"],[1,"people__container","max-h-[82vh]","overflow-y-scroll",3,"ngClass"],[3,"personData",4,"ngFor","ngForOf"],[3,"personData"]],template:function(i,s){1&i&&(t.TgZ(0,"div")(1,"div",0)(2,"div",1),t._uU(3,"Peoples"),t.qZA(),t.TgZ(4,"button",2),t.NdJ("click",function(){return s.updatePeople()}),t._UZ(5,"app-refresh-but",3),t.qZA(),t.TgZ(6,"div",4),t._uU(7),t.qZA(),t.TgZ(8,"div",5)(9,"input",6),t.NdJ("input",function(){return s.findPeople()}),t.qZA()()(),t.TgZ(10,"div",7),t.ALo(11,"async"),t.YNc(12,et,1,1,"app-person",8),t.qZA()()),2&i&&(t.xp6(5),t.Q6J("active",s.isActive),t.xp6(2),t.AsE(" 00:",s.timer<10?"0":"","",s.timer," "),t.xp6(2),t.Q6J("formControl",s.searchValue),t.xp6(1),t.Q6J("ngClass",t.lcZ(11,6,s.isLoading$)?"opacity-50":"opacity-100"),t.xp6(2),t.Q6J("ngForOf",s.filteredPeopleData))},dependencies:[c.mk,c.sg,r.Fj,r.JJ,Z,r.oH,tt,c.Ov]})}return e})(),ot=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-connections"]],decls:6,vars:0,consts:[[1,"connections","flex","justify-between"],[1,"connections__item","w-[50%]"],[1,"w-[1px]","bg-gray-200","mx-3"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-groups"),t.qZA(),t._UZ(3,"div",2),t.TgZ(4,"div",1),t._UZ(5,"app-people"),t.qZA()())},dependencies:[X,st]})}return e})();var it=l(6208),k=l(7398);const f=(0,a.ZF)("conversation"),nt=((0,a.P1)(f,e=>e.conversationID),(0,a.P1)(f,e=>e.conversationData)),at=(0,a.P1)(f,e=>e.isLoading),rt=(0,a.P1)(f,e=>e.timer),ct=(0,a.P1)(f,e=>e.isActive),pt=(0,a.P1)(f,e=>e.isRemoveConversationModal);function lt(e,p){if(1&e&&(t.TgZ(0,"div",2),t._UZ(1,"img",3),t.TgZ(2,"div",4)(3,"div",5)(4,"div",6),t._uU(5),t.qZA(),t.TgZ(6,"div",6),t._uU(7),t.ALo(8,"date"),t.qZA()(),t.TgZ(9,"div",7),t._uU(10),t.qZA(),t._UZ(11,"div",8),t.qZA()()),2&e){const o=t.oxw();t.xp6(5),t.Oqu(o.getUserName()),t.xp6(2),t.hij(" ",t.xi3(8,3,o.messageData.createdAt,"short")," "),t.xp6(3),t.Oqu(o.messageData.message)}}function ut(e,p){if(1&e&&(t.TgZ(0,"div",9)(1,"div",10)(2,"div",5)(3,"div",6),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"div",6),t._uU(7),t.qZA()(),t.TgZ(8,"div",11),t._uU(9),t.qZA(),t._UZ(10,"div",12),t.qZA(),t._UZ(11,"img",13),t.qZA()),2&e){const o=t.oxw();t.xp6(4),t.hij(" ",t.xi3(5,3,o.messageData.createdAt,"short")," "),t.xp6(3),t.Oqu(o.getUserName()),t.xp6(2),t.hij(" ",o.messageData.message," ")}}let J=(()=>{class e{constructor(o){this.store=o,this.peopleData$=this.store.select(G),this.authData$=this.store.select(_.$I)}getUserName(){return this.peopleData&&this.peopleData.find(i=>i.uid===this.messageData.authorID)?.name||"Unknown user"}ngOnInit(){this.subscription=this.peopleData$.subscribe(i=>{this.peopleData=i});const o=this.authData$.subscribe(i=>{this.authData=i});this.subscription.add(o)}ngOnDestroy(){this.subscription.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(a.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-message"]],inputs:{messageData:"messageData"},decls:3,vars:2,consts:[["class","relative message flex flex-row mb-3 self-start bg-gray-200 rounded-lg p-2 mr-32",4,"ngIf","ngIfElse"],["myMessage",""],[1,"relative","message","flex","flex-row","mb-3","self-start","bg-gray-200","rounded-lg","p-2","mr-32"],["src","assets/profile-conv.svg","alt","profile",1,"w-8","h-8","mr-1"],[1,"message__des","flex-row","justify-start","w-full"],[1,"flex","w-full","justify-between"],[1,"message__name","text-black"],[1,"message__text","mr-auto"],[1,"dialog","absolute","-left-[15px]","bottom-2","border-[5px]","border-transparent","border-r-[10px]","border-r-gray-200"],[1,"message","relative","flex","flex-row","mb-3","self-end","bg-base_blue/20","rounded-lg","p-2","ml-32"],[1,"message__des","flex-row","justify-end","w-full"],[1,"message__text","ml-auto","w-fit"],[1,"dialog","absolute","-right-[15px]","bottom-2","border-[5px]","border-transparent","border-l-[10px]","border-l-base_blue/20"],["src","assets/profile-conv.svg","alt","profile",1,"w-8","h-8","ml-1"]],template:function(i,s){if(1&i&&(t.YNc(0,lt,12,6,"div",0),t.YNc(1,ut,12,6,"ng-template",null,1,t.W1O)),2&i){const n=t.MAs(2);t.Q6J("ngIf",(null==s.authData?null:s.authData.uid)!==s.messageData.authorID)("ngIfElse",n)}},dependencies:[c.O5,c.uU]})}return e})(),mt=(()=>{class e{constructor(o){this.store=o}removeConversation(){this.store.dispatch(m.v4({conversationID:this.conversationID})),this.closeModal()}closeModal(){this.store.dispatch(m.jD({isRemoveConversationModal:!1}))}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(a.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-conversation-remove"]],inputs:{conversationID:"conversationID"},decls:9,vars:0,consts:[[1,"form","flex","flex-col","justify-center","px-6","py-12","lg:px-4","bg-white","rounded-lg","w-[500px]","mt-[-50%]"],[1,"text-center","text-2xl","font-bold","leading-9","tracking-tight","text-base_green"],[1,"mt-10"],[1,"mt-8","flex","justify-between"],["type","submit",1,"mt-2","w-full","basis-2/5","rounded-md","bg-base_blue","p-2","px-3","text-sm","font-semibold","leading-6","text-white","shadow-sm","transition","delay-75","ease-in-out","opacity-100","hover:cursor-pointer","active:scale-[95%]",3,"click"],["type","submit",1,"mt-2","w-full","basis-2/5","rounded-md","bg-base_blue","p-2","px-3","text-sm","font-semibold","leading-6","text-white","shadow-sm","transition","delay-75","ease-in-out","hover:cursor-pointer","active:scale-[95%]",3,"click"]],template:function(i,s){1&i&&(t.TgZ(0,"section",0)(1,"h2",1),t._uU(2," Are you sure that you want to delete conversation? "),t.qZA(),t.TgZ(3,"div",2)(4,"div",3)(5,"button",4),t.NdJ("click",function(){return s.removeConversation()}),t._uU(6," Delete "),t.qZA(),t.TgZ(7,"button",5),t.NdJ("click",function(){return s.closeModal()}),t._uU(8," Cancel "),t.qZA()()()())}})}return e})();function ht(e,p){1&e&&(t.TgZ(0,"div",18),t._uU(1," No messages. "),t.qZA())}function gt(e,p){1&e&&t._UZ(0,"app-message",19),2&e&&t.Q6J("messageData",p.$implicit)}function dt(e,p){if(1&e&&(t.TgZ(0,"div")(1,"app-modal"),t._UZ(2,"app-conversation-remove",20),t.qZA()()),2&e){const o=t.oxw();t.xp6(2),t.Q6J("conversationID",o.conversationID)}}let vt=(()=>{class e{constructor(o,i){this.store=o,this.isLoading$=this.store.select(at),this.isActive$=this.store.select(ct),this.isRemoveModal$=this.store.select(pt),this.timer$=this.store.select(rt),this.conversationData$=this.store.select(nt),this.authData$=this.store.select(_.$I),this.isActive=!0,this.timer=0,this.message=new r.NI("",[r.kI.required]),this.conversationName="Conversation",i.params.pipe((0,k.U)(s=>s.conversationID)).subscribe(s=>{this.conversationID=s})}updateConversation(){if(this.isActive){this.store.dispatch(this.conversationData.length?m.D7({conversationID:this.conversationID,science:this.conversationData[this.conversationData.length-1].createdAt}):m.MY({conversationID:this.conversationID})),this.store.dispatch(m.Ze({isActive:!1})),this.store.dispatch(m.ky({timer:59}));const o=setInterval(()=>{this.timer-=1,this.store.dispatch(m.ky({timer:this.timer})),0===this.timer&&(this.store.dispatch(m.Ze({isActive:!0})),clearInterval(o))},1e3)}}deleteConversation(){this.store.dispatch(m.jD({isRemoveConversationModal:!0}))}sentMessage(){if(this.authData&&this.message.valid){const o=this.message.getRawValue();this.store.dispatch(m.FW({messageData:{conversationID:this.conversationID,message:o,authorID:this.authData.uid}})),this.message.setValue("")}}getConversationName(){const o=localStorage.getItem("conversationName");if(o){const i=JSON.parse(o);this.conversationName=i}return this.conversationName}ngOnInit(){this.store.dispatch(m.MY({conversationID:this.conversationID})),this.subscription=this.timer$.subscribe(n=>{this.timer=n});const o=this.isActive$.subscribe(n=>{this.isActive=n}),i=this.authData$.subscribe(n=>{this.authData=n}),s=this.conversationData$.subscribe(n=>{n&&(this.conversationData=n)});this.subscription.add(o),this.subscription.add(i),this.subscription.add(s)}ngOnDestroy(){this.subscription.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(a.yh),t.Y36(d.gz))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-conversation"]],decls:27,vars:18,consts:[[1,"connections_title","flex","justify-between","items-center","mb-4"],[1,"flex","justify-start","items-center"],["routerLink","",1,"hover:cursor-pointer","active:scale-[95%]","mr-2"],["src","assets/arrow-sm-left.svg","alt","Go to main page",1,"w-10","h-10"],["src","assets/conversation.svg","alt","Go to main page",1,"w-12","h-12","mr-1"],[1,"connections__name","text-3xl","mr-4"],[1,"connections__update","mr-2","hover:cursor-pointer",3,"click"],[3,"active"],[1,"connections__timer"],[3,"click"],[1,"conversation","flex","flex-col","pb-16",3,"ngClass"],["class","m-auto mt-[250px]",4,"ngIf"],[3,"messageData",4,"ngFor","ngForOf"],[1,"message__add","flex","py-2","px-6","fixed","bottom-0","left-0","w-full","bg-white"],["type","text","placeholder","Enter message",1,"border-2","border-base_blue","flex-grow","placeholder:text-gray-500","p-1","rounded-lg","outline-none",3,"formControl","keyup.enter"],[3,"ngClass","click"],["src","assets/sent.svg","alt","arrow",1,"w-10","h-10"],[4,"ngIf"],[1,"m-auto","mt-[250px]"],[3,"messageData"],[3,"conversationID"]],template:function(i,s){if(1&i&&(t.TgZ(0,"div")(1,"div",0)(2,"div",1)(3,"a",2),t._UZ(4,"img",3),t.qZA(),t._UZ(5,"img",4),t.TgZ(6,"div",5),t._uU(7),t.qZA(),t.TgZ(8,"button",6),t.NdJ("click",function(){return s.updateConversation()}),t._UZ(9,"app-refresh-but",7),t.qZA(),t.TgZ(10,"div",8),t._uU(11),t.qZA()(),t.TgZ(12,"button",9),t.NdJ("click",function(){return s.deleteConversation()}),t.TgZ(13,"app-button"),t._uU(14,"Delete"),t.qZA()()(),t.TgZ(15,"div",10),t.ALo(16,"async"),t.YNc(17,ht,2,0,"div",11),t.ALo(18,"async"),t.YNc(19,gt,1,1,"app-message",12),t.ALo(20,"async"),t.qZA(),t.TgZ(21,"div",13)(22,"input",14),t.NdJ("keyup.enter",function(){return s.sentMessage()}),t.qZA(),t.TgZ(23,"button",15),t.NdJ("click",function(){return s.sentMessage()}),t._UZ(24,"img",16),t.qZA()()(),t.YNc(25,dt,3,1,"div",17),t.ALo(26,"async")),2&i){let n;t.xp6(7),t.hij(" ",s.getConversationName()," "),t.xp6(2),t.Q6J("active",s.isActive),t.xp6(2),t.AsE(" 00:",s.timer<10?"0":"","",s.timer," "),t.xp6(4),t.Q6J("ngClass",t.lcZ(16,10,s.isLoading$)?"opacity-50":"opacity-100"),t.xp6(2),t.Q6J("ngIf",0===(null==(n=t.lcZ(18,12,s.conversationData$))?null:n.length)),t.xp6(2),t.Q6J("ngForOf",t.lcZ(20,14,s.conversationData$)),t.xp6(3),t.Q6J("formControl",s.message),t.xp6(1),t.Q6J("ngClass",null!=s.message.errors&&s.message.errors.required?"opacity-50":"opacity-100"),t.xp6(2),t.Q6J("ngIf",t.lcZ(26,16,s.isRemoveModal$))}},dependencies:[x.r,c.mk,c.sg,c.O5,r.Fj,r.JJ,d.rH,Z,C,r.oH,J,mt,c.Ov]})}return e})();var g=l(6774);const y=(0,a.ZF)("groupDialog"),ft=(0,a.P1)(y,e=>e.groupData),_t=(0,a.P1)(y,e=>e.isLoading),bt=(0,a.P1)(y,e=>e.timer),Dt=(0,a.P1)(y,e=>e.isActive);function Zt(e,p){if(1&e){const o=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.deleteGroupDialog())}),t.TgZ(1,"app-button"),t._uU(2,"Delete"),t.qZA()()}}function Ct(e,p){1&e&&(t.TgZ(0,"div",19),t._uU(1," No messages. "),t.qZA())}function yt(e,p){1&e&&t._UZ(0,"app-message",20),2&e&&t.Q6J("messageData",p.$implicit)}function xt(e,p){if(1&e&&(t.TgZ(0,"div")(1,"app-modal"),t._UZ(2,"app-group-remove",21),t.qZA()()),2&e){const o=t.oxw();t.xp6(2),t.Q6J("groupID",o.groupID)}}const At=[{path:"",component:ot},{path:"group/create",component:C},{path:"conversation/:conversationID",component:vt},{path:"group/:groupID",component:(()=>{class e{constructor(o,i){this.store=o,this.isLoading$=this.store.select(_t),this.isActive$=this.store.select(Dt),this.isRemoveGroupModal$=this.store.select(w),this.timer$=this.store.select(bt),this.groupDialogData$=this.store.select(ft),this.authData$=this.store.select(_.$I),this.groupsData$=this.store.select(T),this.isActive=!0,this.timer=0,this.message=new r.NI("",[r.kI.required]),this.groupName="Group Dialog",i.params.pipe((0,k.U)(s=>s.groupID)).subscribe(s=>{this.groupID=s})}updateGroupDialog(){if(this.isActive){this.store.dispatch(this.groupDialogData.length?g.ek({groupID:this.groupID,science:this.groupDialogData[this.groupDialogData.length-1].createdAt}):g.DK({groupID:this.groupID})),this.store.dispatch(g.Ze({isActive:!1})),this.store.dispatch(g.Gh({timer:59}));const o=setInterval(()=>{this.timer-=1,this.store.dispatch(g.Gh({timer:this.timer})),0===this.timer&&(this.store.dispatch(g.Ze({isActive:!0})),clearInterval(o))},1e3)}}deleteGroupDialog(){this.store.dispatch(u.p0({removeGroupData:{isRemoveGroupModal:!0,groupID:this.groupID}}))}sentMessage(){if(this.authData&&this.message.valid){const o=this.message.getRawValue();this.store.dispatch(g.$({messageData:{groupID:this.groupID,message:o,authorID:this.authData.uid}})),this.message.setValue("")}}isDeleteButActive(){if(this.authData&&this.groupsData){const o=this.groupsData.find(i=>i.id===this.groupID);if(o)return o.createdBy===this.authData.uid}return!1}getGroupName(){if(this.groupsData){const o=this.groupsData?.find(i=>i.id===this.groupID);o&&(this.groupName=o.name)}return this.groupName}ngOnInit(){this.store.dispatch(g.DK({groupID:this.groupID})),this.subscription=this.timer$.subscribe(h=>{this.timer=h});const o=this.isActive$.subscribe(h=>{this.isActive=h}),i=this.authData$.subscribe(h=>{this.authData=h}),s=this.groupsData$.subscribe(h=>{this.groupsData=h}),n=this.groupDialogData$.subscribe(h=>{this.groupDialogData=h});this.subscription.add(o),this.subscription.add(i),this.subscription.add(s),this.subscription.add(n)}ngOnDestroy(){this.subscription.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(a.yh),t.Y36(d.gz))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-group-dialog"]],decls:25,vars:19,consts:[[1,"groups_title","flex","justify-between","items-center","mb-4"],[1,"flex","justify-start","items-center"],["routerLink","",1,"hover:cursor-pointer","active:scale-[95%]","mr-2"],["src","assets/arrow-sm-left.svg","alt","Go to main page",1,"w-10","h-10"],["src","assets/group.svg","alt","Go to main page",1,"w-12","h-12","mr-1"],[1,"groups__name","text-3xl","mr-4"],[1,"groups__update","mr-2","hover:cursor-pointer",3,"click"],[3,"active"],[1,"groups__timer"],[3,"click",4,"ngIf"],[1,"conversation","flex","flex-col","pb-16",3,"ngClass"],["class","m-auto mt-[250px]",4,"ngIf"],[3,"messageData",4,"ngFor","ngForOf"],[1,"message__add","flex","py-2","px-6","fixed","bottom-0","left-0","w-full","bg-white"],["type","text","placeholder","Enter message",1,"border-2","border-base_blue","flex-grow","placeholder:text-gray-500","p-1","rounded-lg","outline-none",3,"formControl","keyup.enter"],[3,"ngClass","click"],["src","assets/sent.svg","alt","arrow",1,"w-10","h-10"],[4,"ngIf"],[3,"click"],[1,"m-auto","mt-[250px]"],[3,"messageData"],[3,"groupID"]],template:function(i,s){if(1&i&&(t.TgZ(0,"div")(1,"div",0)(2,"div",1)(3,"a",2),t._UZ(4,"img",3),t.qZA(),t._UZ(5,"img",4),t.TgZ(6,"div",5),t._uU(7),t.qZA(),t.TgZ(8,"button",6),t.NdJ("click",function(){return s.updateGroupDialog()}),t._UZ(9,"app-refresh-but",7),t.qZA(),t.TgZ(10,"div",8),t._uU(11),t.qZA()(),t.YNc(12,Zt,3,0,"button",9),t.qZA(),t.TgZ(13,"div",10),t.ALo(14,"async"),t.YNc(15,Ct,2,0,"div",11),t.ALo(16,"async"),t.YNc(17,yt,1,1,"app-message",12),t.ALo(18,"async"),t.qZA(),t.TgZ(19,"div",13)(20,"input",14),t.NdJ("keyup.enter",function(){return s.sentMessage()}),t.qZA(),t.TgZ(21,"button",15),t.NdJ("click",function(){return s.sentMessage()}),t._UZ(22,"img",16),t.qZA()()(),t.YNc(23,xt,3,1,"div",17),t.ALo(24,"async")),2&i){let n;t.xp6(7),t.Oqu(s.getGroupName()),t.xp6(2),t.Q6J("active",s.isActive),t.xp6(2),t.AsE("00:",s.timer<10?"0":"","",s.timer,""),t.xp6(1),t.Q6J("ngIf",s.isDeleteButActive()),t.xp6(1),t.Q6J("ngClass",t.lcZ(14,11,s.isLoading$)?"opacity-50":"opacity-100"),t.xp6(2),t.Q6J("ngIf",0===(null==(n=t.lcZ(16,13,s.groupDialogData$))?null:n.length)),t.xp6(2),t.Q6J("ngForOf",t.lcZ(18,15,s.groupDialogData$)),t.xp6(3),t.Q6J("formControl",s.message),t.xp6(1),t.Q6J("ngClass",null!=s.message.errors&&s.message.errors.required?"opacity-50":"opacity-100"),t.xp6(2),t.Q6J("ngIf",t.lcZ(24,17,s.isRemoveGroupModal$))}},dependencies:[x.r,c.mk,c.sg,c.O5,r.Fj,r.JJ,d.rH,Z,C,r.oH,I,J,c.Ov]})}return e})()}];let Tt=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#s=this.\u0275inj=t.cJS({imports:[it.m,r.UX,d.Bz.forChild(At)]})}return e})()}}]);
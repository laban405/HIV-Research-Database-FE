"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[4033],{24033:(it,u,i)=>{i.r(u),i.d(u,{EditCommunityPageModule:()=>ot});var s=i(69808),h=i(42501),g=i(35897),I=i(34736),t=i(5e3),m=i(74202),d=i(86956);const R=function(n){return{active:n}},F=function(n){return[n]};function E(n,a){if(1&n&&(t.\u0275\u0275elementStart(0,"li",13)(1,"a",14),t.\u0275\u0275text(2),t.\u0275\u0275pipe(3,"translate"),t.\u0275\u0275elementEnd()()),2&n){const e=a.$implicit,o=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275property("ngClass",t.\u0275\u0275pureFunction1(5,R,e===o.currentPage))("routerLink",t.\u0275\u0275pureFunction1(7,F,"./"+e)),t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(3,3,o.type+".edit.tabs."+e+".head")," ")}}function B(n,a){if(1&n&&(t.\u0275\u0275elementStart(0,"a",15),t.\u0275\u0275pipe(1,"async"),t.\u0275\u0275element(2,"i",16),t.\u0275\u0275text(3),t.\u0275\u0275pipe(4,"translate"),t.\u0275\u0275elementEnd()),2&n){const e=t.\u0275\u0275nextContext();let o;t.\u0275\u0275property("routerLink",e.getPageUrl(null==(o=t.\u0275\u0275pipeBind1(1,2,e.dsoRD$))?null:o.payload)),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(4,4,e.type+".edit.return")," ")}}let P=(()=>{class n extends g.x{constructor(e,o){super(e,o),this.router=e,this.route=o,this.type="community"}getPageUrl(e){return(0,I.Ke)(e.id)}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(m.F0),t.\u0275\u0275directiveInject(m.gz))},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["ds-edit-community"]],features:[t.\u0275\u0275InheritDefinitionFeature],decls:21,vars:11,consts:[[1,"container"],[1,"row"],[1,"col-12"],[1,"d-flex","justify-content-between","border-bottom"],[1,"btn","btn-danger",3,"routerLink"],[1,"fas","fa-trash"],[1,"pt-2"],[1,"nav","nav-tabs","justify-content-start","mb-2"],["class","nav-item",4,"ngFor","ngForOf"],[1,"tab-pane","active"],[1,"mb-4"],[1,"col-12","text-right"],["class","btn btn-outline-secondary",3,"routerLink",4,"ngIf"],[1,"nav-item"],[1,"nav-link",3,"ngClass","routerLink"],[1,"btn","btn-outline-secondary",3,"routerLink"],[1,"fas","fa-arrow-left"]],template:function(e,o){if(1&e&&(t.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2"),t.\u0275\u0275text(5),t.\u0275\u0275pipe(6,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(7,"div")(8,"a",4),t.\u0275\u0275pipe(9,"async"),t.\u0275\u0275element(10,"i",5),t.\u0275\u0275text(11),t.\u0275\u0275pipe(12,"translate"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(13,"div",6)(14,"ul",7),t.\u0275\u0275template(15,E,4,9,"li",8),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(16,"div",9)(17,"div",10),t.\u0275\u0275element(18,"router-outlet"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(19,"div",11),t.\u0275\u0275template(20,B,5,6,"a",12),t.\u0275\u0275elementEnd()()()()()()),2&e){let r;t.\u0275\u0275advance(5),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(6,5,o.type+".edit.head")),t.\u0275\u0275advance(3),t.\u0275\u0275property("routerLink",("community"===o.type?"/communities/":"/collections/")+(null==(r=t.\u0275\u0275pipeBind1(9,7,o.dsoRD$))?null:r.payload.uuid)+"/delete"),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(12,9,o.type+".edit.delete"),""),t.\u0275\u0275advance(4),t.\u0275\u0275property("ngForOf",o.pages),t.\u0275\u0275advance(5),t.\u0275\u0275property("ngIf",!o.hideReturnButton)}},directives:[m.yS,s.sg,s.mk,m.lC,s.O5],pipes:[d.X$,s.Ov],encapsulation:2}),n})();var j=i(56242),$=i(42851),x=i(30858),T=i(55489),M=i(7156);let z=(()=>{class n extends j.Z{constructor(e,o,r,l,C){super(e,o,r,l,C),this.communityDataService=e,this.router=o,this.route=r,this.notificationsService=l,this.translate=C,this.frontendURL="/communities/",this.type=$.S.type}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(x.w),t.\u0275\u0275directiveInject(m.F0),t.\u0275\u0275directiveInject(m.gz),t.\u0275\u0275directiveInject(T.T),t.\u0275\u0275directiveInject(d.sK))},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["ds-community-metadata"]],features:[t.\u0275\u0275InheritDefinitionFeature],decls:2,vars:3,consts:[[3,"dso","submitForm","back","finish"]],template:function(e,o){if(1&e&&(t.\u0275\u0275elementStart(0,"ds-community-form",0),t.\u0275\u0275listener("submitForm",function(l){return o.onSubmit(l)})("back",function(){return o.navigateToHomePage()})("finish",function(){return o.navigateToHomePage()}),t.\u0275\u0275pipe(1,"async"),t.\u0275\u0275elementEnd()),2&e){let r;t.\u0275\u0275property("dso",null==(r=t.\u0275\u0275pipeBind1(1,1,o.dsoRD$))?null:r.payload)}},directives:[M.C],pipes:[s.Ov],encapsulation:2}),n})();var c=i(54004),p=i(50590),y=i(46283),D=i(58046);function S(n,a){if(1&n&&(t.\u0275\u0275element(0,"ds-comcol-role",1),t.\u0275\u0275pipe(1,"async")),2&n){const e=a.$implicit,o=t.\u0275\u0275nextContext();t.\u0275\u0275property("dso",t.\u0275\u0275pipeBind1(1,2,o.community$))("comcolRole",e)}}let O=(()=>{class n{constructor(e){this.route=e}get community$(){return this.dsoRD$.pipe((0,y.xw)(),(0,y.xe)())}getComcolRoles$(){return this.community$.pipe((0,c.U)(e=>[{name:"community-admin",href:e._links.adminGroup.href}]))}ngOnInit(){this.dsoRD$=this.route.parent.data.pipe((0,p.P)(),(0,c.U)(e=>e.dso))}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(m.gz))},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["ds-community-roles"]],decls:2,vars:3,consts:[[3,"dso","comcolRole",4,"ngFor","ngForOf"],[3,"dso","comcolRole"]],template:function(e,o){1&e&&(t.\u0275\u0275template(0,S,2,4,"ds-comcol-role",0),t.\u0275\u0275pipe(1,"async")),2&e&&t.\u0275\u0275property("ngForOf",t.\u0275\u0275pipeBind1(1,1,o.getComcolRoles$()))},directives:[s.sg,D.b],pipes:[s.Ov],encapsulation:2}),n})();var U=i(95698),A=i(39300),L=i(38475),N=i(63782),b=i(52805);const H=function(n){return{community:n}};let G=(()=>{class n{constructor(e,o){this.route=e,this.dsoNameService=o}ngOnInit(){this.dsoRD$=this.route.parent.data.pipe((0,U.q)(1),(0,c.U)(e=>e.dso)),this.communityName$=this.dsoRD$.pipe((0,A.h)(e=>(0,L.Uh)(e)),(0,c.U)(e=>this.dsoNameService.getName(e.payload)))}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(m.gz),t.\u0275\u0275directiveInject(N._))},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["ds-community-curate"]],decls:7,vars:11,consts:[[1,"container"],[3,"dsoHandle"]],template:function(e,o){if(1&e&&(t.\u0275\u0275elementStart(0,"div",0)(1,"h3"),t.\u0275\u0275text(2),t.\u0275\u0275pipe(3,"translate"),t.\u0275\u0275pipe(4,"async"),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(5,"ds-curation-form",1),t.\u0275\u0275pipe(6,"async"),t.\u0275\u0275elementEnd()),2&e){let r;t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind2(3,2,"community.curate.header",t.\u0275\u0275pureFunction1(9,H,t.\u0275\u0275pipeBind1(4,5,o.communityName$)))),t.\u0275\u0275advance(3),t.\u0275\u0275property("dsoHandle",null==(r=t.\u0275\u0275pipeBind1(6,7,o.dsoRD$))?null:r.payload.handle)}},directives:[b._],pipes:[d.X$,s.Ov],encapsulation:2}),n})();var K=i(84186),X=i(32369);let Z=(()=>{class n{constructor(e){this.route=e}ngOnInit(){this.dsoRD$=this.route.parent.parent.data.pipe((0,p.P)(),(0,c.U)(e=>e.dso))}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(m.gz))},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["ds-community-authorizations"]],decls:3,vars:4,consts:[[1,"container"],[3,"resourceType","resourceUUID"]],template:function(e,o){if(1&e&&(t.\u0275\u0275elementStart(0,"div",0),t.\u0275\u0275element(1,"ds-resource-policies",1),t.\u0275\u0275pipe(2,"async"),t.\u0275\u0275elementEnd()),2&e){let r;t.\u0275\u0275advance(1),t.\u0275\u0275property("resourceType","community")("resourceUUID",null==(r=t.\u0275\u0275pipeBind1(2,2,o.dsoRD$))||null==r.payload?null:r.payload.id)}},directives:[X.F],pipes:[s.Ov],encapsulation:2}),n})();var v=i(16880),J=i(22349),f=i(41466),Q=i(85286),V=i(61695),W=i(86316),Y=i(36696),w=i(39646),k=i(5587);let q=(()=>{class n extends V.C{constructor(e,o,r){super(e,o,r),this.authorizationService=e,this.router=o,this.authService=r}getFeatureID(e,o){return(0,w.of)(k.i.IsCommunityAdmin)}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275inject(W._),t.\u0275\u0275inject(m.F0),t.\u0275\u0275inject(Y.e8))},n.\u0275prov=t.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),_=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({providers:[f.b,v.a],imports:[[m.Bz.forChild([{path:"",resolve:{breadcrumb:K.t},data:{breadcrumbKey:"community.edit"},component:P,canActivate:[q],children:[{path:"",redirectTo:"metadata",pathMatch:"full"},{path:"metadata",component:z,data:{title:"community.edit.tabs.metadata.title",hideReturnButton:!0,showBreadcrumbs:!0}},{path:"roles",component:O,data:{title:"community.edit.tabs.roles.title",showBreadcrumbs:!0}},{path:"curate",component:G,data:{title:"community.edit.tabs.curate.title",showBreadcrumbs:!0}},{path:"authorizations",data:{showBreadcrumbs:!0},children:[{path:"create",resolve:{resourcePolicyTarget:v.a},component:J.v,data:{title:"resource-policies.create.page.title"}},{path:"edit",resolve:{resourcePolicy:f.b},component:Q.x,data:{title:"resource-policies.edit.page.title"}},{path:"",component:Z,data:{title:"community.edit.tabs.authorizations.title",showBreadcrumbs:!0,hideReturnButton:!0}}]}]}])]]}),n})();var tt=i(2525),et=i(64165),nt=i(7976);let ot=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({imports:[[s.ez,h.m,_,tt.T,nt.H,et.q]]}),n})()}}]);
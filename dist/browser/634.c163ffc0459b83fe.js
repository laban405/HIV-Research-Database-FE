(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[634],{78658:(_,I,o)=>{"use strict";o.d(I,{L:()=>Q});var d=o(8108),h=o(60952),u=o(86785),C=o(55489),x=o(30858),f=o(36696),E=o(64025),b=o(27139),S=o(72683),j=o(46283);const N={id:"entityType",name:"dspace.entity.type",disabled:!1},e=[new d.b1u({id:"title",name:"dc.title",required:!0,validators:{required:null},errorMessages:{required:"Please enter a name for this title"}}),new d.HBf({id:"description",name:"dc.description"}),new d.HBf({id:"abstract",name:"dc.description.abstract"}),new d.HBf({id:"rights",name:"dc.rights"}),new d.HBf({id:"tableofcontents",name:"dc.description.tableofcontents"}),new d.HBf({id:"license",name:"dc.rights.license"})];var T=o(18194),t=o(5e3),O=o(86956),G=o(41989),F=o(69808),D=o(7981),V=o(54240),H=o(50358);function R(c,g){if(1&c){const l=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"button",15),t.\u0275\u0275listener("click",function(){return t.\u0275\u0275restoreView(l),t.\u0275\u0275nextContext(4).deleteLogo()}),t.\u0275\u0275pipe(1,"translate"),t.\u0275\u0275element(2,"i",16),t.\u0275\u0275elementEnd()}if(2&c){const l=t.\u0275\u0275nextContext(4);t.\u0275\u0275propertyInterpolate("title",t.\u0275\u0275pipeBind1(1,1,l.type.value+".edit.logo.delete.title"))}}function M(c,g){if(1&c){const l=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"button",17),t.\u0275\u0275listener("click",function(){return t.\u0275\u0275restoreView(l),t.\u0275\u0275nextContext(4).undoDeleteLogo()}),t.\u0275\u0275pipe(1,"translate"),t.\u0275\u0275element(2,"i",18),t.\u0275\u0275elementEnd()}if(2&c){const l=t.\u0275\u0275nextContext(4);t.\u0275\u0275propertyInterpolate("title",t.\u0275\u0275pipeBind1(1,1,l.type.value+".edit.logo.delete-undo.title"))}}function U(c,g){if(1&c&&(t.\u0275\u0275elementStart(0,"div",12),t.\u0275\u0275template(1,R,3,3,"button",13),t.\u0275\u0275template(2,M,3,3,"button",14),t.\u0275\u0275elementEnd()),2&c){const l=t.\u0275\u0275nextContext(3);t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",!l.markLogoForDeletion),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",l.markLogoForDeletion)}}const K=function(c){return{"alert-danger":c}};function L(c,g){if(1&c&&(t.\u0275\u0275elementStart(0,"div",7)(1,"div",1)(2,"div",8),t.\u0275\u0275element(3,"ds-comcol-page-logo",9),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(4,"div",10),t.\u0275\u0275template(5,U,3,2,"div",11),t.\u0275\u0275elementEnd()()()),2&c){const l=t.\u0275\u0275nextContext().ngVar,p=t.\u0275\u0275nextContext();t.\u0275\u0275property("ngClass",t.\u0275\u0275pureFunction1(3,K,p.markLogoForDeletion)),t.\u0275\u0275advance(3),t.\u0275\u0275property("logo",l),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",l)}}function W(c,g){if(1&c){const l=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"ds-uploader",20),t.\u0275\u0275listener("onCompleteItem",function(){return t.\u0275\u0275restoreView(l),t.\u0275\u0275nextContext(3).onCompleteItem()})("onUploadError",function(){return t.\u0275\u0275restoreView(l),t.\u0275\u0275nextContext(3).onUploadError()}),t.\u0275\u0275elementEnd()}if(2&c){const l=t.\u0275\u0275nextContext(3);t.\u0275\u0275property("dropMsg",l.type.value+".edit.logo.upload")("dropOverDocumentMsg",l.type.value+".edit.logo.upload")("enableDragOverDocument",!0)("uploadFilesOptions",l.uploadFilesOptions)}}function z(c,g){if(1&c&&(t.\u0275\u0275elementStart(0,"div",2),t.\u0275\u0275template(1,W,1,4,"ds-uploader",19),t.\u0275\u0275pipe(2,"async"),t.\u0275\u0275elementEnd()),2&c){const l=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",t.\u0275\u0275pipeBind1(2,1,l.initializedUploaderOptions))}}function X(c,g){if(1&c&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275template(1,L,6,5,"div",5),t.\u0275\u0275template(2,z,3,3,"div",6),t.\u0275\u0275elementContainerEnd()),2&c){const l=g.ngVar;t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",l),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",!l)}}function J(c,g){if(1&c){const l=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"ds-form",21),t.\u0275\u0275listener("submitForm",function(){return t.\u0275\u0275restoreView(l),t.\u0275\u0275nextContext().onSubmit()}),t.\u0275\u0275elementStart(1,"button",22),t.\u0275\u0275listener("click",function(){return t.\u0275\u0275restoreView(l),t.\u0275\u0275nextContext().back.emit()}),t.\u0275\u0275element(2,"i",23),t.\u0275\u0275text(3),t.\u0275\u0275pipe(4,"translate"),t.\u0275\u0275elementEnd()()}if(2&c){const l=t.\u0275\u0275nextContext();t.\u0275\u0275property("formId","comcol-form-id")("formModel",l.formModel)("displayCancel",!1),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(4,4,l.type.value+".edit.return")," ")}}let Q=(()=>{class c extends u.M{constructor(l,p,v,y,B,A,$,Z){super(l,p,v,y,A,$),this.formService=l,this.translate=p,this.notificationsService=v,this.authService=y,this.dsoService=B,this.requestService=A,this.objectCache=$,this.entityTypeService=Z,this.dso=new h.F,this.type=h.F.type,this.entityTypeSelection=new d.nMt(N)}ngOnInit(){let l;this.dso&&this.dso.metadata&&(l=this.dso.metadata["dspace.entity.type"]),this.entityTypeService.findAll({elementsPerPage:100,currentPage:1}).pipe((0,j.LQ)()).subscribe(v=>{v.filter(y=>y.label!==T.N).forEach((y,B)=>{this.entityTypeSelection.add({disabled:!1,label:y.label,value:y.label}),l&&l.length>0&&l[0].value===y.label&&(this.entityTypeSelection.select(B),this.entityTypeSelection.disabled=!0)}),this.formModel=[...e,this.entityTypeSelection],super.ngOnInit()})}}return c.\u0275fac=function(l){return new(l||c)(t.\u0275\u0275directiveInject(d.w1X),t.\u0275\u0275directiveInject(O.sK),t.\u0275\u0275directiveInject(C.T),t.\u0275\u0275directiveInject(f.e8),t.\u0275\u0275directiveInject(x.w),t.\u0275\u0275directiveInject(E.s),t.\u0275\u0275directiveInject(b.a),t.\u0275\u0275directiveInject(S.v))},c.\u0275cmp=t.\u0275\u0275defineComponent({type:c,selectors:[["ds-collection-form"]],inputs:{dso:"dso"},features:[t.\u0275\u0275InheritDefinitionFeature],decls:9,vars:7,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","d-inline-block"],[4,"ngVar"],[3,"formId","formModel","displayCancel","submitForm",4,"ngIf"],["class","col-12 d-inline-block alert","id","logo-section",3,"ngClass",4,"ngIf"],["class","col-12 d-inline-block",4,"ngIf"],["id","logo-section",1,"col-12","d-inline-block","alert",3,"ngClass"],[1,"col-8","d-inline-block"],[3,"logo"],[1,"col-4","d-inline-block"],["class","btn-group btn-group-sm float-right","role","group",4,"ngIf"],["role","group",1,"btn-group","btn-group-sm","float-right"],["type","button","class","btn btn-danger",3,"title","click",4,"ngIf"],["type","button","class","btn btn-warning",3,"title","click",4,"ngIf"],["type","button",1,"btn","btn-danger",3,"title","click"],["aria-hidden","true",1,"fas","fa-trash"],["type","button",1,"btn","btn-warning",3,"title","click"],["aria-hidden","true",1,"fas","fa-undo"],[3,"dropMsg","dropOverDocumentMsg","enableDragOverDocument","uploadFilesOptions","onCompleteItem","onUploadError",4,"ngIf"],[3,"dropMsg","dropOverDocumentMsg","enableDragOverDocument","uploadFilesOptions","onCompleteItem","onUploadError"],[3,"formId","formModel","displayCancel","submitForm"],["before","",1,"btn","btn-outline-secondary",3,"click"],[1,"fas","fa-arrow-left"]],template:function(l,p){if(1&l&&(t.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t.\u0275\u0275text(4),t.\u0275\u0275pipe(5,"translate"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275template(6,X,3,2,"ng-container",3),t.\u0275\u0275pipe(7,"async"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275template(8,J,5,6,"ds-form",4)),2&l){let v;t.\u0275\u0275advance(4),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(5,3,p.type.value+".edit.logo.label")),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngVar",null==(v=t.\u0275\u0275pipeBind1(7,5,null==p.dso?null:p.dso.logo))?null:v.payload),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",p.formModel)}},directives:[G.g,F.O5,F.mk,D.e,V.B,H.U],pipes:[O.X$,F.Ov],styles:[""]}),c})()},14925:(_,I,o)=>{"use strict";o.d(I,{s:()=>x});var d=o(42501),h=o(7976),u=o(83429),C=o(5e3);let x=(()=>{class f{}return f.\u0275fac=function(b){return new(b||f)},f.\u0275mod=C.\u0275\u0275defineNgModule({type:f}),f.\u0275inj=C.\u0275\u0275defineInjector({imports:[[h.H,u.e,d.m]]}),f})()},634:(_,I,o)=>{"use strict";o.r(I),o.d(I,{CollectionPageModule:()=>Ee});var d=o(69808),h=o(42501),u=o(74202),C=o(40025),x=o(30858),f=o(9168),E=o(52547),b=o(60952),S=o(31054),j=o(55489),N=o(64025),e=o(5e3),T=o(86956),t=o(78658);const O=function(n){return{parent:n}};let G=(()=>{class n extends E.k{constructor(i,a,s,m,P,ee,te){super(a,i,s,m,P,ee,te),this.communityDataService=i,this.collectionDataService=a,this.routeService=s,this.router=m,this.notificationsService=P,this.translate=ee,this.requestService=te,this.frontendURL="/collections/",this.type=b.F.type}}return n.\u0275fac=function(i){return new(i||n)(e.\u0275\u0275directiveInject(x.w),e.\u0275\u0275directiveInject(S.W),e.\u0275\u0275directiveInject(f.MZ),e.\u0275\u0275directiveInject(u.F0),e.\u0275\u0275directiveInject(j.T),e.\u0275\u0275directiveInject(T.sK),e.\u0275\u0275directiveInject(N.s))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ds-create-collection"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:8,vars:8,consts:[[1,"container"],[1,"row"],[1,"col-12","pb-4"],["id","sub-header",1,"border-bottom","pb-2"],[3,"submitForm","back","finish"]],template:function(i,a){if(1&i&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),e.\u0275\u0275text(4),e.\u0275\u0275pipe(5,"translate"),e.\u0275\u0275pipe(6,"async"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(7,"ds-collection-form",4),e.\u0275\u0275listener("submitForm",function(m){return a.onSubmit(m)})("back",function(){return a.navigateToHome()})("finish",function(){return a.navigateToNewPage()}),e.\u0275\u0275elementEnd()()),2&i){let s;e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(5,1,"collection.create.sub-head",e.\u0275\u0275pureFunction1(6,O,null==(s=e.\u0275\u0275pipeBind1(6,4,a.parentRD$))?null:s.payload.name)))}},directives:[t.L],pipes:[T.X$,d.Ov],styles:[""]}),n})();var F=o(29714),D=o(38475),V=o(54004),H=o(18505),R=o(39646),M=o(46283);let U=(()=>{class n{constructor(i,a){this.router=i,this.communityService=a}canActivate(i,a){const s=i.queryParams.parent;return(0,D.xI)(s)?(this.router.navigate(["/404"]),(0,R.of)(!1)):this.communityService.findById(s).pipe((0,M.hC)(),(0,V.U)(m=>(0,D.Uh)(m)&&m.hasSucceeded&&(0,D.Uh)(m.payload)),(0,H.b)(m=>{m||this.router.navigate(["/404"])}))}}return n.\u0275fac=function(i){return new(i||n)(e.\u0275\u0275inject(u.F0),e.\u0275\u0275inject(x.w))},n.\u0275prov=e.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();var K=o(61194),L=o(41989);function W(n,r){1&n&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275element(1,"i",12),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(3,1,"collection.delete.processing"),""))}function z(n,r){1&n&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275element(1,"i",13),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(3,1,"collection.delete.confirm"),""))}const X=function(n){return{dso:n}};function J(n,r){if(1&n){const i=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"div",3)(2,"h2",4),e.\u0275\u0275text(3),e.\u0275\u0275pipe(4,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"p",5),e.\u0275\u0275text(6),e.\u0275\u0275pipe(7,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"div",6)(9,"div",7)(10,"button",8),e.\u0275\u0275listener("click",function(){const m=e.\u0275\u0275restoreView(i).ngVar;return e.\u0275\u0275nextContext().onCancel(m)}),e.\u0275\u0275pipe(11,"async"),e.\u0275\u0275element(12,"i",9),e.\u0275\u0275text(13),e.\u0275\u0275pipe(14,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"button",10),e.\u0275\u0275listener("click",function(){const m=e.\u0275\u0275restoreView(i).ngVar;return e.\u0275\u0275nextContext().onConfirm(m)}),e.\u0275\u0275pipe(16,"async"),e.\u0275\u0275template(17,W,4,3,"span",11),e.\u0275\u0275pipe(18,"async"),e.\u0275\u0275template(19,z,4,3,"span",11),e.\u0275\u0275pipe(20,"async"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementContainerEnd()}if(2&n){const i=r.ngVar,a=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(4,7,"collection.delete.head")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(7,9,"collection.delete.text",e.\u0275\u0275pureFunction1(22,X,i.name))),e.\u0275\u0275advance(4),e.\u0275\u0275property("disabled",e.\u0275\u0275pipeBind1(11,12,a.processing$)),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(14,14,"collection.delete.cancel")," "),e.\u0275\u0275advance(2),e.\u0275\u0275property("disabled",e.\u0275\u0275pipeBind1(16,16,a.processing$)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(18,18,a.processing$)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!e.\u0275\u0275pipeBind1(20,20,a.processing$))}}let Q=(()=>{class n extends K.M{constructor(i,a,s,m,P){super(i,a,s,m,P),this.dsoDataService=i,this.router=a,this.route=s,this.notifications=m,this.translate=P,this.frontendURL="/collections/"}}return n.\u0275fac=function(i){return new(i||n)(e.\u0275\u0275directiveInject(S.W),e.\u0275\u0275directiveInject(u.F0),e.\u0275\u0275directiveInject(u.gz),e.\u0275\u0275directiveInject(j.T),e.\u0275\u0275directiveInject(T.sK))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ds-delete-collection"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:4,vars:3,consts:[[1,"container"],[1,"row"],[4,"ngVar"],[1,"col-12","pb-4"],["id","header",1,"border-bottom","pb-2"],[1,"pb-2"],[1,"form-group","row"],[1,"col","text-right","space-children-mr"],[1,"btn","btn-outline-secondary",3,"disabled","click"],[1,"fas","fa-times"],[1,"btn","btn-danger",3,"disabled","click"],[4,"ngIf"],[1,"fas","fa-circle-notch","fa-spin"],[1,"fas","fa-trash"]],template:function(i,a){if(1&i&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1),e.\u0275\u0275template(2,J,21,24,"ng-container",2),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275elementEnd()()),2&i){let s;e.\u0275\u0275advance(2),e.\u0275\u0275property("ngVar",null==(s=e.\u0275\u0275pipeBind1(3,1,a.dsoRD$))?null:s.payload)}},directives:[L.g,d.O5],pipes:[d.Ov,T.X$],styles:[""]}),n})();var c=o(50590),g=o(63900),l=o(92932),p=o(40011),v=o(60300),y=o(92165),B=o(27924),A=o(84561);const $=function(n){return{collection:n}};function Z(n,r){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"h2",8),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(4,"ds-item-metadata",9),e.\u0275\u0275elementStart(5,"button",10),e.\u0275\u0275text(6),e.\u0275\u0275pipe(7,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()),2&n){const i=e.\u0275\u0275nextContext().ngVar,a=e.\u0275\u0275nextContext().ngVar,s=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(3,5,"collection.edit.template.head",e.\u0275\u0275pureFunction1(10,$,null==a?null:a.name))),e.\u0275\u0275advance(2),e.\u0275\u0275property("updateService",s.itemTemplateService)("item",null==i?null:i.payload),e.\u0275\u0275advance(1),e.\u0275\u0275property("routerLink",s.getCollectionEditUrl(a)),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(7,8,"collection.edit.template.cancel"))}}function ne(n,r){1&n&&(e.\u0275\u0275element(0,"ds-loading",11),e.\u0275\u0275pipe(1,"translate")),2&n&&e.\u0275\u0275property("message",e.\u0275\u0275pipeBind1(1,1,"collection.edit.template.loading"))}function oe(n,r){if(1&n&&(e.\u0275\u0275element(0,"ds-alert",12),e.\u0275\u0275pipe(1,"translate")),2&n){const i=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("type",i.AlertTypeEnum.Error)("content",e.\u0275\u0275pipeBind1(1,2,"collection.edit.template.error"))}}function ie(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"div",4),e.\u0275\u0275template(1,Z,8,12,"ng-container",5),e.\u0275\u0275template(2,ne,2,3,"ds-loading",6),e.\u0275\u0275template(3,oe,2,4,"ds-alert",7),e.\u0275\u0275elementEnd()),2&n){const i=r.ngVar;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==i?null:i.hasSucceeded),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==i?null:i.isLoading),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==i?null:i.hasFailed)}}function le(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"div",1)(1,"div",2),e.\u0275\u0275template(2,ie,4,3,"div",3),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275elementEnd()()),2&n){const i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("ngVar",e.\u0275\u0275pipeBind1(3,1,i.itemRD$))}}let ae=(()=>{class n{constructor(i,a){this.route=i,this.itemTemplateService=a,this.AlertTypeEnum=v.N}ngOnInit(){this.collectionRD$=this.route.parent.data.pipe((0,c.P)(),(0,V.U)(i=>i.dso)),this.itemRD$=this.collectionRD$.pipe((0,M.Gp)(),(0,g.w)(i=>this.itemTemplateService.findByCollectionID(i.id)))}getCollectionEditUrl(i){return i?(0,p.Ou)(i.uuid):""}}return n.\u0275fac=function(i){return new(i||n)(e.\u0275\u0275directiveInject(u.gz),e.\u0275\u0275directiveInject(l.w))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ds-edit-item-template-page"]],decls:2,vars:3,consts:[["class","container",4,"ngVar"],[1,"container"],[1,"row"],["class","col-12",4,"ngVar"],[1,"col-12"],[4,"ngIf"],[3,"message",4,"ngIf"],[3,"type","content",4,"ngIf"],[1,"border-bottom"],[3,"updateService","item"],[1,"btn","btn-outline-secondary",3,"routerLink"],[3,"message"],[3,"type","content"]],template:function(i,a){if(1&i&&(e.\u0275\u0275template(0,le,4,3,"div",0),e.\u0275\u0275pipe(1,"async")),2&i){let s;e.\u0275\u0275property("ngVar",null==(s=e.\u0275\u0275pipeBind1(1,1,a.collectionRD$))?null:s.payload)}},directives:[L.g,d.O5,y.O,u.rH,B.N,A.w],pipes:[d.Ov,T.X$],encapsulation:2}),n})();var re=o(18838);let Y=(()=>{class n{constructor(i){this.itemTemplateService=i}resolve(i,a){return this.itemTemplateService.findByCollectionID(i.params.id,!0,!1,(0,re.l)("templateItemOf")).pipe((0,M.hC)())}}return n.\u0275fac=function(i){return new(i||n)(e.\u0275\u0275inject(l.w))},n.\u0275prov=e.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();var w=o(18270),ce=o(63626);let k=(()=>{class n extends ce.t{constructor(i,a){super(i,a),this.breadcrumbService=i,this.dataService=a}get followLinks(){return C.C}}return n.\u0275fac=function(i){return new(i||n)(e.\u0275\u0275inject(w.B),e.\u0275\u0275inject(S.W))},n.\u0275prov=e.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var se=o(74229),de=o(84186),pe=o(86316),me=o(25071),ue=o(5587),ve=o(36696);let q=(()=>{class n extends me.h{constructor(i,a,s,m){super(i,a,s,m),this.resolver=i,this.authorizationService=a,this.router=s,this.authService=m}getFeatureID(i,a){return(0,R.of)(ue.i.AdministratorOf)}}return n.\u0275fac=function(i){return new(i||n)(e.\u0275\u0275inject(C.l),e.\u0275\u0275inject(pe._),e.\u0275\u0275inject(u.F0),e.\u0275\u0275inject(ve.e8))},n.\u0275prov=e.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var fe=o(79094);function ge(n,r){}let Ce=(()=>{class n extends fe.F{getComponentName(){return"CollectionPageComponent"}importThemedComponent(i){return o(9484)(`./${i}/app/collection-page/collection-page.component`)}importUnthemedComponent(){return Promise.all([o.e(8592),o.e(2789)]).then(o.bind(o,73817))}}return n.\u0275fac=function(){let r;return function(a){return(r||(r=e.\u0275\u0275getInheritedFactory(n)))(a||n)}}(),n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ds-themed-collection-page"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:2,vars:0,consts:[["vcr",""]],template:function(i,a){1&i&&e.\u0275\u0275template(0,ge,0,0,"ng-template",null,0,e.\u0275\u0275templateRefExtractor)},encapsulation:2}),n})();var he=o(14256);let ye=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({providers:[C.l,Y,k,w.B,se.M,U,q],imports:[[u.Bz.forChild([{path:p.GQ,component:G,canActivate:[F.J,U]},{path:":id",resolve:{dso:C.l,breadcrumb:k},runGuardsAndResolvers:"always",children:[{path:p.lA,loadChildren:()=>Promise.all([o.e(8592),o.e(5839)]).then(o.bind(o,85839)).then(r=>r.EditCollectionPageModule),canActivate:[q]},{path:"delete",pathMatch:"full",component:Q,canActivate:[F.J]},{path:p.Jk,component:ae,canActivate:[F.J],resolve:{item:Y,breadcrumb:de.t},data:{title:"collection.edit.template.title",breadcrumbKey:"collection.edit.template"}},{path:"",component:Ce,pathMatch:"full"}],data:{menu:{public:[{id:"statistics_collection_:id",active:!0,visible:!0,model:{type:he.U.LINK,text:"menu.section.statistics",link:"statistics/collections/:id/"}}]}}}])]]}),n})();var xe=o(87743),Ie=o(87890),Te=o(8563),Fe=o(14925),Pe=o(7976);let Ee=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({providers:[Ie.o],imports:[[d.ez,h.m,ye,Te.p.forRoot(),xe.EditItemPageModule,Fe.s,Pe.H]]}),n})()},9484:(_,I,o)=>{var d={"./custom/app/collection-page/collection-page.component":[56594,8592,6594]};function h(u){if(!o.o(d,u))return Promise.resolve().then(()=>{var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f});var C=d[u],x=C[0];return Promise.all(C.slice(1).map(o.e)).then(()=>o(x))}h.keys=()=>Object.keys(d),h.id=9484,_.exports=h}}]);
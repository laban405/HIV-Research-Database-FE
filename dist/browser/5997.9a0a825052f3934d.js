"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[5997,2789],{5897:(V,D,n)=>{n.d(D,{U:()=>$});var M=n(61135),B=n(39841),d=n(68675),C=n(18505),g=n(11365),E=n(63900),f=n(22940),T=n(54004),t=n(31054),e=(n(44542),n(38475)),v=n(46283),L=n(36877),a=n(5e3),y=n(39189),S=n(69808),R=n(74202),U=n(86956);function A(p,h){if(1&p&&a.\u0275\u0275element(0,"span",7),2&p){const m=a.\u0275\u0275nextContext(2);a.\u0275\u0275property("innerHTML",m.separator,a.\u0275\u0275sanitizeHtml)}}const W=function(p){return["/collections",p]};function K(p,h){if(1&p&&(a.\u0275\u0275elementStart(0,"a",5)(1,"span"),a.\u0275\u0275text(2),a.\u0275\u0275elementEnd(),a.\u0275\u0275template(3,A,1,1,"span",6),a.\u0275\u0275elementEnd()),2&p){const m=h.$implicit,u=h.last;a.\u0275\u0275property("routerLink",a.\u0275\u0275pureFunction1(3,W,m.id)),a.\u0275\u0275advance(2),a.\u0275\u0275textInterpolate(null==m?null:m.name),a.\u0275\u0275advance(1),a.\u0275\u0275property("ngIf",!u)}}function F(p,h){1&p&&(a.\u0275\u0275elementStart(0,"div"),a.\u0275\u0275text(1),a.\u0275\u0275pipe(2,"translate"),a.\u0275\u0275elementEnd()),2&p&&(a.\u0275\u0275advance(1),a.\u0275\u0275textInterpolate1(" ",a.\u0275\u0275pipeBind1(2,1,"item.page.collections.loading")," "))}function j(p,h){if(1&p){const m=a.\u0275\u0275getCurrentView();a.\u0275\u0275elementStart(0,"a",8),a.\u0275\u0275listener("click",function(r){a.\u0275\u0275restoreView(m);const _=a.\u0275\u0275nextContext();return r.preventDefault(),_.handleLoadMore()}),a.\u0275\u0275text(1),a.\u0275\u0275pipe(2,"translate"),a.\u0275\u0275elementEnd()}2&p&&(a.\u0275\u0275advance(1),a.\u0275\u0275textInterpolate1(" ",a.\u0275\u0275pipeBind1(2,1,"item.page.collections.load-more")," "))}let $=(()=>{class p{constructor(m){this.cds=m,this.label="item.page.collections",this.separator="<br/>",this.pageSize=5,this.lastPage$=new M.X(0),this.loadMore$=new M.X(void 0),this.isLoading$=new M.X(!0),this.hasMore$=new M.X(!0)}ngOnInit(){const m=this.cds.findOwningCollectionFor(this.item).pipe((0,v.Gp)(),(0,d.O)(null)),u=this.loadMore$.pipe((0,C.b)(()=>this.isLoading$.next(!0)),(0,g.M)(this.lastPage$),(0,E.w)(([r,_])=>this.cds.findMappedCollectionsFor(this.item,Object.assign(new L.R,{elementsPerPage:this.pageSize,currentPage:_+1}))),(0,v.f1)(),(0,C.b)(()=>this.isLoading$.next(!1)),(0,v.mc)(),(0,C.b)(r=>this.hasMore$.next(r.currentPage<r.totalPages)),(0,C.b)(r=>this.lastPage$.next(r.currentPage)),(0,v.qP)(),(0,f.R)((r,_)=>[...r,..._],[]),(0,d.O)([]));this.collections$=(0,B.a)([m,u]).pipe((0,T.U)(([r,_])=>[r,..._].filter(i=>(0,e.Uh)(i))))}handleLoadMore(){this.loadMore$.next()}}return p.\u0275fac=function(m){return new(m||p)(a.\u0275\u0275directiveInject(t.W))},p.\u0275cmp=a.\u0275\u0275defineComponent({type:p,selectors:[["ds-item-page-collections"]],inputs:{item:"item"},decls:10,vars:14,consts:[[3,"label"],[1,"collections"],[3,"routerLink",4,"ngFor","ngForOf"],[4,"ngIf"],["class","load-more-btn btn btn-sm btn-outline-secondary","role","button","href","javascript:void(0);",3,"click",4,"ngIf"],[3,"routerLink"],[3,"innerHTML",4,"ngIf"],[3,"innerHTML"],["role","button","href","javascript:void(0);",1,"load-more-btn","btn","btn-sm","btn-outline-secondary",3,"click"]],template:function(m,u){1&m&&(a.\u0275\u0275elementStart(0,"ds-metadata-field-wrapper",0),a.\u0275\u0275pipe(1,"translate"),a.\u0275\u0275elementStart(2,"div",1),a.\u0275\u0275template(3,K,4,5,"a",2),a.\u0275\u0275pipe(4,"async"),a.\u0275\u0275elementEnd(),a.\u0275\u0275template(5,F,3,3,"div",3),a.\u0275\u0275pipe(6,"async"),a.\u0275\u0275template(7,j,3,3,"a",4),a.\u0275\u0275pipe(8,"async"),a.\u0275\u0275pipe(9,"async"),a.\u0275\u0275elementEnd()),2&m&&(a.\u0275\u0275property("label",a.\u0275\u0275pipeBind1(1,4,u.label)),a.\u0275\u0275advance(3),a.\u0275\u0275property("ngForOf",a.\u0275\u0275pipeBind1(4,6,u.collections$)),a.\u0275\u0275advance(2),a.\u0275\u0275property("ngIf",a.\u0275\u0275pipeBind1(6,8,u.isLoading$)),a.\u0275\u0275advance(2),a.\u0275\u0275property("ngIf",!a.\u0275\u0275pipeBind1(8,10,u.isLoading$)&&a.\u0275\u0275pipeBind1(9,12,u.hasMore$)))},directives:[y.n,S.sg,R.yS,S.O5],pipes:[U.X$,S.Ov],encapsulation:2}),p})()},58252:(V,D,n)=>{n.d(D,{e:()=>u});var M=n(82296),d=(n(44542),n(18838)),C=n(94878),g=n(74293),E=n(63900),f=n(18505),T=n(55489),t=n(38475),I=n(94799),e=n(5e3),v=n(86956),L=n(39189),a=n(41989),y=n(69808),S=n(92396),R=n(54018),U=n(19503),A=n(95765);function W(r,_){if(1&r&&(e.\u0275\u0275elementStart(0,"div",7)(1,"div",8),e.\u0275\u0275element(2,"ds-thumbnail",9),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",10)(5,"dl",11)(6,"dt",12),e.\u0275\u0275text(7),e.\u0275\u0275pipe(8,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"dd",13),e.\u0275\u0275text(10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"dt",12),e.\u0275\u0275text(12),e.\u0275\u0275pipe(13,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"dd",13),e.\u0275\u0275text(15),e.\u0275\u0275pipe(16,"dsFileSize"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"dt",12),e.\u0275\u0275text(18),e.\u0275\u0275pipe(19,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"dd",13),e.\u0275\u0275text(21),e.\u0275\u0275pipe(22,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"dt",12),e.\u0275\u0275text(24),e.\u0275\u0275pipe(25,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"dd",13),e.\u0275\u0275text(27),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(28,"div",14)(29,"ds-file-download-link",15),e.\u0275\u0275text(30),e.\u0275\u0275pipe(31,"translate"),e.\u0275\u0275elementEnd()()()),2&r){const i=_.$implicit,l=e.\u0275\u0275nextContext(4);let c,P;e.\u0275\u0275advance(2),e.\u0275\u0275property("thumbnail",null==(c=e.\u0275\u0275pipeBind1(3,12,i.thumbnail))?null:c.payload),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(8,14,"item.page.filesection.name")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(i.name),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(13,16,"item.page.filesection.size")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(16,18,i.sizeBytes)),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(19,20,"item.page.filesection.format")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(null==(P=e.\u0275\u0275pipeBind1(22,22,i.format))||null==P.payload?null:P.payload.description),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(25,24,"item.page.filesection.description")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(i.firstMetadataValue("dc.description")),e.\u0275\u0275advance(2),e.\u0275\u0275property("bitstream",i)("item",l.item),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(31,26,"item.page.filesection.download")," ")}}function K(r,_){if(1&r&&(e.\u0275\u0275elementStart(0,"ds-pagination",5),e.\u0275\u0275template(1,W,32,28,"div",6),e.\u0275\u0275elementEnd()),2&r){const i=e.\u0275\u0275nextContext(2).ngVar,l=e.\u0275\u0275nextContext();e.\u0275\u0275property("hideGear",!0)("hidePagerWhenSinglePage",!0)("paginationOptions",l.originalOptions)("pageInfoState",i)("collectionSize",null==i?null:i.totalElements)("retainScrollPosition",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",null==i?null:i.page)}}function F(r,_){if(1&r&&(e.\u0275\u0275elementStart(0,"div")(1,"h5",3),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,K,2,7,"ds-pagination",4),e.\u0275\u0275elementEnd()),2&r){const i=e.\u0275\u0275nextContext().ngVar;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,2,"item.page.filesection.original.bundle")),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",(null==i||null==i.page?null:i.page.length)>0)}}function j(r,_){if(1&r&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275template(1,F,5,4,"div",2),e.\u0275\u0275elementEnd()),2&r){const i=_.ngVar,l=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",l.hasValuesInBundle(i))}}function $(r,_){if(1&r&&(e.\u0275\u0275elementStart(0,"div",17)(1,"div",8),e.\u0275\u0275element(2,"ds-thumbnail",9),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",10)(5,"dl",11)(6,"dt",12),e.\u0275\u0275text(7),e.\u0275\u0275pipe(8,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"dd",13),e.\u0275\u0275text(10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"dt",12),e.\u0275\u0275text(12),e.\u0275\u0275pipe(13,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"dd",13),e.\u0275\u0275text(15),e.\u0275\u0275pipe(16,"dsFileSize"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"dt",12),e.\u0275\u0275text(18),e.\u0275\u0275pipe(19,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"dd",13),e.\u0275\u0275text(21),e.\u0275\u0275pipe(22,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"dt",12),e.\u0275\u0275text(24),e.\u0275\u0275pipe(25,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"dd",13),e.\u0275\u0275text(27),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(28,"div",14)(29,"ds-file-download-link",15),e.\u0275\u0275text(30),e.\u0275\u0275pipe(31,"translate"),e.\u0275\u0275elementEnd()()()),2&r){const i=_.$implicit,l=e.\u0275\u0275nextContext(4);let c,P;e.\u0275\u0275advance(2),e.\u0275\u0275property("thumbnail",null==(c=e.\u0275\u0275pipeBind1(3,12,i.thumbnail))?null:c.payload),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(8,14,"item.page.filesection.name")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(i.name),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(13,16,"item.page.filesection.size")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(16,18,i.sizeBytes)),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(19,20,"item.page.filesection.format")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(null==(P=e.\u0275\u0275pipeBind1(22,22,i.format))||null==P.payload?null:P.payload.description),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(25,24,"item.page.filesection.description")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(i.firstMetadataValue("dc.description")),e.\u0275\u0275advance(2),e.\u0275\u0275property("bitstream",i)("item",l.item),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(31,26,"item.page.filesection.download")," ")}}function p(r,_){if(1&r&&(e.\u0275\u0275elementStart(0,"ds-pagination",5),e.\u0275\u0275template(1,$,32,28,"div",16),e.\u0275\u0275elementEnd()),2&r){const i=e.\u0275\u0275nextContext(2).ngVar,l=e.\u0275\u0275nextContext();e.\u0275\u0275property("hideGear",!0)("hidePagerWhenSinglePage",!0)("paginationOptions",l.licenseOptions)("pageInfoState",i)("collectionSize",null==i?null:i.totalElements)("retainScrollPosition",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",null==i?null:i.page)}}function h(r,_){if(1&r&&(e.\u0275\u0275elementStart(0,"div")(1,"h5",3),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,p,2,7,"ds-pagination",4),e.\u0275\u0275elementEnd()),2&r){const i=e.\u0275\u0275nextContext().ngVar;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,2,"item.page.filesection.license.bundle")),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",(null==i||null==i.page?null:i.page.length)>0)}}function m(r,_){if(1&r&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275template(1,h,5,4,"div",2),e.\u0275\u0275elementEnd()),2&r){const i=_.ngVar,l=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",l.hasValuesInBundle(i))}}let u=(()=>{class r extends C.FileSectionComponent{constructor(i,l,c,P){super(i,l,c),this.notificationsService=l,this.translateService=c,this.paginationService=P,this.pageSize=5,this.originalOptions=Object.assign(new g.r,{id:"obo",currentPage:1,pageSize:this.pageSize}),this.licenseOptions=Object.assign(new g.r,{id:"lbo",currentPage:1,pageSize:this.pageSize})}ngOnInit(){this.initialize()}initialize(){this.originals$=this.paginationService.getCurrentPagination(this.originalOptions.id,this.originalOptions).pipe((0,E.w)(i=>this.bitstreamDataService.findAllByItemAndBundleName(this.item,"ORIGINAL",{elementsPerPage:i.pageSize,currentPage:i.currentPage},!0,!0,(0,d.l)("format"),(0,d.l)("thumbnail"))),(0,f.b)(i=>{(0,t.Uh)(i.errorMessage)&&this.notificationsService.error(this.translateService.get("file-section.error.header"),`${i.statusCode} ${i.errorMessage}`)})),this.licenses$=this.paginationService.getCurrentPagination(this.licenseOptions.id,this.licenseOptions).pipe((0,E.w)(i=>this.bitstreamDataService.findAllByItemAndBundleName(this.item,"LICENSE",{elementsPerPage:i.pageSize,currentPage:i.currentPage},!0,!0,(0,d.l)("format"),(0,d.l)("thumbnail"))),(0,f.b)(i=>{(0,t.Uh)(i.errorMessage)&&this.notificationsService.error(this.translateService.get("file-section.error.header"),`${i.statusCode} ${i.errorMessage}`)}))}hasValuesInBundle(i){return(0,t.Uh)(i)&&!(0,t.xb)(i.page)}ngOnDestroy(){this.paginationService.clearPagination(this.originalOptions.id),this.paginationService.clearPagination(this.licenseOptions.id)}}return r.\u0275fac=function(i){return new(i||r)(e.\u0275\u0275directiveInject(M.J),e.\u0275\u0275directiveInject(T.T),e.\u0275\u0275directiveInject(v.sK),e.\u0275\u0275directiveInject(I.N))},r.\u0275cmp=e.\u0275\u0275defineComponent({type:r,selectors:[["ds-item-page-full-file-section"]],inputs:{item:"item"},features:[e.\u0275\u0275InheritDefinitionFeature],decls:6,vars:9,consts:[[3,"label"],[4,"ngVar"],[4,"ngIf"],[1,"simple-view-element-header"],[3,"hideGear","hidePagerWhenSinglePage","paginationOptions","pageInfoState","collectionSize","retainScrollPosition",4,"ngIf"],[3,"hideGear","hidePagerWhenSinglePage","paginationOptions","pageInfoState","collectionSize","retainScrollPosition"],["class","file-section row mb-3",4,"ngFor","ngForOf"],[1,"file-section","row","mb-3"],[1,"col-3"],[3,"thumbnail"],[1,"col-7"],[1,"row"],[1,"col-md-4"],[1,"col-md-8"],[1,"col-2"],[3,"bitstream","item"],["class","file-section row",4,"ngFor","ngForOf"],[1,"file-section","row"]],template:function(i,l){if(1&i&&(e.\u0275\u0275elementStart(0,"ds-metadata-field-wrapper",0),e.\u0275\u0275pipe(1,"translate"),e.\u0275\u0275template(2,j,2,1,"div",1),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275template(4,m,2,1,"div",1),e.\u0275\u0275pipe(5,"async"),e.\u0275\u0275elementEnd()),2&i){let c,P;e.\u0275\u0275property("label",e.\u0275\u0275pipeBind1(1,3,l.label)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngVar",null==(c=e.\u0275\u0275pipeBind1(3,5,l.originals$))?null:c.payload),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngVar",null==(P=e.\u0275\u0275pipeBind1(5,7,l.licenses$))?null:P.payload)}},directives:[L.n,a.g,y.O5,S.Q,y.sg,R.Z,U.q],pipes:[v.X$,y.Ov,A.p],styles:["@media screen and (min-width: 768px){dt[_ngcontent-%COMP%]{text-align:right}}"]}),r})()},5997:(V,D,n)=>{n.r(D),n.d(D,{FullItemPageComponent:()=>z});var M=n(54004),B=n(39300),d=n(41680),C=n(58187),g=n(72031),E=n(38475),f=n(36696),T=n(86316),t=n(5e3),I=n(74202),e=n(69808),v=n(41989),L=n(56444),a=n(67666),y=n(52789),S=n(15615),R=n(68e3),U=n(58252),A=n(5897),W=n(95857),K=n(21171),F=n(27924),j=n(86956);const $=function(s){return[s]};function p(s,O){if(1&s&&(t.\u0275\u0275elementStart(0,"div",20)(1,"a",21),t.\u0275\u0275pipe(2,"async"),t.\u0275\u0275text(3),t.\u0275\u0275pipe(4,"translate"),t.\u0275\u0275elementEnd()()),2&s){const o=t.\u0275\u0275nextContext(5);t.\u0275\u0275advance(1),t.\u0275\u0275property("routerLink",t.\u0275\u0275pureFunction1(6,$,t.\u0275\u0275pipeBind1(2,2,o.itemPageRoute$))),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(4,4,"item.page.link.simple")," ")}}function h(s,O){if(1&s&&(t.\u0275\u0275elementStart(0,"tr")(1,"td"),t.\u0275\u0275text(2),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"td"),t.\u0275\u0275text(4),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(5,"td"),t.\u0275\u0275text(6),t.\u0275\u0275elementEnd()()),2&s){const o=O.$implicit,x=t.\u0275\u0275nextContext().$implicit;t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(x.key),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(o.value),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(o.language)}}function m(s,O){if(1&s&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275template(1,h,7,3,"tr",17),t.\u0275\u0275elementContainerEnd()),2&s){const o=O.$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275property("ngForOf",o.value)}}function u(s,O){if(1&s){const o=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",22)(1,"div",23)(2,"button",24),t.\u0275\u0275listener("click",function(){return t.\u0275\u0275restoreView(o),t.\u0275\u0275nextContext(5).back()}),t.\u0275\u0275element(3,"i",25),t.\u0275\u0275text(4),t.\u0275\u0275pipe(5,"translate"),t.\u0275\u0275elementEnd()()()}2&s&&(t.\u0275\u0275advance(4),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(5,1,"item.page.return"),""))}function r(s,O){if(1&s&&(t.\u0275\u0275elementStart(0,"div",9)(1,"div",10),t.\u0275\u0275element(2,"ds-item-page-title-field",11),t.\u0275\u0275elementStart(3,"div",12),t.\u0275\u0275element(4,"ds-dso-page-edit-button",13),t.\u0275\u0275pipe(5,"async"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275template(6,p,5,8,"div",14),t.\u0275\u0275elementStart(7,"div",15)(8,"table",16)(9,"tbody"),t.\u0275\u0275template(10,m,2,1,"ng-container",17),t.\u0275\u0275pipe(11,"keyvalue"),t.\u0275\u0275pipe(12,"async"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275element(13,"ds-item-page-full-file-section",6)(14,"ds-item-page-collections",6)(15,"ds-item-versions",18),t.\u0275\u0275template(16,u,6,3,"div",19),t.\u0275\u0275elementEnd()),2&s){const o=t.\u0275\u0275nextContext().ngIf,x=t.\u0275\u0275nextContext(3);t.\u0275\u0275advance(2),t.\u0275\u0275property("item",o),t.\u0275\u0275advance(2),t.\u0275\u0275property("pageRoute",t.\u0275\u0275pipeBind1(5,10,x.itemPageRoute$))("dso",o)("tooltipMsg","item.page.edit"),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",!x.fromSubmissionObject),t.\u0275\u0275advance(4),t.\u0275\u0275property("ngForOf",t.\u0275\u0275pipeBind1(11,12,t.\u0275\u0275pipeBind1(12,14,x.metadata$))),t.\u0275\u0275advance(3),t.\u0275\u0275property("item",o),t.\u0275\u0275advance(1),t.\u0275\u0275property("item",o),t.\u0275\u0275advance(1),t.\u0275\u0275property("item",o),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",x.fromSubmissionObject)}}function _(s,O){if(1&s&&(t.\u0275\u0275elementStart(0,"div"),t.\u0275\u0275element(1,"ds-item-alerts",6)(2,"ds-item-versions-notice",6)(3,"ds-view-tracker",7),t.\u0275\u0275template(4,r,17,16,"div",8),t.\u0275\u0275pipe(5,"async"),t.\u0275\u0275elementEnd()),2&s){const o=O.ngIf,x=t.\u0275\u0275nextContext(3);t.\u0275\u0275advance(1),t.\u0275\u0275property("item",o),t.\u0275\u0275advance(1),t.\u0275\u0275property("item",o),t.\u0275\u0275advance(1),t.\u0275\u0275property("object",o),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",!o.isWithdrawn||t.\u0275\u0275pipeBind1(5,4,x.isAdmin$))}}function i(s,O){if(1&s&&(t.\u0275\u0275elementStart(0,"div",4),t.\u0275\u0275template(1,_,6,6,"div",5),t.\u0275\u0275elementEnd()),2&s){const o=t.\u0275\u0275nextContext().ngVar;t.\u0275\u0275property("@fadeInOut",void 0),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",null==o?null:o.payload)}}function l(s,O){1&s&&(t.\u0275\u0275element(0,"ds-error",26),t.\u0275\u0275pipe(1,"translate")),2&s&&t.\u0275\u0275propertyInterpolate("message",t.\u0275\u0275pipeBind1(1,1,"error.item"))}function c(s,O){1&s&&(t.\u0275\u0275element(0,"ds-loading",26),t.\u0275\u0275pipe(1,"translate")),2&s&&t.\u0275\u0275propertyInterpolate("message",t.\u0275\u0275pipeBind1(1,1,"loading.item"))}function P(s,O){if(1&s&&(t.\u0275\u0275elementStart(0,"div",1),t.\u0275\u0275template(1,i,2,2,"div",2),t.\u0275\u0275template(2,l,2,3,"ds-error",3),t.\u0275\u0275template(3,c,2,3,"ds-loading",3),t.\u0275\u0275elementEnd()),2&s){const o=O.ngVar;t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",null==o?null:o.hasSucceeded),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",null==o?null:o.hasFailed),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",null==o?null:o.isLoading)}}let z=(()=>{class s extends d.ItemPageComponent{constructor(o,x,b,X,N,G){super(o,x,b,X,N),this.route=o,this._location=G,this.fromSubmissionObject=!1,this.subs=[]}ngOnInit(){super.ngOnInit(),this.metadata$=this.itemRD$.pipe((0,M.U)(o=>o.payload),(0,B.h)(o=>(0,E.Uh)(o)),(0,M.U)(o=>o.metadata)),this.subs.push(this.route.data.subscribe(o=>{this.fromSubmissionObject=(0,E.Uh)(o.wfi)||(0,E.Uh)(o.wsi)}))}back(){this._location.back()}ngOnDestroy(){this.subs.filter(o=>(0,E.Uh)(o)).forEach(o=>o.unsubscribe())}}return s.\u0275fac=function(o){return new(o||s)(t.\u0275\u0275directiveInject(I.gz),t.\u0275\u0275directiveInject(I.F0),t.\u0275\u0275directiveInject(C.S),t.\u0275\u0275directiveInject(f.e8),t.\u0275\u0275directiveInject(T._),t.\u0275\u0275directiveInject(e.Ye))},s.\u0275cmp=t.\u0275\u0275defineComponent({type:s,selectors:[["ds-full-item-page"]],features:[t.\u0275\u0275InheritDefinitionFeature],decls:2,vars:3,consts:[["class","container",4,"ngVar"],[1,"container"],["class","item-page",4,"ngIf"],[3,"message",4,"ngIf"],[1,"item-page"],[4,"ngIf"],[3,"item"],[3,"object"],["class","full-item-info",4,"ngIf"],[1,"full-item-info"],[1,"d-flex","flex-row"],[1,"mr-auto",3,"item"],[1,"pl-2","space-children-mr"],[3,"pageRoute","dso","tooltipMsg"],["class","simple-view-link my-3",4,"ngIf"],[1,"table-responsive"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],[1,"mt-2",3,"item"],["class","button-row bottom",4,"ngIf"],[1,"simple-view-link","my-3"],[1,"btn","btn-outline-primary",3,"routerLink"],[1,"button-row","bottom"],[1,"text-right"],[1,"btn","btn-outline-secondary","mr-1",3,"click"],[1,"fas","fa-arrow-left"],[3,"message"]],template:function(o,x){1&o&&(t.\u0275\u0275template(0,P,4,3,"div",0),t.\u0275\u0275pipe(1,"async")),2&o&&t.\u0275\u0275property("ngVar",t.\u0275\u0275pipeBind1(1,1,x.itemRD$))},directives:[v.g,e.O5,L.y,a.s,y.f,S.k,R._,I.yS,e.sg,U.e,A.U,W.h,K.q,F.N],pipes:[e.Ov,j.X$,e.Nd],styles:["[_nghost-%COMP%]   div.simple-view-link[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]   div.simple-view-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{min-width:25%}"],data:{animation:[g.Ic]},changeDetection:0}),s})()},15615:(V,D,n)=>{n.d(D,{k:()=>T}),n(44542);var B=n(44068),d=n(5e3),C=n(69808),g=n(93552),E=n(86956);function f(t,I){if(1&t&&(d.\u0275\u0275elementStart(0,"div"),d.\u0275\u0275text(1),d.\u0275\u0275pipe(2,"translate"),d.\u0275\u0275elementEnd()),2&t){const e=I.ngIf;d.\u0275\u0275advance(1),d.\u0275\u0275textInterpolate1(" ",d.\u0275\u0275pipeBind1(2,1,e.toLowerCase()+".page.titleprefix")," ")}}let T=(()=>{class t extends B.E{constructor(){super(...arguments),this.fields=["dc.title"]}}return t.\u0275fac=function(){let I;return function(v){return(I||(I=d.\u0275\u0275getInheritedFactory(t)))(v||t)}}(),t.\u0275cmp=d.\u0275\u0275defineComponent({type:t,selectors:[["ds-item-page-title-field"]],inputs:{item:"item"},features:[d.\u0275\u0275InheritDefinitionFeature],decls:3,vars:2,consts:[[1,"item-page-title-field"],[4,"ngIf"],[3,"mdValues"]],template:function(e,v){1&e&&(d.\u0275\u0275elementStart(0,"h2",0),d.\u0275\u0275template(1,f,3,3,"div",1),d.\u0275\u0275element(2,"ds-metadata-values",2),d.\u0275\u0275elementEnd()),2&e&&(d.\u0275\u0275advance(1),d.\u0275\u0275property("ngIf",v.item.firstMetadataValue("dspace.entity.type")),d.\u0275\u0275advance(1),d.\u0275\u0275property("mdValues",null==v.item?null:v.item.allMetadata(v.fields)))},directives:[C.O5,g.R],pipes:[E.X$],encapsulation:2}),t})()},41680:(V,D,n)=>{n.r(D),n.d(D,{ItemPageComponent:()=>r});var M=n(54004),B=n(58187),d=n(72031),C=n(46283),g=n(60347),E=n(36696),f=n(96140),T=n(59130),t=n(86316),I=n(5587),e=n(5e3),v=n(74202),L=n(41989),a=n(69808),y=n(56444),S=n(67666),R=n(52789),U=n(66541),A=n(95857),W=n(21171),K=n(27924),F=n(86956);function j(_,i){if(1&_&&e.\u0275\u0275element(0,"ds-listable-object-component-loader",10),2&_){const l=e.\u0275\u0275nextContext().ngIf,c=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("object",l)("viewMode",c.viewMode)}}function $(_,i){if(1&_&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275element(1,"ds-item-alerts",6)(2,"ds-item-versions-notice",6)(3,"ds-view-tracker",7),e.\u0275\u0275template(4,j,1,2,"ds-listable-object-component-loader",8),e.\u0275\u0275pipe(5,"async"),e.\u0275\u0275element(6,"ds-item-versions",9),e.\u0275\u0275elementEnd()),2&_){const l=i.ngIf,c=e.\u0275\u0275nextContext(3);e.\u0275\u0275advance(1),e.\u0275\u0275property("item",l),e.\u0275\u0275advance(1),e.\u0275\u0275property("item",l),e.\u0275\u0275advance(1),e.\u0275\u0275property("object",l),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!l.isWithdrawn||e.\u0275\u0275pipeBind1(5,6,c.isAdmin$)),e.\u0275\u0275advance(2),e.\u0275\u0275property("item",l)("displayActions",!1)}}function p(_,i){if(1&_&&(e.\u0275\u0275elementStart(0,"div",4),e.\u0275\u0275template(1,$,7,8,"div",5),e.\u0275\u0275elementEnd()),2&_){const l=e.\u0275\u0275nextContext().ngVar;e.\u0275\u0275property("@fadeInOut",void 0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==l?null:l.payload)}}function h(_,i){1&_&&(e.\u0275\u0275element(0,"ds-error",11),e.\u0275\u0275pipe(1,"translate")),2&_&&e.\u0275\u0275propertyInterpolate("message",e.\u0275\u0275pipeBind1(1,1,"error.item"))}function m(_,i){1&_&&(e.\u0275\u0275element(0,"ds-loading",11),e.\u0275\u0275pipe(1,"translate")),2&_&&e.\u0275\u0275propertyInterpolate("message",e.\u0275\u0275pipeBind1(1,1,"loading.item"))}function u(_,i){if(1&_&&(e.\u0275\u0275elementStart(0,"div",1),e.\u0275\u0275template(1,p,2,2,"div",2),e.\u0275\u0275template(2,h,2,3,"ds-error",3),e.\u0275\u0275template(3,m,2,3,"ds-loading",3),e.\u0275\u0275elementEnd()),2&_){const l=i.ngVar;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==l?null:l.hasSucceeded),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==l?null:l.hasFailed),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==l?null:l.isLoading)}}let r=(()=>{class _{constructor(l,c,P,z,s){this.route=l,this.router=c,this.items=P,this.authService=z,this.authorizationService=s,this.viewMode=g.w.StandalonePage}ngOnInit(){this.itemRD$=this.route.data.pipe((0,M.U)(l=>l.dso),(0,T.Gh)(this.router,this.authService)),this.itemPageRoute$=this.itemRD$.pipe((0,C.mc)(),(0,M.U)(l=>(0,f.Tt)(l))),this.isAdmin$=this.authorizationService.isAuthorized(I.i.AdministratorOf)}}return _.\u0275fac=function(l){return new(l||_)(e.\u0275\u0275directiveInject(v.gz),e.\u0275\u0275directiveInject(v.F0),e.\u0275\u0275directiveInject(B.S),e.\u0275\u0275directiveInject(E.e8),e.\u0275\u0275directiveInject(t._))},_.\u0275cmp=e.\u0275\u0275defineComponent({type:_,selectors:[["ds-item-page"]],decls:2,vars:3,consts:[["class","container",4,"ngVar"],[1,"container"],["class","item-page",4,"ngIf"],[3,"message",4,"ngIf"],[1,"item-page"],[4,"ngIf"],[3,"item"],[3,"object"],[3,"object","viewMode",4,"ngIf"],[1,"mt-2",3,"item","displayActions"],[3,"object","viewMode"],[3,"message"]],template:function(l,c){1&l&&(e.\u0275\u0275template(0,u,4,3,"div",0),e.\u0275\u0275pipe(1,"async")),2&l&&e.\u0275\u0275property("ngVar",e.\u0275\u0275pipeBind1(1,1,c.itemRD$))},directives:[L.g,a.O5,y.y,S.s,R.f,U.p,A.h,W.q,K.N],pipes:[a.Ov,F.X$],styles:["@media (max-width: 991.98px){.container[_ngcontent-%COMP%]{width:100%;max-width:none}}"],data:{animation:[d.Ic]},changeDetection:0}),_})()},52789:(V,D,n)=>{n.d(D,{f:()=>C}),n(20166);var B=n(5e3),d=n(13758);let C=(()=>{class g{constructor(f){this.angulartics2=f}ngOnInit(){this.angulartics2.eventTrack.next({action:"pageView",properties:{object:this.object}})}}return g.\u0275fac=function(f){return new(f||g)(B.\u0275\u0275directiveInject(d.b))},g.\u0275cmp=B.\u0275\u0275defineComponent({type:g,selectors:[["ds-view-tracker"]],inputs:{object:"object"},decls:1,vars:0,template:function(f,T){1&f&&B.\u0275\u0275text(0,"\xa0\n")},styles:["[_nghost-%COMP%]{display:none}"]}),g})()}}]);
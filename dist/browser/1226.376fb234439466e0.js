"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[1226],{61226:(T,r,i)=>{i.r(r),i.d(r,{FileSectionComponent:()=>S});var s=i(87544),d=i(94878),e=i(5e3),c=i(41989),l=i(69808),m=i(39189),f=i(19503),g=i(27924),u=i(74202),v=i(86956),C=i(95765);function E(t,a){if(1&t&&e.\u0275\u0275element(0,"span",10),2&t){const n=e.\u0275\u0275nextContext(4);e.\u0275\u0275propertyInterpolate("innerHTML",n.separator,e.\u0275\u0275sanitizeHtml)}}function x(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"ds-file-download-link",8)(1,"span"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"span"),e.\u0275\u0275text(4),e.\u0275\u0275pipe(5,"dsFileSize"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(6,E,1,1,"span",9),e.\u0275\u0275elementEnd()),2&t){const n=a.$implicit,_=a.last,o=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("bitstream",n)("item",o.item),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==n?null:n.name),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1("(",e.\u0275\u0275pipeBind1(5,5,null==n?null:n.sizeBytes),")"),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!_)}}function I(t,a){1&t&&(e.\u0275\u0275element(0,"ds-loading",11),e.\u0275\u0275pipe(1,"translate")),2&t&&(e.\u0275\u0275propertyInterpolate("message",e.\u0275\u0275pipeBind1(1,2,"loading.default")),e.\u0275\u0275property("showMessage",!1))}const p=function(){return[]};function M(t,a){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",12)(1,"a",13),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext(3).getNextPage()}),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd()()}2&t&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction0(4,p)),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,2,"item.page.bitstreams.view-more")))}function P(t,a){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",14)(1,"a",15),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(n);const o=e.\u0275\u0275nextContext(3);return o.currentPage=void 0,o.getNextPage()}),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd()()}2&t&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction0(4,p)),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,2,"item.page.bitstreams.collapse")))}function F(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"ds-metadata-field-wrapper",2),e.\u0275\u0275pipe(1,"translate"),e.\u0275\u0275elementStart(2,"div",3),e.\u0275\u0275template(3,x,7,7,"ds-file-download-link",4),e.\u0275\u0275template(4,I,2,4,"ds-loading",5),e.\u0275\u0275template(5,M,4,5,"div",6),e.\u0275\u0275template(6,P,4,5,"div",7),e.\u0275\u0275elementEnd()()),2&t){const n=e.\u0275\u0275nextContext().ngVar,_=e.\u0275\u0275nextContext();e.\u0275\u0275property("label",e.\u0275\u0275pipeBind1(1,5,_.label)),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngForOf",n),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",_.isLoading),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!_.isLastPage),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",_.isLastPage&&1!=_.currentPage)}}function O(t,a){if(1&t&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,F,7,7,"ds-metadata-field-wrapper",1),e.\u0275\u0275elementContainerEnd()),2&t){const n=a.ngVar;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n?null:n.length)>0)}}let S=(()=>{class t extends d.FileSectionComponent{}return t.\u0275fac=function(){let a;return function(_){return(a||(a=e.\u0275\u0275getInheritedFactory(t)))(_||t)}}(),t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ds-item-page-file-section"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:2,vars:3,consts:[[4,"ngVar"],[3,"label",4,"ngIf"],[3,"label"],[1,"file-section"],[3,"bitstream","item",4,"ngFor","ngForOf"],[3,"message","showMessage",4,"ngIf"],["class","mt-1","id","view-more",4,"ngIf"],["class","mt-1","id","collapse",4,"ngIf"],[3,"bitstream","item"],[3,"innerHTML",4,"ngIf"],[3,"innerHTML"],[3,"message","showMessage"],["id","view-more",1,"mt-1"],[1,"bitstream-view-more","btn","btn-outline-secondary","btn-sm",3,"routerLink","click"],["id","collapse",1,"mt-1"],[1,"bitstream-collapse","btn","btn-outline-secondary","btn-sm",3,"routerLink","click"]],template:function(n,_){1&n&&(e.\u0275\u0275template(0,O,2,1,"ng-container",0),e.\u0275\u0275pipe(1,"async")),2&n&&e.\u0275\u0275property("ngVar",e.\u0275\u0275pipeBind1(1,1,_.bitstreams$))},directives:[c.g,l.O5,m.n,l.sg,f.q,g.N,u.yS],pipes:[l.Ov,v.X$,C.p],encapsulation:2,data:{animation:[s.Fc]}}),t})()}}]);
var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=7604,exports.ids=[7604],exports.modules={31264:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>ThemedHomeNewsComponent});var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(79094),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5e3);function ThemedHomeNewsComponent_ng_template_0_Template(rf,ctx){}__name(ThemedHomeNewsComponent_ng_template_0_Template,"ThemedHomeNewsComponent_ng_template_0_Template");class ThemedHomeNewsComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.F{getComponentName(){return"HomeNewsComponent"}importThemedComponent(themeName){return __webpack_require__(82948)(`./${themeName}/app/home-page/home-news/home-news.component`)}importUnthemedComponent(){return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,98082))}}__name(ThemedHomeNewsComponent,"ThemedHomeNewsComponent"),ThemedHomeNewsComponent.\u0275fac=function(){let \u0275ThemedHomeNewsComponent_BaseFactory;return __name(function(t){return(\u0275ThemedHomeNewsComponent_BaseFactory||(\u0275ThemedHomeNewsComponent_BaseFactory=_angular_core__WEBPACK_IMPORTED_MODULE_1__.n5z(ThemedHomeNewsComponent)))(t||ThemedHomeNewsComponent)},"ThemedHomeNewsComponent_Factory")}(),ThemedHomeNewsComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_1__.Xpm({type:ThemedHomeNewsComponent,selectors:[["ds-themed-home-news"]],features:[_angular_core__WEBPACK_IMPORTED_MODULE_1__.qOj],decls:2,vars:0,consts:[["vcr",""]],template:__name(function(rf,ctx){1&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_1__.YNc(0,ThemedHomeNewsComponent_ng_template_0_Template,0,0,"ng-template",null,0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.W1O)},"ThemedHomeNewsComponent_Template"),encapsulation:2})},11518:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HomePageComponent:()=>HomePageComponent});var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(83292),_angular_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5e3),_angular_router__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(74202),_home_news_themed_home_news_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(31264),_angular_common__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(69808),_statistics_angulartics_dspace_view_tracker_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(52789),_shared_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(80686),_top_level_community_list_top_level_community_list_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6133),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(42466);function HomePageComponent_ng_container_2_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_4__.ynx(0),_angular_core__WEBPACK_IMPORTED_MODULE_4__._UZ(1,"ds-view-tracker",3),_angular_core__WEBPACK_IMPORTED_MODULE_4__.BQk()),2&rf){const site_r1=ctx.ngIf;_angular_core__WEBPACK_IMPORTED_MODULE_4__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_4__.Q6J("object",site_r1)}}__name(HomePageComponent_ng_container_2_Template,"HomePageComponent_ng_container_2_Template");class HomePageComponent{constructor(route){this.route=route}ngOnInit(){this.site$=this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.UI)(data=>data.site))}}__name(HomePageComponent,"HomePageComponent"),HomePageComponent.\u0275fac=__name(function(t){return new(t||HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.Y36(_angular_router__WEBPACK_IMPORTED_MODULE_6__.gz))},"HomePageComponent_Factory"),HomePageComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_4__.Xpm({type:HomePageComponent,selectors:[["ds-home-page"]],decls:7,vars:7,consts:[[1,"container"],[4,"ngIf"],[3,"inPlaceSearch","searchPlaceholder"],[3,"object"]],template:__name(function(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_4__._UZ(0,"ds-themed-home-news"),_angular_core__WEBPACK_IMPORTED_MODULE_4__.TgZ(1,"div",0),_angular_core__WEBPACK_IMPORTED_MODULE_4__.YNc(2,HomePageComponent_ng_container_2_Template,2,1,"ng-container",1),_angular_core__WEBPACK_IMPORTED_MODULE_4__.ALo(3,"async"),_angular_core__WEBPACK_IMPORTED_MODULE_4__._UZ(4,"ds-search-form",2),_angular_core__WEBPACK_IMPORTED_MODULE_4__.ALo(5,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_4__._UZ(6,"ds-top-level-community-list"),_angular_core__WEBPACK_IMPORTED_MODULE_4__.qZA()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_4__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_4__.Q6J("ngIf",_angular_core__WEBPACK_IMPORTED_MODULE_4__.lcZ(3,3,ctx.site$)),_angular_core__WEBPACK_IMPORTED_MODULE_4__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_4__.Q6J("inPlaceSearch",!1)("searchPlaceholder",_angular_core__WEBPACK_IMPORTED_MODULE_4__.lcZ(5,5,"home.search-form.placeholder")))},"HomePageComponent_Template"),directives:[_home_news_themed_home_news_component__WEBPACK_IMPORTED_MODULE_0__.v,_angular_common__WEBPACK_IMPORTED_MODULE_7__.O5,_statistics_angulartics_dspace_view_tracker_component__WEBPACK_IMPORTED_MODULE_1__.f,_shared_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_2__.o,_top_level_community_list_top_level_community_list_component__WEBPACK_IMPORTED_MODULE_3__._],pipes:[_angular_common__WEBPACK_IMPORTED_MODULE_7__.Ov,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.X$],styles:[""]})},87604:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HomePageModule:()=>HomePageModule});var common=__webpack_require__(69808),shared_module=__webpack_require__(42501),home_news_component=__webpack_require__(98082),router=__webpack_require__(74202),site_data_service=__webpack_require__(79155),operators=__webpack_require__(83292),core=__webpack_require__(5e3);class HomePageResolver{constructor(siteService){this.siteService=siteService}resolve(route,state){return this.siteService.find().pipe((0,operators.qn)(1))}}__name(HomePageResolver,"HomePageResolver"),HomePageResolver.\u0275fac=__name(function(t){return new(t||HomePageResolver)(core.LFG(site_data_service.a))},"HomePageResolver_Factory"),HomePageResolver.\u0275prov=core.Yz7({token:HomePageResolver,factory:HomePageResolver.\u0275fac});var themed_component=__webpack_require__(79094);function ThemedHomePageComponent_ng_template_0_Template(rf,ctx){}__name(ThemedHomePageComponent_ng_template_0_Template,"ThemedHomePageComponent_ng_template_0_Template");class ThemedHomePageComponent extends themed_component.F{getComponentName(){return"HomePageComponent"}importThemedComponent(themeName){return __webpack_require__(54367)(`./${themeName}/app/home-page/home-page.component`)}importUnthemedComponent(){return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,11518))}}__name(ThemedHomePageComponent,"ThemedHomePageComponent"),ThemedHomePageComponent.\u0275fac=function(){let \u0275ThemedHomePageComponent_BaseFactory;return __name(function(t){return(\u0275ThemedHomePageComponent_BaseFactory||(\u0275ThemedHomePageComponent_BaseFactory=core.n5z(ThemedHomePageComponent)))(t||ThemedHomePageComponent)},"ThemedHomePageComponent_Factory")}(),ThemedHomePageComponent.\u0275cmp=core.Xpm({type:ThemedHomePageComponent,selectors:[["ds-themed-home-page"]],features:[core.qOj],decls:2,vars:0,consts:[["vcr",""]],template:__name(function(rf,ctx){1&rf&&core.YNc(0,ThemedHomePageComponent_ng_template_0_Template,0,0,"ng-template",null,0,core.W1O)},"ThemedHomePageComponent_Template"),encapsulation:2});var menu_item_type_model=__webpack_require__(14256);class HomePageRoutingModule{}__name(HomePageRoutingModule,"HomePageRoutingModule"),HomePageRoutingModule.\u0275fac=__name(function(t){return new(t||HomePageRoutingModule)},"HomePageRoutingModule_Factory"),HomePageRoutingModule.\u0275mod=core.oAB({type:HomePageRoutingModule}),HomePageRoutingModule.\u0275inj=core.cJS({providers:[HomePageResolver],imports:[[router.Bz.forChild([{path:"",component:ThemedHomePageComponent,pathMatch:"full",data:{title:"home.title",menu:{public:[{id:"statistics_site",active:!0,visible:!0,index:2,model:{type:menu_item_type_model.U.LINK,text:"menu.section.statistics",link:"statistics"}}]}},resolve:{site:HomePageResolver}}])]]});var home_page_component=__webpack_require__(11518),top_level_community_list_component=__webpack_require__(6133),statistics_module=__webpack_require__(8563),themed_home_news_component=__webpack_require__(31264);home_page_component.HomePageComponent,top_level_community_list_component._,themed_home_news_component.v,home_news_component.HomeNewsComponent;class HomePageModule{}__name(HomePageModule,"HomePageModule"),HomePageModule.\u0275fac=__name(function(t){return new(t||HomePageModule)},"HomePageModule_Factory"),HomePageModule.\u0275mod=core.oAB({type:HomePageModule}),HomePageModule.\u0275inj=core.cJS({imports:[[common.ez,shared_module.m,HomePageRoutingModule,statistics_module.p.forRoot()]]})},6133:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>TopLevelCommunityListComponent});var rxjs__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(76477),_core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(35471),_core_data_community_data_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(30858),_shared_animations_fade__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(72031),_shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(74293),_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(38475),rxjs_operators__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(83292),_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(94799),_angular_core__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(5e3),_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(41989),_angular_common__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(69808),_shared_object_collection_object_collection_component__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(33098),_shared_error_error_component__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(21171),_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(27924),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(42466);function TopLevelCommunityListComponent_ng_container_0_div_1_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(0,"div")(1,"h2"),_angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(2),_angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(3,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(4,"p",3),_angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(5),_angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(6,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_9__._UZ(7,"ds-viewable-collection",4),_angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(8,"async"),_angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA()),2&rf){const ctx_r2=_angular_core__WEBPACK_IMPORTED_MODULE_9__.oxw(2);_angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_9__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(3,6,"home.top-level-communities.head")),_angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(3),_angular_core__WEBPACK_IMPORTED_MODULE_9__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(6,8,"home.top-level-communities.help")),_angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_9__.Q6J("config",ctx_r2.config)("sortConfig",ctx_r2.sortConfig)("objects",_angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(8,10,ctx_r2.communitiesRD$))("hideGear",!0)}}function TopLevelCommunityListComponent_ng_container_0_ds_error_2_Template(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_9__._UZ(0,"ds-error",5),_angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(1,"translate")),2&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_9__.s9C("message",_angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(1,1,"error.top-level-communites"))}function TopLevelCommunityListComponent_ng_container_0_ds_loading_3_Template(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_9__._UZ(0,"ds-loading",5),_angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(1,"translate")),2&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_9__.s9C("message",_angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(1,1,"loading.top-level-communities"))}function TopLevelCommunityListComponent_ng_container_0_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_9__.ynx(0),_angular_core__WEBPACK_IMPORTED_MODULE_9__.YNc(1,TopLevelCommunityListComponent_ng_container_0_div_1_Template,9,12,"div",1),_angular_core__WEBPACK_IMPORTED_MODULE_9__.YNc(2,TopLevelCommunityListComponent_ng_container_0_ds_error_2_Template,2,3,"ds-error",2),_angular_core__WEBPACK_IMPORTED_MODULE_9__.YNc(3,TopLevelCommunityListComponent_ng_container_0_ds_loading_3_Template,2,3,"ds-loading",2),_angular_core__WEBPACK_IMPORTED_MODULE_9__.BQk()),2&rf){const communitiesRD_r1=ctx.ngVar;_angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_9__.Q6J("ngIf",null==communitiesRD_r1?null:communitiesRD_r1.hasSucceeded),_angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_9__.Q6J("ngIf",null==communitiesRD_r1?null:communitiesRD_r1.hasFailed),_angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_9__.Q6J("ngIf",null==communitiesRD_r1?null:communitiesRD_r1.isLoading)}}__name(TopLevelCommunityListComponent_ng_container_0_div_1_Template,"TopLevelCommunityListComponent_ng_container_0_div_1_Template"),__name(TopLevelCommunityListComponent_ng_container_0_ds_error_2_Template,"TopLevelCommunityListComponent_ng_container_0_ds_error_2_Template"),__name(TopLevelCommunityListComponent_ng_container_0_ds_loading_3_Template,"TopLevelCommunityListComponent_ng_container_0_ds_loading_3_Template"),__name(TopLevelCommunityListComponent_ng_container_0_Template,"TopLevelCommunityListComponent_ng_container_0_Template");class TopLevelCommunityListComponent{constructor(cds,paginationService){this.cds=cds,this.paginationService=paginationService,this.communitiesRD$=new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject({}),this.pageId="tl",this.config=new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_3__.r,this.config.id=this.pageId,this.config.pageSize=5,this.config.currentPage=1,this.sortConfig=new _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_0__.o("dc.title",_core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_0__.S.ASC)}ngOnInit(){this.initPage()}initPage(){const pagination$=this.paginationService.getCurrentPagination(this.config.id,this.config),sort$=this.paginationService.getCurrentSort(this.config.id,this.sortConfig);this.currentPageSubscription=(0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([pagination$,sort$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.wt)(([currentPagination,currentSort])=>this.cds.findTop({currentPage:currentPagination.currentPage,elementsPerPage:currentPagination.pageSize,sort:{field:currentSort.field,direction:currentSort.direction}}))).subscribe(results=>{this.communitiesRD$.next(results)})}unsubscribe(){(0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.Uh)(this.currentPageSubscription)&&this.currentPageSubscription.unsubscribe()}ngOnDestroy(){this.unsubscribe(),this.paginationService.clearPagination(this.config.id)}}__name(TopLevelCommunityListComponent,"TopLevelCommunityListComponent"),TopLevelCommunityListComponent.\u0275fac=__name(function(t){return new(t||TopLevelCommunityListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__.Y36(_core_data_community_data_service__WEBPACK_IMPORTED_MODULE_1__.w),_angular_core__WEBPACK_IMPORTED_MODULE_9__.Y36(_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_4__.N))},"TopLevelCommunityListComponent_Factory"),TopLevelCommunityListComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_9__.Xpm({type:TopLevelCommunityListComponent,selectors:[["ds-top-level-community-list"]],decls:2,vars:3,consts:[[4,"ngVar"],[4,"ngIf"],[3,"message",4,"ngIf"],[1,"lead"],[3,"config","sortConfig","objects","hideGear"],[3,"message"]],template:__name(function(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_9__.YNc(0,TopLevelCommunityListComponent_ng_container_0_Template,4,3,"ng-container",0),_angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(1,"async")),2&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_9__.Q6J("ngVar",_angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(1,1,ctx.communitiesRD$))},"TopLevelCommunityListComponent_Template"),directives:[_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_5__.g,_angular_common__WEBPACK_IMPORTED_MODULE_13__.O5,_shared_object_collection_object_collection_component__WEBPACK_IMPORTED_MODULE_6__.c,_shared_error_error_component__WEBPACK_IMPORTED_MODULE_7__.q,_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__.N],pipes:[_angular_common__WEBPACK_IMPORTED_MODULE_13__.Ov,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.X$],styles:[""],data:{animation:[_shared_animations_fade__WEBPACK_IMPORTED_MODULE_2__.Ic]},changeDetection:0})},52789:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>ViewTrackerComponent});__webpack_require__(20166);var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5e3),angulartics2__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(13758);class ViewTrackerComponent{constructor(angulartics2){this.angulartics2=angulartics2}ngOnInit(){this.angulartics2.eventTrack.next({action:"pageView",properties:{object:this.object}})}}__name(ViewTrackerComponent,"ViewTrackerComponent"),ViewTrackerComponent.\u0275fac=__name(function(t){return new(t||ViewTrackerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y36(angulartics2__WEBPACK_IMPORTED_MODULE_2__.b))},"ViewTrackerComponent_Factory"),ViewTrackerComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_1__.Xpm({type:ViewTrackerComponent,selectors:[["ds-view-tracker"]],inputs:{object:"object"},decls:1,vars:0,template:__name(function(rf,ctx){1&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(0,"\xa0\n")},"ViewTrackerComponent_Template"),styles:["[_nghost-%COMP%]{display:none}"]})},8563:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>StatisticsModule});var common=__webpack_require__(69808),core_module=__webpack_require__(2832),shared_module=__webpack_require__(42501),tslib_es6=__webpack_require__(70655),build_decorators=__webpack_require__(43568),equals_decorators=__webpack_require__(22560),cerialize=__webpack_require__(29923),resource_type=__webpack_require__(4905);const STATISTICS_ENDPOINT=new resource_type._("statistics");let StatisticsEndpoint=__name(class{},"StatisticsEndpoint");StatisticsEndpoint.type=STATISTICS_ENDPOINT,(0,tslib_es6.gn)([equals_decorators.OJ,cerialize.autoserialize,(0,tslib_es6.w6)("design:type",resource_type._)],StatisticsEndpoint.prototype,"type",void 0),(0,tslib_es6.gn)([cerialize.deserialize,(0,tslib_es6.w6)("design:type",Object)],StatisticsEndpoint.prototype,"_links",void 0),StatisticsEndpoint=(0,tslib_es6.gn)([build_decorators.KB],StatisticsEndpoint);var core=__webpack_require__(5e3);class StatisticsModule{static forRoot(){return{ngModule:StatisticsModule}}}__name(StatisticsModule,"StatisticsModule"),StatisticsModule.\u0275fac=__name(function(t){return new(t||StatisticsModule)},"StatisticsModule_Factory"),StatisticsModule.\u0275mod=core.oAB({type:StatisticsModule}),StatisticsModule.\u0275inj=core.cJS({imports:[[common.ez,core_module.IR.forRoot(),shared_module.m]]})},82948:(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./custom/app/home-page/home-news/home-news.component":[60148,148],"./dspace/app/home-page/home-news/home-news.component":[32194]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then(()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e});var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(()=>__webpack_require__(id))}__name(webpackAsyncContext,"webpackAsyncContext"),webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id=82948,module.exports=webpackAsyncContext},54367:(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./custom/app/home-page/home-page.component":[35236,5236]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then(()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e});var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then(()=>__webpack_require__(id))}__name(webpackAsyncContext,"webpackAsyncContext"),webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id=54367,module.exports=webpackAsyncContext}};
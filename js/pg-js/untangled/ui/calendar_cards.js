// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.ui.calendar_cards');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devcards.core');
goog.require('untangled.client.cards');
goog.require('om.next');
goog.require('om.dom');
goog.require('untangled.i18n');
goog.require('untangled.i18n.core');
goog.require('untangled.client.core');
goog.require('untangled.ui.calendar');
if(typeof untangled.ui.calendar_cards.CalRoot !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.calendar_cards.CalRoot = (function untangled$ui$calendar_cards$CalRoot(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.calendar_cards.CalRoot.prototype = goog.object.clone(React.Component.prototype);
}

var x52875_52893 = untangled.ui.calendar_cards.CalRoot.prototype;
x52875_52893.componentWillUpdate = ((function (x52875_52893){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___52894 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___52895 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___52894,next_ident__10196__auto___52895)){
var idxr__10197__auto___52896 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___52896 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___52896),((function (idxr__10197__auto___52896,ident__10195__auto___52894,next_ident__10196__auto___52895,this__10191__auto__,x52875_52893){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___52894], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___52895], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___52896,ident__10195__auto___52894,next_ident__10196__auto___52895,this__10191__auto__,x52875_52893))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x52875_52893))
;

x52875_52893.shouldComponentUpdate = ((function (x52875_52893){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__52877 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__52877);
} else {
return G__52877;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__52882 = this__10191__auto__.state;
var G__52883 = "omcljs$state";
return goog.object.get(G__52882,G__52883);
})(),goog.object.get(next_state__10193__auto__,"omcljs$state"));
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__10191__auto__.props.children,next_children__10194__auto__);
}
}
});})(x52875_52893))
;

x52875_52893.componentWillUnmount = ((function (x52875_52893){
return (function (){
var this__10191__auto__ = this;
var r__10202__auto__ = om.next.get_reconciler(this__10191__auto__);
var cfg__10203__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__10202__auto__);
var st__10204__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__10203__auto__);
var indexer__10201__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__10203__auto__);
if(cljs.core.truth_((function (){var and__7490__auto__ = !((st__10204__auto__ == null));
if(and__7490__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__10204__auto__) : cljs.core.deref.call(null,st__10204__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__10191__auto__], null));
} else {
return and__7490__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__10204__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__10191__auto__], 0));
} else {
}

if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x52875_52893))
;

x52875_52893.componentDidUpdate = ((function (x52875_52893){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x52875_52893))
;

x52875_52893.isMounted = ((function (x52875_52893){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x52875_52893))
;

x52875_52893.componentWillMount = ((function (x52875_52893){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x52875_52893))
;

x52875_52893.render = ((function (x52875_52893){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_52884 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_52885 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_52886 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_52887 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_52888 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__52889 = om.next.props(this$);
var map__52889__$1 = ((((!((map__52889 == null)))?((((map__52889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52889.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52889):map__52889);
var start_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52889__$1,cljs.core.cst$kw$start_DASH_date);
var end_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52889__$1,cljs.core.cst$kw$end_DASH_date);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "u-row"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "u-column--3"}),cljs.core.array_seq([untangled.ui.calendar.ui_calendar.cljs$core$IFn$_invoke$arity$variadic(start_date,cljs.core.array_seq([cljs.core.cst$kw$overlay_DASH_trigger,((function (map__52889,map__52889__$1,start_date,end_date,_STAR_reconciler_STAR_52884,_STAR_depth_STAR_52885,_STAR_shared_STAR_52886,_STAR_instrument_STAR_52887,_STAR_parent_STAR_52888,this$,this__10190__auto__,x52875_52893){
return (function (toggle,cal){
return om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": toggle, "className": "c-button", "type": "button"}),cljs.core.array_seq([tr("Start Date: "),untangled.ui.calendar.displayed_date(cal)], 0));
});})(map__52889,map__52889__$1,start_date,end_date,_STAR_reconciler_STAR_52884,_STAR_depth_STAR_52885,_STAR_shared_STAR_52886,_STAR_instrument_STAR_52887,_STAR_parent_STAR_52888,this$,this__10190__auto__,x52875_52893))
], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "u-column--3 u-push--6 u-end"}),cljs.core.array_seq([untangled.ui.calendar.ui_calendar.cljs$core$IFn$_invoke$arity$variadic(end_date,cljs.core.array_seq([cljs.core.cst$kw$align,cljs.core.cst$kw$bottom_DASH_right_DASH_edge,cljs.core.cst$kw$overlay_DASH_trigger,((function (map__52889,map__52889__$1,start_date,end_date,_STAR_reconciler_STAR_52884,_STAR_depth_STAR_52885,_STAR_shared_STAR_52886,_STAR_instrument_STAR_52887,_STAR_parent_STAR_52888,this$,this__10190__auto__,x52875_52893){
return (function (toggle,cal){
return om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": toggle, "className": "c-button", "type": "button"}),cljs.core.array_seq([tr("End Date: "),untangled.ui.calendar.displayed_date(cal)], 0));
});})(map__52889,map__52889__$1,start_date,end_date,_STAR_reconciler_STAR_52884,_STAR_depth_STAR_52885,_STAR_shared_STAR_52886,_STAR_instrument_STAR_52887,_STAR_parent_STAR_52888,this$,this__10190__auto__,x52875_52893))
], 0))], 0))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_52888;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_52887;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_52886;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_52885;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_52884;
}});})(x52875_52893))
;


untangled.ui.calendar_cards.CalRoot.prototype.constructor = untangled.ui.calendar_cards.CalRoot;

untangled.ui.calendar_cards.CalRoot.prototype.constructor.displayName = "untangled.ui.calendar-cards/CalRoot";

untangled.ui.calendar_cards.CalRoot.prototype.om$isComponent = true;

var x52891_52897 = untangled.ui.calendar_cards.CalRoot;
/** @nocollapse */
x52891_52897.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52891_52897.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x52891_52897){
return (function (cls,params){
var cls__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start_DASH_date,untangled.ui.calendar.calendar.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$start_DASH_date),cljs.core.cst$kw$end_DASH_date,untangled.ui.calendar.calendar.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$end_DASH_date)], null);
});})(x52891_52897))
;

/** @nocollapse */
x52891_52897.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52891_52897.om$next$IQuery$query$arity$1 = ((function (x52891_52897){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$start_DASH_date,om.next.get_query(untangled.ui.calendar.Calendar)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$end_DASH_date,om.next.get_query(untangled.ui.calendar.Calendar)], null)], null);
});})(x52891_52897))
;


var x52892_52898 = untangled.ui.calendar_cards.CalRoot.prototype;

x52892_52898.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x52892_52898.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x52892_52898){
return (function (cls,params){
var cls__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start_DASH_date,untangled.ui.calendar.calendar.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$start_DASH_date),cljs.core.cst$kw$end_DASH_date,untangled.ui.calendar.calendar.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$end_DASH_date)], null);
});})(x52892_52898))
;


x52892_52898.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x52892_52898.om$next$IQuery$query$arity$1 = ((function (x52892_52898){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$start_DASH_date,om.next.get_query(untangled.ui.calendar.Calendar)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$end_DASH_date,om.next.get_query(untangled.ui.calendar.Calendar)], null)], null);
});})(x52892_52898))
;


untangled.ui.calendar_cards.CalRoot.cljs$lang$type = true;

untangled.ui.calendar_cards.CalRoot.cljs$lang$ctorStr = "untangled.ui.calendar-cards/CalRoot";

untangled.ui.calendar_cards.CalRoot.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.calendar-cards/CalRoot");
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$calendar_cards,cljs.core.cst$kw$calendar_DASH_viewer], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"calendar-viewer",cljs.core.cst$kw$documentation,"#A Calendar Widget.",cljs.core.cst$kw$main_DASH_obj,devcards.core.dom_node_STAR_((function (state_atom__50267__auto__,node__50268__auto__){
untangled.client.core.mount(untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$initial_DASH_state,state_atom__50267__auto__], 0)),untangled.ui.calendar_cards.CalRoot,node__50268__auto__);

var G__52899 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom__50267__auto__,cljs.core.assoc,cljs.core.cst$kw$ui_SLASH_react_DASH_key,untangled.dom.unique_key());
});
var G__52900 = (1000);
return setTimeout(G__52899,G__52900);
})),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inspect_DASH_data,true], null)], null));
})], null));

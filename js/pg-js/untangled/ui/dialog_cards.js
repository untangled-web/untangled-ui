// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.ui.dialog_cards');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devcards.core');
goog.require('untangled.ui.sample_card');
goog.require('om.next');
goog.require('om.dom');
goog.require('untangled.i18n.core');
goog.require('untangled.client.core');
goog.require('untangled.ui.layout');
goog.require('untangled.icons');
goog.require('untangled.ui.elements');
goog.require('untangled.ui.dialogs');
goog.require('untangled.client.cards');
goog.require('untangled.client.mutations');
/**
 * @constructor
 */
untangled.ui.dialog_cards.CDRoot = (function untangled$ui$dialog_cards$CDRoot(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.dialog_cards.CDRoot.prototype = goog.object.clone(React.Component.prototype);

var x51929_51947 = untangled.ui.dialog_cards.CDRoot.prototype;
x51929_51947.componentWillUpdate = ((function (x51929_51947){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___51948 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___51949 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___51948,next_ident__10196__auto___51949)){
var idxr__10197__auto___51950 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___51950 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___51950),((function (idxr__10197__auto___51950,ident__10195__auto___51948,next_ident__10196__auto___51949,this__10191__auto__,x51929_51947){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___51948], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___51949], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___51950,ident__10195__auto___51948,next_ident__10196__auto___51949,this__10191__auto__,x51929_51947))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x51929_51947))
;

x51929_51947.shouldComponentUpdate = ((function (x51929_51947){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__51931 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__51931);
} else {
return G__51931;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__51936 = this__10191__auto__.state;
var G__51937 = "omcljs$state";
return goog.object.get(G__51936,G__51937);
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
});})(x51929_51947))
;

x51929_51947.componentWillUnmount = ((function (x51929_51947){
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
});})(x51929_51947))
;

x51929_51947.componentDidUpdate = ((function (x51929_51947){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x51929_51947))
;

x51929_51947.isMounted = ((function (x51929_51947){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x51929_51947))
;

x51929_51947.componentWillMount = ((function (x51929_51947){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x51929_51947))
;

x51929_51947.render = ((function (x51929_51947){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_51938 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_51939 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_51940 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_51941 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_51942 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__51943 = om.next.props(this$);
var map__51943__$1 = ((((!((map__51943 == null)))?((((map__51943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51943.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51943):map__51943);
var dialog = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51943__$1,cljs.core.cst$kw$dialog);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.dialogs.ui_confirmation_dialog(dialog)], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_51942;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_51941;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_51940;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_51939;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_51938;
}});})(x51929_51947))
;


untangled.ui.dialog_cards.CDRoot.prototype.constructor = untangled.ui.dialog_cards.CDRoot;

untangled.ui.dialog_cards.CDRoot.prototype.constructor.displayName = "untangled.ui.dialog-cards/CDRoot";

untangled.ui.dialog_cards.CDRoot.prototype.om$isComponent = true;

var x51945_51951 = untangled.ui.dialog_cards.CDRoot;
/** @nocollapse */
x51945_51951.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x51945_51951.om$next$IQuery$query$arity$1 = ((function (x51945_51951){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dialog,om.next.get_query(untangled.ui.dialogs.ConfirmationDialog)], null)], null);
});})(x51945_51951))
;

/** @nocollapse */
x51945_51951.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x51945_51951.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x51945_51951){
return (function (c,p){
var c__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dialog,untangled.ui.dialogs.make_confirmation_dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$ok,true,"Continue?",cljs.core.array_seq([cljs.core.cst$kw$title,"Really?",cljs.core.cst$kw$yes_DASH_label,"OK",cljs.core.cst$kw$no_DASH_label,"Cancel"], 0))], null);
});})(x51945_51951))
;


var x51946_51952 = untangled.ui.dialog_cards.CDRoot.prototype;

x51946_51952.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x51946_51952.om$next$IQuery$query$arity$1 = ((function (x51946_51952){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dialog,om.next.get_query(untangled.ui.dialogs.ConfirmationDialog)], null)], null);
});})(x51946_51952))
;


x51946_51952.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x51946_51952.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x51946_51952){
return (function (c,p){
var c__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dialog,untangled.ui.dialogs.make_confirmation_dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$ok,true,"Continue?",cljs.core.array_seq([cljs.core.cst$kw$title,"Really?",cljs.core.cst$kw$yes_DASH_label,"OK",cljs.core.cst$kw$no_DASH_label,"Cancel"], 0))], null);
});})(x51946_51952))
;


untangled.ui.dialog_cards.CDRoot.cljs$lang$type = true;

untangled.ui.dialog_cards.CDRoot.cljs$lang$ctorStr = "untangled.ui.dialog-cards/CDRoot";

untangled.ui.dialog_cards.CDRoot.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.dialog-cards/CDRoot");
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$dialog_cards,cljs.core.cst$kw$ConfirmationDialog_DASH_one], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"ConfirmationDialog-one",cljs.core.cst$kw$documentation,"",cljs.core.cst$kw$main_DASH_obj,devcards.core.dom_node_STAR_((function (state_atom__50267__auto__,node__50268__auto__){
untangled.client.core.mount(untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$initial_DASH_state,state_atom__50267__auto__], 0)),untangled.ui.dialog_cards.CDRoot,node__50268__auto__);

var G__51953 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom__50267__auto__,cljs.core.assoc,cljs.core.cst$kw$ui_SLASH_react_DASH_key,untangled.dom.unique_key());
});
var G__51954 = (1000);
return setTimeout(G__51953,G__51954);
})),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inspect_DASH_data,true], null)], null));
})], null));

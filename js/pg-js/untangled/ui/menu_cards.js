// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.ui.menu_cards');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devcards.core');
goog.require('untangled.client.cards');
goog.require('om.next');
goog.require('om.dom');
goog.require('untangled.i18n.core');
goog.require('untangled.ui.menu');
goog.require('untangled.client.core');
goog.require('untangled.icons');
goog.require('untangled.ui.calendar');
goog.require('untangled.client.mutations');
if(typeof untangled.ui.menu_cards.MenuRoot !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.menu_cards.MenuRoot = (function untangled$ui$menu_cards$MenuRoot(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.menu_cards.MenuRoot.prototype = goog.object.clone(React.Component.prototype);
}

var x52540_52559 = untangled.ui.menu_cards.MenuRoot.prototype;
x52540_52559.componentWillUpdate = ((function (x52540_52559){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___52560 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___52561 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___52560,next_ident__10196__auto___52561)){
var idxr__10197__auto___52562 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___52562 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___52562),((function (idxr__10197__auto___52562,ident__10195__auto___52560,next_ident__10196__auto___52561,this__10191__auto__,x52540_52559){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___52560], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___52561], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___52562,ident__10195__auto___52560,next_ident__10196__auto___52561,this__10191__auto__,x52540_52559))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x52540_52559))
;

x52540_52559.shouldComponentUpdate = ((function (x52540_52559){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__52542 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__52542);
} else {
return G__52542;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__52547 = this__10191__auto__.state;
var G__52548 = "omcljs$state";
return goog.object.get(G__52547,G__52548);
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
});})(x52540_52559))
;

x52540_52559.componentWillUnmount = ((function (x52540_52559){
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
});})(x52540_52559))
;

x52540_52559.componentDidUpdate = ((function (x52540_52559){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x52540_52559))
;

x52540_52559.isMounted = ((function (x52540_52559){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x52540_52559))
;

x52540_52559.componentWillMount = ((function (x52540_52559){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x52540_52559))
;

x52540_52559.render = ((function (x52540_52559){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_52549 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_52550 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_52551 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_52552 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_52553 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__52554 = om.next.props(this$);
var map__52554__$1 = ((((!((map__52554 == null)))?((((map__52554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52554.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52554):map__52554);
var react_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52554__$1,cljs.core.cst$kw$ui_SLASH_react_DASH_key);
var menu_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52554__$1,cljs.core.cst$kw$menu_DASH_1);
var menu_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52554__$1,cljs.core.cst$kw$menu_DASH_2);
var mood = untangled.ui.menu.current_selection(menu_1);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": react_key, "onClick": ((function (map__52554,map__52554__$1,react_key,menu_1,menu_2,mood,_STAR_reconciler_STAR_52549,_STAR_depth_STAR_52550,_STAR_shared_STAR_52551,_STAR_instrument_STAR_52552,_STAR_parent_STAR_52553,this$,this__10190__auto__,x52540_52559){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$menu_SLASH_close_DASH_all),(function (){var x__8436__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())))));
});})(map__52554,map__52554__$1,react_key,menu_1,menu_2,mood,_STAR_reconciler_STAR_52549,_STAR_depth_STAR_52550,_STAR_shared_STAR_52551,_STAR_instrument_STAR_52552,_STAR_parent_STAR_52553,this$,this__10190__auto__,x52540_52559))
}),cljs.core.array_seq([untangled.ui.menu.ui_menu.cljs$core$IFn$_invoke$arity$variadic(menu_1,cljs.core.array_seq([cljs.core.cst$kw$onSelect,((function (map__52554,map__52554__$1,react_key,menu_1,menu_2,mood,_STAR_reconciler_STAR_52549,_STAR_depth_STAR_52550,_STAR_shared_STAR_52551,_STAR_instrument_STAR_52552,_STAR_parent_STAR_52553,this$,this__10190__auto__,x52540_52559){
return (function (id){
var G__52556 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Selected "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
return console.log(G__52556);
});})(map__52554,map__52554__$1,react_key,menu_1,menu_2,mood,_STAR_reconciler_STAR_52549,_STAR_depth_STAR_52550,_STAR_shared_STAR_52551,_STAR_instrument_STAR_52552,_STAR_parent_STAR_52553,this$,this__10190__auto__,x52540_52559))
], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mood,cljs.core.cst$kw$indifferent))?untangled.ui.menu.ui_menu(menu_2):null)], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_52553;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_52552;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_52551;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_52550;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_52549;
}});})(x52540_52559))
;


untangled.ui.menu_cards.MenuRoot.prototype.constructor = untangled.ui.menu_cards.MenuRoot;

untangled.ui.menu_cards.MenuRoot.prototype.constructor.displayName = "untangled.ui.menu-cards/MenuRoot";

untangled.ui.menu_cards.MenuRoot.prototype.om$isComponent = true;

var x52557_52563 = untangled.ui.menu_cards.MenuRoot;
/** @nocollapse */
x52557_52563.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52557_52563.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x52557_52563){
return (function (cls,params){
var cls__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$menu_DASH_1,untangled.ui.menu.menu(cljs.core.cst$kw$mood_DASH_filter,"Mood Filter",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.menu.menu_item(cljs.core.cst$kw$happy,"Happy"),untangled.ui.menu.menu_item(cljs.core.cst$kw$indifferent,"Indifferent"),untangled.ui.menu.menu_item(cljs.core.cst$kw$sad,"Sad")], null)),cljs.core.cst$kw$menu_DASH_2,untangled.ui.menu.menu(cljs.core.cst$kw$age_DASH_filter,"Age Filter",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.menu.menu_item(cljs.core.cst$kw$young,"0-10"),untangled.ui.menu.menu_item(cljs.core.cst$kw$older,"11-20"),untangled.ui.menu.menu_item(cljs.core.cst$kw$old,"20+")], null))], null);
});})(x52557_52563))
;

/** @nocollapse */
x52557_52563.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52557_52563.om$next$IQuery$query$arity$1 = ((function (x52557_52563){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_react_DASH_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$menu_DASH_1,om.next.get_query(untangled.ui.menu.Menu)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$menu_DASH_2,om.next.get_query(untangled.ui.menu.Menu)], null)], null);
});})(x52557_52563))
;


var x52558_52564 = untangled.ui.menu_cards.MenuRoot.prototype;

x52558_52564.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x52558_52564.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x52558_52564){
return (function (cls,params){
var cls__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$menu_DASH_1,untangled.ui.menu.menu(cljs.core.cst$kw$mood_DASH_filter,"Mood Filter",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.menu.menu_item(cljs.core.cst$kw$happy,"Happy"),untangled.ui.menu.menu_item(cljs.core.cst$kw$indifferent,"Indifferent"),untangled.ui.menu.menu_item(cljs.core.cst$kw$sad,"Sad")], null)),cljs.core.cst$kw$menu_DASH_2,untangled.ui.menu.menu(cljs.core.cst$kw$age_DASH_filter,"Age Filter",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.menu.menu_item(cljs.core.cst$kw$young,"0-10"),untangled.ui.menu.menu_item(cljs.core.cst$kw$older,"11-20"),untangled.ui.menu.menu_item(cljs.core.cst$kw$old,"20+")], null))], null);
});})(x52558_52564))
;


x52558_52564.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x52558_52564.om$next$IQuery$query$arity$1 = ((function (x52558_52564){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_react_DASH_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$menu_DASH_1,om.next.get_query(untangled.ui.menu.Menu)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$menu_DASH_2,om.next.get_query(untangled.ui.menu.Menu)], null)], null);
});})(x52558_52564))
;


untangled.ui.menu_cards.MenuRoot.cljs$lang$type = true;

untangled.ui.menu_cards.MenuRoot.cljs$lang$ctorStr = "untangled.ui.menu-cards/MenuRoot";

untangled.ui.menu_cards.MenuRoot.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.menu-cards/MenuRoot");
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$menu_cards,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["# Menu\n\n  The active menu component allows you to create and use a menu component that is tracked in app state.\n\n  The following Om mutations may be used from anywhere in your application as long as you know the menu's ID:\n\n  - close-all : Close all open menus. Useful from the Root of your app to ensure that clicking outside of a menu\n  will cause all menus to close\n  - set-open : Opens/closes a menu by ID\n  - select : Causes a particular item within the menu to be selected (does not trigger events)\n  - style : Changes the visual style of a menu between :normal button and :icon for a simpler trigger.\n\n\n  Components can look up the state of a menu at the menu ident, which can be found using the `menus/ident`.\n\n  All mutations are implemented using `-impl` functions in menu, which allows you to compose menu operations\n  within your own mutations without having to know how menus are implemented.\n\n  - current-selection\n\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui ^:once MenuRoot\n  static uc/InitialAppState\n  (initial-state [cls params] {:menu-1 (menu/menu :mood-filter \"Mood Filter\"\n                                         [(menu/menu-item :happy \"Happy\")\n                                          (menu/menu-item :indifferent \"Indifferent\")\n                                          (menu/menu-item :sad \"Sad\")])\n                               :menu-2 (menu/menu :age-filter \"Age Filter\"\n                                         [(menu/menu-item :young \"0-10\")\n                                          (menu/menu-item :older \"11-20\")\n                                          (menu/menu-item :old \"20+\")])})\n  static om/IQuery\n  (query [this] [:ui/react-key\n                 {:menu-1 (om/get-query menu/Menu)}\n                 {:menu-2 (om/get-query menu/Menu)}])\n  Object\n  (render [this]\n    (let [{:keys [ui/react-key menu-1 menu-2]} (om/props this)\n          mood (menu/current-selection menu-1)]\n      (dom/div #js {:key react-key :onClick #(om/transact! this `[(menu/close-all {})])}\n        (menu/ui-menu menu-1\n          :onSelect (fn [id] (js/console.log (str \"Selected \" id))))\n        (when (= mood :indifferent)\n          (menu/ui-menu menu-2))))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join('')], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hide_DASH_border,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$menu_cards,cljs.core.cst$kw$dropdown_DASH_active_DASH_playground], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"dropdown-active-playground",cljs.core.cst$kw$documentation,"# Menus\n\n  Note: Choosing 'Indifferent' in the filter will cause a dependent menu to appear.\n  ",cljs.core.cst$kw$main_DASH_obj,devcards.core.dom_node_STAR_((function (state_atom__50267__auto__,node__50268__auto__){
untangled.client.core.mount(untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$initial_DASH_state,state_atom__50267__auto__], 0)),untangled.ui.menu_cards.MenuRoot,node__50268__auto__);

var G__52565 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom__50267__auto__,cljs.core.assoc,cljs.core.cst$kw$ui_SLASH_react_DASH_key,untangled.dom.unique_key());
});
var G__52566 = (1000);
return setTimeout(G__52565,G__52566);
})),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inspect_DASH_data,true], null)], null));
})], null));

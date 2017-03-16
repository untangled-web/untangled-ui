// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.ui.menu');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('om.next');
goog.require('om.dom');
goog.require('untangled.i18n');
goog.require('untangled.ui.state');
goog.require('untangled.client.core');
goog.require('untangled.client.mutations');
goog.require('untangled.icons');
untangled.ui.menu.table_name = cljs.core.cst$kw$untangled$ui$menu_SLASH_by_DASH_id;
untangled.ui.menu.ident = (function untangled$ui$menu$ident(menu_id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.menu.table_name,menu_id], null);
});
/**
 * Set whether or not the menu with the given ID is open.
 */
untangled.ui.menu.set_open_impl = (function untangled$ui$menu$set_open_impl(menu,open_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(menu,cljs.core.cst$kw$menu_SLASH_open_QMARK_,open_QMARK_);
});
/**
 * Close all menus, application wide
 */
untangled.ui.menu.close_all_impl = (function untangled$ui$menu$close_all_impl(app_state_map){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,menu_id){
return untangled.ui.state.evolve(m,untangled.ui.menu.ident(menu_id),untangled.ui.menu.set_open_impl,false);
}),app_state_map,cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_state_map,untangled.ui.menu.table_name)));
});
/**
 * Select an item in the menu
 */
untangled.ui.menu.select_impl = (function untangled$ui$menu$select_impl(menu,item_id){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(menu,cljs.core.cst$kw$menu_SLASH_selected_DASH_item,item_id);
});
/**
 * Returns true if the menu is currently open.
 */
untangled.ui.menu.is_open_QMARK_ = (function untangled$ui$menu$is_open_QMARK_(menu){
return cljs.core.cst$kw$menu_SLASH_open_QMARK_.cljs$core$IFn$_invoke$arity$1(menu);
});
/**
 * Returns the ID of the currently selected item, or nil. Useful if you choose not to pay attention to the callback
 *   and instead have some other parent UI event (like submit) that needs to gather up the menu selection.
 */
untangled.ui.menu.current_selection = (function untangled$ui$menu$current_selection(menu){
return cljs.core.cst$kw$menu_SLASH_selected_DASH_item.cljs$core$IFn$_invoke$arity$1(menu);
});
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$menu_SLASH_close_DASH_all,(function (env49095,_,params_ignored){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__49096 = env49095;
var map__49096__$1 = ((((!((map__49096 == null)))?((((map__49096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49096):map__49096);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49096__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__49096,map__49096__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,untangled.ui.menu.close_all_impl);
});})(map__49096,map__49096__$1,state))
], null);
})(),(function (){var env = env49095;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$menu_SLASH_set_DASH_open,(function (env49098,_,p__49099){
var map__49100 = p__49099;
var map__49100__$1 = ((((!((map__49100 == null)))?((((map__49100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49100):map__49100);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49100__$1,cljs.core.cst$kw$id);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49100__$1,cljs.core.cst$kw$open_QMARK_);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__49102 = env49098;
var map__49102__$1 = ((((!((map__49102 == null)))?((((map__49102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49102.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49102):map__49102);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49102__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__49102,map__49102__$1,state,map__49100,map__49100__$1,id,open_QMARK_){
return (function (){
return untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$4(state,untangled.ui.menu.ident(id),untangled.ui.menu.set_open_impl,open_QMARK_);
});})(map__49102,map__49102__$1,state,map__49100,map__49100__$1,id,open_QMARK_))
], null);
})(),(function (){var env = env49098;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$menu_SLASH_select,(function (env49104,_,p__49105){
var map__49106 = p__49105;
var map__49106__$1 = ((((!((map__49106 == null)))?((((map__49106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49106.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49106):map__49106);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49106__$1,cljs.core.cst$kw$id);
var item_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49106__$1,cljs.core.cst$kw$item_DASH_id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__49108 = env49104;
var map__49108__$1 = ((((!((map__49108 == null)))?((((map__49108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49108.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49108):map__49108);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49108__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__49108,map__49108__$1,state,map__49106,map__49106__$1,id,item_id){
return (function (){
return untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$4(state,untangled.ui.menu.ident(id),untangled.ui.menu.select_impl,item_id);
});})(map__49108,map__49108__$1,state,map__49106,map__49106__$1,id,item_id))
], null);
})(),(function (){var env = env49104;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
/**
 * Build a state tree for a menu to use in initial app state. The id of the menu should be globally unique.
 */
untangled.ui.menu.menu = (function untangled$ui$menu$menu(id,label,items){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$menu_SLASH_id,id,cljs.core.cst$kw$menu_SLASH_label,label,cljs.core.cst$kw$menu_SLASH_items,items,cljs.core.cst$kw$menu_SLASH_open_QMARK_,false], null);
});
/**
 * Build the state map that can be used in a menu as an item. The `id` need only be unique within the menu.
 */
untangled.ui.menu.menu_item = (function untangled$ui$menu$menu_item(id,label){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$menu_DASH_item_SLASH_item_DASH_id,id,cljs.core.cst$kw$menu_DASH_item_SLASH_label,label], null);
});
untangled.ui.menu.find_first = (function untangled$ui$menu$find_first(key,value,list){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49116_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__49116_SHARP_,key),value);
}),list));
});
/**
 * @constructor
 */
untangled.ui.menu.Menu = (function untangled$ui$menu$Menu(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.menu.Menu.prototype = goog.object.clone(React.Component.prototype);

var x49125_49152 = untangled.ui.menu.Menu.prototype;
x49125_49152.componentWillUpdate = ((function (x49125_49152){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___49153 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___49154 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___49153,next_ident__10196__auto___49154)){
var idxr__10197__auto___49155 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___49155 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___49155),((function (idxr__10197__auto___49155,ident__10195__auto___49153,next_ident__10196__auto___49154,this__10191__auto__,x49125_49152){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___49153], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___49154], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___49155,ident__10195__auto___49153,next_ident__10196__auto___49154,this__10191__auto__,x49125_49152))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x49125_49152))
;

x49125_49152.shouldComponentUpdate = ((function (x49125_49152){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__49127 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__49127);
} else {
return G__49127;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__49132 = this__10191__auto__.state;
var G__49133 = "omcljs$state";
return goog.object.get(G__49132,G__49133);
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
});})(x49125_49152))
;

x49125_49152.componentWillUnmount = ((function (x49125_49152){
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
});})(x49125_49152))
;

x49125_49152.componentDidUpdate = ((function (x49125_49152){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x49125_49152))
;

x49125_49152.isMounted = ((function (x49125_49152){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x49125_49152))
;

x49125_49152.componentWillMount = ((function (x49125_49152){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x49125_49152))
;

x49125_49152.render = ((function (x49125_49152){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_49136 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_49137 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_49138 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_49139 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_49140 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__49141 = om.next.props(this$);
var map__49141__$1 = ((((!((map__49141 == null)))?((((map__49141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49141):map__49141);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49141__$1,cljs.core.cst$kw$menu_SLASH_id);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49141__$1,cljs.core.cst$kw$menu_SLASH_label);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49141__$1,cljs.core.cst$kw$menu_SLASH_items);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49141__$1,cljs.core.cst$kw$menu_SLASH_open_QMARK_);
var selected_item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49141__$1,cljs.core.cst$kw$menu_SLASH_selected_DASH_item);
var onSelect = (function (){var or__7502__auto__ = om.next.get_computed.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$onSelect);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.identity;
}
})();
var menu_style = om.next.get_computed.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$style);
var selected_id = selected_item;
var selected_item__$1 = untangled.ui.menu.find_first(cljs.core.cst$kw$menu_DASH_item_SLASH_item_DASH_id,selected_id,items);
var selected_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(selected_item__$1,cljs.core.cst$kw$menu_DASH_item_SLASH_label,tr(label));
var menu_class = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-menu"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(open_QMARK_)?" is-active":""))].join('');
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("menu-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(id))].join(''), "className": "has-menu"}),cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(menu_style,cljs.core.cst$kw$icon))?om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-button c-button--icon", "type": "button", "title": tr(selected_label), "onClick": ((function (map__49141,map__49141__$1,id,label,items,open_QMARK_,selected_item,onSelect,menu_style,selected_id,selected_item__$1,selected_label,menu_class,_STAR_reconciler_STAR_49136,_STAR_depth_STAR_49137,_STAR_shared_STAR_49138,_STAR_instrument_STAR_49139,_STAR_parent_STAR_49140,this$,this__10190__auto__,x49125_49152){
return (function (evt){
evt.stopPropagation();

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$menu_SLASH_close_DASH_all),(function (){var x__8436__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$menu_SLASH_set_DASH_open),(function (){var x__8436__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$open_QMARK_,cljs.core.not(open_QMARK_)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$menu_SLASH_open_QMARK_)], 0))))));

return false;
});})(map__49141,map__49141__$1,id,label,items,open_QMARK_,selected_item,onSelect,menu_style,selected_id,selected_item__$1,selected_label,menu_class,_STAR_reconciler_STAR_49136,_STAR_depth_STAR_49137,_STAR_shared_STAR_49138,_STAR_instrument_STAR_49139,_STAR_parent_STAR_49140,this$,this__10190__auto__,x49125_49152))
}),cljs.core.array_seq([untangled.icons.icon(cljs.core.cst$kw$more_vert)], 0)):om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__49141,map__49141__$1,id,label,items,open_QMARK_,selected_item,onSelect,menu_style,selected_id,selected_item__$1,selected_label,menu_class,_STAR_reconciler_STAR_49136,_STAR_depth_STAR_49137,_STAR_shared_STAR_49138,_STAR_instrument_STAR_49139,_STAR_parent_STAR_49140,this$,this__10190__auto__,x49125_49152){
return (function (evt){
evt.stopPropagation();

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$menu_SLASH_close_DASH_all),(function (){var x__8436__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$menu_SLASH_set_DASH_open),(function (){var x__8436__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$open_QMARK_,cljs.core.not(open_QMARK_)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$menu_SLASH_open_QMARK_)], 0))))));

return false;
});})(map__49141,map__49141__$1,id,label,items,open_QMARK_,selected_item,onSelect,menu_style,selected_id,selected_item__$1,selected_label,menu_class,_STAR_reconciler_STAR_49136,_STAR_depth_STAR_49137,_STAR_shared_STAR_49138,_STAR_instrument_STAR_49139,_STAR_parent_STAR_49140,this$,this__10190__auto__,x49125_49152))
, "type": "button", "className": "c-button"}),cljs.core.array_seq([tr(selected_label)], 0))),om.dom.ul.cljs$core$IFn$_invoke$arity$variadic(({"tabIndex": "-1", "aria-hidden": "true", "className": menu_class}),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__49141,map__49141__$1,id,label,items,open_QMARK_,selected_item,onSelect,menu_style,selected_id,selected_item__$1,selected_label,menu_class,_STAR_reconciler_STAR_49136,_STAR_depth_STAR_49137,_STAR_shared_STAR_49138,_STAR_instrument_STAR_49139,_STAR_parent_STAR_49140,this$,this__10190__auto__,x49125_49152){
return (function (p__49147){
var map__49148 = p__49147;
var map__49148__$1 = ((((!((map__49148 == null)))?((((map__49148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49148):map__49148);
var item_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49148__$1,cljs.core.cst$kw$menu_DASH_item_SLASH_item_DASH_id);
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49148__$1,cljs.core.cst$kw$menu_DASH_item_SLASH_label);
return om.dom.li.cljs$core$IFn$_invoke$arity$variadic(({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("menu-item-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(item_id))].join(''), "onClick": ((function (map__49148,map__49148__$1,item_id,label__$1,map__49141,map__49141__$1,id,label,items,open_QMARK_,selected_item,onSelect,menu_style,selected_id,selected_item__$1,selected_label,menu_class,_STAR_reconciler_STAR_49136,_STAR_depth_STAR_49137,_STAR_shared_STAR_49138,_STAR_instrument_STAR_49139,_STAR_parent_STAR_49140,this$,this__10190__auto__,x49125_49152){
return (function (evt){
evt.stopPropagation();

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$menu_SLASH_close_DASH_all),(function (){var x__8436__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$menu_SLASH_select),(function (){var x__8436__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$item_DASH_id,item_id], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$menu_SLASH_open_QMARK_)], 0))))));

if(cljs.core.truth_(onSelect)){
(onSelect.cljs$core$IFn$_invoke$arity$1 ? onSelect.cljs$core$IFn$_invoke$arity$1(item_id) : onSelect.call(null,item_id));
} else {
}

return false;
});})(map__49148,map__49148__$1,item_id,label__$1,map__49141,map__49141__$1,id,label,items,open_QMARK_,selected_item,onSelect,menu_style,selected_id,selected_item__$1,selected_label,menu_class,_STAR_reconciler_STAR_49136,_STAR_depth_STAR_49137,_STAR_shared_STAR_49138,_STAR_instrument_STAR_49139,_STAR_parent_STAR_49140,this$,this__10190__auto__,x49125_49152))
}),cljs.core.array_seq([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-menu__item"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item_id,selected_id))?" is-active":null))].join('')}),cljs.core.array_seq([label__$1], 0))], 0));
});})(map__49141,map__49141__$1,id,label,items,open_QMARK_,selected_item,onSelect,menu_style,selected_id,selected_item__$1,selected_label,menu_class,_STAR_reconciler_STAR_49136,_STAR_depth_STAR_49137,_STAR_shared_STAR_49138,_STAR_instrument_STAR_49139,_STAR_parent_STAR_49140,this$,this__10190__auto__,x49125_49152))
,items)], 0))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_49140;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_49139;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_49138;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_49137;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_49136;
}});})(x49125_49152))
;


untangled.ui.menu.Menu.prototype.constructor = untangled.ui.menu.Menu;

untangled.ui.menu.Menu.prototype.constructor.displayName = "untangled.ui.menu/Menu";

untangled.ui.menu.Menu.prototype.om$isComponent = true;

var x49150_49237 = untangled.ui.menu.Menu;
/** @nocollapse */
x49150_49237.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x49150_49237.om$next$IQuery$query$arity$1 = ((function (x49150_49237){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$menu_SLASH_id,cljs.core.cst$kw$menu_SLASH_open_QMARK_,cljs.core.cst$kw$menu_SLASH_label,cljs.core.cst$kw$menu_SLASH_items,cljs.core.cst$kw$menu_SLASH_selected_DASH_item], null);
});})(x49150_49237))
;

/** @nocollapse */
x49150_49237.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x49150_49237.om$next$Ident$ident$arity$2 = ((function (x49150_49237){
return (function (this$,props){
var this$__$1 = this;
return untangled.ui.menu.ident(cljs.core.cst$kw$menu_SLASH_id.cljs$core$IFn$_invoke$arity$1(props));
});})(x49150_49237))
;


var x49151_49240 = untangled.ui.menu.Menu.prototype;

x49151_49240.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x49151_49240.om$next$IQuery$query$arity$1 = ((function (x49151_49240){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$menu_SLASH_id,cljs.core.cst$kw$menu_SLASH_open_QMARK_,cljs.core.cst$kw$menu_SLASH_label,cljs.core.cst$kw$menu_SLASH_items,cljs.core.cst$kw$menu_SLASH_selected_DASH_item], null);
});})(x49151_49240))
;


x49151_49240.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x49151_49240.om$next$Ident$ident$arity$2 = ((function (x49151_49240){
return (function (this$,props){
var this$__$1 = this;
return untangled.ui.menu.ident(cljs.core.cst$kw$menu_SLASH_id.cljs$core$IFn$_invoke$arity$1(props));
});})(x49151_49240))
;


untangled.ui.menu.Menu.cljs$lang$type = true;

untangled.ui.menu.Menu.cljs$lang$ctorStr = "untangled.ui.menu/Menu";

untangled.ui.menu.Menu.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.menu/Menu");
});
var ui_menu_factory_49260 = om.next.factory.cljs$core$IFn$_invoke$arity$1(untangled.ui.menu.Menu);
/**
 * Render a Menu. You may use Om's computed facility to add an onSelect callback. The onSelect will be
 *  called with the id of the item selected. You may also just pass the callback as a named parameter for convenience.
 * 
 *  ...
 * 
 *  
 */
untangled.ui.menu.ui_menu = ((function (ui_menu_factory_49260){
return (function untangled$ui$menu$ui_menu(var_args){
var args__8730__auto__ = [];
var len__8723__auto___49261 = arguments.length;
var i__8724__auto___49262 = (0);
while(true){
if((i__8724__auto___49262 < len__8723__auto___49261)){
args__8730__auto__.push((arguments[i__8724__auto___49262]));

var G__49263 = (i__8724__auto___49262 + (1));
i__8724__auto___49262 = G__49263;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.menu.ui_menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});})(ui_menu_factory_49260))
;

untangled.ui.menu.ui_menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ui_menu_factory_49260){
return (function (props,p__49256){
var map__49257 = p__49256;
var map__49257__$1 = ((((!((map__49257 == null)))?((((map__49257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49257.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49257):map__49257);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49257__$1,cljs.core.cst$kw$style,cljs.core.cst$kw$normal);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49257__$1,cljs.core.cst$kw$color,cljs.core.cst$kw$primary);
var onSelect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49257__$1,cljs.core.cst$kw$onSelect);
var G__49259 = om.next.computed(props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onSelect,onSelect,cljs.core.cst$kw$style,style], null));
return (ui_menu_factory_49260.cljs$core$IFn$_invoke$arity$1 ? ui_menu_factory_49260.cljs$core$IFn$_invoke$arity$1(G__49259) : ui_menu_factory_49260.call(null,G__49259));
});})(ui_menu_factory_49260))
;

untangled.ui.menu.ui_menu.cljs$lang$maxFixedArity = (1);

untangled.ui.menu.ui_menu.cljs$lang$applyTo = ((function (ui_menu_factory_49260){
return (function (seq49254){
var G__49255 = cljs.core.first(seq49254);
var seq49254__$1 = cljs.core.next(seq49254);
return untangled.ui.menu.ui_menu.cljs$core$IFn$_invoke$arity$variadic(G__49255,seq49254__$1);
});})(ui_menu_factory_49260))
;


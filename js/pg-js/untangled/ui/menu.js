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
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$menu_SLASH_close_DASH_all,(function (env47541,_,params_ignored){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__47542 = env47541;
var map__47542__$1 = ((((!((map__47542 == null)))?((((map__47542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47542):map__47542);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47542__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__47542,map__47542__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,untangled.ui.menu.close_all_impl);
});})(map__47542,map__47542__$1,state))
], null);
})(),(function (){var env = env47541;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$menu_SLASH_set_DASH_open,(function (env47544,_,p__47545){
var map__47546 = p__47545;
var map__47546__$1 = ((((!((map__47546 == null)))?((((map__47546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47546):map__47546);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47546__$1,cljs.core.cst$kw$id);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47546__$1,cljs.core.cst$kw$open_QMARK_);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__47548 = env47544;
var map__47548__$1 = ((((!((map__47548 == null)))?((((map__47548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47548.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47548):map__47548);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47548__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__47548,map__47548__$1,state,map__47546,map__47546__$1,id,open_QMARK_){
return (function (){
return untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$4(state,untangled.ui.menu.ident(id),untangled.ui.menu.set_open_impl,open_QMARK_);
});})(map__47548,map__47548__$1,state,map__47546,map__47546__$1,id,open_QMARK_))
], null);
})(),(function (){var env = env47544;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$menu_SLASH_select,(function (env47550,_,p__47551){
var map__47552 = p__47551;
var map__47552__$1 = ((((!((map__47552 == null)))?((((map__47552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47552):map__47552);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47552__$1,cljs.core.cst$kw$id);
var item_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47552__$1,cljs.core.cst$kw$item_DASH_id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__47554 = env47550;
var map__47554__$1 = ((((!((map__47554 == null)))?((((map__47554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47554.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47554):map__47554);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47554__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__47554,map__47554__$1,state,map__47552,map__47552__$1,id,item_id){
return (function (){
return untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$4(state,untangled.ui.menu.ident(id),untangled.ui.menu.select_impl,item_id);
});})(map__47554,map__47554__$1,state,map__47552,map__47552__$1,id,item_id))
], null);
})(),(function (){var env = env47550;
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47556_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__47556_SHARP_,key),value);
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

var x47561_47582 = untangled.ui.menu.Menu.prototype;
x47561_47582.componentWillUpdate = ((function (x47561_47582){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___47583 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___47584 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___47583,next_ident__10196__auto___47584)){
var idxr__10197__auto___47585 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___47585 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___47585),((function (idxr__10197__auto___47585,ident__10195__auto___47583,next_ident__10196__auto___47584,this__10191__auto__,x47561_47582){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___47583], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___47584], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___47585,ident__10195__auto___47583,next_ident__10196__auto___47584,this__10191__auto__,x47561_47582))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x47561_47582))
;

x47561_47582.shouldComponentUpdate = ((function (x47561_47582){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__47563 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__47563);
} else {
return G__47563;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__47568 = this__10191__auto__.state;
var G__47569 = "omcljs$state";
return goog.object.get(G__47568,G__47569);
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
});})(x47561_47582))
;

x47561_47582.componentWillUnmount = ((function (x47561_47582){
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
});})(x47561_47582))
;

x47561_47582.componentDidUpdate = ((function (x47561_47582){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x47561_47582))
;

x47561_47582.isMounted = ((function (x47561_47582){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x47561_47582))
;

x47561_47582.componentWillMount = ((function (x47561_47582){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x47561_47582))
;

x47561_47582.render = ((function (x47561_47582){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_47570 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_47571 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_47572 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_47573 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_47574 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__47575 = om.next.props(this$);
var map__47575__$1 = ((((!((map__47575 == null)))?((((map__47575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47575):map__47575);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47575__$1,cljs.core.cst$kw$menu_SLASH_id);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47575__$1,cljs.core.cst$kw$menu_SLASH_label);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47575__$1,cljs.core.cst$kw$menu_SLASH_items);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47575__$1,cljs.core.cst$kw$menu_SLASH_open_QMARK_);
var selected_item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47575__$1,cljs.core.cst$kw$menu_SLASH_selected_DASH_item);
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
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("menu-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(id))].join(''), "className": "has-menu"}),cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(menu_style,cljs.core.cst$kw$icon))?om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-button c-button--icon", "type": "button", "title": tr(selected_label), "onClick": ((function (map__47575,map__47575__$1,id,label,items,open_QMARK_,selected_item,onSelect,menu_style,selected_id,selected_item__$1,selected_label,menu_class,_STAR_reconciler_STAR_47570,_STAR_depth_STAR_47571,_STAR_shared_STAR_47572,_STAR_instrument_STAR_47573,_STAR_parent_STAR_47574,this$,this__10190__auto__,x47561_47582){
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
});})(map__47575,map__47575__$1,id,label,items,open_QMARK_,selected_item,onSelect,menu_style,selected_id,selected_item__$1,selected_label,menu_class,_STAR_reconciler_STAR_47570,_STAR_depth_STAR_47571,_STAR_shared_STAR_47572,_STAR_instrument_STAR_47573,_STAR_parent_STAR_47574,this$,this__10190__auto__,x47561_47582))
}),cljs.core.array_seq([untangled.icons.icon(cljs.core.cst$kw$more_vert)], 0)):om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__47575,map__47575__$1,id,label,items,open_QMARK_,selected_item,onSelect,menu_style,selected_id,selected_item__$1,selected_label,menu_class,_STAR_reconciler_STAR_47570,_STAR_depth_STAR_47571,_STAR_shared_STAR_47572,_STAR_instrument_STAR_47573,_STAR_parent_STAR_47574,this$,this__10190__auto__,x47561_47582){
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
});})(map__47575,map__47575__$1,id,label,items,open_QMARK_,selected_item,onSelect,menu_style,selected_id,selected_item__$1,selected_label,menu_class,_STAR_reconciler_STAR_47570,_STAR_depth_STAR_47571,_STAR_shared_STAR_47572,_STAR_instrument_STAR_47573,_STAR_parent_STAR_47574,this$,this__10190__auto__,x47561_47582))
, "type": "button", "className": "c-button"}),cljs.core.array_seq([tr(selected_label)], 0))),om.dom.ul.cljs$core$IFn$_invoke$arity$variadic(({"tabIndex": "-1", "aria-hidden": "true", "className": menu_class}),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__47575,map__47575__$1,id,label,items,open_QMARK_,selected_item,onSelect,menu_style,selected_id,selected_item__$1,selected_label,menu_class,_STAR_reconciler_STAR_47570,_STAR_depth_STAR_47571,_STAR_shared_STAR_47572,_STAR_instrument_STAR_47573,_STAR_parent_STAR_47574,this$,this__10190__auto__,x47561_47582){
return (function (p__47577){
var map__47578 = p__47577;
var map__47578__$1 = ((((!((map__47578 == null)))?((((map__47578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47578):map__47578);
var item_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47578__$1,cljs.core.cst$kw$menu_DASH_item_SLASH_item_DASH_id);
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47578__$1,cljs.core.cst$kw$menu_DASH_item_SLASH_label);
return om.dom.li.cljs$core$IFn$_invoke$arity$variadic(({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("menu-item-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(item_id))].join(''), "onClick": ((function (map__47578,map__47578__$1,item_id,label__$1,map__47575,map__47575__$1,id,label,items,open_QMARK_,selected_item,onSelect,menu_style,selected_id,selected_item__$1,selected_label,menu_class,_STAR_reconciler_STAR_47570,_STAR_depth_STAR_47571,_STAR_shared_STAR_47572,_STAR_instrument_STAR_47573,_STAR_parent_STAR_47574,this$,this__10190__auto__,x47561_47582){
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
});})(map__47578,map__47578__$1,item_id,label__$1,map__47575,map__47575__$1,id,label,items,open_QMARK_,selected_item,onSelect,menu_style,selected_id,selected_item__$1,selected_label,menu_class,_STAR_reconciler_STAR_47570,_STAR_depth_STAR_47571,_STAR_shared_STAR_47572,_STAR_instrument_STAR_47573,_STAR_parent_STAR_47574,this$,this__10190__auto__,x47561_47582))
}),cljs.core.array_seq([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-menu__item"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item_id,selected_id))?" is-active":null))].join('')}),cljs.core.array_seq([label__$1], 0))], 0));
});})(map__47575,map__47575__$1,id,label,items,open_QMARK_,selected_item,onSelect,menu_style,selected_id,selected_item__$1,selected_label,menu_class,_STAR_reconciler_STAR_47570,_STAR_depth_STAR_47571,_STAR_shared_STAR_47572,_STAR_instrument_STAR_47573,_STAR_parent_STAR_47574,this$,this__10190__auto__,x47561_47582))
,items)], 0))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_47574;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_47573;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_47572;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_47571;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_47570;
}});})(x47561_47582))
;


untangled.ui.menu.Menu.prototype.constructor = untangled.ui.menu.Menu;

untangled.ui.menu.Menu.prototype.constructor.displayName = "untangled.ui.menu/Menu";

untangled.ui.menu.Menu.prototype.om$isComponent = true;

var x47580_47586 = untangled.ui.menu.Menu;
/** @nocollapse */
x47580_47586.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x47580_47586.om$next$IQuery$query$arity$1 = ((function (x47580_47586){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$menu_SLASH_id,cljs.core.cst$kw$menu_SLASH_open_QMARK_,cljs.core.cst$kw$menu_SLASH_label,cljs.core.cst$kw$menu_SLASH_items,cljs.core.cst$kw$menu_SLASH_selected_DASH_item], null);
});})(x47580_47586))
;

/** @nocollapse */
x47580_47586.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x47580_47586.om$next$Ident$ident$arity$2 = ((function (x47580_47586){
return (function (this$,props){
var this$__$1 = this;
return untangled.ui.menu.ident(cljs.core.cst$kw$menu_SLASH_id.cljs$core$IFn$_invoke$arity$1(props));
});})(x47580_47586))
;


var x47581_47587 = untangled.ui.menu.Menu.prototype;

x47581_47587.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x47581_47587.om$next$IQuery$query$arity$1 = ((function (x47581_47587){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$menu_SLASH_id,cljs.core.cst$kw$menu_SLASH_open_QMARK_,cljs.core.cst$kw$menu_SLASH_label,cljs.core.cst$kw$menu_SLASH_items,cljs.core.cst$kw$menu_SLASH_selected_DASH_item], null);
});})(x47581_47587))
;


x47581_47587.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x47581_47587.om$next$Ident$ident$arity$2 = ((function (x47581_47587){
return (function (this$,props){
var this$__$1 = this;
return untangled.ui.menu.ident(cljs.core.cst$kw$menu_SLASH_id.cljs$core$IFn$_invoke$arity$1(props));
});})(x47581_47587))
;


untangled.ui.menu.Menu.cljs$lang$type = true;

untangled.ui.menu.Menu.cljs$lang$ctorStr = "untangled.ui.menu/Menu";

untangled.ui.menu.Menu.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.menu/Menu");
});
var ui_menu_factory_47594 = om.next.factory.cljs$core$IFn$_invoke$arity$1(untangled.ui.menu.Menu);
/**
 * Render a Menu. You may use Om's computed facility to add an onSelect callback. The onSelect will be
 *  called with the id of the item selected. You may also just pass the callback as a named parameter for convenience.
 * 
 *  ...
 * 
 *  
 */
untangled.ui.menu.ui_menu = ((function (ui_menu_factory_47594){
return (function untangled$ui$menu$ui_menu(var_args){
var args__8730__auto__ = [];
var len__8723__auto___47595 = arguments.length;
var i__8724__auto___47596 = (0);
while(true){
if((i__8724__auto___47596 < len__8723__auto___47595)){
args__8730__auto__.push((arguments[i__8724__auto___47596]));

var G__47597 = (i__8724__auto___47596 + (1));
i__8724__auto___47596 = G__47597;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.menu.ui_menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});})(ui_menu_factory_47594))
;

untangled.ui.menu.ui_menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ui_menu_factory_47594){
return (function (props,p__47590){
var map__47591 = p__47590;
var map__47591__$1 = ((((!((map__47591 == null)))?((((map__47591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47591.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47591):map__47591);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47591__$1,cljs.core.cst$kw$style,cljs.core.cst$kw$normal);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47591__$1,cljs.core.cst$kw$color,cljs.core.cst$kw$primary);
var onSelect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47591__$1,cljs.core.cst$kw$onSelect);
var G__47593 = om.next.computed(props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onSelect,onSelect,cljs.core.cst$kw$style,style], null));
return (ui_menu_factory_47594.cljs$core$IFn$_invoke$arity$1 ? ui_menu_factory_47594.cljs$core$IFn$_invoke$arity$1(G__47593) : ui_menu_factory_47594.call(null,G__47593));
});})(ui_menu_factory_47594))
;

untangled.ui.menu.ui_menu.cljs$lang$maxFixedArity = (1);

untangled.ui.menu.ui_menu.cljs$lang$applyTo = ((function (ui_menu_factory_47594){
return (function (seq47588){
var G__47589 = cljs.core.first(seq47588);
var seq47588__$1 = cljs.core.next(seq47588);
return untangled.ui.menu.ui_menu.cljs$core$IFn$_invoke$arity$variadic(G__47589,seq47588__$1);
});})(ui_menu_factory_47594))
;


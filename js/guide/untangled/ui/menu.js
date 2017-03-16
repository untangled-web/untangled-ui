// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.ui.menu');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('untangled.i18n');
goog.require('untangled.ui.state');
goog.require('untangled.client.core');
goog.require('untangled.client.mutations');
goog.require('untangled.icons');
untangled.ui.menu.table_name = new cljs.core.Keyword("untangled.ui.menu","by-id","untangled.ui.menu/by-id",-213422162);
untangled.ui.menu.ident = (function untangled$ui$menu$ident(menu_id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.menu.table_name,menu_id], null);
});
/**
 * Set whether or not the menu with the given ID is open.
 */
untangled.ui.menu.set_open_impl = (function untangled$ui$menu$set_open_impl(menu,open_QMARK_){
return cljs.core.assoc.call(null,menu,new cljs.core.Keyword("menu","open?","menu/open?",1241918364),open_QMARK_);
});
/**
 * Close all menus, application wide
 */
untangled.ui.menu.close_all_impl = (function untangled$ui$menu$close_all_impl(app_state_map){
return cljs.core.reduce.call(null,(function (m,menu_id){
return untangled.ui.state.evolve.call(null,m,untangled.ui.menu.ident.call(null,menu_id),untangled.ui.menu.set_open_impl,false);
}),app_state_map,cljs.core.keys.call(null,cljs.core.get.call(null,app_state_map,untangled.ui.menu.table_name)));
});
/**
 * Select an item in the menu
 */
untangled.ui.menu.select_impl = (function untangled$ui$menu$select_impl(menu,item_id){
return cljs.core.assoc.call(null,menu,new cljs.core.Keyword("menu","selected-item","menu/selected-item",-1625329223),item_id);
});
/**
 * Returns true if the menu is currently open.
 */
untangled.ui.menu.is_open_QMARK_ = (function untangled$ui$menu$is_open_QMARK_(menu){
return new cljs.core.Keyword("menu","open?","menu/open?",1241918364).cljs$core$IFn$_invoke$arity$1(menu);
});
/**
 * Returns the ID of the currently selected item, or nil. Useful if you choose not to pay attention to the callback
 *   and instead have some other parent UI event (like submit) that needs to gather up the menu selection.
 */
untangled.ui.menu.current_selection = (function untangled$ui$menu$current_selection(menu){
return new cljs.core.Keyword("menu","selected-item","menu/selected-item",-1625329223).cljs$core$IFn$_invoke$arity$1(menu);
});
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.ui.menu","close-all","untangled.ui.menu/close-all",1401201749,null),(function (env703932,_,params_ignored){
return cljs.core.merge.call(null,(function (){var map__703933 = env703932;
var map__703933__$1 = ((((!((map__703933 == null)))?((((map__703933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__703933.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__703933):map__703933);
var state = cljs.core.get.call(null,map__703933__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__703933,map__703933__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,untangled.ui.menu.close_all_impl);
});})(map__703933,map__703933__$1,state))
], null);
})(),(function (){var env = env703932;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})());
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.ui.menu","set-open","untangled.ui.menu/set-open",-510619223,null),(function (env703937,_,p__703938){
var map__703939 = p__703938;
var map__703939__$1 = ((((!((map__703939 == null)))?((((map__703939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__703939.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__703939):map__703939);
var id = cljs.core.get.call(null,map__703939__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var open_QMARK_ = cljs.core.get.call(null,map__703939__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
return cljs.core.merge.call(null,(function (){var map__703941 = env703937;
var map__703941__$1 = ((((!((map__703941 == null)))?((((map__703941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__703941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__703941):map__703941);
var state = cljs.core.get.call(null,map__703941__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__703941,map__703941__$1,state,map__703939,map__703939__$1,id,open_QMARK_){
return (function (){
return untangled.ui.state.evolve_BANG_.call(null,state,untangled.ui.menu.ident.call(null,id),untangled.ui.menu.set_open_impl,open_QMARK_);
});})(map__703941,map__703941__$1,state,map__703939,map__703939__$1,id,open_QMARK_))
], null);
})(),(function (){var env = env703937;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})());
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.ui.menu","select","untangled.ui.menu/select",-213847587,null),(function (env703949,_,p__703950){
var map__703951 = p__703950;
var map__703951__$1 = ((((!((map__703951 == null)))?((((map__703951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__703951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__703951):map__703951);
var id = cljs.core.get.call(null,map__703951__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var item_id = cljs.core.get.call(null,map__703951__$1,new cljs.core.Keyword(null,"item-id","item-id",-1804511607));
return cljs.core.merge.call(null,(function (){var map__703953 = env703949;
var map__703953__$1 = ((((!((map__703953 == null)))?((((map__703953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__703953.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__703953):map__703953);
var state = cljs.core.get.call(null,map__703953__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__703953,map__703953__$1,state,map__703951,map__703951__$1,id,item_id){
return (function (){
return untangled.ui.state.evolve_BANG_.call(null,state,untangled.ui.menu.ident.call(null,id),untangled.ui.menu.select_impl,item_id);
});})(map__703953,map__703953__$1,state,map__703951,map__703951__$1,id,item_id))
], null);
})(),(function (){var env = env703949;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})());
}));
/**
 * Build a state tree for a menu to use in initial app state. The id of the menu should be globally unique.
 */
untangled.ui.menu.menu = (function untangled$ui$menu$menu(id,label,items){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("menu","id","menu/id",-1385446155),id,new cljs.core.Keyword("menu","label","menu/label",1746783635),label,new cljs.core.Keyword("menu","items","menu/items",1035374303),items,new cljs.core.Keyword("menu","open?","menu/open?",1241918364),false], null);
});
/**
 * Build the state map that can be used in a menu as an item. The `id` need only be unique within the menu.
 */
untangled.ui.menu.menu_item = (function untangled$ui$menu$menu_item(id,label){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("menu-item","item-id","menu-item/item-id",792149322),id,new cljs.core.Keyword("menu-item","label","menu-item/label",170316529),label], null);
});
untangled.ui.menu.find_first = (function untangled$ui$menu$find_first(key,value,list){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__703963_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,p1__703963_SHARP_,key),value);
}),list));
});
/**
 * @constructor
 */
untangled.ui.menu.Menu = (function untangled$ui$menu$Menu(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.menu.Menu.prototype = goog.object.clone(React.Component.prototype);

var x703972_704018 = untangled.ui.menu.Menu.prototype;
x703972_704018.componentWillUpdate = ((function (x703972_704018){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___704021 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___704022 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___704021,next_ident__29856__auto___704022)){
var idxr__29857__auto___704025 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___704025 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___704025),((function (idxr__29857__auto___704025,ident__29855__auto___704021,next_ident__29856__auto___704022,this__29851__auto__,x703972_704018){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___704021], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___704022], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___704025,ident__29855__auto___704021,next_ident__29856__auto___704022,this__29851__auto__,x703972_704018))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x703972_704018))
;

x703972_704018.shouldComponentUpdate = ((function (x703972_704018){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__703977 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__703977);
} else {
return G__703977;
}
})();
var or__27650__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__29851__auto__),next_props__29852__auto____$2);
if(or__27650__auto__){
return or__27650__auto__;
} else {
var or__27650__auto____$1 = (function (){var and__27638__auto__ = this__29851__auto__.state;
if(cljs.core.truth_(and__27638__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__29851__auto__.state,"omcljs$state"),goog.object.get(next_state__29853__auto__,"omcljs$state"));
} else {
return and__27638__auto__;
}
})();
if(cljs.core.truth_(or__27650__auto____$1)){
return or__27650__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__29851__auto__.props.children,next_children__29854__auto__);
}
}
});})(x703972_704018))
;

x703972_704018.componentWillUnmount = ((function (x703972_704018){
return (function (){
var this__29851__auto__ = this;
var r__29862__auto__ = om.next.get_reconciler.call(null,this__29851__auto__);
var cfg__29863__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__29862__auto__);
var st__29864__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__29863__auto__);
var indexer__29861__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__29863__auto__);
if(cljs.core.truth_((function (){var and__27638__auto__ = !((st__29864__auto__ == null));
if(and__27638__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__29864__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__29851__auto__], null));
} else {
return and__27638__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__29864__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__29851__auto__);
} else {
}

if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x703972_704018))
;

x703972_704018.componentDidUpdate = ((function (x703972_704018){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x703972_704018))
;

x703972_704018.isMounted = ((function (x703972_704018){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x703972_704018))
;

x703972_704018.componentWillMount = ((function (x703972_704018){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x703972_704018))
;

x703972_704018.render = ((function (x703972_704018){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_703984 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_703985 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_703986 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_703987 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_703988 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var map__703993 = om.next.props.call(null,this$);
var map__703993__$1 = ((((!((map__703993 == null)))?((((map__703993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__703993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__703993):map__703993);
var id = cljs.core.get.call(null,map__703993__$1,new cljs.core.Keyword("menu","id","menu/id",-1385446155));
var label = cljs.core.get.call(null,map__703993__$1,new cljs.core.Keyword("menu","label","menu/label",1746783635));
var items = cljs.core.get.call(null,map__703993__$1,new cljs.core.Keyword("menu","items","menu/items",1035374303));
var open_QMARK_ = cljs.core.get.call(null,map__703993__$1,new cljs.core.Keyword("menu","open?","menu/open?",1241918364));
var selected_item = cljs.core.get.call(null,map__703993__$1,new cljs.core.Keyword("menu","selected-item","menu/selected-item",-1625329223));
var onSelect = (function (){var or__27650__auto__ = om.next.get_computed.call(null,this$,new cljs.core.Keyword(null,"onSelect","onSelect",251862405));
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return cljs.core.identity;
}
})();
var menu_style = om.next.get_computed.call(null,this$,new cljs.core.Keyword(null,"style","style",-496642736));
var selected_id = selected_item;
var selected_item__$1 = untangled.ui.menu.find_first.call(null,new cljs.core.Keyword("menu-item","item-id","menu-item/item-id",792149322),selected_id,items);
var selected_label = cljs.core.get.call(null,selected_item__$1,new cljs.core.Keyword("menu-item","label","menu-item/label",170316529),tr(label));
var menu_class = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-menu"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(open_QMARK_)?" is-active":""))].join('');
return om.dom.div.call(null,({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("menu-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,id))].join(''), "className": "has-menu"}),((cljs.core._EQ_.call(null,menu_style,new cljs.core.Keyword(null,"icon","icon",1679606541)))?om.dom.button.call(null,({"className": "c-button c-button--icon", "type": "button", "title": tr(selected_label), "onClick": ((function (map__703993,map__703993__$1,id,label,items,open_QMARK_,selected_item,onSelect,menu_style,selected_id,selected_item__$1,selected_label,menu_class,_STAR_reconciler_STAR_703984,_STAR_depth_STAR_703985,_STAR_shared_STAR_703986,_STAR_instrument_STAR_703987,_STAR_parent_STAR_703988,this$,this__29850__auto__,x703972_704018){
return (function (evt){
evt.stopPropagation();

om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.menu","close-all","untangled.ui.menu/close-all",1401201749,null)),(function (){var x__28584__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.menu","set-open","untangled.ui.menu/set-open",-510619223,null)),(function (){var x__28584__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"open?","open?",1238443125),cljs.core.not.call(null,open_QMARK_)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("menu","open?","menu/open?",1241918364)))))));

return false;
});})(map__703993,map__703993__$1,id,label,items,open_QMARK_,selected_item,onSelect,menu_style,selected_id,selected_item__$1,selected_label,menu_class,_STAR_reconciler_STAR_703984,_STAR_depth_STAR_703985,_STAR_shared_STAR_703986,_STAR_instrument_STAR_703987,_STAR_parent_STAR_703988,this$,this__29850__auto__,x703972_704018))
}),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"more_vert","more_vert",-1362542752))):om.dom.button.call(null,({"onClick": ((function (map__703993,map__703993__$1,id,label,items,open_QMARK_,selected_item,onSelect,menu_style,selected_id,selected_item__$1,selected_label,menu_class,_STAR_reconciler_STAR_703984,_STAR_depth_STAR_703985,_STAR_shared_STAR_703986,_STAR_instrument_STAR_703987,_STAR_parent_STAR_703988,this$,this__29850__auto__,x703972_704018){
return (function (evt){
evt.stopPropagation();

om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.menu","close-all","untangled.ui.menu/close-all",1401201749,null)),(function (){var x__28584__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.menu","set-open","untangled.ui.menu/set-open",-510619223,null)),(function (){var x__28584__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"open?","open?",1238443125),cljs.core.not.call(null,open_QMARK_)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("menu","open?","menu/open?",1241918364)))))));

return false;
});})(map__703993,map__703993__$1,id,label,items,open_QMARK_,selected_item,onSelect,menu_style,selected_id,selected_item__$1,selected_label,menu_class,_STAR_reconciler_STAR_703984,_STAR_depth_STAR_703985,_STAR_shared_STAR_703986,_STAR_instrument_STAR_703987,_STAR_parent_STAR_703988,this$,this__29850__auto__,x703972_704018))
, "type": "button", "className": "c-button"}),tr(selected_label))),om.dom.ul.call(null,({"tabIndex": "-1", "aria-hidden": "true", "className": menu_class}),cljs.core.map.call(null,((function (map__703993,map__703993__$1,id,label,items,open_QMARK_,selected_item,onSelect,menu_style,selected_id,selected_item__$1,selected_label,menu_class,_STAR_reconciler_STAR_703984,_STAR_depth_STAR_703985,_STAR_shared_STAR_703986,_STAR_instrument_STAR_703987,_STAR_parent_STAR_703988,this$,this__29850__auto__,x703972_704018){
return (function (p__704007){
var map__704008 = p__704007;
var map__704008__$1 = ((((!((map__704008 == null)))?((((map__704008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704008.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704008):map__704008);
var item_id = cljs.core.get.call(null,map__704008__$1,new cljs.core.Keyword("menu-item","item-id","menu-item/item-id",792149322));
var label__$1 = cljs.core.get.call(null,map__704008__$1,new cljs.core.Keyword("menu-item","label","menu-item/label",170316529));
return om.dom.li.call(null,({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("menu-item-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,item_id))].join(''), "onClick": ((function (map__704008,map__704008__$1,item_id,label__$1,map__703993,map__703993__$1,id,label,items,open_QMARK_,selected_item,onSelect,menu_style,selected_id,selected_item__$1,selected_label,menu_class,_STAR_reconciler_STAR_703984,_STAR_depth_STAR_703985,_STAR_shared_STAR_703986,_STAR_instrument_STAR_703987,_STAR_parent_STAR_703988,this$,this__29850__auto__,x703972_704018){
return (function (evt){
evt.stopPropagation();

om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.menu","close-all","untangled.ui.menu/close-all",1401201749,null)),(function (){var x__28584__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.menu","select","untangled.ui.menu/select",-213847587,null)),(function (){var x__28584__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),item_id], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("menu","open?","menu/open?",1241918364)))))));

if(cljs.core.truth_(onSelect)){
onSelect.call(null,item_id);
} else {
}

return false;
});})(map__704008,map__704008__$1,item_id,label__$1,map__703993,map__703993__$1,id,label,items,open_QMARK_,selected_item,onSelect,menu_style,selected_id,selected_item__$1,selected_label,menu_class,_STAR_reconciler_STAR_703984,_STAR_depth_STAR_703985,_STAR_shared_STAR_703986,_STAR_instrument_STAR_703987,_STAR_parent_STAR_703988,this$,this__29850__auto__,x703972_704018))
}),om.dom.button.call(null,({"type": "button", "className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-menu__item"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,item_id,selected_id))?" is-active":null))].join('')}),label__$1));
});})(map__703993,map__703993__$1,id,label,items,open_QMARK_,selected_item,onSelect,menu_style,selected_id,selected_item__$1,selected_label,menu_class,_STAR_reconciler_STAR_703984,_STAR_depth_STAR_703985,_STAR_shared_STAR_703986,_STAR_instrument_STAR_703987,_STAR_parent_STAR_703988,this$,this__29850__auto__,x703972_704018))
,items)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_703988;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_703987;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_703986;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_703985;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_703984;
}});})(x703972_704018))
;


untangled.ui.menu.Menu.prototype.constructor = untangled.ui.menu.Menu;

untangled.ui.menu.Menu.prototype.constructor.displayName = "untangled.ui.menu/Menu";

untangled.ui.menu.Menu.prototype.om$isComponent = true;

var x704015_704156 = untangled.ui.menu.Menu;
/** @nocollapse */
x704015_704156.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x704015_704156.om$next$IQuery$query$arity$1 = ((function (x704015_704156){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("menu","id","menu/id",-1385446155),new cljs.core.Keyword("menu","open?","menu/open?",1241918364),new cljs.core.Keyword("menu","label","menu/label",1746783635),new cljs.core.Keyword("menu","items","menu/items",1035374303),new cljs.core.Keyword("menu","selected-item","menu/selected-item",-1625329223)], null);
});})(x704015_704156))
;

/** @nocollapse */
x704015_704156.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x704015_704156.om$next$Ident$ident$arity$2 = ((function (x704015_704156){
return (function (this$,props){
var this$__$1 = this;
return untangled.ui.menu.ident.call(null,new cljs.core.Keyword("menu","id","menu/id",-1385446155).cljs$core$IFn$_invoke$arity$1(props));
});})(x704015_704156))
;


var x704016_704164 = untangled.ui.menu.Menu.prototype;

x704016_704164.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x704016_704164.om$next$IQuery$query$arity$1 = ((function (x704016_704164){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("menu","id","menu/id",-1385446155),new cljs.core.Keyword("menu","open?","menu/open?",1241918364),new cljs.core.Keyword("menu","label","menu/label",1746783635),new cljs.core.Keyword("menu","items","menu/items",1035374303),new cljs.core.Keyword("menu","selected-item","menu/selected-item",-1625329223)], null);
});})(x704016_704164))
;


x704016_704164.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x704016_704164.om$next$Ident$ident$arity$2 = ((function (x704016_704164){
return (function (this$,props){
var this$__$1 = this;
return untangled.ui.menu.ident.call(null,new cljs.core.Keyword("menu","id","menu/id",-1385446155).cljs$core$IFn$_invoke$arity$1(props));
});})(x704016_704164))
;


untangled.ui.menu.Menu.cljs$lang$type = true;

untangled.ui.menu.Menu.cljs$lang$ctorStr = "untangled.ui.menu/Menu";

untangled.ui.menu.Menu.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.menu/Menu");
});
var ui_menu_factory_704187 = om.next.factory.call(null,untangled.ui.menu.Menu);
/**
 * Render a Menu. You may use Om's computed facility to add an onSelect callback. The onSelect will be
 *  called with the id of the item selected. You may also just pass the callback as a named parameter for convenience.
 * 
 *  ...
 * 
 *  
 */
untangled.ui.menu.ui_menu = ((function (ui_menu_factory_704187){
return (function untangled$ui$menu$ui_menu(var_args){
var args__28878__auto__ = [];
var len__28871__auto___704189 = arguments.length;
var i__28872__auto___704191 = (0);
while(true){
if((i__28872__auto___704191 < len__28871__auto___704189)){
args__28878__auto__.push((arguments[i__28872__auto___704191]));

var G__704194 = (i__28872__auto___704191 + (1));
i__28872__auto___704191 = G__704194;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return untangled.ui.menu.ui_menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});})(ui_menu_factory_704187))
;

untangled.ui.menu.ui_menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ui_menu_factory_704187){
return (function (props,p__704182){
var map__704183 = p__704182;
var map__704183__$1 = ((((!((map__704183 == null)))?((((map__704183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704183.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704183):map__704183);
var style = cljs.core.get.call(null,map__704183__$1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"normal","normal",-1519123858));
var color = cljs.core.get.call(null,map__704183__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892));
var onSelect = cljs.core.get.call(null,map__704183__$1,new cljs.core.Keyword(null,"onSelect","onSelect",251862405));
return ui_menu_factory_704187.call(null,om.next.computed.call(null,props,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onSelect","onSelect",251862405),onSelect,new cljs.core.Keyword(null,"style","style",-496642736),style], null)));
});})(ui_menu_factory_704187))
;

untangled.ui.menu.ui_menu.cljs$lang$maxFixedArity = (1);

untangled.ui.menu.ui_menu.cljs$lang$applyTo = ((function (ui_menu_factory_704187){
return (function (seq704175){
var G__704176 = cljs.core.first.call(null,seq704175);
var seq704175__$1 = cljs.core.next.call(null,seq704175);
return untangled.ui.menu.ui_menu.cljs$core$IFn$_invoke$arity$variadic(G__704176,seq704175__$1);
});})(ui_menu_factory_704187))
;


//# sourceMappingURL=menu.js.map?rel=1489703352820
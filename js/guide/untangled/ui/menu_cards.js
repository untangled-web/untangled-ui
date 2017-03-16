// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.ui.menu_cards');
goog.require('cljs.core');
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
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.menu_cards.MenuRoot.prototype = goog.object.clone(React.Component.prototype);
}

var x705736_705782 = untangled.ui.menu_cards.MenuRoot.prototype;
x705736_705782.componentWillUpdate = ((function (x705736_705782){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___705785 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___705786 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___705785,next_ident__29856__auto___705786)){
var idxr__29857__auto___705788 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___705788 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___705788),((function (idxr__29857__auto___705788,ident__29855__auto___705785,next_ident__29856__auto___705786,this__29851__auto__,x705736_705782){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___705785], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___705786], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___705788,ident__29855__auto___705785,next_ident__29856__auto___705786,this__29851__auto__,x705736_705782))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x705736_705782))
;

x705736_705782.shouldComponentUpdate = ((function (x705736_705782){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__705741 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__705741);
} else {
return G__705741;
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
});})(x705736_705782))
;

x705736_705782.componentWillUnmount = ((function (x705736_705782){
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
});})(x705736_705782))
;

x705736_705782.componentDidUpdate = ((function (x705736_705782){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x705736_705782))
;

x705736_705782.isMounted = ((function (x705736_705782){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x705736_705782))
;

x705736_705782.componentWillMount = ((function (x705736_705782){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x705736_705782))
;

x705736_705782.render = ((function (x705736_705782){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_705748 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_705749 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_705750 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_705751 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_705752 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var map__705753 = om.next.props.call(null,this$);
var map__705753__$1 = ((((!((map__705753 == null)))?((((map__705753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705753):map__705753);
var react_key = cljs.core.get.call(null,map__705753__$1,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664));
var menu_1 = cljs.core.get.call(null,map__705753__$1,new cljs.core.Keyword(null,"menu-1","menu-1",-409973846));
var menu_2 = cljs.core.get.call(null,map__705753__$1,new cljs.core.Keyword(null,"menu-2","menu-2",-758429341));
var mood = untangled.ui.menu.current_selection.call(null,menu_1);
return om.dom.div.call(null,({"key": react_key, "onClick": ((function (map__705753,map__705753__$1,react_key,menu_1,menu_2,mood,_STAR_reconciler_STAR_705748,_STAR_depth_STAR_705749,_STAR_shared_STAR_705750,_STAR_instrument_STAR_705751,_STAR_parent_STAR_705752,this$,this__29850__auto__,x705736_705782){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.menu","close-all","untangled.ui.menu/close-all",1401201749,null)),(function (){var x__28584__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())))));
});})(map__705753,map__705753__$1,react_key,menu_1,menu_2,mood,_STAR_reconciler_STAR_705748,_STAR_depth_STAR_705749,_STAR_shared_STAR_705750,_STAR_instrument_STAR_705751,_STAR_parent_STAR_705752,this$,this__29850__auto__,x705736_705782))
}),untangled.ui.menu.ui_menu.call(null,menu_1,new cljs.core.Keyword(null,"onSelect","onSelect",251862405),((function (map__705753,map__705753__$1,react_key,menu_1,menu_2,mood,_STAR_reconciler_STAR_705748,_STAR_depth_STAR_705749,_STAR_shared_STAR_705750,_STAR_instrument_STAR_705751,_STAR_parent_STAR_705752,this$,this__29850__auto__,x705736_705782){
return (function (id){
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Selected "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
});})(map__705753,map__705753__$1,react_key,menu_1,menu_2,mood,_STAR_reconciler_STAR_705748,_STAR_depth_STAR_705749,_STAR_shared_STAR_705750,_STAR_instrument_STAR_705751,_STAR_parent_STAR_705752,this$,this__29850__auto__,x705736_705782))
),((cljs.core._EQ_.call(null,mood,new cljs.core.Keyword(null,"indifferent","indifferent",-214716471)))?untangled.ui.menu.ui_menu.call(null,menu_2):null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_705752;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_705751;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_705750;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_705749;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_705748;
}});})(x705736_705782))
;


untangled.ui.menu_cards.MenuRoot.prototype.constructor = untangled.ui.menu_cards.MenuRoot;

untangled.ui.menu_cards.MenuRoot.prototype.constructor.displayName = "untangled.ui.menu-cards/MenuRoot";

untangled.ui.menu_cards.MenuRoot.prototype.om$isComponent = true;

var x705767_705825 = untangled.ui.menu_cards.MenuRoot;
/** @nocollapse */
x705767_705825.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x705767_705825.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x705767_705825){
return (function (cls,params){
var cls__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"menu-1","menu-1",-409973846),untangled.ui.menu.menu.call(null,new cljs.core.Keyword(null,"mood-filter","mood-filter",-155995045),"Mood Filter",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.menu.menu_item.call(null,new cljs.core.Keyword(null,"happy","happy",2026698856),"Happy"),untangled.ui.menu.menu_item.call(null,new cljs.core.Keyword(null,"indifferent","indifferent",-214716471),"Indifferent"),untangled.ui.menu.menu_item.call(null,new cljs.core.Keyword(null,"sad","sad",427137188),"Sad")], null)),new cljs.core.Keyword(null,"menu-2","menu-2",-758429341),untangled.ui.menu.menu.call(null,new cljs.core.Keyword(null,"age-filter","age-filter",-1721826980),"Age Filter",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.menu.menu_item.call(null,new cljs.core.Keyword(null,"young","young",-2075869410),"0-10"),untangled.ui.menu.menu_item.call(null,new cljs.core.Keyword(null,"older","older",-1819898598),"11-20"),untangled.ui.menu.menu_item.call(null,new cljs.core.Keyword(null,"old","old",-1825222690),"20+")], null))], null);
});})(x705767_705825))
;

/** @nocollapse */
x705767_705825.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x705767_705825.om$next$IQuery$query$arity$1 = ((function (x705767_705825){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-1","menu-1",-409973846),om.next.get_query.call(null,untangled.ui.menu.Menu)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-2","menu-2",-758429341),om.next.get_query.call(null,untangled.ui.menu.Menu)], null)], null);
});})(x705767_705825))
;


var x705769_705826 = untangled.ui.menu_cards.MenuRoot.prototype;

x705769_705826.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x705769_705826.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x705769_705826){
return (function (cls,params){
var cls__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"menu-1","menu-1",-409973846),untangled.ui.menu.menu.call(null,new cljs.core.Keyword(null,"mood-filter","mood-filter",-155995045),"Mood Filter",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.menu.menu_item.call(null,new cljs.core.Keyword(null,"happy","happy",2026698856),"Happy"),untangled.ui.menu.menu_item.call(null,new cljs.core.Keyword(null,"indifferent","indifferent",-214716471),"Indifferent"),untangled.ui.menu.menu_item.call(null,new cljs.core.Keyword(null,"sad","sad",427137188),"Sad")], null)),new cljs.core.Keyword(null,"menu-2","menu-2",-758429341),untangled.ui.menu.menu.call(null,new cljs.core.Keyword(null,"age-filter","age-filter",-1721826980),"Age Filter",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.menu.menu_item.call(null,new cljs.core.Keyword(null,"young","young",-2075869410),"0-10"),untangled.ui.menu.menu_item.call(null,new cljs.core.Keyword(null,"older","older",-1819898598),"11-20"),untangled.ui.menu.menu_item.call(null,new cljs.core.Keyword(null,"old","old",-1825222690),"20+")], null))], null);
});})(x705769_705826))
;


x705769_705826.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x705769_705826.om$next$IQuery$query$arity$1 = ((function (x705769_705826){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-1","menu-1",-409973846),om.next.get_query.call(null,untangled.ui.menu.Menu)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-2","menu-2",-758429341),om.next.get_query.call(null,untangled.ui.menu.Menu)], null)], null);
});})(x705769_705826))
;


untangled.ui.menu_cards.MenuRoot.cljs$lang$type = true;

untangled.ui.menu_cards.MenuRoot.cljs$lang$ctorStr = "untangled.ui.menu-cards/MenuRoot";

untangled.ui.menu_cards.MenuRoot.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.menu-cards/MenuRoot");
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.menu_cards","untangled.ui.menu_cards",160924759),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"# Menu\n\n  The active menu component allows you to create and use a menu component that is tracked in app state.\n\n  The following Om mutations may be used from anywhere in your application as long as you know the menu's ID:\n\n  - close-all : Close all open menus. Useful from the Root of your app to ensure that clicking outside of a menu\n  will cause all menus to close\n  - set-open : Opens/closes a menu by ID\n  - select : Causes a particular item within the menu to be selected (does not trigger events)\n  - style : Changes the visual style of a menu between :normal button and :icon for a simpler trigger.\n\n\n  Components can look up the state of a menu at the menu ident, which can be found using the `menus/ident`.\n\n  All mutations are implemented using `-impl` functions in menu, which allows you to compose menu operations\n  within your own mutations without having to know how menus are implemented.\n\n  - current-selection\n\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui ^:once MenuRoot\n  static uc/InitialAppState\n  (initial-state [cls params] {:menu-1 (menu/menu :mood-filter \"Mood Filter\"\n                                         [(menu/menu-item :happy \"Happy\")\n                                          (menu/menu-item :indifferent \"Indifferent\")\n                                          (menu/menu-item :sad \"Sad\")])\n                               :menu-2 (menu/menu :age-filter \"Age Filter\"\n                                         [(menu/menu-item :young \"0-10\")\n                                          (menu/menu-item :older \"11-20\")\n                                          (menu/menu-item :old \"20+\")])})\n  static om/IQuery\n  (query [this] [:ui/react-key\n                 {:menu-1 (om/get-query menu/Menu)}\n                 {:menu-2 (om/get-query menu/Menu)}])\n  Object\n  (render [this]\n    (let [{:keys [ui/react-key menu-1 menu-2]} (om/props this)\n          mood (menu/current-selection menu-1)]\n      (dom/div #js {:key react-key :onClick #(om/transact! this `[(menu/close-all {})])}\n        (menu/ui-menu menu-1\n          :onSelect (fn [id] (js/console.log (str \"Selected \" id))))\n        (when (= mood :indifferent)\n          (menu/ui-menu menu-2))))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.menu_cards","untangled.ui.menu_cards",160924759),new cljs.core.Keyword(null,"dropdown-active-playground","dropdown-active-playground",-574643813)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"dropdown-active-playground",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Menus\n\n  Note: Choosing 'Indifferent' in the filter will cause a dependent menu to appear.\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,(function (state_atom__37612__auto__,node__37613__auto__){
untangled.client.core.mount.call(null,untangled.client.core.new_untangled_client.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),state_atom__37612__auto__),untangled.ui.menu_cards.MenuRoot,node__37613__auto__);

return setTimeout((function (){
return cljs.core.swap_BANG_.call(null,state_atom__37612__auto__,cljs.core.assoc,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));
}),(1000));
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));

//# sourceMappingURL=menu_cards.js.map?rel=1489703354208
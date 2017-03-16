// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.ui.dialog_cards');
goog.require('cljs.core');
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
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.dialog_cards.CDRoot.prototype = goog.object.clone(React.Component.prototype);

var x705765_705789 = untangled.ui.dialog_cards.CDRoot.prototype;
x705765_705789.componentWillUpdate = ((function (x705765_705789){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___705790 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___705791 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___705790,next_ident__29856__auto___705791)){
var idxr__29857__auto___705797 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___705797 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___705797),((function (idxr__29857__auto___705797,ident__29855__auto___705790,next_ident__29856__auto___705791,this__29851__auto__,x705765_705789){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___705790], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___705791], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___705797,ident__29855__auto___705790,next_ident__29856__auto___705791,this__29851__auto__,x705765_705789))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x705765_705789))
;

x705765_705789.shouldComponentUpdate = ((function (x705765_705789){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__705768 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__705768);
} else {
return G__705768;
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
});})(x705765_705789))
;

x705765_705789.componentWillUnmount = ((function (x705765_705789){
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
});})(x705765_705789))
;

x705765_705789.componentDidUpdate = ((function (x705765_705789){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x705765_705789))
;

x705765_705789.isMounted = ((function (x705765_705789){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x705765_705789))
;

x705765_705789.componentWillMount = ((function (x705765_705789){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x705765_705789))
;

x705765_705789.render = ((function (x705765_705789){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_705775 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_705776 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_705777 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_705778 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_705779 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var map__705780 = om.next.props.call(null,this$);
var map__705780__$1 = ((((!((map__705780 == null)))?((((map__705780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705780):map__705780);
var dialog = cljs.core.get.call(null,map__705780__$1,new cljs.core.Keyword(null,"dialog","dialog",1415150135));
return om.dom.div.call(null,null,untangled.ui.dialogs.ui_confirmation_dialog.call(null,dialog));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_705779;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_705778;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_705777;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_705776;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_705775;
}});})(x705765_705789))
;


untangled.ui.dialog_cards.CDRoot.prototype.constructor = untangled.ui.dialog_cards.CDRoot;

untangled.ui.dialog_cards.CDRoot.prototype.constructor.displayName = "untangled.ui.dialog-cards/CDRoot";

untangled.ui.dialog_cards.CDRoot.prototype.om$isComponent = true;

var x705784_705823 = untangled.ui.dialog_cards.CDRoot;
/** @nocollapse */
x705784_705823.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x705784_705823.om$next$IQuery$query$arity$1 = ((function (x705784_705823){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),om.next.get_query.call(null,untangled.ui.dialogs.ConfirmationDialog)], null)], null);
});})(x705784_705823))
;

/** @nocollapse */
x705784_705823.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x705784_705823.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x705784_705823){
return (function (c,p){
var c__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),untangled.ui.dialogs.make_confirmation_dialog.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),true,"Continue?",new cljs.core.Keyword(null,"title","title",636505583),"Really?",new cljs.core.Keyword(null,"yes-label","yes-label",179740702),"OK",new cljs.core.Keyword(null,"no-label","no-label",-928333903),"Cancel")], null);
});})(x705784_705823))
;


var x705787_705824 = untangled.ui.dialog_cards.CDRoot.prototype;

x705787_705824.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x705787_705824.om$next$IQuery$query$arity$1 = ((function (x705787_705824){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),om.next.get_query.call(null,untangled.ui.dialogs.ConfirmationDialog)], null)], null);
});})(x705787_705824))
;


x705787_705824.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x705787_705824.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x705787_705824){
return (function (c,p){
var c__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),untangled.ui.dialogs.make_confirmation_dialog.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),true,"Continue?",new cljs.core.Keyword(null,"title","title",636505583),"Really?",new cljs.core.Keyword(null,"yes-label","yes-label",179740702),"OK",new cljs.core.Keyword(null,"no-label","no-label",-928333903),"Cancel")], null);
});})(x705787_705824))
;


untangled.ui.dialog_cards.CDRoot.cljs$lang$type = true;

untangled.ui.dialog_cards.CDRoot.cljs$lang$ctorStr = "untangled.ui.dialog-cards/CDRoot";

untangled.ui.dialog_cards.CDRoot.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.dialog-cards/CDRoot");
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.dialog_cards","untangled.ui.dialog_cards",1352384118),new cljs.core.Keyword(null,"ConfirmationDialog-one","ConfirmationDialog-one",-2131455613)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"ConfirmationDialog-one",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,(function (state_atom__37612__auto__,node__37613__auto__){
untangled.client.core.mount.call(null,untangled.client.core.new_untangled_client.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),state_atom__37612__auto__),untangled.ui.dialog_cards.CDRoot,node__37613__auto__);

return setTimeout((function (){
return cljs.core.swap_BANG_.call(null,state_atom__37612__auto__,cljs.core.assoc,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));
}),(1000));
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));

//# sourceMappingURL=dialog_cards.js.map?rel=1489703354179
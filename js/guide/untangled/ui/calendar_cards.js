// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.ui.calendar_cards');
goog.require('cljs.core');
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
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.calendar_cards.CalRoot.prototype = goog.object.clone(React.Component.prototype);
}

var x705855_705900 = untangled.ui.calendar_cards.CalRoot.prototype;
x705855_705900.componentWillUpdate = ((function (x705855_705900){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___705904 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___705905 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___705904,next_ident__29856__auto___705905)){
var idxr__29857__auto___705917 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___705917 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___705917),((function (idxr__29857__auto___705917,ident__29855__auto___705904,next_ident__29856__auto___705905,this__29851__auto__,x705855_705900){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___705904], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___705905], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___705917,ident__29855__auto___705904,next_ident__29856__auto___705905,this__29851__auto__,x705855_705900))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x705855_705900))
;

x705855_705900.shouldComponentUpdate = ((function (x705855_705900){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__705858 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__705858);
} else {
return G__705858;
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
});})(x705855_705900))
;

x705855_705900.componentWillUnmount = ((function (x705855_705900){
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
});})(x705855_705900))
;

x705855_705900.componentDidUpdate = ((function (x705855_705900){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x705855_705900))
;

x705855_705900.isMounted = ((function (x705855_705900){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x705855_705900))
;

x705855_705900.componentWillMount = ((function (x705855_705900){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x705855_705900))
;

x705855_705900.render = ((function (x705855_705900){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_705879 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_705880 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_705881 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_705882 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_705883 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var map__705888 = om.next.props.call(null,this$);
var map__705888__$1 = ((((!((map__705888 == null)))?((((map__705888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705888.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705888):map__705888);
var start_date = cljs.core.get.call(null,map__705888__$1,new cljs.core.Keyword(null,"start-date","start-date",295168731));
var end_date = cljs.core.get.call(null,map__705888__$1,new cljs.core.Keyword(null,"end-date","end-date",-208259642));
return om.dom.div.call(null,({"className": "u-row"}),om.dom.div.call(null,({"className": "u-column--3"}),untangled.ui.calendar.ui_calendar.call(null,start_date,new cljs.core.Keyword(null,"overlay-trigger","overlay-trigger",204144336),((function (map__705888,map__705888__$1,start_date,end_date,_STAR_reconciler_STAR_705879,_STAR_depth_STAR_705880,_STAR_shared_STAR_705881,_STAR_instrument_STAR_705882,_STAR_parent_STAR_705883,this$,this__29850__auto__,x705855_705900){
return (function (toggle,cal){
return om.dom.button.call(null,({"onClick": toggle, "className": "c-button", "type": "button"}),tr("Start Date: "),untangled.ui.calendar.displayed_date.call(null,cal));
});})(map__705888,map__705888__$1,start_date,end_date,_STAR_reconciler_STAR_705879,_STAR_depth_STAR_705880,_STAR_shared_STAR_705881,_STAR_instrument_STAR_705882,_STAR_parent_STAR_705883,this$,this__29850__auto__,x705855_705900))
)),om.dom.div.call(null,({"className": "u-column--3 u-push--6 u-end"}),untangled.ui.calendar.ui_calendar.call(null,end_date,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"bottom-right-edge","bottom-right-edge",1853941038),new cljs.core.Keyword(null,"overlay-trigger","overlay-trigger",204144336),((function (map__705888,map__705888__$1,start_date,end_date,_STAR_reconciler_STAR_705879,_STAR_depth_STAR_705880,_STAR_shared_STAR_705881,_STAR_instrument_STAR_705882,_STAR_parent_STAR_705883,this$,this__29850__auto__,x705855_705900){
return (function (toggle,cal){
return om.dom.button.call(null,({"onClick": toggle, "className": "c-button", "type": "button"}),tr("End Date: "),untangled.ui.calendar.displayed_date.call(null,cal));
});})(map__705888,map__705888__$1,start_date,end_date,_STAR_reconciler_STAR_705879,_STAR_depth_STAR_705880,_STAR_shared_STAR_705881,_STAR_instrument_STAR_705882,_STAR_parent_STAR_705883,this$,this__29850__auto__,x705855_705900))
)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_705883;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_705882;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_705881;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_705880;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_705879;
}});})(x705855_705900))
;


untangled.ui.calendar_cards.CalRoot.prototype.constructor = untangled.ui.calendar_cards.CalRoot;

untangled.ui.calendar_cards.CalRoot.prototype.constructor.displayName = "untangled.ui.calendar-cards/CalRoot";

untangled.ui.calendar_cards.CalRoot.prototype.om$isComponent = true;

var x705891_706056 = untangled.ui.calendar_cards.CalRoot;
/** @nocollapse */
x705891_706056.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x705891_706056.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x705891_706056){
return (function (cls,params){
var cls__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-date","start-date",295168731),untangled.ui.calendar.calendar.call(null,new cljs.core.Keyword(null,"start-date","start-date",295168731)),new cljs.core.Keyword(null,"end-date","end-date",-208259642),untangled.ui.calendar.calendar.call(null,new cljs.core.Keyword(null,"end-date","end-date",-208259642))], null);
});})(x705891_706056))
;

/** @nocollapse */
x705891_706056.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x705891_706056.om$next$IQuery$query$arity$1 = ((function (x705891_706056){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-date","start-date",295168731),om.next.get_query.call(null,untangled.ui.calendar.Calendar)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end-date","end-date",-208259642),om.next.get_query.call(null,untangled.ui.calendar.Calendar)], null)], null);
});})(x705891_706056))
;


var x705893_706075 = untangled.ui.calendar_cards.CalRoot.prototype;

x705893_706075.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x705893_706075.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x705893_706075){
return (function (cls,params){
var cls__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-date","start-date",295168731),untangled.ui.calendar.calendar.call(null,new cljs.core.Keyword(null,"start-date","start-date",295168731)),new cljs.core.Keyword(null,"end-date","end-date",-208259642),untangled.ui.calendar.calendar.call(null,new cljs.core.Keyword(null,"end-date","end-date",-208259642))], null);
});})(x705893_706075))
;


x705893_706075.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x705893_706075.om$next$IQuery$query$arity$1 = ((function (x705893_706075){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-date","start-date",295168731),om.next.get_query.call(null,untangled.ui.calendar.Calendar)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end-date","end-date",-208259642),om.next.get_query.call(null,untangled.ui.calendar.Calendar)], null)], null);
});})(x705893_706075))
;


untangled.ui.calendar_cards.CalRoot.cljs$lang$type = true;

untangled.ui.calendar_cards.CalRoot.cljs$lang$ctorStr = "untangled.ui.calendar-cards/CalRoot";

untangled.ui.calendar_cards.CalRoot.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.calendar-cards/CalRoot");
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.calendar_cards","untangled.ui.calendar_cards",-966548146),new cljs.core.Keyword(null,"calendar-viewer","calendar-viewer",1203995922)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"calendar-viewer",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"#A Calendar Widget.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,(function (state_atom__37612__auto__,node__37613__auto__){
untangled.client.core.mount.call(null,untangled.client.core.new_untangled_client.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),state_atom__37612__auto__),untangled.ui.calendar_cards.CalRoot,node__37613__auto__);

return setTimeout((function (){
return cljs.core.swap_BANG_.call(null,state_atom__37612__auto__,cljs.core.assoc,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));
}),(1000));
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));

//# sourceMappingURL=calendar_cards.js.map?rel=1489703354363
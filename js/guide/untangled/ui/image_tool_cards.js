// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.ui.image_tool_cards');
goog.require('cljs.core');
goog.require('untangled.client.cards');
goog.require('devcards.core');
goog.require('untangled.ui.clip_tool');
goog.require('om.dom');
goog.require('om.next');
goog.require('untangled.client.core');
goog.require('untangled.ui.elements');
if(typeof untangled.ui.image_tool_cards.Root !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.image_tool_cards.Root = (function untangled$ui$image_tool_cards$Root(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.image_tool_cards.Root.prototype = goog.object.clone(React.Component.prototype);
}

var x705518_705566 = untangled.ui.image_tool_cards.Root.prototype;
x705518_705566.componentWillUpdate = ((function (x705518_705566){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___705567 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___705568 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___705567,next_ident__29856__auto___705568)){
var idxr__29857__auto___705572 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___705572 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___705572),((function (idxr__29857__auto___705572,ident__29855__auto___705567,next_ident__29856__auto___705568,this__29851__auto__,x705518_705566){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___705567], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___705568], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___705572,ident__29855__auto___705567,next_ident__29856__auto___705568,this__29851__auto__,x705518_705566))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x705518_705566))
;

x705518_705566.shouldComponentUpdate = ((function (x705518_705566){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__705524 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__705524);
} else {
return G__705524;
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
});})(x705518_705566))
;

x705518_705566.componentWillUnmount = ((function (x705518_705566){
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
});})(x705518_705566))
;

x705518_705566.componentDidUpdate = ((function (x705518_705566){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x705518_705566))
;

x705518_705566.isMounted = ((function (x705518_705566){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x705518_705566))
;

x705518_705566.componentWillMount = ((function (x705518_705566){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x705518_705566))
;

x705518_705566.render = ((function (x705518_705566){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_705546 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_705547 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_705548 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_705549 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_705550 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var map__705553 = om.next.props.call(null,this$);
var map__705553__$1 = ((((!((map__705553 == null)))?((((map__705553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705553.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705553):map__705553);
var react_key = cljs.core.get.call(null,map__705553__$1,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664));
var ctool = cljs.core.get.call(null,map__705553__$1,new cljs.core.Keyword(null,"ctool","ctool",-1099375494));
return om.dom.div.call(null,({"key": react_key}),untangled.ui.clip_tool.ui_clip_tool.call(null,om.next.computed.call(null,ctool,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__705553,map__705553__$1,react_key,ctool,_STAR_reconciler_STAR_705546,_STAR_depth_STAR_705547,_STAR_shared_STAR_705548,_STAR_instrument_STAR_705549,_STAR_parent_STAR_705550,this$,this__29850__auto__,x705518_705566){
return (function (props){
return om.next.set_state_BANG_.call(null,this$,props);
});})(map__705553,map__705553__$1,react_key,ctool,_STAR_reconciler_STAR_705546,_STAR_depth_STAR_705547,_STAR_shared_STAR_705548,_STAR_instrument_STAR_705549,_STAR_parent_STAR_705550,this$,this__29850__auto__,x705518_705566))
], null))),untangled.ui.clip_tool.ui_preview_clip.call(null,cljs.core.merge.call(null,om.next.get_state.call(null,this$),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filename","filename",-1428840783),"minions.jpg",new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"height","height",1025178622),(200)], null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_705550;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_705549;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_705548;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_705547;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_705546;
}});})(x705518_705566))
;


untangled.ui.image_tool_cards.Root.prototype.constructor = untangled.ui.image_tool_cards.Root;

untangled.ui.image_tool_cards.Root.prototype.constructor.displayName = "untangled.ui.image-tool-cards/Root";

untangled.ui.image_tool_cards.Root.prototype.om$isComponent = true;

var x705558_705625 = untangled.ui.image_tool_cards.Root;
/** @nocollapse */
x705558_705625.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x705558_705625.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x705558_705625){
return (function (c,p){
var c__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ctool","ctool",-1099375494),untangled.client.core.get_initial_state.call(null,untangled.ui.clip_tool.ClipTool,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x705558_705625))
;

/** @nocollapse */
x705558_705625.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x705558_705625.om$next$IQuery$query$arity$1 = ((function (x705558_705625){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.Keyword(null,"ctool","ctool",-1099375494)], null);
});})(x705558_705625))
;


var x705562_705631 = untangled.ui.image_tool_cards.Root.prototype;

x705562_705631.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x705562_705631.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x705562_705631){
return (function (c,p){
var c__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ctool","ctool",-1099375494),untangled.client.core.get_initial_state.call(null,untangled.ui.clip_tool.ClipTool,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x705562_705631))
;


x705562_705631.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x705562_705631.om$next$IQuery$query$arity$1 = ((function (x705562_705631){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.Keyword(null,"ctool","ctool",-1099375494)], null);
});})(x705562_705631))
;


untangled.ui.image_tool_cards.Root.cljs$lang$type = true;

untangled.ui.image_tool_cards.Root.cljs$lang$ctorStr = "untangled.ui.image-tool-cards/Root";

untangled.ui.image_tool_cards.Root.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.image-tool-cards/Root");
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.image_tool_cards","untangled.ui.image_tool_cards",1364175765),new cljs.core.Keyword(null,"cliptool","cliptool",1092738332)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"cliptool",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Image Cropping Tool\n\n  - Aspect ratio enforcement\n  - Local state used for speed\n  - Preview tool to show result (needs CSS work)\n\n  API UNSTABLE. Proof of concept is close, but not complete.\n\n  The general idea is that the clip tool can generate a URL with clip bounds as get parameters,\n  and a CDN can serve said image via caching with a bg server that can generate the clipped\n  image on demand. Thus, the first time you hit the image the CDN has a cache miss, and something like\n  AWS lambda generates the image and sends it to the CDN. Thus, some CMS system or email that contains\n  the image URL will serve slowly on the first hit, and very fast thereafter.\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,(function (state_atom__37612__auto__,node__37613__auto__){
untangled.client.core.mount.call(null,untangled.client.core.new_untangled_client.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),state_atom__37612__auto__),untangled.ui.image_tool_cards.Root,node__37613__auto__);

return setTimeout((function (){
return cljs.core.swap_BANG_.call(null,state_atom__37612__auto__,cljs.core.assoc,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));
}),(1000));
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));

//# sourceMappingURL=image_tool_cards.js.map?rel=1489703354010
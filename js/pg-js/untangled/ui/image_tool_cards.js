// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.ui.image_tool_cards');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.image_tool_cards.Root.prototype = goog.object.clone(React.Component.prototype);
}

var x50879_50899 = untangled.ui.image_tool_cards.Root.prototype;
x50879_50899.componentWillUpdate = ((function (x50879_50899){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___50900 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___50901 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___50900,next_ident__10196__auto___50901)){
var idxr__10197__auto___50902 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___50902 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___50902),((function (idxr__10197__auto___50902,ident__10195__auto___50900,next_ident__10196__auto___50901,this__10191__auto__,x50879_50899){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___50900], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___50901], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___50902,ident__10195__auto___50900,next_ident__10196__auto___50901,this__10191__auto__,x50879_50899))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x50879_50899))
;

x50879_50899.shouldComponentUpdate = ((function (x50879_50899){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__50881 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__50881);
} else {
return G__50881;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__50886 = this__10191__auto__.state;
var G__50887 = "omcljs$state";
return goog.object.get(G__50886,G__50887);
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
});})(x50879_50899))
;

x50879_50899.componentWillUnmount = ((function (x50879_50899){
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
});})(x50879_50899))
;

x50879_50899.componentDidUpdate = ((function (x50879_50899){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x50879_50899))
;

x50879_50899.isMounted = ((function (x50879_50899){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x50879_50899))
;

x50879_50899.componentWillMount = ((function (x50879_50899){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x50879_50899))
;

x50879_50899.render = ((function (x50879_50899){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_50888 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_50889 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_50890 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_50891 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_50892 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__50893 = om.next.props(this$);
var map__50893__$1 = ((((!((map__50893 == null)))?((((map__50893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50893):map__50893);
var react_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50893__$1,cljs.core.cst$kw$ui_SLASH_react_DASH_key);
var ctool = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50893__$1,cljs.core.cst$kw$ctool);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": react_key}),cljs.core.array_seq([(function (){var G__50895 = om.next.computed(ctool,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onChange,((function (map__50893,map__50893__$1,react_key,ctool,_STAR_reconciler_STAR_50888,_STAR_depth_STAR_50889,_STAR_shared_STAR_50890,_STAR_instrument_STAR_50891,_STAR_parent_STAR_50892,this$,this__10190__auto__,x50879_50899){
return (function (props){
return om.next.set_state_BANG_(this$,props);
});})(map__50893,map__50893__$1,react_key,ctool,_STAR_reconciler_STAR_50888,_STAR_depth_STAR_50889,_STAR_shared_STAR_50890,_STAR_instrument_STAR_50891,_STAR_parent_STAR_50892,this$,this__10190__auto__,x50879_50899))
], null));
return (untangled.ui.clip_tool.ui_clip_tool.cljs$core$IFn$_invoke$arity$1 ? untangled.ui.clip_tool.ui_clip_tool.cljs$core$IFn$_invoke$arity$1(G__50895) : untangled.ui.clip_tool.ui_clip_tool.call(null,G__50895));
})(),(function (){var G__50896 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$filename,"minions.jpg",cljs.core.cst$kw$width,(200),cljs.core.cst$kw$height,(200)], null)], 0));
return (untangled.ui.clip_tool.ui_preview_clip.cljs$core$IFn$_invoke$arity$1 ? untangled.ui.clip_tool.ui_preview_clip.cljs$core$IFn$_invoke$arity$1(G__50896) : untangled.ui.clip_tool.ui_preview_clip.call(null,G__50896));
})()], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_50892;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_50891;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_50890;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_50889;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_50888;
}});})(x50879_50899))
;


untangled.ui.image_tool_cards.Root.prototype.constructor = untangled.ui.image_tool_cards.Root;

untangled.ui.image_tool_cards.Root.prototype.constructor.displayName = "untangled.ui.image-tool-cards/Root";

untangled.ui.image_tool_cards.Root.prototype.om$isComponent = true;

var x50897_50903 = untangled.ui.image_tool_cards.Root;
/** @nocollapse */
x50897_50903.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x50897_50903.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x50897_50903){
return (function (c,p){
var c__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ctool,untangled.client.core.get_initial_state(untangled.ui.clip_tool.ClipTool,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x50897_50903))
;

/** @nocollapse */
x50897_50903.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x50897_50903.om$next$IQuery$query$arity$1 = ((function (x50897_50903){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_react_DASH_key,cljs.core.cst$kw$ctool], null);
});})(x50897_50903))
;


var x50898_50904 = untangled.ui.image_tool_cards.Root.prototype;

x50898_50904.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x50898_50904.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x50898_50904){
return (function (c,p){
var c__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ctool,untangled.client.core.get_initial_state(untangled.ui.clip_tool.ClipTool,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x50898_50904))
;


x50898_50904.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x50898_50904.om$next$IQuery$query$arity$1 = ((function (x50898_50904){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_react_DASH_key,cljs.core.cst$kw$ctool], null);
});})(x50898_50904))
;


untangled.ui.image_tool_cards.Root.cljs$lang$type = true;

untangled.ui.image_tool_cards.Root.cljs$lang$ctorStr = "untangled.ui.image-tool-cards/Root";

untangled.ui.image_tool_cards.Root.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.image-tool-cards/Root");
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$image_tool_cards,cljs.core.cst$kw$cliptool], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"cliptool",cljs.core.cst$kw$documentation,"# Image Cropping Tool\n\n  - Aspect ratio enforcement\n  - Local state used for speed\n  - Preview tool to show result (needs CSS work)\n\n  API UNSTABLE. Proof of concept is close, but not complete.\n\n  The general idea is that the clip tool can generate a URL with clip bounds as get parameters,\n  and a CDN can serve said image via caching with a bg server that can generate the clipped\n  image on demand. Thus, the first time you hit the image the CDN has a cache miss, and something like\n  AWS lambda generates the image and sends it to the CDN. Thus, some CMS system or email that contains\n  the image URL will serve slowly on the first hit, and very fast thereafter.\n  ",cljs.core.cst$kw$main_DASH_obj,devcards.core.dom_node_STAR_((function (state_atom__50267__auto__,node__50268__auto__){
untangled.client.core.mount(untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$initial_DASH_state,state_atom__50267__auto__], 0)),untangled.ui.image_tool_cards.Root,node__50268__auto__);

var G__50905 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom__50267__auto__,cljs.core.assoc,cljs.core.cst$kw$ui_SLASH_react_DASH_key,untangled.dom.unique_key());
});
var G__50906 = (1000);
return setTimeout(G__50905,G__50906);
})),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inspect_DASH_data,true], null)], null));
})], null));

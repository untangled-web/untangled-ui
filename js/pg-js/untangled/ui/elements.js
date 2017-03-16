// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.ui.elements');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('om.dom');
goog.require('om.next');
goog.require('untangled.ui.menu');
goog.require('untangled.icons');
goog.require('untangled.events');
goog.require('untangled.client.logging');
/**
 * Wrap children in a span where the :visible attribute
 *   is a boolean indicating the visibility of the children.
 * 
 *   Props is a clj(s) map of normal React attributes.
 * 
 *   `:inline?` - A boolean (default false). When true, emits a `span`, else `div`.
 * 
 *   You can get this same effect using the `u-fade-in` and `u-fade-out` CSS classes. See the CSS Guide.
 * 
 *   When the resulting span becomes visible it fades in, and when it becomes hidden it fades out.
 */
untangled.ui.elements.ui_fader = (function untangled$ui$elements$ui_fader(var_args){
var args__8730__auto__ = [];
var len__8723__auto___50333 = arguments.length;
var i__8724__auto___50334 = (0);
while(true){
if((i__8724__auto___50334 < len__8723__auto___50333)){
args__8730__auto__.push((arguments[i__8724__auto___50334]));

var G__50335 = (i__8724__auto___50334 + (1));
i__8724__auto___50334 = G__50335;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_fader.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.elements.ui_fader.cljs$core$IFn$_invoke$arity$variadic = (function (p__50330,children){
var map__50331 = p__50330;
var map__50331__$1 = ((((!((map__50331 == null)))?((((map__50331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50331):map__50331);
var props = map__50331__$1;
var inline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50331__$1,cljs.core.cst$kw$inline_QMARK_);
var visible = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50331__$1,cljs.core.cst$kw$visible);
var className = (function (){var or__7502__auto__ = cljs.core.cst$kw$className.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return "";
}
})();
var classes = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-fade-out"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(visible)?" u-fade-in":null))].join('');
var wrapper = (cljs.core.truth_(inline_QMARK_)?om.dom.span:om.dom.div);
var attrs = cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,cljs.core.cst$kw$visible),cljs.core.cst$kw$className,classes));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(wrapper,attrs,children);
});

untangled.ui.elements.ui_fader.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_fader.cljs$lang$applyTo = (function (seq50328){
var G__50329 = cljs.core.first(seq50328);
var seq50328__$1 = cljs.core.next(seq50328);
return untangled.ui.elements.ui_fader.cljs$core$IFn$_invoke$arity$variadic(G__50329,seq50328__$1);
});

/**
 * Returns the react-instance (which is logically true) iff the given react instance is an instance of the given react class.
 *   Otherwise returns nil.
 */
untangled.ui.elements.react_instance_QMARK_ = (function untangled$ui$elements$react_instance_QMARK_(react_class,react_instance){
if(cljs.core.truth_(react_class)){
} else {
throw (new Error("Assert failed: react-class"));
}

if(cljs.core.truth_(react_instance)){
} else {
throw (new Error("Assert failed: react-instance"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(react_instance.type,react_class)){
return react_instance;
} else {
return null;
}
});
/**
 * Finds (and returns) the first child that is an instance of the given React class (or nil if not found).
 */
untangled.ui.elements.first_node = (function untangled$ui$elements$first_node(react_class,sequence_of_react_instances){
return cljs.core.some((function (p1__50336_SHARP_){
return untangled.ui.elements.react_instance_QMARK_(react_class,p1__50336_SHARP_);
}),sequence_of_react_instances);
});
untangled.ui.elements.update_frame_content = (function untangled$ui$elements$update_frame_content(this$,child){
var frame_component = om.next.get_state.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$frame_DASH_component);
if(cljs.core.truth_(frame_component)){
return ReactDOM.render(child,frame_component);
} else {
return null;
}
});
/**
 * @constructor
 */
untangled.ui.elements.IFrame = (function untangled$ui$elements$IFrame(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.elements.IFrame.prototype = goog.object.clone(React.Component.prototype);

var x50341_50359 = untangled.ui.elements.IFrame.prototype;
x50341_50359.componentWillUpdate = ((function (x50341_50359){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___50360 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___50361 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___50360,next_ident__10196__auto___50361)){
var idxr__10197__auto___50362 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___50362 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___50362),((function (idxr__10197__auto___50362,ident__10195__auto___50360,next_ident__10196__auto___50361,this__10191__auto__,x50341_50359){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___50360], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___50361], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___50362,ident__10195__auto___50360,next_ident__10196__auto___50361,this__10191__auto__,x50341_50359))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x50341_50359))
;

x50341_50359.shouldComponentUpdate = ((function (x50341_50359){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__50343 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__50343);
} else {
return G__50343;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__50348 = this__10191__auto__.state;
var G__50349 = "omcljs$state";
return goog.object.get(G__50348,G__50349);
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
});})(x50341_50359))
;

x50341_50359.componentWillUnmount = ((function (x50341_50359){
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
});})(x50341_50359))
;

x50341_50359.isMounted = ((function (x50341_50359){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x50341_50359))
;

x50341_50359.componentWillMount = ((function (x50341_50359){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x50341_50359))
;

x50341_50359.initLocalState = ((function (x50341_50359){
return (function (){
var this$ = this;
var ret__10169__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,(0)], null);
var obj50351 = {"omcljs$state":ret__10169__auto__};
return obj50351;
});})(x50341_50359))
;

x50341_50359.componentDidMount = ((function (x50341_50359){
return (function (){
var this$ = this;
var frame_body = ReactDOM.findDOMNode(this$).contentDocument.body;
var child = cljs.core.cst$kw$child.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
var e1 = document.createElement("div");
frame_body.appendChild(e1);

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$frame_DASH_component,e1);

return untangled.ui.elements.update_frame_content(this$,child);
});})(x50341_50359))
;

x50341_50359.componentDidUpdate = ((function (x50341_50359){
return (function (prev_props__10181__auto__,prev_state__10182__auto__){
var this__10180__auto__ = this;
var this$ = this__10180__auto__;
var pprops = om.next._prev_props(prev_props__10181__auto__,this__10180__auto__);
var pstate = goog.object.get(prev_state__10182__auto__,"omcljs$previousState");
var child_50363 = cljs.core.cst$kw$child.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
untangled.ui.elements.update_frame_content(this$,child_50363);

return om.next.clear_prev_props_BANG_(this__10180__auto__);
});})(x50341_50359))
;

x50341_50359.render = ((function (x50341_50359){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_50352 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_50353 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_50354 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_50355 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_50356 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{return om.dom.iframe(cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(om.next.props(this$),cljs.core.cst$kw$child)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_50356;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_50355;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_50354;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_50353;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_50352;
}});})(x50341_50359))
;


untangled.ui.elements.IFrame.prototype.constructor = untangled.ui.elements.IFrame;

untangled.ui.elements.IFrame.prototype.constructor.displayName = "untangled.ui.elements/IFrame";

untangled.ui.elements.IFrame.prototype.om$isComponent = true;

var x50357_50364 = untangled.ui.elements.IFrame;


var x50358_50365 = untangled.ui.elements.IFrame.prototype;


untangled.ui.elements.IFrame.cljs$lang$type = true;

untangled.ui.elements.IFrame.cljs$lang$ctorStr = "untangled.ui.elements/IFrame";

untangled.ui.elements.IFrame.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.elements/IFrame");
});
untangled.ui.elements.ui_iframe = (function untangled$ui$elements$ui_iframe(props,child){
return om.next.factory.cljs$core$IFn$_invoke$arity$1(untangled.ui.elements.IFrame).call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$child,child));
});
/**
 * Render an icon or a short string within an avatar. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   `:color` - :none (default), :primary, :accent
 *   `:size` - :regular (default), :medium, :large, :xlarge:, :huge
 *   `:kind` - :none (default), :bordered
 *   
 */
untangled.ui.elements.ui_avatar = (function untangled$ui$elements$ui_avatar(p__50366,child){
var map__50370 = p__50366;
var map__50370__$1 = ((((!((map__50370 == null)))?((((map__50370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50370):map__50370);
var props = map__50370__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50370__$1,cljs.core.cst$kw$className,"");
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50370__$1,cljs.core.cst$kw$color);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50370__$1,cljs.core.cst$kw$size);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50370__$1,cljs.core.cst$kw$kind);
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$primary,null,cljs.core.cst$kw$accent,null], null), null);
var legal_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$large,null,cljs.core.cst$kw$huge,null,cljs.core.cst$kw$xlarge,null,cljs.core.cst$kw$medium,null], null), null);
var legal_kinds = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bordered,null], null), null);
var user_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$className,"");
var classes = (function (){var G__50372 = user_classes;
var G__50372__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50372),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-avatar")].join('')
;
var G__50372__$2 = ((cljs.core.contains_QMARK_(legal_colors,color))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50372__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-avatar--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color))].join(''):G__50372__$1);
var G__50372__$3 = ((cljs.core.contains_QMARK_(legal_sizes,size))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50372__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-avatar--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))].join(''):G__50372__$2);
if(cljs.core.contains_QMARK_(legal_kinds,kind)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50372__$3),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-avatar--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(kind))].join('');
} else {
return G__50372__$3;
}
})();
var props__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$className,classes),cljs.core.cst$kw$color,cljs.core.array_seq([cljs.core.cst$kw$size,cljs.core.cst$kw$kind], 0));
return om.dom.span.cljs$core$IFn$_invoke$arity$variadic(cljs.core.clj__GT_js(props__$1),cljs.core.array_seq([child], 0));
});
/**
 * Render the given children within a badge. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   `(ui-badge {} "7")`
 *   
 */
untangled.ui.elements.ui_badge = (function untangled$ui$elements$ui_badge(var_args){
var args__8730__auto__ = [];
var len__8723__auto___50378 = arguments.length;
var i__8724__auto___50379 = (0);
while(true){
if((i__8724__auto___50379 < len__8723__auto___50378)){
args__8730__auto__.push((arguments[i__8724__auto___50379]));

var G__50380 = (i__8724__auto___50379 + (1));
i__8724__auto___50379 = G__50380;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_badge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.elements.ui_badge.cljs$core$IFn$_invoke$arity$variadic = (function (p__50375,children){
var map__50376 = p__50375;
var map__50376__$1 = ((((!((map__50376 == null)))?((((map__50376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50376):map__50376);
var props = map__50376__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50376__$1,cljs.core.cst$kw$className,"");
var props__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(props,cljs.core.cst$kw$className,cljs.core.str," c-badge");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.span,cljs.core.clj__GT_js(props__$1),children);
});

untangled.ui.elements.ui_badge.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_badge.cljs$lang$applyTo = (function (seq50373){
var G__50374 = cljs.core.first(seq50373);
var seq50373__$1 = cljs.core.next(seq50373);
return untangled.ui.elements.ui_badge.cljs$core$IFn$_invoke$arity$variadic(G__50374,seq50373__$1);
});

/**
 * Render a button that looks more like a link that a button (it is just the children), but renders the hover shape
 *   of a more traditional button when the mouse is over it.
 * 
 *   `:color` - :neutral (default), :primary, :accent
 *   `:shape` - :rect (default), :round, or :wide.  The shape when the mouse is over the button.
 *   `:size` - :normal (default), :small.  Small buttons are a bit more condensed.
 *   `:active` - true or false (default).  Causes the button to look highlighted.
 * 
 *   Any normal HTML/React properties are allowed, including additional CSS classes.
 *   
 */
untangled.ui.elements.ui_flat_button = (function untangled$ui$elements$ui_flat_button(var_args){
var args__8730__auto__ = [];
var len__8723__auto___50388 = arguments.length;
var i__8724__auto___50389 = (0);
while(true){
if((i__8724__auto___50389 < len__8723__auto___50388)){
args__8730__auto__.push((arguments[i__8724__auto___50389]));

var G__50390 = (i__8724__auto___50389 + (1));
i__8724__auto___50389 = G__50390;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__50383,children){
var map__50384 = p__50383;
var map__50384__$1 = ((((!((map__50384 == null)))?((((map__50384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50384):map__50384);
var attrs = map__50384__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50384__$1,cljs.core.cst$kw$className,"");
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50384__$1,cljs.core.cst$kw$size);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50384__$1,cljs.core.cst$kw$color);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50384__$1,cljs.core.cst$kw$shape);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50384__$1,cljs.core.cst$kw$disabled);
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50384__$1,cljs.core.cst$kw$active);
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$primary,null,cljs.core.cst$kw$accent,null], null), null);
var legal_shapes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$round,null,cljs.core.cst$kw$wide,null], null), null);
var legal_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$small,null], null), null);
var button_label = ((function (legal_colors,legal_shapes,legal_sizes,map__50384,map__50384__$1,attrs,className,size,color,shape,disabled,active){
return (function (text){
return om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-button__content"}),cljs.core.array_seq([text], 0));
});})(legal_colors,legal_shapes,legal_sizes,map__50384,map__50384__$1,attrs,className,size,color,shape,disabled,active))
;
var fixed_children = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (legal_colors,legal_shapes,legal_sizes,button_label,map__50384,map__50384__$1,attrs,className,size,color,shape,disabled,active){
return (function (c){
if(typeof c === 'string'){
return button_label(c);
} else {
return c;
}
});})(legal_colors,legal_shapes,legal_sizes,button_label,map__50384,map__50384__$1,attrs,className,size,color,shape,disabled,active))
,children);
var classes = (function (){var G__50386 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-button")].join('');
var G__50386__$1 = (cljs.core.truth_(active)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50386),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-active")].join(''):G__50386);
var G__50386__$2 = ((cljs.core.contains_QMARK_(legal_colors,color))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50386__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-button--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color))].join(''):G__50386__$1);
var G__50386__$3 = ((cljs.core.contains_QMARK_(legal_shapes,shape))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50386__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-button--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(shape))].join(''):G__50386__$2);
if(cljs.core.contains_QMARK_(legal_sizes,size)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50386__$3),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-button--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))].join('');
} else {
return G__50386__$3;
}
})();
var attrs__$1 = (function (){var G__50387 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(attrs,cljs.core.cst$kw$className,classes,cljs.core.array_seq([cljs.core.cst$kw$type,"button"], 0));
var G__50387__$1 = (cljs.core.truth_(disabled)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50387,cljs.core.cst$kw$aria_DASH_disabled,"true"):G__50387);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50387__$1,cljs.core.cst$kw$active,cljs.core.array_seq([cljs.core.cst$kw$color,cljs.core.cst$kw$shape,cljs.core.cst$kw$size], 0));

})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.button,cljs.core.clj__GT_js(attrs__$1),fixed_children);
});

untangled.ui.elements.ui_flat_button.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_flat_button.cljs$lang$applyTo = (function (seq50381){
var G__50382 = cljs.core.first(seq50381);
var seq50381__$1 = cljs.core.next(seq50381);
return untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic(G__50382,seq50381__$1);
});

/**
 * Render a raised button. Props is a normal clj(s) map with React/HTML attributes plus:
 * 
 *   `:color` - :neutral (default), :primary, :accent
 *   `:shape` - :rect (default), :round, or :wide
 *   `:size` - :normal (default), :small
 *   `:active` - true or false (default), Causes the button to look highlighted.
 * 
 *   Any other React properties are allowed, including additional CSS classes.
 *   
 */
untangled.ui.elements.ui_button = (function untangled$ui$elements$ui_button(var_args){
var args__8730__auto__ = [];
var len__8723__auto___50396 = arguments.length;
var i__8724__auto___50397 = (0);
while(true){
if((i__8724__auto___50397 < len__8723__auto___50396)){
args__8730__auto__.push((arguments[i__8724__auto___50397]));

var G__50398 = (i__8724__auto___50397 + (1));
i__8724__auto___50397 = G__50398;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__50393,children){
var map__50394 = p__50393;
var map__50394__$1 = ((((!((map__50394 == null)))?((((map__50394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50394.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50394):map__50394);
var props = map__50394__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50394__$1,cljs.core.cst$kw$className,"");
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50394__$1,cljs.core.cst$kw$size);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50394__$1,cljs.core.cst$kw$color);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50394__$1,cljs.core.cst$kw$shape);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50394__$1,cljs.core.cst$kw$disabled);
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50394__$1,cljs.core.cst$kw$active);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(untangled.ui.elements.ui_flat_button,cljs.core.update.cljs$core$IFn$_invoke$arity$4(props,cljs.core.cst$kw$className,cljs.core.str," c-button--raised"),children);
});

untangled.ui.elements.ui_button.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_button.cljs$lang$applyTo = (function (seq50391){
var G__50392 = cljs.core.first(seq50391);
var seq50391__$1 = cljs.core.next(seq50391);
return untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic(G__50392,seq50391__$1);
});

/**
 * Render a raised circle button of fixed size (configurable in CSS variables, see CSS guide).
 *   Extra content will overflow out of the cirle. Props is a normal clj(s) map with React/HTML attributes plus:
 * 
 *   `:color` - :neutral (default), :primary, :accent
 *   `:size` - :normal (default), :small
 *   `:active` - true or false (default), Causes the button to look highlighted.
 * 
 *   Any other React properties are allowed, including additional CSS classes.
 * 
 *   Note that you will typically only be able to fit something like an icon in this kind of button, which is a perfect
 *   circle.
 *   
 */
untangled.ui.elements.ui_circular_button = (function untangled$ui$elements$ui_circular_button(var_args){
var args__8730__auto__ = [];
var len__8723__auto___50404 = arguments.length;
var i__8724__auto___50405 = (0);
while(true){
if((i__8724__auto___50405 < len__8723__auto___50404)){
args__8730__auto__.push((arguments[i__8724__auto___50405]));

var G__50406 = (i__8724__auto___50405 + (1));
i__8724__auto___50405 = G__50406;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_circular_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.elements.ui_circular_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__50401,children){
var map__50402 = p__50401;
var map__50402__$1 = ((((!((map__50402 == null)))?((((map__50402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50402.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50402):map__50402);
var props = map__50402__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50402__$1,cljs.core.cst$kw$className,"");
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50402__$1,cljs.core.cst$kw$size);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50402__$1,cljs.core.cst$kw$color);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50402__$1,cljs.core.cst$kw$disabled);
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50402__$1,cljs.core.cst$kw$active);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(untangled.ui.elements.ui_flat_button,cljs.core.update.cljs$core$IFn$_invoke$arity$4(props,cljs.core.cst$kw$className,cljs.core.str," c-button--circular"),children);
});

untangled.ui.elements.ui_circular_button.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_circular_button.cljs$lang$applyTo = (function (seq50399){
var G__50400 = cljs.core.first(seq50399);
var seq50399__$1 = cljs.core.next(seq50399);
return untangled.ui.elements.ui_circular_button.cljs$core$IFn$_invoke$arity$variadic(G__50400,seq50399__$1);
});

/**
 * Render a card component
 * 
 * `:title` - "Some Title"
 * `:color` - :primary | :accent
 * `:kind` - :bordered | :transparent | :square
 * `:size` - :expand | :wide
 * `:image` - "path/to/image/file.jpeg"
 * `:image-position` - :cover | :top-left | :top-right | :bottom-left | :bottom-right
 * `:actions` - (ui-button "Some Action")
 * `:media` - URL
 * `:media-type` - :image | :video (TODO Youtube?)
 * 
 * all paramters optional
 *  
 */
untangled.ui.elements.ui_card = (function untangled$ui$elements$ui_card(var_args){
var args__8730__auto__ = [];
var len__8723__auto___50413 = arguments.length;
var i__8724__auto___50414 = (0);
while(true){
if((i__8724__auto___50414 < len__8723__auto___50413)){
args__8730__auto__.push((arguments[i__8724__auto___50414]));

var G__50415 = (i__8724__auto___50414 + (1));
i__8724__auto___50414 = G__50415;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic = (function (p__50409,children){
var map__50410 = p__50409;
var map__50410__$1 = ((((!((map__50410 == null)))?((((map__50410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50410.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50410):map__50410);
var attrs = map__50410__$1;
var media = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50410__$1,cljs.core.cst$kw$media);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50410__$1,cljs.core.cst$kw$menu);
var media_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50410__$1,cljs.core.cst$kw$media_DASH_type);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50410__$1,cljs.core.cst$kw$color);
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50410__$1,cljs.core.cst$kw$actions);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50410__$1,cljs.core.cst$kw$title);
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50410__$1,cljs.core.cst$kw$className);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50410__$1,cljs.core.cst$kw$size);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50410__$1,cljs.core.cst$kw$kind);
var image_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50410__$1,cljs.core.cst$kw$image_DASH_position);
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50410__$1,cljs.core.cst$kw$image);
if(((kind == null)) || ((kind instanceof cljs.core.Keyword))){
} else {
throw (new Error("Assert failed: (or (nil? kind) (keyword? kind))"));
}

if(((title == null)) || (typeof title === 'string')){
} else {
throw (new Error("Assert failed: (or (nil? title) (string? title))"));
}

var legal_kinds = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$transparent,null,cljs.core.cst$kw$bordered,null,cljs.core.cst$kw$square,null], null), null);
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$primary,null,cljs.core.cst$kw$accent,null], null), null);
var legal_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$wide,null,cljs.core.cst$kw$expand,null], null), null);
var id_class = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("c-card--");
var className__$1 = (function (){var or__7502__auto__ = className;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return "";
}
})();
var classes = (function (){var G__50412 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-card "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_class),cljs.core.str.cljs$core$IFn$_invoke$arity$1(className__$1)].join('');
var G__50412__$1 = ((cljs.core.contains_QMARK_(legal_kinds,kind))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50412),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-card--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(kind))].join(''):G__50412);
var G__50412__$2 = ((cljs.core.contains_QMARK_(legal_colors,color))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50412__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-card--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color))].join(''):G__50412__$1);
if(cljs.core.contains_QMARK_(legal_sizes,size)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50412__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-card--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))].join('');
} else {
return G__50412__$2;
}
})();
var attributes = cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,classes], null)], 0)),cljs.core.cst$kw$title,cljs.core.array_seq([cljs.core.cst$kw$kind,cljs.core.cst$kw$color,cljs.core.cst$kw$size,cljs.core.cst$kw$actions,cljs.core.cst$kw$image,cljs.core.cst$kw$image_DASH_position,cljs.core.cst$kw$media_DASH_type,cljs.core.cst$kw$media,cljs.core.cst$kw$menu], 0)));
var image_src = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("url("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
var background_image = cljs.core.clj__GT_js((cljs.core.truth_(image)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundImage,image_src], null)], 0)):null));
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.array_seq([(cljs.core.truth_(media)?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-card__media")].join('')}),cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(media_type,cljs.core.cst$kw$image))?om.dom.img(({"className": "c-card__media-content", "src": media})):null)], 0)):null),(cljs.core.truth_(title)?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-card__title"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(image)?" c-card__title--image":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(image_position)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-card__title--image-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(image_position))].join(''):null))].join('')}),cljs.core.array_seq([om.dom.h1.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-card__title-text"}),cljs.core.array_seq([title], 0))], 0)):null),(cljs.core.truth_(children)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,({"className": "c-card__supporting-text"}),children):null),(cljs.core.truth_(actions)?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-card__actions"}),cljs.core.array_seq([actions], 0)):null),(cljs.core.truth_(menu)?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-card__menu"}),cljs.core.array_seq([untangled.ui.menu.ui_menu.cljs$core$IFn$_invoke$arity$variadic(menu,cljs.core.array_seq([cljs.core.cst$kw$style,cljs.core.cst$kw$icon], 0))], 0)):null),om.dom.style.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_class),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" .c-card__title { background-image: url("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image),cljs.core.str.cljs$core$IFn$_invoke$arity$1("); }")].join('')], 0))], 0));
});

untangled.ui.elements.ui_card.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_card.cljs$lang$applyTo = (function (seq50407){
var G__50408 = cljs.core.first(seq50407);
var seq50407__$1 = cljs.core.next(seq50407);
return untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(G__50408,seq50407__$1);
});

var render_input_50430 = (function (p__50416){
var map__50417 = p__50416;
var map__50417__$1 = ((((!((map__50417 == null)))?((((map__50417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50417.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50417):map__50417);
var props = map__50417__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50417__$1,cljs.core.cst$kw$type);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50417__$1,cljs.core.cst$kw$id);
return om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(function (){var G__50419 = cljs.core.clj__GT_js(props);
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__50419) : om.dom.input.call(null,G__50419));
})(),om.dom.label.cljs$core$IFn$_invoke$arity$variadic(({"htmlFor": id}),cljs.core.array_seq(["\u00A0"], 0))], 0));
});
/**
 * Render a HTML radio (without the label). Props is a normal clj(s) map with React/HTML attributes plus:
 * 
 *  `:className` - additional class stylings to apply to the top level of the checkbox
 *  `:id` - Required. A unique ID. Will not render correctly without one.
 *  
 */
untangled.ui.elements.ui_radio = ((function (render_input_50430){
return (function untangled$ui$elements$ui_radio(p__50420){
var map__50423 = p__50420;
var map__50423__$1 = ((((!((map__50423 == null)))?((((map__50423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50423):map__50423);
var props = map__50423__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50423__$1,cljs.core.cst$kw$className);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50423__$1,cljs.core.cst$kw$id);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("DOM ID is required on radio"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("id")].join('')));
}

var classes = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-radio")].join('');
var attrs = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$type,"radio",cljs.core.array_seq([cljs.core.cst$kw$className,classes], 0));
return render_input_50430(attrs);
});})(render_input_50430))
;

/**
 * Render a checkbox (not the label). Props is a normal clj(s) map with React/HTML attributes plus:
 * 
 *  `:className` - additional class stylings to apply to the top level of the checkbox
 *  `:id` string - Unique DOM ID. Required for correct rendering.
 *  `:checked` - true, false, or :partial
 *  
 */
untangled.ui.elements.ui_checkbox = ((function (render_input_50430){
return (function untangled$ui$elements$ui_checkbox(p__50425){
var map__50428 = p__50425;
var map__50428__$1 = ((((!((map__50428 == null)))?((((map__50428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50428):map__50428);
var props = map__50428__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50428__$1,cljs.core.cst$kw$id);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50428__$1,cljs.core.cst$kw$state);
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50428__$1,cljs.core.cst$kw$checked);
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50428__$1,cljs.core.cst$kw$className);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("DOM ID is required on checkbox"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("id")].join('')));
}

var classes = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-checkbox"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$partial,checked))?" is-indeterminate":null))].join('');
var checked__$1 = cljs.core.boolean$(checked);
var attrs = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$type,"checkbox",cljs.core.array_seq([cljs.core.cst$kw$checked,checked__$1,cljs.core.cst$kw$className,classes], 0));
return render_input_50430(attrs);
});})(render_input_50430))
;
/**
 * Render a checkbox (not the label). Props is a normal clj(s) map with React/HTML attributes plus:
 * 
 *  `:className` - additional class stylings to apply to the top level of the checkbox
 *  `:id` string - Unique DOM ID. Required for correct rendering.
 *  `:checked` - true, false, or :partial
 *  
 */
untangled.ui.elements.ui_switch = (function untangled$ui$elements$ui_switch(p__50431){
var map__50435 = p__50431;
var map__50435__$1 = ((((!((map__50435 == null)))?((((map__50435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50435.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50435):map__50435);
var props = map__50435__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50435__$1,cljs.core.cst$kw$id);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50435__$1,cljs.core.cst$kw$state);
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50435__$1,cljs.core.cst$kw$checked);
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50435__$1,cljs.core.cst$kw$className);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50435__$1,cljs.core.cst$kw$disabled);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("DOM ID is required on checkbox"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("id")].join('')));
}

var classes = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-switch__input")].join('');
var type = "checkbox";
var checked__$1 = cljs.core.boolean$(checked);
var attrs = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$type,"checkbox",cljs.core.array_seq([cljs.core.cst$kw$checked,checked__$1,cljs.core.cst$kw$className,classes], 0));
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-switch"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(disabled)?" is-disabled":null))].join('')}),cljs.core.array_seq([(function (){var G__50437 = cljs.core.clj__GT_js(attrs);
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__50437) : om.dom.input.call(null,G__50437));
})(),om.dom.label(({"className": "c-switch__paddle", "htmlFor": id, "aria-hidden": false}))], 0));
});
/**
 * Render an input field. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   `:size` :regular (default), :small, :medium, :large
 *   `:state` :valid (default), :invalid, or :error
 *   
 */
untangled.ui.elements.ui_field = (function untangled$ui$elements$ui_field(p__50438,placeholder){
var map__50443 = p__50438;
var map__50443__$1 = ((((!((map__50443 == null)))?((((map__50443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50443.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50443):map__50443);
var attrs = map__50443__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50443__$1,cljs.core.cst$kw$size,"");
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50443__$1,cljs.core.cst$kw$state);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50443__$1,cljs.core.cst$kw$type);
var legal_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$large,null,cljs.core.cst$kw$medium,null,cljs.core.cst$kw$small,null], null), null);
var legal_states = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$invalid,null,cljs.core.cst$kw$error,null], null), null);
var user_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$className,"");
var user_type = (cljs.core.truth_(type)?type:"text");
var has = ((function (legal_sizes,legal_states,user_classes,user_type,map__50443,map__50443__$1,attrs,size,state,type){
return (function (s){
return cljs.core.contains_QMARK_(state,s);
});})(legal_sizes,legal_states,user_classes,user_type,map__50443,map__50443__$1,attrs,size,state,type))
;
var classes = (function (){var G__50445 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-field ")].join('');
var G__50445__$1 = ((cljs.core.contains_QMARK_(legal_sizes,size))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50445),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-field--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))].join(''):G__50445);
if(cljs.core.contains_QMARK_(legal_states,state)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50445__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(state))].join('');
} else {
return G__50445__$1;
}
})();
var attrs__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(attrs,cljs.core.cst$kw$className,classes,cljs.core.array_seq([cljs.core.cst$kw$placeholder,cljs.core.name(placeholder),cljs.core.cst$kw$aria_DASH_label,cljs.core.name(placeholder),cljs.core.cst$kw$type,user_type], 0)),cljs.core.cst$kw$size,cljs.core.array_seq([cljs.core.cst$kw$state], 0));
var G__50446 = cljs.core.clj__GT_js(attrs__$1);
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__50446) : om.dom.input.call(null,G__50446));
});
/**
 * Render an icon. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   `:color` :none (default), :active, :passive
 *   `:size` :regular (default), :small, :medium, :large, :xlarge, :huge
 *   `:glyph` - Instructs `ui-icon` to render an icon from the built-in set. See `untangled.icons/icon`.
 * 
 *   The child (optional) should be some kind of icon, for example the SVG generated by the `untangled.icons/icon` function.
 *   
 */
untangled.ui.elements.ui_icon = (function untangled$ui$elements$ui_icon(var_args){
var args50447 = [];
var len__8723__auto___50457 = arguments.length;
var i__8724__auto___50458 = (0);
while(true){
if((i__8724__auto___50458 < len__8723__auto___50457)){
args50447.push((arguments[i__8724__auto___50458]));

var G__50459 = (i__8724__auto___50458 + (1));
i__8724__auto___50458 = G__50459;
continue;
} else {
}
break;
}

var G__50449 = args50447.length;
switch (G__50449) {
case 1:
return untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50447.length)].join('')));

}
});

untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$1 = (function (p__50450){
var map__50451 = p__50450;
var map__50451__$1 = ((((!((map__50451 == null)))?((((map__50451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50451.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50451):map__50451);
var props = map__50451__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50451__$1,cljs.core.cst$kw$className,"");
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50451__$1,cljs.core.cst$kw$color);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50451__$1,cljs.core.cst$kw$size);
var glyph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50451__$1,cljs.core.cst$kw$glyph);
return untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2(props,null);
});

untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2 = (function (p__50453,child){
var map__50454 = p__50453;
var map__50454__$1 = ((((!((map__50454 == null)))?((((map__50454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50454):map__50454);
var props = map__50454__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50454__$1,cljs.core.cst$kw$className,"");
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50454__$1,cljs.core.cst$kw$color);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50454__$1,cljs.core.cst$kw$size);
var glyph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50454__$1,cljs.core.cst$kw$glyph);
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$passive,null,cljs.core.cst$kw$active,null], null), null);
var legal_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$large,null,cljs.core.cst$kw$huge,null,cljs.core.cst$kw$xlarge,null,cljs.core.cst$kw$medium,null,cljs.core.cst$kw$small,null], null), null);
var user_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$className,"");
var classes = (function (){var G__50456 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-icon")].join('');
var G__50456__$1 = ((cljs.core.contains_QMARK_(legal_colors,color))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50456),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color))].join(''):G__50456);
if(cljs.core.contains_QMARK_(legal_sizes,size)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50456__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-icon--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))].join('');
} else {
return G__50456__$1;
}
})();
var props__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$className,classes),cljs.core.cst$kw$size,cljs.core.array_seq([cljs.core.cst$kw$color,cljs.core.cst$kw$glyph], 0));
return om.dom.span.cljs$core$IFn$_invoke$arity$variadic(cljs.core.clj__GT_js(props__$1),cljs.core.array_seq([(cljs.core.truth_(glyph)?untangled.icons.icon(glyph):child)], 0));
});

untangled.ui.elements.ui_icon.cljs$lang$maxFixedArity = 2;

/**
 * Render an icon bar using a vector of icons (each a map of attributes).
 * Can optionally render vertically and/or shifting.
 * Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 * `:orientation` :vertical or :horizontal (default)
 * `:shifting` true or false (default)
 * 
 * TODO: Example, talk about children
 * 
 * all parameters are optional
 * 
 */
untangled.ui.elements.ui_icon_bar = (function untangled$ui$elements$ui_icon_bar(var_args){
var args__8730__auto__ = [];
var len__8723__auto___50467 = arguments.length;
var i__8724__auto___50468 = (0);
while(true){
if((i__8724__auto___50468 < len__8723__auto___50467)){
args__8730__auto__.push((arguments[i__8724__auto___50468]));

var G__50469 = (i__8724__auto___50468 + (1));
i__8724__auto___50468 = G__50469;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_icon_bar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.elements.ui_icon_bar.cljs$core$IFn$_invoke$arity$variadic = (function (p__50463,children){
var map__50464 = p__50463;
var map__50464__$1 = ((((!((map__50464 == null)))?((((map__50464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50464.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50464):map__50464);
var props = map__50464__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50464__$1,cljs.core.cst$kw$className,"");
var orientation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50464__$1,cljs.core.cst$kw$orientation);
var shifting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50464__$1,cljs.core.cst$kw$shifting);
var user_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$className,"");
var top_level_class = (function (){var G__50466 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-iconbar")].join('');
var G__50466__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,cljs.core.cst$kw$vertical))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50466),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-iconbar--rail")].join(''):G__50466);
if(cljs.core.truth_(shifting)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50466__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-iconbar--shifting")].join('');
} else {
return G__50466__$1;
}
})();
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({}),cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.nav,({"className": top_level_class}),children)], 0));
});

untangled.ui.elements.ui_icon_bar.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_icon_bar.cljs$lang$applyTo = (function (seq50461){
var G__50462 = cljs.core.first(seq50461);
var seq50461__$1 = cljs.core.next(seq50461);
return untangled.ui.elements.ui_icon_bar.cljs$core$IFn$_invoke$arity$variadic(G__50462,seq50461__$1);
});

/**
 * Render an icon button for use inside an icon bar.
 * 
 *   `:glyph` - An icon glyph name to render that given icon.
 *   `:label` - A string to label that icon.
 *   `:active` true or false (default) - Usually used to show that your in that action's view.
 */
untangled.ui.elements.ui_icon_bar_item = (function untangled$ui$elements$ui_icon_bar_item(p__50470){
var map__50473 = p__50470;
var map__50473__$1 = ((((!((map__50473 == null)))?((((map__50473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50473):map__50473);
var props = map__50473__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50473__$1,cljs.core.cst$kw$className,"");
var glyph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50473__$1,cljs.core.cst$kw$glyph);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50473__$1,cljs.core.cst$kw$label,"");
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50473__$1,cljs.core.cst$kw$active);
return om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-iconbar__item "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?"is-active":null))].join(''), "type": "button"}),cljs.core.array_seq([untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$glyph,glyph], null)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-iconbar__label"}),cljs.core.array_seq([label], 0))], 0));
});
/**
 * Render the given children within a label. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   `:color` :none (default), :primary, :accent
 *   
 */
untangled.ui.elements.ui_label = (function untangled$ui$elements$ui_label(var_args){
var args__8730__auto__ = [];
var len__8723__auto___50481 = arguments.length;
var i__8724__auto___50482 = (0);
while(true){
if((i__8724__auto___50482 < len__8723__auto___50481)){
args__8730__auto__.push((arguments[i__8724__auto___50482]));

var G__50483 = (i__8724__auto___50482 + (1));
i__8724__auto___50482 = G__50483;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.elements.ui_label.cljs$core$IFn$_invoke$arity$variadic = (function (p__50477,children){
var map__50478 = p__50477;
var map__50478__$1 = ((((!((map__50478 == null)))?((((map__50478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50478):map__50478);
var props = map__50478__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50478__$1,cljs.core.cst$kw$className,"");
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50478__$1,cljs.core.cst$kw$color);
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$primary,null,cljs.core.cst$kw$accent,null], null), null);
var classes = (function (){var G__50480 = className;
var G__50480__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50480),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-label")].join('')
;
if(cljs.core.contains_QMARK_(legal_colors,color)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50480__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-label--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color))].join('');
} else {
return G__50480__$1;
}
})();
var props__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,cljs.core.cst$kw$color),cljs.core.cst$kw$className,classes);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.span,cljs.core.clj__GT_js(props__$1),children);
});

untangled.ui.elements.ui_label.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_label.cljs$lang$applyTo = (function (seq50475){
var G__50476 = cljs.core.first(seq50475);
var seq50475__$1 = cljs.core.next(seq50475);
return untangled.ui.elements.ui_label.cljs$core$IFn$_invoke$arity$variadic(G__50476,seq50475__$1);
});

/**
 * Render an icon or a short string within an avatar. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   `:color` :none (default), :primary :accent
 */
untangled.ui.elements.ui_loader = (function untangled$ui$elements$ui_loader(p__50484){
var map__50488 = p__50484;
var map__50488__$1 = ((((!((map__50488 == null)))?((((map__50488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50488):map__50488);
var props = map__50488__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50488__$1,cljs.core.cst$kw$className,"");
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50488__$1,cljs.core.cst$kw$color);
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$primary,null,cljs.core.cst$kw$accent,null], null), null);
var user_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$className,"");
var classes = (function (){var G__50490 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-loader")].join('');
if(cljs.core.contains_QMARK_(legal_colors,color)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50490),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-loader--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color))].join('');
} else {
return G__50490;
}
})();
var props__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$className,classes,cljs.core.array_seq([cljs.core.cst$kw$aria_DASH_hidden,false], 0)),cljs.core.cst$kw$color);
return om.dom.div(cljs.core.clj__GT_js(props__$1));
});
/**
 * Render the given children within a message. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   `:color` :none(default), :alert, :success, :warning, :informative
 *   
 */
untangled.ui.elements.ui_message = (function untangled$ui$elements$ui_message(var_args){
var args__8730__auto__ = [];
var len__8723__auto___50497 = arguments.length;
var i__8724__auto___50498 = (0);
while(true){
if((i__8724__auto___50498 < len__8723__auto___50497)){
args__8730__auto__.push((arguments[i__8724__auto___50498]));

var G__50499 = (i__8724__auto___50498 + (1));
i__8724__auto___50498 = G__50499;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_message.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.elements.ui_message.cljs$core$IFn$_invoke$arity$variadic = (function (p__50493,children){
var map__50494 = p__50493;
var map__50494__$1 = ((((!((map__50494 == null)))?((((map__50494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50494.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50494):map__50494);
var props = map__50494__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50494__$1,cljs.core.cst$kw$className,"");
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50494__$1,cljs.core.cst$kw$color);
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$primary,null,cljs.core.cst$kw$accent,null], null), null);
var classes = (function (){var G__50496 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-message")].join('');
if(cljs.core.contains_QMARK_(legal_colors,color)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50496),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-message--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color))].join('');
} else {
return G__50496;
}
})();
var props__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$className,classes),cljs.core.cst$kw$color);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,cljs.core.clj__GT_js(props__$1),children);
});

untangled.ui.elements.ui_message.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_message.cljs$lang$applyTo = (function (seq50491){
var G__50492 = cljs.core.first(seq50491);
var seq50491__$1 = cljs.core.next(seq50491);
return untangled.ui.elements.ui_message.cljs$core$IFn$_invoke$arity$variadic(G__50492,seq50491__$1);
});

/**
 * @constructor
 */
untangled.ui.elements.DialogTitle = (function untangled$ui$elements$DialogTitle(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.elements.DialogTitle.prototype = goog.object.clone(React.Component.prototype);

var x50504_50520 = untangled.ui.elements.DialogTitle.prototype;
x50504_50520.componentWillUpdate = ((function (x50504_50520){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___50521 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___50522 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___50521,next_ident__10196__auto___50522)){
var idxr__10197__auto___50523 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___50523 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___50523),((function (idxr__10197__auto___50523,ident__10195__auto___50521,next_ident__10196__auto___50522,this__10191__auto__,x50504_50520){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___50521], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___50522], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___50523,ident__10195__auto___50521,next_ident__10196__auto___50522,this__10191__auto__,x50504_50520))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x50504_50520))
;

x50504_50520.shouldComponentUpdate = ((function (x50504_50520){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__50506 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__50506);
} else {
return G__50506;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__50511 = this__10191__auto__.state;
var G__50512 = "omcljs$state";
return goog.object.get(G__50511,G__50512);
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
});})(x50504_50520))
;

x50504_50520.componentWillUnmount = ((function (x50504_50520){
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
});})(x50504_50520))
;

x50504_50520.componentDidUpdate = ((function (x50504_50520){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x50504_50520))
;

x50504_50520.isMounted = ((function (x50504_50520){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x50504_50520))
;

x50504_50520.componentWillMount = ((function (x50504_50520){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x50504_50520))
;

x50504_50520.render = ((function (x50504_50520){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_50513 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_50514 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_50515 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_50516 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_50517 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-dialog__title"}),cljs.core.array_seq([om.next.children(this$)], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_50517;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_50516;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_50515;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_50514;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_50513;
}});})(x50504_50520))
;


untangled.ui.elements.DialogTitle.prototype.constructor = untangled.ui.elements.DialogTitle;

untangled.ui.elements.DialogTitle.prototype.constructor.displayName = "untangled.ui.elements/DialogTitle";

untangled.ui.elements.DialogTitle.prototype.om$isComponent = true;

var x50518_50524 = untangled.ui.elements.DialogTitle;


var x50519_50525 = untangled.ui.elements.DialogTitle.prototype;


untangled.ui.elements.DialogTitle.cljs$lang$type = true;

untangled.ui.elements.DialogTitle.cljs$lang$ctorStr = "untangled.ui.elements/DialogTitle";

untangled.ui.elements.DialogTitle.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.elements/DialogTitle");
});
/**
 * Render a dialog's title (using supplied DOM children). Should only be used in a ui-dialog
 */
untangled.ui.elements.ui_dialog_title = om.next.factory.cljs$core$IFn$_invoke$arity$1(untangled.ui.elements.DialogTitle);
/**
 * @constructor
 */
untangled.ui.elements.DialogBody = (function untangled$ui$elements$DialogBody(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.elements.DialogBody.prototype = goog.object.clone(React.Component.prototype);

var x50530_50546 = untangled.ui.elements.DialogBody.prototype;
x50530_50546.componentWillUpdate = ((function (x50530_50546){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___50547 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___50548 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___50547,next_ident__10196__auto___50548)){
var idxr__10197__auto___50549 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___50549 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___50549),((function (idxr__10197__auto___50549,ident__10195__auto___50547,next_ident__10196__auto___50548,this__10191__auto__,x50530_50546){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___50547], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___50548], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___50549,ident__10195__auto___50547,next_ident__10196__auto___50548,this__10191__auto__,x50530_50546))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x50530_50546))
;

x50530_50546.shouldComponentUpdate = ((function (x50530_50546){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__50532 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__50532);
} else {
return G__50532;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__50537 = this__10191__auto__.state;
var G__50538 = "omcljs$state";
return goog.object.get(G__50537,G__50538);
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
});})(x50530_50546))
;

x50530_50546.componentWillUnmount = ((function (x50530_50546){
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
});})(x50530_50546))
;

x50530_50546.componentDidUpdate = ((function (x50530_50546){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x50530_50546))
;

x50530_50546.isMounted = ((function (x50530_50546){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x50530_50546))
;

x50530_50546.componentWillMount = ((function (x50530_50546){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x50530_50546))
;

x50530_50546.render = ((function (x50530_50546){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_50539 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_50540 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_50541 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_50542 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_50543 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-dialog__content"}),cljs.core.array_seq([om.next.children(this$)], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_50543;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_50542;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_50541;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_50540;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_50539;
}});})(x50530_50546))
;


untangled.ui.elements.DialogBody.prototype.constructor = untangled.ui.elements.DialogBody;

untangled.ui.elements.DialogBody.prototype.constructor.displayName = "untangled.ui.elements/DialogBody";

untangled.ui.elements.DialogBody.prototype.om$isComponent = true;

var x50544_50550 = untangled.ui.elements.DialogBody;


var x50545_50551 = untangled.ui.elements.DialogBody.prototype;


untangled.ui.elements.DialogBody.cljs$lang$type = true;

untangled.ui.elements.DialogBody.cljs$lang$ctorStr = "untangled.ui.elements/DialogBody";

untangled.ui.elements.DialogBody.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.elements/DialogBody");
});
/**
 * Render the body of a dialog (using the supplied DOM children). Should only be used in a ui-dialog
 */
untangled.ui.elements.ui_dialog_body = om.next.factory.cljs$core$IFn$_invoke$arity$1(untangled.ui.elements.DialogBody);
/**
 * @constructor
 */
untangled.ui.elements.DialogActions = (function untangled$ui$elements$DialogActions(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.elements.DialogActions.prototype = goog.object.clone(React.Component.prototype);

var x50556_50572 = untangled.ui.elements.DialogActions.prototype;
x50556_50572.componentWillUpdate = ((function (x50556_50572){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___50573 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___50574 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___50573,next_ident__10196__auto___50574)){
var idxr__10197__auto___50575 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___50575 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___50575),((function (idxr__10197__auto___50575,ident__10195__auto___50573,next_ident__10196__auto___50574,this__10191__auto__,x50556_50572){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___50573], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___50574], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___50575,ident__10195__auto___50573,next_ident__10196__auto___50574,this__10191__auto__,x50556_50572))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x50556_50572))
;

x50556_50572.shouldComponentUpdate = ((function (x50556_50572){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__50558 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__50558);
} else {
return G__50558;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__50563 = this__10191__auto__.state;
var G__50564 = "omcljs$state";
return goog.object.get(G__50563,G__50564);
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
});})(x50556_50572))
;

x50556_50572.componentWillUnmount = ((function (x50556_50572){
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
});})(x50556_50572))
;

x50556_50572.componentDidUpdate = ((function (x50556_50572){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x50556_50572))
;

x50556_50572.isMounted = ((function (x50556_50572){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x50556_50572))
;

x50556_50572.componentWillMount = ((function (x50556_50572){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x50556_50572))
;

x50556_50572.render = ((function (x50556_50572){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_50565 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_50566 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_50567 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_50568 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_50569 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-dialog__actions"}),cljs.core.array_seq([om.next.children(this$)], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_50569;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_50568;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_50567;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_50566;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_50565;
}});})(x50556_50572))
;


untangled.ui.elements.DialogActions.prototype.constructor = untangled.ui.elements.DialogActions;

untangled.ui.elements.DialogActions.prototype.constructor.displayName = "untangled.ui.elements/DialogActions";

untangled.ui.elements.DialogActions.prototype.om$isComponent = true;

var x50570_50576 = untangled.ui.elements.DialogActions;


var x50571_50577 = untangled.ui.elements.DialogActions.prototype;


untangled.ui.elements.DialogActions.cljs$lang$type = true;

untangled.ui.elements.DialogActions.cljs$lang$ctorStr = "untangled.ui.elements/DialogActions";

untangled.ui.elements.DialogActions.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.elements/DialogActions");
});
/**
 * Render one or more action elements (e.g. buttons) in the action area of the dialog. Should only be used in a ui-dialog
 */
untangled.ui.elements.ui_dialog_actions = om.next.factory.cljs$core$IFn$_invoke$arity$1(untangled.ui.elements.DialogActions);
/**
 * @constructor
 */
untangled.ui.elements.Dialog = (function untangled$ui$elements$Dialog(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.elements.Dialog.prototype = goog.object.clone(React.Component.prototype);

var x50582_50600 = untangled.ui.elements.Dialog.prototype;
x50582_50600.componentWillUpdate = ((function (x50582_50600){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___50601 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___50602 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___50601,next_ident__10196__auto___50602)){
var idxr__10197__auto___50603 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___50603 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___50603),((function (idxr__10197__auto___50603,ident__10195__auto___50601,next_ident__10196__auto___50602,this__10191__auto__,x50582_50600){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___50601], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___50602], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___50603,ident__10195__auto___50601,next_ident__10196__auto___50602,this__10191__auto__,x50582_50600))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x50582_50600))
;

x50582_50600.shouldComponentUpdate = ((function (x50582_50600){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__50584 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__50584);
} else {
return G__50584;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__50589 = this__10191__auto__.state;
var G__50590 = "omcljs$state";
return goog.object.get(G__50589,G__50590);
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
});})(x50582_50600))
;

x50582_50600.componentWillUnmount = ((function (x50582_50600){
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
});})(x50582_50600))
;

x50582_50600.componentDidUpdate = ((function (x50582_50600){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x50582_50600))
;

x50582_50600.isMounted = ((function (x50582_50600){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x50582_50600))
;

x50582_50600.componentWillMount = ((function (x50582_50600){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x50582_50600))
;

x50582_50600.render = ((function (x50582_50600){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_50591 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_50592 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_50593 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_50594 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_50595 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__50596 = om.next.props(this$);
var map__50596__$1 = ((((!((map__50596 == null)))?((((map__50596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50596.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50596):map__50596);
var props = map__50596__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50596__$1,cljs.core.cst$kw$key,"");
var full_screen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50596__$1,cljs.core.cst$kw$full_DASH_screen);
var visible = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50596__$1,cljs.core.cst$kw$visible);
var modal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50596__$1,cljs.core.cst$kw$modal);
var onClose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50596__$1,cljs.core.cst$kw$onClose);
var children = om.next.children(this$);
var title = untangled.ui.elements.first_node(untangled.ui.elements.DialogTitle,children);
var content = untangled.ui.elements.first_node(untangled.ui.elements.DialogBody,children);
var actions = untangled.ui.elements.first_node(untangled.ui.elements.DialogActions,children);
var state = (cljs.core.truth_(visible)?" is-active":null);
var user_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$className,"");
var classes = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-dialog"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(state),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(full_screen)?" c-dialog--fullscreen":null))].join('');
var dialog_dom = om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-dialog")].join(''), "className": classes}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-dialog__card"}),cljs.core.array_seq([(cljs.core.truth_(title)?title:null),(cljs.core.truth_(content)?content:null),(cljs.core.truth_(actions)?actions:null)], 0))], 0));
if(cljs.core.truth_(modal)){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": key}),cljs.core.array_seq([dialog_dom,om.dom.div(({"onKeyPress": ((function (map__50596,map__50596__$1,props,key,full_screen,visible,modal,onClose,children,title,content,actions,state,user_classes,classes,dialog_dom,_STAR_reconciler_STAR_50591,_STAR_depth_STAR_50592,_STAR_shared_STAR_50593,_STAR_instrument_STAR_50594,_STAR_parent_STAR_50595,this$,this__10190__auto__,x50582_50600){
return (function (evt){
if(cljs.core.truth_((function (){var and__7490__auto__ = visible;
if(cljs.core.truth_(and__7490__auto__)){
var and__7490__auto____$1 = onClose;
if(cljs.core.truth_(and__7490__auto____$1)){
return untangled.events.escape_key_QMARK_(evt);
} else {
return and__7490__auto____$1;
}
} else {
return and__7490__auto__;
}
})())){
return (onClose.cljs$core$IFn$_invoke$arity$0 ? onClose.cljs$core$IFn$_invoke$arity$0() : onClose.call(null));
} else {
return null;
}
});})(map__50596,map__50596__$1,props,key,full_screen,visible,modal,onClose,children,title,content,actions,state,user_classes,classes,dialog_dom,_STAR_reconciler_STAR_50591,_STAR_depth_STAR_50592,_STAR_shared_STAR_50593,_STAR_instrument_STAR_50594,_STAR_parent_STAR_50595,this$,this__10190__auto__,x50582_50600))
, "onClick": ((function (map__50596,map__50596__$1,props,key,full_screen,visible,modal,onClose,children,title,content,actions,state,user_classes,classes,dialog_dom,_STAR_reconciler_STAR_50591,_STAR_depth_STAR_50592,_STAR_shared_STAR_50593,_STAR_instrument_STAR_50594,_STAR_parent_STAR_50595,this$,this__10190__auto__,x50582_50600){
return (function (){
if(cljs.core.truth_((function (){var and__7490__auto__ = visible;
if(cljs.core.truth_(and__7490__auto__)){
return onClose;
} else {
return and__7490__auto__;
}
})())){
return (onClose.cljs$core$IFn$_invoke$arity$0 ? onClose.cljs$core$IFn$_invoke$arity$0() : onClose.call(null));
} else {
return null;
}
});})(map__50596,map__50596__$1,props,key,full_screen,visible,modal,onClose,children,title,content,actions,state,user_classes,classes,dialog_dom,_STAR_reconciler_STAR_50591,_STAR_depth_STAR_50592,_STAR_shared_STAR_50593,_STAR_instrument_STAR_50594,_STAR_parent_STAR_50595,this$,this__10190__auto__,x50582_50600))
, "className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-backdrop"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)].join('')}))], 0));
} else {
return dialog_dom;
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_50595;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_50594;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_50593;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_50592;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_50591;
}});})(x50582_50600))
;


untangled.ui.elements.Dialog.prototype.constructor = untangled.ui.elements.Dialog;

untangled.ui.elements.Dialog.prototype.constructor.displayName = "untangled.ui.elements/Dialog";

untangled.ui.elements.Dialog.prototype.om$isComponent = true;

var x50598_50604 = untangled.ui.elements.Dialog;


var x50599_50605 = untangled.ui.elements.Dialog.prototype;


untangled.ui.elements.Dialog.cljs$lang$type = true;

untangled.ui.elements.Dialog.cljs$lang$ctorStr = "untangled.ui.elements/Dialog";

untangled.ui.elements.Dialog.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.elements/Dialog");
});
/**
 * Render a dialog. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   Options:
 * 
 *   `:visible` - A boolean. When true the dialog is on-screen. When not, it is hidden. Allows you to keep the dialog
 *   in the DOM.
 *   `:full-screen` - A boolean. Renders the dialog to consume the entire screen when true. (useful for mobile).
 *   `:modal` - A boolean. When true the dialog will block the rest of the UI.
 *   `:className` - Additional CSS classes to place on the dialog.
 *   `:key` - React key
 *   `:onClose` - A callback that advises *your* code that the user is indicating a desire to be out of the dialog
 *   (e.g. the clicked on the modal backdrop). You must still set the visible flag since this is a stateless
 *   rendering of a dialog UI, not an active stateful component.
 * 
 *   You should include at most one of each of three following children for this node:
 * 
 *   (ui-dialog {}
 *  (ui-dialog-title {} title-nodes)
 *  (ui-dialog-body {} body-nodes)
 *  (ui-dialog-actions {} action-nodes)
 * 
 *   The `title-nodes` can be any inline DOM (or just a string), as can body-nodes.  Action-notes must include at least one button that
 *   closes the dialog or redirects the user.
 */
untangled.ui.elements.ui_dialog = om.next.factory.cljs$core$IFn$_invoke$arity$1(untangled.ui.elements.Dialog);
/**
 * @constructor
 */
untangled.ui.elements.NotificationTitle = (function untangled$ui$elements$NotificationTitle(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.elements.NotificationTitle.prototype = goog.object.clone(React.Component.prototype);

var x50610_50628 = untangled.ui.elements.NotificationTitle.prototype;
x50610_50628.componentWillUpdate = ((function (x50610_50628){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___50629 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___50630 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___50629,next_ident__10196__auto___50630)){
var idxr__10197__auto___50631 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___50631 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___50631),((function (idxr__10197__auto___50631,ident__10195__auto___50629,next_ident__10196__auto___50630,this__10191__auto__,x50610_50628){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___50629], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___50630], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___50631,ident__10195__auto___50629,next_ident__10196__auto___50630,this__10191__auto__,x50610_50628))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x50610_50628))
;

x50610_50628.shouldComponentUpdate = ((function (x50610_50628){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__50612 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__50612);
} else {
return G__50612;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__50617 = this__10191__auto__.state;
var G__50618 = "omcljs$state";
return goog.object.get(G__50617,G__50618);
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
});})(x50610_50628))
;

x50610_50628.componentWillUnmount = ((function (x50610_50628){
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
});})(x50610_50628))
;

x50610_50628.componentDidUpdate = ((function (x50610_50628){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x50610_50628))
;

x50610_50628.isMounted = ((function (x50610_50628){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x50610_50628))
;

x50610_50628.componentWillMount = ((function (x50610_50628){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x50610_50628))
;

x50610_50628.render = ((function (x50610_50628){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_50619 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_50620 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_50621 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_50622 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_50623 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__50624 = om.next.props(this$);
var map__50624__$1 = ((((!((map__50624 == null)))?((((map__50624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50624.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50624):map__50624);
var props = map__50624__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50624__$1,cljs.core.cst$kw$key,"");
return om.dom.h1.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-notification_heading", "key": key}),cljs.core.array_seq([om.next.children(this$)], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_50623;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_50622;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_50621;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_50620;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_50619;
}});})(x50610_50628))
;


untangled.ui.elements.NotificationTitle.prototype.constructor = untangled.ui.elements.NotificationTitle;

untangled.ui.elements.NotificationTitle.prototype.constructor.displayName = "untangled.ui.elements/NotificationTitle";

untangled.ui.elements.NotificationTitle.prototype.om$isComponent = true;

var x50626_50632 = untangled.ui.elements.NotificationTitle;


var x50627_50633 = untangled.ui.elements.NotificationTitle.prototype;


untangled.ui.elements.NotificationTitle.cljs$lang$type = true;

untangled.ui.elements.NotificationTitle.cljs$lang$ctorStr = "untangled.ui.elements/NotificationTitle";

untangled.ui.elements.NotificationTitle.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.elements/NotificationTitle");
});
/**
 * Render a notification title. Should only be used in a ui-notification
 */
untangled.ui.elements.ui_notification_title = om.next.factory.cljs$core$IFn$_invoke$arity$1(untangled.ui.elements.NotificationTitle);
/**
 * @constructor
 */
untangled.ui.elements.NotificationBody = (function untangled$ui$elements$NotificationBody(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.elements.NotificationBody.prototype = goog.object.clone(React.Component.prototype);

var x50638_50654 = untangled.ui.elements.NotificationBody.prototype;
x50638_50654.componentWillUpdate = ((function (x50638_50654){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___50655 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___50656 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___50655,next_ident__10196__auto___50656)){
var idxr__10197__auto___50657 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___50657 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___50657),((function (idxr__10197__auto___50657,ident__10195__auto___50655,next_ident__10196__auto___50656,this__10191__auto__,x50638_50654){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___50655], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___50656], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___50657,ident__10195__auto___50655,next_ident__10196__auto___50656,this__10191__auto__,x50638_50654))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x50638_50654))
;

x50638_50654.shouldComponentUpdate = ((function (x50638_50654){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__50640 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__50640);
} else {
return G__50640;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__50645 = this__10191__auto__.state;
var G__50646 = "omcljs$state";
return goog.object.get(G__50645,G__50646);
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
});})(x50638_50654))
;

x50638_50654.componentWillUnmount = ((function (x50638_50654){
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
});})(x50638_50654))
;

x50638_50654.componentDidUpdate = ((function (x50638_50654){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x50638_50654))
;

x50638_50654.isMounted = ((function (x50638_50654){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x50638_50654))
;

x50638_50654.componentWillMount = ((function (x50638_50654){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x50638_50654))
;

x50638_50654.render = ((function (x50638_50654){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_50647 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_50648 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_50649 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_50650 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_50651 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{return om.dom.p.cljs$core$IFn$_invoke$arity$variadic(({}),cljs.core.array_seq([om.next.children(this$)], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_50651;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_50650;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_50649;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_50648;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_50647;
}});})(x50638_50654))
;


untangled.ui.elements.NotificationBody.prototype.constructor = untangled.ui.elements.NotificationBody;

untangled.ui.elements.NotificationBody.prototype.constructor.displayName = "untangled.ui.elements/NotificationBody";

untangled.ui.elements.NotificationBody.prototype.om$isComponent = true;

var x50652_50658 = untangled.ui.elements.NotificationBody;


var x50653_50659 = untangled.ui.elements.NotificationBody.prototype;


untangled.ui.elements.NotificationBody.cljs$lang$type = true;

untangled.ui.elements.NotificationBody.cljs$lang$ctorStr = "untangled.ui.elements/NotificationBody";

untangled.ui.elements.NotificationBody.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.elements/NotificationBody");
});
/**
 * Render a notification body. Should only be used in a ui-notification
 */
untangled.ui.elements.ui_notification_body = om.next.factory.cljs$core$IFn$_invoke$arity$1(untangled.ui.elements.NotificationBody);
/**
 * @constructor
 */
untangled.ui.elements.Notification = (function untangled$ui$elements$Notification(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.elements.Notification.prototype = goog.object.clone(React.Component.prototype);

var x50664_50684 = untangled.ui.elements.Notification.prototype;
x50664_50684.componentWillUpdate = ((function (x50664_50684){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___50685 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___50686 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___50685,next_ident__10196__auto___50686)){
var idxr__10197__auto___50687 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___50687 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___50687),((function (idxr__10197__auto___50687,ident__10195__auto___50685,next_ident__10196__auto___50686,this__10191__auto__,x50664_50684){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___50685], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___50686], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___50687,ident__10195__auto___50685,next_ident__10196__auto___50686,this__10191__auto__,x50664_50684))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x50664_50684))
;

x50664_50684.shouldComponentUpdate = ((function (x50664_50684){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__50666 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__50666);
} else {
return G__50666;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__50671 = this__10191__auto__.state;
var G__50672 = "omcljs$state";
return goog.object.get(G__50671,G__50672);
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
});})(x50664_50684))
;

x50664_50684.componentWillUnmount = ((function (x50664_50684){
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
});})(x50664_50684))
;

x50664_50684.componentDidUpdate = ((function (x50664_50684){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x50664_50684))
;

x50664_50684.isMounted = ((function (x50664_50684){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x50664_50684))
;

x50664_50684.componentWillMount = ((function (x50664_50684){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x50664_50684))
;

x50664_50684.render = ((function (x50664_50684){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_50673 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_50674 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_50675 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_50676 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_50677 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__50678 = om.next.props(this$);
var map__50678__$1 = ((((!((map__50678 == null)))?((((map__50678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50678.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50678):map__50678);
var props = map__50678__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50678__$1,cljs.core.cst$kw$key,"");
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50678__$1,cljs.core.cst$kw$width);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50678__$1,cljs.core.cst$kw$kind);
var onClose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50678__$1,cljs.core.cst$kw$onClose);
var children = om.next.children(this$);
var title = untangled.ui.elements.first_node(untangled.ui.elements.NotificationTitle,children);
var content = untangled.ui.elements.first_node(untangled.ui.elements.NotificationBody,children);
var legal_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$informative,null,cljs.core.cst$kw$warning,null,cljs.core.cst$kw$success,null,cljs.core.cst$kw$error,null], null), null);
var legal_widths = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wide,null], null), null);
var user_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$className,"");
var classes = (function (){var G__50680 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-notification")].join('');
var G__50680__$1 = ((cljs.core.contains_QMARK_(legal_types,kind))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50680),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-notification--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(kind))].join(''):G__50680);
if(cljs.core.contains_QMARK_(legal_widths,width)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50680__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-notification--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(width))].join('');
} else {
return G__50680__$1;
}
})();
var type_icon = (function (){var G__50681 = (((kind instanceof cljs.core.Keyword))?kind.fqn:null);
switch (G__50681) {
case "success":
return untangled.icons.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$check_circle,cljs.core.array_seq([cljs.core.cst$kw$states,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$positive], null)], 0));

break;
case "warning":
return untangled.icons.icon(cljs.core.cst$kw$warning);

break;
case "error":
return untangled.icons.icon(cljs.core.cst$kw$error);

break;
default:
return untangled.icons.icon(cljs.core.cst$kw$info);

}
})();
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": classes, "key": key}),cljs.core.array_seq([type_icon,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-notification_content"}),cljs.core.array_seq([(cljs.core.truth_(title)?title:null),(cljs.core.truth_(content)?content:null)], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__50678,map__50678__$1,props,key,width,kind,onClose,children,title,content,legal_types,legal_widths,user_classes,classes,type_icon,_STAR_reconciler_STAR_50673,_STAR_depth_STAR_50674,_STAR_shared_STAR_50675,_STAR_instrument_STAR_50676,_STAR_parent_STAR_50677,this$,this__10190__auto__,x50664_50684){
return (function (evt){
if(cljs.core.truth_(onClose)){
return (onClose.cljs$core$IFn$_invoke$arity$0 ? onClose.cljs$core$IFn$_invoke$arity$0() : onClose.call(null));
} else {
return null;
}
});})(map__50678,map__50678__$1,props,key,width,kind,onClose,children,title,content,legal_types,legal_widths,user_classes,classes,type_icon,_STAR_reconciler_STAR_50673,_STAR_depth_STAR_50674,_STAR_shared_STAR_50675,_STAR_instrument_STAR_50676,_STAR_parent_STAR_50677,this$,this__10190__auto__,x50664_50684))
, "type": "button", "className": "c-button c-button--icon"}),cljs.core.array_seq([untangled.icons.icon(cljs.core.cst$kw$close)], 0))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_50677;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_50676;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_50675;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_50674;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_50673;
}});})(x50664_50684))
;


untangled.ui.elements.Notification.prototype.constructor = untangled.ui.elements.Notification;

untangled.ui.elements.Notification.prototype.constructor.displayName = "untangled.ui.elements/Notification";

untangled.ui.elements.Notification.prototype.om$isComponent = true;

var x50682_50689 = untangled.ui.elements.Notification;


var x50683_50690 = untangled.ui.elements.Notification.prototype;


untangled.ui.elements.Notification.cljs$lang$type = true;

untangled.ui.elements.Notification.cljs$lang$ctorStr = "untangled.ui.elements/Notification";

untangled.ui.elements.Notification.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.elements/Notification");
});
/**
 * Render a notification. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   `:onClose` (optional) - A function to call when the notification's close button is pressed
 *   `:type` :none (default), :success, :warning, :error, :informative
 *   `:size` :normal (default), :wide
 * 
 *   You should include two children of this node:
 * 
 *   (when show-notification?
 *  (ui-notification {:onClose (fn [] (om/transact! this `[(my-close-notification-mutation)]))}
 *    (ui-notification-title {} title-nodes)
 *    (ui-notification-body {} body-nodes)))
 * 
 *   The `title-nodes` can be any inline DOM (or just a string), as can body-nodes.
 */
untangled.ui.elements.ui_notification = om.next.factory.cljs$core$IFn$_invoke$arity$1(untangled.ui.elements.Notification);
/**
 * Render an HTML progress element. Props is a normal clj(s) map with React/HTML attributes plus:
 * 
 *   `:className` - additional class stylings to apply to the progress element
 *   `:max` - The integer value that we're targeting for completion
 *   `:value` - The integer value of where we're at
 *   `:size` :regular (default), :dense
 * 
 *   If neither max or value are given, it will render as an indeterminate progress (in progress, but not complete).
 *   
 */
untangled.ui.elements.ui_progress = (function untangled$ui$elements$ui_progress(p__50691){
var map__50695 = p__50691;
var map__50695__$1 = ((((!((map__50695 == null)))?((((map__50695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50695):map__50695);
var props = map__50695__$1;
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50695__$1,cljs.core.cst$kw$max);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50695__$1,cljs.core.cst$kw$value);
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50695__$1,cljs.core.cst$kw$className,"");
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50695__$1,cljs.core.cst$kw$size);
var legal_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dense,null], null), null);
var classes = (function (){var G__50697 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-progress ")].join('');
if(cljs.core.contains_QMARK_(legal_sizes,size)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-progress--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))].join('');
} else {
return G__50697;
}
})();
var attrs = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$className,classes,cljs.core.array_seq([cljs.core.cst$kw$aria_DASH_hidden,false], 0));
return om.dom.progress(cljs.core.clj__GT_js(attrs));
});
/**
 * Render a container for tabs using a vector of icons (each a map of attributes).
 * Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 * all parameters are optional
 * 
 */
untangled.ui.elements.ui_tabs = (function untangled$ui$elements$ui_tabs(var_args){
var args__8730__auto__ = [];
var len__8723__auto___50704 = arguments.length;
var i__8724__auto___50705 = (0);
while(true){
if((i__8724__auto___50705 < len__8723__auto___50704)){
args__8730__auto__.push((arguments[i__8724__auto___50705]));

var G__50706 = (i__8724__auto___50705 + (1));
i__8724__auto___50705 = G__50706;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_tabs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.elements.ui_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__50700,children){
var map__50701 = p__50700;
var map__50701__$1 = ((((!((map__50701 == null)))?((((map__50701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50701):map__50701);
var props = map__50701__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50701__$1,cljs.core.cst$kw$className,"");
var user_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$className,"");
var top_level_class = (function (){var G__50703 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-tabs")].join('');
return G__50703;
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,({"className": top_level_class}),children);
});

untangled.ui.elements.ui_tabs.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_tabs.cljs$lang$applyTo = (function (seq50698){
var G__50699 = cljs.core.first(seq50698);
var seq50698__$1 = cljs.core.next(seq50698);
return untangled.ui.elements.ui_tabs.cljs$core$IFn$_invoke$arity$variadic(G__50699,seq50698__$1);
});

/**
 * Render an icon button for use inside an icon bar.
 * 
 *   `:label` - A string of text to describe the tab action
 *   `:kind` :default, :primary, or :contrast - changes the aesthetic style of a tab
 *   `:active` true or false (default) - Usually used to show that your in that tab's view.
 * 
 *   TODO: Add the ability to wrap this in a menu so you can show more than just the text.
 *   
 */
untangled.ui.elements.ui_tab = (function untangled$ui$elements$ui_tab(p__50707){
var map__50711 = p__50707;
var map__50711__$1 = ((((!((map__50711 == null)))?((((map__50711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50711.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50711):map__50711);
var props = map__50711__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50711__$1,cljs.core.cst$kw$className,"");
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50711__$1,cljs.core.cst$kw$label,"");
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50711__$1,cljs.core.cst$kw$kind);
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50711__$1,cljs.core.cst$kw$active);
var legal_kinds = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$primary,null,cljs.core.cst$kw$contrast,null], null), null);
var classes = (function (){var G__50713 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-tab "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?" is-active ":null))].join('');
if(cljs.core.contains_QMARK_(legal_kinds,kind)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50713),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-tab--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(kind))].join('');
} else {
return G__50713;
}
})();
return om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": classes, "type": "button"}),cljs.core.array_seq([label], 0));
});
/**
 * Render an icon and text for when you can't display anything when you normally would have a collection of things.
 * 
 *   `:glyph` - An icon glyph name to render a given icon.
 *   `:title` - A string to announce what's missing
 *   `:message` - A string to instruct the user what to do next
 *   
 */
untangled.ui.elements.ui_empty_state = (function untangled$ui$elements$ui_empty_state(p__50714){
var map__50717 = p__50714;
var map__50717__$1 = ((((!((map__50717 == null)))?((((map__50717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50717.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50717):map__50717);
var props = map__50717__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50717__$1,cljs.core.cst$kw$className,"u-absolute--middle-center");
var glyph = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50717__$1,cljs.core.cst$kw$glyph,cljs.core.cst$kw$help);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50717__$1,cljs.core.cst$kw$title,"Nothing to see yet");
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50717__$1,cljs.core.cst$kw$message,"");
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": className}),cljs.core.array_seq([untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$size,cljs.core.cst$kw$huge,cljs.core.cst$kw$color,cljs.core.cst$kw$passive], null),untangled.icons.icon(glyph)),om.dom.h1.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([title], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-message"}),cljs.core.array_seq([message], 0))], 0));
});

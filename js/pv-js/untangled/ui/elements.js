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
var len__8723__auto___49271 = arguments.length;
var i__8724__auto___49272 = (0);
while(true){
if((i__8724__auto___49272 < len__8723__auto___49271)){
args__8730__auto__.push((arguments[i__8724__auto___49272]));

var G__49273 = (i__8724__auto___49272 + (1));
i__8724__auto___49272 = G__49273;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_fader.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.elements.ui_fader.cljs$core$IFn$_invoke$arity$variadic = (function (p__49268,children){
var map__49269 = p__49268;
var map__49269__$1 = ((((!((map__49269 == null)))?((((map__49269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49269.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49269):map__49269);
var props = map__49269__$1;
var inline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49269__$1,cljs.core.cst$kw$inline_QMARK_);
var visible = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49269__$1,cljs.core.cst$kw$visible);
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

untangled.ui.elements.ui_fader.cljs$lang$applyTo = (function (seq49266){
var G__49267 = cljs.core.first(seq49266);
var seq49266__$1 = cljs.core.next(seq49266);
return untangled.ui.elements.ui_fader.cljs$core$IFn$_invoke$arity$variadic(G__49267,seq49266__$1);
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
return cljs.core.some((function (p1__49278_SHARP_){
return untangled.ui.elements.react_instance_QMARK_(react_class,p1__49278_SHARP_);
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

var x49289_49323 = untangled.ui.elements.IFrame.prototype;
x49289_49323.componentWillUpdate = ((function (x49289_49323){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___49324 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___49325 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___49324,next_ident__10196__auto___49325)){
var idxr__10197__auto___49326 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___49326 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___49326),((function (idxr__10197__auto___49326,ident__10195__auto___49324,next_ident__10196__auto___49325,this__10191__auto__,x49289_49323){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___49324], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___49325], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___49326,ident__10195__auto___49324,next_ident__10196__auto___49325,this__10191__auto__,x49289_49323))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x49289_49323))
;

x49289_49323.shouldComponentUpdate = ((function (x49289_49323){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__49291 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__49291);
} else {
return G__49291;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__49296 = this__10191__auto__.state;
var G__49297 = "omcljs$state";
return goog.object.get(G__49296,G__49297);
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
});})(x49289_49323))
;

x49289_49323.componentWillUnmount = ((function (x49289_49323){
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
});})(x49289_49323))
;

x49289_49323.isMounted = ((function (x49289_49323){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x49289_49323))
;

x49289_49323.componentWillMount = ((function (x49289_49323){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x49289_49323))
;

x49289_49323.initLocalState = ((function (x49289_49323){
return (function (){
var this$ = this;
var ret__10169__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,(0)], null);
var obj49300 = {"omcljs$state":ret__10169__auto__};
return obj49300;
});})(x49289_49323))
;

x49289_49323.componentDidMount = ((function (x49289_49323){
return (function (){
var this$ = this;
var frame_body = ReactDOM.findDOMNode(this$).contentDocument.body;
var child = cljs.core.cst$kw$child.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
var e1 = document.createElement("div");
frame_body.appendChild(e1);

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$frame_DASH_component,e1);

return untangled.ui.elements.update_frame_content(this$,child);
});})(x49289_49323))
;

x49289_49323.componentDidUpdate = ((function (x49289_49323){
return (function (prev_props__10181__auto__,prev_state__10182__auto__){
var this__10180__auto__ = this;
var this$ = this__10180__auto__;
var pprops = om.next._prev_props(prev_props__10181__auto__,this__10180__auto__);
var pstate = goog.object.get(prev_state__10182__auto__,"omcljs$previousState");
var child_49394 = cljs.core.cst$kw$child.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
untangled.ui.elements.update_frame_content(this$,child_49394);

return om.next.clear_prev_props_BANG_(this__10180__auto__);
});})(x49289_49323))
;

x49289_49323.render = ((function (x49289_49323){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_49301 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_49302 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_49303 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_49304 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_49305 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{return om.dom.iframe(cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(om.next.props(this$),cljs.core.cst$kw$child)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_49305;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_49304;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_49303;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_49302;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_49301;
}});})(x49289_49323))
;


untangled.ui.elements.IFrame.prototype.constructor = untangled.ui.elements.IFrame;

untangled.ui.elements.IFrame.prototype.constructor.displayName = "untangled.ui.elements/IFrame";

untangled.ui.elements.IFrame.prototype.om$isComponent = true;

var x49314_49395 = untangled.ui.elements.IFrame;


var x49317_49396 = untangled.ui.elements.IFrame.prototype;


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
untangled.ui.elements.ui_avatar = (function untangled$ui$elements$ui_avatar(p__49397,child){
var map__49401 = p__49397;
var map__49401__$1 = ((((!((map__49401 == null)))?((((map__49401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49401):map__49401);
var props = map__49401__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49401__$1,cljs.core.cst$kw$className,"");
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49401__$1,cljs.core.cst$kw$color);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49401__$1,cljs.core.cst$kw$size);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49401__$1,cljs.core.cst$kw$kind);
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$primary,null,cljs.core.cst$kw$accent,null], null), null);
var legal_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$large,null,cljs.core.cst$kw$huge,null,cljs.core.cst$kw$xlarge,null,cljs.core.cst$kw$medium,null], null), null);
var legal_kinds = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bordered,null], null), null);
var user_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$className,"");
var classes = (function (){var G__49405 = user_classes;
var G__49405__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49405),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-avatar")].join('')
;
var G__49405__$2 = ((cljs.core.contains_QMARK_(legal_colors,color))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49405__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-avatar--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color))].join(''):G__49405__$1);
var G__49405__$3 = ((cljs.core.contains_QMARK_(legal_sizes,size))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49405__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-avatar--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))].join(''):G__49405__$2);
if(cljs.core.contains_QMARK_(legal_kinds,kind)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49405__$3),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-avatar--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(kind))].join('');
} else {
return G__49405__$3;
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
var len__8723__auto___49423 = arguments.length;
var i__8724__auto___49424 = (0);
while(true){
if((i__8724__auto___49424 < len__8723__auto___49423)){
args__8730__auto__.push((arguments[i__8724__auto___49424]));

var G__49425 = (i__8724__auto___49424 + (1));
i__8724__auto___49424 = G__49425;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_badge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.elements.ui_badge.cljs$core$IFn$_invoke$arity$variadic = (function (p__49418,children){
var map__49419 = p__49418;
var map__49419__$1 = ((((!((map__49419 == null)))?((((map__49419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49419.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49419):map__49419);
var props = map__49419__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49419__$1,cljs.core.cst$kw$className,"");
var props__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(props,cljs.core.cst$kw$className,cljs.core.str," c-badge");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.span,cljs.core.clj__GT_js(props__$1),children);
});

untangled.ui.elements.ui_badge.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_badge.cljs$lang$applyTo = (function (seq49416){
var G__49417 = cljs.core.first(seq49416);
var seq49416__$1 = cljs.core.next(seq49416);
return untangled.ui.elements.ui_badge.cljs$core$IFn$_invoke$arity$variadic(G__49417,seq49416__$1);
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
var len__8723__auto___49449 = arguments.length;
var i__8724__auto___49450 = (0);
while(true){
if((i__8724__auto___49450 < len__8723__auto___49449)){
args__8730__auto__.push((arguments[i__8724__auto___49450]));

var G__49451 = (i__8724__auto___49450 + (1));
i__8724__auto___49450 = G__49451;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__49444,children){
var map__49445 = p__49444;
var map__49445__$1 = ((((!((map__49445 == null)))?((((map__49445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49445.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49445):map__49445);
var attrs = map__49445__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49445__$1,cljs.core.cst$kw$className,"");
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49445__$1,cljs.core.cst$kw$size);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49445__$1,cljs.core.cst$kw$color);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49445__$1,cljs.core.cst$kw$shape);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49445__$1,cljs.core.cst$kw$disabled);
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49445__$1,cljs.core.cst$kw$active);
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$primary,null,cljs.core.cst$kw$accent,null], null), null);
var legal_shapes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$round,null,cljs.core.cst$kw$wide,null], null), null);
var legal_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$small,null], null), null);
var button_label = ((function (legal_colors,legal_shapes,legal_sizes,map__49445,map__49445__$1,attrs,className,size,color,shape,disabled,active){
return (function (text){
return om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-button__content"}),cljs.core.array_seq([text], 0));
});})(legal_colors,legal_shapes,legal_sizes,map__49445,map__49445__$1,attrs,className,size,color,shape,disabled,active))
;
var fixed_children = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (legal_colors,legal_shapes,legal_sizes,button_label,map__49445,map__49445__$1,attrs,className,size,color,shape,disabled,active){
return (function (c){
if(typeof c === 'string'){
return button_label(c);
} else {
return c;
}
});})(legal_colors,legal_shapes,legal_sizes,button_label,map__49445,map__49445__$1,attrs,className,size,color,shape,disabled,active))
,children);
var classes = (function (){var G__49447 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-button")].join('');
var G__49447__$1 = (cljs.core.truth_(active)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49447),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-active")].join(''):G__49447);
var G__49447__$2 = ((cljs.core.contains_QMARK_(legal_colors,color))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49447__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-button--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color))].join(''):G__49447__$1);
var G__49447__$3 = ((cljs.core.contains_QMARK_(legal_shapes,shape))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49447__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-button--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(shape))].join(''):G__49447__$2);
if(cljs.core.contains_QMARK_(legal_sizes,size)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49447__$3),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-button--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))].join('');
} else {
return G__49447__$3;
}
})();
var attrs__$1 = (function (){var G__49448 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(attrs,cljs.core.cst$kw$className,classes,cljs.core.array_seq([cljs.core.cst$kw$type,"button"], 0));
var G__49448__$1 = (cljs.core.truth_(disabled)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49448,cljs.core.cst$kw$aria_DASH_disabled,"true"):G__49448);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49448__$1,cljs.core.cst$kw$active,cljs.core.array_seq([cljs.core.cst$kw$color,cljs.core.cst$kw$shape,cljs.core.cst$kw$size], 0));

})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.button,cljs.core.clj__GT_js(attrs__$1),fixed_children);
});

untangled.ui.elements.ui_flat_button.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_flat_button.cljs$lang$applyTo = (function (seq49442){
var G__49443 = cljs.core.first(seq49442);
var seq49442__$1 = cljs.core.next(seq49442);
return untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic(G__49443,seq49442__$1);
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
var len__8723__auto___49520 = arguments.length;
var i__8724__auto___49521 = (0);
while(true){
if((i__8724__auto___49521 < len__8723__auto___49520)){
args__8730__auto__.push((arguments[i__8724__auto___49521]));

var G__49522 = (i__8724__auto___49521 + (1));
i__8724__auto___49521 = G__49522;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__49508,children){
var map__49509 = p__49508;
var map__49509__$1 = ((((!((map__49509 == null)))?((((map__49509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49509):map__49509);
var props = map__49509__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49509__$1,cljs.core.cst$kw$className,"");
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49509__$1,cljs.core.cst$kw$size);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49509__$1,cljs.core.cst$kw$color);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49509__$1,cljs.core.cst$kw$shape);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49509__$1,cljs.core.cst$kw$disabled);
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49509__$1,cljs.core.cst$kw$active);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(untangled.ui.elements.ui_flat_button,cljs.core.update.cljs$core$IFn$_invoke$arity$4(props,cljs.core.cst$kw$className,cljs.core.str," c-button--raised"),children);
});

untangled.ui.elements.ui_button.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_button.cljs$lang$applyTo = (function (seq49493){
var G__49494 = cljs.core.first(seq49493);
var seq49493__$1 = cljs.core.next(seq49493);
return untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic(G__49494,seq49493__$1);
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
var len__8723__auto___49537 = arguments.length;
var i__8724__auto___49538 = (0);
while(true){
if((i__8724__auto___49538 < len__8723__auto___49537)){
args__8730__auto__.push((arguments[i__8724__auto___49538]));

var G__49539 = (i__8724__auto___49538 + (1));
i__8724__auto___49538 = G__49539;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_circular_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.elements.ui_circular_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__49534,children){
var map__49535 = p__49534;
var map__49535__$1 = ((((!((map__49535 == null)))?((((map__49535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49535):map__49535);
var props = map__49535__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49535__$1,cljs.core.cst$kw$className,"");
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49535__$1,cljs.core.cst$kw$size);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49535__$1,cljs.core.cst$kw$color);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49535__$1,cljs.core.cst$kw$disabled);
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49535__$1,cljs.core.cst$kw$active);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(untangled.ui.elements.ui_flat_button,cljs.core.update.cljs$core$IFn$_invoke$arity$4(props,cljs.core.cst$kw$className,cljs.core.str," c-button--circular"),children);
});

untangled.ui.elements.ui_circular_button.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_circular_button.cljs$lang$applyTo = (function (seq49532){
var G__49533 = cljs.core.first(seq49532);
var seq49532__$1 = cljs.core.next(seq49532);
return untangled.ui.elements.ui_circular_button.cljs$core$IFn$_invoke$arity$variadic(G__49533,seq49532__$1);
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
var len__8723__auto___49546 = arguments.length;
var i__8724__auto___49547 = (0);
while(true){
if((i__8724__auto___49547 < len__8723__auto___49546)){
args__8730__auto__.push((arguments[i__8724__auto___49547]));

var G__49548 = (i__8724__auto___49547 + (1));
i__8724__auto___49547 = G__49548;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic = (function (p__49542,children){
var map__49543 = p__49542;
var map__49543__$1 = ((((!((map__49543 == null)))?((((map__49543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49543.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49543):map__49543);
var attrs = map__49543__$1;
var media = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49543__$1,cljs.core.cst$kw$media);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49543__$1,cljs.core.cst$kw$menu);
var media_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49543__$1,cljs.core.cst$kw$media_DASH_type);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49543__$1,cljs.core.cst$kw$color);
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49543__$1,cljs.core.cst$kw$actions);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49543__$1,cljs.core.cst$kw$title);
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49543__$1,cljs.core.cst$kw$className);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49543__$1,cljs.core.cst$kw$size);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49543__$1,cljs.core.cst$kw$kind);
var image_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49543__$1,cljs.core.cst$kw$image_DASH_position);
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49543__$1,cljs.core.cst$kw$image);
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
var classes = (function (){var G__49545 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-card "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_class),cljs.core.str.cljs$core$IFn$_invoke$arity$1(className__$1)].join('');
var G__49545__$1 = ((cljs.core.contains_QMARK_(legal_kinds,kind))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49545),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-card--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(kind))].join(''):G__49545);
var G__49545__$2 = ((cljs.core.contains_QMARK_(legal_colors,color))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49545__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-card--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color))].join(''):G__49545__$1);
if(cljs.core.contains_QMARK_(legal_sizes,size)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49545__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-card--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))].join('');
} else {
return G__49545__$2;
}
})();
var attributes = cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,classes], null)], 0)),cljs.core.cst$kw$title,cljs.core.array_seq([cljs.core.cst$kw$kind,cljs.core.cst$kw$color,cljs.core.cst$kw$size,cljs.core.cst$kw$actions,cljs.core.cst$kw$image,cljs.core.cst$kw$image_DASH_position,cljs.core.cst$kw$media_DASH_type,cljs.core.cst$kw$media,cljs.core.cst$kw$menu], 0)));
var image_src = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("url("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
var background_image = cljs.core.clj__GT_js((cljs.core.truth_(image)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundImage,image_src], null)], 0)):null));
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.array_seq([(cljs.core.truth_(media)?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-card__media")].join('')}),cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(media_type,cljs.core.cst$kw$image))?om.dom.img(({"className": "c-card__media-content", "src": media})):null)], 0)):null),(cljs.core.truth_(title)?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-card__title"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(image)?" c-card__title--image":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(image_position)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-card__title--image-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(image_position))].join(''):null))].join('')}),cljs.core.array_seq([om.dom.h1.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-card__title-text"}),cljs.core.array_seq([title], 0))], 0)):null),(cljs.core.truth_(children)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,({"className": "c-card__supporting-text"}),children):null),(cljs.core.truth_(actions)?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-card__actions"}),cljs.core.array_seq([actions], 0)):null),(cljs.core.truth_(menu)?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-card__menu"}),cljs.core.array_seq([untangled.ui.menu.ui_menu.cljs$core$IFn$_invoke$arity$variadic(menu,cljs.core.array_seq([cljs.core.cst$kw$style,cljs.core.cst$kw$icon], 0))], 0)):null),om.dom.style.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_class),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" .c-card__title { background-image: url("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image),cljs.core.str.cljs$core$IFn$_invoke$arity$1("); }")].join('')], 0))], 0));
});

untangled.ui.elements.ui_card.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_card.cljs$lang$applyTo = (function (seq49540){
var G__49541 = cljs.core.first(seq49540);
var seq49540__$1 = cljs.core.next(seq49540);
return untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(G__49541,seq49540__$1);
});

var render_input_49675 = (function (p__49648){
var map__49649 = p__49648;
var map__49649__$1 = ((((!((map__49649 == null)))?((((map__49649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49649.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49649):map__49649);
var props = map__49649__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49649__$1,cljs.core.cst$kw$type);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49649__$1,cljs.core.cst$kw$id);
return om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(function (){var G__49654 = cljs.core.clj__GT_js(props);
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__49654) : om.dom.input.call(null,G__49654));
})(),om.dom.label.cljs$core$IFn$_invoke$arity$variadic(({"htmlFor": id}),cljs.core.array_seq(["\u00A0"], 0))], 0));
});
/**
 * Render a HTML radio (without the label). Props is a normal clj(s) map with React/HTML attributes plus:
 * 
 *  `:className` - additional class stylings to apply to the top level of the checkbox
 *  `:id` - Required. A unique ID. Will not render correctly without one.
 *  
 */
untangled.ui.elements.ui_radio = ((function (render_input_49675){
return (function untangled$ui$elements$ui_radio(p__49655){
var map__49660 = p__49655;
var map__49660__$1 = ((((!((map__49660 == null)))?((((map__49660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49660):map__49660);
var props = map__49660__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49660__$1,cljs.core.cst$kw$className);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49660__$1,cljs.core.cst$kw$id);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("DOM ID is required on radio"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("id")].join('')));
}

var classes = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-radio")].join('');
var attrs = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$type,"radio",cljs.core.array_seq([cljs.core.cst$kw$className,classes], 0));
return render_input_49675(attrs);
});})(render_input_49675))
;

/**
 * Render a checkbox (not the label). Props is a normal clj(s) map with React/HTML attributes plus:
 * 
 *  `:className` - additional class stylings to apply to the top level of the checkbox
 *  `:id` string - Unique DOM ID. Required for correct rendering.
 *  `:checked` - true, false, or :partial
 *  
 */
untangled.ui.elements.ui_checkbox = ((function (render_input_49675){
return (function untangled$ui$elements$ui_checkbox(p__49664){
var map__49669 = p__49664;
var map__49669__$1 = ((((!((map__49669 == null)))?((((map__49669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49669):map__49669);
var props = map__49669__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49669__$1,cljs.core.cst$kw$id);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49669__$1,cljs.core.cst$kw$state);
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49669__$1,cljs.core.cst$kw$checked);
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49669__$1,cljs.core.cst$kw$className);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("DOM ID is required on checkbox"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("id")].join('')));
}

var classes = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-checkbox"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$partial,checked))?" is-indeterminate":null))].join('');
var checked__$1 = cljs.core.boolean$(checked);
var attrs = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$type,"checkbox",cljs.core.array_seq([cljs.core.cst$kw$checked,checked__$1,cljs.core.cst$kw$className,classes], 0));
return render_input_49675(attrs);
});})(render_input_49675))
;
/**
 * Render a checkbox (not the label). Props is a normal clj(s) map with React/HTML attributes plus:
 * 
 *  `:className` - additional class stylings to apply to the top level of the checkbox
 *  `:id` string - Unique DOM ID. Required for correct rendering.
 *  `:checked` - true, false, or :partial
 *  
 */
untangled.ui.elements.ui_switch = (function untangled$ui$elements$ui_switch(p__49704){
var map__49709 = p__49704;
var map__49709__$1 = ((((!((map__49709 == null)))?((((map__49709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49709.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49709):map__49709);
var props = map__49709__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49709__$1,cljs.core.cst$kw$id);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49709__$1,cljs.core.cst$kw$state);
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49709__$1,cljs.core.cst$kw$checked);
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49709__$1,cljs.core.cst$kw$className);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49709__$1,cljs.core.cst$kw$disabled);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("DOM ID is required on checkbox"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("id")].join('')));
}

var classes = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-switch__input")].join('');
var type = "checkbox";
var checked__$1 = cljs.core.boolean$(checked);
var attrs = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$type,"checkbox",cljs.core.array_seq([cljs.core.cst$kw$checked,checked__$1,cljs.core.cst$kw$className,classes], 0));
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-switch"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(disabled)?" is-disabled":null))].join('')}),cljs.core.array_seq([(function (){var G__49711 = cljs.core.clj__GT_js(attrs);
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__49711) : om.dom.input.call(null,G__49711));
})(),om.dom.label(({"className": "c-switch__paddle", "htmlFor": id, "aria-hidden": false}))], 0));
});
/**
 * Render an input field. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   `:size` :regular (default), :small, :medium, :large
 *   `:state` :valid (default), :invalid, or :error
 *   
 */
untangled.ui.elements.ui_field = (function untangled$ui$elements$ui_field(p__49717,placeholder){
var map__49724 = p__49717;
var map__49724__$1 = ((((!((map__49724 == null)))?((((map__49724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49724):map__49724);
var attrs = map__49724__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49724__$1,cljs.core.cst$kw$size,"");
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49724__$1,cljs.core.cst$kw$state);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49724__$1,cljs.core.cst$kw$type);
var legal_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$large,null,cljs.core.cst$kw$medium,null,cljs.core.cst$kw$small,null], null), null);
var legal_states = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$invalid,null,cljs.core.cst$kw$error,null], null), null);
var user_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$className,"");
var user_type = (cljs.core.truth_(type)?type:"text");
var has = ((function (legal_sizes,legal_states,user_classes,user_type,map__49724,map__49724__$1,attrs,size,state,type){
return (function (s){
return cljs.core.contains_QMARK_(state,s);
});})(legal_sizes,legal_states,user_classes,user_type,map__49724,map__49724__$1,attrs,size,state,type))
;
var classes = (function (){var G__49726 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-field ")].join('');
var G__49726__$1 = ((cljs.core.contains_QMARK_(legal_sizes,size))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49726),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-field--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))].join(''):G__49726);
if(cljs.core.contains_QMARK_(legal_states,state)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49726__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(state))].join('');
} else {
return G__49726__$1;
}
})();
var attrs__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(attrs,cljs.core.cst$kw$className,classes,cljs.core.array_seq([cljs.core.cst$kw$placeholder,cljs.core.name(placeholder),cljs.core.cst$kw$aria_DASH_label,cljs.core.name(placeholder),cljs.core.cst$kw$type,user_type], 0)),cljs.core.cst$kw$size,cljs.core.array_seq([cljs.core.cst$kw$state], 0));
var G__49727 = cljs.core.clj__GT_js(attrs__$1);
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__49727) : om.dom.input.call(null,G__49727));
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
var args49732 = [];
var len__8723__auto___49746 = arguments.length;
var i__8724__auto___49747 = (0);
while(true){
if((i__8724__auto___49747 < len__8723__auto___49746)){
args49732.push((arguments[i__8724__auto___49747]));

var G__49748 = (i__8724__auto___49747 + (1));
i__8724__auto___49747 = G__49748;
continue;
} else {
}
break;
}

var G__49736 = args49732.length;
switch (G__49736) {
case 1:
return untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49732.length)].join('')));

}
});

untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$1 = (function (p__49737){
var map__49738 = p__49737;
var map__49738__$1 = ((((!((map__49738 == null)))?((((map__49738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49738.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49738):map__49738);
var props = map__49738__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49738__$1,cljs.core.cst$kw$className,"");
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49738__$1,cljs.core.cst$kw$color);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49738__$1,cljs.core.cst$kw$size);
var glyph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49738__$1,cljs.core.cst$kw$glyph);
return untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2(props,null);
});

untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2 = (function (p__49740,child){
var map__49741 = p__49740;
var map__49741__$1 = ((((!((map__49741 == null)))?((((map__49741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49741.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49741):map__49741);
var props = map__49741__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49741__$1,cljs.core.cst$kw$className,"");
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49741__$1,cljs.core.cst$kw$color);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49741__$1,cljs.core.cst$kw$size);
var glyph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49741__$1,cljs.core.cst$kw$glyph);
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$passive,null,cljs.core.cst$kw$active,null], null), null);
var legal_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$large,null,cljs.core.cst$kw$huge,null,cljs.core.cst$kw$xlarge,null,cljs.core.cst$kw$medium,null,cljs.core.cst$kw$small,null], null), null);
var user_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$className,"");
var classes = (function (){var G__49743 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-icon")].join('');
var G__49743__$1 = ((cljs.core.contains_QMARK_(legal_colors,color))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49743),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color))].join(''):G__49743);
if(cljs.core.contains_QMARK_(legal_sizes,size)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49743__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-icon--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))].join('');
} else {
return G__49743__$1;
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
var len__8723__auto___49767 = arguments.length;
var i__8724__auto___49768 = (0);
while(true){
if((i__8724__auto___49768 < len__8723__auto___49767)){
args__8730__auto__.push((arguments[i__8724__auto___49768]));

var G__49769 = (i__8724__auto___49768 + (1));
i__8724__auto___49768 = G__49769;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_icon_bar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.elements.ui_icon_bar.cljs$core$IFn$_invoke$arity$variadic = (function (p__49763,children){
var map__49764 = p__49763;
var map__49764__$1 = ((((!((map__49764 == null)))?((((map__49764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49764):map__49764);
var props = map__49764__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49764__$1,cljs.core.cst$kw$className,"");
var orientation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49764__$1,cljs.core.cst$kw$orientation);
var shifting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49764__$1,cljs.core.cst$kw$shifting);
var user_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$className,"");
var top_level_class = (function (){var G__49766 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-iconbar")].join('');
var G__49766__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,cljs.core.cst$kw$vertical))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49766),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-iconbar--rail")].join(''):G__49766);
if(cljs.core.truth_(shifting)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49766__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-iconbar--shifting")].join('');
} else {
return G__49766__$1;
}
})();
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({}),cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.nav,({"className": top_level_class}),children)], 0));
});

untangled.ui.elements.ui_icon_bar.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_icon_bar.cljs$lang$applyTo = (function (seq49759){
var G__49760 = cljs.core.first(seq49759);
var seq49759__$1 = cljs.core.next(seq49759);
return untangled.ui.elements.ui_icon_bar.cljs$core$IFn$_invoke$arity$variadic(G__49760,seq49759__$1);
});

/**
 * Render an icon button for use inside an icon bar.
 * 
 *   `:glyph` - An icon glyph name to render that given icon.
 *   `:label` - A string to label that icon.
 *   `:active` true or false (default) - Usually used to show that your in that action's view.
 */
untangled.ui.elements.ui_icon_bar_item = (function untangled$ui$elements$ui_icon_bar_item(p__49777){
var map__49780 = p__49777;
var map__49780__$1 = ((((!((map__49780 == null)))?((((map__49780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49780):map__49780);
var props = map__49780__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49780__$1,cljs.core.cst$kw$className,"");
var glyph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49780__$1,cljs.core.cst$kw$glyph);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49780__$1,cljs.core.cst$kw$label,"");
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49780__$1,cljs.core.cst$kw$active);
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
var len__8723__auto___49791 = arguments.length;
var i__8724__auto___49792 = (0);
while(true){
if((i__8724__auto___49792 < len__8723__auto___49791)){
args__8730__auto__.push((arguments[i__8724__auto___49792]));

var G__49793 = (i__8724__auto___49792 + (1));
i__8724__auto___49792 = G__49793;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.elements.ui_label.cljs$core$IFn$_invoke$arity$variadic = (function (p__49787,children){
var map__49788 = p__49787;
var map__49788__$1 = ((((!((map__49788 == null)))?((((map__49788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49788):map__49788);
var props = map__49788__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49788__$1,cljs.core.cst$kw$className,"");
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49788__$1,cljs.core.cst$kw$color);
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$primary,null,cljs.core.cst$kw$accent,null], null), null);
var classes = (function (){var G__49790 = className;
var G__49790__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49790),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-label")].join('')
;
if(cljs.core.contains_QMARK_(legal_colors,color)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49790__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-label--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color))].join('');
} else {
return G__49790__$1;
}
})();
var props__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,cljs.core.cst$kw$color),cljs.core.cst$kw$className,classes);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.span,cljs.core.clj__GT_js(props__$1),children);
});

untangled.ui.elements.ui_label.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_label.cljs$lang$applyTo = (function (seq49784){
var G__49785 = cljs.core.first(seq49784);
var seq49784__$1 = cljs.core.next(seq49784);
return untangled.ui.elements.ui_label.cljs$core$IFn$_invoke$arity$variadic(G__49785,seq49784__$1);
});

/**
 * Render an icon or a short string within an avatar. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   `:color` :none (default), :primary :accent
 */
untangled.ui.elements.ui_loader = (function untangled$ui$elements$ui_loader(p__49803){
var map__49808 = p__49803;
var map__49808__$1 = ((((!((map__49808 == null)))?((((map__49808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49808):map__49808);
var props = map__49808__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49808__$1,cljs.core.cst$kw$className,"");
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49808__$1,cljs.core.cst$kw$color);
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$primary,null,cljs.core.cst$kw$accent,null], null), null);
var user_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$className,"");
var classes = (function (){var G__49814 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-loader")].join('');
if(cljs.core.contains_QMARK_(legal_colors,color)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49814),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-loader--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color))].join('');
} else {
return G__49814;
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
var len__8723__auto___49841 = arguments.length;
var i__8724__auto___49842 = (0);
while(true){
if((i__8724__auto___49842 < len__8723__auto___49841)){
args__8730__auto__.push((arguments[i__8724__auto___49842]));

var G__49844 = (i__8724__auto___49842 + (1));
i__8724__auto___49842 = G__49844;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_message.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.elements.ui_message.cljs$core$IFn$_invoke$arity$variadic = (function (p__49833,children){
var map__49834 = p__49833;
var map__49834__$1 = ((((!((map__49834 == null)))?((((map__49834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49834):map__49834);
var props = map__49834__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49834__$1,cljs.core.cst$kw$className,"");
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49834__$1,cljs.core.cst$kw$color);
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$primary,null,cljs.core.cst$kw$accent,null], null), null);
var classes = (function (){var G__49836 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-message")].join('');
if(cljs.core.contains_QMARK_(legal_colors,color)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49836),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-message--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color))].join('');
} else {
return G__49836;
}
})();
var props__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$className,classes),cljs.core.cst$kw$color);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,cljs.core.clj__GT_js(props__$1),children);
});

untangled.ui.elements.ui_message.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_message.cljs$lang$applyTo = (function (seq49831){
var G__49832 = cljs.core.first(seq49831);
var seq49831__$1 = cljs.core.next(seq49831);
return untangled.ui.elements.ui_message.cljs$core$IFn$_invoke$arity$variadic(G__49832,seq49831__$1);
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

var x49849_49865 = untangled.ui.elements.DialogTitle.prototype;
x49849_49865.componentWillUpdate = ((function (x49849_49865){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___49866 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___49867 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___49866,next_ident__10196__auto___49867)){
var idxr__10197__auto___49869 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___49869 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___49869),((function (idxr__10197__auto___49869,ident__10195__auto___49866,next_ident__10196__auto___49867,this__10191__auto__,x49849_49865){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___49866], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___49867], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___49869,ident__10195__auto___49866,next_ident__10196__auto___49867,this__10191__auto__,x49849_49865))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x49849_49865))
;

x49849_49865.shouldComponentUpdate = ((function (x49849_49865){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__49851 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__49851);
} else {
return G__49851;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__49856 = this__10191__auto__.state;
var G__49857 = "omcljs$state";
return goog.object.get(G__49856,G__49857);
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
});})(x49849_49865))
;

x49849_49865.componentWillUnmount = ((function (x49849_49865){
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
});})(x49849_49865))
;

x49849_49865.componentDidUpdate = ((function (x49849_49865){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x49849_49865))
;

x49849_49865.isMounted = ((function (x49849_49865){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x49849_49865))
;

x49849_49865.componentWillMount = ((function (x49849_49865){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x49849_49865))
;

x49849_49865.render = ((function (x49849_49865){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_49858 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_49859 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_49860 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_49861 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_49862 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-dialog__title"}),cljs.core.array_seq([om.next.children(this$)], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_49862;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_49861;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_49860;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_49859;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_49858;
}});})(x49849_49865))
;


untangled.ui.elements.DialogTitle.prototype.constructor = untangled.ui.elements.DialogTitle;

untangled.ui.elements.DialogTitle.prototype.constructor.displayName = "untangled.ui.elements/DialogTitle";

untangled.ui.elements.DialogTitle.prototype.om$isComponent = true;

var x49863_49890 = untangled.ui.elements.DialogTitle;


var x49864_49891 = untangled.ui.elements.DialogTitle.prototype;


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

var x49904_49941 = untangled.ui.elements.DialogBody.prototype;
x49904_49941.componentWillUpdate = ((function (x49904_49941){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___49942 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___49943 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___49942,next_ident__10196__auto___49943)){
var idxr__10197__auto___49944 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___49944 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___49944),((function (idxr__10197__auto___49944,ident__10195__auto___49942,next_ident__10196__auto___49943,this__10191__auto__,x49904_49941){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___49942], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___49943], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___49944,ident__10195__auto___49942,next_ident__10196__auto___49943,this__10191__auto__,x49904_49941))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x49904_49941))
;

x49904_49941.shouldComponentUpdate = ((function (x49904_49941){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__49919 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__49919);
} else {
return G__49919;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__49928 = this__10191__auto__.state;
var G__49929 = "omcljs$state";
return goog.object.get(G__49928,G__49929);
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
});})(x49904_49941))
;

x49904_49941.componentWillUnmount = ((function (x49904_49941){
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
});})(x49904_49941))
;

x49904_49941.componentDidUpdate = ((function (x49904_49941){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x49904_49941))
;

x49904_49941.isMounted = ((function (x49904_49941){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x49904_49941))
;

x49904_49941.componentWillMount = ((function (x49904_49941){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x49904_49941))
;

x49904_49941.render = ((function (x49904_49941){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_49934 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_49935 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_49936 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_49937 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_49938 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-dialog__content"}),cljs.core.array_seq([om.next.children(this$)], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_49938;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_49937;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_49936;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_49935;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_49934;
}});})(x49904_49941))
;


untangled.ui.elements.DialogBody.prototype.constructor = untangled.ui.elements.DialogBody;

untangled.ui.elements.DialogBody.prototype.constructor.displayName = "untangled.ui.elements/DialogBody";

untangled.ui.elements.DialogBody.prototype.om$isComponent = true;

var x49939_49959 = untangled.ui.elements.DialogBody;


var x49940_49960 = untangled.ui.elements.DialogBody.prototype;


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

var x49971_49993 = untangled.ui.elements.DialogActions.prototype;
x49971_49993.componentWillUpdate = ((function (x49971_49993){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___49994 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___49995 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___49994,next_ident__10196__auto___49995)){
var idxr__10197__auto___49996 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___49996 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___49996),((function (idxr__10197__auto___49996,ident__10195__auto___49994,next_ident__10196__auto___49995,this__10191__auto__,x49971_49993){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___49994], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___49995], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___49996,ident__10195__auto___49994,next_ident__10196__auto___49995,this__10191__auto__,x49971_49993))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x49971_49993))
;

x49971_49993.shouldComponentUpdate = ((function (x49971_49993){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__49973 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__49973);
} else {
return G__49973;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__49978 = this__10191__auto__.state;
var G__49979 = "omcljs$state";
return goog.object.get(G__49978,G__49979);
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
});})(x49971_49993))
;

x49971_49993.componentWillUnmount = ((function (x49971_49993){
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
});})(x49971_49993))
;

x49971_49993.componentDidUpdate = ((function (x49971_49993){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x49971_49993))
;

x49971_49993.isMounted = ((function (x49971_49993){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x49971_49993))
;

x49971_49993.componentWillMount = ((function (x49971_49993){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x49971_49993))
;

x49971_49993.render = ((function (x49971_49993){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_49986 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_49987 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_49988 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_49989 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_49990 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-dialog__actions"}),cljs.core.array_seq([om.next.children(this$)], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_49990;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_49989;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_49988;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_49987;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_49986;
}});})(x49971_49993))
;


untangled.ui.elements.DialogActions.prototype.constructor = untangled.ui.elements.DialogActions;

untangled.ui.elements.DialogActions.prototype.constructor.displayName = "untangled.ui.elements/DialogActions";

untangled.ui.elements.DialogActions.prototype.om$isComponent = true;

var x49991_50017 = untangled.ui.elements.DialogActions;


var x49992_50019 = untangled.ui.elements.DialogActions.prototype;


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

var x50035_50103 = untangled.ui.elements.Dialog.prototype;
x50035_50103.componentWillUpdate = ((function (x50035_50103){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___50114 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___50115 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___50114,next_ident__10196__auto___50115)){
var idxr__10197__auto___50132 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___50132 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___50132),((function (idxr__10197__auto___50132,ident__10195__auto___50114,next_ident__10196__auto___50115,this__10191__auto__,x50035_50103){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___50114], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___50115], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___50132,ident__10195__auto___50114,next_ident__10196__auto___50115,this__10191__auto__,x50035_50103))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x50035_50103))
;

x50035_50103.shouldComponentUpdate = ((function (x50035_50103){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__50043 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__50043);
} else {
return G__50043;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__50050 = this__10191__auto__.state;
var G__50051 = "omcljs$state";
return goog.object.get(G__50050,G__50051);
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
});})(x50035_50103))
;

x50035_50103.componentWillUnmount = ((function (x50035_50103){
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
});})(x50035_50103))
;

x50035_50103.componentDidUpdate = ((function (x50035_50103){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x50035_50103))
;

x50035_50103.isMounted = ((function (x50035_50103){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x50035_50103))
;

x50035_50103.componentWillMount = ((function (x50035_50103){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x50035_50103))
;

x50035_50103.render = ((function (x50035_50103){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_50065 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_50066 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_50067 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_50068 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_50069 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__50072 = om.next.props(this$);
var map__50072__$1 = ((((!((map__50072 == null)))?((((map__50072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50072.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50072):map__50072);
var props = map__50072__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50072__$1,cljs.core.cst$kw$key,"");
var full_screen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50072__$1,cljs.core.cst$kw$full_DASH_screen);
var visible = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50072__$1,cljs.core.cst$kw$visible);
var modal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50072__$1,cljs.core.cst$kw$modal);
var onClose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50072__$1,cljs.core.cst$kw$onClose);
var children = om.next.children(this$);
var title = untangled.ui.elements.first_node(untangled.ui.elements.DialogTitle,children);
var content = untangled.ui.elements.first_node(untangled.ui.elements.DialogBody,children);
var actions = untangled.ui.elements.first_node(untangled.ui.elements.DialogActions,children);
var state = (cljs.core.truth_(visible)?" is-active":null);
var user_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$className,"");
var classes = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-dialog"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(state),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(full_screen)?" c-dialog--fullscreen":null))].join('');
var dialog_dom = om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-dialog")].join(''), "className": classes}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-dialog__card"}),cljs.core.array_seq([(cljs.core.truth_(title)?title:null),(cljs.core.truth_(content)?content:null),(cljs.core.truth_(actions)?actions:null)], 0))], 0));
if(cljs.core.truth_(modal)){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": key}),cljs.core.array_seq([dialog_dom,om.dom.div(({"onKeyPress": ((function (map__50072,map__50072__$1,props,key,full_screen,visible,modal,onClose,children,title,content,actions,state,user_classes,classes,dialog_dom,_STAR_reconciler_STAR_50065,_STAR_depth_STAR_50066,_STAR_shared_STAR_50067,_STAR_instrument_STAR_50068,_STAR_parent_STAR_50069,this$,this__10190__auto__,x50035_50103){
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
});})(map__50072,map__50072__$1,props,key,full_screen,visible,modal,onClose,children,title,content,actions,state,user_classes,classes,dialog_dom,_STAR_reconciler_STAR_50065,_STAR_depth_STAR_50066,_STAR_shared_STAR_50067,_STAR_instrument_STAR_50068,_STAR_parent_STAR_50069,this$,this__10190__auto__,x50035_50103))
, "onClick": ((function (map__50072,map__50072__$1,props,key,full_screen,visible,modal,onClose,children,title,content,actions,state,user_classes,classes,dialog_dom,_STAR_reconciler_STAR_50065,_STAR_depth_STAR_50066,_STAR_shared_STAR_50067,_STAR_instrument_STAR_50068,_STAR_parent_STAR_50069,this$,this__10190__auto__,x50035_50103){
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
});})(map__50072,map__50072__$1,props,key,full_screen,visible,modal,onClose,children,title,content,actions,state,user_classes,classes,dialog_dom,_STAR_reconciler_STAR_50065,_STAR_depth_STAR_50066,_STAR_shared_STAR_50067,_STAR_instrument_STAR_50068,_STAR_parent_STAR_50069,this$,this__10190__auto__,x50035_50103))
, "className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-backdrop"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)].join('')}))], 0));
} else {
return dialog_dom;
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_50069;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_50068;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_50067;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_50066;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_50065;
}});})(x50035_50103))
;


untangled.ui.elements.Dialog.prototype.constructor = untangled.ui.elements.Dialog;

untangled.ui.elements.Dialog.prototype.constructor.displayName = "untangled.ui.elements/Dialog";

untangled.ui.elements.Dialog.prototype.om$isComponent = true;

var x50087_50240 = untangled.ui.elements.Dialog;


var x50088_50241 = untangled.ui.elements.Dialog.prototype;


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

var x50257_50303 = untangled.ui.elements.NotificationTitle.prototype;
x50257_50303.componentWillUpdate = ((function (x50257_50303){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___50306 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___50307 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___50306,next_ident__10196__auto___50307)){
var idxr__10197__auto___50314 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___50314 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___50314),((function (idxr__10197__auto___50314,ident__10195__auto___50306,next_ident__10196__auto___50307,this__10191__auto__,x50257_50303){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___50306], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___50307], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___50314,ident__10195__auto___50306,next_ident__10196__auto___50307,this__10191__auto__,x50257_50303))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x50257_50303))
;

x50257_50303.shouldComponentUpdate = ((function (x50257_50303){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__50275 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__50275);
} else {
return G__50275;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__50283 = this__10191__auto__.state;
var G__50284 = "omcljs$state";
return goog.object.get(G__50283,G__50284);
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
});})(x50257_50303))
;

x50257_50303.componentWillUnmount = ((function (x50257_50303){
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
});})(x50257_50303))
;

x50257_50303.componentDidUpdate = ((function (x50257_50303){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x50257_50303))
;

x50257_50303.isMounted = ((function (x50257_50303){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x50257_50303))
;

x50257_50303.componentWillMount = ((function (x50257_50303){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x50257_50303))
;

x50257_50303.render = ((function (x50257_50303){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_50289 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_50290 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_50291 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_50292 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_50293 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__50294 = om.next.props(this$);
var map__50294__$1 = ((((!((map__50294 == null)))?((((map__50294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50294.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50294):map__50294);
var props = map__50294__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50294__$1,cljs.core.cst$kw$key,"");
return om.dom.h1.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-notification_heading", "key": key}),cljs.core.array_seq([om.next.children(this$)], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_50293;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_50292;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_50291;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_50290;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_50289;
}});})(x50257_50303))
;


untangled.ui.elements.NotificationTitle.prototype.constructor = untangled.ui.elements.NotificationTitle;

untangled.ui.elements.NotificationTitle.prototype.constructor.displayName = "untangled.ui.elements/NotificationTitle";

untangled.ui.elements.NotificationTitle.prototype.om$isComponent = true;

var x50299_50367 = untangled.ui.elements.NotificationTitle;


var x50300_50368 = untangled.ui.elements.NotificationTitle.prototype;


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

var x50386_50424 = untangled.ui.elements.NotificationBody.prototype;
x50386_50424.componentWillUpdate = ((function (x50386_50424){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___50425 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___50426 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___50425,next_ident__10196__auto___50426)){
var idxr__10197__auto___50435 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___50435 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___50435),((function (idxr__10197__auto___50435,ident__10195__auto___50425,next_ident__10196__auto___50426,this__10191__auto__,x50386_50424){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___50425], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___50426], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___50435,ident__10195__auto___50425,next_ident__10196__auto___50426,this__10191__auto__,x50386_50424))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x50386_50424))
;

x50386_50424.shouldComponentUpdate = ((function (x50386_50424){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__50396 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__50396);
} else {
return G__50396;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__50403 = this__10191__auto__.state;
var G__50404 = "omcljs$state";
return goog.object.get(G__50403,G__50404);
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
});})(x50386_50424))
;

x50386_50424.componentWillUnmount = ((function (x50386_50424){
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
});})(x50386_50424))
;

x50386_50424.componentDidUpdate = ((function (x50386_50424){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x50386_50424))
;

x50386_50424.isMounted = ((function (x50386_50424){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x50386_50424))
;

x50386_50424.componentWillMount = ((function (x50386_50424){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x50386_50424))
;

x50386_50424.render = ((function (x50386_50424){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_50411 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_50412 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_50413 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_50414 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_50415 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{return om.dom.p.cljs$core$IFn$_invoke$arity$variadic(({}),cljs.core.array_seq([om.next.children(this$)], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_50415;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_50414;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_50413;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_50412;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_50411;
}});})(x50386_50424))
;


untangled.ui.elements.NotificationBody.prototype.constructor = untangled.ui.elements.NotificationBody;

untangled.ui.elements.NotificationBody.prototype.constructor.displayName = "untangled.ui.elements/NotificationBody";

untangled.ui.elements.NotificationBody.prototype.om$isComponent = true;

var x50416_50495 = untangled.ui.elements.NotificationBody;


var x50417_50497 = untangled.ui.elements.NotificationBody.prototype;


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

var x50519_50565 = untangled.ui.elements.Notification.prototype;
x50519_50565.componentWillUpdate = ((function (x50519_50565){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___50568 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___50569 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___50568,next_ident__10196__auto___50569)){
var idxr__10197__auto___50574 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___50574 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___50574),((function (idxr__10197__auto___50574,ident__10195__auto___50568,next_ident__10196__auto___50569,this__10191__auto__,x50519_50565){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___50568], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___50569], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___50574,ident__10195__auto___50568,next_ident__10196__auto___50569,this__10191__auto__,x50519_50565))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x50519_50565))
;

x50519_50565.shouldComponentUpdate = ((function (x50519_50565){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__50531 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__50531);
} else {
return G__50531;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__50541 = this__10191__auto__.state;
var G__50542 = "omcljs$state";
return goog.object.get(G__50541,G__50542);
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
});})(x50519_50565))
;

x50519_50565.componentWillUnmount = ((function (x50519_50565){
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
});})(x50519_50565))
;

x50519_50565.componentDidUpdate = ((function (x50519_50565){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x50519_50565))
;

x50519_50565.isMounted = ((function (x50519_50565){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x50519_50565))
;

x50519_50565.componentWillMount = ((function (x50519_50565){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x50519_50565))
;

x50519_50565.render = ((function (x50519_50565){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_50543 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_50544 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_50545 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_50546 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_50547 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__50548 = om.next.props(this$);
var map__50548__$1 = ((((!((map__50548 == null)))?((((map__50548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50548.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50548):map__50548);
var props = map__50548__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50548__$1,cljs.core.cst$kw$key,"");
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50548__$1,cljs.core.cst$kw$width);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50548__$1,cljs.core.cst$kw$kind);
var onClose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50548__$1,cljs.core.cst$kw$onClose);
var children = om.next.children(this$);
var title = untangled.ui.elements.first_node(untangled.ui.elements.NotificationTitle,children);
var content = untangled.ui.elements.first_node(untangled.ui.elements.NotificationBody,children);
var legal_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$informative,null,cljs.core.cst$kw$warning,null,cljs.core.cst$kw$success,null,cljs.core.cst$kw$error,null], null), null);
var legal_widths = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wide,null], null), null);
var user_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$className,"");
var classes = (function (){var G__50550 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-notification")].join('');
var G__50550__$1 = ((cljs.core.contains_QMARK_(legal_types,kind))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50550),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-notification--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(kind))].join(''):G__50550);
if(cljs.core.contains_QMARK_(legal_widths,width)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50550__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-notification--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(width))].join('');
} else {
return G__50550__$1;
}
})();
var type_icon = (function (){var G__50555 = (((kind instanceof cljs.core.Keyword))?kind.fqn:null);
switch (G__50555) {
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
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": classes, "key": key}),cljs.core.array_seq([type_icon,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-notification_content"}),cljs.core.array_seq([(cljs.core.truth_(title)?title:null),(cljs.core.truth_(content)?content:null)], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__50548,map__50548__$1,props,key,width,kind,onClose,children,title,content,legal_types,legal_widths,user_classes,classes,type_icon,_STAR_reconciler_STAR_50543,_STAR_depth_STAR_50544,_STAR_shared_STAR_50545,_STAR_instrument_STAR_50546,_STAR_parent_STAR_50547,this$,this__10190__auto__,x50519_50565){
return (function (evt){
if(cljs.core.truth_(onClose)){
return (onClose.cljs$core$IFn$_invoke$arity$0 ? onClose.cljs$core$IFn$_invoke$arity$0() : onClose.call(null));
} else {
return null;
}
});})(map__50548,map__50548__$1,props,key,width,kind,onClose,children,title,content,legal_types,legal_widths,user_classes,classes,type_icon,_STAR_reconciler_STAR_50543,_STAR_depth_STAR_50544,_STAR_shared_STAR_50545,_STAR_instrument_STAR_50546,_STAR_parent_STAR_50547,this$,this__10190__auto__,x50519_50565))
, "type": "button", "className": "c-button c-button--icon"}),cljs.core.array_seq([untangled.icons.icon(cljs.core.cst$kw$close)], 0))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_50547;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_50546;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_50545;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_50544;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_50543;
}});})(x50519_50565))
;


untangled.ui.elements.Notification.prototype.constructor = untangled.ui.elements.Notification;

untangled.ui.elements.Notification.prototype.constructor.displayName = "untangled.ui.elements/Notification";

untangled.ui.elements.Notification.prototype.om$isComponent = true;

var x50559_50657 = untangled.ui.elements.Notification;


var x50562_50660 = untangled.ui.elements.Notification.prototype;


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
untangled.ui.elements.ui_progress = (function untangled$ui$elements$ui_progress(p__50673){
var map__50685 = p__50673;
var map__50685__$1 = ((((!((map__50685 == null)))?((((map__50685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50685):map__50685);
var props = map__50685__$1;
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50685__$1,cljs.core.cst$kw$max);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50685__$1,cljs.core.cst$kw$value);
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50685__$1,cljs.core.cst$kw$className,"");
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50685__$1,cljs.core.cst$kw$size);
var legal_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dense,null], null), null);
var classes = (function (){var G__50688 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-progress ")].join('');
if(cljs.core.contains_QMARK_(legal_sizes,size)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50688),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-progress--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))].join('');
} else {
return G__50688;
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
var len__8723__auto___50722 = arguments.length;
var i__8724__auto___50723 = (0);
while(true){
if((i__8724__auto___50723 < len__8723__auto___50722)){
args__8730__auto__.push((arguments[i__8724__auto___50723]));

var G__50726 = (i__8724__auto___50723 + (1));
i__8724__auto___50723 = G__50726;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_tabs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.elements.ui_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__50709,children){
var map__50710 = p__50709;
var map__50710__$1 = ((((!((map__50710 == null)))?((((map__50710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50710.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50710):map__50710);
var props = map__50710__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50710__$1,cljs.core.cst$kw$className,"");
var user_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$className,"");
var top_level_class = (function (){var G__50716 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-tabs")].join('');
return G__50716;
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,({"className": top_level_class}),children);
});

untangled.ui.elements.ui_tabs.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_tabs.cljs$lang$applyTo = (function (seq50703){
var G__50704 = cljs.core.first(seq50703);
var seq50703__$1 = cljs.core.next(seq50703);
return untangled.ui.elements.ui_tabs.cljs$core$IFn$_invoke$arity$variadic(G__50704,seq50703__$1);
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
untangled.ui.elements.ui_tab = (function untangled$ui$elements$ui_tab(p__50739){
var map__50747 = p__50739;
var map__50747__$1 = ((((!((map__50747 == null)))?((((map__50747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50747):map__50747);
var props = map__50747__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50747__$1,cljs.core.cst$kw$className,"");
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50747__$1,cljs.core.cst$kw$label,"");
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50747__$1,cljs.core.cst$kw$kind);
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50747__$1,cljs.core.cst$kw$active);
var legal_kinds = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$primary,null,cljs.core.cst$kw$contrast,null], null), null);
var classes = (function (){var G__50749 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-tab "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?" is-active ":null))].join('');
if(cljs.core.contains_QMARK_(legal_kinds,kind)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50749),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-tab--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(kind))].join('');
} else {
return G__50749;
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
untangled.ui.elements.ui_empty_state = (function untangled$ui$elements$ui_empty_state(p__50760){
var map__50767 = p__50760;
var map__50767__$1 = ((((!((map__50767 == null)))?((((map__50767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50767):map__50767);
var props = map__50767__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50767__$1,cljs.core.cst$kw$className,"u-absolute--middle-center");
var glyph = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50767__$1,cljs.core.cst$kw$glyph,cljs.core.cst$kw$help);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50767__$1,cljs.core.cst$kw$title,"Nothing to see yet");
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50767__$1,cljs.core.cst$kw$message,"");
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": className}),cljs.core.array_seq([untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$size,cljs.core.cst$kw$huge,cljs.core.cst$kw$color,cljs.core.cst$kw$passive], null),untangled.icons.icon(glyph)),om.dom.h1.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([title], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-message"}),cljs.core.array_seq([message], 0))], 0));
});

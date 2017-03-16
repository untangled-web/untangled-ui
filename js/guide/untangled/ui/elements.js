// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.ui.elements');
goog.require('cljs.core');
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
var args__28878__auto__ = [];
var len__28871__auto___704372 = arguments.length;
var i__28872__auto___704373 = (0);
while(true){
if((i__28872__auto___704373 < len__28871__auto___704372)){
args__28878__auto__.push((arguments[i__28872__auto___704373]));

var G__704374 = (i__28872__auto___704373 + (1));
i__28872__auto___704373 = G__704374;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_fader.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

untangled.ui.elements.ui_fader.cljs$core$IFn$_invoke$arity$variadic = (function (p__704368,children){
var map__704369 = p__704368;
var map__704369__$1 = ((((!((map__704369 == null)))?((((map__704369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704369):map__704369);
var props = map__704369__$1;
var inline_QMARK_ = cljs.core.get.call(null,map__704369__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));
var visible = cljs.core.get.call(null,map__704369__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
var className = (function (){var or__27650__auto__ = new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return "";
}
})();
var classes = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-fade-out"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(visible)?" u-fade-in":null))].join('');
var wrapper = (cljs.core.truth_(inline_QMARK_)?om.dom.span:om.dom.div);
var attrs = cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"visible","visible",-1024216805)),new cljs.core.Keyword(null,"className","className",-1983287057),classes));
return cljs.core.apply.call(null,wrapper,attrs,children);
});

untangled.ui.elements.ui_fader.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_fader.cljs$lang$applyTo = (function (seq704355){
var G__704356 = cljs.core.first.call(null,seq704355);
var seq704355__$1 = cljs.core.next.call(null,seq704355);
return untangled.ui.elements.ui_fader.cljs$core$IFn$_invoke$arity$variadic(G__704356,seq704355__$1);
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

if(cljs.core._EQ_.call(null,react_instance.type,react_class)){
return react_instance;
} else {
return null;
}
});
/**
 * Finds (and returns) the first child that is an instance of the given React class (or nil if not found).
 */
untangled.ui.elements.first_node = (function untangled$ui$elements$first_node(react_class,sequence_of_react_instances){
return cljs.core.some.call(null,(function (p1__704386_SHARP_){
return untangled.ui.elements.react_instance_QMARK_.call(null,react_class,p1__704386_SHARP_);
}),sequence_of_react_instances);
});
untangled.ui.elements.update_frame_content = (function untangled$ui$elements$update_frame_content(this$,child){
var frame_component = om.next.get_state.call(null,this$,new cljs.core.Keyword(null,"frame-component","frame-component",-1147234187));
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
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.elements.IFrame.prototype = goog.object.clone(React.Component.prototype);

var x704395_704431 = untangled.ui.elements.IFrame.prototype;
x704395_704431.componentWillUpdate = ((function (x704395_704431){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___704437 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___704438 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___704437,next_ident__29856__auto___704438)){
var idxr__29857__auto___704442 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___704442 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___704442),((function (idxr__29857__auto___704442,ident__29855__auto___704437,next_ident__29856__auto___704438,this__29851__auto__,x704395_704431){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___704437], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___704438], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___704442,ident__29855__auto___704437,next_ident__29856__auto___704438,this__29851__auto__,x704395_704431))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x704395_704431))
;

x704395_704431.shouldComponentUpdate = ((function (x704395_704431){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__704402 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__704402);
} else {
return G__704402;
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
});})(x704395_704431))
;

x704395_704431.componentWillUnmount = ((function (x704395_704431){
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
});})(x704395_704431))
;

x704395_704431.isMounted = ((function (x704395_704431){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x704395_704431))
;

x704395_704431.componentWillMount = ((function (x704395_704431){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x704395_704431))
;

x704395_704431.initLocalState = ((function (x704395_704431){
return (function (){
var this$ = this;
var ret__29829__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),(0)], null);
var obj704411 = {"omcljs$state":ret__29829__auto__};
return obj704411;
});})(x704395_704431))
;

x704395_704431.componentDidMount = ((function (x704395_704431){
return (function (){
var this$ = this;
var frame_body = ReactDOM.findDOMNode(this$).contentDocument.body;
var child = new cljs.core.Keyword(null,"child","child",623967545).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var e1 = document.createElement("div");
frame_body.appendChild(e1);

om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"frame-component","frame-component",-1147234187),e1);

return untangled.ui.elements.update_frame_content.call(null,this$,child);
});})(x704395_704431))
;

x704395_704431.componentDidUpdate = ((function (x704395_704431){
return (function (prev_props__29841__auto__,prev_state__29842__auto__){
var this__29840__auto__ = this;
var this$ = this__29840__auto__;
var pprops = om.next._prev_props.call(null,prev_props__29841__auto__,this__29840__auto__);
var pstate = goog.object.get(prev_state__29842__auto__,"omcljs$previousState");
var child_704466 = new cljs.core.Keyword(null,"child","child",623967545).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
untangled.ui.elements.update_frame_content.call(null,this$,child_704466);

return om.next.clear_prev_props_BANG_.call(null,this__29840__auto__);
});})(x704395_704431))
;

x704395_704431.render = ((function (x704395_704431){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_704415 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_704416 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_704417 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_704418 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_704419 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{return om.dom.iframe.call(null,cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,om.next.props.call(null,this$),new cljs.core.Keyword(null,"child","child",623967545))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_704419;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_704418;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_704417;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_704416;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_704415;
}});})(x704395_704431))
;


untangled.ui.elements.IFrame.prototype.constructor = untangled.ui.elements.IFrame;

untangled.ui.elements.IFrame.prototype.constructor.displayName = "untangled.ui.elements/IFrame";

untangled.ui.elements.IFrame.prototype.om$isComponent = true;

var x704424_704485 = untangled.ui.elements.IFrame;


var x704426_704486 = untangled.ui.elements.IFrame.prototype;


untangled.ui.elements.IFrame.cljs$lang$type = true;

untangled.ui.elements.IFrame.cljs$lang$ctorStr = "untangled.ui.elements/IFrame";

untangled.ui.elements.IFrame.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.elements/IFrame");
});
untangled.ui.elements.ui_iframe = (function untangled$ui$elements$ui_iframe(props,child){
return om.next.factory.call(null,untangled.ui.elements.IFrame).call(null,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"child","child",623967545),child));
});
/**
 * Render an icon or a short string within an avatar. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   `:color` - :none (default), :primary, :accent
 *   `:size` - :regular (default), :medium, :large, :xlarge:, :huge
 *   `:kind` - :none (default), :bordered
 *   
 */
untangled.ui.elements.ui_avatar = (function untangled$ui$elements$ui_avatar(p__704505,child){
var map__704511 = p__704505;
var map__704511__$1 = ((((!((map__704511 == null)))?((((map__704511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704511.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704511):map__704511);
var props = map__704511__$1;
var className = cljs.core.get.call(null,map__704511__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var color = cljs.core.get.call(null,map__704511__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var size = cljs.core.get.call(null,map__704511__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var kind = cljs.core.get.call(null,map__704511__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),null,new cljs.core.Keyword(null,"accent","accent",-1826298468),null], null), null);
var legal_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"large","large",-196820544),null,new cljs.core.Keyword(null,"huge","huge",1683634816),null,new cljs.core.Keyword(null,"xlarge","xlarge",-905930014),null,new cljs.core.Keyword(null,"medium","medium",-1864319384),null], null), null);
var legal_kinds = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bordered","bordered",-832486681),null], null), null);
var user_classes = cljs.core.get.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var classes = (function (){var G__704514 = user_classes;
var G__704514__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__704514),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-avatar")].join('')
;
var G__704514__$2 = ((cljs.core.contains_QMARK_.call(null,legal_colors,color))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__704514__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-avatar--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color))].join(''):G__704514__$1);
var G__704514__$3 = ((cljs.core.contains_QMARK_.call(null,legal_sizes,size))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__704514__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-avatar--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size))].join(''):G__704514__$2);
if(cljs.core.contains_QMARK_.call(null,legal_kinds,kind)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__704514__$3),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-avatar--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,kind))].join('');
} else {
return G__704514__$3;
}
})();
var props__$1 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),classes),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"kind","kind",-717265803));
return om.dom.span.call(null,cljs.core.clj__GT_js.call(null,props__$1),child);
});
/**
 * Render the given children within a badge. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   `(ui-badge {} "7")`
 *   
 */
untangled.ui.elements.ui_badge = (function untangled$ui$elements$ui_badge(var_args){
var args__28878__auto__ = [];
var len__28871__auto___704539 = arguments.length;
var i__28872__auto___704540 = (0);
while(true){
if((i__28872__auto___704540 < len__28871__auto___704539)){
args__28878__auto__.push((arguments[i__28872__auto___704540]));

var G__704544 = (i__28872__auto___704540 + (1));
i__28872__auto___704540 = G__704544;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_badge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

untangled.ui.elements.ui_badge.cljs$core$IFn$_invoke$arity$variadic = (function (p__704533,children){
var map__704534 = p__704533;
var map__704534__$1 = ((((!((map__704534 == null)))?((((map__704534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704534):map__704534);
var props = map__704534__$1;
var className = cljs.core.get.call(null,map__704534__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var props__$1 = cljs.core.update.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.str," c-badge");
return cljs.core.apply.call(null,om.dom.span,cljs.core.clj__GT_js.call(null,props__$1),children);
});

untangled.ui.elements.ui_badge.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_badge.cljs$lang$applyTo = (function (seq704527){
var G__704528 = cljs.core.first.call(null,seq704527);
var seq704527__$1 = cljs.core.next.call(null,seq704527);
return untangled.ui.elements.ui_badge.cljs$core$IFn$_invoke$arity$variadic(G__704528,seq704527__$1);
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
var args__28878__auto__ = [];
var len__28871__auto___704566 = arguments.length;
var i__28872__auto___704567 = (0);
while(true){
if((i__28872__auto___704567 < len__28871__auto___704566)){
args__28878__auto__.push((arguments[i__28872__auto___704567]));

var G__704568 = (i__28872__auto___704567 + (1));
i__28872__auto___704567 = G__704568;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__704559,children){
var map__704560 = p__704559;
var map__704560__$1 = ((((!((map__704560 == null)))?((((map__704560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704560):map__704560);
var attrs = map__704560__$1;
var className = cljs.core.get.call(null,map__704560__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var size = cljs.core.get.call(null,map__704560__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var color = cljs.core.get.call(null,map__704560__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var shape = cljs.core.get.call(null,map__704560__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var disabled = cljs.core.get.call(null,map__704560__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var active = cljs.core.get.call(null,map__704560__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),null,new cljs.core.Keyword(null,"accent","accent",-1826298468),null], null), null);
var legal_shapes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"round","round",2009433328),null,new cljs.core.Keyword(null,"wide","wide",-151772487),null], null), null);
var legal_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"small","small",2133478704),null], null), null);
var button_label = ((function (legal_colors,legal_shapes,legal_sizes,map__704560,map__704560__$1,attrs,className,size,color,shape,disabled,active){
return (function (text){
return om.dom.span.call(null,({"className": "c-button__content"}),text);
});})(legal_colors,legal_shapes,legal_sizes,map__704560,map__704560__$1,attrs,className,size,color,shape,disabled,active))
;
var fixed_children = cljs.core.map.call(null,((function (legal_colors,legal_shapes,legal_sizes,button_label,map__704560,map__704560__$1,attrs,className,size,color,shape,disabled,active){
return (function (c){
if(typeof c === 'string'){
return button_label.call(null,c);
} else {
return c;
}
});})(legal_colors,legal_shapes,legal_sizes,button_label,map__704560,map__704560__$1,attrs,className,size,color,shape,disabled,active))
,children);
var classes = (function (){var G__704562 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-button")].join('');
var G__704562__$1 = (cljs.core.truth_(active)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__704562),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-active")].join(''):G__704562);
var G__704562__$2 = ((cljs.core.contains_QMARK_.call(null,legal_colors,color))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__704562__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-button--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color))].join(''):G__704562__$1);
var G__704562__$3 = ((cljs.core.contains_QMARK_.call(null,legal_shapes,shape))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__704562__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-button--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,shape))].join(''):G__704562__$2);
if(cljs.core.contains_QMARK_.call(null,legal_sizes,size)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__704562__$3),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-button--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size))].join('');
} else {
return G__704562__$3;
}
})();
var attrs__$1 = (function (){var G__704564 = cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"className","className",-1983287057),classes,new cljs.core.Keyword(null,"type","type",1174270348),"button");
var G__704564__$1 = (cljs.core.truth_(disabled)?cljs.core.assoc.call(null,G__704564,new cljs.core.Keyword(null,"aria-disabled","aria-disabled",-667357160),"true"):G__704564);
return cljs.core.dissoc.call(null,G__704564__$1,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"size","size",1098693007));

})();
return cljs.core.apply.call(null,om.dom.button,cljs.core.clj__GT_js.call(null,attrs__$1),fixed_children);
});

untangled.ui.elements.ui_flat_button.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_flat_button.cljs$lang$applyTo = (function (seq704556){
var G__704557 = cljs.core.first.call(null,seq704556);
var seq704556__$1 = cljs.core.next.call(null,seq704556);
return untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic(G__704557,seq704556__$1);
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
var args__28878__auto__ = [];
var len__28871__auto___704604 = arguments.length;
var i__28872__auto___704605 = (0);
while(true){
if((i__28872__auto___704605 < len__28871__auto___704604)){
args__28878__auto__.push((arguments[i__28872__auto___704605]));

var G__704606 = (i__28872__auto___704605 + (1));
i__28872__auto___704605 = G__704606;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__704600,children){
var map__704601 = p__704600;
var map__704601__$1 = ((((!((map__704601 == null)))?((((map__704601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704601):map__704601);
var props = map__704601__$1;
var className = cljs.core.get.call(null,map__704601__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var size = cljs.core.get.call(null,map__704601__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var color = cljs.core.get.call(null,map__704601__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var shape = cljs.core.get.call(null,map__704601__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var disabled = cljs.core.get.call(null,map__704601__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var active = cljs.core.get.call(null,map__704601__$1,new cljs.core.Keyword(null,"active","active",1895962068));
return cljs.core.apply.call(null,untangled.ui.elements.ui_flat_button,cljs.core.update.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.str," c-button--raised"),children);
});

untangled.ui.elements.ui_button.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_button.cljs$lang$applyTo = (function (seq704593){
var G__704594 = cljs.core.first.call(null,seq704593);
var seq704593__$1 = cljs.core.next.call(null,seq704593);
return untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic(G__704594,seq704593__$1);
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
var args__28878__auto__ = [];
var len__28871__auto___704645 = arguments.length;
var i__28872__auto___704646 = (0);
while(true){
if((i__28872__auto___704646 < len__28871__auto___704645)){
args__28878__auto__.push((arguments[i__28872__auto___704646]));

var G__704647 = (i__28872__auto___704646 + (1));
i__28872__auto___704646 = G__704647;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_circular_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

untangled.ui.elements.ui_circular_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__704635,children){
var map__704636 = p__704635;
var map__704636__$1 = ((((!((map__704636 == null)))?((((map__704636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704636.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704636):map__704636);
var props = map__704636__$1;
var className = cljs.core.get.call(null,map__704636__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var size = cljs.core.get.call(null,map__704636__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var color = cljs.core.get.call(null,map__704636__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var disabled = cljs.core.get.call(null,map__704636__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var active = cljs.core.get.call(null,map__704636__$1,new cljs.core.Keyword(null,"active","active",1895962068));
return cljs.core.apply.call(null,untangled.ui.elements.ui_flat_button,cljs.core.update.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.str," c-button--circular"),children);
});

untangled.ui.elements.ui_circular_button.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_circular_button.cljs$lang$applyTo = (function (seq704629){
var G__704630 = cljs.core.first.call(null,seq704629);
var seq704629__$1 = cljs.core.next.call(null,seq704629);
return untangled.ui.elements.ui_circular_button.cljs$core$IFn$_invoke$arity$variadic(G__704630,seq704629__$1);
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
var args__28878__auto__ = [];
var len__28871__auto___704677 = arguments.length;
var i__28872__auto___704678 = (0);
while(true){
if((i__28872__auto___704678 < len__28871__auto___704677)){
args__28878__auto__.push((arguments[i__28872__auto___704678]));

var G__704679 = (i__28872__auto___704678 + (1));
i__28872__auto___704678 = G__704679;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic = (function (p__704670,children){
var map__704671 = p__704670;
var map__704671__$1 = ((((!((map__704671 == null)))?((((map__704671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704671):map__704671);
var attrs = map__704671__$1;
var media = cljs.core.get.call(null,map__704671__$1,new cljs.core.Keyword(null,"media","media",-1066138403));
var menu = cljs.core.get.call(null,map__704671__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var media_type = cljs.core.get.call(null,map__704671__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));
var color = cljs.core.get.call(null,map__704671__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var actions = cljs.core.get.call(null,map__704671__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var title = cljs.core.get.call(null,map__704671__$1,new cljs.core.Keyword(null,"title","title",636505583));
var className = cljs.core.get.call(null,map__704671__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
var size = cljs.core.get.call(null,map__704671__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var kind = cljs.core.get.call(null,map__704671__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var image_position = cljs.core.get.call(null,map__704671__$1,new cljs.core.Keyword(null,"image-position","image-position",-2131640298));
var image = cljs.core.get.call(null,map__704671__$1,new cljs.core.Keyword(null,"image","image",-58725096));
if(((kind == null)) || ((kind instanceof cljs.core.Keyword))){
} else {
throw (new Error("Assert failed: (or (nil? kind) (keyword? kind))"));
}

if(((title == null)) || (typeof title === 'string')){
} else {
throw (new Error("Assert failed: (or (nil? title) (string? title))"));
}

var legal_kinds = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transparent","transparent",-2073609949),null,new cljs.core.Keyword(null,"bordered","bordered",-832486681),null,new cljs.core.Keyword(null,"square","square",812434677),null], null), null);
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),null,new cljs.core.Keyword(null,"accent","accent",-1826298468),null], null), null);
var legal_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wide","wide",-151772487),null,new cljs.core.Keyword(null,"expand","expand",595248157),null], null), null);
var id_class = cljs.core.gensym.call(null,"c-card--");
var className__$1 = (function (){var or__27650__auto__ = className;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return "";
}
})();
var classes = (function (){var G__704676 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-card "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_class),cljs.core.str.cljs$core$IFn$_invoke$arity$1(className__$1)].join('');
var G__704676__$1 = ((cljs.core.contains_QMARK_.call(null,legal_kinds,kind))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__704676),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-card--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,kind))].join(''):G__704676);
var G__704676__$2 = ((cljs.core.contains_QMARK_.call(null,legal_colors,color))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__704676__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-card--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color))].join(''):G__704676__$1);
if(cljs.core.contains_QMARK_.call(null,legal_sizes,size)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__704676__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-card--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size))].join('');
} else {
return G__704676__$2;
}
})();
var attributes = cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),classes], null)),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"image-position","image-position",-2131640298),new cljs.core.Keyword(null,"media-type","media-type",-764436129),new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.Keyword(null,"menu","menu",352255198)));
var image_src = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("url("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
var background_image = cljs.core.clj__GT_js.call(null,(cljs.core.truth_(image)?cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundImage","backgroundImage",1109094965),image_src], null)):null));
return om.dom.div.call(null,attributes,(cljs.core.truth_(media)?om.dom.div.call(null,({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-card__media")].join('')}),((cljs.core._EQ_.call(null,media_type,new cljs.core.Keyword(null,"image","image",-58725096)))?om.dom.img.call(null,({"className": "c-card__media-content", "src": media})):null)):null),(cljs.core.truth_(title)?om.dom.div.call(null,({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-card__title"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(image)?" c-card__title--image":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(image_position)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-card__title--image-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,image_position))].join(''):null))].join('')}),om.dom.h1.call(null,({"className": "c-card__title-text"}),title)):null),(cljs.core.truth_(children)?cljs.core.apply.call(null,om.dom.div,({"className": "c-card__supporting-text"}),children):null),(cljs.core.truth_(actions)?om.dom.div.call(null,({"className": "c-card__actions"}),actions):null),(cljs.core.truth_(menu)?om.dom.div.call(null,({"className": "c-card__menu"}),untangled.ui.menu.ui_menu.call(null,menu,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"icon","icon",1679606541))):null),om.dom.style.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_class),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" .c-card__title { background-image: url("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image),cljs.core.str.cljs$core$IFn$_invoke$arity$1("); }")].join('')));
});

untangled.ui.elements.ui_card.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_card.cljs$lang$applyTo = (function (seq704665){
var G__704666 = cljs.core.first.call(null,seq704665);
var seq704665__$1 = cljs.core.next.call(null,seq704665);
return untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(G__704666,seq704665__$1);
});

var render_input_704730 = (function (p__704712){
var map__704713 = p__704712;
var map__704713__$1 = ((((!((map__704713 == null)))?((((map__704713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704713.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704713):map__704713);
var props = map__704713__$1;
var type = cljs.core.get.call(null,map__704713__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var id = cljs.core.get.call(null,map__704713__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return om.dom.span.call(null,null,om.dom.input.call(null,cljs.core.clj__GT_js.call(null,props)),om.dom.label.call(null,({"htmlFor": id}),"\u00A0"));
});
/**
 * Render a HTML radio (without the label). Props is a normal clj(s) map with React/HTML attributes plus:
 * 
 *  `:className` - additional class stylings to apply to the top level of the checkbox
 *  `:id` - Required. A unique ID. Will not render correctly without one.
 *  
 */
untangled.ui.elements.ui_radio = ((function (render_input_704730){
return (function untangled$ui$elements$ui_radio(p__704716){
var map__704719 = p__704716;
var map__704719__$1 = ((((!((map__704719 == null)))?((((map__704719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704719.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704719):map__704719);
var props = map__704719__$1;
var className = cljs.core.get.call(null,map__704719__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
var id = cljs.core.get.call(null,map__704719__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("DOM ID is required on radio"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("id")].join('')));
}

var classes = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-radio")].join('');
var attrs = cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"className","className",-1983287057),classes);
return render_input_704730.call(null,attrs);
});})(render_input_704730))
;

/**
 * Render a checkbox (not the label). Props is a normal clj(s) map with React/HTML attributes plus:
 * 
 *  `:className` - additional class stylings to apply to the top level of the checkbox
 *  `:id` string - Unique DOM ID. Required for correct rendering.
 *  `:checked` - true, false, or :partial
 *  
 */
untangled.ui.elements.ui_checkbox = ((function (render_input_704730){
return (function untangled$ui$elements$ui_checkbox(p__704725){
var map__704728 = p__704725;
var map__704728__$1 = ((((!((map__704728 == null)))?((((map__704728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704728):map__704728);
var props = map__704728__$1;
var id = cljs.core.get.call(null,map__704728__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var state = cljs.core.get.call(null,map__704728__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var checked = cljs.core.get.call(null,map__704728__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var className = cljs.core.get.call(null,map__704728__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("DOM ID is required on checkbox"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("id")].join('')));
}

var classes = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-checkbox"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"partial","partial",241141745),checked))?" is-indeterminate":null))].join('');
var checked__$1 = cljs.core.boolean$.call(null,checked);
var attrs = cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),checked__$1,new cljs.core.Keyword(null,"className","className",-1983287057),classes);
return render_input_704730.call(null,attrs);
});})(render_input_704730))
;
/**
 * Render a checkbox (not the label). Props is a normal clj(s) map with React/HTML attributes plus:
 * 
 *  `:className` - additional class stylings to apply to the top level of the checkbox
 *  `:id` string - Unique DOM ID. Required for correct rendering.
 *  `:checked` - true, false, or :partial
 *  
 */
untangled.ui.elements.ui_switch = (function untangled$ui$elements$ui_switch(p__704783){
var map__704786 = p__704783;
var map__704786__$1 = ((((!((map__704786 == null)))?((((map__704786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704786):map__704786);
var props = map__704786__$1;
var id = cljs.core.get.call(null,map__704786__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var state = cljs.core.get.call(null,map__704786__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var checked = cljs.core.get.call(null,map__704786__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var className = cljs.core.get.call(null,map__704786__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
var disabled = cljs.core.get.call(null,map__704786__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("DOM ID is required on checkbox"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("id")].join('')));
}

var classes = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-switch__input")].join('');
var type = "checkbox";
var checked__$1 = cljs.core.boolean$.call(null,checked);
var attrs = cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),checked__$1,new cljs.core.Keyword(null,"className","className",-1983287057),classes);
return om.dom.div.call(null,({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-switch"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(disabled)?" is-disabled":null))].join('')}),om.dom.input.call(null,cljs.core.clj__GT_js.call(null,attrs)),om.dom.label.call(null,({"className": "c-switch__paddle", "htmlFor": id, "aria-hidden": false})));
});
/**
 * Render an input field. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   `:size` :regular (default), :small, :medium, :large
 *   `:state` :valid (default), :invalid, or :error
 *   
 */
untangled.ui.elements.ui_field = (function untangled$ui$elements$ui_field(p__704813,placeholder){
var map__704818 = p__704813;
var map__704818__$1 = ((((!((map__704818 == null)))?((((map__704818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704818):map__704818);
var attrs = map__704818__$1;
var size = cljs.core.get.call(null,map__704818__$1,new cljs.core.Keyword(null,"size","size",1098693007),"");
var state = cljs.core.get.call(null,map__704818__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var type = cljs.core.get.call(null,map__704818__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var legal_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"large","large",-196820544),null,new cljs.core.Keyword(null,"medium","medium",-1864319384),null,new cljs.core.Keyword(null,"small","small",2133478704),null], null), null);
var legal_states = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
var user_classes = cljs.core.get.call(null,attrs,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var user_type = (cljs.core.truth_(type)?type:"text");
var has = ((function (legal_sizes,legal_states,user_classes,user_type,map__704818,map__704818__$1,attrs,size,state,type){
return (function (s){
return cljs.core.contains_QMARK_.call(null,state,s);
});})(legal_sizes,legal_states,user_classes,user_type,map__704818,map__704818__$1,attrs,size,state,type))
;
var classes = (function (){var G__704820 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-field ")].join('');
var G__704820__$1 = ((cljs.core.contains_QMARK_.call(null,legal_sizes,size))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__704820),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-field--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size))].join(''):G__704820);
if(cljs.core.contains_QMARK_.call(null,legal_states,state)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__704820__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,state))].join('');
} else {
return G__704820__$1;
}
})();
var attrs__$1 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"className","className",-1983287057),classes,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core.name.call(null,placeholder),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),cljs.core.name.call(null,placeholder),new cljs.core.Keyword(null,"type","type",1174270348),user_type),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"state","state",-1988618099));
return om.dom.input.call(null,cljs.core.clj__GT_js.call(null,attrs__$1));
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
var args704831 = [];
var len__28871__auto___704845 = arguments.length;
var i__28872__auto___704846 = (0);
while(true){
if((i__28872__auto___704846 < len__28871__auto___704845)){
args704831.push((arguments[i__28872__auto___704846]));

var G__704847 = (i__28872__auto___704846 + (1));
i__28872__auto___704846 = G__704847;
continue;
} else {
}
break;
}

var G__704833 = args704831.length;
switch (G__704833) {
case 1:
return untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args704831.length)].join('')));

}
});

untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$1 = (function (p__704834){
var map__704835 = p__704834;
var map__704835__$1 = ((((!((map__704835 == null)))?((((map__704835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704835.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704835):map__704835);
var props = map__704835__$1;
var className = cljs.core.get.call(null,map__704835__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var color = cljs.core.get.call(null,map__704835__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var size = cljs.core.get.call(null,map__704835__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var glyph = cljs.core.get.call(null,map__704835__$1,new cljs.core.Keyword(null,"glyph","glyph",2119448117));
return untangled.ui.elements.ui_icon.call(null,props,null);
});

untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2 = (function (p__704838,child){
var map__704839 = p__704838;
var map__704839__$1 = ((((!((map__704839 == null)))?((((map__704839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704839):map__704839);
var props = map__704839__$1;
var className = cljs.core.get.call(null,map__704839__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var color = cljs.core.get.call(null,map__704839__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var size = cljs.core.get.call(null,map__704839__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var glyph = cljs.core.get.call(null,map__704839__$1,new cljs.core.Keyword(null,"glyph","glyph",2119448117));
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"passive","passive",252884080),null,new cljs.core.Keyword(null,"active","active",1895962068),null], null), null);
var legal_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"large","large",-196820544),null,new cljs.core.Keyword(null,"huge","huge",1683634816),null,new cljs.core.Keyword(null,"xlarge","xlarge",-905930014),null,new cljs.core.Keyword(null,"medium","medium",-1864319384),null,new cljs.core.Keyword(null,"small","small",2133478704),null], null), null);
var user_classes = cljs.core.get.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var classes = (function (){var G__704842 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-icon")].join('');
var G__704842__$1 = ((cljs.core.contains_QMARK_.call(null,legal_colors,color))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__704842),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color))].join(''):G__704842);
if(cljs.core.contains_QMARK_.call(null,legal_sizes,size)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__704842__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-icon--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size))].join('');
} else {
return G__704842__$1;
}
})();
var props__$1 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),classes),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"glyph","glyph",2119448117));
return om.dom.span.call(null,cljs.core.clj__GT_js.call(null,props__$1),(cljs.core.truth_(glyph)?untangled.icons.icon.call(null,glyph):child));
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
var args__28878__auto__ = [];
var len__28871__auto___704893 = arguments.length;
var i__28872__auto___704894 = (0);
while(true){
if((i__28872__auto___704894 < len__28871__auto___704893)){
args__28878__auto__.push((arguments[i__28872__auto___704894]));

var G__704895 = (i__28872__auto___704894 + (1));
i__28872__auto___704894 = G__704895;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_icon_bar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

untangled.ui.elements.ui_icon_bar.cljs$core$IFn$_invoke$arity$variadic = (function (p__704889,children){
var map__704890 = p__704889;
var map__704890__$1 = ((((!((map__704890 == null)))?((((map__704890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704890):map__704890);
var props = map__704890__$1;
var className = cljs.core.get.call(null,map__704890__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var orientation = cljs.core.get.call(null,map__704890__$1,new cljs.core.Keyword(null,"orientation","orientation",623557579));
var shifting = cljs.core.get.call(null,map__704890__$1,new cljs.core.Keyword(null,"shifting","shifting",-1091369273));
var user_classes = cljs.core.get.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var top_level_class = (function (){var G__704892 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-iconbar")].join('');
var G__704892__$1 = ((cljs.core._EQ_.call(null,orientation,new cljs.core.Keyword(null,"vertical","vertical",718696748)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__704892),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-iconbar--rail")].join(''):G__704892);
if(cljs.core.truth_(shifting)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__704892__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-iconbar--shifting")].join('');
} else {
return G__704892__$1;
}
})();
return om.dom.div.call(null,({}),cljs.core.apply.call(null,om.dom.nav,({"className": top_level_class}),children));
});

untangled.ui.elements.ui_icon_bar.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_icon_bar.cljs$lang$applyTo = (function (seq704887){
var G__704888 = cljs.core.first.call(null,seq704887);
var seq704887__$1 = cljs.core.next.call(null,seq704887);
return untangled.ui.elements.ui_icon_bar.cljs$core$IFn$_invoke$arity$variadic(G__704888,seq704887__$1);
});

/**
 * Render an icon button for use inside an icon bar.
 * 
 *   `:glyph` - An icon glyph name to render that given icon.
 *   `:label` - A string to label that icon.
 *   `:active` true or false (default) - Usually used to show that your in that action's view.
 */
untangled.ui.elements.ui_icon_bar_item = (function untangled$ui$elements$ui_icon_bar_item(p__704902){
var map__704905 = p__704902;
var map__704905__$1 = ((((!((map__704905 == null)))?((((map__704905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704905):map__704905);
var props = map__704905__$1;
var className = cljs.core.get.call(null,map__704905__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var glyph = cljs.core.get.call(null,map__704905__$1,new cljs.core.Keyword(null,"glyph","glyph",2119448117));
var label = cljs.core.get.call(null,map__704905__$1,new cljs.core.Keyword(null,"label","label",1718410804),"");
var active = cljs.core.get.call(null,map__704905__$1,new cljs.core.Keyword(null,"active","active",1895962068));
return om.dom.button.call(null,({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-iconbar__item "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?"is-active":null))].join(''), "type": "button"}),untangled.ui.elements.ui_icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),glyph], null)),om.dom.span.call(null,({"className": "c-iconbar__label"}),label));
});
/**
 * Render the given children within a label. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   `:color` :none (default), :primary, :accent
 *   
 */
untangled.ui.elements.ui_label = (function untangled$ui$elements$ui_label(var_args){
var args__28878__auto__ = [];
var len__28871__auto___704919 = arguments.length;
var i__28872__auto___704920 = (0);
while(true){
if((i__28872__auto___704920 < len__28871__auto___704919)){
args__28878__auto__.push((arguments[i__28872__auto___704920]));

var G__704923 = (i__28872__auto___704920 + (1));
i__28872__auto___704920 = G__704923;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

untangled.ui.elements.ui_label.cljs$core$IFn$_invoke$arity$variadic = (function (p__704915,children){
var map__704916 = p__704915;
var map__704916__$1 = ((((!((map__704916 == null)))?((((map__704916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704916):map__704916);
var props = map__704916__$1;
var className = cljs.core.get.call(null,map__704916__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var color = cljs.core.get.call(null,map__704916__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),null,new cljs.core.Keyword(null,"accent","accent",-1826298468),null], null), null);
var classes = (function (){var G__704918 = className;
var G__704918__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__704918),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-label")].join('')
;
if(cljs.core.contains_QMARK_.call(null,legal_colors,color)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__704918__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-label--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color))].join('');
} else {
return G__704918__$1;
}
})();
var props__$1 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"color","color",1011675173)),new cljs.core.Keyword(null,"className","className",-1983287057),classes);
return cljs.core.apply.call(null,om.dom.span,cljs.core.clj__GT_js.call(null,props__$1),children);
});

untangled.ui.elements.ui_label.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_label.cljs$lang$applyTo = (function (seq704913){
var G__704914 = cljs.core.first.call(null,seq704913);
var seq704913__$1 = cljs.core.next.call(null,seq704913);
return untangled.ui.elements.ui_label.cljs$core$IFn$_invoke$arity$variadic(G__704914,seq704913__$1);
});

/**
 * Render an icon or a short string within an avatar. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   `:color` :none (default), :primary :accent
 */
untangled.ui.elements.ui_loader = (function untangled$ui$elements$ui_loader(p__704944){
var map__704948 = p__704944;
var map__704948__$1 = ((((!((map__704948 == null)))?((((map__704948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704948):map__704948);
var props = map__704948__$1;
var className = cljs.core.get.call(null,map__704948__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var color = cljs.core.get.call(null,map__704948__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),null,new cljs.core.Keyword(null,"accent","accent",-1826298468),null], null), null);
var user_classes = cljs.core.get.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var classes = (function (){var G__704950 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-loader")].join('');
if(cljs.core.contains_QMARK_.call(null,legal_colors,color)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__704950),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-loader--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color))].join('');
} else {
return G__704950;
}
})();
var props__$1 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),classes,new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),false),new cljs.core.Keyword(null,"color","color",1011675173));
return om.dom.div.call(null,cljs.core.clj__GT_js.call(null,props__$1));
});
/**
 * Render the given children within a message. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   `:color` :none(default), :alert, :success, :warning, :informative
 *   
 */
untangled.ui.elements.ui_message = (function untangled$ui$elements$ui_message(var_args){
var args__28878__auto__ = [];
var len__28871__auto___704958 = arguments.length;
var i__28872__auto___704959 = (0);
while(true){
if((i__28872__auto___704959 < len__28871__auto___704958)){
args__28878__auto__.push((arguments[i__28872__auto___704959]));

var G__704963 = (i__28872__auto___704959 + (1));
i__28872__auto___704959 = G__704963;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_message.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

untangled.ui.elements.ui_message.cljs$core$IFn$_invoke$arity$variadic = (function (p__704954,children){
var map__704955 = p__704954;
var map__704955__$1 = ((((!((map__704955 == null)))?((((map__704955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704955):map__704955);
var props = map__704955__$1;
var className = cljs.core.get.call(null,map__704955__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var color = cljs.core.get.call(null,map__704955__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),null,new cljs.core.Keyword(null,"accent","accent",-1826298468),null], null), null);
var classes = (function (){var G__704957 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-message")].join('');
if(cljs.core.contains_QMARK_.call(null,legal_colors,color)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__704957),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-message--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color))].join('');
} else {
return G__704957;
}
})();
var props__$1 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),classes),new cljs.core.Keyword(null,"color","color",1011675173));
return cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,props__$1),children);
});

untangled.ui.elements.ui_message.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_message.cljs$lang$applyTo = (function (seq704952){
var G__704953 = cljs.core.first.call(null,seq704952);
var seq704952__$1 = cljs.core.next.call(null,seq704952);
return untangled.ui.elements.ui_message.cljs$core$IFn$_invoke$arity$variadic(G__704953,seq704952__$1);
});

/**
 * @constructor
 */
untangled.ui.elements.DialogTitle = (function untangled$ui$elements$DialogTitle(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.elements.DialogTitle.prototype = goog.object.clone(React.Component.prototype);

var x705000_705019 = untangled.ui.elements.DialogTitle.prototype;
x705000_705019.componentWillUpdate = ((function (x705000_705019){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___705023 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___705024 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___705023,next_ident__29856__auto___705024)){
var idxr__29857__auto___705027 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___705027 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___705027),((function (idxr__29857__auto___705027,ident__29855__auto___705023,next_ident__29856__auto___705024,this__29851__auto__,x705000_705019){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___705023], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___705024], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___705027,ident__29855__auto___705023,next_ident__29856__auto___705024,this__29851__auto__,x705000_705019))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x705000_705019))
;

x705000_705019.shouldComponentUpdate = ((function (x705000_705019){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__705003 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__705003);
} else {
return G__705003;
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
});})(x705000_705019))
;

x705000_705019.componentWillUnmount = ((function (x705000_705019){
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
});})(x705000_705019))
;

x705000_705019.componentDidUpdate = ((function (x705000_705019){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x705000_705019))
;

x705000_705019.isMounted = ((function (x705000_705019){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x705000_705019))
;

x705000_705019.componentWillMount = ((function (x705000_705019){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x705000_705019))
;

x705000_705019.render = ((function (x705000_705019){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_705008 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_705009 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_705010 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_705011 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_705012 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{return om.dom.div.call(null,({"className": "c-dialog__title"}),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_705012;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_705011;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_705010;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_705009;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_705008;
}});})(x705000_705019))
;


untangled.ui.elements.DialogTitle.prototype.constructor = untangled.ui.elements.DialogTitle;

untangled.ui.elements.DialogTitle.prototype.constructor.displayName = "untangled.ui.elements/DialogTitle";

untangled.ui.elements.DialogTitle.prototype.om$isComponent = true;

var x705014_705064 = untangled.ui.elements.DialogTitle;


var x705015_705066 = untangled.ui.elements.DialogTitle.prototype;


untangled.ui.elements.DialogTitle.cljs$lang$type = true;

untangled.ui.elements.DialogTitle.cljs$lang$ctorStr = "untangled.ui.elements/DialogTitle";

untangled.ui.elements.DialogTitle.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.elements/DialogTitle");
});
/**
 * Render a dialog's title (using supplied DOM children). Should only be used in a ui-dialog
 */
untangled.ui.elements.ui_dialog_title = om.next.factory.call(null,untangled.ui.elements.DialogTitle);
/**
 * @constructor
 */
untangled.ui.elements.DialogBody = (function untangled$ui$elements$DialogBody(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.elements.DialogBody.prototype = goog.object.clone(React.Component.prototype);

var x705081_705097 = untangled.ui.elements.DialogBody.prototype;
x705081_705097.componentWillUpdate = ((function (x705081_705097){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___705103 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___705104 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___705103,next_ident__29856__auto___705104)){
var idxr__29857__auto___705105 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___705105 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___705105),((function (idxr__29857__auto___705105,ident__29855__auto___705103,next_ident__29856__auto___705104,this__29851__auto__,x705081_705097){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___705103], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___705104], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___705105,ident__29855__auto___705103,next_ident__29856__auto___705104,this__29851__auto__,x705081_705097))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x705081_705097))
;

x705081_705097.shouldComponentUpdate = ((function (x705081_705097){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__705085 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__705085);
} else {
return G__705085;
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
});})(x705081_705097))
;

x705081_705097.componentWillUnmount = ((function (x705081_705097){
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
});})(x705081_705097))
;

x705081_705097.componentDidUpdate = ((function (x705081_705097){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x705081_705097))
;

x705081_705097.isMounted = ((function (x705081_705097){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x705081_705097))
;

x705081_705097.componentWillMount = ((function (x705081_705097){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x705081_705097))
;

x705081_705097.render = ((function (x705081_705097){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_705089 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_705090 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_705091 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_705092 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_705093 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{return om.dom.div.call(null,({"className": "c-dialog__content"}),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_705093;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_705092;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_705091;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_705090;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_705089;
}});})(x705081_705097))
;


untangled.ui.elements.DialogBody.prototype.constructor = untangled.ui.elements.DialogBody;

untangled.ui.elements.DialogBody.prototype.constructor.displayName = "untangled.ui.elements/DialogBody";

untangled.ui.elements.DialogBody.prototype.om$isComponent = true;

var x705095_705132 = untangled.ui.elements.DialogBody;


var x705096_705133 = untangled.ui.elements.DialogBody.prototype;


untangled.ui.elements.DialogBody.cljs$lang$type = true;

untangled.ui.elements.DialogBody.cljs$lang$ctorStr = "untangled.ui.elements/DialogBody";

untangled.ui.elements.DialogBody.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.elements/DialogBody");
});
/**
 * Render the body of a dialog (using the supplied DOM children). Should only be used in a ui-dialog
 */
untangled.ui.elements.ui_dialog_body = om.next.factory.call(null,untangled.ui.elements.DialogBody);
/**
 * @constructor
 */
untangled.ui.elements.DialogActions = (function untangled$ui$elements$DialogActions(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.elements.DialogActions.prototype = goog.object.clone(React.Component.prototype);

var x705141_705152 = untangled.ui.elements.DialogActions.prototype;
x705141_705152.componentWillUpdate = ((function (x705141_705152){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___705154 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___705155 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___705154,next_ident__29856__auto___705155)){
var idxr__29857__auto___705157 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___705157 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___705157),((function (idxr__29857__auto___705157,ident__29855__auto___705154,next_ident__29856__auto___705155,this__29851__auto__,x705141_705152){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___705154], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___705155], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___705157,ident__29855__auto___705154,next_ident__29856__auto___705155,this__29851__auto__,x705141_705152))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x705141_705152))
;

x705141_705152.shouldComponentUpdate = ((function (x705141_705152){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__705143 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__705143);
} else {
return G__705143;
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
});})(x705141_705152))
;

x705141_705152.componentWillUnmount = ((function (x705141_705152){
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
});})(x705141_705152))
;

x705141_705152.componentDidUpdate = ((function (x705141_705152){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x705141_705152))
;

x705141_705152.isMounted = ((function (x705141_705152){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x705141_705152))
;

x705141_705152.componentWillMount = ((function (x705141_705152){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x705141_705152))
;

x705141_705152.render = ((function (x705141_705152){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_705144 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_705145 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_705146 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_705147 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_705148 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{return om.dom.div.call(null,({"className": "c-dialog__actions"}),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_705148;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_705147;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_705146;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_705145;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_705144;
}});})(x705141_705152))
;


untangled.ui.elements.DialogActions.prototype.constructor = untangled.ui.elements.DialogActions;

untangled.ui.elements.DialogActions.prototype.constructor.displayName = "untangled.ui.elements/DialogActions";

untangled.ui.elements.DialogActions.prototype.om$isComponent = true;

var x705149_705177 = untangled.ui.elements.DialogActions;


var x705150_705178 = untangled.ui.elements.DialogActions.prototype;


untangled.ui.elements.DialogActions.cljs$lang$type = true;

untangled.ui.elements.DialogActions.cljs$lang$ctorStr = "untangled.ui.elements/DialogActions";

untangled.ui.elements.DialogActions.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.elements/DialogActions");
});
/**
 * Render one or more action elements (e.g. buttons) in the action area of the dialog. Should only be used in a ui-dialog
 */
untangled.ui.elements.ui_dialog_actions = om.next.factory.call(null,untangled.ui.elements.DialogActions);
/**
 * @constructor
 */
untangled.ui.elements.Dialog = (function untangled$ui$elements$Dialog(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.elements.Dialog.prototype = goog.object.clone(React.Component.prototype);

var x705188_705207 = untangled.ui.elements.Dialog.prototype;
x705188_705207.componentWillUpdate = ((function (x705188_705207){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___705208 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___705209 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___705208,next_ident__29856__auto___705209)){
var idxr__29857__auto___705211 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___705211 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___705211),((function (idxr__29857__auto___705211,ident__29855__auto___705208,next_ident__29856__auto___705209,this__29851__auto__,x705188_705207){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___705208], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___705209], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___705211,ident__29855__auto___705208,next_ident__29856__auto___705209,this__29851__auto__,x705188_705207))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x705188_705207))
;

x705188_705207.shouldComponentUpdate = ((function (x705188_705207){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__705191 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__705191);
} else {
return G__705191;
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
});})(x705188_705207))
;

x705188_705207.componentWillUnmount = ((function (x705188_705207){
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
});})(x705188_705207))
;

x705188_705207.componentDidUpdate = ((function (x705188_705207){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x705188_705207))
;

x705188_705207.isMounted = ((function (x705188_705207){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x705188_705207))
;

x705188_705207.componentWillMount = ((function (x705188_705207){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x705188_705207))
;

x705188_705207.render = ((function (x705188_705207){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_705195 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_705196 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_705197 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_705198 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_705199 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var map__705201 = om.next.props.call(null,this$);
var map__705201__$1 = ((((!((map__705201 == null)))?((((map__705201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705201):map__705201);
var props = map__705201__$1;
var key = cljs.core.get.call(null,map__705201__$1,new cljs.core.Keyword(null,"key","key",-1516042587),"");
var full_screen = cljs.core.get.call(null,map__705201__$1,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281));
var visible = cljs.core.get.call(null,map__705201__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
var modal = cljs.core.get.call(null,map__705201__$1,new cljs.core.Keyword(null,"modal","modal",-1031880850));
var onClose = cljs.core.get.call(null,map__705201__$1,new cljs.core.Keyword(null,"onClose","onClose",1513531338));
var children = om.next.children.call(null,this$);
var title = untangled.ui.elements.first_node.call(null,untangled.ui.elements.DialogTitle,children);
var content = untangled.ui.elements.first_node.call(null,untangled.ui.elements.DialogBody,children);
var actions = untangled.ui.elements.first_node.call(null,untangled.ui.elements.DialogActions,children);
var state = (cljs.core.truth_(visible)?" is-active":null);
var user_classes = cljs.core.get.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var classes = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-dialog"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(state),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(full_screen)?" c-dialog--fullscreen":null))].join('');
var dialog_dom = om.dom.div.call(null,({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-dialog")].join(''), "className": classes}),om.dom.div.call(null,({"className": "c-dialog__card"}),(cljs.core.truth_(title)?title:null),(cljs.core.truth_(content)?content:null),(cljs.core.truth_(actions)?actions:null)));
if(cljs.core.truth_(modal)){
return om.dom.div.call(null,({"key": key}),dialog_dom,om.dom.div.call(null,({"onKeyPress": ((function (map__705201,map__705201__$1,props,key,full_screen,visible,modal,onClose,children,title,content,actions,state,user_classes,classes,dialog_dom,_STAR_reconciler_STAR_705195,_STAR_depth_STAR_705196,_STAR_shared_STAR_705197,_STAR_instrument_STAR_705198,_STAR_parent_STAR_705199,this$,this__29850__auto__,x705188_705207){
return (function (evt){
if(cljs.core.truth_((function (){var and__27638__auto__ = visible;
if(cljs.core.truth_(and__27638__auto__)){
var and__27638__auto____$1 = onClose;
if(cljs.core.truth_(and__27638__auto____$1)){
return untangled.events.escape_key_QMARK_.call(null,evt);
} else {
return and__27638__auto____$1;
}
} else {
return and__27638__auto__;
}
})())){
return onClose.call(null);
} else {
return null;
}
});})(map__705201,map__705201__$1,props,key,full_screen,visible,modal,onClose,children,title,content,actions,state,user_classes,classes,dialog_dom,_STAR_reconciler_STAR_705195,_STAR_depth_STAR_705196,_STAR_shared_STAR_705197,_STAR_instrument_STAR_705198,_STAR_parent_STAR_705199,this$,this__29850__auto__,x705188_705207))
, "onClick": ((function (map__705201,map__705201__$1,props,key,full_screen,visible,modal,onClose,children,title,content,actions,state,user_classes,classes,dialog_dom,_STAR_reconciler_STAR_705195,_STAR_depth_STAR_705196,_STAR_shared_STAR_705197,_STAR_instrument_STAR_705198,_STAR_parent_STAR_705199,this$,this__29850__auto__,x705188_705207){
return (function (){
if(cljs.core.truth_((function (){var and__27638__auto__ = visible;
if(cljs.core.truth_(and__27638__auto__)){
return onClose;
} else {
return and__27638__auto__;
}
})())){
return onClose.call(null);
} else {
return null;
}
});})(map__705201,map__705201__$1,props,key,full_screen,visible,modal,onClose,children,title,content,actions,state,user_classes,classes,dialog_dom,_STAR_reconciler_STAR_705195,_STAR_depth_STAR_705196,_STAR_shared_STAR_705197,_STAR_instrument_STAR_705198,_STAR_parent_STAR_705199,this$,this__29850__auto__,x705188_705207))
, "className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-backdrop"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)].join('')})));
} else {
return dialog_dom;
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_705199;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_705198;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_705197;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_705196;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_705195;
}});})(x705188_705207))
;


untangled.ui.elements.Dialog.prototype.constructor = untangled.ui.elements.Dialog;

untangled.ui.elements.Dialog.prototype.constructor.displayName = "untangled.ui.elements/Dialog";

untangled.ui.elements.Dialog.prototype.om$isComponent = true;

var x705204_705246 = untangled.ui.elements.Dialog;


var x705205_705247 = untangled.ui.elements.Dialog.prototype;


untangled.ui.elements.Dialog.cljs$lang$type = true;

untangled.ui.elements.Dialog.cljs$lang$ctorStr = "untangled.ui.elements/Dialog";

untangled.ui.elements.Dialog.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.elements/Dialog");
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
untangled.ui.elements.ui_dialog = om.next.factory.call(null,untangled.ui.elements.Dialog);
/**
 * @constructor
 */
untangled.ui.elements.NotificationTitle = (function untangled$ui$elements$NotificationTitle(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.elements.NotificationTitle.prototype = goog.object.clone(React.Component.prototype);

var x705256_705270 = untangled.ui.elements.NotificationTitle.prototype;
x705256_705270.componentWillUpdate = ((function (x705256_705270){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___705276 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___705277 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___705276,next_ident__29856__auto___705277)){
var idxr__29857__auto___705279 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___705279 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___705279),((function (idxr__29857__auto___705279,ident__29855__auto___705276,next_ident__29856__auto___705277,this__29851__auto__,x705256_705270){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___705276], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___705277], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___705279,ident__29855__auto___705276,next_ident__29856__auto___705277,this__29851__auto__,x705256_705270))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x705256_705270))
;

x705256_705270.shouldComponentUpdate = ((function (x705256_705270){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__705260 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__705260);
} else {
return G__705260;
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
});})(x705256_705270))
;

x705256_705270.componentWillUnmount = ((function (x705256_705270){
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
});})(x705256_705270))
;

x705256_705270.componentDidUpdate = ((function (x705256_705270){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x705256_705270))
;

x705256_705270.isMounted = ((function (x705256_705270){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x705256_705270))
;

x705256_705270.componentWillMount = ((function (x705256_705270){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x705256_705270))
;

x705256_705270.render = ((function (x705256_705270){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_705261 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_705262 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_705263 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_705264 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_705265 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var map__705266 = om.next.props.call(null,this$);
var map__705266__$1 = ((((!((map__705266 == null)))?((((map__705266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705266):map__705266);
var props = map__705266__$1;
var key = cljs.core.get.call(null,map__705266__$1,new cljs.core.Keyword(null,"key","key",-1516042587),"");
return om.dom.h1.call(null,({"className": "c-notification_heading", "key": key}),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_705265;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_705264;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_705263;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_705262;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_705261;
}});})(x705256_705270))
;


untangled.ui.elements.NotificationTitle.prototype.constructor = untangled.ui.elements.NotificationTitle;

untangled.ui.elements.NotificationTitle.prototype.constructor.displayName = "untangled.ui.elements/NotificationTitle";

untangled.ui.elements.NotificationTitle.prototype.om$isComponent = true;

var x705268_705297 = untangled.ui.elements.NotificationTitle;


var x705269_705298 = untangled.ui.elements.NotificationTitle.prototype;


untangled.ui.elements.NotificationTitle.cljs$lang$type = true;

untangled.ui.elements.NotificationTitle.cljs$lang$ctorStr = "untangled.ui.elements/NotificationTitle";

untangled.ui.elements.NotificationTitle.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.elements/NotificationTitle");
});
/**
 * Render a notification title. Should only be used in a ui-notification
 */
untangled.ui.elements.ui_notification_title = om.next.factory.call(null,untangled.ui.elements.NotificationTitle);
/**
 * @constructor
 */
untangled.ui.elements.NotificationBody = (function untangled$ui$elements$NotificationBody(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.elements.NotificationBody.prototype = goog.object.clone(React.Component.prototype);

var x705303_705319 = untangled.ui.elements.NotificationBody.prototype;
x705303_705319.componentWillUpdate = ((function (x705303_705319){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___705321 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___705322 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___705321,next_ident__29856__auto___705322)){
var idxr__29857__auto___705323 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___705323 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___705323),((function (idxr__29857__auto___705323,ident__29855__auto___705321,next_ident__29856__auto___705322,this__29851__auto__,x705303_705319){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___705321], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___705322], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___705323,ident__29855__auto___705321,next_ident__29856__auto___705322,this__29851__auto__,x705303_705319))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x705303_705319))
;

x705303_705319.shouldComponentUpdate = ((function (x705303_705319){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__705311 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__705311);
} else {
return G__705311;
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
});})(x705303_705319))
;

x705303_705319.componentWillUnmount = ((function (x705303_705319){
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
});})(x705303_705319))
;

x705303_705319.componentDidUpdate = ((function (x705303_705319){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x705303_705319))
;

x705303_705319.isMounted = ((function (x705303_705319){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x705303_705319))
;

x705303_705319.componentWillMount = ((function (x705303_705319){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x705303_705319))
;

x705303_705319.render = ((function (x705303_705319){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_705312 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_705313 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_705314 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_705315 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_705316 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{return om.dom.p.call(null,({}),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_705316;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_705315;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_705314;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_705313;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_705312;
}});})(x705303_705319))
;


untangled.ui.elements.NotificationBody.prototype.constructor = untangled.ui.elements.NotificationBody;

untangled.ui.elements.NotificationBody.prototype.constructor.displayName = "untangled.ui.elements/NotificationBody";

untangled.ui.elements.NotificationBody.prototype.om$isComponent = true;

var x705317_705359 = untangled.ui.elements.NotificationBody;


var x705318_705363 = untangled.ui.elements.NotificationBody.prototype;


untangled.ui.elements.NotificationBody.cljs$lang$type = true;

untangled.ui.elements.NotificationBody.cljs$lang$ctorStr = "untangled.ui.elements/NotificationBody";

untangled.ui.elements.NotificationBody.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.elements/NotificationBody");
});
/**
 * Render a notification body. Should only be used in a ui-notification
 */
untangled.ui.elements.ui_notification_body = om.next.factory.call(null,untangled.ui.elements.NotificationBody);
/**
 * @constructor
 */
untangled.ui.elements.Notification = (function untangled$ui$elements$Notification(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.elements.Notification.prototype = goog.object.clone(React.Component.prototype);

var x705369_705387 = untangled.ui.elements.Notification.prototype;
x705369_705387.componentWillUpdate = ((function (x705369_705387){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___705390 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___705391 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___705390,next_ident__29856__auto___705391)){
var idxr__29857__auto___705394 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___705394 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___705394),((function (idxr__29857__auto___705394,ident__29855__auto___705390,next_ident__29856__auto___705391,this__29851__auto__,x705369_705387){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___705390], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___705391], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___705394,ident__29855__auto___705390,next_ident__29856__auto___705391,this__29851__auto__,x705369_705387))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x705369_705387))
;

x705369_705387.shouldComponentUpdate = ((function (x705369_705387){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__705373 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__705373);
} else {
return G__705373;
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
});})(x705369_705387))
;

x705369_705387.componentWillUnmount = ((function (x705369_705387){
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
});})(x705369_705387))
;

x705369_705387.componentDidUpdate = ((function (x705369_705387){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x705369_705387))
;

x705369_705387.isMounted = ((function (x705369_705387){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x705369_705387))
;

x705369_705387.componentWillMount = ((function (x705369_705387){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x705369_705387))
;

x705369_705387.render = ((function (x705369_705387){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_705375 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_705376 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_705377 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_705378 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_705379 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var map__705380 = om.next.props.call(null,this$);
var map__705380__$1 = ((((!((map__705380 == null)))?((((map__705380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705380):map__705380);
var props = map__705380__$1;
var key = cljs.core.get.call(null,map__705380__$1,new cljs.core.Keyword(null,"key","key",-1516042587),"");
var width = cljs.core.get.call(null,map__705380__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var kind = cljs.core.get.call(null,map__705380__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var onClose = cljs.core.get.call(null,map__705380__$1,new cljs.core.Keyword(null,"onClose","onClose",1513531338));
var children = om.next.children.call(null,this$);
var title = untangled.ui.elements.first_node.call(null,untangled.ui.elements.NotificationTitle,children);
var content = untangled.ui.elements.first_node.call(null,untangled.ui.elements.NotificationBody,children);
var legal_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"informative","informative",1852560673),null,new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"success","success",1890645906),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
var legal_widths = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wide","wide",-151772487),null], null), null);
var user_classes = cljs.core.get.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var classes = (function (){var G__705382 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-notification")].join('');
var G__705382__$1 = ((cljs.core.contains_QMARK_.call(null,legal_types,kind))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__705382),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-notification--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,kind))].join(''):G__705382);
if(cljs.core.contains_QMARK_.call(null,legal_widths,width)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__705382__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-notification--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,width))].join('');
} else {
return G__705382__$1;
}
})();
var type_icon = (function (){var G__705383 = (((kind instanceof cljs.core.Keyword))?kind.fqn:null);
switch (G__705383) {
case "success":
return untangled.icons.icon.call(null,new cljs.core.Keyword(null,"check_circle","check_circle",1774895320),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positive","positive",1112941866)], null));

break;
case "warning":
return untangled.icons.icon.call(null,new cljs.core.Keyword(null,"warning","warning",-1685650671));

break;
case "error":
return untangled.icons.icon.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

break;
default:
return untangled.icons.icon.call(null,new cljs.core.Keyword(null,"info","info",-317069002));

}
})();
return om.dom.div.call(null,({"className": classes, "key": key}),type_icon,om.dom.div.call(null,({"className": "c-notification_content"}),(cljs.core.truth_(title)?title:null),(cljs.core.truth_(content)?content:null)),om.dom.button.call(null,({"onClick": ((function (map__705380,map__705380__$1,props,key,width,kind,onClose,children,title,content,legal_types,legal_widths,user_classes,classes,type_icon,_STAR_reconciler_STAR_705375,_STAR_depth_STAR_705376,_STAR_shared_STAR_705377,_STAR_instrument_STAR_705378,_STAR_parent_STAR_705379,this$,this__29850__auto__,x705369_705387){
return (function (evt){
if(cljs.core.truth_(onClose)){
return onClose.call(null);
} else {
return null;
}
});})(map__705380,map__705380__$1,props,key,width,kind,onClose,children,title,content,legal_types,legal_widths,user_classes,classes,type_icon,_STAR_reconciler_STAR_705375,_STAR_depth_STAR_705376,_STAR_shared_STAR_705377,_STAR_instrument_STAR_705378,_STAR_parent_STAR_705379,this$,this__29850__auto__,x705369_705387))
, "type": "button", "className": "c-button c-button--icon"}),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"close","close",1835149582))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_705379;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_705378;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_705377;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_705376;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_705375;
}});})(x705369_705387))
;


untangled.ui.elements.Notification.prototype.constructor = untangled.ui.elements.Notification;

untangled.ui.elements.Notification.prototype.constructor.displayName = "untangled.ui.elements/Notification";

untangled.ui.elements.Notification.prototype.om$isComponent = true;

var x705385_705413 = untangled.ui.elements.Notification;


var x705386_705414 = untangled.ui.elements.Notification.prototype;


untangled.ui.elements.Notification.cljs$lang$type = true;

untangled.ui.elements.Notification.cljs$lang$ctorStr = "untangled.ui.elements/Notification";

untangled.ui.elements.Notification.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.elements/Notification");
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
untangled.ui.elements.ui_notification = om.next.factory.call(null,untangled.ui.elements.Notification);
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
untangled.ui.elements.ui_progress = (function untangled$ui$elements$ui_progress(p__705416){
var map__705422 = p__705416;
var map__705422__$1 = ((((!((map__705422 == null)))?((((map__705422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705422):map__705422);
var props = map__705422__$1;
var max = cljs.core.get.call(null,map__705422__$1,new cljs.core.Keyword(null,"max","max",61366548));
var value = cljs.core.get.call(null,map__705422__$1,new cljs.core.Keyword(null,"value","value",305978217));
var className = cljs.core.get.call(null,map__705422__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var size = cljs.core.get.call(null,map__705422__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var legal_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dense","dense",-1352835783),null], null), null);
var classes = (function (){var G__705424 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-progress ")].join('');
if(cljs.core.contains_QMARK_.call(null,legal_sizes,size)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__705424),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-progress--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size))].join('');
} else {
return G__705424;
}
})();
var attrs = cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),classes,new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),false);
return om.dom.progress.call(null,cljs.core.clj__GT_js.call(null,attrs));
});
/**
 * Render a container for tabs using a vector of icons (each a map of attributes).
 * Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 * all parameters are optional
 * 
 */
untangled.ui.elements.ui_tabs = (function untangled$ui$elements$ui_tabs(var_args){
var args__28878__auto__ = [];
var len__28871__auto___705443 = arguments.length;
var i__28872__auto___705444 = (0);
while(true){
if((i__28872__auto___705444 < len__28871__auto___705443)){
args__28878__auto__.push((arguments[i__28872__auto___705444]));

var G__705445 = (i__28872__auto___705444 + (1));
i__28872__auto___705444 = G__705445;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_tabs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

untangled.ui.elements.ui_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__705439,children){
var map__705440 = p__705439;
var map__705440__$1 = ((((!((map__705440 == null)))?((((map__705440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705440):map__705440);
var props = map__705440__$1;
var className = cljs.core.get.call(null,map__705440__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var user_classes = cljs.core.get.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var top_level_class = (function (){var G__705442 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-tabs")].join('');
return G__705442;
})();
return cljs.core.apply.call(null,om.dom.div,({"className": top_level_class}),children);
});

untangled.ui.elements.ui_tabs.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_tabs.cljs$lang$applyTo = (function (seq705437){
var G__705438 = cljs.core.first.call(null,seq705437);
var seq705437__$1 = cljs.core.next.call(null,seq705437);
return untangled.ui.elements.ui_tabs.cljs$core$IFn$_invoke$arity$variadic(G__705438,seq705437__$1);
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
untangled.ui.elements.ui_tab = (function untangled$ui$elements$ui_tab(p__705448){
var map__705452 = p__705448;
var map__705452__$1 = ((((!((map__705452 == null)))?((((map__705452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705452):map__705452);
var props = map__705452__$1;
var className = cljs.core.get.call(null,map__705452__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var label = cljs.core.get.call(null,map__705452__$1,new cljs.core.Keyword(null,"label","label",1718410804),"");
var kind = cljs.core.get.call(null,map__705452__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var active = cljs.core.get.call(null,map__705452__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var legal_kinds = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),null,new cljs.core.Keyword(null,"contrast","contrast",568337131),null], null), null);
var classes = (function (){var G__705457 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-tab "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?" is-active ":null))].join('');
if(cljs.core.contains_QMARK_.call(null,legal_kinds,kind)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__705457),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-tab--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,kind))].join('');
} else {
return G__705457;
}
})();
return om.dom.button.call(null,({"className": classes, "type": "button"}),label);
});
/**
 * Render an icon and text for when you can't display anything when you normally would have a collection of things.
 * 
 *   `:glyph` - An icon glyph name to render a given icon.
 *   `:title` - A string to announce what's missing
 *   `:message` - A string to instruct the user what to do next
 *   
 */
untangled.ui.elements.ui_empty_state = (function untangled$ui$elements$ui_empty_state(p__705459){
var map__705462 = p__705459;
var map__705462__$1 = ((((!((map__705462 == null)))?((((map__705462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705462.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705462):map__705462);
var props = map__705462__$1;
var className = cljs.core.get.call(null,map__705462__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"u-absolute--middle-center");
var glyph = cljs.core.get.call(null,map__705462__$1,new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"help","help",-439233446));
var title = cljs.core.get.call(null,map__705462__$1,new cljs.core.Keyword(null,"title","title",636505583),"Nothing to see yet");
var message = cljs.core.get.call(null,map__705462__$1,new cljs.core.Keyword(null,"message","message",-406056002),"");
return om.dom.div.call(null,({"className": className}),untangled.ui.elements.ui_icon.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"huge","huge",1683634816),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"passive","passive",252884080)], null),untangled.icons.icon.call(null,glyph)),om.dom.h1.call(null,null,title),om.dom.p.call(null,({"className": "c-message"}),message));
});

//# sourceMappingURL=elements.js.map?rel=1489703353868
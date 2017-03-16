// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.ui.Forms__09_Predefined_Fields');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('om.dom');
goog.require('devcards.core');
goog.require('om.next');
goog.require('untangled.client.cards');
goog.require('untangled.client.core');
goog.require('untangled.ui.forms');
goog.require('untangled.ui.elements');
/**
 * A non-library helper function, written by you to help lay out your form.
 */
untangled.ui.Forms__09_Predefined_Fields.field_with_label = (function untangled$ui$Forms__09_Predefined_Fields$field_with_label(var_args){
var args__8730__auto__ = [];
var len__8723__auto___52101 = arguments.length;
var i__8724__auto___52102 = (0);
while(true){
if((i__8724__auto___52102 < len__8723__auto___52101)){
args__8730__auto__.push((arguments[i__8724__auto___52102]));

var G__52103 = (i__8724__auto___52102 + (1));
i__8724__auto___52102 = G__52103;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((4) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((4)),(0),null)):null);
return untangled.ui.Forms__09_Predefined_Fields.field_with_label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8731__auto__);
});

untangled.ui.Forms__09_Predefined_Fields.field_with_label.cljs$core$IFn$_invoke$arity$variadic = (function (comp,form,name,label,params){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("form-group"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(untangled.ui.forms.invalid_QMARK_.cljs$core$IFn$_invoke$arity$2(form,name))?" has-error":""))].join('')}),cljs.core.array_seq([om.dom.label.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-sm-2", "htmlFor": name}),cljs.core.array_seq([label], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-sm-10"}),cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$5(untangled.ui.forms.form_field,comp,form,name,params)], 0))], 0));
});

untangled.ui.Forms__09_Predefined_Fields.field_with_label.cljs$lang$maxFixedArity = (4);

untangled.ui.Forms__09_Predefined_Fields.field_with_label.cljs$lang$applyTo = (function (seq52096){
var G__52097 = cljs.core.first(seq52096);
var seq52096__$1 = cljs.core.next(seq52096);
var G__52098 = cljs.core.first(seq52096__$1);
var seq52096__$2 = cljs.core.next(seq52096__$1);
var G__52099 = cljs.core.first(seq52096__$2);
var seq52096__$3 = cljs.core.next(seq52096__$2);
var G__52100 = cljs.core.first(seq52096__$3);
var seq52096__$4 = cljs.core.next(seq52096__$3);
return untangled.ui.Forms__09_Predefined_Fields.field_with_label.cljs$core$IFn$_invoke$arity$variadic(G__52097,G__52098,G__52099,G__52100,seq52096__$4);
});

if(typeof untangled.ui.Forms__09_Predefined_Fields.KitchenSink !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__09_Predefined_Fields.KitchenSink = (function untangled$ui$Forms__09_Predefined_Fields$KitchenSink(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.Forms__09_Predefined_Fields.KitchenSink.prototype = goog.object.clone(React.Component.prototype);
}

var x52108_52124 = untangled.ui.Forms__09_Predefined_Fields.KitchenSink.prototype;
x52108_52124.componentWillUpdate = ((function (x52108_52124){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___52125 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___52126 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___52125,next_ident__10196__auto___52126)){
var idxr__10197__auto___52127 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___52127 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___52127),((function (idxr__10197__auto___52127,ident__10195__auto___52125,next_ident__10196__auto___52126,this__10191__auto__,x52108_52124){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___52125], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___52126], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___52127,ident__10195__auto___52125,next_ident__10196__auto___52126,this__10191__auto__,x52108_52124))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x52108_52124))
;

x52108_52124.shouldComponentUpdate = ((function (x52108_52124){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__52110 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__52110);
} else {
return G__52110;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__52115 = this__10191__auto__.state;
var G__52116 = "omcljs$state";
return goog.object.get(G__52115,G__52116);
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
});})(x52108_52124))
;

x52108_52124.componentWillUnmount = ((function (x52108_52124){
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
});})(x52108_52124))
;

x52108_52124.componentDidUpdate = ((function (x52108_52124){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x52108_52124))
;

x52108_52124.isMounted = ((function (x52108_52124){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x52108_52124))
;

x52108_52124.componentWillMount = ((function (x52108_52124){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x52108_52124))
;

x52108_52124.render = ((function (x52108_52124){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_52117 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_52118 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_52119 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_52120 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_52121 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var props = om.next.props(this$);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "form-horizontal"}),cljs.core.array_seq([untangled.ui.Forms__09_Predefined_Fields.field_with_label(this$,props,cljs.core.cst$kw$text,"Text:"),untangled.ui.Forms__09_Predefined_Fields.field_with_label(this$,props,cljs.core.cst$kw$number,"Number:"),untangled.ui.Forms__09_Predefined_Fields.field_with_label(this$,props,cljs.core.cst$kw$mood,"Mood:"),untangled.ui.Forms__09_Predefined_Fields.field_with_label(this$,props,cljs.core.cst$kw$done_QMARK_,"Done:"),untangled.ui.Forms__09_Predefined_Fields.field_with_label.cljs$core$IFn$_invoke$arity$variadic(this$,props,cljs.core.cst$kw$essay,"Essay:",cljs.core.array_seq([cljs.core.cst$kw$rows,(10),cljs.core.cst$kw$maxLength,(100)], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "form-group"}),cljs.core.array_seq([om.dom.label.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-sm-2", "htmlFor": cljs.core.cst$kw$rating}),cljs.core.array_seq(["Rating:"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-sm-10"}),cljs.core.array_seq([untangled.ui.forms.form_field.cljs$core$IFn$_invoke$arity$variadic(this$,props,cljs.core.cst$kw$rating,cljs.core.array_seq([cljs.core.cst$kw$choice,(1),cljs.core.cst$kw$label,(1)], 0)),untangled.ui.forms.form_field.cljs$core$IFn$_invoke$arity$variadic(this$,props,cljs.core.cst$kw$rating,cljs.core.array_seq([cljs.core.cst$kw$choice,(2),cljs.core.cst$kw$label,(2)], 0)),untangled.ui.forms.form_field.cljs$core$IFn$_invoke$arity$variadic(this$,props,cljs.core.cst$kw$rating,cljs.core.array_seq([cljs.core.cst$kw$choice,(3),cljs.core.cst$kw$label,(3)], 0)),untangled.ui.forms.form_field.cljs$core$IFn$_invoke$arity$variadic(this$,props,cljs.core.cst$kw$rating,cljs.core.array_seq([cljs.core.cst$kw$choice,(4),cljs.core.cst$kw$label,(4)], 0)),untangled.ui.forms.form_field.cljs$core$IFn$_invoke$arity$variadic(this$,props,cljs.core.cst$kw$rating,cljs.core.array_seq([cljs.core.cst$kw$choice,(5),cljs.core.cst$kw$label,(5)], 0))], 0))], 0))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_52121;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_52120;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_52119;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_52118;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_52117;
}});})(x52108_52124))
;


untangled.ui.Forms__09_Predefined_Fields.KitchenSink.prototype.constructor = untangled.ui.Forms__09_Predefined_Fields.KitchenSink;

untangled.ui.Forms__09_Predefined_Fields.KitchenSink.prototype.constructor.displayName = "untangled.ui.Forms--09-Predefined-Fields/KitchenSink";

untangled.ui.Forms__09_Predefined_Fields.KitchenSink.prototype.om$isComponent = true;

var x52122_52128 = untangled.ui.Forms__09_Predefined_Fields.KitchenSink;
/** @nocollapse */
x52122_52128.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52122_52128.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x52122_52128){
return (function (this$,params){
var this$__$1 = this;
return untangled.ui.forms.build_form(this$__$1,(function (){var or__7502__auto__ = params;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_id,(1)], null);
}
})());
});})(x52122_52128))
;

/** @nocollapse */
x52122_52128.untangled$ui$forms$IForm$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52122_52128.untangled$ui$forms$IForm$form_spec$arity$1 = ((function (x52122_52128){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.id_field(cljs.core.cst$kw$db_SLASH_id),untangled.ui.forms.text_input(cljs.core.cst$kw$text),untangled.ui.forms.integer_input(cljs.core.cst$kw$number),untangled.ui.forms.dropdown_input(cljs.core.cst$kw$mood,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.option(cljs.core.cst$kw$happy,"Happy"),untangled.ui.forms.option(cljs.core.cst$kw$sad,"Sad")], null)),untangled.ui.forms.checkbox_input(cljs.core.cst$kw$done_QMARK_),untangled.ui.forms.radio_input(cljs.core.cst$kw$rating,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(1),null,(4),null,(3),null,(2),null,(5),null], null), null)),untangled.ui.forms.textarea_input(cljs.core.cst$kw$essay)], null);
});})(x52122_52128))
;

/** @nocollapse */
x52122_52128.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52122_52128.om$next$IQuery$query$arity$1 = ((function (x52122_52128){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_root_key,untangled.ui.forms.form_key,cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$text,cljs.core.cst$kw$number,cljs.core.cst$kw$mood,cljs.core.cst$kw$done_QMARK_,cljs.core.cst$kw$rating,cljs.core.cst$kw$essay], null);
});})(x52122_52128))
;

/** @nocollapse */
x52122_52128.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52122_52128.om$next$Ident$ident$arity$2 = ((function (x52122_52128){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sink_SLASH_by_DASH_id,cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52122_52128))
;


var x52123_52129 = untangled.ui.Forms__09_Predefined_Fields.KitchenSink.prototype;

x52123_52129.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x52123_52129.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x52123_52129){
return (function (this$,params){
var this$__$1 = this;
return untangled.ui.forms.build_form(this$__$1,(function (){var or__7502__auto__ = params;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_id,(1)], null);
}
})());
});})(x52123_52129))
;


x52123_52129.untangled$ui$forms$IForm$ = cljs.core.PROTOCOL_SENTINEL;


x52123_52129.untangled$ui$forms$IForm$form_spec$arity$1 = ((function (x52123_52129){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.id_field(cljs.core.cst$kw$db_SLASH_id),untangled.ui.forms.text_input(cljs.core.cst$kw$text),untangled.ui.forms.integer_input(cljs.core.cst$kw$number),untangled.ui.forms.dropdown_input(cljs.core.cst$kw$mood,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.option(cljs.core.cst$kw$happy,"Happy"),untangled.ui.forms.option(cljs.core.cst$kw$sad,"Sad")], null)),untangled.ui.forms.checkbox_input(cljs.core.cst$kw$done_QMARK_),untangled.ui.forms.radio_input(cljs.core.cst$kw$rating,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(1),null,(4),null,(3),null,(2),null,(5),null], null), null)),untangled.ui.forms.textarea_input(cljs.core.cst$kw$essay)], null);
});})(x52123_52129))
;


x52123_52129.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x52123_52129.om$next$IQuery$query$arity$1 = ((function (x52123_52129){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_root_key,untangled.ui.forms.form_key,cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$text,cljs.core.cst$kw$number,cljs.core.cst$kw$mood,cljs.core.cst$kw$done_QMARK_,cljs.core.cst$kw$rating,cljs.core.cst$kw$essay], null);
});})(x52123_52129))
;


x52123_52129.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x52123_52129.om$next$Ident$ident$arity$2 = ((function (x52123_52129){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sink_SLASH_by_DASH_id,cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52123_52129))
;


untangled.ui.Forms__09_Predefined_Fields.KitchenSink.cljs$lang$type = true;

untangled.ui.Forms__09_Predefined_Fields.KitchenSink.cljs$lang$ctorStr = "untangled.ui.Forms--09-Predefined-Fields/KitchenSink";

untangled.ui.Forms__09_Predefined_Fields.KitchenSink.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.Forms--09-Predefined-Fields/KitchenSink");
});
untangled.ui.Forms__09_Predefined_Fields.ui_sink = om.next.factory.cljs$core$IFn$_invoke$arity$2(untangled.ui.Forms__09_Predefined_Fields.KitchenSink,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,cljs.core.cst$kw$db_SLASH_id], null));
if(typeof untangled.ui.Forms__09_Predefined_Fields.CommitRoot !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__09_Predefined_Fields.CommitRoot = (function untangled$ui$Forms__09_Predefined_Fields$CommitRoot(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.Forms__09_Predefined_Fields.CommitRoot.prototype = goog.object.clone(React.Component.prototype);
}

var x52134_52152 = untangled.ui.Forms__09_Predefined_Fields.CommitRoot.prototype;
x52134_52152.componentWillUpdate = ((function (x52134_52152){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___52153 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___52154 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___52153,next_ident__10196__auto___52154)){
var idxr__10197__auto___52155 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___52155 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___52155),((function (idxr__10197__auto___52155,ident__10195__auto___52153,next_ident__10196__auto___52154,this__10191__auto__,x52134_52152){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___52153], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___52154], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___52155,ident__10195__auto___52153,next_ident__10196__auto___52154,this__10191__auto__,x52134_52152))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x52134_52152))
;

x52134_52152.shouldComponentUpdate = ((function (x52134_52152){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__52136 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__52136);
} else {
return G__52136;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__52141 = this__10191__auto__.state;
var G__52142 = "omcljs$state";
return goog.object.get(G__52141,G__52142);
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
});})(x52134_52152))
;

x52134_52152.componentWillUnmount = ((function (x52134_52152){
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
});})(x52134_52152))
;

x52134_52152.componentDidUpdate = ((function (x52134_52152){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x52134_52152))
;

x52134_52152.isMounted = ((function (x52134_52152){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x52134_52152))
;

x52134_52152.componentWillMount = ((function (x52134_52152){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x52134_52152))
;

x52134_52152.render = ((function (x52134_52152){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_52143 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_52144 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_52145 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_52146 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_52147 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__52148 = om.next.props(this$);
var map__52148__$1 = ((((!((map__52148 == null)))?((((map__52148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52148):map__52148);
var react_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52148__$1,cljs.core.cst$kw$ui_SLASH_react_DASH_key);
var sink = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52148__$1,cljs.core.cst$kw$sink);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": react_key}),cljs.core.array_seq([(untangled.ui.Forms__09_Predefined_Fields.ui_sink.cljs$core$IFn$_invoke$arity$1 ? untangled.ui.Forms__09_Predefined_Fields.ui_sink.cljs$core$IFn$_invoke$arity$1(sink) : untangled.ui.Forms__09_Predefined_Fields.ui_sink.call(null,sink))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_52147;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_52146;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_52145;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_52144;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_52143;
}});})(x52134_52152))
;


untangled.ui.Forms__09_Predefined_Fields.CommitRoot.prototype.constructor = untangled.ui.Forms__09_Predefined_Fields.CommitRoot;

untangled.ui.Forms__09_Predefined_Fields.CommitRoot.prototype.constructor.displayName = "untangled.ui.Forms--09-Predefined-Fields/CommitRoot";

untangled.ui.Forms__09_Predefined_Fields.CommitRoot.prototype.om$isComponent = true;

var x52150_52156 = untangled.ui.Forms__09_Predefined_Fields.CommitRoot;
/** @nocollapse */
x52150_52156.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52150_52156.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x52150_52156){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sink,untangled.client.core.initial_state(untangled.ui.Forms__09_Predefined_Fields.KitchenSink,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_id,(1)], null))], null);
});})(x52150_52156))
;

/** @nocollapse */
x52150_52156.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52150_52156.om$next$IQuery$query$arity$1 = ((function (x52150_52156){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_react_DASH_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sink,om.next.get_query(untangled.ui.Forms__09_Predefined_Fields.KitchenSink)], null)], null);
});})(x52150_52156))
;


var x52151_52157 = untangled.ui.Forms__09_Predefined_Fields.CommitRoot.prototype;

x52151_52157.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x52151_52157.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x52151_52157){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sink,untangled.client.core.initial_state(untangled.ui.Forms__09_Predefined_Fields.KitchenSink,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_id,(1)], null))], null);
});})(x52151_52157))
;


x52151_52157.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x52151_52157.om$next$IQuery$query$arity$1 = ((function (x52151_52157){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_react_DASH_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sink,om.next.get_query(untangled.ui.Forms__09_Predefined_Fields.KitchenSink)], null)], null);
});})(x52151_52157))
;


untangled.ui.Forms__09_Predefined_Fields.CommitRoot.cljs$lang$type = true;

untangled.ui.Forms__09_Predefined_Fields.CommitRoot.cljs$lang$ctorStr = "untangled.ui.Forms--09-Predefined-Fields/CommitRoot";

untangled.ui.Forms__09_Predefined_Fields.CommitRoot.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.Forms--09-Predefined-Fields/CommitRoot");
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$Forms__09_Predefined_Fields,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["# Forms \u2013 All Built-in Field Types\n\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui ^:once KitchenSink\n  static uc/InitialAppState\n  (initial-state [this params] (f/build-form this (or params {:db/id 1})))\n  static f/IForm\n  (form-spec [this] [(f/id-field :db/id)\n                     (f/text-input :text)\n                     (f/integer-input :number)\n                     (f/dropdown-input :mood [(f/option :happy \"Happy\") (f/option :sad \"Sad\")])\n                     (f/checkbox-input :done?)\n                     (f/radio-input :rating #{1 2 3 4 5})\n                     (f/textarea-input :essay)])\n  static om/IQuery\n  (query [this] [f/form-root-key f/form-key :db/id :text :number :mood :done? :rating :essay])\n  static om/Ident\n  (ident [this props] [:sink/by-id (:db/id props)])\n  Object\n  (render [this]\n    (let [props (om/props this)]\n      (dom/div #js {:className \"form-horizontal\"}\n        (field-with-label this props :text \"Text:\")\n        (field-with-label this props :number \"Number:\")\n        (field-with-label this props :mood \"Mood:\")\n        (field-with-label this props :done? \"Done:\")\n        (field-with-label this props :essay \"Essay:\" :rows 10 :maxLength 100)\n        (dom/div #js {:className \"form-group\"}\n          (dom/label #js {:className \"col-sm-2\" :htmlFor :rating} \"Rating:\")\n          (dom/div #js {:className \"col-sm-10\"}\n            (f/form-field this props :rating :choice 1 :label 1)\n            (f/form-field this props :rating :choice 2 :label 2)\n            (f/form-field this props :rating :choice 3 :label 3)\n            (f/form-field this props :rating :choice 4 :label 4)\n            (f/form-field this props :rating :choice 5 :label 5) ))))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join('')], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hide_DASH_border,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$Forms__09_Predefined_Fields,cljs.core.cst$kw$form_DASH_changes], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"form-changes",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.dom_node_STAR_((function (state_atom__50267__auto__,node__50268__auto__){
untangled.client.core.mount(untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$initial_DASH_state,state_atom__50267__auto__], 0)),untangled.ui.Forms__09_Predefined_Fields.CommitRoot,node__50268__auto__);

var G__52158 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom__50267__auto__,cljs.core.assoc,cljs.core.cst$kw$ui_SLASH_react_DASH_key,untangled.dom.unique_key());
});
var G__52159 = (1000);
return setTimeout(G__52158,G__52159);
})),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inspect_DASH_data,false], null)], null));
})], null));

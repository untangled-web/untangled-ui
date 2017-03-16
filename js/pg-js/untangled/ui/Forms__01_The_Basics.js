// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.ui.Forms__01_The_Basics');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('com.stuartsierra.component');
goog.require('devcards.core');
goog.require('om.dom');
goog.require('om.next');
goog.require('untangled.client.core');
goog.require('untangled.client.mutations');
goog.require('untangled.client.cards');
goog.require('untangled.ui.forms');
goog.require('untangled.i18n');

untangled.ui.forms.form_field_valid_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$name_DASH_valid_QMARK_,(function (_,value,args){
var trimmed_value = clojure.string.trim(value);
return clojure.string.includes_QMARK_(trimmed_value," ");
}));
/**
 * A non-library helper function, written by you to help lay out your form.
 */
untangled.ui.Forms__01_The_Basics.field_with_label = (function untangled$ui$Forms__01_The_Basics$field_with_label(var_args){
var args52903 = [];
var len__8723__auto___52906 = arguments.length;
var i__8724__auto___52907 = (0);
while(true){
if((i__8724__auto___52907 < len__8723__auto___52906)){
args52903.push((arguments[i__8724__auto___52907]));

var G__52908 = (i__8724__auto___52907 + (1));
i__8724__auto___52907 = G__52908;
continue;
} else {
}
break;
}

var G__52905 = args52903.length;
switch (G__52905) {
case 4:
return untangled.ui.Forms__01_The_Basics.field_with_label.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return untangled.ui.Forms__01_The_Basics.field_with_label.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args52903.length)].join('')));

}
});

untangled.ui.Forms__01_The_Basics.field_with_label.cljs$core$IFn$_invoke$arity$4 = (function (comp,form,name,label){
return untangled.ui.Forms__01_The_Basics.field_with_label.cljs$core$IFn$_invoke$arity$5(comp,form,name,label,null);
});

untangled.ui.Forms__01_The_Basics.field_with_label.cljs$core$IFn$_invoke$arity$5 = (function (comp,form,name,label,validation_message){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("form-group"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(untangled.ui.forms.invalid_QMARK_.cljs$core$IFn$_invoke$arity$2(form,name))?" has-error":""))].join('')}),cljs.core.array_seq([om.dom.label.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-sm-2", "htmlFor": name}),cljs.core.array_seq([label], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-sm-10"}),cljs.core.array_seq([untangled.ui.forms.form_field(comp,form,name)], 0)),(cljs.core.truth_((function (){var and__7490__auto__ = validation_message;
if(cljs.core.truth_(and__7490__auto__)){
return untangled.ui.forms.invalid_QMARK_.cljs$core$IFn$_invoke$arity$2(form,name);
} else {
return and__7490__auto__;
}
})())?om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("col-sm-offset-2 col-sm-10"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')}),cljs.core.array_seq([validation_message], 0)):null)], 0));
});

untangled.ui.Forms__01_The_Basics.field_with_label.cljs$lang$maxFixedArity = 5;

/**
 * A helper function to lay out checkboxes.
 */
untangled.ui.Forms__01_The_Basics.checkbox_with_label = (function untangled$ui$Forms__01_The_Basics$checkbox_with_label(var_args){
var args52910 = [];
var len__8723__auto___52913 = arguments.length;
var i__8724__auto___52914 = (0);
while(true){
if((i__8724__auto___52914 < len__8723__auto___52913)){
args52910.push((arguments[i__8724__auto___52914]));

var G__52915 = (i__8724__auto___52914 + (1));
i__8724__auto___52914 = G__52915;
continue;
} else {
}
break;
}

var G__52912 = args52910.length;
switch (G__52912) {
case 4:
return untangled.ui.Forms__01_The_Basics.checkbox_with_label.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return untangled.ui.Forms__01_The_Basics.checkbox_with_label.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args52910.length)].join('')));

}
});

untangled.ui.Forms__01_The_Basics.checkbox_with_label.cljs$core$IFn$_invoke$arity$4 = (function (comp,form,name,label){
return untangled.ui.Forms__01_The_Basics.field_with_label.cljs$core$IFn$_invoke$arity$5(comp,form,name,label,null);
});

untangled.ui.Forms__01_The_Basics.checkbox_with_label.cljs$core$IFn$_invoke$arity$5 = (function (comp,form,name,label,validation_message){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "checkbox"}),cljs.core.array_seq([om.dom.label.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.forms.form_field(comp,form,name),label], 0))], 0));
});

untangled.ui.Forms__01_The_Basics.checkbox_with_label.cljs$lang$maxFixedArity = 5;

if(typeof untangled.ui.Forms__01_The_Basics.PhoneForm !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__01_The_Basics.PhoneForm = (function untangled$ui$Forms__01_The_Basics$PhoneForm(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.Forms__01_The_Basics.PhoneForm.prototype = goog.object.clone(React.Component.prototype);
}

var x52921_52937 = untangled.ui.Forms__01_The_Basics.PhoneForm.prototype;
x52921_52937.componentWillUpdate = ((function (x52921_52937){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___52938 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___52939 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___52938,next_ident__10196__auto___52939)){
var idxr__10197__auto___52940 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___52940 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___52940),((function (idxr__10197__auto___52940,ident__10195__auto___52938,next_ident__10196__auto___52939,this__10191__auto__,x52921_52937){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___52938], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___52939], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___52940,ident__10195__auto___52938,next_ident__10196__auto___52939,this__10191__auto__,x52921_52937))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x52921_52937))
;

x52921_52937.shouldComponentUpdate = ((function (x52921_52937){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__52923 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__52923);
} else {
return G__52923;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__52928 = this__10191__auto__.state;
var G__52929 = "omcljs$state";
return goog.object.get(G__52928,G__52929);
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
});})(x52921_52937))
;

x52921_52937.componentWillUnmount = ((function (x52921_52937){
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
});})(x52921_52937))
;

x52921_52937.componentDidUpdate = ((function (x52921_52937){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x52921_52937))
;

x52921_52937.isMounted = ((function (x52921_52937){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x52921_52937))
;

x52921_52937.componentWillMount = ((function (x52921_52937){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x52921_52937))
;

x52921_52937.render = ((function (x52921_52937){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_52930 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_52931 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_52932 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_52933 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_52934 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var form = om.next.props(this$);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "form-horizontal"}),cljs.core.array_seq([untangled.ui.Forms__01_The_Basics.field_with_label.cljs$core$IFn$_invoke$arity$4(this$,form,cljs.core.cst$kw$phone_SLASH_type,"Phone type:"),untangled.ui.Forms__01_The_Basics.field_with_label.cljs$core$IFn$_invoke$arity$4(this$,form,cljs.core.cst$kw$phone_SLASH_number,"Number:")], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_52934;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_52933;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_52932;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_52931;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_52930;
}});})(x52921_52937))
;


untangled.ui.Forms__01_The_Basics.PhoneForm.prototype.constructor = untangled.ui.Forms__01_The_Basics.PhoneForm;

untangled.ui.Forms__01_The_Basics.PhoneForm.prototype.constructor.displayName = "untangled.ui.Forms--01-The-Basics/PhoneForm";

untangled.ui.Forms__01_The_Basics.PhoneForm.prototype.om$isComponent = true;

var x52935_52941 = untangled.ui.Forms__01_The_Basics.PhoneForm;
/** @nocollapse */
x52935_52941.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52935_52941.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x52935_52941){
return (function (this$,params){
var this$__$1 = this;
return untangled.ui.forms.build_form(this$__$1,(function (){var or__7502__auto__ = params;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(x52935_52941))
;

/** @nocollapse */
x52935_52941.untangled$ui$forms$IForm$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52935_52941.untangled$ui$forms$IForm$form_spec$arity$1 = ((function (x52935_52941){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.id_field(cljs.core.cst$kw$db_SLASH_id),untangled.ui.forms.text_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$phone_SLASH_number,cljs.core.array_seq([cljs.core.cst$kw$className,"form-control"], 0)),untangled.ui.forms.dropdown_input(cljs.core.cst$kw$phone_SLASH_type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.option(cljs.core.cst$kw$home,"Home"),untangled.ui.forms.option(cljs.core.cst$kw$work,"Work")], null))], null);
});})(x52935_52941))
;

/** @nocollapse */
x52935_52941.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52935_52941.om$next$IQuery$query$arity$1 = ((function (x52935_52941){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$phone_SLASH_type,cljs.core.cst$kw$phone_SLASH_number,untangled.ui.forms.form_key], null);
});})(x52935_52941))
;

/** @nocollapse */
x52935_52941.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52935_52941.om$next$Ident$ident$arity$2 = ((function (x52935_52941){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$phone_SLASH_by_DASH_id,cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52935_52941))
;


var x52936_52942 = untangled.ui.Forms__01_The_Basics.PhoneForm.prototype;

x52936_52942.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x52936_52942.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x52936_52942){
return (function (this$,params){
var this$__$1 = this;
return untangled.ui.forms.build_form(this$__$1,(function (){var or__7502__auto__ = params;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(x52936_52942))
;


x52936_52942.untangled$ui$forms$IForm$ = cljs.core.PROTOCOL_SENTINEL;


x52936_52942.untangled$ui$forms$IForm$form_spec$arity$1 = ((function (x52936_52942){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.id_field(cljs.core.cst$kw$db_SLASH_id),untangled.ui.forms.text_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$phone_SLASH_number,cljs.core.array_seq([cljs.core.cst$kw$className,"form-control"], 0)),untangled.ui.forms.dropdown_input(cljs.core.cst$kw$phone_SLASH_type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.option(cljs.core.cst$kw$home,"Home"),untangled.ui.forms.option(cljs.core.cst$kw$work,"Work")], null))], null);
});})(x52936_52942))
;


x52936_52942.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x52936_52942.om$next$IQuery$query$arity$1 = ((function (x52936_52942){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$phone_SLASH_type,cljs.core.cst$kw$phone_SLASH_number,untangled.ui.forms.form_key], null);
});})(x52936_52942))
;


x52936_52942.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x52936_52942.om$next$Ident$ident$arity$2 = ((function (x52936_52942){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$phone_SLASH_by_DASH_id,cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52936_52942))
;


untangled.ui.Forms__01_The_Basics.PhoneForm.cljs$lang$type = true;

untangled.ui.Forms__01_The_Basics.PhoneForm.cljs$lang$ctorStr = "untangled.ui.Forms--01-The-Basics/PhoneForm";

untangled.ui.Forms__01_The_Basics.PhoneForm.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.Forms--01-The-Basics/PhoneForm");
});
untangled.ui.Forms__01_The_Basics.ui_phone_form = om.next.factory.cljs$core$IFn$_invoke$arity$2(untangled.ui.Forms__01_The_Basics.PhoneForm,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,cljs.core.cst$kw$db_SLASH_id], null));
untangled.ui.Forms__01_The_Basics.add_phone_mutation = (function untangled$ui$Forms__01_The_Basics$add_phone_mutation(p__52943,k,p__52944){
var map__52949 = p__52943;
var map__52949__$1 = ((((!((map__52949 == null)))?((((map__52949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52949):map__52949);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52949__$1,cljs.core.cst$kw$state);
var map__52950 = p__52944;
var map__52950__$1 = ((((!((map__52950 == null)))?((((map__52950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52950):map__52950);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52950__$1,cljs.core.cst$kw$id);
var person = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52950__$1,cljs.core.cst$kw$person);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__52949,map__52949__$1,state,map__52950,map__52950__$1,id,person){
return (function (){
var new_phone = untangled.ui.forms.build_form(untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db_SLASH_id,id,cljs.core.cst$kw$phone_SLASH_type,cljs.core.cst$kw$home,cljs.core.cst$kw$phone_SLASH_number,""], null));
var person_ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$people_SLASH_by_DASH_id,person], null);
var phone_ident = om.next.ident(untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm,new_phone);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,phone_ident,new_phone);

return untangled.client.core.integrate_ident_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,phone_ident,cljs.core.array_seq([cljs.core.cst$kw$append,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(person_ident,cljs.core.cst$kw$person_SLASH_phone_DASH_numbers)], 0));
});})(map__52949,map__52949__$1,state,map__52950,map__52950__$1,id,person))
], null);
});
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$sample_SLASH_add_DASH_phone,(function (e,k,p){
return untangled.ui.Forms__01_The_Basics.add_phone_mutation(e,k,p);
}));
/**
 * @constructor
 */
untangled.ui.Forms__01_The_Basics.PhoneRoot = (function untangled$ui$Forms__01_The_Basics$PhoneRoot(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.Forms__01_The_Basics.PhoneRoot.prototype = goog.object.clone(React.Component.prototype);

var x52957_52975 = untangled.ui.Forms__01_The_Basics.PhoneRoot.prototype;
x52957_52975.componentWillUpdate = ((function (x52957_52975){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___52976 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___52977 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___52976,next_ident__10196__auto___52977)){
var idxr__10197__auto___52978 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___52978 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___52978),((function (idxr__10197__auto___52978,ident__10195__auto___52976,next_ident__10196__auto___52977,this__10191__auto__,x52957_52975){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___52976], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___52977], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___52978,ident__10195__auto___52976,next_ident__10196__auto___52977,this__10191__auto__,x52957_52975))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x52957_52975))
;

x52957_52975.shouldComponentUpdate = ((function (x52957_52975){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__52959 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__52959);
} else {
return G__52959;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__52964 = this__10191__auto__.state;
var G__52965 = "omcljs$state";
return goog.object.get(G__52964,G__52965);
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
});})(x52957_52975))
;

x52957_52975.componentWillUnmount = ((function (x52957_52975){
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
});})(x52957_52975))
;

x52957_52975.componentDidUpdate = ((function (x52957_52975){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x52957_52975))
;

x52957_52975.isMounted = ((function (x52957_52975){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x52957_52975))
;

x52957_52975.componentWillMount = ((function (x52957_52975){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x52957_52975))
;

x52957_52975.render = ((function (x52957_52975){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_52966 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_52967 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_52968 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_52969 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_52970 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__52971 = om.next.props(this$);
var map__52971__$1 = ((((!((map__52971 == null)))?((((map__52971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52971.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52971):map__52971);
var phone = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52971__$1,cljs.core.cst$kw$phone);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(untangled.ui.Forms__01_The_Basics.ui_phone_form.cljs$core$IFn$_invoke$arity$1 ? untangled.ui.Forms__01_The_Basics.ui_phone_form.cljs$core$IFn$_invoke$arity$1(phone) : untangled.ui.Forms__01_The_Basics.ui_phone_form.call(null,phone))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_52970;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_52969;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_52968;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_52967;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_52966;
}});})(x52957_52975))
;


untangled.ui.Forms__01_The_Basics.PhoneRoot.prototype.constructor = untangled.ui.Forms__01_The_Basics.PhoneRoot;

untangled.ui.Forms__01_The_Basics.PhoneRoot.prototype.constructor.displayName = "untangled.ui.Forms--01-The-Basics/PhoneRoot";

untangled.ui.Forms__01_The_Basics.PhoneRoot.prototype.om$isComponent = true;

var x52973_52979 = untangled.ui.Forms__01_The_Basics.PhoneRoot;
/** @nocollapse */
x52973_52979.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52973_52979.om$next$IQuery$query$arity$1 = ((function (x52973_52979){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phone,om.next.get_query(untangled.ui.Forms__01_The_Basics.PhoneForm)], null)], null);
});})(x52973_52979))
;

/** @nocollapse */
x52973_52979.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52973_52979.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x52973_52979){
return (function (this$,params){
var this$__$1 = this;
var phone_number = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db_SLASH_id,(1),cljs.core.cst$kw$phone_SLASH_type,cljs.core.cst$kw$home,cljs.core.cst$kw$phone_SLASH_number,"555-1212"], null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phone,untangled.ui.forms.build_form(untangled.ui.Forms__01_The_Basics.PhoneForm,phone_number)], null);
});})(x52973_52979))
;


var x52974_52980 = untangled.ui.Forms__01_The_Basics.PhoneRoot.prototype;

x52974_52980.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x52974_52980.om$next$IQuery$query$arity$1 = ((function (x52974_52980){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phone,om.next.get_query(untangled.ui.Forms__01_The_Basics.PhoneForm)], null)], null);
});})(x52974_52980))
;


x52974_52980.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x52974_52980.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x52974_52980){
return (function (this$,params){
var this$__$1 = this;
var phone_number = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db_SLASH_id,(1),cljs.core.cst$kw$phone_SLASH_type,cljs.core.cst$kw$home,cljs.core.cst$kw$phone_SLASH_number,"555-1212"], null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phone,untangled.ui.forms.build_form(untangled.ui.Forms__01_The_Basics.PhoneForm,phone_number)], null);
});})(x52974_52980))
;


untangled.ui.Forms__01_The_Basics.PhoneRoot.cljs$lang$type = true;

untangled.ui.Forms__01_The_Basics.PhoneRoot.cljs$lang$ctorStr = "untangled.ui.Forms--01-The-Basics/PhoneRoot";

untangled.ui.Forms__01_The_Basics.PhoneRoot.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.Forms--01-The-Basics/PhoneRoot");
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$Forms__01_The_Basics,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["# Forms \u2013 The Basics\n\n  Generic form support is a primary rapid appliation development feature. Fortunately, the overall structure of Om Next\n  and Untangled makes it relatively simple to write form support in a general-purpose, composeable manner. This library\n  defines form support that has:\n\n  - Declarative forms\n  - An extensible set of form fields\n  - Extensible validation\n  - Separation of form UI from form logic\n  - Remote integration with form <-> entity\n  - Local integration with entities in the browser database\n\n  The following `requires` define the namespacing used in the examples:\n\n  ```\n  (ns your-ns\n    (:require\n      [untangled.client.cards :refer [untangled-app]]\n      [clojure.string :as str]\n      [com.stuartsierra.component :as component]\n      [om.dom :as dom]\n      [om.next :as om :refer [defui]]\n      [untangled.client.core :as uc]\n      [untangled.client.mutations :as m]\n      [untangled.ui.forms :as f]\n      [untangled.i18n :refer [tr]]))\n  ```\n\n  **IMPORTANT NOTE**: When we use the parameter `form` or the word 'form' in the descriptions below, we mean the data\n  of the entire entity from an Om table that normally represents something in your application (like a person, phone number, etc).\n  This library *augments* your database entry with form support data (your 'person' becomes a 'person' AND a 'form'). In\n  raw technical terms, the `build-form` function takes a map, and adds a `f/form-key { ... }` entry *to it*. The only\n  implication for your UI is that your component queries must be expanded to include queries for this additional support\n  data.\n\n  ## Your Component as a Form\n\n  Components that wish to act as forms must meet the following requirements (here `f` is an alias for the forms namespace):\n\n  - They must implement `f/IForm`\n      - The fields method must return a list of fields that includes an `id-field`\n  - They must implement `om/Ident`\n  - They must implement `om/IQuery`, and include extra bits of form query (the key `f/form-key`)\n  - The app state of the entity acting as a form must be augmented via `f/build-form` (e.g. using a mutation or app initialization)\n  - They render the form fields using `f/form-field`.\n\n  ### Step 1: Declare the Form Fields\n\n  Form fields are declared on the ui component that will render the form via the `f/IForm` protocol. The fields themselves\n  are declared with function calls that correspond to the field type:\n\n  - `id-field` : A (meant-to-be-hidden) form field that corresponds to the attribute that uniquely identifies the entity being edited. Required for much of the interesting support.\n  - `text-input` : An optionally validated input for strings.\n  - `dropdown-input` : A menu that allows the user to choose from a set of values.\n  - `checkbox-input` : A boolean control\n  - your-input-here! : Form support is extensible. Whatever interaction you can imagine can be added to a form.\n\n  Form fields are really just simple maps of attributes that describe the configuration of the specified input.\n\n  The built-in support for doing form logic expects the fields to be declared on the component that will\n  render the form.\n\n  ```\n  (om/defui MyForm\n    static f/IForm\n    (form-spec [this] [(f/id-field :db/id)\n                       (f/text-input :person/name)\n                       ...]\n    ...\n  ```\n\n  ## Step 2: Rendering the Form Fields\n\n  The form fields themselves are rendered by calling `(f/form-field form field-name)`. This method **only** renders\n  the simple input itself.\n\n  `(f/form-field my-form :name)` --- outputs ---> `(dom/input #js { ... })`\n\n  This is the minimum we can do to ensure that the logic is correctly connected, while not interfering with your\n  ability to render the form however you please.\n\n  You'll commonly write some functions of your own that combine other DOM markup with this, such as the function\n  `field-with-label` shown in the example. Additional functions like `f/invalid?` can be used to make decisions about\n  showing/hiding validation messages.\n\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defn field-with-label\n  \"A non-library helper function, written by you to help lay out your form.\"\n  ([comp form name label] (field-with-label comp form name label nil))\n  ([comp form name label validation-message]\n   (dom/div #js {:className (str \"form-group\" (if (f/invalid? form name) \" has-error\" \"\"))}\n     (dom/label #js {:className \"col-sm-2\" :htmlFor name} label)\n     ;; THE LIBRARY SUPPLIES f/form-field. Use it to render the actual field\n     (dom/div #js {:className \"col-sm-10\"} (f/form-field comp form name))\n     (when (and validation-message (f/invalid? form name))\n       (dom/span #js {:className (str \"col-sm-offset-2 col-sm-10\" name)} validation-message)))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n\n  **The rendering of the form is pretty much up to you! Thus, your forms can be as pretty (or ugly) as you care to make\n  them. No worrying about figuring out how we render them, and then trying to make *that* look good.**\n\n  That said, there is nothing preventing you (or us) from supplying a library function that can produce reasonable looking\n  reusable form rendering.\n\n  ## Step 3: Setting Up the Form State\n\n  A form can augment any entity in an app database table in your client application. The `f/build-form` function\n  can take any such entity and add form support to it. The result is perfectly compatible with the original entity. The\n  example shown above is doing this on application start, but it is trivial to compose `f/build-form` into a mutation\n  (for example, a mutation that is changing the UI to display the form can simultaneously initialize the entity to-be-edited\n  at the same time.\n\n  ## A Complete Form Component\n\n  If we compose the above form into this UI root:\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui ^:once PhoneForm\n  static uc/InitialAppState\n  (initial-state [this params] (f/build-form this (or params {})))\n  static f/IForm\n  (form-spec [this] [(f/id-field :db/id)                    ; Mark which thing is the ID of this entity\n                     (f/text-input :phone/number :className \"form-control\")\n                     (f/dropdown-input :phone/type [(f/option :home \"Home\") (f/option :work \"Work\")])])\n  static om/IQuery\n  (query [this] [:db/id :phone/type :phone/number f/form-key]) ; Don't forget f/form-key!\n  static om/Ident\n  (ident [this props] [:phone/by-id (:db/id props)])\n  Object\n  (render [this]\n    (let [form (om/props this)]\n      (dom/div #js {:className \"form-horizontal\"}\n        (field-with-label this form :phone/type \"Phone type:\") ; Use your own helpers to render out the fields\n        (field-with-label this form :phone/number \"Number:\")))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui PhoneRoot\n  static om/IQuery\n  (query [this] [{:phone (om/get-query PhoneForm)}])\n  static uc/InitialAppState\n  (initial-state [this params]\n    (let [phone-number {:db/id 1 :phone/type :home :phone/number \"555-1212\"}]\n      {:phone (f/build-form PhoneForm phone-number)}))\n  Object\n  (render [this]\n    (let [{:keys [phone]} (om/props this)]\n      (dom/div nil\n        (ui-phone-form phone)))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"We can embed it into an active dev card to play with it (you may edit the devcard options to include :"], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hide_DASH_border,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$Forms__01_The_Basics,cljs.core.cst$kw$phone_DASH_form], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"phone-form",cljs.core.cst$kw$documentation,"A Sample Form (edit this card and set `:inspect-data` to `true` to see the augmented data)",cljs.core.cst$kw$main_DASH_obj,devcards.core.dom_node_STAR_((function (state_atom__50267__auto__,node__50268__auto__){
untangled.client.core.mount(untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$initial_DASH_state,state_atom__50267__auto__], 0)),untangled.ui.Forms__01_The_Basics.PhoneRoot,node__50268__auto__);

var G__52981 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom__50267__auto__,cljs.core.assoc,cljs.core.cst$kw$ui_SLASH_react_DASH_key,untangled.dom.unique_key());
});
var G__52982 = (1000);
return setTimeout(G__52981,G__52982);
})),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
if(typeof untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm = (function untangled$ui$Forms__01_The_Basics$ValidatedPhoneForm(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm.prototype = goog.object.clone(React.Component.prototype);
}

var x52987_53003 = untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm.prototype;
x52987_53003.componentWillUpdate = ((function (x52987_53003){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___53004 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___53005 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___53004,next_ident__10196__auto___53005)){
var idxr__10197__auto___53006 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___53006 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___53006),((function (idxr__10197__auto___53006,ident__10195__auto___53004,next_ident__10196__auto___53005,this__10191__auto__,x52987_53003){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___53004], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___53005], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___53006,ident__10195__auto___53004,next_ident__10196__auto___53005,this__10191__auto__,x52987_53003))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x52987_53003))
;

x52987_53003.shouldComponentUpdate = ((function (x52987_53003){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__52989 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__52989);
} else {
return G__52989;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__52994 = this__10191__auto__.state;
var G__52995 = "omcljs$state";
return goog.object.get(G__52994,G__52995);
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
});})(x52987_53003))
;

x52987_53003.componentWillUnmount = ((function (x52987_53003){
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
});})(x52987_53003))
;

x52987_53003.componentDidUpdate = ((function (x52987_53003){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x52987_53003))
;

x52987_53003.isMounted = ((function (x52987_53003){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x52987_53003))
;

x52987_53003.componentWillMount = ((function (x52987_53003){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x52987_53003))
;

x52987_53003.render = ((function (x52987_53003){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_52996 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_52997 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_52998 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_52999 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_53000 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var form = om.next.props(this$);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "form-horizontal"}),cljs.core.array_seq([untangled.ui.Forms__01_The_Basics.field_with_label.cljs$core$IFn$_invoke$arity$4(this$,form,cljs.core.cst$kw$phone_SLASH_type,"Phone type:"),untangled.ui.Forms__01_The_Basics.field_with_label.cljs$core$IFn$_invoke$arity$5(this$,form,cljs.core.cst$kw$phone_SLASH_number,"Number:","Please format as (###) ###-####")], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_53000;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_52999;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_52998;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_52997;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_52996;
}});})(x52987_53003))
;


untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm.prototype.constructor = untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm;

untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm.prototype.constructor.displayName = "untangled.ui.Forms--01-The-Basics/ValidatedPhoneForm";

untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm.prototype.om$isComponent = true;

var x53001_53007 = untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm;
/** @nocollapse */
x53001_53007.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x53001_53007.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x53001_53007){
return (function (this$,params){
var this$__$1 = this;
return untangled.ui.forms.build_form(this$__$1,(function (){var or__7502__auto__ = params;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(x53001_53007))
;

/** @nocollapse */
x53001_53007.untangled$ui$forms$IForm$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x53001_53007.untangled$ui$forms$IForm$form_spec$arity$1 = ((function (x53001_53007){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.id_field(cljs.core.cst$kw$db_SLASH_id),untangled.ui.forms.text_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$phone_SLASH_number,cljs.core.array_seq([cljs.core.cst$kw$validator,cljs.core.cst$sym$us_DASH_phone_QMARK_], 0)),untangled.ui.forms.dropdown_input(cljs.core.cst$kw$phone_SLASH_type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.option(cljs.core.cst$kw$home,"Home"),untangled.ui.forms.option(cljs.core.cst$kw$work,"Work")], null))], null);
});})(x53001_53007))
;

/** @nocollapse */
x53001_53007.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x53001_53007.om$next$IQuery$query$arity$1 = ((function (x53001_53007){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$phone_SLASH_type,cljs.core.cst$kw$phone_SLASH_number,untangled.ui.forms.form_key], null);
});})(x53001_53007))
;

/** @nocollapse */
x53001_53007.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x53001_53007.om$next$Ident$ident$arity$2 = ((function (x53001_53007){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$phone_SLASH_by_DASH_id,cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x53001_53007))
;


var x53002_53008 = untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm.prototype;

x53002_53008.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x53002_53008.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x53002_53008){
return (function (this$,params){
var this$__$1 = this;
return untangled.ui.forms.build_form(this$__$1,(function (){var or__7502__auto__ = params;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(x53002_53008))
;


x53002_53008.untangled$ui$forms$IForm$ = cljs.core.PROTOCOL_SENTINEL;


x53002_53008.untangled$ui$forms$IForm$form_spec$arity$1 = ((function (x53002_53008){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.id_field(cljs.core.cst$kw$db_SLASH_id),untangled.ui.forms.text_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$phone_SLASH_number,cljs.core.array_seq([cljs.core.cst$kw$validator,cljs.core.cst$sym$us_DASH_phone_QMARK_], 0)),untangled.ui.forms.dropdown_input(cljs.core.cst$kw$phone_SLASH_type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.option(cljs.core.cst$kw$home,"Home"),untangled.ui.forms.option(cljs.core.cst$kw$work,"Work")], null))], null);
});})(x53002_53008))
;


x53002_53008.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x53002_53008.om$next$IQuery$query$arity$1 = ((function (x53002_53008){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$phone_SLASH_type,cljs.core.cst$kw$phone_SLASH_number,untangled.ui.forms.form_key], null);
});})(x53002_53008))
;


x53002_53008.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x53002_53008.om$next$Ident$ident$arity$2 = ((function (x53002_53008){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$phone_SLASH_by_DASH_id,cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x53002_53008))
;


untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm.cljs$lang$type = true;

untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm.cljs$lang$ctorStr = "untangled.ui.Forms--01-The-Basics/ValidatedPhoneForm";

untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.Forms--01-The-Basics/ValidatedPhoneForm");
});
untangled.ui.Forms__01_The_Basics.ui_vphone_form = om.next.factory.cljs$core$IFn$_invoke$arity$1(untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm);
/**
 * @constructor
 */
untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot = (function untangled$ui$Forms__01_The_Basics$ValidatedPhoneRoot(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot.prototype = goog.object.clone(React.Component.prototype);

var x53013_53031 = untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot.prototype;
x53013_53031.componentWillUpdate = ((function (x53013_53031){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___53032 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___53033 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___53032,next_ident__10196__auto___53033)){
var idxr__10197__auto___53034 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___53034 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___53034),((function (idxr__10197__auto___53034,ident__10195__auto___53032,next_ident__10196__auto___53033,this__10191__auto__,x53013_53031){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___53032], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___53033], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___53034,ident__10195__auto___53032,next_ident__10196__auto___53033,this__10191__auto__,x53013_53031))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x53013_53031))
;

x53013_53031.shouldComponentUpdate = ((function (x53013_53031){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__53015 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__53015);
} else {
return G__53015;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__53020 = this__10191__auto__.state;
var G__53021 = "omcljs$state";
return goog.object.get(G__53020,G__53021);
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
});})(x53013_53031))
;

x53013_53031.componentWillUnmount = ((function (x53013_53031){
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
});})(x53013_53031))
;

x53013_53031.componentDidUpdate = ((function (x53013_53031){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x53013_53031))
;

x53013_53031.isMounted = ((function (x53013_53031){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x53013_53031))
;

x53013_53031.componentWillMount = ((function (x53013_53031){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x53013_53031))
;

x53013_53031.render = ((function (x53013_53031){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_53022 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_53023 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_53024 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_53025 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_53026 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__53027 = om.next.props(this$);
var map__53027__$1 = ((((!((map__53027 == null)))?((((map__53027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53027.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53027):map__53027);
var phone = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53027__$1,cljs.core.cst$kw$phone);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(untangled.ui.Forms__01_The_Basics.ui_vphone_form.cljs$core$IFn$_invoke$arity$1 ? untangled.ui.Forms__01_The_Basics.ui_vphone_form.cljs$core$IFn$_invoke$arity$1(phone) : untangled.ui.Forms__01_The_Basics.ui_vphone_form.call(null,phone))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_53026;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_53025;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_53024;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_53023;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_53022;
}});})(x53013_53031))
;


untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot.prototype.constructor = untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot;

untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot.prototype.constructor.displayName = "untangled.ui.Forms--01-The-Basics/ValidatedPhoneRoot";

untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot.prototype.om$isComponent = true;

var x53029_53035 = untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot;
/** @nocollapse */
x53029_53035.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x53029_53035.om$next$IQuery$query$arity$1 = ((function (x53029_53035){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phone,om.next.get_query(untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm)], null)], null);
});})(x53029_53035))
;

/** @nocollapse */
x53029_53035.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x53029_53035.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x53029_53035){
return (function (this$,params){
var this$__$1 = this;
var phone_number = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db_SLASH_id,(1),cljs.core.cst$kw$phone_SLASH_type,cljs.core.cst$kw$home,cljs.core.cst$kw$phone_SLASH_number,"555-1212"], null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phone,untangled.ui.forms.build_form(untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm,phone_number)], null);
});})(x53029_53035))
;


var x53030_53036 = untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot.prototype;

x53030_53036.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x53030_53036.om$next$IQuery$query$arity$1 = ((function (x53030_53036){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phone,om.next.get_query(untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm)], null)], null);
});})(x53030_53036))
;


x53030_53036.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x53030_53036.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x53030_53036){
return (function (this$,params){
var this$__$1 = this;
var phone_number = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db_SLASH_id,(1),cljs.core.cst$kw$phone_SLASH_type,cljs.core.cst$kw$home,cljs.core.cst$kw$phone_SLASH_number,"555-1212"], null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phone,untangled.ui.forms.build_form(untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm,phone_number)], null);
});})(x53030_53036))
;


untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot.cljs$lang$type = true;

untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot.cljs$lang$ctorStr = "untangled.ui.Forms--01-The-Basics/ValidatedPhoneRoot";

untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.Forms--01-The-Basics/ValidatedPhoneRoot");
});
untangled.ui.forms.form_field_valid_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$us_DASH_phone_QMARK_,(function (sym,value,args){
return cljs.core.seq(cljs.core.re_matches(/[(][0-9][0-9][0-9][)] [0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/,value));
}));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$Forms__01_The_Basics,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\n  ## Validation\n\n  There is a multimethod `(f/form-field-valid? [symbol value args])`\n  that dispatches on symbol (symbols are allowed in app state, lambdas are not). Form fields that support validation\n  will run that validation at their configured time (typically on blur).\n  Validation is therefore completely extensible. You need only supply a dispatch for your own validation symbol, and\n  declare it as the validator on a field (by symbol).\n\n  Validation is tri-state. The allowed states are `:valid` (checked and correct), `:invalid` (checked and incorrect),\n  and `:unchecked`.\n\n  You can trigger full-form validation (which you should do as part of your interaction with the form) by calling\nTODO: remove the need to pass the component? The form is just om/props of the component.\n  `(f/validate-entire-form! component form)`. This function invokes a transaction that will update the validation\n  markings on all declared fields (which in turn will re-render your UI).\n\n  If you want to check if a form is valid (without updating the markings in the app state...e.g. you want an inline\n  answer), then use `(f/valid? (f/validate-fields form))` to get an immediate answer. This is more computationally\n  expensive, but allows you to check the validity of the form without triggering an actual validation transaction against\n  the application state.\n\n  For example, the definition of a validator for US phone numbers could be:\n\n  ```\n  (defmethod f/form-field-valid? 'us-phone? [sym value args]\n    (seq (re-matches #\"[(][0-9][0-9][0-9][)] [0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]\" value)))\n  ```\n\n  The only change in your UI would be to add the validator to the form field declaration, along with a validation message:\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui ^:once ValidatedPhoneForm\n  static uc/InitialAppState\n  (initial-state [this params] (f/build-form this (or params {})))\n  static f/IForm\n  (form-spec [this] [(f/id-field :db/id)\n                     (f/text-input :phone/number :validator 'us-phone?) ; Addition of validator\n                     (f/dropdown-input :phone/type [(f/option :home \"Home\") (f/option :work \"Work\")])])\n  static om/IQuery\n  (query [this] [:db/id :phone/type :phone/number f/form-key])\n  static om/Ident\n  (ident [this props] [:phone/by-id (:db/id props)])\n  Object\n  (render [this]\n    (let [form (om/props this)]\n      (dom/div #js {:className \"form-horizontal\"}\n        (field-with-label this form :phone/type \"Phone type:\")\n        ;; One more parameter to give the validation error message:\n        (field-with-label this form :phone/number \"Number:\" \"Please format as (###) ###-####\")))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join('')], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hide_DASH_border,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$Forms__01_The_Basics,cljs.core.cst$kw$validated_DASH_phone_DASH_number], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"validated-phone-number",cljs.core.cst$kw$documentation,"Edit the phone field and then set the phone type. The blur will trigger validation",cljs.core.cst$kw$main_DASH_obj,devcards.core.dom_node_STAR_((function (state_atom__50267__auto__,node__50268__auto__){
untangled.client.core.mount(untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$initial_DASH_state,state_atom__50267__auto__], 0)),untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot,node__50268__auto__);

var G__53037 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom__50267__auto__,cljs.core.assoc,cljs.core.cst$kw$ui_SLASH_react_DASH_key,untangled.dom.unique_key());
});
var G__53038 = (1000);
return setTimeout(G__53037,G__53038);
})),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
if(typeof untangled.ui.Forms__01_The_Basics.PersonForm !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__01_The_Basics.PersonForm = (function untangled$ui$Forms__01_The_Basics$PersonForm(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.Forms__01_The_Basics.PersonForm.prototype = goog.object.clone(React.Component.prototype);
}

var x53043_53061 = untangled.ui.Forms__01_The_Basics.PersonForm.prototype;
x53043_53061.componentWillUpdate = ((function (x53043_53061){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___53062 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___53063 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___53062,next_ident__10196__auto___53063)){
var idxr__10197__auto___53064 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___53064 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___53064),((function (idxr__10197__auto___53064,ident__10195__auto___53062,next_ident__10196__auto___53063,this__10191__auto__,x53043_53061){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___53062], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___53063], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___53064,ident__10195__auto___53062,next_ident__10196__auto___53063,this__10191__auto__,x53043_53061))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x53043_53061))
;

x53043_53061.shouldComponentUpdate = ((function (x53043_53061){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__53045 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__53045);
} else {
return G__53045;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__53050 = this__10191__auto__.state;
var G__53051 = "omcljs$state";
return goog.object.get(G__53050,G__53051);
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
});})(x53043_53061))
;

x53043_53061.componentWillUnmount = ((function (x53043_53061){
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
});})(x53043_53061))
;

x53043_53061.componentDidUpdate = ((function (x53043_53061){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x53043_53061))
;

x53043_53061.isMounted = ((function (x53043_53061){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x53043_53061))
;

x53043_53061.componentWillMount = ((function (x53043_53061){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x53043_53061))
;

x53043_53061.render = ((function (x53043_53061){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_53052 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_53053 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_53054 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_53055 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_53056 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__53057 = om.next.props(this$);
var map__53057__$1 = ((((!((map__53057 == null)))?((((map__53057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53057.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53057):map__53057);
var props = map__53057__$1;
var phone_numbers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53057__$1,cljs.core.cst$kw$person_SLASH_phone_DASH_numbers);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "form-horizontal"}),cljs.core.array_seq([untangled.ui.Forms__01_The_Basics.field_with_label.cljs$core$IFn$_invoke$arity$5(this$,props,cljs.core.cst$kw$person_SLASH_name,"Full Name:","Please enter your first and last name."),untangled.ui.Forms__01_The_Basics.field_with_label.cljs$core$IFn$_invoke$arity$5(this$,props,cljs.core.cst$kw$person_SLASH_age,"Age:","That isn't a real age!"),untangled.ui.Forms__01_The_Basics.checkbox_with_label.cljs$core$IFn$_invoke$arity$4(this$,props,cljs.core.cst$kw$person_SLASH_registered_DASH_to_DASH_vote_QMARK_,"Registered?"),(cljs.core.truth_(untangled.ui.forms.current_value(props,cljs.core.cst$kw$person_SLASH_registered_DASH_to_DASH_vote_QMARK_))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Good on you!"], 0)):null),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(untangled.ui.Forms__01_The_Basics.ui_vphone_form,phone_numbers)], 0)),(cljs.core.truth_(untangled.ui.forms.valid_QMARK_.cljs$core$IFn$_invoke$arity$1(props))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["All fields have had been validated, and are valid"], 0)):null),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "button-group"}),cljs.core.array_seq([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": "btn btn-primary", "onClick": ((function (map__53057,map__53057__$1,props,phone_numbers,_STAR_reconciler_STAR_53052,_STAR_depth_STAR_53053,_STAR_shared_STAR_53054,_STAR_instrument_STAR_53055,_STAR_parent_STAR_53056,this$,this__10190__auto__,x53043_53061){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$sample_SLASH_add_DASH_phone),(function (){var x__8436__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,om.next.tempid.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$person,cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(props)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())))));
});})(map__53057,map__53057__$1,props,phone_numbers,_STAR_reconciler_STAR_53052,_STAR_depth_STAR_53053,_STAR_shared_STAR_53054,_STAR_instrument_STAR_53055,_STAR_parent_STAR_53056,this$,this__10190__auto__,x53043_53061))
}),cljs.core.array_seq(["Add Phone"], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": "btn btn-default", "disabled": untangled.ui.forms.valid_QMARK_.cljs$core$IFn$_invoke$arity$1(props), "onClick": ((function (map__53057,map__53057__$1,props,phone_numbers,_STAR_reconciler_STAR_53052,_STAR_depth_STAR_53053,_STAR_shared_STAR_53054,_STAR_instrument_STAR_53055,_STAR_parent_STAR_53056,this$,this__10190__auto__,x53043_53061){
return (function (){
return untangled.ui.forms.validate_entire_form_BANG_(this$,props);
});})(map__53057,map__53057__$1,props,phone_numbers,_STAR_reconciler_STAR_53052,_STAR_depth_STAR_53053,_STAR_shared_STAR_53054,_STAR_instrument_STAR_53055,_STAR_parent_STAR_53056,this$,this__10190__auto__,x53043_53061))
}),cljs.core.array_seq(["Validate"], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": "btn btn-default", "disabled": cljs.core.not(untangled.ui.forms.dirty_QMARK_(props)), "onClick": ((function (map__53057,map__53057__$1,props,phone_numbers,_STAR_reconciler_STAR_53052,_STAR_depth_STAR_53053,_STAR_shared_STAR_53054,_STAR_instrument_STAR_53055,_STAR_parent_STAR_53056,this$,this__10190__auto__,x53043_53061){
return (function (){
return untangled.ui.forms.reset_from_entity_BANG_(this$,props);
});})(map__53057,map__53057__$1,props,phone_numbers,_STAR_reconciler_STAR_53052,_STAR_depth_STAR_53053,_STAR_shared_STAR_53054,_STAR_instrument_STAR_53055,_STAR_parent_STAR_53056,this$,this__10190__auto__,x53043_53061))
}),cljs.core.array_seq(["UNDO"], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": "btn btn-default", "disabled": cljs.core.not(untangled.ui.forms.dirty_QMARK_(props)), "onClick": ((function (map__53057,map__53057__$1,props,phone_numbers,_STAR_reconciler_STAR_53052,_STAR_depth_STAR_53053,_STAR_shared_STAR_53054,_STAR_instrument_STAR_53055,_STAR_parent_STAR_53056,this$,this__10190__auto__,x53043_53061){
return (function (){
return untangled.ui.forms.commit_to_entity_BANG_(this$);
});})(map__53057,map__53057__$1,props,phone_numbers,_STAR_reconciler_STAR_53052,_STAR_depth_STAR_53053,_STAR_shared_STAR_53054,_STAR_instrument_STAR_53055,_STAR_parent_STAR_53056,this$,this__10190__auto__,x53043_53061))
}),cljs.core.array_seq(["Submit"], 0))], 0))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_53056;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_53055;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_53054;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_53053;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_53052;
}});})(x53043_53061))
;


untangled.ui.Forms__01_The_Basics.PersonForm.prototype.constructor = untangled.ui.Forms__01_The_Basics.PersonForm;

untangled.ui.Forms__01_The_Basics.PersonForm.prototype.constructor.displayName = "untangled.ui.Forms--01-The-Basics/PersonForm";

untangled.ui.Forms__01_The_Basics.PersonForm.prototype.om$isComponent = true;

var x53059_53065 = untangled.ui.Forms__01_The_Basics.PersonForm;
/** @nocollapse */
x53059_53065.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x53059_53065.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x53059_53065){
return (function (this$,params){
var this$__$1 = this;
return untangled.ui.forms.build_form(this$__$1,(function (){var or__7502__auto__ = params;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(x53059_53065))
;

/** @nocollapse */
x53059_53065.untangled$ui$forms$IForm$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x53059_53065.untangled$ui$forms$IForm$form_spec$arity$1 = ((function (x53059_53065){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.id_field(cljs.core.cst$kw$db_SLASH_id),untangled.ui.forms.subform_element(cljs.core.cst$kw$person_SLASH_phone_DASH_numbers,untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm,cljs.core.cst$kw$many),untangled.ui.forms.text_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$person_SLASH_name,cljs.core.array_seq([cljs.core.cst$kw$validator,cljs.core.cst$sym$name_DASH_valid_QMARK_], 0)),untangled.ui.forms.integer_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$person_SLASH_age,cljs.core.array_seq([cljs.core.cst$kw$validator,cljs.core.cst$sym$in_DASH_range_QMARK_,cljs.core.cst$kw$validator_DASH_args,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min,(1),cljs.core.cst$kw$max,(110)], null)], 0)),untangled.ui.forms.checkbox_input(cljs.core.cst$kw$person_SLASH_registered_DASH_to_DASH_vote_QMARK_)], null);
});})(x53059_53065))
;

/** @nocollapse */
x53059_53065.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x53059_53065.om$next$IQuery$query$arity$1 = ((function (x53059_53065){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_root_key,untangled.ui.forms.form_key,cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$person_SLASH_name,cljs.core.cst$kw$person_SLASH_age,cljs.core.cst$kw$person_SLASH_registered_DASH_to_DASH_vote_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$person_SLASH_phone_DASH_numbers,om.next.get_query(untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm)], null)], null);
});})(x53059_53065))
;

/** @nocollapse */
x53059_53065.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x53059_53065.om$next$Ident$ident$arity$2 = ((function (x53059_53065){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$people_SLASH_by_DASH_id,cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x53059_53065))
;


var x53060_53066 = untangled.ui.Forms__01_The_Basics.PersonForm.prototype;

x53060_53066.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x53060_53066.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x53060_53066){
return (function (this$,params){
var this$__$1 = this;
return untangled.ui.forms.build_form(this$__$1,(function (){var or__7502__auto__ = params;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(x53060_53066))
;


x53060_53066.untangled$ui$forms$IForm$ = cljs.core.PROTOCOL_SENTINEL;


x53060_53066.untangled$ui$forms$IForm$form_spec$arity$1 = ((function (x53060_53066){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.id_field(cljs.core.cst$kw$db_SLASH_id),untangled.ui.forms.subform_element(cljs.core.cst$kw$person_SLASH_phone_DASH_numbers,untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm,cljs.core.cst$kw$many),untangled.ui.forms.text_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$person_SLASH_name,cljs.core.array_seq([cljs.core.cst$kw$validator,cljs.core.cst$sym$name_DASH_valid_QMARK_], 0)),untangled.ui.forms.integer_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$person_SLASH_age,cljs.core.array_seq([cljs.core.cst$kw$validator,cljs.core.cst$sym$in_DASH_range_QMARK_,cljs.core.cst$kw$validator_DASH_args,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min,(1),cljs.core.cst$kw$max,(110)], null)], 0)),untangled.ui.forms.checkbox_input(cljs.core.cst$kw$person_SLASH_registered_DASH_to_DASH_vote_QMARK_)], null);
});})(x53060_53066))
;


x53060_53066.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x53060_53066.om$next$IQuery$query$arity$1 = ((function (x53060_53066){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_root_key,untangled.ui.forms.form_key,cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$person_SLASH_name,cljs.core.cst$kw$person_SLASH_age,cljs.core.cst$kw$person_SLASH_registered_DASH_to_DASH_vote_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$person_SLASH_phone_DASH_numbers,om.next.get_query(untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm)], null)], null);
});})(x53060_53066))
;


x53060_53066.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x53060_53066.om$next$Ident$ident$arity$2 = ((function (x53060_53066){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$people_SLASH_by_DASH_id,cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x53060_53066))
;


untangled.ui.Forms__01_The_Basics.PersonForm.cljs$lang$type = true;

untangled.ui.Forms__01_The_Basics.PersonForm.cljs$lang$ctorStr = "untangled.ui.Forms--01-The-Basics/PersonForm";

untangled.ui.Forms__01_The_Basics.PersonForm.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.Forms--01-The-Basics/PersonForm");
});
untangled.ui.Forms__01_The_Basics.ui_person_form = om.next.factory.cljs$core$IFn$_invoke$arity$1(untangled.ui.Forms__01_The_Basics.PersonForm);
if(typeof untangled.ui.Forms__01_The_Basics.Root !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__01_The_Basics.Root = (function untangled$ui$Forms__01_The_Basics$Root(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.Forms__01_The_Basics.Root.prototype = goog.object.clone(React.Component.prototype);
}

var x53071_53089 = untangled.ui.Forms__01_The_Basics.Root.prototype;
x53071_53089.componentWillUpdate = ((function (x53071_53089){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___53090 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___53091 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___53090,next_ident__10196__auto___53091)){
var idxr__10197__auto___53092 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___53092 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___53092),((function (idxr__10197__auto___53092,ident__10195__auto___53090,next_ident__10196__auto___53091,this__10191__auto__,x53071_53089){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___53090], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___53091], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___53092,ident__10195__auto___53090,next_ident__10196__auto___53091,this__10191__auto__,x53071_53089))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x53071_53089))
;

x53071_53089.shouldComponentUpdate = ((function (x53071_53089){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__53073 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__53073);
} else {
return G__53073;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__53078 = this__10191__auto__.state;
var G__53079 = "omcljs$state";
return goog.object.get(G__53078,G__53079);
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
});})(x53071_53089))
;

x53071_53089.componentWillUnmount = ((function (x53071_53089){
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
});})(x53071_53089))
;

x53071_53089.componentDidUpdate = ((function (x53071_53089){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x53071_53089))
;

x53071_53089.isMounted = ((function (x53071_53089){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x53071_53089))
;

x53071_53089.componentWillMount = ((function (x53071_53089){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x53071_53089))
;

x53071_53089.render = ((function (x53071_53089){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_53080 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_53081 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_53082 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_53083 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_53084 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__53085 = om.next.props(this$);
var map__53085__$1 = ((((!((map__53085 == null)))?((((map__53085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53085):map__53085);
var react_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53085__$1,cljs.core.cst$kw$ui_SLASH_react_DASH_key);
var person_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53085__$1,cljs.core.cst$kw$ui_SLASH_person_DASH_id);
var person = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53085__$1,cljs.core.cst$kw$person);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": react_key}),cljs.core.array_seq([(cljs.core.truth_(person)?(untangled.ui.Forms__01_The_Basics.ui_person_form.cljs$core$IFn$_invoke$arity$1 ? untangled.ui.Forms__01_The_Basics.ui_person_form.cljs$core$IFn$_invoke$arity$1(person) : untangled.ui.Forms__01_The_Basics.ui_person_form.call(null,person)):null)], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_53084;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_53083;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_53082;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_53081;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_53080;
}});})(x53071_53089))
;


untangled.ui.Forms__01_The_Basics.Root.prototype.constructor = untangled.ui.Forms__01_The_Basics.Root;

untangled.ui.Forms__01_The_Basics.Root.prototype.constructor.displayName = "untangled.ui.Forms--01-The-Basics/Root";

untangled.ui.Forms__01_The_Basics.Root.prototype.om$isComponent = true;

var x53087_53093 = untangled.ui.Forms__01_The_Basics.Root;
/** @nocollapse */
x53087_53093.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x53087_53093.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x53087_53093){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ui_SLASH_person_DASH_id,(1),cljs.core.cst$kw$person,untangled.client.core.initial_state(untangled.ui.Forms__01_The_Basics.PersonForm,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$db_SLASH_id,(1),cljs.core.cst$kw$person_SLASH_name,"Tony Kay",cljs.core.cst$kw$person_SLASH_age,(23),cljs.core.cst$kw$person_SLASH_registered_DASH_to_DASH_vote_QMARK_,false,cljs.core.cst$kw$person_SLASH_phone_DASH_numbers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.core.initial_state(untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db_SLASH_id,(22),cljs.core.cst$kw$phone_SLASH_type,cljs.core.cst$kw$work,cljs.core.cst$kw$phone_SLASH_number,"(123) 412-1212"], null)),untangled.client.core.initial_state(untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db_SLASH_id,(23),cljs.core.cst$kw$phone_SLASH_type,cljs.core.cst$kw$home,cljs.core.cst$kw$phone_SLASH_number,"(541) 555-1212"], null))], null)], null))], null);
});})(x53087_53093))
;

/** @nocollapse */
x53087_53093.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x53087_53093.om$next$IQuery$query$arity$1 = ((function (x53087_53093){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_person_DASH_id,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$person,om.next.get_query(untangled.ui.Forms__01_The_Basics.PersonForm)], null)], null);
});})(x53087_53093))
;


var x53088_53094 = untangled.ui.Forms__01_The_Basics.Root.prototype;

x53088_53094.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x53088_53094.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x53088_53094){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ui_SLASH_person_DASH_id,(1),cljs.core.cst$kw$person,untangled.client.core.initial_state(untangled.ui.Forms__01_The_Basics.PersonForm,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$db_SLASH_id,(1),cljs.core.cst$kw$person_SLASH_name,"Tony Kay",cljs.core.cst$kw$person_SLASH_age,(23),cljs.core.cst$kw$person_SLASH_registered_DASH_to_DASH_vote_QMARK_,false,cljs.core.cst$kw$person_SLASH_phone_DASH_numbers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.core.initial_state(untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db_SLASH_id,(22),cljs.core.cst$kw$phone_SLASH_type,cljs.core.cst$kw$work,cljs.core.cst$kw$phone_SLASH_number,"(123) 412-1212"], null)),untangled.client.core.initial_state(untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db_SLASH_id,(23),cljs.core.cst$kw$phone_SLASH_type,cljs.core.cst$kw$home,cljs.core.cst$kw$phone_SLASH_number,"(541) 555-1212"], null))], null)], null))], null);
});})(x53088_53094))
;


x53088_53094.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x53088_53094.om$next$IQuery$query$arity$1 = ((function (x53088_53094){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_person_DASH_id,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$person,om.next.get_query(untangled.ui.Forms__01_The_Basics.PersonForm)], null)], null);
});})(x53088_53094))
;


untangled.ui.Forms__01_The_Basics.Root.cljs$lang$type = true;

untangled.ui.Forms__01_The_Basics.Root.cljs$lang$ctorStr = "untangled.ui.Forms--01-The-Basics/Root";

untangled.ui.Forms__01_The_Basics.Root.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.Forms--01-The-Basics/Root");
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$Forms__01_The_Basics,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n  ## State Evolution\n\n  A form will initially record the pristine state of field values during `build-form`. As you interact with\n  the form the entity data will change (locally only). This allows the library to support:\n\n  - The ability to compare the original entity state with the current (edited) state\n  - Reset the entity state from the pristine condition\n  - Commit *just* the actual changes to the entity to a remote\n\n  **This, combined with a little server code, makes the form support full stack!**\n\n  You can trigger the following operations on a form:\n\n  - `(f/commit-to-entity! comp)` : Commit the current edits to the entity (no-op if the form doesn't validate)\n  - `(f/commit-to-entity! comp true)` : Commit the current edits to the entity AND the server (is a no-op if the form doesn't validate)\n  - `(f/reset-from-entity! comp)` : Undo the changes on the form (back to the pristine state of the original), (triggers validation after the reset)\n  - More coming...\n\n  ### State evolution within your own transactions\n\n  Any changes you make to your entity after `build-form` are technically considered form edits (and make the form *dirty*\n  and possibly *invalid*).  The built-in form fields just change the state of the entity, and you can too.\n\n  Commits will copy the entity state into the form's pristine holding area, and resets will copy from this pristine area\n  back to your entity.\n\n  The primary concern is that any custom fields that you create should be careful to only populate the value of fields\n  with things that are serializable via transit, since their updated values will need to be transmitted across the wire\n  for full-stack operation.\n\n  ## Composition\n\n  Form support augments normalized entities in your app database, so they can be easily composed! They are UI components, and have nothing special\n  about them other than the `f/form-key` state that is added to the entity (through your call of `build-form`).\n  You can convert any entity in your database to a form using the `build-form` function, meaning that you can load\n  entities as normal, and as you want to edit them\n  in a form, first mutate them into form-compatible entities with `build-form` (which will not touch the original\n  properties of the entity, just add `f/form-key`). Then render them with a UI component that shares your entity Ident,\n  but has a render method that renders the form fields with `form-field`.\n\n  Here is the source for an application that renders a Person form, where the person can have any nubmer of phone numbers,\n  each represented by a nested phone number entity/form. Note the use of `InitialAppState` in Root to build out sample\n  data.\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui ^:once ValidatedPhoneForm\n  static uc/InitialAppState\n  (initial-state [this params] (f/build-form this (or params {})))\n  static f/IForm\n  (form-spec [this] [(f/id-field :db/id)\n                     (f/text-input :phone/number :validator 'us-phone?) ; Addition of validator\n                     (f/dropdown-input :phone/type [(f/option :home \"Home\") (f/option :work \"Work\")])])\n  static om/IQuery\n  (query [this] [:db/id :phone/type :phone/number f/form-key])\n  static om/Ident\n  (ident [this props] [:phone/by-id (:db/id props)])\n  Object\n  (render [this]\n    (let [form (om/props this)]\n      (dom/div #js {:className \"form-horizontal\"}\n        (field-with-label this form :phone/type \"Phone type:\")\n        ;; One more parameter to give the validation error message:\n        (field-with-label this form :phone/number \"Number:\" \"Please format as (###) ###-####\")))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui ^:once PersonForm\n  static uc/InitialAppState\n  (initial-state [this params] (f/build-form this (or params {})))\n  static f/IForm\n  (form-spec [this] [(f/id-field :db/id)\n                     (f/subform-element :person/phone-numbers ValidatedPhoneForm :many)\n                     (f/text-input :person/name :validator 'name-valid?)\n                     (f/integer-input :person/age :validator 'in-range?\n                       :validator-args {:min 1 :max 110})\n                     (f/checkbox-input :person/registered-to-vote?)])\n  static om/IQuery\n  ; NOTE: f/form-root-key so that sub-forms will trigger render here\n  (query [this] [f/form-root-key f/form-key\n                 :db/id :person/name :person/age\n                 :person/registered-to-vote?\n                 {:person/phone-numbers (om/get-query ValidatedPhoneForm)}])\n  static om/Ident\n  (ident [this props] [:people/by-id (:db/id props)])\n  Object\n  (render [this]\n    (let [{:keys [person/phone-numbers] :as props} (om/props this)]\n      (dom/div #js {:className \"form-horizontal\"}\n        (field-with-label this props :person/name \"Full Name:\" \"Please enter your first and last name.\")\n        (field-with-label this props :person/age \"Age:\" \"That isn't a real age!\")\n        (checkbox-with-label this props :person/registered-to-vote? \"Registered?\")\n        (when (f/current-value props :person/registered-to-vote?)\n          (dom/div nil \"Good on you!\"))\n        (dom/div nil\n          (mapv ui-vphone-form phone-numbers))\n        (when (f/valid? props)\n          (dom/div nil \"All fields have had been validated, and are valid\"))\n        (dom/div #js {:className \"button-group\"}\n          (dom/button #js {:className \"btn btn-primary\"\n                           :onClick   #(om/transact! this\n                                         `[(sample/add-phone ~{:id     (om/tempid)\n                                                               :person (:db/id props)})])}\n            \"Add Phone\")\n          (dom/button #js {:className \"btn btn-default\" :disabled (f/valid? props)\n                           :onClick   #(f/validate-entire-form! this props)}\n            \"Validate\")\n          (dom/button #js {:className \"btn btn-default\", :disabled (not (f/dirty? props))\n                           :onClick   #(f/reset-from-entity! this props)}\n            \"UNDO\")\n          (dom/button #js {:className \"btn btn-default\", :disabled (not (f/dirty? props))\n                           :onClick   #(f/commit-to-entity! this)}\n            \"Submit\"))))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui ^:once Root\n  static uc/InitialAppState\n  (initial-state [this params]\n    {:ui/person-id 1\n     :person       (uc/initial-state PersonForm\n                     {:db/id                      1\n                      :person/name                \"Tony Kay\"\n                      :person/age                 23\n                      :person/registered-to-vote? false\n                      :person/phone-numbers       [(uc/initial-state ValidatedPhoneForm\n                                                     {:db/id        22\n                                                      :phone/type   :work\n                                                      :phone/number \"(123) 412-1212\"})\n                                                   (uc/initial-state ValidatedPhoneForm\n                                                     {:db/id        23\n                                                      :phone/type   :home\n                                                      :phone/number \"(541) 555-1212\"})]})})\n  static om/IQuery\n  (query [this] [:ui/person-id {:person (om/get-query PersonForm)}])\n  Object\n  (render [this]\n    (let [{:keys [ui/react-key ui/person-id person]} (om/props this)]\n      (dom/div #js {:key react-key}\n        (when person\n          (ui-person-form person))))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n\n  ### Composition and Rendering Refresh\n\n  The one caveat is that when forms are nested the mutations on the nested fields cannot (due to the design of Om) refresh\n  the parent automatically. To work around this, all built-in form mutations will trigger follow-on reads of\n  the special property `f/form-root-key`. So, if you add that to your parent form's query, rendering of the top-level\n  form elements (e.g. buttons that control submission) will properly update when any element of a subform changes.\n\n  ### Adding Sub-form Elements\n\n  Adding a phone number (which acts as a sub-form) is done via the add-phone-mutation, which looks like this:\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defn add-phone-mutation [{:keys [state]} k {:keys [id person]}]\n  {:action (fn []\n             (let [new-phone    (f/build-form ValidatedPhoneForm {:db/id id :phone/type :home :phone/number \"\"})\n                   person-ident [:people/by-id person]\n                   phone-ident  (om/ident ValidatedPhoneForm new-phone)]\n               (swap! state assoc-in phone-ident new-phone)\n               (uc/integrate-ident! state phone-ident :append (conj person-ident :person/phone-numbers))))})"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n  Notice that there is nothing really special going on here. Just add an additional item to the database (which is\n  augmented with `f/build-form`) and integrate it's ident!\n\n  If you look carefully at `PersonForm` you'll see the button to trigger adding a phone number, where we're using\n  `(om/tempid)` to generate a temporary ID for the new phone number.\n\n  ### Compositional Dirty-Checking, Validation, and Submission\n\n  The code also shows how you would compose the checks. The `dirty?` function combines the results of the nested forms\n  together with the top form. You could do the same for validations.\n\n  The `Save` button does a similar thing: it submits the phone numbers, and then the top. Note that Untangled combines\n  mutations that happen in the same thread sequence (e.g. you have not given up the thread for rendering). So, all of\n  those commits will be sent to the server as a single transaction (if you include the remote parameter).\n  "], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hide_DASH_border,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$Forms__01_The_Basics,cljs.core.cst$kw$sample_DASH_form_DASH_1], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"sample-form-1",cljs.core.cst$kw$documentation,"This card shows a very simple form in action. (Edit the code and set :inspect-data to true to watch app state)",cljs.core.cst$kw$main_DASH_obj,devcards.core.dom_node_STAR_((function (state_atom__50267__auto__,node__50268__auto__){
untangled.client.core.mount(untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$initial_DASH_state,state_atom__50267__auto__], 0)),untangled.ui.Forms__01_The_Basics.Root,node__50268__auto__);

var G__53095 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom__50267__auto__,cljs.core.assoc,cljs.core.cst$kw$ui_SLASH_react_DASH_key,untangled.dom.unique_key());
});
var G__53096 = (1000);
return setTimeout(G__53095,G__53096);
})),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inspect_DASH_data,false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$Forms__01_The_Basics,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["## Adding Form Field Types\n\n  Adding a new kind of form field is simple:\n\n  - Create a method that returns a map of input configuration values\n  - Add a multimethod that can render your field with appropriate hooks into the logic\n\n  The text input field is implemented like this:\n\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defn text-input\n  \"Declare a text input on a form. The allowed options are named parameters:\n\n  :className nm    Additional CSS classnames to include on the input (as a string)\n  :validator sym   A symbol to target the dispatch of validation\n  :validator-args  Arguments that will be passed to the validator\n  :placeholder     The input placeholder. Supports a lambda or string\n  :default-value   A value to use in the field if the app-state value is nil\n  :validate-on-blur? Should the field be validated on a blur event (default = true)\n  \"\n  [name & {:keys [validator validator-args className default-value placeholder validate-on-blur?]\n           :or   {placeholder \"\" default-value \"\" className \"\" validate-on-blur? true}}]\n  (cond-> {:input/name              name\n           :input/default-value     default-value\n           :input/placeholder       placeholder\n           :input/css-class         className\n           :input/validate-on-blur? validate-on-blur?\n           :input/type              ::text}\n    validator (assoc :input/validator validator)\n    validator-args (assoc :input/validator-args validator-args)))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n\n  The keys in an input's configuration map are:\n\n  - `:input/name` : Required. What you want to call the field. Must match an entity property (e.g. :person/name).\n  - `:input/type` : Required. Usually namespaced. This should be a unique key that indicates what kind of input you're making\n  - `:input/validator` : Optional. Specifies a symbol (dispatch of the form-field-valid? multimethod).\n  - `:input/validator-args` : Optional. If there is a validator, it is called with the validator symbol, the questionable value, and these args.\n  - Any you want to define : This is a map. Put whatever else you want in this map to help with rendering (e.g. placeholder text,\n   class names, style, etc).\n\n  and its renderer looks like this:\n\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Source not found"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n  ```\n  (defmethod form-field* ::text [component form name] (render-text-field component form name))\n  ```\n\n  You can retrieve a field's current form value with `(f/current-value form field-name)`, and you can obtain\n  your field's configuration (map of :input/??? values) with `(f/field-config form field-name)`.\n\n  The `form-field*` multimethod should, in general, return as little as possible, but you are allowed to do whatever you want.\n  You are free to make form field renderers that render much more complex DOM, an SVG, etc.\n\n  The following built-in mutations can (and should) be used in your event handlers:\n\n  - `(untangled.ui.form/validate-field {:form-id [:ident/by-x n] :field :field-name})` - Run validation on the given form/field. Marks the form state for the field to `:invalid` or `:valid`. Fields without validators\n  will be marked `:valid`.\n  - `(untangled.ui.form/set-field {:form-id [:ident/by-x n] :field :field-name :value raw-value})` - Set the raw-value (you can use any type) onto the form's placeholder state (not on the entity)\n  - Others listed elsewhere, like those that commit, validate, etc.\n\n  ## Other Functions of Interest\n\n  Since the `form` is also your entity, you may of course pull any entity data from the `form` map. (E.g. you can\n  for example directly access `(:person/name person-form)`). The form attributes are stored under the `f/form-key` key\n  and are intended to be opaque. Do not sneak access into the data structure, since we may choose to change the structure\n  in future versions. Instead, use these:\n\n  - `f/current-value` : Get the most recent value of a field from a form\n  - `f/current-validity` : Get the most recent result of validation on a field\n  - `f/valid?` : Test if the form (or a field) is currently marked valid (must run validation separately)\n  - `f/invalid?` : Test if the form (or a field) is currently marked invalid (must run validation separately)\n  - `f/field-names` : Get the field names on a form\n  - `f/form-id` : returns the Om Ident of the form (which is also the ident of the entity)\n  - `f/validate-fields` : returns a new version of the form with the fields marked with validation. Pure function.\n  - `f/validate-entire-form!` : Transacts a mutation that runs and sets validation markers on the form (which will update UI)\n   "], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hide_DASH_border,true], null))], 0))], null));
})], null));

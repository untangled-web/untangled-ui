// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.ui.Forms__01_The_Basics');
goog.require('cljs.core');
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

cljs.core._add_method.call(null,untangled.ui.forms.form_field_valid_QMARK_,new cljs.core.Symbol(null,"name-valid?","name-valid?",-1019542990,null),(function (_,value,args){
var trimmed_value = clojure.string.trim.call(null,value);
return clojure.string.includes_QMARK_.call(null,trimmed_value," ");
}));
/**
 * A non-library helper function, written by you to help lay out your form.
 */
untangled.ui.Forms__01_The_Basics.field_with_label = (function untangled$ui$Forms__01_The_Basics$field_with_label(var_args){
var args706297 = [];
var len__28871__auto___706302 = arguments.length;
var i__28872__auto___706303 = (0);
while(true){
if((i__28872__auto___706303 < len__28871__auto___706302)){
args706297.push((arguments[i__28872__auto___706303]));

var G__706304 = (i__28872__auto___706303 + (1));
i__28872__auto___706303 = G__706304;
continue;
} else {
}
break;
}

var G__706299 = args706297.length;
switch (G__706299) {
case 4:
return untangled.ui.Forms__01_The_Basics.field_with_label.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return untangled.ui.Forms__01_The_Basics.field_with_label.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args706297.length)].join('')));

}
});

untangled.ui.Forms__01_The_Basics.field_with_label.cljs$core$IFn$_invoke$arity$4 = (function (comp,form,name,label){
return untangled.ui.Forms__01_The_Basics.field_with_label.call(null,comp,form,name,label,null);
});

untangled.ui.Forms__01_The_Basics.field_with_label.cljs$core$IFn$_invoke$arity$5 = (function (comp,form,name,label,validation_message){
return om.dom.div.call(null,({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("form-group"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(untangled.ui.forms.invalid_QMARK_.call(null,form,name))?" has-error":""))].join('')}),om.dom.label.call(null,({"className": "col-sm-2", "htmlFor": name}),label),om.dom.div.call(null,({"className": "col-sm-10"}),untangled.ui.forms.form_field.call(null,comp,form,name)),(cljs.core.truth_((function (){var and__27638__auto__ = validation_message;
if(cljs.core.truth_(and__27638__auto__)){
return untangled.ui.forms.invalid_QMARK_.call(null,form,name);
} else {
return and__27638__auto__;
}
})())?om.dom.span.call(null,({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("col-sm-offset-2 col-sm-10"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')}),validation_message):null));
});

untangled.ui.Forms__01_The_Basics.field_with_label.cljs$lang$maxFixedArity = 5;

/**
 * A helper function to lay out checkboxes.
 */
untangled.ui.Forms__01_The_Basics.checkbox_with_label = (function untangled$ui$Forms__01_The_Basics$checkbox_with_label(var_args){
var args706324 = [];
var len__28871__auto___706331 = arguments.length;
var i__28872__auto___706333 = (0);
while(true){
if((i__28872__auto___706333 < len__28871__auto___706331)){
args706324.push((arguments[i__28872__auto___706333]));

var G__706334 = (i__28872__auto___706333 + (1));
i__28872__auto___706333 = G__706334;
continue;
} else {
}
break;
}

var G__706328 = args706324.length;
switch (G__706328) {
case 4:
return untangled.ui.Forms__01_The_Basics.checkbox_with_label.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return untangled.ui.Forms__01_The_Basics.checkbox_with_label.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args706324.length)].join('')));

}
});

untangled.ui.Forms__01_The_Basics.checkbox_with_label.cljs$core$IFn$_invoke$arity$4 = (function (comp,form,name,label){
return untangled.ui.Forms__01_The_Basics.field_with_label.call(null,comp,form,name,label,null);
});

untangled.ui.Forms__01_The_Basics.checkbox_with_label.cljs$core$IFn$_invoke$arity$5 = (function (comp,form,name,label,validation_message){
return om.dom.div.call(null,({"className": "checkbox"}),om.dom.label.call(null,null,untangled.ui.forms.form_field.call(null,comp,form,name),label));
});

untangled.ui.Forms__01_The_Basics.checkbox_with_label.cljs$lang$maxFixedArity = 5;

if(typeof untangled.ui.Forms__01_The_Basics.PhoneForm !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__01_The_Basics.PhoneForm = (function untangled$ui$Forms__01_The_Basics$PhoneForm(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.Forms__01_The_Basics.PhoneForm.prototype = goog.object.clone(React.Component.prototype);
}

var x706354_706382 = untangled.ui.Forms__01_The_Basics.PhoneForm.prototype;
x706354_706382.componentWillUpdate = ((function (x706354_706382){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___706387 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___706388 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___706387,next_ident__29856__auto___706388)){
var idxr__29857__auto___706394 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___706394 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___706394),((function (idxr__29857__auto___706394,ident__29855__auto___706387,next_ident__29856__auto___706388,this__29851__auto__,x706354_706382){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___706387], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___706388], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___706394,ident__29855__auto___706387,next_ident__29856__auto___706388,this__29851__auto__,x706354_706382))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x706354_706382))
;

x706354_706382.shouldComponentUpdate = ((function (x706354_706382){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__706356 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__706356);
} else {
return G__706356;
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
});})(x706354_706382))
;

x706354_706382.componentWillUnmount = ((function (x706354_706382){
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
});})(x706354_706382))
;

x706354_706382.componentDidUpdate = ((function (x706354_706382){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x706354_706382))
;

x706354_706382.isMounted = ((function (x706354_706382){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x706354_706382))
;

x706354_706382.componentWillMount = ((function (x706354_706382){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x706354_706382))
;

x706354_706382.render = ((function (x706354_706382){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_706369 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_706370 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_706371 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_706372 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_706373 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var form = om.next.props.call(null,this$);
return om.dom.div.call(null,({"className": "form-horizontal"}),untangled.ui.Forms__01_The_Basics.field_with_label.call(null,this$,form,new cljs.core.Keyword("phone","type","phone/type",1541079546),"Phone type:"),untangled.ui.Forms__01_The_Basics.field_with_label.call(null,this$,form,new cljs.core.Keyword("phone","number","phone/number",1397184156),"Number:"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_706373;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_706372;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_706371;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_706370;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_706369;
}});})(x706354_706382))
;


untangled.ui.Forms__01_The_Basics.PhoneForm.prototype.constructor = untangled.ui.Forms__01_The_Basics.PhoneForm;

untangled.ui.Forms__01_The_Basics.PhoneForm.prototype.constructor.displayName = "untangled.ui.Forms--01-The-Basics/PhoneForm";

untangled.ui.Forms__01_The_Basics.PhoneForm.prototype.om$isComponent = true;

var x706378_706445 = untangled.ui.Forms__01_The_Basics.PhoneForm;
/** @nocollapse */
x706378_706445.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706378_706445.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x706378_706445){
return (function (this$,params){
var this$__$1 = this;
return untangled.ui.forms.build_form.call(null,this$__$1,(function (){var or__27650__auto__ = params;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(x706378_706445))
;

/** @nocollapse */
x706378_706445.untangled$ui$forms$IForm$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706378_706445.untangled$ui$forms$IForm$form_spec$arity$1 = ((function (x706378_706445){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.id_field.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098)),untangled.ui.forms.text_input.call(null,new cljs.core.Keyword("phone","number","phone/number",1397184156),new cljs.core.Keyword(null,"className","className",-1983287057),"form-control"),untangled.ui.forms.dropdown_input.call(null,new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.option.call(null,new cljs.core.Keyword(null,"home","home",-74557309),"Home"),untangled.ui.forms.option.call(null,new cljs.core.Keyword(null,"work","work",385770312),"Work")], null))], null);
});})(x706378_706445))
;

/** @nocollapse */
x706378_706445.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706378_706445.om$next$IQuery$query$arity$1 = ((function (x706378_706445){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.Keyword("phone","number","phone/number",1397184156),untangled.ui.forms.form_key], null);
});})(x706378_706445))
;

/** @nocollapse */
x706378_706445.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706378_706445.om$next$Ident$ident$arity$2 = ((function (x706378_706445){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phone","by-id","phone/by-id",-2109894411),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x706378_706445))
;


var x706380_706464 = untangled.ui.Forms__01_The_Basics.PhoneForm.prototype;

x706380_706464.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x706380_706464.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x706380_706464){
return (function (this$,params){
var this$__$1 = this;
return untangled.ui.forms.build_form.call(null,this$__$1,(function (){var or__27650__auto__ = params;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(x706380_706464))
;


x706380_706464.untangled$ui$forms$IForm$ = cljs.core.PROTOCOL_SENTINEL;


x706380_706464.untangled$ui$forms$IForm$form_spec$arity$1 = ((function (x706380_706464){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.id_field.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098)),untangled.ui.forms.text_input.call(null,new cljs.core.Keyword("phone","number","phone/number",1397184156),new cljs.core.Keyword(null,"className","className",-1983287057),"form-control"),untangled.ui.forms.dropdown_input.call(null,new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.option.call(null,new cljs.core.Keyword(null,"home","home",-74557309),"Home"),untangled.ui.forms.option.call(null,new cljs.core.Keyword(null,"work","work",385770312),"Work")], null))], null);
});})(x706380_706464))
;


x706380_706464.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x706380_706464.om$next$IQuery$query$arity$1 = ((function (x706380_706464){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.Keyword("phone","number","phone/number",1397184156),untangled.ui.forms.form_key], null);
});})(x706380_706464))
;


x706380_706464.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x706380_706464.om$next$Ident$ident$arity$2 = ((function (x706380_706464){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phone","by-id","phone/by-id",-2109894411),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x706380_706464))
;


untangled.ui.Forms__01_The_Basics.PhoneForm.cljs$lang$type = true;

untangled.ui.Forms__01_The_Basics.PhoneForm.cljs$lang$ctorStr = "untangled.ui.Forms--01-The-Basics/PhoneForm";

untangled.ui.Forms__01_The_Basics.PhoneForm.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.Forms--01-The-Basics/PhoneForm");
});
untangled.ui.Forms__01_The_Basics.ui_phone_form = om.next.factory.call(null,untangled.ui.Forms__01_The_Basics.PhoneForm,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
untangled.ui.Forms__01_The_Basics.add_phone_mutation = (function untangled$ui$Forms__01_The_Basics$add_phone_mutation(p__706504,k,p__706505){
var map__706512 = p__706504;
var map__706512__$1 = ((((!((map__706512 == null)))?((((map__706512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706512):map__706512);
var state = cljs.core.get.call(null,map__706512__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__706513 = p__706505;
var map__706513__$1 = ((((!((map__706513 == null)))?((((map__706513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706513):map__706513);
var id = cljs.core.get.call(null,map__706513__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var person = cljs.core.get.call(null,map__706513__$1,new cljs.core.Keyword(null,"person","person",-1059806875));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__706512,map__706512__$1,state,map__706513,map__706513__$1,id,person){
return (function (){
var new_phone = untangled.ui.forms.build_form.call(null,untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword("phone","number","phone/number",1397184156),""], null));
var person_ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("people","by-id","people/by-id",1144298454),person], null);
var phone_ident = om.next.ident.call(null,untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm,new_phone);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,phone_ident,new_phone);

return untangled.client.core.integrate_ident_BANG_.call(null,state,phone_ident,new cljs.core.Keyword(null,"append","append",-291298229),cljs.core.conj.call(null,person_ident,new cljs.core.Keyword("person","phone-numbers","person/phone-numbers",1560599295)));
});})(map__706512,map__706512__$1,state,map__706513,map__706513__$1,id,person))
], null);
});
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("sample","add-phone","sample/add-phone",-836029937,null),(function (e,k,p){
return untangled.ui.Forms__01_The_Basics.add_phone_mutation.call(null,e,k,p);
}));
/**
 * @constructor
 */
untangled.ui.Forms__01_The_Basics.PhoneRoot = (function untangled$ui$Forms__01_The_Basics$PhoneRoot(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.Forms__01_The_Basics.PhoneRoot.prototype = goog.object.clone(React.Component.prototype);

var x706529_706565 = untangled.ui.Forms__01_The_Basics.PhoneRoot.prototype;
x706529_706565.componentWillUpdate = ((function (x706529_706565){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___706593 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___706594 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___706593,next_ident__29856__auto___706594)){
var idxr__29857__auto___706604 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___706604 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___706604),((function (idxr__29857__auto___706604,ident__29855__auto___706593,next_ident__29856__auto___706594,this__29851__auto__,x706529_706565){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___706593], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___706594], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___706604,ident__29855__auto___706593,next_ident__29856__auto___706594,this__29851__auto__,x706529_706565))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x706529_706565))
;

x706529_706565.shouldComponentUpdate = ((function (x706529_706565){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__706536 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__706536);
} else {
return G__706536;
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
});})(x706529_706565))
;

x706529_706565.componentWillUnmount = ((function (x706529_706565){
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
});})(x706529_706565))
;

x706529_706565.componentDidUpdate = ((function (x706529_706565){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x706529_706565))
;

x706529_706565.isMounted = ((function (x706529_706565){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x706529_706565))
;

x706529_706565.componentWillMount = ((function (x706529_706565){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x706529_706565))
;

x706529_706565.render = ((function (x706529_706565){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_706547 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_706548 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_706549 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_706550 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_706551 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var map__706553 = om.next.props.call(null,this$);
var map__706553__$1 = ((((!((map__706553 == null)))?((((map__706553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706553.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706553):map__706553);
var phone = cljs.core.get.call(null,map__706553__$1,new cljs.core.Keyword(null,"phone","phone",-763596057));
return om.dom.div.call(null,null,untangled.ui.Forms__01_The_Basics.ui_phone_form.call(null,phone));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_706551;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_706550;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_706549;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_706548;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_706547;
}});})(x706529_706565))
;


untangled.ui.Forms__01_The_Basics.PhoneRoot.prototype.constructor = untangled.ui.Forms__01_The_Basics.PhoneRoot;

untangled.ui.Forms__01_The_Basics.PhoneRoot.prototype.constructor.displayName = "untangled.ui.Forms--01-The-Basics/PhoneRoot";

untangled.ui.Forms__01_The_Basics.PhoneRoot.prototype.om$isComponent = true;

var x706559_706784 = untangled.ui.Forms__01_The_Basics.PhoneRoot;
/** @nocollapse */
x706559_706784.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706559_706784.om$next$IQuery$query$arity$1 = ((function (x706559_706784){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phone","phone",-763596057),om.next.get_query.call(null,untangled.ui.Forms__01_The_Basics.PhoneForm)], null)], null);
});})(x706559_706784))
;

/** @nocollapse */
x706559_706784.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706559_706784.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x706559_706784){
return (function (this$,params){
var this$__$1 = this;
var phone_number = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword("phone","number","phone/number",1397184156),"555-1212"], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phone","phone",-763596057),untangled.ui.forms.build_form.call(null,untangled.ui.Forms__01_The_Basics.PhoneForm,phone_number)], null);
});})(x706559_706784))
;


var x706560_706798 = untangled.ui.Forms__01_The_Basics.PhoneRoot.prototype;

x706560_706798.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x706560_706798.om$next$IQuery$query$arity$1 = ((function (x706560_706798){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phone","phone",-763596057),om.next.get_query.call(null,untangled.ui.Forms__01_The_Basics.PhoneForm)], null)], null);
});})(x706560_706798))
;


x706560_706798.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x706560_706798.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x706560_706798){
return (function (this$,params){
var this$__$1 = this;
var phone_number = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword("phone","number","phone/number",1397184156),"555-1212"], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phone","phone",-763596057),untangled.ui.forms.build_form.call(null,untangled.ui.Forms__01_The_Basics.PhoneForm,phone_number)], null);
});})(x706560_706798))
;


untangled.ui.Forms__01_The_Basics.PhoneRoot.cljs$lang$type = true;

untangled.ui.Forms__01_The_Basics.PhoneRoot.cljs$lang$ctorStr = "untangled.ui.Forms--01-The-Basics/PhoneRoot";

untangled.ui.Forms__01_The_Basics.PhoneRoot.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.Forms--01-The-Basics/PhoneRoot");
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.Forms__01_The_Basics","untangled.ui.Forms__01_The_Basics",683593588),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"# Forms \u2013 The Basics\n\n  Generic form support is a primary rapid appliation development feature. Fortunately, the overall structure of Om Next\n  and Untangled makes it relatively simple to write form support in a general-purpose, composeable manner. This library\n  defines form support that has:\n\n  - Declarative forms\n  - An extensible set of form fields\n  - Extensible validation\n  - Separation of form UI from form logic\n  - Remote integration with form <-> entity\n  - Local integration with entities in the browser database\n\n  The following `requires` define the namespacing used in the examples:\n\n  ```\n  (ns your-ns\n    (:require\n      [untangled.client.cards :refer [untangled-app]]\n      [clojure.string :as str]\n      [com.stuartsierra.component :as component]\n      [om.dom :as dom]\n      [om.next :as om :refer [defui]]\n      [untangled.client.core :as uc]\n      [untangled.client.mutations :as m]\n      [untangled.ui.forms :as f]\n      [untangled.i18n :refer [tr]]))\n  ```\n\n  **IMPORTANT NOTE**: When we use the parameter `form` or the word 'form' in the descriptions below, we mean the data\n  of the entire entity from an Om table that normally represents something in your application (like a person, phone number, etc).\n  This library *augments* your database entry with form support data (your 'person' becomes a 'person' AND a 'form'). In\n  raw technical terms, the `build-form` function takes a map, and adds a `f/form-key { ... }` entry *to it*. The only\n  implication for your UI is that your component queries must be expanded to include queries for this additional support\n  data.\n\n  ## Your Component as a Form\n\n  Components that wish to act as forms must meet the following requirements (here `f` is an alias for the forms namespace):\n\n  - They must implement `f/IForm`\n      - The fields method must return a list of fields that includes an `id-field`\n  - They must implement `om/Ident`\n  - They must implement `om/IQuery`, and include extra bits of form query (the key `f/form-key`)\n  - The app state of the entity acting as a form must be augmented via `f/build-form` (e.g. using a mutation or app initialization)\n  - They render the form fields using `f/form-field`.\n\n  ### Step 1: Declare the Form Fields\n\n  Form fields are declared on the ui component that will render the form via the `f/IForm` protocol. The fields themselves\n  are declared with function calls that correspond to the field type:\n\n  - `id-field` : A (meant-to-be-hidden) form field that corresponds to the attribute that uniquely identifies the entity being edited. Required for much of the interesting support.\n  - `text-input` : An optionally validated input for strings.\n  - `dropdown-input` : A menu that allows the user to choose from a set of values.\n  - `checkbox-input` : A boolean control\n  - your-input-here! : Form support is extensible. Whatever interaction you can imagine can be added to a form.\n\n  Form fields are really just simple maps of attributes that describe the configuration of the specified input.\n\n  The built-in support for doing form logic expects the fields to be declared on the component that will\n  render the form.\n\n  ```\n  (om/defui MyForm\n    static f/IForm\n    (form-spec [this] [(f/id-field :db/id)\n                       (f/text-input :person/name)\n                       ...]\n    ...\n  ```\n\n  ## Step 2: Rendering the Form Fields\n\n  The form fields themselves are rendered by calling `(f/form-field form field-name)`. This method **only** renders\n  the simple input itself.\n\n  `(f/form-field my-form :name)` --- outputs ---> `(dom/input #js { ... })`\n\n  This is the minimum we can do to ensure that the logic is correctly connected, while not interfering with your\n  ability to render the form however you please.\n\n  You'll commonly write some functions of your own that combine other DOM markup with this, such as the function\n  `field-with-label` shown in the example. Additional functions like `f/invalid?` can be used to make decisions about\n  showing/hiding validation messages.\n\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defn field-with-label\n  \"A non-library helper function, written by you to help lay out your form.\"\n  ([comp form name label] (field-with-label comp form name label nil))\n  ([comp form name label validation-message]\n   (dom/div #js {:className (str \"form-group\" (if (f/invalid? form name) \" has-error\" \"\"))}\n     (dom/label #js {:className \"col-sm-2\" :htmlFor name} label)\n     ;; THE LIBRARY SUPPLIES f/form-field. Use it to render the actual field\n     (dom/div #js {:className \"col-sm-10\"} (f/form-field comp form name))\n     (when (and validation-message (f/invalid? form name))\n       (dom/span #js {:className (str \"col-sm-offset-2 col-sm-10\" name)} validation-message)))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n\n  **The rendering of the form is pretty much up to you! Thus, your forms can be as pretty (or ugly) as you care to make\n  them. No worrying about figuring out how we render them, and then trying to make *that* look good.**\n\n  That said, there is nothing preventing you (or us) from supplying a library function that can produce reasonable looking\n  reusable form rendering.\n\n  ## Step 3: Setting Up the Form State\n\n  A form can augment any entity in an app database table in your client application. The `f/build-form` function\n  can take any such entity and add form support to it. The result is perfectly compatible with the original entity. The\n  example shown above is doing this on application start, but it is trivial to compose `f/build-form` into a mutation\n  (for example, a mutation that is changing the UI to display the form can simultaneously initialize the entity to-be-edited\n  at the same time.\n\n  ## A Complete Form Component\n\n  If we compose the above form into this UI root:\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui ^:once PhoneForm\n  static uc/InitialAppState\n  (initial-state [this params] (f/build-form this (or params {})))\n  static f/IForm\n  (form-spec [this] [(f/id-field :db/id)                    ; Mark which thing is the ID of this entity\n                     (f/text-input :phone/number :className \"form-control\")\n                     (f/dropdown-input :phone/type [(f/option :home \"Home\") (f/option :work \"Work\")])])\n  static om/IQuery\n  (query [this] [:db/id :phone/type :phone/number f/form-key]) ; Don't forget f/form-key!\n  static om/Ident\n  (ident [this props] [:phone/by-id (:db/id props)])\n  Object\n  (render [this]\n    (let [form (om/props this)]\n      (dom/div #js {:className \"form-horizontal\"}\n        (field-with-label this form :phone/type \"Phone type:\") ; Use your own helpers to render out the fields\n        (field-with-label this form :phone/number \"Number:\")))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui PhoneRoot\n  static om/IQuery\n  (query [this] [{:phone (om/get-query PhoneForm)}])\n  static uc/InitialAppState\n  (initial-state [this params]\n    (let [phone-number {:db/id 1 :phone/type :home :phone/number \"555-1212\"}]\n      {:phone (f/build-form PhoneForm phone-number)}))\n  Object\n  (render [this]\n    (let [{:keys [phone]} (om/props this)]\n      (dom/div nil\n        (ui-phone-form phone)))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"We can embed it into an active dev card to play with it (you may edit the devcard options to include :"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.Forms__01_The_Basics","untangled.ui.Forms__01_The_Basics",683593588),new cljs.core.Keyword(null,"phone-form","phone-form",93598632)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"phone-form",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"A Sample Form (edit this card and set `:inspect-data` to `true` to see the augmented data)",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,(function (state_atom__37612__auto__,node__37613__auto__){
untangled.client.core.mount.call(null,untangled.client.core.new_untangled_client.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),state_atom__37612__auto__),untangled.ui.Forms__01_The_Basics.PhoneRoot,node__37613__auto__);

return setTimeout((function (){
return cljs.core.swap_BANG_.call(null,state_atom__37612__auto__,cljs.core.assoc,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));
}),(1000));
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
if(typeof untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm = (function untangled$ui$Forms__01_The_Basics$ValidatedPhoneForm(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm.prototype = goog.object.clone(React.Component.prototype);
}

var x706944_707016 = untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm.prototype;
x706944_707016.componentWillUpdate = ((function (x706944_707016){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___707022 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___707023 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___707022,next_ident__29856__auto___707023)){
var idxr__29857__auto___707032 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___707032 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___707032),((function (idxr__29857__auto___707032,ident__29855__auto___707022,next_ident__29856__auto___707023,this__29851__auto__,x706944_707016){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___707022], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___707023], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___707032,ident__29855__auto___707022,next_ident__29856__auto___707023,this__29851__auto__,x706944_707016))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x706944_707016))
;

x706944_707016.shouldComponentUpdate = ((function (x706944_707016){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__706952 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__706952);
} else {
return G__706952;
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
});})(x706944_707016))
;

x706944_707016.componentWillUnmount = ((function (x706944_707016){
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
});})(x706944_707016))
;

x706944_707016.componentDidUpdate = ((function (x706944_707016){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x706944_707016))
;

x706944_707016.isMounted = ((function (x706944_707016){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x706944_707016))
;

x706944_707016.componentWillMount = ((function (x706944_707016){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x706944_707016))
;

x706944_707016.render = ((function (x706944_707016){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_706981 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_706982 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_706983 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_706984 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_706985 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var form = om.next.props.call(null,this$);
return om.dom.div.call(null,({"className": "form-horizontal"}),untangled.ui.Forms__01_The_Basics.field_with_label.call(null,this$,form,new cljs.core.Keyword("phone","type","phone/type",1541079546),"Phone type:"),untangled.ui.Forms__01_The_Basics.field_with_label.call(null,this$,form,new cljs.core.Keyword("phone","number","phone/number",1397184156),"Number:","Please format as (###) ###-####"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_706985;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_706984;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_706983;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_706982;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_706981;
}});})(x706944_707016))
;


untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm.prototype.constructor = untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm;

untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm.prototype.constructor.displayName = "untangled.ui.Forms--01-The-Basics/ValidatedPhoneForm";

untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm.prototype.om$isComponent = true;

var x706991_707072 = untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm;
/** @nocollapse */
x706991_707072.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706991_707072.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x706991_707072){
return (function (this$,params){
var this$__$1 = this;
return untangled.ui.forms.build_form.call(null,this$__$1,(function (){var or__27650__auto__ = params;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(x706991_707072))
;

/** @nocollapse */
x706991_707072.untangled$ui$forms$IForm$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706991_707072.untangled$ui$forms$IForm$form_spec$arity$1 = ((function (x706991_707072){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.id_field.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098)),untangled.ui.forms.text_input.call(null,new cljs.core.Keyword("phone","number","phone/number",1397184156),new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Symbol(null,"us-phone?","us-phone?",826236747,null)),untangled.ui.forms.dropdown_input.call(null,new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.option.call(null,new cljs.core.Keyword(null,"home","home",-74557309),"Home"),untangled.ui.forms.option.call(null,new cljs.core.Keyword(null,"work","work",385770312),"Work")], null))], null);
});})(x706991_707072))
;

/** @nocollapse */
x706991_707072.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706991_707072.om$next$IQuery$query$arity$1 = ((function (x706991_707072){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.Keyword("phone","number","phone/number",1397184156),untangled.ui.forms.form_key], null);
});})(x706991_707072))
;

/** @nocollapse */
x706991_707072.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706991_707072.om$next$Ident$ident$arity$2 = ((function (x706991_707072){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phone","by-id","phone/by-id",-2109894411),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x706991_707072))
;


var x707000_707086 = untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm.prototype;

x707000_707086.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x707000_707086.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x707000_707086){
return (function (this$,params){
var this$__$1 = this;
return untangled.ui.forms.build_form.call(null,this$__$1,(function (){var or__27650__auto__ = params;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(x707000_707086))
;


x707000_707086.untangled$ui$forms$IForm$ = cljs.core.PROTOCOL_SENTINEL;


x707000_707086.untangled$ui$forms$IForm$form_spec$arity$1 = ((function (x707000_707086){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.id_field.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098)),untangled.ui.forms.text_input.call(null,new cljs.core.Keyword("phone","number","phone/number",1397184156),new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Symbol(null,"us-phone?","us-phone?",826236747,null)),untangled.ui.forms.dropdown_input.call(null,new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.option.call(null,new cljs.core.Keyword(null,"home","home",-74557309),"Home"),untangled.ui.forms.option.call(null,new cljs.core.Keyword(null,"work","work",385770312),"Work")], null))], null);
});})(x707000_707086))
;


x707000_707086.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x707000_707086.om$next$IQuery$query$arity$1 = ((function (x707000_707086){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.Keyword("phone","number","phone/number",1397184156),untangled.ui.forms.form_key], null);
});})(x707000_707086))
;


x707000_707086.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x707000_707086.om$next$Ident$ident$arity$2 = ((function (x707000_707086){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phone","by-id","phone/by-id",-2109894411),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x707000_707086))
;


untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm.cljs$lang$type = true;

untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm.cljs$lang$ctorStr = "untangled.ui.Forms--01-The-Basics/ValidatedPhoneForm";

untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.Forms--01-The-Basics/ValidatedPhoneForm");
});
untangled.ui.Forms__01_The_Basics.ui_vphone_form = om.next.factory.call(null,untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm);
/**
 * @constructor
 */
untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot = (function untangled$ui$Forms__01_The_Basics$ValidatedPhoneRoot(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot.prototype = goog.object.clone(React.Component.prototype);

var x707131_707186 = untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot.prototype;
x707131_707186.componentWillUpdate = ((function (x707131_707186){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___707187 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___707188 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___707187,next_ident__29856__auto___707188)){
var idxr__29857__auto___707194 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___707194 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___707194),((function (idxr__29857__auto___707194,ident__29855__auto___707187,next_ident__29856__auto___707188,this__29851__auto__,x707131_707186){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___707187], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___707188], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___707194,ident__29855__auto___707187,next_ident__29856__auto___707188,this__29851__auto__,x707131_707186))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x707131_707186))
;

x707131_707186.shouldComponentUpdate = ((function (x707131_707186){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__707153 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__707153);
} else {
return G__707153;
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
});})(x707131_707186))
;

x707131_707186.componentWillUnmount = ((function (x707131_707186){
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
});})(x707131_707186))
;

x707131_707186.componentDidUpdate = ((function (x707131_707186){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x707131_707186))
;

x707131_707186.isMounted = ((function (x707131_707186){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x707131_707186))
;

x707131_707186.componentWillMount = ((function (x707131_707186){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x707131_707186))
;

x707131_707186.render = ((function (x707131_707186){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_707163 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_707164 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_707165 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_707166 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_707167 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var map__707171 = om.next.props.call(null,this$);
var map__707171__$1 = ((((!((map__707171 == null)))?((((map__707171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707171.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707171):map__707171);
var phone = cljs.core.get.call(null,map__707171__$1,new cljs.core.Keyword(null,"phone","phone",-763596057));
return om.dom.div.call(null,null,untangled.ui.Forms__01_The_Basics.ui_vphone_form.call(null,phone));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_707167;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_707166;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_707165;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_707164;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_707163;
}});})(x707131_707186))
;


untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot.prototype.constructor = untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot;

untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot.prototype.constructor.displayName = "untangled.ui.Forms--01-The-Basics/ValidatedPhoneRoot";

untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot.prototype.om$isComponent = true;

var x707176_707313 = untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot;
/** @nocollapse */
x707176_707313.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x707176_707313.om$next$IQuery$query$arity$1 = ((function (x707176_707313){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phone","phone",-763596057),om.next.get_query.call(null,untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm)], null)], null);
});})(x707176_707313))
;

/** @nocollapse */
x707176_707313.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x707176_707313.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x707176_707313){
return (function (this$,params){
var this$__$1 = this;
var phone_number = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword("phone","number","phone/number",1397184156),"555-1212"], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phone","phone",-763596057),untangled.ui.forms.build_form.call(null,untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm,phone_number)], null);
});})(x707176_707313))
;


var x707177_707336 = untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot.prototype;

x707177_707336.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x707177_707336.om$next$IQuery$query$arity$1 = ((function (x707177_707336){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phone","phone",-763596057),om.next.get_query.call(null,untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm)], null)], null);
});})(x707177_707336))
;


x707177_707336.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x707177_707336.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x707177_707336){
return (function (this$,params){
var this$__$1 = this;
var phone_number = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword("phone","number","phone/number",1397184156),"555-1212"], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phone","phone",-763596057),untangled.ui.forms.build_form.call(null,untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm,phone_number)], null);
});})(x707177_707336))
;


untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot.cljs$lang$type = true;

untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot.cljs$lang$ctorStr = "untangled.ui.Forms--01-The-Basics/ValidatedPhoneRoot";

untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.Forms--01-The-Basics/ValidatedPhoneRoot");
});
cljs.core._add_method.call(null,untangled.ui.forms.form_field_valid_QMARK_,new cljs.core.Symbol(null,"us-phone?","us-phone?",826236747,null),(function (sym,value,args){
return cljs.core.seq.call(null,cljs.core.re_matches.call(null,/[(][0-9][0-9][0-9][)] [0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/,value));
}));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.Forms__01_The_Basics","untangled.ui.Forms__01_The_Basics",683593588),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"\n\n  ## Validation\n\n  There is a multimethod `(f/form-field-valid? [symbol value args])`\n  that dispatches on symbol (symbols are allowed in app state, lambdas are not). Form fields that support validation\n  will run that validation at their configured time (typically on blur).\n  Validation is therefore completely extensible. You need only supply a dispatch for your own validation symbol, and\n  declare it as the validator on a field (by symbol).\n\n  Validation is tri-state. The allowed states are `:valid` (checked and correct), `:invalid` (checked and incorrect),\n  and `:unchecked`.\n\n  You can trigger full-form validation (which you should do as part of your interaction with the form) by calling\nTODO: remove the need to pass the component? The form is just om/props of the component.\n  `(f/validate-entire-form! component form)`. This function invokes a transaction that will update the validation\n  markings on all declared fields (which in turn will re-render your UI).\n\n  If you want to check if a form is valid (without updating the markings in the app state...e.g. you want an inline\n  answer), then use `(f/valid? (f/validate-fields form))` to get an immediate answer. This is more computationally\n  expensive, but allows you to check the validity of the form without triggering an actual validation transaction against\n  the application state.\n\n  For example, the definition of a validator for US phone numbers could be:\n\n  ```\n  (defmethod f/form-field-valid? 'us-phone? [sym value args]\n    (seq (re-matches #\"[(][0-9][0-9][0-9][)] [0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]\" value)))\n  ```\n\n  The only change in your UI would be to add the validator to the form field declaration, along with a validation message:\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui ^:once ValidatedPhoneForm\n  static uc/InitialAppState\n  (initial-state [this params] (f/build-form this (or params {})))\n  static f/IForm\n  (form-spec [this] [(f/id-field :db/id)\n                     (f/text-input :phone/number :validator 'us-phone?) ; Addition of validator\n                     (f/dropdown-input :phone/type [(f/option :home \"Home\") (f/option :work \"Work\")])])\n  static om/IQuery\n  (query [this] [:db/id :phone/type :phone/number f/form-key])\n  static om/Ident\n  (ident [this props] [:phone/by-id (:db/id props)])\n  Object\n  (render [this]\n    (let [form (om/props this)]\n      (dom/div #js {:className \"form-horizontal\"}\n        (field-with-label this form :phone/type \"Phone type:\")\n        ;; One more parameter to give the validation error message:\n        (field-with-label this form :phone/number \"Number:\" \"Please format as (###) ###-####\")))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.Forms__01_The_Basics","untangled.ui.Forms__01_The_Basics",683593588),new cljs.core.Keyword(null,"validated-phone-number","validated-phone-number",2109780974)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"validated-phone-number",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Edit the phone field and then set the phone type. The blur will trigger validation",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,(function (state_atom__37612__auto__,node__37613__auto__){
untangled.client.core.mount.call(null,untangled.client.core.new_untangled_client.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),state_atom__37612__auto__),untangled.ui.Forms__01_The_Basics.ValidatedPhoneRoot,node__37613__auto__);

return setTimeout((function (){
return cljs.core.swap_BANG_.call(null,state_atom__37612__auto__,cljs.core.assoc,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));
}),(1000));
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
if(typeof untangled.ui.Forms__01_The_Basics.PersonForm !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__01_The_Basics.PersonForm = (function untangled$ui$Forms__01_The_Basics$PersonForm(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.Forms__01_The_Basics.PersonForm.prototype = goog.object.clone(React.Component.prototype);
}

var x707377_707393 = untangled.ui.Forms__01_The_Basics.PersonForm.prototype;
x707377_707393.componentWillUpdate = ((function (x707377_707393){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___707399 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___707400 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___707399,next_ident__29856__auto___707400)){
var idxr__29857__auto___707404 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___707404 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___707404),((function (idxr__29857__auto___707404,ident__29855__auto___707399,next_ident__29856__auto___707400,this__29851__auto__,x707377_707393){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___707399], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___707400], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___707404,ident__29855__auto___707399,next_ident__29856__auto___707400,this__29851__auto__,x707377_707393))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x707377_707393))
;

x707377_707393.shouldComponentUpdate = ((function (x707377_707393){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__707379 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__707379);
} else {
return G__707379;
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
});})(x707377_707393))
;

x707377_707393.componentWillUnmount = ((function (x707377_707393){
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
});})(x707377_707393))
;

x707377_707393.componentDidUpdate = ((function (x707377_707393){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x707377_707393))
;

x707377_707393.isMounted = ((function (x707377_707393){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x707377_707393))
;

x707377_707393.componentWillMount = ((function (x707377_707393){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x707377_707393))
;

x707377_707393.render = ((function (x707377_707393){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_707380 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_707381 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_707382 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_707383 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_707384 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var map__707385 = om.next.props.call(null,this$);
var map__707385__$1 = ((((!((map__707385 == null)))?((((map__707385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707385.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707385):map__707385);
var props = map__707385__$1;
var phone_numbers = cljs.core.get.call(null,map__707385__$1,new cljs.core.Keyword("person","phone-numbers","person/phone-numbers",1560599295));
return om.dom.div.call(null,({"className": "form-horizontal"}),untangled.ui.Forms__01_The_Basics.field_with_label.call(null,this$,props,new cljs.core.Keyword("person","name","person/name",549444500),"Full Name:","Please enter your first and last name."),untangled.ui.Forms__01_The_Basics.field_with_label.call(null,this$,props,new cljs.core.Keyword("person","age","person/age",387881455),"Age:","That isn't a real age!"),untangled.ui.Forms__01_The_Basics.checkbox_with_label.call(null,this$,props,new cljs.core.Keyword("person","registered-to-vote?","person/registered-to-vote?",-1931377423),"Registered?"),(cljs.core.truth_(untangled.ui.forms.current_value.call(null,props,new cljs.core.Keyword("person","registered-to-vote?","person/registered-to-vote?",-1931377423)))?om.dom.div.call(null,null,"Good on you!"):null),om.dom.div.call(null,null,cljs.core.mapv.call(null,untangled.ui.Forms__01_The_Basics.ui_vphone_form,phone_numbers)),(cljs.core.truth_(untangled.ui.forms.valid_QMARK_.call(null,props))?om.dom.div.call(null,null,"All fields have had been validated, and are valid"):null),om.dom.div.call(null,({"className": "button-group"}),om.dom.button.call(null,({"className": "btn btn-primary", "onClick": ((function (map__707385,map__707385__$1,props,phone_numbers,_STAR_reconciler_STAR_707380,_STAR_depth_STAR_707381,_STAR_shared_STAR_707382,_STAR_instrument_STAR_707383,_STAR_parent_STAR_707384,this$,this__29850__auto__,x707377_707393){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("sample","add-phone","sample/add-phone",-836029937,null)),(function (){var x__28584__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),om.next.tempid.call(null),new cljs.core.Keyword(null,"person","person",-1059806875),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())))));
});})(map__707385,map__707385__$1,props,phone_numbers,_STAR_reconciler_STAR_707380,_STAR_depth_STAR_707381,_STAR_shared_STAR_707382,_STAR_instrument_STAR_707383,_STAR_parent_STAR_707384,this$,this__29850__auto__,x707377_707393))
}),"Add Phone"),om.dom.button.call(null,({"className": "btn btn-default", "disabled": untangled.ui.forms.valid_QMARK_.call(null,props), "onClick": ((function (map__707385,map__707385__$1,props,phone_numbers,_STAR_reconciler_STAR_707380,_STAR_depth_STAR_707381,_STAR_shared_STAR_707382,_STAR_instrument_STAR_707383,_STAR_parent_STAR_707384,this$,this__29850__auto__,x707377_707393){
return (function (){
return untangled.ui.forms.validate_entire_form_BANG_.call(null,this$,props);
});})(map__707385,map__707385__$1,props,phone_numbers,_STAR_reconciler_STAR_707380,_STAR_depth_STAR_707381,_STAR_shared_STAR_707382,_STAR_instrument_STAR_707383,_STAR_parent_STAR_707384,this$,this__29850__auto__,x707377_707393))
}),"Validate"),om.dom.button.call(null,({"className": "btn btn-default", "disabled": cljs.core.not.call(null,untangled.ui.forms.dirty_QMARK_.call(null,props)), "onClick": ((function (map__707385,map__707385__$1,props,phone_numbers,_STAR_reconciler_STAR_707380,_STAR_depth_STAR_707381,_STAR_shared_STAR_707382,_STAR_instrument_STAR_707383,_STAR_parent_STAR_707384,this$,this__29850__auto__,x707377_707393){
return (function (){
return untangled.ui.forms.reset_from_entity_BANG_.call(null,this$,props);
});})(map__707385,map__707385__$1,props,phone_numbers,_STAR_reconciler_STAR_707380,_STAR_depth_STAR_707381,_STAR_shared_STAR_707382,_STAR_instrument_STAR_707383,_STAR_parent_STAR_707384,this$,this__29850__auto__,x707377_707393))
}),"UNDO"),om.dom.button.call(null,({"className": "btn btn-default", "disabled": cljs.core.not.call(null,untangled.ui.forms.dirty_QMARK_.call(null,props)), "onClick": ((function (map__707385,map__707385__$1,props,phone_numbers,_STAR_reconciler_STAR_707380,_STAR_depth_STAR_707381,_STAR_shared_STAR_707382,_STAR_instrument_STAR_707383,_STAR_parent_STAR_707384,this$,this__29850__auto__,x707377_707393){
return (function (){
return untangled.ui.forms.commit_to_entity_BANG_.call(null,this$);
});})(map__707385,map__707385__$1,props,phone_numbers,_STAR_reconciler_STAR_707380,_STAR_depth_STAR_707381,_STAR_shared_STAR_707382,_STAR_instrument_STAR_707383,_STAR_parent_STAR_707384,this$,this__29850__auto__,x707377_707393))
}),"Submit")));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_707384;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_707383;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_707382;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_707381;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_707380;
}});})(x707377_707393))
;


untangled.ui.Forms__01_The_Basics.PersonForm.prototype.constructor = untangled.ui.Forms__01_The_Basics.PersonForm;

untangled.ui.Forms__01_The_Basics.PersonForm.prototype.constructor.displayName = "untangled.ui.Forms--01-The-Basics/PersonForm";

untangled.ui.Forms__01_The_Basics.PersonForm.prototype.om$isComponent = true;

var x707389_707517 = untangled.ui.Forms__01_The_Basics.PersonForm;
/** @nocollapse */
x707389_707517.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x707389_707517.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x707389_707517){
return (function (this$,params){
var this$__$1 = this;
return untangled.ui.forms.build_form.call(null,this$__$1,(function (){var or__27650__auto__ = params;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(x707389_707517))
;

/** @nocollapse */
x707389_707517.untangled$ui$forms$IForm$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x707389_707517.untangled$ui$forms$IForm$form_spec$arity$1 = ((function (x707389_707517){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.id_field.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098)),untangled.ui.forms.subform_element.call(null,new cljs.core.Keyword("person","phone-numbers","person/phone-numbers",1560599295),untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm,new cljs.core.Keyword(null,"many","many",1092119164)),untangled.ui.forms.text_input.call(null,new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Symbol(null,"name-valid?","name-valid?",-1019542990,null)),untangled.ui.forms.integer_input.call(null,new cljs.core.Keyword("person","age","person/age",387881455),new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Symbol(null,"in-range?","in-range?",1348752265,null),new cljs.core.Keyword(null,"validator-args","validator-args",-487548518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(110)], null)),untangled.ui.forms.checkbox_input.call(null,new cljs.core.Keyword("person","registered-to-vote?","person/registered-to-vote?",-1931377423))], null);
});})(x707389_707517))
;

/** @nocollapse */
x707389_707517.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x707389_707517.om$next$IQuery$query$arity$1 = ((function (x707389_707517){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_root_key,untangled.ui.forms.form_key,new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword("person","age","person/age",387881455),new cljs.core.Keyword("person","registered-to-vote?","person/registered-to-vote?",-1931377423),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person","phone-numbers","person/phone-numbers",1560599295),om.next.get_query.call(null,untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm)], null)], null);
});})(x707389_707517))
;

/** @nocollapse */
x707389_707517.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x707389_707517.om$next$Ident$ident$arity$2 = ((function (x707389_707517){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("people","by-id","people/by-id",1144298454),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x707389_707517))
;


var x707391_707531 = untangled.ui.Forms__01_The_Basics.PersonForm.prototype;

x707391_707531.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x707391_707531.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x707391_707531){
return (function (this$,params){
var this$__$1 = this;
return untangled.ui.forms.build_form.call(null,this$__$1,(function (){var or__27650__auto__ = params;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(x707391_707531))
;


x707391_707531.untangled$ui$forms$IForm$ = cljs.core.PROTOCOL_SENTINEL;


x707391_707531.untangled$ui$forms$IForm$form_spec$arity$1 = ((function (x707391_707531){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.id_field.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098)),untangled.ui.forms.subform_element.call(null,new cljs.core.Keyword("person","phone-numbers","person/phone-numbers",1560599295),untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm,new cljs.core.Keyword(null,"many","many",1092119164)),untangled.ui.forms.text_input.call(null,new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Symbol(null,"name-valid?","name-valid?",-1019542990,null)),untangled.ui.forms.integer_input.call(null,new cljs.core.Keyword("person","age","person/age",387881455),new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Symbol(null,"in-range?","in-range?",1348752265,null),new cljs.core.Keyword(null,"validator-args","validator-args",-487548518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(110)], null)),untangled.ui.forms.checkbox_input.call(null,new cljs.core.Keyword("person","registered-to-vote?","person/registered-to-vote?",-1931377423))], null);
});})(x707391_707531))
;


x707391_707531.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x707391_707531.om$next$IQuery$query$arity$1 = ((function (x707391_707531){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_root_key,untangled.ui.forms.form_key,new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword("person","age","person/age",387881455),new cljs.core.Keyword("person","registered-to-vote?","person/registered-to-vote?",-1931377423),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person","phone-numbers","person/phone-numbers",1560599295),om.next.get_query.call(null,untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm)], null)], null);
});})(x707391_707531))
;


x707391_707531.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x707391_707531.om$next$Ident$ident$arity$2 = ((function (x707391_707531){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("people","by-id","people/by-id",1144298454),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x707391_707531))
;


untangled.ui.Forms__01_The_Basics.PersonForm.cljs$lang$type = true;

untangled.ui.Forms__01_The_Basics.PersonForm.cljs$lang$ctorStr = "untangled.ui.Forms--01-The-Basics/PersonForm";

untangled.ui.Forms__01_The_Basics.PersonForm.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.Forms--01-The-Basics/PersonForm");
});
untangled.ui.Forms__01_The_Basics.ui_person_form = om.next.factory.call(null,untangled.ui.Forms__01_The_Basics.PersonForm);
if(typeof untangled.ui.Forms__01_The_Basics.Root !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__01_The_Basics.Root = (function untangled$ui$Forms__01_The_Basics$Root(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.Forms__01_The_Basics.Root.prototype = goog.object.clone(React.Component.prototype);
}

var x707550_707619 = untangled.ui.Forms__01_The_Basics.Root.prototype;
x707550_707619.componentWillUpdate = ((function (x707550_707619){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___707632 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___707633 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___707632,next_ident__29856__auto___707633)){
var idxr__29857__auto___707637 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___707637 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___707637),((function (idxr__29857__auto___707637,ident__29855__auto___707632,next_ident__29856__auto___707633,this__29851__auto__,x707550_707619){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___707632], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___707633], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___707637,ident__29855__auto___707632,next_ident__29856__auto___707633,this__29851__auto__,x707550_707619))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x707550_707619))
;

x707550_707619.shouldComponentUpdate = ((function (x707550_707619){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__707555 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__707555);
} else {
return G__707555;
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
});})(x707550_707619))
;

x707550_707619.componentWillUnmount = ((function (x707550_707619){
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
});})(x707550_707619))
;

x707550_707619.componentDidUpdate = ((function (x707550_707619){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x707550_707619))
;

x707550_707619.isMounted = ((function (x707550_707619){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x707550_707619))
;

x707550_707619.componentWillMount = ((function (x707550_707619){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x707550_707619))
;

x707550_707619.render = ((function (x707550_707619){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_707578 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_707579 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_707580 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_707581 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_707582 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var map__707584 = om.next.props.call(null,this$);
var map__707584__$1 = ((((!((map__707584 == null)))?((((map__707584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707584.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707584):map__707584);
var react_key = cljs.core.get.call(null,map__707584__$1,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664));
var person_id = cljs.core.get.call(null,map__707584__$1,new cljs.core.Keyword("ui","person-id","ui/person-id",1251945916));
var person = cljs.core.get.call(null,map__707584__$1,new cljs.core.Keyword(null,"person","person",-1059806875));
return om.dom.div.call(null,({"key": react_key}),(cljs.core.truth_(person)?untangled.ui.Forms__01_The_Basics.ui_person_form.call(null,person):null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_707582;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_707581;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_707580;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_707579;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_707578;
}});})(x707550_707619))
;


untangled.ui.Forms__01_The_Basics.Root.prototype.constructor = untangled.ui.Forms__01_The_Basics.Root;

untangled.ui.Forms__01_The_Basics.Root.prototype.constructor.displayName = "untangled.ui.Forms--01-The-Basics/Root";

untangled.ui.Forms__01_The_Basics.Root.prototype.om$isComponent = true;

var x707588_707801 = untangled.ui.Forms__01_The_Basics.Root;
/** @nocollapse */
x707588_707801.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x707588_707801.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x707588_707801){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","person-id","ui/person-id",1251945916),(1),new cljs.core.Keyword(null,"person","person",-1059806875),untangled.client.core.initial_state.call(null,untangled.ui.Forms__01_The_Basics.PersonForm,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword("person","name","person/name",549444500),"Tony Kay",new cljs.core.Keyword("person","age","person/age",387881455),(23),new cljs.core.Keyword("person","registered-to-vote?","person/registered-to-vote?",-1931377423),false,new cljs.core.Keyword("person","phone-numbers","person/phone-numbers",1560599295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.core.initial_state.call(null,untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(22),new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.Keyword(null,"work","work",385770312),new cljs.core.Keyword("phone","number","phone/number",1397184156),"(123) 412-1212"], null)),untangled.client.core.initial_state.call(null,untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(23),new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword("phone","number","phone/number",1397184156),"(541) 555-1212"], null))], null)], null))], null);
});})(x707588_707801))
;

/** @nocollapse */
x707588_707801.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x707588_707801.om$next$IQuery$query$arity$1 = ((function (x707588_707801){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","person-id","ui/person-id",1251945916),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"person","person",-1059806875),om.next.get_query.call(null,untangled.ui.Forms__01_The_Basics.PersonForm)], null)], null);
});})(x707588_707801))
;


var x707593_707803 = untangled.ui.Forms__01_The_Basics.Root.prototype;

x707593_707803.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x707593_707803.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x707593_707803){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","person-id","ui/person-id",1251945916),(1),new cljs.core.Keyword(null,"person","person",-1059806875),untangled.client.core.initial_state.call(null,untangled.ui.Forms__01_The_Basics.PersonForm,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword("person","name","person/name",549444500),"Tony Kay",new cljs.core.Keyword("person","age","person/age",387881455),(23),new cljs.core.Keyword("person","registered-to-vote?","person/registered-to-vote?",-1931377423),false,new cljs.core.Keyword("person","phone-numbers","person/phone-numbers",1560599295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.core.initial_state.call(null,untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(22),new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.Keyword(null,"work","work",385770312),new cljs.core.Keyword("phone","number","phone/number",1397184156),"(123) 412-1212"], null)),untangled.client.core.initial_state.call(null,untangled.ui.Forms__01_The_Basics.ValidatedPhoneForm,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(23),new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword("phone","number","phone/number",1397184156),"(541) 555-1212"], null))], null)], null))], null);
});})(x707593_707803))
;


x707593_707803.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x707593_707803.om$next$IQuery$query$arity$1 = ((function (x707593_707803){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","person-id","ui/person-id",1251945916),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"person","person",-1059806875),om.next.get_query.call(null,untangled.ui.Forms__01_The_Basics.PersonForm)], null)], null);
});})(x707593_707803))
;


untangled.ui.Forms__01_The_Basics.Root.cljs$lang$type = true;

untangled.ui.Forms__01_The_Basics.Root.cljs$lang$ctorStr = "untangled.ui.Forms--01-The-Basics/Root";

untangled.ui.Forms__01_The_Basics.Root.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.Forms--01-The-Basics/Root");
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.Forms__01_The_Basics","untangled.ui.Forms__01_The_Basics",683593588),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"\n  ## State Evolution\n\n  A form will initially record the pristine state of field values during `build-form`. As you interact with\n  the form the entity data will change (locally only). This allows the library to support:\n\n  - The ability to compare the original entity state with the current (edited) state\n  - Reset the entity state from the pristine condition\n  - Commit *just* the actual changes to the entity to a remote\n\n  **This, combined with a little server code, makes the form support full stack!**\n\n  You can trigger the following operations on a form:\n\n  - `(f/commit-to-entity! comp)` : Commit the current edits to the entity (no-op if the form doesn't validate)\n  - `(f/commit-to-entity! comp true)` : Commit the current edits to the entity AND the server (is a no-op if the form doesn't validate)\n  - `(f/reset-from-entity! comp)` : Undo the changes on the form (back to the pristine state of the original), (triggers validation after the reset)\n  - More coming...\n\n  ### State evolution within your own transactions\n\n  Any changes you make to your entity after `build-form` are technically considered form edits (and make the form *dirty*\n  and possibly *invalid*).  The built-in form fields just change the state of the entity, and you can too.\n\n  Commits will copy the entity state into the form's pristine holding area, and resets will copy from this pristine area\n  back to your entity.\n\n  The primary concern is that any custom fields that you create should be careful to only populate the value of fields\n  with things that are serializable via transit, since their updated values will need to be transmitted across the wire\n  for full-stack operation.\n\n  ## Composition\n\n  Form support augments normalized entities in your app database, so they can be easily composed! They are UI components, and have nothing special\n  about them other than the `f/form-key` state that is added to the entity (through your call of `build-form`).\n  You can convert any entity in your database to a form using the `build-form` function, meaning that you can load\n  entities as normal, and as you want to edit them\n  in a form, first mutate them into form-compatible entities with `build-form` (which will not touch the original\n  properties of the entity, just add `f/form-key`). Then render them with a UI component that shares your entity Ident,\n  but has a render method that renders the form fields with `form-field`.\n\n  Here is the source for an application that renders a Person form, where the person can have any nubmer of phone numbers,\n  each represented by a nested phone number entity/form. Note the use of `InitialAppState` in Root to build out sample\n  data.\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui ^:once ValidatedPhoneForm\n  static uc/InitialAppState\n  (initial-state [this params] (f/build-form this (or params {})))\n  static f/IForm\n  (form-spec [this] [(f/id-field :db/id)\n                     (f/text-input :phone/number :validator 'us-phone?) ; Addition of validator\n                     (f/dropdown-input :phone/type [(f/option :home \"Home\") (f/option :work \"Work\")])])\n  static om/IQuery\n  (query [this] [:db/id :phone/type :phone/number f/form-key])\n  static om/Ident\n  (ident [this props] [:phone/by-id (:db/id props)])\n  Object\n  (render [this]\n    (let [form (om/props this)]\n      (dom/div #js {:className \"form-horizontal\"}\n        (field-with-label this form :phone/type \"Phone type:\")\n        ;; One more parameter to give the validation error message:\n        (field-with-label this form :phone/number \"Number:\" \"Please format as (###) ###-####\")))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui ^:once PersonForm\n  static uc/InitialAppState\n  (initial-state [this params] (f/build-form this (or params {})))\n  static f/IForm\n  (form-spec [this] [(f/id-field :db/id)\n                     (f/subform-element :person/phone-numbers ValidatedPhoneForm :many)\n                     (f/text-input :person/name :validator 'name-valid?)\n                     (f/integer-input :person/age :validator 'in-range?\n                       :validator-args {:min 1 :max 110})\n                     (f/checkbox-input :person/registered-to-vote?)])\n  static om/IQuery\n  ; NOTE: f/form-root-key so that sub-forms will trigger render here\n  (query [this] [f/form-root-key f/form-key\n                 :db/id :person/name :person/age\n                 :person/registered-to-vote?\n                 {:person/phone-numbers (om/get-query ValidatedPhoneForm)}])\n  static om/Ident\n  (ident [this props] [:people/by-id (:db/id props)])\n  Object\n  (render [this]\n    (let [{:keys [person/phone-numbers] :as props} (om/props this)]\n      (dom/div #js {:className \"form-horizontal\"}\n        (field-with-label this props :person/name \"Full Name:\" \"Please enter your first and last name.\")\n        (field-with-label this props :person/age \"Age:\" \"That isn't a real age!\")\n        (checkbox-with-label this props :person/registered-to-vote? \"Registered?\")\n        (when (f/current-value props :person/registered-to-vote?)\n          (dom/div nil \"Good on you!\"))\n        (dom/div nil\n          (mapv ui-vphone-form phone-numbers))\n        (when (f/valid? props)\n          (dom/div nil \"All fields have had been validated, and are valid\"))\n        (dom/div #js {:className \"button-group\"}\n          (dom/button #js {:className \"btn btn-primary\"\n                           :onClick   #(om/transact! this\n                                         `[(sample/add-phone ~{:id     (om/tempid)\n                                                               :person (:db/id props)})])}\n            \"Add Phone\")\n          (dom/button #js {:className \"btn btn-default\" :disabled (f/valid? props)\n                           :onClick   #(f/validate-entire-form! this props)}\n            \"Validate\")\n          (dom/button #js {:className \"btn btn-default\", :disabled (not (f/dirty? props))\n                           :onClick   #(f/reset-from-entity! this props)}\n            \"UNDO\")\n          (dom/button #js {:className \"btn btn-default\", :disabled (not (f/dirty? props))\n                           :onClick   #(f/commit-to-entity! this)}\n            \"Submit\"))))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui ^:once Root\n  static uc/InitialAppState\n  (initial-state [this params]\n    {:ui/person-id 1\n     :person       (uc/initial-state PersonForm\n                     {:db/id                      1\n                      :person/name                \"Tony Kay\"\n                      :person/age                 23\n                      :person/registered-to-vote? false\n                      :person/phone-numbers       [(uc/initial-state ValidatedPhoneForm\n                                                     {:db/id        22\n                                                      :phone/type   :work\n                                                      :phone/number \"(123) 412-1212\"})\n                                                   (uc/initial-state ValidatedPhoneForm\n                                                     {:db/id        23\n                                                      :phone/type   :home\n                                                      :phone/number \"(541) 555-1212\"})]})})\n  static om/IQuery\n  (query [this] [:ui/person-id {:person (om/get-query PersonForm)}])\n  Object\n  (render [this]\n    (let [{:keys [ui/react-key ui/person-id person]} (om/props this)]\n      (dom/div #js {:key react-key}\n        (when person\n          (ui-person-form person))))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n\n  ### Composition and Rendering Refresh\n\n  The one caveat is that when forms are nested the mutations on the nested fields cannot (due to the design of Om) refresh\n  the parent automatically. To work around this, all built-in form mutations will trigger follow-on reads of\n  the special property `f/form-root-key`. So, if you add that to your parent form's query, rendering of the top-level\n  form elements (e.g. buttons that control submission) will properly update when any element of a subform changes.\n\n  ### Adding Sub-form Elements\n\n  Adding a phone number (which acts as a sub-form) is done via the add-phone-mutation, which looks like this:\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defn add-phone-mutation [{:keys [state]} k {:keys [id person]}]\n  {:action (fn []\n             (let [new-phone    (f/build-form ValidatedPhoneForm {:db/id id :phone/type :home :phone/number \"\"})\n                   person-ident [:people/by-id person]\n                   phone-ident  (om/ident ValidatedPhoneForm new-phone)]\n               (swap! state assoc-in phone-ident new-phone)\n               (uc/integrate-ident! state phone-ident :append (conj person-ident :person/phone-numbers))))})"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n  Notice that there is nothing really special going on here. Just add an additional item to the database (which is\n  augmented with `f/build-form`) and integrate it's ident!\n\n  If you look carefully at `PersonForm` you'll see the button to trigger adding a phone number, where we're using\n  `(om/tempid)` to generate a temporary ID for the new phone number.\n\n  ### Compositional Dirty-Checking, Validation, and Submission\n\n  The code also shows how you would compose the checks. The `dirty?` function combines the results of the nested forms\n  together with the top form. You could do the same for validations.\n\n  The `Save` button does a similar thing: it submits the phone numbers, and then the top. Note that Untangled combines\n  mutations that happen in the same thread sequence (e.g. you have not given up the thread for rendering). So, all of\n  those commits will be sent to the server as a single transaction (if you include the remote parameter).\n  "),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.Forms__01_The_Basics","untangled.ui.Forms__01_The_Basics",683593588),new cljs.core.Keyword(null,"sample-form-1","sample-form-1",1571042730)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"sample-form-1",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"This card shows a very simple form in action. (Edit the code and set :inspect-data to true to watch app state)",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,(function (state_atom__37612__auto__,node__37613__auto__){
untangled.client.core.mount.call(null,untangled.client.core.new_untangled_client.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),state_atom__37612__auto__),untangled.ui.Forms__01_The_Basics.Root,node__37613__auto__);

return setTimeout((function (){
return cljs.core.swap_BANG_.call(null,state_atom__37612__auto__,cljs.core.assoc,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));
}),(1000));
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.Forms__01_The_Basics","untangled.ui.Forms__01_The_Basics",683593588),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## Adding Form Field Types\n\n  Adding a new kind of form field is simple:\n\n  - Create a method that returns a map of input configuration values\n  - Add a multimethod that can render your field with appropriate hooks into the logic\n\n  The text input field is implemented like this:\n\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defn text-input\n  \"Declare a text input on a form. The allowed options are named parameters:\n\n  :className nm    Additional CSS classnames to include on the input (as a string)\n  :validator sym   A symbol to target the dispatch of validation\n  :validator-args  Arguments that will be passed to the validator\n  :placeholder     The input placeholder. Supports a lambda or string\n  :default-value   A value to use in the field if the app-state value is nil\n  :validate-on-blur? Should the field be validated on a blur event (default = true)\n  \"\n  [name & {:keys [validator validator-args className default-value placeholder validate-on-blur?]\n           :or   {placeholder \"\" default-value \"\" className \"\" validate-on-blur? true}}]\n  (cond-> {:input/name              name\n           :input/default-value     default-value\n           :input/placeholder       placeholder\n           :input/css-class         className\n           :input/validate-on-blur? validate-on-blur?\n           :input/type              ::text}\n    validator (assoc :input/validator validator)\n    validator-args (assoc :input/validator-args validator-args)))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n\n  The keys in an input's configuration map are:\n\n  - `:input/name` : Required. What you want to call the field. Must match an entity property (e.g. :person/name).\n  - `:input/type` : Required. Usually namespaced. This should be a unique key that indicates what kind of input you're making\n  - `:input/validator` : Optional. Specifies a symbol (dispatch of the form-field-valid? multimethod).\n  - `:input/validator-args` : Optional. If there is a validator, it is called with the validator symbol, the questionable value, and these args.\n  - Any you want to define : This is a map. Put whatever else you want in this map to help with rendering (e.g. placeholder text,\n   class names, style, etc).\n\n  and its renderer looks like this:\n\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Source not found"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n  ```\n  (defmethod form-field* ::text [component form name] (render-text-field component form name))\n  ```\n\n  You can retrieve a field's current form value with `(f/current-value form field-name)`, and you can obtain\n  your field's configuration (map of :input/??? values) with `(f/field-config form field-name)`.\n\n  The `form-field*` multimethod should, in general, return as little as possible, but you are allowed to do whatever you want.\n  You are free to make form field renderers that render much more complex DOM, an SVG, etc.\n\n  The following built-in mutations can (and should) be used in your event handlers:\n\n  - `(untangled.ui.form/validate-field {:form-id [:ident/by-x n] :field :field-name})` - Run validation on the given form/field. Marks the form state for the field to `:invalid` or `:valid`. Fields without validators\n  will be marked `:valid`.\n  - `(untangled.ui.form/set-field {:form-id [:ident/by-x n] :field :field-name :value raw-value})` - Set the raw-value (you can use any type) onto the form's placeholder state (not on the entity)\n  - Others listed elsewhere, like those that commit, validate, etc.\n\n  ## Other Functions of Interest\n\n  Since the `form` is also your entity, you may of course pull any entity data from the `form` map. (E.g. you can\n  for example directly access `(:person/name person-form)`). The form attributes are stored under the `f/form-key` key\n  and are intended to be opaque. Do not sneak access into the data structure, since we may choose to change the structure\n  in future versions. Instead, use these:\n\n  - `f/current-value` : Get the most recent value of a field from a form\n  - `f/current-validity` : Get the most recent result of validation on a field\n  - `f/valid?` : Test if the form (or a field) is currently marked valid (must run validation separately)\n  - `f/invalid?` : Test if the form (or a field) is currently marked invalid (must run validation separately)\n  - `f/field-names` : Get the field names on a form\n  - `f/form-id` : returns the Om Ident of the form (which is also the ident of the entity)\n  - `f/validate-fields` : returns a new version of the form with the fields marked with validation. Pure function.\n  - `f/validate-entire-form!` : Transacts a mutation that runs and sets validation markers on the form (which will update UI)\n   "),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));

//# sourceMappingURL=Forms__01_The_Basics.js.map?rel=1489703355324
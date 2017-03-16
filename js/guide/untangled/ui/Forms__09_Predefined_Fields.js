// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.ui.Forms__09_Predefined_Fields');
goog.require('cljs.core');
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
var args__28878__auto__ = [];
var len__28871__auto___705885 = arguments.length;
var i__28872__auto___705887 = (0);
while(true){
if((i__28872__auto___705887 < len__28871__auto___705885)){
args__28878__auto__.push((arguments[i__28872__auto___705887]));

var G__705890 = (i__28872__auto___705887 + (1));
i__28872__auto___705887 = G__705890;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((4) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((4)),(0),null)):null);
return untangled.ui.Forms__09_Predefined_Fields.field_with_label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28879__auto__);
});

untangled.ui.Forms__09_Predefined_Fields.field_with_label.cljs$core$IFn$_invoke$arity$variadic = (function (comp,form,name,label,params){
return om.dom.div.call(null,({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("form-group"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(untangled.ui.forms.invalid_QMARK_.call(null,form,name))?" has-error":""))].join('')}),om.dom.label.call(null,({"className": "col-sm-2", "htmlFor": name}),label),om.dom.div.call(null,({"className": "col-sm-10"}),cljs.core.apply.call(null,untangled.ui.forms.form_field,comp,form,name,params)));
});

untangled.ui.Forms__09_Predefined_Fields.field_with_label.cljs$lang$maxFixedArity = (4);

untangled.ui.Forms__09_Predefined_Fields.field_with_label.cljs$lang$applyTo = (function (seq705860){
var G__705861 = cljs.core.first.call(null,seq705860);
var seq705860__$1 = cljs.core.next.call(null,seq705860);
var G__705862 = cljs.core.first.call(null,seq705860__$1);
var seq705860__$2 = cljs.core.next.call(null,seq705860__$1);
var G__705863 = cljs.core.first.call(null,seq705860__$2);
var seq705860__$3 = cljs.core.next.call(null,seq705860__$2);
var G__705864 = cljs.core.first.call(null,seq705860__$3);
var seq705860__$4 = cljs.core.next.call(null,seq705860__$3);
return untangled.ui.Forms__09_Predefined_Fields.field_with_label.cljs$core$IFn$_invoke$arity$variadic(G__705861,G__705862,G__705863,G__705864,seq705860__$4);
});

if(typeof untangled.ui.Forms__09_Predefined_Fields.KitchenSink !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__09_Predefined_Fields.KitchenSink = (function untangled$ui$Forms__09_Predefined_Fields$KitchenSink(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.Forms__09_Predefined_Fields.KitchenSink.prototype = goog.object.clone(React.Component.prototype);
}

var x705908_706003 = untangled.ui.Forms__09_Predefined_Fields.KitchenSink.prototype;
x705908_706003.componentWillUpdate = ((function (x705908_706003){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___706004 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___706005 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___706004,next_ident__29856__auto___706005)){
var idxr__29857__auto___706006 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___706006 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___706006),((function (idxr__29857__auto___706006,ident__29855__auto___706004,next_ident__29856__auto___706005,this__29851__auto__,x705908_706003){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___706004], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___706005], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___706006,ident__29855__auto___706004,next_ident__29856__auto___706005,this__29851__auto__,x705908_706003))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x705908_706003))
;

x705908_706003.shouldComponentUpdate = ((function (x705908_706003){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__705916 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__705916);
} else {
return G__705916;
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
});})(x705908_706003))
;

x705908_706003.componentWillUnmount = ((function (x705908_706003){
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
});})(x705908_706003))
;

x705908_706003.componentDidUpdate = ((function (x705908_706003){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x705908_706003))
;

x705908_706003.isMounted = ((function (x705908_706003){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x705908_706003))
;

x705908_706003.componentWillMount = ((function (x705908_706003){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x705908_706003))
;

x705908_706003.render = ((function (x705908_706003){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_705933 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_705935 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_705936 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_705937 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_705938 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var props = om.next.props.call(null,this$);
return om.dom.div.call(null,({"className": "form-horizontal"}),untangled.ui.Forms__09_Predefined_Fields.field_with_label.call(null,this$,props,new cljs.core.Keyword(null,"text","text",-1790561697),"Text:"),untangled.ui.Forms__09_Predefined_Fields.field_with_label.call(null,this$,props,new cljs.core.Keyword(null,"number","number",1570378438),"Number:"),untangled.ui.Forms__09_Predefined_Fields.field_with_label.call(null,this$,props,new cljs.core.Keyword(null,"mood","mood",-616134094),"Mood:"),untangled.ui.Forms__09_Predefined_Fields.field_with_label.call(null,this$,props,new cljs.core.Keyword(null,"done?","done?",-1847001718),"Done:"),untangled.ui.Forms__09_Predefined_Fields.field_with_label.call(null,this$,props,new cljs.core.Keyword(null,"essay","essay",1994718400),"Essay:",new cljs.core.Keyword(null,"rows","rows",850049680),(10),new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073),(100)),om.dom.div.call(null,({"className": "form-group"}),om.dom.label.call(null,({"className": "col-sm-2", "htmlFor": new cljs.core.Keyword(null,"rating","rating",144173662)}),"Rating:"),om.dom.div.call(null,({"className": "col-sm-10"}),untangled.ui.forms.form_field.call(null,this$,props,new cljs.core.Keyword(null,"rating","rating",144173662),new cljs.core.Keyword(null,"choice","choice",-1375170727),(1),new cljs.core.Keyword(null,"label","label",1718410804),(1)),untangled.ui.forms.form_field.call(null,this$,props,new cljs.core.Keyword(null,"rating","rating",144173662),new cljs.core.Keyword(null,"choice","choice",-1375170727),(2),new cljs.core.Keyword(null,"label","label",1718410804),(2)),untangled.ui.forms.form_field.call(null,this$,props,new cljs.core.Keyword(null,"rating","rating",144173662),new cljs.core.Keyword(null,"choice","choice",-1375170727),(3),new cljs.core.Keyword(null,"label","label",1718410804),(3)),untangled.ui.forms.form_field.call(null,this$,props,new cljs.core.Keyword(null,"rating","rating",144173662),new cljs.core.Keyword(null,"choice","choice",-1375170727),(4),new cljs.core.Keyword(null,"label","label",1718410804),(4)),untangled.ui.forms.form_field.call(null,this$,props,new cljs.core.Keyword(null,"rating","rating",144173662),new cljs.core.Keyword(null,"choice","choice",-1375170727),(5),new cljs.core.Keyword(null,"label","label",1718410804),(5)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_705938;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_705937;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_705936;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_705935;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_705933;
}});})(x705908_706003))
;


untangled.ui.Forms__09_Predefined_Fields.KitchenSink.prototype.constructor = untangled.ui.Forms__09_Predefined_Fields.KitchenSink;

untangled.ui.Forms__09_Predefined_Fields.KitchenSink.prototype.constructor.displayName = "untangled.ui.Forms--09-Predefined-Fields/KitchenSink";

untangled.ui.Forms__09_Predefined_Fields.KitchenSink.prototype.om$isComponent = true;

var x705956_706064 = untangled.ui.Forms__09_Predefined_Fields.KitchenSink;
/** @nocollapse */
x705956_706064.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x705956_706064.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x705956_706064){
return (function (this$,params){
var this$__$1 = this;
return untangled.ui.forms.build_form.call(null,this$__$1,(function (){var or__27650__auto__ = params;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1)], null);
}
})());
});})(x705956_706064))
;

/** @nocollapse */
x705956_706064.untangled$ui$forms$IForm$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x705956_706064.untangled$ui$forms$IForm$form_spec$arity$1 = ((function (x705956_706064){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.id_field.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098)),untangled.ui.forms.text_input.call(null,new cljs.core.Keyword(null,"text","text",-1790561697)),untangled.ui.forms.integer_input.call(null,new cljs.core.Keyword(null,"number","number",1570378438)),untangled.ui.forms.dropdown_input.call(null,new cljs.core.Keyword(null,"mood","mood",-616134094),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.option.call(null,new cljs.core.Keyword(null,"happy","happy",2026698856),"Happy"),untangled.ui.forms.option.call(null,new cljs.core.Keyword(null,"sad","sad",427137188),"Sad")], null)),untangled.ui.forms.checkbox_input.call(null,new cljs.core.Keyword(null,"done?","done?",-1847001718)),untangled.ui.forms.radio_input.call(null,new cljs.core.Keyword(null,"rating","rating",144173662),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(1),null,(4),null,(3),null,(2),null,(5),null], null), null)),untangled.ui.forms.textarea_input.call(null,new cljs.core.Keyword(null,"essay","essay",1994718400))], null);
});})(x705956_706064))
;

/** @nocollapse */
x705956_706064.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x705956_706064.om$next$IQuery$query$arity$1 = ((function (x705956_706064){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_root_key,untangled.ui.forms.form_key,new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"mood","mood",-616134094),new cljs.core.Keyword(null,"done?","done?",-1847001718),new cljs.core.Keyword(null,"rating","rating",144173662),new cljs.core.Keyword(null,"essay","essay",1994718400)], null);
});})(x705956_706064))
;

/** @nocollapse */
x705956_706064.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x705956_706064.om$next$Ident$ident$arity$2 = ((function (x705956_706064){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sink","by-id","sink/by-id",-2141655086),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x705956_706064))
;


var x705970_706076 = untangled.ui.Forms__09_Predefined_Fields.KitchenSink.prototype;

x705970_706076.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x705970_706076.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x705970_706076){
return (function (this$,params){
var this$__$1 = this;
return untangled.ui.forms.build_form.call(null,this$__$1,(function (){var or__27650__auto__ = params;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1)], null);
}
})());
});})(x705970_706076))
;


x705970_706076.untangled$ui$forms$IForm$ = cljs.core.PROTOCOL_SENTINEL;


x705970_706076.untangled$ui$forms$IForm$form_spec$arity$1 = ((function (x705970_706076){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.id_field.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098)),untangled.ui.forms.text_input.call(null,new cljs.core.Keyword(null,"text","text",-1790561697)),untangled.ui.forms.integer_input.call(null,new cljs.core.Keyword(null,"number","number",1570378438)),untangled.ui.forms.dropdown_input.call(null,new cljs.core.Keyword(null,"mood","mood",-616134094),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.option.call(null,new cljs.core.Keyword(null,"happy","happy",2026698856),"Happy"),untangled.ui.forms.option.call(null,new cljs.core.Keyword(null,"sad","sad",427137188),"Sad")], null)),untangled.ui.forms.checkbox_input.call(null,new cljs.core.Keyword(null,"done?","done?",-1847001718)),untangled.ui.forms.radio_input.call(null,new cljs.core.Keyword(null,"rating","rating",144173662),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(1),null,(4),null,(3),null,(2),null,(5),null], null), null)),untangled.ui.forms.textarea_input.call(null,new cljs.core.Keyword(null,"essay","essay",1994718400))], null);
});})(x705970_706076))
;


x705970_706076.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x705970_706076.om$next$IQuery$query$arity$1 = ((function (x705970_706076){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_root_key,untangled.ui.forms.form_key,new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"mood","mood",-616134094),new cljs.core.Keyword(null,"done?","done?",-1847001718),new cljs.core.Keyword(null,"rating","rating",144173662),new cljs.core.Keyword(null,"essay","essay",1994718400)], null);
});})(x705970_706076))
;


x705970_706076.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x705970_706076.om$next$Ident$ident$arity$2 = ((function (x705970_706076){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sink","by-id","sink/by-id",-2141655086),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x705970_706076))
;


untangled.ui.Forms__09_Predefined_Fields.KitchenSink.cljs$lang$type = true;

untangled.ui.Forms__09_Predefined_Fields.KitchenSink.cljs$lang$ctorStr = "untangled.ui.Forms--09-Predefined-Fields/KitchenSink";

untangled.ui.Forms__09_Predefined_Fields.KitchenSink.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.Forms--09-Predefined-Fields/KitchenSink");
});
untangled.ui.Forms__09_Predefined_Fields.ui_sink = om.next.factory.call(null,untangled.ui.Forms__09_Predefined_Fields.KitchenSink,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
if(typeof untangled.ui.Forms__09_Predefined_Fields.CommitRoot !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__09_Predefined_Fields.CommitRoot = (function untangled$ui$Forms__09_Predefined_Fields$CommitRoot(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.Forms__09_Predefined_Fields.CommitRoot.prototype = goog.object.clone(React.Component.prototype);
}

var x706098_706121 = untangled.ui.Forms__09_Predefined_Fields.CommitRoot.prototype;
x706098_706121.componentWillUpdate = ((function (x706098_706121){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___706125 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___706126 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___706125,next_ident__29856__auto___706126)){
var idxr__29857__auto___706131 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___706131 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___706131),((function (idxr__29857__auto___706131,ident__29855__auto___706125,next_ident__29856__auto___706126,this__29851__auto__,x706098_706121){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___706125], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___706126], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___706131,ident__29855__auto___706125,next_ident__29856__auto___706126,this__29851__auto__,x706098_706121))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x706098_706121))
;

x706098_706121.shouldComponentUpdate = ((function (x706098_706121){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__706102 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__706102);
} else {
return G__706102;
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
});})(x706098_706121))
;

x706098_706121.componentWillUnmount = ((function (x706098_706121){
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
});})(x706098_706121))
;

x706098_706121.componentDidUpdate = ((function (x706098_706121){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x706098_706121))
;

x706098_706121.isMounted = ((function (x706098_706121){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x706098_706121))
;

x706098_706121.componentWillMount = ((function (x706098_706121){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x706098_706121))
;

x706098_706121.render = ((function (x706098_706121){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_706108 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_706109 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_706110 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_706111 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_706112 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var map__706113 = om.next.props.call(null,this$);
var map__706113__$1 = ((((!((map__706113 == null)))?((((map__706113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706113):map__706113);
var react_key = cljs.core.get.call(null,map__706113__$1,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664));
var sink = cljs.core.get.call(null,map__706113__$1,new cljs.core.Keyword(null,"sink","sink",186835933));
return om.dom.div.call(null,({"key": react_key}),untangled.ui.Forms__09_Predefined_Fields.ui_sink.call(null,sink));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_706112;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_706111;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_706110;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_706109;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_706108;
}});})(x706098_706121))
;


untangled.ui.Forms__09_Predefined_Fields.CommitRoot.prototype.constructor = untangled.ui.Forms__09_Predefined_Fields.CommitRoot;

untangled.ui.Forms__09_Predefined_Fields.CommitRoot.prototype.constructor.displayName = "untangled.ui.Forms--09-Predefined-Fields/CommitRoot";

untangled.ui.Forms__09_Predefined_Fields.CommitRoot.prototype.om$isComponent = true;

var x706116_706178 = untangled.ui.Forms__09_Predefined_Fields.CommitRoot;
/** @nocollapse */
x706116_706178.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706116_706178.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x706116_706178){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sink","sink",186835933),untangled.client.core.initial_state.call(null,untangled.ui.Forms__09_Predefined_Fields.KitchenSink,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1)], null))], null);
});})(x706116_706178))
;

/** @nocollapse */
x706116_706178.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706116_706178.om$next$IQuery$query$arity$1 = ((function (x706116_706178){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sink","sink",186835933),om.next.get_query.call(null,untangled.ui.Forms__09_Predefined_Fields.KitchenSink)], null)], null);
});})(x706116_706178))
;


var x706117_706189 = untangled.ui.Forms__09_Predefined_Fields.CommitRoot.prototype;

x706117_706189.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x706117_706189.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x706117_706189){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sink","sink",186835933),untangled.client.core.initial_state.call(null,untangled.ui.Forms__09_Predefined_Fields.KitchenSink,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1)], null))], null);
});})(x706117_706189))
;


x706117_706189.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x706117_706189.om$next$IQuery$query$arity$1 = ((function (x706117_706189){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sink","sink",186835933),om.next.get_query.call(null,untangled.ui.Forms__09_Predefined_Fields.KitchenSink)], null)], null);
});})(x706117_706189))
;


untangled.ui.Forms__09_Predefined_Fields.CommitRoot.cljs$lang$type = true;

untangled.ui.Forms__09_Predefined_Fields.CommitRoot.cljs$lang$ctorStr = "untangled.ui.Forms--09-Predefined-Fields/CommitRoot";

untangled.ui.Forms__09_Predefined_Fields.CommitRoot.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.Forms--09-Predefined-Fields/CommitRoot");
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.Forms__09_Predefined_Fields","untangled.ui.Forms__09_Predefined_Fields",488276664),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"# Forms \u2013 All Built-in Field Types\n\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui ^:once KitchenSink\n  static uc/InitialAppState\n  (initial-state [this params] (f/build-form this (or params {:db/id 1})))\n  static f/IForm\n  (form-spec [this] [(f/id-field :db/id)\n                     (f/text-input :text)\n                     (f/integer-input :number)\n                     (f/dropdown-input :mood [(f/option :happy \"Happy\") (f/option :sad \"Sad\")])\n                     (f/checkbox-input :done?)\n                     (f/radio-input :rating #{1 2 3 4 5})\n                     (f/textarea-input :essay)])\n  static om/IQuery\n  (query [this] [f/form-root-key f/form-key :db/id :text :number :mood :done? :rating :essay])\n  static om/Ident\n  (ident [this props] [:sink/by-id (:db/id props)])\n  Object\n  (render [this]\n    (let [props (om/props this)]\n      (dom/div #js {:className \"form-horizontal\"}\n        (field-with-label this props :text \"Text:\")\n        (field-with-label this props :number \"Number:\")\n        (field-with-label this props :mood \"Mood:\")\n        (field-with-label this props :done? \"Done:\")\n        (field-with-label this props :essay \"Essay:\" :rows 10 :maxLength 100)\n        (dom/div #js {:className \"form-group\"}\n          (dom/label #js {:className \"col-sm-2\" :htmlFor :rating} \"Rating:\")\n          (dom/div #js {:className \"col-sm-10\"}\n            (f/form-field this props :rating :choice 1 :label 1)\n            (f/form-field this props :rating :choice 2 :label 2)\n            (f/form-field this props :rating :choice 3 :label 3)\n            (f/form-field this props :rating :choice 4 :label 4)\n            (f/form-field this props :rating :choice 5 :label 5) ))))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.Forms__09_Predefined_Fields","untangled.ui.Forms__09_Predefined_Fields",488276664),new cljs.core.Keyword(null,"form-changes","form-changes",938131149)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"form-changes",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,(function (state_atom__37612__auto__,node__37613__auto__){
untangled.client.core.mount.call(null,untangled.client.core.new_untangled_client.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),state_atom__37612__auto__),untangled.ui.Forms__09_Predefined_Fields.CommitRoot,node__37613__auto__);

return setTimeout((function (){
return cljs.core.swap_BANG_.call(null,state_atom__37612__auto__,cljs.core.assoc,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));
}),(1000));
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),false], null)], null));
})], null));

//# sourceMappingURL=Forms__09_Predefined_Fields.js.map?rel=1489703354448